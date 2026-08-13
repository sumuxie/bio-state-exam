/* Bank questions for chapter 7, first half (nodes 7-1 through 7-6) — the second
   question layer, see BANK_SPEC.md. Every item below is derived from the content
   already in biochemie_pro/data/ch7.js (points, summary, mustKnow, terms,
   coverageNote of the node it is attached to); no fact here comes from outside
   that node. Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  "7-1": [
    {
      type: "mcq",
      q_en: "Role (d) says carbohydrates in living organisms also occur bound to something other than protein. Bound to what, and in which two named classes of substance?",
      q_cn: "功能(d)提到，生物体内的糖类还会与蛋白质以外的东西结合。与什么结合？形成教材点名的哪两类物质？",
      options: [
        "Bound to lipids — as components of membrane glycolipids and lipopolysaccharides",
        "Bound to protein through the amide nitrogen of asparagine — as the glycoproteins of blood serum",
        "Bound covalently to a protein core as glycosaminoglycan chains — as proteoglycans",
        "Bound to phosphoric acid — as the sugar phosphate esters in which sugars are metabolized"
      ],
      answer: 0,
      optionRefs: { 1: "7-5", 2: "7-4-2", 3: "7-2-1" },
      optionNotes: {
        1: { en: "That is the protein case, not the lipid one: an N-glycosidic bond to asparagine is one of the two ways an oligosaccharide attaches to a protein.", cn: "这说的是与蛋白质结合的情形，不是与脂质：经天冬酰胺酰胺氮的N-糖苷键，是寡糖连接到蛋白质上的两种方式之一。" },
        2: { en: "Proteoglycans are also carbohydrate-on-protein; the lipid-bound forms the chapter opening names are glycolipids and lipopolysaccharides.", cn: "蛋白聚糖同样是糖连在蛋白质上；开篇所说与脂质结合的形式是糖脂和脂多糖。" },
        3: { en: "Sugar phosphate esters are carbohydrate bound to an acid, not to a lipid — that is the metabolic form of sugars, a different topic entirely.", cn: "糖磷酸酯是糖与酸结合，不是与脂质结合——那是糖的代谢形式，完全是另一个话题。" }
      },
      why_en: "The book closes role (d) by stating that, besides proteins, carbohydrates in living organisms also occur bound to LIPIDS, as components of membrane glycolipids and lipopolysaccharides. The glycoprotein half of role (d) is the protein case; the lipid case is the one this question asks for.",
      why_cn: "教材在功能(d)的结尾指出：除蛋白质外，生物体内的糖类还会与脂质结合，成为膜糖脂和脂多糖的组分。功能(d)的前半段讲的是糖蛋白，即与蛋白质结合的情形；本题问的正是与脂质结合的那一半。"
    },
    {
      type: "mcq",
      q_en: "In role (a), the book names one compound as the primary substance organisms use to obtain energy, released when the storage polysaccharides are mobilized. Which?",
      q_cn: "在功能(a)中，教材点名了一种化合物，作为储能多糖被动员后释放、供机体获取能量的主要物质。是哪一种？",
      options: [
        "D-fructose",
        "Cellulose",
        "D-glucose",
        "D-ribose"
      ],
      answer: 2,
      optionRefs: { 0: "7-1-2-2", 1: "7-4-1-2", 3: "4-1-2" },
      optionNotes: {
        0: { en: "D-fructose is the most common ketohexose, but role (a) names D-glucose as the compound both starch and glycogen yield for energy.", cn: "D-果糖是最常见的酮己糖，但功能(a)明确指出淀粉和糖原释放出来供能的是D-葡萄糖。" },
        1: { en: "Cellulose is named in role (c) as the structural polysaccharide and the most abundant organic compound in the biosphere — a structural role, not a fuel.", cn: "纤维素出现在功能(c)中，是结构多糖，也是生物圈中含量最丰富的有机化合物——它承担结构功能，不是燃料。" },
        3: { en: "D-ribose belongs to role (b): it is a pentose of the DNA/RNA backbone, not the energy-yielding sugar.", cn: "D-核糖属于功能(b)：它是DNA/RNA骨架中的戊糖，不是供能的糖。" }
      },
      why_en: "Role (a) states that starch in plants and glycogen in animals are both readily mobilized polysaccharides, and that both yield D-glucose as the primary compound used to obtain energy. The other three sugars/polymers named in the chapter opening each belong to a different one of the four roles.",
      why_cn: "功能(a)指出，植物中的淀粉和动物中的糖原都是易于动员的多糖，二者都释放D-葡萄糖，作为获取能量的主要化合物。开篇提到的另外几种糖/聚合物，各自属于四项功能中的其他项。"
    },
    {
      type: "short",
      q_en: "Which two polysaccharides does the chapter opening pair as the storage forms of plants and animals, and what property does it emphasise about both?",
      q_cn: "第7章开篇把哪两种多糖分别作为植物和动物的储存形式配成一对？教材强调了它们共同的什么性质？",
      accept: ["starch", "glycogen", "mobilized", "readily", "glucose", "淀粉", "糖原", "动员", "葡萄糖"],
      answer_en: "Starch in plants and glycogen in animals. The book emphasises that both are polysaccharides that can be very readily mobilized, and that both yield D-glucose as the primary compound used to obtain energy.",
      answer_cn: "植物中的淀粉与动物中的糖原。教材强调这两者都是能被非常容易地动员利用的多糖，并且都释放出D-葡萄糖，作为获取能量的主要化合物。"
    }
  ],

  "7-1-1": [
    {
      type: "mcq",
      q_en: "Which compound is the parent of the D-series, and what specifically is drawn on the right in its projection formula?",
      q_cn: "哪个化合物是D系的原型？在它的投影式中，具体是什么画在右边？",
      options: [
        "D-glyceraldehyde, with its hydroxyl group pointing to the right",
        "Dihydroxyacetone, with its keto group pointing to the right",
        "D-glucose, with its C-1 aldehyde pointing to the right",
        "L-glyceraldehyde, with its hydroxyl group pointing to the right"
      ],
      answer: 0,
      optionRefs: { 1: "7-1-2-2", 2: "7-1-2-1" },
      optionNotes: {
        1: { en: "Dihydroxyacetone is the parent of the ketose family tree, but it has no asymmetric carbon at all, so it cannot define a configurational series.", cn: "二羟丙酮是酮糖系谱的原型，但它根本没有不对称碳原子，因此无法用来定义构型系列。" },
        2: { en: "D-glucose is the most important aldohexose, but its D-label is itself assigned by comparison with glyceraldehyde, not the other way round.", cn: "D-葡萄糖是最重要的醛己糖，但它的D标记本身就是通过与甘油醛比较而确定的，不能反过来。" },
        3: { en: "The two enantiomers are swapped here: the isomer whose projection formula puts the hydroxyl on the right is by definition D-glyceraldehyde.", cn: "这里把两个对映体弄反了：投影式中羟基在右侧的那一个，按定义就是D-甘油醛。" }
      },
      why_en: "Glyceraldehyde has one asymmetric carbon and therefore exists as exactly two stereoisomers. The book defines D-glyceraldehyde as the one whose projection formula shows the hydroxyl group pointing to the RIGHT, and makes it the parent compound of the whole D-series.",
      why_cn: "甘油醛有一个不对称碳原子，因此恰好存在两种立体异构体。教材把投影式中羟基指向右侧的那一个定义为D-甘油醛，并以它作为整个D系的原型化合物。"
    },
    {
      type: "mcq",
      q_en: "A sugar is reported as levorotatory, i.e. (−). What does that tell you about whether it belongs to the D- or the L- series?",
      q_cn: "报告说某个糖是左旋的，即(−)。这能告诉你它属于D系还是L系吗？",
      options: [
        "It must belong to the L-series, since (−) and L- mean the same thing",
        "Nothing at all — configuration and observed rotation are two separate properties, each assigned or measured on its own",
        "It must belong to the D-series, since D-sugars rotate light counter-clockwise",
        "It means the sugar has no asymmetric carbon"
      ],
      answer: 1,
      optionRefs: { 3: "7-1-2-2" },
      optionNotes: {
        0: { en: "This is exactly the confusion the book warns against: (−) is a measured direction of rotation, L- is a configurational label defined against L-glyceraldehyde.", cn: "这正是教材特意提醒要避免的混淆：(−)是实测的旋光方向，而L-是以L-甘油醛为参照定义的构型标记。" },
        2: { en: "The same error with the sign flipped — no rule connects the D-/L- label to the direction of rotation in either direction.", cn: "同一个错误只是把符号反了过来——D-/L-标记与旋光方向之间在任何方向上都不存在这样的规则。" },
        3: { en: "A compound with no asymmetric carbon, such as dihydroxyacetone, is optically INACTIVE — it would show no rotation at all, not a negative one.", cn: "没有不对称碳原子的化合物（如二羟丙酮）是光学不活性的——它根本不会有旋光，而不是呈现负值。" }
      },
      why_en: "The book states explicitly that belonging to the D- or L- series says NOTHING about a sugar's optical rotation, which may independently be (+) dextrorotatory or (−) levorotatory. D-/L- denotes absolute configuration; (+)/(−) is an experimental observation, and neither predicts the other.",
      why_cn: "教材明确指出，属于D系还是L系并不能说明该糖的旋光性，旋光可以独立地是(+)右旋或(−)左旋。D-/L-表示绝对构型，(+)/(−)是实验观测结果，二者互不预示。"
    },
    {
      type: "short",
      q_en: "Per this section, what two functional groups can a monosaccharide be built around, what else must it carry, and what are the names for sugars with 4, 5, 6 and 7 carbon atoms?",
      q_cn: "根据本节，单糖可以围绕哪两种官能团构成？此外还必须带有什么？含4、5、6、7个碳原子的糖分别叫什么？",
      accept: ["aldehyde", "ketone", "hydroxyl", "tetrose", "pentose", "hexose", "heptose", "醛", "酮", "羟基", "四碳糖", "戊糖", "己糖", "庚糖"],
      answer_en: "A monosaccharide is an aldehyde or a ketone that also carries two or more hydroxyl groups, with the general formula (CH2O)n. Sugars with 4, 5, 6 and 7 carbon atoms are called tetroses, pentoses, hexoses and heptoses respectively.",
      answer_cn: "单糖是含有两个或更多羟基的醛或酮，通式为(CH2O)n。含4、5、6、7个碳原子的糖分别称为四碳糖、戊糖、己糖和庚糖。"
    }
  ],

  "7-1-2-1": [
    {
      type: "mcq",
      q_en: "How many aldopentose stereoisomers exist in total, and how many of them are in the D-series?",
      q_cn: "醛戊糖共存在多少种立体异构体？其中属于D系的有多少种？",
      options: [
        "4 in total, 2 in the D-series",
        "8 in total, 4 in the D-series",
        "16 in total, 8 in the D-series",
        "2 in total, both in the D-series"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "That is the aldotetrose count: n=2 asymmetric carbons, giving D-/L-erythrose and D-/L-threose.", cn: "这是醛丁糖的数目：n=2个不对称碳，给出D-/L-赤藓糖和D-/L-苏糖。" },
        2: { en: "That is the aldohexose count: 4 asymmetric carbons give 2 to the fourth, and Obr. 7.1 names the eight D-forms.", cn: "这是醛己糖的数目：4个不对称碳给出2的四次方，图7.1列出了其中八种D型。" },
        3: { en: "That is the aldotriose count, and the two isomers are D- and L-glyceraldehyde, one in each series, not both in the D-series.", cn: "这是醛丙糖的数目，两种异构体是D-和L-甘油醛，两个系列各一个，并非都属于D系。" }
      },
      why_en: "The book states that aldopentoses have three asymmetric centres, so 2 to the third, i.e. 8 stereoisomers exist, split evenly: 4 in the D-series and 4 in the L-series. The rule doing the work is the general one — n asymmetric carbons and no plane of symmetry give 2 to the n forms.",
      why_cn: "教材指出，醛戊糖有三个不对称中心，因而存在2的三次方即8种立体异构体，D系4种、L系4种各占一半。起作用的是那条通则：n个不对称碳且无对称面，给出2的n次方种形式。"
    },
    {
      type: "mcq",
      q_en: "Two monosaccharides differ in configuration at exactly one asymmetric carbon. What is the book's term for this relationship?",
      q_cn: "两个单糖仅在一个不对称碳原子上构型不同。教材把这种关系称作什么？",
      options: [
        "Anomers",
        "Members of the D- and the L-series",
        "Epimers",
        "Aldose and ketose forms of one another"
      ],
      answer: 2,
      optionRefs: { 0: "7-1-3-1", 1: "7-1-1", 3: "7-6" },
      optionNotes: {
        0: { en: "Anomers also differ at one carbon, but specifically at the NEW asymmetric carbon created when the chain closes into a ring — a ring-form relationship, not an open-chain one.", cn: "异头物也是在一个碳上不同，但差的偏偏是链闭环时新产生的那个不对称碳——那是环状形式之间的关系，不是开链构型之间的关系。" },
        1: { en: "The D-/L- label is fixed by one particular carbon, the one farthest from the carbonyl; two epimers can perfectly well both be D-sugars, as D-glucose and D-mannose are.", cn: "D-/L-标记由某一个特定的碳（离羰基最远的那个）决定；两个差向异构体完全可以同属D系，D-葡萄糖和D-甘露糖就是如此。" },
        3: { en: "Aldose-to-ketose conversion is isomerization, one of the three sugar-interconversion reaction types; it changes where the carbonyl sits, not the configuration at one carbon.", cn: "醛糖与酮糖之间的转化是异构化，属于三种糖类互变反应之一；它改变的是羰基的位置，而不是某一个碳上的构型。" }
      },
      why_en: "The book defines EPIMERS as monosaccharides differing in configuration at only one asymmetric carbon, and gives its own two examples with D-glucose: D-glucose/D-mannose differ at C-2, D-glucose/D-galactose at C-4.",
      why_cn: "教材把仅在一个不对称碳原子上构型不同的单糖定义为差向异构体（表异构体），并给出与D-葡萄糖有关的两个例子：D-葡萄糖/D-甘露糖在C-2不同，D-葡萄糖/D-半乳糖在C-4不同。"
    },
    {
      type: "short",
      q_en: "Obr. 7.1 draws the D-branch of the aldose tree level by level. Name the two D-aldotetroses and the four D-aldopentoses it passes through on the way to the aldohexoses.",
      q_cn: "图7.1逐层描绘了醛糖系谱的D系分支。在到达醛己糖之前，它经过哪两种D-醛丁糖和哪四种D-醛戊糖？",
      accept: ["erythrose", "threose", "ribose", "arabinose", "xylose", "lyxose", "赤藓糖", "苏糖", "核糖", "阿拉伯糖", "木糖", "来苏糖"],
      answer_en: "The two D-aldotetroses are D-erythrose and D-threose; the four D-aldopentoses are D-ribose, D-arabinose, D-xylose and D-lyxose. The tree then opens out into the eight D-aldohexoses.",
      answer_cn: "两种D-醛丁糖是D-赤藓糖和D-苏糖；四种D-醛戊糖是D-核糖、D-阿拉伯糖、D-木糖和D-来苏糖。系谱随后展开为八种D-醛己糖。"
    }
  ],

  "7-1-2-2": [
    {
      type: "mcq",
      q_en: "In Obr. 7.2, which two ketohexoses branch from D-xylulose?",
      q_cn: "在图7.2中，由D-木酮糖分支出的是哪两种酮己糖？",
      options: [
        "D-psicose and D-fructose",
        "D-sorbose and D-tagatose",
        "D-glucose and D-mannose",
        "D-erythrulose and D-ribulose"
      ],
      answer: 1,
      optionRefs: { 2: "7-1-2-1" },
      optionNotes: {
        0: { en: "Those two branch from the OTHER ketopentose, D-ribulose — and D-fructose, the most common ketohexose, is on that branch.", cn: "这两种是由另一种酮戊糖D-核酮糖分支出来的——最常见的酮己糖D-果糖就在那条分支上。" },
        2: { en: "Those are aldohexoses from the aldose family tree, derived from glyceraldehyde, not from the ketose tree.", cn: "这两种是醛糖系谱中的醛己糖，源自甘油醛，不属于酮糖系谱。" },
        3: { en: "D-erythrulose is the ketotetrose and D-ribulose a ketopentose — both sit one or more levels EARLIER in the tree, not below D-xylulose.", cn: "D-赤藓酮糖是酮丁糖，D-核酮糖是酮戊糖——它们在系谱中都比D-木酮糖更靠前，而不是在其下游。" }
      },
      why_en: "Obr. 7.2 branches D-ribulose into D-psicose and D-fructose, and D-xylulose into D-sorbose and D-tagatose. Those four are the ketohexoses, and together with the counting rule they make up the 8 ketohexose stereoisomers of which the figure draws the D-half.",
      why_cn: "图7.2中，D-核酮糖分支为D-阿洛酮糖和D-果糖，D-木酮糖分支为D-山梨糖和D-塔格糖。这四种就是图中的酮己糖，结合计数规则，它们构成8种酮己糖立体异构体中图上画出的D系那一半。"
    },
    {
      type: "mcq",
      q_en: "Dihydroxyacetone and glyceraldehyde are both trioses. What is the key structural difference the book builds the whole ketose tree on?",
      q_cn: "二羟丙酮和甘油醛都是丙糖。教材据以构建整个酮糖系谱的关键结构差异是什么？",
      options: [
        "Dihydroxyacetone has no asymmetric carbon at all and is optically inactive, whereas glyceraldehyde has one",
        "Both have one asymmetric carbon, so both give a D-/L- pair",
        "Dihydroxyacetone is levorotatory while glyceraldehyde is dextrorotatory",
        "Dihydroxyacetone is the aldose and glyceraldehyde the ketose of the pair"
      ],
      answer: 0,
      optionRefs: { 1: "7-1-1", 2: "7-1-1" },
      optionNotes: {
        1: { en: "Only glyceraldehyde does; that single asymmetric carbon is precisely why glyceraldehyde, and not dihydroxyacetone, is the reference compound for the D-/L- series.", cn: "只有甘油醛如此；正是这一个不对称碳，使甘油醛（而非二羟丙酮）成为D-/L-系列的参照化合物。" },
        2: { en: "Optical rotation is a measured property of optically ACTIVE sugars; dihydroxyacetone shows no rotation at all, so no sign can be assigned to it.", cn: "旋光是光学活性糖的实测性质；二羟丙酮根本没有旋光，因此无法给它标上任何符号。" },
        3: { en: "The two are swapped: glyceraldehyde is the aldose triose and dihydroxyacetone the ketose triose, which is why each heads its own family tree.", cn: "两者被对调了：甘油醛是醛糖丙糖，二羟丙酮是酮糖丙糖，这也正是它们各自领起一张系谱的原因。" }
      },
      why_en: "The book names dihydroxyacetone's optical inactivity — it has no asymmetric carbon, since C-2 is a symmetric ketone carbon — as the key structural difference from glyceraldehyde. That is what makes every ketose level carry one asymmetric carbon fewer, and therefore half as many stereoisomers, as the aldose level of the same chain length.",
      why_cn: "教材把二羟丙酮的光学不活性——它没有不对称碳，因为C-2是对称的酮基碳——指为与甘油醛的关键结构差异。正是这一点使每一层酮糖都比同碳链长度的醛糖少一个不对称碳，因而立体异构体数目只有一半。"
    },
    {
      type: "short",
      q_en: "D-fructose is singled out in this section. What is it singled out as, which ketopentose does Obr. 7.2 derive it from, and how many ketohexose stereoisomers exist in total?",
      q_cn: "本节特别点出了D-果糖。它被指为什么？图7.2中它由哪种酮戊糖衍生而来？酮己糖共有多少种立体异构体？",
      accept: ["most common", "ketohexose", "ribulose", "8", "最常见", "酮己糖", "核酮糖"],
      answer_en: "D-fructose is named as the most common ketohexose. In Obr. 7.2 it is derived from D-ribulose (alongside D-psicose), and 8 stereoisomers of ketohexose exist in total.",
      answer_cn: "D-果糖被指为最常见的酮己糖。在图7.2中它由D-核酮糖衍生而来（与D-阿洛酮糖同支），酮己糖共存在8种立体异构体。"
    }
  ],

  "7-1-3-1": [
    {
      type: "mcq",
      q_en: "In D-glucose, which two positions react to close the ring, and what functional group results?",
      q_cn: "在D-葡萄糖中，是哪两个位置发生反应而闭合成环？生成什么官能团？",
      options: [
        "The C-1 aldehyde with the C-5 hydroxyl, giving an intramolecular hemiacetal",
        "The C-2 keto group with the C-5 hydroxyl, giving a hemiketal",
        "The C-1 aldehyde with the hydroxyl of a second glucose molecule, giving a glycosidic bond",
        "The C-1 aldehyde with the C-6 hydroxyl, giving a seven-membered ring"
      ],
      answer: 0,
      optionRefs: { 2: "7-2-6" },
      optionNotes: {
        1: { en: "That is the D-fructose case: a ketose reacting through its C-2 carbonyl gives a hemiketal, and the five-membered ring it closes is a furanose.", cn: "这是D-果糖的情形：酮糖通过C-2羰基反应生成半缩酮，闭合出的五元环称为呋喃糖。" },
        2: { en: "That reaction is INTERmolecular, and it gives a glycoside or a disaccharide — the ring closure described here happens inside one molecule.", cn: "那个反应发生在分子之间，产物是糖苷或二糖——这里描述的成环发生在同一个分子内部。" },
        3: { en: "Nothing in the course corresponds to this one; the book names only the pyranose (six-membered) and furanose (five-membered) rings.", cn: "课程中没有与此对应的内容；教材只提到吡喃糖（六元环）和呋喃糖（五元环）两种环。" }
      },
      why_en: "The book states that in D-glucose the aldehyde group at C-1 of the straight chain reacts with the hydroxyl group at C-5, forming an intramolecular hemiacetal, and that the resulting six-membered ring is called a pyranose by analogy with pyran.",
      why_cn: "教材指出，在D-葡萄糖中，直链C-1上的醛基与C-5上的羟基反应，形成分子内半缩醛，由此产生的六元环因与吡喃相似而称为吡喃糖。"
    },
    {
      type: "mcq",
      q_en: "Which ring form does D-ribose take when it is bound in a nucleic acid, and which does free D-ribose predominantly take?",
      q_cn: "D-核糖结合在核酸中时采取哪种环形式？游离的D-核糖又主要采取哪种？",
      options: [
        "Pyranose when bound in nucleic acids; furanose when free",
        "Furanose in both cases — the ring form does not depend on context",
        "Furanose when bound in nucleic acids; pyranose predominantly when free",
        "Pyranose in both cases"
      ],
      answer: 2,
      optionRefs: { 0: "4-1-2", 1: "4-1-2" },
      optionNotes: {
        0: { en: "The two contexts are swapped. Nucleic-acid pentoses are furanoses; the pyranose is what free D-ribose predominantly forms.", cn: "两种情形被对调了。核酸中的戊糖是呋喃糖，而吡喃糖才是游离D-核糖主要采取的形式。" },
        1: { en: "This drops the condition that carries the whole point: the book contrasts bound with free precisely because the preferred ring differs between them.", cn: "这漏掉了最关键的条件：教材之所以把结合态与游离态并列对比，正是因为二者偏好的环形式不同。" },
        3: { en: "The bound case is wrong here: ribose and 2-deoxy-D-ribose form furanose rings when incorporated into DNA and RNA.", cn: "这里的结合态说法有误：核糖和2-脱氧-D-核糖掺入DNA和RNA时形成的是呋喃环。" }
      },
      why_en: "The book states that pentoses such as D-ribose or 2-deoxy-D-ribose form FURANOSE rings when bound in nucleic acids, whereas free D-ribose occurs predominantly in the PYRANOSE form — the same free-versus-bound contrast it draws for D-fructose one paragraph earlier.",
      why_cn: "教材指出，D-核糖或2-脱氧-D-核糖这类戊糖在结合于核酸中时形成呋喃环，而游离的D-核糖则主要以吡喃糖形式存在——这与教材上一段对D-果糖所作的「游离与结合」对比是同一种对照。"
    },
    {
      type: "short",
      q_en: "Explain why ring closure creates a new asymmetric carbon, name that carbon for an aldose and for fructose, and say what the two resulting forms are called.",
      q_cn: "解释为什么闭环会产生一个新的不对称碳，说出在醛糖中和在果糖中这个碳分别是哪一个，并说明由此产生的两种形式叫什么。",
      accept: ["new asymmetric", "anomeric", "C-1", "C-2", "anomer", "alpha", "beta", "新的不对称", "异头碳", "异头物"],
      answer_en: "Cyclization of hexoses and pentoses turns the former carbonyl carbon into a new asymmetric carbon, so two cyclic forms can arise instead of one. That carbon is called the anomeric carbon — C-1 in an aldose such as D-glucose, but C-2 in fructose, whose carbonyl started at C-2 — and the two forms are the alpha and beta anomers.",
      answer_cn: "己糖和戊糖环化时，原来的羰基碳变成了一个新的不对称碳，因而可以产生两种环状形式而不是一种。这个碳称为异头碳——在D-葡萄糖这类醛糖中是C-1，而在果糖中是C-2（因为它的羰基本来就在C-2）——由此得到的两种形式就是α和β异头物。"
    }
  ],

  "7-1-3-2": [
    {
      type: "mcq",
      q_en: "How many distinct compounds are drawn in Obr. 7.5, panel (a)?",
      q_cn: "图7.5的(a)部分总共画了多少种不同的化合物？",
      options: [
        "Four — one per drawing",
        "One — alpha-D-glucopyranose, drawn four different ways",
        "Two — the alpha and beta anomers",
        "Five — the five forms lined up in the figure"
      ],
      answer: 1,
      optionRefs: { 2: "7-1-4" },
      optionNotes: {
        0: { en: "This is the misreading the node exists to prevent: the four drawings are four REPRESENTATIONS, not four compounds.", cn: "这正是本节点要防止的误读：四幅图是四种表示法，不是四种化合物。" },
        2: { en: "The alpha/beta pair is what panel (b) lines up for the pyranose forms, and what mutarotation interconverts; panel (a) shows the alpha form only.", cn: "α/β这一对是(b)部分为吡喃糖形式并排展示的内容，也是变旋所转化的对象；(a)部分只展示了α型。" },
        3: { en: "Five is panel (b)'s count: alpha- and beta-pyranose, the acyclic form, and alpha- and beta-furanose.", cn: "五种是(b)部分的数目：α-和β-吡喃糖、无环式，以及α-和β-呋喃糖。" }
      },
      why_en: "Panel (a) takes a single molecule, alpha-D-glucopyranose, and walks it through four successive representations: the acyclic Fischer form, a cyclic Fischer projection, the Haworth projection, and a stereo-projection in the chair conformation. Recognising that these are one compound is the point of the figure.",
      why_cn: "(a)部分取一个分子——α-D-吡喃葡萄糖——依次用四种表示法呈现：无环费歇尔式、环状费歇尔投影式、哈沃斯投影式，以及椅式构象的立体投影。认识到这四幅画的是同一个化合物，正是该图的用意所在。"
    },
    {
      type: "mcq",
      q_en: "Which of the representations in Obr. 7.5 appears only as a figure label and is never named or explained in the running text of this page range?",
      q_cn: "图7.5中哪一种表示法只作为图注标签出现，而在本页范围的正文中从未被命名或解释？",
      options: [
        "The Haworth projection",
        "The acyclic Fischer formula",
        "The stereo-projection in the chair conformation",
        "The Haworth drawing of the beta-pyranose anomer"
      ],
      answer: 2,
      optionRefs: { 0: "7-1-3-1", 1: "7-1-1", 3: "7-1-4" },
      optionNotes: {
        0: { en: "The Haworth formula is introduced and explained in the running text, including the rule for converting substituent positions from the acyclic formula.", cn: "哈沃斯式在正文中有介绍和解释，还包括由无环式转换取代基位置的规则。" },
        1: { en: "The acyclic/Fischer formula is used throughout the earlier sections, from the D-/L- definition onward.", cn: "无环式/费歇尔式在前面几节中一直在用，从D-/L-的定义开始就是。" },
        3: { en: "The beta-pyranose anomer is discussed at length in the running text — it is one of the two anomers whose rotations mutarotation measures.", cn: "β-吡喃糖异头物在正文中有大量讨论——它正是变旋所测两种异头物旋光度中的一个。" }
      },
      why_en: "The node flags the chair conformation as a genuinely new representation type: it is not named or explained anywhere in the running text within this page range, appearing only as a figure-caption label in Obr. 7.5(a).",
      why_cn: "本节点特别标出椅式构象是一种真正新出现的表示类型：在本页范围的正文中任何地方都没有命名或解释过它，它只在图7.5(a)的图注中作为标签出现。"
    }
  ],

  "7-1-4": [
    {
      type: "mcq",
      q_en: "By what route do alpha-D-glucose and beta-D-glucose interconvert in solution?",
      q_cn: "在溶液中，α-D-葡萄糖与β-D-葡萄糖是通过什么途径相互转化的？",
      options: [
        "Through the acyclic (open-chain) form as an intermediate",
        "Directly, by rotating the bond at C-1 while the ring stays closed",
        "Through the furanose forms of D-glucose",
        "Through a glycoside intermediate"
      ],
      answer: 0,
      optionRefs: { 2: "7-1-3-2", 3: "7-2-6" },
      optionNotes: {
        1: { en: "This is the common mental picture and it is wrong: the configuration at the anomeric carbon cannot change while the ring is intact, which is exactly why the open chain has to be passed through.", cn: "这是常见的直觉画面，但它是错的：环完整时异头碳上的构型无法改变，正因如此才必须经过开链形式。" },
        2: { en: "Obr. 7.5(b) does draw alpha- and beta-D-glucofuranose, but the mutarotation discussion speaks only of the alpha/beta-pyranose equilibrium plus a very small acyclic fraction.", cn: "图7.5(b)确实画了α-和β-D-呋喃葡萄糖，但变旋的讨论只涉及α/β-吡喃糖平衡加上极少量的无环形式。" },
        3: { en: "Forming a glycoside replaces the hemiacetal hydroxyl and locks the ring shut, so it PREVENTS mutarotation rather than mediating it.", cn: "形成糖苷会把半缩醛羟基取代掉、把环锁死，所以它是阻止变旋，而不是介导变旋。" }
      },
      why_en: "The book states that the anomeric forms of D-glucose readily interconvert in solution via the acyclic form. The equilibrium mixture that results contains only a very small amount of that acyclic form, but it is the obligatory route between the two anomers.",
      why_cn: "教材指出，D-葡萄糖的异头物形式在溶液中容易通过无环形式相互转化。最终形成的平衡混合物中只含极少量的无环形式，但它正是两种异头物之间的必经通道。"
    },
    {
      type: "mcq",
      q_en: "Two solutions are made up, one from pure crystalline alpha-D-glucose and one from pure crystalline beta-D-glucose. What specific rotation does each read once it has stopped changing?",
      q_cn: "分别用纯的α-D-葡萄糖结晶和纯的β-D-葡萄糖结晶配成两份溶液。当读数不再变化时，两者的比旋光度各是多少？",
      options: [
        "+112 degrees and +18.4 degrees respectively — each keeps the value of the anomer it was made from",
        "Both read +52.7 degrees",
        "Both read 0 degrees, because the two anomers cancel each other out",
        "Both read +65.2 degrees, the arithmetic mean of the two anomer values"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Those are the two STARTING values of the pure anomers; they do not persist, because each anomer equilibrates with the other through the open chain.", cn: "这是两种纯异头物的起始数值；它们不会保持不变，因为每一种异头物都会经开链形式与另一种建立平衡。" },
        2: { en: "Mutarotation does not abolish optical activity — the equilibrium mixture still rotates plane-polarized light, and does so by a definite amount.", cn: "变旋并不会消除旋光性——平衡混合物仍然使平面偏振光旋转，而且旋转一个确定的量。" },
        3: { en: "The book gives the equilibrium value as a measured constant, +52.7 degrees, and does not give the proportions of the two anomers, so no average can be computed from the two rotations.", cn: "教材把平衡值作为实测常数给出，即+52.7度，并未给出两种异头物的比例，因此无法由两个旋光度算出平均值。" }
      },
      why_en: "The book states that dissolving crystalline samples of EITHER pure anomer causes the specific rotation to change over time until it reaches, in BOTH cases, the same equilibrium value of +52.7 degrees. That value is the rotation of the equilibrium alpha/beta mixture, which contains only a very small amount of the acyclic form.",
      why_cn: "教材指出，把任一纯异头物的结晶样品溶解，比旋光度都会随时间变化，最终在两种情况下都达到相同的平衡值+52.7度。这个数值是α/β平衡混合物的旋光度，该混合物中只含极少量的无环形式。"
    },
    {
      type: "short",
      q_en: "Why does the interconversion of two anomers show up as a change in optical rotation at all? Say what the book claims about how alpha and beta differ.",
      q_cn: "为什么两种异头物之间的相互转化会表现为旋光度的变化？请说明教材关于α与β差异的说法。",
      accept: ["physical constants", "optical rotation", "differ", "物理常数", "旋光", "不同"],
      answer_en: "Because the alpha and beta forms differ in their physical constants, above all in their optical rotation. Any process that changes the proportion of the two forms therefore changes the rotation of the whole solution, which is what makes mutarotation observable on a polarimeter at all.",
      answer_cn: "因为α和β形式在物理常数上本来就有差别，尤其是旋光度不同。因此任何改变两种形式比例的过程，都会改变整个溶液的旋光度，这正是变旋能够在旋光仪上被观察到的原因。"
    }
  ],

  "7-2-1": [
    {
      type: "mcq",
      q_en: "PRPP appears in this section as an example of what?",
      q_cn: "PRPP在本节中是作为什么的例子出现的？",
      options: [
        "A sulfate ester of the kind found in heteroglycans",
        "A phosphate ester of a sugar acting as a reactive intermediate for forming O- and N-glycosidic bonds, important in nucleotide synthesis",
        "A storage form in which glucose is deposited in the cell",
        "The product of oxidizing a sugar's terminal primary alcohol group"
      ],
      answer: 1,
      optionRefs: { 0: "7-4-2", 2: "7-4-1-1", 3: "7-2-2" },
      optionNotes: {
        0: { en: "Sulfate esters are the OTHER ester type this section names, the one found in heparin and chondroitin sulfate — not a phosphorylated intermediate.", cn: "硫酸酯是本节提到的另一类酯，见于肝素和硫酸软骨素——不是磷酸化的中间体。" },
        2: { en: "Storage of glucose is what the storage polysaccharides do; a phosphate ester is a reactive form, not a deposit.", cn: "储存葡萄糖是储存多糖的工作；磷酸酯是一种活性形式，不是储备物。" },
        3: { en: "Oxidizing the terminal primary alcohol gives a uronic acid, which belongs to the sugar-acid section, not to the esters.", cn: "氧化末端伯醇基得到的是糖醛酸，属于糖酸那一节的内容，不属于糖酯。" }
      },
      why_en: "The book gives 5-phosphoribosyl-1-bisphosphate (PRPP) as its concrete example of the second role of sugar phosphate esters: besides being the form in which sugars are metabolized almost exclusively, phosphate esters are a reactive intermediate for forming O- and N-glycosidic bonds, and PRPP plays an important role in nucleotide synthesis.",
      why_cn: "教材以5-磷酸核糖-1-焦（双）磷酸（PRPP）作为糖磷酸酯第二种功能的具体例子：磷酸酯除了是糖几乎唯一的代谢形式外，还是形成O-和N-糖苷键的反应性中间体，而PRPP在核苷酸合成中起重要作用。"
    },
    {
      type: "mcq",
      q_en: "In heparin and chondroitin sulfate, which acid esterifies the sugar hydroxyl groups?",
      q_cn: "在肝素和硫酸软骨素中，是哪种酸把糖的羟基酯化的？",
      options: [
        "Sulfuric acid",
        "Phosphoric acid, the same acid that makes the metabolized form of sugars",
        "Acetic acid, giving the N-acetyl amino sugars",
        "D-glucuronic acid, giving the glucuronosides"
      ],
      answer: 0,
      optionRefs: { 2: "7-2-4", 3: "7-2-6" },
      optionNotes: {
        1: { en: "Phosphate esters are the biochemically dominant ester type overall, but in these two heteroglycans the book names sulfuric acid specifically.", cn: "总体上磷酸酯是生化上最重要的酯类，但在这两种杂聚糖中教材点名的是硫酸。" },
        2: { en: "Acetylation happens on the AMINO group of an amino sugar and gives an amide, not an ester on a hydroxyl.", cn: "乙酰化发生在氨基糖的氨基上，生成的是酰胺，而不是羟基上的酯。" },
        3: { en: "Glucuronosides are O-glycosides of D-glucuronic acid formed in detoxification — a glycosidic bond, not an ester bond.", cn: "葡萄糖醛酸苷是D-葡萄糖醛酸的O-糖苷，是解毒过程的产物——那是糖苷键，不是酯键。" }
      },
      why_en: "The book says that in polysaccharide molecules (heteroglycans) a different ester type occurs, arising from esterification of a sugar's hydroxyl group with SULFURIC acid, and names heparin and chondroitin sulfate as its two examples.",
      why_cn: "教材指出，在多糖分子（杂聚糖）中存在另一种酯，由糖的羟基与硫酸酯化而成，并举出肝素和硫酸软骨素两个例子。"
    },
    {
      type: "short",
      q_en: "In which chemical form does the book say sugars are metabolized almost exclusively, and what general effect does esterification with a polybasic acid have on the sugar molecule?",
      q_cn: "教材说糖几乎完全以哪种化学形式被代谢？用多元酸酯化对糖分子有什么普遍性的影响？",
      accept: ["phosphate", "ester", "ion", "electroneutral", "磷酸酯", "离子", "电中性"],
      answer_en: "Sugars are metabolized almost exclusively in the form of phosphate esters. Forming an ester bond with a polybasic acid converts the electroneutral sugar molecule into an ion, which affects how it behaves in the cellular environment.",
      answer_cn: "糖几乎完全以磷酸酯的形式被代谢。与多元酸形成酯键会把原本电中性的糖分子变成离子，从而影响它在细胞环境中的行为。"
    }
  ],

  "7-2-2": [
    {
      type: "mcq",
      q_en: "When the cyclic form of an aldose is oxidized, what forms first, and how is the free acid obtained from it?",
      q_cn: "醛糖的环状形式被氧化时，首先生成什么？游离酸又是怎样从中得到的？",
      options: [
        "The free aldonic acid forms directly; no further step is needed",
        "The lactone of the aldonic acid forms first, and the free acid is released from it by hydrolysis",
        "A uronic acid forms first, and is then reduced",
        "An alditol forms first, and is then oxidized"
      ],
      answer: 1,
      optionRefs: { 2: "7-2-2", 3: "7-2-3" },
      optionNotes: {
        0: { en: "This drops the intermediate the book is explicit about: cyclic aldoses oxidize to the LACTONE, and the free acid appears only after hydrolysis.", cn: "这漏掉了教材明确提到的中间体：环状醛糖氧化生成内酯，游离酸要经水解之后才出现。" },
        2: { en: "Uronic acids come from oxidizing the OTHER end of the molecule, the terminal primary alcohol group, and they are not an intermediate on the way to an aldonic acid.", cn: "糖醛酸来自氧化分子的另一端，即末端伯醇基，它并不是通向醛糖酸的中间体。" },
        3: { en: "An alditol is the REDUCTION product of the carbonyl group, i.e. the opposite direction entirely.", cn: "糖醇是羰基被还原的产物，方向完全相反。" }
      },
      why_en: "The book states that oxidation of an aldose's carbonyl group gives polyhydroxy acids called aldonic acids, and that the cyclic forms of aldoses are oxidized directly to the LACTONES of those acids, from which the free acids are released by hydrolysis.",
      why_cn: "教材指出，醛糖羰基被氧化生成称为醛糖酸的多羟基酸，而醛糖的环状形式则直接被氧化为这些酸的内酯，游离酸再经水解从内酯中释放出来。"
    },
    {
      type: "mcq",
      q_en: "Ascorbic acid is chemically the lactone of which acid, and what does it become on loss of hydrogen?",
      q_cn: "从化学上说，抗坏血酸是哪种酸的内酯？它失去氢后变成什么？",
      options: [
        "The lactone of 2-oxo-L-gulonic acid; on loss of hydrogen it becomes dehydroascorbic acid",
        "The lactone of D-glucuronic acid; on loss of hydrogen it becomes a glucuronoside",
        "The lactone of an aldonic acid of D-glucose; on loss of hydrogen it becomes D-glucitol",
        "Not a lactone at all — it is only an enediol"
      ],
      answer: 0,
      optionRefs: { 1: "7-2-6", 2: "7-2-3" },
      optionNotes: {
        1: { en: "Glucuronosides are O-glycosides of D-glucuronic acid produced when mammals detoxify foreign substances — a glycoside, and not a redox product at all.", cn: "葡萄糖醛酸苷是哺乳动物解毒异物时生成的D-葡萄糖醛酸O-糖苷——它是糖苷，而且根本不是氧化还原产物。" },
        2: { en: "D-glucitol (sorbitol) is what you get by REDUCING D-glucose; the direction is reversed here, and it is an alditol, not an acid.", cn: "D-葡萄糖醇（山梨醇）是还原D-葡萄糖得到的；这里方向反了，而且它是糖醇，不是酸。" },
        3: { en: "The two descriptions are not alternatives: ascorbic acid IS the lactone of 2-oxo-L-gulonic acid, and it also CONTAINS an enediol grouping, which is what makes it reduce.", cn: "这两种描述并不是互斥的：抗坏血酸就是2-氧代-L-古洛糖酸的内酯，同时它还含有一个烯二醇基团，正是后者使它具有还原性。" }
      },
      why_en: "The book identifies ascorbic acid chemically as the lactone of 2-oxo-L-gulonic acid (Obr. 7.6), and states that loss of hydrogen converts it into dehydroascorbic acid — the two structures the figure shows side by side.",
      why_cn: "教材从化学上把抗坏血酸认定为2-氧代-L-古洛糖酸的内酯（图7.6），并指出失去氢后它转变为脱氢抗坏血酸——正是图中并列展示的这两种结构。"
    },
    {
      type: "short",
      q_en: "Trace what the book says about vitamin C as a sugar acid: what acid it is the lactone of, what structural grouping makes it reduce, and what it becomes when that grouping is oxidized.",
      q_cn: "梳理教材关于维生素C作为糖酸的说法：它是哪种酸的内酯？哪一个结构基团使它具有还原性？该基团被氧化后它变成什么？",
      accept: ["gulonic", "lactone", "enediol", "dehydroascorbic", "古洛糖酸", "内酯", "烯二醇", "脱氢抗坏血酸"],
      answer_en: "Ascorbic acid is the lactone of 2-oxo-L-gulonic acid. It contains an enediol grouping — two hydroxyl groups sitting on one double bond — and, like all enediols, that makes it act as a strong reducing agent. Loss of hydrogen from it gives dehydroascorbic acid.",
      answer_cn: "抗坏血酸是2-氧代-L-古洛糖酸的内酯。它含有一个烯二醇基团——同一双键上的两个羟基——像所有烯二醇一样，这使它成为强还原剂。失去氢后即生成脱氢抗坏血酸。"
    }
  ],

  "7-2-3": [
    {
      type: "mcq",
      q_en: "Reduction of a monosaccharide's carbonyl group gives an alditol. What does the alditol therefore no longer have?",
      q_cn: "单糖的羰基被还原生成糖醇。因此糖醇不再具有什么？",
      options: [
        "Its asymmetric carbons — an alditol is optically inactive",
        "The ring oxygen only, while keeping the alpha and beta anomers",
        "An anomeric centre — so it has no reducing end and no anomers",
        "Its hydroxyl groups, so it can no longer be esterified"
      ],
      answer: 2,
      optionRefs: { 0: "7-1-2-2", 1: "7-1-3-1", 3: "7-2-1" },
      optionNotes: {
        0: { en: "Reduction removes the carbonyl, not the other stereocentres. Optical inactivity from having no asymmetric carbon at all is dihydroxyacetone's situation.", cn: "还原去掉的是羰基，不是其他手性中心。完全没有不对称碳因而没有旋光，那是二羟丙酮的情形。" },
        1: { en: "The alpha/beta anomers exist only because ring closure makes the former carbonyl carbon asymmetric; with the carbonyl reduced away there is no anomeric carbon left to be alpha or beta.", cn: "α/β异头物之所以存在，是因为闭环使原来的羰基碳变成不对称碳；羰基被还原掉之后，就没有可分α、β的异头碳了。" },
        3: { en: "Reduction of the carbonyl ADDS a hydroxyl rather than removing any, and hydroxyls are exactly what esterification acts on.", cn: "羰基被还原是多出一个羟基，而不是减少羟基，而羟基正是酯化反应作用的位置。" }
      },
      why_en: "Reducing the carbonyl destroys the anomeric centre, so an alditol has no reducing end and no anomers. That is also why several different sugars — the book lists D-glucose, D-fructose and L-sorbose among them — can reduce to the very same alditol.",
      why_cn: "把羰基还原掉就毁掉了异头中心，所以糖醇没有还原端，也没有异头物。这同时解释了为什么几种不同的糖——教材列出的就有D-葡萄糖、D-果糖和L-山梨糖——可以还原成同一个糖醇。"
    },
    {
      type: "mcq",
      q_en: "Inositol is structurally unlike the other sugar alcohols the book names. How, and where does it occur?",
      q_cn: "肌醇在结构上与教材提到的其他糖醇不同。不同在哪里？它存在于何处？",
      options: [
        "It is a cyclohexane derivative rather than a straight-chain alditol; it occurs in phospholipids and as phytic acid",
        "It is a six-membered ring containing a ring oxygen, i.e. a pyranose form of a hexose",
        "It is a cyclic phosphate ester of D-glucose",
        "It is a glycoside of glycerol"
      ],
      answer: 0,
      optionRefs: { 1: "7-1-3-1", 2: "7-2-1", 3: "7-2-6" },
      optionNotes: {
        1: { en: "A pyranose ring contains the ring oxygen contributed by the C-5 hydroxyl; inositol's ring is all carbon, which is exactly what makes it a cyclohexane derivative.", cn: "吡喃环中含有由C-5羟基提供的环氧原子；而肌醇的环全部由碳组成，这正是它属于环己烷衍生物的原因。" },
        2: { en: "Phytic acid is a phosphate ester, but it is the hexaphosphate ester of inositol itself — inositol is the parent, and glucose is not involved.", cn: "植酸确实是磷酸酯，但它是肌醇自身的六磷酸酯——母体是肌醇，与葡萄糖无关。" },
        3: { en: "Glycerol is separately named as one of the natural sugar alcohols; nothing in this section makes inositol a glycoside of it.", cn: "甘油在本节中是单独列出的一种天然糖醇；本节没有任何内容说肌醇是甘油的糖苷。" }
      },
      why_en: "The book states that inositol is actually a cyclohexane derivative, and that it occurs not only as a component of phospholipids but also as phytic acid, the hexaphosphate ester of inositol.",
      why_cn: "教材指出，肌醇实际上是环己烷的衍生物，它不仅作为磷脂的组分存在，还以植酸（肌醇的六磷酸酯）的形式存在。"
    },
    {
      type: "short",
      q_en: "Which alditol does the book obtain from D-mannose, and which three further sugar alcohols does it say occur in nature?",
      q_cn: "教材由D-甘露糖得到哪种糖醇？它说自然界中还存在哪三种糖醇？",
      accept: ["mannitol", "ribitol", "glycerol", "inositol", "甘露糖醇", "核糖醇", "甘油", "肌醇"],
      answer_en: "Reducing D-mannose gives D-mannitol. The three further sugar alcohols the book names as occurring in nature are ribitol, glycerol and inositol.",
      answer_cn: "还原D-甘露糖得到D-甘露糖醇。教材另外列出的三种天然存在的糖醇是核糖醇、甘油和肌醇。"
    }
  ],

  "7-2-4": [
    {
      type: "mcq",
      q_en: "Formally, an amino sugar arises from a sugar by which substitution?",
      q_cn: "从形式上说，氨基糖是通过哪一种取代由糖衍生而来的？",
      options: [
        "A hydroxyl group is replaced by an amino group",
        "A hydroxyl group is replaced by hydrogen",
        "The hemiacetal hydroxyl is replaced by an alkoxy group",
        "A hydroxyl group is esterified with phosphoric acid"
      ],
      answer: 0,
      optionRefs: { 1: "7-2-5", 2: "7-2-6", 3: "7-2-1" },
      optionNotes: {
        1: { en: "Replacing a hydroxyl by hydrogen gives a DEOXY sugar, the very next section: 2-deoxy-D-ribose, L-fucose, L-rhamnose.", cn: "把羟基换成氢得到的是脱氧糖，正是紧接着的下一节：2-脱氧-D-核糖、L-岩藻糖、L-鼠李糖。" },
        2: { en: "Replacing the hemiacetal hydroxyl by an alkoxy group gives a GLYCOSIDE, and it locks the ring shut in the process.", cn: "把半缩醛羟基换成烷氧基得到的是糖苷，而且这一步会把环锁死。" },
        3: { en: "Esterifying a hydroxyl with phosphoric acid gives a sugar phosphate ester — the form in which sugars are metabolized, not an amino sugar.", cn: "把羟基用磷酸酯化得到的是糖磷酸酯——那是糖被代谢时的形式，不是氨基糖。" }
      },
      why_en: "The book defines amino sugars as formed, formally, by replacing a sugar's hydroxyl group with an amino group — which is why D-glucosamine can be written out as 2-deoxy-2-amino-D-glucose. That amino group is then very often acylated, especially with acetyl.",
      why_cn: "教材把氨基糖定义为形式上由糖的羟基被氨基取代而形成——这也是为什么D-葡萄糖胺可以写成2-脱氧-2-氨基-D-葡萄糖。这个氨基随后常常被酰化，尤其是乙酰化。"
    },
    {
      type: "mcq",
      q_en: "Where do the biologically important derivatives of neuraminic acid occur, per the book?",
      q_cn: "根据教材，神经氨酸具有生物学意义的衍生物存在于何处？",
      options: [
        "In chitin and the insect exoskeleton",
        "In membrane glycolipids, blood-group substances, and many other glycoproteins",
        "In DNA and RNA, as the pentose of the backbone",
        "In connective-tissue ground substance, as chondroitin sulfate"
      ],
      answer: 1,
      optionRefs: { 0: "7-4-1-2", 2: "4-1-2", 3: "7-4-2" },
      optionNotes: {
        0: { en: "Chitin and the insect exoskeleton are built from N-acetyl-D-glucosamine, a different amino sugar in this same list.", cn: "几丁质和昆虫外骨骼由N-乙酰-D-葡萄糖胺构成，那是本节名单中的另一种氨基糖。" },
        2: { en: "The nucleic-acid backbone carries pentoses, D-ribose and 2-deoxy-D-ribose — no amino sugar is involved there.", cn: "核酸骨架上带的是戊糖，即D-核糖和2-脱氧-D-核糖——那里不涉及任何氨基糖。" },
        3: { en: "Chondroitin sulfate is a glycosaminoglycan built from D-glucuronic acid and N-acetyl-D-galactosamine, again a different amino sugar.", cn: "硫酸软骨素是由D-葡萄糖醛酸和N-乙酰-D-半乳糖胺构成的糖胺聚糖，同样是另一种氨基糖。" }
      },
      why_en: "The book states that neuraminic acid does not occur in free form, and that its N-acetyl or N-glycolyl derivatives are very important components of membrane glycolipids, of blood-group substances, and of many other glycoproteins.",
      why_cn: "教材指出，神经氨酸不以游离形式存在，其N-乙酰基或N-羟乙酰基衍生物是膜糖脂、血型物质以及许多其他糖蛋白的重要组分。"
    },
    {
      type: "short",
      q_en: "Which of the three named amino sugars never occurs free, what condensation does its structure formally correspond to, and which two N-acyl derivatives of it does the book name?",
      q_cn: "三种点名的氨基糖中，哪一种从不以游离形式存在？它的结构在形式上对应于什么缩合反应？教材提到它的哪两种N-酰基衍生物？",
      accept: ["neuraminic", "pyruvic", "mannosamine", "aldol", "N-acetyl", "N-glycolyl", "神经氨酸", "丙酮酸", "甘露糖胺", "羟醛", "乙酰", "羟乙酰"],
      answer_en: "Neuraminic acid. Its structure formally corresponds to the product of an aldol condensation of pyruvic acid with D-mannosamine, and the book names its N-acetyl and N-glycolyl derivatives as the biologically important forms.",
      answer_cn: "神经氨酸。它的结构在形式上对应于丙酮酸与D-甘露糖胺的羟醛缩合产物；教材指出具有生物学意义的是它的N-乙酰基和N-羟乙酰基衍生物。"
    }
  ],

  "7-2-5": [
    {
      type: "mcq",
      q_en: "A deoxy sugar differs from its parent sugar in what way, and which of these compounds is one?",
      q_cn: "脱氧糖与其母体糖的差别在哪里？下列哪一种化合物属于脱氧糖？",
      options: [
        "A hydroxyl group is replaced by hydrogen — 2-deoxy-D-ribose",
        "A hydroxyl group is replaced by an amino group — D-glucosamine",
        "The carbonyl group is reduced to an alcohol — D-glucitol",
        "The terminal primary alcohol is oxidized — a uronic acid"
      ],
      answer: 0,
      optionRefs: { 1: "7-2-4", 2: "7-2-3", 3: "7-2-2" },
      optionNotes: {
        1: { en: "That substitution defines an AMINO sugar; D-glucosamine is 2-deoxy-2-amino-D-glucose, so it is amino-substituted as well as deoxy.", cn: "这种取代定义的是氨基糖；D-葡萄糖胺是2-脱氧-2-氨基-D-葡萄糖，它既是脱氧的，也是氨基取代的。" },
        2: { en: "Reduction of the carbonyl gives a sugar alcohol (alditol), which adds a hydroxyl rather than removing one.", cn: "羰基被还原生成糖醇，那是多出一个羟基，而不是少一个。" },
        3: { en: "Oxidation of the terminal primary alcohol gives a uronic acid, one of the two sugar-acid classes.", cn: "末端伯醇基被氧化生成糖醛酸，是两类糖酸之一。" }
      },
      why_en: "A deoxy sugar is one in which a hydroxyl group has been replaced by hydrogen, and the book's biochemically most important example is 2-deoxy-D-ribose, a component of DNA. The other three options each name a different derivative class from the surrounding sections.",
      why_cn: "脱氧糖是指其中一个羟基被氢取代的糖，教材举出生物化学上最重要的例子是2-脱氧-D-核糖，DNA的组分。其余三个选项各自对应周边小节中的另一类衍生物。"
    },
    {
      type: "mcq",
      q_en: "The two 6-deoxyhexoses named here are derived from parent sugars of which stereochemical series?",
      q_cn: "本节点名的两种6-脱氧己糖，其母体糖属于哪个立体化学系列？",
      options: [
        "Both from the L-series: L-galactose and L-mannose",
        "Both from the D-series: D-galactose and D-mannose",
        "One from each series: D-galactose and L-mannose",
        "Both from D-glucose"
      ],
      answer: 0,
      optionRefs: { 1: "7-1-2-1", 2: "7-1-2-1", 3: "7-1-2-1" },
      optionNotes: {
        1: { en: "D-galactose and D-mannose are the common aldohexoses of the D-branch of the aldose tree; the book writes both 6-deoxyhexoses here explicitly as L- forms.", cn: "D-半乳糖和D-甘露糖是醛糖系谱D系分支中常见的醛己糖；而教材在此处把两种6-脱氧己糖都明确写成L型。" },
        2: { en: "Only half right: L-rhamnose is indeed 6-deoxy-L-mannose, but L-fucose is 6-deoxy-L-GALACTOSE, not the D-form.", cn: "只对了一半：L-鼠李糖确实是6-脱氧-L-甘露糖，但L-岩藻糖是6-脱氧-L-半乳糖，不是D型。" },
        3: { en: "D-glucose is the most important aldohexose but is not the parent of either of these two; galactose and mannose are its C-4 and C-2 epimers.", cn: "D-葡萄糖是最重要的醛己糖，但不是这两者中任何一个的母体；半乳糖和甘露糖分别是它的C-4和C-2差向异构体。" }
      },
      why_en: "The book names L-fucose as 6-deoxy-L-galactose and L-rhamnose as 6-deoxy-L-mannose. Both are written in the L-series, which is worth noticing because the aldohexoses met earlier in the chapter were all drawn from the D-branch of the family tree.",
      why_cn: "教材把L-岩藻糖写作6-脱氧-L-半乳糖，把L-鼠李糖写作6-脱氧-L-甘露糖，两者都属于L系。这一点值得留意，因为本章前面见到的醛己糖都取自系谱的D系分支。"
    }
  ],

  "7-2-6": [
    {
      type: "mcq",
      q_en: "What exactly is replaced when a glycoside forms, and what does that do to the sugar ring?",
      q_cn: "形成糖苷时，被取代的究竟是什么？这对糖环有什么影响？",
      options: [
        "Any one of the sugar's hydroxyls is esterified with an acid, leaving the ring free to open",
        "The hemiacetal (anomeric) hydroxyl is replaced by an alkoxy group, which locks the ring shut",
        "A hydroxyl is replaced by an amino group, which is then usually acetylated",
        "The carbonyl group is reduced, so no ring can form at all"
      ],
      answer: 1,
      optionRefs: { 0: "7-2-1", 2: "7-2-4", 3: "7-2-3" },
      optionNotes: {
        0: { en: "That describes a sugar ester. Esterification acts on ordinary hydroxyls and does not touch the anomeric centre, so it does not lock the ring.", cn: "这描述的是糖酯。酯化作用于普通羟基，不涉及异头中心，因此不会把环锁死。" },
        2: { en: "That gives an amino sugar such as D-glucosamine, whose N-acetyl derivative builds chitin — a substitution at an ordinary position, not at the anomeric carbon.", cn: "这得到的是D-葡萄糖胺这样的氨基糖，其N-乙酰衍生物构成几丁质——取代发生在普通位置，不在异头碳上。" },
        3: { en: "Reduction gives an alditol; it is true that no ring remains, but by destroying the carbonyl, not by substituting the anomeric hydroxyl.", cn: "还原得到糖醇；确实不再有环，但那是因为羰基被毁掉，而不是异头羟基被取代。" }
      },
      why_en: "A glycoside is formed by replacing the sugar's hemiacetal hydroxyl with an alkoxy group. Because that hydroxyl is the one the ring needs in order to reopen, a glycoside neither mutarotates nor reduces — the book's worked example, methyl-D-glucoside, is an acetal rather than a hemiacetal.",
      why_cn: "糖苷是把糖的半缩醛羟基换成烷氧基而形成的。由于正是这个羟基使环得以重新打开，糖苷既不变旋也没有还原性——教材的实例甲基-D-葡萄糖苷是缩醛，而不是半缩醛。"
    },
    {
      type: "mcq",
      q_en: "Heating D-glucose in methanol containing HCl gives two products. What are they, and why two?",
      q_cn: "把D-葡萄糖在含HCl的甲醇中加热会得到两种产物。它们是什么？为什么是两种？",
      options: [
        "Methyl-alpha-D-glucoside and methyl-beta-D-glucoside — the two configurations at the anomeric carbon",
        "Only one product, methyl-alpha-D-glucoside, since the alpha form is the stable one",
        "A sugar ester and a free acid, since HCl esterifies the sugar",
        "An N-glycoside and an O-glycoside, since HCl supplies a nitrogen atom"
      ],
      answer: 0,
      optionRefs: { 2: "7-2-1" },
      optionNotes: {
        1: { en: "The book shows both anomers in Obr. 7.7; the anomeric carbon can take either configuration when the alkoxy group replaces its hydroxyl.", cn: "教材在图7.7中同时画出了两种异头物；烷氧基取代异头羟基时，异头碳可以取任一种构型。" },
        2: { en: "Esterification is a different reaction entirely, and would need an acid such as phosphoric or sulfuric to esterify a hydroxyl; HCl here is a catalyst, and the products are acetals.", cn: "酯化是完全不同的反应，而且需要磷酸或硫酸这类酸来酯化羟基；此处HCl只是催化剂，产物是缩醛。" },
        3: { en: "An N-glycosidic bond forms to the nitrogen of an AMINE; the book's N-glycoside examples are RNA and DNA, and hydrochloric acid supplies no such nitrogen.", cn: "N-糖苷键是与胺的氮原子形成的；教材举的N-糖苷例子是RNA和DNA，而盐酸并不提供这样的氮。" }
      },
      why_en: "The book's worked example forms two acetals, methyl-alpha-D-glucoside and methyl-beta-D-glucoside, shown as the two anomeric forms in Obr. 7.7 — the alkoxy group can occupy either of the two positions available at the anomeric carbon.",
      why_cn: "教材的实例生成两种缩醛：甲基-α-D-葡萄糖苷和甲基-β-D-葡萄糖苷，即图7.7中所示的两种异头体形式——烷氧基可以占据异头碳上两个可能位置中的任何一个。"
    },
    {
      type: "mcq",
      q_en: "Which of these does the book give as its example of an N-glycoside?",
      q_cn: "教材举出下列哪一项作为N-糖苷的例子？",
      options: [
        "Sucrose",
        "The glucuronosides of mammalian organs",
        "RNA and DNA",
        "Chitin"
      ],
      answer: 2,
      optionRefs: { 0: "7-3-1", 3: "7-4-1-2" },
      optionNotes: {
        0: { en: "Sucrose is a disaccharide, i.e. two sugars joined through an O-glycosidic bond — and specifically one that uses up both hemiacetal hydroxyls.", cn: "蔗糖是二糖，即两个糖通过O-糖苷键相连——而且是把两个半缩醛羟基都用掉的那种。" },
        1: { en: "Glucuronosides are the book's example of an O-glycoside, the main O-glycoside form in mammalian organs, produced when foreign substances are detoxified.", cn: "葡萄糖醛酸苷是教材举的O-糖苷例子，是哺乳动物器官中O-糖苷的主要形式，在异物解毒时生成。" },
        3: { en: "Chitin does contain nitrogen, but in the acetylated amino group of its N-acetyl-D-glucosamine units; the units themselves are joined by beta(1-4) bonds between sugars.", cn: "几丁质确实含氮，但氮在其N-乙酰-D-葡萄糖胺单位的乙酰氨基上；单位之间是靠糖与糖之间的β(1→4)键连接的。" }
      },
      why_en: "The book states that the anomeric carbon can equally bond to the nitrogen atom of an amine through an N-glycosidic bond, and that N-glycosides include the very important RNA and DNA, in which that bond has beta-configuration.",
      why_cn: "教材指出，异头碳同样可以通过N-糖苷键与胺的氮原子成键，而N-糖苷包括极为重要的RNA和DNA，其中该键为β构型。"
    },
    {
      type: "short",
      q_en: "The book says the glycoside concept generalizes beyond a simple alcohol like methanol. Generalizes to what, and what classes of molecule does that produce?",
      q_cn: "教材说糖苷这一概念可以从甲醇这类简单醇推广开去。推广到什么？由此产生哪些类别的分子？",
      accept: ["anomeric", "hydroxyl", "second monosaccharide", "disaccharide", "oligosaccharide", "polysaccharide", "异头", "羟基", "另一个单糖", "二糖", "寡糖", "多糖"],
      answer_en: "Instead of methanol's hydroxyl, the anomeric C-1 of one monosaccharide can be bonded by an O-glycosidic bond to a hydroxyl group of a second monosaccharide. Repeating that is precisely how disaccharides, oligosaccharides and polysaccharides arise.",
      answer_cn: "把甲醇的羟基换成另一个单糖的羟基：一个单糖的异头碳C-1可以通过O-糖苷键与第二个单糖的羟基相连。反复这样连接，正是二糖、寡糖和多糖产生的方式。"
    }
  ],

  "7-3-1": [
    {
      type: "mcq",
      q_en: "Trehalose and maltose are both built from two D-glucose units, yet only one of them is non-reducing. Which, and why?",
      q_cn: "海藻糖和麦芽糖都由两个D-葡萄糖单位构成，但只有一个是非还原性的。是哪一个？为什么？",
      options: [
        "Trehalose — its glycosidic bond uses up the hemiacetal hydroxyl of both glucose units",
        "Maltose — its alpha bond blocks the ring from opening",
        "Both are non-reducing, since both are alpha-glucosides",
        "Neither — a disaccharide built from two identical sugars is always reducing"
      ],
      answer: 0,
      optionRefs: { 1: "7-3-2", 2: "7-3-2", 3: "7-3-2" },
      optionNotes: {
        1: { en: "Maltose is the book's worked example of a REDUCING disaccharide: it keeps one free hemiacetal hydroxyl, so it mutarotates and can form glycosides.", cn: "麦芽糖是教材举的还原性二糖实例：它保留一个游离的半缩醛羟基，因而会变旋，也能形成糖苷。" },
        2: { en: "The alpha or beta configuration of the bond is not the criterion; what matters is whether a free hemiacetal hydroxyl survives the bond formation.", cn: "键是α还是β并不是判据；关键在于成键之后是否还留下一个游离的半缩醛羟基。" },
        3: { en: "Whether the two units are identical is irrelevant. Trehalose is two glucoses and non-reducing; lactose is two different sugars and reducing.", cn: "两个单位是否相同并不相关。海藻糖由两个葡萄糖构成却是非还原性的；乳糖由两种不同的糖构成却是还原性的。" }
      },
      why_en: "The book's criterion is which hydroxyls form the glycosidic bond. Trehalose is O-alpha-D-glucopyranosyl-alpha-D-glucopyranoside: both units contribute their hemiacetal hydroxyl, so none is left free, and the disaccharide neither mutarotates nor can form further glycosides.",
      why_cn: "教材的判据是糖苷键由哪些羟基构成。海藻糖是O-α-D-吡喃葡萄糖基-α-D-吡喃葡萄糖苷：两个单位都交出了自己的半缩醛羟基，因而一个都不剩，该二糖既不变旋，也不能再形成糖苷。"
    },
    {
      type: "mcq",
      q_en: "How does the book describe raffinose's relationship to sucrose, and to stachyose?",
      q_cn: "教材如何描述棉子糖与蔗糖、以及与水苏糖之间的关系？",
      options: [
        "It is a glucoside of lactose; stachyose carries one galactosyl residue fewer",
        "It is a galactoside of sucrose; stachyose carries one more O-alpha-D-galactosyl residue than raffinose",
        "It is another name for stachyose",
        "It is a fructoside of trehalose"
      ],
      answer: 1,
      optionRefs: { 0: "7-3-2" },
      optionNotes: {
        0: { en: "Both halves are wrong: lactose is a reducing disaccharide of galactose and glucose from the next subsection, and stachyose is the LARGER of the two, not the smaller.", cn: "两半都不对：乳糖是下一小节里由半乳糖和葡萄糖构成的还原性二糖，而水苏糖比棉子糖大，不是更小。" },
        2: { en: "They are two different, related compounds occurring together in plants — the extra galactosyl residue is exactly what separates them.", cn: "它们是两种不同但相关的化合物，在植物中常并存——多出的那个半乳糖基残基正是二者的区别所在。" },
        3: { en: "Trehalose is the non-reducing glucose-glucose disaccharide in the same list; it is not the scaffold raffinose is built on.", cn: "海藻糖是同一名单中由两个葡萄糖构成的非还原性二糖；棉子糖并不是建立在它之上的。" }
      },
      why_en: "Raffinose is 6-O-alpha-D-galactosyl-alpha-D-glucopyranosyl-beta-D-fructofuranoside, a trisaccharide the book says can be regarded as a galactoside of sucrose. It occurs widely in plants alongside stachyose, which contains one more O-alpha-D-galactosyl residue than raffinose does.",
      why_cn: "棉子糖是6-O-α-D-半乳糖基-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷，教材说这种三糖可视为蔗糖的半乳糖苷。它广泛存在于植物中，常与水苏糖并存，而水苏糖比棉子糖多一个O-α-D-半乳糖基残基。"
    },
    {
      type: "short",
      q_en: "How long may a chain be and still count as an oligosaccharide, what bond joins the units, and what is a longer chain called?",
      q_cn: "一条链最长到什么程度仍算寡糖？连接各单位的是什么键？更长的链叫什么？",
      accept: ["10", "ten", "O-glycosidic", "glycosidic", "polysaccharide", "多糖", "糖苷键"],
      answer_en: "Up to 10 monosaccharide residues, joined by O-glycosidic bonds. Chains longer than that are polysaccharides, which the book takes up in section 7.4.",
      answer_cn: "最多10个单糖残基，通过O-糖苷键连接。比这更长的链就是多糖，教材在7.4节展开。"
    }
  ],

  "7-3-2": [
    {
      type: "mcq",
      q_en: "Maltose and cellobiose are both two D-glucose units joined 1-4. What single thing differs between them, and what does that difference correspond to at the polymer level?",
      q_cn: "麦芽糖和纤维二糖都是两个D-葡萄糖单位以1→4方式相连。二者唯一的差别是什么？这个差别在聚合物层面对应什么？",
      options: [
        "The position of the bond, 1-4 against 1-6 — one comes from a straight chain, the other from a branch point",
        "The configuration of the glycosidic bond: alpha in maltose, the repeat of starch, against beta in cellobiose, the repeat of cellulose",
        "One of them contains galactose instead of glucose",
        "One of them is reducing and the other is not"
      ],
      answer: 1,
      optionRefs: { 0: "7-3-2", 2: "7-3-2", 3: "7-3-1" },
      optionNotes: {
        0: { en: "That is the maltose-against-isomaltose distinction: 4-O- against 6-O-alpha-D-glucopyranosyl-D-glucopyranose, main chain against branch point.", cn: "这是麦芽糖与异麦芽糖之间的区别：4-O-与6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖，主链与分支点之别。" },
        2: { en: "That is lactose, 4-O-beta-D-galactopyranosyl-D-glucopyranose — the only sugar in this list of four that is not two glucoses.", cn: "那是乳糖，即4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖——本节四个糖中唯一不是由两个葡萄糖构成的。" },
        3: { en: "All four disaccharides in this subsection are reducing; the reducing/non-reducing split runs between this list and the sucrose/trehalose/raffinose list.", cn: "本小节的四种二糖全部是还原性的；还原与非还原的分界线在本名单与蔗糖/海藻糖/棉子糖那份名单之间。" }
      },
      why_en: "Maltose is 4-O-alpha-D-glucopyranosyl-D-glucopyranose, the disaccharide arising from starch breakdown; cellobiose is 4-O-beta-D-glucopyranosyl-D-glucopyranose, the basic repeating component of cellulose. Same two sugars, same linkage position, different anomeric configuration — and a completely different polymer.",
      why_cn: "麦芽糖是4-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖，来自淀粉的分解；纤维二糖是4-O-β-D-吡喃葡萄糖基-D-吡喃葡萄糖，是纤维素的基本重复单位。同样两个糖、同样的连接位置，只是异头构型不同，聚合物却完全不同。"
    },
    {
      type: "mcq",
      q_en: "Which of the four reducing disaccharides in this subsection contains a sugar other than D-glucose, and which sugar is it?",
      q_cn: "本小节四种还原性二糖中，哪一种含有D-葡萄糖以外的糖？是哪种糖？",
      options: [
        "Cellobiose — it contains D-mannose",
        "Isomaltose — it contains D-fructose",
        "Lactose — it contains D-galactose",
        "Maltose — it contains D-galactose"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Cellobiose is two D-glucose units joined beta(1-4); it is cellulose's repeating disaccharide.", cn: "纤维二糖是两个D-葡萄糖单位以β(1→4)相连；它是纤维素的重复二糖单位。" },
        1: { en: "Isomaltose is also two D-glucose units, joined alpha(1-6); it comes from the branch points of starch.", cn: "异麦芽糖同样是两个D-葡萄糖单位，以α(1→6)相连；它来自淀粉的分支点。" },
        3: { en: "Maltose is two D-glucose units joined alpha(1-4), from starch breakdown; the galactose-containing disaccharide is lactose.", cn: "麦芽糖是两个D-葡萄糖单位以α(1→4)相连，来自淀粉分解；含半乳糖的二糖是乳糖。" }
      },
      why_en: "Lactose is 4-O-beta-D-galactopyranosyl-D-glucopyranose, the milk sugar and the most important sugar in the milk of all mammals. The other three in this list — cellobiose, maltose, isomaltose — are all built from two D-glucose units and differ only in bond position and configuration.",
      why_cn: "乳糖是4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖，即乳糖，是所有哺乳动物乳汁中最重要的糖。名单中的另外三个——纤维二糖、麦芽糖、异麦芽糖——都由两个D-葡萄糖单位构成，差别只在键的位置与构型。"
    },
    {
      type: "short",
      q_en: "Why does the book classify all four sugars in this subsection as reducing? Name the structural feature they share and the two properties that follow from it.",
      q_cn: "教材为什么把本小节这四种糖都归为还原性糖？说出它们共有的结构特征，以及由此带来的两项性质。",
      accept: ["free hemiacetal", "hemiacetal hydroxyl", "mutarotate", "mutarotation", "glycoside", "半缩醛", "变旋", "糖苷"],
      answer_en: "All four keep one free hemiacetal hydroxyl after the glycosidic bond has formed. Because that hydroxyl survives, each of them mutarotates and each can go on to form glycosides.",
      answer_cn: "这四种糖在形成糖苷键之后都保留了一个游离的半缩醛羟基。正因为这个羟基还在，它们都会发生变旋，也都还能进一步形成糖苷。"
    }
  ],

  "7-4": [
    {
      type: "mcq",
      q_en: "A polysaccharide built only of D-mannose units is called what, and which classification does that name belong to?",
      q_cn: "只由D-甘露糖单位构成的多糖叫什么？这个名称属于哪一种分类方式？",
      options: [
        "A mannan — a homoglycan, named directly after its single monosaccharide residue",
        "A heteroglycan, since mannose is a different sugar from glucose",
        "A glucan, the general name for all storage polysaccharides",
        "A glycosaminoglycan"
      ],
      answer: 0,
      optionRefs: { 3: "7-4-2" },
      optionNotes: {
        1: { en: "Homo against hetero is about how many KINDS of unit sit in one molecule, not about which kind: one type of unit means homoglycan, whichever sugar it is.", cn: "同多糖与杂多糖的区别在于一个分子里有多少种单位，而不在于是哪一种：只含一种单位就是同多糖，无论那是哪种糖。" },
        2: { en: "Glucans are the homoglycans built from D-GLUCOSE; the name follows the residue, and storage-versus-structural is a separate classification altogether.", cn: "葡聚糖是由D-葡萄糖构成的同多糖；名称随残基而定，而储存与结构则完全是另一套分类。" },
        3: { en: "Glycosaminoglycans are heteroglycans built from a uronic acid plus an acetylated amino sugar, an altogether different composition.", cn: "糖胺聚糖是由糖醛酸加乙酰化氨基糖构成的杂多糖，组成完全不同。" }
      },
      why_en: "The book says homoglycans contain only one type of monosaccharide unit and are often named directly after that residue: glucans from D-glucose, mannans from D-mannose. The structural homo/hetero split is independent of the functional storage/structural split.",
      why_cn: "教材指出，同多糖只含一种单糖单位，并常按该残基直接命名：由D-葡萄糖构成的叫葡聚糖，由D-甘露糖构成的叫甘露聚糖。结构上的同/杂之分与功能上的储存/结构之分互相独立。"
    },
    {
      type: "mcq",
      q_en: "Which three properties does the book say distinguish one glycan from another?",
      q_cn: "教材说，一种糖苷聚糖与另一种之间靠哪三项性质来区分？",
      options: [
        "Its function in the organism, which in turn fixes its chemical structure",
        "Whether it is hydrolysed by acid or by enzyme",
        "The identity of its monosaccharide residue, its chain length, and its degree of branching",
        "The configuration of its anomeric carbon alone"
      ],
      answer: 2,
      optionRefs: { 3: "7-1-3-1" },
      optionNotes: {
        0: { en: "Function (storage against structural) IS a classification the book gives, but explicitly a second and independent one, not the set of properties that tells two glycans apart chemically.", cn: "功能（储存与结构）确实是教材给出的一种分类，但它明确是第二套、独立的分类，而不是在化学上区分两种糖苷聚糖的那组性质。" },
        1: { en: "The book says complete hydrolysis by EITHER route yields the same monosaccharides or simple derivatives, so this cannot distinguish one glycan from another.", cn: "教材说无论用酸还是用酶完全水解，得到的都是同样的单糖或其简单衍生物，因此这一点无法区分不同的糖苷聚糖。" },
        3: { en: "The anomeric configuration matters enormously in individual cases, such as maltose against cellobiose, but it is not the three-item list this section gives.", cn: "异头构型在具体例子中（如麦芽糖与纤维二糖）极为关键，但它并不是本节给出的那三项清单。" }
      },
      why_en: "The book states that polysaccharides, also called glycans, differ from one another in the identity of their monosaccharide residue, in chain length, and in degree of branching. Those three are exactly the axes along which the following subsections then compare starch, glycogen, dextrans and cellulose.",
      why_cn: "教材指出，多糖（也称糖苷聚糖）之间在单糖残基的种类、链长和分支程度上有所不同。接下来的各小节比较淀粉、糖原、右旋糖酐和纤维素，用的正是这三条轴线。"
    },
    {
      type: "short",
      q_en: "What does complete hydrolysis of a polysaccharide yield, and which three kinds of monosaccharide derivative does the book name among the products?",
      q_cn: "多糖完全水解会得到什么？教材在产物中点名了哪三类单糖衍生物？",
      accept: ["monosaccharide", "glucosamine", "galactosamine", "uronic", "单糖", "葡萄糖胺", "半乳糖胺", "糖醛酸"],
      answer_en: "Complete hydrolysis, whether acid- or enzyme-catalyzed, yields monosaccharides or their simple derivatives. Among the derivatives the book names D-glucosamine, D-galactosamine and the uronic acids.",
      answer_cn: "完全水解——无论是酸催化还是酶催化——都会生成单糖或其简单衍生物。教材在衍生物中点名的是D-葡萄糖胺、D-半乳糖胺和糖醛酸。"
    }
  ],

  "7-4-1-1": [
    {
      type: "mcq",
      q_en: "Inulin differs from every other polysaccharide in this list in its monomer. Which monomer, which bond, and how does the chain end?",
      q_cn: "菊粉的单体与本节其他多糖都不同。是哪种单体？什么键？链末端是什么？",
      options: [
        "D-fructose units joined beta(2-1), with the chain terminated by a D-glucose residue, i.e. effectively by a sucrose unit",
        "D-glucose units joined predominantly alpha(1-6), with branch points that vary by organism",
        "D-mannose units, found in yeasts, bacteria and plants",
        "D-glucose units joined alpha(1-4) with alpha(1-6) branches roughly every 12th residue"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "That is the dextrans: storage polysaccharides of yeasts and bacteria, still built from D-glucose.", cn: "这说的是右旋糖酐：酵母和细菌的储存多糖，单体仍然是D-葡萄糖。" },
        2: { en: "That is the mannans, the last entry in this subsection — a homopolysaccharide of D-mannose, not of fructose.", cn: "这说的是甘露聚糖，本小节的最后一条——由D-甘露糖构成的同多糖，不是果糖。" },
        3: { en: "That is amylopectin, the branched component of starch, whose branches also run about 12 residues long.", cn: "这说的是支链淀粉，淀粉中有分支的那一部分，其侧支也大约12个残基长。" }
      },
      why_en: "Inulin is the one fructan in the storage list: a plant polysaccharide of D-fructose units joined by beta(2-1) bonds, whose chain is terminated by a D-glucose residue, so that the end of the molecule is effectively a sucrose unit.",
      why_cn: "菊粉是储存多糖名单中唯一的果聚糖：一种植物多糖，由D-果糖单位以β(2→1)键连接，链末端为一个D-葡萄糖残基，因此分子末端实际上就是一个蔗糖单位。"
    },
    {
      type: "mcq",
      q_en: "Muscle glycogen and liver glycogen differ roughly sixteen-fold in relative molecular weight. Which property does the book stress that both nonetheless keep?",
      q_cn: "肌糖原和肝糖原的相对分子质量相差约16倍。教材强调二者仍然共同保持的是哪一项性质？",
      options: [
        "Both are unbranched",
        "Both give a blue colour with iodine",
        "Both are stored mainly in plant tissue",
        "Both remain water-soluble, and their molecules take the shape of a flattened ellipsoid"
      ],
      answer: 3,
      optionRefs: { 2: "7-4-1-1" },
      optionNotes: {
        0: { en: "Glycogen is the most heavily branched of these glucans, with a branch point roughly every 8th to 10th D-glucose residue.", cn: "糖原是这几种葡聚糖中分支最密集的，大约每8到10个D-葡萄糖残基就有一个分支点。" },
        1: { en: "Blue with iodine is amylose's reaction, and red-violet is amylopectin's; the book gives no iodine colour for glycogen at all.", cn: "遇碘呈蓝色是直链淀粉的反应，红紫色是支链淀粉的；教材根本没有给出糖原的碘反应颜色。" },
        2: { en: "Glycogen is the ANIMAL storage polysaccharide, stored chiefly in liver and muscle; starch is the plant one.", cn: "糖原是动物的储存多糖，主要储存于肝脏和肌肉；植物的储存多糖是淀粉。" }
      },
      why_en: "The book gives muscle glycogen a relative molecular weight around 1,000,000 and liver glycogen around 16 million, and then adds the point worth remembering: despite that size, glycogens remain water-soluble, and their molecules take the shape of a flattened ellipsoid.",
      why_cn: "教材给出肌糖原的相对分子质量约为100万，肝糖原约为1600万，随后补上值得记住的一点：尽管分子如此之大，糖原仍然可溶于水，其分子呈扁平的椭球形。"
    },
    {
      type: "short",
      q_en: "Dextrans are glucans, like starch and glycogen. What makes them different, and which organisms produce them?",
      q_cn: "右旋糖酐和淀粉、糖原一样都是葡聚糖。它们的不同之处是什么？由哪些生物产生？",
      accept: ["1-6", "1→6", "alpha", "yeast", "bacteria", "branch", "酵母", "细菌", "分支"],
      answer_en: "Dextrans are storage polysaccharides of yeasts and bacteria. They are built of D-glucose units too, but joined predominantly by alpha(1-6) bonds rather than alpha(1-4), and they can be exceptionally branched, with branch points at (1-2), (1-3) or (1-4) depending on the organism they come from.",
      answer_cn: "右旋糖酐是酵母和细菌的储存多糖。它同样由D-葡萄糖单位构成，但主要以α(1→6)键而非α(1→4)键连接，而且可以异常地高度分支，分支点位于(1→2)、(1→3)或(1→4)，随来源生物而异。"
    }
  ],

  "7-4-1-2": [
    {
      type: "mcq",
      q_en: "What holds cellulose's chain in its straight conformation, per Obr. 7.9?",
      q_cn: "根据图7.9，是什么使纤维素的链保持平直构象？",
      options: [
        "Each successive residue is rotated 180 degrees, and the ring oxygen hydrogen-bonds to the C-3 hydroxyl of the following residue",
        "Branch points every twelfth residue rigidify the chain",
        "Esterification of the sugar hydroxyls with sulfuric acid",
        "The chain coils into a helix inside hydrated micelles"
      ],
      answer: 0,
      optionRefs: { 1: "7-4-1-1", 2: "7-4-2", 3: "7-4-1-1" },
      optionNotes: {
        1: { en: "Branching every twelfth residue is amylopectin; cellulose chains are explicitly unbranched, which is part of why they can lie straight.", cn: "每十二个残基一个分支的是支链淀粉；纤维素链明确是不分支的，这也正是它能保持平直的部分原因。" },
        2: { en: "Sulfate esterification is what makes the glycosaminoglycans of connective tissue strongly acidic; nothing of the sort happens in cellulose.", cn: "硫酸酯化是使结缔组织中的糖胺聚糖呈强酸性的原因；纤维素中并没有这种情况。" },
        3: { en: "The helix inside hydrated micelles is amylose's arrangement, and it is what gives amylose its blue colour with iodine — the opposite of a straight chain.", cn: "水合胶束内盘绕成螺旋是直链淀粉的排列方式，也正是它遇碘呈蓝色的原因——与平直的链恰好相反。" }
      },
      why_en: "The book describes cellulose's conformation precisely: each successive D-glucose residue is rotated 180 degrees relative to the one before it, and the pyranose ring oxygen participates in a hydrogen bond with the hydroxyl group at C-3 of the following residue. The beta(1-4) linkage is what makes this straight arrangement possible in the first place.",
      why_cn: "教材对纤维素的构象描述得很具体：每一个后续D-葡萄糖残基相对于前一个旋转180度，吡喃环上的氧参与了与下一个残基C-3位羟基之间的氢键。而使这种平直排列成为可能的前提，正是β(1→4)连接。"
    },
    {
      type: "mcq",
      q_en: "Hemicelluloses, one of the substances binding cellulose fibrils in wood, are described as predominantly what?",
      q_cn: "半纤维素是木材中把纤维素微纤维结合起来的物质之一，教材说它主要是什么？",
      options: [
        "Polymers containing D-galacturonic acid",
        "D-xylans, with D-xylose units joined by beta(1-4) bonds",
        "Polymerized aromatic alcohols",
        "N-acetyl-D-glucosamine units joined by beta(1-4) bonds"
      ],
      answer: 1,
      optionRefs: { 2: "7-4-1-2", 3: "7-4-1-2" },
      optionNotes: {
        0: { en: "Those are the pectins, a different one of the accessory substances named in the same sentence.", cn: "那是果胶，是同一句话中提到的另一种辅助物质。" },
        2: { en: "That is lignin, which the book explicitly describes as polymerized aromatic alcohols — i.e. not a carbohydrate at all, despite sitting in this paragraph.", cn: "那是木质素，教材明确说它由聚合的芳香醇构成——即根本不是糖类，尽管它出现在这一段里。" },
        3: { en: "That is chitin, the other structural polysaccharide in this subsection; its repeating unit is chitobiose.", cn: "那是几丁质，本小节中的另一种结构多糖；它的重复单位是几丁二糖。" }
      },
      why_en: "The book lists three substances binding cellulose fibrils firmly together: hemicelluloses, predominantly D-xylans with D-xylose units joined by beta(1-4) bonds; pectins, polymers containing D-galacturonic acid; and the so-called extension protein.",
      why_cn: "教材列出三种把纤维素微纤维牢固结合起来的物质：半纤维素，主要是以β(1→4)键连接D-木糖单位的D-木聚糖；果胶，含D-半乳糖醛酸的聚合物；以及所谓的extension蛋白。"
    },
    {
      type: "short",
      q_en: "Cellulose and chitin are both unbranched beta(1-4) structural polysaccharides. What differs in the monomer, and what does each build?",
      q_cn: "纤维素和几丁质都是不分支的β(1→4)结构多糖。它们的单体有什么不同？各自构成什么？",
      accept: ["glucose", "N-acetyl", "glucosamine", "cell wall", "fungi", "crustacean", "insect", "cuticle", "葡萄糖", "乙酰", "细胞壁", "真菌", "甲壳", "昆虫"],
      answer_en: "Cellulose is built of D-glucose units and is the main structural component of plant cell walls; chitin is built of N-acetyl-D-glucosamine units, with chitobiose as its repeating disaccharide, and it occurs in fungi and forms the base of the crustacean shell and the insect exoskeleton (cuticle).",
      answer_cn: "纤维素由D-葡萄糖单位构成，是植物细胞壁的主要结构成分；几丁质由N-乙酰-D-葡萄糖胺单位构成，重复二糖单位是几丁二糖，它存在于真菌中，并构成甲壳类外壳和昆虫外骨骼（角质层）的基础。"
    }
  ],

  "7-4-2": [
    {
      type: "mcq",
      q_en: "What does the book say makes glycosaminoglycans very acidic substances?",
      q_cn: "教材说，是什么使糖胺聚糖成为酸性很强的物质？",
      options: [
        "Esterification of the sugar hydroxyls, or of the amino sugar's amino group, with sulfuric acid",
        "Esterification with phosphoric acid, as in the metabolized form of sugars",
        "The acetyl group carried on the amino sugar",
        "The covalent bond to the protein core in proteoglycans"
      ],
      answer: 0,
      optionRefs: { 1: "7-2-1", 2: "7-2-4", 3: "7-5" },
      optionNotes: {
        1: { en: "Phosphate esters are the biochemically dominant sugar ester elsewhere, but here the book names sulfuric acid as the esterifying acid.", cn: "磷酸酯在别处是生化上最重要的糖酯，但在这里教材点名的酯化用酸是硫酸。" },
        2: { en: "Acetylation of the amino group is a real and constant feature of these amino sugars, but the book attributes the strongly acidic character specifically to sulfuric-acid esterification.", cn: "氨基被乙酰化确实是这些氨基糖固有的特征，但教材把强酸性明确归因于硫酸酯化。" },
        3: { en: "In proteoglycans the glycosaminoglycan is indeed covalently bound to protein, but the book does not tie the acidity to that linkage.", cn: "在蛋白聚糖中，糖胺聚糖确实与蛋白质共价结合，但教材并未把酸性归因于这一连接。" }
      },
      why_en: "The book says the hydroxyl groups of the sugar residues, or the amino sugar's amino group, may be esterified with sulfuric acid, making these very acidic substances. That fixed negative charge is what lets the chain hold water and gives connective-tissue ground substance its gel character.",
      why_cn: "教材指出，糖残基的羟基或氨基糖的氨基可能被硫酸酯化，因而使这类物质酸性很强。正是这种固定的负电荷让糖链抓住水分，使结缔组织基质呈凝胶状。"
    },
    {
      type: "mcq",
      q_en: "Heparin is grouped with the glycosaminoglycans structurally, but the book flags one thing that sets it apart. What?",
      q_cn: "从结构上看肝素与糖胺聚糖同类，但教材特别指出它有一点不同。是哪一点？",
      options: [
        "It is the main glycosaminoglycan of the vitreous humor and synovial fluid",
        "It is not a typical component of connective tissue; it is found in larger amount in mast cells, bound to protein, and in the extracellular space of many tissues",
        "It is, alongside hyaluronic acid, one of the two glycosaminoglycans that build connective tissue",
        "It occurs free in blood plasma, where it dissolves clots that have already formed"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "That is hyaluronic acid: present in smaller amount in all connective tissue, in larger amount in the umbilical cord, vitreous humor and synovial fluid.", cn: "那是透明质酸：在所有结缔组织中都有少量存在，在脐带、玻璃体和滑液中含量较大。" },
        2: { en: "That describes the chondroitin sulfates, which the book says participate in building connective tissues together with hyaluronic acid.", cn: "这描述的是硫酸软骨素，教材说它与透明质酸共同参与结缔组织的构建。" },
        3: { en: "The direction is wrong: heparin PREVENTS clotting, by inhibiting the conversion of prothrombin to thrombin and thrombin's action on fibrinogen; the book says nothing about dissolving existing clots.", cn: "方向说反了：肝素是阻止凝血，通过抑制凝血酶原转化为凝血酶以及凝血酶对纤维蛋白原的作用；教材没有提到溶解已形成的血块。" }
      },
      why_en: "The book states that heparin has a structure similar to the glycosaminoglycans but is NOT a typical component of connective tissue. It occurs in larger amount in mast cells, bound to protein, and has also been found in the extracellular space of a whole range of tissues.",
      why_cn: "教材指出，肝素的结构与糖胺聚糖相似，但并不是结缔组织的典型成分。它大量存在于肥大细胞中，与蛋白质结合，也见于多种组织的细胞外间隙。"
    },
    {
      type: "short",
      q_en: "Compare hyaluronic acid with chondroitin-6-sulfate: which uronic acid and which amino sugar does each use, and what does chondroitin-6-sulfate carry that hyaluronic acid does not?",
      q_cn: "比较透明质酸与6-硫酸软骨素：各自使用哪种糖醛酸和哪种氨基糖？6-硫酸软骨素带有而透明质酸没有的是什么？",
      accept: ["glucuronic", "N-acetylglucosamine", "N-acetylgalactosamine", "sulfate", "C-6", "葡萄糖醛酸", "葡萄糖胺", "半乳糖胺", "硫酸"],
      answer_en: "Both are built on D-glucuronic acid. Hyaluronic acid pairs it with N-acetyl-D-glucosamine; chondroitin-6-sulfate (chondroitin C) pairs it with N-acetyl-D-galactosamine and additionally carries a sulfuric-acid residue bonded to the hydroxyl group at C-6.",
      answer_cn: "两者都以D-葡萄糖醛酸为基础。透明质酸与之配对的是N-乙酰-D-葡萄糖胺；6-硫酸软骨素（软骨素C）配对的是N-乙酰-D-半乳糖胺，并且额外在C-6位羟基上连有一个硫酸残基。"
    }
  ],

  "7-5": [
    {
      type: "mcq",
      q_en: "All N-glycosidically bound oligosaccharides start from the same pentasaccharide core. Where, then, does their great diversity come from?",
      q_cn: "所有N-糖苷连接的寡糖都起自同一个五糖核心。那么它们巨大的多样性从何而来？",
      options: [
        "From the core itself varying in composition between different glycoproteins",
        "From additional sugar residues being attached to the shared core in various ways",
        "From which amino acid the chain is attached to",
        "From whether the protein is an enzyme, a hormone or an immunoglobulin"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The point of calling it a common core is that it does not vary: three D-mannosyl plus two N-acetyl-D-glucosaminyl residues in every N-linked chain.", cn: "把它称为共同核心，意思正是它不变：每一条N-连接糖链中都是三个D-甘露糖基加两个N-乙酰-D-葡萄糖胺基残基。" },
        2: { en: "The attachment residue decides whether the linkage is O-glycosidic (serine, threonine) or N-glycosidic (asparagine) — a different question from how the chain branches.", cn: "连接的氨基酸残基决定的是O-糖苷键（丝氨酸、苏氨酸）还是N-糖苷键（天冬酰胺），这与糖链如何分支是两个问题。" },
        3: { en: "Those are the biological classes of glycoprotein the book lists; they say what carries the chain, not what makes one chain differ structurally from another.", cn: "那是教材列出的糖蛋白的生物学类别；它说明的是谁带着这条糖链，而不是一条糖链在结构上如何区别于另一条。" }
      },
      why_en: "The book states that additional sugar residues are attached to the common core in various ways, and that this is exactly what allows the great diversity of oligosaccharides found in glycoproteins — the mannose-type and complex-type trees of Obr. 7.11 are two such elaborations of one and the same core.",
      why_cn: "教材指出，其他糖残基以不同方式连接到这个共同核心上，这正是糖蛋白中寡糖多样性的来源——图7.11中的甘露糖型和复杂型两种树状结构，就是同一个核心的两种不同延伸。"
    },
    {
      type: "mcq",
      q_en: "In Obr. 7.11(B), what distinguishes the complex-type N-linked tree as it is drawn?",
      q_cn: "在图7.11(B)中，所画的N-连接「复杂型」寡糖树以什么为特征？",
      options: [
        "Several further branching mannose residues sitting over the core",
        "It has no pentasaccharide core",
        "Two NeuAc-Gal-GlcNAc branches off the core mannoses, plus a fucose residue on the core GlcNAc closest to asparagine",
        "A NeuAc-Gal-GalNAc unit with a NeuAc branch, attached to serine"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "That is the mannose-type tree, the other N-linked example in the same panel.", cn: "那是甘露糖型，是同一部分中的另一个N-连接例子。" },
        1: { en: "Both N-linked types in the panel are drawn over the same GlcNAc-GlcNAc-Man core; that shared core is the panel's whole point.", cn: "该部分中两种N-连接类型都画在同样的GlcNAc-GlcNAc-Man核心之上；这个共有核心正是该图要说明的重点。" },
        3: { en: "That is the O-linked tree in the same panel, attached to serine rather than asparagine, and it has no pentasaccharide core at all.", cn: "那是同一部分中的O-连接寡糖树，连接在丝氨酸而非天冬酰胺上，它根本没有五糖核心。" }
      },
      why_en: "The complex-type tree in Obr. 7.11(B) carries two NeuAc-Gal-GlcNAc branches off the core mannoses plus a fucose residue attached to the core GlcNAc closest to asparagine, all built over the same GlcNAc-GlcNAc-Man core as the mannose-type tree and shown attached to the protein.",
      why_cn: "图7.11(B)中的复杂型糖链从核心甘露糖分出两条NeuAc-Gal-GlcNAc分支，另有一个岩藻糖残基连在最靠近天冬酰胺的核心GlcNAc上，整体建立在与甘露糖型相同的GlcNAc-GlcNAc-Man核心之上，并与蛋白质相连。"
    },
    {
      type: "short",
      q_en: "Name at least three kinds of protein the book says carry oligosaccharide chains, and say what role those chains play.",
      q_cn: "说出教材提到的至少三类携带寡糖链的蛋白质，并说明这些糖链的作用。",
      accept: ["enzyme", "hormone", "immunoglobulin", "membrane", "connective tissue", "recognition", "酶", "激素", "免疫球蛋白", "膜蛋白", "结缔组织", "识别"],
      answer_en: "The book names some enzymes, hormones, immunoglobulins, high-molecular-weight components of connective tissue, and integral membrane proteins. The chain is not a fuel store but a marker: it is the part something else recognises, which is why glycoproteins are central to recognition.",
      answer_cn: "教材点名的有一些酶、激素、免疫球蛋白、结缔组织的高分子成分，以及整合膜蛋白。这条糖链不是能量储备，而是一个标记：它正是被别的东西识别的那一部分，这也是糖蛋白在识别中居于核心地位的原因。"
    }
  ],

  "7-6": [
    {
      type: "mcq",
      q_en: "In a fragment-transfer reaction (the book's type 3), which sugar donates the fragment and which receives it?",
      q_cn: "在片段转移反应（教材的类型3）中，哪一种糖提供片段，哪一种接受？",
      options: [
        "The fragment always originates from a ketose, and the recipient is always an aldose",
        "The fragment always originates from an aldose, and the recipient is always a ketose",
        "Either can donate or receive, depending on the enzyme",
        "The donor is always a hexose and the recipient always a triose"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two roles are swapped. The book fixes the direction: donor ketose, recipient aldose.", cn: "两个角色对调了。教材把方向定死了：供体是酮糖，受体是醛糖。" },
        2: { en: "The book states the direction as a rule of the reaction type, not as something that varies case by case.", cn: "教材把这个方向作为该反应类型的规则给出，而不是逐例可变的东西。" },
        3: { en: "Chain length is not the criterion. Trioses, tetroses, pentoses and heptoses all arise from hexoses this way, but what fixes the roles is ketose against aldose.", cn: "碳链长度不是判据。三碳糖、四碳糖、戊糖和庚糖都是这样由己糖产生的，但决定角色的是酮糖与醛糖之别。" }
      },
      why_en: "The book's third reaction type is the transfer of three-carbon or two-carbon fragments from one sugar to another, and it states the direction explicitly: fragments always originate from a ketose, and the recipient is always an aldose, with the total number of carbon atoms conserved across the reaction.",
      why_cn: "教材的第三种反应类型是三碳或二碳片段从一种糖转移到另一种糖，并明确规定了方向：片段总是来自酮糖，接受片段的总是醛糖，反应前后碳原子总数守恒。"
    },
    {
      type: "mcq",
      q_en: "Epimerization and isomerization are grouped as one reaction type. What does each change, and what do both leave untouched?",
      q_cn: "差向异构化与异构化被归为同一种反应类型。它们各自改变什么？两者都不改变什么？",
      options: [
        "Epimerization interconverts aldose and ketose; isomerization moves a hydroxyl; both shorten the chain",
        "Both transfer a two-carbon fragment between two sugars",
        "Epimerization changes the steric arrangement at one carbon, i.e. the position of a hydroxyl; isomerization interconverts aldose and ketose form; neither changes the number of carbon atoms",
        "Both remove one carbon as CO2 after dehydrogenation"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "The two definitions are swapped, and neither reaction shortens the chain — the book says the carbon count does not change in either.", cn: "两个定义被对调了，而且这两种反应都不会使链变短——教材说这两者碳原子数目都不改变。" },
        1: { en: "That is type 3, fragment transfer, which produces trioses, tetroses, pentoses and heptoses from hexoses.", cn: "那是类型3，即片段转移，由己糖产生三碳糖、四碳糖、戊糖和庚糖。" },
        3: { en: "That is type 2, oxidative degradation of one carbon: dehydrogenation to a beta-oxo acid, then decarboxylation.", cn: "那是类型2，即一个碳原子的氧化降解：先脱氢生成β-氧代酸，再脱羧。" }
      },
      why_en: "Type 1 covers two related moves: epimerization, a change of steric arrangement at one carbon atom, i.e. a change in the position of a hydroxyl group; and isomerization, the interconversion of the aldose and ketose forms. The book stresses that the number of carbon atoms does not change in either.",
      why_cn: "类型1包含两个相关的动作：差向异构化，即某一个碳原子上立体构型的改变，也就是羟基位置的改变；以及异构化，即醛糖与酮糖形式之间的相互转化。教材强调这两种反应中碳原子数目都不改变。"
    },
    {
      type: "short",
      q_en: "Type 2 turns hexoses into pentoses. Describe its two chemical steps in order, and say how many carbon atoms are lost.",
      q_cn: "类型2把己糖变成戊糖。按顺序描述它的两个化学步骤，并说明失去几个碳原子。",
      accept: ["dehydrogenation", "oxo acid", "decarboxylation", "one carbon", "脱氢", "氧代酸", "脱羧", "一个碳"],
      answer_en: "First a dehydrogenation to a beta-oxo acid, then a decarboxylation. Exactly one carbon atom is lost, which is how a hexose is shortened into a pentose.",
      answer_cn: "先脱氢生成β-氧代酸，然后脱羧。恰好失去一个碳原子，己糖正是这样被缩短为戊糖的。"
    }
  ]

});
