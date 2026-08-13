/* Bank questions for chapter 8, first half (nodes 8-1 through 8-3-5) — the second
   question layer, see BANK_SPEC.md. Every item below is derived from the content already
   in biochemie_pro/data/ch8.js; no fact here comes from outside the node it is attached to.
   Book-internal oddities flagged inside ch8.js (the 'etnanolamin' typo in Tab. 8.1, the
   'cetylalkohol (C11)' print error, the '(obr. 8.2)' mislabel, the 'matonyl-CoA' typo, the
   Mn2+ cofactor, the 3-glycerolfosfat / L-alpha-glycerolfosfat naming drift) are
   deliberately NOT used as question material. Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  '8-1': [
    {
      type: 'mcq',
      q_en: "Tab. 8.1 lists the hydrolysis products of every lipid class. Which class yields sphingosine + fatty acids + carbohydrates + sialic acid?",
      q_cn: "表8.1列出了每一类脂质的水解产物。哪一类水解后得到鞘氨醇+脂肪酸+糖+唾液酸？",
      options: ["Gangliosides", "Cerebrosides", "Sphingomyelins", "Glycoacylglycerols"],
      answer: 0,
      optionRefs: { 1: '8-2-3-4', 2: '8-2-3-3', 3: '8-2-3' },
      optionNotes: {
        1: { en: "Cerebrosides hydrolyse to sphingosine + fatty acids + carbohydrates — the same list minus the sialic acid. Sialic acid is exactly what Tab. 8.1 adds to separate gangliosides from cerebrosides.", cn: "脑苷脂水解得到鞘氨醇+脂肪酸+糖——比神经节苷脂少了唾液酸。表8.1正是用唾液酸把神经节苷脂与脑苷脂区分开。" },
        2: { en: "Sphingomyelins share the sphingosine backbone but hydrolyse to sphingosine + fatty acids + HPO4(2-) + choline — a phosphate and a choline instead of a sugar chain.", cn: "鞘磷脂同样以鞘氨醇为骨架，但水解产物是鞘氨醇+脂肪酸+HPO₄²⁻+胆碱——是磷酸和胆碱，而不是糖链。" },
        3: { en: "Glycoacylglycerols also carry a sugar, but on a glycerol backbone: carbohydrate + glycerol + fatty acids, with no sphingosine at all.", cn: "糖酰基甘油也带糖，但骨架是甘油：糖+甘油+脂肪酸，完全不含鞘氨醇。" }
      },
      why_en: "Tab. 8.1's row for gangliosides is the only one that ends with sialic acid; the four sphingosine-based rows (sphingomyelins, cerebrosides, gangliosides) are told apart precisely by what follows sphingosine + fatty acid — phosphate and choline, sugars, or sugars plus sialic acid.",
      why_cn: "表8.1中只有神经节苷脂这一行以唾液酸结尾。以鞘氨醇为骨架的几行（鞘磷脂、脑苷脂、神经节苷脂）正是靠「鞘氨醇+脂肪酸」之后跟着什么来区分：磷酸+胆碱、糖、还是糖+唾液酸。"
    },
    {
      type: 'mcq',
      q_en: "Which pair belongs to the SIMPLE lipids, i.e. contains nothing but fatty acid and alcohol?",
      q_cn: "下列哪一对属于简单脂质，即除脂肪酸和醇之外不含其他组分？",
      options: ["Acylglycerols and waxes", "Phosphoacylglycerols and sphingomyelins", "Cerebrosides and gangliosides", "Steroids and carotenoids"],
      answer: 0,
      optionRefs: { 1: '8-2-3-2', 2: '8-2-3-4', 3: '8-2-4-3' },
      optionNotes: {
        1: { en: "Both are complex lipids: they carry an additional component beyond fatty acid + alcohol (phosphate plus an organic head group; sphingosine, phosphate and choline).", cn: "这两者都是复合脂质：在脂肪酸+醇之外还有额外组分（磷酸加有机头基；鞘氨醇、磷酸和胆碱）。" },
        2: { en: "Also complex lipids — the extra component here is the carbohydrate chain (plus sialic acid in gangliosides).", cn: "同样是复合脂质——这里额外的组分是糖链（神经节苷脂还多一个唾液酸）。" },
        3: { en: "These are derived lipids: they fit neither the simple nor the complex definition, and Tab. 8.1 leaves their hydrolysis-product column blank.", cn: "这两者属于衍生脂质：既不符合简单脂质也不符合复合脂质的定义，表8.1中它们的水解产物一栏是空白的。" }
      },
      why_en: "The book's simple-lipid group contains exactly two classes, acylglycerols and waxes, both pure esters of a fatty acid with an alcohol (glycerol in one case, a long-chain alcohol such as cetyl or myricyl alcohol in the other).",
      why_cn: "教材的简单脂质只包含两类：酰基甘油和蜡，二者都是脂肪酸与醇形成的纯酯（前者的醇是甘油，后者是鲸蜡醇、蜂花醇之类的长链醇）。"
    },
    {
      type: 'short',
      q_en: "Waxes and phosphoacylglycerols both contain fatty acids. Using Tab. 8.1's hydrolysis products, say which of the book's three structural groups each belongs to and what makes the difference.",
      q_cn: "蜡和磷酸酰基甘油都含脂肪酸。请依据表8.1的水解产物说明它们各属于教材三大结构分类中的哪一类，以及区别何在。",
      accept: ["simple", "complex", "alcohol", "glycerol", "phosphate", "additional", "简单", "复合", "醇", "甘油", "磷酸"],
      answer_en: "A wax hydrolyses to alcohol + fatty acids only, so it is a simple lipid — nothing but a fatty acid and an alcohol. A phosphoacylglycerol hydrolyses to glycerol + fatty acids + HPO4(2-) + an organic compound (choline, ethanolamine, serine, inositol, glycerol), so beyond the fatty-acid/alcohol core it carries an additional component, which is exactly the book's criterion for a complex lipid.",
      answer_cn: "蜡水解只得到醇+脂肪酸，因此是简单脂质——除脂肪酸和醇之外别无他物。磷酸酰基甘油水解得到甘油+脂肪酸+HPO₄²⁻+一个有机化合物（胆碱、乙醇胺、丝氨酸、肌醇、甘油），也就是在脂肪酸/醇的核心之外还多了一个组分，这正是教材判定复合脂质的标准。"
    }
  ],

  '8-2-1-1': [
    {
      type: 'mcq',
      q_en: "Tab. 8.2 contains two acids abbreviated 18:3 — alpha-linolenic and gamma-linolenic. What separates them in the table?",
      q_cn: "表8.2中有两种缩写同为18:3的脂肪酸——α-亚麻酸和γ-亚麻酸。表中是靠什么把它们区分开的？",
      options: [
        "alpha-linolenic is Delta 9,12,15 and belongs to the n-3 series; gamma-linolenic is Delta 6,9,12 and belongs to the n-6 series",
        "The series assignments are the other way round: alpha-linolenic is n-6 and gamma-linolenic is n-3",
        "They share the same double-bond positions but differ in chain length, alpha being C18 and gamma C20",
        "They differ only in the cis/trans configuration of the same three double bonds"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two series are swapped here. The n- number counts from the methyl end, and Tab. 8.2 puts the Delta 9,12,15 acid (alpha) in n-3 and the Delta 6,9,12 acid (gamma) in n-6.", cn: "这里把两个系列弄反了。n-数字从甲基端计数，表8.2把Δ9,12,15的α-亚麻酸列为n-3，把Δ6,9,12的γ-亚麻酸列为n-6。" },
        2: { en: "Both are C18 with three double bonds. The C20 tetraunsaturated entry in Tab. 8.2 is arachidonic acid, 20:4 Delta 5,8,11,14, n-6 — a different row.", cn: "两者都是C18、三个双键。表8.2中C20的四不饱和条目是花生四烯酸20:4 Δ5,8,11,14 n-6，属于另一行。" },
        3: { en: "cis/trans is one of the book's three chain-based classification criteria, but it is not what the table uses to tell these two apart — their double bonds sit at different carbons.", cn: "顺式/反式是教材三项碳链分类标准之一，但表中区分这两者靠的不是构型，而是双键所在的碳位不同。" }
      },
      why_en: "Both acids are 18:3, so the carbon:double-bond abbreviation alone cannot separate them; Tab. 8.2 does it with the Delta column (positions counted from the carboxyl end, 9,12,15 versus 6,9,12) and the resulting series assignment, n-3 versus n-6.",
      why_cn: "两者都是18:3，仅凭「碳数:双键数」的缩写无法区分；表8.2靠的是Δ栏（从羧基端计数的位置，9,12,15对6,9,12）以及由此得出的系列归属n-3对n-6。"
    },
    {
      type: 'mcq',
      q_en: "What chain feature does the book give as typical of the fatty acids most commonly found in nature, the so-called higher fatty acids?",
      q_cn: "教材指出自然界中最常见的脂肪酸——即所谓「高级脂肪酸」——具有怎样的碳链特征？",
      options: [
        "A linear chain with an even number of carbon atoms, C12-24",
        "A branched or alicyclic chain",
        "A chain with an odd number of carbon atoms",
        "A short chain of C2-C6 carrying at least one trans double bond"
      ],
      answer: 0,
      optionRefs: { 2: '8-4-4-4' },
      optionNotes: {
        1: { en: "Branched and alicyclic chains are listed by the book as possible shapes when classifying fatty acids, but the naturally most common form is the linear one.", cn: "支链和脂环型是教材在分类时列出的可能链形，但自然界中最常见的形式是线型链。" },
        2: { en: "Odd-carbon fatty acids do exist and get their own special treatment when the book reaches fatty-acid degradation; the natural-occurrence rule stated here is an EVEN number of carbons.", cn: "奇数碳脂肪酸确实存在，教材讲脂肪酸降解时会专门处理；但此处所述的天然分布规律是碳原子数为偶数。" },
        3: { en: "Trans is one of the two possible double-bond configurations, but naturally occurring double bonds are mostly cis, and the natural range given here is C12-24, not C2-C6.", cn: "反式是双键两种可能构型之一，但天然双键大多为顺式；而且此处给出的天然碳数范围是C12-24，不是C2-C6。" }
      },
      why_en: "The book states that the fatty acids most commonly found in nature have a linear chain with an even number of carbon atoms, C12-24, and calls these the higher fatty acids; the unsaturated ones are usually C16-24.",
      why_cn: "教材指出，自然界中最常见的脂肪酸是碳原子数为偶数的线型链、C12-24，称为高级脂肪酸；其中不饱和脂肪酸通常为C16-24。"
    },
    {
      type: 'short',
      q_en: "Name the five saturated fatty acids of Tab. 8.2 in order of increasing chain length, with the C:double-bond abbreviation of each.",
      q_cn: "按碳链由短到长列出表8.2中的五种饱和脂肪酸，并给出各自「碳数:双键数」的缩写。",
      accept: ["lauric", "12:0", "myristic", "14:0", "palmitic", "16:0", "stearic", "18:0", "arachidic", "20:0", "月桂", "肉豆蔻", "棕榈", "硬脂", "花生酸"],
      answer_en: "Lauric acid 12:0 (dodecanoic), myristic acid 14:0 (tetradecanoic), palmitic acid 16:0 (hexadecanoic), stearic acid 18:0 (octadecanoic), arachidic acid 20:0 (eicosanoic). All five carry no double bond, which is why the second number is 0 throughout.",
      answer_cn: "月桂酸12:0（十二烷酸）、肉豆蔻酸14:0（十四烷酸）、棕榈酸16:0（十六烷酸）、硬脂酸18:0（十八烷酸）、花生酸20:0（二十烷酸）。五者都不含双键，所以缩写的第二个数字全是0。"
    }
  ],

  '8-2-1-2': [
    {
      type: 'mcq',
      q_en: "In the book's systematic nomenclature, which name corresponds to an 18:2 fatty acid?",
      q_cn: "按教材的系统命名法，18:2的脂肪酸对应下列哪个名称？",
      options: ["kys. oktadekadienova (octadecadienoic acid)", "kys. oktadekanova (octadecanoic acid)", "kys. oktadekatrienova (octadecatrienoic acid)", "kys. hexadekanova (hexadecanoic acid)"],
      answer: 0,
      optionNotes: {
        1: { en: "The suffix -nova marks a SATURATED acid, so octadecanoic acid is 18:0. The chain length is right, the number of double bonds is not.", cn: "后缀-nova表示饱和酸，因此十八烷酸是18:0。碳链长度对了，但双键数不对。" },
        2: { en: "-trienova means three double bonds, so this name is 18:3, not 18:2.", cn: "-trienova表示三个双键，所以这个名称对应18:3，不是18:2。" },
        3: { en: "Hexadeka- is the Greek numeral for 16 and -nova is saturated, so this is 16:0 — the systematic name of palmitic acid.", cn: "Hexadeka-是希腊数词16，-nova表示饱和，所以这是16:0，即棕榈酸的系统名。" }
      },
      why_en: "A systematic fatty-acid name encodes two things independently: a Greek numeral for the carbon count (oktadeka- = 18) and a suffix for the number of double bonds (-nova = 0, -enova = 1, -dienova = 2, -trienova = 3). 18:2 therefore reads oktadekadienova.",
      why_cn: "系统名把两件事分别编码：希腊数词表示碳数（oktadeka-=18），后缀表示双键数（-nova=0、-enova=1、-dienova=2、-trienova=3）。因此18:2读作oktadekadienova。"
    },
    {
      type: 'mcq',
      q_en: "Given the two essential fatty acids in the diet, what does the book say mammals CAN then make for themselves, and with what?",
      q_cn: "在食物提供了两种必需脂肪酸之后，教材说哺乳动物可以自己合成什么？靠什么合成？",
      options: [
        "Fatty acids with more than 18 carbons and with more double bonds, using the elongase and desaturase enzyme systems",
        "The first double bond of linoleic acid itself, which is why the acid is only conditionally essential",
        "Phosphatidic acid, by activating the fatty acids with CTP",
        "Shorter fatty acids, by cutting two carbons at a time off the essential ones"
      ],
      answer: 0,
      optionRefs: { 2: '8-3-5', 3: '8-4-4-2' },
      optionNotes: {
        1: { en: "This reverses the definition. The acids are called essential precisely because mammals cannot make them and the diet MUST contain them.", cn: "这把定义反过来说了。正因为哺乳动物无法自行合成、食物中必须含有，这两种脂肪酸才被称为必需脂肪酸。" },
        2: { en: "Phosphatidic acid does come from activated precursors, but the activating agents there are coenzyme A for the fatty acid and CTP for the phospholipid head-group bases — a different pathway from chain elongation and desaturation.", cn: "磷脂酸确实由活化前体生成，但那里活化脂肪酸的是辅酶A，CTP活化的是磷脂头基的有机碱——与链延长和去饱和是两条不同的路径。" },
        3: { en: "Removing two carbons at a time is degradation (beta-oxidation), not the biosynthetic use of the essential fatty acids described here.", cn: "每次切掉两个碳属于降解（β-氧化），不是此处所说的对必需脂肪酸的合成性利用。" }
      },
      why_en: "The book's point is a division of labour: the diet supplies linoleic acid (18:2 n-6) and alpha-linolenic acid (18:3 n-3), and from those starting points elongases lengthen the chain past 18 carbons while desaturases add further double bonds.",
      why_cn: "教材这里讲的是分工：食物提供亚油酸（18:2 n-6）和α-亚麻酸（18:3 n-3），在此基础上延长酶把碳链延长到18碳以上，去饱和酶再引入更多双键。"
    },
    {
      type: 'short',
      q_en: "Compare a lipid built from saturated fatty acids with one built from unsaturated fatty acids in terms of chemical stability and melting point, and state how the POSITION of a double bond modifies the effect.",
      q_cn: "就化学稳定性和熔点而言，比较由饱和脂肪酸构成的脂质与由不饱和脂肪酸构成的脂质，并说明双键的位置如何进一步影响这一效应。",
      accept: ["saturated", "higher", "unsaturated", "lower", "carboxyl", "closer", "饱和", "更高", "不饱和", "更低", "羧基"],
      answer_en: "Saturated fatty acids raise both the chemical stability and the melting point of the lipid they are part of; unsaturated fatty acids lower both. Position then acts on top of that: the closer a double bond sits to the carboxyl group, the more it further lowers chemical stability and melting point.",
      answer_cn: "饱和脂肪酸使所构成的脂质化学稳定性更高、熔点更高；不饱和脂肪酸则使两者都降低。位置的作用叠加在此之上：双键离羧基越近，对化学稳定性和熔点的降低作用越强。"
    }
  ],

  '8-2-2-1': [
    {
      type: 'mcq',
      q_en: "The book calls some acylglycerols neutral FATS and others neutral OILS. What decides which name is used?",
      q_cn: "教材把一些酰基甘油称为中性脂肪（fat），另一些称为中性油（oil）。决定用哪个名称的依据是什么？",
      options: [
        "Their physical state at room temperature — solid is a fat, liquid is an oil — which follows from which fatty acids they contain",
        "Whether they come from an animal or from a plant",
        "Whether all three hydroxyls are esterified (fat) or only one (oil)",
        "Whether they carry a phosphate head group (oil) or not (fat)"
      ],
      answer: 0,
      optionRefs: { 2: '8-2-1-2', 3: '8-2-3-2' },
      optionNotes: {
        1: { en: "The book's criterion is physical, not biological origin. Nothing in this section classifies acylglycerols by the organism they came from.", cn: "教材的判据是物理状态，不是生物来源。本节没有按来源生物对酰基甘油进行分类。" },
        2: { en: "The number of esterified hydroxyls is a different axis of classification altogether — it gives mono-, di- and triacylglycerol. Melting behaviour instead tracks the fatty acids present, saturated acids raising the melting point.", cn: "被酯化的羟基数目是完全另一条分类轴——它给出单、二、三酰基甘油。熔化行为取决于所含脂肪酸，饱和脂肪酸使熔点升高。" },
        3: { en: "Acylglycerols contain no phosphate and no other ionizable group at all — that is exactly why they count as NEUTRAL lipids. A phosphate head group would make the molecule a phosphoacylglycerol.", cn: "酰基甘油完全不含磷酸，也不含任何可电离基团——这正是它们被称为「中性脂质」的原因。带上磷酸头基就成了磷酸酰基甘油。" }
      },
      why_en: "Because acylglycerols have no ionizable group, the book calls the whole family neutral lipids and then splits it purely by state at room temperature: solid ones are neutral fats, liquid ones neutral oils, the state itself being set by the fatty acids esterified to the glycerol.",
      why_cn: "由于酰基甘油不含可电离基团，教材把这一整族称为中性脂质，然后单纯按室温下的状态划分：固态的是中性脂肪，液态的是中性油，而状态本身由酯化在甘油上的脂肪酸决定。"
    },
    {
      type: 'mcq',
      q_en: "In the book's figure sequence glycerol -> 1-acyl-L-glycerol -> 1,2-diacyl-L-glycerol -> triacyl-L-glycerol, what changes at each step?",
      q_cn: "在教材的图示序列「甘油→1-酰基-L-甘油→1,2-二酰基-L-甘油→三酰基-L-甘油」中，每一步发生的变化是什么？",
      options: [
        "One more of the three hydroxyl groups becomes esterified with a fatty acid (acyl groups R, R', R'')",
        "A phosphate group replaces the acyl group at carbon 3",
        "A sugar is attached O-glycosidically to the free hydroxyl",
        "The L-isomer is progressively converted into the D-isomer"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-3-2', 2: '8-2-3-4' },
      optionNotes: {
        1: { en: "A glycerol backbone carrying two acyls plus a phosphate is phosphatidic acid, the simplest phospholipid — a different family with a polar head, not a neutral lipid.", cn: "带两个酰基再加一个磷酸的甘油骨架是磷脂酸，即最简单的磷脂——那是另一个带极性头基的家族，不属于中性脂质。" },
        2: { en: "An O-glycosidic sugar is what turns a lipid into a glycolipid; the acylglycerol series adds only acyl groups.", cn: "以O-糖苷键连接的糖是把脂质变成糖脂的标志；酰基甘油系列只是不断加上酰基。" },
        3: { en: "No isomer change occurs. The book's point about stereochemistry is the opposite one: natural lipids are mostly L-isomers, which is why every structure in the figure is drawn as the L form.", cn: "并不发生异构体转变。教材关于立体化学的说法恰恰相反：天然脂质大多是L-异构体，所以图中每个结构都画成L型。" }
      },
      why_en: "The whole figure is one variable: how many of glycerol's three hydroxyls carry a fatty acid. One gives a monoacylglycerol, two a diacylglycerol, three a triacylglycerol, and the three acyl groups are written R, R' and R'' because they can be different fatty acids.",
      why_cn: "整幅图只变一个量：甘油的三个羟基中有几个连上了脂肪酸。一个是单酰基甘油，两个是二酰基甘油，三个是三酰基甘油；三个酰基写作R、R'、R''，因为它们可以是不同的脂肪酸。"
    },
    {
      type: 'short',
      q_en: "Beyond storage in adipose tissue, what job do triacylglycerols do in the blood and lymph, and in what particle form do they do it?",
      q_cn: "除了在脂肪组织中储存之外，三酰基甘油在血液和淋巴中承担什么任务？以什么颗粒形式完成？",
      accept: ["chylomicron", "lipoprotein", "transport", "dietary", "lymphatic", "乳糜微粒", "脂蛋白", "运输", "淋巴"],
      answer_en: "In the form of lipoprotein particles called chylomicrons, triacylglycerols transport and distribute dietary fatty acids through the lymphatic and blood systems of the body. This is the second of the three functions the book gives them in animal cells, alongside the adipose fat depot and the physical protection/thermal insulation of organs.",
      answer_cn: "三酰基甘油以称为乳糜微粒（chylomicron）的脂蛋白颗粒形式，经淋巴系统和血液系统运输并分配来自食物的脂肪酸。这是教材给出的动物细胞三大功能中的第二项，另外两项是脂肪库储存以及对器官的物理保护和隔热。"
    }
  ],

  '8-2-2-2': [
    {
      type: 'mcq',
      q_en: "Waxes and acylglycerols are both simple lipids, i.e. both are esters of fatty acids with an alcohol. What is the structural difference?",
      q_cn: "蜡和酰基甘油都属于简单脂质，都是脂肪酸与醇形成的酯。二者的结构差别是什么？",
      options: [
        "In a wax the alcohol is a higher long-chain alcohol (cetyl, ceryl, myricyl), not glycerol",
        "A wax carries a phosphate group in addition to the ester",
        "In a wax the fatty acid is bound by an amide bond rather than an ester bond",
        "A wax is built on sphingosine instead of an alcohol"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-3-2', 2: '8-2-3-3', 3: '8-2-3-3' },
      optionNotes: {
        1: { en: "Adding a phosphate takes the molecule out of the simple lipids entirely and into the phosphoacylglycerols, which have a polar ionizable head.", cn: "加上磷酸就完全脱离了简单脂质，进入磷酸酰基甘油的范畴，那类分子有可电离的极性头基。" },
        2: { en: "The amide bond is the signature of ceramide, where the fatty acid attaches to sphingosine's amino group. A wax is a plain ester.", cn: "酰胺键是神经酰胺的标志，那里脂肪酸连在鞘氨醇的氨基上。蜡则是普通的酯。" },
        3: { en: "Sphingosine is the backbone of the sphingolipids, not of waxes; waxes contain no nitrogen-bearing backbone at all.", cn: "鞘氨醇是鞘脂类的骨架，不是蜡的骨架；蜡完全不含带氮的骨架。" }
      },
      why_en: "Both classes are pure fatty-acid esters, but they differ in which alcohol is esterified: glycerol in an acylglycerol, a higher long-chain alcohol in a wax. The book's beeswax example, myricyl palmitate, is a C30 myricyl alcohol esterified to the C16 acyl group of palmitic acid.",
      why_cn: "两类都是纯粹的脂肪酸酯，区别在于被酯化的是哪种醇：酰基甘油用的是甘油，蜡用的是高级长链醇。教材举的蜂蜡例子——蜂花酯棕榈酸酯——就是C30的蜂花醇与棕榈酸的C16酰基成酯。"
    },
    {
      type: 'mcq',
      q_en: "Which enzymes does the book say CAN cleave a wax?",
      q_cn: "教材指出哪一类酶能够裂解蜡？",
      options: [
        "Cerases — specific hydrolases of plants and microorganisms",
        "Lipases, the same hydrolases that split acylglycerols",
        "Phospholipases",
        "None; waxes are so stable that no enzyme attacks them and they break down only chemically"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-2-1', 2: '8-4-2-1' },
      optionNotes: {
        1: { en: "Lipases split acylglycerols into glycerol and free fatty acids, but they do NOT attack waxes — which is exactly why waxes are indigestible for animals.", cn: "脂肪酶把酰基甘油裂解为甘油和游离脂肪酸，但并不攻击蜡——这正是动物无法消化蜡的原因。" },
        2: { en: "Phospholipases act on phospholipids, a complex-lipid class; the book does not connect them to waxes.", cn: "磷脂酶作用于磷脂这一复合脂质类别；教材并未把它们与蜡联系起来。" },
        3: { en: "Too absolute. Waxes are very stable to hydrolysis and resist animal lipases, but plants and microorganisms do have an enzyme for them: cerases.", cn: "说得太绝对。蜡确实对水解非常稳定、能抵抗动物脂肪酶，但植物和微生物确实有对付它的酶：蜡酶（cerase）。" }
      },
      why_en: "The book pairs a negative with a positive: animals cannot digest waxes because lipases do not attack them, but cerases — specific hydrolases found in plants and microorganisms — can cleave them. The digestibility statement is about which enzyme is available, not about the ester bond being unbreakable.",
      why_cn: "教材是一正一反地讲的：动物消化不了蜡，因为脂肪酶不攻击它；但植物和微生物特有的水解酶——蜡酶——可以裂解它。所谓不可消化，讲的是有没有相应的酶，而不是酯键本身不可断裂。"
    },
    {
      type: 'short',
      q_en: "Give the melting-point range the book states for natural waxes, and explain the protective biological function that follows from their solubility behaviour.",
      q_cn: "写出教材给出的天然蜡熔点范围，并解释由其溶解性所决定的保护性生物学功能。",
      accept: ["50", "85", "insoluble", "desiccation", "protective", "leaves", "不溶", "脱水", "保护", "叶"],
      answer_en: "Natural waxes melt fairly high, typically 50-85 degrees C. Because they are completely insoluble in water and very stable to hydrolysis, they serve as a protective coat: they guard against desiccation and reinforce the surface of cells, organs and tissues — forming the protective layer on plant leaves and fruit, and appearing in animals as lanolin, beeswax and spermaceti.",
      answer_cn: "天然蜡熔点相当高，通常为50-85摄氏度。由于完全不溶于水、对水解也非常稳定，它们充当保护层：防止脱水，并加固细胞、器官和组织的表面——在植物上形成叶片和果实表面的保护层，在动物中则有羊毛脂、蜂蜡和鲸蜡等例子。"
    }
  ],

  '8-2-3': [
    {
      type: 'mcq',
      q_en: "What is the difference between MGDG and DGDG, per the book's figure?",
      q_cn: "根据教材的图示，MGDG与DGDG的区别是什么？",
      options: [
        "The number of galactose units in the head group — one in MGDG, two stacked in DGDG",
        "The number of acyl chains — one in MGDG, two in DGDG",
        "DGDG carries a sulfoquinovose unit as its second sugar",
        "MGDG carries glucose while DGDG carries galactose"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The mono-/di- prefix counts the galactose units, not the acyl chains. Both compounds are DIACYLglycerols — that is what the 'diacylglycerol' part of both names says.", cn: "mono-/di-这个前缀数的是半乳糖单元，不是酰基链。两者都是二酰基甘油——名字里的diacylglycerol正是这个意思。" },
        2: { en: "The sulfoquinovose head group belongs to the third named compound, SL (sulfoquinovosyldiacylglycerol), drawn with a CH2-SO3(-) group.", cn: "磺基奎诺糖头基属于第三种化合物SL（磺基奎诺糖基二酰基甘油），图中画作CH₂-SO₃⁻基团。" },
        3: { en: "Both are galactose-based: monogalactosyl- and digalactosyl-diacylglycerol. The sugar type is the same, only the number differs.", cn: "两者都以半乳糖为基础：单半乳糖基和双半乳糖基二酰基甘油。糖的种类相同，只是数目不同。" }
      },
      why_en: "The three named glycoacylglycerols differ only in the head group carried on the same diacylglycerol backbone: one galactose (MGDG), two stacked galactoses (DGDG), or a sulfoquinovose written as CH2-SO3(-) (SL).",
      why_cn: "这三种糖酰基甘油的骨架同样是二酰基甘油，区别只在头基：一个半乳糖（MGDG）、两个叠置的半乳糖（DGDG），或一个写作CH₂-SO₃⁻的磺基奎诺糖（SL）。"
    },
    {
      type: 'mcq',
      q_en: "Which membrane does the book name as the home of the glycoacylglycerols?",
      q_cn: "教材指出糖酰基甘油主要存在于哪种膜中？",
      options: [
        "The thylakoid membranes inside chloroplasts, where the photosynthetic apparatus sits",
        "The myelin sheaths of axons",
        "The plasma membrane of brain cells, alongside the gangliosides",
        "The membrane of the adipocyte fat droplet"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-3-3', 2: '8-2-3-4', 3: '8-2-2-1' },
      optionNotes: {
        1: { en: "Myelin is where sphingomyelin is concentrated — a phosphorus-containing sphingolipid, not a sugar-headed glycerolipid.", cn: "髓鞘是鞘磷脂富集的地方——那是含磷的鞘脂，不是带糖头基的甘油脂。" },
        2: { en: "The nerve/brain cell membranes are the home of the glycosphingolipids (cerebrosides, gangliosides); the glycoacylglycerols are plant lipids.", cn: "神经和脑组织的细胞膜是糖鞘脂（脑苷脂、神经节苷脂）的所在；糖酰基甘油则是植物脂质。" },
        3: { en: "Adipose tissue stores triacylglycerol as the fat depot; that is a storage lipid, not a membrane lipid.", cn: "脂肪组织以三酰基甘油作为脂肪库储存；那是储存脂质，不是膜脂。" }
      },
      why_en: "Glycoacylglycerols are the main lipid component of PLANT membranes, and specifically of the chloroplast thylakoid membranes that house the photosynthetic apparatus — which is why all three named examples (MGDG, DGDG, SL) carry highly unsaturated 16:3/18:3 chains.",
      why_cn: "糖酰基甘油是植物膜的主要脂质成分，尤其是叶绿体中承载光合装置的类囊体膜——这也是三个例子（MGDG、DGDG、SL）都带有16:3/18:3这类高度不饱和链的背景。"
    },
    {
      type: 'short',
      q_en: "The book's figure shows each of MGDG, DGDG and SL in two structural variants. What differs between the two variants of DGDG?",
      q_cn: "教材的图为MGDG、DGDG、SL各画了两种结构变体。DGDG的两种变体之间差别在哪里？",
      accept: ["16:0", "18:3", "swapped", "position", "acyl", "对调", "位置", "酰基"],
      answer_en: "Not the head group — both variants carry the same two stacked galactose units. What differs is which fatty acid occupies which of the two acyl positions on the glycerol backbone: one variant has 16:0 and 18:3, the other has the same two chains with their positions swapped, 18:3 and 16:0. SL is drawn the same way; MGDG's two variants instead differ as 16:3/18:3 versus 18:3/18:3.",
      answer_cn: "差别不在头基——两种变体都带同样的两个叠置半乳糖。不同的是哪条脂肪酸占据甘油骨架上的哪个酰基位置：一种是16:0和18:3，另一种是同样两条链位置对调，即18:3和16:0。SL的画法与此相同；MGDG的两种变体则是16:3/18:3与18:3/18:3之别。"
    }
  ],

  '8-2-3-2': [
    {
      type: 'mcq',
      q_en: "The book calls phosphatidic acid the simplest phospholipid and the precursor of all the others. What is it built from?",
      q_cn: "教材称磷脂酸是最简单的磷脂，也是其他所有磷脂的前体。它由什么构成？",
      options: [
        "Glycerol esterified with two fatty acids and, at the third position, with phosphoric acid",
        "Glycerol esterified with three fatty acids",
        "Sphingosine bearing a fatty acid and a phosphorylcholine group",
        "Glycerol bearing two fatty acids and a galactose head group"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-2-1', 2: '8-2-3-3', 3: '8-2-3' },
      optionNotes: {
        1: { en: "Three fatty acids on glycerol is a triacylglycerol — a neutral lipid with no ionizable group at all, and therefore no polar head.", cn: "甘油上接三条脂肪酸就是三酰基甘油——一种完全没有可电离基团、因而没有极性头基的中性脂质。" },
        2: { en: "That is sphingomyelin. It resembles phosphatidylcholine closely, but its backbone is sphingosine and the fatty acid hangs on an amide bond.", cn: "那是鞘磷脂。它与磷脂酰胆碱非常相似，但骨架是鞘氨醇，脂肪酸通过酰胺键连接。" },
        3: { en: "A sugar head on a diacylglycerol is a glycoacylglycerol such as MGDG — a plant membrane lipid with no phosphate.", cn: "二酰基甘油上接糖头基就是MGDG这类糖酰基甘油——植物膜脂，不含磷酸。" }
      },
      why_en: "Phosphatidic acid is the minimal phospholipid: glycerol with two acyl chains and one phosphate. Every other phospholipid in the book's table is phosphatidic acid plus a group R hung on that phosphate by a phosphoester bond, which is why they differ from one another only in R.",
      why_cn: "磷脂酸是最小的磷脂：甘油+两条酰基链+一个磷酸。教材表中其他磷脂都是在这个磷酸上再以磷酸酯键挂一个R基团，所以它们彼此之间的差别只在R。"
    },
    {
      type: 'mcq',
      q_en: "In natural phospholipids, which glycerol position carries the unsaturated fatty acid, as a rule?",
      q_cn: "在天然磷脂中，通常哪一个甘油位置连接不饱和脂肪酸？",
      options: [
        "Position 2 carries the unsaturated acid, position 1 the saturated one",
        "Position 1 carries the unsaturated acid, position 2 the saturated one",
        "Both acyl positions carry saturated fatty acids as a rule",
        "Position 3 carries the unsaturated acid"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two positions are swapped here. The book's rule is unsaturated at 2, saturated at 1.", cn: "这里把两个位置弄反了。教材的规律是2位不饱和、1位饱和。" },
        2: { en: "That would drop the rule entirely. The book states a systematic asymmetry between the two acyl positions, not a uniform saturation.", cn: "这等于把规律取消了。教材说的是两个酰基位置之间存在系统性的不对称，而不是都饱和。" },
        3: { en: "Position 3 is not an acyl position in a phospholipid at all — it is where the phosphate, and through it the head group R, is attached.", cn: "在磷脂中3位根本不是酰基位置——那里连的是磷酸，磷酸上再挂头基R。" }
      },
      why_en: "The glycerol backbone of a phospholipid is asymmetric by design: position 3 holds the phosphate and head group, position 1 a saturated fatty acid, and position 2 an unsaturated one. It is the two acyl chains together that make up the nonpolar hydrophobic tail.",
      why_cn: "磷脂的甘油骨架本身就是不对称的：3位是磷酸和头基，1位是饱和脂肪酸，2位是不饱和脂肪酸。构成非极性疏水尾部的正是这两条酰基链。"
    },
    {
      type: 'short',
      q_en: "Name the three head groups the book singles out as able to carry an electric charge at physiological pH, and say why that matters.",
      q_cn: "说出教材特别指出的、在生理pH下能带电荷的三个头基，并说明这一点为什么重要。",
      accept: ["choline", "ethanolamine", "serine", "charge", "membrane", "胆碱", "乙醇胺", "丝氨酸", "电荷", "膜"],
      answer_en: "Choline, ethanolamine and serine. The book's point is that the amphipathic character contributed by the bare acylglycerol part of the molecule is very weak — the main contribution comes from these functional groups, and the charge several of them carry at physiological pH plays a very significant role in how phospholipids fulfil their biological function in membranes.",
      answer_cn: "胆碱、乙醇胺和丝氨酸。教材的要点是：分子中裸露的酰基甘油部分所贡献的两亲性非常弱——主要贡献来自这些功能基团，而其中几个在生理pH下所带的电荷，对磷脂在生物膜中发挥功能起着非常重要的作用。"
    }
  ],

  '8-2-3-3': [
    {
      type: 'mcq',
      q_en: "Complete hydrolysis of a sphingomyelin yields which set of components?",
      q_cn: "鞘磷脂完全水解后得到下列哪一组组分？",
      options: [
        "One fatty acid, choline, phosphoric acid and sphingosine",
        "Glycerol, fatty acids, phosphoric acid and choline",
        "Sphingosine, fatty acids and carbohydrates",
        "Sphingosine, fatty acids, carbohydrates and sialic acid"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-3-2', 2: '8-2-3-4', 3: '8-2-3-4' },
      optionNotes: {
        1: { en: "Same head group, wrong backbone: glycerol + fatty acids + phosphate + choline is phosphatidylcholine. That is precisely the molecule sphingomyelin is said to resemble.", cn: "头基相同、骨架不对：甘油+脂肪酸+磷酸+胆碱是磷脂酰胆碱。教材说鞘磷脂与之非常相似，指的正是这一点。" },
        2: { en: "That is a cerebroside — a glycosphingolipid, with a sugar where sphingomyelin has phosphate plus choline, and no phosphoester group at all.", cn: "那是脑苷脂——一种糖鞘脂，鞘磷脂上磷酸+胆碱的位置换成了糖，且完全不含磷酸酯基团。" },
        3: { en: "The extra sialic acid marks a ganglioside, the most elaborate of the glycosphingolipids.", cn: "多出的唾液酸标志着神经节苷脂，是糖鞘脂中最复杂的一类。" }
      },
      why_en: "Sphingomyelin is ceramide (sphingosine + fatty acid on the amino group) with a phosphorylcholine esterified to the terminal hydroxyl, so complete hydrolysis returns exactly four things: fatty acid, choline, phosphoric acid and sphingosine.",
      why_cn: "鞘磷脂是神经酰胺（鞘氨醇+连在氨基上的脂肪酸）再在末端羟基上酯化一个磷酸胆碱，所以完全水解正好得到四样东西：脂肪酸、胆碱、磷酸和鞘氨醇。"
    },
    {
      type: 'mcq',
      q_en: "The book says sphingomyelin closely resembles phosphatidylcholine. What exactly is shared, and what is not?",
      q_cn: "教材说鞘磷脂与磷脂酰胆碱非常相似。究竟哪些相同、哪些不同？",
      options: [
        "Both end in a phosphorylcholine head and both are amphipathic; the backbone differs — sphingosine versus glycerol",
        "Both are built on glycerol; they differ only in the head group, choline versus ethanolamine",
        "Both are built on sphingosine; they differ in that one carries a sugar head",
        "They share the backbone, but only phosphatidylcholine is amphipathic"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-3-2', 2: '8-2-3-4' },
      optionNotes: {
        1: { en: "Choline versus ethanolamine is what separates phosphatidylcholine from phosphatidylethanolamine — two phosphoacylglycerols, both on glycerol. Sphingomyelin is not on glycerol at all.", cn: "胆碱与乙醇胺之别区分的是磷脂酰胆碱和磷脂酰乙醇胺——两者都是以甘油为骨架的磷酸酰基甘油。而鞘磷脂根本不以甘油为骨架。" },
        2: { en: "A sugar head instead of phosphorylcholine gives a cerebroside, not phosphatidylcholine; and phosphatidylcholine's backbone is glycerol, not sphingosine.", cn: "把磷酸胆碱换成糖头基得到的是脑苷脂，不是磷脂酰胆碱；而且磷脂酰胆碱的骨架是甘油，不是鞘氨醇。" },
        3: { en: "Both molecules are amphipathic — that is one of the properties the book says they share, not a difference.", cn: "两者都是两亲性的——这正是教材说它们相似之处，而非区别。" }
      },
      why_en: "The resemblance is functional and physicochemical rather than genealogical: a different backbone (sphingosine, with the fatty acid on an amide bond) carrying the same phosphorylcholine head produces a molecule of very similar shape, polarity and membrane behaviour.",
      why_cn: "这种相似是功能和理化性质上的，而不是同源关系：骨架不同（鞘氨醇，脂肪酸以酰胺键相连），但头基同为磷酸胆碱，于是形成一个形状、极性和膜行为都非常接近的分子。"
    },
    {
      type: 'short',
      q_en: "Sphingosine carries two hydroxyl groups, yet the fatty acid is esterified to neither. Where does it attach, through what kind of bond, and what is the product called?",
      q_cn: "鞘氨醇带有两个羟基，但脂肪酸并没有酯化在其中任何一个上。它连在哪里？通过什么键？产物叫什么？",
      accept: ["amino", "amide", "ceramide", "N-acyl", "氨基", "酰胺", "神经酰胺"],
      answer_en: "The fatty acid attaches to sphingosine's AMINO group through an amide bond, not to either hydroxyl through an ester bond. The product is ceramide, i.e. N-acylsphingosine. One hydroxyl is then still free for the next step: attaching phosphorylcholine to the primary (terminal) hydroxyl by an ester bond gives sphingomyelin.",
      answer_cn: "脂肪酸连在鞘氨醇的氨基上，形成酰胺键，而不是与任一羟基成酯。产物是神经酰胺（ceramide），即N-酰基鞘氨醇。此时仍有羟基空着，可进行下一步：在伯（末端）羟基上以酯键接上磷酸胆碱，即得鞘磷脂。"
    }
  ],

  '8-2-3-4': [
    {
      type: 'mcq',
      q_en: "About 25% of brain cerebrosides are also called sulfolipids or sulfatides. What structural feature earns them that name?",
      q_cn: "约25%的脑内脑苷脂又被称为硫脂或硫苷脂。是什么结构特征使它们得名？",
      options: [
        "A sulfate group bound to carbon 3 of the sugar residue, usually galactose",
        "A sulfate group bound to carbon 3 of the sphingosine backbone",
        "A phosphate group on the sugar, replacing the usual ester",
        "A sialic-acid residue attached to the sugar chain"
      ],
      answer: 0,
      optionRefs: { 2: '8-2-3-2' },
      optionNotes: {
        1: { en: "The substitution sits on the sugar, not the backbone. Carbon 3 in the name refers to the sugar residue that is O-glycosidically attached to ceramide.", cn: "取代基在糖上，不在骨架上。名称中的3号碳指的是以O-糖苷键连在神经酰胺上的那个糖残基的碳。" },
        2: { en: "A phosphoester is exactly what glycosphingolipids do NOT have — the book stresses they are amphipathic despite containing no phosphoester group at all.", cn: "磷酸酯恰恰是糖鞘脂所没有的——教材强调它们完全不含磷酸酯基团却仍然是两亲性的。" },
        3: { en: "At least one sialic-acid residue in the oligosaccharide chain is what defines a GANGLIOSIDE, not a sulfatide.", cn: "寡糖链中至少含一个唾液酸残基是神经节苷脂的定义，而不是硫苷脂。" }
      },
      why_en: "A cerebroside is the simplest glycosphingolipid, ceramide plus a single sugar. Putting a sulfate on carbon 3 of that sugar — usually galactose — gives the sulfatide, and the book puts this at about 25% of brain cerebrosides.",
      why_cn: "脑苷脂是最简单的糖鞘脂：神经酰胺加一个糖。在这个糖（通常是半乳糖）的3号碳上带一个硫酸基，就成为硫苷脂；教材给出的比例约为脑内脑苷脂的25%。"
    },
    {
      type: 'mcq',
      q_en: "Which role does the book assign to the glycolipids in the membrane?",
      q_cn: "教材赋予糖脂在膜中的作用是什么？",
      options: [
        "They significantly increase membrane rigidity and, with the glycoproteins, act as cell-surface markers and recognition sites",
        "They are the main storage form of carbon and energy in animal cells",
        "They emulsify fats so that lipid digestion can proceed",
        "They are the main lipid of the thylakoid membrane and support photosynthesis"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-2-1', 2: '8-2-4-3', 3: '8-2-3' },
      optionNotes: {
        1: { en: "The fat depot of adipose tissue is triacylglycerol; glycolipids are membrane surface molecules, not a store.", cn: "脂肪组织的脂肪库是三酰基甘油；糖脂是膜表面分子，不是储能物质。" },
        2: { en: "Emulsifying agents in lipid digestion are the bile acids, a steroid class.", cn: "脂质消化中的乳化剂是胆汁酸，属于类固醇。" },
        3: { en: "That is the glycoacylglycerols MGDG/DGDG/SL, sugar-headed GLYCEROlipids of plants — not the sphingosine-based glycolipids of nerve membranes.", cn: "那是MGDG/DGDG/SL这类糖酰基甘油，是植物中带糖头基的甘油脂——不是神经膜中以鞘氨醇为骨架的糖脂。" }
      },
      why_en: "The book gives glycolipids a structural role and an informational one: they stiffen the membrane, and their sugar chains serve as antigenic markers, markers of differentiation state, participants in growth regulation and malignant transformation, and binding sites for bacterial toxins (tetanus and cholera toxin both bind ganglioside GM1), glycoprotein hormones, interferons and viruses.",
      why_cn: "教材给糖脂两方面的角色：结构上使膜变硬；信息上，其糖链充当抗原性标志、分化程度标志，参与细胞生长调控乃至恶性转化，并作为细菌毒素（破伤风毒素和霍乱毒素都结合神经节苷脂GM1）、糖蛋白激素、干扰素和病毒的结合位点。"
    },
    {
      type: 'short',
      q_en: "Describe the composition of ganglioside GM1 as the book's labelled structure gives it, and say what makes it a ganglioside rather than a complex cerebroside.",
      q_cn: "按教材标注的结构描述神经节苷脂GM1的组成，并说明是什么使它成为神经节苷脂而不是复杂的脑苷脂。",
      accept: ["sialic", "neuraminic", "five", "5", "Gal", "GalNAc", "Glc", "oligosaccharide", "唾液酸", "寡糖"],
      answer_en: "GM1 carries five saccharide units on an N-acylsphingosine (ceramide) core — Gal-GalNAc-Gal-Glc- attached to the ceramide, with a sialyl branch hanging off the GalNAc. Complex cerebrosides can also carry an oligosaccharide chain of 2-10 residues, so chain length alone does not decide the class: what makes GM1 a ganglioside is that its chain always includes at least one sialic-acid (N-acetylneuraminic acid) residue.",
      answer_cn: "GM1在N-酰基鞘氨醇（神经酰胺）核心上带有5个糖单元——Gal-GalNAc-Gal-Glc-依次连在神经酰胺上，并在GalNAc上分出一个唾液酸支链。复杂的脑苷脂同样可以带2-10个残基的寡糖链，所以链长本身并不决定类别：GM1之所以是神经节苷脂，在于其糖链中必定至少含一个唾液酸（N-乙酰神经氨酸）残基。"
    }
  ],

  '8-2-4-1': [
    {
      type: 'mcq',
      q_en: "In the book's isoprenoid biosynthetic classification, squalene (C30) and digeranyl-PP (C20) are built at the same stage of the chain. How does the book say each is made?",
      q_cn: "在教材的类异戊二烯生物合成分类中，角鲨烯（C30）与双牻牛儿基焦磷酸（C20）处于链条的同一阶段。教材说它们各自如何生成？",
      options: [
        "Squalene from two farnesyl-PP units; digeranyl-PP from farnesyl-PP plus one more IPP",
        "Squalene from farnesyl-PP plus one more IPP; digeranyl-PP from two farnesyl-PP units",
        "Squalene from two digeranyl-PP units; digeranyl-PP from two geranyl-PP units",
        "Both from two geranyl-PP units, differing only in how they cyclise"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two constructions are swapped. Adding one C5 IPP to a C15 farnesyl-PP gives C20; joining two C15 units gives C30.", cn: "两种构建方式弄反了。C15的farnesyl-PP加一个C5的IPP得C20；两个C15单元相连才得C30。" },
        2: { en: "Two digeranyl-PP (C20) units give phytoene, C40 — the tetraterpene stage, one step beyond squalene.", cn: "两个C20的digeranyl-PP相连得到的是C40的八氢番茄红素（phytoene），即四萜阶段，比角鲨烯还要靠后一步。" },
        3: { en: "Geranyl-PP is the C10 monoterpene stage; two of them could not give either a C20 or a C30 compound by the book's own arithmetic, and the book builds the chain by successive IPP additions, not by cyclisation.", cn: "Geranyl-PP是C10的单萜阶段；按教材自己的算术，两个C10既给不出C20也给不出C30，而且教材是靠逐次加入IPP来延长链条，不是靠环化。" }
      },
      why_en: "The classification is strictly biosynthetic and additive in C5 units: IPP/DMAPP (C5) -> geranyl-PP (C10) -> farnesyl-PP (C15) -> digeranyl-PP (C20), with two branch points where two identical units join head to head instead: two farnesyl-PP give squalene (C30), two digeranyl-PP give phytoene (C40).",
      why_cn: "这一分类严格按生物合成、以C5为单位递加：IPP/DMAPP（C5）→geranyl-PP（C10）→farnesyl-PP（C15）→digeranyl-PP（C20）；另有两个分支点是两个相同单元首尾相连：两个farnesyl-PP给出角鲨烯（C30），两个digeranyl-PP给出phytoene（C40）。"
    },
    {
      type: 'mcq',
      q_en: "Where does the book say monoterpenes, sesquiterpenes and diterpenes are commonly encountered?",
      q_cn: "教材说单萜、倍半萜和二萜常见于何处？",
      options: [
        "In fragrant essential oils, balsams and resins",
        "In the myelin sheaths of axons",
        "As the main lipid component of thylakoid membranes",
        "In the fat depot of adipose tissue"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-3-3', 2: '8-2-3', 3: '8-2-2-1' },
      optionNotes: {
        1: { en: "Myelin is where sphingomyelin concentrates — a complex lipid, not a terpene.", cn: "髓鞘是鞘磷脂富集之处——那是复合脂质，不是萜类。" },
        2: { en: "Thylakoid membranes are dominated by the glycoacylglycerols MGDG, DGDG and SL.", cn: "类囊体膜以MGDG、DGDG、SL这几种糖酰基甘油为主。" },
        3: { en: "The fat depot stores triacylglycerol, a simple lipid — the book's storage form of carbon and energy.", cn: "脂肪库储存的是三酰基甘油这种简单脂质——教材所说的碳与能量的储存形式。" }
      },
      why_en: "The book's placement of the smaller terpenes is ecological rather than metabolic: the C10, C15 and C20 members are the volatile, aromatic constituents of essential oils, balsams and resins, while the diterpene group also contains phytol, which is where the biochemically important thread continues.",
      why_cn: "教材对较小萜类的定位偏生态而非代谢：C10、C15、C20这几类是精油、香脂和树脂中挥发性的芳香成分；而二萜这一组中还有植醇（phytol），生化上重要的线索由此继续。"
    },
    {
      type: 'short',
      q_en: "What principle does the book use to name and subdivide the terpenes, and what is the monomer unit they all share?",
      q_cn: "教材依据什么原则给萜类命名并划分亚类？它们共有的单体单元是什么？",
      accept: ["biosynthesis", "isoprene", "isoprenoid", "C5", "carbon", "生物合成", "异戊二烯", "碳"],
      answer_en: "The common basis of all terpenes is the isoprene unit, which is why they are also called isoprenoids. Their nomenclature and their division into subgroups follow biosynthesis strictly: each subgroup name (hemi-, mono-, sesqui-, di-, tri-, tetraterpene) corresponds to a defined stage of the biosynthetic chain and hence to a defined carbon count, C5, C10, C15, C20, C30, C40.",
      answer_cn: "所有萜类的共同基础是异戊二烯单元，因此它们又叫类异戊二烯。其命名和亚类划分严格依照生物合成：每个亚类名称（半萜、单萜、倍半萜、二萜、三萜、四萜）对应生物合成链条上一个确定的阶段，也就对应确定的碳数C5、C10、C15、C20、C30、C40。"
    }
  ],

  '8-2-4-2': [
    {
      type: 'mcq',
      q_en: "Which ring system does the book draw for vitamin E, and which for coenzyme Q?",
      q_cn: "教材为维生素E和辅酶Q各画的是什么环系？",
      options: [
        "Vitamin E: a chromanol (benzopyran) ring; coenzyme Q: a substituted benzoquinone ring",
        "Both are naphthoquinone ring systems",
        "Vitamin E: a steran four-ring skeleton; coenzyme Q: a chromanol ring",
        "Vitamin E: a cyclohexene ring on a polyene chain; coenzyme Q: a benzoquinone ring"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-4-1', 2: '8-2-4-3' },
      optionNotes: {
        1: { en: "The naphthoquinone ring belongs to vitamins K1 (phylloquinone, n=4) and K2 (menaquinone, n=8), the other members of this phytol-chain family.", cn: "萘醌环属于维生素K1（叶绿醌，n=4）和K2（甲萘醌，n=8），是这个植醇链家族的另外两个成员。" },
        2: { en: "The steran four-ring skeleton is the shared basis of the steroids, an entirely different derived-lipid group.", cn: "四环的甾烷骨架是类固醇的共同基础，属于完全不同的衍生脂质类别。" },
        3: { en: "The coenzyme Q half is right, but a cyclohexene ring carrying a polyene chain is how the book draws RETINOL, not vitamin E.", cn: "辅酶Q那半说对了，但「环己烯环+多烯链」是教材画视黄醇的方式，不是维生素E。" }
      },
      why_en: "The book distinguishes these terpenoid-derived compounds by their head group, since all of them carry a similar isoprenoid tail: a chromanol head for vitamin E, a benzoquinone head for coenzyme Q (n = 6-8 isoprenoid units), a naphthoquinone head for the K vitamins.",
      why_cn: "由于这几个类萜化合物都带相似的类异戊二烯尾链，教材是靠头部环系来区分它们的：维生素E是苯并吡喃（chromanol）头，辅酶Q是苯醌头（n=6-8个类异戊二烯单元），K族维生素是萘醌头。"
    },
    {
      type: 'short',
      q_en: "Describe the structural parts the book draws for retinol, and state why this molecule is the exception within this group.",
      q_cn: "描述教材为视黄醇所画的结构组成部分，并说明这个分子为什么是本组中的例外。",
      accept: ["cyclohexene", "polyene", "primary alcohol", "CH2OH", "carotene", "tetraterpene", "环己烯", "多烯", "伯醇", "胡萝卜素"],
      answer_en: "Retinol is drawn as a cyclohexene ring bearing methyl substituents, connected to a polyene chain that terminates in a primary alcohol group (-CH2OH). Structurally it belongs with the terpenoid vitamins, but the book flags it explicitly as the exception: unlike vitamins K1/K2, vitamin E and coenzyme Q, whose hydrophobic chains all derive from phytol, retinol's precursor is the tetraterpene carotene.",
      answer_cn: "视黄醇被画成一个带甲基取代基的环己烯环，连着一条多烯链，末端是伯醇基（-CH₂OH）。从结构上它属于类萜维生素，但教材明确指出它是例外：维生素K1/K2、维生素E和辅酶Q的疏水链都源自植醇，而视黄醇的前体是四萜类的胡萝卜素。"
    }
  ],

  '8-2-4-3': [
    {
      type: 'mcq',
      q_en: "Among the steroid functions the book lists, what job do the bile acids do?",
      q_cn: "在教材列举的类固醇功能中，胆汁酸承担的是什么任务？",
      options: [
        "They act as emulsifying agents, and so play a significant role in lipid digestion",
        "They transport dietary fatty acids through lymph and blood as chylomicrons",
        "They form the fat depot, the storage form of carbon and energy",
        "They act as accessory light-harvesting pigments"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-2-1', 2: '8-2-2-1', 3: '8-2-4-6' },
      optionNotes: {
        1: { en: "Chylomicrons are lipoprotein particles carrying triacylglycerol, not a steroid function.", cn: "乳糜微粒是携带三酰基甘油的脂蛋白颗粒，不属于类固醇的功能。" },
        2: { en: "The fat depot in adipose tissue is triacylglycerol; steroids are not an energy store in this book's account.", cn: "脂肪组织中的脂肪库是三酰基甘油；在本教材的叙述中，类固醇不是储能物质。" },
        3: { en: "Accessory light-harvesting pigments are the carotenoids, the tetraterpene branch of the derived lipids.", cn: "辅助捕光色素是类胡萝卜素，属于衍生脂质中的四萜分支。" }
      },
      why_en: "The book uses the human body to show how far one skeleton can be repurposed: the same steran framework serves as sex hormones, as bile acids that emulsify fat for digestion, and as cholesterol, a membrane component whose esters carry lipids across membranes and through the blood.",
      why_cn: "教材用人体来展示同一个骨架能被改造到什么程度：同样的甾烷骨架既充当性激素，又充当消化时乳化脂肪的胆汁酸，还充当胆固醇——一种膜组分，其酯类还负责在膜之间和血流中运输脂质。"
    },
    {
      type: 'mcq',
      q_en: "How does the book describe the steran skeleton itself?",
      q_cn: "教材如何描述甾烷（steran）骨架本身？",
      options: [
        "Four fused alicyclic rings — three six-membered plus one five-membered — with carbons numbered 1 to 17",
        "Four fused six-membered rings, numbered 1 to 20",
        "A two-ring naphthoquinone system carrying a polyprenyl side chain",
        "A chromanol ring carrying a saturated isoprenoid side chain"
      ],
      answer: 0,
      optionRefs: { 2: '8-2-4-1', 3: '8-2-4-2' },
      optionNotes: {
        1: { en: "One of the four rings is five-membered, which is why the systematic name is perhydrocyclopentanophenanthrene; and the book's diagram numbers the carbons only to 17.", cn: "四个环中有一个是五元环，这正是系统名perhydrocyclopentanophenanthrene（全氢环戊烷并菲）的由来；而且教材图中的碳只编号到17。" },
        2: { en: "The naphthoquinone plus polyprenyl chain is vitamin K1/K2 — a terpenoid quinone, not a steroid.", cn: "萘醌加多聚异戊烯链是维生素K1/K2——类萜醌，不是类固醇。" },
        3: { en: "The chromanol ring with a saturated isoprenoid chain is vitamin E.", cn: "带饱和类异戊二烯链的苯并吡喃环是维生素E。" }
      },
      why_en: "Steran, systematically perhydrocyclopentanophenanthrene, is the common structural basis of every steroid: three six-membered rings fused to one five-membered ring, numbered C1-C17. All steroid diversity then comes from desaturation and from oxygen-containing substituents placed on that fixed frame.",
      why_cn: "甾烷（系统名全氢环戊烷并菲）是所有类固醇的共同结构基础：三个六元环与一个五元环稠合，碳编号为C1-C17。类固醇的全部多样性都来自这个固定骨架上的去饱和以及含氧取代基。"
    },
    {
      type: 'short',
      q_en: "What is squalene chemically, how is it assembled, and why does the book introduce it at this point?",
      q_cn: "角鲨烯在化学上是什么？如何组装而成？教材为什么在此处引入它？",
      accept: ["C30", "triterpene", "farnesyl", "two", "precursor", "steroid", "hydrocarbon", "三萜", "前体", "类固醇"],
      answer_en: "Squalene is an unsaturated hydrocarbon of 30 carbons, formed by joining two farnesyl-PP (C15) units, and it is therefore the triterpene member of the isoprenoid series. The book introduces it here because it is an important precursor of the steroids — the steroid discussion then follows straight on from the triterpene paragraph, with no separate heading.",
      answer_cn: "角鲨烯是一种30碳的不饱和烃，由两个farnesyl-PP（C15）单元结合而成，因而是类异戊二烯系列中的三萜成员。教材在此引入它，是因为它是类固醇的重要前体——关于类固醇的讨论紧接着三萜这一段直接展开，中间并没有单独的小标题。"
    }
  ],

  '8-2-4-4': [
    {
      type: 'mcq',
      q_en: "Why does cholesterol contribute so significantly to the rigidity of a biological membrane, per the book?",
      q_cn: "根据教材，胆固醇为什么对生物膜的刚性贡献如此显著？",
      options: [
        "Because the steroid skeleton it is built on is relatively inflexible",
        "Because its long unsaturated hydrocarbon tail packs tightly against the fatty acids",
        "Because its head group carries an electric charge at physiological pH",
        "Because membrane rigidity comes from the glycolipids, and cholesterol simply binds them"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-1-2', 2: '8-2-3-2', 3: '8-2-3-4' },
      optionNotes: {
        1: { en: "Unsaturation works the other way: double bonds LOWER the chemical stability and the melting point of a lipid. Cholesterol's C17 side chain is a saturated hydrocarbon chain of 8-10 carbons in any case.", cn: "不饱和的作用方向恰好相反：双键会降低脂质的化学稳定性和熔点。何况胆固醇C17上的侧链是8-10个碳的饱和烃链。" },
        2: { en: "Charged head groups at physiological pH are the phospholipid ones — choline, ethanolamine, serine. A sterol's C3 substituent is a plain hydroxyl.", cn: "在生理pH下带电荷的头基是磷脂的那些——胆碱、乙醇胺、丝氨酸。甾醇C3上的取代基只是一个羟基。" },
        3: { en: "Glycolipids do also increase membrane rigidity, but that is a separate statement about a separate class; the book credits cholesterol's own inflexible skeleton here, and puts its share at 0-40% of membrane lipids.", cn: "糖脂确实也能增加膜的刚性，但那是关于另一类物质的另一条陈述；教材在这里归因于胆固醇自身骨架的不易弯曲，并给出其占膜脂0-40%的比例。" }
      },
      why_en: "This is the structural counterpart to the fatty-acid rule: floppy hydrocarbon chains give a fluid membrane, and a fused four-ring steroid frame cannot flex, so wherever cholesterol inserts it stiffens its surroundings — up to 40% of the membrane lipid in some membrane types.",
      why_cn: "这与脂肪酸的规律正好互为映照：柔软的烃链使膜流动，而稠合的四环类固醇骨架无法弯折，所以胆固醇插到哪里就使那里变硬——在某些类型的膜中它可占膜脂的40%。"
    },
    {
      type: 'mcq',
      q_en: "The book names foxglove digitoxins, oleander/strophanthus strophanthins and ouabain, and potato/tomato solanines. What class are these?",
      q_cn: "教材点名了毛地黄的洋地黄毒苷、夹竹桃/毒毛旋花的毒毛旋花苷与哇巴因，以及马铃薯/番茄的茄碱。这些属于哪一类？",
      options: [
        "Secondary plant metabolites — cardiac-glycoside poisons (saponins and steroid alkaloids) and their aglycones",
        "The plant sterols stigmasterol, ergosterol and sitosterol",
        "Bile acids, the emulsifying steroids",
        "Xanthophylls, the oxidised carotene derivatives"
      ],
      answer: 0,
      optionRefs: { 2: '8-2-4-3', 3: '8-2-4-6' },
      optionNotes: {
        1: { en: "Stigmasterol, ergosterol and sitosterol are the plant STEROLS — sterol-class membrane compounds, listed by the book as a separate item from the poisons.", cn: "豆甾醇、麦角甾醇和谷甾醇是植物甾醇——属于甾醇类膜化合物，教材把它们与这些毒物分列为两项。" },
        2: { en: "Bile acids are animal steroids that emulsify fat for digestion, and the book derives them from cholesterol, not from plant secondary metabolism.", cn: "胆汁酸是动物类固醇，负责乳化脂肪以助消化；教材把它们归为胆固醇的衍生物，而非植物次生代谢产物。" },
        3: { en: "Xanthophylls are oxygen-bearing carotenoids, a tetraterpene branch — pigments, not steroid poisons.", cn: "叶黄素类是带氧的类胡萝卜素，属于四萜分支——是色素，不是类固醇毒物。" }
      },
      why_en: "The book traces one biosynthetic line from cholesterol out into plant chemistry: plant sterols on one side, and on the other the secondary metabolites — cardiac glycosides, i.e. saponins and steroid alkaloids, together with their aglycones (genins), of which digitoxigenin with its C17 lactone ring is the illustrated example.",
      why_cn: "教材从胆固醇引出一条通向植物化学的生物合成线：一边是植物甾醇，另一边是次生代谢产物——强心苷，即皂苷和甾体生物碱，连同它们的苷元（genin）；图示的例子就是带C17内酯环的洋地黄毒苷元。"
    },
    {
      type: 'short',
      q_en: "The book illustrates digitoxigenin rather than digitoxin. What is the relationship between the two, what is the general term for a molecule like digitoxigenin, and which plant does it come from?",
      q_cn: "教材画的是洋地黄毒苷元（digitoxigenin）而不是洋地黄毒苷（digitoxin）。二者是什么关系？像digitoxigenin这样的分子的通称是什么？它来自哪种植物？",
      accept: ["aglycone", "genin", "foxglove", "cardiac glycoside", "lactone", "苷元", "毛地黄", "强心苷", "内酯"],
      answer_en: "Digitoxigenin is the aglycone — the book also uses the term genin — of the foxglove cardiac glycoside digitoxin, i.e. the steroid part left when the sugar is removed. Structurally it is a 3-beta-hydroxy steroid carrying the characteristic unsaturated lactone ring at C17, the cardenolide-type aglycone.",
      answer_cn: "洋地黄毒苷元是毛地黄强心苷洋地黄毒苷的苷元（教材也用genin这个词），即去掉糖之后剩下的类固醇部分。结构上它是3β-羟基类固醇，C17上带有特征性的不饱和内酯环，属于强心甾（cardenolide）型苷元。"
    }
  ],

  '8-2-4-5': [
    {
      type: 'mcq',
      q_en: "In the book's 7-dehydrocholesterol -> cholecalciferol reaction, what exactly does the UV light do?",
      q_cn: "在教材的「7-脱氢胆固醇→胆钙化醇」反应中，紫外线究竟做了什么？",
      options: [
        "It opens ring B of the steroid skeleton between carbons 9 and 10, after which a double-bond rearrangement follows",
        "It opens ring A between carbons 3 and 4",
        "It cleaves off the 8-10 carbon side chain attached at C17",
        "It cleaves the molecule symmetrically into two halves"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-4-4', 2: '8-2-4-4', 3: '8-2-4-6' },
      optionNotes: {
        1: { en: "Carbon 3 is where a sterol carries its hydroxyl group; that hydroxyl is retained, and the book's figure opens ring B, not ring A.", cn: "3号碳是甾醇带羟基的位置；这个羟基被保留下来，教材的图打开的是B环，不是A环。" },
        2: { en: "The 8-10 carbon side chain at C17 plus the C3 hydroxyl is precisely what makes the molecule a sterol, and the figure keeps the side chain intact.", cn: "C17上8-10个碳的侧链加上C3羟基正是甾醇的判据，而图中侧链完好保留。" },
        3: { en: "Symmetric cleavage into two halves is what happens to beta-carotene when it yields two retinol molecules — a different reaction in a different lipid class.", cn: "对称裂解成两半是β-胡萝卜素生成两分子视黄醇时的情形——那是另一类脂质中的另一个反应。" }
      },
      why_en: "The book's mechanism is a photochemical ring opening, not a cleavage of the molecule: UV breaks ring B between C9 and C10 and a double-bond rearrangement follows, converting 7-dehydrocholesterol into cholecalciferol, vitamin D3.",
      why_cn: "教材给出的机制是光化学开环，而不是把分子切开：紫外线在C9-C10之间打开B环，随后发生双键重排，把7-脱氢胆固醇转变为胆钙化醇即维生素D3。"
    },
    {
      type: 'mcq',
      q_en: "Which parts of 7-dehydrocholesterol survive into cholecalciferol, per the book's diagram?",
      q_cn: "根据教材的图，7-脱氢胆固醇的哪些部分保留到了胆钙化醇中？",
      options: [
        "Rings A, C and D and the side chain; only ring B is opened",
        "All four rings stay closed and only a double bond shifts position",
        "Rings C and D are opened while A and B stay closed",
        "The ring system is destroyed entirely and only the side chain remains"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "If no ring opened, the product would still be a steroid in structure — but the book's whole point is that calciferols arise FROM steroid precursors without themselves having a steroid structure.", cn: "如果没有环被打开，产物在结构上仍是类固醇——而教材的要点恰恰是：钙化醇由类固醇前体生成，本身却不具有类固醇结构。" },
        2: { en: "The rings are lettered A-D in this particular figure, and it is B, between C9 and C10, that opens.", cn: "这幅图中的环标注为A-D，被打开的是B环，位置在C9-C10之间。" },
        3: { en: "Far too much. A single bond is broken; the carbon framework and the side chain are otherwise kept.", cn: "破坏得太多了。只断开一根键，碳骨架和侧链在其余部分都保留下来。" }
      },
      why_en: "This is exactly why vitamin D is counted among the steroid substances without being a steroid: three of the four rings, their lettering visible in this figure, and the side chain all survive the reaction, and only ring B is broken open by the UV photon.",
      why_cn: "这正是维生素D被算作类固醇物质却又不是类固醇的原因：四个环中的三个（本图中标注了字母）以及侧链都在反应中保留下来，只有B环被紫外光子打开。"
    }
  ],

  '8-2-4-6': [
    {
      type: 'mcq',
      q_en: "Which xanthophyll does the book name as the blue-green pigment of crustaceans?",
      q_cn: "教材把哪一种叶黄素类色素称为甲壳类动物的蓝绿色色素？",
      options: ["Astaxanthin", "Zeaxanthin", "Fucoxanthin", "Lycopene"],
      answer: 0,
      optionNotes: {
        1: { en: "Zeaxanthin (beta,beta-carotene-3,3'-diol) is the book's typical yellow pigment of higher-plant leaves.", cn: "玉米黄质（β,β-胡萝卜素-3,3'-二醇）是教材所说高等植物叶片中典型的黄色色素。" },
        2: { en: "Fucoxanthin is the brown-red pigment of brown seaweeds.", cn: "岩藻黄质是褐藻中的棕红色色素。" },
        3: { en: "Lycopene is not a xanthophyll at all: it is the main pigment of tomatoes and rosehips and the parent hydrocarbon from which all 400-plus described carotenoids can be derived.", cn: "番茄红素根本不属于叶黄素类：它是番茄和玫瑰果的主要色素，也是已描述的四百多种类胡萝卜素都可由之衍生的母体烃。" }
      },
      why_en: "The three xanthophylls the book names are each tied to an organism: zeaxanthin to higher-plant leaves, astaxanthin to crustaceans, fucoxanthin to brown seaweeds. All three are oxidised derivatives of beta-carotene, which is what puts them in the xanthophyll rather than the carotene group.",
      why_cn: "教材点名的三种叶黄素类色素各自对应一种生物：玉米黄质对应高等植物叶片，虾青素对应甲壳类，岩藻黄质对应褐藻。三者都是β-胡萝卜素的氧化衍生物，这正是它们被归入叶黄素类而非胡萝卜素类的原因。"
    },
    {
      type: 'mcq',
      q_en: "Isolated carotenoids are relatively unstable. What makes them so, and how does nature keep them intact?",
      q_cn: "分离出来的类胡萝卜素相对不稳定。原因是什么？自然界又如何保持它们完好？",
      options: [
        "The conjugated double-bond system makes them easily oxidised by atmospheric oxygen, especially in light; in vivo they are stabilised by binding to protein, as carotenoproteins",
        "Lipases hydrolyse them, and they are protected by being stored inside adipose tissue",
        "They are esterified with cholesterol, which protects the conjugated system",
        "They are packaged into chylomicrons, which shield them from oxygen"
      ],
      answer: 0,
      optionRefs: { 1: '8-2-2-1', 2: '8-2-4-4', 3: '8-2-2-1' },
      optionNotes: {
        1: { en: "Lipases hydrolyse acylglycerols; carotenoids are hydrocarbons or their oxygenated derivatives, with no ester bond to the glycerol backbone to cut.", cn: "脂肪酶水解的是酰基甘油；类胡萝卜素是烃或其含氧衍生物，没有可供切断的与甘油骨架相连的酯键。" },
        2: { en: "Cholesterol esters do exist and the book gives them a transport role, but the carotenoid stabilisation the book describes is protein binding, not esterification.", cn: "胆固醇酯确实存在，教材也赋予其运输功能，但教材所述类胡萝卜素的稳定方式是与蛋白结合，而不是酯化。" },
        3: { en: "Chylomicrons carry dietary fatty acids as triacylglycerol; the stabilising partner for carotenoids named here is a protein structure, giving carotenoproteins and, in blood serum, chromoproteins.", cn: "乳糜微粒运输的是以三酰基甘油形式存在的食源脂肪酸；此处所说使类胡萝卜素稳定的搭档是蛋白结构，形成类胡萝卜素蛋白，在血清中则为色蛋白。" }
      },
      why_en: "The same conjugated double-bond system that gives carotenoids their colour, their light-harvesting ability and their capacity to bind reactive oxygen species also makes them chemically vulnerable — which is why in their natural state they are almost always bound to a protein structure.",
      why_cn: "使类胡萝卜素显色、能捕光、能结合活性氧的那套共轭双键体系，同时也使它们在化学上很脆弱——所以在天然状态下它们几乎总是与某种蛋白结构结合在一起。"
    },
    {
      type: 'short',
      q_en: "How many carotenoids does the book say have been described, which single compound can they all be derived from, and which one is the most widespread in nature?",
      q_cn: "教材说已描述的类胡萝卜素有多少种？它们都可由哪一种化合物衍生而来？自然界中分布最广的又是哪一种？",
      accept: ["400", "lycopene", "tomato", "beta-carotene", "β-carotene", "rosehip", "番茄红素", "β-胡萝卜素", "番茄"],
      answer_en: "More than 400 carotenoids have been described, and all of them can be derived from lycopene, the main pigment of tomatoes and rosehips. The most widespread carotenoid in nature is beta-carotene, whose oxidised derivatives are the xanthophylls and whose symmetric enzymatic cleavage in animals yields two molecules of retinol.",
      answer_cn: "已描述的类胡萝卜素有四百多种，全部都可由番茄红素衍生而来——番茄红素是番茄和玫瑰果的主要色素。自然界中分布最广的是β-胡萝卜素，其氧化衍生物就是叶黄素类，而它在动物体内经对称酶促裂解可产生两分子视黄醇。"
    }
  ],

  '8-3-1': [
    {
      type: 'mcq',
      q_en: "A cell needs to turn a saturated fatty acid into an unsaturated one. Which system does the job, and where does it sit?",
      q_cn: "细胞要把一条饱和脂肪酸转变为不饱和脂肪酸，靠哪个系统？它位于何处？",
      options: [
        "The desaturase system, bound to the endoplasmic reticulum",
        "The elongase system in the mitochondrial matrix",
        "The basic de novo pathway in the cytoplasm",
        "Beta-oxidation in the mitochondrion"
      ],
      answer: 0,
      optionRefs: { 3: '8-4-4-2' },
      optionNotes: {
        1: { en: "The elongase system lengthens an existing chain beyond the 18-carbon cytoplasmic product; it adds carbons, it does not add double bonds.", cn: "延长酶系统把已有的链延长到超过胞质产物的18碳；它加的是碳，不是双键。" },
        2: { en: "The cytoplasmic pathway builds a SATURATED chain de novo, up to 18 carbons, i.e. as far as palmitic acid. It produces the substrate for desaturation, not the double bond.", cn: "胞质中的途径是从头合成饱和链，最多到18碳，即到棕榈酸为止。它提供去饱和的底物，而不产生双键。" },
        3: { en: "Beta-oxidation is catabolic — it breaks fatty acids down to acetyl-CoA, and the book cites it here only as one of the two sources of that acetyl-CoA.", cn: "β-氧化是分解代谢——它把脂肪酸降解为乙酰-CoA；教材在此提到它，只是作为乙酰-CoA的两个来源之一。" }
      },
      why_en: "The book splits fatty-acid biosynthesis across three compartments by function: the cytoplasm builds a saturated chain de novo up to 18 carbons, the mitochondrial matrix elongates it further, and the ER-bound desaturase system introduces the double bonds (and can also support further elongation).",
      why_cn: "教材按功能把脂肪酸生物合成分配到三个区室：胞质从头合成饱和链到18碳，线粒体基质进一步延长，而结合在内质网上的去饱和酶系统引入双键（并且也能支持进一步延长）。"
    },
    {
      type: 'mcq',
      q_en: "What does the book give as the two main sources of the acetyl-CoA used for de novo fatty-acid synthesis?",
      q_cn: "教材给出的、供从头合成脂肪酸使用的乙酰-CoA有哪两个主要来源？",
      options: [
        "Fatty acids via beta-oxidation, and especially carbohydrates, via oxidative decarboxylation of glycolytic pyruvate",
        "Glycerol phosphate from glycolysis, and dietary cholesterol",
        "Carbohydrates only, since beta-oxidation runs in the opposite direction",
        "Malonyl-CoA, which is decarboxylated back to acetyl-CoA before entering the complex"
      ],
      answer: 0,
      optionRefs: { 1: '8-3-5', 3: '8-3-2' },
      optionNotes: {
        1: { en: "Glycerol phosphate is indeed an indirect glycolytic product, but its role is as the ACTIVATED GLYCEROL of lipid biosynthesis, not as a source of acetyl-CoA; and the book does not name dietary cholesterol here at all.", cn: "甘油磷酸确实是糖酵解的间接产物，但它的角色是脂质合成中被活化的甘油，而不是乙酰-CoA的来源；而且教材在此根本没有提到食源胆固醇。" },
        2: { en: "The book explicitly names both sources. Beta-oxidation does run in the catabolic direction, and that is exactly why it delivers acetyl-CoA that biosynthesis can then re-use.", cn: "教材明确列出了两个来源。β-氧化确实方向相反、属于分解，但正因如此它才交出乙酰-CoA，供生物合成再次利用。" },
        3: { en: "Malonyl-CoA is made FROM acetyl-CoA as the activation step, and it is decarboxylated only during the condensation on the synthase complex — it is a downstream intermediate, not a source.", cn: "丙二酰-CoA是由乙酰-CoA经活化步骤生成的，其脱羧只发生在合酶复合体上的缩合反应中——它是下游中间物，不是来源。" }
      },
      why_en: "The book lists two routes into acetyl-CoA and marks one of them as the main one: fatty acids themselves via beta-oxidation, and especially carbohydrates, where pyruvate arising from glycolysis is oxidatively decarboxylated to acetyl-CoA and CO2.",
      why_cn: "教材列出通向乙酰-CoA的两条路，并指明其中一条为主：一是脂肪酸自身经β-氧化，二是（尤其是）糖类——糖酵解产生的丙酮酸经氧化脱羧生成乙酰-CoA和CO₂。"
    },
    {
      type: 'short',
      q_en: "Name the three subcellular compartments across which the book distributes the fatty-acid-biosynthesis apparatus in eukaryotes, and say what each contributes.",
      q_cn: "说出教材把真核生物脂肪酸合成装置分配到的三个亚细胞区室，并说明每个区室各负责什么。",
      accept: ["cytoplasm", "palmitic", "18", "mitochondrial matrix", "elongase", "endoplasmic reticulum", "desaturase", "胞质", "线粒体基质", "延长酶", "内质网", "去饱和酶"],
      answer_en: "Cytoplasm: the basic de novo pathway that builds a saturated chain up to 18 carbons, i.e. as far as palmitic acid. Mitochondrial matrix: the elongase system, which extends chains further. Endoplasmic reticulum: the desaturase system, which converts saturated fatty acids to unsaturated ones and can likewise support further chain extension.",
      answer_cn: "胞质：从头合成的基本途径，建成最长18碳的饱和链，即到棕榈酸为止。线粒体基质：延长酶系统，使链进一步延长。内质网：去饱和酶系统，把饱和脂肪酸转变为不饱和脂肪酸，同样也能支持进一步的链延长。"
    }
  ],

  '8-3-2': [
    {
      type: 'mcq',
      q_en: "In the loading step (step I), which acyl group goes onto which SH group of ACP?",
      q_cn: "在装载步骤（步骤I）中，哪个酰基装到ACP的哪个SH基团上？",
      options: [
        "Acetyl onto the peripheral cysteine SH; malonyl onto the central phosphopantetheine SH",
        "Malonyl onto the peripheral cysteine SH; acetyl onto the central phosphopantetheine SH",
        "Both onto the central phosphopantetheine SH, one after the other",
        "Both are bound as oxygen esters to a serine hydroxyl of the polypeptide"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two are swapped. The book loads acetyl peripherally by acetyltransferase and malonyl centrally by malonyltransferase.", cn: "两者弄反了。教材是由乙酰转移酶把乙酰基装到外周位点，由丙二酰转移酶把丙二酰基装到中央位点。" },
        2: { en: "One ACP molecule carries two DISTINCT SH groups precisely so that the two partners can be held apart until the condensation brings them together.", cn: "一个ACP分子带有两个不同的SH基团，正是为了在缩合把二者拉到一起之前把两个反应搭档分开固定。" },
        3: { en: "ACP binds acetate and malonate through THIOESTER bonds — that is what the sulfhydryl groups are for.", cn: "ACP是通过硫酯键结合乙酸和丙二酸的——巯基的作用正在于此。" }
      },
      why_en: "The geometry is the point: acetyltransferase puts the acetyl group on the cysteine-derived peripheral SH, malonyltransferase puts the malonyl group on the phosphopantetheine-derived central SH, and only then can beta-ketoacyl-ACP synthase condense them. Acetyltransferase acts only in this first initiating cycle; every later cycle needs malonyltransferase alone.",
      why_cn: "关键在于空间安排：乙酰转移酶把乙酰基放到源自半胱氨酸的外周SH上，丙二酰转移酶把丙二酰基放到源自磷酸泛酰巯基乙胺的中央SH上，之后β-酮酰-ACP合酶才能把两者缩合。乙酰转移酶只在这第一个起始循环中参与，其后每一轮只需要丙二酰转移酶。"
    },
    {
      type: 'mcq',
      q_en: "What structural unit does ACP share with free coenzyme A, per the book's cross-reference?",
      q_cn: "按教材的交叉引用，ACP与游离辅酶A共有哪一个结构单元？",
      options: [
        "The phosphopantetheine arm, which ends in ACP's central SH group",
        "The cysteine residue that provides the peripheral SH group",
        "Biotin",
        "An NADPH binding site"
      ],
      answer: 0,
      optionRefs: { 2: '8-3-1', 3: '8-3-3' },
      optionNotes: {
        1: { en: "The cysteine SH comes from ACP's own polypeptide chain — it is the ACP-specific half of the pair, not the shared one.", cn: "半胱氨酸的SH来自ACP自身的多肽链——它是这对巯基中属于ACP特有的那一半，不是共有的那一半。" },
        2: { en: "Biotin is the coenzyme of acetyl-CoA carboxylase, the enzyme that makes malonyl-CoA before the synthase complex ever sees it.", cn: "生物素是乙酰-CoA羧化酶的辅酶，该酶在底物到达合酶复合体之前先生成丙二酰-CoA。" },
        3: { en: "NADPH is consumed by the two reductase steps of each cycle, but the book does not describe a shared NADPH site as a structural link between ACP and CoA.", cn: "NADPH由每轮循环中的两个还原步骤消耗，但教材并未把共用的NADPH位点描述为ACP与CoA之间的结构联系。" }
      },
      why_en: "The book makes ACP intelligible by identifying it with something already known: the same phosphopantetheine unit that floats free as part of coenzyme A is here tethered covalently to a carrier polypeptide at the centre of the multienzyme complex, so the growing chain never has to leave the machine.",
      why_cn: "教材用一个已知的东西来解释ACP：同样的磷酸泛酰巯基乙胺单元，在辅酶A中是游离的，在这里则以共价方式拴在多酶复合体中央的载体多肽上，于是延长中的酰基链始终不必离开这台机器。"
    },
    {
      type: 'short',
      q_en: "Describe how the book depicts the machine on which fatty acids are actually made: what kind of complex, what its core protein is called, what bond it uses to hold its substrates, and how the figure is arranged.",
      q_cn: "描述教材如何刻画真正合成脂肪酸的那台「机器」：它是什么样的复合体？核心蛋白叫什么？用什么键抓住底物？图是怎样排布的？",
      accept: ["multienzyme", "soluble", "ACP", "acyl carrier", "thioester", "six", "circular", "多酶", "可溶", "硫酯", "六"],
      answer_en: "Synthesis takes place on a soluble multienzyme complex whose core is a protein able to bind the organic acids acetate and malonate through a thioester bond — the acyl carrier protein, abbreviated ACP. The book draws it as a circle of six numbered catalytic activities, I to VI, arranged around a central ACP hub, so that the substrate stays on the hub while successive activities act on it.",
      answer_cn: "合成发生在一个可溶的多酶复合体上，其核心是一种能以硫酯键结合乙酸和丙二酸这类有机酸的蛋白质，即酰基载体蛋白ACP。教材把它画成一个圆环：六个编号的催化活性I至VI围绕中央的ACP枢纽排列，底物停留在枢纽上，由各活性依次作用。"
    }
  ],

  '8-3-3': [
    {
      type: 'mcq',
      q_en: "What is the sequence of chemical transformations that turns acetoacetyl-S-ACP into butyryl-S-ACP?",
      q_cn: "把乙酰乙酰-S-ACP转变为丁酰-S-ACP的化学转变顺序是怎样的？",
      options: [
        "Reduction with NADPH, then dehydration, then a second reduction with NADPH",
        "Oxidation, then hydration, then a second oxidation",
        "Dehydration first, then two successive reductions",
        "A single reduction, using NADH rather than NADPH"
      ],
      answer: 0,
      optionRefs: { 1: '8-4-4-2' },
      optionNotes: {
        1: { en: "That is the same chemistry run backwards — the pattern of beta-oxidation, the degradative pathway. Biosynthesis reduces and dehydrates; degradation oxidises and hydrates.", cn: "那是同一套化学反过来跑——即β-氧化这条降解途径的模式。合成是还原加脱水；降解是氧化加水合。" },
        2: { en: "Order matters: there is nothing to dehydrate until the keto group at C3 has first been reduced to a hydroxyl.", cn: "顺序很关键：在C3的酮基先被还原成羟基之前，根本没有可供脱水的对象。" },
        3: { en: "Two reductions are needed, one for the keto group and one for the double bond, and both are run on NADPH — 14 NADPH per palmitate across the seven cycles.", cn: "需要两次还原，一次针对酮基，一次针对双键，且都用NADPH——七轮循环合成一分子棕榈酸共耗14个NADPH。" }
      },
      why_en: "One cycle is a fixed three-step run: beta-ketoacylreductase reduces the C3 keto group with NADPH(H+) to give beta-hydroxybutyryl-S-ACP, beta-hydroxyacyl dehydratase removes water to give the alpha,beta-unsaturated intermediate, and alpha,beta-enoylreductase saturates that double bond with a second NADPH(H+), yielding butyryl-S-ACP.",
      why_cn: "一轮循环是固定的三步：β-酮酰还原酶用NADPH(H⁺)还原C3酮基，得β-羟基丁酰-S-ACP；β-羟酰脱水酶脱去一分子水，得α,β-不饱和中间物；α,β-烯酰还原酶再用一个NADPH(H⁺)使该双键饱和，得丁酰-S-ACP。"
    },
    {
      type: 'mcq',
      q_en: "How does the acyl chain grow on the multienzyme complex, and in which direction?",
      q_cn: "在多酶复合体上，酰基链是如何增长的？方向如何？",
      options: [
        "By exactly two carbons at a time, from the methyl end towards the carboxyl end",
        "By exactly two carbons at a time, from the carboxyl end towards the methyl end",
        "By three carbons at a time, since the donor malonyl group carries three carbons",
        "By one carbon at a time, each carbon coming from the CO2 that is added"
      ],
      answer: 0,
      optionRefs: { 3: '8-3-4' },
      optionNotes: {
        1: { en: "The direction is reversed here. The methyl end is the fixed end, laid down by the initiating acetyl group; the carboxyl end is the growing one.", cn: "方向反了。甲基端是固定端，由起始的乙酰基奠定；羧基端才是增长端。" },
        2: { en: "Malonyl does bring three carbons, but one of them leaves again as CO2 in the condensation catalysed by beta-ketoacyl-ACP synthase, so the net gain is two.", cn: "丙二酰基确实带来三个碳，但其中一个在β-酮酰-ACP合酶催化的缩合中又以CO₂形式离去，净增两个碳。" },
        3: { en: "CO2 is consumed when malonyl-CoA is formed and released again at each condensation; over the whole synthesis its net contribution is zero, so it donates no carbon to the chain.", cn: "CO₂在生成丙二酰-CoA时被消耗，又在每次缩合时释放；整个合成过程中它的净贡献为零，因此并不向碳链提供碳。" }
      },
      why_en: "The two-carbon rule follows from the machinery, not from a convention: each cycle condenses a three-carbon malonyl unit and loses one carbon as CO2, and because the initiating acetyl group is parked on the peripheral SH and stays at the far end, the chain extends away from that fixed methyl end towards the carboxyl end.",
      why_cn: "每次加两个碳这一规律来自机器本身而非约定：每轮缩合一个三碳的丙二酰单元并以CO₂形式失去一个碳；又因为起始的乙酰基停在外周SH上、始终留在远端，所以链是从这个固定的甲基端向羧基端延伸的。"
    },
    {
      type: 'short',
      q_en: "What happens in step VI, and why is it necessary before the next cycle can start?",
      q_cn: "步骤VI发生了什么？为什么必须先完成它，下一轮循环才能开始？",
      accept: ["transfer", "peripheral", "cysteine", "central", "phosphopantetheine", "free", "malonyl", "转移", "外周", "半胱氨酸", "中央", "丙二酰"],
      answer_en: "Step VI transfers the newly finished four-carbon butyryl group from the central phosphopantetheine SH group to the peripheral cysteine SH group. This frees the central SH, which is where the next malonyl group must bind; that malonyl then condenses with the butyryl chain to give a six-carbon chain, which passes through the same reduction, dehydration and second reduction.",
      answer_cn: "步骤VI把刚合成好的四碳丁酰基从中央的磷酸泛酰巯基乙胺SH转移到外周的半胱氨酸SH上。这样中央SH就空了出来，而下一个丙二酰基必须结合在那里；该丙二酰基随后与丁酰链缩合成六碳链，再经历同样的还原、脱水、第二次还原。"
    }
  ],

  '8-3-4': [
    {
      type: 'mcq',
      q_en: "Per the book's summary diagram, how much ATP and NADPH(H+) does one palmitate cost?",
      q_cn: "根据教材的总结图，合成一分子棕榈酸需要消耗多少ATP和NADPH(H⁺)？",
      options: ["7 ATP and 14 NADPH(H+)", "8 ATP and 16 NADPH(H+)", "7 ATP and 7 NADPH(H+)", "14 ATP and 7 NADPH(H+)"],
      answer: 0,
      optionNotes: {
        1: { en: "This counts eight cycles. Eight acetyl-CoA go in, but the first one initiates and only seven condensation cycles follow, so the coefficients are 7 and 14.", cn: "这是按八轮算的。进料是八个乙酰-CoA，但第一个是起始用的，之后只有七轮缩合，所以系数是7和14。" },
        2: { en: "This counts one NADPH per cycle. Each cycle runs two reductions — the keto group and then the double bond — so it is 2 x 7 = 14.", cn: "这是按每轮一个NADPH算的。每轮有两次还原——先还原酮基，再还原双键——所以是2×7=14。" },
        3: { en: "The two numbers are swapped: 7 is the ATP count (one per malonyl-CoA formed), 14 the NADPH count (two per cycle).", cn: "两个数字对调了：7是ATP数（每生成一个丙二酰-CoA用一个），14是NADPH数（每轮两个）。" }
      },
      why_en: "The overall equation is 8 acetyl-CoA + 7 ATP + 14 NADPH(H+) -> palmitate + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH. Both coefficients trace back to the same number seven: seven malonyl-CoA molecules, each costing one ATP to carboxylate, and seven cycles, each costing two NADPH.",
      why_cn: "总反应式是：8乙酰-CoA + 7 ATP + 14 NADPH(H⁺) → 棕榈酸 + 7 ADP + 7 Pi + 14 NADP⁺ + 8 CoASH。两个系数都追溯到同一个数字7：七个丙二酰-CoA，每个羧化耗一个ATP；七轮循环，每轮耗两个NADPH。"
    },
    {
      type: 'mcq',
      q_en: "The book's balance releases 8 CoASH per palmitate. Where do the eight come from?",
      q_cn: "教材的物料平衡中，每合成一分子棕榈酸释放8个CoASH。这八个从何而来？",
      options: [
        "One from the initiating acetyl-CoA plus one from each of the seven malonyl-CoA molecules",
        "One from each of the eight condensation cycles",
        "One from each of the eight two-carbon units actually added to the chain",
        "Seven from the seven ATP hydrolysed plus one from the released palmitate"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "There are seven condensation cycles, not eight — the eighth acetyl unit is the initiating acetyl group, which is loaded rather than condensed.", cn: "缩合循环有七轮而不是八轮——第八个乙酰单元是起始乙酰基，它是被装载上去的，而不是缩合上去的。" },
        2: { en: "Only seven two-carbon units are ADDED; the eighth is the acetyl group the chain starts from.", cn: "真正被「加上去」的两碳单元只有七个；第八个是链的起点乙酰基。" },
        3: { en: "ATP hydrolysis releases ADP and Pi, both of which appear separately in the equation; CoASH comes off the thioesters, not off ATP.", cn: "ATP水解释放的是ADP和Pi，二者在方程中各自单列；CoASH是从硫酯上脱下来的，与ATP无关。" }
      },
      why_en: "Every CoA thioester that enters the complex leaves its CoASH behind: the one initiating acetyl-CoA and the seven malonyl-CoA built from the remaining seven acetyl-CoA. 1 + 7 = 8, matching the 8 acetyl-CoA on the left-hand side of the equation.",
      why_cn: "每一个进入复合体的CoA硫酯都会把自己的CoASH留下：一个起始的乙酰-CoA，加上由其余七个乙酰-CoA生成的七个丙二酰-CoA。1+7=8，与方程左边的8个乙酰-CoA正好对应。"
    },
    {
      type: 'short',
      q_en: "How many NADPH(H+) does the book's balance consume per palmitate, and how does that number follow from the structure of the cycle?",
      q_cn: "教材的物料平衡中，每合成一分子棕榈酸消耗多少NADPH(H⁺)？这个数字如何由循环的结构推出？",
      accept: ["14", "two", "2", "seven", "7", "reduction", "cycle", "十四", "还原", "循环"],
      answer_en: "Fourteen. Each condensation cycle contains exactly two reduction steps — first the beta-keto group, then the double bond left behind by the dehydration — so each cycle costs 2 NADPH(H+), and seven cycles are needed to reach the 16-carbon chain: 2 x 7 = 14, released again as 14 NADP+.",
      answer_cn: "十四个。每一轮缩合循环恰好含两个还原步骤——先还原β-酮基，再还原脱水留下的双键——所以每轮耗2个NADPH(H⁺)；而建成16碳链需要七轮：2×7=14，最终以14个NADP⁺的形式释放出来。"
    }
  ],

  '8-3-5': [
    {
      type: 'mcq',
      q_en: "Which activating agent does the book assign to each building block of lipid biosynthesis?",
      q_cn: "教材为脂质生物合成的各个构件分别指定了什么活化方式？",
      options: [
        "Glycerol as glycerol phosphate, fatty acids as acyl-CoA, and the phospholipid organic bases by CTP",
        "Glycerol as glycerol phosphate, fatty acids by CTP, and the organic bases as acyl-CoA",
        "All three by ATP, since ATP is the universal activating nucleotide",
        "All three by NADPH, which is the reductant of lipid biosynthesis"
      ],
      answer: 0,
      optionRefs: { 2: '8-3-1', 3: '8-3-4' },
      optionNotes: {
        1: { en: "The two activating agents are swapped. Fatty acids are activated by binding coenzyme A; CTP is what activates the organic bases that become phospholipid head groups.", cn: "两种活化方式对调了。脂肪酸靠结合辅酶A活化；CTP活化的是将来成为磷脂头基的有机碱。" },
        2: { en: "ATP does drive the carboxylation of acetyl-CoA to malonyl-CoA earlier in the chapter, but the book names three different activated forms here, not one universal nucleotide.", cn: "ATP确实在本章前面驱动乙酰-CoA羧化为丙二酰-CoA，但教材在这里给出的是三种不同的活化形式，而不是一个万能核苷酸。" },
        3: { en: "NADPH is the reductant of fatty-acid synthesis — 14 per palmitate — not an activating group carrier.", cn: "NADPH是脂肪酸合成的还原剂——每分子棕榈酸14个——而不是携带活化基团的载体。" }
      },
      why_en: "Anabolic pathways run on activated substrates, and the book names one activated form per building block: glycerol appears as glycerol phosphate (itself an indirect glycolysis product on a carbohydrate-rich diet), fatty acids as CoA thioesters, and the organic bases of phospholipid head groups activated by CTP.",
      why_cn: "合成代谢途径依赖活化底物，教材为每个构件各指定一种活化形式：甘油以甘油磷酸的形式出现（在富含糖类的饮食下，它本身就是糖酵解的间接产物），脂肪酸以CoA硫酯的形式出现，磷脂头基的有机碱则由CTP活化。"
    },
    {
      type: 'mcq',
      q_en: "In the adipocyte reaction the book draws on this page, what reacts with 3-glycerolphosphate, and what is the product?",
      q_cn: "在教材本页所画的脂肪细胞反应中，与3-甘油磷酸反应的是什么？产物是什么？",
      options: [
        "Two acyl-CoA in succession, releasing two CoASH and giving phosphatidic acid",
        "Three acyl-CoA in succession, giving a triacylglycerol directly",
        "Two acyl-CoA plus a choline, giving phosphatidylcholine",
        "One acyl-CoA plus CTP, giving CDP-diacylglycerol"
      ],
      answer: 0,
      optionRefs: { 1: '8-3-6', 2: '8-2-3-2', 3: '8-3-6' },
      optionNotes: {
        1: { en: "The diagram on this page stops at phosphatidic acid, which still carries a phosphate at C-3. The third acylation only becomes possible after that phosphate is removed, on the following page.", cn: "本页的图止于磷脂酸，它的C-3上仍带着磷酸。第三次酰化要等磷酸被去掉之后才可能发生，那在下一页。" },
        2: { en: "A choline head group makes phosphatidylcholine, one of the phospholipids built from phosphatidic acid further downstream — not a product of these two acylations.", cn: "接上胆碱头基得到的是磷脂酰胆碱，那是更下游由磷脂酸构建的磷脂之一——不是这两步酰化的产物。" },
        3: { en: "CTP does activate head-group bases, and CDP-diacylglycerol belongs to the branching pathway on the next page; the reaction shown here uses two acyl-CoA and nothing else.", cn: "CTP确实活化头基碱，CDP-二酰甘油属于下一页的分支途径；此处所示的反应只用两个acyl-CoA，别无其他。" }
      },
      why_en: "Two successive acylations, each consuming one acyl-CoA and releasing one CoASH, convert 3-glycerolphosphate into phosphatidic acid — a diacylglycerol still bearing its phosphate. The book calls that molecule the first natural and simultaneously key intermediate for further lipid-biosynthetic pathways.",
      why_cn: "两次连续的酰化，各消耗一个acyl-CoA并释放一个CoASH，把3-甘油磷酸转变为磷脂酸——一个仍带磷酸的二酰基甘油。教材称这个分子是通向后续脂质合成途径的第一个天然的、同时也是关键的中间产物。"
    },
    {
      type: 'short',
      q_en: "Where does the glycerol phosphate used for lipid biosynthesis come from, according to the book, and under what dietary condition?",
      q_cn: "根据教材，用于脂质生物合成的甘油磷酸从何而来？在什么饮食条件下？",
      accept: ["glycolysis", "carbohydrate", "indirect", "activated", "glycerol phosphate", "糖酵解", "糖类", "间接", "活化", "甘油磷酸"],
      answer_en: "Glycerol phosphate is the activated form in which glycerol enters lipid biosynthesis, and the book describes it as an indirect product of glycolysis on a carbohydrate-rich diet. That is the link the book draws between eating carbohydrate and depositing fat: the glycerol backbone of the stored triacylglycerol comes indirectly from the sugar breakdown pathway.",
      answer_cn: "甘油磷酸是甘油进入脂质合成时的活化形式，教材把它描述为在富含糖类的饮食条件下由糖酵解间接产生的产物。这正是教材在「吃糖」与「囤脂」之间画出的联系：储存的三酰基甘油，其甘油骨架间接来自糖的分解途径。"
    }
  ]

});
