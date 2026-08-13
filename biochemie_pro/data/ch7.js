/* ============================================================
   Chapter 7 -- Sacharidy
   Carbohydrates / 糖类
   Source: Biochemie - Zakladni kurz, pp. 148-175
   All 28 pages drafted (42 nodes, 7-1 through 7-12-2) as of 2026-08-05.
   The independent verification pass (re-reading the final content against
   the page scans to catch drafting errors -- see HANDOFF.md sec.8) has not
   been run yet; do that before treating this chapter as fully audited to
   the same standard as chapters 1-6.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "7-1",
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1",
  czTitle: "Monosacharidy",
  enTitle: "Monosaccharides",
  cnTitle: "单糖",
  pages: [148],
  coverage: "full",
  coverageNote: "Page 148 read in full: the chapter-7 opening paragraph (carbohydrates as among the most widespread organic substances, the largest share of organic matter on Earth) plus its four lettered functional roles a)-d), verified directly against the scan. The '7.1 Monosacharidy' heading itself carries no independent text of its own — section 7.1.1 begins immediately below it on the same page, so this node covers only the chapter-opening framing that precedes the 7.1/7.1.1 split.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Carbohydrates are the largest share of organic matter on Earth, and that abundance follows from doing several unrelated jobs at once — fuel, structural support, and information carried on cell surfaces.", cn: "糖类是地球上有机物中占比最大的一类，而这个丰度源于它同时承担几件互不相干的工作——燃料、结构支撑，以及写在细胞表面的信息。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1.1",
  czTitle: "Aldosy, ketosy",
  enTitle: "Aldoses, ketoses",
  cnTitle: "醛糖与酮糖",
  pages: [148],
  coverage: "full",
  coverageNote: "Full text of '7.1.1 Aldosy, ketosy' on page 148 read directly, from the monosaccharide/general-formula definition through the tetrose/pentose/hexose/heptose naming convention and the D-/L- assignment rule for polyhydroxy sugars with more than one asymmetric carbon.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Every monosaccharide is either an aldehyde or a ketone carrying hydroxyls — that one distinction is the whole aldose/ketose classification. Glyceraldehyde, with a single asymmetric carbon, is where D and L come from.", cn: "每一个单糖不是醛就是酮，再带上若干羟基——「醛糖／酮糖」的全部分类就是这一条区别。甘油醛只有一个不对称碳，D 型与 L 型就是从它来的。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1.2",
  czTitle: "Odvozování aldos a ketos — odvození řady aldos (obr. 7.1)",
  enTitle: "Deriving aldoses and ketoses — the aldose family tree (Obr. 7.1)",
  cnTitle: "醛糖与酮糖的推导——醛糖系谱（图7.1）",
  pages: [148, 149],
  coverage: "full",
  coverageNote: "Text at the bottom of page 148 (from the '7.1.2 Odvozování aldos a ketos' heading through the aldohexose stereoisomer count) read in full, plus Obr. 7.1 on page 149 (the complete D-aldose family tree, all 8 D-aldohexose end-labels — D-allosa, D-altrosa, D-glukosa, D-mannosa, D-gulosa, D-idosa, D-galaktosa, D-talosa — and every intermediate Fischer-projection column verified directly by zoomed re-read) and the epimer-defining paragraph immediately following the figure. Stops right before the ketose-derivation paragraph, which belongs to node 7-1-2-2. Note: Obr. 7.1 draws out only the D-branch of the tree in full structural detail; the L-series (mirror-image at every step) is stated numerically in the text ('4 v řadě D- a 4 v řadě L-', etc.) but not separately drawn — this is the book's own chosen scope for the figure, not an omission introduced here.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "n asymmetric carbons give 2ⁿ stereoisomers, so the aldose family tree is not a list to memorise but a count you can do: 2 aldotrioses, 4 aldotetroses, 8 aldopentoses, 16 aldohexoses.", cn: "n 个不对称碳给出 2ⁿ 个立体异构体，所以醛糖的家族树不是一张要背的清单，而是一个你可以自己数出来的结果：醛丙糖 2 个、醛丁糖 4 个、醛戊糖 8 个、醛己糖 16 个。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1.2",
  czTitle: "Odvozování aldos a ketos — odvození řady ketos (obr. 7.2)",
  enTitle: "Deriving aldoses and ketoses — the ketose family tree (Obr. 7.2)",
  cnTitle: "醛糖与酮糖的推导——酮糖系谱（图7.2）",
  pages: [149, 150],
  coverage: "full",
  coverageNote: "The ketose-derivation paragraph at the bottom of page 149 (from 'Řadu ketos je možno odvodit...' through '...Nejběžnější ketohexosou je D-fruktosa.') read in full, plus Obr. 7.2 printed at the top of page 150 (the complete ketose family tree — dihydroxyacetone, D-erythrulosa, D-ribulosa/D-xylulosa, D-psikosa/D-fruktosa/D-sorbosa/D-tagatosa — all end-labels verified directly against the scan) and its caption. Note on page layout: the figure is physically printed on p.150, after the '7.1.3 Poloacetálové formy' heading has already begun at the bottom of p.149 — this reflects the book's own print flow (figures float to the next available page break), not a re-ordering choice made by this drafting pass.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "A ketose carries its carbonyl at C-2, one asymmetric carbon fewer than the aldose of the same length, so every ketose level has half as many members. Dihydroxyacetone has none at all and is therefore optically inactive.", cn: "酮糖的羰基在 C-2，比同碳数的醛糖少一个不对称碳，所以每一层酮糖的成员数只有醛糖的一半。二羟丙酮一个不对称碳都没有，因此没有旋光性。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1.3",
  czTitle: "Poloacetálové formy — vznik, anomery, Haworthovy vzorce",
  enTitle: "Hemiacetal/hemiketal forms — formation, anomers, Haworth formulas",
  cnTitle: "半缩醛/半缩酮形式——形成、异头物、哈沃斯投影式",
  pages: [149, 150, 151],
  coverage: "full",
  coverageNote: "Text from the bottom of page 149 ('7.1.3 Poloacetálové formy' heading and the D-glucose pyranose-formation opening) through all of page 150 (fructose furanose-formation sentence, the Fischer-vs-Haworth convention paragraph, the anomeric-carbon/anomer-definition paragraph, and the furanose-occurrence-context paragraph) read in full, plus page 151's Obr. 7.3 (D-glukosa — tvorba cyklických poloacetálových forem: acyclic Fischer form, an intermediate open-chain-with-ring-forming-bond drawing, and both α-D-glukopyranosa/β-D-glukopyranosa Haworth structures, each zoomed and individually checked substituent-by-substituent against the standard α/β-D-glucopyranose convention — both match) and Obr. 7.4 (D-fruktosa — tvorba cyklické poloacetálové formy, α-D-fruktofuranosa) verified directly, plus the closing paragraph on pentoses in nucleic acids versus free D-ribose. Ends right before the '7.1.4 Mutarotace' heading.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "In water a sugar is a ring, not a chain: C-1 attacks the C-5 hydroxyl and closes a hemiacetal, which makes C-1 a NEW asymmetric carbon — and that is the entire origin of the α and β anomers.", cn: "在水里糖是环状而不是链状：C-1 去进攻 C-5 的羟基、闭合成半缩醛，而这一步让 C-1 变成了一个**新的**不对称碳——α 与 β 两种异头物就完全是这么来的。" },
  trace: [
    {
      term: "hemiacetal 半缩醛",
      what: "一个碳上同时挂着一个 -OH 和一个 -O-R，而这个碳原来就是醛基的碳。名字可以按字面读：acetal（缩醛）是反应做完了的形式，hemi- 是一半，所以 hemiacetal 是走到一半停下来的那个中间状态。关键在于它不是转瞬即逝的过渡态——它稳定得足以在水里长期存在，糖在水溶液里主要就是这个形式。",
      from: "它不是糖的专利。任何一个醛遇到任何一个醇都会生成半缩醛，这是普通有机化学里的常规反应。糖特殊的地方只有一点：那个醇不必从外面来，糖自己链上就带着羟基。所以 D-葡萄糖 C-1 的醛基直接去进攻自己 C-5 的羟基，反应发生在同一个分子内部（intramolecular）——结果不是两个分子连起来，而是自己闭成了一个环。",
      to: "这一步是整章的地基。闭环让 C-1 从一个普通的醛基碳变成一个新的不对称碳，于是同一个葡萄糖分出 α 和 β 两种 anomer（异头物）——本节后面讲的全部内容都从这里来。再往下一步，半缩醛上那个 -OH 被另一个糖的羟基取代，就成了 glycosidic bond（糖苷键），于是有了蔗糖、淀粉、纤维素。你在 7.1.3 之后见到的每一个环状糖结构，都是这一步的产物。",
      family: "酮基做同一件事叫 hemiketal（半缩酮）：果糖 C-2 的酮基进攻 C-5 羟基就是这样。按闭出来的环有多大又分两类——六元环叫 pyranose（吡喃糖，类比 pyran），五元环叫 furanose（呋喃糖，类比 furan）。半缩醛再往前走一步、那个 -OH 被醇彻底取代掉，就是 acetal（缩醛）；糖苷键属于这一类，所以糖苷键是缩醛而不是半缩醛。"
    }
  ],
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1.3",
  czTitle: "Poloacetálové formy — obr. 7.5, různá zobrazení D-glukosy",
  enTitle: "Hemiacetal forms — Obr. 7.5, multiple representations of D-glucose",
  cnTitle: "半缩醛形式——图7.5，D-葡萄糖的多种表示法",
  pages: [152],
  coverage: "full",
  coverageNote: "This node covers only the Obr. 7.5 figure block occupying the top portion of page 152 (both panel a and panel b, plus its caption), read and zoomed directly. The figure carries no accompanying explanatory paragraph of its own on this page (its content was already described in prose earlier, in node 7-1-3-1, on page 150 — the paragraph there explicitly says '(viz obr. 7.5)' when introducing the Fischer/Haworth convention). The remainder of page 152, from the '7.2 Biochemicky významné deriváty monosacharidů' heading onward, belongs to node 7-2-1.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "The four drawings on this page are one molecule, α-D-glucopyranose, not four compounds. Fischer, cyclic Fischer, Haworth and chair are four ways of drawing the same thing.", cn: "这一页上的四幅图画的是同一个分子 α-D-吡喃葡萄糖，不是四种化合物。Fischer 式、环状 Fischer 式、Haworth 式与椅式，只是同一样东西的四种画法。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.1.4",
  czTitle: "Mutarotace",
  enTitle: "Mutarotation",
  cnTitle: "变旋现象",
  pages: [151],
  coverage: "full",
  coverageNote: "Full text of '7.1.4 Mutarotace' on page 151 read directly; all three specific-rotation values (+112°, +18.4°, and the equilibrium +52.7°) individually re-verified by a zoomed crop of the relevant sentences.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Dissolve either anomer and the optical rotation drifts to one fixed value, because α and β interconvert through the open-chain form. That drift is mutarotation — something you can actually watch on a polarimeter.", cn: "把任何一种异头物溶进水里，旋光度都会漂移到同一个固定值，因为 α 与 β 经由开链形式互相转化。这个漂移就是变旋——它是你在旋光仪上真的能看到的现象。" },
  trace: [
    {
      term: "mutarotation 变旋",
      what: "把纯的 α-葡萄糖（或者纯的 β-）溶进水里，拿旋光仪一直测，会看到读数**自己慢慢往一个方向漂**，最后停在某个固定值不动了。这个漂移过程就叫变旋。",
      from: "为什么会漂？因为 α 和 β 在水里会互相转化，而转化走的路很关键：**它们不是直接翻过去的，而是先开环退回直链形式，再重新闭环**——重新闭的时候可能闭成 α，也可能闭成 β。所以你一开始放的是哪一种纯品都无所谓，泡久了都会变成同一个平衡混合物。",
      to: "**这是你在仪器上真能看见的证据**，证明前一节讲的开环闭环不是纸上推演。α 的比旋光度是 +112°，β 是 +18.4°，两者最后都漂到同一个数 +52.7°——一个现象同时验证了三件事：糖在水里确实是环状的、确实存在两种异头物、以及确实有一个开链中间体在中间当中转站。而且从这个平衡值还能反推出平衡时 α 和 β 各占多少。",
      family: "会变旋，等价于「这个糖还留着一个游离的半缩醛羟基、环还能打开」。所以变旋和还原性其实是同一件事的两种表现——后面讲还原糖时用的是同一条判据。反过来，像蔗糖那样两头都被糖苷键封死的，既不变旋也没有还原性。",
      numbers: "α-D-葡萄糖 **+112°**，β-D-葡萄糖 **+18.4°**，平衡值 **+52.7°**。"
    }
  ],
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.2.1",
  czTitle: "Cukerné estery",
  enTitle: "Sugar esters",
  cnTitle: "糖酯",
  pages: [152],
  coverage: "full",
  coverageNote: "Full text of '7.2.1 Cukerné estery' on page 152 read directly. The '7.2 Biochemicky významné deriváty monosacharidů' heading immediately above it carries no independent text of its own — 7.2.1 begins directly beneath it, the same pattern already seen for 7.1/7.1.1.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Esterifying a sugar with phosphate turns a neutral molecule into an ion, and that charge is why a phosphorylated sugar cannot drift back out through the membrane. Nearly every pathway starts by paying an ATP for exactly that.", cn: "把糖用磷酸酯化，就把一个电中性分子变成了离子，而正是这个电荷让磷酸化的糖没法再自己漂出细胞膜。几乎每条代谢途径的第一步，都在为这件事付一个 ATP。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.2.2",
  czTitle: "Cukerné kyseliny",
  enTitle: "Sugar acids",
  cnTitle: "糖酸",
  pages: [152, 153],
  coverage: "full",
  coverageNote: "Text spanning the bottom of page 152 (from 'Oxidací karbonylové skupiny aldos...' through '...Chemicky je askorbová kyselina laktonem') continuing directly onto the top of page 153 ('2-oxo-L-gulonové kyseliny...' through '...Askorbová kyselina je rozšířena převážně v rostlinách.') read as one continuous sentence/paragraph across the page break, plus Obr. 7.6 on page 153 (L-ascorbic acid and L-dehydroascorbic acid structures) verified directly.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Which carbon gets oxidised is what names the acid: the carbonyl C-1 gives an aldonic acid, the terminal C-6 gives a uronic acid, and both ends together give an aldaric acid.", cn: "被氧化的是哪个碳，决定了这个酸叫什么名字：羰基端 C-1 氧化得到醛糖酸，末端 C-6 氧化得到糖醛酸，两端都氧化则得到糖二酸。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.2.3",
  czTitle: "Cukerné alkoholy",
  enTitle: "Sugar alcohols",
  cnTitle: "糖醇",
  pages: [153],
  coverage: "full",
  coverageNote: "Full text of '7.2.3 Cukerné alkoholy' on page 153 read directly; the D-glucitol/'L-glukosy' sentence specifically re-verified with a zoomed crop to rule out an OCR/reading error on this drafting pass's own part — the scan does clearly print 'L-glukosy'. See the flagged point below: cross-checking against this SAME book's own Obr. 7.1 (node 7-1-2-1, verified separately) suggests this is very likely the book's own error for 'L-gulosy' (L-gulose), not a misreading here.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Reducing the carbonyl destroys the anomeric centre, so an alditol has no reducing end and no anomers — which is also why several different sugars reduce to the very same alditol.", cn: "把羰基还原掉就毁掉了异头中心，所以糖醇没有还原端、也没有异头物——这同时解释了为什么几种不同的糖会还原成同一个糖醇。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.2.4",
  czTitle: "Aminocukry",
  enTitle: "Amino sugars",
  cnTitle: "氨基糖",
  pages: [153],
  coverage: "full",
  coverageNote: "Full text of '7.2.4 Aminocukry' on page 153 read directly, including the three cross-references to Obr. 7.12 (a figure outside this page range, not verified here — only the running text describing it was read).",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "An amino sugar is a hydroxyl swapped for an amino group, and in cells that amino group is nearly always acetylated. These are the units structural polymers are built from — they are not fuel.", cn: "氨基糖就是把一个羟基换成氨基，而在细胞里这个氨基几乎总是被乙酰化的。它们是结构性多糖的建筑单元——不是燃料。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.2.5",
  czTitle: "Deoxycukry",
  enTitle: "Deoxy sugars",
  cnTitle: "脱氧糖",
  pages: [153],
  coverage: "full",
  coverageNote: "Full text of '7.2.5 Deoxycukry' on page 153 read directly, including the forward cross-reference to Obr. 7.12 (outside this page range, not itself verified here).",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Removing a single hydroxyl changes what the sugar is for: 2-deoxy-D-ribose is ribose minus one oxygen, and that one missing oxygen is the whole difference between RNA and DNA.", cn: "只拿掉一个羟基，糖的用途就变了：2-脱氧-D-核糖就是核糖少一个氧，而这一个缺失的氧，就是 RNA 与 DNA 之间的全部分别。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.2.6",
  czTitle: "Glykosidy",
  enTitle: "Glycosides",
  cnTitle: "糖苷",
  pages: [153, 154],
  coverage: "full",
  coverageNote: "Patched 2026-08-05 during chapter-7 reconciliation: this node originally covered only p.153 (a drafting agent's assigned range cut off mid-sentence there); p.154's continuation — the rest of the worked example, Obr. 7.7, the O-/N-glycoside distinction, aglykon, and the mammalian glucuronoside/detoxification note — has now been read directly and folded in. The '7.3 Oligosacharidy' heading that follows further down p.154 belongs to nodes 7-3-1/7-3-2, not here.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "A glycoside is the anomeric hydroxyl replaced by an alkoxy group, and that locks the ring shut. Locked shut means there is no open chain left — so a glycoside neither mutarotates nor reduces.", cn: "糖苷就是把异头羟基换成烷氧基，这一换就把环锁死了。锁死意味着不再有开链形式——所以糖苷既不变旋，也没有还原性。" },
  summary: {
    en: "Replacing a sugar's hemiacetal (poloacetálový) hydroxyl group with an alkoxy group gives a GLYCOSIDE. The book's worked example: heating D-glucose in methanol containing HCl forms two acetals — methyl-α-D-glukosid and methyl-β-D-glukosid (Obr. 7.7). The newly formed bond between C-1 of D-glucose and methanol's oxygen atom is a GLYCOSIDIC BOND generally, or more precisely an O-GLYCOSIDIC BOND; the non-sugar part of a glycoside is its AGLYKON. The anomeric carbon can equally bond to the nitrogen atom of an amine via an N-GLYCOSIDIC bond — N-glycosides include the very important RNA and DNA, where the N-glycosidic bond has β-configuration. O-glycosides are mostly found in the plant kingdom; in mammalian organs they occur mainly as GLUKURONOSIDY (O-glycosides of D-glucuronic acid), which arise as products of detoxifying foreign substances. Generalizing: the anomeric C-1 of one monosaccharide can bond via an O-glycosidic bond to a hydroxyl group of a second monosaccharide, and this is exactly how disaccharides, oligosaccharides and polysaccharides are built (forward references to ch. 7.3, 7.4).",
    cn: "用烷氧基取代糖的半缩醛羟基即可得到糖苷。教材实例：将D-葡萄糖在含HCl的甲醇中加热，生成两个缩醛——methyl-α-D-葡萄糖苷和methyl-β-D-葡萄糖苷（图7.7）。D-葡萄糖C-1与甲醇氧原子之间新形成的键，一般称为糖苷键，更准确地说是O-糖苷键；糖苷中的非糖部分称为配基（aglykon）。异头碳同样可以通过N-糖苷键与胺的氮原子成键——N-糖苷包括极为重要的RNA和DNA，其中的N-糖苷键为β构型。O-糖苷主要存在于植物界；在哺乳动物器官中，O-糖苷主要以葡萄糖醛酸苷（D-葡萄糖醛酸的O-糖苷）形式存在，是异物解毒的产物。推而广之：一个单糖的异头碳C-1可通过O-糖苷键与另一个单糖的羟基成键，二糖、寡糖和多糖正是这样构建而成的（前瞻引用第7.3、7.4节）。"
  },
  points: [
    { cz: "glykosid = poloacetálový OH nahrazen alkoxylem", en: "Replacing a sugar's hemiacetal hydroxyl group with an alkoxy group gives a GLYCOSIDE.", cn: "用烷氧基取代糖的半缩醛羟基即可得到糖苷。" },
    { cz: "D-glukosa + methanol/HCl → methyl-α/β-D-glukosid (Obr. 7.7)", en: "Worked example: heating D-glucose in methanol containing HCl forms two acetals — methyl-α-D-glukosid and methyl-β-D-glukosid, shown as the two anomeric forms in Obr. 7.7.", cn: "实例：将D-葡萄糖在含HCl的甲醇中加热，生成两个缩醛——methyl-α-D-葡萄糖苷和methyl-β-D-葡萄糖苷，即图7.7中所示的两种异头体形式。" },
    { cz: "glykosidová vazba (O-glykosidová) a aglykon", en: "The new bond between the sugar's anomeric carbon and the alkoxy oxygen is called a GLYCOSIDIC BOND, or more precisely an O-GLYCOSIDIC BOND. The non-sugar portion of a glycoside is its AGLYKON.", cn: "糖的异头碳与烷氧基氧原子之间新形成的键称为糖苷键，更准确地说是O-糖苷键。糖苷中的非糖部分称为配基（aglykon）。" },
    { cz: "N-glykosidová vazba — RNA, DNA (β-konfigurace)", en: "The anomeric carbon can also bond to the nitrogen atom of an amine, forming an N-GLYCOSIDIC bond. N-glycosides include very important substances such as RNA and DNA; the N-glycosidic bond in these naturally occurring substances has β-CONFIGURATION.", cn: "异头碳也可以与胺的氮原子成键，形成N-糖苷键。N-糖苷包括RNA和DNA等极为重要的物质；这些天然物质中的N-糖苷键为β构型。" },
    { cz: "O-glykosidy: rostliny vs. glukuronosidy u savců (detoxikace)", en: "O-glycosides are widespread mainly in the plant kingdom. In mammalian organs, O-glycosides occur mainly as GLUKURONOSIDY — O-glycosides derived from D-glucuronic acid — which arise as products of detoxifying foreign (xenobiotic) substances.", cn: "O-糖苷主要广泛存在于植物界。在哺乳动物器官中，O-糖苷主要以葡萄糖醛酸苷形式存在——即D-葡萄糖醛酸的O-糖苷，是异物（外源物质）解毒的产物。" },
    { cz: "vznik di-/oligo-/polysacharidů glykosidovou vazbou", en: "Generalizing beyond a simple alcohol like methanol: the anomeric C-1 atom of one monosaccharide can be bonded by an O-glycosidic bond to a hydroxyl group of a second monosaccharide. This is precisely how disaccharides, oligosaccharides, and polysaccharides arise (forward cross-reference to ch. 7.3 and 7.4).", cn: "将甲醇这类简单醇的情形加以推广：一个单糖的异头碳C-1可以通过O-糖苷键与另一个单糖的羟基成键。二糖、寡糖和多糖正是通过这种方式产生的（前瞻引用第7.3、7.4节）。" }
  ],
  terms: [
    { cz: "glykosid", en: "glycoside", cn: "糖苷", def_en: "A sugar derivative in which the hemiacetal (anomeric) hydroxyl group has been replaced by an alkoxy group.", def_cn: "糖的半缩醛（异头）羟基被烷氧基取代后形成的糖衍生物。" },
    { cz: "aglykon", en: "aglycone", cn: "配基（非糖部分）", def_en: "The non-sugar portion of a glycoside — whatever the sugar's anomeric carbon is bonded to.", def_cn: "糖苷中的非糖部分——即与糖的异头碳成键的那部分基团。" },
    { cz: "O-glykosidová vazba", en: "O-glycosidic bond", cn: "O-糖苷键", def_en: "A glycosidic bond formed through an oxygen atom, linking a sugar's anomeric carbon to an -OH-bearing group (an alcohol or another sugar's hydroxyl).", def_cn: "通过氧原子形成的糖苷键，将糖的异头碳与含羟基的基团（醇或另一个糖的羟基）相连。" },
    { cz: "N-glykosidová vazba", en: "N-glycosidic bond", cn: "N-糖苷键", def_en: "A glycosidic bond formed through a nitrogen atom (of an amine), linking a sugar's anomeric carbon to it; found in nucleic acids (RNA, DNA) with β-configuration.", def_cn: "通过胺的氮原子形成的糖苷键，将糖的异头碳与其相连；存在于核酸（RNA、DNA）中，构型为β型。" },
    { cz: "glukuronosid", en: "glucuronoside", cn: "葡萄糖醛酸苷", def_en: "An O-glycoside of D-glucuronic acid; the main form of O-glycosides in mammalian organs, typically formed to detoxify foreign substances.", def_cn: "D-葡萄糖醛酸的O-糖苷；是哺乳动物器官中O-糖苷的主要存在形式，通常作为异物解毒的产物生成。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The N-glycosidic bonds found in RNA and DNA have which configuration?",
      q_cn: "RNA和DNA中的N-糖苷键属于哪种构型？",
      options: ["α", "β", "Neither — it is not a stereocenter", "It varies randomly by nucleotide"],
      answer: 1,
      why_en: "The book states explicitly that the N-glycosidic bond in these naturally occurring substances (RNA, DNA) has β-configuration.",
      why_cn: "教材明确指出，这些天然物质（RNA、DNA）中的N-糖苷键为β构型。"
    },
    {
      type: "short",
      q_en: "What is a glucuronoside, and why is this class of O-glycoside particularly important in mammals?",
      q_cn: "什么是葡萄糖醛酸苷？这类O-糖苷在哺乳动物体内为何尤为重要？",
      accept: ["glucuronic acid", "detox", "xenobiotic", "葡萄糖醛酸", "解毒", "异物"],
      answer_en: "A glucuronoside is an O-glycoside of D-glucuronic acid. In mammalian organs it is the main form O-glycosides take, arising as a product of detoxifying foreign (xenobiotic) substances.",
      answer_cn: "葡萄糖醛酸苷是D-葡萄糖醛酸的O-糖苷。它是哺乳动物器官中O-糖苷的主要存在形式，是异物（外源物质）解毒作用的产物。"
    }
  ],
  oral: {
    q_en: "Define a glycoside, distinguish O- and N-glycosidic bonds with a biological example of each, and explain how this concept generalizes to the formation of di-, oligo-, and polysaccharides.",
    q_cn: "请定义糖苷，区分O-糖苷键与N-糖苷键并各举一个生物学实例，并说明该概念如何推广至二糖、寡糖和多糖的形成。",
    model_en: "A glycoside is what results when a sugar's hemiacetal hydroxyl group is replaced by an alkoxy group. The book's own worked example makes this concrete: heating D-glucose in methanol containing HCl produces two acetals, methyl-alpha-D-glucoside and methyl-beta-D-glucoside, differing only in the configuration at the anomeric carbon. The new bond formed between the sugar's anomeric carbon and the oxygen it's now attached to is called a glycosidic bond, or more precisely an O-glycosidic bond, since it runs through an oxygen atom; whatever non-sugar group sits on the other end of that bond is called the aglycone. But the anomeric carbon doesn't have to bond through oxygen — it can instead bond to the nitrogen atom of an amine, forming an N-glycosidic bond, and this is exactly the linkage you find in RNA and DNA, where it consistently has beta-configuration. O-glycosides themselves are mostly a plant-kingdom phenomenon, but mammalian organs do produce them, chiefly as glucuronosides — O-glycosides of D-glucuronic acid — generated as products of detoxifying foreign substances. The concept then generalizes beyond simple alcohols like methanol: instead of methanol's single hydroxyl, the anomeric carbon of one monosaccharide can bond via an O-glycosidic bond to a hydroxyl group belonging to a second monosaccharide, and chaining this up repeatedly is precisely the mechanism by which disaccharides, oligosaccharides, and polysaccharides are all built.",
    checklist: [
      "Defined glycoside as hemiacetal-OH replaced by alkoxy",
      "Gave the D-glucose + methanol/HCl worked example producing methyl-alpha/beta-D-glucoside",
      "Distinguished O-glycosidic (through oxygen) from N-glycosidic (through nitrogen) bonds",
      "Named RNA/DNA as the N-glycoside example, with beta-configuration",
      "Named glucuronosides as the main mammalian O-glycoside, tied to detoxification",
      "Generalized to disaccharide/oligosaccharide/polysaccharide formation via O-glycosidic bonds between monosaccharides"
    ]
  }
},

{
  id: "7-3-1",
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.3",
  czTitle: "Oligosacharidy — definice a neredukující oligosacharidy",
  enTitle: "Oligosaccharides — definitions and non-reducing oligosaccharides",
  cnTitle: "寡糖——定义与非还原性寡糖",
  pages: [154, 155],
  coverage: "full",
  coverageNote: "Bottom half of p.154, from the '7.3 Oligosacharidy' heading through the end of the sacharosa entry (including its structural diagram), plus the top of p.155 through the trehalosa and raffinosa entries, read in full and verified against the scans. The material ABOVE the 7.3 heading on p.154 (glykosidová vazba / O-glykosid vs N-glykosid / aglykon, methyl-alpha/beta-D-glukopyranosid and Obr. 7.7) is a continuation of section 7.2, outside this node's assigned range (7.3-7.6.3) — not drafted here; flagged in the drafting report for reconciliation with whichever node covers p.153/§7.2. The 'b) redukující oligosacharidy' subheading and its four entries later on p.155 belong to node 7-3-2.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Whether a disaccharide reduces comes down to one question: is a free anomeric carbon left? Join two sugars anomeric-to-anomeric and both are used up, so the product is non-reducing — sucrose is that case.", cn: "一个二糖有没有还原性，只取决于一个问题：还剩不剩一个游离的异头碳？若两个糖是异头碳对异头碳连起来的，两个都被用掉了，产物就没有还原性——蔗糖正是这种情况。" },
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
  book: "cz",
  topicKey: "monosaccharides",
  chapter: 7,
  section: "7.3",
  czTitle: "Oligosacharidy — redukující oligosacharidy",
  enTitle: "Oligosaccharides — reducing oligosaccharides",
  cnTitle: "寡糖——还原性寡糖",
  pages: [155],
  coverage: "full",
  coverageNote: "The 'b) redukující oligosacharidy' subsection of p.155 read in full and verified against the scan: cellobiosa, maltosa (with its structural diagram, labelled '1' and '4' ring positions), isomaltosa, and laktosa (with its own structural diagram). The preceding 'a) neredukující oligosacharidy' subsection (sacharosa, trehalosa, raffinosa) belongs to node 7-3-1; the '7.4 Polysacharidy' heading that follows laktosa further down the same page belongs to node 7-4.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "All four keep one free hemiacetal hydroxyl, so they still open, still mutarotate and still reduce. Maltose is the α(1→4) repeat of starch and cellobiose the β(1→4) repeat of cellulose — the same two glucoses, a different bond, a completely different fate.", cn: "这四个都还留着一个游离的半缩醛羟基，所以它们仍然能开环、仍然变旋、仍然有还原性。麦芽糖是淀粉的 α(1→4) 重复单元，纤维二糖是纤维素的 β(1→4) 重复单元——同样是两个葡萄糖，键不同，命运完全不同。" },
  trace: [
    {
      term: "reducing sugar 还原糖",
      what: "这个名字第一次看总让人犯迷糊：是糖自己被还原了吗？**不是——它是还原剂，是它去还原别人**，自己反而被氧化。判据只有一条：分子里还留着一个**游离的半缩醛羟基**。",
      from: "为什么这一条就说了算？回到半缩醛那张卡：糖在水里是闭成环的半缩醛。只要那个半缩醛羟基还空着、没被别人占用，**环就随时能打开**，露出里面的醛基。而醛基是个现成的还原剂，碰上 Fehling、Tollens 这类试剂就把对方还原了。所以「有没有还原性」这个问题，翻译过来就是「**环还能不能打开**」——同一件事，两种问法。",
      to: "于是判断一个双糖有没有还原性，只要看**两个糖是怎么牵手的**：如果那个糖苷键正好把双方的半缩醛羟基都用掉了（蔗糖就是这样），两头封死、环打不开，就既不还原也不变旋；只要还剩一个空着，它就照样还原、照样变旋。教材这一节列的麦芽糖、纤维二糖、异麦芽糖、乳糖，全属于后者。",
      family: "这里有个对照特别值得记，因为它把「结构决定命运」讲得极干脆：**麦芽糖和纤维二糖都是「两个葡萄糖」，差别只在一个键的构型**——麦芽糖是 α(1→4)，是淀粉的重复单元；纤维二糖是 β(1→4)，是纤维素的重复单元。同样的原料，键一翻，一个是你的饭，一个你消化不了。乳糖则是半乳糖 β(1→4) 接葡萄糖，是所有哺乳动物乳汁里最重要的糖。"
    }
  ],
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
},

{
  id: "7-4",
  book: "cz",
  topicKey: "polysaccharides",
  chapter: 7,
  section: "7.4",
  czTitle: "Polysacharidy",
  enTitle: "Polysaccharides",
  cnTitle: "多糖",
  pages: [155],
  coverage: "full",
  coverageNote: "The bottom portion of page 155, starting exactly at the '7.4 Polysacharidy' heading (the material above it on the same page -- trehalosa, raffinosa, and the 'b) redukující oligosacharidy' list of cellobiosa/maltosa/isomaltosa/laktosa -- belongs to nodes 7-3-1/7-3-2, per node 7-3-2's own coverageNote, and is NOT re-covered here), read in full through the polysaccharide-hydrolysis paragraph, the monosaccharide-unit/derivative lists, and the homoglykany/heteroglykany plus storage/structural classification. Stops right before the '7.4.1 Homopolysacharidy' heading at the top of page 156, which belongs to node 7-4-1-1.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Most carbohydrate in nature is not free sugar but polysaccharide, and hydrolysing almost any of it gives back D-glucose. The monomer is nearly always the same; what differs is how it is joined.", cn: "自然界中的糖类大多不是游离的糖，而是多糖；而把它们水解开来，得到的几乎都是 D-葡萄糖。**单体几乎总是同一个，不同的是怎么连起来的。**" },
  summary: {
    en: "Section 7.4 opens by noting that most carbohydrates found in nature occur as POLYSACCHARIDES of high relative molecular weight. Complete hydrolysis of these polysaccharides -- whether acid- or enzyme-catalyzed -- yields monosaccharides or their simple derivatives. D-GLUCOSE is by far the most common monosaccharide unit of polysaccharides, but polysaccharides built from D-mannose, D- AND L-galactose, D-xylose, and D-arabinose units also occur commonly in nature (the book explicitly names both the D- and the L- series of galactose here, not just D-galactose). Among the monosaccharide DERIVATIVES recovered after hydrolysis of polysaccharides, the book names D-glucosamine, D-galactosamine, and uronic acids. Polysaccharides, also called GLYKANY (glycans), differ from one another in the identity of their monosaccharide residue, in chain length, and in degree of branching. The book divides polysaccharides structurally into: (a) HOMOGLYKANY (homoglycans), containing only ONE type of monosaccharide unit, and (b) HETEROGLYKANY (heteroglycans), containing TWO OR MORE types of monosaccharide unit. Homoglycans are often named directly after their monosaccharide residue -- e.g. those built from D-glucose are called GLUKANY (glucans), those built from D-mannose are called MANNANY (mannans). A second, independent way to classify polysaccharides is by their FUNCTION in the organism, e.g. as storage ('zásobní') or structural ('strukturní') -- the classification the very next subsection, 7.4.1, actually uses to organize its material.",
    cn: "7.4节开篇指出，自然界中发现的大多数糖类都以相对分子质量很高的多糖形式存在。这些多糖经过完全水解——无论是酸催化还是酶催化——都会生成单糖或其简单衍生物。D-葡萄糖是迄今为止多糖中最常见的单糖单位，但自然界中也常见由D-甘露糖、D-及L-半乳糖、D-木糖和D-阿拉伯糖单位构成的多糖（教材在此明确同时提到D系和L系半乳糖，而不仅仅是D-半乳糖）。在多糖水解后发现的单糖衍生物中，教材列出了D-葡萄糖胺、D-半乳糖胺和糖醛酸。多糖，也称为糖苷聚糖（glykany），彼此之间在单糖残基种类、链长和分支程度上有所不同。教材从结构上将多糖分为：(a) 同多糖（homoglykany）——只含一种单糖单位；(b) 杂多糖（heteroglykany）——含两种或以上单糖单位。同多糖常按其单糖残基种类命名——例如由D-葡萄糖构成的称为葡聚糖（glukany），由D-甘露糖构成的称为甘露聚糖（mannany）。对多糖进行分类的另一种独立方式是按其在生物体内的功能划分，如储存性或结构性——这正是紧接着的7.4.1小节用来组织其内容的分类方式。"
  },
  points: [
    { cz: "polysacharid = vysoká rel. mol. hmotnost", en: "Most naturally occurring carbohydrates exist as POLYSACCHARIDES of high relative molecular weight. Complete hydrolysis -- whether acid-catalyzed or enzyme-catalyzed -- yields monosaccharides or their simple derivatives.", cn: "自然界中大多数糖类都以相对分子质量很高的多糖形式存在。完全水解——无论是酸催化还是酶催化——都会生成单糖或其简单衍生物。" },
    { cz: "D-glukosa = nejčastější jednotka; i D-mannosa, D-/L-galaktosa, D-xylosa, D-arabinosa", en: "D-glucose is by far the most common monosaccharide unit of polysaccharides, but polysaccharides built from D-mannose, D- AND L-galactose, D-xylose, and D-arabinose units also occur commonly in nature.", cn: "D-葡萄糖是多糖中迄今最常见的单糖单位，但自然界中也常见由D-甘露糖、D-及L-半乳糖、D-木糖、D-阿拉伯糖构成的多糖。" },
    { cz: "deriváty po hydrolýze: D-glukosamin, D-galaktosamin, uronové kyseliny", en: "Among the monosaccharide DERIVATIVES recovered after hydrolysis of polysaccharides, the book names D-glucosamine, D-galactosamine, and uronic acids.", cn: "在多糖水解后得到的单糖衍生物中，教材列出了D-葡萄糖胺、D-半乳糖胺和糖醛酸。" },
    { cz: "glykany = polysacharidy; liší se zbytkem, délkou, větvením", en: "Polysaccharides, also called GLYKANY (glycans), differ from one another in the identity of their monosaccharide residue, in chain length, and in degree of branching.", cn: "多糖也称为糖苷聚糖（glykany），彼此在单糖残基种类、链长和分支程度上有所不同。" },
    { cz: "a) homoglykany vs b) heteroglykany", en: "Structural classification: (a) HOMOGLYKANY contain only ONE type of monosaccharide unit; (b) HETEROGLYKANY contain TWO OR MORE types of monosaccharide unit.", cn: "结构分类：(a) 同多糖仅含一种单糖单位；(b) 杂多糖含两种或以上单糖单位。" },
    { cz: "pojmenování dle monosacharidu: glukany, mannany", en: "Homoglycans are often named directly after their monosaccharide residue -- e.g. those built from D-glucose are GLUKANY (glucans), those built from D-mannose are MANNANY (mannans).", cn: "同多糖常按其单糖残基种类命名——如由D-葡萄糖构成的称为葡聚糖，由D-甘露糖构成的称为甘露聚糖。" },
    { cz: "další dělení: zásobní vs strukturní", en: "A second, independent classification divides polysaccharides by FUNCTION in the organism, e.g. storage ('zásobní') or structural ('strukturní') -- the scheme subsection 7.4.1 uses next.", cn: "另一种独立的分类方式是按生物体内的功能划分，如储存性或结构性——这正是下一小节7.4.1所采用的分类方式。" }
  ],
  terms: [
    { cz: "polysacharid (glykan)", en: "polysaccharide (glycan)", cn: "多糖（糖苷聚糖）", def_en: "A high-molecular-weight carbohydrate polymer that yields monosaccharides or their derivatives on complete hydrolysis.", def_cn: "一种高分子量的糖类聚合物，完全水解后生成单糖或其衍生物。" },
    { cz: "homoglykan", en: "homoglycan", cn: "同多糖", def_en: "A polysaccharide containing only one type of monosaccharide unit, e.g. a glucan (D-glucose) or a mannan (D-mannose).", def_cn: "只含一种单糖单位的多糖，如葡聚糖（D-葡萄糖）或甘露聚糖（D-甘露糖）。" },
    { cz: "heteroglykan", en: "heteroglycan", cn: "杂多糖", def_en: "A polysaccharide containing two or more types of monosaccharide unit (or their derivatives).", def_cn: "含两种或以上单糖单位（或其衍生物）的多糖。" },
    { cz: "D-glukosamin / D-galaktosamin", en: "D-glucosamine / D-galactosamine", cn: "D-葡萄糖胺／D-半乳糖胺", def_en: "Amino-sugar derivatives of D-glucose/D-galactose recovered after hydrolysis of certain polysaccharides.", def_cn: "D-葡萄糖／D-半乳糖的氨基糖衍生物，见于某些多糖水解产物中。" },
    { cz: "uronová kyselina", en: "uronic acid", cn: "糖醛酸", def_en: "A sugar-acid derivative (carboxylic acid at C-6 of a hexose) recovered after hydrolysis of certain polysaccharides.", def_cn: "己糖C-6被氧化为羧基而成的糖酸衍生物，见于某些多糖水解产物中。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's structural classification of polysaccharides, what distinguishes a homoglycan from a heteroglycan?",
      q_cn: "根据教材对多糖的结构分类，同多糖与杂多糖的区别是什么？",
      options: [
        "A homoglycan contains only one type of monosaccharide unit; a heteroglycan contains two or more types",
        "A homoglycan is always a storage polysaccharide; a heteroglycan is always structural",
        "A homoglycan contains only D-glucose; a heteroglycan contains only D-mannose",
        "A homoglycan is unbranched; a heteroglycan is always branched"
      ],
      answer: 0,
      why_en: "The book defines homoglycans as containing only one type of monosaccharide unit and heteroglycans as containing two or more types. Function (storage/structural) is an entirely separate, independent classification; the other options misstate or over-narrow the definition.",
      why_cn: "教材将同多糖定义为只含一种单糖单位，杂多糖含两种或以上单糖单位。功能分类（储存/结构）是完全独立的另一套标准；其余选项都错误地缩窄或混淆了定义。"
    },
    {
      type: "mcq",
      q_en: "Besides D-glucose, which monosaccharide series does the book explicitly name TWICE (both stereochemical forms) as occurring in natural polysaccharide units?",
      q_cn: "除D-葡萄糖外，教材明确提到哪种单糖会以两种立体化学形式（两个系列）同时出现在天然多糖单位中？",
      options: ["D- and L-galactose", "D- and L-mannose", "D- and L-xylose", "D- and L-glucosamine"],
      answer: 0,
      why_en: "The book lists 'D-mannosy, D- a L-galaktosy, D-xylosy a D-arabinosy' as common polysaccharide monosaccharide units -- galactose is the one named in both its D- and L- forms; mannose, xylose, and arabinose are each named only once (implicitly D-, per the book's own text).",
      why_cn: "教材列出的常见多糖单糖单位为「D-甘露糖、D-及L-半乳糖、D-木糖和D-阿拉伯糖」——半乳糖是唯一同时以D系和L系两种形式被提及的；甘露糖、木糖和阿拉伯糖在教材原文中都只提到一次（隐含为D系）。"
    },
    {
      type: "short",
      q_en: "Name the two independent ways the book classifies polysaccharides, and give one example of each classification's naming convention.",
      q_cn: "教材对多糖采用哪两种独立的分类方式？请各举一个命名示例。",
      accept: ["homoglycan", "heteroglycan", "storage", "structural", "glucan", "mannan", "同多糖", "杂多糖", "储存", "结构", "葡聚糖", "甘露聚糖"],
      answer_en: "(1) Structural: homoglycan (one monosaccharide type, e.g. a glucan or a mannan) vs. heteroglycan (two or more types). (2) Functional: storage ('zásobní') vs. structural ('strukturní') polysaccharides, the scheme used by the next subsection.",
      answer_cn: "(1) 结构分类：同多糖（一种单糖单位，如葡聚糖或甘露聚糖）与杂多糖（两种以上单位）。(2) 功能分类：储存性与结构性多糖，即下一小节采用的分类方式。"
    }
  ],
  oral: {
    q_en: "Explain how section 7.4 introduces polysaccharides: their hydrolysis products, common monosaccharide units, and the two classification schemes the book applies to them.",
    q_cn: "请解释7.4节如何引入多糖概念：其水解产物、常见单糖单位，以及教材对多糖采用的两种分类方式。",
    model_en: "Section 7.4 starts by pointing out that most carbohydrates actually found in nature aren't free monosaccharides or small oligosaccharides at all -- they're polysaccharides of high relative molecular weight, and hydrolyzing them completely, whether with acid or with enzymes, breaks them back down into monosaccharides or simple derivatives of monosaccharides. D-glucose is overwhelmingly the most common building block, but the book is careful to note that polysaccharides built from D-mannose, from both D- and L-galactose, from D-xylose, and from D-arabinose also occur commonly in nature. Among the derivatives you can recover from hydrolyzing polysaccharides, the book names D-glucosamine, D-galactosamine, and the uronic acids. These polysaccharides are also called glycans, and what distinguishes one from another is the identity of its monosaccharide residue, how long its chain is, and how branched it is. The book gives two independent ways to sort them. Structurally, a homoglycan contains only one type of monosaccharide unit, while a heteroglycan contains two or more; homoglycans usually get named straight after their residue, so a glucan is built from D-glucose and a mannan from D-mannose. But you can equally classify polysaccharides by what they actually do in the organism -- storage versus structural -- and that second scheme is exactly what the next subsection, 7.4.1, uses to organize the specific examples that follow.",
    checklist: [
      "Stated that most natural carbohydrates occur as high-MW polysaccharides, hydrolyzing to monosaccharides/derivatives",
      "Named D-glucose as the dominant unit, plus D-mannose, D-/L-galactose, D-xylose, D-arabinose",
      "Named the hydrolysis derivatives: D-glucosamine, D-galactosamine, uronic acids",
      "Defined homoglycan (one unit type) vs heteroglycan (two or more types)",
      "Gave the glucan/mannan naming convention",
      "Named the second, functional classification (storage vs structural) as the scheme 7.4.1 uses"
    ]
  }
},

{
  id: "7-4-1-1",
  book: "cz",
  topicKey: "polysaccharides",
  chapter: 7,
  section: "7.4.1",
  czTitle: "Homopolysacharidy -- A. Zásobní polysacharidy (škrob, glykogen, dextrany, inulin, mannany)",
  enTitle: "Homopolysaccharides -- A. Storage polysaccharides (starch, glycogen, dextrans, inulin, mannans)",
  cnTitle: "同多糖——A. 储存多糖（淀粉、糖原、右旋糖酐、菊粉、甘露聚糖）",
  pages: [156, 157],
  coverage: "full",
  coverageNote: "Page 156 read in full (the 'A. Zásobní polysacharidy' heading; Škrob/starch with its amylosa and amylopektin entries and Obr. 7.8's glycogen branch-point figure, which the amylopectin entry explicitly cross-references for its own branching pattern; Glykogen; Dextrany; Inulin) plus the 'Mannany' entry at the very top of page 157, read directly and verified against the scans. Note on placement: Mannany appears immediately before the 'B. Strukturní polysacharidy' heading with no additional lettered sub-marker of its own -- following the book's own physical placement (subsection A is never explicitly re-opened or closed in the running text), it is treated here as the final entry under 'A. Zásobní polysacharidy', though biologically mannans (e.g. yeast cell-wall mannan) are not purely an energy-reserve polysaccharide the way starch/glycogen are -- flagged here rather than silently resolved. The 'B. Strukturní polysacharidy' heading and everything after it on page 157 belongs to node 7-4-1-2.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Storage polysaccharides are α(1→4) chains with α(1→6) branch points, and the branching is the point: every branch is another free end, so the store can be mobilised from many places at once instead of unzipped from one.", cn: "储存多糖是 α(1→4) 的链加上 α(1→6) 的分支点，而**分支本身就是关键**：每一个分支都是又一个游离末端，所以这份储备可以同时从很多处动员，而不是从一头慢慢拆。" },
  summary: {
    en: "ŠKROB (starch) is the storage polysaccharide of plants, built of D-glucose units, and contains two types of glucan. (a) AMYLOSA (amylose): long, UNBRANCHED chains in which D-glucose residues are joined by α(1→4) bonds; the chain is polydisperse, ranging in relative molecular weight from a few thousand up to 500,000; in water it forms hydrated micelles that give a BLUE color with iodine, and within these micelles the polysaccharide chain coils into a HELIX. (b) AMYLOPEKTIN (amylopectin): its molecule IS branched (unlike amylose) -- a main chain of α(1→4) bonds carries side chains attached by α(1→6) bonds, analogous to glycogen (Obr. 7.8); the side branches are approximately 12 D-glucose residues long, and branching occurs roughly every 12th D-glucose residue; amylopectin also forms micelles in solution, but these give a RED-VIOLET color with iodine; relative molecular weight can reach up to 1,000,000. GLYKOGEN (glycogen) is the animal storage polysaccharide, stored chiefly in the liver and in muscle; its structure resembles amylopectin's, but glycogen is MUCH MORE branched -- branching occurs roughly every 8th-10th D-glucose residue (vs. every 12th in amylopectin). Glycogen's relative molecular weight is very high: muscle glycogen is around 1,000,000, liver glycogen around 16 MILLION -- yet glycogens remain water-soluble, and their molecules take the shape of a flattened ellipsoid. DEXTRANY (dextrans) are storage polysaccharides of yeasts and bacteria, likewise built of D-glucose units, but predominantly joined by α(1→6) bonds; they can be exceptionally branched, with branch points at (1→2), (1→3), or (1→4) depending on origin. INULIN is a plant polysaccharide built of D-fructose units joined by β(2→1) bonds; the inulin chain is terminated by a D-glucose residue, i.e. effectively by a sucrose unit. MANNANY (mannans) are homopolysaccharides built of D-mannose units, found in yeasts, bacteria, and plants.",
    cn: "淀粉（Škrob）是植物的储存多糖，由D-葡萄糖单位构成，含有两种葡聚糖类型。(a) 直链淀粉（amylosa）：由D-葡萄糖残基以α(1→4)键连接而成的长而不分支的链；链长具有多分散性，相对分子质量从几千到50万不等；在水中形成水合胶束，遇碘呈蓝色，在这些胶束中多糖链盘绕成螺旋形。(b) 支链淀粉（amylopektin）：其分子是有分支的（这与直链淀粉不同）——主链由α(1→4)键构成，侧链通过α(1→6)键连接，与糖原的连接方式类似（见图7.8）；侧支约12个D-葡萄糖残基长，大约每12个D-葡萄糖残基就出现一个分支点；支链淀粉在溶液中也形成胶束，但遇碘呈红紫色；相对分子质量可高达100万。糖原（Glykogen）是动物的储存多糖，主要储存于肝脏和肌肉中；其结构与支链淀粉相似，但糖原的分支程度要高得多——大约每8到10个D-葡萄糖残基就出现一个分支点（而支链淀粉是每12个）。糖原的相对分子质量非常高：肌糖原约为100万，肝糖原约为1600万——但糖原仍能溶于水；其分子呈扁平的椭球形。右旋糖酐（Dextrany）是酵母和细菌的储存多糖，同样由D-葡萄糖单位构成，但主要以α(1→6)键连接；它们可以异常分支，根据来源不同，分支点可位于(1→2)、(1→3)或(1→4)位。菊粉（Inulin）是植物多糖，由D-果糖单位以β(2→1)键连接而成；菊粉链末端为一个D-葡萄糖残基，即实际上以一个蔗糖单位收尾。甘露聚糖（Mannany）是由D-甘露糖单位构成的同多糖，见于酵母、细菌和植物中。"
  },
  points: [
    { cz: "škrob = zásobní polysacharid rostlin, 2 typy glukanů", en: "ŠKROB (starch) is the storage polysaccharide of plants, built of D-glucose units, containing two types of glucan: amylosa and amylopektin.", cn: "淀粉是植物的储存多糖，由D-葡萄糖单位构成，含两种葡聚糖：直链淀粉和支链淀粉。" },
    { cz: "amylosa = nerozvětvená, α(1→4), MW do 500 000, jod → modrá, šroubovice", en: "AMYLOSA: long, unbranched α(1→4)-linked D-glucose chains, polydisperse (MW from a few thousand up to 500,000); forms hydrated micelles in water that give a BLUE color with iodine, with the chain coiled into a HELIX inside the micelle.", cn: "直链淀粉：长而不分支的α(1→4)键D-葡萄糖链，具多分散性（相对分子质量从几千到50万）；在水中形成水合胶束，遇碘呈蓝色，链在胶束内盘绕成螺旋形。" },
    { cz: "amylopektin = větvený, α(1→4)+α(1→6), větve ~12 zbytků, MW až 1 000 000, jod → červeno-fialová", en: "AMYLOPEKTIN: branched (unlike amylose) -- α(1→4) main chain with α(1→6)-linked side branches (analogous to glycogen, Obr. 7.8); branches ~12 D-glucose residues long, branching roughly every 12th residue; gives a RED-VIOLET color with iodine; MW up to 1,000,000.", cn: "支链淀粉：与直链淀粉不同，是有分支的——主链为α(1→4)键，侧链以α(1→6)键连接（与糖原类似，见图7.8）；侧支约12个D-葡萄糖残基长，约每12个残基出现一个分支点；遇碘呈红紫色；相对分子质量可达100万。" },
    { cz: "glykogen = živočišný, játra/svaly, větvení každý 8.-10. zbytek, MW: sval ~10^6, játra ~16×10^6", en: "GLYKOGEN: the animal storage polysaccharide, stored chiefly in liver and muscle; structurally resembles amylopectin but is MUCH MORE branched (roughly every 8th-10th residue vs. every 12th). MW very high: muscle glycogen ~1,000,000, liver glycogen ~16 MILLION; still water-soluble, molecules shaped like a flattened ellipsoid.", cn: "糖原：动物的储存多糖，主要储存于肝脏和肌肉；结构上与支链淀粉相似，但分支程度高得多（约每8到10个残基一个分支，支链淀粉则约每12个）。相对分子质量很高：肌糖原约100万，肝糖原约1600万；但仍溶于水，分子呈扁平椭球形。" },
    { cz: "dextrany = kvasinky/bakterie, převážně α(1→6), větvení (1→2)/(1→3)/(1→4)", en: "DEXTRANY: storage polysaccharides of yeasts and bacteria, D-glucose units predominantly joined by α(1→6) bonds; can be exceptionally branched, with branch points at (1→2), (1→3), or (1→4) depending on origin.", cn: "右旋糖酐：酵母和细菌的储存多糖，D-葡萄糖单位主要以α(1→6)键连接；可高度分支，分支点位置(1→2)、(1→3)或(1→4)因来源而异。" },
    { cz: "inulin = D-fruktosa, β(2→1), zakončen D-glukosou/sacharosou", en: "INULIN: a plant polysaccharide of D-fructose units joined by β(2→1) bonds; the chain is terminated by a D-glucose residue, i.e. effectively by a sucrose unit.", cn: "菊粉：植物多糖，由D-果糖单位以β(2→1)键连接而成；链末端为一个D-葡萄糖残基，即以一个蔗糖单位收尾。" },
    { cz: "mannany = D-mannosa; kvasinky, bakterie, rostliny", en: "MANNANY: homopolysaccharides built of D-mannose units, found in yeasts, bacteria, and plants -- the book's last entry before the 'B. Strukturní polysacharidy' heading (see this node's coverageNote on its placement).", cn: "甘露聚糖：由D-甘露糖单位构成的同多糖，见于酵母、细菌和植物——是教材在「B. 结构多糖」标题之前的最后一条（关于其归类位置见本节点coverageNote）。" }
  ],
  terms: [
    { cz: "amylosa", en: "amylose", cn: "直链淀粉", def_en: "The unbranched α(1→4)-linked component of starch; forms helical hydrated micelles giving a blue color with iodine.", def_cn: "淀粉中不分支的α(1→4)键组分；形成螺旋形水合胶束，遇碘呈蓝色。" },
    { cz: "amylopektin", en: "amylopectin", cn: "支链淀粉", def_en: "The branched component of starch, with α(1→4) main chains and α(1→6) branch points roughly every 12th residue; gives a red-violet color with iodine.", def_cn: "淀粉中有分支的组分，主链为α(1→4)键，约每12个残基有一个α(1→6)分支点；遇碘呈红紫色。" },
    { cz: "glykogen", en: "glycogen", cn: "糖原", def_en: "The animal storage polysaccharide, structurally resembling amylopectin but much more heavily branched (every 8th-10th residue); stored mainly in liver and muscle.", def_cn: "动物的储存多糖，结构上类似支链淀粉但分支更密集（每8-10个残基一个分支）；主要储存于肝脏和肌肉。" },
    { cz: "dextran", en: "dextran", cn: "右旋糖酐", def_en: "A storage glucan of yeasts and bacteria, predominantly α(1→6)-linked, with variable branch positions depending on the producing organism.", def_cn: "酵母和细菌的储存性葡聚糖，主要以α(1→6)键连接，分支位置因产生菌不同而异。" },
    { cz: "inulin", en: "inulin", cn: "菊粉", def_en: "A plant fructan (D-fructose polymer, β(2→1)-linked), chain-terminated by a glucose/sucrose unit.", def_cn: "植物果聚糖（D-果糖聚合物，β(2→1)键连接），链末端为葡萄糖/蔗糖单位。" },
    { cz: "mannan", en: "mannan", cn: "甘露聚糖", def_en: "A homopolysaccharide built of D-mannose units, found in yeasts, bacteria, and plants.", def_cn: "由D-甘露糖单位构成的同多糖，见于酵母、细菌和植物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How does the branching frequency of glycogen compare to that of amylopectin, per the book?",
      q_cn: "根据教材，糖原与支链淀粉的分支频率相比如何？",
      options: [
        "Glycogen branches much more often (every 8th-10th residue) than amylopectin (every 12th)",
        "Glycogen branches less often than amylopectin",
        "Both branch at exactly the same frequency",
        "Neither glycogen nor amylopectin is branched"
      ],
      answer: 0,
      why_en: "The book states glycogen's structure resembles amylopectin's but is much more branched, with branch points roughly every 8th-10th D-glucose residue, versus roughly every 12th residue in amylopectin.",
      why_cn: "教材指出，糖原的结构与支链淀粉相似，但分支程度高得多，约每8到10个D-葡萄糖残基出现一个分支点，而支链淀粉约每12个残基才有一个。"
    },
    {
      type: "mcq",
      q_en: "What color does amylopectin give with iodine, and how does this distinguish it from amylose in the book's description?",
      q_cn: "支链淀粉与碘反应呈什么颜色？这与教材描述中的直链淀粉有何区别？",
      options: [
        "Amylopectin gives red-violet; amylose gives blue",
        "Amylopectin gives blue; amylose gives red-violet",
        "Both give the same blue color",
        "Neither reacts with iodine"
      ],
      answer: 0,
      why_en: "The book states amylose's hydrated micelles give a blue color with iodine, while amylopectin's micelles give a red-violet color -- a direct, book-stated distinguishing test between the two starch components.",
      why_cn: "教材指出，直链淀粉的水合胶束遇碘呈蓝色，而支链淀粉的胶束遇碘呈红紫色——这是教材给出的区分这两种淀粉组分的直接方法。"
    },
    {
      type: "short",
      q_en: "Describe the two types of glycosidic bond shown in Obr. 7.8's glycogen branch point, and state which of the two also appears in amylopectin's structure.",
      q_cn: "描述图7.8中糖原分支点所示的两种糖苷键类型，并说明哪一种也出现在支链淀粉的结构中。",
      accept: ["alpha-1,4", "alpha-1,6", "α-1,4", "α-1,6", "main chain", "branch", "主链", "分支"],
      answer_en: "Obr. 7.8 shows an α(1→4) bond running along the main chain and an α(1→6) bond at the branch point. Both bond types also appear in amylopectin's structure, which the book explicitly describes as branching 'obdobně jako v případě glykogenu' (analogously to glycogen).",
      answer_cn: "图7.8显示主链上为α(1→4)键，分支点为α(1→6)键。这两种键在支链淀粉的结构中同样存在，教材明确指出支链淀粉的分支方式「与糖原类似」。"
    }
  ],
  oral: {
    q_en: "Describe the book's five storage homopolysaccharides -- starch (amylose/amylopectin), glycogen, dextrans, inulin, and mannans -- including their monosaccharide units, bond types, and any distinguishing numbers the book gives.",
    q_cn: "请描述教材中五种储存性同多糖——淀粉（直链/支链）、糖原、右旋糖酐、菊粉和甘露聚糖——包括其单糖单位、键型以及教材给出的区分性数据。",
    model_en: "Starch is the plant storage polysaccharide, built entirely of D-glucose units, and it actually contains two distinct glucans. Amylose is the simpler one: long, unbranched chains held together by alpha-1,4 bonds, polydisperse in molecular weight from a few thousand up to 500,000, and in water it forms hydrated micelles where the chain coils into a helix -- that helix is exactly why amylose gives the classic blue color with iodine. Amylopectin, in contrast, is branched: it has an alpha-1,4 main chain with alpha-1,6-linked side branches, much like glycogen's structure, and those branches run about 12 glucose residues long with a new branch point roughly every 12th residue; its micelles give a red-violet color with iodine instead of blue, and its molecular weight can reach up to a million. Glycogen is the animal equivalent, stored mainly in liver and muscle, and while its structure resembles amylopectin, it's branched far more densely -- a branch point every 8th to 10th residue rather than every 12th -- and its molecular weight is enormous, around a million in muscle and around 16 million in liver, yet it still dissolves in water and its molecules are shaped like flattened ellipsoids. Dextrans are the storage polysaccharides of yeasts and bacteria, also built from D-glucose, but predominantly alpha-1,6 linked, and they can branch exceptionally, at the 1,2, 1,3, or 1,4 position depending on the organism they come from. Inulin is a plant polysaccharide built instead from D-fructose units joined by beta-2,1 bonds, with the chain capped at one end by a glucose residue, essentially a sucrose unit. And mannans round out the list: homopolysaccharides of D-mannose found in yeasts, bacteria, and plants.",
    checklist: [
      "Named starch's two glucans: amylose (unbranched, alpha-1,4) and amylopectin (branched, alpha-1,4 + alpha-1,6)",
      "Gave amylose's MW range and its blue iodine reaction via helical micelles",
      "Gave amylopectin's branch length/frequency (~12 residues) and red-violet iodine reaction",
      "Described glycogen as denser-branched than amylopectin (every 8th-10th residue) with muscle/liver MW figures",
      "Described dextrans (yeast/bacteria, predominantly alpha-1,6, variable branch positions)",
      "Described inulin (D-fructose, beta-2,1, glucose/sucrose chain terminus) and mannans (D-mannose)"
    ]
  }
},

{
  id: "7-4-1-2",
  book: "cz",
  topicKey: "polysaccharides",
  chapter: 7,
  section: "7.4.1",
  czTitle: "Homopolysacharidy -- B. Strukturní polysacharidy (celulosa, chitin)",
  enTitle: "Homopolysaccharides -- B. Structural polysaccharides (cellulose, chitin)",
  cnTitle: "同多糖——B. 结构多糖（纤维素、几丁质）",
  pages: [157],
  coverage: "full",
  coverageNote: "The 'B. Strukturní polysacharidy' subsection on page 157 read in full: the cellulose entry (including Obr. 7.9's schematic conformation figure and caption), the paragraph on wood's other high-molecular accessory substances (hemicelulosy, pektiny, 'extension' protein, lignin), and the chitin entry. The preceding 'Mannany' entry and 'A. Zásobní polysacharidy' heading belong to node 7-4-1-1; the '7.4.2 Heteropolysacharidy' heading that follows chitin on the same page belongs to node 7-4-2. Note: lignin is explicitly described by the book's own text as being made of polymerized aromatic alcohols -- i.e. the book itself does NOT classify lignin as a carbohydrate/polysaccharide, even though it is introduced in this carbohydrate-structural-role paragraph as one of the substances binding cellulose fibrils together; flagged here so this distinction isn't lost.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Change α(1→4) to β(1→4) and the chain straightens instead of coiling, so strands lie flat and hydrogen-bond into sheets. That one difference in bond geometry is why cellulose is a fibre — and why we cannot digest it.", cn: "把 α(1→4) 换成 β(1→4)，链就从卷曲变成笔直，于是链与链平铺、靠氢键叠成片层。**仅仅这一个键的几何差别**，既决定了纤维素是纤维，也决定了我们消化不了它。" },
  summary: {
    en: "CELULOSA (cellulose) makes up approximately 50% of total organic carbon in the biosphere. Wood is 50% cellulose, and cotton fiber represents nearly pure cellulose. Cellulose is built of UNBRANCHED chains of D-glucose units joined by β(1→4) glycosidic bonds; this β-glycosidic arrangement, unlike an α-glycosidic one, allows the formation of very long, straight chains. Each successive D-glucose residue is rotated 180° relative to the one before it, and the pyranose ring oxygen participates in a hydrogen bond with the hydroxyl group at C-3 of the following monosaccharide residue (Obr. 7.9). These straight cellulose chains allow FIBRIL formation; cellulose fibrils are firmly bound together by other high-molecular substances: HEMICELULOSY (hemicelluloses, predominantly D-xylans, with D-xylose units joined by β(1→4) bonds), PEKTINY (pectins, polymers containing D-galacturonic acid), and so-called 'extension' PROTEIN. Wood also contains, alongside these substances, another macromolecular substance -- LIGNIN -- which the book states is made of polymerized AROMATIC ALCOHOLS (i.e. not itself a carbohydrate). Cellulose is the main structural component of plant cell walls; the chain arrangement described above lets the polysaccharide fulfill this supportive function. CHITIN is a structural polysaccharide similar to cellulose, built of N-acetyl-D-glucosamine units joined by β(1→4) bonds; its repeating unit is the disaccharide CHITOBIOSA (chitobiose). Chitin occurs in fungi, and also forms the base of the crustacean shell and the insect exoskeleton (cuticle).",
    cn: "纤维素（Celulosa）约占生物圈有机碳总量的50%。木材中50%是纤维素，棉纤维几乎是纯纤维素。纤维素由D-葡萄糖单位以β(1→4)糖苷键连接而成的不分支链构成；这种β-糖苷排列方式与α-糖苷排列不同，能够形成非常长且平直的链。每个后续的D-葡萄糖残基相对于前一个都旋转180°；吡喃环上的氧参与了与下一个单糖残基C-3位羟基之间的氢键（见图7.9）。这些平直的纤维素链能够形成微纤维；纤维素微纤维之间由其他高分子物质紧密连接在一起，这些物质包括：半纤维素（主要为D-木聚糖，D-木糖单位以β(1→4)键连接）、果胶（含D-半乳糖醛酸的聚合物），以及所谓的「extension」蛋白。除了这些物质外，木材还含有另一种大分子物质——木质素——教材指出它由聚合的芳香醇构成（即其本身并非糖类）。纤维素是植物细胞壁的主要结构成分；上述链的排列方式使这种多糖能够发挥支持功能。几丁质（Chitin）是一种与纤维素类似的结构多糖，由N-乙酰-D-葡萄糖胺单位以β(1→4)键连接而成；其重复单位是二糖——几丁二糖（chitobiosa）。几丁质存在于真菌中，也构成甲壳类外壳和昆虫外骨骼（角质层）的基础。"
  },
  points: [
    { cz: "celulosa = ~50% organického uhlíku v biosféře; dřevo, bavlna", en: "CELULOSA (cellulose) makes up approximately 50% of total organic carbon in the biosphere. Wood is 50% cellulose; cotton fiber represents nearly pure cellulose.", cn: "纤维素约占生物圈有机碳总量的50%。木材中50%是纤维素；棉纤维几乎是纯纤维素。" },
    { cz: "celulosa = nerozvětvené β(1→4) řetězce; každý zbytek otočen o 180°; H-vazba přes C-3 (obr. 7.9)", en: "Cellulose is built of UNBRANCHED D-glucose chains joined by β(1→4) bonds; β-glycosidic arrangement (unlike α-) allows very long straight chains. Each successive residue is rotated 180° relative to the previous one; the ring oxygen hydrogen-bonds with the C-3 hydroxyl of the following residue (Obr. 7.9).", cn: "纤维素由D-葡萄糖以β(1→4)键连接构成的不分支链；β-糖苷排列（不同于α-）能形成很长的平直链。每个后续残基相对于前一个旋转180°；环氧原子与下一个残基C-3羟基形成氢键（图7.9）。" },
    { cz: "rovné řetězce → fibrily; vázány hemicelulosami, pektiny, extension proteinem", en: "The straight cellulose chains enable FIBRIL formation; cellulose fibrils are firmly bound together by hemicelulosy (mostly D-xylans, β(1→4)-linked D-xylose), pektiny (polymers of D-galacturonic acid), and 'extension' protein.", cn: "平直的纤维素链能形成微纤维；纤维素微纤维通过半纤维素（主要为D-木聚糖，β(1→4)键连接的D-木糖）、果胶（含D-半乳糖醛酸的聚合物）以及「extension」蛋白紧密结合。" },
    { cz: "lignin = polymerizované aromatické alkoholy (NENÍ sacharid)", en: "Wood also contains LIGNIN alongside these substances -- the book explicitly states lignin is made of polymerized AROMATIC ALCOHOLS, i.e. it is NOT itself a carbohydrate, despite being introduced in this cellulose-structure paragraph.", cn: "木材中除上述物质外还含有木质素——教材明确指出木质素由聚合的芳香醇构成，即其本身并非糖类，尽管它是在这段讨论纤维素结构的段落中被引入的。" },
    { cz: "celulosa = hlavní strukturní komponenta buněčné stěny rostlin", en: "Cellulose is the main structural component of plant cell walls; the chain arrangement described above (straight chains, fibrils, cross-linking accessory substances) lets the polysaccharide fulfill this supportive function.", cn: "纤维素是植物细胞壁的主要结构成分；上述链的排列方式（平直链、微纤维、交联的辅助物质）使这种多糖能够发挥支持功能。" },
    { cz: "chitin = N-acetyl-D-glukosamin, β(1→4); opakující jednotka = chitobiosa", en: "CHITIN is a structural polysaccharide similar to cellulose, built of N-acetyl-D-glucosamine units joined by β(1→4) bonds; its repeating unit is the disaccharide CHITOBIOSA.", cn: "几丁质是一种与纤维素类似的结构多糖，由N-乙酰-D-葡萄糖胺单位以β(1→4)键连接而成；其重复单位是二糖——几丁二糖。" },
    { cz: "chitin: houby, krunýř raků, exoskelet (kutikula) hmyzu", en: "Chitin occurs in fungi, and also forms the base of the crustacean shell and the insect exoskeleton (cuticle).", cn: "几丁质存在于真菌中，也构成甲壳类外壳和昆虫外骨骼（角质层）的基础。" }
  ],
  terms: [
    { cz: "celulosa", en: "cellulose", cn: "纤维素", def_en: "The unbranched β(1→4)-linked D-glucose polymer forming ~50% of biosphere organic carbon and the main structural component of plant cell walls.", def_cn: "不分支的β(1→4)键D-葡萄糖聚合物，占生物圈有机碳约50%，是植物细胞壁的主要结构成分。" },
    { cz: "hemicelulosy / pektiny / extension protein", en: "hemicelluloses / pectins / 'extension' protein", cn: "半纤维素／果胶／extension蛋白", def_en: "High-molecular accessory substances that bind cellulose fibrils together in wood: hemicelluloses (mostly D-xylans), pectins (D-galacturonic-acid polymers), and 'extension' protein.", def_cn: "木材中将纤维素微纤维结合在一起的高分子辅助物质：半纤维素（主要为D-木聚糖）、果胶（含D-半乳糖醛酸的聚合物）及「extension」蛋白。" },
    { cz: "lignin", en: "lignin", cn: "木质素", def_en: "A wood macromolecule made of polymerized aromatic alcohols; explicitly NOT a carbohydrate, despite occurring alongside cellulose's structural substances.", def_cn: "木材中由聚合芳香醇构成的大分子物质；明确不属于糖类，尽管与纤维素的结构性辅助物质共同存在。" },
    { cz: "chitin", en: "chitin", cn: "几丁质", def_en: "A structural polysaccharide of β(1→4)-linked N-acetyl-D-glucosamine units (repeating unit: chitobiose), found in fungi and forming crustacean shell/insect cuticle.", def_cn: "由β(1→4)键连接的N-乙酰-D-葡萄糖胺单位构成的结构多糖（重复单位为几丁二糖），见于真菌，并构成甲壳类外壳/昆虫角质层。" },
    { cz: "chitobiosa", en: "chitobiose", cn: "几丁二糖", def_en: "The repeating disaccharide unit of chitin.", def_cn: "几丁质的重复二糖单位。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structural feature of cellulose's glycosidic bonds allows it to form very long, straight chains, per the book?",
      q_cn: "根据教材，纤维素糖苷键的哪一结构特点使其能够形成很长且平直的链？",
      options: [
        "The β-glycosidic arrangement, unlike an α-glycosidic one",
        "The presence of branch points every 12 residues",
        "Its high relative molecular weight alone",
        "The absence of any hydrogen bonding between residues"
      ],
      answer: 0,
      why_en: "The book states explicitly that cellulose's β-glycosidic arrangement, unlike an α-glycosidic one, allows the formation of very long straight chains -- unlike starch's branched or helical α-linked structures. Cellulose is unbranched (ruling out option B), and the book actually DOES describe a hydrogen bond (C-3 OH to ring oxygen) stabilizing the straight conformation (ruling out D).",
      why_cn: "教材明确指出，纤维素的β-糖苷排列方式与α-糖苷排列不同，能够形成很长的平直链——不同于淀粉那种分支或螺旋形的α-连接结构。纤维素是不分支的（排除选项B），而且教材确实描述了稳定该平直构象的氢键（C-3羟基与环氧原子之间），排除选项D。"
    },
    {
      type: "mcq",
      q_en: "According to the book's own description, is lignin a polysaccharide?",
      q_cn: "根据教材本身的描述，木质素是多糖吗？",
      options: [
        "No -- the book states it is made of polymerized aromatic alcohols",
        "Yes -- it is a heteroglycan of D-xylose and D-galacturonic acid",
        "Yes -- it is chemically identical to hemicellulose",
        "The book does not specify lignin's chemical nature"
      ],
      answer: 0,
      why_en: "Even though lignin is introduced in the same paragraph as cellulose's accessory binding substances, the book explicitly states it is made of polymerized aromatic alcohols -- it is not a carbohydrate at all, unlike the hemicelluloses and pectins mentioned alongside it.",
      why_cn: "尽管木质素是在与纤维素结合性辅助物质相同的段落中被介绍的，但教材明确指出它由聚合的芳香醇构成——它根本不是糖类，这与同段提到的半纤维素和果胶不同。"
    },
    {
      type: "short",
      q_en: "Chitin's repeating disaccharide unit is called what, and what monosaccharide derivative and bond type build it? Name two structures where chitin is found.",
      q_cn: "几丁质的重复二糖单位叫什么？它由哪种单糖衍生物、以何种键型构成？请举出两个含有几丁质的结构。",
      accept: ["chitobiose", "chitobiosa", "N-acetylglucosamine", "beta-1,4", "fungi", "crustacean", "insect", "cuticle", "几丁二糖", "N-乙酰葡萄糖胺", "真菌", "甲壳", "昆虫", "角质层"],
      answer_en: "Chitin's repeating unit is the disaccharide chitobiose, built from N-acetyl-D-glucosamine units joined by β(1→4) bonds. Chitin is found in fungi, and forms the base of the crustacean shell and the insect exoskeleton (cuticle).",
      answer_cn: "几丁质的重复单位是二糖几丁二糖，由N-乙酰-D-葡萄糖胺单位以β(1→4)键连接而成。几丁质存在于真菌中，并构成甲壳类外壳和昆虫外骨骼（角质层）的基础。"
    }
  ],
  oral: {
    q_en: "Describe cellulose's structure and biological role, the accessory substances that bind cellulose fibrils in wood, and chitin as a comparable structural polysaccharide.",
    q_cn: "请描述纤维素的结构与生物学作用、木材中结合纤维素微纤维的辅助物质，以及作为类似结构多糖的几丁质。",
    model_en: "Cellulose is remarkable in scale before you even get to its chemistry: it makes up roughly half of all the organic carbon in the entire biosphere, wood is about half cellulose by composition, and cotton fiber is essentially pure cellulose. Structurally, it's built from D-glucose units joined by beta-1,4 bonds into unbranched chains, and that beta linkage, unlike the alpha linkage in starch, is exactly what lets the chains stay very long and straight rather than coiling into a helix. Each glucose residue sits rotated 180 degrees relative to the one before it, and there's a hydrogen bond running from the ring oxygen of one residue to the C-3 hydroxyl of the next, which locks that straight conformation in place. Those straight chains are what allow cellulose to pack into fibrils, and in wood those fibrils are held firmly together by several other high-molecular substances: hemicelluloses, mostly D-xylans with their D-xylose units linked beta-1,4; pectins, polymers built around D-galacturonic acid; and a so-called extension protein. Wood also contains lignin alongside all of that, but it's worth being precise here -- lignin itself is not a carbohydrate at all, the book describes it as made of polymerized aromatic alcohols. All of this structural arrangement is exactly why cellulose serves as the main structural component of plant cell walls. Chitin plays an analogous structural role but in a different kingdom: it's built from N-acetyl-D-glucosamine units, again joined by beta-1,4 bonds, and its repeating disaccharide unit is called chitobiose. You find chitin in fungi, and it's also the material forming the base of the crustacean shell and the insect exoskeleton, or cuticle.",
    checklist: [
      "Gave cellulose's abundance figures (50% of biosphere organic carbon, 50% of wood, near-pure in cotton)",
      "Described the beta(1→4) unbranched chain, 180° residue rotation, and the C-3/ring-oxygen hydrogen bond",
      "Named the fibril-binding accessory substances: hemicelluloses, pectins, extension protein",
      "Flagged that lignin is NOT a carbohydrate (polymerized aromatic alcohols) despite appearing in this paragraph",
      "Stated cellulose's role as the main structural component of plant cell walls",
      "Described chitin: N-acetyl-D-glucosamine, beta(1→4), chitobiose repeat unit, found in fungi/crustacean shell/insect cuticle"
    ]
  }
},

{
  id: "7-4-2",
  book: "cz",
  topicKey: "polysaccharides",
  chapter: 7,
  section: "7.4.2",
  czTitle: "Heteropolysacharidy (glykosaminglykany, kyselina hyaluronová, chondroitinsulfáty, heparin)",
  enTitle: "Heteropolysaccharides (glycosaminoglycans, hyaluronic acid, chondroitin sulfates, heparin)",
  cnTitle: "杂多糖（糖胺聚糖、透明质酸、硫酸软骨素、肝素）",
  pages: [157, 158],
  coverage: "full",
  coverageNote: "The '7.4.2 Heteropolysacharidy' section read in full: its opening paragraph at the bottom of page 157 (amino sugars/uronic acids as building blocks, the connective-tissue ground substance, proteoglycans, the glycosaminoglycan disaccharide-repeat structure with its position-3 uronic-acid-to-aminosugar bond and 1→4 linkage between repeat units, sulfate esterification) through the full text on page 158 (kyselina hyaluronová, chondroitinsulfáty, heparin including its anticoagulant mechanism, and Obr. 7.10's heparin disaccharide-unit figure), verified directly against the scans. Stops right before the '7.5 Oligosacharidy vázané na proteiny' heading, which belongs to node 7-5.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "These are built from amino sugars and uronic acids rather than plain sugars, so the chain carries fixed negative charge. It holds water — and that is what makes connective-tissue ground substance a gel rather than a solution.", cn: "它们由氨基糖和糖醛酸构成，而不是普通的糖，所以链上带着固定的负电荷。**它把水抓住**——这正是结缔组织基质成为凝胶而不是溶液的原因。" },
  summary: {
    en: "The basic components of some polysaccharides are not just simple sugars but also their derivatives, such as AMINO SUGARS or URONIC ACIDS; most such substances form the basic (ground) substance of connective tissue ('pojivo'). The intercellular ground substance of connective tissue is composed of fibrous proteins, GLYKOPROTEINY (glycoproteins), and PROTEOGLYKANY (proteoglycans). In proteoglycans, molecules of heteropolysaccharides -- GLYKOSAMINGLYKANY (glycosaminoglycans, GAGs, formerly called acid mucopolysaccharides) -- are covalently bound to a protein. GAG molecules are built of DISACCHARIDE units in which one uronic-acid residue is glycosidically bonded to an acetylated amino sugar, predominantly at POSITION 3; these disaccharide units are then joined by a 1→4 bond into a linear macromolecule. The hydroxyl groups of the sugar residues, or the amino sugar's amino group, may be esterified with sulfuric acid, making these very ACIDIC substances. Glycosaminoglycans derive from either hyaluronic acid or the chondroitin-sulfate acids. KYSELINA HYALURONOVÁ (hyaluronic acid) is composed of D-glucuronic acid and N-acetyl-D-glucosamine; in smaller amount it is a component of all types of connective tissue, while in larger amount it occurs in the umbilical cord, the vitreous humor, and synovial fluid. CHONDROITINSULFÁTY (chondroitin sulfates) participate in building connective tissues together with hyaluronic acid; chondroitin-6-sulfate (chondroitin C) is composed of D-glucuronic acid and N-acetyl-D-galactosamine, with a sulfuric-acid residue bonded to the hydroxyl group at position C-6. HEPARIN has a structure similar to the glycosaminoglycans but is NOT a typical component of connective tissue; it is composed of D-glucosamine-N-sulfate residues plus D-glucuronic and L-iduronic acids and their sulfate esters (Obr. 7.10's basic disaccharide unit shows either D-glucurono-2-sulfate or L-idurono-2-sulfate bonded α(1→4) to N-sulfo-D-glucosamine-6-sulfate). Heparin occurs in larger amount in mast cells ('žírné buňky'), bound to protein, and has also been found in the extracellular space of a whole range of tissues. Heparin has an ANTICOAGULANT effect: it prevents blood clotting by inhibiting the conversion of prothrombin to thrombin and thrombin's action on fibrinogen.",
    cn: "某些多糖的基本组分不仅是简单的糖，也包括它们的衍生物，如氨基糖或糖醛酸；这类物质大多构成结缔组织（pojivo）的基质。结缔组织的细胞间基质由纤维蛋白、糖蛋白和蛋白聚糖组成。在蛋白聚糖中，杂多糖分子——糖胺聚糖（曾称酸性粘多糖）——以共价键连接在蛋白质上。糖胺聚糖分子由二糖单位构成，其中一个糖醛酸残基以糖苷键与一个乙酰化氨基糖相连，主要连接在3号位；这些二糖单位再通过1→4键连接形成线性大分子。糖残基的羟基，或氨基糖的氨基，可能被硫酸酯化，因而这类物质酸性很强。糖胺聚糖来源于透明质酸或硫酸软骨素类酸。透明质酸（kyselina hyaluronová）由D-葡萄糖醛酸和N-乙酰-D-葡萄糖胺组成；少量存在于各类结缔组织中，大量存在于脐带、玻璃体和滑液中。硫酸软骨素（chondroitinsulfáty）与透明质酸共同参与结缔组织的构建；6-硫酸软骨素（软骨素C）由D-葡萄糖醛酸和N-乙酰-D-半乳糖胺组成，硫酸残基连接在C-6位的羟基上。肝素（heparin）结构与糖胺聚糖相似，但并非结缔组织的典型成分；它由N-硫酸-D-葡萄糖胺残基、D-葡萄糖醛酸和L-艾杜糖醛酸及其硫酸酯组成（图7.10所示的基本二糖单位为D-葡萄糖醛酸-2-硫酸酯或L-艾杜糖醛酸-2-硫酸酯，以α(1→4)键与N-硫酸-D-葡萄糖胺-6-硫酸酯相连）。肝素大量存在于肥大细胞（žírné buňky）中，与蛋白质结合；也见于多种组织的细胞外间隙。肝素具有抗凝作用：它通过抑制凝血酶原转化为凝血酶、以及抑制凝血酶对纤维蛋白原的作用，来阻止血液凝固。"
  },
  points: [
    { cz: "heteroglykany: aminocukry/uronové kyseliny → základní hmota pojiva", en: "Some polysaccharides' basic components are amino sugars or uronic acids rather than simple sugars; most such substances form the basic (ground) substance of connective tissue.", cn: "某些多糖的基本组分是氨基糖或糖醛酸而非简单的糖；这类物质大多构成结缔组织的基质。" },
    { cz: "mezibuněčná hmota: vláknité bílkoviny, glykoproteiny, proteoglykany", en: "The intercellular ground substance of connective tissue is composed of fibrous proteins, glycoproteins, and proteoglycans; in proteoglycans, glycosaminoglycan (GAG) molecules -- formerly called acid mucopolysaccharides -- are covalently bound to protein.", cn: "结缔组织的细胞间基质由纤维蛋白、糖蛋白和蛋白聚糖组成；在蛋白聚糖中，糖胺聚糖（曾称酸性粘多糖）分子以共价键连接在蛋白质上。" },
    { cz: "GAG: disacharid uronová kyselina + acetylovaný aminocukr (poloha 3), spojeno 1→4; sulfatace → kyselé", en: "GAG molecules are built of disaccharide units where one uronic-acid residue bonds glycosidically to an acetylated amino sugar predominantly at POSITION 3; these units join by a 1→4 bond into a linear macromolecule. Sulfuric-acid esterification of sugar hydroxyls or the amino sugar's amino group makes GAGs very acidic.", cn: "糖胺聚糖分子由二糖单位构成，其中糖醛酸残基主要在3号位与乙酰化氨基糖以糖苷键相连；这些二糖单位再以1→4键连接成线性大分子。糖羟基或氨基糖氨基的硫酸酯化使糖胺聚糖具有很强的酸性。" },
    { cz: "GAG odvozeny od kyseliny hyaluronové nebo chondroitinsírových kyselin", en: "Glycosaminoglycans derive from either hyaluronic acid or the chondroitin-sulfate acids.", cn: "糖胺聚糖来源于透明质酸或硫酸软骨素类酸。" },
    { cz: "kyselina hyaluronová = D-glukuronová + N-acetyl-D-glukosamin; pupečník, sklivec, synovie", en: "KYSELINA HYALURONOVÁ: D-glucuronic acid + N-acetyl-D-glucosamine; in smaller amount a component of ALL types of connective tissue, in larger amount found in the umbilical cord, vitreous humor, and synovial fluid.", cn: "透明质酸：D-葡萄糖醛酸+N-乙酰-D-葡萄糖胺；少量存在于所有类型的结缔组织中，大量存在于脐带、玻璃体和滑液中。" },
    { cz: "chondroitin-6-sulfát (chondroitin C) = D-glukuronová + N-acetyl-D-galaktosamin + SO3 na C-6", en: "CHONDROITINSULFÁTY: chondroitin-6-sulfate (chondroitin C) = D-glucuronic acid + N-acetyl-D-galactosamine, with a sulfate ester at the C-6 hydroxyl; participate in connective-tissue construction together with hyaluronic acid.", cn: "硫酸软骨素：6-硫酸软骨素（软骨素C）= D-葡萄糖醛酸 + N-乙酰-D-半乳糖胺，硫酸酯连接在C-6羟基上；与透明质酸共同参与结缔组织的构建。" },
    { cz: "heparin: D-glukosamin-N-sulfát + D-glukuronová/L-idurová + sulfátové estery (obr. 7.10); ne typická složka pojiva", en: "HEPARIN: similar structure to GAGs but NOT a typical connective-tissue component; composed of D-glucosamine-N-sulfate + D-glucuronic and L-iduronic acids + their sulfate esters (Obr. 7.10: D-glucurono-2-sulfate OR L-idurono-2-sulfate, α(1→4)-bonded to N-sulfo-D-glucosamine-6-sulfate). Found in larger amount in mast cells ('žírné buňky', bound to protein) and in extracellular space of many tissues.", cn: "肝素：结构与糖胺聚糖相似，但并非结缔组织的典型成分；由N-硫酸-D-葡萄糖胺、D-葡萄糖醛酸/L-艾杜糖醛酸及其硫酸酯组成（图7.10：D-葡萄糖醛酸-2-硫酸酯或L-艾杜糖醛酸-2-硫酸酯，以α(1→4)键连接N-硫酸-D-葡萄糖胺-6-硫酸酯）。大量存在于肥大细胞（与蛋白质结合）及多种组织的细胞外间隙。" },
    { cz: "heparin = antikoagulační účin (inhibice prothrombin→thrombin, thrombin→fibrinogen)", en: "Heparin has an ANTICOAGULANT effect: it prevents blood clotting by inhibiting the conversion of prothrombin to thrombin and thrombin's action on fibrinogen.", cn: "肝素具有抗凝作用：通过抑制凝血酶原转化为凝血酶、以及抑制凝血酶对纤维蛋白原的作用，来阻止血液凝固。" }
  ],
  terms: [
    { cz: "glykosaminglykan (GAG)", en: "glycosaminoglycan (GAG)", cn: "糖胺聚糖", def_en: "A heteropolysaccharide of repeating uronic-acid/acetylated-amino-sugar disaccharide units, formerly called an acid mucopolysaccharide; covalently bound to protein in proteoglycans.", def_cn: "由重复的糖醛酸/乙酰化氨基糖二糖单位构成的杂多糖，曾称酸性粘多糖；在蛋白聚糖中以共价键连接蛋白质。" },
    { cz: "proteoglykan", en: "proteoglycan", cn: "蛋白聚糖", def_en: "A protein core with covalently bound glycosaminoglycan chains, a major component of connective-tissue ground substance.", def_cn: "带有共价结合糖胺聚糖链的蛋白质核心，是结缔组织基质的主要成分。" },
    { cz: "kyselina hyaluronová", en: "hyaluronic acid", cn: "透明质酸", def_en: "A GAG of D-glucuronic acid + N-acetyl-D-glucosamine; found in all connective tissue, especially the umbilical cord, vitreous humor, and synovial fluid.", def_cn: "由D-葡萄糖醛酸和N-乙酰-D-葡萄糖胺构成的糖胺聚糖；存在于所有结缔组织中，尤其在脐带、玻璃体和滑液中含量较高。" },
    { cz: "chondroitin-6-sulfát", en: "chondroitin-6-sulfate", cn: "6-硫酸软骨素", def_en: "A GAG (chondroitin C) of D-glucuronic acid + N-acetyl-D-galactosamine with a sulfate ester at C-6.", def_cn: "由D-葡萄糖醛酸和N-乙酰-D-半乳糖胺构成、C-6位带硫酸酯的糖胺聚糖（软骨素C）。" },
    { cz: "heparin", en: "heparin", cn: "肝素", def_en: "A GAG-like anticoagulant of D-glucosamine-N-sulfate + D-glucuronic/L-iduronic acids and their sulfate esters; found in mast cells; inhibits prothrombin-to-thrombin conversion and thrombin's action on fibrinogen.", def_cn: "一种类糖胺聚糖的抗凝物质，由N-硫酸-D-葡萄糖胺及D-葡萄糖醛酸/L-艾杜糖醛酸及其硫酸酯组成；存在于肥大细胞中；抑制凝血酶原转化为凝血酶及凝血酶对纤维蛋白原的作用。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "At which position of the acetylated amino sugar does the uronic-acid residue typically attach within a glycosaminoglycan's repeating disaccharide, per the book?",
      q_cn: "根据教材，在糖胺聚糖的重复二糖单位中，糖醛酸残基通常连接在乙酰化氨基糖的哪个位置？",
      options: ["Position 2", "Position 3", "Position 4", "Position 6"],
      answer: 1,
      why_en: "The book states the uronic-acid residue is glycosidically bonded to the acetylated amino sugar predominantly at position 3, with the resulting disaccharide units then joined 1→4 into the linear macromolecule.",
      why_cn: "教材指出，糖醛酸残基主要在3号位与乙酰化氨基糖以糖苷键相连，随后这些二糖单位再以1→4键连接成线性大分子。"
    },
    {
      type: "mcq",
      q_en: "What is heparin's anticoagulant mechanism, per the book?",
      q_cn: "根据教材，肝素的抗凝机制是什么？",
      options: [
        "It directly degrades fibrinogen",
        "It inhibits the conversion of prothrombin to thrombin, and inhibits thrombin's action on fibrinogen",
        "It binds calcium ions required for clotting",
        "It activates plasmin to dissolve existing clots"
      ],
      answer: 1,
      why_en: "The book states heparin prevents blood clotting specifically by inhibiting the conversion of prothrombin to thrombin AND thrombin's subsequent action on fibrinogen -- not by degrading fibrinogen directly, chelating calcium, or activating plasmin (none of which the book mentions).",
      why_cn: "教材指出，肝素通过抑制凝血酶原向凝血酶的转化，以及抑制凝血酶随后对纤维蛋白原的作用，来阻止血液凝固——而不是直接降解纤维蛋白原、螯合钙离子或激活纤溶酶（教材均未提及这些机制）。"
    },
    {
      type: "short",
      q_en: "Name the two monosaccharide-derivative components of hyaluronic acid, and contrast where the book says it is found in smaller vs. larger amounts.",
      q_cn: "说出透明质酸的两种单糖衍生物组分，并对比教材所述其在体内含量较少与较多的部位。",
      accept: ["glucuronic acid", "N-acetylglucosamine", "umbilical cord", "vitreous humor", "synovial fluid", "葡萄糖醛酸", "乙酰葡萄糖胺", "脐带", "玻璃体", "滑液"],
      answer_en: "Hyaluronic acid is composed of D-glucuronic acid and N-acetyl-D-glucosamine. In smaller amount it is found in all types of connective tissue; in larger amount it occurs in the umbilical cord, the vitreous humor, and synovial fluid.",
      answer_cn: "透明质酸由D-葡萄糖醛酸和N-乙酰-D-葡萄糖胺组成。少量存在于各类结缔组织中；大量存在于脐带、玻璃体和滑液中。"
    }
  ],
  oral: {
    q_en: "Explain the general structure of glycosaminoglycans, then describe hyaluronic acid, chondroitin sulfates, and heparin, including heparin's distinctive biological role.",
    q_cn: "请解释糖胺聚糖的一般结构，然后描述透明质酸、硫酸软骨素和肝素，包括肝素独特的生物学作用。",
    model_en: "Heteropolysaccharides in this section are built not from simple sugars but from their derivatives -- amino sugars and uronic acids -- and most of them end up forming the ground substance of connective tissue. That ground substance itself is a mix of fibrous proteins, glycoproteins, and proteoglycans, and in a proteoglycan, what's actually attached to the protein core by covalent bonds are glycosaminoglycan molecules, what used to be called acid mucopolysaccharides. Every glycosaminoglycan is built from a repeating disaccharide: a uronic-acid residue glycosidically bonded to an acetylated amino sugar, mostly at position 3, and then those disaccharide units chain together through 1,4 bonds into one long linear molecule. Because the sugar hydroxyls, or the amino sugar's own amino group, can get esterified with sulfuric acid, these molecules end up being extremely acidic. All of the glycosaminoglycans trace back to either hyaluronic acid or the chondroitin sulfate acids. Hyaluronic acid itself is glucuronic acid paired with N-acetylglucosamine, and while a small amount is present in every kind of connective tissue, it's especially concentrated in the umbilical cord, the vitreous humor of the eye, and synovial fluid. Chondroitin sulfates work alongside hyaluronic acid in building connective tissue; chondroitin-6-sulfate specifically is glucuronic acid paired with N-acetylgalactosamine, with a sulfate group esterified onto the hydroxyl at carbon 6. Heparin shares that same general glycosaminoglycan-like structure, but interestingly it isn't actually a typical connective-tissue component -- it's built from glucosamine-N-sulfate together with glucuronic and iduronic acids and their sulfate esters, and it's found in larger amounts inside mast cells, bound to protein, as well as in the extracellular space of many tissues. What makes heparin biologically distinctive is its anticoagulant action: it stops blood from clotting by inhibiting the conversion of prothrombin into thrombin and by inhibiting thrombin's own action on fibrinogen.",
    checklist: [
      "Defined GAG building blocks (amino sugars, uronic acids) and their role in connective-tissue ground substance",
      "Described the GAG repeat: uronic acid + acetylated amino sugar at position 3, linked 1→4, sulfated → acidic",
      "Named hyaluronic acid's composition and where it's concentrated (umbilical cord/vitreous humor/synovial fluid)",
      "Named chondroitin-6-sulfate's composition and C-6 sulfation",
      "Described heparin's composition (glucosamine-N-sulfate + glucuronic/iduronic acids) and that it is NOT a typical connective-tissue component",
      "Explained heparin's anticoagulant mechanism: inhibits prothrombin→thrombin and thrombin's action on fibrinogen"
    ]
  }
},

{
  id: "7-5",
  book: "cz",
  topicKey: "glycoconjugates",
  chapter: 7,
  section: "7.5",
  czTitle: "Oligosacharidy vázané na proteiny",
  enTitle: "Oligosaccharides bound to proteins",
  cnTitle: "结合于蛋白质的寡糖",
  pages: [158, 159, 160],
  coverage: "full",
  coverageNote: "Section 7.5 read in full across its own text on pp.158-159 (O-glycosidic Ser/Thr vs N-glycosidic Asn linkage, the N-linked pentasaccharide core, Obr. 7.11's O-/N-glycosidic worked examples plus its three example glycoprotein oligosaccharide trees) plus Obr. 7.12 (the six labelled sugar structures -- Fuc, Gal, GalNAc, GlcNAc, Man, NeuAc -- with their standard abbreviations). Obr. 7.12 is physically printed at the top of page 160, after the page-160 running text has technically moved on to '7.6.1', but the page-158 prose explicitly cross-references it by figure number as belonging to this section ('Vzorce cukrů... jsou uvedeny na obr. 7.12'), so it is included here rather than in the 7.6 nodes -- this is the book's own print flow (figures float to the next available page break), not a re-ordering choice made by this drafting pass. The book's own cross-reference to ch. 2.2.5 for background on protein-bound oligosaccharides is noted but not itself read (out of this drafting pass's page range).",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "A sugar chain on a protein is not fuel — it is an address. Enzymes, hormones, immunoglobulins and membrane proteins all carry them, and the chain is what something else recognises.", cn: "蛋白质上的糖链不是燃料——**它是地址**。酶、激素、免疫球蛋白和膜蛋白都带着它，而这条链正是别的东西用来识别的标记。" },
  summary: {
    en: "Oligosaccharide chains also occur in nature bound to proteins (the book cross-references ch. 2.2.5 for this). Biologically, such glycoproteins include some enzymes, hormones, immunoglobulins, high-molecular-weight components of connective tissue, and integral membrane proteins. Oligosaccharide chains are attached either to the hydroxyl group of SERINE or THREONINE via an O-glycosidic bond, or to the amide nitrogen of ASPARAGINE via an N-glycosidic bond. N-glycosidically bound oligosaccharides share a common PENTASACCHARIDE CORE ('core'), containing THREE D-mannosyl residues and TWO N-acetyl-D-glucosaminyl residues (Obr. 7.11). Additional sugar residues are then attached to this common core in various ways, which is exactly what allows the great diversity of oligosaccharides found in glycoproteins. Obr. 7.11 gives worked examples: part (A) shows an O-glycosidically bound GalNAc on serine and an N-glycosidically bound GlcNAc on asparagine; part (B) shows three complete oligosaccharide trees -- an O-linked tree ending in NeuAc-Gal-GalNAc(-NeuAc branch)-O-Ser, an N-linked 'manosový typ' (mannose type) tree (multiple branching Man residues sitting over the GlcNAc-GlcNAc-Asn core), and an N-linked 'komplexní typ' (complex type) tree (two NeuAc-Gal-GlcNAc branches off the Man core, plus a fucose residue attached to the core GlcNAc closest to Asn, all over the same GlcNAc-GlcNAc-Asn core, shown attached to 'Protein'). Obr. 7.12 then gives the structures, with standard abbreviations, of the sugars commonly found in these glycoprotein oligosaccharide chains: β-L-fucose (Fuc), β-D-galactose (Gal), N-acetyl-β-D-galactosamine (GalNAc), N-acetyl-β-D-glucosamine (GlcNAc), β-D-mannose (Man), and N-acetylneuraminic acid (NeuAc, sialic acid) -- the last of which is drawn with its characteristic extra glycerol-like three-carbon tail (R = -CHOH-CHOH-CH2OH) attached to the ring.",
    cn: "寡糖链在自然界中也会与蛋白质结合存在（教材在此处引用第2.2.5节作为背景）。从生物学角度看，这类糖蛋白包括一些酶类、激素、免疫球蛋白、结缔组织的高分子成分，以及整合膜蛋白。寡糖链要么通过O-糖苷键连接在丝氨酸或苏氨酸的羟基上，要么通过N-糖苷键连接在天冬酰胺的酰胺氮原子上。N-糖苷连接的寡糖都含有一个共同的五糖核心（core），包含三个D-甘露糖基残基和两个N-乙酰-D-葡萄糖胺基残基（见图7.11）。其他糖残基再以不同方式连接到这个共同核心上，这正是糖蛋白中寡糖多样性的来源。图7.11给出了具体实例：(A)部分展示了通过O-糖苷键连接在丝氨酸上的GalNAc，以及通过N-糖苷键连接在天冬酰胺上的GlcNAc；(B)部分展示了三个完整的寡糖树状结构——一个以NeuAc-Gal-GalNAc（分支为NeuAc）-O-丝氨酸结尾的O-连接寡糖，一个N-连接的「甘露糖型」（多个分支的Man残基位于GlcNAc-GlcNAc-Asn核心之上），以及一个N-连接的「复杂型」（两条NeuAc-Gal-GlcNAc分支从Man核心分出，另有一个岩藻糖残基连接在靠近Asn的核心GlcNAc上，均建立在同样的GlcNAc-GlcNAc-Asn核心之上，并与「Protein」相连）。图7.12随后给出了糖蛋白寡糖链中常见糖类的结构式及其标准缩写：β-L-岩藻糖（Fuc）、β-D-半乳糖（Gal）、N-乙酰-β-D-半乳糖胺（GalNAc）、N-乙酰-β-D-葡萄糖胺（GlcNAc）、β-D-甘露糖（Man）以及N-乙酰神经氨酸（NeuAc，唾液酸）——其中NeuAc带有其特有的额外甘油状三碳尾链（R = -CHOH-CHOH-CH2OH），连接在环上。"
  },
  points: [
    { cz: "oligosacharidy vázané na proteiny — biologické příklady", en: "Oligosaccharide chains occur in nature bound to proteins (cross-ref ch. 2.2.5); biologically such glycoproteins include some enzymes, hormones, immunoglobulins, high-MW connective-tissue components, and integral membrane proteins.", cn: "寡糖链在自然界中会与蛋白质结合存在（参见第2.2.5节）；这类糖蛋白从生物学角度包括一些酶、激素、免疫球蛋白、结缔组织的高分子成分及整合膜蛋白。" },
    { cz: "O-glykosidová (Ser/Thr) vs N-glykosidová (Asn) vazba", en: "Oligosaccharide chains bind either to the hydroxyl of SERINE or THREONINE via an O-glycosidic bond, or to the amide nitrogen of ASPARAGINE via an N-glycosidic bond.", cn: "寡糖链要么通过O-糖苷键连接在丝氨酸或苏氨酸的羟基上，要么通过N-糖苷键连接在天冬酰胺的酰胺氮原子上。" },
    { cz: "N-vázané oligosacharidy: společné pentasacharidové jádro (3× Man, 2× GlcNAc)", en: "N-glycosidically bound oligosaccharides share a common PENTASACCHARIDE CORE ('core'): three D-mannosyl residues and two N-acetyl-D-glucosaminyl residues (Obr. 7.11).", cn: "N-糖苷连接的寡糖都含有一个共同的五糖核心：三个D-甘露糖基残基和两个N-乙酰-D-葡萄糖胺基残基（图7.11）。" },
    { cz: "různorodost = různé zbytky navázané na jádro", en: "Additional sugar residues attach to the common core in various ways, which is exactly what allows the great diversity of oligosaccharides found in glycoproteins.", cn: "其他糖残基以不同方式连接到共同核心上，这正是糖蛋白中寡糖多样性的来源。" },
    { cz: "obr. 7.11(A): GalNAc-Ser (O-), GlcNAc-Asn (N-)", en: "Obr. 7.11 part (A) shows worked single-residue examples: GalNAc O-glycosidically bound to Ser, and GlcNAc N-glycosidically bound to Asn.", cn: "图7.11(A)展示了单残基实例：GalNAc通过O-糖苷键连接丝氨酸，GlcNAc通过N-糖苷键连接天冬酰胺。" },
    { cz: "obr. 7.11(B): 3 příklady stromů — O-vázaný, manosový typ, komplexní typ", en: "Obr. 7.11 part (B) shows three complete oligosaccharide trees: an O-linked tree (NeuAc-Gal-GalNAc with a NeuAc branch, on Ser), an N-linked 'manosový typ' (mannose type, several branching Man residues over the GlcNAc-GlcNAc-Asn core), and an N-linked 'komplexní typ' (complex type, two NeuAc-Gal-GlcNAc branches plus a core-fucose, over the same GlcNAc-GlcNAc-Asn core, attached to Protein).", cn: "图7.11(B)展示了三种完整的寡糖树状结构：一种O-连接寡糖（NeuAc-Gal-GalNAc，带NeuAc分支，连接在Ser上）、一种N-连接的「甘露糖型」（多个分支的Man残基位于GlcNAc-GlcNAc-Asn核心之上）、以及一种N-连接的「复杂型」（两条NeuAc-Gal-GlcNAc分支加上核心岩藻糖，均建立在同样的GlcNAc-GlcNAc-Asn核心之上，并与蛋白质相连）。" },
    { cz: "obr. 7.12: Fuc, Gal, GalNAc, GlcNAc, Man, NeuAc + zkratky", en: "Obr. 7.12 gives the structures and standard abbreviations of the sugars commonly found in glycoprotein oligosaccharide chains: β-L-fucose (Fuc), β-D-galactose (Gal), N-acetyl-β-D-galactosamine (GalNAc), N-acetyl-β-D-glucosamine (GlcNAc), β-D-mannose (Man), and N-acetylneuraminic acid (NeuAc) -- NeuAc uniquely carries an extra glycerol-like 3-carbon tail (R = -CHOH-CHOH-CH2OH).", cn: "图7.12给出了糖蛋白寡糖链中常见糖的结构式及标准缩写：β-L-岩藻糖（Fuc）、β-D-半乳糖（Gal）、N-乙酰-β-D-半乳糖胺（GalNAc）、N-乙酰-β-D-葡萄糖胺（GlcNAc）、β-D-甘露糖（Man）及N-乙酰神经氨酸（NeuAc）——NeuAc独有一条额外的甘油状三碳尾链（R = -CHOH-CHOH-CH2OH）。" }
  ],
  terms: [
    { cz: "O-glykosidová vazba (Ser/Thr)", en: "O-glycosidic bond (Ser/Thr)", cn: "O-糖苷键（丝氨酸/苏氨酸）", def_en: "The bond linking an oligosaccharide to the hydroxyl group of serine or threonine in a glycoprotein.", def_cn: "糖蛋白中寡糖连接到丝氨酸或苏氨酸羟基上的化学键。" },
    { cz: "N-glykosidová vazba (Asn)", en: "N-glycosidic bond (Asn)", cn: "N-糖苷键（天冬酰胺）", def_en: "The bond linking an oligosaccharide to the amide nitrogen of asparagine in a glycoprotein.", def_cn: "糖蛋白中寡糖连接到天冬酰胺酰胺氮原子上的化学键。" },
    { cz: "pentasacharidové jádro (core)", en: "pentasaccharide core", cn: "五糖核心", def_en: "The common 3-mannose + 2-N-acetylglucosamine core shared by all N-glycosidically bound oligosaccharides.", def_cn: "所有N-糖苷连接寡糖共有的核心结构，由3个甘露糖和2个N-乙酰葡萄糖胺残基构成。" },
    { cz: "NeuAc (kyselina N-acetylneuraminová)", en: "NeuAc (N-acetylneuraminic acid, sialic acid)", cn: "NeuAc（N-乙酰神经氨酸，唾液酸）", def_en: "A sugar with a distinctive glycerol-like 3-carbon tail, commonly found terminating glycoprotein oligosaccharide branches.", def_cn: "带有独特甘油状三碳尾链的糖，常见于糖蛋白寡糖分支的末端。" },
    { cz: "Fuc, Gal, GalNAc, GlcNAc, Man", en: "Fuc, Gal, GalNAc, GlcNAc, Man", cn: "Fuc、Gal、GalNAc、GlcNAc、Man", def_en: "Standard abbreviations (Obr. 7.12) for fucose, galactose, N-acetylgalactosamine, N-acetylglucosamine, and mannose as they appear in glycoprotein oligosaccharide diagrams.", def_cn: "图7.12中岩藻糖、半乳糖、N-乙酰半乳糖胺、N-乙酰葡萄糖胺和甘露糖在糖蛋白寡糖图中使用的标准缩写。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What does the common pentasaccharide core of N-glycosidically bound oligosaccharides consist of, per the book?",
      q_cn: "根据教材，N-糖苷连接寡糖的共同五糖核心由什么构成？",
      options: [
        "Three D-mannosyl residues and two N-acetyl-D-glucosaminyl residues",
        "Two D-mannosyl residues and three N-acetyl-D-glucosaminyl residues",
        "Five N-acetylneuraminic acid residues",
        "Three D-galactosyl residues and two fucosyl residues"
      ],
      answer: 0,
      why_en: "The book explicitly states the common core contains three D-mannosyl residues and two N-acetyl-D-glucosaminyl residues, as shown in Obr. 7.11's mannose-type and complex-type trees, both built over the same GlcNAc-GlcNAc-Man(3x) core.",
      why_cn: "教材明确指出，共同核心包含三个D-甘露糖基残基和两个N-乙酰-D-葡萄糖胺基残基，如图7.11中甘露糖型和复杂型两种树状结构所示，二者都建立在相同的GlcNAc-GlcNAc-Man(3个)核心之上。"
    },
    {
      type: "mcq",
      q_en: "Which two amino acid side chains carry O-glycosidically bound oligosaccharide chains, per the book?",
      q_cn: "根据教材，哪两种氨基酸的侧链会携带O-糖苷连接的寡糖链？",
      options: ["Serine and threonine", "Asparagine and glutamine", "Serine and asparagine", "Threonine and lysine"],
      answer: 0,
      why_en: "The book states oligosaccharide chains are bound to the hydroxyl group of serine OR threonine via an O-glycosidic bond -- asparagine instead carries N-glycosidically bound chains via its amide nitrogen.",
      why_cn: "教材指出，寡糖链通过O-糖苷键连接在丝氨酸或苏氨酸的羟基上——而天冬酰胺则通过其酰胺氮原子携带N-糖苷连接的寡糖链。"
    },
    {
      type: "short",
      q_en: "Name the six sugars depicted in Obr. 7.12 with their standard abbreviations, and identify which one carries a distinctive extra three-carbon tail.",
      q_cn: "列出图7.12中描绘的六种糖及其标准缩写，并指出哪一种带有独特的额外三碳尾链。",
      accept: ["fucose", "galactose", "galactosamine", "glucosamine", "mannose", "neuraminic", "NeuAc", "岩藻糖", "半乳糖", "甘露糖", "神经氨酸"],
      answer_en: "β-L-fucose (Fuc), β-D-galactose (Gal), N-acetyl-β-D-galactosamine (GalNAc), N-acetyl-β-D-glucosamine (GlcNAc), β-D-mannose (Man), and N-acetylneuraminic acid (NeuAc). NeuAc is the one drawn with the extra glycerol-like three-carbon tail (R = -CHOH-CHOH-CH2OH).",
      answer_cn: "β-L-岩藻糖（Fuc）、β-D-半乳糖（Gal）、N-乙酰-β-D-半乳糖胺（GalNAc）、N-乙酰-β-D-葡萄糖胺（GlcNAc）、β-D-甘露糖（Man）和N-乙酰神经氨酸（NeuAc）。NeuAc是带有额外甘油状三碳尾链（R = -CHOH-CHOH-CH2OH）的那一种。"
    }
  ],
  oral: {
    q_en: "Explain how oligosaccharides attach to proteins in glycoproteins, describe the N-linked pentasaccharide core, and name the sugars commonly found in these chains.",
    q_cn: "请解释寡糖如何连接到糖蛋白的蛋白质上，描述N-连接的五糖核心，并说出这些寡糖链中常见的糖类。",
    model_en: "Oligosaccharide chains don't only exist free in solution -- they also occur bound to proteins, and biologically that covers a fairly wide range: some enzymes, hormones, immunoglobulins, high-molecular-weight components of connective tissue, and integral membrane proteins all carry them. There are exactly two ways the attachment happens. Either the chain is O-glycosidically bound to the hydroxyl group of a serine or threonine residue, or it's N-glycosidically bound to the amide nitrogen of an asparagine residue. What's elegant about the N-linked case specifically is that every single N-glycosidically bound oligosaccharide, no matter how elaborate it eventually gets, shares the same starting point: a common pentasaccharide core made of three D-mannosyl residues and two N-acetyl-D-glucosaminyl residues. All the diversity you actually see in glycoprotein oligosaccharides comes from what additional sugar residues get attached to that shared core, and in what pattern. The book's figure walks through concrete examples: a single GalNAc sitting O-glycosidically on serine, a single GlcNAc sitting N-glycosidically on asparagine, and then three full trees -- an O-linked one ending in a sialylated galactose-GalNAc unit on serine, a mannose-type N-linked one where several more mannose residues just branch further off the core, and a complex-type N-linked one where each arm off the core mannoses carries a full GlcNAc-galactose-sialic acid chain, plus a fucose stuck onto the core GlcNAc nearest the asparagine. And then there's a separate figure that just catalogs the individual sugars you keep seeing in all of these chains, with their standard shorthand: fucose, galactose, N-acetylgalactosamine, N-acetylglucosamine, mannose, and N-acetylneuraminic acid, or sialic acid, which stands out structurally because it carries its own extra three-carbon, glycerol-like tail off the ring.",
    checklist: [
      "Named glycoprotein examples: enzymes, hormones, immunoglobulins, connective-tissue components, membrane proteins",
      "Distinguished O-glycosidic (Ser/Thr) from N-glycosidic (Asn) attachment",
      "Described the N-linked pentasaccharide core: 3 Man + 2 GlcNAc",
      "Explained diversity arising from variable additional residues on the shared core",
      "Described Obr. 7.11's three example trees (O-linked, mannose-type, complex-type)",
      "Named the six Obr. 7.12 sugars and NeuAc's distinctive tail"
    ]
  }
},

{
  id: "7-6",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.6",
  czTitle: "Vzájemné přeměny cukrů — úvod (tři typy reakcí)",
  enTitle: "Sugar interconversions — introduction (three reaction types)",
  cnTitle: "糖的相互转化——引言（三种反应类型）",
  pages: [159],
  coverage: "full",
  coverageNote: "The short '7.6 Vzájemné přeměny cukrů' opening paragraph at the bottom of page 159 (immediately below Obr. 7.11's caption), listing the three reaction types organisms use to interconvert sugars, read in full. Each numbered reaction type is elaborated in its own subsection immediately following (1→7.6.1, 2→7.6.2, 3→7.6.3), covered by nodes 7-6-1/7-6-2/7-6-3 respectively -- this node covers only the three-item overview list itself.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Only three moves interconvert sugars: shift a hydroxyl (epimerisation or isomerisation), transfer a two- or three-carbon fragment, or oxidise and lose a CO₂. Every interconversion in this chapter is one of the three.", cn: "糖与糖之间的互变只有三种动作：挪一个羟基（差向异构或异构化）、搬走一个二碳或三碳片段、或者氧化并丢掉一个 CO₂。**本章后面所有的互变，都是这三种之一。**" },
  summary: {
    en: "Organisms are able to interconvert carbohydrates with one another, and the book lists three types of reaction that serve this purpose. (1) EPIMERACE (epimerization) -- changes in the steric arrangement at one of the carbon atoms, i.e. a change in the position of a hydroxyl group -- AND IZOMERACE (isomerization), the interconversion of an aldose and a ketose form; the NUMBER OF CARBON ATOMS does not change in either of these reactions. (2) OXIDATIVE DEGRADATION of one carbon atom: dehydrogenation to a β-oxo acid occurs first, then decarboxylation; this is how HEXOSES BECOME PENTOSES, the chain shortening by exactly one carbon. (3) TRANSFER of three-carbon or two-carbon FRAGMENTS from one sugar to another; this is how trioses, tetroses, pentoses, and heptoses arise from hexoses. Fragments always originate from a KETOSE, and the recipient is always an ALDOSE; the total number of carbon atoms across the reaction is conserved.",
    cn: "生物体能够相互转化糖类，教材列出了用于此目的的三种反应类型。(1) 差向异构化（epimerace）——一个碳原子上立体构型的改变，即羟基位置的改变——以及异构化（izomerace），即醛糖与酮糖形式的相互转化；这两类反应中碳原子数目均不改变。(2) 一个碳原子的氧化降解：先脱氢生成β-氧代酸，再脱羧；己糖正是通过这种方式变为戊糖，链缩短恰好一个碳原子。(3) 三碳或二碳片段从一种糖转移到另一种糖；三碳糖、四碳糖、戊糖和庚糖正是通过这种方式由己糖产生。片段总是来自酮糖，而接受片段的总是醛糖；反应前后碳原子总数保持不变。"
  },
  points: [
    { cz: "organismy vzájemně přeměňují sacharidy — 3 typy reakcí", en: "Organisms are able to interconvert carbohydrates with one another; the book names three types of reaction serving this purpose.", cn: "生物体能够相互转化糖类；教材列出了实现这一目的的三种反应类型。" },
    { cz: "1. epimerace a izomerace — počet C atomů se nemění", en: "Type 1: EPIMERACE (change of steric arrangement/OH position at one carbon) and IZOMERACE (aldose⇌ketose interconversion). The number of carbon atoms does NOT change in either reaction.", cn: "类型1：差向异构化（一个碳原子上立体构型/羟基位置的改变）与异构化（醛糖⇌酮糖的相互转化）。这两种反应碳原子数目均不改变。" },
    { cz: "2. oxidační odbourávání jednoho C — dehydrogenace na β-oxokyselinu, pak dekarboxylace", en: "Type 2: OXIDATIVE DEGRADATION of one carbon atom -- first dehydrogenation to a β-oxo acid, then decarboxylation; this is how hexoses become pentoses, the chain shortened by exactly one carbon.", cn: "类型2：一个碳原子的氧化降解——先脱氢生成β-氧代酸，再脱羧；己糖正是通过这种方式变为戊糖，链缩短恰好一个碳原子。" },
    { cz: "3. přenos tří-/dvouuhlíkových štěpů — dárce vždy ketosa, příjemce vždy aldosa", en: "Type 3: TRANSFER of three-carbon or two-carbon fragments from one sugar to another, producing trioses/tetroses/pentoses/heptoses from hexoses. Fragments always originate from a KETOSE and the recipient is always an ALDOSE; total carbon count is conserved across the reaction.", cn: "类型3：三碳或二碳片段从一种糖转移到另一种糖，由己糖产生三碳糖、四碳糖、戊糖和庚糖。片段总是来自酮糖，接受片段的总是醛糖；反应前后碳原子总数保持不变。" }
  ],
  terms: [
    { cz: "epimerace", en: "epimerization", cn: "差向异构化", def_en: "A change in steric arrangement (hydroxyl position) at one carbon atom, with no change in carbon count.", def_cn: "一个碳原子上立体构型（羟基位置）的改变，碳原子数目不变。" },
    { cz: "izomerace (aldosa⇌ketosa)", en: "isomerization (aldose⇌ketose)", cn: "异构化（醛糖⇌酮糖）", def_en: "Interconversion between the aldose and ketose form of a sugar, with no change in carbon count.", def_cn: "糖的醛糖形式与酮糖形式之间的相互转化，碳原子数目不变。" },
    { cz: "oxidační dekarboxylace", en: "oxidative decarboxylation", cn: "氧化脱羧", def_en: "Dehydrogenation to a β-oxo acid followed by decarboxylation, shortening a sugar's chain by one carbon (e.g. hexose→pentose).", def_cn: "先脱氢生成β-氧代酸，再脱羧，使糖链缩短一个碳原子（如己糖变为戊糖）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which of the book's three sugar-interconversion reaction types shortens a hexose into a pentose by removing exactly one carbon atom via decarboxylation?",
      q_cn: "教材中三种糖类相互转化反应中，哪一种通过脱羧去除恰好一个碳原子，从而将己糖缩短为戊糖？",
      options: [
        "Type 1: epimerization/isomerization",
        "Type 2: oxidative degradation of one carbon atom",
        "Type 3: transfer of three- or two-carbon fragments",
        "None of the three types change carbon count"
      ],
      answer: 1,
      why_en: "Type 2 (oxidative degradation) is specifically described as: dehydrogenation to a β-oxo acid, then decarboxylation, converting hexoses to pentoses by removing one carbon. Type 1 explicitly preserves carbon count; type 3 conserves the TOTAL carbon count across both molecules involved but does change each individual molecule's own count.",
      why_cn: "类型2（氧化降解）具体描述为：先脱氢生成β-氧代酸，再脱羧，通过去除一个碳原子将己糖转化为戊糖。类型1明确碳原子数目不变；类型3则是两个参与分子的碳原子总数守恒，但每个分子各自的碳原子数目会发生变化。"
    },
    {
      type: "short",
      q_en: "List the book's three sugar-interconversion reaction types in order, and state for each whether the sugar's carbon count changes.",
      q_cn: "按顺序列出教材中三种糖类相互转化反应类型，并说明每种反应中糖的碳原子数目是否改变。",
      accept: ["epimerization", "isomerization", "oxidative degradation", "decarboxylation", "fragment transfer", "差向异构化", "异构化", "氧化降解", "脱羧", "片段转移"],
      answer_en: "(1) Epimerization/isomerization -- carbon count unchanged. (2) Oxidative degradation of one carbon (dehydrogenation to a β-oxo acid, then decarboxylation) -- carbon count decreases by one (hexose→pentose). (3) Transfer of three-/two-carbon fragments between sugars -- each individual sugar's carbon count changes, but the total across both molecules is conserved.",
      answer_cn: "(1) 差向异构化/异构化——碳原子数目不变。(2) 一个碳原子的氧化降解（先脱氢生成β-氧代酸，再脱羧）——碳原子数目减少一个（己糖变为戊糖）。(3) 三碳/二碳片段在糖之间的转移——每个糖分子自身的碳原子数目会改变，但两分子的总碳原子数守恒。"
    }
  ],
  oral: {
    q_en: "Give an overview of the three ways organisms interconvert sugars, per the book's introduction to section 7.6.",
    q_cn: "根据教材7.6节引言，概述生物体相互转化糖类的三种方式。",
    model_en: "Section 7.6 opens by simply stating that organisms are able to interconvert carbohydrates with one another, and it names three types of reaction that make this possible, each of which gets its own subsection right after. The first is really two closely related ideas: epimerization, which just changes the steric arrangement, meaning the position of a hydroxyl group, at one carbon atom, and isomerization, which interconverts the aldose and ketose forms of a sugar -- in both of these, the number of carbon atoms stays exactly the same. The second type is oxidative degradation of a single carbon atom: the sugar is first dehydrogenated into a beta-oxo acid, and that then decarboxylates, which is exactly the mechanism by which a hexose gets shortened into a pentose, losing precisely one carbon. And the third type is the transfer of three-carbon or two-carbon fragments from one sugar to another, which is how you get trioses, tetroses, pentoses, and heptoses out of hexoses -- the fragment being transferred always comes from a ketose, and whatever sugar receives it is always an aldose, and across the whole reaction the total number of carbon atoms is conserved even though it moves between two different molecules.",
    checklist: [
      "Stated organisms can interconvert sugars via three reaction types",
      "Described type 1: epimerization (OH position) and isomerization (aldose⇌ketose), carbon count unchanged",
      "Described type 2: oxidative degradation of one carbon via β-oxo-acid dehydrogenation then decarboxylation, hexose→pentose",
      "Described type 3: transfer of 3-/2-carbon fragments, donor always ketose, recipient always aldose, total carbon conserved",
      "Noted each type maps to its own following subsection (7.6.1/7.6.2/7.6.3)"
    ]
  }
},

{
  id: "7-6-1",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.6.1",
  czTitle: "Epimerace a izomerace",
  enTitle: "Epimerization and isomerization",
  cnTitle: "差向异构化与异构化",
  pages: [160],
  coverage: "full",
  coverageNote: "The full text of '7.6.1 Epimerace a izomerace' on page 160 (below Obr. 7.12) read directly -- both worked examples of epimerization and both worked examples of isomerization. Worth flagging: the book's two isomerization examples are given at different levels of detail -- 'glukosa ⇌ fruktosa' is stated for plain (non-phosphorylated) glucose/fructose, while the second example, 'glyceraldehyd-3-fosfát ⇌ dihydroxyacetonfosfát', is given in its phosphorylated form. This is transcribed exactly as printed rather than silently normalizing the first example to the phosphorylated glucose-6-phosphate/fructose-6-phosphate pair a reader might expect from the analogous glycolysis reaction -- the book itself is simply terser about the first example.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Epimerisation changes the configuration at one carbon; isomerisation moves the carbonyl between C-1 and C-2. Note what glucose ⇌ galactose actually needs: it does not happen to the free sugar, it happens on the UDP-sugar.", cn: "差向异构改变**一个**碳的构型；异构化则把羰基在 C-1 与 C-2 之间挪动。请留意葡萄糖 ⇌ 半乳糖真正需要什么：**它不发生在游离糖上，而发生在 UDP-糖上。**" },
  trace: [
    {
      term: "epimer / anomer / enantiomer 三个「异构体」",
      what: "epimerization（差向异构）指的是**只改变一个碳上的构型**——某一个羟基换个朝向，别的原封不动。",
      from: "这一族词长得太像，混淆基本都出在这儿，干脆一次分清楚，按「有几个碳不一样」排：**enantiomer（对映体）**是镜像关系，所有手性碳**全部**相反；**epimer（差向异构体）**只有**一个**碳不同；而 **anomer（异头物）**是 epimer 的一个**特例**——那个唯一不同的碳，恰好是闭环时新生出来的 anomeric carbon。所以 α/β-葡萄糖既是 anomer 也是 epimer，但反过来说不成立：不是所有 epimer 都是 anomer。记「全部 / 一个 / 一个且是那个特定的碳」这三档就够了。",
      to: "教材点出一处很容易被略过、但很能说明问题的地方：**葡萄糖 ⇌ 半乳糖这个差向异构，不发生在游离的糖身上，而发生在 UDP-糖上**。也就是说细胞不是抓着一个葡萄糖直接把某个羟基翻过来，而是先把它挂到 UDP 上、在那儿改。这解释了为什么后面讲多糖合成时 UDP-糖到处都是——**它不只是「活化了的糖」，还是做这类改造的操作台**。",
      family: "和差向异构并列的另一种改造叫 isomerization（异构化），干的是另一件事：把羰基从一个碳挪到隔壁去，于是醛糖变酮糖——教材给的例子是葡萄糖 ⇌ 果糖。一个改构型、一个搬官能团，别混。另一个差向异构的例子是核酮糖-5-磷酸 ⇌ 木酮糖-5-磷酸，它属于磷酸戊糖途径。"
    }
  ],
  summary: {
    en: "The book illustrates EPIMERIZATION with two examples: the interconversion glukosa ⇌ galaktosa (for which the book names uridindifosfát, uridine diphosphate/UDP, as the 'coenzyme') and the interconversion ribulosa-5-fosfát ⇌ xylulosa-5-fosfát. It illustrates ISOMERIZATION -- defined here as the shift of the carbonyl group to an adjacent carbon atom -- with two examples: glukosa ⇌ fruktosa (given by the book in its plain, non-phosphorylated form), and glyceraldehyd-3-fosfát ⇌ dihydroxyacetonfosfát (given in phosphorylated form).",
    cn: "教材用两个实例说明差向异构化：葡萄糖⇌半乳糖的相互转化（教材指出其「辅酶」为尿苷二磷酸，UDP）以及核酮糖-5-磷酸⇌木酮糖-5-磷酸的相互转化。教材用两个实例说明异构化——在此定义为羰基向相邻碳原子的转移：葡萄糖⇌果糖（教材以未磷酸化的普通形式给出）以及3-磷酸甘油醛⇌磷酸二羟丙酮（以磷酸化形式给出）。"
  },
  points: [
    { cz: "epimerace = změna sterického uspořádání (OH) na 1 uhlíku", en: "EPIMERACE (epimerization): a change in the steric arrangement at one carbon atom, i.e. a change in the position of a hydroxyl group.", cn: "差向异构化：一个碳原子上立体构型的改变，即羟基位置的改变。" },
    { cz: "příklad 1: glukosa ⇌ galaktosa (koenzym uridindifosfát, UDP)", en: "Epimerization example 1: glukosa ⇌ galaktosa, for which the book names uridindifosfát (uridine diphosphate, UDP) as the 'coenzyme'.", cn: "差向异构化实例1：葡萄糖⇌半乳糖，教材指出其「辅酶」为尿苷二磷酸（UDP）。" },
    { cz: "příklad 2: ribulosa-5-fosfát ⇌ xylulosa-5-fosfát", en: "Epimerization example 2: ribulosa-5-fosfát ⇌ xylulosa-5-fosfát.", cn: "差向异构化实例2：核酮糖-5-磷酸⇌木酮糖-5-磷酸。" },
    { cz: "izomerace = přesun karbonylové skupiny na sousední C (aldosa⇌ketosa)", en: "IZOMERACE (isomerization): the shift of the carbonyl group to an adjacent carbon atom, i.e. the interconversion of an aldose and a ketose form.", cn: "异构化：羰基向相邻碳原子的转移，即醛糖与酮糖形式的相互转化。" },
    { cz: "příklad 1: glukosa ⇌ fruktosa", en: "Isomerization example 1: glukosa ⇌ fruktosa (the book gives this pair in plain, non-phosphorylated form).", cn: "异构化实例1：葡萄糖⇌果糖（教材以未磷酸化的普通形式给出这一对）。" },
    { cz: "příklad 2: glyceraldehyd-3-fosfát ⇌ dihydroxyacetonfosfát", en: "Isomerization example 2: glyceraldehyd-3-fosfát ⇌ dihydroxyacetonfosfát (given in phosphorylated form).", cn: "异构化实例2：3-磷酸甘油醛⇌磷酸二羟丙酮（以磷酸化形式给出）。" }
  ],
  terms: [
    { cz: "epimerace", en: "epimerization", cn: "差向异构化", def_en: "A change in steric arrangement (hydroxyl position) at one carbon atom; book examples are glucose⇌galactose (coenzyme UDP) and ribulose-5-P⇌xylulose-5-P.", def_cn: "一个碳原子上立体构型（羟基位置）的改变；教材实例为葡萄糖⇌半乳糖（辅酶UDP）和核酮糖-5-磷酸⇌木酮糖-5-磷酸。" },
    { cz: "izomerace", en: "isomerization", cn: "异构化", def_en: "The shift of a carbonyl group to an adjacent carbon (aldose⇌ketose interconversion); book examples are glucose⇌fructose and glyceraldehyde-3-P⇌dihydroxyacetone-P.", def_cn: "羰基向相邻碳原子的转移（醛糖⇌酮糖的相互转化）；教材实例为葡萄糖⇌果糖和3-磷酸甘油醛⇌磷酸二羟丙酮。" },
    { cz: "uridindifosfát (UDP)", en: "uridine diphosphate (UDP)", cn: "尿苷二磷酸（UDP）", def_en: "The 'coenzyme' the book names for the glucose⇌galactose epimerization reaction.", def_cn: "教材指出用于葡萄糖⇌半乳糖差向异构化反应的「辅酶」。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What 'coenzyme' does the book name for the glucose ⇌ galactose epimerization reaction?",
      q_cn: "教材指出葡萄糖⇌半乳糖差向异构化反应的「辅酶」是什么？",
      options: ["NAD+", "Uridine diphosphate (UDP)", "NADP+", "Coenzyme A"],
      answer: 1,
      why_en: "The book states 'koenzymem je uridindifosfát' (the coenzyme is uridine diphosphate) directly alongside the glucose⇌galactose example -- not any of the redox coenzymes used elsewhere in this chapter's oxidation reactions.",
      why_cn: "教材在葡萄糖⇌半乳糖实例旁直接指出「辅酶为尿苷二磷酸」——而不是本章氧化反应中使用的其他氧化还原辅酶。"
    },
    {
      type: "mcq",
      q_en: "How does the book define isomerization, as distinct from epimerization, in this section?",
      q_cn: "在本节中，教材如何定义异构化以区别于差向异构化？",
      options: [
        "Isomerization is the shift of the carbonyl group to an adjacent carbon (aldose⇌ketose); epimerization is a change of hydroxyl position at one carbon without moving the carbonyl",
        "Isomerization always adds a phosphate group; epimerization never does",
        "Isomerization changes the total carbon count; epimerization does not",
        "They are defined identically by the book"
      ],
      answer: 0,
      why_en: "The book defines epimerization as a change of steric arrangement (hydroxyl position) at one carbon, and isomerization specifically as the shift of the carbonyl group to a neighboring carbon atom (aldose⇌ketose) -- a distinct mechanism. Neither reaction changes total carbon count (ruling out C), and phosphorylation is incidental to the specific examples chosen, not part of either definition (ruling out B).",
      why_cn: "教材将差向异构化定义为一个碳原子上立体构型（羟基位置）的改变，而将异构化specifically定义为羰基向相邻碳原子的转移（醛糖⇌酮糖）——这是不同的机制。两种反应都不改变碳原子总数（排除C），磷酸化只是所选具体实例的偶然特征，并非定义的一部分（排除B）。"
    },
    {
      type: "short",
      q_en: "Give the book's two examples of epimerization and two examples of isomerization.",
      q_cn: "列出教材中差向异构化和异构化各两个实例。",
      accept: ["glucose", "galactose", "ribulose", "xylulose", "fructose", "glyceraldehyde", "dihydroxyacetone", "葡萄糖", "半乳糖", "核酮糖", "木酮糖", "果糖", "甘油醛", "二羟丙酮"],
      answer_en: "Epimerization: glucose⇌galactose (coenzyme UDP), and ribulose-5-phosphate⇌xylulose-5-phosphate. Isomerization: glucose⇌fructose, and glyceraldehyde-3-phosphate⇌dihydroxyacetone phosphate.",
      answer_cn: "差向异构化：葡萄糖⇌半乳糖（辅酶UDP），以及核酮糖-5-磷酸⇌木酮糖-5-磷酸。异构化：葡萄糖⇌果糖，以及3-磷酸甘油醛⇌磷酸二羟丙酮。"
    }
  ],
  oral: {
    q_en: "Define epimerization and isomerization as the book uses these terms in 7.6.1, and give the book's worked examples of each.",
    q_cn: "请按照教材7.6.1节的用法定义差向异构化与异构化，并给出教材对每种反应给出的实例。",
    model_en: "This subsection gives concrete worked examples for the first of the three sugar-interconversion types introduced just before it. Epimerization is a change in steric arrangement at just one carbon atom, meaning the position of a hydroxyl group flips, and the book illustrates it two ways: glucose interconverting with galactose, where the coenzyme involved is named as uridine diphosphate, and ribulose-5-phosphate interconverting with xylulose-5-phosphate. Isomerization is a related but mechanistically distinct idea -- it's specifically the shift of the carbonyl group itself to a neighboring carbon atom, which is exactly what converts an aldose into a ketose or back again. The book gives two examples here too: glucose interconverting with fructose, given in its plain, non-phosphorylated form, and glyceraldehyde-3-phosphate interconverting with dihydroxyacetone phosphate, given in phosphorylated form.",
    checklist: [
      "Defined epimerization as a change in steric arrangement/OH position at one carbon",
      "Gave both epimerization examples: glucose⇌galactose (UDP) and ribulose-5-P⇌xylulose-5-P",
      "Defined isomerization as a shift of the carbonyl group to an adjacent carbon (aldose⇌ketose)",
      "Gave both isomerization examples: glucose⇌fructose and glyceraldehyde-3-P⇌DHAP",
      "Noted the two isomerization examples differ in phosphorylation state as printed"
    ]
  }
},

{
  id: "7-6-2",
  book: "cz",
  topicKey: "pentose-phosphate-pathway",
  chapter: 7,
  section: "7.6.2",
  czTitle: "Oxidace a dekarboxylace glukosy",
  enTitle: "Oxidation and decarboxylation of glucose",
  cnTitle: "葡萄糖的氧化与脱羧",
  pages: [160, 161],
  coverage: "full",
  coverageNote: "The full '7.6.2 Oxidace a dekarboxylace glukosy' section read directly: the C-1-oxidation paragraph at the bottom of page 160 (glucose-6-phosphate → NADPH + 6-fosfoglukonolakton → 6-fosfoglukonát → [an intermediate that is the 6-phosphate ester of 3-oxoglukonát] → CO2 + ribulosa-5-fosfát, cross-referenced by the book forward to ch. 7.7's 'Dvě cesty k pentosafosfátům'), plus the C-6-oxidation paragraph beginning at the bottom of page 160 and continuing onto page 161 (glucose → glukuronát → detoxification/urinary-excretion role → further breakdown: NADPH-dependent reduction of the aldehyde group to L-gulonát → branch to askorbát biosynthesis via L-gulonolakton, or NAD+-dependent dehydrogenation at C-3 to the β-oxo acid 3-keto-L-gulonát → decarboxylation to L-xylulosa → NADPH-dependent reduction to xylitol → ['opětná dehydrogenace', not re-labelled with a coenzyme in the prose] to D-xylulosa → phosphorylation to D-xylulosa-5-fosfát, feeding into transketolasové reakce), verified directly against the page-161 pathway figure. The figure additionally labels a branch from L-xylulosa as occurring 'při pentosurii v moči' (in pentosuria, in the urine) -- the book does not explain the underlying enzymatic defect in the prose on this page, so this node reports only what the figure itself shows/labels, not an outside explanation of pentosuria's mechanism.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Oxidising glucose at C-1 and losing CO₂ is the pentose phosphate pathway, and its NADPH is not for making ATP — it is the reducing power that biosynthesis spends.", cn: "在 C-1 处氧化葡萄糖、再丢掉一个 CO₂，这就是磷酸戊糖途径；它产出的 NADPH **不是用来造 ATP 的**，而是生物合成所花费的还原力。" },
  summary: {
    en: "Glucose can be oxidized either at C-1 or at C-6, in both cases followed by loss of CO2 -- though the book treats these two cases very differently in depth, calling the C-1 case 'významnější' (more significant). OXIDATION AT C-1: from glucose-6-phosphate, hydrogen is transferred to NADP+ (generating NADPH) and 6-FOSFOGLUKONOLAKTON (6-phosphogluconolactone) is formed; this readily hydrolyzes to 6-FOSFOGLUKONÁT (6-phosphogluconate). 6-Phosphogluconate is further dehydrogenated (again generating NADPH), with simultaneous loss of CO2. The pentose RIBULOSA-5-FOSFÁT (ribulose-5-phosphate) arises via an intermediate -- the 6-phosphate ester of 3-OXOGLUKONÁT (3-oxogluconate) -- which, being a β-oxo acid, decarboxylates readily (cross-referenced forward to 'Dvě cesty k pentosafosfátům,' ch. 7.7). OXIDATION AT C-6 produces GLUKURONÁT (glucuronate); this compound can bind various undesirable substances, whether the body's own or foreign, which are then excreted in this form in the urine. Glucuronate can also be further broken down: first its aldehyde group is enzymatically reduced using NADPH + H+ as the hydrogen donor, giving L-GULONÁT -- this is how the transition to the L-series occurs, since the carbon chain effectively 'flips' (what was C-6 in glucuronate becomes C-1 in gulonate). From L-gulonate, ASKORBÁT (ascorbate) biosynthesis branches off via L-gulonolakton; alternatively, L-gulonate is dehydrogenated at C-3 (using NAD+), and the resulting β-oxo acid, 3-KETO-L-GULONÁT, decarboxylates to give L-XYLULOSA. L-xylulose can subsequently pass -- after reduction to XYLITOL, and a further, 'renewed' dehydrogenation -- into D-XYLULOSA, which is phosphorylated to D-xylulosa-5-fosfát and can enter transketolase reactions. The book's own pathway figure additionally marks that, in pentosuria, it is this L-xylulose that appears in the urine.",
    cn: "葡萄糖既可在C-1位氧化，也可在C-6位氧化，两种情况下之后都会脱去CO2——但教材对这两种情况的处理深度差异很大，称C-1氧化「更为重要」。C-1位氧化：由葡萄糖-6-磷酸出发，氢被转移给NADP+（生成NADPH），生成6-磷酸葡萄糖酸内酯；该内酯很容易水解为6-磷酸葡萄糖酸。6-磷酸葡萄糖酸进一步脱氢（再次生成NADPH），同时脱去CO2。戊糖——核酮糖-5-磷酸——通过一个中间体产生，该中间体是3-氧代葡萄糖酸的6-磷酸酯，作为β-氧代酸很容易脱羧（前瞻引用第7.7节「通向戊糖磷酸的两条途径」）。C-6位氧化生成葡萄糖醛酸盐；该化合物能结合各种不需要的物质，无论是体内自身的还是外来的，随后以这种形式随尿液排出。葡萄糖醛酸盐也可以进一步分解：首先其醛基在NADPH+H+作为氢供体的作用下被酶促还原，生成L-古洛糖酸——由此实现向L系的转变，因为碳链实际上「翻转」了（葡萄糖醛酸盐中的C-6变成了古洛糖酸中的C-1）。由L-古洛糖酸出发，一条支路经L-古洛糖酸内酯生成抗坏血酸；另一条支路是L-古洛糖酸在C-3位脱氢（借助NAD+），生成的β-氧代酸——3-酮-L-古洛糖酸——发生脱羧，生成L-木酮糖。L-木酮糖随后可以（经还原生成木糖醇，再经一次「重新」脱氢）转变为D-木酮糖，后者被磷酸化为D-木酮糖-5-磷酸，可进入转酮醇酶反应。教材自己的途径图还标注，在戊糖尿症中，正是这种L-木酮糖出现在尿液中。"
  },
  points: [
    { cz: "glukosa oxiduje se na C-1 nebo C-6, pak CO2", en: "Glucose can be oxidized either at C-1 or at C-6; in both cases CO2 is subsequently cleaved off. The book calls the C-1 case the more significant of the two.", cn: "葡萄糖既可在C-1位氧化，也可在C-6位氧化；两种情况之后都会脱去CO2。教材称C-1位氧化是两者中更重要的一种。" },
    { cz: "C-1: G6P →(NADP+/NADPH)→ 6-fosfoglukonolakton →(hydrolýza)→ 6-fosfoglukonát", en: "C-1 oxidation: glucose-6-phosphate transfers hydrogen to NADP+ (yielding NADPH), forming 6-phosphogluconolactone, which readily hydrolyzes to 6-phosphogluconate.", cn: "C-1位氧化：葡萄糖-6-磷酸将氢转移给NADP+（生成NADPH），形成6-磷酸葡萄糖酸内酯，后者很容易水解为6-磷酸葡萄糖酸。" },
    { cz: "6-fosfoglukonát →(dehydrogenace, NADPH, -CO2)→ ribulosa-5-fosfát přes 3-oxoglukonát-6-fosfát", en: "6-Phosphogluconate is dehydrogenated (generating more NADPH) with simultaneous CO2 loss; ribulose-5-phosphate arises via the 6-phosphate ester of 3-oxogluconate, a β-oxo acid that decarboxylates readily (cross-ref ch. 7.7).", cn: "6-磷酸葡萄糖酸脱氢（再次生成NADPH），同时脱去CO2；核酮糖-5-磷酸经由3-氧代葡萄糖酸的6-磷酸酯这一中间体产生，该中间体作为β-氧代酸很容易脱羧（参见第7.7节）。" },
    { cz: "C-6: glukosa → glukuronát; váže cizorodé látky, vylučování močí", en: "C-6 oxidation produces glukuronát (glucuronate); this compound can bind various undesirable substances, whether the body's own or foreign, which are then excreted in this form in the urine.", cn: "C-6位氧化生成葡萄糖醛酸盐；该化合物能结合各种不需要的物质，无论是体内自身的还是外来的，随后以这种形式随尿液排出。" },
    { cz: "glukuronát →(NADPH+H+, redukce aldehydu)→ L-gulonát (C6→C1 'otočení' řetězce)", en: "Glucuronate's aldehyde group is enzymatically reduced using NADPH + H+ as hydrogen donor, giving L-gulonát -- the transition to the L-series occurs because the carbon chain effectively 'flips' (glucuronate's C-6 becomes gulonate's C-1).", cn: "葡萄糖醛酸盐的醛基在NADPH+H+作为氢供体的作用下被酶促还原，生成L-古洛糖酸——向L系的转变是因为碳链实际上「翻转」了（葡萄糖醛酸盐的C-6变成古洛糖酸的C-1）。" },
    { cz: "L-gulonát → L-gulonolakton → L-askorbát (biosyntéza)", en: "One branch from L-gulonate: → L-gulonolakton → L-askorbát (ascorbate biosynthesis branches off here).", cn: "L-古洛糖酸的一条支路：→L-古洛糖酸内酯→L-抗坏血酸（抗坏血酸的生物合成由此分出）。" },
    { cz: "L-gulonát →(NAD+, C-3 dehydrogenace)→ 3-keto-L-gulonát →(dekarboxylace)→ L-xylulosa", en: "The other branch: L-gulonate is dehydrogenated at C-3 (using NAD+), and the resulting β-oxo acid, 3-keto-L-gulonát, decarboxylates to give L-xylulosa.", cn: "另一条支路：L-古洛糖酸在C-3位脱氢（借助NAD+），生成的β-氧代酸3-酮-L-古洛糖酸发生脱羧，生成L-木酮糖。" },
    { cz: "L-xylulosa →(NADPH, redukce)→ xylitol →(opětná dehydrogenace)→ D-xylulosa →(fosforylace)→ D-xylulosa-5-P; 'při pentosurii v moči'", en: "L-xylulose is reduced (NADPH) to xylitol, then undergoes a further ('renewed') dehydrogenation to D-xylulose, which is phosphorylated to D-xylulose-5-phosphate and can enter transketolase reactions. The figure separately marks that in pentosuria, it is L-xylulose that appears in the urine.", cn: "L-木酮糖经还原（NADPH）生成木糖醇，再经一次「重新」脱氢转变为D-木酮糖，后者被磷酸化为D-木酮糖-5-磷酸，可进入转酮醇酶反应。图中还单独标注，在戊糖尿症中，出现在尿液中的正是L-木酮糖。" }
  ],
  terms: [
    { cz: "glukuronát", en: "glucuronate", cn: "葡萄糖醛酸盐", def_en: "The product of glucose oxidation at C-6; binds and helps excrete undesirable/foreign substances in the urine, and can be further broken down toward ascorbate or L-xylulose.", def_cn: "葡萄糖在C-6位氧化的产物；能结合并帮助将不需要的/外来的物质随尿液排出，也可进一步分解生成抗坏血酸或L-木酮糖。" },
    { cz: "L-gulonát", en: "L-gulonate", cn: "L-古洛糖酸", def_en: "Formed by NADPH-dependent reduction of glucuronate's aldehyde group; branches to ascorbate (via gulonolactone) or to L-xylulose (via 3-keto-L-gulonate).", def_cn: "由葡萄糖醛酸盐醛基经NADPH依赖性还原生成；可分支生成抗坏血酸（经古洛糖酸内酯）或L-木酮糖（经3-酮-L-古洛糖酸）。" },
    { cz: "L-askorbát", en: "L-ascorbate (vitamin C)", cn: "L-抗坏血酸（维生素C）", def_en: "Biosynthesized from L-gulonate via L-gulonolactone, per the book's pathway figure.", def_cn: "根据教材途径图，由L-古洛糖酸经L-古洛糖酸内酯生物合成。" },
    { cz: "D-xylulosa-5-fosfát", en: "D-xylulose-5-phosphate", cn: "D-木酮糖-5-磷酸", def_en: "The phosphorylated end product of the C-6 oxidation branch's L-xylulose→xylitol→D-xylulose sequence; enters transketolase reactions.", def_cn: "C-6氧化支路中L-木酮糖→木糖醇→D-木酮糖这一序列的磷酸化终产物；可进入转酮醇酶反应。" },
    { cz: "ribulosa-5-fosfát", en: "ribulose-5-phosphate", cn: "核酮糖-5-磷酸", def_en: "The pentose produced by the C-1 oxidation branch, via decarboxylation of the 6-phosphate ester of 3-oxogluconate.", def_cn: "由C-1氧化支路产生的戊糖，经3-氧代葡萄糖酸6-磷酸酯的脱羧生成。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which pathway intermediate does the book describe as a β-oxo acid that decarboxylates readily to yield ribulose-5-phosphate?",
      q_cn: "教材将哪种途径中间体描述为容易脱羧生成核酮糖-5-磷酸的β-氧代酸？",
      options: [
        "6-phosphogluconolactone",
        "The 6-phosphate ester of 3-oxogluconate",
        "Glucuronate",
        "3-keto-L-gulonate"
      ],
      answer: 1,
      why_en: "The book states ribulose-5-phosphate arises via an intermediate that is the 6-phosphate ester of 3-oxogluconate, which as a β-oxo acid decarboxylates readily. 6-Phosphogluconolactone is an earlier intermediate (before dehydrogenation); glucuronate and 3-keto-L-gulonate belong to the separate C-6-oxidation branch.",
      why_cn: "教材指出，核酮糖-5-磷酸通过一个中间体产生，该中间体是3-氧代葡萄糖酸的6-磷酸酯，作为β-氧代酸很容易脱羧。6-磷酸葡萄糖酸内酯是更早的中间体（脱氢之前）；葡萄糖醛酸盐和3-酮-L-古洛糖酸则属于另一条C-6氧化支路。"
    },
    {
      type: "mcq",
      q_en: "From L-gulonate, which two fates does the book's pathway figure show?",
      q_cn: "根据教材的途径图，L-古洛糖酸有哪两种去路？",
      options: [
        "Conversion to glucuronate, or direct excretion in urine",
        "Ascorbate biosynthesis (via L-gulonolactone), or C-3 dehydrogenation/decarboxylation toward L-xylulose",
        "Direct phosphorylation to D-xylulose-5-phosphate, or conversion back to glucose-6-phosphate",
        "Reduction to xylitol, or oxidation back to glucuronate"
      ],
      answer: 1,
      why_en: "The figure shows L-gulonate branching two ways: down to L-gulonolactone and then L-ascorbate, or via NAD+-dependent C-3 dehydrogenation to the β-oxo acid 3-keto-L-gulonate, which decarboxylates to L-xylulose. The other options either skip intermediate steps or misattribute reactions shown elsewhere in the figure.",
      why_cn: "图中显示L-古洛糖酸有两条支路：向下经L-古洛糖酸内酯生成L-抗坏血酸；或经NAD+依赖性C-3脱氢生成β-氧代酸3-酮-L-古洛糖酸，后者脱羧生成L-木酮糖。其余选项要么跳过了中间步骤，要么把图中其他反应张冠李戴。"
    },
    {
      type: "short",
      q_en: "Trace the pathway from D-glucuronate to D-xylulose-5-phosphate, naming each intermediate and coenzyme involved.",
      q_cn: "请描述从D-葡萄糖醛酸盐到D-木酮糖-5-磷酸的完整途径，写出涉及的每个中间体和辅酶。",
      accept: ["gulonate", "gulonolactone", "3-keto", "xylulose", "xylitol", "NADPH", "NAD+", "古洛糖酸", "木酮糖", "木糖醇"],
      answer_en: "D-glucuronate → (NADPH+H+, aldehyde reduction) → L-gulonate → (NAD+, C-3 dehydrogenation) → 3-keto-L-gulonate (β-oxo acid) → (decarboxylation) → L-xylulose → (NADPH, reduction) → xylitol → (renewed dehydrogenation) → D-xylulose → (phosphorylation) → D-xylulose-5-phosphate, which can enter transketolase reactions.",
      answer_cn: "D-葡萄糖醛酸盐→（NADPH+H+，醛基还原）→L-古洛糖酸→（NAD+，C-3脱氢）→3-酮-L-古洛糖酸（β-氧代酸）→（脱羧）→L-木酮糖→（NADPH，还原）→木糖醇→（重新脱氢）→D-木酮糖→（磷酸化）→D-木酮糖-5-磷酸，可进入转酮醇酶反应。"
    }
  ],
  oral: {
    q_en: "Explain how glucose is oxidized at C-1 and at C-6, tracing each pathway to its end products and noting the coenzymes and intermediates involved.",
    q_cn: "请解释葡萄糖在C-1位和C-6位的氧化途径，追踪各自的终产物，并说明涉及的辅酶与中间体。",
    model_en: "Glucose can be oxidized at either of two positions, C-1 or C-6, and in both cases a CO2 eventually gets cleaved off, though the book treats the C-1 route as the more significant one and goes into much more depth there. Starting from glucose-6-phosphate, oxidation at C-1 begins with hydrogen being transferred onto NADP-plus, generating NADPH, and forming 6-phosphogluconolactone; that lactone hydrolyzes easily into 6-phosphogluconate. A further dehydrogenation of 6-phosphogluconate generates a second round of NADPH, and simultaneously CO2 is lost, producing the pentose ribulose-5-phosphate -- and the intermediate on the way there is specifically the 6-phosphate ester of 3-oxogluconate, which decarboxylates easily precisely because it's a beta-oxo acid. Oxidation at C-6, by contrast, produces glucuronate, and glucuronate has a very practical role: it can bind unwanted substances, whether they're the body's own metabolites or foreign compounds, and get them excreted in the urine in that bound form. But glucuronate doesn't stop there -- it can be broken down further. First its aldehyde group gets enzymatically reduced, using NADPH plus H-plus as the hydrogen donor, giving L-gulonate; what's happening chemically here is that the carbon chain effectively flips end for end, so the carbon that was C-6 in glucuronate becomes C-1 in gulonate, which is exactly how you land in the L-series. From L-gulonate there are two possible fates: one branch goes through L-gulonolactone to ascorbate, vitamin C; the other branch dehydrogenates gulonate at C-3, using NAD-plus this time, producing a beta-oxo acid called 3-keto-L-gulonate, which decarboxylates to L-xylulose. L-xylulose then gets reduced by NADPH into xylitol, undergoes a further dehydrogenation, and comes out the other side as D-xylulose, which gets phosphorylated to D-xylulose-5-phosphate and feeds into transketolase reactions. The book's figure also notes, separately, that in pentosuria it's this L-xylulose that shows up in the urine.",
    checklist: [
      "Stated glucose oxidizes at C-1 (more significant) or C-6, both followed by CO2 loss",
      "Traced C-1: G6P→NADPH→6-phosphogluconolactone→6-phosphogluconate→(dehydrogenation+CO2)→ribulose-5-P via 3-oxogluconate-6-P",
      "Traced C-6: glucose→glucuronate, its detox/urinary-excretion role",
      "Traced glucuronate→L-gulonate (NADPH, chain-flip to L-series)",
      "Named both L-gulonate branches: ascorbate (via gulonolactone) and 3-keto-L-gulonate→L-xylulose",
      "Traced L-xylulose→xylitol→D-xylulose→D-xylulose-5-P, and the pentosuria note on L-xylulose in urine"
    ]
  }
},

{
  id: "7-6-3",
  book: "cz",
  topicKey: "pentose-phosphate-pathway",
  chapter: 7,
  section: "7.6.3",
  czTitle: "Přenos tříuhlíkových nebo dvouuhlíkových štěpů",
  enTitle: "Transfer of three-carbon or two-carbon fragments",
  cnTitle: "三碳或二碳片段的转移",
  pages: [161],
  coverage: "full",
  coverageNote: "The '7.6.3' section on page 161 read in full: the Aldolasa (aldolase) paragraph with its worked fructose-1,6-bisphosphate cleavage figure (drawn with an explicit double-headed reaction arrow, i.e. shown as reversible), and the Transaldolasa (transaldolase) paragraph immediately after. Page 161 is the last page of this drafting pass's assigned range (bottom of p.155 through p.161); whatever text follows on page 162 is out of scope for this node and this pass.",
  cnNote: { topic: "二", title: "糖类 (笔记 pp.5-10, read at topic-overview level: monosaccharide structure/stereochemistry, oligo/polysaccharides, glycoconjugates all confirmed present — not yet cross-checked point-by-point against this CZ subsection)", status: "mapped" },
  mustKnow: { en: "Aldolase splits one hexose into two triose phosphates — the cut every sugar must survive before it can be burned, and the book restricts it to exactly that: hexose <-> 2 trioses. The other enzyme in this section is TRANSALDOLASE, which transfers a three-carbon dihydroxyacetone residue and needs no coenzyme at all. Both reshuffle chain length with no oxidation anywhere.", cn: "aldolase 把一个己糖劈成两个丙糖磷酸——每个糖在被烧掉之前都得过这一刀；教材把它严格限定在这一步：己糖 ⇌ 2 个丙糖。本节的另一个酶是 **TRANSALDOLASE**，它转移的是一个**三碳**的二羟丙酮残基，而且完全不需要辅酶。两者都是在不发生任何氧化的前提下重排碳链长度。" },
  summary: {
    en: "Three-carbon fragments can arise from the cleavage of hexoses. ALDOLASA (aldolase) cleaves FRUKTOSA-1,6-BISFOSFÁT (fructose-1,6-bisphosphate) into DIHYDROXYACETONFOSFÁT (dihydroxyacetone phosphate) and GLYCERALDEHYD-3-FOSFÁT (glyceraldehyde-3-phosphate); the book's own figure draws this as an explicitly REVERSIBLE reaction (a double-headed arrow between substrate and products). Aldolase ONLY provides TRIOSAFOSFÁTY (triose phosphates) from a HEXOSE, and the reverse -- assembling a hexose from two trioses; it does not, per this section, do anything more general than that one specific interconversion. TRANSALDOLASA (transaldolase), by contrast, transfers a DIHYDROXYACETONE residue onto OTHER ALDOSES (i.e. it is not restricted to reconstituting the same fructose-1,6-bisphosphate/triose pair) -- and the book notes explicitly that this enzyme HAS NO COENZYME.",
    cn: "三碳片段可以由己糖裂解产生。醛缩酶（Aldolasa）将果糖-1,6-二磷酸裂解为磷酸二羟丙酮和3-磷酸甘油醛；教材自己的图将这一反应画成明确可逆的反应（底物与产物之间为双向箭头）。醛缩酶只能由己糖生成磷酸丙糖，反之亦然——即由两个磷酸丙糖重新组装成己糖；根据本节内容，它并不具备比这一特定相互转化更广泛的功能。相比之下，转醛醇酶（Transaldolasa）将二羟丙酮残基转移到其他醛糖上（即不局限于重新生成同样的果糖-1,6-二磷酸/丙糖对）——教材明确指出该酶不需要辅酶。"
  },
  points: [
    { cz: "aldolasa: fruktosa-1,6-bisfosfát ⇌ dihydroxyacetonfosfát + glyceraldehyd-3-fosfát", en: "ALDOLASA cleaves fructose-1,6-bisphosphate into dihydroxyacetone phosphate and glyceraldehyde-3-phosphate; the book's figure shows this reaction with an explicit double-headed (reversible) arrow.", cn: "醛缩酶将果糖-1,6-二磷酸裂解为磷酸二羟丙酮和3-磷酸甘油醛；教材的图以明确的双向箭头表示这是可逆反应。" },
    { cz: "aldolasa: pouze hexosa ⇌ 2 triosy", en: "Aldolase, per this section, ONLY provides trioses from a hexose (and the reverse, a hexose from two trioses) -- it is not shown here doing anything more general.", cn: "根据本节，醛缩酶只能由己糖生成（磷酸）丙糖，反之亦然（由两个丙糖重新组装成己糖）——本节并未说明它具有更广泛的功能。" },
    { cz: "transaldolasa: přenáší zbytek dihydroxyacetonu na JINÉ aldosy", en: "TRANSALDOLASA, by contrast, transfers a dihydroxyacetone residue onto OTHER aldoses -- a broader, less restricted fragment-transfer than aldolase's fixed hexose/triose interconversion.", cn: "相比之下，转醛醇酶将二羟丙酮残基转移到其他醛糖上——这是比醛缩酶固定的己糖/丙糖相互转化更广泛、限制更少的片段转移方式。" },
    { cz: "transaldolasa = enzym bez koenzymu", en: "The book explicitly notes that transaldolase has NO COENZYME.", cn: "教材明确指出转醛醇酶不需要辅酶。" }
  ],
  terms: [
    { cz: "aldolasa", en: "aldolase", cn: "醛缩酶", def_en: "The enzyme that reversibly cleaves fructose-1,6-bisphosphate into dihydroxyacetone phosphate and glyceraldehyde-3-phosphate.", def_cn: "可逆地将果糖-1,6-二磷酸裂解为磷酸二羟丙酮和3-磷酸甘油醛的酶。" },
    { cz: "transaldolasa", en: "transaldolase", cn: "转醛醇酶", def_en: "A coenzyme-free enzyme that transfers a dihydroxyacetone residue from one sugar onto a different aldose, more general than aldolase's fixed hexose/triose interconversion.", def_cn: "一种不需要辅酶的酶，能将二羟丙酮残基从一种糖转移到另一种（不同的）醛糖上，比醛缩酶固定的己糖/丙糖相互转化更具普遍性。" },
    { cz: "fruktosa-1,6-bisfosfát", en: "fructose-1,6-bisphosphate", cn: "果糖-1,6-二磷酸", def_en: "The hexose bisphosphate that aldolase reversibly cleaves into two triose phosphates.", def_cn: "醛缩酶可逆裂解为两个磷酸丙糖的己糖二磷酸。" },
    { cz: "triosafosfáty (dihydroxyacetonfosfát, glyceraldehyd-3-fosfát)", en: "triose phosphates (dihydroxyacetone phosphate, glyceraldehyde-3-phosphate)", cn: "磷酸丙糖（磷酸二羟丙酮、3-磷酸甘油醛）", def_en: "The two three-carbon phosphorylated products of aldolase's cleavage of fructose-1,6-bisphosphate.", def_cn: "醛缩酶裂解果糖-1,6-二磷酸生成的两种三碳磷酸化产物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What two products does aldolase generate by cleaving fructose-1,6-bisphosphate, per the book's figure?",
      q_cn: "根据教材的图，醛缩酶裂解果糖-1,6-二磷酸生成哪两种产物？",
      options: [
        "Dihydroxyacetone phosphate and glyceraldehyde-3-phosphate",
        "Ribulose-5-phosphate and xylulose-5-phosphate",
        "Glucose-6-phosphate and fructose-6-phosphate",
        "6-phosphogluconate and CO2"
      ],
      answer: 0,
      why_en: "The book's figure shows aldolase cleaving fructose-1,6-bisphosphate into dihydroxyacetone phosphate and glyceraldehyde-3-phosphate -- the other pairs listed belong to different reactions covered elsewhere in this chapter (epimerization and C-1/C-6 glucose oxidation).",
      why_cn: "教材的图显示醛缩酶将果糖-1,6-二磷酸裂解为磷酸二羟丙酮和3-磷酸甘油醛——其余选项中列出的产物对属于本章其他反应（差向异构化及葡萄糖C-1/C-6氧化）。"
    },
    {
      type: "mcq",
      q_en: "What key difference does the book draw between aldolase and transaldolase?",
      q_cn: "教材指出醛缩酶与转醛醇酶之间的关键区别是什么？",
      options: [
        "Aldolase only interconverts a hexose with two trioses; transaldolase transfers a dihydroxyacetone residue onto other aldoses more generally, and needs no coenzyme",
        "Aldolase needs NADPH as coenzyme; transaldolase needs NAD+",
        "Aldolase works only on pentoses; transaldolase works only on hexoses",
        "There is no difference -- they catalyze the identical reaction"
      ],
      answer: 0,
      why_en: "The book states aldolase 'poskytuje jen triosy z hexosy a obráceně' (only provides trioses from a hexose and vice versa), while transaldolase transfers a dihydroxyacetone residue onto other aldoses and explicitly has no coenzyme -- neither enzyme is described as using NADPH/NAD+ in this section, ruling out option B.",
      why_cn: "教材指出醛缩酶「只能由己糖生成丙糖，反之亦然」，而转醛醇酶则将二羟丙酮残基转移到其他醛糖上，且明确不需要辅酶——本节中两种酶均未被描述为使用NADPH/NAD+，因此排除选项B。"
    },
    {
      type: "short",
      q_en: "Does aldolase's fructose-1,6-bisphosphate cleavage reaction, as drawn in the book, run in only one direction? Explain, and name the enzyme that generalizes fragment transfer beyond simple hexose/triose interconversion.",
      q_cn: "教材所绘的醛缩酶裂解果糖-1,6-二磷酸反应是否只朝一个方向进行？请解释，并说出将片段转移能力推广到简单己糖/丙糖相互转化之外的酶的名称。",
      accept: ["reversible", "double-headed arrow", "transaldolase", "可逆", "双向箭头", "转醛醇酶"],
      answer_en: "No -- the book's figure draws the aldolase reaction with an explicit double-headed arrow, i.e. it is reversible: aldolase can cleave fructose-1,6-bisphosphate into two triose phosphates, or assemble the hexose bisphosphate back from those same two trioses. Transaldolase is the enzyme that generalizes fragment transfer further, moving a dihydroxyacetone residue onto other aldoses rather than only reconstituting the same hexose/triose pair.",
      answer_cn: "不是——教材的图以明确的双向箭头表示醛缩酶反应是可逆的：醛缩酶既能将果糖-1,6-二磷酸裂解为两个磷酸丙糖，也能由这两个丙糖重新组装成己糖二磷酸。转醛醇酶则是将片段转移能力进一步推广的酶，它能将二羟丙酮残基转移到其他醛糖上，而不仅限于重新生成同样的己糖/丙糖对。"
    }
  ],
  oral: {
    q_en: "Explain how three-carbon fragments arise from hexoses, contrasting aldolase's reaction with transaldolase's broader fragment-transfer role.",
    q_cn: "请解释三碳片段如何由己糖产生，并对比醛缩酶的反应与转醛醇酶更广泛的片段转移作用。",
    model_en: "This subsection covers the third of the book's three sugar-interconversion mechanisms: transferring three-carbon or two-carbon fragments from one sugar to another. The concrete example given is aldolase, which cleaves fructose-1,6-bisphosphate into two three-carbon phosphates, dihydroxyacetone phosphate and glyceraldehyde-3-phosphate -- and the book draws this with a double-headed arrow, making explicit that the reaction runs both ways: aldolase can just as easily reassemble those two trioses back into the hexose bisphosphate. But the book is also careful to point out a limitation: aldolase only ever provides trioses from a hexose, and the reverse, nothing more general than that specific pairing. Transaldolase is presented as the more flexible enzyme by contrast -- instead of being locked into that one hexose/triose interconversion, it transfers a dihydroxyacetone residue onto other aldoses entirely, which is a much more general kind of fragment transfer. And one more detail worth remembering: transaldolase has no coenzyme at all.",
    checklist: [
      "Named aldolase's reaction: fructose-1,6-bisphosphate ⇌ DHAP + glyceraldehyde-3-phosphate",
      "Noted the reaction is explicitly reversible per the book's double-headed arrow",
      "Stated aldolase's limitation: only hexose⇌2 trioses, nothing more general",
      "Contrasted transaldolase: transfers dihydroxyacetone residue onto OTHER aldoses",
      "Noted transaldolase has no coenzyme"
    ]
  }
},

{
  id: "7-7-1",
  book: "cz",
  topicKey: "pentose-phosphate-pathway",
  chapter: 7,
  section: "7.7",
  czTitle: "Dvě cesty k pentosafosfátům — oxidační pentosafosfátová cesta",
  enTitle: "Two routes to pentose phosphates — the oxidative pentose phosphate pathway",
  cnTitle: "通向戊糖磷酸的两条途径——氧化磷酸戊糖途径",
  pages: [162, 163],
  coverage: "full",
  coverageNote: "Page 162 read in full from the '7.7 Dvě cesty k pentosafosfátům' heading through the oxidative-pathway paragraph and its accompanying figure (glukosa-6-fosfát -> lactone -> 6-fosfoglukonát -> ribulosa-5-fosfát), plus the opening two sentences of p.163 that complete the same figure's CO2-release step. NOTE ON PAGE 162's TOP HALF (out of scope for this node): the top third of p.162 is the tail end of section 7.6 (sugar-interconversion / transketolase-transaldolase introduction, prior to the '7.7' heading) — it shows the reaction sedoheptulosa-7-fosfát + glyceraldehyd-3-fosfát <=> (transaldolasa) <=> erythrosa-4-fosfát + fruktosa-6-fosfát, followed by one sentence defining transketolase ('Dvouuhlíkový fragment - \"aktivní glykolaldehyd\" se přenáší transketolasou. Koenzymem je thiamindifosfát.'). This belongs to section 7.6, not 7.7, and is reported here only for boundary-checking against whichever node covers pp.156-161/7.6 — it is NOT treated as this node's own content, though the thiamine-diphosphate coenzyme fact is referenced below in the terms list since it is directly relevant to the transketolase step used later in 7-7-2. Figure detail verified by zoomed re-read: the book explicitly labels only the first two enzymes in the oxidative-pathway figure ('D-glukosa-6-fosfátdehydrogenasa' and 'laktonasa'); the third arrow (6-fosfoglukonát -> beta-keto intermediate -> ribulosa-5-fosfát + CO2) carries NO enzyme name anywhere in the text or the figure — the book only describes it as a further oxidation to a beta-keto acid that decarboxylates, without ever naming '6-fosfoglukonátdehydrogenasa' (the standard name in other textbooks). This omission is the book's own choice, not an omission introduced by this drafting pass.",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记页码约139，仅凭标题推测，未直接核对)", status: "partial" },
  mustKnow: { en: "The pathway makes two things for two unrelated jobs: NADPH for biosynthetic reductions, and ribose-5-phosphate for nucleotides. A cell often needs one without the other — which is exactly why a second, non-oxidative route exists.", cn: "这条途径产出两样东西，服务于两件互不相干的工作：NADPH 用于生物合成中的还原，核糖-5-磷酸用于核苷酸。细胞常常只需要其中一样——**这正是第二条不产 NADPH 的路线存在的理由。**" },
  summary: {
    en: "Section 7.7 opens by stating that the pentose phosphate pathways generate, in the cytosol, two products with distinct uses: NADPH, used for reductions in biosynthetic processes, and ribose-5-phosphate, used for synthesis of RNA, DNA, and nucleotide coenzymes. The book describes 'two routes' to pentose phosphates. The first, the OXIDATIVE pentose phosphate pathway, begins with dehydrogenation of glucose-6-phosphate (by D-glucose-6-phosphate dehydrogenase) forming a lactone, which is hydrolyzed (by lactonase) to 6-phosphogluconate. This is further oxidized to a beta-keto acid, which decarboxylates to give ribulose-5-phosphate, releasing CO2. NADP+ is the electron acceptor for BOTH oxidation steps (the initial dehydrogenation and the 6-phosphogluconate oxidation), so 2 NADPH are generated per glucose-6-phosphate that enters this branch. The final step is isomerization of ribulose-5-phosphate (a ketose) to ribose-5-phosphate (an aldose).",
    cn: "第7.7节开篇指出，戊糖磷酸途径在细胞质中生成两种用途不同的产物：NADPH，用于生物合成过程中的还原反应；核糖-5-磷酸，用于RNA、DNA和核苷酸辅酶的合成。教材描述了通向戊糖磷酸的「两条途径」。第一条，氧化性磷酸戊糖途径，始于葡萄糖-6-磷酸的脱氢（由D-葡萄糖-6-磷酸脱氢酶催化），生成一个内酯，该内酯被水解（由内酯酶催化）生成6-磷酸葡糖酸。此物进一步被氧化为一个β-酮酸，该酮酸脱羧生成核酮糖-5-磷酸，同时释放CO2。两步氧化（最初的脱氢和6-磷酸葡糖酸的氧化）中电子受体都是NADP+，因此每分子进入此支路的葡萄糖-6-磷酸生成2分子NADPH。最后一步是核酮糖-5-磷酸（酮糖）异构化为核糖-5-磷酸（醛糖）。"
  },
  points: [
    { cz: "pentosafosfátové cesty -> NADPH + ribosa-5-fosfát (cytosol)", en: "The pentose phosphate pathways generate, in the CYTOSOL, two products with distinct uses: NADPH (used for reductions in biosynthetic processes) and ribose-5-phosphate (used for synthesis of RNA, DNA, and nucleotide coenzymes).", cn: "磷酸戊糖途径在细胞质中生成两种用途不同的产物：NADPH（用于生物合成过程中的还原反应）和核糖-5-磷酸（用于RNA、DNA及核苷酸辅酶的合成）。" },
    { cz: "oxidační cesta, krok 1: G6P-dehydrogenasa -> lakton", en: "Step 1 of the oxidative branch: D-glucose-6-phosphate dehydrogenase dehydrogenates glucose-6-phosphate, forming a LACTONE (a cyclic ester) and reducing NADP+ to NADPH+H+.", cn: "氧化支路第1步：D-葡萄糖-6-磷酸脱氢酶使葡萄糖-6-磷酸脱氢，生成一个内酯（环状酯），同时将NADP+还原为NADPH+H+。" },
    { cz: "oxidační cesta, krok 2: laktonasa -> 6-fosfoglukonát", en: "Step 2: lactonase hydrolyzes the lactone to 6-PHOSPHOGLUCONATE (an open-chain carboxylic acid).", cn: "第2步：内酯酶将内酯水解为6-磷酸葡糖酸（开链羧酸）。" },
    { cz: "oxidační cesta, krok 3: 6-fosfoglukonát -> beta-oxokyselina -> ribulosa-5-fosfát + CO2 (enzym nejmenován)", en: "Step 3 (enzyme NOT named by the book): 6-phosphogluconate is further oxidized to a beta-keto acid (again reducing NADP+ to NADPH+H+), which then DECARBOXYLATES, releasing CO2 and giving ribulose-5-phosphate. NADP+ is the electron acceptor for BOTH this oxidation and the step-1 oxidation, so the oxidative branch nets 2 NADPH per glucose-6-phosphate.", cn: "第3步（教材未命名此酶）：6-磷酸葡糖酸进一步被氧化为一个β-酮酸（同样将NADP+还原为NADPH+H+），随后该酮酸脱羧，释放CO2，生成核酮糖-5-磷酸。这一步和第1步的氧化，电子受体都是NADP+，因此氧化支路每分子葡萄糖-6-磷酸净生成2分子NADPH。" },
    { cz: "oxidační cesta, krok 4: izomerace ribulosa-5-P -> ribosa-5-P (ketosa->aldosa)", en: "Final step: ribulose-5-phosphate (a KETOSE) is isomerized to ribose-5-phosphate (an ALDOSE) — the pathway's other characteristic product besides NADPH.", cn: "最后一步：核酮糖-5-磷酸（酮糖）异构化为核糖-5-磷酸（醛糖）——这是该途径除NADPH之外的另一特征产物。" },
    { cz: "enzym kroku 3 není v knize pojmenován", en: "Honesty note: unlike steps 1 and 2, the book gives NO enzyme name anywhere (neither in the running text nor in the figure) for the oxidative-decarboxylation step that converts 6-phosphogluconate to ribulose-5-phosphate — this is the book's own presentation, not an omission introduced by this drafting pass.", cn: "诚实说明：与第1、2步不同，教材在正文和插图中都没有给出将6-磷酸葡糖酸转化为核酮糖-5-磷酸这一氧化脱羧步骤的酶名——这是教材本身的呈现方式，并非本次编写时的遗漏。" }
  ],
  terms: [
    { cz: "pentosafosfátová cesta (oxidační)", en: "oxidative pentose phosphate pathway", cn: "氧化磷酸戊糖途径", def_en: "The branch of the pentose phosphate pathway that oxidizes glucose-6-phosphate via a lactone and 6-phosphogluconate intermediate, generating 2 NADPH and releasing 1 CO2 to yield ribulose-5-phosphate, then ribose-5-phosphate.", def_cn: "磷酸戊糖途径中氧化葡萄糖-6-磷酸的支路，经内酯和6-磷酸葡糖酸中间体，生成2分子NADPH并释放1分子CO2，得到核酮糖-5-磷酸，再转化为核糖-5-磷酸。" },
    { cz: "D-glukosa-6-fosfátdehydrogenasa", en: "D-glucose-6-phosphate dehydrogenase", cn: "D-葡萄糖-6-磷酸脱氢酶", def_en: "Catalyzes the first, rate-committing oxidation of the pathway: glucose-6-phosphate + NADP+ -> lactone + NADPH + H+.", def_cn: "催化该途径的第一步、决定方向的氧化反应：葡萄糖-6-磷酸+NADP+ -> 内酯+NADPH+H+。" },
    { cz: "laktonasa", en: "lactonase", cn: "内酯酶", def_en: "Hydrolyzes the glucono-lactone produced by G6P dehydrogenase to the open-chain acid 6-phosphogluconate.", def_cn: "将G6P脱氢酶生成的葡糖酸内酯水解为开链酸6-磷酸葡糖酸。" },
    { cz: "6-fosfoglukonát", en: "6-phosphogluconate", cn: "6-磷酸葡糖酸", def_en: "The open-chain product of lactonase; further oxidized and decarboxylated (enzyme unnamed by the book) to ribulose-5-phosphate + CO2, with a second NADPH generated.", def_cn: "内酯酶作用生成的开链产物；进一步被氧化脱羧（教材未命名该酶）生成核酮糖-5-磷酸+CO2，同时生成第二分子NADPH。" },
    { cz: "D-ribulosa-5-fosfát", en: "D-ribulose-5-phosphate", cn: "D-核酮糖-5-磷酸", def_en: "The ketose product of the oxidative branch's decarboxylation step; isomerized to ribose-5-phosphate as the pathway's final step.", def_cn: "氧化支路脱羧步骤生成的酮糖产物；作为该途径最后一步异构化为核糖-5-磷酸。" },
    { cz: "thiamindifosfát (koenzym transketolasy)", en: "thiamine diphosphate (transketolase's coenzyme)", cn: "焦磷酸硫胺素（转酮醇酶的辅酶）", def_en: "Stated on p.162 (in the section-7.6 material immediately preceding 7.7) as the coenzyme by which transketolase carries a two-carbon 'active glycolaldehyde' fragment — directly relevant background for the transketolase reactions used in 7.7's non-oxidative branch.", def_cn: "第162页（紧接7.7之前的7.6节内容）指出，转酮醇酶借助此辅酶转运二碳的「活性乙醇醛」片段——这是理解7.7节非氧化支路中转酮醇酶反应的直接相关背景。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the oxidative pentose phosphate pathway, what is the electron acceptor for BOTH oxidation steps (glucose-6-phosphate dehydrogenation and 6-phosphogluconate oxidative decarboxylation)?",
      q_cn: "在氧化磷酸戊糖途径中，两步氧化反应（葡萄糖-6-磷酸脱氢和6-磷酸葡糖酸氧化脱羧）的电子受体是什么？",
      options: ["NAD+", "NADP+", "FAD", "CoA-SH"],
      answer: 1,
      why_en: "The book states explicitly: 'Akceptorem elektronu je u obou oxidací NADP+' — NADP+ is the acceptor for both oxidations, which is exactly why this branch nets 2 NADPH (not NADH) per glucose-6-phosphate.",
      why_cn: "教材明确指出：「两步氧化的电子受体都是NADP+」——正因如此，该支路每分子葡萄糖-6-磷酸净生成2分子NADPH（而非NADH）。"
    },
    {
      type: "mcq",
      q_en: "What are the two lettered intermediates between glucose-6-phosphate and ribulose-5-phosphate in the oxidative branch, in order?",
      q_cn: "在氧化支路中，从葡萄糖-6-磷酸到核酮糖-5-磷酸之间依次经过哪两个中间产物？",
      options: [
        "6-phosphogluconate, then a lactone",
        "A lactone, then 6-phosphogluconate",
        "Ribose-5-phosphate, then a lactone",
        "Fructose-6-phosphate, then 6-phosphogluconate"
      ],
      answer: 1,
      why_en: "The order is: glucose-6-phosphate -> (G6P dehydrogenase) -> lactone -> (lactonase, hydrolysis) -> 6-phosphogluconate -> (unnamed enzyme, oxidative decarboxylation) -> ribulose-5-phosphate. Option A reverses the two intermediates.",
      why_cn: "顺序为：葡萄糖-6-磷酸->（G6P脱氢酶）->内酯->（内酯酶，水解）->6-磷酸葡糖酸->（教材未命名的酶，氧化脱羧）->核酮糖-5-磷酸。选项A把两个中间产物顺序颠倒了。"
    },
    {
      type: "short",
      q_en: "Name the two products of the pentose phosphate pathway that the book says are generated in the cytosol, and state what each is used for.",
      q_cn: "教材指出磷酸戊糖途径在细胞质中生成哪两种产物？各自的用途是什么？",
      accept: ["NADPH", "reduction", "biosynthesis", "ribose-5-phosphate", "RNA", "DNA", "nucleotide", "还原", "生物合成", "核糖", "核苷酸"],
      answer_en: "NADPH, used for reductions in biosynthetic processes, and ribose-5-phosphate, used for synthesis of RNA, DNA, and nucleotide coenzymes.",
      answer_cn: "NADPH，用于生物合成过程中的还原反应；核糖-5-磷酸，用于RNA、DNA及核苷酸辅酶的合成。"
    }
  ],
  oral: {
    q_en: "Describe the oxidative pentose phosphate pathway: its two products, and each step from glucose-6-phosphate to ribose-5-phosphate.",
    q_cn: "请描述氧化磷酸戊糖途径：它的两种产物是什么？从葡萄糖-6-磷酸到核糖-5-磷酸经过哪些步骤？",
    model_en: "The pentose phosphate pathways, running in the cytosol, exist to generate two things the cell needs for different purposes: NADPH, which supplies reducing power for biosynthetic reactions, and ribose-5-phosphate, which is needed to build RNA, DNA, and nucleotide coenzymes. The book describes two routes to get pentose phosphates, and the first is the oxidative one. It starts with glucose-6-phosphate dehydrogenase oxidizing glucose-6-phosphate, reducing NADP+ to NADPH in the process and forming a lactone. That lactone is then hydrolyzed by lactonase to give 6-phosphogluconate, an open-chain acid. 6-phosphogluconate is then further oxidized — again reducing NADP+ to NADPH, so this branch generates two NADPH per glucose-6-phosphate in total — to a beta-keto acid, which spontaneously decarboxylates, releasing CO2 and leaving ribulose-5-phosphate. Interestingly, the book never actually names the enzyme for this third step, even though it names the first two explicitly. Finally, ribulose-5-phosphate, which is a ketose, is isomerized to ribose-5-phosphate, an aldose, and that's the pathway's other characteristic product.",
    checklist: [
      "Stated the two products: NADPH (biosynthetic reductions) and ribose-5-phosphate (RNA/DNA/nucleotide coenzyme synthesis)",
      "Named G6P dehydrogenase for step 1 (G6P -> lactone + NADPH)",
      "Named lactonase for step 2 (lactone -> 6-phosphogluconate)",
      "Described step 3 (6-phosphogluconate -> beta-keto acid -> ribulose-5-P + CO2, second NADPH) and noted the book leaves this enzyme unnamed",
      "Stated NADP+ (not NAD+) is the acceptor for both oxidations",
      "Described the final isomerization of ribulose-5-P (ketose) to ribose-5-P (aldose)"
    ]
  }
},

{
  id: "7-7-2",
  book: "cz",
  topicKey: "pentose-phosphate-pathway",
  chapter: 7,
  section: "7.7",
  czTitle: "Dvě cesty k pentosafosfátům — neoxidační cesta a pentosový cyklus",
  enTitle: "Two routes to pentose phosphates — the non-oxidative route and the pentose cycle",
  cnTitle: "通向戊糖磷酸的两条途径——非氧化途径与戊糖循环",
  pages: [162, 163],
  coverage: "full",
  coverageNote: "The 'Jiná cesta k pentosám...' paragraph starting at the very bottom of p.162 (last 2 lines) and continuing through the end of p.163 read in full, together with the large circular figure on p.163 that combines the oxidative branch (already covered in node 7-7-1) with the non-oxidative interconversion network (fruktosa-6-fosfát/glyceraldehyd-3-fosfát <-> erythrosa-4-fosfát/sedoheptulosa-7-fosfát <-> xylulosa-5-fosfát/ribosa-5-fosfát), labelled at the bottom with two reading-direction arrows, 'hexosy v pentosy' (hexoses to pentoses) and 'pentosy v hexosy' (pentoses to hexoses). IMPORTANT HONESTY NOTE: the prose gives an unambiguous, fully self-consistent, step-by-step description of the three non-oxidative reactions (substrates, products, and enzyme class for each), and this node's content follows that prose exactly (verified to balance mass/carbon count on a stoichiometric check: 2 fructose-6-phosphate + 1 glyceraldehyde-3-phosphate, 2x6+3=15 carbons, converts to 2 xylulose-5-phosphate + 1 ribose-5-phosphate, 2x5+5=15 carbons, matching the book's own summary sentence 'vznik tří pentos ze dvou hexos a jedné triosy'). However, the FIGURE's own small connecting arrows in the crossed transketolase/transaldolase network are visually dense and overlapping in the scan at the resolution available; this node's substrate/product/enzyme assignments rely on the prose (which is clear and internally consistent) rather than on adjudicating individual overlapping arrow pixels in the figure, and this is flagged rather than silently guessed. The two epimerization/isomerization double-arrows directly linking ribulosa-5-fosfát to xylulosa-5-fosfát and to ribosa-5-fosfát, however, ARE clearly, unambiguously drawn as bidirectional in the scan.",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记页码约139，仅凭标题推测，未直接核对)", status: "partial" },
  mustKnow: { en: "The second route reaches the same pentose phosphates while making no NADPH at all, purely by reshuffling two- and three-carbon fragments. So a cell can order ribose alone when it has no need for reducing power.", cn: "第二条路线**完全不产 NADPH**，仅靠重排二碳与三碳片段就到达同样的磷酸戊糖。于是细胞在不需要还原力时，可以单独「点」核糖。" },
  summary: {
    en: "The book's SECOND route to pentose phosphates produces them WITHOUT generating NADPH. It begins by transferring a two-carbon fragment from fructose-6-phosphate to glyceraldehyde-3-phosphate (the latter constantly available as a glycolysis product from fructose-1,6-bisphosphate cleavage) — a TRANSKETOLASE reaction, giving xylulose-5-phosphate and erythrose-4-phosphate. Erythrose-4-phosphate then becomes the acceptor of a three-carbon fragment in a TRANSALDOLASE reaction (donor: a second fructose-6-phosphate), giving sedoheptulose-7-phosphate and glyceraldehyde-3-phosphate. These two products, in a further TRANSKETOLASE reaction, convert into two pentoses, ribose-5-phosphate and xylulose-5-phosphate. Xylulose-5-phosphate is then epimerized to ribulose-5-phosphate, which isomerizes to ribose-5-phosphate. Net result: three pentoses from two hexoses and one triose. This non-oxidative route is used when far more ribose-5-phosphate than NADPH is needed; all its steps are reversible, so it can equally run in reverse, converting three pentoses back to two hexoses plus one triose. Linking this reverse (pentose-to-hexose) direction to the oxidative pathway, plus isomerizing fructose-6-phosphate back to glucose-6-phosphate, closes a full 'pentose cycle' capable of completely oxidizing glucose (with the resulting glyceraldehyde-3-phosphate catabolized via glycolysis) to yield 12 NADPH per glucose-6-phosphate: glucose-6-phosphate must be oxidized six times (2 NADPH each) to obtain 6 ribose-5-phosphate, from which 2 molecules of glyceraldehyde-3-phosphate arise, subsequently broken down via glycolysis, the citrate cycle, and the respiratory chain. The book explicitly notes organisms do NOT use this mechanism for complete glucose breakdown in practice — the pathways described mainly serve pentose-phosphate biosynthesis, needed for nucleic acid construction, either with or without concurrent NADPH production.",
    cn: "教材给出的第二条通向戊糖磷酸的途径不生成NADPH。它始于将一个二碳片段从果糖-6-磷酸转移到甘油醛-3-磷酸（后者作为糖酵解中果糖-1,6-二磷酸裂解的产物持续供应）——这是一个转酮醇酶反应，生成木酮糖-5-磷酸和赤藓糖-4-磷酸。赤藓糖-4-磷酸随后在转醛醇酶反应中成为一个三碳片段的受体（供体为第二分子果糖-6-磷酸），生成景天庚酮糖-7-磷酸和甘油醛-3-磷酸。这两个产物在随后的转酮醇酶反应中转化为两种戊糖：核糖-5-磷酸和木酮糖-5-磷酸。木酮糖-5-磷酸随后差向异构化为核酮糖-5-磷酸，再异构化为核糖-5-磷酸。净结果：由两分子己糖和一分子丙糖生成三分子戊糖。这条非氧化途径用于需要远多于NADPH需求量的核糖-5-磷酸的场合；其所有步骤都是可逆的，因此也可以反向进行，将三分子戊糖转化回两分子己糖加一分子丙糖。将这个反向（戊糖到己糖）过程与氧化途径相连接，再加上果糖-6-磷酸异构化回葡萄糖-6-磷酸，就形成了一个完整的「戊糖循环」，能够将葡萄糖完全氧化（生成的甘油醛-3-磷酸经糖酵解分解），每分子葡萄糖-6-磷酸产生12分子NADPH：葡萄糖-6-磷酸必须氧化六次（每次生成2分子NADPH），才能获得6分子核糖-5-磷酸，由这些核糖-5-磷酸生成2分子甘油醛-3-磷酸，再经糖酵解、柠檬酸循环和呼吸链分解。教材明确指出，生物体在实际中并不用此机制完全分解葡萄糖——上述途径主要服务于戊糖磷酸的生物合成，这是构建核酸所必需的，可伴随或不伴随NADPH的生成。"
  },
  points: [
    { cz: "neoxidační cesta = bez NADPH, začíná F6P + G3P (transketolasa)", en: "The non-oxidative route to pentoses produces NO NADPH. It begins by transferring a TWO-CARBON fragment from fructose-6-phosphate to glyceraldehyde-3-phosphate — a TRANSKETOLASE reaction — giving XYLULOSE-5-phosphate (from G3P + 2C) and ERYTHROSE-4-phosphate (from F6P minus 2C). Glyceraldehyde-3-phosphate is highlighted as 'constantly available' since it is a glycolysis product from fructose-1,6-bisphosphate cleavage.", cn: "非氧化途径不产生NADPH。它始于将一个二碳片段从果糖-6-磷酸转移到甘油醛-3-磷酸——这是转酮醇酶反应——生成木酮糖-5-磷酸（甘油醛-3-磷酸+2碳）和赤藓糖-4-磷酸（果糖-6-磷酸减2碳）。教材强调甘油醛-3-磷酸「持续可得」，因为它是糖酵解中果糖-1,6-二磷酸裂解的产物。" },
    { cz: "krok 2: E4P + F6P(2.) -> transaldolasa -> S7P + G3P", en: "Step 2: erythrose-4-phosphate becomes the ACCEPTOR of a THREE-carbon fragment in a TRANSALDOLASE reaction, with a SECOND molecule of fructose-6-phosphate as donor. Products: sedoheptulose-7-phosphate and glyceraldehyde-3-phosphate.", cn: "第2步：赤藓糖-4-磷酸在转醛醇酶反应中成为一个三碳片段的受体，供体是第二分子果糖-6-磷酸。产物为景天庚酮糖-7-磷酸和甘油醛-3-磷酸。" },
    { cz: "krok 3: S7P + G3P -> transketolasa -> ribosa-5-P + xylulosa-5-P", en: "Step 3: sedoheptulose-7-phosphate and glyceraldehyde-3-phosphate, in a further TRANSKETOLASE reaction (donor of the two-carbon fragment: sedoheptulose-7-phosphate), convert into TWO PENTOSES — ribose-5-phosphate and xylulose-5-phosphate.", cn: "第3步：景天庚酮糖-7-磷酸和甘油醛-3-磷酸在第二次转酮醇酶反应中（二碳片段供体为景天庚酮糖-7-磷酸）转化为两种戊糖——核糖-5-磷酸和木酮糖-5-磷酸。" },
    { cz: "xylulosa-5-P epimeruje -> ribulosa-5-P -> izomeruje -> ribosa-5-P", en: "Xylulose-5-phosphate (the product of step 1) is EPIMERIZED to ribulose-5-phosphate, which is then ISOMERIZED to ribose-5-phosphate — both clearly drawn as bidirectional (double-headed) arrows in Obr., directly linking to the oxidative branch's own ribulose-5-phosphate product from node 7-7-1.", cn: "木酮糖-5-磷酸（第1步产物）差向异构化为核酮糖-5-磷酸，后者再异构化为核糖-5-磷酸——图中这两步都清楚地画成双向箭头，直接与氧化支路（见节点7-7-1）生成的核酮糖-5-磷酸相连。" },
    { cz: "výsledek: 3 pentosy ze 2 hexos + 1 triosy", en: "Net result of the three reactions above: THREE PENTOSES arise from TWO HEXOSES (fructose-6-phosphate, used twice) and ONE TRIOSE (glyceraldehyde-3-phosphate) — carbon count checks out exactly (2x6 + 3 = 15 = 3x5).", cn: "上述三个反应的净结果：由两分子己糖（果糖-6-磷酸，使用两次）和一分子丙糖（甘油醛-3-磷酸）生成三分子戊糖——碳原子数恰好平衡（2x6+3=15=3x5）。" },
    { cz: "všechny kroky reverzibilní -> použití podle potřeby (víc ribosy vs. víc NADPH)", en: "The book stresses ALL transformations of this route are REVERSIBLE. Forward (as above) it is used when much more ribose-5-phosphate than NADPH is needed. Run in reverse, three pentoses can regenerate two hexoses and one triose.", cn: "教材强调该途径的所有转化都是可逆的。正向运行（如上）用于需要远多于NADPH的核糖-5-磷酸的情况。反向运行时，三分子戊糖可再生成两分子己糖和一分子丙糖。" },
    { cz: "pentosový cyklus: 6x oxidace G6P -> 12 NADPH/glukosa, 2 G3P -> glykolýza+citrátový cyklus+dýchací řetězec", en: "Linking the reverse (pentose-to-hexose) non-oxidative direction to the oxidative pathway, plus isomerizing fructose-6-phosphate back to glucose-6-phosphate, closes a full PENTOSE CYCLE that could completely oxidize glucose, yielding 12 NADPH per glucose-6-phosphate. Glucose-6-phosphate must be oxidized SIX times (2 NADPH each turn) to obtain 6 ribose-5-phosphate, from which 2 glyceraldehyde-3-phosphate molecules arise; these are then broken down via glycolysis, the citrate cycle, and the respiratory chain.", cn: "将反向（戊糖到己糖）的非氧化过程与氧化途径连接，再加上果糖-6-磷酸异构化回葡萄糖-6-磷酸，就构成一个完整的戊糖循环，理论上可将葡萄糖完全氧化，每分子葡萄糖-6-磷酸产生12分子NADPH。葡萄糖-6-磷酸须氧化六次（每次生成2分子NADPH）才能获得6分子核糖-5-磷酸，由此产生2分子甘油醛-3-磷酸；这些甘油醛-3-磷酸再经糖酵解、柠檬酸循环和呼吸链分解。" },
    { cz: "organismus tento 'pentosový cyklus' pro dokonalé odbourání glukosy nepoužívá", en: "The book explicitly states organisms do NOT actually use this full pentose-cycle mechanism for complete glucose breakdown. The described pathways mainly serve BIOSYNTHESIS of pentose phosphates needed for nucleic-acid construction, either with concurrent NADPH generation (needed for fatty acid, cholesterol, etc. syntheses) or without it.", cn: "教材明确指出，生物体在实际中并不使用这一完整的「戊糖循环」机制来完全分解葡萄糖。上述途径主要用于生物合成核酸构建所需的磷酸戊糖，可伴随NADPH的生成（用于脂肪酸、胆固醇等的合成），也可以不伴随。" }
  ],
  terms: [
    { cz: "transketolasa", en: "transketolase", cn: "转酮醇酶", def_en: "Transfers a two-carbon 'active glycolaldehyde' fragment between a ketose donor and an aldose acceptor; used twice in the non-oxidative route (F6P+G3P -> E4P+X5P, and S7P+G3P -> R5P+X5P); coenzyme is thiamine diphosphate (per p.162's section-7.6 material).", def_cn: "在酮糖供体与醛糖受体之间转移一个二碳的「活性乙醇醛」片段；在非氧化途径中使用两次（F6P+G3P->E4P+X5P，以及S7P+G3P->R5P+X5P）；辅酶为焦磷酸硫胺素（见第162页7.6节内容）。" },
    { cz: "transaldolasa", en: "transaldolase", cn: "转醛醇酶", def_en: "Transfers a three-carbon dihydroxyacetone-type fragment from a ketose donor (fructose-6-phosphate) to an aldose acceptor (erythrose-4-phosphate), giving sedoheptulose-7-phosphate + glyceraldehyde-3-phosphate.", def_cn: "将一个三碳的二羟丙酮型片段从酮糖供体（果糖-6-磷酸）转移到醛糖受体（赤藓糖-4-磷酸），生成景天庚酮糖-7-磷酸+甘油醛-3-磷酸。" },
    { cz: "sedoheptulosa-7-fosfát", en: "sedoheptulose-7-phosphate", cn: "景天庚酮糖-7-磷酸", def_en: "The 7-carbon ketose intermediate unique to the non-oxidative pentose phosphate route, formed by transaldolase and consumed by the second transketolase reaction.", def_cn: "非氧化磷酸戊糖途径特有的七碳酮糖中间体，由转醛醇酶生成，被第二次转酮醇酶反应消耗。" },
    { cz: "erythrosa-4-fosfát", en: "erythrose-4-phosphate", cn: "赤藓糖-4-磷酸", def_en: "The 4-carbon aldose intermediate formed by the first transketolase reaction and consumed as the acceptor in the transaldolase reaction.", def_cn: "由第一次转酮醇酶反应生成的四碳醛糖中间体，作为受体被转醛醇酶反应消耗。" },
    { cz: "pentosový cyklus", en: "pentose cycle", cn: "戊糖循环", def_en: "The full cycle obtained by linking the reverse non-oxidative direction back to the oxidative pathway (plus F6P->G6P isomerization); could in principle completely oxidize glucose for 12 NADPH/glucose, but the book states organisms do not actually run it this way.", def_cn: "将非氧化过程的反向与氧化途径相连接（并加上果糖-6-磷酸->葡萄糖-6-磷酸异构化）所构成的完整循环；理论上可将葡萄糖完全氧化，每分子葡萄糖产生12分子NADPH，但教材指出生物体实际上并不这样运行。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The non-oxidative route to pentoses begins by transferring a two-carbon fragment. Between which two molecules, and by which enzyme?",
      q_cn: "非氧化途径生成戊糖的第一步是转移一个二碳片段。是在哪两个分子之间进行的？由哪个酶催化？",
      options: [
        "From ribose-5-phosphate to xylulose-5-phosphate, by transaldolase",
        "From fructose-6-phosphate to glyceraldehyde-3-phosphate, by transketolase",
        "From sedoheptulose-7-phosphate to erythrose-4-phosphate, by transaldolase",
        "From glucose-6-phosphate to ribulose-5-phosphate, by an unnamed enzyme"
      ],
      answer: 1,
      why_en: "The book states the non-oxidative route 'začíná přenosem dvouuhlíkového štěpu z fruktosa-6-fosfátu na glyceraldehyd-3-fosfát' via a transketolase reaction, giving xylulose-5-phosphate and erythrose-4-phosphate. The other options either name the wrong enzyme or the wrong substrate pair for this specific first step.",
      why_cn: "教材指出非氧化途径「始于将二碳片段从果糖-6-磷酸转移到甘油醛-3-磷酸」，这是一个转酮醇酶反应，生成木酮糖-5-磷酸和赤藓糖-4-磷酸。其余选项在这一具体的第一步上，酶或底物对都不正确。"
      },
    {
      type: "mcq",
      q_en: "According to the book's 'pentose cycle' stoichiometry, how many times must glucose-6-phosphate be oxidized, and how many NADPH does each oxidation yield, to obtain 6 molecules of ribose-5-phosphate?",
      q_cn: "根据教材「戊糖循环」的化学计量，要获得6分子核糖-5-磷酸，葡萄糖-6-磷酸必须氧化多少次？每次氧化产生多少分子NADPH？",
      options: ["3 times, 4 NADPH each", "6 times, 2 NADPH each", "12 times, 1 NADPH each", "2 times, 6 NADPH each"],
      answer: 1,
      why_en: "The book states: 'Oxidace glukosa-6-fosfátu musí proběhnout šestkrát, vždy za vzniku dvou molekul NADPH, aby se získalo 6 molekul ribosa-5-fosfátu' — 6 oxidations x 2 NADPH each = 12 NADPH total per (net) glucose-6-phosphate, matching the earlier statement of 12 NADPH/glucose-6-phosphate.",
      why_cn: "教材指出：「葡萄糖-6-磷酸的氧化必须进行六次，每次都生成两分子NADPH，才能获得6分子核糖-5-磷酸」——6次氧化x每次2分子NADPH=共12分子NADPH，与前文「每分子葡萄糖-6-磷酸产生12分子NADPH」的说法一致。"
    },
    {
      type: "short",
      q_en: "Why, per the book, is the non-oxidative route to pentoses used, given it produces no NADPH? And why does the book say organisms do not actually run the full 'pentose cycle' for complete glucose oxidation?",
      q_cn: "既然非氧化途径不产生NADPH，教材认为它有什么用途？教材为何指出生物体实际上并不运行完整的「戊糖循环」来完全氧化葡萄糖？",
      accept: ["ribose", "more ribose than NADPH", "nucleic acid", "biosynthesis", "核糖", "核酸", "生物合成"],
      answer_en: "The non-oxidative route is used when the cell needs far more ribose-5-phosphate than NADPH — since it produces pentose without any oxidation/NADPH cost. The book states the described pathways mainly serve biosynthesis of the pentose phosphates needed to build nucleic acids (with or without concurrent NADPH production for other syntheses like fatty acids/cholesterol), not complete oxidative breakdown of glucose — that role is filled by glycolysis plus the citrate cycle and respiratory chain instead.",
      answer_cn: "非氧化途径用于细胞需要远多于NADPH的核糖-5-磷酸的情形——因为它不经任何氧化/NADPH消耗即可生成戊糖。教材指出，上述途径主要用于生物合成构建核酸所需的磷酸戊糖（可伴随或不伴随为脂肪酸、胆固醇等合成提供NADPH），而不是用于葡萄糖的完全氧化分解——后者的角色由糖酵解加柠檬酸循环与呼吸链来承担。"
    }
  ],
  oral: {
    q_en: "Explain the non-oxidative route to pentose phosphates, and how it can theoretically combine with the oxidative route into a 'pentose cycle.'",
    q_cn: "请解释生成磷酸戊糖的非氧化途径，以及它理论上如何与氧化途径结合形成「戊糖循环」。",
    model_en: "The book's second route to pentose phosphates makes them without generating any NADPH at all. It starts by taking a two-carbon fragment off fructose-6-phosphate and handing it, via transketolase, to glyceraldehyde-3-phosphate — a triose that's always around because glycolysis constantly produces it by splitting fructose-1,6-bisphosphate. That gives xylulose-5-phosphate and erythrose-4-phosphate. The erythrose-4-phosphate then accepts a three-carbon piece from a second fructose-6-phosphate, this time via transaldolase, giving sedoheptulose-7-phosphate and another glyceraldehyde-3-phosphate. Those two products then react again via transketolase, this time yielding two proper pentoses, ribose-5-phosphate and xylulose-5-phosphate, and the xylulose-5-phosphate gets epimerized to ribulose-5-phosphate and then isomerized to ribose-5-phosphate as well. So overall, two hexoses and one triose become three pentoses. Every one of these steps is reversible, so the whole thing can run backward too, turning three pentoses back into two hexoses and a triose. And that reverse direction is exactly what you'd hook up to the oxidative pathway — six turns of oxidizing glucose-6-phosphate, each generating two NADPH, gives six ribose-5-phosphates, and running those backward through the non-oxidative machinery regenerates enough hexose to keep the cycle going while spitting out two glyceraldehyde-3-phosphates, which then get finished off by glycolysis, the citrate cycle and the respiratory chain. That closed loop, in principle, could fully oxidize glucose for twelve NADPH per glucose-6-phosphate. But the book is careful to say cells don't actually run it this way in practice — the real purpose of all this machinery is biosynthesizing the pentose phosphates nucleic acids need, with or without the NADPH.",
    checklist: [
      "Described the transketolase step: F6P + G3P -> E4P + X5P",
      "Described the transaldolase step: F6P(2nd) + E4P -> S7P + G3P",
      "Described the second transketolase step: S7P + G3P -> R5P + X5P",
      "Stated the epimerization/isomerization of X5P -> ribulose-5-P -> R5P",
      "Gave the net stoichiometry: 2 hexoses + 1 triose -> 3 pentoses",
      "Explained the reversibility and the 'pentose cycle' construction (6x oxidation -> 12 NADPH, 2 G3P out)",
      "Noted the book's caveat that this full cycle is not how organisms actually completely oxidize glucose"
    ]
  }
},

{
  id: "7-8-1",
  book: "cz",
  topicKey: "glycolysis",
  chapter: 7,
  section: "7.8",
  czTitle: "Glykolýza — úvod a přípravná fáze (glukosa až fruktosa-1,6-bisfosfát a jeho štěpení na triosy)",
  enTitle: "Glycolysis — introduction and the preparatory phase (glucose to fructose-1,6-bisphosphate and its cleavage to trioses)",
  cnTitle: "糖酵解——概论与准备阶段（葡萄糖至果糖-1,6-二磷酸及其裂解为丙糖）",
  pages: [164, 165],
  coverage: "full",
  coverageNote: "Full text of the '7.8 Glykolýza' opening paragraphs on p.164 read directly (the overview paragraph, the glucose->pyruvate->{lactate/CO2+H2O/ethanol} preview figure, and the glucose-phosphorylation-through-triose-phosphate-isomerase paragraphs down to, but not including, the GAPDH paragraph which begins node 7-8-2), plus the structural reaction-chain figure at the top of p.165 (hexokinase -> phosphohexose isomerase -> phosphofructokinase -> aldolase -> triose-phosphate-isomerase, all five arrows' enzyme labels verified by zoomed re-read) and the two equilibrium-percentage sentences (89%/11% for the aldolase reaction, 96% for the DHAP/G3P isomerase reaction) double-checked by zoom against the scan. NAMING NOTE verified directly: the running text on p.164 names the G6P->F6P enzyme 'hexosafosfátizomerasa' and the DHAP<->G3P enzyme 'triosafosfátizomerasa', while the p.165 FIGURE labels the same two enzymes 'fosfohexosaisomerasa' and 'fosfotriosaisomerasa' respectively (reversed word order in both cases) — this is a minor, cosmetic prose/figure naming-convention difference for the identical enzymes, not a factual contradiction, and is flagged here per the project's standing instruction to check figure-vs-prose consistency in dense pathway material.",
  cnNote: { topic: "十九", title: "糖酵解 (笔记页码约105，仅凭标题推测，未直接核对)", status: "partial" },
  mustKnow: { en: "The first half of glycolysis SPENDS ATP — two of them — before a single one is earned. What that buys is a doubly charged molecule that cannot leak back out of the cell and that splits cleanly into two three-carbon halves.", cn: "糖酵解的前半段是**花** ATP 的——花掉两个，一个都还没赚到。这笔投资买到的是一个带双电荷、漏不出细胞、而且能干净地劈成两个三碳半截的分子。" },
  trace: [
    {
      term: "preparatory phase 糖酵解的准备阶段",
      what: "糖酵解的前半段。它有一个很容易让人意外的性质：**这一段是净花 ATP 的**——先垫进去两个，一个都还没赚回来。真正回本要等到后半段。",
      from: "既然是要产能的通路，为什么开头反而要倒贴？因为这两个 ATP 买的是三样东西，缺一不可。第一，磷酸带负电，**葡萄糖一旦被磷酸化就漏不出细胞了**——不上锁的话你刚吸收进来的糖会自己跑掉。第二，带上双电荷让分子更容易被酶抓牢。第三，也是最关键的：**磷酸化之后的果糖-1,6-二磷酸能被干净地劈成两个三碳半截**，而且两半都带着磷酸、都能继续往下走。垫钱是为了让后面的每一步都成立。",
      to: "记住这个「先投资再回收」的形状，糖酵解的账就不会算错：前半段 −2 ATP，后半段因为分成了两个三碳分子、每个都产 2 个 ATP，所以 +4，**净赚 2 个**。很多人算错就是忘了「分成两半」这一步之后，后半段的每一笔都要乘以 2。",
      family: "入口不止一个，值得对照着记：从游离葡萄糖进来，要靠 hexokinase（己糖激酶，能磷酸化多种己糖）或 glucokinase（葡萄糖激酶，只认葡萄糖）花掉一个 ATP；但**从糖原来的葡萄糖走的是另一条路**——磷酸解直接给出葡萄糖-1-磷酸，**不花 ATP**（见 7.11.2）。所以从糖原动员的糖，起跑时就已经领先一步。"
    }
  ],
  summary: {
    en: "Section 7.8 opens by calling glycolysis an almost universal metabolic pathway: the sequence of reactions converting glucose to pyruvate with concurrent ATP production. In aerobic organisms glycolysis precedes the citrate cycle and respiratory chain (where most of glucose's energy is actually recovered) and pyruvate is fully oxidized to CO2 and H2O in mitochondria; when oxygen supply is insufficient (e.g. actively working muscle) pyruvate is temporarily converted to lactate; in anaerobic organisms such as yeast, pyruvate is converted to ethanol instead. Glucose must first be taken up by the cell, then phosphorylated at C-6 using ATP, catalyzed by either hexokinase (broad specificity for many hexoses) or glucokinase (glucose-specific, more significant in liver) — both give glucose-6-phosphate. (Stored glucose, as glycogen, instead reaches glucose-1-phosphate without ATP cost via phosphorolysis, ch. 7.11.2, then still needs conversion to glucose-6-phosphate.) Glucose-6-phosphate isomerizes (hexose-phosphate isomerase/phosphohexose isomerase) to fructose-6-phosphate, an aldose-to-ketose conversion; fructose-6-phosphate makes up 30% of this equilibrium mixture. Phosphofructokinase then phosphorylates fructose-6-phosphate (using ATP) to fructose-1,6-bisphosphate — a PRACTICALLY IRREVERSIBLE reaction that is thereby RATE-LIMITING for all of glycolysis, and whose activity is allosterically controlled by the ATP/ADP system. Aldolase cleaves fructose-1,6-bisphosphate into two trioses, dihydroxyacetone phosphate (from C1-C3) and glyceraldehyde phosphate (from C4-C6); at equilibrium this reaction actually favors the UNCLEAVED hexose bisphosphate (89% hexose, 11% combined trioses). The two trioses interconvert via a shared enol intermediate, accelerated by triose-phosphate isomerase (96% DHAP / 4% glyceraldehyde-3-phosphate at that sub-equilibrium); DHAP is readily converted onward to glyceraldehyde-3-phosphate as it is consumed by later reactions, so one fructose-1,6-bisphosphate ultimately yields two molecules of glyceraldehyde-3-phosphate via the successive action of aldolase and triose-phosphate isomerase.",
    cn: "第7.8节开篇称糖酵解为几乎普遍存在的代谢途径：这是一系列将葡萄糖转化为丙酮酸、同时产生ATP的反应。在需氧生物中，糖酵解先于柠檬酸循环和呼吸链（葡萄糖中大部分能量实际上是在那里获得的），丙酮酸在线粒体中被完全氧化为CO2和H2O；当供氧不足时（如剧烈活动的肌肉），丙酮酸暂时转化为乳酸；而在酵母等厌氧生物中，丙酮酸则转化为乙醇。葡萄糖必须先被细胞摄取，然后在C-6位被ATP磷酸化，由己糖激酶（对多种己糖广泛特异）或葡糖激酶（对葡萄糖特异，在肝脏中更为重要）催化——两者都生成葡萄糖-6-磷酸。（储存的葡萄糖，即糖原，则通过磷酸解不消耗ATP而生成葡萄糖-1-磷酸，见7.11.2节，随后仍需转化为葡萄糖-6-磷酸。）葡萄糖-6-磷酸经异构化（己糖磷酸异构酶/磷酸己糖异构酶）转化为果糖-6-磷酸，这是醛糖转化为酮糖的过程；果糖-6-磷酸在此平衡混合物中占30%。磷酸果糖激酶随后利用ATP将果糖-6-磷酸磷酸化为果糖-1,6-二磷酸——这一反应实际上不可逆，因而成为整个糖酵解的限速步骤，其活性受ATP/ADP系统的别构调控。醛缩酶将果糖-1,6-二磷酸裂解为两种丙糖：二羟丙酮磷酸（来自C1-C3）和甘油醛磷酸（来自C4-C6）；该反应在平衡时实际上有利于未裂解的己糖二磷酸（89%己糖，11%两种丙糖合计）。两种丙糖通过共同的烯醇中间体相互转化，磷酸丙糖异构酶加速此过程（在这一子平衡中为96%二羟丙酮磷酸/4%甘油醛-3-磷酸）；二羟丙酮磷酸容易转化为甘油醛-3-磷酸，因为后者被后续反应消耗，因此一分子果糖-1,6-二磷酸经醛缩酶和磷酸丙糖异构酶的连续作用，最终生成两分子甘油醛-3-磷酸。"
  },
  points: [
    { cz: "glykolýza = glukosa -> pyruvát + ATP, téměř univerzální", en: "Glycolysis is called an almost universal metabolic pathway: the sequence of reactions converting glucose to pyruvate with concurrent ATP production.", cn: "糖酵解被称为几乎普遍存在的代谢途径：一系列将葡萄糖转化为丙酮酸、同时产生ATP的反应。" },
    { cz: "3 osudy pyruvátu: mitochondrie (CO2+H2O), laktát (nedostatek O2), ethanol (anaerobní)", en: "Preview of pyruvate's three fates (detailed in 7.8.1): in AEROBIC organisms pyruvate enters mitochondria and is fully oxidized to CO2+H2O; under INSUFFICIENT oxygen (e.g. active muscle) pyruvate is temporarily converted to LACTATE; in ANAEROBIC organisms like yeast, pyruvate converts to ETHANOL.", cn: "丙酮酸三种命运预览（详见7.8.1节）：在需氧生物中，丙酮酸进入线粒体被完全氧化为CO2+H2O；供氧不足时（如活动的肌肉），丙酮酸暂时转化为乳酸；在酵母等厌氧生物中，丙酮酸转化为乙醇。" },
    { cz: "glukosa -> G6P: hexokinasa (obecná) nebo glukokinasa (specifická, játra), ATP->ADP", en: "Glucose is first phosphorylated at C-6 (phosphate donor ATP), catalyzed by either HEXOKINASE (phosphorylates many hexoses at C-6) or GLUKOKINASE (glucose-specific, more significant enzyme in the LIVER); the product of both is glucose-6-phosphate.", cn: "葡萄糖首先在C-6位被磷酸化（磷酸供体为ATP），由己糖激酶（对多种己糖在C-6位磷酸化）或葡糖激酶（对葡萄糖特异，在肝脏中更重要的酶）催化；两者产物都是葡萄糖-6-磷酸。" },
    { cz: "glykogen -> glukosa-1-fosfát fosforolýzou (bez ATP), pak přesun na G6P", en: "Stored glucose (glycogen) instead converts to glucose-1-phosphate by PHOSPHOROLYSIS without ATP cost (ch. 7.11.2); the phosphate group must then be moved to give glucose-6-phosphate.", cn: "储存的葡萄糖（糖原）则通过磷酸解生成葡萄糖-1-磷酸，不消耗ATP（第7.11.2节）；此后磷酸基团必须转移才能生成葡萄糖-6-磷酸。" },
    { cz: "G6P -> F6P: hexosafosfátizomerasa (text) / fosfohexosaisomerasa (obrázek), 30% F6P v rovnováze", en: "Glucose-6-phosphate isomerizes to fructose-6-phosphate — an ALDOSE-to-KETOSE conversion — catalyzed by the enzyme the running text calls 'hexosafosfátizomerasa' (the p.165 figure instead labels it 'fosfohexosaisomerasa' — same enzyme, reversed word order). Fructose-6-phosphate makes up 30% of the equilibrium mixture (so glucose-6-phosphate 70%).", cn: "葡萄糖-6-磷酸异构化为果糖-6-磷酸——这是醛糖到酮糖的转化——由正文中称为「己糖磷酸异构酶」的酶催化（第165页插图则标注为「磷酸己糖异构酶」——同一种酶，只是词序不同）。果糖-6-磷酸在平衡混合物中占30%（因此葡萄糖-6-磷酸占70%）。" },
    { cz: "F6P -> F1,6BP: fosfofruktokinasa, ATP, PRAKTICKY IREVERZIBILNÍ = limitující krok, alosterie ATP/ADP", en: "Phosphofructokinase phosphorylates fructose-6-phosphate (using ATP) to FRUCTOSE-1,6-BISPHOSPHATE. This phosphorylation is PRACTICALLY IRREVERSIBLE, making it the RATE-LIMITING reaction of the entire glycolytic process; phosphofructokinase activity is ALLOSTERICALLY controlled by the ATP/ADP system.", cn: "磷酸果糖激酶利用ATP将果糖-6-磷酸磷酸化为果糖-1,6-二磷酸。此磷酸化实际上不可逆，因而是整个糖酵解过程的限速反应；磷酸果糖激酶的活性受ATP/ADP系统的别构调控。" },
    { cz: "F1,6BP -> DHAP + glyceraldehydfosfát: aldolasa, rovnováha 89% hexosy / 11% obou trios", en: "Aldolase cleaves fructose-1,6-bisphosphate into two trioses: DIHYDROXYACETONE PHOSPHATE (from C1-C3) and GLYCERALDEHYDE PHOSPHATE (from C4-C6). At equilibrium, 89% of the mixture is the (uncleaved) hexose and only 11% is the two trioses combined — the aldolase reaction's equilibrium actually favors the hexose bisphosphate, and it is only pulled forward because the trioses are continuously consumed downstream.", cn: "醛缩酶将果糖-1,6-二磷酸裂解为两种丙糖：二羟丙酮磷酸（来自C1-C3）和甘油醛磷酸（来自C4-C6）。平衡时，混合物中89%为（未裂解的）己糖，仅11%为两种丙糖合计——醛缩酶反应的平衡实际上有利于己糖二磷酸，只是因为丙糖被下游持续消耗，反应才被拉向裂解方向。" },
    { cz: "DHAP <-> glyceraldehyd-3-P: triosafosfátizomerasa (text) / fosfotriosaisomerasa (obrázek), 96% DHAP", en: "DHAP and glyceraldehyde phosphate interconvert via a shared ENOL intermediate, with equilibrium accelerated by the enzyme the text calls 'triosafosfátizomerasa' (figure: 'fosfotriosaisomerasa' — same enzyme, reversed word order). At this sub-equilibrium, 96% is DHAP (so 4% glyceraldehyde-3-phosphate); DHAP is nonetheless readily converted onward since glyceraldehyde-3-phosphate is consumed by subsequent reactions, so ONE fructose-1,6-bisphosphate ultimately yields TWO molecules of glyceraldehyde-3-phosphate via aldolase + triose-phosphate isomerase acting in succession.", cn: "二羟丙酮磷酸和甘油醛磷酸通过共同的烯醇中间体相互转化，平衡由正文中称为「磷酸丙糖异构酶」的酶加速（插图标注为「磷酸丙糖异构酶」——同一种酶，词序不同）。在此子平衡中，96%为二羟丙酮磷酸（因此4%为甘油醛-3-磷酸）；尽管如此，二羟丙酮磷酸仍容易被继续转化，因为甘油醛-3-磷酸被后续反应消耗，所以一分子果糖-1,6-二磷酸经醛缩酶与磷酸丙糖异构酶的连续作用，最终生成两分子甘油醛-3-磷酸。" }
  ],
  terms: [
    { cz: "hexokinasa", en: "hexokinase", cn: "己糖激酶", def_en: "Phosphorylates many hexoses at C-6 using ATP; broad specificity, contrasted with the liver-important, glucose-specific glucokinase.", def_cn: "利用ATP使多种己糖在C-6位磷酸化；特异性较广，与肝脏中重要的、对葡萄糖特异的葡糖激酶相对。" },
    { cz: "glukokinasa", en: "glucokinase", cn: "葡糖激酶", def_en: "A glucose-specific C-6 kinase; the book calls it the more significant enzyme in the liver.", def_cn: "对葡萄糖特异的C-6激酶；教材称其为肝脏中更重要的酶。" },
    { cz: "fosfofruktokinasa (PFK)", en: "phosphofructokinase (PFK)", cn: "磷酸果糖激酶（PFK）", def_en: "Phosphorylates fructose-6-phosphate to fructose-1,6-bisphosphate using ATP; practically irreversible, so this is glycolysis's rate-limiting step; allosterically controlled by ATP/ADP.", def_cn: "利用ATP将果糖-6-磷酸磷酸化为果糖-1,6-二磷酸；实际上不可逆，因而是糖酵解的限速步骤；受ATP/ADP别构调控。" },
    { cz: "aldolasa", en: "aldolase", cn: "醛缩酶", def_en: "Cleaves fructose-1,6-bisphosphate into dihydroxyacetone phosphate and glyceraldehyde phosphate; equilibrium favors the uncleaved hexose (89%/11%).", def_cn: "将果糖-1,6-二磷酸裂解为二羟丙酮磷酸和甘油醛磷酸；平衡有利于未裂解的己糖（89%/11%）。" },
    { cz: "triosafosfátizomerasa (fosfotriosaisomerasa)", en: "triose-phosphate isomerase", cn: "磷酸丙糖异构酶", def_en: "Interconverts dihydroxyacetone phosphate and glyceraldehyde-3-phosphate via a shared enol form; 96% DHAP at equilibrium, but DHAP is readily drawn forward since G3P is continuously consumed.", def_cn: "通过共同的烯醇式使二羟丙酮磷酸与甘油醛-3-磷酸相互转化；平衡时96%为二羟丙酮磷酸，但由于甘油醛-3-磷酸被持续消耗，二羟丙酮磷酸容易被继续转化。" },
    { cz: "fruktosa-1,6-bisfosfát", en: "fructose-1,6-bisphosphate", cn: "果糖-1,6-二磷酸", def_en: "The product of PFK's rate-limiting phosphorylation; cleaved by aldolase into the two triose phosphates that continue through the rest of glycolysis.", def_cn: "磷酸果糖激酶限速磷酸化反应的产物；被醛缩酶裂解为两种丙糖磷酸，继续进入糖酵解后续步骤。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which single reaction of glycolysis's preparatory phase is described as practically irreversible and therefore rate-limiting for the whole pathway?",
      q_cn: "糖酵解准备阶段中，哪一个反应被描述为实际上不可逆、因而是整个途径的限速步骤？",
      options: [
        "Hexokinase: glucose -> glucose-6-phosphate",
        "Phosphofructokinase: fructose-6-phosphate -> fructose-1,6-bisphosphate",
        "Aldolase: fructose-1,6-bisphosphate -> two trioses",
        "Triose-phosphate isomerase: DHAP <-> glyceraldehyde-3-phosphate"
      ],
      answer: 1,
      why_en: "The book states the phosphofructokinase reaction 'je prakticky ireverzibilní' and that this makes it the rate-limiting reaction for the whole glycolytic process, additionally regulated allosterically by ATP/ADP — none of the other three reactions are described this way.",
      why_cn: "教材指出磷酸果糖激酶反应「实际上不可逆」，并因此成为整个糖酵解过程的限速反应，此外还受ATP/ADP的别构调节——其余三个反应均未被如此描述。"
    },
    {
      type: "mcq",
      q_en: "At equilibrium, what fraction of the aldolase reaction's mixture (fructose-1,6-bisphosphate vs. the two trioses) is the uncleaved hexose bisphosphate, per the book?",
      q_cn: "根据教材，醛缩酶反应（果糖-1,6-二磷酸与两种丙糖之间）在平衡时，未裂解的己糖二磷酸占混合物的比例是多少？",
      options: ["11%", "30%", "89%", "96%"],
      answer: 2,
      why_en: "The book states 'V rovnovážném stavu je 89% hexosy a 11% obou trios' — 89% is the uncleaved hexose bisphosphate, only 11% combined trioses; 30% refers to the separate G6P/F6P isomerase equilibrium, and 96% refers to the separate DHAP/G3P isomerase equilibrium.",
      why_cn: "教材指出「平衡状态下为89%己糖和11%两种丙糖」——89%为未裂解的己糖二磷酸，仅11%为两种丙糖合计；30%指的是另一个G6P/F6P异构酶平衡，96%指的是另一个二羟丙酮磷酸/甘油醛-3-磷酸异构酶平衡。"
    },
    {
      type: "short",
      q_en: "Name the enzyme(s) that phosphorylate glucose to glucose-6-phosphate, and explain the tissue-level distinction the book draws between them.",
      q_cn: "写出将葡萄糖磷酸化为葡萄糖-6-磷酸的酶，并说明教材在它们之间划分的组织层面区别。",
      accept: ["hexokinase", "glucokinase", "liver", "specific", "己糖激酶", "葡糖激酶", "肝脏", "特异"],
      answer_en: "Hexokinase (broad specificity, phosphorylates many hexoses at C-6) or glucokinase (specific for glucose); the book states glucokinase is the more significant enzyme in the liver.",
      answer_cn: "己糖激酶（特异性较广，可使多种己糖在C-6位磷酸化）或葡糖激酶（对葡萄糖特异）；教材指出葡糖激酶是肝脏中更重要的酶。"
    }
  ],
  oral: {
    q_en: "Walk through glycolysis's preparatory phase, from glucose to the two triose phosphates, naming every enzyme and noting which step is rate-limiting.",
    q_cn: "请讲解糖酵解准备阶段，从葡萄糖到两种丙糖磷酸，说出每一步的酶，并指出哪一步是限速步骤。",
    model_en: "Glycolysis is described as an almost universal pathway: the sequence of reactions that converts glucose into pyruvate while producing ATP, and in aerobic organisms it's the doorway into the citrate cycle and respiratory chain, where most of glucose's energy is actually recovered. Before any of the sugar chemistry can happen, glucose has to be taken up by the cell and phosphorylated at carbon 6, using ATP as the phosphate donor; that's done by hexokinase, which works on many hexoses, or by glucokinase, which is specific to glucose and matters especially in the liver. Either way you get glucose-6-phosphate. That isomerizes — turning an aldose into a ketose — to fructose-6-phosphate, and at equilibrium fructose-6-phosphate is about 30% of that mixture. Then comes the committed step: phosphofructokinase phosphorylates fructose-6-phosphate, again using ATP, to fructose-1,6-bisphosphate, and this reaction is practically irreversible, which is exactly why it's the rate-limiting step of the whole pathway — its activity is controlled allosterically by the ATP-to-ADP ratio. Aldolase then splits that bisphosphate into two three-carbon pieces, dihydroxyacetone phosphate and glyceraldehyde phosphate, though interestingly, at equilibrium this cleavage reaction actually favors staying as the intact hexose — 89% hexose, only 11% split into trioses — and it's only pulled forward because the trioses keep getting used up downstream. Those two trioses interconvert through a shared enol form, sped up by triose-phosphate isomerase, and at that sub-equilibrium 96% sits as dihydroxyacetone phosphate; but since only glyceraldehyde-3-phosphate is consumed by what comes next, the dihydroxyacetone phosphate keeps getting pulled over, and net-net one fructose-1,6-bisphosphate ends up giving you two molecules of glyceraldehyde-3-phosphate.",
    checklist: [
      "Named hexokinase/glucokinase for glucose -> glucose-6-phosphate",
      "Named the G6P -> F6P isomerase and gave the 30% F6P equilibrium figure",
      "Identified phosphofructokinase's step as irreversible/rate-limiting, ATP/ADP-regulated",
      "Named aldolase and gave the 89%/11% hexose/triose equilibrium",
      "Named triose-phosphate isomerase and gave the 96% DHAP figure",
      "Stated the net outcome: 1 fructose-1,6-bisphosphate -> 2 glyceraldehyde-3-phosphate",
      "Noted the minor text/figure enzyme-name word-order variation (hexosafosfát- vs fosfohexosa-, triosafosfát- vs fosfotriosa-)"
    ]
  }
},

{
  id: "7-8-2",
  book: "cz",
  topicKey: "glycolysis",
  chapter: 7,
  section: "7.8",
  czTitle: "Glykolýza — glyceraldehyd-3-fosfátdehydrogenasa a substrátová fosforylace na 3-fosfoglycerát",
  enTitle: "Glycolysis — glyceraldehyde-3-phosphate dehydrogenase and substrate-level phosphorylation to 3-phosphoglycerate",
  cnTitle: "糖酵解——甘油醛-3-磷酸脱氢酶与底物水平磷酸化生成3-磷酸甘油酸",
  pages: [164, 165],
  coverage: "full",
  coverageNote: "The GAPDH-introducing paragraph and structural equation at the bottom of p.164 ('V další reakci se aldehydová skupina triosafosfátu dehydrogenuje...' through 'glyceraldehyd-3-fosfát + NAD+ + Pi <=> 1,3-bisfosfoglycerát + NADH + H+') read directly, plus the full mechanism paragraph and both structural-mechanism figures at the bottom of p.165 (glyceraldehyde-3-phosphate + HS-enzyme -> thiohemiacetal -> NAD+-dependent oxidation to the enzyme-thioester -> phosphorolysis by inorganic phosphate releasing 1,3-bisphosphoglycerate and regenerating the free enzyme -> phosphoglycerate kinase transferring the high-energy phosphate to ADP, giving ATP + 3-phosphoglycerate) — every intermediate structure in the mechanism figure verified by zoomed re-read against the accompanying prose.",
  cnNote: { topic: "十九", title: "糖酵解 (笔记页码约105，仅凭标题推测，未直接核对)", status: "partial" },
  mustKnow: { en: "This is the only oxidation in the whole of glycolysis, and its trick is to trap the released energy as an acyl phosphate instead of letting it escape as heat — which is what makes the ATP two steps later possible at all.", cn: "这是整条糖酵解**唯一的氧化步骤**，而它的高明之处在于把释放的能量捕获成一个酰基磷酸，而不是让它作为热散掉——正因如此，两步之后的那个 ATP 才有可能出现。" },
  trace: [
    {
      term: "substrate-level phosphorylation 底物水平磷酸化",
      what: "直接从一个**高能的底物分子**上把磷酸转给 ADP、就地造出 ATP 的做法。它不需要膜，不需要质子梯度，不需要氧——和呼吸链那套完全是两回事。",
      from: "这个 ATP 是从哪来的？答案要往前推一步。糖酵解全程**只有一个氧化步骤**，就是甘油醛-3-磷酸脱氢这一步。氧化会放出不少能量，而这一步的高明之处在于：它**没有让这份能量作为热散掉**，而是当场把它捕获成一个高能的酰基磷酸（1,3-二磷酸甘油酸）。能量被存进了一个化学键里，于是两步之后才有东西可以转给 ADP。**先把能量存住，后面才可能兑现**——顺序不能反。",
      to: "顺着酶的机制看一遍，会发现它是怎么「存」的：醛基先加到酶的巯基上，接着脱氢（氢交给 NAD⁺ 变成 NADH），此时酶和底物之间形成一个**高能硫酯键**；最后无机磷酸把这个硫酯键磷酸解开，酶被放走，磷酸就留在了产物上。**硫酯键是那个中转的能量仓库**——这个套路你在乙酰辅酶A 那里已经见过一次了，是同一个化学思路。",
      family: "与它相对的是氧化磷酸化（呼吸链那一套），靠的是质子梯度和 ATP 合酶。两者的差别不只是机制，更是**条件**：底物水平磷酸化在无氧条件下照样能进行，所以它才是无氧糖酵解唯一的产能方式——你剧烈运动时肌肉靠的就是它。"
    }
  ],
  summary: {
    en: "The aldehyde group of (glyceraldehyde-3-)triose phosphate is dehydrogenated using NAD+; this reaction is strongly exergonic and is coupled to the uptake of inorganic phosphate: glyceraldehyde-3-phosphate + NAD+ + Pi <=> 1,3-bisphosphoglycerate + NADH + H+. Mechanistically, the aldehyde group first adds onto an HS-group of the enzyme (glyceraldehyde-3-phosphate dehydrogenase), forming a thiohemiacetal-type adduct; this is then dehydrogenated, with the hydrogen transferred to NAD+, creating an energy-rich THIOESTER bond between the substrate and the enzyme. This thioester is cleaved PHOSPHOROLYTICALLY (by inorganic phosphate), regenerating the free enzyme and releasing 1,3-bisphosphoglycerate as product. The macroergically-bound phosphate group of 1,3-bisphosphoglycerate is then transferred, with the participation of phosphoglycerate kinase, onto ADP, giving 3-phosphoglycerate and ATP — this way of generating ATP is called 'SUBSTRATE-LEVEL PHOSPHORYLATION.' Glyceraldehyde-3-phosphate dehydrogenase is described as an ALLOSTERIC enzyme, with NAD+ its most important activating effector.",
    cn: "（甘油醛-3-）丙糖磷酸的醛基借助NAD+脱氢；此反应是强放能反应，并与无机磷酸的摄取相偶联：甘油醛-3-磷酸+NAD+ +Pi<=>1,3-二磷酸甘油酸+NADH+H+。从机理上看，醛基首先加成到酶（甘油醛-3-磷酸脱氢酶）的一个巯基（HS-）上，形成类似硫代半缩醛的加合物；随后该加合物脱氢，氢被转移到NAD+上，在底物与酶之间形成一个富能的硫酯键。此硫酯键被无机磷酸磷酸解裂开，使游离酶再生，并释放产物1,3-二磷酸甘油酸。1,3-二磷酸甘油酸上高能结合的磷酸基团随后在磷酸甘油酸激酶的参与下转移到ADP上，生成3-磷酸甘油酸和ATP——这种生成ATP的方式称为「底物水平磷酸化」。甘油醛-3-磷酸脱氢酶被描述为一种别构酶，其最重要的激活效应物是NAD+。"
  },
  points: [
    { cz: "glyceraldehyd-3-P + NAD+ + Pi <=> 1,3-bisfosfoglycerát + NADH + H+", en: "The aldehyde group of triose phosphate is dehydrogenated using NAD+; the reaction is strongly EXERGONIC and is coupled to uptake of inorganic phosphate: glyceraldehyd-3-fosfát + NAD+ + Pi <=> 1,3-bisfosfoglycerát + NADH + H+.", cn: "丙糖磷酸的醛基借助NAD+脱氢；该反应是强放能反应，并与无机磷酸的摄取相偶联：甘油醛-3-磷酸+NAD+ +Pi<=>1,3-二磷酸甘油酸+NADH+H+。" },
    { cz: "mechanismus krok 1: aldehyd + HS-enzym -> adukt", en: "Mechanism step 1: the aldehyde group ADDS onto an HS-group of the enzyme, forming an enzyme-bound adduct (structure shown: H-C(-OH)(-S-enzym), i.e. a thiohemiacetal-type linkage).", cn: "机理第1步：醛基加成到酶的一个巯基（HS-）上，形成酶结合的加合物（图示结构为H-C(-OH)(-S-酶)，即类似硫代半缩醛的连接）。" },
    { cz: "mechanismus krok 2: dehydrogenace, H -> NAD+, vzniká energeticky bohatá thioesterová vazba", en: "Mechanism step 2: the adduct is DEHYDROGENATED, with hydrogen transferred to NAD+ (giving NADH+H+), creating an energy-rich THIOESTER bond between the acyl group and the enzyme.", cn: "机理第2步：该加合物脱氢，氢转移到NAD+（生成NADH+H+），在酰基与酶之间形成一个富能的硫酯键。" },
    { cz: "mechanismus krok 3: fosforolytické štěpení, +Pi, -HS-enzym -> 1,3-bisfosfoglycerát", en: "Mechanism step 3: the energy-rich thioester bond is cleaved PHOSPHOROLYTICALLY by inorganic phosphate (+H3PO4, -HS-enzyme), regenerating the free enzyme and releasing 1,3-BISPHOSPHOGLYCERATE as the reaction product.", cn: "机理第3步：这个富能硫酯键被无机磷酸磷酸解裂开（+H3PO4，-HS-酶），使游离酶再生，并释放产物1,3-二磷酸甘油酸。" },
    { cz: "fosfoglycerátkinasa: 1,3-BPG + ADP -> 3-fosfoglycerát + ATP = substrátová fosforylace", en: "Phosphoglycerate kinase transfers the macroergically-bound phosphate group of 1,3-bisphosphoglycerate onto ADP, giving 3-PHOSPHOGLYCERATE and ATP. The book explicitly names this way of generating ATP 'substrátová fosforylace' (SUBSTRATE-LEVEL PHOSPHORYLATION).", cn: "磷酸甘油酸激酶将1,3-二磷酸甘油酸上高能结合的磷酸基团转移到ADP上，生成3-磷酸甘油酸和ATP。教材明确将这种生成ATP的方式称为「底物水平磷酸化」。" },
    { cz: "GAPDH = alosterický enzym, NAD+ = nejdůležitější aktivující efektor", en: "Glyceraldehyde-3-phosphate dehydrogenase is described as an ALLOSTERIC enzyme; the most important effector that ACTIVATES it is NAD+.", cn: "甘油醛-3-磷酸脱氢酶被描述为一种别构酶；激活该酶最重要的效应物是NAD+。" },
    { cz: "figure text: '3-fosfoglyceraldehyd' = synonymum pro glyceraldehyd-3-fosfát", en: "Naming note: the p.165 top-of-page structural figure labels this same triose '3-fosfoglyceraldehyd' rather than 'glyceraldehyd-3-fosfát' as the running text does — same molecule, alternate name order used only in that one figure.", cn: "命名说明：第165页顶部结构插图将同一种丙糖标注为「3-磷酸甘油醛」，而非正文所用的「甘油醛-3-磷酸」——是同一分子，仅该图使用了不同的名称顺序。" }
  ],
  terms: [
    { cz: "glyceraldehyd-3-fosfátdehydrogenasa (GAPDH)", en: "glyceraldehyde-3-phosphate dehydrogenase (GAPDH)", cn: "甘油醛-3-磷酸脱氢酶（GAPDH）", def_en: "An allosteric enzyme (activated by NAD+) that dehydrogenates triose phosphate via an enzyme-bound thioester intermediate, coupling the exergonic oxidation to phosphate uptake, giving 1,3-bisphosphoglycerate.", def_cn: "一种别构酶（被NAD+激活），经酶结合的硫酯中间体使丙糖磷酸脱氢，将放能的氧化反应与磷酸摄取相偶联，生成1,3-二磷酸甘油酸。" },
    { cz: "1,3-bisfosfoglycerát", en: "1,3-bisphosphoglycerate", cn: "1,3-二磷酸甘油酸", def_en: "The high-energy mixed-anhydride product of GAPDH's reaction, released after phosphorolytic cleavage of the enzyme-thioester intermediate; its phosphate is macroergically bound.", def_cn: "GAPDH反应生成的高能混合酸酐产物，在酶-硫酯中间体被磷酸解裂开后释放；其磷酸基团为高能结合。" },
    { cz: "fosfoglycerátkinasa", en: "phosphoglycerate kinase", cn: "磷酸甘油酸激酶", def_en: "Transfers 1,3-bisphosphoglycerate's high-energy phosphate to ADP, giving ATP and 3-phosphoglycerate — the first substrate-level phosphorylation of glycolysis.", def_cn: "将1,3-二磷酸甘油酸的高能磷酸基团转移给ADP，生成ATP和3-磷酸甘油酸——糖酵解中第一次底物水平磷酸化。" },
    { cz: "substrátová fosforylace", en: "substrate-level phosphorylation", cn: "底物水平磷酸化", def_en: "ATP formation by direct transfer of a phosphate group from a high-energy metabolic intermediate to ADP, as opposed to chemiosmotic/respiratory-chain-driven ATP synthesis.", def_cn: "通过将高能代谢中间体上的磷酸基团直接转移给ADP而生成ATP的方式，区别于由化学渗透/呼吸链驱动的ATP合成。" },
    { cz: "thioesterová vazba (enzym-substrát)", en: "enzyme-substrate thioester bond", cn: "酶-底物硫酯键", def_en: "The energy-rich covalent intermediate formed between GAPDH's active-site HS-group and the oxidized triose phosphate, which is subsequently cleaved by inorganic phosphate.", def_cn: "GAPDH活性位点巯基与被氧化的丙糖磷酸之间形成的富能共价中间体，随后被无机磷酸裂解。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is cleaved by inorganic phosphate in the GAPDH mechanism, and what is directly released as a result?",
      q_cn: "在GAPDH的反应机理中，无机磷酸裂解的是什么？由此直接释放出什么产物？",
      options: [
        "The C-C bond of the triose, releasing two 2-carbon fragments",
        "The energy-rich enzyme-substrate thioester bond, releasing 1,3-bisphosphoglycerate and regenerating the free enzyme",
        "The phosphoester bond at C-3, releasing free phosphate and glyceraldehyde",
        "The NAD+/NADH bond, releasing free nicotinamide"
      ],
      answer: 1,
      why_en: "The book states the energy-rich thioester bond formed during the dehydrogenation step 'se štěpí fosforolyticky' (is cleaved phosphorolytically), regenerating the enzyme and yielding 1,3-bisphosphoglycerate as the product — none of the other bonds listed are the ones acted on here.",
      why_cn: "教材指出，脱氢步骤中形成的富能硫酯键「被磷酸解裂开」，使酶再生，并生成产物1,3-二磷酸甘油酸——其余选项所列的化学键都不是此处被作用的对象。"
    },
    {
      type: "mcq",
      q_en: "What does the book call the mechanism by which phosphoglycerate kinase generates ATP from 1,3-bisphosphoglycerate and ADP?",
      q_cn: "教材将磷酸甘油酸激酶利用1,3-二磷酸甘油酸和ADP生成ATP的机制称为什么？",
      options: ["Oxidative phosphorylation", "Chemiosmotic coupling", "Substrate-level phosphorylation", "Allosteric phosphorylation"],
      answer: 2,
      why_en: "The book states explicitly: 'Popisovanému způsobu vzniku ATP říkáme \"substrátová fosforylace\"' — this way of generating ATP is called substrate-level phosphorylation, distinct from the chemiosmotic/oxidative phosphorylation mechanism of the respiratory chain (ch. 6).",
      why_cn: "教材明确指出：「这种生成ATP的方式我们称为'底物水平磷酸化'」——不同于呼吸链（第6章）的化学渗透/氧化磷酸化机制。"
    },
    {
      type: "short",
      q_en: "Describe, step by step, how GAPDH couples the oxidation of glyceraldehyde-3-phosphate's aldehyde group to formation of a high-energy phosphate compound.",
      q_cn: "请逐步描述GAPDH如何将甘油醛-3-磷酸醛基的氧化与高能磷酸化合物的生成相偶联。",
      accept: ["HS-enzyme", "thioester", "NAD+", "phosphorolysis", "1,3-bisphosphoglycerate", "巯基", "硫酯", "磷酸解", "1,3-二磷酸甘油酸"],
      answer_en: "The aldehyde adds onto an HS-group of the enzyme, forming an adduct; this is dehydrogenated with hydrogen transferred to NAD+, creating an energy-rich enzyme-substrate thioester bond; inorganic phosphate then cleaves this thioester phosphorolytically, regenerating the free enzyme and releasing 1,3-bisphosphoglycerate, whose high-energy phosphate is subsequently transferred to ADP by phosphoglycerate kinase.",
      answer_cn: "醛基先加成到酶的一个巯基上，形成加合物；该加合物脱氢，氢转移给NAD+，在酶与底物之间形成富能硫酯键；无机磷酸随后将此硫酯磷酸解裂开，使游离酶再生，并释放1,3-二磷酸甘油酸，其高能磷酸基团随后由磷酸甘油酸激酶转移给ADP。"
    }
  ],
  oral: {
    q_en: "Explain the GAPDH mechanism and how it leads to the first ATP-generating step of glycolysis.",
    q_cn: "请解释GAPDH的反应机理，以及它如何导致糖酵解中第一个产生ATP的步骤。",
    model_en: "This step is where glycolysis produces its first high-energy compound. Glyceraldehyde-3-phosphate dehydrogenase takes the aldehyde group of the triose phosphate and, in a strongly exergonic reaction coupled to the uptake of inorganic phosphate, converts it to 1,3-bisphosphoglycerate while reducing NAD+ to NADH. Mechanistically, the aldehyde first adds onto a thiol group in the enzyme's active site, forming an adduct; that adduct is then dehydrogenated, with the hydrogen going to NAD+, and this creates an energy-rich thioester bond linking the acyl group to the enzyme itself. That thioester is then cleaved, not by water, but phosphorolytically — by inorganic phosphate — which regenerates the free enzyme and releases 1,3-bisphosphoglycerate as the product, now carrying a high-energy phosphate group. That phosphate group is then handed off by phosphoglycerate kinase directly onto ADP, generating ATP and leaving 3-phosphoglycerate behind. This whole way of making ATP, straight from a high-energy metabolic intermediate rather than through the respiratory chain, is what's called substrate-level phosphorylation. And GAPDH itself is allosteric, with NAD+ as its most important activating effector.",
    checklist: [
      "Gave the overall reaction: glyceraldehyde-3-P + NAD+ + Pi <=> 1,3-BPG + NADH + H+, exergonic",
      "Described the HS-enzyme adduct formation step",
      "Described dehydrogenation transferring H to NAD+ and forming the enzyme-thioester bond",
      "Described phosphorolytic cleavage by inorganic phosphate releasing 1,3-BPG and regenerating the enzyme",
      "Named phosphoglycerate kinase and its ADP -> ATP + 3-phosphoglycerate reaction",
      "Used the term 'substrate-level phosphorylation' correctly",
      "Noted GAPDH is allosteric, activated by NAD+"
    ]
  }
},

{
  id: "7-8-3",
  book: "cz",
  topicKey: "glycolysis",
  chapter: 7,
  section: "7.8",
  czTitle: "Glykolýza — fosfoglycerátmutasa, enolasa, pyruvátkinasa, energetická bilance a shrnutí dráhy",
  enTitle: "Glycolysis — phosphoglycerate mutase, enolase, pyruvate kinase, the ATP balance, and the pathway summary",
  cnTitle: "糖酵解——磷酸甘油酸变位酶、烯醇化酶、丙酮酸激酶、能量平衡与途径小结",
  pages: [166, 167],
  coverage: "full",
  coverageNote: "Full text and mechanism figure at the top of p.166 (3-phosphoglycerate to 2-phosphoglycerate via phosphoglycerate mutase, using 2,3-bisphosphoglycerate as a regenerating 'coenzyme') read directly and re-zoomed for the exact phosphate positions on every drawn intermediate. The enolase and pyruvate-kinase paragraph and figure, and the 'Spotřeba a tvorba ATP při glykolýze' table, read directly from the middle/lower half of p.166. The large circular recap figure at the top of p.167 (which visually re-draws the whole pathway from glucose through pyruvate to lactate, positioned in the book's own layout just before the '7.8.1' heading) checked against the ATP/ADP arrow placements and against Tab. on p.166 — confirmed consistent (ATP consumed at the hexokinase and PFK steps; ATP produced at the phosphoglycerate-kinase and pyruvate-kinase steps; the closing NAD+/NADH-linked pyruvate<->lactate arrow foreshadows node 7-8-4's content and is treated there, not duplicated here as its own point). HONESTY NOTE ON THE MUTASE MECHANISM: the book's own text is unambiguous about the net transformation (3-phosphoglycerate in, 2-phosphoglycerate out, via a 2,3-bisphosphoglycerate enzyme-bound cofactor that regenerates each cycle) and this node follows that prose exactly; the small mechanism diagram's own curved arrow, at the resolution available in the scan, is genuinely difficult to trace atom-by-atom with full confidence for which specific phosphate group physically moves where — this node reports the net, textually-stated transformation rather than over-claiming a pixel-level reading of the figure's arrow.",
  cnNote: { topic: "十九", title: "糖酵解 (笔记页码约105，仅凭标题推测，未直接核对)", status: "partial" },
  lehNotes: [
    { kind: "gap", node: "L-5-1-1",
      en: "This node names 2,3-bisphosphoglycerate 31 times, entirely as phosphoglycerate mutase's regenerating 'coenzyme' in this one glycolytic step. It never once mentions the molecule's other job: Lehninger 5.1 states plainly that '2,3-Bisphosphoglycerate greatly reduces the affinity of hemoglobin for oxygen' (A p.161), binding one molecule per haemoglobin tetramer in the cavity between the beta subunits and stabilising the low-affinity T state — the mechanism behind altitude adaptation and fetal haemoglobin. Answering a question about oxygen delivery or altitude physiology from this node alone would not even mention BPG's role there.",
      cn: "本节点31次提到2,3-二磷酸甘油酸，全部是作为磷酸甘油酸变位酶在这一步糖酵解反应中再生的「辅酶」。它从未提及这个分子的另一项工作：Lehninger 5.1明确指出，「2,3-二磷酸甘油酸大幅降低血红蛋白对氧的亲和力」（A 第161页）——每个血红蛋白四聚体结合一分子，位于两个β亚基之间的空腔中，并稳定低亲和力的T态，这正是高海拔适应和胎儿血红蛋白背后的机制。若仅凭本节点回答关于氧输送或高海拔生理学的问题，甚至不会提到BPG在那里的作用。" },
  ],
  mustKnow: { en: "Net for one glucose: 2 ATP and 2 NADH — four made, two spent. A small yield, but it needs no oxygen whatsoever, and that is the whole reason the pathway is universal.", cn: "一分子葡萄糖的净收益：**2 个 ATP 与 2 个 NADH**——造了四个，花掉两个。产出很少，但它**完全不需要氧**，这正是这条途径之所以普遍存在的全部理由。" },
  summary: {
    en: "3-phosphoglycerate converts to 2-phosphoglycerate via phosphoglycerate mutase, whose 'coenzyme' is 2,3-bisphosphoglycerate: the phosphate in the enzyme-2,3-bisphosphoglycerate complex phosphorylates the incoming 3-phosphoglycerate to (new, enzyme-bound) 2,3-bisphosphoglycerate, while releasing the dephosphorylated coenzyme — i.e., 2-phosphoglycerate — as product; the newly phosphorylated complex then acts as the enzyme's new coenzyme for the next cycle. Enolase then removes water from 2-phosphoglycerate, forming phosphoenolpyruvate (PEP); the energy-rich phosphate residue here is the same one originally supplied by ATP back at the hexokinase step. Pyruvate kinase transfers this phosphate from PEP onto ADP, generating ATP and pyruvate — so the ATP spent phosphorylating hexoses at the start of glycolysis is recovered by this point. The book's own ATP balance table gives the full accounting per glucose: -1 ATP (glucose -> glucose-6-phosphate), -1 ATP (fructose-6-phosphate -> fructose-1,6-bisphosphate), +2 ATP (2x 1,3-bisphosphoglycerate -> 2x 3-phosphoglycerate), +2 ATP (2x phosphoenolpyruvate -> 2x pyruvate), for a NET GAIN of +2 ATP per glucose. A circular summary figure (p.167) then re-draws the whole pathway from glucose through to pyruvate and on to lactate in one diagram.",
    cn: "3-磷酸甘油酸经磷酸甘油酸变位酶转化为2-磷酸甘油酸，该酶的「辅酶」是2,3-二磷酸甘油酸：酶-2,3-二磷酸甘油酸复合物中的磷酸基团使新进入的3-磷酸甘油酸磷酸化，生成（新的、结合于酶上的）2,3-二磷酸甘油酸，同时释放去磷酸化的辅酶——即2-磷酸甘油酸——作为产物；新磷酸化的复合物随后作为酶下一轮循环的新辅酶。烯醇化酶随后从2-磷酸甘油酸中脱去一分子水，生成磷酸烯醇丙酮酸（PEP）；此处的高能磷酸基团正是最初在己糖激酶步骤中由ATP提供的那个磷酸基团。丙酮酸激酶将此磷酸基团从PEP转移到ADP上，生成ATP和丙酮酸——由此，糖酵解起始阶段用于磷酸化己糖所消耗的ATP，在这一步得以收回。教材自己给出的ATP平衡表列出了每分子葡萄糖的完整核算：-1 ATP（葡萄糖->葡萄糖-6-磷酸），-1 ATP（果糖-6-磷酸->果糖-1,6-二磷酸），+2 ATP（2x1,3-二磷酸甘油酸->2x3-磷酸甘油酸），+2 ATP（2x磷酸烯醇丙酮酸->2x丙酮酸），净收益为每分子葡萄糖+2 ATP。第167页的一幅环形总结图随后将整个途径从葡萄糖经丙酮酸直至乳酸重新绘制在一张图中。"
  },
  points: [
    { cz: "3-fosfoglycerát -> 2-fosfoglycerát: fosfoglycerátmutasa, 'koenzym' 2,3-bisfosfoglycerát", en: "Phosphoglycerate MUTASE converts 3-phosphoglycerate to 2-phosphoglycerate, using 2,3-BISPHOSPHOGLYCERATE as its 'coenzyme' (book's own quotation marks): the phosphate in the enzyme-2,3-BPG complex phosphorylates incoming 3-phosphoglycerate to (new) 2,3-bisphosphoglycerate, releasing the dephosphorylated coenzyme — i.e. 2-phosphoglycerate — as product. The newly phosphorylated product then itself acts as the new coenzyme for the enzyme's next turnover.", cn: "磷酸甘油酸变位酶将3-磷酸甘油酸转化为2-磷酸甘油酸，使用2,3-二磷酸甘油酸作为其「辅酶」（教材原文自己加了引号）：酶-2,3-二磷酸甘油酸复合物中的磷酸基团使新进入的3-磷酸甘油酸磷酸化为（新的）2,3-二磷酸甘油酸，同时释放去磷酸化的辅酶——即2-磷酸甘油酸——作为产物。新磷酸化的产物随后本身就作为酶下一轮催化的新辅酶。" },
    { cz: "2-fosfoglycerát -> fosfoenolpyruvát: enolasa, -H2O", en: "ENOLASE removes water from 2-phosphoglycerate, forming PHOSPHOENOLPYRUVATE (PEP). The energy-rich phosphate residue now present in PEP is, per the book, the SAME phosphate residue originally supplied by ATP back at the hexose-phosphorylation step.", cn: "烯醇化酶从2-磷酸甘油酸中脱去一分子水，生成磷酸烯醇丙酮酸（PEP）。据教材所述，PEP中此时所含的高能磷酸基团，正是最初在己糖磷酸化步骤中由ATP提供的那个磷酸基团。" },
    { cz: "fosfoenolpyruvát + ADP -> pyruvát + ATP: pyruvátkinasa, ATP ze začátku glykolýzy 'se získává zpět'", en: "PYRUVATE KINASE transfers PEP's phosphate residue to ADP, generating ATP and PYRUVATE. This recovers the ATP that was consumed phosphorylating hexoses at the start of glycolysis.", cn: "丙酮酸激酶将PEP的磷酸基团转移给ADP，生成ATP和丙酮酸。由此收回了糖酵解起始阶段磷酸化己糖所消耗的ATP。" },
    { cz: "tabulka: -1, -1, +2, +2 = zisk +2 ATP/glukosa", en: "The book's own ATP balance table ('Spotřeba a tvorba ATP při glykolýze'): glukosa -> glukosa-6-fosfát = -1 ATP; fruktosa-6-fosfát -> fruktosa-1,6-bisfosfát = -1 ATP; 2x 1,3-bisfosfoglycerát -> 2x 3-fosfoglycerát = +2 ATP; 2x fosfoenolpyruvát -> 2x pyruvát = +2 ATP. NET GAIN ('zisk'): +2 ATP per glucose.", cn: "教材自己给出的ATP平衡表（「糖酵解中ATP的消耗与生成」）：葡萄糖->葡萄糖-6-磷酸=-1 ATP；果糖-6-磷酸->果糖-1,6-二磷酸=-1 ATP；2x1,3-二磷酸甘油酸->2x3-磷酸甘油酸=+2 ATP；2x磷酸烯醇丙酮酸->2x丙酮酸=+2 ATP。净收益（「zisk」）：每分子葡萄糖+2 ATP。" },
    { cz: "p.167 shrnující kruhové schéma celé dráhy (glukosa...pyruvát...laktát)", en: "A large circular figure on p.167 re-draws the ENTIRE pathway from glucose through every intermediate to pyruvate, and on to lactate, in a single diagram — positioned in the book's layout as a closing recap of section 7.8 immediately before the '7.8.1' heading; its ATP/ADP arrow placements (consumed at hexokinase and PFK, produced at phosphoglycerate kinase and pyruvate kinase) match the ATP-balance table exactly.", cn: "第167页有一幅大型环形示意图，将整个途径从葡萄糖经每个中间体到丙酮酸、再到乳酸完整重绘于一张图中——在教材的排版中，此图作为7.8节的收尾总结，紧接在「7.8.1」标题之前；图中ATP/ADP箭头的位置（在己糖激酶和PFK处消耗，在磷酸甘油酸激酶和丙酮酸激酶处生成）与ATP平衡表完全一致。" }
  ],
  terms: [
    { cz: "fosfoglycerátmutasa (fosfoglycerátfosfomutasa)", en: "phosphoglycerate mutase", cn: "磷酸甘油酸变位酶", def_en: "Converts 3-phosphoglycerate to 2-phosphoglycerate via a 2,3-bisphosphoglycerate-bound cofactor cycle regenerated at the enzyme each turnover.", def_cn: "经由结合在酶上、每轮催化后再生的2,3-二磷酸甘油酸辅因子循环，将3-磷酸甘油酸转化为2-磷酸甘油酸。" },
    { cz: "2,3-bisfosfoglycerát", en: "2,3-bisphosphoglycerate", cn: "2,3-二磷酸甘油酸", def_en: "The phosphoglycerate mutase's regenerating cofactor, described by the book as the reaction's own 'coenzyme.'", def_cn: "磷酸甘油酸变位酶可再生的辅因子，教材称之为该反应自身的「辅酶」。" },
    { cz: "enolasa", en: "enolase", cn: "烯醇化酶", def_en: "Removes water from 2-phosphoglycerate, forming the high-energy compound phosphoenolpyruvate.", def_cn: "从2-磷酸甘油酸中脱去一分子水，生成高能化合物磷酸烯醇丙酮酸。" },
    { cz: "fosfoenolpyruvát (PEP)", en: "phosphoenolpyruvate (PEP)", cn: "磷酸烯醇丙酮酸（PEP）", def_en: "A high-energy phosphate compound; its phosphate is the same one originally donated by ATP at the hexose-phosphorylation step, now transferred to ADP by pyruvate kinase.", def_cn: "一种高能磷酸化合物；其磷酸基团正是最初在己糖磷酸化步骤由ATP提供的那个，如今由丙酮酸激酶转移给ADP。" },
    { cz: "pyruvátkinasa", en: "pyruvate kinase", cn: "丙酮酸激酶", def_en: "Transfers PEP's phosphate to ADP, generating ATP and pyruvate — glycolysis's second substrate-level phosphorylation.", def_cn: "将PEP的磷酸基团转移给ADP，生成ATP和丙酮酸——糖酵解中第二次底物水平磷酸化。" },
    { cz: "energetická bilance glykolýzy: +2 ATP/glukosa", en: "glycolysis ATP balance: net +2 ATP/glucose", cn: "糖酵解能量平衡：每分子葡萄糖净得+2 ATP", def_en: "Per the book's table: -1 ATP (hexokinase) -1 ATP (PFK) +2 ATP (phosphoglycerate kinase, x2) +2 ATP (pyruvate kinase, x2) = net +2 ATP per glucose.", def_cn: "据教材表格：-1 ATP（己糖激酶）-1 ATP（磷酸果糖激酶）+2 ATP（磷酸甘油酸激酶，x2）+2 ATP（丙酮酸激酶，x2）=每分子葡萄糖净得+2 ATP。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per the book's ATP balance table, what is the NET ATP yield of glycolysis per molecule of glucose (to pyruvate, before considering pyruvate's further fate)?",
      q_cn: "根据教材的ATP平衡表，糖酵解每分子葡萄糖（到丙酮酸为止，暂不考虑丙酮酸的后续命运）的净ATP产量是多少？",
      options: ["0 (breaks even)", "+2 ATP", "+4 ATP", "-2 ATP"],
      answer: 1,
      why_en: "The table sums to -1 -1 +2 +2 = +2 net ATP per glucose ('zisk +2'). The +4 ATP figure is the GROSS production (from the two substrate-level phosphorylation steps run twice each) before subtracting the 2 ATP invested early in the pathway.",
      why_cn: "表格合计为-1-1+2+2=净得+2 ATP每分子葡萄糖（「zisk +2」）。+4 ATP是两个底物水平磷酸化步骤（各运行两次）产生的总量，尚未扣除途径前期投入的2 ATP。"
    },
    {
      type: "mcq",
      q_en: "What does phosphoglycerate mutase use as its regenerating cofactor to convert 3-phosphoglycerate to 2-phosphoglycerate?",
      q_cn: "磷酸甘油酸变位酶用什么作为可再生的辅因子，将3-磷酸甘油酸转化为2-磷酸甘油酸？",
      options: ["ATP", "2,3-bisphosphoglycerate", "NAD+", "Thiamine diphosphate"],
      answer: 1,
      why_en: "The book calls 2,3-bisphosphoglycerate the 'koenzym' of this reaction: it donates a phosphate to the incoming 3-phosphoglycerate (making a new 2,3-BPG that stays on the enzyme) while itself being released, dephosphorylated, as 2-phosphoglycerate.",
      why_cn: "教材将2,3-二磷酸甘油酸称为此反应的「辅酶」：它将一个磷酸基团供给新进入的3-磷酸甘油酸（生成留在酶上的新2,3-二磷酸甘油酸），而其自身则去磷酸化后作为2-磷酸甘油酸被释放。"
    },
    {
      type: "short",
      q_en: "Explain, per the book, why the phosphate group transferred to ADP by pyruvate kinase is described as 'the same' phosphate originally spent at the start of glycolysis.",
      q_cn: "根据教材，为什么丙酮酸激酶转移给ADP的磷酸基团被描述为与糖酵解开始时所消耗的磷酸基团「相同」？",
      accept: ["hexose phosphorylation", "ATP spent", "recovered", "己糖磷酸化", "消耗", "收回"],
      answer_en: "The book states that in forming ATP at the pyruvate kinase step, it is a transfer of the same phosphoric acid residue that, during hexose phosphorylation (at hexokinase/PFK), was supplied from ATP — so the ATP consumed at the start of glycolysis is recovered by this final phosphorylation step.",
      answer_cn: "教材指出，丙酮酸激酶步骤中生成ATP，转移的正是在己糖磷酸化（己糖激酶/磷酸果糖激酶）阶段由ATP提供的同一个磷酸基团——因此糖酵解开始时消耗的ATP，在这最后一步磷酸化中被收回。"
    }
  ],
  oral: {
    q_en: "Finish the glycolysis story: describe the mutase, enolase, and pyruvate kinase steps, and give the pathway's net ATP yield.",
    q_cn: "请讲完糖酵解的最后部分：描述变位酶、烯醇化酶和丙酮酸激酶步骤，并给出该途径的净ATP产量。",
    model_en: "After 3-phosphoglycerate forms, phosphoglycerate mutase moves its phosphate from carbon 3 to carbon 2, and it does this using 2,3-bisphosphoglycerate as a kind of recyclable coenzyme: the enzyme-bound bisphosphoglycerate hands a phosphate over to the incoming 3-phosphoglycerate, converting it into the new enzyme-bound 2,3-bisphosphoglycerate, while what's left behind, now missing a phosphate, is released as the product, 2-phosphoglycerate. Enolase then pulls out a water molecule from 2-phosphoglycerate, which concentrates a lot of chemical potential energy into the resulting phosphoenolpyruvate — and the book points out that this is literally the same phosphate group that was spent from ATP way back at the start of glycolysis, when glucose and then fructose-6-phosphate were phosphorylated. Pyruvate kinase then hands that phosphate off to ADP, generating ATP and pyruvate, which is how glycolysis gets that early investment back. If you tally the whole pathway using the book's own table, you spend one ATP phosphorylating glucose and another phosphorylating fructose-6-phosphate, so minus two, but then you gain two ATP from the two molecules of 1,3-bisphosphoglycerate and another two from the two molecules of phosphoenolpyruvate, so plus four — netting out to a gain of two ATP per glucose overall.",
    checklist: [
      "Described the phosphoglycerate mutase mechanism using 2,3-BPG as regenerating cofactor",
      "Named enolase and its dehydration of 2-phosphoglycerate to PEP",
      "Noted PEP's phosphate is 'the same' one spent early in glycolysis",
      "Named pyruvate kinase and its ADP -> ATP + pyruvate reaction",
      "Gave the full ATP balance table figures (-1, -1, +2, +2)",
      "Stated the net yield: +2 ATP per glucose",
      "Mentioned the p.167 circular recap figure ties the whole pathway together through to lactate"
    ]
  }
},

{
  id: "7-8-4",
  book: "cz",
  topicKey: "fates-of-pyruvate",
  chapter: 7,
  section: "7.8.1",
  czTitle: "Tvorba ethanolu, laktátu nebo acetyl-CoA — ethanol a laktát",
  enTitle: "Formation of ethanol, lactate, or acetyl-CoA — ethanol and lactate",
  cnTitle: "生成乙醇、乳酸或乙酰辅酶A——乙醇与乳酸",
  pages: [167, 168],
  coverage: "full",
  coverageNote: "The '7.8.1 Tvorba ethanolu, laktátu nebo acetyl-CoA' heading and its opening paragraph, plus numbered points 1 (ethanol) and 2 (lactate) in full, read directly from the bottom of p.167 through the top third of p.168 (up to, but not including, the 'Regenerace NAD+...' paragraph and point 3, which belong to node 7-8-5). Both reaction equations (pyruvát + H+ -> acetaldehyd + CO2; acetaldehyd + NADH + H+ <=> ethanol + NAD+; pyruvát + NADH + H+ <=> laktát + NAD+) verified directly against the scan.",
  cnNote: { topic: "十九", title: "糖酵解 (笔记页码约105，仅凭标题推测，未直接核对)", status: "partial" },
  mustKnow: { en: "Fermentation is not about making ethanol or lactate — those are waste. It exists to regenerate NAD⁺, because without it glycolysis stops dead at glyceraldehyde-3-phosphate and no ATP is made at all.", cn: "发酵的目的**不是**生成乙醇或乳酸——那些是废物。它存在是为了**再生 NAD⁺**，因为没有 NAD⁺，糖酵解会卡死在 3-磷酸甘油醛那一步，一个 ATP 也造不出来。" },
  summary: {
    en: "The book opens 7.8.1 by noting that the glycolytic reactions from glucose to pyruvate are very similar across almost all organisms and cell types, but pyruvate's further fate can differ. (1) Yeast and some other organisms convert pyruvate to ETHANOL (alcoholic fermentation). The first step is decarboxylation of pyruvate by PYRUVATE DECARBOXYLASE: pyruvate + H+ -> acetaldehyde + CO2. This enzyme's prosthetic group is thiamine diphosphate, and the reaction proceeds as the first step of an oxidative decarboxylation (as detailed further for the pyruvate case in node 7-8-5). Finally acetaldehyde is reduced to ethanol by ALCOHOL DEHYDROGENASE using NADH: acetaldehyde + NADH + H+ <=> ethanol + NAD+. (2) A range of microorganisms form LACTATE from pyruvate instead; the same reaction occurs in higher-organism cells under oxygen deficiency, such as intensively working muscle. Reduction of pyruvate by NADH to lactate is catalyzed by LACTATE DEHYDROGENASE: pyruvát + NADH + H+ <=> laktát + NAD+.",
    cn: "教材在7.8.1节开篇指出，从葡萄糖到丙酮酸的糖酵解反应在几乎所有生物和细胞类型中都非常相似，但丙酮酸的后续命运可以不同。（1）酵母及其他一些生物将丙酮酸转化为乙醇（酒精发酵）。第一步是丙酮酸脱羧酶催化的丙酮酸脱羧：丙酮酸+H+ ->乙醛+CO2。该酶的辅基是焦磷酸硫胺素，此反应是氧化脱羧的第一步（在节点7-8-5中针对丙酮酸的情形有更详细的说明）。最后，乙醛借助NADH被醇脱氢酶还原为乙醇：乙醛+NADH+H+<=>乙醇+NAD+。（2）多种微生物则由丙酮酸生成乳酸；在高等生物细胞缺氧时（如剧烈运动的肌肉）也发生同样的反应。丙酮酸借NADH被还原为乳酸，由乳酸脱氢酶催化：丙酮酸+NADH+H+<=>乳酸+NAD+。"
  },
  points: [
    { cz: "glykolytické reakce glukosa->pyruvát podobné u všech organismů; osud pyruvátu se liší", en: "The book stresses that the glycolytic reactions from glucose to pyruvate are very similar across almost all organisms and all cell types; it is pyruvate's FURTHER fate that differs.", cn: "教材强调，从葡萄糖到丙酮酸的糖酵解反应在几乎所有生物和所有细胞类型中都非常相似；不同的是丙酮酸的后续命运。" },
    { cz: "1. kvasinky: pyruvát -> ethanol (alkoholové kvašení)", en: "FATE 1 — yeast and some other organisms convert pyruvate to ETHANOL (alcoholic fermentation).", cn: "命运1——酵母及其他一些生物将丙酮酸转化为乙醇（酒精发酵）。" },
    { cz: "krok 1a: pyruvátdekarboxylasa, pyruvát + H+ -> acetaldehyd + CO2", en: "First step: PYRUVATE DECARBOXYLASE decarboxylates pyruvate: pyruvát + H+ -> acetaldehyd + CO2. Its prosthetic group is thiamine diphosphate, and the book notes this reaction proceeds as the FIRST step of an oxidative decarboxylation (elaborated for pyruvate's acetyl-CoA fate in node 7-8-5).", cn: "第一步：丙酮酸脱羧酶使丙酮酸脱羧：丙酮酸+H+ ->乙醛+CO2。其辅基为焦磷酸硫胺素，教材指出此反应作为氧化脱羧的第一步进行（在节点7-8-5中针对丙酮酸生成乙酰辅酶A的情形有详细展开）。" },
    { cz: "krok 1b: alkoholdehydrogenasa, acetaldehyd + NADH + H+ <=> ethanol + NAD+", en: "Second step: acetaldehyde is reduced to ETHANOL by ALCOHOL DEHYDROGENASE using NADH: acetaldehyd + NADH + H+ <=> ethanol + NAD+.", cn: "第二步：乙醛借助NADH被醇脱氢酶还原为乙醇：乙醛+NADH+H+<=>乙醇+NAD+。" },
    { cz: "2. mnohé mikroorganismy i vyšší organismy (nedostatek O2, sval): pyruvát -> laktát", en: "FATE 2 — a range of microorganisms form LACTATE from pyruvate; the SAME reaction occurs in cells of higher organisms under insufficient oxygen supply, such as intensively working muscle.", cn: "命运2——多种微生物由丙酮酸生成乳酸；高等生物细胞在供氧不足时（如剧烈运动的肌肉）也发生同样的反应。" },
    { cz: "laktátdehydrogenasa, pyruvát + NADH + H+ <=> laktát + NAD+", en: "Reduction of pyruvate by NADH to lactate is catalyzed by LACTATE DEHYDROGENASE: pyruvát + NADH + H+ <=> laktát + NAD+.", cn: "丙酮酸借NADH被还原为乳酸，由乳酸脱氢酶催化：丙酮酸+NADH+H+<=>乳酸+NAD+。" }
  ],
  terms: [
    { cz: "pyruvátdekarboxylasa", en: "pyruvate decarboxylase", cn: "丙酮酸脱羧酶", def_en: "Decarboxylates pyruvate to acetaldehyde + CO2 using thiamine diphosphate as prosthetic group; the ethanol-fermentation-specific enzyme (distinct from the pyruvate dehydrogenase complex of node 7-8-5).", def_cn: "以焦磷酸硫胺素为辅基，使丙酮酸脱羧生成乙醛+CO2；是乙醇发酵特有的酶（不同于节点7-8-5中的丙酮酸脱氢酶复合体）。" },
    { cz: "alkoholdehydrogenasa", en: "alcohol dehydrogenase", cn: "醇脱氢酶", def_en: "Reduces acetaldehyde to ethanol using NADH, regenerating NAD+.", def_cn: "利用NADH将乙醛还原为乙醇，同时使NAD+再生。" },
    { cz: "laktátdehydrogenasa (LDH)", en: "lactate dehydrogenase (LDH)", cn: "乳酸脱氢酶（LDH）", def_en: "Reduces pyruvate to lactate using NADH, regenerating NAD+; active both in many microorganisms and in higher-organism cells (e.g. muscle) under oxygen deficiency.", def_cn: "利用NADH将丙酮酸还原为乳酸，同时使NAD+再生；在许多微生物以及高等生物细胞（如缺氧时的肌肉）中均具活性。" },
    { cz: "acetaldehyd", en: "acetaldehyde", cn: "乙醛", def_en: "The product of pyruvate decarboxylase's action on pyruvate; reduced to ethanol by alcohol dehydrogenase.", def_cn: "丙酮酸脱羧酶作用于丙酮酸生成的产物；被醇脱氢酶还原为乙醇。" },
    { cz: "laktát", en: "lactate", cn: "乳酸", def_en: "The reduced product of pyruvate under NADH-regenerating conditions; formed by lactate dehydrogenase both in fermenting microorganisms and in oxygen-deficient higher-organism tissue.", def_cn: "在NADH再生条件下由丙酮酸还原生成的产物；由乳酸脱氢酶在发酵微生物及缺氧的高等生物组织中生成。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the prosthetic group of pyruvate decarboxylase, the enzyme that converts pyruvate to acetaldehyde in alcoholic fermentation?",
      q_cn: "丙酮酸脱羧酶（在酒精发酵中将丙酮酸转化为乙醛的酶）的辅基是什么？",
      options: ["FAD", "Thiamine diphosphate", "Lipoic acid", "Biotin"],
      answer: 1,
      why_en: "The book states 'Prostetickou skupinou enzymu je thiamindifosfát' for pyruvate decarboxylase. FAD, lipoic acid, and biotin all appear elsewhere in the chapter (respectively in the PDH complex regeneration step, the PDH complex, and gluconeogenesis) but not as this enzyme's prosthetic group.",
      why_cn: "教材指出丙酮酸脱羧酶「辅基为焦磷酸硫胺素」。FAD、硫辛酸和生物素虽都在本章其他地方出现（分别用于PDH复合体的再生步骤、PDH复合体本身、以及糖异生），但都不是此酶的辅基。"
    },
    {
      type: "mcq",
      q_en: "Besides fermenting microorganisms, in what specific physiological situation does the book say lactate dehydrogenase becomes important in higher organisms?",
      q_cn: "除发酵微生物外，教材指出乳酸脱氢酶在高等生物的什么具体生理情况下变得重要？",
      options: [
        "During REM sleep",
        "In intensively working muscle under oxygen deficiency",
        "During fasting in the liver",
        "In resting neurons"
      ],
      answer: 1,
      why_en: "The book states the pyruvate-to-lactate reaction 'dochází i v buňkách vyšších organismů za nedostatku kyslíku, jako např. v intenzivně pracujícím svalu' — intensively working muscle under oxygen deficiency, not the other listed situations.",
      why_cn: "教材指出丙酮酸转化为乳酸的反应「也发生在高等生物细胞供氧不足的情况下，例如剧烈活动的肌肉中」——而非其余选项所列的情况。"
    },
    {
      type: "short",
      q_en: "Write the two reactions (with enzymes) by which pyruvate is converted to ethanol.",
      q_cn: "写出丙酮酸转化为乙醇所经过的两个反应（注明酶）。",
      accept: ["pyruvate decarboxylase", "acetaldehyde", "alcohol dehydrogenase", "CO2", "NADH", "丙酮酸脱羧酶", "乙醛", "醇脱氢酶"],
      answer_en: "(1) Pyruvate decarboxylase: pyruvate + H+ -> acetaldehyde + CO2. (2) Alcohol dehydrogenase: acetaldehyde + NADH + H+ <=> ethanol + NAD+.",
      answer_cn: "（1）丙酮酸脱羧酶：丙酮酸+H+ ->乙醛+CO2。（2）醇脱氢酶：乙醛+NADH+H+<=>乙醇+NAD+。"
    }
  ],
  oral: {
    q_en: "Describe the two fermentative fates of pyruvate — ethanol and lactate formation — with their enzymes and equations.",
    q_cn: "请描述丙酮酸的两种发酵性命运——生成乙醇和生成乳酸——并给出相应的酶和反应式。",
    model_en: "Even though the reactions from glucose all the way to pyruvate look almost identical across organisms, what happens to pyruvate next can go different ways. Yeast and some other organisms send it toward ethanol, in what's called alcoholic fermentation. The first step is decarboxylation, carried out by pyruvate decarboxylase, which uses thiamine diphosphate as its prosthetic group and converts pyruvate plus a proton into acetaldehyde and carbon dioxide — and this is described as the first step of what's more generally an oxidative decarboxylation. Then alcohol dehydrogenase reduces that acetaldehyde to ethanol, using NADH and regenerating NAD+ in the process. Separately, a wide range of microorganisms instead reduce pyruvate straight to lactate, and cells of higher organisms do exactly the same thing when oxygen is in short supply — the classic example being muscle working hard enough that oxygen delivery can't keep up. That reduction, pyruvate plus NADH and a proton going to lactate plus NAD+, is catalyzed by lactate dehydrogenase.",
    checklist: [
      "Stated glycolysis to pyruvate is similar across organisms; pyruvate's fate diverges",
      "Named pyruvate decarboxylase, its thiamine diphosphate prosthetic group, and its equation",
      "Named alcohol dehydrogenase and its equation (acetaldehyde -> ethanol)",
      "Named lactate dehydrogenase and its equation (pyruvate -> lactate)",
      "Identified the physiological trigger for lactate formation in higher organisms (O2-deficient, actively working muscle)"
    ]
  }
},

{
  id: "7-8-5",
  book: "cz",
  topicKey: "fates-of-pyruvate",
  chapter: 7,
  section: "7.8.1",
  czTitle: "Tvorba ethanolu, laktátu nebo acetyl-CoA — acetyl-CoA a komplex pyruvátdehydrogenasy",
  enTitle: "Formation of ethanol, lactate, or acetyl-CoA — acetyl-CoA and the pyruvate dehydrogenase complex",
  cnTitle: "生成乙醇、乳酸或乙酰辅酶A——乙酰辅酶A与丙酮酸脱氢酶复合体",
  pages: [168, 169],
  coverage: "full",
  coverageNote: "The 'Regenerace NAD+...' paragraph and numbered point 3 (acetyl-CoA) read in full from p.168, including the overall equation and both explanatory paragraphs about the multienzyme complex and its cofactors (thiamine diphosphate, lipoic acid, coenzyme A, FAD, NAD+), plus figure (I) (the full TPP -> hydroxyethyl-TPP -> lipoic-acid-bound acetyl -> acetyl-CoA -> dihydrolipoic acid -> FAD -> NAD+ mechanism, with its three enzyme-name brackets: pyruvátdehydrogenasa, dihydrolipoyl-transacetylasa, dihydrolipoyl-dehydrogenasa) and figure (II) (the three space-filling subunit-assembly diagrams a/b/c) on p.168, continuing into the full mechanism-narrative paragraphs at the top of p.169 (the aldehyde-to-lipoic-acid transfer, the Gibbs-energy-conservation argument for the thioester bond, lipoic acid regeneration via the flavoprotein/NAD+ relay, the ~3 ATP figure for NAD+ reoxidation via the respiratory chain, and the generalization to other alpha-keto-acid oxidative decarboxylations in the citrate cycle and branched-chain/alanine amino-acid metabolism) up to, but not including, the '7.9' heading, which begins node 7-9.",
  cnNote: { topic: "十九", title: "糖酵解 (笔记页码约105，仅凭标题推测，未直接核对)", status: "partial" },
  mustKnow: { en: "Pyruvate to acetyl-CoA is irreversible, and that single fact is why fat cannot be turned back into glucose. It is a one-way door into the aerobic half of metabolism.", cn: "丙酮酸变成乙酰辅酶A 是**不可逆**的，而这一个事实就是脂肪无法变回葡萄糖的原因。它是通往代谢中有氧那一半的**单向门**。" },
  summary: {
    en: "NAD+ regeneration during pyruvate's reduction to lactate or ethanol is what allows glycolysis to keep running under anaerobic conditions — without it, glycolysis could not proceed past glyceraldehyde-3-phosphate, and ATP could neither form nor be regenerated; however, only a small fraction of glucose's energy is released by anaerobic conversion to lactate or ethanol. FATE 3 gets much more energy: aerobically, via the citrate cycle and respiratory chain (ch. 6). The entry compound is acetyl-CoA, formed INSIDE mitochondria by oxidative decarboxylation of pyruvate: pyruvate + NAD+ + CoA -> acetyl-CoA + CO2 + NADH + H+, catalyzed by a MULTIENZYME COMPLEX. This NAD+ (like the NAD+ used oxidizing glyceraldehyde-3-phosphate) is regenerated from NADH via electron transfer to oxygen in the mitochondrial respiratory chain. The complex enables decarboxylation with simultaneous oxidation (an 'oxidative decarboxylation of an alpha-keto acid'); its cofactors are thiamine diphosphate, lipoic acid, and coenzyme A, with FAD and finally NAD+ additionally participating in regenerating lipoic acid. Mechanistically: CO2 is first split off from pyruvate, forming 'active acetaldehyde' bound to C-2 of thiamine diphosphate's thiazole ring (catalyzed by the pyruvate-dehydrogenase component); this aldehyde is transferred to lipoic acid (catalyzed by dihydrolipoyl transacetylase), opening lipoic acid's disulfide ring and converting the aldehyde group to an acetyl group bound by a high-energy thioester bond, from which it is readily transferred onward to coenzyme A, giving acetyl-CoA; lipoic acid is then regenerated from its dihydro-form by a flavoprotein (dihydrolipoyl dehydrogenase) whose unusually negative redox potential lets it pass hydrogens on to NAD+, which is in turn reoxidized by the respiratory chain, yielding about three molecules of ATP. This same alpha-keto-acid oxidative decarboxylation mechanism recurs elsewhere — converting alpha-ketoglutarate to succinyl-CoA in the citrate cycle (ch. 6.2.2), and processing the alpha-keto acids formed by transamination of alanine, valine, isoleucine, and leucine (ch. 5.2.1).",
    cn: "在丙酮酸还原为乳酸或乙醇的过程中，NAD+的再生正是使糖酵解得以在厌氧条件下持续运行的原因——若无此再生，糖酵解将无法推进到甘油醛-3-磷酸之后，ATP也就既不能生成也不能再生；然而，葡萄糖能量中只有很小一部分能通过厌氧转化为乳酸或乙醇而释放。命运3能获得多得多的能量：通过需氧途径，即柠檬酸循环和呼吸链（第6章）。进入该途径的化合物是乙酰辅酶A，由丙酮酸在线粒体内经氧化脱羧生成：丙酮酸+NAD+ +CoA->乙酰辅酶A+CO2+NADH+H+，由一个多酶复合体催化。此处所需的NAD+（如同氧化甘油醛-3-磷酸所需的NAD+一样）通过线粒体呼吸链中电子传递给氧而由NADH再生。该复合体使脱羧与氧化同时进行（即「α-酮酸的氧化脱羧」）；其辅因子为焦磷酸硫胺素、硫辛酸和辅酶A，此外FAD及最终的NAD+还参与硫辛酸的再生。机理上：首先从丙酮酸脱去CO2，形成结合在焦磷酸硫胺素噻唑环C-2位上的「活性乙醛」（由丙酮酸脱氢酶组分催化）；此乙醛被转移到硫辛酸上（由二氢硫辛酰转乙酰基酶催化），打开硫辛酸的二硫环，将醛基转化为由高能硫酯键结合的乙酰基，该乙酰基随即容易地转移给辅酶A，生成乙酰辅酶A；硫辛酸随后由一种黄素蛋白（二氢硫辛酰脱氢酶）从其二氢形式再生，该黄素蛋白异常负的氧化还原电位使其能够将氢传递给NAD+，NAD+又由呼吸链再氧化，生成约三分子ATP。这种α-酮酸氧化脱羧机制在其他地方也会出现——在柠檬酸循环中将α-酮戊二酸转化为琥珀酰辅酶A（第6.2.2节），以及处理丙氨酸、缬氨酸、异亮氨酸和亮氨酸经转氨基作用生成的α-酮酸（第5.2.1节）。"
  },
  points: [
    { cz: "NAD+ regenerace při redukci na laktát/ethanol umožňuje anaerobní glykolýzu; jen malá část energie se uvolní", en: "NAD+ regeneration during reduction of pyruvate to lactate or ethanol is what allows glycolysis to run under anaerobic conditions — without it, glycolysis could not proceed past glyceraldehyde-3-phosphate and ATP could not form or regenerate. However, only a SMALL part of glucose's energy is released this way.", cn: "丙酮酸还原为乳酸或乙醇过程中NAD+的再生，正是使糖酵解得以在厌氧条件下运行的原因——若无此再生，糖酵解无法推进到甘油醛-3-磷酸之后，ATP也无法生成或再生。但以此方式释放的葡萄糖能量只占很小一部分。" },
    { cz: "3. aerobně: acetyl-CoA -> citrátový cyklus + dýchací řetězec (kap. 6) = mnohem více energie", en: "FATE 3 — much more energy is obtained aerobically via the citrate cycle and respiratory chain (ch. 6). The entry compound is acetyl-CoA, formed INSIDE mitochondria by oxidative decarboxylation of pyruvate.", cn: "命运3——通过需氧的柠檬酸循环和呼吸链（第6章）可获得多得多的能量。进入该途径的化合物是乙酰辅酶A，由丙酮酸在线粒体内经氧化脱羧生成。" },
    { cz: "pyruvát + NAD+ + CoA -> acetyl-CoA + CO2 + NADH + H+, multienzymový komplex", en: "Overall reaction: pyruvát + NAD+ + CoA -> acetyl-CoA + CO2 + NADH + H+, catalyzed by a MULTIENZYME COMPLEX. NAD+ here (as for GAPDH) is regenerated from NADH via electron transfer to oxygen in the mitochondrial respiratory chain.", cn: "总反应：丙酮酸+NAD+ +CoA->乙酰辅酶A+CO2+NADH+H+，由一个多酶复合体催化。此处的NAD+（如GAPDH所用的一样）通过线粒体呼吸链中电子传递给氧而由NADH再生。" },
    { cz: "kofaktory: thiamindifosfát, lipoová kyselina, CoA; regenerace lipoové kys.: FAD, NAD+", en: "Cofactors participating: THIAMINE DIPHOSPHATE, LIPOIC ACID, and COENZYME A; FAD and finally NAD+ additionally participate in regenerating lipoic acid. The complex enables decarboxylation with SIMULTANEOUS oxidation — an oxidative decarboxylation of an alpha-keto acid.", cn: "参与的辅因子：焦磷酸硫胺素、硫辛酸和辅酶A；此外FAD及最终的NAD+参与硫辛酸的再生。该复合体使脱羧与氧化同时进行——即α-酮酸的氧化脱羧。" },
    { cz: "3 podjednotky: pyruvátdehydrogenasa (TPP), dihydrolipoyl-transacetylasa (lipoová kys./CoA), dihydrolipoyl-dehydrogenasa (FAD/NAD+)", en: "The complex has THREE named enzyme components, each handling a distinct part of the mechanism (Obr. I): PYRUVÁTDEHYDROGENASA (decarboxylates pyruvate, forms hydroxyethyl-TPP); DIHYDROLIPOYL-TRANSACETYLASA (transfers the acetyl group onto lipoic acid, then onto CoA-SH to give acetyl-CoA); DIHYDROLIPOYL-DEHYDROGENASA (reoxidizes dihydrolipoic acid back to lipoic acid via FAD, then passes electrons to NAD+). Obr. II shows space-filling models of the assembled complex: (a) the dihydrolipoyl-transacetylase forms the structural core; (b) pyruvate dehydrogenase (as alpha2-beta2 dimers) and (c) dihydrolipoyl dehydrogenase are arranged around it.", cn: "该复合体含三个具名的酶组分，各自负责机理中不同的部分（图I）：丙酮酸脱氢酶（使丙酮酸脱羧，生成羟乙基-TPP）；二氢硫辛酰转乙酰基酶（将乙酰基转移到硫辛酸上，再转移到CoA-SH上生成乙酰辅酶A）；二氢硫辛酰脱氢酶（经FAD将二氢硫辛酸重新氧化为硫辛酸，再将电子传递给NAD+）。图II展示了组装复合体的空间填充模型：（a）二氢硫辛酰转乙酰基酶构成结构核心；（b）丙酮酸脱氢酶（以α2β2二聚体形式）和（c）二氢硫辛酰脱氢酶排列在核心周围。" },
    { cz: "mechanismus: CO2 odštěpen -> 'aktivní acetaldehyd' na TPP -> lipoová kys. (thioester) -> CoA -> acetyl-CoA", en: "Mechanism, step by step: CO2 is first split off pyruvate, forming 'active acetaldehyde' bound to C-2 of thiamine diphosphate's thiazole ring. This aldehyde is transferred to lipoic acid, opening its disulfide ring and converting the aldehyde group to an ACETYL group (CH3-CO-) bound by a high-energy THIOESTER bond — this is the actual dehydrogenation/oxidation step, and the Gibbs energy of aldehyde oxidation is conserved in this thioester bond. The acetyl group is then readily transferred onto coenzyme A, forming acetyl-CoA.", cn: "机理逐步如下：首先从丙酮酸脱去CO2，形成结合在焦磷酸硫胺素噻唑环C-2位上的「活性乙醛」。此醛基被转移到硫辛酸上，打开其二硫环，将醛基转化为由高能硫酯键结合的乙酰基（CH3-CO-）——这是真正的脱氢（氧化）步骤，乙醛氧化的吉布斯自由能被保留在这个硫酯键中。乙酰基随后容易地转移到辅酶A上，生成乙酰辅酶A。" },
    { cz: "regenerace lipoové kys.: flavoprotein (velmi negativní redoxní potenciál) -> NAD+; NAD+ -> ~3 ATP dýchacím řetězcem", en: "Lipoic acid is regenerated from dihydrolipoic acid by dehydrogenation via a FLAVOPROTEIN, whose redox potential is much more NEGATIVE than typical flavoproteins — precisely what lets it pass hydrogen onward to NAD+. That NAD+ is then reoxidized in the respiratory chain, yielding ABOUT THREE molecules of ATP.", cn: "硫辛酸由二氢硫辛酸经一种黄素蛋白脱氢而再生，该黄素蛋白的氧化还原电位比一般黄素蛋白负得多——正是这一点使其能够将氢继续传递给NAD+。该NAD+随后在呼吸链中被重新氧化，生成约三分子ATP。" },
    { cz: "obecnější jev: oxidační dekarboxylace alfa-oxokyselin (citrátový cyklus 6.2.2, aminokyseliny 5.2.1)", en: "The book states oxidative decarboxylation of an alpha-keto acid to acyl-CoA, as described here for pyruvate, is a far more GENERALLY used process — encountered in the citrate cycle (ch. 6.2.2), where alpha-ketoglutarate becomes succinyl-CoA, and in processing the alpha-keto acids formed by transamination during metabolism of alanine, valine, isoleucine, and leucine (ch. 5.2.1).", cn: "教材指出，如本节针对丙酮酸所述的α-酮酸氧化脱羧生成酰基辅酶A，是一种应用远为普遍的过程——见于柠檬酸循环（第6.2.2节，α-酮戊二酸转化为琥珀酰辅酶A），以及丙氨酸、缬氨酸、异亮氨酸和亮氨酸经转氨基作用生成的α-酮酸的代谢处理中（第5.2.1节）。" }
  ],
  terms: [
    { cz: "pyruvátdehydrogenasový komplex", en: "pyruvate dehydrogenase complex", cn: "丙酮酸脱氢酶复合体", def_en: "The mitochondrial multienzyme complex (3 enzyme components) that oxidatively decarboxylates pyruvate to acetyl-CoA, using TPP, lipoic acid, CoA, FAD, and NAD+ as cofactors.", def_cn: "线粒体内的多酶复合体（含3个酶组分），利用TPP、硫辛酸、CoA、FAD和NAD+作为辅因子，将丙酮酸氧化脱羧为乙酰辅酶A。" },
    { cz: "thiaminpyrofosfát / thiamindifosfát (TPP)", en: "thiamine pyrophosphate / thiamine diphosphate (TPP)", cn: "焦磷酸硫胺素（TPP）", def_en: "Binds pyruvate's decarboxylated 2-carbon unit at C-2 of its thiazole ring, forming 'active acetaldehyde' (hydroxyethyl-TPP), the complex's first cofactor in the mechanism.", def_cn: "在其噻唑环C-2位结合丙酮酸脱羧后的二碳单位，形成「活性乙醛」（羟乙基-TPP），是该复合体机理中的第一个辅因子。" },
    { cz: "lipoová kyselina", en: "lipoic acid", cn: "硫辛酸", def_en: "Accepts the hydroxyethyl group from TPP via its disulfide ring, converting it to an acetyl group bound by a high-energy thioester bond; regenerated from its dihydro-form by a flavoprotein.", def_cn: "通过其二硫环接受来自TPP的羟乙基，将其转化为由高能硫酯键结合的乙酰基；由一种黄素蛋白使其从二氢形式再生。" },
    { cz: "dihydrolipoyl-transacetylasa", en: "dihydrolipoyl transacetylase", cn: "二氢硫辛酰转乙酰基酶", def_en: "The complex's structural-core component; transfers the acetyl group from lipoic acid onto coenzyme A, forming acetyl-CoA.", def_cn: "该复合体的结构核心组分；将乙酰基从硫辛酸转移到辅酶A上，生成乙酰辅酶A。" },
    { cz: "dihydrolipoyl-dehydrogenasa", en: "dihydrolipoyl dehydrogenase", cn: "二氢硫辛酰脱氢酶", def_en: "A flavoprotein (unusually negative redox potential) that reoxidizes dihydrolipoic acid to lipoic acid, passing electrons via FAD to NAD+.", def_cn: "一种黄素蛋白（氧化还原电位异常负），使二氢硫辛酸重新氧化为硫辛酸，经FAD将电子传递给NAD+。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "List the cofactors the book names as participating in the pyruvate dehydrogenase complex's reaction (including lipoic acid regeneration).",
      q_cn: "列出教材提到参与丙酮酸脱氢酶复合体反应（包括硫辛酸再生）的辅因子。",
      options: [
        "Thiamine diphosphate, lipoic acid, coenzyme A, FAD, NAD+",
        "Biotin, thiamine diphosphate, NADP+",
        "Pyridoxal phosphate, lipoic acid, FMN",
        "Coenzyme A, NAD+, and no others"
      ],
      answer: 0,
      why_en: "The book lists: 'Jako kofaktory se při tomto ději účastní thiamindifosfát, lipoová kyselina a koenzym A. V regeneraci lipoové kyseliny pak dále participují FAD a konečně NAD+' — thiamine diphosphate, lipoic acid, CoA, plus FAD and NAD+ for lipoic acid regeneration. Biotin (used in gluconeogenesis, node 7-9) and pyridoxal phosphate are not part of this list.",
      why_cn: "教材列出：「作为辅因子参与此过程的有焦磷酸硫胺素、硫辛酸和辅酶A。硫辛酸的再生过程中还有FAD、最终还有NAD+参与」——即焦磷酸硫胺素、硫辛酸、CoA，加上用于硫辛酸再生的FAD和NAD+。生物素（用于糖异生，见节点7-9）和磷酸吡哆醛不在此列。"
    },
    {
      type: "mcq",
      q_en: "Which enzyme component of the pyruvate dehydrogenase complex forms the structural core of the assembled complex, per Obr. II?",
      q_cn: "根据图II，丙酮酸脱氢酶复合体的哪个酶组分构成组装复合体的结构核心？",
      options: ["Pyruvate dehydrogenase", "Dihydrolipoyl transacetylase", "Dihydrolipoyl dehydrogenase", "Lactate dehydrogenase"],
      answer: 1,
      why_en: "Obr. II (a) shows dihydrolipoyl-transacetylasa as the large central core, with (b) pyruvate dehydrogenase (as alpha2-beta2 dimers) and (c) dihydrolipoyl dehydrogenase arranged around it. Lactate dehydrogenase is unrelated to this complex.",
      why_cn: "图II（a）显示二氢硫辛酰转乙酰基酶构成较大的中心核心，（b）丙酮酸脱氢酶（以α2β2二聚体形式）和（c）二氢硫辛酰脱氢酶排列在其周围。乳酸脱氢酶与该复合体无关。"
    },
    {
      type: "short",
      q_en: "Name two other metabolic contexts, besides pyruvate, where the book says the same oxidative-decarboxylation-of-an-alpha-keto-acid mechanism is used.",
      q_cn: "除丙酮酸外，教材指出还有哪两个代谢场合使用相同的α-酮酸氧化脱羧机制？",
      accept: ["citrate cycle", "alpha-ketoglutarate", "succinyl-CoA", "alanine", "valine", "isoleucine", "leucine", "transamination", "柠檬酸循环", "琥珀酰辅酶A", "丙氨酸", "缬氨酸", "转氨基"],
      answer_en: "(1) The citrate cycle (ch. 6.2.2), where alpha-ketoglutarate is converted to succinyl-CoA; (2) processing of the alpha-keto acids formed by transamination during metabolism of alanine, valine, isoleucine, and leucine (ch. 5.2.1).",
      answer_cn: "（1）柠檬酸循环（第6.2.2节），α-酮戊二酸转化为琥珀酰辅酶A；（2）丙氨酸、缬氨酸、异亮氨酸和亮氨酸经转氨基作用生成的α-酮酸的代谢处理（第5.2.1节）。"
    }
  ],
  oral: {
    q_en: "Explain how the pyruvate dehydrogenase complex converts pyruvate to acetyl-CoA, naming its cofactors, its three enzyme components, and where NAD+ regeneration and ATP yield fit in.",
    q_cn: "请解释丙酮酸脱氢酶复合体如何将丙酮酸转化为乙酰辅酶A，说出其辅因子、三个酶组分，以及NAD+再生与ATP产量在何处体现。",
    model_en: "Compared to fermentation to lactate or ethanol, which only regenerates NAD+ and releases a small fraction of glucose's energy, the aerobic fate of pyruvate gets much more out of it, by feeding into the citrate cycle and respiratory chain. The entry point is acetyl-CoA, made inside the mitochondrion by oxidative decarboxylation of pyruvate: pyruvate plus NAD+ plus coenzyme A gives acetyl-CoA, carbon dioxide, and NADH, all catalyzed by a multienzyme complex. That complex needs thiamine diphosphate, lipoic acid, and coenzyme A as its core cofactors, plus FAD and ultimately NAD+ again for regenerating lipoic acid. Mechanistically, pyruvate first loses its carboxyl group as CO2, and what's left binds as 'active acetaldehyde' onto the thiazole ring of thiamine diphosphate — that's the pyruvate dehydrogenase component's job. That two-carbon unit is then handed to lipoic acid, which opens its disulfide ring, and in the process the aldehyde becomes an acetyl group held by a high-energy thioester bond — this is the actual oxidation step, and the energy released stays trapped in that thioester. The dihydrolipoyl transacetylase component, which also forms the structural core of the whole assembly, then passes that acetyl group onto coenzyme A, giving acetyl-CoA. Lipoic acid, now in its reduced dihydro form, gets reoxidized by a flavoprotein — dihydrolipoyl dehydrogenase — whose redox potential is unusually negative, which is exactly what lets it push those electrons onward to NAD+. That NAD+ then gets reoxidized in the respiratory chain, yielding around three ATP. And this whole pattern — oxidative decarboxylation of an alpha-keto acid to an acyl-CoA — isn't unique to pyruvate; the same thing happens to alpha-ketoglutarate in the citrate cycle, and to the alpha-keto acids that come from transaminating alanine, valine, isoleucine, and leucine.",
    checklist: [
      "Contrasted the small energy yield of fermentation vs. the larger aerobic yield via acetyl-CoA",
      "Gave the overall equation: pyruvate + NAD+ + CoA -> acetyl-CoA + CO2 + NADH + H+",
      "Named the 3 cofactors (TPP, lipoic acid, CoA) plus FAD/NAD+ for lipoic acid regeneration",
      "Named the 3 enzyme components and their roles (pyruvate dehydrogenase, dihydrolipoyl transacetylase as structural core, dihydrolipoyl dehydrogenase)",
      "Described the mechanism: CO2 loss -> hydroxyethyl-TPP -> acetyl-lipoic acid thioester -> acetyl-CoA",
      "Explained lipoic acid regeneration via the negative-potential flavoprotein -> NAD+ -> respiratory chain -> ~3 ATP",
      "Generalized to alpha-ketoglutarate (citrate cycle) and branched-chain/alanine amino acid metabolism"
    ]
  }
},

{
  id: "7-9",
  book: "cz",
  topicKey: "gluconeogenesis",
  chapter: 7,
  section: "7.9",
  czTitle: "Glukoneogeneze, resyntéza glukosy — obchvat ireverzibilních kroků glykolýzy",
  enTitle: "Gluconeogenesis, glucose resynthesis — bypassing glycolysis's irreversible steps",
  cnTitle: "糖异生，葡萄糖的再合成——绕过糖酵解不可逆步骤",
  pages: [169, 170],
  coverage: "full",
  coverageNote: "Covers the '7.9 Glukoneogeneze, resyntéza glukosy' heading on p.169 (introductory paragraph explaining why glucose resynthesis cannot simply run glycolysis in reverse because pyruvate kinase's reaction is practically irreversible; the oxaloacetate-detour explanation via carboxylation of pyruvate then GTP-driven decarboxylative phosphorylation to phosphoenolpyruvate; the statement that gluconeogenesis proceeds as a straightforward reversal of glycolysis from phosphoenolpyruvate onward; the closing sentence that the final two steps, fructose-1,6-bisphosphate -> fructose-6-phosphate and glucose-6-phosphate -> glucose, proceed by HYDROLYSIS releasing inorganic phosphate rather than by ATP-forming reverse-kinase reactions; and the accompanying figure) PLUS the two paragraphs that open p.170, BEFORE the '7.9.1' heading, which are still this section's own content (patched in 2026-08-05 during chapter-7 reconciliation, since neither this drafting pass nor the one covering 7.9.1 had claimed them): a summary sentence that forming one triose phosphate during gluconeogenesis costs three high-energy phosphates (one for carboxybiotin formation, one for the decarboxylative phosphorylation of oxaloacetate to PEP, one for reducing 3-phosphoglycerate), and a paragraph explaining that skeletal muscle lacks the main gluconeogenic enzymes, so it cannot convert its own anaerobically-produced lactate back to glucose even with oxygen present (though it can further oxidize that lactate aerobically); excess lactate is instead carried by the bloodstream to the liver, resynthesized to glucose there, and that glucose can return to the muscle by blood — i.e. the Cori cycle, though the book never uses that name. The book does not name the fructose-1,6-bisphosphatase or glucose-6-phosphatase enzymes anywhere in this node's page range — it describes both hydrolysis reactions only in the passive voice.",
  cnNote: { topic: null, title: "糖异生 — 笔记中未找到明确对应主题", status: "pending" },
  mustKnow: { en: "Gluconeogenesis is not glycolysis run backwards. Three steps are too far downhill to reverse and each is bypassed by a different enzyme — which is also what lets the two directions be regulated independently.", cn: "糖异生**不是**把糖酵解倒着跑。有三步下坡太陡、无法逆转，每一步都由**不同的酶**绕过去——这同时也是两个方向能被分别调控的原因。" },
  summary: {
    en: "Section 7.9 opens by noting that anaerobic glycolysis produces so much lactate that part of it can be used to resynthesize glucose and glycogen. In principle, this synthesis could run as a straightforward reversal of glycolysis, but for some reactions the equilibrium is shifted against the desired products — mainly PYRUVATE KINASE, whose formation of pyruvate and ATP from phosphoenolpyruvate and ADP is practically irreversible. Glucose resynthesis must therefore take a detour via OXALOACETATE at this point. Oxaloacetate arises by CARBOXYLATION of pyruvate (the accompanying figure shows this using CO2~biotin and ATP -> ADP). Oxaloacetate is phosphorylated much more easily than pyruvate, because formation of the enol form is facilitated; GTP, not ATP, is used for this phosphorylation, releasing CO2 and giving phosphoenolpyruvate (GTP -> GDP). From phosphoenolpyruvate onward, gluconeogenesis already proceeds as a straightforward reversal of glycolysis. At the very end of glucose resynthesis there are two further changes from a pure glycolysis-reversal: fructose-1,6-bisphosphate is HYDROLYZED to fructose-6-phosphate and inorganic phosphate, and glucose itself arises by HYDROLYSIS of glucose-6-phosphate, likewise releasing inorganic phosphate rather than forming ATP, as a literal reversal of the corresponding glycolysis kinase reactions would require.",
    cn: "第7.9节开篇指出，厌氧糖酵解产生的乳酸量很大，其中一部分可用于重新合成葡萄糖和糖原。原则上，这一合成可以直接作为糖酵解的逆过程进行，但对某些反应而言，平衡偏向不利于所需产物的方向——主要是丙酮酸激酶，其由磷酸烯醇丙酮酸和ADP生成丙酮酸和ATP的反应实际上是不可逆的。因此，葡萄糖的再合成在此处必须绕道经过草酰乙酸。草酰乙酸由丙酮酸羧化生成（配图显示此过程使用CO2~生物素和ATP->ADP）。草酰乙酸比丙酮酸容易磷酸化得多，因为其烯醇式的形成更容易；此处的磷酸化使用GTP而非ATP，释放CO2并生成磷酸烯醇丙酮酸（GTP->GDP）。从磷酸烯醇丙酮酸开始，糖异生就已经是糖酵解的直接逆过程了。在葡萄糖再合成的最后阶段，还有两处与单纯的糖酵解逆转不同：果糖-1,6-二磷酸被水解为果糖-6-磷酸和无机磷酸，葡萄糖本身则由葡萄糖-6-磷酸水解生成，同样释放无机磷酸而非生成ATP，这与单纯逆转相应糖酵解激酶反应本应生成ATP的情况不同。"
  },
  points: [
    { cz: "anaerobní glykolýza -> hodně laktátu -> resyntéza glukosy/glykogenu", en: "Anaerobic glycolysis produces such a large amount of lactate that part of it can be used for resynthesis of glucose and glycogen.", cn: "厌氧糖酵解产生大量乳酸，其中一部分可用于重新合成葡萄糖和糖原。" },
    { cz: "resyntéza NENÍ prostý zvrat glykolýzy — pyruvátkinasa ireverzibilní", en: "In principle, resynthesis could run as a straightforward reversal of glycolysis, but for some reactions equilibrium is shifted against the desired products — mainly PYRUVATE KINASE: formation of pyruvate and ATP from phosphoenolpyruvate and ADP is PRACTICALLY IRREVERSIBLE (as already established in node 7-8-3).", cn: "原则上，再合成可以直接作为糖酵解的逆过程进行，但某些反应的平衡偏向不利于所需产物——主要是丙酮酸激酶：由磷酸烯醇丙酮酸和ADP生成丙酮酸和ATP的反应实际上不可逆（如节点7-8-3中已确立）。" },
    { cz: "oklika přes oxalacetát: karboxylace pyruvátu (CO2~biotin, ATP->ADP)", en: "Resynthesis must therefore take a DETOUR via OXALOACETATE at this specific point. Oxaloacetate arises by CARBOXYLATION of pyruvate; the figure shows this reaction using CO2 carried on BIOTIN and consuming ATP (-> ADP).", cn: "因此，再合成在此处必须绕道经过草酰乙酸。草酰乙酸由丙酮酸羧化生成；配图显示该反应使用结合在生物素上的CO2，并消耗ATP（->ADP）。" },
    { cz: "oxalacetát -> fosfoenolpyruvát: GTP (ne ATP!) místo ATP, snadnější tvorba enolformy, uvolnění CO2", en: "Oxaloacetate is phosphorylated much more easily than pyruvate directly, because formation of the ENOL form is facilitated. GTP — NOT ATP — is used for this phosphorylation, releasing CO2 and forming phosphoenolpyruvate (GTP -> GDP).", cn: "草酰乙酸比直接磷酸化丙酮酸容易得多，因为烯醇式的形成更容易。此处的磷酸化使用GTP而非ATP，释放CO2并生成磷酸烯醇丙酮酸（GTP->GDP）。" },
    { cz: "od fosfoenolpyruvátu = přímý zvrat glykolýzy", en: "From phosphoenolpyruvate onward, gluconeogenesis already proceeds as a straightforward REVERSAL of glycolysis (i.e., the reverse of the enolase, mutase, GAPDH/PGK, TPI/aldolase, and PFK/PGI steps covered in nodes 7-8-1 through 7-8-3).", cn: "从磷酸烯醇丙酮酸开始，糖异生就已经是糖酵解的直接逆过程了（即节点7-8-1至7-8-3所述烯醇化酶、变位酶、GAPDH/磷酸甘油酸激酶、TPI/醛缩酶及PFK/磷酸己糖异构酶各步骤的逆反应）。" },
    { cz: "závěr resyntézy: 2 hydrolýzy místo reverzních kinas (F1,6BP->F6P; G6P->glukosa), uvolnění Pi místo ATP, enzymy nejmenovány", en: "At the very end of glucose resynthesis there are two further departures from a pure glycolysis-reversal: fructose-1,6-bisphosphate is HYDROLYZED to fructose-6-phosphate and inorganic phosphate, and glucose arises by HYDROLYSIS of glucose-6-phosphate, likewise releasing inorganic phosphate and NOT ATP, as a literal reversal of the PFK and hexokinase/glucokinase reactions would otherwise require. Honesty note: the book does NOT name an enzyme for either hydrolysis anywhere in this node's page range — it describes both only in the passive voice ('se hydrolyzuje', 'vzniká hydrolýzou'); standard biochemistry calls these fructose-1,6-bisphosphatase and glucose-6-phosphatase, but neither name is ever printed here.", cn: "在葡萄糖再合成的最后阶段，还有两处进一步偏离单纯糖酵解逆转的地方：果糖-1,6-二磷酸被水解为果糖-6-磷酸和无机磷酸，葡萄糖则由葡萄糖-6-磷酸水解生成，同样释放无机磷酸而非ATP，这与单纯逆转PFK及己糖激酶/葡糖激酶反应本应发生的情况不同。诚实说明：教材在本节点覆盖的页码范围内都没有给出这两步水解反应的酶名——只是以被动语态描述（「被水解」、「经水解生成」）；标准生物化学中称为果糖-1,6-二磷酸酶和葡萄糖-6-磷酸酶，但教材从未印出这两个名称。" },
    { cz: "1 triosafosfát při glukoneogenezi = 3 makroergické fosfáty", en: "Opening summary sentence of p.170 (still part of §7.9, before the 7.9.1 heading): forming ONE triose phosphate during gluconeogenesis requires THREE high-energy phosphates — one for forming carboxybiotin (the pyruvate carboxylase step), the second for the decarboxylative phosphorylation of oxaloacetate to phosphoenolpyruvate, and the third for the reduction of 3-phosphoglycerate (i.e. the reverse of the phosphoglycerate-kinase step, consuming ATP where glycolysis's forward direction generated it).", cn: "第170页开篇的总结句（仍属于第7.9节，位于7.9.1标题之前）：糖异生中每合成一个丙糖磷酸需要消耗三个高能磷酸——一个用于形成羧基生物素（丙酮酸羧化酶那一步），第二个用于草酰乙酸脱羧磷酸化为磷酸烯醇丙酮酸，第三个用于3-磷酸甘油酸的还原（即磷酸甘油酸激酶步骤的逆反应，在糖酵解正向进行时该步骤是生成ATP的，此处则消耗ATP）。" },
    { cz: "sval postrádá hlavní enzymy glukoneogeneze -> laktát do jater -> glukosa zpět do svalu (Coriho cyklus, nepojmenován)", en: "Skeletal MUSCLE LACKS the main gluconeogenesis enzymes, so it cannot convert its own anaerobically-produced lactate back to glucose even when oxygen is available (though it CAN further oxidize that lactate aerobically). Excess lactate is instead carried by the bloodstream to the LIVER, where glucose synthesis takes place; the resulting glucose can be transported back to the muscle by blood. This is the CORI CYCLE, though the book never uses that name.", cn: "骨骼肌缺乏糖异生的主要酶系，因此即使有氧存在，也无法将其自身在无氧条件下产生的乳酸转化回葡萄糖（不过肌肉可以在有氧条件下将该乳酸进一步氧化）。多余的乳酸转而经血流被运送到肝脏，在肝脏中进行葡萄糖的合成；生成的葡萄糖可再经血液运回肌肉。这就是Cori循环，尽管教材从未使用这一名称。" }
  ],
  terms: [
    { cz: "glukoneogeneze", en: "gluconeogenesis", cn: "糖异生", def_en: "Resynthesis of glucose (from lactate, via pyruvate), largely a reversal of glycolysis except at three points where glycolysis's own reactions are too far from equilibrium to run backward.", def_cn: "由乳酸（经丙酮酸）重新合成葡萄糖，主要是糖酵解的逆过程，但在三处糖酵解自身反应偏离平衡太远、无法逆向进行的地方除外。" },
    { cz: "pyruvátkarboxylasa (naznačeno obrázkem: CO2~biotin)", en: "pyruvate carboxylase (implied by the figure's CO2~biotin/ATP labeling)", cn: "丙酮酸羧化酶（由配图中CO2~生物素/ATP标注暗示）", def_en: "Carboxylates pyruvate to oxaloacetate, consuming ATP and using biotin to carry the CO2 group, per the figure's labeling (enzyme name itself not spelled out in the p.169 running prose).", def_cn: "使丙酮酸羧化为草酰乙酸，消耗ATP，并按配图标注使用生物素携带CO2基团（该酶名本身未在第169页正文中明确写出）。" },
    { cz: "oxalacetát", en: "oxaloacetate", cn: "草酰乙酸", def_en: "The detour intermediate of gluconeogenesis, formed by carboxylation of pyruvate; phosphorylated (by GTP) to phosphoenolpyruvate, bypassing pyruvate kinase's irreversible reaction.", def_cn: "糖异生绕道所经的中间体，由丙酮酸羧化生成；被GTP磷酸化为磷酸烯醇丙酮酸，从而绕过丙酮酸激酶的不可逆反应。" },
    { cz: "fosforylace oxalacetátu na PEP: GTP místo ATP", en: "oxaloacetate -> phosphoenolpyruvate phosphorylation, using GTP not ATP", cn: "草酰乙酸->磷酸烯醇丙酮酸的磷酸化，使用GTP而非ATP", def_en: "Releases CO2 and consumes GTP (-> GDP) rather than ATP, facilitated by the ease of forming the enol form; from this point on gluconeogenesis is a direct reversal of glycolysis.", def_cn: "释放CO2并消耗GTP（->GDP）而非ATP，因烯醇式易于形成而更容易发生；自此以后糖异生即为糖酵解的直接逆过程。" },
    { cz: "hydrolýza místo reverzní kinasy (F1,6BP->F6P, G6P->glukosa)", en: "hydrolysis replacing a reverse-kinase step (F1,6BP -> F6P, G6P -> glucose)", cn: "以水解代替逆激酶步骤（F1,6BP->F6P，G6P->葡萄糖）", def_en: "The two final steps of glucose resynthesis release inorganic phosphate by hydrolysis rather than forming ATP, unlike a literal reversal of PFK or hexokinase/glucokinase; no enzyme name given on p.169.", def_cn: "葡萄糖再合成的最后两步通过水解释放无机磷酸，而非生成ATP，不同于单纯逆转PFK或己糖激酶/葡糖激酶的反应；第169页未给出酶名。" },
    { cz: "Coriho cyklus (pojem knihou nepoužit)", en: "Cori cycle (term not used by the book)", cn: "Cori循环（教材未使用此术语）", def_en: "The lactate-shuttle loop the book describes without naming: muscle sends the lactate it cannot itself reconvert to glucose to the liver via the blood, the liver resynthesizes glucose, and blood carries that glucose back to the muscle.", def_cn: "教材描述但未命名的乳酸穿梭循环：肌肉将自身无法转化回葡萄糖的乳酸经血液送至肝脏，肝脏重新合成葡萄糖，再经血液将葡萄糖运回肌肉。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why can't gluconeogenesis simply run all of glycolysis in reverse, per the book's own explanation on p.169?",
      q_cn: "根据教材第169页的解释，为什么糖异生不能简单地将整个糖酵解逆向运行？",
      options: [
        "Because glycolysis uses NAD+ and gluconeogenesis needs NADP+",
        "Because pyruvate kinase's reaction (PEP + ADP -> pyruvate + ATP) is practically irreversible",
        "Because pyruvate cannot leave the mitochondrion",
        "Because glucose-6-phosphate cannot be dephosphorylated under any conditions"
      ],
      answer: 1,
      why_en: "The book states the equilibrium of some glycolytic reactions is shifted against the desired products, 'Týká se to hlavně pyruvátkinasy' — mainly concerning pyruvate kinase, whose formation of pyruvate and ATP from PEP and ADP is practically irreversible, forcing a detour via oxaloacetate.",
      why_cn: "教材指出，某些糖酵解反应的平衡偏向不利于所需产物的方向，「主要涉及丙酮酸激酶」——其由PEP和ADP生成丙酮酸和ATP的反应实际上不可逆，因而必须绕道经过草酰乙酸。"
    },
    {
      type: "mcq",
      q_en: "What nucleotide triphosphate does the book say is used to phosphorylate oxaloacetate to phosphoenolpyruvate, and why is this step easier than phosphorylating pyruvate directly?",
      q_cn: "教材指出用什么核苷三磷酸将草酰乙酸磷酸化为磷酸烯醇丙酮酸？为什么这一步比直接磷酸化丙酮酸更容易？",
      options: [
        "ATP; because oxaloacetate has a lower molecular weight",
        "GTP; because formation of the enol form is facilitated",
        "UTP; because oxaloacetate is already partially phosphorylated",
        "CTP; because oxaloacetate is membrane-bound"
      ],
      answer: 1,
      why_en: "The book states 'K fosforylaci se používá v tomto případě GTP místo ATP' and explains oxaloacetate 'se fosforyluje mnohem snadněji, neboť je usnadněna tvorba enolformy' — GTP is used, and the ease comes from facilitated enol-form formation, not molecular weight or pre-existing phosphorylation.",
      why_cn: "教材指出「在这种情况下使用GTP而非ATP进行磷酸化」，并解释草酰乙酸「磷酸化容易得多，因为烯醇式的形成更容易」——用的是GTP，容易的原因在于烯醇式易于形成，而非分子量或已预先磷酸化。"
    },
    {
      type: "mcq",
      q_en: "Why can't skeletal muscle convert its own anaerobically-produced lactate back to glucose, even when oxygen is available?",
      q_cn: "为什么骨骼肌无法将其自身在无氧条件下产生的乳酸转化回葡萄糖，即使有氧存在？",
      options: [
        "Muscle lacks lactate dehydrogenase",
        "Muscle lacks the main gluconeogenesis enzymes",
        "Muscle cannot import oxaloacetate across the mitochondrial membrane",
        "Muscle lactate is chemically different from liver lactate"
      ],
      answer: 1,
      why_en: "The book states plainly that the main gluconeogenesis enzymes are missing in muscle ('Hlavní enzymy glukoneogeneze ve svalu chybějí'), so muscle cannot resynthesize glucose from its own lactate even aerobically, though it can oxidize that lactate further; the liver, which does have those enzymes, does the resynthesis instead, via the bloodstream.",
      why_cn: "教材明确指出，肌肉缺乏糖异生的主要酶系（「主要的糖异生酶在肌肉中是缺失的」），因此即使有氧存在，肌肉也无法用自身的乳酸重新合成葡萄糖，尽管它可以进一步氧化该乳酸；具备这些酶的肝脏则通过血液循环代为完成再合成。"
    },
    {
      type: "short",
      q_en: "Describe the detour gluconeogenesis takes around pyruvate kinase's irreversible reaction, from pyruvate to phosphoenolpyruvate.",
      q_cn: "请描述糖异生绕过丙酮酸激酶不可逆反应的路径，从丙酮酸到磷酸烯醇丙酮酸。",
      accept: ["oxaloacetate", "carboxylation", "biotin", "GTP", "decarboxylation", "草酰乙酸", "羧化", "生物素", "脱羧"],
      answer_en: "Pyruvate is first carboxylated to oxaloacetate (using CO2 carried on biotin, consuming ATP per the figure), then oxaloacetate is phosphorylated using GTP (not ATP), with loss of CO2, to give phosphoenolpyruvate — from which point gluconeogenesis proceeds as a direct reversal of glycolysis.",
      answer_cn: "丙酮酸首先被羧化为草酰乙酸（按配图使用生物素携带的CO2，消耗ATP），随后草酰乙酸使用GTP（而非ATP）磷酸化，同时失去CO2，生成磷酸烯醇丙酮酸——自此以后糖异生即作为糖酵解的直接逆过程进行。"
    }
  ],
  oral: {
    q_en: "Explain why gluconeogenesis cannot be a pure reversal of glycolysis, and describe the oxaloacetate detour that solves the problem at the pyruvate kinase step.",
    q_cn: "请解释为什么糖异生不能是糖酵解的单纯逆转，并描述在丙酮酸激酶这一步解决该问题所采用的草酰乙酸绕道方案。",
    model_en: "During anaerobic glycolysis, enough lactate builds up that part of it can be used to resynthesize glucose and glycogen, and in principle you might expect this synthesis to just be glycolysis running backward. But that doesn't quite work, because some of glycolysis's own reactions have their equilibrium sitting so far toward the products that they're practically irreversible — and the main offender is pyruvate kinase, where making pyruvate and ATP from phosphoenolpyruvate and ADP just doesn't run backward under physiological conditions. So gluconeogenesis has to take a detour right at that point. First, pyruvate gets carboxylated to oxaloacetate — using biotin to carry the CO2 group, and costing an ATP. Oxaloacetate turns out to be much easier to phosphorylate than pyruvate itself, because it can more readily form the enol tautomer, and for that phosphorylation the cell uses GTP instead of ATP, releasing CO2 again and producing phosphoenolpyruvate. From that point onward, gluconeogenesis is genuinely just glycolysis running in reverse. There are two more small departures at the very end, though: instead of a reverse kinase reaction generating ATP, fructose-1,6-bisphosphate gets hydrolyzed straight to fructose-6-phosphate plus inorganic phosphate, and likewise glucose-6-phosphate gets hydrolyzed to free glucose plus inorganic phosphate — releasing phosphate rather than making ATP, which is what a literal reversal of those glycolysis kinase steps would have required. Tallying it up, resynthesizing just one triose phosphate this way costs three separate high-energy phosphates: one to form carboxybiotin, one for the oxaloacetate-to-PEP decarboxylative phosphorylation, and one to reduce 3-phosphoglycerate. And there's an important tissue-level wrinkle: skeletal muscle simply lacks the main gluconeogenesis enzymes, so it can't turn its own lactate back into glucose even when oxygen is plentiful — it can oxidize that lactate further, but not resynthesize glucose from it. Instead, the muscle's excess lactate travels through the bloodstream to the liver, which does have the necessary enzymes and resynthesizes glucose there, and that glucose can then be carried back to the muscle by the blood — the Cori cycle, even though the book itself never gives it that name.",
    checklist: [
      "Stated lactate from anaerobic glycolysis can be used to resynthesize glucose/glycogen",
      "Identified pyruvate kinase's irreversibility as the reason gluconeogenesis can't be a pure reversal",
      "Described pyruvate -> oxaloacetate (carboxylation, biotin, ATP)",
      "Described oxaloacetate -> PEP (GTP not ATP, enol-form facilitation, CO2 release)",
      "Stated that from PEP onward it's a direct reversal of glycolysis",
      "Described the two closing hydrolysis steps (F1,6BP -> F6P + Pi; G6P -> glucose + Pi) replacing reverse-kinase reactions",
      "Did not claim enzyme names for the two hydrolysis steps, since the book never gives them",
      "Tallied the cost as three high-energy phosphates per triose phosphate resynthesized",
      "Explained muscle lacks gluconeogenic enzymes and relies on the liver via blood-borne lactate/glucose (Cori cycle, unnamed by the book)"
    ]
  }
},

{
  id: "7-9-1",
  book: "cz",
  topicKey: "gluconeogenesis",
  chapter: 7,
  section: "7.9.1",
  czTitle: "Glukoneogenéze z aminokyselin",
  enTitle: "Gluconeogenesis from amino acids",
  cnTitle: "由氨基酸的糖异生",
  pages: [170],
  coverage: "full",
  coverageNote: "Full text of '7.9.1 Glukoneogenéze z aminokyselin' on page 170 read directly and verified against the scan -- the entire subsection is only three sentences long. BOUNDARY NOTE (flagged per instructions): page 170 OPENS with two paragraphs of running text that are NOT part of 7.9.1 -- they are the tail end of section 7.9 'Glukoneogeneze, resyntéza glukosy', which starts on p.169 (outside this drafting pass's assigned range, covered by a different agent). That leftover text (i) states that forming one triose phosphate during gluconeogenesis costs three high-energy phosphates -- one for carboxybiotin formation, one for the decarboxylative phosphorylation of oxaloacetate to phosphoenolpyruvate, one for the reduction of 3-phosphoglycerate -- and (ii) explains that the main gluconeogenic enzymes are absent from muscle, so muscle cannot convert its own anaerobically-produced lactate back to glucose even in the presence of oxygen (though it CAN further oxidize that lactate aerobically); excess lactate is instead carried by the bloodstream to the liver, resynthesized to glucose there, and the resulting glucose can be transported back to the muscle by blood (i.e. the Cori cycle, though the book never uses that name). This node deliberately does NOT draft that leftover §7.9 material -- it precedes the 7.9.1 heading and belongs, in spirit, to whichever node covers p.169's §7.9 content. Flagged explicitly for reconciliation: extend that other node's `pages`/coverageNote/points to include this page-170 spillover rather than leaving it uncovered by both drafting passes.",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记 p.139) — 标题匹配、未读原文；'糖的其它代谢途径'一语宽泛，很可能涵盖氨基酸生糖这一代谢路径，但未经证实", status: "partial" },
  mustKnow: { en: "An amino acid can become glucose only if its breakdown yields pyruvate or a four-carbon dicarboxylic acid. That one condition is what divides amino acids into glucogenic and ketogenic.", cn: "一个氨基酸能不能变成葡萄糖，**只取决于一个条件**：它的分解产物是不是丙酮酸或四碳二羧酸。正是这一条，把氨基酸分成了生糖型与生酮型。" },
  summary: {
    en: "Section 7.9.1 is a short, three-sentence subsection: many amino acids can be converted into glucose, on the condition that their breakdown supplies either a four-carbon dicarboxylic acid (the book's example: aspartic acid) or pyruvate (the book's example: alanine). Four-carbon dicarboxylic acids, functioning as citric acid cycle intermediates, can be converted to oxaloacetate, and oxaloacetate -- just like pyruvate -- can feed directly into gluconeogenesis. (Gluconeogenesis's own machinery -- the oxaloacetate/phosphoenolpyruvate bypass around the irreversible pyruvate-kinase step -- was established on p.169 by the preceding, separately-drafted §7.9 node, and is not re-derived here.)",
    cn: "7.9.1节非常简短，仅三句话：许多氨基酸可以转化为葡萄糖，前提是它们的分解代谢能提供四碳二羧酸（教材举例：天冬氨酸）或丙酮酸（教材举例：丙氨酸）。四碳二羧酸作为柠檬酸循环的中间产物，可以转化为草酰乙酸，而草酰乙酸——如同丙酮酸一样——可以直接进入糖异生途径。（糖异生本身的机制，即绕过丙酮酸激酶不可逆步骤的草酰乙酸/磷酸烯醇丙酮酸旁路，已在第169页由前面单独撰写的7.9节点中建立，本节点不再重复推导。）"
  },
  points: [
    { cz: "aminokyseliny → glukosa (podmínka)", en: "Many amino acids can be converted to glucose. The precondition is that their breakdown supplies either a four-carbon dicarboxylic acid or pyruvate.", cn: "许多氨基酸可以转化为葡萄糖。前提条件是它们的分解能提供四碳二羧酸或丙酮酸。" },
    { cz: "čtyřuhlíkové dikarboxylové kyseliny — např. asparagová kyselina", en: "The book's example of an amino acid supplying a four-carbon dicarboxylic acid is aspartic acid (asparagová kyselina).", cn: "教材举出的、能提供四碳二羧酸的氨基酸例子是天冬氨酸。" },
    { cz: "pyruvát — např. alanin", en: "The book's example of an amino acid supplying pyruvate is alanine.", cn: "教材举出的、能提供丙酮酸的氨基酸例子是丙氨酸。" },
    { cz: "dikarboxylové kyseliny = meziprodukty citrátového cyklu → oxalacetát → glukoneogeneze", en: "Four-carbon dicarboxylic acids, as intermediates of the citric acid cycle, can be converted to oxaloacetate, and oxaloacetate can feed DIRECTLY into gluconeogenesis, exactly as pyruvate does.", cn: "四碳二羧酸作为柠檬酸循环的中间产物，可以转化为草酰乙酸，而草酰乙酸可以像丙酮酸一样，直接进入糖异生途径。" }
  ],
  terms: [
    { cz: "asparagová kyselina", en: "aspartic acid (aspartate)", cn: "天冬氨酸", def_en: "A glucogenic amino acid in the book's example; catabolism yields a four-carbon citric-acid-cycle dicarboxylic acid that can be converted to oxaloacetate and enter gluconeogenesis.", def_cn: "教材举例的一种生糖氨基酸；分解代谢产生四碳柠檬酸循环二羧酸，可转化为草酰乙酸进入糖异生途径。" },
    { cz: "alanin", en: "alanine", cn: "丙氨酸", def_en: "A glucogenic amino acid in the book's example; catabolism yields pyruvate, which can enter gluconeogenesis directly.", def_cn: "教材举例的一种生糖氨基酸；分解代谢产生丙酮酸，可直接进入糖异生途径。" },
    { cz: "(pojem odvozen z textu, kniha jej takto nenazývá)", en: "glucogenic amino acid", cn: "生糖氨基酸", def_en: "An amino acid whose carbon skeleton, after deamination, can be converted to glucose via a citric-acid-cycle dicarboxylic acid/oxaloacetate or via pyruvate. The book describes exactly this property without using this exact umbrella term.", def_cn: "脱氨后碳骨架可通过柠檬酸循环二羧酸/草酰乙酸或经丙酮酸转化为葡萄糖的氨基酸。教材描述的正是这一性质，但未使用这一确切术语。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per §7.9.1, which two categories of catabolic product allow an amino acid to be converted into glucose?",
      q_cn: "根据7.9.1节，氨基酸分解代谢产生哪两类产物才能使其转化为葡萄糖？",
      options: ["A four-carbon dicarboxylic acid, or pyruvate", "Acetyl-CoA, or a ketone body", "Only pyruvate, and only via alanine", "A three-carbon dicarboxylic acid, or lactate"],
      answer: 0,
      why_en: "The book states amino acids can become glucose provided their breakdown supplies a four-carbon dicarboxylic acid (e.g. from aspartate) or pyruvate (e.g. from alanine) -- not acetyl-CoA/ketone bodies (which cannot support net gluconeogenesis) and not exclusively alanine.",
      why_cn: "教材指出，氨基酸能否转化为葡萄糖，取决于其分解是否能提供四碳二羧酸（如天冬氨酸提供）或丙酮酸（如丙氨酸提供）——而不是乙酰辅酶A或酮体（它们不能支持净糖异生），也不是仅限于丙氨酸。"
    },
    {
      type: "short",
      q_en: "Using the book's own two examples, explain how amino acid catabolism feeds into gluconeogenesis.",
      q_cn: "用教材给出的两个例子，解释氨基酸分解代谢如何进入糖异生途径。",
      accept: ["aspartate", "asparagová", "alanine", "alanin", "oxaloacetate", "oxalacetát", "pyruvate", "pyruvát", "citric acid cycle", "天冬氨酸", "丙氨酸", "草酰乙酸", "丙酮酸"],
      answer_en: "Aspartic acid's breakdown supplies a four-carbon citric-acid-cycle dicarboxylic acid, which is converted to oxaloacetate and enters gluconeogenesis directly. Alanine's breakdown supplies pyruvate, which also enters gluconeogenesis directly, just as oxaloacetate does.",
      answer_cn: "天冬氨酸分解产生四碳柠檬酸循环二羧酸，转化为草酰乙酸后直接进入糖异生。丙氨酸分解产生丙酮酸，同样可以像草酰乙酸一样直接进入糖异生途径。"
    }
  ],
  oral: {
    q_en: "Explain how amino acids can be converted into glucose, per §7.9.1.",
    q_cn: "根据7.9.1节，解释氨基酸如何被转化为葡萄糖。",
    model_en: "Many amino acids can end up as glucose, but the book is specific about the precondition: their breakdown has to supply either a four-carbon dicarboxylic acid or pyruvate. Aspartic acid is the example given for the first route -- its carbon skeleton is exactly one of those four-carbon citric-acid-cycle dicarboxylic acids, and such acids can be converted to oxaloacetate, which then feeds directly into gluconeogenesis. Alanine is the example for the second route -- its breakdown yields pyruvate directly, and pyruvate, just like oxaloacetate, can enter gluconeogenesis immediately. So there are really just two entry points amino acid carbon skeletons use to reach the gluconeogenic pathway, and both of them converge on steps that were already established for lactate-based glucose resynthesis.",
    checklist: [
      "Stated the precondition: supply a four-carbon dicarboxylic acid or pyruvate",
      "Named aspartic acid as the book's dicarboxylic-acid example",
      "Named alanine as the book's pyruvate example",
      "Explained that four-carbon dicarboxylic acids are citric-acid-cycle intermediates converted to oxaloacetate",
      "Stated both oxaloacetate and pyruvate feed directly into gluconeogenesis"
    ]
  }
},

{
  id: "7-10-1",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.10",
  czTitle: "Enzymové štěpení glykosidů a oligosacharidů — glykosidasy",
  enTitle: "Enzymatic cleavage of glycosides and oligosaccharides — glycosidases",
  cnTitle: "糖苷与寡糖的酶促水解——糖苷酶",
  pages: [170],
  coverage: "full",
  coverageNote: "The opening of '7.10 Enzymové štěpení a biosyntéza glykosidů a oligosacharidů' on page 170 read in full and verified against the scan: the general hydrolysis scheme (a beta-D-glycoside, drawn as a pyranose ring with an OR substituent at the anomeric/beta position, plus H2O, catalyzed by beta-D-glukosidasa, yielding the free sugar with OH restored at the anomeric position plus ROH), through the glycosidase specificity rules, the 'Emulsin' paragraph, and the paragraph on glycosidases' atypical reverse/transfer reaction. Stops before 'K biosyntéze glykosidu a oligosacharidů slouží především glykosyltransferasy...', which belongs to node 7-10-2. NOTE ON A BOOK CLAIM WORTH DOUBLE-CHECKING: the book states 'Emulsin' comes 'ze sladkých mandlí' (from SWEET almonds) -- standard biochemistry more commonly attributes emulsin/amygdalin-hydrolyzing activity to BITTER almonds. This is reproduced here exactly as printed rather than silently corrected, since it cannot be ruled out the book means emulsin as a general almond beta-glucosidase mixture independent of the bitter-almond amygdalin story -- flagged for a future verification pass to check against a second source rather than assumed to be a typo.",
  cnNote: { topic: null, title: "糖苷/寡糖水解酶（糖苷酶）的机制与特异性 — 笔记中未找到明确对应主题", status: "pending" },
  mustKnow: { en: "A glycosidase is specific twice over: to which sugar, and to whether the bond is α or β. That second specificity is why we digest starch but not cellulose, though both are nothing but glucose.", cn: "糖苷酶的专一性是**双重**的：既对哪一种糖专一，也对键是 α 还是 β 专一。**正是第二重专一性**，使得淀粉与纤维素同样只由葡萄糖构成，我们却只消化得了前者。" },
  summary: {
    en: "Section 7.10 opens with the general scheme for hydrolyzing a glycoside or oligosaccharide: a beta-D-glycoside (drawn with an alkoxy group OR at the anomeric carbon) plus water, catalyzed by beta-D-glucosidase, yields the free sugar (its anomeric hydroxyl restored) plus ROH (the released alcohol/aglycone). This reaction's equilibrium lies toward cleavage. The enzymes catalyzing this hydrolysis are called GLYCOSIDASES -- a subclass of HYDROLASES. Glycosidases are highly specific for the identity of the bound sugar and for the type of glycosidic bond (i.e. the anomeric configuration), but show little specificity toward the aglycone (the non-sugar part of the glycoside); this is why glycosidases are named/classified by sugar+configuration -- alpha-D-glucosidases, beta-D-glucosidases, alpha-D-galactosidases, beta-D-galactosidases, beta-D-fructofuranosidases, etc. 'Emulsin,' from (per the book) sweet almonds, is cited as one of the longest-known enzymes of all -- it is actually a MIXTURE of various glycosidases, dominated by beta-D-glucosidase, with alpha-D-glucosidase entirely absent. Mechanistically, glycosidases actually transfer the sugar residue from the glycoside/oligosaccharide onto water; if a substance carrying a free hydroxyl group is present at sufficient concentration, the same enzymes can instead transfer the sugar residue onto that hydroxyl group -- i.e. effectively run in the synthetic direction -- though the book stresses this is an ATYPICAL reaction for these enzymes.",
    cn: "7.10节开篇给出糖苷或寡糖水解的一般反应式：一个β-D-糖苷（异头碳上带有烷氧基OR）与水，在β-D-葡萄糖苷酶催化下，生成游离的糖（异头碳羟基恢复）和ROH（释放出的醇／配基）。该反应的平衡偏向水解方向。催化这种水解反应的酶称为糖苷酶——属于水解酶的一个亚类。糖苷酶对所结合的糖种类及糖苷键类型（即异头构型）具有高度特异性，但对配基（糖苷中非糖部分）的特异性很低；这也是为什么糖苷酶按「糖+构型」来命名／分类——如α-D-葡萄糖苷酶、β-D-葡萄糖苷酶、α-D-半乳糖苷酶、β-D-半乳糖苷酶、β-D-呋喃果糖苷酶等。「乳化素（Emulsin）」——据教材所述来自甜杏仁——被称为已知历史最悠久的酶之一，它实际上是多种糖苷酶的混合物，其中以β-D-葡萄糖苷酶占优势，而完全不含α-D-葡萄糖苷酶。从机制上看，糖苷酶实际上是把糖苷/寡糖上的糖基转移到水分子上；如果体系中有足够浓度的、带游离羟基的物质存在，同样的酶也可以把糖基转移到这个羟基上——也就是说使反应朝合成方向进行——不过教材强调，这对这些酶而言是一种非典型反应。"
  },
  points: [
    { cz: "obecné schéma štěpení glykosidu", en: "General scheme: a beta-D-glycoside (OR at the anomeric carbon) + H2O, catalyzed by beta-D-glukosidasa, yields the free sugar (OH restored at the anomeric carbon) + ROH.", cn: "一般反应式：β-D-糖苷（异头碳带OR基）+ H2O，在β-D-葡萄糖苷酶催化下，生成游离糖（异头碳羟基恢复）+ ROH。" },
    { cz: "rovnováha posunuta na stranu štěpení", en: "The equilibrium of this reaction lies toward CLEAVAGE (hydrolysis), not synthesis.", cn: "该反应的平衡偏向裂解（水解）方向，而非合成方向。" },
    { cz: "glykosidasy = hydrolasy, vysoká specifita k cukru a vazbě, malá k aglykonu", en: "The enzymes catalyzing this reaction are called GLYCOSIDASES, classified among the HYDROLASES. They are highly specific to the bound sugar and to the type of glycosidic bond, but show LITTLE specificity toward the aglycone (the non-sugar part of the glycoside).", cn: "催化该反应的酶称为糖苷酶，属于水解酶。它们对所结合的糖及糖苷键类型高度特异，但对配基（糖苷中的非糖部分）特异性很低。" },
    { cz: "α-D-glukosidasy, β-D-glukosidasy, α/β-D-galaktosidasy, β-D-fruktofuranosidasy", en: "Consequently we distinguish glycosidases by sugar+configuration: e.g. alpha-D-glucosidases, beta-D-glucosidases, alpha-D-galactosidases, beta-D-galactosidases, beta-D-fructofuranosidases, etc.", cn: "因此我们按「糖+构型」区分糖苷酶：例如α-D-葡萄糖苷酶、β-D-葡萄糖苷酶、α-D-半乳糖苷酶、β-D-半乳糖苷酶、β-D-呋喃果糖苷酶等。" },
    { cz: "\"Emulsin\" ze sladkých mandlí — směs glykosidas", en: "'Emulsin,' from (per the book) sweet almonds, is one of the longest-known enzymes of all. It is a MIXTURE of various glycosidases in which beta-D-glucosidase predominates, while alpha-D-glucosidase is completely absent.", cn: "「乳化素（Emulsin）」——据教材所述来自甜杏仁——是已知历史最悠久的酶之一。它是多种糖苷酶的混合物，其中β-D-葡萄糖苷酶占优势，而完全不含α-D-葡萄糖苷酶。" },
    { cz: "glykosidasy mohou (netypicky) i syntézovat", en: "Mechanistically, glycosidases transfer the sugar residue from the glycoside/oligosaccharide onto WATER. If a substance with a free hydroxyl group is present in sufficient concentration, the same enzyme can instead transfer the sugar residue onto THAT hydroxyl group -- effectively synthesizing a new glycoside -- though the book explicitly calls this reaction ATYPICAL for glycosidases.", cn: "从机制上看，糖苷酶是把糖苷/寡糖的糖基转移到水分子上；若体系中存在足够浓度的带游离羟基的物质，同一种酶也可以把糖基转移到该羟基上——实际上等于合成新的糖苷——但教材明确指出，这对糖苷酶而言是非典型反应。" }
  ],
  terms: [
    { cz: "glykosidasa", en: "glycosidase", cn: "糖苷酶", def_en: "A hydrolase that cleaves a glycosidic bond; highly specific to the sugar and bond type, poorly specific to the aglycone.", def_cn: "水解糖苷键的水解酶；对糖及键型高度特异，对配基特异性很低。" },
    { cz: "aglykon", en: "aglycone", cn: "配基（非糖部分）", def_en: "The non-sugar portion of a glycoside; glycosidases show little specificity toward it.", def_cn: "糖苷中非糖的部分；糖苷酶对其特异性很低。" },
    { cz: "\"Emulsin\"", en: "'emulsin'", cn: "乳化素", def_en: "A historic mixture of glycosidases from (per the book) sweet almonds, dominated by beta-D-glucosidase and entirely lacking alpha-D-glucosidase; one of the longest-known enzymes.", def_cn: "据教材所述来自甜杏仁的一种历史悠久的糖苷酶混合物，以β-D-葡萄糖苷酶为主，完全不含α-D-葡萄糖苷酶；是已知历史最悠久的酶之一。" },
    { cz: "α-D-glukosidasa / β-D-glukosidasa", en: "alpha-D-glucosidase / beta-D-glucosidase", cn: "α-D-葡萄糖苷酶／β-D-葡萄糖苷酶", def_en: "Glycosidases named by the sugar and anomeric configuration of the bond they cleave.", def_cn: "按所水解糖及异头构型命名的糖苷酶。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Glycosidases are described as highly specific toward which feature(s), and poorly specific toward which?",
      q_cn: "教材指出糖苷酶对哪些特征高度特异？对哪个特征特异性很低？",
      options: [
        "Highly specific to the bound sugar and bond type; poorly specific to the aglycone",
        "Highly specific to the aglycone; poorly specific to the sugar and bond type",
        "Equally specific to sugar, bond type, and aglycone",
        "Highly specific only to the pH of the reaction, not to any structural feature"
      ],
      answer: 0,
      why_en: "The book states glycosidases are highly specific to the bound sugar and the type of glycosidic bond, but show little specificity toward the aglycone (the non-sugar part) -- exactly the reverse of option B, and not the uniform/pH-based claims in C/D.",
      why_cn: "教材指出糖苷酶对所结合的糖及糖苷键类型高度特异，但对配基（非糖部分）特异性很低——与选项B正好相反，也不是选项C、D所说的均等特异性或依赖pH。"
    },
    {
      type: "mcq",
      q_en: "Regarding 'Emulsin', which statement matches the book exactly?",
      q_cn: "关于「乳化素（Emulsin）」，哪一项与教材描述完全一致？",
      options: [
        "A single pure enzyme, alpha-D-glucosidase, from sweet almonds",
        "A mixture of glycosidases dominated by beta-D-glucosidase, with alpha-D-glucosidase completely absent, from (per the book) sweet almonds",
        "A mixture dominated by alpha-D-glucosidase, from bitter almonds",
        "A single pure beta-D-galactosidase from malt"
      ],
      answer: 1,
      why_en: "The book explicitly describes Emulsin as a mixture of various glycosidases in which beta-D-glucosidase predominates and alpha-D-glucosidase is completely absent, sourced 'ze sladkych mandli' (from sweet almonds, as literally printed) -- not a single pure enzyme, and not dominated by alpha-D-glucosidase.",
      why_cn: "教材明确将乳化素描述为多种糖苷酶的混合物，其中β-D-葡萄糖苷酶占优势、完全不含α-D-葡萄糖苷酶，来源为「甜杏仁」（教材原文如此）——而非单一纯酶，也不是以α-D-葡萄糖苷酶为主。"
    },
    {
      type: "short",
      q_en: "Explain the atypical 'synthetic' reaction glycosidases can perform, and when it occurs.",
      q_cn: "解释糖苷酶可以进行的非典型「合成」反应，以及它在什么情况下发生。",
      accept: ["free hydroxyl", "acceptor", "transfer", "atypical", "游离羟基", "转移", "非典型"],
      answer_en: "Glycosidases normally transfer the sugar residue from a glycoside/oligosaccharide onto water (hydrolysis). If a substance bearing a free hydroxyl group is present in sufficient concentration, the same enzyme can transfer the sugar residue onto that hydroxyl instead, effectively synthesizing a new glycoside -- but the book stresses this is atypical for these enzymes.",
      answer_cn: "糖苷酶通常把糖苷/寡糖上的糖基转移到水分子上（水解）。若体系中存在足够浓度的带游离羟基的物质，同一种酶可以把糖基转移到该羟基上，实际上合成出新的糖苷——但教材强调这对这些酶而言是非典型反应。"
    }
  ],
  oral: {
    q_en: "Explain the general glycosidase reaction, the basis of glycosidase specificity, and the Emulsin example.",
    q_cn: "解释糖苷酶的一般反应、糖苷酶特异性的基础，以及乳化素的例子。",
    model_en: "The book introduces glycosidases through a general scheme: take a beta-D-glycoside, add water, and under catalysis by beta-D-glucosidase you get back the free sugar, with its hemiacetal hydroxyl restored, plus the released alcohol, or aglycone. That equilibrium sits toward cleavage, which is exactly why these hydrolase-class enzymes are grouped as glycosidases. What's distinctive about their specificity is that it's lopsided: they're very particular about which sugar is attached and about the configuration of the glycosidic bond -- alpha versus beta -- which is why you get a whole family of named enzymes like alpha-D-glucosidase, beta-D-glucosidase, alpha- and beta-D-galactosidase, beta-D-fructofuranosidase, and so on. But they care very little about what's on the other side of that bond, the aglycone. Emulsin is the book's illustrative case: supposedly from sweet almonds, and one of the oldest known enzymes in the history of biochemistry, it isn't actually one enzyme at all but a mixture of glycosidases, overwhelmingly beta-D-glucosidase, with essentially no alpha-D-glucosidase activity at all. And there's one more wrinkle worth remembering: glycosidases are, mechanistically, just transferring a sugar residue onto whatever acceptor is around -- normally that's water, giving hydrolysis, but if you flood the system with a compound that has a free hydroxyl group instead, the same enzyme can transfer the sugar onto that hydroxyl and effectively run the reaction backwards, synthesizing a glycoside. The book is careful to call that reaction atypical, not the normal mode of these enzymes.",
    checklist: [
      "Gave the general scheme: beta-D-glycoside + H2O -> sugar (OH restored) + ROH, via beta-D-glucosidase",
      "Stated the equilibrium favors cleavage",
      "Classified glycosidases as hydrolases",
      "Explained high specificity for sugar+bond type, low specificity for aglycone",
      "Named example glycosidases (alpha/beta-D-glucosidase, galactosidases, fructofuranosidase)",
      "Described Emulsin as a mixture dominated by beta-D-glucosidase, lacking alpha-D-glucosidase, from sweet almonds per the book",
      "Explained the atypical synthetic/transfer reaction onto a free hydroxyl acceptor"
    ]
  }
},

{
  id: "7-10-2",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.10",
  czTitle: "Enzymová biosyntéza glykosidů a oligosacharidů — glykosyltransferasy a aktivace monosacharidů",
  enTitle: "Enzymatic biosynthesis of glycosides and oligosaccharides — glycosyltransferases and monosaccharide activation",
  cnTitle: "糖苷与寡糖的酶促合成——糖基转移酶与单糖活化",
  pages: [170, 171],
  coverage: "full",
  coverageNote: "Bottom of page 170 (from 'K biosyntéze glykosidu a oligosacharidů slouží především glykosyltransferasy...' through the UDP-Glc formation mechanism) read in full, plus the top of page 171 (the glucosa-1-fosfát + UTP -> uridindifosfoglukosa + pyrophosphate figure, verified against the scan), the general biosynthesis paragraph, the lactose-biosynthesis worked example with its figure (UDP-galaktosa + glukosa -> UDP + laktosa), and the glucosiduronate/detoxification paragraph with its figure (UDP-Glc -> [enzymatic oxidation] -> UDP-glukuronová kyselina -> [+ HOR] -> glukosiduronová kyselina + UDP). Stops before 'Nukleotidové deriváty glukosy a galaktosy však mohou sloužit ještě k dalším reakcím' on page 172, which belongs to node 7-10-3. Connects to the glycoside/aglycone/glucuronoside concepts already established in an earlier node of this chapter (the one covering O-/N-glycosidic bonds and glucuronosides, drafted by a different pass, ids in the 7-2.x range) -- this node supplies the actual enzymatic MACHINERY (glycosyltransferases, nucleotide-sugar activation) behind that earlier, more definitional treatment.",
  cnNote: { topic: null, title: "糖基转移酶、核苷酸糖活化及乳糖/葡萄糖醛酸苷生物合成 — 笔记中未找到明确对应主题", status: "pending" },
  mustKnow: { en: "Synthesis never runs hydrolysis backwards. The sugar must first be activated as a nucleoside-diphosphate sugar — paying that cost up front is what makes the joining step go forward.", cn: "合成**从不**把水解反过来跑。糖必须先被活化成核苷二磷酸糖——**先付账**，才是让连接这一步得以向前进行的原因。" },
  summary: {
    en: "For biosynthesis of glycosides and oligosaccharides, the relevant enzymes are GLYCOSYLTRANSFERASES (which, unlike glycosidases, do not hydrolyze). Their specificity pattern mirrors glycosidases': specific to the type of sugar transferred and to the type of bond formed. Before a glycosyltransferase can transfer a sugar residue to form a new glycosidic bond, the monosaccharide must first be ACTIVATED -- converted into a high-energy (macroergic) derivative. The activating group is usually a NUCLEOSIDE DIPHOSPHATE, very often URIDINE DIPHOSPHATE (UDP); for MANNOSE specifically the activating group is guanosine diphosphate (GDP), and for SIALIC ACIDS it is cytidine monophosphate (CMP). Activation is a multi-step process, illustrated for glucose: kinase-catalyzed reaction of glucose + ATP gives glucose-6-phosphate; this is rearranged (isomerized) to glucose-1-phosphate, which then reacts enzymatically with uridine triphosphate (UTP) to give URIDINE DIPHOSPHOGLUCOSE (UDP-Glc), with pyrophosphate (P~P) released as the other product. From an activated monosaccharide like UDP-Glc, under glycosyltransferase catalysis and in the presence of an acceptor bearing a free hydroxyl group, glycosides, disaccharides, oligosaccharides, and even polysaccharides can all be biosynthesized -- this same machinery also builds the carbohydrate components of glycoproteins and glycolipids. WORKED EXAMPLE 1, lactose biosynthesis: UDP-galactose + glucose -> UDP + lactose (the galactose residue is transferred from its activated UDP-form onto glucose's free hydroxyl). WORKED EXAMPLE 2, glucosiduronate formation: UDP-glucose can be enzymatically oxidized (using NAD+ as the hydrogen acceptor) to UDP-GLUCURONIC ACID, which a specific transferase can then couple to a hydroxy-compound (HOR) to give a GLUCOSIDURONATE plus free UDP; the hydroxy-compound acceptor may be either an endogenous substance (e.g. a hormone) or one introduced from outside the body (a drug, a foreign dietary substance, etc.) -- this reaction takes place in the LIVER and functions as a route of detoxification/conjugation.",
    cn: "糖苷与寡糖的生物合成依赖糖基转移酶（与糖苷酶不同，它们不进行水解）。其特异性模式与糖苷酶相似：对所转移的糖种类及所形成的键类型都具有特异性。在糖基转移酶能够转移糖基、形成新的糖苷键之前，单糖必须先被活化——转变为高能（大能量）衍生物。活化基团通常是核苷二磷酸，最常见的是尿苷二磷酸（UDP）；但对甘露糖而言，活化基团是鸟苷二磷酸（GDP），对唾液酸而言则是胞苷一磷酸（CMP）。活化是一个多步骤过程，以葡萄糖为例：在激酶催化下，葡萄糖与ATP反应生成葡萄糖-6-磷酸；后者重排（异构化）为葡萄糖-1-磷酸，再与尿苷三磷酸（UTP）发生酶促反应生成尿苷二磷酸葡萄糖（UDP-Glc），同时释放焦磷酸（P~P）。由这样活化的单糖（如UDP-Glc）出发，在糖基转移酶催化下，若有带游离羟基的受体存在，就可以生物合成糖苷、二糖、寡糖乃至多糖——同样的机制也用于构建糖蛋白和糖脂中的糖链组分。实例一——乳糖的生物合成：UDP-半乳糖 + 葡萄糖 → UDP + 乳糖（半乳糖基从其活化的UDP形式转移到葡萄糖的游离羟基上）。实例二——葡萄糖醛酸苷的生成：UDP-葡萄糖可被酶促氧化（以NAD+为氢受体）生成UDP-葡萄糖醛酸，后者可在特定转移酶催化下与羟基化合物（HOR）偶联，生成葡萄糖醛酸苷并释放游离UDP；作为羟基化合物的受体，既可以是体内自身物质（如激素），也可以是外源引入的物质（药物、食物中的异物等）——该反应在肝脏中进行，起到解毒／结合反应途径的作用。"
  },
  points: [
    { cz: "glykosyltransferasy — nehydrolyzují, specifita jako glykosidasy", en: "Biosynthesis of glycosides/oligosaccharides is carried out chiefly by GLYCOSYLTRANSFERASES, which do NOT hydrolyze. Their specificity mirrors glycosidases': specific to the sugar type transferred and to the type of bond formed.", cn: "糖苷/寡糖的生物合成主要由糖基转移酶完成，它们不进行水解。其特异性与糖苷酶相似：对所转移的糖种类及所形成的键类型均有特异性。" },
    { cz: "monosacharid musí být aktivován — makroergický derivát", en: "Before transfer, the monosaccharide must be ACTIVATED, converted into a high-energy (macroergic) derivative.", cn: "在转移之前，单糖必须先被活化，转变为高能（大能量）衍生物。" },
    { cz: "aktivující skupina: NDP — UDP nejčastěji; GDP pro mannosu; CMP pro sialové kyseliny", en: "The activating group is usually a NUCLEOSIDE DIPHOSPHATE, most often UDP. Exceptions given by the book: GDP activates MANNOSE, and CMP activates SIALIC ACIDS.", cn: "活化基团通常是核苷二磷酸，最常见的是UDP。教材给出的例外：GDP用于活化甘露糖，CMP用于活化唾液酸。" },
    { cz: "aktivace glukosy: ATP → glukosa-6-fosfát → glukosa-1-fosfát → (+UTP) → UDP-Glc", en: "Worked activation mechanism for glucose: kinase + ATP gives glucose-6-phosphate; this rearranges to glucose-1-phosphate; glucose-1-phosphate then reacts enzymatically with UTP to give URIDINE DIPHOSPHOGLUCOSE (UDP-Glc), releasing pyrophosphate.", cn: "葡萄糖活化的具体机制：激酶+ATP生成葡萄糖-6-磷酸；后者重排为葡萄糖-1-磷酸；葡萄糖-1-磷酸再与UTP发生酶促反应生成尿苷二磷酸葡萄糖（UDP-Glc），并释放焦磷酸。" },
    { cz: "z aktivovaného monosacharidu: glykosidy, di-, oligo-, polysacharidy, i glykoproteiny/glykolipidy", en: "From an activated monosaccharide, under glycosyltransferase catalysis and with an acceptor bearing a free hydroxyl, glycosides, disaccharides, oligosaccharides, and polysaccharides can all be biosynthesized -- the same route builds the sugar components of glycoproteins and glycolipids.", cn: "由活化的单糖出发，在糖基转移酶催化下，若有带游离羟基的受体存在，即可生物合成糖苷、二糖、寡糖及多糖——同样的途径也用于构建糖蛋白和糖脂的糖链组分。" },
    { cz: "příklad: biosyntéza laktosy = UDP-galaktosa + glukosa → UDP + laktosa", en: "WORKED EXAMPLE: lactose biosynthesis. UDP-galactose + glucose -> UDP + lactose.", cn: "实例：乳糖的生物合成。UDP-半乳糖 + 葡萄糖 → UDP + 乳糖。" },
    { cz: "příklad: tvorba glukosiduronátů (detoxikace, játra)", en: "WORKED EXAMPLE: UDP-glucose is enzymatically oxidized (NAD+ as H-acceptor) to UDP-glucuronic acid, which a transferase couples to a hydroxy-compound (HOR) -- either the body's own (e.g. a hormone) or foreign (a drug, dietary xenobiotic) -- to give a GLUCOSIDURONATE + UDP. This reaction takes place in the LIVER.", cn: "实例：UDP-葡萄糖被酶促氧化（以NAD+为氢受体）生成UDP-葡萄糖醛酸，转移酶再将其与羟基化合物（HOR）偶联——该化合物可以是体内自身物质（如激素），也可以是外源物质（药物、食物中的异物）——生成葡萄糖醛酸苷+UDP。该反应在肝脏中进行。" }
  ],
  terms: [
    { cz: "glykosyltransferasa", en: "glycosyltransferase", cn: "糖基转移酶", def_en: "A non-hydrolyzing enzyme that transfers an activated sugar residue onto an acceptor with a free hydroxyl, forming a new glycosidic bond; specific to sugar type and bond type.", def_cn: "一种不进行水解的酶，把活化的糖基转移到带游离羟基的受体上，形成新的糖苷键；对糖种类和键型均有特异性。" },
    { cz: "uridindifosfoglukosa, UDP-Glc", en: "uridine diphosphoglucose (UDP-Glc)", cn: "尿苷二磷酸葡萄糖 (UDP-Glc)", def_en: "The activated, macroergic form of glucose formed from glucose-1-phosphate + UTP, releasing pyrophosphate; the substrate glycosyltransferases use to build glycosidic bonds.", def_cn: "由葡萄糖-1-磷酸和UTP反应生成的葡萄糖活化（大能量）形式，同时释放焦磷酸；是糖基转移酶构建糖苷键所用的底物。" },
    { cz: "glukosiduronát / UDP-glukuronová kyselina", en: "glucosiduronate / UDP-glucuronic acid", cn: "葡萄糖醛酸苷／UDP-葡萄糖醛酸", def_en: "UDP-glucuronic acid is formed by NAD+-dependent oxidation of UDP-Glc; a transferase couples it to endogenous or foreign hydroxy-compounds to give glucosiduronates, a hepatic detoxification/conjugation route.", def_cn: "UDP-葡萄糖醛酸由UDP-Glc经NAD+依赖的氧化生成；转移酶将其与内源或外源羟基化合物偶联生成葡萄糖醛酸苷，是肝脏中的一种解毒／结合途径。" },
    { cz: "laktosa (biosyntéza)", en: "lactose (biosynthesis)", cn: "乳糖（生物合成）", def_en: "Formed from UDP-galactose + glucose -> UDP + lactose, the book's worked example of glycosyltransferase-catalyzed disaccharide synthesis.", def_cn: "由UDP-半乳糖+葡萄糖生成UDP+乳糖，是教材给出的糖基转移酶催化二糖合成的实例。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which nucleoside diphosphate activates mannose, and which activates sialic acids, per the book?",
      q_cn: "根据教材，甘露糖的活化基团是什么核苷二磷酸？唾液酸的活化基团又是什么？",
      options: [
        "GDP for mannose; CMP for sialic acids",
        "UDP for mannose; GDP for sialic acids",
        "CMP for mannose; UDP for sialic acids",
        "ADP for mannose; UDP for sialic acids"
      ],
      answer: 0,
      why_en: "The book states the activating group is usually UDP, but specifically GDP for mannose and CMP (cytidine monophosphate) for sialic acids -- the other pairings scramble these exceptions.",
      why_cn: "教材指出活化基团通常是UDP，但甘露糖specifically用GDP，唾液酸用CMP（胞苷一磷酸）——其余选项把这两个例外搞乱了。"
    },
    {
      type: "mcq",
      q_en: "In the book's glucose-activation mechanism, what is the correct order of intermediates from glucose to UDP-Glc?",
      q_cn: "在教材葡萄糖活化机制中，从葡萄糖到UDP-Glc，中间产物的正确顺序是什么？",
      options: [
        "Glucose -> (kinase, ATP) -> glucose-6-phosphate -> glucose-1-phosphate -> (+UTP) -> UDP-Glc",
        "Glucose -> glucose-1-phosphate -> glucose-6-phosphate -> (+ATP) -> UDP-Glc",
        "Glucose -> (+UTP directly) -> UDP-Glc, no phosphorylated intermediate",
        "Glucose -> (kinase, ATP) -> glucose-6-phosphate -> (+GTP) -> UDP-Glc"
      ],
      answer: 0,
      why_en: "The book's mechanism runs: glucose + ATP (kinase) -> glucose-6-phosphate -> rearranges to glucose-1-phosphate -> reacts with UTP -> UDP-Glc. The other options reverse the phosphate intermediates, skip them, or substitute the wrong nucleotide triphosphate.",
      why_cn: "教材机制为：葡萄糖+ATP（激酶）→葡萄糖-6-磷酸→重排为葡萄糖-1-磷酸→与UTP反应→UDP-Glc。其余选项颠倒了磷酸中间产物顺序、跳过了中间产物，或用错了核苷三磷酸。"
    },
    {
      type: "short",
      q_en: "Describe the glucosiduronate-formation pathway and explain why it matters physiologically.",
      q_cn: "描述葡萄糖醛酸苷的生成途径，并解释其生理意义。",
      accept: ["UDP-glucuronic acid", "NAD+", "transferase", "detox", "liver", "hormone", "drug", "UDP-葡萄糖醛酸", "解毒", "肝脏", "激素", "药物"],
      answer_en: "UDP-glucose is oxidized (NAD+ as H-acceptor) to UDP-glucuronic acid; a specific transferase then couples this to a hydroxy-compound (HOR) -- an endogenous substance like a hormone, or a foreign one like a drug or dietary xenobiotic -- yielding a glucosiduronate plus UDP. This reaction, occurring in the liver, is a route of detoxification/conjugation.",
      answer_cn: "UDP-葡萄糖被氧化（以NAD+为氢受体）生成UDP-葡萄糖醛酸；特定转移酶再将其与羟基化合物（HOR）偶联——可以是内源物质如激素，也可以是外源物质如药物或食物异物——生成葡萄糖醛酸苷和UDP。该反应在肝脏中进行，是一种解毒／结合途径。"
    }
  ],
  oral: {
    q_en: "Explain how monosaccharides are activated for biosynthesis and walk through the lactose and glucosiduronate examples.",
    q_cn: "解释单糖如何被活化以用于生物合成，并说明乳糖和葡萄糖醛酸苷这两个例子。",
    model_en: "Biosynthesizing a glycoside or oligosaccharide is the mirror image of breaking one down: instead of glycosidases, the enzymes doing the work are glycosyltransferases, which don't hydrolyze at all, and which carry the same two-sided specificity -- picky about which sugar they transfer and which bond they form. But there's a precondition: before any of that transfer can happen, the monosaccharide has to be activated into a high-energy derivative. Most of the time that activating group is a nucleoside diphosphate, and most of the time specifically that's UDP, though the book calls out two exceptions -- mannose gets activated with GDP instead, and sialic acids get activated with CMP. The activation mechanism itself, worked through for glucose, goes: a kinase uses ATP to phosphorylate glucose into glucose-6-phosphate, that rearranges into glucose-1-phosphate, and glucose-1-phosphate then reacts with UTP to produce UDP-glucose, with pyrophosphate coming off as the other product. Once you have an activated sugar like that, a glycosyltransferase plus an acceptor with a free hydroxyl group is enough to build glycosides, disaccharides, oligosaccharides, or full polysaccharides, and this exact machinery is also what attaches the carbohydrate chains of glycoproteins and glycolipids. The book gives two concrete examples. First, lactose: UDP-galactose reacts with glucose to give UDP plus lactose -- the galactose just gets handed over from its activated form onto glucose's free hydroxyl. Second, glucosiduronate formation: UDP-glucose gets oxidized, using NAD+ as the hydrogen acceptor, into UDP-glucuronic acid, and a transferase then couples that onto some hydroxy-compound -- which could be something the body makes itself, like a hormone, or something foreign, like a drug or a dietary xenobiotic -- to give a glucosiduronate plus free UDP. That whole reaction happens in the liver, and it's fundamentally a detoxification and conjugation mechanism.",
    checklist: [
      "Named glycosyltransferases as the biosynthetic enzymes, non-hydrolyzing, with dual specificity",
      "Stated the need for monosaccharide activation into a macroergic nucleotide-sugar derivative",
      "Named UDP as the usual activator, with GDP (mannose) and CMP (sialic acids) as exceptions",
      "Walked through glucose activation: ATP/kinase -> G6P -> G1P -> +UTP -> UDP-Glc + PPi",
      "Stated the general outcome: glycosides/di/oligo/polysaccharides and glycoprotein/glycolipid sugar chains",
      "Gave the lactose example: UDP-galactose + glucose -> UDP + lactose",
      "Gave the glucosiduronate example including NAD+ oxidation, HOR acceptor types, and the liver/detox role"
    ]
  }
},

{
  id: "7-10-3",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.10",
  czTitle: "Další reakce nukleotidových derivátů — epimerace na C-4 a výměna galaktosa/glukosa",
  enTitle: "Further reactions of nucleotide-sugar derivatives — C-4 epimerization and the galactose/glucose exchange",
  cnTitle: "核苷酸糖衍生物的其他反应——C-4差向异构化与半乳糖/葡萄糖交换",
  pages: [172],
  coverage: "full",
  coverageNote: "Full text at the top of page 172 read directly and verified against the scan: the 'a) epimerace na C-4' scheme and its figure (UDP-glukosa ⇌ UDP-galaktosa via UDP-glukosa-4-epimerasa, the pyranose structures' C-4 hydroxyl orientation flip confirmed by zoomed re-read), the stated glucose:galactose equilibrium ratio (1:3), the 'b) výměna mezi galaktosou a glukosou' reaction and its enzyme name, the summary statement calling the combined transferase+4-epimerase+galactokinase route the single most important metabolic pathway of galactose, and the accompanying circular figure (galaktosa --galaktokinasa/ATP--> galaktosa-1-fosfát --transferasa--> glukosa-1-fosfát, closing via UDP-glukosa ⇌ UDP-galaktosa through the epimerasa). Stops immediately before the '7.11 Enzymové odbourávání polysacharidů' heading later on the same page, which belongs to node 7-11-1-1.",
  cnNote: { topic: null, title: "UDP-糖的C-4差向异构化与半乳糖代谢途径（Leloir型途径） — 笔记中未找到明确对应主题", status: "pending" },
  mustKnow: { en: "The same UDP-sugar that donates a residue can also be rebuilt in place: UDP-glucose-4-epimerase flips C-4 and turns glucose into galactose without ever releasing a free sugar.", cn: "同一个 UDP-糖既可以供出糖基，也可以**被就地改造**：UDP-葡萄糖-4-差向异构酶翻转 C-4，把葡萄糖变成半乳糖，**全程不释放游离糖**。" },
  summary: {
    en: "Nucleotide derivatives of glucose and galactose (i.e. UDP-sugars) can serve further reactions beyond simple glycosidic-bond formation. (a) C-4 EPIMERIZATION: UDP-glucose and UDP-galactose interconvert via UDP-GLUCOSE-4-EPIMERASE (UDP-glukosa-4-epimerasa) -- a reaction that changes only the configuration at C-4 of the sugar ring. This equilibrium settles at a glucose:galactose ratio of 1:3. (b) EXCHANGE BETWEEN GALACTOSE AND GLUCOSE: UDP-glucose + galactose-1-phosphate is in equilibrium with UDP-galactose + glucose-1-phosphate, catalyzed by HEXOSE-1-PHOSPHATE URIDYLYLTRANSFERASE; this reaction is how galactose becomes bound to the UDP coenzyme. Through the COMBINED action of this transferase, the 4-epimerase, and GALACTOKINASE (which first phosphorylates free galactose to galactose-1-phosphate using ATP), galactose can be converted all the way to glucose-1-phosphate -- the book explicitly calls this the single most important metabolic pathway of galactose.",
    cn: "葡萄糖和半乳糖的核苷酸衍生物（即UDP-糖）除了参与简单的糖苷键形成外，还可以参与其他反应。(a) C-4差向异构化：UDP-葡萄糖与UDP-半乳糖通过UDP-葡萄糖-4-差向异构酶相互转化——该反应只改变糖环C-4位的构型。该平衡最终稳定在葡萄糖：半乳糖=1:3的比例。(b) 半乳糖与葡萄糖之间的交换：UDP-葡萄糖 + 半乳糖-1-磷酸 与 UDP-半乳糖 + 葡萄糖-1-磷酸 处于平衡，由己糖-1-磷酸尿苷酰转移酶催化；正是这一反应使半乳糖与UDP辅酶结合。通过该转移酶、4-差向异构酶与半乳糖激酶（先用ATP将游离半乳糖磷酸化为半乳糖-1-磷酸）三者的协同作用，半乳糖最终可以转化为葡萄糖-1-磷酸——教材明确指出，这是半乳糖最重要的代谢途径。"
  },
  points: [
    { cz: "nukleotidové deriváty → další reakce (nejen tvorba glykosidů)", en: "UDP-sugars can serve further reactions beyond simple glycosidic-bond formation, specifically epimerization and exchange with free hexose phosphates.", cn: "UDP-糖除了参与简单的糖苷键形成外，还可以参与其他反应，具体为差向异构化及与游离己糖磷酸之间的交换。" },
    { cz: "a) epimerace na C-4: UDP-glukosa ⇌ UDP-galaktosa (UDP-glukosa-4-epimerasa)", en: "(a) C-4 EPIMERIZATION: UDP-glucose and UDP-galactose interconvert via UDP-glucose-4-epimerase, differing only in configuration at C-4.", cn: "(a) C-4差向异构化：UDP-葡萄糖与UDP-半乳糖通过UDP-葡萄糖-4-差向异构酶相互转化，两者仅在C-4构型上不同。" },
    { cz: "rovnováha glukosa : galaktosa = 1 : 3", en: "This epimerization equilibrium settles at a glucose:galactose ratio of 1:3.", cn: "该差向异构化平衡最终稳定在葡萄糖：半乳糖=1:3的比例。" },
    { cz: "b) výměna: UDP-glukosa + galaktosa-1-P ⇌ UDP-galaktosa + glukosa-1-P (hexosa-1-fosfát-uridyltransferasa)", en: "(b) EXCHANGE: UDP-glucose + galactose-1-phosphate is in equilibrium with UDP-galactose + glucose-1-phosphate, catalyzed by HEXOSE-1-PHOSPHATE URIDYLYLTRANSFERASE -- this is how galactose becomes bound to the UDP coenzyme.", cn: "(b) 交换：UDP-葡萄糖 + 半乳糖-1-磷酸 与 UDP-半乳糖 + 葡萄糖-1-磷酸 处于平衡，由己糖-1-磷酸尿苷酰转移酶催化——正是这一反应使半乳糖与UDP辅酶结合。" },
    { cz: "galaktokinasa: galaktosa + ATP → galaktosa-1-fosfát", en: "The book's figure shows GALACTOKINASE phosphorylating free galactose to galactose-1-phosphate, consuming ATP (-> ADP), as the entry step of the pathway.", cn: "教材配图显示半乳糖激酶把游离半乳糖磷酸化为半乳糖-1-磷酸，消耗ATP（生成ADP），是该途径的入口步骤。" },
    { cz: "transferasa + 4-epimerasa + galaktokinasa = nejdůležitější metabolická cesta galaktosy", en: "Through the COMBINED action of the transferase, the 4-epimerase, and galactokinase, galactose can be converted all the way to glucose-1-phosphate -- the book states explicitly this is the SINGLE MOST IMPORTANT metabolic pathway of galactose.", cn: "通过转移酶、4-差向异构酶与半乳糖激酶的协同作用，半乳糖最终可以转化为葡萄糖-1-磷酸——教材明确指出，这是半乳糖最重要的代谢途径。" }
  ],
  terms: [
    { cz: "UDP-glukosa-4-epimerasa", en: "UDP-glucose-4-epimerase", cn: "UDP-葡萄糖-4-差向异构酶", def_en: "The enzyme interconverting UDP-glucose and UDP-galactose by inverting the configuration at C-4; equilibrium ratio glucose:galactose = 1:3.", def_cn: "通过翻转C-4构型使UDP-葡萄糖与UDP-半乳糖相互转化的酶；平衡比为葡萄糖:半乳糖=1:3。" },
    { cz: "hexosa-1-fosfát-uridyltransferasa", en: "hexose-1-phosphate uridylyltransferase", cn: "己糖-1-磷酸尿苷酰转移酶", def_en: "The enzyme catalyzing UDP-glucose + galactose-1-phosphate <-> UDP-galactose + glucose-1-phosphate; how galactose becomes bound to the UDP coenzyme.", def_cn: "催化UDP-葡萄糖+半乳糖-1-磷酸⇌UDP-半乳糖+葡萄糖-1-磷酸的酶；是半乳糖与UDP辅酶结合的途径。" },
    { cz: "galaktokinasa", en: "galactokinase", cn: "半乳糖激酶", def_en: "Phosphorylates free galactose to galactose-1-phosphate using ATP; the entry step of galactose's principal metabolic pathway.", def_cn: "利用ATP将游离半乳糖磷酸化为半乳糖-1-磷酸；是半乳糖主要代谢途径的入口步骤。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "At equilibrium, what is the glucose:galactose ratio produced by UDP-glucose-4-epimerase, per the book?",
      q_cn: "根据教材，UDP-葡萄糖-4-差向异构酶反应达到平衡时，葡萄糖：半乳糖的比例是多少？",
      options: ["1:1", "1:3", "3:1", "1:10"],
      answer: 1,
      why_en: "The book states the equilibrium settles at a glucose:galactose ratio of 1:3, favoring galactose over glucose at this particular equilibrium step -- not the reverse ratio or an even split.",
      why_cn: "教材指出该平衡最终稳定在葡萄糖：半乳糖=1:3，即在这一平衡步骤中半乳糖比葡萄糖更多——而非相反比例或均等分配。"
    },
    {
      type: "short",
      q_en: "Name the three enzymes whose combined action converts galactose to glucose-1-phosphate, and state what each does.",
      q_cn: "列出使半乳糖转化为葡萄糖-1-磷酸的三种酶，并说明各自的作用。",
      accept: ["galactokinase", "epimerase", "uridylyltransferase", "transferase", "半乳糖激酶", "差向异构酶", "尿苷酰转移酶", "转移酶"],
      answer_en: "Galactokinase phosphorylates free galactose to galactose-1-phosphate (using ATP). Hexose-1-phosphate uridylyltransferase exchanges this onto UDP (from UDP-glucose), giving UDP-galactose + glucose-1-phosphate. UDP-glucose-4-epimerase then interconverts UDP-galactose back to UDP-glucose, closing the cycle so it can run again.",
      answer_cn: "半乳糖激酶利用ATP将游离半乳糖磷酸化为半乳糖-1-磷酸。己糖-1-磷酸尿苷酰转移酶将其与UDP-葡萄糖交换，生成UDP-半乳糖和葡萄糖-1-磷酸。UDP-葡萄糖-4-差向异构酶再将UDP-半乳糖转化回UDP-葡萄糖，使循环得以持续运转。"
    }
  ],
  oral: {
    q_en: "Explain the two further reactions of nucleotide-sugar derivatives described here, and how together they form galactose's main metabolic pathway.",
    q_cn: "解释这里描述的核苷酸糖衍生物的两个后续反应，以及它们如何共同构成半乳糖的主要代谢途径。",
    model_en: "Beyond simply forming glycosidic bonds, the nucleotide derivatives of glucose and galactose can undergo two further reactions the book singles out. The first is C-4 epimerization: UDP-glucose and UDP-galactose interconvert through UDP-glucose-4-epimerase, a reaction that flips the configuration at just one carbon, C-4, and nothing else, and at equilibrium you end up with a glucose to galactose ratio of one to three. The second is an exchange reaction: UDP-glucose plus galactose-1-phosphate sits in equilibrium with UDP-galactose plus glucose-1-phosphate, and the enzyme running that swap is called hexose-1-phosphate uridylyltransferase -- this is literally the step where galactose gets attached onto the UDP coenzyme. Put these two reactions together with one more enzyme, galactokinase, which uses ATP to phosphorylate free galactose into galactose-1-phosphate in the first place, and you get a complete three-enzyme cycle that converts dietary galactose all the way into glucose-1-phosphate, ready to feed into glycolysis or glycogen synthesis. The book doesn't hedge on the importance of this: it calls this three-enzyme route the single most important metabolic pathway galactose has.",
    checklist: [
      "Explained C-4 epimerization: UDP-glucose <-> UDP-galactose via the 4-epimerase",
      "Stated the 1:3 glucose:galactose equilibrium ratio",
      "Explained the exchange reaction and named hexose-1-phosphate uridylyltransferase",
      "Named galactokinase as phosphorylating free galactose using ATP",
      "Stated the combined 3-enzyme route converts galactose to glucose-1-phosphate",
      "Quoted the book's own claim that this is galactose's single most important metabolic pathway"
    ]
  }
},

{
  id: "7-11-1-1",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.11.1",
  czTitle: "Hydrolytické štěpení — α- a β-amylasy",
  enTitle: "Hydrolytic cleavage — alpha- and beta-amylases",
  cnTitle: "水解性裂解——α-淀粉酶与β-淀粉酶",
  pages: [172, 173],
  coverage: "full",
  coverageNote: "The '7.11 Enzymové odbourávání polysacharidů' heading and its one-sentence framing paragraph (digestive-tract breakdown via hydrolases vs. intracellular breakdown, which proceeds differently -- elaborated later in 7.11.2) read on page 172, plus the full '7.11.1 Hydrolytické štěpení' subsection through the end of the alpha-amylase and beta-amylase paragraphs (bottom of p.172 through the top of p.173), read directly and verified against the scans. Stops before 'Konečným produktem odbourávání polysacharidů...', which belongs to node 7-11-1-2.",
  cnNote: { topic: null, title: "消化道多糖水解酶（α-/β-淀粉酶）— 笔记中未找到明确对应主题", status: "pending" },
  mustKnow: { en: "In the gut, polysaccharides are broken by hydrolysis. α-amylase cuts at random points inside the chain, β-amylase chews maltose off the ends — endo versus exo is the distinction worth keeping.", cn: "在消化道里，多糖是靠**水解**分解的。α-淀粉酶在链的**内部**随机切，β-淀粉酶从**末端**一个个啃下麦芽糖——**内切 vs 外切**，这才是值得记住的区别。" },
  summary: {
    en: "Section 7.11 opens by insisting on a fundamental distinction: the breakdown of polysaccharides DURING DIGESTION (in the gut) proceeds via HYDROLASES, whereas the breakdown of polysaccharides INSIDE CELLS proceeds differently (by phosphorolysis -- elaborated in §7.11.2). Subsection 7.11.1 covers the digestive hydrolases: AMYLASES, the important digestive enzymes that cleave starch (both amylose and amylopectin) and glycogen down to maltose units; the book distinguishes alpha-, beta-, and gamma-amylases. ALPHA-AMYLASES act first as ENDOGLYCOSIDASES -- cleaving WITHIN the polysaccharide chain -- and are called 'alpha' because the maltose they ultimately release is in the alpha-form (equilibrium with the beta-form is then established afterward by mutarotation). Attacking amylose's alpha-helical structure, alpha-amylase first cleaves glycosidic bonds spaced one helical turn apart, producing oligosaccharides of 6-7 glucose units, and only then releases individual maltose units. On amylopectin, cleavage is DISORDERED, branch points are NOT attacked, and the end products are maltose plus the residual, unsplit branched structures. Alpha-amylases occur e.g. in saliva, the pancreas, and malt. BETA-AMYLASES, by contrast, act as EXOGLYCOSIDASES, cleaving maltose units off the ENDS of polysaccharide chains; they are called 'beta' because the maltose they release is in the beta-form (again equilibrating to alpha by mutarotation). Beta-amylases hydrolyze amylose PRACTICALLY COMPLETELY, but on amylopectin cleavage stops BEFORE the branch points, leaving a relatively high-molecular-weight DEXTRIN. Beta-amylases occur predominantly in the plant kingdom.",
    cn: "7.11节开篇强调一个根本区别：消化道内（消化过程中）多糖的分解是通过水解酶进行的，而细胞内多糖的分解方式不同（通过磷酸解，详见7.11.2节）。7.11.1小节介绍消化道水解酶：淀粉酶，是重要的消化酶，能将淀粉（直链淀粉与支链淀粉）及糖原分解为麦芽糖单位；教材区分α-、β-和γ-淀粉酶。α-淀粉酶首先作为内切糖苷酶起作用——在多糖链内部进行切割——之所以称为「α」，是因为最终释放出的麦芽糖为α构型（之后通过变旋作用建立α与β构型的平衡）。α-淀粉酶攻击直链淀粉的α-螺旋结构时，先切割相隔一个螺旋圈的糖苷键，生成含6至7个葡萄糖单位的寡糖，随后才逐个释放麦芽糖单位。对支链淀粉而言，切割是无序进行的，分支点不被攻击，最终产物为麦芽糖及未被切割的残余分支结构。α-淀粉酶存在于唾液、胰腺和麦芽中。相比之下，β-淀粉酶作为外切糖苷酶起作用，从多糖链的末端切下麦芽糖单位；之所以称为「β」，是因为释放出的麦芽糖为β构型（同样经变旋作用平衡为α构型）。β-淀粉酶几乎能将直链淀粉完全水解，但对支链淀粉，切割会在分支点之前停止，剩下相对高分子量的糊精。β-淀粉酶主要存在于植物界。"
  },
  points: [
    { cz: "trávení (hydrolasy) vs. buňky (jinak)", en: "The book insists on a fundamental distinction: polysaccharide breakdown DURING DIGESTION proceeds via hydrolases, while breakdown INSIDE CELLS proceeds differently (by phosphorolysis, §7.11.2).", cn: "教材强调一个根本区别：消化过程中多糖的分解通过水解酶进行，而细胞内的分解方式不同（通过磷酸解，见7.11.2节）。" },
    { cz: "amylasy štěpí škrob i glykogen na maltosu; α, β, γ", en: "AMYLASES are the important digestive enzymes that cleave starch (amylose AND amylopectin) and glycogen down to maltose units. The book distinguishes three types: alpha-, beta-, and gamma-amylases.", cn: "淀粉酶是重要的消化酶，能将淀粉（直链淀粉和支链淀粉）及糖原分解为麦芽糖单位。教材区分三种：α-、β-和γ-淀粉酶。" },
    { cz: "α-amylasy = endoglykosidasy, název od α-formy uvolněné maltosy", en: "ALPHA-AMYLASES act as ENDOGLYCOSIDASES (cleaving within the chain). They are called 'alpha' because the maltose ultimately released is in the alpha-form; mutarotation then establishes the alpha/beta equilibrium.", cn: "α-淀粉酶作为内切糖苷酶（在链内部切割）。之所以称为「α」，是因为最终释放的麦芽糖为α构型；此后通过变旋作用建立α/β平衡。" },
    { cz: "α-amylasa na amylose: nejprve oligosacharidy 6-7 jednotek (po závitech), pak maltosa", en: "On amylose's helical structure, alpha-amylase first cleaves bonds spaced ONE HELICAL TURN apart, producing 6-7-glucose-unit oligosaccharides, and only afterward releases individual maltose units.", cn: "对直链淀粉的螺旋结构，α-淀粉酶首先切割相隔一个螺旋圈的键，生成含6-7个葡萄糖单位的寡糖，随后才逐个释放麦芽糖单位。" },
    { cz: "α-amylasa na amylopektinu: neuspořádaně, větvení neatakováno", en: "On amylopectin, alpha-amylase cleaves in a DISORDERED manner; branch points are NOT attacked. The final products are maltose plus the residual unsplit branched structures.", cn: "对支链淀粉，α-淀粉酶的切割是无序的；分支点不被攻击。最终产物为麦芽糖及未被切割的残余分支结构。" },
    { cz: "α-amylasy: sliny, pankreas, slad", en: "Alpha-amylases occur e.g. in SALIVA, the PANCREAS, and MALT.", cn: "α-淀粉酶存在于唾液、胰腺和麦芽中。" },
    { cz: "β-amylasy = exoglykosidasy, název od β-formy uvolněné maltosy", en: "BETA-AMYLASES act as EXOGLYCOSIDASES, cleaving maltose units off the ENDS of the chain. They are called 'beta' because the released maltose is in the beta-form, again equilibrating by mutarotation.", cn: "β-淀粉酶作为外切糖苷酶，从链的末端切下麦芽糖单位。之所以称为「β」，是因为释放的麦芽糖为β构型，同样通过变旋作用达到平衡。" },
    { cz: "β-amylasa: amylosa téměř úplně, amylopektin → dextrin před větvením", en: "Beta-amylases hydrolyze amylose PRACTICALLY COMPLETELY; on amylopectin, cleavage stops BEFORE branch points, leaving a relatively high-molecular-weight DEXTRIN. Beta-amylases occur predominantly in the PLANT kingdom.", cn: "β-淀粉酶几乎能将直链淀粉完全水解；对支链淀粉，切割在分支点之前停止，留下相对高分子量的糊精。β-淀粉酶主要存在于植物界。" }
  ],
  terms: [
    { cz: "amylasa", en: "amylase", cn: "淀粉酶", def_en: "A digestive enzyme cleaving starch and glycogen; the book distinguishes alpha-, beta-, and gamma-amylase by mechanism and product stereochemistry.", def_cn: "分解淀粉和糖原的消化酶；教材按机制和产物立体化学区分α-、β-和γ-淀粉酶。" },
    { cz: "α-amylasa", en: "alpha-amylase", cn: "α-淀粉酶", def_en: "An endoglycosidase cleaving within the starch/glycogen chain, releasing alpha-maltose; found in saliva, pancreas, malt.", def_cn: "在淀粉/糖原链内部切割的内切糖苷酶，释放α-麦芽糖；存在于唾液、胰腺、麦芽。" },
    { cz: "β-amylasa", en: "beta-amylase", cn: "β-淀粉酶", def_en: "An exoglycosidase cleaving maltose units from chain ends, releasing beta-maltose; hydrolyzes amylose almost completely but stops at amylopectin branch points, leaving dextrin; mainly plant-derived.", def_cn: "从链末端切下麦芽糖单位的外切糖苷酶，释放β-麦芽糖；几乎能完全水解直链淀粉，但在支链淀粉分支点处停止，留下糊精；主要来自植物。" },
    { cz: "dextrin", en: "dextrin", cn: "糊精", def_en: "The high-molecular-weight residue left after beta-amylase action stops at amylopectin's branch points.", def_cn: "β-淀粉酶作用在支链淀粉分支点处停止后剩下的高分子量残余物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What distinguishes alpha-amylase from beta-amylase in terms of cleavage pattern, and why are they named alpha/beta at all?",
      q_cn: "α-淀粉酶与β-淀粉酶在切割方式上有何不同？它们为何分别命名为α和β？",
      options: [
        "Alpha-amylase is an endoglycosidase (cuts within the chain) releasing alpha-maltose; beta-amylase is an exoglycosidase (cuts from the ends) releasing beta-maltose",
        "Alpha-amylase cuts from the ends releasing beta-maltose; beta-amylase cuts within the chain releasing alpha-maltose",
        "Both cut within the chain; they differ only in which organism produces them",
        "Alpha-amylase only degrades glycogen; beta-amylase only degrades starch"
      ],
      answer: 0,
      why_en: "The book defines alpha-amylase as an endoglycosidase releasing maltose in the alpha-form, and beta-amylase as an exoglycosidase releasing maltose in the beta-form -- exactly the naming logic in option A; the other options invert or misstate this.",
      why_cn: "教材将α-淀粉酶定义为释放α构型麦芽糖的内切糖苷酶，将β-淀粉酶定义为释放β构型麦芽糖的外切糖苷酶——与选项A的命名逻辑一致；其余选项颠倒或错误陈述了这一点。"
    },
    {
      type: "short",
      q_en: "Compare what happens when alpha-amylase versus beta-amylase acts on amylopectin's branch points.",
      q_cn: "比较α-淀粉酶与β-淀粉酶作用于支链淀粉分支点时的不同结果。",
      accept: ["disordered", "not attacked", "stops before", "dextrin", "无序", "不被攻击", "分支点前停止", "糊精"],
      answer_en: "Alpha-amylase cleaves amylopectin in a disordered fashion, simply avoiding the branch points themselves, leaving maltose plus residual unsplit branched fragments. Beta-amylase instead works in from the chain ends and its cleavage stops before it reaches each branch point, leaving a relatively high-molecular-weight dextrin.",
      answer_cn: "α-淀粉酶对支链淀粉的切割是无序的，只是回避分支点本身，留下麦芽糖及未被切割的残余分支片段。β-淀粉酶则从链末端向内切割，在到达每个分支点之前就停止，留下相对高分子量的糊精。"
    }
  ],
  oral: {
    q_en: "Explain the digestion-vs-cell distinction for polysaccharide breakdown, then describe alpha- and beta-amylase.",
    q_cn: "解释多糖分解在消化道与细胞内的区别，然后描述α-淀粉酶与β-淀粉酶。",
    model_en: "The book opens this whole section by drawing a line that has to be kept straight: breaking down polysaccharides during digestion, out in the gut, is a hydrolysis job, done by hydrolases, whereas breaking them down inside cells happens by a completely different mechanism, phosphorolysis, which comes later in section 7.11.2. On the digestive side, the key enzymes are amylases, which cut starch -- both amylose and amylopectin -- and glycogen down into maltose units, and the book splits these into three types. Alpha-amylase works as an endoglycosidase, meaning it cuts within the chain rather than from the ends, and it earns the name alpha because the maltose it eventually releases comes out in the alpha configuration, with mutarotation then settling the alpha/beta equilibrium afterward. Its attack on amylose's helical structure is staged: first it cuts bonds that are exactly one helical turn apart, producing chunks of six to seven glucose units, and only after that does it work those chunks down to individual maltose units. On amylopectin, though, it just cuts wherever it can, avoiding the branch points, so what's left over is maltose plus whatever branched fragments it couldn't get to. You find alpha-amylase in saliva, the pancreas, and malt. Beta-amylase does something different: it's an exoglycosidase, chewing maltose units off strictly from the ends of the chain, and it's named beta because that released maltose comes out in the beta form. It's thorough on amylose, hydrolyzing it almost completely, but on amylopectin it simply can't get past the branch points, so it stops there and leaves behind a fairly large leftover called dextrin. Beta-amylase is mostly a plant enzyme.",
    checklist: [
      "Distinguished digestive (hydrolase) breakdown from intracellular (phosphorolytic) breakdown",
      "Named amylases as starch/glycogen-degrading digestive enzymes, three types",
      "Explained alpha-amylase as an endoglycosidase, naming logic via alpha-maltose release",
      "Described alpha-amylase's staged attack on amylose (6-7-unit oligosaccharides, then maltose) and disordered attack on amylopectin",
      "Named alpha-amylase's locations: saliva, pancreas, malt",
      "Explained beta-amylase as an exoglycosidase, naming logic via beta-maltose release",
      "Described beta-amylase's near-complete amylose hydrolysis vs. stopping at amylopectin branches, leaving dextrin"
    ]
  }
},

{
  id: "7-11-1-2",
  book: "cz",
  topicKey: "feeder-pathways-glycolysis",
  chapter: 7,
  section: "7.11.1",
  czTitle: "Hydrolytické štěpení — konečné produkty, γ-amylasy a celulasy",
  enTitle: "Hydrolytic cleavage — final products, gamma-amylases, and cellulases",
  cnTitle: "水解性裂解——终产物、γ-淀粉酶与纤维素酶",
  pages: [173],
  coverage: "full",
  coverageNote: "The remainder of §7.11.1 on page 173 read in full and verified against the scan: the paragraph on the final products of alpha-/beta-amylase digestion (maltose, isomaltose, and some glucose) and the intestinal maltase step, the gamma-amylase paragraph, and the cellulase paragraph, up to (not including) the '7.11.2 Fosforolýza škrobu a glykogenu' heading.",
  cnNote: { topic: null, title: "淀粉酶消化终产物、γ-淀粉酶与纤维素酶 — 笔记中未找到明确对应主题", status: "pending" },
  mustKnow: { en: "The AMYLASES stop at maltose and isomaltose — they cannot finish the job themselves. It is MALTASE (alpha-D-glucosidase) that takes maltose the last step to free glucose. And we make no cellulase at all, so the beta(1->4) bonds of cellulose pass through us untouched — that is what dietary fibre is.", cn: "**淀粉酶**只能水解到 maltose 和 isomaltose 为止——它自己收不了尾。真正把 maltose 送到游离葡萄糖那一步的是 **MALTASE（α-D-glucosidase）**。而人体完全不产 cellulase，所以纤维素的 β(1→4) 键原封不动地穿过我们——这就是膳食纤维。" },
  summary: {
    en: "The FINAL PRODUCTS of polysaccharide (starch or glycogen) breakdown by alpha- and beta-amylases are MALTOSE and ISOMALTOSE (isomaltose specifically originates from the branch regions), plus PARTLY some free GLUCOSE, which arises from the cleavage of oligosaccharides that happen to contain an ODD number of glucose residues. Maltose is then split to glucose by ALPHA-D-GLUCOSIDASE (i.e. MALTASE) in the intestine. A third digestive amylase, GAMMA-AMYLASE, cleaves glucose units directly off GLYCOGEN; uniquely among the three, it hydrolyzes BOTH 1-4 and 1-6 bonds and so can break glycogen down COMPLETELY on its own. Gamma-amylases occur in the LIVER. The book notes there is no particular reason for the label 'gamma' beyond it being the third type of amylase discovered. Finally, CELLULASES hydrolyze CELLULOSE; they occur mainly in MICROORGANISMS and are found only rarely in animals -- when cellulose is broken down as a food source, it is almost always the animal's MICROFLORA doing the work (e.g. in the rumen of ruminants).",
    cn: "α-淀粉酶和β-淀粉酶分解多糖（淀粉或糖原）的终产物是麦芽糖和异麦芽糖（异麦芽糖specifically来自分支区域），此外还有部分游离葡萄糖，后者产生于对含奇数个葡萄糖残基的寡糖的切割。麦芽糖随后在肠道内由α-D-葡萄糖苷酶（即麦芽糖酶）分解为葡萄糖。第三种消化性淀粉酶——γ-淀粉酶——直接从糖原上切下葡萄糖单位；在三者中，它是唯一能同时水解1-4键和1-6键的，因而能单独将糖原完全分解。γ-淀粉酶存在于肝脏中。教材指出，「γ」这一命名除了表示它是被发现的第三种淀粉酶之外，并无其他特别含义。最后，纤维素酶水解纤维素；它主要存在于微生物中，在动物体内则很少见——当纤维素作为食物被分解时，几乎总是由（动物体内的）微生物群来完成这项工作（例如反刍动物的瘤胃）。"
  },
  points: [
    { cz: "konečné produkty: maltosa, isomaltosa (z větvení), částečně glukosa (z lichých oligosacharidů)", en: "The final products of alpha-/beta-amylase breakdown of starch or glycogen are MALTOSE and ISOMALTOSE (isomaltose specifically from the branch regions), plus PARTLY some free glucose, arising from cleavage of oligosaccharides with an ODD number of glucose residues.", cn: "α-/β-淀粉酶分解淀粉或糖原的终产物是麦芽糖和异麦芽糖（异麦芽糖来自分支区域），此外还有部分游离葡萄糖，产生于对含奇数个葡萄糖残基的寡糖的切割。" },
    { cz: "maltosa → glukosa: α-D-glukosidasa (maltasa) ve střevě", en: "Maltose is split to glucose by ALPHA-D-GLUCOSIDASE (i.e. MALTASE) in the intestine.", cn: "麦芽糖在肠道内由α-D-葡萄糖苷酶（即麦芽糖酶）分解为葡萄糖。" },
    { cz: "γ-amylasy: štěpí glykogen, vazby 1-4 I 1-6, odbourá glykogen úplně", en: "GAMMA-AMYLASE cleaves glucose units directly off glycogen. Uniquely among the three amylase types, it hydrolyzes BOTH 1-4 AND 1-6 bonds, and so can degrade glycogen COMPLETELY by itself.", cn: "γ-淀粉酶直接从糖原上切下葡萄糖单位。在三种淀粉酶中，它是唯一能同时水解1-4键和1-6键的，因而能单独将糖原完全分解。" },
    { cz: "γ-amylasy: játra; název γ = třetí objevený typ, nic víc", en: "Gamma-amylases occur in the LIVER. The book states there is no other reason for the label 'gamma' beyond it being the third type of amylase discovered.", cn: "γ-淀粉酶存在于肝脏中。教材指出，「γ」这一命名除了表示它是被发现的第三种淀粉酶外，并无其他含义。" },
    { cz: "celulasy: štěpí celulosu, hlavně mikroorganismy, vzácně u zvířat, mikroflora (bachor)", en: "CELLULASES hydrolyze cellulose. They occur mainly in MICROORGANISMS and are rare in animals; dietary cellulose breakdown almost always relies on the animal's MICROFLORA (e.g. the rumen of ruminants).", cn: "纤维素酶水解纤维素。它主要存在于微生物中，在动物体内很少见；食物中纤维素的分解几乎总是依赖动物体内的微生物群（如反刍动物的瘤胃）。" }
  ],
  terms: [
    { cz: "maltasa (α-D-glukosidasa)", en: "maltase (alpha-D-glucosidase)", cn: "麦芽糖酶（α-D-葡萄糖苷酶）", def_en: "The intestinal enzyme splitting maltose into two glucose units.", def_cn: "肠道内将麦芽糖分解为两个葡萄糖单位的酶。" },
    { cz: "γ-amylasa", en: "gamma-amylase", cn: "γ-淀粉酶", def_en: "A liver amylase hydrolyzing both alpha-1,4 and alpha-1,6 bonds in glycogen, capable of degrading it completely alone; named simply for being the third amylase type discovered.", def_cn: "肝脏中的一种淀粉酶，能同时水解糖原中的α-1,4键和α-1,6键，可单独将其完全分解；命名仅因为是被发现的第三种淀粉酶类型。" },
    { cz: "celulasa", en: "cellulase", cn: "纤维素酶", def_en: "An enzyme hydrolyzing cellulose; found mainly in microorganisms, rare in animals, relied upon via gut microflora (e.g. rumen) for dietary cellulose digestion.", def_cn: "水解纤维素的酶；主要存在于微生物中，动物体内罕见，动物依赖肠道微生物群（如瘤胃）来消化食物中的纤维素。" },
    { cz: "isomaltosa (z větvících míst)", en: "isomaltose (from branch points)", cn: "异麦芽糖（来自分支点）", def_en: "A reducing disaccharide product of starch/glycogen digestion, specifically arising from the alpha-1,6 branch points (see also node 7-3-2).", def_cn: "淀粉/糖原消化产生的一种还原性二糖，specifically来自α-1,6分支点（另见节点7-3-2）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which digestive amylase can break glycogen down completely by itself, and why?",
      q_cn: "哪种消化性淀粉酶能单独将糖原完全分解？为什么？",
      options: [
        "Alpha-amylase, because it is an endoglycosidase",
        "Beta-amylase, because it hydrolyzes amylose completely",
        "Gamma-amylase, because it hydrolyzes both 1-4 and 1-6 bonds",
        "Cellulase, because it works on any polysaccharide"
      ],
      answer: 2,
      why_en: "The book states gamma-amylase hydrolyzes both alpha-1,4 and alpha-1,6 bonds in glycogen, which is why -- unlike alpha- or beta-amylase, which both leave branch-point residues untouched -- it can degrade glycogen completely on its own. Cellulase acts only on cellulose, not glycogen.",
      why_cn: "教材指出γ-淀粉酶能同时水解糖原中的α-1,4键和α-1,6键，这也是为什么——不同于α-或β-淀粉酶（二者都不能处理分支点残基）——它能单独将糖原完全分解。纤维素酶只作用于纤维素，而非糖原。"
    },
    {
      type: "short",
      q_en: "Name the final products of amylase digestion of starch/glycogen and explain the origin of each.",
      q_cn: "列出淀粉酶消化淀粉/糖原的终产物，并说明各自的来源。",
      accept: ["maltose", "isomaltose", "glucose", "branch", "odd", "麦芽糖", "异麦芽糖", "葡萄糖", "分支", "奇数"],
      answer_en: "Maltose (the main product), isomaltose (specifically from branch regions), and partly free glucose (from cleavage of oligosaccharides with an odd number of glucose residues).",
      answer_cn: "麦芽糖（主要产物）、异麦芽糖（specifically来自分支区域），以及部分游离葡萄糖（来自对含奇数个葡萄糖残基的寡糖的切割）。"
    }
  ],
  oral: {
    q_en: "Describe the final products of digestive amylase action, then explain gamma-amylase and cellulase.",
    q_cn: "描述消化性淀粉酶作用的终产物，然后解释γ-淀粉酶和纤维素酶。",
    model_en: "Once alpha- and beta-amylase have both worked on starch or glycogen, what's left over is mostly maltose, plus isomaltose, which specifically comes from the branch regions that alpha- and beta-amylase can't fully resolve, and a smaller amount of free glucose, which shows up whenever an oligosaccharide happens to have an odd number of glucose units in it, so the last cut releases a monosaccharide instead of another disaccharide. That maltose then gets split into two glucose units by alpha-D-glucosidase, which in this context is called maltase, and that happens in the intestine. There's a third amylase the book introduces, gamma-amylase, and it's different from the other two in an important way: it can cleave glucose units straight off glycogen using both alpha-1,4 and alpha-1,6 bond hydrolysis, which means, unlike alpha- or beta-amylase, it doesn't get stuck at branch points -- it can take glycogen apart completely on its own. Gamma-amylase is found in the liver, and as for the name, the book is upfront that there's no deep logic to calling it gamma beyond the fact that it was simply the third type of amylase discovered. Finally, cellulases are the enzymes that hydrolyze cellulose, but they're mainly a microbial enzyme -- rare in animals themselves -- so whenever an animal breaks down dietary cellulose, it's essentially always its gut microflora doing the actual work, the classic example being the rumen of ruminants.",
    checklist: [
      "Named the final products: maltose, isomaltose (from branches), some free glucose (from odd-numbered oligosaccharides)",
      "Named maltase (alpha-D-glucosidase) as splitting maltose to glucose in the intestine",
      "Explained gamma-amylase hydrolyzes both 1-4 and 1-6 bonds and can fully degrade glycogen alone",
      "Located gamma-amylase in the liver and explained its arbitrary naming",
      "Explained cellulase's role, its mainly microbial source, and reliance on gut microflora (e.g. rumen)"
    ]
  }
},

{
  id: "7-11-2-1",
  book: "cz",
  topicKey: "glycogen-metabolism",
  chapter: 7,
  section: "7.11.2",
  czTitle: "Fosforolýza škrobu a glykogenu — obecný mechanismus",
  enTitle: "Phosphorolysis of starch and glycogen — general mechanism",
  cnTitle: "淀粉和糖原的磷酸解——一般机制",
  pages: [173],
  coverage: "full",
  coverageNote: "The opening of '7.11.2 Fosforolýza škrobu a glykogenu' on page 173 read in full and verified against the scan: the definitional paragraph (cellular breakdown = phosphorolysis, not hydrolysis, applying to both starch in plant cells and glycogen in muscle/liver) plus the reaction figure (a four-glucose-unit alpha-1,4-linked chain plus HPO4 2- in reversible equilibrium with glucose-1-phosphate plus the three-unit remainder chain, double-headed arrow confirmed by zoomed re-read), and the sentence naming the enzyme (fosforylasa). Stops before 'Odbourávání glykogenu fosforylasou se zastaví u čtvrtého glukosového zbytku před místem větvení', which belongs to node 7-11-2-2.",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记 p.139) — 标题匹配、未读原文；淀粉/糖原磷酸解是典型的细胞内糖代谢途径，很可能落入'糖的其它代谢途径'范畴，但未经证实", status: "partial" },
  mustKnow: { en: "Inside a cell the same bond is broken with phosphate, not water. The product leaves already phosphorylated, so it cannot escape the cell — and the ATP that phosphorylating it would have cost is saved.", cn: "在细胞**内部**，同样的键是用磷酸而不是水打断的。产物出来时**已经是磷酸化的**，所以它跑不出细胞——而且省下了本来要为磷酸化支付的那个 ATP。" },
  summary: {
    en: "The breakdown of polysaccharides INSIDE CELLS differs fundamentally from breakdown in the digestive tract: intracellular breakdown proceeds by PHOSPHOROLYSIS, not hydrolysis. This holds both for starch breakdown in plant cells and for glycogen breakdown in muscle and liver. In phosphorolysis, a glucose residue is cleaved from the NON-REDUCING END of the polysaccharide and transferred onto PHOSPHORIC ACID (inorganic phosphate), producing GLUCOSE-1-PHOSPHATE; the book's figure shows this explicitly as a REVERSIBLE reaction (drawn with a double-headed arrow) acting on a short alpha-1,4-linked glucose chain plus HPO4(2-). The newly exposed terminal residue can then be cleaved the same way, repeatedly. The reaction is catalyzed by the enzyme PHOSPHORYLASE.",
    cn: "细胞内多糖的分解与消化道内的分解方式有本质区别：细胞内的分解是通过磷酸解，而非水解进行的。这既适用于植物细胞内淀粉的分解，也适用于肌肉和肝脏中糖原的分解。在磷酸解过程中，多糖非还原端的一个葡萄糖残基被切下，并转移到磷酸（无机磷酸盐）上，生成葡萄糖-1-磷酸；教材配图明确将该反应画成可逆反应（用双向箭头表示），作用于一小段α-1,4连接的葡萄糖链与HPO4(2-)。新暴露出的末端残基可以按同样方式反复被切下。该反应由磷酸化酶催化。"
  },
  points: [
    { cz: "buňky: fosforolýza (ne hydrolýza) — škrob v rostlinách i glykogen ve svalu/játrech", en: "Intracellular polysaccharide breakdown proceeds by PHOSPHOROLYSIS, not hydrolysis. This applies both to starch breakdown in plant cells and to glycogen breakdown in muscle and liver.", cn: "细胞内多糖的分解通过磷酸解（而非水解）进行。这既适用于植物细胞中淀粉的分解，也适用于肌肉和肝脏中糖原的分解。" },
    { cz: "mechanismus: neredukující konec → glukosový zbytek na fosforečnou kyselinu → glukosa-1-fosfát", en: "Mechanism: a glucose residue is cleaved from the NON-REDUCING END of the polysaccharide and transferred onto phosphoric acid, producing GLUCOSE-1-PHOSPHATE.", cn: "机制：多糖非还原端的一个葡萄糖残基被切下，转移到磷酸上，生成葡萄糖-1-磷酸。" },
    { cz: "reakce je reverzibilní (dle schématu)", en: "The book's figure draws this reaction with a double-headed (reversible) arrow, acting on a short alpha-1,4-linked chain plus HPO4(2-).", cn: "教材配图用双向箭头（表示可逆）画出该反应，作用于一小段α-1,4连接的链与HPO4(2-)。" },
    { cz: "nově vzniklý konec může být štěpen stejně, opakovaně", en: "The newly exposed terminal residue can be cleaved the same way again, repeatedly, working down the chain.", cn: "新暴露出的末端残基可以按同样方式反复被切下，沿着链持续进行。" },
    { cz: "enzym = fosforylasa", en: "The enzyme catalyzing this reaction is called PHOSPHORYLASE.", cn: "催化该反应的酶称为磷酸化酶。" }
  ],
  terms: [
    { cz: "fosforolýza", en: "phosphorolysis", cn: "磷酸解", def_en: "Cleavage of a bond by transfer to inorganic phosphate rather than to water; the intracellular route for breaking down starch and glycogen, contrasted with digestive hydrolysis.", def_cn: "通过转移到无机磷酸（而非水）而进行的键裂解；是细胞内分解淀粉和糖原的途径，区别于消化道中的水解。" },
    { cz: "fosforylasa", en: "phosphorylase", cn: "磷酸化酶", def_en: "The enzyme catalyzing phosphorolysis of a polysaccharide's non-reducing end, releasing glucose-1-phosphate.", def_cn: "催化多糖非还原端磷酸解、释放葡萄糖-1-磷酸的酶。" },
    { cz: "neredukující konec", en: "non-reducing end", cn: "非还原端", def_en: "The end of a polysaccharide chain phosphorylase/amylase act on, lacking a free anomeric hydroxyl.", def_cn: "磷酸化酶/淀粉酶作用的多糖链末端，不含游离的异头羟基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the fundamental difference between digestive-tract and intracellular breakdown of polysaccharides?",
      q_cn: "多糖在消化道内与细胞内的分解，其根本区别是什么？",
      options: [
        "Digestive breakdown uses hydrolases; intracellular breakdown uses phosphorolysis",
        "Digestive breakdown uses phosphorolysis; intracellular breakdown uses hydrolases",
        "Both use identical hydrolytic mechanisms, just different enzymes",
        "Digestive breakdown only occurs for starch; intracellular breakdown only occurs for glycogen"
      ],
      answer: 0,
      why_en: "The book explicitly contrasts digestive-tract hydrolysis with intracellular phosphorolysis -- both starch (in plant cells) and glycogen (in muscle/liver) are broken down intracellularly by phosphorolysis, not by the hydrolytic route used in digestion.",
      why_cn: "教材明确将消化道内的水解与细胞内的磷酸解相对比——无论是植物细胞中的淀粉还是肌肉/肝脏中的糖原，细胞内都是通过磷酸解（而非消化中所用的水解途径）分解的。"
    },
    {
      type: "short",
      q_en: "Describe the phosphorolysis reaction: what end of the chain is attacked, what is the phosphate acceptor, and what is the product?",
      q_cn: "描述磷酸解反应：作用于链的哪一端？磷酸受体是什么？产物是什么？",
      accept: ["non-reducing end", "phosphoric acid", "glucose-1-phosphate", "phosphorylase", "非还原端", "磷酸", "葡萄糖-1-磷酸", "磷酸化酶"],
      answer_en: "Phosphorolysis attacks the non-reducing end of the polysaccharide, transferring the terminal glucose residue onto phosphoric acid (inorganic phosphate) to produce glucose-1-phosphate, catalyzed by phosphorylase; the newly exposed end can then be cleaved again the same way.",
      answer_cn: "磷酸解作用于多糖的非还原端，将末端葡萄糖残基转移到磷酸（无机磷酸盐）上，生成葡萄糖-1-磷酸，由磷酸化酶催化；新暴露的末端可以按同样方式再次被切下。"
    }
  ],
  oral: {
    q_en: "Explain why intracellular polysaccharide breakdown differs from digestive breakdown, and describe the phosphorolysis mechanism.",
    q_cn: "解释为什么细胞内多糖的分解与消化道内的分解不同，并描述磷酸解机制。",
    model_en: "The book draws a sharp line here: breaking down polysaccharides in the digestive tract is a hydrolysis job, but breaking them down inside cells is fundamentally different -- it's phosphorolysis instead, and that holds true whether you're talking about starch inside a plant cell or glycogen inside muscle or liver. Mechanistically, phosphorolysis works on the non-reducing end of the polysaccharide chain: a glucose residue there gets transferred, not onto water, but onto phosphoric acid, and what comes off is glucose-1-phosphate. The book's own diagram draws this as a reversible reaction, with the phosphate written as HPO4 two-minus reacting with a short stretch of an alpha-1,4-linked glucose chain. Once that terminal residue is removed, the chain has a new non-reducing end exposed, and the whole process just repeats on that new end, working its way down the chain one glucose unit at a time. The enzyme responsible for all of this is called phosphorylase.",
    checklist: [
      "Stated the fundamental digestion-vs-cell distinction: hydrolysis vs phosphorolysis",
      "Named both substrates: starch in plant cells, glycogen in muscle/liver",
      "Described the mechanism: non-reducing end, transfer to phosphoric acid, glucose-1-phosphate product",
      "Noted the reaction is drawn as reversible in the book's figure",
      "Named the enzyme as phosphorylase",
      "Explained the reaction repeats on each newly exposed terminal residue"
    ]
  }
},

{
  id: "7-11-2-2",
  book: "cz",
  topicKey: "glycogen-metabolism",
  chapter: 7,
  section: "7.11.2",
  czTitle: "Fosforolýza glykogenu — odvětvení a energetická bilance",
  enTitle: "Glycogen phosphorolysis — debranching and the energy balance",
  cnTitle: "糖原的磷酸解——脱支机制与能量收支",
  pages: [173, 174],
  coverage: "full",
  coverageNote: "The debranching paragraph on page 173 (from 'Odbourávání glykogenu fosforylasou se zastaví u čtvrtého glukosového zbytku...' through '...volné glukosy, která pochází právě z míst větvení.') read in full and verified against the scan, together with the branched-structure debranching figure at the top of page 174 (labelled residues a-l, showing phosphorylase releasing 8 glucose-1-phosphates down to a 4-residue stub near the branch, transferasa relocating a 3-residue block onto another chain via a new alpha-1->4 bond, and alpha-1,6-glukosidasa releasing the final single branch-point glucose -- all label sequence and enzyme names read directly off the scan), plus the energetics paragraph immediately below the figure on page 174.",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记 p.139) — 标题匹配、未读原文；糖原脱支及其能量收支是典型的细胞内糖代谢内容，很可能落入'糖的其它代谢途径'范畴，但未经证实", status: "partial" },
  mustKnow: { en: "Phosphorylase stalls four residues short of every branch point, so glycogen cannot be stripped by one enzyme alone. A transglycosidase must first move a three-residue block aside; only then can the branch itself be cut.", cn: "磷酸化酶在**距每个分支点还有四个残基**处就停住，所以糖原没法靠一个酶拆完。必须先由转糖苷酶把一个三残基的小块挪走，之后那个分支点本身才能被切开。" },
  trace: [
    {
      term: "debranching 脱支（转糖苷酶与 α-1,6-葡萄糖苷酶）",
      what: "糖原是带分支的，而拆它的主力——磷酸化酶——**拆不到分支点**。它在**距每个分支点还差四个残基**的地方就停住不动了。所以糖原不可能靠一个酶拆完，必须有人来「清障」。",
      from: "清障分两步，各由一个酶负责，而这两步的化学也不一样，这一点常被略过。第一步，transglycosidase（转糖苷酶）把那个残桩上的**三个残基整块**搬走，接到另一条链上，接的是新的 α(1→4) 键。这时分支点上只剩**一个**葡萄糖，靠 α(1→6) 连着。第二步，α-1,6-glucosidase 把这最后一个切掉——注意它是**水解**掉的，不是磷酸解。",
      to: "这个细节直接解释了一个可以拿来检验理解的现象：**糖原完全降解后，产物不全是葡萄糖-1-磷酸，还有约 10% 的游离葡萄糖**——而这些游离葡萄糖恰恰全部来自分支点，因为只有那一步走的是水解。看到「10% 游离葡萄糖」这个数，应该立刻想到分支点，而不是当成一个孤立的数字去背。",
      family: "顺带说磷酸解相对水解的好处，这也是糖原为什么值得存的理由之一：**磷酸解直接给出葡萄糖-1-磷酸，省掉了葡萄糖进入糖酵解前本来要花的那一次磷酸化**。也就是说，从糖原动员出来的糖比从血里拿来的葡萄糖少花一个 ATP。",
      numbers: "磷酸化酶停在**距分支点第 4 个**残基处；转糖苷酶一次搬走**三个**残基；完全降解产物中约 **10%** 是游离葡萄糖。"
    }
  ],
  summary: {
    en: "Phosphorylase cannot fully strip a branched glycogen molecule on its own: breakdown by phosphorylase STOPS at the FOURTH glucose residue before a branch point. A separate enzyme, TRANSGLYCOSIDASE, then detaches a three-residue block from that stub and transfers it onto ANOTHER chain, attaching it there via a NEW alpha-1->4 bond. This leaves, at the site of the original branch, just ONE glucose residue, attached by a 1->6 bond; this last residue is removed HYDROLYTICALLY (not phosphorolytically) by ALPHA-1,6-GLUCOSIDASE. Net consequence: complete breakdown of glycogen therefore always yields, alongside glucose-1-phosphate, ABOUT 10% FREE GLUCOSE -- arising precisely from these branch points. ENERGETICS: phosphorolytic breakdown is energetically ADVANTAGEOUS for the cell because it saves the first phosphorylation step that glucose would otherwise need before entering further degradation (glycolysis or the pentose-phosphate route) -- the glucose-1-phosphate produced is already phosphorylated. However, the OVERALL round trip through polysaccharide storage is energetically MORE COSTLY than that saving alone suggests, because building glycogen FROM glucose requires TWO phosphorylation steps (synthesis proceeds via UDP-Glc, see §7.10/§7.12). Phosphorolysis therefore recovers LESS THAN HALF of the energy that was invested in storing the glucose (with the branch-point residues additionally coming out as free glucose rather than glucose-1-phosphate).",
    cn: "磷酸化酶单独无法把带分支的糖原分子完全拆解：磷酸化酶的降解会在离分支点还有4个葡萄糖残基时停止。此时另一种酶——转糖苷酶——会把这4个残基中的3个组成的片段整体切下，转移到另一条链上，并通过新形成的α-1→4键将其连接上去。这样一来，在原分支点处只剩下一个通过1→6键连接的葡萄糖残基；这最后一个残基由α-1,6-葡萄糖苷酶以水解（而非磷酸解）方式去除。结果是：糖原的完全分解，除了葡萄糖-1-磷酸外，总会产生约10%的游离葡萄糖——这些正是来自分支点。能量收支：磷酸解对细胞而言在能量上是有利的，因为它省去了葡萄糖进入后续降解途径（糖酵解或磷酸戊糖途径）之前本来需要的第一步磷酸化——生成的葡萄糖-1-磷酸本身已经是磷酸化的。然而，经由多糖储存的整个往返过程从整体上看能量消耗更大，因为从葡萄糖合成糖原需要两次磷酸化（合成经由UDP-Glc进行，详见7.10/7.12节）。因此磷酸解只能收回投入能量的不到一半（分支点残基还是以游离葡萄糖而非葡萄糖-1-磷酸的形式释放出来，进一步加剧了这一点）。"
  },
  points: [
    { cz: "fosforylasa se zastaví 4 zbytky před větvením", en: "Phosphorylase-mediated breakdown of glycogen STOPS at the FOURTH glucose residue before a branch point -- it cannot proceed past this point alone.", cn: "磷酸化酶介导的糖原降解会在离分支点还有4个葡萄糖残基时停止——它无法单独越过这一点。" },
    { cz: "transglykosidasa: přenese 3zbytkový štěp na jiný řetězec (nová α-1→4 vazba)", en: "TRANSGLYCOSIDASE then detaches a THREE-residue block from that stub and transfers it onto ANOTHER chain, attaching it via a NEW alpha-1->4 bond.", cn: "转糖苷酶随后把这4个残基中的3个组成的片段整体切下，转移到另一条链上，通过新形成的α-1→4键连接。" },
    { cz: "zbylý 1 zbytek (1→6 vazba) → α-1,6-glukosidasa (hydrolyticky)", en: "This leaves ONE glucose residue at the original branch site, attached by a 1->6 bond; it is removed HYDROLYTICALLY (not phosphorolytically) by alpha-1,6-GLUCOSIDASE.", cn: "原分支点处只剩下一个通过1→6键连接的葡萄糖残基；由α-1,6-葡萄糖苷酶以水解（而非磷酸解）方式去除。" },
    { cz: "úplné odbourání glykogenu → ~10 % volné glukosy (z větvení)", en: "Complete breakdown of glycogen therefore always yields, besides glucose-1-phosphate, ABOUT 10% FREE GLUCOSE, arising precisely from the branch points.", cn: "糖原的完全分解，除了葡萄糖-1-磷酸外，总会产生约10%的游离葡萄糖，正是来自分支点。" },
    { cz: "energetická výhoda: ušetří první fosforylaci před glykolýzou/pentosafosfáty", en: "ENERGETIC ADVANTAGE: phosphorolysis saves the cell the first phosphorylation step glucose would otherwise need before entering glycolysis or the pentose-phosphate route, since glucose-1-phosphate is already phosphorylated.", cn: "能量优势：磷酸解为细胞省去了葡萄糖进入糖酵解或磷酸戊糖途径之前本需要的第一步磷酸化，因为生成的葡萄糖-1-磷酸本身已经是磷酸化的。" },
    { cz: "energetická nevýhoda: syntéza glykogenu potřebuje 2 fosforylace (přes UDP-Glc)", en: "ENERGETIC COST: the overall cycle is nonetheless more costly than that saving suggests, because building glycogen FROM glucose requires TWO phosphorylation steps (synthesis via UDP-Glc). Phosphorolysis therefore recovers LESS THAN HALF the energy invested in storage.", cn: "能量劣势：整个循环从总体看仍然消耗更大，因为从葡萄糖合成糖原需要两次磷酸化（经由UDP-Glc）。因此磷酸解只能收回不到一半的储存投入能量。" }
  ],
  terms: [
    { cz: "transglykosidasa", en: "transglycosidase", cn: "转糖苷酶", def_en: "The debranching enzyme activity that relocates a three-residue block from a phosphorylase-limited glycogen stub onto another chain via a new alpha-1,4 bond.", def_cn: "脱支酶活性之一，将磷酸化酶极限糊精残端上的三残基片段转移到另一条链上，形成新的α-1,4键。" },
    { cz: "α-1,6-glukosidasa", en: "alpha-1,6-glucosidase", cn: "α-1,6-葡萄糖苷酶", def_en: "The hydrolytic debranching enzyme that removes the last single glucose residue left at a former branch point after transglycosidase action.", def_cn: "在转糖苷酶作用之后，以水解方式去除原分支点处最后一个葡萄糖残基的脱支酶。" },
    { cz: "energetická bilance fosforolýzy", en: "energy balance of phosphorolysis", cn: "磷酸解的能量收支", def_en: "Phosphorolysis saves one phosphorylation step before glycolysis/PPP entry, but the full glycogen storage cycle (2 phosphorylations to synthesize, partial recovery on breakdown) still recovers less than half the invested energy.", def_cn: "磷酸解省去了进入糖酵解/磷酸戊糖途径前的一步磷酸化，但整个糖原储存循环（合成需2次磷酸化，分解只能部分回收）总体上只能收回不到一半的投入能量。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Where does phosphorylase-mediated glycogen breakdown stop, and what removes the remaining branch-point residue?",
      q_cn: "磷酸化酶介导的糖原降解在何处停止？剩余的分支点残基由什么去除？",
      options: [
        "It stops at the branch point itself; alpha-amylase removes the last residue",
        "It stops 4 residues before the branch point; after transglycosidase relocates a 3-residue block, alpha-1,6-glucosidase hydrolytically removes the last single residue",
        "It stops 4 residues before the branch point; phosphorylase itself eventually removes the last residue phosphorolytically",
        "Phosphorylase degrades straight through branch points with no separate debranching step needed"
      ],
      answer: 1,
      why_en: "The book describes phosphorylase stopping 4 residues before a branch point, transglycosidase then moving a 3-residue block to another chain via a new alpha-1,4 bond, and the single remaining 1,6-linked residue being removed hydrolytically by alpha-1,6-glucosidase -- not by phosphorylase or alpha-amylase, and not straight through.",
      why_cn: "教材描述磷酸化酶在离分支点4个残基处停止，转糖苷酶随后把3个残基组成的片段通过新α-1,4键转移到另一条链上，剩下的单个1,6连接残基由α-1,6-葡萄糖苷酶以水解方式去除——而不是磷酸化酶或α-淀粉酶所为，也不是直接穿过分支点。"
    },
    {
      type: "short",
      q_en: "Explain why phosphorolysis is described as energetically advantageous yet the book also says the overall pathway is costly, recovering less than half the invested energy.",
      q_cn: "解释为什么磷酸解被描述为能量上有利，但教材同时指出整个途径成本高昂，只能收回不到一半的投入能量？",
      accept: ["saves phosphorylation", "UDP-Glc", "two phosphorylations", "less than half", "省去磷酸化", "两次磷酸化", "不到一半"],
      answer_en: "Phosphorolysis is locally advantageous because the glucose-1-phosphate it produces is already phosphorylated, saving the first phosphorylation step glucose would need before glycolysis/the pentose-phosphate pathway. But globally, synthesizing glycogen from glucose in the first place costs two phosphorylations (via UDP-Glc), and breakdown only recovers one of those (plus branch-point residues emerge as unphosphorylated free glucose) -- so overall, phosphorolysis recovers less than half the energy invested in storage.",
      answer_cn: "磷酸解在局部是有利的，因为生成的葡萄糖-1-磷酸已经是磷酸化的，省去了葡萄糖进入糖酵解/磷酸戊糖途径前所需的第一步磷酸化。但从整体看，最初由葡萄糖合成糖原需要两次磷酸化（经由UDP-Glc），而分解只能收回其中一次（分支点残基还以未磷酸化的游离葡萄糖形式释放）——因此磷酸解总体上只能收回不到一半的储存投入能量。"
    }
  ],
  oral: {
    q_en: "Walk through the glycogen debranching mechanism and explain the energetics of phosphorolysis.",
    q_cn: "说明糖原脱支机制，并解释磷酸解的能量学。",
    model_en: "Phosphorylase is powerful, but it has a hard limit: working along a glycogen branch, it strips off glucose-1-phosphate units one after another until it's four residues short of a branch point, and then it simply cannot go any further on its own. That's where a second enzyme, transglycosidase, steps in -- it takes the three-residue block sitting closest to the branch, cuts it off as a unit, and reattaches it onto a different chain using a brand new alpha-1,4 bond. After that move, all that's left at the original branch point is a single glucose residue, still attached by its old 1,6 bond, and that one final residue has to come off hydrolytically, not phosphorolytically, via alpha-1,6-glucosidase. Add all that up across a complete glycogen molecule, and the practical consequence is that roughly ten percent of the glucose you recover comes out as plain free glucose from these branch points, rather than as glucose-1-phosphate. Now, on energetics: phosphorolysis looks like a bargain in isolation, because the glucose-1-phosphate it hands you is already phosphorylated, so you skip the phosphorylation step glucose would otherwise need before it can enter glycolysis or the pentose phosphate pathway. But the book is careful to zoom out: building glycogen from glucose in the first place costs two phosphorylation steps, since synthesis runs through UDP-glucose, and breaking it back down only ever recovers one of those. So taken as a full storage-and-retrieval cycle, phosphorolysis conserves less than half of the energy that was originally invested in laying that glucose down as glycogen.",
    checklist: [
      "Stated phosphorylase stops 4 residues before a branch point",
      "Described transglycosidase moving a 3-residue block via a new alpha-1,4 bond",
      "Described alpha-1,6-glucosidase hydrolytically removing the final branch residue",
      "Stated the ~10% free glucose consequence of complete glycogen breakdown",
      "Explained the local energetic advantage: G-1-P is already phosphorylated",
      "Explained the global energetic cost: 2 phosphorylations to synthesize vs. less than half recovered on breakdown"
    ]
  }
},

{
  id: "7-12-1",
  book: "cz",
  topicKey: "glycogen-metabolism",
  chapter: 7,
  section: "7.12",
  czTitle: "Biosyntéza polysacharidů — glykogensynthasa a větvící enzym",
  enTitle: "Biosynthesis of polysaccharides — glycogen synthase and the branching enzyme",
  cnTitle: "多糖的生物合成——糖原合酶与分支酶",
  pages: [174],
  coverage: "full",
  coverageNote: "The opening of '7.12 Biosyntéza polysacharidů' on page 174 read in full and verified against the scan: the general-mechanism paragraph (glycosyltransferases + nucleoside-diphosphate-activated monosaccharides + starter molecule) and the glycogen-synthase/branching-enzyme paragraph. Stops before 'Syntéza a odbourávání glykogenu jsou koordinovaně kontrolovány amplifikující kaskádou reakcí', which belongs to node 7-12-2.",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记 p.139) — 标题匹配、未读原文；糖原的生物合成机制是典型的细胞内糖代谢途径，很可能落入'糖的其它代谢途径'范畴，但未经证实", status: "partial" },
  mustKnow: { en: "Synthase can only lengthen a chain — it cannot make a branch. A separate branching enzyme lifts a block of residues off and re-attaches it as an α(1→6), which is why extending and branching are two different jobs.", cn: "合酶只能**延长**链条——它造不出分支。必须由另一个分支酶把一段残基整块提起、再以 α(1→6) 接回去，所以「延长」与「分支」是两件不同的工作。" },
  summary: {
    en: "Section 7.12 opens by restating, in the context of polysaccharides specifically, the mechanism already established in §7.10: biosynthesis proceeds via GLYCOSYLTRANSFERASES acting on monosaccharides activated as NUCLEOSIDE DIPHOSPHATES. For polysaccharide synthesis specifically, a STARTER MOLECULE is usually also required -- typically a PROTEIN CHAIN already carrying oligosaccharide chains, which are then further elongated and, as appropriate, branched. Concretely for glycogen: GLYCOGEN SYNTHASE catalyzes the transfer of glucose from UDP-Glc onto the C-4 hydroxyl group of the terminal residue of the growing glycogen molecule (i.e. extending the chain by alpha-1->4 bonds). A separate BRANCHING ENZYME then converts SOME of those alpha-1->4 bonds into alpha-1->6 bonds, creating the branch points characteristic of glycogen's structure.",
    cn: "7.12节开篇在多糖这一具体情境下，重申了7.10节已经建立的机制：生物合成依赖糖基转移酶，作用于以核苷二磷酸形式活化的单糖。而对多糖合成而言，通常还需要一个引物分子——一般是已经带有寡糖链的蛋白质链，这些寡糖链随后被进一步延长，并视情况发生分支。具体到糖原：糖原合酶催化把葡萄糖从UDP-Glc转移到正在生长的糖原分子末端残基的C-4羟基上（即以α-1→4键延长链）。另一种酶——分支酶——随后将其中一部分α-1→4键转变为α-1→6键，从而产生糖原结构特有的分支点。"
  },
  points: [
    { cz: "obecný mechanismus: glykosyltransferasy + monosacharidy aktivované jako nukleosiddifosfáty", en: "The general mechanism restates §7.10: biosynthesis proceeds via glycosyltransferases acting on monosaccharides activated in the form of nucleoside diphosphates.", cn: "一般机制重申了7.10节的内容：生物合成依赖糖基转移酶，作用于以核苷二磷酸形式活化的单糖。" },
    { cz: "startér = proteinový řetězec s oligosacharidy, prodlužuje se/větví", en: "Polysaccharide synthesis usually also requires a STARTER MOLECULE -- typically a protein chain already carrying oligosaccharide chains, which are then further elongated and, as appropriate, branched.", cn: "多糖合成通常还需要一个引物分子——一般是已经带有寡糖链的蛋白质链，这些寡糖链随后被进一步延长，并视情况发生分支。" },
    { cz: "glykogensynthasa: UDP-Glc → C-4 OH koncového zbytku glykogenu", en: "GLYCOGEN SYNTHASE catalyzes transfer of glucose from UDP-Glc onto the C-4 hydroxyl group of the terminal residue of the growing glycogen molecule, extending the chain by alpha-1->4 bonds.", cn: "糖原合酶催化把葡萄糖从UDP-Glc转移到正在生长的糖原分子末端残基的C-4羟基上，以α-1→4键延长链。" },
    { cz: "větvící enzym: některé α-1→4 → α-1→6", en: "A separate BRANCHING ENZYME converts SOME alpha-1->4 bonds into alpha-1->6 bonds, creating glycogen's branch points.", cn: "分支酶将其中一部分α-1→4键转变为α-1→6键，产生糖原的分支点。" }
  ],
  terms: [
    { cz: "glykogensynthasa", en: "glycogen synthase", cn: "糖原合酶", def_en: "The enzyme extending glycogen by transferring glucose from UDP-Glc onto the C-4 hydroxyl of the chain's terminal residue (alpha-1,4 extension).", def_cn: "把葡萄糖从UDP-Glc转移到链末端残基C-4羟基上（以α-1,4键延长）从而延长糖原的酶。" },
    { cz: "větvící enzym", en: "branching enzyme", cn: "分支酶", def_en: "Converts some alpha-1,4 bonds in growing glycogen into alpha-1,6 bonds, creating branch points.", def_cn: "把正在生长的糖原中部分α-1,4键转变为α-1,6键，产生分支点的酶。" },
    { cz: "startér (proteinový řetězec)", en: "starter molecule (protein chain)", cn: "引物分子（蛋白质链）", def_en: "The protein chain carrying initial oligosaccharide chains onto which polysaccharide synthesis builds by elongation and branching.", def_cn: "携带初始寡糖链的蛋白质链，多糖合成在此基础上通过延长和分支进行。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What does glycogen synthase specifically transfer, and onto which position of the growing chain?",
      q_cn: "糖原合酶specifically转移什么？转移到正在生长链的哪个位置？",
      options: [
        "Galactose from UDP-galactose, onto C-6 of the terminal residue",
        "Glucose from UDP-Glc, onto the C-4 hydroxyl of the terminal residue",
        "Glucose-1-phosphate directly, onto the C-1 hydroxyl of the terminal residue",
        "Glucose from ATP-glucose, onto C-3 of the terminal residue"
      ],
      answer: 1,
      why_en: "The book states glycogen synthase transfers glucose from UDP-Glc onto the C-4 hydroxyl group of the terminal residue of the growing glycogen molecule -- not galactose, not glucose-1-phosphate directly, and not from an ATP-activated form.",
      why_cn: "教材指出糖原合酶把葡萄糖从UDP-Glc转移到正在生长的糖原分子末端残基的C-4羟基上——而不是半乳糖、不是直接转移葡萄糖-1-磷酸，也不是来自ATP活化形式。"
    },
    {
      type: "short",
      q_en: "What is the role of the branching enzyme, and what bond conversion does it perform?",
      q_cn: "分支酶的作用是什么？它进行怎样的键转变？",
      accept: ["alpha-1,4", "alpha-1,6", "branch point", "分支点", "α-1,4", "α-1,6"],
      answer_en: "The branching enzyme converts some of the alpha-1->4 bonds created by glycogen synthase into alpha-1->6 bonds, creating the branch points characteristic of glycogen's structure.",
      answer_cn: "分支酶将糖原合酶生成的一部分α-1→4键转变为α-1→6键，产生糖原结构特有的分支点。"
    }
  ],
  oral: {
    q_en: "Explain the general mechanism of polysaccharide biosynthesis and describe glycogen synthase and the branching enzyme.",
    q_cn: "解释多糖生物合成的一般机制，并描述糖原合酶和分支酶。",
    model_en: "Polysaccharide biosynthesis, as the book has already established for glycosides and oligosaccharides in general, runs through glycosyltransferases acting on monosaccharides that have been activated as nucleoside diphosphates. What's specific to building a whole polysaccharide is that you usually need a starter molecule to begin with -- typically a protein chain that already carries some oligosaccharide chains, and synthesis proceeds by elongating those chains further and, where appropriate, branching them. For glycogen specifically, the enzyme doing the elongating is glycogen synthase, and its job is to take glucose off UDP-glucose and attach it onto the C-4 hydroxyl group of whatever residue currently sits at the end of the growing glycogen chain -- so the chain grows by alpha-1,4 bonds, one glucose at a time. But glycogen isn't just one long linear chain; it's branched, and that's the job of a separate enzyme, the branching enzyme, which comes along and converts some of those alpha-1,4 bonds into alpha-1,6 bonds instead, which is exactly what creates the branch points that give glycogen its characteristic tree-like structure.",
    checklist: [
      "Restated the general mechanism: glycosyltransferases + NDP-activated monosaccharides",
      "Named the starter molecule as a protein chain carrying oligosaccharide chains",
      "Described glycogen synthase transferring glucose from UDP-Glc onto C-4 of the terminal residue",
      "Described the branching enzyme converting some alpha-1,4 bonds to alpha-1,6 bonds"
    ]
  }
},

{
  id: "7-12-2",
  book: "cz",
  topicKey: "glycogen-metabolism",
  chapter: 7,
  section: "7.12",
  czTitle: "Biosyntéza a odbourávání glykogenu — hormonální kaskádová regulace",
  enTitle: "Glycogen synthesis and breakdown — hormonal cascade regulation",
  cnTitle: "糖原的合成与分解——激素级联调控",
  pages: [174, 175],
  coverage: "full",
  coverageNote: "The regulatory-cascade text spanning the bottom of page 174 ('Syntéza a odbourávání glykogenu jsou koordinovaně kontrolovány...') through the top of page 175 (ending '...regulovány nekovalentními alosterickými interakcemi.' -- this is the LAST sentence of chapter 7; chapter 8 'Lipidy' begins fresh on p.176 per the book's own table of contents) read in full and verified against the scans, together with the full-page regulatory cascade diagram on page 175 (adrenalin/glukagon -> adenylátcyklasa -> 3',5'-cAMP -> the central box labelled 'fosforylasakinasa-kinasa (proteinkinasa)', which sends ATP/ADP-driven phosphorylation arrows to BOTH the fosforylasa-kinasa b/a cycle on the left and the glykogen-synthasa I/D cycle on the right; active fosforylasa-kinasa a then phosphorylates fosforylasa b to fosforylasa a; fosforylasa a acts on glykogen (with inorganic phosphate) to release glukosa-1-fosfát; glykogen-synthasa I builds glykogen from UDP-glukosa (releasing UDP); and an 'aktivní proteinfosfatasa'/'inaktivní proteinfosfatasa' pair reverses each of the three phosphorylated (active) states back to its dephosphorylated partner, releasing inorganic phosphate) -- all node labels transcribed directly from the diagram. The book's own diagram literally labels its central enzyme '(the kinase of phosphorylase-kinase), i.e. protein kinase' rather than just 'protein kinase' -- reproduced here as printed. The book does not spell out what the letters 'I'/'D' (glycogen synthase) or 'a'/'b' (phosphorylase, phosphorylase kinase) stand for beyond showing which member of each pair is the more active, phosphorylated one -- not expanded here beyond what the diagram itself shows, to avoid asserting an unverified etymology. NOTE: faint, mirror-reversed ghost text/table fragments are visible bleeding through beneath the diagram on the page-175 scan (show-through from the reverse side of this thin paper leaf) -- this is NOT actual page-175 content and was not used for this node; the book's own page-175 content ends with the diagram and the sentence quoted above.",
  coverageNoteCn: "第 174–175 页的调控级联正文，连同第 175 页整页的级联图，均已逐字与扫描件核对，图中标签直接抄自原图。这是第 7 章的最后内容，第 8 章「脂质」从第 176 页另起。两处如实保留而未擅自补全：教材把中枢酶写作「磷酸化酶激酶的激酶，即蛋白激酶」，此处照原样复现；字母 I/D 与 a/b 具体代表什么教材并未说明，因此只给出图中显示的「哪一个更活跃」。",
  cnNote: { topic: "二十二", title: "戊糖磷酸途径和糖的其它代谢途径 (笔记 p.139) — 标题匹配、未读原文；糖原代谢的激素级联调控是经典的细胞内糖代谢调节内容，很可能落入'糖的其它代谢途径'范畴，但未经证实", status: "partial" },
  lehNotes: [
    { kind: "gap", node: "L-23-3-1",
      en: "This node writes adrenalin/glukagon as a single undifferentiated pair driving the cascade, and never names a target organ. Lehninger 23.3 is explicit that the two do not have the same reach: of glucagon it says “Although its primary target is the liver” (A p.862), and Table 23-4 is titled “Production and Release of Glucose by the Liver” (A p.863). Glucagon also reaches adipose tissue, but NOT skeletal muscle; epinephrine does. Asked which hormone mobilises muscle glycogen, this node invites the answer glucagon, and that is wrong twice over — muscle carries no glucagon receptors, and muscle glycogen could not raise blood glucose in any case, because muscle lacks glucose 6-phosphatase. The cascade drawn here is correct; what is missing is which organ each hormone is drawing it in.",
      cn: "本节点把 adrenalin/glukagon 写成不加区分的一对去驱动该级联，且从未点出靶器官。Lehninger 23.3 明确指出二者的**触及范围并不相同**：关于 glucagon，书中的说法是“Although its primary target is the liver”（A 第862页），而 Table 23-4 的标题就是“Production and Release of Glucose by the Liver”（A 第863页）。Glucagon 也够得着脂肪组织，但**够不着骨骼肌**；epinephrine 才够得着。若被问到「哪种激素动员肌糖原」，本节点会诱使人回答 glucagon，而这句话错了两重——肌肉**没有** glucagon 受体；而且即便动员了，肌糖原也**无法**升高血糖，因为肌肉缺乏 glucose 6-phosphatase。此处所画的级联本身是正确的；缺的是「每种激素是在**哪个器官**里画这条级联」。" },
  ],
  mustKnow: { en: "It is a TWO-TIER cascade, and that is the whole point. Protein kinase phosphorylates glycogen SYNTHASE directly and switches it off — but it does not touch phosphorylase. What it phosphorylates instead is PHOSPHORYLASE KINASE, and that enzyme is what switches phosphorylase on. One signal, opposite effects on the two enzymes, so they can never run together in a futile cycle; protein phosphatases reverse both.", cn: "这是一条**两级**级联，而这正是本节的要点。protein kinase 直接磷酸化 glycogen **synthase**，把它关掉——但它**不碰** phosphorylase。它磷酸化的是 **PHOSPHORYLASE KINASE**，再由这个酶把 phosphorylase 打开。一个信号，对两个酶产生相反的效果，所以它们永远不会同时运转、白白烧掉 ATP；protein phosphatase 把两边都逆转回去。" },
  summary: {
    en: "Glycogen synthesis and breakdown are coordinately controlled by an AMPLIFYING CASCADE of reactions, reciprocally: GLYCOGEN SYNTHASE is active precisely when PHOSPHORYLASE is inactive, and vice versa. ADRENALINE and GLUCAGON stimulate breakdown and inhibit synthesis by raising the intracellular level of CYCLIC AMP (cAMP), which activates PROTEIN KINASE. Two things then happen under this same protein kinase's action: (1) GLYCOGEN SYNTHASE is phosphorylated (converted from the active 'I' form to the inactive 'D' form), which INACTIVATES it; (2) PHOSPHORYLASE KINASE is phosphorylated (from an inactive 'b' form to an active 'a' form) -- and it is this now-active phosphorylase kinase that in turn phosphorylates PHOSPHORYLASE ITSELF, converting it from its 'b' form to a MUCH MORE ACTIVE 'a' form. So phosphorylase is activated via a two-tier phosphorylation cascade (protein kinase phosphorylates/activates phosphorylase kinase, which then phosphorylates/activates phosphorylase), while glycogen synthase is inactivated by a single, direct phosphorylation from the same protein kinase. All of these phosphate groups can be removed again from the phosphorylated enzymes by specific PROTEIN PHOSPHATASES, reversing each step. On top of this covalent (phosphorylation) control, the book notes that BOTH glycogen synthase and phosphorylase are ALSO regulated by non-covalent ALLOSTERIC interactions. The book's diagram lays the whole cascade out explicitly: adrenaline/glucagon -> adenylate cyclase -> cAMP -> a central kinase the book itself labels 'the kinase of phosphorylase-kinase, i.e. protein kinase' -> which drives, via ATP/ADP, both the phosphorylase-kinase-b-to-a conversion and the glycogen-synthase-I-to-D conversion; active phosphorylase kinase (a) then drives phosphorylase-b-to-a; active phosphorylase (a) converts glycogen + inorganic phosphate into glucose-1-phosphate, while active glycogen synthase (I) builds glycogen from UDP-glucose; and a protein phosphatase (itself shown with active/inactive forms) reverses each of the three phosphorylated states, releasing inorganic phosphate. This diagram, and the sentence that closes it, are the LAST content of chapter 7 -- chapter 8 ('Lipidy') begins on a fresh page, p.176.",
    cn: "糖原的合成与分解是通过一个放大级联反应互相协调控制的：糖原合酶恰好在磷酸化酶失活时被激活，反之亦然。肾上腺素和胰高血糖素通过提高细胞内环腺苷酸（cAMP）水平来激活蛋白激酶，从而刺激分解、抑制合成。在同一个蛋白激酶的作用下会发生两件事：(1) 糖原合酶被磷酸化（从活性的「I」形式转变为无活性的「D」形式），因而失活；(2) 磷酸化酶激酶被磷酸化（从无活性的「b」形式转变为有活性的「a」形式）——正是这个此时已被激活的磷酸化酶激酶，进一步磷酸化磷酸化酶本身，使其从「b」形式转变为活性强得多的「a」形式。因此，磷酸化酶是通过两级磷酸化级联被激活的（蛋白激酶磷酸化/激活磷酸化酶激酶，后者再磷酸化/激活磷酸化酶本身），而糖原合酶则是被同一个蛋白激酶直接、单步磷酸化而失活的。所有这些磷酸基团都可以被特异的蛋白磷酸酶从磷酸化的酶上重新移除，从而逆转每一步。除了这种共价（磷酸化）调控之外，教材指出，糖原合酶和磷酸化酶还都受到非共价的别构相互作用的调节。教材的插图把整个级联清楚地展示出来：肾上腺素/胰高血糖素→腺苷酸环化酶→cAMP→一个教材自己标注为「磷酸化酶激酶的激酶，即蛋白激酶」的中枢激酶→通过ATP/ADP同时驱动磷酸化酶激酶b→a的转化和糖原合酶I→D的转化；被激活的磷酸化酶激酶（a）再驱动磷酸化酶b→a的转化；活性磷酸化酶（a）把糖原和无机磷酸转变为葡萄糖-1-磷酸，而活性糖原合酶（I）则用UDP-葡萄糖合成糖原；一种蛋白磷酸酶（图中本身也有活性/无活性两种形式）负责逆转这三对磷酸化状态，并释放无机磷酸。这幅插图及其后的收尾句，是第7章的最后内容——第8章「脂质」将从新的一页（第176页）开始。"
  },
  points: [
    { cz: "reciproční regulace: synthasa aktivní ↔ fosforylasa neaktivní", en: "Glycogen synthesis and breakdown are controlled RECIPROCALLY: glycogen synthase is active exactly when phosphorylase is inactive, and vice versa.", cn: "糖原的合成与分解是相互调控的：糖原合酶恰好在磷酸化酶失活时被激活，反之亦然。" },
    { cz: "adrenalin/glukagon → cAMP → proteinkinasa", en: "Adrenaline and glucagon stimulate breakdown / inhibit synthesis by raising intracellular cAMP, which activates protein kinase.", cn: "肾上腺素和胰高血糖素通过提高细胞内cAMP水平激活蛋白激酶，从而刺激分解、抑制合成。" },
    { cz: "proteinkinasa fosforyluje glykogensynthasu I→D (inaktivace)", en: "Protein kinase phosphorylates GLYCOGEN SYNTHASE, converting the active 'I' form to the inactive 'D' form.", cn: "蛋白激酶磷酸化糖原合酶，使其从活性的「I」形式转变为无活性的「D」形式。" },
    { cz: "proteinkinasa fosforyluje fosforylasakinasu b→a (aktivace)", en: "The SAME protein kinase also phosphorylates PHOSPHORYLASE KINASE, converting its inactive 'b' form to an active 'a' form.", cn: "同一个蛋白激酶还磷酸化磷酸化酶激酶，使其从无活性的「b」形式转变为有活性的「a」形式。" },
    { cz: "aktivní fosforylasakinasa a fosforyluje fosforylasu b→a (mnohem aktivnější)", en: "Active phosphorylase kinase (a) then phosphorylates PHOSPHORYLASE ITSELF, b to a -- the book states this converts it into a MUCH MORE ACTIVE form. So phosphorylase activation is a two-tier cascade; glycogen synthase inactivation is a single direct step from protein kinase.", cn: "活性的磷酸化酶激酶（a）随后磷酸化磷酸化酶本身，使其从b形式转变为a形式——教材指出这使其转变为活性强得多的形式。因此磷酸化酶的激活是两级级联，而糖原合酶的失活则是蛋白激酶直接的单步磷酸化。" },
    { cz: "proteinfosfatasy odstraňují fosfáty (reverze všech kroků)", en: "Specific PROTEIN PHOSPHATASES can remove the phosphate groups again from all three phosphorylated enzymes, reversing each step.", cn: "特异的蛋白磷酸酶可以将磷酸基团从这三种磷酸化的酶上重新去除，逆转每一步。" },
    { cz: "navíc: nekovalentní alosterická regulace obou enzymů", en: "On top of covalent (phosphorylation) control, BOTH glycogen synthase and phosphorylase are also regulated by non-covalent ALLOSTERIC interactions.", cn: "除了共价（磷酸化）调控外，糖原合酶和磷酸化酶还都受到非共价的别构相互作用调节。" },
    { cz: "schéma: adrenalin/glukagon → adenylátcyklasa → cAMP → \"fosforylasakinasa-kinasa (proteinkinasa)\" → obě větve", en: "The book's diagram lays out the full cascade: adrenaline/glucagon -> adenylate cyclase -> cAMP -> a central enzyme the book labels 'fosforylasakinasa-kinasa (proteinkinasa)' [the kinase of phosphorylase-kinase, i.e. protein kinase] -> which, via ATP/ADP, drives both the phosphorylase-kinase b-to-a branch and the glycogen-synthase I-to-D branch.", cn: "教材配图展示了完整的级联：肾上腺素/胰高血糖素→腺苷酸环化酶→cAMP→一个教材标注为「fosforylasakinasa-kinasa (proteinkinasa)」（即磷酸化酶激酶的激酶，也就是蛋白激酶）的中枢酶→通过ATP/ADP同时驱动磷酸化酶激酶b→a和糖原合酶I→D两条分支。" },
    { cz: "toto je konec kapitoly 7 (kap. 8 Lipidy začíná na str. 176)", en: "This diagram and its closing sentence are the LAST content of chapter 7 -- chapter 8 ('Lipidy') begins fresh on page 176.", cn: "这幅插图及其收尾句是第7章的最后内容——第8章「脂质」将从第176页重新开始。" }
  ],
  terms: [
    { cz: "3',5'-cAMP", en: "cyclic AMP (3',5'-cAMP)", cn: "环腺苷酸 (3',5'-cAMP)", def_en: "The second messenger produced by adenylate cyclase in response to adrenaline/glucagon; activates protein kinase to trigger the glycogen-regulation cascade.", def_cn: "由腺苷酸环化酶在肾上腺素/胰高血糖素作用下产生的第二信使；激活蛋白激酶以触发糖原调控级联反应。" },
    { cz: "adenylátcyklasa", en: "adenylate cyclase", cn: "腺苷酸环化酶", def_en: "The enzyme activated by adrenaline/glucagon that converts ATP to cyclic AMP.", def_cn: "被肾上腺素/胰高血糖素激活、将ATP转化为环腺苷酸的酶。" },
    { cz: "proteinkinasa", en: "protein kinase", cn: "蛋白激酶", def_en: "The cAMP-activated kinase (labelled in the book's diagram as the kinase of phosphorylase-kinase) that phosphorylates both glycogen synthase (inactivating it) and phosphorylase kinase (activating it).", def_cn: "由cAMP激活的激酶（在教材配图中标注为磷酸化酶激酶的激酶），能磷酸化糖原合酶（使其失活）和磷酸化酶激酶（使其激活）。" },
    { cz: "fosforylasakinasa (b/a)", en: "phosphorylase kinase (b/a forms)", cn: "磷酸化酶激酶 (b/a形式)", def_en: "Activated (b to a) by protein kinase phosphorylation; the active 'a' form then phosphorylates phosphorylase itself.", def_cn: "经蛋白激酶磷酸化后由b形式激活为a形式；活性的a形式随后磷酸化磷酸化酶本身。" },
    { cz: "fosforylasa (a/b)", en: "phosphorylase (a/b forms)", cn: "磷酸化酶 (a/b形式)", def_en: "The 'a' (phosphorylated) form is much more active than the 'b' form; activated by phosphorylase kinase, reversed by protein phosphatase.", def_cn: "a（磷酸化）形式的活性远高于b形式；由磷酸化酶激酶激活，由蛋白磷酸酶逆转。" },
    { cz: "glykogensynthasa (I/D)", en: "glycogen synthase (I/D forms)", cn: "糖原合酶 (I/D形式)", def_en: "The 'I' form is active, the 'D' form inactive; protein kinase phosphorylation converts I to D. The book's diagram does not spell out what the letters abbreviate.", def_cn: "I形式为活性形式，D形式为无活性形式；蛋白激酶磷酸化使I转变为D。教材配图未说明这两个字母的具体含义。" },
    { cz: "proteinfosfatasa (aktivní/inaktivní)", en: "protein phosphatase (active/inactive forms)", cn: "蛋白磷酸酶（活性/无活性形式）", def_en: "Removes phosphate groups from phosphorylated glycogen synthase, phosphorylase, and phosphorylase kinase, reversing their activation states; itself shown with active/inactive forms in the diagram.", def_cn: "从磷酸化的糖原合酶、磷酸化酶及磷酸化酶激酶上去除磷酸基团，逆转其激活状态；配图中该酶本身也有活性/无活性两种形式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What effect does the same protein kinase have on glycogen synthase versus on phosphorylase kinase?",
      q_cn: "同一个蛋白激酶对糖原合酶和对磷酸化酶激酶分别有什么作用？",
      options: [
        "It activates both by phosphorylation",
        "It phosphorylates and INACTIVATES glycogen synthase (I->D), while phosphorylating and ACTIVATING phosphorylase kinase (b->a)",
        "It phosphorylates and activates glycogen synthase, while dephosphorylating and inactivating phosphorylase kinase",
        "It has no effect on either; only phosphatases act on these enzymes"
      ],
      answer: 1,
      why_en: "The book states the same protein kinase inactivates glycogen synthase by phosphorylation (I to D) while activating phosphorylase kinase by phosphorylation (b to a) -- opposite outcomes for the same type of covalent modification on two different targets, not uniform activation, reversed roles, or no effect.",
      why_cn: "教材指出，同一个蛋白激酶通过磷酸化使糖原合酶失活（I→D），同时通过磷酸化使磷酸化酶激酶激活（b→a）——同样的共价修饰对两个不同靶点产生相反的效果，而不是统一激活、角色颠倒或无作用。"
    },
    {
      type: "mcq",
      q_en: "What is the correct activation sequence that ultimately produces active phosphorylase (form a)?",
      q_cn: "最终产生活性磷酸化酶（a形式）的正确激活顺序是什么？",
      options: [
        "cAMP directly phosphorylates phosphorylase",
        "Protein kinase directly phosphorylates phosphorylase",
        "cAMP activates protein kinase, which phosphorylates/activates phosphorylase kinase (b->a), which then phosphorylates phosphorylase (b->a)",
        "Glycogen synthase D directly converts to phosphorylase a"
      ],
      answer: 2,
      why_en: "The cascade is two-tiered: cAMP activates protein kinase, which activates phosphorylase kinase (b to a) by phosphorylation, and it is this active phosphorylase kinase that then phosphorylates phosphorylase itself (b to a) -- protein kinase does not act on phosphorylase directly, and glycogen synthase and phosphorylase are separate branches of the cascade, not interconverting with each other.",
      why_cn: "该级联是两级的：cAMP激活蛋白激酶，蛋白激酶通过磷酸化激活磷酸化酶激酶（b→a），正是这个活性的磷酸化酶激酶再磷酸化磷酸化酶本身（b→a）——蛋白激酶并不直接作用于磷酸化酶，糖原合酶与磷酸化酶是该级联中彼此独立的两条分支，并不相互转化。"
    },
    {
      type: "short",
      q_en: "Explain the reciprocal regulation of glycogen synthase and phosphorylase, and the role of protein phosphatases.",
      q_cn: "解释糖原合酶与磷酸化酶的相互调控，以及蛋白磷酸酶的作用。",
      accept: ["reciprocal", "phosphatase", "cAMP", "protein kinase", "相互调控", "磷酸酶", "蛋白激酶"],
      answer_en: "Glycogen synthase is active when phosphorylase is inactive and vice versa. Adrenaline/glucagon raise cAMP, activating protein kinase, which phosphorylates glycogen synthase (inactivating it, I->D) and phosphorylase kinase (activating it, b->a); active phosphorylase kinase then phosphorylates and activates phosphorylase (b->a). Specific protein phosphatases remove these phosphate groups again, reversing every step of the cascade.",
      answer_cn: "糖原合酶在磷酸化酶失活时被激活，反之亦然。肾上腺素/胰高血糖素提高cAMP水平，激活蛋白激酶，后者磷酸化糖原合酶（使其失活，I→D）和磷酸化酶激酶（使其激活，b→a）；活性的磷酸化酶激酶再磷酸化并激活磷酸化酶（b→a）。特异的蛋白磷酸酶将这些磷酸基团重新去除，逆转级联中的每一步。"
    }
  ],
  oral: {
    q_en: "Walk through the full hormonal cascade regulating glycogen synthesis and breakdown, as diagrammed at the end of chapter 7.",
    q_cn: "说明第7章末尾图示的、调控糖原合成与分解的完整激素级联反应。",
    model_en: "This closing section ties glycogen synthesis and breakdown together as one coordinately controlled system, and the guiding principle is reciprocity: glycogen synthase is active exactly when phosphorylase is inactive, and the two never run full-on at the same time. The trigger is hormonal -- adrenaline and glucagon both push in the same direction, stimulating breakdown and shutting down synthesis, and they do it by raising the intracellular level of cyclic AMP, which in turn activates protein kinase. From there, that one protein kinase does two different things to two different targets. On the synthesis side, it phosphorylates glycogen synthase directly, flipping it from its active I form to its inactive D form -- one step, done. On the breakdown side, it phosphorylates phosphorylase kinase, converting it from an inactive b form to an active a form, but that's not the end of the chain: it's this now-active phosphorylase kinase that goes on to phosphorylate phosphorylase itself, converting it from b to a, and the book is explicit that this a form is much more active than b. So getting phosphorylase turned on takes two sequential phosphorylation events, while turning glycogen synthase off takes just one, both ultimately triggered by the same upstream kinase. All of this is reversible: specific protein phosphatases can strip the phosphate back off any of these three enzymes, resetting the whole system, and the book also notes that both glycogen synthase and phosphorylase have a second, independent layer of control through non-covalent allosteric interactions, on top of this phosphorylation cascade. The book's own diagram draws every one of these steps out explicitly, labelling that central kinase as literally 'the kinase of phosphorylase-kinase' before clarifying in parentheses that this is just protein kinase, and showing phosphorylase acting on glycogen plus inorganic phosphate to release glucose-1-phosphate while glycogen synthase builds glycogen from UDP-glucose on the other side. And this diagram, together with the sentence that closes it, is genuinely the last content in chapter 7 -- the book moves straight into chapter 8, lipids, starting fresh on page 176.",
    checklist: [
      "Stated the reciprocal principle: synthase active <-> phosphorylase inactive",
      "Named adrenaline/glucagon -> cAMP -> protein kinase as the trigger",
      "Described protein kinase phosphorylating/inactivating glycogen synthase (I->D)",
      "Described protein kinase phosphorylating/activating phosphorylase kinase (b->a)",
      "Described active phosphorylase kinase then phosphorylating/activating phosphorylase itself (b->a, 'much more active')",
      "Named protein phosphatases as reversing every step",
      "Mentioned additional non-covalent allosteric regulation of both enzymes",
      "Noted this is the final content of chapter 7, with chapter 8 (Lipidy) starting fresh at p.176"
    ]
  }
}

);
