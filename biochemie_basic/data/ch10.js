/* ============================================================
   Chapter 10 -- Vzájemné vztahy v intermediárním metabolismu
                 a regulační mechanismy
   Interrelationships in intermediary metabolism and regulatory
   mechanisms / 中间代谢的相互关系与调节机制
   Source: Biochemie - Zakladni kurz, pp. 218-228
   All 11 pages read directly from the page scans in extracted_full_ch10/
   (no drafting agent was used for this chapter -- pages were read and
   nodes written in a single pass, 2026-08-06). 26 nodes, 10-1 .. 10-26.
   This is the closing chapter of the book; p.228 ends with the icosanoid
   structures and the literature list follows outside this page range.
   Independent verification pass (re-reading scans against final content,
   HANDOFF.md sec.8) has NOT been run yet.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "10-1",
  chapter: 10,
  section: "10.1",
  czTitle: "Intermediární metabolismus — katabolismus, anabolismus a čtyři funkce",
  enTitle: "Intermediary metabolism — catabolism, anabolism and the four functions",
  cnTitle: "中间代谢——分解代谢、合成代谢与四项功能",
  pages: [218],
  coverage: "full",
  coverageNote: "The §10.1 heading and its first two paragraphs on p.218 read in full. The definition is given in the book's own words -- intermediary metabolism is the sum of MUTUALLY STRICTLY COORDINATED reactions running in a living cell, and that qualifier is what the whole chapter then unpacks. All four lettered functions a)-d) were read directly from the scan and are reproduced complete and in order, as is the book's note that anabolic reactions include the formation of the organism's own storage substances (cross-referenced to kap. 6.1.3).",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "Intermediary metabolism is defined as the sum of mutually STRICTLY COORDINATED reactions running in a living cell. That word 'coordinated' is the premise of the whole chapter — §10.1 shows how the pathways connect and §10.2 shows what enforces the coordination. The degradative part of the metabolic reactions is called catabolism; the sum of the synthetic reactions constitutes anabolism, and the book adds that anabolic reactions also include the reactions by which the organism's own storage substances are formed (kap. 6.1.3) — so storing glycogen or fat is anabolism, not a separate category. The function of metabolism is then given as four items: (a) to obtain chemical energy from nutrient molecules or from solar radiation; (b) to convert exogenous substances into building units or precursors of the cell's own macromolecules; (c) to synthesize from these precursors proteins, nucleic acids, lipids and other cell components; (d) to synthesize and degrade the molecules needed for the specific functions of the cell. Note the structure of that list: (a) is energy, (b) and (c) are the two halves of construction — first make the parts, then assemble them — and (d) is the turnover of functional molecules, which explicitly includes degradation as a function in its own right, not merely as a source of energy or parts.",
    cn: "中间代谢被定义为在活细胞中进行的、**彼此严格协调**的全部反应之总和。「协调」这个词是全章的前提——§10.1展示各条途径如何相互连接，§10.2则展示是什么在强制实现这种协调。代谢反应中的降解部分称为分解代谢；合成反应的总和构成合成代谢，教材补充说合成代谢反应也包括生成机体自身贮存物质的那些反应（第6.1.3节）——因此贮存糖原或脂肪属于合成代谢，而非另立一类。随后代谢的功能被列为四项：(a)从养分分子或太阳辐射中获取化学能；(b)把外源物质转变为细胞自身大分子的构件或前体；(c)由这些前体合成蛋白质、核酸、脂质及其他细胞组分；(d)合成与降解细胞特定功能所需的分子。注意这个清单的结构：(a)是能量，(b)与(c)是建造的两半——先造零件、再行组装——而(d)是功能性分子的周转，它明确把降解本身当作一项独立的功能，而不仅仅是能量或零件的来源。"
  },
  points: [
    { cz: "intermediární metabolismus", en: "Intermediary metabolism means the sum of mutually STRICTLY COORDINATED reactions running in a living cell. The emphasis on coordination is deliberate and sets up §10.2 on regulation.", cn: "中间代谢指在活细胞中进行的、**彼此严格协调**的全部反应之总和。对协调的强调是有意为之，为§10.2的调节内容作铺垫。" },
    { cz: "katabolismus vs anabolismus", en: "The degradative part of the metabolic reactions is called catabolism; the sum of the synthetic reactions constitutes anabolism.", cn: "代谢反应中的降解部分称为分解代谢；合成反应的总和构成合成代谢。" },
    { cz: "zásobní látky patří k anabolismu", en: "Anabolic reactions include also the reactions by which the organism's own storage substances are formed (kap. 6.1.3). Laying down glycogen or fat is therefore anabolism, not a third category.", cn: "合成代谢反应也包括生成机体自身贮存物质的那些反应（第6.1.3节）。因此沉积糖原或脂肪属于合成代谢，而不是第三类。" },
    { cz: "a) získávat chemickou energii", en: "Function (a): to obtain chemical energy from nutrient molecules or from solar radiation. The mention of solar radiation keeps the definition valid for the photoautotrophs of chapter 9.", cn: "功能(a)：从养分分子或太阳辐射中获取化学能。提及太阳辐射使这一定义对第9章的光合自养生物同样成立。" },
    { cz: "b) přeměňovat exogenní látky na stavební jednotky", en: "Function (b): to convert exogenous substances into building units or precursors of the cell's OWN macromolecules. The point is the conversion from foreign to own, not merely the uptake.", cn: "功能(b)：把外源物质转变为细胞**自身**大分子的构件或前体。要点在于由外来到自有的转变，而不仅仅是摄取。" },
    { cz: "c) syntetizovat z prekurzorů makromolekuly", en: "Function (c): to synthesize from these precursors proteins, nucleic acids, lipids and other cell components.", cn: "功能(c)：由这些前体合成蛋白质、核酸、脂质及其他细胞组分。" },
    { cz: "d) syntetizovat a odbourávat funkční molekuly", en: "Function (d): to synthesize AND degrade the molecules needed for the specific functions of the cell. Degradation appears here as a function in its own right — turnover — not just as a route to energy.", cn: "功能(d)：合成**并**降解细胞特定功能所需的分子。降解在此作为一项独立的功能——周转——出现，而不只是获取能量的途径。" }
  ],
  terms: [
    { cz: "intermediární metabolismus", en: "intermediary metabolism", cn: "中间代谢", def_en: "The sum of the mutually strictly coordinated reactions running in a living cell; the subject of chapter 10.", def_cn: "活细胞中进行的、彼此严格协调的全部反应之总和；第10章的主题。" },
    { cz: "katabolismus", en: "catabolism", cn: "分解代谢", def_en: "The degradative part of the metabolic reactions; produces ATP.", def_cn: "代谢反应中的降解部分；产生ATP。" },
    { cz: "anabolismus", en: "anabolism", cn: "合成代谢", def_en: "The sum of the synthetic reactions, including the formation of the organism's own storage substances; requires energy and consumes ATP.", def_cn: "合成反应的总和，包括机体自身贮存物质的生成；需要能量并消耗ATP。" },
    { cz: "zásobní látky", en: "storage substances", cn: "贮存物质", def_en: "Glycogen, fats and the like; their formation counts as anabolism per this chapter's own definition (kap. 6.1.3).", def_cn: "糖原、脂肪之类；按本章自身的定义，其生成属于合成代谢（第6.1.3节）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which of the four listed functions of metabolism explicitly includes DEGRADATION as a function in its own right?",
      q_cn: "所列代谢四项功能中，哪一项明确把**降解**当作一项独立的功能？",
      options: [
        "(a) obtaining chemical energy from nutrients or solar radiation",
        "(b) converting exogenous substances into building units",
        "(c) synthesizing macromolecules from precursors",
        "(d) synthesizing and degrading the molecules needed for the cell's specific functions"
      ],
      answer: 3,
      why_en: "Item (d) is the only one that names degradation alongside synthesis. Item (a) uses degradation only as a means to energy; (b) and (c) are purely constructive. (d) is about turnover of functional molecules.",
      why_cn: "第(d)项是唯一把降解与合成并列点名的一项。第(a)项只把降解当作获取能量的手段；(b)与(c)纯属建造性质。(d)讲的是功能性分子的周转。"
    },
    {
      type: "short",
      q_en: "Is the formation of glycogen catabolism or anabolism, according to this chapter?",
      q_cn: "根据本章，糖原的生成属于分解代谢还是合成代谢？",
      accept: ["anabolism", "anabolic", "synthetic"],
      answer_en: "Anabolism. The book states explicitly that anabolic reactions include also the reactions by which the organism's own storage substances are formed (kap. 6.1.3).",
      answer_cn: "合成代谢。教材明确指出，合成代谢反应也包括生成机体自身贮存物质的那些反应（第6.1.3节）。"
    }
  ],
  oral: {
    q_en: "Define intermediary metabolism and state what metabolism is for.",
    q_cn: "请定义中间代谢，并说明代谢是做什么用的。",
    model_en: "Intermediary metabolism is the sum of the reactions running in a living cell — but the textbook's definition adds a qualifier that carries the whole chapter: those reactions are mutually strictly coordinated. That is the claim the rest of the chapter has to make good on, first by showing where the pathways connect and then by showing what enforces the coordination. Within that whole, the degradative reactions are catabolism and the synthetic ones are anabolism, and note that laying down storage substances — glycogen, fat — counts as anabolism, not as some third thing. As for what metabolism is for, the book gives four functions. First, obtaining chemical energy, either from nutrient molecules or from sunlight, which keeps the definition valid for the photoautotrophs of the previous chapter. Second, converting exogenous material into the building units or precursors of the cell's own macromolecules. Third, assembling those precursors into proteins, nucleic acids, lipids and other cell components. And fourth, synthesizing and degrading the molecules a particular cell needs for its specific functions. I'd point out the structure there: two and three are the two halves of construction, make the parts then assemble them, and four names degradation as a function in its own right — turnover — not merely as a way of getting energy.",
    checklist: [
      "Defined intermediary metabolism as the sum of mutually strictly coordinated cellular reactions",
      "Distinguished catabolism from anabolism",
      "Noted that formation of storage substances counts as anabolism",
      "Listed all four functions (a)–(d) in order",
      "Noted that solar radiation is included as an energy source in (a)",
      "Observed that (d) treats degradation as a function in its own right"
    ]
  }
},

{
  id: "10-2",
  chapter: 10,
  section: "10.1",
  czTitle: "Tři fáze katabolismu a tři fáze biosyntézy",
  enTitle: "The three phases of catabolism and the three phases of biosynthesis",
  cnTitle: "分解代谢的三个阶段与生物合成的三个阶段",
  pages: [218],
  coverage: "full",
  coverageNote: "The middle of p.218 read in full. Both three-phase schemes are reproduced with the book's own examples: for catabolism, polysaccharides->monosaccharides / lipids->fatty acids + glycerol / proteins->amino acids in phase 1, everything converging on acetyl-CoA in phase 2, oxidation to CO2 and water in phase 3; for biosynthesis, the protein example the book itself gives (oxo acids -> alpha-amino acids -> the body's own proteins). Note that the book's biosynthesis paragraph numbers its phases slightly loosely -- it speaks of small precursor molecules from the third phase of catabolism, then names the second and third anabolic phases, and in its protein example calls oxo acid formation the FIRST phase; this is reproduced as printed and discussed in the points rather than tidied up.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "Every catabolic and anabolic pathway consists of a series of consecutive enzyme-catalysed reactions (Obr. 6.2). The degradation of bulky nutrients — above all saccharides, lipids and proteins — runs in THREE phases. In the first phase the large molecules are cleaved into their building units: polysaccharides to monosaccharides, lipids to fatty acids and glycerol, proteins to amino acids. In the second phase these products are converted into a small number of still smaller intermediates: saccharides and glycerol change, via pyruvate, into acetyl-CoA; fatty acids are degraded by β-oxidation also to acetyl-CoA; and similarly most amino acids. Finally, in the third phase, the products of the second phase are oxidized all the way to carbon dioxide and water. The shape of this is a funnel — three classes of nutrient in, one common intermediate in the middle, one common oxidative endpoint. Biosynthesis likewise has three phases. From the small precursor molecules produced in the third phase of catabolism, or taken up from the environment (water, carbon dioxide, ammonia and so on), the second phase of the anabolic reactions forms the building units of macromolecules, and in the third phase the cell's own macromolecules arise. The book's worked example is protein biosynthesis: in the first phase oxo acids are formed, in the second they are converted into α-amino acids — the building blocks of proteins — and from those amino acids the body's own proteins are synthesized.",
    cn: "每一条分解代谢与合成代谢途径都由一系列连续的酶催化反应组成（图6.2）。大分子养分——主要是糖类、脂质与蛋白质——的降解分**三个**阶段进行。第一阶段，大分子被裂解为各自的构件：多糖→单糖，脂质→脂肪酸与甘油，蛋白质→氨基酸。第二阶段，这些产物被转变为少数几种更小的中间体：糖类与甘油经丙酮酸变为乙酰CoA；脂肪酸经β-氧化同样降解为乙酰CoA；大多数氨基酸亦然。最后第三阶段，第二阶段的产物被一路氧化为二氧化碳和水。这个形状是一个漏斗——三类养分进入，中间是一个共同的中间体，末端是一个共同的氧化终点。生物合成同样有三个阶段。从分解代谢第三阶段产生的、或从环境中摄取的小分子前体（水、二氧化碳、氨等）出发，合成代谢反应的第二阶段形成大分子的构件，第三阶段则生成细胞自身的大分子。教材所举的实例是蛋白质的生物合成：第一阶段生成酮酸，第二阶段把它们转变为α-氨基酸——蛋白质的构件——再由这些氨基酸合成机体自身的蛋白质。"
  },
  points: [
    { cz: "sled enzymově katalyzovaných reakcí", en: "Every catabolic and anabolic pathway consists of a series of consecutive enzyme-catalysed reactions (Obr. 6.2). Nothing in metabolism happens in one step.", cn: "每一条分解代谢与合成代谢途径都由一系列连续的酶催化反应组成（图6.2）。代谢中没有任何事情是一步完成的。" },
    { cz: "1. fáze katabolismu: makromolekuly → stavební jednotky", en: "Catabolic phase 1: large molecules are cleaved into their building units — polysaccharides to monosaccharides, lipids to fatty acids and glycerol, proteins to amino acids.", cn: "分解代谢第1阶段：大分子被裂解为各自的构件——多糖→单糖，脂质→脂肪酸与甘油，蛋白质→氨基酸。" },
    { cz: "2. fáze: sbíhá se na acetyl-CoA", en: "Catabolic phase 2: these products are converted into a small number of still smaller intermediates. Saccharides and glycerol go via pyruvate to acetyl-CoA; fatty acids by β-oxidation also to acetyl-CoA; and similarly most amino acids. This is the funnel.", cn: "分解代谢第2阶段：这些产物被转变为少数几种更小的中间体。糖类与甘油经丙酮酸到乙酰CoA；脂肪酸经β-氧化同样到乙酰CoA；大多数氨基酸亦然。这就是那个漏斗。" },
    { cz: "3. fáze: oxidace až na CO₂ a vodu", en: "Catabolic phase 3: the products of the second phase are oxidized up to carbon dioxide and water. One common endpoint for all three nutrient classes.", cn: "分解代谢第3阶段：第二阶段的产物被氧化直至二氧化碳与水。三类养分共有一个终点。" },
    { cz: "biosyntéza také ve třech fázích", en: "Biosynthesis likewise has three phases. Its inputs are the small precursor molecules produced in the third phase of catabolism, or taken up from the environment — the book names water, carbon dioxide and ammonia.", cn: "生物合成同样有三个阶段。其输入是分解代谢第三阶段产生的、或从环境中摄取的小分子前体——教材点名的是水、二氧化碳与氨。" },
    { cz: "2. a 3. anabolická fáze", en: "In the second phase of the anabolic reactions the building units of macromolecules are formed; in the third phase the cell's own macromolecules arise.", cn: "在合成代谢反应的第二阶段形成大分子的构件；第三阶段则生成细胞自身的大分子。" },
    { cz: "příklad: oxokyseliny → α-aminokyseliny → proteiny", en: "The worked example is protein biosynthesis: in the first phase oxo acids are formed, in the second they are converted into α-amino acids, the building blocks of proteins, and from the amino acids the body's own proteins are synthesized. Note that the book's own numbering here starts from the oxo acids as 'the first phase', which does not line up exactly with the paragraph's earlier framing — reproduced as printed.", cn: "所举实例是蛋白质的生物合成：第一阶段生成酮酸，第二阶段把它们转变为α-氨基酸（蛋白质的构件），再由这些氨基酸合成机体自身的蛋白质。注意教材此处自己的编号是把酮酸的生成算作「第一阶段」，这与本段前文的框架并不完全对齐——此处按原文照录。" },
    { cz: "symetrie schémat", en: "The two schemes mirror each other: catabolism narrows three nutrient classes down to one intermediate and then to CO₂ + H₂O; biosynthesis widens small precursors out into building units and then into macromolecules. That symmetry is exactly what the next node then qualifies.", cn: "两个方案彼此镜像：分解代谢把三类养分收窄为一个中间体、再收至CO₂+H₂O；生物合成则把小分子前体扩展为构件、再扩展为大分子。而这种对称性恰恰是下一节点要加以限定的。" }
  ],
  terms: [
    { cz: "acetyl-CoA", en: "acetyl-CoA", cn: "乙酰CoA", def_en: "The common intermediate at the waist of the catabolic funnel; saccharides and glycerol reach it via pyruvate, fatty acids via β-oxidation, most amino acids likewise.", def_cn: "分解代谢漏斗腰部的共同中间体；糖类与甘油经丙酮酸抵达，脂肪酸经β-氧化抵达，大多数氨基酸亦然。" },
    { cz: "β-oxidace", en: "β-oxidation", cn: "β-氧化", def_en: "The pathway degrading fatty acids to acetyl-CoA two carbons at a time (kap. 8.4).", def_cn: "每次以两个碳为单位把脂肪酸降解为乙酰CoA的途径（第8.4节）。" },
    { cz: "oxokyselina", en: "oxo acid (keto acid)", cn: "酮酸", def_en: "The carbon skeleton formed in the first phase of amino acid biosynthesis; converted to an α-amino acid in the second phase, typically by transamination.", def_cn: "氨基酸生物合成第一阶段所形成的碳骨架；在第二阶段（通常经转氨作用）转变为α-氨基酸。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the second phase of catabolism, what do saccharides, fatty acids and most amino acids all converge on?",
      q_cn: "在分解代谢的第二阶段，糖类、脂肪酸和大多数氨基酸最终都汇聚到什么？",
      options: [
        "Pyruvate",
        "Acetyl-CoA",
        "Citrate",
        "CO₂ and water"
      ],
      answer: 1,
      why_en: "All three converge on acetyl-CoA: saccharides and glycerol via pyruvate, fatty acids via β-oxidation, most amino acids likewise. Pyruvate is a way station for only some of them; CO₂ and water are the third phase, not the second.",
      why_cn: "三者都汇聚到乙酰CoA：糖类与甘油经丙酮酸，脂肪酸经β-氧化，大多数氨基酸亦然。丙酮酸只是其中一部分的中转站；CO₂与水属于第三阶段而非第二阶段。"
    },
    {
      type: "short",
      q_en: "Describe the three phases of catabolism, with one example of each.",
      q_cn: "描述分解代谢的三个阶段，各举一例。",
      accept: ["building unit", "monosaccharide", "amino acid", "acetyl-CoA", "CO2", "water", "oxidiz"],
      answer_en: "Phase 1: large molecules cleaved to building units (polysaccharides → monosaccharides). Phase 2: those converted to a small number of smaller intermediates (fatty acids → acetyl-CoA by β-oxidation). Phase 3: those oxidized to CO₂ and water.",
      answer_cn: "第1阶段：大分子被裂解为构件（多糖→单糖）。第2阶段：这些产物转变为少数更小的中间体（脂肪酸经β-氧化→乙酰CoA）。第3阶段：这些中间体被氧化为CO₂与水。"
    }
  ],
  oral: {
    q_en: "How does the textbook organise catabolism and biosynthesis?",
    q_cn: "教材如何组织分解代谢与生物合成？",
    model_en: "Both in three phases, and the two schemes mirror each other. Catabolism is a funnel. In the first phase the bulky nutrients are cleaved into their building units — polysaccharides into monosaccharides, lipids into fatty acids and glycerol, proteins into amino acids. In the second phase all of those are converted into a very small number of still smaller intermediates, and the destination is essentially the same for all three classes: sugars and glycerol arrive via pyruvate at acetyl-CoA, fatty acids arrive at acetyl-CoA by beta-oxidation, and most amino acids do too. In the third phase, those are oxidized all the way to carbon dioxide and water. So: three inputs, one waist, one exit. Biosynthesis runs the other way. It starts from the small precursors produced in that third catabolic phase, or taken straight from the environment — water, carbon dioxide, ammonia. Then building units of macromolecules are formed, and finally the cell's own macromolecules. The book's example is protein synthesis: first oxo acids, then those become alpha-amino acids, then the body's own proteins. But — and this is the point the next paragraph makes — the mirror symmetry is only apparent. The two directions do not use the same route.",
    checklist: [
      "Gave all three catabolic phases with examples",
      "Named acetyl-CoA as the common second-phase intermediate for all three nutrient classes",
      "Gave CO₂ and water as the third-phase endpoint",
      "Gave the three biosynthetic phases and named the environmental inputs (water, CO₂, ammonia)",
      "Used the book's protein example: oxo acids → α-amino acids → own proteins",
      "Flagged that the apparent symmetry is qualified by the next paragraph"
    ]
  }
},

{
  id: "10-3",
  chapter: 10,
  section: "10.1",
  czTitle: "Proč katabolismus není obrácený anabolismus",
  enTitle: "Why catabolism is not anabolism run backwards",
  cnTitle: "分解代谢为何不是合成代谢的倒放",
  pages: [218],
  coverage: "full",
  coverageNote: "The two short paragraphs on p.218 following the three-phase schemes, read in full. Both of the book's reasons are reproduced -- the energetic one (catabolism produces ATP, anabolism requires energy and consumes ATP) and the topological one (the two are localized in different parts of the eukaryotic cell) -- together with the CONSEQUENCE the book draws from each, namely that separate pathways can be regulated independently and that separation into different organelles lets both run simultaneously and independently. The consequence, not just the fact, is the substance of the passage.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "Catabolic and anabolic processes between a precursor and a final product are NOT mutually reversible: they run by different routes. The book gives the reason as, above all, the fundamental differences in their energy demands. Whereas catabolic processes PRODUCE ATP, anabolic reactions REQUIRE energy and consume ATP in their course. A pathway optimised to release energy cannot simply be reversed to store it — the thermodynamics that make the catabolic direction favourable are exactly what make the reverse unfavourable, so the anabolic route has to bypass those steps with different, ATP-driven chemistry. The book then draws the consequence, which is the real point: the fact that these pathways are SEPARATE has the advantage that they can be regulated INDEPENDENTLY. If synthesis were literally degradation reversed, any signal that accelerated one would necessarily accelerate the other, and the cell would have no way to choose. A second, parallel separation is spatial: catabolic and anabolic reactions are usually also localized in different parts of the eukaryotic cell, and the separation of processes into different organelles makes it possible for both to run simultaneously and, again, independently. Two separations — chemical and spatial — with the same purpose: independent control. Chapter 10 will return to both, the first under 'controlling reactions' and the second under 'compartmentation' in §10.2.",
    cn: "在前体与终产物之间，分解代谢过程与合成代谢过程**并非**彼此可逆：它们走不同的路线。教材给出的理由首先是二者在能量需求上的根本差异。分解代谢过程**产生**ATP，而合成代谢反应**需要**能量并在其进行过程中消耗ATP。一条为释放能量而优化的途径，不可能简单地倒过来用于储存能量——使分解方向有利的那些热力学条件，恰恰使其逆向不利，因此合成路线必须以不同的、由ATP驱动的化学绕开那些步骤。随后教材导出了真正的要点：这些途径彼此**分离**这一事实带来的好处是，它们可以被**独立**调节。倘若合成就是降解的字面倒放，那么任何加速其一的信号都必然同时加速另一个，细胞将无从取舍。第二种平行的分离是空间上的：分解与合成反应在真核细胞中通常也定位于不同部位，而把过程分置于不同细胞器，使二者得以同时进行，并且同样是独立地进行。两种分离——化学的与空间的——目的相同：独立调控。第10章后文会再回到这两点，前者见于「调控反应」，后者见于§10.2的「区室化」。"
  },
  points: [
    { cz: "nejsou vzájemně reversní", en: "Catabolic and anabolic processes between precursor and final product are NOT mutually reversible; they run by different routes.", cn: "在前体与终产物之间，分解代谢与合成代谢过程**并非**彼此可逆；它们走不同的路线。" },
    { cz: "důvod: energetické nároky", en: "The reason is given as, above all, the fundamental differences in their energy demands: catabolic processes PRODUCE ATP, anabolic reactions REQUIRE energy and consume ATP in their course.", cn: "所给的理由首先是二者在能量需求上的根本差异：分解代谢过程**产生**ATP，合成代谢反应**需要**能量并在进行中消耗ATP。" },
    { cz: "výhoda: nezávislá regulace", en: "The fact that the two pathways are separate has the ADVANTAGE that they can be regulated independently. This is the substance of the passage — separateness is not an accident but a design feature.", cn: "两条途径彼此分离这一事实带来的**好处**是，它们可以被独立调节。这才是本段的实质——分离并非偶然，而是一种设计特征。" },
    { cz: "prostorové oddělení v organelách", en: "Catabolic and anabolic reactions are also usually localized in different parts of the eukaryotic cell. The separation of processes into different organelles makes it possible for both to run simultaneously and independently.", cn: "分解与合成反应在真核细胞中通常也定位于不同部位。把过程分置于不同细胞器，使二者得以同时且独立地进行。" },
    { cz: "dvě oddělení, jeden účel", en: "There are therefore two separations — chemical (different routes) and spatial (different organelles) — serving the same purpose: independent control. Both are picked up again in §10.2, as the 'controlling reaction' and as 'compartmentation'.", cn: "因此存在两种分离——化学上的（不同路线）与空间上的（不同细胞器）——服务于同一目的：独立调控。二者在§10.2中分别以「调控反应」与「区室化」再度出现。" }
  ],
  terms: [
    { cz: "nevratná reakce", en: "irreversible reaction", cn: "不可逆反应", def_en: "A step whose thermodynamics strongly favour one direction; it cannot be used in reverse and must be bypassed by different chemistry, which is why catabolic and anabolic routes diverge.", def_cn: "热力学强烈偏向一个方向的步骤；它无法反向使用，必须以不同的化学过程绕开，这正是分解与合成路线分道扬镳的原因。" },
    { cz: "kompartmentace", en: "compartmentation", cn: "区室化", def_en: "Localisation of different processes in different cellular compartments, so that opposed pathways can run simultaneously and independently; treated as a regulatory mechanism in §10.2.", def_cn: "把不同过程定位于不同细胞区室，使相反的途径得以同时且独立地进行；在§10.2中被当作一种调节机制处理。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What ADVANTAGE does the book attribute to catabolic and anabolic pathways being separate rather than mutually reversible?",
      q_cn: "教材认为分解代谢与合成代谢途径彼此分离（而非互为可逆）带来什么**好处**？",
      options: [
        "It reduces the number of enzymes the cell must encode",
        "It allows them to be regulated independently",
        "It allows both to produce ATP",
        "It removes the need for compartmentation"
      ],
      answer: 1,
      why_en: "The book states this directly: the fact that these pathways are separate has the advantage that they can be regulated independently. Separateness costs the cell extra enzymes rather than saving them, and compartmentation is presented as a second, parallel separation with the same goal, not as something made unnecessary.",
      why_cn: "教材直接指出：这些途径彼此分离这一事实带来的好处是它们可以被独立调节。分离让细胞多花酶而非省酶；区室化则被呈现为目标相同的第二种平行分离，而不是被它取消的东西。"
    },
    {
      type: "short",
      q_en: "Give the energetic reason why a catabolic pathway cannot simply be run in reverse for biosynthesis.",
      q_cn: "请给出「分解代谢途径不能简单倒过来用于生物合成」的能量学理由。",
      accept: ["produce ATP", "consume ATP", "require energy", "energy demand"],
      answer_en: "Because their energy demands differ fundamentally: catabolic processes produce ATP, whereas anabolic reactions require energy and consume ATP. The thermodynamics that make the catabolic direction favourable make the reverse unfavourable.",
      answer_cn: "因为二者的能量需求根本不同：分解代谢过程产生ATP，而合成代谢反应需要能量并消耗ATP。使分解方向有利的热力学条件，恰恰使其逆向不利。"
    }
  ],
  oral: {
    q_en: "Why is biosynthesis not simply degradation run backwards?",
    q_cn: "生物合成为何不是简单地把降解倒放？",
    model_en: "Because the two directions have fundamentally different energy demands, and because the cell has a strong reason to want them separate. On the energetics: catabolic processes produce ATP, anabolic ones require energy and spend ATP. The very thermodynamics that make a degradative step run downhill make the reverse step run uphill, so you cannot just push the same enzymes backwards — the anabolic route has to bypass those steps with different, ATP-driven chemistry. But the textbook then makes the point that really matters, which is not thermodynamic but regulatory: because the two pathways are separate, they can be regulated independently. If synthesis were literally degradation reversed, then any signal that sped one up would necessarily speed up the other, and the cell would have no way of choosing between building and burning. There is a second separation running in parallel, which is spatial: in eukaryotic cells the catabolic and anabolic reactions tend to sit in different organelles, and that lets both run at once, again independently. Two separations, chemical and spatial, both in the service of independent control — and both come back later in the chapter, as controlling reactions and as compartmentation.",
    checklist: [
      "Stated that the two are not mutually reversible and run by different routes",
      "Gave the energetic reason: catabolism produces ATP, anabolism consumes it",
      "Explained that the favourable direction thermodynamically forbids simple reversal",
      "Gave the book's stated advantage: independent regulation",
      "Explained why shared pathways could not be independently controlled",
      "Gave the spatial separation into organelles as a parallel mechanism with the same purpose"
    ]
  }
},

{
  id: "10-4",
  chapter: 10,
  section: "10.1",
  czTitle: "Křížová propojení, uzlové body, dynamická rovnováha a „pool\"",
  enTitle: "Cross-connections, nodal points, dynamic equilibrium and the 'pool'",
  cnTitle: "交叉连接、节点、动态平衡与「代谢库」",
  pages: [218, 219],
  coverage: "full",
  coverageNote: "The final paragraph of p.218 and the first paragraph of p.219, which the sentence about the mobilizable store runs across, read in full. The complete list of regulation-significant metabolites was read off the scan (acetyl-CoA, pyruvate, alpha-ketoglutarate, the reduced nicotinamide coenzymes NADH and NADPH, and ATP). Both quantitative claims were read as printed: concentrations of the order of mmol/l, and the calculation that the human body produces about 70 kg of ATP in 24 hours. The book's own quotation marks around 'dynamicke rovnovaze' and 'pool' are preserved, since it is signalling these as borrowed terms.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "Between the metabolic processes there exist diverse CROSS-CONNECTIONS. On one side compounds are formed, and in another phase of metabolism they are consumed; the organism is, in the book's phrase, in 'dynamic equilibrium'. The connection of metabolic processes occurs at certain NODAL POINTS — meaning that different processes have common intermediates. From the point of view of regulating cell metabolism, some metabolites have particular importance: acetyl-CoA, pyruvate, α-ketoglutarate, the reduced nicotinamide coenzymes NADH and NADPH, and ATP. What is significant about them is their MOBILIZABLE STORE, the so-called 'pool'. The book is careful about what a pool is and is not. It need not be a matter of a high concentration of the substance in question; what is important is the organism's ability to maintain its level at the desired level. The concentration of a given substance may be relatively low — of the order of mmol/l — but its TURNOVER is usually very rapid. The illustration given is memorable: it has been calculated that the human body produces about 70 kg of ATP in 24 hours. A standing pool of a few grams, turned over thousands of times a day. This is the conceptual heart of the whole section: metabolism is not a set of stocks but a set of flows, and what a regulatory system controls is the rate at which a small, constantly renewed pool is filled and drained.",
    cn: "各代谢过程之间存在多样的**交叉连接**。一方面化合物被生成，在代谢的另一阶段又被消耗；用教材的说法，机体处于「动态平衡」之中。代谢过程的连接发生在若干**节点**上——意思是不同的过程拥有共同的中间体。从调节细胞代谢的角度看，某些代谢物尤为重要：乙酰CoA、丙酮酸、α-酮戊二酸、还原型烟酰胺辅酶（NADH与NADPH）以及ATP。它们的重要之处在于其**可动员的贮量**，即所谓的「pool（代谢库）」。教材对「库」是什么、不是什么讲得很谨慎。它未必意味着该物质的浓度很高；重要的是机体把其水平维持在所需水平的能力。某种物质的浓度可能相当低——mmol/l量级——但其**周转**通常非常迅速。所举的例证令人难忘：据计算，人体在24小时内产生约70公斤ATP。存量不过几克，一天却周转数千次。这是整节内容的概念核心：代谢不是一组存量，而是一组流量；调节系统所控制的，是一个小而不断更新的库被充满和被排空的速率。"
  },
  points: [
    { cz: "křížová propojení", en: "Between metabolic processes there exist diverse cross-connections: on one side compounds are formed, and in another phase of metabolism they are consumed.", cn: "各代谢过程之间存在多样的交叉连接：一方面化合物被生成，在代谢的另一阶段又被消耗。" },
    { cz: "„dynamická rovnováha\"", en: "The organism is in what the book calls, in quotation marks, 'dynamic equilibrium' — a steady state maintained by opposing flows, not a static balance.", cn: "机体处于教材加引号称之为「动态平衡」的状态——由方向相反的流量维持的稳态，而非静止的平衡。" },
    { cz: "uzlové body = společné intermediáty", en: "The connection of metabolic processes occurs at certain nodal points, which means that different processes have COMMON INTERMEDIATES. A nodal point is defined by shared chemistry, not by anatomical location.", cn: "代谢过程的连接发生在若干节点上，意即不同的过程拥有**共同的中间体**。节点由共享的化学物质定义，而非由解剖位置定义。" },
    { cz: "šest klíčových metabolitů", en: "Metabolites of particular importance for the regulation of cell metabolism: acetyl-CoA, pyruvate, α-ketoglutarate, the reduced nicotinamide coenzymes NADH and NADPH, and ATP.", cn: "对细胞代谢调节尤为重要的代谢物：乙酰CoA、丙酮酸、α-酮戊二酸、还原型烟酰胺辅酶NADH与NADPH，以及ATP。" },
    { cz: "„pool\" = mobilizovatelná zásoba", en: "What is significant is their mobilizable store, the so-called 'pool'. The book puts the word in quotation marks as a borrowed term.", cn: "其重要之处在于可动员的贮量，即所谓的「pool（代谢库）」。教材把这个词加引号，标明是借用的术语。" },
    { cz: "nejde o vysokou koncentraci", en: "A pool need NOT be a high concentration of the substance; what matters is the organism's ability to maintain its level at the desired level. Concentrations may be relatively low, of the order of mmol/l.", cn: "一个「库」**未必**意味着该物质浓度高；要紧的是机体把其水平维持在所需水平的能力。浓度可以相当低，mmol/l量级。" },
    { cz: "70 kg ATP za 24 hodin", en: "Turnover is usually very rapid: it has been calculated that the human body produces about 70 kg of ATP in 24 hours. A small standing amount, cycled thousands of times a day.", cn: "周转通常非常迅速：据计算，人体在24小时内产生约70公斤ATP。存量很小，一天却循环数千次。" },
    { cz: "metabolismus je tok, ne zásoba", en: "The conceptual point: metabolism is a set of flows, not a set of stocks. What regulation controls is the RATE at which a small, constantly renewed pool is filled and drained — which is why §10.2 is about controlling reaction rates rather than about storing more of anything.", cn: "概念要点：代谢是一组流量，而非一组存量。调节所控制的是一个小而不断更新的库被充满与被排空的**速率**——这正是为何§10.2讲的是控制反应速率，而不是讲多贮存什么东西。" }
  ],
  terms: [
    { cz: "uzlový bod", en: "nodal point", cn: "节点", def_en: "A metabolite shared as an intermediate by two or more different processes; where pathways connect and therefore where regulation has leverage.", def_cn: "被两条或更多不同过程共享为中间体的代谢物；是途径相连之处，因而也是调节能够发力之处。" },
    { cz: "pool", en: "pool", cn: "代谢库", def_en: "The mobilizable store of a key metabolite. Defined by the ability to hold its level steady under rapid turnover, not by a high absolute concentration.", def_cn: "某关键代谢物的可动员贮量。它由「在快速周转下维持水平稳定的能力」来定义，而非由高的绝对浓度来定义。" },
    { cz: "dynamická rovnováha", en: "dynamic equilibrium", cn: "动态平衡", def_en: "A steady state maintained by continuous, balanced formation and consumption — the state the book says the organism is in.", def_cn: "由持续而平衡的生成与消耗所维持的稳态——教材所说机体所处的状态。" },
    { cz: "obrat (turnover)", en: "turnover", cn: "周转", def_en: "The rate at which the molecules of a pool are replaced. High turnover with low concentration is the normal pattern; ATP is the extreme case.", def_cn: "库中分子被替换的速率。低浓度伴随高周转是常态；ATP是最极端的例子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What does the book say defines a metabolic 'pool'?",
      q_cn: "教材认为是什么定义了一个代谢「库」？",
      options: [
        "A high absolute concentration of the metabolite",
        "The ability to maintain the metabolite's level at the desired level, even though its concentration may be low and its turnover rapid",
        "Storage of the metabolite in a dedicated organelle",
        "A metabolite that no other pathway can consume"
      ],
      answer: 1,
      why_en: "The book says explicitly that it need not be a matter of a high concentration; what is important is the ability to maintain the level where it is wanted. Concentrations may be of the order of mmol/l while turnover is very rapid — the 70 kg of ATP per 24 hours illustrates exactly this.",
      why_cn: "教材明确指出未必意味着高浓度；要紧的是把水平维持在所需之处的能力。浓度可能只有mmol/l量级，而周转极快——每24小时70公斤ATP正是这一点的例证。"
    },
    {
      type: "short",
      q_en: "Name the metabolites the book singles out as particularly important for regulating cell metabolism.",
      q_cn: "说出教材特别挑出、认为对调节细胞代谢尤为重要的那些代谢物。",
      accept: ["acetyl-CoA", "pyruvate", "ketoglutarate", "NADH", "NADPH", "ATP"],
      answer_en: "Acetyl-CoA, pyruvate, α-ketoglutarate, the reduced nicotinamide coenzymes NADH and NADPH, and ATP.",
      answer_cn: "乙酰CoA、丙酮酸、α-酮戊二酸、还原型烟酰胺辅酶NADH与NADPH，以及ATP。"
    }
  ],
  oral: {
    q_en: "What is a metabolic pool, and why does the concept matter?",
    q_cn: "什么是代谢库？这个概念为何重要？",
    model_en: "Metabolic pathways are not isolated lines; they cross-connect at nodal points, which simply means that different processes share intermediates. A handful of those shared intermediates matter especially for regulation: acetyl-CoA, pyruvate, alpha-ketoglutarate, the reduced nicotinamide coenzymes NADH and NADPH, and ATP. Each of these has a mobilizable store, which the book calls a pool. Now, the important thing — and it is easy to get wrong — is that a pool is not defined by having a lot of the substance around. The concentration can be quite modest, of the order of millimoles per litre. What defines it is the organism's ability to hold that level steady, because the turnover through it is enormously fast. The textbook's illustration is the one everyone remembers: the human body makes something like seventy kilograms of ATP in twenty-four hours, against a standing amount of a few grams. So the pool is turned over thousands of times a day. And that is why the concept matters. It tells you that the organism is in dynamic equilibrium, a steady state held by opposing flows, and that regulation is therefore about controlling rates, not about accumulating stock. Which is exactly what section ten-two goes on to discuss.",
    checklist: [
      "Defined nodal points as shared intermediates between different processes",
      "Named the key regulatory metabolites",
      "Defined a pool as a mobilizable store, NOT as a high concentration",
      "Gave the mmol/l order of magnitude and the fast turnover",
      "Quoted the 70 kg ATP per 24 hours figure",
      "Connected the concept to dynamic equilibrium and to regulation being about rates"
    ]
  }
},

{
  id: "10-5",
  chapter: 10,
  section: "10.1",
  czTitle: "Acetyl-CoA jako ukázkový „pool\" (obr. 10.1)",
  enTitle: "Acetyl-CoA as the model 'pool' (Obr. 10.1)",
  cnTitle: "乙酰CoA作为「库」的范例（图10.1）",
  pages: [219],
  coverage: "full",
  coverageNote: "The paragraph introducing acetyl-CoA as the exemplary pool at the top of p.219, and Obr. 10.1 itself, read in full. All eight labels of the figure were read off the scan: three inputs (Sacharidy -> Pyruvat, Lipidy -> Mastne kys., Proteiny -> Aminokyseliny) converging on Acetyl-CoA, and three outputs (Citratovy cyklus / Dychaci retezec, Lipidy, Isoprenoidy). Note the figure's caption is printed 'Aceyl-CoA a jeho metabolismus' -- a typo for 'Acetyl-CoA' -- confirmed by a zoomed re-read; noted rather than silently corrected.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "The book offers acetyl-CoA as the clearest example of such a metabolic 'pool': it arises by the degradation of sugars, lipids AND proteins, and it is drawn off in the synthesis of fatty acids and lipids, in the synthesis of isoprenoids, steroids and so on. Obr. 10.1 draws this as a hub. Three arrows come in from above — saccharides via pyruvate, lipids via fatty acids, proteins via amino acids — all converging on a single circled acetyl-CoA. Three arrows leave below: to the citrate cycle and the respiratory chain, to lipids, and to isoprenoids. The figure is worth reading as an argument rather than as a summary. Everything the cell eats arrives at the same molecule; from that molecule the cell can either burn the carbon for energy or invest it in fat or in the whole isoprenoid/steroid family. That single branch point — burn or build — is where the cell's energy status has to make itself felt, which is exactly what §10.1.3 will say: when energy demands are high the acetyl-CoA is oxidized, when they are low it goes into fatty acids. And what the figure does NOT show is just as important: there is no arrow from acetyl-CoA back up to pyruvate. That missing arrow is the reason animals cannot make sugar from fat (§10.1.3).",
    cn: "教材举乙酰CoA作为这种代谢「库」最清晰的例子：它由糖、脂质**与**蛋白质的降解生成，又在脂肪酸与脂质的合成、异戊二烯类与类固醇等的合成中被抽走。图10.1把这画成一个枢纽。三支箭头自上方进入——糖类经丙酮酸、脂质经脂肪酸、蛋白质经氨基酸——全部汇聚到一个圈起来的乙酰CoA上。三支箭头自下方离开：通向柠檬酸循环与呼吸链、通向脂质、通向异戊二烯类。这幅图值得当作一个论证而非一份摘要来读。细胞所摄取的一切都抵达同一个分子；从这个分子出发，细胞或者把碳烧掉换能量，或者把它投资到脂肪、或整个异戊二烯/类固醇家族中去。这唯一的分岔点——烧还是建——正是细胞能量状态必须发挥作用之处，而这恰恰是§10.1.3将要说的：能量需求高时乙酰CoA被氧化，需求低时它进入脂肪酸。而这幅图**没有**画出的东西同样重要：从乙酰CoA回到丙酮酸**没有**箭头。正是这条缺失的箭头，使动物无法由脂肪制造糖（§10.1.3）。"
  },
  points: [
    { cz: "acetyl-CoA jako názorný příklad poolu", en: "The book names acetyl-CoA as the clear example of a metabolic 'pool': it arises by the degradation of sugars, lipids and proteins, and is drawn off in the synthesis of fatty acids and lipids, of isoprenoids, of steroids and so on.", cn: "教材点名乙酰CoA作为代谢「库」的显例：它由糖、脂质与蛋白质的降解生成，又在脂肪酸与脂质、异戊二烯类、类固醇等的合成中被抽走。" },
    { cz: "tři vstupy v obr. 10.1", en: "Obr. 10.1's three inputs: Sacharidy → Pyruvát → Acetyl-CoA; Lipidy → Mastné kys. → Acetyl-CoA; Proteiny → Aminokyseliny → Acetyl-CoA. Each nutrient class passes through exactly one named intermediate before the hub.", cn: "图10.1的三个输入：糖类→丙酮酸→乙酰CoA；脂质→脂肪酸→乙酰CoA；蛋白质→氨基酸→乙酰CoA。每一类养分在抵达枢纽前恰好经过一个被点名的中间体。" },
    { cz: "tři výstupy v obr. 10.1", en: "Obr. 10.1's three outputs: Citrátový cyklus / Dýchací řetězec (i.e. oxidation for energy), Lipidy, and Isoprenoidy. One catabolic exit and two anabolic ones.", cn: "图10.1的三个输出：柠檬酸循环／呼吸链（即为获能而氧化）、脂质、异戊二烯类。一个分解出口，两个合成出口。" },
    { cz: "větvení „spálit nebo postavit\"", en: "The hub is a burn-or-build branch point, and it is exactly where the cell's energy status has to make itself felt — the theme §10.1.3 develops.", cn: "这个枢纽是「烧还是建」的分岔点，也恰恰是细胞能量状态必须发挥作用之处——这正是§10.1.3所展开的主题。" },
    { cz: "chybějící šipka: acetyl-CoA → pyruvát", en: "Note what Obr. 10.1 does NOT contain: there is no arrow from acetyl-CoA back up to pyruvate. That missing arrow is the whole reason animals cannot make saccharides from fats (§10.1.3).", cn: "注意图10.1**没有**的东西：从乙酰CoA回到丙酮酸没有箭头。正是这条缺失的箭头，构成了动物无法由脂肪制造糖的全部原因（§10.1.3）。" },
    { cz: "překlep v popisku obrázku", en: "The figure's caption is printed 'Obr. 10.1 Aceyl-CoA a jeho metabolismus' — a typesetting error for 'Acetyl-CoA', confirmed by a zoomed re-read of the scan. Noted rather than silently corrected, per this project's convention.", cn: "该图的图注印作「Obr. 10.1 Aceyl-CoA a jeho metabolismus」——是「Acetyl-CoA」的排印错误，经放大重读扫描件确认。按本项目惯例加以注明而非默默更正。" }
  ],
  terms: [
    { cz: "isoprenoid", en: "isoprenoid", cn: "异戊二烯类", def_en: "One of the three fates of acetyl-CoA shown in Obr. 10.1; the family that includes steroids, carotenoids and the phytol tail of chlorophyll (kap. 8.2.4).", def_cn: "图10.1中乙酰CoA的三个去向之一；这个家族包括类固醇、类胡萝卜素以及叶绿素的植醇尾（第8.2.4节）。" },
    { cz: "uzel metabolismu", en: "metabolic hub", cn: "代谢枢纽", def_en: "A metabolite at which many pathways meet; acetyl-CoA is the book's model case, with three inputs and three outputs in Obr. 10.1.", def_cn: "众多途径在此交汇的代谢物；乙酰CoA是教材的范例，在图10.1中有三进三出。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which arrow is conspicuously ABSENT from Obr. 10.1, and what does its absence explain?",
      q_cn: "图10.1中**明显缺少**哪一条箭头？这一缺失解释了什么？",
      options: [
        "Acetyl-CoA → citrate cycle; it explains why fats cannot be oxidized",
        "Acetyl-CoA → pyruvate; it explains why animals cannot make saccharides from fats",
        "Amino acids → acetyl-CoA; it explains why proteins are not an energy source",
        "Acetyl-CoA → isoprenoids; it explains why steroids come only from the diet"
      ],
      answer: 1,
      why_en: "There is no return arrow from acetyl-CoA to pyruvate. §10.1.3 makes the consequence explicit: the animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis, and therefore cannot form saccharides from fats. All the other arrows listed are present in the figure.",
      why_cn: "从乙酰CoA回到丙酮酸没有返回箭头。§10.1.3明确指出其后果：动物机体无法把乙酰CoA转变为丙酮酸（糖合成的起始化合物），因而无法由脂肪生成糖。所列其他箭头在图中都存在。"
    },
    {
      type: "short",
      q_en: "List the three inputs and three outputs of acetyl-CoA in Obr. 10.1.",
      q_cn: "列出图10.1中乙酰CoA的三个输入与三个输出。",
      accept: ["saccharide", "pyruvate", "lipid", "fatty acid", "protein", "amino acid", "citrate", "respiratory", "isoprenoid"],
      answer_en: "In: saccharides via pyruvate, lipids via fatty acids, proteins via amino acids. Out: the citrate cycle and respiratory chain, lipids, and isoprenoids.",
      answer_cn: "输入：糖类经丙酮酸、脂质经脂肪酸、蛋白质经氨基酸。输出：柠檬酸循环与呼吸链、脂质、异戊二烯类。"
    }
  ],
  oral: {
    q_en: "Why does the textbook use acetyl-CoA to illustrate the pool concept?",
    q_cn: "教材为何用乙酰CoA来说明「库」这个概念？",
    model_en: "Because it is the point where everything meets. Figure ten-one draws it as a hub with three arrows in and three out. Coming in: saccharides through pyruvate, lipids through fatty acids, proteins through amino acids — every class of nutrient the organism eats arrives at the same two-carbon unit. Going out: the citrate cycle and respiratory chain, which is the catabolic exit, and then lipids and isoprenoids, which are the anabolic ones. So acetyl-CoA is simultaneously the destination of all degradation and the starting material for a great deal of synthesis, which is exactly what makes it a pool in the sense the book means — constantly being filled and constantly being drained, held at a level rather than accumulated. And it is a genuine decision point: with the same molecule the cell can either burn the carbon or invest it, and which happens depends on the cell's energy status, as section ten-one-three explains. One more thing worth saying, because the figure teaches it by omission: there is no arrow leading back from acetyl-CoA to pyruvate. That single missing arrow is why an animal can turn sugar into fat but cannot turn fat back into sugar.",
    checklist: [
      "Gave all three inputs with their intermediate steps",
      "Gave all three outputs, distinguishing the catabolic from the anabolic exits",
      "Explained why this makes acetyl-CoA a pool — filled and drained continuously",
      "Identified the hub as a burn-or-build decision point governed by energy status",
      "Noted the absent acetyl-CoA → pyruvate arrow and its consequence"
    ]
  }
},

{
  id: "10-6",
  chapter: 10,
  section: "10.1.1",
  czTitle: "Metabolismus sacharidů — odbourávání",
  enTitle: "Carbohydrate metabolism — degradation",
  cnTitle: "糖类代谢——分解",
  pages: [219],
  coverage: "full",
  coverageNote: "Section 10.1.1 down to the pentose phosphate paragraph on p.219, read in full. The three 'key points' of glycolysis are reproduced exactly as the book names them (cleavage of Fru-1,6-bisphosphate into two phosphotrioses; dehydrogenation of 3-(P)-glyceraldehyde to phosphoglycerate; dehydration of 2-phosphoglycerate to phosphoenolpyruvate) and the yield is given as printed: 2 mol NADH and 2 mol ATP per mole of glucose degraded to two moles of pyruvate. Note that the book's second key point compresses two enzymatic steps (GAPDH gives 1,3-bisphosphoglycerate, phosphoglycerate kinase then gives 3-phosphoglycerate) into one phrase; this is noted in the points rather than silently expanded.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read). The notes' topic 十九 糖酵解 (p.105) is the closer match for the glycolysis content specifically, also title-match only", status: "partial" },
  summary: {
    en: "The first step of saccharide metabolism (kap. 7.7 and onward) is the formation of a PHOSPHORYLATED monosaccharide — whether by phosphorylation of a monosaccharide at the expense of ATP, giving Glc-6-(P), or by phosphorolysis of glycogen, giving Glc-1-(P). Note the distinction: the free sugar costs an ATP to trap, the stored sugar does not, because phosphorolysis uses inorganic phosphate. Within glycolysis, the book picks out three steps as the key points of sugar degradation: the cleavage of Fru-1,6-bisphosphate into two phosphotrioses; the dehydrogenation of 3-(P)-glyceraldehyde to phosphoglycerate; and the dehydration of 2-phosphoglycerate to phosphoenolpyruvate. By degradation of one mole of glucose to two moles of pyruvate there thus arise 2 mol NADH and 2 mol ATP. Pyruvate is then, under AEROBIC conditions, degraded in the citrate cycle to carbon dioxide and water; under ANAEROBIC conditions it is reduced in muscle to lactate. Glucose can alternatively be oxidized directly by the route of the pentose phosphate cycle. The organism uses this way of degrading saccharides for the formation of pentoses and for the synthesis of nucleic acids, and the NADPH arising at the same time is NOT oxidized in the respiratory chain but is used for synthetic reactions. That last clause is the substance of the pentose phosphate pathway in one line: it is not an energy pathway competing with glycolysis but a supplier of two things glycolysis cannot supply — five-carbon sugars, and reducing power earmarked for biosynthesis.",
    cn: "糖类代谢的第一步（第7.7节及以后）是形成**磷酸化的**单糖——或者消耗ATP把单糖磷酸化，得到Glc-6-(P)；或者对糖原进行磷酸解，得到Glc-1-(P)。注意这一区别：游离糖要花掉一个ATP才能被「扣住」，而贮存的糖不必，因为磷酸解使用的是无机磷酸。在糖酵解中，教材挑出三步作为糖降解的关键点：Fru-1,6-二磷酸裂解为两个磷酸丙糖；3-(P)-甘油醛脱氢生成磷酸甘油酸；2-磷酸甘油酸脱水生成磷酸烯醇丙酮酸。一摩尔葡萄糖降解为两摩尔丙酮酸，由此产生2 mol NADH与2 mol ATP。丙酮酸随后在**有氧**条件下于柠檬酸循环中被降解为二氧化碳与水；在**无氧**条件下则在肌肉中被还原为乳酸。葡萄糖也可以经磷酸戊糖循环的路线被直接氧化。机体利用这种糖降解方式来生成戊糖并合成核酸，同时产生的NADPH**不**在呼吸链中被氧化，而是被用于合成反应。最后这一句用一行话道出了磷酸戊糖途径的实质：它不是与糖酵解争夺能量的途径，而是提供糖酵解无法提供的两样东西——五碳糖，以及专供生物合成之用的还原力。"
  },
  points: [
    { cz: "první krok: fosforylovaný monosacharid", en: "The first step of saccharide metabolism is the formation of a phosphorylated monosaccharide: either by phosphorylation of a monosaccharide at the expense of ATP (giving Glc-6-(P)) or by phosphorolysis of glycogen (giving Glc-1-(P)).", cn: "糖类代谢的第一步是形成磷酸化的单糖：或消耗ATP把单糖磷酸化（得Glc-6-(P)），或对糖原进行磷酸解（得Glc-1-(P)）。" },
    { cz: "fosforolýza nestojí ATP", en: "The two routes differ in cost: trapping a free sugar costs an ATP, whereas phosphorolysis of glycogen uses inorganic phosphate and costs none. This is why mobilising stored glycogen is cheaper than importing glucose.", cn: "两条路线的代价不同：扣住一个游离糖要花一个ATP，而糖原的磷酸解使用无机磷酸、不花ATP。这正是动员贮存糖原比摄入葡萄糖更便宜的原因。" },
    { cz: "klíčový bod 1: štěpení Fru-1,6-bisfosfátu", en: "Key point 1 of glycolysis: the cleavage of Fru-1,6-bisphosphate into two phosphotrioses — the aldolase step, where a six-carbon chain becomes two three-carbon ones.", cn: "糖酵解关键点1：Fru-1,6-二磷酸裂解为两个磷酸丙糖——即醛缩酶那一步，六碳链在此变为两个三碳链。" },
    { cz: "klíčový bod 2: dehydrogenace 3-(P)-glyceraldehydu", en: "Key point 2: the dehydrogenation of 3-(P)-glyceraldehyde to phosphoglycerate. Note that the book compresses two enzymatic steps here — glyceraldehyde phosphate dehydrogenase actually gives 1,3-bisphosphoglycerate, and phosphoglycerate kinase then gives 3-phosphoglycerate with an ATP. Reproduced as printed and expanded here for clarity.", cn: "关键点2：3-(P)-甘油醛脱氢生成磷酸甘油酸。注意教材在此把两个酶促步骤压缩了——磷酸甘油醛脱氢酶实际生成的是1,3-二磷酸甘油酸，随后磷酸甘油酸激酶生成3-磷酸甘油酸并产生一个ATP。此处按原文照录并加以展开以求清楚。" },
    { cz: "klíčový bod 3: dehydratace 2-fosfoglycerátu", en: "Key point 3: the dehydration of 2-phosphoglycerate to phosphoenolpyruvate — the enolase step, which creates the high-energy enol phosphate.", cn: "关键点3：2-磷酸甘油酸脱水生成磷酸烯醇丙酮酸——即烯醇化酶那一步，它造出高能的烯醇磷酸。" },
    { cz: "výtěžek: 2 NADH a 2 ATP", en: "By degradation of one mole of glucose to two moles of pyruvate there arise 2 mol NADH and 2 mol ATP. This is the NET figure — four ATP are made and two are spent.", cn: "一摩尔葡萄糖降解为两摩尔丙酮酸，产生2 mol NADH与2 mol ATP。这是**净**值——生成四个ATP、耗去两个。" },
    { cz: "osud pyruvátu: aerobně vs anaerobně", en: "Under aerobic conditions pyruvate is degraded in the citrate cycle to CO₂ and water; under anaerobic conditions it is reduced in muscle to lactate.", cn: "有氧条件下丙酮酸在柠檬酸循环中被降解为CO₂与水；无氧条件下则在肌肉中被还原为乳酸。" },
    { cz: "pentosafosfátový cyklus — proč", en: "Glucose can also be oxidized directly by the pentose phosphate cycle. The organism uses this route for the formation of pentoses and for the synthesis of nucleic acids, and the NADPH arising is NOT oxidized in the respiratory chain but is used for synthetic reactions. So it supplies exactly what glycolysis cannot: five-carbon sugars and reducing power reserved for biosynthesis.", cn: "葡萄糖也可经磷酸戊糖循环被直接氧化。机体利用这条路线生成戊糖并合成核酸，所产生的NADPH**不**在呼吸链中被氧化，而是用于合成反应。因此它恰好提供了糖酵解所不能提供的：五碳糖，以及留作生物合成之用的还原力。" }
  ],
  terms: [
    { cz: "fosforolýza", en: "phosphorolysis", cn: "磷酸解", def_en: "Cleavage using inorganic phosphate rather than water; how glycogen is mobilised, giving Glc-1-(P) without spending ATP.", def_cn: "以无机磷酸而非水进行的裂解；糖原即以此被动员，得到Glc-1-(P)且不消耗ATP。" },
    { cz: "fosfotriosa", en: "phosphotriose", cn: "磷酸丙糖", def_en: "A three-carbon phosphorylated sugar; two arise from the aldolase cleavage of fructose-1,6-bisphosphate.", def_cn: "三碳的磷酸化糖；果糖-1,6-二磷酸经醛缩酶裂解生成两分子。" },
    { cz: "fosfoenolpyruvát", en: "phosphoenolpyruvate", cn: "磷酸烯醇丙酮酸", def_en: "The high-energy enol phosphate formed by dehydration of 2-phosphoglycerate; donates its phosphate to make ATP.", def_cn: "由2-磷酸甘油酸脱水形成的高能烯醇磷酸；把磷酸基交出以生成ATP。" },
    { cz: "pentosafosfátový cyklus", en: "pentose phosphate cycle", cn: "磷酸戊糖循环", def_en: "The alternative route of glucose oxidation, supplying pentoses for nucleic acid synthesis and NADPH for biosynthesis rather than ATP.", def_cn: "葡萄糖氧化的替代路线，提供用于核酸合成的戊糖以及用于生物合成的NADPH，而非提供ATP。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What does the book say happens to the NADPH generated by the pentose phosphate cycle?",
      q_cn: "教材说磷酸戊糖循环所产生的NADPH会怎样？",
      options: [
        "It is oxidized in the respiratory chain to make ATP",
        "It is NOT oxidized in the respiratory chain but is used for synthetic reactions",
        "It is converted to NADH by a transhydrogenase",
        "It is exported to the mitochondrion for the citrate cycle"
      ],
      answer: 1,
      why_en: "The book states explicitly that the NADPH arising at the same time is not oxidized in the respiratory chain but is used for synthetic reactions. This is what distinguishes the pentose phosphate route from glycolysis: it supplies pentoses and biosynthetic reducing power, not ATP.",
      why_cn: "教材明确指出，同时产生的NADPH不在呼吸链中被氧化，而是用于合成反应。这正是磷酸戊糖路线区别于糖酵解之处：它提供戊糖与用于生物合成的还原力，而非ATP。"
    },
    {
      type: "short",
      q_en: "Name the three steps the book picks out as the key points of glycolysis.",
      q_cn: "说出教材挑出作为糖酵解关键点的那三个步骤。",
      accept: ["Fru-1,6", "fructose", "cleavage", "phosphotriose", "dehydrogenation", "glyceraldehyde", "dehydration", "2-phosphoglycerate", "phosphoenolpyruvate"],
      answer_en: "Cleavage of Fru-1,6-bisphosphate into two phosphotrioses; dehydrogenation of 3-(P)-glyceraldehyde to phosphoglycerate; dehydration of 2-phosphoglycerate to phosphoenolpyruvate.",
      answer_cn: "Fru-1,6-二磷酸裂解为两个磷酸丙糖；3-(P)-甘油醛脱氢生成磷酸甘油酸；2-磷酸甘油酸脱水生成磷酸烯醇丙酮酸。"
    }
  ],
  oral: {
    q_en: "Summarise carbohydrate degradation as this chapter presents it.",
    q_cn: "请按本章的呈现方式概述糖类的降解。",
    model_en: "The first move is always to phosphorylate the sugar, and there are two ways in. If you start from free glucose you spend an ATP and get glucose-six-phosphate; if you start from stored glycogen you use phosphorolysis, which uses inorganic phosphate instead of water, costs no ATP, and gives glucose-one-phosphate. That is already a reason mobilising your own glycogen is cheaper than importing sugar. Within glycolysis the textbook picks out three steps as the key ones: aldolase cleaving fructose-one-six-bisphosphate into two phosphotrioses; the dehydrogenation of glyceraldehyde-three-phosphate towards phosphoglycerate; and the dehydration of two-phosphoglycerate to phosphoenolpyruvate. Net, one glucose to two pyruvates gives two NADH and two ATP. What happens to the pyruvate then depends on oxygen: aerobically it goes into the citrate cycle and ends as carbon dioxide and water, anaerobically it is reduced in muscle to lactate. There is also a completely different route — the pentose phosphate cycle, which oxidizes glucose directly. Its purpose is not energy. It supplies pentoses for nucleic acid synthesis, and the NADPH it makes is deliberately not fed to the respiratory chain; it is kept for biosynthesis.",
    checklist: [
      "Gave both entry routes and noted the ATP cost difference between them",
      "Named all three key glycolytic steps",
      "Gave the net yield: 2 NADH and 2 ATP per glucose",
      "Distinguished the aerobic and anaerobic fates of pyruvate",
      "Described the pentose phosphate route as supplying pentoses and biosynthetic NADPH, not ATP",
      "Stated explicitly that the NADPH is not oxidized in the respiratory chain"
    ]
  }
},

{
  id: "10-7",
  chapter: 10,
  section: "10.1.1",
  czTitle: "Glukoneogeneze — obrácená glykolýza a její tři obcházené kroky",
  enTitle: "Gluconeogenesis — reversed glycolysis and its three bypassed steps",
  cnTitle: "糖异生——倒转的糖酵解及其三个被绕开的步骤",
  pages: [219],
  coverage: "full",
  coverageNote: "The final paragraph of p.219 read in full. The book's own framing is preserved: gluconeogenesis is 'actually reversed glycolysis from phosphoenolpyruvate up to six-carbon structures', with the pyruvate->PEP conversion singled out as 'the problem' and solved by a detour via carboxylation to oxaloacetate. The book's statement that the two hexose phosphorylations must be catalysed by DIFFERENT enzymes -- and its identification of those enzymes as hydrolases -- was read directly and is correct as printed (glucose-6-phosphatase and fructose-1,6-bisphosphatase are hydrolases, EC 3.1.3.x); this is noted in the points because 'hydrolase' is an unusual way to name them and could be mistaken for an error.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "Synthesis of saccharides in the animal organism — gluconeogenesis — uses as its carbon source lactic acid, which arose by anaerobic glycolysis. The book then gives the cleanest possible characterisation of the pathway: the synthesis of saccharides is actually REVERSED GLYCOLYSIS, from phosphoenolpyruvate up to the six-carbon structures. Most of glycolysis is freely reversible and simply runs backwards. What is not reversible has to be bypassed, and the book identifies exactly what. The problem is only the conversion of pyruvate to phosphoenolpyruvate, and it proceeds by a detour: carboxylation of pyruvate to oxaloacetate. Also, both phosphorylations of hexoses during their degradation in glycolysis are irreversible reactions, and in the process of synthesis they must be catalysed by DIFFERENT enzymes — hydrolases. That naming is worth pausing on, because it is correct but unusual: the enzymes in question are glucose-6-phosphatase and fructose-1,6-bisphosphatase, and a phosphatase is indeed a hydrolase. Note what this means energetically: the kinase spends an ATP going down and the phosphatase throws the phosphate away going up, so the round trip costs energy — which is the concrete form of §10.1's claim that catabolism and anabolism are not mutually reversible. The section closes with a remark that anticipates §10.1.3: SOME AMINO ACIDS can be converted by this route all the way to saccharides.",
    cn: "动物机体中糖类的合成——糖异生——以无氧糖酵解产生的乳酸作为碳源。随后教材给出了对该途径最干净利落的刻画：糖类的合成实际上就是**倒转的糖酵解**，从磷酸烯醇丙酮酸一直到六碳结构。糖酵解的大部分是自由可逆的，直接倒着走即可。不可逆的部分则必须绕开，而教材精确指出了是哪些。**唯一的**问题是丙酮酸到磷酸烯醇丙酮酸的转变，它通过一条绕道进行：把丙酮酸羧化为草酰乙酸。此外，糖酵解降解过程中己糖的两次磷酸化都是不可逆反应，在合成过程中必须由**不同的**酶——水解酶——来催化。这个命名值得停一停，因为它正确但不常见：所涉及的酶是葡萄糖-6-磷酸酶与果糖-1,6-二磷酸酶，而磷酸酶确实属于水解酶。注意这在能量上意味着什么：下行时激酶花掉一个ATP，上行时磷酸酶把磷酸基扔掉，因此一个来回是净耗能的——这正是§10.1中「分解代谢与合成代谢并非互为可逆」这一论断的具体形态。本节以一句预告§10.1.3的话收尾：**某些氨基酸**可以经这条路线一路转变为糖类。"
  },
  points: [
    { cz: "zdrojem uhlíku je laktát", en: "Gluconeogenesis in the animal organism uses as its carbon source lactic acid, which arose by anaerobic glycolysis — so the pathway is in the first place a way of recovering the product of oxygen debt.", cn: "动物机体中的糖异生以无氧糖酵解产生的乳酸作为碳源——因此这条途径首先是一种回收氧债产物的方式。" },
    { cz: "je to obrácená glykolýza od PEP nahoru", en: "The synthesis of saccharides is actually reversed glycolysis, from phosphoenolpyruvate up to the six-carbon structures. Most steps are freely reversible and are simply run backwards.", cn: "糖类的合成实际上就是倒转的糖酵解，从磷酸烯醇丙酮酸一直到六碳结构。大多数步骤自由可逆，直接倒着走即可。" },
    { cz: "problém: pyruvát → PEP", en: "The problem is ONLY the conversion of pyruvate to phosphoenolpyruvate. It proceeds by a detour (oklika): carboxylation of pyruvate to oxaloacetate.", cn: "**唯一的**问题是丙酮酸到磷酸烯醇丙酮酸的转变。它通过一条绕道(oklika)进行：把丙酮酸羧化为草酰乙酸。" },
    { cz: "dvě nevratné fosforylace hexos", en: "Both phosphorylations of hexoses during glycolytic degradation are irreversible reactions, and in the synthetic process they must be catalysed by DIFFERENT enzymes.", cn: "糖酵解降解过程中己糖的两次磷酸化都是不可逆反应，在合成过程中必须由**不同的**酶来催化。" },
    { cz: "těmi enzymy jsou hydrolasy", en: "The book names those different enzymes as hydrolases. This is correct though unusual phrasing: the enzymes concerned are glucose-6-phosphatase and fructose-1,6-bisphosphatase, and a phosphatase is a hydrolase (EC 3.1.3.x). It is worth flagging so the term is not mistaken for a slip.", cn: "教材把这些不同的酶称作水解酶。这个说法正确但不常见：所涉及的酶是葡萄糖-6-磷酸酶与果糖-1,6-二磷酸酶，而磷酸酶属于水解酶（EC 3.1.3.x）。此处特别标出，以免该术语被误认为笔误。" },
    { cz: "kinasa dolů, fosfatasa nahoru = čistá spotřeba", en: "Energetically: going down, a kinase spends an ATP to install the phosphate; going up, a phosphatase hydrolyses it off and the energy is lost as heat. The round trip therefore costs energy — the concrete form of §10.1's claim that catabolic and anabolic routes are not mutually reversible.", cn: "从能量上看：下行时激酶花掉一个ATP装上磷酸基；上行时磷酸酶把它水解掉、能量作为热损失。因此一个来回是净耗能的——这正是§10.1中「分解与合成路线并非互为可逆」这一论断的具体形态。" },
    { cz: "některé aminokyseliny až na sacharidy", en: "The section closes by noting that SOME amino acids can be converted by this route all the way to saccharides — a point that becomes sharp in §10.1.3, where fats explicitly cannot.", cn: "本节结尾指出，**某些**氨基酸可以经这条路线一路转变为糖类——这一点在§10.1.3中变得尖锐，因为脂肪明确不能。" }
  ],
  terms: [
    { cz: "glukoneogeneze", en: "gluconeogenesis", cn: "糖异生", def_en: "Synthesis of saccharides in the animal organism from lactate; essentially reversed glycolysis from phosphoenolpyruvate upwards, with three irreversible glycolytic steps bypassed.", def_cn: "动物机体由乳酸合成糖类；本质上是从磷酸烯醇丙酮酸向上倒转的糖酵解，其中三个不可逆的糖酵解步骤被绕开。" },
    { cz: "oklika přes oxalacetát", en: "the oxaloacetate detour", cn: "经草酰乙酸的绕道", def_en: "The bypass of the irreversible pyruvate kinase step: pyruvate is carboxylated to oxaloacetate, from which phosphoenolpyruvate can be formed.", def_cn: "绕开不可逆的丙酮酸激酶步骤的旁路：丙酮酸被羧化为草酰乙酸，再由它生成磷酸烯醇丙酮酸。" },
    { cz: "hydrolasa", en: "hydrolase", cn: "水解酶", def_en: "An enzyme cleaving a bond with water. The book's term for the phosphatases that replace the glycolytic kinases in gluconeogenesis — correct, since a phosphatase hydrolyses a phosphate ester.", def_cn: "以水断裂化学键的酶。教材用它指代糖异生中取代糖酵解激酶的那些磷酸酶——这是正确的，因为磷酸酶水解的是磷酸酯。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In gluconeogenesis, how is the irreversible pyruvate → phosphoenolpyruvate step accomplished?",
      q_cn: "在糖异生中，不可逆的「丙酮酸→磷酸烯醇丙酮酸」这一步是如何完成的？",
      options: [
        "By running pyruvate kinase in reverse at high ATP concentrations",
        "By a detour: carboxylation of pyruvate to oxaloacetate",
        "By a hydrolase that removes the phosphate",
        "By reduction of pyruvate to lactate first"
      ],
      answer: 1,
      why_en: "The book says the conversion proceeds by a detour (oklika), carboxylating pyruvate to oxaloacetate. The hydrolases mentioned in the same paragraph handle the OTHER two irreversible steps, the hexose phosphorylations, not this one.",
      why_cn: "教材说这一转变通过一条绕道(oklika)进行，即把丙酮酸羧化为草酰乙酸。同一段中提到的水解酶处理的是**另外**两个不可逆步骤（己糖的磷酸化），而不是这一步。"
    },
    {
      type: "short",
      q_en: "Which three glycolytic steps must be bypassed in gluconeogenesis, and what kind of enzyme replaces two of them?",
      q_cn: "糖异生中必须绕开糖酵解的哪三个步骤？其中两个由哪一类酶来替代？",
      accept: ["pyruvate", "phosphoenolpyruvate", "hexose", "phosphorylation", "hydrolase", "phosphatase"],
      answer_en: "The pyruvate → phosphoenolpyruvate conversion (bypassed by carboxylation to oxaloacetate) and both irreversible hexose phosphorylations, which in synthesis must be catalysed by different enzymes — hydrolases, i.e. phosphatases.",
      answer_cn: "丙酮酸→磷酸烯醇丙酮酸的转变（经羧化为草酰乙酸而绕开），以及两次不可逆的己糖磷酸化——在合成方向上必须由不同的酶催化，即水解酶（磷酸酶）。"
    }
  ],
  oral: {
    q_en: "Explain gluconeogenesis and how it relates to glycolysis.",
    q_cn: "请解释糖异生及其与糖酵解的关系。",
    model_en: "The textbook's formulation is the useful one: gluconeogenesis is essentially reversed glycolysis, from phosphoenolpyruvate up to the six-carbon sugars. Most of the glycolytic steps are close enough to equilibrium that they simply run backwards, and the same enzymes do the job. In the animal, the carbon source is lactate — the lactic acid produced by anaerobic glycolysis in muscle. Then there are three places where you cannot just reverse, and they are exactly the three irreversible steps. The first is pyruvate to phosphoenolpyruvate, which the book calls the problem, and it is solved by a detour: carboxylate pyruvate to oxaloacetate first, and go from there. The other two are the hexose phosphorylations, and in the synthetic direction they must be catalysed by different enzymes — the book calls them hydrolases, which is correct if slightly unexpected, because what it means is phosphatases: glucose-six-phosphatase and fructose-one-six-bisphosphatase, and a phosphatase does hydrolyse a phosphate ester. Notice what that costs: going down you spend an ATP to attach the phosphate, going up you hydrolyse it off and lose the energy. That is precisely why the two directions are not the same pathway, and why they can be controlled separately. One last point: some amino acids can be routed all the way to sugars this way — which makes the contrast with fats in the next section sharper.",
    checklist: [
      "Characterised gluconeogenesis as reversed glycolysis from PEP upwards",
      "Named lactate as the carbon source in the animal",
      "Identified all three bypassed irreversible steps",
      "Gave the oxaloacetate carboxylation detour for pyruvate → PEP",
      "Explained the book's 'hydrolases' as phosphatases and why that is correct",
      "Explained the energetic cost of the kinase-down/phosphatase-up round trip",
      "Noted that some amino acids can be converted to saccharides this way"
    ]
  }
},

{
  id: "10-8",
  chapter: 10,
  section: "10.1.2",
  czTitle: "Metabolismus lipidů — odbourávání a ketolátky",
  enTitle: "Lipid metabolism — degradation and ketone bodies",
  cnTitle: "脂质代谢——分解与酮体",
  pages: [220],
  coverage: "full",
  coverageNote: "The first paragraph of section 10.1.2 on p.220 read in full. The two coenzyme yields per two-carbon unit were read with their parenthetical justifications exactly as printed: 1 FADH2 (oxidation of the acid to an unsaturated fatty acid) and 1 NADH (oxidation of the hydroxy acid to an oxo acid). Two points are noted rather than corrected: the activation cost is given as '1 ATP', which is literally true but understates the cost since the ATP goes to AMP + PPi (two high-energy equivalents), and the ketone-body sentence names only acetoacetic acid and acetone, omitting beta-hydroxybutyrate and compressing the acetone step, which actually arises by decarboxylation of acetoacetate rather than directly from two acetyl-CoA.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记 p.147 — title-match only per the HANDOFF §11 map, never read)", status: "partial" },
  summary: {
    en: "The degradation of fats (kap. 8.4) begins with hydrolysis into their components, glycerol and fatty acids. Glycerol can be oxidized to a triose — glyceraldehyde — and in phosphorylated form join saccharide metabolism, which is the first of several places this chapter shows the two nutrient classes converging. The degradation of fatty acids must be INITIATED BY THEIR ACTIVATION, which consumes 1 ATP, and from the fatty acid an acyl-CoA arises. By their degradation there arise, for each two-carbon unit, 1 FADH₂ — from the oxidation of the acid to an unsaturated fatty acid — and 1 NADH — from the oxidation of the hydroxy acid to an oxo acid. The two parentheses are worth keeping: they name which chemical step produces which coenzyme, which is the part of β-oxidation that is easy to memorise wrongly. The fatty acid is thus degraded to acetyl-CoA, and its complete degradation to carbon dioxide and water is again provided by the citrate cycle and the respiratory chain. Finally, a clinical note: when the organism is FLOODED with acetyl-CoA — the book's example is diabetes — acetoacetic acid and acetone can arise from two of its molecules. The general shape of the section is that fat degradation is a supplier to the same two machines that everything else feeds, and that overloading the supply line produces ketone bodies as an overflow.",
    cn: "脂肪的降解（第8.4节）始于水解为其组分：甘油与脂肪酸。甘油可被氧化为丙糖——甘油醛——并以磷酸化形式并入糖类代谢，这是本章展示两类养分交汇的头一处。脂肪酸的降解必须**先由活化启动**，该活化消耗1个ATP，由脂肪酸生成酰基CoA。在其降解过程中，每一个二碳单元产生1个FADH₂——来自酸氧化为不饱和脂肪酸——以及1个NADH——来自羟基酸氧化为酮酸。这两个括注值得保留：它们点明了哪一步化学反应产生哪一种辅酶，而这正是β-氧化中最容易记错的部分。脂肪酸就这样被降解为乙酰CoA，其彻底降解为二氧化碳和水仍由柠檬酸循环与呼吸链完成。最后是一条临床注记：当机体被乙酰CoA**淹没**时——教材举的例子是糖尿病——由其中两个分子可以生成乙酰乙酸与丙酮。本节的总体形态是：脂肪降解是向所有其他物质同样汇入的那两台机器供料，而供料线过载则以酮体的形式溢出。"
  },
  points: [
    { cz: "hydrolýza na glycerol a mastné kyseliny", en: "The degradation of fats begins with hydrolysis into components: glycerol and fatty acids.", cn: "脂肪的降解始于水解为其组分：甘油与脂肪酸。" },
    { cz: "glycerol vstupuje do metabolismu sacharidů", en: "Glycerol can be oxidized to a triose — glyceraldehyde — and in phosphorylated form join saccharide metabolism. The glycerol half of a fat is therefore, metabolically, a sugar.", cn: "甘油可被氧化为丙糖——甘油醛——并以磷酸化形式并入糖类代谢。因此脂肪中甘油的那一半，在代谢上就是糖。" },
    { cz: "aktivace stojí 1 ATP", en: "The degradation of fatty acids must be initiated by their ACTIVATION, which consumes 1 ATP; from the fatty acid an acyl-CoA arises. Note that the book says one ATP, which is literally true, though the reaction goes ATP → AMP + PPᵢ and therefore costs two high-energy equivalents.", cn: "脂肪酸的降解必须先由**活化**启动，该活化消耗1个ATP；由脂肪酸生成酰基CoA。注意教材说的是一个ATP，这在字面上成立，但该反应走的是ATP→AMP+PPᵢ，因此代价是两个高能键当量。" },
    { cz: "1 FADH₂ na dvouuhlíkatou jednotku", en: "For each two-carbon unit, 1 FADH₂ arises — specifically from the oxidation of the acid to an UNSATURATED fatty acid (the first dehydrogenation of β-oxidation).", cn: "每一个二碳单元产生1个FADH₂——具体来自酸氧化为**不饱和**脂肪酸（β-氧化的第一次脱氢）。" },
    { cz: "1 NADH na dvouuhlíkatou jednotku", en: "And 1 NADH — specifically from the oxidation of the HYDROXY acid to an OXO acid (the second dehydrogenation). Keeping the two parentheses straight is what stops the two coenzymes being swapped.", cn: "以及1个NADH——具体来自**羟基**酸氧化为**酮**酸（第二次脱氢）。把这两个括注分清楚，才不会把两种辅酶弄反。" },
    { cz: "úplné odbourání citrátovým cyklem a dýchacím řetězcem", en: "The fatty acid is degraded to acetyl-CoA; its complete degradation to CO₂ and water is again provided by the citrate cycle and the respiratory chain — the same two machines that finish everything else.", cn: "脂肪酸被降解为乙酰CoA；其彻底降解为CO₂与水仍由柠檬酸循环与呼吸链完成——与终结其他一切的是同样这两台机器。" },
    { cz: "zaplavení acetyl-CoA → ketolátky", en: "When the organism is flooded with acetyl-CoA — the book's example is diabetes — acetoacetic acid and acetone can arise from two of its molecules. Two notes: the book omits β-hydroxybutyrate, the third ketone body, and acetone in fact arises by decarboxylation of acetoacetate rather than directly from two acetyl-CoA. Reproduced as printed with these gaps noted.", cn: "当机体被乙酰CoA淹没时——教材举例为糖尿病——由其中两个分子可生成乙酰乙酸与丙酮。两点注记：教材遗漏了第三种酮体β-羟丁酸；且丙酮实际上是由乙酰乙酸脱羧生成，而非直接由两个乙酰CoA生成。此处按原文照录并注明这些缺口。" }
  ],
  terms: [
    { cz: "acyl-CoA", en: "acyl-CoA", cn: "酰基CoA", def_en: "The activated form of a fatty acid, formed at the cost of 1 ATP; the substrate for β-oxidation.", def_cn: "脂肪酸的活化形式，以1个ATP为代价生成；是β-氧化的底物。" },
    { cz: "ketolátky", en: "ketone bodies", cn: "酮体", def_en: "Acetoacetate and acetone in this book's account, formed when the organism is flooded with acetyl-CoA (e.g. in diabetes). Standard accounts add β-hydroxybutyrate.", def_cn: "在本教材的叙述中为乙酰乙酸与丙酮，在机体被乙酰CoA淹没时（如糖尿病）生成。标准论述还包括β-羟丁酸。" },
    { cz: "glycerol", en: "glycerol", cn: "甘油", def_en: "The three-carbon alcohol backbone of a fat; oxidizable to glyceraldehyde and, phosphorylated, feeds directly into saccharide metabolism.", def_cn: "脂肪的三碳醇骨架；可氧化为甘油醛，磷酸化后直接并入糖类代谢。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In β-oxidation, which chemical step does the book associate with FADH₂ and which with NADH?",
      q_cn: "在β-氧化中，教材把FADH₂与NADH分别与哪一步化学反应相联系？",
      options: [
        "FADH₂ from the oxidation of the hydroxy acid; NADH from the oxidation to an unsaturated acid",
        "FADH₂ from the oxidation of the acid to an unsaturated fatty acid; NADH from the oxidation of the hydroxy acid to an oxo acid",
        "Both from the thiolytic cleavage step",
        "FADH₂ from the activation step; NADH from the cleavage step"
      ],
      answer: 1,
      why_en: "The book gives the two parentheses explicitly: 1 FADH₂ from oxidation of the acid to an unsaturated fatty acid, and 1 NADH from oxidation of the hydroxy acid to an oxo acid. Swapping them is the classic error, which is why the book bothers to state which is which.",
      why_cn: "教材明确给出这两个括注：1个FADH₂来自酸氧化为不饱和脂肪酸，1个NADH来自羟基酸氧化为酮酸。把二者弄反是经典错误，这正是教材特意指明各自对应的原因。"
    },
    {
      type: "short",
      q_en: "What happens to the glycerol released when a fat is hydrolysed?",
      q_cn: "脂肪水解释放出的甘油会怎样？",
      accept: ["triose", "glyceraldehyde", "phosphorylated", "saccharide", "carbohydrate", "sugar"],
      answer_en: "It can be oxidized to a triose, glyceraldehyde, and in phosphorylated form joins saccharide metabolism.",
      answer_cn: "它可被氧化为丙糖甘油醛，并以磷酸化形式并入糖类代谢。"
    }
  ],
  oral: {
    q_en: "Describe fat degradation and say what happens when acetyl-CoA accumulates.",
    q_cn: "请描述脂肪的降解，并说明乙酰CoA积累时会发生什么。",
    model_en: "A fat is first hydrolysed into glycerol and fatty acids, and those two halves go different ways. Glycerol is oxidized to a triose, glyceraldehyde, and once phosphorylated it simply joins sugar metabolism — so metabolically, the glycerol part of a fat behaves like a carbohydrate. The fatty acids have to be activated first, which costs an ATP and gives an acyl-CoA. The book says one ATP; strictly the reaction goes to AMP and pyrophosphate, so the real cost is two high-energy equivalents. Then beta-oxidation removes two carbons at a time, and per two-carbon unit you get one FADH-two and one NADH — and the book is careful to say which is which: the FADH-two comes from oxidizing the acid to an unsaturated fatty acid, the NADH from oxidizing the hydroxy acid to an oxo acid. The product is acetyl-CoA, and the citrate cycle and respiratory chain finish it off to carbon dioxide and water. Now, when the organism is flooded with acetyl-CoA — the example given is diabetes — two molecules can condense to give acetoacetic acid, and acetone. I'd add that the standard picture also includes beta-hydroxybutyrate as a third ketone body, and that the acetone strictly arises by decarboxylating acetoacetate rather than directly from the two acetyl-CoA.",
    checklist: [
      "Gave hydrolysis into glycerol and fatty acids and traced the glycerol into sugar metabolism",
      "Named activation as costing 1 ATP and giving acyl-CoA",
      "Gave 1 FADH₂ and 1 NADH per two-carbon unit and correctly matched each to its chemical step",
      "Named acetyl-CoA as the product and the citrate cycle/respiratory chain as the finish",
      "Gave the ketone-body overflow with diabetes as the example",
      "Optionally noted the ATP→AMP+PPᵢ cost and the omission of β-hydroxybutyrate"
    ]
  }
},

{
  id: "10-9",
  chapter: 10,
  section: "10.1.2",
  czTitle: "Syntéza mastných kyselin — tři zásadní odlišnosti od odbourávání",
  enTitle: "Fatty acid synthesis — three fundamental differences from degradation",
  cnTitle: "脂肪酸的合成——与分解的三点根本差异",
  pages: [220],
  coverage: "full",
  coverageNote: "The bulleted passage and the sentence following it on p.220, read in full. All three of the book's bullets are reproduced complete, including the specific detail that all intermediates remain BOUND to the enzymes and only the finished sixteen- and eighteen-carbon acyl-CoA are released. The closing sentence about glycerophosphate coming from sugar metabolism is included in this node because it completes the synthesis account and is the second explicit sugar/lipid junction on the page.",
  cnNote: { topic: "二十四", title: "脂类的生物合成 (笔记 p.153 — title-match only per the HANDOFF §11 map, never read)", status: "partial" },
  summary: {
    en: "For the synthesis of fatty acids (kap. 8.3) the starting compound is again acetyl-CoA, and the process of synthesis is FORMALLY similar to degradation — but the book at once lists three fundamental differences, and these three are the standard exam answer. FIRST, the synthesis begins with activation of the inactive methyl group of the acetyl by CARBOXYLATION to malonyl-CoA. SECOND, the hydrogen donor for synthesis is NADPH, whereas by oxidation NADH arises — the same division of labour seen with the pentose phosphate pathway, where NADPH is reserved for biosynthesis. THIRD, the synthesis is separated from degradation within the cell: degradation is localized in the mitochondria, while synthesis runs on a MULTIENZYME COMPLEX in the cytoplasm, all the intermediates remain bound to the enzymes, and only the finished sixteen- and eighteen-carbon acyl-CoA are released. That third point is really two claims — different compartment, and different architecture — and both matter: a multienzyme complex that never lets go of its intermediates cannot be run backwards or raided by another pathway. Finally, for the synthesis of a fat molecule, besides acyl-CoA one also needs glycerophosphate, and that comes from sugar metabolism. Together with the glycerol point in 10-8 this closes the loop: sugars supply the backbone of a fat, and fats hand their backbone back to the sugars.",
    cn: "脂肪酸合成（第8.3节）的起始化合物仍是乙酰CoA，合成过程在**形式上**与分解相似——但教材随即列出三点根本差异，这三点正是标准的考试答案。**第一**，合成始于把乙酰基上惰性的甲基通过**羧化**活化为丙二酰CoA。**第二**，合成的供氢体是NADPH，而氧化过程产生的是NADH——这与磷酸戊糖途径中所见的分工相同，NADPH被保留给生物合成。**第三**，在细胞内合成与分解是分开的：分解定位于线粒体，而合成在胞质中的一个**多酶复合体**上进行，所有中间体都保持与酶结合，只有完成的十六碳与十八碳酰基CoA才被释放。第三点其实包含两个论断——不同区室与不同结构——两者都要紧：一个从不放开其中间体的多酶复合体，既不能被倒着运行，也不能被别的途径截取。最后，合成一分子脂肪除酰基CoA外还需要甘油磷酸，而它来自糖代谢。连同10-8中关于甘油的那一点，这就闭合了回路：糖提供脂肪的骨架，脂肪又把骨架还给糖。"
  },
  points: [
    { cz: "výchozí sloučeninou je opět acetyl-CoA", en: "For fatty acid synthesis the starting compound is again acetyl-CoA, and the process is FORMALLY similar to degradation — which is exactly why the differences have to be spelled out.", cn: "脂肪酸合成的起始化合物仍是乙酰CoA，其过程在**形式上**与分解相似——正因如此才必须把差异一一点明。" },
    { cz: "rozdíl 1: karboxylace na malonyl-CoA", en: "Difference 1: the synthesis begins with activation of the INACTIVE methyl group of the acetyl by carboxylation to malonyl-CoA. Degradation has no counterpart to this step at all.", cn: "差异1：合成始于把乙酰基上**惰性**的甲基通过羧化活化为丙二酰CoA。分解过程完全没有与之对应的步骤。" },
    { cz: "rozdíl 2: NADPH vs NADH", en: "Difference 2: the hydrogen donor for synthesis is NADPH, whereas oxidation produces NADH. The two nicotinamide coenzymes are functionally segregated — NADH for the respiratory chain, NADPH for biosynthesis.", cn: "差异2：合成的供氢体是NADPH，而氧化产生NADH。两种烟酰胺辅酶在功能上被分隔开——NADH供呼吸链，NADPH供生物合成。" },
    { cz: "rozdíl 3a: jiný kompartment", en: "Difference 3, first half: synthesis is separated from degradation within the cell. Degradation is localized in the mitochondria; synthesis runs in the cytoplasm. This is the compartmentation principle of §10.1 and §10.2 applied to a concrete pair of pathways.", cn: "差异3的前半：细胞内合成与分解是分开的。分解定位于线粒体；合成在胞质中进行。这是§10.1与§10.2的区室化原则应用于一对具体途径。" },
    { cz: "rozdíl 3b: multienzymový komplex", en: "Difference 3, second half: synthesis runs on a MULTIENZYME COMPLEX, all intermediates remain bound to the enzymes, and only the finished sixteen- and eighteen-carbon acyl-CoA are released. A pathway that never releases its intermediates cannot be reversed or intercepted by another pathway.", cn: "差异3的后半：合成在一个**多酶复合体**上进行，所有中间体都保持与酶结合，只有完成的十六碳与十八碳酰基CoA才被释放。一条从不释放中间体的途径，既无法被逆转，也无法被别的途径截取。" },
    { cz: "glycerofosfát pochází z metabolismu cukrů", en: "For the synthesis of a fat MOLECULE, besides acyl-CoA one also needs glycerophosphate, and that comes from sugar metabolism. Making a fat therefore requires a carbohydrate contribution.", cn: "合成一**分子脂肪**除酰基CoA外还需要甘油磷酸，而它来自糖代谢。因此制造脂肪必须有糖类的贡献。" },
    { cz: "smyčka cukr–tuk", en: "Taken with 10-8, this closes a loop: sugar metabolism supplies the glycerophosphate backbone of a fat, and fat hydrolysis returns glycerol to sugar metabolism. The two nutrient classes exchange the backbone freely — but not, as §10.1.3 will show, the acyl carbon.", cn: "与10-8合起来看，这闭合了一个回路：糖代谢提供脂肪的甘油磷酸骨架，脂肪水解又把甘油还给糖代谢。两类养分自由交换骨架——但正如§10.1.3将要说明的，酰基上的碳则不然。" }
  ],
  terms: [
    { cz: "malonyl-CoA", en: "malonyl-CoA", cn: "丙二酰CoA", def_en: "The carboxylated, activated form of acetyl-CoA that begins fatty acid synthesis; has no counterpart in degradation.", def_cn: "开启脂肪酸合成的、经羧化活化的乙酰CoA形式；在分解过程中没有对应物。" },
    { cz: "multienzymový komplex", en: "multienzyme complex", cn: "多酶复合体", def_en: "The cytoplasmic assembly on which fatty acid synthesis runs; holds every intermediate bound and releases only finished C16 and C18 acyl-CoA.", def_cn: "脂肪酸合成所在的胞质装置；使每一个中间体都保持结合，只释放完成的C16与C18酰基CoA。" },
    { cz: "glycerofosfát", en: "glycerophosphate", cn: "甘油磷酸", def_en: "The phosphorylated glycerol backbone needed, besides acyl-CoA, to build a fat molecule; supplied by sugar metabolism.", def_cn: "构建一分子脂肪时除酰基CoA外所需的磷酸化甘油骨架；由糖代谢供给。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which of these is NOT one of the three differences the book gives between fatty acid synthesis and degradation?",
      q_cn: "以下哪一项**不是**教材所给出的脂肪酸合成与分解之间的三点差异？",
      options: [
        "Synthesis begins with carboxylation of acetyl to malonyl-CoA",
        "Synthesis uses NADPH as hydrogen donor whereas oxidation produces NADH",
        "Synthesis runs on a cytoplasmic multienzyme complex whereas degradation is mitochondrial",
        "Synthesis removes two carbons at a time whereas degradation adds them"
      ],
      answer: 3,
      why_en: "The three differences are carboxylation to malonyl-CoA, NADPH versus NADH, and the compartment/multienzyme-complex separation. Option 3 has the directions backwards anyway — synthesis ADDS two-carbon units and degradation REMOVES them.",
      why_cn: "三点差异是：羧化为丙二酰CoA、NADPH对NADH，以及区室/多酶复合体的分隔。选项3本身方向也弄反了——合成是**添加**二碳单元，分解是**移除**它们。"
    },
    {
      type: "short",
      q_en: "What is released from the fatty acid synthase multienzyme complex, and what stays bound?",
      q_cn: "脂肪酸合成的多酶复合体释放出什么？什么保持结合？",
      accept: ["sixteen", "eighteen", "16", "18", "acyl-CoA", "intermediates", "bound"],
      answer_en: "All the intermediates remain bound to the enzymes; only the finished sixteen- and eighteen-carbon acyl-CoA are released.",
      answer_cn: "所有中间体都保持与酶结合；只有完成的十六碳与十八碳酰基CoA被释放。"
    }
  ],
  oral: {
    q_en: "Fatty acid synthesis looks like β-oxidation in reverse. In what ways is it not?",
    q_cn: "脂肪酸合成看起来像是β-氧化的逆过程。它在哪些方面并非如此？",
    model_en: "Formally the resemblance is real — both work in two-carbon units, both start or end at acetyl-CoA. But the textbook gives three fundamental differences, and they are the answer to this question. First, synthesis does not simply add an acetyl unit; it begins by activating the inactive methyl group of the acetyl, carboxylating it to malonyl-CoA. There is nothing corresponding to that in degradation. Second, the reducing power is different: synthesis uses NADPH as its hydrogen donor, whereas oxidation produces NADH. That is the same segregation you see with the pentose phosphate pathway — NADH goes to the respiratory chain, NADPH is reserved for biosynthesis, and keeping them separate is how the cell keeps the two directions from short-circuiting each other. Third, they happen in different places and on different machinery: degradation is mitochondrial, whereas synthesis runs on a multienzyme complex in the cytoplasm, and on that complex every intermediate stays bound to the enzymes — only the finished sixteen- and eighteen-carbon acyl-CoAs are let go. That last detail matters more than it looks: a pathway that never releases an intermediate cannot be run backwards and cannot be raided by a competing pathway. And one addition: to build an actual fat you also need glycerophosphate, and that comes from sugar metabolism.",
    checklist: [
      "Acknowledged the formal similarity before giving the differences",
      "Difference 1: carboxylation of acetyl to malonyl-CoA",
      "Difference 2: NADPH for synthesis versus NADH from oxidation, with the reason for segregating them",
      "Difference 3: mitochondrial degradation versus cytoplasmic multienzyme-complex synthesis",
      "Noted that intermediates stay bound and only C16/C18 acyl-CoA are released, and why that matters",
      "Added that glycerophosphate for the fat molecule comes from sugar metabolism"
    ]
  }
},

{
  id: "10-10",
  chapter: 10,
  section: "10.1.3",
  czTitle: "Vztah metabolismu sacharidů a lipidů — proč z tuků nevzniknou cukry",
  enTitle: "The relation of carbohydrate and lipid metabolism — why fats cannot make sugars",
  cnTitle: "糖类与脂质代谢的关系——脂肪为何不能生成糖",
  pages: [220],
  coverage: "full",
  coverageNote: "Section 10.1.3 on p.220 read in full; it is a single short paragraph and this node covers it completely. The final sentence -- that the animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis, and therefore also cannot form saccharides from fats -- is the load-bearing claim of the section and is reproduced exactly, since it is precisely what the missing arrow in Obr. 10.1 (see node 10-5) encodes. Note the qualifier 'zivocisny organismus' (the ANIMAL organism): the book restricts the claim to animals, which is correct, since the glyoxylate cycle of plants and some microorganisms does exactly what is here said to be impossible (see kap. 6.2.3, covered in chapter 6).",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 p.99 — title-match only per the HANDOFF §11 map, these note pages have never actually been read)", status: "partial" },
  summary: {
    en: "Both these groups of nutrients — saccharides and lipids — are degraded in the organism to acetyl-CoA, and that shared destination is what makes the whole relationship possible. What happens next is decided by the cell's energy status. When the cell NEEDS energy, acetyl-CoA can be oxidized to carbon dioxide and water by the citrate cycle and the respiratory chain. When the energy demands of the cell are LOW, acetyl-CoA is used above all for the synthesis of fatty acids and fats. From this the book draws a familiar physiological consequence: in the organism, in the case of an excess supply of EITHER saccharides OR fats, the nutrients are converted into fats and stored. Sugar becomes fat. But the traffic does not run both ways, and the section ends with the reason: the animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis, and therefore also cannot form saccharides from fats. Two things are worth holding onto. First, this is exactly the missing arrow in Obr. 10.1 — the diagram encodes the same claim by omission. Second, the book says the ANIMAL organism, and that restriction is deliberate and correct: plants and some microorganisms possess the glyoxylate cycle (kap. 6.2.3), which accomplishes precisely this conversion, which is how a germinating oilseed turns stored fat into sugar.",
    cn: "这两类养分——糖类与脂质——在机体中都被降解为乙酰CoA，正是这一共同的去处使整个关系成为可能。接下来发生什么，由细胞的能量状态决定。当细胞**需要**能量时，乙酰CoA可经柠檬酸循环与呼吸链被氧化为二氧化碳和水。当细胞的能量需求**低**时，乙酰CoA主要被用于合成脂肪酸与脂肪。由此教材导出一个熟悉的生理后果：在机体中，无论是糖类**还是**脂肪供应过量，养分都会被转变为脂肪并贮存起来。糖变成脂肪。但这条通路并非双向，本节以其理由收尾：动物机体无法把乙酰CoA转变为丙酮酸（糖合成的起始化合物），因而也无法由脂肪生成糖。有两点值得记住。其一，这正是图10.1中缺失的那条箭头——该图以省略的方式编码了同一论断。其二，教材说的是**动物**机体，这一限定是有意为之且正确的：植物与某些微生物拥有乙醛酸循环（第6.2.3节），它恰恰完成了这一转变，萌发中的油料种子正是这样把贮存的脂肪变成糖的。"
  },
  points: [
    { cz: "obě skupiny se sbíhají na acetyl-CoA", en: "Both saccharides and lipids are degraded in the organism to acetyl-CoA. This shared destination is the basis of every connection between the two.", cn: "糖类与脂质在机体中都被降解为乙酰CoA。这个共同的去处是二者之间一切联系的基础。" },
    { cz: "vysoké nároky → oxidace", en: "When the cell needs energy, acetyl-CoA can be oxidized to carbon dioxide and water by the citrate cycle and the respiratory chain.", cn: "当细胞需要能量时，乙酰CoA可经柠檬酸循环与呼吸链被氧化为二氧化碳与水。" },
    { cz: "nízké nároky → syntéza tuků", en: "When the energy demands of the cell are low, acetyl-CoA is used above all for the synthesis of fatty acids and fats. The same molecule, two destinations, selected by energy status.", cn: "当细胞的能量需求低时，乙酰CoA主要被用于合成脂肪酸与脂肪。同一个分子、两个去向，由能量状态来选择。" },
    { cz: "nadbytek čehokoli → tuk", en: "It follows that in the organism, in the case of an excess supply of EITHER saccharides OR fats, the nutrients are converted into fats and stored. Excess of any kind ends up as fat.", cn: "由此可知，在机体中，无论是糖类**还是**脂肪供应过量，养分都会被转变为脂肪并贮存。任何形式的过量最终都变成脂肪。" },
    { cz: "acetyl-CoA nelze převést na pyruvát", en: "The animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis, and therefore also cannot form saccharides from fats. This is the load-bearing sentence of the section.", cn: "动物机体无法把乙酰CoA转变为丙酮酸（糖合成的起始化合物），因而也无法由脂肪生成糖。这是本节承重的一句。" },
    { cz: "shodné s chybějící šipkou v obr. 10.1", en: "This is precisely the arrow missing from Obr. 10.1 (node 10-5): the diagram makes the same claim by omission that this paragraph makes in words.", cn: "这正是图10.1中缺失的那条箭头（节点10-5）：该图以省略的方式作出了本段用文字作出的同一论断。" },
    { cz: "omezeno na ŽIVOČIŠNÝ organismus", en: "Note the qualifier: the book says the ANIMAL organism. The restriction is correct and deliberate — plants and some microorganisms have the glyoxylate cycle (kap. 6.2.3), which does exactly this conversion, and that is how a germinating oilseed turns stored fat into sugar.", cn: "注意这个限定词：教材说的是**动物**机体。这一限制正确且有意为之——植物与某些微生物拥有乙醛酸循环（第6.2.3节），它恰恰完成这一转变，萌发中的油料种子正是这样把贮存的脂肪变成糖的。" },
    { cz: "výjimka: glycerol", en: "One partial exception is worth keeping in view: the GLYCEROL half of a fat does reach sugar metabolism (node 10-8). What cannot become sugar in an animal is the acyl carbon, i.e. the great majority of a fat's mass.", cn: "有一个局部例外值得留意：脂肪中**甘油**的那一半确实能进入糖代谢（节点10-8）。在动物体内不能变成糖的是酰基上的碳，即脂肪质量的绝大部分。" }
  ],
  terms: [
    { cz: "glyoxylátový cyklus", en: "glyoxylate cycle", cn: "乙醛酸循环", def_en: "The pathway in plants and some microorganisms (kap. 6.2.3) that allows net conversion of acetyl-CoA into carbohydrate; its absence in animals is why fats cannot make sugars there.", def_cn: "植物与某些微生物中的途径（第6.2.3节），使乙酰CoA能够净转变为糖；动物缺乏它，正是脂肪在动物体内无法生成糖的原因。" },
    { cz: "energetický stav buňky", en: "cellular energy status", cn: "细胞能量状态", def_en: "The determinant of whether acetyl-CoA is oxidized for energy or invested in fat; the branch point of Obr. 10.1.", def_cn: "决定乙酰CoA是被氧化供能还是被投入脂肪的因素；即图10.1的分岔点。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why can the animal organism not make saccharides from fats?",
      q_cn: "动物机体为何不能由脂肪制造糖？",
      options: [
        "Because fatty acid degradation does not reach acetyl-CoA",
        "Because it cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis",
        "Because the citrate cycle consumes all the acetyl-CoA",
        "Because glycerol cannot be phosphorylated"
      ],
      answer: 1,
      why_en: "The book's stated reason is the missing acetyl-CoA → pyruvate conversion. Fatty acid degradation certainly does reach acetyl-CoA (that is the premise), and glycerol certainly can be phosphorylated and does join sugar metabolism — it is the acyl carbon that is stuck.",
      why_cn: "教材给出的理由是缺少「乙酰CoA→丙酮酸」这一转变。脂肪酸降解当然抵达乙酰CoA（那正是前提），甘油也确实能被磷酸化并并入糖代谢——被卡住的是酰基上的碳。"
    },
    {
      type: "short",
      q_en: "What determines whether acetyl-CoA is oxidized or used for fat synthesis?",
      q_cn: "是什么决定乙酰CoA被氧化还是被用于脂肪合成？",
      accept: ["energy", "demand", "need", "status", "low", "high"],
      answer_en: "The cell's energy status. When the cell needs energy, acetyl-CoA is oxidized by the citrate cycle and respiratory chain; when energy demands are low, it goes above all into fatty acid and fat synthesis.",
      answer_cn: "细胞的能量状态。细胞需要能量时，乙酰CoA经柠檬酸循环与呼吸链被氧化；能量需求低时，它主要进入脂肪酸与脂肪的合成。"
    }
  ],
  oral: {
    q_en: "Explain the relationship between carbohydrate and lipid metabolism, and why it is asymmetric.",
    q_cn: "请解释糖类与脂质代谢的关系，以及它为何是不对称的。",
    model_en: "Both classes of nutrient are degraded to the same molecule, acetyl-CoA, and that shared destination is what connects them. What happens to that acetyl-CoA depends on the cell's energy status. If the cell needs energy, it is oxidized to carbon dioxide and water by the citrate cycle and respiratory chain. If energy demands are low, it goes instead into fatty acid and fat synthesis. The everyday consequence the textbook draws is that an excess of either kind of nutrient — sugar or fat — ends up stored as fat. But the relationship is asymmetric, and here is why. The animal organism cannot convert acetyl-CoA back into pyruvate, and pyruvate is the starting compound for making sugars. So sugar can become fat, but fat cannot become sugar. That is also exactly what figure ten-one is telling you by what it omits: there is no arrow leading back up from acetyl-CoA to pyruvate. Two refinements worth adding. The book says the animal organism, and that qualifier is deliberate — plants and some microbes have the glyoxylate cycle, which does exactly this conversion, which is how an oilseed germinates on stored fat. And even in animals there is a partial exception: the glycerol backbone of a fat does reach sugar metabolism. What is stuck is the acyl carbon, which is most of the mass.",
    checklist: [
      "Identified acetyl-CoA as the shared destination of both nutrient classes",
      "Gave energy status as the determinant of oxidation versus fat synthesis",
      "Stated that excess of either nutrient is stored as fat",
      "Gave the reason for the asymmetry: acetyl-CoA cannot be converted to pyruvate in animals",
      "Connected it to the missing arrow in Obr. 10.1",
      "Noted the 'animal organism' qualifier and the glyoxylate cycle exception in plants/microbes",
      "Noted the partial exception of glycerol"
    ]
  }
},

{
  id: "10-11",
  chapter: 10,
  section: "10.1.4",
  czTitle: "Citrátový cyklus a respirační řetězec — energetika i biosyntéza",
  enTitle: "The citrate cycle and respiratory chain — energetics and biosynthesis",
  cnTitle: "柠檬酸循环与呼吸链——能量学与生物合成",
  pages: [220, 221],
  coverage: "full",
  coverageNote: "Section 10.1.4 from the foot of p.220 across onto the first two lines of p.221, read in full. The coenzyme tally was read with its parenthetical attributions exactly as printed: 1 FADH2 (dehydrogenation of succinate to fumarate) and 3 NADH (oxidative conversions of isocitrate, alpha-oxoglutarate and malate), plus 1 macroergic GTP formed during the oxidative decarboxylation of alpha-oxoglutarate. The anabolic outputs were also read directly: alpha-ketoglutarate and oxaloacetate transaminated to amino acids, succinyl-CoA reacting with glycine to give delta-aminolevulate and hence porphyrins (kap. 6.3), and fumarate connecting the cycle with tyrosine and aspartic acid metabolism (kap. 5) -- this last sentence is the one that falls on p.221.",
  cnNote: { topic: "二十", title: "柠檬酸循环 (笔记 p.119 — title-match only per the HANDOFF §11 map, used by chapter 6 as 'partial'; never read). 呼吸链部分对应 二十一 氧化磷酸化作用 (笔记 p.127), 同样仅凭标题匹配", status: "partial" },
  summary: {
    en: "In the citrate cycle (kap. 6.2.2) the residues of acetic acid — the acetyl groups — are oxidized up to carbon dioxide, and the hydrogen atoms are used for the reduction of coenzymes. In the first step acetyl-CoA binds to oxaloacetate and citrate arises; this six-carbon compound is DECARBOXYLATED TWICE in the cycle. In one turn there arise 1 FADH₂ (in the dehydrogenation of succinate to fumarate) and 3 NADH (in the oxidative conversions of isocitrate, α-oxoglutarate and malate), and 1 macroergic compound — GTP — is also formed, during the oxidative decarboxylation of α-oxoglutarate. The actual conversion of the main share of the energy contained in acetyl-CoA takes place not here but in the respiratory chain (kap. 6.2.4), during the reoxidation of the reduced coenzymes NADH and FADH₂; this sequence of redox reactions is connected with so-called aerobic phosphorylation. The book adds two qualifications about that partnership: the respiratory chain also reoxidizes reduced coenzymes originating from OTHER reactions — the citrate cycle is merely their most significant supplier, not their only one — and the two processes are moreover localized in close proximity in the mitochondria. Finally, the citrate cycle is not only catabolic. It can also serve as a SOURCE OF INTERMEDIATES for synthetic reactions: α-ketoglutarate and oxaloacetate are converted in transamination reactions into amino acids; succinyl-CoA provides, by reaction with glycine, δ-aminolevulate, from which porphyrins are formed (kap. 6.3); and through fumarate the cycle is connected with the metabolism of the amino acids tyrosine and aspartic acid (kap. 5).",
    cn: "在柠檬酸循环（第6.2.2节）中，乙酸残基——即乙酰基——被氧化直至二氧化碳，氢原子则用于还原辅酶。第一步中乙酰CoA与草酰乙酸结合生成柠檬酸；这个六碳化合物在循环中被**脱羧两次**。一轮循环产生1个FADH₂（在琥珀酸脱氢为延胡索酸时）与3个NADH（在异柠檬酸、α-酮戊二酸与苹果酸的氧化转变中），并且在α-酮戊二酸的氧化脱羧过程中还生成1个高能化合物——GTP。乙酰CoA所含能量的主要份额，其真正的转换并不在此处发生，而是在呼吸链中（第6.2.4节），即在还原型辅酶NADH与FADH₂的再氧化过程中；这一系列氧化还原反应与所谓的需氧磷酸化相偶联。教材为这一伙伴关系补充了两点限定：呼吸链也再氧化来自**其他**反应的还原型辅酶——柠檬酸循环只是它们最重要的供应者，而非唯一供应者；而且两个过程在线粒体中定位得彼此紧邻。最后，柠檬酸循环并不只是分解性的。它还能充当合成反应的**中间体来源**：α-酮戊二酸与草酰乙酸经转氨反应转变为氨基酸；琥珀酰CoA与甘氨酸反应提供δ-氨基乙酰丙酸，由它生成卟啉（第6.3节）；而通过延胡索酸，该循环与酪氨酸和天冬氨酸的代谢相连（第5章）。"
  },
  points: [
    { cz: "acetyl na CO₂, vodík na koenzymy", en: "In the citrate cycle the acetyl residues are oxidized up to carbon dioxide, and the hydrogen atoms are used for the reduction of coenzymes. Carbon out as gas, hydrogen out on carriers.", cn: "在柠檬酸循环中乙酰基被氧化直至二氧化碳，氢原子则用于还原辅酶。碳以气体形式离开，氢则搭载在载体上离开。" },
    { cz: "acetyl-CoA + oxalacetát → citrát, dvakrát dekarboxylace", en: "In the first step acetyl-CoA binds to oxaloacetate and citrate arises; this six-carbon compound is decarboxylated twice in the cycle.", cn: "第一步中乙酰CoA与草酰乙酸结合生成柠檬酸；这个六碳化合物在循环中被脱羧两次。" },
    { cz: "1 FADH₂ — sukcinát → fumarát", en: "One FADH₂ per turn, specifically in the dehydrogenation of succinate to fumarate.", cn: "每轮1个FADH₂，具体是在琥珀酸脱氢为延胡索酸时产生。" },
    { cz: "3 NADH — isocitrát, α-oxoglutarát, malát", en: "Three NADH per turn, in the oxidative conversions of isocitrate, α-oxoglutarate and malate. Naming the three substrates is what makes the tally memorable rather than arbitrary.", cn: "每轮3个NADH，产生于异柠檬酸、α-酮戊二酸与苹果酸的氧化转变中。点明这三个底物，才使这个计数可记而非武断。" },
    { cz: "1 GTP při oxidační dekarboxylaci α-oxoglutarátu", en: "One macroergic compound — GTP — is also formed in the cycle, during the oxidative decarboxylation of α-oxoglutarate.", cn: "循环中还生成1个高能化合物——GTP——产生于α-酮戊二酸的氧化脱羧过程中。" },
    { cz: "hlavní energie se získá až v dýchacím řetězci", en: "The conversion of the MAIN share of the energy contained in acetyl-CoA takes place in the respiratory chain, during reoxidation of NADH and FADH₂; this sequence of redox reactions is connected with aerobic phosphorylation. The cycle itself yields only one GTP directly.", cn: "乙酰CoA所含能量的**主要**份额，其转换发生在呼吸链中，即NADH与FADH₂的再氧化过程；这一系列氧化还原反应与需氧磷酸化相偶联。循环本身只直接产出一个GTP。" },
    { cz: "citrátový cyklus není jediný dodavatel", en: "The respiratory chain also reoxidizes reduced coenzymes originating from OTHER reactions; the citrate cycle is their most significant supplier, not the only one. Moreover both processes are localized in close proximity in the mitochondria.", cn: "呼吸链也再氧化来自**其他**反应的还原型辅酶；柠檬酸循环是它们最重要的供应者，而非唯一供应者。此外两个过程在线粒体中定位得彼此紧邻。" },
    { cz: "anabolická role: transaminace", en: "The cycle can also serve as a source of intermediates for synthetic reactions: α-ketoglutarate and oxaloacetate are converted in transamination reactions into amino acids.", cn: "该循环还能充当合成反应的中间体来源：α-酮戊二酸与草酰乙酸经转氨反应转变为氨基酸。" },
    { cz: "anabolická role: sukcinyl-CoA → porfyriny", en: "Succinyl-CoA provides, by reaction with glycine, δ-aminolevulate, from which porphyrins are formed (kap. 6.3) — the haem and chlorophyll route.", cn: "琥珀酰CoA与甘氨酸反应提供δ-氨基乙酰丙酸，由它生成卟啉（第6.3节）——即血红素与叶绿素的路线。" },
    { cz: "anabolická role: fumarát", en: "Through fumarate the citrate cycle is connected with the metabolism of the amino acids tyrosine and aspartic acid (kap. 5).", cn: "通过延胡索酸，柠檬酸循环与酪氨酸和天冬氨酸的代谢相连（第5章）。" }
  ],
  terms: [
    { cz: "amfibolická dráha", en: "amphibolic pathway", cn: "两性途径", def_en: "A pathway serving both catabolism and anabolism. The citrate cycle is the classic case: it oxidizes acetyl for energy AND exports α-ketoglutarate, oxaloacetate, succinyl-CoA and fumarate for biosynthesis.", def_cn: "同时服务于分解代谢与合成代谢的途径。柠檬酸循环是典型：它既氧化乙酰基供能，又输出α-酮戊二酸、草酰乙酸、琥珀酰CoA与延胡索酸供生物合成。" },
    { cz: "δ-aminolevulát", en: "δ-aminolevulate", cn: "δ-氨基乙酰丙酸", def_en: "Formed from succinyl-CoA plus glycine; the precursor from which porphyrins are built (kap. 6.3).", def_cn: "由琥珀酰CoA与甘氨酸生成；是构建卟啉的前体（第6.3节）。" },
    { cz: "aerobní fosforylace", en: "aerobic phosphorylation", cn: "需氧磷酸化", def_en: "The book's term for the ATP synthesis coupled to the respiratory chain's reoxidation of NADH and FADH₂.", def_cn: "教材用来指与呼吸链再氧化NADH、FADH₂相偶联的ATP合成的术语。" },
    { cz: "makroergická sloučenina", en: "macroergic compound", cn: "高能化合物", def_en: "A compound with a high-energy bond, such as the GTP formed during the oxidative decarboxylation of α-oxoglutarate.", def_cn: "含高能键的化合物，例如在α-酮戊二酸氧化脱羧过程中生成的GTP。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In one turn of the citrate cycle, which conversions give the 3 NADH?",
      q_cn: "在柠檬酸循环的一轮中，哪些转变产生那3个NADH？",
      options: [
        "Citrate, succinate and fumarate",
        "Isocitrate, α-oxoglutarate and malate",
        "Succinate, fumarate and malate",
        "Acetyl-CoA, citrate and isocitrate"
      ],
      answer: 1,
      why_en: "The book names them explicitly: the 3 NADH come from the oxidative conversions of isocitrate, α-oxoglutarate and malate. The single FADH₂ comes from the dehydrogenation of succinate to fumarate — succinate is therefore the FAD step, not an NAD one.",
      why_cn: "教材明确点名：3个NADH来自异柠檬酸、α-酮戊二酸与苹果酸的氧化转变。唯一的FADH₂来自琥珀酸脱氢为延胡索酸——因此琥珀酸对应的是FAD那一步，而非NAD。"
    },
    {
      type: "short",
      q_en: "Give three biosynthetic uses of citrate cycle intermediates named in this section.",
      q_cn: "说出本节所点名的柠檬酸循环中间体的三项生物合成用途。",
      accept: ["transamination", "amino acid", "oxaloacetate", "ketoglutarate", "succinyl", "aminolevulate", "porphyrin", "fumarate", "tyrosine", "aspartic"],
      answer_en: "α-Ketoglutarate and oxaloacetate → amino acids by transamination; succinyl-CoA + glycine → δ-aminolevulate → porphyrins (kap. 6.3); fumarate connects the cycle with tyrosine and aspartic acid metabolism (kap. 5).",
      answer_cn: "α-酮戊二酸与草酰乙酸经转氨作用→氨基酸；琥珀酰CoA+甘氨酸→δ-氨基乙酰丙酸→卟啉（第6.3节）；延胡索酸把该循环与酪氨酸、天冬氨酸的代谢相连（第5章）。"
    }
  ],
  oral: {
    q_en: "Account for the citrate cycle's yield and explain why it is not purely a catabolic pathway.",
    q_cn: "请说明柠檬酸循环的产出，并解释它为何并非纯粹的分解代谢途径。",
    model_en: "Per turn, acetyl-CoA condenses with oxaloacetate to give citrate, and that six-carbon molecule is decarboxylated twice, so the two carbons that came in leave as carbon dioxide. The hydrogen goes onto coenzymes: one FADH-two, from the dehydrogenation of succinate to fumarate, and three NADH, from the oxidative conversions of isocitrate, alpha-oxoglutarate and malate. There is also one macroergic compound made directly, a GTP, during the oxidative decarboxylation of alpha-oxoglutarate. But the cycle itself is not where the energy is harvested — the main share of the energy in acetyl-CoA is converted in the respiratory chain, when those reduced coenzymes are reoxidized and aerobic phosphorylation is coupled to it. The textbook adds a nice qualification: the respiratory chain also handles reduced coenzymes from other reactions; the citrate cycle is its most significant supplier, not its only one, and the two sit close together in the mitochondrion. Now, why it is not purely catabolic. The cycle is also a source of biosynthetic intermediates. Alpha-ketoglutarate and oxaloacetate are transaminated into amino acids. Succinyl-CoA reacts with glycine to give delta-aminolevulate, which is the precursor of the porphyrins. And fumarate ties the cycle into tyrosine and aspartate metabolism. So it is amphibolic — it burns and it supplies.",
    checklist: [
      "Gave the condensation with oxaloacetate and the two decarboxylations",
      "Gave 1 FADH₂ and correctly attributed it to succinate → fumarate",
      "Gave 3 NADH and correctly named isocitrate, α-oxoglutarate and malate",
      "Gave the GTP and located it at the α-oxoglutarate oxidative decarboxylation",
      "Stated that the main energy conversion happens in the respiratory chain, coupled to aerobic phosphorylation",
      "Noted that the citrate cycle is the chief but not the only supplier of reduced coenzymes",
      "Gave at least two biosynthetic exits and concluded the cycle is amphibolic"
    ]
  }
},

{
  id: "10-12",
  chapter: 10,
  section: "10.2",
  czTitle: "Regulační mechanismy — proč a na jakých úrovních",
  enTitle: "Regulatory mechanisms — why, and at what levels",
  cnTitle: "调节机制——为什么，以及在哪些层面",
  pages: [221],
  coverage: "full",
  coverageNote: "The opening two paragraphs of section 10.2 on p.221 read in full. The book's justification for regulation is reproduced in its own terms -- with uncontrolled coexistence, enzyme reactions at many places of metabolism would run uselessly, or the effects of some enzyme systems would MUTUALLY INTERFERE -- because those are two distinct failure modes and a summary that keeps only 'waste' loses half of it. The full ladder of regulatory levels was read as listed (whole organism, a certain organ, cell, system of enzyme reactions, single enzyme reaction) together with the physiological classification (nervous or hormonal) and the book's own declared scope for what follows.",
  cnNote: { topic: null, title: "no matching topic found in the Chinese notes' 27-topic list or its unnumbered tail (checked against the HANDOFF §11 map; §10.3 Hormony does have a match, but metabolic regulation as such does not)", status: "pending" },
  summary: {
    en: "Section 10.2 opens by justifying why regulation is necessary at all, and it names TWO distinct failure modes, not one. With uncontrolled coexistence, enzyme reactions at many places of metabolism would run USELESSLY — the waste problem — or the effects of some enzyme systems would MUTUALLY INTERFERE — the conflict problem. The second is the more serious: a futile cycle in which a synthetic and a degradative pathway both run at full speed does not merely waste ATP, it makes the cell's state undefined. The book's conclusion is stated as a conditional: a high degree of organization is possible ONLY under conditions of consistent regulation of enzyme reactions. Regulation is not an optimisation added to a working system; it is what makes the organized system possible. Regulation of metabolic processes can then be considered at various levels, and the book gives them as a descending ladder: the metabolism of the whole organism, of a certain organ, of a cell, of a system of enzyme reactions, of a single enzyme reaction. Cutting across that ladder, from the physiological point of view, regulation can be classified as NERVOUS or HORMONAL. Having laid out the whole map, the book then declares its own scope explicitly: we will concentrate on the possibilities of regulating a SINGLE ENZYME REACTION and SYSTEMS OF ENZYME REACTIONS. That is why the mechanisms that follow are all biochemical, and why the nervous level never reappears while the hormonal level gets its own section (§10.3).",
    cn: "§10.2开篇即论证为何根本需要调节，并且点出了**两种**不同的失效模式，而非一种。在不受控的共存状态下，代谢中许多位点的酶反应会**徒劳地**进行——浪费问题——或者某些酶系统的作用会**彼此干扰**——冲突问题。后者更为严重：一个合成途径与一个降解途径同时全速运行的无效循环，不只是浪费ATP，它使细胞的状态变得不确定。教材的结论以条件句给出：高度的组织化**只有**在酶反应受到一贯调节的条件下才是可能的。调节不是加在一个已能运转的系统上的优化；它正是使有组织的系统成为可能的东西。随后，代谢过程的调节可以在不同层面上加以考虑，教材把它们列成一架自上而下的阶梯：整个机体的代谢、某一器官的、细胞的、酶反应系统的、单一酶反应的。横切这架阶梯，从生理学角度看，调节可分为**神经性**或**激素性**。在铺开整幅地图之后，教材明确宣告了自身的范围：我们将集中于**单一酶反应**与**酶反应系统**的调节可能性。这正是为何随后的各种机制全都是生化性的，也是为何神经层面此后不再出现、而激素层面却拥有自己的一节（§10.3）。"
  },
  points: [
    { cz: "dva důvody: neužitečnost a vzájemné rušení", en: "With uncontrolled coexistence, enzyme reactions at many places of metabolism would run USELESSLY, or the effects of some enzyme systems would MUTUALLY INTERFERE. Two distinct failure modes — waste, and conflict.", cn: "在不受控的共存状态下，代谢中许多位点的酶反应会**徒劳地**进行，或者某些酶系统的作用会**彼此干扰**。这是两种不同的失效模式——浪费与冲突。" },
    { cz: "organizace je možná JEN za podmínek regulace", en: "A high degree of organization is possible ONLY under conditions of consistent regulation of enzyme reactions. Regulation is stated as a precondition of organization, not as an improvement to it.", cn: "高度的组织化**只有**在酶反应受到一贯调节的条件下才是可能的。调节被表述为组织化的前提条件，而非对它的改进。" },
    { cz: "žebřík úrovní", en: "Regulation can be considered at various levels, listed in descending order: the metabolism of the whole organism, of a certain organ, of a cell, of a system of enzyme reactions, of a single enzyme reaction.", cn: "调节可在不同层面上考虑，按自上而下的顺序列出：整个机体的代谢、某一器官的、细胞的、酶反应系统的、单一酶反应的。" },
    { cz: "fyziologicky: nervová nebo hormonální", en: "From the physiological point of view, regulation can be classified as nervous or hormonal. This classification cuts across the level ladder rather than being part of it.", cn: "从生理学角度看，调节可分为神经性或激素性。这一分类横切上述层级阶梯，而非其中的一层。" },
    { cz: "deklarovaný rozsah kapitoly", en: "The book then declares its scope: we will concentrate on the possibilities of regulating a SINGLE enzyme reaction and SYSTEMS of enzyme reactions. This explains why everything that follows in §10.2 is biochemical, why the nervous level never returns, and why the hormonal level is given its own §10.3.", cn: "随后教材宣告其范围：我们将集中于**单一**酶反应与酶反应**系统**的调节可能性。这解释了为何§10.2后文全是生化内容、为何神经层面不再出现，以及为何激素层面获得了独立的§10.3。" }
  ],
  terms: [
    { cz: "regulace", en: "regulation", cn: "调节", def_en: "The consistent control of enzyme reactions, without which a high degree of metabolic organization is, per this book, not possible at all.", def_cn: "对酶反应的一贯控制；按本教材所述，没有它，高度的代谢组织化根本不可能。" },
    { cz: "úrovně regulace", en: "levels of regulation", cn: "调节层面", def_en: "Whole organism → organ → cell → system of enzyme reactions → single enzyme reaction. §10.2 treats only the bottom two.", def_cn: "整个机体→器官→细胞→酶反应系统→单一酶反应。§10.2只处理最下面两层。" },
    { cz: "nervová vs hormonální regulace", en: "nervous vs hormonal regulation", cn: "神经性调节与激素性调节", def_en: "The physiological classification of regulation. This book develops only the hormonal branch, in §10.3.", def_cn: "调节的生理学分类。本教材只在§10.3中展开激素这一支。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What TWO problems does the book say would arise from uncontrolled coexistence of enzyme reactions?",
      q_cn: "教材说酶反应在不受控的共存状态下会产生哪**两个**问题？",
      options: [
        "Reactions would be too slow, and substrates would be exhausted",
        "Reactions would run uselessly, and the effects of some enzyme systems would mutually interfere",
        "Enzymes would denature, and products would accumulate",
        "Compartments would mix, and membranes would fail"
      ],
      answer: 1,
      why_en: "The book names exactly these two: useless running (waste) and mutual interference between enzyme systems (conflict). It concludes that a high degree of organization is possible only under consistent regulation.",
      why_cn: "教材点名的正是这两项：徒劳地运行（浪费）以及酶系统之间的彼此干扰（冲突）。其结论是：高度的组织化只有在一贯调节之下才可能。"
    },
    {
      type: "short",
      q_en: "Which levels of regulation does §10.2 actually go on to treat?",
      q_cn: "§10.2 实际上处理的是哪些调节层面？",
      accept: ["single enzyme", "one enzyme", "system", "enzyme reactions"],
      answer_en: "The single enzyme reaction and systems of enzyme reactions — the bottom two rungs of the ladder. The organism, organ and cell levels, and the nervous branch, are named but not developed here.",
      answer_cn: "单一酶反应与酶反应系统——即阶梯最下面的两层。机体、器官、细胞层面以及神经这一支只被点名而未在此展开。"
    }
  ],
  oral: {
    q_en: "Why does metabolism need regulation, and at what levels can it be regulated?",
    q_cn: "代谢为何需要调节？可以在哪些层面上进行调节？",
    model_en: "The textbook gives two reasons, and they are worth separating. If enzyme reactions simply coexisted without control, then reactions at many points of metabolism would run uselessly — that is the waste problem — and the effects of some enzyme systems would actively interfere with each other, which is the more serious one. Think of a synthetic and a degradative pathway both running flat out on the same intermediate: you do not just burn ATP, you leave the cell's state undefined. So the conclusion is put as a condition, not an improvement: a high degree of organization is possible only where enzyme reactions are consistently regulated. Regulation is what makes the organized system possible in the first place. As for the levels, the book gives a descending ladder — the metabolism of the whole organism, of an organ, of a cell, of a system of enzyme reactions, and of a single enzyme reaction. Cutting across that, physiologically, you can classify regulation as nervous or hormonal. And then the book states its own scope: from here it will deal only with the single enzyme reaction and with systems of enzyme reactions. That is why what follows is all biochemistry, why the nervous level never comes back, and why hormones get a section of their own.",
    checklist: [
      "Gave both failure modes: useless running and mutual interference",
      "Explained why interference is the more serious problem",
      "Stated the conclusion as a precondition: organization requires consistent regulation",
      "Listed the five levels from whole organism down to single enzyme reaction",
      "Gave the nervous/hormonal physiological classification as cutting across the ladder",
      "Noted the book's declared scope and its consequences for the rest of the chapter"
    ]
  }
},

{
  id: "10-13",
  chapter: 10,
  section: "10.2",
  czTitle: "Michaelisova kinetika a regulace změnou hladiny enzymu",
  enTitle: "Michaelis kinetics, and regulation by changing the enzyme level",
  cnTitle: "米氏动力学，以及通过改变酶水平进行的调节",
  pages: [221],
  coverage: "full",
  coverageNote: "The subsections 'Regulace uskutecnovana Michaelisovou kinetikou' and 'Regulace zmenou hladiny (koncentrace) enzymu' on p.221 read in full. The book's own hedge on the first mechanism -- that it is simple 'although not very effective' -- is preserved, as is its important qualification that the dependence holds for a simple enzyme only in the region of FIRST-ORDER kinetics in the linear part of the curve, does not apply at high substrate concentrations, but that in vivo the assumptions are fulfilled. That three-step argument (works / does not work / but in practice does) is the substance of the subsection and a summary that keeps only the first step misrepresents it.",
  cnNote: { topic: null, title: "no matching topic found in the Chinese notes' 27-topic list or its unnumbered tail (checked against the HANDOFF §11 map)", status: "pending" },
  summary: {
    en: "The first regulatory mechanism the book offers is the enzyme-catalysed reaction ITSELF, and it is offered with an explicit hedge: it is an example of a simple way of regulation, ALTHOUGH NOT VERY EFFECTIVE. From the dependence of reaction rate on substrate concentration (kap. 3.3.1) it is evident that a small change in substrate concentration causes a large change in reaction rate; the rate is thus regulated by the substrate concentration. But the book immediately qualifies this in two steps. The dependence holds, for a simple enzyme, ONLY in the region of first-order kinetics — the linear part of the curve. At high substrate concentrations this regulation no longer applies, because the enzyme is saturated and adding more substrate changes nothing. And then the rescue: under IN VIVO conditions the assumptions for this type of regulation are fulfilled. That is, real cellular substrate concentrations sit low on the curve, in the responsive region, which is precisely why a pool can be small and still be regulatory (§10.1). The second mechanism is regulation by changing the LEVEL of the enzyme. Enzyme reactions can also be controlled by controlled SYNTHESIS of enzymes, and here we speak of regulation of enzyme biosynthesis by INDUCTION or REPRESSION (kap. 4.2.4). This is the level of using the cell's genetic equipment: an inducer can cause or increase transcription and subsequently also translation of the given protein, and similarly transcription and translation can be suppressed. Induction of enzyme biosynthesis is caused, for example, by STEROID HORMONES — a forward reference that §10.3 then cashes in, where steroid hormones are shown entering the nucleus and binding DNA.",
    cn: "教材提出的第一种调节机制就是酶催化反应**本身**，而且提出时带有明确的保留：它是一种简单的调节方式，**尽管不太有效**。由反应速率对底物浓度的依赖关系（第3.3.1节）可见，底物浓度的微小变化会引起反应速率的很大变化；因此速率是由底物浓度调节的。但教材随即分两步加以限定。对于一个简单的酶，这种依赖关系**只**在一级动力学区域内成立——即曲线的线性部分。在高底物浓度下这种调节不再适用，因为酶已饱和，再加底物也无济于事。接着是补救：在**体内**条件下，这类调节的前提是满足的。也就是说，真实细胞中的底物浓度位于曲线较低处、处于响应区，这恰恰解释了为何一个「库」可以很小却仍具调节意义（§10.1）。第二种机制是通过改变酶的**水平**进行调节。酶反应也可以通过对酶的**受控合成**来控制，这里所说的是通过**诱导**或**阻遏**对酶的生物合成进行调节（第4.2.4节）。这属于利用细胞遗传装备的层面：诱导物可以引起或增强某蛋白的转录、进而增强翻译，同样地转录与翻译也可以被抑制。酶生物合成的诱导，例如由**类固醇激素**引起——这是一个前置引用，§10.3随后予以兑现，在那里类固醇激素被展示为进入细胞核并结合DNA。"
  },
  points: [
    { cz: "sama reakce jako regulace — ale málo účinná", en: "The enzyme-catalysed reaction itself is an example of a simple way of regulation, though the book adds in parenthesis 'although not very effective'. That hedge is part of the claim and should not be dropped.", cn: "酶催化反应本身就是一种简单调节方式的例子，不过教材在括号中补了一句「尽管不太有效」。这个保留是论断的一部分，不应略去。" },
    { cz: "malá změna [S] → velká změna rychlosti", en: "From the dependence of reaction rate on substrate concentration (kap. 3.3.1), a small change in substrate concentration causes a large change in reaction rate; the rate is thus regulated by the substrate concentration.", cn: "由反应速率对底物浓度的依赖关系（第3.3.1节），底物浓度的微小变化会引起反应速率的很大变化；因此速率由底物浓度调节。" },
    { cz: "platí jen v oblasti kinetiky prvního řádu", en: "For a simple enzyme this dependence holds ONLY in the region of first-order kinetics, in the linear part of the curve. At high substrate concentrations the regulation no longer applies — the enzyme is saturated.", cn: "对一个简单的酶而言，这种依赖关系**只**在一级动力学区域、即曲线的线性部分成立。在高底物浓度下该调节不再适用——酶已饱和。" },
    { cz: "in vivo jsou předpoklady splněny", en: "Under in vivo conditions the assumptions for this type of regulation ARE fulfilled — real substrate concentrations sit in the responsive, low part of the curve. This is why a small pool can still be regulatory (§10.1).", cn: "在体内条件下，这类调节的前提**是**满足的——真实的底物浓度位于曲线响应灵敏的低浓度部分。这正是一个小「库」仍能具有调节意义的原因（§10.1）。" },
    { cz: "regulace kontrolovanou syntézou enzymu", en: "Enzyme reactions can also be regulated by controlled synthesis of the enzyme itself — regulation of enzyme biosynthesis by induction or repression (kap. 4.2.4).", cn: "酶反应也可以通过对酶本身的受控合成来调节——即通过诱导或阻遏对酶生物合成的调节（第4.2.4节）。" },
    { cz: "úroveň genetické výbavy buňky", en: "This is the level of using the cell's genetic equipment. An inducer can cause or increase transcription and subsequently also translation of the given protein; similarly transcription and translation can be suppressed.", cn: "这属于利用细胞遗传装备的层面。诱导物可引起或增强某蛋白的转录、进而增强翻译；同样地转录与翻译也可被抑制。" },
    { cz: "steroidní hormony indukují biosyntézu enzymů", en: "Induction of enzyme biosynthesis is caused e.g. by steroid hormones — a forward reference that §10.3 cashes in when it shows steroid hormones entering the nucleus and binding specific sites in DNA.", cn: "酶生物合成的诱导例如由类固醇激素引起——这是一个前置引用，§10.3在展示类固醇激素进入细胞核并结合DNA特定位点时予以兑现。" },
    { cz: "rychlost vs kapacita", en: "The two mechanisms differ in what they change and how fast: substrate-level regulation changes the RATE of an existing enzyme immediately, whereas induction/repression changes the AMOUNT of enzyme, which is slower but sets the ceiling.", cn: "这两种机制在「改变什么」与「多快见效」上不同：底物水平的调节立即改变现有酶的**速率**，而诱导/阻遏改变酶的**数量**，见效较慢但设定了上限。" }
  ],
  terms: [
    { cz: "kinetika prvního řádu", en: "first-order kinetics", cn: "一级动力学", def_en: "The low-substrate region where reaction rate is proportional to substrate concentration — the only region in which substrate-level regulation works. In vivo concentrations lie here.", def_cn: "低底物区，反应速率与底物浓度成正比——也是底物水平调节唯一有效的区域。体内浓度正落在此处。" },
    { cz: "indukce", en: "induction", cn: "诱导", def_en: "Increase of enzyme synthesis by an inducer causing or increasing transcription and subsequently translation (kap. 4.2.4). Steroid hormones act this way.", def_cn: "由诱导物引起或增强转录、进而增强翻译，从而增加酶的合成（第4.2.4节）。类固醇激素即以此方式起作用。" },
    { cz: "represe", en: "repression", cn: "阻遏", def_en: "Suppression of transcription and translation of a given enzyme; the mirror image of induction.", def_cn: "抑制某种酶的转录与翻译；诱导的镜像。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does substrate-concentration regulation stop working at high substrate concentrations, and why does the book say it still matters?",
      q_cn: "为何底物浓度调节在高底物浓度下失效？教材又为何说它依然重要？",
      options: [
        "Because the substrate inhibits the enzyme; but inhibitors are removed in vivo",
        "Because the enzyme leaves the first-order region and saturates; but in vivo the assumptions for this type of regulation are fulfilled",
        "Because the enzyme is degraded; but it is resynthesized in vivo",
        "Because the product accumulates; but it is removed in vivo"
      ],
      answer: 1,
      why_en: "The dependence of rate on substrate holds only in the first-order, linear region; at high substrate the enzyme is saturated and further substrate changes nothing. The book then says in vivo conditions do satisfy the assumptions — i.e. cellular substrate levels sit in the responsive region.",
      why_cn: "速率对底物的依赖只在一级动力学的线性区成立；高底物时酶已饱和，再加底物毫无作用。教材随后指出体内条件确实满足这些前提——即细胞内的底物水平正处于响应灵敏区。"
    },
    {
      type: "short",
      q_en: "What is the difference between regulating by substrate concentration and regulating by enzyme level?",
      q_cn: "以底物浓度进行调节与以酶水平进行调节，二者有何区别？",
      accept: ["rate", "amount", "quantity", "transcription", "translation", "induction", "repression", "slow", "fast"],
      answer_en: "Substrate-level regulation changes the rate of an already-present enzyme and acts immediately; regulation by enzyme level changes how much enzyme exists, via induction or repression of transcription and translation, and is slower but sets the ceiling.",
      answer_cn: "底物水平的调节改变已存在的酶的速率、即时生效；酶水平的调节则通过对转录与翻译的诱导或阻遏改变酶的数量，见效较慢但设定了上限。"
    }
  ],
  oral: {
    q_en: "Describe the two simplest regulatory mechanisms in this section.",
    q_cn: "请描述本节中最简单的两种调节机制。",
    model_en: "The first is the enzyme reaction itself, and the textbook is careful to call it simple but not very effective. The argument runs from Michaelis kinetics: in the low-substrate region a small change in substrate concentration produces a large change in rate, so the substrate concentration is itself regulating the reaction. But that only holds in the first-order part of the curve. Once you are at high substrate, the enzyme is saturated and adding more does nothing — the regulation is gone. The rescue is empirical: in vivo, the assumptions are fulfilled, meaning real cellular substrate concentrations sit low on the curve where the enzyme is still responsive. That, incidentally, is why the pools discussed earlier can be quite dilute and still control anything. The second mechanism changes not the rate of an enzyme but how much of it there is: controlled synthesis, that is, induction and repression of enzyme biosynthesis. This works at the level of the cell's genetic equipment — an inducer causes or increases transcription and then translation of the protein, and the reverse can suppress both. Steroid hormones are the example given, which is a nice forward reference, because section ten-three shows exactly how they do it, by entering the nucleus and binding DNA. Note the contrast: substrate regulation is instant and adjusts rate; induction is slow and adjusts capacity.",
    checklist: [
      "Preserved the book's hedge that substrate-level regulation is simple but not very effective",
      "Explained the small-change-large-effect argument from Michaelis kinetics",
      "Gave the first-order/linear-region restriction and the saturation failure",
      "Gave the in vivo rescue and connected it to why small pools can be regulatory",
      "Described induction and repression as regulation of enzyme AMOUNT via transcription/translation",
      "Named steroid hormones as inducers and linked forward to §10.3",
      "Contrasted the immediate rate effect with the slower capacity effect"
    ]
  }
},

{
  id: "10-14",
  chapter: 10,
  section: "10.2",
  czTitle: "Inhibice a alosterická kontrola — zpětná vazba a řídící enzym",
  enTitle: "Inhibition and allosteric control — feedback and the regulatory enzyme",
  cnTitle: "抑制与别构调控——反馈与调控酶",
  pages: [221, 222],
  coverage: "full",
  coverageNote: "The subsections 'Inhibice enzymovych reakci' and 'Alostericka kontrola' on p.221, together with the two lines at the top of p.222 on which the allosteric paragraph ends, read in full. The definition of allosteric control is given in the book's own terms -- inhibition or activation by a metabolite which does NOT bind into the active site but to another site of the enzyme protein -- along with the mechanism it states (the effect occurs by a change of the enzyme's conformation) and the English term it supplies in italics, 'feedback control'. The definition of the ridici enzym falls on p.222 and closes the argument, so both pages are covered by this node.",
  cnNote: { topic: null, title: "no matching topic found in the Chinese notes' 27-topic list or its unnumbered tail (checked against the HANDOFF §11 map)", status: "pending" },
  summary: {
    en: "Inhibition of enzyme reactions has already been treated elsewhere (kap. 3.5), and here the book states only that influencing enzyme reactions by binding inhibitors INTO THE ACTIVE SITE is an important way of regulating them. It adds one case that matters for the chapter's logic: inhibition can also occur BY THE PRODUCT of the enzyme reaction, so that on accumulation of the product the enzyme reaction slows down. That is already a primitive self-limiting loop. Allosteric activation and inhibition is then introduced as ONE OF THE MOST EFFECTIVE mechanisms of metabolic regulation — note the contrast with the 'not very effective' substrate mechanism. By allosteric control (kap. 3.7.1) is understood inhibition or activation of enzymes by a metabolite which does NOT bind into the active site but to ANOTHER site of the enzyme protein, and thereby influences enzyme activity; the effect occurs by a change of the enzyme's CONFORMATION. This is the structural point: because the effector site is separate from the catalytic site, the regulating molecule need have no chemical resemblance to the substrate at all, and a pathway's end product can therefore regulate an enzyme that acts on something quite different. That is exactly the use the book puts it to. This possibility represents regulation by so-called NEGATIVE FEEDBACK (the book gives the English 'feedback control' in italics): it is the influence of the FINAL product on the reaction steps at the BEGINNING of the reaction sequence. Allosteric inhibition of one of the initial enzymes of the reaction system by the final product occurs, and such an enzyme is then called the CONTROLLING ENZYME (řídící enzym).",
    cn: "酶反应的抑制已在别处讲过（第3.5节），此处教材只指出：通过把抑制剂结合**到活性位点中**来影响酶反应，是调节酶反应的一种重要方式。它补充了一种对本章逻辑很要紧的情形：抑制也可以**由酶反应的产物**造成，因而当产物积累时酶反应就会减慢。这已经是一个原始的自限回路。随后别构激活与别构抑制被引入，称之为代谢调节**最有效的机制之一**——请注意这与「不太有效」的底物机制形成对照。所谓别构调控（第3.7.1节），指的是由某种代谢物对酶的抑制或激活，该代谢物**不**结合到活性位点，而是结合到酶蛋白的**另一个**位点，从而影响酶的活性；其效应通过酶**构象**的改变而实现。这是关键的结构学要点：由于效应物位点与催化位点相分离，起调节作用的分子在化学上完全不必与底物相像，因此一条途径的终产物可以调节一个作用于全然不同物质的酶。而教材正是这样使用它的。这种可能性体现为所谓的**负反馈**调节（教材以斜体给出英文「feedback control」）：即**终产物**对反应序列**起始**处各反应步骤的影响。终产物对该反应系统起始酶之一造成别构抑制，这样的酶随即被称为**调控酶**(řídící enzym)。"
  },
  points: [
    { cz: "inhibice vazbou do aktivního místa", en: "Influencing enzyme reactions by the binding of inhibitors into the ACTIVE SITE is an important way of regulating them (types treated in kap. 3.5).", cn: "通过把抑制剂结合到**活性位点**来影响酶反应，是调节它们的一种重要方式（各类型见第3.5节）。" },
    { cz: "inhibice produktem", en: "Inhibition can also occur by the PRODUCT of the enzyme reaction, so that on accumulation of the product the enzyme reaction slows down — a primitive self-limiting loop.", cn: "抑制也可以由酶反应的**产物**造成，因而当产物积累时酶反应减慢——这是一个原始的自限回路。" },
    { cz: "alosterie je jeden z NEJÚČINNĚJŠÍCH mechanismů", en: "Allosteric activation and inhibition is one of the MOST EFFECTIVE mechanisms of metabolic regulation — set against the explicitly 'not very effective' substrate-concentration mechanism of the previous node.", cn: "别构激活与别构抑制是代谢调节**最有效的**机制之一——与上一节点中明言「不太有效」的底物浓度机制形成对照。" },
    { cz: "definice: váže se JINDE než do aktivního místa", en: "Allosteric control means inhibition or activation of enzymes by a metabolite which does NOT bind into the active site but to another site of the enzyme protein, influencing enzyme activity (kap. 3.7.1).", cn: "别构调控指由某种代谢物对酶的抑制或激活，该代谢物**不**结合到活性位点，而是结合到酶蛋白的另一位点，从而影响酶活性（第3.7.1节）。" },
    { cz: "mechanismus: změna konformace", en: "The effect occurs by a CHANGE OF THE CONFORMATION of the enzyme. The signal travels through the protein's shape, not through the chemistry of the active site.", cn: "该效应通过酶**构象的改变**实现。信号是通过蛋白质的形状传递的，而非通过活性位点的化学过程。" },
    { cz: "proč na tom záleží strukturně", en: "Because the effector site is separate from the catalytic site, the regulating molecule need bear NO chemical resemblance to the substrate. That is what allows a pathway's end product to regulate an enzyme acting on something entirely different.", cn: "由于效应物位点与催化位点分离，起调节作用的分子在化学上**不必**与底物相像。正是这一点使一条途径的终产物能够调节一个作用于全然不同物质的酶。" },
    { cz: "záporná zpětná vazba (feedback control)", en: "This possibility represents regulation by so-called negative feedback — the book gives the English term 'feedback control' in italics. It is the influence of the FINAL product on the reaction steps at the BEGINNING of the reaction sequence.", cn: "这种可能性体现为所谓的负反馈调节——教材以斜体给出英文术语「feedback control」。它是**终产物**对反应序列**起始**处各步骤的影响。" },
    { cz: "řídící enzym", en: "Allosteric inhibition of one of the INITIAL enzymes of the reaction system by the final product occurs; such an enzyme is then called the controlling (regulatory) enzyme — řídící enzym.", cn: "终产物对该反应系统**起始**酶之一造成别构抑制；这样的酶随即被称为调控（调节）酶——řídící enzym。" }
  ],
  terms: [
    { cz: "alosterická kontrola", en: "allosteric control", cn: "别构调控", def_en: "Inhibition or activation of an enzyme by a metabolite binding OUTSIDE the active site, acting through a change of the enzyme's conformation (kap. 3.7.1).", def_cn: "由某种代谢物结合在活性位点**之外**而对酶产生的抑制或激活，通过酶构象的改变发挥作用（第3.7.1节）。" },
    { cz: "záporná zpětná vazba", en: "negative feedback (feedback control)", cn: "负反馈", def_en: "The final product of a reaction sequence allosterically inhibiting one of the enzymes at the beginning of that sequence.", def_cn: "反应序列的终产物对该序列起始处某个酶产生别构抑制。" },
    { cz: "řídící enzym", en: "controlling (regulatory) enzyme", cn: "调控酶", def_en: "An initial enzyme of a reaction system that is allosterically inhibited by the system's final product; extended in the next node to include enzymes catalysing practically irreversible reactions.", def_cn: "反应系统中被该系统终产物别构抑制的起始酶；在下一节点中扩展为也包括催化实际上不可逆反应的酶。" },
    { cz: "inhibice produktem", en: "product inhibition", cn: "产物抑制", def_en: "Slowing of an enzyme reaction as its own product accumulates; the simplest self-limiting mechanism mentioned here.", def_cn: "随着自身产物的积累而使酶反应减慢；此处提到的最简单的自限机制。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structurally distinguishes allosteric regulation from ordinary competitive inhibition?",
      q_cn: "从结构上看，别构调节与普通竞争性抑制的区别何在？",
      options: [
        "The allosteric effector binds into the active site more tightly",
        "The allosteric effector binds to a site OTHER than the active site and works by changing the enzyme's conformation",
        "Allosteric regulation requires covalent modification of the enzyme",
        "Allosteric regulation only inhibits, never activates"
      ],
      answer: 1,
      why_en: "The book's definition is precisely this: the metabolite does not bind into the active site but to another site of the enzyme protein, and the effect occurs by a change of conformation. That separation is what lets a chemically unrelated end product regulate the enzyme. Note also that allosteric control covers both activation AND inhibition.",
      why_cn: "教材的定义正是如此：该代谢物不结合到活性位点，而是结合到酶蛋白的另一位点，其效应通过构象改变实现。正是这种分离使化学上不相干的终产物得以调节该酶。另请注意别构调控既包括激活**也**包括抑制。"
    },
    {
      type: "short",
      q_en: "What is a 'controlling enzyme' as defined here?",
      q_cn: "此处所定义的「调控酶」是什么？",
      accept: ["initial", "beginning", "final product", "allosteric", "inhibit"],
      answer_en: "One of the initial enzymes of a reaction system, allosterically inhibited by the final product of that system — the target of negative feedback.",
      answer_cn: "反应系统中起始的酶之一，被该系统的终产物别构抑制——即负反馈的作用靶点。"
    }
  ],
  oral: {
    q_en: "Explain allosteric control and negative feedback.",
    q_cn: "请解释别构调控与负反馈。",
    model_en: "The textbook calls allosteric regulation one of the most effective mechanisms of metabolic control, and it is worth hearing that against what it said a paragraph earlier, that substrate-level regulation is simple but not very effective. The definition is structural: an allosteric effector is a metabolite that binds not into the active site but somewhere else on the enzyme protein, and it changes the enzyme's activity by changing the enzyme's conformation. That separation of the effector site from the catalytic site is the whole trick. Because the two sites are different, the regulating molecule does not have to resemble the substrate chemically at all — and that is what makes the next step possible. If the effector need not resemble the substrate, then the final product of a whole pathway can regulate an enzyme that acts on something completely different, right at the start of that pathway. That is negative feedback, or feedback control: the end product allosterically inhibits one of the initial enzymes of the sequence, and that enzyme is then called the controlling enzyme. The effect is self-limiting production — when enough end product has accumulated, the pathway shuts its own front door. The book also mentions the cruder version, ordinary product inhibition, where a reaction simply slows as its own immediate product builds up.",
    checklist: [
      "Called allosteric control one of the most effective mechanisms and contrasted it with substrate-level regulation",
      "Defined the effector as binding OUTSIDE the active site",
      "Gave conformational change as the mechanism",
      "Explained why site separation allows a chemically unrelated end product to regulate",
      "Defined negative feedback as the final product acting on the beginning of the sequence",
      "Defined the controlling enzyme",
      "Mentioned simple product inhibition as the cruder variant"
    ]
  }
},

{
  id: "10-15",
  chapter: 10,
  section: "10.2",
  czTitle: "Řídící reakce a regulace limitujícími metabolity",
  enTitle: "The controlling reaction, and regulation by limiting metabolites",
  cnTitle: "调控反应与限制性代谢物的调节",
  pages: [222],
  coverage: "full",
  coverageNote: "The subsections 'Ridici reakce' and 'Regulace limitujicimi metabolity' on p.222 read in full. Both of the book's examples are reproduced: phosphofructokinase catalysing the practically irreversible phosphorylation of fructose-6-phosphate in glycolysis (kap. 7.8), and phosphorylation in the respiratory chain where the limiting factor is a sufficiency of ADP. Note the point the first subsection is actually making -- that an enzyme can be a controlling enzyme by virtue of the THERMODYNAMICS of the reaction it catalyses, not only by being allosterically controlled -- which extends the definition given at the end of the previous subsection.",
  cnNote: { topic: null, title: "no matching topic found in the Chinese notes' 27-topic list or its unnumbered tail (checked against the HANDOFF §11 map)", status: "pending" },
  summary: {
    en: "The previous subsection defined the controlling enzyme as one that is allosterically inhibited by a pathway's final product. This subsection widens that definition: the controlling (control) enzyme need NOT perform its controlling function in the sequence of enzyme reactions only by being allosterically controlled, but ALSO by catalysing a practically IRREVERSIBLE reaction — for instance a strongly exergonic one. The example given is phosphofructokinase, which in glycolysis catalyses the practically irreversible phosphorylation of fructose-6-phosphate (kap. 7.8). The logic is worth making explicit, because it is the same logic that ran through §10.1: a reaction that is effectively one-way is a point past which material cannot flow back, so whatever controls that step controls the committed flux through the whole downstream pathway. Reversible steps sit near equilibrium and simply transmit what is done to them; irreversible steps are where control has purchase. That is also why the irreversible steps of glycolysis were exactly the steps gluconeogenesis had to bypass (node 10-7) — the same three points serve as both the control points and the divergence points. The second mechanism is regulation by LIMITING METABOLITES: the availability — supply, store — of a key metabolite can influence the amount of product of an enzyme reaction or of a whole system of enzyme reactions. The example is phosphorylation in the respiratory chain, where the limiting factor is a sufficiency of ADP. This is the direct link back to the 'pool' concept of §10.1: what limits oxidative phosphorylation is not fuel or oxygen but whether there is any ADP left to phosphorylate, which is precisely what makes ATP turnover self-regulating.",
    cn: "上一小节把调控酶定义为被途径终产物别构抑制的酶。本小节把这一定义拓宽：调控（控制）酶在酶反应序列中发挥其调控功能，**不必**只靠受别构调控，**也**可以靠催化一个实际上**不可逆**的反应——例如一个强放能反应。所举的例子是磷酸果糖激酶，它在糖酵解中催化果糖-6-磷酸实际上不可逆的磷酸化（第7.8节）。这里的逻辑值得挑明，因为它与贯穿§10.1的逻辑相同：一个实际上单向的反应，是物质无法回流的关口，因此凡是控制该步的东西，就控制了整条下游途径的定向通量。可逆步骤接近平衡，只是把加诸其上的变化原样传递；不可逆步骤才是控制能够着力之处。这也解释了为何糖酵解中的不可逆步骤恰恰就是糖异生必须绕开的那些步骤（节点10-7）——同样这三个点既是控制点也是分岔点。第二种机制是**限制性代谢物**的调节：某个关键代谢物的可得性——供给、贮量——能够影响某个酶反应或整个酶反应系统的产物量。所举的例子是呼吸链中的磷酸化，其限制因素是ADP是否充足。这是直接回连到§10.1「库」概念的一环：限制氧化磷酸化的既不是燃料也不是氧，而是还有没有ADP可供磷酸化，而这恰恰使ATP的周转具有自我调节性。"
  },
  points: [
    { cz: "řídící enzym nemusí být alosterický", en: "The controlling enzyme need not perform its controlling function only by being allosterically controlled, but also by catalysing a practically irreversible reaction — e.g. a strongly exergonic one. This widens the definition given at the end of the previous subsection.", cn: "调控酶发挥其调控功能不必只靠受别构调控，也可以靠催化一个实际上不可逆的反应——例如强放能反应。这拓宽了上一小节末尾给出的定义。" },
    { cz: "příklad: fosfofruktokinasa", en: "The example is phosphofructokinase, which in glycolysis catalyses the practically irreversible phosphorylation of fructose-6-phosphate (kap. 7.8).", cn: "所举例子是磷酸果糖激酶，它在糖酵解中催化果糖-6-磷酸实际上不可逆的磷酸化（第7.8节）。" },
    { cz: "proč nevratnost = kontrola", en: "The logic: a practically one-way reaction is a point past which material cannot flow back, so whatever controls that step controls the committed flux through the whole downstream pathway. Reversible steps merely transmit; irreversible steps are where control has purchase.", cn: "其中的逻辑：一个实际上单向的反应是物质无法回流的关口，因此控制该步的东西就控制了整条下游途径的定向通量。可逆步骤只是传递；不可逆步骤才是控制能着力之处。" },
    { cz: "shodné body s glukoneogenezí", en: "Note the consistency with node 10-7: the irreversible steps of glycolysis are exactly the ones gluconeogenesis has to bypass. The same three points are simultaneously the control points and the points at which the two directions diverge.", cn: "注意与节点10-7的一致性：糖酵解中不可逆的步骤，恰恰是糖异生必须绕开的那些。同样这三个点既是控制点，也是两个方向分道之处。" },
    { cz: "regulace limitujícím metabolitem", en: "The availability — supply, store — of a key metabolite can influence the amount of product of an enzyme reaction or of a whole system of enzyme reactions.", cn: "某个关键代谢物的可得性——供给、贮量——能影响某个酶反应或整个酶反应系统的产物量。" },
    { cz: "příklad: dostatek ADP v dýchacím řetězci", en: "The example is phosphorylation in the respiratory chain, where the limiting factor is a sufficiency of ADP. Not fuel, not oxygen — the availability of the phosphate acceptor.", cn: "所举例子是呼吸链中的磷酸化，其限制因素是ADP是否充足。不是燃料，也不是氧，而是磷酸受体的可得性。" },
    { cz: "vazba na pojem „pool\"", en: "This connects directly back to the 'pool' concept of §10.1: because the adenine nucleotide pool is fixed in total size, spending ATP creates ADP, and the creation of ADP is itself the signal that permits more oxidative phosphorylation. Turnover regulates itself.", cn: "这直接回连到§10.1的「库」概念：由于腺苷酸库的总量固定，消耗ATP即生成ADP，而ADP的生成本身就是允许进行更多氧化磷酸化的信号。周转实现自我调节。" }
  ],
  terms: [
    { cz: "řídící reakce", en: "controlling reaction", cn: "调控反应", def_en: "A practically irreversible (e.g. strongly exergonic) step in a pathway; whatever regulates it regulates the committed downstream flux. Phosphofructokinase in glycolysis is the example.", def_cn: "途径中实际上不可逆的（例如强放能的）步骤；调节它的东西就调节了下游的定向通量。糖酵解中的磷酸果糖激酶即为例子。" },
    { cz: "limitující metabolit", en: "limiting metabolite", cn: "限制性代谢物", def_en: "A key metabolite whose availability caps the output of a reaction or a whole system; ADP for respiratory-chain phosphorylation.", def_cn: "其可得性限定某个反应或整个系统产出上限的关键代谢物；呼吸链磷酸化中即为ADP。" },
    { cz: "fosfofruktokinasa", en: "phosphofructokinase", cn: "磷酸果糖激酶", def_en: "The glycolytic enzyme phosphorylating fructose-6-phosphate practically irreversibly; the book's example of a controlling enzyme defined by thermodynamics rather than by allostery.", def_cn: "使果糖-6-磷酸发生实际上不可逆磷酸化的糖酵解酶；教材用它举例说明一种由热力学而非别构性所界定的调控酶。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Besides being allosterically controlled, how else can an enzyme act as a controlling enzyme?",
      q_cn: "除了受别构调控之外，一个酶还可以通过什么方式充当调控酶？",
      options: [
        "By having an unusually high Km",
        "By catalysing a practically irreversible reaction, e.g. a strongly exergonic one",
        "By existing as several isoenzymes",
        "By being localized in a separate compartment"
      ],
      answer: 1,
      why_en: "The book widens the definition exactly this way, and gives phosphofructokinase as the example. Isoenzymes and compartmentation are separate regulatory mechanisms listed later in §10.2, not ways of being a controlling enzyme.",
      why_cn: "教材正是以这种方式拓宽定义的，并举磷酸果糖激酶为例。同工酶与区室化是§10.2后文另行列出的调节机制，而非成为调控酶的途径。"
    },
    {
      type: "short",
      q_en: "What is the limiting factor for phosphorylation in the respiratory chain, according to this section?",
      q_cn: "根据本节，呼吸链中磷酸化的限制因素是什么？",
      accept: ["ADP", "sufficiency of ADP", "acceptor"],
      answer_en: "A sufficiency of ADP. This is the book's example of regulation by a limiting metabolite: the availability of the phosphate acceptor caps the output of the whole system.",
      answer_cn: "ADP是否充足。这是教材关于限制性代谢物调节的例子：磷酸受体的可得性限定了整个系统的产出上限。"
    }
  ],
  oral: {
    q_en: "Why are irreversible reactions the natural control points of a pathway?",
    q_cn: "为何不可逆反应是一条途径天然的控制点？",
    model_en: "Because they are the points past which material cannot flow back. A reversible step sits near equilibrium and essentially just transmits whatever is done to it — push more substrate in and more product comes out, take product away and it runs the other way. There is nothing to control there. An irreversible step, typically a strongly exergonic one, commits the material: once it is through, it is going downstream. So whoever regulates that step regulates the flux through everything that follows. The textbook makes this the second way an enzyme can be a controlling enzyme — not only by being allosterically inhibited by the end product, but simply by catalysing a practically irreversible reaction. Its example is phosphofructokinase, which phosphorylates fructose-six-phosphate practically irreversibly in glycolysis. And notice the consistency with what came earlier: those same irreversible glycolytic steps are exactly the ones gluconeogenesis has to bypass with different enzymes. The same three points are both the control points and the points where the two directions part company. The related mechanism is regulation by a limiting metabolite, where it is the supply of something key that caps the output. The example is respiratory-chain phosphorylation, where the limiting factor is a sufficiency of ADP — which is elegant, because spending ATP is itself what creates the ADP that permits more to be made.",
    checklist: [
      "Explained why reversible steps cannot be control points and irreversible ones can",
      "Stated the widened definition of a controlling enzyme",
      "Gave phosphofructokinase and the fructose-6-phosphate step as the example",
      "Connected the irreversible steps to the ones gluconeogenesis must bypass",
      "Defined regulation by a limiting metabolite",
      "Gave ADP sufficiency in respiratory-chain phosphorylation as the example",
      "Noted the self-regulating character of ATP/ADP turnover"
    ]
  }
},

{
  id: "10-16",
  chapter: 10,
  section: "10.2",
  czTitle: "Enzymová modifikace, isoenzymy a kompartmentace",
  enTitle: "Enzyme modification, isoenzymes and compartmentation",
  cnTitle: "酶的修饰、同工酶与区室化",
  pages: [222],
  coverage: "full",
  coverageNote: "The subsections 'Regulace enzymovou modifikaci (enzymu)', 'Regulace na principu isoenzymu' and 'Kompartmentace' on p.222 read in full. The isoenzyme subsection consists of a single sentence referring the reader to kap. 3.7.3 and contains no content of its own; that is stated here rather than padded out, so nothing is attributed to this book that it does not say. Both types of enzyme modification are given as printed: enzymatic phosphorylation (kap. 3.7.2) and conversion of an inactive proenzyme to an active enzyme by partial proteolysis, with the trypsinogen-trypsin example (kap. 5.1).",
  cnNote: { topic: null, title: "no matching topic found in the Chinese notes' 27-topic list or its unnumbered tail (checked against the HANDOFF §11 map)", status: "pending" },
  summary: {
    en: "Three further mechanisms close §10.2. REGULATION BY ENZYME MODIFICATION: some enzymes can pass from a less active, or entirely inactive, form into an active form — or conversely — by CHEMICAL MODIFICATION, which is itself catalysed enzymatically. Most often, enzymatic PHOSPHORYLATION of enzymes is used for this purpose (kap. 3.7.2). Another type of enzyme modification is the conversion of an inactive PROENZYME into an active enzyme by PARTIAL PROTEOLYSIS, the example being trypsinogen → trypsin (kap. 5.1). The two differ in an important way that the book leaves implicit: phosphorylation is reversible, which is what the phrase 'or conversely' is doing, whereas proteolysis is not — a proenzyme once cut cannot be uncut, which is why proteolytic activation is used where commitment is wanted, as in digestion and clotting cascades. REGULATION ON THE PRINCIPLE OF ISOENZYMES is named but not developed: the book states only that the possibilities of regulation on this principle are described in kap. 3.7.3. COMPARTMENTATION: the cell is divided into many different spaces (compartments) in which certain reactions take place, and substrates and products must be transported — mostly in a CONTROLLED way — across the membranes which separate these compartments (kap. 8.5.3). It is an important means, the book says, for synthetic and degradative reactions which have PARTLY THE SAME INTERMEDIATES to be able to run separately and in a controlled fashion. This closes the circle opened in §10.1, where the same separation was introduced as the reason catabolic and anabolic reactions can be regulated independently.",
    cn: "§10.2以另外三种机制收尾。**酶修饰调节**：某些酶可以通过**化学修饰**从较低活性乃至完全无活性的形式转变为活性形式——或者反过来——而这种修饰本身也是酶催化的。最常用于此目的的是对酶的**酶促磷酸化**（第3.7.2节）。另一类酶修饰是通过**部分蛋白水解**把无活性的**酶原**转变为有活性的酶，例子是胰蛋白酶原→胰蛋白酶（第5.1节）。二者有一处重要差别是教材未明说的：磷酸化是可逆的——这正是「或者反过来」一语所指——而蛋白水解不可逆：酶原一旦被切开就无法复原，这正是为何蛋白水解激活被用在需要「一旦决定即不回头」的场合，如消化与凝血级联。**同工酶原理的调节**只被点名而未展开：教材只说基于这一原理的调节可能性见第3.7.3节。**区室化**：细胞被划分为许多不同的空间（区室），某些反应在其中进行，而底物与产物必须——多数情况下是**受控地**——跨越分隔这些区室的膜进行运输（第8.5.3节）。教材说，这是一种重要手段，使那些**部分共有中间体**的合成反应与降解反应得以分开且受控地进行。这就闭合了§10.1所开启的循环——在那里，同样的分离被引入作为分解代谢与合成代谢反应可被独立调节的理由。"
  },
  points: [
    { cz: "enzymová modifikace: méně aktivní ↔ aktivní", en: "Some enzymes can pass from a less active, or entirely inactive, form into an active form — or conversely — by chemical modification, which is itself catalysed enzymatically.", cn: "某些酶可通过化学修饰从较低活性乃至完全无活性的形式转变为活性形式——或者反过来——而该修饰本身也是酶催化的。" },
    { cz: "nejčastěji fosforylace enzymů", en: "Most often, enzymatic phosphorylation of enzymes is used for this purpose (kap. 3.7.2). This is the mechanism that the hormone cascades of §10.3 all terminate in.", cn: "最常用于此目的的是对酶的酶促磷酸化（第3.7.2节）。§10.3中所有激素级联最终都终止于这一机制。" },
    { cz: "částečná proteolýza proenzymu", en: "Another type of enzyme modification is the conversion of an inactive proenzyme into an active enzyme by partial proteolysis — trypsinogen → trypsin (kap. 5.1).", cn: "另一类酶修饰是通过部分蛋白水解把无活性的酶原转变为有活性的酶——胰蛋白酶原→胰蛋白酶（第5.1节）。" },
    { cz: "fosforylace je vratná, proteolýza ne", en: "The two differ in reversibility, which the book leaves implicit in its 'or conversely': phosphorylation can be undone by a phosphatase, whereas a proteolytically cut proenzyme cannot be uncut. Proteolytic activation is therefore used where irreversible commitment is wanted — digestion, clotting cascades.", cn: "二者在可逆性上不同，教材把这一点隐含在「或者反过来」之中：磷酸化可由磷酸酶撤销，而被蛋白水解切开的酶原无法复原。因此蛋白水解激活被用在需要不可逆承诺的场合——消化、凝血级联。" },
    { cz: "isoenzymy — jen odkaz", en: "Regulation on the principle of isoenzymes is named but not developed: the book states only that the possibilities of regulation on this principle are described in kap. 3.7.3. Nothing further is claimed here.", cn: "同工酶原理的调节只被点名而未展开：教材只说基于这一原理的调节可能性见第3.7.3节。此处不再作任何进一步论断。" },
    { cz: "kompartmentace: řízený transport přes membrány", en: "The cell is divided into many compartments in which certain reactions take place, and substrates and products must be transported — mostly in a CONTROLLED way — across the membranes separating those compartments (kap. 8.5.3). The transport step is itself a control point.", cn: "细胞被划分为许多区室，某些反应在其中进行，底物与产物必须——多数情况下是**受控地**——跨越分隔这些区室的膜进行运输（第8.5.3节）。运输这一步本身就是一个控制点。" },
    { cz: "proč kompartmentace: společné meziprodukty", en: "Compartmentation is an important means for synthetic and degradative reactions which have PARTLY THE SAME INTERMEDIATES to be able to run separately and in a controlled fashion. Sharing intermediates is exactly the problem it solves.", cn: "区室化是一种重要手段，使那些**部分共有中间体**的合成反应与降解反应得以分开且受控地进行。共有中间体正是它所要解决的问题。" },
    { cz: "uzavření kruhu z §10.1", en: "This closes the circle opened in §10.1, where the localisation of catabolic and anabolic reactions in different parts of the eukaryotic cell was introduced as the reason they can run simultaneously and independently. Fatty acid synthesis versus β-oxidation (node 10-9) is the worked case.", cn: "这闭合了§10.1开启的循环——在那里，分解与合成反应定位于真核细胞不同部位被引入，作为二者能够同时且独立运行的理由。脂肪酸合成对β-氧化（节点10-9）就是那个具体案例。" }
  ],
  terms: [
    { cz: "enzymová modifikace", en: "enzyme modification", cn: "酶的修饰", def_en: "Enzymatically catalysed chemical alteration of an enzyme that switches it between more and less active forms; most often phosphorylation.", def_cn: "由酶催化的、对某个酶进行的化学改变，使其在较高与较低活性形式之间切换；最常见的是磷酸化。" },
    { cz: "proenzym", en: "proenzyme (zymogen)", cn: "酶原", def_en: "An inactive precursor converted to the active enzyme by partial proteolysis; trypsinogen → trypsin (kap. 5.1). Irreversible.", def_cn: "通过部分蛋白水解转变为活性酶的无活性前体；胰蛋白酶原→胰蛋白酶（第5.1节）。不可逆。" },
    { cz: "isoenzym", en: "isoenzyme", cn: "同工酶", def_en: "Named here as a regulatory principle, with the treatment referred to kap. 3.7.3; no further detail is given in chapter 10.", def_cn: "此处仅作为一项调节原理被点名，具体论述交由第3.7.3节；第10章不再给出更多细节。" },
    { cz: "kompartment", en: "compartment", cn: "区室", def_en: "One of the many membrane-bounded spaces into which the cell is divided; controlled transport across the separating membranes is itself a regulatory step (kap. 8.5.3).", def_cn: "细胞被划分成的众多由膜界定的空间之一；跨越分隔膜的受控运输本身就是一个调节步骤（第8.5.3节）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What problem does the book say compartmentation solves?",
      q_cn: "教材说区室化解决了什么问题？",
      options: [
        "It concentrates enzymes so that reaction rates increase",
        "It allows synthetic and degradative reactions that have partly the same intermediates to run separately and in a controlled way",
        "It prevents enzymes from being phosphorylated",
        "It removes the need for allosteric control"
      ],
      answer: 1,
      why_en: "The book states this purpose explicitly. Sharing intermediates is exactly the difficulty: without physical separation, a synthetic and a degradative pathway drawing on the same intermediate would interfere — the second failure mode named at the start of §10.2.",
      why_cn: "教材明确指出了这一目的。共有中间体正是难点所在：若无物理分隔，一条合成途径与一条降解途径取用同一中间体就会彼此干扰——这正是§10.2开篇点出的第二种失效模式。"
    },
    {
      type: "short",
      q_en: "Give the two types of enzyme modification named here and one example of each.",
      q_cn: "说出此处所点名的两类酶修饰，各举一例。",
      accept: ["phosphorylation", "proteolysis", "proenzyme", "trypsinogen", "trypsin"],
      answer_en: "Enzymatic phosphorylation of enzymes (kap. 3.7.2), which is reversible; and conversion of an inactive proenzyme to an active enzyme by partial proteolysis, e.g. trypsinogen → trypsin (kap. 5.1), which is not.",
      answer_cn: "对酶的酶促磷酸化（第3.7.2节），这是可逆的；以及通过部分蛋白水解把无活性酶原转变为活性酶，例如胰蛋白酶原→胰蛋白酶（第5.1节），这是不可逆的。"
    }
  ],
  oral: {
    q_en: "Give the remaining regulatory mechanisms of §10.2 and say how they differ in character.",
    q_cn: "请给出§10.2其余的调节机制，并说明它们在性质上有何不同。",
    model_en: "Three more. First, enzyme modification: an enzyme can be switched between a less active or completely inactive form and an active one by chemical modification, itself enzymatically catalysed. The commonest version is phosphorylation of the enzyme, and it is worth noticing that this is exactly where all the hormone cascades in the next section end up — a kinase phosphorylating target proteins. The other version is partial proteolysis of a proenzyme, trypsinogen into trypsin being the standard case. The difference between these two is reversibility, and the book hints at it with the phrase 'or conversely': a phosphate can be taken off again by a phosphatase, but a proenzyme once cut cannot be uncut. So proteolytic activation is used where you want irreversible commitment — digestion, clotting — and phosphorylation where you want a switch you can flip back. Second, regulation on the principle of isoenzymes, which the book only names and refers to chapter three-seven-three; there is nothing more here. Third, compartmentation: the cell is divided into many spaces, and substrates and products have to be transported, usually in a controlled way, across the membranes between them. The stated purpose is precise — it lets synthetic and degradative reactions that share some of their intermediates run separately and under control. That is the same argument section ten-one made when it said catabolism and anabolism sit in different organelles so they can be regulated independently.",
    checklist: [
      "Gave enzyme modification with both types: phosphorylation and proteolytic proenzyme activation",
      "Named the trypsinogen → trypsin example",
      "Contrasted the reversibility of phosphorylation with the irreversibility of proteolysis, and drew the functional consequence",
      "Noted that isoenzyme regulation is only cross-referenced, not developed here",
      "Defined compartmentation including the controlled transport across membranes",
      "Gave the book's stated purpose: separating pathways that share intermediates",
      "Connected compartmentation back to the §10.1 argument for independent regulation"
    ]
  }
},

{
  id: "10-17",
  chapter: 10,
  section: "10.3",
  czTitle: "Hormony — definice, hierarchie žláz a hormonální receptory",
  enTitle: "Hormones — definition, the gland hierarchy, and hormonal receptors",
  cnTitle: "激素——定义、腺体层级与激素受体",
  pages: [222, 223],
  coverage: "full",
  coverageNote: "The opening of section 10.3 at the foot of p.222, the regulatory-circuit diagram at the top of p.223, and the 'Hormonalni receptory' subsection beneath it, read in full. Every box and arrow of the diagram was read off the scan: mezimozek -> neurosekret -> hypofysa -> glandotropni hormon -> hormonalni zlaza (kura nadledvinek) -> perifernÄ ucinny hormon (kortisol) -> tkane, with a single 'inhibice' arrow running back from the peripheral hormone to BOTH the hypophysis and the diencephalon. The double target of that inhibition arrow is easy to miss and is stated explicitly below.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "By HORMONAL CONTROL the book understands the influencing of tissues or cells by specifically effective substances, hormones. These are formed in specialized glands, tissues or cells, and they either are secreted into the blood circulation or act on surrounding cells — so the definition already covers both endocrine and local (paracrine) action without using those words. The activity of a hormonal gland is itself controlled HORMONALLY, and in the case of the hypophysis–adrenal cortex system this hierarchy of hormonal glands includes three levels, forming a regulatory circuit of hormone formation. The diagram runs: the DIENCEPHALON (mezimozek) produces a NEUROSECRETION, which acts on the HYPOPHYSIS, which produces a GLANDOTROPIC HORMONE, which acts on the HORMONAL GLAND — here the adrenal cortex — which produces the PERIPHERALLY EFFECTIVE HORMONE, cortisol, which acts on the TISSUES. And crucially, an INHIBITION arrow runs from that peripheral hormone back to BOTH the hypophysis AND the diencephalon: the end product shuts down its own production at two levels above it. This is negative feedback again — structurally the same principle as the allosteric feedback control of §10.2, transposed from a metabolic pathway onto a chain of organs. The following subsection then explains specificity. Most hormones act only on certain organs, tissues or cells, which are called TARGET; and the cause of this specificity lies in the fact that only target cells contain RECEPTORS for the hormone in question. Specificity is therefore a property of the receiving cell, not of the signal — the hormone reaches everything the blood reaches, and only the equipped cells respond.",
    cn: "所谓**激素调控**，教材理解为以具有特异作用的物质（即激素）去影响组织或细胞。激素在特化的腺体、组织或细胞中生成，或者分泌进血液循环，或者作用于周围细胞——因此这一定义未使用「内分泌」「旁分泌」等词就已涵盖了两种作用方式。激素腺体自身的活动同样受**激素**调控，就垂体—肾上腺皮质系统而言，这一激素腺体层级包含三个层次，构成一个激素生成的调节回路。图示的走向是：**间脑**(mezimozek)产生**神经分泌物**，作用于**垂体**，垂体产生**促腺激素**，作用于**激素腺体**（此处为肾上腺皮质），后者产生**外周有效激素**皮质醇，作用于**组织**。而关键在于，有一条**抑制**箭头从该外周激素同时回指**垂体**与**间脑**：终产物在其上方的两个层级上关闭自身的生产。这又是负反馈——在结构上与§10.2中的别构反馈调控是同一原理，只是从一条代谢途径转置到了一串器官之上。随后一小节解释了特异性。大多数激素只作用于某些器官、组织或细胞，这些被称为**靶**；而这种特异性的原因在于，只有靶细胞含有针对该激素的**受体**。因此特异性是接收细胞的属性，而非信号的属性——激素抵达血液所能抵达的一切地方，只有装备齐全的细胞才作出反应。"
  },
  points: [
    { cz: "definice hormonálního řízení", en: "Hormonal control is the influencing of tissues or cells by specifically effective substances, hormones. They are formed in specialized glands, tissues or cells.", cn: "激素调控是以具有特异作用的物质（激素）去影响组织或细胞。它们在特化的腺体、组织或细胞中生成。" },
    { cz: "dvě cesty působení", en: "Hormones either are secreted into the blood circulation OR act on surrounding cells. The definition therefore already covers both classical endocrine and local (paracrine) action.", cn: "激素或者分泌进血液循环，或者作用于周围细胞。因此该定义已同时涵盖经典的内分泌作用与局部（旁分泌）作用。" },
    { cz: "žláza je sama řízena hormonálně", en: "The activity of a hormonal gland is itself controlled hormonally. In the hypophysis–adrenal cortex system this hierarchy includes THREE levels and forms a regulatory circuit of hormone formation.", cn: "激素腺体自身的活动也受激素调控。在垂体—肾上腺皮质系统中，这一层级包含**三个**层次，并构成一个激素生成的调节回路。" },
    { cz: "řetěz: mezimozek → hypofýza → kůra nadledvinek → tkáně", en: "The chain in the diagram: diencephalon (mezimozek) → neurosecretion → hypophysis → glandotropic hormone → hormonal gland (adrenal cortex) → peripherally effective hormone (cortisol) → tissues.", cn: "图中的链条：间脑(mezimozek)→神经分泌物→垂体→促腺激素→激素腺体（肾上腺皮质）→外周有效激素（皮质醇）→组织。" },
    { cz: "inhibice míří na DVĚ úrovně", en: "The inhibition arrow runs from the peripherally effective hormone back to BOTH the hypophysis AND the diencephalon. The end product shuts down its own production at two levels above itself, not just one — a detail easily lost when the diagram is summarised.", cn: "抑制箭头从外周有效激素同时回指**垂体****与****间脑**。终产物在其上方**两个**层级上关闭自身的生产，而不只是一个——这是概括该图时极易丢失的细节。" },
    { cz: "táž zpětná vazba jako v §10.2", en: "This is structurally the same negative feedback as the allosteric feedback control of §10.2: the final product inhibits the start of the sequence. Only the scale differs — there a pathway of enzymes, here a chain of organs.", cn: "这与§10.2中的别构反馈调控在结构上是同一种负反馈：终产物抑制序列的起始端。只是尺度不同——那里是一条酶的途径，这里是一串器官。" },
    { cz: "cílové buňky", en: "Most hormones act only on certain organs, tissues or cells, which are called target (cílové).", cn: "大多数激素只作用于某些器官、组织或细胞，这些被称为靶(cílové)。" },
    { cz: "specificita je vlastností receptoru", en: "The cause of this specificity lies in the fact that only target cells contain RECEPTORS for the hormone concerned. Specificity is a property of the receiving cell, not of the signal: the hormone reaches everywhere the blood reaches, and only equipped cells respond.", cn: "这种特异性的原因在于，只有靶细胞含有针对该激素的**受体**。特异性是接收细胞的属性，而非信号的属性：激素抵达血液所及之处，只有装备齐全的细胞才作出反应。" }
  ],
  terms: [
    { cz: "hormon", en: "hormone", cn: "激素", def_en: "A specifically effective substance formed in a specialized gland, tissue or cell, secreted into the blood or acting on surrounding cells, which influences tissues or cells bearing its receptor.", def_cn: "在特化的腺体、组织或细胞中生成的具特异作用的物质，分泌进血液或作用于周围细胞，影响带有其受体的组织或细胞。" },
    { cz: "glandotropní hormon", en: "glandotropic hormone", cn: "促腺激素", def_en: "A hypophyseal hormone whose target is another hormonal gland — the middle level of the three-level regulatory circuit.", def_cn: "以另一个激素腺体为靶的垂体激素——三层调节回路中的中间层。" },
    { cz: "periferně účinný hormon", en: "peripherally effective hormone", cn: "外周有效激素", def_en: "The end product of the hierarchy, acting on the tissues themselves; cortisol in the book's example. It also inhibits the two levels above it.", def_cn: "该层级体系的终产物，直接作用于组织本身；教材例中为皮质醇。它同时抑制其上方的两个层级。" },
    { cz: "cílová buňka", en: "target cell", cn: "靶细胞", def_en: "A cell containing the receptor for a given hormone; possession of the receptor, not exposure to the hormone, is what makes it a target.", def_cn: "含有某激素受体的细胞；使它成为靶的是拥有受体，而非接触到该激素。" },
    { cz: "neurosekret", en: "neurosecretion", cn: "神经分泌物", def_en: "The product of the diencephalon that acts on the hypophysis; the top level of the regulatory circuit, and the junction between nervous and hormonal regulation.", def_cn: "间脑的产物，作用于垂体；调节回路的最上层，也是神经调节与激素调节的交汇点。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the hypophysis–adrenal cortex regulatory circuit, where does the inhibition arrow from cortisol point?",
      q_cn: "在垂体—肾上腺皮质调节回路中，来自皮质醇的抑制箭头指向何处？",
      options: [
        "To the adrenal cortex only",
        "To the hypophysis only",
        "To BOTH the hypophysis and the diencephalon",
        "To the target tissues"
      ],
      answer: 2,
      why_en: "The diagram runs the inhibition arrow back from the peripherally effective hormone to both the hypophysis and the diencephalon — two levels above it. Feedback at only one level would be a weaker circuit and is not what the figure shows.",
      why_cn: "图中的抑制箭头从外周有效激素同时回指垂体与间脑——即其上方的两个层级。只在一个层级上反馈会构成较弱的回路，而这并非该图所示。"
    },
    {
      type: "short",
      q_en: "Why does a hormone act only on certain tissues, given that the blood carries it everywhere?",
      q_cn: "既然血液把激素带到各处，为何它只作用于某些组织？",
      accept: ["receptor", "target", "only target cells"],
      answer_en: "Because only the target cells contain receptors for that hormone. Specificity is a property of the receiving cell, not of the circulating signal.",
      answer_cn: "因为只有靶细胞含有针对该激素的受体。特异性是接收细胞的属性，而非循环中信号的属性。"
    }
  ],
  oral: {
    q_en: "What is hormonal regulation, and how is a hormonal gland itself controlled?",
    q_cn: "什么是激素调节？激素腺体自身又是如何被调控的？",
    model_en: "Hormonal regulation means influencing tissues or cells by specifically effective substances made in specialized glands, tissues or cells. Note that the definition allows two delivery modes: secretion into the blood, or action on neighbouring cells — so it covers both endocrine and local signalling. Now, the gland itself is not autonomous; it is controlled hormonally in turn. The textbook's worked example is the hypophysis–adrenal cortex system, and it has three levels. The diencephalon makes a neurosecretion that acts on the hypophysis; the hypophysis makes a glandotropic hormone that acts on the adrenal cortex; the adrenal cortex makes the peripherally effective hormone, cortisol, which acts on the tissues. And then the important part: an inhibition arrow runs from cortisol back to both the hypophysis and the diencephalon. So the end product suppresses its own production at two levels above itself. Structurally that is exactly the negative feedback we saw in section ten-two with allosteric control — final product inhibiting the beginning of the sequence — just transposed from a chain of enzymes onto a chain of organs. As for why a hormone only affects certain tissues: the blood takes it everywhere, but only target cells possess the receptor. Specificity lives in the receiver.",
    checklist: [
      "Defined hormonal control and noted both delivery modes (bloodstream, surrounding cells)",
      "Stated that a hormonal gland is itself hormonally controlled",
      "Traced all three levels: diencephalon → hypophysis → adrenal cortex → tissues, with the correct hormone at each step",
      "Stated that the inhibition arrow targets BOTH the hypophysis and the diencephalon",
      "Identified this as negative feedback, structurally the same as allosteric feedback control",
      "Explained target specificity as a property of receptor possession"
    ]
  }
},

{
  id: "10-18",
  chapter: 10,
  section: "10.3",
  czTitle: "Adenylátcyklasová kaskáda a cyklický AMP",
  enTitle: "The adenylate cyclase cascade and cyclic AMP",
  cnTitle: "腺苷酸环化酶级联与环化AMP",
  pages: [223, 224],
  coverage: "full",
  coverageNote: "The 'Zpusoby ucinku hormonu' subsection at the foot of p.223, the ATP -> cyclic AMP -> AMP structural scheme spanning the page, and the first paragraph of p.224 that completes the account, read in full. The scheme was read step by step: adenylatcyklasa converts ATP to cyclic AMP with loss of PPi, and fosfodiesterasa hydrolyses cyclic AMP to AMP with H2O in and H+ out. The book's statement that there are 4 MAIN mechanisms of hormone action is recorded here even though it never numbers them; the four it goes on to describe are identified in the points, with a note that the enumeration is inferred from the text rather than labelled by it.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "We can distinguish FOUR main mechanisms of hormone action, and most hormones, after binding to specific receptors on the SURFACE of cells, trigger a cascade of enzyme reactions. (The book announces the number four but never numbers the mechanisms; from the text they are the adenylate cyclase cascade, the phosphoinositide cascade, receptor tyrosine kinase activation, and the nuclear steroid/thyroid mechanism — see nodes 10-19 and 10-20.) One of the main mechanisms is the ADENYLATE CYCLASE CASCADE, in which the hormone raises the level of cyclic AMP, and cyclic AMP activates a PROTEIN KINASE. The kinase then phosphorylates SERINE and THREONINE residues of target proteins; epinephrine (adrenaline) and glucagon act this way. The structural scheme shows the full life cycle of the messenger: adenylate cyclase converts ATP into cyclic AMP with loss of pyrophosphate, and phosphodiesterase then hydrolyses cyclic AMP to ordinary AMP. Cyclic AMP is degraded rapidly in the cell and its half-life is SHORT — which is not a defect but a requirement, since a second messenger that persisted would make the signal impossible to switch off. The book then states the general significance of the mechanism in two parts. First, an AMPLIFYING effect occurs through the formation of a second messenger: one hormone molecule at the surface generates many cyclic AMP molecules, each of which activates a kinase that phosphorylates many substrates. Second — and this is the subtler point — different cells and tissues can be influenced in DIFFERENT WAYS on the same basic principle, according to their equipment with receptors and with enzyme systems sensitive to cyclic AMP. The same messenger means different things in different cells; the specificity is downstream, in what the cell has available to be phosphorylated.",
    cn: "我们可以区分**四种**主要的激素作用机制，而大多数激素在与细胞**表面**的特异受体结合后，会触发一连串酶反应的级联。（教材宣布了「四」这个数目，却始终没有为这些机制编号；从文中看，它们是腺苷酸环化酶级联、磷酸肌醇级联、受体酪氨酸激酶的激活，以及类固醇/甲状腺激素的核内机制——见节点10-19与10-20。）主要机制之一是**腺苷酸环化酶级联**：激素提高环化AMP的水平，而环化AMP激活一种**蛋白激酶**。该激酶随后磷酸化靶蛋白上的**丝氨酸**与**苏氨酸**残基；肾上腺素与胰高血糖素即以此方式起作用。结构图示展示了这一信使的完整生命周期：腺苷酸环化酶把ATP转变为环化AMP并失去焦磷酸，磷酸二酯酶再把环化AMP水解为普通AMP。环化AMP在细胞内被迅速降解，其半衰期**很短**——这不是缺陷而是必需，因为一个持久不散的第二信使会使信号无法关闭。随后教材分两部分陈述该机制的普遍意义。其一，通过生成第二信使产生了**放大**效应：表面的一个激素分子生成许多环化AMP分子，每一个又激活一个可磷酸化众多底物的激酶。其二——这一点更微妙——不同的细胞与组织可以在**同一基本原理**之下被以**不同方式**影响，这取决于它们在受体以及对环化AMP敏感的酶系统方面的装备。同一个信使在不同细胞中意味着不同的事情；特异性在下游，在于细胞手头有什么可供磷酸化。"
  },
  points: [
    { cz: "4 hlavní mechanismy, většina přes povrchové receptory", en: "There are 4 main mechanisms of hormone action. Most hormones, after binding to specific receptors on the SURFACE of the cell, trigger a cascade of enzyme reactions. The book gives the number but does not number the mechanisms; the four described are the adenylate cyclase cascade, the phosphoinositide cascade, receptor tyrosine kinase, and the nuclear steroid/thyroid route.", cn: "激素作用有4种主要机制。大多数激素在与细胞**表面**的特异受体结合后，触发一连串酶反应的级联。教材给出了数目却未为机制编号；所描述的四种是腺苷酸环化酶级联、磷酸肌醇级联、受体酪氨酸激酶，以及类固醇/甲状腺激素的核内路线。" },
    { cz: "hormon → cAMP → proteinkinasa", en: "In the adenylate cyclase cascade the hormone raises the level of cyclic AMP, and cyclic AMP activates a protein kinase.", cn: "在腺苷酸环化酶级联中，激素提高环化AMP的水平，而环化AMP激活一种蛋白激酶。" },
    { cz: "kinasa fosforyluje Ser a Thr", en: "The kinase then phosphorylates SERINE and THREONINE residues of target proteins. Note the residues — this is what distinguishes this cascade from the tyrosine kinase mechanism (node 10-20).", cn: "该激酶随后磷酸化靶蛋白上的**丝氨酸**与**苏氨酸**残基。请留意这两种残基——正是它把本级联与酪氨酸激酶机制区分开（节点10-20）。" },
    { cz: "příklady: epinefrin a glukagon", en: "Epinephrine (adrenaline) and glucagon act by this mechanism.", cn: "肾上腺素与胰高血糖素以此机制起作用。" },
    { cz: "ATP → cAMP → AMP", en: "The structural scheme: adenylate cyclase converts ATP into cyclic AMP with loss of PPᵢ; phosphodiesterase then hydrolyses cyclic AMP to AMP, taking up H₂O and releasing H⁺.", cn: "结构图示：腺苷酸环化酶把ATP转变为环化AMP并失去PPᵢ；磷酸二酯酶再把环化AMP水解为AMP，消耗H₂O并释放H⁺。" },
    { cz: "krátký poločas je nutnost", en: "Cyclic AMP is rapidly degraded in the cell by phosphodiesterase and its half-life is short. This is a requirement, not a defect: a persistent second messenger could not be switched off.", cn: "环化AMP在细胞内被磷酸二酯酶迅速降解，半衰期很短。这是必需而非缺陷：一个持久不散的第二信使将无法被关闭。" },
    { cz: "význam 1: zesílení", en: "General significance, first part: an amplifying effect occurs through the formation of a second messenger. One hormone molecule at the surface yields many cyclic AMP molecules, each activating a kinase that phosphorylates many substrates.", cn: "普遍意义之一：通过生成第二信使产生放大效应。表面的一个激素分子产生许多环化AMP分子，每一个又激活一个可磷酸化众多底物的激酶。" },
    { cz: "význam 2: různé buňky, různá odpověď", en: "General significance, second part: different cells and tissues can be influenced in DIFFERENT ways on the same basic principle, according to their equipment with receptors and with enzyme systems sensitive to cyclic AMP. The specificity sits downstream of the messenger, in what the cell has available to phosphorylate.", cn: "普遍意义之二：不同的细胞与组织可在同一基本原理下被以**不同**方式影响，这取决于它们在受体以及对环化AMP敏感的酶系统方面的装备。特异性位于信使的下游，在于细胞手头有什么可供磷酸化。" }
  ],
  terms: [
    { cz: "cyklický AMP", en: "cyclic AMP", cn: "环化AMP", def_en: "The second messenger made from ATP by adenylate cyclase (losing PPᵢ) and destroyed by phosphodiesterase; short half-life; activates protein kinase.", def_cn: "由腺苷酸环化酶从ATP生成（失去PPᵢ）、并由磷酸二酯酶破坏的第二信使；半衰期短；激活蛋白激酶。" },
    { cz: "adenylátcyklasa", en: "adenylate cyclase", cn: "腺苷酸环化酶", def_en: "The enzyme converting ATP to cyclic AMP; the point at which a hormone signal at the cell surface becomes an intracellular one.", def_cn: "把ATP转变为环化AMP的酶；细胞表面的激素信号在此变为胞内信号。" },
    { cz: "fosfodiesterasa", en: "phosphodiesterase", cn: "磷酸二酯酶", def_en: "The enzyme hydrolysing cyclic AMP to AMP, giving the messenger its short half-life and making the signal switchable-off.", def_cn: "把环化AMP水解为AMP的酶，使该信使具有短半衰期，从而使信号可以被关闭。" },
    { cz: "druhý přenašeč", en: "second messenger", cn: "第二信使", def_en: "An intracellular signal molecule generated in response to an extracellular hormone; the source of both amplification and cell-type-specific interpretation.", def_cn: "响应胞外激素而在胞内生成的信号分子；既是放大的来源，也是细胞类型特异性解读的来源。" },
    { cz: "proteinkinasa", en: "protein kinase", cn: "蛋白激酶", def_en: "The enzyme activated by cyclic AMP; phosphorylates serine and threonine residues of target proteins.", def_cn: "由环化AMP激活的酶；磷酸化靶蛋白上的丝氨酸与苏氨酸残基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which residues does the cyclic-AMP-activated protein kinase phosphorylate?",
      q_cn: "由环化AMP激活的蛋白激酶磷酸化哪些残基？",
      options: [
        "Tyrosine residues",
        "Serine and threonine residues",
        "Histidine and aspartate residues",
        "Lysine and arginine residues"
      ],
      answer: 1,
      why_en: "The book states that the kinase phosphorylates serine and threonine residues of target proteins. Tyrosine phosphorylation belongs to a different mechanism — the insulin/growth factor receptor tyrosine kinases (node 10-20).",
      why_cn: "教材指出该激酶磷酸化靶蛋白上的丝氨酸与苏氨酸残基。酪氨酸的磷酸化属于另一种机制——胰岛素/生长因子的受体酪氨酸激酶（节点10-20）。"
    },
    {
      type: "short",
      q_en: "Give the two components of the 'general significance' the book attributes to the cyclic AMP mechanism.",
      q_cn: "说出教材归于环化AMP机制的「普遍意义」的两个组成部分。",
      accept: ["amplif", "second messenger", "different cells", "different way", "receptors", "enzyme systems"],
      answer_en: "First, amplification through the formation of a second messenger. Second, that different cells and tissues can be affected in different ways on the same basic principle, according to their equipment with receptors and with cyclic-AMP-sensitive enzyme systems.",
      answer_cn: "其一，通过生成第二信使实现放大。其二，不同细胞与组织可在同一基本原理下被以不同方式影响，这取决于它们在受体以及对环化AMP敏感的酶系统方面的装备。"
    }
  ],
  oral: {
    q_en: "Describe the adenylate cyclase cascade and explain why the second-messenger design is useful.",
    q_cn: "请描述腺苷酸环化酶级联，并解释第二信使这一设计为何有用。",
    model_en: "The hormone binds a receptor on the cell surface — it never enters the cell — and that raises the level of cyclic AMP inside. Cyclic AMP is made from ATP by adenylate cyclase, with loss of pyrophosphate, and it is destroyed again by phosphodiesterase, which hydrolyses it to ordinary AMP. Its half-life is deliberately short; a messenger that lingered could not be switched off. What cyclic AMP does is activate a protein kinase, and that kinase phosphorylates serine and threonine residues of target proteins. Adrenaline and glucagon both work this way. As for why the design is useful, the textbook gives two reasons and the second is the more interesting. The first is amplification: one hormone molecule at the surface generates many molecules of cyclic AMP, each activating a kinase, each kinase phosphorylating many substrates, so a very small signal outside produces a large response inside. The second is that the very same messenger can mean different things in different tissues. Because what actually happens depends on which receptors a cell carries and which cyclic-AMP-sensitive enzyme systems it possesses, one universal second messenger can drive completely different responses in liver, in muscle, in fat. The specificity is not in the signal; it is in the equipment of the receiving cell.",
    checklist: [
      "Stated that the hormone binds a surface receptor and does not enter the cell",
      "Gave the ATP → cyclic AMP → AMP cycle with adenylate cyclase and phosphodiesterase",
      "Explained the short half-life as a design requirement",
      "Named protein kinase as the target and serine/threonine as the phosphorylated residues",
      "Gave adrenaline and glucagon as examples",
      "Explained amplification through the second messenger",
      "Explained tissue-specific interpretation via receptor and enzyme-system equipment"
    ]
  }
},

{
  id: "10-19",
  chapter: 10,
  section: "10.3",
  czTitle: "Fosfoinositidová kaskáda — IP₃ a diacylglycerol",
  enTitle: "The phosphoinositide cascade — IP₃ and diacylglycerol",
  cnTitle: "磷酸肌醇级联——IP₃与二酰甘油",
  pages: [224],
  coverage: "full",
  coverageNote: "The phosphoinositide passage on p.224 and its full structural scheme read in full. The scheme was read component by component: fosfatidylinositol carrying (per its own labels) 'obvykle arachidonat' at one position and 'obvykle stearat' at the other; phosphorylation by 2 ATP -> 2 ADP to give fosfatidylinositol-4,5-bisfosfat; cleavage by fosfoinositidasa (fosfolipasa C) under 'receptorem rizena aktivace' with H2O; and the two products inositol-1,4,5-trifosfat, annotated 'otevreni Ca2+ kanalu', and diacylglycerol, annotated 'aktivace proteinkinasy C'. The two fatty-acid annotations are read off the figure only and are not in the running text.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "The PHOSPHOINOSITIDE CASCADE is another main route of hormone action; the example the book gives is serotonin. By binding of the hormone to a receptor on the cell membrane, PHOSPHOINOSITIDASE — also called phospholipase C — is activated, and it hydrolyses phosphatidylinositol-4,5-bisphosphate. The scheme shows the whole sequence. Phosphatidylinositol carries two fatty acyl chains, labelled in the figure as usually arachidonate and usually stearate; two ATP phosphorylate it at positions 4 and 5 to give phosphatidylinositol-4,5-bisphosphate; and then phospholipase C, under receptor-controlled activation, cleaves it with water. TWO substances arise, and both mediate the signal — this is the structural feature that distinguishes this cascade from the cyclic AMP one, where there is a single messenger. Inositol trisphosphate (inositol-1,4,5-trisphosphate) OPENS CALCIUM CHANNELS. Diacylglycerol ACTIVATES PROTEIN KINASE C, and that kinase phosphorylates serine and threonine residues of target proteins. Notice where the two products go: the inositol phosphate is water-soluble and diffuses away into the cytosol to release Ca²⁺, while the diacylglycerol is lipid and stays in the membrane where protein kinase C must come to it. One lipid cleaved by one enzyme therefore produces two messengers that travel to two different places and act by two different means — a Ca²⁺ signal and a phosphorylation signal — from a single binding event at the receptor.",
    cn: "**磷酸肌醇级联**是激素作用的另一条主要路线；教材给出的例子是5-羟色胺。激素与细胞膜上的受体结合后，**磷酸肌醇酶**——亦称磷脂酶C——被激活，它水解磷脂酰肌醇-4,5-二磷酸。图示展示了整个序列。磷脂酰肌醇带有两条脂肪酰链，图中标注为「通常是花生四烯酸」与「通常是硬脂酸」；两个ATP在4位和5位使其磷酸化，得到磷脂酰肌醇-4,5-二磷酸；随后磷脂酶C在受体控制的激活下以水将其裂解。由此产生**两种**物质，二者都传递信号——这正是本级联区别于环化AMP级联（后者只有单一信使）的结构特征。肌醇三磷酸（肌醇-1,4,5-三磷酸）**打开钙通道**。二酰甘油**激活蛋白激酶C**，该激酶磷酸化靶蛋白上的丝氨酸与苏氨酸残基。请注意这两种产物各自的去向：肌醇磷酸是水溶性的，扩散进胞质去释放Ca²⁺；而二酰甘油是脂类，留在膜内，蛋白激酶C必须到膜上来找它。因此一种脂类被一种酶裂解，产生了两个前往两个不同地点、以两种不同方式起作用的信使——一个Ca²⁺信号与一个磷酸化信号——而这一切源自受体上的单一一次结合事件。"
  },
  points: [
    { cz: "příklad: serotonin", en: "The phosphoinositide cascade is another main route of hormone action; the book's example is serotonin.", cn: "磷酸肌醇级联是激素作用的另一条主要路线；教材举的例子是5-羟色胺。" },
    { cz: "fosfoinositidasa = fosfolipasa C", en: "Binding of the hormone to a receptor on the cell membrane activates phosphoinositidase — the book gives the alternative name phospholipase C in the same breath — which hydrolyses phosphatidylinositol-4,5-bisphosphate.", cn: "激素与细胞膜受体的结合激活磷酸肌醇酶——教材随即给出别名磷脂酶C——它水解磷脂酰肌醇-4,5-二磷酸。" },
    { cz: "2 ATP na přípravu substrátu", en: "The substrate itself has to be prepared: two ATP phosphorylate phosphatidylinositol at positions 4 and 5 to give the bisphosphate. The signalling lipid is therefore made in advance and held in the membrane, ready.", cn: "底物本身需要预先准备：两个ATP在4位和5位使磷脂酰肌醇磷酸化，得到二磷酸产物。因此这个信号脂类是事先造好、储备在膜中待命的。" },
    { cz: "mastné kyseliny podle obrázku", en: "The figure labels the two acyl chains as usually arachidonate and usually stearate. These labels are read off the figure only; they do not appear in the running text.", cn: "图中把两条酰基链标注为「通常是花生四烯酸」与「通常是硬脂酸」。这些标注仅见于图中，正文里没有。" },
    { cz: "vznikají DVĚ signální látky", en: "Two substances arise and BOTH mediate the signal. This is the structural difference from the cyclic AMP cascade, which has a single messenger.", cn: "产生**两种**物质，二者**都**传递信号。这正是与只有单一信使的环化AMP级联之间的结构差异。" },
    { cz: "IP₃ otevírá vápníkové kanály", en: "Inositol trisphosphate (inositol-1,4,5-trisphosphate) opens calcium channels — a signal that works by moving an ion, not by covalent modification.", cn: "肌醇三磷酸（肌醇-1,4,5-三磷酸）打开钙通道——这是一种靠移动离子而非靠共价修饰起作用的信号。" },
    { cz: "diacylglycerol aktivuje proteinkinasu C", en: "Diacylglycerol activates protein kinase C, which phosphorylates serine and threonine residues of target proteins — the same residues as the cyclic AMP kinase, reached by a different route.", cn: "二酰甘油激活蛋白激酶C，后者磷酸化靶蛋白上的丝氨酸与苏氨酸残基——与环化AMP激酶所修饰的是同样的残基，只是经由不同的路线抵达。" },
    { cz: "rozpustný odejde, lipidový zůstane", en: "The two products separate by solubility: the inositol phosphate is water-soluble and diffuses into the cytosol, while diacylglycerol is a lipid and remains in the membrane, where protein kinase C must come to meet it. One cleavage, two messengers, two destinations, two modes of action.", cn: "两个产物按溶解性分道：肌醇磷酸是水溶性的、扩散进胞质，而二酰甘油是脂类、留在膜中，蛋白激酶C必须到膜上与它会合。一次裂解、两个信使、两个去向、两种作用方式。" }
  ],
  terms: [
    { cz: "fosfoinositidasa (fosfolipasa C)", en: "phosphoinositidase (phospholipase C)", cn: "磷酸肌醇酶（磷脂酶C）", def_en: "The receptor-activated enzyme hydrolysing phosphatidylinositol-4,5-bisphosphate into inositol trisphosphate and diacylglycerol.", def_cn: "受受体激活的酶，把磷脂酰肌醇-4,5-二磷酸水解为肌醇三磷酸与二酰甘油。" },
    { cz: "inositol-1,4,5-trifosfát (IP₃)", en: "inositol-1,4,5-trisphosphate (IP₃)", cn: "肌醇-1,4,5-三磷酸(IP₃)", def_en: "The water-soluble product of the cleavage; diffuses into the cytosol and opens calcium channels.", def_cn: "该裂解反应的水溶性产物；扩散进胞质并打开钙通道。" },
    { cz: "diacylglycerol", en: "diacylglycerol", cn: "二酰甘油", def_en: "The lipid product of the cleavage; remains in the membrane and activates protein kinase C.", def_cn: "该裂解反应的脂类产物；留在膜中并激活蛋白激酶C。" },
    { cz: "proteinkinasa C", en: "protein kinase C", cn: "蛋白激酶C", def_en: "Activated by diacylglycerol; phosphorylates serine and threonine residues of target proteins.", def_cn: "由二酰甘油激活；磷酸化靶蛋白上的丝氨酸与苏氨酸残基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What are the two products of phospholipase C acting on phosphatidylinositol-4,5-bisphosphate, and what does each do?",
      q_cn: "磷脂酶C作用于磷脂酰肌醇-4,5-二磷酸产生哪两种产物？各自做什么？",
      options: [
        "Cyclic AMP, which activates protein kinase A; and AMP, which is inert",
        "Inositol trisphosphate, which opens Ca²⁺ channels; and diacylglycerol, which activates protein kinase C",
        "Arachidonate, which becomes prostaglandins; and stearate, which is stored",
        "Inositol trisphosphate, which activates protein kinase C; and diacylglycerol, which opens Ca²⁺ channels"
      ],
      answer: 1,
      why_en: "The figure annotates each product with its action: inositol-1,4,5-trisphosphate → opening of Ca²⁺ channels, diacylglycerol → activation of protein kinase C. Option 3 has the two swapped, which is the standard error.",
      why_cn: "图中为每个产物标注了其作用：肌醇-1,4,5-三磷酸→打开Ca²⁺通道，二酰甘油→激活蛋白激酶C。选项3把二者弄反了，这是常见错误。"
    },
    {
      type: "short",
      q_en: "Why does the phosphoinositide cascade produce a Ca²⁺ signal AND a phosphorylation signal from one cleavage?",
      q_cn: "为何磷酸肌醇级联能从一次裂解同时产生Ca²⁺信号**与**磷酸化信号？",
      accept: ["two products", "soluble", "lipid", "membrane", "cytosol", "IP3", "diacylglycerol"],
      answer_en: "Because the cleavage yields two products that both mediate the signal and separate by solubility: the water-soluble inositol trisphosphate diffuses into the cytosol and opens Ca²⁺ channels, while the lipid diacylglycerol stays in the membrane and activates protein kinase C.",
      answer_cn: "因为该裂解产生两个都能传递信号的产物，且二者按溶解性分道：水溶性的肌醇三磷酸扩散进胞质并打开Ca²⁺通道，脂类的二酰甘油留在膜中并激活蛋白激酶C。"
    }
  ],
  oral: {
    q_en: "Compare the phosphoinositide cascade with the cyclic AMP cascade.",
    q_cn: "请比较磷酸肌醇级联与环化AMP级联。",
    model_en: "Both begin the same way — a hormone binds a receptor on the outside of the membrane and never enters the cell — but what happens next differs in an interesting structural way. In the cyclic AMP route, adenylate cyclase makes one second messenger from ATP, and that messenger activates a kinase which phosphorylates serine and threonine residues. In the phosphoinositide route, the receptor instead activates phosphoinositidase, also called phospholipase C, and that enzyme cleaves a membrane lipid, phosphatidylinositol-four-five-bisphosphate — a lipid the cell has already prepared in advance by spending two ATP to phosphorylate it. The cleavage yields not one messenger but two, and they both carry signal. Inositol trisphosphate is water-soluble, so it diffuses off into the cytosol, and what it does there is open calcium channels. Diacylglycerol is a lipid, so it stays put in the membrane, and it activates protein kinase C — which then phosphorylates serine and threonine, just as in the other cascade. So from one binding event and one enzymatic cut you get two messengers going to two different compartments and acting by two entirely different means, an ion signal and a covalent modification signal. Serotonin is the example the book gives.",
    checklist: [
      "Noted the shared surface-receptor starting point",
      "Named phosphoinositidase / phospholipase C and its substrate",
      "Mentioned that the substrate is pre-made at a cost of 2 ATP",
      "Gave both products and matched each correctly to its action",
      "Explained the solubility split sending one to the cytosol and one staying in the membrane",
      "Contrasted one messenger (cAMP) with two (IP₃ + DAG)",
      "Gave serotonin as the example"
    ]
  }
},

{
  id: "10-20",
  chapter: 10,
  section: "10.3",
  czTitle: "Tyrosinkinasové receptory, jaderný mechanismus steroidů a čtyři chemické skupiny",
  enTitle: "Receptor tyrosine kinases, the nuclear steroid mechanism, and the four chemical groups",
  cnTitle: "受体酪氨酸激酶、类固醇的核内机制与四大化学分类",
  pages: [225],
  coverage: "full",
  coverageNote: "The first three paragraphs of p.225 read in full. The tyrosine kinase description is reproduced with the detail the book actually gives -- the receptor FIRST phosphorylates its OWN tyrosine residues, which INCREASES its kinase activity towards target proteins, i.e. autophosphorylation as an amplifying step. The steroid/thyroid mechanism is given complete: they penetrate into cells, bind receptors described as proteins capable of binding DNA, are transported by them into the nucleus, bind specific sites in DNA and thereby activate certain parts of the gene. The four-group chemical classification is reproduced with the book's own etymological note that 'eikosi' is Greek for twenty.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "Two further mechanisms complete the four. INSULIN and a number of GROWTH FACTORS act by stimulating the TYROSINE KINASE activity of their own receptors: the receptor first phosphorylates its OWN tyrosine residues, and this increases its kinase activity towards target proteins. So here the receptor is itself the enzyme — there is no separate second messenger at all — and the amplification comes from autophosphorylation making the receptor progressively more active. Note also the residue: tyrosine, not the serine and threonine of the two cascade mechanisms. STEROID hormones (estrogens, progesterone, glucocorticoids) and THYROID hormones act by an entirely different mechanism again. They PENETRATE INTO the cells and bind to receptors — described by the book as proteins capable of binding to DNA — by which they are transported into the NUCLEUS. There they bind to specific sites in DNA and thus cause activation of certain parts of the gene. This is the mechanism §10.2 promised when it said that induction of enzyme biosynthesis is caused e.g. by steroid hormones. The contrast with the first three mechanisms is total: the hormone enters the cell rather than signalling from outside, the receptor is a transcription factor rather than an enzyme or a channel, and the output is new protein rather than modified protein — which also means a slower response with a longer duration. Finally the book classifies hormones by CHEMICAL NATURE into four groups: 1. steroid hormones, 2. hormones derived from amino acids, 3. peptide hormones and proteohormones, 4. icosanoids — which contain 20 carbon atoms, 'eikosi' being Greek for twenty. Tab. 10.1 then gives the overview (nodes 10-21 and 10-22).",
    cn: "另外两种机制补齐了这四种。**胰岛素**与若干**生长因子**通过刺激其自身受体的**酪氨酸激酶**活性起作用：受体先磷酸化**自身的**酪氨酸残基，这会提高它对靶蛋白的激酶活性。因此这里受体本身就是酶——根本没有独立的第二信使——而放大来自自磷酸化使受体逐步变得更加活跃。另请留意残基：是酪氨酸，而非前两种级联机制中的丝氨酸与苏氨酸。**类固醇**激素（雌激素、孕酮、糖皮质激素）与**甲状腺**激素则以又一种全然不同的机制起作用。它们**穿透进入**细胞并结合到受体上——教材把这些受体描述为「能够结合DNA的蛋白」——由受体把它们运送进**细胞核**。在那里它们结合到DNA的特定位点上，从而引起基因某些部分的激活。这正是§10.2所预告的机制——那里说过酶生物合成的诱导例如由类固醇激素引起。它与前三种机制的对比是彻底的：激素进入细胞而非从外部发信号，受体是转录因子而非酶或通道，输出是**新的**蛋白而非被修饰的蛋白——这也意味着响应更慢但持续更久。最后教材按**化学本性**把激素分为四组：1.类固醇激素，2.由氨基酸衍生的激素，3.肽类激素与蛋白类激素，4.二十烷酸类——它们含20个碳原子，「eikosi」在希腊语中意为二十。随后表10.1给出总览（节点10-21与10-22）。"
  },
  points: [
    { cz: "insulin a růstové faktory: tyrosinkinasa receptoru", en: "Insulin and a number of growth factors act by stimulating the tyrosine kinase activity of THEIR OWN receptors. The receptor is itself the enzyme; there is no separate second messenger.", cn: "胰岛素与若干生长因子通过刺激**其自身**受体的酪氨酸激酶活性起作用。受体本身就是酶；没有独立的第二信使。" },
    { cz: "autofosforylace zesiluje", en: "The receptor first phosphorylates its OWN tyrosine residues, and this increases its kinase activity towards target proteins. Amplification here comes from autophosphorylation making the receptor progressively more active.", cn: "受体先磷酸化**自身的**酪氨酸残基，这会提高它对靶蛋白的激酶活性。此处的放大来自自磷酸化使受体逐步更为活跃。" },
    { cz: "tyrosin, ne serin/threonin", en: "Note the residue: TYROSINE, in contrast to the serine and threonine phosphorylated by the cyclic AMP kinase and by protein kinase C. The residue identifies the mechanism.", cn: "留意残基：是**酪氨酸**，与环化AMP激酶和蛋白激酶C所磷酸化的丝氨酸与苏氨酸形成对比。残基类型标识着机制。" },
    { cz: "steroidy a thyroidní hormony vnikají do buňky", en: "Steroid hormones (estrogens, progesterone, glucocorticoids) and thyroid hormones act by an entirely different mechanism: they penetrate INTO the cells rather than signalling from the surface.", cn: "类固醇激素（雌激素、孕酮、糖皮质激素）与甲状腺激素以全然不同的机制起作用：它们**穿透进入**细胞，而非从表面发信号。" },
    { cz: "receptor je protein vázající DNA", en: "They bind to receptors which the book describes as proteins capable of binding to DNA, and by which they are transported into the nucleus. The receptor is a transcription factor, not an enzyme or a channel.", cn: "它们结合到受体上，教材把这些受体描述为「能够结合DNA的蛋白」，并由它们运送进细胞核。受体是转录因子，而非酶或通道。" },
    { cz: "vazba na specifická místa v DNA", en: "In the nucleus they bind to specific sites in DNA and thus cause activation of certain parts of the gene — i.e. the output is NEW protein rather than modified protein, which means a slower onset and a longer-lasting effect.", cn: "在细胞核中它们结合到DNA的特定位点，从而引起基因某些部分的激活——即输出是**新的**蛋白而非被修饰的蛋白，这意味着起效更慢、效应更持久。" },
    { cz: "splněný slib z §10.2", en: "This is the mechanism promised in §10.2, where induction of enzyme biosynthesis was said to be caused e.g. by steroid hormones. §10.2's regulation-by-enzyme-level and §10.3's steroid mechanism are the same phenomenon seen from two directions.", cn: "这正是§10.2所预告的机制——那里说过酶生物合成的诱导例如由类固醇激素引起。§10.2的「以酶水平进行调节」与§10.3的类固醇机制，是同一现象的两个观察方向。" },
    { cz: "čtyři chemické skupiny hormonů", en: "Hormones are classified by chemical nature into four groups: 1. steroid hormones; 2. hormones derived from amino acids; 3. peptide hormones and proteohormones; 4. icosanoids, which contain 20 carbon atoms — 'eikosi' being Greek for twenty.", cn: "激素按化学本性分为四组：1.类固醇激素；2.由氨基酸衍生的激素；3.肽类激素与蛋白类激素；4.二十烷酸类，含20个碳原子——「eikosi」在希腊语中意为二十。" },
    { cz: "pozor: dvě různá čtyřčlenná dělení", en: "Careful: this chapter contains TWO different four-part divisions — four mechanisms of action, and four chemical classes — and they do not correspond one to one. Steroids do map onto the nuclear mechanism, but peptide hormones are spread across the cyclic AMP, phosphoinositide and tyrosine kinase routes.", cn: "务必注意：本章含有**两个**不同的四分法——四种作用机制与四类化学分类——而它们并非一一对应。类固醇确实对应核内机制，但肽类激素则分散于环化AMP、磷酸肌醇与酪氨酸激酶三条路线之中。" }
  ],
  terms: [
    { cz: "tyrosinkinasový receptor", en: "receptor tyrosine kinase", cn: "受体酪氨酸激酶", def_en: "A receptor that is itself a kinase; autophosphorylates its own tyrosine residues, thereby increasing its activity towards target proteins. Insulin and growth factors act this way.", def_cn: "本身即为激酶的受体；自磷酸化其自身的酪氨酸残基，从而提高对靶蛋白的活性。胰岛素与生长因子以此方式起作用。" },
    { cz: "jaderný receptor", en: "nuclear receptor", cn: "核受体", def_en: "A protein capable of binding DNA that carries a steroid or thyroid hormone into the nucleus and binds specific DNA sites, activating parts of the gene.", def_cn: "一种能够结合DNA的蛋白，把类固醇或甲状腺激素带入细胞核并结合DNA的特定位点，激活基因的某些部分。" },
    { cz: "ikosanoid", en: "icosanoid", cn: "二十烷酸类", def_en: "The fourth chemical class of hormones; contains 20 carbon atoms, from Greek 'eikosi' = twenty. Developed in node 10-26.", def_cn: "激素的第四个化学类别；含20个碳原子，源自希腊语「eikosi」（二十）。在节点10-26中展开。" },
    { cz: "proteohormon", en: "proteohormone", cn: "蛋白类激素", def_en: "A protein-sized hormone, grouped with the peptide hormones as the book's third chemical class.", def_cn: "达到蛋白质大小的激素，与肽类激素同归教材的第三个化学类别。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How does the steroid/thyroid hormone mechanism differ fundamentally from the other three?",
      q_cn: "类固醇/甲状腺激素的机制与其他三种有何根本不同？",
      options: [
        "It uses a second messenger instead of a receptor",
        "The hormone enters the cell, its receptor carries it into the nucleus and binds DNA, so the output is new protein rather than modified protein",
        "It phosphorylates tyrosine rather than serine and threonine",
        "It acts only on surrounding cells rather than through the blood"
      ],
      answer: 1,
      why_en: "Steroid and thyroid hormones penetrate into the cell, bind receptors that are DNA-binding proteins, are transported into the nucleus and bind specific DNA sites, activating parts of the gene. Option 2 describes the receptor tyrosine kinase mechanism, which is a different one of the four.",
      why_cn: "类固醇与甲状腺激素穿透进入细胞，结合能够结合DNA的受体蛋白，被运送进核并结合DNA的特定位点，激活基因的某些部分。选项2描述的是受体酪氨酸激酶机制，那是四种中的另一种。"
    },
    {
      type: "short",
      q_en: "Give the four chemical classes of hormones and say where the name of the fourth comes from.",
      q_cn: "说出激素的四个化学类别，并说明第四类名称的由来。",
      accept: ["steroid", "amino acid", "peptide", "protein", "icosanoid", "eikosi", "twenty", "20"],
      answer_en: "1. Steroid hormones; 2. hormones derived from amino acids; 3. peptide hormones and proteohormones; 4. icosanoids — named because they contain 20 carbon atoms, 'eikosi' being Greek for twenty.",
      answer_cn: "1.类固醇激素；2.由氨基酸衍生的激素；3.肽类激素与蛋白类激素；4.二十烷酸类——因含20个碳原子而得名，「eikosi」在希腊语中意为二十。"
    }
  ],
  oral: {
    q_en: "Give all four mechanisms of hormone action and contrast them.",
    q_cn: "请给出激素作用的全部四种机制并加以对比。",
    model_en: "Three of the four work from outside the cell and one from inside. The first is the adenylate cyclase cascade: the hormone binds a surface receptor, cyclic AMP rises, protein kinase is activated and phosphorylates serine and threonine residues — adrenaline and glucagon. The second is the phosphoinositide cascade: the receptor activates phospholipase C, which cleaves phosphatidylinositol-four-five-bisphosphate into inositol trisphosphate, which opens calcium channels, and diacylglycerol, which activates protein kinase C — serotonin. The third is the receptor tyrosine kinases: insulin and various growth factors stimulate the kinase activity of their own receptor, which first autophosphorylates its own tyrosine residues and thereby becomes more active towards its targets. Note that here the receptor is the enzyme, and note the residue is tyrosine, not serine or threonine. The fourth is quite different in kind. Steroid hormones — estrogens, progesterone, glucocorticoids — and the thyroid hormones actually enter the cell. Their receptors are DNA-binding proteins which carry them into the nucleus, where they bind specific DNA sites and activate parts of a gene. So the output is not a modified protein but a newly synthesized one, which means the response is slower to start and lasts much longer. That is also exactly the induction of enzyme biosynthesis that section ten-two mentioned. Separately, the book classifies hormones chemically into steroids, amino-acid derivatives, peptides and proteins, and icosanoids — and those two four-part schemes do not line up one to one.",
    checklist: [
      "Named all four mechanisms",
      "Gave the cAMP cascade with its residues and example hormones",
      "Gave the phosphoinositide cascade with both products and their actions",
      "Described receptor tyrosine kinases including autophosphorylation and the tyrosine residue",
      "Described the nuclear steroid/thyroid mechanism through to gene activation",
      "Contrasted new protein (slow, lasting) with modified protein (fast, transient)",
      "Connected the steroid mechanism to §10.2's induction of enzyme biosynthesis",
      "Gave the four chemical classes and noted they do not map one-to-one onto the mechanisms"
    ]
  }
},

{
  id: "10-21",
  chapter: 10,
  section: "10.3",
  czTitle: "Tab. 10.1 — steroidní hormony a hormony odvozené od aminokyselin",
  enTitle: "Tab. 10.1 — steroid hormones and hormones derived from amino acids",
  cnTitle: "表10.1——类固醇激素与氨基酸衍生激素",
  pages: [225],
  coverage: "full",
  coverageNote: "The first two blocks of Tab. 10.1 on p.225 read row by row directly from the scan; all nine rows are reproduced below with all four columns (hormone, abbreviation, organ, effect) as printed. Two features of the table as printed are noted rather than filled in: most rows carry no abbreviation, only estradiol (E2) and thyroxin (Thx) do in this part of the table; and the serotonin row has its ORGAN cell left blank, which is a genuine gap in the book, not an omission in transcription.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "Tab. 10.1, 'Some hormones of vertebrates', is laid out in four columns — hormone, abbreviation, organ, effect — and grouped by the chemical classification just given. The STEROID HORMONES block has five rows. Aldosterone, from the adrenal cortex: management of mineral substances, retention of Na⁺ and water. Cortisol, also adrenal cortex: response to stress, raising of blood pressure and sugar. Progesterone, from the ovary (corpus luteum): secretory phase of the uterine mucosa, pregnancy, embryogenesis. Estradiol, abbreviated E₂, from the ovary (follicles): sex hormone, sexually reproductive functions. Testosterone, from the testes (interstitial tissue cells): male sex hormone, anabolic steroid. The HORMONES DERIVED FROM AMINO ACIDS block has four rows. Thyroxin, abbreviated Thx, from the thyroid gland: increase of basal metabolism, development. Adrenalin (epinephrine), from the adrenal MEDULLA — note the contrast with the cortex above: reaction to short-term stress, increase of pulse, of blood glucose, and breakdown of glycogen. Melatonin, from the epiphysis: regulation of daily rhythms. Serotonin, with its organ cell left BLANK in the book: neurotransmitter, mood, body temperature, sexuality. Two things are worth extracting from the layout itself. The adrenal gland appears twice with different chemistry — steroids from the cortex, a catecholamine from the medulla — and both are stress hormones, but cortisol answers sustained stress and adrenaline short-term stress, which the table states explicitly. And serotonin's blank organ column is a real gap in the source, consistent with the fact that serotonin is not the product of one gland.",
    cn: "表10.1「某些脊椎动物激素」按四栏排布——激素、缩写、器官、作用——并依照刚给出的化学分类分组。**类固醇激素**块有五行。醛固酮，来自肾上腺皮质：矿物质的调控、Na⁺与水的潴留。皮质醇，同样来自肾上腺皮质：对应激的反应、升高血压与血糖。孕酮，来自卵巢（黄体）：子宫黏膜的分泌期、妊娠、胚胎发生。雌二醇，缩写E₂，来自卵巢（卵泡）：性激素、性与生殖功能。睾酮，来自睾丸（间质组织细胞）：雄性性激素、合成代谢类固醇。**氨基酸衍生激素**块有四行。甲状腺素，缩写Thx，来自甲状腺：提高基础代谢、发育。肾上腺素，来自肾上腺**髓质**——请注意与上文皮质的对比：对短期应激的反应、心率加快、血糖升高、糖原分解。褪黑素，来自松果体：昼夜节律的调节。5-羟色胺，其器官栏在书中**留空**：神经递质、情绪、体温、性欲。从这个排布本身还可以提取出两点。肾上腺出现了两次而化学性质不同——皮质产类固醇，髓质产儿茶酚胺——二者都是应激激素，但皮质醇应对持续性应激、肾上腺素应对短期应激，这一点表中已明说。而5-羟色胺器官栏的留空是原书中真实的空缺，这与5-羟色胺并非某一个腺体的产物这一事实相符。"
  },
  points: [
    { cz: "aldosteron — kůra nadledvinek", en: "Aldosterone, adrenal cortex: management of mineral substances, retention of Na⁺ and water.", cn: "醛固酮，肾上腺皮质：矿物质的调控，Na⁺与水的潴留。" },
    { cz: "kortisol — kůra nadledvinek", en: "Cortisol, adrenal cortex: response to stress, increase of blood pressure and sugar. This is the peripherally effective hormone of the regulatory circuit in node 10-17.", cn: "皮质醇，肾上腺皮质：对应激的反应，升高血压与血糖。它正是节点10-17调节回路中的外周有效激素。" },
    { cz: "progesteron — vaječník (corpus luteum)", en: "Progesterone, ovary (corpus luteum): secretory phase of the uterine mucosa, pregnancy, embryogenesis.", cn: "孕酮，卵巢（黄体）：子宫黏膜的分泌期、妊娠、胚胎发生。" },
    { cz: "estradiol E₂ — vaječník (folikuly)", en: "Estradiol, abbreviated E₂, ovary (follicles): sex hormone, sexually reproductive functions. One of only two abbreviations in this part of the table.", cn: "雌二醇，缩写E₂，卵巢（卵泡）：性激素、性与生殖功能。是本部分表格中仅有的两个缩写之一。" },
    { cz: "testosteron — varlata", en: "Testosterone, testes (cells of the interstitial tissue): male sex hormone, anabolic steroid.", cn: "睾酮，睾丸（间质组织细胞）：雄性性激素、合成代谢类固醇。" },
    { cz: "thyroxin Thx — štítná žláza", en: "Thyroxin, abbreviated Thx, thyroid gland: increase of basal metabolism, development.", cn: "甲状腺素，缩写Thx，甲状腺：提高基础代谢、发育。" },
    { cz: "adrenalin — dřeň nadledvinek", en: "Adrenalin (epinephrine), adrenal MEDULLA: reaction to short-term stress, increase of pulse, increase of blood glucose, breakdown of glycogen. Note that this is the medulla, whereas aldosterone and cortisol come from the cortex of the same gland.", cn: "肾上腺素，肾上腺**髓质**：对短期应激的反应、心率加快、血糖升高、糖原分解。请注意这里是髓质，而醛固酮与皮质醇来自同一腺体的皮质。" },
    { cz: "dvě odpovědi na stres", en: "The table thus places two stress hormones in the same organ but different tissues and different chemical classes: cortisol (steroid, cortex) for stress in general, adrenalin (amino-acid derivative, medulla) explicitly for SHORT-TERM stress.", cn: "该表因此把两种应激激素放在同一器官、不同组织、不同化学类别中：皮质醇（类固醇，皮质）应对一般应激，肾上腺素（氨基酸衍生物，髓质）则明确针对**短期**应激。" },
    { cz: "melatonin — epifýza", en: "Melatonin, epiphysis (pineal gland): regulation of daily rhythms.", cn: "褪黑素，松果体：昼夜节律的调节。" },
    { cz: "serotonin — orgán ponechán prázdný", en: "Serotonin: neurotransmitter, mood, body temperature, sexuality. Its ORGAN cell is left blank in the book — a genuine gap in the source, consistent with serotonin not being the product of a single gland.", cn: "5-羟色胺：神经递质、情绪、体温、性欲。其**器官**栏在书中留空——这是原书中真实的空缺，与5-羟色胺并非单一腺体的产物这一事实相符。" }
  ],
  terms: [
    { cz: "aldosteron", en: "aldosterone", cn: "醛固酮", def_en: "Adrenal cortex steroid governing mineral management and the retention of Na⁺ and water.", def_cn: "肾上腺皮质的类固醇，调控矿物质并促使Na⁺与水的潴留。" },
    { cz: "kortisol", en: "cortisol", cn: "皮质醇", def_en: "Adrenal cortex steroid; response to stress, raises blood pressure and blood sugar; the peripherally effective hormone of the hypophysis–adrenal cortex circuit.", def_cn: "肾上腺皮质的类固醇；应对应激，升高血压与血糖；是垂体—肾上腺皮质回路中的外周有效激素。" },
    { cz: "kůra vs dřeň nadledvinek", en: "adrenal cortex vs medulla", cn: "肾上腺皮质与髓质", def_en: "Two tissues of one gland producing chemically different hormones: steroids (aldosterone, cortisol) from the cortex, the amino-acid-derived adrenalin from the medulla.", def_cn: "同一腺体的两种组织，产生化学性质不同的激素：皮质产类固醇（醛固酮、皮质醇），髓质产氨基酸衍生的肾上腺素。" },
    { cz: "epifýza", en: "epiphysis (pineal gland)", cn: "松果体", def_en: "Source of melatonin, which regulates daily rhythms.", def_cn: "褪黑素的来源，褪黑素调节昼夜节律。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which two hormones in Tab. 10.1 come from the same gland but from different tissues and different chemical classes?",
      q_cn: "表10.1中，哪两种激素来自同一腺体但取自不同组织、且属于不同化学类别？",
      options: [
        "Progesterone and estradiol",
        "Cortisol (adrenal cortex, steroid) and adrenalin (adrenal medulla, amino-acid derivative)",
        "Thyroxin and thyrocalcitonin",
        "Melatonin and serotonin"
      ],
      answer: 1,
      why_en: "The table places cortisol in the adrenal cortex among the steroids and adrenalin in the adrenal medulla among the amino-acid derivatives. Both are stress hormones, but the table specifies adrenalin for SHORT-TERM stress. Progesterone and estradiol are both ovarian steroids; thyroxin and thyrocalcitonin are both thyroid but fall in different table blocks.",
      why_cn: "表中把皮质醇列在肾上腺皮质、归入类固醇，把肾上腺素列在肾上腺髓质、归入氨基酸衍生物。二者都是应激激素，但表中指明肾上腺素针对**短期**应激。孕酮与雌二醇同为卵巢类固醇；甲状腺素与降钙素同属甲状腺，但分处不同表块。"
    },
    {
      type: "short",
      q_en: "Which row of the amino-acid-derived block has its organ column left blank in the book, and what effect is listed for it?",
      q_cn: "在氨基酸衍生激素块中，哪一行的器官栏在书中留空？为它列出了什么作用？",
      accept: ["serotonin", "neurotransmitter", "mood", "temperature", "sexuality"],
      answer_en: "Serotonin. Its listed effects are: neurotransmitter, mood, body temperature, sexuality. The blank organ cell is a genuine gap in the source.",
      answer_cn: "5-羟色胺。所列作用为：神经递质、情绪、体温、性欲。器官栏的留空是原书中真实的空缺。"
    }
  ],
  oral: {
    q_en: "Run through the steroid and amino-acid-derived hormones of Tab. 10.1.",
    q_cn: "请梳理表10.1中的类固醇激素与氨基酸衍生激素。",
    model_en: "The steroids divide into adrenal cortical hormones and sex hormones. From the adrenal cortex: aldosterone, which manages mineral balance and retains sodium and water; and cortisol, which is the stress hormone proper, raising blood pressure and blood sugar — and remember cortisol is the peripherally effective hormone at the bottom of that three-level regulatory circuit. The sex steroids: progesterone from the corpus luteum of the ovary, governing the secretory phase of the uterine lining, pregnancy and embryogenesis; estradiol, abbreviated E-two, from the ovarian follicles, the principal estrogen; and testosterone from the interstitial cells of the testis, described as both the male sex hormone and an anabolic steroid. Then the amino-acid derivatives. Thyroxin from the thyroid raises basal metabolism and drives development. Adrenaline comes from the adrenal medulla — worth pausing on, because that is the same gland as cortisol but a different tissue and a completely different chemical class — and it handles short-term stress: faster pulse, more blood glucose, glycogen broken down. So the body has two stress hormones from one gland, one for acute stress and one sustained. Melatonin from the pineal regulates daily rhythms. And serotonin, listed as a neurotransmitter affecting mood, body temperature and sexuality, has its organ column left blank in the book — which is honest, since it is not the product of a single gland.",
    checklist: [
      "Gave all five steroid rows with organ and effect",
      "Identified cortisol as the peripherally effective hormone of the §10.3 circuit",
      "Gave all four amino-acid-derived rows with organ and effect",
      "Highlighted the cortex/medulla contrast within the adrenal gland",
      "Noted that adrenalin is specified for SHORT-TERM stress",
      "Noted the two abbreviations present (E₂, Thx)",
      "Noted the blank organ cell for serotonin as a genuine gap in the source"
    ]
  }
},

{
  id: "10-22",
  chapter: 10,
  section: "10.3",
  czTitle: "Tab. 10.1 — peptidové a bílkovinné hormony a ikosanoidy",
  enTitle: "Tab. 10.1 — peptide and protein hormones, and the icosanoids",
  cnTitle: "表10.1——肽类与蛋白类激素，以及二十烷酸类",
  pages: [225, 226],
  coverage: "full",
  coverageNote: "The peptide/protein block of Tab. 10.1, which begins on p.225 and continues across onto p.226 where the header row is repeated, plus the icosanoid row that closes the table, read row by row directly from both pages. All eighteen rows are reproduced below with all four columns as printed. Because the block spans the page break, both pages are listed in this node's page range so that the split table is covered exactly once and no row is lost at the seam.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "The peptide and protein hormone block is by far the largest in Tab. 10.1 and it spans the page break, the header row being repeated at the top of p.226. On p.225: parathormone (parathyrin), parathyroid glands — mobilisation of Ca²⁺; thyrocalcitonin, thyroid gland — lowering of the Ca²⁺ and phosphate level, formation of bone; insulin, pancreas — lowering of blood sugar; glucagon, pancreas — raising of blood sugar; relaxin, ovary — increases the motility of sperm; erythropoetin, kidneys — regulation of the formation of erythrocytes; oxytocin (ocytocin), neurohypophysis (posterior lobe) — contraction of the uterus, lactation; vasopressin (adiuretin), abbreviated ADH, neurohypophysis (posterior lobe) — braking of diuresis, retention of water. Continuing on p.226: melanotropin, MSH, hypophysis — secretion of melanin from melanophores, darkening of the skin; somatotropin, STH, adenohypophysis (anterior lobe) — growth hormone, anabolic agent; lipotropin, LPH, adenohypophysis — lipolysis, production of melanin, steroidogenesis; corticotropin, ACTH, adenohypophysis — stimulation of the adrenal cortex; thyreotropin, TSH, adenohypophysis — stimulation of the thyroid gland; follicle-stimulating hormone, FSH, adenohypophysis — stimulation of the maturation of germ cells; lutropin (luteinising hormone), LH, adenohypophysis — development and release of the ovum, production of testosterone; prolactin, adenohypophysis — stimulation of the mammary gland; chorionic gonadotropins, HCG, placenta — development and release of the ovum, protection of the corpus luteum and its production of progesterone. The ICOSANOID block is a single row covering prostaglandins, prostacyclins, thromboxanes and leukotrienes together, with no organ given: regulation of blood flow, of ion transport, modulation of synaptic transmission. Two structural observations: the anterior pituitary rows are almost all TROPIC hormones whose target is another gland — ACTH is exactly the glandotropic hormone of the circuit in node 10-17 — and insulin/glucagon appear as an explicit antagonistic pair from the same organ, as do parathormone and thyrocalcitonin for calcium.",
    cn: "肽类与蛋白类激素块是表10.1中最大的一块，并且跨越了页面断口，标题行在p.226顶部重复出现。p.225部分：甲状旁腺素(parathyrin)，甲状旁腺——Ca²⁺的动员；降钙素，甲状腺——降低Ca²⁺与磷酸盐水平、骨的形成；胰岛素，胰腺——降低血糖；胰高血糖素，胰腺——升高血糖；松弛素，卵巢——提高精子的活动性；促红细胞生成素，肾——调节红细胞的生成；催产素(ocytocin)，神经垂体（后叶）——子宫收缩、哺乳；血管加压素(adiuretin)，缩写ADH，神经垂体（后叶）——抑制利尿、水的潴留。p.226续接：促黑素，MSH，垂体——黑色素从黑素细胞中的分泌、皮肤变黑；生长激素，STH，腺垂体（前叶）——生长激素、合成代谢剂；促脂解素，LPH，腺垂体——脂解、黑色素生成、类固醇生成；促肾上腺皮质激素，ACTH，腺垂体——刺激肾上腺皮质；促甲状腺激素，TSH，腺垂体——刺激甲状腺；卵泡刺激素，FSH，腺垂体——刺激生殖细胞的成熟；黄体生成素，LH，腺垂体——卵子的发育与释放、睾酮的生成；催乳素，腺垂体——刺激乳腺；绒毛膜促性腺激素，HCG，胎盘——卵子的发育与释放、黄体及其孕酮生成的保护。**二十烷酸类**块只有一行，把前列腺素、前列环素、血栓素与白三烯合并列出、未给出器官：调节血流、离子转运、调制突触传递。两点结构性观察：腺垂体各行几乎全是以另一腺体为靶的**促（tropic）**激素——ACTH正是节点10-17回路中的促腺激素——而胰岛素与胰高血糖素作为来自同一器官的明确拮抗对出现，甲状旁腺素与降钙素在钙的问题上亦然。"
  },
  points: [
    { cz: "parathormon a thyrokalcitonin — antagonisté pro Ca²⁺", en: "Parathormone (parathyrin), parathyroid glands: mobilisation of Ca²⁺. Thyrocalcitonin, thyroid gland: lowering of the Ca²⁺ and phosphate level, formation of bone. An explicit antagonistic pair governing calcium.", cn: "甲状旁腺素(parathyrin)，甲状旁腺：Ca²⁺的动员。降钙素，甲状腺：降低Ca²⁺与磷酸盐水平、骨的形成。这是调控钙的一对明确的拮抗激素。" },
    { cz: "insulin a glukagon — antagonisté pro cukr", en: "Insulin, pancreas: lowering of blood sugar. Glucagon, pancreas: raising of blood sugar. A second antagonistic pair, and from the SAME organ — the pancreas controls blood glucose in both directions.", cn: "胰岛素，胰腺：降低血糖。胰高血糖素，胰腺：升高血糖。这是第二对拮抗激素，且来自**同一**器官——胰腺双向控制血糖。" },
    { cz: "relaxin a erythropoetin", en: "Relaxin, ovary: increases the motility of sperm. Erythropoetin (erythropoietin), kidneys: regulation of the formation of erythrocytes.", cn: "松弛素，卵巢：提高精子的活动性。促红细胞生成素，肾：调节红细胞的生成。" },
    { cz: "oxytocin a vasopresin — zadní lalok", en: "Oxytocin (ocytocin), neurohypophysis (posterior lobe): contraction of the uterus, lactation. Vasopressin (adiuretin), ADH, neurohypophysis (posterior lobe): braking of diuresis, retention of water. Both from the POSTERIOR lobe — structurally almost identical peptides (node 10-25).", cn: "催产素(ocytocin)，神经垂体（后叶）：子宫收缩、哺乳。血管加压素(adiuretin)，ADH，神经垂体（后叶）：抑制利尿、水的潴留。二者均来自**后叶**——在结构上是几乎相同的肽（节点10-25）。" },
    { cz: "melanotropin MSH", en: "Melanotropin, MSH, hypophysis: secretion of melanin from melanophores, darkening of the skin.", cn: "促黑素，MSH，垂体：黑色素从黑素细胞中的分泌、皮肤变黑。" },
    { cz: "somatotropin STH a lipotropin LPH", en: "Somatotropin, STH, adenohypophysis (anterior lobe): growth hormone, anabolic agent. Lipotropin, LPH, adenohypophysis: lipolysis, production of melanin, steroidogenesis.", cn: "生长激素，STH，腺垂体（前叶）：生长激素、合成代谢剂。促脂解素，LPH，腺垂体：脂解、黑色素生成、类固醇生成。" },
    { cz: "ACTH a TSH — glandotropní hormony", en: "Corticotropin, ACTH, adenohypophysis: stimulation of the adrenal cortex. Thyreotropin, TSH, adenohypophysis: stimulation of the thyroid gland. ACTH is precisely the 'glandotropic hormone' of the regulatory circuit in node 10-17.", cn: "促肾上腺皮质激素，ACTH，腺垂体：刺激肾上腺皮质。促甲状腺激素，TSH，腺垂体：刺激甲状腺。ACTH正是节点10-17调节回路中的「促腺激素」。" },
    { cz: "FSH, LH, prolaktin", en: "Follicle-stimulating hormone, FSH, adenohypophysis: stimulation of the maturation of germ cells. Lutropin / luteinising hormone, LH, adenohypophysis: development and release of the ovum, production of testosterone. Prolactin, adenohypophysis: stimulation of the mammary gland.", cn: "卵泡刺激素，FSH，腺垂体：刺激生殖细胞的成熟。黄体生成素，LH，腺垂体：卵子的发育与释放、睾酮的生成。催乳素，腺垂体：刺激乳腺。" },
    { cz: "HCG — placenta", en: "Chorionic gonadotropins, HCG, placenta: development and release of the ovum, protection of the corpus luteum and of its production of progesterone. Note the organ: the placenta is an endocrine organ in its own right.", cn: "绒毛膜促性腺激素，HCG，胎盘：卵子的发育与释放、黄体及其孕酮生成的保护。请注意器官：胎盘本身就是一个内分泌器官。" },
    { cz: "ikosanoidy — jeden řádek, bez orgánu", en: "The icosanoid block is a single row covering prostaglandins, prostacyclins, thromboxanes and leukotrienes together, with NO organ given: regulation of blood flow, of ion transport, modulation of synaptic transmission. The blank organ column reflects that these are made locally, essentially everywhere.", cn: "二十烷酸类块只有一行，把前列腺素、前列环素、血栓素与白三烯合并列出，且**未**给出器官：调节血流、离子转运、调制突触传递。器官栏留空反映了它们基本上是在各处局部生成的。" },
    { cz: "adenohypofýza je řídící patro", en: "Reading the block structurally: almost all the anterior pituitary entries are TROPIC hormones whose target is another gland (ACTH → adrenal cortex, TSH → thyroid, FSH/LH → gonads). The adenohypophysis is the middle level of the hierarchy of node 10-17, seen row by row.", cn: "从结构上读这一块：腺垂体的各条目几乎全是以另一腺体为靶的**促**激素（ACTH→肾上腺皮质、TSH→甲状腺、FSH/LH→性腺）。腺垂体就是节点10-17中层级体系的中间层，在此逐行呈现。" }
  ],
  terms: [
    { cz: "ACTH (kortikotropin)", en: "ACTH (corticotropin)", cn: "ACTH（促肾上腺皮质激素）", def_en: "Adenohypophyseal peptide stimulating the adrenal cortex; the glandotropic hormone of the hypophysis–adrenal cortex regulatory circuit.", def_cn: "刺激肾上腺皮质的腺垂体肽；垂体—肾上腺皮质调节回路中的促腺激素。" },
    { cz: "ADH (vasopresin)", en: "ADH (vasopressin, adiuretin)", cn: "ADH（血管加压素）", def_en: "Posterior pituitary peptide braking diuresis and retaining water; structurally nearly identical to oxytocin.", def_cn: "抑制利尿、促使水潴留的垂体后叶肽；结构上与催产素几乎相同。" },
    { cz: "erythropoetin", en: "erythropoetin", cn: "促红细胞生成素", def_en: "Kidney hormone regulating the formation of erythrocytes; a reminder that the kidney is an endocrine organ.", def_cn: "调节红细胞生成的肾脏激素；提示肾脏也是内分泌器官。" },
    { cz: "glandotropní vs periferní", en: "tropic vs peripherally effective hormone", cn: "促激素与外周有效激素", def_en: "A tropic hormone (ACTH, TSH, FSH, LH) targets another gland; a peripherally effective hormone (cortisol, thyroxin) targets the tissues themselves.", def_cn: "促激素（ACTH、TSH、FSH、LH）以另一腺体为靶；外周有效激素（皮质醇、甲状腺素）则以组织本身为靶。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which hormone in Tab. 10.1 is the 'glandotropic hormone' of the hypophysis–adrenal cortex regulatory circuit?",
      q_cn: "表10.1中哪一种激素是垂体—肾上腺皮质调节回路中的「促腺激素」？",
      options: [
        "TSH (thyreotropin)",
        "ACTH (corticotropin)",
        "STH (somatotropin)",
        "MSH (melanotropin)"
      ],
      answer: 1,
      why_en: "ACTH is listed as adenohypophyseal with the effect 'stimulation of the adrenal cortex', which is exactly the middle step of the three-level circuit in node 10-17: diencephalon → hypophysis (ACTH) → adrenal cortex (cortisol) → tissues. TSH is the corresponding tropic hormone for the thyroid, not the adrenal cortex.",
      why_cn: "ACTH被列为腺垂体来源、作用为「刺激肾上腺皮质」，这正是节点10-17三层回路的中间一步：间脑→垂体(ACTH)→肾上腺皮质(皮质醇)→组织。TSH是对应甲状腺的促激素，而非肾上腺皮质。"
    },
    {
      type: "short",
      q_en: "Name the two explicitly antagonistic hormone pairs visible in this part of Tab. 10.1.",
      q_cn: "说出表10.1这一部分中明显成对拮抗的两组激素。",
      accept: ["insulin", "glucagon", "parathormone", "parathyrin", "thyrocalcitonin", "calcitonin"],
      answer_en: "Insulin (lowers blood sugar) and glucagon (raises blood sugar), both from the pancreas; and parathormone (mobilises Ca²⁺) versus thyrocalcitonin (lowers Ca²⁺ and phosphate, forms bone).",
      answer_cn: "胰岛素（降血糖）与胰高血糖素（升血糖），二者均来自胰腺；以及甲状旁腺素（动员Ca²⁺）与降钙素（降低Ca²⁺与磷酸盐、形成骨）。"
    }
  ],
  oral: {
    q_en: "Present the peptide and protein hormones of Tab. 10.1 in an organised way.",
    q_cn: "请有条理地呈现表10.1中的肽类与蛋白类激素。",
    model_en: "Rather than reciting the rows, I'd organise them by what they do. First, antagonistic pairs. Insulin lowers blood sugar and glucagon raises it, both from the pancreas — one organ controlling one variable in both directions. Parathormone mobilises calcium while thyrocalcitonin lowers calcium and phosphate and builds bone. Second, the posterior pituitary pair: oxytocin, which contracts the uterus and drives lactation, and vasopressin or ADH, which brakes diuresis and retains water. They are structurally almost the same molecule, as we'll see. Third, and this is the largest group, the anterior pituitary hormones, and the striking thing is how many of them are tropic — their target is another gland. ACTH stimulates the adrenal cortex, and that is exactly the glandotropic step of the three-level circuit. TSH stimulates the thyroid. FSH drives maturation of germ cells and LH the release of the ovum and production of testosterone. Alongside those, somatotropin is the growth hormone and an anabolic agent, lipotropin does lipolysis and melanin production, prolactin stimulates the mammary gland, and MSH darkens the skin. Then two non-glandular sources worth noting: erythropoetin from the kidney regulating red cell formation, and HCG from the placenta protecting the corpus luteum. And finally the icosanoids get a single undivided row — prostaglandins, prostacyclins, thromboxanes, leukotrienes — with no organ listed, because they are made locally rather than by a gland.",
    checklist: [
      "Organised the block rather than reciting it row by row",
      "Gave both antagonistic pairs with their directions",
      "Gave the posterior pituitary pair and their effects",
      "Identified the anterior pituitary group as largely tropic and named ACTH, TSH, FSH, LH with targets",
      "Named STH, LPH, prolactin, MSH with effects",
      "Noted erythropoetin from the kidney and HCG from the placenta as non-classical endocrine sources",
      "Noted the icosanoid row's blank organ column and gave its listed effects"
    ]
  }
},

{
  id: "10-23",
  chapter: 10,
  section: "10.3",
  czTitle: "1. Steroidní hormony — kortikoidy a pohlavní hormony",
  enTitle: "1. Steroid hormones — the corticoids and the sex hormones",
  cnTitle: "1. 类固醇激素——皮质类固醇与性激素",
  pages: [226, 227],
  coverage: "full",
  coverageNote: "The numbered subsection '1. Steroidni hormony' beginning on p.226, its three corticoid structures, the closing paragraph naming the sex hormones, and the three sex-hormone structures at the top of p.227 read in full. All six structures were read from the scans and their distinguishing features checked: aldosterone drawn with an aldehyde at C18 and cortisol with the 17-OH that corticosterone lacks; testosterone with a 17-OH on a 4-en-3-one skeleton; estradiol-3,17beta with an AROMATIC A-ring bearing a phenolic OH and no C19 methyl; progesterone with a C20 acetyl side chain. The book gives estradiol's name as 'estradiol-3,17beta' throughout, and that form is kept.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "Among the steroid hormones the book counts especially the hormones of the ADRENAL CORTEX and the SEX HORMONES. The most important hormones of the adrenal cortex — the CORTICOIDS — are aldosterone, corticosterone and cortisol, and the three structures are given side by side. Read together they form a graded series on one skeleton: all three share the 4-en-3-one A ring and the C21 side chain bearing a CH₂OH ketone, and they differ only in decoration. Corticosterone is the plain member; cortisol adds a hydroxyl at C17; aldosterone carries an aldehyde group at C18, drawn in the figure as the HC=O that distinguishes it at a glance. That small structural difference maps directly onto the functional division of Tab. 10.1: the C18 aldehyde compound is the mineral-handling one, the C17-hydroxylated one is the stress-and-blood-sugar one. Of the sex gland hormones, the book says it is necessary to give at least the structure of the male sex hormone TESTOSTERONE; of the female sex hormones the most important ESTROGEN is ESTRADIOL-3,17β, and the most important GESTAGEN is then PROGESTERONE. Their three structures follow on p.227 and again the comparison is the point. Testosterone and progesterone both keep the 4-en-3-one A ring; they differ in the C17 substituent, a hydroxyl on testosterone and an acetyl on progesterone. Estradiol is the odd one out and unmistakably so: its A ring is AROMATIC, carrying a phenolic OH instead of the ketone, and it has lost the C19 angular methyl group that aromatisation requires. That is why estrogens are acidic enough to be extracted with alkali and why the aromatase step is the committed one in estrogen synthesis.",
    cn: "在类固醇激素中，教材主要计入**肾上腺皮质**的激素与**性激素**。肾上腺皮质最重要的激素——**皮质类固醇**——是醛固酮、皮质酮与皮质醇，三者的结构并排给出。合起来看，它们构成同一骨架上的一个渐变系列：三者共有4-烯-3-酮的A环以及带CH₂OH酮基的C21侧链，差别仅在于修饰。皮质酮是最朴素的一员；皮质醇在C17上增加一个羟基；醛固酮则在C18上带有一个醛基，图中画作HC=O，一眼即可辨认。这一微小的结构差异直接对应表10.1中的功能划分：带C18醛基的那个负责矿物质，C17羟基化的那个负责应激与血糖。就性腺激素而言，教材说至少必须给出雄性性激素**睾酮**的结构；女性性激素中最重要的**雌激素**是**雌二醇-3,17β**，最重要的**孕激素**则是**孕酮**。三者的结构接在p.227，比较仍是要点所在。睾酮与孕酮都保留4-烯-3-酮的A环；二者的差别在C17取代基：睾酮为羟基，孕酮为乙酰基。雌二醇则是显而易见的例外：它的A环是**芳香的**，带酚羟基而非酮基，并且失去了芳构化所必需牺牲的C19角甲基。这正是雌激素酸性足以用碱萃取的原因，也是芳香化酶那一步成为雌激素合成中关键定向步骤的原因。"
  },
  points: [
    { cz: "dvě hlavní skupiny steroidních hormonů", en: "Among steroid hormones the book counts especially the hormones of the adrenal cortex and the sex hormones.", cn: "在类固醇激素中，教材主要计入肾上腺皮质的激素与性激素。" },
    { cz: "kortikoidy: aldosteron, kortikosteron, kortisol", en: "The most important hormones of the adrenal cortex — the corticoids (kortikoidy) — are aldosterone, corticosterone and cortisol, and their three structures are given together.", cn: "肾上腺皮质最重要的激素——皮质类固醇——是醛固酮、皮质酮与皮质醇，三者结构一并给出。" },
    { cz: "společný skelet kortikoidů", en: "All three corticoids share the same skeleton in the figure: a 4-en-3-one A ring and a C21 side chain carrying a CH₂OH ketone. They are variations on one molecule, not three unrelated ones.", cn: "图中三种皮质类固醇共有同一骨架：4-烯-3-酮的A环，以及带CH₂OH酮基的C21侧链。它们是同一分子的变奏，而非三个互不相干的分子。" },
    { cz: "rozdíly: C17-OH a C18-CHO", en: "The differences: corticosterone is the plain member; cortisol adds a hydroxyl at C17; aldosterone carries an aldehyde at C18 (drawn as HC=O). These two small decorations are what the eye should go to first.", cn: "差别在于：皮质酮最朴素；皮质醇在C17增加一个羟基；醛固酮在C18带一个醛基（画作HC=O）。这两处小修饰正是目光应首先落到的地方。" },
    { cz: "struktura odpovídá funkci z tab. 10.1", en: "The structural difference maps onto the functional split in Tab. 10.1: the C18-aldehyde compound (aldosterone) is the mineral-handling hormone, the C17-hydroxylated one (cortisol) is the stress and blood-sugar hormone.", cn: "结构差异对应表10.1中的功能划分：带C18醛基的（醛固酮）是管矿物质的激素，C17羟基化的（皮质醇）是管应激与血糖的激素。" },
    { cz: "testosteron — mužský pohlavní hormon", en: "Of the sex gland hormones the book gives at least the structure of the male sex hormone testosterone: the 4-en-3-one A ring with a hydroxyl at C17.", cn: "在性腺激素中，教材至少给出雄性性激素睾酮的结构：4-烯-3-酮的A环，C17带羟基。" },
    { cz: "estradiol-3,17β — nejdůležitější estrogen", en: "Of the female sex hormones the most important estrogen is estradiol-3,17β — the book uses that full name throughout.", cn: "女性性激素中最重要的雌激素是雌二醇-3,17β——教材全文都使用这一完整名称。" },
    { cz: "progesteron — nejdůležitější gestagen", en: "The most important gestagen is progesterone, which keeps the 4-en-3-one A ring of testosterone but carries an acetyl group at C17 instead of a hydroxyl.", cn: "最重要的孕激素是孕酮，它保留睾酮的4-烯-3-酮A环，但在C17上带乙酰基而非羟基。" },
    { cz: "estradiol má AROMATICKÝ kruh A", en: "Estradiol is structurally the outlier: its A ring is AROMATIC, carrying a phenolic OH in place of the ketone, and the C19 angular methyl group has been lost — aromatisation requires its removal. This is why estrogens are weakly acidic and separable from the other steroids on that basis.", cn: "雌二醇在结构上是异类：其A环是**芳香的**，以酚羟基取代酮基，且C19角甲基已被去除——芳构化必须去掉它。这正是雌激素呈弱酸性、并可据此与其他类固醇分离的原因。" }
  ],
  terms: [
    { cz: "kortikoid", en: "corticoid", cn: "皮质类固醇", def_en: "A hormone of the adrenal cortex; the book names aldosterone, corticosterone and cortisol as the most important.", def_cn: "肾上腺皮质的激素；教材点名醛固酮、皮质酮与皮质醇为最重要者。" },
    { cz: "aldosteron", en: "aldosterone", cn: "醛固酮", def_en: "The corticoid bearing an aldehyde at C18; the mineral-handling hormone (Na⁺ and water retention).", def_cn: "在C18带醛基的皮质类固醇；管矿物质的激素（Na⁺与水的潴留）。" },
    { cz: "estrogen", en: "estrogen", cn: "雌激素", def_en: "The class of female sex hormones with an aromatic A ring; estradiol-3,17β is the most important.", def_cn: "具芳香A环的女性性激素类；雌二醇-3,17β最为重要。" },
    { cz: "gestagen", en: "gestagen", cn: "孕激素", def_en: "The class of pregnancy-maintaining steroids; progesterone is the most important.", def_cn: "维持妊娠的类固醇类；孕酮最为重要。" },
    { cz: "aromatický kruh A", en: "aromatic A ring", cn: "芳香A环", def_en: "The structural signature of the estrogens; requires loss of the C19 methyl group and replaces the 3-ketone with a phenolic OH.", def_cn: "雌激素的结构标志；需要去除C19甲基，并以酚羟基取代3位酮基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structural feature makes estradiol immediately distinguishable from testosterone and progesterone?",
      q_cn: "什么结构特征使雌二醇能与睾酮、孕酮一眼区分开？",
      options: [
        "It has an aldehyde group at C18",
        "Its A ring is aromatic, carrying a phenolic OH, and it has lost the C19 methyl group",
        "It has a C21 side chain with a CH₂OH ketone",
        "It lacks the four-ring steroid skeleton entirely"
      ],
      answer: 1,
      why_en: "The aromatic A ring with its phenolic hydroxyl, and the loss of the C19 angular methyl that aromatisation requires, are estradiol's signature. The C18 aldehyde belongs to aldosterone; the C21 side chain with CH₂OH belongs to the corticoids.",
      why_cn: "带酚羟基的芳香A环，以及芳构化所必需的C19角甲基的丢失，是雌二醇的标志。C18醛基属于醛固酮；带CH₂OH的C21侧链属于皮质类固醇。"
    },
    {
      type: "short",
      q_en: "Name the three corticoids and give the structural feature that distinguishes each pair.",
      q_cn: "说出三种皮质类固醇，并给出区分它们的结构特征。",
      accept: ["aldosterone", "corticosterone", "cortisol", "C18", "aldehyde", "C17", "hydroxyl"],
      answer_en: "Aldosterone, corticosterone and cortisol. All share a 4-en-3-one A ring and a C21 CH₂OH-ketone side chain; corticosterone is the plain one, cortisol adds a C17 hydroxyl, aldosterone carries a C18 aldehyde.",
      answer_cn: "醛固酮、皮质酮与皮质醇。三者共有4-烯-3-酮的A环与带CH₂OH酮基的C21侧链；皮质酮最朴素，皮质醇多一个C17羟基，醛固酮带一个C18醛基。"
    }
  ],
  oral: {
    q_en: "Present the steroid hormones and show how their structures relate to their functions.",
    q_cn: "请呈现类固醇激素，并说明其结构与功能的关系。",
    model_en: "The textbook divides them into the adrenal cortical hormones and the sex hormones. The corticoids — aldosterone, corticosterone and cortisol — are best seen as three variations on one skeleton. All three have the four-en-three-one A ring and the twenty-one-carbon side chain ending in a hydroxymethyl ketone. Corticosterone is the plain version. Cortisol adds a hydroxyl at carbon seventeen. Aldosterone carries an aldehyde at carbon eighteen, which is what you spot first in the drawing. And those two tiny decorations line up exactly with the functional split in the table: the C18-aldehyde one handles minerals, sodium and water, and the C17-hydroxylated one handles stress, blood pressure and blood sugar. Among the sex hormones, testosterone is the male hormone: the same four-en-three-one A ring, with a hydroxyl at C17. Progesterone, the principal gestagen, has that same A ring but an acetyl group at C17 instead. And then estradiol-three-seventeen-beta, the principal estrogen, is the structural outlier and unmistakably so — its A ring is aromatic, the three-ketone has become a phenolic hydroxyl, and the C19 angular methyl group is gone, because aromatising that ring requires removing it. That single difference is why estrogens are weakly acidic and behave chemically unlike every other steroid on the page.",
    checklist: [
      "Divided steroids into corticoids and sex hormones",
      "Named all three corticoids and gave their shared skeleton",
      "Gave the C17-OH and C18-aldehyde distinctions",
      "Connected those structural differences to the functional split in Tab. 10.1",
      "Gave testosterone and progesterone with their C17 substituents",
      "Gave estradiol-3,17β and identified the aromatic A ring and the loss of the C19 methyl",
      "Drew a chemical consequence from the aromatic ring (weak acidity / distinct behaviour)"
    ]
  }
},

{
  id: "10-24",
  chapter: 10,
  section: "10.3",
  czTitle: "2. Hormony odvozené od aminokyselin — katecholaminy, melatonin, thyroxin",
  enTitle: "2. Hormones derived from amino acids — catecholamines, melatonin, thyroxine",
  cnTitle: "2. 氨基酸衍生的激素——儿茶酚胺、褪黑素、甲状腺素",
  pages: [227],
  coverage: "full",
  coverageNote: "The numbered subsection '2. Hormony odvozene od aminokyselin' on p.227, with its three structural schemes, read in full. The catecholamine biosynthesis scheme was read step by step and every intermediate label was taken directly from the scan: tyrosin -> DOPA -> dopamin -> noradrenalin -> adrenalin, i.e. four arrows and five compounds. The chemical logic visible in the drawn structures is described in the points (ring hydroxylation, then decarboxylation, then side-chain hydroxylation, then N-methylation) as an observation of the figure rather than as text the book supplies. The book's statement that thyroxin is a PROHORMONE and that the active hormone is 3,5,3'-triiodothyronine, containing one iodine atom fewer, is reproduced exactly.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "Epinephrine (adrenaline) and noradrenaline are hormones of the ADRENAL MEDULLA, and their biosynthesis starts from TYROSINE; the book notes that the scheme also explains the chemical nature of the hormones — that is, the drawing is doing double duty as a structural definition. The scheme is: tyrosine → DOPA → dopamine → noradrenaline → adrenaline. Reading the drawn structures, the four steps are, in order, hydroxylation of the ring to give the catechol (tyrosine → DOPA), decarboxylation removing the COOH (DOPA → dopamine), hydroxylation of the side chain (dopamine → noradrenaline), and N-methylation (noradrenaline → adrenaline). Note that dopamine, noradrenaline and adrenaline are all on one linear path, so each is both a product and the precursor of the next. MELATONIN is the hormone of the epiphysis and arises from TRYPTOPHAN; its structure is given, an indole bearing a methoxy group and an N-acetylated ethylamine side chain. THYROXIN, tetraiodothyronine, is a hormone of the THYROID GLAND; these hormones are derived from tyrosine, arising by modification of this amino acid IN THYROGLOBULIN — a protein — and by cleavage of that protein. That detail matters: the iodination happens on tyrosine residues already built into a protein, and the hormone is then released by proteolysis, which is why the thyroid stores its hormone extracellularly as colloid. Finally, thyroxin is a PROHORMONE: the active hormone is 3,5,3′-triiodothyronine, which has the same structure as thyroxine but contains one iodine atom fewer. So the gland secretes principally the inactive four-iodine form and activation occurs by removing one iodine in the periphery.",
    cn: "肾上腺素与去甲肾上腺素是**肾上腺髓质**的激素，其生物合成从**酪氨酸**出发；教材指出该图式同时也说明了这些激素的化学本性——也就是说，这幅图兼作结构定义之用。图式为：酪氨酸→DOPA→多巴胺→去甲肾上腺素→肾上腺素。从所画结构来读，这四步依次是：环的羟基化以形成儿茶酚（酪氨酸→DOPA）、脱羧去掉COOH（DOPA→多巴胺）、侧链的羟基化（多巴胺→去甲肾上腺素）、以及N-甲基化（去甲肾上腺素→肾上腺素）。请注意多巴胺、去甲肾上腺素与肾上腺素都在同一条线性路径上，因此每一个既是产物也是下一个的前体。**褪黑素**是松果体的激素，由**色氨酸**生成；其结构给出为一个带甲氧基与N-乙酰化乙胺侧链的吲哚。**甲状腺素**（四碘甲状腺原氨酸）是**甲状腺**的激素；这类激素由酪氨酸衍生而来，是通过对**甲状腺球蛋白**（一种蛋白）中这一氨基酸的修饰、并通过该蛋白的裂解而生成的。这一细节很要紧：碘化发生在已经装配进蛋白质中的酪氨酸残基上，随后由蛋白水解释放出激素，这正是甲状腺以胶质形式在细胞外贮存其激素的原因。最后，甲状腺素是一种**激素原**：活性激素是3,5,3′-三碘甲状腺原氨酸，其结构与甲状腺素相同，只是少含一个碘原子。因此腺体主要分泌的是无活性的四碘形式，而激活是在外周通过去掉一个碘完成的。"
  },
  points: [
    { cz: "adrenalin a noradrenalin — dřeň nadledvinek", en: "Epinephrine (adrenaline) and noradrenaline are hormones of the adrenal medulla; their biosynthesis starts from tyrosine.", cn: "肾上腺素与去甲肾上腺素是肾上腺髓质的激素；其生物合成从酪氨酸出发。" },
    { cz: "schéma: tyrosin → DOPA → dopamin → noradrenalin → adrenalin", en: "The biosynthetic scheme has five compounds and four arrows: tyrosine → DOPA → dopamine → noradrenaline → adrenaline. The book notes that the scheme also explains the chemical nature of these hormones.", cn: "生物合成图式含五个化合物、四支箭头：酪氨酸→DOPA→多巴胺→去甲肾上腺素→肾上腺素。教材指出该图式同时也说明了这些激素的化学本性。" },
    { cz: "čtyři chemické kroky", en: "Reading the drawn structures, the four steps are: ring hydroxylation to the catechol (tyrosine → DOPA); decarboxylation removing COOH (DOPA → dopamine); side-chain hydroxylation (dopamine → noradrenaline); N-methylation (noradrenaline → adrenaline). This reading is taken from the figure, not from the running text.", cn: "从所画结构读出，这四步是：环羟基化形成儿茶酚（酪氨酸→DOPA）；脱羧去掉COOH（DOPA→多巴胺）；侧链羟基化（多巴胺→去甲肾上腺素）；N-甲基化（去甲肾上腺素→肾上腺素）。这一读法取自图示，而非正文。" },
    { cz: "lineární dráha, každý meziprodukt je i hormon", en: "The path is linear, so dopamine, noradrenaline and adrenaline are each simultaneously a product and the precursor of the next — one pathway generating three physiologically active substances in sequence.", cn: "该路径是线性的，因此多巴胺、去甲肾上腺素与肾上腺素各自既是产物又是下一个的前体——一条途径依次生成三种具生理活性的物质。" },
    { cz: "melatonin z tryptofanu", en: "Melatonin is the hormone of the epiphysis and arises from tryptophan; the structure given is an indole with a methoxy group and an N-acetylated ethylamine side chain.", cn: "褪黑素是松果体的激素，由色氨酸生成；所给结构是一个带甲氧基与N-乙酰化乙胺侧链的吲哚。" },
    { cz: "thyroxin z tyrosinu v thyreoglobulinu", en: "Thyroxin (tetraiodothyronine), a thyroid hormone, is derived from tyrosine, arising by modification of this amino acid IN THYROGLOBULIN — a protein — and by cleavage of that protein.", cn: "甲状腺素（四碘甲状腺原氨酸）是甲状腺激素，由酪氨酸衍生，经对**甲状腺球蛋白**（一种蛋白）中该氨基酸的修饰、并经该蛋白的裂解而生成。" },
    { cz: "proč záleží na thyreoglobulinu", en: "The detail matters mechanistically: iodination happens on tyrosine residues already incorporated into a protein, and the hormone is released by proteolysis of that protein — which is why the thyroid can store its hormone extracellularly, as colloid.", cn: "这一细节在机制上很要紧：碘化发生在已装配进蛋白质中的酪氨酸残基上，随后经该蛋白的水解释放出激素——这正是甲状腺能以胶质形式在细胞外贮存激素的原因。" },
    { cz: "thyroxin je prohormon", en: "Thyroxin is a PROHORMONE. The active hormone is 3,5,3′-triiodothyronine, which has the same structure as thyroxine but contains one iodine atom fewer. The gland secretes chiefly the inactive form and activation is by removal of one iodine.", cn: "甲状腺素是一种**激素原**。活性激素是3,5,3′-三碘甲状腺原氨酸，其结构与甲状腺素相同，只是少含一个碘原子。腺体主要分泌无活性形式，激活靠去掉一个碘。" },
    { cz: "dva prekurzory: tyrosin a tryptofan", en: "The whole class reduces to two precursor amino acids: tyrosine gives the catecholamines and the thyroid hormones, tryptophan gives melatonin. Tyrosine is thus the source of hormones acting by two entirely different mechanisms — surface cascade for adrenaline, nuclear receptor for thyroxine.", cn: "整个类别可归结为两种前体氨基酸：酪氨酸生成儿茶酚胺与甲状腺激素，色氨酸生成褪黑素。因此酪氨酸是两种作用机制完全不同的激素之来源——肾上腺素走表面级联，甲状腺素走核受体。" }
  ],
  terms: [
    { cz: "katecholamin", en: "catecholamine", cn: "儿茶酚胺", def_en: "Dopamine, noradrenaline and adrenaline — the tyrosine-derived hormones of the adrenal medulla, named for the catechol (dihydroxybenzene) ring created at the DOPA step.", def_cn: "多巴胺、去甲肾上腺素与肾上腺素——由酪氨酸衍生的肾上腺髓质激素，得名于DOPA那一步所形成的儿茶酚（二羟基苯）环。" },
    { cz: "DOPA", en: "DOPA", cn: "DOPA", def_en: "The ring-hydroxylated product of tyrosine and the first catechol in the pathway; decarboxylated to dopamine.", def_cn: "酪氨酸经环羟基化的产物，也是该途径中的第一个儿茶酚；脱羧后生成多巴胺。" },
    { cz: "thyreoglobulin", en: "thyroglobulin", cn: "甲状腺球蛋白", def_en: "The thyroid protein within which tyrosine residues are iodinated; cleavage of it releases thyroxine, allowing extracellular storage of the hormone.", def_cn: "甲状腺中的蛋白，酪氨酸残基在其内部被碘化；对它的裂解释放出甲状腺素，从而使激素得以在细胞外贮存。" },
    { cz: "prohormon", en: "prohormone", cn: "激素原", def_en: "An inactive precursor of a hormone. Thyroxin is one; the active form is 3,5,3′-triiodothyronine, with one iodine fewer.", def_cn: "激素的无活性前体。甲状腺素即为一例；活性形式是3,5,3′-三碘甲状腺原氨酸，少一个碘。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the relationship between thyroxin and 3,5,3′-triiodothyronine?",
      q_cn: "甲状腺素与3,5,3′-三碘甲状腺原氨酸之间是什么关系？",
      options: [
        "They are two unrelated thyroid hormones",
        "Thyroxin is a prohormone; the active hormone is 3,5,3′-triiodothyronine, of the same structure but with one iodine atom fewer",
        "Triiodothyronine is the storage form and thyroxin the active one",
        "Triiodothyronine is made in the adrenal medulla, thyroxin in the thyroid"
      ],
      answer: 1,
      why_en: "The book states this explicitly: thyroxin is a prohormone, the active hormone is 3,5,3′-triiodothyronine, which has the same structure as thyroxine but contains one iodine atom fewer. So the gland's main secretion is the inactive form and activation is a deiodination.",
      why_cn: "教材明确指出：甲状腺素是激素原，活性激素是3,5,3′-三碘甲状腺原氨酸，其结构与甲状腺素相同但少含一个碘原子。因此腺体主要分泌的是无活性形式，激活即为脱碘。"
    },
    {
      type: "short",
      q_en: "Give the catecholamine biosynthetic sequence from tyrosine.",
      q_cn: "请给出从酪氨酸出发的儿茶酚胺生物合成序列。",
      accept: ["tyrosine", "DOPA", "dopamine", "noradrenaline", "norepinephrine", "adrenaline", "epinephrine"],
      answer_en: "Tyrosine → DOPA → dopamine → noradrenaline → adrenaline.",
      answer_cn: "酪氨酸→DOPA→多巴胺→去甲肾上腺素→肾上腺素。"
    }
  ],
  oral: {
    q_en: "Describe the hormones derived from amino acids.",
    q_cn: "请描述由氨基酸衍生的激素。",
    model_en: "The whole class comes from just two amino acids, tyrosine and tryptophan. From tyrosine, first, the catecholamines of the adrenal medulla. The pathway is linear: tyrosine, then DOPA, then dopamine, then noradrenaline, then adrenaline. If you look at the structures, the four steps are hydroxylating the ring to make the catechol, decarboxylating away the carboxyl, hydroxylating the side chain, and finally N-methylating. What is nice about this is that it is one pathway producing three active substances in sequence — dopamine, noradrenaline and adrenaline are each simultaneously a product and the precursor of the next. Also from tyrosine, but by a completely different route, come the thyroid hormones. Thyroxin, tetraiodothyronine, is made by modifying tyrosine residues that are already built into a protein, thyroglobulin, and then cleaving that protein to release the hormone — which is why the thyroid can store its hormone outside the cells as colloid. And thyroxin is a prohormone: the actually active form is three-five-three-prime-triiodothyronine, structurally the same but with one iodine less, so activation is a deiodination out in the periphery. From tryptophan comes melatonin, the pineal hormone that regulates daily rhythms — an indole with a methoxy group and an acetylated side chain. It is worth noticing that tyrosine alone gives rise to hormones working by two totally different mechanisms: adrenaline through a surface cascade, thyroxine through a nuclear receptor.",
    checklist: [
      "Identified tyrosine and tryptophan as the two precursor amino acids",
      "Gave the full catecholamine sequence with all five compounds",
      "Described the four chemical transformations from the structures",
      "Noted that the linear pathway yields three active hormones in sequence",
      "Explained thyroxine's origin from tyrosine within thyroglobulin and release by proteolysis",
      "Stated that thyroxin is a prohormone and named 3,5,3′-triiodothyronine as active, with one iodine fewer",
      "Gave melatonin from tryptophan and its epiphyseal origin"
    ]
  }
},

{
  id: "10-25",
  chapter: 10,
  section: "10.3",
  czTitle: "3. Peptidové a proteinové hormony — od nonapeptidů k glykoproteinům",
  enTitle: "3. Peptide and protein hormones — from nonapeptides to glycoproteins",
  cnTitle: "3. 肽类与蛋白类激素——从九肽到糖蛋白",
  pages: [227, 228],
  coverage: "full",
  coverageNote: "The subsection '3. Peptidove a proteinove hormony' from its heading at the foot of p.227 through the ocytocin/vasopresin ring structures and both paragraphs of Mr values on p.228, read in full. The two ring structures were read residue by residue: both are nonapeptides closed by a disulfide between Cys residues, with the sequences Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2 for ocytocin and Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH2 for vasopresin -- i.e. they differ at exactly two positions. Every Mr value on the page was read off the scan and all are reproduced below. The Sanger attribution is given as printed (Sanger 1953).",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read)", status: "partial" },
  summary: {
    en: "A number of hormones of the hypophysis and of the pancreas are PEPTIDES. Oxytocin (ocytocin) and vasopressin, hormones of the posterior lobe of the hypophysis, are very similar to one another — and the two drawn structures show how similar: both are nonapeptides closed into a ring, and reading them off gives Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH₂ for oxytocin against Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH₂ for vasopressin. They differ at exactly TWO positions, and yet Tab. 10.1 assigns them completely different functions — uterine contraction and lactation versus water retention. That is as compact an illustration of receptor-based specificity as the chapter offers. The book adds two structural notes: the CYCLIC structure is made possible by the CYSTINE present (i.e. the disulfide bridge between the two Cys residues), and the terminal amino acid glycine is in the form of an AMIDE. Then a series of sizes, ascending. Corticotropin, ACTH, of the anterior lobe: a peptide of 39 amino acids, Mr = 4 500. Insulin, a hormone of the pancreas: a peptide of 51 amino acids, Mr = 5 750 — and the book notes that the amino acid sequence of this hormone was the very FIRST ever determined (Sanger 1953). Glucagon, the second pancreatic hormone: a peptide of 29 amino acid residues. Parathormone of the parathyroid glands: Mr = 8 500, and thus, the book says, already close to proteins. Among the most important PROTEIN hormones: somatotropin (Mr = 21 500), thyreotropin (two subunits, Mr = 10 800 and 13 000), folitropin (a glycoprotein, Mr = 34 000), lutropin (a glycoprotein, Mr = 23 000), prolactin (Mr = 23 500), relaxin (Mr = 12 000) and erythropoetin (a glycoprotein, Mr = 34 000). Reading the list as a whole, there is a continuum from a nine-residue ring up to 34 000-dalton glycoproteins, with no sharp boundary — parathormone is explicitly placed at the transition.",
    cn: "垂体与胰腺的许多激素是**肽**。催产素(ocytocin)与血管加压素是垂体后叶的激素，二者彼此非常相似——两幅结构图显示出相似到什么程度：二者都是闭成环的九肽，读出来分别是催产素的Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH₂与血管加压素的Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH₂。它们**只**在两个位置上不同，而表10.1却赋予它们完全不同的功能——子宫收缩与哺乳，对比水的潴留。这是本章所能提供的、关于「特异性基于受体」最凝练的例证。教材补充了两条结构注记：**环状**结构由其中的**胱氨酸**（即两个Cys残基之间的二硫桥）所成就；末端氨基酸甘氨酸以**酰胺**形式存在。随后是一串由小到大的分子量。促肾上腺皮质激素ACTH（前叶）：39个氨基酸的肽，Mr=4 500。胰岛素（胰腺激素）：51个氨基酸的肽，Mr=5 750——教材指出该激素的氨基酸序列是有史以来**第一个**被测定的（Sanger 1953）。胰高血糖素（胰腺的第二种激素）：由29个氨基酸残基组成的肽。甲状旁腺素（甲状旁腺）：Mr=8 500，教材说因此已经接近蛋白质了。最重要的**蛋白类**激素包括：生长激素(Mr=21 500)、促甲状腺激素（两个亚基，Mr=10 800与13 000）、促卵泡素（糖蛋白，Mr=34 000）、促黄体素（糖蛋白，Mr=23 000）、催乳素(Mr=23 500)、松弛素(Mr=12 000)与促红细胞生成素（糖蛋白，Mr=34 000）。把这份清单作为整体来读，从九残基的环一直到34 000道尔顿的糖蛋白构成一条连续谱，其间没有明确界线——教材明确把甲状旁腺素放在这一过渡处。"
  },
  points: [
    { cz: "hypofýza a slinivka dělají peptidy", en: "A number of hormones of the hypophysis and of the pancreas are peptides.", cn: "垂体与胰腺的许多激素是肽。" },
    { cz: "oxytocin a vasopresin jsou si velmi podobné", en: "Oxytocin (ocytocin) and vasopressin, hormones of the posterior lobe of the hypophysis, are very similar to one another.", cn: "催产素(ocytocin)与血管加压素是垂体后叶的激素，二者彼此非常相似。" },
    { cz: "obě jsou nonapeptidy, liší se ve dvou pozicích", en: "Both drawn structures are nonapeptides: Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH₂ (oxytocin) versus Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH₂ (vasopressin). They differ at exactly two positions — Ile/Phe and Leu/Lys.", cn: "两幅结构都是九肽：催产素为Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH₂，血管加压素为Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH₂。二者恰好只在两个位置上不同——Ile/Phe与Leu/Lys。" },
    { cz: "dva rozdíly, zcela jiné funkce", en: "Two substitutions, yet Tab. 10.1 gives them entirely different functions: uterine contraction and lactation versus braking of diuresis and water retention. This is the sharpest illustration in the chapter of specificity residing in the receptor rather than in the ligand's bulk structure.", cn: "仅两处取代，表10.1却赋予它们完全不同的功能：子宫收缩与哺乳，对比抑制利尿与水的潴留。这是本章中「特异性存在于受体而非配体的整体结构」最鲜明的例证。" },
    { cz: "cyklus umožňuje cystin", en: "The cyclic structure is made possible by the cystine present — i.e. by the disulfide bridge between the two cysteine residues, which closes the ring.", cn: "环状结构由其中的胱氨酸所成就——即由两个半胱氨酸残基之间的二硫桥闭合成环。" },
    { cz: "koncový glycin je amid", en: "The terminal amino acid glycine is in the form of an AMIDE (Gly-NH₂) — an end-capping that protects the peptide from carboxypeptidases.", cn: "末端氨基酸甘氨酸以**酰胺**形式存在(Gly-NH₂)——这一封端保护该肽免受羧肽酶作用。" },
    { cz: "ACTH: 39 aminokyselin, Mr 4 500", en: "Corticotropin, ACTH, of the anterior lobe of the hypophysis: a peptide composed of 39 amino acids, Mr = 4 500.", cn: "促肾上腺皮质激素ACTH（垂体前叶）：由39个氨基酸组成的肽，Mr=4 500。" },
    { cz: "insulin: 51 aminokyselin, Mr 5 750, Sanger 1953", en: "Insulin, a hormone of the pancreas: a peptide of 51 amino acids, Mr = 5 750. Its amino acid sequence was the very first ever determined (Sanger 1953).", cn: "胰岛素（胰腺激素）：由51个氨基酸组成的肽，Mr=5 750。其氨基酸序列是有史以来第一个被测定的（Sanger 1953）。" },
    { cz: "glukagon: 29 zbytků; parathormon Mr 8 500", en: "Glucagon, the second pancreatic hormone, is a peptide of 29 amino acid residues. Parathormone of the parathyroid glands has Mr = 8 500 and is thus, the book says, already close to proteins — explicitly marking the transition point of the class.", cn: "胰高血糖素（胰腺的第二种激素）是由29个氨基酸残基组成的肽。甲状旁腺素（甲状旁腺）的Mr=8 500，教材说它因此已接近蛋白质——明确标出了该类别的过渡点。" },
    { cz: "proteinové hormony a jejich Mr", en: "The most important protein hormones: somatotropin (Mr = 21 500), thyreotropin (two subunits, Mr = 10 800 and 13 000), folitropin (glycoprotein, Mr = 34 000), lutropin (glycoprotein, Mr = 23 000), prolactin (Mr = 23 500), relaxin (Mr = 12 000), erythropoetin (glycoprotein, Mr = 34 000).", cn: "最重要的蛋白类激素：生长激素(Mr=21 500)、促甲状腺激素（两个亚基，Mr=10 800与13 000）、促卵泡素（糖蛋白，Mr=34 000）、促黄体素（糖蛋白，Mr=23 000）、催乳素(Mr=23 500)、松弛素(Mr=12 000)、促红细胞生成素（糖蛋白，Mr=34 000）。" },
    { cz: "kontinuum bez ostré hranice", en: "The class is a continuum from a nine-residue ring up to 34 000-dalton glycoproteins, with no sharp boundary between 'peptide' and 'protein' hormone; parathormone is where the book explicitly places the transition.", cn: "该类别是一条从九残基的环延伸到34 000道尔顿糖蛋白的连续谱，「肽类」与「蛋白类」激素之间并无明确界线；教材明确把过渡点放在甲状旁腺素处。" }
  ],
  terms: [
    { cz: "nonapeptid", en: "nonapeptide", cn: "九肽", def_en: "A peptide of nine amino acid residues; oxytocin and vasopressin are both nonapeptides differing at only two positions.", def_cn: "由九个氨基酸残基组成的肽；催产素与血管加压素都是九肽，仅在两个位置上不同。" },
    { cz: "cystin", en: "cystine", cn: "胱氨酸", def_en: "Two cysteine residues joined by a disulfide bridge; what closes the oxytocin and vasopressin rings.", def_cn: "由二硫桥连接的两个半胱氨酸残基；正是它闭合了催产素与血管加压素的环。" },
    { cz: "glykoprotein", en: "glycoprotein", cn: "糖蛋白", def_en: "A protein bearing carbohydrate; folitropin, lutropin and erythropoetin are named as glycoprotein hormones.", def_cn: "带有糖链的蛋白；促卵泡素、促黄体素与促红细胞生成素被列为糖蛋白激素。" },
    { cz: "relativní molekulová hmotnost (Mr)", en: "relative molecular mass (Mr)", cn: "相对分子质量(Mr)", def_en: "The size measure the book uses throughout this subsection to order the class, from ACTH at 4 500 to the 34 000 glycoproteins.", def_cn: "教材在本小节全程用来给该类别排序的大小度量，从ACTH的4 500到34 000的糖蛋白。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How do oxytocin and vasopressin differ structurally, and why is that instructive?",
      q_cn: "催产素与血管加压素在结构上有何不同？这为何具有启发性？",
      options: [
        "They differ by a single disulfide bridge; this shows disulfides determine function",
        "They are both nonapeptides differing at only two positions, yet have entirely different functions — showing specificity lies in the receptor",
        "Vasopressin is twice the size of oxytocin; size determines the target tissue",
        "They differ only in their glycosylation"
      ],
      answer: 1,
      why_en: "Both are nine-residue rings closed by a cystine disulfide, and their sequences differ at exactly two positions. Despite that, Tab. 10.1 assigns them completely different actions. The lesson is the one §10.3 stated earlier: specificity resides in which cells carry which receptor.",
      why_cn: "二者都是由胱氨酸二硫键闭合的九残基环，序列恰好只在两个位置上不同。尽管如此，表10.1仍赋予它们完全不同的作用。其中的教益正是§10.3早先所述：特异性在于哪些细胞携带哪种受体。"
    },
    {
      type: "short",
      q_en: "How many amino acids do ACTH, insulin and glucagon contain, and what is notable about insulin's sequence?",
      q_cn: "ACTH、胰岛素与胰高血糖素各含多少个氨基酸？胰岛素的序列有何值得一提之处？",
      accept: ["39", "51", "29", "first", "Sanger", "1953"],
      answer_en: "ACTH 39 amino acids (Mr 4 500), insulin 51 (Mr 5 750), glucagon 29 residues. Insulin's amino acid sequence was the very first ever determined (Sanger 1953).",
      answer_cn: "ACTH为39个氨基酸(Mr 4 500)，胰岛素为51个(Mr 5 750)，胰高血糖素为29个残基。胰岛素的氨基酸序列是有史以来第一个被测定的（Sanger 1953）。"
    }
  ],
  oral: {
    q_en: "Present the peptide and protein hormones by size, and draw out what the smallest ones teach.",
    q_cn: "请按大小呈现肽类与蛋白类激素，并说明最小的那些能给我们什么启示。",
    model_en: "The class is a continuum, so I'd go up by size. At the bottom, oxytocin and vasopressin from the posterior pituitary: both nonapeptides, both closed into a ring by a cystine disulfide bridge, both ending in a glycine amide. And their sequences differ at exactly two positions — isoleucine versus phenylalanine, and leucine versus lysine. Two substitutions out of nine, and yet one contracts the uterus and drives lactation while the other retains water and brakes diuresis. That is the single best illustration in the chapter of the point made earlier: specificity does not live in the hormone, it lives in which cells carry which receptor. Moving up: ACTH is 39 amino acids, molecular mass forty-five hundred; insulin is 51, at five thousand seven hundred and fifty, and it deserves a mention because its sequence was the first amino acid sequence ever determined, by Sanger in nineteen fifty-three; glucagon is 29 residues. Parathormone at eighty-five hundred the book says is already close to being a protein — that is where it puts the transition. Then the proteins proper: somatotropin at twenty-one and a half thousand, thyreotropin as two subunits of ten thousand eight hundred and thirteen thousand, prolactin at twenty-three and a half thousand, relaxin at twelve thousand, and three glycoproteins — folitropin and erythropoetin at thirty-four thousand, lutropin at twenty-three thousand.",
    checklist: [
      "Presented the class as a size continuum with no sharp peptide/protein boundary",
      "Gave both nonapeptide sequences or at least the fact that they differ at two positions",
      "Named the cystine disulfide as closing the ring and the C-terminal glycine amide",
      "Drew the receptor-specificity lesson from the oxytocin/vasopressin comparison",
      "Gave residue counts for ACTH, insulin and glucagon",
      "Mentioned Sanger 1953 and the first-ever sequence",
      "Placed parathormone at the transition and gave several protein-hormone Mr values including the glycoproteins"
    ]
  }
},

{
  id: "10-26",
  chapter: 10,
  section: "10.3",
  czTitle: "4. Ikosanoidy — od arachidonátu k prostaglandinům a leukotrienům",
  enTitle: "4. Icosanoids — from arachidonate to prostaglandins and leukotrienes",
  cnTitle: "4. 二十烷酸类——从花生四烯酸到前列腺素与白三烯",
  pages: [228],
  coverage: "full",
  coverageNote: "The closing subsection '4. Ikosanoidy' on p.228, with its branch diagram (a) and its four structures (b), read in full. The branch diagram was read as drawn: arachidonate at the centre with one arrow UP to leukotrieny and a two-way split DOWN to prostaglandiny and tromboxany. The four named structures in panel (b) are leukotrien B4, prostaglandin A2, prostacyklin I2 and tromboxan B2. This is the last content of chapter 10 and of the book's main text; the pages that follow are the literature list, outside the chapter's page range.",
  cnNote: { topic: null, title: "激素 Hormones (笔记 p.183, unnumbered appendix topic — strong title match per the HANDOFF §11 map, not yet read). Eicosanoid chemistry itself is covered by 三 脂质 (笔记 pp.11-16), which WAS read at topic-overview level in 2026-08-05", status: "partial" },
  summary: {
    en: "The icosanoid hormones ARISE FROM ARACHIDONATE, and the main representatives are leukotrienes, prostaglandins, prostacyclins and thromboxanes. Panel (a) of the closing figure draws exactly this: arachidonate sits in the middle as the common precursor, with one arrow leading up to the leukotrienes and a two-way split leading down to the prostaglandins and thromboxanes. So a single twenty-carbon fatty acid gives rise to the whole class by two divergent routes — which is the structural reason the class is defined by carbon count rather than by function, and why Tab. 10.1 lumps all four families into one undivided row with no organ given. Panel (b) gives four representative structures: leukotriene B₄, prostaglandin A₂, prostacyclin I₂ and thromboxane B₂. Looking at them, the difference between the branches is visible: leukotriene B₄ retains the open chain of the parent fatty acid with its conjugated double bonds and added hydroxyls, whereas prostaglandin A₂ has closed a five-membered carbocycle, prostacyclin I₂ has that same cyclopentane fused to an additional oxygen-containing ring, and thromboxane B₂ has an oxygen-containing six-membered ring instead. The class thus splits cleanly into the linear leukotrienes on the one hand and the ring-bearing prostanoids on the other. Tab. 10.1 assigns them, collectively, the regulation of blood flow, of ion transport, and the modulation of synaptic transmission. Note the connection back to §10.3's own signalling chemistry: arachidonate is what the phosphoinositide figure (node 10-19) labelled as the usual fatty acid at one position of phosphatidylinositol, so the membrane lipid that carries the phosphoinositide signal is also the reservoir from which this entire hormone class is cut.",
    cn: "二十烷酸类激素**由花生四烯酸生成**，主要代表是白三烯、前列腺素、前列环素与血栓素。收尾图的(a)幅所画正是这一点：花生四烯酸居中作为共同前体，一支箭头向上通往白三烯，一个两向分叉向下通往前列腺素与血栓素。因此一种二十碳脂肪酸经两条发散路线产生了整个类别——这正是该类别以碳数而非以功能来定义的结构性原因，也是表10.1把这四个家族并作一行、不加细分、且不给出器官的原因。(b)幅给出四个代表结构：白三烯B₄、前列腺素A₂、前列环素I₂与血栓素B₂。看这些结构，两条分支的差异一目了然：白三烯B₄保留了母体脂肪酸的开链，带有共轭双键并增加了羟基；而前列腺素A₂已闭合成一个五元碳环，前列环素I₂在同一个环戊烷上再并合一个含氧环，血栓素B₂则代之以一个含氧的六元环。因此该类别干净地一分为二：一边是线性的白三烯，另一边是带环的前列腺烷类。表10.1把它们统一归为：调节血流、离子转运，以及调制突触传递。请注意回连到§10.3自身信号化学的一环：花生四烯酸正是磷酸肌醇那幅图（节点10-19）中标为磷脂酰肌醇某一位置上「通常」的那种脂肪酸，因此承载磷酸肌醇信号的那种膜脂，也正是整个这一激素类别被切取出来的储库。"
  },
  points: [
    { cz: "vznikají z arachidonátu", en: "Icosanoid hormones arise from arachidonate, and the main representatives are leukotrienes, prostaglandins, prostacyclins and thromboxanes.", cn: "二十烷酸类激素由花生四烯酸生成，主要代表是白三烯、前列腺素、前列环素与血栓素。" },
    { cz: "schéma (a): jeden prekurzor, dvě větve", en: "Panel (a) draws arachidonate as the common precursor with one arrow up to the leukotrienes and a two-way split down to the prostaglandins and thromboxanes. One fatty acid, two divergent routes.", cn: "(a)幅把花生四烯酸画作共同前体，一支箭头向上通往白三烯，一个两向分叉向下通往前列腺素与血栓素。一种脂肪酸，两条发散路线。" },
    { cz: "proto se třída definuje počtem uhlíků", en: "This shared origin is the structural reason the class is defined by carbon count — 20, from Greek 'eikosi' — rather than by function, and why Tab. 10.1 gives all four families a single undivided row with no organ specified.", cn: "这一共同来源正是该类别以碳数（20，源自希腊语「eikosi」）而非以功能来定义的结构性原因，也是表10.1把四个家族并作一行、不加细分、且不指明器官的原因。" },
    { cz: "čtyři struktury v (b)", en: "Panel (b) gives four representative structures: leukotriene B₄, prostaglandin A₂, prostacyclin I₂ and thromboxane B₂.", cn: "(b)幅给出四个代表结构：白三烯B₄、前列腺素A₂、前列环素I₂与血栓素B₂。" },
    { cz: "leukotrieny zůstávají lineární", en: "Leukotriene B₄ retains the OPEN chain of the parent fatty acid, with conjugated double bonds and added hydroxyl groups. The leukotriene branch does not cyclise.", cn: "白三烯B₄保留母体脂肪酸的**开**链，带共轭双键并增加了羟基。白三烯这一支不成环。" },
    { cz: "prostanoidy nesou kruh", en: "The other branch cyclises: prostaglandin A₂ has closed a five-membered carbocycle; prostacyclin I₂ has that cyclopentane fused to an additional oxygen-containing ring; thromboxane B₂ carries an oxygen-containing six-membered ring instead.", cn: "另一支则成环：前列腺素A₂闭合成一个五元碳环；前列环素I₂在该环戊烷上再并合一个含氧环；血栓素B₂则代之以一个含氧的六元环。" },
    { cz: "dělení: lineární vs kruhové", en: "The class therefore splits cleanly on structure: linear leukotrienes on one side, ring-bearing prostanoids (prostaglandins, prostacyclins, thromboxanes) on the other.", cn: "因此该类别在结构上干净地一分为二：一边是线性的白三烯，另一边是带环的前列腺烷类（前列腺素、前列环素、血栓素）。" },
    { cz: "funkce podle tab. 10.1", en: "Tab. 10.1 assigns the whole class, collectively, the regulation of blood flow, the regulation of ion transport, and the modulation of synaptic transmission.", cn: "表10.1把整个类别统一归为：调节血流、调节离子转运，以及调制突触传递。" },
    { cz: "spojení s fosfoinositidovou kaskádou", en: "Note the link back within §10.3: the phosphoinositide figure (node 10-19) labelled arachidonate as the usual fatty acid at one position of phosphatidylinositol. The membrane lipid carrying the phosphoinositide signal is therefore also the reservoir from which this whole hormone class is cut.", cn: "请注意§10.3内部的回连：磷酸肌醇那幅图（节点10-19）把花生四烯酸标为磷脂酰肌醇某一位置上「通常」的脂肪酸。因此承载磷酸肌醇信号的膜脂，也正是整个这一激素类别被切取出来的储库。" }
  ],
  terms: [
    { cz: "arachidonát", en: "arachidonate", cn: "花生四烯酸", def_en: "The 20-carbon polyunsaturated fatty acid from which all icosanoids arise; also the fatty acid usually found at one position of phosphatidylinositol (node 10-19).", def_cn: "所有二十烷酸类由之生成的20碳多不饱和脂肪酸；也是磷脂酰肌醇某一位置上通常存在的那种脂肪酸（节点10-19）。" },
    { cz: "leukotrien", en: "leukotriene", cn: "白三烯", def_en: "The non-cyclised branch of the icosanoids, retaining the open fatty acid chain; leukotriene B₄ is the book's example.", def_cn: "二十烷酸类中不成环的那一支，保留开链脂肪酸；教材举的例子是白三烯B₄。" },
    { cz: "prostaglandin", en: "prostaglandin", cn: "前列腺素", def_en: "An icosanoid bearing a five-membered carbocycle; prostaglandin A₂ is the structure given.", def_cn: "带五元碳环的二十烷酸类；所给结构为前列腺素A₂。" },
    { cz: "prostacyklin", en: "prostacyclin", cn: "前列环素", def_en: "An icosanoid with the cyclopentane ring fused to an additional oxygen-containing ring; prostacyclin I₂ is the structure given.", def_cn: "环戊烷环再并合一个含氧环的二十烷酸类；所给结构为前列环素I₂。" },
    { cz: "tromboxan", en: "thromboxane", cn: "血栓素", def_en: "An icosanoid carrying an oxygen-containing six-membered ring; thromboxane B₂ is the structure given.", def_cn: "带含氧六元环的二十烷酸类；所给结构为血栓素B₂。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structurally separates the leukotrienes from the other three icosanoid families?",
      q_cn: "从结构上看，白三烯与其他三个二十烷酸家族的区别何在？",
      options: [
        "Leukotrienes contain 20 carbons whereas the others contain 18",
        "Leukotrienes retain the open fatty acid chain, whereas prostaglandins, prostacyclins and thromboxanes all bear a ring",
        "Leukotrienes are derived from stearate rather than arachidonate",
        "Leukotrienes are peptides whereas the others are lipids"
      ],
      answer: 1,
      why_en: "The branch diagram sends arachidonate one way to the leukotrienes and the other way to the prostaglandins and thromboxanes, and the drawn structures show why: leukotriene B₄ is an open chain with conjugated double bonds and hydroxyls, whereas the prostanoids have cyclised. All four families contain 20 carbons and all come from arachidonate.",
      why_cn: "分支图把花生四烯酸一路引向白三烯、另一路引向前列腺素与血栓素，而所画结构显示了原因：白三烯B₄是带共轭双键与羟基的开链，而前列腺烷类已经成环。四个家族都含20个碳，也都来自花生四烯酸。"
    },
    {
      type: "short",
      q_en: "Name the four icosanoid families, their common precursor, and the functions Tab. 10.1 assigns them.",
      q_cn: "说出二十烷酸类的四个家族、它们的共同前体，以及表10.1赋予它们的功能。",
      accept: ["leukotriene", "prostaglandin", "prostacyclin", "thromboxane", "arachidonate", "blood flow", "ion transport", "synaptic"],
      answer_en: "Leukotrienes, prostaglandins, prostacyclins and thromboxanes, all arising from arachidonate. Tab. 10.1 gives them, collectively, regulation of blood flow, regulation of ion transport, and modulation of synaptic transmission.",
      answer_cn: "白三烯、前列腺素、前列环素与血栓素，全部由花生四烯酸生成。表10.1把它们统一归为：调节血流、调节离子转运，以及调制突触传递。"
    }
  ],
  oral: {
    q_en: "Describe the icosanoids and explain why they form a single class.",
    q_cn: "请描述二十烷酸类，并解释它们为何构成单一类别。",
    model_en: "They form a class because they all come from one precursor and all have twenty carbons — which is where the name comes from, 'eikosi' being Greek for twenty. The precursor is arachidonate, and the figure draws it in the middle with two routes leading out: one upward to the leukotrienes, and one downward that splits again into the prostaglandins and the thromboxanes, with the prostacyclins alongside. Structurally the split is easy to see. The leukotrienes stay linear — leukotriene B-four is still recognisably an open fatty acid chain, with conjugated double bonds and a couple of hydroxyls added. The other branch cyclises: prostaglandin A-two has closed a five-membered carbon ring, prostacyclin I-two has that same ring fused to a second, oxygen-containing one, and thromboxane B-two carries an oxygen-containing six-membered ring instead. So: linear leukotrienes on one side, ring-bearing prostanoids on the other. Functionally the table treats them as one undivided row, with no organ given — because unlike every other hormone class here they are not the product of a gland; they are made locally, essentially anywhere. Their listed actions are regulation of blood flow, regulation of ion transport, and modulation of synaptic transmission. And there is a neat internal link: arachidonate is exactly the fatty acid the phosphoinositide figure said usually occupies one position of phosphatidylinositol. So the same membrane lipid that carries that signalling cascade is also the reservoir this whole hormone class is cut from.",
    checklist: [
      "Gave arachidonate as the common precursor and the 20-carbon/eikosi naming",
      "Named all four families",
      "Described the branch diagram with the leukotriene arm separate from the prostanoid arm",
      "Contrasted the open-chain leukotriene with the ring systems of prostaglandin, prostacyclin and thromboxane",
      "Explained the blank organ column as reflecting local rather than glandular production",
      "Gave the three functions from Tab. 10.1",
      "Connected arachidonate back to the phosphoinositide figure"
    ]
  }
}

);
