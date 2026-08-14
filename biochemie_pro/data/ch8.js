/* ============================================================
   Chapter 8 -- Lipidy
   Lipids / 脂质
   Source: Biochemie - Zakladni kurz, pp. 176-201
   All 26 pages drafted (39 nodes across 4 drafting agents) as of 2026-08-06.
   One page-boundary gap patched by hand after merge: p.193's HMG-CoA
   reductase / Phase-C terpenoid modification / squalene->lanosterol->
   cholesterol paragraph fell between the biosynthesis-drafting agent
   (stopped at squalene) and the breakdown-drafting agent (started at the
   8.4 heading) -- see node 8-3-9.
   Independent verification pass (re-reading scans against final content,
   HANDOFF.md sec.8) has NOT been run yet.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "8-1",
  book: "cz",
  topicKey: "storage-lipids",
  chapter: 8,
  section: "8.1",
  czTitle: "Definice a klasifikace",
  enTitle: "Definition and classification",
  cnTitle: "定义与分类",
  pages: [176],
  coverage: "full",
  coverageNote: "Page 176 read in full: the etymology of 'lipid' (from Greek lipos = fat/tuk), the book's own general definition (natural nonpolar compounds, nearly or completely insoluble in water but soluble in other nonpolar/organic solvents such as chloroform, ethanol, ether) and its explicit disclaimer that no more exact definition is possible given lipids' structural and functional diversity; the five bulleted main biological functions; the three-way structural classification (jednoduché/složené/odvozené lipidy) referencing Tab. 8.1; the one-paragraph description of what each of the three groups contains (simple = esters of fatty acids + alcohols; complex = the same plus an additional component, split into 5 further subgroups; derived = everything else, often with a fatty-acid-derived carbon skeleton); and the complete Tab. 8.1 (all 11 rows, both columns) read directly, including a zoomed re-check of row 4. FLAG: Tab. 8.1's row 4 (Fosfoacylglyceroly) prints the organic-compound name 'etnanolamin' — verified by a zoomed re-read, this is exactly what the book prints — which is almost certainly a typesetting error for 'ethanolamin' (ethanolamine); reproduced here as printed and flagged rather than silently corrected, per this project's honesty rule for book-internal errors.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Chapter 8 opens by defining a lipid etymologically (from Greek lipos, 'fat') and functionally: the term covers, in general, all natural nonpolar compounds that are nearly or completely insoluble in water but soluble in other nonpolar (so-called organic) solvents such as chloroform, ethanol, or ether. Because of lipids' structural and functional diversity, the book states explicitly that no more exact definition of this varied set of biologically active substances is possible. It lists five main biological functions: lipids are (1) a component of biological membranes, (2) the main storage form of carbon and energy, (3) precursors of other important substances (vitamins, hormones, regulatory substances), (4) an insulating barrier against thermal, electrical, or other physical shock, and (5) a protective coat for organisms or cells against infection or dehydration. Structurally, the book divides lipids into three main groups (Tab. 8.1): simple lipids (jednoduché lipidy) — esters of fatty acids and alcohols, covering acylglycerols and waxes; complex lipids (složené lipidy) — which contain an additional component beyond fatty acid + alcohol, split into five further subgroups (glycoacylglycerols, phosphoacylglycerols, sphingomyelins, cerebrosides, gangliosides); and derived lipids (odvozené lipidy) — everything of a lipid nature that doesn't fit the first two groups, often with a carbon skeleton derived from fatty acids (prostaglandins, steroids, carotenoids, lipophilic vitamins). Tab. 8.1 gives the hydrolysis products for each of these 11 classes.",
    cn: "第8章开篇从词源（希腊语lipos，意为'脂肪'）和功能两个角度定义脂质：该术语泛指所有几乎或完全不溶于水、但溶于其他非极性（所谓有机）溶剂（如氯仿、乙醇、乙醚）的天然非极性化合物。由于脂质在结构和功能上的多样性，教材明确指出无法对这一庞杂的生物活性物质给出更精确的定义。教材列出了五项主要生物学功能：脂质(1)是生物膜的组成部分，(2)是碳与能量的主要储存形式，(3)是其他重要物质（维生素、激素、调节物质）的前体，(4)是抵御热、电或其他物理冲击的隔离屏障，(5)是生物体或细胞抵御感染或脱水的保护层。从结构上看，教材将脂质分为三大类（表8.1）：简单脂质（脂肪酸与醇的酯，包括酰基甘油和蜡）；复合脂质（在脂肪酸+醇之外还含有其他组分，进一步分为五个亚类：糖酰基甘油、磷酸酰基甘油、鞘磷脂、脑苷脂、神经节苷脂）；以及衍生脂质（凡不属于前两类、具有脂质性质的化合物，其碳骨架常来源于脂肪酸，包括前列腺素、类固醇、类胡萝卜素、脂溶性维生素）。表8.1列出了这11类物质各自的水解产物。"
  },
  mustKnow: { en: "The book says outright that no exact definition of this group is possible: lipids are held together by a physical property, not a structure — nonpolar, all but insoluble in water, soluble in organic solvents. What organises them instead is Tab. 8.1's three structural groups: simple (fatty acid + alcohol), complex (something further as well), derived.", cn: "教材直接讲明：这类物质给不出精确定义。把它们归为 lipid 的不是结构，而是一个物理性质——非极性、几乎不溶于水、溶于有机溶剂。真正起分类作用的是 Tab. 8.1 的三大结构类：simple（脂肪酸 + 醇）、complex（在此之外还多一个组分）、derived。" },
  points: [
    { cz: "lipid — z řeckého lipos = tuk", en: "The term 'lipid' derives from the Greek word lipos, meaning fat (tuk), and is used generally for all natural nonpolar compounds that are nearly or completely insoluble in water but soluble in other nonpolar ('organic') solvents such as chloroform, ethanol, or ether.", cn: "「脂质」一词源于希腊语lipos（意为脂肪），泛指所有几乎或完全不溶于水、但溶于其他非极性（'有机'）溶剂（如氯仿、乙醇、乙醚）的天然非极性化合物。" },
    { cz: "žádná exaktní definice — strukturní/funkční rozmanitost", en: "Because of lipids' structural and functional diversity, the book states explicitly that a more exact definition of this varied set of biologically active substances is not possible.", cn: "由于脂质在结构和功能上的多样性，教材明确指出无法对这一庞杂的生物活性物质给出更精确的定义。" },
    { cz: "funkce 1: součást biologických membrán", en: "Main biological function (1): lipids are a component of biological membranes.", cn: "主要生物学功能(1)：脂质是生物膜的组成部分。" },
    { cz: "funkce 2: hlavní zásobní forma uhlíku a energie", en: "Main biological function (2): lipids are the main storage form of carbon and energy.", cn: "主要生物学功能(2)：脂质是碳和能量的主要储存形式。" },
    { cz: "funkce 3: prekurzory vitaminů, hormonů, regulačních látek", en: "Main biological function (3): lipids are precursors of other important substances — vitamins, hormones, regulatory substances.", cn: "主要生物学功能(3)：脂质是其他重要物质（维生素、激素、调节物质）的前体。" },
    { cz: "funkce 4: izolační bariéra (teplo/elektřina/šok)", en: "Main biological function (4): lipids form an insulating barrier against thermal, electrical, or other physical shock.", cn: "主要生物学功能(4)：脂质构成抵御热、电或其他物理冲击的隔离屏障。" },
    { cz: "funkce 5: ochranný obal proti infekci/dehydrataci", en: "Main biological function (5): lipids form a protective coat for organisms or cells against infection or dehydration.", cn: "主要生物学功能(5)：脂质构成生物体或细胞抵御感染或脱水的保护层。" },
    { cz: "3 strukturní skupiny: jednoduché/složené/odvozené (tab. 8.1)", en: "Structurally, the book divides lipids into three main groups, per Tab. 8.1: simple lipids (jednoduché lipidy), complex lipids (složené lipidy), and derived lipids (odvozené lipidy).", cn: "从结构上看，教材（表8.1）将脂质分为三大类：简单脂质、复合脂质和衍生脂质。" },
    { cz: "jednoduché = estery MK+alkoholů; složené = +další složka → 5 skupin; odvozené = zbytek", en: "Simple lipids are esters of fatty acids and alcohols. Complex lipids contain an additional component beyond fatty acid + alcohol and are split into 5 further subgroups: glycoacylglycerols, phosphoacylglycerols, sphingomyelins, cerebrosides, and gangliosides. Derived lipids include all other lipid-natured compounds that cannot be classified into the first two groups; their carbon skeleton is often derived from fatty acids.", cn: "简单脂质是脂肪酸与醇形成的酯。复合脂质在脂肪酸+醇之外还含有其他组分，进一步分为5个亚类：糖酰基甘油、磷酸酰基甘油、鞘磷脂、脑苷脂和神经节苷脂。衍生脂质包括所有无法归入前两类、但具有脂质性质的化合物；其碳骨架常来源于脂肪酸。" },
    { cz: "Tab. 8.1 — 11 tříd a produkty hydrolýzy", en: "Tab. 8.1 lists all 11 classes with their hydrolysis products. JEDNODUCHÉ LIPIDY (simple lipids): (1) Acylglyceroly → glycerol + fatty acids; (2) Vosky (waxes) → alcohol (e.g. cetyl- and myricyl alcohol) + fatty acids (long chains). SLOŽENÉ LIPIDY (complex lipids): (3) Glykoacylglyceroly → carbohydrate + glycerol + fatty acids; (4) Fosfoacylglyceroly → glycerol + fatty acids + HPO₄²⁻ + an organic compound: choline, ethanolamine, serine, inositol, glycerol, etc.; (5) Sfingomyeliny → sphingosine + fatty acids + HPO₄²⁻ + choline; (6) Cerebrosidy → sphingosine + fatty acids + carbohydrates; (7) Gangliosidy → sphingosine + fatty acids + carbohydrates + sialic acid. ODVOZENÉ LIPIDY (derived lipids, hydrolysis-product column left blank in the book): (8) Prostaglandiny; (9) Steroidy; (10) Karotenoidy; (11) Lipofilní vitaminy.", cn: "表8.1列出全部11类物质及其水解产物。简单脂质：(1)酰基甘油→甘油+脂肪酸；(2)蜡→醇（如鲸蜡醇、蜂花醇）+脂肪酸（长链）。复合脂质：(3)糖酰基甘油→糖+甘油+脂肪酸；(4)磷酸酰基甘油→甘油+脂肪酸+HPO₄²⁻+有机化合物（胆碱、乙醇胺、丝氨酸、肌醇、甘油等）；(5)鞘磷脂→鞘氨醇+脂肪酸+HPO₄²⁻+胆碱；(6)脑苷脂→鞘氨醇+脂肪酸+糖；(7)神经节苷脂→鞘氨醇+脂肪酸+糖+唾液酸。衍生脂质（教材水解产物一栏留空）：(8)前列腺素；(9)类固醇；(10)类胡萝卜素；(11)脂溶性维生素。" },
    { cz: "chyba tisku: 'etnanolamin' místo 'ethanolamin'", en: "FLAGGED: Tab. 8.1's row 4 prints the organic-compound name as 'etnanolamin' — confirmed by a zoomed re-read of the scan, this is exactly what the book shows. This is almost certainly a typesetting error for 'ethanolamin' (ethanolamine), one of the standard head-groups of phosphoacylglycerols (phosphatidylethanolamine). Reproduced here as printed rather than silently corrected.", cn: "标记：表8.1第4行将该有机化合物印为'etnanolamin'——经放大核对确系原文如此。这几乎可以肯定是'ethanolamin'（乙醇胺）的排印错误，乙醇胺是磷酸酰基甘油（磷脂酰乙醇胺）的标准头基之一。此处按原文照录并加以标注，而非默默更正。" }
  ],
  terms: [
    { cz: "lipid", en: "lipid", cn: "脂质", def_en: "A natural nonpolar compound, nearly or completely insoluble in water but soluble in nonpolar/organic solvents (chloroform, ethanol, ether); too structurally/functionally diverse for a more exact definition, per this book.", def_cn: "一种天然非极性化合物，几乎或完全不溶于水，但溶于非极性/有机溶剂（氯仿、乙醇、乙醚）；据本教材所述，因结构和功能过于多样而无法给出更精确的定义。" },
    { cz: "jednoduché lipidy", en: "simple lipids", cn: "简单脂质", def_en: "Esters of fatty acids and alcohols only; covers acylglycerols and waxes.", def_cn: "仅由脂肪酸与醇形成的酯；包括酰基甘油和蜡。" },
    { cz: "složené lipidy", en: "complex lipids", cn: "复合脂质", def_en: "Lipids containing an additional component beyond fatty acid + alcohol; split into glycoacylglycerols, phosphoacylglycerols, sphingomyelins, cerebrosides, and gangliosides.", def_cn: "在脂肪酸+醇之外还含有其他组分的脂质；分为糖酰基甘油、磷酸酰基甘油、鞘磷脂、脑苷脂和神经节苷脂。" },
    { cz: "odvozené lipidy", en: "derived lipids", cn: "衍生脂质", def_en: "All other lipid-natured compounds not classifiable as simple or complex lipids; carbon skeleton often derived from fatty acids. Includes prostaglandins, steroids, carotenoids, lipophilic vitamins.", def_cn: "所有不能归入简单或复合脂质、但具有脂质性质的化合物；碳骨架常来源于脂肪酸。包括前列腺素、类固醇、类胡萝卜素、脂溶性维生素。" },
    { cz: "acylglycerol", en: "acylglycerol", cn: "酰基甘油", def_en: "A simple-lipid class; ester of glycerol and fatty acid(s). Hydrolysis yields glycerol + fatty acids.", def_cn: "简单脂质的一类；甘油与脂肪酸形成的酯。水解产物为甘油+脂肪酸。" },
    { cz: "vosk", en: "wax", cn: "蜡", def_en: "A simple-lipid class; ester of a long-chain alcohol and a fatty acid. Hydrolysis yields alcohol + fatty acids.", def_cn: "简单脂质的一类；长链醇与脂肪酸形成的酯。水解产物为醇+脂肪酸。" },
    { cz: "glykoacylglycerol", en: "glycoacylglycerol", cn: "糖酰基甘油", def_en: "A complex-lipid class; hydrolysis yields carbohydrate + glycerol + fatty acids.", def_cn: "复合脂质的一类；水解产物为糖+甘油+脂肪酸。" },
    { cz: "fosfoacylglycerol", en: "phosphoacylglycerol", cn: "磷酸酰基甘油", def_en: "A complex-lipid class; hydrolysis yields glycerol + fatty acids + phosphate (HPO₄²⁻) + an organic head group such as choline, ethanolamine, serine, or inositol.", def_cn: "复合脂质的一类；水解产物为甘油+脂肪酸+磷酸（HPO₄²⁻）+一个有机头基，如胆碱、乙醇胺、丝氨酸或肌醇。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's opening definition, what single physicochemical property is used to identify a compound as a lipid, given that lipids are too structurally/functionally diverse for an exact definition?",
      q_cn: "根据教材开篇的定义，鉴于脂质在结构和功能上过于多样而无法给出精确定义，教材用哪一项理化性质来判断某化合物是否属于脂质？",
      options: ["Being nonpolar and near-insoluble in water but soluble in nonpolar solvents (chloroform, ethanol, ether)", "Containing at least one fatty acid esterified to an alcohol, which is what Tab. 8.1 lists for the simple lipids", "Carrying the steran four-fused-ring skeleton shared by the steroids of Tab. 8.1's derived group", "Having a carbon skeleton derived from fatty acids, as the book says of the derived lipids"],
      answer: 0,
      optionRefs: { 1: "8-2-2-1", 2: "8-2-4-3", 3: "L-10-1-1" },
      optionNotes: {
        1: { en: "True of the simple lipids only: acylglycerols and waxes are esters of a fatty acid with an alcohol. Tab. 8.1's derived lipids (steroids, carotenoids, lipophilic vitamins) contain no such ester, so an ester bond cannot be the general test.", cn: "这只对 simple lipids 成立：acylglycerol 和 wax 确实是脂肪酸与醇的酯。但 Tab. 8.1 的 derived lipids（steroid、carotenoid、脂溶性维生素）根本没有这种酯键，所以酯键不能作为通用判据。" },
        2: { en: "The steran skeleton identifies one class inside the derived group, the steroids; the carotenoids and prostaglandins in that same group have no ring system at all.", cn: "steran 骨架只能认出 derived 组里的一类——steroid；同一组的 carotenoid 和 prostaglandin 根本没有环系。" },
        3: { en: "The book says this of the derived lipids only, and only as a tendency ('often'). It is a remark about where that group's carbon comes from, not a property you can test a compound for.", cn: "这句话教材只对 derived lipids 讲，而且只说「常常」如此。它讲的是这一组的碳骨架来源，不是一个可以拿来检验化合物的性质。" }
      },
      why_en: "The book's general definition of a lipid rests on solubility behavior — nonpolar, nearly or completely insoluble in water, but soluble in other nonpolar/organic solvents such as chloroform, ethanol, or ether — precisely because no single structural feature (like an ester bond or a ring system) covers every lipid class in Tab. 8.1.",
      why_cn: "教材对脂质的一般定义依据的是溶解性——非极性、几乎或完全不溶于水，但溶于氯仿、乙醇、乙醚等非极性/有机溶剂——因为没有任何单一结构特征（如酯键或环状骨架）能涵盖表8.1中的所有脂质类别。"
    },
    {
      type: "mcq",
      q_en: "Which of the following correctly matches the structural lipid groups to what distinguishes them, per the book's three-way classification?",
      q_cn: "根据教材的三分类法，下列哪一项正确匹配了脂质结构类别与其区别特征？",
      options: [
        "Simple lipids = esters of fatty acids + alcohols only; complex lipids = the same plus one additional component; derived lipids = everything else, often fatty-acid-derived",
        "Simple lipids = built on sphingosine; complex lipids = built on glycerol; derived lipids = built on the steran skeleton, so the backbone alcohol decides the group",
        "Simple lipids = acylglycerols and waxes; complex lipids = prostaglandins and steroids; derived lipids = the five phosphate- or sugar-bearing subgroups",
        "Simple lipids = the classes whose hydrolysis-product column Tab. 8.1 leaves blank; complex lipids = those yielding glycerol; derived lipids = those yielding sphingosine and sialic acid"
      ],
      answer: 0,
      optionRefs: { 1: "8-2-3-3", 2: "8-2-4-1", 3: "L-10-2-1" },
      optionNotes: {
        1: { en: "Sphingosine is the backbone of three COMPLEX classes (sphingomyelins, cerebrosides, gangliosides), never of a simple lipid; and glycerol carries both simple acylglycerols and complex phosphoacylglycerols, so the backbone alcohol does not set the group.", cn: "sphingosine 是三类 complex lipid（sphingomyelin、cerebroside、ganglioside）的骨架，绝不属于 simple lipid；而 glycerol 既撑着 simple 的 acylglycerol，也撑着 complex 的 phosphoacylglycerol——所以骨架醇并不决定分类。" },
        2: { en: "Only the first third is right. Prostaglandins and steroids are the book's examples of DERIVED lipids, and the five subgroups that carry a sugar or a phosphate are exactly what makes a lipid COMPLEX; the two groups have been swapped.", cn: "只有第一段是对的。Prostaglandin 和 steroid 恰恰是教材举的 derived lipid 例子，而带糖或带磷酸的那五个亚类正是 complex 的定义——这两组被对调了。" },
        3: { en: "Tab. 8.1 leaves the hydrolysis column blank for the DERIVED lipids, not the simple ones; glycerol is released by both simple and complex classes, and sphingosine only by complex ones.", cn: "Tab. 8.1 留空水解产物一栏的是 derived lipids，不是 simple；glycerol 在 simple 和 complex 两类水解时都会出现，而 sphingosine 只出现在 complex 这一边。" }
      },
      why_en: "The book defines simple lipids as esters of fatty acids and alcohols (acylglycerols, waxes), complex lipids as containing an additional component beyond that (splitting into 5 subgroups: glycoacylglycerols, phosphoacylglycerols, sphingomyelins, cerebrosides, gangliosides), and derived lipids as everything else of a lipid nature, often with a fatty-acid-derived carbon skeleton (prostaglandins, steroids, carotenoids, lipophilic vitamins).",
      why_cn: "教材将简单脂质定义为脂肪酸与醇的酯（酰基甘油、蜡），复合脂质在此基础上还含有其他组分（分为5个亚类：糖酰基甘油、磷酸酰基甘油、鞘磷脂、脑苷脂、神经节苷脂），衍生脂质则是其余所有具脂质性质的化合物，其碳骨架常来源于脂肪酸（前列腺素、类固醇、类胡萝卜素、脂溶性维生素）。"
    },
    {
      type: "short",
      q_en: "List the five main biological functions of lipids given at the start of chapter 8, and name the three structural groups from Tab. 8.1.",
      q_cn: "列出第8章开篇给出的脂质五项主要生物学功能，并说出表8.1中的三个结构分类。",
      accept: ["membrane", "storage", "carbon", "energy", "precursor", "vitamin", "hormone", "insulating", "barrier", "protective", "simple", "complex", "derived", "膜", "储存", "前体", "屏障", "保护", "简单", "复合", "衍生"],
      answer_en: "Five functions: (1) component of biological membranes; (2) main storage form of carbon and energy; (3) precursors of vitamins, hormones, and regulatory substances; (4) insulating barrier against thermal/electrical/physical shock; (5) protective coat against infection or dehydration. Three structural groups: simple lipids, complex lipids, derived lipids.",
      answer_cn: "五项功能：(1)生物膜组成部分；(2)碳和能量的主要储存形式；(3)维生素、激素、调节物质的前体；(4)抵御热/电/物理冲击的隔离屏障；(5)抵御感染或脱水的保护层。三个结构分类：简单脂质、复合脂质、衍生脂质。"
    }
  ],
  oral: {
    q_en: "Define what a lipid is per this book's opening section, and explain its classification into simple, complex, and derived lipids using Tab. 8.1.",
    q_cn: "请依据教材第8章开篇的内容定义脂质，并结合表8.1解释脂质分为简单、复合、衍生三大类的依据。",
    model_en: "The book introduces lipids first by name: the term comes from the Greek word lipos, meaning fat, and it's used generally for natural nonpolar compounds that are nearly or completely insoluble in water but dissolve readily in other nonpolar, so-called organic solvents like chloroform, ethanol, or ether. Because lipids are so structurally and functionally diverse, the book is upfront that no tighter definition than that is really possible. It grounds that diversity in five main biological roles: lipids are a component of biological membranes, they're the main storage form of carbon and energy, they act as precursors for other important substances like vitamins, hormones, and regulatory molecules, they form an insulating barrier against thermal, electrical, or other physical shock, and they form a protective coat for organisms or cells against infection or dehydration. Structurally, the book sorts lipids into three main groups, laid out in Table 8.1. Simple lipids are just esters of fatty acids and alcohols — that covers acylglycerols and waxes. Complex lipids contain an additional component on top of that fatty-acid-alcohol core, and the book splits those into five further subgroups: glycoacylglycerols, phosphoacylglycerols, sphingomyelins, cerebrosides, and gangliosides. And derived lipids are essentially everything else of a lipid nature that doesn't fit the first two categories — prostaglandins, steroids, carotenoids, lipophilic vitamins — and their carbon skeleton often actually originates from fatty acids. Table 8.1 also spells out what each of these eleven classes yields on hydrolysis, for example acylglycerols give glycerol plus fatty acids, while phosphoacylglycerols give glycerol, fatty acids, phosphate, and one of several organic head groups like choline, ethanolamine, serine, or inositol.",
    checklist: [
      "Gave the Greek etymology of 'lipid' (lipos = fat) and the solubility-based general definition",
      "Stated that no exact definition is possible given lipids' diversity",
      "Named all five biological functions",
      "Named the three structural groups: simple, complex, derived",
      "Explained what distinguishes each group and named complex lipids' five subgroups",
      "Cited at least two hydrolysis-product examples from Tab. 8.1"
    ]
  }
},

{
  id: "8-2-1-1",
  book: "cz",
  topicKey: "storage-lipids",
  chapter: 8,
  section: "8.2.1",
  czTitle: "Mastné kyseliny — definice, klasifikace, přirozený výskyt (tab. 8.2)",
  enTitle: "Fatty acids — definition, classification, natural occurrence (Tab. 8.2)",
  cnTitle: "脂肪酸——定义、分类、天然分布（表8.2）",
  pages: [177],
  coverage: "full",
  coverageNote: "Page 177 read in full. Note first: the '8.2 Chemické složení a vlastnosti lipidů' heading itself carries no independent text of its own — '8.2.1 Mastné kyseliny' begins immediately below it, so (mirroring the same pattern documented for ch.7's '7.1' heading in HANDOFF.md) section 8.2 functions purely as an umbrella title and its content is folded into this node rather than given an empty node of its own. Verified directly from the scan: the fatty-acid definition/hydrophobicity statement, the name-origin sentence, the chemical definition (polycarbon aliphatic monocarboxylic acids), the three chain-based classification criteria (linear/branched/alicyclic; saturated vs. mono-/di-/polyunsaturated; cis/trans double-bond configuration), the four natural-occurrence bullets, and the complete Tab. 8.2 (all 12 named fatty acids across the 'nasycené' group and the six unsaturated sub-groups, every column: trivial name, C-count:double-bond-count abbreviation, systematic name, Δ position(s), n-/ω- series, and structural formula) — the table was re-read at 1.45x zoom to confirm every number. Note: the table's own Δ and n-(ω) columns are populated here but the book does not explain what these two notations MEAN until the top of the next page (p.178, covered by node 8-2-1-2) — this node reports the raw table values only, without yet defining the notation.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Fatty acids are the basic component of simple and complex lipids (and of some derived lipids too), because it is precisely their pronounced hydrophobicity that gives the whole lipid molecule its hydrophobic character. The name 'mastná kyselina' (fatty acid) comes from their principal source, tuk (fat). Chemically they are polycarbon aliphatic monocarboxylic acids — a fairly broad group classifiable from several angles: by chain shape (linear, branched, or alicyclic), by saturation (saturated = no double bond; unsaturated = mono-, di-, or polyunsaturated depending on double-bond count), and by double-bond configuration (cis or trans). In nature, the most common fatty acids have a linear chain with an even number of carbons ('higher fatty acids', C12-24); unsaturated ones are usually C16-24; when 2+ double bonds are present (polyunsaturated), they are isolated by a CH2 group and sit roughly symmetrically near the middle of the molecule, and are mostly cis. Tab. 8.2 catalogs the main natural fatty acids: five saturated ones (lauric 12:0, myristic 14:0, palmitic 16:0, stearic 18:0, arachidic 20:0) and seven unsaturated/polyunsaturated ones with their double-bond position(s) Δ and series n-(ω): palmitoleic 16:1 Δ9 n-7, oleic 18:1 Δ9 n-9, erucic 22:1 Δ13 n-9, linoleic 18:2 Δ9,12 n-6, α-linolenic 18:3 Δ9,12,15 n-3, γ-linolenic 18:3 Δ6,9,12 n-6, arachidonic 20:4 Δ5,8,11,14 n-6, timnodonic/EPA 20:5 Δ5,8,11,14,17 n-3, and klupanodonic/DHA 22:6 Δ4,7,10,13,16,19 n-3.",
    cn: "脂肪酸是简单脂质和复合脂质（以及部分衍生脂质）的基本组分，正是它们显著的疏水性赋予了整个脂质分子疏水的特性。「脂肪酸」这一名称源自其主要来源——tuk（脂肪）。从化学结构看，脂肪酸是多碳脂肪族一元羧酸——这是一大类物质，可从多个角度分类：按碳链形状（线型、支链或脂环型）、按饱和程度（饱和=链中无双键；不饱和=按双键数目分为单不饱和、二不饱和或多不饱和）、按双键构型（顺式或反式）。自然界中最常见的脂肪酸具有偶数碳原子的线型链（'高级脂肪酸'，C12-24）；不饱和脂肪酸通常为C16-24；当含2个以上双键时（多不饱和），双键被一个CH2基团隔开，大致对称地分布在分子中部，且大多为顺式。表8.2列出了主要天然脂肪酸：五种饱和脂肪酸（月桂酸12:0、肉豆蔻酸14:0、棕榈酸16:0、硬脂酸18:0、花生酸20:0）和七种不饱和/多不饱和脂肪酸及其双键位置Δ和系列n-(ω)：棕榈油酸16:1 Δ9 n-7、油酸18:1 Δ9 n-9、芥酸22:1 Δ13 n-9、亚油酸18:2 Δ9,12 n-6、α-亚麻酸18:3 Δ9,12,15 n-3、γ-亚麻酸18:3 Δ6,9,12 n-6、花生四烯酸20:4 Δ5,8,11,14 n-6、EPA 20:5 Δ5,8,11,14,17 n-3、DHA 22:6 Δ4,7,10,13,16,19 n-3。"
  },
  mustKnow: { en: "Fatty acids are the hydrophobic spine of every lipid — it is their pronounced hydrophobicity that gives the whole lipid molecule its hydrophobic character.", cn: "脂肪酸是每个脂质的疏水脊骨——正是它们显著的疏水性赋予了整个脂质分子疏水的特性。" },
  points: [
    { cz: "8.2 = bez vlastního textu", en: "Section 8.2's own heading ('Chemické složení a vlastnosti lipidů') carries no independent text — the book moves directly into subsection 8.2.1 immediately below it.", cn: "「8.2 脂质的化学组成与性质」这一标题本身没有独立正文——教材紧接着直接进入8.2.1小节。" },
    { cz: "MK = základní složka lipidů (hydrofobicita)", en: "Fatty acids are the basic component of simple and complex lipids (and of some derived lipids too), because it is precisely their pronounced hydrophobicity that is responsible for the overall hydrophobic character of the lipid molecule.", cn: "脂肪酸是简单脂质和复合脂质（以及部分衍生脂质）的基本组分，正是它们显著的疏水性决定了脂质分子整体的疏水特性。" },
    { cz: "mastná kyselina — název z 'tuk/mastný'", en: "The name 'mastná kyselina' (fatty acid) originates from its principal source, tuk (fat) — tučný/mastný means 'fatty'.", cn: "「脂肪酸」（mastná kyselina）这一名称源自其主要来源——tuk（脂肪），tučný/mastný即'含脂肪的'。" },
    { cz: "chemicky: mnohouhlíkaté alifatické monokarboxylové kyseliny", en: "Chemically, fatty acids are polycarbon (many-carbon) aliphatic monocarboxylic acids — a fairly broad group of substances classifiable from several angles based on the character of the carbon chain.", cn: "从化学结构看，脂肪酸是多碳脂肪族一元羧酸——这是一大类物质，可依碳链特征从多个角度分类。" },
    { cz: "klasifikace podle řetězce: lineární/větvené/alicyklické; nasycené/nenasycené (mono-/di-/poly-); cis/trans", en: "Three classification criteria by chain character: (i) linear, branched, or alicyclic; (ii) saturated (no double bond in the chain) or unsaturated (mono-, di-, or polyunsaturated depending on the number of double bonds); (iii) double-bond configuration cis or trans.", cn: "按碳链特征分类的三项标准：(i)线型、支链或脂环型；(ii)饱和（链中无双键）或不饱和（按双键数目分为单不饱和、二不饱和或多不饱和）；(iii)双键构型为顺式或反式。" },
    { cz: "přírodní výskyt: sudý počet C, C12-24 (vyšší MK)", en: "Fatty acids most commonly found in nature have a linear chain with an even number of carbon atoms — the so-called 'higher fatty acids,' with C12-24.", cn: "自然界中最常见的脂肪酸具有偶数碳原子的线型链——即所谓'高级脂肪酸'，碳原子数为C12-24。" },
    { cz: "nenasycené obvykle C16-24; polynenasycené: dvojné vazby izolované CH2, symetricky u středu; většinou cis", en: "Unsaturated fatty acids are usually C16-24. When 2 or more double bonds are present (polyunsaturated fatty acids), the double bonds are isolated by a CH2 group and positioned more or less symmetrically near the middle of the molecule; the double bonds are mostly in the cis configuration.", cn: "不饱和脂肪酸通常为C16-24。当含有2个或以上双键时（多不饱和脂肪酸），双键被一个CH2基团隔开，且大致对称地位于分子中部；双键构型大多为顺式。" },
    { cz: "Tab. 8.2 — nasycené MK", en: "Tab. 8.2, saturated fatty acids: lauric/laurová (12:0, dodecanoic), myristic/myristová (14:0, tetradecanoic), palmitic/palmitová (16:0, hexadecanoic), stearic/stearová (18:0, octadecanoic), arachidic/arašidová (20:0, eicosanoic).", cn: "表8.2，饱和脂肪酸：月桂酸（12:0，十二烷酸）、肉豆蔻酸（14:0，十四烷酸）、棕榈酸（16:0，十六烷酸）、硬脂酸（18:0，十八烷酸）、花生酸（20:0，二十烷酸）。" },
    { cz: "Tab. 8.2 — nenasycené MK (Δ, n-ω)", en: "Tab. 8.2, unsaturated fatty acids, with double-bond position(s) Δ (from the carboxyl end) and series n-(ω) (from the methyl end): palmitoleic/palmitolejová 16:1 Δ9 n-7; oleic/olejová 18:1 Δ9 n-9; erucic/eruková 22:1 Δ13 n-9; linoleic/linolová 18:2 Δ9,12 n-6; α-linolenic/α-linolenová 18:3 Δ9,12,15 n-3; γ-linolenic/γ-linolenová 18:3 Δ6,9,12 n-6; arachidonic/arašidonová 20:4 Δ5,8,11,14 n-6; timnodonic (EPA)/timnodonová 20:5 Δ5,8,11,14,17 n-3; klupanodonic (DHA)/klupadonová 22:6 Δ4,7,10,13,16,19 n-3.", cn: "表8.2，不饱和脂肪酸，双键位置Δ（从羧基端计数）和系列n-(ω)（从甲基端计数）：棕榈油酸16:1 Δ9 n-7；油酸18:1 Δ9 n-9；芥酸22:1 Δ13 n-9；亚油酸18:2 Δ9,12 n-6；α-亚麻酸18:3 Δ9,12,15 n-3；γ-亚麻酸18:3 Δ6,9,12 n-6；花生四烯酸20:4 Δ5,8,11,14 n-6；EPA（timnodonová）20:5 Δ5,8,11,14,17 n-3；DHA（klupadonová）22:6 Δ4,7,10,13,16,19 n-3。" }
  ],
  terms: [
    { cz: "mastná kyselina", en: "fatty acid", cn: "脂肪酸", def_en: "A polycarbon aliphatic monocarboxylic acid; the basic hydrophobic building block of simple, complex, and some derived lipids.", def_cn: "一种多碳脂肪族一元羧酸；是简单脂质、复合脂质及部分衍生脂质的基本疏水构件。" },
    { cz: "nasycená MK", en: "saturated fatty acid", cn: "饱和脂肪酸", def_en: "A fatty acid whose chain contains no double bond, e.g. palmitic acid (16:0).", def_cn: "碳链中不含双键的脂肪酸，如棕榈酸（16:0）。" },
    { cz: "polynenasycená MK", en: "polyunsaturated fatty acid", cn: "多不饱和脂肪酸", def_en: "A fatty acid with 2 or more double bonds, isolated by a CH2 group and positioned roughly symmetrically near the molecule's center, mostly cis.", def_cn: "含有2个或以上双键的脂肪酸，双键被CH2基团隔开，大致对称地位于分子中部，大多为顺式构型。" },
    { cz: "kyselina olejová", en: "oleic acid", cn: "油酸", def_en: "18:1, Δ9, n-9 — the book's example of a monounsaturated fatty acid.", def_cn: "18:1，Δ9，n-9——教材中单不饱和脂肪酸的例子。" },
    { cz: "kyselina linolová", en: "linoleic acid", cn: "亚油酸", def_en: "18:2, Δ9,12, n-6 — a diunsaturated fatty acid named in Tab. 8.2.", def_cn: "18:2，Δ9,12，n-6——表8.2中列出的二不饱和脂肪酸。" },
    { cz: "kyselina arašidonová", en: "arachidonic acid", cn: "花生四烯酸", def_en: "20:4, Δ5,8,11,14, n-6 — a tetraunsaturated fatty acid named in Tab. 8.2.", def_cn: "20:4，Δ5,8,11,14，n-6——表8.2中列出的四不饱和脂肪酸。" },
    { cz: "cis/trans konfigurace", en: "cis/trans configuration", cn: "顺式/反式构型", def_en: "The geometric arrangement around a double bond; naturally occurring fatty-acid double bonds are mostly cis.", def_cn: "双键周围的几何排列方式；天然脂肪酸中的双键大多为顺式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per Tab. 8.2, how many carbon atoms and double bonds does erucic acid (kyselina eruková) have, and what is its n-(ω) series?",
      q_cn: "根据表8.2，芥酸（kyselina eruková）有多少个碳原子和双键？其n-(ω)系列是什么？",
      options: ["22 carbons, 1 double bond, n-9", "18 carbons, 1 double bond, n-9", "22 carbons, 2 double bonds, n-6", "20 carbons, 1 double bond, n-7"],
      answer: 0,
      optionRefs: { 1: "8-2-1-2", 3: "L-10-1-1" },
      optionNotes: {
        1: { en: "18:1 n-9 is oleic acid, the other n-9 entry in Tab. 8.2. Erucic acid sits in the same series but is four carbons longer, with the double bond at delta-13 rather than delta-9.", cn: "18:1 n-9 是 oleic acid，Tab. 8.2 里另一个 n-9 条目。Erucic acid 属于同一 series，但碳链长四个碳，双键在 delta-13 而不是 delta-9。" },
        2: { en: "No 22:2 acid appears in Tab. 8.2 at all; the table's other C22 entry is klupanodonic acid (DHA), 22:6 n-3. The n-6 series in the table is linoleic, gamma-linolenic and arachidonic.", cn: "Tab. 8.2 里根本没有 22:2 这种酸；表中另一个 C22 条目是 klupanodonic acid（DHA），22:6 n-3。表里的 n-6 series 是 linoleic、gamma-linolenic 和 arachidonic。" },
        3: { en: "The table's C20 acids are arachidic (20:0) and arachidonic (20:4 n-6), neither of them 20:1; and its only n-7 acid is palmitoleic, 16:1 delta-9.", cn: "表里的 C20 只有 arachidic (20:0) 和 arachidonic (20:4 n-6)，没有 20:1；而唯一的 n-7 是 palmitoleic，16:1 delta-9。" }
      },
      why_en: "Tab. 8.2 lists erucic acid as 22:1 (22 carbons, 1 double bond), Δ13, series n-9 — distinguishing it from oleic acid (18:1, also n-9) and from the diunsaturated/n-6 or n-7 acids listed elsewhere in the table.",
      why_cn: "表8.2将芥酸列为22:1（22个碳原子，1个双键），Δ13，系列n-9——与油酸（18:1，同为n-9）以及表中其他二不饱和/n-6或n-7脂肪酸相区分。"
    },
    {
      type: "mcq",
      q_en: "Which natural-occurrence pattern does the book state for the double bonds of polyunsaturated fatty acids?",
      q_cn: "对于多不饱和脂肪酸的双键，教材指出了怎样的天然分布规律？",
      options: ["They are conjugated, each double bond directly adjacent to the next, and clustered towards the carboxyl end", "They are isolated by a CH2 group and positioned roughly symmetrically near the middle of the molecule, mostly cis", "They alternate strictly between cis and trans along the chain, giving every polyunsaturated acid a fixed geometry", "They occur only at even-numbered positions counted from the methyl end, which is what the n-(omega) number records"],
      answer: 1,
      optionRefs: { 0: "8-2-1-2", 2: "L-10-1-1", 3: "8-2-1-2" },
      optionNotes: {
        0: { en: "Isolated by a CH2 group is the exact opposite of conjugated, and the book places the double bonds near the MIDDLE of the chain. A double bond close to the carboxyl end is discussed only as the case that lowers melting point and stability the most.", cn: "「被一个 CH2 隔开」正好是 conjugated 的反面，而且教材说双键大致位于分子中部。靠近 carboxyl 端的双键，教材只在「最能降低熔点和化学稳定性」这一点上提到过。" },
        2: { en: "The book says the double bonds are MOSTLY cis. Cis versus trans is one of its three classification criteria for a fatty acid, not a rule that the configuration alternates along the chain.", cn: "教材说双键「大多是 cis」。cis / trans 是教材给脂肪酸分类的三条标准之一，不是说构型沿碳链交替出现。" },
        3: { en: "n- (older omega-) simply counts a double bond's position from the methyl end and is what names the series n-3, n-6, n-9. It carries no parity rule: alpha-linolenic acid is n-3, an odd position.", cn: "n-（旧称 omega-）只是从甲基端数双键的位置，用来命名 n-3、n-6、n-9 这些 series，跟奇偶无关：alpha-linolenic acid 就是 n-3，奇数位。" }
      },
      why_en: "The book states that when 2 or more double bonds are present, they are isolated by a CH2 group and positioned more or less symmetrically near the center of the molecule, and that double bonds are mostly cis — not conjugated, not strictly alternating cis/trans, and not defined by parity from the methyl end.",
      why_cn: "教材指出，当含有2个或以上双键时，双键被CH2基团隔开，大致对称地位于分子中部，且双键大多为顺式——并非共轭、并非严格顺反交替，也不是由从甲基端计数的奇偶性决定。"
    },
    {
      type: "short",
      q_en: "Give the three criteria the book uses to classify fatty acids by the character of their carbon chain, and state which carbon-count range is typical for naturally-occurring unsaturated fatty acids.",
      q_cn: "写出教材依碳链特征对脂肪酸分类所用的三项标准，并说出天然存在的不饱和脂肪酸典型的碳原子数范围。",
      accept: ["linear", "branched", "alicyclic", "saturated", "unsaturated", "cis", "trans", "C16", "24", "线型", "支链", "脂环", "饱和", "不饱和", "顺式", "反式"],
      answer_en: "(1) linear/branched/alicyclic chain; (2) saturated vs. mono-/di-/polyunsaturated; (3) cis vs. trans double-bond configuration. Naturally-occurring unsaturated fatty acids are typically C16-24.",
      answer_cn: "(1)线型/支链/脂环型碳链；(2)饱和与单/二/多不饱和；(3)双键顺式与反式构型。天然存在的不饱和脂肪酸通常为C16-24。"
    }
  ],
  oral: {
    q_en: "Define fatty acids, give the three chain-based classification criteria, and describe their natural occurrence patterns, citing examples from Tab. 8.2.",
    q_cn: "请定义脂肪酸，给出按碳链分类的三项标准，并结合表8.2中的例子描述脂肪酸的天然分布规律。",
    model_en: "Fatty acids are the basic component of simple and complex lipids, and it's really their own pronounced hydrophobicity that gives the whole lipid molecule its hydrophobic character. Chemically they're polycarbon aliphatic monocarboxylic acids, and the book classifies them three ways based on the carbon chain: first, by shape — linear, branched, or alicyclic; second, by saturation — saturated fatty acids have no double bond at all, while unsaturated ones are mono-, di-, or polyunsaturated depending on how many double bonds they carry; and third, by the configuration of those double bonds, which can be cis or trans. In nature, the fatty acids you actually find most often have a linear chain with an even number of carbons — these are called the higher fatty acids, running from about C12 to C24. Unsaturated ones tend to be C16 to C24, and when there are two or more double bonds, making the acid polyunsaturated, those double bonds are isolated from each other by a CH2 group and sit roughly symmetrically near the center of the molecule, and they're almost always in the cis configuration. Table 8.2 lays all this out concretely: on the saturated side you've got lauric, myristic, palmitic, stearic, and arachidic acid, running from 12 to 20 carbons with no double bonds at all. On the unsaturated side there's oleic acid, 18 carbons with one double bond at position 9 counted from the carboxyl end, which puts it in the n-9 series counted from the methyl end; linoleic acid, 18:2, n-6; alpha-linolenic acid, 18:3, n-3; and going up in unsaturation, arachidonic acid at 20:4, n-6, and the two highly unsaturated ones, EPA at 20:5 and DHA at 22:6, both n-3.",
    checklist: [
      "Defined fatty acids as polycarbon aliphatic monocarboxylic acids, the hydrophobic component of lipids",
      "Named the three chain-based classification criteria: shape, saturation, cis/trans",
      "Stated natural-occurrence patterns: even-carbon C12-24, unsaturated C16-24",
      "Described polyunsaturated double-bond spacing (CH2-isolated, symmetric, mostly cis)",
      "Cited at least 3 named fatty acids from Tab. 8.2 with their abbreviation/Δ/n-ω",
      "Noted that Δ/n-(ω) meanings are explained on p.178, not p.177"
    ]
  }
},

{
  id: "8-2-1-2",
  book: "cz",
  topicKey: "storage-lipids",
  chapter: 8,
  section: "8.2.1",
  czTitle: "Mastné kyseliny — názvosloví, esenciální mastné kyseliny, vliv na vlastnosti lipidů",
  enTitle: "Fatty acids — nomenclature, essential fatty acids, effect on lipid properties",
  cnTitle: "脂肪酸——命名法、必需脂肪酸、对脂质性质的影响",
  pages: [178],
  coverage: "full",
  coverageNote: "Top portion of page 178 read in full, from the start of the page through the fatty-acid-nomenclature paragraph, the essential-fatty-acids paragraph, and the three-bullet structure-property list, stopping exactly at the '8.2.2 Jednoduché lipidy' heading (covered by node 8-2-2-1). FLAG — book-internal labeling inconsistency: the nomenclature paragraph ends with the parenthetical cross-reference '(obr. 8.2)' [Fig. 8.2] when citing the n-/ω- series naming (e.g. n-6, n-3 series), but no figure numbered 'Obr. 8.2' appears anywhere in pages 176-179 — the actual Δ/n-(ω) data being referenced is in 'Tab. 8.2' (a TABLE, on the previous page, p.177, covered by node 8-2-1-1). This is almost certainly a mislabel (obr. for tab.) rather than a missing figure the extraction failed to capture; flagged here rather than silently resolved. Worth double-checking against p.180 in case a genuinely separate 'Obr. 8.2' diagram appears there instead — that would change the assessment.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Fatty-acid nomenclature uses either trivial names from the acid's natural source (e.g. kys. palmitová) or systematic chemical names, which express carbon-chain length with a Greek numeral plus the suffix '-nová' for saturated acids (e.g. kys. hexadekanová for 16:0), and the suffixes '-enová/-dienová/-trienová' for the presence of one/two/three double bonds in unsaturated or polyunsaturated acids (e.g. kys. oktadekadienová for 18:2). The position of a double bond counted from the carboxyl end is denoted Δ; counted from the methyl end it is denoted n- (older nomenclature: ω-), used to define fatty-acid 'series' such as n-6 and n-3. Mammalian diet must contain linoleic acid (9,12 C18:2n-6) and α-linolenic acid (9,12,15 C18:3n-3) — the essential fatty acids; mammals can synthesize fatty acids with more than 18 carbons and more unsaturated double bonds FROM these essentials using the elongase and desaturase enzyme systems. Fatty acids strongly influence the chemical and physicochemical properties of the lipids they belong to: saturated fatty acids raise chemical stability and melting point; unsaturated fatty acids lower both; and the closer a double bond sits to the carboxyl group, the more it further lowers chemical stability and melting point.",
    cn: "脂肪酸命名法采用两种方式：一是来自天然来源的俗名（如棕榈酸），二是系统化学命名法——用希腊数词表示碳链长度，饱和脂肪酸加后缀'-烷酸'（如十六烷酸对应16:0），不饱和或多不饱和脂肪酸则用'-烯酸/-二烯酸/-三烯酸'分别表示含一个/两个/三个双键（如十八碳二烯酸对应18:2）。从羧基端计数的双键位置用Δ表示；从甲基端计数则用n-（旧命名法用ω-）表示，用以定义脂肪酸的'系列'，如n-6和n-3系列。哺乳动物的食物中必须含有亚油酸（9,12 C18:2n-6）和α-亚麻酸（9,12,15 C18:3n-3）——即必需脂肪酸；碳原子数多于18且不饱和双键更多的脂肪酸，哺乳动物可利用延长酶和去饱和酶系统由这些必需脂肪酸合成。脂肪酸显著影响其所构成脂质的化学和物理化学性质：饱和脂肪酸提高化学稳定性和熔点；不饱和脂肪酸降低两者；双键离羧基越近，对化学稳定性和熔点的降低作用越大。"
  },
  mustKnow: { en: "A single element decides whether a fatty acid hardens or stays oily — one double bond (or many). That is why mammals must eat linoleic and alpha-linolenic acid: we cannot add the first double bond ourselves.", cn: "单一因素决定脂肪酸是硬化还是保持油性——一个双键（或多个）。这就是为什么哺乳动物必须摄入亚油酸和α-亚麻酸。" },
  points: [
    { cz: "názvosloví: triviální vs. systematické", en: "Fatty-acid nomenclature uses either trivial names derived from the acid's natural source (e.g. kys. palmitová/palmitic acid), or systematic chemical names.", cn: "脂肪酸命名法使用两种方式：来自天然来源的俗名（如棕榈酸），或系统化学命名法。" },
    { cz: "systematické názvosloví: řecké číslovky + '-nová' (nasycené)", en: "Systematic names express the carbon-chain length with a Greek numeral and the suffix '-nová' (-anoic) for saturated fatty acids, e.g. kys. hexadekanová for 16:0.", cn: "系统命名法用希腊数词表示碳链长度，饱和脂肪酸用后缀'-烷酸'（如十六烷酸对应16:0）。" },
    { cz: "-enová/-dienová/-trienová = 1/2/3 dvojné vazby", en: "For unsaturated or polyunsaturated fatty acids, the suffixes '-enová', '-dienová', '-trienová' indicate the presence of one, two, or three double bonds respectively, e.g. kys. oktadekadienová for 18:2.", cn: "对不饱和或多不饱和脂肪酸，后缀'-烯酸'、'-二烯酸'、'-三烯酸'分别表示含有一个、两个或三个双键，如十八碳二烯酸对应18:2。" },
    { cz: "Δ = poloha dvojné vazby od karboxylového konce", en: "The position of a double bond counted FROM THE CARBOXYL END is denoted Δ (delta).", cn: "从羧基端计数的双键位置用Δ（delta）表示。" },
    { cz: "n-/ω- = poloha od metylového konce → série (n-6, n-3)", en: "The position of a double bond counted FROM THE METHYL END is denoted n- (or, in the older nomenclature, ω-), and is used to designate so-called fatty-acid 'series' (e.g. the n-6 and n-3 series). The book's own cross-reference here reads '(obr. 8.2)' — flagged in this node's coverageNote as a probable mislabel, since the actual Δ/n-(ω) data appears in Tab. 8.2 (a table), not a separate numbered figure.", cn: "从甲基端计数的双键位置用n-（或按旧命名法用ω-）表示，用以标示所谓脂肪酸'系列'（如n-6系列和n-3系列）。教材此处标注'(obr. 8.2)'（图8.2）——已在本节点coverageNote中标记为很可能应为'表8.2'的印刷错误，因为实际的Δ/n-(ω)数据出现在表8.2（一张表格）中，而非单独编号的图。" },
    { cz: "esenciální MK: linolová (18:2n-6) a α-linolenová (18:3n-3)", en: "Mammalian diet must contain linoleic acid (9,12 C18:2n-6) and α-linolenic acid (9,12,15 C18:3n-3) — the ESSENTIAL fatty acids.", cn: "哺乳动物的食物中必须含有亚油酸（9,12 C18:2n-6）和α-亚麻酸（9,12,15 C18:3n-3）——即必需脂肪酸。" },
    { cz: "elongasy a desaturasy: syntéza delších/nenasycenějších MK z esenciálních", en: "Fatty acids with more carbons than 18, and with a greater number of unsaturated double bonds, can be synthesized by mammals FROM these essential fatty acids using the elongase and desaturase enzyme systems.", cn: "碳原子数多于18、且不饱和双键更多的脂肪酸，哺乳动物可以利用延长酶（elongase）和去饱和酶（desaturase）系统由这些必需脂肪酸合成而来。" },
    { cz: "nasycené MK → vyšší stabilita a bod tání", en: "Saturated fatty acids lead to higher chemical stability and a higher melting point of the lipids they are part of.", cn: "饱和脂肪酸会使其所构成的脂质具有更高的化学稳定性和更高的熔点。" },
    { cz: "nenasycené MK → nižší stabilita a bod tání; dvojná vazba blíže COOH → ještě nižší", en: "Unsaturated fatty acids lower the chemical stability and melting point of lipids; the closer a double bond sits to the carboxyl group, the more it further lowers chemical stability and melting point.", cn: "不饱和脂肪酸会降低脂质的化学稳定性和熔点；双键离羧基越近，对化学稳定性和熔点的降低作用越大。" }
  ],
  terms: [
    { cz: "esenciální mastná kyselina", en: "essential fatty acid", cn: "必需脂肪酸", def_en: "A fatty acid mammals cannot synthesize and must obtain from the diet; the book names linoleic acid (18:2n-6) and α-linolenic acid (18:3n-3).", def_cn: "哺乳动物不能自行合成、必须从食物获取的脂肪酸；教材举例为亚油酸（18:2n-6）和α-亚麻酸（18:3n-3）。" },
    { cz: "elongasa", en: "elongase", cn: "延长酶", def_en: "An enzyme system that lengthens a fatty-acid chain; used, together with desaturases, to make longer/more-unsaturated fatty acids from the essential fatty acids.", def_cn: "使脂肪酸链延长的酶系统；与去饱和酶共同作用，由必需脂肪酸合成更长、不饱和度更高的脂肪酸。" },
    { cz: "desaturasa", en: "desaturase", cn: "去饱和酶", def_en: "An enzyme system that introduces additional double bonds into a fatty-acid chain; used together with elongases to build non-essential unsaturated fatty acids from essential ones.", def_cn: "在脂肪酸链中引入额外双键的酶系统；与延长酶共同作用，由必需脂肪酸合成非必需的不饱和脂肪酸。" },
    { cz: "Δ (delta) značení", en: "Δ (delta) notation", cn: "Δ（德尔塔）标记法", def_en: "Denotes a fatty-acid double-bond position counted from the carboxyl end.", def_cn: "表示从羧基端计数的脂肪酸双键位置。" },
    { cz: "n-/ω- značení", en: "n-/ω- notation", cn: "n-/ω-标记法", def_en: "Denotes a fatty-acid double-bond position counted from the methyl end; used to define fatty-acid series such as n-6 and n-3 (ω- is the older form of the same notation).", def_cn: "表示从甲基端计数的脂肪酸双键位置；用于定义脂肪酸系列，如n-6和n-3（ω-为同一标记法的旧写法）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which two fatty acids does the book name as essential for the mammalian diet?",
      q_cn: "教材指出哪两种脂肪酸是哺乳动物饮食中的必需脂肪酸？",
      options: ["Linoleic acid (18:2n-6) and α-linolenic acid (18:3n-3)", "Palmitic acid (16:0) and gamma-linolenic acid (18:3n-6)", "Oleic acid (18:1n-9) and arachidonic acid (20:4n-6)", "Erucic acid (22:1n-9) and timnodonic acid, EPA (20:5n-3)"],
      answer: 0,
      optionRefs: { 1: "8-3-4", 2: "L-10-3-1", 3: "8-2-1-1" },
      optionNotes: {
        1: { en: "Palmitic acid is the end product mammals make themselves, and gamma-linolenic acid (18:3n-6) is built from linoleic acid by the desaturase system. Being in the n-6 series does not make an acid essential; being the parent of that series does.", cn: "Palmitic acid 是哺乳动物自己合成的终产物，gamma-linolenic acid (18:3n-6) 则由 linoleic acid 经 desaturase 系统做出来。属于 n-6 series 不等于必需，必需的是这个 series 的母体酸。" },
        2: { en: "Both are exactly what the book says mammals CAN make: oleic acid by desaturation, arachidonic acid (20:4n-6) by elongation and desaturation of linoleic acid.", cn: "这两个恰恰是教材说哺乳动物「能自己做」的：oleic acid 由去饱和得到，arachidonic acid (20:4n-6) 由 linoleic acid 经 elongase 和 desaturase 加工而来。" },
        3: { en: "EPA (20:5n-3) is derived from alpha-linolenic acid by elongases and desaturases, and erucic acid belongs to the n-9 series, which mammals build for themselves. Neither has to come from the diet.", cn: "EPA (20:5n-3) 是由 alpha-linolenic acid 经 elongase 和 desaturase 延长脱氢而来，erucic acid 属于 n-9 series，哺乳动物自己就能造。两者都不必从食物摄取。" }
      },
      why_en: "The book states that mammalian diet must contain linoleic acid (9,12 C18:2n-6) and α-linolenic acid (9,12,15 C18:3n-3) — these are the essential fatty acids from which mammals synthesize longer, more unsaturated fatty acids using elongases and desaturases. The other options are either saturated acids or fatty acids the book describes as synthesizable, not dietary-essential.",
      why_cn: "教材指出，哺乳动物的食物中必须含有亚油酸（9,12 C18:2n-6）和α-亚麻酸（9,12,15 C18:3n-3）——哺乳动物利用延长酶和去饱和酶由这两种必需脂肪酸合成更长、不饱和度更高的脂肪酸。其余选项要么是饱和脂肪酸，要么是教材中可自行合成而非饮食必需的脂肪酸。"
    },
    {
      type: "mcq",
      q_en: "Per the book, how does the position of a double bond relative to the carboxyl group affect a lipid's chemical stability and melting point?",
      q_cn: "根据教材，双键相对于羧基的位置如何影响脂质的化学稳定性和熔点？",
      options: ["No effect from position - only the total number of double bonds in the chain changes stability and melting point", "The closer the double bond is to the carboxyl group, the MORE it lowers chemical stability and melting point", "The closer the double bond is to the carboxyl group, the more it RAISES chemical stability and melting point", "Position matters only for trans double bonds; a cis double bond lowers the melting point wherever it sits"],
      answer: 1,
      optionRefs: { 2: "L-10-1-1", 3: "8-2-1-1" },
      optionNotes: {
        0: { en: "The number of double bonds does matter, but the book adds position as a separate, further effect on top of it: unsaturation lowers stability and melting point, and a bond near the carboxyl lowers them more still.", cn: "双键数目确实有影响，但教材在此之外还加了一条独立的位置效应：不饱和本身降低稳定性和熔点，而靠近 carboxyl 的双键把它们降得更低。" },
        2: { en: "The direction is reversed. It is the SATURATED fatty acids that raise chemical stability and melting point; every double bond lowers both, and the closer to the carboxyl group, the more.", cn: "方向反了。抬高化学稳定性和熔点的是 saturated fatty acid；每个双键都会把两者拉低，而且离 carboxyl 越近拉得越低。" },
        3: { en: "Cis versus trans is one of the book's three ways of classifying a fatty acid's chain, not a condition attached to the position effect. The position rule is stated for the double bond as such.", cn: "cis / trans 是教材给脂肪酸碳链分类的三条标准之一，并不是位置效应的附加条件。位置这条规律，教材是对双键本身讲的。" }
      },
      why_en: "The book's third structure-property bullet states explicitly that the closer a double bond sits to the carboxyl group, the more it lowers chemical stability and melting point — this is in addition to, not instead of, the general effect that any unsaturation lowers stability/melting point relative to saturated fatty acids.",
      why_cn: "教材关于结构-性质关系的第三条明确指出，双键离羧基越近，对化学稳定性和熔点的降低作用越大——这是在'任何不饱和都会比饱和脂肪酸降低稳定性/熔点'这一普遍规律之外的额外效应，而非替代它。"
    },
    {
      type: "short",
      q_en: "Explain the difference between the Δ notation and the n-/ω- notation for fatty-acid double-bond position, and state which one is used to define the n-6 and n-3 'series'.",
      q_cn: "解释脂肪酸双键位置的Δ标记法与n-/ω-标记法有何不同，并说明哪一种用于定义n-6和n-3'系列'。",
      accept: ["carboxyl", "methyl", "Δ", "delta", "n-", "omega", "ω", "series", "羧基", "甲基", "系列"],
      answer_en: "Δ counts the double-bond position from the carboxyl end of the chain. n- (or the older ω-) counts it from the methyl end, and it is this methyl-end count that is used to define fatty-acid 'series' such as n-6 and n-3.",
      answer_cn: "Δ是从碳链的羧基端计数双键位置。n-（或旧命名法的ω-）是从甲基端计数，正是这种从甲基端计数的方式被用来定义脂肪酸的'系列'，如n-6和n-3系列。"
    }
  ],
  oral: {
    q_en: "Explain fatty-acid nomenclature (trivial vs. systematic, Δ vs. n-/ω-), the essential fatty acids, and how saturation/double-bond position affects lipid properties.",
    q_cn: "请解释脂肪酸命名法（俗名与系统命名、Δ与n-/ω-标记法），必需脂肪酸，以及饱和度/双键位置如何影响脂质性质。",
    model_en: "The book describes two ways of naming fatty acids: trivial names taken from the acid's natural source, like palmitic acid, or systematic chemical names, which use a Greek numeral for the carbon count plus the suffix '-nová' for a saturated acid — so hexadecanoic acid is 16:0 — and the suffixes '-enová', '-dienová', '-trienová' to show one, two, or three double bonds in an unsaturated or polyunsaturated acid, like octadecadienoic acid for 18:2. On top of that naming system there are two ways to specify WHERE a double bond sits: Δ counts its position from the carboxyl end, while n-, or in the older nomenclature ω-, counts from the methyl end — and it's that methyl-end count that defines the fatty-acid 'series' you hear about, like the n-6 and n-3 series. This matters biologically because mammalian diets must supply two specific fatty acids the body can't make on its own: linoleic acid, 18:2n-6, and alpha-linolenic acid, 18:3n-3 — these are the essential fatty acids, and mammals build longer, more unsaturated fatty acids out of them using elongase and desaturase enzyme systems. Finally, the degree and position of unsaturation feed directly into a lipid's physical properties: saturated fatty acids push chemical stability and melting point up, unsaturated fatty acids pull both down, and the effect gets stronger the closer that double bond sits to the carboxyl group.",
    checklist: [
      "Distinguished trivial vs. systematic fatty-acid names and the -nová/-enová/-dienová/-trienová suffix system",
      "Explained Δ (from carboxyl end) vs. n-/ω- (from methyl end) notation",
      "Connected n-/ω- notation to the n-6/n-3 series concept",
      "Named the two essential fatty acids and their exact Δ/n designations",
      "Named elongases and desaturases as the enzymes building other fatty acids from the essentials",
      "Stated the three-way effect of saturation/double-bond position on stability and melting point"
    ]
  }
},

{
  id: "8-2-2-1",
  book: "cz",
  topicKey: "storage-lipids",
  chapter: 8,
  section: "8.2.2",
  czTitle: "Jednoduché lipidy — Neutrální acylglyceroly",
  enTitle: "Simple lipids — Neutral acylglycerols",
  cnTitle: "简单脂质——中性酰基甘油",
  pages: [178, 179],
  coverage: "full",
  coverageNote: "The '8.2.2 Jednoduché lipidy' heading and its first named subsection, 'Neutrální acylglyceroly', read in full from the bottom of page 178 through the top of page 179, stopping right before the 'Vosky' subheading (covered by node 8-2-2-2). Verified directly: the acylglycerol/glyceride definition, the mono-/di-/triacylglycerol classification by number of esterified hydroxyls, the neutral-lipid classification (no ionizable group; solid = neutral fats, liquid = neutral oils), the statement that natural lipids are mostly L-isomers together with the book's own four-panel structural figure (glycerol, 1-acyl-L-glycerol, 1,2-diacyl-L-glycerol, triacyl-L-glycerol — carbons numbered ¹CH₂OH/C2/³CH₂OH, with HO-C-H at C2 in the mono-substituted forms and R'-CO-C-H at C2 once diacylated, and R/R'/R'' used for the three distinct acyl groups), the three biological functions of triacylglycerols in animal cells, and — carrying over onto the very top of page 179 — the one-reaction-type statement (hydrolysis to free glycerol + fatty acid, catalyzed by lipases).",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Acylglycerols (also called glycerides) are esters of the trihydroxy alcohol glycerol and fatty acids. Depending on the number of esterified hydroxyl groups there are monoacylglycerols, diacylglycerols, and triacylglycerols; triacylglycerols (TAGs) are by far the most common in nature. Acylglycerols carry no ionizable functional group, so they belong to the 'neutral lipids': depending on their physical state at room temperature (which depends on which fatty acids they contain), they are called neutral fats (solid) or neutral oils (liquid). Natural lipids are mostly L-isomers — the book's figure walks through glycerol (C1/C2/C3, with C2 = HO-C-H) to 1-acyl-L-glycerol (ester at C1), 1,2-diacyl-L-glycerol (esters at C1 and C2), and triacyl-L-glycerol (esters at all three carbons, acyl groups labeled R/R'/R''). In animal cells, triacylglycerols serve three basic functions: (1) in adipose tissue they form the fat depot — the storage form of carbon and energy into which any excess dietary carbon/energy (chiefly sugars and fats) is converted; (2) in the form of lipoprotein particles (chylomicrons) they transport and distribute dietary fatty acids through the lymphatic and blood systems; (3) they provide physical protection and thermal insulation for body organs (kidneys, intestines, etc.). Chemically, neutral acylglycerols can undergo only one type of reaction — hydrolysis, yielding free glycerol and fatty acid — governed in living organisms by hydrolase-class enzymes called lipases.",
    cn: "酰基甘油（甘油酯）是三羟基醇甘油与脂肪酸形成的酯。根据被酯化的羟基数目，分为单酰基甘油、二酰基甘油和三酰基甘油；三酰基甘油（甘油三酯，TAG）是自然界中迄今最常见的一种。酰基甘油不含可电离的官能团，因此属于'中性脂质'：根据其在室温下的物理状态（取决于所含脂肪酸种类），称为中性脂肪（固态）或中性油（液态）。天然脂质大多为L型异构体——教材的图示依次展示了甘油（C1/C2/C3，C2为HO-C-H）、1-酰基-L-甘油（C1处成酯）、1,2-二酰基-L-甘油（C1和C2处成酯）、三酰基-L-甘油（三个碳原子均成酯，酰基分别标为R/R'/R''）。在动物细胞中，三酰基甘油有三项基本功能：(1)在脂肪组织中构成脂肪储备——即碳和能量的储存形式，食物中任何过量摄入的碳/能量（主要是糖和脂肪）都会转化为此形式；(2)以脂蛋白颗粒（乳糜微粒）的形式，通过淋巴系统和血液系统运输和分配来自食物的脂肪酸；(3)为体内器官（肾脏、肠道等）提供物理保护和保温隔热作用。从化学角度看，中性酰基甘油只能发生一种反应——水解，生成游离甘油和脂肪酸——在生物体内由水解酶类中的脂肪酶催化。"
  },
  mustKnow: { en: "Having no ionisable group at all is what puts acylglycerols among the NEUTRAL lipids, and it is also why their chemistry is so thin: hydrolysis back to glycerol and fatty acids is the only reaction they undergo, in the body by lipase. Everything else about them is a job — the fat depot, transport as chylomicrons, physical and thermal insulation.", cn: "acylglycerol 分子里没有任何可解离的基团，这既是它被归入 neutral lipid 的原因，也是它化学性质如此单薄的原因：它能发生的反应只有水解，回到 glycerol 和脂肪酸，在体内由 lipase 催化。其余关于它的内容都是「用途」——脂肪库、以 chylomicron 形式运输、物理保护与保温。" },
  points: [
    { cz: "acylglyceroly (glyceridy) = estery glycerolu + MK", en: "Acylglycerols (also called glycerides) are esters of the trihydroxy alcohol glycerol and fatty acids.", cn: "酰基甘油（甘油酯）是三羟基醇甘油与脂肪酸形成的酯。" },
    { cz: "mono-/di-/triacylglycerol podle počtu esterifikovaných OH", en: "Depending on the number of esterified hydroxyl groups, there are monoacylglycerols, diacylglycerols, and triacylglycerols; triacylglycerols are by far the most common in nature.", cn: "根据被酯化的羟基数目，分为单酰基甘油、二酰基甘油和三酰基甘油；自然界中以三酰基甘油最为常见。" },
    { cz: "žádná ionizovatelná skupina → neutrální lipidy (tuky/oleje)", en: "Acylglycerols contain no ionizable functional group in the molecule, which is why they belong to the so-called neutral lipids: depending on their physical state at room temperature (determined by the fatty-acid types they contain), they are called neutral fats (solid) or neutral oils (liquid).", cn: "酰基甘油分子中不含可电离的官能团，因此属于所谓的中性脂质：根据其在室温下的物理状态（取决于所含脂肪酸的种类），称为中性脂肪（固态）或中性油（液态）。" },
    { cz: "přirozené lipidy = většinou L-izomery (obr.: glycerol→1-acyl-L→1,2-diacyl-L→triacyl-L)", en: "Natural lipids are mostly L-isomers. The book's figure walks through glycerol (numbered C1/C2/C3, with C2 = HO-C-H) to 1-acyl-L-glycerol (ester at C1, acyl group R), to 1,2-diacyl-L-glycerol (esters at C1 and C2, C2 becomes R'-CO-C-H), to triacyl-L-glycerol (esters at all three carbons, acyl groups R/R'/R'').", cn: "天然脂质大多为L型异构体。教材图示依次展示了甘油（碳原子编号C1/C2/C3，C2为HO-C-H）、1-酰基-L-甘油（C1处成酯，酰基为R）、1,2-二酰基-L-甘油（C1和C2处成酯，C2变为R'-CO-C-H）、三酰基-L-甘油（三个碳原子均成酯，酰基分别为R/R'/R''）。" },
    { cz: "TAG funkce 1: tuková zásoba (energie z nadbytku cukrů/tuků)", en: "Function 1 of triacylglycerols in animal cells: in adipose tissue they form the fat depot, the storage form of carbon and energy, into which any excess dietary intake of carbon or energy (chiefly sugars and fats) is converted.", cn: "三酰基甘油在动物细胞中的功能1：在脂肪组织中构成脂肪储备，即碳和能量的储存形式，食物中任何过量摄入的碳或能量（主要是糖和脂肪）都会转化为此形式储存。" },
    { cz: "TAG funkce 2: transport MK v chylomikronech", en: "Function 2: in the form of lipoprotein particles (chylomicrons), triacylglycerols serve to transport and distribute dietary fatty acids through the lymphatic and blood systems in the body.", cn: "功能2：三酰基甘油以脂蛋白颗粒（乳糜微粒）的形式，通过淋巴系统和血液系统运输和分配来自食物的脂肪酸。" },
    { cz: "TAG funkce 3: fyzická ochrana a teplotní izolace orgánů", en: "Function 3: triacylglycerols provide physical protection and thermal insulation for various body organs (kidneys, intestines, etc.).", cn: "功能3：三酰基甘油为各种体内器官（肾脏、肠道等）提供物理保护和保温隔热作用。" },
    { cz: "chemicky: pouze hydrolýza (glycerol + MK), katalyzována lipasami", en: "From a chemical standpoint, neutral acylglycerols can undergo only one type of reaction — hydrolysis — yielding free glycerol and fatty acid. In living organisms this reaction is governed by specific enzymes of the hydrolase class: lipases.", cn: "从化学角度看，中性酰基甘油只能发生一种反应——水解——生成游离甘油和脂肪酸。在生物体内，该反应由水解酶类中的特异性酶——脂肪酶（lipases）——催化。" }
  ],
  terms: [
    { cz: "acylglycerol / glycerid", en: "acylglycerol / glyceride", cn: "酰基甘油/甘油酯", def_en: "An ester of glycerol and fatty acid(s); classified as mono-, di-, or triacylglycerol by how many hydroxyls are esterified.", def_cn: "甘油与脂肪酸形成的酯；按酯化的羟基数目分为单酰基、二酰基、三酰基甘油。" },
    { cz: "monoacylglycerol", en: "monoacylglycerol", cn: "单酰基甘油", def_en: "Glycerol esterified at one of its three hydroxyl groups with a fatty acid.", def_cn: "甘油三个羟基中的一个被脂肪酸酯化的产物。" },
    { cz: "diacylglycerol", en: "diacylglycerol", cn: "二酰基甘油", def_en: "Glycerol esterified at two of its three hydroxyl groups with fatty acids.", def_cn: "甘油三个羟基中的两个被脂肪酸酯化的产物。" },
    { cz: "triacylglycerol", en: "triacylglycerol (TAG)", cn: "三酰基甘油（甘油三酯）", def_en: "Glycerol esterified at all three hydroxyl groups; the most common acylglycerol in nature, with three functions in animal cells: fat storage, fatty-acid transport (via chylomicrons), and organ protection/insulation.", def_cn: "甘油三个羟基全部被酯化的产物；自然界中最常见的酰基甘油，在动物细胞中有三项功能：脂肪储存、脂肪酸运输（通过乳糜微粒）以及器官保护/保温。" },
    { cz: "neutrální tuk / olej", en: "neutral fat / neutral oil", cn: "中性脂肪/中性油", def_en: "Acylglycerols, named for their physical state at room temperature — solid (fat) or liquid (oil) — since they carry no ionizable group.", def_cn: "酰基甘油，因不含可电离基团，按其室温下的物理状态命名——固态称脂肪，液态称油。" },
    { cz: "chylomikron", en: "chylomicron", cn: "乳糜微粒", def_en: "A lipoprotein particle that transports and distributes dietary fatty acids (as triacylglycerols) through the lymphatic and blood systems.", def_cn: "一种脂蛋白颗粒，以三酰基甘油形式通过淋巴系统和血液系统运输和分配来自食物的脂肪酸。" },
    { cz: "lipasa", en: "lipase", cn: "脂肪酶", def_en: "A hydrolase-class enzyme that catalyzes the hydrolysis of acylglycerols into glycerol and free fatty acids — the only reaction neutral acylglycerols undergo.", def_cn: "水解酶类中催化酰基甘油水解为甘油和游离脂肪酸的酶——这是中性酰基甘油唯一能发生的反应。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the book classify acylglycerols as 'neutral lipids'?",
      q_cn: "教材为何将酰基甘油归类为'中性脂质'？",
      options: ["Because they contain no ionizable functional group in the molecule", "Because an aqueous suspension of them has a pH of exactly 7", "Because they carry equal numbers of positive and negative charges", "Because they resist hydrolysis and are attacked by no enzyme of the body"],
      answer: 0,
      optionRefs: { 2: "8-2-3-2", 3: "8-2-2-2" },
      optionNotes: {
        1: { en: "Neutral here is about charge, not about pH. The book's criterion is the absence of any ionizable group, which is also why the class divides only into neutral fats (solid) and neutral oils (liquid).", cn: "这里的 neutral 讲的是电荷，不是 pH。教材的判据是分子里没有任何可电离基团，也正因如此这一类只按室温状态分成 neutral fat（固态）和 neutral oil（液态）。" },
        2: { en: "That describes a zwitterion. Among lipids it fits the phosphoacylglycerols, whose phosphate plus choline or ethanolamine head group carries charge of both signs; an acylglycerol carries no charge at all.", cn: "这描述的是 zwitterion。在脂质里它对应 phosphoacylglycerol——磷酸加 choline 或 ethanolamine 头基，正负电荷都有；acylglycerol 则一点电荷都没有。" },
        3: { en: "Resistance to hydrolysis is what the book says about waxes, which lipases do not attack. Acylglycerols are hydrolysed by lipases, and hydrolysis is in fact the only reaction they undergo.", cn: "对水解稳定、脂肪酶不作用，那是教材讲 wax 的性质。Acylglycerol 会被 lipase 水解，而且水解正是它们唯一能发生的反应。" }
      },
      why_en: "The book states that acylglycerols contain no ionizable functional group in the molecule, which is precisely why they are classed as neutral lipids (further subdivided into solid neutral fats or liquid neutral oils by room-temperature physical state) — not because of solution pH, charge balance, or total unreactivity (they do hydrolyze, via lipases).",
      why_cn: "教材指出，酰基甘油分子中不含可电离的官能团，这正是它们被归类为中性脂质的原因（再依室温下的物理状态细分为固态中性脂肪或液态中性油）——而非因为溶液pH值、电荷平衡，或完全不发生反应（它们确实可被脂肪酶水解）。"
    },
    {
      type: "mcq",
      q_en: "Which of the following correctly lists the three functions of triacylglycerols in animal cells, per the book?",
      q_cn: "根据教材，下列哪一项正确列出了三酰基甘油在动物细胞中的三项功能？",
      options: [
        "Fat depot for excess dietary carbon/energy; fatty-acid transport via chylomicrons; physical protection/thermal insulation of organs",
        "Structural component of the lipid bilayer of membranes; recognition marker on the cell surface; precursor of steroid hormones and bile acids",
        "Protective coat against desiccation on leaves and fruit; reinforcement of cell and organ surfaces; end metabolite",
        "Precursor of regulatory substances and hormones; lipophilic vitamins; light-absorbing pigment of plant tissue"
      ],
      answer: 0,
      optionRefs: { 1: "8-5-1", 2: "8-2-2-2", 3: "8-2-4-1" },
      optionNotes: {
        1: { en: "These are the jobs of the complex lipids and of cholesterol: phospholipids build the bilayer, glycolipids sit on the cell surface, and the sterols give rise to steroid hormones. Triacylglycerols do none of the three.", cn: "这三件事是 complex lipid 和 cholesterol 干的：phospholipid 搭双层，glycolipid 摆在细胞表面，sterol 变成 steroid hormone。Triacylglycerol 一件都不做。" },
        2: { en: "This is the book's list of wax functions, and it depends on waxes being water-insoluble and hydrolysis-resistant. Triacylglycerols are hydrolysed by lipases and cannot serve as a surface barrier.", cn: "这是教材列的 wax 的功能，靠的是 wax 不溶于水、对水解稳定。Triacylglycerol 会被 lipase 水解，做不了表面屏障。" },
        3: { en: "These belong to the derived lipids: prostaglandins and steroids as regulators, the lipophilic vitamins, and the carotenoids as pigments. The book counts them as lipid functions, but not as functions of triacylglycerols.", cn: "这些属于 derived lipids：prostaglandin 和 steroid 作调节物、脂溶性维生素、carotenoid 作色素。教材确实把它们算作脂质的功能，但不是 triacylglycerol 的功能。" }
      },
      why_en: "The book names exactly three TAG functions in animal cells: (1) the fat depot in adipose tissue storing excess dietary carbon/energy, (2) transport/distribution of dietary fatty acids via chylomicron lipoprotein particles through lymph and blood, and (3) physical protection and thermal insulation of organs such as kidneys and intestines.",
      why_cn: "教材列出了三酰基甘油在动物细胞中的三项功能：(1)脂肪组织中的脂肪储备，储存食物中过量的碳/能量；(2)以乳糜微粒脂蛋白颗粒形式，通过淋巴和血液运输/分配食物中的脂肪酸；(3)为肾脏、肠道等器官提供物理保护和保温隔热。"
    },
    {
      type: "short",
      q_en: "What is the only chemical reaction neutral acylglycerols can undergo, what are its products, and what enzyme class catalyzes it in living organisms?",
      q_cn: "中性酰基甘油唯一能发生的化学反应是什么？其产物是什么？在生物体内由哪一类酶催化？",
      accept: ["hydrolysis", "glycerol", "fatty acid", "lipase", "hydrolase", "水解", "甘油", "脂肪酸", "脂肪酶"],
      answer_en: "Hydrolysis, yielding free glycerol and fatty acid; catalyzed in living organisms by lipases, enzymes of the hydrolase class.",
      answer_cn: "水解反应，生成游离甘油和脂肪酸；在生物体内由水解酶类中的脂肪酶催化。"
    }
  ],
  oral: {
    q_en: "Define acylglycerols and their sub-types, explain why they are called 'neutral lipids', and describe the three functions of triacylglycerols in animal cells.",
    q_cn: "请定义酰基甘油及其亚型，解释为何称其为'中性脂质'，并描述三酰基甘油在动物细胞中的三项功能。",
    model_en: "Acylglycerols, also called glycerides, are esters of the three-hydroxyl alcohol glycerol with fatty acids. Depending on how many of those three hydroxyls actually get esterified you get monoacylglycerols, diacylglycerols, or triacylglycerols, and in nature triacylglycerols are by far the most common form. Because none of these molecules carries an ionizable functional group, they're classed as neutral lipids, and depending on whether they're solid or liquid at room temperature — which comes down to which fatty acids they're built from — we call them neutral fats or neutral oils. Natural lipids are mostly the L-isomer, and the book actually draws out that whole progression: plain glycerol, numbered at its three carbons, then 1-acyl-L-glycerol once an acyl group esterifies carbon 1, then 1,2-diacyl-L-glycerol once carbon 2 is esterified too, and finally triacyl-L-glycerol with all three carbons esterified to three, potentially different, acyl groups. In animal cells triacylglycerols do three jobs. First, in adipose tissue they form the fat depot — the storage form the body converts any excess dietary carbon or energy into, mostly from sugars and fats. Second, packaged into lipoprotein particles called chylomicrons, they transport and distribute dietary fatty acids through the lymphatic and blood systems. And third, they physically protect and thermally insulate organs like the kidneys and intestines. Chemically, there's really only one thing a neutral acylglycerol can do: hydrolyze, breaking back down into free glycerol and fatty acid, and in a living organism that reaction is carried out by specific hydrolase-class enzymes called lipases.",
    checklist: [
      "Defined acylglycerol/glyceride and the mono-/di-/triacylglycerol distinction",
      "Explained the 'neutral lipid' classification via absence of an ionizable group",
      "Distinguished neutral fats (solid) from neutral oils (liquid)",
      "Described the L-isomer figure progression (glycerol to triacyl-L-glycerol)",
      "Named all three TAG functions in animal cells",
      "Stated hydrolysis as the sole reaction, its products, and lipases as the catalyzing enzyme class"
    ]
  }
},

{
  id: "8-2-2-2",
  book: "cz",
  topicKey: "storage-lipids",
  chapter: 8,
  section: "8.2.2",
  czTitle: "Jednoduché lipidy — Vosky",
  enTitle: "Simple lipids — Waxes",
  cnTitle: "简单脂质——蜡",
  pages: [179],
  coverage: "full",
  coverageNote: "The 'Vosky' subsection on page 179 read in full and cross-checked at 1.8x zoom for the alcohol/acid carbon counts: the wax definition (usually a mixture of esters of higher fatty acids and higher alcohols), the named component fatty acids (lignocerová/lignoceric C24, cerotová/cerotic ['vosková'/'wax'] C26, myriková/myricic C30) and alcohols (cetylalkohol, cerylalkohol C22, myricylalkohol C30), the beeswax example (myricyl palmitate) with its full printed structural formula CH3(CH2)28CH2-O-CO-(CH2)14CH3, the wax property list (completely water-insoluble, very stable to hydrolysis; indigestible by animals because not attacked by lipases, but cleavable by cerases — specific hydrolases of plants and microorganisms), the biological-distribution/protective-function paragraph (protection against desiccation and surface reinforcement of cells/organs/tissues; a protective layer on plant leaves and fruit; animal examples lanolin/beeswax/spermaceti-ambergris ['vorvaňovina']), and the melting-point statement (fairly high, typically 50-85°C). FLAG: the zoomed re-read confirms the book prints 'cetylalkohol (C₁₁)' exactly as shown — this is almost certainly a typesetting error, since cetyl alcohol (hexadecan-1-ol) is a standard C16 alcohol, not C11 (and the book's own beeswax formula, myricyl PALMITATE = a C30 alcohol esterified to the C16 acyl group of palmitic acid, doesn't involve cetyl alcohol at all, so this error isn't even contradicted or resolved by the adjacent worked example). Reproduced here as printed and flagged per the honesty rule for book-internal errors, not silently corrected to C16.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Waxes (ceridy) are usually a mixture of esters of higher fatty acids and higher alcohols. Fatty acids often found in waxes include lignoceric acid (C24), cerotic/'wax' acid (C26), and myricic acid (C30); alcohols include cetyl alcohol (printed in the book as 'C11' — flagged as a probable erratum, see coverageNote), ceryl alcohol (C22), and myricyl alcohol (C30). A common example is beeswax, myricyl palmitate: CH3(CH2)28CH2-O-CO-(CH2)14CH3. Waxes are completely insoluble in water and very stable toward hydrolysis. They are indigestible for animals, since they are not attacked by lipases, but they ARE cleavable by cerases, specific hydrolases of plants and microorganisms. Waxes are very widely distributed in nature (most often as end metabolites) with an important protective function: they guard against desiccation and reinforce the surface of cells and of whole organs, tissues, and plant tissues. In plants they form a protective layer on leaves and fruit; in the animal kingdom, known waxes include sheep's-wool wax (lanolin), beeswax, and spermaceti/ambergris (vorvaňovina). The melting points of natural waxes are fairly high, typically 50-85°C.",
    cn: "蜡通常是高级脂肪酸与高级醇形成的酯的混合物。蜡中常见的脂肪酸包括木蜡酸（C24）、蜡酸（C26）、蜂花酸（C30）；常见的醇包括鲸蜡醇（教材印为'C11'——已标记为可能的印刷错误，见coverageNote）、蜂蜡醇（C22）、蜂花醇（C30）。常见的例子是蜂蜡，即蜂花棕榈酸酯：CH3(CH2)28CH2-O-CO-(CH2)14CH3。蜡完全不溶于水，对水解非常稳定。蜡对动物不可消化，因为脂肪酶不能作用于它们，但可被酯酶（植物和微生物特有的水解酶）分解。蜡在自然界中分布极广（大多作为最终代谢产物），具有重要的保护功能：防止水分流失，并加固细胞及整个器官、组织和植物组织的表面。植物中蜡在叶片和果实上形成保护层；动物界已知的蜡包括羊毛脂（lanolin）、蜂蜡以及鲸蜡/龙涎香类物质（vorvaňovina）。天然蜡的熔点相当高，通常为50-85°C。"
  },
  mustKnow: { en: "Waxes solve the problem that oils pose: oils evaporate and wash away. Waxes do not evaporate, do not dissolve in water. They form the boundary between wet and dry.", cn: "蜡解决了油脂的问题：油会蒸发、会洗掉。蜡不蒸发、不溶于水。它们是湿润与干燥的边界。" },
  points: [
    { cz: "vosky (ceridy) = estery vyšších MK + vyšších alkoholů", en: "Waxes (ceridy) are usually a mixture of esters of higher fatty acids and higher alcohols.", cn: "蜡通常是高级脂肪酸与高级醇形成的酯的混合物。" },
    { cz: "MK ve voscích: lignocerová (C24), cerotová/vosková (C26), myriková (C30)", en: "Fatty acids often found in waxes: lignoceric acid (C24), cerotic ('wax') acid (C26), and myricic acid (C30).", cn: "蜡中常见的脂肪酸：木蜡酸（C24）、蜡酸（cerotová，C26）、蜂花酸（myriková，C30）。" },
    { cz: "alkoholy ve voscích: cetylalkohol (kniha tiskne C11 — pravděpodobná chyba tisku), cerylalkohol (C22), myricylalkohol (C30)", en: "Alcohols found in waxes: cetyl alcohol (the book prints 'C11' here — flagged in coverageNote as a probable print error, since cetyl alcohol is normally hexadecanol, C16), ceryl alcohol (C22), and myricyl alcohol (C30).", cn: "蜡中常见的醇：鲸蜡醇（教材此处印为'C11'——已在coverageNote中标记为可能的印刷错误，鲸蜡醇通常为十六醇，C16）、蜂蜡醇（C22）、蜂花醇（C30）。" },
    { cz: "včelí vosk = myricylpalmitát", en: "A common example of a wax is beeswax — myricyl palmitate, structural formula CH3(CH2)28CH2-O-CO-(CH2)14CH3 (a C30 myricyl-alcohol chain esterified to the C16 acyl group of palmitic acid).", cn: "常见蜡的例子是蜂蜡——蜂花棕榈酸酯，结构式为CH3(CH2)28CH2-O-CO-(CH2)14CH3（C30蜂花醇链与棕榈酸的C16酰基形成的酯）。" },
    { cz: "vosky: nerozpustné ve vodě, stabilní vůči hydrolýze", en: "Waxes are completely insoluble in water and very stable toward hydrolysis.", cn: "蜡完全不溶于水，对水解非常稳定。" },
    { cz: "nestravitelné pro živočichy (lipasy je neštěpí); štěpitelné cerasami (rostliny/mikroorganismy)", en: "Waxes are indigestible for animals because they are not attacked by lipases; however they ARE cleavable by cerases, specific hydrolases of plants and microorganisms.", cn: "蜡对动物不可消化，因为脂肪酶不能作用于它们；但可被酯酶（cerases，植物和微生物特有的水解酶）分解。" },
    { cz: "ochranná funkce: proti vysušení; listy/plody rostlin; lanolin, včelí vosk, vorvaňovina", en: "Waxes are very widely distributed in nature (most often as end metabolites) with an important protective function — they protect against desiccation and reinforce the surface of cells and of whole organs, tissues, and plant tissues (pletiv). In plants they form a protective layer on leaves and fruit; in the animal kingdom, known waxes include sheep's-wool wax (lanolin), beeswax, and spermaceti/ambergris (vorvaňovina).", cn: "蜡在自然界中分布极广（大多作为最终代谢产物），具有重要的保护功能——防止水分流失并加固细胞及整个器官、组织和植物组织的表面。植物中蜡在叶片和果实上形成保护层；动物界已知的蜡包括羊毛脂（羊毛蜡，lanolin）、蜂蜡以及鲸蜡/龙涎香类物质（vorvaňovina）。" },
    { cz: "body tání vosků: 50-85 °C", en: "The melting points of natural waxes are fairly high, typically in the range 50-85°C.", cn: "天然蜡的熔点相当高，通常在50-85°C范围内。" }
  ],
  terms: [
    { cz: "vosk / cerid", en: "wax / ceride", cn: "蜡", def_en: "Usually a mixture of esters of higher fatty acids and higher alcohols; water-insoluble, hydrolysis-stable, indigestible by animal lipases but cleavable by plant/microbial cerases; melting points typically 50-85°C.", def_cn: "通常是高级脂肪酸与高级醇形成的酯的混合物；不溶于水，对水解稳定，不能被动物脂肪酶消化但可被植物/微生物的酯酶分解；熔点通常为50-85°C。" },
    { cz: "cerasa", en: "cerase", cn: "酯酶（蜡酯酶）", def_en: "A specific hydrolase of plants and microorganisms that cleaves waxes — unlike animal lipases, which cannot attack them.", def_cn: "植物和微生物特有的一种水解酶，可分解蜡——而动物的脂肪酶不能作用于蜡。" },
    { cz: "lanolin", en: "lanolin", cn: "羊毛脂", def_en: "The wax of sheep's wool, given by the book as an example of an animal wax.", def_cn: "羊毛中的蜡，教材举为动物蜡的例子。" },
    { cz: "myricylpalmitát", en: "myricyl palmitate", cn: "蜂花棕榈酸酯", def_en: "The book's example of a common wax (beeswax): myricyl alcohol (C30) esterified with palmitic acid (C16).", def_cn: "教材中常见蜡（蜂蜡）的例子：蜂花醇（C30）与棕榈酸（C16）形成的酯。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why are waxes indigestible for animals, per the book?",
      q_cn: "根据教材，蜡为何不能被动物消化？",
      options: ["Because they are not attacked by lipases (though they ARE cleavable by cerases, specific plant/microbial hydrolases)", "Because they carry a terminal sialic acid, and no animal hydrolase can remove it before the ester is reached", "Because their melting point of 50-85 C keeps them solid at body temperature, out of reach of any enzyme", "Because they are esters of a higher alcohol rather than of glycerol, and an ester of that kind cannot be hydrolysed at all"],
      answer: 0,
      optionRefs: { 1: "8-2-3-4", 2: "L-10-1-1", 3: "8-2-2-1" },
      optionNotes: {
        1: { en: "Sialic acid belongs to the gangliosides, which are complex lipids; a wax is nothing but a higher fatty acid esterified to a higher alcohol and has no sugar of any kind on it.", cn: "Sialic acid 是 ganglioside 的东西，属于 complex lipid；wax 只是高级脂肪酸与高级醇成的酯，上面根本没有任何糖。" },
        2: { en: "The 50-85 C melting range is real and the book gives it, but it is not the reason offered for indigestibility. Cerases cleave the same solid wax, which shows the barrier is enzyme specificity, not physical state.", cn: "50-85 C 这个熔点范围教材确实给了，但它不是教材解释「不可消化」的理由。Cerase 照样能切开同样是固态的 wax，可见障碍在酶的专一性，不在物理状态。" },
        3: { en: "The first half is right - the alcohol is a higher one such as cetyl, ceryl or myricyl alcohol, not glycerol - but the conclusion is not: cerases, the specific hydrolases of plants and microorganisms, do cleave that ester.", cn: "前半句没错——wax 里的醇是 cetyl、ceryl、myricyl 这类高级醇，不是 glycerol——但结论不对：植物和微生物特有的水解酶 cerase 就能切开这种酯。" }
      },
      why_en: "The book states waxes are indigestible for animals specifically because lipases do not attack them; however they are cleavable by cerases, hydrolases specific to plants and microorganisms — melting point and cellulose-likeness are not the book's stated reasons.",
      why_cn: "教材指出，蜡对动物不可消化，具体原因是脂肪酶不能作用于它们；但蜡可被植物和微生物特有的水解酶——酯酶（cerases）分解。熔点或与纤维素的相似性并非教材给出的原因。"
    },
    {
      type: "mcq",
      q_en: "What is beeswax, per the book's own example, and what are its two components?",
      q_cn: "根据教材给出的例子，蜂蜡是什么？它由哪两种成分组成？",
      options: ["Myricyl palmitate — myricyl alcohol (C30) esterified with palmitic acid (C16)", "Cetyl palmitate - cetyl alcohol esterified with the C16 acyl group of palmitic acid", "Ceryl cerotate - ceryl alcohol (C22) esterified with cerotic or wax acid (C26)", "Tripalmitin - glycerol esterified with three chains of palmitic acid (C16)"],
      answer: 0,
      optionRefs: { 3: "8-2-2-1" },
      optionNotes: {
        1: { en: "Cetyl alcohol is on the book's list of wax alcohols, so this is a plausible wax, but the book's beeswax formula CH3(CH2)28CH2-O-CO-(CH2)14CH3 begins with a C30 chain: the alcohol is myricyl, not cetyl.", cn: "Cetyl alcohol 确实在教材列的 wax 醇里，所以这是个说得通的 wax，但教材给蜂蜡的结构式 CH3(CH2)28CH2-O-CO-(CH2)14CH3 开头是 C30 链：那个醇是 myricyl，不是 cetyl。" },
        2: { en: "Both components are on the book's lists - ceryl alcohol C22 among the alcohols, cerotic (wax) acid C26 among the acids - so the pair is a chemically sensible wax, just not the example the book names for beeswax.", cn: "两个组分都在教材的清单上——醇里有 C22 的 ceryl alcohol，酸里有 C26 的 cerotic（wax）acid——所以这个组合化学上讲得通，只是教材说蜂蜡时举的不是它。" },
        3: { en: "Three fatty acids on a glycerol backbone is a triacylglycerol, the other simple-lipid class. A wax esterifies its fatty acid to a HIGHER alcohol, which is exactly what separates the two classes.", cn: "三条脂肪酸挂在 glycerol 上，那是 triacylglycerol，是 simple lipid 的另一类。Wax 的脂肪酸接的是高级醇——这正是两类的分界。" }
      },
      why_en: "The book names beeswax as myricylpalmitát, with the structural formula CH3(CH2)28CH2-O-CO-(CH2)14CH3 — a C30 myricyl-alcohol chain esterified to the C16 acyl group of palmitic acid, not any of the other combinations listed.",
      why_cn: "教材将蜂蜡命名为myricylpalmitát，其结构式为CH3(CH2)28CH2-O-CO-(CH2)14CH3——即C30蜂花醇链与棕榈酸的C16酰基形成的酯，而非其他选项中的组合。"
    },
    {
      type: "short",
      q_en: "Describe the general properties of waxes (solubility, hydrolysis stability, digestibility) and their main biological/protective role, per the book.",
      q_cn: "根据教材，描述蜡的一般性质（溶解性、水解稳定性、可消化性）及其主要的生物学/保护作用。",
      accept: ["insoluble", "water", "stable", "hydrolysis", "indigestible", "lipase", "cerase", "protective", "desiccation", "不溶", "稳定", "水解", "不可消化", "保护", "脱水"],
      answer_en: "Waxes are completely water-insoluble and very stable to hydrolysis; indigestible by animals (not attacked by lipases) but cleavable by cerases (plant/microbial hydrolases). Their main role is protective — guarding against desiccation and reinforcing cell/organ/tissue surfaces, e.g. as a leaf/fruit coating in plants or as lanolin/beeswax/spermaceti in animals.",
      answer_cn: "蜡完全不溶于水，对水解非常稳定；不能被动物消化（脂肪酶不能作用），但可被酯酶（植物/微生物的水解酶）分解。其主要作用是保护性的——防止水分流失并加固细胞/器官/组织表面，例如植物叶片/果实的覆盖层，或动物体内的羊毛脂/蜂蜡/鲸蜡。"
    }
  ],
  oral: {
    q_en: "Describe what waxes are made of, their key physical/chemical properties, and their biological role, per the book.",
    q_cn: "请描述蜡的组成、主要理化性质及其生物学作用（依据教材）。",
    model_en: "Waxes, or ceridy, are usually a mixture of esters formed between higher fatty acids and higher alcohols. On the acid side the book names lignoceric acid at 24 carbons, cerotic — also called wax — acid at 26, and myricic acid at 30; on the alcohol side it names cetyl alcohol, ceryl alcohol at 22 carbons, and myricyl alcohol at 30. A very concrete, common example is beeswax, which is myricyl palmitate — that C30 myricyl alcohol chain esterified to the 16-carbon acyl group from palmitic acid. Physically, waxes are completely insoluble in water and extremely stable toward hydrolysis. That stability actually makes them indigestible for animals, since animal lipases simply don't attack them — but plants and microorganisms have their own specific hydrolases, called cerases, that can cleave waxes just fine. Biologically, waxes are extremely widespread, usually showing up as end metabolites, and they play an important protective role: they guard against desiccation and reinforce the surface of cells and of whole organs, tissues, and plant structures. In plants that shows up as the protective coating on leaves and fruit; in animals, well-known examples are lanolin, the wax of sheep's wool, beeswax itself, and spermaceti or ambergris from whales. Because of all that structural stability, natural waxes also have fairly high melting points, typically somewhere between 50 and 85 degrees Celsius.",
    checklist: [
      "Defined waxes as esters of higher fatty acids + higher alcohols",
      "Named at least 2 component acids and 2 component alcohols with carbon counts",
      "Gave the beeswax/myricyl palmitate example with its two components",
      "Stated water-insolubility and hydrolysis stability",
      "Explained why waxes are indigestible for animals but cleavable by cerases",
      "Described the protective biological role and named at least 2 examples (plant or animal)",
      "Gave the typical melting-point range (50-85°C)"
    ]
  }
},

{
  id: "8-2-3",
  book: "cz",
  topicKey: "membrane-lipids",
  chapter: 8,
  section: "8.2.3",
  czTitle: "Složené lipidy — Glykoacylglyceroly (úvod)",
  enTitle: "Complex lipids — Glycoacylglycerols (introduction)",
  cnTitle: "复合脂质——糖酰基甘油（导论）",
  pages: [179],
  coverage: "full",
  coverageNote: "BOUNDARY NODE — read this before drafting p.180 onward. The '8.2.3 Složené lipidy' heading and its first named subsection, 'Glykoacylglyceroly', read in full on page 179 — this is where page 179, and this drafting agent's assigned range (pp.176-179), ENDS. Content verified: the one-sentence introduction (glycoacylglycerols are the main lipid component of plant membranes, specifically the thylakoid membranes in chloroplasts where the photosynthetic apparatus is located) naming three specific compounds — monogalaktosyldiacylglycerol (MGDG), digalaktosyldiacylglycerol (DGDG), and sulfochinovosyldiacylglycerol (SL, sulfoquinovosyldiacylglycerol) — followed immediately by a boxed structural-formula figure with NO further caption text below it. The figure (re-read at 1.3x zoom) shows, for EACH of the three compounds, TWO structural variants side by side, differing in which fatty acid occupies which of the two acyl-chain positions on the glycerol backbone: MGDG (single galactose head group) — variant 1 has chains 16:3/18:3, variant 2 has chains 18:3/18:3, with a small italic arrow-label near variant 2 pointing at the glycerol backbone (the exact character is hard to resolve at this scan resolution — it reads as a Greek letter, possibly β — reported here as observed rather than guessed at, since the book gives no caption explaining it); DGDG (digalactose head group, two stacked sugar rings) — variant 1 has chains 16:0/18:3, variant 2 has chains 18:3/16:0; SL (sulfoquinovose head group, drawn as CH2-SO3⁻) — variant 1 has chains 16:0/18:3, variant 2 has chains 18:3/16:0. THIS FIGURE, with the page number '179' printed below it, is the literal last content on the page — there is no running text after it (a faint mirror-image bleed-through of text from the reverse side of the physical page is visible in the raw scan above the '8.2.3' heading; this is a scanning artifact, not actual page-179 content, and has been excluded). Page 180 (outside this node's/this agent's range) most likely continues either with more prose about these three glycolipids or moves on to the next composed-lipid subsection named in Tab. 8.1's row 4, 'Fosfoacylglyceroly' — the next agent covering p.180 should check the very top of that page for a continuation sentence before treating 'Glykoacylglyceroly' as fully closed out by this node, and should NOT assume this node already captured everything the book says about MGDG/DGDG/SL.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Glycoacylglycerols are the main lipid component of plant membranes, specifically the thylakoid membranes in chloroplasts where the photosynthetic apparatus is located. Three specific compounds are named: monogalactosyldiacylglycerol (MGDG), digalactosyldiacylglycerol (DGDG), and sulfoquinovosyldiacylglycerol (SL). A boxed figure follows immediately, showing two structural variants of each: MGDG with fatty-acyl chains 16:3/18:3 in one variant and 18:3/18:3 in the other; DGDG (two galactose units) with chains 16:0/18:3 in one variant and 18:3/16:0 in the other; and SL (a sulfoquinovose head group written as CH2-SO3⁻) with chains 16:0/18:3 in one variant and 18:3/16:0 in the other. This figure is the last thing on page 179 — no further running text follows before the page number, and the topic (and the wider 8.2.3 'Složené lipidy' section) continues onto page 180, outside this drafting range.",
    cn: "糖酰基甘油是植物膜（尤其是叶绿体中承载光合作用装置的类囊体膜）的主要脂质成分。教材命名了三种具体化合物：单半乳糖二酰基甘油（MGDG）、双半乳糖二酰基甘油（DGDG）和磺基喹诺糖二酰基甘油（SL）。紧接着是一幅方框图，展示了每种化合物的两种结构变体：MGDG的一种变体脂酰链为16:3/18:3，另一种为18:3/18:3；DGDG（含两个半乳糖单位）的一种变体链为16:0/18:3，另一种为18:3/16:0；SL（磺基喹诺糖头基，写作CH2-SO3⁻）的一种变体链为16:0/18:3，另一种为18:3/16:0。这幅图是第179页的最后内容——图后再无正文直至页码，该主题（以及更广泛的8.2.3'复合脂质'一节）延续到第180页，不在本次撰写范围内。"
  },
  mustKnow: { en: "These are the PLANT membrane's lipids, not the animal one's: MGDG, DGDG and the sulfur-bearing SL are the main lipid component of the chloroplast thylakoid, where the photosynthetic apparatus sits. The head group is a sugar — one galactose, two, or sulfoquinovose — and there is no phosphate anywhere in them.", cn: "这一节讲的是**植物**膜的脂质，不是动物的：MGDG、DGDG 和带硫的 SL 是叶绿体 thylakoid 膜的主要脂质成分，光合装置就在那层膜上。它们的头部是糖——一个 galactose、两个，或者 sulfoquinovose——整个分子里没有磷酸。" },
  points: [
    { cz: "glykoacylglyceroly = hlavní lipidy rostlinných (thylakoidních) membrán", en: "Glycoacylglycerols are the main lipid component of plant membranes, specifically the thylakoid membranes in chloroplasts, where the photosynthetic apparatus is located.", cn: "糖酰基甘油是植物膜（尤其是叶绿体中承载光合作用装置的类囊体膜）的主要脂质成分。" },
    { cz: "3 typy: MGDG, DGDG, SL", en: "Three specific glycoacylglycerols are named: monogalactosyldiacylglycerol (MGDG), digalactosyldiacylglycerol (DGDG), and sulfoquinovosyldiacylglycerol (SL).", cn: "教材命名了三种糖酰基甘油：单半乳糖二酰基甘油（MGDG）、双半乳糖二酰基甘油（DGDG）和磺基喹诺糖二酰基甘油（SL）。" },
    { cz: "MGDG = 1 galaktosa; obrázek ukazuje 2 varianty (16:3/18:3 a 18:3/18:3)", en: "MGDG carries a single galactose head group. The figure shows two structural variants: one with fatty-acyl chains 16:3 and 18:3, another with chains 18:3 and 18:3 (an unlabeled arrow near this second variant appears to mark a specific position on the glycerol backbone, but the book gives no caption explaining it).", cn: "MGDG带有一个半乳糖头基。图中展示了两种结构变体：一种脂酰链为16:3和18:3，另一种为18:3和18:3（第二种变体旁有一个未加说明的箭头标记，似乎指向甘油骨架上的某个特定位置，但教材未给出图注解释）。" },
    { cz: "DGDG = 2 galaktosy; obrázek ukazuje 2 varianty (16:0/18:3 a 18:3/16:0)", en: "DGDG carries two stacked galactose units. The figure shows two variants: chains 16:0/18:3, and chains 18:3/16:0 (the two acyl positions swapped).", cn: "DGDG带有两个相连的半乳糖单位。图中展示两种变体：脂酰链16:0/18:3，以及18:3/16:0（两个酰基位置互换）。" },
    { cz: "SL = sulfochinovosa (CH2-SO3⁻); obrázek ukazuje 2 varianty (16:0/18:3 a 18:3/16:0)", en: "SL carries a sulfoquinovose head group, drawn with a CH2-SO3⁻ group. The figure shows two variants: chains 16:0/18:3, and chains 18:3/16:0.", cn: "SL带有磺基喹诺糖头基，图中以CH2-SO3⁻表示。图中展示两种变体：脂酰链16:0/18:3，以及18:3/16:0。" },
    { cz: "str. 179 končí touto figurou — text pokračuje na str. 180 (mimo rozsah)", en: "This boxed figure is the last content on page 179 — no running text follows it before the page number. The 8.2.3/Glykoacylglyceroly discussion may well continue onto page 180, which is outside this node's range; the next node covering p.180 should not assume the topic is fully closed out here.", cn: "这个方框图是第179页的最后内容——图后再无正文，直至页码。8.2.3节'糖酰基甘油'的讨论很可能延续到第180页（不在本节点范围内）——覆盖第180页的下一节点不应假定该主题已在此完整覆盖。" }
  ],
  terms: [
    { cz: "glykoacylglycerol", en: "glycoacylglycerol", cn: "糖酰基甘油", def_en: "A complex-lipid class combining a carbohydrate head group with a diacylglycerol backbone; the main lipid component of plant thylakoid membranes. MGDG, DGDG, and SL are the three named examples.", def_cn: "一类复合脂质，由糖头基与二酰基甘油骨架组成；是植物类囊体膜的主要脂质成分。MGDG、DGDG和SL是教材举出的三个例子。" },
    { cz: "MGDG (monogalaktosyldiacylglycerol)", en: "MGDG (monogalactosyldiacylglycerol)", cn: "MGDG（单半乳糖二酰基甘油）", def_en: "A glycoacylglycerol with a single galactose head group; shown in two fatty-acid variants, 16:3/18:3 and 18:3/18:3.", def_cn: "带有单个半乳糖头基的糖酰基甘油；图中展示两种脂肪酸变体：16:3/18:3和18:3/18:3。" },
    { cz: "DGDG (digalaktosyldiacylglycerol)", en: "DGDG (digalactosyldiacylglycerol)", cn: "DGDG（双半乳糖二酰基甘油）", def_en: "A glycoacylglycerol with two stacked galactose units; shown in two fatty-acid variants, 16:0/18:3 and 18:3/16:0.", def_cn: "带有两个相连半乳糖单位的糖酰基甘油；图中展示两种脂肪酸变体：16:0/18:3和18:3/16:0。" },
    { cz: "SL (sulfochinovosyldiacylglycerol)", en: "SL (sulfoquinovosyldiacylglycerol)", cn: "SL（磺基喹诺糖二酰基甘油）", def_en: "A glycoacylglycerol with a sulfoquinovose (CH2-SO3⁻) head group; shown in two fatty-acid variants, 16:0/18:3 and 18:3/16:0.", def_cn: "带有磺基喹诺糖（CH2-SO3⁻）头基的糖酰基甘油；图中展示两种脂肪酸变体：16:0/18:3和18:3/16:0。" },
    { cz: "thylakoidní membrána", en: "thylakoid membrane", cn: "类囊体膜", def_en: "The chloroplast membrane system where the photosynthetic apparatus is located; glycoacylglycerols (MGDG, DGDG, SL) are its main lipid components.", def_cn: "叶绿体中承载光合作用装置的膜系统；糖酰基甘油（MGDG、DGDG、SL）是其主要脂质成分。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Where does the book say glycoacylglycerols are mainly found?",
      q_cn: "根据教材，糖酰基甘油主要存在于哪里？",
      options: [
        "Plant membranes, specifically the thylakoid membranes of chloroplasts",
        "Animal cell membranes, specifically the inner membrane of the mitochondrion",
        "Bacterial cell walls, where they take the place of the phospholipid layer",
        "Red blood cell membranes, where they stand in for sphingomyelin"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-4-1", 3: "8-2-3-3" },
      optionNotes: {
        1: { en: "The inner mitochondrial membrane is where the respiratory chain and ATP synthase sit. The thylakoid is the chloroplast's counterpart to it, and it is the thylakoid, not the mitochondrion, that these lipids build.", cn: "线粒体内膜是 respiratory chain 和 ATP synthase 所在的地方。Thylakoid 是叶绿体里与之对应的膜，而这些脂类构建的是 thylakoid，不是线粒体。" },
        2: { en: "The book makes a positive statement about plants and names no bacterial occurrence at all. What the figure draws is a diacylglycerol with a sugar head group — galactose or sulfoquinovose — not a cell-wall polymer.", cn: "教材给的是关于植物的正面陈述，完全没有提到细菌。图上画的是一个带糖头基（galactose 或 sulfoquinovose）的 diacylglycerol，不是细胞壁的聚合物。" },
        3: { en: "Sphingomyelin is the lipid of nerve cell membranes and brain tissue, above all the myelin sheaths of axons; neither it nor the glycoacylglycerols are placed in red cells here.", cn: "Sphingomyelin 是神经细胞膜和脑组织的脂类，尤其是轴突的髓鞘；这里既没把它、也没把 glycoacylglycerol 安在红细胞上。" }
      },
      why_en: "The book states glycoacylglycerols are the main lipid component of plant membranes, specifically the thylakoid membranes in chloroplasts where the photosynthetic apparatus is located — not animal mitochondria, bacterial walls, or red blood cells.",
      why_cn: "教材指出，糖酰基甘油是植物膜的主要脂质成分，尤其是叶绿体中承载光合作用装置的类囊体膜——而非动物线粒体膜、细菌细胞壁或人类红细胞膜。"
    },
    {
      type: "mcq",
      q_en: "Which of the three named glycoacylglycerols carries a sulfate-like head group?",
      q_cn: "教材命名的三种糖酰基甘油中，哪一种带有类似硫酸盐的头基？",
      options: ["SL (sulfoquinovosyldiacylglycerol), with a CH2-SO3⁻ group", "MGDG (monogalactosyldiacylglycerol)", "DGDG (digalactosyldiacylglycerol)", "None of the three — all three head groups are plain sugars"],
      answer: 0,
      optionNotes: {
        1: { en: "MGDG carries a single galactose — one plain sugar head group, with no sulfur anywhere in it. The figure shows it in two variants, with 16:3/18:3 and with 18:3/18:3 acyl chains.", cn: "MGDG 带一个 galactose——一个普通的糖头基，里面没有任何硫。图上给了两个变体，酰基链分别是 16:3/18:3 和 18:3/18:3。" },
        2: { en: "DGDG carries two stacked galactose units, again plain sugars with no sulfur. The name itself counts them: mono- for one galactose, di- for two.", cn: "DGDG 带两个叠在一起的 galactose，同样是普通的糖、不含硫。名字本身就在数：mono- 是一个 galactose，di- 是两个。" },
        3: { en: "Two of the three are indeed plain sugars, but the third is not. Sulfoquinovose is drawn with a CH2-SO3⁻ group, and that sulfonate is what makes SL the odd one out among the three.", cn: "三个里确实有两个是普通的糖，但第三个不是。Sulfoquinovose 画的时候带一个 CH2-SO3⁻ 基团，正是这个磺酸基让 SL 在三者中与众不同。" }
      },
      why_en: "The figure draws SL with a sulfoquinovose head group written as CH2-SO3⁻ — a sulfonated sugar — distinguishing it from MGDG and DGDG, whose head groups are one and two plain galactose units respectively.",
      why_cn: "图中SL的头基为磺基喹诺糖，写作CH2-SO3⁻——一种磺化糖，区别于MGDG和DGDG（其头基分别为一个和两个普通半乳糖单位）。"
    },
    {
      type: "short",
      q_en: "Name the three glycoacylglycerols introduced at the start of section 8.2.3, and describe each one's head group.",
      q_cn: "写出8.2.3节开头介绍的三种糖酰基甘油，并描述各自的头基。",
      accept: ["MGDG", "DGDG", "SL", "galactose", "sulfoquinovose", "半乳糖", "磺基喹诺糖"],
      answer_en: "MGDG (monogalactosyldiacylglycerol) — one galactose head group. DGDG (digalactosyldiacylglycerol) — two galactose units. SL (sulfoquinovosyldiacylglycerol) — a sulfoquinovose (CH2-SO3⁻) head group.",
      answer_cn: "MGDG（单半乳糖二酰基甘油）——一个半乳糖头基。DGDG（双半乳糖二酰基甘油）——两个半乳糖单位。SL（磺基喹诺糖二酰基甘油）——磺基喹诺糖（CH2-SO3⁻）头基。"
    }
  ],
  oral: {
    q_en: "Introduce glycoacylglycerols: where they are found and what the three named examples are.",
    q_cn: "请介绍糖酰基甘油：它们存在于何处，以及教材命名的三个具体例子是什么。",
    model_en: "Glycoacylglycerols are the main lipid component of plant membranes — specifically the thylakoid membranes inside chloroplasts, which is where the photosynthetic apparatus actually sits. The book names three of them. Monogalactosyldiacylglycerol, or MGDG, carries a single galactose as its head group, and the book's figure shows it in two forms, one with a 16:3 and an 18:3 fatty-acyl chain, another with two 18:3 chains. Digalactosyldiacylglycerol, DGDG, has two galactose units stacked together as its head group, again shown in two variants that just swap which position carries the 16:0 chain and which carries the 18:3 chain. And sulfoquinovosyldiacylglycerol, SL, is the odd one out structurally — its head group is a sulfoquinovose, drawn with a CH2-SO3⁻ group instead of a plain sugar — and it's likewise shown in two variants with the 16:0/18:3 positions swapped. That boxed figure is actually the very last thing on the page I read, so I'd want to check the next page before saying anything more about these three compounds — the book may well have more to say about them right after this.",
    checklist: [
      "Stated where glycoacylglycerols are found (plant thylakoid membranes)",
      "Named all three: MGDG, DGDG, SL",
      "Described each head group (1 galactose / 2 galactose / sulfoquinovose)",
      "Noted the figure shows 2 fatty-acid variants per compound",
      "Flagged that page 179 ends here and the topic continues on p.180"
    ]
  }
},

{
  id: "8-2-3-2",
  book: "cz",
  topicKey: "membrane-lipids",
  chapter: 8,
  section: "8.2.3",
  czTitle: "Fosfoacylglyceroly (fosfolipidy)",
  enTitle: "Phosphoacylglycerols (phospholipids)",
  cnTitle: "磷脂酰甘油酯（磷脂）",
  pages: [180, 181],
  coverage: "full",
  coverageNote: "Page 180 read in full: the 'Fosfoacylglyceroly (fosfolipidy)' heading and its opening framing (phospholipids as the most abundant complex lipids in nature, chiefly as biological-membrane components), the phosphatidic-acid structure diagram (glycerol esterified with two fatty acyls R1/R2 plus phosphate — the simplest phospholipid and precursor of all others), the general phospholipid structure diagram with its bracket-labels 'ionizovatelná polární hydrofilní hlava' (ionizable polar hydrophilic head) over the phosphate+R portion and 'neionizovatelný nepolární hydrofobní ocas' (non-ionizable nonpolar hydrophobic tail) over the two acyl chains, and the full R-group table naming phosphatidylethanolamine (PE), phosphatidylcholine (PC), phosphatidylserine (PS), phosphatidylglycerol (PG), diphosphatidylglycerol (DPG), and phosphatidylinositol (PI) with each one's exact R formula/structure. Page 181's first paragraph (up to the 'Sfingolipidy' heading) also read in full: the position-1-saturated/position-2-unsaturated fatty-acid convention, the amphipathic-character explanation, and the note that choline/ethanolamine/serine can carry charge at physiological pH.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Phospholipids (fosfolipidy) are the most abundant representatives of complex lipids in nature, occurring above all as components of biological membranes of every type. The simplest phospholipid, and the precursor of all the others, is phosphatidic acid: a glycerol backbone esterified at two positions with fatty acids (acyl groups R1 and R2) and at the third position with phosphoric acid. Individual phospholipids differ from one another only in which functional group R is attached to phosphatidic acid via a phosphoester bond — the book tabulates six: phosphatidylethanolamine (PE, R = -O-CH2CH2NH3+), phosphatidylcholine (PC, R = -O-CH2CH2N+(CH3)3), phosphatidylserine (PS, R = -O-CH2CH(NH3+)COO-), phosphatidylglycerol (PG, R = -O-CH2CH(OH)CH2OH), diphosphatidylglycerol (DPG, effectively two phosphatidic-acid units bridged through a central glycerol), and phosphatidylinositol (PI, R = the cyclic polyol inositol attached via a phosphoester). In natural phospholipids, position 2 of the glycerol typically carries an UNSATURATED fatty acid and position 1 a SATURATED one. Every phospholipid molecule shows two clearly distinct regions: a nonpolar, hydrophobic region built from the fatty acids (the 'tail'), and a polar, hydrophilic region built from glycerol, phosphoric acid, and the R functional group (the 'head'). This dual character is called AMPHIPATHY, and phospholipids are amphipathic compounds. The amphipathic character contributed by the bare acylglycerol part of the molecule is very weak; the dominant contribution comes from the functional groups, several of which — choline, ethanolamine, serine — can carry an electric charge at physiological pH, which plays a very significant role in how phospholipids carry out their biological function in membranes.",
    cn: "磷脂是自然界中最丰富的复合脂质代表，主要作为各类生物膜的组分存在。最简单的磷脂、也是其余磷脂的前体，是磷脂酸：甘油骨架的两个位置被脂肪酸（酰基R1和R2）酯化，第三个位置被磷酸酯化。各种磷脂之间的区别仅在于通过磷酸酯键连接到磷脂酸上的功能基团R不同——教材列出六种：磷脂酰乙醇胺（PE，R = -O-CH2CH2NH3+）、磷脂酰胆碱（PC，R = -O-CH2CH2N+(CH3)3）、磷脂酰丝氨酸（PS，R = -O-CH2CH(NH3+)COO-）、磷脂酰甘油（PG，R = -O-CH2CH(OH)CH2OH）、二磷脂酰甘油（DPG，实质上是两个磷脂酸单元通过中央甘油桥连而成）、以及磷脂酰肌醇（PI，R为通过磷酸酯键连接的环状多元醇肌醇）。在天然磷脂中，甘油的2位通常连接不饱和脂肪酸，1位连接饱和脂肪酸。每个磷脂分子都表现出两个明显不同的区域：由脂肪酸构成的非极性疏水区（“尾部”），以及由甘油、磷酸和R功能基团构成的极性亲水区（“头部”）。这种双重性质称为两亲性，磷脂就是两亲性化合物。单纯酰基甘油部分对两亲性的贡献很弱，主要贡献来自功能基团，其中若干种（胆碱、乙醇胺、丝氨酸）在生理pH下可携带电荷，这在磷脂于膜中发挥生物学功能时起着非常重要的作用。"
  },
  mustKnow: { en: "Phosphatidic acid is the parent: every other phospholipid differs from it only in the group R hung on the phosphate. And the amphipathy that makes a membrane possible comes almost entirely from that head group — the book is explicit that the acylglycerol part contributes very little on its own. Position 1 saturated, position 2 unsaturated, as a rule.", cn: "phosphatidic acid 是母体：其余所有 phospholipid 与它的差别，只在磷酸上挂的那个 R 基团。而让膜得以成立的 amphipathy，几乎全部来自这个头部基团——教材明确指出 acylglycerol 部分自身的贡献很弱。位置 1 通常接饱和脂肪酸，位置 2 接不饱和脂肪酸。" },
  points: [
    { cz: "fosfolipidy = nejhojnější složené lipidy", en: "Phospholipids are the most abundant representatives of complex lipids in nature, occurring chiefly as components of biological membranes of every type.", cn: "磷脂是自然界中最丰富的复合脂质代表，主要作为各类生物膜的组分存在。" },
    { cz: "kyselina fosfatidová = nejjednodušší fosfolipid, prekurzor ostatních", en: "The simplest phospholipid, and the precursor of all other phospholipids, is PHOSPHATIDIC ACID: a glycerol backbone esterified with two fatty-acid acyl groups (R1, R2) at two positions and with phosphoric acid at the third.", cn: "最简单的磷脂、也是其余磷脂的前体，是磷脂酸：甘油骨架两个位置被两个脂肪酸酰基（R1、R2）酯化，第三个位置被磷酸酯化。" },
    { cz: "poloha 2 = nenasycená MK, poloha 1 = nasycená MK", en: "In natural phospholipids, position 2 of the glycerol is, as a rule, bound to an UNSATURATED fatty acid, while position 1 carries a SATURATED fatty acid.", cn: "在天然磷脂中，甘油的2位通常连接不饱和脂肪酸，而1位连接饱和脂肪酸。" },
    { cz: "hlava (polární, ionizovatelná) vs. ocas (nepolární)", en: "The molecule shows two clearly distinct regions: a nonpolar, hydrophobic region represented by the fatty acids (the two acyl chains — the 'tail'), and a polar, hydrophilic region represented by glycerol, phosphoric acid, and the attached R group (the 'head', which the book explicitly labels ionizable/polar).", cn: "分子显示出两个明显不同的区域：由脂肪酸（两条酰基链）代表的非极性疏水区（“尾部”），以及由甘油、磷酸和所连R基团代表的极性亲水区（“头部”，教材明确将其标注为可解离/极性）。" },
    { cz: "amfipatie", en: "This dual character is called AMPHIPATHY (amfipatie); phospholipids are amphipathic compounds.", cn: "这种双重性质称为两亲性；磷脂就是两亲性化合物。" },
    { cz: "R = ethanolamin (PE), cholin (PC), serin (PS), glycerol (PG), fosfatidová jednotka (DPG), inositol (PI)", en: "Phospholipids differ from one another only in the functional group R attached to phosphatidic acid by a phosphoester bond. The book tabulates: PHOSPHATIDYLETHANOLAMINE (PE), R = -O-CH2CH2N+H3; PHOSPHATIDYLCHOLINE (PC), R = -O-CH2CH2N+(CH3)3; PHOSPHATIDYLSERINE (PS), R = -O-CH2CH(+NH3)COO-; PHOSPHATIDYLGLYCEROL (PG), R = -O-CH2CH(OH)CH2OH; DIPHOSPHATIDYLGLYCEROL (DPG), where R is a second complete phosphatidic-acid unit joined through a bridging glycerol (i.e. two phosphatidic acids linked via a central glycerol — this is the compound elsewhere called cardiolipin, though the book itself uses only the name DPG here); and PHOSPHATIDYLINOSITOL (PI), where R is the cyclic six-carbon polyol inositol (drawn with five free hydroxyls) attached through a phosphoester.", cn: "磷脂之间的区别仅在于通过磷酸酯键连接到磷脂酸上的功能基团R。教材列表如下：磷脂酰乙醇胺（PE），R = -O-CH2CH2N+H3；磷脂酰胆碱（PC），R = -O-CH2CH2N+(CH3)3；磷脂酰丝氨酸（PS），R = -O-CH2CH(+NH3)COO-；磷脂酰甘油（PG），R = -O-CH2CH(OH)CH2OH；二磷脂酰甘油（DPG），其R为通过桥连甘油相连的第二个完整磷脂酸单元（即两个磷脂酸经中央甘油连接——此即通常所称的心磷脂，但教材此处仅用DPG这一名称）；以及磷脂酰肌醇（PI），其R为通过磷酸酯连接的环状六碳多元醇肌醇（图中画出五个游离羟基）。" },
    { cz: "amfipatický příspěvek acylglycerolu je slabý, hlavní podíl mají funkční skupiny", en: "The amphipathic character of the bare acylglycerol part of the molecule alone is very weak; the main contribution comes from the functional groups, several of which — choline, ethanolamine, serine — can carry an electric charge at physiological pH. This charge plays a very significant role in how phospholipids fulfil their biological function in biological membranes.", cn: "单纯酰基甘油部分本身对两亲性的贡献很弱，主要贡献来自功能基团，其中若干种——胆碱、乙醇胺、丝氨酸——在生理pH下可携带电荷。这种电荷在磷脂于生物膜中发挥生物学功能时起着非常重要的作用。" }
  ],
  terms: [
    { cz: "fosfolipid", en: "phospholipid", cn: "磷脂", def_en: "The most abundant class of complex lipids in nature, built on a phosphatidic-acid core and found chiefly as a biological-membrane component; amphipathic, with a hydrophilic head and hydrophobic tail.", def_cn: "自然界中最丰富的复合脂质类别，以磷脂酸为核心构建，主要作为生物膜组分存在；具有两亲性，兼具亲水头部和疏水尾部。" },
    { cz: "kyselina fosfatidová", en: "phosphatidic acid", cn: "磷脂酸", def_en: "Glycerol esterified with two fatty acids and one phosphoric acid; the simplest phospholipid and structural precursor of all others.", def_cn: "甘油被两个脂肪酸和一个磷酸酯化而成；是最简单的磷脂，也是其余各种磷脂的结构前体。" },
    { cz: "amfipatie", en: "amphipathy", cn: "两亲性", def_en: "The dual character of a molecule possessing both a distinct nonpolar/hydrophobic region and a distinct polar/hydrophilic region, as phospholipids do.", def_cn: "分子同时具有明显非极性/疏水区和明显极性/亲水区的双重性质，磷脂即具有这种性质。" },
    { cz: "fosfatidylcholin (PC) / fosfatidylethanolamin (PE) / fosfatidylserin (PS)", en: "phosphatidylcholine (PC) / phosphatidylethanolamine (PE) / phosphatidylserine (PS)", cn: "磷脂酰胆碱（PC）／磷脂酰乙醇胺（PE）／磷脂酰丝氨酸（PS）", def_en: "Three phosphatidic-acid derivatives distinguished by their head-group R (choline, ethanolamine, serine respectively); all three head groups can bear charge at physiological pH.", def_cn: "磷脂酸的三种衍生物，分别以头部基团R（胆碱、乙醇胺、丝氨酸）区分；这三种头部基团在生理pH下均可带电荷。" },
    { cz: "difosfatidylglycerol (DPG) / fosfatidylinositol (PI)", en: "diphosphatidylglycerol (DPG) / phosphatidylinositol (PI)", cn: "二磷脂酰甘油（DPG）／磷脂酰肌醇（PI）", def_en: "DPG: two phosphatidic-acid units bridged by a central glycerol. PI: phosphatidic acid whose R group is the cyclic polyol inositol.", def_cn: "DPG：两个磷脂酸单元通过中央甘油桥连而成。PI：磷脂酸的R基团为环状多元醇肌醇。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book's general phospholipid diagram, which part of the molecule is labelled the 'ionizable polar hydrophilic head', and which the 'non-ionizable nonpolar hydrophobic tail'?",
      q_cn: "根据教材的磷脂通用结构示意图，分子的哪一部分被标注为“可解离的极性亲水头部”，哪一部分被标注为“不可解离的非极性疏水尾部”？",
      options: [
        "Head = the two fatty-acid acyl chains; tail = the phosphate and the R group",
        "Head = the phosphate + R group; tail = the two fatty-acid acyl chains",
        "Head = glycerol on its own; tail = the phosphate group on its own",
        "Head and tail are not distinguished anywhere in this diagram"
      ],
      answer: 1,
      optionRefs: { 3: "8-5-2-1" },
      optionNotes: {
        0: { en: "Exactly reversed. The two acyl chains are the nonpolar, hydrophobic region; the polar, ionizable region is glycerol together with phosphoric acid and whatever R is attached to it.", cn: "正好反了。两条酰基链是非极性的疏水区；极性的、可电离的区域是 glycerol 加磷酸再加上接在它上面的 R。" },
        2: { en: "Glycerol is part of the polar region, but not the whole of it, and the phosphate is polar too rather than being the tail. The tail is the two acyl chains, and only them.", cn: "Glycerol 属于极性区，但不是极性区的全部；磷酸也是极性的，不是尾巴。尾巴就是那两条酰基链，仅此而已。" },
        3: { en: "The distinction is the whole point of the diagram. It is what the book calls amphipathy, and it is the property that lets phospholipids arrange themselves into a bilayer and form a membrane at all.", cn: "这个区分正是这张图的意义所在。教材称之为 amphipathy（两亲性），也正是这个性质让 phospholipid 能排成双层、组成膜。" }
      },
      why_en: "The diagram's bracket labels place the 'ionizable polar hydrophilic head' under the phosphate-plus-R portion of the molecule and the 'non-ionizable nonpolar hydrophobic tail' under the two fatty-acyl chains — the reverse of option 0.",
      why_cn: "图中的括号标注将“可解离的极性亲水头部”标在磷酸+R部分之下，将“不可解离的非极性疏水尾部”标在两条脂肪酰基链之下——与选项0正相反。"
    },
    {
      type: "mcq",
      q_en: "Per the book, what accounts for most of a phospholipid's amphipathic character — the bare acylglycerol skeleton, or the R functional group?",
      q_cn: "根据教材，磷脂两亲性的主要来源是什么——是单纯的酰基甘油骨架，还是R功能基团？",
      options: [
        "The bare acylglycerol skeleton contributes almost all of it, the R group only fine-tuning the head's size",
        "The R functional group contributes the main share, since groups like choline/ethanolamine/serine can carry charge at physiological pH",
        "Both contribute in equal measure, which is why phosphatidic acid, the parent of the whole family, is exactly as amphipathic as phosphatidylcholine",
        "Neither contributes; amphipathy comes from the difference in length between the fatty acids at positions 1 and 2"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The book says the opposite in so many words: the amphipathic character of the acylglycerol part on its own is very weak, and the main share comes from the functional groups hung on the phosphate.", cn: "教材的说法正好相反：单靠 acylglycerol 部分，两亲性很弱；主要的贡献来自挂在磷酸上的官能团。" },
        2: { en: "Phosphatidic acid is the simplest phospholipid and the precursor of all the others, and what it lacks is precisely an R group on the phosphate — so it is the one member of the family where the head contributes least.", cn: "Phosphatidic acid 是最简单的 phospholipid，也是其他所有 phospholipid 的前体，而它缺的恰恰就是磷酸上的那个 R——所以在这一族里，它正是头基贡献最小的那一个。" },
        3: { en: "Chain length is not what the book points to. It points to the electric charge that choline, ethanolamine and serine can carry at physiological pH, and says that charge matters a great deal for membrane function.", cn: "教材指向的不是链长。它指向的是 choline、ethanolamine、serine 在生理 pH 下可以带的电荷，并说这个电荷对膜功能的发挥关系重大。" }
      },
      why_en: "The book states the amphipathic character of the acylglycerol part alone is very weak (nevýrazný); the main contribution comes from the functional groups, some of which (choline, ethanolamine, serine) can bear a charge at physiological pH.",
      why_cn: "教材指出，单纯酰基甘油部分的两亲性贡献很弱；主要贡献来自功能基团，其中一些（胆碱、乙醇胺、丝氨酸）在生理pH下可携带电荷。"
    },
    {
      type: "short",
      q_en: "Name the six specific phospholipids the book distinguishes by their R group attached to phosphatidic acid, and give the functional group R actually is in each case.",
      q_cn: "写出教材根据连接到磷脂酸上的R基团区分的六种具体磷脂，并说明每种情况下R具体是什么基团。",
      accept: ["ethanolamine", "choline", "serine", "glycerol", "inositol", "diphosphatidylglycerol", "乙醇胺", "胆碱", "丝氨酸", "肌醇", "甘油"],
      answer_en: "Phosphatidylethanolamine (R = ethanolamine), phosphatidylcholine (R = choline), phosphatidylserine (R = serine), phosphatidylglycerol (R = glycerol), diphosphatidylglycerol (R = a second phosphatidic-acid unit bridged via glycerol), phosphatidylinositol (R = the cyclic polyol inositol).",
      answer_cn: "磷脂酰乙醇胺（R=乙醇胺）、磷脂酰胆碱（R=胆碱）、磷脂酰丝氨酸（R=丝氨酸）、磷脂酰甘油（R=甘油）、二磷脂酰甘油（R=经甘油桥连的第二个磷脂酸单元）、磷脂酰肌醇（R=环状多元醇肌醇）。"
    }
  ],
  oral: {
    q_en: "Describe the structure of phosphatidic acid and explain what makes phospholipids amphipathic.",
    q_cn: "描述磷脂酸的结构，并解释磷脂为什么具有两亲性。",
    model_en: "Phosphatidic acid is the simplest phospholipid and the structural precursor of every other one — it's a glycerol backbone esterified with two fatty acids at two of its positions and with phosphoric acid at the third. All the other named phospholipids are just phosphatidic acid with a different functional group R attached to that phosphate by a phosphoester bond: ethanolamine gives phosphatidylethanolamine, choline gives phosphatidylcholine, serine gives phosphatidylserine, a second glycerol gives phosphatidylglycerol, a whole second phosphatidic-acid unit bridged through glycerol gives diphosphatidylglycerol, and the cyclic polyol inositol gives phosphatidylinositol. Structurally, every phospholipid molecule has two very different regions: a nonpolar, hydrophobic tail made of the two fatty-acid chains, and a polar, hydrophilic head made of the glycerol, the phosphate, and that R group — and in nature position 2 of the glycerol usually carries the unsaturated fatty acid while position 1 carries the saturated one. Having both a hydrophobic and a hydrophilic region in one molecule is exactly what 'amphipathic' means, and the book is explicit that most of that character comes not from the fatty-acid/glycerol part, which is quite weak on its own, but from the functional group — choline, ethanolamine, and serine can all carry an electrical charge at physiological pH, and that charge is central to how phospholipids actually work in biological membranes.",
    checklist: [
      "Phosphatidic acid = glycerol + 2 fatty acids + phosphate; precursor of all phospholipids",
      "Position 2 unsaturated FA, position 1 saturated FA (natural phospholipids)",
      "Named the six R groups: ethanolamine, choline, serine, glycerol, a second phosphatidic acid (DPG), inositol",
      "Hydrophobic tail = 2 acyl chains; hydrophilic ionizable head = phosphate + R",
      "Amphipathy defined; main contribution from R group not the acylglycerol part",
      "Choline/ethanolamine/serine can carry charge at physiological pH"
    ]
  }
},

{
  id: "8-2-3-3",
  book: "cz",
  topicKey: "membrane-lipids",
  chapter: 8,
  section: "8.2.3",
  czTitle: "Sfingolipidy — sfingomyeliny",
  enTitle: "Sphingolipids — sphingomyelins",
  cnTitle: "鞘脂——鞘磷脂",
  pages: [181],
  coverage: "full",
  coverageNote: "Page 181's 'Sfingolipidy'/'Sfingomyeliny' section read in full directly against the scan, including the sphingosine structural formula, the three-part diagram (sphingosine -> ceramide/N-acylsphingosine -> sphingomyelin) with each intermediate's exact substituent, and the closing paragraph on sphingomyelin's amphipathic character, its similarity to phosphatidylcholine, and its tissue localization.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Sphingomyelins are composed of one fatty acid, choline, phosphoric acid, and sphingosine — the substances obtainable by complete hydrolysis of a sphingomyelin molecule. Sphingosine itself is an unsaturated, 18-carbon amino-dialcohol (structure: CH=CH(CH2)12CH3-CH(OH)-CH(NH2)-CH2OH). Although sphingosine carries two hydroxyl groups, the fatty acid is attached to the molecule through the AMINO group instead, forming an amide bond; the resulting compound is called CERAMIDE (N-acylsphingosine). Attaching a phosphorylcholine group to the ceramide's primary (terminal) hydroxyl by an ester bond then yields SPHINGOMYELIN. This molecule likewise has an amphipathic character, and in both molecular structure and physicochemical properties it closely resembles phosphatidylcholine. Sphingomyelin is found above all in the cell membranes of nerves and in brain tissue — specifically in the myelin sheaths of axons.",
    cn: "鞘磷脂由一分子脂肪酸、胆碱、磷酸和鞘氨醇组成——这些正是鞘磷脂分子完全水解后可得到的物质。鞘氨醇本身是一种不饱和的18碳氨基二元醇（结构为CH=CH(CH2)12CH3-CH(OH)-CH(NH2)-CH2OH）。虽然鞘氨醇含有两个羟基，脂肪酸却是通过氨基（而非羟基）连接到分子上，形成酰胺键；所得化合物称为神经酰胺（N-酰基鞘氨醇）。将磷酸胆碱基团通过酯键连接到神经酰胺的伯（末端）羟基上，即生成鞘磷脂。该分子同样具有两亲性，其分子结构和理化性质都与磷脂酰胆碱十分相似。鞘磷脂主要存在于神经细胞膜和脑组织中——具体而言是在轴突的髓鞘中。"
  },
  mustKnow: { en: "The fatty acid attaches to sphingosine through the AMINO group, not either of its two hydroxyls — an amide bond, and that is what makes a CERAMIDE. Hang phosphorylcholine on the terminal -CH2OH by an ester bond and you have sphingomyelin, which the book says ends up closely resembling phosphatidylcholine in both structure and physicochemical behaviour. It is the lipid of the myelin sheath.", cn: "脂肪酸接到 sphingosine 上走的是**氨基**，不是它那两个羟基中的任何一个——形成的是酰胺键，这一步的产物就是 ceramide。再把 phosphorylcholine 以酯键挂到末端 -CH2OH 上，就得到 sphingomyelin；教材说它在结构和理化性质上都与 phosphatidylcholine 十分相似。它是髓鞘的脂质。" },
  points: [
    { cz: "sfingomyelin = MK + cholin + kys. fosforečná + sfingosin", en: "Sphingomyelins are composed of one FATTY ACID, CHOLINE, PHOSPHORIC ACID, and SPHINGOSINE — the components obtainable by complete hydrolysis of the sphingomyelin molecule.", cn: "鞘磷脂由一分子脂肪酸、胆碱、磷酸和鞘氨醇组成——这些是鞘磷脂分子完全水解后可得的组分。" },
    { cz: "sfingosin = nenasycený 18-C aminodialkohol", en: "Sphingosine is an unsaturated, 18-carbon AMINO-DIALCOHOL: CH=CH(CH2)12CH3-CH(OH)-CH(NH2)-CH2OH.", cn: "鞘氨醇是一种不饱和的18碳氨基二元醇：CH=CH(CH2)12CH3-CH(OH)-CH(NH2)-CH2OH。" },
    { cz: "ceramid = N-acylsfingosin (amidová vazba na NH2, ne na OH)", en: "Although sphingosine has two hydroxyl groups, the fatty acid attaches to the molecule via the AMINO group (an amide bond), not either hydroxyl. The resulting compound is CERAMIDE, i.e. N-acylsphingosine.", cn: "尽管鞘氨醇含有两个羟基，脂肪酸却是通过氨基（形成酰胺键）而非任一羟基连接到分子上。所得化合物为神经酰胺，即N-酰基鞘氨醇。" },
    { cz: "sfingomyelin = ceramid + fosforylcholin (esterová vazba na primární OH)", en: "Attaching a phosphorylcholine group to ceramide's primary (terminal, -CH2OH) hydroxyl by an ESTER bond forms SPHINGOMYELIN.", cn: "将磷酸胆碱基团通过酯键连接到神经酰胺的伯（末端，-CH2OH）羟基上即生成鞘磷脂。" },
    { cz: "sfingomyelin = amfipatický, podobný fosfatidylcholinu", en: "Sphingomyelin has an amphipathic character and, in both molecular structure and physicochemical properties, closely resembles phosphatidylcholine.", cn: "鞘磷脂具有两亲性，其分子结构和理化性质均与磷脂酰胆碱十分相似。" },
    { cz: "výskyt: membrány nervů, mozková tkáň (myelinové pochvy axonů)", en: "Sphingomyelin is found above all in the cell membranes of nerves and in brain tissue — specifically in the myelin sheaths of axons.", cn: "鞘磷脂主要存在于神经细胞膜和脑组织中——具体是在轴突的髓鞘中。" }
  ],
  terms: [
    { cz: "sfingosin", en: "sphingosine", cn: "鞘氨醇", def_en: "An unsaturated 18-carbon amino-dialcohol; the amino-alcohol backbone common to all sphingolipids.", def_cn: "一种不饱和的18碳氨基二元醇；所有鞘脂共有的氨基醇骨架。" },
    { cz: "ceramid (N-acylsfingosin)", en: "ceramide (N-acylsphingosine)", cn: "神经酰胺（N-酰基鞘氨醇）", def_en: "Sphingosine with a fatty acid attached to its amino group via an amide bond; the shared intermediate for sphingomyelins and glycosphingolipids alike.", def_cn: "鞘氨醇的氨基通过酰胺键连接一分子脂肪酸而成；是鞘磷脂和糖鞘脂共同的中间体。" },
    { cz: "sfingomyelin", en: "sphingomyelin", cn: "鞘磷脂", def_en: "Ceramide with a phosphorylcholine group esterified to its terminal hydroxyl; amphipathic, structurally similar to phosphatidylcholine, concentrated in nerve-cell membranes and myelin.", def_cn: "神经酰胺末端羟基上酯化连接磷酸胆碱基团而成；具两亲性，结构上与磷脂酰胆碱相似，富集于神经细胞膜和髓鞘中。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The fatty acid in ceramide is attached to sphingosine through which functional group, given that sphingosine carries two hydroxyls?",
      q_cn: "尽管鞘氨醇含有两个羟基，神经酰胺中的脂肪酸是通过鞘氨醇的哪个官能团连接的？",
      options: [
        "The primary terminal hydroxyl, by an ester bond",
        "The secondary hydroxyl, by ester",
        "The amino group, via an amide bond",
        "By a glycosidic bond to the terminal hydroxyl"
      ],
      answer: 2,
      optionRefs: { 3: "8-2-3-4" },
      optionNotes: {
        0: { en: "The primary -CH2OH is used, but later and by a different partner: phosphorylcholine is attached there by an ester bond, and that step is what turns ceramide into sphingomyelin.", cn: "那个伯位 -CH2OH 确实会被用到，但要晚一步、而且用它的是别的搭档：phosphorylcholine 通过酯键接在那里，这一步把 ceramide 变成 sphingomyelin。" },
        1: { en: "Neither hydroxyl takes the fatty acid. Sphingosine has two of them and the book makes a point of saying so — and then says the acyl goes onto the amino group all the same.", cn: "两个羟基都不接脂肪酸。Sphingosine 确实有两个羟基，教材还特意点明这一点——然后说脂酰基照样接在氨基上。" },
        3: { en: "A glycosidic bond to that same terminal hydroxyl is what makes a glycosphingolipid out of ceramide — a cerebroside or a ganglioside — rather than what makes the ceramide in the first place.", cn: "在同一个末端羟基上接一个糖苷键，得到的是由 ceramide 衍生的 glycosphingolipid——cerebroside 或 ganglioside——而不是 ceramide 本身的形成方式。" }
      },
      why_en: "The book is explicit that despite sphingosine's two OH groups, the fatty acid is bound through the amino group (amide bond), forming ceramide; a phosphorylcholine group is what later goes onto the terminal OH to form sphingomyelin.",
      why_cn: "教材明确指出，尽管鞘氨醇有两个羟基，脂肪酸却是通过氨基（酰胺键）连接，形成神经酰胺；磷酸胆碱基团则是随后连接到末端羟基上以生成鞘磷脂。"
    },
    {
      type: "short",
      q_en: "List, in order, the three compounds in the book's sphingosine -> ceramide -> sphingomyelin sequence, and state what is added at each step.",
      q_cn: "按顺序列出教材中鞘氨醇→神经酰胺→鞘磷脂这一序列的三种化合物，并说明每一步添加了什么。",
      accept: ["sphingosine", "ceramide", "sphingomyelin", "fatty acid", "amide", "phosphorylcholine", "ester", "鞘氨醇", "神经酰胺", "鞘磷脂", "脂肪酸", "磷酸胆碱"],
      answer_en: "Sphingosine (the amino-dialcohol) + fatty acid via an amide bond on the amino group -> ceramide (N-acylsphingosine); ceramide + phosphorylcholine via an ester bond on the terminal hydroxyl -> sphingomyelin.",
      answer_cn: "鞘氨醇（氨基二元醇）+脂肪酸经氨基上的酰胺键连接→神经酰胺（N-酰基鞘氨醇）；神经酰胺+磷酸胆碱经末端羟基上的酯键连接→鞘磷脂。"
    }
  ],
  oral: {
    q_en: "Trace the structural relationship between sphingosine, ceramide, and sphingomyelin, and say where sphingomyelin is mainly found.",
    q_cn: "梳理鞘氨醇、神经酰胺和鞘磷脂之间的结构关系，并说明鞘磷脂主要存在于何处。",
    model_en: "Sphingomyelin, on complete hydrolysis, breaks down into one fatty acid, choline, phosphoric acid, and sphingosine, and building it back up shows the logic of the molecule. Sphingosine itself is an unsaturated 18-carbon amino-dialcohol, with two hydroxyl groups and one amino group. Even though it has two OHs available, the fatty acid actually attaches through the amino group, forming an amide bond, and the resulting compound is ceramide, also called N-acylsphingosine. From there, a phosphorylcholine group is esterified onto ceramide's remaining primary hydroxyl, and that final addition is what produces sphingomyelin. Because of that phosphorylcholine head group, sphingomyelin ends up amphipathic and, in fact, quite similar in both structure and physicochemical behavior to phosphatidylcholine. It's concentrated above all in the cell membranes of nerve tissue and in the brain, particularly in the myelin sheaths that wrap axons.",
    checklist: [
      "Complete hydrolysis of sphingomyelin gives: fatty acid + choline + phosphoric acid + sphingosine",
      "Sphingosine = unsaturated 18-C amino-dialcohol",
      "Fatty acid attaches via the amino group (amide bond), not a hydroxyl -> ceramide",
      "Phosphorylcholine esterified onto ceramide's terminal OH -> sphingomyelin",
      "Sphingomyelin is amphipathic, structurally similar to phosphatidylcholine",
      "Found in nerve-cell membranes / brain tissue, myelin sheaths of axons"
    ]
  }
},

{
  id: "8-2-3-4",
  book: "cz",
  topicKey: "membrane-lipids",
  chapter: 8,
  section: "8.2.3",
  czTitle: "Cerebrosidy a gangliosidy",
  enTitle: "Cerebrosides and gangliosides",
  cnTitle: "脑苷脂与神经节苷脂",
  pages: [181, 182],
  coverage: "full",
  coverageNote: "The 'Cerebrosidy a gangliosidy' subsection read in full across the page break: page 181's text (glycosphingolipid definition, the O-glycosidic attachment point, occurrence/amphipathy despite lacking a phosphoester group, the head/tail hydrophilic-vs-hydrophobic description including the C24/80%-of-fatty-acids figure, the cerebroside/sulfatide definition and the ~25%-with-sulfate figure) plus page 182's continuation (the glucocerebroside structure diagram, the complex-cerebroside oligosaccharide-chain paragraph with its cross-reference to chapter 7, the ganglioside/sialic-acid definition, the labelled GM1 structure diagram, and the closing paragraph on glycolipid biological functions) all read directly against the scans.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "This group of sphingolipids carries a carbohydrate O-glycosidically bound to the terminal hydroxyl (-CH2OH) of an acylsphingosine (ceramide) structure, hence the name GLYCOSPHINGOLIPIDS. Like sphingomyelins, they occur chiefly in the cell membranes of nerves and brain tissue, and they too are amphipathic, even though they contain no phosphoester group at all. The polar 'head' character of glycosphingolipids is supplied by their monosaccharide or oligosaccharide chains, which often include N-acetylneuraminic acid (sialic acid) — giving a markedly hydrophilic, sometimes outright charged, head; the hydrophobic 'tail' character is reinforced by long-chain (C24) fatty acids, which can make up as much as 80% of the fatty-acid content. The simplest glycosphingolipids, CEREBROSIDES, contain only a single sugar molecule; about 25% of brain cerebrosides carry a sulfate group bound to carbon 3 of that sugar (usually galactose), so these can collectively also be called SULFOLIPIDS or SULFATIDES — the book illustrates the simplest case, glucocerebroside. More complex cerebrosides carry a longer oligosaccharide chain (2-10 residues), often built from N-acetylated amino sugars and fucose (see chapter 7). GANGLIOSIDES likewise carry an oligosaccharide chain, but always include at least one sialic-acid residue — illustrated by GM1, a ganglioside containing 5 saccharide units (Gal-GalNAc-Gal-Glc-(N-acylsphingosine), with a sialyl branch on the GalNAc). Glycolipids significantly increase membrane rigidity and, together with glycoproteins, participate in many cell-surface-mediated functions: they act as antigenic chemical markers of cells or markers identifying the degree of cellular differentiation, are implicated in regulating cell growth and possibly in the transformation of normally growing cells into malignant ones, and underlie cells' ability to recognize and interact with other bioactive compounds — for example bacterial toxins (tetanus toxin and cholera toxin both bind to ganglioside GM1), glycoprotein hormones, interferons, and viruses.",
    cn: "这类鞘脂通过O-糖苷键将糖类连接到酰基鞘氨醇（神经酰胺）结构的末端羟基（-CH2OH）上，因此得名糖鞘脂。与鞘磷脂一样，它们主要存在于神经和脑组织的细胞膜中，并且尽管完全不含磷酸酯基团，也同样具有两亲性。糖鞘脂极性“头部”的性质由其单糖或寡糖链提供，这些糖链常包含N-乙酰神经氨酸（唾液酸）——赋予头部显著的亲水性，有时甚至带电荷；疏水“尾部”的性质则由长链（C24）脂肪酸强化，这类脂肪酸可占脂肪酸总量的80%之多。最简单的糖鞘脂——脑苷脂——只含一个糖分子；约25%的脑脑苷脂在糖（通常为半乳糖）的3位碳上连有硫酸基团，因此这类物质也可统称为硫脂或硫苷脂——教材以最简单的葡萄糖脑苷脂为例。更复杂的脑苷脂带有更长的寡糖链（2-10个残基），常由N-乙酰化氨基糖和岩藻糖构成（见第7章）。神经节苷脂同样带有寡糖链，但其中总是至少包含一个唾液酸残基——以含5个糖单位的GM1神经节苷脂为例（Gal-GalNAc-Gal-Glc-(N-酰基鞘氨醇)，唾液酰基分支连接在GalNAc上）。糖脂显著增加膜的刚性，并与糖蛋白一起参与许多由细胞表面介导的功能：作为细胞的抗原化学标志物或识别细胞分化程度的标志物，可能参与调控细胞生长乃至正常增殖细胞向恶性转化的过程，并且是细胞识别和与其他生物活性化合物相互作用能力的基础——例如细菌毒素（破伤风毒素和霍乱毒素均结合于神经节苷脂GM1）、糖蛋白激素、干扰素和病毒。"
  },
  mustKnow: { en: "Gangliosides are signaling lipids, not structural ones. Their sugar chains stick up from the membrane surface like antennae, and cells read them to recognize self from other.", cn: "神经节苷脂是信号脂质，不是结构脂质。它们的糖链像天线一样从膜表面竖起。" },
  points: [
    { cz: "glykosfingolipid = sacharid O-glykosidicky na acylsfingosin", en: "This group of sphingolipids carries a carbohydrate O-glycosidically bound to the terminal hydroxyl (-CH2OH) of an acylsphingosine (ceramide) structure — hence the name GLYCOSPHINGOLIPIDS.", cn: "这类鞘脂通过O-糖苷键将糖类连接到酰基鞘氨醇（神经酰胺）结构的末端羟基（-CH2OH）上——因此得名糖鞘脂。" },
    { cz: "amfipatické i bez fosfoesterové skupiny", en: "Glycosphingolipids occur chiefly in nerve/brain-tissue cell membranes, like sphingomyelins, and are likewise amphipathic — even though they contain no phosphoester group at all.", cn: "糖鞘脂与鞘磷脂一样主要存在于神经/脑组织细胞膜中，同样具有两亲性——尽管它们完全不含磷酸酯基团。" },
    { cz: "hlava = mono-/oligosacharid (často kys. N-acetylneuraminová); ocas = C24 MK (až 80 %)", en: "The polar head character comes from mono- or oligosaccharide chains, often including N-acetylneuraminic acid (sialic acid) — markedly hydrophilic or even charged. The hydrophobic tail character is reinforced by long C24 fatty acids, up to 80% of the fatty-acid content.", cn: "极性头部性质来自单糖或寡糖链，常包含N-乙酰神经氨酸（唾液酸）——显著亲水甚至带电荷。疏水尾部性质则由长链C24脂肪酸强化，可占脂肪酸含量的80%。" },
    { cz: "cerebrosid = 1 sacharid; ~25 % = sulfatidy (sulfoskupina na C3)", en: "The simplest glycosphingolipids, CEREBROSIDES, contain only a single sugar molecule (e.g. glucocerebroside). About 25% of brain cerebrosides carry a sulfate group on carbon 3 of that sugar (usually galactose), so these are also collectively called SULFOLIPIDS or SULFATIDES.", cn: "最简单的糖鞘脂——脑苷脂——只含一个糖分子（如葡萄糖脑苷脂）。约25%的脑脑苷脂在糖（通常为半乳糖）的3位碳上连有硫酸基团，因此这类物质也统称为硫脂或硫苷脂。" },
    { cz: "složitější cerebrosidy: 2-10 zbytků, N-acetylované aminocukry, fukosa", en: "More complex cerebrosides carry a longer oligosaccharide chain (2-10 residues), often built from N-acetylated amino sugars and fucose (cross-referencing chapter 7's sugar chemistry).", cn: "更复杂的脑苷脂带有更长的寡糖链（2-10个残基），常由N-乙酰化氨基糖和岩藻糖构成（参见第7章的糖化学内容）。" },
    { cz: "gangliosid = oligosacharid + ≥1 kys. sialová (GM1 = 5 jednotek)", en: "Gangliosides likewise carry an oligosaccharide chain, but it always includes at least one sialic-acid residue. Example: GM1, containing 5 saccharide units — Gal-GalNAc-Gal-Glc-(N-acylsphingosine), with a sialyl branch attached to the GalNAc.", cn: "神经节苷脂同样带有寡糖链，但其中总是至少含有一个唾液酸残基。例如GM1，含5个糖单位——Gal-GalNAc-Gal-Glc-(N-酰基鞘氨醇)，唾液酰基分支连接在GalNAc上。" },
    { cz: "funkce glykolipidů: rigidita membrány, antigenní markery, diferenciace, maligní transformace, rozpoznávání toxinů/hormonů/virů", en: "Glycolipids significantly increase membrane rigidity and, together with glycoproteins, mediate cell-surface functions: antigenic chemical markers, markers of the degree of cellular differentiation, regulation of cell growth and possibly the transformation of normal cells into malignant ones, and recognition of/interaction with bioactive compounds — e.g. bacterial toxins (tetanus and cholera toxin both bind ganglioside GM1), glycoprotein hormones, interferons, and viruses.", cn: "糖脂显著提高膜的刚性，并与糖蛋白共同介导细胞表面功能：作为抗原化学标志物、细胞分化程度标志物，参与调控细胞生长乃至正常细胞向恶性转化的过程，以及识别并结合生物活性化合物——如细菌毒素（破伤风毒素和霍乱毒素均结合于神经节苷脂GM1）、糖蛋白激素、干扰素和病毒。" }
  ],
  terms: [
    { cz: "glykosfingolipid", en: "glycosphingolipid", cn: "糖鞘脂", def_en: "A sphingolipid carrying a carbohydrate O-glycosidically bound to ceramide's terminal hydroxyl; amphipathic despite lacking any phosphoester group.", def_cn: "一种鞘脂，糖类通过O-糖苷键连接到神经酰胺的末端羟基上；尽管不含磷酸酯基团仍具两亲性。" },
    { cz: "cerebrosid", en: "cerebroside", cn: "脑苷脂", def_en: "The simplest glycosphingolipid, carrying a single sugar (e.g. glucose or galactose) on ceramide.", def_cn: "最简单的糖鞘脂，在神经酰胺上连接一个糖分子（如葡萄糖或半乳糖）。" },
    { cz: "sulfatid (sulfolipid)", en: "sulfatide (sulfolipid)", cn: "硫苷脂（硫脂）", def_en: "A cerebroside carrying a sulfate group on carbon 3 of its sugar residue (usually galactose); found in about 25% of brain cerebrosides.", def_cn: "在其糖残基（通常为半乳糖）3位碳上带有硫酸基团的脑苷脂；约占脑脑苷脂的25%。" },
    { cz: "gangliosid", en: "ganglioside", cn: "神经节苷脂", def_en: "A glycosphingolipid whose oligosaccharide chain always includes at least one sialic-acid (N-acetylneuraminic acid) residue; GM1 is the book's example, with 5 saccharide units.", def_cn: "一种糖鞘脂，其寡糖链总是至少含有一个唾液酸（N-乙酰神经氨酸）残基；教材以含5个糖单位的GM1为例。" },
    { cz: "kyselina sialová (N-acetylneuraminová)", en: "sialic acid (N-acetylneuraminic acid)", cn: "唾液酸（N-乙酰神经氨酸）", def_en: "A charged, hydrophilic amino-sugar acid that is a defining component of ganglioside oligosaccharide chains.", def_cn: "一种带电荷的亲水性氨基糖酸，是神经节苷脂寡糖链的特征性组分。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structurally distinguishes a ganglioside from a cerebroside, both being glycosphingolipids?",
      q_cn: "神经节苷脂和脑苷脂同属糖鞘脂，二者在结构上的区别是什么？",
      options: [
        "Gangliosides carry no fatty acid at all, their hydrophobic character coming from the sphingosine chain alone",
        "Gangliosides always include at least one sialic-acid residue in their oligosaccharide chain; cerebrosides contain only a single sugar (no sialic acid required)",
        "Cerebrosides occur only in plant membranes and gangliosides only in animal ones, though both are built on the same ceramide and carry the same long C24 fatty acids",
        "Gangliosides are built on a glycerol backbone rather than on ceramide, which is what lets their sugar chain branch"
      ],
      answer: 1,
      optionRefs: { 2: "8-2-3-3", 3: "8-2-3-2" },
      optionNotes: {
        0: { en: "Every glycosphingolipid is built on ceramide, that is on N-acylsphingosine, so the fatty acid is always present. In this group it is a long one — C24 chains make up as much as 80% of the fatty acid found.", cn: "所有 glycosphingolipid 都建在 ceramide（即 N-acylsphingosine）之上，所以脂肪酸永远都在。在这一类里它还很长——C24 链可占所含脂肪酸的 80%。" },
        2: { en: "Both occur chiefly in the cell membranes of nerve and brain tissue, the same place the sphingomyelins do; the book draws no plant-versus-animal split anywhere in this group.", cn: "两者主要都出现在神经组织和脑组织的细胞膜里，和 sphingomyelin 是同一个地方；教材在这一类里从没划过什么植物对动物的界线。" },
        3: { en: "The backbone is ceramide in both cases. A glycerol backbone is what the acylglycerols have — the phospho- and the glyco- kinds alike — and it is precisely what separates them from the sphingolipids.", cn: "两者的骨架都是 ceramide。以 glycerol 为骨架的是 acylglycerol 类（phospho- 和 glyco- 两种都是），而这恰恰是它们与 sphingolipid 的分界。" }
      },
      why_en: "The book defines cerebrosides as the simplest glycosphingolipids, with just one sugar molecule, while gangliosides carry an oligosaccharide chain that always includes at least one sialic-acid (N-acetylneuraminic acid) residue.",
      why_cn: "教材将脑苷脂定义为最简单的糖鞘脂，只含一个糖分子；而神经节苷脂带有的寡糖链中总是至少包含一个唾液酸（N-乙酰神经氨酸）残基。"
    },
    {
      type: "mcq",
      q_en: "GM1 ganglioside is cited by the book as the binding target of which two bacterial toxins?",
      q_cn: "教材指出GM1神经节苷脂是哪两种细菌毒素的结合靶点？",
      options: [
        "Diphtheria and botulinum toxin",
        "Tetanus toxin and cholera toxin",
        "Anthrax toxin and pertussis toxin",
        "Shiga toxin and staphylococcal enterotoxin"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Neither is named here. The book gives exactly two toxins as its GM1 example, inside a wider list of what glycolipids recognise: bacterial toxins, glycoprotein hormones, interferons and viruses.", cn: "这两个都没被点名。教材给 GM1 的例子恰好是两种毒素，放在一张更大的清单里——glycolipid 能识别的对象包括细菌毒素、糖蛋白激素、干扰素和病毒。" },
        2: { en: "Not named either. What GM1 is there to illustrate is the general point that sugar chains projecting from the membrane surface get read by other molecules, not a survey of bacterial toxins.", cn: "同样没有被点名。GM1 在那里要说明的是一个普遍的道理：伸出膜面的糖链会被别的分子读取，而不是要给细菌毒素做个综述。" },
        3: { en: "Also absent from the book. The same recognition role covers the glycolipids' work as antigenic chemical markers and as markers of how far a cell has differentiated.", cn: "书里同样没有。这种识别作用还包括 glycolipid 作为抗原性化学标记，以及作为细胞分化程度的标记。" }
      },
      why_en: "The book explicitly names tetanus toxin (tetanový toxin) and cholera toxin (toxin cholery) as binding to ganglioside GM1, as an example of glycolipids' role in recognizing/interacting with bioactive compounds.",
      why_cn: "教材明确指出破伤风毒素和霍乱毒素结合于神经节苷脂GM1，以此说明糖脂在识别和结合生物活性化合物方面的作用。"
    },
    {
      type: "short",
      q_en: "Explain why glycosphingolipids are amphipathic even though, unlike phospholipids, they contain no phosphoester group.",
      q_cn: "解释为什么糖鞘脂尽管不含磷酸酯基团（与磷脂不同），却仍具有两亲性。",
      accept: ["sugar", "oligosaccharide", "sialic acid", "hydrophilic", "fatty acid", "C24", "head", "tail", "糖", "唾液酸", "亲水", "脂肪酸", "头部", "尾部"],
      answer_en: "Their polar 'head' character comes from the mono-/oligosaccharide chain (often including charged/hydrophilic sialic acid) attached to ceramide's terminal OH, while their hydrophobic 'tail' character comes from the long-chain (C24) fatty acid amide-linked to sphingosine — giving the same head/tail duality as phospholipids without needing a phosphate group.",
      answer_cn: "其极性“头部”性质来自连接在神经酰胺末端羟基上的单糖/寡糖链（常含带电荷、亲水的唾液酸），而疏水“尾部”性质来自经酰胺键连接在鞘氨醇上的长链（C24）脂肪酸——这样即可在不需要磷酸基团的情况下实现与磷脂相同的头/尾双重性。"
    }
  ],
  oral: {
    q_en: "Describe cerebrosides and gangliosides, and explain the biological functions the book attributes to glycolipids.",
    q_cn: "描述脑苷脂和神经节苷脂，并解释教材赋予糖脂的生物学功能。",
    model_en: "Cerebrosides and gangliosides both belong to the glycosphingolipids — sphingolipids where a carbohydrate is attached O-glycosidically to the terminal hydroxyl of an acylsphingosine, that is, a ceramide. Like sphingomyelins they sit mainly in nerve and brain-tissue membranes, and they're amphipathic even without any phosphoester group, because the sugar chain supplies a hydrophilic, often charged head — especially when it includes N-acetylneuraminic acid, sialic acid — while long C24 fatty acids, which can be up to 80 percent of the fatty-acid content, supply the hydrophobic tail. Cerebrosides are the simplest version, carrying just one sugar, like glucocerebroside; about a quarter of the cerebrosides in the brain also carry a sulfate on carbon 3 of that sugar, which is why they're sometimes grouped as sulfatides or sulfolipids. More complex cerebrosides extend that to a longer oligosaccharide chain of two to ten residues, often built from N-acetylated amino sugars and fucose. Gangliosides always go a step further and include at least one sialic-acid residue in their oligosaccharide chain — GM1 is the book's example, five sugar units total, with the sialic acid branching off the N-acetylgalactosamine. Functionally, glycolipids add significantly to membrane rigidity, and together with glycoproteins they carry out a whole range of cell-surface-level jobs: acting as antigenic markers, marking the stage of cellular differentiation, being implicated in regulating cell growth and possibly in the transformation of normal cells into malignant ones, and giving cells the ability to recognize and interact with other bioactive molecules — bacterial toxins like tetanus and cholera toxin, both of which bind GM1, as well as glycoprotein hormones, interferons, and viruses.",
    checklist: [
      "Glycosphingolipid = sugar O-glycosidically bound to ceramide's terminal OH",
      "Amphipathic without a phosphoester group; head from sugar chain, tail from C24 fatty acids",
      "Cerebroside = simplest, one sugar; ~25% are sulfatides (sulfate on C3)",
      "Complex cerebrosides: 2-10-residue oligosaccharide, N-acetylated amino sugars + fucose",
      "Ganglioside = oligosaccharide + at least one sialic acid; GM1 example (5 units)",
      "Functions: membrane rigidity, antigenic/differentiation markers, growth regulation, malignant transformation, toxin/hormone/interferon/virus recognition (tetanus & cholera toxin bind GM1)"
    ]
  }
},

{
  id: "8-2-4-1",
  book: "cz",
  topicKey: "lipid-signals-and-pigments",
  chapter: 8,
  section: "8.2.4",
  czTitle: "Odvozené lipidy — terpeny (isoprenoidy): charakteristika a klasifikace",
  enTitle: "Derived lipids — terpenes (isoprenoids): characteristics and classification",
  cnTitle: "衍生脂质——萜类（类异戊二烯）：概述与分类",
  pages: [182, 183],
  coverage: "full",
  coverageNote: "The '8.2.4 Odvozené lipidy' heading and 'Terpeny (isoprenoidy)' opening paragraph at the bottom of page 182 read in full, plus all of page 183: the isoprenoid biosynthetic-classification diagram (IPP<->DMAPP as hemiterpenes; ->geranyl-PP/monoterpenes; ->farnesyl-PP/sesquiterpenes; ->digeranyl-PP/diterpenes and squalene/triterpenes; ->phytoene/tetraterpenes), the paragraph on monoterpene/sesquiterpene/diterpene occurrence in essential oils and on phytol/vitamin K1's lipophilic character, the phytol structure, and the vitamin K1 (phylloquinone, n=4)/vitamin K2 (menaquinone, n=8) structures — all read directly against the scans.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Section 8.2.4 turns to DERIVED LIPIDS (odvozené lipidy). Practically all natural derived lipids belong, by biochemical origin, to the group of TERPENES (isoprenoids) — a very large class of polymer-based substances. They qualify as lipids because they satisfy the water-insolubility/immiscibility condition that follows from their hydrophobic character. The common basis of all terpenes is the monomer unit ISOPRENE (hence the alternative name isoprenoids), and their nomenclature and classification into subgroups follows biosynthesis strictly. The biosynthetic chain runs: isopentenylpyrophosphate (IPP) in equilibrium with dimethylallylpyrophosphate (DMAPP), each C5 — these are HEMITERPENES; IPP + DMAPP condense to geranyl-PP (C10) — MONOTERPENES; geranyl-PP + another IPP gives farnesyl-PP (C15) — SESQUITERPENES; farnesyl-PP + another IPP gives digeranyl-PP (C20) — DITERPENES, while two farnesyl-PP units instead combine to give squalene (C30) — TRITERPENES; and two digeranyl-PP units combine to give phytoene (C40) — TETRATERPENES. Monoterpenes, sesquiterpenes, and diterpenes are often components of various fragrant essential oils, balsams, and resins. Among the diterpenes is a biochemically important group: the alcohol PHYTOL is part of chlorophyll a and b in higher plants and some algae, and is also responsible for the lipophilic character of vitamin K1. Hydrophobic chains derived biochemically from phytol are likewise found in vitamin K2, vitamin E, and coenzyme Q — generally a group of substances of similar effect, differing in the number of isoprenoid units in the molecule (most often 4-10). The book illustrates this with phytol's structure and with vitamin K1 (phylloquinone, n=4) and vitamin K2 (menaquinone, n=8), each a naphthoquinone ring system bearing a phytyl/polyprenyl side chain.",
    cn: "第8.2.4节转向衍生脂质。几乎所有天然的衍生脂质从生物化学起源看都属于萜类（类异戊二烯）——一个基于聚合物的非常庞大的物质类别。之所以能归入脂质，是因为它们的疏水特性使其很好地满足不溶于水或与水不混溶的条件。所有萜类的共同基础是单体单位异戊二烯（因此又称类异戊二烯），其命名和亚类划分严格依据生物合成途径。生物合成链为：异戊烯基焦磷酸（IPP）与二甲基烯丙基焦磷酸（DMAPP）互变，二者均为C5——称为半萜；IPP+DMAPP缩合生成牛儿基焦磷酸（C10）——单萜；牛儿基焦磷酸再加一个IPP生成法尼基焦磷酸（C15）——倍半萜；法尼基焦磷酸再加一个IPP生成双牛儿基焦磷酸（C20）——二萜，而两个法尼基焦磷酸单元则结合生成角鲨烯（C30）——三萜；两个双牛儿基焦磷酸单元结合生成八氢番茄红素（C40）——四萜。单萜、倍半萜和二萜常是各种芳香精油、香脂和树脂的成分。二萜中有一组生物化学上重要的物质：醇类植醇是高等植物及某些藻类叶绿素a和b的组成部分，也是维生素K1亲脂特性的来源。由植醇在生物化学上衍生而来的疏水链同样存在于维生素K2、维生素E和辅酶Q中——通常这是一组作用相似、仅分子中类异戊二烯单位数目不同（最常见为4-10个）的物质。教材以植醇的结构以及维生素K1（叶绿醌，n=4）和维生素K2（甲萘醌，n=8）为例，二者均为带有植基/多聚异戊烯基侧链的萘醌环系统。"
  },
  mustKnow: { en: "Terpene names are biosynthetic, not structural: count the C5 isoprene units and the name follows — C10 mono-, C15 sesqui-, C20 di-, C30 tri-, C40 tetraterpene. And one diterpene alcohol, phytol, is why chlorophyll a/b, vitamin K1, vitamin K2, vitamin E and coenzyme Q all carry the same kind of lipophilic tail.", cn: "terpene 的命名跟的是生物合成，不是结构：数 C5 的 isoprene 单元，名字就定了——C10 mono-、C15 sesqui-、C20 di-、C30 tri-、C40 tetraterpene。而一个二萜醇 phytol，正是 chlorophyll a/b、vitamin K1、K2、vitamin E 和 coenzyme Q 都带着同一类亲脂尾巴的原因。" },
  points: [
    { cz: "odvozené lipidy = terpeny (isoprenoidy)", en: "Practically all natural derived lipids belong, by biochemical origin, to the group of TERPENES (isoprenoids) — a very large class of polymer-based substances, classed as lipids because their hydrophobic character satisfies the water-insolubility condition.", cn: "几乎所有天然衍生脂质从生物化学起源看都属于萜类（类异戊二烯）——基于聚合物的庞大物质类别，因其疏水特性满足不溶于水的条件而归入脂质。" },
    { cz: "isopren = společný monomer; klasifikace dle biosyntézy", en: "The common basis of terpenes is the monomer unit ISOPRENE (hence 'isoprenoids'); nomenclature and subgroup classification follows biosynthesis strictly.", cn: "萜类的共同基础是单体单位异戊二烯（故名类异戊二烯）；命名和亚类划分严格依据生物合成途径。" },
    { cz: "IPP/DMAPP (C5) = hemiterpeny", en: "Isopentenylpyrophosphate (IPP) and dimethylallylpyrophosphate (DMAPP) are interconverting C5 units — HEMITERPENES.", cn: "异戊烯基焦磷酸（IPP）和二甲基烯丙基焦磷酸（DMAPP）是可互变的C5单位——半萜。" },
    { cz: "geranyl-PP (C10) = monoterpeny; farnesyl-PP (C15) = seskviterpeny", en: "IPP + DMAPP -> geranyl-PP (C10) = MONOTERPENES. Geranyl-PP + another IPP -> farnesyl-PP (C15) = SESQUITERPENES.", cn: "IPP+DMAPP→牛儿基焦磷酸（C10）＝单萜。牛儿基焦磷酸再加一个IPP→法尼基焦磷酸（C15）＝倍半萜。" },
    { cz: "digeranyl-PP (C20) = diterpeny; skvalen (C30) = triterpeny; fytoen (C40) = tetraterpeny", en: "Farnesyl-PP + IPP -> digeranyl-PP (C20) = DITERPENES. Two farnesyl-PP units -> squalene (C30) = TRITERPENES. Two digeranyl-PP units -> phytoene (C40) = TETRATERPENES.", cn: "法尼基焦磷酸+IPP→双牛儿基焦磷酸（C20）＝二萜。两个法尼基焦磷酸单元→角鲨烯（C30）＝三萜。两个双牛儿基焦磷酸单元→八氢番茄红素（C40）＝四萜。" },
    { cz: "mono-/seskvi-/diterpeny ve vonných silicích, balzámech, pryskyřicích", en: "Monoterpenes, sesquiterpenes, and diterpenes are often components of various fragrant essential oils, balsams, and resins.", cn: "单萜、倍半萜和二萜常是各种芳香精油、香脂和树脂的成分。" },
    { cz: "fytol = součást chlorofylu a/b, zodpovědný za lipofilitu vitaminu K1", en: "Among diterpenes: the alcohol PHYTOL is part of chlorophyll a and b in higher plants and some algae, and is responsible for the lipophilic character of vitamin K1.", cn: "二萜中：醇类植醇是高等植物及某些藻类叶绿素a和b的组成部分，并赋予维生素K1亲脂特性。" },
    { cz: "fytolové řetězce také ve vit. K2, vit. E, koenzymu Q (liší se počtem isoprenoidních jednotek, obvykle 4-10)", en: "Hydrophobic chains biochemically derived from phytol are also found in vitamin K2, vitamin E, and coenzyme Q — a group of substances of similar effect differing in the number of isoprenoid units in the molecule (most often 4-10).", cn: "由植醇衍生的疏水链也存在于维生素K2、维生素E和辅酶Q中——这类物质作用相似，仅分子中类异戊二烯单位数（通常4-10个）不同。" },
    { cz: "vitamin K1 (fylochinon, n=4) / K2 (menachinon, n=8)", en: "Vitamin K1 (phylloquinone, n=4) and vitamin K2 (menaquinone, n=8) are each a naphthoquinone ring system bearing a phytyl/polyprenyl side chain of the stated length.", cn: "维生素K1（叶绿醌，n=4）和维生素K2（甲萘醌，n=8）均为带有相应长度植基/多聚异戊烯基侧链的萘醌环系统。" }
  ],
  terms: [
    { cz: "isopren", en: "isoprene", cn: "异戊二烯", def_en: "The C5 monomer unit that is the common structural basis of all terpenes/isoprenoids.", def_cn: "所有萜类/类异戊二烯共同结构基础的C5单体单位。" },
    { cz: "terpen (isoprenoid)", en: "terpene (isoprenoid)", cn: "萜类（类异戊二烯）", def_en: "A large biochemical class of polymer-based, hydrophobic substances built from isoprene units; classified into subgroups (hemi-, mono-, sesqui-, di-, tri-, tetraterpenes) by carbon count/biosynthetic stage.", def_cn: "一大类由异戊二烯单位构成、基于聚合物的疏水性生化物质；按碳数/生物合成阶段分为半萜、单萜、倍半萜、二萜、三萜、四萜等亚类。" },
    { cz: "izopentenylpyrofosfát (IPP) / dimethylallylpyrofosfát (DMAPP)", en: "isopentenylpyrophosphate (IPP) / dimethylallylpyrophosphate (DMAPP)", cn: "异戊烯基焦磷酸（IPP）／二甲基烯丙基焦磷酸（DMAPP）", def_en: "The two interconverting C5 hemiterpene precursors from which all larger terpenes are built.", def_cn: "两种可互变的C5半萜前体，是构建所有更大萜类分子的起点。" },
    { cz: "fytol", en: "phytol", cn: "植醇", def_en: "A diterpene alcohol that is part of chlorophyll a/b and gives vitamin K1 its lipophilic character.", def_cn: "一种二萜醇，是叶绿素a/b的组成部分，并赋予维生素K1亲脂特性。" },
    { cz: "vitamin K1 (fylochinon) / vitamin K2 (menachinon)", en: "vitamin K1 (phylloquinone) / vitamin K2 (menaquinone)", cn: "维生素K1（叶绿醌）／维生素K2（甲萘醌）", def_en: "Naphthoquinone-ring vitamins bearing a phytol-derived side chain (n=4 for K1, n=8 for K2 in this book's depiction).", def_cn: "带有植醇衍生侧链的萘醌环维生素（本书图示K1的n=4，K2的n=8）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the book's isoprenoid classification chain, what compound and carbon count corresponds to sesquiterpenes?",
      q_cn: "在教材的类异戊二烯分类链中，倍半萜对应的化合物和碳原子数是什么？",
      options: ["Geranyl-PP, C10", "Farnesyl-PP, C15", "Digeranyl-PP, C20", "Squalene, C30"],
      answer: 1,
      optionNotes: {
        0: { en: "Geranyl-PP is C10, the monoterpenes — one step earlier in the chain, assembled from IPP plus DMAPP. Adding one more IPP to it is what gives the sesquiterpenes.", cn: "Geranyl-PP 是 C10，属 monoterpene——在这条链上早一步，由 IPP 加 DMAPP 拼成。再往它上面加一个 IPP，得到的才是 sesquiterpene。" },
        2: { en: "Digeranyl-PP is C20, the diterpenes — one step later, made by adding yet another IPP unit to farnesyl-PP. Phytol, the alcohol behind so many lipophilic vitamin tails, is a diterpene.", cn: "Digeranyl-PP 是 C20，属 diterpene——在这条链上晚一步，由 farnesyl-PP 再加一个 IPP 而来。Phytol——许多亲脂性维生素尾巴的来源——就是一种 diterpene。" },
        3: { en: "Squalene is C30, the triterpenes, and it is formed from TWO farnesyl-PP units rather than being one of them. It is the precursor from which the whole steroid family follows.", cn: "Squalene 是 C30，属 triterpene，而且是由两个 farnesyl-PP 拼成的，本身并不是其中之一。整个 steroid 家族都由它衍生而来。" }
      },
      why_en: "Geranyl-PP (C10) plus another IPP unit gives farnesyl-PP (C15), which the book labels sesquiterpenes; geranyl-PP itself is C10/monoterpenes, digeranyl-PP is C20/diterpenes, and squalene is C30/triterpenes.",
      why_cn: "牛儿基焦磷酸（C10）再加一个IPP单位生成法尼基焦磷酸（C15），教材将其标为倍半萜；牛儿基焦磷酸本身为C10/单萜，双牛儿基焦磷酸为C20/二萜，角鲨烯为C30/三萜。"
    },
    {
      type: "mcq",
      q_en: "According to the book, which alcohol is responsible for vitamin K1's lipophilic character, and what other compounds share biochemically related hydrophobic chains?",
      q_cn: "根据教材，哪种醇赋予维生素K1亲脂特性，还有哪些化合物具有生化上相关的疏水链？",
      options: [
        "Cholesterol; shared with the bile acids and the sex hormones",
        "Phytol; shared with vitamin K2, vitamin E, and coenzyme Q",
        "Squalene; shared with steroids and with steran",
        "Retinol; shared with the carotenoids and xanthophylls"
      ],
      answer: 1,
      optionRefs: { 0: "8-2-4-4", 2: "8-2-4-3", 3: "8-2-4-2" },
      optionNotes: {
        0: { en: "A real relationship, but the wrong kind of one: cholesterol is a sterol and the primary metabolic precursor of the bile acids and the sex hormones. That is a ring-system story, not a lipophilic-side-chain one.", cn: "这是一段真实存在的关系，但性质不对：cholesterol 是 sterol，是胆汁酸和性激素的主要代谢前体。那讲的是环系的来源，不是亲脂性侧链的来源。" },
        2: { en: "Squalene is the C30 triterpene from which the steroids come — a precursor of a fused ring system, not of a hydrophobic tail hung on a vitamin's ring.", cn: "Squalene 是 C30 的 triterpene，是 steroid 的来源——它是稠合环系的前体，不是挂在维生素环上的疏水尾巴的来源。" },
        3: { en: "Retinol is itself one of the terpenoid vitamins, and it is precisely the one whose side chain does NOT come from phytol: the book flags it as the exception, its precursor being the tetraterpene carotene.", cn: "Retinol 本身就是 terpenoid 类维生素之一，而且恰恰是侧链不来自 phytol 的那一个：教材专门把它标为例外，它的前体是 tetraterpene carotene。" }
      },
      why_en: "The book states phytol (a diterpene alcohol, part of chlorophyll a/b) is responsible for vitamin K1's lipophilic character, and that biochemically phytol-derived hydrophobic chains are also found in vitamin K2, vitamin E, and coenzyme Q.",
      why_cn: "教材指出植醇（一种二萜醇，叶绿素a/b的组成部分）赋予维生素K1亲脂特性，并且由植醇衍生的疏水链在生化上也存在于维生素K2、维生素E和辅酶Q中。"
    },
    {
      type: "short",
      q_en: "Name the six terpene subclasses in order of increasing carbon number, per the book's classification.",
      q_cn: "按教材分类，依碳原子数递增的顺序列出六个萜类亚类。",
      accept: ["hemiterpene", "monoterpene", "sesquiterpene", "diterpene", "triterpene", "tetraterpene", "半萜", "单萜", "倍半萜", "二萜", "三萜", "四萜"],
      answer_en: "Hemiterpenes (C5) -> monoterpenes (C10) -> sesquiterpenes (C15) -> diterpenes (C20) -> triterpenes (C30) -> tetraterpenes (C40).",
      answer_cn: "半萜（C5）→单萜（C10）→倍半萜（C15）→二萜（C20）→三萜（C30）→四萜（C40）。"
    }
  ],
  oral: {
    q_en: "Explain how terpenes are classified biosynthetically, and how phytol connects to the fat-soluble vitamins K, E, and coenzyme Q.",
    q_cn: "解释萜类的生物合成分类方式，以及植醇与脂溶性维生素K、E及辅酶Q之间的联系。",
    model_en: "Practically all of the book's derived lipids trace back, biochemically, to the terpenes, or isoprenoids — a huge class of lipid-qualifying substances built from a single monomer, isoprene, and classified strictly by how they're biosynthesized. The chain starts with isopentenylpyrophosphate and dimethylallylpyrophosphate, two interconverting C5 units called hemiterpenes; those condense to geranyl-PP, C10, the monoterpene stage; add another isoprene unit and you get farnesyl-PP, C15, sesquiterpenes; add one more and you reach digeranyl-PP, C20, diterpenes — while, alternatively, two farnesyl-PP units can combine to give the C30 triterpene squalene, and two digeranyl-PP units combine to give the C40 tetraterpene phytoene. Monoterpenes, sesquiterpenes, and diterpenes show up a lot in essential oils, balsams, and resins, but the diterpene stage also produces something biochemically central: the alcohol phytol, which is part of chlorophyll a and b, and which is specifically what gives vitamin K1 its lipophilic character. From there, hydrophobic chains derived biochemically from phytol turn up again in vitamin K2, in vitamin E, and in coenzyme Q — so this whole family is really a set of compounds with similar effects that just differ in how many isoprenoid units, usually somewhere between four and ten, are strung onto the core ring structure.",
    checklist: [
      "Derived lipids -> terpenes/isoprenoids, classified by biosynthesis",
      "Isoprene = common monomer unit",
      "IPP/DMAPP (C5, hemiterpenes) -> geranyl-PP (C10, monoterpenes) -> farnesyl-PP (C15, sesquiterpenes) -> digeranyl-PP (C20, diterpenes)",
      "Two farnesyl-PP -> squalene (C30, triterpenes); two digeranyl-PP -> phytoene (C40, tetraterpenes)",
      "Mono-/sesqui-/diterpenes in essential oils, balsams, resins",
      "Phytol (diterpene alcohol) in chlorophyll a/b, gives vitamin K1 its lipophilic character",
      "Phytol-derived chains also in vitamin K2, vitamin E, coenzyme Q (differ by isoprenoid-unit count, usually 4-10)"
    ]
  }
},

{
  id: "8-2-4-2",
  book: "cz",
  topicKey: "lipid-signals-and-pigments",
  chapter: 8,
  section: "8.2.4",
  czTitle: "Terpenoidní vitaminy a koenzym Q: vitamin E, koenzym Q, vitamin A (retinol)",
  enTitle: "Terpenoid-derived vitamins and coenzyme Q: vitamin E, coenzyme Q, vitamin A (retinol)",
  cnTitle: "萜类衍生的维生素与辅酶：维生素E、辅酶Q、维生素A（视黄醇）",
  pages: [184],
  coverage: "full",
  coverageNote: "Top of page 184 read in full and directly against the scan: the vitamin E (alpha-tocopherol) structure, the coenzyme Q oxidized-form structure with its stated n=6-8 range, and the vitamin A/retinol paragraph and structure, including the book's explicit statement that retinol's precursor is not phytol but the tetraterpene carotene.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Continuing the diterpene-derived compounds introduced on the previous page, the book shows the structure of vitamin E (alpha-tocopherol) — a chromanol (benzopyran) ring system bearing a saturated, phytyl-derived isoprenoid side chain — and of coenzyme Q in its oxidized form, a substituted benzoquinone ring bearing a polyprenyl side chain, with the book giving n = 6-8 isoprenoid units for coenzyme Q. The book then notes that vitamin A (retinol) STRUCTURALLY belongs with this terpenoid-vitamin group, but flags an important exception: retinol's precursor is NOT phytol (unlike vitamin K1/K2, vitamin E, and coenzyme Q, all of which are phytol-chain derivatives) — its precursor is instead the TETRATERPENE carotene. Retinol itself is drawn as a cyclohexene ring bearing methyl substituents, connected to a polyene chain that terminates in a primary alcohol (-CH2OH).",
    cn: "接续前一页介绍的二萜衍生化合物，教材给出了维生素E（α-生育酚）的结构——一种苯并吡喃（色满醇）环系统，带有饱和的、源自植基的类异戊二烯侧链——以及氧化态辅酶Q的结构，一种带有多聚异戊烯基侧链的取代苯醌环，教材给出辅酶Q的类异戊二烯单位数n=6-8。随后教材指出，维生素A（视黄醇）在结构上属于这类萜类维生素，但特别指出一个重要例外：视黄醇的前体并非植醇（不同于维生素K1/K2、维生素E和辅酶Q，它们均为植醇链衍生物）——其前体是四萜类的胡萝卜素。视黄醇本身被画作一个带甲基取代基的环己烯环，连接一条聚烯链，末端为伯醇（-CH2OH）。"
  },
  mustKnow: { en: "Three lipophilic molecules built to the same plan — a ring plus an isoprenoid tail: vitamin E on a chromanol ring, coenzyme Q on a benzoquinone ring with n = 6–8 isoprenoid units. Vitamin A is the exception the book flags explicitly: it belongs to this terpenoid-vitamin group, but its side chain does NOT derive from phytol, unlike the others.", cn: "三个按同一套路搭起来的亲脂分子——一个环加一条 isoprenoid 尾巴：vitamin E 挂在 chromanol 环上，coenzyme Q 挂在 benzoquinone 环上、带 n = 6–8 个 isoprenoid 单元。vitamin A 是教材明确标出的例外：它属于这一组萜类维生素，但它的侧链**不是**从 phytol 来的，其余几个都是。" },
  points: [
    { cz: "vitamin E (α-tokoferol) = chromanol + fytylový isoprenoidní řetězec", en: "Vitamin E (alpha-tocopherol) is drawn as a chromanol (benzopyran) ring system bearing a saturated, phytyl-derived isoprenoid side chain.", cn: "维生素E（α-生育酚）被画作苯并吡喃（色满醇）环系统，带有饱和的、源自植基的类异戊二烯侧链。" },
    { cz: "koenzym Q (oxidovaná forma) = substituovaný benzochinon + polyprenylový řetězec, n = 6-8", en: "Coenzyme Q, oxidized form, is a substituted benzoquinone ring bearing a polyprenyl side chain; the book gives n = 6-8 isoprenoid units.", cn: "氧化态辅酶Q为带有多聚异戊烯基侧链的取代苯醌环；教材给出类异戊二烯单位数n=6-8。" },
    { cz: "vitamin A (retinol) strukturně patří sem, ALE prekurzorem je karoten (tetraterpen), NE fytol", en: "Vitamin A (retinol) structurally belongs to this terpenoid-vitamin group, but the book explicitly flags an exception: its precursor is NOT phytol (unlike vitamin K1/K2, vitamin E, and coenzyme Q) — its precursor is instead the TETRATERPENE carotene.", cn: "维生素A（视黄醇）在结构上属于这类萜类维生素，但教材特别指出一个例外：其前体并非植醇（不同于维生素K1/K2、维生素E和辅酶Q）——而是四萜类的胡萝卜素。" },
    { cz: "retinol = cyklohexenový kruh + methylové substituenty + polyenový řetězec + primární OH", en: "Retinol is drawn as a cyclohexene ring bearing methyl substituents, connected via a polyene chain terminating in a primary alcohol (-CH2OH).", cn: "视黄醇被画作带甲基取代基的环己烯环，通过聚烯链连接，末端为伯醇（-CH2OH）。" }
  ],
  terms: [
    { cz: "vitamin E (α-tokoferol)", en: "vitamin E (alpha-tocopherol)", cn: "维生素E（α-生育酚）", def_en: "A chromanol-ring vitamin with a saturated phytyl-derived isoprenoid side chain.", def_cn: "带有饱和植基衍生类异戊二烯侧链的苯并吡喃环维生素。" },
    { cz: "koenzym Q (ubichinon)", en: "coenzyme Q (ubiquinone)", cn: "辅酶Q（泛醌）", def_en: "A benzoquinone-ring redox coenzyme bearing a polyprenyl side chain (n=6-8 per this book).", def_cn: "带有多聚异戊烯基侧链的苯醌环氧化还原辅酶（本书给出n=6-8）。" },
    { cz: "vitamin A (retinol)", en: "vitamin A (retinol)", cn: "维生素A（视黄醇）", def_en: "A terpenoid-structured vitamin (cyclohexene ring + polyene chain + terminal alcohol) whose biological precursor is the tetraterpene carotene rather than phytol.", def_cn: "萜类结构的维生素（环己烯环+聚烯链+末端醇），其生物前体是四萜类胡萝卜素而非植醇。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Vitamin E, coenzyme Q, and vitamins K1/K2 all share a hydrophobic side chain derived biochemically from which compound — yet vitamin A does NOT share this same origin. What is vitamin A's precursor instead?",
      q_cn: "维生素E、辅酶Q和维生素K1/K2的疏水侧链在生化上都源自同一种化合物，但维生素A并非如此。维生素A的前体是什么？",
      options: ["Phytol, same as the others", "The tetraterpene carotene", "Squalene", "Cholesterol"],
      answer: 1,
      optionRefs: { 2: "8-2-4-3", 3: "8-2-4-4" },
      optionNotes: {
        0: { en: "This is the origin the other three share: vitamin K1 and K2, vitamin E and coenzyme Q all carry phytol-derived chains. Vitamin A is exactly the exception the book stops to flag.", cn: "这是另外三者共有的来源：vitamin K1、K2、vitamin E 和 coenzyme Q 带的都是由 phytol 衍生的链。Vitamin A 正是教材特意停下来标注的那个例外。" },
        2: { en: "Squalene is the C30 triterpene leading to the steroids; nothing in this group of vitamins takes its tail from it, and it belongs to the ring-system branch of the classification.", cn: "Squalene 是通向 steroid 的 C30 triterpene；这一组维生素里没有谁的尾巴来自它，它属于分类中环系那一支。" },
        3: { en: "Cholesterol is a sterol, and the precursor it serves as is for bile acids, sex hormones and, in some organisms, vitamin D — not for retinol, whose ring plus polyene chain comes from carotene.", cn: "Cholesterol 是 sterol，它作为前体通向的是胆汁酸、性激素，以及在某些生物中的 vitamin D——不是 retinol；retinol 的环加多烯链来自 carotene。" }
      },
      why_en: "The book explicitly states that although vitamin A (retinol) structurally belongs with the phytol-derived terpenoid vitamins, its precursor is not phytol but the tetraterpene carotene.",
      why_cn: "教材明确指出，尽管维生素A（视黄醇）在结构上属于源自植醇的萜类维生素家族，但其前体并非植醇，而是四萜类的胡萝卜素。"
    },
    {
      type: "short",
      q_en: "What isoprenoid-unit range (n) does the book give for coenzyme Q's side chain?",
      q_cn: "教材给出的辅酶Q侧链类异戊二烯单位数（n）范围是多少？",
      accept: ["6-8", "6 to 8", "六到八", "6", "8"],
      answer_en: "n = 6-8 isoprenoid units, per the book's oxidized-form coenzyme Q diagram.",
      answer_cn: "根据教材氧化态辅酶Q的图示，n=6-8个类异戊二烯单位。"
    }
  ],
  oral: {
    q_en: "Which fat-soluble vitamins share a phytol-derived side chain, and which one is the exception?",
    q_cn: "哪些脂溶性维生素共享源自植醇的侧链，哪一种是例外？",
    model_en: "Following straight on from phytol and vitamin K1 and K2, the book shows vitamin E, alpha-tocopherol, as a chromanol ring carrying that same kind of saturated, phytyl-derived isoprenoid side chain, and coenzyme Q in its oxidized form as a substituted benzoquinone ring with a polyprenyl side chain of six to eight isoprenoid units. Then it makes a point of flagging an exception: vitamin A, retinol, structurally looks like it belongs in this same terpenoid-vitamin family — a ring plus a chain plus a terminal functional group — but its actual biochemical precursor isn't phytol at all. It's the tetraterpene carotene instead, which is a forty-carbon compound built from two digeranyl-PP units rather than from the diterpene branch that gives rise to K1, K2, E, and coenzyme Q. Retinol itself is a methylated cyclohexene ring connected through a polyene chain to a terminal primary alcohol.",
    checklist: [
      "Vitamin E (alpha-tocopherol): chromanol ring + phytyl-derived side chain",
      "Coenzyme Q (oxidized form): benzoquinone ring + polyprenyl chain, n=6-8",
      "Vitamin A/retinol structurally belongs with this group but is the exception",
      "Retinol's precursor is the tetraterpene carotene, NOT phytol",
      "Retinol structure: methylated cyclohexene ring + polyene chain + terminal -CH2OH"
    ]
  }
},

{
  id: "8-2-4-3",
  book: "cz",
  topicKey: "lipid-signals-and-pigments",
  chapter: 8,
  section: "8.2.4",
  czTitle: "Triterpeny: skvalen a úvod do steroidů (steran)",
  enTitle: "Triterpenes: squalene and the introduction to steroids (steran)",
  cnTitle: "三萜：角鲨烯与类固醇导论（甾烷）",
  pages: [184, 185],
  coverage: "full",
  coverageNote: "The 'Triterpeny' heading and its content read in full across the page 184/185 break: the squalene paragraph and structure on page 184, the steroid-function paragraph that follows it directly on the same page (sex hormones, bile acids as emulsifiers, cholesterol/membranes/ester transport), and the steran skeleton name given at the very bottom of page 184, continuing into the numbered steran ring diagram (carbons 1-17) at the top of page 185. Note for the record: the book gives NO separate bold subheading for 'steroids' here — the steroid-function paragraph and the steran skeleton are presented as a direct continuation of the 'Triterpeny' discussion (squalene is introduced specifically as 'an important precursor of steroids'), so this node's section is kept as 8.2.4 rather than inventing an unlabelled sub-heading. Also note: this steran diagram numbers carbons 1-17 but does NOT letter the four rings A/B/C/D, whereas the later 7-dehydrocholesterol diagram on page 186 does label rings A-D — a labelling-style inconsistency between the book's own figures, not a substantive contradiction.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "TRITERPENES: the unsaturated hydrocarbon squalene (C30, built from two farnesyl-PP units) is an important precursor of steroids. The book then moves, without a separate heading, directly into steroid chemistry: steroid compounds are found throughout the whole organism, where they perform a range of often quite different functions. In the human body, for example, steroid sex hormones function as such; bile acids play a significant role in lipid digestion as emulsifying agents; cholesterol is a component of biological membranes, and its esters participate in transporting lipids across membranes and through the bloodstream. The common structural basis of all steroids is a skeleton of fused alicyclic rings called STERAN (perhydrocyclopentanophenanthrene) — illustrated with a four-ring system whose carbons are numbered 1 through 17.",
    cn: "三萜：不饱和烃角鲨烯（C30，由两个法尼基焦磷酸单元构成）是类固醇的重要前体。教材随后不设单独标题，直接转入类固醇化学：类固醇化合物遍布整个机体，发挥着一系列往往颇为不同的功能。例如在人体内，类固醇性激素发挥相应作用；胆汁酸作为乳化剂在脂质消化中起重要作用；胆固醇是生物膜的组分，其酯类参与脂质跨膜及血液中的转运。所有类固醇共同的结构基础是一种稠合脂环骨架，称为甾烷（全氢环戊烷并菲），图中以碳原子编号1至17的四环体系表示。"
  },
  mustKnow: { en: "Squalene — an open-chain C30 hydrocarbon built from two farnesyl-PP units — is where the steroids come from, and everything downstream of it shares one skeleton: STERAN, three six-membered rings fused to one five-membered one. The functions then diverge completely on that single frame: sex hormones, bile acids as emulsifiers in lipid digestion, and the rest.", cn: "squalene——由两个 farnesyl-PP 拼成的开链 C30 烃——是 steroid 的来源，而它下游的所有分子共用同一副骨架：STERAN，三个六元环稠合一个五元环。功能却在这同一副骨架上完全分开：性激素、在脂质消化中当乳化剂的胆汁酸，等等。" },
  points: [
    { cz: "skvalen (C30, ze 2x farnesyl-PP) = prekurzor steroidů", en: "TRITERPENES: the unsaturated hydrocarbon squalene (C30, formed from two farnesyl-PP units) is an important precursor of steroids.", cn: "三萜：不饱和烃角鲨烯（C30，由两个法尼基焦磷酸单元形成）是类固醇的重要前体。" },
    { cz: "steroidy = rozšířené funkce v těle (pohlavní hormony, žlučové kyseliny, cholesterol)", en: "Steroid compounds occur throughout the whole organism and perform a range of often quite different functions: steroid sex hormones; bile acids as emulsifying agents important in lipid digestion; cholesterol as a membrane component whose esters participate in lipid transport across membranes and through the bloodstream.", cn: "类固醇化合物遍布整个机体，发挥一系列往往颇为不同的功能：类固醇性激素；作为乳化剂、在脂质消化中起重要作用的胆汁酸；作为膜组分的胆固醇，其酯类参与脂质跨膜及血液中的转运。" },
    { cz: "steran (perhydrocyklopentanofenantren) = společný skelet steroidů", en: "The common structural basis of all steroids is a skeleton of fused alicyclic rings called STERAN (perhydrocyclopentanophenanthrene): a four-fused-ring system (three six-membered rings plus one five-membered ring), with carbons numbered 1 through 17.", cn: "所有类固醇共同的结构基础是一种稠合脂环骨架，称为甾烷（全氢环戊烷并菲）：由四个稠合环组成（三个六元环加一个五元环），碳原子编号1至17。" },
    { cz: "kniha zde nepojmenovává steroidy vlastním nadpisem — text plyne přímo z Triterpenů", en: "Book-structure note: no separate bold heading for 'Steroidy' appears here — the steroid-function paragraph and the steran skeleton follow directly, without a heading break, from the 'Triterpeny' paragraph about squalene.", cn: "教材结构说明：此处并无独立的“类固醇”粗体标题——关于类固醇功能及甾烷骨架的段落是紧接“三萜”一节中关于角鲨烯的段落直接展开的，中间没有标题分隔。" }
  ],
  terms: [
    { cz: "skvalen", en: "squalene", cn: "角鲨烯", def_en: "A C30 unsaturated triterpene hydrocarbon, formed from two farnesyl-PP units, that is an important biosynthetic precursor of steroids.", def_cn: "由两个法尼基焦磷酸单元形成的C30不饱和三萜烃，是类固醇生物合成的重要前体。" },
    { cz: "steran (perhydrocyklopentanofenantren)", en: "steran (perhydrocyclopentanophenanthrene)", cn: "甾烷（全氢环戊烷并菲）", def_en: "The fused four-ring (three six-membered + one five-membered) alicyclic skeleton common to all steroids, numbered at carbons 1-17.", def_cn: "所有类固醇共有的稠合四环（三个六元环+一个五元环）脂环骨架，碳原子编号1-17。" },
    { cz: "steroid", en: "steroid", cn: "类固醇", def_en: "Any compound built on the steran skeleton; the book names steroid sex hormones, bile acids, and cholesterol as examples with distinct biological roles.", def_cn: "任何基于甾烷骨架构建的化合物；教材以类固醇性激素、胆汁酸和胆固醇为例，说明其各自不同的生物学作用。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Squalene, the triterpene precursor of steroids, is built from how many farnesyl-PP units, and what is its carbon count?",
      q_cn: "角鲨烯——类固醇的三萜前体——由多少个法尼基焦磷酸单元构成，其碳原子数是多少？",
      options: ["One farnesyl-PP unit, C15", "Two farnesyl-PP units, C30", "Two digeranyl-PP units, C40", "Three geranyl-PP units, C30"],
      answer: 1,
      optionRefs: { 0: "8-2-4-1", 2: "8-2-4-6" },
      optionNotes: {
        0: { en: "One farnesyl-PP is C15, the sesquiterpenes; it takes two of them to reach squalene. Halving the count halves the carbons and lands one rung lower on the classification ladder.", cn: "一个 farnesyl-PP 是 C15，属 sesquiterpene；要两个才够拼成 squalene。数目减半，碳数也减半，在分类的阶梯上就掉了一级。" },
        2: { en: "Two digeranyl-PP units do combine, but they give C40 — phytoene, the tetraterpene, which is where the carotenoids begin. The carbon count in this option is right for phytoene, not for squalene.", cn: "两个 digeranyl-PP 确实会结合，但给出的是 C40——phytoene，属 tetraterpene，也就是 carotenoid 的起点。这个选项里的碳数对的是 phytoene，不是 squalene。" },
        3: { en: "The carbon count happens to come out right, but the chain is not built that way. Units are added five carbons at a time as IPP, so C30 is reached as two C15 farnesyl-PP and never as three C10 geranyl-PP.", cn: "碳数碰巧算对了，但这条链不是这样搭起来的。单元是以 IPP 每次五个碳地加上去的，所以 C30 是由两个 C15 的 farnesyl-PP 得到，绝不是由三个 C10 的 geranyl-PP。" }
      },
      why_en: "Per the classification chain given earlier in this section, two farnesyl-PP (C15 each) units combine to give squalene, C30, the triterpene precursor of steroids — not digeranyl-PP (which instead dimerizes to give the C40 tetraterpene phytoene).",
      why_cn: "根据本节前面给出的分类链，两个法尼基焦磷酸（各C15）单元结合生成角鲨烯，C30，即类固醇的三萜前体——而不是双牛儿基焦磷酸（后者二聚生成C40四萜八氢番茄红素）。"
    },
    {
      type: "short",
      q_en: "What is the name of the common structural skeleton shared by all steroids, and how many carbons is it numbered up to in the book's diagram?",
      q_cn: "所有类固醇共有的结构骨架叫什么名称？教材图中碳原子编号到多少？",
      accept: ["steran", "perhydrocyclopentanophenanthrene", "17", "甾烷", "全氢环戊烷并菲"],
      answer_en: "Steran (perhydrocyclopentanophenanthrene) — a fused four-ring alicyclic system with carbons numbered 1 through 17.",
      answer_cn: "甾烷（全氢环戊烷并菲）——一种稠合四环脂环体系，碳原子编号1至17。"
    }
  ],
  oral: {
    q_en: "How does squalene connect to steroids, and what is the shared structural basis of all steroid compounds?",
    q_cn: "角鲨烯与类固醇有何联系？所有类固醇化合物共有的结构基础是什么？",
    model_en: "Squalene is the triterpene the book introduces right before steroids — an unsaturated C30 hydrocarbon built from two farnesyl-PP units, and it's specifically called an important precursor of steroids. From there the book moves straight into describing steroids themselves, without a new heading: they're found throughout the whole organism and cover a surprisingly varied set of jobs — steroid sex hormones function as hormones, bile acids act as emulsifying agents that are important for digesting lipids, and cholesterol sits in biological membranes while its esters help transport lipids both across membranes and through the bloodstream. What ties all of these together structurally is a shared skeleton called steran, or perhydrocyclopentanophenanthrene — a system of fused alicyclic rings, three six-membered and one five-membered, with the carbons numbered one through seventeen in the book's diagram.",
    checklist: [
      "Squalene = C30 unsaturated triterpene, from 2 farnesyl-PP units",
      "Squalene = important precursor of steroids",
      "Steroid functions named: sex hormones, bile acids (emulsifiers), cholesterol (membranes + ester transport)",
      "Common skeleton = steran (perhydrocyclopentanophenanthrene)",
      "Steran = fused 4-ring system, carbons numbered 1-17",
      "Noted: book gives no separate 'Steroidy' heading here, flows directly from Triterpeny"
    ]
  }
},

{
  id: "8-2-4-4",
  book: "cz",
  topicKey: "lipid-signals-and-pigments",
  chapter: 8,
  section: "8.2.4",
  czTitle: "Steroly a cholesterol: rozmanitost steroidů a jejich deriváty",
  enTitle: "Sterols and cholesterol: steroid diversity and derivatives",
  cnTitle: "固醇与胆固醇：类固醇的多样性及其衍生物",
  pages: [185],
  coverage: "full",
  coverageNote: "Page 185 read in full from the 'Rozmanitost steroidů...' paragraph through the end of the page: the desaturation/functional-group diversity statement, the sterol definition (C8-10 chain at C17 plus OH at C3), the cholesterol paragraph (membrane proportion 0-40%, rigidity contribution), the cholesterol-as-precursor list (bile acids, sex hormones, vitamin D in some organisms, plant sterols stigmasterol/ergosterol/sitosterol, secondary plant metabolites/cardiac glycosides and their named poison examples), and the four structure diagrams (cholesterol, progesterone, testosterone, digitoxigenin) — all verified directly against the scan.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Steroid diversity arises from two sources: differing degrees of skeletal desaturation, and the presence of various — especially oxygen-containing — functional groups at different positions of the steran skeleton. A hydrocarbon side chain of 8 to 10 carbons at position 17, together with a hydroxyl group at position 3, is the characteristic mark of steroids called STEROLS, whose most important representative in the animal kingdom is CHOLESTEROL. Cholesterol is an important component of cell membranes; depending on membrane type, its share ranges from 0 to 40% of total membrane lipids. Because the steroid skeleton is relatively inflexible, cholesterol contributes very significantly to the rigidity of biological membranes. Cholesterol is also the primary metabolic precursor of other important steroids: bile acids (e.g. cholic acid) and sex hormones (e.g. progesterone and testosterone); in some organisms, also of vitamin D; in plants, of the plant sterols stigmasterol, ergosterol, and sitosterol; and of so-called secondary plant metabolites — cardiac-glycoside poisons (saponins and steroid alkaloids) and their aglycones (genins). Named examples of these plant poisons include the foxglove poisons (digitoxins), oleander/strophanthus poisons (strophanthins and ouabain), and potato/tomato poisons (solanines). The book illustrates all this with structures of cholesterol, progesterone, testosterone, and digitoxigenin.",
    cn: "类固醇的多样性来自两个方面：骨架去饱和程度的不同，以及骨架不同位置上存在的各种——尤其是含氧的——官能团。17位上带有8至10个碳的烃链，加上3位上的羟基，是被称为固醇的一类类固醇的特征标志，其在动物界最重要的代表是胆固醇。胆固醇是细胞膜的重要组分；根据膜的类型不同，其占膜脂总量的比例从0%到40%不等。由于类固醇骨架相对不够灵活，胆固醇对生物膜刚性的贡献非常显著。胆固醇同时也是其他重要类固醇的主要代谢前体：胆汁酸（如胆酸）和性激素（如孕酮和睾酮）；在某些生物体内也是维生素D的前体；在植物中是植物固醇豆甾醇、麦角固醇和谷甾醇的前体；也是所谓次生植物代谢物——强心苷类毒物（皂苷和甾体生物碱）及其苷元的前体。这类植物毒素的具体例子包括洋地黄毒素（毛地黄毒苷）、夹竹桃/黄花夹竹桃毒素（毒毛旋花苷和乌本苷）以及马铃薯/番茄毒素（茄碱）。教材以胆固醇、孕酮、睾酮和洋地黄毒苷元的结构图示说明以上内容。"
  },
  mustKnow: { en: "Sex hormones are chemical switches: estrogen and testosterone have tiny structural differences but flip completely opposite cascades. Shape decides everything.", cn: "性激素是化学开关：雌激素和睾酮的结构差异微小但启动相反的级联反应。形状决定一切。" },
  points: [
    { cz: "rozmanitost = desaturace + kyslíkaté funkční skupiny", en: "Steroid diversity arises from differing degrees of skeletal desaturation and the presence of various — especially oxygen-containing — functional groups at different positions of the steran skeleton.", cn: "类固醇的多样性来自骨架去饱和程度不同，以及骨架不同位置上存在的各种——尤其是含氧的——官能团。" },
    { cz: "sterol = 8-10C řetězec na C17 + OH na C3; nejdůležitější = cholesterol", en: "A hydrocarbon side chain of 8-10 carbons at position 17 plus a hydroxyl at position 3 is the characteristic mark of steroids called STEROLS; the most important animal-kingdom representative is CHOLESTEROL.", cn: "17位带8-10碳烃链、3位带羟基，是称为固醇的一类类固醇的特征标志；动物界最重要的代表是胆固醇。" },
    { cz: "cholesterol = 0-40 % membránových lipidů, přispívá k rigiditě", en: "Cholesterol is an important membrane component, ranging from 0 to 40% of total membrane lipids depending on membrane type; because the steroid skeleton is relatively inflexible, cholesterol contributes very significantly to membrane rigidity.", cn: "胆固醇是重要的膜组分，依膜类型不同占膜脂总量的0%至40%；由于类固醇骨架相对不灵活，胆固醇对膜刚性贡献非常显著。" },
    { cz: "cholesterol = prekurzor žlučových kyselin, pohlavních hormonů, (u některých) vitaminu D", en: "Cholesterol is the primary metabolic precursor of bile acids (e.g. cholic acid) and sex hormones (e.g. progesterone, testosterone), and in some organisms also of vitamin D.", cn: "胆固醇是胆汁酸（如胆酸）和性激素（如孕酮、睾酮）的主要代谢前体，在某些生物体内也是维生素D的前体。" },
    { cz: "rostlinné steroly: stigmasterol, ergosterol, sitosterol", en: "In plants, cholesterol's biosynthetic relatives include the plant sterols stigmasterol, ergosterol, and sitosterol.", cn: "在植物中，与胆固醇同源的生物合成产物包括植物固醇豆甾醇、麦角固醇和谷甾醇。" },
    { cz: "sekundární rostlinné metabolity: srdeční glykosidy (saponiny, steroidní alkaloidy) a geniny", en: "Cholesterol/plant-sterol pathways also give rise to so-called secondary plant metabolites — cardiac-glycoside poisons (saponins and steroid alkaloids) and their aglycones (genins).", cn: "胆固醇/植物固醇途径还产生所谓的次生植物代谢物——强心苷类毒物（皂苷和甾体生物碱）及其苷元。" },
    { cz: "jedy: náprstník (digitoxiny), krutikvět (strofantiny, oubain), brambor/rajče (solaniny)", en: "Named examples: foxglove poisons = digitoxins; oleander/strophanthus poisons = strophanthins and ouabain; potato and tomato poisons = solanines.", cn: "具体例子：洋地黄毒素（毛地黄毒苷）；夹竹桃/黄花夹竹桃毒素（毒毛旋花苷、乌本苷）；马铃薯/番茄毒素（茄碱）。" },
    { cz: "struktury: cholesterol, progesteron, testosteron, digitoxigenin", en: "The book illustrates this section with structures of cholesterol (3beta-OH, Delta5 double bond, branched C17 side chain), progesterone (3-keto, Delta4, C17 acetyl group), testosterone (3-keto, Delta4, C17beta-OH), and digitoxigenin (3beta-OH steroid with an unsaturated lactone ring at C17 — the cardenolide-type aglycone).", cn: "教材以胆固醇（3β-OH，Δ5双键，C17支链）、孕酮（3-酮基，Δ4，C17乙酰基）、睾酮（3-酮基，Δ4，C17β-OH）和洋地黄毒苷元（3β-OH类固醇，C17带不饱和内酯环——强心甾型苷元）的结构图示说明本节内容。" }
  ],
  terms: [
    { cz: "sterol", en: "sterol", cn: "固醇", def_en: "A steroid bearing an 8-10 carbon hydrocarbon chain at C17 and a hydroxyl at C3; cholesterol is the leading animal example.", def_cn: "在C17带8-10碳烃链、在C3带羟基的类固醇；胆固醇是动物界的主要代表。" },
    { cz: "cholesterol", en: "cholesterol", cn: "胆固醇", def_en: "The most important animal sterol; a membrane component (0-40% of membrane lipids) contributing to membrane rigidity, and the metabolic precursor of bile acids, sex hormones, and (in some organisms) vitamin D.", def_cn: "动物界最重要的固醇；是占膜脂0-40%的膜组分，可增强膜刚性，也是胆汁酸、性激素及（在某些生物体内）维生素D的代谢前体。" },
    { cz: "srdeční glykosidy (saponiny, steroidní alkaloidy)", en: "cardiac glycosides (saponins, steroid alkaloids)", cn: "强心苷（皂苷、甾体生物碱）", def_en: "Secondary plant steroid metabolites that act as poisons; named book examples include digitoxins (foxglove), strophanthins/ouabain (oleander/strophanthus), and solanines (potato/tomato).", def_cn: "作为毒物的次生植物类固醇代谢物；教材举例包括毛地黄毒苷（洋地黄）、毒毛旋花苷/乌本苷（夹竹桃/黄花夹竹桃）和茄碱（马铃薯/番茄）。" },
    { cz: "progesteron / testosteron", en: "progesterone / testosterone", cn: "孕酮／睾酮", def_en: "Steroid sex hormones derived metabolically from cholesterol, both sharing a 3-keto/Delta4 A-ring.", def_cn: "由胆固醇代谢衍生的类固醇性激素，二者均具有3-酮基/Δ4的A环结构。" },
    { cz: "digitoxigenin", en: "digitoxigenin", cn: "洋地黄毒苷元", def_en: "The aglycone (genin) of a foxglove cardiac glycoside (digitoxin), bearing the characteristic unsaturated lactone ring at C17.", def_cn: "洋地黄毛地黄毒苷（一种强心苷）的苷元，在C17带有特征性的不饱和内酯环。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What two structural features define the class of steroids called 'sterols' according to the book?",
      q_cn: "根据教材，定义“固醇”这一类固醇亚类的两个结构特征是什么？",
      options: [
        "A ketone at C3 together with a double bond between C4 and C5",
        "An 8-10 carbon hydrocarbon chain at position 17 and a hydroxyl group at position 3",
        "An unsaturated lactone ring at position 17 together with a hydroxyl group at position 3",
        "Complete saturation of all four rings and no side chain at position 17"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "That is the pattern of progesterone and testosterone — a 3-keto group with a Δ4 double bond — which is exactly how those two hormones differ from cholesterol's 3β-OH and Δ5.", cn: "那是 progesterone 和 testosterone 的式样——3 位酮基加 Δ4 双键——这正是这两个激素与 cholesterol 的 3β-OH、Δ5 的区别所在。" },
        2: { en: "That is digitoxigenin, the cardenolide aglycone: a 3β-hydroxy steroid carrying an unsaturated lactone ring at C17 in place of a hydrocarbon side chain. The hydroxyl half is right, the C17 half is not.", cn: "那是 digitoxigenin，即 cardenolide 型的苷元：一个 3β-羟基 steroid，C17 上带的是不饱和内酯环，而不是烃基侧链。羟基那一半说对了，C17 那一半没有。" },
        3: { en: "The side chain is half the definition, so removing it removes the class. Steroid diversity in fact runs the other way: differing degrees of desaturation plus oxygen-containing groups at various positions of the steran skeleton.", cn: "侧链是定义的一半，去掉它这一类就不存在了。Steroid 的多样性其实来自相反的方向：不同程度的去饱和，加上 steran 骨架各个位置上的含氧官能团。" }
      },
      why_en: "The book states that an 8-10 carbon hydrocarbon chain at position 17 together with a hydroxyl group at position 3 is the characteristic mark of sterols, of which cholesterol is the most important animal example.",
      why_cn: "教材指出，17位的8-10碳烃链加上3位的羟基是固醇的特征标志，胆固醇是动物界最重要的代表。"
    },
    {
      type: "mcq",
      q_en: "Per the book, cholesterol's proportion of total membrane lipids can range from 0% up to what maximum, depending on membrane type?",
      q_cn: "根据教材，胆固醇占膜脂总量的比例依膜类型不同，最高可达多少？",
      options: [
        "5%",
        "25%",
        "40%",
        "up to 60%"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Too low for the top of the range. The book's figure runs from 0 up to 40% of total membrane lipids depending on the type of membrane — and it is the upper end that makes cholesterol a major structural component rather than a trace one.", cn: "作为范围的上限太低了。教材给的是随膜的类型从 0 到 40% 的总膜脂——正是这个上限使 cholesterol 成为主要的结构组分，而不是痕量成分。" },
        1: { en: "The upper end of the range is 40, not 25. The point of quoting a range at all is that some membranes carry no cholesterol whatever while others are close to half cholesterol by lipid content.", cn: "范围的上限是 40，不是 25。之所以要给一个范围，是因为有的膜完全不含 cholesterol，有的则接近脂类含量的一半。" },
        3: { en: "Above the book's figure. Because the steroid skeleton is relatively inflexible, even the 40% maximum already contributes very significantly to the rigidity of the membrane.", cn: "超过了教材给的数。由于 steroid 骨架相对不易弯折，即便是 40% 这个上限，也已经对膜的刚性有非常显著的贡献了。" }
      },
      why_en: "The book states cholesterol's share of total membrane lipids ranges from 0 to 40% depending on the type of membrane.",
      why_cn: "教材指出，胆固醇占膜脂总量的比例依膜类型不同，从0%到40%不等。"
    },
    {
      type: "short",
      q_en: "Name three classes of steroid compounds for which cholesterol is the book's stated metabolic precursor.",
      q_cn: "列举三类教材中指出以胆固醇为代谢前体的类固醇化合物。",
      accept: ["bile acids", "sex hormones", "vitamin D", "plant sterols", "cardiac glycosides", "胆汁酸", "性激素", "维生素D", "植物固醇", "强心苷"],
      answer_en: "Any three of: bile acids (e.g. cholic acid), sex hormones (e.g. progesterone/testosterone), vitamin D (in some organisms), plant sterols (stigmasterol, ergosterol, sitosterol), and secondary plant metabolites/cardiac glycosides (saponins, steroid alkaloids).",
      answer_cn: "以下任意三项：胆汁酸（如胆酸）、性激素（如孕酮/睾酮）、维生素D（在某些生物体内）、植物固醇（豆甾醇、麦角固醇、谷甾醇）、次生植物代谢物/强心苷（皂苷、甾体生物碱）。"
    }
  ],
  oral: {
    q_en: "Explain what makes a steroid a 'sterol,' and list cholesterol's major downstream metabolic products.",
    q_cn: "解释什么样的类固醇被称为“固醇”，并列举胆固醇的主要下游代谢产物。",
    model_en: "Steroids get their diversity from two things: how saturated or desaturated the steran skeleton is, and which functional groups — usually oxygen-containing ones — sit at which positions on that skeleton. Sterols are specifically the steroids that have an eight-to-ten carbon hydrocarbon chain hanging off position 17, plus a hydroxyl group at position 3, and the most important sterol in the whole animal kingdom is cholesterol. Cholesterol is a major membrane component, anywhere from zero to forty percent of a membrane's total lipid depending on what kind of membrane it is, and because the steroid skeleton itself is fairly rigid, cholesterol is a big part of what gives biological membranes their structural rigidity. But cholesterol isn't just structural — it's also the main metabolic starting point for a whole set of other steroids: bile acids like cholic acid, sex hormones like progesterone and testosterone, vitamin D in some organisms, the plant sterols stigmasterol, ergosterol, and sitosterol, and even the secondary plant metabolites that end up as cardiac-glycoside poisons — saponins and steroid alkaloids — with well-known examples like the digitoxins from foxglove, strophanthins and ouabain from oleander and strophanthus, and the solanines found in potatoes and tomatoes.",
    checklist: [
      "Steroid diversity = desaturation level + oxygenated functional groups at different positions",
      "Sterol definition: C8-10 chain at C17 + OH at C3",
      "Cholesterol = most important animal sterol",
      "Cholesterol = 0-40% of membrane lipids, contributes to membrane rigidity",
      "Cholesterol precursor of: bile acids, sex hormones, vitamin D (some organisms), plant sterols, cardiac glycosides",
      "Named poison examples: digitoxins, strophanthins/ouabain, solanines"
    ]
  }
},

{
  id: "8-2-4-5",
  book: "cz",
  topicKey: "lipid-signals-and-pigments",
  chapter: 8,
  section: "8.2.4",
  czTitle: "Vitamin D (kalciferoly)",
  enTitle: "Vitamin D (calciferols)",
  cnTitle: "维生素D（钙化醇）",
  pages: [186],
  coverage: "full",
  coverageNote: "Top of page 186 read in full and directly against the scan: the vitamin D/calciferol paragraph and the 7-dehydrocholesterol -> cholecalciferol (vitamin D3) reaction diagram, including the stated mechanism (UV opens ring B between C9-C10, double-bond rearrangement) and the ring lettering (A, B, C, D) shown in this specific figure.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Vitamin D compounds — the CALCIFEROLS — are often counted among the steroid substances even though they do not themselves have a steroid structure; rather, they arise FROM steroid precursors. The mechanism: ultraviolet (UV) radiation opens ring B of the steroid skeleton between carbons 9 and 10, and a double-bond rearrangement follows. The book illustrates this with 7-DEHYDROCHOLESTEROL converting, under UV light (hv), into CHOLECALCIFEROL (vitamin D3) — the diagram shows ring B breaking open between the indicated carbons while rings A, C, and D (labelled) and the side chain are retained.",
    cn: "维生素D类化合物——钙化醇——常被归入类固醇物质之列，尽管它们本身并不具有类固醇结构；而是由类固醇前体转化而来。其机制为：紫外线（UV）辐射使类固醇骨架的B环在第9和第10碳之间打开，并伴随双键重排。教材以7-脱氢胆固醇在紫外光（hv）作用下转化为胆钙化醇（维生素D3）为例：图中显示B环在指定碳原子间断裂开环，而A、C、D环（标注字母）及侧链保持不变。"
  },
  mustKnow: { en: "Vitamin D is not a lipid structurally, but it comes from a steroid precursor, cleaved open by sunlight. Sunlight is the signal, not a vitamin in food.", cn: "维生素D从结构上看不是脂质，但来自类固醇前体，经日光开环裂解。阳光才是真正的信号。" },
  points: [
    { cz: "vitamin D (kalciferoly) = počítány mezi steroidy, ale nemají steroidní strukturu", en: "Vitamin D compounds (calciferols) are often counted among the steroid substances even though they do NOT themselves have a steroid structure — they arise from steroid precursors instead.", cn: "维生素D类化合物（钙化醇）常被归入类固醇物质之列，尽管它们本身并不具有类固醇结构——而是由类固醇前体转化而来。" },
    { cz: "mechanismus: UV otevírá kruh B mezi C9-C10, přesmyk dvojné vazby", en: "Mechanism: ultraviolet (UV) radiation opens ring B of the steroid skeleton between carbons 9 and 10, and a double-bond rearrangement follows.", cn: "机制：紫外线（UV）辐射使类固醇骨架B环在第9和第10碳之间打开，随后发生双键重排。" },
    { cz: "7-dehydrocholesterol --hv--> cholekalciferol (vitamin D3)", en: "The book's example: 7-DEHYDROCHOLESTEROL converts, under UV light (hv), into CHOLECALCIFEROL (vitamin D3); the diagram shows ring B breaking open between C9 and C10 while rings A, C, D and the side chain are retained.", cn: "教材示例：7-脱氢胆固醇在紫外光（hv）作用下转化为胆钙化醇（维生素D3）；图中显示B环在C9与C10之间断裂开环，而A、C、D环及侧链保持不变。" }
  ],
  terms: [
    { cz: "vitamin D (kalciferol)", en: "vitamin D (calciferol)", cn: "维生素D（钙化醇）", def_en: "A group of compounds counted among the steroids by origin (arising from steroid precursors via UV-driven ring opening) though not steroids in structure themselves.", def_cn: "一类因来源（经紫外线驱动的开环反应由类固醇前体产生）而被归入类固醇的化合物，但其本身结构并非类固醇。" },
    { cz: "7-dehydrocholesterol", en: "7-dehydrocholesterol", cn: "7-脱氢胆固醇", def_en: "The steroid precursor that, upon UV irradiation, converts into cholecalciferol (vitamin D3).", def_cn: "经紫外线照射后转化为胆钙化醇（维生素D3）的类固醇前体。" },
    { cz: "cholekalciferol (vitamin D3)", en: "cholecalciferol (vitamin D3)", cn: "胆钙化醇（维生素D3）", def_en: "The vitamin D compound produced when UV light opens ring B of 7-dehydrocholesterol between C9 and C10, with an accompanying double-bond rearrangement.", def_cn: "紫外线使7-脱氢胆固醇的B环在C9与C10之间打开并伴随双键重排后生成的维生素D化合物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the book count vitamin D among the 'steroid substances' even though vitamin D compounds are not steroids in structure?",
      q_cn: "尽管维生素D化合物在结构上并非类固醇，教材为何仍将其归入“类固醇物质”之列？",
      options: [
        "Because vitamin D travels through the blood on the same lipoproteins as cholesterol esters",
        "Because vitamin D compounds arise from steroid precursors, via a UV-driven ring-opening reaction",
        "Because vitamin D is made in the same organ as cholesterol, out of the same acetyl-CoA pool",
        "Because the book counts every fat-soluble vitamin among the steroids as a matter of convention, vitamins A, E and K included"
      ],
      answer: 1,
      optionRefs: { 0: "8-2-4-4", 3: "8-2-4-2" },
      optionNotes: {
        0: { en: "Cholesterol's esters do take part in lipid transport across membranes and through the bloodstream, so the fact is real — but transport is not what the classification rests on. It rests on where the molecule comes from.", cn: "Cholesterol 的酯确实参与脂类跨膜和经血流的转运，所以这个说法本身没错——但分类依据的不是转运，而是这个分子的来源。" },
        2: { en: "The book names no organ at all in this passage. What it names is a precursor, 7-dehydrocholesterol, and a reaction: UV light opening ring B between carbons 9 and 10, followed by a double-bond rearrangement.", cn: "教材在这一段里根本没有提到任何器官。它提到的是一个前体 7-dehydrocholesterol，和一个反应：紫外线在 C9 与 C10 之间打开 B 环，随后双键重排。" },
        3: { en: "Vitamins A, E and K are grouped with the terpenoids, by way of their isoprenoid side chains. Vitamin D is singled out for a different reason entirely: it is the one whose precursor is itself a steroid.", cn: "Vitamin A、E、K 是按其 isoprenoid 侧链归入 terpenoid 的。Vitamin D 被单独拎出来，理由完全不同：它是唯一前体本身就是 steroid 的那一个。" }
      },
      why_en: "The book explicitly says vitamin D compounds are often counted among steroid substances despite lacking a steroid structure themselves, because they arise from steroid precursors — specifically via UV opening ring B between C9 and C10 with a double-bond rearrangement.",
      why_cn: "教材明确指出，尽管维生素D化合物本身并不具有类固醇结构，但常被归入类固醇物质之列，因为它们由类固醇前体转化而来——具体机制是紫外线使B环在C9与C10之间打开并伴随双键重排。"
    },
    {
      type: "short",
      q_en: "Name the steroid precursor and the product in the book's vitamin D3 formation example, and state what triggers the conversion.",
      q_cn: "写出教材维生素D3生成示例中的类固醇前体和产物，并说明触发该转化的因素。",
      accept: ["7-dehydrocholesterol", "cholecalciferol", "vitamin D3", "UV", "ultraviolet", "7-脱氢胆固醇", "胆钙化醇", "紫外线"],
      answer_en: "7-dehydrocholesterol converts to cholecalciferol (vitamin D3), triggered by ultraviolet (UV) light, which opens ring B between carbons 9 and 10 and causes a double-bond rearrangement.",
      answer_cn: "7-脱氢胆固醇转化为胆钙化醇（维生素D3），由紫外线（UV）触发，紫外线使B环在第9和第10碳之间打开并引起双键重排。"
    }
  ],
  oral: {
    q_en: "Explain how vitamin D3 forms from a steroid precursor, and why vitamin D is grouped with the steroids despite not being one structurally.",
    q_cn: "解释维生素D3如何由类固醇前体生成，以及为何维生素D尽管在结构上并非类固醇却被归入类固醇一类。",
    model_en: "Vitamin D compounds, the calciferols, get grouped with the steroid substances even though, structurally, they aren't steroids themselves — the reason is that they're generated directly from steroid precursors. The mechanism the book shows is that ultraviolet light opens ring B of the steroid skeleton, specifically breaking the bond between carbons 9 and 10, and that's accompanied by a rearrangement of a double bond in the molecule. The concrete example given is 7-dehydrocholesterol, which under UV light converts into cholecalciferol, vitamin D3 — the diagram shows ring B broken open while rings A, C, and D and the side chain stay intact.",
    checklist: [
      "Vitamin D (calciferols) grouped with steroids by origin, not by structure",
      "Vitamin D compounds arise FROM steroid precursors",
      "Mechanism: UV opens ring B between C9 and C10, double-bond rearrangement",
      "Example: 7-dehydrocholesterol --UV/hv--> cholecalciferol (vitamin D3)",
      "Rings A, C, D and side chain retained; only ring B opens"
    ]
  }
},

{
  id: "8-2-4-6",
  book: "cz",
  topicKey: "lipid-signals-and-pigments",
  chapter: 8,
  section: "8.2.4",
  czTitle: "Tetraterpeny: karotenoidy a xantofyly",
  enTitle: "Tetraterpenes: carotenoids and xanthophylls",
  cnTitle: "四萜：类胡萝卜素与叶黄素",
  pages: [186, 187],
  coverage: "full",
  coverageNote: "The 'Tetraterpeny' subsection read in full across the page break: page 186 (from the heading through the carotenoid/xanthophyll definitions, the lycopene/beta-carotene statements, the three named xanthophyll examples with their structures — zeaxanthin, astaxanthin, fucoxanthin) plus the continuation on page 187 (all-trans/cis isomerism and its role in photoreception, the carotenes-vs-xanthophylls two-group split with the functional-group/absorption-shift explanation, carotenoid instability and stabilization as carotenoproteins, the photosynthesis accessory-pigment cross-reference to book section 9.1.1, the antioxidant/active-oxygen-binding role, the post-ingestion fate in animals including chromoproteins and anticarcinogenic effects, and the beta-carotene -> 2x retinol oxidative-cleavage diagram) — all read directly against the scans. IMPORTANT BOUNDARY NOTE: this node's 'pages' field deliberately extends one page past this drafting batch's nominal 180-186 range, to page 187, because the book's own Tetraterpeny discussion runs continuously across the 186/187 page break with no paragraph break at the top of 187 — stopping the node at page 186 would have cut the topic off mid-argument (before the carotene/xanthophyll split and the retinol-cleavage payoff). Page 187 was read ONLY as far as the point where the bold heading '8.3 Biosyntéza lipidů' begins (a little more than halfway down the page, immediately after the beta-carotene/retinol diagram) — everything from that heading onward (fatty-acid biosynthesis, the three-subcellular-compartment system, acetyl-CoA as the building block) belongs to the next book section and is explicitly NOT covered by this node or by any other node in this batch. Whoever drafts chapter 8's next range should start reading at the '8.3 Biosyntéza lipidů' heading on page 187, not at the top of the page.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Carotenoid conjugated bonds make them useful but fragile. Nature wraps them in proteins. The most useful molecules are always the most fragile.", cn: "类胡萝卜素共轭双键使其有用但脆弱。自然界用蛋白质保护。最有用的分子总是最脆弱的。" },
  summary: {
    en: "TETRATERPENES in nature are, without exception, of plant origin, known in the form of CAROTENOIDS. They contain a long system of conjugated double bonds (3 to 11) in the molecule, so they are strikingly colored — from yellowish tints to red-brown. More than 400 carotenoids have been described, all of which can be derived from LYCOPENE, the main pigment of tomatoes and rosehips. The most widespread carotenoid in nature is BETA-CAROTENE; its oxidized derivatives are called XANTHOPHYLLS. The book names three xanthophyll examples with structures: zeaxanthin (beta,beta-carotene-3,3'-diol), the typical yellow pigment of higher-plant leaves; astaxanthin (3,3'-dihydroxy-beta,beta-carotene-4,4'-dione), the blue-green pigment of crustaceans; and fucoxanthin, the brown-red pigment of brown seaweeds. Continuing (on page 187): the most stable spatial form of carotenoids is all-trans, thermodynamically the most favorable; after the molecule's energy content increases (e.g. by absorbing a light quantum), the cis form converts to trans, and this endothermic transformation is very significant for light reception in photoreceptive organs. In nature carotenoids form two large groups — CAROTENES (pure hydrocarbons) and XANTHOPHYLLS (carotene derivatives bearing oxygen-containing groups: hydroxyl, epoxide, carbonyl, carboxyl, or saccharide residues); adding such a group shifts the absorption maximum toward longer wavelengths, changing the color. Because of their conjugated double-bond system, isolated carotenoids are relatively unstable, readily oxidized by atmospheric oxygen (especially in light); in their natural state they are protected and stabilized, usually by binding to a protein structure, forming CAROTENOPROTEINS. Carotenoids' ability to absorb light is exploited in photosynthesis, where they act as accessory light-harvesting pigments (cross-referenced to the book's own section 9.1.1). Carotenoids can also bind reactive oxygen species (singlet oxygen, superoxide anion radical, hydroperoxide radical), so they also act as ANTIOXIDANTS. After animals ingest them, plant carotenoids are partly excreted unchanged, partly stored in fat and nervous tissue as a reserve of provitamin A, and some are bound to proteins — e.g. in blood serum as CHROMOPROTEINS, where their antioxidant properties are also prominent, and anticarcinogenic effects have been demonstrated. For animals, the enzyme-controlled SYMMETRIC CLEAVAGE of beta-carotene into two molecules of RETINOL — vitamin A (axerophtol) — is very important. Immediately after this diagram, the book's page 187 moves into the bold heading '8.3 Biosyntéza lipidů' (fatty-acid biosynthesis), which is outside this node's scope.",
    cn: "自然界中的四萜无一例外均为植物来源，以类胡萝卜素的形式存在。其分子中含有长链共轭双键体系（3至11个），因此颜色鲜艳——从黄色调到红棕色不等。已描述的类胡萝卜素超过400种，均可视为番茄红素（番茄和蔷薇果的主要色素）的衍生物。自然界中分布最广的类胡萝卜素是β-胡萝卜素；其氧化衍生物称为叶黄素。教材以结构图举出三个叶黄素实例：玉米黄质（β,β-胡萝卜素-3,3'-二醇），高等植物叶片的典型黄色色素；虾青素（3,3'-二羟基-β,β-胡萝卜素-4,4'-二酮），甲壳类动物的蓝绿色色素；以及岩藻黄质，褐藻的棕红色色素。（第187页续）：类胡萝卜素在空间构型上最稳定的形式是全反式，热力学上最有利；当分子能量增加后（例如吸收光量子后），顺式会转变为反式，这种吸热转变对光感受器官中的光接收非常重要。自然界中类胡萝卜素形成两大类——胡萝卜素类（纯烃类）和叶黄素类（含氧基团的胡萝卜素衍生物：羟基、环氧基、羰基、羧基或糖基）；引入此类基团会使吸收峰向长波方向移动，从而改变颜色。由于共轭双键体系的存在，分离态的类胡萝卜素相对不稳定，易被空气中的氧氧化（尤其在光照下）；在天然状态下，它们通常通过与蛋白质结构结合而受到保护和稳定，形成类胡萝卜素蛋白。类胡萝卜素吸收光的能力被用于光合作用，在其中作为辅助集光色素（教材交叉引用其自身第9.1.1节）。类胡萝卜素还能结合活性氧（单线态氧、超氧阴离子自由基、氢过氧自由基），因此也起抗氧化剂的作用。动物摄入植物类胡萝卜素后，部分以原形排出体外，部分储存于脂肪和神经组织中作为维生素A原的储备，还有一些与蛋白质结合——例如在血清中形成所谓的色蛋白，其中抗氧化特性也十分显著，并已证实具有抗癌作用。对动物而言，酶控制的β-胡萝卜素对称裂解生成两分子视黄醇——维生素A（脱镁醇）——十分重要。紧接该图示之后，教材第187页即转入粗体标题“8.3 脂质的生物合成”（脂肪酸生物合成），该内容不在本节点范围之内。"
  },
  points: [
    { cz: "tetraterpeny = vždy rostlinného původu, karotenoidy", en: "Tetraterpenes in nature are, without exception, of plant origin, known in the form of CAROTENOIDS.", cn: "自然界中的四萜无一例外均为植物来源，以类胡萝卜素的形式存在。" },
    { cz: "3-11 konjugovaných dvojných vazeb -> výrazné zbarvení", en: "Carotenoids contain a long system of conjugated double bonds (3 to 11) in the molecule, making them strikingly colored, from yellowish tints to red-brown.", cn: "类胡萝卜素分子中含有长链共轭双键体系（3至11个），因此颜色鲜艳，从黄色调到红棕色不等。" },
    { cz: ">400 karotenoidů odvoditelných od lykopenu; nejrozšířenější = β-karoten", en: "More than 400 carotenoids have been described, all derivable from LYCOPENE (main pigment of tomatoes and rosehips); the most widespread carotenoid in nature is BETA-CAROTENE, whose oxidized derivatives are called XANTHOPHYLLS.", cn: "已描述的类胡萝卜素超过400种，均可视为番茄红素（番茄和蔷薇果的主要色素）的衍生物；自然界中分布最广的是β-胡萝卜素，其氧化衍生物称为叶黄素。" },
    { cz: "xantofyly: zeaxanthin, astaxanthin, fukoxanthin", en: "Named xanthophyll examples: zeaxanthin (beta,beta-carotene-3,3'-diol) — yellow pigment of higher-plant leaves; astaxanthin (3,3'-dihydroxy-beta,beta-carotene-4,4'-dione) — blue-green pigment of crustaceans; fucoxanthin — brown-red pigment of brown seaweeds.", cn: "叶黄素实例：玉米黄质（β,β-胡萝卜素-3,3'-二醇）——高等植物叶片的黄色色素；虾青素（3,3'-二羟基-β,β-胡萝卜素-4,4'-二酮）——甲壳类的蓝绿色色素；岩藻黄质——褐藻的棕红色色素。" },
    { cz: "[p.187] all-trans = nejstálejší forma; cis->trans po absorpci světla = významné pro fotorecepci", en: "The most stable spatial form of carotenoids is all-trans (thermodynamically most favorable); after the molecule absorbs a light quantum and its energy content rises, cis converts to trans — an endothermic transformation very significant for light reception in photoreceptive organs.", cn: "类胡萝卜素空间构型最稳定的形式是全反式（热力学上最有利）；分子吸收光量子、能量升高后，顺式转变为反式——这种吸热转变对光感受器官中的光接收非常重要。" },
    { cz: "[p.187] karoteny (čisté uhlovodíky) vs. xantofyly (kyslíkaté deriváty) — posun absorpce", en: "Carotenoids form two groups: CAROTENES (pure hydrocarbons) and XANTHOPHYLLS (carotene derivatives with oxygen-containing groups — hydroxyl, epoxide, carbonyl, carboxyl, or saccharide residues); adding such a group shifts the absorption maximum toward longer wavelengths, i.e. changes the color.", cn: "类胡萝卜素分两大类：胡萝卜素类（纯烃）和叶黄素类（带含氧基团的胡萝卜素衍生物——羟基、环氧基、羰基、羧基或糖基）；引入此类基团会使吸收峰向长波方向移动，即改变颜色。" },
    { cz: "[p.187] nestabilní v izolovaném stavu, stabilizovány jako karotenoproteiny", en: "Owing to the conjugated double-bond system, isolated carotenoids are relatively unstable, readily oxidized by atmospheric oxygen especially in light; in nature they are protected/stabilized, usually by binding to protein, forming CAROTENOPROTEINS.", cn: "由于共轭双键体系，分离态的类胡萝卜素相对不稳定，易被空气中的氧（尤其在光照下）氧化；在自然状态下通常通过与蛋白质结合而受到保护和稳定，形成类胡萝卜素蛋白。" },
    { cz: "[p.187] doplňkové světlosběrné pigmenty fotosyntézy (viz kap. 9.1.1); antioxidanty (singletový kyslík, superoxid, hydroperoxidový radikál)", en: "Carotenoids' light-absorbing ability is exploited in photosynthesis, acting as accessory light-harvesting pigments (cross-referenced by the book to its own section 9.1.1); they can also bind reactive oxygen species (singlet oxygen, superoxide anion radical, hydroperoxide radical), functioning as ANTIOXIDANTS.", cn: "类胡萝卜素的吸光能力被用于光合作用，充当辅助集光色素（教材交叉引用其自身第9.1.1节）；它们还能结合活性氧（单线态氧、超氧阴离子自由基、氢过氧自由基），起抗氧化剂作用。" },
    { cz: "[p.187] po požití: nezměněné vyloučení, zásoba provitaminu A, chromoproteiny (antioxidační a protinádorové účinky)", en: "After ingestion by animals, plant carotenoids are partly excreted unchanged, partly stored in fat/nervous tissue as a provitamin-A reserve, and some are bound to proteins — e.g. in blood serum as CHROMOPROTEINS, where antioxidant properties are again prominent and anticarcinogenic effects have been demonstrated.", cn: "动物摄入植物类胡萝卜素后，部分以原形排出体外，部分储存于脂肪和神经组织中作为维生素A原储备；还有一些与蛋白质结合——如在血清中形成色蛋白，其中抗氧化特性同样显著，并已证实具有抗癌作用。" },
    { cz: "[p.187] symetrické štěpení β-karotenu -> 2x retinol (vitamin A)", en: "For animals, the enzyme-controlled SYMMETRIC CLEAVAGE of beta-carotene into two molecules of RETINOL (vitamin A, axerophtol) is very important — shown as beta-carotene -> (oxidative cleavage) -> 2x retinol.", cn: "对动物而言，酶控制的β-胡萝卜素对称裂解生成两分子视黄醇（维生素A，脱镁醇）十分重要——图示为β-胡萝卜素→（氧化裂解）→2×视黄醇。" },
    { cz: "HRANICE: '8.3 Biosyntéza lipidů' začíná ihned poté na str. 187 — MIMO tento a celý dávkový rozsah", en: "BOUNDARY: the bold heading '8.3 Biosyntéza lipidů' (fatty-acid biosynthesis) begins immediately after the beta-carotene/retinol diagram, a little more than halfway down page 187 — this heading and everything under it is explicitly OUTSIDE this node and outside this entire drafting batch's scope.", cn: "边界说明：粗体标题“8.3 脂质的生物合成”（脂肪酸生物合成）紧接β-胡萝卜素/视黄醇图示之后、在第187页过半处开始——该标题及其后内容明确不在本节点及本批次任务范围之内。" }
  ],
  terms: [
    { cz: "karotenoid", en: "carotenoid", cn: "类胡萝卜素", def_en: "A plant-derived tetraterpene pigment with a long conjugated-double-bond system (3-11 double bonds); more than 400 described, all derivable from lycopene.", def_cn: "一类源自植物的四萜色素，具有长链共轭双键体系（3-11个双键）；已描述超过400种，均可视为番茄红素的衍生物。" },
    { cz: "lykopen", en: "lycopene", cn: "番茄红素", def_en: "The main pigment of tomatoes and rosehips; the parent hydrocarbon from which all described carotenoids can be derived.", def_cn: "番茄和蔷薇果的主要色素；所有已描述类胡萝卜素均可视为其衍生物的母体烃。" },
    { cz: "β-karoten", en: "beta-carotene", cn: "β-胡萝卜素", def_en: "The most widespread carotenoid in nature; a pure hydrocarbon carotene, and the substrate for symmetric enzymatic cleavage into two retinol molecules in animals.", def_cn: "自然界中分布最广的类胡萝卜素；一种纯烃类胡萝卜素，是动物体内酶促对称裂解生成两分子视黄醇的底物。" },
    { cz: "xantofyl (zeaxanthin, astaxanthin, fukoxanthin)", en: "xanthophyll (zeaxanthin, astaxanthin, fucoxanthin)", cn: "叶黄素（玉米黄质、虾青素、岩藻黄质）", def_en: "Oxidized carotene derivatives bearing oxygen-containing functional groups; book examples include zeaxanthin (plant leaves), astaxanthin (crustaceans), fucoxanthin (brown algae).", def_cn: "带含氧官能团的胡萝卜素氧化衍生物；教材举例包括玉米黄质（植物叶片）、虾青素（甲壳类）、岩藻黄质（褐藻）。" },
    { cz: "karotenoprotein / chromoprotein", en: "carotenoprotein / chromoprotein", cn: "类胡萝卜素蛋白／色蛋白", def_en: "Protein-bound forms that protect/stabilize otherwise oxidation-prone carotenoids in vivo; chromoproteins specifically are the blood-serum-bound form, with prominent antioxidant/anticarcinogenic properties.", def_cn: "在体内保护并稳定易被氧化的类胡萝卜素的蛋白结合形式；色蛋白特指血清中的蛋白结合形式，具有显著的抗氧化/抗癌特性。" },
    { cz: "retinol (vitamin A, axeroftol)", en: "retinol (vitamin A, axerophtol)", cn: "视黄醇（维生素A，脱镁醇）", def_en: "The product of symmetric enzymatic cleavage of beta-carotene (one beta-carotene yields two retinol molecules); the animal-active form of vitamin A.", def_cn: "β-胡萝卜素经酶促对称裂解的产物（一分子β-胡萝卜素生成两分子视黄醇）；维生素A在动物体内的活性形式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structural feature distinguishes xanthophylls from carotenes within the carotenoid group?",
      q_cn: "在类胡萝卜素这一大类中，叶黄素与胡萝卜素在结构上的区别是什么？",
      options: [
        "Xanthophylls are the pure hydrocarbons, while it is the carotenes that bear the oxygen-containing groups — hydroxyl, epoxide, carbonyl, carboxyl or saccharide residues",
        "Xanthophylls contain oxygen-bearing groups (hydroxyl, epoxide, carbonyl, carboxyl, or saccharide residues); carotenes are pure hydrocarbons",
        "Xanthophylls have no conjugated double bonds and so are colourless, while the carotenes carry between 3 and 11 of them",
        "There is no structural distinction, only a difference in which plant each is obtained from and at what wavelength it absorbs"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The two halves are swapped. Carotenes are the pure hydrocarbons; xanthophylls are the carotene derivatives that carry the oxygen-containing groups, and adding such a group shifts the absorption maximum toward longer wavelengths.", cn: "两半调换了。Carotene 才是纯烃；xanthophyll 是带含氧基团的 carotene 衍生物，而加上这样一个基团会使吸收峰向长波方向移动。" },
        2: { en: "The conjugated system — 3 to 11 double bonds — is what makes all carotenoids strikingly coloured, from yellowish tints to red-brown. Xanthophylls are pigments too: zeaxanthin is yellow, astaxanthin blue-green, fucoxanthin brown-red.", cn: "共轭体系（3 到 11 个双键）正是让所有 carotenoid 颜色鲜明的原因，从淡黄一直到红棕。Xanthophyll 同样是色素：zeaxanthin 是黄的，astaxanthin 是蓝绿的，fucoxanthin 是棕红的。" },
        3: { en: "The distinction is chemical, and it has a visible consequence: an added oxygen group moves the absorption maximum to longer wavelengths, which is to say it changes the colour. The plant source follows from the chemistry, not the other way round.", cn: "这个区分是化学上的，而且有看得见的后果：多一个含氧基团就把吸收峰推向长波，也就是改变颜色。植物来源是化学性质带来的结果，而不是反过来。" }
      },
      why_en: "The book defines carotenes as pure hydrocarbons and xanthophylls as carotene derivatives bearing oxygen-containing functional groups (hydroxyl, epoxide, carbonyl, carboxyl, or saccharide residues), which also shifts their absorption maximum to longer wavelengths.",
      why_cn: "教材将胡萝卜素定义为纯烃类，将叶黄素定义为带含氧官能团（羟基、环氧基、羰基、羧基或糖基）的胡萝卜素衍生物，这也使其吸收峰向长波方向移动。"
    },
    {
      type: "mcq",
      q_en: "The enzyme-controlled symmetric cleavage of beta-carotene produces how many molecules of retinol, and why is this reaction 'symmetric'?",
      q_cn: "β-胡萝卜素经酶控制的对称裂解生成多少分子视黄醇？为何该反应称为“对称”？",
      options: [
        "One retinol molecule, because only the half carrying the intact ring is retinol-active",
        "Two retinol molecules, because beta-carotene is cleaved at its central bond into two identical halves",
        "Four retinol molecules, one from each of the two rings and each of the two chain halves",
        "None at all; retinol reaches animals only in the diet, since ingested beta-carotene is either excreted unchanged or stored away in fat tissue"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Both halves are structurally identical, and that is exactly what 'symmetric' means here: the molecule is cut at its centre and each half becomes a retinol, so the yield is two.", cn: "两半在结构上完全相同，这正是这里所说的「对称」：分子从中间切开，每一半都成为一个 retinol，所以产量是两个。" },
        2: { en: "Two, not four. The cleavage is a single cut at the central bond, so each ring stays attached to its own half of the polyene chain rather than being separated from it.", cn: "是两个，不是四个。裂解只是在中央的键上切一刀，所以每个环都还连在自己那半条多烯链上，并没有被分开。" },
        3: { en: "Ingested beta-carotene is indeed partly excreted unchanged and partly stored in fat and nervous tissue — but the book calls that store a provitamin-A reserve, precisely because this cleavage can turn it into retinol when it is needed.", cn: "摄入的 beta-carotene 确实一部分原样排出、一部分储存在脂肪和神经组织里——但教材把这个储备称为 provitamin A 的储备，正因为需要时这个裂解可以把它变成 retinol。" }
      },
      why_en: "The book's diagram shows beta-carotene undergoing oxidative cleavage at its central double bond to give two (2x) molecules of retinol — 'symmetric' because beta-carotene's two halves are structurally identical.",
      why_cn: "教材图示显示β-胡萝卜素在其中央双键处经氧化裂解生成两（2×）分子视黄醇——之所以称“对称”，是因为β-胡萝卜素的两半结构完全相同。"
    },
    {
      type: "short",
      q_en: "Explain the biological significance of the cis-to-trans conversion of carotenoids described on page 187, and name the two roles carotenoids play (besides pigmentation) that the book connects to their conjugated double-bond system.",
      q_cn: "解释第187页所述类胡萝卜素顺式向反式转变的生物学意义，并说明教材将类胡萝卜素共轭双键体系与哪两种（除色素外的）功能联系起来。",
      accept: ["photosynthesis", "light-harvesting", "antioxidant", "photoreception", "singlet oxygen", "光合作用", "集光", "抗氧化", "光感受"],
      answer_en: "The all-trans form is thermodynamically most stable; absorbing a light quantum raises the molecule's energy and drives cis->trans conversion, which is very significant for light reception in photoreceptive organs. Besides coloration, the conjugated double-bond system underlies two other roles: acting as accessory light-harvesting pigments in photosynthesis, and acting as antioxidants by binding reactive oxygen species (singlet oxygen, superoxide anion radical, hydroperoxide radical).",
      answer_cn: "全反式构型热力学上最稳定；吸收光量子会提高分子能量并驱动顺式向反式转变，这对光感受器官中的光接收非常重要。除显色外，共轭双键体系还支持另外两种功能：在光合作用中充当辅助集光色素，以及通过结合活性氧（单线态氧、超氧阴离子自由基、氢过氧自由基）起抗氧化作用。"
    }
  ],
  oral: {
    q_en: "Describe the carotenoid/xanthophyll family and explain their biological roles, including the beta-carotene-to-retinol conversion.",
    q_cn: "描述类胡萝卜素/叶黄素家族，并解释其生物学作用，包括β-胡萝卜素向视黄醇的转化。",
    model_en: "Tetraterpenes in nature are always plant-derived and go by the name carotenoids — they carry a long conjugated double-bond system, anywhere from three to eleven double bonds, which is exactly what makes them so vividly colored, from yellow through to red-brown. Over four hundred have been described, and all of them can, in principle, be derived from lycopene, the main pigment in tomatoes and rosehips. The single most widespread carotenoid is beta-carotene, and its oxidized derivatives get a separate name, xanthophylls — the book gives zeaxanthin, the yellow pigment of higher-plant leaves, astaxanthin, the blue-green pigment of crustaceans, and fucoxanthin, the brown-red pigment of brown seaweed, as concrete examples. Structurally, carotenoids split into two groups: carotenes, which are pure hydrocarbons, and xanthophylls, which carry oxygen-containing groups — hydroxyl, epoxide, carbonyl, carboxyl, or even sugar residues — and adding one of those groups shifts the absorption maximum toward longer wavelengths, which is why xanthophylls and carotenes look different. The most stable spatial arrangement is all-trans, and when a carotenoid molecule absorbs a light quantum and gains energy, a cis form can convert to trans — an endothermic step that turns out to matter a great deal for light reception in photoreceptive organs. That same conjugated double-bond system that gives carotenoids their color also makes isolated carotenoids fairly unstable and easily oxidized by atmospheric oxygen, especially in light, so in nature they're normally protected by binding to a protein, forming what's called a carotenoprotein. Their light-absorbing ability is put to direct use in photosynthesis, where they act as accessory light-harvesting pigments, and they can also mop up reactive oxygen species like singlet oxygen, the superoxide anion radical, and the hydroperoxide radical, which makes them antioxidants too. Once an animal eats plant carotenoids, some pass through unchanged, some get stored in fat and nervous tissue as a reserve of provitamin A, and some bind to blood proteins as chromoproteins, where, again, their antioxidant and even anticarcinogenic properties show up. And for animals specifically, there's one especially important reaction: an enzyme symmetrically cleaves beta-carotene right down the middle to yield two molecules of retinol, which is vitamin A.",
    checklist: [
      "Tetraterpenes = always plant-derived, known as carotenoids",
      "3-11 conjugated double bonds -> strong coloration; >400 described, all derivable from lycopene",
      "Beta-carotene = most widespread; oxidized derivatives = xanthophylls (zeaxanthin, astaxanthin, fucoxanthin examples)",
      "Carotenes (pure hydrocarbons) vs xanthophylls (oxygen-group derivatives); functional groups shift absorption to longer wavelengths",
      "All-trans most stable; cis->trans on light absorption, important for photoreception",
      "Unstable/oxidation-prone in isolation; stabilized as carotenoproteins in vivo",
      "Roles: photosynthesis accessory light-harvesting pigments; antioxidants (bind reactive oxygen species)",
      "Animal fate: unchanged excretion, provitamin-A storage, chromoprotein binding (antioxidant/anticarcinogenic)",
      "Enzymatic symmetric cleavage of beta-carotene -> 2x retinol (vitamin A)",
      "Boundary: '8.3 Biosyntéza lipidů' begins right after this on p.187, not covered here"
    ]
  }
},

{
  id: "8-3-1",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Biosyntéza lipidů — Mastné kyseliny: subcelulární lokalizace, zdroj acetyl-CoA a vznik malonyl-CoA",
  enTitle: "Lipid biosynthesis — Fatty acids: subcellular compartmentalization, the source of acetyl-CoA, and malonyl-CoA formation",
  cnTitle: "脂质生物合成——脂肪酸：亚细胞定位、乙酰辅酶A的来源与丙二酰辅酶A的生成",
  pages: [187, 188],
  coverage: "full",
  coverageNote: "Full text of p.187 read directly beginning exactly at the '8.3 Biosyntéza lipidů' heading and its 'Mastné kyseliny' subheading — the carotenoid/beta-carotene-to-retinol content occupying the top two-thirds of p.187 belongs to the preceding section 8.2 and is deliberately EXCLUDED from this node (out of scope for section 8.3). Covers the three-subcellular-compartment paragraph and the acetyl-CoA-source paragraph on p.187 in full, continuing into the top of p.188: the malonyl-CoA-activation paragraph and its structural reaction equation (CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi, catalyzed by acetyl-CoA carboxylase, cofactors Mn2+ and biotin) verified by zoomed re-read of every symbol. TYPO NOTE verified directly against the scan: the book's own running prose on p.188 spells the product 'matonyl-CoA', not 'malonyl-CoA' — almost certainly a print typo, since the immediately following structural equation unambiguously draws the malonate skeleton (-OOC-CH2-C~SCoA). Reported throughout as malonyl-CoA, with the typo flagged rather than silently smoothed over. COFACTOR NOTE verified by zoom (ruled out a misread 'Mg'): the book's own equation specifies Mn2+, not the Mg2+ that most general biochemistry references name for acetyl-CoA carboxylase and similar ATP-dependent carboxylase/kinase reactions — reported exactly as the book states it.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Nothing can condense until acetyl-CoA has been carboxylated to MALONYL-CoA: that ATP-dependent step, run by acetyl-CoA carboxylase with biotin, is the gate into the whole synthesis. Note also where the carbon comes from — chiefly carbohydrate, through pyruvate, not from fat — and that the apparatus is split across three compartments, the cytoplasm building the basic saturated chain.", cn: "在 acetyl-CoA 被羧化成 MALONYL-CoA 之前，缩合一步都走不了：这一步依赖 ATP、由 acetyl-CoA carboxylase 催化、需要 biotin，是整条合成路线的入口闸门。另外两点：碳主要来自糖类经 pyruvate，而不是来自脂肪；整套装置分布在三个区室中，细胞质负责搭出基本的饱和链。" },
  lehNotes: [
    { kind: "conflict", node: "L-21-1-1",
      en: "This node places the ELONGASE system in the mitochondrial matrix, following the Czech textbook. Lehninger 21.1 describes fatty acid elongation systems in BOTH the smooth ER and mitochondria, and calls the ER one the 'more active elongation system' (A p.753), using coenzyme A rather than ACP as the carrier. Answering the question of where fatty acids are elongated from this node alone would name the wrong principal site.",
      cn: "本节点依照捷克教材，把延长酶系统放在线粒体基质。Lehninger 21.1 描述的是平滑内质网和线粒体两处都有脂肪酸延长系统，并称内质网的那一套为「更活跃的延长系统」（A 第753页），且以辅酶A而非ACP作为载体。若仅凭本节点回答脂肪酸在何处被延长，会说出错误的主要部位。" },
    { kind: "conflict", node: "L-21-1-1",
      en: "This node lists beta-oxidation as one of the two sources of acetyl-CoA for fatty acid synthesis. Lehninger 21.1 says acetyl-CoA from fatty acid oxidation is 'not a significant source' for biosynthesis in animals (A p.751), precisely because the two pathways are reciprocally regulated: malonyl-CoA, the first intermediate of synthesis, inhibits carnitine acyltransferase I and blocks fatty acids from entering the mitochondrion at all. The Czech statement is not wrong about the chemistry, but as a description of an animal cell it needs this qualification, and whether both pathways can run at the same time is exactly what an examiner asks here.",
      cn: "本节点把β-氧化列为脂肪酸合成所需乙酰辅酶A的两个来源之一。Lehninger 21.1 指出，在动物体内来自脂肪酸氧化的乙酰辅酶A「并不是重要来源」（A 第751页），原因正是两条途径受拮抗调控：合成的第一个中间产物丙二酰辅酶A会抑制肉碱脂酰转移酶I，根本上阻断脂肪酸进入线粒体。捷克教材的说法在化学上没有错，但作为对动物细胞实际情形的描述需要这条限定；而两条途径能否同时进行，正是考官在此会问的问题。" },
  ],
  summary: {
    en: "Section 8.3 'Biosyntéza lipidů' opens with fatty acids. In eukaryotic organisms the fatty-acid-biosynthesis apparatus is distributed across three distinct subcellular compartments: the basic pathway that builds a saturated chain de novo up to 18 carbons (i.e. as far as palmitic acid) runs in the CYTOPLASM; a separate ELONGASE system, located in the MITOCHONDRIAL MATRIX, is responsible for extending chains further; and a DESATURASE system, bound to the ENDOPLASMIC RETICULUM, converts saturated fatty acids to unsaturated ones and can likewise support further chain extension. The basic building unit for de novo fatty acid biosynthesis is acetyl-CoA, whose main sources are (a) fatty acids themselves, via the catabolic process of beta-oxidation (ch. 8.4.4), and (b) especially carbohydrates: pyruvate arising from glycolysis is oxidatively decarboxylated to acetyl-CoA and CO2 (ch. 7). Before any condensation chemistry can begin, the methyl group of acetyl-CoA must be 'activated' by conversion to malonyl-CoA — an ATP-dependent carboxylation catalyzed by acetyl-CoA carboxylase, which requires the coenzyme biotin (the book's own equation also specifies Mn2+ as the reaction's divalent cation): CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi.",
    cn: "第8.3节「脂质的生物合成」从脂肪酸开始。在真核生物中，脂肪酸生物合成的装置分布在三个不同的亚细胞区室：从头合成饱和链直至18个碳（即软脂酸）的基本途径在细胞质中进行；一个独立的延长酶系统位于线粒体基质，负责将链进一步延长；而结合在内质网上的去饱和酶系统则将饱和脂肪酸转化为不饱和脂肪酸，同样也能支持链的进一步延长。从头合成脂肪酸的基本建构单元是乙酰辅酶A，其主要来源为：(a) 脂肪酸本身，经由分解代谢过程β-氧化（第8.4.4节）；(b) 尤其是糖类——糖酵解产生的丙酮酸经氧化脱羧生成乙酰辅酶A和CO2（第7章）。在缩合化学反应开始之前，乙酰辅酶A的甲基必须先被「活化」，转化为丙二酰辅酶A——这是一个依赖ATP的羧化反应，由乙酰辅酶A羧化酶催化，该酶需要辅酶生物素（教材自己给出的方程式还标明了反应的二价阳离子为Mn2+）：CO2+乙酰辅酶A+ATP->丙二酰辅酶A+ADP+Pi。"
  },
  points: [
    { cz: "3 subcelulární kompartmenty biosyntézy MK", en: "Fatty acid biosynthesis apparatus is split across three subcellular compartments in eukaryotes: CYTOPLASM (basic pathway building a saturated chain up to 18 carbons/palmitic acid), MITOCHONDRIAL MATRIX (elongase system, extends the chain further), and ENDOPLASMIC RETICULUM (desaturase system, converts saturated to unsaturated fatty acids, and also permits further elongation).", cn: "脂肪酸生物合成装置在真核生物中分布于三个亚细胞区室：细胞质（合成饱和链直至18个碳/软脂酸的基本途径）、线粒体基质（延长酶系统，进一步延长链）、内质网（去饱和酶系统，将饱和脂肪酸转化为不饱和脂肪酸，也可支持进一步延长）。" },
    { cz: "acetyl-CoA = základní stavební jednotka de novo syntézy", en: "Acetyl-CoA is the basic building unit for de novo fatty acid biosynthesis.", cn: "乙酰辅酶A是从头合成脂肪酸的基本建构单元。" },
    { cz: "2 zdroje acetyl-CoA: β-oxidace MK, zejména sacharidy", en: "Acetyl-CoA's two sources: (1) fatty acids themselves, via the catabolic process beta-oxidation (ch. 8.4.4); (2) ESPECIALLY carbohydrates — pyruvate from glycolysis is oxidatively decarboxylated to acetyl-CoA + CO2 (ch. 7).", cn: "乙酰辅酶A的两个来源：(1) 脂肪酸本身，经分解代谢过程β-氧化（第8.4.4节）；(2) 尤其是糖类——糖酵解产生的丙酮酸经氧化脱羧生成乙酰辅酶A+CO2（第7章）。" },
    { cz: "nutná aktivace methylové skupiny acetyl-CoA před kondenzací", en: "Before fatty-acid-synthase condensation chemistry can start, the methyl group of acetyl-CoA must be activated by conversion to MALONYL-CoA.", cn: "在脂肪酸合酶的缩合化学反应开始之前，乙酰辅酶A的甲基必须先经转化为丙二酰辅酶A而被活化。" },
    { cz: "acetyl-CoA karboxylasa: CO2+acetyl-CoA+ATP -> malonyl-CoA+ADP+Pi, biotin, Mn2+", en: "This ATP-dependent carboxylation is catalyzed by ACETYL-CoA CARBOXYLASE, which requires the coenzyme BIOTIN; the book's own equation also lists Mn2+ as the divalent cofactor. Equation: CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi.", cn: "这一依赖ATP的羧化反应由乙酰辅酶A羧化酶催化，该酶需要辅酶生物素；教材自己的方程式还列出Mn2+作为二价辅助因子。方程式：CO2+乙酰辅酶A+ATP->丙二酰辅酶A+ADP+Pi。" },
    { cz: "text: 'matonyl-CoA' — pravděpodobný překlep za 'malonyl-CoA'", en: "TYPO NOTE: the book's own running prose spells the product 'matonyl-CoA' rather than 'malonyl-CoA' — almost certainly a print typo, since the immediately following structural equation unambiguously draws the malonate skeleton (-OOC-CH2-C~SCoA). Reported throughout as malonyl-CoA.", cn: "拼写提示：教材正文将产物拼写为「matonyl-CoA」而非「malonyl-CoA」——这几乎肯定是印刷错误，因为紧随其后的结构方程式明确画出了丙二酸骨架（-OOC-CH2-C~SCoA）。本节点通篇按「丙二酰辅酶A（malonyl-CoA）」处理。" },
    { cz: "Mn2+ jako kofaktor — neobvyklé oproti obvyklému Mg2+", en: "COFACTOR NOTE: most general biochemistry references name Mg2+, not Mn2+, as the physiological divalent cation for acetyl-CoA carboxylase and similar ATP-utilizing carboxylases/kinases; this book's own equation specifically states Mn2+ (verified by zoomed re-read — not a misread 'Mg'). Reported here exactly as the book states it.", cn: "辅助因子提示：大多数普通生物化学参考书将Mg2+（而非Mn2+）列为乙酰辅酶A羧化酶及类似ATP依赖性羧化酶/激酶的生理二价阳离子；而本教材自己的方程式明确写的是Mn2+（经放大重读确认，并非把'Mg'看错）。此处按教材原文如实报告。" }
  ],
  terms: [
    { cz: "acetyl-CoA karboxylasa", en: "acetyl-CoA carboxylase", cn: "乙酰辅酶A羧化酶", def_en: "Catalyzes the ATP- and biotin-dependent carboxylation of acetyl-CoA to malonyl-CoA using CO2; the book specifies Mn2+ as its divalent cofactor. This is the committed, activating step of fatty acid biosynthesis.", def_cn: "催化以CO2为底物、依赖ATP和生物素，将乙酰辅酶A羧化为丙二酰辅酶A的反应；教材指明其二价辅助因子为Mn2+。这是脂肪酸生物合成的活化/关键步骤。" },
    { cz: "malonyl-CoA (text: 'matonyl-CoA')", en: "malonyl-CoA", cn: "丙二酰辅酶A", def_en: "The activated 3-carbon donor used in every fatty-acid-synthase condensation cycle after the initiating one; called 'matonyl-CoA' once in the book's own running prose (almost certainly a typo).", def_cn: "脂肪酸合酶除起始环外每一轮缩合反应所用的活化三碳供体；教材正文中曾误拼为「matonyl-CoA」（几乎可确定为印刷错误）。" },
    { cz: "biotin", en: "biotin", cn: "生物素", def_en: "The coenzyme required by acetyl-CoA carboxylase for CO2 transfer/attachment during malonyl-CoA formation.", def_cn: "乙酰辅酶A羧化酶在生成丙二酰辅酶A过程中，用于转移/连接CO2所需的辅酶。" },
    { cz: "elongasový systém", en: "elongase system", cn: "延长酶系统", def_en: "The mitochondrial-matrix-located enzyme system that extends fatty acid chains beyond the cytoplasmic 18-carbon (palmitic acid) product by further two-carbon units.", def_cn: "位于线粒体基质的酶系统，将细胞质中生成的18碳（软脂酸）产物进一步以二碳为单位延长。" },
    { cz: "desaturasový systém", en: "desaturase system", cn: "去饱和酶系统", def_en: "The endoplasmic-reticulum-bound enzyme system that converts saturated fatty acids to unsaturated ones and can also support further chain elongation.", def_cn: "结合于内质网的酶系统，将饱和脂肪酸转化为不饱和脂肪酸，也可支持链的进一步延长。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which subcellular compartment hosts the elongase system responsible for extending fatty acid chains beyond the cytoplasmic 18-carbon product?",
      q_cn: "哪个亚细胞区室内有负责将脂肪酸链延长至超过细胞质中18碳产物的延长酶系统？",
      options: ["Cytoplasm", "Mitochondrial matrix", "Endoplasmic reticulum", "Golgi apparatus"],
      answer: 1,
      optionNotes: {
        0: { en: "The cytoplasm hosts the basic pathway — the one that builds a saturated chain up to 18 carbons, palmitic acid included. The elongase only takes over beyond that point.", cn: "细胞质里放的是基础通路——把饱和链一直搭到 18 个碳（palmitic acid 也在内）的那条。Elongase 只在这之后才接手。" },
        2: { en: "The endoplasmic reticulum carries the desaturase system, which turns saturated chains into unsaturated ones. It is easy to confuse with the elongase because the book says the ER permits further elongation as well.", cn: "内质网上带的是 desaturase 系统，把饱和链变成不饱和链。它容易和 elongase 混淆，因为教材说内质网上也可以继续延长链。" },
        3: { en: "The Golgi is not one of the three compartments named at all. The apparatus is split across exactly three: cytoplasm, mitochondrial matrix and endoplasmic reticulum.", cn: "Golgi 根本不在被点名的三个区室之列。这套装置恰好分布在三处：细胞质、线粒体基质、内质网。" }
      },
      why_en: "The book states the elongase system is located in the mitochondrial matrix, while the basic (≤18C) pathway runs in the cytoplasm and the desaturase system is bound to the endoplasmic reticulum.",
      why_cn: "教材指出延长酶系统位于线粒体基质，而基本（≤18碳）途径在细胞质中进行，去饱和酶系统则结合于内质网。"
    },
    {
      type: "mcq",
      q_en: "What does the book identify as the necessary 'activation' step that must precede fatty-acid-synthase condensation chemistry, and which enzyme carries it out?",
      q_cn: "教材指出，脂肪酸合酶缩合反应之前必须先发生的「活化」步骤是什么？由哪个酶催化？",
      options: [
        "Phosphorylation of acetyl-CoA's methyl group by an ATP-dependent kinase",
        "Carboxylation of acetyl-CoA to malonyl-CoA by acetyl-CoA carboxylase",
        "Reduction of acetyl-CoA's carbonyl group by NADPH",
        "Hydrolysis of acetyl-CoA's thioester bond by a specific thiokinase"
      ],
      answer: 1,
      optionRefs: { 2: "8-3-3", 3: "8-3-3" },
      optionNotes: {
        0: { en: "ATP is indeed consumed at this step, which is what makes the option tempting — but it is spent on a carboxylation, not a phosphorylation: CO2 + acetyl-CoA + ATP → malonyl-CoA + ADP + Pi.", cn: "这一步确实消耗 ATP，这正是这个选项有迷惑性的地方——但 ATP 花在羧化上，不是磷酸化：CO2 + acetyl-CoA + ATP → malonyl-CoA + ADP + Pi。" },
        2: { en: "NADPH is the reductant of this whole pathway, but it is spent later and twice per cycle, at steps III and V, reducing the growing acyl chain rather than activating the starter unit.", cn: "NADPH 确实是整条通路的还原剂，但它是在后面用掉的，每一轮用两次，在第 III 步和第 V 步还原正在延长的酰基链，而不是活化起始单元。" },
        3: { en: "Thiokinase does appear in this pathway, but at the far end of it: it re-activates the finished palmitic acid to palmitoyl-CoA when the acid is to go on into further lipid biosynthesis.", cn: "Thiokinase 在这条通路里确实出现，但是在最末端：当做好的 palmitic acid 要进入后续的脂类生物合成时，由它重新活化成 palmitoyl-CoA。" }
      },
      why_en: "The book explicitly names carboxylation of acetyl-CoA's methyl group to malonyl-CoA, catalyzed by acetyl-CoA carboxylase (ATP-dependent, requiring biotin), as the necessary precondition for biosynthesis.",
      why_cn: "教材明确指出，将乙酰辅酶A的甲基羧化为丙二酰辅酶A（由乙酰辅酶A羧化酶催化，依赖ATP并需要生物素）是生物合成的必要前提。"
    },
    {
      type: "short",
      q_en: "Write the acetyl-CoA carboxylase reaction as the book gives it (reactants, products, cofactors), and name the two main biological sources of the acetyl-CoA it uses as substrate.",
      q_cn: "写出教材给出的乙酰辅酶A羧化酶反应（反应物、产物、辅助因子），并说出其底物乙酰辅酶A的两个主要生物来源。",
      accept: ["malonyl-CoA", "biotin", "ATP", "CO2", "fatty acid", "carbohydrate", "pyruvate", "丙二酰", "生物素", "脂肪酸", "糖类", "丙酮酸"],
      answer_en: "CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi, catalyzed by acetyl-CoA carboxylase, requiring biotin (book: also Mn2+). Acetyl-CoA itself mainly comes from fatty acid beta-oxidation and, especially, from carbohydrates via oxidative decarboxylation of glycolytic pyruvate.",
      answer_cn: "CO2+乙酰辅酶A+ATP->丙二酰辅酶A+ADP+Pi，由乙酰辅酶A羧化酶催化，需要生物素（教材还注明需要Mn2+）。乙酰辅酶A本身主要来自脂肪酸β-氧化，尤其是来自糖类——经糖酵解产生的丙酮酸氧化脱羧而成。"
    }
  ],
  oral: {
    q_en: "Describe where in the eukaryotic cell fatty acid biosynthesis actually happens, where its acetyl-CoA building block comes from, and what has to happen to acetyl-CoA before the synthase complex can use it.",
    q_cn: "请描述脂肪酸生物合成在真核细胞中实际发生的位置、其乙酰辅酶A建构单元的来源，以及乙酰辅酶A在被合酶复合体利用之前必须经历怎样的变化。",
    model_en: "Fatty acid biosynthesis isn't confined to one compartment — the book splits it across three. The basic pathway that builds a saturated chain up to eighteen carbons, ending at palmitic acid, runs in the cytoplasm. If the cell needs a longer chain, an elongase system sitting in the mitochondrial matrix takes over and adds more two-carbon units. And if it needs a double bond, a desaturase system bound to the endoplasmic reticulum converts the saturated product to an unsaturated one, and can itself support further elongation too. All of this starts from acetyl-CoA, which comes from two places: fatty acids themselves, through the catabolic process of beta-oxidation, and especially from carbohydrates, where glycolysis's pyruvate is oxidatively decarboxylated straight to acetyl-CoA and CO2. But acetyl-CoA can't just be condensed directly — its methyl group first has to be activated by carboxylation to malonyl-CoA, an ATP-dependent reaction catalyzed by acetyl-CoA carboxylase, which needs the coenzyme biotin, and per this book, Mn2+ as well. Only once that malonyl-CoA exists can the actual synthase machinery begin building the chain.",
    checklist: [
      "Named all three compartments and what each one does (cytoplasm/basic, mitochondrial matrix/elongase, ER/desaturase)",
      "Gave both sources of acetyl-CoA (beta-oxidation, and glycolytic pyruvate via oxidative decarboxylation)",
      "Identified malonyl-CoA formation as the required activation step before condensation",
      "Named acetyl-CoA carboxylase and its cofactors (ATP, biotin, and per the book, Mn2+)",
      "Could state the full equation: CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi"
    ]
  }
},

{
  id: "8-3-2",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Biosyntéza mastných kyselin — multienzymový komplex, ACP, fosfopanthetein a kroky I–II (nasazení a kondenzace)",
  enTitle: "Fatty acid biosynthesis — the multienzyme complex, ACP, phosphopantetheine, and steps I–II (loading and condensation)",
  cnTitle: "脂肪酸生物合成——多酶复合体、酰基载体蛋白（ACP）、磷酸泛酰巯基乙胺与第I–II步（装载与缩合）",
  pages: [188, 189],
  coverage: "full",
  coverageNote: "Full text and figure of the multienzyme-complex paragraph and the six-numbered-activity circular ACP diagram (labelled I–VI around a central 'ACP' hub) read directly from the middle of p.188, together with the phosphopantetheine structural diagram and its two-SH-groups paragraph (cysteine-derived SH vs. phosphopantetheine-derived SH, the latter shared with free coenzyme A per ch. 3.2.1) at the bottom of p.188 — label 'fosfopanthetein' under the structure verified by zoom. The step-I (loading, via acetyltransferase/malonyltransferase) paragraph at the very bottom of p.188 continues directly into the step-II reaction figure (malonyl-ACP + acetyl-ACP -> acetoacetyl-ACP + CO2 + ACP-SH, catalyzed by beta-ketoacyl-ACP synthase) at the top of p.189 — read as one continuous unit since the book's own sentence and its supporting figure straddle the page break. Every label in the circular ACP figure and the phosphopantetheine structure verified by zoomed re-read. The book's diagram does not explicitly name the amino-acid residue that anchors the phosphopantetheine arm to the polypeptide (it only draws 'protein-CH2-O-P-O-...'); this node does not supply a residue name the book itself does not give.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "ACP is CoA permanently tethered to protein. When atoms must be handed precisely, they ride on protein scaffolding.", cn: "ACP是永久系在蛋白质上的CoA。当原子必须精确递送时，它们骑在蛋白质支架上。" },
  summary: {
    en: "Actual fatty acid synthesis takes place on a soluble multienzyme complex whose core is a protein able to bind the organic acids acetate and malonate via a thioester bond — commonly abbreviated ACP, for Acyl Carrier Protein. The book draws this as a circular arrangement of six numbered catalytic activities (I–VI) surrounding a central 'ACP' hub. One ACP molecule carries two distinct functional sulfhydryl (SH) groups: one comes from a cysteine residue in the polypeptide chain, the other is part of a phosphopantetheine arm (the same phosphopantetheine unit that is also part of free coenzyme A, ch. 3.2.1), covalently attached to the polypeptide chain at the center of the multiprotein complex. Step I of biosynthesis is loading: the acetyl group occupies the cysteine SH group and the malonyl group occupies the phosphopantetheine SH group, via acetyltransferase and malonyltransferase respectively; acetyltransferase participates only in this first, initiating step, while in every later cycle only malonyltransferase is active. Step II is condensation: malonyl-ACP and acetyl-ACP condense, catalyzed by beta-ketoacyl-ACP synthase, releasing CO2 and free ACP-SH and producing ACETOACETYL-ACP, the first four-carbon intermediate.",
    cn: "脂肪酸的实际合成发生在一个可溶性多酶复合体上，其核心是一个能够通过硫酯键结合有机酸——乙酸和丙二酸——的蛋白质，常缩写为ACP，即酰基载体蛋白（Acyl Carrier Protein）。教材将其绘制为围绕中心「ACP」核心排列的六个编号催化活性（I–VI）的环形结构。一分子ACP携带两个不同的功能性巯基（SH）：一个来自多肽链中的半胱氨酸残基，另一个是磷酸泛酰巯基乙胺臂的一部分（与游离辅酶A中的磷酸泛酰巯基乙胺单元相同，见第3.2.1节），后者通过共价键连接在多蛋白复合体中心的多肽链上。生物合成第I步为装载：乙酰基占据半胱氨酸SH基团，丙二酰基占据磷酸泛酰巯基乙胺SH基团，分别由乙酰基转移酶和丙二酰基转移酶催化；乙酰基转移酶仅参与这第一个起始步骤，此后每一轮循环中只有丙二酰基转移酶被激活。第II步为缩合：丙二酰-ACP与乙酰-ACP缩合，由β-酮脂酰-ACP合成酶催化，释放CO2和游离ACP-SH，生成第一个四碳中间体——乙酰乙酰-ACP。"
  },
  points: [
    { cz: "biosyntéza MK probíhá na rozpustném multienzymovém komplexu, jádro = ACP", en: "Actual fatty acid biosynthesis takes place on a soluble multienzyme complex; its core is a protein able to bind the organic acids acetate and malonate via a THIOESTER bond, commonly abbreviated ACP (Acyl Carrier Protein).", cn: "脂肪酸的实际生物合成发生在一个可溶性多酶复合体上；其核心是一种能够通过硫酯键结合有机酸乙酸和丙二酸的蛋白质，常缩写为ACP（酰基载体蛋白）。" },
    { cz: "kruhové schéma: 6 očíslovaných aktivit (I–VI) kolem centrálního ACP", en: "The book draws the complex as a circular arrangement of six numbered catalytic activities (I–VI) surrounding a central 'ACP' hub; the running text names each of these numbered steps in turn across this and the next node.", cn: "教材将该复合体绘制为围绕中心「ACP」核心排列的六个编号催化活性（I–VI）的环形示意图；正文依次在本节点及下一节点中说明每个编号步骤对应的反应。" },
    { cz: "1 molekula ACP = 2 odlišné SH skupiny: cystein (periferní) + fosfopanthetein (centrální, sdílený s CoA)", en: "One ACP molecule carries two distinct functional SH groups: one from a CYSTEINE residue in the polypeptide chain (peripheral), the other part of a PHOSPHOPANTETHEINE arm (central) covalently attached to the polypeptide chain in the middle of the multiprotein complex — the same phosphopantetheine unit that is also part of free coenzyme A (ch. 3.2.1).", cn: "一分子ACP携带两个不同的功能性SH基团：一个来自多肽链中的半胱氨酸残基（外周），另一个是磷酸泛酰巯基乙胺臂的一部分（中心），共价连接在多蛋白复合体中央的多肽链上——与游离辅酶A中的磷酸泛酰巯基乙胺单元相同（第3.2.1节）。" },
    { cz: "krok I: nasazení acetylu (cystein-SH) a malonylu (fosfopanthetein-SH), acetyltransferasa jen v 1. kroku", en: "Step I (loading): the acetyl group occupies the peripheral (cysteine) SH group and the malonyl group occupies the central (phosphopantetheine) SH group, via ACETYLTRANSFERASE and MALONYLTRANSFERASE respectively. Acetyltransferase enters the process only in this first, INITIATING step; in every later cycle only malonyltransferase is activated.", cn: "第I步（装载）：乙酰基占据外周（半胱氨酸）SH基团，丙二酰基占据中心（磷酸泛酰巯基乙胺）SH基团，分别由乙酰基转移酶和丙二酰基转移酶催化。乙酰基转移酶仅参与这第一个起始步骤；此后每一轮循环中只有丙二酰基转移酶被激活。" },
    { cz: "krok II: kondenzace malonyl-ACP + acetyl-ACP -> acetoacetyl-ACP + CO2 + ACP-SH, β-ketoacyl-ACP synthasa", en: "Step II (condensation): malonyl-ACP and acetyl-ACP condense, catalyzed by BETA-KETOACYL-ACP SYNTHASE, releasing CO2 and free ACP-SH and producing ACETOACETYL-ACP — the first four-carbon intermediate of the growing chain.", cn: "第II步（缩合）：丙二酰-ACP与乙酰-ACP缩合，由β-酮脂酰-ACP合成酶催化，释放CO2和游离ACP-SH，生成乙酰乙酰-ACP——生长链的第一个四碳中间体。" },
    { cz: "fosfopanthetein je sdílen s CoA (kap. 3.2.1)", en: "The book explicitly cross-references that the phosphopantetheine unit forming ACP's central SH arm is the same structural unit found in free coenzyme A (ch. 3.2.1) — ACP is, in effect, this same prosthetic arm permanently tethered to a dedicated carrier protein instead of floating free as CoA.", cn: "教材明确指出，构成ACP中心SH臂的磷酸泛酰巯基乙胺单元，与游离辅酶A中的结构单元相同（第3.2.1节）——ACP实质上是同一个辅基臂被永久固定在专门的载体蛋白上，而非像CoA那样游离存在。" }
  ],
  terms: [
    { cz: "ACP (Acyl Carrier Protein, protein nesoucí acyl)", en: "ACP (Acyl Carrier Protein)", cn: "酰基载体蛋白（ACP）", def_en: "The core protein of the fatty acid synthase complex; binds acyl groups via thioester bonds and carries two distinct SH groups (one cysteine-derived, one phosphopantetheine-derived).", def_cn: "脂肪酸合酶复合体的核心蛋白；通过硫酯键结合酰基，携带两个不同的SH基团（一个来自半胱氨酸，一个来自磷酸泛酰巯基乙胺）。" },
    { cz: "fosfopanthetein", en: "phosphopantetheine", cn: "磷酸泛酰巯基乙胺", def_en: "The prosthetic arm covalently attached to the ACP polypeptide, ending in the central SH group used to carry the growing acyl chain; structurally the same unit found in free coenzyme A.", def_cn: "共价连接于ACP多肽链上的辅基臂，末端为携带生长中酰基链的中心SH基团；在结构上与游离辅酶A中的相应单元相同。" },
    { cz: "acetyltransferasa", en: "acetyltransferase", cn: "乙酰基转移酶", def_en: "Loads the acetyl group onto ACP's peripheral (cysteine) SH group; active only in the first, initiating cycle of fatty acid synthesis.", def_cn: "将乙酰基装载到ACP外周（半胱氨酸）SH基团上；仅在脂肪酸合成的第一个起始循环中被激活。" },
    { cz: "malonyltransferasa", en: "malonyltransferase", cn: "丙二酰基转移酶", def_en: "Loads the malonyl group onto ACP's central (phosphopantetheine) SH group; active in every cycle of fatty acid synthesis, unlike acetyltransferase.", def_cn: "将丙二酰基装载到ACP中心（磷酸泛酰巯基乙胺）SH基团上；与乙酰基转移酶不同，它在脂肪酸合成的每一轮循环中都被激活。" },
    { cz: "β-ketoacyl-ACP synthasa", en: "beta-ketoacyl-ACP synthase", cn: "β-酮脂酰-ACP合成酶", def_en: "Catalyzes condensation of malonyl-ACP with acetyl-ACP (or, in later cycles, with the growing acyl-ACP), releasing CO2 and free ACP-SH and forming a new beta-ketoacyl-ACP two carbons longer.", def_cn: "催化丙二酰-ACP与乙酰-ACP（或在后续循环中与正在生长的酰基-ACP）缩合，释放CO2和游离ACP-SH，生成延长两个碳的新β-酮脂酰-ACP。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book, which of the two loading-step (step I) enzymes participates only in the very first, initiating cycle of fatty acid synthesis, and which one acts in every subsequent cycle?",
      q_cn: "根据教材，装载步骤（第I步）的两个酶中，哪一个只参与脂肪酸合成的第一个起始循环？哪一个在此后每一轮循环中都发挥作用？",
      options: [
        "Acetyltransferase only in cycle 1; malonyltransferase in every cycle",
        "Malonyltransferase only in cycle 1; acetyltransferase in every later cycle",
        "Both act only in the first, initiating cycle",
        "Both act in every cycle, equally"
      ],
      answer: 0,
      optionRefs: { 2: "8-3-3", 3: "8-3-3" },
      optionNotes: {
        1: { en: "The two are swapped. Acetyl is the starter and is delivered once; every further two-carbon unit arrives as malonyl, which is why it is malonyltransferase that has to work in every cycle.", cn: "两个调换了。Acetyl 是起始单元，只送一次；此后每一个两碳单元都以 malonyl 的形式到来，所以每一轮都要干活的是 malonyltransferase。" },
        2: { en: "Malonyltransferase has to act in every cycle: each round needs a fresh malonyl group loaded onto the freed central SH before the next condensation can happen at all.", cn: "Malonyltransferase 每一轮都必须动作：每一轮都要先把新的 malonyl 装到空出来的中央 SH 上，下一次缩合才可能发生。" },
        3: { en: "Acetyltransferase acts exactly once. Of palmitate's eight acetyl units only one entered as acetyl-CoA itself; the other seven came in through malonyl-CoA and were decarboxylated on arrival.", cn: "Acetyltransferase 只动作一次。Palmitate 的八个 acetyl 单元里只有一个是以 acetyl-CoA 本身进来的；其余七个都是经 malonyl-CoA 进来、到位时再脱羧的。" }
      },
      why_en: "The book states acetyltransferase enters the process only in this first (initiating) step; in further phases of the cycle, only malonyltransferase is activated.",
      why_cn: "教材指出乙酰基转移酶仅在这第一个（起始）步骤中参与反应；在此后各阶段的循环中，只有丙二酰基转移酶被激活。"
    },
    {
      type: "mcq",
      q_en: "Besides acetoacetyl-ACP, what two products does the book's figure show being released when malonyl-ACP and acetyl-ACP condense under beta-ketoacyl-ACP synthase?",
      q_cn: "根据教材插图，丙二酰-ACP与乙酰-ACP在β-酮脂酰-ACP合成酶催化下缩合时，除生成乙酰乙酰-ACP外，还释放出哪两种产物？",
      options: [
        "H2O and ADP",
        "CO2 and free ACP-SH",
        "NADPH and Pi",
        "CoASH and NADP+ together"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-1", 2: "8-3-3" },
      optionNotes: {
        0: { en: "Neither water nor a nucleotide leaves at this step. ATP was spent earlier, at the carboxylation that made malonyl-CoA, and it left as ADP + Pi there rather than here.", cn: "这一步既不脱水也不脱核苷酸。ATP 是更早消耗的，用在生成 malonyl-CoA 的羧化上，并且是在那里以 ADP + Pi 的形式离开，不是在这里。" },
        2: { en: "NADPH is consumed in this pathway rather than produced, and not at this step: the two reductions come afterwards, at steps III and V, once the four-carbon intermediate exists.", cn: "NADPH 在这条通路里是被消耗、不是被产生的，而且不在这一步：两次还原都在其后，即第 III 步和第 V 步，等四碳中间体出现之后。" },
        3: { en: "CoASH does leave, but one step earlier, at loading, when acetyl and malonyl are transferred onto ACP's two SH groups. NADP+ appears later still, only once the reductions have run.", cn: "CoASH 确实会离开，但要早一步，在装载时——acetyl 和 malonyl 被转移到 ACP 的两个 SH 上的时候。NADP+ 出现得更晚，要等还原步骤跑完。" }
      },
      why_en: "The book's step-II figure shows the condensation releasing CO2 and free ACP-SH alongside the acetoacetyl-ACP product.",
      why_cn: "教材第II步插图显示，该缩合反应在生成乙酰乙酰-ACP产物的同时，还释放出CO2和游离ACP-SH。"
    },
    {
      type: "short",
      q_en: "Name the two distinct SH groups carried by one ACP molecule, their chemical origin, and which one is structurally shared with free coenzyme A.",
      q_cn: "写出一分子ACP所携带的两个不同SH基团，说明其化学来源，并指出哪一个在结构上与游离辅酶A相同。",
      accept: ["cysteine", "phosphopantetheine", "CoA", "coenzyme A", "半胱氨酸", "磷酸泛酰巯基乙胺", "辅酶A"],
      answer_en: "One SH comes from a cysteine residue in the ACP polypeptide chain (peripheral); the other is part of the phosphopantetheine arm (central), and this phosphopantetheine unit is the one structurally shared with free coenzyme A.",
      answer_cn: "一个SH来自ACP多肽链中的半胱氨酸残基（外周）；另一个是磷酸泛酰巯基乙胺臂的一部分（中心），后者在结构上与游离辅酶A中的单元相同。"
    }
  ],
  oral: {
    q_en: "Walk through how the fatty acid synthase complex loads its first two substrates and performs the first condensation, naming every enzyme and cofactor involved.",
    q_cn: "请讲解脂肪酸合酶复合体如何装载其最初两个底物并完成第一次缩合，说出涉及的每一个酶和辅助因子。",
    model_en: "Fatty acid synthesis doesn't happen on a loose collection of separate enzymes floating in the cytoplasm — it happens on one soluble multienzyme complex built around a central protein called ACP, the acyl carrier protein, which is able to hold organic acids like acetate and malonate through a thioester bond. ACP actually carries two separate thiol groups: a peripheral one that comes from a cysteine in its own chain, and a central one that's part of a phosphopantetheine arm — the very same chemical unit that makes up part of free coenzyme A. The first thing that has to happen, step one, is loading: acetyltransferase puts an acetyl group onto that peripheral cysteine thiol, and malonyltransferase puts a malonyl group onto the central phosphopantetheine thiol. Acetyltransferase is a one-time player here — it only works in this very first, initiating round; from the second round onward, only malonyltransferase is needed, because the growing chain itself takes over the acetyl unit's old role. Once both thiols are loaded, step two is condensation: beta-ketoacyl-ACP synthase joins the malonyl and acetyl units together, kicking out CO2 and freeing up the peripheral ACP-SH, and what's left behind is acetoacetyl-ACP — a four-carbon compound, and the first real intermediate of the growing fatty acid chain.",
    checklist: [
      "Described the multienzyme complex and named ACP",
      "Described ACP's two SH groups (cysteine, phosphopantetheine) and the phosphopantetheine/CoA connection",
      "Named acetyltransferase and malonyltransferase and which SH group each loads",
      "Noted acetyltransferase acts only in the first cycle",
      "Named beta-ketoacyl-ACP synthase and its condensation product (acetoacetyl-ACP)",
      "Stated the byproducts of condensation: CO2 and free ACP-SH"
    ]
  }
},

{
  id: "8-3-3",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Biosyntéza mastných kyselin — kroky III–VI (redukce, dehydratace, redukce, přenos), opakování cyklu a vznik palmitoyl-ACP",
  enTitle: "Fatty acid biosynthesis — steps III–VI (reduction, dehydration, reduction, transfer), cycle repetition, and formation of palmitoyl-ACP",
  cnTitle: "脂肪酸生物合成——第III–VI步（还原、脱水、再还原、转移）、循环重复与软脂酰-ACP的生成",
  pages: [189],
  coverage: "full",
  coverageNote: "Full text and all three reaction figures on p.189 read directly: step III (beta-ketoacylreductase, NADPH(H+) -> NADP+), step IV (beta-hydroxyacyl dehydratase, loss of H2O), step V (alpha,beta-enoylreductase, NADPH(H+) -> NADP+, giving the explicitly-named 'butyryl-S-ACP'), the step-VI transfer-to-peripheral-SH paragraph, the cycle-repetition paragraph (five more cycles, total seven, to reach palmitoyl-S-ACP), the '8 acetyl units but only one direct acetyl-CoA' carbon-accounting paragraph, the hydrolytic-release-plus-thiokinase-activation-to-palmitoyl-CoA sentence, and the closing 'chain grows two carbons at a time from the methyl end toward the carboxyl end' paragraph — every structure in the three reaction figures verified by zoomed re-read. NAMING GAP NOTE: the book's own step-IV figure does not give the resulting alpha,beta-unsaturated intermediate (CH3-CH=CH-CO~S-ACP) a name (unlike butyryl-S-ACP at step V, which IS named); this node does not supply the common external name for it (crotonyl-ACP) as if the book had used it.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Step III: ketone to hydroxyl with NADPH. Two reductions per cycle makes synthesis energetically expensive.", cn: "第III步：酮还原为羟基用NADPH。每周期两次还原使合成能量昂贵。" },
  summary: {
    en: "Following the step-II condensation (node 8-3-2), three more chemical steps complete the first round trip of the cycle. Step III: acetoacetyl-S-ACP is reduced at its keto group by beta-ketoacylreductase, using NADPH(H+) (-> NADP+), giving beta-hydroxybutyryl-S-ACP. Step IV: this hydroxy compound is dehydrated by beta-hydroxyacyl dehydratase, losing H2O and forming an alpha,beta-unsaturated (enoyl) intermediate that the book's figure does not separately name. Step V: a second reduction, by alpha,beta-enoylreductase using NADPH(H+) (-> NADP+), saturates that double bond, giving BUTYRYL-S-ACP — a saturated four-carbon acyl group. Step VI transfers this four-carbon acyl chain from the central (phosphopantetheine) SH group to the peripheral (cysteine) SH group, freeing the central SH so the whole cycle can repeat: a new malonyl group binds there, condenses with the butyryl-S-ACP to build a six-carbon chain, and that chain is likewise reduced, dehydrated, and reduced again. Five further such cycles (seven condensation cycles in total) yield the finished 16-carbon PALMITOYL-S-ACP. The book is explicit that although this 16-carbon acid consists of eight two-carbon acetyl units, acetyl-CoA itself only ever participated directly, as such, in the very first step — every other two-carbon increment was built in via malonyl-CoA. The last reaction ending fatty acid biosynthesis is hydrolytic release of the finished fatty acid from the multienzyme complex; if it is to be used in further lipid-biosynthetic pathways, it must then be re-activated by thiokinase, forming palmitoyl-CoA. Because of how these condensation reactions work on the multienzyme complex (also sometimes called the fatty acid synthetase complex), the acyl chain always grows by exactly two carbon atoms at a time, proceeding from the (fixed) methyl end toward the (elongating) carboxyl end.",
    cn: "在第II步缩合反应（见节点8-3-2）之后，还需三个化学步骤才能完成循环的第一轮。第III步：乙酰乙酰-S-ACP的酮基被β-酮脂酰还原酶还原，消耗NADPH(H+)（生成NADP+），生成β-羟丁酰-S-ACP。第IV步：该羟基化合物被β-羟脂酰脱水酶脱水，失去一分子H2O，生成一个α,β-不饱和（烯脂酰）中间体，教材插图并未单独为其命名。第V步：第二次还原，由α,β-烯酰还原酶催化，消耗NADPH(H+)（生成NADP+），使该双键饱和，生成丁酰-S-ACP——一个饱和的四碳酰基。第VI步将这个四碳酰基链从中心（磷酸泛酰巯基乙胺）SH基团转移到外周（半胱氨酸）SH基团，使中心SH基团得以游离，从而使整个循环得以重复：新的丙二酰基结合到该处，与丁酰-S-ACP缩合生成六碳链，该链同样经历还原、脱水、再还原。再经五轮这样的循环（总计七轮缩合循环），最终生成16碳的软脂酰-S-ACP。教材明确指出，尽管这个16碳酸由八个二碳乙酰单位组成，但乙酰辅酶A本身仅在第一步中以此身份直接参与反应——其余每一个二碳增量都是经由丙二酰辅酶A掺入的。结束脂肪酸生物合成的最后一个反应，是将合成好的脂肪酸从多酶复合体上水解释放；若要将其用于其他脂质生物合成途径，则必须经硫激酶重新活化，生成软脂酰辅酶A。由于多酶复合体（有时也称为脂肪酸合成酶复合体）上这些缩合反应的作用方式，酰基链总是每次准确地增加两个碳原子，从（固定的）甲基端向（不断延伸的）羧基端生长。"
  },
  points: [
    { cz: "krok III: acetoacetyl-S-ACP + NADPH(H+) -> β-hydroxybutyryl-S-ACP + NADP+, β-ketoacylreduktasa", en: "Step III: BETA-KETOACYLREDUCTASE reduces the C3 keto group of acetoacetyl-S-ACP, using NADPH(H+) (-> NADP+), giving beta-hydroxybutyryl-S-ACP.", cn: "第III步：β-酮脂酰还原酶还原乙酰乙酰-S-ACP的C3酮基，消耗NADPH(H+)（生成NADP+），生成β-羟丁酰-S-ACP。" },
    { cz: "krok IV: -H2O, β-hydroxyacyldehydratasa (produkt v obrázku bez vlastního jména)", en: "Step IV: BETA-HYDROXYACYL DEHYDRATASE removes H2O from beta-hydroxybutyryl-S-ACP, forming an alpha,beta-unsaturated (enoyl) intermediate — the book's figure draws this structure but does not give it its own name.", cn: "第IV步：β-羟脂酰脱水酶从β-羟丁酰-S-ACP中脱去一分子H2O，生成一个α,β-不饱和（烯脂酰）中间体——教材插图画出了该结构，但未单独为其命名。" },
    { cz: "krok V: + NADPH(H+) -> butyryl-S-ACP + NADP+, α,β-enoylreduktasa", en: "Step V: ALPHA,BETA-ENOYLREDUCTASE saturates that double bond using a second NADPH(H+) (-> NADP+), giving BUTYRYL-S-ACP, a saturated four-carbon acyl-ACP (the book names this specific product).", cn: "第V步：α,β-烯酰还原酶利用第二分子NADPH(H+)（生成NADP+）使该双键饱和，生成丁酰-S-ACP——一个饱和的四碳酰基-ACP（教材对此产物给出了专门名称）。" },
    { cz: "krok VI: přenos 4C acylu z centrální SH (fosfopanthetein) na periferní SH (cystein)", en: "Step VI: the four-carbon acyl group (butyryl) is transferred from the central SH group (phosphopantetheine) to the peripheral SH group (cysteine), freeing the central SH group for the next round.", cn: "第VI步：这个四碳酰基（丁酰）从中心SH基团（磷酸泛酰巯基乙胺）转移到外周SH基团（半胱氨酸），使中心SH基团游离出来，供下一轮使用。" },
    { cz: "cyklus se opakuje: nový malonyl -> 6C řetězec -> 1. redukce, dehydratace, 2. redukce; celkem 7 cyklů -> palmitoyl-S-ACP", en: "The whole cycle then repeats: a new malonyl group binds the freed central SH, condenses with butyryl-S-ACP to give a six-carbon chain, which undergoes the same 1st reduction, dehydration, and 2nd reduction. Five further such cycles (SEVEN condensation cycles in total, counting the first) yield the finished 16-carbon PALMITOYL-S-ACP.", cn: "整个循环随后重复：新的丙二酰基结合到游离的中心SH上，与丁酰-S-ACP缩合生成六碳链，该链经历相同的第一次还原、脱水、第二次还原。再经五轮这样的循环（连同第一轮共计七轮缩合循环），最终生成16碳的软脂酰-S-ACP。" },
    { cz: "16C = 8 acetylových jednotek, ale acetyl-CoA přímo jen v 1. kroku, zbytek přes malonyl-CoA", en: "Carbon accounting: this 16-carbon acid consists of eight two-carbon 'acetyl units', but acetyl-CoA itself participated directly, as such, in the reaction only ONCE, in the first (initiating) step; every other two-carbon fragment was incorporated via malonyl-CoA.", cn: "碳原子核算：这个16碳酸由八个二碳「乙酰单位」组成，但乙酰辅酶A本身仅在第一个（起始）步骤中以此身份直接参与反应一次；其余每一个二碳片段都是经由丙二酰辅酶A掺入的。" },
    { cz: "poslední reakce: hydrolytické uvolnění z komplexu; pro další dráhy nutná aktivace thiokinasou -> palmitoyl-CoA", en: "The last reaction ending fatty acid biosynthesis is HYDROLYTIC RELEASE of the finished fatty acid from the multienzyme complex. If the fatty acid is to be used in further lipid-biosynthetic pathways, it must be re-activated by THIOKINASE, forming palmitoyl-CoA.", cn: "结束脂肪酸生物合成的最后一个反应，是将合成好的脂肪酸从多酶复合体上水解释放。若该脂肪酸要用于其他脂质生物合成途径，则必须经硫激酶重新活化，生成软脂酰辅酶A。" },
    { cz: "růst řetězce vždy o 2 uhlíky, od methylového konce ke karboxylovému", en: "Because of how condensation works on this multienzyme complex (also sometimes called the fatty acid synthetase complex), the acyl chain always grows by exactly two carbon atoms at a time, proceeding from the (fixed) methyl end toward the (elongating) carboxyl end.", cn: "由于该多酶复合体（有时也称脂肪酸合成酶复合体）上缩合反应的作用方式，酰基链每次总是准确增加两个碳原子，从（固定的）甲基端向（不断延伸的）羧基端生长。" }
  ],
  terms: [
    { cz: "β-ketoacylreduktasa", en: "beta-ketoacylreductase", cn: "β-酮脂酰还原酶", def_en: "NADPH-dependent enzyme that reduces the C3 keto group of a beta-ketoacyl-ACP (e.g. acetoacetyl-ACP) to a hydroxyl, giving a beta-hydroxyacyl-ACP.", def_cn: "依赖NADPH的酶，将β-酮脂酰-ACP（如乙酰乙酰-ACP）的C3酮基还原为羟基，生成β-羟脂酰-ACP。" },
    { cz: "β-hydroxyacyldehydratasa", en: "beta-hydroxyacyl dehydratase", cn: "β-羟脂酰脱水酶", def_en: "Removes H2O from a beta-hydroxyacyl-ACP, forming an alpha,beta-unsaturated (enoyl) acyl-ACP intermediate.", def_cn: "从β-羟脂酰-ACP中脱去一分子H2O，生成α,β-不饱和（烯脂酰）中间体。" },
    { cz: "α,β-enoylreduktasa", en: "alpha,beta-enoylreductase", cn: "α,β-烯酰还原酶", def_en: "NADPH-dependent enzyme that saturates the double bond of an enoyl-ACP intermediate, completing one full condensation cycle (e.g. giving butyryl-S-ACP after the first cycle).", def_cn: "依赖NADPH的酶，使烯脂酰-ACP中间体的双键饱和，完成一整轮缩合循环（例如第一轮循环后生成丁酰-S-ACP）。" },
    { cz: "butyryl-S-ACP", en: "butyryl-S-ACP", cn: "丁酰-S-ACP", def_en: "The saturated four-carbon acyl-ACP product of the first full condensation cycle (steps I–V); serves as the acceptor for the next round's malonyl condensation.", def_cn: "第一轮完整缩合循环（第I–V步）生成的饱和四碳酰基-ACP产物；作为下一轮丙二酰缩合反应的受体。" },
    { cz: "palmitoyl-CoA", en: "palmitoyl-CoA", cn: "软脂酰辅酶A", def_en: "The thiokinase-activated (thioester) form of the released 16-carbon fatty acid product, required before it can enter further lipid biosynthetic pathways.", def_cn: "被硫激酶活化（形成硫酯）后的16碳脂肪酸产物形式，是其进入其他脂质生物合成途径之前所必需的活化形式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How many total condensation cycles does the book say are needed to build the 16-carbon palmitoyl-S-ACP, starting from the first acetyl-CoA + malonyl-CoA condensation?",
      q_cn: "根据教材，从第一次乙酰辅酶A与丙二酰辅酶A的缩合算起，构建16碳的软脂酰-S-ACP总共需要多少轮缩合循环？",
      options: ["Six", "Seven", "Eight", "Sixteen"],
      answer: 1,
      optionNotes: {
        0: { en: "Six cycles would stop the chain at fourteen carbons. The first cycle gives the four-carbon butyryl-S-ACP, and five more are needed after that — seven in all.", cn: "六轮只会把链停在十四个碳。第一轮给出四碳的 butyryl-S-ACP，之后还要再来五轮——总共七轮。" },
        2: { en: "Eight is the number of two-carbon acetyl units in palmitate, not the number of condensations. One of those eight arrived as the acetyl starter and needed no condensation of its own.", cn: "八是 palmitate 里两碳 acetyl 单元的数目，不是缩合的次数。这八个里有一个是作为 acetyl 起始单元进来的，它自己不需要一次缩合。" },
        3: { en: "Sixteen is palmitate's carbon count. The chain grows exactly two carbons at a time, so the number of cycles is half of that, less the starter unit that came in ready-made.", cn: "十六是 palmitate 的碳数。链每次正好长两个碳，所以轮数是它的一半，再减去那个现成进来的起始单元。" }
      },
      why_en: "The book states the first cycle gives butyryl-S-ACP (4 carbons), and that 'five more cycles (total then seven)' are needed to reach palmitoyl-S-ACP.",
      why_cn: "教材指出第一轮循环生成丁酰-S-ACP（4个碳），此后「再经五轮循环（总计七轮）」即可得到软脂酰-S-ACP。"
    },
    {
      type: "mcq",
      q_en: "Per the book's own carbon accounting, how many of palmitate's eight 'acetyl units' were actually delivered to the growing chain as acetyl-CoA itself, rather than via malonyl-CoA?",
      q_cn: "根据教材自己的碳原子核算，软脂酸的八个「乙酰单位」中，有多少个是以乙酰辅酶A本身（而非经由丙二酰辅酶A）直接掺入生长链的？",
      options: [
        "Two",
        "One",
        "Four",
        "All eight"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Two would mean the starter entered twice. It enters once, at the initiating step, and from then on every two-carbon fragment arrives as malonyl-CoA instead.", cn: "两个意味着起始单元进来了两次。它只在起始那一步进来一次，此后每个两碳片段都改以 malonyl-CoA 的形式到来。" },
        2: { en: "Four would be a half-and-half split. The book's accounting is one and seven: one acetyl unit delivered as acetyl-CoA, seven delivered as malonyl-CoA.", cn: "四个是对半分。教材的账是一和七：一个 acetyl 单元以 acetyl-CoA 送到，七个以 malonyl-CoA 送到。" },
        3: { en: "The intuitive answer, and the one the arithmetic contradicts. Palmitate is eight acetyl units long, but seven of them were carried in as malonyl-CoA and lost their extra carbon as CO2 on arrival.", cn: "这是直觉上的答案，也正是算式否定掉的那个。Palmitate 有八个 acetyl 单元长，但其中七个是以 malonyl-CoA 带进来的，到位时又以 CO2 的形式把多出来的那个碳丢掉了。" }
      },
      why_en: "The book states acetyl-CoA participated in the reaction only once, in the first (initiating) step; all seven other two-carbon fragments were incorporated via malonyl-CoA.",
      why_cn: "教材指出乙酰辅酶A仅在第一个（起始）步骤中参与反应一次；其余七个二碳片段都是经由丙二酰辅酶A掺入的。"
    },
    {
      type: "short",
      q_en: "What must happen to the finished fatty acid immediately after its hydrolytic release from the multienzyme complex, if it is to be used in further lipid biosynthesis?",
      q_cn: "合成好的脂肪酸从多酶复合体水解释放后，若要用于其他脂质生物合成，接下来必须发生什么？",
      accept: ["thiokinase", "palmitoyl-CoA", "activation", "activated", "硫激酶", "软脂酰辅酶A", "活化"],
      answer_en: "It must be re-activated by thiokinase, forming palmitoyl-CoA, before it can be used in further lipid biosynthetic pathways.",
      answer_cn: "它必须经硫激酶重新活化，生成软脂酰辅酶A，才能用于其他脂质生物合成途径。"
    }
  ],
  oral: {
    q_en: "Continue the fatty acid synthase cycle from acetoacetyl-ACP through to the finished, released palmitate — name every enzyme, and explain exactly how many carbons come from acetyl-CoA versus malonyl-CoA.",
    q_cn: "请从乙酰乙酰-ACP继续讲解脂肪酸合酶循环，直到最终释放出软脂酸——说出每一个酶的名称，并解释究竟有多少碳来自乙酰辅酶A、多少来自丙二酰辅酶A。",
    model_en: "Once acetoacetyl-ACP exists, three more steps finish off the first round. Beta-ketoacylreductase reduces its keto group using NADPH, giving beta-hydroxybutyryl-ACP; beta-hydroxyacyl dehydratase then pulls out a water molecule, leaving an unsaturated intermediate; and alpha,beta-enoylreductase saturates that double bond with a second NADPH, finally giving butyryl-S-ACP — a saturated four-carbon unit. Then comes the handoff: that four-carbon acyl group moves from the central phosphopantetheine thiol over to the peripheral cysteine thiol, which frees up the center for a brand new malonyl group to bind. That new malonyl condenses with the butyryl chain to make a six-carbon compound, and the exact same three steps — reduce, dehydrate, reduce — run again. You do this five more times, seven condensation cycles altogether, and you end up with the full sixteen-carbon palmitoyl-S-ACP. Here's the part worth being precise about: even though the finished molecule looks like eight acetyl units stitched together, acetyl-CoA itself was only ever used directly once, right at the very start — every other two-carbon addition after that came in as malonyl-CoA instead. Finally, the finished acid is released from the complex hydrolytically, and if the cell wants to use it for anything else — another lipid, a membrane component — it has to be reactivated by thiokinase into palmitoyl-CoA first. And because of how this whole condensation machinery works, the chain always grows two carbons at a time from the methyl end toward the carboxyl end.",
    checklist: [
      "Named beta-ketoacylreductase, beta-hydroxyacyl dehydratase, and alpha,beta-enoylreductase in order",
      "Stated NADPH is used at both reduction steps",
      "Described the step-VI transfer from central to peripheral SH and why it enables cycle repetition",
      "Gave the total cycle count (seven) and final product (palmitoyl-S-ACP)",
      "Correctly stated only one acetyl-CoA is used directly; the rest is via malonyl-CoA",
      "Described hydrolytic release and thiokinase re-activation to palmitoyl-CoA",
      "Stated the chain grows two carbons at a time, methyl end fixed, carboxyl end elongating"
    ]
  }
},

{
  id: "8-3-4",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Biosyntéza mastných kyselin — celková bilance (8 acetyl-CoA -> palmitát) a další osud kyseliny palmitové",
  enTitle: "Fatty acid biosynthesis — overall balance (8 acetyl-CoA -> palmitate) and palmitic acid's further fate",
  cnTitle: "脂肪酸生物合成——总体平衡（8乙酰辅酶A→软脂酸）及软脂酸的后续去向",
  pages: [190],
  coverage: "full",
  coverageNote: "The overall summary-equation diagram at the top of p.190 (8x acetyl-SCoA + 7x ATP + 14x NADPH(H+), processed by '7 enzymů + ACP-SH', with CO2 shown flowing in and then back out, releasing 7x ADP + 7x Pi + 14x NADP+ + 8x HSCoA, yielding palmitate) read directly and re-zoomed to confirm every coefficient and every arrow's direction (in vs. out). The following paragraph on palmitic acid's three possible fates (direct cytoplasmic use, mitochondrial elongation, or dehydrogenation to an unsaturated fatty acid) read directly.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "The balance is 8 acetyl-CoA + 7 ATP + 14 NADPH(H+) -> palmitate, and the arithmetic tells you the mechanism: seven condensations mean seven carboxylations, so CO2 is consumed and released in EQUAL amount — it is catalytic, never built into the product. Palmitate then has three fates: used as it is in the cytoplasm, elongated in the mitochondrion, or desaturated on the ER.", cn: "总平衡式是 8 acetyl-CoA + 7 ATP + 14 NADPH(H+) → palmitate，而这笔账本身就说明了机制：七次缩合意味着七次羧化，所以 CO2 的消耗量与释放量**相等**——它只是催化性地进出，从不留在产物里。palmitate 之后有三条去路：在细胞质里直接用掉、进线粒体延长、或在 ER 上脱氢成不饱和脂肪酸。" },
  lehNotes: [
    { kind: "conflict", node: "L-21-1-1",
      en: "The second fate listed here repeats the placement of the elongase system in the mitochondrial matrix. Lehninger 21.1 puts the 'more active elongation system' in the smooth ER (A p.753). Same warning as on node 8-3-1.",
      cn: "此处列出的第二种去向，重复了把延长酶系统放在线粒体基质的说法。Lehninger 21.1 把「更活跃的延长系统」放在平滑内质网（A 第753页）。与节点 8-3-1 上的提示相同。" },
  ],
  summary: {
    en: "The book closes the fatty-acid-synthase narrative with a single summary diagram: 8 molecules of acetyl-CoA, together with 7 ATP and 14 NADPH(H+), are processed by a set of '7 enzymes plus ACP-SH' to yield one molecule of palmitate, releasing 7 ADP, 7 Pi, 14 NADP+, and 8 free CoASH. CO2 appears in the diagram flowing in and then back out in equal amount, reflecting its purely catalytic role: it is consumed forming each of the 7 malonyl-CoA molecules along the way (acetyl-CoA carboxylase, node 8-3-1) and then released again in each of the 7 condensation steps (beta-ketoacyl-ACP synthase, node 8-3-2/8-3-3), for a net contribution of zero. Once made in the cytoplasm, palmitic acid has three possible fates: it can be used directly there for synthesis of a simple or complex lipid; it can be transferred into the mitochondrial matrix and elongated by one or more additional two-carbon units (the elongase system of node 8-3-1); or it can be dehydrogenated to form an unsaturated fatty acid (the desaturase system of node 8-3-1).",
    cn: "教材以一幅总结图为脂肪酸合酶部分的叙述作结：8分子乙酰辅酶A连同7分子ATP和14分子NADPH(H+)，经由「7种酶加ACP-SH」处理，生成1分子软脂酸，同时释放7分子ADP、7分子Pi、14分子NADP+及8分子游离CoASH。图中CO2以等量流入再流出的方式出现，反映其纯催化性质：它在沿途生成每一分子丙二酰辅酶A时被消耗（乙酰辅酶A羧化酶，见节点8-3-1），又在每一次缩合步骤中被重新释放（β-酮脂酰-ACP合成酶，见节点8-3-2/8-3-3），净贡献为零。软脂酸在细胞质中生成后，有三种可能的去向：可直接在细胞质中用于合成某种单纯或复合脂质；可转运至线粒体基质，被进一步延长一个或多个二碳单位（即节点8-3-1中的延长酶系统）；或可被脱氢生成不饱和脂肪酸（即节点8-3-1中的去饱和酶系统）。"
  },
  points: [
    { cz: "celková rovnice: 8 acetyl-CoA + 7 ATP + 14 NADPH(H+) -> palmitát + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH", en: "Overall equation: 8 acetyl-CoA + 7 ATP + 14 NADPH(H+) -> palmitate + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH, catalyzed collectively by '7 enzymes + ACP-SH' per the book's diagram.", cn: "总反应式：8乙酰辅酶A+7ATP+14NADPH(H+)->软脂酸+7ADP+7Pi+14NADP++8CoASH，据教材插图，由「7种酶+ACP-SH」共同催化。" },
    { cz: "CO2 vstupuje i vystupuje ve stejném množství = katalytická role, čistý zisk 0", en: "CO2 is shown both consumed (carboxylating acetyl-CoA to malonyl-CoA, x7) and released (in each of the 7 condensation steps) in EQUAL amount — its role is purely catalytic, with a net contribution of zero to the overall equation.", cn: "CO2在图中既被消耗（将乙酰辅酶A羧化为丙二酰辅酶A，共7次）又被释放（在每一次缩合步骤中，共7次），且数量相等——其作用纯属催化性质，对总反应式的净贡献为零。" },
    { cz: "8x HSCoA uvolněno celkem (1 z iniciačního acetyl-CoA + 7 ze 7 malonyl-CoA)", en: "8 molecules of free CoASH are released in total — one from the initiating acetyl-CoA and one each from the seven malonyl-CoA molecules that fed into the seven condensation cycles.", cn: "总共释放8分子游离CoASH——1分子来自起始的乙酰辅酶A，另外7分子分别来自参与七轮缩合循环的7分子丙二酰辅酶A。" },
    { cz: "osud 1: přímé využití v cytoplasmě k syntéze lipidů", en: "Fate 1: palmitic acid can be used directly in the cytoplasm for synthesis of a simple or complex lipid.", cn: "去向一：软脂酸可直接在细胞质中用于合成某种单纯或复合脂质。" },
    { cz: "osud 2: přenos do matrix mitochondrií, prodloužení o dvouuhlíkaté jednotky (elongasa)", en: "Fate 2: palmitic acid can be transferred into the mitochondrial matrix and elongated by one or more additional two-carbon units, via the elongase system (node 8-3-1).", cn: "去向二：软脂酸可转运至线粒体基质，经延长酶系统（见节点8-3-1）被进一步延长一个或多个二碳单位。" },
    { cz: "osud 3: dehydrogenace na nenasycenou MK (desaturasa)", en: "Fate 3: palmitic acid can be dehydrogenated to form an unsaturated fatty acid, via the ER-bound desaturase system (node 8-3-1) — this paragraph itself does not repeat the location, only the transformation.", cn: "去向三：软脂酸可被脱氢生成不饱和脂肪酸，经内质网上的去饱和酶系统（见节点8-3-1）——本段文字本身未重复说明其定位，只描述了转化过程。" }
  ],
  terms: [
    { cz: "palmitát (kyselina palmitová)", en: "palmitate (palmitic acid)", cn: "软脂酸（棕榈酸）", def_en: "The 16-carbon saturated fatty acid product of the complete fatty acid synthase cycle (7 condensation cycles from 8 acetyl-CoA).", def_cn: "脂肪酸合酶完整循环（由8分子乙酰辅酶A经7轮缩合循环）生成的16碳饱和脂肪酸产物。" },
    { cz: "celková bilance biosyntézy MK", en: "overall fatty-acid-synthesis balance", cn: "脂肪酸合成总平衡", def_en: "8 acetyl-CoA + 7 ATP + 14 NADPH(H+) -> palmitate + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH, with CO2 consumed and released catalytically (net zero).", def_cn: "8乙酰辅酶A+7ATP+14NADPH(H+)->软脂酸+7ADP+7Pi+14NADP++8CoASH，CO2以催化方式被消耗又释放（净值为零）。" },
    { cz: "elongace (mitochondriální)", en: "(mitochondrial) elongation", cn: "（线粒体）延长", def_en: "One of palmitate's three fates: further two-carbon extension of the chain in the mitochondrial matrix.", def_cn: "软脂酸三种去向之一：在线粒体基质中链被进一步以二碳为单位延长。" },
    { cz: "dehydrogenace MK", en: "fatty acid dehydrogenation", cn: "脂肪酸脱氢", def_en: "One of palmitate's three fates: introduction of a double bond, forming an unsaturated fatty acid.", def_cn: "软脂酸三种去向之一：引入双键，生成不饱和脂肪酸。" },
    { cz: "NADPH(H+) jako reduktant biosyntézy MK", en: "NADPH(H+) as the reductant of fatty acid biosynthesis", cn: "NADPH(H+)作为脂肪酸合成的还原剂", def_en: "14 molecules are consumed per palmitate synthesized (2 per condensation cycle, x7 cycles) — contrasting with the NAD+-linked oxidations of catabolic pathways such as glycolysis.", def_cn: "每合成1分子软脂酸消耗14分子NADPH(H+)（每轮缩合循环消耗2分子，共7轮）——与糖酵解等分解代谢途径中依赖NAD+的氧化反应形成对比。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's summary equation, what is the net contribution of CO2 to the overall synthesis of one palmitate molecule from 8 acetyl-CoA?",
      q_cn: "根据教材的总结方程式，CO2对由8分子乙酰辅酶A合成1分子软脂酸这一总反应的净贡献是多少？",
      options: [
        "Net consumption of 7 CO2, one per condensation",
        "Net release of 7 CO2, one per carboxylation",
        "Net zero (consumed and released in equal amount)",
        "CO2 appears nowhere in the summary equation at all"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Seven CO2 are consumed, at the seven carboxylations that make malonyl-CoA — but seven are released again, one at each condensation, so the net comes out at zero. The label on the seven is also swapped here.", cn: "确实消耗了七个 CO2，用在生成 malonyl-CoA 的七次羧化上——但又放出七个，每次缩合放一个，所以净值为零。这个选项还把这七个的归属也说反了。" },
        1: { en: "Seven CO2 are released, one per condensation — but seven were taken up first. The direction here is right and the accounting only half done, which is what makes this the most tempting wrong answer.", cn: "确实放出七个 CO2，每次缩合一个——但之前先吸收了七个。这个选项方向说对了，只是账只算了一半，这也是它最有迷惑性的地方。" },
        3: { en: "It appears twice over, once going in and once coming out. That is exactly why it does not survive into the net summary equation, whose left-hand side lists only 8 acetyl-CoA, 7 ATP and 14 NADPH(H+).", cn: "它出现了两次，一次进、一次出。正因如此它才没有留在净的总方程里——那个方程左边只列了 8 acetyl-CoA、7 ATP 和 14 NADPH(H+)。" }
      },
      why_en: "The diagram shows CO2 flowing in (carboxylating acetyl-CoA to malonyl-CoA) and back out (in each condensation step) in matching amounts, so its net contribution to the overall equation is zero.",
      why_cn: "图中显示CO2以等量的方式流入（将乙酰辅酶A羧化为丙二酰辅酶A）又流出（在每一次缩合步骤中），因此其对总反应式的净贡献为零。"
    },
    {
      type: "mcq",
      q_en: "Which of the following is NOT one of the three fates the book gives for newly made cytoplasmic palmitic acid?",
      q_cn: "以下哪一项不是教材所给出的新生成的细胞质软脂酸的三种去向之一？",
      options: ["Direct use for synthesis of a simple/complex lipid in the cytoplasm", "Transfer to the mitochondrial matrix for further elongation", "Dehydrogenation to an unsaturated fatty acid", "Direct oxidation to CO2 and H2O in the cytoplasm"],
      answer: 3,
      optionRefs: { 0: "8-3-3", 1: "8-3-1", 2: "8-3-1" },
      optionNotes: {
        0: { en: "This is fate 1, and it is genuine: palmitic acid used directly in the cytoplasm to build a simple or a complex lipid. To enter those pathways it is first re-activated by thiokinase to palmitoyl-CoA.", cn: "这是第一种去向，而且是真的：palmitic acid 直接在细胞质里用于合成简单或复合脂类。要进入那些通路，它先由 thiokinase 重新活化成 palmitoyl-CoA。" },
        1: { en: "This is fate 2: transferred into the mitochondrial matrix and lengthened by one or more further two-carbon units, which is the elongase system's job.", cn: "这是第二种去向：被转移到线粒体基质，再延长一个或多个两碳单元，这正是 elongase 系统的工作。" },
        2: { en: "This is fate 3: dehydrogenated to give an unsaturated fatty acid — the work of the desaturase system, which the book places on the endoplasmic reticulum.", cn: "这是第三种去向：脱氢生成不饱和脂肪酸——这是 desaturase 系统的工作，教材把它放在内质网上。" }
      },
      why_en: "The book gives only direct lipid-synthesis use, mitochondrial elongation, or dehydrogenation as palmitate's fates in this passage — full oxidative catabolism (beta-oxidation onward) belongs to the later section 8.4, not to any of these three fates.",
      why_cn: "教材在此段仅给出直接用于脂质合成、线粒体延长、或脱氢这三种软脂酸去向——完整的氧化分解代谢（β-氧化及后续）属于后面的第8.4节，不属于这三种去向之一。"
    },
    {
      type: "short",
      q_en: "Give the overall equation for palmitate synthesis from acetyl-CoA as the book states it, including all cofactors consumed and released.",
      q_cn: "写出教材所给出的由乙酰辅酶A合成软脂酸的总反应式，包括所有被消耗和释放的辅助因子。",
      accept: ["8 acetyl-CoA", "7 ATP", "14 NADPH", "7 ADP", "7 Pi", "14 NADP", "8 CoASH", "软脂酸", "palmitate"],
      answer_en: "8 acetyl-CoA + 7 ATP + 14 NADPH(H+) -> palmitate + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH (with CO2 consumed and released catalytically, net zero).",
      answer_cn: "8乙酰辅酶A+7ATP+14NADPH(H+)->软脂酸+7ADP+7Pi+14NADP++8CoASH（CO2以催化方式被消耗又释放，净值为零）。"
    }
  ],
  oral: {
    q_en: "Give the overall balance sheet for palmitate synthesis from acetyl-CoA, and describe the three things that can happen to palmitate once it is made.",
    q_cn: "请给出由乙酰辅酶A合成软脂酸的总体收支平衡，并描述软脂酸生成后可能发生的三种情况。",
    model_en: "If you add up everything that happens across all seven condensation cycles, the whole fatty acid synthase pathway boils down to one clean equation: eight acetyl-CoA, seven ATP, and fourteen NADPH go in, and what comes out is one palmitate, plus seven ADP, seven phosphate, fourteen NADP+, and eight free CoASH. Carbon dioxide is interesting here — it gets used seven times, to carboxylate acetyl-CoA into malonyl-CoA, but it also gets released seven times, once per condensation step, so it actually cancels out completely; its role is purely catalytic, not a net input or output. Once palmitate exists in the cytoplasm, the book gives it three possible futures. It can be used right where it is, directly, to build a simple or complex lipid. It can be shipped into the mitochondrial matrix, where the elongase system adds on more two-carbon units to make it longer. Or it can be run through the desaturase system on the endoplasmic reticulum and come out with a double bond, as an unsaturated fatty acid.",
    checklist: [
      "Gave the full balanced equation (8 acetyl-CoA, 7 ATP, 14 NADPH in; palmitate, 7 ADP, 7 Pi, 14 NADP+, 8 CoASH out)",
      "Explained CO2's catalytic, net-zero role",
      "Named all three fates: direct cytoplasmic lipid synthesis, mitochondrial elongation, dehydrogenation",
      "Connected elongation and dehydrogenation back to their respective locations (mitochondrial matrix, ER)"
    ]
  }
},

{
  id: "8-3-5",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Biosyntéza jednoduchých lipidů a fosfolipidů — aktivace prekurzorů a vznik kyseliny fosfatidové",
  enTitle: "Biosynthesis of simple lipids and phospholipids — precursor activation and formation of phosphatidic acid",
  cnTitle: "单纯脂质与磷脂的生物合成——前体的活化及磷脂酸的生成",
  pages: [190],
  coverage: "full",
  coverageNote: "The 'Jednoduché lipidy a fosfolipidy' subheading and its opening paragraph (activated precursors: glycerol via glycerol phosphate — itself an indirect glycolysis product on a carbohydrate-rich diet — and fatty acids bound to coenzyme A; phospholipid organic bases activated by CTP) read directly from the lower half of p.190, together with the adipocyte-triacylglycerol sentence and the two-acylation reaction diagram (3-glycerolfosfát + 2x acyl-CoA, releasing 2x CoASH, -> phosphatidic acid) and the closing sentence naming phosphatidic acid the first natural and key intermediate for further pathways. NAMING NOTE verified by zoom: this page's own diagram labels the starting glycerol phosphate '3-glycerolfosfát', while the very next page's version of the identical molecule (see node 8-3-6) is labeled 'L-alpha-glycerolfosfát' — same compound, different naming convention across a page turn, flagged per the project's standing convention on prose/figure or figure/figure naming drift. STRUCTURAL/DIDACTIC CAVEAT: the introductory sentence promises that 'triacylglyceroly jsou syntetizovány' by this reaction sequence, but the diagram actually shown on THIS page stops at phosphatidic acid (a diacylglycerol phosphate, not yet a triacylglycerol) — the additional dephosphorylation-then-third-acylation step that actually completes a triglyceride is shown on the following page's diagram (covered in node 8-3-6), not duplicated here. This node does not overclaim that triacylglycerol synthesis is complete by the end of this page.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Anabolism runs on activated precursors, and this section has three different activations to keep apart: glycerol as GLYCEROL PHOSPHATE, fatty acids as ACYL-CoA, and the head-group bases activated by CTP. Two acylations of glycerol phosphate give PHOSPHATIDIC ACID — which the book calls the first natural and key intermediate, the branch point everything later comes off.", cn: "合成代谢跑在「活化态」上，而这一节要分清三种不同的活化：glycerol 活化成 GLYCEROL PHOSPHATE，脂肪酸活化成 ACYL-CoA，磷脂头部的有机碱由 CTP 活化。glycerol phosphate 接上两个酰基就得到 PHOSPHATIDIC ACID——教材称它是第一个天然的、同时也是关键的中间体，后面所有分支都从这里出发。" },
  summary: {
    en: "As in all anabolic pathways, lipid biosynthesis relies on a range of synthase-type enzymes that act on ACTIVATED starting compounds. For glycerol, the activated form is glycerol phosphate, itself an indirect product of glycolysis on a carbohydrate-rich diet; for fatty acids, the activated form is bound to coenzyme A (acyl-CoA); and the organic bases used to build phospholipid head groups are activated by the nucleotide CTP. In fat cells (adipocytes), triacylglycerol synthesis begins with this sequence of reactions: 3-glycerolphosphate first reacts with one acyl-CoA (releasing CoASH) to give a monoacylated intermediate, which then reacts with a second acyl-CoA (releasing a second CoASH) to give PHOSPHATIDIC ACID — a diacylglycerol bearing a phosphate group at C-3. The book calls phosphatidic acid the first natural and simultaneously key intermediate for further biosynthetic pathways, setting up the branching diagram continued on the next page (node 8-3-6), where phosphatidic acid is actually carried on to triacylglycerol and to the various phospholipid head groups.",
    cn: "如同所有合成代谢途径一样，脂质生物合成依赖一系列作用于活化起始化合物的合成酶。对甘油而言，其活化形式是磷酸甘油，这本身是碳水化合物丰富饮食下糖酵解的间接产物；对脂肪酸而言，其活化形式是与辅酶A结合（脂酰辅酶A）；而用于构建磷脂头部基团的有机碱基则由核苷酸CTP活化。在脂肪细胞（脂肪细胞）中，三酰甘油的合成始于以下反应序列：3-磷酸甘油首先与一分子脂酰辅酶A反应（释放CoASH），生成单酰化中间体，该中间体再与第二分子脂酰辅酶A反应（释放第二分子CoASH），生成磷脂酸——即C-3位带有磷酸基团的二酰甘油。教材称磷脂酸为进一步生物合成途径的第一个天然、同时也是关键的中间体，为下一页（节点8-3-6）继续展开的分支示意图作铺垫——在那里磷脂酸真正被继续转化为三酰甘油以及各种磷脂头部基团。"
  },
  points: [
    { cz: "obecný princip: synthasy působí na aktivované výchozí sloučeniny", en: "As in all anabolic pathways, lipid biosynthesis uses a range of synthase-type enzymes that act specifically on ACTIVATED forms of the starting compounds, not the free compounds themselves.", cn: "如同所有合成代谢途径一样，脂质生物合成使用一系列合成酶，它们专门作用于起始化合物的活化形式，而非游离化合物本身。" },
    { cz: "glycerol aktivován jako glycerolfosfát (nepřímý produkt glykolýzy)", en: "Glycerol's activated form is GLYCEROL PHOSPHATE, itself an indirect product of glycolysis on a carbohydrate-rich diet.", cn: "甘油的活化形式是磷酸甘油，这本身是碳水化合物丰富饮食下糖酵解的间接产物。" },
    { cz: "mastné kyseliny aktivovány vazbou na CoA (acyl-CoA)", en: "Fatty acids' activated form is bound to coenzyme A, i.e. acyl-CoA.", cn: "脂肪酸的活化形式是与辅酶A结合，即脂酰辅酶A。" },
    { cz: "organické báze fosfolipidů aktivovány CTP", en: "The organic bases used to build phospholipid head groups are activated by the nucleotide CTP.", cn: "用于构建磷脂头部基团的有机碱基由核苷酸CTP活化。" },
    { cz: "adipocyty: 3-glycerolfosfát + 2x acyl-CoA (-2x CoASH) -> kyselina fosfatidová", en: "In adipocytes, triacylglycerol synthesis begins: 3-glycerolphosphate + one acyl-CoA (releasing CoASH) -> a monoacylated intermediate; + a second acyl-CoA (releasing a second CoASH) -> PHOSPHATIDIC ACID (a diacylglycerol-3-phosphate).", cn: "在脂肪细胞中，三酰甘油的合成始于：3-磷酸甘油+1分子脂酰辅酶A（释放CoASH）->单酰化中间体；再+第二分子脂酰辅酶A（释放第二分子CoASH）->磷脂酸（二酰甘油-3-磷酸）。" },
    { cz: "kyselina fosfatidová = první přirozený a klíčový meziprodukt dalších drah", en: "The book calls phosphatidic acid the first natural and simultaneously key intermediate for further lipid-biosynthetic pathways — the branch point elaborated in node 8-3-6.", cn: "教材称磷脂酸为进一步脂质生物合成途径的第一个天然、同时也是关键的中间体——即节点8-3-6中详细展开的分支点。" },
    { cz: "naming: '3-glycerolfosfát' (zde) vs. 'L-α-glycerolfosfát' (další strana) — stejná látka", en: "NAMING NOTE: this page's diagram labels the starting molecule '3-glycerolfosfát', while the next page's version of the same molecule is labeled 'L-alpha-glycerolfosfát' — same compound, different naming convention across the page turn.", cn: "命名提示：本页插图将起始分子标注为「3-glycerolfosfát」，而下一页对同一分子的标注则是「L-α-glycerolfosfát」——是同一化合物，仅命名方式在翻页后有所不同。" },
    { cz: "didaktická poznámka: text slibuje triglyceridy, ale diagram na této straně končí u kyseliny fosfatidové", en: "DIDACTIC CAVEAT: the introductory sentence promises triacylglycerol synthesis, but the diagram on this page alone stops at phosphatidic acid, not yet a triacylglycerol; the remaining dephosphorylation-plus-third-acylation step is shown on the next page (node 8-3-6).", cn: "教学提示：引言句承诺讲述三酰甘油的合成，但本页插图本身仅止于磷脂酸，尚非三酰甘油；剩余的去磷酸化及第三次酰化步骤见下一页（节点8-3-6）。" }
  ],
  terms: [
    { cz: "glycerolfosfát (3-glycerolfosfát / L-α-glycerolfosfát)", en: "glycerol phosphate", cn: "磷酸甘油", def_en: "The activated form of glycerol used in lipid biosynthesis; an indirect glycolytic product on a carbohydrate-rich diet. Labeled '3-glycerolfosfát' on this page and 'L-alpha-glycerolfosfát' on the next.", def_cn: "脂质生物合成中甘油的活化形式；是碳水化合物丰富饮食下糖酵解的间接产物。本页标注为「3-glycerolfosfát」，下一页标注为「L-α-glycerolfosfát」。" },
    { cz: "acyl-CoA", en: "acyl-CoA", cn: "脂酰辅酶A", def_en: "The activated (thioester) form of a fatty acid used as the acyl donor throughout lipid biosynthesis.", def_cn: "脂肪酸的活化（硫酯）形式，在整个脂质生物合成过程中作为酰基供体。" },
    { cz: "CTP (aktivace bází fosfolipidů)", en: "CTP (phospholipid base activation)", cn: "CTP（磷脂碱基的活化）", def_en: "The nucleotide that activates organic phospholipid head-group bases before their incorporation into a phospholipid.", def_cn: "在磷脂有机碱基头部基团掺入磷脂之前，用于将其活化的核苷酸。" },
    { cz: "kyselina fosfatidová", en: "phosphatidic acid", cn: "磷脂酸", def_en: "Diacylglycerol-3-phosphate, formed from glycerol phosphate by two successive acyl-CoA-dependent acylations; the book calls it the first natural and simultaneously key intermediate for further lipid-biosynthetic pathways.", def_cn: "二酰甘油-3-磷酸，由磷酸甘油经两次依赖脂酰辅酶A的酰化反应生成；教材称其为进一步脂质生物合成途径的第一个天然、同时也是关键的中间体。" },
    { cz: "triacylglyceroly (adipocyty)", en: "triacylglycerols (adipocytes)", cn: "三酰甘油（脂肪细胞）", def_en: "The fat-cell storage lipid whose synthesis sequence the book introduces here, beginning from glycerol phosphate; actually completed via the pathway continued in node 8-3-6.", def_cn: "脂肪细胞中的储存脂质，教材在此引出其合成序列（始于磷酸甘油）；其合成实际在节点8-3-6所述的途径中完成。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book, what is the 'activated' form of a fatty acid used as a substrate in lipid biosynthesis?",
      q_cn: "根据教材，脂肪酸作为脂质生物合成底物时的「活化」形式是什么？",
      options: ["Free fatty acid anion", "Bound to coenzyme A (acyl-CoA)", "Bound to ACP only", "Phosphorylated at the carboxyl group"],
      answer: 1,
      optionRefs: { 2: "8-3-2" },
      optionNotes: {
        0: { en: "The free acid is exactly what the synthases do not act on. The book states the general principle first: anabolic enzymes work on activated forms of their starting compounds, never on the free compounds themselves.", cn: "游离酸恰恰是这些 synthase 不作用的对象。教材先给出一条总原则：合成代谢的酶作用于起始物的活化形式，从不作用于游离的化合物本身。" },
        2: { en: "ACP does bind acyl groups through a thioester bond, but that happens inside the fatty-acid synthase complex while the chain is being built. Once released, the finished acid is re-activated with coenzyme A instead.", cn: "ACP 确实通过硫酯键结合酰基，但那发生在 fatty-acid synthase 复合体内部、链正在搭建的时候。一旦释放出来，做好的酸改用 coenzyme A 重新活化。" },
        3: { en: "Phosphorylation is glycerol's activation, not the fatty acid's: glycerol enters this pathway as glycerol phosphate, itself an indirect product of glycolysis on a carbohydrate-rich diet.", cn: "磷酸化是 glycerol 的活化方式，不是脂肪酸的：glycerol 以 glycerol phosphate 的形式进入这条通路，而它在高碳水饮食下是 glycolysis 的间接产物。" }
      },
      why_en: "The book states fatty acids are used in lipid biosynthesis in their active form, bound to coenzyme A.",
      why_cn: "教材指出脂肪酸在脂质生物合成中以其活化形式使用，即与辅酶A结合。"
    },
    {
      type: "mcq",
      q_en: "What does the book identify as the first natural and simultaneously key intermediate for further lipid biosynthetic pathways?",
      q_cn: "教材将什么确定为进一步脂质生物合成途径的第一个天然、同时也是关键的中间体？",
      options: ["Diacylglycerol", "Phosphatidic acid", "CDP-diacylglycerol", "Triacylglycerol"],
      answer: 1,
      optionRefs: { 0: "8-3-6", 2: "8-3-6", 3: "8-3-6" },
      optionNotes: {
        0: { en: "Diacylglycerol comes one step later, by dephosphorylation of phosphatidic acid, and it opens only one of the two branches — the one leading to triglycerides, PE, PC and the galactolipids.", cn: "Diacylglycerol 要晚一步，由 phosphatidic acid 去磷酸而来，而且它只打开两条分支中的一条——通向 triglyceride、PE、PC 和 galactolipid 的那条。" },
        2: { en: "CDP-diacylglycerol is the other branch's activated intermediate, made from phosphatidic acid plus CTP. It sits downstream of the key intermediate rather than being it.", cn: "CDP-diacylglycerol 是另一条分支的活化中间体，由 phosphatidic acid 加 CTP 生成。它位于那个关键中间体的下游，本身并不是它。" },
        3: { en: "Triacylglycerol is an end product, not a branch point: diacylglycerol takes on a third acyl-CoA and the pathway stops there. Nothing further branches off it.", cn: "Triacylglycerol 是终产物，不是分支点：diacylglycerol 再接一个 acyl-CoA，通路就到此为止，不再从它分出别的支线。" }
      },
      why_en: "The book explicitly names phosphatidic acid (formed by two successive acylations of glycerol phosphate) as this key branch-point intermediate.",
      why_cn: "教材明确指出磷脂酸（由磷酸甘油经两次连续酰化生成）是这一关键分支点中间体。"
    },
    {
      type: "short",
      q_en: "Name the three types of building block the book says must be 'activated' before lipid biosynthesis, and state the activated form of each.",
      q_cn: "写出教材指出的、脂质生物合成前必须「活化」的三类建构单元，并说明各自的活化形式。",
      accept: ["glycerol", "glycerol phosphate", "fatty acid", "acyl-CoA", "CTP", "base", "甘油磷酸", "脂酰辅酶A", "碱基"],
      answer_en: "Glycerol (activated as glycerol phosphate), fatty acids (activated bound to coenzyme A), and phospholipid organic bases (activated by the nucleotide CTP).",
      answer_cn: "甘油（活化为磷酸甘油）、脂肪酸（活化为与辅酶A结合）、磷脂有机碱基（由核苷酸CTP活化）。"
    }
  ],
  oral: {
    q_en: "Explain the general 'activation' principle behind lipid biosynthesis, and describe how phosphatidic acid is built from glycerol phosphate.",
    q_cn: "请解释脂质生物合成背后的一般「活化」原则，并描述磷脂酸如何由磷酸甘油构建而成。",
    model_en: "Like every other anabolic pathway, lipid biosynthesis doesn't work on its raw starting materials directly — it works on activated versions of them. Glycerol shows up as glycerol phosphate, which happens to be an indirect byproduct of glycolysis when the diet is rich in carbohydrates. Fatty acids show up bound to coenzyme A, as acyl-CoA. And the nitrogenous bases that will eventually become phospholipid head groups get activated by the nucleotide CTP. You can see this activation principle in action in how fat cells build triacylglycerols: glycerol phosphate reacts with one acyl-CoA, kicking out a CoASH, to give a mono-acylated intermediate; then a second acyl-CoA comes in, kicks out a second CoASH, and what you're left with is phosphatidic acid — glycerol with two fatty acid chains and a phosphate group. The book is very deliberate about calling phosphatidic acid the first natural and simultaneously the key intermediate for everything that follows, because from here the pathway branches out toward triacylglycerols on one side and the whole family of phospholipids on the other.",
    checklist: [
      "Stated the general principle: synthases act on activated precursors",
      "Named glycerol's activated form (glycerol phosphate) and its glycolytic connection",
      "Named fatty acids' activated form (acyl-CoA)",
      "Named CTP as the activator of phospholipid bases",
      "Described the two-acylation sequence from glycerol phosphate to phosphatidic acid",
      "Called phosphatidic acid the key branch-point intermediate"
    ]
  }
},

{
  id: "8-3-6",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Biosyntéza fosfolipidů a glykolipidů — diglycerid, CDP-diglycerid a vznik triglyceridů, fosfatidylderivátů a galaktolipidů",
  enTitle: "Phospholipid and glycolipid biosynthesis — diacylglycerol, CDP-diacylglycerol, and the formation of triglycerides, phosphatidyl head-group lipids, and galactolipids",
  cnTitle: "磷脂与糖脂的生物合成——二酰甘油、CDP-二酰甘油，以及三酰甘油、磷脂酰衍生物与半乳糖脂的生成",
  pages: [191],
  coverage: "full",
  coverageNote: "The full branching diagram at the top of p.191 read directly and re-zoomed section by section: phosphatidic acid --(phosphatase, 'POH')--> diacylglycerol ('diglycerid'); from diacylglycerol, three left-hand branches (+ acyl-CoA/-CoASH -> triglyceridy; + CDP-ethanolamin/-CMP -> fosfatidylethanolamin; + CDP-cholin/-CMP -> fosfatidylcholin) plus a base-exchange arrow (fosfatidylcholin + serin -> fosfatidylserin + cholin) and a two-step galactosylation sequence (diglycerid + UDP-galaktosa/-UDP -> MGDG; MGDG + UDP-galaktosa/-UDP -> DGDG); separately, phosphatidic acid + CTP -> CDP-diglycerid + PPi, which itself branches to (+ L-alpha-glycerolfosfát/-CMP, then -Pi -> fosfatidylglycerol -> + a second CDP-diglycerid/-CMP -> difosfatidylglycerol) and (+ myoinositol/-CMP -> fosfatidylinositol -> unnamed 'následné produkty'). Every arrow direction and every released byproduct label (UDP, CMP, PPi, Pi) verified by zoomed re-read against the figure. GAP NOTE: the book's own diagram does not name or detail the 'následné produkty' (subsequent products) downstream of phosphatidylinositol — this node reports that gap rather than inventing named phosphoinositide products the book does not give.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Phosphatidic acid takes one of two routes and that choice decides the product family. Dephosphorylate it to DIACYLGLYCEROL and you get triglycerides, phosphatidylethanolamine, phosphatidylcholine and the galactolipids MGDG/DGDG. Activate it with CTP to CDP-DIACYLGLYCEROL and you get phosphatidylglycerol, cardiolipin and phosphatidylinositol. Same starting material, two activations, two families.", cn: "phosphatidic acid 有两条去路，选哪条决定了产物属于哪一族。**脱磷酸**成 DIACYLGLYCEROL，这一支给出 triglyceride、phosphatidylethanolamine、phosphatidylcholine 以及半乳糖脂 MGDG/DGDG；用 CTP **活化**成 CDP-DIACYLGLYCEROL，这一支给出 phosphatidylglycerol、cardiolipin 和 phosphatidylinositol。同一个起点，两种活化方式，两个家族。" },
  summary: {
    en: "Phosphatidic acid (node 8-3-5) is dephosphorylated (losing Pi) to DIACYLGLYCEROL, which the book's diagram shows branching four ways. It can react with a third acyl-CoA (releasing CoASH) to complete a TRIGLYCERIDE. It can react with CDP-ethanolamine (releasing CMP) to give PHOSPHATIDYLETHANOLAMINE, or with CDP-choline (releasing CMP) to give PHOSPHATIDYLCHOLINE — and phosphatidylcholine can further exchange its head group with free serine, releasing choline, to give PHOSPHATIDYLSERINE. Separately, diacylglycerol can be galactosylated twice in succession using UDP-galactose (releasing UDP each time): first to MONOGALACTOSYLDIACYLGLYCEROL (MGDG), then to DIGALACTOSYLDIACYLGLYCEROL (DGDG) — plant/plastid membrane glycolipids, consistent with the diagram's own starting point being fed by either the Calvin cycle or glycolysis. Independently, phosphatidic acid itself reacts with CTP (releasing pyrophosphate) to form CDP-DIACYLGLYCEROL, an activated intermediate that branches two further ways: with glycerol phosphate (releasing CMP, then a further Pi) to give PHOSPHATIDYLGLYCEROL, which can react with a second CDP-diacylglycerol (releasing CMP) to give DIPHOSPHATIDYLGLYCEROL (cardiolipin); or with myo-inositol (releasing CMP) to give PHOSPHATIDYLINOSITOL, which the book notes is itself the precursor of further ('následné') products it does not name or detail here.",
    cn: "磷脂酸（见节点8-3-5）经去磷酸化（失去Pi）生成二酰甘油，教材插图显示其可分四路继续反应。它可与第三分子脂酰辅酶A反应（释放CoASH），完成三酰甘油的合成。它也可与CDP-乙醇胺反应（释放CMP）生成磷脂酰乙醇胺，或与CDP-胆碱反应（释放CMP）生成磷脂酰胆碱——而磷脂酰胆碱可进一步与游离丝氨酸交换头部基团（释放胆碱），生成磷脂酰丝氨酸。此外，二酰甘油还可利用UDP-半乳糖连续进行两次半乳糖基化（每次释放UDP）：先生成单半乳糖基二酰甘油（MGDG），再生成双半乳糖基二酰甘油（DGDG）——这是植物/质体膜糖脂，与该图自身的起点（可来自卡尔文循环或糖酵解）相符。另一方面，磷脂酸本身可与CTP反应（释放焦磷酸）生成CDP-二酰甘油，这是一个活化中间体，可进一步分两路：与磷酸甘油反应（释放CMP，随后再释放Pi）生成磷脂酰甘油，磷脂酰甘油又可与第二分子CDP-二酰甘油反应（释放CMP）生成二磷脂酰甘油（心磷脂）；或与肌醇反应（释放CMP）生成磷脂酰肌醇，教材指出磷脂酰肌醇本身是若干「后续」产物的前体，但此处并未命名或详述这些产物。"
  },
  points: [
    { cz: "kyselina fosfatidová -> diglycerid (fosfatasa, -Pi)", en: "Phosphatidic acid is dephosphorylated (a phosphatase reaction, releasing Pi, shown in the diagram as 'POH') to give DIACYLGLYCEROL ('diglycerid') — the book's diagram does not separately name the phosphatase enzyme.", cn: "磷脂酸经去磷酸化（磷酸酶反应，释放Pi，图中标注为「POH」）生成二酰甘油——教材插图未单独为该磷酸酶命名。" },
    { cz: "diglycerid + acyl-CoA (-CoASH) -> triglyceridy", en: "Diacylglycerol + a third acyl-CoA (releasing CoASH) -> TRIGLYCERIDES (triacylglycerol) — completing the synthesis introduced in node 8-3-5.", cn: "二酰甘油+第三分子脂酰辅酶A（释放CoASH）->三酰甘油——完成节点8-3-5中引出的合成。" },
    { cz: "diglycerid + CDP-ethanolamin (-CMP) -> fosfatidylethanolamin; + CDP-cholin (-CMP) -> fosfatidylcholin", en: "Diacylglycerol + CDP-ethanolamine (releasing CMP) -> PHOSPHATIDYLETHANOLAMINE; diacylglycerol + CDP-choline (releasing CMP) -> PHOSPHATIDYLCHOLINE.", cn: "二酰甘油+CDP-乙醇胺（释放CMP）->磷脂酰乙醇胺；二酰甘油+CDP-胆碱（释放CMP）->磷脂酰胆碱。" },
    { cz: "fosfatidylcholin + serin -> fosfatidylserin + cholin (výměna báze)", en: "Phosphatidylcholine can exchange its head group with free serine, releasing choline, to give PHOSPHATIDYLSERINE — a base-exchange reaction rather than a CDP-activated route.", cn: "磷脂酰胆碱可与游离丝氨酸交换其头部基团（释放胆碱），生成磷脂酰丝氨酸——这是碱基交换反应，而非CDP活化途径。" },
    { cz: "diglycerid + 2x UDP-galaktosa (postupně) -> MGDG -> DGDG", en: "Diacylglycerol is galactosylated twice in succession using UDP-galactose (releasing UDP each time): first to MONOGALACTOSYLDIACYLGLYCEROL (MGDG), then MGDG to DIGALACTOSYLDIACYLGLYCEROL (DGDG) — plant/plastid membrane glycolipids; the diagram's own starting glycerol phosphate is fed by either the Calvin cycle or glycolysis, consistent with a plastid-relevant pathway.", cn: "二酰甘油利用UDP-半乳糖连续进行两次半乳糖基化（每次释放UDP）：先生成单半乳糖基二酰甘油（MGDG），MGDG再生成双半乳糖基二酰甘油（DGDG）——这是植物/质体膜糖脂；该图自身的起始磷酸甘油可来自卡尔文循环或糖酵解，与质体相关途径相符。" },
    { cz: "kys. fosfatidová + CTP (-PPi) -> CDP-diglycerid", en: "Phosphatidic acid + CTP (releasing pyrophosphate, PPi) -> CDP-DIACYLGLYCEROL — the activated intermediate that branches to phosphatidylglycerol/cardiolipin on one side and phosphatidylinositol on the other.", cn: "磷脂酸+CTP（释放焦磷酸，PPi）->CDP-二酰甘油——这一活化中间体一方面分支生成磷脂酰甘油/心磷脂，另一方面生成磷脂酰肌醇。" },
    { cz: "CDP-diglycerid + L-α-glycerolfosfát (-CMP, -Pi) -> fosfatidylglycerol -> (+CDP-diglycerid, -CMP) -> difosfatidylglycerol", en: "CDP-diacylglycerol + L-alpha-glycerolphosphate (releasing CMP, then a further Pi) -> PHOSPHATIDYLGLYCEROL; phosphatidylglycerol + a second CDP-diacylglycerol (releasing CMP) -> DIPHOSPHATIDYLGLYCEROL (cardiolipin).", cn: "CDP-二酰甘油+L-α-磷酸甘油（释放CMP，随后再释放Pi）->磷脂酰甘油；磷脂酰甘油+第二分子CDP-二酰甘油（释放CMP）->二磷脂酰甘油（心磷脂）。" },
    { cz: "CDP-diglycerid + myoinositol (-CMP) -> fosfatidylinositol -> (nejmenované) 'následné produkty'", en: "CDP-diacylglycerol + myo-inositol (releasing CMP) -> PHOSPHATIDYLINOSITOL, which the book's own diagram marks as the precursor of further ('následné') products without naming or detailing what those are — a genuine gap in the book's own coverage, not filled in here with invented phosphoinositide names.", cn: "CDP-二酰甘油+肌醇（释放CMP）->磷脂酰肌醇，教材插图本身将其标注为若干「后续」产物的前体，但未命名或详述这些产物——这是教材自身覆盖的真实空白，本节点不擅自补充未提及的磷脂酰肌醇衍生物名称。" }
  ],
  terms: [
    { cz: "diglycerid (diacylglycerol)", en: "diacylglycerol", cn: "二酰甘油", def_en: "Product of phosphatidic acid dephosphorylation; the branch point for triglycerides, phosphatidylethanolamine/choline/serine, and the plant galactolipids MGDG/DGDG.", def_cn: "磷脂酸去磷酸化的产物；是三酰甘油、磷脂酰乙醇胺/胆碱/丝氨酸，以及植物半乳糖脂MGDG/DGDG的分支点。" },
    { cz: "CDP-diglycerid", en: "CDP-diacylglycerol", cn: "CDP-二酰甘油", def_en: "The CTP-activated form of phosphatidic acid (made releasing PPi); the branch point for phosphatidylglycerol, cardiolipin (diphosphatidylglycerol), and phosphatidylinositol.", def_cn: "磷脂酸经CTP活化的形式（生成时释放PPi）；是磷脂酰甘油、心磷脂（二磷脂酰甘油）和磷脂酰肌醇的分支点。" },
    { cz: "difosfatidylglycerol (kardiolipin)", en: "diphosphatidylglycerol (cardiolipin)", cn: "二磷脂酰甘油（心磷脂）", def_en: "Formed from phosphatidylglycerol + a second CDP-diacylglycerol, releasing CMP.", def_cn: "由磷脂酰甘油+第二分子CDP-二酰甘油反应生成，释放CMP。" },
    { cz: "MGDG/DGDG (mono-/digalaktosyldiacylglycerol)", en: "mono-/digalactosyldiacylglycerol (MGDG/DGDG)", cn: "单/双半乳糖基二酰甘油（MGDG/DGDG）", def_en: "Plant/plastid membrane glycolipids built from diacylglycerol by one or two successive UDP-galactose-dependent galactosylations.", def_cn: "植物/质体膜糖脂，由二酰甘油经一次或两次连续的依赖UDP-半乳糖的半乳糖基化反应生成。" },
    { cz: "fosfatidylinositol", en: "phosphatidylinositol", cn: "磷脂酰肌醇", def_en: "Formed from CDP-diacylglycerol + myo-inositol (releasing CMP); the book notes it is the precursor of unspecified 'subsequent products' without naming them.", def_cn: "由CDP-二酰甘油+肌醇反应生成（释放CMP）；教材指出它是若干未指明「后续产物」的前体，但未命名这些产物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which reaction converts phosphatidic acid into the activated intermediate used to build phosphatidylglycerol, cardiolipin, and phosphatidylinositol?",
      q_cn: "哪一个反应将磷脂酸转化为用于构建磷脂酰甘油、心磷脂和磷脂酰肌醇的活化中间体？",
      options: [
        "Dephosphorylation by a phosphatase to diacylglycerol",
        "Reaction with CTP to form CDP-diacylglycerol",
        "Galactosylation with UDP-galactose",
        "Base exchange with free serine"
      ],
      answer: 1,
      optionRefs: { 2: "8-2-3" },
      optionNotes: {
        0: { en: "This is the other branch of the same fork. Dephosphorylation gives diacylglycerol, and from there come the triglycerides, phosphatidylethanolamine, phosphatidylcholine and the galactolipids — but not cardiolipin or phosphatidylinositol.", cn: "这是同一个分叉的另一条分支。去磷酸得到 diacylglycerol，由它再生成 triglyceride、phosphatidylethanolamine、phosphatidylcholine 和 galactolipid——但生不出 cardiolipin 和 phosphatidylinositol。" },
        2: { en: "UDP-galactose acts on diacylglycerol, not on phosphatidic acid, and it acts twice in succession — first giving MGDG, then DGDG, the galactolipids of the plant thylakoid membrane.", cn: "UDP-galactose 作用的是 diacylglycerol，不是 phosphatidic acid，而且连续作用两次——先给出 MGDG，再给出 DGDG，也就是植物 thylakoid 膜的 galactolipid。" },
        3: { en: "Free serine exchanges head groups with phosphatidylcholine, releasing choline, to give phosphatidylserine. That is a base exchange on a finished phospholipid, not an activation of the branch-point intermediate.", cn: "游离的 serine 与 phosphatidylcholine 交换头基、放出 choline，生成 phosphatidylserine。那是在一个已完成的 phospholipid 上做碱基交换，不是把分支点中间体活化。" }
      },
      why_en: "The book's diagram shows phosphatidic acid + CTP (releasing PPi) forming CDP-diacylglycerol, which is the shared branch point for phosphatidylglycerol/cardiolipin and phosphatidylinositol.",
      why_cn: "教材插图显示磷脂酸+CTP（释放PPi）生成CDP-二酰甘油，它是磷脂酰甘油/心磷脂与磷脂酰肌醇共同的分支点。"
    },
    {
      type: "mcq",
      q_en: "How does the book's diagram show phosphatidylserine being made?",
      q_cn: "教材插图如何展示磷脂酰丝氨酸的生成？",
      options: ["Directly from diacylglycerol + CDP-serine", "From phosphatidylcholine + serine, releasing choline", "From CDP-diacylglycerol + serine, releasing CMP", "From phosphatidylethanolamine + serine, releasing ethanolamine"],
      answer: 1,
      optionNotes: {
        0: { en: "No CDP-serine appears anywhere in the diagram. CDP-ethanolamine and CDP-choline do, and each of those reacts with diacylglycerol, releasing CMP, to give PE and PC respectively.", cn: "图里从头到尾没有出现 CDP-serine。出现的是 CDP-ethanolamine 和 CDP-choline，它们各自与 diacylglycerol 反应、放出 CMP，分别生成 PE 和 PC。" },
        2: { en: "CDP-diacylglycerol does react with two partners, releasing CMP each time — L-α-glycerolphosphate, giving phosphatidylglycerol, and myo-inositol, giving phosphatidylinositol. Serine is not one of them.", cn: "CDP-diacylglycerol 确实与两个搭档反应、每次放出 CMP——与 L-α-glycerolphosphate 生成 phosphatidylglycerol，与 myo-inositol 生成 phosphatidylinositol。Serine 不在其中。" },
        3: { en: "The exchange the diagram draws starts from phosphatidylcholine and releases choline. Phosphatidylethanolamine is made by its own route, from diacylglycerol plus CDP-ethanolamine, and the diagram runs no arrow back out of it.", cn: "图上画的那个交换是从 phosphatidylcholine 出发、放出 choline 的。Phosphatidylethanolamine 有自己的路线，由 diacylglycerol 加 CDP-ethanolamine 生成，图上没有从它再引出的箭头。" }
      },
      why_en: "The diagram shows a base-exchange arrow from phosphatidylcholine, reacting with free serine and releasing choline, to give phosphatidylserine — not a CDP-serine route.",
      why_cn: "插图显示的是从磷脂酰胆碱出发的碱基交换箭头：与游离丝氨酸反应并释放胆碱，生成磷脂酰丝氨酸——而非经由CDP-丝氨酸的途径。"
    },
    {
      type: "short",
      q_en: "Describe the two-step route from diacylglycerol to digalactosyldiacylglycerol (DGDG), naming the sugar donor and the byproduct released at each step.",
      q_cn: "描述由二酰甘油生成双半乳糖基二酰甘油（DGDG）的两步途径，说出每一步的糖供体及释放的副产物。",
      accept: ["UDP-galaktosa", "UDP-galactose", "MGDG", "UDP", "单半乳糖基", "双半乳糖基"],
      answer_en: "Diacylglycerol + UDP-galactose -> monogalactosyldiacylglycerol (MGDG) + UDP; MGDG + a second UDP-galactose -> digalactosyldiacylglycerol (DGDG) + UDP.",
      answer_cn: "二酰甘油+UDP-半乳糖->单半乳糖基二酰甘油（MGDG）+UDP；MGDG+第二分子UDP-半乳糖->双半乳糖基二酰甘油（DGDG）+UDP。"
    }
  ],
  oral: {
    q_en: "Starting from diacylglycerol, trace every phospholipid and glycolipid product the book's diagram derives from it, naming the activating group and byproduct at each step.",
    q_cn: "请从二酰甘油出发，讲解教材插图由其衍生出的每一种磷脂和糖脂产物，说出每一步的活化基团和副产物。",
    model_en: "Once you have diacylglycerol, sitting right after phosphatidic acid loses its phosphate, the diagram fans out in several directions. Add a third acyl-CoA and kick out CoASH, and you complete a triglyceride. Add CDP-ethanolamine instead, releasing CMP, and you get phosphatidylethanolamine; add CDP-choline the same way and you get phosphatidylcholine — and phosphatidylcholine itself can trade its choline head for a free serine, releasing the choline, to become phosphatidylserine. On a separate branch, diacylglycerol can pick up a galactose from UDP-galactose, releasing UDP, to become monogalactosyldiacylglycerol, and then pick up a second galactose the same way to become digalactosyldiacylglycerol — these are the plant and plastid membrane glycolipids, and it fits that the diagram's own starting glycerol phosphate can come from either the Calvin cycle or glycolysis. Now, phosphatidic acid itself has its own separate fate: react it with CTP, kick out pyrophosphate, and you get CDP-diacylglycerol, an activated intermediate in its own right. That branches two more ways: react it with glycerol phosphate, lose CMP and then a phosphate, and you get phosphatidylglycerol, which can go on to react with a second CDP-diacylglycerol, lose CMP again, and become cardiolipin. Or react CDP-diacylglycerol with myo-inositol, lose CMP, and you get phosphatidylinositol — which the book flags as the starting point for further products, though it doesn't say what those are.",
    checklist: [
      "Started from diacylglycerol and named the triglyceride, phosphatidylethanolamine, and phosphatidylcholine branches",
      "Described the phosphatidylcholine-to-phosphatidylserine base exchange",
      "Described the two-step MGDG/DGDG galactosylation and its plant/plastid relevance",
      "Named CDP-diacylglycerol as phosphatidic acid's CTP-activated form",
      "Traced CDP-diacylglycerol to phosphatidylglycerol, then cardiolipin",
      "Traced CDP-diacylglycerol to phosphatidylinositol and noted the book doesn't name its further products"
    ]
  }
},

{
  id: "8-3-7",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Odvozené lipidy — tři fáze biosyntézy terpenoidů/cholesterolu a fáze A: acetyl-CoA až kyselina mevalonová přes HMG-CoA",
  enTitle: "Derived lipids — the three-phase framework for terpenoid/cholesterol biosynthesis, and Phase A: acetyl-CoA to mevalonic acid via HMG-CoA",
  cnTitle: "衍生脂质——萜类/胆固醇生物合成的三阶段框架，及A阶段：乙酰辅酶A经HMG-CoA生成甲羟戊酸",
  pages: [191, 192],
  coverage: "full",
  coverageNote: "The 'Odvozené lipidy' subheading, its opening sentence (terpenoids including cholesterol), the three-phase (A/B/C) framework line, and the book's own confidence statement (phase A well studied, phase B's basics known, phase C often still unexplored) read directly from the bottom of p.191, together with the phase-A reaction diagram (2x acetyl-CoA -> acetoacetyl-CoA; acetoacetyl-CoA + acetyl-CoA + H2O -> HMG-CoA; HMG-CoA + 2 NADPH(H+) -> mevalonic acid, via HMG-CoA reductase) continuing to the very top of p.192, where mevalonic acid is redrawn as the shared starting point for the phase-B diagram covered in node 8-3-8. MECHANISM DISCREPANCY flagged explicitly, verified by zoom (ruled out misreading 'thiolasa' as something else — no enzyme name is given at all for this step): the book's own diagram labels the very first condensation (2x acetyl-CoA -> acetoacetyl-CoA) as proceeding 'via malonyl-SCoA', with a CO2 shown released alongside CoASH — i.e. implying the same carboxylation/decarboxylation chemistry used in fatty acid synthesis (node 8-3-2). This conflicts with the mechanism universally given in general biochemistry references for this exact step of the mevalonate pathway, where acetoacetyl-CoA formation is a simple thiolase-catalyzed Claisen condensation of two acetyl-CoA molecules releasing only free CoASH (no CO2, no malonyl-CoA intermediate at all). Reported here exactly as the book's own diagram states it, with this discrepancy flagged rather than silently corrected to the textbook-standard mechanism, per the project's standing instruction on book-internal/consensus contradictions. The subsequent two reactions (acetoacetyl-CoA + acetyl-CoA + H2O -> HMG-CoA + CoASH; HMG-CoA + 2 NADPH(H+) -> mevalonic acid + 2 NADP+ + CoASH via HMG-CoA reductase) match the standard mechanism exactly and are not in question. Also noted: the book's diagram does not name an enzyme for the middle (HMG-CoA-forming) reaction, unlike the reactions flanking it, both of which ARE named (or, in the first case, at least given a mechanistic label).",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "HMG-CoA reductase commits 6-carbon to 30+ carbon. Cells tightly control it to avoid wasting resources on molecules not needed now.", cn: "HMG-CoA还原酶将6碳承诺给30多碳。细胞严格控制以避免浪费资源在现在不需要的分子上。" },
  summary: {
    en: "The book turns next to 'derived lipids', which here means primarily terpenoids, including cholesterol. Their biosynthesis can be formally divided into three phases: Phase A, acetyl-CoA to branched mevalonate; Phase B, mevalonate to an unsaturated hydrocarbon; and Phase C, that hydrocarbon to a functional terpenoid. The book is candid about how well-understood each phase is: Phase A is very well researched, Phase B's basic characteristics are known, and Phase C is, in a good number of cases, still biochemically unexplored. Phase A itself: three units of acetyl-CoA (3x2 carbons) condense to form mevalonic acid (3-methyl-3,5-dihydroxyvaleric acid, 1x6 carbons), via two intermediates. First, two acetyl-CoA molecules condense to acetoacetyl-CoA — the book's own diagram labels this step as proceeding 'via malonyl-SCoA', releasing CO2 and CoASH, which is a notable departure from the simple thiolase-catalyzed condensation (no CO2, no malonyl-CoA) that standard biochemistry references give for this exact reaction; this discrepancy is flagged rather than silently corrected. Second, acetoacetyl-CoA condenses with a third acetyl-CoA and water, releasing CoASH, to give beta-hydroxy-beta-methylglutaryl-CoA (HMG-CoA) — the book's diagram does not name an enzyme for this step. Third and finally, HMG-CoA reductase reduces HMG-CoA using 2 NADPH(H+), releasing 2 NADP+ and CoASH, to give mevalonic acid — the endpoint of Phase A and the starting point of Phase B (node 8-3-8).",
    cn: "教材接下来转向「衍生脂质」，此处主要指萜类化合物，包括胆固醇。其生物合成在形式上可分为三个阶段：A阶段，乙酰辅酶A到支链甲羟戊酸；B阶段，甲羟戊酸到不饱和烃；C阶段，该烃到功能性萜类化合物。教材坦率地说明了各阶段的研究程度：A阶段研究得非常透彻，B阶段的基本特征已知，而C阶段在相当多的情况下目前仍未被生物化学阐明。A阶段本身：三个乙酰辅酶A单位（3x2个碳）经两个中间体缩合生成甲羟戊酸（3-甲基-3,5-二羟基戊酸，1x6个碳）。首先，两分子乙酰辅酶A缩合生成乙酰乙酰辅酶A——教材自己的插图将此步骤标注为「经由丙二酰辅酶A」进行，释放CO2和CoASH，这与标准生物化学参考资料对这一确切反应给出的简单硫解酶催化缩合（不涉及CO2，也不经丙二酰辅酶A）有明显出入；此处如实标注这一差异，而非默默按标准机制更正。其次，乙酰乙酰辅酶A与第三分子乙酰辅酶A及水缩合，释放CoASH，生成β-羟基-β-甲基戊二酰辅酶A（HMG-CoA）——教材插图未为此步骤命名酶。第三步，也是最后一步，HMG-CoA还原酶利用2分子NADPH(H+)将HMG-CoA还原，释放2分子NADP+和CoASH，生成甲羟戊酸——这是A阶段的终点，也是B阶段（节点8-3-8）的起点。"
  },
  points: [
    { cz: "'odvozené lipidy' zde = terpenoidy včetně cholesterolu", en: "'Derived lipids' here means primarily TERPENOIDS, including cholesterol.", cn: "此处「衍生脂质」主要指萜类化合物，包括胆固醇。" },
    { cz: "3 fáze: A (acetyl-CoA -> mevalonát), B (-> nenasycený uhlovodík), C (-> funkční terpenoid)", en: "Biosynthesis is formally divided into three phases: PHASE A (acetyl-CoA to branched mevalonate), PHASE B (mevalonate to an unsaturated hydrocarbon), PHASE C (that hydrocarbon to a functional terpenoid).", cn: "生物合成在形式上分为三个阶段：A阶段（乙酰辅酶A到支链甲羟戊酸）、B阶段（甲羟戊酸到不饱和烃）、C阶段（该烃到功能性萜类化合物）。" },
    { cz: "stav poznání: fáze A velmi dobře prozkoumána, B základně známa, C často neprozkoumána", en: "The book's own confidence statement: Phase A is very well researched; Phase B's basic characteristics are known; Phase C is, in a good number of cases, still biochemically UNEXPLORED.", cn: "教材自己对研究现状的说明：A阶段研究得非常透彻；B阶段的基本特征已知；C阶段在相当多的情况下目前仍未被生物化学阐明。" },
    { cz: "fáze A přehled: 3x acetyl-CoA (3x2C) -> kyselina mevalonová (3-methyl-3,5-dihydroxyvalerová, 1x6C)", en: "Phase A overview: three units of acetyl-CoA (3x2 carbons) condense to form MEVALONIC ACID (3-methyl-3,5-dihydroxyvaleric acid, 1x6 carbons), via two intermediates.", cn: "A阶段概览：三个乙酰辅酶A单位（3x2个碳）经两个中间体缩合生成甲羟戊酸（3-甲基-3,5-二羟基戊酸，1x6个碳）。" },
    { cz: "reakce 1: 2 acetyl-CoA -> acetoacetyl-CoA, diagram: 'via malonyl-SCoA', +CO2/+CoASH uvolněno — NESHODA se standardní biochemií", en: "Reaction 1 as the book's diagram draws it: 2 acetyl-CoA -> acetoacetyl-CoA, labeled 'via malonyl-SCoA' with CO2 and CoASH released. DISCREPANCY: standard biochemistry references give this exact step as a simple THIOLASE-catalyzed condensation releasing only CoASH (no CO2, no malonyl-CoA at all) — flagged here as a genuine departure from the textbook-standard mechanism, not silently corrected.", cn: "反应1（按教材插图所绘）：2分子乙酰辅酶A->乙酰乙酰辅酶A，标注为「经由丙二酰辅酶A」，释放CO2和CoASH。差异提示：标准生物化学参考资料对这一确切步骤给出的是简单的硫解酶催化缩合，仅释放CoASH（不涉及CO2，也不经丙二酰辅酶A）——此处标明这是与教材标准机制的真实出入，而非默默更正。" },
    { cz: "reakce 2: acetoacetyl-CoA + acetyl-CoA + H2O -> HMG-CoA + CoASH (enzym v diagramu nepojmenován)", en: "Reaction 2: acetoacetyl-CoA + a third acetyl-CoA + H2O -> BETA-HYDROXY-BETA-METHYLGLUTARYL-CoA (HMG-CoA) + CoASH; the book's diagram does not name an enzyme for this step (standard name elsewhere: HMG-CoA synthase).", cn: "反应2：乙酰乙酰辅酶A+第三分子乙酰辅酶A+H2O->β-羟基-β-甲基戊二酰辅酶A（HMG-CoA）+CoASH；教材插图未为此步骤命名酶（其他文献中的标准名称为HMG-CoA合酶）。" },
    { cz: "reakce 3: HMG-CoA + 2 NADPH(H+) -> kys. mevalonová + 2 NADP+ + CoASH, HMG-CoA reduktasa", en: "Reaction 3: HMG-CoA REDUCTASE reduces HMG-CoA using 2 NADPH(H+), releasing 2 NADP+ and CoASH, giving MEVALONIC ACID — the endpoint of Phase A.", cn: "反应3：HMG-CoA还原酶利用2分子NADPH(H+)将HMG-CoA还原，释放2分子NADP+和CoASH，生成甲羟戊酸——A阶段的终点。" },
    { cz: "diagram cross-ref: 'β-oxidace mast.kyselin' šipka k acetoacetyl-CoA", en: "The diagram carries a small side-note arrow, 'beta-oxidace mast.kyselin' (fatty acid beta-oxidation), pointing at acetoacetyl-CoA — a cross-reference flagging that this same molecule is also an intermediate/product of fatty acid beta-oxidation (ch. 8.4.4), not a claim that beta-oxidation directly feeds this biosynthetic pathway.", cn: "插图带有一个小的侧注箭头「β-oxidace mast.kyselin」（脂肪酸β-氧化），指向乙酰乙酰辅酶A——这是一个交叉引用，标注该分子同时也是脂肪酸β-氧化（第8.4.4节）的中间体/产物，并非声称β-氧化直接为该生物合成途径供料。" }
  ],
  terms: [
    { cz: "kyselina mevalonová", en: "mevalonic acid", cn: "甲羟戊酸", def_en: "3-methyl-3,5-dihydroxyvaleric acid; the 6-carbon end product of Phase A, formed from three acetyl-CoA units via acetoacetyl-CoA and HMG-CoA.", def_cn: "3-甲基-3,5-二羟基戊酸；A阶段的六碳终产物，由三个乙酰辅酶A单位经乙酰乙酰辅酶A和HMG-CoA生成。" },
    { cz: "acetoacetyl-CoA", en: "acetoacetyl-CoA", cn: "乙酰乙酰辅酶A", def_en: "Four-carbon condensation product of two acetyl-CoA units; the book's own diagram (unusually) shows this step proceeding via malonyl-CoA with CO2 release, contrary to the simple thiolase mechanism given in standard references.", def_cn: "两个乙酰辅酶A单位的四碳缩合产物；教材自己的插图（异乎寻常地）显示此步骤经由丙二酰辅酶A并释放CO2，这与标准参考资料所述的简单硫解酶机制不同。" },
    { cz: "HMG-CoA (β-hydroxy-β-methylglutaryl-CoA)", en: "HMG-CoA (beta-hydroxy-beta-methylglutaryl-CoA)", cn: "β-羟基-β-甲基戊二酰辅酶A（HMG-CoA）", def_en: "Intermediate formed from acetoacetyl-CoA + acetyl-CoA + H2O; substrate of HMG-CoA reductase, which reduces it to mevalonic acid.", def_cn: "由乙酰乙酰辅酶A+乙酰辅酶A+H2O生成的中间体；是HMG-CoA还原酶的底物，该酶将其还原为甲羟戊酸。" },
    { cz: "HMG-CoA reduktasa", en: "HMG-CoA reductase", cn: "HMG-CoA还原酶", def_en: "NADPH-dependent (2x) enzyme that reduces HMG-CoA to mevalonic acid, releasing CoASH; the only enzyme explicitly named among Phase A's three reactions in the book's diagram.", def_cn: "依赖NADPH（2分子）的酶，将HMG-CoA还原为甲羟戊酸，释放CoASH；是教材插图中A阶段三个反应里唯一被明确命名的酶。" },
    { cz: "fáze A/B/C biosyntézy terpenoidů", en: "Phases A/B/C of terpenoid biosynthesis", cn: "萜类生物合成的A/B/C阶段", def_en: "The book's own formal division: A = acetyl-CoA to branched mevalonate (well studied), B = to an unsaturated hydrocarbon (basics known), C = to a functional terpenoid (often still unexplored).", def_cn: "教材自己的正式分期：A=乙酰辅酶A到支链甲羟戊酸（研究透彻）；B=到不饱和烃（基本特征已知）；C=到功能性萜类化合物（常仍未被阐明）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's own assessment, which phase of terpenoid/cholesterol biosynthesis is described as, in many cases, still not biochemically explored?",
      q_cn: "根据教材自己的评估，萜类/胆固醇生物合成的哪一阶段在许多情况下仍未被生物化学阐明？",
      options: ["Phase A", "Phase B", "Phase C", "All three equally"],
      answer: 2,
      optionRefs: { 1: "8-3-8" },
      optionNotes: {
        0: { en: "Phase A, acetyl-CoA to mevalonate, is the one the book calls very well researched — three reactions with every intermediate named, ending at HMG-CoA reductase.", cn: "A 相（acetyl-CoA 到 mevalonate）正是教材说研究得非常透彻的那一相——三个反应，每个中间体都有名字，止于 HMG-CoA reductase。" },
        1: { en: "Phase B's basic characteristics are known: mevalonate is activated by three kinases to IPP, and the C5 units are then condensed up to squalene and to phytoene.", cn: "B 相的基本轮廓是清楚的：mevalonate 由三个 kinase 活化成 IPP，然后这些 C5 单元逐步缩合，直到 squalene 和 phytoene。" },
        3: { en: "The book grades the three differently, and that grading is the whole point of the sentence: A very well researched, B known in outline, C in a good number of cases still unexplored.", cn: "教材对三相的评价是不同的，而这个区别正是那句话的要点：A 研究得非常透彻，B 知道大致轮廓，C 在相当多的情形下仍未被研究清楚。" }
      },
      why_en: "The book states Phase A is very well researched, Phase B's basics are known, but Phase C is, in a good number of cases, still biochemically unexplored.",
      why_cn: "教材指出A阶段研究得非常透彻，B阶段的基本特征已知，但C阶段在相当多的情况下目前仍未被生物化学阐明。"
    },
    {
      type: "mcq",
      q_en: "How does the book's own diagram describe the first condensation of the mevalonate pathway (2 acetyl-CoA -> acetoacetyl-CoA), and how does this compare to the mechanism given in standard biochemistry references?",
      q_cn: "教材自己的插图如何描述甲羟戊酸途径的第一次缩合（2乙酰辅酶A->乙酰乙酰辅酶A）？这与标准生物化学参考资料所给出的机制相比如何？",
      options: [
        "Simple thiolase condensation releasing only CoASH, which is exactly what standard references give for this step and what the book's own diagram prints",
        "Via malonyl-CoA with CO2 release — NOT matching the simple thiolase mechanism standard references give for this step",
        "Via an ATP-dependent kinase releasing ADP and Pi, and standard references give the same mechanism here",
        "Via an NADPH-dependent reduction releasing NADP+, in agreement with what standard references give"
      ],
      answer: 1,
      optionRefs: { 2: "8-3-8" },
      optionNotes: {
        0: { en: "The first half describes what standard references give; the second half is where it fails. The book's diagram does NOT print that — it labels the step via malonyl-SCoA and shows CO2 leaving, and the disagreement between the two is what this question is about.", cn: "前半句说的是标准教科书的写法；后半句才是错的地方。教材的图并不是那么画的——它把这一步标为经由 malonyl-SCoA，并画出 CO2 离开，而两者之间的分歧正是这道题要问的。" },
        2: { en: "No kinase and no ATP appear at this step in either account. ATP does enter the terpenoid pathway, but later, at the start of Phase B, where three successive kinases activate mevalonic acid.", cn: "无论按哪一种说法，这一步都没有 kinase、也没有 ATP。ATP 确实会进入 terpenoid 通路，但要晚到 B 相开头——那里有三个连续的 kinase 活化 mevalonic acid。" },
        3: { en: "NADPH is used in this pathway, but two steps further on: HMG-CoA reductase spends 2 NADPH(H+) converting HMG-CoA into mevalonic acid, which is the end of Phase A.", cn: "NADPH 在这条通路里确实要用，但是在再往后两步：HMG-CoA reductase 消耗 2 NADPH(H+) 把 HMG-CoA 变成 mevalonic acid，那是 A 相的终点。" }
      },
      why_en: "The book's diagram explicitly labels this condensation 'via malonyl-SCoA' with CO2 released, which departs from the simple thiolase-catalyzed condensation (no CO2, no malonyl-CoA) given for this exact step in standard biochemistry references — a discrepancy this node flags rather than silently correcting.",
      why_cn: "教材插图明确将此缩合标注为「经由丙二酰辅酶A」并释放CO2，这与标准生物化学参考资料对这一确切步骤给出的简单硫解酶催化缩合（不涉及CO2，也不经丙二酰辅酶A）不同——本节点如实标注这一差异，而非默默更正。"
    },
    {
      type: "short",
      q_en: "List, in order, the three named/structural intermediates of mevalonate-pathway Phase A starting from acetyl-CoA, and name the enzyme that catalyzes the final step.",
      q_cn: "按顺序列出甲羟戊酸途径A阶段从乙酰辅酶A开始的三个（具名/结构）中间体，并说出催化最后一步的酶。",
      accept: ["acetoacetyl-CoA", "HMG-CoA", "mevalonic acid", "HMG-CoA reductase", "乙酰乙酰辅酶A", "甲羟戊酸", "还原酶"],
      answer_en: "Acetyl-CoA -> acetoacetyl-CoA -> HMG-CoA (beta-hydroxy-beta-methylglutaryl-CoA) -> mevalonic acid; the final step is catalyzed by HMG-CoA reductase.",
      answer_cn: "乙酰辅酶A->乙酰乙酰辅酶A->HMG-CoA（β-羟基-β-甲基戊二酰辅酶A）->甲羟戊酸；最后一步由HMG-CoA还原酶催化。"
    }
  ],
  oral: {
    q_en: "Describe the book's three-phase framework for terpenoid/cholesterol biosynthesis, then walk through Phase A in detail, flagging anything about the first reaction that seems inconsistent with what you know from general biochemistry.",
    q_cn: "请描述教材关于萜类/胆固醇生物合成的三阶段框架，然后详细讲解A阶段，并指出第一个反应中与你所了解的普通生物化学知识不一致之处。",
    model_en: "The book treats terpenoid and cholesterol biosynthesis as three formal phases. Phase A takes acetyl-CoA all the way to a branched compound called mevalonate, and it's the best-understood of the three. Phase B takes mevalonate onward to an unsaturated hydrocarbon, and its basics are known. Phase C turns that hydrocarbon into an actual functional terpenoid, and the book is upfront that, in plenty of cases, this last phase still isn't biochemically worked out. Inside Phase A itself, three acetyl-CoA units — six carbons total — end up condensed into one six-carbon product, mevalonic acid. The path there goes through two intermediates. First, two acetyl-CoA molecules come together to form acetoacetyl-CoA — and here's where I'd flag something: this book's own diagram shows that step going 'via malonyl-CoA', with a CO2 released, essentially borrowing the same carboxylation chemistry used in fatty acid synthesis. That's not what I'd expect from standard biochemistry, where this exact step is normally a simple thiolase reaction — just two acetyl-CoAs joining, kicking out one CoASH, no CO2 and no malonyl-CoA involved at all. I'll report the book's version but flag that discrepancy rather than pretend it isn't there. From acetoacetyl-CoA, a third acetyl-CoA condenses in with water, releasing another CoASH, giving HMG-CoA — the book doesn't actually name an enzyme for this specific step. And finally, HMG-CoA reductase — which the book does name, and which is NADPH-dependent, using two molecules of it — reduces HMG-CoA down to mevalonic acid, closing out Phase A.",
    checklist: [
      "Named all three phases (A/B/C) and their endpoints",
      "Gave the book's own confidence statement about each phase",
      "Named acetoacetyl-CoA, HMG-CoA, and mevalonic acid in order",
      "Named HMG-CoA reductase and its NADPH requirement (2x)",
      "Flagged the malonyl-CoA/CO2 discrepancy in the first (thiolase-expected) step rather than presenting it as uncontroversial",
      "Noted the book does not name an enzyme for the HMG-CoA-forming step"
    ]
  }
},

{
  id: "8-3-8",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Odvozené lipidy — fáze B: aktivace mevalonátu na isopentenylpyrofosfát a kondenzace na geranyl-, farnesylpyrofosfát, skvalen a geranylgeranylpyrofosfát/fytoen",
  enTitle: "Derived lipids — Phase B: activation of mevalonate to isopentenyl pyrophosphate and condensation to geranyl-/farnesyl-pyrophosphate, squalene, and geranylgeranyl-pyrophosphate/phytoene",
  cnTitle: "衍生脂质——B阶段：甲羟戊酸活化为异戊烯基焦磷酸，并缩合生成香叶基/法尼基焦磷酸、角鲨烯，以及香叶基香叶基焦磷酸/八氢番茄红素",
  pages: [192],
  coverage: "full",
  coverageNote: "The full diagram occupying p.192 read directly and re-zoomed section by section: mevalonic acid + 3 ATP --3 kinasy--> 3-fosfo-5-pyrofosfomevalonová kyselina + 3 ADP; loss of Pi and CO2 -> isopentenylpyrofosfát (IPP); IPP <-isomerasa-> dimethylallylpyrofosfát (DMAPP); IPP+DMAPP --kondenzace hlavou k ocasu--> geranylpyrofosfát (GPP, monoterpeny); GPP+IPP --hlavou k ocasu--> farnesylpyrofosfát (FPP, seskviterpeny); FPP+FPP --kondenzace hlavou k hlavě--> skvalen (triterpeny), with the book's own 'střed symetrie molekuly' (center of symmetry) annotation verified against the drawn structure's actual mirror symmetry; separately, GPP+IPP --hlavou k ocasu--> geranylgeranylpyrofosfát (GGPP, diterpeny); GGPP+GGPP --hlavou k hlavě--> fytoen (tetraterpeny). Every structure, every stoichiometric label (3 ATP/3 ADP, Pi, CO2), and every 'hlavou k ocasu' vs. 'hlavou k hlavě' annotation verified by zoomed re-read. CROSS-REFERENCE NOTE: phytoene is the entry point of the carotenoid family whose LATER biosynthetic steps (down to beta-carotene) and whose oxidative cleavage to retinol were already covered on p.187 — but that content belongs to section 8.2, preceding this node's own section 8.3, and is not repeated or re-covered here, only cross-referenced. SCOPE BOUNDARY: this node's coverage ends at squalene/phytoene, i.e. at the end of Phase B and the end of the assigned page range (p.192); Phase C (squalene's cyclization onward to lanosterol/cholesterol, the 'functional terpenoid' endpoint promised in node 8-3-7) is NOT covered by any node in this range because it falls on p.193, outside pp.187-192 — this range should not be treated as including cholesterol's own ring-closure chemistry. MINOR NOTE: unlike its careful cofactor-labeling elsewhere in this chapter (e.g. the mevalonate-pathway reactions in node 8-3-7), the book's own diagram does not show NADPH as a cofactor for the two head-to-head (reductive) condensations forming squalene or phytoene — reported as a simplification in the book's own figure, not supplemented here with an uncited NADPH claim.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Terpenoid synthesis builds chains head-to-tail. Final step is head-to-head, creating symmetry. Symmetry solves a computational problem.", cn: "萜类合成逐个缝合链。最后是头对头产生对称性。对称性解决计算问题。" },
  summary: {
    en: "Phase B begins where Phase A (node 8-3-7) left off, at mevalonic acid. Three successive kinases phosphorylate it using 3 ATP (releasing 3 ADP), giving 3-phospho-5-pyrophosphomevalonic acid; this then loses both Pi and CO2 in a decarboxylation, yielding ISOPENTENYL PYROPHOSPHATE (IPP) — the first activated five-carbon 'isoprene' unit. An isomerase interconverts IPP with its isomer, DIMETHYLALLYL PYROPHOSPHATE (DMAPP). From here, chain elongation proceeds by successive 'head-to-tail' condensations: IPP + DMAPP gives the ten-carbon GERANYL PYROPHOSPHATE (GPP, the monoterpene precursor); GPP + another IPP gives the fifteen-carbon FARNESYL PYROPHOSPHATE (FPP, the sesquiterpene precursor). Two FPP molecules then join by a 'head-to-head' condensation to give the thirty-carbon SQUALENE (triterpene) — the book marks the resulting symmetric structure's own center of symmetry, and squalene is the precursor of cholesterol via the still-to-come Phase C (outside this node's page range). Separately, GPP can instead react with another IPP head-to-tail to give the twenty-carbon GERANYLGERANYL PYROPHOSPHATE (GGPP, diterpene precursor), and two GGPP molecules then join head-to-head to give the forty-carbon PHYTOENE (tetraterpene) — the entry point of the carotenoid family already introduced (as beta-carotene and its cleavage to retinol) on p.187, in the preceding section 8.2.",
    cn: "B阶段承接A阶段（节点8-3-7）的终点——甲羟戊酸。三个连续的激酶利用3分子ATP（释放3分子ADP）将其磷酸化，生成3-磷酸-5-焦磷酸甲羟戊酸；该化合物随后经脱羧同时失去Pi和CO2，生成异戊烯基焦磷酸（IPP）——第一个活化的五碳「异戊二烯」单位。一种异构酶使IPP与其异构体二甲丙烯基焦磷酸（DMAPP）相互转化。从这里开始，链的延长通过连续的「头对尾」缩合进行：IPP+DMAPP生成十碳的香叶基焦磷酸（GPP，单萜前体）；GPP+另一分子IPP生成十五碳的法尼基焦磷酸（FPP，倍半萜前体）。随后两分子FPP通过「头对头」缩合生成三十碳的角鲨烯（三萜）——教材标注了所生成对称结构自身的对称中心，角鲨烯经尚未讲到的C阶段（超出本节点页码范围）成为胆固醇的前体。另一方面，GPP也可与另一分子IPP以头对尾方式反应，生成二十碳的香叶基香叶基焦磷酸（GGPP，二萜前体），随后两分子GGPP通过头对头缩合生成四十碳的八氢番茄红素（四萜）——这正是先前在第187页（属于前面的第8.2节）已经介绍过的类胡萝卜素家族（β-胡萝卜素及其裂解为视黄醇）的起点。"
  },
  points: [
    { cz: "kys. mevalonová + 3 ATP -> 3-fosfo-5-pyrofosfomevalonová kyselina + 3 ADP, 3 kinasy", en: "Mevalonic acid + 3 ATP, via 3 successive KINASES, -> 3-PHOSPHO-5-PYROPHOSPHOMEVALONIC ACID + 3 ADP.", cn: "甲羟戊酸+3分子ATP，经3个连续的激酶催化，->3-磷酸-5-焦磷酸甲羟戊酸+3分子ADP。" },
    { cz: "-Pi, -CO2 (dekarboxylace) -> isopentenylpyrofosfát (IPP)", en: "Loss of both Pi and CO2 (a decarboxylation) converts this compound to ISOPENTENYL PYROPHOSPHATE (IPP) — the first activated five-carbon isoprene unit.", cn: "同时失去Pi和CO2（脱羧反应），将该化合物转化为异戊烯基焦磷酸（IPP）——第一个活化的五碳异戊二烯单位。" },
    { cz: "IPP <-isomerasa-> dimethylallylpyrofosfát (DMAPP)", en: "An ISOMERASE interconverts IPP with its structural isomer, DIMETHYLALLYL PYROPHOSPHATE (DMAPP).", cn: "一种异构酶使IPP与其结构异构体二甲丙烯基焦磷酸（DMAPP）相互转化。" },
    { cz: "IPP + DMAPP -> geranylpyrofosfát (GPP, monoterpeny), kondenzace hlavou k ocasu", en: "IPP + DMAPP condense HEAD-TO-TAIL to give the ten-carbon GERANYL PYROPHOSPHATE (GPP), the monoterpene precursor.", cn: "IPP+DMAPP以头对尾方式缩合，生成十碳的香叶基焦磷酸（GPP），即单萜前体。" },
    { cz: "GPP + IPP -> farnesylpyrofosfát (FPP, seskviterpeny), hlavou k ocasu", en: "GPP + another IPP condense HEAD-TO-TAIL to give the fifteen-carbon FARNESYL PYROPHOSPHATE (FPP), the sesquiterpene precursor.", cn: "GPP+另一分子IPP以头对尾方式缩合，生成十五碳的法尼基焦磷酸（FPP），即倍半萜前体。" },
    { cz: "FPP + FPP -> skvalen (triterpeny), kondenzace hlavou k hlavě, střed symetrie molekuly", en: "Two FPP molecules condense HEAD-TO-HEAD to give the thirty-carbon SQUALENE (triterpene); the book marks the resulting structure's own center of symmetry. Squalene is cholesterol's precursor via Phase C, which is outside this node's page range.", cn: "两分子FPP以头对头方式缩合，生成三十碳的角鲨烯（三萜）；教材标注了所生成结构自身的对称中心。角鲨烯经超出本节点页码范围的C阶段成为胆固醇的前体。" },
    { cz: "GPP + IPP -> geranylgeranylpyrofosfát (GGPP, diterpeny), hlavou k ocasu — samostatná větev", en: "SEPARATELY, GPP + another IPP condense HEAD-TO-TAIL to give the twenty-carbon GERANYLGERANYL PYROPHOSPHATE (GGPP), the diterpene precursor — a distinct branch from the squalene route.", cn: "另一方面，GPP+另一分子IPP以头对尾方式缩合，生成二十碳的香叶基香叶基焦磷酸（GGPP），即二萜前体——这是与角鲨烯路线不同的独立分支。" },
    { cz: "FLAG: uhlíková bilance GPP -> GGPP nevychází (obr. str. 192)", en: "FLAGGED, confirmed against the scan of p.192 on 2026-08-14: the book's own figure runs a right-hand column GPP -> GGPP -> phytoene, making GERANYLGERANYL-PP the product of ONE head-to-tail condensation from geranyl-PP. That cannot balance — C10 + C5 = C15, not C20 — and standard references make GGPP the product of farnesyl-PP + IPP, one step further along. Reproduced here as printed rather than silently corrected. In an exam give GGPP as farnesyl-PP + IPP; if asked to reproduce THIS figure, reproduce it and say what does not add up. UPDATE 2026-08-14, and it strengthens the flag: the book CONTRADICTS ITSELF here. Its own p.183 — node 8-2-4-1 — already has farnesyl-PP + IPP giving the C20 diterpene, correctly. Only p.192's figure disagrees, so this is one bad figure rather than a convention the book follows. Lehninger's own pathway (A p.792) runs C10 to C15 to C20, one IPP per step.", cn: "**已标记，2026-08-14 对照 p.192 扫描件确认**：教材图的右侧一列是 GPP → GGPP → phytoene，等于把 GERANYLGERANYL-PP 当成 geranyl-PP **一步**头尾缩合的产物。这笔账合不上——C10 + C5 = C15，不是 C20——标准文献里 GGPP 是 farnesyl-PP + IPP 的产物，要再往后一步。这里按书上原样保留，不做无声更正。考试时 GGPP 请答 farnesyl-PP + IPP；若要求复现**这张图**，就照画，并指出哪里对不上。" },
    { cz: "GGPP + GGPP -> fytoen (tetraterpeny), hlavou k hlavě = vstup do karotenoidů (viz str. 187, kap. 8.2)", en: "Two GGPP molecules condense HEAD-TO-HEAD to give the forty-carbon PHYTOENE (tetraterpene) — the entry point of the carotenoid family whose later steps (to beta-carotene) and cleavage to retinol were already covered on p.187, in the preceding section 8.2 (cross-referenced here, not re-covered).", cn: "两分子GGPP以头对头方式缩合，生成四十碳的八氢番茄红素（四萜）——这正是类胡萝卜素家族的起点，其后续步骤（生成β-胡萝卜素）及裂解为视黄醇的内容已在第187页（属于前面的第8.2节）讲过（此处仅作交叉引用，不重复讲解）。" },
    { cz: "rozsah tohoto uzlu končí u skvalenu/fytoenu; fáze C (na str. 193) mimo rozsah", en: "SCOPE BOUNDARY: this node's coverage ends at squalene/phytoene, the end of Phase B; Phase C (squalene's cyclization onward to lanosterol/cholesterol) is on p.193, outside the assigned pp.187-192 range, and is not covered by any node here.", cn: "范围边界：本节点的覆盖止于角鲨烯/八氢番茄红素，即B阶段的终点；C阶段（角鲨烯经环化生成羊毛甾醇/胆固醇）位于第193页，超出本次分配的187-192页范围，本处未予覆盖。" }
  ],
  terms: [
    { cz: "isopentenylpyrofosfát (IPP)", en: "isopentenyl pyrophosphate (IPP)", cn: "异戊烯基焦磷酸（IPP）", def_en: "The first activated five-carbon isoprene unit, formed from mevalonate by three kinase-catalyzed phosphorylations followed by loss of Pi and CO2.", def_cn: "第一个活化的五碳异戊二烯单位，由甲羟戊酸经三次激酶催化的磷酸化，随后失去Pi和CO2而生成。" },
    { cz: "dimethylallylpyrofosfát (DMAPP)", en: "dimethylallyl pyrophosphate (DMAPP)", cn: "二甲丙烯基焦磷酸（DMAPP）", def_en: "Structural isomer of IPP, interconverted by an isomerase; condenses with IPP head-to-tail to begin chain elongation.", def_cn: "IPP的结构异构体，由一种异构酶使二者相互转化；与IPP以头对尾方式缩合，开始链的延长。" },
    { cz: "geranylpyrofosfát (GPP)", en: "geranyl pyrophosphate (GPP)", cn: "香叶基焦磷酸（GPP）", def_en: "The ten-carbon head-to-tail condensation product of IPP + DMAPP; the monoterpene precursor.", def_cn: "IPP+DMAPP头对尾缩合生成的十碳产物；单萜前体。" },
    { cz: "farnesylpyrofosfát (FPP)", en: "farnesyl pyrophosphate (FPP)", cn: "法尼基焦磷酸（FPP）", def_en: "The fifteen-carbon head-to-tail condensation product of GPP + IPP; the sesquiterpene precursor. Two molecules condense head-to-head to form squalene.", def_cn: "GPP+IPP头对尾缩合生成的十五碳产物；倍半萜前体。两分子经头对头缩合生成角鲨烯。" },
    { cz: "skvalen (squalene)", en: "squalene", cn: "角鲨烯", def_en: "The thirty-carbon triterpene formed by head-to-head condensation of two FPP molecules; the book marks its structure's center of symmetry; precursor of cholesterol via Phase C (beyond this node's page range).", def_cn: "由两分子FPP头对头缩合生成的三十碳三萜；教材标注了其结构的对称中心；经C阶段（超出本节点页码范围）成为胆固醇的前体。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What two small molecules are lost when 3-phospho-5-pyrophosphomevalonic acid is converted to isopentenyl pyrophosphate?",
      q_cn: "3-磷酸-5-焦磷酸甲羟戊酸转化为异戊烯基焦磷酸时，失去哪两个小分子？",
      options: ["ADP and H2O", "Pi and CO2", "Two Pi", "CO2 and NADP+"],
      answer: 1,
      optionRefs: { 3: "8-3-7" },
      optionNotes: {
        0: { en: "ADP leaves at the three kinase steps immediately before this one, where mevalonic acid takes on its phosphate and its pyrophosphate at the cost of 3 ATP — not at the decarboxylation itself.", cn: "ADP 是在紧接着前面的三个 kinase 步骤中离开的——mevalonic acid 消耗 3 ATP 装上磷酸和焦磷酸——而不是在这个脱羧步骤上。" },
        2: { en: "One of the two phosphate groups stays. The product is isopentenyl PYROPHOSPHATE, so the pyrophosphate is retained and it is the C3 phosphate that goes, alongside the CO2.", cn: "两个磷酸基团里有一个留下了。产物是 isopentenyl PYROPHOSPHATE，所以焦磷酸保留，走掉的是 C3 上的磷酸，连同 CO2 一起。" },
        3: { en: "NADP+ belongs to Phase A, where HMG-CoA reductase spends 2 NADPH(H+) to make mevalonic acid. By the time this step is reached, the reductions are already behind.", cn: "NADP+ 属于 A 相——那里 HMG-CoA reductase 消耗 2 NADPH(H+) 生成 mevalonic acid。走到这一步时，还原步骤早已过去。" }
      },
      why_en: "The book's diagram shows this compound losing both Pi and CO2 in a decarboxylation step to give isopentenyl pyrophosphate.",
      why_cn: "教材插图显示该化合物在脱羧步骤中同时失去Pi和CO2，生成异戊烯基焦磷酸。"
    },
    {
      type: "mcq",
      q_en: "Which condensation in this pathway is labeled 'head-to-head' rather than 'head-to-tail'?",
      q_cn: "此途径中哪一次缩合被标注为「头对头」而非「头对尾」？",
      options: [
        "IPP + DMAPP -> GPP",
        "GPP + IPP -> FPP",
        "FPP + FPP -> squalene",
        "IPP -> DMAPP, by isomerase"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Head-to-tail, and the book labels it so. This is the pathway's first condensation, joining the two C5 units into the C10 monoterpene precursor geranyl pyrophosphate.", cn: "这是头对尾的，教材也是这样标的。这是本通路的第一次缩合，把两个 C5 单元接成 C10 的 monoterpene 前体 geranyl pyrophosphate。" },
        1: { en: "Head-to-tail as well: one more C5 unit is added onto geranyl-PP to reach the C15 sesquiterpene precursor. Only the last step of this branch changes orientation.", cn: "同样是头对尾：再往 geranyl-PP 上加一个 C5 单元，得到 C15 的 sesquiterpene 前体。这条分支上只有最后一步改变了取向。" },
        3: { en: "Not a condensation at all. IPP and DMAPP are structural isomers interconverted by an isomerase, so no new carbon-carbon bond forms and neither orientation label applies to it.", cn: "这根本不是缩合。IPP 和 DMAPP 是结构异构体，由一个 isomerase 互相转换，没有新的碳-碳键生成，所以两种取向的标签对它都不适用。" }
      },
      why_en: "The book explicitly labels IPP+DMAPP->GPP, GPP+IPP->FPP, and GPP+IPP->GGPP as 'kondenzace hlavou k ocasu' (head-to-tail), while FPP+FPP->squalene and, separately, GGPP+GGPP->phytoene are both labeled 'kondenzace hlavou k hlavě' (head-to-head).",
      why_cn: "教材明确将IPP+DMAPP->GPP、GPP+IPP->FPP以及GPP+IPP->GGPP标注为「头对尾缩合」，而FPP+FPP->角鲨烯以及另一独立分支的GGPP+GGPP->八氢番茄红素均标注为「头对头缩合」。"
    },
    {
      type: "short",
      q_en: "Starting from mevalonic acid, name every intermediate in order up to squalene, and state which condensation among them is head-to-head rather than head-to-tail.",
      q_cn: "从甲羟戊酸开始，按顺序说出直到角鲨烯为止的每一个中间体，并指出其中哪一次缩合是头对头而非头对尾。",
      accept: ["isopentenyl pyrophosphate", "dimethylallyl", "geranyl", "farnesyl", "squalene", "head-to-head", "头对头", "角鲨烯", "法尼基"],
      answer_en: "Mevalonic acid -> 3-phospho-5-pyrophosphomevalonic acid -> isopentenyl pyrophosphate (IPP) <-> dimethylallyl pyrophosphate (DMAPP) -> geranyl pyrophosphate (GPP) -> farnesyl pyrophosphate (FPP) -> squalene. The FPP+FPP -> squalene condensation is head-to-head; the earlier ones (IPP+DMAPP->GPP, GPP+IPP->FPP) are head-to-tail.",
      answer_cn: "甲羟戊酸->3-磷酸-5-焦磷酸甲羟戊酸->异戊烯基焦磷酸（IPP）<->二甲丙烯基焦磷酸（DMAPP）->香叶基焦磷酸（GPP）->法尼基焦磷酸（FPP）->角鲨烯。FPP+FPP->角鲨烯这一缩合是头对头；此前的几次（IPP+DMAPP->GPP，GPP+IPP->FPP）均为头对尾。"
    }
  ],
  oral: {
    q_en: "Continue from mevalonic acid through Phase B of terpenoid biosynthesis, explaining how the five-carbon isoprene unit is built and then assembled step by step into squalene and, on a separate branch, into phytoene.",
    q_cn: "请从甲羟戊酸继续讲解萜类生物合成的B阶段，说明五碳异戊二烯单位如何生成，并逐步组装为角鲨烯，以及在另一分支中组装为八氢番茄红素。",
    model_en: "Starting from mevalonic acid, three kinases phosphorylate it in succession, spending three ATP, to give 3-phospho-5-pyrophosphomevalonic acid. That compound then loses a phosphate and a CO2 together, in a decarboxylation, and what's left is isopentenyl pyrophosphate — the basic five-carbon activated isoprene unit everything else is built from. An isomerase can flip this into its sibling, dimethylallyl pyrophosphate, and now elongation can begin: isopentenyl pyrophosphate and dimethylallyl pyrophosphate join head-to-tail to make the ten-carbon geranyl pyrophosphate, the monoterpene precursor. Add one more isopentenyl pyrophosphate, again head-to-tail, and you get the fifteen-carbon farnesyl pyrophosphate, the sesquiterpene precursor. Here the pathway splits. Take two farnesyl pyrophosphates and join them head-to-head instead of head-to-tail, and you get squalene — thirty carbons, a triterpene, and it's drawn with a genuine center of symmetry, because it's literally two identical fifteen-carbon halves fused together; squalene is what eventually becomes cholesterol, though that ring-closure chemistry is a later phase this page doesn't cover. On the other branch, instead of two farnesyls, you take geranyl pyrophosphate and add another isopentenyl pyrophosphate, head-to-tail again, to get the twenty-carbon geranylgeranyl pyrophosphate, the diterpene precursor; and two of those, joined head-to-head, give phytoene — forty carbons, a tetraterpene, and this is exactly the entry point into the carotenoid family whose later chemistry, all the way to beta-carotene and its splitting into two retinol molecules, was actually covered a few pages earlier, in section 8.2.",
    checklist: [
      "Described the 3-kinase phosphorylation of mevalonate and the Pi+CO2 loss forming IPP",
      "Named the IPP/DMAPP isomerization",
      "Traced head-to-tail condensations: IPP+DMAPP->GPP, GPP+IPP->FPP",
      "Named the FPP+FPP head-to-head condensation forming squalene, and its link to cholesterol",
      "Named the separate GPP+IPP->GGPP and GGPP+GGPP->phytoene branch, both correctly labeled head-to-tail then head-to-head",
      "Connected phytoene back to the carotenoid/retinol content from section 8.2",
      "Correctly stated this page's content stops before cholesterol's own ring-closure (Phase C)"
    ]
  }
},

{
  id: "8-3-9",
  book: "cz",
  topicKey: "fatty-acid-biosynthesis",
  chapter: 8,
  section: "8.3",
  czTitle: "Odvozené lipidy — HMG-CoA-reduktasa, fáze C (obecné modifikace terpenoidů) a přeměna skvalenu na cholesterol",
  enTitle: "Derived lipids — HMG-CoA reductase, Phase C (general terpenoid modifications), and conversion of squalene to cholesterol",
  cnTitle: "衍生脂质——HMG-CoA还原酶、C阶段（萜类的一般修饰）及角鲨烯转化为胆固醇",
  pages: [193],
  coverage: "full",
  coverageNote: "PATCHED 2026-08-06 during chapter-8 reconciliation: this content sits in the top ~55% of p.193, above the '8.4 Odbourávání lipidů' heading, and fell into a genuine gap between two drafting agents — the one covering pp.187-192 (whose last node, 8-3-8, explicitly stopped at squalene/phytoene and flagged Phase C as outside its range) and the one covering pp.193-201 (which started exactly at the '8.4' heading and explicitly did not summarize the tail of 8.3 above it). Read directly from the page image to close the gap: the HMG-CoA-reductase paragraph (2 NADPH required, key regulatory enzyme, clinical relevance for cholesterol/atherosclerosis therapy), the completion of Phase B's own narrative in prose (mevalonate activated by 3 ATP-dependent kinases to 3-phospho-5-pyrophosphomevalonate, an extremely unstable intermediate immediately decarboxylated/dephosphorylated to IPP, isomerizing to DMAPP, condensing to GPP then FPP — this restates in prose what node 8-3-8's diagram already showed structurally, so it is NOT re-added to points here to avoid duplication, only cross-referenced), the Phase C description (no single general scheme applies; a range of enzyme-controlled modifications — chiefly oxidations introducing hydroxyl/aldehyde/carbonyl/carboxyl groups, and chain shortening/lengthening by one or more methyl groups — acting on the unsaturated hydrocarbon products of Phase B; cyclization into rings of three to nine members is very common), and the specific completion of the squalene branch: two FPP molecules condense to the C30 hydrocarbon squalene (already covered structurally in 8-3-8), which squalene monooxygenase converts to 2,3-squalene epoxide, which a cyclase then converts to the cyclic sterol lanosterol, from which a series of about twenty further reactions (removal and shifting of methyl groups) gives CHOLESTEROL in animals.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Phase C is toolkit of dozens of modifications, not one pathway. Unsaturated hydrocarbon sculpted into functional molecule.", cn: "C阶段是数十种修饰的工具包，非单一途径。不饱和烃雕琢成功能分子。" },
  summary: {
    en: "This node closes out section 8.3's terpenoid/cholesterol biosynthesis narrative. HMG-CoA reductase (requiring 2 NADPH) is named as the key regulatory enzyme of terpenoid biosynthesis, of particular medical interest for cholesterol biosynthesis and possible atherosclerosis therapy (a forward nod to statins, though the book does not name that drug class here). Phase C, converting Phase B's unsaturated hydrocarbon products (mono-, sesqui-, di-, tri-, and tetraterpenes) into their final functional forms, cannot be described by any single general scheme — it is a diverse collection of enzyme-controlled modifications, most often oxidations (introducing hydroxyl, aldehyde, carbonyl, or carboxyl groups) and chain shortening/lengthening by one or more methyl groups; cyclization into three- to nine-membered rings is very common. Specifically for the squalene branch: two molecules of farnesyl pyrophosphate condense to give the aliphatic thirty-carbon hydrocarbon squalene, which is converted by squalene monooxygenase to 2,3-squalene epoxide, and then by a cyclase to the cyclic sterol lanosterol. From lanosterol, a series of roughly twenty further reactions (removing and shifting methyl groups) produces cholesterol in animals.",
    cn: "本节点结束第8.3节萜类/胆固醇生物合成的叙述。HMG-CoA还原酶（需要2分子NADPH）被列为萜类生物合成的关键调节酶，因其与胆固醇生物合成及可能的动脉粥样硬化治疗相关而具有重要医学意义（这是对他汀类药物的前瞻性暗示，尽管教材此处并未点明这一药物类别）。C阶段将B阶段生成的不饱和烃类产物（单萜、倍半萜、二萜、三萜、四萜）转化为其最终的功能形式，无法用任何单一的通用方案描述——它是一系列多样化的酶促修饰，最常见的是氧化反应（引入羟基、醛基、羰基或羧基）以及通过一个或多个甲基使链缩短或延长；环化为三至九元环的情况也十分常见。具体到角鲨烯这一分支：两分子法尼基焦磷酸缩合生成脂肪族三十碳烃角鲨烯，角鲨烯经角鲨烯单加氧酶转化为2,3-角鲨烯环氧化物，再经环化酶转化为环状固醇羊毛甾醇。从羊毛甾醇出发，经约二十步进一步反应（甲基的脱除与转移）即可在动物体内生成胆固醇。"
  },
  points: [
    { cz: "HMG-CoA-reduktasa: 2 NADPH, klíčový regulační enzym, cholesterol/ateroskleróza", en: "HMG-CoA REDUCTASE (requiring 2 NADPH) is the KEY REGULATORY ENZYME of terpenoid biosynthesis, of particular medical interest for cholesterol biosynthesis and possible atherosclerosis therapy.", cn: "HMG-CoA还原酶（需要2分子NADPH）是萜类生物合成的关键调节酶，因其与胆固醇生物合成及可能的动脉粥样硬化治疗相关而备受关注。" },
    { cz: "fáze C: žádné obecné schéma, oxidace + zkrácení/prodloužení řetězce, cyklizace 3-9členné", en: "Phase C — converting Phase B's unsaturated hydrocarbons into their final functional forms — CANNOT be described by any single general scheme. It is a diverse set of enzyme-controlled modifications: most often OXIDATIONS (introducing hydroxyl, aldehyde, carbonyl, or carboxyl groups) and chain shortening/lengthening by one or more methyl groups; cyclization into THREE- to NINE-membered rings is very common.", cn: "C阶段——将B阶段生成的不饱和烃转化为最终功能形式——无法用任何单一通用方案描述。它是一系列多样化的酶促修饰：最常见的是氧化反应（引入羟基、醛基、羰基或羧基）以及通过一个或多个甲基使链缩短或延长；环化为三至九元环也十分常见。" },
    { cz: "skvalen -> (skvalen monooxygenasa) -> 2,3-skvalenepoxid -> (cyklasa) -> lanosterol", en: "Squalene is converted by SQUALENE MONOOXYGENASE to 2,3-SQUALENE EPOXIDE, and then by a CYCLASE to the cyclic sterol LANOSTEROL.", cn: "角鲨烯经角鲨烯单加氧酶转化为2,3-角鲨烯环氧化物，再经环化酶转化为环状固醇羊毛甾醇。" },
    { cz: "lanosterol -> (~20 reakcí, přesun/odstranění methylových skupin) -> cholesterol", en: "From lanosterol, a series of roughly TWENTY further reactions (removing and shifting methyl groups) produces CHOLESTEROL in animals — the endpoint of the squalene branch of terpenoid biosynthesis.", cn: "从羊毛甾醇出发，经约二十步进一步反应（甲基的脱除与转移），在动物体内生成胆固醇——这是萜类生物合成中角鲨烯分支的终点。" }
  ],
  terms: [
    { cz: "HMG-CoA-reduktasa", en: "HMG-CoA reductase", cn: "HMG-CoA还原酶", def_en: "The key regulatory enzyme of terpenoid/cholesterol biosynthesis, requiring 2 NADPH; of major medical interest for atherosclerosis therapy.", def_cn: "萜类/胆固醇生物合成的关键调节酶，需要2分子NADPH；对动脉粥样硬化治疗具有重要医学意义。" },
    { cz: "lanosterol", en: "lanosterol", cn: "羊毛甾醇", def_en: "The cyclic sterol formed by cyclase action on 2,3-squalene epoxide; converted to cholesterol in animals via roughly twenty further reactions.", def_cn: "由环化酶作用于2,3-角鲨烯环氧化物而生成的环状固醇；在动物体内经约二十步进一步反应转化为胆固醇。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book, what converts squalene into the cyclic sterol lanosterol?",
      q_cn: "根据教材，角鲨烯是经什么途径转化为环状固醇羊毛甾醇的？",
      options: [
        "Directly, in a single step catalysed by HMG-CoA reductase",
        "Squalene monooxygenase forms 2,3-squalene epoxide, then a cyclase forms lanosterol",
        "A single decarboxylation, of the kind that made IPP earlier",
        "Three successive ATP-dependent kinases, the same three that activated mevalonic acid in Phase B"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-7", 2: "8-3-8", 3: "8-3-8" },
      optionNotes: {
        0: { en: "HMG-CoA reductase acts far upstream, in Phase A, turning HMG-CoA into mevalonic acid with 2 NADPH. It is worth naming because it is the pathway's key regulatory enzyme, but it never touches squalene.", cn: "HMG-CoA reductase 作用在上游很远的地方，在 A 相，用 2 NADPH 把 HMG-CoA 变成 mevalonic acid。它值得记住是因为它是本通路的关键调控酶，但它从不碰 squalene。" },
        2: { en: "Decarboxylation belongs to Phase B, where 3-phospho-5-pyrophosphomevalonic acid loses Pi and CO2 to give IPP. Squalene's conversion is an oxidation followed by a cyclisation, and neither loses carbon.", cn: "脱羧属于 B 相——那里 3-phospho-5-pyrophosphomevalonic acid 脱去 Pi 和 CO2 生成 IPP。Squalene 的转化是先氧化再环化，两步都不掉碳。" },
        3: { en: "Those kinases belong to the start of Phase B, activating mevalonic acid at the cost of 3 ATP. What is characteristic of Phase C is cyclisation — into rings of three to nine members — together with oxidations.", cn: "那三个 kinase 属于 B 相的开头，消耗 3 ATP 活化 mevalonic acid。C 相的特征动作是环化——形成三元到九元的环——以及氧化。" }
      },
      why_en: "The book states squalene is converted by squalene monooxygenase to 2,3-squalene epoxide, and then by a cyclase to lanosterol — a two-enzyme sequence, not a single direct step, and not the kinases used earlier in Phase B.",
      why_cn: "教材指出，角鲨烯经角鲨烯单加氧酶转化为2,3-角鲨烯环氧化物，再经环化酶转化为羊毛甾醇——这是一个两步酶促过程，而非单一直接步骤，也不是B阶段早先使用的激酶。"
    },
    {
      type: "short",
      q_en: "Why can't Phase C of terpenoid biosynthesis be summarized by one general reaction scheme?",
      q_cn: "为什么萜类生物合成的C阶段无法用一个通用反应方案来概括？",
      accept: ["diverse", "oxidation", "methyl", "cyclization", "多样", "氧化", "甲基", "环化"],
      answer_en: "Because Phase C is a diverse collection of enzyme-controlled modifications acting on Phase B's unsaturated hydrocarbon products — chiefly oxidations (adding hydroxyl/aldehyde/carbonyl/carboxyl groups) and chain shortening/lengthening by methyl groups, with cyclization into 3-9-membered rings being very common — rather than one uniform pathway.",
      answer_cn: "因为C阶段是作用于B阶段不饱和烃产物之上的一系列多样化酶促修饰——主要是氧化反应（加上羟基/醛基/羰基/羧基）以及通过甲基使链缩短或延长，环化为三至九元环也十分常见——而不是单一统一的途径。"
    }
  ],
  oral: {
    q_en: "Describe HMG-CoA reductase's role, explain why Phase C of terpenoid biosynthesis resists a single general scheme, and trace squalene's conversion to cholesterol.",
    q_cn: "请描述HMG-CoA还原酶的作用，解释为什么萜类生物合成的C阶段无法用单一通用方案描述，并追溯角鲨烯转化为胆固醇的过程。",
    model_en: "HMG-CoA reductase, which requires two molecules of NADPH, is the key regulatory enzyme controlling the whole pace of terpenoid biosynthesis, and it draws particular medical attention because of its central role in cholesterol biosynthesis and its status as a target for possible atherosclerosis therapy. Once Phase B has built up the various unsaturated hydrocarbon terpenoids — mono-, sesqui-, di-, tri-, and tetraterpenes — Phase C takes over to convert them into their final functional forms, and the book is explicit that this phase cannot be captured by any single general reaction scheme. Instead it's a diverse toolkit of enzyme-controlled modifications: oxidations that introduce hydroxyl, aldehyde, carbonyl, or carboxyl groups are the most common, chains get shortened or lengthened by one or more methyl groups, and cyclization into rings of anywhere from three to nine members shows up frequently. For the specific squalene branch, two molecules of farnesyl pyrophosphate condense head-to-head to give the thirty-carbon triterpene squalene. Squalene monooxygenase then converts that into 2,3-squalene epoxide, and a cyclase converts the epoxide into the first proper cyclic sterol, lanosterol. From lanosterol, roughly twenty more reactions — mostly removing and shifting methyl groups around the ring system — finally produce cholesterol in animals.",
    checklist: [
      "Named HMG-CoA reductase as the key regulatory enzyme, requiring 2 NADPH",
      "Noted its medical relevance to cholesterol/atherosclerosis",
      "Explained Phase C has no single general scheme — diverse oxidations and chain modifications",
      "Mentioned cyclization into 3-9-membered rings as a common Phase C outcome",
      "Traced squalene -> 2,3-squalene epoxide (squalene monooxygenase) -> lanosterol (cyclase)",
      "Traced lanosterol -> cholesterol via ~20 further reactions (methyl group removal/shifting)"
    ]
  }
},

{
  id: "8-4-1",
  book: "cz",
  topicKey: "fat-mobilization",
  chapter: 8,
  section: "8.4.1",
  czTitle: "Jednoduché lipidy",
  enTitle: "Simple lipids",
  cnTitle: "简单脂质",
  pages: [193],
  coverage: "full",
  coverageNote: "Page 193 read in full. The top of the page continues prior section 8.3 (terpenoid/cholesterol biosynthesis via HMG-CoA reductase and mevalonate) — that is out of scope for this node and not summarized here. This node covers only the '8.4 Odbourávání lipidů' heading (which carries no independent text of its own — the book moves directly into subsection 8.4.1 immediately below it, the same pattern seen at the start of chapter 7) and the full text of '8.4.1 Jednoduché lipidy' that follows: the triacylglycerol-lipase hydrolysis reaction.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4 'Odbourávání lipidů'（脂质的分解代谢）与该笔记标题字面对应，但尚未阅读原笔记内容核实其小节划分", status: "partial" },
  mustKnow: { en: "Storage fat comes apart in a single hydrolytic step: LIPASE, in the cytoplasm, cuts the ester bonds of a triacylglycerol and hands back free fatty acids plus glycerol. That is the whole of this section — and from here the two halves go to entirely different places, with the rest of 8.4 following the fatty acid.", cn: "贮存脂肪的分解只有一步水解：细胞质中的 LIPASE 切开 triacylglycerol 的酯键，交出游离脂肪酸和 glycerol。这一节的内容就到这里为止——从这里开始两半各奔东西，8.4 后面跟的是脂肪酸那一半。" },
  summary: {
    en: "Section 8.4 ('Odbourávání lipidů', lipid breakdown) opens chapter 8's catabolism half with no independent text under its own heading — content begins directly at 8.4.1. Simple lipids are represented by triacylglycerols (triglycerides), described here as the main storage substance in organisms. Their breakdown is carried out by hydrolytic enzymes called lipases, present in the cytoplasm, which break the ester bonds linking the fatty acids to glycerol. The reaction is a straightforward hydrolysis: triacylglycerol plus water, catalyzed by lipase, yields free fatty acids plus glycerol. The released free fatty acids are not yet metabolically usable as such — per 8.4.4 later in this same section, they must first be activated to a CoA-thioester form before entering any further catabolic (or anabolic) pathway.",
    cn: "第8.4节（'Odbourávání lipidů'，脂质的分解代谢）作为第8章分解代谢部分的开篇标题，本身没有独立正文——内容直接从8.4.1开始。简单脂质以三酰甘油（甘油三酯）为代表，教材将其称为生物体内主要的储能物质。其分解由细胞质中的水解酶——脂肪酶完成，脂肪酶断裂连接脂肪酸与甘油的酯键。反应本质上是简单的水解：三酰甘油加水，在脂肪酶催化下生成游离脂肪酸和甘油。释放出的游离脂肪酸本身还不能直接进入代谢途径——按本节后面8.4.4的说法，它们必须先被活化为辅酶A硫酯形式，才能进入后续的分解（或合成）代谢途径。"
  },
  points: [
    { cz: "8.4 = bez vlastního textu", en: "Section 8.4's own heading ('Odbourávání lipidů') carries no independent text — the book proceeds directly into subsection 8.4.1 immediately below it.", cn: "第8.4节标题本身没有独立正文——教材紧接着直接进入8.4.1小节。" },
    { cz: "triacylglycerol — hlavní zásobní látka", en: "TRIACYLGLYCEROLS (triglycerides) are described as the main storage substance (zásobní látka) in organisms.", cn: "三酰甘油（甘油三酯）被称为生物体内主要的储能（储存）物质。" },
    { cz: "lipasa — hydrolytický enzym, cytoplazma", en: "Breakdown of triacylglycerols is carried out by hydrolytic enzymes called LIPASES, present in the cytoplasm, which break the ESTER BONDS between the fatty acids and glycerol.", cn: "三酰甘油的分解由细胞质中的水解酶——脂肪酶完成，脂肪酶断裂脂肪酸与甘油之间的酯键。" },
    { cz: "triacylglycerol + H2O --lipasa--> volné mastné kyseliny + glycerol", en: "The reaction as given in the book: triacylglycerol + H₂O, catalyzed by lipase, yields free fatty acids + glycerol.", cn: "教材给出的反应式：三酰甘油 + H₂O，在脂肪酶催化下，生成游离脂肪酸 + 甘油。" }
  ],
  terms: [
    { cz: "triacylglycerol", en: "triacylglycerol (triglyceride)", cn: "三酰甘油（甘油三酯）", def_en: "A glycerol esterified with three fatty acids; per this book, the main lipid storage form in organisms.", def_cn: "甘油与三分子脂肪酸形成的酯；据教材所述，是生物体内主要的脂质储存形式。" },
    { cz: "lipasa", en: "lipase", cn: "脂肪酶", def_en: "A cytoplasmic hydrolytic enzyme that cleaves the ester bonds of triacylglycerols, releasing free fatty acids and glycerol.", def_cn: "存在于细胞质中的水解酶，断裂三酰甘油的酯键，释放游离脂肪酸和甘油。" },
    { cz: "volná mastná kyselina", en: "free fatty acid", cn: "游离脂肪酸", def_en: "A fatty acid released from an ester (e.g. from triacylglycerol) that is not yet activated to a CoA-thioester and so cannot yet enter metabolic pathways.", def_cn: "从酯（如三酰甘油）中释放出的脂肪酸，尚未活化为辅酶A硫酯形式，因而还不能进入代谢途径。" },
    { cz: "glycerol", en: "glycerol", cn: "甘油", def_en: "The three-carbon polyol backbone of triacylglycerols and phospholipids, released upon lipase hydrolysis.", def_cn: "三酰甘油和磷脂的三碳多元醇骨架，脂肪酶水解后被释放出来。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book, what is the main storage substance (zásobní látka) in organisms among the simple lipids, and where is the enzyme that degrades it located?",
      q_cn: "根据教材，简单脂质中作为生物体主要储能物质的是什么？分解它的酶位于何处？",
      options: [
        "Cholesterol; located in the mitochondrial matrix",
        "Triacylglycerols; lipases located in the cytoplasm",
        "Phospholipids; phospholipases located in the nucleus",
        "Sphingomyelin; sphingomyelinase located in the Golgi apparatus"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-3", 2: "8-4-2-1", 3: "8-4-2-2" },
      optionNotes: {
        0: { en: "Cholesterol is a derived lipid, and what the book says about it is the opposite of storage: as a rule it is not metabolised for energy at all, and it leaves the animal body only after conversion to bile acids.", cn: "Cholesterol 属于衍生脂类，而教材关于它的说法恰恰与储存相反：它一般根本不被代谢供能，离开动物体之前还必须先转化成胆汁酸。" },
        2: { en: "Phospholipids are complex lipids and above all membrane components rather than a store. Phospholipases do take them apart, but in the cytoplasm, not in the nucleus.", cn: "Phospholipid 属于复合脂类，首先是膜的组分，而不是储备物质。Phospholipase 确实会把它们拆开，但地点是细胞质，不是细胞核。" },
        3: { en: "Sphingomyelin is a complex lipid too, and sphingomyelinase is one of the cytoplasmic hydrolases that dismantle the sphingolipids step by step — it cleaves the ceramide-phosphate bond.", cn: "Sphingomyelin 同样属于复合脂类，而 sphingomyelinase 是逐步拆解 sphingolipid 的那批细胞质水解酶之一——它切开 ceramide 与磷酸之间的键。" }
      },
      why_en: "The book identifies triacylglycerols as the main storage substance and states their degrading enzymes, lipases, are present in the cytoplasm. Cholesterol, phospholipids, and sphingomyelin belong to other lipid classes (derived and complex lipids) discussed in later subsections.",
      why_cn: "教材指出三酰甘油是主要的储能物质，分解它的酶——脂肪酶存在于细胞质中。胆固醇、磷脂和鞘磷脂分别属于后面小节讨论的其他脂质类别（衍生脂质和复合脂质）。"
    },
    {
      type: "mcq",
      q_en: "What bond does lipase break during triacylglycerol degradation?",
      q_cn: "脂肪酶在分解三酰甘油时断裂的是什么化学键？",
      options: [
        "Glycosidic bonds between the sugar head groups",
        "Phosphodiester bonds flanking the phosphate",
        "Ester bonds between fatty acids and glycerol",
        "Amide bonds between the acyl and the amino group"
      ],
      answer: 2,
      optionRefs: { 0: "8-2-3", 1: "8-4-2-1", 3: "8-2-3-3" },
      optionNotes: {
        0: { en: "Glycosidic bonds hold the sugar head groups of the glycolipids — MGDG's galactose, a cerebroside's single sugar. A triacylglycerol carries no sugar anywhere for such a bond to exist.", cn: "糖苷键连的是 glycolipid 的糖头基——MGDG 的 galactose、cerebroside 的那一个糖。Triacylglycerol 身上根本没有糖，也就不存在这种键。" },
        1: { en: "The bonds flanking a phosphate group are phospholipase C's and D's business, and a triacylglycerol has no phosphate for them to flank — that third position carries a fatty acid instead.", cn: "磷酸两侧的键归 phospholipase C 和 D 管，而 triacylglycerol 上根本没有磷酸——第三个位置上接的是又一个脂肪酸。" },
        3: { en: "An amide bond between an acyl group and an amino group is what makes ceramide out of sphingosine. That is the sphingolipid pattern; the acylglycerols are held together by esters throughout.", cn: "酰基与氨基之间的酰胺键，是 sphingosine 变成 ceramide 的方式。那是 sphingolipid 的式样；acylglycerol 一族从头到尾靠的都是酯键。" }
      },
      why_en: "The book explicitly states lipases break the ester bonds of the fatty acids and glycerol. Glycosidic and peptide bonds belong to carbohydrate and protein chemistry respectively; phosphodiester bonds are broken by phospholipases (8.4.2), not lipases.",
      why_cn: "教材明确指出脂肪酶断裂的是脂肪酸与甘油之间的酯键。糖苷键和肽键分别属于糖类和蛋白质化学；磷酸二酯键由磷脂酶（8.4.2节）断裂，而非脂肪酶。"
    },
    {
      type: "short",
      q_en: "Write the reaction the book gives for triacylglycerol breakdown, naming the enzyme and both products.",
      q_cn: "写出教材给出的三酰甘油分解反应式，注明酶和两种产物。",
      accept: ["lipase", "lipasa", "fatty acid", "glycerol", "ester", "脂肪酶", "脂肪酸", "甘油", "酯键"],
      answer_en: "Triacylglycerol + H₂O, catalyzed by lipase (a cytoplasmic hydrolytic enzyme breaking the ester bonds), yields free fatty acids + glycerol.",
      answer_cn: "三酰甘油 + H₂O，在脂肪酶（一种断裂酯键的细胞质水解酶）催化下，生成游离脂肪酸 + 甘油。"
    }
  ],
  oral: {
    q_en: "Describe how simple lipids (triacylglycerols) are broken down, per the book's 8.4.1.",
    q_cn: "请根据教材8.4.1节，描述简单脂质（三酰甘油）是如何被分解的。",
    model_en: "The book opens its lipid-catabolism section with simple lipids, and the representative simple lipid is the triacylglycerol, which it describes as the main storage substance found in organisms. Breaking a triacylglycerol down is a hydrolysis reaction: an enzyme family called lipases, which sit in the cytoplasm, attacks the ester bonds that link each of the three fatty acid chains to the glycerol backbone. Adding water across those ester bonds releases the fatty acids as free fatty acids and leaves glycerol behind. It's worth remembering that those free fatty acids can't be used yet — before they enter any further metabolic pathway, catabolic or anabolic, they still need to be activated to a coenzyme-A thioester, which the book covers later under 8.4.4.",
    checklist: [
      "Noted 8.4's own heading has no independent text before 8.4.1",
      "Named triacylglycerol as the main storage lipid",
      "Named lipase as the degrading enzyme, located in the cytoplasm",
      "Stated lipase breaks the ester bonds between fatty acids and glycerol",
      "Gave the reaction: triacylglycerol + H2O -> free fatty acids + glycerol",
      "Connected forward to 8.4.4: free fatty acids still need CoA activation before use"
    ]
  }
},

{
  id: "8-4-2-1",
  book: "cz",
  topicKey: "working-with-lipids",
  chapter: 8,
  section: "8.4.2",
  czTitle: "Složené lipidy — fosfolipidy a fosfolipasy",
  enTitle: "Complex lipids — phospholipids and phospholipases",
  cnTitle: "复合脂质——磷脂与磷脂酶",
  pages: [193],
  coverage: "full",
  coverageNote: "Full text of '8.4.2 Složené lipidy' on page 193 read directly, through the general framing (complex lipids as membrane components, degraded in the cytoplasm) and the phospholipase paragraph, plus the accompanying structural diagram of phosphatidylcholine (lecithin) with all four phospholipase cleavage-site arrows (A1, A2, C, D) verified directly against a zoomed re-read of the figure. The book names the four phospholipase types by site of action but does not spell out each one's specific product pair in the running prose — that level of detail (PLA1/PLA2 cleave the two fatty-acid ester bonds, PLC and PLD cleave the two bonds flanking the phosphate) is read directly off the figure's arrow placement, not invented.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.2 磷脂分解与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "Phospholipases cut at four sites. A1/A2 release fatty acids. C/D release head and phosphate. Each product sends different signal.", cn: "磷脂酶在四个位点切割。A1/A2释放脂肪酸。C/D释放头和磷酸。每产物发送不同信号。" },
  summary: {
    en: "Complex lipids (composed lipids) are, per the book, primarily components of biological membranes, and their degradation takes place in the cytoplasm — in contrast to fatty-acid beta-oxidation, which (as 8.4.4 will show) is a mitochondrial process. Phospholipids specifically are broken down by hydrolytic enzymes called phospholipases, which break the ester-type bonds within the molecule. The book distinguishes four phospholipase types by their site of action within the phospholipid molecule, illustrated on a phosphatidylcholine (lecithin) structure: phospholipase A1 cleaves the ester bond at the sn-1 position (the first fatty acid chain), phospholipase A2 cleaves the ester bond at the sn-2 position (the second fatty acid chain, drawn in the figure as the one carrying a double-bond kink), phospholipase C cleaves the bond on the glycerol side of the phosphate group, and phospholipase D cleaves the bond on the far side of the phosphate, next to the choline head group.",
    cn: "复合脂质（组成型脂质）据教材所述，主要是生物膜的组分，其降解发生在细胞质中——这与8.4.4节将要介绍的脂肪酸β-氧化（一个线粒体内的过程）形成对比。磷脂具体是由水解酶——磷脂酶分解的，磷脂酶断裂分子内的酯型键。教材以磷脂酰胆碱（卵磷脂）的结构为例，按作用位点区分了四种磷脂酶：磷脂酶A1断裂sn-1位的酯键（第一条脂肪酸链），磷脂酶A2断裂sn-2位的酯键（第二条脂肪酸链，图中画成带有双键弯折的那一条），磷脂酶C断裂磷酸基团靠甘油一侧的键，磷脂酶D断裂磷酸基团另一侧、靠近胆碱头部基团的键。"
  },
  points: [
    { cz: "složené lipidy = součást membrán, degradace v cytoplazmě", en: "Complex lipids are primarily components of biological membranes; their degradation takes place in the CYTOPLASM (contrast with beta-oxidation of fatty acids, which is mitochondrial — see 8.4.4).", cn: "复合脂质主要是生物膜的组分；其降解发生在细胞质中（与8.4.4节中线粒体内进行的脂肪酸β-氧化形成对比）。" },
    { cz: "fosfolipasy — hydrolyzují esterové vazby", en: "Phospholipids are degraded by hydrolytic enzymes called PHOSPHOLIPASES, which break the ester-type bonds within the phospholipid molecule.", cn: "磷脂由水解酶——磷脂酶分解，磷脂酶断裂磷脂分子内的酯型键。" },
    { cz: "4 typy fosfolipas podle místa působení", en: "Four types of phospholipases are distinguished by site of action within the molecule: A1, A2, C, and D.", cn: "根据作用位点的不同，区分出四种磷脂酶：A1、A2、C、D。" },
    { cz: "fosfolipasa A1 / A2 — štěpí esterové vazby mastných kyselin", en: "Fosfolipasa A1 cleaves the ester bond at the sn-1 position (first fatty acid chain); fosfolipasa A2 cleaves the ester bond at the sn-2 position (second fatty acid chain — drawn with a double-bond kink in the book's figure).", cn: "磷脂酶A1断裂sn-1位的酯键（第一条脂肪酸链）；磷脂酶A2断裂sn-2位的酯键（第二条脂肪酸链——图中画成带双键弯折的那条）。" },
    { cz: "fosfolipasa C / D — štěpí vazby kolem fosfátu", en: "Fosfolipasa C cleaves the bond on the glycerol side of the phosphate group; fosfolipasa D cleaves the bond on the far side of the phosphate, adjacent to the choline head group — read directly off the figure's two remaining arrows.", cn: "磷脂酶C断裂磷酸基团靠甘油一侧的键；磷脂酶D断裂磷酸基团另一侧、靠近胆碱头部基团的键——这是直接根据图中剩余两个箭头位置读出的。" },
    { cz: "fosfatidylcholin (lecitin) = příklad", en: "The book's worked example for the four-phospholipase figure is phosphatidylcholine (lecithin).", cn: "教材用于展示四种磷脂酶作用位点的例子是磷脂酰胆碱（卵磷脂）。" }
  ],
  terms: [
    { cz: "fosfolipasa", en: "phospholipase", cn: "磷脂酶", def_en: "A hydrolytic enzyme that cleaves an ester-type bond within a phospholipid; four types (A1, A2, C, D) are distinguished by cleavage site.", def_cn: "断裂磷脂分子内酯型键的水解酶；按切割位点分为A1、A2、C、D四种。" },
    { cz: "fosfolipasa A1", en: "phospholipase A1 (PLA1)", cn: "磷脂酶A1", def_en: "Cleaves the ester bond at the sn-1 position of a phospholipid.", def_cn: "断裂磷脂sn-1位的酯键。" },
    { cz: "fosfolipasa A2", en: "phospholipase A2 (PLA2)", cn: "磷脂酶A2", def_en: "Cleaves the ester bond at the sn-2 position of a phospholipid.", def_cn: "断裂磷脂sn-2位的酯键。" },
    { cz: "fosfolipasa C", en: "phospholipase C (PLC)", cn: "磷脂酶C", def_en: "Cleaves the bond on the glycerol side of the phosphate group.", def_cn: "断裂磷酸基团靠甘油一侧的键。" },
    { cz: "fosfolipasa D", en: "phospholipase D (PLD)", cn: "磷脂酶D", def_en: "Cleaves the bond on the far side of the phosphate group, next to the head group (e.g. choline).", def_cn: "断裂磷酸基团另一侧、靠近头部基团（如胆碱）的键。" },
    { cz: "fosfatidylcholin (lecitin)", en: "phosphatidylcholine (lecithin)", cn: "磷脂酰胆碱（卵磷脂）", def_en: "The book's example phospholipid used to illustrate the four phospholipase cleavage sites.", def_cn: "教材用于说明四种磷脂酶切割位点的示例磷脂。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Where does degradation of complex lipids (e.g. phospholipids) take place, per the book, and how does this contrast with fatty-acid beta-oxidation?",
      q_cn: "根据教材，复合脂质（如磷脂）的降解发生在哪里？这与脂肪酸β-氧化有何不同？",
      options: [
        "In the cytoplasm; beta-oxidation instead takes place in the mitochondrial matrix",
        "In the mitochondrial matrix; beta-oxidation instead takes place in the cytoplasm, exactly the other way about",
        "In the nucleus; beta-oxidation runs there as well",
        "In the Golgi; beta-oxidation takes place in the endoplasmic reticulum"
      ],
      answer: 0,
      optionRefs: { 1: "8-4-4-2", 3: "8-3-1" },
      optionNotes: {
        1: { en: "The two compartments have been swapped. The book draws the contrast the other way round: complex lipids come apart in the cytoplasm, while beta-oxidation of the released fatty acids is a mitochondrial matrix process.", cn: "两个区室调换了。教材画出的对比正好相反：复合脂类在细胞质里拆解，而释放出来的脂肪酸的 beta-oxidation 发生在线粒体基质。" },
        2: { en: "The nucleus appears nowhere in this chapter's lipid catabolism. Two compartments are named for these two processes, and the point of naming them is that they are different from each other.", cn: "细胞核在本章的脂类分解里从未出现过。教材为这两个过程各点名了一个区室，而点名的意义就在于两者不同。" },
        3: { en: "The endoplasmic reticulum does carry a lipid enzyme system, but a biosynthetic one: the desaturase that turns saturated chains into unsaturated ones, and which also permits further elongation.", cn: "内质网上确实有一套脂类酶系统，但那是合成方向的：把饱和链变成不饱和链的 desaturase，而且它也允许链继续延长。" }
      },
      why_en: "The book states complex lipid degradation occurs in the cytoplasm, while 8.4.4 later specifies that beta-oxidation of fatty acids is localized to the mitochondrial matrix — the two lipid-catabolism pathways are compartmentalized differently.",
      why_cn: "教材指出复合脂质的降解发生在细胞质中，而后面8.4.4节指出脂肪酸β-氧化定位于线粒体基质——两条脂质分解代谢途径在细胞内的区室化定位不同。"
    },
    {
      type: "mcq",
      q_en: "Using the book's phosphatidylcholine figure, which two phospholipases cleave the ester bonds to the fatty acid chains (as opposed to the bonds around the phosphate group)?",
      q_cn: "根据教材磷脂酰胆碱示意图，哪两种磷脂酶断裂的是脂肪酸链的酯键（而不是磷酸基团周围的键）？",
      options: [
        "Phospholipase C and D",
        "Phospholipase A1 and A2",
        "Phospholipase A1 and D",
        "Phospholipase A2 together with C"
      ],
      answer: 1,
      optionRefs: { 3: "8-2-3-2" },
      optionNotes: {
        0: { en: "C and D are the pair that cut around the phosphate: C on the glycerol side of it, D on the far side, next to the choline head group. Neither touches a fatty-acid ester.", cn: "C 和 D 是在磷酸两侧下刀的那一对：C 切磷酸靠 glycerol 的一侧，D 切另一侧、紧挨着 choline 头基。两者都不碰脂肪酸的酯键。" },
        2: { en: "Half right. A1 does cut a fatty-acid ester, the one at sn-1; but D cuts on the far side of the phosphate, next to the head group, so it belongs to the other pair.", cn: "对了一半。A1 确实切脂肪酸的酯键，即 sn-1 位那个；但 D 切的是磷酸另一侧、靠头基的那个键，属于另一对。" },
        3: { en: "Half right the other way about. A2 cuts the sn-2 fatty acid — drawn with a kink in the figure, since position 2 is where the unsaturated chain sits as a rule — while C cuts on the glycerol side of the phosphate.", cn: "反过来对了一半。A2 切的是 sn-2 的脂肪酸——图上画成带折的，因为按惯例 2 位接的是不饱和链——而 C 切的是磷酸靠 glycerol 那一侧。" }
      },
      why_en: "Phospholipase A1 and A2 cleave the two fatty-acid ester bonds (sn-1 and sn-2 positions respectively); phospholipase C and D instead cleave the two bonds flanking the phosphate group, on the glycerol side and head-group side respectively.",
      why_cn: "磷脂酶A1和A2分别断裂sn-1位和sn-2位的脂肪酸酯键；磷脂酶C和D则分别断裂磷酸基团靠甘油一侧和靠头部基团一侧的键。"
    },
    {
      type: "short",
      q_en: "Name the four phospholipase types the book distinguishes and state, in general terms, what each cleaves.",
      q_cn: "列出教材区分的四种磷脂酶，并简述各自断裂的键。",
      accept: ["A1", "A2", "C", "D", "sn-1", "sn-2", "phosphate", "glycerol", "choline", "磷酸", "甘油", "胆碱"],
      answer_en: "Phospholipase A1 cleaves the sn-1 fatty-acid ester bond; phospholipase A2 cleaves the sn-2 fatty-acid ester bond; phospholipase C cleaves the bond between glycerol and the phosphate group; phospholipase D cleaves the bond between the phosphate group and the head group (e.g. choline).",
      answer_cn: "磷脂酶A1断裂sn-1位脂肪酸酯键；磷脂酶A2断裂sn-2位脂肪酸酯键；磷脂酶C断裂甘油与磷酸基团之间的键；磷脂酶D断裂磷酸基团与头部基团（如胆碱）之间的键。"
    }
  ],
  oral: {
    q_en: "Explain how complex lipids, specifically phospholipids, are degraded, and describe the four phospholipase types.",
    q_cn: "请解释复合脂质，特别是磷脂，是如何被降解的，并描述四种磷脂酶。",
    model_en: "Complex lipids are mainly the lipids that make up biological membranes, and unlike fatty-acid beta-oxidation, which happens inside the mitochondrial matrix, their breakdown happens right there in the cytoplasm. For phospholipids specifically, the responsible enzymes are the phospholipases, which are hydrolytic enzymes that attack the ester-type bonds within the phospholipid molecule. The book distinguishes four types by exactly where they cut, using phosphatidylcholine, or lecithin, as the worked example. Phospholipase A1 and phospholipase A2 each cleave one of the two fatty-acid ester bonds — A1 at the first position, A2 at the second, which in the figure is drawn as the chain carrying a double bond. The other two enzymes work on the phosphate end of the molecule: phospholipase C cleaves the bond between the glycerol backbone and the phosphate group, while phospholipase D cleaves the bond on the far side of that phosphate, right next to the choline head group.",
    checklist: [
      "Stated complex lipids are mainly membrane components, degraded in the cytoplasm",
      "Named phospholipases as the hydrolytic enzymes acting on phospholipids",
      "Distinguished all four types by site of action: A1, A2, C, D",
      "Correctly paired A1/A2 with the two fatty-acid ester bonds",
      "Correctly paired C/D with the two bonds flanking the phosphate group",
      "Named phosphatidylcholine (lecithin) as the book's worked example"
    ]
  }
},

{
  id: "8-4-2-2",
  book: "cz",
  topicKey: "working-with-lipids",
  chapter: 8,
  section: "8.4.2",
  czTitle: "Složené lipidy — sfingolipidy (sfingomyelin, gangliosid)",
  enTitle: "Complex lipids — sphingolipids (sphingomyelin, ganglioside)",
  cnTitle: "复合脂质——鞘脂类（鞘磷脂、神经节苷脂）",
  pages: [194],
  coverage: "full",
  coverageNote: "Full text and figures on page 194 covering sphingolipid degradation read directly: the sphingomyelin/ganglioside structural diagram with all six numbered enzyme arrows (1-6) verified by a zoomed re-read, through the ceramide-hydrolysis pathway diagram (ceramidase -> fatty acid + sphingosine -> sphingosine-1-phosphate -> ethanolamine-phosphate + palmitaldehyde -> palmitate). One nuance worth flagging for exam accuracy (not a contradiction within the book, since nothing elsewhere in this chapter disputes it): the book's own diagram draws the final two sphingosine-breakdown products as the fully saturated 'palmitaldehyd' and 'palmitát', even though sphingosine itself carries a trans C4-C5 double bond that, in many other biochemistry sources, is described as surviving into an unsaturated product (hexadecenal / hexadecenoate) at this step — presented here exactly as the book's own diagram labels it.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.2 鞘脂分解与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "Sphingolipid degradation is chain reaction: one enzyme cuts, exposing attachment site for next. If enzyme missing, chain stops, molecule accumulates.", cn: "鞘脂降解是连锁反应：一个酶切割，暴露下一个酶位点。酶缺失则链停，分子积累。" },
  summary: {
    en: "Sphingolipids (sphingomyelins and gangliosides) are gradually broken down by a series of cytoplasmic hydrolytic enzymes down to their basic building blocks: ceramide, phosphorylcholine, and monosaccharides. The book diagrams two examples. Sphingomyelin is CERAMIDE linked to PHOSPHOCHOLINE; a single enzyme, sphingomyelinase, cleaves that link, releasing ceramide and phosphocholine. A ganglioside is CERAMIDE linked in sequence to glucose, galactose (which itself carries a branching N-acetylneuraminic acid, NeuNAc/sialic acid), N-acetylgalactosamine, and a terminal galactose; degradation proceeds terminal-sugar-first, back toward the ceramide: β-galactosidase removes the terminal galactose, β-N-acetyl-galactosidase removes the N-acetylgalactosamine, N-acetylneuraminidase (a sialidase) removes the branching NeuNAc, the same β-galactosidase removes the next galactose, and finally β-glucosidase removes the glucose, leaving ceramide. Ceramide itself can then be further hydrolyzed by ceramidase (with water) into a free fatty acid — which is then degraded by beta-oxidation, see 8.4.4 — and sphingosine. Sphingosine, after ATP-dependent activation by a kinase, becomes sphingosine-1-phosphate, which is then cleaved into ethanolamine-phosphate plus palmitaldehyde; an oxidase then converts palmitaldehyde to palmitate.",
    cn: "鞘脂类（鞘磷脂和神经节苷脂）由一系列细胞质水解酶逐步分解为其基本构件：神经酰胺、磷酸胆碱和单糖。教材给出了两个示例。鞘磷脂是神经酰胺连接磷酸胆碱；单一的酶——鞘磷脂酶断裂这一连接，释放出神经酰胺和磷酸胆碱。神经节苷脂则是神经酰胺依次连接葡萄糖、半乳糖（其上还带有支链的N-乙酰神经氨酸NeuNAc/唾液酸）、N-乙酰半乳糖胺，以及末端的半乳糖；降解从末端糖开始、朝神经酰胺方向进行：β-半乳糖苷酶先切除末端半乳糖，β-N-乙酰半乳糖苷酶切除N-乙酰半乳糖胺，N-乙酰神经氨酸酶（唾液酸酶）切除支链的NeuNAc，同一种β-半乳糖苷酶再切除下一个半乳糖，最后β-葡萄糖苷酶切除葡萄糖，留下神经酰胺。神经酰胺本身还能被神经酰胺酶进一步水解（加水）为游离脂肪酸——该脂肪酸随后经β-氧化分解，见8.4.4节——和鞘氨醇。鞘氨醇经激酶催化的ATP依赖性活化后变为鞘氨醇-1-磷酸，后者再被裂解为磷酸乙醇胺和棕榈醛；一种氧化酶再将棕榈醛转化为棕榈酸。"
  },
  points: [
    { cz: "sfingolipidy → ceramid + fosforylcholin + monosacharidy", en: "Sphingolipids (sphingomyelins and gangliosides) are gradually degraded by a series of cytoplasmic hydrolytic enzymes to their basic building blocks: CERAMIDE, PHOSPHORYLCHOLINE, and MONOSACCHARIDES.", cn: "鞘脂类（鞘磷脂和神经节苷脂）由一系列细胞质水解酶逐步分解为其基本构件：神经酰胺、磷酸胆碱和单糖。" },
    { cz: "sfingomyelin: ceramid-P-cholin, štěpí sfingomyelinasa (enzym 1)", en: "Sphingomyelin = ceramide-phosphate-choline; a single enzyme, SPHINGOMYELINASE (enzyme '1' in the figure), cleaves the ceramide-phosphate bond, releasing ceramide + phosphocholine.", cn: "鞘磷脂＝神经酰胺-磷酸-胆碱；单一的酶——鞘磷脂酶（图中标号“1”）断裂神经酰胺与磷酸之间的键，释放神经酰胺和磷酸胆碱。" },
    { cz: "gangliosid: ceramid-Glc-Gal(-NeuNAc)-GalNAc-Gal, 5 enzymů (2-6)", en: "Ganglioside = ceramide-glucose-galactose(-branching NeuNAc)-N-acetylgalactosamine-galactose. Degradation proceeds from the non-reducing (terminal) end inward, enzyme by enzyme: β-galactosidase (enzymes '3' and '5', the same enzyme acting at two positions) removes both terminal and internal galactose, β-N-acetyl-galactosidase ('4') removes N-acetylgalactosamine, N-acetylneuraminidase ('6', a sialidase) removes the branching NeuNAc, and β-glucosidase ('2') removes glucose, leaving ceramide.", cn: "神经节苷脂＝神经酰胺-葡萄糖-半乳糖（-支链NeuNAc）-N-乙酰半乳糖胺-半乳糖。降解从非还原端（末端）开始、逐酶向内进行：β-半乳糖苷酶（图中标号“3”和“5”，同一种酶作用于两个位置）切除末端和内部的半乳糖，β-N-乙酰半乳糖苷酶（“4”）切除N-乙酰半乳糖胺，N-乙酰神经氨酸酶（“6”，一种唾液酸酶）切除支链的NeuNAc，β-葡萄糖苷酶（“2”）切除葡萄糖，最终留下神经酰胺。" },
    { cz: "ceramid + H2O --ceramidasa--> mastná kyselina + sfingosin", en: "Ceramide can be further hydrolyzed by CERAMIDASE (with water) into a free FATTY ACID and SPHINGOSINE. The fatty acid is then degraded via beta-oxidation (see 8.4.4).", cn: "神经酰胺可被神经酰胺酶进一步水解（加水）为游离脂肪酸和鞘氨醇。该脂肪酸随后经β-氧化分解（见8.4.4节）。" },
    { cz: "sfingosin --ATP/kinasa--> sfingosin-P --> ethanolamin-P + palmitaldehyd --oxidasa--> palmitát", en: "Sphingosine, after ATP-dependent activation by a kinase, becomes SPHINGOSINE-PHOSPHATE, which is then cleaved into ETHANOLAMINE-PHOSPHATE plus PALMITALDEHYDE; an oxidase then converts palmitaldehyde to PALMITATE.", cn: "鞘氨醇经激酶催化的ATP依赖性活化后变为鞘氨醇磷酸，后者被裂解为磷酸乙醇胺和棕榈醛；氧化酶再将棕榈醛转化为棕榈酸。" }
  ],
  gapPoints: [
    { en: "Standard course knowledge, not stated on this book page: deficiencies in specific sphingolipid-degrading enzymes shown in this pathway cause the classic sphingolipid storage diseases — e.g. sphingomyelinase deficiency underlies Niemann-Pick disease, and deficiency of the hexosaminidase acting on ganglioside GM2 (analogous to the β-N-acetyl-galactosidase step shown here) underlies Tay-Sachs disease.", cn: "标准课程知识、本书页面未直接说明：该降解途径中特定鞘脂降解酶的缺陷会导致经典的鞘脂贮积病——例如鞘磷脂酶缺陷导致尼曼-匹克病，作用于神经节苷脂GM2的己糖胺酶（与本图中β-N-乙酰半乳糖苷酶步骤类似）缺陷导致泰-萨克斯病。" }
  ],
  terms: [
    { cz: "ceramid", en: "ceramide", cn: "神经酰胺", def_en: "The common structural core of sphingolipids (sphingosine + fatty acid amide-linked); the end product of sphingolipid degradation before further hydrolysis by ceramidase.", def_cn: "鞘脂类共同的结构核心（鞘氨醇与脂肪酸以酰胺键相连）；是鞘脂降解、进一步被神经酰胺酶水解之前的终产物。" },
    { cz: "sfingomyelinasa", en: "sphingomyelinase", cn: "鞘磷脂酶", def_en: "The enzyme cleaving sphingomyelin into ceramide and phosphocholine.", def_cn: "将鞘磷脂分解为神经酰胺和磷酸胆碱的酶。" },
    { cz: "N-acetylneuraminidasa", en: "N-acetylneuraminidase (sialidase)", cn: "N-乙酰神经氨酸酶（唾液酸酶）", def_en: "The enzyme removing the branching NeuNAc (sialic acid) residue from a ganglioside.", def_cn: "从神经节苷脂上切除支链NeuNAc（唾液酸）残基的酶。" },
    { cz: "ceramidasa", en: "ceramidase", cn: "神经酰胺酶", def_en: "The hydrolytic enzyme splitting ceramide into a free fatty acid and sphingosine.", def_cn: "将神经酰胺水解为游离脂肪酸和鞘氨醇的水解酶。" },
    { cz: "sfingosin", en: "sphingosine", cn: "鞘氨醇", def_en: "The amino-alcohol backbone of sphingolipids, released from ceramide by ceramidase; after ATP-dependent phosphorylation, cleaved to ethanolamine-phosphate and palmitaldehyde/palmitate.", def_cn: "鞘脂类的氨基醇骨架，由神经酰胺酶从神经酰胺中释放；经ATP依赖性磷酸化后，被裂解为磷酸乙醇胺和棕榈醛/棕榈酸。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the book's ganglioside degradation diagram, which direction does degradation proceed, and which sugar is removed last?",
      q_cn: "在教材的神经节苷脂降解图中，降解的方向是怎样的？最后被切除的糖是什么？",
      options: [
        "From ceramide outward toward the terminal sugar; the terminal galactose is removed last",
        "From the terminal (non-reducing) end inward toward ceramide; glucose is removed last",
        "Randomly, with no defined order; NeuNAc is always removed last",
        "From the middle of the chain outward in both directions simultaneously"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The direction is reversed. The enzymes work inward from the non-reducing end, and the last sugar to go is the glucose sitting directly on the ceramide, removed by β-glucosidase.", cn: "方向反了。这些酶是从非还原端往里做的，最后离开的糖是直接连在 ceramide 上的 glucose，由 β-glucosidase 移走。" },
        2: { en: "There is a defined order, and it matters: each enzyme exposes the site the next one needs, so a missing enzyme stops the chain at one point and lets that molecule pile up. NeuNAc sits on a branch off the GalNAc and comes off by sialidase along the way.", cn: "顺序是确定的，而且这很关键：每个酶都为下一个酶暴露出作用位点，所以缺了某个酶，链条就在那一点停住，那个分子随之堆积。NeuNAc 长在 GalNAc 的支链上，途中由 sialidase 摘掉。" },
        3: { en: "Degradation runs from one end only. Five enzymes act in sequence along the ganglioside's sugar chain, with β-galactosidase doing duty at two different positions rather than the chain being opened in the middle.", cn: "降解只从一端进行。五个酶沿 ganglioside 的糖链依次作用，其中 β-galactosidase 在两个不同位置各干一次，而不是从链的中间打开。" }
      },
      why_en: "The enzymes act from the terminal (non-reducing) end of the sugar chain inward, ending with β-glucosidase removing the glucose residue directly attached to ceramide, which leaves free ceramide as the final product of this stage.",
      why_cn: "各酶从糖链的末端（非还原端）向内依次作用，最后由β-葡萄糖苷酶切除直接连接神经酰胺的葡萄糖残基，从而在这一阶段留下游离的神经酰胺作为终产物。"
    },
    {
      type: "mcq",
      q_en: "What two products does ceramidase generate from ceramide, and what happens to each afterward per the book?",
      q_cn: "神经酰胺酶从神经酰胺中生成哪两种产物？根据教材，之后各自经历什么变化？",
      options: [
        "Glucose and galactose, both re-entering the sugar pathways after their glycosidases have removed them from the chain",
        "Free fatty acid and sphingosine; the fatty acid undergoes beta-oxidation, sphingosine is phosphorylated and cleaved to ethanolamine-phosphate and palmitaldehyde/palmitate",
        "Phosphocholine and ceramide, released by sphingomyelinase; the phosphocholine is excreted unchanged and the ceramide goes straight back into membrane synthesis without any further cleavage",
        "NeuNAc and sphingosine; the NeuNAc is removed by a sialidase and the sphingosine oxidised directly to palmitate without any phosphorylation"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The sugars do come off, but earlier and by different enzymes: β-glucosidase, β-galactosidase and β-N-acetyl-galactosidase strip the whole chain before ceramide is reached. Ceramidase acts on what is left after that.", cn: "糖确实会脱下来，但更早，而且由别的酶来做：β-glucosidase、β-galactosidase 和 β-N-acetyl-galactosidase 先把整条糖链剥光，才轮到 ceramide。Ceramidase 处理的是剩下的那部分。" },
        2: { en: "This is sphingomyelinase's reaction, one step upstream: it cleaves the ceramide-phosphate bond to give ceramide plus phosphocholine. Ceramidase then takes that same ceramide apart further, which is what the question asks about.", cn: "这是上一步 sphingomyelinase 的反应：它切开 ceramide 与磷酸之间的键，给出 ceramide 加 phosphocholine。随后 ceramidase 再把这个 ceramide 继续拆开——题目问的正是后者。" },
        3: { en: "NeuNAc is removed by N-acetylneuraminidase from the branch on the GalNAc, long before ceramidase acts. And sphingosine is not oxidised directly: it is first phosphorylated by an ATP-dependent kinase, then cleaved.", cn: "NeuNAc 是由 N-acetylneuraminidase 从 GalNAc 的支链上摘掉的，远在 ceramidase 动手之前。而且 sphingosine 也不是直接被氧化的：它先由一个 ATP 依赖的 kinase 磷酸化，然后才被裂解。" }
      },
      why_en: "The book's diagram shows ceramide + H2O, via ceramidase, yielding a free fatty acid (further degraded by beta-oxidation) and sphingosine (phosphorylated by ATP/kinase, then cleaved to ethanolamine-phosphate and palmitaldehyde, oxidized to palmitate).",
      why_cn: "教材图示显示神经酰胺加H2O，经神经酰胺酶作用，生成游离脂肪酸（进一步经β-氧化分解）和鞘氨醇（经ATP/激酶磷酸化后，裂解为磷酸乙醇胺和棕榈醛，再氧化为棕榈酸）。"
    },
    {
      type: "short",
      q_en: "Describe the sphingomyelin degradation reaction and name its enzyme.",
      q_cn: "描述鞘磷脂的降解反应，并说出其酶的名称。",
      accept: ["sphingomyelinase", "ceramide", "phosphocholine", "鞘磷脂酶", "神经酰胺", "磷酸胆碱"],
      answer_en: "Sphingomyelinase cleaves sphingomyelin (ceramide-phosphate-choline) into ceramide and phosphocholine.",
      answer_cn: "鞘磷脂酶将鞘磷脂（神经酰胺-磷酸-胆碱）裂解为神经酰胺和磷酸胆碱。"
    }
  ],
  oral: {
    q_en: "Walk through how sphingolipids (sphingomyelin and ganglioside) are degraded down to their basic building blocks, per the book.",
    q_cn: "请根据教材，讲解鞘磷脂和神经节苷脂是如何逐步分解为基本构件的。",
    model_en: "Sphingolipids get taken apart gradually, by a whole series of cytoplasmic hydrolytic enzymes, down to their basic building blocks — ceramide, phosphorylcholine, and monosaccharides. Sphingomyelin is the simpler case: it's just ceramide linked to phosphocholine, and one enzyme, sphingomyelinase, cleaves that single bond to release both pieces. Gangliosides are more elaborate — ceramide carries a whole sugar chain: glucose, then galactose, which itself branches off to carry an N-acetylneuraminic acid, then N-acetylgalactosamine, then a final terminal galactose. Degrading that chain works from the outside in: a beta-galactosidase strips the terminal galactose, a beta-N-acetyl-galactosidase removes the N-acetylgalactosamine, an N-acetylneuraminidase — a sialidase — clips off the branching NeuNAc, that same beta-galactosidase removes the next galactose, and finally a beta-glucosidase removes the glucose, leaving bare ceramide. From there, ceramide itself isn't the end of the line — ceramidase can hydrolyze it further, with water, into a free fatty acid and sphingosine. The fatty acid goes on to beta-oxidation, which the book covers next. Sphingosine gets activated by ATP through a kinase into sphingosine-phosphate, which then splits into ethanolamine-phosphate on one side and palmitaldehyde on the other, and an oxidase finishes the job by converting that palmitaldehyde into palmitate.",
    checklist: [
      "Stated sphingolipids degrade stepwise to ceramide, phosphocholine, and monosaccharides",
      "Described sphingomyelin -> ceramide + phosphocholine via sphingomyelinase",
      "Walked through the ganglioside sugar chain and its 5 sequential enzymes (2,3,4,5,6)",
      "Named the branching NeuNAc removal by N-acetylneuraminidase",
      "Described ceramide -> fatty acid + sphingosine via ceramidase",
      "Traced sphingosine -> sphingosine-P -> ethanolamine-P + palmitaldehyde -> palmitate"
    ]
  }
},

{
  id: "8-4-3",
  book: "cz",
  topicKey: "cholesterol-and-isoprenoids",
  chapter: 8,
  section: "8.4.3",
  czTitle: "Odvozené lipidy",
  enTitle: "Derived lipids",
  cnTitle: "衍生脂质",
  pages: [194],
  coverage: "full",
  coverageNote: "Full text of '8.4.3 Odvozené lipidy' on page 194 read directly — a short, single-paragraph subsection.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.3 衍生脂质的代谢归宿与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "Terpenoids and steroids are the exception to 'everything eventually gets catabolised': as a rule the organism does NOT metabolise them for energy or building material at all. It excretes them, and the book says plainly that their further fate is not sufficiently mapped. Cholesterol leaves the animal body only after conversion to BILE ACIDS and their salts.", cn: "terpenoid 和 steroid 是「什么都会被分解掉」这条通则的例外：机体通常**根本不**把它们当能量或建筑材料代谢掉，而是排出体外，教材直言它们之后的去向没有被充分弄清。cholesterol 只有先转化成 BILE ACID 及其盐，才能离开动物体。" },
  summary: {
    en: "Derived lipids — all types of terpenoids, including steroids, synthesized in the cells of higher organisms (both animals and plants) — are, as a rule, NOT metabolized or used by these same organisms as a source of energy or carbon. Instead, they are excreted from the body, and their further fate is not sufficiently mapped; it is presumed that they may be used by heterotrophic bacteria. Cholesterol is a partial exception in terms of route: it is excreted from the animal body only after prior conversion to bile acids and their salts.",
    cn: "衍生脂质——包括类固醇在内的所有类型的萜类化合物，由高等生物（动植物）细胞合成——通常不会被这些生物自身用作能量或碳的来源进行代谢。相反，它们会被排出体外，其进一步的去向尚未被充分阐明，推测可能被异养细菌所利用。胆固醇在途径上是部分例外：它需先转化为胆汁酸及其盐，才能从动物体内排出。"
  },
  points: [
    { cz: "terpenoidy/steroidy — nejsou zdrojem energie/uhlíku", en: "All types of terpenoids, INCLUDING STEROIDS, synthesized in cells of higher organisms (animals and plants), are, as a rule, NOT metabolized or used by these organisms as a source of energy or carbon.", cn: "包括类固醇在内的所有类型的萜类化合物，由高等生物（动植物）细胞合成，通常不会被这些生物自身用作能量或碳的来源进行代谢。" },
    { cz: "vylučovány z těla, osud nezmapován", en: "They are excreted from the body; their further fate is not sufficiently mapped. It is presumed heterotrophic bacteria may utilize them.", cn: "它们会被排出体外，其进一步的去向尚未被充分阐明，推测可能被异养细菌所利用。" },
    { cz: "cholesterol → žlučové kyseliny/soli → vyloučení", en: "Cholesterol is excreted from the animal body only after prior conversion to BILE ACIDS and their salts.", cn: "胆固醇需先转化为胆汁酸及其盐，才能从动物体内排出。" }
  ],
  terms: [
    { cz: "odvozené lipidy", en: "derived lipids", cn: "衍生脂质", def_en: "The lipid class covering terpenoids and steroids; per this book, generally excreted rather than used as an energy/carbon source by the synthesizing organism.", def_cn: "涵盖萜类和类固醇的脂质类别；据教材所述，通常被排出体外，而不被合成它们的生物用作能量/碳来源。" },
    { cz: "žlučová kyselina", en: "bile acid", cn: "胆汁酸", def_en: "The conversion product of cholesterol that allows it to be excreted from the animal body.", def_cn: "胆固醇的转化产物，使其能够从动物体内排出。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book, what generally happens to terpenoids and steroids synthesized in the cells of higher organisms?",
      q_cn: "根据教材，高等生物细胞中合成的萜类和类固醇通常会发生什么？",
      options: [
        "They are metabolised as one of the cell's main sources of energy and carbon",
        "They are, as a rule, not metabolized for energy/carbon and are instead excreted from the body",
        "They are converted into triacylglycerols and laid down as the organism's storage fat",
        "They are degraded by beta-oxidation in the mitochondrial matrix, exactly as the fatty acids released from storage fat are"
      ],
      answer: 1,
      optionRefs: { 2: "8-3-5", 3: "8-4-4-2" },
      optionNotes: {
        0: { en: "This is the claim the book denies in so many words: as a rule these compounds are NOT metabolised or used as a source of energy or of carbon by the very organism that made them.", cn: "这正是教材明确否定的说法：一般而言，这些化合物并不被合成它们的生物体代谢，也不被用作能量或碳的来源。" },
        2: { en: "Triacylglycerol is the storage substance, and it is built from glycerol phosphate plus acyl-CoA. Nothing in this chapter converts a terpenoid ring system into one.", cn: "储存物质是 triacylglycerol，由 glycerol phosphate 加 acyl-CoA 搭起来。本章里没有任何一步把 terpenoid 的环系变成它。" },
        3: { en: "Beta-oxidation acts on fatty acids, and a terpenoid's fused ring system is not a fatty acid — there is no chain for it to shorten two carbons at a time. Cholesterol leaves as bile acids instead.", cn: "Beta-oxidation 作用的是脂肪酸，而 terpenoid 的稠环体系不是脂肪酸——没有链可以让它每次剪掉两个碳。Cholesterol 的去路是变成胆汁酸。" }
      },
      why_en: "The book states these compounds are, as a rule, not metabolized/used as an energy or carbon source by the synthesizing organism and are instead excreted, with their further fate (e.g. possible use by heterotrophic bacteria) not well mapped.",
      why_cn: "教材指出这些化合物通常不会被合成它们的生物用作能量或碳来源进行代谢，而是被排出体外，其进一步去向（例如可能被异养细菌利用）尚未被充分阐明。"
    },
    {
      type: "mcq",
      q_en: "How is cholesterol specifically excreted from the animal body, per the book?",
      q_cn: "根据教材，胆固醇具体是如何从动物体内排出的？",
      options: [
        "Directly and unmodified, filtered out by the kidneys",
        "After prior conversion to bile acids and their salts",
        "After conversion to acetyl-CoA, by mitochondrial beta-oxidation",
        "After conversion to the ketone body acetone"
      ],
      answer: 1,
      optionRefs: { 2: "8-4-4-2", 3: "8-4-4-3" },
      optionNotes: {
        0: { en: "The book puts the qualification in explicitly: cholesterol leaves the animal body ONLY after prior conversion. Being excreted unchanged is precisely what does not happen to it.", cn: "教材把限定条件写得很清楚：cholesterol 只有在先经过转化之后才离开动物体。原样排出恰恰是不会发生的。" },
        2: { en: "Beta-oxidation works on fatty acids, not on a fused ring system — cholesterol's steroid skeleton offers no chain for it to shorten, and its C17 side chain is only 8 to 10 carbons of branched hydrocarbon.", cn: "Beta-oxidation 处理的是脂肪酸，不是稠环体系——cholesterol 的 steroid 骨架没有可供剪短的链，它 C17 上的侧链也只有 8 到 10 个碳的支链烃。" },
        3: { en: "The ketone bodies are made from the acetyl-CoA of fatty-acid breakdown, not from cholesterol. They are a transport form of fuel, not an excretion route for a ring system.", cn: "酮体是由脂肪酸分解得到的 acetyl-CoA 生成的，不是由 cholesterol 生成的。它们是燃料的一种运输形式，不是环系的排泄途径。" }
      },
      why_en: "The book states cholesterol is excreted from the animal body only after prior conversion to bile acids and their salts — not directly, and not via the beta-oxidation/ketone-body pathway used for fatty acids.",
      why_cn: "教材指出胆固醇需先转化为胆汁酸及其盐，才能从动物体内排出——而不是直接排出，也不是经脂肪酸所用的β-氧化/酮体途径。"
    },
    {
      type: "short",
      q_en: "Contrast the metabolic fate of derived lipids (terpenoids/steroids) with that of fatty acids, per the book.",
      q_cn: "根据教材，对比衍生脂质（萜类/类固醇）与脂肪酸在代谢归宿上的不同。",
      accept: ["excrete", "energy", "carbon", "bile acid", "beta-oxidation", "排出", "能量", "碳", "胆汁酸", "β-氧化"],
      answer_en: "Fatty acids are actively catabolized for energy via beta-oxidation to acetyl-CoA (8.4.4), whereas derived lipids (terpenoids/steroids) are, as a rule, NOT used as an energy or carbon source — they are instead excreted, with cholesterol specifically requiring prior conversion to bile acids/salts before excretion.",
      answer_cn: "脂肪酸通过β-氧化被主动分解为乙酰辅酶A以获取能量（8.4.4节），而衍生脂质（萜类/类固醇）通常不被用作能量或碳来源——它们会被排出体外，其中胆固醇需先转化为胆汁酸/盐才能排出。"
    }
  ],
  oral: {
    q_en: "What does the book say happens to derived lipids (terpenoids and steroids) metabolically, and how is cholesterol excreted?",
    q_cn: "教材对衍生脂质（萜类和类固醇）的代谢归宿是怎么说的？胆固醇又是如何被排出的？",
    model_en: "Derived lipids cover all the terpenoids, steroids included, that get synthesized in the cells of higher organisms, both animals and plants — and the book is pretty clear that these organisms generally don't turn around and metabolize their own terpenoids/steroids as a source of energy or carbon. Instead they get excreted from the body, and honestly the book admits that what happens to them after that isn't well mapped out, though it's presumed heterotrophic bacteria might make use of them. Cholesterol gets a specific mention as the one case spelled out in more detail: it isn't excreted as-is, it first has to be converted into bile acids and their salts, and only then does it leave the animal body.",
    checklist: [
      "Defined derived lipids as terpenoids including steroids",
      "Stated they are, as a rule, not used as an energy/carbon source by the synthesizing organism",
      "Noted they are excreted, fate not well mapped, presumed use by heterotrophic bacteria",
      "Named cholesterol's specific excretion route: conversion to bile acids/salts first"
    ]
  }
},

{
  id: "8-4-4-1",
  book: "cz",
  topicKey: "fat-mobilization",
  chapter: 8,
  section: "8.4.4",
  czTitle: "Mastné kyseliny — aktivace",
  enTitle: "Fatty acids — activation",
  cnTitle: "脂肪酸——活化",
  pages: [194, 195],
  coverage: "full",
  coverageNote: "Text opening '8.4.4 Mastné kyseliny' at the bottom of page 194 (the requirement for activation before entering metabolic pathways) read directly, plus the two-step activation reaction diagram at the top of page 195 (1.stupeň / 2.stupeň, the bracketed acyladenylate intermediate, the thiokinase-labeled arrow, PPi and AMP release) verified by direct re-read of the scan.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.4 脂肪酸活化与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "A fatty acid enters NO pathway, catabolic or anabolic, until it has been activated to a thioester with coenzyme A. The book gives that activation in two steps through an acyladenylate intermediate — drawn bracketed, because it is transient — with pyrophosphate released on the way and the enzyme named as thiokinase. Free fatty acid in, activated fatty acid (acyl-CoA) out.", cn: "脂肪酸在活化成与 coenzyme A 的硫酯之前，进不了任何代谢途径，无论分解还是合成。教材把活化拆成两步，中间经过一个 acyladenylate 中间体——图上用方括号标出，因为它是瞬时的——过程中释放 pyrophosphate，酶被称作 thiokinase。进去的是游离脂肪酸，出来的是活化脂肪酸（acyl-CoA）。" },
  lehNotes: [
    { kind: "gap", node: "L-17-2-1",
      en: "The Czech account of fatty acid activation and transport never mentions CARNITINE - a text search of this node finds no carnitine, karnitin or shuttle. Yet Lehninger 17.2 makes 'the three-step carnitine shuttle' (A p.613) the committed, rate-limiting step of fatty acid oxidation: it decides whether a cytosolic fatty acyl-CoA is burned in mitochondria or esterified into fat in the cytosol, and it is the point at which malonyl-CoA shuts oxidation down. Asked what controls fatty acid oxidation, this node supplies no answer at all.",
      cn: "捷克教材关于脂肪酸活化与转运的讲述从未提到肉碱——对本节点做文本检索，carnitine、karnitin、shuttle 一个都找不到。而 Lehninger 17.2 把「三步肉碱穿梭」（A 第613页）当作脂肪酸氧化的承诺步骤和限速步骤：它决定胞质中的脂酰辅酶A是在线粒体中被燃烧、还是在胞质中被酯化成脂肪，也正是丙二酰辅酶A关闭氧化的作用点。若被问到脂肪酸氧化受什么控制，本节点给不出任何答案。" },
  ],
  summary: {
    en: "Before free fatty acids can be incorporated into any metabolic pathway — anabolic or catabolic alike — they must first be ACTIVATED, meaning converted into a thioester form with coenzyme A. Activation proceeds in two steps by way of an acyladenylate intermediate. In step 1, the free fatty acid (RCH₂COO⁻) reacts with ATP and CoASH; this passes through an unstable, bracketed intermediate, RCH₂CO-AMP (an acyl-adenylate), releasing inorganic pyrophosphate (PPi). In step 2, that intermediate reacts further with CoASH — catalyzed by an enzyme the book labels 'thiokinasa' — to give the activated fatty acid, RCH₂CO~SCoA (an acyl-CoA thioester), releasing AMP. Net result: free fatty acid + ATP + CoASH → activated fatty acid (acyl-CoA) + AMP + PPi.",
    cn: "游离脂肪酸在进入任何代谢途径——无论是合成代谢还是分解代谢——之前，都必须先被活化，即转化为与辅酶A结合的硫酯形式。活化经由一个酰基腺苷酸中间体，分两步完成。第一步，游离脂肪酸（RCH₂COO⁻）与ATP和CoASH反应；反应经过一个不稳定的、图中以括号标出的中间体RCH₂CO-AMP（酰基腺苷酸），并释放出无机焦磷酸（PPi）。第二步，该中间体进一步与CoASH反应——由教材标注为“thiokinasa”（硫激酶）的酶催化——生成活化的脂肪酸RCH₂CO~SCoA（酰基辅酶A硫酯），并释放AMP。净反应为：游离脂肪酸 + ATP + CoASH → 活化脂肪酸（酰基辅酶A）+ AMP + PPi。"
  },
  points: [
    { cz: "aktivace = převod na thioester s CoA", en: "Free fatty acids must be ACTIVATED before entering any metabolic pathway (anabolic or catabolic) — i.e. converted to a thioester form with coenzyme A.", cn: "游离脂肪酸在进入任何代谢途径（合成或分解代谢）之前，都必须先被活化——即转化为与辅酶A结合的硫酯形式。" },
    { cz: "2 stupně přes acyladenylátový meziprodukt", en: "Activation proceeds in TWO STEPS by way of an acyladenylate intermediate, RCH₂CO-AMP (shown bracketed in the book's diagram to mark it as unstable/transient).", cn: "活化经由一个酰基腺苷酸中间体RCH₂CO-AMP（教材图中以括号标出，表示其不稳定/瞬时性）分两步完成。" },
    { cz: "1.stupeň: RCH2COO- + ATP + CoASH → [RCH2CO-AMP] + PPi", en: "Step 1: the free fatty acid (RCH₂COO⁻) reacts with ATP and CoASH, forming the acyladenylate intermediate and releasing inorganic PYROPHOSPHATE (PPi).", cn: "第一步：游离脂肪酸（RCH₂COO⁻）与ATP和CoASH反应，形成酰基腺苷酸中间体，并释放无机焦磷酸（PPi）。" },
    { cz: "2.stupeň: [RCH2CO-AMP] + CoASH --thiokinasa--> RCH2CO~SCoA + AMP", en: "Step 2: the intermediate reacts with a further CoASH — catalyzed by the enzyme the book labels 'thiokinasa' (thiokinase / acyl-CoA synthetase) — yielding the ACTIVATED fatty acid (acyl-CoA thioester) and releasing AMP.", cn: "第二步：中间体与另一分子CoASH反应——由教材标注为“thiokinasa”（硫激酶／酰基辅酶A合成酶）的酶催化——生成活化的脂肪酸（酰基辅酶A硫酯），并释放AMP。" },
    { cz: "voľná m.k. vs aktivovaná m.k.", en: "The book's figure explicitly labels the starting material 'volná m.k.' (free fatty acid) and the end product 'aktivovaná m.k.' (activated fatty acid), visually bracketing the whole two-step process.", cn: "教材图中明确将起始物标注为“volná m.k.”（游离脂肪酸），终产物标注为“aktivovaná m.k.”（活化脂肪酸），直观地框定了整个两步过程。" }
  ],
  terms: [
    { cz: "aktivace mastné kyseliny", en: "fatty acid activation", cn: "脂肪酸活化", def_en: "The two-step, ATP- and CoASH-dependent conversion of a free fatty acid into its CoA thioester, required before it can enter any metabolic pathway.", def_cn: "游离脂肪酸转化为其辅酶A硫酯的两步反应，依赖ATP和CoASH，是脂肪酸进入任何代谢途径前的必要步骤。" },
    { cz: "acyladenylát", en: "acyladenylate", cn: "酰基腺苷酸", def_en: "The unstable intermediate (RCH₂CO-AMP) formed in step 1 of fatty acid activation.", def_cn: "脂肪酸活化第一步生成的不稳定中间体（RCH₂CO-AMP）。" },
    { cz: "thiokinasa", en: "thiokinase (acyl-CoA synthetase)", cn: "硫激酶（酰基辅酶A合成酶）", def_en: "The enzyme, per the book's own label, catalyzing step 2 of fatty acid activation (acyladenylate + CoASH -> acyl-CoA + AMP).", def_cn: "据教材标注，催化脂肪酸活化第二步（酰基腺苷酸+CoASH→酰基辅酶A+AMP）的酶。" },
    { cz: "aktivovaná mastná kyselina (acyl-CoA)", en: "activated fatty acid (acyl-CoA)", cn: "活化脂肪酸（酰基辅酶A）", def_en: "The CoA-thioester end product of fatty acid activation, the form in which fatty acids enter metabolic pathways.", def_cn: "脂肪酸活化的终产物——辅酶A硫酯，是脂肪酸进入代谢途径的形式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why must free fatty acids be activated before they can be catabolized or used in biosynthesis, and what does 'activation' mean chemically?",
      q_cn: "为什么游离脂肪酸在被分解或用于生物合成之前必须先被活化？“活化”在化学上指的是什么？",
      options: [
        "To make them water-soluble by attaching a phosphate group to the carboxyl, as glycerol is when it enters lipid biosynthesis",
        "To convert them to a thioester form with coenzyme A so they can enter metabolic pathways",
        "To convert them into ketone bodies, the form in which the liver sends them out",
        "To bind them to albumin, so that free acid never accumulates in the cell"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-5", 2: "8-4-4-3" },
      optionNotes: {
        0: { en: "Phosphate is glycerol's activation, not the fatty acid's — glycerol enters lipid synthesis as glycerol phosphate. And the point of activating an acid is not solubility but the reactive thioester bond it ends up carrying.", cn: "磷酸化是 glycerol 的活化方式，不是脂肪酸的——glycerol 是以 glycerol phosphate 的形式进入脂类合成的。而活化一个酸的意义也不在于溶解度，而在于它最后带上的那个高活性硫酯键。" },
        2: { en: "Ketone bodies are made from acetyl-CoA after beta-oxidation has already run, in the liver, and only when there is a surplus. They lie downstream of activation, not in place of it.", cn: "酮体是在 beta-oxidation 已经跑完之后、由 acetyl-CoA 在肝脏生成的，而且只在有富余时才生成。它们位于活化的下游，不是活化的替代品。" },
        3: { en: "Albumin appears nowhere in this account. The two steps the book gives are: fatty acid + ATP + CoASH → acyladenylate + PPi, then acyladenylate + CoASH → acyl-CoA + AMP.", cn: "教材这一段里从未出现过 albumin。它给的两步是：脂肪酸 + ATP + CoASH → acyladenylate + PPi，然后 acyladenylate + CoASH → acyl-CoA + AMP。" }
      },
      why_en: "The book states free fatty acids must be activated, i.e. converted to a thioester form with coenzyme A, before their incorporation into any metabolic (anabolic or catabolic) pathway.",
      why_cn: "教材指出游离脂肪酸必须先被活化，即转化为与辅酶A结合的硫酯形式，才能进入任何（合成或分解）代谢途径。"
    },
    {
      type: "mcq",
      q_en: "What is released in step 1 versus step 2 of fatty acid activation, per the book's diagram?",
      q_cn: "根据教材图示，脂肪酸活化的第一步和第二步分别释放什么？",
      options: [
        "Step 1 releases AMP while forming the acyladenylate intermediate; step 2 releases PPi while forming the activated acyl-CoA",
        "Step 1 releases PPi (forming the acyladenylate intermediate); step 2 releases AMP (forming the activated acyl-CoA)",
        "Both steps release ATP, which is regenerated from the thioester bond",
        "Step 1 releases CoASH; step 2 releases the fatty acid unchanged, CoA acting only catalytically"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The two leaving groups are swapped. AMP cannot come off first, because AMP is precisely what stays behind in the acyladenylate — the name says so. What is cut away from ATP to form it is pyrophosphate.", cn: "两个离去基团调换了。AMP 不可能先走，因为留在 acyladenylate 里的正是 AMP——名字本身就说明了这一点。从 ATP 上切下来形成它的，是焦磷酸。" },
        2: { en: "ATP is consumed here, not released, and it is spent once, at step 1. The energy taken from it ends up stored in the thioester bond of the finished acyl-CoA.", cn: "这里 ATP 是被消耗、不是被释放的，而且只在第 1 步消耗一次。从它取走的能量最后存进了做好的 acyl-CoA 的硫酯键里。" },
        3: { en: "CoASH enters at both steps rather than leaving, and the fatty acid does not come out unchanged — the entire purpose of the sequence is that it leaves as a thioester, which is what activation means.", cn: "CoASH 在两步里都是进来的，不是出去的；脂肪酸也不会原样出来——整个过程的目的就是让它以硫酯的形式离开，所谓活化就是这个意思。" }
      },
      why_en: "The book's diagram shows step 1 (fatty acid + ATP + CoASH) releasing pyrophosphate (PPi) while forming the acyladenylate intermediate, and step 2 (intermediate + CoASH, via thiokinase) releasing AMP while forming the activated acyl-CoA.",
      why_cn: "教材图示显示第一步（脂肪酸+ATP+CoASH）释放焦磷酸（PPi）并形成酰基腺苷酸中间体，第二步（中间体+CoASH，经硫激酶催化）释放AMP并形成活化的酰基辅酶A。"
    },
    {
      type: "short",
      q_en: "Write the overall (net) reaction for fatty acid activation, naming the enzyme.",
      q_cn: "写出脂肪酸活化的总反应式，并注明酶的名称。",
      accept: ["ATP", "CoASH", "AMP", "PPi", "thiokinase", "acyl-CoA", "硫激酶", "酰基辅酶A"],
      answer_en: "Free fatty acid + ATP + CoASH, catalyzed by thiokinase via an acyladenylate intermediate, yields activated fatty acid (acyl-CoA) + AMP + PPi.",
      answer_cn: "游离脂肪酸 + ATP + CoASH，经硫激酶催化、通过酰基腺苷酸中间体，生成活化脂肪酸（酰基辅酶A）+ AMP + PPi。"
    }
  ],
  oral: {
    q_en: "Explain the two-step activation of free fatty acids before they enter metabolic pathways.",
    q_cn: "请解释游离脂肪酸在进入代谢途径之前的两步活化过程。",
    model_en: "Before a free fatty acid can be used anywhere in metabolism, whether that's being built into something or broken down for energy, it has to be activated first — meaning it gets converted into a thioester with coenzyme A. The book shows this happening in two steps, through an intermediate called an acyladenylate. In the first step, the free fatty acid reacts with ATP and CoASH, and what you get is this quite unstable intermediate, an acyl-AMP, with inorganic pyrophosphate released as a byproduct. Then in the second step, that intermediate reacts with another molecule of CoASH — the book calls the enzyme responsible thiokinase — and that finally produces the activated fatty acid, the acyl-CoA thioester, releasing AMP this time instead of pyrophosphate. So overall, one free fatty acid plus ATP plus CoASH gives you one activated acyl-CoA, plus AMP and pyrophosphate as the energetic cost of getting there.",
    checklist: [
      "Stated activation converts free FA to a CoA thioester",
      "Named the two-step, acyladenylate-intermediate mechanism",
      "Step 1: FA + ATP + CoASH -> acyladenylate + PPi",
      "Step 2: acyladenylate + CoASH -> acyl-CoA + AMP, via thiokinase",
      "Gave the net reaction and noted it's a prerequisite for both anabolic and catabolic use"
    ]
  }
},

{
  id: "8-4-4-2",
  book: "cz",
  topicKey: "fatty-acid-oxidation",
  chapter: 8,
  section: "8.4.4",
  czTitle: "Mastné kyseliny — mechanismus β-oxidace",
  enTitle: "Fatty acids — the beta-oxidation mechanism",
  cnTitle: "脂肪酸——β-氧化机制",
  pages: [195, 196],
  coverage: "full",
  coverageNote: "The general beta-oxidation paragraph and the stearic-acid stoichiometry on page 195, plus the full page-196 mechanism diagram (steps A-E), read and cross-checked directly. FLAGGED DISCREPANCY: the page-196 figure labels the enzyme for step D (thiolytic cleavage, releasing acetyl-CoA via addition of CoASH) as 'β-ketokinasa'. This is almost certainly a mislabeling internal to the book's own figure: standard biochemical nomenclature calls this enzyme thiolase / β-ketothiolase / acetyl-CoA acyltransferase, and the reaction the figure itself draws (addition of CoASH, thiolytic C-C bond cleavage, no ATP or phosphate transfer anywhere in the step) is not a kinase reaction at all — a 'kinase' by definition transfers a phosphate group, which does not happen here. The figure's own chemistry contradicts its own enzyme-name label; this content uses the book's structures/mechanism (which are internally consistent and standard) while flagging the name as unreliable and giving the standard name instead.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.4 β-氧化机制与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "Beta-oxidation is four-step cycle removing two carbons per loop as acetyl-CoA. Energy in both reduced cofactors and acetyl-CoA.", cn: "β-氧化是四步循环每周期移除两碳为乙酰-CoA。能量在还原辅酶和乙酰-CoA两者。" },
  summary: {
    en: "Fatty acids are degraded by sequential removal of two-carbon units (acetyls, as CH₃COO⁻) starting from the carboxyl end of the molecule — a process named BETA-OXIDATION because it reflects the underlying biochemistry (oxidation occurring at the beta carbon). In eukaryotic cells, beta-oxidation is localized to the mitochondrial matrix, which contains all four enzymes needed to run one full cycle of degradation (shortening the hydrocarbon chain by two carbons). The four-step cycle, per the book's own diagram: (A) DEHYDROGENATION by acyl-CoA dehydrogenase (FAD→FADH₂), which produces only the TRANS double-bond isomer; (B) HYDRATION by enoyl-CoA hydratase (requires the trans isomer as substrate; adds H₂O; produces only the L-stereoisomer of the resulting hydroxyacyl-CoA); (C) DEHYDROGENATION by β-hydroxyacyl-CoA dehydrogenase (requires the L-isomer; NAD⁺→NADH(H⁺)), giving a β-ketoacyl-CoA; and (D) THIOLYTIC CLEAVAGE, which adds a molecule of CoASH and splits off one acetyl-CoA, leaving an acyl-CoA shortened by two carbons (the book's own figure names this enzyme 'β-ketokinasa', but see the coverage note — the standard name is thiolase/β-ketothiolase, not a kinase). Step (E) is simply repetition of A-D on the shortened acyl-CoA. Worked example: stearic acid (an 18-carbon fatty acid, as stearoyl-CoA) is fully degraded in 8 cycles, yielding 9 molecules of acetyl-CoA: CH₃(CH₂)₁₆CO-CoA + 8 FAD + 8 NAD⁺ + 8 H₂O + 8 CoASH → 9 CH₃CO-CoA + 8 FADH₂ + 8 NADH + 8 H⁺.",
    cn: "脂肪酸的分解是从分子的羧基端开始，依次去除二碳单位（以乙酰基CH₃COO⁻的形式）——这一过程被命名为β-氧化，因为它反映了其生物化学本质（氧化发生在β碳上）。在真核细胞中，β-氧化定位于线粒体基质，基质中含有完成一轮完整降解循环（碳链缩短两个碳）所需的全部四种酶。根据教材图示，四步循环为：（A）脱氢——由酰基辅酶A脱氢酶催化（FAD→FADH₂），只生成反式双键异构体；（B）水合——由烯酰辅酶A水合酶催化（要求底物为反式异构体；加H₂O；只生成L型的羟酰基辅酶A）；（C）脱氢——由β-羟酰基辅酶A脱氢酶催化（要求L型异构体；NAD⁺→NADH(H⁺)），生成β-酮酰基辅酶A；（D）硫解裂解——加入一分子CoASH，裂解出一分子乙酰辅酶A，留下缩短两个碳的酰基辅酶A（教材图中将此酶标注为“β-ketokinasa”，但见coverageNote——标准名称应为硫解酶/β-酮硫解酶，而非“激酶”）。（E）步骤即对缩短后的酰基辅酶A重复A-D。实例：硬脂酸（18碳脂肪酸，以硬脂酰辅酶A形式）经8轮循环完全分解，生成9分子乙酰辅酶A：CH₃(CH₂)₁₆CO-CoA + 8 FAD + 8 NAD⁺ + 8 H₂O + 8 CoASH → 9 CH₃CO-CoA + 8 FADH₂ + 8 NADH + 8 H⁺。"
  },
  points: [
    { cz: "β-oxidace = postupné odstraňování acetylů z karboxylového konce", en: "Fatty acids are degraded by sequential removal of two-carbon acetyl units (CH₃COO⁻) from the CARBOXYL end of the molecule; the name 'beta-oxidation' reflects the biochemistry (oxidation at the beta carbon).", cn: "脂肪酸的分解是从分子羧基端开始，依次去除二碳乙酰单位（CH₃COO⁻）；“β-氧化”这一名称反映了其生化本质（氧化发生在β碳上）。" },
    { cz: "lokalizace: matrix mitochondrií, 4 enzymy na 1 cyklus", en: "In eukaryotic cells, beta-oxidation is localized to the MITOCHONDRIAL MATRIX, which contains all 4 enzymes needed to run one full cycle (shortening the chain by 2 carbons).", cn: "在真核细胞中，β-氧化定位于线粒体基质，基质中含有完成一轮完整循环（碳链缩短2个碳）所需的全部4种酶。" },
    { cz: "A. dehydrogenace (acyl-CoA dehydrogenasa, FAD) — jen trans", en: "Step A, DEHYDROGENATION: acyl-CoA dehydrogenase, FAD→FADH₂, produces ONLY the trans double-bond isomer.", cn: "步骤A，脱氢：酰基辅酶A脱氢酶，FAD→FADH₂，只生成反式双键异构体。" },
    { cz: "B. hydratace (enoyl-CoA hydrasa, H2O) — vyžaduje trans, dává jen L", en: "Step B, HYDRATION: enoyl-CoA hydratase, requires the trans isomer, adds H₂O, produces ONLY the L-stereoisomer of the hydroxyacyl-CoA.", cn: "步骤B，水合：烯酰辅酶A水合酶，要求反式异构体为底物，加H₂O，只生成L型的羟酰基辅酶A。" },
    { cz: "C. dehydrogenace (β-hydroxyacyl-CoA dehydrogenasa, NAD+) — vyžaduje L", en: "Step C, DEHYDROGENATION: β-hydroxyacyl-CoA dehydrogenase, requires the L-isomer, NAD⁺→NADH(H⁺), gives a β-ketoacyl-CoA.", cn: "步骤C，脱氢：β-羟酰基辅酶A脱氢酶，要求L型异构体为底物，NAD⁺→NADH(H⁺)，生成β-酮酰基辅酶A。" },
    { cz: "D. thiolytické štěpení (CoASH) — uvolní 1 acetyl-CoA", en: "Step D, THIOLYTIC CLEAVAGE: adds CoASH, splits off one acetyl-CoA, leaves an acyl-CoA shortened by 2 carbons. FLAG: the book's own figure labels this enzyme 'β-ketokinasa', but the reaction shown (CoASH addition, C-C bond cleavage, no ATP/phosphate) is not kinase chemistry — the standard name is thiolase / β-ketothiolase, and that name is used here in preference to the figure's own label.", cn: "步骤D，硫解裂解：加入CoASH，裂解出一分子乙酰辅酶A，留下缩短2个碳的酰基辅酶A。注意：教材图中将此酶标注为“β-ketokinasa”，但图示反应本身（加CoASH、C-C键裂解，全程无ATP/磷酸参与）并非激酶反应——标准名称应为硫解酶/β-酮硫解酶，本节采用标准名称而非图中标签。" },
    { cz: "E. opakování A-D", en: "Step E is simple repetition of steps A-D on the newly shortened acyl-CoA, cycle after cycle.", cn: "步骤E即对新缩短的酰基辅酶A重复A-D步骤，循环往复。" },
    { cz: "kyselina stearová (C18) → 9 acetyl-CoA v 8 cyklech", en: "Worked example: stearic acid (C18, as stearoyl-CoA) is fully degraded in 8 cycles, yielding 9 acetyl-CoA: CH₃(CH₂)₁₆CO-CoA + 8 FAD + 8 NAD⁺ + 8 H₂O + 8 CoASH → 9 CH₃CO-CoA + 8 FADH₂ + 8 NADH + 8 H⁺. (The last cycle's thiolytic cleavage splits a 4-carbon acetoacetyl-CoA directly into 2 acetyl-CoA, which is why 8 cycles yield 9, not 8, acetyl-CoA molecules.)", cn: "实例：硬脂酸（C18，以硬脂酰辅酶A形式）经8轮循环完全分解，生成9分子乙酰辅酶A：CH₃(CH₂)₁₆CO-CoA + 8 FAD + 8 NAD⁺ + 8 H₂O + 8 CoASH → 9 CH₃CO-CoA + 8 FADH₂ + 8 NADH + 8 H⁺。（最后一轮的硫解裂解直接将4碳的乙酰乙酰辅酶A裂解为2分子乙酰辅酶A，这就是8轮循环产生9而非8分子乙酰辅酶A的原因。）" }
  ],
  terms: [
    { cz: "β-oxidace", en: "beta-oxidation", cn: "β-氧化", def_en: "The mitochondrial pathway degrading fatty acids by sequential removal of 2-carbon acetyl units from the carboxyl end, via a 4-step enzyme cycle.", def_cn: "线粒体内的脂肪酸分解途径，通过四步酶促循环从羧基端依次去除二碳乙酰单位。" },
    { cz: "acyl-CoA dehydrogenasa", en: "acyl-CoA dehydrogenase", cn: "酰基辅酶A脱氢酶", def_en: "Step A enzyme; FAD-dependent; introduces a trans double bond.", def_cn: "步骤A的酶；依赖FAD；引入反式双键。" },
    { cz: "enoyl-CoA hydrasa", en: "enoyl-CoA hydratase", cn: "烯酰辅酶A水合酶", def_en: "Step B enzyme; adds water across the trans double bond, producing only the L-hydroxyacyl-CoA stereoisomer.", def_cn: "步骤B的酶；在反式双键上加水，只生成L型羟酰基辅酶A立体异构体。" },
    { cz: "β-hydroxyacyl-CoA dehydrogenasa", en: "β-hydroxyacyl-CoA dehydrogenase", cn: "β-羟酰基辅酶A脱氢酶", def_en: "Step C enzyme; NAD⁺-dependent; requires the L-isomer; produces a β-ketoacyl-CoA.", def_cn: "步骤C的酶；依赖NAD⁺；要求L型异构体为底物；生成β-酮酰基辅酶A。" },
    { cz: "thiolasa (β-ketothiolasa)", en: "thiolase (β-ketothiolase)", cn: "硫解酶（β-酮硫解酶）", def_en: "The standard name for the step D enzyme; cleaves the β-ketoacyl-CoA thiolytically with CoASH, releasing acetyl-CoA. The book's own figure instead labels this step 'β-ketokinasa' — a name this content treats as unreliable given the reaction shown involves no ATP/phosphate transfer.", def_cn: "步骤D酶的标准名称；用CoASH对β-酮酰基辅酶A进行硫解裂解，释放乙酰辅酶A。教材图中将此步骤标注为“β-ketokinasa”，鉴于该反应全程无ATP/磷酸转移，此标签被认为不可靠。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Where is beta-oxidation localized in eukaryotic cells, and why does the book say this location matters?",
      q_cn: "β-氧化在真核细胞中的定位在哪里？教材为何强调这一定位的重要性？",
      options: [
        "The cytoplasm, since that is where all lipid catabolism is localised, phospholipases and lipases included",
        "The mitochondrial matrix, because it contains all 4 enzymes needed for one full degradation cycle",
        "The peroxisome, since the matrix lacks the dehydrogenases the first step needs",
        "The endoplasmic reticulum, alongside the desaturase system that acts on the same chains"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-2-1", 3: "8-3-1" },
      optionNotes: {
        0: { en: "The first half is true of the other pathways — lipase and the four phospholipases do work in the cytoplasm — but beta-oxidation is exactly the exception the book draws that contrast against.", cn: "前半句对别的通路是成立的——lipase 和四种 phospholipase 确实在细胞质里工作——但 beta-oxidation 正是教材用来作对比的那个例外。" },
        2: { en: "The peroxisome is not named anywhere in this chapter. The matrix is named for a positive reason: it holds all four enzymes needed to run one complete cycle.", cn: "本章从未提到 peroxisome。教材点名 matrix 是有正面理由的：完成一个完整循环所需的四个酶都在那里。" },
        3: { en: "The endoplasmic reticulum's lipid enzymes are biosynthetic ones — the desaturase system that turns saturated chains into unsaturated ones, and which the book also credits with further elongation.", cn: "内质网上的脂类酶是合成方向的——把饱和链变成不饱和链的 desaturase 系统，教材还说它同样可以继续延长链。" }
      },
      why_en: "The book states beta-oxidation in eukaryotic cells is localized to the mitochondrial matrix, which contains all 4 enzymes needed for one cycle of degradation (shortening the chain by 2 carbons) — contrasted with complex-lipid degradation (8.4.2), which happens in the cytoplasm.",
      why_cn: "教材指出真核细胞中的β-氧化定位于线粒体基质，基质中含有完成一轮降解循环（碳链缩短2个碳）所需的全部4种酶——这与在细胞质中进行的复合脂质降解（8.4.2节）形成对比。"
    },
    {
      type: "mcq",
      q_en: "Per the book's own beta-oxidation diagram, what stereochemical requirement links step A's product to step B, and step B's product to step C?",
      q_cn: "根据教材自己的β-氧化图示，步骤A的产物与步骤B之间、步骤B的产物与步骤C之间，分别存在怎样的立体化学要求？",
      options: [
        "Step A produces only cis isomers, which step B needs as its substrate; step B in turn produces only D-isomers, which step C needs as its substrate",
        "Step A produces only trans isomers, which step B requires as substrate; step B produces only L-isomers, which step C requires as substrate",
        "There is no stereochemical requirement at any of the four steps",
        "Step A produces a racemic mixture, and steps B and C each select out the enantiomer they need"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-4-4" },
      optionNotes: {
        0: { en: "Both isomer labels are inverted. Acyl-CoA dehydrogenase gives only the TRANS double bond, and enoyl-CoA hydratase gives only the L-hydroxyacyl-CoA. Cis is the configuration natural unsaturated fatty acids arrive in, which is why they need an isomerase before they can join the cycle.", cn: "两个异构标签都反了。Acyl-CoA dehydrogenase 只给出 trans 双键，enoyl-CoA hydratase 只给出 L 型的 hydroxyacyl-CoA。Cis 是天然不饱和脂肪酸进来时的构型，正因如此它们要先经过 isomerase 才能进入这个循环。" },
        2: { en: "The requirements are the reason the cycle runs at all: each enzyme makes exactly the isomer the next one can use, so nothing anywhere has to sort or discard the wrong form.", cn: "正是这些要求让这个循环得以运转：每个酶恰好造出下一个酶能用的那个异构体，所以整条链上没有任何地方需要挑拣或丢弃错的形式。" },
        3: { en: "No racemic mixture arises. The specificity sits on the producing side rather than the consuming side — step A makes only trans and step B only L, so there is never a second form to select against.", cn: "根本不会出现外消旋混合物。专一性在生成的一侧，而不是在使用的一侧——A 步只造 trans，B 步只造 L，所以从来就没有第二种形式需要被排除。" }
      },
      why_en: "The figure explicitly labels acyl-CoA dehydrogenase (A) as producing only trans isomers, and notes enoyl-CoA hydratase (B) requires trans isomers as substrate and produces only L-isomers, which β-hydroxyacyl-CoA dehydrogenase (C) in turn requires.",
      why_cn: "图中明确标注酰基辅酶A脱氢酶（A）只生成反式异构体，并注明烯酰辅酶A水合酶（B）要求反式异构体为底物、只生成L型异构体，而β-羟酰基辅酶A脱氢酶（C）又要求L型异构体为底物。"
    },
    {
      type: "short",
      q_en: "How many acetyl-CoA molecules and how many FADH2/NADH pairs does complete beta-oxidation of stearic acid (C18) yield, per the book, and why is the acetyl-CoA count one more than the cycle count?",
      q_cn: "根据教材，硬脂酸（C18）完全β-氧化会生成多少分子乙酰辅酶A和多少对FADH2/NADH？为什么乙酰辅酶A的数目比循环次数多1？",
      accept: ["9", "8", "acetyl-CoA", "FADH2", "NADH", "cycle", "乙酰辅酶A", "循环"],
      answer_en: "8 cycles yield 8 FADH2 and 8 NADH, but 9 acetyl-CoA, because the final (8th) cycle's thiolytic cleavage step splits the 4-carbon acetoacetyl-CoA directly into two acetyl-CoA molecules at once.",
      answer_cn: "8轮循环生成8分子FADH2和8分子NADH，但生成9分子乙酰辅酶A，因为最后（第8轮）循环的硫解裂解步骤直接将4碳的乙酰乙酰辅酶A一次性裂解为两分子乙酰辅酶A。"
    }
  ],
  oral: {
    q_en: "Walk through the four-step beta-oxidation cycle and the stearic acid worked example, per the book.",
    q_cn: "请根据教材，讲解β-氧化的四步循环，并以硬脂酸为例进行说明。",
    model_en: "Beta-oxidation is how fatty acids get taken apart: two carbons at a time, chopped off the carboxyl end, over and over, and the name comes from the fact that the chemistry happening at each round centers on the beta carbon. In eukaryotic cells this whole thing happens inside the mitochondrial matrix, which conveniently holds all four enzymes needed for one round. Round one: first there's a dehydrogenation, acyl-CoA dehydrogenase pulling electrons off onto FAD, and this step only ever produces the trans double-bond isomer. Second, a hydration step, enoyl-CoA hydratase adding water across that double bond — but it needs the trans isomer to work on, and it only ever produces the L-stereoisomer of the resulting hydroxy compound. Third, another dehydrogenation, this time β-hydroxyacyl-CoA dehydrogenase, which needs that L-isomer, oxidizing it with NAD+ to give a beta-ketoacyl-CoA. And fourth, thiolytic cleavage: coenzyme A comes in, and the bond between the alpha and beta carbons breaks, releasing one acetyl-CoA and leaving an acyl-CoA that's two carbons shorter than what you started with. Then you just repeat those same four steps on the shortened chain, again and again. Run the whole thing on stearic acid, an 18-carbon fatty acid, and it takes 8 full cycles to finish, producing 8 FADH2, 8 NADH, and — this is the detail people miss — 9 acetyl-CoA, not 8, because the very last cleavage splits a four-carbon piece straight into two acetyl-CoA at once.",
    checklist: [
      "Defined beta-oxidation: 2-carbon removal from the carboxyl end, mitochondrial matrix",
      "Step A: dehydrogenation, acyl-CoA dehydrogenase, FAD, produces only trans",
      "Step B: hydration, enoyl-CoA hydratase, requires trans, produces only L",
      "Step C: dehydrogenation, beta-hydroxyacyl-CoA dehydrogenase, requires L, NAD+",
      "Step D: thiolytic cleavage releasing acetyl-CoA (named standard enzyme thiolase, flagged the book's own 'kinase' label as chemically inconsistent)",
      "Worked stearic acid example: 8 cycles, 9 acetyl-CoA, 8 FADH2, 8 NADH"
    ]
  }
},

{
  id: "8-4-4-3",
  book: "cz",
  topicKey: "fatty-acid-oxidation",
  chapter: 8,
  section: "8.4.4",
  czTitle: "Mastné kyseliny — osud acetyl-CoA, ketolátky",
  enTitle: "Fatty acids — the fate of acetyl-CoA, ketone bodies",
  cnTitle: "脂肪酸——乙酰辅酶A的去向、酮体",
  pages: [195, 197],
  coverage: "full",
  coverageNote: "The 'Produktem beta-oxidace...' paragraph on page 195 (through '...vede ke komatu a k smrti') read directly, plus the ketone-body pathway diagram at the top of page 197 (2x acetyl-CoA -> acetoacetyl-CoA -> HMG-CoA -> acetyl-CoA + acetoacetate* -> beta-hydroxybutyrate*/acetone*) verified by a zoomed re-read, including all three asterisks marking the ketone bodies. FLAGGED NUANCE (textual imprecision, not a hard contradiction, since nothing else in the book disputes it): the page-195 prose says the liver converts excess acetyl-CoA to HMG-CoA, part of which is converted to 'acetoacetát (navázaný na CoA) a acetyl-CoA' — literally 'acetoacetate (bound to CoA) and acetyl-CoA'. The page-197 figure, however, draws the direct product of HMG-CoA cleavage as free acetoacetate (a carboxylate anion, CH3CCH2COO-), not a CoA-thioester — the parenthetical in the prose is either a loose simplification or refers back to the acetoacetyl-CoA formed one step earlier in the same pathway, not to acetoacetate itself. This content follows the figure's explicit structures as the more reliable source, per HANDOFF's guidance to trust the more precise of two disagreeing book sources and say so.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.4 酮体生成与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "Ketone bodies are what an acetyl-CoA surplus turns into when the citrate cycle cannot absorb it all — in diabetes, in starvation, or on a diet very rich in fat. The route is 2 acetyl-CoA -> acetoacetyl-CoA -> HMG-CoA, and HMG-CoA is a fork: terpenoid and steroid synthesis one way, cleavage to free acetoacetate the other. The three ketone bodies are acetoacetate, beta-hydroxybutyrate and acetone.", cn: "酮体是 acetyl-CoA 过剩、柠檬酸循环吃不下时的去向——见于糖尿病、饥饿，或者反过来，脂肪极高的饮食。路线是 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA，而 HMG-CoA 是个岔口：一边通向 terpenoid / steroid 的合成，另一边裂解出游离的 acetoacetate。三种酮体是 acetoacetate、β-hydroxybutyrate 和 acetone。" },
  lehNotes: [
    { kind: "gap", node: "L-23-2-1",
      en: "The chemistry here is complete and correct, but it gives only the pathological half of what ketone bodies are, and the missing half is the half most likely to be asked for. This node presents them purely as an overflow — overproduction in diabetes and starvation, then accumulation, acidosis, ketosis, acetone on the breath, coma and death. Lehninger 23.2 (A p.850) presents the same molecules as a NORMAL EXPORTED FUEL: excess acetyl-CoA not required by the liver becomes acetoacetate and beta-hydroxybutyrate, and “these ketone bodies circulate in the blood to other tissues to be used as fuel” for the citric acid cycle. The decisive property is that, unlike fatty acids, they “can cross the blood-brain barrier” — so converting fat into a small water-soluble acid is the ONLY route by which body fat can reach the brain at all. The quantities settle the point: up to one-third of the heart's energy, and 60% to 70% of the brain's during prolonged fasting. Hold both framings. Answering only 'a pathological product of uncontrolled diabetes' misses the mechanism that keeps a starving human conscious and their muscle protein unspent.",
      cn: "这里的化学讲得完整而正确，但它只给出了酮体的病理那一半，而缺掉的那一半恰恰是最可能被问到的。本节点把酮体纯粹当作一种「溢出」来呈现——糖尿病和饥饿时过量生成，随后蓄积、酸中毒、酮症、呼气中的丙酮味、昏迷与死亡。Lehninger 23.2（A 第850页）呈现的却是同样这些分子作为一种正常的输出型燃料：肝脏自身用不掉的多余乙酰CoA变成乙酰乙酸和β-羟丁酸，而「这些酮体随血液循环到其他组织，被用作」柠檬酸循环的「燃料」。决定性的性质在于，与脂肪酸不同，它们「能够穿过血脑屏障」——所以把脂肪转化成一种小分子水溶性酸，是体脂能够抵达大脑的唯一途径。数量足以定论：可供给心脏能量的多达三分之一，以及长期禁食时大脑能量的60%到70%。请同时握住这两种框架。只回答「失控糖尿病的病理产物」，就漏掉了那个让饥饿中的人保持清醒、并让其肌肉蛋白暂时不被动用的机制。" },
  ],
  summary: {
    en: "The product of beta-oxidation of ALL types of fatty acids is acetyl-CoA. Under certain conditions — e.g. diabetes, starvation, or conversely a diet rich in fat — overproduction of acetyl-CoA occurs, because not all of it can be used in the citric acid cycle. In liver cells, this surplus is converted into a substance called β-hydroxy-β-methylglutaryl-CoA (HMG-CoA). Mechanistically (per the book's own diagram): two acetyl-CoA condense (releasing one CoASH) into acetoacetyl-CoA; acetoacetyl-CoA then condenses with a further acetyl-CoA plus water (releasing another CoASH) into HMG-CoA. HMG-CoA can either be used for biosynthesis of terpenoids and steroids, or be cleaved into acetyl-CoA plus free ACETOACETATE. Acetoacetate can then be enzymatically reduced (using 2H) to β-HYDROXYBUTYRATE, or can instead be non-enzymatically decarboxylated to ACETONE plus CO₂. Acetoacetate, β-hydroxybutyrate, and acetone (all three marked with an asterisk in the book's figure) are the three so-called KETONE BODIES. If these pathways are abnormally active, their products appear in the blood, leading to the disease states ACIDOSIS and KETOSIS: the consequence is a drop in blood pH, and acetone becomes detectable on the breath. Such a prolonged state leads to coma and death.",
    cn: "所有类型脂肪酸β-氧化的产物都是乙酰辅酶A。在某些条件下——例如糖尿病、饥饿，或者相反地高脂饮食——会出现乙酰辅酶A的过量生成，因为并非所有乙酰辅酶A都能被柠檬酸循环利用。在肝细胞中，这部分过剩的乙酰辅酶A被转化为一种称为β-羟基-β-甲基戊二酸单酰辅酶A（HMG-CoA）的物质。从机制上看（根据教材图示）：两分子乙酰辅酶A缩合（释放一分子CoASH）生成乙酰乙酰辅酶A；乙酰乙酰辅酶A再与另一分子乙酰辅酶A及水缩合（释放另一分子CoASH）生成HMG-CoA。HMG-CoA既可用于萜类和类固醇的生物合成，也可被裂解为乙酰辅酶A和游离的乙酰乙酸。乙酰乙酸随后可被酶促还原（消耗2H）为β-羟基丁酸，也可非酶促脱羧为丙酮和CO₂。乙酰乙酸、β-羟基丁酸和丙酮（教材图中均标有星号）是所谓的三种酮体。如果这些途径异常活跃，其产物会出现在血液中，导致酸中毒和酮症等疾病状态：后果是血液pH下降，呼气中能闻到丙酮味。这种状态持续下去会导致昏迷乃至死亡。"
  },
  points: [
    { cz: "produktem β-oxidace všech m.k. je acetyl-CoA", en: "The product of beta-oxidation of ALL types of fatty acids is acetyl-CoA.", cn: "所有类型脂肪酸β-氧化的产物都是乙酰辅酶A。" },
    { cz: "nadprodukce acetyl-CoA: cukrovka, hladovění, dieta bohatá na tuky", en: "Under certain conditions — DIABETES, STARVATION, or conversely a diet rich in fat — acetyl-CoA is overproduced because not all of it can be used in the citric acid cycle.", cn: "在糖尿病、饥饿，或相反地高脂饮食等条件下，由于并非所有乙酰辅酶A都能被柠檬酸循环利用，会出现乙酰辅酶A的过量生成。" },
    { cz: "2 acetyl-CoA → acetoacetyl-CoA → (+acetyl-CoA, H2O) → HMG-CoA", en: "Per the figure: 2 acetyl-CoA condense (release 1 CoASH) into acetoacetyl-CoA; acetoacetyl-CoA + another acetyl-CoA + H₂O (release 1 CoASH) condense into β-hydroxy-β-methylglutaryl-CoA (HMG-CoA), in liver cells.", cn: "根据图示：2分子乙酰辅酶A缩合（释放1分子CoASH）生成乙酰乙酰辅酶A；乙酰乙酰辅酶A再与另一分子乙酰辅酶A及H₂O缩合（释放1分子CoASH），在肝细胞中生成β-羟基-β-甲基戊二酸单酰辅酶A（HMG-CoA）。" },
    { cz: "HMG-CoA → biosyntéza terpenoidů, NEBO → acetyl-CoA + acetoacetát", en: "HMG-CoA can be used for biosynthesis of terpenoids/steroids, OR be cleaved into acetyl-CoA plus free ACETOACETATE (the figure draws acetoacetate as a free carboxylate, not a CoA-thioester — see coverageNote on the prose's looser phrasing).", cn: "HMG-CoA既可用于萜类/类固醇的生物合成，也可被裂解为乙酰辅酶A和游离的乙酰乙酸（图中乙酰乙酸画为游离羧酸根，而非辅酶A硫酯——关于正文措辞的宽泛之处见coverageNote）。" },
    { cz: "acetoacetát --2H--> β-hydroxybutyrát, NEBO --dekarboxylace--> aceton + CO2", en: "Acetoacetate can be enzymatically reduced (2H) to β-HYDROXYBUTYRATE, or non-enzymatically decarboxylated to ACETONE + CO₂.", cn: "乙酰乙酸可被酶促还原（消耗2H）为β-羟基丁酸，也可非酶促脱羧为丙酮和CO₂。" },
    { cz: "3 ketolátky: acetoacetát, β-hydroxybutyrát, aceton", en: "Acetoacetate, β-hydroxybutyrate, and acetone (marked with an asterisk in the book's figure) are the three KETONE BODIES.", cn: "乙酰乙酸、β-羟基丁酸和丙酮（教材图中均标有星号）是三种酮体。" },
    { cz: "acidosa, ketosa, aceton v dechu, kóma, smrt", en: "If these pathways are abnormally active, ketone bodies accumulate in blood, causing ACIDOSIS and KETOSIS — blood pH drops, acetone becomes detectable on the breath, and a prolonged state leads to coma and death.", cn: "若这些途径异常活跃，酮体会在血液中蓄积，引起酸中毒和酮症——血液pH下降，呼气中能闻到丙酮味，若持续存在会导致昏迷乃至死亡。" }
  ],
  terms: [
    { cz: "β-hydroxy-β-methylglutaryl-CoA (HMG-CoA)", en: "β-hydroxy-β-methylglutaryl-CoA (HMG-CoA)", cn: "β-羟基-β-甲基戊二酸单酰辅酶A（HMG-CoA）", def_en: "The liver intermediate formed from surplus acetyl-CoA; a precursor for terpenoid/steroid biosynthesis or a source of ketone bodies.", def_cn: "由过剩乙酰辅酶A在肝脏中生成的中间体；既是萜类/类固醇生物合成的前体，也是酮体生成的来源。" },
    { cz: "ketolátky", en: "ketone bodies", cn: "酮体", def_en: "Acetoacetate, β-hydroxybutyrate, and acetone — the three compounds produced from surplus acetyl-CoA via HMG-CoA when the citric acid cycle cannot process it all.", def_cn: "乙酰乙酸、β-羟基丁酸和丙酮——当柠檬酸循环无法处理全部过剩乙酰辅酶A时，经HMG-CoA生成的三种化合物。" },
    { cz: "acetoacetát", en: "acetoacetate", cn: "乙酰乙酸", def_en: "The direct cleavage product of HMG-CoA (alongside acetyl-CoA); can be reduced to β-hydroxybutyrate or decarboxylated to acetone.", def_cn: "HMG-CoA裂解的直接产物之一（另一产物为乙酰辅酶A）；可被还原为β-羟基丁酸，或脱羧为丙酮。" },
    { cz: "acidosa / ketosa", en: "acidosis / ketosis", cn: "酸中毒／酮症", def_en: "The disease states resulting from abnormal ketone-body accumulation in blood: lowered blood pH and acetone detectable on the breath, potentially progressing to coma and death.", def_cn: "血液中酮体异常蓄积导致的疾病状态：血液pH下降，呼气中可闻到丙酮味，严重时可发展为昏迷乃至死亡。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Under which conditions does the book say acetyl-CoA overproduction occurs, and why?",
      q_cn: "教材指出在哪些条件下会发生乙酰辅酶A的过量生成？原因是什么？",
      options: [
        "Only during intense exercise, when the citric acid cycle runs faster than acetyl-CoA can be supplied to it, so the surplus has to be stored",
        "Diabetes, starvation, or a diet rich in fat, because not all the acetyl-CoA produced can be used in the citric acid cycle",
        "Only in liver disease, when the liver can no longer condense acetyl-CoA into HMG-CoA",
        "Only in kidney failure, when the ketone bodies already made can no longer be filtered out"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The direction is reversed. The problem is a surplus of acetyl-CoA that the citric acid cycle cannot absorb, not a cycle outrunning its supply — and the book names three conditions, not one.", cn: "方向反了。问题在于 acetyl-CoA 过剩、citric acid cycle 吃不下，而不是 cycle 跑得比供应还快——而且教材点名的是三种情况，不是一种。" },
        2: { en: "The liver is where HMG-CoA gets made, and making it is how the surplus is dealt with rather than how it arises. Losing that capacity would not create the surplus in the first place.", cn: "HMG-CoA 正是在肝脏生成的，而生成它是处理过剩的方式，不是过剩产生的原因。失去这个能力并不会一开始就制造出过剩。" },
        3: { en: "Filtration is not what the book discusses. What accumulating ketone bodies cause is acidosis and ketosis: blood pH falls, acetone becomes detectable on the breath, and a prolonged state leads to coma.", cn: "教材讨论的不是过滤。酮体积聚造成的是 acidosis 和 ketosis：血 pH 下降，呼气中可以闻到 acetone，长期如此会陷入昏迷。" }
      },
      why_en: "The book names diabetes, starvation, and (conversely) a fat-rich diet as conditions leading to acetyl-CoA overproduction, specifically because not all of it can be utilized in the citric acid cycle, forcing the liver to divert the surplus toward HMG-CoA/ketone-body formation.",
      why_cn: "教材指出糖尿病、饥饿以及（相反地）高脂饮食都会导致乙酰辅酶A的过量生成，原因是并非所有乙酰辅酶A都能被柠檬酸循环利用，迫使肝脏将过剩部分转向HMG-CoA/酮体生成途径。"
    },
    {
      type: "mcq",
      q_en: "What are the two possible fates of acetoacetate shown in the book's figure?",
      q_cn: "教材图中显示乙酰乙酸有哪两种可能的去向？",
      options: [
        "Enzymatic reduction to β-hydroxybutyrate, or non-enzymatic decarboxylation to acetone + CO2",
        "Excretion in the urine unchanged, or conversion straight back to two acetyl-CoA",
        "Complete oxidation to CO2 and H2O in the citric acid cycle, or conversion onward to cholesterol by way of HMG-CoA",
        "Condensation to HMG-CoA, or reduction to β-hydroxybutyrate by a decarboxylase"
      ],
      answer: 0,
      optionRefs: { 2: "8-3-7" },
      optionNotes: {
        1: { en: "Acetoacetate is itself one of the three ketone bodies, and the figure gives it two onward reactions rather than an exit. It is precisely what accumulates in the blood when these pathways run too hard.", cn: "Acetoacetate 本身就是三种酮体之一，图上给它的是两个继续往下的反应，而不是一个出口。这些通路过度运转时，在血中积聚的正是它。" },
        2: { en: "HMG-CoA is indeed the fork toward terpenoid and steroid synthesis, but it lies UPSTREAM of acetoacetate: acetoacetate is what is left when HMG-CoA is cleaved the other way, alongside an acetyl-CoA.", cn: "HMG-CoA 确实是通向 terpenoid 和 steroid 合成的岔口，但它在 acetoacetate 的上游：当 HMG-CoA 按另一个方向裂解时，剩下的就是 acetoacetate，同时还有一个 acetyl-CoA。" },
        3: { en: "The first half runs backwards — HMG-CoA is cleaved to give acetoacetate, not built from it. And the reduction to β-hydroxybutyrate is an addition of 2H, not decarboxylase chemistry; decarboxylation is the other branch, and it is non-enzymatic, giving acetone.", cn: "前半句方向反了——是 HMG-CoA 裂解给出 acetoacetate，不是由它搭起来。而还原成 β-hydroxybutyrate 是加 2H，不是 decarboxylase 的化学；脱羧是另一条分支，而且是非酶促的，给出 acetone。" }
      },
      why_en: "The figure shows acetoacetate can be enzymatically reduced (using 2H) to β-hydroxybutyrate, or can instead be non-enzymatically decarboxylated to acetone plus CO2 — both are ketone bodies alongside acetoacetate itself.",
      why_cn: "图中显示乙酰乙酸可被酶促还原（消耗2H）为β-羟基丁酸，也可非酶促脱羧为丙酮和CO₂——两者与乙酰乙酸本身一样，都属于酮体。"
    },
    {
      type: "short",
      q_en: "Name the three ketone bodies and describe the clinical consequence of their abnormal accumulation, per the book.",
      q_cn: "列出三种酮体，并根据教材描述其异常蓄积的临床后果。",
      accept: ["acetoacetate", "hydroxybutyrate", "acetone", "acidosis", "ketosis", "coma", "乙酰乙酸", "羟基丁酸", "丙酮", "酸中毒", "酮症", "昏迷"],
      answer_en: "The three ketone bodies are acetoacetate, β-hydroxybutyrate, and acetone. Their abnormal accumulation in blood causes acidosis and ketosis, lowering blood pH, making acetone detectable on the breath, and — if prolonged — leading to coma and death.",
      answer_cn: "三种酮体是乙酰乙酸、β-羟基丁酸和丙酮。它们在血液中的异常蓄积会引起酸中毒和酮症，使血液pH下降，呼气中可闻到丙酮味，若持续存在会导致昏迷乃至死亡。"
    }
  ],
  oral: {
    q_en: "Explain what happens to surplus acetyl-CoA from fatty acid beta-oxidation, and how ketone bodies form and cause disease.",
    q_cn: "请解释脂肪酸β-氧化产生的过剩乙酰辅酶A会发生什么，酮体是如何形成并致病的。",
    model_en: "Every type of fatty acid, once it's gone through beta-oxidation, ends up as acetyl-CoA — that part is universal. The complication comes when there's more acetyl-CoA than the citric acid cycle can actually absorb, which happens in diabetes, in starvation, or, somewhat counterintuitively, on a diet that's very rich in fat. When that happens, liver cells start converting the surplus into a compound called HMG-CoA: two acetyl-CoA condense into acetoacetyl-CoA, and that combines with one more acetyl-CoA and water to form HMG-CoA itself. From there HMG-CoA has a fork in the road — it can feed into terpenoid and steroid biosynthesis, or it can be split into acetyl-CoA plus free acetoacetate. And acetoacetate itself has a fork too: enzymes can reduce it, using two hydrogens, into beta-hydroxybutyrate, or, with no enzyme involved at all, it can just spontaneously decarboxylate into acetone plus carbon dioxide. Those three — acetoacetate, beta-hydroxybutyrate, and acetone — are what's meant by ketone bodies. Normally this is a minor overflow valve, but if it runs abnormally hard, these ketone bodies build up in the blood and you get acidosis and ketosis: blood pH drops, you can actually smell acetone on the person's breath, and if that state goes on long enough it progresses to coma and death.",
    checklist: [
      "Stated acetyl-CoA is the universal product of fatty acid beta-oxidation",
      "Named the trigger conditions: diabetes, starvation, high-fat diet",
      "Traced 2 acetyl-CoA -> acetoacetyl-CoA -> (+acetyl-CoA, H2O) -> HMG-CoA in liver",
      "Described HMG-CoA's fork: terpenoid/steroid biosynthesis vs. acetyl-CoA + acetoacetate",
      "Described acetoacetate's fork: reduction to beta-hydroxybutyrate vs. decarboxylation to acetone",
      "Named the three ketone bodies and the resulting acidosis/ketosis, ending in coma/death if prolonged"
    ]
  }
},

{
  id: "8-4-4-4",
  book: "cz",
  topicKey: "fatty-acid-oxidation",
  chapter: 8,
  section: "8.4.4",
  czTitle: "Mastné kyseliny — nenasycené, lichouhlíkaté a větvené kyseliny",
  enTitle: "Fatty acids — unsaturated, odd-chain, and branched-chain special cases",
  cnTitle: "脂肪酸——不饱和、奇数碳及支链脂肪酸的特殊情况",
  pages: [195, 197],
  coverage: "full",
  coverageNote: "All three paragraphs (unsaturated FA, odd-chain FA, branched-chain FA) read directly. The branched-chain paragraph is split by the full-page beta-oxidation mechanism diagram on page 196 (see node 8-4-4-2's coverageNote): it begins at the bottom of page 195 ('Méně obvyklé jsou i větvené...') and its final sentence is completed at the very top of page 197 ('rávání je v tomto případě...'), with page 196 in between being an unrelated full-page figure — confirmed by reading the word split ('Konečným produktem odbou-' / 'rávání je...') across the two pages. The alpha-even/beta-odd carbon-parity claim was re-verified with a zoomed re-read of the exact sentence.",
  cnNote: { topic: "二十三", title: "脂类的分解 (笔记页码约147，仅凭标题推测，未直接核对) — CZ 8.4.4 特殊脂肪酸的β-氧化与该笔记标题字面对应，但尚未阅读原笔记内容核实", status: "partial" },
  mustKnow: { en: "Three awkward cases, three different fixes. A natural CIS double bond is the wrong geometry for the beta-oxidation enzymes, so an isomerase and an epimerase have to correct it first. An ODD-numbered chain leaves a three-carbon PROPIONYL-CoA behind after the last cut. And beta-methyl branching blocks the enzymes outright until a biotin-dependent carboxylation gets round it — ending at HMG-CoA rather than acetyl-CoA. Alpha-branching, by contrast, causes no trouble at all.", cn: "三种麻烦情况，三种不同的解决办法。天然不饱和脂肪酸的 **cis** 双键几何构型不合 β-oxidation 酶的要求，得先由 isomerase 和 epimerase 纠正。**奇数碳**链在最后一刀之后会剩下一个三碳的 PROPIONYL-CoA。而 **β-甲基**支链会直接卡住酶，必须靠一次依赖 biotin 的羧化绕过去——终点是 HMG-CoA，而不是 acetyl-CoA。相比之下 α 位支链完全不构成障碍。" },
  summary: {
    en: "Beyond the standard saturated, even-numbered, straight-chain case, the book covers three complications to beta-oxidation. (1) UNSATURATED fatty acids are common in nature, but their natural double bonds are in the CIS configuration — unsuitable for the beta-oxidation enzymes, which require a TRANS bond (step B, enoyl-CoA hydratase). Two extra enzymes, a cis-trans ISOMERASE and an EPIMERASE, must intervene in the reaction sequence so that beta-oxidation can proceed to completion without problems. (2) ODD-numbered-carbon fatty acids are less common in nature; they are degraded to the appropriate number of acetyl-CoA molecules plus a leftover three-carbon PROPIONYL-CoA residue, which is extended over several reaction steps into the four-carbon SUCCINYL-CoA — a compound that can feed directly into the citric acid cycle. (3) BRANCHED (non-linear) fatty acid chains are less usual still. By branch location, the book distinguishes α-BRANCHED (branching on an even-numbered carbon) from β-BRANCHED (branching on an odd-numbered carbon) chains. Since branching is usually not extensive — typically just a single methyl group — and sits on the opposite side of the molecule from the carboxyl group, the chain can be shortened by ordinary beta-oxidation for a while, until the branch point reaches the α or β carbon of the now-shortened molecule. Branching at the α position is no obstacle at all for the beta-oxidation enzymes, and the final product is simply acetyl-CoA. β-methyl branching, however, first requires an enzyme-catalyzed CARBOXYLATION (needing the cofactor BIOTIN), giving a dicarboxylic acid; the final degradation product in this case is β-hydroxy-β-methylglutaryl-CoA (HMG-CoA) — the same compound seen in 8.4.4's ketone-body pathway — which can either serve as the starting compound for isoprenoid biosynthesis, or be further degraded to acetyl-CoA and acetoacetate.",
    cn: "除了标准的饱和、偶数碳、直链情形之外，教材还介绍了β-氧化的三种复杂情况。（1）不饱和脂肪酸在自然界很常见，但其天然双键为顺式构型——不适合要求反式双键的β-氧化酶（步骤B，烯酰辅酶A水合酶）。必须有两种额外的酶——顺反异构酶和差向异构酶——介入反应序列，才能使β-氧化顺利进行到底。（2）奇数碳脂肪酸在自然界较少见；它们被分解为相应数目的乙酰辅酶A分子，外加一个剩余的三碳丙酰辅酶A残基，该残基经过几步反应被延长为四碳的琥珀酰辅酶A——可直接进入柠檬酸循环。（3）支链（非线性）脂肪酸链更为少见。按支链位置，教材区分了α-支链（在偶数碳上分支）和β-支链（在奇数碳上分支）。由于支链通常不长——一般只是一个甲基——且位于分子中远离羧基的一端，链可以先经普通β-氧化缩短一段，直到分支点出现在缩短后分子的α或β碳上。α位支链对β-氧化酶完全不构成障碍，终产物就是乙酰辅酶A。而β-甲基支链则必须先经酶促羧化（需要生物素辅因子），生成二羧酸；这种情况下的最终降解产物是β-羟基-β-甲基戊二酸单酰辅酶A（HMG-CoA）——与8.4.4节酮体生成途径中出现的是同一种化合物——它既可作为类异戊二烯生物合成的起始物，也可被进一步分解为乙酰辅酶A和乙酰乙酸。"
  },
  points: [
    { cz: "nenasycené m.k. — cis vazby, potřeba cis-trans izomerasy a epimerasy", en: "Natural UNSATURATED fatty acids have CIS double bonds, unsuitable for beta-oxidation enzymes (which require trans). A cis-trans ISOMERASE and an EPIMERASE must intervene so beta-oxidation can complete without problems.", cn: "天然不饱和脂肪酸的双键为顺式构型，不适合要求反式构型的β-氧化酶。必须有顺反异构酶和差向异构酶介入，β-氧化才能顺利完成。" },
    { cz: "lichouhlíkaté m.k. → acetyl-CoA + propionyl-CoA → sukcinyl-CoA", en: "ODD-carbon fatty acids degrade to the appropriate number of acetyl-CoA plus a leftover 3-carbon PROPIONYL-CoA, extended over several steps to 4-carbon SUCCINYL-CoA, which feeds directly into the citric acid cycle.", cn: "奇数碳脂肪酸被分解为相应数目的乙酰辅酶A，外加一个剩余的三碳丙酰辅酶A，经几步反应延长为四碳的琥珀酰辅酶A，可直接进入柠檬酸循环。" },
    { cz: "α-větvené (sudý C) vs β-větvené (lichý C)", en: "Branched fatty acids are classed as α-BRANCHED (branching on an EVEN-numbered carbon) or β-BRANCHED (branching on an ODD-numbered carbon).", cn: "支链脂肪酸分为α-支链（分支在偶数碳上）和β-支链（分支在奇数碳上）。" },
    { cz: "větvení obvykle jen methylová skupina, na opačném konci než COOH", en: "Branching is usually modest — typically just a methyl group — and located on the opposite side of the molecule from the carboxyl group, so ordinary beta-oxidation can shorten the chain until the branch reaches the α or β carbon.", cn: "支链通常不大——一般只是一个甲基——且位于分子中远离羧基的一端，因此普通β-氧化可先缩短链条，直到分支点到达α或β碳。" },
    { cz: "α-větvení = žádná překážka, produkt acetyl-CoA", en: "α-branching presents NO obstacle to the beta-oxidation enzymes; the final product is simply acetyl-CoA.", cn: "α位支链对β-氧化酶完全不构成障碍；终产物就是乙酰辅酶A。" },
    { cz: "β-methylové větvení → karboxylace (biotin) → dikarboxylová kyselina → HMG-CoA", en: "β-methyl branching first requires an enzyme-catalyzed CARBOXYLATION (cofactor BIOTIN), giving a dicarboxylic acid; the final product is HMG-CoA, usable for isoprenoid biosynthesis or further degraded to acetyl-CoA + acetoacetate.", cn: "β-甲基支链必须先经酶促羧化（需要生物素辅因子），生成二羧酸；最终产物是HMG-CoA，可用于类异戊二烯生物合成，或进一步分解为乙酰辅酶A和乙酰乙酸。" }
  ],
  terms: [
    { cz: "cis-trans izomerasa", en: "cis-trans isomerase", cn: "顺反异构酶", def_en: "One of two extra enzymes needed to let beta-oxidation handle unsaturated fatty acids' natural cis double bonds.", def_cn: "使β-氧化能够处理不饱和脂肪酸天然顺式双键所需的两种额外酶之一。" },
    { cz: "propionyl-CoA", en: "propionyl-CoA", cn: "丙酰辅酶A", def_en: "The 3-carbon leftover residue from beta-oxidation of odd-numbered-carbon fatty acids; extended to succinyl-CoA to enter the citric acid cycle.", def_cn: "奇数碳脂肪酸β-氧化后剩余的三碳残基；被延长为琥珀酰辅酶A以进入柠檬酸循环。" },
    { cz: "α-větvená / β-větvená mastná kyselina", en: "α-branched / β-branched fatty acid", cn: "α-支链／β-支链脂肪酸", def_en: "Branched fatty acids classed by whether the branch sits on an even-numbered (α) or odd-numbered (β) carbon.", def_cn: "按分支位于偶数碳（α）还是奇数碳（β）上分类的支链脂肪酸。" },
    { cz: "biotin", en: "biotin", cn: "生物素", def_en: "The cofactor required for the carboxylation step that processes β-methyl-branched fatty acids.", def_cn: "处理β-甲基支链脂肪酸所需羧化步骤的辅因子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why can't beta-oxidation process natural unsaturated fatty acids without extra enzymes, and which two enzymes does the book name?",
      q_cn: "为什么β-氧化不能在没有额外酶的情况下处理天然不饱和脂肪酸？教材提到了哪两种酶？",
      options: [
        "Natural double bonds sit too far from the carboxyl end for the enzymes to reach; a chain-shortening enzyme has to bring them closer before the cycle can start",
        "Natural double bonds are cis, but the beta-oxidation enzymes require trans; a cis-trans isomerase and an epimerase must intervene",
        "Natural double bonds cannot be reduced by FAD; a separate reductase and an epimerase have to saturate them first",
        "Natural double bonds block the attachment of CoA; a second thiokinase and a ligase have to activate the acid instead"
      ],
      answer: 1,
      optionRefs: { 3: "8-4-4-1" },
      optionNotes: {
        0: { en: "Distance is not the obstacle. Ordinary beta-oxidation already shortens the chain two carbons at a time and will reach any double bond on its own; what it cannot deal with is the geometry once it gets there.", cn: "障碍不是距离。普通的 beta-oxidation 本来就每次剪掉两个碳，自己迟早会走到任何一个双键跟前；它对付不了的是走到跟前之后的几何构型。" },
        2: { en: "FAD does act, at step A, and its job there is to CREATE a double bond, not remove one. The difficulty is that the bond already present is cis, while the hydratase at step B requires trans.", cn: "FAD 确实要出场，在 A 步，而它在那里的工作是造出一个双键，不是消掉一个。困难在于本来就存在的那个键是 cis 的，而 B 步的 hydratase 要求 trans。" },
        3: { en: "Activation runs identically for saturated and unsaturated acids: thiokinase makes the acyl-CoA in two steps, through the acyladenylate intermediate, and nothing about a double bond interferes with it.", cn: "饱和酸和不饱和酸的活化过程完全一样：thiokinase 分两步、经由 acyladenylate 中间体生成 acyl-CoA，双键对此毫无妨碍。" }
      },
      why_en: "The book states natural unsaturated fatty acids have cis double bonds, an unsuitable configuration for beta-oxidation enzymes (which require trans), so a cis-trans isomerase and an epimerase must intervene in the reaction sequence.",
      why_cn: "教材指出天然不饱和脂肪酸的双键为顺式构型，这对要求反式构型的β-氧化酶来说是不适合的配置，因此必须有顺反异构酶和差向异构酶介入反应序列。"
    },
    {
      type: "mcq",
      q_en: "How does the book distinguish α-branched from β-branched fatty acids, and which type poses no problem for beta-oxidation?",
      q_cn: "教材如何区分α-支链和β-支链脂肪酸？哪一种对β-氧化不构成问题？",
      options: [
        "α-branched = branch on an odd carbon, requiring a biotin-dependent carboxylation; β-branched = branch on an even carbon, presenting no obstacle to beta-oxidation",
        "α-branched = branch on an even carbon, no problem for beta-oxidation; β-branched = branch on an odd carbon, requires biotin-dependent carboxylation",
        "Both types need the same biotin-dependent carboxylation, and both end at HMG-CoA rather than acetyl-CoA",
        "α- and β- refer to the length of the branch rather than its position, α being a methyl and β a longer chain"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Everything here is the right way round except which letter goes with which parity. α is the even-numbered carbon and gives no trouble at all; β is the odd-numbered one, and that is the case needing the carboxylation.", cn: "这个选项里除了哪个字母配哪种奇偶之外，其余都说对了。α 对应偶数碳，完全不构成障碍；β 对应奇数碳，需要羧化的正是这一种。" },
        2: { en: "Only β-branching needs it. α-branching presents no obstacle whatever, and its final product is simply acetyl-CoA, exactly as for an unbranched chain.", cn: "只有 β 分支需要。α 分支毫无障碍，最终产物就是 acetyl-CoA，和不带分支的链完全一样。" },
        3: { en: "The letters mark position, not size. The branch is usually just a methyl group in either case, and it sits at the end away from the carboxyl — so ordinary cycles shorten the chain until the branch arrives at the α or the β carbon.", cn: "这两个字母标的是位置，不是大小。两种情形下分支通常都只是一个甲基，而且位于远离羧基的那一端——所以普通的循环会一直剪短链，直到分支来到 α 或 β 碳上。" }
      },
      why_en: "The book defines α-branched as branching on an even-numbered carbon (no obstacle to beta-oxidation, final product acetyl-CoA) and β-branched as branching on an odd-numbered carbon (requires biotin-dependent carboxylation to a dicarboxylic acid before degradation can continue to HMG-CoA).",
      why_cn: "教材将α-支链定义为在偶数碳上分支（对β-氧化不构成障碍，终产物为乙酰辅酶A），β-支链定义为在奇数碳上分支（需要生物素依赖的羧化生成二羧酸后，降解才能继续进行到HMG-CoA）。"
    },
    {
      type: "short",
      q_en: "Trace what happens to the 3-carbon leftover from degrading an odd-numbered-carbon fatty acid.",
      q_cn: "说明奇数碳脂肪酸分解后剩下的三碳残基会经历什么变化。",
      accept: ["propionyl-CoA", "succinyl-CoA", "citric acid cycle", "丙酰辅酶A", "琥珀酰辅酶A", "柠檬酸循环"],
      answer_en: "The leftover 3-carbon propionyl-CoA is extended, over several reaction steps, to the 4-carbon succinyl-CoA, which can then feed directly into the reactions of the citric acid cycle.",
      answer_cn: "剩余的三碳丙酰辅酶A经过几步反应被延长为四碳的琥珀酰辅酶A，可直接进入柠檬酸循环的反应。"
    }
  ],
  oral: {
    q_en: "Describe the three special cases (unsaturated, odd-chain, branched-chain) that complicate standard beta-oxidation.",
    q_cn: "请描述使标准β-氧化变得复杂的三种特殊情况（不饱和、奇数碳、支链脂肪酸）。",
    model_en: "Standard beta-oxidation assumes a straight, saturated, even-numbered chain, but the book covers three real-world complications. First, unsaturated fatty acids: they're actually very common in nature, but their double bonds occur naturally in the cis configuration, and the beta-oxidation machinery, specifically the hydratase step, needs a trans double bond to work on. So two extra enzymes step in, a cis-trans isomerase and an epimerase, to get the molecule into a shape beta-oxidation can finish processing. Second, odd-numbered-carbon fatty acids, which are rarer: you get the usual string of acetyl-CoA units, but at the very end there's a three-carbon piece left over that can't become another acetyl-CoA — that's propionyl-CoA, and it takes several more reaction steps to convert it into succinyl-CoA, which is convenient because succinyl-CoA is already a citric acid cycle intermediate. Third, branched chains, which are the least usual of the three. The book classifies these by exactly where the branch sits: alpha-branched means the branch is on an even-numbered carbon, beta-branched means it's on an odd-numbered carbon. Since the branch is usually small, just a methyl group, and sits opposite the carboxyl end, ordinary beta-oxidation can chew through the straight part of the chain first, right up until the branch point lands on the alpha or beta carbon. If it's alpha, there's no problem at all, you just get acetyl-CoA as usual. But if it's a beta-methyl branch, the cell first has to carboxylate it, an enzyme reaction that needs biotin as a cofactor, producing a dicarboxylic acid — and that pathway ends up at HMG-CoA, the same compound from the ketone-body story, which can either feed isoprenoid biosynthesis or get broken down further into acetyl-CoA and acetoacetate.",
    checklist: [
      "Unsaturated FA: natural cis bonds vs. trans-requiring enzymes; named cis-trans isomerase + epimerase",
      "Odd-chain FA: leftover propionyl-CoA (3C) extended to succinyl-CoA (4C), feeding the citric acid cycle",
      "Branched FA: defined alpha-branched (even C) vs. beta-branched (odd C)",
      "Noted branching is usually a single methyl group, opposite end from COOH",
      "Alpha-branching: no obstacle, product is acetyl-CoA",
      "Beta-methyl branching: biotin-dependent carboxylation -> dicarboxylic acid -> HMG-CoA -> isoprenoids or acetyl-CoA+acetoacetate"
    ]
  }
},

{
  id: "8-5",
  book: "cz",
  topicKey: "membrane-architecture",
  chapter: 8,
  section: "8.5",
  czTitle: "Biologické membrány (úvod)",
  enTitle: "Biological membranes (introduction)",
  cnTitle: "生物膜（概述）",
  pages: [197, 198],
  coverage: "full",
  coverageNote: "Full text of the '8.5 Biologické membrány' introductory paragraph, spanning the bottom of page 197 through the top of page 198 (ending right before the '8.5.1 Chemické složení' heading), read directly.",
  cnNote: { topic: null, title: "生物膜的一般功能概述 — 笔记中未找到明确对应主题（该主题偏向细胞生物学通论，而非笔记'三 脂质'条目下列出的脂质化学/膜脂不对称等具体子主题）", status: "pending" },
  mustKnow: { en: "A membrane is not a wall. The book's emphasis is that these are biochemically highly active systems — selective transport, binding of hormones and regulatory signals — and that although every cell builds to the same architectural scheme, individual membranes are functionally SPECIALISED, which is why particular machinery sits in one membrane and not another. Eukaryotes then turn the same trick inwards and partition the cytoplasm with it.", cn: "膜不是一堵墙。教材强调的是：它们是生化上高度活跃的系统——选择性运输、结合激素与调节信号；而且尽管所有细胞的膜遵循同一套架构方案，**每张膜的功能是专门化的**，所以某套装置只出现在某张膜上。真核细胞再把同一招用到内部，用膜把细胞质隔成一个个区室。" },
  summary: {
    en: "The internal space of every living cell is separated from the external environment by a special cellular structure called the cell membrane. Eukaryotic cells additionally partition their internal space using membranes: subcellular organelles (e.g. the nucleus, mitochondria) are bounded by a membrane, and the cytoplasm also contains further subcellular membranous structures such as the Golgi apparatus, endoplasmic reticulum, microsomes, etc. The main job of membranes is to separate biochemically and physiologically distinct spaces, but membranes are not merely static boundaries — in reality they are biochemically highly active systems, responsible for the selective transport of substances into and out of the cell and its compartments, for binding hormones and other regulatory systems, for transmitting electrical impulses, and they host a whole range of enzyme reactions, including a range of bioenergetically important processes and ATP production. Although the basic architectural scheme of biological membranes is the same for all cells, individual membranes differ considerably in function and are specialized — e.g. only the inner mitochondrial membrane is responsible for ATP production, and certain hormones bind only to certain membranes, while others are completely unresponsive to them. Understanding the function of biological membranes begins with understanding their structure.",
    cn: "每一个活细胞的内部空间都由一种特殊的细胞结构——细胞膜——与外部环境隔开。真核细胞还进一步利用膜将其内部空间分隔：亚细胞细胞器（如细胞核、线粒体）由膜包被，细胞质中还存在其他亚细胞膜性结构，如高尔基体、内质网、微粒体等。膜的主要任务是将生化和生理上不同的空间隔开，但膜并非仅仅是静态的边界——实际上它们是生化活性极高的系统，负责物质进出细胞及各细胞区室的选择性转运，负责与激素及其他调节系统结合，负责传递电脉冲，并且是许多酶促反应（包括一系列生物能学上重要的过程及ATP生成）发生的场所。尽管所有细胞的生物膜基本结构方案相同，但各个膜在功能上差异相当大，是高度特化的——例如只有线粒体内膜负责ATP生成，某些激素只与特定的膜结合，而对其他膜则完全不起作用。理解生物膜的功能，首先要从理解其结构开始。"
  },
  points: [
    { cz: "buněčná membrána odděluje vnitřek od vnějšího prostředí", en: "The internal space of every living cell is separated from the external environment by a special cellular structure called the CELL MEMBRANE.", cn: "每一个活细胞的内部空间都由一种特殊的细胞结构——细胞膜——与外部环境隔开。" },
    { cz: "eukaryotní buňky: membrány i uvnitř (jádro, mitochondrie, Golgi, ER, mikrosomy)", en: "Eukaryotic cells additionally partition their internal space with membranes: organelles (nucleus, mitochondria) are membrane-bounded, and the cytoplasm holds further membranous structures — Golgi apparatus, endoplasmic reticulum, microsomes, etc.", cn: "真核细胞还进一步用膜分隔其内部空间：细胞器（细胞核、线粒体）由膜包被，细胞质中还有其他膜性结构——高尔基体、内质网、微粒体等。" },
    { cz: "membrány nejsou jen statické hranice — aktivní systémy", en: "Membranes are not merely static boundaries; they are biochemically highly active systems responsible for selective transport, hormone/regulatory-system binding, transmission of electrical impulses, and hosting enzyme reactions including bioenergetically important processes and ATP production.", cn: "膜并非仅仅是静态边界；它们是生化活性极高的系统，负责选择性转运、激素/调节系统的结合、电脉冲的传递，并承载包括生物能学重要过程及ATP生成在内的酶促反应。" },
    { cz: "membrány jsou specializované, funkčně se liší", en: "Although the basic architectural scheme is the same for all cells, individual membranes are functionally specialized — e.g. only the inner mitochondrial membrane produces ATP, and certain hormones bind only to specific membranes.", cn: "尽管所有细胞的膜基本结构方案相同，但各个膜在功能上是特化的——例如只有线粒体内膜生成ATP，某些激素只与特定膜结合。" },
    { cz: "pochopení funkce začíná pochopením struktury", en: "Understanding the function of biological membranes begins with understanding their structure — the book's own transition into 8.5.1.", cn: "理解生物膜的功能，首先要从理解其结构开始——这是教材过渡到8.5.1节的原话。" }
  ],
  terms: [
    { cz: "buněčná membrána", en: "cell membrane", cn: "细胞膜", def_en: "The structure separating a cell's internal space from its external environment.", def_cn: "将细胞内部空间与外部环境隔开的结构。" },
    { cz: "subcelulární organela", en: "subcellular organelle", cn: "亚细胞器", def_en: "A membrane-bounded internal compartment of a eukaryotic cell, e.g. the nucleus or mitochondria.", def_cn: "真核细胞内由膜包被的内部区室，如细胞核或线粒体。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's introduction to 8.5, are biological membranes merely static boundaries between compartments?",
      q_cn: "根据教材8.5节的引言，生物膜仅仅是区室之间的静态边界吗？",
      options: [
        "Yes — separating the internal space from the external environment is the whole of what they do, everything else happening in the cytoplasm",
        "No — they are biochemically highly active systems responsible for selective transport, hormone binding, electrical impulse transmission, and enzyme reactions including ATP production",
        "No — they are structural scaffolds that hold the organelles in place, all the biochemistry going on in the spaces they enclose",
        "Yes for the internal ones — only the outer cell membrane is biochemically active, while the nuclear, mitochondrial, Golgi and endoplasmic-reticulum membranes are purely structural partitions"
      ],
      answer: 1,
      optionRefs: { 2: "6-2-4-5", 3: "6-2-4-1" },
      optionNotes: {
        0: { en: "This is the claim the book opens by denying. Selective transport, the binding of hormones and regulatory signals, the transmission of electrical impulses and enzyme reactions are all listed as work the membrane itself does.", cn: "这正是教材开篇就否定的说法。选择性转运、结合激素和调节信号、传导电冲动、以及酶促反应，都被列为膜本身在做的工作。" },
        2: { en: "It is not merely that the biochemistry happens nearby: ATP production itself is a membrane process, run by complexes embedded in the inner mitochondrial membrane, and the book names it among the membrane's own functions.", cn: "问题不只是生化反应发生在旁边：ATP 的产生本身就是一个膜过程，由嵌在线粒体内膜里的复合体完成，教材把它列为膜自身的功能之一。" },
        3: { en: "The inner mitochondrial membrane is the book's own example of a highly active INTERNAL membrane — it is the one that produces ATP, and the book uses exactly that to illustrate functional specialisation.", cn: "线粒体内膜正是教材举的那个高度活跃的内部膜的例子——产生 ATP 的就是它，教材恰恰用它来说明功能的专门化。" }
      },
      why_en: "The book explicitly states membranes are not merely static boundaries but biochemically very active systems, listing selective transport, hormone/regulatory binding, electrical impulse transmission, enzyme reactions, and ATP production among their roles.",
      why_cn: "教材明确指出膜并非仅仅是静态边界，而是生化活性很高的系统，其功能包括选择性转运、激素/调节结合、电脉冲传递、酶促反应及ATP生成等。"
    },
    {
      type: "mcq",
      q_en: "What example does the book give of membrane functional specialization?",
      q_cn: "教材举了什么例子来说明膜的功能特化？",
      options: [
        "Every membrane produces ATP, but the inner mitochondrial membrane produces the most of it",
        "Only the inner mitochondrial membrane is responsible for ATP production, and certain hormones bind only to certain membranes",
        "The plasma membrane and the nuclear membrane have identical protein compositions and differ only in their lipids, which is what specialisation means here",
        "Only plant cell membranes show any specialisation, animal membranes all being built alike"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-4-5", 2: "8-5-1" },
      optionNotes: {
        0: { en: "The book's claim is exclusive, not comparative: ONLY the inner mitochondrial membrane is responsible for ATP production. Complex V sits in that membrane and in no other.", cn: "教材的说法是排他的，不是比较级的：只有线粒体内膜负责产生 ATP。Complex V 就长在那张膜上，别的膜上都没有。" },
        2: { en: "What varies most between membranes is precisely the protein complement — the protein:lipid weight ratio alone runs all the way from 1:4 to 3:1 depending on the membrane's origin and function.", cn: "各种膜之间差别最大的恰恰是蛋白质部分——单是 protein:lipid 的重量比就随膜的来源和功能，从 1:4 一直变到 3:1。" },
        3: { en: "Both halves of the book's statement — the shared architectural scheme and the functional specialisation on top of it — are made for all cells, with no plant-versus-animal split drawn anywhere.", cn: "教材这句话的两半——共同的基本构造方案，以及在此之上的功能专门化——都是对所有细胞讲的，从未划过植物与动物的界线。" }
      },
      why_en: "The book states that although the basic structural scheme is shared across membranes, they differ functionally and are specialized — giving the example that only the inner mitochondrial membrane is responsible for ATP production, and that certain hormones bind only to certain membranes while others are unresponsive to them.",
      why_cn: "教材指出，尽管所有膜的基本结构方案相同，但它们在功能上有差异、是特化的——并举例说明只有线粒体内膜负责ATP生成，某些激素只与特定膜结合，而对其他膜完全不起作用。"
    },
    {
      type: "short",
      q_en: "List the roles the book attributes to biological membranes beyond simple compartmentalization.",
      q_cn: "列出教材赋予生物膜的、超出简单区室化功能之外的其他作用。",
      accept: ["transport", "hormone", "electrical", "enzyme", "ATP", "转运", "激素", "电", "酶", "ATP"],
      answer_en: "Selective transport of substances into/out of cells and compartments; binding of hormones and other regulatory systems; transmission of electrical impulses; hosting enzyme reactions, including bioenergetically important processes and ATP production.",
      answer_cn: "物质进出细胞及各区室的选择性转运；与激素及其他调节系统的结合；电脉冲的传递；承载酶促反应，包括生物能学重要过程及ATP生成。"
    }
  ],
  oral: {
    q_en: "Introduce biological membranes: what separates cellular compartments, and why are membranes more than passive boundaries?",
    q_cn: "请介绍生物膜：是什么将细胞区室分隔开？为什么膜不只是被动的边界？",
    model_en: "Every living cell keeps its inside separate from the outside world using a cell membrane, and eukaryotic cells take that idea further, using membranes internally too — the nucleus and mitochondria are each bounded by their own membrane, and the cytoplasm is full of other membranous structures like the Golgi apparatus, the endoplasmic reticulum, and microsomes. It would be easy to think of all this as just plumbing, separating one biochemical environment from another, but the book is emphatic that membranes are far more than static walls. They're biochemically very active: they handle selective transport of substances in and out of the cell and its compartments, they bind hormones and other regulatory signals, they transmit electrical impulses, and a whole range of enzyme reactions happens right there in the membrane, including bioenergetically important processes and ATP production itself. And even though every membrane shares the same basic architecture, they're highly specialized functionally — only the inner mitochondrial membrane actually produces ATP, and different hormones are only recognized by specific membranes, with other membranes completely indifferent to them. Which is exactly why the book says understanding what membranes do has to start with understanding how they're built.",
    checklist: [
      "Named the cell membrane as the boundary between cell interior and exterior",
      "Noted eukaryotic cells also partition internally: nucleus, mitochondria, Golgi, ER, microsomes",
      "Stated membranes are biochemically active, not just static boundaries",
      "Listed roles: selective transport, hormone binding, electrical impulses, enzyme reactions, ATP production",
      "Gave the mitochondrial-ATP and hormone-specificity examples of functional specialization"
    ]
  }
},

{
  id: "8-5-1",
  book: "cz",
  topicKey: "membrane-architecture",
  chapter: 8,
  section: "8.5.1",
  czTitle: "Chemické složení",
  enTitle: "Chemical composition",
  cnTitle: "化学组成",
  pages: [198],
  coverage: "full",
  coverageNote: "Full text of '8.5.1 Chemické složení' on page 198 read directly — a short, single-paragraph subsection.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level: phospho-/sphingo-/glyco-lipids and membrane composition confirmed present in the subtopic list — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Two numbers carry this short section. The protein:lipid WEIGHT ratio is not a constant — it runs from 1:4 all the way to 3:1 depending on what the membrane does, so there is no such thing as 'the' composition of a membrane. And carbohydrate is ALWAYS present, 0.5–10% of the mass, but never free: only ever as a glycoprotein or a glycolipid.", cn: "这一小节的重点是两个数字。protein : lipid 的**重量**比不是常数——随膜的功能从 1:4 一直到 3:1，所以根本不存在「膜的组成」这么一个统一答案。糖类则**总是**存在，占膜质量的 0.5–10%，但从不以游离形式出现：只以 glycoprotein 或 glycolipid 的形式存在。" },
  summary: {
    en: "Biological membranes are composed of proteins and lipids. Their relative representation varies substantially depending on the origin and function of the membrane, with the protein:lipid weight ratio ranging from 1:4 to 3:1. Carbohydrates are also a component of membranes; they are always present either in the form of glycoproteins or glycolipids, and they represent 0.5-10% of membrane mass.",
    cn: "生物膜由蛋白质和脂质组成。二者的相对比例因膜的来源和功能而有很大差异，蛋白质:脂质的质量比在1:4到3:1之间变化。糖类也是膜的组分之一；它们总是以糖蛋白或糖脂的形式存在，占膜质量的0.5%-10%。"
  },
  points: [
    { cz: "membrány = proteiny + lipidy", en: "Biological membranes are composed of PROTEINS and LIPIDS.", cn: "生物膜由蛋白质和脂质组成。" },
    { cz: "poměr protein:lipid = 1:4 až 3:1", en: "The relative representation of proteins and lipids varies substantially by membrane origin/function; the protein:lipid WEIGHT RATIO ranges from 1:4 to 3:1.", cn: "蛋白质和脂质的相对比例因膜的来源和功能而有很大差异；蛋白质:脂质的质量比在1:4到3:1之间。" },
    { cz: "sacharidy vždy jako glykoproteiny/glykolipidy, 0,5-10 % hmotnosti", en: "Carbohydrates are always present in membranes, either as GLYCOPROTEINS or GLYCOLIPIDS, and represent 0.5-10% of membrane mass.", cn: "糖类总是以糖蛋白或糖脂的形式存在于膜中，占膜质量的0.5%-10%。" }
  ],
  terms: [
    { cz: "poměr protein:lipid", en: "protein:lipid ratio", cn: "蛋白质:脂质比", def_en: "The weight ratio of protein to lipid in a biological membrane, ranging 1:4 to 3:1 depending on membrane origin/function.", def_cn: "生物膜中蛋白质与脂质的质量比，因膜的来源和功能而在1:4到3:1之间变化。" },
    { cz: "glykoprotein / glykolipid (membránový)", en: "membrane glycoprotein / glycolipid", cn: "膜糖蛋白／膜糖脂", def_en: "The two forms in which membrane carbohydrate is always found, together making up 0.5-10% of membrane mass.", def_cn: "膜中糖类存在的两种形式，二者合计占膜质量的0.5%-10%。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What range does the book give for the protein:lipid weight ratio in biological membranes?",
      q_cn: "教材给出的生物膜中蛋白质:脂质质量比的范围是多少？",
      options: [
        "Exactly 1:1 in every membrane type",
        "1:4 to 3:1, varying by membrane origin and function",
        "10:1 to 20:1, protein always dominating",
        "Always below 1:10, so that lipid dominates in every membrane"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "A fixed value is exactly what the book denies. The ratio varies substantially with the origin and the function of the membrane, which is the reason a range is quoted rather than a number.", cn: "固定值恰恰是教材否定的东西。这个比值随膜的来源和功能有很大变化，这也正是教材给的是一个范围而不是一个数的原因。" },
        2: { en: "The protein-rich end of the range is 3:1, not 10:1. Protein can be the larger share by a factor of three, but never by an order of magnitude.", cn: "范围里富含蛋白的那一端是 3:1，不是 10:1。蛋白确实可以是较大的一份，最多三倍，但绝到不了一个数量级。" },
        3: { en: "The lipid-rich end of the range is 1:4, so lipid can outweigh protein fourfold and no further — and in a good many membranes it is protein that makes up the greater part.", cn: "范围里富含脂类的那一端是 1:4，所以脂类最多比蛋白多四倍，再多就没有了——而且在相当多的膜里，占大头的反而是蛋白。" }
      },
      why_en: "The book states the protein:lipid weight ratio ranges from 1:4 to 3:1, substantially varying with the origin and function of the membrane in question.",
      why_cn: "教材指出蛋白质:脂质的质量比在1:4到3:1之间变化，因膜的来源和功能而有很大差异。"
    },
    {
      type: "mcq",
      q_en: "In what form is carbohydrate always found in biological membranes, and what fraction of membrane mass does it represent?",
      q_cn: "糖类在生物膜中总是以什么形式存在？占膜质量的多大比例？",
      options: [
        "As free monosaccharides dissolved in the bilayer, at 20-30% of the mass",
        "As glycoproteins or glycolipids; 0.5-10% of mass",
        "As glycogen granules, at about 15% of the mass",
        "As free oligosaccharides, at 40-50% of the mass"
      ],
      answer: 1,
      optionRefs: { 2: "L-15-2-1" },
      optionNotes: {
        0: { en: "The qualification the book insists on is that membrane carbohydrate is never free: it is always bound, either as a glycoprotein or as a glycolipid. And a fifth of the mass would be far above the range quoted.", cn: "教材坚持的限定是：膜上的糖从来不是游离的，永远是结合态——不是 glycoprotein 就是 glycolipid。而占质量的五分之一也远远超出了教材给的范围。" },
        2: { en: "Glycogen is a storage polysaccharide, kept as granules in the cytosol rather than built into a membrane; nothing in the membrane's composition is described in that form.", cn: "Glycogen 是储存性多糖，以颗粒形式待在胞浆里，而不是砌进膜里；膜的组成里没有任何东西是以那种形态描述的。" },
        3: { en: "Half the membrane's mass as sugar would leave almost no room for the two components the book actually names, proteins and lipids — and again, the carbohydrate is never free-floating.", cn: "如果糖占了膜质量的一半，那就几乎没有地方留给教材真正点名的两个组分——蛋白质和脂类了；而且糖也从来不是游离漂浮的。" }
      },
      why_en: "The book states membrane carbohydrate is always present either as glycoproteins or as glycolipids, and represents 0.5-10% of membrane mass.",
      why_cn: "教材指出膜中的糖类总是以糖蛋白或糖脂的形式存在，占膜质量的0.5%-10%。"
    },
    {
      type: "short",
      q_en: "Name the three chemical classes that make up biological membranes, per the book.",
      q_cn: "根据教材，列出构成生物膜的三大化学类别。",
      accept: ["protein", "lipid", "carbohydrate", "glycoprotein", "glycolipid", "蛋白质", "脂质", "糖", "糖蛋白", "糖脂"],
      answer_en: "Proteins and lipids are the two main components (ratio 1:4 to 3:1 by weight); carbohydrates are additionally always present, in the form of glycoproteins or glycolipids, at 0.5-10% of mass.",
      answer_cn: "蛋白质和脂质是两大主要成分（质量比1:4到3:1）；此外糖类也总是存在，以糖蛋白或糖脂的形式，占膜质量的0.5%-10%。"
    }
  ],
  oral: {
    q_en: "Describe the chemical composition of biological membranes.",
    q_cn: "请描述生物膜的化学组成。",
    model_en: "Biological membranes are built from two main chemical classes, proteins and lipids, and how much of each you find depends heavily on where the membrane comes from and what it does — the book gives a protein-to-lipid weight ratio that can range anywhere from 1 to 4 up to 3 to 1, which is a pretty wide spread reflecting just how specialized different membranes are. On top of that, carbohydrate is always present too, though never as a free-standing component — it's always attached, either as part of a glycoprotein or a glycolipid, and together those carbohydrate portions only make up somewhere between 0.5 and 10 percent of the membrane's total mass.",
    checklist: [
      "Named proteins and lipids as the two main membrane components",
      "Gave the protein:lipid weight ratio range: 1:4 to 3:1",
      "Stated carbohydrate is always present as glycoprotein or glycolipid, never free",
      "Gave the carbohydrate mass fraction: 0.5-10%"
    ]
  }
},

{
  id: "8-5-2-1",
  book: "cz",
  topicKey: "membrane-architecture",
  chapter: 8,
  section: "8.5.2",
  czTitle: "Struktura — lipidová dvojvrstva",
  enTitle: "Structure — the lipid bilayer",
  cnTitle: "结构——脂质双分子层",
  pages: [198],
  coverage: "full",
  coverageNote: "Full text of the unnumbered 'Lipidová dvojvrstva' subheading under 8.5.2 on page 198 read directly, plus Obr. 8.1 and its caption (lipid arrangement in the membrane bilayer; phospholipid head groups vs. cholesterol's steroid-ring orientation; regions I-III) verified by direct re-read.",
  cnNote: { topic: "三", title: "脂质 (笔记 pp.11-16, read at topic-overview level: 'membrane asymmetry' is explicitly confirmed present in the subtopic list — a strong match for this node's asymmetry/flip-flop content — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "The two monolayers share the same ARRANGEMENT and differ in COMPOSITION — that asymmetry, with cerebrosides and gangliosides generally in the outer leaflet, is the thing to hold on to. Lipids can swap between leaflets by the FLIP-FLOP mechanism, and the book states plainly that its biological significance is not yet clear, so do not claim one for it. Fluidity is set by chain length and saturation, by sphingosines and by cholesterol; the bilayer is about 3.5–4.0 nm thick.", cn: "两层单分子层的**排列方式**相同，**组成**不同——这种不对称（cerebroside 和 ganglioside 一般位于外层）才是要记住的点。脂质可以通过 FLIP-FLOP 机制在两层之间互换，而教材明说它的生物学意义尚不清楚，所以不要替它编一个。流动性由链长与饱和度、sphingosine 以及 cholesterol 决定；双层厚度约 3.5–4.0 nm。" },
  summary: {
    en: "The structural basis of biological membranes is a double layer (bilayer) of lipids. Each monolayer is formed predominantly of complex lipids arranged so that the hydrophobic 'tails' of the individual molecules are in close mutual contact, just like the hydrophilic 'heads'; the interactions of both heads and tails are exclusively non-covalent. The two monolayers are oriented 'tail to tail', which produces a bilayer with a markedly non-polar center and two polar surfaces; the thickness of such a bilayer is approximately 3.5-4.0 nm. Although all monolayers share the same lipid arrangement, the lipid COMPOSITION of each monolayer differs — for example, cerebrosides and gangliosides are generally located in the outer monolayer of the cell membrane. This phenomenon is called ASYMMETRY of lipid composition, and its degree varies considerably by membrane type, function, and even by the membrane's age. On the other hand, a well-described phenomenon allows mutual exchange of lipids between the two monolayers, called the FLIP-FLOP mechanism, whose biological significance is not yet precisely defined. The basic physical property of the lipid bilayer is its flexibility and FLUIDITY, determined by the type and length of the hydrocarbon chains of the fatty acids, sphingosines, and cholesterol (Obr. 8.1): the higher the proportion of saturated fatty acids, the longer their chains, and the higher the cholesterol content, the lower the fluidity of the bilayer. The physical characteristics of a biological membrane also depend on the type and arrangement of the membrane proteins associated with the lipid bilayer.",
    cn: "生物膜的结构基础是脂质的双层（双分子层）。每一单层主要由复合脂质构成，排列方式使各分子的疏水“尾部”彼此紧密接触，亲水“头部”亦然；头部与尾部的相互作用都完全是非共价的。两个单层以“尾对尾”的方式相互取向，形成一个中央高度非极性、两侧表面为极性的双分子层；这种双分子层的厚度约为3.5-4.0 nm。尽管所有单层的脂质排列方式相同，但每个单层的脂质组成却有所不同——例如，脑苷脂和神经节苷脂通常位于细胞膜的外层单层。这种现象称为脂质组成的不对称性，其程度因膜的种类、功能，乃至膜的“年龄”而有很大差异。另一方面，一种被充分描述的现象允许脂质在两个单层之间相互交换，称为翻转机制，其生物学意义目前尚未被精确界定。脂质双分子层的基本物理性质是其柔韧性和流动性，由脂肪酸、鞘氨醇和胆固醇的碳氢链的类型和长度决定（图8.1）：饱和脂肪酸比例越高、链越长，胆固醇含量越高，双分子层的流动性就越低。生物膜的物理特性还取决于与脂质双分子层结合的膜蛋白的类型和排列方式。"
  },
  points: [
    { cz: "strukturní základ = dvojitá vrstva lipidů", en: "The structural basis of biological membranes is a LIPID BILAYER (double layer).", cn: "生物膜的结构基础是脂质双分子层（双层）。" },
    { cz: "monovrstva: hydrofobní ocasy k sobě, hydrofilní hlavy k sobě, jen nekovalentní interakce", en: "Each monolayer is formed predominantly of complex lipids arranged so hydrophobic 'tails' are in close mutual contact, as are hydrophilic 'heads'; all these interactions are exclusively NON-COVALENT.", cn: "每一单层主要由复合脂质构成，疏水“尾部”彼此紧密接触，亲水“头部”亦然；所有这些相互作用都完全是非共价的。" },
    { cz: "2 monovrstvy 'ocasem k ocasu' → nepolární střed, polární povrchy, tloušťka 3,5-4,0 nm", en: "Two monolayers orient 'tail to tail', giving a bilayer with a markedly non-polar center and two polar surfaces; bilayer thickness is approximately 3.5-4.0 nm.", cn: "两个单层以“尾对尾”方式取向，形成中央高度非极性、两侧表面为极性的双分子层；双分子层厚度约为3.5-4.0 nm。" },
    { cz: "asymetrie lipidového složení (cerebrosidy, gangliosidy = vnější monovrstva)", en: "All monolayers share the same lipid ARRANGEMENT, but their lipid COMPOSITION differs — e.g. cerebrosides and gangliosides are generally located in the outer monolayer. This is called lipid-composition ASYMMETRY; its degree varies by membrane type, function, and age.", cn: "所有单层的脂质排列方式相同，但脂质组成不同——例如脑苷脂和神经节苷脂通常位于外层单层。这称为脂质组成的不对称性；其程度因膜的种类、功能及“年龄”而异。" },
    { cz: "překlopný mechanismus (flip-flop) — biologický význam nejasný", en: "A well-described phenomenon allows mutual exchange of lipids between the two monolayers, called the FLIP-FLOP mechanism; its biological significance is not yet precisely defined.", cn: "一种已被充分描述的现象允许脂质在两个单层之间相互交换，称为翻转机制；其生物学意义尚未被精确界定。" },
    { cz: "fluidita — určena mastnými kyselinami, sfingosiny, cholesterolem", en: "Bilayer flexibility/FLUIDITY is determined by the type and length of hydrocarbon chains of fatty acids, sphingosines, and cholesterol: more saturation, longer chains, and more cholesterol all DECREASE fluidity (Obr. 8.1).", cn: "双分子层的柔韧性/流动性由脂肪酸、鞘氨醇和胆固醇碳氢链的类型和长度决定：饱和度越高、链越长、胆固醇含量越高，流动性越低（图8.1）。" }
  ],
  terms: [
    { cz: "lipidová dvojvrstva", en: "lipid bilayer", cn: "脂质双分子层", def_en: "The structural basis of biological membranes: two lipid monolayers oriented tail-to-tail, giving a non-polar center and polar surfaces, ~3.5-4.0 nm thick.", def_cn: "生物膜的结构基础：两个脂质单层以尾对尾方式取向，形成非极性中心和极性表面，厚约3.5-4.0 nm。" },
    { cz: "asymetrie lipidového složení", en: "lipid-composition asymmetry", cn: "脂质组成不对称性", def_en: "The phenomenon whereby the two monolayers of a membrane differ in lipid composition (e.g. cerebrosides/gangliosides concentrated in the outer leaflet), varying by membrane type/function/age.", def_cn: "膜的两个单层脂质组成不同的现象（如脑苷脂/神经节苷脂集中在外层），因膜的种类/功能/年龄而异。" },
    { cz: "překlopný mechanismus (flip-flop)", en: "flip-flop mechanism", cn: "翻转机制", def_en: "A described mechanism allowing lipid exchange between the two membrane monolayers; biological significance not yet precisely defined.", def_cn: "一种允许脂质在膜两个单层间交换的机制；其生物学意义尚未被精确界定。" },
    { cz: "fluidita membrány", en: "membrane fluidity", cn: "膜流动性", def_en: "A basic physical property of the lipid bilayer, decreased by higher saturated-fatty-acid content, longer chains, and more cholesterol.", def_cn: "脂质双分子层的基本物理性质，饱和脂肪酸含量越高、链越长、胆固醇越多，流动性越低。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What orientation do the two lipid monolayers adopt relative to each other, and what does this produce?",
      q_cn: "两个脂质单层相对彼此采取怎样的取向？这产生了什么结果？",
      options: [
        "Head-to-head, producing two non-polar surfaces around a polar centre",
        "Tail-to-tail, producing a non-polar center and two polar surfaces",
        "Head-to-tail, in parallel, producing a uniformly polar structure",
        "Randomly mixed, with no defined orientation between the two"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "This is the bilayer turned inside out. It would put the polar heads in the middle and press the hydrophobic tails against the water on both sides — the opposite of what makes the arrangement hold together.", cn: "这是把双层里外翻转了。那样极性头基会挤在中间，而疏水的尾巴两侧都贴着水——正好和维持这个排列的道理相反。" },
        2: { en: "Parallel monolayers would give no distinct interior at all, and the book measures one: a markedly non-polar centre, across a total thickness of 3.5 to 4.0 nm.", cn: "平行排列根本不会形成一个独立的内部区域，而教材恰恰量出了一个：明显非极性的中心，整体厚度 3.5 到 4.0 nm。" },
        3: { en: "The arrangement is in fact identical in both monolayers. What differs between them is the lipid COMPOSITION — cerebrosides and gangliosides sit generally in the outer one — and the book calls that asymmetry.", cn: "两个单层的排列方式其实完全相同。它们之间不同的是脂类的组成——cerebroside 和 ganglioside 一般位于外层——教材称之为不对称性。" }
      },
      why_en: "The book states the two monolayers are oriented 'tail to tail', producing a bilayer with a markedly non-polar center and two polar surfaces, roughly 3.5-4.0 nm thick.",
      why_cn: "教材指出两个单层以“尾对尾”方式取向，形成中央高度非极性、两侧表面为极性的双分子层，厚度约3.5-4.0 nm。"
    },
    {
      type: "mcq",
      q_en: "Which three factors does the book name as determining the fluidity of the lipid bilayer, and in which direction does each push fluidity?",
      q_cn: "教材提到哪三个因素决定脂质双分子层的流动性？每个因素分别朝哪个方向影响流动性？",
      options: [
        "Protein content, membrane thickness and pH — all of them decreasing fluidity as they rise",
        "Saturation and length of hydrocarbon chains, and cholesterol content — all DECREASE fluidity as they increase",
        "Temperature, glycoprotein content and the age of the membrane — all three of them increasing fluidity as they rise",
        "Cholesterol content alone; chain length and saturation make no difference either way"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "None of the three is named here. What the book names are the type and length of the hydrocarbon chains — of the fatty acids and of the sphingosines — together with cholesterol.", cn: "这三个在这里都没有被点名。教材点名的是烃链的类型和长度——脂肪酸的和 sphingosine 的——外加 cholesterol。" },
        2: { en: "Age is mentioned, but for something else entirely: it is one of the things that varies the DEGREE of lipid-composition asymmetry between the two monolayers, not the fluidity of the bilayer.", cn: "「年龄」确实被提到过，但说的是另一回事：它影响的是两个单层之间脂类组成不对称的程度，不是双层的流动性。" },
        3: { en: "Cholesterol is one of three factors, not the only one. Greater saturation and longer chains each stiffen the bilayer in exactly the same direction cholesterol does.", cn: "Cholesterol 只是三个因素之一，不是唯一。饱和度更高、链更长，各自都在和 cholesterol 完全相同的方向上让双层变硬。" }
      },
      why_en: "The book states fluidity is determined by the type/length of hydrocarbon chains of fatty acids, sphingosines, and cholesterol: higher saturated fatty acid content, longer chains, and higher cholesterol content all decrease bilayer fluidity.",
      why_cn: "教材指出流动性由脂肪酸、鞘氨醇和胆固醇碳氢链的类型/长度决定：饱和脂肪酸含量越高、链越长、胆固醇含量越高，双分子层流动性越低。"
    },
    {
      type: "short",
      q_en: "Explain lipid-composition asymmetry and the flip-flop mechanism, and how they relate to each other.",
      q_cn: "解释脂质组成不对称性和翻转机制，并说明二者的关系。",
      accept: ["asymmetry", "cerebroside", "ganglioside", "flip-flop", "outer monolayer", "不对称", "脑苷脂", "神经节苷脂", "翻转"],
      answer_en: "Asymmetry is the fact that the two monolayers of a membrane differ in lipid composition (e.g. cerebrosides/gangliosides concentrated in the outer monolayer), varying by membrane type/function/age. The flip-flop mechanism is a separate, well-described phenomenon allowing lipids to exchange between the two monolayers — its biological significance is not yet precisely defined, and the book does not say it erases asymmetry.",
      answer_cn: "不对称性是指膜的两个单层脂质组成不同（如脑苷脂/神经节苷脂集中在外层），其程度因膜的种类/功能/年龄而异。翻转机制是另一个已被充分描述的现象，允许脂质在两个单层间交换——其生物学意义尚未被精确界定，教材并未说它会消除不对称性。"
    }
  ],
  oral: {
    q_en: "Describe the structure of the lipid bilayer, its asymmetry, the flip-flop mechanism, and what determines its fluidity.",
    q_cn: "请描述脂质双分子层的结构、其不对称性、翻转机制，以及决定其流动性的因素。",
    model_en: "The whole structural foundation of a biological membrane comes down to a bilayer of lipids. Within each single layer, the molecules line up so their hydrophobic tails all cluster together and their hydrophilic heads all cluster together, and every one of those interactions, head or tail, is non-covalent. Then the two layers sit tail-to-tail against each other, which is what gives the finished bilayer its signature shape: a strongly non-polar core sandwiched between two polar surfaces, and that whole structure comes out to roughly three and a half to four nanometers thick. Now, even though every monolayer is built the same way structurally, the actual mix of lipids in the outer layer isn't the same as in the inner layer — cerebrosides and gangliosides, for instance, tend to sit in the outer monolayer specifically. That's called lipid asymmetry, and how pronounced it is depends on the membrane's type, its function, even its age. There's also a described mechanism, called flip-flop, that lets lipids hop from one monolayer to the other, though what that's actually for biologically isn't pinned down yet. And finally, the bilayer's defining physical trait is its fluidity, and that's set by the fatty acid, sphingosine, and cholesterol chains involved: the more saturated they are, the longer they are, and the more cholesterol is mixed in, the less fluid — the stiffer — the whole bilayer becomes.",
    checklist: [
      "Described bilayer structure: tails together, heads together, non-covalent interactions",
      "Stated tail-to-tail orientation gives non-polar center, polar surfaces, ~3.5-4.0 nm thick",
      "Defined lipid-composition asymmetry with the cerebroside/ganglioside outer-monolayer example",
      "Named the flip-flop mechanism and noted its biological significance is undefined",
      "Named the three fluidity determinants (FA saturation, chain length, cholesterol) and their direction of effect"
    ]
  }
},

{
  id: "8-5-2-2",
  book: "cz",
  topicKey: "membrane-architecture",
  chapter: 8,
  section: "8.5.2",
  czTitle: "Struktura — membránové proteiny",
  enTitle: "Structure — membrane proteins",
  cnTitle: "结构——膜蛋白",
  pages: [199],
  coverage: "full",
  coverageNote: "Full text of the unnumbered 'Membránové proteiny' subheading under 8.5.2 on page 199 read directly, plus Obr. 8.2 (the plasma-membrane diagram) and its full caption/label key (IP1, IP2, PPP, PPS, GP, C) verified by direct re-read.",
  cnNote: { topic: null, title: "膜蛋白的结构分类（外周蛋白/整合蛋白）与流体镶嵌模型 — 笔记中未找到明确对应主题（该内容属于膜蛋白/细胞生物学通论，而非笔记'三 脂质'条目下列出的脂质化学子主题）", status: "pending" },
  mustKnow: { en: "PERIPHERAL proteins touch only the polar heads, are held non-covalently and come off easily; INTEGRAL proteins sit in the hydrophobic core and do not. Both move — rotationally, and laterally within the plane — but the FLIP-FLOP that lipids manage has NOT been found for proteins, so a protein's orientation across the membrane is permanent. That movement then permits conformational change, which the book treats as a regulatory signal in its own right.", cn: "**外周蛋白**只接触脂质的极性头部，靠非共价力结合，容易被剥离；**整合蛋白**嵌在疏水核心里，剥不下来。两者都会运动——绕轴旋转、在膜平面内侧向移动——但脂质做得到的 FLIP-FLOP 在蛋白质身上**没有**观察到，所以一个蛋白跨膜的朝向是永久的。运动之后可发生构象变化，教材把这本身当作一种调节信号。" },
  summary: {
    en: "Complete biological membranes always contain proteins bound to the lipid bilayer in two ways: (1) some are located on the surface and interact only with the polar head of lipids — these are called PERIPHERAL membrane proteins; (2) others are embedded in the lipid bilayer and interact with the hydrophobic tails of lipids — these are called INTEGRAL membrane proteins. The relative proportion of peripheral to integral proteins again differs by membrane type/function; important factors are the asymmetric distribution of proteins in both lipid monolayers and the type of protein-protein and protein-lipid interaction. Peripheral proteins are bound non-covalently, via the polar side chains of amino acids, to the hydrophilic surface of the bilayer, and can be released from the membrane and isolated as pure proteins by a relatively simple procedure. Integral proteins differ in their degree of embedding into the hydrophobic interior of the membrane — some are anchored from only one side of the bilayer, others can span the membrane. Integral proteins are held in the membrane by hydrophobic interaction of non-polar amino-acid side chains with the tails of the fatty acids. The components of biological membranes are in constant motion — this dynamic is captured by the FLUID MOSAIC model. Protein movement can be rotational or lateral within the plane of the membrane; the flip-flop mechanism found for lipids has NOT been found for proteins. Following movement within the membrane, proteins can undergo conformational changes, which often serve as a signal for further conformational changes in neighboring proteins in the immediate vicinity, and in a broader sense are a significant regulatory factor of membrane biological activity. Obr. 8.2 (the plasma membrane figure) labels: IP1 = an integral protein NOT spanning the membrane, IP2 = an integral protein spanning the membrane, PPP = a peripheral protein of the periplasmic type, PPS = a peripheral protein of the spectrin type, GP = a glycoprotein, C = the carbohydrate unit of the glycoprotein.",
    cn: "完整的生物膜总是含有以两种方式与脂质双分子层结合的蛋白质：（1）有些位于表面，只与脂质的极性头部相互作用——称为外周膜蛋白；（2）有些嵌入脂质双分子层中，与脂质的疏水尾部相互作用——称为整合膜蛋白。外周蛋白与整合蛋白的相对比例同样因膜的种类/功能而异；重要的影响因素包括蛋白质在两个脂质单层中的不对称分布，以及蛋白质-蛋白质、蛋白质-脂质相互作用的类型。外周蛋白通过氨基酸极性侧链，以非共价方式结合于双分子层的亲水表面，可以用相对简单的方法从膜上释放并分离为纯蛋白。整合蛋白嵌入膜疏水内部的程度各不相同——有些只从双分子层的一侧锚定，有些则能贯穿整个膜。整合蛋白靠非极性氨基酸侧链与脂肪酸尾部的疏水相互作用被固定在膜中。生物膜的各组分处于不断的运动之中——这种动态被称为流体镶嵌模型。蛋白质的运动可以是在膜平面内的旋转或侧向运动；脂质中发现的翻转机制在蛋白质中并未被发现。膜内运动之后，蛋白质可发生构象变化，这种变化常常成为邻近蛋白质发生进一步构象变化的信号，从更广的意义上说，是膜生物活性的重要调节因素。图8.2（质膜示意图）标注：IP1＝不贯穿膜的整合蛋白，IP2＝贯穿膜的整合蛋白，PPP＝周质型外周蛋白，PPS＝血影蛋白（spectrin）型外周蛋白，GP＝糖蛋白，C＝糖蛋白的糖链单位。"
  },
  points: [
    { cz: "periferní proteiny — povrch, jen s hlavou lipidů, nekovalentně", en: "PERIPHERAL membrane proteins sit on the surface, interacting only with the polar head of lipids, bound non-covalently via polar amino-acid side chains; they can be released relatively simply and isolated as pure proteins.", cn: "外周膜蛋白位于表面，只与脂质的极性头部相互作用，通过氨基酸极性侧链以非共价方式结合；可用相对简单的方法从膜上释放并分离为纯蛋白。" },
    { cz: "integrální proteiny — zanořeny, hydrofobní interakce s ocasy", en: "INTEGRAL membrane proteins are embedded in the bilayer, interacting with the hydrophobic fatty-acid tails via hydrophobic interaction of non-polar side chains; some anchor from only one side, others span the membrane.", cn: "整合膜蛋白嵌入双分子层，通过非极性侧链与脂肪酸尾部的疏水相互作用结合；有些只从一侧锚定，有些则贯穿整个膜。" },
    { cz: "model fluidní mozaiky", en: "The components of biological membranes are in constant motion — captured by the FLUID MOSAIC model.", cn: "生物膜的各组分处于不断运动之中——这被称为流体镶嵌模型。" },
    { cz: "pohyb proteinů: rotační, stranový; NE překlopný", en: "Protein movement can be ROTATIONAL or LATERAL within the membrane plane; the flip-flop mechanism found for lipids has NOT been found for proteins.", cn: "蛋白质的运动可以是膜平面内的旋转或侧向运动；脂质中的翻转机制在蛋白质中并未被发现。" },
    { cz: "konformační změny = regulační signál", en: "Following movement, proteins can undergo conformational changes, which often signal further conformational changes in neighboring proteins and act as a significant regulatory factor for membrane biological activity.", cn: "运动之后，蛋白质可发生构象变化，这常常成为邻近蛋白质进一步构象变化的信号，是膜生物活性的重要调节因素。" },
    { cz: "Obr. 8.2: IP1, IP2, PPP, PPS, GP, C", en: "Obr. 8.2 labels: IP1 = integral protein not spanning the membrane, IP2 = integral protein spanning the membrane, PPP = peripheral protein (periplasmic type), PPS = peripheral protein (spectrin type), GP = glycoprotein, C = the glycoprotein's carbohydrate unit.", cn: "图8.2标注：IP1＝不贯穿膜的整合蛋白，IP2＝贯穿膜的整合蛋白，PPP＝周质型外周蛋白，PPS＝血影蛋白型外周蛋白，GP＝糖蛋白，C＝糖蛋白的糖链单位。" }
  ],
  terms: [
    { cz: "periferní membránový protein", en: "peripheral membrane protein", cn: "外周膜蛋白", def_en: "A membrane protein bound non-covalently to the hydrophilic surface via polar side chains; releasable by relatively simple methods.", def_cn: "通过极性侧链以非共价方式结合于亲水表面的膜蛋白；可用相对简单的方法释放。" },
    { cz: "integrální membránový protein", en: "integral membrane protein", cn: "整合膜蛋白", def_en: "A membrane protein embedded in the bilayer, held by hydrophobic interaction with fatty-acid tails; may or may not span the membrane.", def_cn: "嵌入双分子层的膜蛋白，靠与脂肪酸尾部的疏水相互作用固定；可能贯穿膜，也可能不贯穿。" },
    { cz: "model fluidní mozaiky", en: "fluid mosaic model", cn: "流体镶嵌模型", def_en: "The model capturing the constant dynamic motion of membrane lipids and proteins.", def_cn: "描述膜脂质和蛋白质持续动态运动的模型。" },
    { cz: "translační/stranový pohyb", en: "rotational / lateral movement", cn: "旋转／侧向运动", def_en: "The two types of in-plane movement available to membrane proteins (unlike lipids, no flip-flop between monolayers).", def_cn: "膜蛋白在膜平面内可进行的两种运动方式（与脂质不同，蛋白质没有单层间的翻转运动）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What distinguishes a peripheral membrane protein from an integral one, per the book?",
      q_cn: "根据教材，外周膜蛋白与整合膜蛋白有何区别？",
      options: [
        "Peripheral proteins span the membrane and are held by hydrophobic interactions with the fatty-acid tails, while integral proteins sit on the surface and touch only the polar lipid heads, coming off relatively simply",
        "Peripheral proteins interact only with the polar lipid head and bind non-covalently on the surface; integral proteins embed into the hydrophobic interior via hydrophobic interactions",
        "The two terms are interchangeable, since every membrane protein touches both the polar heads and the hydrophobic tails",
        "Peripheral proteins are always glycosylated and integral ones never are, which is how Obr. 8.2 tells the two apart"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Every element here is right but assigned to the wrong name. It is the INTEGRAL proteins that embed in the hydrophobic interior and may span the membrane; the peripheral ones sit on the surface and can be released relatively simply.", cn: "这里每一项本身都对，只是安错了名字。嵌进疏水内部、并且可能贯穿全膜的是 integral 蛋白；peripheral 蛋白位于表面，而且相对容易被释放下来。" },
        2: { en: "The distinction is real and Obr. 8.2 labels it four ways: IP1 an integral protein that does not span the membrane, IP2 one that does, and PPP and PPS two kinds of peripheral protein.", cn: "这个区分是实在的，Obr. 8.2 还分了四种来标：IP1 是不贯穿全膜的 integral 蛋白，IP2 是贯穿的，PPP 和 PPS 则是两类 peripheral 蛋白。" },
        3: { en: "Glycosylation is a separate axis altogether. Obr. 8.2 gives the glycoprotein its own label, GP, with C marking its carbohydrate unit — alongside the peripheral/integral pair rather than instead of it.", cn: "糖基化完全是另一个维度。Obr. 8.2 给 glycoprotein 单列了一个标签 GP，用 C 标出它的糖单元——它和 peripheral/integral 那一对是并列的，不是替代关系。" }
      },
      why_en: "The book defines peripheral proteins as surface-located, interacting only with the polar lipid head via non-covalent bonds to polar side chains, while integral proteins are embedded in the bilayer, held by hydrophobic interactions with the fatty-acid tails, and may or may not span the membrane.",
      why_cn: "教材将外周蛋白定义为位于表面、只与脂质极性头部相互作用、通过极性侧链以非共价方式结合；而整合蛋白嵌入双分子层，靠与脂肪酸尾部的疏水相互作用固定，可能贯穿膜也可能不贯穿。"
    },
    {
      type: "mcq",
      q_en: "Which type of membrane movement, found for lipids, has NOT been found for membrane proteins?",
      q_cn: "在脂质中发现的哪种膜内运动方式，尚未在膜蛋白中被发现？",
      options: [
        "Rotational movement about the protein's own axis",
        "Lateral movement within the plane of the membrane, from one region to another",
        "The flip-flop mechanism (exchange between monolayers)",
        "Conformational change signalled to a neighbour"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Rotational movement is one of the two the book explicitly grants membrane proteins. In the fluid mosaic model all the components are in constant motion; the question is which kind of motion is missing.", cn: "旋转运动是教材明确承认膜蛋白具有的两种运动之一。在 fluid mosaic 模型里所有组分都在不停运动；题目问的是缺了哪一种。" },
        1: { en: "Lateral movement in the plane of the membrane is the other motion proteins do have. What they cannot do is cross from one monolayer to the other, so their orientation across the membrane is permanent.", cn: "在膜平面内的侧向运动是膜蛋白确实具有的另一种运动。它们做不到的是从一个单层翻到另一个单层，所以蛋白跨膜的取向是固定不变的。" },
        3: { en: "Conformational change is not only found in membrane proteins but treated as a significant regulatory factor: a change in one protein often signals further changes in its neighbours.", cn: "构象变化不但在膜蛋白上存在，还被当作一个重要的调控因素：一个蛋白的构象变化常常引发相邻蛋白的进一步变化。" }
      },
      why_en: "The book states protein movement can be rotational or lateral within the membrane plane, but explicitly notes the flip-flop mechanism found for lipids has NOT been found for proteins.",
      why_cn: "教材指出蛋白质的运动可以是膜平面内的旋转或侧向运动，但明确指出脂质中发现的翻转机制在蛋白质中并未被发现。"
    },
    {
      type: "short",
      q_en: "Using Obr. 8.2's own labels, distinguish IP1 from IP2, and PPP from PPS.",
      q_cn: "根据图8.2的标注，区分IP1与IP2，以及PPP与PPS。",
      accept: ["integral", "spanning", "periplasmic", "spectrin", "整合", "贯穿", "周质", "血影蛋白"],
      answer_en: "IP1 is an integral protein NOT spanning the membrane; IP2 is an integral protein that DOES span the membrane. PPP is a peripheral protein of the periplasmic type; PPS is a peripheral protein of the spectrin type.",
      answer_cn: "IP1是不贯穿膜的整合蛋白；IP2是贯穿膜的整合蛋白。PPP是周质型外周蛋白；PPS是血影蛋白（spectrin）型外周蛋白。"
    }
  ],
  oral: {
    q_en: "Explain the two ways membrane proteins associate with the lipid bilayer, and describe the fluid mosaic model.",
    q_cn: "请解释膜蛋白与脂质双分子层结合的两种方式，并描述流体镶嵌模型。",
    model_en: "Every complete biological membrane has proteins attached to its lipid bilayer in one of two ways. Peripheral proteins just sit on the surface, only ever touching the polar heads of the lipids, held on non-covalently through the polar side chains of their amino acids — and because that attachment is relatively weak and superficial, you can actually strip these proteins off the membrane fairly easily and isolate them in pure form. Integral proteins are a different story: they're actually embedded into the membrane, interacting with the hydrophobic fatty-acid tails through hydrophobic side-chain interactions, and how deep they go varies — some only poke in from one side, others go all the way through, spanning the whole bilayer. All of this — lipids and proteins alike — is in constant motion, which is exactly what the fluid mosaic model is describing. Proteins specifically can rotate in place or drift laterally within the plane of the membrane, though interestingly, the flip-flop movement that lipids do between the two monolayers has never been observed for proteins. And once a protein has moved or shifted, it can undergo a conformational change, which frequently acts as a signal that triggers further conformational changes in nearby proteins — making this movement, in a broader sense, an important way the membrane regulates its own biological activity.",
    checklist: [
      "Defined peripheral proteins: surface, polar-head interaction, non-covalent, easily isolated",
      "Defined integral proteins: embedded, hydrophobic tail interaction, may or may not span",
      "Named the fluid mosaic model for constant membrane component motion",
      "Distinguished rotational/lateral protein movement from the lipid-only flip-flop",
      "Explained conformational change as a regulatory signal to neighboring proteins",
      "Could label Obr. 8.2's IP1/IP2/PPP/PPS/GP/C"
    ]
  }
},

{
  id: "8-5-2-3",
  book: "cz",
  topicKey: "membrane-architecture",
  chapter: 8,
  section: "8.5.2",
  czTitle: "Struktura — funkce membránových proteinů",
  enTitle: "Structure — functions of membrane proteins",
  cnTitle: "结构——膜蛋白的功能",
  pages: [200],
  coverage: "full",
  coverageNote: "Full text of the unnumbered 'Funkce membránových proteinů' subheading (the last part of 8.5.2, at the top of page 200, immediately before the '8.5.3 Membránový transport' heading) read directly.",
  cnNote: { topic: null, title: "膜蛋白按结构性/动态性及三种动态蛋白类型的功能分类 — 笔记中未找到明确对应主题（该内容属于膜蛋白/细胞生物学通论，而非笔记'三 脂质'条目下列出的脂质化学子主题）", status: "pending" },
  mustKnow: { en: "By role, membrane proteins split into STRUCTURAL and DYNAMIC, and the book says outright that the boundary between them is not sharp. The dynamic ones come in three types, present in essentially every cell type: TRANSPORT (moving substances into and out of the cell), CATALYTIC (enzyme reactions bound to the membrane), and RECEPTOR (binding hormones, toxins and transmitters on the OUTER surface and turning that binding into a signal inside).", cn: "按作用分，膜蛋白分成**结构性**与**动态性**两类，教材直言两者的界线并不清晰。动态蛋白有三种，基本上每种细胞里都有：**运输**（把物质送进送出细胞）、**催化**（结合在膜上的酶反应）、**受体**（在膜的**外**表面结合激素、毒素、递质，并把这次结合转成细胞内的信号）。" },
  summary: {
    en: "Membrane proteins, both integral and peripheral, can be divided by their role in the membrane into STRUCTURAL and DYNAMIC proteins. The boundary between the two types is by no means sharp, but structural proteins can be understood as those that help maintain the structure and mutual interactions of biological-membrane components; these proteins often have an elongated, fibrous shape, are located on the hydrophilic surface of the membrane, and function as a kind of anchoring rope. Dynamic proteins are responsible for the cellular processes that are realized at the level of biological membranes. In all cell types, three types of dynamic proteins are usually present: (1) TRANSPORT proteins, mediating the movement of substances into the cell and out of the cell; (2) CATALYTIC proteins, mediating enzyme reactions bound to biological membranes; and (3) RECEPTOR proteins, mediating the specific binding of certain substances (hormones, toxins, transmitters) on the outer side of the membrane, providing a signal that leads to biochemical changes in the membrane or in the space the membrane bounds.",
    cn: "膜蛋白，无论是整合的还是外周的，都可以按其在膜中的作用分为结构蛋白和动态蛋白。这两种类型之间的界限并不十分清晰，但结构蛋白可以理解为帮助维持生物膜组分结构及相互作用的那些蛋白质；这些蛋白质常呈细长的纤维状，位于膜的亲水表面，起到一种“锚定绳索”的作用。动态蛋白负责在生物膜层面实现的各种细胞过程。在所有细胞类型中，通常存在三种动态蛋白：（1）转运蛋白，介导物质进出细胞的运动；（2）催化蛋白，介导与生物膜结合的酶促反应；（3）受体蛋白，介导特定物质（激素、毒素、递质）在膜外侧的特异性结合，提供信号，导致膜内或膜所包围空间发生生化变化。"
  },
  points: [
    { cz: "strukturní vs dynamické proteiny (hranice není ostrá)", en: "Membrane proteins (integral or peripheral) divide by role into STRUCTURAL and DYNAMIC proteins; the boundary between the two is not sharp.", cn: "膜蛋白（无论整合还是外周）按作用分为结构蛋白和动态蛋白；二者的界限并不十分清晰。" },
    { cz: "strukturní proteiny — vláknitý tvar, hydrofilní povrch, 'zakotvující lana'", en: "STRUCTURAL proteins help maintain the structure/interactions of membrane components; often elongated/fibrous, located on the hydrophilic surface, functioning like anchoring ropes.", cn: "结构蛋白帮助维持膜组分的结构和相互作用；常呈细长的纤维状，位于亲水表面，起“锚定绳索”的作用。" },
    { cz: "dynamické proteiny — 3 typy: transportní, katalytické, receptorové", en: "DYNAMIC proteins are responsible for cellular processes at the membrane level; three types are usually present in all cell types: TRANSPORT, CATALYTIC, and RECEPTOR proteins.", cn: "动态蛋白负责膜层面的细胞过程；所有细胞类型中通常存在三种：转运蛋白、催化蛋白和受体蛋白。" },
    { cz: "1) transportní proteiny — pohyb látek do/z buňky", en: "(1) Transport proteins mediate the movement of substances into and out of the cell.", cn: "（1）转运蛋白介导物质进出细胞的运动。" },
    { cz: "2) katalytické proteiny — enzymové reakce vázané na membrány", en: "(2) Catalytic proteins mediate enzyme reactions bound to biological membranes.", cn: "（2）催化蛋白介导与生物膜结合的酶促反应。" },
    { cz: "3) receptorové proteiny — vazba hormonů, toxinů, transmiterů → signál", en: "(3) Receptor proteins mediate specific binding of substances (hormones, toxins, transmitters) on the outer membrane surface, providing a signal leading to biochemical changes in the membrane or the space it bounds.", cn: "（3）受体蛋白介导特定物质（激素、毒素、递质）在膜外侧的特异性结合，提供信号，导致膜内或膜所包围空间发生生化变化。" }
  ],
  terms: [
    { cz: "strukturní protein (membránový)", en: "structural (membrane) protein", cn: "结构（膜）蛋白", def_en: "A membrane protein that helps maintain the structure and interactions of membrane components; often fibrous, on the hydrophilic surface.", def_cn: "帮助维持膜组分结构和相互作用的膜蛋白；常呈纤维状，位于亲水表面。" },
    { cz: "dynamický protein (membránový)", en: "dynamic (membrane) protein", cn: "动态（膜）蛋白", def_en: "A membrane protein responsible for cellular processes realized at the membrane level; divided into transport, catalytic, and receptor types.", def_cn: "负责在膜层面实现细胞过程的膜蛋白；分为转运型、催化型和受体型。" },
    { cz: "receptorový protein", en: "receptor protein", cn: "受体蛋白", def_en: "A dynamic membrane protein that specifically binds hormones, toxins, or transmitters on the membrane's outer side, generating a signal for biochemical change.", def_cn: "在膜外侧特异性结合激素、毒素或递质的动态膜蛋白，产生引发生化变化的信号。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What are the three types of dynamic membrane proteins the book says are usually present in all cell types?",
      q_cn: "教材指出所有细胞类型中通常存在的三种动态膜蛋白是什么？",
      options: [
        "Structural, adhesive and signalling",
        "Transport, catalytic, and receptor proteins",
        "Contractile, secretory, and storage proteins",
        "Peripheral, integral, and glycosylated proteins"
      ],
      answer: 1,
      optionRefs: { 3: "8-5-2-2" },
      optionNotes: {
        0: { en: "Structural is a real category, but it is the OTHER half of the division — structural versus dynamic — and the book adds that the boundary between the two halves is not sharp.", cn: "Structural 确实是一个真实的类别，但它属于这个划分的另一半——structural 对 dynamic——而且教材还说这两半之间的界线并不清晰。" },
        2: { en: "None of these three is named here. The dynamic types are defined by what they do at the membrane: move substances across it, catalyse reactions on it, or bind signal molecules to it.", cn: "这三个在这里一个也没有被点名。Dynamic 类型是按它们在膜上做什么来定义的：把物质运过去、在膜上催化反应、或者在膜上结合信号分子。" },
        3: { en: "Peripheral and integral classify proteins by HOW they sit in the bilayer, not by what they do — and either kind can be structural or dynamic, which is why the two schemes are separate.", cn: "Peripheral 和 integral 是按蛋白怎样待在双层里来分类的，不是按它们做什么——而且两种都可以是 structural 或 dynamic，所以这是两套彼此独立的划分。" }
      },
      why_en: "The book names transport proteins (movement of substances in/out of the cell), catalytic proteins (membrane-bound enzyme reactions), and receptor proteins (specific binding of hormones/toxins/transmitters, generating a signal) as the three dynamic-protein types usually present.",
      why_cn: "教材指出转运蛋白（介导物质进出细胞）、催化蛋白（介导膜结合的酶促反应）和受体蛋白（特异性结合激素/毒素/递质，产生信号）是通常存在的三种动态蛋白类型。"
    },
    {
      type: "mcq",
      q_en: "How does the book describe structural membrane proteins, in contrast to dynamic ones?",
      q_cn: "教材如何描述结构膜蛋白，与动态膜蛋白相对比？",
      options: [
        "Structural proteins bind the hormones, toxins and transmitters arriving at the outer surface, while the dynamic ones are elongated and fibrous, sit on the hydrophilic surface and hold the membrane's components in place like anchoring ropes",
        "Structural proteins help maintain membrane component structure/interactions, often fibrous and on the hydrophilic surface, like anchoring ropes; dynamic proteins are responsible for cellular processes at the membrane level",
        "Structural proteins are always integral and dynamic ones always peripheral, so the two divisions of membrane protein map exactly onto each other",
        "There is no meaningful distinction, the book using the two words interchangeably"
      ],
      answer: 1,
      optionRefs: { 2: "8-5-2-2" },
      optionNotes: {
        0: { en: "The two descriptions have been exchanged. Binding hormones, toxins and transmitters is the receptor proteins' work, and receptors are one of the three DYNAMIC types; the anchoring-rope image belongs to the structural ones.", cn: "两段描述互换了。结合激素、毒素和递质是 receptor 蛋白的工作，而 receptor 属于三种 dynamic 类型之一；「锚绳」这个比喻讲的是 structural 蛋白。" },
        2: { en: "The two divisions cut across each other. The book says structural and dynamic proteins alike may be integral OR peripheral, and adds that even the structural/dynamic boundary itself is not sharp.", cn: "这两套划分是交叉的。教材说 structural 和 dynamic 蛋白都既可能是 integral 也可能是 peripheral，还补充说连 structural/dynamic 这条界线本身也不清晰。" },
        3: { en: "The distinction is drawn explicitly, and the dynamic half is then subdivided further into transport, catalytic and receptor proteins — three types the book says are usually present in every cell type.", cn: "这个区分是明确划出来的，而且 dynamic 那一半还被进一步细分为 transport、catalytic 和 receptor 三种——教材说这三种通常在各类细胞里都有。" }
      },
      why_en: "The book describes structural proteins as helping maintain the structure and mutual interactions of membrane components, often elongated/fibrous and located on the hydrophilic surface, functioning like anchoring ropes — contrasted with dynamic proteins, which are responsible for the cellular processes realized at the membrane level.",
      why_cn: "教材描述结构蛋白帮助维持膜组分的结构及相互作用，常呈细长纤维状、位于亲水表面，起“锚定绳索”的作用——与之相对，动态蛋白负责在膜层面实现的细胞过程。"
    },
    {
      type: "short",
      q_en: "For each of the three dynamic membrane protein types, give its function per the book.",
      q_cn: "针对三种动态膜蛋白类型，分别说出教材给出的功能。",
      accept: ["transport", "catalytic", "enzyme", "receptor", "hormone", "转运", "催化", "酶", "受体", "激素"],
      answer_en: "Transport proteins mediate movement of substances into/out of the cell; catalytic proteins mediate membrane-bound enzyme reactions; receptor proteins mediate specific binding of hormones/toxins/transmitters on the outer membrane surface, generating a signal for biochemical change.",
      answer_cn: "转运蛋白介导物质进出细胞；催化蛋白介导与膜结合的酶促反应；受体蛋白介导激素/毒素/递质在膜外侧的特异性结合，产生引发生化变化的信号。"
    }
  ],
  oral: {
    q_en: "Explain the structural/dynamic classification of membrane proteins and the three types of dynamic proteins.",
    q_cn: "请解释膜蛋白的结构性/动态性分类，以及三种动态蛋白类型。",
    model_en: "The book splits membrane proteins, integral or peripheral, into two functional camps: structural and dynamic, though it's upfront that the line between them isn't sharp. Structural proteins are the ones holding things together — they help maintain the structure and the interactions between membrane components, they tend to be long and fibrous, they sit on the hydrophilic surface, and the book actually compares them to anchoring ropes. Dynamic proteins are the ones doing the active work, the cellular processes that actually happen at the membrane. And in essentially every cell type, you find three kinds of these dynamic proteins. Transport proteins move substances into the cell and back out. Catalytic proteins carry out enzyme reactions that are tied specifically to the membrane. And receptor proteins specifically bind things like hormones, toxins, or transmitters on the outside of the membrane, and that binding event becomes a signal that triggers biochemical changes, either right there in the membrane or in whatever space that membrane encloses.",
    checklist: [
      "Divided membrane proteins into structural and dynamic (boundary not sharp)",
      "Described structural proteins: fibrous, hydrophilic surface, anchoring-rope role",
      "Stated dynamic proteins handle cellular processes at the membrane level",
      "Named all three dynamic types: transport, catalytic, receptor",
      "Described receptor proteins generating a signal upon binding hormones/toxins/transmitters"
    ]
  }
},

{
  id: "8-5-3-1",
  book: "cz",
  topicKey: "membrane-transport",
  chapter: 8,
  section: "8.5.3",
  czTitle: "Membránový transport — pasivní transport, prostá difúze",
  enTitle: "Membrane transport — passive transport, simple diffusion",
  cnTitle: "膜转运——被动转运、简单扩散",
  pages: [200],
  coverage: "full",
  coverageNote: "Full text of '8.5.3 Membránový transport' on page 200 read directly, through the semipermeability framing, the passive-vs-active transport definition, and the simple-diffusion paragraph, plus Obr. 8.3 and its full caption (types A, B, C) verified by direct re-read.",
  cnNote: { topic: null, title: "被动转运与简单扩散机制 — 笔记中未找到明确对应主题（该内容属于膜转运/细胞生理学通论，而非笔记'三 脂质'条目下列出的脂质化学子主题）", status: "pending" },
  mustKnow: { en: "A lipophilic molecule can cross the membrane by dissolving straight into the lipids — no protein needed, no energy, just chemistry and gradient. That is why some drugs work and others do not.", cn: "亲脂分子可以直接溶解进脂质跨越膜——无需蛋白质、无需能量，仅仅依靠化学性质和浓度梯度。这正是为什么某些药物有效而另一些无效。" },
  summary: {
    en: "Biological membranes form the boundary between two spaces — cells, or subcellular compartments. If membranes were impermeable, cells would be completely isolated, unable to take in nutrition or excrete products; conversely, if membranes were (freely) permeable, any substance could move freely between regions. Neither extreme is permitted in nature: biological membranes are SELECTIVELY permeable, i.e. SEMIPERMEABLE — some substances can pass through freely, others cannot pass freely at all. Two basic types of transport across the membrane exist: PASSIVE and ACTIVE. If a substance passes across the membrane by DIFFUSION, from a region of higher concentration to a region of its lower concentration, WITHOUT the expenditure of energy, this is called passive transport. Diffusion can be SIMPLE or FACILITATED (mediated). Simple diffusion takes place without the participation of any membrane proteins at all; the substance passes directly across the lipid bilayer, through random pores in the membrane, or through channels formed by integral membrane proteins that span the membrane. This is how LIPOPHILIC substances, water, and certain ions are transported. Obr. 8.3 illustrates three routes of simple diffusion: (A) penetration of lipophilic molecules by dissolving into the membrane lipids; (B) flow of solution, especially water, through a micropore in integral proteins; (C) penetration of small molecules through defects/disturbances in the membrane.",
    cn: "生物膜构成两个空间——细胞或亚细胞区室——之间的边界。如果膜是不通透的，细胞将被完全隔离，无法摄取营养，也无法排出产物；反之，如果膜是（完全）通透的，任何物质都能在区域间自由移动。自然界不允许这两种极端情形：生物膜是选择性通透的，即半透性的——某些物质可以自由通过，另一些则完全不能自由通过。跨膜转运存在两种基本类型：被动转运和主动转运。如果物质通过扩散跨膜，从浓度较高的区域移向浓度较低的区域，且不消耗能量，这称为被动转运。扩散可以是简单的，也可以是（介导的）易化扩散。简单扩散在完全没有任何膜蛋白参与的情况下发生；物质直接穿过脂质双分子层，通过膜上随机形成的孔隙，或通过贯穿膜的整合膜蛋白形成的通道。亲脂性物质、水和某些离子就是以这种方式转运的。图8.3展示了简单扩散的三种途径：（A）亲脂性分子通过溶解于膜脂质中而渗透；（B）溶液（尤其是水）通过整合蛋白中的微孔流动；（C）小分子通过膜上的缺陷/扰动渗透。"
  },
  points: [
    { cz: "membrány = semipermeabilní (selektivně propustné)", en: "Neither a fully impermeable nor a fully permeable membrane is found in nature; biological membranes are SELECTIVELY permeable — SEMIPERMEABLE — some substances pass freely, others cannot.", cn: "自然界中既不存在完全不通透也不存在完全通透的膜；生物膜是选择性通透的——即半透性的——某些物质可自由通过，另一些则不能。" },
    { cz: "pasivní transport = difúze po koncentračním spádu, bez energie", en: "PASSIVE TRANSPORT: a substance crosses the membrane by diffusion, from higher to lower concentration, WITHOUT energy expenditure.", cn: "被动转运：物质通过扩散跨膜，从浓度较高处移向浓度较低处，不消耗能量。" },
    { cz: "difúze: prostá vs usnadněná", en: "Diffusion can be SIMPLE or FACILITATED (mediated) — a distinction developed further in 8.5.3's next part.", cn: "扩散可以是简单扩散，也可以是（介导的）易化扩散——这一区分在8.5.3节后面进一步展开。" },
    { cz: "prostá difúze = bez membránových proteinů, přes lipidy/póry/kanály", en: "SIMPLE diffusion occurs WITHOUT any membrane protein participation: directly through the lipid bilayer, through random pores, or through channels formed by membrane-spanning integral proteins. Transports LIPOPHILIC substances, water, and some ions.", cn: "简单扩散完全不需要膜蛋白参与：直接通过脂质双分子层、随机孔隙，或贯穿膜的整合蛋白形成的通道。转运亲脂性物质、水和某些离子。" },
    { cz: "FLAG: definice prosté difúze si odporuje ve vlastní větě (str. 200)", en: "FLAGGED, checked word for word against the scan of p.200 on 2026-08-14. The book prints: 'Prosta difuze se uskutecnuje bez jakekoliv ucasti membranovych proteinu, k transportu dochazi primo pres lipidni dvojnou vrstvu, nahodilymi pory v membrane nebo kanalky vytvorenymi integralnimi membranovymi proteiny protinajicimi membranu.' One sentence denies protein involvement and then lists protein channels as a route, and Obr. 8.3's route (B) is drawn as a micropore IN integral proteins. This is the book's own incoherence, transcribed as printed. Standard usage: transport through a protein channel is FACILITATED diffusion, not simple diffusion — say so if challenged.", cn: "**已标记，2026-08-14 对照 p.200 扫描件逐字核实**。书上原文是：「Prostá difúze se uskutečňuje bez jakékoliv účasti membránových proteinů, k transportu dochází přímo přes lipidní dvojnou vrstvu, nahodilými póry v membráně nebo kanálky vytvořenými integrálními membránovými proteiny protínajícími membránu.」同一句话先否定膜蛋白参与，又把「跨膜整合蛋白形成的通道」列为途径之一；Obr. 8.3 的途径 (B) 画的正是整合蛋白里的微孔。这是教材自身的不自洽，按原文保留。通行用法：经蛋白通道的转运属于 **facilitated diffusion**，不是简单扩散——被追问时就这样答。" },
    { cz: "Obr. 8.3: A) lipofilní rozpouštěním, B) tok vodou mikropórem, C) poruchami membrány", en: "Obr. 8.3's three simple-diffusion routes: (A) lipophilic molecules dissolving directly into membrane lipids, (B) solution flow (especially water) through a micropore in integral proteins, (C) small molecules through defects/disturbances in the membrane.", cn: "图8.3的三种简单扩散途径：（A）亲脂性分子直接溶解于膜脂质，（B）溶液（尤其是水）通过整合蛋白中的微孔流动，（C）小分子通过膜上的缺陷/扰动。" }
  ],
  terms: [
    { cz: "semipermeabilní membrána", en: "semipermeable membrane", cn: "半透膜", def_en: "A membrane that is selectively permeable — some substances pass freely, others do not — as biological membranes are, per the book.", def_cn: "选择性通透的膜——某些物质可自由通过，另一些则不能——据教材所述，生物膜即是如此。" },
    { cz: "pasivní transport", en: "passive transport", cn: "被动转运", def_en: "Movement of a substance across a membrane by diffusion, down its concentration gradient, without energy expenditure.", def_cn: "物质通过扩散跨膜、顺浓度梯度移动，不消耗能量。" },
    { cz: "prostá difúze", en: "simple diffusion", cn: "简单扩散", def_en: "Passive transport occurring without any membrane protein participation, via the lipid bilayer directly, random pores, or membrane-spanning protein channels.", def_cn: "不需要任何膜蛋白参与的被动转运，通过脂质双分子层直接扩散、随机孔隙或贯穿膜的蛋白质通道。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How does the book characterize the permeability of real biological membranes?",
      q_cn: "教材如何描述真实生物膜的通透性？",
      options: [
        "Completely impermeable, isolating the cell entirely from its environment",
        "Freely permeable, letting any substance through in either direction",
        "Selectively (semipermeable) permeable — some substances pass freely, others cannot",
        "Permeable to water alone, and completely impermeable to everything else that meets it"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "The book names this extreme precisely in order to reject it: no fully impermeable membrane is found in nature, and a cell sealed off that completely could exchange neither matter nor energy with its surroundings.", cn: "教材提到这个极端，正是为了否定它：自然界中不存在完全不透的膜，而一个封闭到这种程度的细胞，既无法与环境交换物质，也无法交换能量。" },
        1: { en: "The opposite extreme, rejected in the same sentence. A membrane that let everything through would partition nothing, and selectivity is what the whole of 8.5.3 is about.", cn: "另一个极端，教材在同一句话里一并否定。什么都放行的膜等于什么也没有分隔，而整个 8.5.3 讲的就是选择性。" },
        3: { en: "Water does cross, and the book lists it among the things that pass — but so do lipophilic substances and some ions, so water is not the only case and the second half of this option is too strong.", cn: "水确实能通过，教材也把它列在能通过的东西里——但亲脂性物质和某些离子同样能通过，所以水不是唯一的例外，这个选项的后半句说得太满了。" }
      },
      why_en: "The book explicitly rejects both extremes (fully impermeable, fully permeable) as not found in nature, stating biological membranes are selectively permeable — semipermeable.",
      why_cn: "教材明确否定了两种极端情形（完全不通透、完全通透）在自然界中的存在，指出生物膜是选择性通透的——即半透性的。"
    },
    {
      type: "mcq",
      q_en: "What defines passive transport, per the book, and what are its two sub-types?",
      q_cn: "根据教材，被动转运的定义是什么？它有哪两种子类型？",
      options: [
        "Movement against the concentration gradient at the cost of ATP or another exergonic reaction; its sub-types are primary and secondary transport",
        "Movement by diffusion down the concentration gradient, without energy expenditure; sub-types are simple and facilitated diffusion",
        "Movement through ion channels only, which is why it always needs a carrier protein of some kind",
        "Movement of macromolecules in vesicles; its sub-types are endocytosis and exocytosis, by direction"
      ],
      answer: 1,
      optionRefs: { 0: "8-5-3-3", 2: "8-5-3-2", 3: "8-5-3-3" },
      optionNotes: {
        0: { en: "This describes ACTIVE transport, and the pair of sub-types is right for it — primary running on ATP or another exergonic reaction, secondary on a gradient built earlier. Passive transport is defined by the absence of exactly that energy cost.", cn: "这说的是主动运输，而且它的两个亚型也配对得对——primary 靠 ATP 或别的放能反应，secondary 靠先前建立的梯度。被动运输的定义恰恰是没有这笔能量开销。" },
        2: { en: "Ion channels and ionophores are the specialised carriers of facilitated diffusion, which is only one of passive transport's two sub-types — and the definition of passive transport turns on the gradient, not on the route.", cn: "Ion channel 和 ionophore 是 facilitated diffusion 的专门载体，而后者只是被动运输两个亚型之一——况且被动运输的定义取决于梯度，而不是取决于走哪条路。" },
        3: { en: "Endocytosis and exocytosis classify the transport of macromolecules and whole particles by direction, and that transport proceeds by local restructuring of the membrane rather than by diffusion at all.", cn: "Endocytosis 和 exocytosis 是按方向给大分子和整个颗粒的运输分类的，而那种运输靠的是膜的局部改建，根本不是扩散。" }
      },
      why_en: "The book defines passive transport as diffusion from higher to lower concentration without energy expenditure, and distinguishes simple diffusion (no protein involvement) from facilitated/mediated diffusion (carrier-protein involvement, covered in the next node).",
      why_cn: "教材将被动转运定义为从浓度较高处到较低处的扩散、不消耗能量，并区分了简单扩散（无蛋白质参与）和易化/介导扩散（需要载体蛋白参与，见下一节）。"
    },
    {
      type: "short",
      q_en: "Describe the three routes of simple diffusion shown in Obr. 8.3.",
      q_cn: "描述图8.3中展示的简单扩散三种途径。",
      accept: ["lipophilic", "micropore", "water", "defect", "亲脂", "微孔", "水", "缺陷"],
      answer_en: "(A) Lipophilic molecules penetrate by dissolving directly into the membrane lipids. (B) Solution, especially water, flows through a micropore formed by integral proteins. (C) Small molecules penetrate through defects/disturbances in the membrane.",
      answer_cn: "（A）亲脂性分子通过溶解于膜脂质而渗透。（B）溶液（尤其是水）通过整合蛋白形成的微孔流动。（C）小分子通过膜上的缺陷/扰动渗透。"
    }
  ],
  oral: {
    q_en: "Explain why biological membranes are semipermeable, and describe passive transport and simple diffusion.",
    q_cn: "请解释为什么生物膜是半透性的，并描述被动转运和简单扩散。",
    model_en: "Think about what would happen at either extreme: if membranes were completely impermeable, a cell would be totally sealed off, unable to take in nutrients or push out waste products; if they were completely permeable, there'd be no separation at all, anything could just wander freely between compartments. Neither of those actually happens in nature — real biological membranes sit in between, selectively permeable, or semipermeable, letting some substances through freely while blocking others. When a substance does cross by diffusion, moving from where it's more concentrated to where it's less concentrated, and doing so without spending any energy, that's called passive transport. And passive transport itself splits into two flavors: simple diffusion and facilitated diffusion. Simple diffusion is the version with no membrane proteins involved at all — the substance just goes straight through the lipid bilayer itself, or slips through random pores, or passes via channels that happen to be formed by integral proteins spanning the membrane. This is exactly how lipophilic substances, water, and some ions get across. The book's own figure lays out three concrete versions of this: lipophilic molecules dissolving straight into the membrane lipids, water flowing through a micropore inside an integral protein, and small molecules slipping through outright defects in the membrane.",
    checklist: [
      "Explained why neither fully impermeable nor fully permeable membranes exist in nature",
      "Defined semipermeable/selectively permeable membranes",
      "Defined passive transport: diffusion down gradient, no energy",
      "Distinguished simple vs facilitated diffusion as the two passive sub-types",
      "Described simple diffusion as protein-independent: via lipids, pores, or channels",
      "Named Obr. 8.3's three routes: lipid dissolution, protein micropore, membrane defects"
    ]
  }
},

{
  id: "8-5-3-2",
  book: "cz",
  topicKey: "membrane-transport",
  chapter: 8,
  section: "8.5.3",
  czTitle: "Membránový transport — usnadněná difúze",
  enTitle: "Membrane transport — facilitated diffusion",
  cnTitle: "膜转运——易化扩散",
  pages: [201],
  coverage: "full",
  coverageNote: "The facilitated-diffusion paragraphs at the top of page 201 read directly, plus Obr. 8.4 and its full caption (carrier-mediated transport schematic, S/P/M labels, the two drawn mechanisms) verified by direct re-read, through the specificity/saturability/inhibitability paragraph and the ionophore/ion-channel sentence.",
  cnNote: { topic: null, title: "载体介导的易化扩散机制、离子载体与离子通道 — 笔记中未找到明确对应主题（该内容属于膜转运/细胞生理学通论，而非笔记'三 脂质'条目下列出的脂质化学子主题）", status: "pending" },
  mustKnow: { en: "A carrier protein has a binding site that fits one type of molecule. That specificity is why a glucose transporter will not move fructose — and why when the carrier is saturated, moving more glucose does not move more fructose.", cn: "载体蛋白的结合位点只适应一种分子。正因为这种特异性，葡萄糖转运器不会转运果糖——这就是为什么当载体饱和时，增加葡萄糖也转不了更多的果糖。" },
  summary: {
    en: "Facilitated (mediated) diffusion requires the participation of a carrier molecule, usually an integral membrane protein, which has a specific binding capacity for the transported substance. After the transported substance binds to the carrier, movement of the carrier within the membrane probably occurs, such that the transported substance appears on the other side of the membrane, where it is released from the carrier, and the carrier returns to its original position (Obr. 8.4: S = transported substance, P = carrier, M = membrane; the figure draws both a mobile-carrier version and a gated-pore version of this mechanism). A significant property of facilitated diffusion is the specificity, saturability, and inhibitability of the process — the carrier thus behaves like an enzyme, and the process can be described by equations for enzyme kinetics. Specialized carriers for ions are called IONOPHORES (substances of a non-protein nature) or ION CHANNELS (membrane proteins).",
    cn: "易化（介导）扩散需要一种载体分子的参与，通常是一种整合膜蛋白，它对被转运的物质具有特异的结合能力。被转运物质与载体结合后，载体很可能在膜内发生运动，使被转运物质出现在膜的另一侧，在那里从载体上释放，载体则返回其原来的位置（图8.4：S＝被转运物质，P＝载体，M＝膜；图中画出了该机制的两种版本——可移动载体型和门控孔道型）。易化扩散的一个重要性质是该过程具有特异性、可饱和性和可抑制性——因此载体的行为方式类似于酶，该过程可以用酶动力学方程来描述。针对离子的特化载体称为离子载体（非蛋白质性质的物质）或离子通道（膜蛋白）。"
  },
  points: [
    { cz: "usnadněná difúze = přenašečová molekula, obvykle integrální protein", en: "Facilitated diffusion requires a CARRIER molecule, usually an integral membrane protein, with specific binding capacity for the transported substance.", cn: "易化扩散需要一种载体分子，通常是整合膜蛋白，对被转运物质具有特异的结合能力。" },
    { cz: "mechanismus: navázání → pohyb přenašeče → uvolnění na druhé straně → návrat", en: "Mechanism (Obr. 8.4, S/P/M): after the substance binds the carrier, the carrier probably moves within the membrane, delivering the substance to the other side where it is released, and the carrier returns to its original position.", cn: "机制（图8.4，S/P/M）：物质与载体结合后，载体很可能在膜内移动，将物质送到另一侧释放，随后载体返回原位。" },
    { cz: "specifita, saturovatelnost, inhibovatelnost — jako enzym", en: "Facilitated diffusion shows SPECIFICITY, SATURABILITY, and INHIBITABILITY — the carrier behaves like an enzyme, and the process can be described by enzyme kinetics equations.", cn: "易化扩散具有特异性、可饱和性和可抑制性——载体的行为类似于酶，该过程可用酶动力学方程描述。" },
    { cz: "ionofory (nebílkovinné) vs iontové kanály (bílkovinné)", en: "Specialized ion carriers are called IONOPHORES (non-protein substances) or ION CHANNELS (membrane proteins).", cn: "针对离子的特化载体称为离子载体（非蛋白质性质）或离子通道（膜蛋白）。" }
  ],
  terms: [
    { cz: "usnadněná (zprostředkovaná) difúze", en: "facilitated (mediated) diffusion", cn: "易化（介导）扩散", def_en: "Passive, carrier-mediated transport down a concentration gradient, showing enzyme-like specificity, saturability, and inhibitability.", def_cn: "由载体介导的被动转运，顺浓度梯度进行，具有类似酶的特异性、可饱和性和可抑制性。" },
    { cz: "přenašeč (P)", en: "carrier", cn: "载体", def_en: "The molecule, usually an integral membrane protein, that specifically binds and shuttles the transported substance across the membrane.", def_cn: "通常是整合膜蛋白的分子，特异性结合并将被转运物质穿梭运送过膜。" },
    { cz: "ionofor", en: "ionophore", cn: "离子载体", def_en: "A non-protein substance specialized for carrying ions across the membrane.", def_cn: "专门用于跨膜转运离子的非蛋白质物质。" },
    { cz: "iontový kanál", en: "ion channel", cn: "离子通道", def_en: "A membrane protein specialized for carrying ions across the membrane.", def_cn: "专门用于跨膜转运离子的膜蛋白。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What three enzyme-like properties does the book attribute to facilitated diffusion?",
      q_cn: "教材认为易化扩散具有哪三种类似酶的性质？",
      options: [
        "Reversibility, cooperativity, and allostery",
        "Specificity, saturability, and inhibitability",
        "Temperature-dependence, pH-dependence, and cofactor-dependence",
        "Irreversibility, non-specificity, and non-saturability"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Real enzyme concepts, but not the three the book names here. The three it gives all follow from one fact: the carrier has a binding site that fits one particular type of molecule.", cn: "这些都是真实的酶学概念，但不是教材在这里点名的那三个。它给的那三个都出自同一件事：载体有一个只与某一类分子相配的结合位点。" },
        2: { en: "These are conditions that affect a rate rather than properties of the mechanism. The three the book names are what let facilitated diffusion be described by enzyme-kinetics equations at all.", cn: "这些是影响速率的条件，不是机制本身的性质。教材点名的那三个，才是让 facilitated diffusion 能够用酶动力学方程来描述的原因。" },
        3: { en: "Each of the three has been turned into its negation. A carrier with a specific binding site is by definition specific, and a finite number of carriers is what makes the process saturable.", cn: "这三个都被改成了各自的反面。一个带专一结合位点的载体，按定义就是专一的；而载体数目有限，正是这个过程可饱和的原因。" }
      },
      why_en: "The book states facilitated diffusion shows specificity, saturability, and inhibitability, so the carrier behaves like an enzyme and the process can be described with enzyme-kinetics equations.",
      why_cn: "教材指出易化扩散具有特异性、可饱和性和可抑制性，因此载体的行为类似于酶，该过程可用酶动力学方程描述。"
    },
    {
      type: "mcq",
      q_en: "How does the book distinguish ionophores from ion channels?",
      q_cn: "教材如何区分离子载体和离子通道？",
      options: [
        "Ionophores are membrane proteins, while ion channels are substances of a non-protein nature",
        "Ionophores are non-protein substances; ion channels are membrane proteins",
        "Both are substances of a non-protein nature",
        "Both are membrane proteins, differing only in the size of the ion they pass"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Exactly reversed. Ionophores are the non-protein ones; the ion channels are the membrane proteins. Both are specialised ion carriers, which is why the pair is easy to swap.", cn: "正好反了。Ionophore 是非蛋白的那一类；ion channel 才是膜蛋白。两者都是专门的离子载体，所以很容易被互换。" },
        2: { en: "Only the ionophores are. If both were non-protein, neither would belong to the integral membrane proteins that facilitated diffusion generally works through.", cn: "只有 ionophore 是。如果两者都是非蛋白的，那它们就都不属于 facilitated diffusion 一般所依靠的整合膜蛋白了。" },
        3: { en: "Only the ion channels are, and the book draws no size distinction between the two at all. The difference it draws is one of chemical nature: protein against non-protein.", cn: "只有 ion channel 是，而且教材根本没有按大小区分这两者。它划的界线是化学本质上的：蛋白与非蛋白。" }
      },
      why_en: "The book states specialized ion carriers are called ionophores (substances of a non-protein nature) or ion channels (membrane proteins) — the reverse pairing is incorrect.",
      why_cn: "教材指出针对离子的特化载体称为离子载体（非蛋白质性质的物质）或离子通道（膜蛋白）——反过来配对是错误的。"
    },
    {
      type: "short",
      q_en: "Describe the mechanism of carrier-mediated (facilitated) transport shown in Obr. 8.4.",
      q_cn: "描述图8.4中展示的载体介导（易化）转运机制。",
      accept: ["carrier", "bind", "release", "return", "载体", "结合", "释放", "返回"],
      answer_en: "The transported substance (S) binds to the carrier (P); the carrier then probably moves within the membrane (M), delivering S to the other side where it is released from the carrier, after which the carrier returns to its original position.",
      answer_cn: "被转运物质（S）与载体（P）结合；载体随后很可能在膜（M）内移动，将S送到另一侧并释放，之后载体返回原来的位置。"
    }
  ],
  oral: {
    q_en: "Explain facilitated diffusion: the carrier mechanism, its enzyme-like properties, and ionophores vs. ion channels.",
    q_cn: "请解释易化扩散：载体机制、其类似酶的性质，以及离子载体与离子通道的区别。",
    model_en: "Facilitated diffusion still moves a substance down its concentration gradient, without spending energy, but unlike simple diffusion it needs help — specifically a carrier molecule, usually an integral membrane protein, that has a specific binding site for whatever it's transporting. The mechanism the book describes is that once the substance binds the carrier, the carrier itself probably shifts position within the membrane, so that the substance ends up presented on the other side, gets released there, and then the carrier resets back to where it started, ready to do it again. What's interesting is how enzyme-like this whole process behaves: it's specific to particular substances, it can be saturated if you give it too much substrate at once, and it can be inhibited — which is exactly why you can actually write enzyme-kinetics equations to describe it. For ions specifically, there are two flavors of specialized carrier: ionophores, which are non-protein substances, and ion channels, which are membrane proteins.",
    checklist: [
      "Defined facilitated diffusion as carrier-mediated, still down the gradient, no energy",
      "Described the bind -> carrier moves -> release -> carrier resets mechanism (Obr. 8.4)",
      "Named the three enzyme-like properties: specificity, saturability, inhibitability",
      "Noted the process can be described by enzyme kinetics equations",
      "Distinguished ionophores (non-protein) from ion channels (protein)"
    ]
  }
},

{
  id: "8-5-3-3",
  book: "cz",
  topicKey: "membrane-transport",
  chapter: 8,
  section: "8.5.3",
  czTitle: "Membránový transport — aktivní transport, skupinová translokace, transport makromolekul",
  enTitle: "Membrane transport — active transport, group translocation, macromolecule transport",
  cnTitle: "膜转运——主动转运、基团转位、大分子转运",
  pages: [201],
  coverage: "full",
  coverageNote: "The remainder of page 201, from the active-transport paragraph through the chapter's final sentence on endocytosis/exocytosis, read directly. This is the last page of chapter 8 — chapter 9 ('Fotosyntéza') begins fresh at page 202 per the book's own table of contents, confirmed by the visible page-202 text bleeding faintly through the scan of this page's reverse side, which is unrelated new-chapter content and not part of this node.",
  cnNote: { topic: null, title: "主动转运（初级/次级）、共转运/逆向转运/单向转运、基团转位与胞吞/胞吐 — 笔记中未找到明确对应主题（该内容属于膜转运/细胞生理学通论，而非笔记'三 脂质'条目下列出的脂质化学子主题）", status: "pending" },
  mustKnow: { en: "Active transport costs energy. It is only worth it when you need to move something AGAINST the gradient — building concentration, trapping a nutrient, or poisoning something outside.", cn: "主动转运耗能。只有当你需要**逆浓度梯度**转运某物时才值得——即构建浓度、捕获营养或在细胞外积累毒素。" },
  summary: {
    en: "If crossing the membrane requires a supply of energy, this is called ACTIVE transport, which always proceeds AGAINST the concentration gradient of the transported substance. The energy requirement of so-called PRIMARY active transport is usually covered by the supply of ATP and cleavage of a macroergic bond (referred to as ATPase pumps), or comes from some other exergonic reaction. In so-called SECONDARY active transport, the energy of a concentration gradient of a different substance, established earlier (e.g. by primary transport), is used instead. A membrane protein always participates in active transport, and the mechanism is similar to facilitated diffusion; unlike it, however, every step depends on the carrier's energy, and it is often a complex transport of two or more substances in the same direction (so-called SYMPORT) or the opposite direction (ANTIPORT); transport of only a single substance is called UNIPORT. During transport of more complex organic molecules (e.g. carbohydrates, amino acids, disaccharides, peptides), a chemical reaction (e.g. phosphorylation or hydrolysis) may occur simultaneously, meaning the carrier also has an additional enzymatic activity; such transport is called GROUP TRANSLOCATION. The most complicated type of membrane transport is transport of macromolecules (proteins, DNA) or entire particles (membranes, viruses, granules), which takes place via a mechanism involving local restructuring of the membrane. In the first case (macromolecules), submicroscopic changes occur at the membrane; in the second case (particles), microscopically observable changes occur (PINOCYTOSIS and PHAGOCYTOSIS). By direction of transport, we distinguish ENDOCYTOSIS (toward the inside of the cell) or EXOCYTOSIS (toward the outside of the cell).",
    cn: "如果跨膜转运需要供给能量，这称为主动转运，它总是逆着被转运物质的浓度梯度进行。所谓初级主动转运的能量需求通常由ATP的供给及大能键的水解来满足（称为ATP酶泵），或来自其他放能反应。而在所谓次级主动转运中，则利用先前（例如由初级转运）建立起来的另一种物质的浓度梯度的能量。主动转运总是有膜蛋白参与，其机制与易化扩散相似；但与之不同的是，每一步都依赖于载体的能量，并且常常是两种或更多物质同方向（称为共转运）或反方向（逆向转运）的复杂转运；只转运单一物质则称为单向转运。在转运更复杂的有机分子（如糖类、氨基酸、二糖、肽）时，可能同时发生化学反应（如磷酸化或水解），也就是说载体还具有额外的酶活性；这种转运称为基团转位。最复杂的膜转运类型是大分子（蛋白质、DNA）或整个颗粒（膜、病毒、颗粒）的转运，其发生机制涉及膜的局部重组。前一种情况（大分子）在膜上发生亚显微变化；后一种情况（颗粒）发生显微可见的变化（胞饮作用和吞噬作用）。按转运方向，我们区分胞吞作用（朝细胞内方向）和胞吐作用（朝细胞外方向）。"
  },
  points: [
    { cz: "aktivní transport = proti koncentračnímu gradientu, se spotřebou energie", en: "ACTIVE transport requires an energy supply and always proceeds AGAINST the concentration gradient of the transported substance.", cn: "主动转运需要供给能量，总是逆着被转运物质的浓度梯度进行。" },
    { cz: "primární aktivní transport — ATP, ATPasové pumpy", en: "PRIMARY active transport's energy requirement is usually covered by ATP and cleavage of a macroergic bond (ATPase pumps), or another exergonic reaction.", cn: "初级主动转运的能量需求通常由ATP和大能键的水解满足（ATP酶泵），或来自其他放能反应。" },
    { cz: "sekundární aktivní transport — využívá dříve vytvořený gradient", en: "SECONDARY active transport instead uses the energy of a concentration gradient of a different substance, established earlier (e.g. by primary transport).", cn: "次级主动转运则利用先前（如由初级转运）建立起来的另一种物质浓度梯度的能量。" },
    { cz: "symport / antiport / uniport", en: "Active transport often moves two or more substances in the same direction (SYMPORT) or opposite directions (ANTIPORT); transport of a single substance is UNIPORT.", cn: "主动转运常常同方向转运两种或更多物质（共转运），或反方向转运（逆向转运）；只转运单一物质称为单向转运。" },
    { cz: "skupinová translokace — přenašeč + enzymová aktivita (fosforylace/hydrolýza)", en: "GROUP TRANSLOCATION: transport of complex organic molecules (carbohydrates, amino acids, disaccharides, peptides) where the carrier simultaneously performs a chemical reaction (phosphorylation or hydrolysis) — an additional enzymatic activity of the carrier.", cn: "基团转位：转运复杂有机分子（糖类、氨基酸、二糖、肽）时，载体同时进行化学反应（磷酸化或水解）——是载体的额外酶活性。" },
    { cz: "transport makromolekul/partikulí — přestavba membrány, pino/fagocytóza", en: "The most complicated transport type — macromolecules (proteins, DNA) or whole particles (membranes, viruses, granules) — occurs via local membrane restructuring: submicroscopic changes for macromolecules, microscopically visible changes (PINOCYTOSIS, PHAGOCYTOSIS) for particles.", cn: "最复杂的转运类型——大分子（蛋白质、DNA）或整个颗粒（膜、病毒、颗粒）——通过膜的局部重组实现：大分子对应亚显微变化，颗粒对应显微可见的变化（胞饮作用、吞噬作用）。" },
    { cz: "endocytóza (do buňky) vs exocytóza (z buňky)", en: "By direction: ENDOCYTOSIS (toward the cell interior) versus EXOCYTOSIS (toward the cell exterior) — the book's closing distinction, ending chapter 8.", cn: "按方向区分：胞吞作用（朝细胞内）与胞吐作用（朝细胞外）——这是教材第8章结尾的区分。" }
  ],
  terms: [
    { cz: "aktivní transport", en: "active transport", cn: "主动转运", def_en: "Membrane transport against the concentration gradient, requiring energy; primary (ATP-driven) or secondary (driven by a pre-existing gradient of another substance).", def_cn: "逆浓度梯度的跨膜转运，需要能量；分为初级（ATP驱动）和次级（利用另一物质已建立的梯度驱动）。" },
    { cz: "symport / antiport / uniport", en: "symport / antiport / uniport", cn: "共转运／逆向转运／单向转运", def_en: "Classification of carrier-mediated transport by how many substances move and in what relative direction: symport (same direction), antiport (opposite directions), uniport (single substance).", def_cn: "按转运物质数目及相对方向对载体介导转运的分类：共转运（同方向）、逆向转运（反方向）、单向转运（单一物质）。" },
    { cz: "skupinová translokace", en: "group translocation", cn: "基团转位", def_en: "Transport in which the carrier simultaneously chemically modifies the transported molecule (e.g. phosphorylation), acting as both carrier and enzyme.", def_cn: "载体在转运的同时对被转运分子进行化学修饰（如磷酸化）的转运方式，载体兼具转运和酶的功能。" },
    { cz: "endocytóza / exocytóza", en: "endocytosis / exocytosis", cn: "胞吞作用／胞吐作用", def_en: "Macromolecule/particle transport via local membrane restructuring, directed into the cell (endocytosis, including pinocytosis/phagocytosis) or out of the cell (exocytosis).", def_cn: "通过膜局部重组实现的大分子/颗粒转运，方向朝细胞内（胞吞作用，含胞饮作用/吞噬作用）或朝细胞外（胞吐作用）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What distinguishes primary from secondary active transport, per the book?",
      q_cn: "根据教材，初级主动转运与次级主动转运有何区别？",
      options: [
        "Primary transport uses ATP/a macroergic bond (ATPase pumps) or another exergonic reaction; secondary transport uses the energy of a previously established concentration gradient of a different substance",
        "Primary transport needs no membrane protein at all, running straight through the lipid bilayer, while secondary transport is the one that works through an integral carrier protein embedded right across it",
        "Primary transport moves ions only and secondary transport macromolecules only, which is why one needs a pump and the other a vesicle",
        "There is no real difference; both terms describe transport against the gradient at the expense of ATP"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Both kinds work through membrane proteins — an ATPase pump is a protein too. What separates them is where the energy comes from, not whether a protein is involved at all.", cn: "两者都要通过膜蛋白来完成——ATPase 泵本身就是蛋白。区分它们的是能量从哪里来，而不是有没有蛋白参与。" },
        2: { en: "Neither restriction holds. Group translocation, a form of active transport, carries carbohydrates, amino acids, disaccharides and peptides; macromolecules move by an entirely different route, local restructuring of the membrane.", cn: "两个限制都不成立。属于主动运输的 group translocation 搬运的是糖、氨基酸、双糖和肽；而大分子走的是完全不同的路线——膜的局部改建。" },
        3: { en: "Only primary transport spends ATP directly. Secondary transport spends a concentration gradient of some other substance that primary transport built earlier, and that is exactly what makes the pair worth distinguishing.", cn: "只有 primary 运输直接消耗 ATP。Secondary 运输消耗的是 primary 运输先前建立起来的、另一种物质的浓度梯度——这正是区分这一对概念的意义所在。" }
      },
      why_en: "The book states primary active transport's energy requirement is usually met by ATP/macroergic-bond cleavage (ATPase pumps) or another exergonic reaction, while secondary active transport uses the energy of a concentration gradient of a different substance established earlier, e.g. by primary transport.",
      why_cn: "教材指出初级主动转运的能量需求通常由ATP/大能键水解（ATP酶泵）或其他放能反应满足，而次级主动转运利用先前（如由初级转运）建立的另一物质浓度梯度的能量。"
    },
    {
      type: "mcq",
      q_en: "What makes 'group translocation' distinct from ordinary active transport of a single small molecule, per the book?",
      q_cn: "根据教材，“基团转位”与普通单一小分子的主动转运有何不同？",
      options: [
        "It happens only for ions, never for organic molecules, which is why it needs no chemical change",
        "The carrier simultaneously carries out a chemical reaction (e.g. phosphorylation or hydrolysis) on the transported molecule, giving it an additional enzymatic activity",
        "It needs no membrane protein at all, the molecule passing straight through the bilayer as it is modified",
        "It always moves its substrate down the concentration gradient rather than against it, and therefore costs no energy, which is what separates it from active transport of either kind"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The opposite of what the book says. The molecules it names for this route are complex organic ones — carbohydrates, amino acids, disaccharides and peptides — and the chemical change performed on them is the defining feature.", cn: "和教材说的正好相反。教材为这条路线点名的是较复杂的有机分子——糖、氨基酸、双糖和肽——而对它们施加的化学变化正是这条路线的定义性特征。" },
        2: { en: "A carrier is required, and it is that carrier which does the chemistry: the phosphorylation or hydrolysis is an ADDITIONAL enzymatic activity of the carrier protein, so take the protein away and the mechanism goes with it.", cn: "必须有载体，而做这份化学工作的正是载体：磷酸化或水解是载体蛋白的一项额外酶活性，所以把蛋白拿掉，这套机制也就没有了。" },
        3: { en: "Group translocation is a form of ACTIVE transport, and active transport always proceeds against the concentration gradient and always at an energy cost. Running down a gradient without energy is the definition of passive transport instead.", cn: "Group translocation 属于主动运输，而主动运输永远是逆浓度梯度进行的，也永远要付出能量代价。顺梯度、不耗能，那是被动运输的定义。" }
      },
      why_en: "The book describes group translocation as transport of more complex organic molecules (carbohydrates, amino acids, disaccharides, peptides) where a chemical reaction such as phosphorylation or hydrolysis occurs simultaneously, meaning the carrier also has an additional enzymatic activity.",
      why_cn: "教材将基团转位描述为转运更复杂的有机分子（糖类、氨基酸、二糖、肽）时，同时发生磷酸化或水解等化学反应，即载体还具有额外的酶活性。"
    },
    {
      type: "short",
      q_en: "Explain how transport of macromolecules/particles differs mechanistically from transport of small molecules, and name the direction-based terms the book uses.",
      q_cn: "解释大分子/颗粒的转运在机制上与小分子转运有何不同，并说出教材按方向使用的术语。",
      accept: ["endocytosis", "exocytosis", "pinocytosis", "phagocytosis", "membrane restructuring", "胞吞", "胞吐", "胞饮", "吞噬", "膜重组"],
      answer_en: "Macromolecule/particle transport uses local restructuring of the membrane rather than a simple carrier — submicroscopic changes for macromolecules (proteins, DNA), microscopically visible changes (pinocytosis/phagocytosis) for whole particles (membranes, viruses, granules). By direction: endocytosis (into the cell) or exocytosis (out of the cell).",
      answer_cn: "大分子/颗粒的转运依靠膜的局部重组而非简单的载体——大分子（蛋白质、DNA）对应亚显微变化，整个颗粒（膜、病毒、颗粒）对应显微可见的变化（胞饮作用/吞噬作用）。按方向区分：胞吞作用（进入细胞）或胞吐作用（离开细胞）。"
    }
  ],
  oral: {
    q_en: "Explain active transport (primary and secondary), symport/antiport/uniport, group translocation, and macromolecule transport — the book's closing topics for chapter 8.",
    q_cn: "请解释主动转运（初级和次级）、共转运/逆向转运/单向转运、基团转位，以及大分子转运——这是教材第8章的收尾内容。",
    model_en: "Once you need to move something against its own concentration gradient, you're no longer talking about passive transport — that requires energy, and that's the definition of active transport. The book splits the energy source into two flavors. Primary active transport gets its energy straight from ATP, cleaving a high-energy bond — these are the so-called ATPase pumps — or from some other exergonic reaction. Secondary active transport is cleverer: instead of spending fresh energy, it piggybacks on a concentration gradient of some other substance that got built up earlier, often by primary transport itself. Either way, a membrane protein is always involved, and the mechanism looks a lot like facilitated diffusion, except every single step now costs the carrier energy. And often it's not just one substance moving — you can get two or more substances moving together in the same direction, which is called symport, or in opposite directions, called antiport; moving just one substance alone is uniport. There's an even more specialized case, group translocation, which shows up when you're transporting something more elaborate — sugars, amino acids, disaccharides, peptides — and the carrier doesn't just ferry the molecule across, it also chemically modifies it on the way, phosphorylating or hydrolyzing it, so the carrier is doubling as an enzyme. And then the most complicated transport of all is moving whole macromolecules like proteins and DNA, or entire particles like membranes, viruses, or granules — that's not carrier-based at all, it works by actually restructuring the membrane locally. For macromolecules those changes are submicroscopic; for particles they're big enough to actually see under a microscope, which is pinocytosis and phagocytosis. And the book's final distinction, closing out chapter 8, is just about direction: endocytosis moves things into the cell, exocytosis moves things out.",
    checklist: [
      "Defined active transport: against the gradient, requires energy",
      "Distinguished primary (ATP/ATPase pumps) from secondary (uses a pre-existing gradient) active transport",
      "Named symport, antiport, and uniport",
      "Described group translocation: carrier + simultaneous chemical modification (phosphorylation/hydrolysis)",
      "Described macromolecule/particle transport via local membrane restructuring",
      "Named pinocytosis/phagocytosis and the endocytosis/exocytosis direction distinction",
      "Recognized this is the final topic of chapter 8, immediately before chapter 9 (Fotosyntéza) begins at p.202"
    ]
  }
}

);
