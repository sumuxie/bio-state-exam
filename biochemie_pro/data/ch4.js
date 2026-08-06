/* ============================================================
   Chapter 4 — Nukleové kyseliny a proteosyntéza
   Nucleic acids and protein synthesis / 核酸与蛋白质合成
   Source: Biochemie – Základní kurz, pp. 66–114
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "4-1",
  book: "cz",
  topicKey: "nucleotides",
  chapter: 4,
  section: "4.1",
  czTitle: "Nukleové kyseliny jsou základní molekuly dědičnosti",
  enTitle: "Nucleic acids are the basic molecules of heredity",
  cnTitle: "核酸是遗传的基本分子",
  pages: [66, 67],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans, including the full Tab. 4.1 (the ribonucleotide half on p.66 and the deoxyribonucleotide half on p.67) and the structure diagrams Obr. 4.1 (bases) and Obr. 4.2 (nucleosides).",
  cnNote: { topic: "十三", title: "核酸通论 (笔记 pp.83–86)", status: "mapped" },
  summary: {
    en: "Nucleic acids are macromolecules that store and transmit genetic information, standing among the very first substances required for living matter, since they carry the information for the course of all life processes. Deoxyribonucleotides and ribonucleotides are each built from three basic components — a nitrogenous base, a pentose, and a residue of phosphoric acid — and this opening section fixes the NOMENCLATURE relating bases, nucleosides and nucleotides before biosynthesis (4.1.1) and structure (4.1.2) are treated.",
    cn: "核酸是储存并传递遗传信息的大分子，在生命物质所需物质的等级中位居最前列，因为它们承载着一切生命过程得以进行的信息。脱氧核糖核苷酸和核糖核苷酸各自由三种基本组分构成——含氮碱基、戊糖和磷酸残基——本节开篇先确立碱基、核苷、核苷酸之间的命名关系，随后再讨论生物合成（4.1.1）与结构（4.1.2）。"
  },
  points: [
    { cz: "hierarchie a význam", en: "Nucleic acids occupy one of the FIRST places in the hierarchy of substances needed for living matter — they are the substances that CARRY THE INFORMATION for the course of all life processes.", cn: "核酸在生命物质所需物质的等级中位居最前列——它们是承载着一切生命过程所需信息的物质。" },
    { cz: "tři složky nukleotidu", en: "Deoxyribonucleotides and ribonucleotides are each composed of THREE basic components: a nitrogenous base (purine or pyrimidine), a pentose (2-deoxy-D-ribose for DNA, D-ribose for RNA), and a residue of PHOSPHORIC ACID. Together these form the basis of DNA and RNA.", cn: "脱氧核糖核苷酸和核糖核苷酸都由三种基本组分构成：含氮碱基（嘌呤或嘧啶）、戊糖（DNA 中为 2-脱氧-D-核糖，RNA 中为 D-核糖）以及磷酸残基。三者共同构成 DNA 与 RNA 的基础。" },
    { cz: "5 hlavních bází + tautomerie", en: "The most important bases are ADENINE and GUANINE (purine bases), and CYTOSINE, URACIL and THYMINE (pyrimidine bases). The pyrimidine bases occur in TAUTOMERIC forms, a more stable LACTAM form and a weakly acidic LACTIM form (Obr. 4.1). The single-letter codes used in sequences are A, G, C, U, T.", cn: "最重要的碱基是腺嘌呤和鸟嘌呤（嘌呤碱基），以及胞嘧啶、尿嘧啶和胸腺嘧啶（嘧啶碱基）。嘧啶碱基存在互变异构形式：较稳定的酰胺式和弱酸性的亚胺醇式（图 4.1）。序列中使用的单字母代码为 A、G、C、U、T。" },
    { cz: "minoritní báze — hypoxanthin", en: "Besides the standard bases, some nucleic acids also contain so-called MINOR bases. One minor purine base is HYPOXANTHINE (Hyp), whose structure corresponds to guanine WITHOUT the amino group; in its nucleotide form, INOSINE MONOPHOSPHATE (IMP), it is the FIRST derivative formed in purine nucleotide biosynthesis (section 4.1.1, Obr. 4.3).", cn: "除标准碱基外，某些核酸还含有所谓的稀有（微量）碱基。一种微量嘌呤碱基是次黄嘌呤（Hyp），其结构相当于去掉氨基的鸟嘌呤；其核苷酸形式——次黄嘌呤核苷酸 (IMP)——是嘌呤核苷酸生物合成中形成的第一个衍生物（见 4.1.1 节，图 4.3）。" },
    { cz: "nukleosid vs. nukleotid", en: "A compound of a purine or pyrimidine base with a saccharide is a NUCLEOSIDE. When all THREE components are bound (base + sugar + phosphate), the compound is a NUCLEOTIDE. Tab. 4.1 fixes the exact nomenclature for each base.", cn: "嘌呤或嘧啶碱基与糖结合形成的化合物称为核苷。当三种组分（碱基+糖+磷酸）全部结合时，该化合物称为核苷酸。表 4.1 给出了每种碱基对应的具体命名。" },
    { cz: "Tab. 4.1 (ověřeno ze skenu)", en: "TAB. 4.1 — NOMENCLATURE OF BASES, NUCLEOSIDES AND NUCLEOTIDES, re-read directly from the page scans across pp.66-67. Ribonucleotide series (base → ribonucleoside → ribonucleotide/5′-monophosphate): adenine → adenosine → adenylate (AMP); guanine → guanosine → guanylate (GMP); uracil → uridine → uridylate (UMP); cytosine → cytidine → cytidylate (CMP). Deoxyribonucleotide series (base → deoxyribonucleoside → deoxyribonucleotide): adenine → deoxyadenosine → deoxyadenylate (dAMP); guanine → deoxyguanosine → deoxyguanylate (dGMP); THYMINE → deoxythymidine → deoxythymidylate (dTMP); cytosine → deoxycytidine → deoxycytidylate (dCMP). Note that thymine, not uracil, appears in the deoxyribonucleotide row.", cn: "表 4.1——碱基、核苷与核苷酸的命名，直接从第 66-67 页的扫描件重读校对。核糖核苷酸系列（碱基→核糖核苷→核糖核苷酸/5′-单磷酸）：腺嘌呤→腺苷→腺苷酸 (AMP)；鸟嘌呤→鸟苷→鸟苷酸 (GMP)；尿嘧啶→尿苷→尿苷酸 (UMP)；胞嘧啶→胞苷→胞苷酸 (CMP)。脱氧核糖核苷酸系列（碱基→脱氧核糖核苷→脱氧核糖核苷酸）：腺嘌呤→脱氧腺苷→脱氧腺苷酸 (dAMP)；鸟嘌呤→脱氧鸟苷→脱氧鸟苷酸 (dGMP)；胸腺嘧啶→脱氧胸苷→脱氧胸苷酸 (dTMP)；胞嘧啶→脱氧胞苷→脱氧胞苷酸 (dCMP)。注意脱氧核糖核苷酸系列中出现的是胸腺嘧啶而非尿嘧啶。" },
    { cz: "DNA vs RNA — dva rozdíly", en: "DNA and RNA differ not only in their PENTOSE (2-deoxy-D-ribose in DNA vs. D-ribose in RNA) but ALSO in their base content: URACIL occurs practically ONLY in RNA, while THYMINE occurs predominantly in DNA.", cn: "DNA 与 RNA 的差异不仅在于戊糖（DNA 为 2-脱氧-D-核糖，RNA 为 D-核糖），还在于碱基组成：尿嘧啶实际上只出现在 RNA 中，而胸腺嘧啶主要出现在 DNA 中。" },
    { cz: "N-glykosidová vazba N9/N1", en: "In nucleosides the base is joined to the sugar by an N-GLYCOSIDIC bond at C1 of the pentose. For PURINES this bond starts from atom N9; for PYRIMIDINES it starts from atom N1 (Obr. 4.2, showing adenosine, guanosine, uridine, cytidine and deoxythymidine — abbreviated Ado, Guo, Urd, Cyd, dThd).", cn: "在核苷中，碱基通过 N-糖苷键与戊糖的 C1 相连。对嘌呤而言，该键始于 N9 原子；对嘧啶而言，该键始于 N1 原子（图 4.2，展示了腺苷、鸟苷、尿苷、胞苷和脱氧胸苷，缩写分别为 Ado、Guo、Urd、Cyd、dThd）。" }
  ],
  terms: [
    { cz: "nukleosid", en: "nucleoside", cn: "核苷", def_en: "A compound of a purine or pyrimidine base with a sugar (pentose), joined by an N-glycosidic bond.", def_cn: "嘌呤或嘧啶碱基与糖（戊糖）通过 N-糖苷键结合形成的化合物。" },
    { cz: "nukleotid", en: "nucleotide", cn: "核苷酸", def_en: "A nucleoside esterified with a residue of phosphoric acid — base + sugar + phosphate.", def_cn: "核苷与磷酸残基酯化的产物——碱基+糖+磷酸。" },
    { cz: "hypoxanthin (Hyp)", en: "hypoxanthine (Hyp)", cn: "次黄嘌呤 (Hyp)", def_en: "A minor purine base, structurally guanine without the amino group; as IMP it is the first derivative of purine nucleotide biosynthesis.", def_cn: "一种微量嘌呤碱基，结构上相当于去掉氨基的鸟嘌呤；其核苷酸形式 IMP 是嘌呤核苷酸生物合成的第一个衍生物。" },
    { cz: "laktamová / laktimová forma", en: "lactam / lactim tautomers", cn: "酰胺式／亚胺醇式互变异构体", def_en: "The two tautomeric forms of the pyrimidine bases; the lactam form is the more stable, the lactim form weakly acidic.", def_cn: "嘧啶碱基的两种互变异构形式；酰胺式更稳定，亚胺醇式为弱酸性。" },
    { cz: "adenylát / AMP", en: "adenylate (AMP)", cn: "腺苷酸 (AMP)", def_en: "The ribonucleotide (5′-monophosphate) of adenine — adenine + ribose + phosphate.", def_cn: "腺嘌呤的核糖核苷酸（5′-单磷酸）——腺嘌呤+核糖+磷酸。" },
    { cz: "N-glykosidová vazba", en: "N-glycosidic bond", cn: "N-糖苷键", def_en: "The bond joining base to sugar at C1 of the pentose; from N9 in purines, from N1 in pyrimidines.", def_cn: "在戊糖 C1 处连接碱基与糖的键；嘌呤从 N9 出发，嘧啶从 N1 出发。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which pair correctly matches a base with the ATOM at which its N-glycosidic bond to the sugar begins?",
      q_cn: "下列哪一对正确匹配了碱基与其 N-糖苷键起始的原子？",
      options: ["Adenine — N1", "Cytosine — N9", "Guanine — N9", "Uracil — N9"],
      answer: 2,
      why_en: "Purine bases (adenine, guanine) form the N-glycosidic bond from atom N9. Pyrimidine bases (cytosine, uracil, thymine) form it from atom N1 — so guanine-N9 is the only correct pairing here.",
      why_cn: "嘌呤碱基（腺嘌呤、鸟嘌呤）从 N9 原子形成 N-糖苷键；嘧啶碱基（胞嘧啶、尿嘧啶、胸腺嘧啶）从 N1 原子形成——因此鸟嘌呤–N9 是此处唯一正确的配对。"
    },
    {
      type: "mcq",
      q_en: "What is the key difference in BASE content between DNA and RNA?",
      q_cn: "DNA 与 RNA 在碱基组成上的关键区别是什么？",
      options: ["DNA contains only purines, RNA only pyrimidines", "Uracil occurs practically only in RNA, thymine predominantly in DNA", "DNA has no cytosine", "RNA never contains guanine"],
      answer: 1,
      why_en: "The book states this explicitly as the second point of difference, besides the pentose: uracil is found practically only in ribonucleic acids, and thymine predominantly in deoxyribonucleic acids.",
      why_cn: "教材明确指出这是（除戊糖外的）第二个区别点：尿嘧啶实际上只存在于核糖核酸中，而胸腺嘧啶主要存在于脱氧核糖核酸中。"
    },
    {
      type: "mcq",
      q_en: "In Tab. 4.1's deoxyribonucleotide row, which base pairs with deoxythymidylate (dTMP)?",
      q_cn: "在表 4.1 的脱氧核糖核苷酸一行中，哪个碱基对应脱氧胸苷酸 (dTMP)？",
      options: ["Uracil", "Cytosine", "Thymine", "Hypoxanthine"],
      answer: 2,
      why_en: "The deoxyribonucleotide series in Tab. 4.1 lists adenine, guanine, THYMINE and cytosine — not uracil, which belongs only to the ribonucleotide (RNA) series.",
      why_cn: "表 4.1 的脱氧核糖核苷酸系列列出的是腺嘌呤、鸟嘌呤、胸腺嘧啶和胞嘧啶——不包括尿嘧啶，后者只属于核糖核苷酸（RNA）系列。"
    },
    {
      type: "short",
      q_en: "What are the three basic components of a nucleotide, and what distinguishes the pentose used in DNA from that used in RNA?",
      q_cn: "核苷酸的三种基本组分是什么？DNA 中所用的戊糖与 RNA 中所用的戊糖有何区别？",
      accept: ["base", "pentose", "phosphoric", "deoxyribose", "ribose", "碱基", "戊糖", "磷酸", "脱氧核糖", "核糖"],
      answer_en: "A nucleotide is composed of a nitrogenous base (purine or pyrimidine), a pentose, and a residue of phosphoric acid. DNA uses 2-deoxy-D-ribose; RNA uses D-ribose — the sugars differ only in the absence of the 2′-OH group in DNA's pentose.",
      answer_cn: "核苷酸由含氮碱基（嘌呤或嘧啶）、戊糖和磷酸残基组成。DNA 使用 2-脱氧-D-核糖；RNA 使用 D-核糖——二者的区别仅在于 DNA 的戊糖缺少 2′-OH 基团。"
    }
  ],
  oral: {
    q_en: "How are nucleic acid bases, nucleosides and nucleotides named, and how does this nomenclature distinguish DNA from RNA?",
    q_cn: "核酸的碱基、核苷与核苷酸是如何命名的？这套命名法如何区分 DNA 与 RNA？",
    model_en: "Nucleic acids are macromolecules that store and transmit genetic information, and they stand among the very first substances required for living matter, since they carry the information for the course of all life processes. Deoxyribonucleotides and ribonucleotides are each built from three basic components: a nitrogenous base, a pentose, and a residue of phosphoric acid. The most important bases are adenine and guanine, the purine bases, and cytosine, uracil and thymine, the pyrimidine bases; the pyrimidine bases can occur in two tautomeric forms, a more stable lactam form and a weakly acidic lactim form. Some nucleic acids also contain minor bases, the best known being hypoxanthine, which is structurally guanine without its amino group and whose nucleotide, inosine monophosphate, is the first derivative formed in purine biosynthesis. A compound of a base with a sugar alone is called a nucleoside; once all three components, base, sugar and phosphate, are joined, the compound is a nucleotide. So adenine gives the nucleoside adenosine and the nucleotide adenylate, or AMP, and correspondingly for guanine, uracil and cytosine; in the deoxyribose series the same four bases, except that thymine replaces uracil, give deoxyadenosine, deoxyguanosine, deoxythymidine and deoxycytidine and their monophosphates. In the nucleoside, the base is attached to carbon one of the pentose by an N-glycosidic bond, beginning at nitrogen nine for the purines and at nitrogen one for the pyrimidines. Finally, DNA and RNA differ in two respects: DNA contains two-deoxy-D-ribose while RNA contains D-ribose, and uracil occurs practically only in RNA while thymine occurs predominantly in DNA.",
    checklist: [
      "Defined nucleic acids as carriers of genetic information",
      "Named the three components of a nucleotide",
      "Listed the five main bases split into purines and pyrimidines",
      "Distinguished nucleoside from nucleotide",
      "Gave hypoxanthine/IMP as the minor-base example",
      "Stated where the N-glycosidic bond starts for purines vs pyrimidines",
      "Gave both DNA/RNA differences: sugar AND base content"
    ]
  }
},

{
  id: "4-1-1-1",
  book: "cz",
  topicKey: "nucleotide-metabolism",
  chapter: 4,
  section: "4.1.1.1",
  czTitle: "Biosyntéza nukleotidů; Biosyntéza purinových nukleotidů",
  enTitle: "Biosynthesis of nucleotides; biosynthesis of purine nucleotides",
  cnTitle: "核苷酸的生物合成；嘌呤核苷酸的生物合成",
  pages: [67, 68, 69, 70],
  coverage: "full",
  coverageNote: "p.67's closing lines (the section 4.1.1 heading and its one-sentence overview) plus pp.68-70 (through the top of p.70, where Obr. 4.4 concludes) verified in full against the scans, including the enzyme names boxed in Obr. 4.3 and the reaction scheme of Obr. 4.4.",
  cnNote: { topic: null, title: "核苷酸的降解及核苷酸代谢 (笔记「二十七」？仅凭标题推测，未直接核对页码)", status: "partial" },
  summary: {
    en: "Purine and pyrimidine nucleotides are biosynthesised DE NOVO from simple precursors, which are progressively incorporated into the purine and pyrimidine rings (the opening line of 4.1.1). For purines, all FOUR nitrogen atoms of the ring come from aspartic acid, glycine and the amide groups of glutamine; the ring is built up, one piece at a time, directly on a ribose-phosphate scaffold, through ELEVEN enzyme-catalysed reactions ending in inosine monophosphate (IMP), which is then converted onward to AMP and GMP.",
    cn: "嘌呤和嘧啶核苷酸都是从简单前体经从头合成途径生物合成的，这些前体被逐步整合进嘌呤环和嘧啶环本身（4.1.1 节开篇语）。对嘌呤而言，环上全部四个氮原子分别来自天冬氨酸、甘氨酸和谷氨酰胺的酰胺基；嘌呤环是直接在核糖磷酸骨架上、通过十一步酶促反应逐步搭建而成，最终生成次黄嘌呤核苷酸 (IMP)，再由 IMP 进一步转化为 AMP 与 GMP。"
  },
  points: [
    { cz: "4 atomy dusíku purinu", en: "The FOUR nitrogen atoms of the purine ring come from THREE sources: ASPARTIC ACID (1 N), GLYCINE (1 N, plus two carbons and the whole N-C-C unit), and the AMIDE GROUP of GLUTAMINE (2 N, contributed in two separate steps).", cn: "嘌呤环的四个氮原子来自三个来源：天冬氨酸（1 个 N）、甘氨酸（1 个 N，同时贡献两个碳原子及整个 N-C-C 单元）以及谷氨酰胺的酰胺基（2 个 N，分两步分别提供）。" },
    { cz: "PRPP — výchozí sloučenina", en: "The starting compound is α-D-RIBOSE-5-PHOSPHATE, which reacts with ATP (via ribose-phosphate diphosphokinase) to give 5′-phosphoribosyl-α-D-diphosphate, universally known as PRPP — the scaffold on which the entire purine ring is subsequently built.", cn: "起始化合物是 α-D-核糖-5-磷酸，它与 ATP 反应（由核糖磷酸二磷酸激酶催化）生成 5′-磷酸核糖-α-D-二磷酸，通常称为 PRPP——整个嘌呤环随后就在这一骨架上搭建起来。" },
    { cz: "GAR → FGAR → FGAM → AIR", en: "PRPP reacts with GLUTAMINE to give 5-phosphoribosylamine, which condenses with GLYCINE (using ATP) to give GLYCINAMIDE RIBONUCLEOTIDE (GAR). GAR is formylated (donor: N10-formyltetrahydrofolate) to FGAR, then receives a second nitrogen from glutamine's amide group (using ATP) to become FGAM, whose imidazole ring then CLOSES, consuming a further ATP, to give 5-AMINOIMIDAZOLE RIBONUCLEOTIDE (AIR).", cn: "PRPP 与谷氨酰胺反应生成 5-磷酸核糖胺，后者与甘氨酸缩合（消耗 ATP）生成甘氨酰胺核苷酸 (GAR)。GAR 经甲酰化（甲酰供体为 N10-甲酰四氢叶酸）生成 FGAR，随后再从谷氨酰胺酰胺基获得第二个氮原子（消耗 ATP）生成 FGAM，其咪唑环再消耗一个 ATP 闭合，生成 5-氨基咪唑核苷酸 (AIR)。" },
    { cz: "CO2 bez ATP a biotinu (CAIR)", en: "The six-membered ring is then extended by a CARBON (the future C6) that reacts in the form of HYDROGENCARBONATE — UNUSUALLY, this step needs NEITHER biotin NOR an energy source; however its equilibrium is unfavourable and must be pulled forward by coupling to the exergonic reactions later in the pathway. This gives CAIR (carboxyaminoimidazole ribonucleotide).", cn: "六元环随后通过掺入一个碳原子（未来的 C6）而延伸，该碳以碳酸氢根的形式参与反应——不同寻常的是，这一步既不需要生物素，也不需要能量来源；但其平衡不利，必须靠与通路后续放能反应的偶联来推动。由此生成 CAIR（羧基氨基咪唑核苷酸）。" },
    { cz: "N1 z aspartátu; uzavření kruhu → IMP", en: "The LAST nitrogen (N1) is transferred from ASPARTIC ACID by a condensation reaction consuming ATP, giving SAICAR; after the amino group of aspartate is transferred, the rest of the aspartate skeleton is eliminated as FUMARIC ACID, giving AICAR. The LAST ring atom is then added by formylation, and the FINAL cyclisation to IMP proceeds with elimination of WATER — UNLIKE the imidazole-ring closure, this step needs NO ATP. Obr. 4.3 sums the whole route up as ELEVEN enzyme-catalysed reactions building the purine ring on the ribose scaffold.", cn: "最后一个氮原子（N1）通过消耗 ATP 的缩合反应从天冬氨酸转移而来，生成 SAICAR；转移天冬氨酸氨基之后，其余的天冬氨酸骨架以延胡索酸（富马酸）的形式被消除，生成 AICAR。环上最后一个原子经甲酰化加入，随后闭合生成 IMP 的最后一步伴随水的消除——与咪唑环闭合那一步不同，这一步不需要 ATP。图 4.3 将整条途径归纳为：在核糖骨架上通过十一步酶促反应搭建嘌呤环。" },
    { cz: "IMP → AMP (GTP, fumarát)", en: "IMP → AMP: aspartate condenses with IMP, using GTP (not ATP) as the energy source, to give ADENYLOSUCCINATE; adenylosuccinate LYASE then eliminates FUMARATE to yield AMP. AMP differs from IMP only by an AMINO GROUP replacing the oxygen at position 6.", cn: "IMP → AMP：天冬氨酸与 IMP 缩合，以 GTP（而非 ATP）作为能量来源，生成腺苷酸琥珀酸；腺苷酸琥珀酸裂解酶随后消除延胡索酸生成 AMP。AMP 与 IMP 的唯一区别在于第 6 位的氧被氨基取代。" },
    { cz: "IMP → XMP → GMP (NAD+, Gln, ATP)", en: "IMP → GMP: IMP is first DEHYDROGENATED (NAD⁺ → NADH + H⁺) to XANTHYLATE (XMP); the oxygen at C2 of XMP is then replaced by an amino group donated by glutamine's amide, at the cost of ATP (cleaved to AMP + PPᵢ), giving GMP.", cn: "IMP → GMP：IMP 先被脱氢（NAD⁺ → NADH + H⁺）生成黄嘌呤核苷酸 (XMP)；随后 XMP 第 2 位碳上的氧被谷氨酰胺酰胺基提供的氨基取代，同时消耗 ATP（裂解为 AMP + PPᵢ），生成 GMP。" },
    { cz: "NMP → NTP kinasami", en: "For nucleic-acid synthesis, the nucleoside MONOphosphates (AMP, GMP) must still be converted to nucleoside TRIphosphates; this is done by KINASES, with successive consumption of TWO ATP molecules (MP → DP → TP).", cn: "为了合成核酸，核苷单磷酸（AMP、GMP）还必须转化为核苷三磷酸；这由激酶完成，依次消耗两个 ATP 分子（单磷酸 → 二磷酸 → 三磷酸）。" }
  ],
  terms: [
    { cz: "PRPP", en: "PRPP (5-phosphoribosyl-1-pyrophosphate)", cn: "PRPP（5-磷酸核糖-1-焦磷酸）", def_en: "The activated ribose-phosphate scaffold on which both purine AND pyrimidine rings are built; formed from ribose-5-phosphate + ATP.", def_cn: "嘌呤环和嘧啶环都在其上搭建的活化核糖磷酸骨架；由核糖-5-磷酸和 ATP 生成。" },
    { cz: "IMP (inosinát)", en: "inosine monophosphate (IMP, inosinate)", cn: "次黄嘌呤核苷酸 (IMP)", def_en: "The first complete purine nucleotide formed de novo; the common precursor of both AMP and GMP.", def_cn: "从头合成途径中形成的第一个完整嘌呤核苷酸；是 AMP 与 GMP 的共同前体。" },
    { cz: "adenylosukcinát", en: "adenylosuccinate", cn: "腺苷酸琥珀酸", def_en: "Intermediate formed from IMP + aspartate using GTP; adenylosuccinate lyase eliminates fumarate from it to give AMP.", def_cn: "由 IMP + 天冬氨酸（消耗 GTP）生成的中间体；腺苷酸琥珀酸裂解酶从中消除延胡索酸生成 AMP。" },
    { cz: "xanthylát (XMP)", en: "xanthylate (XMP)", cn: "黄嘌呤核苷酸 (XMP)", def_en: "Intermediate between IMP and GMP, formed by NAD⁺-dependent dehydrogenation of IMP.", def_cn: "IMP 与 GMP 之间的中间体，由 IMP 经 NAD⁺ 依赖的脱氢反应生成。" },
    { cz: "N10-formyltetrahydrofolát", en: "N10-formyltetrahydrofolate", cn: "N10-甲酰四氢叶酸", def_en: "The one-carbon (formyl) donor used twice in purine ring assembly.", def_cn: "在嘌呤环搭建过程中两次充当一碳（甲酰基）供体的辅因子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The unusual step that adds carbon 6 to the purine ring (forming CAIR) is remarkable because it requires:",
      q_cn: "为嘌呤环加入第 6 位碳（生成 CAIR）的这一步之所以不寻常，是因为它：",
      options: ["Biotin as cofactor", "Neither biotin nor an energy source, despite reacting with hydrogencarbonate", "Two molecules of ATP", "NADPH as reducing power"],
      answer: 1,
      why_en: "The book flags this step specifically: although the ring is extended by a carbon reacting as hydrogencarbonate, the reaction needs NEITHER biotin NOR an energy source — unusual for a carboxylation-type step. Its unfavourable equilibrium is instead pulled forward by coupling to later exergonic reactions in the pathway.",
      why_cn: "教材特别指出这一步的特殊性：尽管该碳以碳酸氢根形式参与反应使环得以延伸，这一反应既不需要生物素也不需要能量来源——对于一个类似羧化的步骤而言这并不寻常。其不利的平衡靠与通路后续放能反应的偶联来推动。"
    },
    {
      type: "mcq",
      q_en: "What is the key chemical difference between how AMP and GMP are each made from IMP?",
      q_cn: "AMP 和 GMP 分别由 IMP 生成的关键化学差异是什么？",
      options: ["AMP formation uses GTP as energy source and releases fumarate; GMP formation uses NAD⁺ then ATP and introduces glutamine's amide nitrogen", "Both use ATP and release CO2", "AMP requires glycine; GMP requires aspartate", "GMP is made directly by phosphorylation of IMP with no other atoms added"],
      answer: 0,
      why_en: "IMP to AMP: condensation with aspartate is powered by GTP, and adenylosuccinate lyase then releases fumarate. IMP to GMP: IMP is first dehydrogenated with NAD⁺ to XMP, and the C2 oxygen of XMP is then replaced by glutamine's amide nitrogen at the cost of ATP.",
      why_cn: "IMP → AMP：与天冬氨酸的缩合由 GTP 供能，随后腺苷酸琥珀酸裂解酶释放延胡索酸。IMP → GMP：IMP 先由 NAD⁺ 脱氢生成 XMP，再由谷氨酰胺酰胺基取代 XMP 第 2 位碳上的氧，消耗 ATP。"
    },
    {
      type: "short",
      q_en: "Which three precursor molecules donate the four nitrogen atoms of the purine ring, and which one contributes twice?",
      q_cn: "哪三种前体分子提供了嘌呤环的四个氮原子？其中哪一种贡献了两次？",
      accept: ["aspartate", "aspartic", "glycine", "glutamine", "amide", "天冬氨酸", "甘氨酸", "谷氨酰胺"],
      answer_en: "Aspartic acid contributes one nitrogen, glycine contributes one nitrogen (plus two carbons), and the amide group of glutamine contributes nitrogen TWICE, in two separate steps of the pathway — together accounting for all four ring nitrogens.",
      answer_cn: "天冬氨酸提供一个氮原子，甘氨酸提供一个氮原子（同时提供两个碳原子），谷氨酰胺的酰胺基则在通路的两个不同步骤中各提供一次氮原子——合计构成嘌呤环的全部四个氮原子。"
    },
    {
      type: "short",
      q_en: "Why can IMP be converted to either AMP or GMP, and what single atom-level change distinguishes AMP from IMP?",
      q_cn: "为什么 IMP 既能转化为 AMP 也能转化为 GMP？AMP 与 IMP 在原子层面的唯一区别是什么？",
      accept: ["amino", "oxygen", "position 6", "C6", "氨基", "氧", "第6位"],
      answer_en: "IMP is the first complete purine nucleotide formed de novo, so it is the common branch point for both purine nucleotides. AMP differs from IMP by only one change: an amino group replaces the oxygen at ring position 6.",
      answer_cn: "IMP 是从头合成途径中形成的第一个完整嘌呤核苷酸，因此它是两种嘌呤核苷酸共同的分支点。AMP 与 IMP 的区别仅在一处：环上第 6 位的氧被氨基取代。"
    }
  ],
  oral: {
    q_en: "Describe how purine nucleotides are biosynthesised de novo, from the starting precursor through to AMP and GMP.",
    q_cn: "描述嘌呤核苷酸的从头生物合成过程，从起始前体一直到 AMP 与 GMP。",
    model_en: "Purine and pyrimidine nucleotides are both biosynthesised de novo from simple precursors that are progressively incorporated into the ring itself, rather than being assembled separately and attached afterward. For purines, all four nitrogen atoms of the finished ring come from just three sources: aspartic acid contributes one, glycine contributes one along with two carbons, and the amide group of glutamine contributes nitrogen twice, at two separate steps. The pathway starts from alpha-D-ribose-5-phosphate, which is activated by reaction with ATP to give PRPP, the phosphoribosyl scaffold on which the whole purine ring is subsequently built. PRPP reacts with glutamine to give phosphoribosylamine, which condenses with glycine to form glycinamide ribonucleotide; this is formylated using a folate cofactor, receives a second nitrogen from glutamine, and then, consuming a further ATP, closes its five-membered imidazole ring to give aminoimidazole ribonucleotide. The six-membered ring is then extended by a carbon reacting as hydrogencarbonate, in a step that unusually needs neither biotin nor an energy source, though its unfavourable equilibrium has to be pulled along by later exergonic steps. The last ring nitrogen is transferred from aspartate by a condensation using ATP, after which the rest of the aspartate skeleton is eliminated as fumarate; the final ring carbon is added by formylation, and the six-membered ring finally closes, with loss of water and no ATP requirement, to give inosine monophosphate, or IMP — the whole route totalling eleven enzyme-catalysed reactions on the ribose scaffold. From IMP, two branches lead onward: to AMP, aspartate condenses with IMP using GTP as the energy source to give adenylosuccinate, from which adenylosuccinate lyase eliminates fumarate, leaving AMP differing from IMP only by an amino group in place of the oxygen at position six; to GMP, IMP is first dehydrogenated with NAD-plus to xanthylate, and the oxygen at position two of xanthylate is then replaced with an amino group from glutamine's amide, at the cost of ATP. Finally, both AMP and GMP must be converted by kinases, with successive consumption of two ATP molecules each, into the nucleoside triphosphates actually used in nucleic acid synthesis.",
    checklist: [
      "Stated the de novo principle: precursors built into the ring, not attached after",
      "Named all three nitrogen sources and that glutamine contributes twice",
      "Named PRPP as the starting scaffold, from ribose-5-phosphate + ATP",
      "Gave the unusual CO2-incorporation step: no biotin, no ATP, pulled by later exergonic steps",
      "Named aspartate as source of the last nitrogen, with fumarate eliminated",
      "Stated the pathway ends at IMP via 11 enzyme-catalysed reactions, final step needs no ATP",
      "Distinguished the AMP branch (GTP, fumarate) from the GMP branch (NAD+, then ATP, glutamine)",
      "Mentioned the final kinase-driven MP→TP conversion"
    ]
  }
},

{
  id: "4-1-1-2",
  book: "cz",
  topicKey: "nucleotide-metabolism",
  chapter: 4,
  section: "4.1.1.2",
  czTitle: "Biosyntéza pyrimidinových nukleotidů",
  enTitle: "Biosynthesis of pyrimidine nucleotides",
  cnTitle: "嘧啶核苷酸的生物合成",
  pages: [70, 71, 72],
  coverage: "full",
  coverageNote: "p.70 (from the 4.1.1.2 heading) through p.72's first two paragraphs (ending just before the 4.1.2 heading) verified in full against the scans, including the reaction scheme of Obr. 4.5 and the electron-transfer scheme of Obr. 4.6.",
  cnNote: { topic: null, title: "核苷酸的降解及核苷酸代谢 (笔记「二十七」？仅凭标题推测，未直接核对页码)", status: "partial" },
  summary: {
    en: "Unlike the purine ring, which is built up piecemeal directly on the ribose scaffold, the PYRIMIDINE ring is assembled essentially complete BEFORE it is attached to PRPP. Only TWO nitrogen atoms are needed, both supplied before ring attachment: one from CARBAMOYL PHOSPHATE and one from ASPARTATE. The pathway runs UMP → UTP → CTP, with thymine reaching DNA by a route of its own; the committed step is feedback-inhibited by CTP, and the same NADPH/thioredoxin machinery that supplies deoxyribonucleotides serves both the purine and the pyrimidine series.",
    cn: "与嘌呤环——直接在核糖骨架上逐块搭建——不同，嘧啶环基本上是先合成完整、之后才与 PRPP 连接的。所需的两个氮原子都在环连接之前提供：一个来自氨甲酰磷酸，一个来自天冬氨酸。合成途径为 UMP → UTP → CTP，胸腺嘧啶则通过自己的一条路线进入 DNA；限速的第一步受 CTP 反馈抑制，而为脱氧核糖核苷酸供电子的 NADPH／硫氧还蛋白系统对嘌呤和嘧啶两条系列都通用。"
  },
  points: [
    { cz: "2 atomy dusíku pyrimidinu", en: "Only TWO nitrogen atoms are needed to build the pyrimidine ring, and both come in BEFORE the ring meets the sugar: one from CARBAMOYL PHOSPHATE, one from ASPARTIC ACID (aspartate).", cn: "构建嘧啶环只需要两个氮原子，且都在环与糖结合之前引入：一个来自氨甲酰磷酸，一个来自天冬氨酸。" },
    { cz: "vznik karbamoylfosfátu (2 ATP)", en: "The FIRST reaction is formation of CARBAMOYL PHOSPHATE from HCO₃⁻ and the amide nitrogen of GLUTAMINE, at the cost of TWO molecules of ATP.", cn: "第一步反应是由 HCO₃⁻ 和谷氨酰胺的酰胺氮生成氨甲酰磷酸，消耗两分子 ATP。" },
    { cz: "karbamoylaspartát → dihydroorotát", en: "Carbamoyl phosphate condenses with ASPARTIC ACID (via aspartate transcarbamoylase, releasing Pᵢ) to give N-CARBAMOYLASPARTATE. Intramolecular condensation then closes the six-membered ring (via dihydroorotase) to give DIHYDROOROTIC ACID (dihydroorotate), releasing H₂O ONLY — NOTE: the book's own running text on this page says this step 'consumes ATP', but that contradicts its own Obr. 4.5 diagram, which draws dihydroorotase releasing only H₂O with no ATP icon (unlike the genuinely ATP-driven step drawn two reactions later). Dihydroorotase is a hydrolase (EC 3.5.2.3), not an ATP-dependent enzyme, so the diagram is the reliable side of this internal inconsistency in the source book: no ATP is spent at ring closure.", cn: "氨甲酰磷酸与天冬氨酸缩合（由天冬氨酸转氨甲酰酶催化，释放 Pᵢ）生成 N-氨甲酰天冬氨酸。分子内缩合随后闭合六元环（由二氢乳清酸酶催化）生成二氢乳清酸，只释放 H₂O——注：教材这一页的正文说这一步「消耗 ATP」，但这与图 4.5 本身的画法矛盾：图中二氢乳清酸酶这一步只画出释放 H₂O，并无 ATP 图标（不同于两步之后真正消耗 ATP 的那一步，那里画得很清楚）。二氢乳清酸酶属于水解酶（EC 3.5.2.3），并非依赖 ATP 的酶，因此在教材这一处内部矛盾中，图示才是可靠的一方：环闭合这一步并不消耗 ATP。" },
    { cz: "orotát → UMP", en: "Dehydrogenation of dihydroorotate (NAD⁺ → NADH + H⁺) gives OROTIC ACID (orotate), which reacts with PRPP (orotate phosphoribosyltransferase, releasing PPᵢ) to give OROTIDYLATE; decarboxylation of orotidylate (releasing CO₂) finally gives URIDYLATE (UMP) — this is the point at which the finished pyrimidine ring meets the sugar-phosphate.", cn: "二氢乳清酸脱氢（NAD⁺ → NADH + H⁺）生成乳清酸，乳清酸与 PRPP 反应（由乳清酸磷酸核糖转移酶催化，释放 PPᵢ）生成乳清苷酸；乳清苷酸脱羧（释放 CO₂）最终生成尿苷酸 (UMP)——这正是已合成好的嘧啶环与糖磷酸结合的节点。" },
    { cz: "UMP → UTP → CTP", en: "UMP → UTP is ANALOGOUS to purine nucleoside triphosphate synthesis: two-step phosphorylation by kinases, consuming TWO ATP. UTP → CTP introduces an amino group at C4, from AMMONIA in bacteria or from GLUTAMINE in animals (cytidylate synthetase, using ATP).", cn: "UMP → UTP 与嘌呤核苷三磷酸的合成类似：由激酶催化的两步磷酸化，消耗两个 ATP。UTP → CTP 则在第 4 位碳引入氨基，细菌中氨基来自氨，动物中来自谷氨酰胺（由胞苷酸合成酶催化，消耗 ATP）。" },
    { cz: "thymin — dTMP z dUMP", en: "THYMINE is NOT synthesised as a free pyrimidine base or nucleotide of its own — instead it is formed directly as DEOXYTHYMIDYLATE (dTMP) by METHYLATION of DEOXYURIDYLATE (dUMP), with N⁵,N¹⁰-methylenetetrahydrofolate as the methyl donor.", cn: "胸腺嘧啶并非作为独立的游离嘧啶碱基或核苷酸被合成——而是直接以脱氧胸苷酸 (dTMP) 的形式，通过对脱氧尿苷酸 (dUMP) 的甲基化而生成，甲基供体为 N⁵,N¹⁰-亚甲基四氢叶酸。" },
    { cz: "zpětnovazebná inhibice CTP", en: "Pyrimidine nucleotide biosynthesis is regulated at the level of N-CARBAMOYLASPARTATE formation — classic FEEDBACK regulation. The enzyme catalysing that step, ASPARTATE TRANSCARBAMOYLASE, is ALLOSTERIC and is INHIBITED BY CTP, the end product of the whole biosynthetic pathway.", cn: "嘧啶核苷酸的生物合成在 N-氨甲酰天冬氨酸生成这一步受到调节——典型的反馈调节。催化这一步的酶——天冬氨酸转氨甲酰酶——是一种别构酶，受整条生物合成途径最终产物 CTP 的抑制。" },
    { cz: "obecný vznik dNDP (thioredoxin)", en: "GENERAL MECHANISM shared by BOTH series: deoxyribonucleotides needed for DNA are made from RIBOnucleoside DIPHOSPHATES (NDP) by removing the 2′-OH group through reduction by THIOREDOXIN. Oxidised thioredoxin is itself re-reduced by the flavin enzyme THIOREDOXIN REDUCTASE, using NADPH as coenzyme (Obr. 4.6: NADPH → thioredoxin reductase (FAD) → thioredoxin (SH/SH) → ribonucleotide reductase (SH/SH) → NDP becomes dNDP).", cn: "两大系列共用的通用机制：DNA 所需的脱氧核糖核苷酸由核糖核苷二磷酸 (NDP) 经硫氧还蛋白还原、脱去 2′-OH 基团而生成。被氧化的硫氧还蛋白本身又由黄素酶硫氧还蛋白还原酶用 NADPH 作为辅酶重新还原（图 4.6：NADPH → 硫氧还蛋白还原酶 (FAD) → 硫氧还蛋白 (SH/SH) → 核糖核苷酸还原酶 (SH/SH) → NDP 变为 dNDP）。" }
  ],
  terms: [
    { cz: "karbamoylfosfát", en: "carbamoyl phosphate", cn: "氨甲酰磷酸", def_en: "Formed from HCO3- and glutamine's amide nitrogen (2 ATP); donates the first nitrogen and the future C2 of the pyrimidine ring.", def_cn: "由 HCO3- 和谷氨酰胺酰胺氮生成（消耗 2 个 ATP）；提供嘧啶环的第一个氮原子及未来的 C2。" },
    { cz: "dihydroorotát", en: "dihydroorotate", cn: "二氢乳清酸", def_en: "The cyclised six-membered pyrimidine ring formed from N-carbamoylaspartate, before attachment to PRPP.", def_cn: "由 N-氨甲酰天冬氨酸环化而成的六元嘧啶环，是与 PRPP 连接之前的形式。" },
    { cz: "orotát", en: "orotate (orotic acid)", cn: "乳清酸", def_en: "Formed by dehydrogenation of dihydroorotate; reacts with PRPP to attach the completed ring to ribose-phosphate.", def_cn: "由二氢乳清酸脱氢生成；与 PRPP 反应，使已合成好的环与核糖磷酸相连。" },
    { cz: "aspartáttranskarbamoylasa", en: "aspartate transcarbamoylase (ATCase)", cn: "天冬氨酸转氨甲酰酶", def_en: "The allosteric enzyme catalysing the first committed step (carbamoyl-P + aspartate); feedback-inhibited by CTP.", def_cn: "催化第一步限速反应（氨甲酰磷酸+天冬氨酸）的别构酶；受 CTP 反馈抑制。" },
    { cz: "ribonukleotidreduktasa", en: "ribonucleotide reductase", cn: "核糖核苷酸还原酶", def_en: "Converts NDP to dNDP by removing the ribose 2′-OH; re-reduced via thioredoxin, thioredoxin reductase and NADPH.", def_cn: "通过脱去核糖 2′-OH 将 NDP 转化为 dNDP；经硫氧还蛋白、硫氧还蛋白还原酶和 NADPH 重新还原。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Where do the TWO nitrogen atoms of the pyrimidine ring come from?",
      q_cn: "嘧啶环的两个氮原子来自哪里？",
      options: ["Both from glutamine's amide group", "Carbamoyl phosphate and aspartate", "Glycine and aspartate", "Both from CO2"],
      answer: 1,
      why_en: "Carbamoyl phosphate supplies one nitrogen (itself built from HCO3- and glutamine's amide N), and aspartate supplies the other when it condenses with carbamoyl phosphate. Compare with purines, which need FOUR nitrogens from three sources.",
      why_cn: "氨甲酰磷酸提供一个氮原子（它本身由 HCO3- 和谷氨酰胺酰胺氮构成），天冬氨酸在与氨甲酰磷酸缩合时提供另一个。相比之下，嘌呤环需要来自三个来源的四个氮原子。"
    },
    {
      type: "mcq",
      q_en: "What is the crucial structural difference between how the purine and the pyrimidine rings are built?",
      q_cn: "嘌呤环与嘧啶环的搭建方式之间存在什么关键的结构性差异？",
      options: ["Purines are built complete and then attached to PRPP; pyrimidines are built piece by piece on PRPP", "Pyrimidines are built essentially complete (through orotate) BEFORE attaching to PRPP; purines are built piece by piece directly ON the ribose-phosphate scaffold", "Both are built complete before attaching to PRPP", "Neither pathway uses PRPP"],
      answer: 1,
      why_en: "This is the key contrast: the purine ring is assembled atom-by-atom directly on PRPP (eleven steps ending in IMP), whereas the pyrimidine ring is essentially finished, as orotate, before it ever reacts with PRPP to become orotidylate.",
      why_cn: "这是两者的关键差异：嘌呤环是直接在 PRPP 上一个原子一个原子搭建起来的（十一步生成 IMP），而嘧啶环则是在与 PRPP 反应生成乳清苷酸之前，就已经作为乳清酸基本合成完毕。"
    },
    {
      type: "mcq",
      q_en: "How is thymine actually produced for use in DNA, according to the book?",
      q_cn: "根据教材，胸腺嘧啶在 DNA 中是通过什么方式实际生成的？",
      options: ["Free thymine base is synthesised de novo and then attached to deoxyribose", "As dTMP, by methylation of dUMP using N5,N10-methylenetetrahydrofolate", "By amination of dUTP", "By decarboxylation of dCMP"],
      answer: 1,
      why_en: "The book is explicit that thymine is NOT synthesised as a pyrimidine derivative in its own right — it is formed directly as deoxythymidylate (dTMP) by methylating deoxyuridylate (dUMP), with N5,N10-methylenetetrahydrofolate as methyl donor.",
      why_cn: "教材明确指出，胸腺嘧啶并非作为独立的嘧啶衍生物被合成——而是直接以脱氧胸苷酸 (dTMP) 的形式，通过甲基化脱氧尿苷酸 (dUMP) 而生成，甲基供体为 N5,N10-亚甲基四氢叶酸。"
    },
    {
      type: "short",
      q_en: "Which enzyme is feedback-inhibited in pyrimidine biosynthesis, by what molecule, and why does this make biochemical sense?",
      q_cn: "嘧啶生物合成中哪种酶受反馈抑制？抑制它的分子是什么？这在生物化学上为何合理？",
      accept: ["aspartate transcarbamoylase", "ATCase", "CTP", "allosteric", "feedback", "天冬氨酸转氨甲酰酶", "CTP", "反馈"],
      answer_en: "Aspartate transcarbamoylase, the allosteric enzyme catalysing the first committed step (carbamoyl phosphate + aspartate to N-carbamoylaspartate), is inhibited by CTP — the END PRODUCT of the entire pathway. This is classic feedback regulation: once enough CTP has accumulated, the pathway throttles its own first step.",
      answer_cn: "天冬氨酸转氨甲酰酶——催化第一步限速反应（氨甲酰磷酸+天冬氨酸生成 N-氨甲酰天冬氨酸）的别构酶——受 CTP（整条通路的最终产物）抑制。这是典型的反馈调节：一旦 CTP 积累到足够量，通路就会抑制其自身的第一步。"
    }
  ],
  oral: {
    q_en: "How are pyrimidine nucleotides biosynthesised, how is the pathway regulated, and how are deoxyribonucleotides made for both series?",
    q_cn: "嘧啶核苷酸是如何生物合成的？该途径如何被调节？两大系列的脱氧核糖核苷酸又是如何生成的？",
    model_en: "Building the pyrimidine ring needs only two nitrogen atoms, and unlike the purine pathway, both are supplied before the ring ever meets the sugar. The first reaction forms carbamoyl phosphate from bicarbonate and the amide nitrogen of glutamine, at the cost of two ATP; carbamoyl phosphate then condenses with aspartate, supplying the second nitrogen, to give N-carbamoylaspartate, and an intramolecular condensation closes the six-membered ring to give dihydroorotic acid. Dehydrogenation of dihydroorotate, using NAD-plus, gives orotic acid, and only now, with the ring essentially complete, does the pathway attach it to the sugar: orotate reacts with PRPP to give orotidylate, which is decarboxylated to give uridylate, or UMP. From UMP, synthesis of UTP proceeds by two-step phosphorylation, exactly analogous to the purine nucleoside triphosphates, and UTP is aminated at carbon four, using ammonia in bacteria or glutamine in animals, to give CTP. Thymine takes a route of its own: it is never synthesised as a free pyrimidine derivative, but is produced directly as deoxythymidylate through methylation of deoxyuridylate, with methylenetetrahydrofolate as the methyl donor. The pathway is regulated by classic feedback inhibition at its first committed step: aspartate transcarbamoylase, the enzyme condensing carbamoyl phosphate with aspartate, is allosteric and is inhibited by CTP, the final product of the whole sequence. Finally, the deoxyribonucleotides needed for DNA, in both the purine and the pyrimidine series, are made by the same shared machinery: ribonucleotide reductase removes the two-prime hydroxyl of a ribonucleoside diphosphate using reducing equivalents carried by thioredoxin, and oxidised thioredoxin is itself regenerated by thioredoxin reductase, a flavin enzyme that draws its electrons from NADPH.",
    checklist: [
      "Named both nitrogen sources: carbamoyl phosphate and aspartate",
      "Contrasted pyrimidine assembly (ring built before attaching PRPP) with purine assembly",
      "Traced carbamoyl phosphate to dihydroorotate to orotate to UMP",
      "Described UMP to UTP to CTP, noting the bacteria/animal amino-donor difference",
      "Explained thymine's route via dTMP methylation of dUMP",
      "Named ATCase as the feedback-inhibited, CTP-regulated allosteric enzyme",
      "Described the shared thioredoxin/thioredoxin reductase/NADPH route to deoxyribonucleotides"
    ]
  }
},

{
  id: "4-1-2",
  book: "cz",
  topicKey: "nucleotides",
  chapter: 4,
  section: "4.1.2",
  czTitle: "Struktura nukleových kyselin",
  enTitle: "Structure of nucleic acids",
  cnTitle: "核酸的结构",
  pages: [72, 73, 74, 75],
  coverage: "full",
  coverageNote: "pp.72 (from the 4.1.2 heading) through 75 verified in full against the scans, including Obr. 4.7-4.11b. The labelled subsection 4.1.2.1 'Geny jsou tvořeny DNA' does not begin within pp.66-75 — the extraction ends on p.75 still inside the general structure discussion (A-DNA/Z-DNA), so that subsection is not covered by this node or by this page block at all.",
  cnNote: { topic: "十四", title: "核酸的结构 (笔记 pp.87–90)", status: "mapped" },
  summary: {
    en: "Nucleic acid macromolecules are chains of nucleosides joined by PHOSPHODIESTER bonds, normally 3′-5′ (2′-5′ is also possible in RNA). DNA's two strands are COMPLEMENTARY and ANTIPARALLEL, twisted into a right-handed DOUBLE HELIX held together by base-specific HYDROGEN BONDING (A·T = 2 bonds, G·C = 3 bonds) plus base STACKING and electrostatic interactions with metal ions. This helix is not one fixed shape: physiological B-DNA can convert to the wider, flatter A-DNA at reduced water content, and short specific sequences can even form the left-handed Z-DNA.",
    cn: "核酸大分子是由核苷通过磷酸二酯键连接而成的链，通常为 3′-5′ 连接（RNA 中也可能出现 2′-5′ 连接）。DNA 的两条链彼此互补、方向相反（反平行），盘绕成右手双螺旋，通过碱基特异性的氢键（A·T = 2 个氢键，G·C = 3 个氢键）以及碱基堆积和与金属离子的静电作用而维持稳定。这一螺旋结构并非一成不变：在水含量降低时，生理状态下的 B-DNA 可转变为更宽更扁平的 A-DNA，某些特定的短序列甚至可以形成左手的 Z-DNA。"
  },
  points: [
    { cz: "fosfodiesterová vazba 3′-5′", en: "Nucleic acid macromolecules are built from a large number of nucleosides joined by PHOSPHODIESTER bonds. Such a bond normally forms between carbon 3 of one pentose and carbon 5 of the NEXT pentose — the resulting 3′-5′ linkage occurs in BOTH DNA and RNA. RNA can ADDITIONALLY form 2′-5′ linkages (Obr. 4.7 shows an RNA dinucleotide segment). DNA's backbone is built the same way, but with 2-deoxyribose instead of ribose.", cn: "核酸大分子由大量核苷通过磷酸二酯键连接而成。这种键通常在一个戊糖的第 3 位碳与下一个戊糖的第 5 位碳之间形成——由此产生的 3′-5′ 连接在 DNA 和 RNA 中都存在。RNA 中还可能形成 2′-5′ 连接（图 4.7 展示了一段 RNA 二核苷酸片段）。DNA 骨架的构建方式相同，只是以 2-脱氧核糖取代核糖。" },
    { cz: "zápis 5′→3′", en: "By CONVENTION, polynucleotide sequences are written with the 5′ end on the LEFT and the 3′ end on the RIGHT — so a symbol such as ACG (or pApCpG) means the 5′ end is adenosine and the 3′ end is guanosine, read left to right.", cn: "按惯例，多核苷酸序列的书写以 5′ 端在左、3′ 端在右——因此像 ACG（或 pApCpG）这样的符号表示 5′ 端是腺苷、3′ 端是鸟苷，从左向右读。" },
    { cz: "dvoušroubovice, B-DNA", en: "Like all macromolecules, nucleic acids have higher-order structure beyond the primary sequence. DNA's two chains are typically twisted into a RIGHT-HANDED DOUBLE HELIX (Obr. 4.8 shows B-DNA, with its MAJOR and MINOR grooves); this is partly stabilised by HYDROGEN BONDS between bases of the two different strands.", cn: "与所有大分子一样，核酸除一级序列外还具有更高层次的结构。DNA 的两条链通常盘绕成右手双螺旋（图 4.8 展示了 B-DNA 及其主沟和次沟）；这一结构部分地由两条链上碱基之间的氢键所稳定。" },
    { cz: "párování bází A-T / G-C", en: "For SPATIAL reasons, hydrogen bonds form only between SPECIFIC base pairs: ADENINE-THYMINE (TWO hydrogen bonds) and GUANINE-CYTOSINE (THREE hydrogen bonds) — called BASE PAIRING (Obr. 4.9). This specificity is ESSENTIAL for the accuracy of DNA replication. Obr. 4.9 also gives the classic geometry: a C1′-C1′ distance of 10.85 Å and glycosidic-bond angles of 51.5° for both pairs.", cn: "出于空间原因，氢键只在特定的碱基对之间形成：腺嘌呤–胸腺嘧啶（两个氢键）和鸟嘌呤–胞嘧啶（三个氢键）——称为碱基配对（图 4.9）。这种特异性对 DNA 复制的准确性至关重要。图 4.9 还给出了经典的几何参数：两种碱基对的 C1′-C1′ 距离均为 10.85 Å，糖苷键夹角均为 51.5°。" },
    { cz: "komplementarita a antiparalelita", en: "Because a base can only pair with its specific partner, the nucleotide sequence of one DNA strand is COMPLEMENTARY (but NOT identical) to the other. Both strands are ANTIPARALLEL: one strand runs 5′→3′ 'upward' through the helix while the other runs 5′→3′ 'downward'.", cn: "由于碱基只能与其特定的配对碱基结合，DNA 一条链的核苷酸序列与另一条链互补（但不相同）。两条链是反平行的：一条链沿 5′→3′ 方向在螺旋中「向上」走，另一条链沿 5′→3′ 方向「向下」走。" },
    { cz: "stohování a elektrostatika", en: "Besides hydrogen bonds, the double helix is further stabilised by base STACKING (purine and pyrimidine rings stacking on each other, Obr. 4.10 — stabilised mainly by HYDROPHOBIC forces in aqueous solution) and by ELECTROSTATIC interactions of the fully-ionised (at pH 7) phosphate groups, e.g. IONIC bonds with biogenic metal ions such as Mg²⁺ or Mn²⁺.", cn: "除氢键外，双螺旋还通过碱基堆积（嘌呤和嘧啶环彼此堆叠，图 4.10——在水溶液中主要由疏水力稳定）以及磷酸基团的静电作用而进一步稳定；在 pH 7 时磷酸基团完全解离，可与 Mg²⁺、Mn²⁺ 等生源金属离子形成离子键。" },
    { cz: "B-DNA → A-DNA (vlhkost)", en: "Double-stranded DNA has a considerably VARIABLE conformation. At a reduced relative water content (75%), B-DNA converts to the A conformation: A-DNA forms a WIDER and FLATTER right-handed helix than B-DNA, with a DEEP major groove and a very SHALLOW minor groove (Obr. 4.11a).", cn: "双链 DNA 的构象具有相当大的可变性。当相对含水量降低至 75% 时，B-DNA 转变为 A 构象：A-DNA 形成的右手螺旋比 B-DNA 更宽、更扁平，具有深的主沟和非常浅的次沟（图 4.11a）。" },
    { cz: "Z-DNA — levotočivá, funkce neznámá", en: "Another DNA conformation is Z-DNA, a LEFT-HANDED helix (Obr. 4.11b) — a sequence such as d(CGCATGCG) forms a similar helix. Z-DNA has a deep MINOR groove while its major groove is barely distinguishable; it occurs only in CERTAIN, specific stretches of DNA and its biological function is NOT YET KNOWN. Under physiological conditions DNA exists almost EXCLUSIVELY as B-DNA.", cn: "DNA 的另一种构象是 Z-DNA，一种左手螺旋（图 4.11b）——类似 d(CGCATGCG) 这样的序列即可形成这种螺旋。Z-DNA 具有深的次沟，而其主沟几乎无法辨认；它只出现在 DNA 的某些特定区段，其生物学功能尚不清楚。在生理条件下，DNA 几乎完全以 B-DNA 的形式存在。" }
  ],
  terms: [
    { cz: "fosfodiesterová vazba", en: "phosphodiester bond", cn: "磷酸二酯键", def_en: "The bond linking C3 of one pentose to C5 of the next; normally 3′-5′, forms the nucleic acid backbone.", def_cn: "连接一个戊糖 C3 与下一个戊糖 C5 的键；通常为 3′-5′ 连接，构成核酸骨架。" },
    { cz: "dvoušroubovice (double helix)", en: "double helix", cn: "双螺旋", def_en: "The typical right-handed twisted conformation of the two DNA strands, e.g. B-DNA.", def_cn: "DNA 两条链典型的右手盘绕构象，如 B-DNA。" },
    { cz: "párování bází", en: "base pairing", cn: "碱基配对", def_en: "Specific hydrogen bonding between A-T (2 bonds) and G-C (3 bonds) that underlies complementarity.", def_cn: "A-T（2 个氢键）与 G-C（3 个氢键）之间特异性的氢键结合，是互补性的基础。" },
    { cz: "antiparalelní vlákna", en: "antiparallel strands", cn: "反平行链", def_en: "The two DNA strands run in opposite 5′→3′ directions relative to each other.", def_cn: "DNA 两条链的 5′→3′ 方向彼此相反。" },
    { cz: "stohování bází (stacking)", en: "base stacking", cn: "碱基堆积", def_en: "Hydrophobically-stabilised stacking of purine/pyrimidine rings that helps stabilise the double helix, alongside hydrogen bonds and electrostatics.", def_cn: "嘌呤/嘧啶环之间由疏水作用稳定的堆积，与氢键、静电作用共同稳定双螺旋。" },
    { cz: "A-DNA / Z-DNA", en: "A-DNA / Z-DNA", cn: "A-DNA／Z-DNA", def_en: "Alternative DNA conformations: A-DNA (wider, flatter, right-handed, at low water content) and Z-DNA (left-handed, sequence-specific, function unknown) — both distinct from the physiological B form.", def_cn: "DNA 的其他构象：A-DNA（更宽、更扁平的右手螺旋，出现于低含水量条件下）与 Z-DNA（左手螺旋，序列特异，功能未知）——二者均不同于生理状态下的 B 型。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How many hydrogen bonds form in a G-C pair versus an A-T pair, and why does this matter?",
      q_cn: "G-C 碱基对与 A-T 碱基对分别形成多少个氢键？这为什么重要？",
      options: ["2 for G-C, 3 for A-T — no functional consequence", "3 for G-C, 2 for A-T — this specificity underlies accurate DNA replication", "3 for both pairs", "G and C cannot hydrogen-bond directly"],
      answer: 1,
      why_en: "Guanine-cytosine forms THREE hydrogen bonds, adenine-thymine forms TWO. The book stresses that this base-pairing specificity is essential for the accuracy of DNA replication — get the count backwards and you have the wrong pair entirely.",
      why_cn: "鸟嘌呤-胞嘧啶形成三个氢键，腺嘌呤-胸腺嘧啶形成两个。教材强调这种碱基配对的特异性对 DNA 复制的准确性至关重要——如果把数目记反，配对关系就完全错了。"
    },
    {
      type: "mcq",
      q_en: "What happens to DNA's conformation when relative water content drops to about 75%?",
      q_cn: "当相对含水量降至约 75% 时，DNA 的构象会发生什么变化？",
      options: ["It denatures irreversibly", "B-DNA converts to A-DNA — a wider, flatter right-handed helix with a deep major groove and very shallow minor groove", "It converts to Z-DNA", "Nothing — DNA conformation is water-independent"],
      answer: 1,
      why_en: "At reduced water content (about 75% relative), B-DNA converts to the A conformation. A-DNA is wider and flatter than B-DNA, with a deep major groove and a very shallow minor groove. Z-DNA is a DIFFERENT, left-handed, sequence-specific conformation, not a simple consequence of dehydration.",
      why_cn: "在相对含水量降低（约 75%）时，B-DNA 转变为 A 构象。A-DNA 比 B-DNA 更宽更扁平，具有深的主沟和非常浅的次沟。Z-DNA 则是另一种不同的、左手的、序列特异的构象，并非单纯脱水的结果。"
    },
    {
      type: "mcq",
      q_en: "Which statement about Z-DNA is correct, according to the book?",
      q_cn: "根据教材，关于 Z-DNA 的哪一说法是正确的？",
      options: ["It is right-handed and stabilises telomeres", "It is left-handed, occurs only in certain DNA stretches (e.g. d(CGCATGCG)), and its biological function is not yet known", "It has a shallow minor groove and no major groove at all", "It is the dominant physiological form of DNA"],
      answer: 1,
      why_en: "Z-DNA is a LEFT-handed helix formed by sequences such as d(CGCATGCG); it occurs only in specific DNA segments and its biological function is explicitly described as not yet known. Under physiological conditions DNA is almost exclusively B-DNA.",
      why_cn: "Z-DNA 是由类似 d(CGCATGCG) 这样的序列形成的左手螺旋；它只出现在特定的 DNA 区段，其生物学功能被明确指出尚不清楚。在生理条件下，DNA 几乎完全以 B-DNA 形式存在。"
    },
    {
      type: "short",
      q_en: "Besides hydrogen bonding between paired bases, what OTHER interactions stabilise the DNA double helix?",
      q_cn: "除碱基对之间的氢键外，还有哪些其他相互作用稳定着 DNA 双螺旋？",
      accept: ["stacking", "hydrophobic", "electrostatic", "ionic", "Mg", "Mn", "堆积", "疏水", "静电", "离子"],
      answer_en: "Base stacking of purine and pyrimidine rings, stabilised mainly by hydrophobic forces in aqueous solution, and electrostatic (ionic) interactions of the fully-ionised phosphate backbone at pH 7 — for example ionic bonds with biogenic metal ions such as Mg²⁺ or Mn²⁺.",
      answer_cn: "嘌呤和嘧啶环之间的碱基堆积（在水溶液中主要由疏水力稳定），以及在 pH 7 下完全解离的磷酸骨架的静电（离子）相互作用——例如与 Mg²⁺、Mn²⁺ 等生源金属离子形成的离子键。"
    }
  ],
  oral: {
    q_en: "Describe the structure of nucleic acids: the backbone linkage, the double helix, base pairing, and the alternative DNA conformations.",
    q_cn: "描述核酸的结构：骨架连接方式、双螺旋、碱基配对，以及 DNA 的其他构象。",
    model_en: "Nucleic acid macromolecules are chains of a large number of nucleosides joined by phosphodiester bonds, which normally form between carbon three of one pentose and carbon five of the next; this three-prime to five-prime linkage occurs in both DNA and RNA, though RNA can additionally form two-prime to five-prime linkages. DNA is built the same way but with two-deoxyribose in place of ribose, and by convention its sequences are written with the five-prime end on the left and the three-prime end on the right. Beyond this primary structure, nucleic acids, like all macromolecules, have higher-order structure: DNA's two chains are typically twisted into a right-handed double helix, of which B-DNA is the classic example, and this helix is partly stabilised by hydrogen bonds between bases on the two different strands. For spatial reasons these hydrogen bonds form only between specific pairs: adenine with thymine, through two hydrogen bonds, and guanine with cytosine, through three: this is base pairing, and its specificity is essential for the accuracy of DNA replication. Because of this pairing rule, the sequence of one strand is complementary, though not identical, to the other, and the two strands run antiparallel to each other. Besides hydrogen bonding, the helix is further stabilised by the stacking of purine and pyrimidine rings on top of each other, held together mainly by hydrophobic forces in water, and by electrostatic interactions of the fully ionised phosphate groups, for instance ionic bonds with biogenic metal ions such as magnesium or manganese. Finally, double-stranded DNA is not one fixed shape: at reduced relative water content, around seventy-five percent, the physiological B form converts into the wider, flatter A conformation, with a deep major groove and a very shallow minor groove; certain specific sequences can also form Z-DNA, a left-handed helix with a deep minor groove and almost no discernible major groove, whose biological function is still unknown. Under normal physiological conditions, though, DNA exists almost exclusively as B-DNA.",
    checklist: [
      "Described the phosphodiester backbone and the 3'-5' (and RNA's 2'-5') linkage",
      "Gave the 5'-to-3' writing convention",
      "Named B-DNA as a right-handed double helix stabilised partly by hydrogen bonds",
      "Gave the A-T (2 bonds) / G-C (3 bonds) pairing rule and its role in replication accuracy",
      "Explained complementarity and antiparallel strand orientation",
      "Named stacking (hydrophobic) and electrostatic/ionic interactions as further stabilisers",
      "Described the B-to-A transition at low water content and its groove geometry",
      "Described Z-DNA as left-handed, sequence-specific, function unknown",
      "Noted B-DNA is the near-exclusive physiological form"
    ]
  }
},

{
  id: "4-1-3-1",
  book: "cz",
  topicKey: "dna-replication",
  chapter: 4,
  section: "4.1.3",
  czTitle: "Struktura a biosyntéza DNA vysvětluje princip dědičnosti — 1) DNA-polymerasy",
  enTitle: "DNA structure and biosynthesis explain the principle of heredity — 1) DNA polymerases",
  cnTitle: "DNA的结构与生物合成阐释遗传原理——一、DNA聚合酶",
  pages: [76, 77, 78, 79, 80],
  coverage: "full",
  coverageNote: "All five pages read directly from the scans, including zoomed re-reads of the DNA-size figures on p.76 and the fragment molecular weights spanning p.79/80 to confirm exact digits. p.76 opens with the tail of the preceding subsection 4.1.2.1 (circular/supercoiled DNA, Obr. 4.12) before the 4.1.3 heading; that material is included briefly as lead-in context, not claimed as 4.1.3 content proper. p.80 is shared with node 4-1-3-2: its first half (DNA polymerase II/III) is used here, its second half (from the bold subheading '2) Helikasy, vazebné proteiny a DNA-ligasy' onward) is used there.",
  cnNote: { topic: null, title: "DNA的复制 (笔记无编号，见 pp.211–212，属于27个主题之外的补充内容)", status: "mapped" },
  summary: {
    en: "DNA biosynthesis — called REDUPLIKACE (reduplication) in this textbook — proceeds on an existing DNA molecule as TEMPLATE, so that base COMPLEMENTARITY fixes the order of nucleotides in the new strand. Carrying this out needs, besides the template, all four deoxyribonucleotides as triphosphates and a short RNA primer, plus a set of enzymes whose centrepiece is the family of DNA-DEPENDENT DNA POLYMERASES. E. coli has three of these (I, II, III), each with a different combination of catalytic activities and a different biological role.",
    cn: "DNA的生物合成——本教材称之为reduplikace（重复制/复制）——是在已有的DNA分子（作为模板）上进行的，新链中核苷酸的顺序通过碱基互补由模板决定。要完成这一过程，除模板外还需要四种脱氧核糖核苷酸的三磷酸形式以及一小段RNA引物，此外还需要一整套酶，其核心是DNA依赖型DNA聚合酶家族。大肠杆菌中共有三种此类酶（I、II、III），各自具有不同的催化活性组合与不同的生物学作用。"
  },
  points: [
    { cz: "kruhová a nadšroubovicová DNA (návaznost na 4.1.2.1)", en: "LEAD-IN FROM THE PRECEDING SUBSECTION: gene maps of viruses and bacteria show their chromosomes are CIRCULAR, confirmed by electron micrographs (Obr. 4.12) in which the two free ends of a DNA molecule have joined to form CIRCULAR DNA. Some circular DNA is further twisted into a SUPERCOILED form, called NADŠROUBOVICE. DNA molecule size varies enormously by organism: from 5.1 kb up to 2.9 × 10⁶ kb, i.e. from 1.7 μm up to 0.99 m of extended length.", cn: "承接前一小节（4.1.2.1）的内容：病毒和细菌的基因图谱显示其染色体是环状的，电子显微镜照片（图4.12）证实了这一点——图中DNA分子的两个游离末端已连接形成环状DNA。部分环状DNA进一步扭曲形成超螺旋形式，称为nadšroubovice。DNA分子的大小因生物体而异，差异极大：从5.1 kb到2.9×10⁶ kb，即展开长度从1.7 μm到0.99 m。" },
    { cz: "reduplikace = replikace", en: "DNA biosynthesis itself is called REDUPLIKACE (REPLICATION): it proceeds ON A TEMPLATE (one DNA strand), and the nucleotide order of the newly formed DNA is DETERMINED BY THE ORDER OF BASES IN THE TEMPLATE via base COMPLEMENTARITY (Obr. 4.13, 4.14).", cn: "DNA的生物合成本身称为reduplikace（复制）：合成以模板（DNA的一条链）为依据进行，新生成DNA中核苷酸的顺序通过碱基互补由模板中碱基的顺序决定（图4.13、4.14）。" },
    { cz: "substráty a klíčové enzymy biosyntézy", en: "BIOSYNTHESIS OF DNA REQUIRES, besides enzymes, several substrates: all four DEOXYRIBONUCLEOTIDES as TRIPHOSPHATES (dATP, dGTP, dCTP, dTTP); a DNA molecule serving as TEMPLATE; and a short stretch of RNA serving as the STARTER (PRIMER). The most important enzymes are the DNA POLYMERASES (chain extension) and DNA LIGASE (covalent joining of fragments); also essential are the unwinding/binding proteins (HELICASES) that build the replication fork, proteins preventing strand re-pairing, and enzymes that synthesise and remove the RNA primer.", cn: "DNA的生物合成除酶外还需要若干底物：四种脱氧核糖核苷酸的三磷酸形式（dATP、dGTP、dCTP、dTTP）；作为模板的DNA分子；以及作为引物（primer）的一小段RNA。最重要的酶是负责链延伸的DNA聚合酶和负责片段共价连接的DNA连接酶；此外，构建复制叉所需的解旋/结合蛋白（解旋酶）、防止链重新配对的蛋白，以及合成与去除RNA引物的酶也都不可或缺。" },
    { cz: "replikační očko (Obr. 4.15)", en: "Electron micrographs of DROSOPHILA DNA (Obr. 4.15) show a REPLICATION 'EYE' — the single-stranded regions near the replication forks have a TRANS configuration, matching the model of SEMICONSERVATIVE DNA replication.", cn: "果蝇DNA的电子显微镜照片（图4.15）显示出复制「眼」（replication eye）——复制叉附近的单链区域呈trans构型，这与DNA半保留复制模型相符。" },
    { cz: "DNA-polymerasa I — mechanismus", en: "DNA POLYMERASE I catalyses, on a DNA template, addition of deoxyribonucleotides to the FREE 3′-OH group at the 3′-end of the growing strand, so synthesis runs 5′→3′: (DNA)n + dNTP → (DNA)n+1 + pyrophosphate (PPi), driven by release and subsequent hydrolysis of the pyrophosphate. Besides the dNTPs and template, a POLYNUCLEOTIDE SEGMENT ALREADY PAIRED TO THE TEMPLATE with a free 3′-OH must be present, and Mg²⁺ IONS are essential. Mechanistically, the enzyme catalyses a NUCLEOPHILIC ATTACK of that 3′-OH end on the phosphorus atom of the incoming dNTP, forming a PHOSPHODIESTER BOND and releasing pyrophosphate. Its single most important property is that it adds deoxynucleotides strictly in the order DICTATED BY THE TEMPLATE.", cn: "DNA聚合酶I在DNA模板上催化脱氧核糖核苷酸加到正在延伸的链3′端的游离3′-OH基团上，因此合成方向是5′→3′：(DNA)n + dNTP → (DNA)n+1 + 焦磷酸(PPi)，由焦磷酸的释放及随后的水解所推动。除dNTP和模板外，还必须已经存在一段与模板配对、带有游离3′-OH的多核苷酸片段，且Mg²⁺离子是必需的。从机制上看，该酶催化3′-OH末端对新加入dNTP磷原子的亲核攻击，形成磷酸二酯键并释放焦磷酸。它最重要的特性是严格按模板所指定的顺序加入脱氧核苷酸。" },
    { cz: "3′→5′ exonukleasa = korektura", en: "DNA polymerase I ALSO ACTS AS AN EXONUCLEASE. Its 3′→5′ EXONUCLEASE activity (Obr. 4.16) cleaves the chain link by link from the 3′-OH end and serves as a SECOND PROOFREADER, correcting base-pairing errors that arise at the START of DNA synthesis. DNA polymerase III has the SAME 3′→5′ proofreading activity.", cn: "DNA聚合酶I还具有外切核酸酶的功能。其3′→5′外切核酸酶活性（图4.16）从3′-OH末端逐个切除链上的核苷酸，起到第二重校对者的作用——纠正DNA合成起始阶段可能出现的碱基配对错误。DNA聚合酶III具有相同的3′→5′校对活性。" },
    { cz: "5′→3′ nukleasa = nick translation", en: "A SEPARATE, unrelated 5′→3′ NUCLEASE activity of DNA polymerase I cleaves WITHIN the chain (inside a double-helical region) and removes a LONGER stretch — UP TO 10 NUCLEOTIDES — at a strand break, or 'nick' (Obr. 4.17). Combined with the polymerase activity this SHIFTS the nick toward the 3′-end without otherwise changing the DNA — so-called NICK TRANSLATION (Obr. 4.18). It matters for TWO reasons: it REMOVES THE RNA PRIMER during normal replication, and it REPAIRS damage such as excised UV-induced PYRIMIDINE DIMERS, with the polymerase activity simultaneously filling the gap.", cn: "DNA聚合酶I还有一种独立的、与前者无关的5′→3′核酸酶活性，它在链内部（双螺旋区域内）切割，并在链断裂处（「缺口」，nick）一次切除较长的片段——最多可达10个核苷酸（图4.17）。这一活性与聚合酶活性结合，能在不改变DNA其余部分的前提下把缺口向3′端推移——即所谓的缺口平移（nick translation，图4.18）。其重要性体现在两方面：一是在正常复制中去除RNA引物，二是修复损伤（例如切除紫外线诱导产生的嘧啶二聚体），同时由聚合酶活性填补产生的缺口。" },
    { cz: "tři aktivní centra / Klenowův fragment", en: "DNA polymerase I is a THREE-FUNCTION enzyme with THREE DISTINCT ACTIVE CENTRES for these reactions. Limited proteolysis splits it into a SMALL FRAGMENT (molecular weight 36,000), carrying the ENTIRE 5′→3′ nuclease activity, and the remaining LARGE or KLENOW FRAGMENT (molecular weight 67,000), carrying the 3′→5′ exonuclease AND the polymerase activity.", cn: "DNA聚合酶I是一种三功能酶，含有三个独立的活性中心分别对应上述反应。有限蛋白水解可将其切成小片段（分子质量36,000），含全部5′→3′核酸酶活性；以及剩余的大片段，即Klenow片段（分子质量67,000），含3′→5′外切核酸酶活性和聚合酶活性。" },
    { cz: "DNA-polymerasa II a III", en: "TWO FURTHER polymerases exist, DNA POLYMERASE II and III. Both share the SAME TWO activities as pol I (polymerase + 3′→5′ exonuclease), but DNA polymerase II LACKS the 5′→3′ nuclease activity. An IN VIVO function is known ONLY for DNA POLYMERASE III: it is the cell's DNA REPLICASE, synthesising the BULK of new DNA, while DNA polymerase I is limited to REMOVING PRIMERS and FILLING the resulting gaps.", cn: "细胞内还存在另外两种聚合酶，DNA聚合酶II与III。二者都具有与聚合酶I相同的两种活性（聚合酶活性+3′→5′外切核酸酶活性），但DNA聚合酶II缺乏5′→3′核酸酶活性。只有DNA聚合酶III的体内功能是明确的：它是细胞的DNA复制酶，负责合成绝大部分新DNA，而DNA聚合酶I的职责仅限于去除引物并填补由此产生的缺口。" }
  ],
  terms: [
    { cz: "reduplikace (replikace)", en: "DNA replication (reduplication)", cn: "DNA复制（reduplikace）", def_en: "Template-directed biosynthesis of DNA; the nucleotide order of the new strand is fixed by the template's base sequence through complementarity.", def_cn: "以模板为依据的DNA生物合成；新链的核苷酸顺序通过碱基互补由模板的碱基序列决定。" },
    { cz: "templát (matrice)", en: "template", cn: "模板", def_en: "The existing DNA strand whose base sequence directs synthesis of the new, complementary strand.", def_cn: "指导新的互补链合成的现有DNA链，其碱基序列起决定作用。" },
    { cz: "DNA-polymerasa I", en: "DNA polymerase I", cn: "DNA聚合酶I", def_en: "Extends DNA 5'→3' from a free 3'-OH on a template; also has 3'→5' proofreading exonuclease and 5'→3' nick-translation nuclease activities.", def_cn: "以模板上游离的3′-OH为起点，沿5′→3′方向延伸DNA；还具有3′→5′校对外切核酸酶活性和5′→3′缺口平移核酸酶活性。" },
    { cz: "3′→5′ exonukleasová aktivita", en: "3'→5' exonuclease (proofreading) activity", cn: "3′→5′外切核酸酶（校对）活性", def_en: "Removes mismatched bases link by link from the 3'-OH end, correcting errors made early in DNA synthesis; shared by DNA polymerases I and III.", def_cn: "从3′-OH末端逐个切除错配的碱基，纠正DNA合成早期出现的错误；DNA聚合酶I和III都具有此活性。" },
    { cz: "5′→3′ nukleasová aktivita (nick translation)", en: "5'→3' nuclease activity (nick translation)", cn: "5′→3′核酸酶活性（缺口平移）", def_en: "Cleaves within the chain at a nick, removing up to 10 nucleotides at once; shifts the nick toward the 3'-end; removes RNA primers and repairs UV damage.", def_cn: "在链内部的缺口处切割，一次可切除多达10个核苷酸；使缺口向3′端移动；用于去除RNA引物及修复紫外线损伤。" },
    { cz: "Klenowův fragment", en: "Klenow fragment", cn: "Klenow片段", def_en: "The large proteolytic fragment of DNA polymerase I (MW 67,000), retaining the 3'→5' exonuclease and polymerase activities but not the 5'→3' nuclease.", def_cn: "DNA聚合酶I经蛋白水解产生的大片段（分子质量67,000），保留3′→5′外切核酸酶活性和聚合酶活性，但不含5′→3′核酸酶活性。" },
    { cz: "DNA-polymerasa III", en: "DNA polymerase III", cn: "DNA聚合酶III", def_en: "The cell's true DNA replicase — the only one of the three polymerases with a demonstrated in vivo role, synthesising the bulk of new DNA.", def_cn: "细胞真正的DNA复制酶——三种聚合酶中唯一已证实具有体内功能的一种，负责合成绝大部分新DNA。" },
    { cz: "nadšroubovice (superhelicita)", en: "supercoiled (superhelical) DNA", cn: "超螺旋DNA", def_en: "Circular DNA further twisted upon itself; seen by electron microscopy as progressively more compact circular forms (Obr. 4.12).", def_cn: "环状DNA进一步自身扭曲的形式；电子显微镜下可见其呈现逐渐更加紧密的环状构象（图4.12）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "DNA polymerase I has TWO distinct exonuclease/nuclease activities. What distinguishes the 5′→3′ activity from the 3′→5′ activity?",
      q_cn: "DNA聚合酶I具有两种不同的外切/核酸酶活性。5′→3′活性与3′→5′活性的区别是什么？",
      options: [
        "The 5′→3′ activity proofreads single mismatched bases one at a time; the 3′→5′ activity removes whole RNA primers",
        "The 5′→3′ activity cleaves within the double-helical region and removes up to 10 nucleotides at a nick (nick translation); the 3′→5′ activity is the proofreading function",
        "The 5′→3′ activity requires Mg²⁺ while the 3′→5′ activity does not",
        "The 5′→3′ activity belongs only to DNA polymerase III; the 3′→5′ activity belongs only to DNA polymerase I"
      ],
      answer: 1,
      why_en: "The 5′→3′ nuclease cleaves WITHIN the chain at a nick and removes UP TO 10 NUCLEOTIDES at once — this is nick translation, used for primer removal and repair. The SEPARATE 3′→5′ exonuclease is the proofreading function, shared with DNA polymerase III. Both need Mg²⁺; the activities are not split between polymerases I and III as in option D.",
      why_cn: "5′→3′核酸酶在链内部的缺口处切割，一次可切除多达10个核苷酸——这就是缺口平移，用于引物去除和修复。另一个独立的3′→5′外切核酸酶活性是校对功能，DNA聚合酶III也具备这一活性。两种活性都需要Mg²⁺；并非像选项D所说分别专属于聚合酶I和III。"
    },
    {
      type: "mcq",
      q_en: "Which DNA polymerase has a demonstrated IN VIVO role as the cell's main replicase, synthesising most new DNA?",
      q_cn: "哪一种DNA聚合酶已被证实在体内担任细胞的主要复制酶，负责合成大部分新DNA？",
      options: ["DNA polymerase I", "DNA polymerase II", "DNA polymerase III", "Primase"],
      answer: 2,
      why_en: "Only DNA polymerase III has a known in vivo function, acting as DNA REPLICASE and synthesising the bulk of new DNA. DNA polymerase I's job is limited to removing RNA primers and filling the resulting gaps; DNA polymerase II shares pol I's two enzymatic activities but lacks the 5′→3′ nuclease, and this text gives it no established in vivo role.",
      why_cn: "只有DNA聚合酶III具有已知的体内功能，作为DNA复制酶合成绝大部分新DNA。DNA聚合酶I的职责仅限于去除RNA引物并填补由此产生的缺口；DNA聚合酶II具有与聚合酶I相同的两种酶活性，但缺乏5′→3′核酸酶活性，本教材并未说明它有确定的体内作用。"
    },
    {
      type: "short",
      q_en: "Describe the chemical mechanism by which DNA polymerase I extends a DNA chain, including what must already be present on the template.",
      q_cn: "描述DNA聚合酶I延伸DNA链的化学机制，包括模板上必须预先具备什么条件。",
      accept: ["3'-OH", "nucleophilic", "phosphodiester", "pyrophosphate", "primer", "template", "亲核", "磷酸二酯", "焦磷酸", "引物"],
      answer_en: "A polynucleotide segment already paired to the template, with a free 3'-OH end, must be present. The enzyme catalyses a nucleophilic attack of that 3'-OH on the phosphorus atom of the incoming deoxyribonucleoside triphosphate, forming a new phosphodiester bond and releasing pyrophosphate, which is further split by pyrophosphatase. Mg2+ ions are essential, and the base added is always the one complementary to the template.",
      answer_cn: "模板上必须已经存在一段与其配对、带有游离3′-OH末端的多核苷酸片段。该酶催化这个3′-OH对新加入的脱氧核糖核苷三磷酸磷原子的亲核攻击，形成新的磷酸二酯键并释放焦磷酸，焦磷酸再被焦磷酸酶进一步水解。Mg2+离子是必需的，加入的碱基总是与模板互补的那一个。"
    },
    {
      type: "mcq",
      q_en: "Limited proteolysis splits DNA polymerase I into two fragments. What does the LARGE (Klenow) fragment retain?",
      q_cn: "有限蛋白水解将DNA聚合酶I切成两个片段。大片段（Klenow片段）保留了哪些活性？",
      options: [
        "Only the 5′→3′ nuclease activity",
        "The 3′→5′ exonuclease and the polymerase activity",
        "Only the polymerase activity, with both exonuclease activities lost",
        "All three activities, identical to the intact enzyme"
      ],
      answer: 1,
      why_en: "The small fragment (MW 36,000) carries the entire 5′→3′ nuclease activity. The large, or Klenow, fragment (MW 67,000) carries the 3′→5′ exonuclease AND the polymerase activity — which is why the Klenow fragment is used in the lab when nick translation's degradative activity is unwanted.",
      why_cn: "小片段（分子质量36,000）携带全部5′→3′核酸酶活性。大片段，即Klenow片段（分子质量67,000），携带3′→5′外切核酸酶活性和聚合酶活性——这正是当不希望出现缺口平移的降解活性时，实验室常用Klenow片段的原因。"
    }
  ],
  oral: {
    q_en: "Explain how DNA polymerases carry out DNA replication, including their proofreading and repair functions.",
    q_cn: "解释DNA聚合酶如何进行DNA复制，包括其校对和修复功能。",
    model_en: "DNA biosynthesis, called reduplication in this textbook, takes place on an existing DNA molecule as template, so that base complementarity fixes the order of nucleotides in the new strand. Carrying this out requires, besides a template, all four deoxyribonucleotides as triphosphates, a short RNA primer to supply a free three-prime hydroxyl group, and a battery of enzymes, chief among them the DNA polymerases and DNA ligase. Electron micrographs of replicating Drosophila DNA show a so-called replication eye, with the single-stranded regions near the forks in a configuration that matches the model of semiconservative replication. DNA polymerase one is the enzyme that actually extends the new strand: it catalyses a nucleophilic attack of the free three-prime hydroxyl end on the phosphorus atom of the incoming deoxynucleoside triphosphate, forming a new phosphodiester bond and releasing pyrophosphate, in a reaction that absolutely requires magnesium ions and a template-paired primer segment already in place; its defining property is that it adds nucleotides strictly in the order dictated by the template. But DNA polymerase one is also a two-fold exonuclease. Its three-prime to five-prime exonuclease activity acts as a second proofreader, correcting mismatches that arise early in synthesis. Its separate five-prime to three-prime nuclease activity, by contrast, cuts within the chain at a strand break and removes as many as ten nucleotides at once, a process called nick translation that both removes the RNA primer during normal replication and excises damage such as ultraviolet-induced pyrimidine dimers, with the polymerase activity simultaneously filling the resulting gap. These three activities sit in three separate active centres, and limited proteolysis splits the enzyme into a small fragment of molecular weight thirty-six thousand, carrying the five-prime to three-prime nuclease alone, and the large, or Klenow, fragment of molecular weight sixty-seven thousand, carrying both the three-prime to five-prime exonuclease and the polymerase activity. Two further polymerases exist, DNA polymerase two and three, sharing the polymerase and three-prime to five-prime exonuclease activities but lacking the five-prime to three-prime nuclease; only DNA polymerase three has a demonstrated role in the living cell, acting as the true DNA replicase that synthesises the bulk of new DNA, while DNA polymerase one is left with the housekeeping role of removing primers and filling the gaps they leave behind.",
    checklist: [
      "Defined reduplication/replication as template-directed synthesis via base complementarity",
      "Listed the required substrates: 4 dNTPs, template, RNA primer",
      "Cited the replication eye / semiconservative evidence",
      "Gave the DNA polymerase I mechanism: 3'-OH nucleophilic attack, phosphodiester bond, pyrophosphate release, Mg2+",
      "Distinguished the 3'→5' proofreading exonuclease from the 5'→3' nick-translation nuclease",
      "Named the small fragment and Klenow fragment with their activities and molecular weights",
      "Stated only DNA polymerase III is the in vivo replicase; DNA polymerase I removes primers and fills gaps"
    ]
  }
},

{
  id: "4-1-3-2",
  book: "cz",
  topicKey: "dna-replication",
  chapter: 4,
  section: "4.1.3",
  czTitle: "Struktura a biosyntéza DNA vysvětluje princip dědičnosti — 2) Helikasy, vazebné proteiny a DNA-ligasy",
  enTitle: "DNA structure and biosynthesis explain the principle of heredity — 2) Helicases, binding proteins and DNA ligases",
  cnTitle: "DNA的结构与生物合成阐释遗传原理——二、解旋酶、结合蛋白与DNA连接酶",
  pages: [80, 81, 82, 83, 84],
  coverage: "full",
  coverageNote: "All five pages read directly from the scans, with the Okazaki-fragment size figures (10³ residues on p.81; 1,000-2,000 nucleotides on p.83) zoomed and cross-checked for consistency. p.80 is shared with node 4-1-3-1 (see its coverage note) — only the material from the bold subheading '2) Helikasy, vazebné proteiny a DNA-ligasy' onward is used here.",
  cnNote: { topic: null, title: "DNA的复制 (笔记无编号，见 pp.211–212，属于27个主题之外的补充内容)", status: "mapped" },
  summary: {
    en: "Unwinding the double helix and joining the resulting fragments requires a further cast of proteins beyond the polymerases: HELICASES, single-strand BINDING PROTEINS, and DNA LIGASE. Their combined action, together with primase-made RNA primers, lets replication proceed as a SEMICONSERVATIVE, SEMIDISCONTINUOUS process at the REPLICATION FORK, with one new strand (LEADING) made continuously and the other (LAGGING) built from OKAZAKI FRAGMENTS.",
    cn: "解开双螺旋并把由此产生的片段连接起来，需要除聚合酶外的另一组蛋白质：解旋酶、单链结合蛋白，以及DNA连接酶。它们的协同作用，加上引发酶合成的RNA引物，使复制得以在复制叉处以半保留、半不连续的方式进行——一条新链（先导链）连续合成，另一条（滞后链）则由冈崎片段构成。"
  },
  points: [
    { cz: "helikasa (DnaB) a SSB", en: "Unwinding of the DNA double helix at the fork is achieved by the cooperative action of the enzyme HELICASE (the DnaB PROTEIN, Obr. 4.19), further unwinding proteins, and proteins that PREVENT THE SEPARATED STRANDS FROM RE-PAIRING (protein SSB). The ENERGY for unwinding comes from HYDROLYSIS OF ATP. Helicase moves along the LAGGING-strand template; a separate unwinding protein (Rep) moves along the leading-strand template. Behind the advancing helicase, SSB PROTEIN coats the separated single strands.", cn: "复制叉处双螺旋的解旋是通过解旋酶（DnaB蛋白，图4.19）、其他解旋蛋白以及防止已分离链重新配对的蛋白（SSB蛋白）的协同作用完成的。解旋所需的能量来自ATP的水解。解旋酶沿滞后链模板移动；另一种解旋蛋白（Rep）沿先导链模板移动。在前进的解旋酶后方，SSB蛋白覆盖已分离的单链。" },
    { cz: "DNA-ligasa — funkce", en: "DNA LIGASE catalyses formation of a PHOSPHODIESTER bond between the 3′-OH group of one DNA strand and the 5′-PHOSPHATE group of another. This is an ENDERGONIC reaction, powered by cleavage of EITHER ATP OR NAD⁺ (bacterial ligases characteristically use NAD⁺; eukaryotic ligases use ATP instead). Ligase is essential for THREE processes: joining the ~10³-nucleotide OKAZAKI FRAGMENTS during normal replication; REPAIRING gaps in damaged DNA; and 'SPLICING' DNA strands during eukaryotic genetic recombination. It CANNOT join two single-stranded molecules — at least PART of the DNA must already be double-helical.", cn: "DNA连接酶催化在一条DNA链的3′-OH基团与另一条链的5′-磷酸基团之间形成磷酸二酯键。这是一个吸能反应，由ATP或NAD⁺的裂解提供能量（细菌连接酶的特征是使用NAD⁺；真核连接酶则改用ATP）。连接酶对三个过程至关重要：在正常复制中连接约10³个核苷酸长的冈崎片段；修复受损DNA中的缺口；以及在真核生物遗传重组中「拼接」DNA链。它不能连接两条单链分子——DNA分子中至少要有一部分已经是双螺旋结构。" },
    { cz: "mechanismus ligasy (3 kroky, Obr. 4.20)", en: "The LIGASE MECHANISM runs in three steps (Obr. 4.20): (1) the enzyme reacts with ATP or NAD⁺, which serve as ADENYLYL-GROUP DONORS, forming a COVALENT ENZYME-AMP intermediate (E-AMP, bound through the ε-amino group of a LYSINE residue via a phosphoamide bond) and releasing pyrophosphate (or nicotinamide-ribose-phosphate, from NAD⁺); (2) the activated AMP is transferred from the lysyl residue to the 5′-phosphate of the DNA, forming a DNA-ADENYLATE complex; (3) the 3′-OH of the second DNA strand makes a NUCLEOPHILIC ATTACK on this activated 5′-phosphate, forming the new PHOSPHODIESTER BOND and releasing AMP.", cn: "连接酶的作用机制分三步进行（图4.20）：(1) 酶与ATP或NAD⁺反应，二者作为腺苷酰基供体，形成共价的酶-AMP中间体（E-AMP，通过磷酰胺键与一个赖氨酸残基的ε-氨基相连），同时释放焦磷酸（若底物为NAD⁺，则释放烟酰胺-核糖-磷酸）；(2) 活化的AMP从赖氨酰残基转移到DNA的5′-磷酸基团上，形成DNA-腺苷酸复合物；(3) 第二条DNA链的3′-OH对该活化的5′-磷酸发起亲核攻击，形成新的磷酸二酯键并释放AMP。" },
    { cz: "theta struktura (Obr. 4.21)", en: "Replicating DNA can be visualised AUTORADIOGRAPHICALLY (incorporating labelled ³H-thymidine) or by electron microscopy. Replicating E. coli DNA was found to form a CLOSED CIRCLE with an internal loop, the so-called THETA STRUCTURE (Obr. 4.21) — named for its resemblance to the Greek letter θ; the loop is the REPLICATION EYE.", cn: "正在复制的DNA可以通过放射自显影（掺入标记的³H-胸苷）或电子显微镜观察。研究发现，正在复制的大肠杆菌DNA形成一个带有内部环的闭合圆圈，即所谓的θ（theta）结构（图4.21）——因其形状类似希腊字母θ而得名；该环就是复制眼（replication eye）。" },
    { cz: "semikonservativní replikace, replikační vidlice", en: "DNA doubling proceeds SEMICONSERVATIVELY: part of the double helix is unwound, and replication proceeds only on this single-stranded stretch. The place where the helix unwinds and replication simultaneously occurs is the REPLICATION FORK. Because ALL known DNA polymerases extend chains ONLY 5′→3′, doubling of the two strands must proceed by different procedures on each side — so-called SEMIDISCONTINUOUS REPLICATION.", cn: "DNA的加倍以半保留方式进行：双螺旋的一部分被解开，复制只在这段单链区域上进行。双螺旋解开、复制同时发生的地方就是复制叉。由于所有已知的DNA聚合酶都只能沿5′→3′方向延伸链，两条链的加倍必须以不同的方式分别进行——即所谓的半不连续复制。" },
    { cz: "vedoucí (leading) a opožďující se (lagging) řetězec", en: "The newly made strand that grows 5′→3′ IN THE SAME DIRECTION as fork movement is the LEADING STRAND, synthesised practically CONTINUOUSLY. The other new strand must ALSO be made 5′→3′, but this is the OPPOSITE direction to fork movement, so it is made DISCONTINUOUSLY, as the LAGGING STRAND, built from OKAZAKI FRAGMENTS.", cn: "新合成的链中，沿5′→3′方向生长且方向与复制叉移动方向一致的一条是先导链（leading strand），几乎是连续合成的。另一条新链也必须沿5′→3′方向合成，但该方向与复制叉移动方向相反，因此只能不连续地合成，即滞后链（lagging strand），由冈崎片段构成。" },
    { cz: "RNA-primer a Okazakiho fragmenty", en: "Because DNA polymerases require a FREE 3′-OH group, an RNA segment of UP TO 60 NUCLEOTIDES is first synthesised at the unwound site to serve as PRIMER (Obr. 4.23) — made jointly, it is thought, by RNA polymerase and the much smaller PRIMASE. DNA polymerase III then extends this primer, forming a DNA segment of ABOUT 1,000–2,000 NUCLEOTIDES, the OKAZAKI FRAGMENT. The primer is then EXCISED and the gap FILLED by DNA polymerase I (Obr. 4.24), and DNA LIGASE seals the remaining nick.", cn: "由于DNA聚合酶需要游离的3′-OH基团，在解开的位点首先合成一段最长60个核苷酸的RNA，作为引物（图4.23）——据推测由RNA聚合酶与远小于它的引发酶（primase）共同合成。随后DNA聚合酶III在此引物基础上延伸，形成约1,000–2,000个核苷酸长的DNA片段，即冈崎片段。引物随后被切除，缺口由DNA聚合酶I填补（图4.24），DNA连接酶再封闭剩余的缺口。" },
    { cz: "replisom E. coli (Obr. 4.25)", en: "The E. coli chromosome replicates BIDIRECTIONALLY on the theta structure from a SINGLE ORIGIN. It is thought that synthesis of BOTH strands occurs on a single multiprotein complex, the REPLISOME, containing (probably) two DNA polymerase III HOLOENZYME complexes; the lagging-strand template must therefore LOOP AROUND the replisome so it can still be read 5′→3′ by the holoenzyme (Obr. 4.25). After each Okazaki fragment is finished, the holoenzyme relocates to a new primer made by the PRIMOSOME near the fork.", cn: "大肠杆菌染色体从单一起点出发，以θ结构双向复制。据推测两条链的合成都发生在一个多蛋白复合体上，即复制体（replisome），其中（可能）包含两个DNA聚合酶III全酶复合物；因此滞后链模板必须绕复制体「翻转」成环，才能让全酶仍以5′→3′方向读取它（图4.25）。每完成一个冈崎片段后，全酶就转移到复制叉附近、由引发体（primosome）新合成的引物处继续工作。" }
  ],
  terms: [
    { cz: "helikasa (DnaB protein)", en: "helicase (DnaB protein)", cn: "解旋酶（DnaB蛋白）", def_en: "Unwinds the DNA double helix at the replication fork, moving along the lagging-strand template using energy from ATP hydrolysis.", def_cn: "在复制叉处解开DNA双螺旋，沿滞后链模板移动，能量来自ATP水解。" },
    { cz: "SSB protein", en: "SSB (single-strand binding) protein", cn: "SSB（单链结合）蛋白", def_en: "Coats separated single DNA strands behind the advancing helicase, preventing them from re-pairing.", def_cn: "覆盖在前进的解旋酶后方已分离的DNA单链上，防止其重新配对。" },
    { cz: "DNA-ligasa", en: "DNA ligase", cn: "DNA连接酶", def_en: "Joins a 3'-OH end of one DNA strand to a 5'-phosphate end of another via a phosphodiester bond, using ATP or NAD+ as energy source; cannot join single-stranded molecules.", def_cn: "通过磷酸二酯键把一条DNA链的3′-OH末端与另一条链的5′-磷酸末端连接起来，以ATP或NAD+为能量来源；不能连接单链分子。" },
    { cz: "replikační vidlice (fork)", en: "replication fork", cn: "复制叉", def_en: "The point on the DNA molecule where the double helix is unwound and replication occurs simultaneously.", def_cn: "DNA分子上双螺旋被解开、复制同时发生的位点。" },
    { cz: "vedoucí řetězec (leading strand)", en: "leading strand", cn: "先导链", def_en: "The new strand synthesised continuously 5'→3' in the same direction as fork movement.", def_cn: "沿5′→3′方向连续合成、方向与复制叉移动方向一致的新链。" },
    { cz: "opožďující se řetězec (lagging strand)", en: "lagging strand", cn: "滞后链", def_en: "The new strand synthesised discontinuously, 5'→3' but opposite to fork movement, as a series of Okazaki fragments.", def_cn: "以不连续方式合成的新链，虽然仍沿5′→3′方向，但方向与复制叉移动方向相反，由一系列冈崎片段构成。" },
    { cz: "Okazakiho fragmenty", en: "Okazaki fragments", cn: "冈崎片段", def_en: "Short DNA segments (~1,000-2,000 nucleotides) that make up the discontinuously synthesised lagging strand, each begun from an RNA primer.", def_cn: "构成不连续合成的滞后链的短DNA片段（约1,000–2,000个核苷酸），每个片段都从一段RNA引物开始合成。" },
    { cz: "primasa", en: "primase", cn: "引发酶（引物酶）", def_en: "The small enzyme that, together with RNA polymerase, is thought to synthesise the RNA primers needed to start each new DNA segment.", def_cn: "一种小分子酶，据推测与RNA聚合酶共同合成每个新DNA片段起始所需的RNA引物。" },
    { cz: "theta struktura", en: "theta structure", cn: "θ结构", def_en: "The closed-circle-with-internal-loop shape of replicating E. coli DNA seen by autoradiography/EM, named for its resemblance to the Greek letter θ; the loop is the replication eye.", def_cn: "通过放射自显影/电子显微镜观察到的正在复制的大肠杆菌DNA所呈现的带内环闭合圆圈形状，因形似希腊字母θ而得名；该环即复制眼。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What energy source does DNA ligase use, and how does this differ between bacteria and eukaryotes?",
      q_cn: "DNA连接酶使用什么能量来源？细菌与真核生物之间有何不同？",
      options: [
        "Both use ATP exclusively",
        "Bacterial ligases characteristically use NAD⁺; eukaryotic ligases use ATP instead",
        "Both use GTP exclusively",
        "Bacterial ligases use pyrophosphate directly, with no nucleotide cofactor"
      ],
      answer: 1,
      why_en: "The reaction is endergonic, and the book gives NAD⁺ as the bacterial cofactor, with ATP used 'instead' in eukaryotic DNA ligases (per the Obr. 4.20 legend) — a detail worth memorising since many English textbooks present ATP as the universal ligase cofactor.",
      why_cn: "该反应是吸能反应，教材指出细菌中使用的辅助因子是NAD⁺（图4.20图注指出真核DNA连接酶则「改用」ATP）——这一细节值得记住，因为许多英文教材把ATP当作通用的连接酶辅因子来讲。"
    },
    {
      type: "mcq",
      q_en: "Why must the lagging strand be synthesised as discontinuous Okazaki fragments rather than continuously like the leading strand?",
      q_cn: "为什么滞后链必须以不连续的冈崎片段方式合成，而不能像先导链那样连续合成？",
      options: [
        "Because DNA polymerase III cannot bind the lagging-strand template continuously",
        "Because all known DNA polymerases extend chains only 5′→3′, and this direction runs opposite to the movement of the replication fork on the lagging-strand template",
        "Because the lagging-strand template is chemically different from the leading-strand template",
        "Because Okazaki fragments are an artefact of the extraction method, not a biological reality"
      ],
      answer: 1,
      why_en: "All known DNA polymerases can only extend 5′→3′. On the leading-strand template that direction happens to match the direction the fork is moving, so synthesis is continuous. On the lagging-strand template, 5′→3′ synthesis runs AWAY from the fork, so the strand must be built backward in short, repeatedly re-primed pieces — the Okazaki fragments — as semidiscontinuous replication.",
      why_cn: "所有已知的DNA聚合酶都只能沿5′→3′方向延伸。在先导链模板上，这个方向恰好与复制叉移动的方向一致，因此合成是连续的。而在滞后链模板上，5′→3′方向的合成是「背离」复制叉的，因此该链只能以短片段、反复重新引发的方式反向构建——即冈崎片段——这就是半不连续复制。"
    },
    {
      type: "short",
      q_en: "Outline the three-step mechanism of DNA ligase.",
      q_cn: "概述DNA连接酶作用机制的三个步骤。",
      accept: ["AMP", "adenylyl", "lysine", "phosphoamide", "nucleophilic", "phosphodiester", "腺苷酰", "赖氨酸", "磷酸二酯", "亲核"],
      answer_en: "(1) The enzyme reacts with ATP or NAD+, which donate an adenylyl group, forming a covalent E-AMP intermediate bound through a lysine residue's ε-amino group, and releasing pyrophosphate or nicotinamide-ribose-phosphate. (2) The activated AMP is transferred from the lysyl residue to the 5'-phosphate of the DNA, forming a DNA-adenylate complex. (3) The 3'-OH of the second DNA strand attacks this activated 5'-phosphate nucleophilically, forming the new phosphodiester bond and releasing AMP.",
      answer_cn: "(1) 酶与ATP或NAD+反应，二者提供腺苷酰基，形成通过赖氨酸残基ε-氨基结合的共价E-AMP中间体，同时释放焦磷酸或烟酰胺-核糖-磷酸。(2) 活化的AMP从赖氨酰残基转移到DNA的5′-磷酸上，形成DNA-腺苷酸复合物。(3) 第二条DNA链的3′-OH对该活化的5′-磷酸发起亲核攻击，形成新的磷酸二酯键并释放AMP。"
    },
    {
      type: "mcq",
      q_en: "What does the 'theta structure' seen by autoradiography and electron microscopy of replicating E. coli DNA demonstrate?",
      q_cn: "通过放射自显影和电子显微镜观察到的正在复制的大肠杆菌DNA「θ结构」说明了什么？",
      options: [
        "That E. coli DNA is linear and replicates from both ends inward",
        "That the circular E. coli chromosome replicates with an internal replication loop (eye), visible as a shape resembling the Greek letter θ",
        "That E. coli DNA exists only as Okazaki fragments with no continuous strand",
        "That replication in E. coli requires no origin and can start anywhere"
      ],
      answer: 1,
      why_en: "The theta structure is a closed circle (the E. coli chromosome) with an internal loop — the replication eye — created by the two replication forks moving apart from a single origin; its resemblance to θ gives it its name.",
      why_cn: "θ结构是一个闭合圆圈（大肠杆菌染色体），带有一个内部环——即复制眼——由两个复制叉从单一起点向外移动而形成；因其形似希腊字母θ而得名。"
    }
  ],
  oral: {
    q_en: "Describe how the replication fork is unwound and how the leading and lagging strands are synthesised and joined together.",
    q_cn: "描述复制叉是如何解旋的，以及先导链和滞后链是如何被合成并连接在一起的。",
    model_en: "Unwinding the double helix at the growing fork is the job of the enzyme helicase, the DnaB protein, which moves along the lagging-strand template hydrolysing ATP for energy, assisted by a further unwinding protein that travels along the leading strand and by SSB protein, which coats the separated single strands behind the helicase and stops them re-pairing. Once strands are separated and copied, DNA ligase stitches the pieces together, catalysing an endergonic reaction between a three-prime hydroxyl on one strand and a five-prime phosphate on another, powered by cleavage of ATP or, characteristically in bacteria, NAD-plus; mechanistically the enzyme first reacts with that cofactor to form a covalent enzyme-AMP intermediate through a lysine residue, then transfers the activated AMP onto the DNA's five-prime phosphate to form a DNA-adenylate, and finally lets the neighbouring three-prime hydroxyl attack that activated phosphate to seal the new phosphodiester bond and release AMP; the enzyme cannot join two single strands, so at least part of the substrate must already be double-helical. Autoradiography and electron microscopy of replicating E. coli DNA reveal a closed circle with an internal loop, the theta structure, reflecting the fact that doubling of the double helix is semiconservative and proceeds only at the replication fork, the point where unwinding and synthesis happen together. Because every known DNA polymerase can only extend a chain five-prime to three-prime, the two template strands cannot be copied by the same simple procedure: the leading strand grows continuously in the same direction as the fork moves, while the lagging strand, growing in the opposite direction to the fork, must be built discontinuously as a series of Okazaki fragments, each begun from a short RNA primer up to sixty nucleotides long made jointly by RNA polymerase and the smaller enzyme primase, extended by DNA polymerase three into a segment of about one to two thousand nucleotides, and finally stitched into the growing strand once DNA polymerase one has excised the primer and filled the gap and ligase has sealed the remaining nick. In E. coli this whole apparatus is thought to work as a single multiprotein replisome, built around two copies of the DNA polymerase three holoenzyme, with the lagging-strand template looped back around the complex so that both strands can be synthesised together as the fork advances bidirectionally from a single origin on the theta structure.",
    checklist: [
      "Described helicase (DnaB) and SSB unwinding the fork, powered by ATP",
      "Gave DNA ligase's reaction and named ATP/NAD+ as alternative energy sources",
      "Outlined the 3-step ligase mechanism (E-AMP, DNA-adenylate, phosphodiester bond)",
      "Explained the theta structure as evidence of circular, semiconservative replication",
      "Defined the replication fork and explained why leading vs lagging strands are made differently",
      "Described RNA primer synthesis (primase + RNA polymerase) and Okazaki fragment formation/size",
      "Mentioned the replisome and the lagging-strand template looping around it"
    ]
  }
},

{
  id: "4-1-4-1",
  book: "cz",
  topicKey: "transcription",
  chapter: 4,
  section: "4.1.4",
  czTitle: "DNA je přepisována do RNA — druhy a vlastnosti RNA",
  enTitle: "DNA is transcribed into RNA — types and properties of RNA",
  cnTitle: "DNA被转录为RNA——RNA的种类与性质",
  pages: [85, 86, 87],
  coverage: "full",
  coverageNote: "All three pages read directly from the scans; the rRNA sizes in Tab. 4.2 on p.86 were zoomed in and re-read to confirm the exponents (×10³ kDa for 23S/16S, ×10¹ kDa for 5S/tRNA — easy to misread at normal resolution). p.85 opens with the tail of node 4-1-3-2 (E. coli replisome recap) before the 4.1.4 heading; only the 4.1.4 material (central dogma onward) is used here. p.87 is shared with node 4-1-4-2 — the RNA-types catalogue (tRNA, nRNA/snRNA/cRNA, viral RNA) is used here, the 'Syntéza RNA' paragraph onward is used there.",
  cnNote: { topic: null, title: "核酸的结构／理化性质？（RNA种类，笔记 pp.87–90 或 pp.91–94，仅凭标题推测，未直接核对）", status: "partial" },
  summary: {
    en: "DNA is not itself the direct template for protein synthesis — RNA is. The flow DNA → RNA → protein (TRANSCRIPTION then TRANSLATION) was extended by Crick (1953) into the CENTRAL DOGMA of molecular biology: DNA directs its own replication and its transcription into RNA, which in turn directs its own translation into protein. Cells contain several distinct kinds of RNA, differing in biological function, structure and molecular weight.",
    cn: "DNA本身并不是蛋白质合成的直接模板——RNA才是。DNA→RNA→蛋白质（先转录后翻译）这一途径被Crick（1953年）扩展为分子生物学的中心法则：DNA指导自身的复制及其向RNA的转录，RNA进而指导自身向蛋白质的翻译。细胞内含有若干种不同的RNA，它们在生物学功能、结构和分子量上各不相同。"
  },
  points: [
    { cz: "DNA není templát pro protein", en: "DNA is NOT a direct template for protein synthesis — RNA IS. The pathway in normal cells is TRANSCRIPTION (DNA → RNA) followed by TRANSLATION (RNA → protein).", cn: "DNA本身并不是蛋白质合成的直接模板——RNA才是。正常细胞中的途径是转录（DNA→RNA），随后是翻译（RNA→蛋白质）。" },
    { cz: "centrální dogma (Crick, 1953)", en: "F. CRICK (1953) extended this into a CYCLIC scheme, the CENTRAL DOGMA OF MOLECULAR BIOLOGY: 'DNA directs its own REPLICATION and its TRANSCRIPTION into RNA, which further directs its TRANSLATION into proteins' (Obr. 4.26). SPECIAL, exceptional transfers also exist: RNA-directed RNA polymerase occurs in some viruses and plants, and RNA-directed DNA polymerase (REVERSE TRANSCRIPTASE) occurs in some RNA viruses. A DNA directly specifying protein has never been demonstrated, though the book notes its existence 'need not be entirely unreal.'", cn: "F. Crick（1953年）将其扩展为一个循环图式，即分子生物学的中心法则：「DNA指导自身的复制及其向RNA的转录，RNA进而指导自身向蛋白质的翻译」（图4.26）。此外还存在特殊的、例外的传递方式：某些病毒和植物中存在RNA指导的RNA聚合酶；某些RNA病毒中存在RNA指导的DNA聚合酶（逆转录酶）。DNA直接指定蛋白质的情形从未被证实，但教材指出其存在「未必完全不现实」。" },
    { cz: "mRNA (iRNA)", en: "mRNA (also iRNA, messenger/mediator/informational RNA) MEDIATES THE TRANSFER of genetic information from DNA to protein. Its size is directly related to the size and number of the peptide chains it encodes; besides the CODING segment (the transcript of the structural gene) it also carries a REGULATORY segment. It makes up only about 5% of E. coli's RNA and is HETEROGENEOUS in size (Tab. 4.2).", cn: "mRNA（又称iRNA，信使/媒介/信息RNA）负责把遗传信息从DNA传递到蛋白质。其分子大小与它所编码的肽链的大小和数目直接相关；除编码区段（结构基因的转录本）外，它还携带调控区段。在大肠杆菌中mRNA仅占RNA总量的约5%，且大小具有异质性（表4.2）。" },
    { cz: "hnRNA, exony, introny", en: "In EUKARYOTES the first transcript of DNA is HETEROGENEOUS NUCLEAR RNA (hnRNA), substantially LONGER than the transcript of the structural gene alone. It contains both CODING segments (EXONS) and NON-CODING segments (INTRONS); ribonuclease enzymes process it into functional, single-stranded mRNA.", cn: "在真核生物中，DNA的第一个转录产物是核内不均一RNA（hnRNA），其长度大大超过结构基因本身的转录本。它既含有编码区段（外显子），也含有非编码区段（内含子）；核糖核酸酶类的酶会将其加工为具有功能的单链mRNA。" },
    { cz: "rRNA — 3 (prokaryota) / 4 typy (eukaryota); Tab. 4.2", en: "rRNA is the STRUCTURAL COMPONENT of ribosomes, making up about 80% of E. coli's RNA. PROKARYOTES have THREE sizes of rRNA, named by SEDIMENTATION COEFFICIENT: 23S (≈1.2×10³ kDa, ≈3700 nucleotides), 16S (≈0.5×10³ kDa, ≈1700 nt) and 5S (≈3.6×10¹ kDa, ≈120 nt) — Tab. 4.2, re-read directly from the scan to confirm the exponents. EUKARYOTES have FOUR: 5S, 5.8S, 18S and 28S. rRNA is also made as a longer PRECURSOR that is processed; it is single-stranded overall, but parts pair up into double-helical stems while other parts form unpaired loops that break the regularity of the helix (Obr. 4.27a,b).", cn: "rRNA是核糖体的结构组分，约占大肠杆菌RNA总量的80%。原核生物有三种大小的rRNA，以其沉降系数命名：23S（约1.2×10³ kDa，约3700个核苷酸）、16S（约0.5×10³ kDa，约1700个核苷酸）和5S（约3.6×10¹ kDa，约120个核苷酸）——表4.2，直接从扫描图重新核对以确认指数。真核生物则有四种：5S、5.8S、18S和28S。rRNA同样以较长的前体形式合成后再加工；它整体上是单链的，但部分区域配对形成双螺旋茎，另一些区域则形成不配对的环，破坏了螺旋的规律性（图4.27a,b）。" },
    { cz: "tRNA — jetelový list", en: "tRNA is the SMALLEST RNA (4S) and CARRIES ACTIVATED AMINO ACIDS from the cytoplasm to the site of protein synthesis on the ribosome; being small, it is readily water-soluble. There are AT LEAST AS MANY tRNAs as amino acids (each tRNA carries only ONE amino acid). All tRNAs share the SAME 3′-terminal sequence, …pCpCpA, the AMINO-ACID ACCEPTOR site. The molecule folds into the CLOVERLEAF shape (Obr. 4.28a): three constant loops (arms) plus one smaller, VARIABLE loop; the ANTICODON LOOP carries the anticodon TRIPLET that pairs with the corresponding codon on mRNA.", cn: "tRNA是最小的RNA（4S），负责把活化的氨基酸从细胞质运送到核糖体上的蛋白质合成部位；由于分子小，它易溶于水。细胞中tRNA的种类数至少与氨基酸种类数相当（每种tRNA只转运一种氨基酸）。所有tRNA的3′端序列都相同，为…pCpCpA，这是氨基酸的受体位点。tRNA分子折叠成三叶草形（图4.28a）：三个恒定的环（臂）加一个较小的可变环；反密码子环携带与mRNA上相应密码子配对的反密码子三联体。" },
    { cz: "snRNA, cRNA, virová RNA", en: "Besides the precursor RNAs, the group of NUCLEAR RNAs (nRNA) also includes SMALL NUCLEAR RNA (snRNA), which forms complexes with proteins, also binds DNA, and participates in RNA splicing — NOTE: the book's own wording here literally says snRNA excises 'exons' (vyštěpování EXONŮ), not introns; that is almost certainly a misprint, since splicing by definition removes introns and retains exons, and the book itself uses snRNA/spliceosome correctly for INTRON removal elsewhere (section 4.2.4) — but the exact word printed on this page is 'exonů'. And CHROMOSOMAL RNA (cRNA), found in chromatin bound to non-histone proteins, acting as an ACTIVATOR OR REPRESSOR of genes. VIRAL RNA can play the role of EITHER DNA OR mRNA in viruses.", cn: "除各类前体RNA外，核RNA（nRNA）这一类还包括小核RNA（snRNA），它与蛋白质形成复合物，也能与DNA结合，并参与RNA的剪接——注：教材原文这里字面写的是snRNA剪除「外显子」（vyštěpování exonů），而非内含子；这几乎可以肯定是印刷错误，因为剪接本身的定义就是去除内含子、保留外显子，教材自己在别处（4.2.4节）描述snRNA/剪接体时用的也是「去除内含子」——但这一页印出来的原文确实是「exonů」。以及染色体RNA（cRNA），存在于染色质中，与非组蛋白结合，起基因激活因子或阻遏因子的作用。病毒RNA在病毒中既可扮演DNA的角色，也可扮演mRNA的角色。" }
  ],
  terms: [
    { cz: "transkripce", en: "transcription", cn: "转录", def_en: "Synthesis of RNA using one DNA strand as template; the first step of the pathway from DNA to protein.", def_cn: "以DNA的一条链为模板合成RNA；是从DNA到蛋白质这一途径的第一步。" },
    { cz: "centrální dogma", en: "central dogma (of molecular biology)", cn: "中心法则", def_en: "Crick's 1953 scheme: DNA directs its own replication and its transcription into RNA, which directs its own translation into protein.", def_cn: "Crick于1953年提出的图式：DNA指导自身复制及向RNA的转录，RNA进而指导自身向蛋白质的翻译。" },
    { cz: "mRNA (iRNA)", en: "messenger RNA (mRNA)", cn: "信使RNA（mRNA）", def_en: "Mediates transfer of genetic information from DNA to protein; carries coding and regulatory segments; only ~5% of E. coli RNA, heterogeneous in size.", def_cn: "负责把遗传信息从DNA传递到蛋白质；携带编码区段和调控区段；仅占大肠杆菌RNA总量约5%，大小具有异质性。" },
    { cz: "hnRNA", en: "heterogeneous nuclear RNA (hnRNA)", cn: "核内不均一RNA（hnRNA）", def_en: "The first, longer eukaryotic transcript of a structural gene, containing both exons and introns before processing into mRNA.", def_cn: "真核生物结构基因的第一个、较长的转录产物，加工为mRNA之前同时含有外显子和内含子。" },
    { cz: "exon / intron", en: "exon / intron", cn: "外显子／内含子", def_en: "Exons are the coding segments retained in mature mRNA; introns are non-coding segments removed during processing of hnRNA.", def_cn: "外显子是保留在成熟mRNA中的编码区段；内含子是在hnRNA加工过程中被去除的非编码区段。" },
    { cz: "rRNA (23S/16S/5S)", en: "ribosomal RNA (rRNA)", cn: "核糖体RNA（rRNA）", def_en: "Structural component of ribosomes, ~80% of E. coli RNA; 3 species in prokaryotes (23S, 16S, 5S) by sedimentation coefficient, 4 in eukaryotes.", def_cn: "核糖体的结构组分，约占大肠杆菌RNA总量的80%；原核生物按沉降系数分3种（23S、16S、5S），真核生物有4种。" },
    { cz: "tRNA — jetelový list", en: "transfer RNA (tRNA) — cloverleaf structure", cn: "转运RNA（tRNA）——三叶草结构", def_en: "The smallest RNA (4S); carries one specific activated amino acid to the ribosome; folds into a cloverleaf of 3 constant arms + 1 variable arm, with a universal …pCpCpA 3'-end and an anticodon loop.", def_cn: "最小的RNA（4S）；把一种特定的活化氨基酸运送到核糖体；折叠成三叶草形，由3个恒定臂加1个可变臂组成，3′端序列统一为…pCpCpA，并含有反密码子环。" },
    { cz: "snRNA", en: "small nuclear RNA (snRNA)", cn: "小核RNA（snRNA）", def_en: "Complexes with proteins and DNA; participates in RNA splicing (this page's own wording literally says 'excising exons', almost certainly a book misprint for introns).", def_cn: "与蛋白质及DNA形成复合物；参与RNA的剪接（本页原文字面写的是「剪除外显子」，几乎可以肯定是印刷错误，应为内含子）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the central dogma as extended by Crick, what do the DASHED arrows in Obr. 4.26 represent?",
      q_cn: "在Crick扩展的中心法则中，图4.26中的虚线箭头代表什么？",
      options: [
        "Errors in transcription that are normally corrected",
        "Special, non-universal transfers: RNA-directed RNA polymerase (some viruses/plants) and RNA-directed DNA polymerase = reverse transcriptase (some RNA viruses)",
        "The degradation pathways of RNA and DNA",
        "The universal, general pathway found in all cells"
      ],
      answer: 1,
      why_en: "Solid arrows mark the GENERAL transfers (replication, transcription, translation). Dashed arrows mark SPECIAL transfers found only in particular organisms: RNA-directed RNA polymerase in some viruses and plants, and RNA-directed DNA polymerase, i.e. reverse transcriptase, in some RNA viruses. A DNA directly specifying protein has never been demonstrated.",
      why_cn: "实线箭头标示的是通用传递途径（复制、转录、翻译）。虚线箭头标示的是仅见于特定生物的特殊传递：某些病毒和植物中的RNA指导RNA聚合酶，以及某些RNA病毒中的RNA指导DNA聚合酶，即逆转录酶。DNA直接指定蛋白质的情形从未被证实。"
    },
    {
      type: "mcq",
      q_en: "According to Tab. 4.2, which rRNA species is the LARGEST in E. coli, and roughly how many nucleotides does it contain?",
      q_cn: "根据表4.2，大肠杆菌中哪一种rRNA最大？它大约含有多少个核苷酸？",
      options: [
        "5S rRNA, about 120 nucleotides",
        "16S rRNA, about 1700 nucleotides",
        "23S rRNA, about 3700 nucleotides",
        "tRNA, about 75 nucleotides"
      ],
      answer: 2,
      why_en: "23S rRNA is the largest of the three prokaryotic rRNAs, at about 1.2×10³ kDa and roughly 3700 nucleotides — do not misread the exponent as 10⁶ or 10⁹; the table gives mass in kDa, not Da. 16S is intermediate (~1700 nt) and 5S is the smallest rRNA (~120 nt); tRNA, at 4S, is smaller still (~75 nt).",
      why_cn: "23S rRNA是原核生物三种rRNA中最大的一种，约1.2×10³ kDa，约3700个核苷酸——注意不要把指数误读成10⁶或10⁹；表中质量单位是kDa，不是Da。16S居中（约1700个核苷酸），5S是rRNA中最小的（约120个核苷酸）；tRNA为4S，比5S还要小（约75个核苷酸）。"
    },
    {
      type: "short",
      q_en: "What are the two structurally and functionally distinct segments carried by hnRNA, and what happens to them during processing into mature mRNA?",
      q_cn: "hnRNA携带哪两种结构和功能上不同的区段？它们在加工为成熟mRNA的过程中会发生什么？",
      accept: ["exon", "intron", "splic", "外显子", "内含子", "剪接"],
      answer_en: "hnRNA contains coding segments (exons) and non-coding segments (introns). Ribonuclease enzymes process the hnRNA, removing the introns, to yield the shorter, functional, single-stranded mRNA.",
      answer_cn: "hnRNA既含有编码区段（外显子），也含有非编码区段（内含子）。核糖核酸酶类的酶对hnRNA进行加工，去除内含子，从而生成更短、具有功能的单链mRNA。"
    },
    {
      type: "mcq",
      q_en: "What feature is shared by ALL tRNA molecules regardless of which amino acid they carry?",
      q_cn: "无论携带哪种氨基酸，所有tRNA分子都具有的共同特征是什么？",
      options: [
        "An identical anticodon triplet",
        "The same 3'-terminal sequence …pCpCpA, the amino-acid acceptor site",
        "An identical molecular weight",
        "The same variable-arm length"
      ],
      answer: 1,
      why_en: "Every tRNA ends in the same 3'-terminal sequence, …pCpCpA — this is the acceptor stem where the amino acid is attached. The anticodon triplet, by contrast, is exactly what makes different tRNAs different, since it must pair with the codon for that tRNA's specific amino acid.",
      why_cn: "每一种tRNA的3′端序列都相同，为…pCpCpA——这是氨基酸附着的受体茎。相反，反密码子三联体正是不同tRNA彼此区别的关键，因为它必须与该tRNA特定氨基酸所对应的密码子配对。"
    }
  ],
  oral: {
    q_en: "What types of RNA exist in the cell, and how do their structure and function differ?",
    q_cn: "细胞内存在哪些类型的RNA？它们的结构和功能有何不同？",
    model_en: "DNA is not itself the template used for protein synthesis; RNA is, and genetic information flows from DNA to RNA by transcription and from RNA to protein by translation, a pathway Francis Crick extended in nineteen fifty-three into the central dogma of molecular biology: DNA directs its own replication and its transcription into RNA, and RNA in turn directs its own translation into protein, with special, exceptional transfers existing in some organisms, such as RNA-directed RNA polymerase in certain viruses and plants, and reverse transcriptase, an RNA-directed DNA polymerase, in certain RNA viruses. Several distinct RNAs carry out this flow. Messenger RNA, or mRNA, mediates the actual transfer of information from DNA to protein, its size tied directly to the peptide chain it encodes, and carrying a regulatory segment alongside the coding one; in eukaryotes its precursor is heterogeneous nuclear RNA, considerably longer than the structural gene's transcript because it still contains non-coding introns alongside the coding exons, which ribonucleases excise during processing into mature mRNA. Ribosomal RNA, rRNA, is the structural component of the ribosome and the most abundant RNA in the cell, existing in prokaryotes as three species named by sedimentation coefficient, twenty-three S, sixteen S and five S, of respectively about three thousand seven hundred, seventeen hundred and one hundred twenty nucleotides, and in eukaryotes as four species; despite being single-stranded overall, parts of the rRNA chain pair up into double-helical stems while other parts form unpaired loops. Transfer RNA, tRNA, is the smallest of all at four S, and carries activated amino acids from the cytoplasm to the ribosome, with at least as many distinct tRNAs as there are amino acids, since each carries only one; every tRNA shares the same three-prime terminal sequence, pC-p-C-p-A, its amino-acid acceptor site, and folds into the characteristic cloverleaf shape of three constant arms and one variable arm, with the anticodon loop carrying the triplet that pairs with the corresponding codon on the messenger RNA. Finally, the nuclear RNAs include small nuclear RNA, which complexes with protein, binds DNA, and helps excise introns, and chromosomal RNA, bound to non-histone proteins in chromatin where it acts as a gene activator or repressor, while viral RNA can serve a virus in the role of either DNA or messenger RNA.",
    checklist: [
      "Stated RNA, not DNA, is the direct template for protein synthesis",
      "Gave the central dogma (Crick 1953) including the special dashed-arrow transfers",
      "Described mRNA's role and hnRNA's exons/introns and processing",
      "Gave the three prokaryotic rRNA species by sedimentation coefficient with approximate sizes",
      "Described tRNA: smallest RNA, universal …pCpCpA end, cloverleaf shape, anticodon loop",
      "Mentioned snRNA, cRNA and viral RNA and their distinct roles"
    ]
  }
},

{
  id: "4-1-4-2",
  book: "cz",
  topicKey: "transcription",
  chapter: 4,
  section: "4.1.4",
  czTitle: "DNA je přepisována do RNA — syntéza RNA (RNA-polymerasa, promotory, terminace)",
  enTitle: "DNA is transcribed into RNA — RNA synthesis (RNA polymerase, promoters, termination)",
  cnTitle: "DNA被转录为RNA——RNA合成（RNA聚合酶、启动子、终止）",
  pages: [87, 88, 89, 90, 91],
  coverage: "partial",
  coverageNote: "pp. 87-90 fully verified against the scans. p.91 verified only up to the point where the 4.1.5 heading begins — the tail of the Obr. 4.32 terminator legend, the rRNA-processing paragraph and Obr. 4.33 (which precede the 4.1.5 heading on that page) are included here; the nuclease material after the heading belongs to node 4-1-5, not to this one.",
  cnNote: { topic: null, title: "DNA转录产生mRNA (笔记无编号，见 pp.212–217)", status: "mapped" },
  summary: {
    en: "RNA synthesis (transcription) uses the SAME base-complementarity principle as DNA replication, but copies only ONE DNA strand (the CODING/TEMPLATE strand) and needs NO PRIMER. The enzyme is DNA-DEPENDENT RNA POLYMERASE, which in bacteria binds specific PROMOTER sequences via its σ subunit, then carries out INITIATION, ELONGATION and TERMINATION of the RNA chain — the last either spontaneously, at hairpin/oligo(U) terminators, or with the help of protein ρ (rho).",
    cn: "RNA的合成（转录）遵循与DNA复制相同的碱基互补原理，但只复制DNA的一条链（编码链/模板链），且不需要引物。催化该过程的酶是DNA依赖型RNA聚合酶，在细菌中通过其σ亚基结合特定的启动子序列，随后完成RNA链的起始、延伸和终止——终止或是在发夹/寡聚(U)终止子处自发发生，或是需要ρ蛋白的帮助。"
  },
  points: [
    { cz: "templát = kodogenní vlákno, žádný primer", en: "RNA synthesis proceeds on ONLY ONE DNA strand, called the CODING (KODOGENNÍ) strand, which serves as template. Unlike DNA replication, transcription needs NO PRIMER — RNA polymerase can start a chain de novo.", cn: "RNA的合成只在DNA的一条链上进行，该链称为编码链（kodogenní vlákno），作为模板。与DNA复制不同，转录不需要引物——RNA聚合酶可以从头启动一条新链。" },
    { cz: "substráty — 4 ribonukleotid-trifosfáty", en: "The substrates for RNA synthesis are the FOUR RIBONUCLEOSIDE TRIPHOSPHATES (ATP, GTP, CTP, UTP) plus the DNA template. RNA polymerase joins them on the single-stranded DNA template, releasing PYROPHOSPHATE, and synthesises RNA 5′→3′ (Obr. 4.31) — a reaction directly analogous to the DNA polymerase reaction.", cn: "RNA合成所需的底物是四种核糖核苷三磷酸（ATP、GTP、CTP、UTP）以及DNA模板。RNA聚合酶在单链DNA模板上把它们连接起来，释放焦磷酸，并沿5′→3′方向合成RNA（图4.31）——这一反应与DNA聚合酶所催化的反应直接类似。" },
    { cz: "RNA-polymerasa — holoenzym", en: "The enzyme is (DNA-dependent) RNA POLYMERASE. The E. coli HOLOENZYME has subunit composition α₂ββ′σ. Once RNA synthesis has STARTED, the σ SUBUNIT (σ FACTOR) DISSOCIATES from the 'core' enzyme (α₂ββ′), which alone catalyses the actual polymerisation; free σ can then bind another core enzyme to form a new initiation complex. The holoenzyme is responsible for FOUR functions: TEMPLATE BINDING, chain INITIATION, chain ELONGATION and chain TERMINATION.", cn: "该酶是（DNA依赖型）RNA聚合酶。大肠杆菌全酶的亚基组成为α₂ββ′σ。一旦RNA合成启动，σ亚基（σ因子）便从「核心」酶（α₂ββ′）上解离，核心酶单独催化实际的聚合反应；游离的σ随后可结合另一个核心酶，形成新的起始复合物。全酶负责四项功能：结合模板、链的起始、链的延伸和链的终止。" },
    { cz: "3 eukaryotní RNA-polymerasy", en: "The EUKARYOTIC nucleus contains THREE types of this enzyme (I, II, III, also called A, B, C). RNA POLYMERASE I, in the NUCLEOLUS, synthesises rRNA PRECURSORS; RNA POLYMERASE II, in the nucleoplasm, synthesises mRNA PRECURSORS; RNA POLYMERASE III, also in the nucleoplasm, synthesises mostly tRNA and 5S rRNA PRECURSORS. Synthesis of ALL nucleic acids takes place in the NUCLEUS.", cn: "真核细胞核内含有三种此类酶（I、II、III，又称A、B、C）。RNA聚合酶I位于核仁，合成rRNA前体；RNA聚合酶II位于核质，合成mRNA前体；RNA聚合酶III同样位于核质，主要合成tRNA和5S rRNA前体。所有核酸的合成都发生在细胞核内。" },
    { cz: "promotor a faktor σ", en: "RNA synthesis is INITIATED at specific sites on the DNA template. RNA polymerase binds its initiation sites through base sequences called PROMOTERS, recognised by the CORRESPONDING σ FACTOR. The promoter sits near the START nucleotide, and sequence studies show the promoter OVERLAPS the lac OPERATOR (Obr. 4.29). The bound holoenzyme forms a TIGHT complex with the promoter, PROTECTING the bound DNA from cleavage by DNase I.", cn: "RNA合成在模板DNA的特定位点被启动。RNA聚合酶通过被称为启动子（promoter）的碱基序列结合到其起始位点，启动子由相应的σ因子识别。启动子位于起始核苷酸附近，序列研究表明启动子与lac操纵基因（operator）相互重叠（图4.29）。结合后的全酶与启动子形成牢固的复合物，从而保护所结合的DNA不被DNase I切割。" },
    { cz: "elongace — transkripční bublina", en: "During ELONGATION (Obr. 4.30), the double helix is unwound over a stretch of about ONE TURN so the template strand can form a short hybrid DNA-RNA double helix with the RNA's 3′-end; RNA polymerase moves along the template and the DNA REWINDS again behind it. The MORE LIKELY model is that RNA moves in a straight line while the DNA ROTATES beneath it — the DNA double helix unwinds ahead of the advancing TRANSCRIPTION BUBBLE and recloses behind it, implying the ends of the DNA and of RNA polymerase are prevented from free rotation by bonds within the cell.", cn: "在延伸阶段（图4.30），双螺旋在约一圈的范围内被解开，使模板链能与RNA的3′端形成一小段DNA-RNA杂交双螺旋；RNA聚合酶沿模板移动，其后方的DNA重新盘绕。更可能的模型是：RNA沿直线移动，而DNA在其下方转动——DNA双螺旋在前进的转录泡（transcription bubble）前方解开，并在其后方重新闭合，这意味着DNA和RNA聚合酶的末端在细胞内被某些键固定，无法自由转动。" },
    { cz: "terminace — vlásenka + oligo(U)", en: "Termination occurs at specific DNA sequences with TWO common features (Obr. 4.32): (i) a series of 4-10 A-T PAIRS, with A residues on the template strand — the transcribed RNA ends at or just after this point; (ii) a G+C-RICH, PALINDROMIC region adjacent to that A-T series, whose RNA transcript folds into a self-complementary HAIRPIN ending in several U residues. The STABILITY of this hairpin and the WEAK pairing of its oligo(U) tail with the DNA template are the likely deciding factors for correct, SPONTANEOUS termination.", cn: "转录终止发生在具有两个共同特征的特定DNA序列处（图4.32）：(i) 一串4–10个A-T碱基对，其A残基位于模板链上——被转录的RNA在此处或紧随其后终止；(ii) 与该A-T序列相邻、富含G+C的回文区域，其RNA转录本折叠成以若干U残基收尾的自身互补发夹结构。该发夹结构的稳定性以及其寡聚(U)尾部与DNA模板之间较弱的配对，很可能是决定正确、自发终止的关键因素。" },
    { cz: "faktor ρ (rho)", en: "OTHER termination sites LACK these hairpin/oligo(U) sequences and instead require protein ρ (RHO FACTOR) — an enzyme that catalyses unwinding of the RNA-DNA and RNA-RNA double helix at the cost of NTPs. ρ-DEPENDENT termination also requires special recognition sequences located UPSTREAM of the termination site, apparently more on the nascent RNA than on the DNA; the properties of this termination site have NOT yet been fully characterised.", cn: "另一些终止位点不具备上述发夹/寡聚(U)序列，而需要ρ蛋白（rho因子）——一种以消耗NTP为代价、催化解开RNA-DNA及RNA-RNA双螺旋的酶。ρ依赖型终止还需要位于终止位点上游的特殊识别序列，这些序列似乎更多地位于新生RNA上而非DNA上；该类终止位点的性质目前尚未被完全阐明。" },
    { cz: "posttranskripční úprava rRNA (Obr. 4.33)", en: "tRNA and rRNA are NOT transcribed directly at their final length — they are products of ENZYMATIC PROCESSING of a longer PRIMARY TRANSCRIPT, so-called POST-TRANSCRIPTIONAL PROCESSING. For rRNA (Obr. 4.33), a single primary transcript is cut by ribonucleases (III, P, F, E, M16, M23, M5, D) in PRIMARY and SECONDARY processing steps into the mature 16S (1541 nt), 23S (2904 nt) and 5S (120 nt) rRNAs plus several tRNAs.", cn: "tRNA和rRNA并非直接以最终长度被转录出来——它们是对一个更长的初级转录本进行酶促加工的产物，即所谓的转录后加工。以rRNA为例（图4.33），一个单一的初级转录本经核糖核酸酶（III、P、F、E、M16、M23、M5、D）分两步（初级加工与次级加工）切割，最终生成成熟的16S（1541个核苷酸）、23S（2904个核苷酸）rRNA、5S（120个核苷酸）rRNA以及若干tRNA。" }
  ],
  terms: [
    { cz: "kodogenní vlákno", en: "coding (template) strand", cn: "编码链（模板链）", def_en: "The single DNA strand actually copied during transcription of a given gene.", def_cn: "在给定基因转录过程中实际被复制的那一条DNA链。" },
    { cz: "RNA-polymerasa (holoenzym)", en: "RNA polymerase holoenzyme", cn: "RNA聚合酶全酶", def_en: "The E. coli enzyme (subunits α2ββ'σ) responsible for template binding, initiation, elongation and termination of RNA synthesis.", def_cn: "大肠杆菌中负责RNA合成的模板结合、起始、延伸和终止的酶（亚基组成为α2ββ′σ）。" },
    { cz: "faktor σ (sigma)", en: "sigma (σ) factor", cn: "σ因子", def_en: "The holoenzyme subunit that recognises promoter sequences; dissociates from the core enzyme once synthesis begins and can be reused.", def_cn: "全酶中识别启动子序列的亚基；一旦合成开始便从核心酶上解离，可被重复利用。" },
    { cz: "promotor", en: "promoter", cn: "启动子", def_en: "The DNA base sequence near the start nucleotide, recognised by sigma factor, where RNA polymerase binds to initiate transcription.", def_cn: "位于起始核苷酸附近、被σ因子识别的DNA碱基序列，RNA聚合酶在此结合以启动转录。" },
    { cz: "transkripční bublina", en: "transcription bubble", cn: "转录泡", def_en: "The short, locally unwound region of DNA (about one helical turn) where the template pairs transiently with the growing RNA 3'-end.", def_cn: "DNA局部解旋形成的短区域（约一个螺旋圈），模板在此处与正在延伸的RNA的3′端短暂配对。" },
    { cz: "terminátor (vlásenka)", en: "intrinsic (hairpin) terminator", cn: "内在（发夹）终止子", def_en: "A G+C-rich palindromic sequence adjacent to an A-T-rich run; its RNA transcript folds into a self-complementary hairpin ending in oligo(U), causing spontaneous termination.", def_cn: "与富含A-T的序列相邻的富含G+C的回文序列；其RNA转录本折叠成以寡聚(U)收尾的自身互补发夹结构，引起自发终止。" },
    { cz: "faktor ρ (rho)", en: "rho (ρ) factor", cn: "ρ因子", def_en: "A protein required for termination at sites lacking a hairpin terminator; unwinds RNA-DNA/RNA-RNA helix using NTPs, and needs its own upstream recognition sequence.", def_cn: "在缺乏发夹终止子的位点终止转录所需的蛋白质；利用NTP解开RNA-DNA/RNA-RNA双螺旋，且需要其自身的上游识别序列。" },
    { cz: "primární transkript", en: "primary transcript", cn: "初级转录本", def_en: "The initial, longer RNA product of transcription before post-transcriptional processing removes/trims it into the mature RNA(s).", def_cn: "转录生成的最初、较长的RNA产物，经转录后加工被切除/修剪为成熟的RNA。" },
    { cz: "posttranskripční úprava (processing)", en: "post-transcriptional processing", cn: "转录后加工", def_en: "Enzymatic cutting of a primary transcript (by ribonucleases in primary and secondary steps) into mature tRNA/rRNA molecules.", def_cn: "由核糖核酸酶分初级和次级两步对初级转录本进行的酶促切割，生成成熟的tRNA/rRNA分子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What happens to the σ subunit of E. coli RNA polymerase once transcription has been initiated?",
      q_cn: "大肠杆菌RNA聚合酶的σ亚基在转录起始后会发生什么变化？",
      options: [
        "It remains permanently bound and is required for elongation too",
        "It is degraded by the transcription bubble",
        "It dissociates from the core enzyme (α2ββ') and can bind a different core enzyme to initiate elsewhere",
        "It becomes part of the finished RNA transcript"
      ],
      answer: 2,
      why_en: "Once RNA synthesis starts, the σ subunit (σ factor) dissociates from the α2ββ' core enzyme, which alone catalyses elongation. Free σ is then free to bind another core enzyme and form a new initiation complex at another promoter — sigma is reusable, not consumed.",
      why_cn: "一旦RNA合成开始，σ亚基（σ因子）便从α2ββ′核心酶上解离，核心酶单独催化延伸反应。游离的σ随后可以结合另一个核心酶，在另一个启动子处形成新的起始复合物——σ因子是可重复使用的，而非被消耗掉。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes rho (ρ)-dependent transcription termination from the intrinsic (hairpin) termination mechanism?",
      q_cn: "ρ依赖型转录终止与内在（发夹）终止机制有何区别？",
      options: [
        "Rho-dependent termination needs no special DNA or RNA sequence at all",
        "Intrinsic termination relies on a stable G+C-rich hairpin ending in oligo(U), which is sufficient on its own; rho-dependent termination instead requires protein ρ, which unwinds RNA-DNA/RNA-RNA helix using NTPs, plus its own recognition sequence",
        "Rho-dependent termination only occurs in eukaryotes",
        "Intrinsic termination requires ATP hydrolysis by RNA polymerase itself"
      ],
      answer: 1,
      why_en: "Intrinsic terminators are self-sufficient: a G+C-rich palindrome forms an RNA hairpin ending in several U residues, and the hairpin's stability plus the weak oligo(U)-template pairing spontaneously stop the polymerase. Where these sequences are absent, termination instead needs protein ρ (rho factor), an NTP-consuming enzyme that unwinds the RNA-DNA/RNA-RNA helix, plus its own upstream recognition sequence (mostly on the nascent RNA).",
      why_cn: "内在终止子是自给自足的：富含G+C的回文序列形成以若干U残基收尾的RNA发夹，其稳定性加上寡聚(U)与模板之间的弱配对，能使聚合酶自发停止。若不存在这类序列，则终止需要借助ρ蛋白（rho因子）——一种消耗NTP、解开RNA-DNA/RNA-RNA双螺旋的酶，此外还需要其自身位于上游的识别序列（主要位于新生RNA上）。"
    },
    {
      type: "short",
      q_en: "Describe the relationship between the lac promoter and the lac operator in E. coli, and what this means for the holoenzyme's binding.",
      q_cn: "描述大肠杆菌中lac启动子与lac操纵基因之间的关系，这对全酶的结合意味着什么？",
      accept: ["overlap", "operator", "promoter", "重叠", "操纵基因", "启动子"],
      answer_en: "Sequence studies show the promoter overlaps with the lac operator; the RNA polymerase holoenzyme, once bound, forms a tight complex with the promoter that protects the bound DNA from cleavage by DNase I.",
      answer_cn: "序列研究表明，启动子与lac操纵基因相互重叠；RNA聚合酶全酶一旦结合，就会与启动子形成牢固的复合物，从而保护所结合的DNA不被DNase I切割。"
    },
    {
      type: "mcq",
      q_en: "Which eukaryotic RNA polymerase synthesises mRNA precursors, and where in the nucleus does it act?",
      q_cn: "哪一种真核RNA聚合酶合成mRNA前体？它在细胞核的什么位置发挥作用？",
      options: [
        "RNA polymerase I, in the nucleolus",
        "RNA polymerase II, in the nucleoplasm",
        "RNA polymerase III, in the nucleoplasm",
        "Reverse transcriptase, in the cytoplasm"
      ],
      answer: 1,
      why_en: "RNA polymerase II, located in the nucleoplasm, synthesises mRNA precursors. RNA polymerase I, in the nucleolus, makes rRNA precursors; RNA polymerase III, also in the nucleoplasm, makes mostly tRNA and 5S rRNA precursors.",
      why_cn: "RNA聚合酶II位于核质，合成mRNA前体。RNA聚合酶I位于核仁，合成rRNA前体；RNA聚合酶III同样位于核质，主要合成tRNA和5S rRNA前体。"
    }
  ],
  oral: {
    q_en: "Explain how transcription is initiated, elongated and terminated in E. coli.",
    q_cn: "解释大肠杆菌中转录的起始、延伸和终止过程。",
    model_en: "Transcription copies only one strand of the DNA, the so-called coding strand, using the same base-complementarity principle as replication but, unlike replication, needing no primer at all: the enzyme, DNA-dependent RNA polymerase, simply joins the four ribonucleoside triphosphates on the single-stranded template, releasing pyrophosphate and building the new chain five-prime to three-prime, exactly as DNA polymerase does. In E. coli the holoenzyme has the subunit composition alpha-two-beta-beta-prime-sigma, and is responsible for four functions, binding the template, initiating the chain, elongating it, and terminating it; once synthesis has actually begun, the sigma subunit, or sigma factor, dissociates from the core enzyme and is free to bind a different core enzyme elsewhere, while the eukaryotic nucleus instead uses three separate enzymes, RNA polymerase one making ribosomal RNA precursors in the nucleolus, RNA polymerase two making messenger RNA precursors in the nucleoplasm, and RNA polymerase three making mostly transfer RNA and five-S ribosomal RNA precursors, also in the nucleoplasm. Initiation happens at specific sequences called promoters, recognised by the matching sigma factor and located near the start nucleotide; in the lactose system the promoter is actually found to overlap the operator, and once bound, the holoenzyme forms a complex with the promoter so tight that it protects the DNA there from cleavage by DNase one. During elongation the double helix is unwound over roughly one turn so the template can briefly pair with the growing RNA's three-prime end; the more likely picture is that the RNA polymerase moves in a straight line while the DNA rotates beneath it, so that a transcription bubble travels along the template, unwinding ahead of the enzyme and resealing behind it. Termination occurs at specific sequences with two shared features, a run of four to ten A-T pairs, with the A residues on the template strand, immediately followed by a G-plus-C-rich palindrome that lets the new RNA fold back on itself into a self-complementary hairpin ending in several uridines; the stability of that hairpin together with the weak pairing of its oligo-U tail to the template is what triggers correct, spontaneous termination, while sites lacking such sequences instead need the protein rho, an enzyme that unwinds the RNA-DNA and RNA-RNA helix at the cost of nucleoside triphosphates and that also requires its own recognition sequence upstream of the termination point. Not every RNA is used at the length it is first transcribed, either: ribosomal RNA, for instance, is cut from one long primary transcript by a whole set of ribonucleases in a primary and then a secondary processing step, yielding the mature sixteen-S, twenty-three-S and five-S ribosomal RNAs together with several transfer RNAs.",
    checklist: [
      "Stated transcription copies only the coding strand and needs no primer",
      "Gave RNA polymerase's subunit composition and the 4 functions of the holoenzyme",
      "Explained sigma factor dissociation after initiation and its reuse",
      "Named the 3 eukaryotic RNA polymerases and what each transcribes, with location",
      "Described the promoter, its overlap with the lac operator, and DNase I protection",
      "Described the transcription-bubble model of elongation",
      "Distinguished intrinsic (hairpin/oligo-U) termination from rho-dependent termination",
      "Mentioned post-transcriptional processing of rRNA (primary/secondary processing)"
    ]
  }
},

{
  id: "4-1-5",
  book: "cz",
  topicKey: "nucleotide-metabolism",
  chapter: 4,
  section: "4.1.5",
  czTitle: "Odbourávání nukleových kyselin",
  enTitle: "Degradation of nucleic acids",
  cnTitle: "核酸的降解",
  pages: [91, 92],
  coverage: "full",
  coverageNote: "p.91 verified against the scan from the 4.1.5 heading onward; the text was cut off mid-sentence there ('Reakce se většinou účastní fos-'). p.92's opening lines (before the 4.2 heading) were subsequently read directly against the scan too, completing that sentence and covering the fate of the pentose-phosphate and the degradation routes for purine and pyrimidine bases.",
  cnNote: { topic: null, title: "核苷酸的降解及核苷酸代谢 (笔记「二十七」？仅凭标题推测，未直接核对页码)", status: "partial" },
  summary: {
    en: "Degradation of nucleic acids in the cell is catalysed by NUCLEASES: EXONUCLEASES remove terminal nucleotides one at a time, while ENDONUCLEASES cleave ester bonds WITHIN the chain. The resulting nucleotides and nucleosides are further broken down by dedicated enzymes, down to the level of the free purine and pyrimidine bases, which each then follow their own separate degradation route — purines end (in mammals) at UREA via URIC ACID, while the pyrimidine bases uracil and thymine are degraded to β-ALANINE and 3-AMINOBUTYRIC ACID respectively.",
    cn: "细胞内核酸的降解由核酸酶催化：外切核酸酶逐个切除末端核苷酸，而内切核酸酶则切割链内部的酯键。由此产生的核苷酸和核苷会被进一步分解，直至游离的嘌呤和嘧啶碱基，此后两类碱基各自走上不同的降解路线——嘌呤（在哺乳动物中）经尿酸最终降解为尿素，而嘧啶碱基尿嘧啶和胸腺嘧啶则分别降解为β-丙氨酸和3-氨基丁酸。"
  },
  points: [
    { cz: "exonukleasy vs. endonukleasy", en: "Degradation of polynucleotides is catalysed by NUCLEASES. EXONUCLEASES cleave off TERMINAL nucleotides one at a time; ENDONUCLEASES cleave ESTER BONDS WITHIN the chain of the nucleic acid.", cn: "多核苷酸的降解由核酸酶催化。外切核酸酶逐个切除末端的核苷酸；内切核酸酶则切割核酸链内部的酯键。" },
    { cz: "nukleasy a a b", en: "Nucleases occur in TWO forms, called a AND b. Type a NUCLEASES cleave the bond between the sugar's 3′-OH group and phosphoric acid, yielding NUCLEOSIDE-5′-PHOSPHATES. Type b NUCLEASES cleave the bond between the sugar's 5′-OH group and phosphoric acid, yielding NUCLEOSIDE-3′-PHOSPHATES.", cn: "核酸酶存在两种形式，分别称为a型和b型。a型核酸酶切割糖的3′-OH基团与磷酸之间的键，生成核苷-5′-磷酸；b型核酸酶切割糖的5′-OH基团与磷酸之间的键，生成核苷-3′-磷酸。" },
    { cz: "deoxyribonukleasy / ribonukleasy", en: "Depending on whether they cleave DNA or RNA, nucleases are called DEOXYRIBONUCLEASES or RIBONUCLEASES respectively.", cn: "根据所切割的是DNA还是RNA，核酸酶相应地被称为脱氧核糖核酸酶或核糖核酸酶。" },
    { cz: "nukleotidasy = fosfatasy", en: "The nucleotides produced are further cleaved by NUCLEOTIDASES, which are essentially PHOSPHATASES — occurring in an ALKALINE form (pH optimum 7-8) and an ACID form (pH optimum 5) — yielding NUCLEOSIDES. Alternatively, nucleotides may be split into the BASE and PENTOSE-PHOSPHATE, which then decompose separately.", cn: "生成的核苷酸会被核苷酸酶进一步切割，核苷酸酶本质上是磷酸酶——存在碱性形式（pH最适值7–8）和酸性形式（pH最适值5）——生成核苷。此外，核苷酸也可能被切割为碱基和戊糖-磷酸，二者再分别分解。" },
    { cz: "nukleosidasa — fosforolýza, zvrat 4.1.1", en: "Cleavage of the NUCLEOSIDE bond between sugar and base is catalysed by the enzyme NUCLEOSIDASE, which acts mainly PHOSPHOROLYTICALLY, giving the free base plus RIBOSE-PHOSPHATE (rarely ribose-diphosphate). This reaction is essentially the REVERSE of nucleoside synthesis from a base and PRPP described in section 4.1.1.", cn: "糖与碱基之间核苷键的断裂由核苷酸酶（nukleosidasa）催化，其作用方式主要是磷酸解，生成游离碱基和核糖-磷酸（较少见的是核糖-二磷酸）。这一反应实质上是4.1.1节所述「碱基+PRPP生成核苷」这一合成反应的逆过程。" },
    { cz: "pentosafosfáty → metabolismus sacharidů", en: "The released PENTOSE-PHOSPHATES are NOT degraded as part of nucleic acid metabolism at all — they are fed into CARBOHYDRATE METABOLISM instead.", cn: "释放出的戊糖-磷酸并不在核酸代谢中被降解——而是被送入糖代谢中处理。" },
    { cz: "purinové báze → kys. močová → močovina", en: "In MAMMALS, the purine bases (adenine, guanine) are degraded via URIC ACID, all the way down to UREA (the book's own summary statement; see chapter 5 for the detail of nitrogen disposal). Uric acid itself is the well-known intermediate whose accumulation causes GOUT.", cn: "在哺乳动物体内，嘌呤碱基（腺嘌呤、鸟嘌呤）经尿酸这一中间产物被降解，直至生成尿素（教材原文的概括性表述；氮的处置细节见第5章）。尿酸本身正是那个因积累而导致痛风的著名中间产物。" },
    { cz: "pyrimidinové báze → β-alanin / kys. 3-aminomáselná", en: "The pyrimidine bases are degraded by SEPARATE routes: URACIL is broken down to β-ALANINE, CO₂, NH₃ and H₂O; THYMINE yields 3-AMINOBUTYRIC ACID, NH₃ and CO₂ instead.", cn: "嘧啶碱基则各自沿不同路线降解：尿嘧啶被分解为β-丙氨酸、CO₂、NH₃和H₂O；胸腺嘧啶则生成3-氨基丁酸、NH₃和CO₂。" }
  ],
  terms: [
    { cz: "nukleasa (typ a / b)", en: "nuclease (type a / type b)", cn: "核酸酶（a型／b型）", def_en: "Enzymes degrading nucleic acids; type a cleaves sugar-3'-OH/phosphate bonds (→ nucleoside-5'-phosphates), type b cleaves sugar-5'-OH/phosphate bonds (→ nucleoside-3'-phosphates).", def_cn: "降解核酸的酶；a型切割糖3′-OH与磷酸之间的键（生成核苷-5′-磷酸），b型切割糖5′-OH与磷酸之间的键（生成核苷-3′-磷酸）。" },
    { cz: "exonukleasa", en: "exonuclease", cn: "外切核酸酶", def_en: "Removes nucleotides one at a time from the end of a nucleic acid chain.", def_cn: "从核酸链的末端逐个切除核苷酸。" },
    { cz: "endonukleasa", en: "endonuclease", cn: "内切核酸酶", def_en: "Cleaves ester bonds at internal positions within a nucleic acid chain.", def_cn: "在核酸链内部的位点切割酯键。" },
    { cz: "nukleotidasa", en: "nucleotidase", cn: "核苷酸酶", def_en: "A phosphatase-type enzyme (alkaline form, pH optimum 7-8; acid form, pH optimum 5) that removes the phosphate from a nucleotide to yield a nucleoside.", def_cn: "一类磷酸酶型酶（碱性形式pH最适值7–8；酸性形式pH最适值5），从核苷酸上去除磷酸生成核苷。" },
    { cz: "kyselina močová", en: "uric acid", cn: "尿酸", def_en: "The intermediate in mammalian purine base degradation, en route to urea; its accumulation in the body causes gout.", def_cn: "哺乳动物嘌呤碱基降解途径中通向尿素的中间产物；在体内积累会导致痛风。" },
    { cz: "β-alanin / kys. 3-aminomáselná", en: "β-alanine / 3-aminobutyric acid", cn: "β-丙氨酸／3-氨基丁酸", def_en: "The end products of pyrimidine base degradation: uracil yields β-alanine, thymine yields 3-aminobutyric acid, alongside NH3 and CO2.", def_cn: "嘧啶碱基降解的终产物：尿嘧啶生成β-丙氨酸，胸腺嘧啶生成3-氨基丁酸，同时释放NH3和CO2。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the fundamental difference between an exonuclease and an endonuclease?",
      q_cn: "外切核酸酶与内切核酸酶的根本区别是什么？",
      options: [
        "Exonucleases act on RNA only, endonucleases on DNA only",
        "Exonucleases remove terminal nucleotides one at a time; endonucleases cleave ester bonds within the chain",
        "Exonucleases require ATP; endonucleases do not",
        "There is no difference — the terms are synonyms"
      ],
      answer: 1,
      why_en: "Exonucleases work from the END of the chain, removing one nucleotide at a time; endonucleases cut ester bonds AT INTERNAL positions within the chain. Either kind can, in principle, act on DNA or RNA — the DNA/RNA distinction is a separate axis (deoxyribonuclease vs ribonuclease).",
      why_cn: "外切核酸酶从链的末端起作用，每次切除一个核苷酸；内切核酸酶则在链的内部位点切割酯键。原则上两者都可以作用于DNA或RNA——DNA/RNA的区分是另一个独立的维度（脱氧核糖核酸酶 vs 核糖核酸酶）。"
    },
    {
      type: "mcq",
      q_en: "What is the product difference between type a and type b nucleases?",
      q_cn: "a型和b型核酸酶在产物上有何区别？",
      options: [
        "Type a yields nucleoside-5'-phosphates (cleaving the sugar's 3'-OH/phosphate bond); type b yields nucleoside-3'-phosphates (cleaving the sugar's 5'-OH/phosphate bond)",
        "Type a acts only on RNA; type b acts only on DNA",
        "Type a requires Mg2+; type b requires Mn2+",
        "There is no difference in products, only in optimal pH"
      ],
      answer: 0,
      why_en: "Type a nucleases cleave the bond between the sugar's 3'-OH and phosphoric acid, yielding nucleoside-5'-phosphates. Type b nucleases cleave the bond between the sugar's 5'-OH and phosphoric acid, yielding nucleoside-3'-phosphates. Which bond is cut determines where the phosphate ends up on the product.",
      why_cn: "a型核酸酶切割糖的3′-OH与磷酸之间的键，生成核苷-5′-磷酸。b型核酸酶切割糖的5′-OH与磷酸之间的键，生成核苷-3′-磷酸。被切割的是哪个键，决定了磷酸最终留在产物的哪一端。"
    },
    {
      type: "short",
      q_en: "After nucleases have cut a nucleic acid into nucleotides, what two alternative fates can those nucleotides have?",
      q_cn: "核酸酶把核酸切成核苷酸之后，这些核苷酸可能有哪两种不同的去路？",
      accept: ["nucleotidase", "phosphatase", "nucleoside", "base", "pentose", "核苷酸酶", "磷酸酶", "核苷", "碱基", "戊糖"],
      answer_en: "Either nucleotidases (which are essentially phosphatases, with an alkaline form at pH optimum 7-8 and an acid form at pH optimum 5) cleave off the phosphate to yield a nucleoside; or the nucleotide is split directly into its base and a pentose-phosphate, which then decompose separately.",
      answer_cn: "要么由核苷酸酶（本质上是磷酸酶，存在pH最适值7–8的碱性形式和pH最适值5的酸性形式）切下磷酸生成核苷；要么核苷酸直接被切割为碱基和戊糖-磷酸，二者再分别分解。"
    },
    {
      type: "mcq",
      q_en: "Once nucleosidase releases the free purine and pyrimidine bases, which statement about their FURTHER degradation is correct?",
      q_cn: "核苷酸酶释放出游离的嘌呤和嘧啶碱基之后，关于它们进一步降解的哪一说法是正确的？",
      options: [
        "Both classes converge on the same end product, urea",
        "Purine bases are degraded (in mammals) via uric acid to urea; uracil yields β-alanine and thymine yields 3-aminobutyric acid, each with NH3 and CO2",
        "Purine bases are excreted unchanged; only pyrimidines are degraded",
        "Pentose-phosphate released alongside the bases is degraded by the same purine/pyrimidine pathway"
      ],
      answer: 1,
      why_en: "Purine and pyrimidine bases follow ENTIRELY SEPARATE routes. Purines go via uric acid to urea in mammals (uric acid is the metabolite behind gout). Pyrimidines split further by base: uracil to β-alanine, thymine to 3-aminobutyric acid, both releasing NH3 and CO2. The pentose-phosphate released earlier is not part of either route — it feeds into carbohydrate metabolism instead.",
      why_cn: "嘌呤和嘧啶碱基走的是完全独立的降解路线。哺乳动物体内嘌呤经尿酸降解为尿素（尿酸正是导致痛风的代谢物）。嘧啶则按碱基种类分别降解：尿嘧啶生成β-丙氨酸，胸腺嘧啶生成3-氨基丁酸，二者都释放NH3和CO2。之前释放的戊糖-磷酸不属于这两条路线中的任何一条——它被送入糖代谢处理。"
    }
  ],
  oral: {
    q_en: "How are nucleic acids degraded in the cell, all the way down to the fate of the free bases?",
    q_cn: "细胞内核酸是如何被逐步降解的，直到游离碱基的最终去向？",
    model_en: "Breakdown of polynucleotides in the cell is catalysed by nucleases, which come in two mechanistic types depending on where they cut: exonucleases remove one terminal nucleotide at a time, while endonucleases cleave ester bonds at internal positions within the chain. Nucleases are further divided by exactly which phosphate-sugar bond they attack, called type a and type b: type a cleaves the bond between the sugar's three-prime hydroxyl and the phosphate, leaving nucleoside-five-prime-phosphates, while type b cleaves the bond between the sugar's five-prime hydroxyl and the phosphate, leaving nucleoside-three-prime-phosphates; and depending on whether the substrate is DNA or RNA, these enzymes are called deoxyribonucleases or ribonucleases respectively. The nucleotides these nucleases produce are then broken down further, either by nucleotidases, which are essentially phosphatases and exist in an alkaline form with a pH optimum of seven to eight and an acid form with a pH optimum of five, cleaving off the phosphate to leave a nucleoside, or by direct splitting of the nucleotide into its base and a pentose-phosphate, which then decompose separately. The final cleavage of the nucleoside bond between sugar and base proceeds mainly by a phosphorolytic mechanism, catalysed by the enzyme nucleosidase — essentially the reverse of the nucleoside synthesis reaction described for nucleotide biosynthesis. From here the two halves of the molecule part ways entirely: the released pentose-phosphate is handed off to carbohydrate metabolism rather than being degraded as a nucleic acid product at all, while the free base follows its own route depending on its class. In mammals, purine bases are degraded via uric acid all the way down to urea, with uric acid itself being the well-known intermediate whose accumulation causes gout. The pyrimidine bases take a different path each: uracil breaks down to beta-alanine, carbon dioxide, ammonia and water, while thymine yields three-aminobutyric acid, ammonia and carbon dioxide instead.",
    checklist: [
      "Distinguished exonuclease from endonuclease by where they cut",
      "Distinguished type a nucleases (nucleoside-5'-phosphates) from type b (nucleoside-3'-phosphates)",
      "Named the deoxyribonuclease/ribonuclease split by substrate",
      "Described nucleotidases as phosphatases with alkaline and acid forms",
      "Mentioned the alternative base + pentose-phosphate route and phosphorolytic nucleosidase cleavage",
      "Stated the pentose-phosphate is handed off to carbohydrate metabolism",
      "Named uric acid as the purine route's intermediate en route to urea, with the gout connection",
      "Named the two separate pyrimidine end products: β-alanine (from uracil) and 3-aminobutyric acid (from thymine)"
    ]
  }
},

{
  id: "4-2-1",
  book: "cz",
  topicKey: "genetic-code",
  chapter: 4,
  section: "4.2.1",
  czTitle: "Sekvence genu určuje pořadí aminokyselin v proteinech",
  enTitle: "The gene sequence determines the order of amino acids in proteins",
  cnTitle: "基因序列决定蛋白质中氨基酸的顺序",
  pages: [92, 93, 94],
  coverage: "full",
  coverageNote: "All three pages verified directly against the page scans, including Obr. 4.34 (gene-to-protein scheme), Obr. 4.35 (transcription/translation worked example) and the full Tab. 4.3 genetic code table. p.94 is shared with the companion node 4-2-2: its top third finishes 4.2.1 (code degeneracy, start/stop codons) before the 4.2.2 heading begins partway down the page.",
  cnNote: { topic: null, title: "mRNA翻译产生蛋白质 (笔记无编号，见 pp.223–224)", status: "mapped" },
  summary: {
    en: "Protein synthesis (proteosynthesis) is a complex, strictly regulated, endergonic process in which the cell builds protein molecules from individual amino acids, bound to specific subcellular structures, enzymes and protein factors. It is preceded by TRANSCRIPTION, in which the needed part of the genetic information is copied from DNA into mRNA; the protein-building step itself is called TRANSLATION. The arrangement of DNA nucleotides forms a system of 'words' that are first 'reprinted' into the mRNA nucleotide sequence and then, with the help of tRNA and ribosomes, rewritten into the sequence of amino acids of the peptide chain, following the genetic code.",
    cn: "蛋白质合成（proteosynthesis）是一个复杂的、受到严格调节的、耗能（endergonic）过程，细胞在其中由单个氨基酸装配出蛋白质分子，这一过程与特定的亚细胞结构、酶和蛋白质因子相结合。它之前要经过转录（transcription），即把DNA中所需的那部分遗传信息复制到mRNA上；真正构建蛋白质的步骤称为翻译（translation）。DNA核苷酸的排列构成一套'词语'，这些'词语'先被'转印'为mRNA的核苷酸序列，再借助tRNA和核糖体，按照遗传密码被改写为肽链中氨基酸的顺序。"
  },
  points: [
    { cz: "endergonický, regulovaný proces", en: "Protein synthesis is bound to specific subcellular structures, enzymes and protein factors; it is an ENDERGONIC process (requires energy input) and is STRICTLY REGULATED. The organelles participating are the NUCLEUS, NUCLEOLUS, ENDOPLASMIC RETICULUM and, above all, the RIBOSOMES.", cn: "蛋白质合成与特定的亚细胞结构、酶和蛋白质因子相结合；它是一个耗能过程（需要能量输入），并受到严格调节。参与的细胞器有细胞核、核仁、内质网，以及最主要的核糖体。" },
    { cz: "transkripce vs. translace", en: "Protein synthesis is preceded by the stage of TRANSCRIPTION (přepis); protein synthesis proper is called TRANSLATION (překlad). During transcription, in the nucleus, the needed part of the genetic information is copied from DNA to mRNA by the process described for RNA synthesis (the book's own ch. 4.1.4).", cn: "蛋白质合成之前是转录（přepis）阶段；蛋白质合成本身称为翻译（překlad）。在转录过程中，细胞核内所需的那部分遗传信息按照RNA合成一章（本书4.1.4节）所述的过程被复制到mRNA上。" },
    { cz: "Obr. 4.34 — od genu k proteinu", en: "Obr. 4.34 traces the path from GENE TO PROTEIN through the cell's compartments: DNA replication and RNA transcription happen in the CELL NUCLEUS (on the chromosome, via DNA and RNA polymerase); the transcript undergoes RNA PROCESSING to become messenger RNA, which crosses the nuclear membrane (mRNA transport) into the cytoplasm for PROTEIN TRANSLATION. This same scheme also illustrates the philosophy of the CENTRAL DOGMA of molecular biology.", cn: "图4.34 展示了从基因到蛋白质在细胞各区室间的路径：DNA复制与RNA转录发生在细胞核内（在染色体上，通过DNA聚合酶和RNA聚合酶完成）；转录产物经过RNA加工成为信使RNA，穿过核膜（mRNA转运）进入细胞质进行蛋白质翻译。这一图示同时也体现了分子生物学中心法则的思想。" },
    { cz: "dvě klíčové otázky", en: "For protein synthesis to proceed correctly, TWO KEY QUESTIONS must be answered: (i) how is the TRANSFER OF GENETIC INFORMATION secured, and (ii) how is the ENERGETICS OF PEPTIDE BOND FORMATION secured.", cn: "要使蛋白质合成正确进行，必须解决两个关键问题：(i) 如何保证遗传信息的传递；(ii) 如何保证肽键形成所需的能量供应。" },
    { cz: "kodon a antikodon", en: "Genetic information on the DNA molecule is always 'read' starting from a defined starting point and continuing in ONE DIRECTION in equally sized groups — CODON by codon. A CODON is a group of nucleotides (in mRNA) that determines the addition of ONE amino acid to the growing polypeptide chain. Codons are complementary to the ANTICODON of the corresponding tRNA (the triplet on the tRNA's anticodon loop).", cn: "DNA分子上的遗传信息总是从一个确定的起点开始'读取'，并沿一个方向按大小相等的组进行——即一个密码子（codon）接一个密码子。密码子是（mRNA上）决定向增长中的多肽链添加一个氨基酸的一组核苷酸。密码子与相应tRNA的反密码子（anticodon）（位于tRNA反密码子环上的三联体）互补。" },
    { cz: "tripletový kód (4³=64)", en: "The twenty amino acids occurring in natural proteins cannot be encoded by single nucleotides or by pairs (doublets) — they can only be coded by TRIPLETS (groups of three nucleotides). A triplet code gives 4³ = 64 COMBINATIONS. Consequently some amino acids are coded by SEVERAL triplets, a phenomenon called DEGENERACY OF THE CODE: some amino acids are coded by up to SIX different triplets, others by four, three, two, or just a single triplet (Tab. 4.3).", cn: "天然蛋白质中出现的二十种氨基酸不能由单个核苷酸或成对（二联体）核苷酸编码——只能由三联体（三个核苷酸一组）编码。三联体密码给出 4³ = 64 种组合。因此，有些氨基酸由多个三联体编码，这种现象称为密码简并性（degeneracy）：有些氨基酸最多可由六种不同的三联体编码，另一些则由四种、三种、两种，或仅由一种三联体编码（见表4.3）。" },
    { cz: "iniciační a terminační kodony", en: "Codon AUG (for methionine) also serves as the INITIATION CODON. The triplets UAA, UAG and UGA code no amino acid and are called TERMINATION CODONS (stop codons, nonsense codons). The genetic code for amino acids is UNIVERSAL for all organisms — with one noted exception: in the presence of a specific mRNA sequence (the SECIS element), UGA is instead read as the codon for the amino acid SELENOCYSTEINE.", cn: "密码子 AUG（甲硫氨酸）同时也作为起始密码子（iniciační kodon）。三联体 UAA、UAG 和 UGA 不编码任何氨基酸，称为终止密码子（stop密码子，无义密码子）。氨基酸的遗传密码对所有生物都是通用的——但有一个特别之处：在存在特定mRNA序列（SECIS元件）的情况下，UGA会被解读为编码氨基酸硒代半胱氨酸（selenocysteine）的密码子。" },
    { cz: "Obr. 4.35 — příklad", en: "Obr. 4.35 works a concrete example: DNA strand 5'-AGAGGTGCT-3' (complementary strand 3'-TCTCCACGA-5') is transcribed to mRNA 5'-AGAGGUGCU-3', read as codons AGA-GGU-GCU; the corresponding tRNAs (anticodons UCU, CCA, CGA) deliver arginine, glycine and alanine, giving the polypeptide -Arg-Gly-Ala-.", cn: "图4.35给出一个具体示例：DNA链 5'-AGAGGTGCT-3'（互补链 3'-TCTCCACGA-5'）被转录为mRNA 5'-AGAGGUGCU-3'，读码为密码子 AGA-GGU-GCU；相应的tRNA（反密码子分别为UCU、CCA、CGA）分别运来精氨酸、甘氨酸和丙氨酸，生成多肽 -Arg-Gly-Ala-。" }
  ],
  terms: [
    { cz: "transkripce", en: "transcription", cn: "转录", def_en: "Copying of the needed part of genetic information from DNA to mRNA, in the nucleus; precedes translation.", def_cn: "在细胞核内将所需部分遗传信息从DNA复制到mRNA的过程；发生在翻译之前。" },
    { cz: "translace", en: "translation", cn: "翻译", def_en: "The actual building of protein — decoding the mRNA codon sequence into the amino acid sequence of the peptide chain, with tRNA and ribosomes.", def_cn: "真正构建蛋白质的过程——借助tRNA和核糖体，将mRNA密码子序列解码为肽链的氨基酸序列。" },
    { cz: "kodon", en: "codon", cn: "密码子", def_en: "A group of three nucleotides in mRNA specifying addition of one amino acid to the growing chain; complementary to a tRNA anticodon.", def_cn: "mRNA上决定向增长中的肽链添加一个氨基酸的三核苷酸组；与tRNA反密码子互补。" },
    { cz: "antikodon", en: "anticodon", cn: "反密码子", def_en: "The complementary triplet on the anticodon loop of tRNA that pairs with the mRNA codon.", def_cn: "位于tRNA反密码子环上、与mRNA密码子配对的互补三联体。" },
    { cz: "degenerace kódu", en: "degeneracy of the code", cn: "密码简并性", def_en: "The fact that most amino acids are encoded by more than one triplet — up to six for some, down to just one for others.", def_cn: "大多数氨基酸由不止一个三联体编码的现象——有些多达六个，有些则仅由一个编码。" },
    { cz: "iniciační kodon AUG", en: "initiation codon AUG", cn: "起始密码子AUG", def_en: "Codes methionine and marks the start of translation; also codes internal Met residues.", def_cn: "编码甲硫氨酸并标志翻译起始；也编码内部的甲硫氨酸残基。" },
    { cz: "terminační (stop) kodony", en: "termination (stop) codons", cn: "终止密码子", def_en: "UAA, UAG, UGA — code no amino acid and end translation.", def_cn: "UAA、UAG、UGA——不编码任何氨基酸，终止翻译。" },
    { cz: "selenocystein (UGA + SECIS)", en: "selenocysteine", cn: "硒代半胱氨酸", def_en: "The 21st amino acid; UGA is read as its codon only in the presence of the SECIS mRNA element, otherwise UGA is a stop codon.", def_cn: "第21种氨基酸；只有在mRNA存在SECIS元件时，UGA才被解读为其密码子，否则UGA是终止密码子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The triplet nature of the genetic code follows most directly from which fact?",
      q_cn: "遗传密码采用三联体的直接原因是什么？",
      options: ["Only 4 nucleotide types exist in RNA", "20 amino acids cannot be specified by singlets (4) or doublets (16), but 4³ = 64 triplets are enough, with room to spare", "Ribosomes can only physically read three nucleotides at a time", "DNA is double-stranded"],
      answer: 1,
      why_en: "Single nucleotides give only 4 codes and doublets only 16 — both too few for 20 amino acids. Triplets give 4³ = 64 combinations, MORE than enough, which is exactly why the code turns out to be DEGENERATE (several triplets per amino acid).",
      why_cn: "单核苷酸只能给出4种编码，二联体只能给出16种——对20种氨基酸都不够。三联体给出 4³ = 64 种组合，绰绰有余，这正是密码简并（一个氨基酸对应多个三联体）的原因。"
    },
    {
      type: "mcq",
      q_en: "Which statement about UGA is correct according to this textbook?",
      q_cn: "根据本教材，关于UGA哪一说法正确？",
      options: ["UGA always codes tryptophan", "UGA is always a termination codon, without exception", "UGA is normally a termination codon, but in the presence of the SECIS mRNA element it is read as the codon for selenocysteine", "UGA is the universal initiation codon"],
      answer: 2,
      why_en: "Tab. 4.3 marks UGA as TK (a termination codon) with a footnote: in the presence of the specific SECIS sequence in mRNA it is instead interpreted as the codon for SELENOCYSTEINE. AUG, NOT UGA, is the initiation codon.",
      why_cn: "表4.3将UGA标为TK（终止密码子），并附注：在mRNA中存在特定的SECIS序列时，它被解读为硒代半胱氨酸的密码子。起始密码子是AUG，而不是UGA。"
    },
    {
      type: "short",
      q_en: "Why can the genetic code not be a doublet code?",
      q_cn: "为什么遗传密码不能是二联体密码？",
      accept: ["16", "20", "insufficient", "not enough", "64", "不够", "组合"],
      answer_en: "A doublet code built from 4 nucleotide types gives only 4² = 16 combinations, fewer than the 20 amino acids that must be encoded. Only a triplet code, giving 4³ = 64 combinations, provides enough — and indeed more than enough, which is why the code is degenerate.",
      answer_cn: "由4种核苷酸构成的二联体密码只能给出 4² = 16 种组合，少于需要编码的20种氨基酸。只有三联体密码，给出 4³ = 64 种组合，才足够——而且绰绰有余，这正是密码简并的原因。"
    },
    {
      type: "short",
      q_en: "Using Obr. 4.35's example, if the DNA template strand reads 3'-TCTCCACGA-5', give the mRNA sequence and the three amino acids it specifies.",
      q_cn: "参照图4.35的例子，若DNA模板链为 3'-TCTCCACGA-5'，给出mRNA序列及其编码的三个氨基酸。",
      accept: ["AGAGGUGCU", "arginine", "glycine", "alanine", "精氨酸", "甘氨酸", "丙氨酸"],
      answer_en: "mRNA (complementary and antiparallel to the template strand, U replacing T): 5'-AGAGGUGCU-3'. Read as codons AGA / GGU / GCU, these pair with tRNA anticodons UCU / CCA / CGA, delivering arginine, glycine and alanine — polypeptide -Arg-Gly-Ala-.",
      answer_cn: "mRNA（与模板链互补且反向平行，U替代T）：5'-AGAGGUGCU-3'。读为密码子 AGA / GGU / GCU，分别与反密码子为 UCU / CCA / CGA 的tRNA配对，运来精氨酸、甘氨酸和丙氨酸——多肽为 -Arg-Gly-Ala-。"
    }
  ],
  oral: {
    q_en: "How does the sequence of a gene determine the order of amino acids in a protein?",
    q_cn: "基因的序列是如何决定蛋白质中氨基酸的顺序的？",
    model_en: "Protein synthesis is a complex, endergonic and strictly regulated process bound to specific subcellular structures, enzymes and protein factors, with the nucleus, nucleolus, endoplasmic reticulum and above all the ribosomes taking part. It is preceded by transcription, in which the needed part of the genetic information is copied in the nucleus from DNA into messenger RNA; the building of protein itself is called translation, and together the two form the path from gene to protein, illustrating the central dogma of molecular biology. Two questions are central to this process: how the transfer of genetic information is secured, and how the energetics of peptide bond formation is secured. The arrangement of nucleotides along DNA forms a sequence of words that is first transcribed into the nucleotide sequence of mRNA and then, with the help of transfer RNA and the ribosomes, translated into the sequence of amino acids of the peptide chain. Information on the DNA molecule is always read from a fixed starting point in one direction, in equally sized groups called codons; a codon is a group of three nucleotides in mRNA that specifies the addition of one particular amino acid to the growing chain, and it is complementary to the anticodon carried on the corresponding transfer RNA. Since the twenty amino acids found in natural proteins cannot be distinguished by single nucleotides, which give only four possibilities, or by pairs of nucleotides, which give only sixteen, the code must be read in triplets, giving sixty-four possible combinations — more than enough, so that most amino acids are in fact specified by several different triplets, a property called degeneracy of the code. The codon AUG, coding methionine, doubles as the initiation codon, while the triplets UAA, UAG and UGA code no amino acid and serve as termination, or stop, codons — except that UGA, in the presence of a specific mRNA element called SECIS, is instead read as the codon for the amino acid selenocysteine. This code is universal across all organisms.",
    checklist: [
      "Defined protein synthesis as endergonic, regulated, and named the participating organelles",
      "Distinguished transcription from translation and placed them on the gene-to-protein path",
      "Stated the two key questions: information transfer and peptide-bond energetics",
      "Defined codon and anticodon and the codon-by-codon reading direction",
      "Derived the triplet code from 20 amino acids vs. 4/16/64 combinations",
      "Defined degeneracy of the code with the six/one triplet range",
      "Named AUG as the initiation codon and UAA/UAG/UGA as termination codons",
      "Mentioned the SECIS/selenocysteine exception to UGA"
    ]
  }
},

{
  id: "4-2-2",
  book: "cz",
  topicKey: "translation",
  chapter: 4,
  section: "4.2.2",
  czTitle: "Proteosyntéza probíhá v ribosomech",
  enTitle: "Protein synthesis takes place in ribosomes",
  cnTitle: "蛋白质合成在核糖体中进行",
  pages: [94, 95],
  coverage: "full",
  coverageNote: "Both pages verified directly against the scans, including Obr. 4.36 (three-dimensional E. coli ribosome model with subunit landmarks) and Obr. 4.37 (electron micrograph of a silk-gland polysome). p.94 is shared with node 4-2-1 (see its note); the lower third of p.95 opens section 4.2.3, covered by the next node.",
  cnNote: { topic: null, title: "mRNA翻译产生蛋白质 (笔记无编号，见 pp.223–224)", status: "mapped" },
  summary: {
    en: "Ribosomes are ribonucleoprotein cell organelles built from rRNA and protein, consisting of a small and a large subunit that associate to form the complete, catalytically active particle. Ribosome proteins are not merely structural — many act directly as enzymes or factors in protein synthesis. Ribosomes usually work in groups bound to a single mRNA, forming polyribosomes (polysomes), which allow many copies of a protein to be translated from one message simultaneously.",
    cn: "核糖体是由rRNA和蛋白质构成的核糖核蛋白细胞器，由一个小亚基和一个大亚基组成，二者结合形成完整的、具有催化活性的颗粒。核糖体蛋白质并不仅仅起结构作用——其中许多直接充当蛋白质合成中的酶或因子。核糖体通常成群地结合在同一条mRNA上工作，形成多聚核糖体（polysome），使得一条mRNA可以同时被翻译出许多蛋白质拷贝。"
  },
  points: [
    { cz: "definice, podjednotky", en: "Ribosomes are cell organelles formed by rRNA and proteins (RIBONUCLEOPROTEIN particles). They consist of a SMALL subunit (30S in prokaryotes, 40S in eukaryotes) and a LARGE subunit (50S, resp. 60S).", cn: "核糖体是由rRNA和蛋白质构成的细胞器（核糖核蛋白颗粒）。它们由一个小亚基（原核生物为30S，真核生物为40S）和一个大亚基（50S，或60S）组成。" },
    { cz: "E. coli — rozměry", en: "E. coli ribosomes measure on average 20 nm in diameter, have a mass of about 2 700 kDa, and a sedimentation constant of 70S (obr. 4.36). Under certain conditions the subunits can dissociate, and sometimes even further ribosome components dissociate.", cn: "E. coli 核糖体平均直径为20 nm，质量约为2700 kDa，沉降系数为70S（图4.36）。在特定条件下亚基可以解离，有时甚至核糖体的其他组分也会解离。" },
    { cz: "bílkoviny ribosomu", en: "The proteins of the ribosome do not have only a STRUCTURAL role in these organelles — a number of them are ENZYMES or FACTORS directly participating in protein synthesis.", cn: "核糖体的蛋白质在这些细胞器中不仅仅起结构作用——其中许多是直接参与蛋白质合成的酶或因子。" },
    { cz: "Obr. 4.36 — morfologie podjednotek", en: "Obr. 4.36 names the landmarks of the E. coli ribosome model: the SMALL subunit has a head, cleft, platform, neck and body; the LARGE subunit has a central protuberance, ridge, valley and stalk. The two associate to give the complete ribosome.", cn: "图4.36标示了E. coli核糖体模型的各个部位：小亚基有头部（head）、裂隙（cleft）、平台（platform）、颈部（neck）和体部（body）；大亚基有中央突起（central protuberance）、脊（ridge）、谷（valley）和柄（stalk）。两者结合形成完整的核糖体。" },
    { cz: "polyribosomy (polysomy)", en: "Ribosomes mostly act in a complex in which many of these organelles are bound to one mRNA, which they all translate SIMULTANEOUSLY. Such complexes are called POLYRIBOSOMES (POLYSOMES) (obr. 4.37).", cn: "核糖体大多以复合体的形式工作，许多核糖体结合在同一条mRNA上，同时对其进行翻译。这类复合体称为多聚核糖体（polysome）（图4.37）。" },
    { cz: "hustota na mRNA", en: "Individual ribosomes in a polysome are spaced about 5 TO 15 nm apart, giving a maximal density of about ONE RIBOSOME PER 80 NUCLEOTIDES of mRNA. Polysomes arise because, once the initiation sequence has activated one ribosome, it is released and becomes available to activate the next.", cn: "多聚核糖体中相邻核糖体的间距约为5到15 nm，最大密度约为每80个核苷酸一个核糖体。多聚核糖体的形成是因为起始序列在激活一个核糖体后即被释放，从而可供激活下一个核糖体使用。" },
    { cz: "Obr. 4.37 příklad", en: "Obr. 4.37 shows an electron micrograph of a polysome from the silk glands of the silkworm caterpillar (Bombyx mori), which produces silk; the arrows mark the nascent polypeptides of the protein being synthesized — FIBROIN, the silk protein.", cn: "图4.37展示了产丝的家蚕（Bombyx mori）丝腺中多聚核糖体的电子显微照片；箭头标示的是正在合成的蛋白质——丝心蛋白（fibroin）——的新生多肽链。" }
  ],
  terms: [
    { cz: "ribosom", en: "ribosome", cn: "核糖体", def_en: "A ribonucleoprotein organelle built of rRNA and protein, in a small and large subunit, that carries out translation.", def_cn: "由rRNA和蛋白质构成的核糖核蛋白细胞器，含小亚基与大亚基，执行翻译功能。" },
    { cz: "malá podjednotka (30S/40S)", en: "small subunit", cn: "小亚基", def_en: "30S in prokaryotes, 40S in eukaryotes; binds mRNA and the initiator tRNA.", def_cn: "原核生物为30S，真核生物为40S；结合mRNA和起始tRNA。" },
    { cz: "velká podjednotka (50S/60S)", en: "large subunit", cn: "大亚基", def_en: "50S in prokaryotes, 60S in eukaryotes; carries the peptidyl-transferase activity.", def_cn: "原核生物为50S，真核生物为60S；含有肽基转移酶活性。" },
    { cz: "sedimentační konstanta", en: "sedimentation constant", cn: "沉降系数", def_en: "A measure (Svedberg units, S) of how fast a particle sediments in a centrifuge; E. coli ribosome = 70S, from 30S + 50S subunits (not simply additive).", def_cn: "衡量颗粒在离心中沉降速度的量（Svedberg单位，S）；E. coli核糖体为70S，由30S和50S亚基构成（并非简单相加）。" },
    { cz: "polyribosom (polysom)", en: "polyribosome (polysome)", cn: "多聚核糖体", def_en: "A complex of many ribosomes simultaneously translating one mRNA, spaced about 5-15 nm apart, roughly 1 ribosome per 80 nucleotides.", def_cn: "许多核糖体同时翻译同一条mRNA所形成的复合体，相邻间距约5-15 nm，约每80个核苷酸一个核糖体。" },
    { cz: "fibroin", en: "fibroin", cn: "丝心蛋白", def_en: "The silk protein synthesized on the polysomes of the Bombyx mori silk gland, used as the textbook's electron-micrograph example.", def_cn: "在家蚕丝腺多聚核糖体上合成的丝蛋白，是教材中电镜示例所示的蛋白质。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The E. coli ribosome has a sedimentation constant of 70S, made from a 30S and a 50S subunit. What does this 70S (not 80S) illustrate?",
      q_cn: "E. coli核糖体的沉降系数为70S，由30S和50S亚基组成。这个70S（而非80S）说明了什么？",
      options: ["A simple arithmetic error in the book", "Sedimentation constants (S) depend on shape and density as well as mass, so they are NOT simply additive", "The two subunits overlap physically, losing mass", "70S is only true for eukaryotic ribosomes"],
      answer: 1,
      why_en: "S values reflect the hydrodynamic behaviour of a particle (shape, density, mass) during centrifugation, not just its mass — so combining a 30S and a 50S subunit does NOT sum to 80S. This is a classic exam trap.",
      why_cn: "S值反映颗粒在离心中的流体力学行为（形状、密度、质量），而不仅仅是质量——因此30S亚基与50S亚基结合并不等于80S。这是一个经典的考试易错点。"
    },
    {
      type: "mcq",
      q_en: "What is the functional significance of ribosome proteins besides their structural role?",
      q_cn: "核糖体蛋白质除结构作用外还有什么功能意义？",
      options: ["They have no function beyond providing shape", "Many act directly as enzymes or as factors participating in protein synthesis", "They only bind rRNA and have no catalytic role", "They exist solely to protect rRNA from degradation"],
      answer: 1,
      why_en: "The book explicitly states a number of ribosomal proteins are ENZYMES or FACTORS directly participating in protein synthesis (e.g. peptidyl-transferase activity is carried by the large subunit) — not merely scaffolding.",
      why_cn: "教材明确指出，许多核糖体蛋白质是直接参与蛋白质合成的酶或因子（例如肽基转移酶活性即由大亚基承担）——而不仅仅是支架。"
    },
    {
      type: "short",
      q_en: "Why do polysomes form, and what does this achieve for the cell?",
      q_cn: "多聚核糖体为什么会形成？这对细胞有什么意义？",
      accept: ["initiation sequence", "released", "next ribosome", "simultaneous", "80 nucleotides", "起始序列", "释放", "同时"],
      answer_en: "As soon as one ribosome has been activated on the initiation sequence of an mRNA, that sequence is released and becomes available to activate a further ribosome. This lets many ribosomes translate the same mRNA simultaneously, spaced about 5-15 nm apart (roughly one ribosome per 80 nucleotides), greatly multiplying the rate of protein output from a single message.",
      answer_cn: "一旦一个核糖体在mRNA的起始序列上被激活，该序列就被释放，可供激活另一个核糖体使用。这使得许多核糖体能够同时翻译同一条mRNA，彼此间距约5-15 nm（约每80个核苷酸一个核糖体），从而大大提高了单条mRNA的蛋白质产出速率。"
    }
  ],
  oral: {
    q_en: "Describe the structure of the ribosome and how ribosomes cooperate as polysomes.",
    q_cn: "描述核糖体的结构，以及核糖体如何以多聚核糖体的形式协同工作。",
    model_en: "Ribosomes are cell organelles built from ribosomal RNA and protein, and are therefore called ribonucleoprotein particles; each consists of a small subunit, which is 30S in prokaryotes and 40S in eukaryotes, and a large subunit, which is 50S or 60S respectively, and the two associate to form the complete, functional ribosome. In E. coli the assembled ribosome averages twenty nanometres in diameter, has a mass of about two thousand seven hundred kilodaltons, and sediments at 70S; under certain conditions the subunits, and occasionally further components, can dissociate from one another. The proteins of the ribosome are not purely structural — many of them function as enzymes or as factors directly participating in protein synthesis, such as the peptidyl-transferase activity carried by the large subunit. Ribosomes rarely work alone: most often many of them bind simultaneously to a single mRNA molecule, all translating it at once, and such a complex is called a polyribosome or polysome. This arrangement arises because, once the initiation sequence of the mRNA has activated one ribosome, that sequence becomes free again and available to activate the next; individual ribosomes along the polysome are spaced roughly five to fifteen nanometres apart, giving a maximal density of about one ribosome per eighty nucleotides of message. An electron micrograph of the silk glands of the silkworm caterpillar, Bombyx mori, nicely shows this in action: a chain of ribosomes along one mRNA, each trailing a progressively longer nascent chain of the silk protein fibroin.",
    checklist: [
      "Defined ribosome as a ribonucleoprotein particle with small and large subunits",
      "Gave subunit sizes: 30S/40S small, 50S/60S large",
      "Gave E. coli specifics: ~20 nm, ~2700 kDa, 70S",
      "Noted 70S is not simply 30S+50S added",
      "Stated ribosomal proteins can be enzymes/factors, not just structural",
      "Defined polysome and explained why it forms (initiation sequence released)",
      "Gave the spacing/density figures (5-15 nm, ~1 per 80 nucleotides)",
      "Mentioned the fibroin/silk gland electron micrograph example"
    ]
  }
},

{
  id: "4-2-3-1",
  book: "cz",
  topicKey: "translation",
  chapter: 4,
  section: "4.2.3",
  czTitle: "Fáze proteosyntézy (I): aktivace aminokyselin, iniciace a elongace",
  enTitle: "Phases of protein synthesis (I): amino acid activation, initiation and elongation",
  cnTitle: "蛋白质合成的阶段（一）：氨基酸活化、起始与延伸",
  pages: [95, 96, 97, 98, 99, 100],
  coverage: "full",
  coverageNote: "All six pages verified directly against the scans, including Tab. 4.4 (E. coli translation factors), Obr. 4.38-4.39 (amino acid activation), Obr. 4.40 (Shine-Dalgarno alignment), Obr. 4.41 (initiation phases), Obr. 4.42 (elongation cycle) and Obr. 4.43 (peptidyl-transferase reaction, on p.100, which closes out elongation just before the '4) Terminace' heading begins — the rest of p.100 belongs to the companion node 4-2-3-2).",
  cnNote: { topic: null, title: "mRNA翻译产生蛋白质 (笔记无编号，见 pp.223–224)", status: "mapped" },
  summary: {
    en: "Translation proper proceeds in four stages: activation of amino acids, initiation, elongation and termination (termination is covered in the companion node). Each stage depends on its own set of protein factors — catalytically active but not classified as enzymes — listed by the book in Tab. 4.4. Amino acids are first 'raised' to a higher energy level as aminoacyl-tRNA; initiation assembles the small ribosomal subunit, mRNA and initiator tRNA at the correct start codon with the help of initiation factors and the Shine-Dalgarno sequence; elongation then repeats a three-step cycle — binding of aminoacyl-tRNA, transpeptidation and translocation — adding one amino acid to the chain per cycle.",
    cn: "翻译过程本身分为四个阶段：氨基酸活化、起始、延伸和终止（终止部分见另一节点）。每个阶段都依赖各自的一套蛋白质因子——它们具有催化活性，但不被归为酶——列于教材表4.4中。氨基酸首先被'提升'到更高的能级，形成氨基酰-tRNA；起始阶段借助起始因子和Shine-Dalgarno序列，将核糖体小亚基、mRNA与起始tRNA正确地组装在起始密码子处；随后延伸阶段不断重复一个三步循环——氨基酰-tRNA的结合、转肽反应和移位——每一循环向肽链添加一个氨基酸。"
  },
  points: [
    { cz: "4 fáze + faktory", en: "Translation proceeds in FOUR stages: (1) ACTIVATION of amino acids, (2) INITIATION, (3) ELONGATION, (4) TERMINATION. Each stage relies on its own group of FACTORS — proteins with catalytic ability that are, however, NOT classified as enzymes (Tab. 4.4).", cn: "翻译分为四个阶段：(1) 氨基酸活化；(2) 起始；(3) 延伸；(4) 终止。每个阶段都依赖各自的一组因子——具有催化能力但不被归类为酶的蛋白质（见表4.4）。" },
    { cz: "aktivace — proč a kde", en: "AMINO ACID ACTIVATION is necessary because proteins CANNOT be formed directly from free amino acids — the amino acids must first be 'raised' to a higher energy level (ACTIVATED). This takes place in the CYTOPLASM (cytosol) and is catalysed by AMINOACYL-tRNA SYNTHETASES, enzymes SPECIFIC for each individual amino acid and its tRNA, with molecular mass around 100 000, one or more essential -SH groups, and a requirement for Mg²⁺ as cofactor.", cn: "氨基酸活化是必需的，因为蛋白质不能直接由游离氨基酸形成——氨基酸必须首先被'提升'到更高的能级（被活化）。这一过程发生在细胞质（cytosol）中，由氨基酰-tRNA合成酶催化，这类酶对每种氨基酸及其tRNA都具有特异性，分子量约为100000，含有一个或多个必需的巯基（-SH），并需要Mg²⁺作为辅因子。" },
    { cz: "dva kroky aktivace", en: "Activation proceeds in TWO steps (obr. 4.38): (i) the amino acid reacts with ATP to form AMINOACYL-ADENYLATE (aminoacyl-AMP) plus pyrophosphate (PPi, promptly hydrolysed to 2 Pi, pulling the reaction forward); (ii) the activated amino acid is transferred onto tRNA, releasing AMP and forming AMINOACYL-tRNA. The amino acid is bound by an ESTER bond from its carboxyl to the 2'-OH or 3'-OH of the terminal AMP of the tRNA's CCA end (obr. 4.39).", cn: "活化分两步进行（图4.38）：(i) 氨基酸与ATP反应生成氨基酰腺苷酸（aminoacyl-AMP）并释放焦磷酸（PPi，随即被水解为2个Pi，从而推动反应正向进行）；(ii) 活化的氨基酸被转移到tRNA上，释放AMP并生成氨基酰-tRNA。氨基酸通过其羧基与tRNA的CCA末端的末端AMP的2'-OH或3'-OH以酯键相连（图4.39）。" },
    { cz: "rozpoznání dle antikodonu", en: "From the moment aminoacyl-tRNA is formed, each amino acid in protein synthesis is recognised (characterised) by the ANTICODON of its tRNA, and NOT by its own chemical structure.", cn: "从氨基酰-tRNA形成的那一刻起，蛋白质合成中每种氨基酸都是通过其tRNA的反密码子来识别（表征）的，而不是通过其自身的化学结构。" },
    { cz: "A-místo a P-místo", en: "On the ribosome there are at least two sites specific for tRNA binding: the A-SITE (aminoacyl-tRNA site), to which aminoacyl-tRNA binds CODON-SPECIFICALLY (by codon-anticodon interaction), and the P-SITE (peptidyl site), next to it, which holds the tRNA carrying the growing peptide chain (peptidyl-tRNA).", cn: "核糖体上至少有两个tRNA结合的特异位点：A位点（氨基酰-tRNA位点），氨基酰-tRNA以密码子特异性方式（通过密码子-反密码子相互作用）结合于此；以及紧邻的P位点（肽基位点），携带正在增长的肽链的tRNA（肽酰-tRNA）结合于此。" },
    { cz: "iniciace — Shine-Dalgarno", en: "Because codon AUG marks BOTH the start of translation AND internal methionine residues, the start site must be picked out by an extra signal. The 3'-end of 16S-rRNA carries a pyrimidine-rich SHINE-DALGARNO sequence, centred about 10 nucleotides upstream of the AUG initiation codon (in E. coli); base-pairing between the Shine-Dalgarno sequence and mRNA lets the ribosome correctly recognise the initiation codon (obr. 4.40).", cn: "由于密码子AUG既标志翻译的起始，又编码内部的甲硫氨酸残基，起始位点必须通过一个额外信号来加以区分。16S-rRNA的3'端携带一段富含嘧啶的Shine-Dalgarno序列，其中心位于起始密码子AUG上游约10个核苷酸处（以E. coli为例）；Shine-Dalgarno序列与mRNA之间的碱基配对使核糖体能正确识别起始密码子（图4.40）。" },
    { cz: "iniciace — 3 fáze, IF-1/2/3", en: "Initiation proceeds in THREE phases with the initiation factors of Tab. 4.4 (obr. 4.41): (1) IF-3 binds the 30S subunit and, aided by IF-1, drives dissociation of the inactive 70S ribosome left over from the previous round; (2) GTP, mRNA and the IF-2·formyl-Met-tRNA^fMet complex bind the 30S subunit at the P-site — the ONE tRNA-ribosome binding NOT strictly governed by codon-anticodon pairing, though that interaction still contributes — forming what Obr. 4.41 itself labels the 30S INITIATION COMPLEX (the book's running prose actually names this a '20S' complex at that point, which conflicts with the figure and the standard mechanism; 30S, as drawn, is the reliable value — no other 20S species exists anywhere else in the scheme); (3) the 50S subunit then joins, GTP is hydrolysed to GDP + Pi, and IF-1/IF-2/IF-3 are released, giving the 70S INITIATION COMPLEX with fMet-tRNA in the P-site and an EMPTY A-site.", cn: "起始过程分三个阶段进行，涉及表4.4中的起始因子（图4.41）：(1) IF-3结合30S亚基，并在IF-1的辅助下，驱动上一轮遗留下来的无活性70S核糖体解离；(2) GTP、mRNA以及IF-2·甲酰蛋氨酰-tRNA^fMet复合物结合到30S亚基的P位点——这是唯一一个不严格受密码子-反密码子配对支配的tRNA-核糖体结合，尽管该相互作用仍有贡献——形成图4.41本身标注为'30S起始复合物'的结构（书中正文在此处实际写作'20S'复合物，这与插图及标准机制相矛盾；以图中所绘的30S为准——该方案中其他任何地方都不存在'20S'这一物种）；(3) 50S亚基随后加入，GTP水解为GDP和Pi，IF-1、IF-2、IF-3被释放，形成70S起始复合物，其P位点结合fMet-tRNA，A位点为空。" },
    { cz: "elongace — 3 kroky", en: "Elongation repeats a THREE-STEP cycle per amino acid added (obr. 4.42, Tab. 4.4): (i) BINDING — aminoacyl-tRNA binds the A-site codon-specifically; in vivo this binding is weak alone, so it is delivered as a TERNARY COMPLEX EF-Tu·GTP·aminoacyl-tRNA, with GTP hydrolysed on correct codon-anticodon pairing and EF-Ts regenerating EF-Tu·GTP; (ii) TRANSPEPTIDATION — the enzyme PEPTIDYL-TRANSFERASE (in the large subunit) transfers the peptidyl chain from the P-site tRNA onto the A-site aminoacyl-tRNA, forming a new peptide bond, so the extended peptidyl-tRNA now sits in the A-site and an UNCHARGED tRNA is left in the P-site (obr. 4.43); (iii) TRANSLOCATION — driven by EF-G (with GTP hydrolysis), the uncharged tRNA leaves the P-site (via the E-SITE, not pictured in obr. 4.42), and peptidyl-tRNA with its mRNA moves from the A-site to the P-site, shifting the reading frame by exactly one codon; EF-G release is required before the next cycle, since EF-G and EF-Tu binding are mutually exclusive.", cn: "延伸阶段针对每添加一个氨基酸都重复一个三步循环（图4.42，表4.4）：(i) 结合——氨基酰-tRNA以密码子特异性方式结合到A位点；在体内，单独的氨基酰-tRNA结合很弱，因此它以三元复合物 EF-Tu·GTP·氨基酰-tRNA 的形式被递送，正确的密码子-反密码子配对触发GTP水解，EF-Ts负责再生EF-Tu·GTP；(ii) 转肽反应——大亚基中的肽基转移酶将P位点tRNA上的肽链转移到A位点的氨基酰-tRNA上，形成新的肽键，于是延长后的肽酰-tRNA现位于A位点，P位点则留下一个未负载（uncharged）的tRNA（图4.43）；(iii) 移位——由EF-G驱动（伴随GTP水解），未负载的tRNA离开P位点（经由图4.42中未画出的E位点），肽酰-tRNA连同其mRNA从A位点移至P位点，使阅读框恰好移动一个密码子；由于EF-G与EF-Tu的结合互斥，EF-G必须先释放，下一轮循环才能开始。" }
  ],
  terms: [
    { cz: "aminoacyl-tRNA-synthetasa", en: "aminoacyl-tRNA synthetase", cn: "氨基酰-tRNA合成酶", def_en: "Enzyme (~100 000 Da, needs -SH groups and Mg²⁺) that activates a specific amino acid onto its specific tRNA in two ATP-dependent steps.", def_cn: "分两步以ATP依赖方式将特定氨基酸活化并连接到其特异tRNA上的酶（约100000道尔顿，需要巯基和Mg²⁺）。" },
    { cz: "aminoacyladenylát", en: "aminoacyl-adenylate", cn: "氨基酰腺苷酸", def_en: "The high-energy intermediate (aminoacyl-AMP) formed from amino acid + ATP, with release of pyrophosphate.", def_cn: "由氨基酸与ATP反应生成的高能中间产物（氨基酰-AMP），同时释放焦磷酸。" },
    { cz: "A-místo", en: "A-site", cn: "A位点", def_en: "The ribosomal site where incoming aminoacyl-tRNA binds codon-specifically.", def_cn: "新进入的氨基酰-tRNA以密码子特异性方式结合的核糖体位点。" },
    { cz: "P-místo", en: "P-site", cn: "P位点", def_en: "The ribosomal site holding the peptidyl-tRNA carrying the growing chain.", def_cn: "容纳携带增长中肽链的肽酰-tRNA的核糖体位点。" },
    { cz: "Shine-Dalgarnova sekvence", en: "Shine-Dalgarno sequence", cn: "Shine-Dalgarno序列", def_en: "A pyrimidine-rich sequence near the 3' end of 16S-rRNA that base-pairs with a complementary mRNA sequence ~10 nt upstream of AUG to mark the true start codon.", def_cn: "位于16S-rRNA 3'端附近的富含嘧啶的序列，与mRNA上位于AUG上游约10个核苷酸处的互补序列配对，以标记真正的起始密码子。" },
    { cz: "IF-1, IF-2, IF-3", en: "initiation factors", cn: "起始因子", def_en: "IF-3 binds 30S and drives dissociation of the inactive 70S ribosome (assisted by IF-1); IF-2 (with GTP) delivers formyl-Met-tRNA to the P-site.", def_cn: "IF-3结合30S亚基并驱动无活性70S核糖体解离（IF-1协助）；IF-2（携GTP）将甲酰蛋氨酰-tRNA递送至P位点。" },
    { cz: "formyl-Met-tRNA^fMet", en: "formylmethionyl-tRNA", cn: "甲酰蛋氨酰-tRNA", def_en: "The special initiator tRNA that starts every prokaryotic polypeptide chain; recognised by the ribosome largely independent of strict codon-anticodon pairing.", def_cn: "启动每条原核多肽链合成的特殊起始tRNA；核糖体对它的识别在很大程度上不依赖严格的密码子-反密码子配对。" },
    { cz: "EF-Tu, EF-Ts, EF-G", en: "elongation factors", cn: "延伸因子", def_en: "EF-Tu (with GTP) delivers aminoacyl-tRNA to the A-site as a ternary complex; EF-Ts regenerates EF-Tu·GTP from EF-Tu·GDP; EF-G (with GTP) drives translocation.", def_cn: "EF-Tu（携GTP）以三元复合物形式将氨基酰-tRNA递送至A位点；EF-Ts将EF-Tu·GDP再生为EF-Tu·GTP；EF-G（携GTP）驱动移位。" },
    { cz: "peptidyltransferasa", en: "peptidyl-transferase", cn: "肽基转移酶", def_en: "The catalytic activity of the large ribosomal subunit that forms the new peptide bond, transferring the peptidyl chain from P-site to A-site tRNA.", def_cn: "核糖体大亚基所具有的催化活性，负责形成新的肽键，将肽链从P位点tRNA转移到A位点tRNA上。" },
    { cz: "translokace", en: "translocation", cn: "移位", def_en: "EF-G-driven, GTP-dependent movement of peptidyl-tRNA and mRNA from the A-site to the P-site by exactly one codon, resetting the ribosome for the next cycle.", def_cn: "由EF-G驱动、依赖GTP的过程，使肽酰-tRNA与mRNA恰好移动一个密码子的距离，从A位点移至P位点，为下一循环重置核糖体。" },
    { cz: "ternární komplex", en: "ternary complex", cn: "三元复合物", def_en: "EF-Tu·GTP·aminoacyl-tRNA — the form in which all aminoacyl-tRNAs are delivered to the ribosome in vivo.", def_cn: "EF-Tu·GTP·氨基酰-tRNA——体内所有氨基酰-tRNA被递送至核糖体时所采取的形式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why must aminoacyl-tRNA be delivered to the ribosome as a ternary complex with EF-Tu and GTP, rather than binding the A-site alone?",
      q_cn: "为什么氨基酰-tRNA必须以EF-Tu和GTP组成的三元复合物形式被递送到核糖体，而不是单独结合A位点？",
      options: ["Free aminoacyl-tRNA is chemically unstable and hydrolyses spontaneously", "In vivo, aminoacyl-tRNA alone binds the A-site only very weakly; EF-Tu-GTP greatly strengthens the binding", "The ribosome cannot physically accommodate tRNA without EF-Tu attached", "EF-Tu supplies the energy for peptide bond formation itself"],
      options_note: null,
      answer: 1,
      why_en: "The book states explicitly that under in vivo conditions aminoacyl-tRNA ALONE binds the A-site very weakly; EF-Tu and GTP strengthen this binding, so all aminoacyl-tRNAs occur as the ternary complex EF-Tu-GTP-aminoacyl-tRNA. GTP hydrolysis happens upon correct codon-anticodon pairing — it is a delivery/proofreading step, NOT the peptide-bond-forming step itself.",
      why_cn: "教材明确指出，在体内条件下，单独的氨基酰-tRNA与A位点的结合非常弱；EF-Tu与GTP增强了这种结合，因此所有氨基酰-tRNA都以三元复合物EF-Tu-GTP-氨基酰-tRNA的形式存在。GTP水解发生在密码子-反密码子正确配对之后——这是一个递送/校对步骤，而非肽键形成本身。"
    },
    {
      type: "mcq",
      q_en: "What is the special feature of the initiator formyl-Met-tRNA^fMet's binding to the ribosome, compared with every other aminoacyl-tRNA during elongation?",
      q_cn: "与延伸阶段其他氨基酰-tRNA相比，起始甲酰蛋氨酰-tRNA^fMet与核糖体的结合有什么特殊之处？",
      options: ["It binds the A-site instead of the P-site", "It is the ONE tRNA-ribosome binding not strictly governed by codon-anticodon pairing, even though that interaction also contributes", "It does not require any initiation factor", "It binds without consuming GTP"],
      answer: 1,
      why_en: "The book singles this out: recognition of the initiator formyl-Met-tRNA by the ribosome is the ONE tRNA-ribosome binding that is not strictly controlled by codon-anticodon pairing, although that interaction still plays a part. It binds directly to the P-site of the 30S subunit as part of the IF-2-GTP complex.",
      why_cn: "教材特别指出：核糖体对起始甲酰蛋氨酰-tRNA的识别，是唯一不严格受密码子-反密码子配对支配的tRNA-核糖体结合，尽管该相互作用仍起一定作用。它作为IF-2-GTP复合物的一部分直接结合到30S亚基的P位点。"
    },
    {
      type: "mcq",
      q_en: "Immediately after transpeptidation but before translocation, where are the peptidyl-tRNA and the uncharged tRNA located?",
      q_cn: "转肽反应结束后、移位发生之前，肽酰-tRNA与未负载的tRNA分别位于何处？",
      options: ["Peptidyl-tRNA in P-site, uncharged tRNA in A-site", "Peptidyl-tRNA in A-site, uncharged tRNA in P-site", "Both in the A-site", "Both released from the ribosome"],
      answer: 1,
      why_en: "Transpeptidation transfers the growing chain FROM the P-site tRNA ONTO the A-site aminoacyl-tRNA. So right after the peptide bond forms, the extended peptidyl-tRNA sits in the A-SITE, and the now-uncharged tRNA is left behind in the P-SITE — translocation then moves them on, to P and out via the E-site respectively.",
      why_cn: "转肽反应将增长中的肽链从P位点的tRNA转移到A位点的氨基酰-tRNA上。因此肽键形成后，延长的肽酰-tRNA立即位于A位点，而现在空载（unloaded）的tRNA则留在P位点——随后移位将它们分别移至P位点和经E位点离开。"
    },
    {
      type: "short",
      q_en: "List, in order, the three steps of one elongation cycle and the factor driving each.",
      q_cn: "按顺序列出一次延伸循环的三个步骤，以及驱动各步骤的因子。",
      accept: ["binding", "EF-Tu", "transpeptidation", "peptidyl-transferase", "translocation", "EF-G", "结合", "转肽", "移位"],
      answer_en: "(1) Binding of aminoacyl-tRNA to the A-site, as the ternary complex EF-Tu-GTP-aminoacyl-tRNA. (2) Transpeptidation, catalysed by peptidyl-transferase of the large subunit, forming the new peptide bond and leaving peptidyl-tRNA in the A-site. (3) Translocation, driven by EF-G with GTP hydrolysis, moving peptidyl-tRNA and mRNA from the A-site to the P-site by one codon and releasing the deacylated tRNA via the E-site.",
      answer_cn: "(1) 氨基酰-tRNA以三元复合物EF-Tu-GTP-氨基酰-tRNA的形式结合到A位点。(2) 转肽反应，由大亚基的肽基转移酶催化，形成新的肽键，使肽酰-tRNA留在A位点。(3) 移位，由EF-G驱动并伴随GTP水解，将肽酰-tRNA与mRNA从A位点移至P位点（移动一个密码子），并经E位点释放去酰化的tRNA。"
    }
  ],
  oral: {
    q_en: "Describe amino acid activation, initiation and elongation in bacterial protein synthesis, naming the factors involved at each stage.",
    q_cn: "描述细菌蛋白质合成中的氨基酸活化、起始和延伸阶段，并说明各阶段涉及的因子。",
    model_en: "Translation proceeds through four stages — activation, initiation, elongation and termination — each dependent on its own group of protein factors that are catalytically active but not classed as enzymes. Activation is necessary because proteins cannot be built directly from free amino acids; each amino acid must first be raised to a higher energy level. This happens in the cytoplasm, catalysed by aminoacyl-tRNA synthetases, enzymes specific for each amino acid and its cognate tRNA, in two steps: the amino acid first reacts with ATP to form aminoacyl-adenylate with release of pyrophosphate, and this activated amino acid is then transferred onto the terminal adenosine of its tRNA to give aminoacyl-tRNA, releasing AMP. From this point on, the amino acid is recognised in translation by the anticodon of its tRNA, not by its own chemical structure. Initiation must correctly locate the start codon even though AUG also occurs internally; this is achieved because the 3' end of 16S ribosomal RNA carries a pyrimidine-rich Shine-Dalgarno sequence that base-pairs with a complementary stretch of mRNA about ten nucleotides upstream of the initiating AUG. Initiation itself has three phases: first, initiation factor IF-3 binds the 30S subunit, assisted by IF-1, and drives dissociation of the inactive 70S ribosome left from the previous round; second, GTP, the mRNA and a complex of IF-2 with formyl-methionyl initiator tRNA bind the 30S subunit at what will become the P-site — the one case of tRNA recognition not strictly governed by codon-anticodon pairing — forming the thirty-S initiation complex; third, the 50S subunit joins, GTP is hydrolysed, and all three initiation factors are released, giving the seventy-S initiation complex with initiator tRNA in the P-site and an empty A-site. Elongation then repeats a three-step cycle for each amino acid added. First, aminoacyl-tRNA is delivered to the empty A-site not on its own, since that binding alone is weak, but as a ternary complex with elongation factor EF-Tu and GTP; correct codon-anticodon pairing triggers GTP hydrolysis and release of EF-Tu-GDP, which is recycled to EF-Tu-GTP by elongation factor EF-Ts. Second, in transpeptidation, the enzyme peptidyl-transferase, carried by the large subunit, transfers the growing peptide chain from the P-site tRNA onto the aminoacyl-tRNA in the A-site, forming a new peptide bond, so that the extended peptidyl-tRNA now occupies the A-site while an uncharged tRNA remains in the P-site. Third, in translocation, elongation factor EF-G, again with GTP hydrolysis, moves the peptidyl-tRNA together with its mRNA from the A-site back to the P-site, shifting the reading frame by exactly one codon, while the uncharged tRNA leaves by way of the E-site; release of EF-G is required before the cycle can begin again, since EF-G and EF-Tu cannot bind the ribosome at the same time.",
    checklist: [
      "Named all four stages and the general role of non-enzyme factors",
      "Explained WHY amino acids must be activated before use",
      "Gave the two-step activation mechanism with the synthetase and the aminoacyl-adenylate intermediate",
      "Stated recognition is by anticodon, not amino acid chemistry, from that point on",
      "Explained the Shine-Dalgarno mechanism and why a plain AUG codon is not enough",
      "Walked through all three initiation phases with IF-1/2/3 named correctly",
      "Named the resulting 30S and 70S initiation complexes and P-site occupancy",
      "Walked through all three elongation steps with EF-Tu/EF-Ts/EF-G named correctly",
      "Explained the ternary complex and why it is needed",
      "Described transpeptidation, translocation, the one-codon shift, and the E-site"
    ]
  }
},

{
  id: "4-2-3-2",
  book: "cz",
  topicKey: "translation",
  chapter: 4,
  section: "4.2.3",
  czTitle: "Fáze proteosyntézy (II): terminace",
  enTitle: "Phases of protein synthesis (II): termination",
  cnTitle: "蛋白质合成的阶段（二）：终止",
  pages: [100, 101, 102],
  coverage: "full",
  coverageNote: "All three pages verified directly against the scans. p.100 is shared with the companion node 4-2-3-1 (its top lines finish the translocation account and Obr. 4.43 before the '4) Terminace' heading begins). Obr. 4.44 (five-step termination cycle with RF-1/RF-3/RRF/EF-G) and Obr. 4.45 (peptidyl-tRNA hydrolysis chemistry), plus the closing prokaryote/eukaryote comparison paragraph that leads into section 4.2.4, were all verified on p.101-102.",
  cnNote: { topic: null, title: "mRNA翻译产生蛋白质 (笔记无编号，见 pp.223–224)", status: "mapped" },
  summary: {
    en: "The elongation cycle repeats until a termination (stop) codon enters the A-site, which no tRNA can read. Release factors then trigger hydrolysis of the finished polypeptide off the last tRNA, the ribosome is recycled into its subunits by a dedicated ribosome-releasing factor, and the whole cycle is ready to begin again at initiation. Protein synthesis as described is the prokaryotic mechanism; eukaryotic translation follows the same logic but differs in several concrete details, including the initiation-factor set, the start-site recognition signal, the identity of the first amino acid, and the cellular location where translation occurs.",
    cn: "延伸循环不断重复，直到一个终止（stop）密码子进入A位点，此时没有任何tRNA能够识别它。随后，释放因子触发已完成的多肽从最后一个tRNA上水解释放，核糖体在专门的核糖体释放因子作用下被拆解为亚基，整个循环便可重新从起始阶段开始。以上所描述的是原核生物的机制；真核生物的翻译遵循相同的逻辑，但在若干具体细节上有所不同，包括起始因子的组成、起始位点识别信号、第一个氨基酸的身份，以及翻译发生的细胞部位。"
  },
  points: [
    { cz: "spouštěč terminace", en: "The termination phase begins when one of the TERMINATION (STOP) CODONS — UAA, UAG, UGA — appears in the A-site position on the ribosome (obr. 4.44). Because these triplets code no amino acid, elongation cannot continue and the A-site stays EMPTY (no aminoacyl-tRNA can pair with a stop codon).", cn: "终止阶段始于三个终止（stop）密码子之一——UAA、UAG、UGA——出现在核糖体A位点（图4.44）。由于这些三联体不编码任何氨基酸，延伸无法继续，A位点保持为空（没有任何氨基酰-tRNA能与终止密码子配对）。" },
    { cz: "uvolňovací faktory RF-1/RF-2/RF-3", en: "Recognition is done by RELEASE FACTORS: RF-1 recognises UAA or UAG; RF-2 recognises UAA or UGA; neither can bind the ribosome AT THE SAME TIME as EF-G. A third factor, RF-3, binds GTP and STIMULATES the binding of RF-1/RF-2 to the ribosome. All release factors act at the A-SITE.", cn: "识别工作由释放因子完成：RF-1识别UAA或UAG；RF-2识别UAA或UGA；二者都不能与EF-G同时结合核糖体。第三个因子RF-3结合GTP，并刺激RF-1/RF-2与核糖体的结合。所有释放因子都作用于A位点。" },
    { cz: "hydrolýza na vodu místo na tRNA", en: "Binding of the release factor to the stop codon INDUCES transfer of the peptidyl group onto a molecule of WATER instead of onto aminoacyl-tRNA (obr. 4.45) — this is the key chemical difference from a normal elongation cycle: the finished polypeptide is released as a free carboxylate, and the tRNA is released by dissociation.", cn: "释放因子与终止密码子的结合诱导肽基被转移到一分子水上，而不是转移到氨基酰-tRNA上（图4.45）——这是与正常延伸循环的关键化学区别：完成的多肽以游离羧酸根的形式被释放，而tRNA则通过解离被释放。" },
    { cz: "RRF a recyklace ribosomu", en: "The release factor itself is cleaved off with simultaneous hydrolysis of GTP to GDP + Pi. Release of the DEAMINOACYLATED tRNA is followed by release of the now-inactive ribosome from mRNA — a step requiring the RIBOSOME-RELEASING FACTOR (RRF), together with EF-G and the energy of GTP hydrolysis; these same factors then help dissociate the ribosome back into its 30S and 50S subunits.", cn: "释放因子本身在GTP水解为GDP和Pi的同时被切除。去氨酰化的tRNA被释放后，无活性的核糖体也随即从mRNA上被释放——这一步需要核糖体释放因子（RRF），并借助EF-G以及GTP水解所释放的能量；正是这些因子随后协助将核糖体重新解离为30S和50S亚基。" },
    { cz: "cyklický proces", en: "Protein synthesis is therefore a CYCLICAL process: once the ribosome has dissociated into free subunits, the whole cycle can begin again at initiation, and it repeats for the biosynthesis of every protein molecule.", cn: "因此蛋白质合成是一个循环过程：一旦核糖体解离为游离的亚基，整个循环便可从起始阶段重新开始，并且这一循环在每一个蛋白质分子的生物合成过程中都会重复。" },
    { cz: "formylmethionin — úprava konce", en: "The freshly made polypeptide still carries formylmethionine at its N-terminus. In different species, the final form of the chain's beginning is adjusted by hydrolytic enzymes that cleave off either just the formyl group, the whole formylmethionine residue, or even several of the first amino acids.", cn: "新合成的多肽在其N端仍带有甲酰甲硫氨酸。在不同物种中，链起始端的最终形式由水解酶加以调整，这些酶可切除甲酰基本身、整个甲酰甲硫氨酸残基，甚至最初的几个氨基酸。" },
    { cz: "prokaryonta vs. eukaryonta", en: "The mechanism described is typical of PROKARYOTIC cells. Eukaryotic translation is similar but differs: eukaryotic ribosomes use a MUCH LARGER set of initiation factors (eIF); eukaryotic mRNA has NO Shine-Dalgarno-type sequence pairing with 18S-rRNA — instead the eIF-4F subunit interacting with the mRNA CAP, together with migration ('scanning') of the 40S subunit along the mRNA, locates the start site; eukaryotes start chains with plain METHIONINE, not formylmethionine; termination uses a SINGLE release factor, eRF, recognising all three stop codons (vs. RF-1/RF-2/RF-3 in bacteria); and eukaryotic ribosomes work either free in the cytoplasm or bound to the rough endoplasmic reticulum, whereas prokaryotes — lacking an ER system — translate only on free ribosomes/polysomes.", cn: "上述机制是原核细胞的典型机制。真核翻译与之类似，但存在以下差异：真核核糖体使用规模大得多的起始因子（eIF）；真核mRNA没有能与18S-rRNA配对的Shine-Dalgarno型序列——取而代之的是eIF-4F亚基与mRNA帽子结构的相互作用，再加上40S亚基沿mRNA的迁移（'扫描'），共同确定起始位点；真核生物以普通的甲硫氨酸而非甲酰甲硫氨酸起始肽链；终止阶段只使用一种释放因子eRF，可识别全部三种终止密码子（而细菌使用RF-1/RF-2/RF-3）；此外，真核核糖体既可游离于细胞质中，也可结合在粗面内质网上工作，而原核生物因缺乏内质网系统，只能在游离的核糖体/多聚核糖体上进行翻译。" }
  ],
  terms: [
    { cz: "terminační (stop) kodon", en: "termination (stop) codon", cn: "终止密码子", def_en: "UAA, UAG or UGA in the A-site; codes no amino acid and halts elongation.", def_cn: "位于A位点的UAA、UAG或UGA；不编码任何氨基酸，使延伸终止。" },
    { cz: "uvolňovací faktor (RF)", en: "release factor (RF)", cn: "释放因子", def_en: "RF-1 (UAA/UAG), RF-2 (UAA/UGA) recognise the stop codon at the A-site; RF-3 (GTP-bound) stimulates their binding.", def_cn: "RF-1（识别UAA/UAG）、RF-2（识别UAA/UGA）在A位点识别终止密码子；RF-3（结合GTP）刺激二者的结合。" },
    { cz: "RRF (faktor uvolňující ribosomy)", en: "ribosome-releasing factor", cn: "核糖体释放因子", def_en: "Together with EF-G and GTP hydrolysis, dissociates the post-termination ribosome from mRNA and back into subunits.", def_cn: "与EF-G及GTP水解共同作用，使终止后的核糖体从mRNA上解离并拆分为亚基。" },
    { cz: "eRF", en: "eukaryotic release factor", cn: "真核释放因子", def_en: "The single eukaryotic release factor that recognises all three stop codons, unlike bacteria's RF-1/RF-2/RF-3 division of labour.", def_cn: "真核生物中唯一的释放因子，可识别全部三种终止密码子，不同于细菌中RF-1/RF-2/RF-3的分工。" },
    { cz: "formylmethionin", en: "formylmethionine", cn: "甲酰甲硫氨酸", def_en: "The modified initiator amino acid at the N-terminus of every nascent bacterial polypeptide, later trimmed by hydrolytic enzymes.", def_cn: "存在于每条新生细菌多肽N端的经修饰的起始氨基酸，随后由水解酶切除。" },
    { cz: "eIF-4F", en: "eIF-4F", cn: "eIF-4F", def_en: "Eukaryotic initiation factor that interacts with the mRNA cap to help locate the start site, replacing the Shine-Dalgarno mechanism.", def_cn: "与mRNA帽子结构相互作用、协助定位起始位点的真核起始因子，取代了Shine-Dalgarno机制。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What happens chemically when a release factor binds a stop codon in the A-site?",
      q_cn: "当释放因子结合到A位点的终止密码子上时，发生了什么化学反应？",
      options: ["The peptidyl group is transferred to a new aminoacyl-tRNA", "The peptidyl group is transferred to a molecule of water, releasing the free polypeptide", "The mRNA is cleaved at the stop codon", "The A-site is permanently blocked and the ribosome is degraded"],
      answer: 1,
      why_en: "Because no aminoacyl-tRNA can occupy a stop codon, the release factor redirects peptidyl-transferase to use WATER as the acceptor instead of an amino acid — releasing the finished polypeptide as a free carboxylate (obr. 4.45).",
      why_cn: "由于没有任何氨基酰-tRNA能够占据终止密码子，释放因子使肽基转移酶改用水作为受体，而不是氨基酸——从而以游离羧酸根的形式释放完成的多肽（图4.45）。"
    },
    {
      type: "mcq",
      q_en: "Which factor cannot bind the ribosome at the same time as RF-1 or RF-2?",
      q_cn: "哪个因子不能与RF-1或RF-2同时结合核糖体？",
      options: ["IF-3", "EF-Tu", "EF-G", "Peptidyl-transferase"],
      answer: 2,
      why_en: "The book states explicitly that neither RF-1 nor RF-2 can bind the ribosome simultaneously with EF-G — their actions are mutually exclusive, keeping elongation-type and termination-type ribosome states from being confused.",
      why_cn: "教材明确指出，RF-1和RF-2都不能与EF-G同时结合核糖体——二者的作用互斥，从而避免延伸型与终止型的核糖体状态发生混淆。"
    },
    {
      type: "short",
      q_en: "Name three concrete differences between eukaryotic and prokaryotic translation mentioned in the book.",
      q_cn: "举出教材中提到的真核与原核翻译之间的三个具体差异。",
      accept: ["eIF", "cap", "methionine", "formylmethionine", "eRF", "endoplasmic reticulum", "scanning", "帽子", "甲硫氨酸", "内质网"],
      answer_en: "Any three of: eukaryotes use a much larger set of initiation factors (eIF) than bacteria's IF-1/2/3; eukaryotic mRNA lacks a Shine-Dalgarno sequence and instead uses the eIF-4F-cap interaction plus 40S scanning to find the start codon; eukaryotic chains start with plain methionine, not formylmethionine; eukaryotic termination uses a single eRF recognising all three stop codons, instead of RF-1/RF-2/RF-3; eukaryotic ribosomes can be bound to the rough endoplasmic reticulum, while prokaryotes (no ER) translate only on free ribosomes/polysomes.",
      answer_cn: "以下任举三点：真核生物使用比细菌IF-1/2/3多得多的起始因子（eIF）；真核mRNA没有Shine-Dalgarno序列，而是通过eIF-4F与帽子结构的相互作用加上40S亚基扫描来寻找起始密码子；真核肽链以普通甲硫氨酸而非甲酰甲硫氨酸起始；真核终止阶段只用一种eRF识别全部三种终止密码子，而不是RF-1/RF-2/RF-3；真核核糖体可结合在粗面内质网上工作，而原核生物（无内质网）只能在游离核糖体/多聚核糖体上翻译。"
    }
  ],
  oral: {
    q_en: "How does translation terminate, and how does the process differ between prokaryotes and eukaryotes?",
    q_cn: "翻译是如何终止的？该过程在原核生物与真核生物之间有何不同？",
    model_en: "The elongation cycle repeats, one codon at a time, until one of the three termination or stop codons, UAA, UAG or UGA, enters the A-site of the ribosome; since none of these triplets codes an amino acid, no aminoacyl-tRNA can pair with it, elongation cannot continue, and the A-site remains empty. Recognition of the stop codon is carried out by release factors: RF-1 recognises UAA and UAG, RF-2 recognises UAA and UGA, and neither can occupy the ribosome at the same time as the elongation factor EF-G, while a third factor, RF-3, binds GTP and stimulates the binding of RF-1 or RF-2. Binding of the release factor at the A-site induces the peptidyl-transferase to transfer the completed peptidyl group onto a molecule of water rather than onto a new aminoacyl-tRNA, so the finished polypeptide is released as a free chain, still carrying formylmethionine at its start, which different species then trim by hydrolytic enzymes to varying extents. The release factor itself is cleaved from the ribosome with hydrolysis of its bound GTP, and once the deacylated tRNA has also left, the inactive ribosome is released from the mRNA, a step that requires the ribosome-releasing factor together with EF-G and the energy of GTP hydrolysis; these same factors then help dissociate the ribosome back into its thirty-S and fifty-S subunits, so that the entire cycle of protein synthesis can start again at initiation. Everything described is the prokaryotic mechanism. Eukaryotic translation follows the same overall logic but differs in several concrete respects: eukaryotic ribosomes recruit a much larger family of initiation factors; eukaryotic mRNA has no Shine-Dalgarno sequence pairing with the small-subunit rRNA, and instead the start codon is located through the eIF-4F factor's interaction with the mRNA cap together with scanning migration of the small subunit along the message; the first amino acid of a eukaryotic chain is plain methionine rather than formylmethionine; termination uses a single release factor, eRF, that alone recognises all three stop codons instead of the three-factor bacterial system; and eukaryotic ribosomes are found either free in the cytoplasm or bound to the rough endoplasmic reticulum, whereas prokaryotic cells, lacking any endoplasmic reticulum, translate exclusively on free ribosomes and polysomes.",
    checklist: [
      "Explained why a stop codon halts elongation (no matching tRNA)",
      "Named RF-1/RF-2 codon specificities and their mutual exclusion with EF-G",
      "Named RF-3's GTP-binding, stimulatory role",
      "Described the water-instead-of-tRNA chemistry of release",
      "Named RRF and its role, with EF-G, in ribosome recycling",
      "Stated the process is cyclical, resetting to initiation",
      "Mentioned formylmethionine trimming at the N-terminus",
      "Gave at least three concrete prokaryote/eukaryote differences"
    ]
  }
},

{
  id: "4-2-4-1",
  book: "cz",
  topicKey: "gene-regulation-proteins",
  chapter: 4,
  section: "4.2.4",
  czTitle: "Regulace proteosyntézy (I): operon laktosy a tryptofanu",
  enTitle: "Regulation of protein synthesis (I): the lactose and tryptophan operons",
  cnTitle: "蛋白质合成的调节（一）：乳糖操纵子与色氨酸操纵子",
  pages: [102, 103, 104, 105],
  coverage: "full",
  coverageNote: "All four pages verified directly against the scans, including Obr. 4.46 (lac gene map), Obr. 4.47 (lac operon expression, inducer absent/present), Obr. 4.48 (trp operon genetic map with pathway enzymes) and Obr. 4.49 (trp attenuation model, high/low tryptophan). This node's regulation content starts partway down p.102, below the termination material covered in node 4-2-3-2. p.105 is shared with node 4-2-4-2: the attenuation figure and its caption close out this node, and the paragraphs beneath them on the same page open the next.",
  cnNote: { topic: null, title: "DNA转录产生mRNA——转录的调节控制 (笔记无编号，见 pp.212–217)", status: "mapped" },
  summary: {
    en: "Regulation of protein synthesis happens mainly at the level of transcription, either by NEGATIVE regulation (repression), which slows transcription of DNA to mRNA, or by POSITIVE regulation (stimulation), which speeds it up — both ensuring the cell neither wastes resources making unneeded protein nor runs short of a needed one. The classic explanatory model is Jacob and Monod's account of enzyme induction, worked out from the lactose (lac) operon of E. coli and partly confirmed experimentally; a second, complementary mechanism, attenuation, is illustrated by the tryptophan (trp) operon, where premature termination of transcription is controlled by the translating ribosome itself.",
    cn: "蛋白质合成的调节主要发生在转录水平，既可以是负调节（阻遏），即减缓DNA向mRNA的转录，也可以是正调节（刺激），即加速转录——两者都确保细胞既不会无谓地合成不需要的蛋白质，也不会缺乏所需要的蛋白质。经典的解释模型是Jacob和Monod提出的酶诱导机制，该机制由E. coli的乳糖（lac）操纵子研究得出，并已部分得到实验证实；另一种互补的机制——衰减（attenuation）——则以色氨酸（trp）操纵子为例，其转录的提前终止由正在翻译的核糖体本身所控制。"
  },
  points: [
    { cz: "negativní vs. pozitivní regulace", en: "Regulation at the transcription level works essentially in TWO ways: NEGATIVE regulation (REPRESSION) slows transcription of DNA into mRNA; POSITIVE regulation (STIMULATION) has a regulatory protein speed it up instead. Both controls ensure the cell neither wastes resources synthesising unneeded proteins nor runs short of ones it needs.", cn: "转录水平的调节基本上有两种方式：负调节（阻遏）减缓DNA向mRNA的转录；正调节（刺激）则通过调节蛋白加速转录。这两种控制都确保细胞既不会浪费资源合成不需要的蛋白质，也不会缺乏所需的蛋白质。" },
    { cz: "operon a jeho stavba", en: "A group of genes encoding the synthesis of one set of proteins is called an OPERON (obr. 4.46, the lac-operon of E. coli). Beside the operon sits a REGULATOR GENE (gene I), whose protein product regulates transcription. The operon itself has two parts: the REGULATORY (control) SITE — the promoter gene P and operator gene O — and the STRUCTURAL GENES (Z, Y, A for the lac-operon, encoding β-galactosidase, galactoside permease and thiogalactoside transacetylase).", cn: "编码一组蛋白质合成的一组基因称为操纵子（图4.46，E. coli的lac操纵子）。操纵子旁边有一个调节基因（I基因），其蛋白质产物负责调节转录。操纵子本身由两部分组成：调节（控制）位点——启动子基因P和操纵基因O——以及结构基因（对lac操纵子而言是Z、Y、A，分别编码β-半乳糖苷酶、半乳糖苷透过酶和硫代半乳糖苷转乙酰酶）。" },
    { cz: "represor, korepresor, induktor", en: "Gene I's product is a diffusible NEGATIVE regulatory protein, the REPRESSOR. Its action can be modulated by a low-molecular-weight effector: a COREPRESSOR strengthens repression, while an INDUCTOR (INDUCER) — a POSITIVE effector, e.g. the enzyme's own substrate or a derivative of it — binds the repressor and BLOCKS its binding to DNA, thereby permitting RNA-polymerase to move along the DNA and transcribe the structural genes.", cn: "I基因的产物是一种可扩散的负调节蛋白，即阻遏物（represor）。其作用可被一种低分子量效应物所调节：辅阻遏物（korepresor）增强阻遏作用，而诱导物（induktor）——一种正效应物，例如该酶自身的底物或其衍生物——则结合阻遏物并阻断其与DNA的结合，从而使RNA聚合酶得以沿DNA移动并转录结构基因。" },
    { cz: "molekulový vypínač (obr. 4.47)", en: "WITHOUT inducer, the lac repressor binds operator gene O, blocking transcription of the lac-operon (obr. 4.47a). Once inducer binds the repressor, the complex DISSOCIATES from the operator, allowing transcription of the structural genes into lac mRNA (obr. 4.47b). The operator-repressor-inducer system thus works as a MOLECULAR SWITCH.", cn: "在没有诱导物的情况下，lac阻遏物结合操纵基因O，阻断lac操纵子的转录（图4.47a）。一旦诱导物结合阻遏物，该复合物便从操纵基因上解离，从而使结构基因得以转录为lac mRNA（图4.47b）。操纵基因-阻遏物-诱导物这一系统因而起着分子开关的作用。" },
    { cz: "operátor — 3 vazebná místa", en: "The lac operator gene has an almost PALINDROMIC structure, which facilitates protein binding to this region of DNA. The lac repressor actually has THREE binding sites on the lac-operon: the primary operator O1 (which overlaps the lac promoter) and two so-called pseudo-operators, O2 and O3 (inside gene lacZ).", cn: "lac操纵基因具有几乎回文（palindromic）的结构，这有利于蛋白质结合到DNA的这一区域。lac阻遏物实际上在lac操纵子上有三个结合位点：主操纵位点O1（与lac启动子重叠）以及两个所谓的假操纵位点O2和O3（位于lacZ基因内部）。" },
    { cz: "RNA-polymerasa — holoenzym a jádro", en: "At initiation, the RNA-polymerase HOLOENZYME of E. coli (subunit composition α2ββ'σ — the book's running prose actually misprints this as the 'DNA polymerase' holoenzyme at this spot, but the α2ββ'σ formula and the very next sentence's 'core enzyme' both make clear RNA-polymerase is meant) forms an OPEN complex with the promoter and begins repeatedly synthesising short RNA oligomers up to 9 nucleotides long — this premature, ABORTIVE initiation stops once the σ FACTOR is released and the promoter freed. The resulting CORE enzyme (α2ββ') then carries out the ongoing ELONGATION of the transcript.", cn: "在起始阶段，E. coli的RNA聚合酶全酶（亚基组成为α2ββ'σ——书中正文此处实际误写为'DNA聚合酶'全酶，但α2ββ'σ的组成式以及紧接着提到的'核心酶'均表明所指其实是RNA聚合酶）与启动子形成开放复合物，并反复合成长度不超过9个核苷酸的短RNA寡聚体——这种提前的、流产性的起始一旦σ因子被释放、启动子被释出，即告停止。所生成的核心酶（α2ββ'）随后负责转录本的持续延伸。" },
    { cz: "trp-operon a vedoucí sekvence", en: "The trp-operon of E. coli (obr. 4.48) encodes FIVE polypeptides forming three enzymes of tryptophan synthesis. RNA-polymerase first transcribes only a LEADER SEQUENCE (trpL, 162 nucleotides) — transcribed into mRNA but NEVER translated into peptide, a fact that holds generally, not just for trp. Near the end of the leader sequence sits a further regulatory element, the ATTENUATOR, which functions much like the operator: it can cause transcription to stop after only the shorter, leader portion of mRNA has been made.", cn: "E. coli的trp操纵子（图4.48）编码五种多肽，构成三种参与色氨酸合成的酶。RNA聚合酶最初只转录一段前导序列（trpL，162个核苷酸）——它被转录为mRNA，但从不被翻译为多肽，这一事实具有普遍性，并不仅限于trp操纵子。前导序列末端附近还有一个调节元件，即衰减子（attenuator），其功能与操纵基因颇为相似：它可使转录在仅完成较短的前导部分后即告停止。" },
    { cz: "atenuace — mechanismus", en: "Attenuation (obr. 4.49) is controlled by a ribosome translating the leader peptide just behind the transcribing RNA-polymerase. (a) HIGH tryptophan: the ribosome, positioned in region 2, PREVENTS hairpin 2-3 from forming; this lets hairpin 3-4 form instead, which acts as a TRANSCRIPTION TERMINATOR, and transcription stops. (b) LOW tryptophan: the ribosome STALLS at a tandem pair of Trp codons in region 1 (starved of tryptophanyl-tRNA^Trp), which allows hairpin 2-3 (an ANTITERMINATOR) to form instead, which in turn PREVENTS hairpin 3-4 — so RNA-polymerase reads through the now-nonfunctional terminator and continues transcribing the structural genes.", cn: "衰减作用（图4.49）由紧跟在正在转录的RNA聚合酶后面、翻译前导肽的核糖体所控制。(a) 色氨酸充足时：位于区段2的核糖体阻止发夹结构2-3的形成；这使得发夹结构3-4得以形成，后者起转录终止子的作用，转录随之停止。(b) 色氨酸不足时：核糖体（因缺乏色氨酰-tRNA^Trp）在区段1的一对串联Trp密码子处停滞，这使得发夹结构2-3（一个抗终止子）得以形成，而后者反过来阻止发夹结构3-4的形成——于是RNA聚合酶得以通读过这个此时已无功能的终止子，继续转录结构基因。" }
  ],
  terms: [
    { cz: "operon", en: "operon", cn: "操纵子", def_en: "A group of genes encoding one set of proteins together with the DNA elements that regulate their joint transcription.", def_cn: "一组编码同一套蛋白质的基因，连同调控其共同转录的DNA元件。" },
    { cz: "regulátorový gen (gen I)", en: "regulator gene", cn: "调节基因", def_en: "Produces a diffusible protein (the repressor) that regulates the operon's transcription; independent of, though it may physically overlap, the promoter.", def_cn: "产生一种可扩散蛋白（阻遏物），用以调节操纵子的转录；独立于启动子，尽管在物理位置上可能与其重叠。" },
    { cz: "represor", en: "repressor", cn: "阻遏物", def_en: "The negative regulatory protein, product of the regulator gene, that binds the operator and blocks transcription until an inducer displaces it.", def_cn: "调节基因的产物，一种负调节蛋白，结合操纵基因并阻断转录，直至被诱导物取代。" },
    { cz: "induktor", en: "inducer", cn: "诱导物", def_en: "A positive, low-molecular-weight effector (e.g. an enzyme's substrate or its derivative) that binds the repressor and blocks its binding to DNA, switching transcription on.", def_cn: "一种正效应的低分子量物质（例如某酶的底物或其衍生物），结合阻遏物并阻断其与DNA的结合，从而开启转录。" },
    { cz: "operátor (gen O)", en: "operator", cn: "操纵基因", def_en: "The DNA site, almost palindromic, that the repressor binds; the lac repressor has a primary operator O1 plus pseudo-operators O2, O3.", def_cn: "阻遏物所结合的DNA位点，结构近乎回文；lac阻遏物有一个主操纵位点O1，以及假操纵位点O2、O3。" },
    { cz: "promotor (gen P)", en: "promoter", cn: "启动子", def_en: "The DNA site where RNA-polymerase holoenzyme binds and forms an open complex to begin transcription.", def_cn: "RNA聚合酶全酶结合并形成开放复合物以启动转录的DNA位点。" },
    { cz: "RNA-polymerasa (holoenzym/jádro)", en: "RNA polymerase (holoenzyme/core)", cn: "RNA聚合酶（全酶/核心酶）", def_en: "E. coli holoenzyme α2ββ'σ forms the open promoter complex; after σ release, the core enzyme α2ββ' carries out elongation.", def_cn: "E. coli全酶α2ββ'σ形成开放的启动子复合物；σ因子释放后，核心酶α2ββ'负责延伸。" },
    { cz: "atenuátor", en: "attenuator", cn: "衰减子", def_en: "A regulatory element near the end of the trp leader sequence, functioning like a second operator, where transcription can be prematurely terminated depending on ribosome position.", def_cn: "位于trp前导序列末端附近的调节元件，功能类似第二个操纵基因，转录可根据核糖体的位置在此提前终止。" },
    { cz: "atenuace", en: "attenuation", cn: "衰减作用", def_en: "Regulation of the trp-operon by a translating ribosome that, depending on tryptophan (tRNA^Trp) availability, allows either a terminator or an antiterminator hairpin to form in the leader mRNA.", def_cn: "trp操纵子的一种调节方式，由正在翻译的核糖体根据色氨酸（tRNA^Trp）的供应情况，决定前导mRNA中形成终止子发夹结构还是抗终止子发夹结构。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the ABSENCE of lactose (no inducer), what state is the lac operon in, and why?",
      q_cn: "在没有乳糖（无诱导物）的情况下，lac操纵子处于什么状态？为什么？",
      options: ["Actively transcribed, because RNA-polymerase binds the operator directly", "Repressed, because the lac repressor is bound to the operator and blocks RNA-polymerase", "Repressed, because the promoter is physically deleted", "Actively transcribed, because the repressor requires lactose to fold correctly"],
      answer: 1,
      why_en: "Without inducer, the repressor (product of gene I) binds operator gene O and physically blocks transcription of the structural genes Z, Y, A (obr. 4.47a). Only when an inducer (e.g. a lactose derivative) binds the repressor does it dissociate from the operator.",
      why_cn: "在没有诱导物的情况下，阻遏物（I基因的产物）结合操纵基因O，物理性地阻断结构基因Z、Y、A的转录（图4.47a）。只有当诱导物（例如乳糖的衍生物）结合阻遏物后，阻遏物才会从操纵基因上解离。"
    },
    {
      type: "mcq",
      q_en: "In trp-operon attenuation, what happens when tryptophan (and charged tRNA^Trp) is SCARCE?",
      q_cn: "在trp操纵子的衰减机制中，当色氨酸（及带电荷的tRNA^Trp）不足时会发生什么？",
      options: ["The ribosome races ahead of RNA-polymerase and terminates transcription early", "The ribosome stalls at tandem Trp codons, allowing the 2-3 antiterminator hairpin to form, which prevents the 3-4 terminator hairpin, so transcription continues", "The repressor is degraded, permanently activating the operon", "RNA-polymerase detaches from DNA and the operon is silenced"],
      answer: 1,
      why_en: "Under low tryptophan, the ribosome stalls at the tandem Trp codons in region 1 because it lacks charged tRNA^Trp. This lets hairpin 2-3 (the ANTITERMINATOR) form, which blocks hairpin 3-4 (the TERMINATOR) from forming, so RNA-polymerase reads through and keeps transcribing the structural genes — exactly when the cell needs to keep making tryptophan.",
      why_cn: "在色氨酸不足时，核糖体因缺乏带电荷的色氨酰-tRNA^Trp而在区段1的串联Trp密码子处停滞。这使发夹结构2-3（抗终止子）得以形成，从而阻止发夹结构3-4（终止子）的形成，于是RNA聚合酶得以通读并继续转录结构基因——这正是细胞需要继续合成色氨酸的时候。"
    },
    {
      type: "short",
      q_en: "Distinguish a corepressor from an inducer in this regulatory scheme.",
      q_cn: "在这一调节方案中，区分辅阻遏物与诱导物。",
      accept: ["negative", "positive", "strengthen", "block", "负", "正", "增强", "阻断"],
      answer_en: "Both are low-molecular-weight effectors that modulate the repressor, but with opposite effects: a corepressor strengthens repression (helps the repressor bind DNA), while an inducer is a positive effector that binds the repressor and blocks its binding to DNA, switching transcription on — the lac system works via induction.",
      answer_cn: "两者都是调节阻遏物的低分子量效应物，但作用相反：辅阻遏物增强阻遏作用（帮助阻遏物结合DNA），而诱导物是一种正效应物，结合阻遏物并阻断其与DNA的结合，从而开启转录——lac系统正是通过诱导发挥作用的。"
    },
    {
      type: "short",
      q_en: "Why is the trp leader sequence transcribed but never translated into a functional protein product of its own, and what does the ribosome do there instead?",
      q_cn: "为什么trp前导序列被转录却从不被翻译成其自身有功能的蛋白质产物？核糖体在那里做的是什么？",
      accept: ["leader peptide", "attenuator", "stalls", "hairpin", "前导肽", "衰减子", "停滞", "发夹"],
      answer_en: "The leader sequence (trpL) is transcribed into mRNA as a regulatory device, not a coding one: a short leader peptide with tandem Trp codons is translated by a ribosome that trails the RNA-polymerase, and the ribosome's position (moving freely vs. stalling at the Trp codons, depending on tryptophan supply) determines which alternative mRNA hairpin forms, thereby controlling whether transcription is terminated at the downstream attenuator or continues into the structural genes.",
      answer_cn: "前导序列（trpL）被转录为mRNA是作为一种调节装置，而非编码装置：一段带有串联Trp密码子的短前导肽被紧跟在RNA聚合酶之后的核糖体翻译，而核糖体的位置（依色氨酸供应情况自由移动，还是在Trp密码子处停滞）决定了mRNA形成哪一种可替代的发夹结构，从而控制转录是在下游的衰减子处终止，还是继续进入结构基因。"
    }
  ],
  oral: {
    q_en: "Explain the Jacob-Monod model of the lac operon and the attenuation mechanism of the trp operon.",
    q_cn: "解释乳糖操纵子的Jacob-Monod模型，以及色氨酸操纵子的衰减机制。",
    model_en: "Regulation of protein synthesis at the transcriptional level works in two basic ways: negative regulation, or repression, slows the transcription of DNA into messenger RNA, while positive regulation, or stimulation, speeds it up through the action of a regulatory protein, and together these ensure that the cell neither wastes resources on unneeded protein nor runs short of a needed one. The classical explanatory model, due to Jacob and Monod, was derived from experiments on induction of the lactose-metabolising enzymes of E. coli. A group of genes encoding one set of proteins is called an operon; next to the lac operon sits a regulator gene whose product is a diffusible negative regulatory protein, the repressor, and the operon itself consists of a regulatory site, made up of the promoter and operator genes, and a stretch of structural genes encoding, in this case, beta-galactosidase, galactoside permease and thiogalactoside transacetylase. In the absence of an inducer the repressor binds the almost palindromic operator gene and physically blocks transcription; once a positive, low-molecular-weight effector called an inducer, typically the enzyme's own substrate or a derivative of it, binds the repressor, the complex dissociates from the operator and RNA-polymerase is free to transcribe the structural genes into messenger RNA, so the operator-repressor-inducer system behaves as a molecular switch. The lac repressor in fact has three binding sites, a primary operator overlapping the promoter and two pseudo-operators inside the first structural gene, and at initiation the RNA-polymerase holoenzyme forms an open complex with the promoter, produces short abortive RNA transcripts, and only becomes a stable elongating core enzyme once its sigma factor is released. A second regulatory strategy, attenuation, is illustrated by the tryptophan operon, which encodes five polypeptides making up three enzymes of tryptophan synthesis. Here RNA-polymerase first transcribes only a short leader sequence that is never translated into a protein of its own, but ends in a further regulatory element called the attenuator. Immediately behind the transcribing polymerase, a ribosome translates a short leader peptide containing a tandem pair of tryptophan codons, and the position of that ribosome determines which of two alternative hairpin structures forms in the nascent mRNA. When tryptophan is abundant, the ribosome moves freely past those codons and prevents an early hairpin from forming, which allows a later hairpin to form instead that acts as a transcription terminator, so transcription stops. When tryptophan is scarce, the ribosome stalls at the tandem codons for lack of charged tryptophanyl-tRNA, which allows the earlier hairpin, an antiterminator, to form instead, and this prevents the terminator hairpin from forming, so RNA-polymerase reads straight through and continues transcribing the structural genes needed to make more tryptophan.",
    checklist: [
      "Distinguished negative (repression) from positive (stimulation) regulation and their purpose",
      "Defined operon, regulator gene, and the operon's two-part anatomy",
      "Named the lac structural gene products (β-galactosidase, permease, transacetylase)",
      "Explained the repressor/inducer molecular switch with correct bound/unbound logic",
      "Mentioned the palindromic operator and the O1/O2/O3 three-site detail",
      "Mentioned RNA-polymerase holoenzyme vs core and abortive initiation",
      "Introduced the trp operon and its five polypeptides / three enzymes",
      "Explained the leader sequence and attenuator as a second regulatory device",
      "Walked through BOTH high- and low-tryptophan attenuation outcomes correctly",
      "Named which hairpin (2-3 vs 3-4) is antiterminator vs terminator"
    ]
  }
},

{
  id: "4-2-4-2",
  book: "cz",
  topicKey: "gene-regulation-proteins",
  chapter: 4,
  section: "4.2.4",
  czTitle: "Regulace proteosyntézy (II): eukaryontní geny, čepička a sestřih mRNA",
  enTitle: "Regulation of protein synthesis (II): eukaryotic genes, the mRNA cap and splicing",
  cnTitle: "蛋白质合成的调节（二）：真核基因、mRNA帽子结构与剪接",
  pages: [105, 106, 107, 108],
  coverage: "full",
  coverageNote: "All three pages verified directly against the scans, including Obr. 4.50 (structure of the 5' cap) and Obr. 4.51 (step-by-step maturation of chicken ovalbumin mRNA with its exon/intron map). p.105 is shared with the companion node 4-2-4-1. The p.107 text was cut off mid-sentence ('...vysoký stupeň homologie u různých eukaryontů, včetně neměnné sekven-'); p.108's opening section (through the end of 4.2.4, before the 4.3 heading begins) was subsequently read directly against the scan too, completing that sentence and adding the splice-site consensus/spliceosome mechanism, selective mRNA transport, the intron-retention hypothesis, and hormonal/cAMP regulation of transcription and translation initiation.",
  cnNote: { topic: null, title: "DNA转录产生mRNA——真核基因调节/剪接 (笔记无编号，见 pp.212–217)", status: "mapped" },
  summary: {
    en: "Positive regulation in general works by a regulatory protein binding the promoter and reshaping the neighbouring DNA so that RNA-polymerase can engage it more easily. Gene regulation in multicellular eukaryotes is explained by several as-yet-unconfirmed models, but is known to differ from bacteria in concrete ways: eukaryotic genes likely have multiple promoters and are regulated by non-histone DNA-binding proteins; eukaryotic primary transcripts (hnRNA) are far longer than the mature message and must be capped, polyadenylated and spliced — via GU...AG-flanked splice sites recognised by the snRNP-built SPLICEOSOME — before they become functional mRNA. Regulation continues beyond the nucleus: selective mRNA transport, possible retention of introns to diversify the protein product, and — especially during development and differentiation — HORMONAL control acting through a repressor-hormone complex and the adenylate cyclase/cAMP/protein-kinase system, which also gates translation itself via a phosphorylation-activated INHIBITOR of initiation.",
    cn: "正调节一般的作用方式是：一个调节蛋白结合到启动子上，并使邻近的DNA发生构象变化，从而使RNA聚合酶更容易与之相互作用。多细胞真核生物的基因调节由若干尚未得到证实的模型所解释，但已知其在具体方式上与细菌不同：真核基因很可能拥有多个启动子，并受非组蛋白型DNA结合蛋白的调节；真核生物的初级转录产物（hnRNA）远长于成熟的信使RNA，必须经过加帽、多聚腺苷酸化，并通过由snRNP组成的剪接体识别GU...AG两侧序列而完成剪接，才能成为有功能的mRNA。调节并未止步于细胞核：mRNA的选择性转运、内含子可能被保留以使蛋白质产物多样化，以及——尤其在发育和分化过程中——通过阻遏物-激素复合物和腺苷酸环化酶/cAMP/蛋白激酶系统实现的激素调控，而后者还通过一种经磷酸化激活的翻译起始抑制物来控制翻译本身。"
  },
  points: [
    { cz: "obecný mechanismus pozitivní regulace", en: "In POSITIVE regulation generally, a regulatory protein binds the promoter gene and causes a CONFORMATIONAL CHANGE in the neighbouring DNA; this conformational change makes it easier for the DNA to interact with the enzyme RNA-POLYMERASE, which then moves along the DNA strand synthesising mRNA (or other RNA) by base complementarity.", cn: "正调节的一般机制是：一个调节蛋白结合到启动子基因上，引起邻近DNA发生构象变化；这一构象变化使DNA更容易与RNA聚合酶相互作用，后者随即沿DNA链移动，按碱基互补原则合成mRNA（或其他RNA）。" },
    { cz: "eukaryontní regulace — modely", en: "Regulation of protein synthesis in MULTICELLULAR eukaryotes differs from the prokaryotic scheme above. Several models have been proposed but NONE has yet been fully experimentally confirmed. One model assumes that, as in lower eukaryotes, a gene promoter is still involved, but that each eukaryotic gene likely has MULTIPLE promoters to which RNA-polymerase can attach; the regulatory proteins are apparently NON-HISTONE proteins that interact with DNA, themselves synthesised from dedicated regulatory genes.", cn: "多细胞真核生物中蛋白质合成的调节不同于上述原核生物的方案。已经提出了若干模型，但都尚未得到充分的实验证实。其中一个模型假设，与低等真核生物类似，基因启动子仍然参与其中，但每个真核基因很可能拥有多个可供RNA聚合酶结合的启动子；调节蛋白显然是与DNA相互作用的非组蛋白型蛋白质，它们本身由专门的调节基因合成。" },
    { cz: "více RNA-polymeras", en: "Eukaryotic gene transcription is also regulated through the regulation of RNA-POLYMERASE itself: several RNA-polymerases exist, differing in their AFFINITY for different promoters, so that some structural genes can be transcribed PREFERENTIALLY over others.", cn: "真核基因的转录还通过对RNA聚合酶本身的调节来实现：存在多种RNA聚合酶，它们对不同启动子的亲和力不同，因此某些结构基因可以被优先转录。" },
    { cz: "exony, introny, hnRNA", en: "A fundamental difference between eukaryotic and prokaryotic structural genes: the CODING sequences (EXONS) of most eukaryotic genes ALTERNATE with non-coding stretches (INTRONS). The primary DNA transcript, HETEROGENEOUS NUCLEAR RNA (hnRNA), is much LONGER than the mature mRNA and undergoes several modifications to become functional.", cn: "真核与原核结构基因之间的一个根本区别是：大多数真核基因的编码序列（外显子）与非编码片段（内含子）相互交替排列。DNA的初级转录产物——异质核RNA（hnRNA）——远比成熟的mRNA长，需要经过若干修饰才能变为有功能的mRNA。" },
    { cz: "čepička (cap-0/1/2)", en: "Eukaryotic mRNA carries a special enzymatically-attached 5' CAP structure: a 7-METHYLGUANOSINE residue joined by an unusual 5'-5' TRIPHOSPHATE bridge to the first nucleotide of the transcript (obr. 4.50). The cap is called CAP-0 if unmodified further, CAP-1 if the leading nucleoside's ribose is ALSO methylated at 2'-OH (typical of multicellular organisms), or CAP-2 if the first TWO nucleotides are so methylated.", cn: "真核mRNA带有一种特殊的、以酶促方式连接的5'帽子结构：一个7-甲基鸟苷残基通过一种不寻常的5'-5'三磷酸桥与转录本的第一个核苷酸相连（图4.50）。若不再进一步修饰，称为帽子-0；若前导核苷的核糖在2'-OH处也被甲基化（多细胞生物中常见），称为帽子-1；若前两个核苷酸都被如此甲基化，则称为帽子-2。" },
    { cz: "funkce čepičky", en: "The cap lets the ribosome recognise the mRNA; a short, untranslated region right after the cap allows base-pairing between mRNA and 18S-rRNA in eukaryotic ribosomes, and the cap region also carries the TRANSLATION START POINT (the ~12 nucleotides following the cap's G⁵ppp...). A leader sequence remains attached at this end as well.", cn: "帽子结构使核糖体能够识别mRNA；紧随帽子之后的一小段不被翻译的区域，使mRNA与真核核糖体的18S-rRNA之间得以进行碱基配对，帽子区域还携带翻译起始点（即帽子G⁵ppp…之后约12个核苷酸的区段）。该端还连接有一段前导序列。" },
    { cz: "polyadenylace", en: "Nearly all eukaryotic mRNAs end in a 3'-POLY(A) TAIL of 20-250 nucleotides. It is added in two reactions: (i) the primary transcript is CLEAVED 15-25 nucleotides downstream of a highly conserved AAUAA pentanucleotide (mutating it blocks cleavage/polyadenylation), near a less-conserved U/GU-rich sequence; (ii) POLY(A)-POLYMERASE then builds the poly(A) tail from ATP. The DNA sequence complementary to AAUAA is called the TERMINATION SIGNAL, important for ending transcription.", cn: "几乎所有真核mRNA都以3'端的poly(A)尾结束，长度为20-250个核苷酸。它通过两步反应加上：(i) 初级转录产物在一个高度保守的AAUAA五核苷酸序列下游15-25个核苷酸处被切割（该序列的突变会阻断切割与多聚腺苷酸化），该序列附近还有一段保守性较低的富含U/GU的序列；(ii) 随后poly(A)聚合酶利用ATP合成poly(A)尾。与AAUAA互补的DNA序列称为终止信号，对转录的终止十分重要。" },
    { cz: "sestřih — příklad ovalbuminu", en: "hnRNA is shortened step by step by RIBONUCLEASE enzymes, which excise the non-coding INTRONS (never translated); the exon-intron junction sequence is highly homologous across different eukaryotes. Obr. 4.51 traces this for the CHICKEN OVALBUMIN gene (7700 bp, with introns 1-7 alternating with exons I-VII): after TRANSCRIPTION into hnRNA, the primary transcript gets its CAP and is POLYADENYLATED, and only then are the introns SPLICED out and the exons rejoined, giving the mature 1872-nucleotide ovalbumin mRNA.", cn: "hnRNA被核糖核酸酶逐步缩短，这些酶切除非编码的内含子（内含子从不被翻译）；外显子-内含子连接处的序列在不同真核生物间高度同源。图4.51以鸡卵清蛋白基因（7700 bp，内含子1-7与外显子I-VII交替排列）为例展示了这一过程：转录生成hnRNA后，初级转录产物先获得帽子结构并被多聚腺苷酸化，随后内含子才被剪接去除、外显子重新连接，形成成熟的、长1872个核苷酸的卵清蛋白mRNA。" },
    { cz: "GU...AG a spliceosom (50-60S)", en: "The splice site is defined by an INVARIANT sequence GU at the intron's 5′-edge and an equally INVARIANT AG at its 3′-edge — the book treats both boundaries as invariant, with no difference in strictness between them — these are NECESSARY AND SUFFICIENT to define the splice site. Splicing is mediated by SMALL NUCLEAR RIBONUCLEOPROTEINS (snRNP), acting in particles with a sedimentation coefficient of 50-60S called SPLICEOSOMES (from 'splicing'). The spliceosome contains the pre-mRNA itself, snRNA, and various proteins that bind to the pre-mRNA.", cn: "剪接位点由内含子5′端保守的GU序列和3′端恒定不变的AG序列所定义——这两者是定义剪接位点的必要且充分条件。剪接由小核核糖核蛋白（snRNP）介导，作用于沉降系数为50-60S的颗粒中，称为剪接体（spliceosome，源自splicing一词）。剪接体含有前体mRNA本身、snRNA以及多种结合于前体mRNA上的蛋白质。" },
    { cz: "selektivní transport mRNA a zadržené introny", en: "Besides processing hnRNA into mature mRNA in the nucleus, protein synthesis is ALSO regulated by SELECTIVE TRANSPORT of mRNA into the cytoplasm. It is furthermore now considered that a SMALL FRACTION of hnRNA may ESCAPE normal processing, RETAINING some introns; these retained stretches are then translated as part of the protein's amino acid sequence, potentially producing RELATED PROTEINS OF HIGHER MOLECULAR WEIGHT. The implication: a SINGLE GENE could encode SEVERAL different proteins.", cn: "除了在细胞核中把hnRNA加工为成熟mRNA之外，蛋白质合成还受mRNA向细胞质的选择性转运所调节。此外，目前认为一小部分hnRNA可能逃过正常的加工过程，保留部分内含子；这些被保留的区段随后会作为蛋白质氨基酸序列的一部分被翻译，从而可能产生分子量更高的相关蛋白质。由此推论：单个基因可能编码若干种不同的蛋白质。" },
    { cz: "hormonální regulace (korepresor-hormon)", en: "Changes in protein synthesis mostly occur during the DEVELOPMENT and DIFFERENTIATION of eukaryotic cells, usually affecting a WHOLE SET of enzymes at once, and their regulation is HORMONAL. Hormones can act analogously to COREPRESSORS in eukaryotes — i.e. as a REPRESSOR-HORMONE (receptor-hormone) complex — thereby influencing transcription of the relevant structural genes. This complex can act EITHER directly on DNA, OR by influencing the activity of the enzyme PROTEIN KINASE, which phosphorylates certain DNA-binding proteins that in turn influence transcription.", cn: "蛋白质合成方式的改变大多发生在真核细胞的发育和分化过程中，通常一次性影响一整套酶，其调节方式是激素性的。激素在真核生物中可以类似阻遏物那样发挥作用——即形成阻遏物-激素（受体-激素）复合物——从而影响相关结构基因的转录。该复合物既可以直接作用于DNA，也可以通过影响蛋白激酶的活性发挥作用，蛋白激酶使某些结合DNA、进而影响转录的蛋白质发生磷酸化。" },
    { cz: "adenylátcyklasa, cAMP jako efektor", en: "Hormones ALSO influence (activate) the MEMBRANE-BOUND enzyme ADENYLATE CYCLASE, which catalyses SYNTHESIS OF cAMP. cAMP influences protein kinase in a manner SIMILAR to the hormones themselves — so this further layer of regulation is mediated by CYCLIC AMP, which acts as an EFFECTOR in MOST organisms.", cn: "激素还能影响（激活）膜结合酶腺苷酸环化酶，该酶催化cAMP的合成。cAMP对蛋白激酶的影响方式与激素本身类似——因此这一层进一步的调节是由环腺苷酸介导的，cAMP在大多数生物中都充当效应物的角色。" },
    { cz: "proinhibitor/inhibitor iniciace translace", en: "Besides regulation at the level of hnRNA/mRNA formation, eukaryotic TRANSLATION itself is also controlled by a so-called PROINHIBITOR and INHIBITOR of INITIATION of polypeptide-chain formation. The inhibitor is the enzyme PROTEIN KINASE — but crucially, this one is NOT regulated by cAMP. The proinhibitor is converted INTO the inhibitor by PHOSPHORYLATION, a reaction catalysed by a DIFFERENT protein kinase, one that IS cAMP-dependent.", cn: "除了在hnRNA/mRNA生成层面的调节外，真核生物的翻译本身也受到所谓翻译起始「前抑制物」和「抑制物」的控制。该抑制物就是蛋白激酶——但关键在于，这一种蛋白激酶并不受cAMP调节。前抑制物通过磷酸化转变为抑制物，而催化这一磷酸化反应的，是另一种依赖cAMP的蛋白激酶。" }
  ],
  terms: [
    { cz: "hnRNA (heterogenní nukleová RNA)", en: "heterogeneous nuclear RNA", cn: "异质核RNA", def_en: "The primary, unprocessed eukaryotic transcript, much longer than the mature mRNA; matured by capping, polyadenylation and splicing.", def_cn: "真核生物未经加工的初级转录产物，远长于成熟mRNA；通过加帽、多聚腺苷酸化和剪接而成熟。" },
    { cz: "exon", en: "exon", cn: "外显子", def_en: "A coding sequence of a eukaryotic gene, retained in mature mRNA after splicing.", def_cn: "真核基因中的编码序列，在剪接后保留在成熟mRNA中。" },
    { cz: "intron", en: "intron", cn: "内含子", def_en: "A non-coding sequence interrupting a eukaryotic gene's exons; transcribed into hnRNA but excised before translation.", def_cn: "真核基因中中断外显子的非编码序列；被转录进入hnRNA，但在翻译前被切除。" },
    { cz: "čepička (cap)", en: "5' cap", cn: "帽子结构", def_en: "A 7-methylguanosine linked via an unusual 5'-5' triphosphate bond to the transcript's first nucleotide; graded cap-0/1/2 by extent of 2'-OH ribose methylation.", def_cn: "通过不寻常的5'-5'三磷酸键连接到转录本第一个核苷酸上的7-甲基鸟苷；根据2'-OH核糖甲基化的程度分为帽子-0/1/2。" },
    { cz: "poly(A)-konec", en: "poly(A) tail", cn: "poly(A)尾", def_en: "A 3' tail of 20-250 adenine nucleotides added post-transcriptionally by poly(A)-polymerase after cleavage near the AAUAA signal.", def_cn: "转录后由poly(A)聚合酶在AAUAA信号附近切割后加上的3'端20-250个腺嘌呤核苷酸尾巴。" },
    { cz: "AAUAA (terminační signál)", en: "AAUAA (termination signal)", cn: "AAUAA（终止信号）", def_en: "A highly conserved pentanucleotide sequence marking the cleavage/polyadenylation site; its DNA complement is called the termination signal.", def_cn: "标记切割/多聚腺苷酸化位点的高度保守五核苷酸序列；其DNA互补序列称为终止信号。" },
    { cz: "sestřih (splicing)", en: "splicing", cn: "剪接", def_en: "Removal of introns from hnRNA by ribonucleases and rejoining of exons, producing mature, translatable mRNA.", def_cn: "由核糖核酸酶从hnRNA中去除内含子并重新连接外显子的过程，生成成熟的、可翻译的mRNA。" },
    { cz: "nehistonové proteiny", en: "non-histone proteins", cn: "非组蛋白型蛋白质", def_en: "Proposed eukaryotic DNA-binding regulatory proteins, synthesised from dedicated regulatory genes, analogous in role to the bacterial repressor/activator.", def_cn: "推测中的真核DNA结合调节蛋白，由专门的调节基因合成，其作用类似于细菌的阻遏物/激活蛋白。" },
    { cz: "spliceosom (snRNP)", en: "spliceosome (snRNP)", cn: "剪接体（snRNP）", def_en: "A 50-60S particle built from small nuclear ribonucleoproteins (snRNP), pre-mRNA and associated proteins, that carries out intron splicing at the conserved GU...AG splice-site boundaries.", def_cn: "由小核核糖核蛋白（snRNP）、前体mRNA及相关蛋白质构成的50-60S颗粒，在保守的GU...AG剪接位点边界处执行内含子剪接。" },
    { cz: "adenylátcyklasa / cAMP", en: "adenylate cyclase / cAMP", cn: "腺苷酸环化酶／cAMP", def_en: "A hormone-activated, membrane-bound enzyme that synthesises cAMP; cAMP then acts on protein kinase similarly to the hormone itself, serving as an effector in most organisms.", def_cn: "一种受激素激活的膜结合酶，催化cAMP的合成；cAMP随后以类似激素本身的方式作用于蛋白激酶，在大多数生物中充当效应物。" },
    { cz: "proinhibitor / inhibitor translace", en: "proinhibitor / inhibitor of translation initiation", cn: "翻译起始前抑制物／抑制物", def_en: "A protein-kinase-based inhibitor of polypeptide chain initiation, NOT itself cAMP-regulated; its inactive proinhibitor form is converted to the active inhibitor by phosphorylation from a separate, cAMP-dependent protein kinase.", def_cn: "一种基于蛋白激酶的多肽链起始抑制物，本身不受cAMP调节；其无活性的前抑制物形式经由另一种依赖cAMP的蛋白激酶磷酸化后转变为有活性的抑制物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structurally distinguishes cap-1 from cap-0?",
      q_cn: "从结构上看，帽子-1与帽子-0有何区别？",
      options: ["Cap-1 lacks the 7-methylguanosine residue entirely", "Cap-1 has additional 2'-OH ribose methylation on the leading nucleoside of the transcript; cap-0 is unmodified beyond the guanosine cap itself", "Cap-1 is found only in prokaryotes", "Cap-1 has a poly(A) tail attached directly to it"],
      answer: 1,
      why_en: "All three cap types share the 7-methylguanosine linked by a 5'-5' triphosphate bridge. Cap-0 stops there (typical of unicellular organisms); cap-1 ADDITIONALLY methylates the 2'-OH of the ribose on the FIRST transcribed nucleoside (typical of multicellular organisms); cap-2 methylates the first TWO nucleosides that way.",
      why_cn: "三种帽子类型都具有通过5'-5'三磷酸桥连接的7-甲基鸟苷。帽子-0仅止于此（单细胞生物常见）；帽子-1还在第一个被转录的核苷的核糖2'-OH处被甲基化（多细胞生物常见）；帽子-2则是前两个核苷都如此甲基化。"
    },
    {
      type: "mcq",
      q_en: "In poly(A) tail formation, what is the role of the AAUAA sequence?",
      q_cn: "在poly(A)尾的形成过程中，AAUAA序列起什么作用？",
      options: ["It is directly copied into the poly(A) tail itself", "It marks the site 15-25 nucleotides upstream of where the transcript is cleaved before poly(A)-polymerase acts", "It is the promoter for poly(A)-polymerase transcription", "It prevents polyadenylation when present"],
      answer: 1,
      why_en: "AAUAA is a highly conserved pentanucleotide; the primary transcript is cleaved 15-25 nucleotides DOWNSTREAM of it (mutations in AAUAA block cleavage and polyadenylation), and only then does poly(A)-polymerase build the 20-250-nucleotide poly(A) tail from ATP at the new 3' end.",
      why_cn: "AAUAA是一段高度保守的五核苷酸序列；初级转录产物在其下游15-25个核苷酸处被切割（AAUAA的突变会阻断切割与多聚腺苷酸化），随后poly(A)聚合酶才利用ATP在新形成的3'端合成20-250个核苷酸的poly(A)尾。"
    },
    {
      type: "short",
      q_en: "Using the ovalbumin gene example, put these steps in the correct order: splicing; transcription; capping and polyadenylation.",
      q_cn: "以卵清蛋白基因为例，将以下步骤按正确顺序排列：剪接；转录；加帽与多聚腺苷酸化。",
      accept: ["transcription", "capping", "splicing", "转录", "加帽", "剪接"],
      answer_en: "(1) Transcription of the 7700 bp gene into the primary transcript, hnRNA (which still contains all introns and exons). (2) Capping and polyadenylation of that primary transcript. (3) Splicing — introns are excised and exons rejoined, yielding the mature, 1872-nucleotide ovalbumin mRNA. Note capping/polyadenylation happen BEFORE splicing, on the still intron-containing transcript.",
      answer_cn: "(1) 将7700 bp的基因转录为初级转录产物hnRNA（此时仍包含全部内含子和外显子）。(2) 对该初级转录产物进行加帽和多聚腺苷酸化。(3) 剪接——内含子被切除、外显子重新连接，生成成熟的、长1872个核苷酸的卵清蛋白mRNA。注意加帽/多聚腺苷酸化发生在剪接之前，是在仍含有内含子的转录本上进行的。"
    },
    {
      type: "mcq",
      q_en: "What TWO sequence elements are necessary and sufficient to define a splice site, and what recognises them?",
      q_cn: "定义剪接位点所必需且充分的两个序列元件是什么？由什么来识别它们？",
      options: [
        "A TATA box and a poly(A) signal, recognised by RNA polymerase II",
        "An invariant GU at the intron's 5' edge and an equally invariant AG at its 3' edge, recognised by the snRNP-based spliceosome (50-60S)",
        "The 7-methylguanosine cap and the AAUAA signal, recognised by poly(A)-polymerase",
        "A Shine-Dalgarno sequence, recognised by the small ribosomal subunit"
      ],
      answer: 1,
      why_en: "The book states GU at the intron's 5' edge and invariant AG at its 3' edge are necessary and sufficient to define the splice site; splicing itself is carried out by small nuclear ribonucleoproteins (snRNP) acting as a 50-60S particle called the spliceosome. The cap/AAUAA/Shine-Dalgarno elements belong to entirely different steps (capping, polyadenylation, and prokaryotic translation initiation respectively).",
      why_cn: "教材指出，内含子5′端保守的GU序列与3′端恒定的AG序列，是定义剪接位点的必要且充分条件；剪接本身由小核核糖核蛋白（snRNP）以50-60S颗粒——即剪接体——的形式完成。帽子/AAUAA/Shine-Dalgarno等元件分别属于完全不同的步骤（加帽、多聚腺苷酸化，以及原核翻译起始）。"
    },
    {
      type: "short",
      q_en: "How can hormones regulate eukaryotic gene transcription, and how does the SAME cAMP/protein-kinase system also gate translation itself?",
      q_cn: "激素如何调节真核基因的转录？同一套cAMP/蛋白激酶系统又如何同时控制翻译本身？",
      accept: ["corepressor", "receptor-hormone", "protein kinase", "adenylate cyclase", "cAMP", "proinhibitor", "inhibitor", "阻遏物", "蛋白激酶", "腺苷酸环化酶"],
      answer_en: "A hormone can act like a corepressor, forming a repressor-hormone (receptor-hormone) complex that acts directly on DNA or activates protein kinase, which phosphorylates DNA-binding proteins that influence transcription. Hormones also activate membrane-bound adenylate cyclase, which makes cAMP; cAMP affects protein kinase similarly to the hormone itself. Separately, translation initiation is gated by a proinhibitor/inhibitor pair: the inhibitor is a protein kinase NOT regulated by cAMP, but it is switched on by phosphorylation carried out by a DIFFERENT, cAMP-dependent protein kinase — so the same cAMP signal that tunes transcription also reaches into translational control.",
      answer_cn: "激素可以像阻遏物一样发挥作用，形成阻遏物-激素（受体-激素）复合物，直接作用于DNA，或激活蛋白激酶，使影响转录的DNA结合蛋白发生磷酸化。激素还能激活膜结合的腺苷酸环化酶生成cAMP；cAMP对蛋白激酶的影响方式与激素本身类似。另外，翻译起始由一对前抑制物/抑制物调控：该抑制物是一种不受cAMP调节的蛋白激酶，但它由另一种依赖cAMP的蛋白激酶通过磷酸化而激活——因此同一个cAMP信号既能调节转录，也能延伸到翻译控制层面。"
    }
  ],
  oral: {
    q_en: "Describe how eukaryotic gene regulation differs from the bacterial operon model, how a primary transcript matures into functional mRNA including splicing, and how hormones and cAMP extend this regulation to translation itself.",
    q_cn: "描述真核基因调节与细菌操纵子模型有何不同、初级转录产物如何成熟为有功能的mRNA（包括剪接），以及激素和cAMP如何把这种调节延伸到翻译本身。",
    model_en: "In positive regulation generally, a regulatory protein binds the promoter and reshapes the conformation of the neighbouring DNA, making it easier for RNA-polymerase to engage the DNA strand and synthesise mRNA by base complementarity. Regulation of protein synthesis in multicellular eukaryotes departs from the bacterial operon scheme described for lac and trp, and is explained by several models, none yet fully confirmed experimentally; one supposes that a gene promoter is still involved, as in lower eukaryotes, but that each eukaryotic gene likely carries several promoters to which RNA-polymerase can attach, with non-histone proteins that interact with DNA serving as the regulatory proteins, themselves the products of dedicated regulatory genes. Transcription is further tuned by the existence of several RNA-polymerases that differ in their affinity for different promoters, so that some structural genes are transcribed preferentially. A fundamental structural difference from prokaryotic genes is that the coding sequences, or exons, of most eukaryotic genes alternate with non-coding stretches called introns, so the primary transcript, known as heterogeneous nuclear RNA, is far longer than the mature message and must be processed through several steps to become functional. Eukaryotic mRNA acquires a special five-prime cap, built from a seven-methylguanosine residue joined by an unusual five-prime to five-prime triphosphate bridge to the first nucleotide of the transcript; depending on whether the ribose of the first one or first two transcribed nucleosides is also methylated, the cap is classed as cap-zero, cap-one or cap-two, and it allows the ribosome to recognise the message while the region just downstream carries the actual start point of translation. At the other end, almost all eukaryotic mRNAs acquire a three-prime poly-A tail of twenty to two hundred fifty adenine nucleotides, added after the primary transcript is cleaved fifteen to twenty-five nucleotides downstream of a highly conserved AAUAA sequence. Only after capping and polyadenylation are the non-coding introns excised and the coding exons rejoined, a process called splicing, and the splice sites themselves are defined by nothing more than an invariant GU at the intron's five-prime edge and an equally invariant AG at its three-prime edge, recognised by small nuclear ribonucleoproteins acting together as a fifty-to-sixty-S particle called the spliceosome; the chicken ovalbumin gene illustrates the whole sequence nicely, its seven thousand seven hundred base pairs of alternating exons and introns being transcribed, capped, polyadenylated and finally spliced down to a mature messenger RNA of just eighteen hundred seventy-two nucleotides. Regulation does not stop once mature mRNA exists: selective transport of mRNA into the cytoplasm is itself a control point, and a small fraction of hnRNA may even escape normal processing and retain an intron, so that translation of the retained stretch could in principle let a single gene give rise to several related proteins. Most changes in protein synthesis actually occur during development and differentiation, usually affecting a whole set of enzymes at once under hormonal control: a hormone can act like a corepressor, forming a repressor-hormone complex that acts directly on DNA or, alternatively, activates the enzyme protein kinase, which phosphorylates DNA-binding proteins that in turn influence transcription; hormones also activate the membrane-bound enzyme adenylate cyclase, which makes cAMP, and cAMP affects protein kinase in much the same way the hormone itself does, serving as an effector in most organisms. This same cAMP machinery reaches all the way into translation: initiation of the polypeptide chain is gated by a proinhibitor and inhibitor pair, where the inhibitor is itself a protein kinase that is not regulated by cAMP directly, but is switched from its inactive proinhibitor form into the active inhibitor by phosphorylation carried out by a separate, cAMP-dependent protein kinase.",
    checklist: [
      "Explained the general mechanism of positive regulation via promoter-bound protein",
      "Noted eukaryotic regulation is model-based and not yet fully confirmed",
      "Mentioned multiple promoters per gene and non-histone regulatory proteins",
      "Mentioned multiple RNA-polymerases with different promoter affinities",
      "Defined exon vs intron and named hnRNA as the primary transcript",
      "Described the cap structure and distinguished cap-0/1/2",
      "Described poly(A) tail formation via the AAUAA signal and poly(A)-polymerase",
      "Described splicing and got the ORDER right (cap/poly-A before splicing)",
      "Gave the GU...AG splice-site rule and named the spliceosome/snRNP",
      "Used the ovalbumin example with roughly correct numbers (7700 bp gene, 1872 nt mRNA)",
      "Mentioned selective mRNA transport and the intron-retention/multiple-proteins-per-gene hypothesis",
      "Described hormonal regulation via the repressor-hormone complex and/or protein kinase",
      "Named adenylate cyclase/cAMP as a further regulatory layer, and connected it to the translation-initiation proinhibitor/inhibitor system"
    ]
  }
},

{
  id: "4-3-1",
  book: "cz",
  topicKey: "protein-folding-and-denaturation",
  chapter: 4,
  section: "4.3.1",
  czTitle: "Nekovalentní interakce a uspořádání peptidového řetězce do biologicky aktivní formy",
  enTitle: "Non-covalent interactions and folding of the polypeptide chain into its biologically active form",
  cnTitle: "非共价相互作用与多肽链折叠为生物活性构象",
  pages: [108, 109, 110],
  coverage: "full",
  coverageNote: "All three pages verified against the extracted scans. p.108 carries the general 4.3 preamble (the three categories of post-translational modification) and the opening of 4.3.1; p.109 covers chaperone/chaperonin-assisted folding (Obr. 4.52) and introduces the prolyl isomerase and disulfide-isomerase enzymes; the top of p.110, before the 4.3.2 heading begins, carries Obr. 4.53 (the peptidylprolyl-cis,trans-isomerase reaction) and Obr. 4.54 (protein-disulfide-isomerase correcting a misfolded intermediate), both read in full.",
  cnNote: { topic: null, title: "翻译后修饰——已查全部16卷，未发现独立主题", status: "pending" },
  summary: {
    en: "Post-translational modification comprises three types of process — non-covalent interactions that determine the spatial arrangement of the chain, covalent modification of the backbone (mainly for export from the cell), and covalent modification of amino acid side chains. This section covers the first: although the spatial arrangement of a polypeptide chain is basically dictated by its amino acid sequence, only some proteins fold spontaneously into their lowest-energy, biologically active conformation. For others, folding of the freshly made (nascent) chain is a GUIDED process, carried out with the help of dedicated proteins called CHAPERONES, and further stabilised by proline cis-trans isomerisation and disulfide bond formation.",
    cn: "翻译后修饰包括三类过程——决定肽链空间构象的非共价相互作用、主要用于蛋白质出胞转运的骨架共价修饰，以及氨基酸侧链的共价修饰。本节讲的是第一类：多肽链的空间构象原则上由其氨基酸序列决定，但只有部分蛋白质能自发折叠为能量最低的生物活性构象。对另一些蛋白质而言，新生肽链的折叠是一个受控过程，需要借助被称为「分子伴侣」（chaperone）的专门蛋白质完成，并通过脯氨酸顺反异构化和二硫键形成而进一步得到稳定。"
  },
  points: [
    { cz: "tři druhy posttranslačních modifikací", en: "Post-translational modification of a nascent chain falls into THREE types of process: (1) NON-COVALENT INTERACTIONS that determine the spatial arrangement of the chain, the association/aggregation of separate chains, and non-covalent interaction with ligands; (2) COVALENT MODIFICATION OF THE BACKBONE, applied especially during transport of proteins out of the cell; (3) COVALENT MODIFICATION OF AMINO ACID SIDE CHAINS. Side chains may already be modified within aminoacyl-tRNA complexes, but never before the aminoacyl-tRNA itself has formed.", cn: "新生肽链的翻译后修饰分为三类过程：(1) 决定肽链空间构象、各条链缔合聚集、以及与配体发生非共价相互作用的非共价相互作用；(2) 主要用于蛋白质出胞转运的骨架共价修饰；(3) 氨基酸侧链的共价修饰。侧链修饰可以早在氨酰-tRNA复合物阶段就已发生，但绝不会早于氨酰-tRNA本身生成之前。" },
    { cz: "energeticky nejvýhodnější ≠ biologicky aktivní konformace", en: "Spatial arrangement is in principle determined by the amino acid sequence, and some proteins — mostly small ones, plus a few more complex ones — pass SPONTANEOUSLY into the biologically active conformation, which coincides with the lowest-energy conformation. For MANY OTHER proteins, however, the biologically active conformation is NOT the same as the energetically most favourable one, and the arrangement of the freshly synthesised (NASCENT) chain proceeds in a CONTROLLED, guided way. Various serious neurological diseases are caused precisely by incorrect arrangement of protein structures.", cn: "空间构象原则上由氨基酸序列决定，部分蛋白质——多为小分子蛋白质，加上少数更复杂的蛋白质——会自发进入生物活性构象，且该构象恰好与能量最低构象一致。但对许多其他蛋白质而言，生物活性构象并不等同于能量上最有利的构象，新合成的（新生）肽链的折叠是以一种受控、被引导的方式进行的。多种严重的神经系统疾病正是由蛋白质结构的错误折叠所引起。" },
    { cz: "chaperony (Hsp70)", en: "Specific proteins that catalyse the 'folding' of the nascent chain into its needed, biologically active form during post-translational modification in the endoplasmic reticulum were named CHAPERONES. Obr. 4.52a shows the Hsp70-ATP chaperone binding a nascent chain as it emerges from the ribosome; release of Pᵢ gives a PARTIALLY FOLDED intermediate still bound to the chaperone, and consumption of ATP (→ ADP) then releases the finished NATIVE protein.", cn: "在内质网中于翻译后修饰阶段催化新生肽链「折叠」为所需生物活性形式的特异蛋白质被称为分子伴侣（chaperone）。图 4.52a 显示 Hsp70-ATP 分子伴侣结合从核糖体上合成出的新生肽链；释放 Pᵢ 后生成仍与分子伴侣结合的部分折叠中间体，随后消耗 ATP（生成 ADP）释放出折叠完成的天然蛋白质。" },
    { cz: "chaperoniny (GroEL/GroES)", en: "Obr. 4.52b shows a second system: the protein enters the barrel-shaped GroEL complex; binding of ATP and the cap protein GroES forms the CHAPERONIN complex, within which folding takes place; release of ADP + Pᵢ (and of GroES) then liberates the native protein. Chaperones and chaperonins are EVOLUTIONARILY CONSERVED proteins found in both eukaryotic and prokaryotic cells; they recognise and stabilise partially folded structural intermediates and also participate in REPAIRING incorrectly folded chains.", cn: "图 4.52b 显示第二套系统：蛋白质进入桶状的 GroEL 复合物；ATP 与帽状蛋白 GroES 的结合形成「伴侣素」（chaperonin）复合物，折叠在其内部完成；随后 ADP + Pᵢ（以及 GroES）的释放使天然蛋白质得以释出。分子伴侣与伴侣素都是进化上保守的蛋白质，真核与原核细胞中均存在；它们识别并稳定部分折叠的结构中间体，也参与修复错误折叠的肽链。" },
    { cz: "peptidylprolyl-cis,trans-izomerasa (PPIasa)", en: "A separate group of proteins, the PEPTIDYLPROLYL-CIS,TRANS-ISOMERASES (PPIases), catalyse rotation around a specific peptide bond and are widespread from bacteria to mammalian cells. ALL X-Pro bonds (X = any amino acid residue) are FIRST SYNTHESISED IN THE TRANS CONFIGURATION, yet about 6% of X-Pro bonds in native proteins are found in the CIS configuration, most often within β-turns; PPIase catalyses this cis-trans interconversion (Obr. 4.53).", cn: "另一组独立的蛋白质——肽基脯氨酰顺反异构酶（PPIase）——催化特定肽键周围的旋转，广泛分布于从细菌到哺乳动物细胞的各类生物。所有 X-Pro 肽键（X 为任意氨基酸残基）最初都以反式（trans）构型合成，但天然蛋白质中约 6% 的 X-Pro 键实际上以顺式（cis）构型存在，最常见于 β-转角处；PPIase 催化这种顺反相互转化（图 4.53）。" },
    { cz: "disulfidové vazby a protein-disulfid-izomerasa", en: "Covalent modification of sulfhydryl groups by oxidation to DISULFIDE bonds also contributes significantly to stabilising the biologically active form (developed further in 4.3.3), though formation of an S–S bond is NOT inherently specific. Obr. 4.54 shows how an unfolded chain, after chaperone-assisted folding into a POORLY FOLDED intermediate carrying free SH groups and mispaired S–S bonds, is corrected in two further steps: the enzyme PROTEIN-DISULFID-ISOMERASE (step 1) exchanges disulfide bonds between pairs of cysteine residues to reach the correctly paired Pro(cis) state, after which PPIase (step 2) converts it to the native Pro(trans) form.", cn: "巯基氧化为二硫键的共价修饰同样对稳定生物活性构象有重要贡献（详见 4.3.3 节），不过 S–S 键的形成本身并无特异性。图 4.54 显示：未折叠的肽链经分子伴侣协助折叠为带有游离 SH 基团及错误配对二硫键的「错误折叠」中间体后，还需经过两步校正——首先由蛋白质二硫键异构酶（步骤 1）在半胱氨酸残基对之间交换二硫键，使其达到正确配对的 Pro(cis) 状态；随后由 PPIase（步骤 2）将其转化为天然的 Pro(trans) 构象。" }
  ],
  terms: [
    { cz: "chaperon", en: "chaperone", cn: "分子伴侣", def_en: "An Hsp70-family protein that binds a nascent chain at the ribosome and, via ATP hydrolysis, drives it to a partially folded and then native state.", def_cn: "Hsp70 家族蛋白，在核糖体上结合新生肽链，通过 ATP 水解将其推向部分折叠、继而天然的状态。" },
    { cz: "chaperonin (GroEL/GroES)", en: "chaperonin (GroEL/GroES)", cn: "伴侣素 (GroEL/GroES)", def_en: "A barrel-shaped complex (GroEL) capped by GroES that provides an enclosed, ATP-driven folding chamber.", def_cn: "由 GroES 加帽的桶状复合物（GroEL），提供一个封闭的、由 ATP 驱动的折叠腔室。" },
    { cz: "peptidylprolyl-cis,trans-izomerasa", en: "peptidylprolyl-cis,trans-isomerase (PPIase)", cn: "肽基脯氨酰顺反异构酶 (PPIase)", def_en: "Catalyses interconversion of cis/trans Xaa-Pro peptide bonds; about 6% of X-Pro bonds are cis in native proteins, mostly at β-turns.", def_cn: "催化 Xaa-Pro 肽键顺式/反式构型的相互转化；天然蛋白质中约 6% 的 X-Pro 键为顺式，多见于 β-转角。" },
    { cz: "protein-disulfid-izomerasa", en: "protein-disulfide-isomerase", cn: "蛋白质二硫键异构酶", def_en: "Exchanges disulfide bonds between cysteine pairs to correct mispairing and reach the native disulfide arrangement.", def_cn: "在半胱氨酸残基对之间交换二硫键，纠正错误配对，达到天然的二硫键排布。" },
    { cz: "nascentní protein", en: "nascent protein", cn: "新生蛋白质", def_en: "The freshly synthesised, not-yet-folded/modified polypeptide chain immediately after translation, as opposed to the mature, biologically active protein.", def_cn: "翻译刚完成、尚未折叠/修饰的新合成多肽链，与成熟的、具有生物活性的蛋白质相对。" },
    { cz: "X-Pro vazba", en: "X-Pro bond", cn: "X-Pro 肽键", def_en: "The peptide bond preceding a proline residue; always synthesised trans, with about 6% isomerising to cis in the native structure.", def_cn: "脯氨酸残基之前的肽键；合成时始终为反式，天然结构中约 6% 会异构化为顺式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to this section, what is true of the relationship between a protein's biologically active conformation and its lowest-energy conformation?",
      q_cn: "根据本节内容，蛋白质的生物活性构象与其能量最低构象之间是什么关系？",
      options: [
        "They are always identical, because folding is thermodynamically driven",
        "For many proteins they are NOT the same, and folding of the nascent chain is a guided process",
        "The biologically active conformation is always of higher energy and inherently unstable",
        "Only chaperonins, never chaperones, can resolve this difference"
      ],
      answer: 1,
      why_en: "For SOME (mostly small) proteins the two conformations do coincide and folding is spontaneous. But the book stresses that for MANY OTHER proteins they are NOT the same — which is exactly why a guided, chaperone-assisted folding process exists, and why misfolding is linked to serious neurological disease.",
      why_cn: "对某些（多为小分子）蛋白质而言，两种构象确实一致，折叠是自发的。但教材强调，对许多其他蛋白质而言二者并不相同——这正是需要分子伴侣引导折叠过程的原因，也是错误折叠与严重神经系统疾病相关联的原因。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes the GroEL/GroES chaperonin system from the Hsp70 chaperone system shown in Obr. 4.52?",
      q_cn: "图 4.52 中 GroEL/GroES 伴侣素系统与 Hsp70 分子伴侣系统的区别是什么？",
      options: [
        "The Hsp70 system encloses the substrate inside a folding chamber capped by GroES",
        "The GroEL/GroES system binds the nascent chain directly at the ribosome exit tunnel",
        "GroEL, capped by GroES on ATP binding, forms an enclosed chaperonin chamber in which folding occurs, ending in release of ADP + Pᵢ and the native protein",
        "Neither system requires ATP"
      ],
      answer: 2,
      why_en: "Obr. 4.52 shows two separate systems: (a) Hsp70-ATP binds the nascent chain as it emerges from the ribosome; (b) GroEL, capped by GroES upon ATP binding, forms an enclosed chaperonin chamber in which folding proceeds, ending with release of ADP + Pᵢ and the native protein. Both consume ATP, but only the GroEL/GroES system is an enclosed chamber.",
      why_cn: "图 4.52 显示两套独立系统：(a) Hsp70-ATP 在新生肽链从核糖体释出时与之结合；(b) GroEL 结合 ATP 后由 GroES 加帽，形成一个封闭的伴侣素折叠腔，折叠在其中进行，最终释放 ADP + Pᵢ 及天然蛋白质。两者都消耗 ATP，但只有 GroEL/GroES 系统构成封闭腔室。"
    },
    {
      type: "short",
      q_en: "What fraction of X-Pro peptide bonds are found in the cis configuration in native proteins, where do they mostly occur, and what enzyme interconverts the two forms?",
      q_cn: "天然蛋白质中有多大比例的 X-Pro 肽键呈顺式构型？它们主要出现在什么结构中？什么酶催化两种构型的相互转化？",
      accept: ["6%", "cis", "trans", "beta", "turn", "isomerase", "顺式", "6", "转角"],
      answer_en: "All X-Pro bonds are first synthesised in the trans configuration, but about 6% of X-Pro bonds in native proteins are found in the cis configuration, most often within β-turns. The peptidylprolyl-cis,trans-isomerase (PPIase) catalyses interconversion between the two forms.",
      answer_cn: "所有 X-Pro 键最初都以反式构型合成，但天然蛋白质中约 6% 的 X-Pro 键以顺式构型存在，最常见于 β-转角处。肽基脯氨酰顺反异构酶（PPIase）催化这两种构型之间的相互转化。"
    },
    {
      type: "mcq",
      q_en: "In Obr. 4.54, what is the correct order of correction of a poorly-folded intermediate?",
      q_cn: "在图 4.54 中，对错误折叠中间体进行校正的正确顺序是什么？",
      options: [
        "PPIase acts first to fix proline geometry, then protein-disulfide-isomerase re-pairs the cysteines",
        "Protein-disulfide-isomerase re-pairs the disulfide bonds first (poorly folded → Pro-cis), then PPIase converts the chain to the native Pro-trans form",
        "Both enzymes act simultaneously and independently, with no defined order",
        "Only protein-disulfide-isomerase is needed; PPIase acts solely on fully unfolded chains"
      ],
      answer: 1,
      why_en: "Obr. 4.54 numbers the steps: (1) protein-disulfid-isomerase exchanges disulfide bonds among the poorly-folded chain's cysteine residues to reach the Pro(cis) intermediate; (2) PPIase then isomerises the proline bond to give the native Pro(trans) protein.",
      why_cn: "图 4.54 对步骤进行了编号：(1) 蛋白质二硫键异构酶在错误折叠肽链的半胱氨酸残基间交换二硫键，形成 Pro(cis) 中间体；(2) 随后 PPIase 将脯氨酸肽键异构化，得到天然的 Pro(trans) 蛋白质。"
    }
  ],
  oral: {
    q_en: "How does a nascent polypeptide chain fold into its biologically active form?",
    q_cn: "新生多肽链是如何折叠为其生物活性构象的？",
    model_en: "The spatial arrangement of a polypeptide chain is in principle dictated by its amino acid sequence, and for some proteins, mostly small ones, this is enough: they pass spontaneously into the biologically active conformation, which coincides with the conformation of lowest energy. For many other proteins, however, the biologically active conformation is not the same as the energetically most favourable one, so the folding of the freshly made, nascent chain has to proceed in a controlled, guided way, and various serious neurological diseases are caused precisely by incorrect folding of protein structures. This guided folding is carried out by specific proteins called chaperones, discovered relatively recently, which act during post-translational modification in the endoplasmic reticulum. One system uses the chaperone Hsp70 bound to ATP, which grips the nascent chain as it emerges from the ribosome; release of a phosphate gives a partially folded intermediate still held by the chaperone, and hydrolysis of ATP to ADP then releases the finished, native protein. A second, related system uses the barrel-shaped complex GroEL, which together with its cap protein GroES and ATP forms an enclosed chaperonin chamber inside which folding takes place, again ending with release of ADP and phosphate and liberation of the native protein. Chaperones and chaperonins are evolutionarily conserved in both eukaryotes and prokaryotes, and besides assisting first-time folding they also help repair chains that folded incorrectly. Folding is stabilised further by two more enzyme systems. Peptidylprolyl-cis,trans-isomerase acts on the bonds preceding proline residues: every X-Pro bond is first made in the trans configuration, yet about six percent of such bonds in native proteins are found in the cis form, mostly within beta-turns, and this enzyme catalyses the interconversion. And covalent modification of sulfhydryl groups by oxidation to disulfide bonds also stabilises the active form, though disulfide formation on its own is not specific; a poorly folded intermediate carrying mispaired disulfide bonds is first corrected by protein-disulfide-isomerase, which exchanges bonds between cysteine pairs, and is only afterwards isomerised at its proline bonds to reach the final native structure.",
    checklist: [
      "Stated that biologically active conformation is not always the lowest-energy one, and linked misfolding to neurological disease",
      "Named chaperones and described the Hsp70-ATP cycle (bind nascent chain, release Pᵢ, partial fold, ATP→ADP, native protein)",
      "Described the GroEL/GroES chaperonin as an enclosed ATP-driven folding chamber",
      "Noted chaperones/chaperonins are evolutionarily conserved and also repair misfolded chains",
      "Explained PPIase and the ~6% cis X-Pro bonds concentrated at β-turns",
      "Described protein-disulfide-isomerase correcting mispaired S-S bonds, and its order relative to PPIase in Obr. 4.54"
    ]
  }
},

{
  id: "4-3-2",
  book: "cz",
  topicKey: "protein-targeting-and-degradation",
  chapter: 4,
  section: "4.3.2",
  czTitle: "Posttranslační modifikace polypeptidového řetězce a přenos proteinů přes membránu",
  enTitle: "Post-translational modification of the polypeptide chain and transport of proteins across the membrane",
  cnTitle: "多肽链的翻译后修饰与蛋白质的跨膜转运",
  pages: [110, 111],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans. The section runs from partway down p.110 (the 4.3.2 heading, right after Obr. 4.53/4.54) through most of p.111, stopping where the 4.3.3 heading begins; Obr. 4.55 (translocation of the nascent chain into the ER) and the full preproinsulin → proinsulin → insulin worked example were both read in full.",
  cnNote: { topic: null, title: "蛋白质转运/信号肽 (笔记无编号，附于翻译章节末尾 p.224 附近，非独立主题)", status: "partial" },
  summary: {
    en: "Proteins destined for secretion, and probably lysosomal proteins too, are often first made as larger PREPROTEINS or PREPROPROTEINS, later converted to their active form by partial hydrolysis. The extra N-terminal piece is a SIGNAL SEQUENCE that directs the ribosome to the endoplasmic reticulum and threads the growing chain into the ER lumen as it is made; many secreted proteins then undergo a further, second proteolytic step, illustrated here by the conversion of preproinsulin to active insulin.",
    cn: "分泌蛋白（可能溶酶体蛋白也是如此）常常最初以更大的前体蛋白或前-前体蛋白的形式合成，之后再经部分水解转变为活性形式。多出来的 N 端部分是一段信号序列，它引导核糖体定位到内质网，并使新合成的肽链边合成边穿入内质网腔。许多分泌蛋白随后还要经历第二步蛋白水解，本节以前胰岛素原转变为活性胰岛素为例说明这一过程。"
  },
  points: [
    { cz: "pre(pro)proteiny", en: "Proteins destined for SECRETION outside the cell, and probably lysosomal proteins too, are often primarily synthesised as PREPROTEINS or PREPROPROTEINS — i.e. as larger molecules later converted to the biologically active form by PARTIAL HYDROLYSIS, in which one or more peptide fragments are cleaved from the original chain (e.g. blood plasma proteins).", cn: "注定要分泌到细胞外的蛋白质（可能溶酶体蛋白也是如此）常常最初以前体蛋白或前-前体蛋白的形式合成——即以较大分子的形式合成，之后经部分水解转变为生物活性形式，此过程中原链上会被切下一个或多个肽段（例如血浆蛋白）。" },
    { cz: "signální sekvence", en: "Pre(pro)forms have, in their native state, a SIGNAL SEQUENCE of amino acids, encoded at the mRNA level by signal codons that follow IMMEDIATELY AFTER the initiation codon — so the signal sequence sits at the N-TERMINUS of the chain. According to signal theory its primary job is to attach the ribosome to a receptor on the outer face of the ER.", cn: "前（前）体蛋白在其天然状态下带有一段氨基酸信号序列，该序列在 mRNA 水平上由紧跟在起始密码子之后的信号密码子编码——因此信号序列位于肽链的 N 端。根据信号假说，其首要作用是将核糖体连接到内质网外表面的一个受体上。" },
    { cz: "SRP a jeho receptor", en: "This attachment is mediated by the ribonucleoprotein SRP (signal recognition particle), which binds SPECIFICALLY to the already-synthesised signal sequence; a separate SPECIFIC RECEPTOR for SRP, located on the ER membrane, also participates in docking the ribosome (Obr. 4.55). Once the ribosome has attached to the ER, SRP is released again so it can bind another signal sequence.", cn: "这种连接由核糖核蛋白 SRP（信号识别颗粒）介导，它特异性结合已合成出的信号序列；定位于内质网膜上的一个特异性 SRP 受体也参与核糖体的对接过程（图 4.55）。一旦核糖体与内质网结合，SRP 便随即释放，以便再与另一条信号序列结合。" },
    { cz: "hydrofobní jádro a nabitý konec; riboforiny", en: "The signal sequence contains predominantly HYDROPHOBIC amino acids in its MIDDLE part and CHARGED amino acids at the end of the chain. Because of this, the charged end stays OUTSIDE the ER membrane while the hydrophobic middle inserts into the nonpolar membrane, forming a β-sheet structure with the adjacent membrane proteins RIBOPHORIN I and II (riboforiny); this non-covalent interaction forces open a 'pore' bounded by the ribophorins, letting the rest of the growing chain thread into the ER.", cn: "信号序列的中段以疏水性氨基酸为主，链末端则为带电氨基酸。正因如此，在与内质网膜相互作用时，带电的一端留在膜外，而疏水的中段则嵌入非极性的内质网膜，与邻近的膜蛋白核糖蛋白 I 和 II（riboforin）形成 β-折叠结构；这种非共价相互作用随即迫使由核糖蛋白围成的「孔道」打开，使新合成肽链的其余部分得以穿入内质网。" },
    { cz: "signální peptidasa", en: "Once proteosynthesis of the pre(pro)protein is finished — i.e. as soon as the end of the signal sequence appears inside the ER lumen — it is cleaved off hydrolytically by SIGNAL PEPTIDASE, an enzyme bound to the membrane.", cn: "一旦前（前）体蛋白的蛋白质合成完成——也就是信号序列末端一出现在内质网腔内——它便立即被结合在膜上的信号肽酶水解切除。" },
    { cz: "cesta k sekreci: mikrovesikuly → Golgi → sekreční granula", en: "The rest of the chain is transported into the ER cisternae and then packaged into microvesicles that bud off the ER and travel to the GOLGI APPARATUS, where the protein may be further modified. In its final form it is released as SECRETORY GRANULES, which travel to target organelles or fuse with the plasma membrane, releasing the transported protein into the extracellular space.", cn: "肽链其余部分被转运进入内质网池腔，随后被「包装」进从内质网上脱离、驶向高尔基体的微小囊泡中。蛋白质在高尔基体中可能被进一步修饰，最终以分泌颗粒的形式释放，这些颗粒运送到目标细胞器，或与质膜融合，将所转运的蛋白质释放到细胞外。" },
    { cz: "dvoustupňová proteolytická modifikace", en: "Many proteins, especially secreted ones, undergo a TWO-STEP proteolytic modification, usually carried out in the Golgi apparatus: first the signal sequence is released (preproprotein → preprotein), then SELECTIVE PROTEOLYSIS follows.", cn: "许多蛋白质，尤其是分泌型蛋白质，要经历两步蛋白水解修饰，通常发生在高尔基体中：第一步释放信号序列（前-前体蛋白 → 前体蛋白），第二步是选择性蛋白水解。" },
    { cz: "příklad: preproinsulin → proinsulin → insulin", en: "WORKED EXAMPLE — insulin is originally synthesised as PREPROINSULIN, with an N-terminal signal sequence of 23 amino acids. Removing that sequence gives PROINSULIN, in which the finished A chain forms the C-TERMINAL and the B chain the N-TERMINAL part, joined in the middle by the C-PEPTIDE. Selective proteolysis then excises the C-peptide, giving active INSULIN, whose A and B chains are held together by THREE DISULFIDE BONDS. At least TWO enzymes carry out this step: an enzyme with trypsin-like specificity that cleaves off the C-peptide, and a CARBOXYPEPTIDASE that removes the dipeptide of two basic amino acids by which the C-peptide was attached.", cn: "实例——胰岛素最初以前胰岛素原的形式合成，其 N 端带有一段由 23 个氨基酸组成的信号序列。切除该序列后生成胰岛素原，其中已经成形的 A 链构成其 C 端部分、B 链构成其 N 端部分，中间由 C 肽相连。随后选择性蛋白水解切除 C 肽，生成活性胰岛素，其 A、B 两链通过三个二硫键相连。至少有两种酶参与这一步：一种具有类胰蛋白酶特异性的酶负责切除 C 肽，另一种羧肽酶则去除原先连接 C 肽的、由两个碱性氨基酸组成的二肽。" }
  ],
  terms: [
    { cz: "signální sekvence", en: "signal sequence", cn: "信号序列", def_en: "N-terminal amino acid segment, hydrophobic in the middle and charged at its end, that targets a nascent chain to the ER and is later cleaved off.", def_cn: "位于 N 端的氨基酸片段，中段疏水、末端带电，负责将新生肽链导向内质网，随后被切除。" },
    { cz: "ribonukleoprotein SRP", en: "signal recognition particle (SRP)", cn: "信号识别颗粒 (SRP)", def_en: "Ribonucleoprotein that binds the signal sequence and escorts the ribosome to its receptor on the ER membrane.", def_cn: "结合信号序列并将核糖体引导至内质网膜上其受体的核糖核蛋白。" },
    { cz: "riboforiny I a II", en: "ribophorin I and II", cn: "核糖蛋白 I 与 II", def_en: "ER membrane proteins that pair with the hydrophobic core of the signal sequence, in a β-sheet, to open the translocation pore.", def_cn: "内质网膜蛋白，与信号序列的疏水核心以 β-折叠形式配对，从而打开转运孔道。" },
    { cz: "signální peptidasa", en: "signal peptidase", cn: "信号肽酶", def_en: "Membrane-bound enzyme that cleaves the signal sequence off once it appears in the ER lumen.", def_cn: "膜结合酶，在信号序列出现于内质网腔后将其切除。" },
    { cz: "preproprotein / proprotein", en: "preproprotein / proprotein", cn: "前-前体蛋白 / 前体蛋白", def_en: "Successively smaller precursor forms converted to the mature, active protein by staged proteolysis.", def_cn: "经分阶段蛋白水解逐步转变为成熟活性蛋白的一系列前体形式。" },
    { cz: "C-peptid", en: "C-peptide", cn: "C 肽", def_en: "The middle segment of proinsulin connecting the A and B chains; excised by selective proteolysis to yield mature insulin.", def_cn: "胰岛素原中连接 A、B 两链的中段肽段；经选择性蛋白水解切除后生成成熟胰岛素。" },
    { cz: "sekreční granula", en: "secretory granule", cn: "分泌颗粒", def_en: "Final Golgi-derived vesicle carrying mature secretory protein to the plasma membrane for release by fusion.", def_cn: "源自高尔基体的最终囊泡，携带成熟分泌蛋白至质膜，通过融合释放。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The hydrophobic middle portion of a signal sequence pairs with which ER membrane proteins to open the translocation pore?",
      q_cn: "信号序列疏水的中段与哪些内质网膜蛋白配对，从而打开转运孔道？",
      options: ["Ribophorin I and II", "GroEL and GroES", "Signal peptidase and the SRP receptor", "Chaperonin and Hsp70"],
      answer: 0,
      why_en: "The hydrophobic core forms a β-sheet with the adjacent RIBOPHORINS I and II, and this non-covalent interaction is what forces the pore open. GroEL/GroES and Hsp70 belong to the separate chaperone-folding system of 4.3.1; the SRP receptor only docks the ribosome, it does not form the pore.",
      why_cn: "疏水核心与相邻的核糖蛋白 I 和 II 形成 β-折叠结构，正是这种非共价相互作用迫使孔道打开。GroEL/GroES 与 Hsp70 属于 4.3.1 节中另一套分子伴侣折叠系统；SRP 受体只负责对接核糖体，并不参与孔道的形成。"
    },
    {
      type: "mcq",
      q_en: "In the maturation of insulin, which statement is correct?",
      q_cn: "关于胰岛素的成熟过程，以下哪项陈述是正确的？",
      options: [
        "The B chain forms the C-terminal part of proinsulin, and the A chain the N-terminal part",
        "The A chain forms the C-terminal part of proinsulin and the B chain the N-terminal part, joined by the C-peptide",
        "Preproinsulin and proinsulin are the same molecule",
        "Mature insulin's A and B chains are held together only by non-covalent interactions"
      ],
      answer: 1,
      why_en: "In proinsulin the A chain is C-terminal and the B chain N-terminal, connected by the C-peptide. Preproinsulin differs from proinsulin by an extra 23-residue N-terminal SIGNAL sequence, removed first; the C-peptide is excised second, by a trypsin-like enzyme plus a carboxypeptidase, leaving mature insulin with its A and B chains held by THREE DISULFIDE BONDS, not non-covalent interactions.",
      why_cn: "在胰岛素原中，A 链位于 C 端，B 链位于 N 端，二者由 C 肽相连。前胰岛素原与胰岛素原的区别在于多出一段 23 个残基的 N 端信号序列，该序列首先被切除；随后 C 肽被一种类胰蛋白酶及一种羧肽酶切除，留下由三个二硫键（而非非共价相互作用）连接 A、B 两链的成熟胰岛素。"
    },
    {
      type: "short",
      q_en: "Why does the charged end of a signal sequence stay outside the ER membrane while its hydrophobic middle inserts into it?",
      q_cn: "为什么信号序列带电的一端留在内质网膜外，而疏水的中段却嵌入膜内？",
      accept: ["hydrophobic", "charged", "middle", "end", "疏水", "带电", "中段", "末端"],
      answer_en: "Because of how the amino acids are arranged along the sequence: the middle portion is predominantly hydrophobic, so it partitions favourably into the nonpolar lipid interior of the ER membrane, while the end of the sequence is charged and therefore stays in the polar, aqueous environment outside the membrane.",
      answer_cn: "这是由信号序列中氨基酸的排布方式决定的：中段以疏水性氨基酸为主，因而倾向于分配进入内质网膜的非极性脂质内部，而序列末端带电，因此留在膜外的极性水相环境中。"
    },
    {
      type: "mcq",
      q_en: "Which pair of enzymes carries out the selective proteolytic conversion of proinsulin to insulin?",
      q_cn: "哪一对酶完成了胰岛素原到胰岛素的选择性蛋白水解转变？",
      options: [
        "Only a trypsin-like enzyme is needed",
        "A trypsin-like enzyme cleaves off the C-peptide, and a carboxypeptidase removes the remaining dipeptide of two basic residues",
        "Only a carboxypeptidase is needed",
        "Signal peptidase completes both steps"
      ],
      answer: 1,
      why_en: "The book specifies AT LEAST TWO enzymes: one with trypsin-like specificity that excises the C-peptide, and a carboxypeptidase that then removes a dipeptide of two basic amino acids left over from the C-peptide's attachment. Signal peptidase's job is earlier and different — it removes the signal sequence, not the C-peptide.",
      why_cn: "教材指出至少需要两种酶：一种具有类胰蛋白酶特异性的酶切除 C 肽，随后一种羧肽酶去除由两个碱性氨基酸组成、原本连接 C 肽的二肽残余。信号肽酶的作用发生在更早阶段且性质不同——它切除的是信号序列，而不是 C 肽。"
    }
  ],
  oral: {
    q_en: "How is a secreted protein targeted to and translocated across the ER membrane, and how does this relate to insulin maturation?",
    q_cn: "分泌蛋白是如何被靶向并转运穿过内质网膜的？这与胰岛素的成熟过程有何关系？",
    model_en: "Proteins destined for secretion outside the cell, and probably lysosomal proteins too, are often first synthesised as larger precursor molecules, preproteins or preproproteins, which are converted to their biologically active form by partial hydrolysis later on. These precursors carry, in their native state, a signal sequence of amino acids at the N-terminus of the chain, encoded by signal codons that follow immediately after the initiation codon. According to signal theory, the job of this sequence is to attach the ribosome to a receptor on the outer face of the endoplasmic reticulum, and this is achieved through the ribonucleoprotein SRP, the signal recognition particle, which binds specifically to the already-synthesised signal sequence and is recognised in turn by its own specific receptor on the ER membrane. The signal sequence itself has a hydrophobic middle portion and a charged end; when it meets the ER membrane, the charged end stays outside while the hydrophobic middle inserts into the membrane and pairs with the proteins ribophorin I and II to form a beta-sheet, and this non-covalent interaction forces open a translocation pore through which the rest of the growing chain threads into the ER lumen as synthesis continues. Once the end of the signal sequence appears inside the lumen, it is cleaved off by the membrane-bound signal peptidase, and the SRP is released so it can act again on another ribosome. The remaining chain passes into the ER cisternae and is packaged into microvesicles that travel to the Golgi apparatus for further modification, before final release as secretory granules that fuse with the plasma membrane. Many secreted proteins go through a second, separate proteolytic step in the Golgi, and insulin is the textbook example: it starts out as preproinsulin, with a twenty-three-residue signal sequence at its N-terminus; removing that sequence gives proinsulin, in which the finished A chain occupies the C-terminal position and the B chain the N-terminal position, joined by a connecting C-peptide. Selective proteolysis then excises the C-peptide, using a trypsin-like enzyme plus a carboxypeptidase that removes the leftover dipeptide of two basic residues, and this yields the mature, active insulin molecule, in which the A and B chains are held together by three disulfide bonds.",
    checklist: [
      "Named preprotein/preproprotein and explained why a signal sequence sits at the N-terminus",
      "Described SRP binding the signal sequence and docking at its ER membrane receptor",
      "Explained the hydrophobic middle vs charged end of the signal sequence, and the ribophorin I/II pore",
      "Stated signal peptidase cleaves the sequence once it reaches the ER lumen, and SRP is recycled",
      "Traced the route: ER cisternae to microvesicles to Golgi to secretory granules to plasma membrane fusion",
      "Gave the preproinsulin to proinsulin to insulin example with the two proteolytic enzymes and three disulfide bonds"
    ]
  }
},

{
  id: "4-3-3",
  book: "cz",
  topicKey: "protein-targeting-and-degradation",
  chapter: 4,
  section: "4.3.3",
  czTitle: "Kovalentní modifikace bočních řetězců aminokyselin",
  enTitle: "Covalent modification of amino acid side chains",
  cnTitle: "氨基酸侧链的共价修饰",
  pages: [111, 112, 113, 114],
  coverage: "full",
  coverageNote: "All four pages verified against the extracted scans, from the 4.3.3 heading and its intro paragraph at the bottom of p.111 through the end of the phosphorylation/sulfation discussion on p.114, including the full structures in Obr. 4.56 (methyl derivatives: ε-N-methyl-, ε-N-dimethyl- and ε-N-trimethyllysine, and 4-methylglutamate) and Obr. 4.57 (phosphoserine, phosphothreonine, phosphotyrosine), and the dolicholphosphate and γ-carboxyglutamate/glutathione structures on pp.112–113.",
  cnNote: { topic: null, title: "翻译后修饰——已查全部16卷，未发现独立主题", status: "pending" },
  summary: {
    en: "Side chains of amino acids in the nascent chain can be covalently modified in SIX main ways: GLYCOSYLATION, HYDROXYLATION, CARBOXYLATION, oxidation of sulfhydryl groups to DISULFIDE BONDS, METHYLATION, and PHOSPHORYLATION together with SULFATION. Each uses its own dedicated enzyme system, mostly located in the ER and Golgi, and each serves a different purpose — from building the sugar trees of glycoproteins, through strengthening collagen and enabling blood clotting, to what the book calls probably the single most important reversible switch for controlling protein activity: phosphorylation and dephosphorylation.",
    cn: "新生肽链中氨基酸的侧链可通过六种主要方式发生共价修饰：糖基化、羟基化、羧基化、巯基氧化为二硫键、甲基化，以及磷酸化与硫酸化。每一种修饰都由各自专门的酶系统（多定位于内质网和高尔基体）完成，用途也各不相同——从构建糖蛋白的糖链、增强胶原蛋白强度、参与血液凝固，到教材所称的、控制蛋白质活性可能最重要的可逆开关：磷酸化与去磷酸化。"
  },
  points: [
    { cz: "šest typů modifikací (přehled)", en: "Side chains of amino acids in the nascent chain may be covalently modified by GLYCOSYLATION, HYDROXYLATION, CARBOXYLATION, oxidation of sulfhydryl groups to DISULFIDE bonds, METHYLATION, PHOSPHORYLATION and SULFATION.", cn: "新生多肽链中氨基酸的侧链可被糖基化、羟基化、羧基化、巯基氧化为二硫键、甲基化、磷酸化及硫酸化等方式共价修饰。" },
    { cz: "N- a O-glykosidová vazba; glykosyltransferasy", en: "GLYCOSYLATION is one of the most significant post-translational modifications, occurring in the ER and Golgi. Sugars attach either by an N-GLYCOSIDIC bond to the free amide group of ASPARAGINE, or an O-GLYCOSIDIC bond to the hydroxyl of THREONINE or SERINE. The enzymes are highly specific GLYCOSYLTRANSFERASES, which recognise not just the sugar substrate but also the STRUCTURE of the polypeptide chain it is to be attached to; the substrate for these reactions is always a SUGAR NUCLEOTIDE.", cn: "糖基化是最重要的翻译后修饰之一，发生在内质网和高尔基体中。糖链通过 N-糖苷键连接到天冬酰胺的游离酰胺基上，或通过 O-糖苷键连接到苏氨酸或丝氨酸的羟基上。催化这一过程的是高度特异的糖基转移酶，它们不仅识别糖底物本身，还识别底物将要连接的多肽链结构；这些反应的底物始终是糖核苷酸。" },
    { cz: "dvě fáze glykosylace; dolicholfosfát; Asn-X-Ser/Thr", en: "Glycosylation runs in TWO PHASES. First, a series of reactions starting with UDP-N-acetyl-D-glucosamine binding to the high-molecular-weight lipid carrier DOLICHOLPHOSPHATE builds an activated OLIGOSACCHARIDE CORE, Glc₃Man₉(GlcNAc)₂–(P)–(P)–Dol. Second, this core is transferred EN BLOC onto the protein — while it is still being synthesised, in the membrane part of the ER — to form the N-glycosidic bond; the signal for attachment to asparagine is the TRIPEPTIDE SEQUENCE Asn-X-Ser (or Thr), where X is any amino acid EXCEPT PROLINE.", cn: "糖基化分两个阶段进行。第一阶段经一系列反应，从 UDP-N-乙酰-D-葡糖胺结合到高分子量脂质载体多萜醇磷酸（dolicholphosphate）开始，构建出活化的寡糖核心 Glc₃Man₉(GlcNAc)₂–(P)–(P)–Dol。第二阶段，该寡糖核心整体转移到蛋白质上——此时肽链仍在内质网膜部分合成中——形成 N-糖苷键；连接到天冬酰胺的识别信号是三肽序列 Asn-X-Ser（或 Thr），其中 X 可为除脯氨酸外的任意氨基酸。" },
    { cz: "dokončení v Golgiho aparátu; manosa-6-fosfát", en: "After proteosynthesis, the nascent glycoprotein moves to the GOLGI, where the sugar chain is trimmed — GLUCOSIDASES remove the D-glucose residues and MANNOSIDASES remove a variable number of D-mannose residues — after which further glycosyltransferases add N-acetyl-D-glucosamine, D-galactose and SIALIC ACIDS as terminal sugars. Some D-mannose residues instead get PHOSPHORYLATED at position 6, forming D-MANNOSE-6-PHOSPHATE; this diverts the glycoprotein away from the normal secretory route and INTO THE LYSOSOMES.", cn: "蛋白质合成完成后，新生糖蛋白转运至高尔基体，在此糖链被修剪——葡糖苷酶切除 D-葡萄糖残基，甘露糖苷酶切除数量不等的 D-甘露糖残基——随后其他糖基转移酶依次加上 N-乙酰-D-葡糖胺、D-半乳糖以及作为末端糖的唾液酸。部分 D-甘露糖残基则会在第 6 位被磷酸化，生成 D-甘露糖-6-磷酸；这会使该糖蛋白偏离正常的分泌途径，转而被导向溶酶体。" },
    { cz: "hydroxylace (kolagen, vitamin C, Fe2+)", en: "HYDROXYLATION: mammalian COLLAGENS commonly contain the hydroxy-amino-acids 4-hydroxyproline, 3-hydroxyproline and 5-hydroxylysine, produced by THREE SPECIFIC HYDROXYLASES located in the ER cisternae. The reaction requires OXYGEN, 2-OXOGLUTARATE, L-ASCORBIC ACID (vitamin C) and Fe²⁺; 2-oxoglutarate is decarboxylated during the reaction, and one of the oxygen atoms from its released carboxyl group is incorporated into the new hydroxyl group.", cn: "羟基化：哺乳动物胶原蛋白中常见的羟基氨基酸有 4-羟脯氨酸、3-羟脯氨酸和 5-羟赖氨酸，它们由定位于内质网池腔中的三种特异性羟化酶生成。该反应需要氧、2-氧戊二酸、L-抗坏血酸（维生素 C）以及 Fe²⁺；反应过程中 2-氧戊二酸发生脱羧，其释放的羧基上的一个氧原子被并入新形成的羟基中。" },
    { cz: "karboxylace (γ-karboxyglutamát, vitamin K, srážení krve)", en: "CARBOXYLATION was first detected in PLASMA GLYCOPROTEINS involved in BLOOD CLOTTING. A carboxylase enzyme, located on the inner wall of the ER membrane, carboxylates glutamic acid residues to form γ-CARBOXYGLUTAMYL groups (γ-karboxyglutamát) — a side chain that now carries TWO carboxyl groups. This carboxylase strictly requires VITAMIN K.", cn: "羧基化最早在参与血液凝固的血浆糖蛋白中被发现。定位于内质网膜内壁的一种羧化酶将谷氨酸残基羧基化，生成 γ-羧基谷氨酰基团（γ-carboxyglutamate）——该侧链现带有两个羧基。这种羧化酶的活性严格依赖维生素 K。" },
    { cz: "disulfidové vazby; glutathion jako oxidant proinsulinu", en: "DISULFIDE BOND formation 'fixes' the chain in a special, not always energetically optimal configuration, by oxidising the SH groups of an adjacent pair of cysteine residues to CYSTINE. In PROINSULIN, the two chains' disulfide bonds are formed by reaction with OXIDISED GLUTATHIONE (the tripeptide γ-glutamylcysteinylglycine, carrying a reactive thiol on its cysteine): hydrogen atoms from proinsulin's thiol groups are transferred onto the disulfide of the oxidised glutathione. In proteins with more than two cysteine residues, getting the PAIRING right is essential for activity, which is why the enzyme PROTEIN-DISULFID-ISOMERASE (in the ER cisternae) exists to correct it.", cn: "二硫键的形成通过氧化相邻一对半胱氨酸残基的 SH 基团生成胱氨酸，从而把肽链「固定」在一种特殊的、并非总是能量最优的构象中。在胰岛素原中，两条链之间的二硫键是通过与氧化型谷胱甘肽（γ-谷氨酰-半胱氨酰-甘氨酸三肽，其半胱氨酸上带有反应性巯基）反应形成的：胰岛素原巯基上的氢原子被转移到氧化型谷胱甘肽的二硫键上。在含两个以上半胱氨酸残基的蛋白质中，正确配对至关重要，这正是蛋白质二硫键异构酶（定位于内质网池腔）存在的意义所在。" },
    { cz: "methylace (Lys/Arg/His → N-methyl; Glu/Asp → O-methylester)", en: "METHYLATION targets charged side chains. Carboxyl groups of GLUTAMATE and ASPARTATE are methylated to O-METHYLESTERS (e.g. 4-methylglutamate). Amino groups of LYSINE, ARGININE and HISTIDINE are methylated to MONO-, DI- or TRI-N-METHYL derivatives — for lysine specifically, successive methylation of its ε-amino group gives ε-N-METHYLLYSINE, then ε-N-DIMETHYLLYSINE and finally ε-N-TRIMETHYLLYSINE, in which the nitrogen carries three methyl groups (Obr. 4.56). Methylation regulates, for example, the bacterial proteins involved in CHEMOTAXIS (movement along a concentration gradient), and faulty methylation of SPERM proteins is a relatively common cause of infertility.", cn: "甲基化作用于带电侧链。谷氨酸和天冬氨酸的羧基被甲基化生成 O-甲酯（例如 4-甲基谷氨酸）。赖氨酸、精氨酸和组氨酸的氨基被甲基化生成一至三个甲基的 N-甲基衍生物——以赖氨酸为例，其 ε-氨基逐步甲基化依次生成 ε-N-甲基赖氨酸、ε-N-二甲基赖氨酸，最终生成氮原子上带三个甲基的 ε-N-三甲基赖氨酸（图 4.56）。甲基化例如调节参与趋化性（沿浓度梯度运动）的细菌蛋白质，而精子蛋白甲基化异常则是不育症的一个较常见病因。" },
    { cz: "fosforylace (Ser/Thr/Tyr) — hlavní regulační mechanismus; sulfatace", en: "PHOSPHORYLATION of the hydroxyl group of SERINE and THREONINE, or the phenolic hydroxyl of TYROSINE, gives the corresponding phosphoesters — PHOSPHOSERINE, PHOSPHOTHREONINE and PHOSPHOTYROSINE (Obr. 4.57); phosphorylation of lysyl, arginyl or histidyl groups is substantially less common. PHOSPHORYLATION AND DEPHOSPHORYLATION ARE PROBABLY THE MOST IMPORTANT REGULATORY MECHANISM for controlling the biological activity of proteins, especially ENZYMES and PROTEIN HORMONES: in some proteins phosphorylation switches the conformation to one of HIGHER activity, while in others it is instead the HYDROLYTIC REMOVAL of the phosphate group that raises activity (see ch. 7.12). Proteins may similarly be converted to SULFOESTERS or amides — e.g. in GASTRIN, tyrosyl residues are esterified with SULFATE.", cn: "丝氨酸、苏氨酸羟基或酪氨酸酚羟基的磷酸化生成相应的磷酸酯——磷酸丝氨酸、磷酸苏氨酸和磷酸酪氨酸（图 4.57）；赖氨酰、精氨酰或组氨酰基团的磷酸化则少见得多。磷酸化与去磷酸化很可能是控制蛋白质（尤其是酶和蛋白质激素）生物活性最重要的调节机制（参见第 7.12 章）：对某些蛋白质而言，磷酸化会使构象转变为活性更高的形式；而对另一些蛋白质而言，恰恰相反，水解去除磷酸基团才会提高其活性。蛋白质有时也会以类似方式转变为硫酸酯或酰胺——例如在胃泌素（gastrin）中，酪氨酰残基被硫酸酯化。" }
  ],
  terms: [
    { cz: "glykosyltransferasa", en: "glycosyltransferase", cn: "糖基转移酶", def_en: "Highly specific ER/Golgi enzyme that transfers sugar units from a sugar-nucleotide donor onto the growing oligosaccharide or directly onto protein.", def_cn: "高度特异的内质网/高尔基体酶，将糖基从糖核苷酸供体转移到正在延伸的寡糖链或直接转移到蛋白质上。" },
    { cz: "dolicholfosfát", en: "dolichol phosphate", cn: "多萜醇磷酸", def_en: "High-molecular-weight lipid carrier on which the Glc₃Man₉(GlcNAc)₂ oligosaccharide core is assembled before transfer to protein.", def_cn: "高分子量脂质载体，Glc₃Man₉(GlcNAc)₂ 寡糖核心在其上组装完成后再转移至蛋白质。" },
    { cz: "sekvence Asn-X-Ser/Thr", en: "Asn-X-Ser/Thr sequence", cn: "Asn-X-Ser/Thr 序列", def_en: "The tripeptide consensus (X = any residue except proline) that marks an asparagine for N-linked glycosylation.", def_cn: "标记天冬酰胺进行 N-连接糖基化的三肽识别序列（X 为除脯氨酸外的任意残基）。" },
    { cz: "manosa-6-fosfát", en: "mannose-6-phosphate", cn: "甘露糖-6-磷酸", def_en: "A phosphorylated mannose residue on a glycoprotein's sugar chain that diverts it from the secretory route to the lysosome.", def_cn: "糖蛋白糖链上被磷酸化的甘露糖残基，使该糖蛋白偏离分泌途径而被导向溶酶体。" },
    { cz: "4-hydroxyprolin, 5-hydroxylysin", en: "4-hydroxyproline, 5-hydroxylysine", cn: "4-羟脯氨酸、5-羟赖氨酸", def_en: "Hydroxylated collagen residues formed in the ER by hydroxylases that require O₂, 2-oxoglutarate, vitamin C and Fe²⁺.", def_cn: "胶原蛋白中的羟基化残基，在内质网中由需要 O₂、2-氧戊二酸、维生素 C 和 Fe²⁺ 的羟化酶生成。" },
    { cz: "γ-karboxyglutamát", en: "γ-carboxyglutamate", cn: "γ-羧基谷氨酸", def_en: "A glutamate residue carboxylated on its side chain (giving two carboxyl groups) by a vitamin-K-dependent carboxylase; first found in clotting-related plasma glycoproteins.", def_cn: "侧链被羧基化（生成两个羧基）的谷氨酸残基，由依赖维生素 K 的羧化酶生成；最早见于与凝血相关的血浆糖蛋白。" },
    { cz: "glutathion", en: "glutathione", cn: "谷胱甘肽", def_en: "The tripeptide γ-glutamylcysteinylglycine; its oxidised form accepts hydrogens from proinsulin's cysteine thiols to form the A–B chain disulfide bonds.", def_cn: "三肽 γ-谷氨酰-半胱氨酰-甘氨酸；其氧化型接受胰岛素原半胱氨酸巯基上的氢，从而形成 A、B 链间的二硫键。" },
    { cz: "ε-N-trimethyllysin", en: "ε-N-trimethyllysine", cn: "ε-N-三甲基赖氨酸", def_en: "Lysine whose ε-amino group carries three methyl groups, the end product of successive mono- → di- → tri-methylation.", def_cn: "ε-氨基上带有三个甲基的赖氨酸，是逐步单甲基化、二甲基化、三甲基化的最终产物。" },
    { cz: "fosfoserin / fosfothreonin / fosfotyrosin", en: "phosphoserine / phosphothreonine / phosphotyrosine", cn: "磷酸丝氨酸 / 磷酸苏氨酸 / 磷酸酪氨酸", def_en: "Phosphoester derivatives of the Ser, Thr and Tyr side-chain hydroxyls; the chemical basis of regulatory protein phosphorylation.", def_cn: "丝氨酸、苏氨酸和酪氨酸侧链羟基的磷酸酯衍生物；是蛋白质调节性磷酸化的化学基础。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which tripeptide sequence marks an asparagine residue for N-linked glycosylation, and which residue is excluded from the X position?",
      q_cn: "哪一个三肽序列标记天冬酰胺残基进行 N-连接糖基化？X 位置排除的是哪种残基？",
      options: ["Ser-X-Thr, X ≠ glycine", "Asn-X-Ser (or Thr), X ≠ proline", "Asn-Pro-Ser, with no exclusions", "Cys-X-Cys, X ≠ serine"],
      answer: 1,
      why_en: "The consensus is Asn-X-Ser (or Thr), where X may be any amino acid EXCEPT PROLINE. Getting the identity of X wrong, or forgetting the proline exclusion, is the classic trap on this topic.",
      why_cn: "识别序列为 Asn-X-Ser（或 Thr），其中 X 可为除脯氨酸外的任意氨基酸。记错 X 的身份，或忘记排除脯氨酸，是这个知识点上最常见的失分点。"
    },
    {
      type: "mcq",
      q_en: "A glycoprotein's mannose residue gets phosphorylated at position 6 in the Golgi. What is the functional consequence?",
      q_cn: "糖蛋白的甘露糖残基在高尔基体中第 6 位被磷酸化，其功能后果是什么？",
      options: [
        "It is degraded immediately within the ER",
        "It is diverted away from the normal secretory pathway and sent to the lysosomes",
        "It becomes resistant to all glycosidases",
        "It gains an additional N-glycosidic bond"
      ],
      answer: 1,
      why_en: "Mannose-6-phosphate formation in the Golgi is the tag that redirects a glycoprotein away from the default secretory route and INTO the lysosomes, distinguishing lysosomal glycoproteins from ordinary secreted ones, which instead keep terminal sialic acid.",
      why_cn: "在高尔基体中生成甘露糖-6-磷酸是一种标签，它使糖蛋白偏离默认的分泌途径而被导向溶酶体，从而将溶酶体糖蛋白与保留末端唾液酸的普通分泌型糖蛋白区分开来。"
    },
    {
      type: "mcq",
      q_en: "Hydroxylation of proline and lysine residues in collagen requires all of the following EXCEPT:",
      q_cn: "胶原蛋白中脯氨酸和赖氨酸残基的羟基化需要下列哪一项以外的全部条件？",
      options: ["Fe²⁺", "L-ascorbic acid (vitamin C)", "2-oxoglutarate", "Vitamin K"],
      answer: 3,
      why_en: "Collagen hydroxylation needs oxygen, 2-oxoglutarate, L-ascorbic acid and Fe²⁺. VITAMIN K belongs to a completely different modification — it is required by the carboxylase that makes γ-carboxyglutamate in clotting-related plasma glycoproteins. Do not mix up the two vitamin-dependent modifications.",
      why_cn: "胶原蛋白的羟基化需要氧、2-氧戊二酸、L-抗坏血酸和 Fe²⁺。维生素 K 属于完全不同的另一种修饰——它是使凝血相关血浆糖蛋白生成 γ-羧基谷氨酸的羧化酶所必需的。不要把这两种依赖维生素的修饰混淆。"
    },
    {
      type: "short",
      q_en: "How are the three phosphorylated amino acid derivatives in Obr. 4.57 formed, and why is phosphorylation considered so important?",
      q_cn: "图 4.57 中三种磷酸化氨基酸衍生物是如何形成的？为什么磷酸化被认为如此重要？",
      accept: ["serine", "threonine", "tyrosine", "phosphoester", "regulat", "enzyme", "hormone", "丝氨酸", "苏氨酸", "酪氨酸", "磷酸酯", "调节"],
      answer_en: "Phosphoserine and phosphothreonine form by phosphorylation of the aliphatic hydroxyl group of serine/threonine, and phosphotyrosine by phosphorylation of the phenolic hydroxyl of tyrosine, each giving a phosphoester. Phosphorylation and dephosphorylation are probably the most important regulatory mechanism controlling the biological activity of proteins, especially enzymes and protein hormones — for some proteins phosphorylation raises activity by changing the conformation, for others it is instead removal of the phosphate that raises activity.",
      answer_cn: "磷酸丝氨酸和磷酸苏氨酸分别由丝氨酸/苏氨酸的脂肪族羟基磷酸化生成，磷酸酪氨酸则由酪氨酸的酚羟基磷酸化生成，二者都形成磷酸酯。磷酸化与去磷酸化很可能是控制蛋白质（尤其是酶和蛋白质激素）生物活性最重要的调节机制——对某些蛋白质，磷酸化通过改变构象提高活性；对另一些蛋白质，则恰恰是去除磷酸基团提高了活性。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes ε-N-trimethyllysine from ε-N-methyllysine (Obr. 4.56)?",
      q_cn: "ε-N-三甲基赖氨酸与 ε-N-甲基赖氨酸（图 4.56）的区别是什么？",
      options: [
        "Trimethyllysine has three methyl groups on the ε-amino nitrogen, methyllysine has only one",
        "Trimethyllysine forms on arginine, not lysine",
        "Trimethyllysine is an O-methylester, methyllysine is an N-methyl derivative",
        "They are the same molecule under different names"
      ],
      answer: 0,
      why_en: "Both are the SAME lysine side chain modified at the SAME ε-amino group, differing only in the NUMBER of methyl groups added: one (methyllysine), two (dimethyllysine) or three (trimethyllysine, a permanently charged quaternary nitrogen). Do not confuse this with the SEPARATE O-methylester modification of glutamate/aspartate carboxyls, shown alongside it as 4-methylglutamate.",
      why_cn: "两者都是同一个赖氨酸侧链在同一个 ε-氨基上被修饰的产物，区别仅在于所加甲基的数目——一个（甲基赖氨酸）、两个（二甲基赖氨酸）或三个（三甲基赖氨酸，形成永久带正电的季铵氮）。切勿将其与图中同时给出的、谷氨酸/天冬氨酸羧基上另一种独立的 O-甲酯修饰（4-甲基谷氨酸）混淆。"
    }
  ],
  oral: {
    q_en: "What covalent modifications can occur on amino acid side chains after translation, and which is the most important for regulation?",
    q_cn: "翻译后氨基酸侧链可发生哪些共价修饰？哪一种对调节功能最为重要？",
    model_en: "Side chains of amino acids in the nascent polypeptide chain can be covalently modified in six main ways: glycosylation, hydroxylation, carboxylation, oxidation of sulfhydryl groups to disulfide bonds, methylation, and phosphorylation together with sulfation. Glycosylation is one of the most significant of these, occurring in the endoplasmic reticulum and Golgi apparatus through highly specific glycosyltransferases; sugars are attached either by an N-glycosidic bond to the amide group of asparagine or an O-glycosidic bond to the hydroxyl of serine or threonine. It proceeds in two phases: first a lipid carrier called dolichol phosphate accumulates an activated oligosaccharide core built from glucose, mannose and N-acetylglucosamine residues; second, this whole core is transferred onto the protein at a recognition sequence, asparagine-X-serine or threonine, where X is any residue except proline. In the Golgi the sugar chain is then trimmed by glucosidases and mannosidases and extended with further terminal sugars, and some proteins have a mannose residue phosphorylated at its sixth position, which redirects them away from secretion and into the lysosomes instead. Hydroxylation, seen especially in collagen, produces hydroxyproline and hydroxylysine through enzymes that require oxygen, two-oxoglutarate, vitamin C and ferrous iron. Carboxylation, first found in the clotting-related plasma glycoproteins, converts glutamate residues into gamma-carboxyglutamate and depends on vitamin K. Disulfide bonds form by oxidation of paired cysteine thiols to cystine, a process illustrated by proinsulin, whose interchain disulfide bonds are formed through reaction with oxidised glutathione, and whose correct pairing, when more than two cysteines are present, is safeguarded by protein-disulfide-isomerase. Methylation acts on charged side chains: the carboxyls of glutamate and aspartate become O-methylesters, while the amino groups of lysine, arginine and histidine become mono-, di- or tri-methylated, lysine's epsilon-amino group in particular passing through methyllysine and dimethyllysine on its way to trimethyllysine. But if I had to single out the most important of all these modifications, it would be phosphorylation: the hydroxyls of serine and threonine, and the phenolic hydroxyl of tyrosine, are phosphorylated to give phosphoserine, phosphothreonine and phosphotyrosine, and phosphorylation together with dephosphorylation is probably the single most important regulatory mechanism controlling the biological activity of proteins, particularly enzymes and protein hormones — in some proteins phosphorylation itself switches on higher activity, while in others activity only rises once the phosphate group is hydrolytically removed again.",
    checklist: [
      "Listed all six types of side-chain modification",
      "Described N- vs O-glycosidic linkage and named the Asn-X-Ser/Thr signal with the proline exclusion",
      "Explained the two glycosylation phases (dolichol-phosphate core, then Golgi trimming) and mannose-6-phosphate's lysosomal-targeting role",
      "Named the cofactors for collagen hydroxylation (O₂, 2-oxoglutarate, vitamin C, Fe²⁺) and for carboxylation (vitamin K)",
      "Used proinsulin/glutathione to illustrate disulfide bond formation and named protein-disulfide-isomerase",
      "Distinguished N-methylation of Lys/Arg/His from O-methylesterification of Glu/Asp, with the methyllysine series",
      "Identified phosphorylation/dephosphorylation as the key regulatory mechanism and gave both directions of its effect on activity"
    ]
  }
}

);
