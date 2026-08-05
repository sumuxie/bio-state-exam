/* ============================================================
   Chapter 7 -- Sacharidy
   Carbohydrates / 糖类
   Source: Biochemie - Zakladni kurz, pp. 148-175
   STATUS AS OF THIS COMMIT: PARTIAL CHAPTER. Only pp.148-155 (sections
   7.1-7.3, monosaccharides through the start of oligosaccharides) are
   drafted. Sections 7.4-7.12 (pp.156-175: polysaccharides, glycoproteins,
   sugar interconversions, the pentose phosphate pathway, glycolysis,
   gluconeogenesis, and glycoside/polysaccharide enzymology) are NOT YET
   WRITTEN. See HANDOFF.md for exact continuation instructions -- page
   images for the whole chapter (148-175) are already extracted to
   extracted_full_ch7/, so a follow-up session can start drafting directly
   without re-extracting.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "7-1",
  chapter: 7,
  section: "7.1",
  czTitle: "Monosacharidy",
  enTitle: "Monosaccharides",
  cnTitle: "单糖",
  pages: [148],
  coverage: "full",
  coverageNote: "Page 148 read in full: the chapter-7 opening paragraph (carbohydrates as among the most widespread organic substances, the largest share of organic matter on Earth) plus its four lettered functional roles a)-d), verified directly against the scan. The '7.1 Monosacharidy' heading itself carries no independent text of its own — section 7.1.1 begins immediately below it on the same page, so this node covers only the chapter-opening framing that precedes the 7.1/7.1.1 split.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Chapter 7 opens by framing carbohydrates (sacharidy) as organic substances that, in nature, belong among the most widespread — they make up the largest share of organic matter on Earth — and ties this abundance directly to the range of distinct biological roles carbohydrates play, applied across different forms of life. The book lists four such roles. (a) ENERGY STORAGE: starch in plants and glycogen in animals are both polysaccharides that can be very readily mobilized, yielding D-glucose as the primary compound used to obtain energy. (b) GENETIC BACKBONE: D-ribose and 2-deoxy-D-ribose are pentoses forming part of the basic chain of DNA and RNA; the conformational flexibility of the sugar ring matters for the storage and expression of genetic information. (c) STRUCTURAL/SUPPORTIVE ROLE: polysaccharides are basic components of bacterial and plant cell walls, and of the exoskeleton in insects and crustaceans — cellulose specifically, the main component of plant cell walls, is the single most abundant organic compound in the biosphere. (d) RECOGNITION/GLYCOCONJUGATES: carbohydrates form a component of glycoproteins, which occur either on the surface of cells or subcellular particles, or as part of secreted proteins; the carbohydrate portions of these glycoproteins play a key role in recognition mechanisms across various systems, and, besides proteins, carbohydrates in living organisms also occur bound to lipids, as components of membrane glycolipids and lipopolysaccharides.",
    cn: "第7章开篇将糖类定位为自然界中分布最广泛的有机物质之一——它们占地球有机物质的最大份额——并将这种丰富性直接归因于糖类在不同生命形式中所发挥的多种生物学功能。教材列出了四种这样的功能。(a) 能量储存：植物中的淀粉和动物中的糖原都是多糖，都能被非常容易地动员利用，释放出D-葡萄糖作为获取能量的主要化合物。(b) 遗传信息骨架：D-核糖和2-脱氧-D-核糖是构成DNA和RNA基本链的戊糖；糖环的构象灵活性对遗传信息的储存和表达很重要。(c) 支持/结构功能：多糖是细菌和植物细胞壁的基本组分，也是昆虫和甲壳类外骨骼的组分——其中纤维素作为植物细胞壁的主要成分，是生物圈中含量最丰富的有机化合物。(d) 识别功能/糖缀合物：糖类是糖蛋白的组成部分，糖蛋白或存在于细胞及亚细胞颗粒表面，或作为分泌蛋白的一部分；这些糖蛋白的糖链部分在各种识别机制中起关键作用；此外，除蛋白质外，生物体内的糖类还会与脂质结合，成为膜糖脂和脂多糖的组分。"
  },
  points: [
    { cz: "sacharidy — nejrozšířenější organické látky", en: "Carbohydrates (sacharidy) are organic substances that, in nature, belong among the most widespread; they make up the largest share of organic matter on Earth. This abundance is directly tied to the range of distinct biological roles carbohydrates play across different forms of life.", cn: "糖类是自然界中分布最广泛的有机物质之一；它们占地球有机物质的最大份额。这种丰富性与糖类在不同生命形式中发挥的多种生物学功能直接相关。" },
    { cz: "a) zásobárna energie", en: "Role (a), energy storage: starch in plants and glycogen in animals are both POLYSACCHARIDES that can be very readily mobilized, and both yield D-GLUCOSE as the primary compound used to obtain energy.", cn: "功能(a)，能量储存：植物中的淀粉与动物中的糖原都是多糖，都能被非常容易地动员利用，二者都释放出D-葡萄糖作为获取能量的主要化合物。" },
    { cz: "b) pentosy v DNA/RNA", en: "Role (b), genetic backbone: D-ribose and 2-deoxy-D-ribose are pentoses that form part of the basic chain (backbone) of DNA and RNA; the conformational flexibility of the sugar ring is important for the storage and expression of genetic information.", cn: "功能(b)，遗传骨架：D-核糖和2-脱氧-D-核糖是构成DNA和RNA基本链的戊糖；糖环的构象灵活性对遗传信息的储存与表达十分重要。" },
    { cz: "c) podpůrná/strukturní funkce — celulosa", en: "Role (c), structural/supportive function: polysaccharides are basic components of bacterial and plant cell walls, and also of the exoskeleton of insects and crustaceans. Cellulose specifically — the main component of plant cell walls — is named as the single most abundant organic compound in the biosphere.", cn: "功能(c)，支持/结构功能：多糖是细菌和植物细胞壁的基本组分，也是昆虫和甲壳类外骨骼的组分。其中纤维素——植物细胞壁的主要成分——被指出是生物圈中含量最丰富的有机化合物。" },
    { cz: "d) glykoproteiny, glykolipidy, lipopolysacharidy", en: "Role (d), recognition/glycoconjugates: carbohydrates form a component of GLYCOPROTEINS, which occur either on the surface of cells/subcellular particles or as part of secreted proteins; precisely these carbohydrate portions of glycoproteins play a key role in RECOGNITION MECHANISMS in various systems. Beside proteins, carbohydrates in living organisms also occur bound to LIPIDS, as components of membrane GLYCOLIPIDS and LIPOPOLYSACCHARIDES.", cn: "功能(d)，识别功能/糖缀合物：糖类是糖蛋白的组成部分，糖蛋白或位于细胞/亚细胞颗粒表面，或作为分泌蛋白的一部分；正是这些糖蛋白的糖链部分在各种系统的识别机制中起关键作用。除蛋白质外，生物体内的糖类还会与脂质结合，成为膜糖脂和脂多糖的组分。" },
    { cz: "7.1 = bez vlastního textu", en: "Section 7.1 'Monosacharidy' itself carries no independent text of its own on this page — the book moves directly into subsection 7.1.1 immediately below the heading, so 7.1 functions purely as the umbrella title for the monosaccharide-focused sections that follow.", cn: "「7.1 单糖」这一小节标题本身在本页并无独立正文——教材紧接着直接进入7.1.1小节，因此7.1只是起到统领后续单糖相关各节的标题作用。" }
  ],
  terms: [
    { cz: "sacharid", en: "carbohydrate", cn: "糖类；碳水化合物", def_en: "An organic substance among the most widespread in nature, making up the largest share of organic matter on Earth, with roles spanning energy storage, genetic backbone, structural support, and cell recognition.", def_cn: "自然界中分布最广泛的有机物质之一，占地球有机物质的最大份额，功能涵盖能量储存、遗传骨架、结构支持及细胞识别等。" },
    { cz: "polysacharid", en: "polysaccharide", cn: "多糖", def_en: "A carbohydrate polymer such as starch, glycogen, or cellulose; the storage forms (starch, glycogen) are readily mobilized to release D-glucose, while cellulose serves a structural role.", def_cn: "如淀粉、糖原或纤维素等糖类聚合物；淀粉和糖原等储存形式易于动员释放D-葡萄糖，而纤维素则起结构作用。" },
    { cz: "celulosa", en: "cellulose", cn: "纤维素", def_en: "The main structural polysaccharide of plant cell walls; per this book, the single most abundant organic compound in the biosphere.", def_cn: "植物细胞壁的主要结构多糖；据教材所述，是生物圈中含量最丰富的有机化合物。" },
    { cz: "glykoprotein", en: "glycoprotein", cn: "糖蛋白", def_en: "A protein carrying a carbohydrate component, found on cell/subcellular-particle surfaces or secreted; its carbohydrate portion plays a key role in cell recognition mechanisms.", def_cn: "带有糖链组分的蛋白质，存在于细胞/亚细胞颗粒表面或作为分泌蛋白；其糖链部分在细胞识别机制中起关键作用。" },
    { cz: "glykolipid / lipopolysacharid", en: "glycolipid / lipopolysaccharide", cn: "糖脂／脂多糖", def_en: "Membrane components in which carbohydrate is bound to lipid rather than to protein.", def_cn: "糖类与脂质（而非蛋白质）结合形成的膜组分。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the book's opening framing of chapter 7, which single organic compound is identified as the most abundant in the biosphere?",
      q_cn: "根据第7章开篇的论述，教材指出生物圈中含量最丰富的单一有机化合物是什么？",
      options: ["D-glucose", "Glycogen", "Cellulose", "Starch"],
      answer: 2,
      why_en: "The book states that cellulose, the main component of plant cell walls, is the most abundant organic compound in the biosphere. D-glucose is named as the primary energy-yielding compound released from starch/glycogen, not as the most abundant compound itself; glycogen and starch are the storage polysaccharides, a distinct role from cellulose's structural one.",
      why_cn: "教材指出，作为植物细胞壁主要成分的纤维素是生物圈中含量最丰富的有机化合物。D-葡萄糖只是淀粉/糖原释放出的主要供能化合物，而非最丰富的化合物本身；糖原和淀粉是储能多糖，功能上不同于纤维素的结构作用。"
    },
    {
      type: "mcq",
      q_en: "Per role (b) in the book's four-part framing of carbohydrate function, why does the conformational flexibility of the ribose/deoxyribose ring matter?",
      q_cn: "根据教材四项功能中的(b)项，为什么核糖/脱氧核糖环的构象灵活性很重要？",
      options: [
        "It allows starch and glycogen to be rapidly mobilized for energy",
        "It is important for the storage and expression of genetic information in DNA and RNA",
        "It enables cellulose to form rigid plant cell walls",
        "It allows glycoproteins to be recognized on the cell surface"
      ],
      answer: 1,
      why_en: "The book explicitly ties the conformational flexibility of the sugar ring in D-ribose/2-deoxy-D-ribose to the storage and expression of genetic information, since these pentoses form part of the DNA/RNA backbone. The other options describe roles (a), (c), and (d) respectively, not (b).",
      why_cn: "教材明确指出，D-核糖/2-脱氧-D-核糖糖环的构象灵活性与遗传信息的储存和表达有关，因为这些戊糖构成了DNA/RNA的骨架。其余选项分别描述的是功能(a)、(c)、(d)，并非(b)。"
    },
    {
      type: "short",
      q_en: "List the four biological roles of carbohydrates the book uses to open chapter 7, with one example compound or structure for each.",
      q_cn: "列出教材在第7章开篇用来说明糖类生物学功能的四项内容，并各举一个例子。",
      accept: ["energy", "starch", "glycogen", "DNA", "RNA", "ribose", "cellulose", "structural", "glycoprotein", "recognition", "能量", "淀粉", "糖原", "纤维素", "糖蛋白", "识别"],
      answer_en: "(a) Energy storage — starch (plants)/glycogen (animals), mobilized to D-glucose. (b) Genetic backbone — D-ribose/2-deoxy-D-ribose in DNA/RNA. (c) Structural/supportive role — polysaccharides in cell walls (e.g. cellulose) and exoskeletons. (d) Recognition/glycoconjugates — carbohydrate components of glycoproteins and, bound to lipids, of glycolipids/lipopolysaccharides.",
      answer_cn: "(a) 能量储存——植物中的淀粉/动物中的糖原，动员释放D-葡萄糖。(b) 遗传骨架——DNA/RNA中的D-核糖/2-脱氧-D-核糖。(c) 支持/结构功能——细胞壁（如纤维素）和外骨骼中的多糖。(d) 识别功能/糖缀合物——糖蛋白的糖链组分，以及与脂质结合形成的糖脂/脂多糖。"
    }
  ],
  oral: {
    q_en: "Explain the four biological roles of carbohydrates the book uses to open chapter 7.",
    q_cn: "请解释教材在第7章开篇用来引出糖类的四项生物学功能。",
    model_en: "The book opens chapter 7 by describing carbohydrates as among the most widespread organic substances in nature, making up the largest share of organic matter on Earth, and it explains that abundance by pointing to four distinct biological roles carbohydrates play. First, energy storage: starch in plants and glycogen in animals are both polysaccharides that can be very readily mobilized, and both release D-glucose as the primary compound organisms use to obtain energy. Second, carbohydrates form part of the genetic backbone: D-ribose and 2-deoxy-D-ribose are pentoses that make up part of the basic chain of DNA and RNA, and the conformational flexibility of that sugar ring matters for how genetic information is stored and expressed. Third, there is a structural or supportive role: polysaccharides are basic components of bacterial and plant cell walls and of the exoskeleton of insects and crustaceans, and cellulose in particular, the main component of plant cell walls, is actually the single most abundant organic compound in the whole biosphere. And fourth, carbohydrates are central to recognition: they form the carbohydrate component of glycoproteins, found either on the surface of cells and subcellular particles or as part of secreted proteins, and it's precisely those carbohydrate portions that play a key role in recognition mechanisms across different systems; besides proteins, carbohydrates in living organisms also occur bound to lipids, as components of membrane glycolipids and lipopolysaccharides.",
    checklist: [
      "Framed carbohydrates as among the most abundant organic substances on Earth",
      "Role (a): energy storage via starch/glycogen mobilized to D-glucose",
      "Role (b): genetic backbone — D-ribose/2-deoxy-D-ribose in DNA/RNA, ring flexibility",
      "Role (c): structural role — cell walls, exoskeletons, cellulose as most abundant organic compound",
      "Role (d): glycoproteins/glycolipids/lipopolysaccharides and recognition mechanisms",
      "Noted that 7.1's own heading has no independent text before 7.1.1"
    ]
  }
},

{
  id: "7-1-1",
  chapter: 7,
  section: "7.1.1",
  czTitle: "Aldosy, ketosy",
  enTitle: "Aldoses, ketoses",
  cnTitle: "醛糖与酮糖",
  pages: [148],
  coverage: "full",
  coverageNote: "Full text of '7.1.1 Aldosy, ketosy' on page 148 read directly, from the monosaccharide/general-formula definition through the tetrose/pentose/hexose/heptose naming convention and the D-/L- assignment rule for polyhydroxy sugars with more than one asymmetric carbon.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Monosaccharides are the simplest sugars: aldehydes or ketones containing two or more hydroxyl groups, with general formula (CH₂O)ₙ. Glyceraldehyde and dihydroxyacetone are the smallest monosaccharides, for which n=3; they are called TRIOSES. Glyceraldehyde has one asymmetric carbon, so two stereoisomers exist: D-glyceraldehyde and L-glyceraldehyde. The prefixes D- and L- denote ABSOLUTE CONFIGURATION: D-glyceraldehyde, whose projection formula has the hydroxyl group pointing to the right, is the parent of compounds of the D-series. Crucially, belonging to the D- or L- series says NOTHING about a sugar's OPTICAL ROTATION, which may independently be (+) (dextrorotatory) or (−) (levorotatory). Sugars containing 4, 5, 6, and 7 carbon atoms are called tetroses, pentoses, hexoses, and heptoses respectively. For sugars containing more than one asymmetric carbon, the D-/L- symbols refer specifically to the absolute configuration of the asymmetric carbon FARTHEST from the aldehyde or ketone group.",
    cn: "单糖是最简单的糖类：含有两个或更多羟基的醛或酮，通式为(CH₂O)ₙ。甘油醛和二羟丙酮是最小的单糖，n=3，被称为丙糖。甘油醛含有一个不对称碳原子，因此存在两种立体异构体：D-甘油醛和L-甘油醛。前缀D-和L-表示绝对构型：D-甘油醛的投影式中羟基指向右侧，是D系化合物的原型。需要特别注意的是，属于D系还是L系并不能说明该糖的旋光性，旋光性可以独立地是(+)（右旋）或(−)（左旋）。含有4、5、6、7个碳原子的糖分别称为四碳糖、戊糖、己糖和庚糖。对于含有一个以上不对称碳原子的糖，D-/L-符号specifically指的是离醛基或酮基最远的那个不对称碳原子的绝对构型。"
  },
  points: [
    { cz: "monosacharid = aldehyd/keton s ≥2 OH, (CH₂O)ₙ", en: "Monosaccharides are the simplest sugars — they are ALDEHYDES or KETONES containing two or more HYDROXYL groups, with the general formula (CH₂O)ₙ.", cn: "单糖是最简单的糖：含有两个或更多羟基的醛或酮，通式为(CH₂O)ₙ。" },
    { cz: "glyceraldehyd, dihydroxyaceton = triosy (n=3)", en: "Glyceraldehyde and dihydroxyacetone are the smallest monosaccharides, for which n=3; these are called TRIOSES.", cn: "甘油醛和二羟丙酮是最小的单糖，n=3；称为丙糖。" },
    { cz: "D-/L-glyceraldehyd = 1 asymetrický uhlík → 2 stereoizomery", en: "Glyceraldehyde has one asymmetric carbon, so two stereoisomers exist: D-glyceraldehyde and L-glyceraldehyde. The D-/L- prefixes denote ABSOLUTE CONFIGURATION; D-glyceraldehyde, whose projection formula shows the hydroxyl group pointing to the RIGHT, is the parent compound of the D-series.", cn: "甘油醛有一个不对称碳原子，因而存在两种立体异构体：D-甘油醛和L-甘油醛。D-/L-前缀表示绝对构型；D-甘油醛在投影式中羟基指向右侧，是D系化合物的原型。" },
    { cz: "D/L ≠ optická otáčivost (+)/(−)", en: "Belonging to the D- or L- series says NOTHING about a sugar's optical rotation, which may independently be (+) (dextrorotatory, clockwise) or (−) (levorotatory, counter-clockwise) — configuration and observed rotation are two separate properties.", cn: "属于D系还是L系并不能说明该糖的旋光性，旋光性可以独立地是(+)（右旋）或(−)（左旋）——构型与实测旋光方向是两个不同的性质。" },
    { cz: "tetrosy/pentosy/hexosy/heptosy = 4/5/6/7 C", en: "Sugars containing 4, 5, 6, and 7 carbon atoms are called TETROSES, PENTOSES, HEXOSES, and HEPTOSES, respectively.", cn: "含有4、5、6、7个碳原子的糖分别称为四碳糖、戊糖、己糖和庚糖。" },
    { cz: "D/L u víceuhlíkatých cukrů = konfigurace nejvzdálenějšího asymetrického C", en: "For sugars containing MORE THAN ONE asymmetric carbon, the D- and L- symbols refer specifically to the absolute configuration of the asymmetric carbon FARTHEST from the aldehyde or ketone group (i.e., the highest-numbered stereocenter, closest to the terminal CH₂OH).", cn: "对于含有一个以上不对称碳原子的糖，D-/L-符号specifically指的是离醛基或酮基最远的那个不对称碳原子（即编号最大、最靠近末端CH₂OH的手性中心）的绝对构型。" }
  ],
  terms: [
    { cz: "monosacharid", en: "monosaccharide", cn: "单糖", def_en: "The simplest sugar unit: an aldehyde or ketone with two or more hydroxyl groups, general formula (CH₂O)ₙ.", def_cn: "最简单的糖单元：含两个或更多羟基的醛或酮，通式为(CH₂O)ₙ。" },
    { cz: "triosa", en: "triose", cn: "丙糖", def_en: "A 3-carbon monosaccharide (n=3); glyceraldehyde (an aldose) and dihydroxyacetone (a ketose) are the two examples.", def_cn: "含3个碳原子的单糖（n=3）；甘油醛（醛糖）和二羟丙酮（酮糖）是两个例子。" },
    { cz: "D-/L- konfigurace", en: "D-/L- configuration", cn: "D/L构型", def_en: "A designation of absolute configuration (not optical rotation) based on the orientation of the hydroxyl at the asymmetric carbon farthest from the carbonyl group; D-glyceraldehyde (OH right) is the reference compound for the D-series.", def_cn: "一种表示绝对构型（而非旋光方向）的标记法，依据离羰基最远的不对称碳原子上羟基的取向；D-甘油醛（羟基在右）是D系的参照化合物。" },
    { cz: "optická otáčivost (+)/(−)", en: "optical rotation (+)/(−)", cn: "旋光性 (+)/(−)", def_en: "The direction a sugar rotates plane-polarized light, independent of and not predictable from its D-/L- configurational label.", def_cn: "糖使平面偏振光旋转的方向，与其D-/L-构型标记相互独立，不能由后者推知。" },
    { cz: "tetrosa, pentosa, hexosa, heptosa", en: "tetrose, pentose, hexose, heptose", cn: "四碳糖、戊糖、己糖、庚糖", def_en: "Monosaccharides classified by carbon count: 4, 5, 6, and 7 carbons respectively.", def_cn: "按碳原子数分类的单糖：分别含4、5、6、7个碳原子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the general formula of a monosaccharide, and what are glyceraldehyde and dihydroxyacetone examples of?",
      q_cn: "单糖的通式是什么？甘油醛和二羟丙酮是什么的例子？",
      options: [
        "(CH₂O)ₙ; they are the smallest monosaccharides (n=3), called trioses",
        "(C₆H₁₂O₆); they are the most common hexoses",
        "(CH₂O)ₙ; they are pentoses found in nucleic acids",
        "(C₂H₄O₂); they are disaccharides"
      ],
      answer: 0,
      why_en: "The book gives (CH₂O)ₙ as the general formula for monosaccharides and identifies glyceraldehyde/dihydroxyacetone as the smallest monosaccharides (n=3), called trioses — not hexoses, pentoses, or disaccharides.",
      why_cn: "教材给出单糖的通式为(CH₂O)ₙ，并指出甘油醛和二羟丙酮是最小的单糖（n=3），称为丙糖——而不是己糖、戊糖或二糖。"
    },
    {
      type: "mcq",
      q_en: "For a sugar with several asymmetric carbons (e.g. an aldohexose), which specific carbon's configuration determines whether it is labelled D- or L-?",
      q_cn: "对于含有多个不对称碳原子的糖（例如醛己糖），哪一个碳原子的构型决定其被标记为D-还是L-？",
      options: [
        "The carbon bearing the carbonyl (aldehyde/ketone) group itself",
        "The asymmetric carbon closest to the carbonyl group",
        "The asymmetric carbon farthest from the carbonyl group",
        "An average taken across all asymmetric carbons in the molecule"
      ],
      answer: 2,
      why_en: "The book explicitly states that for sugars with more than one asymmetric carbon, the D-/L- symbols refer to the configuration of the asymmetric carbon farthest from the aldehyde or ketone group — not the carbonyl carbon itself (which isn't asymmetric), not the nearest stereocenter, and not an average.",
      why_cn: "教材明确指出，对于含有一个以上不对称碳原子的糖，D-/L-符号指的是离醛基或酮基最远的那个不对称碳原子的构型——而不是羰基碳本身（它并非不对称碳）、也不是最近的手性中心，更不是所有手性中心的平均值。"
    },
    {
      type: "short",
      q_en: "Explain why a sugar's D-/L- label and its observed optical rotation (+)/(−) are two independent pieces of information.",
      q_cn: "解释为什么糖的D-/L-标记与其实测旋光方向(+)/(−)是两个相互独立的信息？",
      accept: ["configuration", "rotation", "independent", "absolute configuration", "构型", "旋光", "独立"],
      answer_en: "D-/L- denotes absolute configuration (defined by comparison to D-/L-glyceraldehyde, specifically the orientation at the asymmetric carbon farthest from the carbonyl), while (+)/(−) denotes the experimentally observed direction of rotation of plane-polarized light. The book states explicitly that belonging to the D- or L- series says nothing about which way a given sugar actually rotates light — the two properties must be determined separately.",
      answer_cn: "D-/L-表示绝对构型（通过与D-/L-甘油醛比较来定义，specifically是离羰基最远的不对称碳原子的取向），而(+)/(−)表示实验测得的平面偏振光旋转方向。教材明确指出，属于D系还是L系并不能说明该糖实际的旋光方向——这两个性质必须分别测定。"
    }
  ],
  oral: {
    q_en: "Define monosaccharides, aldoses/ketoses, and explain the D-/L- naming convention including how it relates (or doesn't) to optical rotation.",
    q_cn: "请定义单糖、醛糖/酮糖，并解释D-/L-命名法，包括它与旋光性的关系（或无关性）。",
    model_en: "Monosaccharides are the simplest sugars: they're aldehydes or ketones that carry two or more hydroxyl groups, and they share the general formula CH2O times n. The smallest ones, for which n equals three, are glyceraldehyde and dihydroxyacetone, and these are called trioses. Glyceraldehyde has exactly one asymmetric carbon, so it exists as two stereoisomers, D-glyceraldehyde and L-glyceraldehyde, and the D- and L- prefixes here denote absolute configuration: D-glyceraldehyde is the one whose projection formula has the hydroxyl group pointing to the right, and it's the reference compound that defines the whole D-series. What's important, and easy to get wrong, is that belonging to the D- or L- series tells you nothing at all about a sugar's optical rotation, which can independently be plus, meaning dextrorotatory, or minus, meaning levorotatory — configuration and rotation are two separate things that both have to be measured or assigned on their own terms. Sugars are also named by how many carbons they have: four carbons makes a tetrose, five a pentose, six a hexose, seven a heptose. And once you move to sugars with more than one asymmetric carbon, the D- or L- label doesn't refer to just any of those stereocenters — it specifically refers to the configuration of the asymmetric carbon farthest away from the aldehyde or ketone group.",
    checklist: [
      "Defined monosaccharide as an aldehyde/ketone with ≥2 OH groups, formula (CH2O)n",
      "Named glyceraldehyde and dihydroxyacetone as the trioses (n=3)",
      "Explained D-/L- as absolute configuration, defined via D-glyceraldehyde (OH right)",
      "Stated clearly that D-/L- is independent of (+)/(−) optical rotation",
      "Named the carbon-count series: tetrose/pentose/hexose/heptose = 4/5/6/7 carbons",
      "Stated the rule: D-/L- refers to the asymmetric carbon farthest from the carbonyl group"
    ]
  }
},

{
  id: "7-1-2-1",
  chapter: 7,
  section: "7.1.2",
  czTitle: "Odvozování aldos a ketos — odvození řady aldos (obr. 7.1)",
  enTitle: "Deriving aldoses and ketoses — the aldose family tree (Obr. 7.1)",
  cnTitle: "醛糖与酮糖的推导——醛糖系谱（图7.1）",
  pages: [148, 149],
  coverage: "full",
  coverageNote: "Text at the bottom of page 148 (from the '7.1.2 Odvozování aldos a ketos' heading through the aldohexose stereoisomer count) read in full, plus Obr. 7.1 on page 149 (the complete D-aldose family tree, all 8 D-aldohexose end-labels — D-allosa, D-altrosa, D-glukosa, D-mannosa, D-gulosa, D-idosa, D-galaktosa, D-talosa — and every intermediate Fischer-projection column verified directly by zoomed re-read) and the epimer-defining paragraph immediately following the figure. Stops right before the ketose-derivation paragraph, which belongs to node 7-1-2-2. Note: Obr. 7.1 draws out only the D-branch of the tree in full structural detail; the L-series (mirror-image at every step) is stated numerically in the text ('4 v řadě D- a 4 v řadě L-', etc.) but not separately drawn — this is the book's own chosen scope for the figure, not an omission introduced here.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "A molecule containing n asymmetric carbons and no plane of symmetry has 2ⁿ stereoisomeric forms. For ALDOTRIOSES, n=1, giving the two stereoisomers already established (D-/L-glyceraldehyde). Extending the aldotriose chain by one HCOH group gives 4 ALDOTETROSES (n=2): two of the D-series (D-erythrose and D-threose) and two of the L-series (L-erythrose and L-threose). ALDOPENTOSES have three asymmetric centers, so 8 (2³) stereoisomers exist, 4 in the D-series and 4 in the L-series. Analogously, ALDOHEXOSES contain four asymmetric carbons in their molecule, so 16 (2⁴) stereoisomers exist (Obr. 7.1 traces the full D-branch: D-glyceraldehyde → D-erythrose/D-threose → D-ribose/D-arabinose/D-xylose/D-lyxose → D-allose/D-altrose/D-glucose/D-mannose/D-gulose/D-idose/D-galactose/D-talose). D-glucose, D-mannose, and D-galactose are the most common aldohexoses; D-glucose differs from D-mannose only in configuration at C-2, and from D-galactose only in configuration at C-4. Monosaccharides differing in configuration at only one asymmetric carbon are called EPIMERS.",
    cn: "含有n个不对称碳原子且无对称面的分子有2ⁿ种立体异构体。对于醛丙糖，n=1，给出已确立的两种立体异构体（D-/L-甘油醛）。将醛丙糖链延长一个HCOH基团，得到4种醛丁糖（n=2）：两种属于D系（D-赤藓糖和D-苏糖），两种属于L系（L-赤藓糖和L-苏糖）。醛戊糖有三个不对称中心，因而存在8（2³）种立体异构体，其中D系4种，L系4种。类似地，醛己糖分子中含有四个不对称碳原子，因而存在16（2⁴）种立体异构体（图7.1描绘了完整的D系分支：D-甘油醛→D-赤藓糖/D-苏糖→D-核糖/D-阿拉伯糖/D-木糖/D-来苏糖→D-阿洛糖/D-阿卓糖/D-葡萄糖/D-甘露糖/D-古洛糖/D-艾杜糖/D-半乳糖/D-塔罗糖）。D-葡萄糖、D-甘露糖和D-半乳糖是最常见的醛己糖；D-葡萄糖仅在C-2构型上与D-甘露糖不同，仅在C-4构型上与D-半乳糖不同。仅在一个不对称碳原子上构型不同的单糖被称为差向异构体（表异构体）。"
  },
  points: [
    { cz: "obecné pravidlo: 2ⁿ stereoizomerů", en: "General rule: a molecule containing n asymmetric carbons and no plane of symmetry has 2ⁿ stereoisomeric forms.", cn: "一般规则：含有n个不对称碳原子且无对称面的分子有2ⁿ种立体异构体。" },
    { cz: "aldotetrosy (n=2) → 4 stereoizomery", en: "Extending an aldotriose's chain by one HCOH group gives 4 ALDOTETROSES (n=2): two of the D-series (D-erythrose, D-threose) and two of the L-series (L-erythrose, L-threose).", cn: "将醛丙糖链延长一个HCOH基团，得到4种醛丁糖（n=2）：两种D系（D-赤藓糖、D-苏糖），两种L系（L-赤藓糖、L-苏糖）。" },
    { cz: "aldopentosy → 8 (2³) stereoizomerů", en: "Aldopentoses have three asymmetric centers, so 8 (2³) stereoisomers exist — 4 in the D-series, 4 in the L-series.", cn: "醛戊糖有三个不对称中心，因而存在8（2³）种立体异构体——D系4种，L系4种。" },
    { cz: "aldohexosy → 16 (2⁴) stereoizomerů (obr. 7.1)", en: "Aldohexoses contain 4 asymmetric carbons, so 16 (2⁴) stereoisomers exist. Obr. 7.1 traces out the full D-branch of the tree: D-glyceraldehyde → D-erythrose/D-threose → D-ribose/D-arabinose/D-xylose/D-lyxose → the eight D-aldohexoses D-allose, D-altrose, D-glucose, D-mannose, D-gulose, D-idose, D-galactose, D-talose.", cn: "醛己糖含有4个不对称碳原子，因而存在16（2⁴）种立体异构体。图7.1描绘了完整的D系分支：D-甘油醛→D-赤藓糖/D-苏糖→D-核糖/D-阿拉伯糖/D-木糖/D-来苏糖→八种D-醛己糖：D-阿洛糖、D-阿卓糖、D-葡萄糖、D-甘露糖、D-古洛糖、D-艾杜糖、D-半乳糖、D-塔罗糖。" },
    { cz: "D-glukosa, D-mannosa, D-galaktosa = nejběžnější aldohexosy", en: "D-glucose, D-mannose and D-galactose are the most common aldohexoses. D-glucose differs from D-mannose ONLY in configuration at C-2, and from D-galactose ONLY in configuration at C-4 — both directly readable from Obr. 7.1's Fischer columns.", cn: "D-葡萄糖、D-甘露糖和D-半乳糖是最常见的醛己糖。D-葡萄糖仅在C-2构型上与D-甘露糖不同，仅在C-4构型上与D-半乳糖不同——这两点都可以直接从图7.1的费歇尔投影列中读出。" },
    { cz: "epimery = liší se v 1 asymetrickém C", en: "Monosaccharides that differ in configuration at only ONE asymmetric carbon are called EPIMERS — D-glucose/D-mannose (epimers at C-2) and D-glucose/D-galactose (epimers at C-4) are the book's own examples.", cn: "仅在一个不对称碳原子上构型不同的单糖称为差向异构体（表异构体）——D-葡萄糖/D-甘露糖（C-2差向异构体）和D-葡萄糖/D-半乳糖（C-4差向异构体）是教材给出的例子。" }
  ],
  terms: [
    { cz: "epimer", en: "epimer", cn: "差向异构体（表异构体）", def_en: "Monosaccharides that differ in configuration at exactly one asymmetric carbon; D-glucose/D-mannose (C-2) and D-glucose/D-galactose (C-4) are the book's examples.", def_cn: "仅在一个不对称碳原子上构型不同的单糖；教材举例为D-葡萄糖/D-甘露糖（C-2）和D-葡萄糖/D-半乳糖（C-4）。" },
    { cz: "D-glukosa", en: "D-glucose", cn: "D-葡萄糖", def_en: "The most biochemically important aldohexose; differs from D-mannose at C-2 and from D-galactose at C-4.", def_cn: "生物化学上最重要的醛己糖；在C-2与D-甘露糖不同，在C-4与D-半乳糖不同。" },
    { cz: "D-mannosa", en: "D-mannose", cn: "D-甘露糖", def_en: "The C-2 epimer of D-glucose.", def_cn: "D-葡萄糖的C-2差向异构体。" },
    { cz: "D-galaktosa", en: "D-galactose", cn: "D-半乳糖", def_en: "The C-4 epimer of D-glucose.", def_cn: "D-葡萄糖的C-4差向异构体。" },
    { cz: "aldohexosa", en: "aldohexose", cn: "醛己糖", def_en: "A six-carbon aldose; 4 asymmetric carbons give 2⁴=16 possible stereoisomers, 8 of them in the D-series.", def_cn: "含六个碳原子的醛糖；4个不对称碳原子共给出2⁴=16种可能的立体异构体，其中D系8种。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How many stereoisomers of aldohexose exist in total, and how many belong to the D-series?",
      q_cn: "醛己糖共存在多少种立体异构体？其中属于D系的有多少种？",
      options: ["8 total, 4 in the D-series", "16 total, 8 in the D-series", "4 total, 2 in the D-series", "32 total, 16 in the D-series"],
      answer: 1,
      why_en: "Aldohexoses have 4 asymmetric carbons, giving 2⁴=16 total stereoisomers, half (8) in the D-series and half in the L-series — matching Obr. 7.1's eight named D-aldohexoses.",
      why_cn: "醛己糖有4个不对称碳原子，共给出2⁴=16种立体异构体，其中一半（8种）属于D系，另一半属于L系——与图7.1中列出的八种D-醛己糖一致。"
    },
    {
      type: "mcq",
      q_en: "D-glucose, D-mannose, and D-galactose are the three most common aldohexoses. How does D-glucose differ from each of the other two, per the book?",
      q_cn: "D-葡萄糖、D-甘露糖和D-半乳糖是三种最常见的醛己糖。根据教材，D-葡萄糖分别与另外两者有何不同？",
      options: [
        "It differs from D-mannose at C-2 and from D-galactose at C-4",
        "It differs from D-mannose at C-4 and from D-galactose at C-2",
        "It differs from both at C-1, the anomeric carbon",
        "It differs from both at C-6, the terminal carbon"
      ],
      answer: 0,
      why_en: "The book states D-glucose differs from D-mannose only in configuration at C-2, and from D-galactose only in configuration at C-4 — the reverse pairing (option B) swaps these, and options C/D name carbons not involved in this particular set of epimeric relationships.",
      why_cn: "教材指出，D-葡萄糖仅在C-2构型上与D-甘露糖不同，仅在C-4构型上与D-半乳糖不同——选项B把两者对调了，选项C、D提到的碳原子与这组差向异构关系无关。"
    },
    {
      type: "short",
      q_en: "Define 'epimer' as the book uses the term, and give the two epimeric pairs it names involving D-glucose.",
      q_cn: "按照教材的用法定义「差向异构体（表异构体）」，并给出教材中涉及D-葡萄糖的两对差向异构体。",
      accept: ["epimer", "one asymmetric carbon", "C-2", "C-4", "mannose", "galactose", "差向异构", "一个不对称碳", "甘露糖", "半乳糖"],
      answer_en: "Epimers are monosaccharides that differ in configuration at only one asymmetric carbon. The book names D-glucose/D-mannose (differing at C-2) and D-glucose/D-galactose (differing at C-4) as its examples.",
      answer_cn: "差向异构体是指仅在一个不对称碳原子上构型不同的单糖。教材给出的例子是D-葡萄糖/D-甘露糖（C-2不同）和D-葡萄糖/D-半乳糖（C-4不同）。"
    }
  ],
  oral: {
    q_en: "Explain the 2ⁿ rule for stereoisomer counts and walk through how the book derives the aldohexose family, including the concept of epimers.",
    q_cn: "解释立体异构体数目的2ⁿ规则，并演示教材如何推导醛己糖系谱，包括差向异构体的概念。",
    model_en: "The governing rule here is simple: a molecule with n asymmetric carbons and no plane of symmetry has 2 to the n stereoisomeric forms. For aldotrioses, n is 1, which is exactly why glyceraldehyde gives just the two stereoisomers, D- and L-glyceraldehyde, that were already established. Extend the chain by one more HCOH group and you get the aldotetroses, where n is 2, so there are 4 stereoisomers: two in the D-series, D-erythrose and D-threose, and two mirror-image counterparts in the L-series. Aldopentoses have three asymmetric centers, so 2 cubed, or 8, stereoisomers exist, four of them D and four L. And by the same logic, aldohexoses carry four asymmetric carbons, giving 2 to the fourth, 16, stereoisomers in total, eight of them in the D-series. The book's own figure draws that entire D-branch out: starting from D-glyceraldehyde, branching to D-erythrose and D-threose, then to the four D-aldopentoses ribose, arabinose, xylose and lyxose, and finally to the eight D-aldohexoses — allose, altrose, glucose, mannose, gulose, idose, galactose and talose. Of those eight, glucose, mannose and galactose are singled out as the most common, and what's elegant is how closely related they are: glucose differs from mannose only in the configuration at carbon 2, and from galactose only in the configuration at carbon 4. That's exactly the situation the book uses to define an epimer: two monosaccharides that differ in configuration at just one single asymmetric carbon.",
    checklist: [
      "Stated the 2ⁿ rule for stereoisomer count",
      "Derived aldotetroses (n=2, 4 isomers), aldopentoses (n=3, 8 isomers), aldohexoses (n=4, 16 isomers)",
      "Named the full D-branch tree through Obr. 7.1: glyceraldehyde to erythrose/threose to the 4 D-pentoses to the 8 D-hexoses",
      "Identified D-glucose, D-mannose, D-galactose as the most common aldohexoses",
      "Stated glucose/mannose differ at C-2, glucose/galactose differ at C-4",
      "Defined epimer as differing at exactly one asymmetric carbon"
    ]
  }
},

{
  id: "7-1-2-2",
  chapter: 7,
  section: "7.1.2",
  czTitle: "Odvozování aldos a ketos — odvození řady ketos (obr. 7.2)",
  enTitle: "Deriving aldoses and ketoses — the ketose family tree (Obr. 7.2)",
  cnTitle: "醛糖与酮糖的推导——酮糖系谱（图7.2）",
  pages: [149, 150],
  coverage: "full",
  coverageNote: "The ketose-derivation paragraph at the bottom of page 149 (from 'Řadu ketos je možno odvodit...' through '...Nejběžnější ketohexosou je D-fruktosa.') read in full, plus Obr. 7.2 printed at the top of page 150 (the complete ketose family tree — dihydroxyacetone, D-erythrulosa, D-ribulosa/D-xylulosa, D-psikosa/D-fruktosa/D-sorbosa/D-tagatosa — all end-labels verified directly against the scan) and its caption. Note on page layout: the figure is physically printed on p.150, after the '7.1.3 Poloacetálové formy' heading has already begun at the bottom of p.149 — this reflects the book's own print flow (figures float to the next available page break), not a re-ordering choice made by this drafting pass.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "The series of ketoses can be derived from dihydroxyacetone in a manner analogous to how the aldohexose series was derived from glyceraldehyde. Because the starting compound, dihydroxyacetone, is OPTICALLY INACTIVE (it has no asymmetric carbon at all — a key structural difference from glyceraldehyde), KETOTETROSES contain only ONE asymmetric carbon and so only two stereoisomers exist (D- and L-erythrulose). Similarly, 4 stereoisomers of ketopentoses and 8 stereoisomers of ketohexoses can be derived (Obr. 7.2: dihydroxyacetone → D-erythrulose → D-ribulose/D-xylulose → D-psicose and D-fructose, from ribulose, plus D-sorbose and D-tagatose, from xylulose). The most common ketohexose is D-FRUCTOSE.",
    cn: "酮糖系列可以用与由甘油醛推导醛己糖系列类似的方式，从二羟丙酮推导得出。由于起始化合物二羟丙酮是光学不活性的（它根本没有不对称碳原子——这是与甘油醛的一个关键结构差异），酮丁糖只含有一个不对称碳原子，因而只存在两种立体异构体（D-赤藓酮糖和L-赤藓酮糖）。类似地，可以推导出4种酮戊糖立体异构体和8种酮己糖立体异构体（图7.2：二羟丙酮→D-赤藓酮糖→D-核酮糖/D-木酮糖→由核酮糖衍生的D-阿洛酮糖和D-果糖，以及由木酮糖衍生的D-山梨糖和D-塔格糖）。最常见的酮己糖是D-果糖。"
  },
  points: [
    { cz: "ketosy odvozeny z dihydroxyacetonu obdobně jako aldosy z glyceraldehydu", en: "The series of ketoses can be derived from DIHYDROXYACETONE in a manner analogous to how the aldose series is derived from glyceraldehyde — chain extension by successive HCOH groups.", cn: "酮糖系列可以用与由甘油醛推导醛糖系列类似的方式，从二羟丙酮通过逐步延长HCOH基团推导得出。" },
    { cz: "dihydroxyaceton = opticky neaktivní (žádný asymetrický C)", en: "The key structural difference from the aldose case: dihydroxyacetone, the ketose series' starting compound, is OPTICALLY INACTIVE — it has no asymmetric carbon at all (C-2 is a symmetric ketone carbon), unlike glyceraldehyde.", cn: "与醛糖情形的关键结构差异在于：酮糖系列的起始化合物二羟丙酮是光学不活性的——它根本没有不对称碳原子（C-2是对称的酮基碳），这与甘油醛不同。" },
    { cz: "ketotetrosy → jen 2 stereoizomery (D-/L-erythrulosa)", en: "Because of dihydroxyacetone's lack of chirality, KETOTETROSES contain only ONE asymmetric carbon, so only TWO stereoisomers exist: D-erythrulose and L-erythrulose — half as many as the four aldotetroses at the same chain length.", cn: "由于二羟丙酮不具有手性，酮丁糖只含有一个不对称碳原子，因而只存在两种立体异构体：D-赤藓酮糖和L-赤藓酮糖——数量是同碳链长度醛丁糖（4种）的一半。" },
    { cz: "ketopentosy → 4 stereoizomery; ketohexosy → 8 (obr. 7.2)", en: "Analogously, 4 stereoisomers of KETOPENTOSES and 8 stereoisomers of KETOHEXOSES can be derived (Obr. 7.2). The tree runs: dihydroxyacetone → D-erythrulose → D-ribulose and D-xylulose (ketopentoses) → from D-ribulose, D-psicose and D-fructose; from D-xylulose, D-sorbose and D-tagatose (ketohexoses).", cn: "类似地，可以推导出4种酮戊糖立体异构体和8种酮己糖立体异构体（图7.2）。系谱为：二羟丙酮→D-赤藓酮糖→D-核酮糖和D-木酮糖（酮戊糖）→由D-核酮糖衍生出D-阿洛酮糖和D-果糖；由D-木酮糖衍生出D-山梨糖和D-塔格糖（酮己糖）。" },
    { cz: "D-fruktosa = nejběžnější ketohexosa", en: "The most common ketohexose is D-FRUCTOSE, derived (per Obr. 7.2) from D-ribulose.", cn: "最常见的酮己糖是D-果糖，（据图7.2）由D-核酮糖衍生而来。" }
  ],
  terms: [
    { cz: "ketosa", en: "ketose", cn: "酮糖", def_en: "A monosaccharide whose carbonyl group is a ketone rather than an aldehyde; the whole series derives formally from dihydroxyacetone.", def_cn: "羰基为酮基而非醛基的单糖；整个系列可形式上从二羟丙酮推导而来。" },
    { cz: "dihydroxyaceton", en: "dihydroxyacetone", cn: "二羟丙酮", def_en: "The simplest ketose (a triose), optically inactive because it has no asymmetric carbon; the parent compound of the whole ketose family tree.", def_cn: "最简单的酮糖（丙糖），因不含不对称碳原子而无光学活性；是整个酮糖系谱的原型化合物。" },
    { cz: "D-erythrulosa", en: "D-erythrulose", cn: "D-赤藓酮糖", def_en: "The ketotetrose; only 2 stereoisomers exist (D-/L-) because it carries just one asymmetric carbon.", def_cn: "酮丁糖；因只含一个不对称碳原子，仅存在2种立体异构体（D-/L-）。" },
    { cz: "D-fruktosa", en: "D-fructose", cn: "D-果糖", def_en: "The most common ketohexose, derived from D-ribulose in the book's own family tree (Obr. 7.2).", def_cn: "最常见的酮己糖，在教材的系谱图（图7.2）中由D-核酮糖衍生而来。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why do ketotetroses have only 2 stereoisomers while aldotetroses have 4, even though both are derived by extending a triose's chain by one carbon?",
      q_cn: "为什么酮丁糖只有2种立体异构体，而醛丁糖有4种，尽管两者都是通过将丙糖链延长一个碳原子而得到的？",
      options: [
        "Because ketotetroses are unstable and half of them decompose",
        "Because dihydroxyacetone, the ketose series' starting triose, is optically inactive (no asymmetric carbon), so the resulting ketotetrose has only one asymmetric carbon instead of two",
        "Because the book only lists the D-series for ketotetroses, ignoring the L-series",
        "Because ketotetroses have five carbons, not four"
      ],
      answer: 1,
      why_en: "Glyceraldehyde (the aldose parent triose) already has one asymmetric carbon, so extending its chain gives an aldotetrose with 2 asymmetric carbons (4 stereoisomers). Dihydroxyacetone (the ketose parent triose) has NO asymmetric carbon, so extending its chain gives a ketotetrose with only 1 asymmetric carbon (2 stereoisomers) — not decomposition, not an omitted L-series, not a carbon-count error.",
      why_cn: "甘油醛（醛糖系列的丙糖原型）本身就有一个不对称碳原子，因此延长其链得到的醛丁糖有2个不对称碳原子（4种立体异构体）。二羟丙酮（酮糖系列的丙糖原型）没有不对称碳原子，因此延长其链得到的酮丁糖只有1个不对称碳原子（2种立体异构体）——并非分解、并非省略了L系、也不是碳原子数有误。"
    },
    {
      type: "mcq",
      q_en: "In the book's ketose family tree (Obr. 7.2), which ketopentose is D-fructose derived from?",
      q_cn: "在教材的酮糖系谱（图7.2）中，D-果糖是由哪种酮戊糖衍生而来的？",
      options: ["D-xylulose", "D-ribulose", "D-erythrulose directly", "D-sorbose"],
      answer: 1,
      why_en: "Obr. 7.2 branches D-ribulose into D-psicose and D-fructose, while D-xylulose branches into D-sorbose and D-tagatose. D-erythrulose is a ketotetrose, one step earlier than the ketopentoses, so it does not branch directly into a ketohexose.",
      why_cn: "图7.2中，D-核酮糖分支出D-阿洛酮糖和D-果糖，而D-木酮糖分支出D-山梨糖和D-塔格糖。D-赤藓酮糖是酮丁糖，比酮戊糖早一步，并不直接分支出酮己糖。"
    },
    {
      type: "short",
      q_en: "How many stereoisomers of ketopentose and ketohexose exist, per the book, and what starting compound is the whole ketose series derived from?",
      q_cn: "根据教材，酮戊糖和酮己糖各存在多少种立体异构体？整个酮糖系列是从哪个起始化合物推导出来的？",
      accept: ["4", "8", "dihydroxyacetone", "二羟丙酮"],
      answer_en: "4 stereoisomers of ketopentose and 8 of ketohexose exist, derived in a manner analogous to the aldose series but starting from dihydroxyacetone (which, being optically inactive, gives half as many isomers at each chain length as the corresponding aldose series).",
      answer_cn: "存在4种酮戊糖立体异构体和8种酮己糖立体异构体，其推导方式与醛糖系列类似，但起始化合物是二羟丙酮（由于二羟丙酮无光学活性，同碳链长度下其异构体数目是相应醛糖系列的一半）。"
    }
  ],
  oral: {
    q_en: "Explain how the ketose family tree is derived, contrasting it with the aldose derivation, and identify the most common ketohexose.",
    q_cn: "解释酮糖系谱是如何推导出来的，并与醛糖的推导方式进行对比，指出最常见的酮己糖。",
    model_en: "The ketose series can be derived from dihydroxyacetone in essentially the same stepwise way the aldose series was derived from glyceraldehyde, extending the chain one HCOH group at a time. But there's a crucial difference right at the start: dihydroxyacetone, unlike glyceraldehyde, is optically inactive, because it simply doesn't have an asymmetric carbon. That one fact cascades through the whole tree — a ketotetrose ends up with only one asymmetric carbon instead of two, so there are only two stereoisomers, D- and L-erythrulose, instead of the four aldotetroses. Carrying the same logic forward, you get four stereoisomers of ketopentose and eight of ketohexose, which the book's own figure lays out as a tree: dihydroxyacetone branches to D-erythrulose, which branches to the two ketopentoses D-ribulose and D-xylulose, and those in turn branch into the four ketohexoses — D-ribulose gives D-psicose and D-fructose, while D-xylulose gives D-sorbose and D-tagatose. Of those four ketohexoses, D-fructose is by far the most common and biochemically important one.",
    checklist: [
      "Stated the ketose series derives from dihydroxyacetone, analogous to the aldose derivation from glyceraldehyde",
      "Explained dihydroxyacetone's optical inactivity (no asymmetric carbon) as the key structural difference",
      "Derived ketotetrose (1 asymmetric C, 2 isomers), ketopentose (4 isomers), ketohexose (8 isomers)",
      "Named the full tree: dihydroxyacetone to erythrulose to ribulose/xylulose to psicose/fructose/sorbose/tagatose",
      "Identified D-fructose as the most common ketohexose"
    ]
  }
},

{
  id: "7-1-3-1",
  chapter: 7,
  section: "7.1.3",
  czTitle: "Poloacetálové formy — vznik, anomery, Haworthovy vzorce",
  enTitle: "Hemiacetal/hemiketal forms — formation, anomers, Haworth formulas",
  cnTitle: "半缩醛/半缩酮形式——形成、异头物、哈沃斯投影式",
  pages: [149, 150, 151],
  coverage: "full",
  coverageNote: "Text from the bottom of page 149 ('7.1.3 Poloacetálové formy' heading and the D-glucose pyranose-formation opening) through all of page 150 (fructose furanose-formation sentence, the Fischer-vs-Haworth convention paragraph, the anomeric-carbon/anomer-definition paragraph, and the furanose-occurrence-context paragraph) read in full, plus page 151's Obr. 7.3 (D-glukosa — tvorba cyklických poloacetálových forem: acyclic Fischer form, an intermediate open-chain-with-ring-forming-bond drawing, and both α-D-glukopyranosa/β-D-glukopyranosa Haworth structures, each zoomed and individually checked substituent-by-substituent against the standard α/β-D-glucopyranose convention — both match) and Obr. 7.4 (D-fruktosa — tvorba cyklické poloacetálové formy, α-D-fruktofuranosa) verified directly, plus the closing paragraph on pentoses in nucleic acids versus free D-ribose. Ends right before the '7.1.4 Mutarotace' heading.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "The carbonyl group of monosaccharides is very reactive, and this reactivity is responsible for the formation of monosaccharides' cyclic forms. In D-glucose, the aldehyde group at C-1 (in the straight-chain form) can react with the hydroxyl group at C-5, forming an intramolecular HEMIACETAL; the resulting ring is called a PYRANOSE, by analogy with pyran (Obr. 7.3). In D-fructose, the keto group at C-2 in the acyclic chain can react with the hydroxyl group at C-5, forming a HEMIKETAL; this five-membered ring is called a FURANOSE, by analogy with furan (Obr. 7.4). Cyclic forms of monosaccharides are depicted using either FISCHER formulas or HAWORTH formulas; in a Haworth formula, the ring is drawn as a plane in perspective view, with substituents on individual carbons shown either above or below that plane. When converting from the acyclic form (or a Fischer formula derived from it), the primary-alcohol group is drawn ABOVE the ring plane for the D-series and BELOW it for the L-series; substituents that were on the RIGHT in the acyclic formula are drawn BELOW the ring plane. Cyclization of hexoses and pentoses creates a NEW asymmetric carbon at C-1, so two cyclic forms can arise — for D-glucose, α-D-glucose and β-D-glucose. C-1 is called the ANOMERIC carbon, and the α/β forms are ANOMERS. The same situation occurs for the furanose ring, except there α and β refer to the configuration of the hydroxyl group at C-2 (fructose's own anomeric carbon, since its carbonyl started at C-2, not C-1). The furanose form of D-fructose occurs in oligosaccharides (e.g. sucrose), polysaccharides (e.g. inulin), and some phosphate esters; free D-fructose, however, preferentially forms the six-membered pyranose ring. Pentoses such as D-ribose or 2-deoxy-D-ribose, when bound in nucleic acids, form furanose rings (cross-referenced to the structure of DNA and RNA in chapter 4), whereas free D-ribose occurs predominantly as a pyranose.",
    cn: "单糖的羰基非常活泼，正是这种反应活性导致了单糖环状形式的形成。在D-葡萄糖中，直链形式C-1上的醛基可以与C-5上的羟基发生反应，形成分子内半缩醛；由此产生的环称为吡喃糖，得名于其与吡喃的相似性（图7.3）。在D-果糖中，无环链C-2上的酮基可以与C-5上的羟基反应，形成半缩酮；这个五元环称为呋喃糖，得名于其与呋喃的相似性（图7.4）。单糖的环状形式可以用费歇尔式或哈沃斯式表示；在哈沃斯式中，环被画成透视图中的一个平面，各碳原子上的取代基分别位于该平面之上或之下。由无环式（或由其推导出的费歇尔式）转换而来时，D系的伯醇基画在环平面之上，L系则画在其下方；在无环式中位于右侧的取代基，在哈沃斯式中画在环平面下方。己糖和戊糖环化时会产生一个新的不对称碳原子C-1，因而可产生两种环状形式——对D-葡萄糖而言，即α-D-葡萄糖和β-D-葡萄糖。C-1被称为异头碳，α/β形式称为异头物（端基异构体）。呋喃糖环也存在相同情况，只是此处的α和β指的是C-2上羟基的构型（果糖自身的异头碳，因为其羰基原本位于C-2而非C-1）。D-果糖的呋喃糖形式存在于低聚糖（如蔗糖）、多糖（如菊粉）以及某些磷酸酯中；然而游离的D-果糖优先形成六元吡喃环。像D-核糖或2-脱氧-D-核糖这样的戊糖，结合在核酸中时形成呋喃环（参见第4章DNA和RNA的结构），而游离的D-核糖则主要以吡喃糖形式存在。"
  },
  points: [
    { cz: "reaktivní karbonyl → cyklické formy", en: "The carbonyl group of monosaccharides is very reactive, and this reactivity is exactly what is responsible for the formation of monosaccharides' cyclic forms.", cn: "单糖的羰基非常活泼，正是这种反应活性造成了单糖环状形式的形成。" },
    { cz: "D-glukosa: C-1 + C-5-OH → poloacetal → pyranosa (obr. 7.3)", en: "In D-glucose, the aldehyde group at C-1 (of the straight chain) reacts with the hydroxyl group at C-5, forming an intramolecular HEMIACETAL. The resulting ring is called a PYRANOSE, by analogy with pyran, the reference 6-membered oxygen heterocycle (Obr. 7.3).", cn: "在D-葡萄糖中，直链上C-1的醛基与C-5的羟基反应，形成分子内半缩醛。由此产生的环称为吡喃糖，得名于参照的六元含氧杂环——吡喃（图7.3）。" },
    { cz: "D-fruktosa: C-2 + C-5-OH → poloketal → furanosa (obr. 7.4)", en: "In D-fructose, the keto group at C-2 (of the acyclic chain) reacts with the hydroxyl group at C-5, forming a HEMIKETAL. This five-membered ring is called a FURANOSE, by analogy with furan, the reference 5-membered oxygen heterocycle (Obr. 7.4).", cn: "在D-果糖中，无环链上C-2的酮基与C-5的羟基反应，形成半缩酮。这个五元环称为呋喃糖，得名于参照的五元含氧杂环——呋喃（图7.4）。" },
    { cz: "Fischerovy vs. Haworthovy vzorce; pravidlo: D nahoru, pravá strana → dolů", en: "Cyclic forms are shown using either Fischer or Haworth formulas. In a Haworth formula the ring is a perspective-view plane with substituents above/below it. Converting rule: the primary-alcohol group is drawn ABOVE the ring for the D-series (below for L-series); substituents that were on the RIGHT in the acyclic/Fischer formula are drawn BELOW the ring plane.", cn: "环状形式可用费歇尔式或哈沃斯式表示。在哈沃斯式中，环是透视图中的一个平面，取代基分别位于其上方或下方。转换规则：D系的伯醇基画在环上方（L系画在下方）；在无环式/费歇尔式中位于右侧的取代基，在哈沃斯式中画在环平面下方。" },
    { cz: "anomerní uhlík C-1, α/β-D-glukosa = anomery", en: "Cyclization of hexoses and pentoses generates a NEW asymmetric carbon at C-1, so two cyclic forms can arise: for D-glucose, α-D-glucose and β-D-glucose. C-1 is called the ANOMERIC CARBON, and the α/β forms are ANOMERS.", cn: "己糖和戊糖环化会产生一个新的不对称碳原子C-1，因而可以产生两种环状形式：对D-葡萄糖而言即α-D-葡萄糖和β-D-葡萄糖。C-1被称为异头碳，α/β形式称为异头物（端基异构体）。" },
    { cz: "furanosový kruh: α/β = konfigurace na C-2 (fruktosa)", en: "The same α/β anomer situation occurs for the furanose ring, but there α and β refer to the configuration of the HYDROXYL GROUP AT C-2 — because in a ketose like fructose, the original carbonyl (and hence the new stereocenter upon cyclization) is at C-2, not C-1.", cn: "呋喃糖环也存在相同的α/β异头物情况，但此处α和β指的是C-2上羟基的构型——因为在果糖这样的酮糖中，原本的羰基（因而环化后产生的新立体中心）位于C-2而非C-1。" },
    { cz: "furanosa-fruktosa: oligosacharidy/polysacharidy vs. volná = pyranosa", en: "The furanose form of D-fructose occurs in oligosaccharides (e.g. sucrose), polysaccharides (e.g. inulin), and some phosphate esters. Free D-fructose, however, PREFERENTIALLY forms the six-membered pyranose ring instead.", cn: "D-果糖的呋喃糖形式存在于低聚糖（如蔗糖）、多糖（如菊粉）以及某些磷酸酯中。然而游离的D-果糖则优先形成六元吡喃环。" },
    { cz: "pentosy v NK = furanosa; volná D-ribosa = pyranosa", en: "Pentoses such as D-ribose or 2-deoxy-D-ribose, when bound in nucleic acids, form FURANOSE rings (cross-referenced to DNA/RNA structure, ch. 4). Free D-ribose, by contrast, occurs predominantly in the PYRANOSE form.", cn: "像D-核糖或2-脱氧-D-核糖这样的戊糖，结合在核酸中时形成呋喃环（参见第4章DNA/RNA结构）。相比之下，游离的D-核糖主要以吡喃糖形式存在。" }
  ],
  terms: [
    { cz: "poloacetal (hemiacetal)", en: "hemiacetal", cn: "半缩醛", def_en: "The functional group formed when an aldehyde reacts intramolecularly with a hydroxyl group, as in D-glucose's C-1/C-5 ring closure.", def_cn: "醛基与羟基发生分子内反应所形成的官能团，如D-葡萄糖C-1/C-5成环反应。" },
    { cz: "poloketal (hemiketal)", en: "hemiketal", cn: "半缩酮", def_en: "The functional group formed when a ketone reacts intramolecularly with a hydroxyl group, as in D-fructose's C-2/C-5 ring closure.", def_cn: "酮基与羟基发生分子内反应所形成的官能团，如D-果糖C-2/C-5成环反应。" },
    { cz: "pyranosa / furanosa", en: "pyranose / furanose", cn: "吡喃糖／呋喃糖", def_en: "The 6-membered (pyranose, named after pyran) and 5-membered (furanose, named after furan) cyclic sugar ring forms.", def_cn: "六元（吡喃糖，得名于吡喃）和五元（呋喃糖，得名于呋喃）环状糖形式。" },
    { cz: "anomerní uhlík, anomery (α/β)", en: "anomeric carbon, anomers (α/β)", cn: "异头碳，异头物（α/β）", def_en: "The new asymmetric carbon created by ring closure (C-1 for aldoses, C-2 for ketoses like fructose); its two possible configurations are the α and β anomers.", def_cn: "成环时产生的新不对称碳原子（醛糖为C-1，果糖等酮糖为C-2）；其两种可能构型即为α和β异头物。" },
    { cz: "Haworthův vzorec", en: "Haworth formula", cn: "哈沃斯投影式", def_en: "A perspective-plane depiction of a sugar ring, with substituents shown above or below the ring plane by a fixed conversion rule from the Fischer/acyclic formula.", def_cn: "以透视平面表示糖环的画法，取代基按照由费歇尔式/无环式转换而来的固定规则画在环平面上方或下方。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In furanose-ring D-fructose, the α/β anomeric designation refers to the configuration at which carbon, and why is that carbon different from the aldose case?",
      q_cn: "在呋喃糖环的D-果糖中，α/β异头物标记指的是哪个碳原子的构型？为什么这个碳原子与醛糖的情况不同？",
      options: [
        "C-1, exactly as in aldoses, because all sugars use the same anomeric carbon",
        "C-2, because fructose's original carbonyl (ketone) group — and hence the new stereocenter formed on cyclization — is located at C-2, not C-1",
        "C-5, because that is the carbon whose hydroxyl attacks the carbonyl",
        "C-6, the terminal carbon bearing CH₂OH"
      ],
      answer: 1,
      why_en: "The book explicitly states that for the furanose ring, α and β refer to the configuration of the hydroxyl at C-2 — because fructose is a ketose whose carbonyl sits at C-2 in the open chain, so cyclization creates the new (anomeric) stereocenter there rather than at C-1 as in aldoses like glucose.",
      why_cn: "教材明确指出，对于呋喃糖环，α和β指的是C-2上羟基的构型——因为果糖是酮糖，其羰基在开链形式中位于C-2，因此环化产生的新（异头）立体中心也在C-2，而不像葡萄糖等醛糖那样在C-1。"
    },
    {
      type: "mcq",
      q_en: "Per the book, in which contexts does D-fructose adopt the furanose ring, versus preferring the pyranose ring?",
      q_cn: "根据教材，D-果糖在哪些情况下采取呋喃糖环形式？在什么情况下优先采取吡喃糖环？",
      options: [
        "Furanose always, regardless of context; pyranose never occurs for fructose",
        "Furanose in oligosaccharides (e.g. sucrose), polysaccharides (e.g. inulin), and some phosphate esters; free D-fructose preferentially forms the pyranose ring instead",
        "Pyranose only when bound in nucleic acids; furanose only in the free state",
        "The book does not distinguish between contexts for fructose's ring form"
      ],
      answer: 1,
      why_en: "The book states the furanose form of D-fructose occurs specifically in oligosaccharides like sucrose, polysaccharides like inulin, and some phosphate esters, while free D-fructose preferentially forms the six-membered pyranose ring — the reverse of options A, C, and the non-answer D.",
      why_cn: "教材指出，D-果糖的呋喃糖形式specifically存在于蔗糖等低聚糖、菊粉等多糖以及某些磷酸酯中，而游离的D-果糖则优先形成六元吡喃环——这与选项A、C及未作区分的选项D相反。"
    },
    {
      type: "short",
      q_en: "Explain the rule for converting an acyclic Fischer-projection substituent's left/right position into its above/below position in a Haworth formula, for the D-series.",
      q_cn: "解释D系单糖中，费歇尔投影式中取代基的左右位置如何转换为哈沃斯式中的上下位置？",
      accept: ["right", "below", "left", "above", "primary alcohol", "右", "下方", "左", "上方", "伯醇"],
      answer_en: "For the D-series, the primary-alcohol group is drawn above the ring plane; substituents that were on the RIGHT side in the acyclic (or Fischer) formula are drawn BELOW the ring plane in the Haworth formula (and, by implication, substituents on the left are drawn above).",
      answer_cn: "对于D系单糖，伯醇基画在环平面上方；在无环式（或费歇尔式）中位于右侧的取代基，在哈沃斯式中画在环平面下方（相应地，左侧的取代基则画在上方）。"
    }
  ],
  oral: {
    q_en: "Explain how monosaccharides form cyclic hemiacetal/hemiketal structures, the Fischer-to-Haworth conversion rule, and the concept of the anomeric carbon.",
    q_cn: "解释单糖如何形成环状半缩醛/半缩酮结构、费歇尔式到哈沃斯式的转换规则，以及异头碳的概念。",
    model_en: "The carbonyl group of a monosaccharide is highly reactive, and it's exactly that reactivity that drives the formation of cyclic sugar structures. Take D-glucose: in its straight-chain form, the aldehyde at carbon 1 can react with the hydroxyl group at carbon 5, closing an intramolecular hemiacetal, and the resulting six-membered ring is called a pyranose, named by analogy with the reference compound pyran. D-fructose does something structurally similar but starting from a ketone rather than an aldehyde: its keto group at carbon 2 reacts with the hydroxyl at carbon 5 to form a hemiketal, giving a five-membered ring called a furanose, by analogy with furan. To actually draw these rings, the book uses either Fischer formulas or Haworth formulas, and in a Haworth formula the ring is shown as a flat plane in perspective, with substituents sitting either above or below that plane. There's a specific conversion rule for getting from the acyclic form to a Haworth drawing: for the D-series, the primary alcohol group goes above the ring, and any substituent that was drawn on the right-hand side in the acyclic or Fischer formula ends up below the ring plane. Now, closing that ring creates something new — a fresh asymmetric carbon at carbon 1 — so two distinct cyclic forms become possible, alpha and beta, and this carbon is given a special name, the anomeric carbon, with alpha and beta called anomers. Exactly the same thing happens for the furanose ring, except there the anomeric center, and hence the alpha/beta distinction, sits at carbon 2, because that's where fructose's original ketone group was. And these forms aren't just theoretical: the furanose form of fructose actually shows up in oligosaccharides like sucrose, in polysaccharides like inulin, and in some phosphate esters, whereas free fructose on its own prefers the six-membered pyranose ring. The same free-versus-bound contrast shows up with pentoses: ribose and deoxyribose form furanose rings when they're incorporated into nucleic acids, but free D-ribose mostly exists as a pyranose.",
    checklist: [
      "Explained hemiacetal formation in D-glucose (C-1 aldehyde + C-5 OH) giving pyranose",
      "Explained hemiketal formation in D-fructose (C-2 ketone + C-5 OH) giving furanose",
      "Named Fischer vs Haworth as the two depiction conventions",
      "Stated the Haworth conversion rule (D-series primary alcohol above; right-hand substituents go below)",
      "Defined the anomeric carbon and anomers (α/β), noting it's C-1 for glucose but C-2 for fructose's furanose ring",
      "Contrasted fructose's furanose (oligo/polysaccharide-bound) vs pyranose (free) preference",
      "Contrasted nucleic-acid-bound pentose furanose vs free D-ribose pyranose"
    ]
  }
},

{
  id: "7-1-3-2",
  chapter: 7,
  section: "7.1.3",
  czTitle: "Poloacetálové formy — obr. 7.5, různá zobrazení D-glukosy",
  enTitle: "Hemiacetal forms — Obr. 7.5, multiple representations of D-glucose",
  cnTitle: "半缩醛形式——图7.5，D-葡萄糖的多种表示法",
  pages: [152],
  coverage: "full",
  coverageNote: "This node covers only the Obr. 7.5 figure block occupying the top portion of page 152 (both panel a and panel b, plus its caption), read and zoomed directly. The figure carries no accompanying explanatory paragraph of its own on this page (its content was already described in prose earlier, in node 7-1-3-1, on page 150 — the paragraph there explicitly says '(viz obr. 7.5)' when introducing the Fischer/Haworth convention). The remainder of page 152, from the '7.2 Biochemicky významné deriváty monosacharidů' heading onward, belongs to node 7-2-1.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Obr. 7.5 is a purely visual capstone to section 7.1.3, with two panels. Panel (a) shows the SAME molecule, α-D-glucopyranose, across four successive representations: the acyclic form (Fischer), a cyclic Fischer projection (drawn with a vertical bracket connecting C-1 and C-5 through the ring oxygen), the Haworth projection, and a stereo-projection in the CHAIR conformation ('židličková konformace') — this chair form is a new representation type, not separately named or discussed anywhere in the surrounding running text within this page range. Panel (b) shows FIVE Haworth-projection forms of D-glucose side by side: α-D-pyranose, β-D-pyranose, the acyclic form, α-D-furanose, and β-D-furanose — illustrating that D-glucose can, in principle, close into either a six-membered (pyranose) or five-membered (furanose) ring. It is worth flagging that the book's running text within this page range (the mutarotation discussion in 7.1.4, and the general poloacetal discussion in 7-1-3-1) only ever discusses the pyranose anomers plus a small acyclic fraction as the practically relevant equilibrium species for free D-glucose in solution, and never quantifies or otherwise mentions a furanose fraction of free D-glucose — so panel (b)'s furanose forms should be read as illustrating a structural possibility, not as evidence the book treats D-glucofuranose as an actually significant species in the free-sugar equilibrium.",
    cn: "图7.5是7.1.3节的一个纯视觉性总结图，包含两个部分。(a)部分展示了同一分子——α-D-吡喃葡萄糖——的四种连续表示法：无环式（费歇尔式）、环状费歇尔投影式（用一条竖直括号线通过环氧连接C-1和C-5）、哈沃斯投影式，以及椅式构象的立体投影（「椅式构象」）——这种椅式表示法是一种新的表示类型，在本页范围内的正文中并未单独命名或讨论。(b)部分并排展示了D-葡萄糖的五种哈沃斯投影形式：α-D-吡喃糖、β-D-吡喃糖、无环式、α-D-呋喃糖和β-D-呋喃糖——说明D-葡萄糖原则上既可以形成六元环（吡喃糖），也可以形成五元环（呋喃糖）。值得指出的是，本页范围内教材正文（7.1.4节的变旋光讨论，以及7-1-3-1节中关于半缩醛的一般性讨论）始终只讨论吡喃糖异头物加少量无环形式作为游离D-葡萄糖在溶液中实际相关的平衡物种，从未量化或提及游离D-葡萄糖中呋喃糖形式所占的比例——因此(b)部分中的呋喃糖形式应理解为展示一种结构上的可能性，而不能作为教材认为D-呋喃葡萄糖是游离糖平衡中实际显著物种的证据。"
  },
  points: [
    { cz: "obr. 7.5a: 4 zobrazení téže molekuly", en: "Obr. 7.5(a) shows the SAME molecule, α-D-glucopyranose, across four successive representations: acyclic Fischer form → cyclic Fischer projection (a vertical bracket connects C-1 and C-5 through the ring O) → Haworth projection → stereo-projection in the CHAIR conformation ('židličková konformace').", cn: "图7.5(a)展示了同一分子——α-D-吡喃葡萄糖——的四种连续表示法：无环费歇尔式→环状费歇尔投影式（一条竖直括号线通过环氧连接C-1和C-5）→哈沃斯投影式→椅式构象的立体投影。" },
    { cz: "'židličková konformace' — nová, dosud nepojmenovaná forma", en: "The chair conformation ('židličková konformace') shown in this figure is a genuinely new representation type — it is not named or explained anywhere else in the running text within this page range (7.1.1 through 7.2.6); it appears here only as a figure-caption label.", cn: "该图中出现的椅式构象是一种全新的表示类型——在本页范围内（7.1.1至7.2.6）的正文中并未在其他任何地方命名或解释；它仅在此处作为图注标签出现。" },
    { cz: "obr. 7.5b: 5 forem D-glukosy v Haworthově zobrazení", en: "Obr. 7.5(b) shows FIVE Haworth-projection forms of D-glucose side by side: α-D-pyranose, β-D-pyranose, the acyclic form, α-D-furanose, and β-D-furanose.", cn: "图7.5(b)并排展示了D-葡萄糖的五种哈沃斯投影形式：α-D-吡喃糖、β-D-吡喃糖、无环式、α-D-呋喃糖、β-D-呋喃糖。" },
    { cz: "POZOR: text jinde nekvantifikuje furanosový podíl volné D-glukosy", en: "FLAG: nowhere in the surrounding running text (the mutarotation section 7.1.4, or the hemiacetal-formation discussion in node 7-1-3-1) does the book quantify or otherwise discuss a furanose fraction of free D-glucose — the mutarotation discussion speaks only of an α/β-pyranose equilibrium with 'a very small amount of the acyclic form.' Panel (b)'s furanose forms of glucose should therefore be read as illustrating a structural possibility that the book's own numeric/equilibrium discussion elsewhere does not revisit, not as a claim that D-glucofuranose is a practically significant species.", cn: "提示：在周边正文（7.1.4节的变旋光讨论，或7-1-3-1节中关于半缩醛形成的讨论）中，教材均未量化或提及游离D-葡萄糖中呋喃糖形式所占的比例——变旋光讨论只提到α/β-吡喃糖平衡，外加「极少量的无环形式」。因此(b)部分中葡萄糖的呋喃糖形式应理解为展示一种结构上的可能性，而教材其他地方的定量/平衡讨论并未再提及它，不应被解读为D-呋喃葡萄糖是实际显著的物种。" }
  ],
  terms: [
    { cz: "stereo-projekce (židličková konformace)", en: "stereo-projection (chair conformation)", cn: "立体投影（椅式构象）", def_en: "A three-dimensional depiction of the pyranose ring in its chair shape, shown in Obr. 7.5(a) as one of four equivalent representations of α-D-glucopyranose.", def_cn: "以椅式形状呈现吡喃环的三维表示法，图7.5(a)中作为α-D-吡喃葡萄糖四种等价表示法之一出现。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Obr. 7.5(a) shows α-D-glucopyranose in four successive representations. Which sequence matches the book's own order?",
      q_cn: "图7.5(a)以四种连续的表示法展示了α-D-吡喃葡萄糖。以下哪个顺序与教材的排列一致？",
      options: [
        "Haworth projection → chair conformation → Fischer projection → acyclic form",
        "Acyclic form (Fischer) → cyclic Fischer projection → Haworth projection → stereo-projection (chair conformation)",
        "Chair conformation → acyclic form → Haworth projection → cyclic Fischer projection",
        "Cyclic Fischer projection → acyclic form → chair conformation → Haworth projection"
      ],
      answer: 1,
      why_en: "The book's own figure runs left to right: acyclic form of glucose (Fischer) → cyclic Fischer projection (with the vertical O-bracket) → Haworth projection → stereo-projection in the chair conformation, all depicting the same molecule, α-D-glucopyranose.",
      why_cn: "教材图示从左到右依次为：葡萄糖的无环式（费歇尔式）→环状费歇尔投影式（带竖直O括号线）→哈沃斯投影式→椅式构象的立体投影，四者描绘的是同一个分子——α-D-吡喃葡萄糖。"
    },
    {
      type: "short",
      q_en: "What five forms of D-glucose does Obr. 7.5(b) show, and what caveat applies to the two furanose forms given what the rest of the book's text (7.1.4's mutarotation discussion) actually discusses?",
      q_cn: "图7.5(b)展示了D-葡萄糖的哪五种形式？结合教材其余正文（7.1.4节的变旋光讨论）的实际内容，对其中的两种呋喃糖形式应如何理解？",
      accept: ["pyranose", "furanose", "acyclic", "mutarotation", "equilibrium", "吡喃糖", "呋喃糖", "无环", "变旋光", "平衡"],
      answer_en: "Obr. 7.5(b) shows α-D-pyranose, β-D-pyranose, the acyclic form, α-D-furanose, and β-D-furanose. The caveat: the book's mutarotation discussion (7.1.4) only describes an α/β-pyranose equilibrium with a small acyclic fraction for free D-glucose in solution, and never quantifies or revisits a furanose fraction — so the furanose panels illustrate a structural possibility rather than a species the book treats as practically significant for free glucose.",
      answer_cn: "图7.5(b)展示了α-D-吡喃糖、β-D-吡喃糖、无环式、α-D-呋喃糖和β-D-呋喃糖。需要注意的是：教材的变旋光讨论（7.1.4节）只描述了游离D-葡萄糖在溶液中的α/β-吡喃糖平衡及少量无环形式，从未量化或再次提及呋喃糖比例——因此呋喃糖形式只是展示一种结构上的可能性，而非教材认为对游离葡萄糖具有实际意义的物种。"
    }
  ],
  oral: {
    q_en: "Describe what Obr. 7.5 illustrates and flag the one point where it goes beyond what the surrounding running text actually discusses.",
    q_cn: "描述图7.5所展示的内容，并指出其中一处超出周边正文实际讨论范围的地方。",
    model_en: "Obr. 7.5 works as a visual summary rather than introducing new chemistry of its own. The first panel takes a single molecule, alpha-D-glucopyranose, and shows it four different ways: as the acyclic Fischer formula, as a cyclic Fischer projection with the ring oxygen drawn as a vertical bracket connecting carbon 1 and carbon 5, as the familiar Haworth projection, and finally as a three-dimensional stereo-projection in the chair conformation — a representation that, within this page range, only ever appears here, in this one figure caption. The second panel lines up five Haworth-projection forms of D-glucose side by side: the alpha and beta pyranose anomers, the acyclic form, and then the alpha and beta furanose anomers. That last pair is worth being careful with, though, because nowhere else in this page range, including the mutarotation section, does the book actually quantify or discuss a furanose fraction for free D-glucose in solution — the mutarotation discussion only ever talks about an alpha/beta pyranose equilibrium with a very small acyclic component. So those two furanose panels are best read as showing that a five-membered ring is structurally possible for glucose, not as the book asserting that glucofuranose is actually present in any meaningful amount in real solutions of free glucose.",
    checklist: [
      "Described panel (a): four representations of α-D-glucopyranose (acyclic, cyclic Fischer, Haworth, chair)",
      "Named the chair conformation as a representation not otherwise discussed in this page range",
      "Described panel (b): 5 Haworth forms of D-glucose (α/β-pyranose, acyclic, α/β-furanose)",
      "Flagged that the book's mutarotation discussion never quantifies a furanose fraction for free D-glucose"
    ]
  }
},

{
  id: "7-1-4",
  chapter: 7,
  section: "7.1.4",
  czTitle: "Mutarotace",
  enTitle: "Mutarotation",
  cnTitle: "变旋现象",
  pages: [151],
  coverage: "full",
  coverageNote: "Full text of '7.1.4 Mutarotace' on page 151 read directly; all three specific-rotation values (+112°, +18.4°, and the equilibrium +52.7°) individually re-verified by a zoomed crop of the relevant sentences.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "The anomeric forms of D-glucose (α-D-glucose and β-D-glucose) readily interconvert in solution via the acyclic form. The α and β forms differ in their physical constants, above all in their optical rotation; the mutual conversion between α and β forms of a sugar is therefore accompanied by a change in optical rotation. The specific optical rotation of the α- and β-anomers of D-glucose is +112° and +18.4° respectively. If crystalline samples of EITHER pure anomer are dissolved in water, the specific optical rotation of the resulting solution changes over time until it reaches, in BOTH cases, the same equilibrium value of +52.7°. This change is called MUTAROTATION: the resulting equilibrium specific-rotation value corresponds to the rotation of the equilibrium mixture of α- and β-anomers, which contains only a very small amount of the acyclic form.",
    cn: "D-葡萄糖的异头物形式（α-D-葡萄糖和β-D-葡萄糖）在溶液中容易通过无环形式相互转化。α和β形式在物理常数上有所不同，尤其是旋光度；因此糖的α和β形式之间的相互转化伴随着旋光度的变化。D-葡萄糖的α和β异头物的比旋光度分别为+112°和+18.4°。若将任一纯异头物的结晶样品溶于水中，所得溶液的比旋光度会随时间变化，最终在两种情况下都达到相同的平衡值+52.7°。这种变化称为变旋现象：最终的平衡比旋光度值对应于α和β异头物平衡混合物的旋光度，该混合物中只含有极少量的无环形式。"
  },
  points: [
    { cz: "anomerní formy přecházejí jedna v druhou přes acyklickou formu", en: "The anomeric forms of D-glucose (α-D-glucose and β-D-glucose) readily interconvert in solution VIA THE ACYCLIC FORM as an intermediate.", cn: "D-葡萄糖的异头物形式（α-D-葡萄糖和β-D-葡萄糖）在溶液中容易通过无环形式作为中间体相互转化。" },
    { cz: "α a β liší se fyzikálními konstantami, hlavně optickou otáčivostí", en: "The α and β forms differ in their physical constants, above all in optical rotation, so the mutual conversion between them is accompanied by a change in optical rotation (rotace).", cn: "α和β形式在物理常数上有所不同，尤其是旋光度，因此二者之间的相互转化伴随着旋光度的变化。" },
    { cz: "α-D-glukosa +112°, β-D-glukosa +18,4°", en: "Specific optical rotation values: α-D-glucose = +112°, β-D-glucose = +18.4°.", cn: "比旋光度数值：α-D-葡萄糖为+112°，β-D-葡萄糖为+18.4°。" },
    { cz: "rovnovážná hodnota +52,7° pro OBĚ formy", en: "Dissolving crystalline samples of EITHER pure anomer in water causes the solution's specific rotation to drift over time until it reaches, in BOTH cases, the SAME equilibrium value: +52.7°.", cn: "将任一纯异头物的结晶样品溶于水，所得溶液的比旋光度会随时间漂移，最终在两种情况下都达到相同的平衡值：+52.7°。" },
    { cz: "mutarotace = tato změna; rovnováha obsahuje jen málo acyklické formy", en: "This drift in rotation is called MUTAROTATION. The equilibrium specific-rotation value corresponds to the rotation of the equilibrium α/β-anomer mixture, which contains only a VERY SMALL amount of the acyclic form.", cn: "这种旋光度的漂移变化称为变旋现象。最终的平衡比旋光度值对应于α/β异头物平衡混合物的旋光度，该混合物中只含有极少量的无环形式。" }
  ],
  terms: [
    { cz: "mutarotace", en: "mutarotation", cn: "变旋现象", def_en: "The time-dependent change in a sugar solution's optical rotation as its pure α- or β-anomer equilibrates, via the acyclic form, into the equilibrium anomer mixture.", def_cn: "糖溶液中，纯α或β异头物通过无环形式逐渐达到异头物平衡混合物过程中，旋光度随时间变化的现象。" },
    { cz: "specifická optická otáčivost", en: "specific optical rotation", cn: "比旋光度", def_en: "A physical constant distinguishing anomers; α-D-glucose = +112°, β-D-glucose = +18.4°, equilibrium mixture = +52.7°.", def_cn: "区分异头物的物理常数；α-D-葡萄糖为+112°，β-D-葡萄糖为+18.4°，平衡混合物为+52.7°。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "If you dissolve pure crystalline β-D-glucose in water, what happens to the solution's specific optical rotation over time, and why?",
      q_cn: "如果将纯的β-D-葡萄糖结晶溶于水中，随着时间推移，溶液的比旋光度会如何变化？为什么？",
      options: [
        "It stays fixed at +18.4° indefinitely, since β-D-glucose cannot convert to any other form in solution",
        "It drifts upward over time toward an equilibrium value of +52.7°, as β-D-glucose interconverts with α-D-glucose via the acyclic form until the equilibrium anomer mixture is reached",
        "It drops to 0°, since mutarotation eliminates all optical activity",
        "It immediately jumps to +112°, the α-anomer's rotation"
      ],
      answer: 1,
      why_en: "The book states that dissolving a crystalline sample of either pure anomer causes the rotation to change over time until it reaches the same equilibrium value, +52.7°, in both cases — starting from β-D-glucose (+18.4°), the rotation drifts upward toward +52.7° as the α/β/acyclic equilibrium establishes itself, not staying fixed, not dropping to zero, and not jumping straight to the α value.",
      why_cn: "教材指出，溶解任一纯异头物的结晶样品都会使旋光度随时间变化，最终在两种情况下都达到相同的平衡值+52.7°——从β-D-葡萄糖（+18.4°）开始，随着α/β/无环平衡的建立，旋光度会向+52.7°方向漂移，而不是保持不变、降为零，或直接跳到α异头物的数值。"
    },
    {
      type: "mcq",
      q_en: "What does the book say the equilibrium specific rotation of +52.7° actually corresponds to?",
      q_cn: "教材指出，平衡比旋光度+52.7°实际上对应的是什么？",
      options: [
        "Pure α-D-glucose only",
        "Pure β-D-glucose only",
        "The rotation of the equilibrium mixture of α- and β-anomers, which contains only a very small amount of the acyclic form",
        "The rotation of pure acyclic (open-chain) D-glucose"
      ],
      answer: 2,
      why_en: "The book explicitly defines the equilibrium value as corresponding to the rotation of the equilibrium mixture of α- and β-anomers, containing only a very small amount of the acyclic form — not any single pure form.",
      why_cn: "教材明确指出，该平衡值对应于α和β异头物平衡混合物的旋光度，该混合物中只含有极少量的无环形式——而不是任何单一的纯形式。"
    },
    {
      type: "short",
      q_en: "Define mutarotation and give the three specific-rotation values (α-anomer, β-anomer, equilibrium) the book gives for D-glucose.",
      q_cn: "定义变旋现象，并给出教材中D-葡萄糖的三个比旋光度数值（α异头物、β异头物、平衡值）。",
      accept: ["112", "18.4", "52.7", "mutarotation", "变旋"],
      answer_en: "Mutarotation is the time-dependent change in optical rotation as a dissolved pure anomer interconverts, via the acyclic form, into the equilibrium α/β-anomer mixture. The book's values: α-D-glucose +112°, β-D-glucose +18.4°, equilibrium mixture +52.7°.",
      answer_cn: "变旋现象是指溶解的纯异头物通过无环形式逐渐转化为α/β异头物平衡混合物过程中，旋光度随时间变化的现象。教材给出的数值：α-D-葡萄糖+112°，β-D-葡萄糖+18.4°，平衡混合物+52.7°。"
    }
  ],
  oral: {
    q_en: "Explain mutarotation, using D-glucose's specific rotation values as the worked example.",
    q_cn: "以D-葡萄糖的比旋光度数值为例，解释变旋现象。",
    model_en: "D-glucose's two anomeric forms, alpha and beta, readily interconvert in solution by passing through the open-chain, acyclic form as an intermediate. Because alpha and beta differ in their physical constants, most notably in optical rotation, that interconversion necessarily shows up as a change in how much the solution rotates polarized light. The actual numbers make this concrete: the specific rotation of pure alpha-D-glucose is plus 112 degrees, while pure beta-D-glucose is only plus 18.4 degrees. Now here's the interesting experimental observation: if you dissolve a crystalline sample of either one of those pure anomers in water on its own, the rotation of the solution doesn't stay fixed — it drifts over time, and no matter which anomer you started from, it always settles at the same equilibrium value, plus 52.7 degrees. That drift is what's called mutarotation, and the final equilibrium value isn't the rotation of some third pure species — it's simply the rotation you get from the equilibrium mixture of alpha- and beta-anomers that forms, a mixture that contains only a very small amount of the open, acyclic form.",
    checklist: [
      "Stated that α/β anomers interconvert via the acyclic form",
      "Explained that α/β differ in physical constants, especially optical rotation",
      "Gave α-D-glucose = +112°, β-D-glucose = +18.4°",
      "Gave the equilibrium value +52.7°, reached from either starting anomer",
      "Defined mutarotation as this time-dependent rotation change",
      "Explained the equilibrium value reflects the α/β mixture (with a small acyclic fraction), not a pure single species"
    ]
  }
},

{
  id: "7-2-1",
  chapter: 7,
  section: "7.2.1",
  czTitle: "Cukerné estery",
  enTitle: "Sugar esters",
  cnTitle: "糖酯",
  pages: [152],
  coverage: "full",
  coverageNote: "Full text of '7.2.1 Cukerné estery' on page 152 read directly. The '7.2 Biochemicky významné deriváty monosacharidů' heading immediately above it carries no independent text of its own — 7.2.1 begins directly beneath it, the same pattern already seen for 7.1/7.1.1.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "The hydroxyl groups of monosaccharides can be esterified; forming an ester bond with a POLYBASIC acid converts the electroneutral sugar molecule into an ION, which affects its behaviour in the cellular environment. Biochemically, the most important sugar esters are PHOSPHATE esters: it is precisely in the form of phosphate esters that sugars are metabolized almost EXCLUSIVELY (forward cross-referenced to ch. 7.7 and 7.8). Phosphate esters of sugars also serve as a reactive intermediate for forming O- and N-GLYCOSIDIC bonds; for example, 5-phosphoribosyl-1-bisphosphate (PRPP) plays an important role in nucleotide synthesis (forward cross-referenced to ch. 4). In polysaccharide molecules (heteroglycans), a different type of sugar ester occurs: one formed by esterifying a sugar's hydroxyl group with SULFURIC acid — found for example in heparin and chondroitin sulfate.",
    cn: "单糖的羟基可以被酯化；与多元酸形成酯键会使原本电中性的糖分子转变为离子，这会影响其在细胞环境中的行为。生物化学上最重要的糖酯是磷酸酯：糖几乎完全是以磷酸酯的形式被代谢的（前瞻引用第7.7和7.8节）。糖的磷酸酯还可作为形成O-和N-糖苷键的反应性中间体；例如，5-磷酸核糖-1-焦（双）磷酸（PRPP）在核苷酸合成中起重要作用（前瞻引用第4章）。在多糖分子（杂聚糖）中，还存在另一种类型的糖酯，是由糖的羟基与硫酸酯化形成的——例如存在于肝素和硫酸软骨素中。"
  },
  points: [
    { cz: "esterifikace OH skupin; vícesytná kyselina → ion", en: "The hydroxyl groups of monosaccharides can be esterified. Crucially, forming the ester bond with a POLYBASIC (polyprotic) acid converts the electroneutral sugar molecule into an ION, which affects how it behaves in the cellular environment — a monobasic-acid ester would not have this ionizing effect.", cn: "单糖的羟基可以被酯化。关键在于，与多元酸形成酯键会使原本电中性的糖分子转变为离子，从而影响其在细胞环境中的行为——一元酸酯则不会产生这种电离效应。" },
    { cz: "fosforečné estery = nejvýznamnější; cukry metabolizovány téměř výhradně v této formě", en: "Biochemically the most important sugar esters are PHOSPHATE esters: sugars are metabolized almost EXCLUSIVELY in the form of phosphate esters (forward cross-referenced to ch. 7.7 and 7.8).", cn: "生物化学上最重要的糖酯是磷酸酯：糖几乎完全是以磷酸酯的形式被代谢的（前瞻引用第7.7和7.8节）。" },
    { cz: "fosforečné estery = reaktivní intermediát pro O-/N-glykosidovou vazbu; PRPP", en: "Phosphate esters of sugars also represent a reactive intermediate for forming O- and N-GLYCOSIDIC bonds. Example: 5-phosphoribosyl-1-bisphosphate (5-fosforibosyl-1-bisfosfát, PRPP) plays an important role in nucleotide synthesis (forward cross-referenced to ch. 4).", cn: "糖的磷酸酯还可作为形成O-和N-糖苷键的反应性中间体。例如：5-磷酸核糖-1-焦（双）磷酸（PRPP）在核苷酸合成中起重要作用（前瞻引用第4章）。" },
    { cz: "sírové estery v polysacharidech (heparin, chondroitinsulfát)", en: "In polysaccharide molecules (heteroglycans), a different ester type occurs: one arising from esterification of a sugar's hydroxyl group with SULFURIC acid — examples given are HEPARIN and CHONDROITIN SULFATE.", cn: "在多糖分子（杂聚糖）中，存在另一种酯类型：由糖的羟基与硫酸发生酯化反应而形成的——所举例子为肝素和硫酸软骨素。" }
  ],
  terms: [
    { cz: "cukerný ester", en: "sugar ester", cn: "糖酯", def_en: "An ester formed at a monosaccharide's hydroxyl group; esters of polybasic acids (phosphoric, sulfuric) ionize the sugar and dominate its biochemical roles.", def_cn: "在单糖羟基上形成的酯；多元酸（磷酸、硫酸）酯会使糖发生电离，并在其生物化学功能中占主导地位。" },
    { cz: "fosforečný ester cukru", en: "sugar phosphate ester", cn: "糖磷酸酯", def_en: "The dominant metabolic form of sugars in the cell; also a reactive intermediate for glycosidic-bond formation.", def_cn: "细胞内糖的主要代谢形式；也是形成糖苷键的反应性中间体。" },
    { cz: "5-fosforibosyl-1-bisfosfát (PRPP)", en: "5-phosphoribosyl-1-bisphosphate (PRPP)", cn: "5-磷酸核糖-1-焦（双）磷酸（PRPP）", def_en: "A reactive phosphorylated-sugar intermediate important in nucleotide synthesis.", def_cn: "在核苷酸合成中起重要作用的活性磷酸化糖中间体。" },
    { cz: "heparin, chondroitinsulfát", en: "heparin, chondroitin sulfate", cn: "肝素、硫酸软骨素", def_en: "Heteroglycans (polysaccharides) containing sugar residues esterified with sulfuric acid.", def_cn: "含有硫酸酯化糖残基的杂聚糖（多糖）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does esterifying a sugar's hydroxyl group with a polybasic acid (rather than a monobasic one) matter functionally, per the book?",
      q_cn: "根据教材，为什么用多元酸（而非一元酸）酯化糖的羟基在功能上很重要？",
      options: [
        "It has no functional consequence — all sugar esters behave identically",
        "It converts the electroneutral sugar molecule into an ion, which affects its behaviour in the cellular environment",
        "It makes the sugar molecule optically inactive",
        "It prevents the sugar from being metabolized at all"
      ],
      answer: 1,
      why_en: "The book states that binding a polybasic acid changes the electroneutral sugar molecule into an ion, which influences its behaviour in the cell environment — the opposite of 'no consequence,' and unrelated to optical activity or a metabolic block (phosphate esters are in fact the dominant metabolized form).",
      why_cn: "教材指出，与多元酸结合会使原本电中性的糖分子转变为离子，从而影响其在细胞环境中的行为——这与「无功能影响」相反，也与旋光性或代谢阻断无关（事实上磷酸酯正是糖被代谢的主要形式）。"
    },
    {
      type: "mcq",
      q_en: "What two biochemical roles does the book assign to sugar phosphate esters?",
      q_cn: "教材赋予糖磷酸酯哪两种生物化学功能？",
      options: [
        "They are the almost-exclusive metabolized form of sugars, and a reactive intermediate for forming O-/N-glycosidic bonds (e.g. PRPP in nucleotide synthesis)",
        "They form the structural backbone of cellulose and chitin",
        "They are exclusively used to form sulfate esters in heparin",
        "They serve only as a storage form with no further reactivity"
      ],
      answer: 0,
      why_en: "The book names two roles for phosphate esters: sugars are metabolized almost exclusively in this form, and phosphate esters serve as reactive intermediates for O-/N-glycosidic bond formation, exemplified by PRPP in nucleotide synthesis. Cellulose/chitin are not ester-linked structural polymers in this sense, sulfate esters are a separate (sulfuric-acid) ester type found in heteroglycans, and 'storage with no reactivity' contradicts the PRPP intermediate role.",
      why_cn: "教材为磷酸酯赋予了两种功能：糖几乎完全以此形式被代谢，且磷酸酯作为形成O-/N-糖苷键的反应性中间体，PRPP在核苷酸合成中的作用即为例证。纤维素/几丁质并非这种意义上的酯连接结构聚合物；硫酸酯是杂聚糖中另一种（硫酸）酯类型；「仅作储存、无反应性」与PRPP中间体的作用相矛盾。"
    },
    {
      type: "short",
      q_en: "Name the two examples the book gives of heteroglycans containing sulfate-ester-linked sugar residues.",
      q_cn: "举出教材中提到的两个含硫酸酯连接糖残基的杂聚糖例子。",
      accept: ["heparin", "chondroitin sulfate", "肝素", "硫酸软骨素"],
      answer_en: "Heparin and chondroitin sulfate.",
      answer_cn: "肝素和硫酸软骨素。"
    }
  ],
  oral: {
    q_en: "Describe sugar esters, why polybasic-acid esters matter functionally, and the two main biochemical roles of sugar phosphate esters.",
    q_cn: "描述糖酯，说明为什么多元酸酯在功能上很重要，以及糖磷酸酯的两大生物化学功能。",
    model_en: "The hydroxyl groups on a monosaccharide are perfectly capable of being esterified, and what matters most functionally is what kind of acid does the esterifying: bind a polybasic acid, and you convert what was an electroneutral sugar molecule into an ion, which changes how it behaves inside the cell. Of all the possible sugar esters, phosphate esters are by far the most biochemically important, to the point that sugars are metabolized almost exclusively in this phosphorylated form. Phosphate esters do more than just mark sugars for metabolism, though — they also act as a reactive intermediate for building O- and N-glycosidic bonds, and the book gives a concrete example: 5-phosphoribosyl-1-bisphosphate, PRPP, which plays an important role in nucleotide synthesis. Separately, in polysaccharide molecules, that is, in heteroglycans, you find yet another ester type entirely, formed not with phosphoric acid but with sulfuric acid, esterifying a sugar's hydroxyl group — heparin and chondroitin sulfate are the two examples the book names.",
    checklist: [
      "Stated monosaccharide OH groups can be esterified",
      "Explained polybasic-acid esterification ionizes the sugar, affecting cellular behaviour",
      "Named phosphate esters as biochemically most important, near-exclusive metabolized form",
      "Named PRPP as a phosphate-ester intermediate for O-/N-glycosidic bond formation in nucleotide synthesis",
      "Named heparin and chondroitin sulfate as sulfate-ester-containing heteroglycans"
    ]
  }
},

{
  id: "7-2-2",
  chapter: 7,
  section: "7.2.2",
  czTitle: "Cukerné kyseliny",
  enTitle: "Sugar acids",
  cnTitle: "糖酸",
  pages: [152, 153],
  coverage: "full",
  coverageNote: "Text spanning the bottom of page 152 (from 'Oxidací karbonylové skupiny aldos...' through '...Chemicky je askorbová kyselina laktonem') continuing directly onto the top of page 153 ('2-oxo-L-gulonové kyseliny...' through '...Askorbová kyselina je rozšířena převážně v rostlinách.') read as one continuous sentence/paragraph across the page break, plus Obr. 7.6 on page 153 (L-ascorbic acid and L-dehydroascorbic acid structures) verified directly.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Oxidation of an aldose's carbonyl group produces polyhydroxy acids called ALDONIC acids; the cyclic forms of aldoses are oxidized directly to the LACTONES of aldonic acids, and free acids are released from these by hydrolysis (forward cross-referenced to ch. 7.7). Oxidation of the terminal PRIMARY alcohol group instead produces URONIC acids (forward cross-referenced to ch. 7.6). One of the most important sugar acids is ASCORBIC ACID, historically isolated as the antiscorbutic vitamin. Chemically, ascorbic acid is the LACTONE of 2-oxo-L-gulonic acid (Obr. 7.6); it contains an ENEDIOL grouping (two hydroxyl groups on one double bond) and, like all enediols, acts as a strong REDUCING agent. Loss of hydrogen converts it into DEHYDROASCORBIC ACID. Ascorbic acid is found predominantly in PLANTS.",
    cn: "醛糖羰基的氧化产生多羟基酸，称为醛糖酸；醛糖的环状形式直接被氧化为相应醛糖酸的内酯，游离酸则通过水解从内酯中释放出来（前瞻引用第7.7节）。末端伯醇基的氧化则产生糖醛酸（前瞻引用第7.6节）。最重要的糖酸之一是抗坏血酸，历史上是作为抗坏血病维生素而被分离出来的。从化学结构上看，抗坏血酸是2-氧代-L-古洛糖酸的内酯（图7.6）；它含有一个烯二醇基团（同一双键上的两个羟基），像所有烯二醇一样，具有强还原性。失去氢后转变为脱氢抗坏血酸。抗坏血酸主要存在于植物中。"
  },
  points: [
    { cz: "oxidace karbonylu aldos → aldonové kyseliny (laktony)", en: "Oxidation of an aldose's carbonyl group produces polyhydroxy acids called ALDONIC acids. Cyclic forms of aldoses are oxidized directly to the LACTONE of the aldonic acid; free acids are released from these lactones by HYDROLYSIS (forward ref ch. 7.7).", cn: "醛糖羰基的氧化产生多羟基酸，称为醛糖酸。醛糖的环状形式直接被氧化为醛糖酸的内酯；游离酸通过水解从这些内酯中释放（前瞻引用第7.7节）。" },
    { cz: "oxidace primárního OH konce → uronové kyseliny", en: "Oxidation of the terminal PRIMARY alcohol group (rather than the carbonyl) produces URONIC acids instead (forward ref ch. 7.6).", cn: "末端伯醇基（而非羰基）的氧化则产生糖醛酸（前瞻引用第7.6节）。" },
    { cz: "kyselina askorbová = antiskorbutický vitamin", en: "One of the most important sugar acids is ASCORBIC ACID, historically isolated as the antiscorbutic vitamin.", cn: "最重要的糖酸之一是抗坏血酸，历史上是作为抗坏血病维生素而被分离出来的。" },
    { cz: "askorbová kyselina = lakton 2-oxo-L-gulonové kyseliny", en: "Chemically, ascorbic acid is the LACTONE of 2-oxo-L-gulonic acid (Obr. 7.6).", cn: "从化学结构上看，抗坏血酸是2-氧代-L-古洛糖酸的内酯（图7.6）。" },
    { cz: "endiolové seskupení → silné redukční působení", en: "Ascorbic acid contains an ENEDIOL grouping — two hydroxyl groups on a single double bond — and, like all enediols, this makes it act as a STRONG REDUCING AGENT.", cn: "抗坏血酸含有一个烯二醇基团——同一双键上的两个羟基——像所有烯二醇一样，这使其具有强还原性。" },
    { cz: "odštěpení vodíku → kyselina dehydroaskorbová (obr. 7.6)", en: "Loss of hydrogen converts ascorbic acid into DEHYDROASCORBIC acid; Obr. 7.6 shows both L-ascorbic acid and L-dehydroascorbic acid structurally.", cn: "失去氢后，抗坏血酸转变为脱氢抗坏血酸；图7.6以结构式展示了L-抗坏血酸和L-脱氢抗坏血酸。" },
    { cz: "askorbová kyselina rozšířena v rostlinách", en: "Ascorbic acid is found predominantly in PLANTS.", cn: "抗坏血酸主要存在于植物中。" }
  ],
  terms: [
    { cz: "aldonová kyselina", en: "aldonic acid", cn: "醛糖酸", def_en: "A polyhydroxy acid formed by oxidizing an aldose's carbonyl (aldehyde) group; released from its cyclic lactone form by hydrolysis.", def_cn: "由氧化醛糖的羰基（醛基）形成的多羟基酸；由其环状内酯形式经水解释放。" },
    { cz: "uronová kyselina", en: "uronic acid", cn: "糖醛酸", def_en: "A polyhydroxy acid formed by oxidizing an aldose's terminal primary alcohol group (rather than its carbonyl).", def_cn: "由氧化醛糖末端伯醇基（而非羰基）形成的多羟基酸。" },
    { cz: "kyselina askorbová (vitamin C)", en: "ascorbic acid (vitamin C)", cn: "抗坏血酸（维生素C）", def_en: "The antiscorbutic vitamin; chemically the lactone of 2-oxo-L-gulonic acid, containing a strongly reducing enediol group; found predominantly in plants.", def_cn: "抗坏血病维生素；化学上是2-氧代-L-古洛糖酸的内酯，含有强还原性的烯二醇基团；主要存在于植物中。" },
    { cz: "endiol", en: "enediol", cn: "烯二醇", def_en: "Two hydroxyl groups attached to the two carbons of one carbon-carbon double bond; a strongly reducing structural motif.", def_cn: "同一碳碳双键的两个碳原子上各连一个羟基；一种具有强还原性的结构基团。" },
    { cz: "kyselina dehydroaskorbová", en: "dehydroascorbic acid", cn: "脱氢抗坏血酸", def_en: "The oxidized form of ascorbic acid, produced by loss of hydrogen from the enediol group.", def_cn: "抗坏血酸的氧化形式，由烯二醇基团失去氢生成。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structurally distinguishes an aldonic acid from a uronic acid, both derived from the same parent aldose?",
      q_cn: "同一母体醛糖衍生出的醛糖酸与糖醛酸，在结构上有何区别？",
      options: [
        "Aldonic acids come from oxidizing the carbonyl (aldehyde) group; uronic acids come from oxidizing the terminal primary alcohol group",
        "Aldonic acids come from oxidizing the terminal primary alcohol group; uronic acids come from oxidizing the carbonyl group",
        "Aldonic and uronic acids are simply two different names for the same compound",
        "Aldonic acids are reduced forms; uronic acids are oxidized forms of aldonic acids"
      ],
      answer: 0,
      why_en: "The book distinguishes them by which end of the aldose is oxidized: the carbonyl (aldehyde) group for aldonic acids, versus the terminal primary alcohol group for uronic acids — the reverse pairing, identity claim, and reduced/oxidized relationship in the other options are not what the book states.",
      why_cn: "教材根据醛糖哪一端被氧化来区分二者：醛糖酸对应羰基（醛基）被氧化，糖醛酸对应末端伯醇基被氧化——其余选项中的对调配对、「同一化合物」说法及「还原/氧化关系」均非教材所述。"
    },
    {
      type: "mcq",
      q_en: "Why does ascorbic acid act as a strong reducing agent, per the book?",
      q_cn: "根据教材，为什么抗坏血酸具有强还原性？",
      options: [
        "Because it is the lactone of a uronic acid",
        "Because it contains an enediol grouping — two hydroxyl groups on one double bond — and all enediols act strongly reducing",
        "Because it is found predominantly in plants",
        "Because it converts directly into 2-oxo-L-gulonic acid"
      ],
      answer: 1,
      why_en: "The book explicitly attributes ascorbic acid's strong reducing action to its enediol grouping, stating that all enediols act strongly reducing — not its plant origin, not being a uronic-acid lactone (it's actually the lactone of 2-oxo-L-gulonic acid, an aldonic-type acid), and the 2-oxo-L-gulonic acid relationship describes what it's a lactone OF, not a further conversion.",
      why_cn: "教材明确将抗坏血酸的强还原性归因于其烯二醇基团，并指出所有烯二醇都具有强还原性——而非其植物来源，也不是因为它是糖醛酸内酯（它实际上是2-氧代-L-古洛糖酸的内酯，属于醛糖酸类），2-氧代-L-古洛糖酸只是描述其内酯来源关系，而非进一步转化。"
    },
    {
      type: "short",
      q_en: "What is ascorbic acid converted into upon loss of hydrogen from its enediol group, and where is ascorbic acid predominantly found in nature?",
      q_cn: "抗坏血酸的烯二醇基团失去氢后转变为什么？抗坏血酸在自然界中主要存在于哪里？",
      accept: ["dehydroascorbic", "plants", "脱氢抗坏血酸", "植物"],
      answer_en: "Loss of hydrogen converts ascorbic acid into dehydroascorbic acid. Ascorbic acid is found predominantly in plants.",
      answer_cn: "失去氢后，抗坏血酸转变为脱氢抗坏血酸。抗坏血酸主要存在于植物中。"
    }
  ],
  oral: {
    q_en: "Describe the two classes of sugar acids the book introduces, and explain ascorbic acid's structure and reducing property.",
    q_cn: "描述教材介绍的两类糖酸，并解释抗坏血酸的结构及其还原性。",
    model_en: "The book introduces two classes of sugar acid, distinguished by which part of an aldose gets oxidized. Oxidize the carbonyl, the aldehyde group itself, and you get a polyhydroxy acid called an aldonic acid; in practice, the cyclic form of the aldose is what actually gets oxidized, giving the lactone of the aldonic acid directly, with the free acid only released afterward by hydrolysis. Oxidize the other end instead, the terminal primary alcohol group, and you get a uronic acid. Of all the sugar acids, one of the most important is ascorbic acid, historically isolated as the antiscorbutic vitamin, what we now call vitamin C. Chemically, it's the lactone of 2-oxo-L-gulonic acid, and it carries a structural feature called an enediol grouping, meaning two hydroxyl groups sitting on the same carbon-carbon double bond; enediols in general act as strong reducing agents, and ascorbic acid is no exception. When it loses hydrogen from that enediol group, it's converted into dehydroascorbic acid. And in terms of where you actually find it in nature, ascorbic acid occurs predominantly in plants.",
    checklist: [
      "Distinguished aldonic acids (carbonyl oxidation) from uronic acids (terminal primary-alcohol oxidation)",
      "Noted cyclic aldoses oxidize directly to the aldonic-acid lactone, with free acid released by hydrolysis",
      "Identified ascorbic acid as the antiscorbutic vitamin",
      "Stated ascorbic acid is chemically the lactone of 2-oxo-L-gulonic acid",
      "Explained the enediol group and its strong reducing property",
      "Named dehydroascorbic acid as the hydrogen-loss product",
      "Stated ascorbic acid occurs predominantly in plants"
    ]
  }
},

{
  id: "7-2-3",
  chapter: 7,
  section: "7.2.3",
  czTitle: "Cukerné alkoholy",
  enTitle: "Sugar alcohols",
  cnTitle: "糖醇",
  pages: [153],
  coverage: "full",
  coverageNote: "Full text of '7.2.3 Cukerné alkoholy' on page 153 read directly; the D-glucitol/'L-glukosy' sentence specifically re-verified with a zoomed crop to rule out an OCR/reading error on this drafting pass's own part — the scan does clearly print 'L-glukosy'. See the flagged point below: cross-checking against this SAME book's own Obr. 7.1 (node 7-1-2-1, verified separately) suggests this is very likely the book's own error for 'L-gulosy' (L-gulose), not a misreading here.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Reduction of a monosaccharide's carbonyl group produces so-called sugar alcohols (ALDITOLS). Reducing D-glucose, for example, gives D-GLUCITOL (older name: sorbitol); the book states the same alditol also arises from reduction of L-glucose, D-fructose, and L-sorbose. Reducing D-mannose gives D-MANNITOL. Three further sugar alcohols occur in nature: ribitol, glycerol, and INOSITOL. Inositol is actually a cyclohexane derivative; it occurs not only as a component of phospholipids but also as PHYTIC ACID (the hexaphosphate ester of inositol).",
    cn: "单糖羰基的还原产生所谓的糖醇（糖醇类）。例如，还原D-葡萄糖得到D-葡萄糖醇（旧称山梨醇）；教材指出，同样的糖醇也可由还原L-葡萄糖、D-果糖和L-山梨糖得到。还原D-甘露糖得到D-甘露糖醇。自然界中还存在另外三种糖醇：核糖醇、甘油和肌醇。肌醇实际上是环己烷的衍生物；它不仅作为磷脂的组分存在，还以植酸（肌醇的六磷酸酯）的形式存在。"
  },
  points: [
    { cz: "redukce karbonylu → alditoly", en: "Reduction of a monosaccharide's carbonyl group produces so-called sugar alcohols, called ALDITOLS.", cn: "单糖羰基的还原产生所谓的糖醇，称为糖醇类。" },
    { cz: "D-glukosa → D-glucitol (sorbitol)", en: "Reducing D-glucose gives D-GLUCITOL, whose older name is sorbitol.", cn: "还原D-葡萄糖得到D-葡萄糖醇，其旧称为山梨醇。" },
    { cz: "TEXT: 'týž alditol' i z L-glukosy, D-fruktosy, L-sorbosy — VLAJKA", en: "The book states the SAME alditol (D-glucitol) also arises from reduction of L-glucose, D-fructose, and L-sorbose. FLAG: reduction of D-fructose (as one of two epimeric products alongside D-mannitol, since reducing a ketone creates a new, non-selectively formed stereocenter) and of L-sorbose (a well-documented relationship, used industrially in vitamin-C synthesis) both plausibly give D-glucitol — but working through the stereochemistry using this SAME book's own Obr. 7.1 Fischer-projection data (node 7-1-2-1: D-gulose = HCOH,HCOH,HOCH,HCOH at C2-C5), reducing L-glucose and renaming the product by the standard D-numbering convention gives the configuration of D-GULITOL, not D-glucitol. This reads as a plausible single-term substitution error in the book ('L-glukosy' for 'L-gulosy', L-gulose) — flagged here per the honesty rules rather than silently corrected; the book's literal wording is 'L-glukosy'.", cn: "教材指出，同样的糖醇（D-葡萄糖醇）也可由还原L-葡萄糖、D-果糖和L-山梨糖得到。提示：还原D-果糖（作为与D-甘露糖醇并存的两种差向异构产物之一，因为还原酮基会产生一个新的、非选择性生成的立体中心）和还原L-山梨糖（这是一个有据可查的关系，工业上用于维生素C合成）都合理地会得到D-葡萄糖醇——但利用本教材自身图7.1的费歇尔投影数据（节点7-1-2-1：D-古洛糖在C2-C5的构型为HCOH,HCOH,HOCH,HCOH）进行推算，还原L-葡萄糖并按标准D系命名规则重新命名后，得到的构型对应D-古洛糖醇，而非D-葡萄糖醇。这看起来很可能是教材中的一处单词替换错误（应为「L-gulosy」古洛糖，而非「L-glukosy」葡萄糖）——此处依照诚实性原则予以标注而非默默更正；教材原文确实写的是「L-glukosy」。" },
    { cz: "D-mannosa → D-mannitol", en: "Reducing D-mannose gives D-MANNITOL.", cn: "还原D-甘露糖得到D-甘露糖醇。" },
    { cz: "ribitol, glycerol, inositol = další přírodní cukerné alkoholy", en: "Three further sugar alcohols occur in nature: RIBITOL, GLYCEROL, and INOSITOL.", cn: "自然界中还存在另外三种糖醇：核糖醇、甘油和肌醇。" },
    { cz: "inositol = cyklohexanový derivát; fosfolipidy i kyselina fytová", en: "Inositol is actually a CYCLOHEXANE derivative; it occurs not only as a component of PHOSPHOLIPIDS but also as PHYTIC ACID, the hexaphosphate ester of inositol.", cn: "肌醇实际上是环己烷的衍生物；它不仅作为磷脂的组分存在，还以植酸（肌醇的六磷酸酯）的形式存在。" }
  ],
  terms: [
    { cz: "alditol (cukerný alkohol)", en: "alditol (sugar alcohol)", cn: "糖醇", def_en: "The reduction product of a monosaccharide's carbonyl group.", def_cn: "单糖羰基被还原后的产物。" },
    { cz: "D-glucitol (sorbitol)", en: "D-glucitol (sorbitol)", cn: "D-葡萄糖醇（山梨醇）", def_en: "The alditol produced by reducing D-glucose (also, per the book, L-glucose/D-fructose/L-sorbose — see flagged point).", def_cn: "由还原D-葡萄糖得到的糖醇（据教材，L-葡萄糖/D-果糖/L-山梨糖也得到同一产物——参见标注点）。" },
    { cz: "D-mannitol", en: "D-mannitol", cn: "D-甘露糖醇", def_en: "The alditol produced by reducing D-mannose.", def_cn: "由还原D-甘露糖得到的糖醇。" },
    { cz: "inositol", en: "inositol", cn: "肌醇", def_en: "A cyclohexane-derived sugar alcohol; occurs as a phospholipid component and as phytic acid (its hexaphosphate ester).", def_cn: "一种环己烷衍生的糖醇；作为磷脂组分存在，也以植酸（其六磷酸酯）形式存在。" },
    { cz: "kyselina fytová", en: "phytic acid", cn: "植酸", def_en: "The hexaphosphate ester of inositol.", def_cn: "肌醇的六磷酸酯。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the older (historical) name for D-glucitol, and which monosaccharide does the book name as its most direct precursor by reduction?",
      q_cn: "D-葡萄糖醇的旧称是什么？教材指出哪种单糖是其最直接的还原前体？",
      options: ["Mannitol; from D-mannose", "Sorbitol; from D-glucose", "Xylitol; from D-xylose", "Ribitol; from D-ribose"],
      answer: 1,
      why_en: "The book states reducing D-glucose gives D-glucitol, whose older name is sorbitol. Mannitol is the separate alditol from D-mannose; xylitol and ribitol are not named in this section as D-glucitol's precursor/synonym.",
      why_cn: "教材指出，还原D-葡萄糖得到D-葡萄糖醇，其旧称为山梨醇。甘露糖醇是由D-甘露糖得到的另一种糖醇；木糖醇和核糖醇在本节中并未被指为D-葡萄糖醇的前体/别名。"
    },
    {
      type: "mcq",
      q_en: "Inositol is described in the book as occurring in which two natural contexts?",
      q_cn: "教材描述肌醇存在于哪两种自然情形中？",
      options: [
        "As a component of DNA and RNA",
        "As a component of phospholipids, and as phytic acid (its hexaphosphate ester)",
        "As a component of chitin and heparin",
        "As a component of hemoglobin and myoglobin"
      ],
      answer: 1,
      why_en: "The book states inositol, a cyclohexane derivative, occurs as a component of phospholipids and also as phytic acid, the hexaphosphate ester of inositol — the other options describe unrelated biomolecules not mentioned in this section.",
      why_cn: "教材指出，肌醇（一种环己烷衍生物）作为磷脂的组分存在，也以植酸（肌醇的六磷酸酯）的形式存在——其余选项描述的是本节未提及的、与此无关的生物分子。"
    },
    {
      type: "short",
      q_en: "The book claims D-glucitol arises from reduction of D-glucose, L-glucose, D-fructose, and L-sorbose. Reasoning from the book's own Obr. 7.1 stereochemistry, which one of these four names looks like it should probably be a different sugar, and which one?",
      q_cn: "教材声称D-葡萄糖、L-葡萄糖、D-果糖和L-山梨糖的还原都得到D-葡萄糖醇。根据教材自身图7.1的立体化学数据推算，这四者中哪一个的名称看起来可能应为另一种糖？是哪一种？",
      accept: ["L-glucose", "L-gulose", "L-glukosy", "L-gulosy", "古洛糖"],
      answer_en: "L-glucose looks like the odd one out. Using the book's own D-gulose configuration from Obr. 7.1 (HCOH,HCOH,HOCH,HCOH at C2-C5), reducing L-glucose and renaming the product by the standard D-numbering convention works out to D-gulitol, not D-glucitol — suggesting the book's 'L-glukosy' is very likely a substitution error for 'L-gulosy' (L-gulose), the sugar classically paired with D-glucose in this exact textbook fact.",
      answer_cn: "L-葡萄糖看起来是其中的例外。利用教材图7.1自身给出的D-古洛糖构型（C2-C5为HCOH,HCOH,HOCH,HCOH）进行推算，还原L-葡萄糖并按标准D系命名规则重新命名后，得到的是D-古洛糖醇，而非D-葡萄糖醇——这说明教材中的「L-glukosy」很可能是「L-gulosy」（L-古洛糖）的替换错误，后者正是这一经典教材事实中与D-葡萄糖配对的那个糖。"
    }
  ],
  oral: {
    q_en: "Describe how sugar alcohols form and the natural sugar alcohols the book names, including the flagged D-glucitol precursor list.",
    q_cn: "描述糖醇是如何形成的，以及教材列出的天然糖醇，包括对D-葡萄糖醇前体列表的标注说明。",
    model_en: "Reducing the carbonyl group of a monosaccharide gives what's called a sugar alcohol, or alditol. The clearest example is D-glucose, which on reduction gives D-glucitol, more commonly known by its older name, sorbitol. The book goes on to say that this exact same alditol also results from reducing L-glucose, D-fructose, and L-sorbose. Two of those three are genuinely well established: D-fructose, because reducing a ketone creates a brand-new stereocenter that isn't formed selectively, gives a mixture of two products, D-glucitol and D-mannitol, so D-glucitol being one of them is expected; and L-sorbose reducing to D-glucitol is a classic, industrially used relationship in vitamin C manufacture. But working through the stereochemistry carefully, using the book's own configuration data for D-gulose from its earlier aldohexose figure, reducing L-glucose instead actually works out to D-gulitol, a different compound from D-glucitol — so that particular name in the list looks like it should probably read L-gulose rather than L-glucose, and I'd flag that as a likely substitution error rather than treat it as an established exception. Separately, reducing D-mannose gives D-mannitol, and three more sugar alcohols occur naturally: ribitol, glycerol, and inositol. Inositol is actually a cyclohexane derivative rather than a straight-chain alditol, and it shows up in two different biological contexts — as a component of phospholipids, and, in its fully phosphorylated form, as phytic acid, the hexaphosphate ester of inositol.",
    checklist: [
      "Defined alditol as the reduction product of a sugar's carbonyl group",
      "Named D-glucose to D-glucitol (sorbitol)",
      "Listed the book's claimed D-glucitol precursors: L-glucose, D-fructose, L-sorbose",
      "Explained D-fructose gives a mixture with D-mannitol (new stereocenter, non-selective)",
      "Noted L-sorbose to D-glucitol is a real, industrially used relationship",
      "Flagged that L-glucose's reduction product, by the book's own Obr. 7.1 stereochemistry, works out to D-gulitol — likely a substitution error for L-gulose",
      "Named D-mannose to D-mannitol",
      "Named ribitol, glycerol, inositol as further natural sugar alcohols",
      "Described inositol's two occurrence contexts: phospholipids and phytic acid"
    ]
  }
},

{
  id: "7-2-4",
  chapter: 7,
  section: "7.2.4",
  czTitle: "Aminocukry",
  enTitle: "Amino sugars",
  cnTitle: "氨基糖",
  pages: [153],
  coverage: "full",
  coverageNote: "Full text of '7.2.4 Aminocukry' on page 153 read directly, including the three cross-references to Obr. 7.12 (a figure outside this page range, not verified here — only the running text describing it was read).",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Amino sugars are formed, formally, by replacing a sugar's hydroxyl group with an amino group. Three amino sugars are biochemically important: D-GLUCOSAMINE (2-deoxy-2-amino-D-glucose), D-GALACTOSAMINE (2-deoxy-2-amino-D-galactose), and NEURAMINIC ACID. The amino group of amino sugars is very often ACYLATED by the residue of an organic acid, especially ACETYL. N-acetyl-D-glucosamine occurs bound in the polysaccharide CHITIN, in glycolipids, glycoproteins, and heteroglycans (forward ref Obr. 7.12). N-acetyl-D-galactosamine is an important component of glycoproteins and glycolipids (forward ref Obr. 7.12). Neuraminic acid's structure formally corresponds to the product of an ALDOL CONDENSATION of pyruvic acid and D-mannosamine; neuraminic acid does not occur in free form — its N-acetyl or N-glycolyl derivatives are very important components of membrane glycolipids, blood-group substances, and many other glycoproteins (forward ref Obr. 7.12).",
    cn: "氨基糖在形式上是通过用氨基取代糖的羟基而形成的。三种氨基糖具有重要的生物化学意义：D-葡萄糖胺（2-脱氧-2-氨基-D-葡萄糖）、D-半乳糖胺（2-脱氧-2-氨基-D-半乳糖）和神经氨酸。氨基糖的氨基常常被有机酸残基酰化，尤其是乙酰基。N-乙酰-D-葡萄糖胺以结合形式存在于多糖几丁质、糖脂、糖蛋白和杂聚糖中（前瞻引用图7.12）。N-乙酰-D-半乳糖胺是糖蛋白和糖脂的重要组分（前瞻引用图7.12）。神经氨酸的结构在形式上对应于丙酮酸与D-甘露糖胺的羟醛缩合产物；神经氨酸不以游离形式存在——其N-乙酰基或N-羟乙酰基衍生物是膜糖脂、血型物质及许多其他糖蛋白的重要组分（前瞻引用图7.12）。"
  },
  points: [
    { cz: "aminocukr = OH nahrazena NH₂ (formálně)", en: "Amino sugars are formed, formally, by replacing a sugar's hydroxyl group with an amino group.", cn: "氨基糖在形式上是通过用氨基取代糖的羟基而形成的。" },
    { cz: "3 biochemicky důležité: D-glukosamin, D-galaktosamin, kyselina neuraminová", en: "Three amino sugars are biochemically important: D-GLUCOSAMINE (2-deoxy-2-amino-D-glucose), D-GALACTOSAMINE (2-deoxy-2-amino-D-galactose), and NEURAMINIC ACID.", cn: "三种氨基糖具有重要的生物化学意义：D-葡萄糖胺（2-脱氧-2-氨基-D-葡萄糖）、D-半乳糖胺（2-脱氧-2-氨基-D-半乳糖）和神经氨酸。" },
    { cz: "NH₂ často acylována, hlavně acetylem", en: "The amino group of amino sugars is very often ACYLATED by the residue of an organic acid, especially ACETYL.", cn: "氨基糖的氨基常常被有机酸残基酰化，尤其是乙酰基。" },
    { cz: "N-acetyl-D-glukosamin — chitin, glykolipidy, glykoproteiny, heteroglykany", en: "N-acetyl-D-glucosamine occurs bound in the polysaccharide CHITIN, in glycolipids, glycoproteins, and heteroglycans (forward ref Obr. 7.12).", cn: "N-乙酰-D-葡萄糖胺以结合形式存在于多糖几丁质、糖脂、糖蛋白和杂聚糖中（前瞻引用图7.12）。" },
    { cz: "N-acetyl-D-galaktosamin — glykoproteiny, glykolipidy", en: "N-acetyl-D-galactosamine is an important component of glycoproteins and glycolipids (forward ref Obr. 7.12).", cn: "N-乙酰-D-半乳糖胺是糖蛋白和糖脂的重要组分（前瞻引用图7.12）。" },
    { cz: "kys. neuraminová = formálně aldolová kondenzace pyruvát + D-mannosamin; nikdy volná", en: "Neuraminic acid's structure formally corresponds to the product of an ALDOL CONDENSATION of pyruvic acid and D-mannosamine. It does NOT occur in free form; its N-acetyl or N-glycolyl derivatives are very important components of membrane glycolipids, blood-group substances, and many other glycoproteins (forward ref Obr. 7.12).", cn: "神经氨酸的结构在形式上对应于丙酮酸与D-甘露糖胺的羟醛缩合产物。它不以游离形式存在；其N-乙酰基或N-羟乙酰基衍生物是膜糖脂、血型物质及许多其他糖蛋白的重要组分（前瞻引用图7.12）。" }
  ],
  terms: [
    { cz: "aminocukr", en: "amino sugar", cn: "氨基糖", def_en: "A sugar formally derived by replacing a hydroxyl group with an amino group; the amino group is often acylated, especially with acetyl.", def_cn: "在形式上由羟基被氨基取代而衍生出的糖；其氨基常被酰化，尤其是乙酰化。" },
    { cz: "D-glukosamin", en: "D-glucosamine", cn: "D-葡萄糖胺", def_en: "2-deoxy-2-amino-D-glucose; its N-acetyl derivative is a component of chitin, glycolipids, glycoproteins, and heteroglycans.", def_cn: "2-脱氧-2-氨基-D-葡萄糖；其N-乙酰衍生物是几丁质、糖脂、糖蛋白和杂聚糖的组分。" },
    { cz: "D-galaktosamin", en: "D-galactosamine", cn: "D-半乳糖胺", def_en: "2-deoxy-2-amino-D-galactose; its N-acetyl derivative is an important component of glycoproteins and glycolipids.", def_cn: "2-脱氧-2-氨基-D-半乳糖；其N-乙酰衍生物是糖蛋白和糖脂的重要组分。" },
    { cz: "kyselina neuraminová", en: "neuraminic acid", cn: "神经氨酸", def_en: "An amino sugar acid formally corresponding to the aldol condensation product of pyruvic acid and D-mannosamine; never free in vivo, its N-acetyl/N-glycolyl derivatives are key components of membrane glycolipids, blood-group substances, and glycoproteins.", def_cn: "一种氨基糖酸，其结构在形式上对应于丙酮酸与D-甘露糖胺的羟醛缩合产物；体内从不以游离形式存在，其N-乙酰基/N-羟乙酰基衍生物是膜糖脂、血型物质及糖蛋白的关键组分。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which three amino sugars does the book identify as biochemically important, and how is D-glucosamine formally named?",
      q_cn: "教材指出哪三种氨基糖具有重要的生物化学意义？D-葡萄糖胺的正式命名是什么？",
      options: [
        "D-glucosamine (2-deoxy-2-amino-D-glucose), D-galactosamine (2-deoxy-2-amino-D-galactose), and neuraminic acid",
        "D-glucosamine, D-mannosamine, and D-galactosamine only",
        "N-acetylneuraminic acid, chitin, and heparin",
        "D-glucosamine, L-fucose, and L-rhamnose"
      ],
      answer: 0,
      why_en: "The book names exactly these three: D-glucosamine (2-deoxy-2-amino-D-glucose), D-galactosamine (2-deoxy-2-amino-D-galactose), and neuraminic acid. D-mannosamine appears only as a precursor of neuraminic acid, not as one of the three named amino sugars itself; chitin/heparin are polysaccharides, not amino sugars; L-fucose/L-rhamnose are deoxy sugars (next section), not amino sugars.",
      why_cn: "教材恰好指出了这三种：D-葡萄糖胺（2-脱氧-2-氨基-D-葡萄糖）、D-半乳糖胺（2-脱氧-2-氨基-D-半乳糖）和神经氨酸。D-甘露糖胺只是作为神经氨酸的前体出现，并非三种命名氨基糖之一；几丁质/肝素是多糖，不是氨基糖；L-岩藻糖/L-鼠李糖是脱氧糖（下一节内容），不是氨基糖。"
    },
    {
      type: "mcq",
      q_en: "Per the book, what does neuraminic acid's structure formally correspond to, and does it ever occur free in vivo?",
      q_cn: "根据教材，神经氨酸的结构在形式上对应于什么？它在体内是否以游离形式存在？",
      options: [
        "The aldol condensation product of pyruvic acid and D-mannosamine; it never occurs free — only its N-acetyl/N-glycolyl derivatives matter biologically",
        "The direct acetylation product of D-glucosamine; it occurs abundantly free in blood plasma",
        "A simple oxidation product of D-galactosamine; it occurs free in chitin",
        "The reduction product of D-fructose; it occurs free in phospholipids"
      ],
      answer: 0,
      why_en: "The book states neuraminic acid's structure formally corresponds to the aldol condensation of pyruvic acid and D-mannosamine, and explicitly says it does not occur in free form — only its N-acetyl or N-glycolyl derivatives are the biologically important species, found in membrane glycolipids, blood-group substances, and glycoproteins.",
      why_cn: "教材指出，神经氨酸的结构在形式上对应于丙酮酸与D-甘露糖胺的羟醛缩合产物，并明确指出它不以游离形式存在——只有其N-乙酰基或N-羟乙酰基衍生物才是具有生物学意义的物种，存在于膜糖脂、血型物质和糖蛋白中。"
    },
    {
      type: "short",
      q_en: "Which polysaccharide is N-acetyl-D-glucosamine a component of, and which acyl group most commonly acylates amino sugars' amino groups in general?",
      q_cn: "N-乙酰-D-葡萄糖胺是哪种多糖的组分？氨基糖的氨基一般最常被哪种酰基酰化？",
      accept: ["chitin", "acetyl", "几丁质", "乙酰"],
      answer_en: "N-acetyl-D-glucosamine is a component of chitin (also glycolipids, glycoproteins, heteroglycans). Amino sugars' amino groups are most often acylated by acetyl.",
      answer_cn: "N-乙酰-D-葡萄糖胺是几丁质的组分（也是糖脂、糖蛋白、杂聚糖的组分）。氨基糖的氨基最常被乙酰基酰化。"
    }
  ],
  oral: {
    q_en: "Describe amino sugars in general and neuraminic acid specifically, including its formal biosynthetic origin and why it never occurs free.",
    q_cn: "概述氨基糖，并specifically介绍神经氨酸，包括其形式上的生物合成来源以及为什么它从不以游离形式存在。",
    model_en: "Amino sugars are, formally speaking, ordinary sugars with one hydroxyl group replaced by an amino group, and three of them matter most biochemically: D-glucosamine, which is 2-deoxy-2-amino-D-glucose; D-galactosamine, which is 2-deoxy-2-amino-D-galactose; and neuraminic acid. A recurring feature of amino sugars is that their amino group very often gets acylated by an organic acid residue, most commonly acetyl. N-acetyl-D-glucosamine, for instance, turns up bound in the polysaccharide chitin, as well as in glycolipids, glycoproteins, and heteroglycans, while N-acetyl-D-galactosamine is an important component specifically of glycoproteins and glycolipids. Neuraminic acid is the most structurally distinctive of the three: its structure formally corresponds to what you'd get from an aldol condensation between pyruvic acid and D-mannosamine. But it never actually occurs in the free state in the body — what matters biologically are its N-acetyl or N-glycolyl derivatives, which are very important components of membrane glycolipids, of the substances that determine blood groups, and of many other glycoproteins besides.",
    checklist: [
      "Defined amino sugars as formal OH-to-NH2 substitution products",
      "Named the three important amino sugars: D-glucosamine, D-galactosamine, neuraminic acid",
      "Noted the amino group is very often acetylated (or otherwise acylated)",
      "Named chitin, glycolipids, glycoproteins, heteroglycans as N-acetyl-D-glucosamine's contexts",
      "Named glycoproteins/glycolipids as N-acetyl-D-galactosamine's contexts",
      "Described neuraminic acid as formally the aldol condensation of pyruvate + D-mannosamine",
      "Stated neuraminic acid never occurs free; only its N-acetyl/N-glycolyl derivatives matter biologically"
    ]
  }
},

{
  id: "7-2-5",
  chapter: 7,
  section: "7.2.5",
  czTitle: "Deoxycukry",
  enTitle: "Deoxy sugars",
  cnTitle: "脱氧糖",
  pages: [153],
  coverage: "full",
  coverageNote: "Full text of '7.2.5 Deoxycukry' on page 153 read directly, including the forward cross-reference to Obr. 7.12 (outside this page range, not itself verified here).",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Among the biochemically most important deoxy sugars is 2-DEOXY-D-RIBOSE, a component of DNA. Also occurring naturally are the 6-DEOXYHEXOSES: L-FUCOSE (6-deoxy-L-galactose), contained in milk oligosaccharides and in glycoproteins (forward ref Obr. 7.12); and L-RHAMNOSE (6-deoxy-L-mannose), found in glycosides.",
    cn: "生物化学上最重要的脱氧糖之一是2-脱氧-D-核糖，是DNA的组分。自然界中还存在6-脱氧己糖：L-岩藻糖（6-脱氧-L-半乳糖），存在于乳低聚糖和糖蛋白中（前瞻引用图7.12）；以及L-鼠李糖（6-脱氧-L-甘露糖），存在于糖苷中。"
  },
  points: [
    { cz: "2-deoxy-D-ribosa = složka DNA", en: "Among the biochemically most important deoxy sugars is 2-DEOXY-D-RIBOSE, a component of DNA.", cn: "生物化学上最重要的脱氧糖之一是2-脱氧-D-核糖，是DNA的组分。" },
    { cz: "L-fukosa (6-deoxy-L-galaktosa) — mléčné oligosacharidy, glykoproteiny", en: "L-FUCOSE (6-deoxy-L-galactose) is a naturally occurring 6-deoxyhexose contained in milk oligosaccharides and in glycoproteins (forward ref Obr. 7.12).", cn: "L-岩藻糖（6-脱氧-L-半乳糖）是一种天然存在的6-脱氧己糖，存在于乳低聚糖和糖蛋白中（前瞻引用图7.12）。" },
    { cz: "L-rhamnosa (6-deoxy-L-mannosa) — glykosidy", en: "L-RHAMNOSE (6-deoxy-L-mannose) is another naturally occurring 6-deoxyhexose, found in glycosides.", cn: "L-鼠李糖（6-脱氧-L-甘露糖）是另一种天然存在的6-脱氧己糖，存在于糖苷中。" }
  ],
  terms: [
    { cz: "deoxycukr", en: "deoxy sugar", cn: "脱氧糖", def_en: "A sugar in which a hydroxyl group is replaced by hydrogen; 2-deoxy-D-ribose (in DNA) and the 6-deoxyhexoses L-fucose/L-rhamnose are the book's examples.", def_cn: "羟基被氢取代的糖；教材举例为2-脱氧-D-核糖（DNA的组分）以及6-脱氧己糖L-岩藻糖/L-鼠李糖。" },
    { cz: "L-fukosa", en: "L-fucose", cn: "L-岩藻糖", def_en: "6-deoxy-L-galactose; found in milk oligosaccharides and glycoproteins.", def_cn: "6-脱氧-L-半乳糖；存在于乳低聚糖和糖蛋白中。" },
    { cz: "L-rhamnosa", en: "L-rhamnose", cn: "L-鼠李糖", def_en: "6-deoxy-L-mannose; found in glycosides.", def_cn: "6-脱氧-L-甘露糖；存在于糖苷中。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which deoxy sugar does the book identify as a component of DNA?",
      q_cn: "教材指出哪种脱氧糖是DNA的组分？",
      options: ["L-fucose", "L-rhamnose", "2-deoxy-D-ribose", "D-glucosamine"],
      answer: 2,
      why_en: "The book names 2-deoxy-D-ribose specifically as a component of DNA; L-fucose and L-rhamnose are the two 6-deoxyhexose examples given for a different context (milk oligosaccharides/glycoproteins and glycosides respectively), and D-glucosamine is an amino sugar, not a deoxy sugar.",
      why_cn: "教材specifically指出2-脱氧-D-核糖是DNA的组分；L-岩藻糖和L-鼠李糖是书中举出的两个6-脱氧己糖例子，分别用于不同情境（乳低聚糖/糖蛋白，以及糖苷），而D-葡萄糖胺是氨基糖，不是脱氧糖。"
    },
    {
      type: "mcq",
      q_en: "L-fucose and L-rhamnose are both 6-deoxyhexoses. What are their respective parent sugars and typical occurrence, per the book?",
      q_cn: "L-岩藻糖和L-鼠李糖都是6-脱氧己糖。根据教材，二者各自的母体糖和典型存在位置是什么？",
      options: [
        "L-fucose = 6-deoxy-L-galactose, found in milk oligosaccharides/glycoproteins; L-rhamnose = 6-deoxy-L-mannose, found in glycosides",
        "L-fucose = 6-deoxy-L-mannose, found in glycosides; L-rhamnose = 6-deoxy-L-galactose, found in milk oligosaccharides",
        "Both are 6-deoxy-L-glucose, found exclusively in DNA",
        "L-fucose = 6-deoxy-D-glucose; L-rhamnose = 6-deoxy-D-galactose"
      ],
      answer: 0,
      why_en: "The book pairs L-fucose with 6-deoxy-L-galactose (found in milk oligosaccharides and glycoproteins) and L-rhamnose with 6-deoxy-L-mannose (found in glycosides) — option B swaps the pairing, and options C/D misname the parent sugars/series.",
      why_cn: "教材将L-岩藻糖与6-脱氧-L-半乳糖（存在于乳低聚糖和糖蛋白中）配对，将L-鼠李糖与6-脱氧-L-甘露糖（存在于糖苷中）配对——选项B调换了配对关系，选项C、D则错误命名了母体糖/系别。"
    },
    {
      type: "short",
      q_en: "Name the two 6-deoxyhexoses the book lists as naturally occurring, with their parent sugars.",
      q_cn: "列出教材中提到的两种天然存在的6-脱氧己糖及其母体糖。",
      accept: ["fucose", "galactose", "rhamnose", "mannose", "岩藻糖", "半乳糖", "鼠李糖", "甘露糖"],
      answer_en: "L-fucose (6-deoxy-L-galactose) and L-rhamnose (6-deoxy-L-mannose).",
      answer_cn: "L-岩藻糖（6-脱氧-L-半乳糖）和L-鼠李糖（6-脱氧-L-甘露糖）。"
    }
  ],
  oral: {
    q_en: "Describe the deoxy sugars the book names and where each occurs.",
    q_cn: "描述教材中提到的脱氧糖及其各自的存在位置。",
    model_en: "Among all the deoxy sugars, the one that matters most biochemically is 2-deoxy-D-ribose, simply because it's a structural component of DNA. Beyond that single most important example, nature also makes use of a class called the 6-deoxyhexoses, and the book names two of them. L-fucose, which is 6-deoxy-L-galactose, turns up in milk oligosaccharides and in glycoproteins. L-rhamnose, which is 6-deoxy-L-mannose, turns up instead in glycosides.",
    checklist: [
      "Named 2-deoxy-D-ribose as a component of DNA",
      "Named L-fucose (6-deoxy-L-galactose) and its occurrence in milk oligosaccharides/glycoproteins",
      "Named L-rhamnose (6-deoxy-L-mannose) and its occurrence in glycosides"
    ]
  }
},

{
  id: "7-2-6",
  chapter: 7,
  section: "7.2.6",
  czTitle: "Glykosidy",
  enTitle: "Glycosides",
  cnTitle: "糖苷",
  pages: [153],
  coverage: "partial",
  coverageNote: "INCOMPLETE BY PAGE-RANGE DESIGN: only the section heading and its opening definition sentence, plus the first clause of a worked D-glucose+methanol+HCl example, appear on page 153 before this agent's assigned range (148-153) ends. The sentence is cut off mid-word ('methyl-...') at the very bottom of the page and continues onto page 154, which was NOT read as part of this drafting pass. The two specific methylglucoside products of the worked example, their anomeric identity, and any further glycoside chemistry (O- versus N-glycosidic bonds, biological examples such as nucleosides or the glycosidic linkages of oligo-/polysaccharides) are consequently NOT covered here. This node is a deliberately minimal placeholder reflecting only what page 153 actually contains, and should be extended/merged once page 154 is read — do not treat it as feature-complete without checking against the node produced for the 154+ page range.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Replacing a sugar's hemiacetal (poloacetálový) hydroxyl group with an alkoxy group gives GLYCOSIDES. The book begins a worked example: heating D-glucose in methanol containing HCl forms two acetals — two glycosides — the first of which is named 'methyl-...' at the exact point where page 153 ends; the rest of the sentence, the second glycoside's name, and any surrounding discussion are on page 154, outside this node's verified range.",
    cn: "用烷氧基取代糖的半缩醛羟基即可得到糖苷。教材开始给出一个实例：将D-葡萄糖在含HCl的甲醇中加热，会形成两个缩醛——即两个糖苷，其中第一个的名称在页面153结束处写作「methyl-……」；句子的其余部分、第二个糖苷的名称以及周边的进一步讨论都在第154页，超出了本节点已核实的范围。"
  },
  points: [
    { cz: "glykosid = poloacetálový OH nahrazen alkoxylem", en: "Replacing a sugar's hemiacetal hydroxyl group with an alkoxy group gives a GLYCOSIDE.", cn: "用烷氧基取代糖的半缩醛羟基即可得到糖苷。" },
    { cz: "D-glukosa + methanol/HCl → 2 acetály (2 glykosidy) — VĚTA NEDOKONČENA", en: "Worked example (BEGUN on p.153, NOT completed within this agent's range): heating D-glucose in methanol containing HCl forms two acetals — i.e. two glycosides. The text names the first as 'methyl-...' at the exact point the page (and this node's coverage) ends.", cn: "实例（在第153页开始，但在本节点的覆盖范围内尚未完成）：将D-葡萄糖在含HCl的甲醇中加热，会形成两个缩醛——即两个糖苷。文本在页面（及本节点覆盖范围）结束处，将第一个命名为「methyl-……」。" }
  ],
  terms: [
    { cz: "glykosid", en: "glycoside", cn: "糖苷", def_en: "A sugar derivative in which the hemiacetal (anomeric) hydroxyl group has been replaced by an alkoxy group.", def_cn: "糖的半缩醛（异头）羟基被烷氧基取代后形成的糖衍生物。" }
  ],
  quiz: [
    {
      type: "short",
      q_en: "What functional-group change defines a glycoside, per the opening sentence of this section?",
      q_cn: "根据本节开篇句，糖苷的形成涉及什么官能团变化？",
      accept: ["hemiacetal", "hydroxyl", "alkoxy", "半缩醛", "羟基", "烷氧基"],
      answer_en: "A glycoside is formed by replacing a sugar's hemiacetal (poloacetálový) hydroxyl group with an alkoxy group.",
      answer_cn: "糖苷是通过用烷氧基取代糖的半缩醛羟基而形成的。"
    }
  ],
  oral: {
    q_en: "Define a glycoside based on what this section's opening sentence establishes, and note what remains unverified about this topic within this page range.",
    q_cn: "根据本节开篇句给出的内容定义糖苷，并说明在本页范围内该主题还有哪些内容尚未核实。",
    model_en: "A glycoside, as this section opens by defining it, is what you get when you replace a sugar's hemiacetal hydroxyl group with an alkoxy group. The book immediately starts working through a concrete example — heating D-glucose in methanol that contains HCl, which forms two acetals, meaning two glycosides — but the sentence naming the first of those two products, 'methyl-something', is cut off right at the bottom of page 153, and the rest of that example, along with whatever broader discussion of glycosidic bonds follows, sits on the next page, which falls outside the range read for this pass. So the honest answer here is a definition plus an unfinished worked example, not a complete picture of the section.",
    checklist: [
      "Defined glycoside as hemiacetal-OH replaced by alkoxy",
      "Named the worked example's setup: D-glucose + methanol + HCl forming two acetals/glycosides",
      "Explicitly noted the sentence and section are incomplete within this page range, continuing on p.154"
    ]
  }
},

{
  id: "7-3-1",
  chapter: 7,
  section: "7.3",
  czTitle: "Oligosacharidy — definice a neredukující oligosacharidy",
  enTitle: "Oligosaccharides — definitions and non-reducing oligosaccharides",
  cnTitle: "寡糖——定义与非还原性寡糖",
  pages: [154, 155],
  coverage: "full",
  coverageNote: "Bottom half of p.154, from the '7.3 Oligosacharidy' heading through the end of the sacharosa entry (including its structural diagram), plus the top of p.155 through the trehalosa and raffinosa entries, read in full and verified against the scans. The material ABOVE the 7.3 heading on p.154 (glykosidová vazba / O-glykosid vs N-glykosid / aglykon, methyl-alpha/beta-D-glukopyranosid and Obr. 7.7) is a continuation of section 7.2, outside this node's assigned range (7.3-7.6.3) — not drafted here; flagged in the drafting report for reconciliation with whichever node covers p.153/§7.2. The 'b) redukující oligosacharidy' subheading and its four entries later on p.155 belong to node 7-3-2.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "Section 7.3 defines oligosaccharides as chains of up to 10 monosaccharide residues built by joining monosaccharide units through O-glycosidic bonds (longer chains are polysaccharides, ch. 7.4). Whether the resulting disaccharide is reducing or non-reducing depends on exactly which hydroxyls form that bond: if the glycosidic bond uses the hemiacetal (poloacetal) hydroxyl of BOTH monosaccharide units, no free hemiacetal hydroxyl remains, and the disaccharide is NON-REDUCING — it does not mutarotate and cannot itself form further glycosides (sacharosa/sucrose is the book's example). If instead the anomeric C-1 of one monosaccharide bonds to any hydroxyl of the other EXCEPT its hemiacetal one, one free hemiacetal hydroxyl survives, and the disaccharide IS reducing — it mutarotates and can form glycosides (maltosa is the book's example, covered in node 7-3-2). This node covers the book's 'a) neredukující oligosacharidy' list: SACHAROSA (O-alpha-D-glukopyranosyl-beta-D-fruktofuranosid, cane/beet sugar, very widespread in plants, hydrolyzes very easily to D-glucose + D-fructose), TREHALOSA (O-alpha-D-glukopyranosyl-alpha-D-glukopyranosid, found in plants and in insect hemolymph), and RAFFINOSA (6-O-alpha-D-galaktosyl-alpha-D-glukopyranosyl-beta-D-fruktofuranosid, a trisaccharide describable as a galactoside of sucrose, widespread in plants alongside STACHYOSA, which carries one extra O-alpha-D-galaktosyl residue compared to raffinose).",
    cn: "7.3节将寡糖定义为最多由10个单糖残基通过O-糖苷键连接而成的链状分子（更长的链则称为多糖，见第7.4节）。生成的二糖是否为还原性糖，取决于糖苷键具体使用了哪些羟基：如果糖苷键同时用掉了两个单糖单位各自的半缩醛（poloacetal）羟基，则不再有游离的半缩醛羟基，该二糖为非还原性——不发生变旋现象，也不能再形成糖苷（教材举的例子是蔗糖）。反之，如果其中一个单糖的异头碳C-1与另一个单糖除半缩醛羟基以外的任意羟基成键，则会保留一个游离的半缩醛羟基，该二糖即为还原性糖——会发生变旋现象，也能形成糖苷（教材举的例子是麦芽糖，见节点7-3-2）。本节点覆盖教材「a) 非还原性寡糖」清单：蔗糖（O-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷，甘蔗糖/甜菜糖，广泛存在于植物界，极易水解为D-葡萄糖和D-果糖）；海藻糖（O-α-D-吡喃葡萄糖基-α-D-吡喃葡萄糖苷，存在于植物及昆虫血淋巴中）；棉子糖（6-O-α-D-半乳糖基-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷，一种三糖，可视为蔗糖的半乳糖苷，广泛存在于植物界，常与水苏糖并存——后者比棉子糖多一个O-α-D-半乳糖基残基）。"
  },
  points: [
    { cz: "oligosacharid — definice (do 10 zbytků)", en: "The book defines OLIGOSACCHARIDES as chains of up to 10 monosaccharide residues, formed when monosaccharide units are joined by O-glycosidic bonds; chains longer than that are POLYSACCHARIDES (ch. 7.4).", cn: "教材将寡糖定义为最多由10个单糖残基组成的链状分子，由单糖单位通过O-糖苷键连接而成；超过这个长度的链则称为多糖（见第7.4节）。" },
    { cz: "neredukující disacharid — obě poloacetálové OH", en: "If the O-glycosidic bond uses the hemiacetal (poloacetálový) hydroxyl of BOTH participating monosaccharide units, the resulting disaccharide is NON-REDUCING: it does not mutarotate and cannot itself form glycosides. Sacharosa is the book's worked example.", cn: "如果O-糖苷键同时使用了两个单糖单位各自的半缩醛羟基，生成的二糖就是非还原性的：不发生变旋现象，也不能再形成糖苷。教材举的例子是蔗糖。" },
    { cz: "redukující disacharid — jeden volný poloacetál", en: "If instead the anomeric C-1 of one monosaccharide reacts with ANY hydroxyl of the other monosaccharide EXCEPT its hemiacetal one, the disaccharide keeps one FREE hemiacetal hydroxyl — it IS reducing, mutarotates, and CAN form glycosides. Maltosa is the book's worked example (node 7-3-2).", cn: "反之，如果一个单糖的异头碳C-1与另一个单糖除半缩醛羟基以外的任意羟基反应，该二糖会保留一个游离的半缩醛羟基——因而是还原性的，会发生变旋现象，也能形成糖苷。教材举的例子是麦芽糖（见节点7-3-2）。" },
    { cz: "sacharosa = O-α-D-glukopyranosyl-β-D-fruktofuranosid", en: "SACHAROSA (sucrose — cane/beet sugar, 'třtinový nebo řepný cukr'): O-alpha-D-glucopyranosyl-beta-D-fructofuranoside. Very widespread in the plant kingdom; hydrolyzes VERY EASILY to D-glucose and D-fructose.", cn: "蔗糖（甘蔗糖/甜菜糖）：O-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷。广泛存在于植物界，极易水解为D-葡萄糖和D-果糖。" },
    { cz: "trehalosa = O-α-D-glukopyranosyl-α-D-glukopyranosid", en: "TREHALOSA: O-alpha-D-glucopyranosyl-alpha-D-glucopyranoside — found in PLANTS and in the HEMOLYMPH OF INSECTS.", cn: "海藻糖：O-α-D-吡喃葡萄糖基-α-D-吡喃葡萄糖苷——存在于植物及昆虫的血淋巴中。" },
    { cz: "raffinosa — trisacharid, galaktosid sacharosy; stachyosa", en: "RAFFINOSA: 6-O-alpha-D-galactosyl-alpha-D-glucopyranosyl-beta-D-fructofuranoside — a TRISACCHARIDE that can be regarded as a galactoside of sucrose. Widespread in the plant kingdom alongside STACHYOSA, which contains ONE MORE O-alpha-D-galactosyl residue than raffinose.", cn: "棉子糖：6-O-α-D-半乳糖基-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷——一种三糖，可视为蔗糖的半乳糖苷。广泛存在于植物界，常与水苏糖并存——水苏糖比棉子糖多一个O-α-D-半乳糖基残基。" }
  ],
  terms: [
    { cz: "oligosacharid", en: "oligosaccharide", cn: "寡糖", def_en: "A chain of up to 10 monosaccharide residues joined by O-glycosidic bonds.", def_cn: "由最多10个单糖残基通过O-糖苷键连接而成的链状分子。" },
    { cz: "neredukující disacharid", en: "non-reducing disaccharide", cn: "非还原性二糖", def_en: "A disaccharide in which the glycosidic bond consumes both units' hemiacetal hydroxyls, so it does not mutarotate and cannot form glycosides (e.g. sucrose).", def_cn: "糖苷键消耗了两个单糖单位各自半缩醛羟基的二糖，因而不发生变旋现象，也不能形成糖苷（如蔗糖）。" },
    { cz: "redukující disacharid a mutarotace", en: "reducing disaccharide / mutarotation", cn: "还原性二糖／变旋现象", def_en: "A disaccharide retaining one free hemiacetal hydroxyl, so it mutarotates (its optical rotation drifts as alpha/beta anomers interconvert in solution) and can form glycosides (e.g. maltose).", def_cn: "保留一个游离半缩醛羟基的二糖，因而会发生变旋现象（在溶液中α/β端基异构体互相转化，旋光度随之变化），并能形成糖苷（如麦芽糖）。" },
    { cz: "sacharosa", en: "sucrose", cn: "蔗糖", def_en: "O-alpha-D-glucopyranosyl-beta-D-fructofuranoside; a non-reducing disaccharide that hydrolyzes very easily to glucose and fructose.", def_cn: "O-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷；一种极易水解为葡萄糖和果糖的非还原性二糖。" },
    { cz: "trehalosa", en: "trehalose", cn: "海藻糖", def_en: "O-alpha-D-glucopyranosyl-alpha-D-glucopyranoside; a non-reducing disaccharide found in plants and insect hemolymph.", def_cn: "O-α-D-吡喃葡萄糖基-α-D-吡喃葡萄糖苷；存在于植物及昆虫血淋巴中的非还原性二糖。" },
    { cz: "raffinosa / stachyosa", en: "raffinose / stachyose", cn: "棉子糖／水苏糖", def_en: "Raffinose is a non-reducing trisaccharide, a galactoside of sucrose; stachyose is the related tetrasaccharide with one extra galactosyl residue.", def_cn: "棉子糖是一种非还原性三糖，可视为蔗糖的半乳糖苷；水苏糖是与之相关的四糖，多一个半乳糖基残基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structural feature determines whether a disaccharide is reducing or non-reducing?",
      q_cn: "决定一个二糖是还原性还是非还原性的结构特征是什么？",
      options: [
        "Whether the disaccharide is built from two identical monosaccharides",
        "Whether the glycosidic bond uses the hemiacetal hydroxyl of both monosaccharide units (non-reducing) or leaves one hemiacetal hydroxyl free (reducing)",
        "Whether the disaccharide contains D-glucose or D-galactose",
        "Whether the disaccharide is found in plants or animals"
      ],
      answer: 1,
      why_en: "If the O-glycosidic bond consumes the hemiacetal hydroxyl of BOTH units, no free hemiacetal hydroxyl remains and the disaccharide is non-reducing, cannot mutarotate, and cannot form glycosides (sucrose). If one hemiacetal hydroxyl survives, the disaccharide is reducing, mutarotates, and can form glycosides (maltose). The other options are not the book's criterion.",
      why_cn: "如果O-糖苷键消耗了两个单位各自的半缩醛羟基，就不再有游离的半缩醛羟基，该二糖为非还原性，不能变旋，也不能形成糖苷（如蔗糖）。如果保留一个半缩醛羟基，则该二糖为还原性，会变旋，也能形成糖苷（如麦芽糖）。其余选项都不是教材给出的判断标准。"
    },
    {
      type: "short",
      q_en: "Sucrose hydrolyzes into which two monosaccharides, and why is it classified as non-reducing?",
      q_cn: "蔗糖水解生成哪两种单糖？为什么它被归为非还原性糖？",
      accept: ["glucose", "fructose", "hemiacetal", "non-reducing", "葡萄糖", "果糖", "半缩醛", "非还原"],
      answer_en: "Sucrose (O-alpha-D-glucopyranosyl-beta-D-fructofuranoside) hydrolyzes very easily into D-glucose and D-fructose. It is non-reducing because its glycosidic bond is formed between the hemiacetal hydroxyls of BOTH monosaccharide units, leaving no free hemiacetal hydroxyl to mutarotate or react further.",
      answer_cn: "蔗糖（O-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷）极易水解生成D-葡萄糖和D-果糖。它属于非还原性糖，是因为其糖苷键由两个单糖单位各自的半缩醛羟基共同形成，不再留下可以变旋或进一步反应的游离半缩醛羟基。"
    }
  ],
  oral: {
    q_en: "Explain what defines an oligosaccharide, the structural difference between reducing and non-reducing disaccharides, and describe the book's three examples of non-reducing oligosaccharides.",
    q_cn: "解释寡糖的定义、还原性与非还原性二糖的结构区别，并描述教材给出的三个非还原性寡糖例子。",
    model_en: "An oligosaccharide, in this book's terms, is a chain of up to ten monosaccharide residues joined by O-glycosidic bonds — anything longer counts as a polysaccharide instead. Whether the resulting disaccharide is reducing or not comes down to exactly which hydroxyl groups form that glycosidic bond: if both monosaccharide units contribute their own hemiacetal hydroxyl, there's no free hemiacetal hydroxyl left over, so the disaccharide can't mutarotate and can't go on to form further glycosides — that makes it non-reducing, and sucrose is the textbook example. If instead the anomeric carbon of one sugar bonds to some other hydroxyl of the second sugar, leaving that second sugar's own hemiacetal hydroxyl free, then the disaccharide keeps the ability to mutarotate and to form glycosides — that's the reducing case, illustrated by maltose. Among the non-reducing oligosaccharides, sucrose itself is O-alpha-D-glucopyranosyl-beta-D-fructofuranoside, extremely widespread in plants and very easily hydrolyzed back to glucose and fructose. Trehalose is the corresponding glucose-glucose version, O-alpha-D-glucopyranosyl-alpha-D-glucopyranoside, found in plants and notably in insect hemolymph. And raffinose is actually a trisaccharide, 6-O-alpha-D-galactosyl-alpha-D-glucopyranosyl-beta-D-fructofuranoside, which you can think of as a galactoside built on top of sucrose; it occurs widely in plants together with stachyose, which is the same idea with one extra galactose unit attached.",
    checklist: [
      "Defined oligosaccharide as up to 10 monosaccharide residues joined by O-glycosidic bonds",
      "Explained non-reducing: both hemiacetal hydroxyls consumed, no mutarotation, no further glycosides",
      "Explained reducing: one hemiacetal hydroxyl free, mutarotates, can form glycosides",
      "Named sucrose as O-alpha-D-glucopyranosyl-beta-D-fructofuranoside and its hydrolysis products",
      "Named trehalose as the glucose-glucose analogue and its occurrence in insect hemolymph",
      "Described raffinose as a trisaccharide/galactoside of sucrose, and stachyose as one galactose unit larger"
    ]
  }
},

{
  id: "7-3-2",
  chapter: 7,
  section: "7.3",
  czTitle: "Oligosacharidy — redukující oligosacharidy",
  enTitle: "Oligosaccharides — reducing oligosaccharides",
  cnTitle: "寡糖——还原性寡糖",
  pages: [155],
  coverage: "full",
  coverageNote: "The 'b) redukující oligosacharidy' subsection of p.155 read in full and verified against the scan: cellobiosa, maltosa (with its structural diagram, labelled '1' and '4' ring positions), isomaltosa, and laktosa (with its own structural diagram). The preceding 'a) neredukující oligosacharidy' subsection (sacharosa, trehalosa, raffinosa) belongs to node 7-3-1; the '7.4 Polysacharidy' heading that follows laktosa further down the same page belongs to node 7-4.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  summary: {
    en: "This node covers the book's 'b) redukující oligosacharidy' list, all four of which keep one free hemiacetal hydroxyl (the property defined in node 7-3-1) and therefore mutarotate and can form glycosides. CELLOBIOSA (4-O-beta-D-glukopyranosyl-D-glukopyranosa) is the basic repeating disaccharide of cellulose (forward link to ch. 7.4.1). MALTOSA (4-O-alpha-D-glukopyranosyl-D-glukopyranosa, 'sladový cukr'/malt sugar) arises from the breakdown of starch. ISOMALTOSA (6-O-alpha-D-glukopyranosyl-D-glukopyranosa) is likewise obtained from starch hydrolysate, but specifically from the points where the linear starch chain branches — i.e. it is the disaccharide fingerprint of an alpha(1→6) branch point (forward link to amylopectin, ch. 7.4.1). LAKTOSA (4-O-beta-D-galaktopyranosyl-D-glukopyranosa, 'mléčný cukr'/milk sugar) is the most important sugar in the milk of all mammals.",
    cn: "本节点覆盖教材「b) 还原性寡糖」清单，这四种二糖都保留一个游离的半缩醛羟基（定义见节点7-3-1），因而都会变旋、也都能形成糖苷。纤维二糖（4-O-β-D-吡喃葡萄糖基-D-吡喃葡萄糖）是纤维素的基本重复二糖单位（与第7.4.1节相呼应）。麦芽糖（4-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖，「麦芽糖」）产生于淀粉的分解。异麦芽糖（6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖）同样得自淀粉水解产物，但specifically来自线性淀粉链发生分支的那些位点——也就是说，它正是α(1→6)分支点在二糖层面的「指纹」（与第7.4.1节支链淀粉相呼应）。乳糖（4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖，「乳糖」）是所有哺乳动物乳汁中最重要的糖。"
  },
  points: [
    { cz: "všechny čtyři: volný poloacetál → redukující", en: "All four disaccharides in this list keep ONE free hemiacetal hydroxyl (as defined in node 7-3-1), so they all MUTAROTATE and can all form GLYCOSIDES.", cn: "本清单中的四种二糖都保留一个游离的半缩醛羟基（定义见节点7-3-1），因而都会发生变旋，也都能形成糖苷。" },
    { cz: "cellobiosa = 4-O-β-D-glukopyranosyl-D-glukopyranosa", en: "CELLOBIOSA: 4-O-beta-D-glucopyranosyl-D-glucopyranosa — the BASIC REPEATING COMPONENT OF CELLULOSE (forward link to the cellulose entry in ch. 7.4.1).", cn: "纤维二糖：4-O-β-D-吡喃葡萄糖基-D-吡喃葡萄糖——是纤维素的基本组成单位（与第7.4.1节纤维素条目相呼应）。" },
    { cz: "maltosa = 4-O-α-D-glukopyranosyl-D-glukopyranosa (sladový cukr)", en: "MALTOSA: 4-O-alpha-D-glucopyranosyl-D-glucopyranosa — arises from the BREAKDOWN OF STARCH; also called 'sladový cukr' (malt sugar).", cn: "麦芽糖：4-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖——产生于淀粉的分解；又称「麦芽糖」。" },
    { cz: "isomaltosa = 6-O-α-D-glukopyranosyl-D-glukopyranosa (z větvících míst)", en: "ISOMALTOSA: 6-O-alpha-D-glucopyranosyl-D-glucopyranosa — likewise obtained from starch hydrolysate, but specifically from the points where the LINEAR STARCH CHAIN BRANCHES (i.e. from amylopectin's alpha(1→6) branch points, ch. 7.4.1).", cn: "异麦芽糖：6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖——同样得自淀粉水解产物，但specifically来自线性淀粉链发生分支的位点（即支链淀粉的α(1→6)分支点，见第7.4.1节）。" },
    { cz: "laktosa = 4-O-β-D-galaktopyranosyl-D-glukopyranosa (mléčný cukr)", en: "LAKTOSA: 4-O-beta-D-galactopyranosyl-D-glucopyranosa — called 'mléčný cukr' (milk sugar); the MOST IMPORTANT sugar in the milk of ALL mammals.", cn: "乳糖：4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖——即「乳糖」；是所有哺乳动物乳汁中最重要的糖。" }
  ],
  terms: [
    { cz: "cellobiosa", en: "cellobiose", cn: "纤维二糖", def_en: "4-O-beta-D-glucopyranosyl-D-glucopyranose, the repeating disaccharide unit of cellulose.", def_cn: "4-O-β-D-吡喃葡萄糖基-D-吡喃葡萄糖，纤维素的重复二糖单位。" },
    { cz: "maltosa", en: "maltose", cn: "麦芽糖", def_en: "4-O-alpha-D-glucopyranosyl-D-glucopyranose ('malt sugar'), a reducing disaccharide produced by starch breakdown.", def_cn: "4-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖（「麦芽糖」），淀粉分解产生的还原性二糖。" },
    { cz: "isomaltosa", en: "isomaltose", cn: "异麦芽糖", def_en: "6-O-alpha-D-glucopyranosyl-D-glucopyranose, obtained from starch hydrolysate specifically at the amylopectin branch points.", def_cn: "6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖，特异地来自支链淀粉分支点处的淀粉水解产物。" },
    { cz: "laktosa", en: "lactose", cn: "乳糖", def_en: "4-O-beta-D-galactopyranosyl-D-glucopyranose ('milk sugar'), the principal sugar of mammalian milk.", def_cn: "4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖（「乳糖」），哺乳动物乳汁中的主要糖分。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which reducing disaccharide is specifically produced from the branch points of the linear starch chain, and what does that reveal about its glycosidic bond?",
      q_cn: "哪种还原性二糖specifically产生于线性淀粉链的分支点？这揭示了其糖苷键的什么特点？",
      options: [
        "Maltose, with an alpha(1→4) bond, from the main chain",
        "Isomaltose, with an alpha(1→6) bond, matching amylopectin's branch-point linkage",
        "Cellobiose, with a beta(1→4) bond, from cellulose",
        "Lactose, with a beta(1→4) bond, from milk"
      ],
      answer: 1,
      why_en: "Isomaltose (6-O-alpha-D-glucopyranosyl-D-glucopyranose) is obtained from starch hydrolysate specifically at the points where the linear chain branches — i.e. its alpha(1→6) bond is the disaccharide signature of an amylopectin branch point, distinguishing it from maltose's alpha(1→4) main-chain bond.",
      why_cn: "异麦芽糖（6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖）得自淀粉水解产物中链发生分支的位点——也就是说，其α(1→6)键正是支链淀粉分支点在二糖层面的标志，区别于麦芽糖主链上的α(1→4)键。"
    },
    {
      type: "short",
      q_en: "Name all four reducing oligosaccharides in this section, their full O-glycoside names, and one biological source or role for each.",
      q_cn: "列出本节四种还原性寡糖的名称、完整的O-糖苷命名，以及各自的一个生物来源或作用。",
      accept: ["cellobiose", "maltose", "isomaltose", "lactose", "cellulose", "starch", "milk", "纤维二糖", "麦芽糖", "异麦芽糖", "乳糖"],
      answer_en: "Cellobiose (4-O-beta-D-glucopyranosyl-D-glucopyranose) is cellulose's repeating unit. Maltose (4-O-alpha-D-glucopyranosyl-D-glucopyranose) arises from starch breakdown. Isomaltose (6-O-alpha-D-glucopyranosyl-D-glucopyranose) comes from starch's branch points. Lactose (4-O-beta-D-galactopyranosyl-D-glucopyranose) is the principal sugar of mammalian milk.",
      answer_cn: "纤维二糖（4-O-β-D-吡喃葡萄糖基-D-吡喃葡萄糖）是纤维素的重复单位。麦芽糖（4-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖）产生于淀粉分解。异麦芽糖（6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖）来自淀粉的分支点。乳糖（4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖）是哺乳动物乳汁中的主要糖分。"
    }
  ],
  oral: {
    q_en: "Name and describe the book's four reducing oligosaccharides, and explain why they are classified as reducing.",
    q_cn: "说出并描述教材中四种还原性寡糖，并解释它们为何被归为还原性糖。",
    model_en: "All four sugars in this group share the defining property of a reducing disaccharide: one hemiacetal hydroxyl is left free after the glycosidic bond forms, so each of them mutarotates and can go on to form glycosides. Cellobiose is 4-O-beta-D-glucopyranosyl-D-glucopyranose, and it matters because it's the repeating disaccharide you get by breaking cellulose down into its smallest recurring unit. Maltose is 4-O-alpha-D-glucopyranosyl-D-glucopyranose, the malt sugar that arises when starch is broken down. Isomaltose is 6-O-alpha-D-glucopyranosyl-D-glucopyranose, and it's obtained from starch hydrolysate too, but specifically from the points where starch's linear chain branches — so wherever you find isomaltose, you're looking at the fingerprint of a branch point. And lactose is 4-O-beta-D-galactopyranosyl-D-glucopyranose, the milk sugar, and it's the most important sugar found in the milk of every mammal.",
    checklist: [
      "Explained why all four are reducing (one free hemiacetal hydroxyl, mutarotation, glycoside formation)",
      "Named cellobiose as cellulose's repeating unit",
      "Named maltose as starch's breakdown product with its alpha(1→4) bond",
      "Named isomaltose as arising from starch's alpha(1→6) branch points",
      "Named lactose as the principal sugar of mammalian milk"
    ]
  }
}

);
