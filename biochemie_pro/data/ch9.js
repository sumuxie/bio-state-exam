/* ============================================================
   Chapter 9 -- Fotosyntéza a další biosyntetické pochody fotoautotrofů
   Photosynthesis and other biosynthetic processes of photoautotrophs / 光合作用与光合自养生物的其他生物合成过程
   Source: Biochemie - Zakladni kurz, pp. 202-217
   All 16 pages read directly from the page scans in extracted_full_ch9/
   (no drafting agent was used for this chapter -- pages were read and
   nodes written in a single pass, 2026-08-06). 27 nodes, 9-1 .. 9-27.
   p.217 carries only two short closing paragraphs; the rest of that page
   is blank apart from bleed-through from the reverse side.
   Independent verification pass (re-reading scans against final content,
   HANDOFF.md sec.8) has NOT been run yet.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "9-1",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.",
  czTitle: "Fotoautotrofie — pět specifických metabolismů",
  enTitle: "Photoautotrophy — the five metabolisms specific to autotrophs",
  cnTitle: "光合自养——自养生物特有的五类代谢",
  pages: [202],
  coverage: "full",
  coverageNote: "Top of p.202 read in full: the chapter's opening definition of a photosynthesizing organism as autotrophic, and the numbered list of five metabolic processes typical of autotrophs and absent from heterotrophs. The list is reproduced complete and in the book's own order, including its two internal cross-references (aromatic amino acid biosynthesis → kap. 5.3.4; secondary metabolites → developed later in kap. 9.5).",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "An autotroph is not merely something that photosynthesises: it can build every part of its own body out of CO₂, water and minerals, so nothing has to be eaten. The book's five-item list is the chapter's own syllabus — and it later corrects its own item 2, because nitrogen fixation belongs to bacteria, not to plants.", cn: "自养生物不只是「会光合作用」而已：它能只用 CO₂、水和无机盐把自己身体的每一部分造出来，什么都不需要吃。教材列的这五项其实就是本章的目录——而且它后面会自己纠正第 2 项，因为固氮是细菌的本事，不是植物的。" },
  summary: {
    en: "Chapter 9 opens by defining what makes a photosynthesizing organism autotrophic: it can cover its entire energy requirement at the expense of solar energy, and can synthesize the basic nutrients and the substances for building its own body out of CO₂, water and mineral substances alone. The book then lists five metabolic processes that are present in the plant organism and missing in heterotrophs, and these five items are effectively the syllabus of the whole chapter: (1) photosynthetic assimilation of carbon dioxide together with the photochemical decomposition of water and evolution of molecular oxygen — this pair is what the book calls the basis of photosynthesis; (2) assimilation of atmospheric nitrogen; (3) reduction of nitrates, nitrites and sulfates, and biosynthesis of cysteine; (4) biosynthesis of aromatic amino acids (cross-referenced to kap. 5.3.4, already covered in chapter 5); (5) formation of secondary plant metabolites. Items 1, 2 and 5 are developed at length later in this chapter (§9.1–9.3, §9.4 and §9.5 respectively); items 3 and 4 are only named here, with item 3 partly picked up again inside §9.4 (nitrate → nitrite → ammonia reduction) and item 4 handed off entirely to chapter 5.",
    cn: "第9章开篇界定光合生物为何是自养的：它能完全依靠太阳能满足自身全部能量需求，并且仅从CO₂、水和矿物质就能合成基本养分以及构建自身躯体所需的物质。随后教材列出五类存在于植物体、而异养生物所缺乏的代谢过程，这五条实际上就是全章的提纲：(1)二氧化碳的光合同化，连同水的光化学分解与分子氧的释放——教材称这一组合为光合作用的基础；(2)大气氮的同化；(3)硝酸盐、亚硝酸盐、硫酸盐的还原以及半胱氨酸的生物合成；(4)芳香族氨基酸的生物合成（交叉引用至第5.3.4节，已在第5章讲过）；(5)次生植物代谢物的形成。第1、2、5条在本章后文分别展开（§9.1–9.3、§9.4、§9.5）；第3、4条在此仅点名，其中第3条的一部分在§9.4中再次出现（硝酸盐→亚硝酸盐→氨的还原），第4条则完全交由第5章处理。"
  },
  points: [
    { cz: "autotrofní organismus", en: "Photosynthesizing organisms are autotrophic: they can cover their entire energy requirement at the expense of solar energy, and can synthesize the basic nutrients and the substances needed to build their own body from CO₂, water and mineral substances.", cn: "光合生物是自养的：它们能完全依靠太阳能满足自身全部能量需求，并能从CO₂、水和矿物质合成基本养分以及构建自身躯体所需的物质。" },
    { cz: "1. fotosyntetická asimilace CO₂ + fotochemický rozklad vody", en: "The first autotroph-specific metabolism is photosynthetic assimilation of carbon dioxide together with the photochemical decomposition of water and the resulting formation of molecular oxygen. The book states explicitly that this pairing — CO₂ assimilation plus water photolysis — is the basis of photosynthesis.", cn: "第一类自养生物特有的代谢是二氧化碳的光合同化，连同水的光化学分解及由此产生的分子氧。教材明确指出，这一组合——CO₂同化加水的光解——就是光合作用的基础。" },
    { cz: "2. asimilace atmosférického dusíku", en: "The second is assimilation of atmospheric nitrogen — taken up again in §9.4, where the book makes the important correction that this ability actually belongs to bacteria, not to plants themselves.", cn: "第二类是大气氮的同化——在§9.4中再次展开，教材在那里作了一个重要的修正：这一能力实际上属于细菌，而非植物本身。" },
    { cz: "3. redukce nitrátů, nitritů, sulfátů; biosyntéza cysteinu", en: "The third is reduction of nitrates, nitrites and sulfates together with biosynthesis of cysteine. Only the nitrate/nitrite half of this is developed later (in §9.4); sulfate reduction and cysteine biosynthesis are named here and not returned to in this chapter.", cn: "第三类是硝酸盐、亚硝酸盐和硫酸盐的还原以及半胱氨酸的生物合成。后文只展开了其中硝酸盐/亚硝酸盐的一半（在§9.4）；硫酸盐还原与半胱氨酸合成在此点名后，本章不再涉及。" },
    { cz: "4. biosyntéza aromatických aminokyselin (kap. 5.3.4)", en: "The fourth is biosynthesis of aromatic amino acids, which the book cross-references to kap. 5.3.4 rather than repeating — i.e. it is treated as chapter 5 material that happens to be an autotroph speciality.", cn: "第四类是芳香族氨基酸的生物合成，教材交叉引用至第5.3.4节而不再重复——即把它当作第5章的内容，只是恰好属于自养生物的专长。" },
    { cz: "5. tvorba sekundárních rostlinných metabolitů", en: "The fifth is formation of secondary plant metabolites, which closes the chapter as §9.5.", cn: "第五类是次生植物代谢物的形成，作为§9.5为全章收尾。" }
  ],
  terms: [
    { cz: "fotoautotrof", en: "photoautotroph", cn: "光合自养生物", def_en: "An organism that covers its whole energy requirement from solar energy and builds its own substance from CO₂, water and minerals, requiring no preformed organic carbon.", def_cn: "完全以太阳能满足自身能量需求、并从CO₂、水和矿物质构建自身物质的生物，无需现成的有机碳。" },
    { cz: "heterotrof", en: "heterotroph", cn: "异养生物", def_en: "By contrast, an organism lacking the five metabolisms listed here; it must obtain organic carbon (and, for aromatic amino acids, the finished amino acid) from its food.", def_cn: "与之相对，缺少此处所列五类代谢的生物；必须从食物中获得有机碳（对于芳香族氨基酸而言，则须获得现成的氨基酸）。" },
    { cz: "sekundární rostlinný metabolit", en: "secondary plant metabolite", cn: "次生植物代谢物", def_en: "A product of an anabolic pathway specific to plants and apparently not required for the plant's own life; §9.5 develops this.", def_cn: "植物特有合成途径的产物，表面上并非植物生存所必需；§9.5对此展开论述。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's opening list, which TWO processes together are named as 'the basis of photosynthesis'?",
      q_cn: "根据教材开篇的列表，哪两个过程被合称为「光合作用的基础」？",
      options: [
        "Assimilation of atmospheric nitrogen and reduction of nitrates",
        "Photosynthetic assimilation of CO₂ and photochemical decomposition of water with formation of O₂",
        "Biosynthesis of aromatic amino acids and formation of secondary metabolites",
        "Reduction of sulfates and biosynthesis of cysteine"
      ],
      answer: 1,
      why_en: "Item 1 of the book's five-item list pairs CO₂ assimilation with water photolysis and O₂ evolution, and calls that pairing the basis of photosynthesis. The other four items are autotroph-specific metabolisms but are not given that label.",
      why_cn: "教材五项列表中的第1项把CO₂同化与水的光解、氧气释放配成一组，并称这一组合为光合作用的基础。其余四项虽同属自养生物特有的代谢，但未被冠以该称谓。"
    },
    {
      type: "short",
      q_en: "Name any three of the five autotroph-specific metabolisms the chapter opens with.",
      q_cn: "说出本章开篇所列五类自养生物特有代谢中的任意三类。",
      accept: ["CO2", "carbon dioxide", "water", "nitrogen", "nitrate", "nitrite", "sulfate", "cysteine", "aromatic amino acid", "secondary"],
      answer_en: "(1) Photosynthetic assimilation of CO₂ with photochemical decomposition of water and O₂ evolution; (2) assimilation of atmospheric nitrogen; (3) reduction of nitrates, nitrites and sulfates plus cysteine biosynthesis; (4) biosynthesis of aromatic amino acids; (5) formation of secondary plant metabolites.",
      answer_cn: "(1)CO₂的光合同化，伴随水的光化学分解与氧气释放；(2)大气氮的同化；(3)硝酸盐、亚硝酸盐、硫酸盐的还原及半胱氨酸的生物合成；(4)芳香族氨基酸的生物合成；(5)次生植物代谢物的形成。"
    }
  ],
  oral: {
    q_en: "What distinguishes a photoautotroph from a heterotroph at the level of metabolism?",
    q_cn: "从代谢层面看，光合自养生物与异养生物的区别何在？",
    model_en: "A photoautotroph can do two things a heterotroph cannot: it can meet its entire energy budget from sunlight, and it can build every organic molecule it needs starting from CO₂, water and inorganic minerals. The textbook makes that concrete by listing five metabolic capabilities the plant has and the heterotroph lacks. The first, and the one it calls the basis of photosynthesis, is really a pair: assimilating carbon dioxide, and photochemically splitting water so that molecular oxygen is released. The second is assimilating atmospheric nitrogen — though as the chapter later admits, that one is really the bacteria's trick and plants only benefit from it. The third is the reduction of nitrates, nitrites and sulfates, together with the synthesis of cysteine. The fourth is making the aromatic amino acids, which is why those are essential for us and not for a plant. And the fifth is the production of secondary metabolites — the alkaloids, terpenes and phenolics that plants make and animals largely do not. Those five items are, in effect, the plan of the whole chapter.",
    checklist: [
      "Defined autotrophy as covering all energy from sunlight AND building body substance from CO₂/water/minerals",
      "Named CO₂ assimilation + photochemical water splitting as the pair the book calls the basis of photosynthesis",
      "Listed atmospheric nitrogen assimilation",
      "Listed nitrate/nitrite/sulfate reduction and cysteine biosynthesis",
      "Listed aromatic amino acid biosynthesis and connected it to why they are essential amino acids for animals",
      "Listed secondary plant metabolites"
    ]
  }
},

{
  id: "9-2",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1",
  czTitle: "Základní děje fotosyntézy — obecná rovnice, thylakoid, chloroplast",
  enTitle: "Basic processes of photosynthesis — the general equation, thylakoid, chloroplast",
  cnTitle: "光合作用的基本过程——通式、类囊体与叶绿体",
  pages: [202, 203],
  coverage: "full",
  coverageNote: "Lower half of p.202 and the figure at the top of p.203 read in full. Includes the book's most general formulation H₂D + A → H₂A + D (with hv above the arrow, 'pigmenty' below it, and ATP shown as a side product), the definitions of H₂D as donor and A as acceptor of electrons AND protons, the etymology of 'thylakoid', the stated structural analogy to the inner mitochondrial membrane, the localisation of CO₂ fixation/reduction and saccharide synthesis in the stroma, the one-line remark that the photosynthetic apparatus of phototrophic bacteria is somewhat different, the statement that CO₂ is the electron acceptor A for ALL photosynthesizing organisms, and the H₂S variant used by some bacteria. All seven labels of Obr. 9.1b were read off the scan directly (vnější membrána, vnitřní membrána, mezimembránový prostor, stromální thylakoidy, granum, stroma, lumen = vnitřní prostor thylakoidu); Obr. 9.1a is an electron micrograph of a maize (kukuřice) chloroplast.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "In every photosynthesising organism the acceptor is always CO₂ and only the donor changes — which is why the bacteria that run on H₂S give off sulfur instead of oxygen, the cleanest possible proof that the O₂ comes from the donor and never from CO₂. Structurally the whole chapter hangs on one split: light reactions inside the thylakoid membrane, carbon fixation outside it in the stroma.", cn: "在所有进行光合作用的生物里，受体永远是 CO₂，变的只是供体——所以用 H₂S 的细菌放出的是硫而不是氧，这就是「O₂ 来自供体、绝不来自 CO₂」最干净的证明。结构上整章都挂在一个分区上：光反应在类囊体膜里，固碳在膜外的基质 (stroma) 中。" },
  summary: {
    en: "The book's most general statement of photosynthesis treats it as the biological conversion of radiant energy into chemical energy and writes it as H₂D + A → H₂A + D, with hv above the arrow and 'pigmenty' below it, and with ATP drawn as a branch off the arrow. H₂D is the donor and A the acceptor of BOTH electrons and protons — the book is careful to say protons as well, which is what makes H₂D rather than just D the correct way to write the donor. For simplicity the chapter agrees to call the usable radiant energy 'light' throughout. Structurally, everything up to and including CO₂ fixation happens in the thylakoid membranes of cyanobacteria, algae and higher plants. 'Thylakoid' is from Greek thylakos, a sac, and thylakoidos, sac-like; these are closed structures in which, just as in the inner mitochondrial membrane, an inner and an outer space can be distinguished. In plants the thylakoids sit inside subcellular particles called chloroplasts (Obr. 9.1), and in the stroma of the chloroplast — that is, outside the thylakoids — CO₂ is fixed and reduced and saccharides are synthesized. The photosynthetic apparatus of phototrophic bacteria is noted as being somewhat different. For every photosynthesizing organism without exception the electron acceptor A is carbon dioxide, so the general scheme specialises to H₂D + CO₂ → (CH₂O) + D, where (CH₂O) is the book's symbol for saccharide; some bacteria run this with H₂S as the donor, giving H₂S + CO₂ → (CH₂O) + S.",
    cn: "教材对光合作用最一般的表述，是把它当作辐射能向化学能的生物学转换，写作 H₂D + A → H₂A + D，箭头上方标 hv、下方标「pigmenty（色素）」，并从箭头上分出一支生成ATP。H₂D是供体，A是受体，二者收授的既是电子也是质子——教材特意点明还有质子，这正是把供体写成H₂D而非D的原因。为简便起见，本章统一把可利用的辐射能称为「光」。就结构而言，直到CO₂固定为止的全部过程都发生在蓝细菌、藻类和高等植物的类囊体膜上。「thylakoid」源自希腊语 thylakos（囊）与 thylakoidos（囊状），它们是封闭结构，与线粒体内膜一样可以区分内腔与外部空间。在植物中类囊体位于称为叶绿体的亚细胞颗粒内（图9.1），而在叶绿体基质中——即类囊体之外——进行CO₂的固定与还原并合成糖类。教材指出光合细菌的光合装置有所不同。对一切光合生物无一例外，电子受体A都是二氧化碳，因此通式具体化为 H₂D + CO₂ → (CH₂O) + D，其中(CH₂O)是教材表示糖类的符号；某些细菌以H₂S作供体，得 H₂S + CO₂ → (CH₂O) + S。"
  },
  points: [
    { cz: "H₂D + A → H₂A + D", en: "The most general description of photosynthesis, understood as the biological conversion of radiant energy into chemical energy, is H₂D + A → H₂A + D, written with hv above the arrow and 'pigmenty' below it, and with ATP branching off the arrow as a product. H₂D is the donor and A the acceptor of electrons AND protons.", cn: "对光合作用（作为辐射能向化学能的生物学转换）最一般的描述是 H₂D + A → H₂A + D，箭头上方写hv、下方写「色素」，并从箭头分出ATP作为产物。H₂D是电子与质子的供体，A是其受体。" },
    { cz: "„světlo\" jako zkratka", en: "The chapter agrees, for simplicity, to call the radiant energy usable in photosynthesis simply 'light' throughout — a stated convention, not a claim that only visible light works.", cn: "为简便起见，本章约定把光合作用可利用的辐射能一律简称为「光」——这是明示的约定，并非主张只有可见光才起作用。" },
    { cz: "thylakos = váček, thylakoidos = váčkovitý", en: "Photosynthesis up to CO₂ fixation runs in the thylakoid membranes of cyanobacteria (sinice), algae (řasy) and higher plants. The name comes from Greek thylakos, a sac, and thylakoidos, sac-like. Thylakoids are closed structures in which — as in the inner mitochondrial membrane — an inner and an outer space can be distinguished.", cn: "直到CO₂固定为止的光合作用在蓝细菌、藻类和高等植物的类囊体膜中进行。其名称源自希腊语thylakos（囊）与thylakoidos（囊状）。类囊体是封闭结构，与线粒体内膜一样可区分内腔与外部空间。" },
    { cz: "chloroplast a stroma", en: "In plants the thylakoids are housed in subcellular particles called chloroplasts (Obr. 9.1). In the stroma of the chloroplast — i.e. OUTSIDE the thylakoids — CO₂ is fixed and reduced and saccharides are synthesized. This compartment split (membrane = light reactions, stroma = carbon fixation) is the structural key to the whole chapter.", cn: "在植物中，类囊体被安置在称为叶绿体的亚细胞颗粒内（图9.1）。在叶绿体基质中——即类囊体之外——进行CO₂的固定与还原并合成糖类。这一区室划分（膜=光反应，基质=碳固定）是理解全章的结构关键。" },
    { cz: "Obr. 9.1 — popisky", en: "Obr. 9.1 shows (a) an electron micrograph and (b) a schematic diagram of a maize (kukuřice) chloroplast, labelled: vnější membrána (outer membrane), vnitřní membrána (inner membrane), mezimembránový prostor (intermembrane space), stromální thylakoidy (stromal thylakoids), granum, stroma, and lumen — explicitly glossed by the book as vnitřní prostor thylakoidu, the thylakoid's inner space.", cn: "图9.1展示玉米叶绿体的(a)电子显微照片与(b)示意图，标注有：外膜、内膜、膜间隙、基质类囊体、基粒(granum)、基质(stroma)，以及lumen——教材明确注解为「类囊体内腔」。" },
    { cz: "akceptorem je vždy CO₂", en: "For ALL photosynthesizing organisms the acceptor of electrons (A) is carbon dioxide, so the general scheme becomes H₂D + CO₂ → (CH₂O) + D, where (CH₂O) is the book's symbol for a saccharide. What varies between organisms is the donor, not the acceptor.", cn: "对一切光合生物而言，电子受体(A)都是二氧化碳，故通式变为 H₂D + CO₂ → (CH₂O) + D，其中(CH₂O)是教材表示糖类的符号。不同生物之间变化的是供体，而不是受体。" },
    { cz: "H₂S jako donor u některých bakterií", en: "Some bacteria use H₂S as the donor of electrons and protons, giving H₂S + CO₂ → (CH₂O) + S. Sulfur, not oxygen, is the by-product — which is the cleanest possible demonstration that the O₂ of oxygenic photosynthesis comes from the donor and not from CO₂.", cn: "某些细菌以H₂S作电子与质子供体，得 H₂S + CO₂ → (CH₂O) + S。副产物是硫而非氧——这是「产氧光合作用中的O₂来自供体而非CO₂」这一点最干净利落的证明。" },
    { cz: "fototrofní bakterie — odlišný aparát", en: "The book notes in a single sentence that the photosynthetic apparatus of phototrophic bacteria is somewhat different, and does not develop the point further here; the difference surfaces again in §9.1.3, where bacteria are said to work with one photosystem against the oxygenic type's two.", cn: "教材用一句话指出光合细菌的光合装置有所不同，此处不再展开；该差异在§9.1.3中再次出现，那里说明细菌只用一个光系统，而产氧型有两个。" }
  ],
  terms: [
    { cz: "thylakoid", en: "thylakoid", cn: "类囊体", def_en: "A closed sac-like membrane structure (Gk. thylakos = sac) inside the chloroplast, with a distinguishable inner and outer space; the seat of the light-driven reactions of photosynthesis.", def_cn: "叶绿体内一种封闭的囊状膜结构（希腊语thylakos=囊），可区分内腔与外部空间；是光合作用光驱动反应的场所。" },
    { cz: "chloroplast", en: "chloroplast", cn: "叶绿体", def_en: "The subcellular particle in which plant thylakoids are housed; bounded by an outer and inner membrane with an intermembrane space between them, and filled with stroma.", def_cn: "容纳植物类囊体的亚细胞颗粒；由外膜与内膜界定、二者之间为膜间隙，内部充满基质。" },
    { cz: "stroma", en: "stroma", cn: "基质", def_en: "The chloroplast's soluble interior OUTSIDE the thylakoids, where CO₂ is fixed and reduced and saccharides are synthesized.", def_cn: "叶绿体中类囊体以外的可溶性内部区域，CO₂在此被固定、还原并合成糖类。" },
    { cz: "granum", en: "granum", cn: "基粒", def_en: "A stack of thylakoids within the chloroplast, labelled as such in Obr. 9.1b and connected to the stromal thylakoids.", def_cn: "叶绿体内类囊体的垛叠，图9.1b中如此标注，并与基质类囊体相连。" },
    { cz: "lumen thylakoidu", en: "thylakoid lumen", cn: "类囊体内腔", def_en: "The inner space enclosed by the thylakoid membrane — glossed by the book itself as 'vnitřní prostor thylakoidu'. Protons accumulate here on illumination (§9.1.3).", def_cn: "类囊体膜所包围的内部空间——教材自行注解为「类囊体内腔」。光照时质子在此积累（§9.1.3）。" },
    { cz: "(CH₂O)", en: "(CH₂O)", cn: "(CH₂O)", def_en: "The book's shorthand symbol for 'a saccharide' in summary equations — a formula unit, not a real molecule.", def_cn: "教材在总式中表示「糖类」的简写符号——是一个化学式单元，而非真实分子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the general scheme H₂D + CO₂ → (CH₂O) + D, what varies between photosynthesizing organisms?",
      q_cn: "在通式 H₂D + CO₂ → (CH₂O) + D 中，不同光合生物之间变化的是什么？",
      options: [
        "The acceptor A, which may be CO₂, NO₃⁻ or SO₄²⁻",
        "Neither; both donor and acceptor are fixed",
        "The donor H₂D — water in oxygenic photosynthesis, H₂S in some bacteria — while the acceptor is always CO₂",
        "The saccharide product, which may be a triose, hexose or pentose"
      ],
      answer: 2,
      why_en: "The book says explicitly that for ALL photosynthesizing organisms the acceptor of electrons (A) is carbon dioxide. What differs is the donor: water gives oxygenic photosynthesis, H₂S gives H₂S + CO₂ → (CH₂O) + S with elemental sulfur as by-product.",
      why_cn: "教材明确指出，对一切光合生物而言电子受体(A)都是二氧化碳。差异在于供体：以水为供体即产氧光合作用；以H₂S为供体则得 H₂S + CO₂ → (CH₂O) + S，副产物为单质硫。"
    },
    {
      type: "short",
      q_en: "Where in the chloroplast does CO₂ fixation take place, and where do the light-driven reactions take place?",
      q_cn: "CO₂固定发生在叶绿体的哪个部位？光驱动反应又发生在哪里？",
      accept: ["stroma", "thylakoid", "membrane", "outside"],
      answer_en: "The light-driven reactions run in the thylakoid membranes; CO₂ fixation and reduction, and saccharide synthesis, run in the stroma — that is, outside the thylakoids.",
      answer_cn: "光驱动反应在类囊体膜中进行；CO₂的固定与还原以及糖类合成在基质中进行，即在类囊体之外。"
    }
  ],
  oral: {
    q_en: "Give the most general formulation of photosynthesis and explain where in the chloroplast each part of it happens.",
    q_cn: "请给出光合作用最一般的表述，并说明其各部分在叶绿体的什么位置发生。",
    model_en: "At the most general level the textbook writes photosynthesis as H₂D plus A giving H₂A plus D, with light and pigments over the arrow and ATP coming off it. H₂D is the donor and A the acceptor — of electrons and of protons, which is why the donor is written H₂D rather than just D. For every photosynthetic organism the acceptor is carbon dioxide, so the scheme specialises to H₂D plus CO₂ giving CH₂O plus D. What varies is the donor: most autotrophs use water, some bacteria use hydrogen sulfide and deposit elemental sulfur instead of releasing oxygen. Structurally the process is split across two compartments of the chloroplast. Everything up to the point of carbon fixation happens in the thylakoid membranes — closed sacs, the name is from the Greek for a little bag, and like the inner mitochondrial membrane they have a distinguishable inside and outside. Stacks of them form grana, connected by stromal thylakoids. The carbon fixation and reduction themselves, and the synthesis of the sugars, happen outside the thylakoids, in the stroma. So the membrane makes ATP and NADPH; the stroma spends them on CO₂.",
    checklist: [
      "Wrote H₂D + A → H₂A + D with hv and pigments over the arrow, ATP as a side product",
      "Said the donor/acceptor exchange BOTH electrons and protons, explaining the H₂ in H₂D",
      "Stated that the acceptor is always CO₂ and only the donor varies; gave the H₂S example",
      "Located the light reactions in the thylakoid membrane and carbon fixation in the stroma",
      "Gave the etymology thylakos = sac and the analogy to the inner mitochondrial membrane",
      "Mentioned grana and stromal thylakoids as the arrangement inside the chloroplast"
    ]
  }
},

{
  id: "9-3",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1",
  czTitle: "Oxygenní fotosyntéza — stechiometrie a energetika",
  enTitle: "Oxygenic photosynthesis — stoichiometry and energetics",
  cnTitle: "产氧光合作用——化学计量与能量学",
  pages: [203],
  coverage: "full",
  coverageNote: "Middle of p.203 read in full, including both balanced equations exactly as printed and the ΔG°′ value. The book's own justification for writing the hexose equation with 12 H₂O and 6 H₂O rather than cancelling them (namely, to make visible that the six released O₂ come from water and not from CO₂) is reproduced, since that is the pedagogical point of the passage. ΔG°′ = +2867 kJ·mol⁻¹ was read from the scan; the sign is positive, i.e. the equation is written in the endergonic (synthesis) direction, which is correct for photosynthesis and is worth stating because the same reaction reversed is the exergonic combustion of glucose.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Write it 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O and do not cancel the waters: twelve go in and six come back out, because it takes two waters to make one O₂. The cancelled version is arithmetically identical and silently claims the oxygen came from CO₂, which is the one thing the equation exists to deny.", cn: "要写成 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O，两边的水不要约掉：进去十二个、出来六个，是因为要拆两个水才能凑出一个 O₂。约掉之后算术上完全一样，却在暗示氧来自 CO₂——而这恰恰是这个方程式存在的目的所要否认的那一句。" },
  summary: {
    en: "Autotrophs other than the sulfur bacteria use water molecules as the donor of electrons and protons — this is oxygenic photosynthesis. The oxygen molecules that evolve have their origin in the water molecules, and since two waters must be photochemically split to make one O₂, the book insists on writing the basic equation as 2 H₂O + CO₂ → (CH₂O) + O₂ + H₂O rather than in the cancelled form H₂O + CO₂ → (CH₂O) + O₂. Scaled up to one hexose the equation becomes 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O with ΔG°′ = +2867 kJ·mol⁻¹. The book states its reason for the redundant-looking stoichiometric factors explicitly: this way of writing emphasises that the six liberated oxygen molecules come from the water molecules and not from the carbon dioxide. Six water molecules appear on both sides and would cancel, but cancelling them would destroy exactly the information the equation is there to convey. The positive ΔG°′ records that the equation is written in the synthetic, endergonic direction — the energy has to come from somewhere, and that somewhere is the absorbed light.",
    cn: "除硫细菌之外的自养生物以水分子作为电子与质子的供体——这就是产氧光合作用。所释放的氧分子来源于水分子；由于生成一个O₂必须光化学地分解两个水分子，教材坚持把基本方程写作 2 H₂O + CO₂ → (CH₂O) + O₂ + H₂O，而不是约简形式 H₂O + CO₂ → (CH₂O) + O₂。放大到一分子己糖时，方程变为 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O，ΔG°′ = +2867 kJ·mol⁻¹。教材明确说明为何要保留这些看似多余的化学计量系数：这样写法强调所释放的六个氧分子来自水分子，而非来自二氧化碳。六个水分子在方程两侧同时出现、本可约去，但约去后恰恰会抹掉这个方程存在的意义所在的信息。正的ΔG°′表明方程是按合成的、吸能的方向书写的——能量必须有来源，而这个来源就是被吸收的光。"
  },
  points: [
    { cz: "voda jako donor = oxygenní fotosyntéza", en: "Autotrophs other than the H₂S-using bacteria use water molecules as the donor of electrons and protons; the book names this oxygenic photosynthesis (oxygenní fotosyntéza).", cn: "除使用H₂S的细菌外，自养生物以水分子作为电子与质子的供体；教材称之为产氧光合作用。" },
    { cz: "kyslík pochází z vody", en: "The oxygen molecules that evolve have their origin in the water molecules — not in CO₂. This is the single most important claim on the page and everything about how the equations are written serves it.", cn: "所释放的氧分子来源于水分子，而非CO₂。这是本页最重要的论断，方程的书写方式全为服务于此。" },
    { cz: "2 H₂O + CO₂ → (CH₂O) + O₂ + H₂O", en: "Because two water molecules must be photochemically split to produce one molecule of oxygen, the basic equation is written 2 H₂O + CO₂ → (CH₂O) + O₂ + H₂O — with a water on each side that could be cancelled but deliberately is not.", cn: "由于必须光化学分解两个水分子才能生成一个氧分子，基本方程写作 2 H₂O + CO₂ → (CH₂O) + O₂ + H₂O——两侧各有一个水分子本可约去，但刻意保留。" },
    { cz: "12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O", en: "For one hexose molecule: 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O, with ΔG°′ = +2867 kJ·mol⁻¹.", cn: "生成一分子己糖：12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O，ΔG°′ = +2867 kJ·mol⁻¹。" },
    { cz: "proč nekrátit", en: "The book states its reason for the stoichiometric factors explicitly: it is better to write the equation this way in order to emphasise that the six liberated oxygen molecules come from the water molecules and not from the carbon dioxide. The cancelled form 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ is arithmetically identical and pedagogically wrong.", cn: "教材明确说明保留化学计量系数的理由：这样书写是为了强调所释放的六个氧分子来自水分子而非二氧化碳。约简形式 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ 在算术上完全等价，但在教学上是错误的。" },
    { cz: "ΔG°′ = +2867 kJ·mol⁻¹", en: "The positive sign records that the equation as written runs in the endergonic, synthetic direction. Reversed, the same figure is the free energy released by the complete oxidation of a hexose — which is why photosynthesis and respiration are so often set against each other.", cn: "正号表明方程按所写方向是吸能的、合成的方向。反向而言，同一数值就是一分子己糖完全氧化所释放的自由能——这正是光合作用与呼吸作用常被对举的原因。" }
  ],
  terms: [
    { cz: "oxygenní fotosyntéza", en: "oxygenic photosynthesis", cn: "产氧光合作用", def_en: "Photosynthesis using water as the electron/proton donor, so that molecular oxygen — derived from the water, not from CO₂ — is released as a by-product.", def_cn: "以水作电子/质子供体的光合作用，因而释放分子氧作为副产物；该氧来自水而非CO₂。" },
    { cz: "fotolýza vody", en: "photolysis of water", cn: "水的光解", def_en: "The photochemical splitting of water; two water molecules must be split per molecule of O₂ evolved.", def_cn: "水的光化学分解；每释放一分子O₂须分解两个水分子。" },
    { cz: "ΔG°′", en: "ΔG°′ (standard free energy change, biochemical)", cn: "ΔG°′（生化标准自由能变）", def_en: "Standard Gibbs free energy change at pH 7. For the hexose photosynthesis equation it is +2867 kJ·mol⁻¹ — strongly endergonic as written.", def_cn: "pH 7条件下的标准吉布斯自由能变。对己糖光合方程而言为+2867 kJ·mol⁻¹——按所写方向是强吸能的。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the book insist on writing 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O instead of cancelling the water on both sides?",
      q_cn: "教材为何坚持写成 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O，而不把两侧的水约去？",
      options: [
        "Because the cancelled version is not correctly balanced",
        "Because 6 of the 12 waters are consumed as solvent rather than as substrate",
        "To emphasise that the 6 released O₂ molecules originate from the water molecules and not from the carbon dioxide",
        "Because the ΔG°′ value only applies to the uncancelled form"
      ],
      answer: 2,
      why_en: "The book gives this reason in so many words. Both forms balance and both have the same ΔG°′; the uncancelled form is preferred purely because it makes the origin of the oxygen visible — two waters split per O₂ evolved.",
      why_cn: "教材原文就是这样说的。两种写法都配平、ΔG°′也相同；之所以偏好未约简的形式，纯粹是因为它把氧的来源显示了出来——每释放一个O₂须分解两个水分子。"
    },
    {
      type: "short",
      q_en: "How many water molecules must be photochemically split to produce one molecule of O₂, and what is the ΔG°′ of the hexose-forming equation?",
      q_cn: "生成一分子O₂须光化学分解多少个水分子？生成己糖的方程其ΔG°′是多少？",
      accept: ["two", "2", "2867", "+2867", "kJ"],
      answer_en: "Two water molecules per O₂. The hexose equation 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O has ΔG°′ = +2867 kJ·mol⁻¹.",
      answer_cn: "每生成一个O₂需两个水分子。己糖方程 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O 的ΔG°′ = +2867 kJ·mol⁻¹。"
    }
  ],
  oral: {
    q_en: "Write the overall equation of oxygenic photosynthesis and justify the stoichiometry you chose.",
    q_cn: "请写出产氧光合作用的总方程，并说明你所选化学计量的理由。",
    model_en: "I would write it as twelve waters plus six carbon dioxides giving one glucose, six oxygens and six waters, with a standard free energy change of plus two thousand eight hundred and sixty-seven kilojoules per mole. The obvious objection is that six waters appear on both sides and ought to cancel — and arithmetically they do. But the textbook keeps them deliberately, and the reason is the whole point of the equation. It takes two water molecules photochemically split to yield one molecule of oxygen. Writing twelve waters in and six oxygens out makes that two-to-one relation visible and makes it clear that the oxygen we breathe comes out of water, not out of carbon dioxide. If you cancel down to six and six, the equation is still balanced but it now silently invites the wrong reading, that the O₂ was somehow stripped off the CO₂. The best independent confirmation of this is the sulfur bacteria: they run the same chemistry with hydrogen sulfide as donor and deposit elemental sulfur instead of oxygen. The by-product always comes from the donor. And the positive sign on the free energy simply records that this is written in the uphill, synthetic direction — the light is what pays for it.",
    checklist: [
      "Wrote 12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O with ΔG°′ = +2867 kJ·mol⁻¹",
      "Explained that two H₂O must be split per O₂ evolved",
      "Gave the book's stated reason for not cancelling: the O₂ comes from water, not CO₂",
      "Used the H₂S bacteria as independent evidence that the by-product tracks the donor",
      "Explained the positive ΔG°′ as the equation being written in the endergonic direction, paid for by light"
    ]
  }
},

{
  id: "9-4",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1",
  czTitle: "Vědní disciplíny studující fotosyntézu a jejich časová měřítka",
  enTitle: "The scientific disciplines studying photosynthesis and their time scales",
  cnTitle: "研究光合作用的各学科及其时间尺度",
  pages: [203, 204],
  coverage: "full",
  coverageNote: "Bottom of p.203 and top of p.204 read in full. All four disciplines and all four time ranges were read directly from the scan (physics 10⁻¹⁵–10⁻⁸ s; biochemistry 10⁻¹⁰–10⁻² s in the membrane and 10⁻³–10² s in the stroma; physiology 1–10⁴ s; ecology 10³ s and more). Also included: the book's careful qualification that the last step of the 'primary processes' is strictly speaking already photochemical because it starts redox processes, its statement that only the primary processes are immediately light-dependent, and its explicit declaration that the physical, physiological and ecological aspects will NOT be described further in these lecture notes — which is why the rest of the chapter is purely biochemical.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The four disciplines are separated by time scale rather than by subject, and that has a consequence you can measure at a bench: the fastest steps (10⁻¹⁵ to 10⁻⁸ s) are physics and therefore temperature-independent, while everything slower is enzyme chemistry and therefore is not. Only the primary processes are directly driven by light; the rest merely spend what the light has already made.", cn: "这四门学科是按时间尺度而不是按题材分开的，而这带来一个在实验台上能测出来的后果：最快的那一段（10⁻¹⁵ 到 10⁻⁸ 秒）属于物理，所以不依赖温度；比它慢的都是酶促化学，所以依赖温度。只有初级过程 (primary processes) 是直接被光驱动的，其余的只是在花光已经挣来的本钱。" },
  summary: {
    en: "Before starting the mechanism, the book sorts the study of photosynthesis into four disciplines separated chiefly by the time scale of the events they look at. The PHYSICS of photosynthesis deals with the absorption of radiation by the pigment molecules and the transfer of energy to the reaction centre; these run in 10⁻¹⁵ to 10⁻⁸ s and are independent of temperature. Physics therefore covers the so-called primary processes, which end with the separation of electric charge in the reaction centres — although the book immediately qualifies this: strictly speaking the last step is already a photochemical process, because it initiates oxidation–reduction events. Only the primary processes are immediately dependent on light. The BIOCHEMISTRY of photosynthesis covers the whole complex of processes connected with electron and proton transfer including the photolysis of water, whose result is the formation of ATP and NADPH; these are molecular-level events in the thylakoid membranes and their submembrane particles, in the interval 10⁻¹⁰ to 10⁻² s. Biochemistry also covers what happens in the chloroplast stroma outside the thylakoid membranes — CO₂ fixation and the formation of the products of photosynthesis, i.e. saccharides — and also photorespiration (§9.2), nitrogen metabolism (§9.4) and a range of further processes in various cell compartments, at 10⁻³ to 10² s. PHYSIOLOGY studies gas exchange between chloroplasts and the air surrounding plant tissues, and the transport, distribution, transformation and use of the products of photosynthesis, at the structural level of tissues up to whole plants, over 1 to 10⁴ s. ECOLOGY is the highest level in the hierarchy: sets of plants and whole stands, over 10³ s and more — hours, days and years. The book then states plainly that the physical, physiological and ecological aspects will not be described in more detail in these lecture notes.",
    cn: "在进入机理之前，教材把光合作用的研究按所关注事件的时间尺度分为四个学科。光合作用的**物理学**研究色素分子对辐射的吸收以及能量向反应中心的传递；这些过程在10⁻¹⁵至10⁻⁸秒内完成，且与温度无关。因此物理学涵盖所谓的初级过程，其终点是反应中心中电荷的分离——不过教材随即作了限定：严格说来，最后一步已属光化学过程，因为它启动了氧化还原事件。只有初级过程是直接依赖光的。光合作用的**生物化学**涵盖与电子和质子传递相关的整套过程，包括水的光解，其结果是ATP与NADPH的生成；这些是发生在类囊体膜及其亚膜颗粒中的分子层面事件，时间区间为10⁻¹⁰至10⁻²秒。生物化学同样涵盖类囊体膜之外、叶绿体基质中发生的事情——CO₂固定与光合产物（即糖类）的生成——以及光呼吸（§9.2）、氮代谢（§9.4）和分布于各细胞区室中的一系列其他过程，时间为10⁻³至10²秒。**生理学**研究叶绿体与植物组织周围空气之间的气体交换，以及光合产物的运输、分配、转化与利用，结构层次从组织直到整株植物，时间为1至10⁴秒。**生态学**是这一层级体系的最高层：研究植物群体与整个群落，时间为10³秒以上——小时、天与年。随后教材直言：物理学、生理学与生态学方面在本讲义中不再详述。"
  },
  points: [
    { cz: "fyzika fotosyntézy — 10⁻¹⁵ až 10⁻⁸ s", en: "The physics of photosynthesis deals with absorption of radiation by the photosynthetic pigment molecules and the transfer of energy into the reaction centre. These processes run on a time scale of 10⁻¹⁵ to 10⁻⁸ seconds and are independent of temperature.", cn: "光合作用的物理学研究光合色素分子对辐射的吸收以及能量向反应中心的传递。这些过程的时间尺度为10⁻¹⁵至10⁻⁸秒，且与温度无关。" },
    { cz: "primární děje — konec u separace náboje", en: "Into physics belong the so-called primary processes, ending with the separation of electric charge in the reaction centres. The book qualifies this at once: strictly speaking the last step is already a photochemical process, because it initiates oxidation–reduction events. Only the primary processes are IMMEDIATELY dependent on light.", cn: "所谓的初级过程属于物理学范畴，其终点是反应中心中电荷的分离。教材随即限定：严格说来最后一步已属光化学过程，因为它启动了氧化还原事件。只有初级过程是**直接**依赖光的。" },
    { cz: "biochemie fotosyntézy — dvě časová okna", en: "The biochemistry of photosynthesis has two distinct time windows. In the thylakoid membranes and their submembrane particles: the whole complex of electron- and proton-transfer processes including water photolysis, yielding ATP and NADPH, at 10⁻¹⁰ to 10⁻² s. In the chloroplast stroma, generally outside the thylakoid membranes: CO₂ fixation and formation of the saccharide products, plus photorespiration (§9.2), nitrogen metabolism (§9.4) and further processes in various cell compartments, at 10⁻³ to 10² s.", cn: "光合作用的生物化学有两个不同的时间窗口。在类囊体膜及其亚膜颗粒中：包括水光解在内的整套电子与质子传递过程，产生ATP与NADPH，时间为10⁻¹⁰至10⁻²秒。在叶绿体基质中（一般在类囊体膜之外）：CO₂固定与糖类产物的生成，以及光呼吸（§9.2）、氮代谢（§9.4）和分布于各细胞区室的其他过程，时间为10⁻³至10²秒。" },
    { cz: "fyziologie — 1 až 10⁴ s", en: "Physiology studies gas exchange between the chloroplasts and the air surrounding plant tissues, and the transport, distribution, transformation and use of the products of photosynthesis. Its structural level runs from tissues up to whole plants; its time intervals are 1 to 10⁴ seconds.", cn: "生理学研究叶绿体与植物组织周围空气之间的气体交换，以及光合产物的运输、分配、转化与利用。其结构层次从组织直到整株植物；时间区间为1至10⁴秒。" },
    { cz: "ekologie — 10³ s a více", en: "Ecology is the highest level in the whole hierarchy of photosynthetic disciplines. Its objects of study are sets of plants and whole stands (porosty), and processes spanning 10³ seconds and more — that is, hours, days and years.", cn: "生态学是光合作用各学科层级体系中的最高层。其研究对象是植物群体与整个群落，涉及的过程跨越10³秒以上——即小时、天与年。" },
    { cz: "co skripta nepokrývají", en: "The book then states plainly that the physical, physiological and ecological aspects will NOT be described in more detail in these lecture notes. Everything that follows in chapter 9 is therefore deliberately biochemistry only — useful to know when the chapter seems to skip a question you expected it to answer.", cn: "随后教材直言：物理学、生理学与生态学方面在本讲义中不再详述。因此第9章后文有意只讲生物化学——当本章似乎跳过了你以为它会回答的问题时，知道这一点很有用。" }
  ],
  terms: [
    { cz: "primární děje", en: "primary processes", cn: "初级过程", def_en: "The events from photon absorption through energy transfer to charge separation in the reaction centre; 10⁻¹⁵–10⁻⁸ s, temperature-independent, and the only part of photosynthesis immediately dependent on light.", def_cn: "从光子吸收、经能量传递直到反应中心电荷分离的一系列事件；10⁻¹⁵–10⁻⁸秒，与温度无关，并且是光合作用中唯一直接依赖光的部分。" },
    { cz: "reakční centrum", en: "reaction centre", cn: "反应中心", def_en: "The site to which the light-harvesting pigments deliver energy and at which charge separation occurs; developed in §9.1.3.", def_cn: "捕光色素把能量输送到的部位，也是电荷分离发生之处；在§9.1.3中展开。" },
    { cz: "porost", en: "plant stand", cn: "植物群落", def_en: "A whole community/canopy of plants — the object of the ecological level of photosynthesis research.", def_cn: "整个植物群体/冠层——光合作用研究生态学层面的研究对象。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which part of photosynthesis does the book describe as immediately dependent on light?",
      q_cn: "教材把光合作用的哪一部分描述为直接依赖光的？",
      options: [
        "CO₂ fixation in the stroma",
        "Only the primary processes, which end with charge separation in the reaction centre",
        "The whole of electron and proton transport including water photolysis",
        "Photorespiration and nitrogen metabolism"
      ],
      answer: 1,
      why_en: "The book says explicitly that only the primary processes — the 10⁻¹⁵ to 10⁻⁸ s events ending with charge separation — are immediately dependent on light. This is the same claim it uses later to argue that calling CO₂ fixation the 'dark phase' is misleading (§9.1.4).",
      why_cn: "教材明确指出，只有初级过程——即以电荷分离为终点的10⁻¹⁵至10⁻⁸秒事件——是直接依赖光的。它在后文用同一论断说明把CO₂固定称作「暗相」是有误导性的（§9.1.4）。"
    },
    {
      type: "short",
      q_en: "Give the time scale the book assigns to the physics of photosynthesis and to the ecology of photosynthesis.",
      q_cn: "说出教材分配给光合作用物理学与光合作用生态学的时间尺度。",
      accept: ["10-15", "10⁻¹⁵", "10-8", "10⁻⁸", "10 3", "10³", "hours", "days", "years"],
      answer_en: "Physics: 10⁻¹⁵ to 10⁻⁸ s (and temperature-independent). Ecology: 10³ s and more — hours, days and years.",
      answer_cn: "物理学：10⁻¹⁵至10⁻⁸秒（且与温度无关）。生态学：10³秒以上——小时、天与年。"
    }
  ],
  oral: {
    q_en: "How does the textbook organise the study of photosynthesis, and why is that organisation useful?",
    q_cn: "教材如何组织光合作用的研究？这样的组织为何有用？",
    model_en: "It sorts the field into four disciplines, and what really separates them is the time scale of the events each one looks at. Physics takes the fastest: absorption of a photon by a pigment and the transfer of that energy into the reaction centre, ten to the minus fifteen up to ten to the minus eight seconds, and notably independent of temperature — which is itself a clue that no enzyme is involved. These are the primary processes, ending with charge separation, and the book adds a nice caveat that strictly speaking that final step is already photochemistry, because it is what starts the redox chemistry. Only those primary processes are immediately light-dependent. Biochemistry sits in the middle and actually spans two windows: the membrane events — electron and proton transfer, water photolysis, ATP and NADPH formation — at ten to the minus ten to ten to the minus two seconds, and the stroma events — carbon fixation, sugar synthesis, photorespiration, nitrogen metabolism — at ten to the minus three to ten squared seconds. Physiology takes seconds to hours and works at the level of tissues and whole plants: gas exchange, transport and use of the products. Ecology takes hours to years and works on stands and communities. The organisation is useful because it tells you which questions this chapter will and will not answer — the book says outright that it will only develop the biochemistry.",
    checklist: [
      "Named all four disciplines: physics, biochemistry, physiology, ecology",
      "Gave physics as 10⁻¹⁵–10⁻⁸ s and noted it is temperature-independent",
      "Gave biochemistry's two windows: membrane 10⁻¹⁰–10⁻² s, stroma 10⁻³–10² s",
      "Gave physiology 1–10⁴ s and ecology 10³ s and up",
      "Stated that only the primary processes are immediately light-dependent",
      "Noted the book's own caveat that the final primary step is strictly already photochemical",
      "Noted that the book explicitly restricts itself to the biochemistry from here on"
    ]
  }
},

{
  id: "9-5",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1.1",
  czTitle: "Tři kategorie fotosyntetických pigmentů",
  enTitle: "The three categories of photosynthetic pigment",
  cnTitle: "光合色素的三大类别",
  pages: [204, 205],
  coverage: "full",
  coverageNote: "The §9.1.1 heading and its opening line on p.204, and the numbered three-item list at the top of p.205, read in full. Each of the three items carries a cross-reference in the book itself and all three were read off the scan: chlorophylls → kap. 6.3 (porphyrins), phycobilins → the bile pigments biliverdin/bilirubin/stercobilin, carotenoids → kap. 8.2.4 (isoprenoids, related to steroids). Obr. 9.2 on p.204 was read for its labels: it shows the full chlorophyll a structure (porphyrin head with central Mg, phytol tail), an inset circle giving the one ring-II difference that makes chlorophyll b, plus β-karoten and lutein, and a space-filling model alongside.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Three chemically unrelated things — a closed tetrapyrrole ring holding Mg, an open tetrapyrrole chain, and a long isoprenoid — all work as pigments for the same single reason: a long run of alternating double bonds absorbs visible light. Remember the three shapes (closed ring, open chain, long chain) and you have the whole classification.", cn: "三种化学上毫不相干的东西——含 Mg 的闭合四吡咯环、断开的四吡咯链、长链异戊二烯类——之所以都能当色素，理由只有一个：一长串交替的双键会吸收可见光。记住这三个形状（闭环、开链、长链），整个分类就有了。" },
  summary: {
    en: "Section 9.1.1 opens by stating that there exist three categories of photosynthetic pigment, and each is defined by cross-reference to a structural class already met earlier in the book. (1) CHLOROPHYLLS are porphyrins — the book points back to kap. 6.3 and to the fact that these are molecules similar to haem, as found in haemoglobin and the cytochromes. (2) PHYCOBILINS have an OPEN tetrapyrrole chain, and the book compares them to the bile pigments biliverdin, bilirubin and stercobilin. The contrast with the chlorophylls is exactly the contrast between a closed macrocycle and an opened chain, which is also the difference between haem and its degradation products. (3) CAROTENOIDS are isoprenoids, cross-referenced to kap. 8.2.4, and are related to the steroids — both being built from the same isoprene units. Obr. 9.2 on the facing page gives the structures of the main pigments: the full chlorophyll a molecule with its porphyrin head carrying the central Mg and its long phytol tail, an inset showing the single ring-II substituent that distinguishes chlorophyll b, and below them β-carotene and lutein as the carotenoid examples. The whole taxonomy is therefore: closed tetrapyrrole with Mg (chlorophylls), open tetrapyrrole (phycobilins), long conjugated isoprenoid (carotenoids) — three quite different chemistries whose common property is a long conjugated double-bond system that absorbs visible light.",
    cn: "§9.1.1开篇即指出光合色素有三大类别，且每一类都通过交叉引用到书中先前讲过的某一结构类别来界定。(1)**叶绿素**属于卟啉——教材回指第6.3节，并指出这类分子与血红素相似（如存在于血红蛋白和细胞色素中者）。(2)**藻胆素**具有**开链**的四吡咯结构，教材将其比作胆色素中的胆绿素、胆红素与粪胆素。它与叶绿素的对比，恰是闭合大环与开裂链条之间的对比，这也正是血红素与其降解产物之间的差别。(3)**类胡萝卜素**属于异戊二烯类，交叉引用至第8.2.4节，并与类固醇相关——二者都由相同的异戊二烯单元构建。对页的图9.2给出主要色素的结构：完整的叶绿素a分子，含中心Mg的卟啉头部与长植醇尾部；一个插图圈出使叶绿素b区别开来的环II取代基；下方是作为类胡萝卜素实例的β-胡萝卜素与叶黄素。因此整个分类是：含Mg的闭合四吡咯（叶绿素）、开链四吡咯（藻胆素）、长共轭异戊二烯（类胡萝卜素）——三种颇为不同的化学结构，其共同性质是都具有能吸收可见光的长共轭双键系统。"
  },
  points: [
    { cz: "1. chlorofyly — porfyriny (kap. 6.3)", en: "Chlorophylls are porphyrins, cross-referenced to kap. 6.3: molecules similar to haem, as found in haemoglobin and the cytochromes. The difference is the central metal — Mg in chlorophyll where haem has Fe.", cn: "叶绿素属卟啉，交叉引用至第6.3节：与血红素相似的分子（如存在于血红蛋白和细胞色素中者）。差别在于中心金属——叶绿素中是Mg，而血红素中是Fe。" },
    { cz: "2. fykobiliny — otevřený tetrapyrol", en: "Phycobilins have an OPEN tetrapyrrole chain, and the book explicitly compares them to the bile pigments biliverdin, bilirubin and stercobilin. Same four pyrroles, but the macrocycle is broken.", cn: "藻胆素具有**开链**四吡咯结构，教材明确将其比作胆色素中的胆绿素、胆红素与粪胆素。同样是四个吡咯，但大环被打开了。" },
    { cz: "3. karotenoidy — isoprenoidy (kap. 8.2.4)", en: "Carotenoids are isoprenoids, cross-referenced to kap. 8.2.4, and are described as related to the steroids — a relationship that runs through the shared isoprene building blocks rather than through any similarity of shape.", cn: "类胡萝卜素属异戊二烯类，交叉引用至第8.2.4节，并被描述为与类固醇相关——这种关联通过共有的异戊二烯构件而非形状上的相似性成立。" },
    { cz: "Obr. 9.2 — které vzorce", en: "Obr. 9.2 gives the structural formulae of the main photosynthetic pigments: chlorophyll a in full (porphyrin ring system with central Mg, labelled rings I–IV, plus the long phytol chain labelled 'fytol'), an inset circle showing the single ring-II difference that makes chlorophyll b, and below them β-carotene and lutein.", cn: "图9.2给出主要光合色素的结构式：完整的叶绿素a（含中心Mg的卟啉环系、标注环I–IV，以及标为「fytol」的长植醇链）、一个圈出使叶绿素b区别开来的环II差异的插图，下方是β-胡萝卜素与叶黄素。" },
    { cz: "co mají tři třídy společné", en: "The three classes are chemically quite unrelated — a closed metallo-tetrapyrrole, an open tetrapyrrole, and a long polyene — but all three share the one property that matters: an extended conjugated double-bond system, which is what shifts absorption into the visible range.", cn: "这三类在化学上颇不相关——闭合的金属四吡咯、开链四吡咯、长多烯——但三者共享唯一要紧的性质：延伸的共轭双键系统，正是它把吸收移入可见光范围。" }
  ],
  terms: [
    { cz: "chlorofyl", en: "chlorophyll", cn: "叶绿素", def_en: "A porphyrin (closed tetrapyrrole) photosynthetic pigment with central Mg²⁺ and, usually, a phytol tail; structurally similar to haem but with Mg instead of Fe.", def_cn: "一种卟啉（闭合四吡咯）光合色素，中心为Mg²⁺，通常带植醇尾；结构上类似血红素，但金属为Mg而非Fe。" },
    { cz: "fykobilin", en: "phycobilin", cn: "藻胆素", def_en: "An accessory photosynthetic pigment with an OPEN tetrapyrrole chain, likened by the book to the bile pigments biliverdin, bilirubin and stercobilin. Found in cyanobacteria and red algae.", def_cn: "一种辅助光合色素，具**开链**四吡咯结构，教材将其比作胆绿素、胆红素与粪胆素等胆色素。存在于蓝细菌与红藻中。" },
    { cz: "karotenoid", en: "carotenoid", cn: "类胡萝卜素", def_en: "An isoprenoid accessory pigment related to the steroids; β-carotene and lutein are the book's two examples (Obr. 9.2).", def_cn: "一种与类固醇相关的异戊二烯类辅助色素；教材举的两个例子是β-胡萝卜素与叶黄素（图9.2）。" },
    { cz: "tetrapyrol", en: "tetrapyrrole", cn: "四吡咯", def_en: "Four pyrrole rings joined in sequence; closed into a macrocycle in the porphyrins/chlorophylls, left open in the phycobilins and bile pigments.", def_cn: "四个吡咯环依次连接；在卟啉/叶绿素中闭合成大环，在藻胆素与胆色素中则保持开链。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the structural difference the book uses to separate chlorophylls from phycobilins?",
      q_cn: "教材用什么结构差异把叶绿素与藻胆素区分开？",
      options: [
        "Chlorophylls contain Fe, phycobilins contain Mg",
        "Chlorophylls are closed porphyrin macrocycles; phycobilins have an OPEN tetrapyrrole chain, like the bile pigments",
        "Chlorophylls are isoprenoids; phycobilins are tetrapyrroles",
        "Chlorophylls have a phytol tail; phycobilins have a carotenoid tail"
      ],
      answer: 1,
      why_en: "The book defines phycobilins precisely by the open tetrapyrrole chain and compares them to biliverdin, bilirubin and stercobilin. Chlorophylls, being porphyrins (kap. 6.3), are closed macrocycles. Option 0 has the metals the wrong way round (chlorophyll has Mg, haem has Fe) and option 2 confuses carotenoids with chlorophylls.",
      why_cn: "教材正是以开链四吡咯来界定藻胆素，并将其比作胆绿素、胆红素与粪胆素。叶绿素作为卟啉（第6.3节）则是闭合大环。选项0把金属弄反了（叶绿素含Mg、血红素含Fe），选项2把类胡萝卜素与叶绿素混为一谈。"
    },
    {
      type: "short",
      q_en: "Name the three categories of photosynthetic pigment and the structural class each belongs to.",
      q_cn: "说出光合色素的三大类别，以及各自所属的结构类别。",
      accept: ["chlorophyll", "porphyrin", "phycobilin", "open tetrapyrrole", "carotenoid", "isoprenoid"],
      answer_en: "Chlorophylls = porphyrins (closed tetrapyrroles, haem-like, kap. 6.3); phycobilins = open-chain tetrapyrroles (bile-pigment-like); carotenoids = isoprenoids related to the steroids (kap. 8.2.4).",
      answer_cn: "叶绿素=卟啉（闭合四吡咯，类似血红素，第6.3节）；藻胆素=开链四吡咯（类似胆色素）；类胡萝卜素=与类固醇相关的异戊二烯类（第8.2.4节）。"
    }
  ],
  oral: {
    q_en: "Classify the photosynthetic pigments and say what, chemically, they have in common.",
    q_cn: "请对光合色素分类，并说明它们在化学上有何共同之处。",
    model_en: "There are three categories, and the textbook defines each by pointing back to a structural class you have already met. The chlorophylls are porphyrins — closed tetrapyrrole macrocycles, chemically the same family as the haem in haemoglobin and the cytochromes, except that the metal at the centre is magnesium rather than iron, and there is usually a long phytol tail hanging off. The phycobilins are also tetrapyrroles, but with the ring opened into a chain, which is why the book compares them to the bile pigments — biliverdin, bilirubin, stercobilin — since those are exactly what you get when you break a haem macrocycle open. The carotenoids are something else entirely: isoprenoids, built from isoprene units, and for that reason related to the steroids; beta-carotene and lutein are the examples given. So structurally you have a closed metal-containing ring, an open chain, and a long polyene — three unrelated chemistries. What unites them is the one property that matters optically: every one of them carries an extended system of conjugated double bonds, and that is what pulls their absorption down into the visible range so they can catch sunlight at all.",
    checklist: [
      "Named all three categories: chlorophylls, phycobilins, carotenoids",
      "Identified chlorophylls as porphyrins, haem-like, with central Mg (not Fe)",
      "Identified phycobilins as OPEN-chain tetrapyrroles and compared them to bile pigments",
      "Identified carotenoids as isoprenoids related to steroids; gave β-carotene and/or lutein",
      "Stated the shared feature: an extended conjugated double-bond system absorbing visible light"
    ]
  }
},

{
  id: "9-6",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1.1",
  czTitle: "Chlorofyly — struktura a výsadní role chlorofylu a",
  enTitle: "Chlorophylls — structure and the privileged role of chlorophyll a",
  cnTitle: "叶绿素——结构与叶绿素a的特殊地位",
  pages: [204, 205],
  coverage: "full",
  coverageNote: "The 'Chlorofyly' subsection on p.205 read in full, together with Obr. 9.2 on p.204 which it refers to. The claim that only chlorophyll a is the actual energy transformer is reproduced with the book's own reasoning (the argument runs from the universal distribution of chlorophyll a across oxygenic organisms), and the bacteriochlorophyll parenthesis is kept because it is what makes that argument specific to the oxygenic type. The phytol residue is stated as containing 20 carbon atoms, read directly from the scan.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "A chlorophyll molecule is two objects glued together: a flat conjugated head that does all the optics, and a 20-carbon phytol tail that does nothing optical at all and exists only to hold the pigment inside the membrane. And of all the pigments only chlorophyll a actually turns light into chemistry — everything else, chlorophyll b included, just hands it energy.", cn: "一个叶绿素分子其实是两样东西粘在一起：一个扁平的共轭「头」，光学性质全在这里；以及一条 20 个碳的植醇 (phytol) 尾巴，它在光学上什么都不做，存在的意义只是把色素固定在膜里。而所有色素里，真正把光变成化学能的只有叶绿素 a——包括叶绿素 b 在内的其余全部，只是把能量递给它。" },
  summary: {
    en: "Chlorophylls are described as the obligatory and most important photosynthetic pigments. Their basic structure is the porphyrin (kap. 6.3): tetrapyrroles joined to one another by methine bridges, carrying a rich system of conjugated double bonds. All chlorophylls have this same general structure. Besides the porphyrin, which is always the part responsible for the photochemical properties, the chlorophyll molecule also contains an alcohol — most often the phytyl residue, which contains 20 carbon atoms and is itself an isoprenoid (kap. 8). So the molecule is a two-part object: a flat conjugated head that does the photochemistry, and a long hydrophobic tail that anchors it in the membrane. The book then makes a strong and specific claim. Chlorophyll a is universally distributed in organisms with the oxygenic type of photosynthesis — bacteriochlorophyll, it notes in parenthesis, has a somewhat different structure — and this universality led to the correct view that ONLY chlorophyll a is the actual transformer of energy in photosynthesis, the one that directly participates in the primary photochemical process, i.e. in the conversion of the energy of electromagnetic radiation into chemical energy. Chlorophyll b and everything else are, by this argument, accessory. Obr. 9.2 makes the a/b distinction visually: the inset circle isolates ring II and shows the single substituent difference that turns chlorophyll a into chlorophyll b.",
    cn: "叶绿素被描述为必备且最重要的光合色素。其基本结构是卟啉（第6.3节）：四个吡咯环通过次甲基桥相互连接，带有丰富的共轭双键系统。所有叶绿素都具有这一相同的总体结构。除卟啉（始终是决定光化学性质的部分）之外，叶绿素分子还含有一个醇——最常见的是植基残基，含20个碳原子，本身即为一种异戊二烯类化合物（第8章）。因此该分子是一个两部分的构造：一个进行光化学反应的平面共轭头部，和一条把它锚定在膜中的长疏水尾巴。随后教材提出一个强而具体的论断。叶绿素a在产氧型光合作用的生物中普遍存在——教材在括号中指出，细菌叶绿素的结构有所不同——这种普遍性导出了一个正确的观点：**只有**叶绿素a才是光合作用中真正的能量转换者，是直接参与初级光化学过程（即把电磁辐射能转换为化学能）的那一个。按此论证，叶绿素b及其余一切都是辅助性的。图9.2把a/b的区别以图示方式呈现：插图圈出环II，显示把叶绿素a变成叶绿素b的那一个取代基差异。"
  },
  points: [
    { cz: "obligatorní a nejdůležitější pigmenty", en: "Chlorophylls are the obligatory and most important photosynthetic pigments — 'obligatory' meaning no photosynthetic system does without them, in contrast to the accessory pigments, whose presence varies by organism.", cn: "叶绿素是必备且最重要的光合色素——「必备」意即没有任何光合系统能缺少它们，与之相对的辅助色素则因生物而异。" },
    { cz: "porfyrin — tetrapyroly + methinové můstky", en: "The basic structure is the porphyrin (kap. 6.3): tetrapyrroles joined to one another by methine bridges, with a rich system of conjugated double bonds. All chlorophylls share this structure.", cn: "基本结构是卟啉（第6.3节）：四吡咯通过次甲基桥相互连接，带有丰富的共轭双键系统。所有叶绿素共有这一结构。" },
    { cz: "porfyrin nese fotochemii", en: "The porphyrin is ALWAYS the part responsible for the photochemical properties. Everything the molecule does optically, it does with the head.", cn: "卟啉**始终**是决定光化学性质的那一部分。该分子在光学上的一切作为，都是靠头部完成的。" },
    { cz: "fytol — 20 uhlíků, isoprenoid", en: "Besides the porphyrin the molecule also contains an alcohol, most often the phytyl residue containing 20 carbon atoms; it is itself an isoprenoid (kap. 8). Functionally this long hydrophobic tail is what holds the pigment inside the thylakoid membrane.", cn: "除卟啉之外，分子还含有一个醇，最常见的是含20个碳原子的植基残基；它本身即为异戊二烯类（第8章）。就功能而言，这条长疏水尾巴正是把色素固定在类囊体膜内的部分。" },
    { cz: "univerzální rozšíření chlorofylu a", en: "Chlorophyll a is universally distributed among organisms with the oxygenic type of photosynthesis (bacteriochlorophyll has a somewhat different structure). The book uses this universality as the evidence for its next claim.", cn: "叶绿素a在产氧型光合作用的生物中普遍存在（细菌叶绿素的结构有所不同）。教材以这种普遍性作为下一论断的依据。" },
    { cz: "jen chlorofyl a je transformátor energie", en: "That universality led to the correct view that ONLY chlorophyll a is the actual transformer of energy in photosynthesis — the pigment that directly participates in the primary photochemical process, the conversion of electromagnetic radiation energy into chemical energy. All other pigments, chlorophyll b included, feed energy to it (§9.1.1, accessory pigments).", cn: "这种普遍性导出了一个正确的观点：**只有**叶绿素a才是光合作用中真正的能量转换者——是直接参与初级光化学过程（把电磁辐射能转换为化学能）的色素。包括叶绿素b在内的其他所有色素都只是向它输送能量（§9.1.1，辅助色素）。" },
    { cz: "chlorofyl b — rozdíl v kruhu II", en: "Obr. 9.2 shows the chlorophyll a/b difference as an inset circle isolating ring II: a single substituent change is all that separates them, which is why (per Obr. 9.3) their absorption spectra are so similar in shape.", cn: "图9.2以一个圈出环II的插图展示叶绿素a与b的差异：二者之间只差一个取代基，这正是（据图9.3）它们的吸收光谱在形状上如此相似的原因。" }
  ],
  terms: [
    { cz: "porfyrin", en: "porphyrin", cn: "卟啉", def_en: "A closed macrocycle of four pyrrole rings joined by methine bridges, with an extensive conjugated double-bond system; the light-absorbing head of every chlorophyll (kap. 6.3).", def_cn: "由四个吡咯环经次甲基桥连接而成的闭合大环，具有广泛的共轭双键系统；是每一种叶绿素的吸光头部（第6.3节）。" },
    { cz: "fytol", en: "phytol", cn: "植醇", def_en: "The 20-carbon isoprenoid alcohol esterified to the chlorophyll porphyrin; the hydrophobic tail that anchors the pigment in the thylakoid membrane.", def_cn: "与叶绿素卟啉酯化的20碳异戊二烯类醇；把色素锚定在类囊体膜中的疏水尾巴。" },
    { cz: "bakteriochlorofyl", en: "bacteriochlorophyll", cn: "细菌叶绿素", def_en: "The chlorophyll of anoxygenic photosynthetic bacteria; the book notes only that its structure is somewhat different from chlorophyll a.", def_cn: "不产氧光合细菌的叶绿素；教材仅指出其结构与叶绿素a有所不同。" },
    { cz: "methinový můstek", en: "methine bridge", cn: "次甲基桥", def_en: "The –CH= unit linking adjacent pyrrole rings in a porphyrin and completing the conjugated system around the macrocycle.", def_cn: "连接卟啉中相邻吡咯环的–CH=单元，使共轭系统沿大环闭合。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "On what evidence does the book base the claim that only chlorophyll a is the actual energy transformer in photosynthesis?",
      q_cn: "教材依据什么证据提出「只有叶绿素a才是光合作用中真正的能量转换者」这一论断？",
      options: [
        "Its absorption maximum lies furthest into the red of all the pigments",
        "It is the only pigment that carries a phytol tail",
        "Its universal distribution among organisms with oxygenic photosynthesis",
        "It is the only chlorophyll containing magnesium"
      ],
      answer: 2,
      why_en: "The argument in the text runs from universality: chlorophyll a is found in every organism with oxygenic photosynthesis (bacteriochlorophyll, structurally different, belongs to the anoxygenic ones), and this universal presence is what led to the view that it alone performs the primary photochemical act.",
      why_cn: "文中的论证以普遍性为出发点：叶绿素a存在于每一种产氧光合生物中（结构不同的细菌叶绿素属于不产氧的那一类），正是这种普遍存在导出了「唯有它执行初级光化学作用」的观点。"
    },
    {
      type: "short",
      q_en: "What are the two structural parts of a chlorophyll molecule, and what does each do?",
      q_cn: "叶绿素分子有哪两个结构部分？各自的功能是什么？",
      accept: ["porphyrin", "photochem", "phytol", "20", "tail", "membrane", "anchor"],
      answer_en: "A porphyrin head — a closed tetrapyrrole with methine bridges and a conjugated double-bond system, always the part responsible for the photochemical properties — and an alcohol tail, most often the 20-carbon isoprenoid phytol, which anchors the pigment in the thylakoid membrane.",
      answer_cn: "一个卟啉头部——由次甲基桥连接、带共轭双键系统的闭合四吡咯，始终是负责光化学性质的部分——以及一条醇尾，最常见为20碳的异戊二烯类植醇，把色素锚定在类囊体膜中。"
    }
  ],
  oral: {
    q_en: "Describe the structure of chlorophyll and explain why chlorophyll a is singled out from all the other pigments.",
    q_cn: "请描述叶绿素的结构，并解释为何叶绿素a从所有其他色素中被单独挑出。",
    model_en: "A chlorophyll is a two-part molecule. The head is a porphyrin — four pyrrole rings closed into a macrocycle by methine bridges, with an extensive conjugated double bond system and a magnesium ion at the centre. This is the same structural family as the haem of haemoglobin and the cytochromes, and it is always the part that does the photochemistry. The tail is an alcohol, usually phytol, a twenty-carbon isoprenoid, and its job is purely physical: it is what keeps the pigment sitting inside the thylakoid membrane. All chlorophylls share that plan; chlorophyll b differs from a by a single substituent on ring two, which is why their absorption spectra look so alike. As for why a is singled out — the argument the book gives is one of universality. Chlorophyll a turns up in every organism that does oxygenic photosynthesis, without exception; the bacteria that do it differently have a structurally different bacteriochlorophyll instead. That universal presence is what led to the conclusion that chlorophyll a alone is the real transformer of energy, the pigment that actually performs the primary photochemical act of turning electromagnetic energy into chemical energy. Everything else, chlorophyll b included, is accessory: it collects light and hands the energy on.",
    checklist: [
      "Described the porphyrin head: four pyrroles, methine bridges, conjugated system, central Mg",
      "Said the porphyrin is always the part responsible for the photochemical properties",
      "Described the phytol tail as a 20-carbon isoprenoid and gave its membrane-anchoring role",
      "Gave the chlorophyll a/b difference as a single ring-II substituent",
      "Gave universality among oxygenic organisms as the evidence for chlorophyll a's unique role",
      "Mentioned bacteriochlorophyll as the structurally different exception in anoxygenic bacteria",
      "Concluded that all other pigments are accessory energy collectors"
    ]
  }
},

{
  id: "9-7",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1.1",
  czTitle: "Absorpční spektra chlorofylů — proč je rostlinný svět zelený",
  enTitle: "Absorption spectra of the chlorophylls — why the plant world is green",
  cnTitle: "叶绿素的吸收光谱——植物世界为何是绿色的",
  pages: [205],
  coverage: "full",
  coverageNote: "The paragraph discussing Obr. 9.3 on p.205 read in full, and the figure itself read for its axes and band positions. Both numerical bands (415-440 nm and 640-700 nm) were read from the text, and the text's own explanation for why the shorter-wavelength band is NOT significant for photosynthesis (it excites electrons to the 2nd singlet excited state, whose lifetime is too short to be used to start subsequent redox reactions) is reproduced in full, since this is the substantive point of the passage and is often taught wrongly. Obr. 9.3 plots relative absorption units against 400-700 nm for chlorofyl a and chlorofyl b separately.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Chlorophyll absorbs in the blue and in the red, but only the red band is usable: the blue photon carries MORE energy and yet drops the electron into a state that decays before any redox chemistry can start, so that energy is thrown away as heat. Leaves are green because red is what got taken and green is what was left over.", cn: "叶绿素在蓝光区和红光区都有吸收，但只有红光那一段能用：蓝光光子携带的能量更多，却把电子送进一个还没等氧化还原反应开始就已经衰变掉的状态，那份能量只能以热散掉。叶子是绿的，是因为红光被拿走了，绿光是剩下的。" },
  summary: {
    en: "Obr. 9.3 gives the absorption spectra of chlorophyll a and chlorophyll b, and the book's first observation is how similar they are in the shape AND the position of the absorption bands — consistent with the single-substituent structural difference. Chlorophyll molecules absorb in two regions. The first is 415 to 440 nm, and the book states flatly that this region is NOT significant for photosynthesis, giving the reason: it corresponds to excitation of electrons into the 2nd singlet excited state, whose lifetime is too short, so that this excitation cannot be used to start the subsequent oxidation–reduction reactions. The second is the red region, 640 to 700 nm; THIS absorption is the one significant for photosynthesis, and it corresponds to excitation of electrons into the 1st singlet excited state. From there the book draws the everyday consequence: the complementary colour to red is green, and this is why the plant world is 'green'. The green we see is what is left over — the light the chlorophylls do not take.",
    cn: "图9.3给出叶绿素a与叶绿素b的吸收光谱，教材的第一个观察是二者在吸收带的**形状**与**位置**上都非常相似——这与仅相差一个取代基的结构差异相符。叶绿素分子在两个区域吸收。第一个是415至440 nm，教材明确指出该区域对光合作用**不**重要，并给出理由：它对应于电子被激发到**第2**单线激发态，而该态寿命太短，因此这种激发无法用于启动后续的氧化还原反应。第二个是红光区640至700 nm；**这一**吸收才是对光合作用重要的，它对应于电子被激发到**第1**单线激发态。由此教材导出了日常层面的结果：红色的互补色是绿色，这正是植物世界呈「绿色」的原因。我们看到的绿色是剩下的那部分——叶绿素没有拿走的光。"
  },
  points: [
    { cz: "spektra a a b jsou si velmi podobná", en: "The absorption spectra of chlorophyll a and chlorophyll b are strikingly similar in both the shape and the position of their absorption bands — which follows from their differing by a single ring-II substituent.", cn: "叶绿素a与叶绿素b的吸收光谱在吸收带的形状与位置上都惊人地相似——这源于二者仅相差环II上的一个取代基。" },
    { cz: "415–440 nm — pro fotosyntézu nevýznamné", en: "Chlorophylls absorb at 415 to 440 nm, but this region is NOT significant for photosynthesis. Reason given: it corresponds to excitation of electrons into the 2ND singlet excited state, whose lifetime is too short, so the excitation cannot be used to start the subsequent redox reactions.", cn: "叶绿素在415至440 nm处有吸收，但该区域对光合作用**不**重要。给出的理由是：它对应于电子被激发到**第2**单线激发态，该态寿命太短，因此这种激发无法用于启动后续的氧化还原反应。" },
    { cz: "640–700 nm — významné", en: "Chlorophylls also absorb in the red region 640 to 700 nm, and THIS absorption is significant for photosynthesis. It corresponds to excitation of electrons into the 1ST singlet excited state, which is long-lived enough to be used.", cn: "叶绿素在红光区640至700 nm也有吸收，**这一**吸收对光合作用是重要的。它对应于电子被激发到**第1**单线激发态，该态寿命足够长以供利用。" },
    { cz: "1. vs 2. singletový excitovaný stav", en: "The whole distinction between a 'useful' and a 'useless' absorption band comes down to excited-state lifetime, not to how much energy the photon carries. The blue photons carry MORE energy but land the electron in a state that decays before the redox chemistry can start.", cn: "「有用」与「无用」吸收带之间的全部区别，归结为激发态寿命，而非光子携带多少能量。蓝光光子携带的能量**更多**，却把电子送到一个尚未来得及启动氧化还原化学就已衰变的状态。" },
    { cz: "zelená = doplňková barva k červené", en: "The complementary colour to red is green. Since the chlorophylls take the red and leave the green, the plant world is 'green' — the colour we see is the residue of what was not absorbed.", cn: "红色的互补色是绿色。既然叶绿素取走红光、留下绿光，植物世界便呈「绿色」——我们看到的颜色是未被吸收部分的残余。" }
  ],
  terms: [
    { cz: "singletový excitovaný stav", en: "singlet excited state", cn: "单线激发态", def_en: "An excited electronic state with paired spins. The 1st singlet state of chlorophyll is long-lived enough to drive photochemistry; the 2nd is not.", def_cn: "自旋成对的电子激发态。叶绿素的第1单线态寿命足以驱动光化学反应；第2单线态则不然。" },
    { cz: "absorpční pás", en: "absorption band", cn: "吸收带", def_en: "A wavelength range over which a pigment absorbs. Chlorophylls have two: 415–440 nm (not useful for photosynthesis) and 640–700 nm (useful).", def_cn: "色素发生吸收的波长范围。叶绿素有两个：415–440 nm（对光合作用无用）与640–700 nm（有用）。" },
    { cz: "doplňková barva", en: "complementary colour", cn: "互补色", def_en: "The colour perceived when a given wavelength range is removed from white light; green is complementary to red, which is why chlorophyll-containing tissue looks green.", def_cn: "白光中某一波长范围被移除后所感知的颜色；绿色与红色互补，这就是含叶绿素的组织呈绿色的原因。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the book say the 415–440 nm absorption band of chlorophyll is not significant for photosynthesis?",
      q_cn: "教材为何说叶绿素415–440 nm的吸收带对光合作用不重要？",
      options: [
        "Because sunlight contains almost no light at those wavelengths",
        "Because it excites electrons into the 2nd singlet excited state, whose lifetime is too short to start the subsequent redox reactions",
        "Because only accessory pigments, not chlorophyll a, absorb there",
        "Because those photons carry too little energy to drive charge separation"
      ],
      answer: 1,
      why_en: "The reason is excited-state lifetime, not photon supply or photon energy. Blue photons are the MORE energetic ones; the problem is that they put the electron in the 2nd singlet state, which decays before the redox chemistry can be started. Only the 1st singlet state, reached by red 640–700 nm light, is usable.",
      why_cn: "理由是激发态寿命，而非光子供应或光子能量。蓝光光子能量**更高**；问题在于它们把电子送入第2单线态，该态在氧化还原化学得以启动之前就已衰变。只有由640–700 nm红光达到的第1单线态才可用。"
    },
    {
      type: "short",
      q_en: "Why is the plant world green?",
      q_cn: "植物世界为何是绿色的？",
      accept: ["red", "complementary", "640", "700", "absorb", "not absorbed"],
      answer_en: "Because the photosynthetically significant absorption of the chlorophylls lies in the red, 640–700 nm. Green is the complementary colour to red, so what is reflected/transmitted — and therefore what we see — is green.",
      answer_cn: "因为叶绿素在光合作用上重要的吸收位于红光区640–700 nm。绿色是红色的互补色，因此被反射/透射的、也就是我们所看到的，是绿色。"
    }
  ],
  oral: {
    q_en: "Describe the absorption spectrum of chlorophyll and explain which part of it actually matters for photosynthesis.",
    q_cn: "请描述叶绿素的吸收光谱，并说明其中哪一部分对光合作用真正重要。",
    model_en: "Chlorophyll a and chlorophyll b have spectra that are remarkably alike, both in the shape of the bands and in where they sit, which makes sense given they differ by only one substituent. Each has two absorption regions. One is in the blue, roughly four hundred and fifteen to four hundred and forty nanometres. The other is in the red, six hundred and forty to seven hundred. Now the point that is easy to get wrong: only the red band matters for photosynthesis. You might expect the opposite, since blue photons carry more energy. But energy is not the constraint — lifetime is. A blue photon lifts the electron into the second singlet excited state, and that state decays so fast that the subsequent oxidation-reduction chemistry never gets started. The red photon lifts it into the first singlet excited state, which lives long enough to be used. So the useful absorption is the red one. And that gives us the everyday consequence: the pigments take the red and leave the green, green being the complementary colour to red, and that is why the plant world looks green to us. The colour of a leaf is the light photosynthesis did not want.",
    checklist: [
      "Noted the strong similarity between chlorophyll a and b spectra in shape and position",
      "Gave both bands: 415–440 nm and 640–700 nm",
      "Identified the red band as the photosynthetically significant one",
      "Explained the blue band's uselessness via the SHORT LIFETIME of the 2nd singlet excited state, not via energy",
      "Named the 1st singlet excited state as the usable one",
      "Derived the greenness of plants from green being complementary to the absorbed red"
    ]
  }
},

{
  id: "9-8",
  book: "cz",
  topicKey: "photosynthetic-pigments",
  chapter: 9,
  section: "9.1.1",
  czTitle: "Pomocné (akcesorické) pigmenty a pokrytí slunečního spektra",
  enTitle: "Accessory pigments and the covering of the solar spectrum",
  cnTitle: "辅助色素与对太阳光谱的覆盖",
  pages: [205, 206],
  coverage: "full",
  coverageNote: "The closing paragraph of the 'Chlorofyly' subsection running from the bottom of p.205 onto the top of p.206 read in full — this sentence is split across the page break and both halves were read so the list of accessory pigments is complete (other chlorophyll types; in cyanobacteria and red algae the biliproteins/phycobilins, extending the effective radiation into the blue and red; and carotenoids, supplementing the yellow-green part). Obr. 9.4 on p.206 read for its curves: Chlorofyl a, Chlorofyl b, Karotenoidy, Fykoerythrin, Fykocyanin, plus the solar radiation spectrum as an envelope, 400-700 nm.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "No single pigment covers the visible spectrum — chlorophyll alone leaves a hole right in the middle, which is exactly where the sun delivers most strongly — so the accessory pigments exist to fill that hole in, and they never do photochemistry themselves, they only pass energy to chlorophyll a. Which accessory pigments an organism carries is therefore a statement about what light actually reaches it.", cn: "没有哪一种色素能覆盖整个可见光谱——单靠叶绿素，正中间会空出一个洞，而太阳恰恰在那里辐射最强——所以辅助色素存在的意义就是把这个洞补上；它们自己从不做光化学，只把能量传给叶绿素 a。因此一种生物带哪些辅助色素，说的其实是「什么样的光真的能照到它」。" },
  summary: {
    en: "All the pigments in the thylakoids other than the chlorophyll a of the reaction centre have only an auxiliary function: they capture quanta of the incident radiation and transfer the energy of their excited state to chlorophyll a in the so-called reaction centre. For this reason they are called auxiliary, accessory or supplementary pigments. What they do, in the book's words, is complement and broaden the spectrum of photosynthetically effective radiation. Their membership is: other types of chlorophyll; in cyanobacteria (sinice) and red algae (ruduchy) the biliproteins, i.e. phycobilins, which extend the photosynthetically effective radiation into the blue and red regions; and possibly carotenoids, which supplement the radiation in the yellow-green part of the spectrum. Obr. 9.4 makes the payoff visible by overlaying the absorption curves of chlorophyll a, chlorophyll b, carotenoids, phycoerythrin and phycocyanin against the envelope of the solar spectrum, and the caption states the conclusion outright: these pigments cover practically the whole spectrum of solar radiation in the visible region. Individually every pigment has holes in its spectrum; collectively they have almost none. That is the functional argument for having accessory pigments at all — chlorophyll alone would waste the middle of the visible band, which is precisely where the sun delivers most strongly.",
    cn: "类囊体中除反应中心叶绿素a之外的所有色素都只有辅助功能：它们捕获入射辐射的量子，并把自身激发态的能量传递给所谓反应中心中的叶绿素a。因此它们被称为辅助色素、附属色素或补充色素。用教材的话说，它们所做的是**补充并拓宽**光合有效辐射的光谱。其成员包括：其他类型的叶绿素；在蓝细菌与红藻中则有胆蛋白（即藻胆素），把光合有效辐射拓展到蓝光与红光区；以及可能的类胡萝卜素，补充光谱中黄绿部分的辐射。图9.4把这一收益直观化：它把叶绿素a、叶绿素b、类胡萝卜素、藻红蛋白与藻蓝蛋白的吸收曲线叠加在太阳光谱包络之上，图注直接给出结论：这些色素几乎覆盖了可见区太阳辐射的整个光谱。单独来看，每种色素的光谱都有空缺；合起来则几乎没有。这就是为何需要辅助色素的功能性论据——单靠叶绿素会浪费可见光带的中段，而那恰恰是太阳输出最强的地方。"
  },
  points: [
    { cz: "pomocná funkce — sběr a předání", en: "All other pigments in the thylakoids have only an auxiliary function: they capture quanta of incident radiation and transfer the energy of their excited state onto chlorophyll a in the reaction centre. They never do the photochemistry themselves.", cn: "类囊体中所有其他色素都只有辅助功能：它们捕获入射辐射的量子，并把自身激发态的能量传递给反应中心中的叶绿素a。它们自身从不进行光化学反应。" },
    { cz: "pomocná / akcesorická / doplňková", en: "The book gives all three names for the same class — pomocná, akcesorická, doplňková (auxiliary, accessory, supplementary) — and defines the class functionally: they complement and broaden the spectrum of photosynthetically effective radiation.", cn: "教材为同一类色素给出三个名称——辅助、附属、补充——并从功能上界定该类：它们补充并拓宽光合有效辐射的光谱。" },
    { cz: "další typy chlorofylů", en: "Other types of chlorophyll (beyond chlorophyll a) count as accessory pigments — chlorophyll b included, which is the practical consequence of the claim in the previous node that only chlorophyll a transforms energy.", cn: "其他类型的叶绿素（叶绿素a之外的）都算作辅助色素——包括叶绿素b，这正是上一节点「只有叶绿素a转换能量」这一论断的实际后果。" },
    { cz: "fykobiliny u sinic a ruduch", en: "In cyanobacteria (sinice) and red algae (ruduchy) the accessory pigments include biliproteins, i.e. phycobilins, which extend the photosynthetically effective radiation into the blue and the red regions. Obr. 9.4 shows phycoerythrin and phycocyanin as the two curves occupying the 500-650 nm middle ground.", cn: "在蓝细菌与红藻中，辅助色素包括胆蛋白（即藻胆素），它把光合有效辐射拓展至蓝光与红光区。图9.4中藻红蛋白与藻蓝蛋白正是占据500–650 nm中段的那两条曲线。" },
    { cz: "karotenoidy — žlutozelená oblast", en: "Carotenoids supplement the radiation in the yellow-green part of the spectrum (Obr. 9.2 bottom, Obr. 9.4) — the region where both chlorophylls absorb weakest.", cn: "类胡萝卜素补充光谱中黄绿部分的辐射（图9.2下方、图9.4）——这正是两种叶绿素吸收最弱的区域。" },
    { cz: "Obr. 9.4 — pokrytí celého viditelného spektra", en: "Obr. 9.4 overlays chlorofyl a, chlorofyl b, karotenoidy, fykoerythrin and fykocyanin against the envelope of the solar spectrum over 400-700 nm, and its caption states the conclusion directly: these pigments cover practically the whole spectrum of solar radiation in the visible region.", cn: "图9.4把叶绿素a、叶绿素b、类胡萝卜素、藻红蛋白与藻蓝蛋白的曲线叠加在400–700 nm的太阳光谱包络之上，其图注直接给出结论：这些色素几乎覆盖了可见区太阳辐射的整个光谱。" }
  ],
  terms: [
    { cz: "akcesorický pigment", en: "accessory pigment", cn: "辅助色素", def_en: "Any thylakoid pigment other than the reaction-centre chlorophyll a; captures light quanta and passes the excitation energy to chlorophyll a, broadening the photosynthetically effective spectrum. Also called auxiliary or supplementary.", def_cn: "反应中心叶绿素a以外的任何类囊体色素；捕获光量子并把激发能传给叶绿素a，从而拓宽光合有效光谱。亦称辅助色素或补充色素。" },
    { cz: "fykoerythrin", en: "phycoerythrin", cn: "藻红蛋白", def_en: "A biliprotein accessory pigment of cyanobacteria and red algae; one of the two phycobilin curves in Obr. 9.4, absorbing in the middle of the visible range where chlorophyll does not.", def_cn: "蓝细菌与红藻的一种胆蛋白辅助色素；图9.4中两条藻胆素曲线之一，在叶绿素不吸收的可见光中段有吸收。" },
    { cz: "fykocyanin", en: "phycocyanin", cn: "藻蓝蛋白", def_en: "The other biliprotein accessory pigment shown in Obr. 9.4, absorbing towards the longer-wavelength side of phycoerythrin.", def_cn: "图9.4中所示的另一种胆蛋白辅助色素，其吸收位于藻红蛋白的长波一侧。" },
    { cz: "sinice / ruduchy", en: "cyanobacteria / red algae", cn: "蓝细菌／红藻", def_en: "The two groups named by the book as carrying biliprotein (phycobilin) accessory pigments.", def_cn: "教材点名的两类携带胆蛋白（藻胆素）辅助色素的生物类群。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the functional role of the accessory pigments?",
      q_cn: "辅助色素的功能作用是什么？",
      options: [
        "They perform the primary photochemical act in parallel with chlorophyll a, doubling the yield",
        "They capture light quanta and transfer the excitation energy to chlorophyll a in the reaction centre, broadening the effective spectrum",
        "They protect chlorophyll a from photooxidation and take no part in energy capture",
        "They anchor chlorophyll a in the thylakoid membrane"
      ],
      answer: 1,
      why_en: "The book is explicit that they have ONLY an auxiliary function: capture quanta, pass the excitation energy on to reaction-centre chlorophyll a. They complement and broaden the spectrum of photosynthetically effective radiation; they never perform the primary photochemical act themselves.",
      why_cn: "教材明确指出它们**只有**辅助功能：捕获量子，把激发能传给反应中心的叶绿素a。它们补充并拓宽光合有效辐射的光谱；自身从不执行初级光化学作用。"
    },
    {
      type: "short",
      q_en: "Which accessory pigments fill the middle (roughly 500–600 nm) of the visible spectrum, where the chlorophylls absorb poorly?",
      q_cn: "哪些辅助色素填补了可见光谱中段（约500–600 nm）——即叶绿素吸收较差的区域？",
      accept: ["carotenoid", "phycoerythrin", "phycocyanin", "phycobilin", "biliprotein"],
      answer_en: "The carotenoids (supplementing the yellow-green part) and, in cyanobacteria and red algae, the biliproteins/phycobilins — phycoerythrin and phycocyanin in Obr. 9.4.",
      answer_cn: "类胡萝卜素（补充黄绿部分），以及在蓝细菌与红藻中的胆蛋白/藻胆素——图9.4中的藻红蛋白与藻蓝蛋白。"
    }
  ],
  oral: {
    q_en: "Why does a photosynthetic organism need pigments other than chlorophyll a?",
    q_cn: "光合生物为何需要叶绿素a以外的色素？",
    model_en: "Because chlorophyll a alone would waste most of the sunlight that reaches it. Its useful absorption is a narrow red band around six hundred and forty to seven hundred nanometres, and it has essentially nothing in the middle of the visible range — which is exactly where solar output peaks. So the organism surrounds it with accessory pigments, sometimes called auxiliary or supplementary. These have only one job: absorb a photon and pass the excitation energy on to chlorophyll a in the reaction centre. They never do the photochemistry themselves. The membership varies by organism. Other chlorophylls, chlorophyll b included, count as accessory. Cyanobacteria and red algae add the biliproteins, the phycobilins — phycoerythrin and phycocyanin — which push the effective range into the blue and the red. And carotenoids fill in the yellow-green. Figure 9.4 is the argument in one picture: it lays the absorption curves of all of them over the envelope of the solar spectrum, and between them they cover practically the whole visible range. Each pigment has holes; the ensemble has almost none.",
    checklist: [
      "Stated that accessory pigments capture quanta and pass energy to reaction-centre chlorophyll a only",
      "Gave all three of the book's names: auxiliary, accessory, supplementary",
      "Explained the purpose as complementing and broadening the photosynthetically effective spectrum",
      "Named the members: other chlorophylls; biliproteins/phycobilins in cyanobacteria and red algae; carotenoids",
      "Gave carotenoids the yellow-green region and phycobilins the blue/red extension",
      "Cited Obr. 9.4's conclusion that together they cover practically the whole visible solar spectrum"
    ]
  }
},

{
  id: "9-9",
  book: "cz",
  topicKey: "photochemical-reaction-centers",
  chapter: 9,
  section: "9.1.2",
  czTitle: "Další složky thylakoidních membrán",
  enTitle: "Other components of the thylakoid membranes",
  cnTitle: "类囊体膜的其他组分",
  pages: [206],
  coverage: "full",
  coverageNote: "Section 9.1.2 on p.206 read in full. All three named glycolipids were read letter by letter from the scan (monogalaktosyldiacylglycerol, digalaktosyldiacylglycerol, sulfochinovosyldiacylglycerol), as were all five carrier classes shared with the inner mitochondrial membrane and every one of the plastocyanin parameters (Mr = 1 to 2 x 10^4, broad absorption maximum around 597 nm, E0' at pH 7 = 370 mV, contains Cu2+, blue-coloured). The section is short and this node covers it completely.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The thylakoid membrane reuses almost the entire respiratory-chain toolkit — quinones, cytochromes, Fe-S proteins, flavoproteins — so most of chapter 6 carries straight over. Exactly two components are genuinely new: plastocyanin, a blue copper protein with no mitochondrial counterpart, and the water-splitting OEC, which carries no pigment at all.", cn: "类囊体膜几乎把呼吸链的整套工具原样搬了过来——醌类、细胞色素、Fe-S 蛋白、黄素蛋白——所以第 6 章的内容大部分可以直接沿用。真正新增的只有两样：质体蓝素 (plastocyanin)，一种线粒体里根本没有对应物的蓝色含铜蛋白；以及负责裂解水的 OEC，而它本身完全不带色素。" },
  summary: {
    en: "Structurally the thylakoid membrane is like other biological membranes (kap. 8), and structurally AND functionally its closest relative is the inner mitochondrial membrane, the seat of the respiratory chain. The book then lists what makes it different. In lipid composition, thylakoid membranes contain FEWER phospholipids but additionally carry glycolipids: monogalactosyldiacylglycerol, digalactosyldiacylglycerol and sulfoquinovosyldiacylglycerol. In electron and proton transport, the carriers operating in the thylakoid membrane are analogous to those in the inner mitochondrial membrane (kap. 6.2.4): quinones, cytochromes, Fe-S proteins, flavoproteins, and NADP in its oxidized or reduced form. Beyond that shared kit, organisms with oxygenic photosynthesis have two things the mitochondrion does not. First, plastocyanin: a protein of Mr 1 to 2 × 10⁴, with a broad absorption maximum around 597 nm and E°′ (pH 7) = 370 mV, containing Cu²⁺ and blue-coloured. Second, a specific set of NON-pigmented proteins responsible for the oxygen-evolving reactions — the OEC, Oxygen Evolving Complex, shown in Obr. 9.5 as part of PS II. The section is short but it is the structural bridge between chapter 6 and chapter 9: almost the entire electron-transport toolkit is reused, and only the water-splitting end and the copper carrier are genuinely new.",
    cn: "就结构而言，类囊体膜与其他生物膜相似（第8章），而在**结构与功能**两方面与之最接近的是线粒体内膜——呼吸链的所在。随后教材列出其差异所在。在脂类组成上，类囊体膜含有**较少**的磷脂，但额外携带糖脂：单半乳糖基二酰基甘油、双半乳糖基二酰基甘油和硫代异鼠李糖基二酰基甘油。在电子与质子传递方面，类囊体膜中运行的载体与线粒体内膜中的相类似（第6.2.4节）：醌类、细胞色素、Fe-S蛋白、黄素蛋白，以及处于氧化或还原态的NADP。除这套共用工具之外，产氧光合生物还拥有线粒体所没有的两样东西。其一是质体蓝素：一种Mr为1至2×10⁴的蛋白，宽吸收峰在597 nm附近，E°′（pH 7）= 370 mV，含Cu²⁺，呈蓝色。其二是一组专门的**非**色素蛋白，负责放氧反应——即图9.5中作为PSII一部分标出的OEC（放氧复合体）。本节篇幅虽短，却是第6章与第9章之间的结构桥梁：几乎整套电子传递工具都被重复利用，真正新增的只有水裂解那一端和这个铜载体。"
  },
  points: [
    { cz: "nejbližší analog: vnitřní mitochondriální membrána", en: "The structure of thylakoid membranes is similar to other biological membranes (kap. 8), but structurally AND functionally the closest is the inner mitochondrial membrane, the seat of the respiratory chain.", cn: "类囊体膜的结构与其他生物膜相似（第8章），但在结构**与**功能两方面最接近的是线粒体内膜——呼吸链的所在。" },
    { cz: "méně fosfolipidů, navíc glykolipidy", en: "Thylakoid membranes contain FEWER phospholipids, but in addition carry glycolipids: monogalactosyldiacylglycerol, digalactosyldiacylglycerol and sulfoquinovosyldiacylglycerol (kap. 8).", cn: "类囊体膜含**较少**的磷脂，但额外携带糖脂：单半乳糖基二酰基甘油、双半乳糖基二酰基甘油和硫代异鼠李糖基二酰基甘油（第8章）。" },
    { cz: "stejné přenašeče jako v dýchacím řetězci", en: "For electron and proton transport, carriers analogous to those of the inner mitochondrial membrane operate in the thylakoid membrane (kap. 6.2.4): quinones, cytochromes, Fe-S proteins, flavoproteins, and NADP in oxidized or reduced form.", cn: "在电子与质子传递方面，类囊体膜中运行着与线粒体内膜相类似的载体（第6.2.4节）：醌类、细胞色素、Fe-S蛋白、黄素蛋白，以及氧化态或还原态的NADP。" },
    { cz: "plastocyanin — Cu²⁺, 597 nm, 370 mV", en: "Organisms with oxygenic photosynthesis additionally have plastocyanin: a protein of Mr = 1 to 2 × 10⁴, with a broad absorption maximum around 597 nm, E°′ (pH 7) = 370 mV, containing Cu²⁺ and blue-coloured. It has no counterpart in the mitochondrial chain.", cn: "产氧光合生物还额外拥有质体蓝素：Mr为1至2×10⁴的蛋白，宽吸收峰约在597 nm，E°′（pH 7）= 370 mV，含Cu²⁺，呈蓝色。它在线粒体电子传递链中没有对应物。" },
    { cz: "OEC — nepigmentované proteiny", en: "They also have a specific set of NON-pigmented proteins responsible for the oxygen-evolving reactions — the OEC (Oxygen Evolving Complex), shown in Obr. 9.5 as belonging to PS II. 'Non-pigmented' is worth noting: the water-splitting machinery itself carries no chlorophyll.", cn: "它们还拥有一组专门的**非**色素蛋白，负责放氧反应——即图9.5中标为属于PSII的OEC（放氧复合体）。「非色素」值得留意：水裂解机构本身不携带叶绿素。" }
  ],
  terms: [
    { cz: "plastocyanin", en: "plastocyanin", cn: "质体蓝素", def_en: "A blue copper protein of the thylakoid membrane; Mr 1–2 × 10⁴, broad absorption maximum ~597 nm, E°′ (pH 7) = 370 mV. Carries electrons from the cytochrome b₆f complex to PS I (Obr. 9.5).", def_cn: "类囊体膜中的一种蓝色铜蛋白；Mr为1–2×10⁴，宽吸收峰约597 nm，E°′（pH 7）= 370 mV。把电子从细胞色素b₆f复合体传给PSI（图9.5）。" },
    { cz: "OEC (Oxygen Evolving Complex)", en: "OEC (oxygen-evolving complex)", cn: "OEC（放氧复合体）", def_en: "The specific set of non-pigmented proteins in PS II responsible for the oxygen-evolving reactions, i.e. the photolysis of water.", def_cn: "PSII中负责放氧反应（即水的光解）的一组专门的非色素蛋白。" },
    { cz: "monogalaktosyldiacylglycerol", en: "monogalactosyldiacylglycerol", cn: "单半乳糖基二酰基甘油", def_en: "One of the three glycolipids that distinguish the thylakoid membrane's lipid composition from that of other biological membranes.", def_cn: "使类囊体膜的脂类组成区别于其他生物膜的三种糖脂之一。" },
    { cz: "sulfochinovosyldiacylglycerol", en: "sulfoquinovosyldiacylglycerol", cn: "硫代异鼠李糖基二酰基甘油", def_en: "The sulfur-containing member of the thylakoid glycolipid trio.", def_cn: "类囊体三种糖脂中含硫的那一种。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which component of thylakoid electron transport has NO counterpart in the inner mitochondrial membrane?",
      q_cn: "类囊体电子传递中的哪个组分在线粒体内膜中**没有**对应物？",
      options: [
        "Cytochromes",
        "Fe-S proteins",
        "Quinones",
        "Plastocyanin, a blue Cu²⁺ protein"
      ],
      answer: 3,
      why_en: "Quinones, cytochromes, Fe-S proteins and flavoproteins are explicitly described as analogous to those of the inner mitochondrial membrane (kap. 6.2.4). Plastocyanin is listed as something organisms with oxygenic photosynthesis have IN ADDITION — a copper protein with a broad maximum near 597 nm and E°′ = 370 mV.",
      why_cn: "醌类、细胞色素、Fe-S蛋白和黄素蛋白都被明确描述为与线粒体内膜中的相类似（第6.2.4节）。质体蓝素则被列为产氧光合生物**额外**拥有的东西——一种铜蛋白，宽吸收峰近597 nm，E°′ = 370 mV。"
    },
    {
      type: "short",
      q_en: "How does the lipid composition of the thylakoid membrane differ from that of other biological membranes?",
      q_cn: "类囊体膜的脂类组成与其他生物膜有何不同？",
      accept: ["fewer phospholipid", "less phospholipid", "glycolipid", "galactosyl", "sulfoquinovosyl"],
      answer_en: "It contains fewer phospholipids, and in addition contains glycolipids: monogalactosyldiacylglycerol, digalactosyldiacylglycerol and sulfoquinovosyldiacylglycerol.",
      answer_cn: "它含较少的磷脂，并额外含有糖脂：单半乳糖基二酰基甘油、双半乳糖基二酰基甘油和硫代异鼠李糖基二酰基甘油。"
    }
  ],
  oral: {
    q_en: "Compare the thylakoid membrane with the inner mitochondrial membrane.",
    q_cn: "请比较类囊体膜与线粒体内膜。",
    model_en: "The textbook treats them as close relatives, and that comparison is the fastest way into chapter nine if you already know chapter six. Structurally and functionally the inner mitochondrial membrane is the nearest thing to a thylakoid membrane in the cell — it is, after all, the other place where an electron transport chain is coupled to a proton gradient and an ATP synthase. The electron carriers are largely the same cast: quinones, cytochromes, iron-sulfur proteins, flavoproteins, and a nicotinamide nucleotide, though here it is NADP rather than NAD. The differences are three. In lipids, the thylakoid has fewer phospholipids and adds a set of glycolipids — mono- and digalactosyldiacylglycerol and sulfoquinovosyldiacylglycerol. In carriers, it has plastocyanin, a blue copper protein with a broad absorption maximum near five hundred and ninety-seven nanometres and a standard potential of three hundred and seventy millivolts, which has no mitochondrial counterpart. And at the input end it has the oxygen-evolving complex, a set of specifically non-pigmented proteins that split water — the one piece of chemistry a mitochondrion never does. Later the book adds a fourth difference, that the whole membrane is oriented the other way round.",
    checklist: [
      "Named the inner mitochondrial membrane as the closest structural and functional analogue",
      "Listed the shared carriers: quinones, cytochromes, Fe-S proteins, flavoproteins, NADP",
      "Gave the lipid difference: fewer phospholipids, plus three named glycolipids",
      "Described plastocyanin with at least two of its parameters (Cu²⁺, ~597 nm, 370 mV, Mr 1–2 × 10⁴)",
      "Named the OEC as a set of NON-pigmented proteins doing the oxygen evolution",
      "Optionally noted the reversed membrane orientation developed later in §9.1.3"
    ]
  }
},

{
  id: "9-10",
  book: "cz",
  topicKey: "photochemical-reaction-centers",
  chapter: 9,
  section: "9.1.3",
  czTitle: "Reakční centrum a legenda k obr. 9.5",
  enTitle: "The reaction centre, and the legend to Obr. 9.5",
  cnTitle: "反应中心与图9.5的图注",
  pages: [206, 207],
  coverage: "full",
  coverageNote: "The opening of section 9.1.3 at the foot of p.206 and the whole caption/legend of Obr. 9.5 on p.207 read in full. Every abbreviation defined in the legend was read off the scan and is reproduced here (PS II, PS I, cytochrome b6f, CF0/CF1, cyt, P680, P700, OEC, Pheo, QA/QB/Q/QH2, FeS, PC, A1/A0, Fd). The figure itself was read for its layout: 2 H2O and 4H+ + O2 at the lumen side of PS II, 8H+ moved by the cytochrome b6f complex, 2H+ + 2NADP+ -> 2NADPH at the stroma side of PS I via Fd and Fd-NADP+ reductase, and ADP + Pi -> ATP at the CF1 head with 3H+ passing, plus the inset Z-scheme box plotting deltaE/deltaG with H2O, PS II, PS I and NADP+.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Bacteria manage with one photosystem; oxygenic photosynthesis needs two, and that one structural fact is why the scheme is drawn as a Z instead of a single step — no single photon can lift an electron all the way from water up to NADP⁺. Worth keeping alongside it: pheophytin is simply chlorophyll with the Mg taken out.", cn: "细菌一个光系统就够了；产氧光合作用需要两个，而正是这一条结构事实决定了整张图要画成一个 Z 而不是一步到位——没有哪一个光子能把电子从水一路抬到 NADP⁺。顺带一起记住：脱镁叶绿素 (pheophytin) 就是把 Mg 拿掉的叶绿素。" },
  summary: {
    en: "Section 9.1.3 announces where the biochemical account of photosynthesis begins: in the REACTION CENTRE (abbreviated RC) of the photosystem (Obr. 9.5). It immediately gives the structural difference between the two kinds of photosynthesis — photosynthesizing bacteria work with ONE photosystem, whereas the oxygenic type contains TWO photosystems and therefore two reaction centres. Obr. 9.5 is the master diagram of the chapter and its legend defines the whole vocabulary: PS II and PS I are photosystems II and I; PS II, cytochrome b₆f, PS I and CF₀ are integral pigment-protein complexes of the thylakoid membranes; cyt = cytochromes; P₆₈₀ and P₇₀₀ are the pigments of the reaction centres of PS II and PS I respectively; OEC is the oxygen-evolving complex; Pheo is pheophytin, defined by the book as chlorophyll without the Mg ion; Q_A, Q_B and Q/QH₂ are oxidized/reduced molecules of plastoquinone; FeS is a protein with non-haem-bound Fe atoms; PC is plastocyanin; A₁ and A₀ are electron acceptors in PS I; Fd is ferredoxin; CF₀ and CF₁ together are the ATP-synthase. Read as a picture, the figure shows water being split at the lumen face of PS II releasing 4H⁺ + O₂, protons being pumped across by the cytochrome b₆f complex, NADP⁺ being reduced to NADPH on the stroma face beyond PS I via ferredoxin and Fd-NADP⁺ reductase, and ATP being made at the CF₁ head as protons return.",
    cn: "§9.1.3宣告光合作用的生化叙述从何处开始：从光系统的**反应中心**（缩写RC）开始（图9.5）。它随即给出两类光合作用的结构差异——光合细菌只用**一个**光系统，而产氧型含有**两个**光系统、因而有两个反应中心。图9.5是全章的主图，其图注定义了整套词汇：PSII与PSI是光系统II与I；PSII、细胞色素b₆f、PSI与CF₀是类囊体膜的整合型色素蛋白复合体；cyt=细胞色素；P₆₈₀与P₇₀₀分别是PSII与PSI反应中心的色素；OEC是放氧复合体；Pheo是去镁叶绿素，教材定义为「不含Mg离子的叶绿素」；Q_A、Q_B与Q/QH₂是质体醌的氧化/还原态分子；FeS是含非血红素结合铁原子的蛋白；PC是质体蓝素；A₁与A₀是PSI中的电子受体；Fd是铁氧还蛋白；CF₀与CF₁合起来是ATP合酶。作为一幅图来读，它显示：水在PSII的腔侧被裂解、释放4H⁺+O₂；质子由细胞色素b₆f复合体泵过膜；在PSI之外的基质面上，经铁氧还蛋白与Fd-NADP⁺还原酶把NADP⁺还原为NADPH；质子回流时在CF₁头部生成ATP。"
  },
  points: [
    { cz: "výklad začíná v RC", en: "The biochemical account of photosynthesis begins in the reaction centre (RC) of the photosystem (Obr. 9.5). Everything before this point in the chapter was structure and optics; from here it is chemistry.", cn: "光合作用的生化叙述从光系统的反应中心（RC）开始（图9.5）。本章此前的内容是结构与光学；自此起是化学。" },
    { cz: "bakterie 1 fotosystém, oxygenní typ 2", en: "Photosynthesizing bacteria work with ONE photosystem; the oxygenic type of photosynthesis contains TWO photosystems and therefore two reaction centres. This is the structural reason the oxygenic scheme is drawn as a Z rather than a single step (see 9-13).", cn: "光合细菌只用**一个**光系统；产氧型光合作用含**两个**光系统、因而有两个反应中心。这正是产氧方案被画成Z形而非单一台阶的结构原因（见9-13）。" },
    { cz: "integrální pigmentoproteinové komplexy", en: "PS II, cytochrome b₆f, PS I and CF₀ are all integral pigment-protein complexes of the thylakoid membrane — i.e. they span the bilayer rather than sitting on its surface.", cn: "PSII、细胞色素b₆f、PSI与CF₀都是类囊体膜的整合型色素蛋白复合体——即它们跨越双层膜，而非附着于其表面。" },
    { cz: "P₆₈₀ a P₇₀₀", en: "P₆₈₀ and P₇₀₀ are the pigments of the reaction centres of PS II and PS I respectively; the subscript is the wavelength of their absorption maximum (see 9-11 for why RC pigments are named this way).", cn: "P₆₈₀与P₇₀₀分别是PSII与PSI反应中心的色素；下标是其吸收最大值的波长（关于反应中心色素为何这样命名，见9-11）。" },
    { cz: "Pheo = feofytin = chlorofyl bez Mg", en: "Pheo is pheophytin, which the book defines precisely as chlorophyll WITHOUT the Mg ion. It sits immediately after P₆₈₀ on the PS II acceptor side.", cn: "Pheo是去镁叶绿素，教材精确定义为「**不含**Mg离子的叶绿素」。它在PSII受体侧紧接P₆₈₀之后。" },
    { cz: "Q_A, Q_B, Q/QH₂ — plastochinon", en: "Q_A, Q_B and Q/QH₂ denote oxidized and reduced molecules of plastoquinone — the mobile hydrophobic carrier that will turn out (see 9-14) to be what physically moves protons across the membrane.", cn: "Q_A、Q_B与Q/QH₂表示质体醌的氧化态与还原态分子——这种可移动的疏水载体正是（见9-14）在物理上把质子搬过膜的东西。" },
    { cz: "FeS, PC, A₀/A₁, Fd, CF₀/CF₁", en: "FeS is a protein with non-haem-bound Fe atoms; PC is plastocyanin; A₁ and A₀ are the electron acceptors within PS I; Fd is ferredoxin; and CF₀ together with CF₁ constitutes the ATP-synthase, drawn in Obr. 9.5 with its CF₁ knob protruding into the stroma.", cn: "FeS是含非血红素结合铁原子的蛋白；PC是质体蓝素；A₁与A₀是PSI内的电子受体；Fd是铁氧还蛋白；CF₀与CF₁共同构成ATP合酶，在图9.5中其CF₁头部朝基质凸出。" },
    { cz: "co obrázek ukazuje jako děj", en: "Read as a process, Obr. 9.5 shows: 2 H₂O split at the lumen face of PS II giving 4H⁺ + O₂; 8H⁺ moved by the cytochrome b₆f complex; 2H⁺ + 2NADP⁺ → 2NADPH on the stroma face past PS I via Fd and Fd-NADP⁺ reductase; and ADP + Pᵢ → ATP at the CF₁ head as 3H⁺ pass back through.", cn: "作为一个过程来读，图9.5显示：2 H₂O在PSII的腔侧被裂解，生成4H⁺+O₂；8H⁺由细胞色素b₆f复合体搬运；在PSI之外的基质面上经Fd与Fd-NADP⁺还原酶完成2H⁺+2NADP⁺→2NADPH；以及3H⁺回流通过时在CF₁头部完成ADP+Pᵢ→ATP。" }
  ],
  terms: [
    { cz: "reakční centrum (RC)", en: "reaction centre (RC)", cn: "反应中心（RC）", def_en: "The site within a photosystem containing the special chlorophyll molecules (P) that undergo photooxidation; where the biochemical account of photosynthesis begins.", def_cn: "光系统内含有可发生光氧化的特殊叶绿素分子(P)的部位；光合作用生化叙述的起点。" },
    { cz: "fotosystém I / II", en: "photosystem I / II", cn: "光系统I／II", def_en: "The two pigment-protein complexes of oxygenic photosynthesis. PS II photooxidizes water and reduces plastoquinone; PS I reduces NADP⁺ and participates in cyclic electron flow.", def_cn: "产氧光合作用的两个色素蛋白复合体。PSII光氧化水并还原质体醌；PSI还原NADP⁺并参与循环电子流。" },
    { cz: "feofytin (Pheo)", en: "pheophytin (Pheo)", cn: "去镁叶绿素", def_en: "Chlorophyll without its Mg ion; the early electron acceptor on the PS II side in Obr. 9.5.", def_cn: "失去Mg离子的叶绿素；图9.5中PSII一侧的早期电子受体。" },
    { cz: "plastochinon", en: "plastoquinone", cn: "质体醌", def_en: "The mobile hydrophobic quinone carrier of the thylakoid membrane, shown as Q_A, Q_B and Q/QH₂; it is the species that physically carries protons across the membrane.", def_cn: "类囊体膜中可移动的疏水醌类载体，图中标为Q_A、Q_B与Q/QH₂；正是它在物理上把质子搬过膜。" },
    { cz: "ferredoxin (Fd)", en: "ferredoxin (Fd)", cn: "铁氧还蛋白", def_en: "The Fe-S electron carrier accepting electrons from PS I; feeds Fd-NADP⁺ reductase to make NADPH, and also feeds the cyclic electron flow back to the plastoquinones.", def_cn: "从PSI接受电子的Fe-S电子载体；供给Fd-NADP⁺还原酶生成NADPH，也把电子送回质体醌形成循环电子流。" },
    { cz: "CF₀ / CF₁", en: "CF₀ / CF₁", cn: "CF₀／CF₁", def_en: "The membrane-embedded and knob portions of the chloroplast ATP-synthase; the CF₁ knob protrudes into the stroma (the reverse of the mitochondrial arrangement).", def_cn: "叶绿体ATP合酶的膜内部分与头部；CF₁头部朝基质凸出（与线粒体的安排相反）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What does the book define 'pheophytin' (Pheo) as?",
      q_cn: "教材把「去镁叶绿素」(Pheo)定义为什么？",
      options: [
        "Chlorophyll without its phytol tail",
        "Chlorophyll without the Mg ion",
        "A plastoquinone in its reduced form",
        "A protein with non-haem-bound Fe atoms"
      ],
      answer: 1,
      why_en: "The legend to Obr. 9.5 defines Pheo as 'feofytin (chlorofyl bez iontu Mg)' — chlorophyll without the Mg ion. Losing the phytol tail would give chlorophyllide, not pheophytin; the Fe-containing protein is FeS.",
      why_cn: "图9.5的图注把Pheo定义为「feofytin（不含Mg离子的叶绿素）」。失去植醇尾得到的是脱植基叶绿素，而非去镁叶绿素；含铁的蛋白是FeS。"
    },
    {
      type: "short",
      q_en: "How many photosystems does a photosynthesizing bacterium have, and how many does an organism with oxygenic photosynthesis have?",
      q_cn: "光合细菌有几个光系统？产氧光合生物又有几个？",
      accept: ["one", "1", "two", "2"],
      answer_en: "Photosynthesizing bacteria work with one photosystem; the oxygenic type contains two photosystems and therefore two reaction centres.",
      answer_cn: "光合细菌用一个光系统；产氧型含两个光系统，因而有两个反应中心。"
    }
  ],
  oral: {
    q_en: "Walk through Obr. 9.5 — the thylakoid membrane, its complexes, and what happens where.",
    q_cn: "请讲解图9.5——类囊体膜、其中的复合体，以及各处发生了什么。",
    model_en: "The figure shows a stretch of thylakoid membrane with four integral pigment-protein complexes embedded in it, left to right: photosystem two, the cytochrome b-six-f complex, photosystem one, and the ATP synthase, whose membrane part is CF-zero and whose knob is CF-one. Start at photosystem two. On the lumen side sits the oxygen-evolving complex, and there two waters are split, releasing four protons into the lumen and one molecule of oxygen. The electrons go up through the reaction-centre pigment P-six-eighty, then to pheophytin — which the book defines as chlorophyll minus its magnesium — then onto the plastoquinones, Q-A and Q-B. Reduced plastoquinone carries both the electrons and protons across to the cytochrome b-six-f complex, which moves eight protons into the lumen. From there plastocyanin, a small blue copper protein, ferries the electrons to photosystem one and its pigment P-seven-hundred. A second photon lifts them again, through acceptors A-zero and A-one and an iron-sulfur centre, to ferredoxin, and Fd-NADP-plus reductase uses them to make NADPH on the stroma side. Meanwhile the protons that accumulated in the lumen flow back out through CF-zero, and the CF-one knob, which faces the stroma, makes ATP from ADP and phosphate. The inset box is the Z-scheme, plotting the same journey against redox potential or free energy.",
    checklist: [
      "Named all four integral complexes: PS II, cytochrome b₆f, PS I, ATP synthase (CF₀/CF₁)",
      "Placed water splitting and the OEC at the lumen face of PS II, giving 4H⁺ + O₂",
      "Traced P₆₈₀ → pheophytin → plastoquinone and defined Pheo as chlorophyll without Mg",
      "Gave plastocyanin as the carrier from cytochrome b₆f to PS I",
      "Traced PS I → A₀/A₁ → FeS → ferredoxin → Fd-NADP⁺ reductase → NADPH on the stroma side",
      "Placed ATP synthesis at the CF₁ knob on the stroma side as protons return",
      "Identified the inset as the Z-scheme against ΔE or ΔG"
    ]
  }
},

{
  id: "9-11",
  book: "cz",
  topicKey: "photochemical-reaction-centers",
  chapter: 9,
  section: "9.1.3",
  czTitle: "Primární fotochemický děj a světlosběrné antény",
  enTitle: "The primary photochemical act and the light-harvesting antennae",
  cnTitle: "初级光化学作用与捕光天线",
  pages: [207],
  coverage: "full",
  coverageNote: "The lower half of p.207 read in full: both equations (P -> P* under hv, and P* + A1 -> P+ + A1-), the quantum-yield argument, the naming convention for RC pigments by absorption maximum with all three examples (P870 in bacteria, P680 and P700 in oxygenic photosynthesis), and the antenna ratio. The ratio was read directly from the scan as 'Chl celkový : Chl v RC = cca 200' -- i.e. total chlorophyll to reaction-centre chlorophyll is about 200 to 1 -- and is reproduced in that form rather than paraphrased, because the number is easy to invert by mistake.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "About 199 of every 200 chlorophyll molecules never do any chemistry at all — they only catch photons and pass the energy inward — and the one molecule that finally gives up an electron is chemically identical to them, made special purely by the protein pocket it sits in. The one genuinely light-driven step in the whole of photosynthesis is P → P*; everything after it is ordinary redox chemistry that would run in the dark.", cn: "每 200 个叶绿素分子里大约有 199 个从来不做任何化学反应——它们只负责捕捉光子、把能量往里传——而最后真正交出电子的那一个，化学上跟它们一模一样，特殊之处完全来自它所处的那个蛋白口袋。整个光合作用中真正由光驱动的步骤只有 P → P* 这一步；它之后的一切都是在黑暗中照样能进行的普通氧化还原反应。" },
  summary: {
    en: "The reaction centre contains several chlorophyll molecules, collectively written P, bound to protein; after receiving photons from the accompanying light-harvesting pigments they become excited to P*. The book stresses that this reaction alone — P →(hv) P* — is, strictly speaking, the light-dependent one. On de-excitation, the excited reaction-centre chlorophyll gives an electron to the primary acceptor A₁: P* + A₁ → P⁺ + A₁⁻. The high quantum yield of this reaction in an intact photosynthetic system means that this route of de-excitation is strongly preferred in the RC over the alternatives, such as fluorescence or conversion into heat — which is a functional statement, not a thermodynamic one: the alternatives are always available, they simply lose. Oxidation of P changes its absorption spectrum, and this is why the specific chlorophyll molecules of different reaction centres are designated by the wavelength of their absorption maximum: P₈₇₀ in bacteria, P₆₈₀ and P₇₀₀ in oxygenic photosynthesis. What makes these RC chlorophylls special is not a different chemical structure but their microenvironment inside the pigment-protein complex, which makes them capable of photooxidation, i.e. of giving up an electron. All the other chlorophyll molecules — and they are the overwhelming majority, the ratio of total chlorophyll to chlorophyll in the RC being about 200 — serve as light-harvesting antenna systems: they are NOT oxidized, they only pass the absorbed energy on to the RC. In that energy transfer within the light-harvesting systems no charge separation occurs at all.",
    cn: "反应中心含有若干与蛋白结合的叶绿素分子，统称为P；在接受来自伴随的捕光色素的光子后，它们被激发为P*。教材强调，严格说来唯有这一反应——P →(hv) P*——才是依赖光的。去激发时，处于激发态的反应中心叶绿素把一个电子交给初级受体A₁：P* + A₁ → P⁺ + A₁⁻。该反应在完整光合系统中的高量子产额意味着，在反应中心内这条去激发途径远比其他途径（如荧光或转化为热）更受偏好——这是一个功能性陈述而非热力学陈述：其他途径始终存在，只是竞争不过它。P的氧化会改变其吸收光谱，这正是不同反应中心的特定叶绿素分子要以其吸收最大值的波长来命名的原因：细菌中的P₈₇₀，产氧光合作用中的P₆₈₀与P₇₀₀。这些反应中心叶绿素的特殊之处，并不在于化学结构不同，而在于它们在色素蛋白复合体内所处的**微环境**，正是微环境使它们具备发生光氧化（即交出一个电子）的能力。所有其他叶绿素分子——它们占压倒性多数，总叶绿素与反应中心叶绿素之比约为200——充当捕光天线系统：它们**不**被氧化，只把吸收到的能量传给反应中心。在捕光系统内部的这种能量传递中，完全不发生电荷分离。"
  },
  points: [
    { cz: "P → P* je jediný striktně světlem řízený krok", en: "The RC contains several protein-bound chlorophyll molecules (P) which, after receiving photons from the accompanying light-harvesting pigments, become excited (P*). The book states that ONLY this reaction is, strictly speaking, dependent on light: P →(hv) P*.", cn: "反应中心含有若干与蛋白结合的叶绿素分子(P)，在接受伴随捕光色素传来的光子后被激发(P*)。教材指出，严格说来**只有**这一反应依赖光：P →(hv) P*。" },
    { cz: "P* + A₁ → P⁺ + A₁⁻", en: "On de-excitation the excited RC chlorophyll hands an electron to the primary acceptor A₁: P* + A₁ → P⁺ + A₁⁻. This is the charge separation that all the preceding optics exists to produce.", cn: "去激发时，激发态的反应中心叶绿素把一个电子交给初级受体A₁：P* + A₁ → P⁺ + A₁⁻。这就是此前一切光学过程所要产生的电荷分离。" },
    { cz: "vysoký kvantový výtěžek", en: "The high quantum yield of this reaction in an intact photosynthetic system means that in the RC this route of de-excitation is highly preferred over the alternatives — fluorescence, or conversion into heat. Those routes still exist; they simply lose the competition.", cn: "该反应在完整光合系统中的高量子产额意味着，在反应中心内这条去激发途径远比其他途径——荧光或转化为热——更受偏好。那些途径依然存在，只是在竞争中落败。" },
    { cz: "P₈₇₀, P₆₈₀, P₇₀₀ — pojmenování podle maxima", en: "Oxidation of P changes its absorption spectrum, and RC chlorophylls are therefore designated by the wavelength of their absorption maximum: P₈₇₀ in bacteria, P₆₈₀ and P₇₀₀ in oxygenic photosynthesis.", cn: "P的氧化会改变其吸收光谱，因此反应中心叶绿素以其吸收最大值的波长命名：细菌中的P₈₇₀，产氧光合作用中的P₆₈₀与P₇₀₀。" },
    { cz: "zvláštnost RC chlorofylů = mikrookolí", en: "The peculiarity of RC chlorophyll molecules lies in the fact that thanks to their MICROENVIRONMENT in the pigment-protein complex they are capable of photooxidation, of giving up an electron. Chemically they are ordinary chlorophyll; it is the protein context that makes them special.", cn: "反应中心叶绿素分子的特殊之处在于：得益于它们在色素蛋白复合体中的**微环境**，它们具备发生光氧化、交出电子的能力。就化学而言它们只是普通的叶绿素；使其特殊的是蛋白质环境。" },
    { cz: "poměr Chl celkový : Chl v RC ≈ 200", en: "The other chlorophyll molecules — the overwhelming majority, since total chlorophyll : chlorophyll in the RC ≈ 200 — serve as light-harvesting antenna systems. They are NOT oxidized; they only transfer the absorbed energy into the RC.", cn: "其余的叶绿素分子——占压倒性多数，因为总叶绿素∶反应中心叶绿素≈200——充当捕光天线系统。它们**不**被氧化；只把吸收的能量传入反应中心。" },
    { cz: "v anténách nedochází k separaci náboje", en: "In the energy transfer within the light-harvesting systems there is NO charge separation at all; the book notes that physical rather than chemical methods of description apply to the transfer of energy between molecules of the light-harvesting complex towards the RC.", cn: "在捕光系统内部的能量传递中**完全不**发生电荷分离；教材指出，对捕光复合体分子之间朝向反应中心的能量传递，适用的是物理学而非化学的描述方法。" }
  ],
  terms: [
    { cz: "P*", en: "P* (excited reaction-centre pigment)", cn: "P*（激发态反应中心色素）", def_en: "The reaction-centre chlorophyll after absorbing/receiving photon energy; the only strictly light-dependent species in photosynthesis.", def_cn: "吸收/接受光子能量后的反应中心叶绿素；光合作用中唯一严格依赖光的物种。" },
    { cz: "kvantový výtěžek", en: "quantum yield", cn: "量子产额", def_en: "The fraction of excitations that lead to the desired outcome. Its high value in the intact RC shows that electron donation outcompetes fluorescence and heat loss.", def_cn: "导致目标结果的激发所占比例。其在完整反应中心中的高值表明电子给出胜过荧光与热损耗。" },
    { cz: "světlosběrná anténa", en: "light-harvesting antenna", cn: "捕光天线", def_en: "The ~200-fold excess of non-oxidized chlorophyll (plus accessory pigments) that absorbs photons and funnels the excitation energy to the reaction centre without any charge separation.", def_cn: "约200倍过量的、不被氧化的叶绿素（连同辅助色素），吸收光子并把激发能漏斗式汇聚到反应中心，其间不发生任何电荷分离。" },
    { cz: "fotooxidace", en: "photooxidation", cn: "光氧化", def_en: "Light-driven loss of an electron. Only the RC chlorophylls can do it, and only because of their microenvironment in the pigment-protein complex.", def_cn: "光驱动的失电子过程。只有反应中心叶绿素能做到，且仅仅因为它们在色素蛋白复合体中的微环境。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What makes the chlorophyll molecules of the reaction centre different from the ~200-fold excess of antenna chlorophylls?",
      q_cn: "反应中心的叶绿素分子与约200倍过量的天线叶绿素有何不同？",
      options: [
        "They have a chemically different porphyrin ring",
        "They absorb at a wavelength no antenna pigment can reach",
        "Their microenvironment in the pigment-protein complex makes them capable of photooxidation — of giving up an electron",
        "They lack the phytol tail and are therefore free in the stroma"
      ],
      answer: 2,
      why_en: "The book says the peculiarity lies in the microenvironment inside the pigment-protein complex, which makes them capable of photooxidation. Antenna chlorophylls are chemically the same molecule; they are simply never oxidized and only pass energy on.",
      why_cn: "教材指出其特殊之处在于色素蛋白复合体内部的微环境，正是它使这些分子具备光氧化能力。天线叶绿素在化学上是同一种分子；只是它们从不被氧化，仅传递能量。"
    },
    {
      type: "short",
      q_en: "Write the two equations describing the primary photochemical act, and state the approximate ratio of total chlorophyll to reaction-centre chlorophyll.",
      q_cn: "写出描述初级光化学作用的两个方程，并说明总叶绿素与反应中心叶绿素的近似比值。",
      accept: ["P*", "A1", "200", "hv"],
      answer_en: "P →(hv) P*, then P* + A₁ → P⁺ + A₁⁻. Total chlorophyll : chlorophyll in the RC ≈ 200.",
      answer_cn: "P →(hv) P*，随后 P* + A₁ → P⁺ + A₁⁻。总叶绿素∶反应中心叶绿素≈200。"
    }
  ],
  oral: {
    q_en: "What exactly is the primary photochemical act of photosynthesis, and why is only a tiny minority of the chlorophyll involved in it?",
    q_cn: "光合作用的初级光化学作用究竟是什么？为何只有极少数叶绿素参与其中？",
    model_en: "The primary act is two steps. First, the reaction-centre chlorophyll, written P, is raised to an excited state P-star — and this is the only step in the whole of photosynthesis that is strictly light-dependent. Second, on de-excitation, P-star hands an electron to the primary acceptor: P-star plus A-one gives P-plus plus A-one-minus. That is the charge separation everything else in the chapter is built on. An excited molecule could instead fluoresce, or dump the energy as heat; those routes still exist, but the quantum yield in an intact system tells us electron donation wins overwhelmingly. Now, why so few chlorophylls? Because the ability to be photooxidized is not a property of the chlorophyll molecule itself but of its microenvironment inside the pigment-protein complex. Chemically the antenna chlorophylls are the same molecule; they simply sit in a context that never lets them lose an electron, so they absorb photons and pass the excitation energy inward without any charge separation happening at all. The ratio is striking: total chlorophyll to reaction-centre chlorophyll is about two hundred to one. And because oxidizing P shifts its absorption spectrum, we can name each reaction-centre pigment by its maximum — P-eight-seventy in bacteria, P-six-eighty and P-seven-hundred in oxygenic photosynthesis.",
    checklist: [
      "Gave both equations: P →(hv) P* and P* + A₁ → P⁺ + A₁⁻",
      "Stated that only P → P* is strictly light-dependent",
      "Explained high quantum yield as electron donation outcompeting fluorescence and heat",
      "Attributed RC specialness to the MICROENVIRONMENT in the pigment-protein complex, not to a different structure",
      "Gave the ~200:1 total-to-RC chlorophyll ratio",
      "Stated that no charge separation occurs during antenna energy transfer",
      "Explained the P₈₇₀/P₆₈₀/P₇₀₀ naming from the absorption-maximum shift on oxidation"
    ]
  }
},

{
  id: "9-12",
  book: "cz",
  topicKey: "photochemical-reaction-centers",
  chapter: 9,
  section: "9.1.3",
  czTitle: "Fotosystém, orientovaná separace náboje, sekundární akceptory a donory",
  enTitle: "The photosystem, oriented charge separation, secondary acceptors and donors",
  cnTitle: "光系统、定向电荷分离、次级受体与供体",
  pages: [207, 208],
  coverage: "full",
  coverageNote: "The paragraph running from the foot of p.207 onto the top of p.208 and the two equations on p.208 read in full. The definition of a photosystem (RC + nearest acceptors and donors + binding proteins + light-harvesting pigments) is given in the book's own terms. Both stabilising equations were read as printed: A1- + A2 -> A1 + A2- and D2 + P+ -> D2+ + P, together with the parenthesis identifying pigment P in the RC as the PRIMARY electron donor, which is the point most easily lost when this material is summarised.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The reason a photosystem sits embedded across the membrane rather than floating in solution is that a charge separation in solution simply recombines and achieves nothing; being oriented is what turns light into a voltage across a membrane. Both the secondary acceptor and the secondary donor exist for one purpose — pull the two charges further apart, fast, before they can fall back together.", cn: "光系统之所以要横跨膜嵌在里面、而不是漂在溶液中，是因为溶液里的电荷分离转眼就复合，什么也留不下；正是这种定向排布，才把光变成了跨膜的电位差。次级受体和次级供体的存在都只为一个目的——趁两个电荷还没重新合到一起，赶快把它们拉得更远。" },
  summary: {
    en: "The reaction centre together with its associated nearest acceptors and donors of electrons, the corresponding binding proteins and the light-harvesting pigments is what is usually called a PHOTOSYSTEM (PS). Photosystems, and therefore the reaction centres too, are oriented — embedded and localised in the thylakoid membranes, penetrating the phospholipid bilayer as so-called integral proteins, or better said as pigment-protein complexes. Because of that orientation the primary photochemical reaction leads to a separation of charges that is ORIENTED ACROSS THE MEMBRANE, which is exactly what makes the process useful rather than merely a light-driven redox reaction in solution. The Gibbs energy of the separated charges is then stabilised in two directions. On the acceptor side, the electron moves from the primary acceptor to a secondary acceptor down the gradient of electrochemical potential (kap. 6.2.1): A₁⁻ + A₂ → A₁ + A₂⁻. On the donor side, the electron gap in the reaction-centre chlorophyll is filled by an electron from the preceding member of the electron transport chain, the so-called SECONDARY donor — the book adding in parenthesis that the PRIMARY electron donor is the pigment P in the RC itself: D₂ + P⁺ → D₂⁺ + P. Both moves have the same purpose: get the separated charges physically further apart, fast, before they can simply recombine. Into this set — A₁, A₂, D₂ and so on — one can then fit the whole sequence of electron transfer from the initial donor, the water molecules, up to the final acceptor, NADP⁺.",
    cn: "反应中心连同与之关联的最近的电子受体与供体、相应的结合蛋白以及捕光色素，合起来通常称为**光系统**(PS)。光系统——因而反应中心也一样——是**定向的**：它们嵌入并定位于类囊体膜中，作为所谓的整合蛋白（更确切地说是色素蛋白复合体）贯穿磷脂双层。正因这种取向，初级光化学反应导致的电荷分离是**跨膜定向的**，而这恰恰使该过程变得有用，而不只是溶液中一个光驱动的氧化还原反应。被分离电荷的吉布斯能随后从两个方向被稳定下来。在受体一侧，电子沿电化学势梯度从初级受体移向次级受体（第6.2.1节）：A₁⁻ + A₂ → A₁ + A₂⁻。在供体一侧，反应中心叶绿素上的电子空缺由电子传递链前一成员——所谓的**次级**供体——填补，教材在括号中补充说**初级**电子供体正是反应中心中的色素P本身：D₂ + P⁺ → D₂⁺ + P。两个动作目的相同：在被分离的电荷来得及简单复合之前，迅速把它们在物理上拉得更远。随后，从初始供体（水分子）直到最终受体NADP⁺的整个电子传递序列，都可以装进A₁、A₂、D₂等这一套记号之中。"
  },
  points: [
    { cz: "definice fotosystému", en: "A photosystem (PS) is the reaction centre together with its associated nearest electron acceptors and donors, the corresponding binding proteins, and the light-harvesting pigments — i.e. the RC plus everything immediately serving it.", cn: "光系统(PS)是反应中心连同与之关联的最近的电子受体与供体、相应的结合蛋白，以及捕光色素——即反应中心加上一切直接为其服务的组分。" },
    { cz: "integrální pigmentoproteinové komplexy, orientované", en: "Photosystems and their reaction centres are oriented, embedded and localised in the thylakoid membranes, penetrating the phospholipid bilayer as integral proteins — better said, as pigment-protein complexes.", cn: "光系统及其反应中心是定向的，嵌入并定位于类囊体膜中，作为整合蛋白——更确切地说是色素蛋白复合体——贯穿磷脂双层。" },
    { cz: "separace náboje napříč membránou", en: "Because of that orientation, the primary photochemical reaction leads to a separation of charges oriented ACROSS the membrane. This is the whole point: a charge separation in free solution would simply recombine and do nothing.", cn: "正因这种取向，初级光化学反应导致的电荷分离是**跨膜**定向的。这正是关键所在：自由溶液中的电荷分离只会复合，什么也做不成。" },
    { cz: "A₁⁻ + A₂ → A₁ + A₂⁻", en: "The Gibbs energy of the separated charges is stabilised by the electron moving from the primary acceptor onto a secondary acceptor, down the gradient of electrochemical potential (kap. 6.2.1): A₁⁻ + A₂ → A₁ + A₂⁻.", cn: "被分离电荷的吉布斯能通过电子沿电化学势梯度从初级受体移向次级受体而稳定下来（第6.2.1节）：A₁⁻ + A₂ → A₁ + A₂⁻。" },
    { cz: "D₂ + P⁺ → D₂⁺ + P", en: "Symmetrically, the electron gap in the RC chlorophyll is filled by an electron from the preceding member of the transport chain, the SECONDARY donor: D₂ + P⁺ → D₂⁺ + P.", cn: "对称地，反应中心叶绿素上的电子空缺由传递链前一成员——**次级**供体——的电子填补：D₂ + P⁺ → D₂⁺ + P。" },
    { cz: "primárním donorem je P v RC", en: "The book inserts a parenthesis that is easy to lose: the PRIMARY donor of electrons is the pigment P in the RC itself. D₂ is only the secondary donor. Getting this the wrong way round makes the whole notation incoherent.", cn: "教材插入了一句容易被忽略的括注：**初级**电子供体正是反应中心中的色素P本身。D₂只是次级供体。把这一点弄反会使整套记号不自洽。" },
    { cz: "od vody až po NADP⁺", en: "Into this set (A₁, A₂, D₂, etc.) can be fitted the whole sequence of electron transfer, from the initial donor — the water molecules — up to the final acceptor, NADP⁺. The abstract notation and the concrete chain of Obr. 9.5 describe the same thing.", cn: "从初始供体（水分子）直到最终受体NADP⁺的整个电子传递序列，都可装入A₁、A₂、D₂等这套记号之中。抽象记号与图9.5中具体的传递链描述的是同一件事。" }
  ],
  terms: [
    { cz: "fotosystém (PS)", en: "photosystem (PS)", cn: "光系统", def_en: "The reaction centre plus its nearest electron acceptors and donors, binding proteins and light-harvesting pigments, embedded as an oriented integral pigment-protein complex in the thylakoid membrane.", def_cn: "反应中心加上其最近的电子受体与供体、结合蛋白和捕光色素，以定向的整合型色素蛋白复合体形式嵌入类囊体膜。" },
    { cz: "primární akceptor / donor", en: "primary acceptor / donor", cn: "初级受体／供体", def_en: "A₁, the first species to receive the electron from P*; and P itself in the RC, which is the primary DONOR — not D₂.", def_cn: "A₁，即从P*接受电子的第一个物种；以及反应中心中的P本身，它才是初级**供体**——不是D₂。" },
    { cz: "sekundární akceptor / donor", en: "secondary acceptor / donor", cn: "次级受体／供体", def_en: "A₂, which takes the electron on from A₁ down the electrochemical gradient; and D₂, the preceding chain member that refills the electron gap in P⁺.", def_cn: "A₂，沿电化学梯度从A₁接过电子；以及D₂，即填补P⁺电子空缺的传递链前一成员。" },
    { cz: "integrální protein", en: "integral protein", cn: "整合蛋白", def_en: "A protein that penetrates the lipid bilayer rather than sitting on its surface; the photosystems are integral pigment-protein complexes, which is what allows charge separation to be oriented across the membrane.", def_cn: "贯穿脂双层而非附着于其表面的蛋白；光系统即整合型色素蛋白复合体，正因如此电荷分离才能跨膜定向。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book, what is the PRIMARY donor of electrons in a photosystem?",
      q_cn: "根据教材，光系统中的**初级**电子供体是什么？",
      options: [
        "The water molecule at the OEC",
        "The pigment P in the reaction centre itself",
        "D₂, the preceding member of the electron transport chain",
        "Plastocyanin"
      ],
      answer: 1,
      why_en: "The book states this in a parenthesis: the primary donor of electrons is the pigment P in the RC. D₂ is the SECONDARY donor, which refills the gap in P⁺. Water is the initial donor of the whole chain, which is a different notion from the primary donor of a photosystem.",
      why_cn: "教材在括注中指明：初级电子供体是反应中心中的色素P。D₂是**次级**供体，用来填补P⁺上的空缺。水是整条链的初始供体，这与某个光系统的初级供体是不同的概念。"
    },
    {
      type: "short",
      q_en: "Why does it matter that the photosystems are integral, oriented complexes rather than soluble ones?",
      q_cn: "光系统是整合的、定向的复合体而非可溶性的，这一点为何重要？",
      accept: ["across the membrane", "oriented", "separation", "recombin", "gradient"],
      answer_en: "Because the primary photochemical reaction then produces a charge separation oriented ACROSS the membrane. That orientation is what makes the separated charge usable — it can be stabilised by moving the electron to a secondary acceptor and refilling P⁺ from a secondary donor, instead of simply recombining.",
      answer_cn: "因为这样初级光化学反应产生的电荷分离才是**跨膜**定向的。正是这种取向使被分离的电荷可被利用——它可以通过把电子移向次级受体、并由次级供体填补P⁺而得到稳定，而不是简单地复合掉。"
    }
  ],
  oral: {
    q_en: "Define a photosystem and explain how the separated charge is stabilised.",
    q_cn: "请定义光系统，并说明被分离的电荷是如何被稳定下来的。",
    model_en: "A photosystem is the reaction centre plus everything that immediately serves it: the nearest electron acceptors and donors, the binding proteins that hold them in place, and the light-harvesting pigments. Crucially, a photosystem is not a soluble object. It is embedded in the thylakoid membrane as an integral pigment-protein complex, and it is oriented — it has a lumen side and a stroma side. That orientation is what turns a photochemical curiosity into a useful device, because the charge separation it produces is oriented across the membrane rather than happening in free solution where it would just recombine. Then the separated charge has to be stabilised, and this happens from both ends at once. On the acceptor side, the electron moves off the primary acceptor onto a secondary acceptor, downhill in electrochemical potential: A-one-minus plus A-two gives A-one plus A-two-minus. On the donor side, the hole left in the reaction-centre chlorophyll is filled from the preceding member of the chain, the secondary donor: D-two plus P-plus gives D-two-plus plus P. Note the terminology — the primary donor is P itself, in the reaction centre; D-two is only secondary. Both moves pull the charges further apart, faster than they can recombine. Extend that set of A's and D's far enough and you have the whole chain, from water as the initial donor to NADP-plus as the final acceptor.",
    checklist: [
      "Defined a photosystem as RC + nearest acceptors/donors + binding proteins + light-harvesting pigments",
      "Stressed that it is an oriented integral pigment-protein complex spanning the bilayer",
      "Explained that this makes the charge separation oriented ACROSS the membrane",
      "Gave A₁⁻ + A₂ → A₁ + A₂⁻ as the acceptor-side stabilisation, down the electrochemical gradient",
      "Gave D₂ + P⁺ → D₂⁺ + P as the donor-side stabilisation",
      "Correctly stated that the PRIMARY donor is P in the RC, D₂ being secondary",
      "Noted that the whole chain from water to NADP⁺ fits this notation"
    ]
  }
},

{
  id: "9-13",
  book: "cz",
  topicKey: "photochemical-reaction-centers",
  chapter: 9,
  section: "9.1.3",
  czTitle: "Cyklický a lineární tok elektronů, Z-schéma, definice PS I a PS II",
  enTitle: "Cyclic and linear electron flow, the Z-scheme, and the definitions of PS I and PS II",
  cnTitle: "循环与线性电子流、Z方案，以及PSI与PSII的定义",
  pages: [208],
  coverage: "full",
  coverageNote: "The middle of p.208 read in full. Both redox potentials were read directly from the scan: E0' O2/H2O = 820 mV and E0' NADP+/NADPH = -320 mV, together with the book's statement of which sits at the bottom and which at the top of the Z-scheme's potential axis. The definitions of PS II and PS I are given in the book's own functional terms (PS II = the one that photooxidizes water and passes electrons to plastoquinone; PS I = the one that passes electrons to NADP+ and additionally takes part in cyclic flow between Fd and the plastoquinones), which is worth preserving because it explains the otherwise confusing II-before-I numbering. The topological statement that water photolysis occurs at the INNER surface of thylakoids while NADP+ reduction and the protruding ATP-synthase are on the OUTER sides was also read directly.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Cyclic flow makes ATP and nothing else — no NADPH, no oxygen — which gives the plant a way to top up ATP alone without touching water; only linear flow through both photosystems produces all three. The numbering is historical rather than sequential: PS II is the one that splits water and therefore acts first.", cn: "循环式电子流只产生 ATP，别的什么都没有——没有 NADPH，也没有氧气——这给了植物一条「只补 ATP、完全不动水」的路；只有经过两个光系统的线性电子流才三样都产。编号是历史遗留而不是先后顺序：裂解水的是 PS II，所以先动手的是它。" },
  summary: {
    en: "If the electrons return back to the reaction centre, the process is called CYCLIC electron flow, and its only result is the formation of ATP; the book notes this is sometimes also called cyclic photophosphorylation. Two photoreactions, i.e. two photosystems in series, mean LINEAR electron flow — otherwise sometimes called non-cyclic photophosphorylation — and this is usually drawn as a lying letter Z (the inset scheme in Obr. 9.5). The Z can be plotted on either of two scales. On the scale of redox potentials, the oxidants are at the bottom (E°′ O₂/H₂O = 820 mV) and the reductants at the top (E°′ NADP⁺/NADPH = −320 mV). On the scale of Gibbs energy values, the exergonic processes (drawn as a dashed line) and the endergonic ones are made evident — the endergonic steps being precisely the processes in the reaction centres, which require an input of energy in the form of photons. The two photosystems are then defined FUNCTIONALLY, and this is what makes sense of their counter-intuitive numbering: the photosystem which photooxidizes water molecules and transfers electrons to plastoquinone is conventionally designated PS II; the photosystem which transfers electrons to NADP⁺, and moreover participates in cyclic electron flow between ferredoxin (Fd) and the plastoquinones (Q), is PS I. Topologically, photolysis of water takes place at the INNER surface of the thylakoids, while at the OUTER sides NADP⁺ is reduced and the ATP-synthase complex protrudes.",
    cn: "如果电子返回反应中心，该过程称为**循环**电子流，其唯一结果是生成ATP；教材指出这有时也称循环光合磷酸化。两次光反应、即两个光系统串联，意味着**线性**电子流——有时也称非循环光合磷酸化——通常画成一个横倒的字母Z（图9.5中的插图）。这个Z可以画在两种坐标上。在氧化还原电位坐标上，氧化剂在下方（E°′ O₂/H₂O = 820 mV），还原剂在上方（E°′ NADP⁺/NADPH = −320 mV）。在吉布斯能坐标上，放能过程（画作虚线）与吸能过程一目了然——吸能步骤恰恰是反应中心内的过程，它们需要以光子形式输入能量。随后两个光系统按**功能**定义，这也正是其反直觉编号得以说通的原因：光氧化水分子并把电子传给质体醌的那个光系统，按惯例记作PSII；把电子传给NADP⁺、并且还参与铁氧还蛋白(Fd)与质体醌(Q)之间循环电子流的那个，则是PSI。就拓扑而言，水的光解发生在类囊体的**内**表面，而在**外**侧则进行NADP⁺的还原并由ATP合酶复合体凸出。"
  },
  points: [
    { cz: "cyklický tok — jediným produktem ATP", en: "If the electrons return back to the RC, cyclic electron flow occurs, and its ONLY result is the formation of ATP. Sometimes also called cyclic photophosphorylation. No NADPH and no O₂ come out of it.", cn: "如果电子返回反应中心，就发生循环电子流，其**唯一**结果是生成ATP。有时也称循环光合磷酸化。它既不产生NADPH也不产生O₂。" },
    { cz: "lineární tok — dva fotosystémy v sérii", en: "Two photoreactions, two photosystems in series, mean linear electron flow (otherwise sometimes non-cyclic photophosphorylation), usually depicted as a lying letter Z — the inset scheme in Obr. 9.5.", cn: "两次光反应、两个光系统串联，意味着线性电子流（有时也称非循环光合磷酸化），通常画成一个横倒的字母Z——即图9.5中的插图。" },
    { cz: "Z-schéma na škále potenciálů", en: "On the scale of redox potentials, the oxidants sit at the bottom (E°′ O₂/H₂O = 820 mV) and the reductants at the top (E°′ NADP⁺/NADPH = −320 mV). The vertical distance between them is the electromotive work the two photons have to do.", cn: "在氧化还原电位坐标上，氧化剂位于下方（E°′ O₂/H₂O = 820 mV），还原剂位于上方（E°′ NADP⁺/NADPH = −320 mV）。二者之间的垂直距离就是两个光子必须完成的电动做功。" },
    { cz: "Z-schéma na škále ΔG", en: "On the Gibbs energy scale, the exergonic processes (dashed line) and the endergonic processes are evident. The endergonic ones are exactly the processes in the reaction centres, which require an input of energy in the form of photons.", cn: "在吉布斯能坐标上，放能过程（虚线）与吸能过程一目了然。吸能的那些恰恰是反应中心内的过程，它们需要以光子形式输入能量。" },
    { cz: "PS II = fotooxiduje vodu → plastochinon", en: "The photosystem that photooxidizes water molecules and transfers electrons to plastoquinone is conventionally designated PS II.", cn: "光氧化水分子并把电子传给质体醌的那个光系统，按惯例记作PSII。" },
    { cz: "PS I = → NADP⁺ a cyklický tok", en: "The photosystem that transfers electrons to NADP⁺ and additionally participates in cyclic electron flow (between ferredoxin Fd and the plastoquinones Q) is PS I. The numbering is historical, not sequential — PS II acts first in the linear chain.", cn: "把电子传给NADP⁺、并且还参与循环电子流（介于铁氧还蛋白Fd与质体醌Q之间）的那个光系统是PSI。编号是历史性的而非顺序性的——在线性链中先起作用的是PSII。" },
    { cz: "topologie: uvnitř fotolýza, vně redukce NADP⁺", en: "At the INNER surface of the thylakoids (Obr. 9.1 and 9.5) photolysis of water takes place; at the OUTER sides NADP⁺ is reduced and the ATP-synthase complex protrudes. This asymmetry is what builds the proton gradient (see 9-14).", cn: "在类囊体的**内**表面（图9.1与9.5）进行水的光解；在**外**侧则还原NADP⁺，并由ATP合酶复合体凸出。正是这种不对称性建立起质子梯度（见9-14）。" }
  ],
  terms: [
    { cz: "cyklický tok elektronů", en: "cyclic electron flow", cn: "循环电子流", def_en: "Electron flow returning to the reaction centre; produces ATP only (cyclic photophosphorylation), no NADPH and no O₂. Runs between ferredoxin and the plastoquinones via PS I.", def_cn: "返回反应中心的电子流；仅产生ATP（循环光合磷酸化），不产生NADPH也不产生O₂。经PSI在铁氧还蛋白与质体醌之间运行。" },
    { cz: "lineární tok elektronů", en: "linear electron flow", cn: "线性电子流", def_en: "Electron flow through two photosystems in series from water to NADP⁺; also called non-cyclic photophosphorylation; drawn as the Z-scheme.", def_cn: "经两个串联光系统、自水流向NADP⁺的电子流；亦称非循环光合磷酸化；画作Z方案。" },
    { cz: "Z-schéma", en: "Z-scheme", cn: "Z方案", def_en: "The standard depiction of linear electron flow as a lying letter Z, plotted either against redox potential (820 mV for O₂/H₂O at the bottom, −320 mV for NADP⁺/NADPH at the top) or against Gibbs energy.", def_cn: "把线性电子流画成横倒字母Z的标准图示，坐标或为氧化还原电位（下方O₂/H₂O为820 mV，上方NADP⁺/NADPH为−320 mV），或为吉布斯能。" },
    { cz: "fotofosforylace", en: "photophosphorylation", cn: "光合磷酸化", def_en: "ATP synthesis driven by light-generated electron flow; cyclic when the electrons return to the RC, non-cyclic when they end on NADP⁺.", def_cn: "由光驱动的电子流所推动的ATP合成；电子返回反应中心时为循环式，电子终止于NADP⁺时为非循环式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which photosystem is defined as the one that photooxidizes water and passes electrons to plastoquinone?",
      q_cn: "哪一个光系统被定义为「光氧化水并把电子传给质体醌」的那一个？",
      options: [
        "PS I",
        "PS II",
        "Both, alternately",
        "Neither; water is oxidized by the OEC independently of any photosystem"
      ],
      answer: 1,
      why_en: "PS II is defined functionally as the water-photooxidizing photosystem that reduces plastoquinone. PS I is the one that reduces NADP⁺ and takes part in cyclic flow between Fd and Q. The OEC is part of PS II, not independent of it.",
      why_cn: "PSII在功能上被定义为光氧化水并还原质体醌的光系统。PSI则是还原NADP⁺、并参与Fd与Q之间循环流的那一个。OEC是PSII的组成部分，并非独立于它。"
    },
    {
      type: "short",
      q_en: "What is the sole product of cyclic electron flow, and what two redox potentials bound the Z-scheme?",
      q_cn: "循环电子流的唯一产物是什么？Z方案的上下两个氧化还原电位是多少？",
      accept: ["ATP", "820", "-320", "−320"],
      answer_en: "Cyclic flow yields ATP only. The Z-scheme runs from E°′ O₂/H₂O = 820 mV (oxidants, bottom) to E°′ NADP⁺/NADPH = −320 mV (reductants, top).",
      answer_cn: "循环流只产生ATP。Z方案从E°′ O₂/H₂O = 820 mV（氧化剂，下方）延伸到E°′ NADP⁺/NADPH = −320 mV（还原剂，上方）。"
    }
  ],
  oral: {
    q_en: "Explain the Z-scheme and the difference between cyclic and linear electron flow.",
    q_cn: "请解释Z方案，以及循环电子流与线性电子流的区别。",
    model_en: "There are two ways the electrons can go. If they come back round to the reaction centre, that is cyclic flow, sometimes called cyclic photophosphorylation, and its only product is ATP — no NADPH, no oxygen. It runs through photosystem one, between ferredoxin and the plastoquinones. If instead they pass through two photosystems in series and end up on NADP-plus, that is linear flow, or non-cyclic photophosphorylation, and it is drawn as a lying letter Z. The Z shape comes from plotting the journey against redox potential: you start at the bottom with the oxygen-water couple at plus eight hundred and twenty millivolts, a photon lifts you steeply upward at photosystem two, you slide back down through the carriers, a second photon lifts you again at photosystem one, and you finish at the NADP-plus/NADPH couple at minus three hundred and twenty millivolts. Plotted against Gibbs energy instead, the exergonic downhill runs show as dashed lines and the endergonic jumps are exactly the two reaction-centre events, the ones paid for by photons. As for the numbering, which looks backwards: photosystem two is defined as the one that photooxidizes water and reduces plastoquinone, and photosystem one as the one that reduces NADP-plus and also carries the cyclic flow. Two acts first; the names are historical.",
    checklist: [
      "Defined cyclic flow as electrons returning to the RC, yielding ATP only",
      "Defined linear flow as two photosystems in series, water to NADP⁺",
      "Gave both alternative names: cyclic and non-cyclic photophosphorylation",
      "Explained the Z shape via the redox-potential axis with 820 mV and −320 mV",
      "Noted the ΔG version, with the endergonic steps being the reaction-centre events",
      "Defined PS II and PS I functionally and explained that the numbering is historical",
      "Optionally gave the topology: water split at the inner surface, NADP⁺ reduced outside"
    ]
  }
},

{
  id: "9-14",
  book: "cz",
  topicKey: "photochemical-reaction-centers",
  chapter: 9,
  section: "9.1.3",
  czTitle: "Přenos protonů, ΔpH a ATP-synthasa — obrácená orientace thylakoidu",
  enTitle: "Proton transport, ΔpH and ATP-synthase — the reversed thylakoid orientation",
  cnTitle: "质子传递、ΔpH与ATP合酶——类囊体的反向取向",
  pages: [208, 209],
  coverage: "full",
  coverageNote: "The bottom third of p.208 and the top paragraph of p.209 read in full. The book's distinction between an APPARENT proton transfer (protons consumed on one side by NADP+ reduction and released on the other by water photolysis) and a REAL one (protons physically carried across by hydrophobic plastoquinones with the cytochrome b/f complex) is reproduced because it is a genuinely subtle point that a summary usually flattens. The reversed orientation of the thylakoid relative to the inner mitochondrial membrane is stated together with the book's own evolutionary explanation (membrane evolution and different 'constriction'/self-enclosure), which is given as the book gives it -- as an explanation offered, not as a demonstrated mechanism.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The thylakoid is the mitochondrion turned inside out — protons are pumped INTO the lumen instead of out of it, and the ATP-synthase knobs stick out on the stromal side — so the mitochondrial picture converts to this one by reversing both at once. Keep one distinction separate from that: only the plastoquinones physically carry protons across the membrane; the rest of the gradient is built merely by consuming protons on one face and releasing them on the other.", cn: "类囊体就是把线粒体里外翻过来：质子是被泵「进」腔内 (lumen) 而不是泵出去，ATP 合酶的球头也是朝着基质那一面伸出来的——所以只要把这两点同时反过来，线粒体的图就变成了类囊体的图。另外要单独分清一件事：真正把质子搬过膜的只有质体醌 (plastoquinone)；梯度的其余部分只是「一面消耗质子、另一面释放质子」造成的，并没有东西被搬运。" },
  summary: {
    en: "Electron movement is coupled to proton transfer, as in energy conservation in the respiratory chain — but the book carefully distinguishes two senses of 'proton transfer'. It is APPARENT if protons are merely consumed on one side of the membrane (reduction of NADP⁺) and released on the other (photolysis of water); it is REAL if protons are actually carried across the membrane. Real proton transfer is provided by the molecules of hydrophobic plastoquinones, which operate with the participation of the so-called complex of cytochromes b and f (cytochrome b₆/f, Obr. 9.5) inside the membrane. Consequently, on illumination the proton concentration rises throughout the whole inner space of the thylakoids — H⁺ are delocalised — while at the outer surface of the thylakoid membrane the H⁺ concentration falls, and a transmembrane difference in H⁺ concentration is generated. The Gibbs energy of that ΔpH is used either directly, for example for active transport, or by the ATP-synthase, the last supramolecular thylakoid complex, which contains only NON-pigmented proteins and whose composition and function are again analogous to the ATP-synthase of the inner mitochondrial membrane (Obr. 6.4, 6.6). It equalises ΔpH and the electrochemical potential on both sides and synthesizes ATP from ADP and inorganic phosphate. The orientation, however, is REVERSED: in photosynthetic redox reactions protons move from OUTSIDE INWARDS into the thylakoids, and the ATP-synthase complex is likewise oppositely oriented — its knobs (paličky) protrude on the outer surface and it lets protons through from inside out. The book explains this reversal as lying in the evolution of membranes and their different 'constriction' and self-enclosure. The processes localised in the thylakoid membranes provide, as their first stable products, NADPH and ATP, in which the electromagnetic energy of photons converted into chemical energy is stored; these two compounds are used above all in the fixation and reduction of CO₂.",
    cn: "电子的移动与质子传递相偶联，正如呼吸链中的能量守恒一样——但教材仔细区分了「质子传递」的两种含义。若质子只是在膜的一侧被消耗（NADP⁺的还原）、而在另一侧被释放（水的光解），那是**表观的**；若质子确实被搬运过膜，那才是**真实的**。真实的质子传递由疏水的质体醌分子完成，它们在膜内与所谓的细胞色素b和f复合体（细胞色素b₆/f，图9.5）共同作用。其结果是：光照时类囊体整个内腔中的质子浓度升高——H⁺是**离域**的——而类囊体膜外表面的H⁺浓度反而下降，于是产生跨膜的H⁺浓度差。这一ΔpH的吉布斯能或被直接利用（例如用于主动运输），或被ATP合酶利用——它是最后一个类囊体超分子复合体，只含**非**色素蛋白，其组成与功能同样与线粒体内膜的ATP合酶相类似（图6.4、6.6）。它拉平膜两侧的ΔpH与电化学势，并由ADP和无机磷酸合成ATP。但取向是**相反的**：在光合氧化还原反应中，质子是从**外向内**进入类囊体的；ATP合酶复合体同样反向排布——其头部（paličky）朝外表面凸出，并让质子由内向外通过。教材把这种反转解释为源于膜的演化及其不同方式的「缢缩」与自我封闭。定位于类囊体膜上的这些过程，其最初的稳定产物是NADPH与ATP，光子的电磁能转换成的化学能就储存于其中；这两种化合物首先被用于CO₂的固定与还原。"
  },
  points: [
    { cz: "zdánlivý vs skutečný přenos protonů", en: "The book distinguishes an APPARENT proton transfer — protons consumed on one side (NADP⁺ reduction) and released on the other (water photolysis) — from a REAL one, in which protons are physically carried across the membrane. Both contribute to the gradient but only one is transport.", cn: "教材区分**表观的**质子传递——质子在一侧被消耗（NADP⁺还原）、在另一侧被释放（水的光解）——与**真实的**质子传递，后者是质子在物理上被搬运过膜。两者都对梯度有贡献，但只有一个是真正的运输。" },
    { cz: "skutečný přenos = plastochinony + cyt b₆/f", en: "Real proton transfer is provided by the hydrophobic plastoquinone molecules, operating with the participation of the complex of cytochromes b and f (cytochrome b₆/f) inside the membrane.", cn: "真实的质子传递由疏水的质体醌分子完成，它们在膜内与细胞色素b和f的复合体（细胞色素b₆/f）共同作用。" },
    { cz: "H⁺ jsou delokalizovány", en: "On illumination the H⁺ concentration rises throughout the whole INNER space of the thylakoids — the book notes explicitly that the protons are delocalised, i.e. the gradient is a bulk-phase property of the lumen, not a local one — while at the outer surface it falls.", cn: "光照时，类囊体整个**内腔**中的H⁺浓度升高——教材明确指出质子是**离域**的，即该梯度是内腔整体相的性质而非局部性质——而外表面的浓度则下降。" },
    { cz: "ΔpH využita přímo nebo ATP-synthasou", en: "The Gibbs energy of the ΔpH is used either directly (e.g. for active transport) or by the ATP-synthase — the last supramolecular thylakoid complex, containing only NON-pigmented proteins, analogous in composition and function to the mitochondrial ATP-synthase (Obr. 6.4, 6.6).", cn: "ΔpH的吉布斯能或被直接利用（例如用于主动运输），或被ATP合酶利用——它是最后一个类囊体超分子复合体，只含**非**色素蛋白，其组成与功能类似于线粒体的ATP合酶（图6.4、6.6）。" },
    { cz: "obrácená orientace membrány", en: "The orientation of the thylakoid membrane is REVERSED relative to the inner mitochondrial membrane: in photosynthetic redox reactions protons move from outside INWARDS into the thylakoids, the opposite of the mitochondrial direction.", cn: "类囊体膜相对于线粒体内膜的取向是**相反的**：在光合氧化还原反应中，质子从外**向内**进入类囊体，与线粒体的方向相反。" },
    { cz: "„paličky\" ATP-synthasy vně", en: "The ATP-synthase complex is likewise oppositely oriented — its knobs (paličky, the CF₁ heads) protrude on the OUTER surface, and it lets protons through from inside out. So both the pumping direction and the knob orientation are mirror-images of the mitochondrial case, and the two reversals are consistent with each other.", cn: "ATP合酶复合体同样反向排布——其头部（paličky，即CF₁头）朝**外**表面凸出，并让质子由内向外通过。因此泵送方向与头部取向都是线粒体情形的镜像，且两处反转彼此自洽。" },
    { cz: "vysvětlení: evoluce a „zaškrcování\" membrán", en: "The book offers an explanation for the reversal: it lies in the evolution of membranes and their different 'constriction' (zaškrcování) and self-enclosure. This is presented as an explanation, not as a demonstrated mechanism, and is reproduced here on the same footing.", cn: "教材为这一反转给出了一个解释：它源于膜的演化及其不同方式的「缢缩」(zaškrcování)与自我封闭。这是作为一种解释而非已证实的机制提出的，此处也按同样的分量转述。" },
    { cz: "první stálé produkty: NADPH a ATP", en: "The processes localised in the thylakoid membranes provide, as their first STABLE products, NADPH and ATP, in which the electromagnetic energy of photons converted into chemical energy is stored. These two are then used above all in the fixation and reduction of CO₂ — which is where §9.1.4 picks up.", cn: "定位于类囊体膜上的这些过程，其最初的**稳定**产物是NADPH与ATP，光子电磁能转换成的化学能储存其中。这两者随后首先被用于CO₂的固定与还原——§9.1.4正由此接续。" }
  ],
  terms: [
    { cz: "ΔpH", en: "ΔpH (transmembrane proton gradient)", cn: "ΔpH（跨膜质子梯度）", def_en: "The difference in H⁺ concentration across the thylakoid membrane generated on illumination; high in the lumen, low outside. Its Gibbs energy drives ATP synthesis or active transport.", def_cn: "光照时在类囊体膜两侧产生的H⁺浓度差；内腔高、外部低。其吉布斯能驱动ATP合成或主动运输。" },
    { cz: "cytochrom b₆/f", en: "cytochrome b₆/f complex", cn: "细胞色素b₆/f复合体", def_en: "The membrane complex that, together with the mobile hydrophobic plastoquinones, carries out the REAL transfer of protons across the thylakoid membrane.", def_cn: "与可移动的疏水质体醌一道，在类囊体膜上执行**真实**质子跨膜传递的膜复合体。" },
    { cz: "ATP-synthasa (thylakoidní)", en: "thylakoid ATP-synthase", cn: "类囊体ATP合酶", def_en: "The last supramolecular thylakoid complex; contains only non-pigmented proteins; analogous to the mitochondrial enzyme but with its knobs facing the stroma and passing protons from lumen to stroma.", def_cn: "最后一个类囊体超分子复合体；只含非色素蛋白；与线粒体的同类酶类似，但其头部朝向基质，并把质子由内腔送往基质。" },
    { cz: "delokalizace protonů", en: "proton delocalisation", cn: "质子离域", def_en: "The book's term for the fact that the H⁺ accumulate throughout the whole inner space of the thylakoid rather than staying local to the site of their release.", def_cn: "教材用来表述以下事实的术语：H⁺在类囊体整个内腔中积累，而不是局限于其释放位点附近。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In what direction do protons move across the thylakoid membrane during the photosynthetic redox reactions, and how does that compare with mitochondria?",
      q_cn: "在光合氧化还原反应中，质子跨类囊体膜的移动方向如何？与线粒体相比又如何？",
      options: [
        "From inside out, the same direction as in mitochondria",
        "From outside inwards — the reverse of the mitochondrial direction",
        "From inside out, the reverse of the mitochondrial direction",
        "Protons do not cross; only electrons do"
      ],
      answer: 1,
      why_en: "The book states that the orientation of thylakoid membranes is reversed: in the photosynthetic redox reactions protons move from outside INWARDS into the thylakoids. Consistently, the ATP-synthase knobs protrude on the outer surface and let protons out from inside.",
      why_cn: "教材指出类囊体膜的取向是相反的：在光合氧化还原反应中，质子从外**向内**进入类囊体。与之一致，ATP合酶的头部朝外表面凸出，并让质子由内向外通过。"
    },
    {
      type: "short",
      q_en: "What is the difference between an 'apparent' and a 'real' proton transfer, and which species carries out the real one?",
      q_cn: "「表观的」与「真实的」质子传递有何区别？由哪种物质完成真实的那一种？",
      accept: ["consumed", "released", "across", "plastoquinone", "cytochrome"],
      answer_en: "Apparent: protons are consumed on one side (NADP⁺ reduction) and released on the other (water photolysis), without anything actually crossing. Real: protons are physically carried across the membrane, by the hydrophobic plastoquinones acting with the cytochrome b₆/f complex.",
      answer_cn: "表观的：质子在一侧被消耗（NADP⁺还原）、在另一侧被释放（水的光解），并没有任何东西真正穿过膜。真实的：质子在物理上被搬运过膜，由疏水质体醌与细胞色素b₆/f复合体共同完成。"
    }
  ],
  oral: {
    q_en: "How does the thylakoid membrane convert light-driven electron flow into ATP, and how does this compare with the mitochondrion?",
    q_cn: "类囊体膜如何把光驱动的电子流转换为ATP？这与线粒体相比如何？",
    model_en: "The principle is the same as in the respiratory chain: electron flow is coupled to proton movement, a gradient builds, and an ATP synthase discharges it. But the textbook makes a distinction worth keeping. Some of the proton gradient is only apparent — protons are consumed on one side when NADP-plus is reduced and released on the other when water is split, so the concentrations diverge without anything physically crossing. The real transfer is done by the hydrophobic plastoquinones working with the cytochrome b-six-f complex inside the membrane; they actually ferry protons over. Either way, on illumination the lumen fills with protons — and the book notes they are delocalised, spread through the whole inner space rather than staying near where they were released — while the outer surface is depleted. That delta-pH can be spent directly, on active transport for instance, or through the ATP synthase, the last supramolecular complex of the thylakoid, built entirely of non-pigmented proteins and functionally the twin of the mitochondrial enzyme. The one real difference is orientation, and it is a complete mirror image: protons are driven from outside inwards, into the lumen, and the synthase knobs face outward, letting protons back out. The book attributes this to how the two membranes evolved and pinched themselves closed differently. The stable products are NADPH and ATP, and both are spent on fixing CO₂.",
    checklist: [
      "Distinguished apparent from real proton transfer and named plastoquinone + cytochrome b₆/f for the real one",
      "Described lumen acidification and stroma depletion, noting proton delocalisation",
      "Gave both uses of ΔpH: direct (active transport) and via ATP synthase",
      "Described the ATP synthase as containing only non-pigmented proteins, analogous to the mitochondrial one",
      "Stated the reversal explicitly: protons driven outside→inwards, knobs on the outer surface",
      "Mentioned the book's evolutionary explanation for the reversal, as an explanation rather than a proof",
      "Named NADPH and ATP as the first stable products, spent on CO₂ fixation"
    ]
  }
},

{
  id: "9-15",
  book: "cz",
  topicKey: "co2-assimilation",
  chapter: 9,
  section: "9.1.4",
  czTitle: "Fotosyntetická fixace CO₂ — proč „temná fáze\" je špatný termín",
  enTitle: "Photosynthetic CO₂ fixation — why 'dark phase' is a bad term",
  cnTitle: "CO₂的光合固定——为何「暗相」是个糟糕的术语",
  pages: [209],
  coverage: "full",
  coverageNote: "The opening of section 9.1.4 on p.209 read in full, including the summary arrow CO2 --(enzymy chloroplastu / NADPH, ATP)--> C6H12O6 exactly as drawn, and both of the book's terminological objections. The book rejects TWO terms here, not one: 'dark phase / dark reaction' (temna faze / temnotni reakce) AND 'light-independent photosynthetic reaction' (fotosynteticka reakce nezavisla na svetle), and it gives a different reason for rejecting each. Both reasons are reproduced, since a summary that mentions only the first misses the sharper of the two arguments.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Calling these the dark reactions is wrong twice over: they run perfectly well in the light, and they are not light-independent either — they carry on in the dark only for as long as the NADPH and ATP the light already made hold out. All that is actually true is that no step in them is itself photochemical.", cn: "把这一段叫「暗反应」错了两次：它们在光下照样进行；而且它们也并非不依赖光——在黑暗中能继续下去，只是因为光反应先前造好的 NADPH 和 ATP 还没用完。真正成立的说法只有一条：这里没有任何一步本身是光化学反应。" },
  summary: {
    en: "The reactions of photosynthesis that follow immediately on the photochemical processes of the photosystems and on charge separation are summarised by a single arrow: CO₂ →(enzymy chloroplastu, NADPH, ATP) C₆H₁₂O₆. In higher plants the whole process takes place in the chloroplasts, involves a series of enzyme reactions requiring ATP and the coenzyme NADPH, and its result is the formation of an organic compound — the saccharide C₆H₁₂O₆ — from the inorganic compound CO₂. The book calls this fixation or assimilation of atmospheric carbon dioxide, and then spends a paragraph rejecting two common alternative names. 'Dark phase' or 'dark reaction' of photosynthesis is NOT suitable, because it suggests the idea that this conversion does not occur in the light — which is false; it occurs perfectly well in the light. But — and this is the sharper point — the apparently more careful term 'light-independent photosynthetic reaction' is not suitable either, because CO₂ fixation is a sequence of reactions that runs either in the light or in the dark only for as long as there is a sufficient supply of the NADPH and ATP produced by the photosystems' conversion of light energy. In other words the process is not independent of light at all: it is independent of light only over the lifetime of the reducing power and phosphorylation potential the light has already made. Calling it light-independent confuses 'not directly photochemical' with 'not needing light', and the difference is a matter of hours at most.",
    cn: "紧接在光系统的光化学过程与电荷分离之后的那些光合反应，可以用一个箭头概括：CO₂ →(叶绿体的酶, NADPH, ATP) C₆H₁₂O₆。在高等植物中，整个过程发生在叶绿体内，涉及一系列需要ATP和辅酶NADPH的酶促反应，其结果是由无机化合物CO₂生成有机化合物——糖类C₆H₁₂O₆。教材称之为大气二氧化碳的固定或同化，随后用一整段否定了两个常见的替代名称。光合作用的「暗相」或「暗反应」**不**恰当，因为它暗示这种转换不在光下发生——这是错的；它在光下进行得很好。但是——这才是更锐利的一点——看似更审慎的术语「不依赖光的光合反应」同样不恰当，因为CO₂固定是一系列反应，它之所以能在光下或黑暗中进行，仅仅取决于由光系统转换光能所产生的NADPH和ATP还有多少供应。换句话说，该过程根本不是不依赖光的：它只在光已经制造出的还原力与磷酸化势的存续期内不依赖光。把它称作「不依赖光」，是把「不直接进行光化学反应」与「不需要光」混为一谈，而二者之差至多不过几小时。"
  },
  points: [
    { cz: "CO₂ → C₆H₁₂O₆ přes enzymy chloroplastu", en: "The reactions immediately following the photochemistry are summarised as CO₂ →(chloroplast enzymes; NADPH, ATP) C₆H₁₂O₆. In higher plants this all takes place in the chloroplasts.", cn: "紧随光化学过程之后的反应可概括为 CO₂ →(叶绿体的酶；NADPH、ATP) C₆H₁₂O₆。在高等植物中，这一切都发生在叶绿体内。" },
    { cz: "fixace = asimilace vzdušného CO₂", en: "The process — formation of an organic compound (the saccharide C₆H₁₂O₆) out of the inorganic compound CO₂, by a series of enzyme reactions requiring ATP and NADPH — is called fixation or assimilation of atmospheric carbon dioxide.", cn: "这一过程——通过一系列需要ATP与NADPH的酶促反应，由无机化合物CO₂生成有机化合物（糖类C₆H₁₂O₆）——称为大气二氧化碳的固定或同化。" },
    { cz: "„temná fáze\" — nevhodné", en: "The term 'dark phase' or 'dark reaction' (temná fáze / temnotní reakce) is often used but is NOT suitable, because it suggests the idea that this conversion does not occur in the light. It does.", cn: "「暗相」或「暗反应」这一术语虽常被使用，但**不**恰当，因为它暗示这种转换不在光下发生。事实上它在光下发生。" },
    { cz: "„reakce nezávislá na světle\" — také nevhodné", en: "Nor is the term 'photosynthetic reaction independent of light' suitable, because CO₂ fixation is a sequence of reactions that runs in light or in dark only FOR AS LONG AS there is a sufficient supply of the NADPH and ATP produced by the photosystems' conversion of light energy.", cn: "「不依赖光的光合反应」这一术语同样不恰当，因为CO₂固定是一系列反应，它能在光下或黑暗中进行，**仅仅在**由光系统转换光能所产生的NADPH与ATP供应充足的期间内。" },
    { cz: "rozdíl mezi „nefotochemické\" a „nepotřebuje světlo\"", en: "The distinction the book is drawing is between 'not itself a photochemical step' — which is true of CO₂ fixation — and 'not requiring light' — which is false. The stromal reactions are downstream consumers of a supply the light reactions make; when that supply runs out they stop.", cn: "教材在此划分的是「本身不是光化学步骤」——这对CO₂固定是成立的——与「不需要光」——这是不成立的。基质中的反应是光反应所制造供给的下游消费者；供给耗尽时它们就停止。" }
  ],
  terms: [
    { cz: "fixace CO₂", en: "CO₂ fixation", cn: "CO₂固定", def_en: "Incorporation of inorganic CO₂ into an organic compound; in the chloroplast stroma, by chloroplast enzymes, at the expense of ATP and NADPH. Also called assimilation of atmospheric CO₂.", def_cn: "把无机CO₂结合进有机化合物；在叶绿体基质中由叶绿体酶完成，消耗ATP与NADPH。亦称大气CO₂的同化。" },
    { cz: "temná fáze (nevhodný termín)", en: "'dark phase' (an unsuitable term)", cn: "「暗相」（不恰当的术语）", def_en: "The traditional name for CO₂ fixation, rejected by the book because it falsely suggests the conversion does not occur in the light.", def_cn: "CO₂固定的传统名称，教材加以否定，因为它错误地暗示该转换不在光下发生。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the book reject the term 'light-independent photosynthetic reaction' for CO₂ fixation?",
      q_cn: "教材为何否定用「不依赖光的光合反应」来称呼CO₂固定？",
      options: [
        "Because CO₂ fixation contains a genuinely photochemical step",
        "Because the process only runs as long as NADPH and ATP made by the light reactions last",
        "Because it occurs only at night in most plants",
        "Because RubisCO is directly activated by photons"
      ],
      answer: 1,
      why_en: "The book's argument is about supply, not about photochemistry. CO₂ fixation contains no photochemical step, but it runs in light or dark only for as long as the NADPH and ATP produced by the photosystems hold out — so calling it light-independent is misleading.",
      why_cn: "教材的论证针对的是供给，而非光化学本身。CO₂固定并不包含光化学步骤，但它能在光下或黑暗中进行，仅限于光系统所产生的NADPH与ATP尚未耗尽之时——因此称其「不依赖光」有误导性。"
    },
    {
      type: "short",
      q_en: "Which two terms for CO₂ fixation does the book reject, and what does it call the process instead?",
      q_cn: "教材否定了哪两个用于CO₂固定的术语？它改称该过程为什么？",
      accept: ["dark phase", "dark reaction", "light-independent", "independent of light", "fixation", "assimilation"],
      answer_en: "It rejects 'dark phase / dark reaction' and 'photosynthetic reaction independent of light'. It calls the process fixation, or assimilation, of atmospheric carbon dioxide.",
      answer_cn: "它否定「暗相/暗反应」以及「不依赖光的光合反应」。教材改称该过程为大气二氧化碳的固定或同化。"
    }
  ],
  oral: {
    q_en: "Is it correct to call CO₂ fixation the 'dark reaction' of photosynthesis?",
    q_cn: "把CO₂固定称作光合作用的「暗反应」正确吗？",
    model_en: "No, and the textbook rejects not just that term but also its more cautious-sounding replacement. 'Dark phase' or 'dark reaction' is wrong because it invites the reader to think the conversion happens in darkness, or at least not in light — and that is simply false; it runs perfectly well while the sun is up, and in practice that is when it mostly runs. Someone might then propose calling it the light-independent reaction instead, on the grounds that no photon is absorbed in any of its steps. The book rejects that too, and this is the better argument. Carbon fixation is a chain of enzyme reactions in the chloroplast stroma that consumes ATP and NADPH. It will indeed proceed in the dark — but only for as long as the ATP and NADPH made by the photosystems last. It is a downstream consumer of something the light made. So it is not independent of light in any meaningful sense; it is merely not itself photochemical. The honest name is the one the book uses: fixation, or assimilation, of atmospheric carbon dioxide.",
    checklist: [
      "Rejected 'dark phase/dark reaction' and gave the reason: it falsely implies no conversion in the light",
      "Also rejected 'light-independent reaction' and gave the sharper reason: it depends on the ATP/NADPH supply",
      "Distinguished 'not itself photochemical' from 'not needing light'",
      "Gave the book's preferred name: fixation or assimilation of atmospheric CO₂",
      "Located the process in the chloroplast stroma and named ATP and NADPH as the inputs"
    ]
  }
},

{
  id: "9-16",
  book: "cz",
  topicKey: "co2-assimilation",
  chapter: 9,
  section: "9.1.4",
  czTitle: "Dvě nesprávné interpretace sumární rovnice; Calvinův cyklus",
  enTitle: "Two incorrect interpretations of the summary equation; the Calvin cycle",
  cnTitle: "总方程的两种错误解读；卡尔文循环",
  pages: [209],
  coverage: "full",
  coverageNote: "The middle of p.209 read in full. Both incorrect interpretations are given in the book's own numbering and both refutations are reproduced. The full list of downstream biosynthetic destinations of fixed carbon was read off the scan and is kept complete (other saccharides, amino acids, proteins, fatty acids, lipids, nucleotides, nucleic acids, pigments, secondary plant metabolites) because the point of the passage is the breadth of that list. Attribution and the Nobel year were read as printed: M. Calvin (Nobel Prize 1961), A. A. Benson and J. A. Bassham.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Most of the carbon a plant fixes never becomes a hexose at all — the greater part goes straight into the central metabolic pathways and on to amino acids, fatty acids, nucleotides and pigments, so photosynthesis is the plant's entire carbon supply and not merely its sugar factory. And 6 CO₂ → C₆H₁₂O₆ is bookkeeping, not a claim that those particular six carbons end up in one molecule.", cn: "植物固定的碳大部分根本不会变成己糖——绝大多数直接进入中心代谢途径，再去做氨基酸、脂肪酸、核苷酸和色素，所以光合作用是植物全部碳的来源，而不只是一个制糖车间。另外，6 CO₂ → C₆H₁₂O₆ 只是一笔总账，并不是说那六个碳最后会落在同一个分子里。" },
  summary: {
    en: "The summary equation of CO₂ fixation can by itself lead to two further incorrect interpretations, which the book numbers and then refutes in turn. (1) That the carbon atoms of the six CO₂ molecules entering the reaction are part of one and the same saccharide molecule. (2) That CO₂ fixation is limited only to this metabolic activity. Neither claim is accurate. On the first: the relation 6 CO₂ → C₆H₁₂O₆ is ONLY a summary equation — it is a bookkeeping statement about how much carbon enters and how much sugar could be assembled, not a claim about the fate of any particular six carbons. On the second: the goal of photosynthetic CO₂ fixation is not merely the synthesis of hexoses and subsequently of cellulose or starch. The GREATER PART is transported into the central metabolic pathways — the citrate cycle is the example given — and serves as a chemical source of energy and carbon for the biosyntheses of other saccharides, amino acids, proteins, fatty acids, lipids, nucleotides, nucleic acids, pigments, and further so-called secondary plant metabolites (§9.5). The reactions of CO₂ fixation were described by M. Calvin, who received the Nobel Prize in 1961, together with A. A. Benson and J. A. Bassham, and are often designated by the names of their discoverers or, briefly, as the Calvin cycle.",
    cn: "CO₂固定的总方程本身还可能导致另外两种错误解读，教材依次编号并逐一驳斥。(1)以为进入反应的六个CO₂分子的碳原子属于同一个糖分子。(2)以为CO₂固定仅限于这一项代谢活动。两种说法都不准确。关于第一点：6 CO₂ → C₆H₁₂O₆ 这一关系**只是**一个总方程——它是关于「有多少碳进入、能组装出多少糖」的记账式陈述，而非关于任何特定六个碳原子去向的论断。关于第二点：光合CO₂固定的目标并不只是合成己糖以及随后的纤维素或淀粉。**更大的一部分**被输送进中心代谢途径——教材举的例子是柠檬酸循环——并作为化学能源与碳源，用于其他糖类、氨基酸、蛋白质、脂肪酸、脂质、核苷酸、核酸、色素以及所谓次生植物代谢物（§9.5）的生物合成。CO₂固定的各步反应由M. Calvin（1961年诺贝尔奖得主）与A. A. Benson、J. A. Bassham描述，常以其发现者的名字命名，或简称为卡尔文循环。"
  },
  points: [
    { cz: "chybná interpretace 1: šest CO₂ = jedna molekula", en: "Incorrect interpretation 1: that the carbon atoms of the six CO₂ molecules entering the reaction are part of one and the same saccharide molecule. The relation 6 CO₂ → C₆H₁₂O₆ is only a SUMMARY equation, not a statement about the fate of a particular six carbons.", cn: "错误解读1：以为进入反应的六个CO₂分子的碳原子属于同一个糖分子。6 CO₂ → C₆H₁₂O₆ 只是一个**总**方程，并非关于某特定六个碳原子去向的陈述。" },
    { cz: "chybná interpretace 2: fixace jen pro hexosy", en: "Incorrect interpretation 2: that CO₂ fixation is limited only to this metabolic activity. In fact the goal of photosynthetic CO₂ fixation is not only the synthesis of hexoses and subsequently of cellulose or starch.", cn: "错误解读2：以为CO₂固定仅限于这一项代谢活动。事实上，光合CO₂固定的目标并不只是合成己糖以及随后的纤维素或淀粉。" },
    { cz: "větší část jde do centrálních drah", en: "The GREATER PART of the fixed carbon is transported into the central metabolic pathways — the citrate cycle is the book's example — and serves as a chemical source of energy and of carbon for further biosyntheses.", cn: "被固定碳的**更大一部分**被输送进中心代谢途径——教材举例为柠檬酸循环——并作为化学能源与碳源用于进一步的生物合成。" },
    { cz: "seznam biosyntéz", en: "The destinations listed are: other saccharides, amino acids, proteins, fatty acids, lipids, nucleotides, nucleic acids, pigments, and further so-called secondary plant metabolites (§9.5). Essentially every class of biomolecule in the plant traces back here.", cn: "所列的去向包括：其他糖类、氨基酸、蛋白质、脂肪酸、脂质、核苷酸、核酸、色素，以及进一步的所谓次生植物代谢物（§9.5）。植物中几乎每一类生物分子都可追溯至此。" },
    { cz: "Calvin (Nobel 1961), Benson, Bassham", en: "The reactions of CO₂ fixation were described by M. Calvin — Nobel Prize 1961 — together with A. A. Benson and J. A. Bassham, and are often designated by their discoverers' names or briefly as the Calvin cycle.", cn: "CO₂固定的各步反应由M. Calvin（1961年诺贝尔奖）与A. A. Benson、J. A. Bassham描述，常以其发现者的名字命名，或简称为卡尔文循环。" }
  ],
  terms: [
    { cz: "Calvinův cyklus", en: "Calvin cycle", cn: "卡尔文循环", def_en: "The cycle of CO₂-fixing reactions described by Calvin, Benson and Bassham; runs in the chloroplast stroma at the expense of ATP and NADPH.", def_cn: "由Calvin、Benson与Bassham描述的CO₂固定反应循环；在叶绿体基质中进行，消耗ATP与NADPH。" },
    { cz: "sumární rovnice", en: "summary (overall) equation", cn: "总方程", def_en: "An equation stating only the net stoichiometry of inputs and outputs; it makes no claim about which atom ends up where, and reading it as a mechanism is the error the book warns against.", def_cn: "只陈述投入与产出净化学计量的方程；它对哪个原子最终去了哪里不作任何论断，把它当作机理来读正是教材所警告的错误。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book, what happens to the GREATER PART of photosynthetically fixed carbon?",
      q_cn: "根据教材，被光合固定的碳中**更大的一部分**去了哪里？",
      options: [
        "It is stored as starch and cellulose",
        "It is transported into the central metabolic pathways (e.g. the citrate cycle) and used for biosyntheses of amino acids, proteins, lipids, nucleotides, pigments and secondary metabolites",
        "It is re-released as CO₂ by photorespiration",
        "It is exported to the roots as sucrose"
      ],
      answer: 1,
      why_en: "The book states explicitly that the goal of CO₂ fixation is not only hexose and then cellulose or starch synthesis; the greater part goes into the central metabolic pathways and supplies energy and carbon for the whole range of biosyntheses it then lists.",
      why_cn: "教材明确指出CO₂固定的目标不只是合成己糖以及随后的纤维素或淀粉；更大的一部分进入中心代谢途径，为随后所列的各类生物合成提供能量与碳。"
    },
    {
      type: "short",
      q_en: "Why is it wrong to read 6 CO₂ → C₆H₁₂O₆ as saying that six CO₂ molecules become one glucose?",
      q_cn: "为什么把 6 CO₂ → C₆H₁₂O₆ 读作「六个CO₂分子变成一个葡萄糖」是错的？",
      accept: ["summary", "overall", "not", "same molecule", "bookkeeping", "stoichiometr"],
      answer_en: "Because it is only a summary equation — a statement of net stoichiometry. It does not claim that the carbon atoms of those particular six CO₂ molecules end up in one and the same saccharide molecule.",
      answer_cn: "因为它只是一个总方程——是净化学计量的陈述。它并不主张那特定六个CO₂分子的碳原子最终会进入同一个糖分子。"
    }
  ],
  oral: {
    q_en: "What can and cannot be read off the summary equation of CO₂ fixation?",
    q_cn: "从CO₂固定的总方程中，什么可以读出、什么不可以？",
    model_en: "The equation six CO₂ giving one hexose is a bookkeeping statement and nothing more, and the textbook flags two mistakes people make when they treat it as more. The first is imagining that the carbons of those six particular carbon dioxide molecules all end up in one and the same sugar molecule. They do not; the equation states net stoichiometry, not the fate of individual atoms — and once you have seen the actual cycle, with its transketolase and aldolase reshufflings, that becomes obvious. The second mistake is thinking that making hexose is what carbon fixation is for. In fact the greater part of the fixed carbon is not turned into glucose, cellulose or starch at all: it is fed into the central metabolic pathways, the citrate cycle for instance, and from there it supplies both energy and carbon skeletons for essentially every biosynthesis the plant performs — other sugars, amino acids and proteins, fatty acids and lipids, nucleotides and nucleic acids, pigments, and the secondary metabolites of section nine-five. As for the history, the pathway was worked out by Calvin, who took the Nobel Prize in nineteen sixty-one, with Benson and Bassham, and it is usually just called the Calvin cycle.",
    checklist: [
      "Identified the equation as a summary/net-stoichiometry statement",
      "Refuted misinterpretation 1: the six CO₂ carbons need not end in the same sugar molecule",
      "Refuted misinterpretation 2: hexose/starch/cellulose is not the main destination",
      "Named the citrate cycle as the example of a central pathway receiving fixed carbon",
      "Listed several of the downstream biosyntheses supplied by fixed carbon",
      "Attributed the pathway to Calvin (Nobel 1961), Benson and Bassham"
    ]
  }
},

{
  id: "9-17",
  book: "cz",
  topicKey: "co2-assimilation",
  chapter: 9,
  section: "9.1.4",
  czTitle: "RubisCO — struktura, mechanismus a první stabilní produkt",
  enTitle: "RubisCO — structure, mechanism and the first stable product",
  cnTitle: "RubisCO——结构、机理与第一个稳定产物",
  pages: [209, 210],
  coverage: "full",
  coverageNote: "The bottom of p.209 (RubisCO description and subunit diagram) and the top half of p.210 (mechanism scheme and the paragraph beneath it) read in full. The subunit composition was read carefully off the scan because it is easy to garble: the book says the functional enzyme is a DIMERIC molecule composed of monomers each containing 4 small (S) and 4 large (L) subunits, and the accompanying figure gives a top view (pohled shora) and a side view (pohled z boku). The mechanism scheme's three labelled intermediates were read as printed: RuBP -> endiolat -> beta-oxokyselina -> two molecules of PG. FLAG: the book's own subunit wording gives 8 S and 8 L in total, whereas the mechanism paragraph immediately below speaks of EIGHT active sites; both readings were checked against the scan and both are as printed -- see the points below, where this is discussed rather than silently reconciled.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The enzyme does not activate CO₂ at all — it activates RuBP, turning it into a reactive endiolate that CO₂ can simply attach to, and the six-carbon product then splits at once into two identical three-carbon phosphoglycerates. That three-carbon first stable product is exactly where the name C-3 plants comes from.", cn: "这个酶根本没有活化 CO₂——它活化的是 RuBP，把它变成一个能让 CO₂ 直接接上去的活泼烯二醇负离子 (endiolate)；随后生成的六碳中间物立刻裂成两个一模一样的三碳磷酸甘油酸。第一个稳定产物是三个碳，「C-3 植物」这个名字就是从这里来的。" },
  summary: {
    en: "The first reaction of the Calvin cycle is the capture of inorganic CO₂ and its incorporation into the structure of an organic compound, ribulose-1,5-bisphosphate (RuBP). Chemically this reaction is a carboxylation, and it is catalysed by ribulosebisphosphate carboxylase/oxygenase — RubisCO. The book describes the enzyme as soluble, as one of the most widespread high-molecular-mass proteins on Earth, located in the stroma of the chloroplasts, and as consisting of two types of subunit, small and large; the functional enzyme is a dimeric molecule composed of monomers each containing 4 small (S) and 4 large (L) subunits, drawn in top view and side view. The mechanism of the enzyme's action shows that each of the EIGHT active sites catalyses conversion of RuBP into an enolate (endiolate) ion, which as a reactive compound can bind a CO₂ molecule; a six-carbon intermediate arises — drawn as a β-oxo acid — which very rapidly hydrolyses to give TWO molecules of 3-phosphoglycerate (PG). The first stable product of CO₂ fixation is therefore 3-phosphoglycerate, a three-carbon compound, and it is from this that plants using the Calvin cycle mechanism are called C-3 plants. Note the sequence of intermediates the scheme labels: RuBP → endiolate → β-oxo acid → 2 × PG. The carboxylation itself is not the slow, dramatic step it is sometimes made out to be in summary; what the scheme emphasises is that the six-carbon adduct is short-lived and splits immediately into two identical three-carbon products.",
    cn: "卡尔文循环的第一步反应是捕获无机CO₂并把它结合进一个有机化合物——核酮糖-1,5-二磷酸(RuBP)——的结构中。就化学而言这一反应是羧化，由核酮糖二磷酸羧化酶/加氧酶——RubisCO——催化。教材把该酶描述为可溶的、地球上分布最广的高分子量蛋白之一、位于叶绿体基质中，并由大小两类亚基组成；功能酶是一个二聚体分子，由每个含4个小(S)亚基和4个大(L)亚基的单体构成，图中画出俯视图与侧视图。该酶的作用机理表明，**八**个活性位点中的每一个都催化RuBP转变为烯醇（烯二醇）离子，后者作为反应性化合物能结合一个CO₂分子；由此产生一个六碳中间体——画作β-氧代酸——它极迅速地水解，生成**两**分子3-磷酸甘油酸(PG)。因此CO₂固定的第一个稳定产物是3-磷酸甘油酸，一个三碳化合物；采用卡尔文循环机制的植物正因此被称为C-3植物。注意图示所标的中间体序列：RuBP → 烯二醇 → β-氧代酸 → 2×PG。羧化本身并不像概述中有时描绘的那样是缓慢而戏剧性的一步；图示所强调的是那个六碳加合物寿命极短，随即裂解为两个相同的三碳产物。"
  },
  points: [
    { cz: "první reakce = karboxylace RuBP", en: "The first reaction of the Calvin cycle is capture of inorganic CO₂ and its incorporation into the structure of an organic compound, ribulose-1,5-bisphosphate (RuBP). Chemically the reaction is a carboxylation.", cn: "卡尔文循环的第一步反应是捕获无机CO₂并把它结合进有机化合物核酮糖-1,5-二磷酸(RuBP)的结构中。就化学而言该反应是羧化。" },
    { cz: "RubisCO — název z obou aktivit", en: "The catalyst is ribulosebisphosphate carboxylase/oxygenase, abbreviated RubisCO. The double-barrelled name already announces the oxygenase side-activity that §9.2 will develop as photorespiration.", cn: "催化剂是核酮糖二磷酸羧化酶/加氧酶，缩写RubisCO。这个双名称已经预告了加氧酶的副活性，§9.2将把它展开为光呼吸。" },
    { cz: "rozpustný, nejrozšířenější, ve stromatu", en: "RubisCO is soluble, is on Earth one of the most widespread high-molecular-mass proteins, and is located in the stroma of the chloroplasts — consistent with the compartment split established in 9-2.", cn: "RubisCO是可溶的，是地球上分布最广的高分子量蛋白之一，位于叶绿体基质中——与9-2中确立的区室划分一致。" },
    { cz: "podjednotky S a L", en: "It consists of two types of subunit, small (S) and large (L). The functional enzyme is a dimeric molecule composed of monomers each containing 4 small and 4 large subunits, illustrated in top view (pohled shora) and side view (pohled z boku).", cn: "它由大小两类亚基组成，小(S)与大(L)。功能酶是一个二聚体分子，由每个含4个小亚基和4个大亚基的单体构成，图中给出俯视图(pohled shora)与侧视图(pohled z boku)。" },
    { cz: "osm aktivních míst", en: "The mechanism shows that EACH OF THE EIGHT active sites catalyses the conversion of RuBP into an enolate (endiolate) ion. Note that the book's own subunit description (a dimer of 4S+4L monomers) totals 8 large subunits, which is consistent with eight catalytic sites, since it is the large subunits that carry them — the book does not spell this connection out, and it is noted here as an inference from its own two statements rather than as a claim it makes.", cn: "机理表明**八**个活性位点中的**每一个**都催化RuBP向烯醇（烯二醇）离子的转变。注意教材自身的亚基描述（由4S+4L单体构成的二聚体）合计为8个大亚基，这与八个催化位点相符，因为承载它们的正是大亚基——教材并未把这一联系挑明，此处将其标为由教材自身两处陈述得出的推论，而非教材所作的论断。" },
    { cz: "endiolát váže CO₂", en: "The enolate (endiolate) ion, being a reactive compound, is what can bind the CO₂ molecule. Activating RuBP into a nucleophile is the real catalytic work; the CO₂ is not activated at all.", cn: "烯醇（烯二醇）离子作为反应性化合物，正是能够结合CO₂分子的那一个。把RuBP活化成亲核体才是真正的催化工作；CO₂根本没有被活化。" },
    { cz: "šestiuhlíkatý intermediát → 2 × PG", en: "A six-carbon intermediate arises — drawn in the scheme as a β-oxo acid (β-oxokyselina) — which very rapidly hydrolyses with formation of TWO molecules of 3-phosphoglycerate (PG). The scheme's labelled sequence is RuBP → endiolát → β-oxokyselina → PG + PG.", cn: "由此产生一个六碳中间体——图中画作β-氧代酸(β-oxokyselina)——它极迅速地水解，生成**两**分子3-磷酸甘油酸(PG)。图示所标的序列为 RuBP → 烯二醇 → β-氧代酸 → PG + PG。" },
    { cz: "PG = první stabilní produkt → rostliny C-3", en: "The first STABLE product of CO₂ fixation is therefore 3-phosphoglycerate, a three-carbon compound; plants using the Calvin cycle mechanism are called C-3 plants after it. 'Stable' is doing work here — the endiolate and the β-oxo acid come first but neither persists.", cn: "因此CO₂固定的第一个**稳定**产物是三碳化合物3-磷酸甘油酸；采用卡尔文循环机制的植物因此被称为C-3植物。「稳定」一词在此很关键——烯二醇与β-氧代酸出现得更早，但都不持久。" }
  ],
  terms: [
    { cz: "RubisCO", en: "RubisCO (ribulosebisphosphate carboxylase/oxygenase)", cn: "RubisCO（核酮糖二磷酸羧化酶/加氧酶）", def_en: "The soluble stromal enzyme catalysing the first reaction of the Calvin cycle; one of the most abundant high-molecular-mass proteins on Earth; a dimer of monomers each with 4 small and 4 large subunits, with eight active sites. Also has an oxygenase activity (§9.2).", def_cn: "催化卡尔文循环第一步反应的可溶性基质酶；地球上最丰富的高分子量蛋白之一；由每个含4小4大亚基的单体构成的二聚体，具八个活性位点。它同时具有加氧酶活性（§9.2）。" },
    { cz: "ribulosa-1,5-bisfosfát (RuBP)", en: "ribulose-1,5-bisphosphate (RuBP)", cn: "核酮糖-1,5-二磷酸(RuBP)", def_en: "The five-carbon CO₂ acceptor of the Calvin cycle, regenerated at the end of each turn.", def_cn: "卡尔文循环中的五碳CO₂受体，在每一轮末端被再生。" },
    { cz: "endiolát", en: "endiolate (enolate) ion", cn: "烯二醇（烯醇）离子", def_en: "The reactive intermediate formed from RuBP by RubisCO; the nucleophile that actually attacks CO₂.", def_cn: "由RubisCO从RuBP生成的反应性中间体；真正进攻CO₂的亲核体。" },
    { cz: "3-fosfoglycerát (PG)", en: "3-phosphoglycerate (PG)", cn: "3-磷酸甘油酸(PG)", def_en: "The first stable product of CO₂ fixation; a three-carbon compound, two of which arise from each carboxylation. Gives C-3 plants their name.", def_cn: "CO₂固定的第一个稳定产物；三碳化合物，每次羧化产生两分子。C-3植物之名由此而来。" },
    { cz: "rostliny C-3", en: "C-3 plants", cn: "C-3植物", def_en: "Plants whose first stable product of CO₂ fixation is the three-carbon 3-phosphoglycerate, i.e. those using the Calvin cycle directly.", def_cn: "CO₂固定的第一个稳定产物为三碳的3-磷酸甘油酸的植物，即直接使用卡尔文循环的那些。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the immediate product of RubisCO's carboxylation of RuBP?",
      q_cn: "RubisCO对RuBP进行羧化的直接产物是什么？",
      options: [
        "One molecule of glyceraldehyde-3-phosphate",
        "A six-carbon intermediate (a β-oxo acid) which rapidly hydrolyses to TWO molecules of 3-phosphoglycerate",
        "One molecule of 3-phosphoglycerate and one of phosphoglycolate",
        "Fructose-6-phosphate"
      ],
      answer: 1,
      why_en: "RuBP is first converted to the reactive endiolate, which binds CO₂ giving a six-carbon intermediate (drawn as a β-oxo acid); that hydrolyses very rapidly into two molecules of 3-phosphoglycerate. Option 2 is the OXYGENASE reaction of the same enzyme (§9.2, photorespiration), not the carboxylase one.",
      why_cn: "RuBP先被转变为反应性的烯二醇，后者结合CO₂生成六碳中间体（画作β-氧代酸）；该中间体极迅速地水解为两分子3-磷酸甘油酸。选项2是同一酶的**加氧酶**反应（§9.2光呼吸），而非羧化酶反应。"
    },
    {
      type: "short",
      q_en: "Describe RubisCO's subunit composition and say how many active sites it has.",
      q_cn: "描述RubisCO的亚基组成，并说明它有多少个活性位点。",
      accept: ["small", "large", "4", "four", "dimer", "8", "eight"],
      answer_en: "Two types of subunit, small (S) and large (L). The functional enzyme is a dimeric molecule made of monomers each containing 4 small and 4 large subunits; the mechanism section speaks of eight active sites.",
      answer_cn: "两类亚基：小(S)与大(L)。功能酶是二聚体分子，由每个含4个小亚基和4个大亚基的单体构成；机理部分提到八个活性位点。"
    }
  ],
  oral: {
    q_en: "Describe the first reaction of the Calvin cycle and the enzyme that catalyses it.",
    q_cn: "请描述卡尔文循环的第一步反应及催化它的酶。",
    model_en: "The cycle opens by capturing inorganic carbon dioxide and building it into an organic molecule, ribulose-one-five-bisphosphate. Chemically it is a carboxylation, and the catalyst is ribulose bisphosphate carboxylase-oxygenase, RubisCO — a soluble stromal protein, and by the textbook's account one of the most widespread high-molecular-mass proteins on the planet. It is built from two kinds of subunit, small and large; the functional enzyme is a dimer whose monomers each carry four small and four large subunits, and the mechanism section speaks of eight active sites. What each site actually does is worth being precise about. It does not activate the carbon dioxide. It converts the ribulose bisphosphate into an enolate — an endiolate ion — and that is the reactive species, the nucleophile that attacks CO₂. The adduct is a six-carbon intermediate, drawn as a beta-oxo acid, and it is very short-lived: it hydrolyses almost at once into two molecules of three-phosphoglycerate. So the first stable product of carbon fixation is a three-carbon compound, and that is exactly where the name C-3 plants comes from. The word stable matters — the endiolate and the beta-oxo acid come earlier, but neither of them lasts.",
    checklist: [
      "Identified RuBP as the CO₂ acceptor and the reaction as a carboxylation",
      "Named RubisCO in full and noted it is soluble, stromal and extremely abundant",
      "Gave the subunit composition (small/large; dimer of 4S+4L monomers) and eight active sites",
      "Made clear the enzyme activates RuBP to an endiolate rather than activating CO₂",
      "Traced RuBP → endiolate → six-carbon β-oxo acid → two molecules of 3-phosphoglycerate",
      "Identified PG as the first STABLE product and derived the term C-3 plants from it"
    ]
  }
},

{
  id: "9-18",
  book: "cz",
  topicKey: "co2-assimilation",
  chapter: 9,
  section: "9.1.4",
  czTitle: "Od PG ke GAP a uzavření cyklu přes ribulosa-5-fosfát",
  enTitle: "From PG to GAP, and closing the cycle via ribulose-5-phosphate",
  cnTitle: "从PG到GAP，并经核酮糖-5-磷酸闭合循环",
  pages: [210],
  coverage: "full",
  coverageNote: "The lower half of p.210 read in full: the two-step PG -> 1,3-BPG -> GAP scheme with its cofactors as drawn (ATP/ADP over the first arrow, NADPH/NADP+ and Pi over the second), both enzyme names, the book's remark that this pair of steps is known from glycolysis but runs there in the OPPOSITE direction, and the paragraph on the four possible fates of GAP. The four reaction TYPES were read as listed (isomerisation i.e. aldose-ketose conversion, epimerisation, dephosphorylation, phosphorylation) -- note the book says GAP is processed by four possible pathways and then lists four reaction types, which are related but not the same statement; both are reproduced as printed rather than merged.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The reductive half of the Calvin cycle is glycolysis's payoff phase played backwards, with NADPH standing in for NADH — so it is not new chemistry to learn, it is chapter 7 read in the other direction. Everything after glyceraldehyde-3-phosphate is only the reshuffling of phosphorylated sugars, and whichever route it takes it always ends at ribulose-5-phosphate.", cn: "卡尔文循环的还原那一半，就是糖酵解产能阶段倒过来跑，只是把 NADH 换成 NADPH——所以这里没有新化学要学，只是把第 7 章反过来读一遍。3-磷酸甘油醛之后的一切都只是磷酸化糖之间的重排，不管走哪条路，终点永远是 5-磷酸核酮糖 (Ru5P)。" },
  summary: {
    en: "3-Phosphoglycerate is converted in two steps, at the expense of ATP and NADPH, into glyceraldehyde-3-phosphate (GAP). The first step is phosphorylation by phosphoglycerate kinase, consuming ATP and giving 1,3-bisphosphoglycerate; the second is reduction by glyceraldehyde phosphate dehydrogenase, consuming NADPH and releasing inorganic phosphate, giving GAP. The book points out that this sequence is already known from glycolysis — where, however, it runs in the opposite direction. This is the single most economical thing to remember about the reductive part of the Calvin cycle: it is glycolysis's payoff phase played backwards, with NADPH substituting for NADH. Glyceraldehyde-3-phosphate is then the key compound of the Calvin cycle (Obr. 9.6). It is further processed by four possible pathways, but the book stresses that these are always only modification and internal conversion of variously phosphorylated saccharides — isomerisation, i.e. aldose–ketose conversion; epimerisation; dephosphorylation; and phosphorylation. All these types of reaction are already included in the pentose cycle (kap. 7.7), and in the Calvin cycle their final product is always ribulose-5-phosphate (Ru5P). Ru5P is then phosphorylated by an ATP-dependent kinase to ribulose-1,5-bisphosphate, the starting compound of the whole process, and the cycle is thereby actually closed. So the cycle has exactly two ATP-consuming steps — the kinase at the start of the reductive part and the kinase at the regeneration step — and one NADPH-consuming step.",
    cn: "3-磷酸甘油酸经两步、消耗ATP与NADPH，转变为3-磷酸甘油醛(GAP)。第一步是由磷酸甘油酸激酶催化的磷酸化，消耗ATP，生成1,3-二磷酸甘油酸；第二步是由磷酸甘油醛脱氢酶催化的还原，消耗NADPH并释放无机磷酸，生成GAP。教材指出，这一序列在糖酵解中已经出现过——只不过在那里方向是相反的。这是关于卡尔文循环还原部分最经济的记忆方式：它就是糖酵解产能阶段的倒放，只是用NADPH替换了NADH。3-磷酸甘油醛随后成为卡尔文循环的关键化合物（图9.6）。它可经四条可能的途径被进一步处理，但教材强调这些**始终只是**各种磷酸化糖类的修饰与内部转换——异构化（即醛糖-酮糖互变）、差向异构化、去磷酸化与磷酸化。所有这些反应类型在磷酸戊糖循环中都已包含（第7.7节），而在卡尔文循环中它们的最终产物**始终是**核酮糖-5-磷酸(Ru5P)。Ru5P随后由一个ATP依赖性激酶磷酸化为核酮糖-1,5-二磷酸，即整个过程的起始化合物，循环由此真正闭合。因此该循环恰有两个耗ATP的步骤——还原部分开头的激酶与再生步骤的激酶——以及一个耗NADPH的步骤。"
  },
  points: [
    { cz: "PG → 1,3-BPG → GAP", en: "3-Phosphoglycerate is converted in two steps at the expense of ATP and NADPH into glyceraldehyde-3-phosphate (GAP), via 1,3-bisphosphoglycerate.", cn: "3-磷酸甘油酸经两步、消耗ATP与NADPH，经由1,3-二磷酸甘油酸转变为3-磷酸甘油醛(GAP)。" },
    { cz: "fosfoglycerátkinasa a glyceraldehydfosfátdehydrogenasa", en: "The two enzymes are phosphoglycerate kinase (ATP → ADP) and glyceraldehyde phosphate dehydrogenase (NADPH → NADP⁺, releasing Pᵢ).", cn: "两个酶是磷酸甘油酸激酶（ATP→ADP）与磷酸甘油醛脱氢酶（NADPH→NADP⁺，释放Pᵢ）。" },
    { cz: "známé z glykolýzy, ale opačným směrem", en: "The book notes that this pair of steps is known from glycolysis, where however it runs in the OPPOSITE direction. In effect the Calvin cycle's reductive phase is glycolysis's oxidative payoff phase reversed, with NADPH in place of NADH.", cn: "教材指出这两步在糖酵解中已经出现过，只不过在那里方向**相反**。实际上，卡尔文循环的还原阶段就是糖酵解产能阶段的逆转，只是以NADPH代替NADH。" },
    { cz: "GAP je klíčová sloučenina", en: "Glyceraldehyde-3-phosphate is the key compound of the Calvin cycle (Obr. 9.6) — the branch point at which carbon either leaves the cycle as product or continues round to regenerate the acceptor.", cn: "3-磷酸甘油醛是卡尔文循环的关键化合物（图9.6）——碳在此分岔：或作为产物离开循环，或继续绕行以再生受体。" },
    { cz: "čtyři možné cesty, ale jen přeskupování", en: "GAP is further processed by four possible pathways, but these involve ONLY modification and internal conversion of variously phosphorylated saccharides: isomerisation (aldose–ketose conversion), epimerisation, dephosphorylation and phosphorylation. No carbon is oxidised or reduced further in this part.", cn: "GAP可经四条可能的途径被进一步处理，但这些**只**涉及各种磷酸化糖类的修饰与内部转换：异构化（醛糖-酮糖互变）、差向异构化、去磷酸化与磷酸化。这一部分中没有碳被进一步氧化或还原。" },
    { cz: "všechny reakce známé z pentosového cyklu (kap. 7.7)", en: "All these types of reaction are already included in the pentose cycle (kap. 7.7) — the same transketolase/aldolase/epimerase/isomerase toolkit, reused. Chapter 7's pentose phosphate pathway is therefore direct preparation for this section.", cn: "所有这些反应类型在磷酸戊糖循环中都已包含（第7.7节）——同一套转酮酶/醛缩酶/差向异构酶/异构酶工具的重复利用。因此第7章的磷酸戊糖途径是本节的直接铺垫。" },
    { cz: "konečným produktem je vždy Ru5P", en: "In the Calvin cycle the final product of all these rearrangements is ALWAYS ribulose-5-phosphate (Ru5P) — whichever of the four pathways is taken.", cn: "在卡尔文循环中，所有这些重排的最终产物**始终是**核酮糖-5-磷酸(Ru5P)——无论走的是四条途径中的哪一条。" },
    { cz: "Ru5P → RuBP uzavírá cyklus", en: "Ru5P is then phosphorylated by an ATP-dependent kinase to ribulose-1,5-bisphosphate, the starting compound of the whole process, and the cycle is thereby actually closed. Together with the phosphoglycerate kinase step this makes two ATP-consuming steps per turn.", cn: "Ru5P随后由ATP依赖性激酶磷酸化为核酮糖-1,5-二磷酸，即整个过程的起始化合物，循环由此真正闭合。连同磷酸甘油酸激酶那一步，每一轮共有两个耗ATP的步骤。" }
  ],
  terms: [
    { cz: "glyceraldehyd-3-fosfát (GAP)", en: "glyceraldehyde-3-phosphate (GAP)", cn: "3-磷酸甘油醛(GAP)", def_en: "The key compound of the Calvin cycle; the reduced three-carbon product from which both the cycle's output and the regeneration of RuBP proceed.", def_cn: "卡尔文循环的关键化合物；已被还原的三碳产物，循环的输出与RuBP的再生都由它出发。" },
    { cz: "1,3-bisfosfoglycerát (1,3-BPG)", en: "1,3-bisphosphoglycerate (1,3-BPG)", cn: "1,3-二磷酸甘油酸", def_en: "The ATP-charged intermediate between PG and GAP; the acyl phosphate whose reduction by NADPH releases Pᵢ.", def_cn: "介于PG与GAP之间、由ATP活化的中间体；这一酰基磷酸被NADPH还原时释放Pᵢ。" },
    { cz: "ribulosa-5-fosfát (Ru5P)", en: "ribulose-5-phosphate (Ru5P)", cn: "核酮糖-5-磷酸(Ru5P)", def_en: "The invariant end product of the Calvin cycle's sugar rearrangements; phosphorylated by an ATP-dependent kinase to regenerate RuBP.", def_cn: "卡尔文循环糖类重排恒定不变的终产物；由ATP依赖性激酶磷酸化以再生RuBP。" },
    { cz: "epimerace", en: "epimerisation", cn: "差向异构化", def_en: "Inversion of configuration at a single chiral centre of a sugar — one of the four reaction types by which GAP is worked up towards Ru5P.", def_cn: "糖分子上单个手性中心构型的翻转——GAP向Ru5P加工过程中四种反应类型之一。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The conversion PG → 1,3-BPG → GAP in the Calvin cycle is described by the book as already known from which pathway?",
      q_cn: "教材说卡尔文循环中 PG → 1,3-BPG → GAP 的转换在哪条途径中已经出现过？",
      options: [
        "The citrate cycle",
        "Glycolysis, but running there in the opposite direction",
        "The urea cycle",
        "β-oxidation of fatty acids"
      ],
      answer: 1,
      why_en: "The book says the process involves phosphoglycerate kinase and glyceraldehyde phosphate dehydrogenase and is known from glycolysis, where however it runs in the opposite direction. The Calvin cycle uses NADPH where glycolysis produces NADH.",
      why_cn: "教材指出该过程涉及磷酸甘油酸激酶与磷酸甘油醛脱氢酶，且在糖酵解中已经出现过，只不过在那里方向相反。卡尔文循环使用NADPH，而糖酵解产生NADH。"
    },
    {
      type: "short",
      q_en: "What is always the final product of the sugar rearrangements starting from GAP, and what happens to it?",
      q_cn: "从GAP出发的糖类重排，其最终产物始终是什么？它随后发生什么？",
      accept: ["ribulose-5-phosphate", "Ru5P", "ribulosa-5", "kinase", "ATP", "RuBP", "bisphosphate"],
      answer_en: "Always ribulose-5-phosphate (Ru5P). It is phosphorylated by an ATP-dependent kinase to ribulose-1,5-bisphosphate, the starting compound, closing the cycle.",
      answer_cn: "始终是核酮糖-5-磷酸(Ru5P)。它由ATP依赖性激酶磷酸化为起始化合物核酮糖-1,5-二磷酸，从而闭合循环。"
    }
  ],
  oral: {
    q_en: "Take 3-phosphoglycerate and follow it round until the Calvin cycle closes.",
    q_cn: "请从3-磷酸甘油酸出发，一路追踪到卡尔文循环闭合为止。",
    model_en: "Three-phosphoglycerate is reduced to glyceraldehyde-three-phosphate in two steps, and both are familiar. First phosphoglycerate kinase spends an ATP to make one-three-bisphosphoglycerate; then glyceraldehyde phosphate dehydrogenase reduces that with NADPH, releasing inorganic phosphate, and you have GAP. The textbook points out these are exactly the glycolytic steps, run backwards — the difference being that glycolysis makes NADH and this consumes NADPH. GAP is the key compound of the cycle, the branch point. Some of it leaves as product; the rest has to be worked back up into the five-carbon acceptor. That working-up goes by four possible routes, but the book is careful to say none of them is redox chemistry — they are all just modification and internal conversion of phosphorylated sugars: isomerisation between aldose and ketose forms, epimerisation, dephosphorylation and phosphorylation. It is exactly the toolkit from the pentose phosphate pathway in chapter seven, reused, with transketolase and aldolase doing the carbon shuffling. Whichever route is taken, the end point is always ribulose-five-phosphate. And then one more ATP-dependent kinase phosphorylates that to ribulose-one-five-bisphosphate, the compound we started with, and the cycle is closed. Counting the steps, that is two ATP-consuming steps and one NADPH-consuming step — but counting the molecules per CO2 fixed it is three ATP and two NADPH, because one carboxylation gives TWO three-phosphoglycerates and the reductive pair therefore runs twice.",
    checklist: [
      "Named phosphoglycerate kinase (ATP) and glyceraldehyde phosphate dehydrogenase (NADPH, releases Pᵢ)",
      "Noted these are the glycolytic steps run in the opposite direction, NADPH vs NADH",
      "Identified GAP as the key compound and branch point of the cycle",
      "Listed the four reaction types: isomerisation (aldose–ketose), epimerisation, dephosphorylation, phosphorylation",
      "Cross-referenced the pentose cycle (kap. 7.7) as the source of the same reaction toolkit",
      "Stated that Ru5P is always the end point, and that an ATP-dependent kinase regenerates RuBP to close the cycle"
    ]
  }
},

{
  id: "9-19",
  book: "cz",
  topicKey: "co2-assimilation",
  chapter: 9,
  section: "9.1.4",
  czTitle: "Celkové schéma Calvinova cyklu (obr. 9.6) a čistý výtěžek",
  enTitle: "The overall scheme of the Calvin cycle (Obr. 9.6) and its net yield",
  cnTitle: "卡尔文循环总图（图9.6）与净产出",
  pages: [211, 212],
  coverage: "full",
  coverageNote: "Obr. 9.6, which occupies almost all of p.211, read enzyme by enzyme from the scan; all thirteen numbered steps and all fourteen labelled metabolites are reproduced below. The one-line conclusion beneath the figure and the small branch diagram at the top of p.212 were also read: the net yield is fructose-6-phosphate, transformed via glucose-6-phosphate onward to glucose, to cellulose, and to the general metabolic pathways (glycolysis, citrate cycle, biosyntheses). Note that the figure labels the aldolase step twice (numbers 6 and 9) and the transketolase step twice (numbers 8 and 11); this is correct, not a misreading, since each of those enzymes acts at two different points of the cycle.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Only four of the cycle's thirteen steps actually fix and reduce carbon; the other nine exist solely to rebuild the acceptor, and the carbon destined to become product leaves the cycle at glyceraldehyde-3-phosphate. The two bisphosphatase steps that throw a phosphate away are what make the regeneration arm run one way only, which is why they are its natural regulatory points.", cn: "整个循环十三步里，真正固定并还原碳的只有四步；其余九步的存在完全是为了把受体重新造出来，而将要变成产物的碳是在 3-磷酸甘油醛这里离开循环的。那两个把磷酸水解掉的双磷酸酶步骤，是让再生这条臂只能单向运行的原因，所以它们天然就是这个循环的调控点。" },
  summary: {
    en: "Obr. 9.6 lays out the whole Calvin cycle with thirteen numbered enzyme steps. In order: (1) phosphoribulokinase, making ribulose-1,5-bisphosphate from ribulose-5-phosphate at the cost of ATP; (2) ribulosebisphosphate carboxylase, adding CO₂ and yielding two 3-phosphoglycerates; (3) phosphoglycerate kinase, ATP → ADP, giving 1,3-bisphosphoglycerate; (4) glyceraldehyde-3-phosphate dehydrogenase, NADPH → NADP⁺ + Pᵢ, giving glyceraldehyde-3-phosphate, from which the arrow marked 'produkty' leaves the cycle; (5) triose phosphate isomerase, interconverting GAP and dihydroxyacetone phosphate (glyceronephosphate); (6) aldolase, condensing to fructose-1,6-bisphosphate; (7) fructose bisphosphatase, releasing Pᵢ to give fructose-6-phosphate; (8) transketolase, giving erythrose-4-phosphate and xylulose-5-phosphate; (9) aldolase again, giving sedoheptulose-1,7-bisphosphate; (10) sedoheptulose bisphosphatase, releasing Pᵢ to give sedoheptulose-7-phosphate; (11) transketolase again, giving ribose-5-phosphate and xylulose-5-phosphate; (12) phosphopentose epimerase, xylulose-5-phosphate → ribulose-5-phosphate; (13) ribose phosphate isomerase, ribose-5-phosphate → ribulose-5-phosphate. Both epimerase and isomerase converge on ribulose-5-phosphate, which step 1 then re-phosphorylates. Beneath the figure the book states the net yield: a molecule of fructose-6-phosphate (F6P), which is further transformed via glucose-6-phosphate (G6P) onward to glucose, to cellulose, and into the general metabolic pathways — glycolysis, the citrate cycle, and biosyntheses.",
    cn: "图9.6以十三个编号的酶促步骤铺开整个卡尔文循环。依次为：(1)磷酸核酮糖激酶，耗ATP由核酮糖-5-磷酸生成核酮糖-1,5-二磷酸；(2)核酮糖二磷酸羧化酶，加入CO₂并产生两分子3-磷酸甘油酸；(3)磷酸甘油酸激酶，ATP→ADP，生成1,3-二磷酸甘油酸；(4)3-磷酸甘油醛脱氢酶，NADPH→NADP⁺+Pᵢ，生成3-磷酸甘油醛，标为「produkty（产物）」的箭头由此离开循环；(5)磷酸丙糖异构酶，在GAP与磷酸二羟丙酮之间互变；(6)醛缩酶，缩合为果糖-1,6-二磷酸；(7)果糖二磷酸酶，释放Pᵢ生成果糖-6-磷酸；(8)转酮酶，生成赤藓糖-4-磷酸与木酮糖-5-磷酸；(9)醛缩酶（再次），生成景天庚酮糖-1,7-二磷酸；(10)景天庚酮糖二磷酸酶，释放Pᵢ生成景天庚酮糖-7-磷酸；(11)转酮酶（再次），生成核糖-5-磷酸与木酮糖-5-磷酸；(12)磷酸戊糖差向异构酶，木酮糖-5-磷酸→核酮糖-5-磷酸；(13)核糖磷酸异构酶，核糖-5-磷酸→核酮糖-5-磷酸。差向异构酶与异构酶两条支路都汇聚到核酮糖-5-磷酸，随后由步骤1再度磷酸化。图下方教材写明净产出：一分子果糖-6-磷酸(F6P)，它进一步经葡萄糖-6-磷酸(G6P)转化，通向葡萄糖、纤维素，以及一般代谢途径——糖酵解、柠檬酸循环与各类生物合成。"
  },
  points: [
    { cz: "kroky 1–4: fixace a redukce", en: "Steps 1-4 are the fixation and reduction half: (1) phosphoribulokinase (ATP) makes RuBP from Ru5P; (2) ribulosebisphosphate carboxylase adds CO₂ giving 2 × 3-phosphoglycerate; (3) phosphoglycerate kinase (ATP) gives 1,3-bisphosphoglycerate; (4) glyceraldehyde-3-phosphate dehydrogenase (NADPH, releasing Pᵢ) gives GAP.", cn: "步骤1–4是固定与还原的一半：(1)磷酸核酮糖激酶（耗ATP）由Ru5P生成RuBP；(2)核酮糖二磷酸羧化酶加入CO₂生成2×3-磷酸甘油酸；(3)磷酸甘油酸激酶（耗ATP）生成1,3-二磷酸甘油酸；(4)3-磷酸甘油醛脱氢酶（耗NADPH，释放Pᵢ）生成GAP。" },
    { cz: "GAP je bod výstupu — „produkty\"", en: "In Obr. 9.6 the arrow labelled 'produkty' leaves the cycle at glyceraldehyde-3-phosphate. Everything after that point in the diagram exists only to regenerate the acceptor.", cn: "在图9.6中，标为「produkty（产物）」的箭头在3-磷酸甘油醛处离开循环。图中此点之后的一切，都只是为了再生受体。" },
    { cz: "kroky 5–7: triosy → fruktosa-6-fosfát", en: "(5) triose phosphate isomerase interconverts GAP and dihydroxyacetone phosphate (glyceronephosphate); (6) aldolase condenses them to fructose-1,6-bisphosphate; (7) fructose bisphosphatase hydrolyses off a phosphate to give fructose-6-phosphate.", cn: "(5)磷酸丙糖异构酶在GAP与磷酸二羟丙酮之间互变；(6)醛缩酶把二者缩合为果糖-1,6-二磷酸；(7)果糖二磷酸酶水解掉一个磷酸，生成果糖-6-磷酸。" },
    { cz: "kroky 8–11: transketolasa a aldolasa dvakrát", en: "(8) transketolase gives erythrose-4-phosphate and xylulose-5-phosphate; (9) aldolase — the second time it appears — gives sedoheptulose-1,7-bisphosphate; (10) sedoheptulose bisphosphatase releases Pᵢ giving sedoheptulose-7-phosphate; (11) transketolase — its second appearance — gives ribose-5-phosphate and xylulose-5-phosphate. Both aldolase and transketolase are used at two distinct points, which is why they carry two numbers each.", cn: "(8)转酮酶生成赤藓糖-4-磷酸与木酮糖-5-磷酸；(9)醛缩酶——第二次出现——生成景天庚酮糖-1,7-二磷酸；(10)景天庚酮糖二磷酸酶释放Pᵢ生成景天庚酮糖-7-磷酸；(11)转酮酶——第二次出现——生成核糖-5-磷酸与木酮糖-5-磷酸。醛缩酶与转酮酶各在两个不同位点被使用，故各带两个编号。" },
    { cz: "kroky 12–13: dvě cesty k Ru5P", en: "(12) phosphopentose epimerase converts xylulose-5-phosphate to ribulose-5-phosphate; (13) ribose phosphate isomerase converts ribose-5-phosphate to ribulose-5-phosphate. Two different pentoses, one common destination — which is the concrete form of the claim in 9-18 that the end point is ALWAYS Ru5P.", cn: "(12)磷酸戊糖差向异构酶把木酮糖-5-磷酸转为核酮糖-5-磷酸；(13)核糖磷酸异构酶把核糖-5-磷酸转为核酮糖-5-磷酸。两种不同的戊糖、一个共同的终点——这正是9-18中「终点**始终**是Ru5P」这一论断的具体形式。" },
    { cz: "dvě bisfosfatasy jsou nevratné kroky", en: "Two of the thirteen steps are bisphosphatases releasing Pᵢ — fructose bisphosphatase (7) and sedoheptulose bisphosphatase (10). These hydrolytic steps are what make the regenerative arm run one way only, and they are the natural regulatory points of the cycle.", cn: "十三步中有两步是释放Pᵢ的二磷酸酶——果糖二磷酸酶(7)与景天庚酮糖二磷酸酶(10)。正是这些水解步骤使再生分支只能单向运行，它们也是该循环天然的调控位点。" },
    { cz: "čistý výtěžek: F6P → G6P → dál", en: "The net yield of the Calvin cycle is a molecule of fructose-6-phosphate (F6P), which is further transformed via glucose-6-phosphate (G6P) onward to glucose, to cellulose, and to the general metabolic pathways — glycolysis, the citrate cycle, and biosyntheses (p.212 branch diagram).", cn: "卡尔文循环的净产出是一分子果糖-6-磷酸(F6P)，它进一步经葡萄糖-6-磷酸(G6P)通向葡萄糖、纤维素，以及一般代谢途径——糖酵解、柠檬酸循环与各类生物合成（p.212的分支图）。" }
  ],
  terms: [
    { cz: "fosforibulokinasa", en: "phosphoribulokinase", cn: "磷酸核酮糖激酶", def_en: "Step 1 of Obr. 9.6; the ATP-dependent kinase regenerating ribulose-1,5-bisphosphate from ribulose-5-phosphate and thereby closing the cycle.", def_cn: "图9.6的步骤1；ATP依赖性激酶，由核酮糖-5-磷酸再生核酮糖-1,5-二磷酸，从而闭合循环。" },
    { cz: "sedoheptulosa-1,7-bisfosfát", en: "sedoheptulose-1,7-bisphosphate", cn: "景天庚酮糖-1,7-二磷酸", def_en: "The seven-carbon bisphosphate formed by the second aldolase step (9) and hydrolysed by sedoheptulose bisphosphatase (10).", def_cn: "由第二个醛缩酶步骤(9)形成的七碳二磷酸糖，随后被景天庚酮糖二磷酸酶(10)水解。" },
    { cz: "transketolasa", en: "transketolase", cn: "转酮酶", def_en: "The two-carbon-transferring enzyme, used at two points in the Calvin cycle (steps 8 and 11); the same enzyme type as in the pentose phosphate pathway.", def_cn: "转移二碳单元的酶，在卡尔文循环中于两处使用（步骤8与11）；与磷酸戊糖途径中的是同一类酶。" },
    { cz: "fosfopentosaepimerasa", en: "phosphopentose epimerase", cn: "磷酸戊糖差向异构酶", def_en: "Step 12; converts xylulose-5-phosphate into ribulose-5-phosphate.", def_cn: "步骤12；把木酮糖-5-磷酸转变为核酮糖-5-磷酸。" },
    { cz: "fruktosa-6-fosfát (F6P)", en: "fructose-6-phosphate (F6P)", cn: "果糖-6-磷酸(F6P)", def_en: "The net yield of the Calvin cycle; converted via glucose-6-phosphate to glucose, cellulose, or into the general metabolic pathways.", def_cn: "卡尔文循环的净产出；经葡萄糖-6-磷酸转化为葡萄糖、纤维素，或进入一般代谢途径。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In Obr. 9.6, which two enzymes appear TWICE, at two different points of the cycle?",
      q_cn: "在图9.6中，哪两个酶在循环的两个不同位点**各出现两次**？",
      options: [
        "Phosphoribulokinase and phosphoglycerate kinase",
        "Aldolase (steps 6 and 9) and transketolase (steps 8 and 11)",
        "Fructose bisphosphatase and sedoheptulose bisphosphatase",
        "Triose phosphate isomerase and phosphopentose epimerase"
      ],
      answer: 1,
      why_en: "Aldolase catalyses both the condensation to fructose-1,6-bisphosphate (6) and the condensation to sedoheptulose-1,7-bisphosphate (9); transketolase acts both at step 8 (giving erythrose-4-P and xylulose-5-P) and step 11 (giving ribose-5-P and xylulose-5-P). The two bisphosphatases are different enzymes acting on different substrates.",
      why_cn: "醛缩酶既催化生成果糖-1,6-二磷酸的缩合(6)，也催化生成景天庚酮糖-1,7-二磷酸的缩合(9)；转酮酶既作用于步骤8（生成赤藓糖-4-P与木酮糖-5-P），也作用于步骤11（生成核糖-5-P与木酮糖-5-P）。两个二磷酸酶则是作用于不同底物的不同酶。"
    },
    {
      type: "short",
      q_en: "What is the net yield of the Calvin cycle, and what are its onward destinations?",
      q_cn: "卡尔文循环的净产出是什么？它接下来的去向有哪些？",
      accept: ["fructose-6-phosphate", "F6P", "glucose-6-phosphate", "G6P", "glucose", "cellulose", "glycolysis", "citrate"],
      answer_en: "A molecule of fructose-6-phosphate (F6P). It is transformed via glucose-6-phosphate (G6P) to glucose, to cellulose, and into the general metabolic pathways — glycolysis, the citrate cycle and biosyntheses.",
      answer_cn: "一分子果糖-6-磷酸(F6P)。它经葡萄糖-6-磷酸(G6P)转化为葡萄糖、纤维素，并进入一般代谢途径——糖酵解、柠檬酸循环与各类生物合成。"
    }
  ],
  oral: {
    q_en: "Present the Calvin cycle as a whole — its three functional phases and its net product.",
    q_cn: "请整体呈现卡尔文循环——它的三个功能阶段与净产物。",
    model_en: "It is easiest to present it in three phases, even though the figure numbers thirteen enzymes. The fixation phase is one step: ribulose bisphosphate carboxylase adds carbon dioxide to ribulose-one-five-bisphosphate and the six-carbon adduct immediately splits into two three-phosphoglycerates. The reduction phase is two steps, both borrowed from glycolysis run backwards: phosphoglycerate kinase spends ATP to make one-three-bisphosphoglycerate, and glyceraldehyde phosphate dehydrogenase spends NADPH to reduce it to glyceraldehyde-three-phosphate. That is where product leaves the cycle — the arrow in the figure is literally labelled 'produkty'. The third phase is regeneration, and it is the long one: triose phosphate isomerase, aldolase, fructose bisphosphatase, transketolase, aldolase again, sedoheptulose bisphosphatase, transketolase again, and finally either phosphopentose epimerase or ribose phosphate isomerase — both funnelling into ribulose-five-phosphate. Aldolase and transketolase each get used twice, which is why the shuffling looks more complicated than it is. Then phosphoribulokinase spends the second ATP to remake ribulose-one-five-bisphosphate and the cycle closes. Two irreversible bisphosphatase steps keep it running one way. Net product: fructose-six-phosphate, which goes on through glucose-six-phosphate to glucose, cellulose, or into glycolysis, the citrate cycle and biosynthesis generally.",
    checklist: [
      "Organised the cycle into fixation, reduction and regeneration phases",
      "Gave the fixation step and the immediate split into two 3-phosphoglycerates",
      "Gave both reduction steps with their cofactors (ATP, NADPH)",
      "Identified GAP as the exit point where product leaves",
      "Named several regeneration enzymes and noted aldolase and transketolase are each used twice",
      "Noted that epimerase and isomerase both converge on ribulose-5-phosphate",
      "Gave phosphoribulokinase as the closing ATP-dependent step",
      "Stated the net yield as fructose-6-phosphate and gave its onward destinations"
    ]
  }
},

{
  id: "9-20",
  book: "cz",
  topicKey: "photorespiration-c4-cam",
  chapter: 9,
  section: "9.2",
  czTitle: "Fotorespirace — tři enzymy, tři kompartmenty",
  enTitle: "Photorespiration — three enzymes, three compartments",
  cnTitle: "光呼吸——三个酶、三个区室",
  pages: [212, 213],
  coverage: "full",
  coverageNote: "Section 9.2 on p.212 and the whole of Obr. 9.7 on p.213 read in full. The book's admission that the reasons for photorespiration are 'not yet entirely clear' is preserved rather than smoothed over, as are both of the tentative functions it offers (protection of the photosynthetic apparatus from harmful photooxidation when CO2 is scarce; a route to glycine and serine biosynthesis) -- the book marks the protective function with 'pravdepodobne' (probably), and that hedge is kept. FLAG: the book names the third enzyme 'glykolatoxygenasa' (glycolate oxyGENase) in the text, and its own Obr. 9.7 labels the same step the same way, yet the figure draws the reaction as glycolate + O2 -> glyoxylate + H2O2 with catalase then disposing of the peroxide -- which is oxiDASE chemistry, and standard references call this enzyme glycolate oxidase. The book is internally consistent; the discrepancy is with the reaction type its own drawn chemistry implies. Reported as printed and flagged, per this project's rule on book-internal/naming inconsistencies.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "RubisCO's carboxylase and oxygenase activities compete for the very same substrate, RuBP, so the oxygen a leaf produces works directly against the CO₂ it is trying to fix — the harder it photosynthesises, the more it undercuts itself. Clearing up the mess takes three organelles at once (chloroplast, peroxisome, mitochondrion), and the book is explicit that what the whole thing is for is still not settled.", cn: "RubisCO 的羧化酶活性和加氧酶活性抢的是同一个底物 RuBP，所以叶子自己产生的氧，直接在跟它想固定的 CO₂ 作对——光合作用越卖力，自己拆自己的台就越厉害。收拾这个烂摊子要叶绿体、过氧化物酶体、线粒体三个细胞器一起上；而这一整套到底是干什么用的，教材明说了「原因尚不完全清楚」。" },
  summary: {
    en: "In recent years it was found that most plants are able, during illumination, to consume oxygen alongside their photosynthetic production of it. The book states plainly that the reasons are not yet entirely clear. The process is called photorespiration and it differs substantially from mitochondrial respiration, i.e. from the respiratory chain of chapter 6. It involves three enzymes: RubisCO, which besides its carboxylase activity also has an oxygenase activity — hence the enzyme's full name, ribulose-1,5-bisphosphate carboxylase/oxygenase — together with phosphoglycolate phosphatase and glycolate oxygenase. By RubisCO, RuBP is oxygenated and breaks down into 3-phosphoglycerate and phosphoglycolate; phosphoglycolate is hydrolysed to glycolate; and by glycolate oxygenase glyoxylate arises. The sequence of these reactions seems entirely useless for plants and is moreover COMPETITIVE with respect to the Calvin cycle, because it uses the same substrate, RuBP. The book then offers two possible justifications, carefully hedged: photorespiration PROBABLY protects the photosynthetic apparatus from harmful photooxidation when there is not enough CO₂, and it is also a route of plant biosynthesis of the amino acids glycine and serine. Photorespiration takes place in three compartments — chloroplast, peroxisome and mitochondrion — and Obr. 9.7 shows the traffic between them: RuBP oxygenation and phosphoglycolate hydrolysis in the chloroplast; in the peroxisome, glycolate + O₂ giving H₂O₂ (disposed of by catalase) and glyoxylate, transamination of glyoxylate to glycine, and reduction of hydroxypyruvate to glycerate by hydroxypyruvate reductase using NADH; in the mitochondrion, two glycines condensing to serine with release of CO₂; and in the cytosol, glycerate kinase spending ATP to return glycerate to the chloroplast pool.",
    cn: "近年发现，大多数植物在光照期间除了光合放氧之外也能消耗氧。教材直言其原因尚不完全清楚。该过程称为光呼吸，与线粒体呼吸（即第6章的呼吸链）有实质区别。它涉及三个酶：RubisCO——除羧化酶活性外还具有加氧酶活性，该酶的全名核酮糖-1,5-二磷酸羧化酶/加氧酶正由此而来——以及磷酸乙醇酸磷酸酶与乙醇酸加氧酶。经RubisCO作用，RuBP被加氧并分解为3-磷酸甘油酸与磷酸乙醇酸；磷酸乙醇酸被水解为乙醇酸；再经乙醇酸加氧酶生成乙醛酸。这一系列反应对植物似乎全然无用，而且相对于卡尔文循环是**竞争性**的，因为它使用同一底物RuBP。随后教材谨慎地提出两种可能的理由：光呼吸**大概**在CO₂不足时保护光合装置免受有害的光氧化，同时它也是植物合成甘氨酸与丝氨酸这两种氨基酸的一条途径。光呼吸发生在三个区室——叶绿体、过氧化物酶体与线粒体——图9.7展示了它们之间的往来：叶绿体中进行RuBP的加氧与磷酸乙醇酸的水解；过氧化物酶体中，乙醇酸+O₂生成H₂O₂（由过氧化氢酶处理）与乙醛酸，乙醛酸经转氨作用生成甘氨酸，羟基丙酮酸由羟基丙酮酸还原酶用NADH还原为甘油酸；线粒体中，两分子甘氨酸缩合成丝氨酸并释放CO₂；胞质中，甘油酸激酶消耗ATP把甘油酸送回叶绿体的库。"
  },
  points: [
    { cz: "rostliny za světla kyslík i spotřebovávají", en: "Most plants are able, during illumination, to CONSUME oxygen as well as produce it photosynthetically. The book says outright that the reasons are not yet entirely clear — a hedge worth preserving.", cn: "大多数植物在光照期间除了光合产氧之外也能**消耗**氧。教材直言其原因尚不完全清楚——这一保留值得原样保存。" },
    { cz: "liší se od mitochondriální respirace", en: "Photorespiration differs substantially from mitochondrial respiration, i.e. from the respiratory chain of chapter 6. The name is an analogy about gas exchange, not about mechanism.", cn: "光呼吸与线粒体呼吸（即第6章的呼吸链）有实质区别。这个名称是关于气体交换的类比，而非关于机理。" },
    { cz: "tři enzymy", en: "Three enzymes are involved: RubisCO (whose oxygenase activity gives the enzyme the second half of its full name, ribulose-1,5-bisphosphate carboxylase/OXYGENASE), phosphoglycolate phosphatase, and glycolate oxygenase.", cn: "涉及三个酶：RubisCO（其加氧酶活性正是该酶全名「核酮糖-1,5-二磷酸羧化酶/**加氧酶**」后半部分的由来）、磷酸乙醇酸磷酸酶，以及乙醇酸加氧酶。" },
    { cz: "RuBP + O₂ → PG + fosfoglykolát", en: "By RubisCO, RuBP is oxygenated and breaks down into 3-phosphoglycerate and phosphoglycolate. Phosphoglycolate is hydrolysed to glycolate, and by glycolate oxygenase glyoxylate arises.", cn: "经RubisCO作用，RuBP被加氧并分解为3-磷酸甘油酸与磷酸乙醇酸。磷酸乙醇酸被水解为乙醇酸，再经乙醇酸加氧酶生成乙醛酸。" },
    { cz: "kompetitivní vůči Calvinovu cyklu", en: "The sequence seems entirely useless for plants and is moreover COMPETITIVE with respect to the Calvin cycle, because it uses the same substrate, RuBP. The two activities of RubisCO are literally competing for the same molecule.", cn: "该序列对植物似乎全然无用，而且相对于卡尔文循环是**竞争性**的，因为它使用同一底物RuBP。RubisCO的两种活性实际上是在争夺同一个分子。" },
    { cz: "dvě možné funkce — obě opatrně", en: "Two possible functions are offered, both hedged: photorespiration PROBABLY protects the photosynthetic apparatus from harmful photooxidation when there is not enough CO₂; and it is also a route of plant biosynthesis of the amino acids glycine and serine.", cn: "教材提出两种可能的功能，且都留有余地：光呼吸**大概**在CO₂不足时保护光合装置免受有害的光氧化；同时它也是植物合成甘氨酸与丝氨酸的一条途径。" },
    { cz: "tři kompartmenty", en: "Photorespiration takes place in the chloroplast, the peroxisome and the mitochondrion (Obr. 9.7) — one of the clearest examples in the book of a pathway that no single organelle can complete.", cn: "光呼吸发生在叶绿体、过氧化物酶体与线粒体中（图9.7）——这是书中「没有任何单一细胞器能独立完成的途径」最清晰的例子之一。" },
    { cz: "obr. 9.7 — co se kde děje", en: "Obr. 9.7 in detail. Chloroplast: RuBP + O₂ → phosphoglycolate + PG, then phosphoglycolate phosphatase releasing Pᵢ to give glycolate. Peroxisome: glycolate + O₂ → H₂O₂ + glyoxylate, the peroxide destroyed by catalase to ½O₂ + H₂O; glyoxylate transaminated to glycine; hydroxypyruvate reduced by hydroxypyruvate reductase (NADH → NAD⁺) to glycerate. Mitochondrion: glycine → serine with release of CO₂. Cytosol: glycerate kinase (ATP → ADP) returning glycerate as PG to the chloroplast.", cn: "图9.7细节。叶绿体：RuBP+O₂→磷酸乙醇酸+PG，随后磷酸乙醇酸磷酸酶释放Pᵢ生成乙醇酸。过氧化物酶体：乙醇酸+O₂→H₂O₂+乙醛酸，过氧化氢由过氧化氢酶分解为½O₂+H₂O；乙醛酸经转氨作用生成甘氨酸；羟基丙酮酸由羟基丙酮酸还原酶（NADH→NAD⁺）还原为甘油酸。线粒体：甘氨酸→丝氨酸并释放CO₂。胞质：甘油酸激酶（ATP→ADP）把甘油酸以PG形式送回叶绿体。" },
    { cz: "FLAG: oxygenasa vs oxidasa", en: "FLAGGED naming inconsistency. The book calls the third enzyme 'glykolátoxygenasa' (glycolate oxyGENase) both in the text and in the label of Obr. 9.7, but the reaction its own figure draws — glycolate + O₂ → glyoxylate + H₂O₂, with catalase then disposing of the peroxide — is oxiDASE chemistry, and standard references name this enzyme glycolate OXIDASE. The book is internally consistent; the mismatch is between the name it uses and the reaction it draws. Reported as printed rather than silently corrected.", cn: "**标记**：命名不一致。教材在正文与图9.7的标注中都把第三个酶称为「glykolátoxygenasa（乙醇酸**加氧**酶）」，但其自身图中所画的反应——乙醇酸+O₂→乙醛酸+H₂O₂，随后由过氧化氢酶处理过氧化氢——属于**氧化**酶的化学，标准文献把该酶称为乙醇酸**氧化**酶。教材自身是自洽的；矛盾在于它所用的名称与它所画的反应之间。此处按原文照录并加标记，而非默默更正。" }
  ],
  terms: [
    { cz: "fotorespirace", en: "photorespiration", cn: "光呼吸", def_en: "Light-dependent consumption of O₂ and release of CO₂ by plants, initiated by RubisCO's oxygenase activity on RuBP; runs across chloroplast, peroxisome and mitochondrion. Distinct from mitochondrial respiration.", def_cn: "植物在光照下消耗O₂并释放CO₂的过程，由RubisCO对RuBP的加氧酶活性启动；跨越叶绿体、过氧化物酶体与线粒体。与线粒体呼吸不同。" },
    { cz: "fosfoglykolát", en: "phosphoglycolate", cn: "磷酸乙醇酸", def_en: "The two-carbon product of RuBP oxygenation, alongside 3-phosphoglycerate; hydrolysed to glycolate by phosphoglycolate phosphatase.", def_cn: "RuBP加氧的二碳产物，与3-磷酸甘油酸一同生成；由磷酸乙醇酸磷酸酶水解为乙醇酸。" },
    { cz: "glyoxylát", en: "glyoxylate", cn: "乙醛酸", def_en: "Formed in the peroxisome from glycolate; transaminated to glycine, which the mitochondrion converts to serine with loss of CO₂.", def_cn: "在过氧化物酶体中由乙醇酸生成；经转氨作用变为甘氨酸，线粒体再把它转为丝氨酸并失去CO₂。" },
    { cz: "katalasa", en: "catalase", cn: "过氧化氢酶", def_en: "The peroxisomal enzyme disposing of the H₂O₂ formed in the glycolate step, giving ½O₂ + H₂O.", def_cn: "过氧化物酶体中处理乙醇酸步骤所产生H₂O₂的酶，生成½O₂+H₂O。" },
    { cz: "peroxisom", en: "peroxisome", cn: "过氧化物酶体", def_en: "The organelle carrying the middle section of photorespiration; site of glycolate oxidation, catalase action, glyoxylate transamination and hydroxypyruvate reduction.", def_cn: "承担光呼吸中段的细胞器；乙醇酸氧化、过氧化氢酶作用、乙醛酸转氨与羟基丙酮酸还原的场所。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why is photorespiration described as COMPETITIVE with respect to the Calvin cycle?",
      q_cn: "为何说光呼吸相对于卡尔文循环是**竞争性**的？",
      options: [
        "Because it consumes the ATP the Calvin cycle needs",
        "Because it uses the same substrate, RuBP, via the oxygenase activity of the same enzyme",
        "Because it occupies the same compartment, the chloroplast stroma",
        "Because it consumes the NADPH the Calvin cycle needs"
      ],
      answer: 1,
      why_en: "The book's reason is substrate competition: photorespiration uses RuBP, the same substrate the carboxylation uses, and the two activities belong to the same enzyme — hence the full name carboxylase/oxygenase. Compartment sharing is true but is not the reason given.",
      why_cn: "教材给出的理由是底物竞争：光呼吸使用RuBP，与羧化反应所用的是同一底物，而且两种活性属于同一个酶——这正是全名「羧化酶/加氧酶」的由来。共用区室虽属实，但并非教材给出的理由。"
    },
    {
      type: "short",
      q_en: "In which three compartments does photorespiration take place, and what happens in each?",
      q_cn: "光呼吸发生在哪三个区室？各自发生什么？",
      accept: ["chloroplast", "peroxisome", "mitochondri", "glycolate", "glycine", "serine"],
      answer_en: "Chloroplast: RuBP oxygenation to PG + phosphoglycolate, then hydrolysis to glycolate. Peroxisome: glycolate → glyoxylate with H₂O₂ (removed by catalase), transamination to glycine, and hydroxypyruvate → glycerate. Mitochondrion: glycine → serine with release of CO₂.",
      answer_cn: "叶绿体：RuBP加氧生成PG+磷酸乙醇酸，随后水解为乙醇酸。过氧化物酶体：乙醇酸→乙醛酸并产生H₂O₂（由过氧化氢酶清除）、转氨生成甘氨酸，以及羟基丙酮酸→甘油酸。线粒体：甘氨酸→丝氨酸并释放CO₂。"
    }
  ],
  oral: {
    q_en: "What is photorespiration, and is it useful to the plant?",
    q_cn: "什么是光呼吸？它对植物有用吗？",
    model_en: "Photorespiration is the light-dependent consumption of oxygen by plants, and it starts from an inconvenient fact about RubisCO: the enzyme has an oxygenase activity as well as a carboxylase one, which is why its full name is ribulose bisphosphate carboxylase-oxygenase. When oxygen wins instead of carbon dioxide, ribulose bisphosphate is oxygenated and splits into three-phosphoglycerate and phosphoglycolate. Phosphoglycolate is hydrolysed to glycolate, and glycolate is converted to glyoxylate. Three enzymes, then, and three compartments: the chloroplast starts it, the peroxisome does the middle — including generating hydrogen peroxide, which catalase immediately destroys, and transaminating glyoxylate to glycine — and the mitochondrion condenses two glycines into serine and releases carbon dioxide. As to whether it is useful: the textbook is honest and says the reasons are not entirely clear. On the face of it the sequence looks useless and it is actively competitive with the Calvin cycle, since both draw on the same substrate. But two justifications are offered, both hedged. It probably protects the photosynthetic apparatus from harmful photooxidation when carbon dioxide is short — that is, it gives the excited electrons somewhere to go. And it is a genuine route to glycine and serine biosynthesis in plants. I would present it as a costly side reaction with two plausible silver linings, not as a designed function.",
    checklist: [
      "Traced photorespiration to RubisCO's oxygenase activity and explained the full enzyme name",
      "Gave the products of RuBP oxygenation: 3-phosphoglycerate + phosphoglycolate",
      "Named all three enzymes and all three compartments with what happens in each",
      "Mentioned H₂O₂ formation and its removal by catalase in the peroxisome",
      "Stated the competition with the Calvin cycle for the same substrate",
      "Preserved the book's hedge that the reasons are not entirely clear",
      "Gave both offered functions: protection from photooxidation when CO₂ is scarce, and glycine/serine biosynthesis"
    ]
  }
},

{
  id: "9-21",
  book: "cz",
  topicKey: "photorespiration-c4-cam",
  chapter: 9,
  section: "9.3",
  czTitle: "Rostliny C-4 — Hatchův-Slackův cyklus",
  enTitle: "C-4 plants — the Hatch–Slack cycle",
  cnTitle: "C-4植物——Hatch–Slack循环",
  pages: [212],
  coverage: "full",
  coverageNote: "The opening of section 9.3 on p.212 read in full. The date and attribution were read directly from the scan and are reproduced exactly as the book prints them -- 'V r. 1970 M. Hatch a C. Slack objevili' -- see the flag below. Every enzyme of the regeneration cycle was read as named: PEP-karboxylasa, malatdehydrogenasa (using NADPH), and pyruvatfosfatdikinasa, together with the alternative fate of oxaloacetate via transamination to aspartate.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "The C-4 cycle fixes no carbon on balance: the CO₂ that PEP-carboxylase captures is the same CO₂ that decarboxylating malate lets go, and all that has changed in between is where it is. It is a carbon taxi paid for in ATP, not an alternative to the Calvin cycle — the Calvin cycle still does the actual fixing at the end of the ride.", cn: "C-4 循环净固定的碳是零：PEP 羧化酶抓住的那个 CO₂，就是苹果酸脱羧时放掉的那个 CO₂，中间变的只是它在哪儿。它是一辆用 ATP 付费的碳出租车，不是卡尔文循环的替代方案——下车之后，真正固定碳的仍然是卡尔文循环。" },
  summary: {
    en: "The Calvin cycle is not the only mechanism of CO₂ assimilation. The book states that in 1970 M. Hatch and C. Slack discovered that some plants are able to fix CO₂ by a route that does not use three-carbon intermediates but the four-carbon compounds malate (or alternatively aspartate); such plants are accordingly called C-4 plants. The primary acceptor of CO₂ is phosphoenolpyruvate (PEP) and the product is oxaloacetate, the reaction being catalysed by PEP-carboxylase (Obr. 9.8). Oxaloacetate can then be metabolised in two ways: by a route leading through transamination to aspartate, or through hydrogenation to malate — this reduction being carried out by malate dehydrogenase using the coenzyme NADPH. Malate is then decarboxylated to pyruvate with release of CO₂. Pyruvate is phosphorylated by pyruvate phosphate dikinase, forming PEP at the expense of ATP, and the cycle regenerating the primary CO₂ acceptor is thereby closed. Structurally this is a carbon shuttle rather than a carbon-fixing cycle in its own right: the CO₂ that PEP-carboxylase captures is the same CO₂ that the malate decarboxylation releases, and what has changed in between is only WHERE that CO₂ is. Note that the book flags 'event. aspartát' — aspartate as an alternative to malate — which means the C-4 name refers to the carbon count of the intermediate, not to malate specifically.",
    cn: "卡尔文循环并非CO₂同化的唯一机制。教材写道，1970年M. Hatch与C. Slack发现某些植物能通过一条不使用三碳中间体、而使用四碳化合物苹果酸（或者天冬氨酸）的途径固定CO₂；此类植物因而被称为C-4植物。CO₂的初级受体是磷酸烯醇丙酮酸(PEP)，产物是草酰乙酸，该反应由PEP羧化酶催化（图9.8）。草酰乙酸随后可经两条路径代谢：一条经转氨作用生成天冬氨酸，另一条经加氢生成苹果酸——这一还原由苹果酸脱氢酶使用辅酶NADPH完成。苹果酸随后脱羧为丙酮酸并释放CO₂。丙酮酸由丙酮酸磷酸双激酶消耗ATP磷酸化，重新生成PEP，再生初级CO₂受体的循环由此闭合。就结构而言，这与其说是一个独立的碳固定循环，不如说是一条碳的穿梭线：PEP羧化酶捕获的CO₂正是苹果酸脱羧所释放的那个CO₂，其间改变的只是这个CO₂**在什么地方**。注意教材标出「event. aspartát」——天冬氨酸作为苹果酸的替代——这意味着C-4这个名称指的是中间体的碳数，而非特指苹果酸。"
  },
  points: [
    { cz: "Hatch a Slack, čtyřuhlíkaté meziprodukty", en: "The book states that in 1970 M. Hatch and C. Slack discovered that some plants fix CO₂ by a route using not three-carbon intermediates but the four-carbon compounds malate (or alternatively aspartate). These are the C-4 plants.", cn: "教材写道，1970年M. Hatch与C. Slack发现某些植物通过一条使用四碳化合物苹果酸（或天冬氨酸）而非三碳中间体的途径固定CO₂。这些就是C-4植物。" },
    { cz: "FLAG: datum 1970", en: "FLAGGED. The book prints 1970 as the year of the Hatch and Slack discovery. Standard references date the original Hatch & Slack publication on the C-4 pathway to 1966. The book's figure is reproduced here as printed and flagged rather than silently corrected; if this matters for an exam answer, give the pathway name and mechanism rather than leaning on the date.", cn: "**标记**。教材把Hatch与Slack的发现年份印为1970年。标准文献把Hatch与Slack关于C-4途径的原始发表定为1966年。此处按原文照录教材的年份并加标记，而非默默更正；若这一点在考试作答中有关系，应给出途径名称与机理，而不要倚重年份。" },
    { cz: "PEP + CO₂ → oxalacetát", en: "The primary acceptor of CO₂ is phosphoenolpyruvate (PEP) and the product is oxaloacetate; the reaction is catalysed by PEP-carboxylase (Obr. 9.8).", cn: "CO₂的初级受体是磷酸烯醇丙酮酸(PEP)，产物是草酰乙酸；反应由PEP羧化酶催化（图9.8）。" },
    { cz: "oxalacetát dvojím způsobem", en: "Oxaloacetate can be metabolised in two ways: through transamination to aspartate, or through hydrogenation to malate. The reduction to malate is carried out by malate dehydrogenase using the coenzyme NADPH.", cn: "草酰乙酸可经两种方式代谢：经转氨作用生成天冬氨酸，或经加氢生成苹果酸。生成苹果酸的还原由苹果酸脱氢酶使用辅酶NADPH完成。" },
    { cz: "malát → pyruvát + CO₂", en: "Malate is then decarboxylated to pyruvate and CO₂ is released. This is the point of the whole exercise — the CO₂ is put back down, somewhere else.", cn: "苹果酸随后脱羧为丙酮酸并释放CO₂。这正是整套操作的目的所在——把CO₂在**别处**重新放下。" },
    { cz: "pyruvátfosfátdikinasa uzavírá cyklus", en: "Pyruvate is phosphorylated by pyruvate phosphate dikinase, forming PEP at the expense of ATP, and the cycle regenerating the primary CO₂ acceptor is closed.", cn: "丙酮酸由丙酮酸磷酸双激酶磷酸化，消耗ATP重新生成PEP，再生初级CO₂受体的循环由此闭合。" },
    { cz: "C-4 se týká počtu uhlíků, ne malátu", en: "Because the book explicitly allows aspartate as an alternative to malate, the label 'C-4' refers to the carbon count of the intermediate that carries the CO₂, not to malate specifically.", cn: "由于教材明确允许以天冬氨酸替代苹果酸，「C-4」这一标签指的是携带CO₂的中间体的碳数，而非特指苹果酸。" }
  ],
  terms: [
    { cz: "rostliny C-4", en: "C-4 plants", cn: "C-4植物", def_en: "Plants whose first product of CO₂ fixation is a four-carbon compound (malate or aspartate) rather than the three-carbon 3-phosphoglycerate; they run the Hatch–Slack route in addition to, not instead of, the Calvin cycle.", def_cn: "CO₂固定的第一个产物为四碳化合物（苹果酸或天冬氨酸）而非三碳的3-磷酸甘油酸的植物；它们在卡尔文循环之外**附加**运行Hatch–Slack途径，而非取而代之。" },
    { cz: "PEP-karboxylasa", en: "PEP-carboxylase", cn: "PEP羧化酶", def_en: "The enzyme carboxylating phosphoenolpyruvate to oxaloacetate; the entry point of C-4 fixation, and notable for a lower Km for CO₂ than RubisCO (see 9-22).", def_cn: "把磷酸烯醇丙酮酸羧化为草酰乙酸的酶；C-4固定的入口，其对CO₂的Km低于RubisCO（见9-22）值得注意。" },
    { cz: "pyruvátfosfátdikinasa", en: "pyruvate phosphate dikinase", cn: "丙酮酸磷酸双激酶", def_en: "The ATP-consuming enzyme regenerating PEP from pyruvate and closing the C-4 acceptor cycle.", def_cn: "耗ATP由丙酮酸再生PEP、闭合C-4受体循环的酶。" },
    { cz: "oxalacetát", en: "oxaloacetate", cn: "草酰乙酸", def_en: "The immediate four-carbon product of PEP carboxylation; either transaminated to aspartate or reduced by NADPH-dependent malate dehydrogenase to malate.", def_cn: "PEP羧化的直接四碳产物；或经转氨生成天冬氨酸，或由NADPH依赖的苹果酸脱氢酶还原为苹果酸。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the primary CO₂ acceptor in C-4 plants, and what is the immediate product?",
      q_cn: "C-4植物中CO₂的初级受体是什么？直接产物是什么？",
      options: [
        "Ribulose-1,5-bisphosphate; 3-phosphoglycerate",
        "Phosphoenolpyruvate; oxaloacetate",
        "Pyruvate; malate",
        "Oxaloacetate; aspartate"
      ],
      answer: 1,
      why_en: "PEP-carboxylase carboxylates phosphoenolpyruvate to oxaloacetate. Oxaloacetate is then either transaminated to aspartate or reduced to malate by NADPH-dependent malate dehydrogenase. Option 0 is the C-3 (Calvin) route.",
      why_cn: "PEP羧化酶把磷酸烯醇丙酮酸羧化为草酰乙酸。草酰乙酸随后或经转氨生成天冬氨酸，或由NADPH依赖的苹果酸脱氢酶还原为苹果酸。选项0是C-3（卡尔文）路线。"
    },
    {
      type: "short",
      q_en: "Name the three enzymes of the C-4 acceptor-regeneration cycle in order.",
      q_cn: "按顺序说出C-4受体再生循环的三个酶。",
      accept: ["PEP-carboxylase", "PEP carboxylase", "malate dehydrogenase", "pyruvate phosphate dikinase", "dikinase"],
      answer_en: "PEP-carboxylase (PEP + CO₂ → oxaloacetate), malate dehydrogenase (oxaloacetate + NADPH → malate), and pyruvate phosphate dikinase (pyruvate + ATP → PEP) after the decarboxylation of malate to pyruvate.",
      answer_cn: "PEP羧化酶（PEP+CO₂→草酰乙酸）、苹果酸脱氢酶（草酰乙酸+NADPH→苹果酸），以及在苹果酸脱羧为丙酮酸之后的丙酮酸磷酸双激酶（丙酮酸+ATP→PEP）。"
    }
  ],
  oral: {
    q_en: "Describe the C-4 pathway of CO₂ fixation.",
    q_cn: "请描述CO₂固定的C-4途径。",
    model_en: "The Calvin cycle is not the only way to assimilate carbon dioxide. Hatch and Slack found that some plants fix it first into a four-carbon compound rather than a three-carbon one, and those are called C-4 plants. The primary acceptor is phosphoenolpyruvate, and PEP carboxylase attaches the carbon dioxide to give oxaloacetate. Oxaloacetate then goes one of two ways: transamination to aspartate, or reduction to malate by malate dehydrogenase using NADPH. Either way the carbon is now sitting on a four-carbon carrier — and note that because aspartate is an allowed alternative, the label C-4 is about the carbon count, not about malate specifically. Then comes the step that reveals what the whole thing is for: malate is decarboxylated back to pyruvate, releasing the carbon dioxide again. Pyruvate is re-phosphorylated to PEP by pyruvate phosphate dikinase at the cost of ATP, and the acceptor cycle closes. So no net carbon has been fixed by this cycle at all — the same CO₂ that went in comes back out. What has changed is where it is, and that turns out to be the entire point, as the next part of the section explains.",
    checklist: [
      "Attributed the discovery to Hatch and Slack and identified the four-carbon intermediate",
      "Named PEP as the primary acceptor and oxaloacetate as the product, via PEP-carboxylase",
      "Gave both fates of oxaloacetate: transamination to aspartate, reduction to malate by NADPH-dependent malate dehydrogenase",
      "Gave the decarboxylation of malate to pyruvate releasing CO₂",
      "Named pyruvate phosphate dikinase and the ATP cost of regenerating PEP",
      "Recognised that the cycle fixes no net carbon — it relocates CO₂"
    ]
  }
},

{
  id: "9-22",
  book: "cz",
  topicKey: "photorespiration-c4-cam",
  chapter: 9,
  section: "9.3",
  czTitle: "Proč C-4 funguje — Km, průduchy, Kranzova anatomie (obr. 9.8)",
  enTitle: "Why C-4 works — Km, stomata, and the two-cell-layer anatomy (Obr. 9.8)",
  cnTitle: "C-4为何有效——Km、气孔与双层细胞解剖结构（图9.8）",
  pages: [212, 214],
  coverage: "full",
  coverageNote: "The remainder of section 9.3 running from the middle of p.212 across the Obr. 9.7 page onto the top of p.214, read in full, together with Obr. 9.8. Both halves of the anatomy sentence were read (it breaks across the p.212/p.214 boundary): mesophyll cells fix CO2 by the C-4 mechanism, bundle-sheath cells by the C-3 mechanism, i.e. by engaging RuBP carboxylase and the Calvin cycle reactions. The 'about twice as fast' comparison and the 'more than 100 species' figure were read as printed. Obr. 9.8 additionally shows carbonate dehydratase converting CO2 from the air to HCO3- before PEP-carboxylase acts, and labels the decarboxylating malate dehydrogenase as the 'jablecny enzym' (malic enzyme) -- neither point is in the running text, both are read off the figure.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "PEP-carboxylase works at a lower CO₂ concentration than RubisCO can, so a C-4 plant gets enough carbon with its stomata barely open — which means the real prize is the water it does not lose, and the roughly doubled fixation rate follows from that. The division of labour is anatomically literal: mesophyll cells run C-4, bundle-sheath cells run C-3, and malate carries the CO₂ between them.", cn: "PEP 羧化酶能在比 RubisCO 更低的 CO₂ 浓度下工作，所以 C-4 植物气孔只需微微张开就够碳用了——真正赚到的其实是那些没有蒸发掉的水，固定速率大约翻倍是随之而来的结果。这个分工在解剖上是字面意义上的：叶肉细胞跑 C-4，维管束鞘细胞跑 C-3，苹果酸在两者之间把 CO₂ 运进去。" },
  summary: {
    en: "More than 100 plant species using C-4 fixation have been discovered; they live in areas with a hot climate, in the tropics and in deserts, and are above all tropical grasses such as sugar cane, and cactus-like plants (succulents). The book then poses the obvious question: why do these plants fix CO₂ via PEP and immediately release it again, only to use the normal route, the Calvin cycle? The answer is an increase in the efficiency of CO₂ fixation in areas with high solar radiation, high temperatures and a limited supply of water; under these conditions the rate of CO₂ fixation in C-4 plants relative to C-3 plants is about twice as high. One of the reasons is the ability of PEP-carboxylase to work at LOWER CO₂ concentrations — a lower Km — than RubisCO requires. That ability means the leaf stomata, through which CO₂ enters the leaf, need be open only minimally, so that enormous evaporation of water from the plant body does not occur. By the C-4 mechanism, CO₂ is thus in effect CONCENTRATED for the activity of RuBP carboxylase in the Calvin cycle. C-4 plants are also anatomically adapted to this activity: between the surface cells of the epidermis and the vascular tissue there are two layers of different cells, mesophyll cells and bundle-sheath cells, which differ precisely in the mechanism of CO₂ fixation. Mesophyll cells fix CO₂ by the C-4 mechanism; bundle-sheath cells fix it by the C-3 mechanism, i.e. by engaging RuBP carboxylase and the reactions of the Calvin cycle. Obr. 9.8 draws this split explicitly, and adds two details not in the running text: CO₂ from the air is first converted to HCO₃⁻ by carbonate dehydratase before PEP-carboxylase acts, and the decarboxylating malate dehydrogenase of the bundle-sheath cell is labelled the 'malic enzyme' (jablečný enzym).",
    cn: "已发现100多种使用C-4固定的植物；它们生活在气候炎热的地区——热带与沙漠，主要是热带禾草（如甘蔗）和仙人掌类植物（多肉植物）。随后教材提出一个显而易见的问题：这些植物为何要经PEP固定CO₂、随即又把它释放出来，然后才走常规路线卡尔文循环？答案是：在强太阳辐射、高温和水分供应受限的地区提高CO₂固定的效率；在这些条件下，C-4植物相对于C-3植物的CO₂固定速率约为两倍。原因之一是PEP羧化酶能在**较低**的CO₂浓度下工作——Km较低——低于RubisCO所需。这种能力意味着CO₂借以进入叶片的气孔只需微微张开，从而不会发生植物体大量水分蒸发。因此C-4机制实际上是为卡尔文循环中RuBP羧化酶的活动**浓缩**CO₂。C-4植物在解剖上也与此相适应：在表皮的表层细胞与维管组织之间有两层不同的细胞——叶肉细胞与维管束鞘细胞——它们的差别恰恰在于CO₂固定的机制。叶肉细胞以C-4机制固定CO₂；维管束鞘细胞以C-3机制固定，即动用RuBP羧化酶与卡尔文循环的各步反应。图9.8明确画出了这一分工，并补充了正文中没有的两个细节：来自空气的CO₂在PEP羧化酶作用之前先由碳酸酐酶转变为HCO₃⁻；维管束鞘细胞中进行脱羧的苹果酸脱氢酶被标为「苹果酸酶」(jablečný enzym)。"
  },
  points: [
    { cz: "více než 100 druhů, tropy a pouště", en: "More than 100 plant species using C-4 CO₂ fixation have been discovered. They live in hot climates — tropics and deserts — and are above all tropical grasses (e.g. sugar cane) and cactus-like plants (succulents).", cn: "已发现100多种使用C-4固定CO₂的植物。它们生活在炎热气候中——热带与沙漠——主要是热带禾草（如甘蔗）与仙人掌类植物（多肉植物）。" },
    { cz: "otázka: proč fixovat a hned uvolnit?", en: "The book poses the question directly: why do these plants fix CO₂ via PEP and immediately release it again, and then use the normal Calvin cycle anyway? Asking it this way is what makes the answer intelligible.", cn: "教材直接提出问题：这些植物为何要经PEP固定CO₂、随即又释放出来，然后照样使用常规的卡尔文循环？正是这样提问才使答案变得可理解。" },
    { cz: "asi dvojnásobná rychlost fixace", en: "The reason is increased efficiency of CO₂ fixation in areas with high solar radiation, high temperatures and limited water supply. Under these conditions the rate of CO₂ fixation in C-4 plants is about TWICE that of C-3 plants.", cn: "理由是在强太阳辐射、高温和水分供应受限的地区提高CO₂固定效率。在这些条件下，C-4植物的CO₂固定速率约为C-3植物的**两倍**。" },
    { cz: "nižší Km PEP-karboxylasy", en: "One reason is that PEP-carboxylase can use lower CO₂ concentrations — a lower Km — than RubisCO requires. This is the key enzymological fact of the whole section.", cn: "原因之一是PEP羧化酶能利用比RubisCO所需更低的CO₂浓度——Km更低。这是全节最关键的酶学事实。" },
    { cz: "průduchy otevřeny jen minimálně", en: "That lower Km lets the leaf stomata, through which CO₂ enters, be open only minimally, so that enormous evaporation of water from the plant body does not occur. C-4 is, in effect, a water-conservation strategy dressed as a carbon strategy.", cn: "较低的Km使CO₂借以进入的气孔只需微微张开，从而不会发生植物体的大量水分蒸发。C-4实际上是一种披着碳策略外衣的节水策略。" },
    { cz: "C-4 = koncentrování CO₂ pro RuBPkarboxylasu", en: "By the C-4 mechanism CO₂ is in effect CONCENTRATED for the activity of RuBP carboxylase in the Calvin cycle. This one sentence is the whole rationale: the C-4 cycle is a CO₂ pump feeding RubisCO.", cn: "C-4机制实际上是为卡尔文循环中RuBP羧化酶的活动**浓缩**CO₂。这一句就是全部理由：C-4循环是一台为RubisCO供料的CO₂泵。" },
    { cz: "dvě vrstvy buněk", en: "Anatomically, between the surface cells of the epidermis and the vascular tissue there are two layers of different cells: mesophyll cells and bundle-sheath cells (buňky pochev cévních svazků), which differ precisely by the mechanism of CO₂ fixation.", cn: "在解剖上，表皮的表层细胞与维管组织之间有两层不同的细胞：叶肉细胞与维管束鞘细胞，它们的差别恰恰在于CO₂固定的机制。" },
    { cz: "mezofyl C-4, pochva C-3", en: "Mesophyll cells fix CO₂ by the C-4 mechanism; bundle-sheath cells fix it by the C-3 mechanism, i.e. by engaging RuBP carboxylase and the reactions of the Calvin cycle. The malate shuttles between them, carrying CO₂ inward.", cn: "叶肉细胞以C-4机制固定CO₂；维管束鞘细胞以C-3机制固定，即动用RuBP羧化酶与卡尔文循环的各步反应。苹果酸在二者之间穿梭，把CO₂向内输送。" },
    { cz: "obr. 9.8 přidává dva detaily", en: "Obr. 9.8 adds two details absent from the running text: CO₂ from the air is first converted to HCO₃⁻ by carbonate dehydratase (karbonátdehydratasa) before PEP-carboxylase acts — so the actual substrate is bicarbonate, not CO₂ — and the decarboxylating malate dehydrogenase in the bundle-sheath cell is labelled the 'malic enzyme' (jablečný enzym), regenerating NADPH as it releases CO₂.", cn: "图9.8补充了正文所无的两个细节：来自空气的CO₂在PEP羧化酶作用之前先由碳酸酐酶(karbonátdehydratasa)转变为HCO₃⁻——因此真正的底物是碳酸氢根而非CO₂；以及维管束鞘细胞中进行脱羧的苹果酸脱氢酶被标为「苹果酸酶」(jablečný enzym)，它在释放CO₂的同时再生NADPH。" }
  ],
  terms: [
    { cz: "buňky pochev cévních svazků", en: "bundle-sheath cells", cn: "维管束鞘细胞", def_en: "The inner of the two C-4 leaf cell layers, sitting next to the vascular tissue; they receive malate, decarboxylate it, and run the Calvin cycle (C-3 mechanism).", def_cn: "C-4叶片两层细胞中靠内的一层，紧邻维管组织；它们接收苹果酸、使之脱羧，并运行卡尔文循环（C-3机制）。" },
    { cz: "mezofylová buňka", en: "mesophyll cell", cn: "叶肉细胞", def_en: "The outer of the two C-4 leaf cell layers; fixes CO₂ by the C-4 mechanism via PEP-carboxylase and exports malate inward.", def_cn: "C-4叶片两层细胞中靠外的一层；经PEP羧化酶以C-4机制固定CO₂，并把苹果酸向内输出。" },
    { cz: "Km", en: "Km (Michaelis constant)", cn: "Km（米氏常数）", def_en: "The substrate concentration at half-maximal rate; a LOWER Km means the enzyme works well at lower substrate concentration. PEP-carboxylase has a lower Km for CO₂ than RubisCO.", def_cn: "达到半数最大速率时的底物浓度；Km**较低**意味着酶在较低底物浓度下也能良好工作。PEP羧化酶对CO₂的Km低于RubisCO。" },
    { cz: "karbonátdehydratasa", en: "carbonate dehydratase (carbonic anhydrase)", cn: "碳酸酐酶", def_en: "Shown in Obr. 9.8 converting atmospheric CO₂ to HCO₃⁻, the actual substrate PEP-carboxylase uses.", def_cn: "图9.8中把大气CO₂转变为HCO₃⁻的酶，后者才是PEP羧化酶实际使用的底物。" },
    { cz: "jablečný enzym", en: "malic enzyme", cn: "苹果酸酶", def_en: "The decarboxylating malate dehydrogenase of the bundle-sheath cell, labelled as such in Obr. 9.8; releases CO₂ for RubisCO and regenerates NADPH.", def_cn: "维管束鞘细胞中进行脱羧的苹果酸脱氢酶，图9.8中如此标注；为RubisCO释放CO₂并再生NADPH。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the primary functional advantage of the C-4 mechanism, according to the book?",
      q_cn: "根据教材，C-4机制的首要功能优势是什么？",
      options: [
        "It replaces the Calvin cycle with a more efficient one",
        "It concentrates CO₂ for RuBP carboxylase, allowing stomata to stay nearly closed and limiting water loss",
        "It avoids the need for NADPH",
        "It allows CO₂ fixation to occur at night"
      ],
      answer: 1,
      why_en: "The book says the C-4 mechanism effectively CONCENTRATES CO₂ for RuBP carboxylase in the Calvin cycle. The enabling fact is PEP-carboxylase's lower Km for CO₂, which lets the stomata stay open only minimally and prevents enormous water evaporation. C-4 does not replace the Calvin cycle — bundle-sheath cells run it.",
      why_cn: "教材指出C-4机制实际上是为卡尔文循环中的RuBP羧化酶**浓缩**CO₂。使之成为可能的事实是PEP羧化酶对CO₂的Km较低，这让气孔只需微微张开，避免大量水分蒸发。C-4并不取代卡尔文循环——维管束鞘细胞正在运行它。"
    },
    {
      type: "short",
      q_en: "Which mechanism operates in mesophyll cells and which in bundle-sheath cells of a C-4 plant?",
      q_cn: "在C-4植物中，叶肉细胞与维管束鞘细胞分别运行哪种机制？",
      accept: ["mesophyll", "C-4", "bundle", "sheath", "C-3", "Calvin", "RuBP"],
      answer_en: "Mesophyll cells fix CO₂ by the C-4 mechanism (PEP-carboxylase); bundle-sheath cells fix it by the C-3 mechanism, i.e. RuBP carboxylase and the Calvin cycle.",
      answer_cn: "叶肉细胞以C-4机制固定CO₂（PEP羧化酶）；维管束鞘细胞以C-3机制固定，即RuBP羧化酶与卡尔文循环。"
    }
  ],
  oral: {
    q_en: "Why would a plant go to the trouble of fixing CO₂ twice?",
    q_cn: "植物为何要费事把CO₂固定两次？",
    model_en: "It looks wasteful — you attach the carbon dioxide to phosphoenolpyruvate, carry it as malate, and then knock it straight back off again, spending ATP to reset the acceptor. But look at where the plants that do this live: hot climates, tropics and deserts, tropical grasses like sugar cane, and succulents. In those conditions the limiting problem is not carbon, it is water. Every minute the stomata stay open to admit carbon dioxide, water evaporates out. Now, PEP carboxylase has a lower Km for carbon dioxide than RubisCO does — it works well at concentrations RubisCO cannot use. So the mesophyll cells can capture carbon dioxide with the stomata barely open, load it onto a four-carbon carrier, and shuttle it inward to the bundle-sheath cells, where the malic enzyme decarboxylates it and delivers a locally high concentration of carbon dioxide right where RubisCO is sitting. The C-4 cycle is, in effect, a carbon dioxide pump feeding the Calvin cycle. The payoff the book quotes is roughly a doubling of the fixation rate relative to a C-3 plant under those conditions. And the anatomy matches the chemistry: two distinct cell layers between epidermis and vascular tissue, mesophyll doing C-4, bundle sheath doing C-3.",
    checklist: [
      "Framed the apparent waste and answered it in terms of water conservation",
      "Named the habitats and example plants: tropics/deserts, tropical grasses like sugar cane, succulents",
      "Gave PEP-carboxylase's lower Km for CO₂ as the enabling enzymology",
      "Connected the low Km to minimally-open stomata and reduced water loss",
      "Described C-4 as concentrating CO₂ for RuBP carboxylase",
      "Gave the ~2× fixation rate advantage under those conditions",
      "Described the two-layer anatomy with mesophyll = C-4, bundle sheath = C-3"
    ]
  }
},

{
  id: "9-23",
  book: "cz",
  topicKey: "nitrogen-metabolism",
  chapter: 9,
  section: "9.4",
  czTitle: "Fixace atmosférického dusíku — nitrogenasa",
  enTitle: "Fixation of atmospheric nitrogen — nitrogenase",
  cnTitle: "大气氮的固定——固氮酶",
  pages: [214, 215],
  coverage: "full",
  coverageNote: "Section 9.4 from its heading on p.214 through the nitrogenase scheme at the top of p.215, read in full. The 78% atmospheric figure, the equation N2 + 6H+ + 6e- -> 2NH3, and the statement that the process is exergonic but has too high an activation energy to occur spontaneously were all read as printed, as was the industrial-analogy remark about special catalysts, high pressure and temperature. The p.215 scheme was read component by component: 6 e- from cellular metabolic pathways -> feredoxin -> flavodoxin -> [Mo-Fe protein / Fe protein], with 6H+ and N2 in and 2 NH3 out, and 6 ATP -> 6 ADP + Pi below. FLAG: the book's stoichiometry (6 electrons, 6 ATP, no H2 by-product) differs from the modern textbook value; see the point below, where this is stated rather than silently updated.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Nitrogen is 78% of the air and almost nothing can use it, because it is inert — abundance and availability are different things, and only bacteria can break it, so plants and animals must be handed nitrogen already in some other form. Note what the barrier actually is: the reaction releases energy, so what nitrogenase supplies is not a thermodynamic push but a way past an enormous activation barrier, which industry buys with pressure and heat and the enzyme buys with ATP.", cn: "氮占空气的 78%，却几乎没有生物能用，因为它太惰性——「多」和「能用」是两回事；而且只有细菌能把它打开，植物和动物都必须以别的形式被喂到氮。要看清障碍究竟在哪里：这个反应本身是放能的，所以固氮酶提供的并不是热力学上的推动力，而是绕过一个巨大活化能的办法——工业上用高压高温去买，酶用 ATP 去买。" },
  summary: {
    en: "Nitrogen is a biogenic element contained in proteins, nucleic acids and other biochemically significant molecules, and in various oxidation states it circulates constantly in the biosphere. Although molecular nitrogen is very abundant in the atmosphere (78%), it is not available in that form to most living organisms because it is very inert. The book then makes a correction that matters for the whole section: ONLY BACTERIA can fix atmospheric nitrogen. Plants — higher plants and algae — and animals do NOT have this ability and must take nitrogen up in another form, e.g. as ammonia, as nitrate, or bound into more complex organic molecules, especially amino acids. Biological nitrogen fixation begins with the reduction of gaseous nitrogen to ammonia: N₂ + 6H⁺ + 6e⁻ → 2NH₃. This is an exergonic process, but its activation energy is too high for it to occur spontaneously — in technical practice special catalysts, high pressure and high temperature must be used. In nature the reaction is catalysed by nitrogenase, and the process is carried out by various microorganisms: aerobic and anaerobic bacteria, living independently or in symbiosis with plants, and some photosynthesizing microorganisms (bacteria and cyanobacteria). Nitrogenase is a relatively complicated enzyme system containing two proteins, molybdenum ions, and non-haem-bound iron atoms (Fe-S proteins of the ferredoxin type). Electrons are supplied to the system by at least two carriers: ferredoxin, an Fe-S protein, and flavodoxin, which contains flavin mononucleotide. The process is ATP-dependent and probably requires 1 ATP for each electron transferred — which, at 6 electrons, gives the 6 ATP shown in the scheme.",
    cn: "氮是一种生源元素，存在于蛋白质、核酸及其他生化上重要的分子中，并以各种氧化态在生物圈中不断循环。虽然分子氮在大气中含量极为丰富（78%），但大多数生物无法以这种形式利用它，因为它非常惰性。随后教材作了一个对全节都重要的修正：**只有细菌**能固定大气氮。植物——高等植物与藻类——以及动物**不**具备这种能力，必须以其他形式摄取氮，例如氨、硝酸盐，或结合在更复杂的有机分子（尤其是氨基酸）中。生物固氮始于把气态氮还原为氨：N₂ + 6H⁺ + 6e⁻ → 2NH₃。这是一个放能过程，但其活化能过高以致无法自发进行——在工业实践中必须使用特殊催化剂、高压和高温。在自然界中该反应由固氮酶催化，由多种微生物执行：好氧与厌氧细菌（独立生活或与植物共生），以及某些光合微生物（细菌与蓝细菌）。固氮酶是一个相当复杂的酶系统，含有两个蛋白、钼离子，以及非血红素结合的铁原子（铁氧还蛋白型的Fe-S蛋白）。电子由至少两种载体供给该系统：铁氧还蛋白（一种Fe-S蛋白）与黄素氧还蛋白（含黄素单核苷酸）。该过程依赖ATP，很可能每传递一个电子需要1个ATP——按6个电子计，即为图中所示的6个ATP。"
  },
  points: [
    { cz: "dusík je inertní, i když ho je 78 %", en: "Molecular nitrogen makes up 78% of the atmosphere but is not available in that form to most living organisms, because it is very inert. Abundance and availability are different things.", cn: "分子氮占大气的78%，但大多数生物无法以这种形式利用它，因为它非常惰性。丰度与可利用性是两回事。" },
    { cz: "fixovat umí POUZE bakterie", en: "ONLY bacteria can fix atmospheric nitrogen. Plants — higher plants and algae — and animals do not have this ability and must take nitrogen in another form: ammonia, nitrate, or bound in more complex organic molecules, especially amino acids. This corrects the chapter's own opening list (9-1), where nitrogen assimilation was named as a plant speciality.", cn: "**只有**细菌能固定大气氮。植物——高等植物与藻类——以及动物不具备这种能力，必须以其他形式摄取氮：氨、硝酸盐，或结合在更复杂的有机分子（尤其是氨基酸）中。这修正了本章开篇列表（9-1）——那里把氮同化列为植物的专长。" },
    { cz: "N₂ + 6H⁺ + 6e⁻ → 2NH₃", en: "Biological nitrogen fixation begins with the reduction of gaseous nitrogen to ammonia: N₂ + 6H⁺ + 6e⁻ → 2NH₃.", cn: "生物固氮始于把气态氮还原为氨：N₂ + 6H⁺ + 6e⁻ → 2NH₃。" },
    { cz: "exergonické, ale s vysokou aktivační energií", en: "The reaction is exergonic, but its activation energy is too high for it to occur spontaneously. In technical practice special catalysts, high pressure and high temperature must be used — the industrial contrast that makes the enzyme's achievement legible.", cn: "该反应是放能的，但其活化能过高以致无法自发进行。在工业实践中必须使用特殊催化剂、高压和高温——正是这一工业对照使该酶的成就变得可理解。" },
    { cz: "kdo to dělá", en: "The process is carried out by various microorganisms: aerobic and anaerobic bacteria living independently or in symbiosis with plants, and some photosynthesizing microorganisms (bacteria and cyanobacteria).", cn: "该过程由多种微生物执行：独立生活或与植物共生的好氧与厌氧细菌，以及某些光合微生物（细菌与蓝细菌）。" },
    { cz: "složení nitrogenasy", en: "Nitrogenase is a relatively complicated enzyme system containing 2 proteins, molybdenum ions, and non-haem-bound iron atoms (Fe-S proteins of the ferredoxin type). The scheme labels the two proteins as the Mo-Fe protein and the Fe protein.", cn: "固氮酶是一个相当复杂的酶系统，含2个蛋白、钼离子，以及非血红素结合的铁原子（铁氧还蛋白型的Fe-S蛋白）。图中把这两个蛋白标为Mo-Fe蛋白与Fe蛋白。" },
    { cz: "feredoxin a flavodoxin dodávají elektrony", en: "Electrons are supplied to the system by at least two carriers: ferredoxin (an Fe-S protein) and flavodoxin (containing flavin mononucleotide). In the scheme the six electrons come from cellular metabolic pathways via ferredoxin, then flavodoxin, then into the Mo-Fe/Fe protein pair.", cn: "电子由至少两种载体供给该系统：铁氧还蛋白（一种Fe-S蛋白）与黄素氧还蛋白（含黄素单核苷酸）。图中六个电子来自细胞代谢途径，经铁氧还蛋白、再经黄素氧还蛋白，进入Mo-Fe/Fe蛋白对。" },
    { cz: "1 ATP na jeden přenesený elektron", en: "The process is ATP-dependent and probably requires 1 ATP for each transferred electron; the scheme accordingly shows 6 ATP → 6 ADP + Pᵢ alongside the six electrons.", cn: "该过程依赖ATP，很可能每传递一个电子需要1个ATP；图中相应地在六个电子旁标出 6 ATP → 6 ADP + Pᵢ。" },
    { cz: "FLAG: stechiometrie 6 e⁻ / 6 ATP", en: "FLAGGED. The book's stoichiometry — 6 electrons, 6 ATP, no H₂ by-product — is internally consistent (its own '1 ATP per electron' statement gives exactly the 6 ATP its scheme shows), but it differs from the value in current standard references, which give N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2NH₃ + H₂, with obligatory hydrogen evolution. Reproduced as printed and flagged rather than silently updated; if asked in an exam, give the book's figures and note the modern value if you are confident of it.", cn: "**标记**。教材的化学计量——6个电子、6个ATP、无H₂副产物——自身是自洽的（其「每电子1个ATP」的表述恰好给出图中所示的6个ATP），但与当前标准文献所给的数值不同，后者为 N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2NH₃ + H₂，并伴有强制性的氢气释放。此处按原文照录并加标记，而非默默更新；若考试被问及，可给出教材的数值，并在有把握时补充现代数值。" }
  ],
  terms: [
    { cz: "nitrogenasa", en: "nitrogenase", cn: "固氮酶", def_en: "The bacterial enzyme system reducing N₂ to NH₃; contains two proteins (Mo-Fe protein and Fe protein), molybdenum ions and non-haem iron; ATP-dependent.", def_cn: "把N₂还原为NH₃的细菌酶系统；含两个蛋白（Mo-Fe蛋白与Fe蛋白）、钼离子与非血红素铁；依赖ATP。" },
    { cz: "flavodoxin", en: "flavodoxin", cn: "黄素氧还蛋白", def_en: "A flavin-mononucleotide-containing electron carrier that, with ferredoxin, supplies electrons to nitrogenase.", def_cn: "一种含黄素单核苷酸的电子载体，与铁氧还蛋白一同向固氮酶供给电子。" },
    { cz: "biogenní prvek", en: "biogenic element", cn: "生源元素", def_en: "An element essential to living matter; nitrogen qualifies through proteins, nucleic acids and other biochemically significant molecules.", def_cn: "对生命物质必不可少的元素；氮因存在于蛋白质、核酸及其他生化上重要的分子中而属于此类。" },
    { cz: "symbióza", en: "symbiosis", cn: "共生", def_en: "The living arrangement by which nitrogen-fixing bacteria supply plants with fixed nitrogen; the plants themselves cannot fix N₂.", def_cn: "固氮细菌为植物提供固定态氮的共同生活方式；植物自身无法固定N₂。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which organisms can fix atmospheric nitrogen?",
      q_cn: "哪些生物能固定大气氮？",
      options: [
        "All photosynthetic organisms, including higher plants",
        "Only bacteria — including some in symbiosis with plants, and some cyanobacteria",
        "Higher plants and algae, but not animals",
        "Only leguminous plants"
      ],
      answer: 1,
      why_en: "The book is explicit: only bacteria can fix atmospheric nitrogen. Plants — higher plants AND algae — and animals lack this ability and must take nitrogen up as ammonia, nitrate, or in organic molecules. Legumes benefit from symbiotic bacteria; the plant itself does not fix N₂.",
      why_cn: "教材明确指出：只有细菌能固定大气氮。植物——高等植物**与**藻类——以及动物都缺乏这种能力，必须以氨、硝酸盐或有机分子形式摄取氮。豆科植物受益于共生细菌；植物本身并不固定N₂。"
    },
    {
      type: "short",
      q_en: "Write the nitrogenase reaction as the book gives it, and say why it needs an enzyme at all if it is exergonic.",
      q_cn: "写出教材给出的固氮酶反应，并说明既然它是放能的，为何还需要酶。",
      accept: ["N2", "6H", "6e", "2NH3", "activation energy", "spontaneous"],
      answer_en: "N₂ + 6H⁺ + 6e⁻ → 2NH₃. It is exergonic, but the activation energy is too high for it to occur spontaneously — industrially this requires special catalysts, high pressure and high temperature; biologically, nitrogenase.",
      answer_cn: "N₂ + 6H⁺ + 6e⁻ → 2NH₃。它是放能的，但活化能过高以致无法自发进行——在工业上这需要特殊催化剂、高压与高温；在生物学上则靠固氮酶。"
    }
  ],
  oral: {
    q_en: "Explain biological nitrogen fixation and why it is such a demanding reaction.",
    q_cn: "请解释生物固氮，以及为何这是一个如此苛刻的反应。",
    model_en: "Nitrogen is everywhere — seventy-eight percent of the atmosphere — and almost entirely unavailable, because molecular nitrogen is extremely inert. The textbook makes a point worth stressing: only bacteria can fix it. Plants, including algae, and animals cannot; they have to take nitrogen up already reduced, as ammonia or nitrate or bound in amino acids. The reaction itself is nitrogen plus six protons and six electrons giving two ammonias, and here is the paradox: that reaction is exergonic, thermodynamically downhill. What stops it is kinetics — the activation energy is enormous, which is why the industrial version needs special catalysts, high pressure and high temperature. Nature's solution is nitrogenase, a complicated system of two proteins, one carrying molybdenum with iron and one iron alone, plus non-haem iron in ferredoxin-type clusters. Electrons reach it from cellular metabolism through at least two carriers, ferredoxin and flavodoxin, the latter carrying flavin mononucleotide. And it is expensive: the process is ATP-dependent, roughly one ATP per electron transferred, so six ATP in the book's scheme. Which is the general lesson — biology does not beat thermodynamics here, it beats the activation barrier, and it pays for that in ATP.",
    checklist: [
      "Gave the 78% figure and explained that abundance is not availability, because N₂ is inert",
      "Stated clearly that only bacteria fix N₂; plants and animals cannot",
      "Wrote N₂ + 6H⁺ + 6e⁻ → 2NH₃ as the book gives it",
      "Explained the paradox: exergonic but with too high an activation energy, hence the industrial catalyst/pressure/temperature contrast",
      "Described nitrogenase: two proteins, Mo ions, non-haem Fe (ferredoxin-type Fe-S)",
      "Named ferredoxin and flavodoxin as the electron suppliers",
      "Gave the ATP dependence at roughly 1 ATP per electron"
    ]
  }
},

{
  id: "9-24",
  book: "cz",
  topicKey: "nitrogen-metabolism",
  chapter: 9,
  section: "9.4",
  czTitle: "Asimilace amoniaku — glutamátdehydrogenasa a glutaminsynthasa",
  enTitle: "Ammonia assimilation — glutamate dehydrogenase and glutamine synthase",
  cnTitle: "氨的同化——谷氨酸脱氢酶与谷氨酰胺合成酶",
  pages: [215],
  coverage: "full",
  coverageNote: "The middle of p.215 read in full; both equations reproduced exactly as printed, including the reversible double arrow on the glutamate dehydrogenase reaction and the AMP + 2Pi (rather than ADP + Pi) products of the glutamine synthase reaction, which is a detail easily mis-copied. The book's naming 'glutaminsynthasa' is kept as printed; standard references call this enzyme glutamine SYNTHETASE, and that difference is noted in the points rather than silently corrected.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Every nitrogen atom that enters a plant's organic matter goes through just two enzymes, and everything downstream of them is transamination — so the junction between carbon metabolism and nitrogen metabolism is one concrete molecule, α-oxoglutarate taken out of the citrate cycle. Note that glutamine synthase spends ATP all the way down to AMP plus two phosphates, i.e. two high-energy bonds, and that is what makes the step effectively one-way.", cn: "植物有机物里的每一个氮原子，都只经由两个酶进入，它们下游的一切都是转氨作用——所以碳代谢和氮代谢的接口是一个很具体的分子：从柠檬酸循环里抽出来的 α-酮戊二酸。注意谷氨酰胺合成酶把 ATP 一直花到 AMP 加两个磷酸，也就是花掉两个高能键，这正是这一步实际上不可逆的原因。" },
  summary: {
    en: "The ammonia produced by nitrogen fixation can be used directly by plants for the production of nitrogenous organic compounds. The book names the most important step: fixation of ammonia by glutamate dehydrogenase (cross-referenced to kap. 5) in the chloroplasts, written as a reversible reaction: α-oxoglutarate + NADPH + H⁺ + NH₄⁺ ⇌ glutamate + NADP⁺ + H₂O. The nitrogen store in the chloroplasts is glutamine, which arises by fixing a further NH₃ molecule by means of glutamine synthase: L-glutamate + NH₄⁺ + ATP → L-glutamine + AMP + 2Pᵢ. Note the products carefully — AMP and two inorganic phosphates, not ADP and one, meaning the ATP is cleaved at the α–β position and the equivalent of two high-energy bonds is spent, which is what makes the step effectively irreversible. From glutamate and glutamine, all the other amino acids arise by transamination reactions, and step by step further nitrogenous compounds, which thereby enter the food chain. So the entire nitrogen economy of the plant funnels through exactly two ammonia-fixing enzymes, and everything downstream is transamination — a small, memorable structure.",
    cn: "固氮所产生的氨可被植物直接用于生产含氮有机化合物。教材点明其中最重要的一步：在叶绿体中由谷氨酸脱氢酶（交叉引用至第5章）固定氨，写作一个可逆反应：α-酮戊二酸 + NADPH + H⁺ + NH₄⁺ ⇌ 谷氨酸 + NADP⁺ + H₂O。叶绿体中氮的贮库是谷氨酰胺，它通过谷氨酰胺合成酶再固定一个NH₃分子而生成：L-谷氨酸 + NH₄⁺ + ATP → L-谷氨酰胺 + AMP + 2Pᵢ。请仔细留意产物——是AMP和两个无机磷酸，而不是ADP加一个，这意味着ATP在α–β位断裂、消耗了相当于两个高能键的量，正因如此该步骤实际上不可逆。由谷氨酸与谷氨酰胺出发，所有其他氨基酸经转氨反应生成，并逐步生成更多含氮化合物，从而进入食物链。因此植物的整个氮经济都汇聚于恰恰两个固定氨的酶，其下游的一切都是转氨作用——一个小巧而易记的结构。"
  },
  points: [
    { cz: "amoniak lze využít přímo", en: "The ammonia arising from fixation can be used directly by plants for the production of nitrogenous organic compounds — no further reduction is needed, since NH₃ is already at the oxidation level of an amino group.", cn: "固氮产生的氨可被植物直接用于生产含氮有机化合物——无需进一步还原，因为NH₃已处于氨基的氧化水平。" },
    { cz: "glutamátdehydrogenasa v chloroplastech", en: "The most important step is the fixation of ammonia by glutamate dehydrogenase (see also kap. 5) in the chloroplasts: α-oxoglutarate + NADPH + H⁺ + NH₄⁺ ⇌ glutamate + NADP⁺ + H₂O. The book writes it with a reversible double arrow.", cn: "最重要的一步是在叶绿体中由谷氨酸脱氢酶（另见第5章）固定氨：α-酮戊二酸 + NADPH + H⁺ + NH₄⁺ ⇌ 谷氨酸 + NADP⁺ + H₂O。教材用可逆双箭头书写。" },
    { cz: "α-oxoglutarát je vstupní uhlíkatý skelet", en: "The carbon skeleton that receives the nitrogen is α-oxoglutarate — a citrate cycle intermediate. This is the concrete junction between carbon metabolism and nitrogen metabolism.", cn: "接受氮的碳骨架是α-酮戊二酸——一个柠檬酸循环中间体。这正是碳代谢与氮代谢之间具体的交汇点。" },
    { cz: "glutamin je zásobárna dusíku", en: "The store of nitrogen in the chloroplasts is glutamine, arising by fixation of a further NH₃ molecule by means of glutamine synthase: L-glutamate + NH₄⁺ + ATP → L-glutamine + AMP + 2Pᵢ.", cn: "叶绿体中氮的贮库是谷氨酰胺，它经谷氨酰胺合成酶再固定一个NH₃分子而生成：L-谷氨酸 + NH₄⁺ + ATP → L-谷氨酰胺 + AMP + 2Pᵢ。" },
    { cz: "AMP + 2Pᵢ, ne ADP + Pᵢ", en: "The products are AMP and TWO inorganic phosphates, not ADP and one. The ATP is therefore cleaved at the α–β position and two high-energy-bond equivalents are spent, which is what drives the step effectively to completion.", cn: "产物是AMP和**两个**无机磷酸，而非ADP加一个。因此ATP在α–β位断裂，消耗了两个高能键当量，正是这一点使该步骤实际上被推向完全。" },
    { cz: "vše ostatní transaminací", en: "All the other amino acids arise by transamination reactions from these, and step by step further nitrogenous compounds, which thereby enter the food chain. Two ammonia-fixing enzymes at the head, transamination for everything else.", cn: "所有其他氨基酸都由这些经转氨反应生成，并逐步生成更多含氮化合物，从而进入食物链。前端是两个固定氨的酶，其余一切都靠转氨作用。" },
    { cz: "poznámka k názvu: synthasa vs synthetasa", en: "The book writes 'glutaminsynthasa'; standard references name this enzyme glutamine SYNTHETASE (a ligase using ATP). Noted rather than silently corrected — the chemistry the book writes, with ATP → AMP + 2Pᵢ, is that of a synthetase.", cn: "教材写作「glutaminsynthasa」；标准文献把该酶称为谷氨酰胺**合成酶**(synthetase，一种使用ATP的连接酶)。此处加以注明而非默默更正——教材所写的化学过程（ATP→AMP+2Pᵢ）正是合成酶的化学。" }
  ],
  terms: [
    { cz: "glutamátdehydrogenasa", en: "glutamate dehydrogenase", cn: "谷氨酸脱氢酶", def_en: "The chloroplast enzyme fixing NH₄⁺ onto α-oxoglutarate using NADPH, giving glutamate; a reversible reaction and the main entry of ammonia into organic matter.", def_cn: "在叶绿体中用NADPH把NH₄⁺固定到α-酮戊二酸上生成谷氨酸的酶；反应可逆，是氨进入有机物的主要入口。" },
    { cz: "glutaminsynthasa", en: "glutamine synthase (glutamine synthetase)", cn: "谷氨酰胺合成酶", def_en: "Fixes a second NH₄⁺ onto glutamate at the cost of ATP → AMP + 2Pᵢ, giving glutamine — the chloroplast's nitrogen store.", def_cn: "以ATP→AMP+2Pᵢ的代价把第二个NH₄⁺固定到谷氨酸上生成谷氨酰胺——叶绿体的氮贮库。" },
    { cz: "α-oxoglutarát", en: "α-oxoglutarate (2-oxoglutarate)", cn: "α-酮戊二酸", def_en: "The citrate-cycle keto acid that accepts ammonia to become glutamate; the carbon/nitrogen metabolic junction.", def_cn: "接受氨而变成谷氨酸的柠檬酸循环酮酸；碳代谢与氮代谢的交汇点。" },
    { cz: "transaminace", en: "transamination", cn: "转氨作用", def_en: "Transfer of an amino group from glutamate (or glutamine) onto a keto acid, generating all the other amino acids; covered in kap. 5.", def_cn: "把氨基从谷氨酸（或谷氨酰胺）转移到酮酸上，从而生成所有其他氨基酸；见第5章。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What are the products of the glutamine synthase reaction as the book writes it?",
      q_cn: "教材所写的谷氨酰胺合成酶反应，其产物是什么？",
      options: [
        "L-glutamine + ADP + Pᵢ",
        "L-glutamine + AMP + 2Pᵢ",
        "L-glutamate + NADP⁺ + H₂O",
        "L-glutamine + ATP + H₂O"
      ],
      answer: 1,
      why_en: "The book writes L-glutamate + NH₄⁺ + ATP → L-glutamine + AMP + 2Pᵢ. The ATP is cleaved at the α–β position, spending two high-energy-bond equivalents, which is what pushes the reaction to completion. Option 2 is the glutamate dehydrogenase reaction.",
      why_cn: "教材写作 L-谷氨酸 + NH₄⁺ + ATP → L-谷氨酰胺 + AMP + 2Pᵢ。ATP在α–β位断裂，消耗两个高能键当量，正是这一点把反应推向完全。选项2是谷氨酸脱氢酶的反应。"
    },
    {
      type: "short",
      q_en: "Which carbon skeleton first receives fixed nitrogen, and by which enzyme?",
      q_cn: "哪个碳骨架最先接受被固定的氮？由哪个酶完成？",
      accept: ["oxoglutarate", "2-oxoglutarate", "alpha-oxoglutarate", "glutamate dehydrogenase"],
      answer_en: "α-Oxoglutarate, a citrate cycle intermediate, by glutamate dehydrogenase using NADPH in the chloroplasts, giving glutamate.",
      answer_cn: "α-酮戊二酸（一个柠檬酸循环中间体），在叶绿体中由谷氨酸脱氢酶使用NADPH完成，生成谷氨酸。"
    }
  ],
  oral: {
    q_en: "How does a plant get fixed nitrogen into its organic molecules?",
    q_cn: "植物如何把被固定的氮引入自身的有机分子？",
    model_en: "Through a very narrow gate: essentially two enzymes, and then transamination for everything else. The ammonia can be used directly, since it is already at the oxidation level of an amino group. The most important step, in the chloroplast, is glutamate dehydrogenase: alpha-oxoglutarate — a citrate cycle intermediate — plus NADPH, a proton and ammonium, giving glutamate and NADP-plus and water. The book writes it reversibly, and notice what it means structurally: this is the actual junction between carbon metabolism and nitrogen metabolism, a keto acid from the citrate cycle picking up a nitrogen. Then glutamine synthase adds a second ammonium onto glutamate to give glutamine, which is the chloroplast's nitrogen store. That one costs ATP, and specifically it goes to AMP plus two phosphates, not ADP plus one — two high-energy-bond equivalents, which is what makes it effectively irreversible and therefore a good storage step. From glutamate and glutamine, transamination generates every other amino acid, and from those, step by step, all the other nitrogenous compounds, which is how fixed nitrogen enters the food chain.",
    checklist: [
      "Wrote the glutamate dehydrogenase equation with α-oxoglutarate, NADPH, NH₄⁺ and noted it is reversible",
      "Identified α-oxoglutarate as the carbon/nitrogen junction from the citrate cycle",
      "Wrote the glutamine synthase equation and correctly gave AMP + 2Pᵢ",
      "Explained why AMP + 2Pᵢ matters — two high-energy equivalents, effectively irreversible",
      "Identified glutamine as the chloroplast's nitrogen store",
      "Stated that all other amino acids follow by transamination, entering the food chain"
    ]
  }
},

{
  id: "9-25",
  book: "cz",
  topicKey: "nitrogen-metabolism",
  chapter: 9,
  section: "9.4",
  czTitle: "Nitrifikace, denitrifikace a nitrátreduktasa",
  enTitle: "Nitrification, denitrification and nitrate reductase",
  cnTitle: "硝化、反硝化与硝酸还原酶",
  pages: [215],
  coverage: "full",
  coverageNote: "The lower half of p.215 read in full, including the denitrification equation exactly as printed with its generic coefficients and its three bracketed products, and the nitrate reductase complex diagram at the foot of the page (NADH/NAD+ -> FAD/FADH2 -> 2Fe3+/2Fe2+ -> 2Mo5+/2Mo6+ -> NO3- + H+ giving NO2- + H2O). The relative molecular mass of nitrate reductase was read as 'asi 500 000'. FLAG: the denitrification products are printed as (N2O, N2, N2H2); N2H2 (diimide) is not a standard denitrification product -- see the point below.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Soil keeps its nitrogen as nitrate rather than ammonia because nitrate is non-toxic — and under anaerobic conditions bacteria can breathe that nitrate exactly as they would breathe oxygen. The price of the storage form is that a plant taking nitrate up must reduce it all the way back down to ammonia, repeating work already done once.", cn: "土壤把氮以硝酸盐而不是氨的形式存着，是因为硝酸盐无毒——而在缺氧条件下，细菌可以像呼吸氧气一样「呼吸」硝酸盐。这种储存形式的代价是：植物吸收硝酸盐之后，必须再把它一路还原回氨，等于把别人已经做过一遍的功重做一次。" },
  summary: {
    en: "Reduced forms of nitrogen return to the soil in the form of excreta and, after death, through the decomposition of the bodies of plants and animals. All soil ammonia can be bacterially oxidized to nitrate by the process called NITRIFICATION; NO₃⁻ represents a non-toxic store of soil nitrogen. A number of soil bacteria are capable of the opposite process, DENITRIFICATION: x NO₃⁻ + y NADH + y H⁺ → (N₂O, N₂, N₂H₂) + y NAD⁺ + z H₂O. This is sometimes also called nitrate respiration, because NO₃⁻ under anaerobic conditions effectively replaces oxygen — i.e. it serves as the terminal electron acceptor. The greater part of the nitrate is absorbed from the soil by higher plants, which to a certain extent REPEAT the reduction that the N₂-fixing soil bacteria already performed once — this time, however, starting from a different oxidation state, and split into two stages: NO₃⁻ → NO₂⁻ → NH₄⁺. The first stage is catalysed by nitrate reductase, contained in the cell cytoplasm; its relative molecular mass is about 500 000, it contains Mo and Fe ions and FAD, and the donor of electrons is NADH. The diagram of the nitrate reductase complex shows the electron path in full: NADH gives two electrons to FAD, which passes them to a 2Fe³⁺/2Fe²⁺ couple, then to a 2Mo⁵⁺/2Mo⁶⁺ couple, and finally to NO₃⁻ with H⁺, yielding NO₂⁻ and H₂O. Note the recurring design: nitrogen chemistry in this chapter is repeatedly done by Mo plus Fe, in nitrogenase as in nitrate reductase.",
    cn: "还原态的氮以排泄物的形式、以及在死亡后经由动植物遗体的分解，返回土壤。土壤中的全部氨都可被细菌氧化为硝酸盐，这一过程称为**硝化**；NO₃⁻构成土壤氮的无毒贮库。许多土壤细菌能进行相反的过程，即**反硝化**：x NO₃⁻ + y NADH + y H⁺ → (N₂O, N₂, N₂H₂) + y NAD⁺ + z H₂O。这有时也称硝酸盐呼吸，因为在厌氧条件下NO₃⁻实际上取代了氧——即充当末端电子受体。硝酸盐的大部分被高等植物从土壤中吸收，这些植物在一定程度上**重复**了固氮土壤细菌已经做过一次的还原——只不过这次是从另一个氧化态出发，并分为两个阶段：NO₃⁻ → NO₂⁻ → NH₄⁺。第一阶段由硝酸还原酶催化，该酶存在于细胞胞质中；其相对分子质量约为500 000，含Mo与Fe离子以及FAD，电子供体是NADH。硝酸还原酶复合体的图示完整展示了电子路径：NADH把两个电子交给FAD，FAD再传给2Fe³⁺/2Fe²⁺电对，继而传给2Mo⁵⁺/2Mo⁶⁺电对，最后传给NO₃⁻与H⁺，生成NO₂⁻和H₂O。注意其中反复出现的设计：本章中的氮化学一再由Mo加Fe来完成，固氮酶如此，硝酸还原酶亦然。"
  },
  points: [
    { cz: "návrat dusíku do půdy", en: "Reduced forms of nitrogen get back into the soil in the form of excreta and, after death, through the decomposition of the bodies of plants and animals.", cn: "还原态的氮以排泄物形式、以及死亡后经动植物遗体分解，返回土壤。" },
    { cz: "nitrifikace: NH₃ → NO₃⁻", en: "All soil ammonia can be bacterially oxidized to nitrate by the process called nitrification. NO₃⁻ represents a NON-TOXIC store of soil nitrogen — which is the functional reason the soil holds its nitrogen in this oxidized form rather than as ammonia.", cn: "土壤中的全部氨都可被细菌氧化为硝酸盐，此过程称为硝化。NO₃⁻构成土壤氮的**无毒**贮库——这正是土壤以这种氧化形式而非氨的形式贮存氮的功能性原因。" },
    { cz: "denitrifikace", en: "A number of soil bacteria are capable of the opposite process, denitrification: x NO₃⁻ + y NADH + y H⁺ → (N₂O, N₂, N₂H₂) + y NAD⁺ + z H₂O. The generic coefficients x, y, z are the book's own, reflecting that the product mix varies.", cn: "许多土壤细菌能进行相反的过程，即反硝化：x NO₃⁻ + y NADH + y H⁺ → (N₂O, N₂, N₂H₂) + y NAD⁺ + z H₂O。通用系数x、y、z是教材原文所用，反映产物组合是可变的。" },
    { cz: "nitrátové dýchání", en: "Denitrification is sometimes called nitrate respiration, because under anaerobic conditions NO₃⁻ effectively replaces oxygen — it is the terminal electron acceptor of an anaerobic respiratory chain.", cn: "反硝化有时称为硝酸盐呼吸，因为在厌氧条件下NO₃⁻实际上取代了氧——它是厌氧呼吸链的末端电子受体。" },
    { cz: "FLAG: N₂H₂ mezi produkty", en: "FLAGGED. The book prints the denitrification products as (N₂O, N₂, N₂H₂). N₂O and N₂ are the standard gaseous products; N₂H₂ (diimide/diazene) is not a recognised denitrification product in standard references, and is an unusual species to list. Reproduced as printed and flagged rather than silently dropped, per this project's rule; if reciting the equation, N₂O and N₂ are the safe answers.", cn: "**标记**。教材把反硝化产物印为 (N₂O, N₂, N₂H₂)。N₂O与N₂是标准的气态产物；N₂H₂（二亚胺/二氮烯）在标准文献中并非公认的反硝化产物，作为一个被列出的物种颇不寻常。按本项目规则照录原文并加标记，而非默默删去；若要背诵该方程，N₂O与N₂是稳妥的答案。" },
    { cz: "rostliny opakují redukci ve dvou stupních", en: "The greater part of the nitrate is absorbed from the soil by higher plants, which to a certain extent repeat the reduction the N₂-fixing bacteria already performed once — this time from a different oxidation state, split into two stages: NO₃⁻ → NO₂⁻ → NH₄⁺.", cn: "硝酸盐的大部分被高等植物从土壤中吸收，这些植物在一定程度上重复了固氮细菌已做过一次的还原——只不过这次从另一个氧化态出发，并分为两个阶段：NO₃⁻ → NO₂⁻ → NH₄⁺。" },
    { cz: "nitrátreduktasa: Mr ≈ 500 000, Mo, Fe, FAD", en: "The first stage is catalysed by nitrate reductase, contained in the cell CYTOPLASM (not the chloroplast). Its relative molecular mass is about 500 000, it contains Mo and Fe ions and FAD, and the donor of electrons is NADH.", cn: "第一阶段由硝酸还原酶催化，该酶存在于细胞**胞质**中（不在叶绿体内）。其相对分子质量约500 000，含Mo与Fe离子以及FAD，电子供体是NADH。" },
    { cz: "elektronová cesta v komplexu", en: "The nitrate reductase complex diagram gives the full electron path: NADH → FAD (2e⁻) → 2Fe³⁺/2Fe²⁺ → 2Mo⁵⁺/2Mo⁶⁺ → NO₃⁻ + H⁺, giving NO₂⁻ + H₂O. Molybdenum is again the atom at the point of contact with nitrogen, exactly as in nitrogenase.", cn: "硝酸还原酶复合体的图示给出完整的电子路径：NADH → FAD (2e⁻) → 2Fe³⁺/2Fe²⁺ → 2Mo⁵⁺/2Mo⁶⁺ → NO₃⁻ + H⁺，生成NO₂⁻ + H₂O。钼再次成为与氮直接接触的那个原子，与固氮酶中完全一致。" }
  ],
  terms: [
    { cz: "nitrifikace", en: "nitrification", cn: "硝化作用", def_en: "Bacterial oxidation of soil ammonia to nitrate; produces NO₃⁻, the non-toxic store of soil nitrogen.", def_cn: "细菌把土壤中的氨氧化为硝酸盐；产生NO₃⁻，即土壤氮的无毒贮库。" },
    { cz: "denitrifikace", en: "denitrification", cn: "反硝化作用", def_en: "Bacterial reduction of nitrate to gaseous nitrogen products; also called nitrate respiration, since NO₃⁻ replaces O₂ as terminal electron acceptor anaerobically.", def_cn: "细菌把硝酸盐还原为气态氮产物；亦称硝酸盐呼吸，因为在厌氧条件下NO₃⁻取代O₂充当末端电子受体。" },
    { cz: "nitrátreduktasa", en: "nitrate reductase", cn: "硝酸还原酶", def_en: "The cytoplasmic enzyme reducing NO₃⁻ to NO₂⁻; Mr ≈ 500 000, contains Mo and Fe ions and FAD, uses NADH as electron donor.", def_cn: "把NO₃⁻还原为NO₂⁻的胞质酶；Mr≈500 000，含Mo与Fe离子以及FAD，以NADH为电子供体。" },
    { cz: "nitrátové dýchání", en: "nitrate respiration", cn: "硝酸盐呼吸", def_en: "Another name for denitrification, reflecting that nitrate serves as the terminal electron acceptor in place of oxygen under anaerobic conditions.", def_cn: "反硝化的另一名称，反映在厌氧条件下硝酸盐代替氧充当末端电子受体。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why is denitrification also called 'nitrate respiration'?",
      q_cn: "为何反硝化又被称为「硝酸盐呼吸」？",
      options: [
        "Because it releases CO₂ like ordinary respiration",
        "Because under anaerobic conditions NO₃⁻ effectively replaces oxygen as the terminal electron acceptor",
        "Because it occurs in mitochondria",
        "Because it consumes O₂ as well as NO₃⁻"
      ],
      answer: 1,
      why_en: "The book's reason is exactly this: NO₃⁻ under anaerobic conditions effectively replaces oxygen. The bacteria run an electron transport chain ending on nitrate instead of on O₂, which is why the process consumes NADH.",
      why_cn: "教材给出的理由正是如此：在厌氧条件下NO₃⁻实际上取代了氧。细菌运行的电子传递链以硝酸盐而非O₂为终点，这也是该过程消耗NADH的原因。"
    },
    {
      type: "short",
      q_en: "Trace the electron path through the nitrate reductase complex.",
      q_cn: "请追踪电子在硝酸还原酶复合体中的传递路径。",
      accept: ["NADH", "FAD", "Fe", "Mo", "NO3", "NO2"],
      answer_en: "NADH donates two electrons to FAD; FAD passes them to a 2Fe³⁺/2Fe²⁺ couple, then to a 2Mo⁵⁺/2Mo⁶⁺ couple, and finally to NO₃⁻ with H⁺, giving NO₂⁻ and H₂O.",
      answer_cn: "NADH把两个电子交给FAD；FAD传给2Fe³⁺/2Fe²⁺电对，继而传给2Mo⁵⁺/2Mo⁶⁺电对，最后传给NO₃⁻与H⁺，生成NO₂⁻和H₂O。"
    }
  ],
  oral: {
    q_en: "Describe how nitrogen moves between its oxidation states in the soil and in the plant.",
    q_cn: "请描述氮在土壤中和植物体内如何在各氧化态之间迁移。",
    model_en: "Nitrogen returns to the soil in reduced form — as excreta, and after death through decomposition of plant and animal bodies. Soil bacteria then oxidize that ammonia all the way to nitrate, a process called nitrification, and the textbook makes the functional point that nitrate is a non-toxic store of soil nitrogen, which is why the soil holds it this way rather than as ammonia. Other bacteria run the process backwards — denitrification — reducing nitrate to gaseous products with NADH as the reductant. That is also called nitrate respiration, because anaerobically nitrate takes the place of oxygen as the terminal electron acceptor. Most of the nitrate, though, is taken up by higher plants, and here is the irony the book notes: the plant then has to redo, in part, a reduction that the nitrogen-fixing bacteria already did once — only starting from a different oxidation state, and in two stages, nitrate to nitrite and nitrite to ammonium. The first stage is nitrate reductase, in the cytoplasm rather than the chloroplast; a big enzyme, molecular mass around five hundred thousand, containing molybdenum, iron and FAD, with NADH as electron donor. The electrons run NADH to FAD to an iron couple to a molybdenum couple and finally to nitrate. Molybdenum is again the atom in contact with the nitrogen — exactly as in nitrogenase.",
    checklist: [
      "Described how reduced nitrogen returns to soil (excreta, decomposition)",
      "Defined nitrification and noted nitrate is the non-toxic soil store",
      "Defined denitrification, gave NADH as reductant, and explained the name nitrate respiration",
      "Noted that plants partly repeat the reduction, in two stages NO₃⁻ → NO₂⁻ → NH₄⁺",
      "Located nitrate reductase in the cytoplasm and gave Mr ≈ 500 000, Mo, Fe, FAD, NADH",
      "Traced NADH → FAD → Fe → Mo → NO₃⁻",
      "Noted the recurring Mo/Fe motif shared with nitrogenase"
    ]
  }
},

{
  id: "9-26",
  book: "cz",
  topicKey: "nitrogen-metabolism",
  chapter: 9,
  section: "9.4",
  czTitle: "Nitritreduktasa a koloběh dusíku v biosféře (obr. 9.9)",
  enTitle: "Nitrite reductase and the nitrogen cycle in the biosphere (Obr. 9.9)",
  cnTitle: "亚硝酸还原酶与生物圈中的氮循环（图9.9）",
  pages: [216],
  coverage: "full",
  coverageNote: "The top of p.216 and the whole of Obr. 9.9 read in full. The book's distinction between nitrite reduction in non-photosynthesizing parts (roots — coupled with respiration) and in leaves (reducing agent ferredoxin supplied by photosynthesis) is reproduced, since it is the passage's actual argument. The small scheme above Obr. 9.9 was read as drawn: H2O -> Fotosystem 1,2 -> 1/2 O2 + 2H+, with Fd_red/Fd_ox cycling through nitrit reduktasa to turn NO2- into NH4+ and thence amino acids. Obr. 9.9's arrows and labels were read individually and all are listed in the points.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read)", status: "partial" },
  mustKnow: { en: "Reducing nitrite takes an unusually strong reductant, and that single requirement settles everything else: in a leaf the reductant is ferredoxin straight off the light reactions, so nitrogen assimilation is a direct consumer of photosynthesis rather than a process running alongside it, while in a root the same job has to be paid for out of respiration. In the biosphere-wide cycle ammonia is the hub — bacterial fixation, urea breakdown and decomposition all converge on it.", cn: "把亚硝酸盐还原掉需要一个特别强的还原剂，而仅这一个要求就决定了其余的一切：在叶子里，还原剂是直接来自光反应的铁氧还蛋白 (ferredoxin)，所以氮同化是光合作用的直接消费者，而不是与它并行的另一件事；在根里，同样的活儿只能由呼吸作用来买单。在整个生物圈的氮循环中，氨是枢纽——细菌固氮、尿素分解、死亡腐解，全都汇聚到它这里。" },
  summary: {
    en: "In the second stage the reduction of nitrite to ammonia occurs, by a reaction controlled by nitrite reductase. This step requires a STRONG reducing agent with a low redox potential — which is the crux of the passage, because it constrains where the step can happen and what can supply it. It has been shown that reduction of nitrite can occur both in non-photosynthesizing parts of plants, e.g. in the roots, and in the leaves. In the first case it is evidently a process coupled with respiration; in the second, the source of the reducing agent ferredoxin (Fd) is photosynthesis. The accompanying small scheme makes this explicit: water is split by photosystems 1 and 2 giving ½O₂ + 2H⁺, and the reduced ferredoxin so generated cycles through nitrite reductase, converting NO₂⁻ into NH₄⁺ and thence into amino acids. This is the point at which the photosynthesis chapter and the nitrogen chapter finally meet: the same ferredoxin that reduces NADP⁺ in Obr. 9.5 is the low-potential reductant that nitrite reduction requires. Obr. 9.9 then presents the whole nitrogen cycle of the biosphere: N₂ is converted to NH₃ by bacteria containing nitrogenase, and back from NO₂⁻ to N₂ by denitrifying bacteria; NH₃ is oxidized to NO₂⁻ and NO₃⁻ by nitrifying bacteria, with NO₃⁻ labelled as the store of nitrogen in the soil and plants drawing on it; NH₃ is assimilated into organic compounds of plants, which pass to organic compounds of animals as food, which return via excretion as urea (H₂NCONH₂), broken down by plants and microbes back to NH₃, while death and decomposition return organic nitrogen directly to NH₃.",
    cn: "在第二阶段，亚硝酸盐被还原为氨，反应由亚硝酸还原酶控制。这一步需要一种氧化还原电位低的**强**还原剂——这正是本段的关键，因为它限定了该步骤能在何处发生、能由什么来供给。已经证明，亚硝酸盐的还原既可发生在植物的非光合部位（如根中），也可发生在叶片中。前一种情形显然是与呼吸作用相偶联的过程；后一种情形中，还原剂铁氧还蛋白(Fd)的来源是光合作用。所附的小图把这一点明示出来：水由光系统1和2裂解，生成½O₂+2H⁺，由此产生的还原态铁氧还蛋白经亚硝酸还原酶循环，把NO₂⁻转变为NH₄⁺，进而转化为氨基酸。这正是光合作用一章与氮代谢一章最终交汇之处：图9.5中还原NADP⁺的那同一个铁氧还蛋白，正是亚硝酸还原所需要的低电位还原剂。随后图9.9呈现整个生物圈的氮循环：N₂由含固氮酶的细菌转变为NH₃，又由反硝化细菌从NO₂⁻转回N₂；NH₃由硝化细菌氧化为NO₂⁻和NO₃⁻，其中NO₃⁻被标注为土壤中的氮贮库、供植物取用；NH₃被同化进植物的有机化合物，后者作为食物传递给动物的有机化合物，再经排泄以尿素(H₂NCONH₂)形式返回，由植物与微生物分解回NH₃，同时死亡与腐解使有机氮直接回到NH₃。"
  },
  points: [
    { cz: "nitritreduktasa vyžaduje silné redukční činidlo", en: "The second stage — reduction of nitrite to ammonia — is controlled by nitrite reductase, and requires a STRONG reducing agent with a low redox potential. This requirement is what determines everything else in the passage.", cn: "第二阶段——亚硝酸盐还原为氨——由亚硝酸还原酶控制，且需要一种氧化还原电位低的**强**还原剂。正是这一要求决定了本段其余的一切。" },
    { cz: "v kořenech spřaženo s respirací", en: "Nitrite reduction can occur in non-photosynthesizing parts of the plant, e.g. in the roots; there it is evidently a process coupled with respiration, which is where the reducing power must come from in the dark tissue.", cn: "亚硝酸盐还原可发生在植物的非光合部位（如根中）；在那里它显然是与呼吸作用相偶联的过程——在无光的组织中，还原力必然由此而来。" },
    { cz: "v listech dodává feredoxin fotosyntéza", en: "In leaves the source of the reducing agent ferredoxin (Fd) is photosynthesis. The scheme shows water split by photosystems 1 and 2 to ½O₂ + 2H⁺, with the resulting Fd_red cycling through nitrite reductase to make NH₄⁺ and thence amino acids.", cn: "在叶片中，还原剂铁氧还蛋白(Fd)的来源是光合作用。图中显示水由光系统1和2裂解为½O₂+2H⁺，由此产生的还原态Fd经亚硝酸还原酶循环，生成NH₄⁺并进而生成氨基酸。" },
    { cz: "spojení kapitol 9.1 a 9.4", en: "This is where §9.1 and §9.4 join: the ferredoxin that reduces NADP⁺ in Obr. 9.5 is the same low-potential reductant nitrite reduction demands. Nitrogen assimilation in the leaf is therefore a direct consumer of the light reactions, not merely a parallel process.", cn: "这正是§9.1与§9.4的接合处：图9.5中还原NADP⁺的那个铁氧还蛋白，正是亚硝酸还原所需的低电位还原剂。因此叶片中的氮同化是光反应的直接消费者，而不只是一个并行的过程。" },
    { cz: "obr. 9.9 — bakteriální kroky", en: "In Obr. 9.9, N₂ is converted to NH₃ by 'bakterie obsahující nitrogenasu' (bacteria containing nitrogenase), and denitrifying bacteria return NO₂⁻ to N₂; nitrifying bacteria oxidize in the other direction towards NO₂⁻ and NO₃⁻.", cn: "在图9.9中，N₂由「含固氮酶的细菌」转变为NH₃，反硝化细菌把NO₂⁻送回N₂；硝化细菌则朝相反方向氧化，通向NO₂⁻与NO₃⁻。" },
    { cz: "obr. 9.9 — NO₃⁻ jako zásoba v půdě", en: "NO₃⁻ is labelled in the figure as 'zásoba dusíku v půdě', the store of nitrogen in the soil, with an arrow from plants (rostliny) drawing on it — the diagrammatic form of the point made in 9-25.", cn: "图中NO₃⁻被标为「zásoba dusíku v půdě」（土壤中的氮贮库），并有来自植物(rostliny)的箭头取用它——这是9-25中论点的图示形式。" },
    { cz: "obr. 9.9 — organická smyčka", en: "The organic loop in Obr. 9.9: NH₃ is assimilated into organic compounds of plants; these pass as food (potrava) to organic compounds of animals; excretion (vyměšování) yields urea, H₂NCONH₂; plants and microbes (rostliny, mikroby) break urea back down to NH₃; and death and decomposition (smrt a rozklad) return organic nitrogen directly to NH₃.", cn: "图9.9中的有机循环：NH₃被同化进植物的有机化合物；这些作为食物(potrava)传给动物的有机化合物；排泄(vyměšování)产生尿素H₂NCONH₂；植物与微生物(rostliny, mikroby)把尿素分解回NH₃；死亡与腐解(smrt a rozklad)则使有机氮直接回到NH₃。" },
    { cz: "NH₃ je uzlem celého cyklu", en: "Reading the figure as a whole, NH₃ sits at the hub: every route — bacterial fixation, urea breakdown, death and decomposition — converges on it, and from it nitrogen either goes up into nitrite/nitrate or across into organic compounds.", cn: "整体来看这幅图，NH₃处于枢纽位置：每一条路径——细菌固氮、尿素分解、死亡与腐解——都汇聚于它，而氮又从它出发，或向上进入亚硝酸盐/硝酸盐，或横向进入有机化合物。" }
  ],
  terms: [
    { cz: "nitritreduktasa", en: "nitrite reductase", cn: "亚硝酸还原酶", def_en: "The enzyme reducing NO₂⁻ to NH₄⁺; requires a strong, low-potential reducing agent — ferredoxin from photosynthesis in leaves, respiration-derived reducing power in roots.", def_cn: "把NO₂⁻还原为NH₄⁺的酶；需要强的低电位还原剂——叶片中来自光合作用的铁氧还蛋白，根中则来自呼吸作用的还原力。" },
    { cz: "koloběh dusíku", en: "nitrogen cycle", cn: "氮循环", def_en: "The circulation of nitrogen through its oxidation states and through organisms, shown in Obr. 9.9 with NH₃ as the hub.", def_cn: "氮在各氧化态之间以及在各类生物之间的循环流转，图9.9以NH₃为枢纽加以呈现。" },
    { cz: "močovina", en: "urea", cn: "尿素", def_en: "H₂NCONH₂; the excretory nitrogen compound in Obr. 9.9, broken back down to NH₃ by plants and microbes.", def_cn: "H₂NCONH₂；图9.9中的排泄性含氮化合物，由植物与微生物分解回NH₃。" },
    { cz: "nitrifikační bakterie", en: "nitrifying bacteria", cn: "硝化细菌", def_en: "Soil bacteria oxidizing ammonia through nitrite to nitrate, building the soil's non-toxic nitrogen store.", def_cn: "把氨经亚硝酸盐氧化为硝酸盐的土壤细菌，从而建立土壤的无毒氮贮库。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What supplies the reducing power for nitrite reduction in a leaf, and what in a root?",
      q_cn: "叶片中亚硝酸盐还原的还原力由什么提供？根中又由什么提供？",
      options: [
        "Photosynthesis (ferredoxin) in the leaf; a process coupled with respiration in the root",
        "Respiration in both",
        "Photosynthesis in both, ferredoxin being transported to the root",
        "NADPH from the pentose phosphate pathway in both"
      ],
      answer: 0,
      why_en: "The book states that nitrite reduction occurs in both photosynthesizing and non-photosynthesizing parts. In the roots it is evidently coupled with respiration; in the leaves the source of the reducing agent ferredoxin is photosynthesis. The step needs a strong, low-potential reductant either way.",
      why_cn: "教材指出亚硝酸盐还原在光合与非光合部位都会发生。在根中它显然与呼吸作用相偶联；在叶片中还原剂铁氧还蛋白的来源是光合作用。无论哪种情形，该步骤都需要强的低电位还原剂。"
    },
    {
      type: "short",
      q_en: "In Obr. 9.9, which compound sits at the hub of the nitrogen cycle, and name three routes that lead into it.",
      q_cn: "在图9.9中，哪个化合物位于氮循环的枢纽？说出通向它的三条路径。",
      accept: ["NH3", "ammonia", "nitrogenase", "urea", "death", "decomposition", "fixation"],
      answer_en: "NH₃. Routes into it: bacterial N₂ fixation by nitrogenase-containing bacteria; breakdown of urea by plants and microbes; death and decomposition of organic matter. (Nitrifying bacteria lead out of it, towards nitrite and nitrate.)",
      answer_cn: "NH₃。通向它的路径：含固氮酶的细菌进行的N₂固定；植物与微生物对尿素的分解；有机物的死亡与腐解。（硝化细菌则是从它出发，通向亚硝酸盐与硝酸盐。）"
    }
  ],
  oral: {
    q_en: "Present the nitrogen cycle of the biosphere.",
    q_cn: "请呈现生物圈的氮循环。",
    model_en: "The cleanest way to present it is to put ammonia at the centre, because everything converges there. Coming in: nitrogen-fixing bacteria, the only organisms with nitrogenase, reduce atmospheric N-two to ammonia; the breakdown of urea by plants and microbes returns excreted nitrogen; and the death and decomposition of plants and animals returns organic nitrogen. Going out: nitrifying bacteria oxidize ammonia through nitrite to nitrate, and nitrate is the soil's non-toxic nitrogen store, which is what plants actually take up. Denitrifying bacteria close the loop back to gaseous N-two. Now, when the plant takes up nitrate it has to re-reduce it, in two stages. The first, nitrate to nitrite, is nitrate reductase in the cytoplasm — molybdenum, iron and FAD, with NADH. The second, nitrite to ammonium, is nitrite reductase, and this one is interesting because it demands a strong reducing agent with a very low redox potential. In the roots that comes from respiration. In the leaves it comes from photosynthesis — specifically from reduced ferredoxin, the same carrier that reduces NADP-plus in the thylakoid scheme. So nitrogen assimilation in a leaf is a direct consumer of the light reactions. And from ammonium, glutamate dehydrogenase and glutamine synthase put the nitrogen into amino acids, and it enters the food chain.",
    checklist: [
      "Put NH₃ at the hub and named the routes in: bacterial fixation, urea breakdown, death/decomposition",
      "Named nitrification (→ nitrite → nitrate) and identified nitrate as the soil store taken up by plants",
      "Named denitrification as the return to gaseous N₂",
      "Gave the two-stage plant reduction NO₃⁻ → NO₂⁻ → NH₄⁺ with nitrate reductase and nitrite reductase",
      "Stated that nitrite reductase needs a strong low-potential reductant",
      "Distinguished the root (respiration-coupled) from the leaf (photosynthetic ferredoxin) source",
      "Connected onward to glutamate dehydrogenase/glutamine synthase and the food chain"
    ]
  }
},

{
  id: "9-27",
  book: "cz",
  topicKey: "cholesterol-and-isoprenoids",
  chapter: 9,
  section: "9.5",
  czTitle: "Sekundární rostlinné metabolity",
  enTitle: "Secondary plant metabolites",
  cnTitle: "次生植物代谢物",
  pages: [216, 217],
  coverage: "full",
  coverageNote: "Section 9.5 from its heading at the foot of p.216 through its two closing paragraphs at the top of p.217, read in full. This is the whole of the section and the whole of chapter 9; the remainder of p.217 carries no text of its own, only bleed-through from the reverse of the page, which was checked visually and confirmed as not belonging to this chapter. The book's careful double negative -- these substances are only APPARENTLY (zdanlive) unnecessary, and their biosynthesis is NOT self-serving at least from an evolutionary point of view -- is reproduced, because the whole point of the section lies in that hedge.",
  cnNote: { topic: null, title: "光合作用 Photosynthesis (笔记 pp.197-203, unnumbered appendix topic — page range from the HANDOFF §11 map, title-match only, not yet read; the notes have no dedicated secondary-metabolite topic)", status: "pending" },
  mustKnow: { en: "A plant cannot walk away from anything that threatens it, so it answers with chemistry instead — that single fact is why plants carry a far wider range of secondary metabolites than animals do. They look unnecessary only in the sense that no individual cell needs them to stay alive; and they are the reason so much of the pharmaceutical, food and cosmetics industry starts from plants.", cn: "植物遇到威胁没法走开，于是改用化学来回应——仅这一条事实，就解释了为什么植物的次生代谢物种类远比动物丰富。说它们「看似不必要」，只是就单个细胞活下去而言并不需要它们；而正是它们，使得制药、食品和化妆品行业有那么大一部分要从植物开始。" },
  summary: {
    en: "Metabolic pathways in plant cells do not differ fundamentally, in their basic processes, from the metabolic pathways of animal cells — the citrate cycle, protein biosynthesis, nucleic acids, glycolysis and the respiratory chain are shared. In a number of cases, however, plants have their specifics: the biosynthesis of essential amino acids and fatty acids, the ability to incorporate ammonia into organic molecules, and so on. Some metabolic pathways, especially anabolic ones, are entirely specific to plants and lead to the so-called SECONDARY PLANT METABOLITES. These secondary substances are, for the plant organism, APPARENTLY unnecessary — that is, they are not indispensable for the life of the plant. But the book immediately qualifies: their biosynthesis is not, at least from an evolutionary point of view, self-serving (samoúčelná). It then supplies the reason. Plants have a much greater range of secondary metabolites than animals, BECAUSE they do not have the ability to migrate away from an unfavourable environment; therefore a series of protective and defensive mechanisms on a chemical basis arose. This is the argument of the whole section in one sentence: an animal that meets a threat can leave, a plant cannot, so the plant answers with chemistry. Finally, the book notes that many secondary plant metabolites are used in the pharmaceutical industry, in the food industry, and in cosmetics — which is where chapter 9, and with it the treatment of photoautotroph metabolism, ends.",
    cn: "植物细胞的代谢途径在其基本过程上与动物细胞的代谢途径并无根本差别——柠檬酸循环、蛋白质生物合成、核酸、糖酵解与呼吸链都是共有的。然而在若干方面植物有其特殊之处：必需氨基酸与脂肪酸的生物合成、把氨结合进有机分子的能力等等。某些代谢途径（尤其是合成代谢途径）为植物所完全特有，并通向所谓的**次生植物代谢物**。这些次生物质对植物体而言**表面上**是不必要的——即它们对植物的生存并非不可或缺。但教材随即加以限定：至少从演化的角度看，它们的生物合成并非无目的的自我消遣(samoúčelná)。随后教材给出了理由。植物的次生代谢物种类远多于动物，**因为**它们不具备从不利环境中迁走的能力；因此产生了一系列建立在化学基础上的保护与防御机制。这就是整节论证的一句话概括：动物遇到威胁可以离开，植物不能，于是植物用化学来回应。最后，教材指出许多次生植物代谢物被用于制药工业、食品工业与化妆品——第9章，连同对光合自养生物代谢的论述，就此结束。"
  },
  points: [
    { cz: "základní dráhy jsou společné", en: "In their basic processes, plant metabolic pathways do not differ fundamentally from animal ones: the citrate cycle, protein biosynthesis, nucleic acids, glycolysis and the respiratory chain are shared.", cn: "在基本过程上，植物的代谢途径与动物的并无根本差别：柠檬酸循环、蛋白质生物合成、核酸、糖酵解与呼吸链都是共有的。" },
    { cz: "specifika rostlin", en: "Plants nevertheless have their specifics in a number of cases: biosynthesis of essential amino acids and fatty acids, and the ability to incorporate ammonia into organic molecules — the last being exactly what §9.4 has just described.", cn: "但植物在若干方面仍有其特殊之处：必需氨基酸与脂肪酸的生物合成，以及把氨结合进有机分子的能力——最后一项正是§9.4刚刚描述过的内容。" },
    { cz: "sekundární metabolity — zdánlivě nepotřebné", en: "Some pathways, especially anabolic ones, are entirely specific to plants and lead to the secondary plant metabolites. These are for the plant organism APPARENTLY unnecessary — not indispensable for the life of the plant. The word 'apparently' carries the whole section.", cn: "某些途径（尤其是合成代谢途径）为植物所完全特有，并通向次生植物代谢物。这些对植物体而言**表面上**是不必要的——对植物的生存并非不可或缺。「表面上」这个词支撑起整节内容。" },
    { cz: "biosyntéza není samoúčelná", en: "Their biosynthesis is nevertheless NOT self-serving, at least from an evolutionary point of view. The book refuses the easy reading that these are metabolic luxuries.", cn: "然而至少从演化角度看，它们的生物合成**并非**无目的的自我消遣。教材拒绝了「这些不过是代谢上的奢侈品」这种轻率解读。" },
    { cz: "rostlina nemůže utéct", en: "Plants have a much greater range of secondary metabolites than animals BECAUSE they do not have the ability to migrate away from an unfavourable environment. Therefore a series of protective and defensive mechanisms on a chemical basis arose. This is the section's central argument.", cn: "植物的次生代谢物种类远多于动物，**因为**它们不具备从不利环境中迁走的能力。因此产生了一系列建立在化学基础上的保护与防御机制。这是本节的核心论证。" },
    { cz: "průmyslové využití", en: "Many secondary plant metabolites are used in the pharmaceutical industry, in the food industry and in cosmetics — the closing sentence of chapter 9.", cn: "许多次生植物代谢物被用于制药工业、食品工业与化妆品——这是第9章的收尾句。" }
  ],
  terms: [
    { cz: "sekundární metabolit", en: "secondary metabolite", cn: "次生代谢物", def_en: "A product of a plant-specific, mostly anabolic pathway; apparently unnecessary for the plant's own life, but evolutionarily justified as chemical protection and defence.", def_cn: "植物特有的（多为合成性的）途径的产物；表面上对植物自身生存并非必需，但在演化上作为化学性的保护与防御而有其道理。" },
    { cz: "primární metabolismus", en: "primary metabolism", cn: "初级代谢", def_en: "The metabolism plants share with animals — citrate cycle, glycolysis, respiratory chain, protein and nucleic acid biosynthesis.", def_cn: "植物与动物共有的代谢——柠檬酸循环、糖酵解、呼吸链、蛋白质与核酸的生物合成。" },
    { cz: "samoúčelný", en: "self-serving / purposeless", cn: "无目的的／自我消遣式的", def_en: "The word the book uses and then denies: secondary metabolite biosynthesis is NOT samoúčelná, i.e. it is not an end in itself, at least evolutionarily.", def_cn: "教材使用并随即否定的词：次生代谢物的生物合成**并非**samoúčelná，即至少在演化上它不是为自身而存在的。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why, according to the book, do plants have a much greater range of secondary metabolites than animals?",
      q_cn: "根据教材，植物的次生代谢物种类为何远多于动物？",
      options: [
        "Because plants have larger genomes",
        "Because plants cannot migrate away from an unfavourable environment, so chemical protective and defensive mechanisms arose instead",
        "Because plants have no immune system",
        "Because photosynthesis produces surplus carbon that must be disposed of"
      ],
      answer: 1,
      why_en: "The book gives this reason explicitly: plants do not have the ability to migrate away from an unfavourable environment, and therefore a number of protective and defensive mechanisms on a chemical basis arose. Immobility is the premise; chemistry is the answer to it.",
      why_cn: "教材明确给出这一理由：植物不具备从不利环境中迁走的能力，因此产生了一系列建立在化学基础上的保护与防御机制。不能移动是前提；化学是对它的回应。"
    },
    {
      type: "short",
      q_en: "In what sense are secondary plant metabolites 'unnecessary', and in what sense are they not?",
      q_cn: "次生植物代谢物在什么意义上是「不必要的」？在什么意义上又不是？",
      accept: ["apparently", "not indispensable", "evolution", "defence", "defense", "protect"],
      answer_en: "They are only APPARENTLY unnecessary — not indispensable for the individual plant's life. But their biosynthesis is not self-serving, at least from an evolutionary point of view: they are chemical protection and defence, which an immobile organism needs.",
      answer_cn: "它们只是**表面上**不必要——对个体植物的生存并非不可或缺。但至少从演化角度看，它们的生物合成并非无目的：它们是化学性的保护与防御，而这是不能移动的生物所需要的。"
    }
  ],
  oral: {
    q_en: "What are secondary plant metabolites, and why do plants make so many of them?",
    q_cn: "什么是次生植物代谢物？植物为何制造如此之多？",
    model_en: "Start with what is shared. A plant cell's core metabolism is not fundamentally different from an animal's — citrate cycle, glycolysis, respiratory chain, protein and nucleic acid synthesis, all the same. Plants do have their specialities: they make the amino acids and fatty acids that are essential for us, and they can build ammonia straight into organic molecules, as chapter nine-four described. But beyond that there is a set of pathways, mostly anabolic, that are entirely plant-specific, and their products are the secondary metabolites. The textbook describes them carefully: they are only apparently unnecessary — meaning the individual plant will not die without them — but it insists their biosynthesis is not self-serving, at least evolutionarily. And then it gives the reason, which I think is the best sentence in the section. Plants have far more secondary metabolites than animals because they cannot migrate away from an unfavourable environment. An animal that meets a threat can walk away; a plant has to stand there. So instead of behaviour, it evolved chemistry — a whole repertoire of protective and defensive compounds. That is also why they matter to us commercially: a great many of them end up in pharmaceuticals, in food products, and in cosmetics.",
    checklist: [
      "Stated that plant and animal core metabolism are fundamentally the same and named shared pathways",
      "Gave plant specifics: essential amino acid and fatty acid biosynthesis, ammonia incorporation",
      "Defined secondary metabolites as products of plant-specific, mostly anabolic pathways",
      "Preserved the 'apparently unnecessary' hedge and the denial that their biosynthesis is self-serving",
      "Gave the immobility argument as the reason for the greater range in plants",
      "Mentioned the pharmaceutical, food and cosmetic uses"
    ]
  }
}

);
