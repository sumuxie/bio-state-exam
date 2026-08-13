/* Bank questions for chapter 8, second half (nodes 8-3-6 .. 8-5-3-3) — the second question
   layer, see BANK_SPEC.md. Every item below is derived from the content already in
   biochemie_pro/data/ch8.js; no fact here comes from outside the node it is attached to.
   Points the source nodes themselves flag as disputed (the "beta-ketokinasa" label on the
   thiolytic step, the "via malonyl-SCoA" first condensation of the mevalonate pathway, and the
   GPP+IPP -> GGPP carbon arithmetic) are deliberately not used as question material.
   Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  "8-3-6": [
    {
      type: "mcq",
      q_en: "Four different products in this diagram are built directly from diacylglycerol. Which molecule is the branch point for triglycerides, phosphatidylethanolamine, phosphatidylcholine and the galactolipids MGDG/DGDG?",
      q_cn: "本图中有四类产物是直接由同一个分子出发合成的。三酰甘油、磷脂酰乙醇胺、磷脂酰胆碱以及半乳糖脂MGDG/DGDG共同的分支点是哪个分子？",
      options: [
        "Phosphatidic acid",
        "Diacylglycerol",
        "CDP-diacylglycerol",
        "L-alpha-glycerolphosphate"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-5", 3: "8-3-5" },
      optionNotes: {
        0: { en: "Phosphatidic acid is one step upstream: it must first lose its phosphate to a phosphatase to become diacylglycerol. Phosphatidic acid has its own separate branch, reacting with CTP to give CDP-diacylglycerol.", cn: "磷脂酸位于上游一步：它必须先经磷酸酶脱去磷酸才变成二酰甘油。磷脂酸自己另有一条支路——与CTP反应生成CDP-二酰甘油。" },
        2: { en: "CDP-diacylglycerol is a real branch point, but for a different set of products: phosphatidylglycerol, cardiolipin and phosphatidylinositol. No triglyceride or galactolipid comes off it.", cn: "CDP-二酰甘油确实是一个分支点，但通向的是另一组产物：磷脂酰甘油、心磷脂和磷脂酰肌醇，与三酰甘油和半乳糖脂无关。" },
        3: { en: "Glycerol phosphate is the activated glycerol precursor two acylation steps earlier, before phosphatidic acid even exists.", cn: "磷酸甘油是更早两步酰化之前的活化甘油前体，那时连磷脂酸都还没形成。" }
      },
      why_en: "The diagram fans out from diacylglycerol in four directions: plus a third acyl-CoA to triglyceride, plus CDP-ethanolamine to phosphatidylethanolamine, plus CDP-choline to phosphatidylcholine, and twice plus UDP-galactose to MGDG then DGDG. Everything reached through CTP activation instead branches from phosphatidic acid.",
      why_cn: "插图从二酰甘油出发向四个方向展开：加第三分子脂酰辅酶A得三酰甘油，加CDP-乙醇胺得磷脂酰乙醇胺，加CDP-胆碱得磷脂酰胆碱，连续两次加UDP-半乳糖依次得MGDG和DGDG。凡是经CTP活化才能到达的产物，则从磷脂酸另行分支。"
    },
    {
      type: "mcq",
      q_en: "Each branch of this diagram releases a characteristic byproduct. Which byproduct marks a step that used UDP-galactose as the donor?",
      q_cn: "本图各条支路都释放各自特征性的副产物。哪一种副产物标志着该步骤使用了UDP-半乳糖作为供体？",
      options: [
        "CMP",
        "PPi",
        "UDP",
        "CoASH"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "CMP marks the CDP-activated steps: diacylglycerol plus CDP-ethanolamine or CDP-choline, and both branches off CDP-diacylglycerol. The nucleotide leaving is cytidine-based, not uridine-based.", cn: "CMP标志的是CDP活化的步骤：二酰甘油加CDP-乙醇胺或CDP-胆碱，以及CDP-二酰甘油的两条支路。离去的核苷酸是胞苷类而非尿苷类。" },
        1: { en: "PPi is released once only, when phosphatidic acid reacts with CTP to form CDP-diacylglycerol.", cn: "PPi只在一处释放：磷脂酸与CTP反应生成CDP-二酰甘油时。" },
        3: { en: "CoASH is released when diacylglycerol takes up its third acyl group from acyl-CoA to complete a triglyceride — an acylation, not a glycosylation.", cn: "CoASH是二酰甘油从脂酰辅酶A接受第三个酰基、完成三酰甘油时释放的——那是酰化而非糖基化。" }
      },
      why_en: "Both galactosylations run the same way: diacylglycerol plus UDP-galactose gives MGDG and releases UDP, then MGDG plus a second UDP-galactose gives DGDG and releases UDP again. Reading the released nucleotide is the fastest way to tell which donor a step used.",
      why_cn: "两次半乳糖基化的方式相同：二酰甘油加UDP-半乳糖生成MGDG并释放UDP，MGDG再加第二分子UDP-半乳糖生成DGDG并再次释放UDP。看释放出的核苷酸，是判断某一步用了哪种供体最快的办法。"
    },
    {
      type: "short",
      q_en: "Trace the route from phosphatidic acid to diphosphatidylglycerol (cardiolipin), naming the activated intermediate and every byproduct released along the way.",
      q_cn: "请追溯从磷脂酸到二磷脂酰甘油（心磷脂）的路线，说出其中的活化中间体以及沿途释放的每一种副产物。",
      accept: ["CTP", "PPi", "CDP-diacylglycerol", "CDP-diglycerid", "CMP", "phosphatidylglycerol", "磷脂酰甘油", "心磷脂"],
      answer_en: "Phosphatidic acid reacts with CTP, releasing pyrophosphate (PPi), to give the activated intermediate CDP-diacylglycerol. That reacts with L-alpha-glycerolphosphate, releasing CMP and then a further Pi, to give phosphatidylglycerol. Phosphatidylglycerol then reacts with a second molecule of CDP-diacylglycerol, releasing CMP again, to give diphosphatidylglycerol (cardiolipin).",
      answer_cn: "磷脂酸与CTP反应，释放焦磷酸（PPi），生成活化中间体CDP-二酰甘油。该中间体与L-α-磷酸甘油反应，释放CMP并随后再释放一个Pi，生成磷脂酰甘油。磷脂酰甘油再与第二分子CDP-二酰甘油反应，再次释放CMP，生成二磷脂酰甘油（心磷脂）。"
    }
  ],

  "8-3-7": [
    {
      type: "mcq",
      q_en: "HMG-CoA reductase carries out the last reaction of Phase A. Which cofactor does it spend, and how much of it?",
      q_cn: "HMG-CoA还原酶催化A阶段的最后一个反应。它消耗哪种辅因子？消耗多少？",
      options: [
        "2 NADPH(H+), released as 2 NADP+",
        "2 NADH(H+), released as 2 NAD+",
        "FAD, reduced to FADH2",
        "2 ATP, hydrolysed to 2 ADP + Pi"
      ],
      answer: 0,
      optionRefs: { 1: "8-4-4-2", 2: "8-4-4-2", 3: "8-3-8" },
      optionNotes: {
        1: { en: "NAD+/NADH is the cofactor of the oxidative direction: it appears at step C of beta-oxidation, where beta-hydroxyacyl-CoA is oxidised. Reductive biosynthesis here uses the phosphorylated cofactor NADPH.", cn: "NAD+/NADH属于氧化方向的辅因子：它出现在β-氧化的步骤C，即β-羟酰基辅酶A被氧化的那一步。此处的还原性生物合成用的是磷酸化的NADPH。" },
        2: { en: "FAD is the cofactor of the first dehydrogenation of beta-oxidation, run by acyl-CoA dehydrogenase. Nothing in Phase A uses a flavin.", cn: "FAD是β-氧化第一次脱氢（酰基辅酶A脱氢酶）的辅因子。A阶段没有任何一步使用黄素辅因子。" },
        3: { en: "ATP is spent later, in Phase B: three successive kinases phosphorylate mevalonate using 3 ATP. HMG-CoA reductase transfers no phosphate at all.", cn: "ATP是在后面的B阶段才消耗的：三个连续的激酶用3分子ATP将甲羟戊酸磷酸化。HMG-CoA还原酶完全不转移磷酸。" }
      },
      why_en: "The book writes this reaction as HMG-CoA plus 2 NADPH(H+) giving mevalonic acid plus 2 NADP+ plus CoASH. Reading the cofactor is the reliable way to tell a biosynthetic reduction from a catabolic oxidation, since the pathways in this chapter otherwise share many of the same intermediates.",
      why_cn: "教材将该反应写为：HMG-CoA + 2 NADPH(H+) → 甲羟戊酸 + 2 NADP+ + CoASH。看辅因子是区分合成性还原与分解性氧化最可靠的方法，因为本章这两类途径共用了不少相同的中间体。"
    },
    {
      type: "mcq",
      q_en: "Of the three reactions the book draws in Phase A, how many does its own diagram give an enzyme name for?",
      q_cn: "教材在A阶段画出了三个反应，其中有几个在图上给出了酶的名称？",
      options: [
        "All three",
        "Only the last one, HMG-CoA reductase",
        "Only the middle one, which makes HMG-CoA",
        "None of them"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The first condensation carries a mechanistic label rather than an enzyme name, and the middle reaction carries neither.", cn: "第一次缩合只标了机制说明而非酶名，中间那一步则两者都没有。" },
        2: { en: "This is the reaction that is left unnamed. Its standard name elsewhere is HMG-CoA synthase, but the book does not print it, so an exam answer should say so rather than supply it as if it were on the page.", cn: "恰恰是这一步没有命名。其在其他文献中的标准名称是HMG-CoA合酶，但教材并未印出，所以答题时应说明这一点，而不要当作书上写着一样直接补上。" },
        3: { en: "HMG-CoA reductase is named explicitly, and it is the only one.", cn: "HMG-CoA还原酶是明确命名的，而且是唯一被命名的一个。" }
      },
      why_en: "HMG-CoA reductase is the only enzyme explicitly named among Phase A's three reactions. That is worth knowing precisely, because it is also the enzyme the book later singles out as the key regulatory enzyme of the whole pathway.",
      why_cn: "在A阶段的三个反应中，HMG-CoA还原酶是唯一被明确命名的酶。这一点值得记准，因为教材后面正是把这个酶单列为整条途径的关键调节酶。"
    },
    {
      type: "short",
      q_en: "The Phase A diagram carries a small side arrow labelled beta-oxidace mast. kyselin pointing at acetoacetyl-CoA. What is that arrow telling you, and what is it not claiming?",
      q_cn: "A阶段的插图上有一个小的侧注箭头，标着 beta-oxidace mast. kyselin，指向乙酰乙酰辅酶A。这个箭头想说明什么？它又没有在主张什么？",
      accept: ["cross-reference", "beta-oxidation", "also an intermediate", "does not feed", "交叉引用", "β-氧化", "并非"],
      answer_en: "It is a cross-reference, not a reaction arrow. It flags that acetoacetyl-CoA, the four-carbon condensation product sitting in this biosynthetic pathway, is also an intermediate or product of fatty acid beta-oxidation covered in section 8.4.4. It is not claiming that beta-oxidation directly feeds material into the mevalonate pathway.",
      answer_cn: "它是一个交叉引用，而不是反应箭头。它标注的是：处于这条合成途径中的四碳缩合产物乙酰乙酰辅酶A，同时也是第8.4.4节脂肪酸β-氧化的中间体/产物。它并不是在说β-氧化直接为甲羟戊酸途径供料。"
    }
  ],

  "8-3-8": [
    {
      type: "mcq",
      q_en: "Squalene and phytoene are both made by head-to-head condensation. Which terpene class does each belong to?",
      q_cn: "角鲨烯和八氢番茄红素都是通过头对头缩合生成的。它们分别属于哪一类萜？",
      options: [
        "Squalene is a triterpene; phytoene is a tetraterpene",
        "Squalene is a tetraterpene; phytoene is a triterpene",
        "Both are diterpenes",
        "Squalene is a sesquiterpene; phytoene is a diterpene"
      ],
      answer: 0,
      optionRefs: { 1: "8-2-4-1", 2: "8-2-4-1", 3: "8-2-4-1" },
      optionNotes: {
        1: { en: "The two classes are swapped. Squalene is thirty carbons, phytoene forty; the larger molecule is the tetraterpene.", cn: "两个类别被调换了。角鲨烯是三十碳，八氢番茄红素是四十碳；更大的那个才是四萜。" },
        2: { en: "Diterpene is the class of geranylgeranyl pyrophosphate, the twenty-carbon precursor that two of which then condense to make phytoene.", cn: "二萜对应的是香叶基香叶基焦磷酸这个二十碳前体，两分子该前体缩合才生成八氢番茄红素。" },
        3: { en: "Sesquiterpene is farnesyl pyrophosphate, the fifteen-carbon precursor of squalene, and diterpene is geranylgeranyl pyrophosphate. Both answers name the precursor class rather than the product class.", cn: "倍半萜指的是法尼基焦磷酸，即角鲨烯的十五碳前体；二萜指香叶基香叶基焦磷酸。这两个答案说的都是前体的类别，而不是产物的类别。" }
      },
      why_en: "The book pairs each condensation product with its terpene class as it builds the chain: GPP monoterpene, FPP sesquiterpene, GGPP diterpene, squalene triterpene, phytoene tetraterpene. The two head-to-head products sit at the top of that list.",
      why_cn: "教材在逐步搭建碳链的同时给出了每个缩合产物所属的萜类：GPP单萜、FPP倍半萜、GGPP二萜、角鲨烯三萜、八氢番茄红素四萜。两个头对头产物正位于这个序列的顶端。"
    },
    {
      type: "mcq",
      q_en: "What is the relationship between IPP and DMAPP, and why does the pathway need both before chain elongation can start?",
      q_cn: "IPP与DMAPP是什么关系？为什么链的延长开始之前这条途径需要同时拥有两者？",
      options: [
        "DMAPP is IPP after a kinase has phosphorylated it a fourth time",
        "They are structural isomers interconverted by an isomerase, and the first condensation joins one of each",
        "DMAPP is IPP after decarboxylation, so IPP must be made first and consumed entirely",
        "They are enantiomers separated by an epimerase"
      ],
      answer: 1,
      optionRefs: { 3: "8-4-4-4" },
      optionNotes: {
        0: { en: "The kinases act earlier and on a different substrate: three of them phosphorylate mevalonic acid, before IPP exists at all. No phosphorylation converts IPP into DMAPP.", cn: "激酶作用在更早的阶段、作用于不同的底物：三个激酶磷酸化的是甲羟戊酸，那时IPP还不存在。IPP变成DMAPP不涉及任何磷酸化。" },
        2: { en: "The decarboxylation happens one step earlier, when 3-phospho-5-pyrophosphomevalonic acid loses Pi and CO2 to become IPP. The IPP-to-DMAPP step is an isomerisation with nothing lost.", cn: "脱羧发生在更早一步：3-磷酸-5-焦磷酸甲羟戊酸失去Pi和CO2变成IPP。IPP到DMAPP这一步是异构化，不失去任何基团。" },
        3: { en: "An epimerase does appear in this chapter, but in the catabolic direction — it is one of the two extra enzymes that let beta-oxidation handle naturally cis-unsaturated fatty acids.", cn: "本章确实出现过差向异构酶，但在分解代谢一侧——它是使β-氧化能够处理天然顺式不饱和脂肪酸的两种额外酶之一。" }
      },
      why_en: "An isomerase interconverts IPP with its structural isomer DMAPP, and the first elongation step is IPP plus DMAPP condensing head-to-tail into the ten-carbon geranyl pyrophosphate. Without the isomerase supplying DMAPP, there is no partner for the first condensation.",
      why_cn: "一种异构酶使IPP与其结构异构体DMAPP相互转化，而链延长的第一步正是IPP与DMAPP以头对尾方式缩合生成十碳的香叶基焦磷酸。若没有异构酶提供DMAPP，第一次缩合就找不到搭档。"
    },
    {
      type: "short",
      q_en: "Phase B spends ATP before it produces anything. State how much, what class of enzyme spends it, on which substrate, and what the resulting compound loses next.",
      q_cn: "B阶段在产出任何东西之前先要消耗ATP。请说明消耗多少、由哪一类酶消耗、作用于什么底物，以及所生成的化合物随后失去了什么。",
      accept: ["3 ATP", "three", "kinase", "kinasy", "mevalon", "Pi", "CO2", "激酶", "甲羟戊酸"],
      answer_en: "Three ATP are spent by three successive kinases acting on mevalonic acid, releasing 3 ADP and giving 3-phospho-5-pyrophosphomevalonic acid. That compound then loses both Pi and CO2 in a decarboxylation, which is what produces isopentenyl pyrophosphate, the first activated five-carbon isoprene unit.",
      answer_cn: "由三个连续的激酶作用于甲羟戊酸，共消耗3分子ATP、释放3分子ADP，生成3-磷酸-5-焦磷酸甲羟戊酸。该化合物随后在脱羧反应中同时失去Pi和CO2，从而生成异戊烯基焦磷酸，即第一个活化的五碳异戊二烯单位。"
    }
  ],

  "8-3-9": [
    {
      type: "mcq",
      q_en: "Phase C works on the unsaturated hydrocarbons Phase B has already built. Which of the following is one of the modifications the book assigns to Phase C?",
      q_cn: "C阶段作用于B阶段已经搭好的不饱和烃。下列哪一项属于教材归入C阶段的修饰方式？",
      options: [
        "Oxidations introducing hydroxyl, aldehyde, carbonyl or carboxyl groups",
        "Head-to-tail condensation of five-carbon isoprene units",
        "Three successive ATP-dependent phosphorylations by kinases",
        "An NADPH-dependent reduction of HMG-CoA"
      ],
      answer: 0,
      optionRefs: { 1: "8-3-8", 2: "8-3-8", 3: "8-3-7" },
      optionNotes: {
        1: { en: "Head-to-tail condensation is how Phase B builds the chains in the first place — IPP plus DMAPP to GPP, GPP plus IPP to FPP. Phase C only starts once those hydrocarbons already exist.", cn: "头对尾缩合本来就是B阶段搭建碳链的方式——IPP加DMAPP生成GPP，GPP加IPP生成FPP。C阶段要等这些烃已经存在之后才开始。" },
        2: { en: "The three kinases are how Phase B activates mevalonic acid on the way to isopentenyl pyrophosphate — the earliest part of the whole assembly, not the finishing chemistry.", cn: "三个激酶是B阶段把甲羟戊酸活化、通向异戊烯基焦磷酸的方式——那是整个组装过程的最早阶段，而不是收尾的修饰化学。" },
        3: { en: "That is HMG-CoA reductase, the last reaction of Phase A, producing mevalonic acid. It is the key regulatory enzyme of the pathway, but it acts long before any terpenoid skeleton exists.", cn: "那是A阶段的最后一个反应——HMG-CoA还原酶生成甲羟戊酸。它是该途径的关键调节酶，但作用时间远早于任何萜类骨架的形成。" }
      },
      why_en: "Phase C converts Phase B's unsaturated hydrocarbons into functional terpenoids, and the book says no single general scheme covers it: chiefly oxidations that add hydroxyl, aldehyde, carbonyl or carboxyl groups, chain shortening or lengthening by one or more methyl groups, and very commonly cyclization into rings of three to nine members. Everything that builds the hydrocarbon skeleton itself belongs to the earlier phases.",
      why_cn: "C阶段是把B阶段的不饱和烃转变为功能性萜类，教材明确说没有单一通用方案能概括它：主要是引入羟基、醛基、羰基或羧基的氧化反应，通过一个或多个甲基使链缩短或延长，以及非常常见的三至九元环环化。凡是搭建烃骨架本身的步骤，都属于更早的阶段。"
    },
    {
      type: "mcq",
      q_en: "Which enzyme performs the ring closure that first turns an open-chain terpene into a sterol, and what is its substrate?",
      q_cn: "哪个酶完成了把开链萜第一次变成固醇的成环反应？它的底物是什么？",
      options: [
        "Squalene monooxygenase, acting on squalene",
        "A cyclase, acting on 2,3-squalene epoxide",
        "HMG-CoA reductase, acting on HMG-CoA",
        "An isomerase, acting on isopentenyl pyrophosphate"
      ],
      answer: 1,
      optionRefs: { 2: "8-3-7", 3: "8-3-8" },
      optionNotes: {
        0: { en: "Squalene monooxygenase acts one step earlier and does not close any ring: it converts squalene into 2,3-squalene epoxide, which is what the cyclase then works on.", cn: "角鲨烯单加氧酶作用在前一步，且不成环：它把角鲨烯变成2,3-角鲨烯环氧化物，环化酶再以此为底物。" },
        2: { en: "HMG-CoA reductase sits far upstream, in Phase A, reducing HMG-CoA to mevalonic acid. It is the key regulatory enzyme of the pathway, but it builds no rings.", cn: "HMG-CoA还原酶位于上游很远的A阶段，把HMG-CoA还原为甲羟戊酸。它是该途径的关键调节酶，但不参与成环。" },
        3: { en: "The isomerase interconverting IPP and DMAPP belongs to Phase B, at the very start of chain assembly.", cn: "使IPP与DMAPP相互转化的异构酶属于B阶段，处在链组装的最开端。" }
      },
      why_en: "The sequence is squalene, then squalene monooxygenase gives 2,3-squalene epoxide, then a cyclase gives lanosterol — the first cyclic sterol. Splitting the two enzymes matters because only the second one creates the ring system that makes the molecule a sterol at all.",
      why_cn: "顺序是：角鲨烯经角鲨烯单加氧酶生成2,3-角鲨烯环氧化物，再经环化酶生成羊毛甾醇——第一个环状固醇。区分这两个酶很重要，因为只有第二个酶才建立起使分子成为固醇的环系。"
    },
    {
      type: "short",
      q_en: "The book singles out HMG-CoA reductase for particular medical interest. State what for, what cofactor requirement it gives, and what it does not name.",
      q_cn: "教材特别指出HMG-CoA还原酶具有重要的医学意义。请说明是就哪方面而言、教材给出了什么辅因子要求，以及教材没有点名的是什么。",
      accept: ["key regulatory", "cholesterol", "atherosclerosis", "2 NADPH", "关键调节", "胆固醇", "动脉粥样硬化"],
      answer_en: "It is named as the key regulatory enzyme of terpenoid biosynthesis, requiring 2 NADPH, and is of particular medical interest because of its central role in cholesterol biosynthesis and as a target for possible atherosclerosis therapy. The book stops there — it does not name any drug or drug class, so an answer should present the target, not a named therapy, as what is on the page.",
      answer_cn: "它被列为萜类生物合成的关键调节酶，需要2分子NADPH；因其在胆固醇生物合成中的核心地位以及作为可能的动脉粥样硬化治疗靶点而具有重要医学意义。教材到此为止——并未点名任何药物或药物类别，所以答题时应把书上的内容表述为「靶点」，而不是某个具体疗法。"
    }
  ],

  "8-4-1": [
    {
      type: "mcq",
      q_en: "Lipase has just released free fatty acids from a triacylglycerol. Per this section, what must happen to them before they can enter any metabolic pathway?",
      q_cn: "脂肪酶刚刚从三酰甘油上释放出游离脂肪酸。按本节所述，它们在进入任何代谢途径之前必须先经历什么？",
      options: [
        "They must be carboxylated to malonyl-CoA",
        "They must be activated to a coenzyme-A thioester",
        "They must be converted to ketone bodies for transport",
        "They must be re-esterified onto glycerol phosphate"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-1", 2: "8-4-4-3", 3: "8-3-5" },
      optionNotes: {
        0: { en: "Carboxylation to malonyl-CoA is the activating step of fatty acid SYNTHESIS, done by acetyl-CoA carboxylase on acetyl-CoA with biotin. It is the opposite direction of metabolism from what a lipase has just started.", cn: "羧化生成丙二酰辅酶A是脂肪酸「合成」的活化步骤，由乙酰辅酶A羧化酶在生物素参与下作用于乙酰辅酶A。它与脂肪酶刚刚开启的代谢方向恰好相反。" },
        2: { en: "Ketone bodies are made much later and only from surplus acetyl-CoA in liver cells, after beta-oxidation has already run. They are not a prerequisite for a fatty acid entering metabolism.", cn: "酮体是在β-氧化已经进行之后、由肝细胞中过剩的乙酰辅酶A生成的，时间上晚得多，并不是脂肪酸进入代谢的前提。" },
        3: { en: "Re-esterification onto glycerol phosphate is the biosynthetic route to phosphatidic acid and triacylglycerol — it consumes acyl-CoA, so it too presupposes activation rather than replacing it.", cn: "重新酯化到磷酸甘油上是通向磷脂酸和三酰甘油的合成路线——它消耗的正是脂酰辅酶A，所以同样以活化为前提，而不能替代活化。" }
      },
      why_en: "This section is explicit that the released free fatty acids are not yet metabolically usable as such: per 8.4.4 they must first be activated to a CoA-thioester before entering any further pathway, catabolic or anabolic alike.",
      why_cn: "本节明确指出，释放出的游离脂肪酸本身还不能直接用于代谢：按8.4.4节所述，它们必须先被活化为辅酶A硫酯，才能进入任何后续途径，无论是分解还是合成。"
    },
    {
      type: "mcq",
      q_en: "Which statement correctly pairs a lipid-degrading enzyme with the bond it actually attacks?",
      q_cn: "下列哪一项正确地把某种脂质降解酶与它真正攻击的化学键配对？",
      options: [
        "Lipase — the ester bonds between fatty acids and glycerol in a triacylglycerol",
        "Lipase — the bond between the phosphate and the choline head group",
        "Phospholipase A2 — the ester bond at the sn-1 position",
        "Ceramidase — the ester bonds of a triacylglycerol"
      ],
      answer: 0,
      optionRefs: { 1: "8-4-2-1", 2: "8-4-2-1", 3: "8-4-2-2" },
      optionNotes: {
        1: { en: "That is the cut made by phospholipase D, on a phospholipid, not by lipase on a triacylglycerol.", cn: "那是磷脂酶D在磷脂上所作的切割，而不是脂肪酶在三酰甘油上的切割。" },
        2: { en: "The positions are swapped: phospholipase A1 cleaves at sn-1, phospholipase A2 at sn-2 — the chain the book draws with a double-bond kink.", cn: "位置弄反了：磷脂酶A1切sn-1位，磷脂酶A2切sn-2位——即教材画成带双键弯折的那条链。" },
        3: { en: "Ceramidase hydrolyses ceramide into a free fatty acid and sphingosine; its substrate is a sphingolipid core, not a triacylglycerol.", cn: "神经酰胺酶把神经酰胺水解为游离脂肪酸和鞘氨醇；它的底物是鞘脂的核心结构，而不是三酰甘油。" }
      },
      why_en: "The book states plainly that lipases are hydrolytic enzymes of the cytoplasm that break the ester bonds linking the fatty acids to glycerol, giving free fatty acids plus glycerol. Each of the other enzymes named here is real, but works on a different lipid class and a different bond.",
      why_cn: "教材明确指出脂肪酶是细胞质中的水解酶，断裂连接脂肪酸与甘油的酯键，生成游离脂肪酸和甘油。其他几个酶都是真实存在的，但作用于不同的脂质类别和不同的化学键。"
    },
    {
      type: "short",
      q_en: "Why is it wrong to say that lipase hydrolysis by itself makes stored fat available to metabolism?",
      q_cn: "为什么说「仅靠脂肪酶水解就能让储存的脂肪供代谢使用」是不对的？",
      accept: ["activation", "coenzyme A", "thioester", "not yet", "活化", "辅酶A", "硫酯"],
      answer_en: "Lipase only gets you as far as free fatty acids plus glycerol. A free fatty acid is by definition one that has not been activated to a CoA-thioester, and in that state it cannot enter any metabolic pathway at all. Mobilisation therefore takes two distinct events: hydrolysis of the ester bonds, and then activation of each released fatty acid to acyl-CoA.",
      answer_cn: "脂肪酶只能把脂肪水解到游离脂肪酸加甘油为止。所谓游离脂肪酸，按定义就是尚未活化为辅酶A硫酯的脂肪酸，处于这种状态时根本无法进入任何代谢途径。因此动员脂肪需要两个不同的事件：先水解酯键，再把每个释放出的脂肪酸活化为脂酰辅酶A。"
    }
  ],

  "8-4-2-1": [
    {
      type: "mcq",
      q_en: "You want to cut a phosphatidylcholine so that the phosphate group stays behind on the glycerol side and only the choline leaves. Which phospholipase does that?",
      q_cn: "你想这样切割一个磷脂酰胆碱：磷酸基团留在甘油一侧，只有胆碱离去。应该用哪一种磷脂酶？",
      options: [
        "Phospholipase A1",
        "Phospholipase A2",
        "Phospholipase C",
        "Phospholipase D"
      ],
      answer: 3,
      optionNotes: {
        0: { en: "A1 cleaves the sn-1 fatty-acid ester bond. It touches neither the phosphate nor the head group.", cn: "A1切的是sn-1位的脂肪酸酯键，既不碰磷酸也不碰头部基团。" },
        1: { en: "A2 cleaves the sn-2 fatty-acid ester bond — in the book figure, the chain drawn with a double-bond kink.", cn: "A2切的是sn-2位的脂肪酸酯键——在教材图中就是那条画成带双键弯折的链。" },
        2: { en: "C cuts on the opposite side of the same phosphate: it cleaves the bond on the glycerol side, so the phosphate leaves together with the choline rather than staying behind.", cn: "C切的是同一个磷酸的另一侧：它断裂靠甘油一侧的键，因此磷酸是与胆碱一起离去，而不是留下。" }
      },
      why_en: "The four cleavage sites are read straight off the arrows in the book figure. C and D flank the phosphate group: C on the glycerol side, D on the far side next to the head group. So D is the one that removes only the head group and leaves the phosphate attached to the rest of the molecule.",
      why_cn: "这四个切割位点是直接从教材图中的箭头读出来的。C和D分列磷酸基团两侧：C在靠甘油一侧，D在另一侧、紧邻头部基团。因此D才是那个只切下头部基团、把磷酸留在分子其余部分上的酶。"
    },
    {
      type: "mcq",
      q_en: "On which molecule does the book draw all four phospholipase cleavage sites, and which of its two acyl chains is drawn with a double-bond kink?",
      q_cn: "教材是在哪个分子上画出全部四个磷脂酶切割位点的？它的两条酰基链中，哪一条被画成带双键的弯折？",
      options: [
        "Phosphatidylcholine (lecithin); the sn-2 chain",
        "Phosphatidylcholine (lecithin); the sn-1 chain",
        "Sphingomyelin; the chain attached to sphingosine",
        "Phosphatidylinositol; the sn-2 chain"
      ],
      answer: 0,
      optionRefs: { 2: "8-4-2-2", 3: "8-3-6" },
      optionNotes: {
        1: { en: "The molecule is right but the chain is the wrong one. The kinked, unsaturated chain sits at sn-2, which is why phospholipase A2 is the enzyme associated with releasing an unsaturated fatty acid.", cn: "分子对了但链选错了。带弯折的不饱和链位于sn-2位，这也正是磷脂酶A2被视为释放不饱和脂肪酸的那个酶的原因。" },
        2: { en: "Sphingomyelin is degraded by a single enzyme, sphingomyelinase, into ceramide and phosphocholine — it is not the molecule used to illustrate four separate cleavage sites.", cn: "鞘磷脂是由单一的鞘磷脂酶分解为神经酰胺和磷酸胆碱的——它不是用来展示四个不同切割位点的那个分子。" },
        3: { en: "Phosphatidylinositol is a real phospholipid, but the book introduces it in the biosynthetic diagram, as the product of CDP-diacylglycerol plus myo-inositol, not as the phospholipase worked example.", cn: "磷脂酰肌醇确实是一种磷脂，但教材是在生物合成图中引入它的（CDP-二酰甘油加肌醇的产物），而不是作为磷脂酶的示例分子。" }
      },
      why_en: "The worked example for the four-phospholipase figure is phosphatidylcholine, also called lecithin, and the second fatty acid chain, at sn-2, is the one drawn with the double-bond kink — which is the visual cue for which arrow belongs to A2.",
      why_cn: "四种磷脂酶示意图所用的示例分子是磷脂酰胆碱，也叫卵磷脂；带双键弯折的是sn-2位的第二条脂肪酸链——这正是判断哪个箭头属于A2的视觉线索。"
    },
    {
      type: "short",
      q_en: "Which phospholipase would you use to remove only the sn-2 fatty acid from lecithin, and what remains attached to the glycerol backbone afterwards?",
      q_cn: "若只想从卵磷脂上切下sn-2位的脂肪酸，应该用哪一种磷脂酶？切完之后甘油骨架上还连着什么？",
      accept: ["A2", "sn-2", "sn-1", "phosphate", "choline", "磷酸", "胆碱"],
      answer_en: "Phospholipase A2, which cleaves the ester bond at the sn-2 position. What is left is the glycerol backbone still carrying its sn-1 fatty acid, the phosphate group, and the choline head group, because A1 was never applied and neither of the two bonds flanking the phosphate, cut by C and D, has been touched.",
      answer_cn: "用磷脂酶A2，它断裂sn-2位的酯键。剩下的是仍带着sn-1位脂肪酸的甘油骨架、磷酸基团和胆碱头部基团——因为没有用A1，磷酸两侧由C和D负责的两个键也都没有被动过。"
    }
  ],

  "8-4-2-2": [
    {
      type: "mcq",
      q_en: "The ganglioside figure numbers six enzyme arrows, but only five different enzymes are named. Why?",
      q_cn: "神经节苷脂的图中标了六个酶的箭头，却只命名了五种不同的酶。为什么？",
      options: [
        "One of the six arrows is a non-enzymatic step",
        "Beta-galactosidase is the same enzyme acting at two positions, on the terminal and on the internal galactose",
        "The sialidase has to act twice, once at each end of the chain",
        "Sphingomyelinase is counted once for the ganglioside and once for sphingomyelin"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-4-3" },
      optionNotes: {
        0: { en: "Every arrow in this degradation is enzymatic. The one clearly non-enzymatic step in this half of the chapter is elsewhere: acetoacetate decarboxylating to acetone.", cn: "这条降解途径中的每个箭头都是酶促的。本章后半部分明确非酶促的那一步在别处：乙酰乙酸脱羧生成丙酮。" },
        2: { en: "There is only one NeuNAc in this structure, a single branching residue on the galactose, so N-acetylneuraminidase acts once.", cn: "该结构中只有一个NeuNAc，是接在半乳糖上的单个支链残基，所以N-乙酰神经氨酸酶只作用一次。" },
        3: { en: "Sphingomyelinase belongs to the other example entirely: it cleaves sphingomyelin into ceramide and phosphocholine and takes no part in dismantling the ganglioside sugar chain.", cn: "鞘磷脂酶完全属于另一个例子：它把鞘磷脂裂解为神经酰胺和磷酸胆碱，不参与拆解神经节苷脂的糖链。" }
      },
      why_en: "The chain is ceramide-glucose-galactose(with branching NeuNAc)-N-acetylgalactosamine-galactose, and beta-galactosidase is numbered as both arrow 3 and arrow 5 because it removes the terminal galactose and then, later, the internal one. Five enzymes therefore cover six removals.",
      why_cn: "糖链是神经酰胺-葡萄糖-半乳糖（带支链NeuNAc）-N-乙酰半乳糖胺-半乳糖，而β-半乳糖苷酶同时被标为箭头3和箭头5，因为它先切除末端半乳糖，之后再切除内部的那一个。因此五种酶完成了六次切除。"
    },
    {
      type: "mcq",
      q_en: "Sphingosine-phosphate is cleaved into ethanolamine-phosphate plus palmitaldehyde. What does the book say becomes of the aldehyde half?",
      q_cn: "鞘氨醇磷酸被裂解为磷酸乙醇胺和棕榈醛。教材说这个醛的部分随后变成什么？",
      options: [
        "An oxidase converts it to palmitate",
        "A thiokinase condenses it with CoASH to palmitoyl-CoA",
        "It is decarboxylated to acetone and CO2",
        "It is reduced back to sphingosine"
      ],
      answer: 0,
      optionRefs: { 1: "8-4-4-1", 2: "8-4-4-3" },
      optionNotes: {
        1: { en: "Thiokinase does exist in this chapter, but it activates a free fatty ACID to its CoA thioester, and the book does not apply it here — the step drawn after palmitaldehyde is an oxidation, not an activation.", cn: "硫激酶在本章确实出现过，但它是把游离脂肪「酸」活化为辅酶A硫酯，教材并未把它用在此处——棕榈醛之后画的是氧化，而不是活化。" },
        2: { en: "Decarboxylation to acetone belongs to the ketone-body pathway and its substrate is acetoacetate, not an aldehyde.", cn: "脱羧生成丙酮属于酮体途径，其底物是乙酰乙酸，而不是醛。" },
        3: { en: "The pathway runs one way in the figure: sphingosine is phosphorylated and then cleaved. Nothing reassembles it.", cn: "图中该途径是单向的：鞘氨醇先被磷酸化，然后被裂解。没有任何步骤把它重新组装回去。" }
      },
      why_en: "The figure ends the sphingosine branch with an oxidase converting palmitaldehyde to palmitate. Worth noting the node own caution: sphingosine carries a double bond that many other sources say survives into an unsaturated product, but this book draws the saturated palmitaldehyde and palmitate, and that is what an answer should report.",
      why_cn: "图中鞘氨醇这一支以氧化酶把棕榈醛转化为棕榈酸作结。值得注意本节点自己的提醒：鞘氨醇带有一个双键，许多其他资料认为该双键会保留到不饱和产物中，但本教材画的是饱和的棕榈醛和棕榈酸，答题时应按教材所画作答。"
    },
    {
      type: "short",
      q_en: "Sphingolipid degradation ends in a small set of basic building blocks. Name them, and say which enzyme releases each of them from sphingomyelin as opposed to from a ganglioside.",
      q_cn: "鞘脂降解最终得到少数几种基本构件。请说出它们是什么，并说明在鞘磷脂和在神经节苷脂中，各自是由哪个酶释放出来的。",
      accept: ["ceramide", "phosphorylcholine", "phosphocholine", "monosaccharide", "sphingomyelinase", "glucosidase", "神经酰胺", "磷酸胆碱", "单糖"],
      answer_en: "The basic building blocks are ceramide, phosphorylcholine and monosaccharides. From sphingomyelin, a single enzyme, sphingomyelinase, releases ceramide and phosphocholine in one cut. From a ganglioside there is no phosphocholine at all; instead a series of glycosidases strips the sugars from the terminal end inward, and the last of them, beta-glucosidase, removes the glucose that was attached directly to ceramide, leaving ceramide free.",
      answer_cn: "基本构件是神经酰胺、磷酸胆碱和单糖。对鞘磷脂而言，单一的鞘磷脂酶一刀就同时释放出神经酰胺和磷酸胆碱。神经节苷脂则根本没有磷酸胆碱；取而代之的是一系列糖苷酶从末端向内逐个切除糖基，最后一个β-葡萄糖苷酶切除直接连在神经酰胺上的葡萄糖，从而释放出游离的神经酰胺。"
    }
  ],

  "8-4-3": [
    {
      type: "mcq",
      q_en: "The book says the further fate of excreted terpenoids and steroids is not sufficiently mapped. What does it presume happens to them?",
      q_cn: "教材说被排出的萜类和类固醇之后的去向尚未被充分阐明。教材推测它们可能发生什么？",
      options: [
        "They are reabsorbed and reused by the same organism",
        "They may be utilised by heterotrophic bacteria",
        "They are degraded by beta-oxidation like fatty acids",
        "They are stored as triacylglycerol in fat cells"
      ],
      answer: 1,
      optionRefs: { 2: "8-4-4-2", 3: "8-4-1" },
      optionNotes: {
        0: { en: "Nothing in the course corresponds to this one — the book says these compounds leave the body, and offers no reabsorption route.", cn: "课程中没有任何内容与此对应——教材说这些化合物离开机体，并未提出任何重吸收途径。" },
        2: { en: "Beta-oxidation is the catabolic pathway for fatty acids, chopping two carbons at a time from the carboxyl end. This section states the exact opposite for terpenoids: they are, as a rule, not metabolised as a source of energy or carbon.", cn: "β-氧化是脂肪酸的分解途径，从羧基端每次切下两个碳。本节对萜类的说法恰恰相反：它们通常不被作为能量或碳来源加以代谢。" },
        3: { en: "Triacylglycerol is the main storage substance, but it is a simple lipid built from glycerol and fatty acids. Terpenoids are not converted into it.", cn: "三酰甘油确实是主要储能物质，但它是由甘油和脂肪酸构成的简单脂质。萜类不会被转化成它。" }
      },
      why_en: "The book is candid here: terpenoids and steroids made by higher organisms are, as a rule, not used by those organisms for energy or carbon, they are excreted, and what happens next is not well mapped — with the presumption, stated as such, that heterotrophic bacteria may use them.",
      why_cn: "教材在这里说得很坦率：高等生物合成的萜类和类固醇通常不被这些生物自身用作能量或碳来源，而是被排出体外，此后的去向尚未被充分阐明——教材只是推测（并明说是推测）异养细菌可能利用它们。"
    },
    {
      type: "short",
      q_en: "Cholesterol is described as an exception here, but only in one respect. Explain what is and is not exceptional about it.",
      q_cn: "教材在此把胆固醇称作一个例外，但只是在某一方面。请解释它在哪方面是例外、在哪方面不是。",
      accept: ["bile acid", "salts", "excreted", "route", "not metabolised", "not metabolized", "胆汁酸", "排出", "途径"],
      answer_en: "What is exceptional is the route: cholesterol cannot simply leave the animal body as it is, it must first be converted into bile acids and their salts, and only then is it excreted. What is not exceptional is the principle — like the other derived lipids it is still leaving the body rather than being metabolised as a source of energy or carbon.",
      answer_cn: "例外的是途径：胆固醇不能就那样直接离开动物体，必须先转化为胆汁酸及其盐，然后才被排出。不例外的是原则——与其他衍生脂质一样，它最终仍是被排出体外，而不是被当作能量或碳来源代谢掉。"
    }
  ],

  "8-4-4-1": [
    {
      type: "mcq",
      q_en: "Which enzyme does the book label for the second step of fatty acid activation, and what is that enzyme doing?",
      q_cn: "教材为脂肪酸活化的第二步标注了哪个酶？这个酶在做什么？",
      options: [
        "Thiolase, cleaving a carbon-carbon bond",
        "Thiokinase, joining the acyladenylate to CoASH and releasing AMP",
        "Acetyl-CoA carboxylase, adding CO2 with biotin",
        "Lipase, hydrolysing an ester bond"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-4-2", 2: "8-3-1", 3: "8-4-1" },
      optionNotes: {
        0: { en: "Thiolase is the standard name of the enzyme for the thiolytic cleavage step of beta-oxidation, which splits acetyl-CoA off a beta-ketoacyl-CoA. It takes a molecule apart; activation puts one together.", cn: "硫解酶是β-氧化中硫解裂解步骤那个酶的标准名称，它从β-酮酰基辅酶A上切下乙酰辅酶A。它拆分子，而活化是把分子接起来。" },
        2: { en: "Acetyl-CoA carboxylase is the activating step of fatty acid SYNTHESIS, converting acetyl-CoA to malonyl-CoA using ATP, CO2 and biotin. Both reactions are called activation, but they act on different substrates in opposite metabolic directions.", cn: "乙酰辅酶A羧化酶是脂肪酸「合成」的活化步骤，利用ATP、CO2和生物素把乙酰辅酶A变成丙二酰辅酶A。两者都叫「活化」，但底物不同、代谢方向相反。" },
        3: { en: "Lipase is what produced the free fatty acid in the first place, by hydrolysing triacylglycerol ester bonds. It plays no part in attaching CoA.", cn: "脂肪酶是最初通过水解三酰甘油酯键产生游离脂肪酸的那个酶，与连接辅酶A无关。" }
      },
      why_en: "The book labels the second step thiokinase, also known as acyl-CoA synthetase: the bracketed acyladenylate intermediate reacts with a further CoASH to give the acyl-CoA thioester, releasing AMP. Reading the enzyme name alone is not enough here, since chapter 8 contains several enzymes with confusingly similar names doing opposite chemistry.",
      why_cn: "教材把第二步的酶标为thiokinase（硫激酶），即酰基辅酶A合成酶：括号中的酰基腺苷酸中间体与另一分子CoASH反应生成酰基辅酶A硫酯，并释放AMP。这里光看酶名是不够的，因为第8章有好几个名字容易混淆、化学方向却相反的酶。"
    },
    {
      type: "mcq",
      q_en: "Is fatty acid activation a step of catabolism specifically?",
      q_cn: "脂肪酸的活化是不是专属于分解代谢的步骤？",
      options: [
        "Yes — it is required only before beta-oxidation",
        "No — it is required before a fatty acid enters any metabolic pathway, anabolic or catabolic",
        "Yes — it happens only inside the mitochondrial matrix, where degradation occurs",
        "No — but only unsaturated fatty acids need it"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-4-2", 2: "8-4-4-2", 3: "8-4-4-4" },
      optionNotes: {
        0: { en: "Beta-oxidation does need activated fatty acids, but so does biosynthesis: acyl-CoA is the form in which fatty acids are handed to the acylation steps that build phosphatidic acid and triacylglycerol.", cn: "β-氧化确实需要活化的脂肪酸，但合成同样需要：脂酰辅酶A正是脂肪酸被送入构建磷脂酸和三酰甘油那些酰化步骤时的形式。" },
        2: { en: "The mitochondrial matrix is where beta-oxidation is localised. This node describes the chemistry of activation but does not place it in a compartment at all — supplying one would be adding a fact the page does not give.", cn: "线粒体基质是β-氧化的定位。本节点讲的是活化的化学过程，完全没有给出它发生在哪个区室——擅自补上一个就是添加书上没有的事实。" },
        3: { en: "Unsaturated fatty acids do need two extra enzymes, but that complication arises inside beta-oxidation, at the hydration step, not at activation. Activation is the same for all fatty acids.", cn: "不饱和脂肪酸确实需要两种额外的酶，但那个麻烦出现在β-氧化内部的水合步骤，而不是活化步骤。活化对所有脂肪酸都是一样的。" }
      },
      why_en: "The book states the requirement in the broadest possible terms: before free fatty acids can be incorporated into any metabolic pathway, anabolic or catabolic alike, they must be converted into the thioester form with coenzyme A. That is why the same reaction turns up again at the end of fatty acid biosynthesis.",
      why_cn: "教材以最宽泛的方式陈述这个要求：游离脂肪酸在被纳入任何代谢途径之前，无论合成还是分解，都必须转化为与辅酶A结合的硫酯形式。这也是为什么同一个反应在脂肪酸生物合成的末尾会再次出现。"
    },
    {
      type: "short",
      q_en: "The acyladenylate is drawn inside brackets in the book diagram. What does that notation signify, and what becomes of its AMP?",
      q_cn: "教材图中把酰基腺苷酸画在括号里。这个记号表示什么？其中的AMP最后去了哪里？",
      accept: ["unstable", "transient", "intermediate", "AMP", "released", "step 2", "不稳定", "中间体", "释放"],
      answer_en: "The brackets mark it as an unstable, transient intermediate rather than an isolable product: RCH2CO-AMP forms in step 1, with pyrophosphate released, and is consumed immediately in step 2. In that second step a further CoASH displaces the AMP, which is released as the byproduct while the acyl group ends up on coenzyme A as the activated acyl-CoA thioester.",
      answer_cn: "括号表示它是一个不稳定的瞬时中间体，而不是可以分离出来的产物：RCH2CO-AMP在第一步生成并释放焦磷酸，随即在第二步被消耗掉。在第二步中，另一分子CoASH取代了AMP，AMP作为副产物被释放，酰基则转到辅酶A上，成为活化的酰基辅酶A硫酯。"
    }
  ],

  "8-4-4-2": [
    {
      type: "mcq",
      q_en: "In one turn of the beta-oxidation cycle, which cofactor is reduced at which of the two dehydrogenation steps?",
      q_cn: "在β-氧化循环的一轮当中，两次脱氢步骤分别还原的是哪种辅因子？",
      options: [
        "FAD at step A and NAD+ at step C",
        "NAD+ at step A and FAD at step C",
        "NADPH at both dehydrogenations",
        "FAD at step A and NADP+ at step C"
      ],
      answer: 0,
      optionRefs: { 2: "8-3-3", 3: "8-3-3" },
      optionNotes: {
        1: { en: "The two are swapped. Step A is acyl-CoA dehydrogenase, which is the FAD-dependent one and creates the trans double bond; step C is beta-hydroxyacyl-CoA dehydrogenase, which is NAD+-dependent.", cn: "两者调换了。步骤A是酰基辅酶A脱氢酶，依赖FAD并生成反式双键；步骤C是β-羟酰基辅酶A脱氢酶，依赖NAD+。" },
        2: { en: "NADPH is the reductant of fatty acid SYNTHESIS, spent at both reduction steps of the synthase cycle. It is a reducing agent, so it cannot be reduced by an oxidative pathway in the first place.", cn: "NADPH是脂肪酸「合成」的还原剂，在合成酶循环的两次还原步骤中被消耗。它本身是还原剂，因此根本不可能被一条氧化途径所还原。" },
        3: { en: "The phosphorylated cofactor pair NADP+/NADPH belongs to the reductive, biosynthetic side of metabolism; beta-oxidation uses the unphosphorylated NAD+/NADH pair.", cn: "磷酸化的NADP+/NADPH这一对属于还原性的合成代谢一侧；β-氧化用的是未磷酸化的NAD+/NADH。" }
      },
      why_en: "Each cycle runs dehydrogenation, hydration, dehydrogenation, thiolytic cleavage. The first dehydrogenation is FAD to FADH2 by acyl-CoA dehydrogenase, the second is NAD+ to NADH(H+) by beta-hydroxyacyl-CoA dehydrogenase — which is why complete oxidation of stearic acid gives 8 FADH2 and 8 NADH, one of each per cycle.",
      why_cn: "每一轮循环依次是脱氢、水合、脱氢、硫解裂解。第一次脱氢由酰基辅酶A脱氢酶把FAD还原为FADH2，第二次由β-羟酰基辅酶A脱氢酶把NAD+还原为NADH(H+)——这正是硬脂酸完全氧化会得到8分子FADH2和8分子NADH（每轮各一）的原因。"
    },
    {
      type: "mcq",
      q_en: "Which of the four steps in one cycle is the one that actually shortens the hydrocarbon chain, and what does it consume?",
      q_cn: "一轮循环的四个步骤中，真正使碳链缩短的是哪一步？它消耗什么？",
      options: [
        "Step A, the first dehydrogenation, consuming FAD",
        "Step B, the hydration, consuming H2O",
        "Step C, the second dehydrogenation, consuming NAD+",
        "Step D, the thiolytic cleavage, consuming CoASH"
      ],
      answer: 3,
      optionNotes: {
        0: { en: "Step A leaves every carbon in place — it only introduces a trans double bond between the alpha and beta carbons.", cn: "步骤A不改变任何碳的数目——它只是在α碳和β碳之间引入一个反式双键。" },
        1: { en: "Step B adds water across that double bond, giving the L-hydroxyacyl-CoA. Adding water does not remove carbons.", cn: "步骤B是在该双键上加水，生成L型羟酰基辅酶A。加水并不会移走碳。" },
        2: { en: "Step C oxidises the hydroxyl to a keto group, producing the beta-ketoacyl-CoA. It sets the chain up for cleavage but does not perform it.", cn: "步骤C把羟基氧化为酮基，生成β-酮酰基辅酶A。它为裂解做好准备，但并不执行裂解。" }
      },
      why_en: "The first three steps only rearrange the oxidation state around the beta carbon. It is the fourth, the thiolytic cleavage, that adds a molecule of CoASH, splits off one acetyl-CoA and leaves an acyl-CoA two carbons shorter — and that is the only step of the cycle that changes chain length.",
      why_cn: "前三步只是围绕β碳改变氧化态。真正加入一分子CoASH、切下一分子乙酰辅酶A、留下缩短两个碳的酰基辅酶A的，是第四步硫解裂解——它也是整轮循环中唯一改变链长的步骤。"
    },
    {
      type: "short",
      q_en: "From which end of the fatty acid does degradation start, and where does the name beta-oxidation come from?",
      q_cn: "脂肪酸的降解从哪一端开始？「β-氧化」这个名字从何而来？",
      accept: ["carboxyl", "carboxyl end", "two-carbon", "beta carbon", "oxidation at the beta", "羧基端", "β碳", "两个碳"],
      answer_en: "Degradation starts at the carboxyl end, and the chain is shortened by removing two-carbon acetyl units from that end, one per cycle. The name reflects the underlying chemistry rather than the site of cleavage: the oxidations of each cycle occur at the beta carbon, which is dehydrogenated, hydrated and then oxidised to a keto group before the bond next to it is cleaved.",
      answer_cn: "降解从羧基端开始，每一轮从这一端移走一个二碳乙酰单位使碳链缩短。这个名称反映的是其化学本质而非裂解位置：每一轮的氧化都发生在β碳上——先脱氢、再水合、再被氧化成酮基，随后它旁边的键才被裂开。"
    }
  ],

  "8-4-4-3": [
    {
      type: "mcq",
      q_en: "Where does the conversion of surplus acetyl-CoA to HMG-CoA take place, and what is HMG-CoA other fate besides ketone bodies?",
      q_cn: "过剩乙酰辅酶A转化为HMG-CoA发生在哪里？除了生成酮体之外，HMG-CoA的另一条去路是什么？",
      options: [
        "In liver cells; the other fate is biosynthesis of terpenoids and steroids",
        "In muscle cells; the other fate is gluconeogenesis",
        "In fat cells; the other fate is triacylglycerol synthesis",
        "In the mitochondrial matrix of any cell; the other fate is the citrate cycle"
      ],
      answer: 0,
      optionRefs: { 1: "7-9", 2: "8-3-5", 3: "6-2-2-1" },
      optionNotes: {
        1: { en: "Gluconeogenesis is a real pathway, but the book never offers it as a fate of HMG-CoA, and it names liver cells, not muscle, as where the surplus acetyl-CoA is converted.", cn: "糖异生确实存在，但教材从未把它列为HMG-CoA的去路，而且教材说的是肝细胞而非肌细胞完成过剩乙酰辅酶A的转化。" },
        2: { en: "Fat cells are where triacylglycerol synthesis begins from glycerol phosphate and acyl-CoA — a different pathway from a different starting material.", cn: "脂肪细胞是三酰甘油合成的场所，起点是磷酸甘油和脂酰辅酶A——那是另一条途径、另一套起始物。" },
        3: { en: "The citrate cycle is exactly what cannot absorb all the acetyl-CoA in the first place; the overflow is the reason HMG-CoA is made at all.", cn: "柠檬酸循环恰恰就是那个无法把全部乙酰辅酶A都吸收掉的去处；正因为溢出，才需要生成HMG-CoA。" }
      },
      why_en: "The book puts this conversion in liver cells and then gives HMG-CoA a fork: it can feed biosynthesis of terpenoids and steroids, the same HMG-CoA that section 8.3 sends on to mevalonate, or it can be cleaved to acetyl-CoA plus free acetoacetate, which is the entry to the ketone bodies.",
      why_cn: "教材把这一转化定位在肝细胞，随后给了HMG-CoA一个岔口：它既可以进入萜类和类固醇的生物合成（也就是第8.3节里通向甲羟戊酸的那个HMG-CoA），也可以被裂解为乙酰辅酶A和游离乙酰乙酸，后者就是通向酮体的入口。"
    },
    {
      type: "mcq",
      q_en: "How many acetyl-CoA molecules go into one HMG-CoA, and what is released on the way?",
      q_cn: "生成一分子HMG-CoA需要投入几分子乙酰辅酶A？途中释放出什么？",
      options: [
        "Two acetyl-CoA, releasing one CoASH and one CO2",
        "Three acetyl-CoA, releasing two CoASH, with one H2O consumed",
        "Three acetyl-CoA plus ATP, releasing ADP and Pi",
        "Four acetyl-CoA, releasing three CoASH"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-1", 2: "8-4-4-1" },
      optionNotes: {
        0: { en: "Two acetyl-CoA get you only as far as acetoacetyl-CoA, and no CO2 is released anywhere in this figure. Carboxylation chemistry with CO2 belongs to malonyl-CoA formation on the biosynthetic side.", cn: "两分子乙酰辅酶A只能到乙酰乙酰辅酶A为止，而且本图中任何一步都不释放CO2。涉及CO2的羧化化学属于合成一侧的丙二酰辅酶A生成。" },
        2: { en: "No ATP appears in this sequence. ATP is spent when a free fatty acid is activated to acyl-CoA, a different reaction entirely.", cn: "这一系列反应中不出现ATP。消耗ATP的是游离脂肪酸活化为脂酰辅酶A那个完全不同的反应。" },
        3: { en: "HMG-CoA has six carbons, which is three acetyl units, not four.", cn: "HMG-CoA有六个碳，也就是三个乙酰单位，而不是四个。" }
      },
      why_en: "Two acetyl-CoA condense with the release of one CoASH to give acetoacetyl-CoA; that then condenses with a third acetyl-CoA plus water, releasing a second CoASH, to give HMG-CoA. Counting the acetyl units is the quickest check that a proposed route is the one the book draws.",
      why_cn: "两分子乙酰辅酶A缩合并释放一分子CoASH，生成乙酰乙酰辅酶A；后者再与第三分子乙酰辅酶A及水缩合，释放第二分子CoASH，生成HMG-CoA。数乙酰单位是检验某条路线是否就是教材所画的最快办法。"
    },
    {
      type: "short",
      q_en: "Acetone is the odd one out among the three ketone bodies. Give two ways in which it is.",
      q_cn: "在三种酮体中，丙酮是与众不同的一个。请举出两点不同之处。",
      accept: ["non-enzymatic", "enzyme", "decarboxylation", "CO2", "breath", "非酶", "脱羧", "呼气"],
      answer_en: "First, it is the only one formed without an enzyme: acetoacetate is reduced to beta-hydroxybutyrate enzymatically, but decarboxylates to acetone non-enzymatically, losing CO2 in the process. Second, it is the one that becomes detectable on the breath when ketone bodies accumulate, which is why acetone is the clinical sign rather than acetoacetate or beta-hydroxybutyrate.",
      answer_cn: "第一，它是唯一不经酶生成的：乙酰乙酸被酶促还原为β-羟基丁酸，而脱羧生成丙酮则是非酶促的，过程中失去CO2。第二，酮体蓄积时能在呼气中闻到的正是它，所以临床上作为体征出现的是丙酮，而不是乙酰乙酸或β-羟基丁酸。"
    }
  ],

  "8-4-4-4": [
    {
      type: "mcq",
      q_en: "A naturally cis-unsaturated fatty acid stalls beta-oxidation. Which step is it incompatible with, and why?",
      q_cn: "天然的顺式不饱和脂肪酸会使β-氧化受阻。它与哪一步不相容？为什么？",
      options: [
        "Step A, the dehydrogenation, because FAD cannot act on a chain that already has a double bond",
        "Step B, the hydration, because enoyl-CoA hydratase requires a trans double bond as its substrate",
        "Step D, the thiolytic cleavage, because CoASH cannot attack an unsaturated chain",
        "The activation step, because thiokinase cannot esterify an unsaturated fatty acid"
      ],
      answer: 1,
      optionRefs: { 0: "8-4-4-2", 2: "8-4-4-2", 3: "8-4-4-1" },
      optionNotes: {
        0: { en: "Step A is where the trans double bond is normally created, by acyl-CoA dehydrogenase. The problem is not that a double bond exists but that a natural one has the wrong geometry for the next enzyme.", cn: "步骤A本来就是由酰基辅酶A脱氢酶生成反式双键的地方。问题不在于「存在双键」，而在于天然双键的几何构型不符合下一个酶的要求。" },
        2: { en: "Nothing in the chapter says the thiolytic cleavage cares about unsaturation; the stated bottleneck is the stereochemical requirement earlier in the cycle.", cn: "本章没有任何地方说硫解裂解在意是否饱和；教材点明的瓶颈是循环中更早的立体化学要求。" },
        3: { en: "Activation is described as the same two-step, thiokinase-catalysed process for fatty acids generally, with no exemption or difficulty stated for unsaturated ones.", cn: "活化被描述为对脂肪酸普遍适用的、由硫激酶催化的两步过程，教材未对不饱和脂肪酸提出任何例外或困难。" }
      },
      why_en: "Beta-oxidation step B requires a trans double bond, because that is what step A normally hands it. Natural unsaturated fatty acids carry cis bonds instead, so a cis-trans isomerase and an epimerase must intervene in the sequence before the cycle can run to completion.",
      why_cn: "β-氧化的步骤B要求底物带反式双键，因为正常情况下正是步骤A交给它的那种。而天然不饱和脂肪酸带的是顺式双键，所以必须由顺反异构酶和差向异构酶介入反应序列，循环才能顺利进行到底。"
    },
    {
      type: "mcq",
      q_en: "A beta-methyl-branched fatty acid ends up at HMG-CoA. What has to happen first, and what can HMG-CoA then do?",
      q_cn: "β-甲基支链脂肪酸最终降解到HMG-CoA。在此之前必须先发生什么？HMG-CoA随后可以做什么？",
      options: [
        "A NADPH-dependent reduction first; HMG-CoA can then only go on to mevalonate",
        "A biotin-dependent carboxylation to a dicarboxylic acid first; HMG-CoA can then start isoprenoid biosynthesis or be degraded further to acetyl-CoA and acetoacetate",
        "An ATP-dependent phosphorylation first; HMG-CoA can then only become ketone bodies",
        "An extra FAD-dependent dehydrogenation first; HMG-CoA then re-enters beta-oxidation unchanged"
      ],
      answer: 1,
      optionRefs: { 0: "8-3-7", 2: "8-4-4-3", 3: "8-4-4-2" },
      optionNotes: {
        0: { en: "An NADPH-dependent reduction of HMG-CoA does exist — that is HMG-CoA reductase making mevalonic acid — but it comes after HMG-CoA, not before it, and it is only one of the two fates offered here.", cn: "对HMG-CoA的NADPH依赖性还原确实存在——那就是HMG-CoA还原酶生成甲羟戊酸——但它发生在HMG-CoA之后而非之前，而且只是此处两条去路中的一条。" },
        2: { en: "Degradation to acetyl-CoA plus acetoacetate is genuinely one of the two fates, but no phosphorylation is involved in reaching HMG-CoA from a branched chain, and calling ketone bodies the only outcome drops the isoprenoid branch.", cn: "降解为乙酰辅酶A加乙酰乙酸确实是两条去路之一，但从支链到达HMG-CoA的过程中并不涉及磷酸化；而且只说酮体就漏掉了类异戊二烯那条分支。" },
        3: { en: "An FAD-dependent dehydrogenation is step A of the ordinary cycle, which is exactly what a beta-methyl branch blocks; HMG-CoA is the endpoint of this route, not something fed back into the cycle.", cn: "FAD依赖的脱氢是普通循环的步骤A，而β-甲基支链恰恰阻断了它；HMG-CoA是这条路线的终点，而不是被送回循环的中间体。" }
      },
      why_en: "The book gives a biotin-requiring, enzyme-catalysed carboxylation as the necessary first move for a beta-methyl branch, producing a dicarboxylic acid, with HMG-CoA as the final degradation product. From there it can either serve as the starting compound for isoprenoid biosynthesis or be broken down to acetyl-CoA and acetoacetate.",
      why_cn: "教材指出，β-甲基支链必须先经过需要生物素的酶促羧化，生成二羧酸，最终降解产物是HMG-CoA。到了这一步，它既可以作为类异戊二烯生物合成的起始物，也可以被继续分解为乙酰辅酶A和乙酰乙酸。"
    },
    {
      type: "short",
      q_en: "Why can ordinary beta-oxidation get a good way through a branched fatty acid before the branch becomes a problem at all?",
      q_cn: "为什么普通的β-氧化能够先把支链脂肪酸降解相当一段，之后分支才真正成为问题？",
      accept: ["methyl", "single methyl", "opposite", "carboxyl", "alpha", "beta", "甲基", "羧基", "对面"],
      answer_en: "Because the branching is usually modest, typically a single methyl group, and it sits on the side of the molecule opposite the carboxyl group. Degradation starts from the carboxyl end, so ordinary cycles can keep removing two carbons at a time from a perfectly straight stretch of chain, and the branch only matters once it has come to sit on the alpha or beta carbon of the now-shortened molecule.",
      answer_cn: "因为分支通常不大，一般只是一个甲基，而且位于分子中远离羧基的一端。降解是从羧基端开始的，所以普通的循环可以在完全笔直的一段链上不断每次切下两个碳；只有当分支点落到已经缩短了的分子的α碳或β碳上时，它才开始起作用。"
    }
  ],

  "8-5": [
    {
      type: "mcq",
      q_en: "The book introduction divides the membranes inside a eukaryotic cell into two descriptions. Which option lists the membranous structures of the cytoplasm, as opposed to the membrane-bounded organelles?",
      q_cn: "教材引言把真核细胞内部的膜分成两类来描述。下列哪一项列出的是细胞质中的膜性结构，而非由膜包被的细胞器？",
      options: [
        "Nucleus and mitochondria",
        "Golgi apparatus, endoplasmic reticulum, microsomes",
        "The lipid bilayer and its integral proteins",
        "Ribosomes and the cytoskeleton"
      ],
      answer: 1,
      optionRefs: { 2: "8-5-2-1" },
      optionNotes: {
        0: { en: "These are the examples the book gives for the other category in the same sentence: subcellular organelles bounded by a membrane.", cn: "这两个正是教材在同一句话中为另一类别所举的例子：由膜包被的亚细胞器。" },
        2: { en: "These are components of a membrane, not structures that a cytoplasm contains. The bilayer and its proteins are what any of these membranes is made of.", cn: "这是「膜的组分」，而不是细胞质中所含的结构。双分子层及其蛋白质是上述任何一种膜的构成材料。" },
        3: { en: "Nothing in this node corresponds to this one.", cn: "本节点没有任何内容与此对应。" }
      },
      why_en: "The introduction makes the split explicitly: organelles such as the nucleus and mitochondria are bounded by a membrane, and the cytoplasm in addition contains further subcellular membranous structures, naming the Golgi apparatus, endoplasmic reticulum and microsomes.",
      why_cn: "引言明确作了这个区分：细胞核、线粒体等细胞器由膜包被，而细胞质中另外还含有其他亚细胞膜性结构，教材点名的是高尔基体、内质网和微粒体。"
    },
    {
      type: "mcq",
      q_en: "Which statement matches what the book says about which cells have membranes and where?",
      q_cn: "关于「哪些细胞有膜、膜在哪里」，下列哪一项符合教材的说法？",
      options: [
        "Only eukaryotic cells have a membrane separating them from the environment",
        "Every living cell has a boundary membrane; eukaryotic cells additionally partition their interior with membranes",
        "Membranes occur only around organelles, never around the cell as a whole",
        "Prokaryotes partition their interior with membranes; eukaryotes do not"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The book opens by saying the internal space of EVERY living cell is separated from the external environment by a cell membrane. What is additional in eukaryotes is the internal partitioning, not the boundary itself.", cn: "教材开篇就说「每一个」活细胞的内部空间都由细胞膜与外部环境隔开。真核细胞多出来的是内部的分隔，而不是边界膜本身。" },
        2: { en: "This reverses the picture: the cell membrane around the whole cell is the first thing the book names, and organelle membranes come second, as an addition in eukaryotes.", cn: "这把情况颠倒了：教材首先提到的就是包围整个细胞的细胞膜，细胞器的膜是其次的、真核细胞额外具有的。" },
        3: { en: "The direction is reversed. It is the eukaryotic cell that the book describes as additionally partitioning its internal space with membranes.", cn: "方向反了。教材描述为「另外用膜分隔其内部空间」的是真核细胞。" }
      },
      why_en: "Two separate claims sit in the introduction opening sentences, and mixing them is a common exam slip: a boundary membrane is universal to living cells, while internal membrane partitioning is what the book presents as the eukaryotic addition.",
      why_cn: "引言开头的两句话包含两个不同的论断，把它们混起来是考试中常见的失误：边界膜是所有活细胞共有的，而用膜分隔内部空间才是教材呈现为真核细胞额外具有的特征。"
    },
    {
      type: "short",
      q_en: "Name the two kinds of membrane-delimited structure the book distinguishes inside a eukaryotic cell, giving an example of each, and say what a membrane does besides separating them.",
      q_cn: "请说出教材在真核细胞内部区分的两类由膜界定的结构，各举一例，并说明膜除了把它们隔开之外还做什么。",
      accept: ["organelle", "nucleus", "mitochondria", "Golgi", "endoplasmic reticulum", "microsome", "transport", "细胞器", "高尔基", "内质网", "转运"],
      answer_en: "First, membrane-bounded subcellular organelles, for example the nucleus and mitochondria. Second, further subcellular membranous structures held in the cytoplasm, for example the Golgi apparatus, the endoplasmic reticulum and microsomes. Beyond separating biochemically and physiologically distinct spaces, membranes carry out selective transport in and out of the cell and its compartments, bind hormones and other regulatory systems, transmit electrical impulses, and host enzyme reactions including bioenergetically important processes and ATP production.",
      answer_cn: "第一类是由膜包被的亚细胞器，例如细胞核和线粒体。第二类是细胞质中所含的其他亚细胞膜性结构，例如高尔基体、内质网和微粒体。除了把生化和生理上不同的空间隔开之外，膜还负责物质进出细胞及各区室的选择性转运、与激素和其他调节系统结合、传递电脉冲，并承载包括生物能学重要过程和ATP生成在内的酶促反应。"
    }
  ],

  "8-5-1": [
    {
      type: "mcq",
      q_en: "A membrane is measured at a protein:lipid weight ratio of 3:1. What does this section let you conclude?",
      q_cn: "测得某种膜的蛋白质:脂质质量比为3:1。根据本节内容可以得出什么结论？",
      options: [
        "Nothing — the book gives a single fixed ratio of 1:1 for all membranes",
        "It sits at the protein-rich end of the range the book gives, 1:4 to 3:1",
        "It lies outside the book range, so the measurement must be wrong",
        "It means this membrane contains no carbohydrate"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The book gives a range, not a fixed value, and says the representation varies substantially with the origin and function of the membrane.", cn: "教材给的是一个范围而不是固定值，并说明该比例因膜的来源和功能而有很大差异。" },
        2: { en: "3:1 is the stated upper bound of the range, so it is inside it, at the extreme.", cn: "3:1正是教材所给范围的上限，因此它在范围之内，位于极端处。" },
        3: { en: "Carbohydrate is always present in membranes, as glycoprotein or glycolipid, at 0.5-10% of mass. Its presence is independent of where the protein:lipid ratio falls.", cn: "糖类在膜中总是存在的，以糖蛋白或糖脂的形式，占膜质量的0.5%-10%。它是否存在与蛋白质:脂质比落在何处无关。" }
      },
      why_en: "The whole point of the range 1:4 to 3:1 is that it is wide: it encodes how differently specialised membranes are. A ratio at either end is informative about the membrane, not evidence of error.",
      why_cn: "给出1:4到3:1这个范围的意义就在于它很宽：它体现了不同的膜在特化程度上的巨大差异。落在两端的比值是关于该膜的信息，而不是测量出错的证据。"
    },
    {
      type: "short",
      q_en: "Is carbohydrate ever present in a membrane as a free component? Answer and quantify.",
      q_cn: "膜中的糖类会以游离组分的形式存在吗？请回答并给出定量说明。",
      accept: ["never free", "always", "glycoprotein", "glycolipid", "0.5", "10%", "糖蛋白", "糖脂"],
      answer_en: "No. Carbohydrate is always a component of membranes, but it is always found attached, either in the form of glycoproteins or of glycolipids, never as a free-standing constituent. Together these carbohydrate portions represent 0.5 to 10 per cent of membrane mass.",
      answer_cn: "不会。糖类始终是膜的组分之一，但它总是以结合形式出现——要么是糖蛋白，要么是糖脂——绝不会作为独立的游离成分存在。这些糖类部分合计占膜质量的0.5%至10%。"
    }
  ],

  "8-5-2-1": [
    {
      type: "mcq",
      q_en: "What kind of interaction holds the lipids of one monolayer together and the two monolayers to each other?",
      q_cn: "是什么样的相互作用把同一单层内的脂质、以及两个单层彼此维系在一起？",
      options: [
        "Covalent bonds within a monolayer, non-covalent interactions between the monolayers",
        "Exclusively non-covalent interactions, for both the heads and the tails",
        "Hydrophobic interaction between the heads and hydrogen bonding between the tails",
        "Disulfide bridges linking the two leaflets"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The book states the interactions of both heads and tails are exclusively non-covalent — there is no covalent bonding holding a monolayer together either.", cn: "教材说头部与尾部的相互作用都完全是非共价的——单层内部同样没有共价键把脂质连在一起。" },
        2: { en: "The two are swapped. The tails are the hydrophobic part and the heads are the hydrophilic part, which is what makes the bilayer non-polar in the middle and polar at both surfaces.", cn: "两者调换了。尾部是疏水部分，头部是亲水部分，正因如此双分子层才中间非极性、两侧表面为极性。" },
        3: { en: "A disulfide bridge is a covalent link, and nothing in the bilayer architecture described here is covalent.", cn: "二硫键是共价连接，而此处所描述的双分子层构造中没有任何共价成分。" }
      },
      why_en: "This matters because it is what makes the bilayer a self-assembling, mobile structure rather than a fixed sheet: no covalent bond has to be broken for a lipid to move laterally, or for the flip-flop mechanism to exchange lipids between the two monolayers.",
      why_cn: "这一点之所以重要，是因为它使双分子层成为一种可自组装、可流动的结构，而不是固定的片层：脂质在膜内侧向移动、或通过翻转机制在两个单层之间交换时，都不需要打断任何共价键。"
    },
    {
      type: "mcq",
      q_en: "Which lipids does the book use as its example of asymmetric distribution, and in which monolayer does it place them?",
      q_cn: "教材用哪些脂质作为不对称分布的例子？把它们放在哪一层单层？",
      options: [
        "Cerebrosides and gangliosides, generally in the outer monolayer",
        "Cholesterol, exclusively in the inner monolayer",
        "Phosphatidylcholine, exclusively in the inner monolayer",
        "Sphingomyelin, distributed evenly between the two monolayers"
      ],
      answer: 0,
      optionRefs: { 1: "8-2-4-4", 2: "8-2-3-2", 3: "8-2-3-3" },
      optionNotes: {
        1: { en: "Cholesterol does appear in this node, but as one of the three determinants of fluidity, not as an example of asymmetry — more cholesterol makes the bilayer less fluid.", cn: "胆固醇在本节点中确实出现，但它是三个流动性决定因素之一，而不是不对称性的例子——胆固醇越多，双分子层流动性越低。" },
        2: { en: "Phosphatidylcholine is the book worked example elsewhere, for the four phospholipase cleavage sites. This node makes no claim about which leaflet it occupies.", cn: "磷脂酰胆碱是教材在别处用来讲四种磷脂酶切割位点的示例分子。本节点并未对它位于哪一层作任何论断。" },
        3: { en: "An even distribution is the opposite of the phenomenon being defined. Asymmetry is precisely the observation that composition differs between the leaflets.", cn: "分布均匀恰恰与此处所定义的现象相反。不对称性说的正是两层单层在组成上存在差异。" }
      },
      why_en: "Asymmetry means the two monolayers share the same lipid arrangement but not the same lipid composition, and the example the book gives is that cerebrosides and gangliosides are generally located in the outer monolayer of the cell membrane. How pronounced the asymmetry is varies with membrane type, function and age.",
      why_cn: "不对称性指的是两个单层脂质的「排列方式」相同、「组成」不同，教材举的例子是脑苷脂和神经节苷脂通常位于细胞膜的外层单层。不对称的程度因膜的种类、功能和「年龄」而异。"
    },
    {
      type: "short",
      q_en: "Give the thickness of the lipid bilayer and explain what makes its centre chemically different from its two surfaces.",
      q_cn: "请说出脂质双分子层的厚度，并解释是什么使它的中心与两侧表面在化学性质上不同。",
      accept: ["3.5", "4.0", "nm", "non-polar", "polar", "tail to tail", "非极性", "极性", "尾对尾"],
      answer_en: "Approximately 3.5 to 4.0 nm. The two monolayers are oriented tail to tail, so all the hydrophobic hydrocarbon tails meet in the middle and all the hydrophilic head groups face outward on both sides. That gives a markedly non-polar centre with a polar surface on either face, which is the basis of the membrane barrier property.",
      answer_cn: "约3.5至4.0纳米。两个单层以尾对尾的方式取向，因此所有疏水的碳氢尾部都汇聚在中间，所有亲水的头部基团都朝向两侧外部。这就造成中心高度非极性、两个表面均为极性的结构，也正是膜之所以能起屏障作用的基础。"
    }
  ],

  "8-5-2-2": [
    {
      type: "mcq",
      q_en: "Why can a peripheral membrane protein be released from the membrane and isolated as a pure protein by a relatively simple procedure?",
      q_cn: "为什么外周膜蛋白可以用相对简单的方法从膜上释放下来、并分离为纯蛋白？",
      options: [
        "Because it is bound non-covalently, through polar amino-acid side chains, to the hydrophilic surface of the bilayer",
        "Because it is covalently anchored and the anchor is easy to cleave",
        "Because it spans the membrane, so pulling on either end frees it",
        "Because it carries a carbohydrate unit that makes it water-soluble"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The binding is explicitly non-covalent. Nothing has to be cleaved, which is exactly why the procedure is simple.", cn: "这种结合被明确说明为非共价的。根本不需要打断什么键，这正是操作简单的原因。" },
        2: { en: "Spanning the membrane describes an integral protein, labelled IP2 in the book figure. Those sit in the hydrophobic interior and are held by hydrophobic interactions, which is why they are the hard ones to extract.", cn: "贯穿膜说的是整合蛋白，即教材图中的IP2。它们处在疏水内部、靠疏水相互作用固定，正因如此才难以提取。" },
        3: { en: "The carbohydrate unit, labelled C in the figure, belongs to a glycoprotein, GP. Glycosylation is not what the book gives as the reason peripheral proteins are easily released.", cn: "图中标为C的糖链单位属于糖蛋白GP。教材并未把糖基化作为外周蛋白易于释放的原因。" }
      },
      why_en: "The two attachment modes explain the two extraction difficulties. A peripheral protein only ever touches the polar lipid heads, non-covalently, via its own polar side chains; an integral protein is held inside the hydrophobic interior by non-polar side chains interacting with the fatty acid tails.",
      why_cn: "两种结合方式正好解释了两种提取难度。外周蛋白只通过自身的极性侧链、以非共价方式接触脂质的极性头部；而整合蛋白是靠非极性侧链与脂肪酸尾部的相互作用被固定在疏水内部的。"
    },
    {
      type: "mcq",
      q_en: "After a membrane protein has moved within the plane of the membrane, what does the book say can happen next, and why does it matter?",
      q_cn: "膜蛋白在膜平面内移动之后，教材说接下来可能发生什么？为什么这很重要？",
      options: [
        "It is exported from the cell by exocytosis",
        "It undergoes a conformational change, which often signals further conformational changes in neighbouring proteins and acts as a regulatory factor",
        "It is hydrolysed by a phospholipase",
        "It loses its carbohydrate unit"
      ],
      answer: 1,
      optionRefs: { 0: "8-5-3-3", 2: "8-4-2-1" },
      optionNotes: {
        0: { en: "Exocytosis is a real transport mechanism, but it moves material out of the cell by local restructuring of the membrane; it is not what the book describes as the sequel to a protein moving in the membrane plane.", cn: "胞吐作用确实是一种转运机制，但它是通过膜的局部重组把物质送出细胞；教材并未把它描述为膜蛋白在膜平面内移动之后的后续。" },
        2: { en: "Phospholipases hydrolyse the ester-type bonds of phospholipids, not proteins.", cn: "磷脂酶水解的是磷脂的酯型键，而不是蛋白质。" },
        3: { en: "The carbohydrate unit, C in the book figure, is a permanent feature of a glycoprotein; nothing here describes it being shed on movement.", cn: "教材图中标为C的糖链单位是糖蛋白的固有组成部分；此处没有任何内容描述它会因运动而脱落。" }
      },
      why_en: "This is how the fluid mosaic model becomes more than a description of motion. Movement leads to conformational change, conformational change propagates to neighbouring proteins in the immediate vicinity, and in a broader sense that chain of events is a significant regulatory factor of the membrane biological activity.",
      why_cn: "正是这一点使流体镶嵌模型不只是对运动的描述。运动导致构象变化，构象变化又传递给紧邻的相邻蛋白，从更广的意义上说，这一连串事件构成了膜生物活性的重要调节因素。"
    },
    {
      type: "short",
      q_en: "What kind of interaction keeps an integral protein in the membrane, and what does that imply about its amino-acid side chains in the embedded region?",
      q_cn: "是什么样的相互作用把整合蛋白固定在膜中？这对它嵌入区段的氨基酸侧链意味着什么？",
      accept: ["hydrophobic", "non-polar", "fatty acid", "tails", "疏水", "非极性", "尾部"],
      answer_en: "Integral proteins are held in place by hydrophobic interaction between non-polar amino-acid side chains and the fatty acid tails of the lipids. The embedded region must therefore present non-polar side chains outward, which is the mirror image of a peripheral protein, whose polar side chains bind the hydrophilic surface. Degree of embedding varies: some are anchored from only one side of the bilayer, others span the whole membrane.",
      answer_cn: "整合蛋白是靠非极性氨基酸侧链与脂质脂肪酸尾部之间的疏水相互作用固定的。因此其嵌入区段必须把非极性侧链朝外呈现，这与外周蛋白正好相反——后者是用极性侧链结合亲水表面。嵌入的程度也有差别：有的只从双分子层的一侧锚定，有的则贯穿整个膜。"
    }
  ],

  "8-5-2-3": [
    {
      type: "mcq",
      q_en: "A membrane protein binds a toxin on the outer surface of the membrane, and that binding triggers biochemical change in the space the membrane bounds. Which type is it?",
      q_cn: "某种膜蛋白在膜的外侧结合一种毒素，这种结合引发了膜所包围空间内的生化变化。它属于哪一类？",
      options: [
        "A transport protein",
        "A catalytic protein",
        "A receptor protein",
        "A structural protein"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Transport proteins mediate the movement of substances into and out of the cell. Binding here produces a signal, not a translocation of the toxin.", cn: "转运蛋白介导的是物质进出细胞的移动。此处的结合产生的是信号，而不是把毒素运进去。" },
        1: { en: "Catalytic proteins mediate the enzyme reactions bound to biological membranes. A binding event that generates a signal is not itself a catalysed reaction.", cn: "催化蛋白介导的是与生物膜结合的酶促反应。产生信号的结合事件本身并不是被催化的反应。" },
        3: { en: "Structural proteins are the other half of the classification altogether: fibrous, on the hydrophilic surface, holding membrane components together like anchoring ropes.", cn: "结构蛋白属于分类中完全另外的一半：呈纤维状、位于亲水表面，像锚定绳索一样把膜的各组分维系在一起。" }
      },
      why_en: "Receptor proteins are defined by exactly this: specific binding of certain substances, the book names hormones, toxins and transmitters, on the outer side of the membrane, providing a signal that leads to biochemical changes in the membrane or in the space it bounds.",
      why_cn: "受体蛋白的定义正是这样：在膜的外侧特异性结合某些物质（教材点名的是激素、毒素和递质），提供信号，导致膜内或膜所包围空间中发生生化变化。"
    },
    {
      type: "mcq",
      q_en: "How does the structural/dynamic division relate to the peripheral/integral division?",
      q_cn: "结构蛋白／动态蛋白这一划分，与外周蛋白／整合蛋白的划分是什么关系？",
      options: [
        "They map onto each other exactly: peripheral proteins are the structural ones, integral proteins the dynamic ones",
        "They are independent classifications: the structural/dynamic division applies to both integral and peripheral proteins, and its own boundary is not sharp",
        "Only integral proteins have a function, so the structural/dynamic division applies to them alone",
        "Structural proteins are simply those with enzymatic activity"
      ],
      answer: 1,
      optionRefs: { 0: "8-5-2-2", 2: "8-5-2-2" },
      optionNotes: {
        0: { en: "The peripheral/integral pair classifies how a protein is bound to the bilayer; structural/dynamic classifies what it does. The book opens this section by saying membrane proteins, both integral and peripheral, divide by role into the two functional types.", cn: "外周／整合这一对划分的是蛋白质与双分子层的结合方式；结构／动态划分的是它做什么。教材在本节开头就说：膜蛋白，无论整合还是外周，都按作用分为这两种功能类型。" },
        2: { en: "Peripheral proteins are just as much part of a complete membrane, and the book explicitly includes them in the structural/dynamic division.", cn: "外周蛋白同样是完整生物膜的组成部分，教材明确把它们纳入结构／动态的划分中。" },
        3: { en: "Enzymatic activity describes the catalytic subtype of DYNAMIC proteins. Structural proteins are the fibrous, anchoring-rope ones on the hydrophilic surface.", cn: "具有酶活性说的是「动态蛋白」中的催化亚类。结构蛋白是位于亲水表面、呈纤维状、起锚定绳索作用的那一类。" }
      },
      why_en: "Two classifications run in parallel across the same set of proteins, and the book is careful to note that the structural/dynamic boundary is by no means sharp. Being asked which type a protein is therefore requires knowing which of the two questions is being asked: how it is attached, or what it does.",
      why_cn: "同一批蛋白质上并行着两套分类，而且教材特意指出结构／动态之间的界限并不清晰。因此当被问到某个蛋白属于哪一类时，必须先弄清问的是哪一个问题：它怎么结合，还是它做什么。"
    },
    {
      type: "short",
      q_en: "The book compares structural membrane proteins to something concrete. Describe their usual shape, their location, and the role that comparison is making.",
      q_cn: "教材用一个很具体的比喻来形容结构膜蛋白。请描述它们通常的形状、所在位置，以及这个比喻要说明的作用。",
      accept: ["elongated", "fibrous", "hydrophilic surface", "anchoring", "rope", "纤维", "亲水表面", "锚定"],
      answer_en: "They often have an elongated, fibrous shape and sit on the hydrophilic surface of the membrane, and the book calls them a kind of anchoring rope. The comparison captures their role: they do not carry out membrane processes themselves, they help maintain the structure of the membrane components and the mutual interactions between them.",
      answer_cn: "它们常呈细长的纤维状，位于膜的亲水表面，教材把它们称作一种「锚定绳索」。这个比喻抓住了它们的作用：它们本身并不执行膜上的各种过程，而是帮助维持膜各组分的结构以及它们之间的相互作用。"
    }
  ],

  "8-5-3-1": [
    {
      type: "mcq",
      q_en: "What exactly makes a transport passive, per this section?",
      q_cn: "根据本节内容，究竟什么使一种转运成为「被动」转运？",
      options: [
        "Movement down the concentration gradient without energy expenditure — whether or not a protein is involved",
        "The complete absence of protein involvement; any protein-mediated transport counts as active",
        "Movement against the concentration gradient, but without energy expenditure",
        "That only lipophilic substances are moved"
      ],
      answer: 0,
      optionRefs: { 1: "8-5-3-2", 2: "8-5-3-3" },
      optionNotes: {
        1: { en: "Protein involvement is what separates simple from facilitated diffusion, and both of those are passive. Facilitated diffusion uses a carrier and still costs no energy.", cn: "有无蛋白质参与区分的是简单扩散与易化扩散，而两者都属于被动转运。易化扩散使用载体，但依然不消耗能量。" },
        2: { en: "Going against the gradient is the definition of ACTIVE transport, and it is precisely why energy has to be supplied. The combination described here does not exist.", cn: "逆浓度梯度正是「主动」转运的定义，也正因如此才必须供给能量。此处描述的这种组合并不存在。" },
        3: { en: "Lipophilic substances are one example of what crosses by simple diffusion, alongside water and certain ions. Being lipophilic is not what makes the transport passive.", cn: "亲脂性物质只是经简单扩散跨膜的例子之一，此外还有水和某些离子。「亲脂」并不是使转运成为被动的原因。" }
      },
      why_en: "The book defines passive transport by two criteria only: direction, from higher to lower concentration, and cost, no energy expenditure. The protein question is a second, independent axis, and it is what splits passive transport into its simple and facilitated sub-types.",
      why_cn: "教材对被动转运的定义只用两个标准：方向（从高浓度到低浓度）和代价（不消耗能量）。有无蛋白质参与是另一条独立的轴线，它把被动转运再分为简单扩散和易化扩散两个亚型。"
    },
    {
      type: "mcq",
      q_en: "Which group of substances does the book say is transported by simple diffusion?",
      q_cn: "教材说通过简单扩散转运的是哪一类物质？",
      options: [
        "Glucose, amino acids and peptides",
        "Lipophilic substances, water and certain ions",
        "Proteins and DNA",
        "Only ions, never water"
      ],
      answer: 1,
      optionRefs: { 0: "8-5-3-3", 2: "8-5-3-3" },
      optionNotes: {
        0: { en: "Carbohydrates, amino acids, disaccharides and peptides are named in this chapter as the cargo of group translocation, where a carrier also chemically modifies them — the opposite end of the transport spectrum from protein-free diffusion.", cn: "糖类、氨基酸、二糖和肽在本章中被列为基团转位的转运对象，其载体还会对它们进行化学修饰——与不需要蛋白质的扩散处于转运谱系的两端。" },
        2: { en: "Proteins and DNA are what the book calls the most complicated case, moved by local restructuring of the membrane, not by diffusion at all.", cn: "蛋白质和DNA是教材所说最复杂的情形，靠膜的局部重组来转运，根本不是扩散。" },
        3: { en: "Water is explicitly included, and one of the three routes in the book figure is the flow of solution, especially water, through a micropore.", cn: "水是被明确包括在内的，教材图中三条途径之一就是溶液（尤其是水）通过微孔的流动。" }
      },
      why_en: "Simple diffusion covers lipophilic substances, water and certain ions. Reading which substance is being moved is often the quickest way to identify which transport mechanism a question is really about, since the four mechanisms in this section handle recognisably different cargo.",
      why_cn: "简单扩散涵盖亲脂性物质、水和某些离子。看被转运的是什么物质，往往是判断题目真正考的是哪种转运机制的最快办法，因为本节四种机制所处理的对象明显不同。"
    },
    {
      type: "short",
      q_en: "The book rules out two extremes of membrane permeability before defining the real case. State both extremes and what each would cost a cell.",
      q_cn: "教材在给出真实情况之前，先排除了膜通透性的两种极端。请说出这两种极端，以及各自会给细胞带来什么代价。",
      accept: ["impermeable", "isolated", "nutrition", "excrete", "freely permeable", "semipermeable", "selectively", "不通透", "隔离", "半透", "选择性"],
      answer_en: "If membranes were impermeable, cells would be completely isolated, unable to take in nutrition or excrete their products. If membranes were freely permeable, any substance could move freely between regions, so there would be no separation of biochemically distinct spaces at all. Neither extreme occurs in nature: real biological membranes are selectively permeable, that is, semipermeable, letting some substances pass freely while others cannot.",
      answer_cn: "如果膜是不通透的，细胞就会被完全隔离，既无法摄取营养，也无法排出产物。如果膜是完全通透的，任何物质都能在区域之间自由移动，那就根本谈不上把生化性质不同的空间隔开。自然界中这两种极端都不存在：真实的生物膜是选择性通透的，即半透性的——某些物质可以自由通过，另一些则不能。"
    }
  ],

  "8-5-3-2": [
    {
      type: "mcq",
      q_en: "Facilitated diffusion behaves like an enzyme reaction. Which consequence does the book actually draw from that?",
      q_cn: "易化扩散的行为方式类似于酶促反应。教材由此实际得出了什么结论？",
      options: [
        "That it therefore consumes ATP",
        "That the process can be described by the equations of enzyme kinetics",
        "That the carrier therefore chemically modifies the transported molecule",
        "That it can therefore move substances against the concentration gradient"
      ],
      answer: 1,
      optionRefs: { 0: "8-5-3-3", 2: "8-5-3-3", 3: "8-5-3-3" },
      optionNotes: {
        0: { en: "Consuming energy is the mark of active transport, not of a carrier behaving enzymatically. Facilitated diffusion remains a form of passive transport.", cn: "消耗能量是主动转运的标志，而不是「载体行为像酶」的推论。易化扩散仍然属于被动转运。" },
        2: { en: "A carrier that also chemically modifies its cargo, by phosphorylation or hydrolysis, is the definition of group translocation, a separate mechanism with its own name.", cn: "载体在转运的同时对底物进行化学修饰（磷酸化或水解），那是基团转位的定义，是另有名称的独立机制。" },
        3: { en: "Moving against the gradient requires energy and is the definition of active transport. Enzyme-like kinetics say nothing about direction.", cn: "逆梯度转运需要能量，那是主动转运的定义。类似酶的动力学与转运方向无关。" }
      },
      why_en: "The stated properties are specificity, saturability and inhibitability, and the conclusion the book draws is a methodological one: since the carrier behaves like an enzyme, the process can be described using enzyme kinetics equations. That is a statement about how to model it, not about what it costs or which way it goes.",
      why_cn: "教材列出的性质是特异性、可饱和性和可抑制性，由此得出的结论是方法论上的：既然载体的行为像酶，这一过程就可以用酶动力学方程来描述。这是关于如何建模的说法，而不是关于它耗不耗能、朝哪个方向进行的说法。"
    },
    {
      type: "mcq",
      q_en: "After the carrier has released the transported substance on the far side of the membrane, what does the book say happens to the carrier?",
      q_cn: "载体在膜的另一侧释放了被转运物质之后，教材说载体会怎样？",
      options: [
        "It returns to its original position",
        "It stays on the far side and must be replaced by a new carrier",
        "It crosses permanently into the other monolayer",
        "It is degraded together with the transported substance"
      ],
      answer: 0,
      optionRefs: { 2: "8-5-2-2" },
      optionNotes: {
        1: { en: "The mechanism the book draws is a cycle, not a one-way consumption of carriers; the same carrier is available again.", cn: "教材所画的机制是一个循环，而不是把载体一次性消耗掉；同一个载体可以再次使用。" },
        2: { en: "Permanent exchange between the two monolayers is the flip-flop mechanism, and the book explicitly says flip-flop has been found for lipids but NOT for proteins.", cn: "在两个单层之间的永久性交换指的是翻转机制，而教材明确指出翻转机制只在脂质中被发现，蛋白质中并未发现。" },
        3: { en: "Nothing in the course corresponds to this one.", cn: "课程中没有任何内容与此对应。" }
      },
      why_en: "The figure shows a closed cycle: the transported substance binds the carrier, the carrier probably moves within the membrane, the substance is released on the other side, and the carrier returns to its original position. That return step is what makes the carrier catalytic and therefore saturable, exactly like an enzyme turning over.",
      why_cn: "图中展示的是一个闭合循环：被转运物质与载体结合，载体很可能在膜内移动，物质在另一侧被释放，随后载体返回原来的位置。正是这一「返回」步骤使载体具有催化性、因而可以饱和，与酶的周转完全一样。"
    },
    {
      type: "short",
      q_en: "Facilitated diffusion is specific. What feature of the carrier is that specificity a property of?",
      q_cn: "易化扩散具有特异性。这种特异性是载体的哪一项特征所带来的？",
      accept: ["specific binding", "binding capacity", "carrier", "integral", "特异", "结合能力", "载体"],
      answer_en: "The carrier, usually an integral membrane protein, has a specific binding capacity for the substance it transports; the transported substance has to bind to it before anything moves. That binding requirement is what makes the process specific, and it is also what makes it saturable and inhibitable, since a finite number of binding sites can be occupied or blocked.",
      answer_cn: "载体通常是整合膜蛋白，对它所转运的物质具有特异的结合能力；被转运物质必须先与它结合，转运才会发生。正是这种「必须结合」的要求使该过程具有特异性，也正是它使该过程可饱和、可抑制——因为结合位点数目有限，可以被占满或被封闭。"
    }
  ],

  "8-5-3-3": [
    {
      type: "mcq",
      q_en: "The book says the mechanism of active transport is similar to facilitated diffusion. What does it name as the difference?",
      q_cn: "教材说主动转运的机制与易化扩散相似。教材指出的区别是什么？",
      options: [
        "Every step depends on the energy of the carrier, and transport runs against the concentration gradient",
        "Active transport needs no membrane protein",
        "Active transport moves only ions, while facilitated diffusion moves only organic molecules",
        "Active transport always chemically modifies the transported molecule"
      ],
      answer: 0,
      optionRefs: { 3: "8-5-3-3" },
      optionNotes: {
        1: { en: "The book states the opposite: a membrane protein ALWAYS participates in active transport, which is part of why the two mechanisms look alike.", cn: "教材说的正相反：主动转运总是有膜蛋白参与，这也正是两种机制看起来相似的原因之一。" },
        2: { en: "That split does not hold. Group translocation, described here as a form of active transport, moves carbohydrates, amino acids, disaccharides and peptides.", cn: "这种划分不成立。此处作为主动转运一种形式介绍的基团转位，转运的正是糖类、氨基酸、二糖和肽。" },
        3: { en: "Simultaneous chemical modification is group translocation specifically, a named subtype, not a general feature of active transport.", cn: "转运同时进行化学修饰指的是基团转位这一具名亚型，而不是主动转运的普遍特征。" }
      },
      why_en: "The two mechanisms share a carrier-protein architecture, so the discriminating features are energetic and directional: active transport always proceeds against the concentration gradient, and every step of it depends on the energy of the carrier, drawn either from ATP directly or from a gradient built earlier.",
      why_cn: "两种机制共用「载体蛋白」这套架构，因此区分它们的是能量和方向：主动转运总是逆浓度梯度进行，而且其每一步都依赖于载体的能量——这些能量或直接来自ATP，或来自先前建立起来的梯度。"
    },
    {
      type: "mcq",
      q_en: "Two substances are moved by the same carrier in opposite directions across the membrane. Which term applies, and what is this classification based on?",
      q_cn: "同一个载体把两种物质以相反方向运过膜。应该用哪个术语？这一分类的依据是什么？",
      options: [
        "Symport, classified by whether energy comes from ATP",
        "Antiport, classified by how many substances move and in what relative direction",
        "Uniport, classified by the number of carriers involved",
        "Group translocation, classified by whether the carrier also modifies the cargo"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Symport is the same family of terms but the wrong member: it means two or more substances moving in the SAME direction. The ATP-versus-gradient question is the separate primary/secondary distinction.", cn: "共转运与之属于同一组术语，但选错了成员：它指的是两种或更多物质朝「同一」方向移动。能量来自ATP还是来自梯度，是另外的初级／次级之分。" },
        2: { en: "Uniport is the transport of only a single substance, so by definition it cannot describe two substances moving at once.", cn: "单向转运指的是只转运单一物质，因此按定义就不可能描述两种物质同时移动的情形。" },
        3: { en: "Group translocation is a real term from the same section, but it classifies by a different criterion: whether the carrier additionally performs a chemical reaction such as phosphorylation on the transported molecule.", cn: "基团转位确实是本节中的术语，但它的分类依据不同：看载体是否还对被转运分子额外进行磷酸化等化学反应。" }
      },
      why_en: "Symport, antiport and uniport form one classification, based purely on how many substances move together and whether they go the same way or opposite ways. Primary versus secondary is a different classification of the same transport, based on where the energy comes from.",
      why_cn: "共转运、逆向转运、单向转运构成一套分类，其依据纯粹是有几种物质一起移动、以及它们是同向还是反向。初级与次级则是对同一转运的另一套分类，依据的是能量来自何处。"
    },
    {
      type: "short",
      q_en: "A cell takes up a whole virus particle. Which category of transport is that, what happens to the membrane, and what is the direction term?",
      q_cn: "细胞摄入一整个病毒颗粒。这属于哪一类转运？膜发生了什么？按方向应该用哪个术语？",
      accept: ["particle", "restructuring", "phagocytosis", "endocytosis", "microscopic", "颗粒", "重组", "吞噬", "胞吞"],
      answer_en: "It is the most complicated category, transport of whole particles, alongside membranes and granules, and it works by local restructuring of the membrane rather than by any carrier. Because a whole particle is involved, the changes are microscopically observable, which is phagocytosis; for macromolecules such as proteins and DNA the corresponding changes are only submicroscopic. By direction of transport it is endocytosis, since the movement is toward the inside of the cell.",
      answer_cn: "这属于最复杂的一类——整个颗粒（还包括膜、颗粒物）的转运，它依靠的是膜的局部重组，而不是任何载体。由于涉及的是整个颗粒，其变化在显微镜下可以观察到，即吞噬作用；而蛋白质、DNA这类大分子对应的变化只是亚显微的。按转运方向讲，这是胞吞作用，因为运动方向朝向细胞内部。"
    }
  ]

});
