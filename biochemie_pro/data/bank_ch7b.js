/* Bank questions for chapter 7, second half (7-6-1 ... 7-12-2) -- the second question
   layer, see BANK_SPEC.md. Every item below is derived from the content already in
   biochemie_pro/data/ch7.js; no fact here comes from outside the node it is attached to.
   Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  "7-6-1": [
    {
      type: "mcq",
      q_en: "The book gives ribulose-5-phosphate <=> xylulose-5-phosphate as an example of which reaction type?",
      q_cn: "教材把核酮糖-5-磷酸 <=> 木酮糖-5-磷酸作为哪一类反应的实例？",
      options: [
        "Epimerization -- the configuration at one carbon changes",
        "Isomerization -- the carbonyl group moves to the adjacent carbon",
        "Cleavage of a hexose into two triose phosphates",
        "Transfer of a two-carbon fragment between two sugars"
      ],
      answer: 0,
      optionRefs: { 2: "7-6-3", 3: "7-7-2" },
      optionNotes: {
        1: { en: "Isomerization is the other type defined in this same section, illustrated by glucose <=> fructose and glyceraldehyde-3-phosphate <=> dihydroxyacetone phosphate. Here the carbonyl stays where it is; only one hydroxyl changes side.", cn: "异构化是同一节中定义的另一类反应，例子是葡萄糖<=>果糖和3-磷酸甘油醛<=>磷酸二羟丙酮。这里羰基并没有移动，只有一个羟基换了朝向。" },
        2: { en: "That is aldolase's reaction on fructose-1,6-bisphosphate, the third of the chapter's sugar-interconversion mechanisms.", cn: "那是醛缩酶作用于果糖-1,6-二磷酸的反应，属于本章三类糖相互转化机制中的第三类。" },
        3: { en: "Two-carbon fragment transfer is transketolase's job; it changes chain lengths, not configurations.", cn: "二碳片段的转移是转酮醇酶的工作；它改变的是碳链长度，而不是构型。" }
      },
      why_en: "The book lists ribulose-5-phosphate <=> xylulose-5-phosphate as its second epimerization example, alongside glucose <=> galactose. Epimerization is defined here as a change of steric arrangement -- a hydroxyl position -- at exactly one carbon atom; nothing is added, removed, or moved along the chain.",
      why_cn: "教材把核酮糖-5-磷酸<=>木酮糖-5-磷酸列为差向异构化的第二个实例，与葡萄糖<=>半乳糖并列。本节把差向异构化定义为**恰好一个**碳原子上立体构型（羟基位置）的改变；碳链上没有任何基团被加上、去掉或搬家。"
    },
    {
      type: "mcq",
      q_en: "The book adds a detail to the glucose <=> galactose epimerization that is easy to skip. What does this reaction actually act on?",
      q_cn: "教材在葡萄糖<=>半乳糖这一差向异构化上补了一个很容易被略过的细节：这个反应实际作用在什么身上？",
      options: [
        "The free sugars in solution",
        "The sugar while it is bound to UDP",
        "The 6-phosphate esters of both sugars",
        "The disaccharide lactose"
      ],
      answer: 1,
      optionRefs: { 2: "7-2-1", 3: "7-10-2" },
      optionNotes: {
        0: { en: "This is exactly the assumption the book blocks: the cell does not grab a free glucose and flip a hydroxyl on it.", cn: "这正是教材要挡住的想法：细胞并不是抓着一个游离葡萄糖直接把某个羟基翻过来。" },
        2: { en: "Phosphate esters of sugars are a separate topic; the coenzyme the book names for this particular pair is uridine diphosphate, not a phosphate ester.", cn: "糖的磷酸酯是另一个话题；教材为这一对指明的「辅酶」是尿苷二磷酸，而不是磷酸酯。" },
        3: { en: "Lactose is built by transferring galactose from UDP-galactose onto glucose -- a synthesis, not an epimerization.", cn: "乳糖是把半乳糖从UDP-半乳糖转移到葡萄糖上合成的——那是合成反应，不是差向异构化。" }
      },
      why_en: "The book names uridine diphosphate (UDP) as the coenzyme of the glucose <=> galactose epimerization, and the node makes the point explicitly: the interconversion happens on the UDP-sugar, not on the free sugar. This is why UDP-sugars reappear later as the working bench for sugar modification.",
      why_cn: "教材指出葡萄糖<=>半乳糖差向异构化的「辅酶」是尿苷二磷酸（UDP），而本节点把这一点讲明了：转化发生在UDP-糖上，而不是游离糖上。这也是后面UDP-糖会作为糖改造「操作台」反复出现的原因。"
    },
    {
      type: "short",
      q_en: "Explain what the UDP detail in this section tells you about how a cell converts one sugar into another.",
      q_cn: "本节关于UDP的细节，说明了细胞是怎样把一种糖变成另一种糖的？请解释。",
      accept: ["UDP", "free sugar", "coenzyme", "activated", "游离糖", "辅酶", "活化"],
      answer_en: "The book names uridine diphosphate as the coenzyme of the glucose <=> galactose epimerization, and the point is that the change is not made to the free sugar at all -- the sugar is first carried on UDP, and the configuration at one carbon is altered while it sits there. So a sugar-modifying reaction of this kind operates on a nucleotide-bound sugar, which is why UDP-sugars keep turning up wherever sugars are rebuilt or joined together.",
      answer_cn: "教材指明葡萄糖<=>半乳糖差向异构化的「辅酶」是尿苷二磷酸，关键在于：这个改造根本不是在游离糖上做的——糖先挂到UDP上，构型的改变是在那儿完成的。也就是说，这类糖的改造反应作用的是「核苷酸结合态的糖」，这也解释了为什么在糖被改造或被连接的场合，UDP-糖总是反复出现。"
    }
  ],

  "7-6-2": [
    {
      type: "mcq",
      q_en: "In the C-6 oxidation branch, which coenzyme reduces glucuronate's aldehyde group to L-gulonate, and which is used to dehydrogenate L-gulonate at C-3?",
      q_cn: "在C-6氧化支路中，把葡萄糖醛酸盐的醛基还原为L-古洛糖酸用的是哪种辅酶？把L-古洛糖酸在C-3位脱氢用的又是哪种？",
      options: [
        "NADPH + H+ for the reduction; NAD+ for the C-3 dehydrogenation",
        "NAD+ for the reduction; NADPH for the C-3 dehydrogenation",
        "NADP+ for both steps, as in the C-1 branch",
        "FAD for the reduction; NAD+ for the C-3 dehydrogenation"
      ],
      answer: 0,
      optionRefs: { 2: "7-7-1", 3: "7-8-5" },
      optionNotes: {
        1: { en: "The two coenzymes are swapped. NADPH + H+ is the hydrogen donor for reducing the aldehyde; NAD+ is the acceptor for the oxidation at C-3.", cn: "两个辅酶被对调了。还原醛基时NADPH+H+是氢供体；C-3位氧化时NAD+才是受体。" },
        2: { en: "NADP+ is the acceptor for both oxidations of the C-1 branch (the oxidative pentose phosphate pathway). This branch is not run on NADP+ throughout.", cn: "NADP+是C-1支路（氧化磷酸戊糖途径）两步氧化的受体。C-6支路并不是全程使用NADP+。" },
        3: { en: "FAD does appear in this chapter, but in the regeneration of lipoic acid inside the pyruvate dehydrogenase complex, not here.", cn: "FAD在本章确实出现，但那是在丙酮酸脱氢酶复合体中硫辛酸再生的环节，不是这里。" }
      },
      why_en: "The book assigns the two nicotinamide coenzymes to opposite jobs in this branch: NADPH + H+ is spent as hydrogen donor to reduce the aldehyde group of glucuronate, giving L-gulonate, while NAD+ is the acceptor when L-gulonate is dehydrogenated at C-3 to the beta-oxo acid 3-keto-L-gulonate. NADPH also appears once more, later, in the reduction of L-xylulose to xylitol.",
      why_cn: "教材在这条支路里把两种烟酰胺辅酶分派给了相反的任务：NADPH+H+作为氢供体被消耗，把葡萄糖醛酸盐的醛基还原成L-古洛糖酸；而L-古洛糖酸在C-3位脱氢生成β-氧代酸3-酮-L-古洛糖酸时，受体是NAD+。NADPH稍后还出现一次——把L-木酮糖还原为木糖醇。"
    },
    {
      type: "mcq",
      q_en: "The book's pathway figure marks one compound as the one that appears in the urine in pentosuria. Which one?",
      q_cn: "教材的途径图标注了戊糖尿症时出现在尿液中的化合物。是哪一个？",
      options: [
        "L-xylulose",
        "D-xylulose-5-phosphate",
        "Ribulose-5-phosphate",
        "Xylitol"
      ],
      answer: 0,
      optionRefs: { 1: "7-7-2", 2: "7-7-1" },
      optionNotes: {
        1: { en: "That is the phosphorylated end product of this branch, which feeds into transketolase reactions -- the normal exit, not the pathological one.", cn: "那是这条支路的磷酸化终产物，会进入转酮醇酶反应——那是正常出口，不是病理产物。" },
        2: { en: "Ribulose-5-phosphate is the product of the C-1 (oxidative) branch, a different half of this section.", cn: "核酮糖-5-磷酸是C-1（氧化）支路的产物，属于本节的另一半内容。" },
        3: { en: "Xylitol lies between L-xylulose and D-xylulose (NADPH-dependent reduction); the figure's urine label sits on L-xylulose itself.", cn: "木糖醇位于L-木酮糖与D-木酮糖之间（NADPH依赖的还原）；图中「尿中」的标注是打在L-木酮糖上的。" }
      },
      why_en: "The figure carries a separate label reading that in pentosuria it is L-xylulose that appears in the urine. The node reports only what the figure shows -- the book's prose never explains the underlying enzymatic defect, so nothing more should be claimed about it.",
      why_cn: "图中有一处单独标注：戊糖尿症时出现在尿液里的是L-木酮糖。本节点只报告图上显示的内容——教材正文从未解释其背后的酶缺陷，所以不应再往下多说。"
    },
    {
      type: "short",
      q_en: "In the C-6 oxidation branch the sugar crosses from the D-series to the L-series. At which step does this happen, and what makes it happen?",
      q_cn: "在C-6氧化支路中，糖从D系转到了L系。这一步发生在哪里？是什么造成的？",
      accept: ["gulonate", "aldehyde", "C-6", "C-1", "flip", "古洛糖酸", "翻转", "醛基"],
      answer_en: "It happens when glucuronate's aldehyde group is enzymatically reduced, using NADPH + H+ as hydrogen donor, to give L-gulonate. The carbon chain effectively flips end for end: what was C-6 in glucuronate becomes C-1 in gulonate, and numbering the chain from the other end is exactly what lands the molecule in the L-series.",
      answer_cn: "发生在葡萄糖醛酸盐的醛基被酶促还原、以NADPH+H+为氢供体生成L-古洛糖酸这一步。碳链实际上「掉了个头」：葡萄糖醛酸盐里的C-6变成了古洛糖酸里的C-1，从另一端开始编号，分子也就落到了L系。"
    }
  ],

  "7-6-3": [
    {
      type: "mcq",
      q_en: "Which enzyme does the book explicitly state has NO coenzyme?",
      q_cn: "教材明确指出哪一种酶**不需要辅酶**？",
      options: [
        "Aldolase",
        "Transaldolase",
        "Transketolase",
        "Glyceraldehyde-3-phosphate dehydrogenase"
      ],
      answer: 1,
      optionRefs: { 2: "7-7-1", 3: "7-8-2" },
      optionNotes: {
        0: { en: "The book makes the no-coenzyme statement about transaldolase specifically; about aldolase it says only that it interconverts one hexose with two trioses.", cn: "教材是针对转醛醇酶说「无辅酶」的；关于醛缩酶，它只说了这个酶把一个己糖与两个丙糖互相转化。" },
        2: { en: "Transketolase's coenzyme is named as thiamine diphosphate, which is how it carries the two-carbon active glycolaldehyde fragment.", cn: "转酮醇酶的辅酶是焦磷酸硫胺素，它正是靠这个辅酶携带二碳的「活性乙醇醛」片段。" },
        3: { en: "GAPDH works with NAD+, which the book also names as its most important activating effector.", cn: "GAPDH使用NAD+，教材还指出NAD+是激活该酶最重要的效应物。" }
      },
      why_en: "The book closes the transaldolase paragraph with the explicit remark that this enzyme has no coenzyme -- notable precisely because the neighbouring fragment-transferring enzyme, transketolase, depends on thiamine diphosphate to carry its two-carbon unit.",
      why_cn: "教材在转醛醇酶那一段末尾明确写道：该酶不需要辅酶。这一点之所以值得记，正是因为与它并列的另一个片段转移酶——转酮醇酶——必须靠焦磷酸硫胺素来携带那个二碳单位。"
    },
    {
      type: "mcq",
      q_en: "What does transaldolase transfer, and onto what?",
      q_cn: "转醛醇酶转移的是什么？转移到什么上？",
      options: [
        "A two-carbon fragment, onto an aldose",
        "A three-carbon dihydroxyacetone residue, onto other aldoses",
        "A phosphate group, from C-3 to C-2 of the same molecule",
        "A whole hexose, onto UDP"
      ],
      answer: 1,
      optionRefs: { 0: "7-7-2", 2: "7-8-3", 3: "7-10-2" },
      optionNotes: {
        0: { en: "Two-carbon transfer is transketolase's reaction, and it needs thiamine diphosphate; transaldolase moves three carbons and needs no coenzyme.", cn: "二碳转移是转酮醇酶的反应，需要焦磷酸硫胺素；转醛醇酶搬的是三个碳，且不需要辅酶。" },
        2: { en: "Moving a phosphate between C-3 and C-2 is phosphoglycerate mutase's reaction in glycolysis.", cn: "把磷酸在C-3与C-2之间挪动，是糖酵解中磷酸甘油酸变位酶的反应。" },
        3: { en: "Attaching a sugar to UDP is monosaccharide activation, the first step of the biosynthetic direction.", cn: "把糖挂到UDP上属于单糖活化，那是生物合成方向的第一步。" }
      },
      why_en: "The book contrasts the two enzymes by their reach: aldolase only ever converts one hexose into two trioses and back, whereas transaldolase takes a dihydroxyacetone residue -- three carbons -- and hands it to other aldoses, which is a genuinely more general fragment transfer.",
      why_cn: "教材是按「适用范围」来对比这两个酶的：醛缩酶永远只做一个己糖与两个丙糖之间的互变，而转醛醇酶把一个二羟丙酮残基（三个碳）交给其他醛糖，这是真正更普遍的片段转移。"
    },
    {
      type: "short",
      q_en: "Name the one property the book singles out for transaldolase, and say what fragment it moves and to what kind of acceptor.",
      q_cn: "教材单独点出的转醛醇酶的一个性质是什么？它搬运的是什么片段？受体是哪一类分子？",
      accept: ["no coenzyme", "coenzyme", "dihydroxyacetone", "three-carbon", "aldose", "辅酶", "二羟丙酮", "醛糖"],
      answer_en: "The book states explicitly that transaldolase has no coenzyme. What it transfers is a dihydroxyacetone residue -- a three-carbon fragment -- and the acceptors are other aldoses, so it is not tied to reconstituting the same fructose-1,6-bisphosphate/triose pair that aldolase is limited to.",
      answer_cn: "教材明确指出转醛醇酶不需要辅酶。它转移的是一个二羟丙酮残基（三碳片段），受体是**其他**醛糖，因此它不像醛缩酶那样被限制在「重新拼回同一个果糖-1,6-二磷酸/丙糖对」这一件事上。"
    }
  ],

  "7-7-1": [
    {
      type: "mcq",
      q_en: "Which enzyme of the oxidative branch does the book never name, neither in the running text nor in the figure?",
      q_cn: "氧化支路中，哪一个酶在教材正文和插图里都**从未**被命名？",
      options: [
        "D-glucose-6-phosphate dehydrogenase",
        "Lactonase",
        "The enzyme that oxidizes and decarboxylates 6-phosphogluconate to ribulose-5-phosphate",
        "Transketolase"
      ],
      answer: 2,
      optionRefs: { 3: "7-7-2" },
      optionNotes: {
        0: { en: "Named explicitly as the enzyme of step 1, the dehydrogenation of glucose-6-phosphate to the lactone.", cn: "第1步（葡萄糖-6-磷酸脱氢生成内酯）的酶，教材是点名了的。" },
        1: { en: "Named explicitly for step 2, the hydrolysis of the lactone to 6-phosphogluconate.", cn: "第2步（内酯水解为6-磷酸葡糖酸）的酶，教材也点名了。" },
        3: { en: "Transketolase is named, together with its thiamine diphosphate coenzyme, and belongs to the non-oxidative route.", cn: "转酮醇酶是被命名的，还给出了焦磷酸硫胺素这个辅酶；它属于非氧化途径。" }
      },
      why_en: "The book names the first two enzymes and then, for the third arrow, describes only the chemistry -- a further oxidation to a beta-keto acid that decarboxylates readily -- without ever printing an enzyme name. That gap is the book's own; it should be reported as a gap rather than filled in from another textbook.",
      why_cn: "教材点名了前两个酶，而第三个箭头只描述了化学过程——进一步氧化成一个容易脱羧的β-酮酸——却始终没有印出酶名。这个空缺是教材本身的，应当如实说成空缺，而不是用别的教科书去补。"
    },
    {
      type: "mcq",
      q_en: "For each glucose-6-phosphate that goes through the oxidative branch, how much NADPH and how much CO2 are produced?",
      q_cn: "每一分子葡萄糖-6-磷酸走完氧化支路，生成多少NADPH？放出多少CO2？",
      options: [
        "1 NADPH and 1 CO2",
        "2 NADPH and 1 CO2",
        "2 NADH and 1 CO2",
        "12 NADPH and 6 CO2"
      ],
      answer: 1,
      optionRefs: { 2: "7-8-2", 3: "7-7-2" },
      optionNotes: {
        0: { en: "This counts only the first dehydrogenation. The oxidation of 6-phosphogluconate generates a second NADPH.", cn: "这只算了第一次脱氢。6-磷酸葡糖酸的氧化还会生成第二分子NADPH。" },
        2: { en: "NAD+ swapped in for NADP+. The book states the acceptor for both oxidations here is NADP+; NAD+ is glycolysis's acceptor, at the GAPDH step.", cn: "把NADP+换成了NAD+。教材指出这里两步氧化的受体都是NADP+；NAD+是糖酵解GAPDH那一步的受体。" },
        3: { en: "Twelve NADPH is the pentose-cycle figure, obtained only if glucose-6-phosphate is oxidized six times over; it is not the yield of one pass.", cn: "12分子NADPH是「戊糖循环」的数字，要葡萄糖-6-磷酸氧化六次才有；不是走一遍的产量。" }
      },
      why_en: "Two oxidations occur -- the dehydrogenation of glucose-6-phosphate and the oxidation of 6-phosphogluconate -- and the book states that NADP+ is the electron acceptor for both, so 2 NADPH are made. Only the second oxidation is accompanied by decarboxylation, so exactly one CO2 leaves.",
      why_cn: "这里有两次氧化——葡萄糖-6-磷酸脱氢，以及6-磷酸葡糖酸的氧化——教材指出两次氧化的电子受体都是NADP+，所以生成2分子NADPH。只有第二次氧化伴随脱羧，所以恰好放出1分子CO2。"
    },
    {
      type: "short",
      q_en: "In which cell compartment do the pentose phosphate pathways run, and what is the final step of the oxidative branch?",
      q_cn: "磷酸戊糖途径在细胞的哪个区室进行？氧化支路的最后一步是什么？",
      accept: ["cytosol", "ribose-5-phosphate", "isomeriz", "ketose", "aldose", "细胞质", "核糖-5-磷酸", "异构"],
      answer_en: "The book places the pentose phosphate pathways in the cytosol. The oxidative branch ends with an isomerization: ribulose-5-phosphate, a ketose, is converted to ribose-5-phosphate, an aldose -- the pathway's characteristic product alongside NADPH, and the form needed for RNA, DNA and nucleotide coenzymes.",
      answer_cn: "教材把磷酸戊糖途径放在细胞质（cytosol）中。氧化支路的最后一步是一次异构化：核酮糖-5-磷酸（酮糖）转化为核糖-5-磷酸（醛糖）——它与NADPH并列，是该途径的特征产物，也正是合成RNA、DNA和核苷酸辅酶所需要的形式。"
    }
  ],

  "7-7-2": [
    {
      type: "mcq",
      q_en: "In the non-oxidative route, erythrose-4-phosphate is the acceptor in a transaldolase reaction. What is the donor, and what are the products?",
      q_cn: "在非氧化途径中，赤藓糖-4-磷酸是转醛醇酶反应的受体。供体是什么？产物是什么？",
      options: [
        "Donor: a second fructose-6-phosphate; products: sedoheptulose-7-phosphate + glyceraldehyde-3-phosphate",
        "Donor: sedoheptulose-7-phosphate; products: ribose-5-phosphate + xylulose-5-phosphate",
        "Donor: glyceraldehyde-3-phosphate; products: fructose-6-phosphate + xylulose-5-phosphate",
        "Donor: 6-phosphogluconate; products: ribulose-5-phosphate + CO2"
      ],
      answer: 0,
      optionRefs: { 3: "7-7-1" },
      optionNotes: {
        1: { en: "That is the third step, not the second, and it is a transketolase reaction with sedoheptulose-7-phosphate as the two-carbon donor.", cn: "那是第三步而不是第二步，而且是转酮醇酶反应，二碳供体是景天庚酮糖-7-磷酸。" },
        2: { en: "This reverses the roles in the first transketolase step, where fructose-6-phosphate is the donor and glyceraldehyde-3-phosphate the acceptor.", cn: "这把第一次转酮醇酶反应中的角色搞反了：那一步是果糖-6-磷酸供体、甘油醛-3-磷酸受体。" },
        3: { en: "Oxidative decarboxylation of 6-phosphogluconate belongs to the other, oxidative branch -- and it is precisely the step the non-oxidative route avoids.", cn: "6-磷酸葡糖酸的氧化脱羧属于另一条（氧化）支路——而这恰恰是非氧化途径要避开的一步。" }
      },
      why_en: "The three non-oxidative reactions run transketolase, transaldolase, transketolase. In the middle one a three-carbon fragment comes off a second molecule of fructose-6-phosphate and lands on erythrose-4-phosphate, giving the seven-carbon sedoheptulose-7-phosphate plus a glyceraldehyde-3-phosphate that is then reused in the third step.",
      why_cn: "非氧化途径的三步依次是转酮醇酶、转醛醇酶、转酮醇酶。中间这一步是把三碳片段从**第二分子**果糖-6-磷酸上取下、接到赤藓糖-4-磷酸上，生成七碳的景天庚酮糖-7-磷酸，外加一分子甘油醛-3-磷酸，后者在第三步里又被用掉。"
    },
    {
      type: "mcq",
      q_en: "Which statement about the non-oxidative route matches the book?",
      q_cn: "关于非氧化途径，哪一项与教材一致？",
      options: [
        "It yields 2 NADPH per pentose, just as the oxidative route does",
        "It produces no NADPH at all, and all of its steps are reversible",
        "It produces no NADPH, but once started it runs irreversibly toward pentoses",
        "It releases one CO2 for every pentose it makes"
      ],
      answer: 1,
      optionRefs: { 0: "7-7-1", 3: "7-7-1" },
      optionNotes: {
        0: { en: "Two NADPH per glucose-6-phosphate is the oxidative branch's yield. The whole point of the second route is that it reaches pentoses without any oxidation.", cn: "每分子葡萄糖-6-磷酸产2分子NADPH是氧化支路的账。第二条路线的全部意义就在于**不经任何氧化**也能拿到戊糖。" },
        2: { en: "The book stresses the opposite: all transformations of this route are reversible, which is what lets three pentoses go back to two hexoses plus one triose.", cn: "教材强调的恰恰相反：这条路线的所有转化都是可逆的，正因如此三分子戊糖才能倒回两分子己糖加一分子丙糖。" },
        3: { en: "Decarboxylation happens in the oxidative branch, where 6-phosphogluconate loses CO2. Fragment reshuffling loses no carbon.", cn: "脱羧发生在氧化支路，即6-磷酸葡糖酸放出CO2那一步。片段重排不丢碳。" }
      },
      why_en: "The second route makes pentose phosphates purely by reshuffling two- and three-carbon fragments, so no NADPH and no CO2 appear. Because every step is an equilibrium, the same machinery run backwards converts three pentoses into two hexoses and one triose -- which is what makes the closed pentose cycle conceivable at all.",
      why_cn: "第二条路线完全靠重排二碳和三碳片段来生成磷酸戊糖，所以既不产NADPH，也不放CO2。由于每一步都是平衡反应，同一套机器倒着跑就能把三分子戊糖变回两分子己糖加一分子丙糖——所谓「戊糖循环」也正是因此才谈得上。"
    },
    {
      type: "short",
      q_en: "Give the carbon bookkeeping of the non-oxidative route: what goes in, what comes out, and does the count balance?",
      q_cn: "把非氧化途径的碳账算一遍：投入什么？产出什么？碳数是否平衡？",
      accept: ["hexose", "triose", "pentose", "15", "three pentoses", "己糖", "丙糖", "戊糖"],
      answer_en: "Two hexoses (fructose-6-phosphate, used twice) plus one triose (glyceraldehyde-3-phosphate) are converted into three pentoses. The carbon count balances exactly: 2 x 6 + 3 = 15 = 3 x 5, which is consistent with the book's own summary sentence that three pentoses arise from two hexoses and one triose.",
      answer_cn: "两分子己糖（果糖-6-磷酸，用了两次）加一分子丙糖（甘油醛-3-磷酸），转化为三分子戊糖。碳数刚好平衡：2×6+3=15=3×5，与教材自己那句「由两个己糖和一个丙糖生成三个戊糖」的总结一致。"
    }
  ],

  "7-8-1": [
    {
      type: "mcq",
      q_en: "Three equilibrium percentages appear in this part of glycolysis. Which reaction does the 96% figure describe?",
      q_cn: "糖酵解这一段出现了三个平衡百分数。96%说的是哪一个反应？",
      options: [
        "The share of fructose-6-phosphate in the glucose-6-phosphate/fructose-6-phosphate equilibrium",
        "The share of dihydroxyacetone phosphate in the triose-phosphate isomerase equilibrium",
        "The share of the uncleaved hexose in the aldolase equilibrium",
        "The fraction of glucose-6-phosphate that hexokinase converts per pass"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "That share is 30% fructose-6-phosphate (so 70% glucose-6-phosphate) -- the isomerase equilibrium one step earlier.", cn: "那个数是30%的果糖-6-磷酸（即70%的葡萄糖-6-磷酸）——是前一步异构酶的平衡。" },
        2: { en: "That is 89%: at equilibrium the aldolase reaction actually favours the intact fructose-1,6-bisphosphate, with only 11% as the two trioses combined.", cn: "那个数是89%：平衡时醛缩酶反应其实偏向未裂解的果糖-1,6-二磷酸，两种丙糖合计只占11%。" },
        3: { en: "No such figure is given. Every percentage in this section describes an equilibrium composition, not a per-pass conversion yield.", cn: "教材没有这样的数字。本节的每个百分数都是**平衡组成**，不是每次通过的转化率。" }
      },
      why_en: "The 96% belongs to the sub-equilibrium between the two trioses: dihydroxyacetone phosphate makes up 96% of that mixture and glyceraldehyde-3-phosphate only 4%. Keeping the three numbers attached to their own reactions -- 30%, 89%, 96% -- is the point of the question.",
      why_cn: "96%属于两种丙糖之间的子平衡：磷酸二羟丙酮占混合物的96%，甘油醛-3-磷酸只占4%。这道题要考的就是把30%、89%、96%三个数各自钉回它们所属的反应上。"
    },
    {
      type: "mcq",
      q_en: "How does glucose that was stored as glycogen enter this pathway, compared with free glucose taken up by the cell?",
      q_cn: "以糖原形式储存的葡萄糖，进入这条途径的方式与细胞摄取的游离葡萄糖有什么不同？",
      options: [
        "By phosphorolysis to glucose-1-phosphate at no ATP cost; the phosphate then has to be moved to give glucose-6-phosphate",
        "By hexokinase phosphorylation, exactly as free glucose does",
        "By hydrolysis to free glucose, which then needs glucokinase",
        "By transfer onto UDP, giving UDP-glucose"
      ],
      answer: 0,
      optionRefs: { 1: "7-11-2-1", 2: "7-11-1-2", 3: "7-10-2" },
      optionNotes: {
        1: { en: "The ATP-consuming kinase step is what free glucose needs; glycogen is mobilised phosphorolytically and skips that payment.", cn: "花ATP的激酶那一步是游离葡萄糖才需要的；糖原是靠磷酸解动员的，省下了这笔钱。" },
        2: { en: "Hydrolytic breakdown all the way to free glucose is the digestive route (amylases and maltase), not what happens inside the cell.", cn: "一路水解到游离葡萄糖是消化道的路线（淀粉酶和麦芽糖酶），不是细胞内发生的事。" },
        3: { en: "Attaching glucose to UDP is activation for synthesis -- the direction that builds glycogen, not the one that spends it.", cn: "把葡萄糖挂到UDP上是为合成而做的活化——那是造糖原的方向，不是用糖原的方向。" }
      },
      why_en: "The book contrasts the two entry points directly: free glucose must be phosphorylated at C-6 using ATP, by hexokinase or glucokinase, whereas stored glucose reaches glucose-1-phosphate by phosphorolysis without ATP cost, and only then has its phosphate group moved to position 6. Glycogen-derived sugar therefore starts one payment ahead.",
      why_cn: "教材把两个入口直接摆在一起：游离葡萄糖必须由己糖激酶或葡糖激酶用ATP在C-6位磷酸化；而储存的葡萄糖通过磷酸解生成葡萄糖-1-磷酸，不花ATP，之后只需把磷酸基团挪到6位。所以从糖原来的糖，起跑时就已经省了一笔。"
    },
    {
      type: "mcq",
      q_en: "Aldolase splits fructose-1,6-bisphosphate. Which triose comes from which half of the hexose?",
      q_cn: "醛缩酶裂解果糖-1,6-二磷酸。两个丙糖分别来自己糖的哪一半？",
      options: [
        "Dihydroxyacetone phosphate from C1-C3, glyceraldehyde phosphate from C4-C6",
        "Glyceraldehyde phosphate from C1-C3, dihydroxyacetone phosphate from C4-C6",
        "Both trioses come from C1-C3, while C4-C6 is released as free glycerol"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two halves are swapped relative to the book's assignment.", cn: "两半的归属与教材写的正好对调了。" },
        2: { en: "Nothing is released: all six carbons are conserved as two three-carbon phosphates, which is why one hexose ultimately gives two glyceraldehyde-3-phosphate.", cn: "没有任何东西被丢出去：六个碳全部保留为两个三碳磷酸化合物，这也正是一个己糖最终能给出两分子甘油醛-3-磷酸的原因。" }
      },
      why_en: "The book assigns the halves explicitly: dihydroxyacetone phosphate comes from carbons 1 to 3 and glyceraldehyde phosphate from carbons 4 to 6. Both fragments keep a phosphate, which is what allows either of them to continue down the pathway once triose-phosphate isomerase has interconverted them.",
      why_cn: "教材明确写了两半的归属：磷酸二羟丙酮来自C1–C3，甘油醛磷酸来自C4–C6。两个片段各自都带着磷酸，所以在磷酸丙糖异构酶把它们互相转化之后，任何一个都能继续往下走。"
    },
    {
      type: "short",
      q_en: "The DHAP/glyceraldehyde-3-phosphate equilibrium lies 96% toward DHAP, yet one fructose-1,6-bisphosphate still yields two molecules of glyceraldehyde-3-phosphate. Explain.",
      q_cn: "磷酸二羟丙酮与甘油醛-3-磷酸的平衡有96%偏向前者，可一分子果糖-1,6-二磷酸最终仍然给出两分子甘油醛-3-磷酸。为什么？",
      accept: ["consumed", "downstream", "isomerase", "pulled", "subsequent", "消耗", "后续", "异构酶"],
      answer_en: "Only glyceraldehyde-3-phosphate is taken up by the following reactions, so it is continuously removed from the equilibrium. Triose-phosphate isomerase keeps re-establishing the equilibrium, and because one side is constantly being drained, dihydroxyacetone phosphate keeps being converted over. Net, aldolase plus triose-phosphate isomerase acting in succession turn one fructose-1,6-bisphosphate into two glyceraldehyde-3-phosphate. The same logic explains why the aldolase step runs forward at all despite its 89%/11% equilibrium.",
      answer_cn: "只有甘油醛-3-磷酸会被后续反应用掉，因此它被不断地从平衡中移走。磷酸丙糖异构酶不停地把平衡重新建立起来，而由于一侧一直在被抽干，磷酸二羟丙酮就不断被转化过去。净结果是：醛缩酶与磷酸丙糖异构酶接力，把一分子果糖-1,6-二磷酸变成两分子甘油醛-3-磷酸。醛缩酶那一步尽管平衡是89%/11%却仍能正向进行，道理完全一样。"
    }
  ],

  "7-8-2": [
    {
      type: "mcq",
      q_en: "Which coenzyme accepts the hydrogen when glyceraldehyde-3-phosphate is dehydrogenated -- and what else is that coenzyme to this enzyme?",
      q_cn: "甘油醛-3-磷酸脱氢时，接受氢的是哪种辅酶？这种辅酶对该酶还有什么身份？",
      options: [
        "NAD+, which is also the enzyme's most important activating allosteric effector",
        "NADP+, since all cytosolic oxidations use the phosphorylated coenzyme",
        "FAD, which then passes the hydrogen onward through a flavoprotein",
        "NAD+, but the book describes the enzyme as purely non-regulatory"
      ],
      answer: 0,
      optionRefs: { 1: "7-7-1", 2: "7-8-5" },
      optionNotes: {
        1: { en: "NADP+ is the acceptor in the oxidative pentose phosphate pathway, which is also cytosolic -- so the compartment is not what decides. Glycolysis's single oxidation runs on NAD+.", cn: "NADP+是氧化磷酸戊糖途径的受体，而那条途径同样在细胞质里——所以决定用哪种辅酶的并不是区室。糖酵解唯一的那次氧化用的是NAD+。" },
        2: { en: "FAD does appear in this chapter, but in the regeneration of lipoic acid inside the pyruvate dehydrogenase complex.", cn: "FAD在本章确实出现，但那是在丙酮酸脱氢酶复合体里参与硫辛酸的再生。" },
        3: { en: "The coenzyme is right but the second half is not: the book calls GAPDH an allosteric enzyme and names NAD+ as its most important activating effector.", cn: "辅酶答对了，但后半句不对：教材称GAPDH是别构酶，并指出NAD+是激活它最重要的效应物。" }
      },
      why_en: "The book writes the reaction as glyceraldehyde-3-phosphate + NAD+ + Pi <=> 1,3-bisphosphoglycerate + NADH + H+, and separately describes the enzyme as allosteric with NAD+ as its most important activating effector. So the same molecule is both the electron acceptor of the chemistry and the regulatory signal that turns the enzyme up.",
      why_cn: "教材把反应写作：甘油醛-3-磷酸 + NAD+ + Pi <=> 1,3-二磷酸甘油酸 + NADH + H+；另外还说这个酶是别构酶，NAD+是激活它最重要的效应物。也就是说，同一个分子既是化学反应里的电子受体，也是把这个酶「调大」的调控信号。"
    },
    {
      type: "mcq",
      q_en: "Which enzyme in this stretch of glycolysis actually makes the ATP?",
      q_cn: "糖酵解这一段里，真正造出ATP的是哪个酶？",
      options: [
        "Glyceraldehyde-3-phosphate dehydrogenase, which captures the oxidation energy straight as ATP",
        "Phosphoglycerate kinase",
        "Pyruvate kinase",
        "Phosphoglycerate mutase"
      ],
      answer: 1,
      optionRefs: { 0: "6-1-2-2", 2: "7-8-3", 3: "7-8-3" },
      optionNotes: {
        0: { en: "GAPDH captures the energy of the oxidation as a high-energy phosphate compound, 1,3-bisphosphoglycerate -- not as ATP. The ATP comes one step later.", cn: "GAPDH把氧化释放的能量捕获成一个高能磷酸化合物1,3-二磷酸甘油酸，而不是ATP。ATP要等下一步。" },
        2: { en: "Pyruvate kinase is glycolysis's second substrate-level phosphorylation, transferring phosphoenolpyruvate's phosphate to ADP.", cn: "丙酮酸激酶是糖酵解的第二次底物水平磷酸化，把磷酸烯醇丙酮酸的磷酸转给ADP。" },
        3: { en: "The mutase only relocates a phosphate between C-3 and C-2 of the same molecule; no ATP is involved.", cn: "变位酶只是把磷酸在同一分子的C-3与C-2之间挪动，与ATP无关。" }
      },
      why_en: "The division of labour is the lesson: GAPDH performs the oxidation and stores its energy in the macroergically bound phosphate of 1,3-bisphosphoglycerate, and phosphoglycerate kinase then transfers that phosphate to ADP, yielding ATP and 3-phosphoglycerate. Neither enzyme could do the other's job.",
      why_cn: "重点在分工：GAPDH负责氧化，并把能量存进1,3-二磷酸甘油酸那个高能结合的磷酸里；磷酸甘油酸激酶再把这个磷酸转给ADP，生成ATP和3-磷酸甘油酸。两个酶谁也替不了谁。"
    },
    {
      type: "short",
      q_en: "Define substrate-level phosphorylation the way the book's glossary does, and say how it differs from the way the respiratory chain makes ATP.",
      q_cn: "按教材术语表的说法定义「底物水平磷酸化」，并说明它与呼吸链造ATP的方式有何不同。",
      accept: ["direct transfer", "high-energy", "intermediate", "ADP", "chemiosmotic", "respiratory chain", "底物水平", "高能", "呼吸链"],
      answer_en: "Substrate-level phosphorylation is the formation of ATP by direct transfer of a phosphate group from a high-energy metabolic intermediate onto ADP -- here, from 1,3-bisphosphoglycerate, by phosphoglycerate kinase. It is contrasted with chemiosmotic, respiratory-chain-driven ATP synthesis, where the phosphate does not come from a substrate molecule at all.",
      answer_cn: "底物水平磷酸化是指把磷酸基团从一个高能代谢中间体直接转给ADP而生成ATP——在这里就是磷酸甘油酸激酶把1,3-二磷酸甘油酸上的磷酸转给ADP。它与化学渗透、由呼吸链驱动的ATP合成相对：后者的磷酸根本不是来自某个底物分子。"
    }
  ],

  "7-8-3": [
    {
      type: "mcq",
      q_en: "Which step of this stretch removes a water molecule, and what does that accomplish?",
      q_cn: "这一段中，哪一步脱去一分子水？脱水带来了什么结果？",
      options: [
        "Phosphoglycerate mutase, moving the phosphate from C-3 to C-2",
        "Enolase: dehydration of 2-phosphoglycerate gives the high-energy phosphoenolpyruvate",
        "Pyruvate kinase, which loses water as the phosphate goes to ADP",
        "Aldolase, which splits the hexose with loss of water"
      ],
      answer: 1,
      optionRefs: { 3: "7-6-3" },
      optionNotes: {
        0: { en: "The mutase step involves no dehydration; it works through a 2,3-bisphosphoglycerate cofactor that is regenerated each turnover.", cn: "变位酶那一步不涉及脱水；它靠一个每轮都会再生的2,3-二磷酸甘油酸辅因子来完成。" },
        2: { en: "Pyruvate kinase transfers the phosphate to ADP; no water leaves at that step.", cn: "丙酮酸激酶是把磷酸转给ADP；那一步没有水离开。" },
        3: { en: "Aldolase cleaves fructose-1,6-bisphosphate into two triose phosphates, with no dehydration at all.", cn: "醛缩酶是把果糖-1,6-二磷酸裂解成两个磷酸丙糖，完全不脱水。" }
      },
      why_en: "Enolase removes water from 2-phosphoglycerate, and the result is phosphoenolpyruvate, whose phosphate is now macroergically bound. That is what makes the next step possible: pyruvate kinase can hand this phosphate to ADP, which an ordinary phosphate ester could not do.",
      why_cn: "烯醇化酶从2-磷酸甘油酸脱去一分子水，产物是磷酸烯醇丙酮酸，此时它的磷酸已是高能结合。正因如此下一步才成立：丙酮酸激酶能把这个磷酸交给ADP，而普通的磷酸酯做不到。"
    },
    {
      type: "mcq",
      q_en: "In the book's ATP balance table, which two reactions each contribute +2 ATP per glucose?",
      q_cn: "在教材的ATP平衡表里，哪两个反应各自为每分子葡萄糖贡献+2 ATP？",
      options: [
        "1,3-bisphosphoglycerate -> 3-phosphoglycerate, and phosphoenolpyruvate -> pyruvate",
        "Glucose -> glucose-6-phosphate, and fructose-6-phosphate -> fructose-1,6-bisphosphate",
        "Glyceraldehyde-3-phosphate -> 1,3-bisphosphoglycerate, and pyruvate -> lactate",
        "Fructose-1,6-bisphosphate -> two trioses, and DHAP -> glyceraldehyde-3-phosphate"
      ],
      answer: 0,
      optionRefs: { 1: "7-8-1", 2: "7-8-2", 3: "7-8-1" },
      optionNotes: {
        1: { en: "Those are the two -1 ATP rows of the same table: the hexokinase and phosphofructokinase steps spend ATP, they do not make it.", cn: "那是同一张表里的两个−1 ATP行：己糖激酶和磷酸果糖激酶那两步是**花**ATP，不是产ATP。" },
        2: { en: "The GAPDH step yields NADH and a high-energy acyl phosphate, not ATP; and the reduction of pyruvate to lactate yields no ATP either.", cn: "GAPDH那一步产的是NADH和一个高能酰基磷酸，不是ATP；丙酮酸还原为乳酸也不产ATP。" },
        3: { en: "Neither aldolase nor triose-phosphate isomerase touches ATP at all; they appear nowhere in the balance table.", cn: "醛缩酶和磷酸丙糖异构酶都完全不涉及ATP；它们在平衡表里根本没有出现。" }
      },
      why_en: "Each of the two substrate-level phosphorylation steps runs twice per glucose, because one hexose gave two triose phosphates -- hence +2 each. Together with the two -1 rows, the table sums to a net gain of +2 ATP per glucose, and the gross figure of +4 is what you get before subtracting the early investment.",
      why_cn: "两次底物水平磷酸化每分子葡萄糖各进行两遍——因为一个己糖已经变成了两个磷酸丙糖——所以各计+2。加上两行−1，全表合计为每分子葡萄糖净得+2 ATP；而+4是尚未扣除前期投入时的**总**产量。"
    },
    {
      type: "short",
      q_en: "Explain how phosphoglycerate mutase's coenzyme is regenerated on every turnover.",
      q_cn: "请解释磷酸甘油酸变位酶的「辅酶」是如何在每一轮催化中再生的。",
      accept: ["2,3-bisphosphoglycerate", "2,3-BPG", "phosphate", "donates", "regenerat", "辅酶", "再生", "磷酸"],
      answer_en: "The enzyme carries 2,3-bisphosphoglycerate, which the book calls the reaction's coenzyme. Its phosphate is donated to the incoming 3-phosphoglycerate, which thereby becomes a new, enzyme-bound 2,3-bisphosphoglycerate; the molecule that gave the phosphate away leaves dephosphorylated, as the product 2-phosphoglycerate. The newly phosphorylated complex is then the coenzyme for the next turnover, so nothing has to be resupplied.",
      answer_cn: "酶上带着2,3-二磷酸甘油酸，教材称之为该反应的「辅酶」。它把自己的磷酸供给新进来的3-磷酸甘油酸，后者因此变成新的、结合在酶上的2,3-二磷酸甘油酸；而交出磷酸的那一个则去磷酸化后作为产物2-磷酸甘油酸离开。新磷酸化的复合物随即成为下一轮的辅酶，所以不需要外部再补给。"
    }
  ],

  "7-8-4": [
    {
      type: "mcq",
      q_en: "Which enzyme converts pyruvate to acetaldehyde and CO2?",
      q_cn: "把丙酮酸转化为乙醛和CO2的是哪个酶？",
      options: [
        "The pyruvate dehydrogenase complex",
        "Pyruvate decarboxylase",
        "Alcohol dehydrogenase",
        "Lactate dehydrogenase"
      ],
      answer: 1,
      optionRefs: { 0: "7-8-5" },
      optionNotes: {
        0: { en: "That complex performs an oxidative decarboxylation and its product is acetyl-CoA, not acetaldehyde. The two enzymes share thiamine diphosphate but not the outcome.", cn: "那个复合体做的是**氧化**脱羧，产物是乙酰辅酶A，不是乙醛。两个酶共用焦磷酸硫胺素，但结果不同。" },
        2: { en: "Alcohol dehydrogenase acts one step later, reducing the acetaldehyde to ethanol using NADH.", cn: "醇脱氢酶作用在后一步：用NADH把乙醛还原成乙醇。" },
        3: { en: "Lactate dehydrogenase is the other fermentative branch: it reduces pyruvate itself to lactate, and no CO2 is lost.", cn: "乳酸脱氢酶是另一条发酵支路：它直接把丙酮酸还原为乳酸，全程不放CO2。" }
      },
      why_en: "In alcoholic fermentation the first step is a simple decarboxylation by pyruvate decarboxylase, whose prosthetic group is thiamine diphosphate: pyruvate + H+ -> acetaldehyde + CO2. Only then does alcohol dehydrogenase reduce the acetaldehyde to ethanol.",
      why_cn: "酒精发酵的第一步是丙酮酸脱羧酶催化的单纯脱羧，其辅基为焦磷酸硫胺素：丙酮酸 + H+ -> 乙醛 + CO2。之后才轮到醇脱氢酶把乙醛还原为乙醇。"
    },
    {
      type: "mcq",
      q_en: "In oxygen-deficient muscle, which way does the lactate dehydrogenase reaction run, and what does that do to the coenzyme?",
      q_cn: "在缺氧的肌肉里，乳酸脱氢酶的反应朝哪个方向进行？对辅酶产生什么结果？",
      options: [
        "Pyruvate + NADH + H+ -> lactate + NAD+, regenerating NAD+",
        "Lactate + NAD+ -> pyruvate + NADH + H+, consuming NAD+",
        "Pyruvate + NADPH + H+ -> lactate + NADP+",
        "Pyruvate + CoA + NAD+ -> acetyl-CoA + CO2 + NADH + H+"
      ],
      answer: 0,
      optionRefs: { 2: "7-7-1", 3: "7-8-5" },
      optionNotes: {
        1: { en: "The direction is stated backwards. Under oxygen deficiency the whole purpose is to reoxidise NADH and hand NAD+ back, not to consume it.", cn: "方向说反了。缺氧时这一步的全部意义就是把NADH重新氧化、把NAD+还回去，而不是消耗NAD+。" },
        2: { en: "NADPH/NADP+ is the pentose phosphate pathway's pair. The book writes this reaction with NADH/NAD+.", cn: "NADPH/NADP+是磷酸戊糖途径那一对。教材这个反应写的是NADH/NAD+。" },
        3: { en: "That is the aerobic fate of pyruvate, catalysed by the pyruvate dehydrogenase complex inside mitochondria.", cn: "那是丙酮酸的有氧去路，由线粒体内的丙酮酸脱氢酶复合体催化。" }
      },
      why_en: "The book writes the reaction as pyruvate + NADH + H+ <=> lactate + NAD+, catalysed by lactate dehydrogenase, and places it both in fermenting microorganisms and in cells of higher organisms under insufficient oxygen supply, such as intensively working muscle. Reading the equation the right way round is what shows why lactate forms at all: the NAD+ produced is what glycolysis needs back.",
      why_cn: "教材把该反应写作：丙酮酸 + NADH + H+ <=> 乳酸 + NAD+，由乳酸脱氢酶催化；它既发生在发酵的微生物中，也发生在高等生物供氧不足的细胞里（如剧烈活动的肌肉）。把这个方程的方向读对，才能看出乳酸为什么会生成：生成的NAD+正是糖酵解需要拿回来的东西。"
    },
    {
      type: "short",
      q_en: "Ethanol and lactate are chemically quite different endpoints. What do the two routes have in common, and why does the cell bother making either?",
      q_cn: "乙醇与乳酸在化学上是很不一样的终点。这两条路线有什么共同之处？细胞为什么要费力生成它们？",
      accept: ["NAD+", "regenerat", "NADH", "glycolysis", "再生", "糖酵解", "继续"],
      answer_en: "Both routes end in a dehydrogenase reaction that uses NADH and gives NAD+ back: alcohol dehydrogenase reducing acetaldehyde to ethanol, and lactate dehydrogenase reducing pyruvate to lactate. Ethanol and lactate are not the goal -- the regenerated NAD+ is, because glycolysis cannot keep running without it.",
      answer_cn: "两条路线的终点都是一个使用NADH、并把NAD+还回来的脱氢酶反应：醇脱氢酶把乙醛还原为乙醇，乳酸脱氢酶把丙酮酸还原为乳酸。乙醇和乳酸并不是目的——**再生出来的NAD+才是**，因为没有它糖酵解就没法继续跑下去。"
    }
  ],

  "7-8-5": [
    {
      type: "mcq",
      q_en: "Which component of the pyruvate dehydrogenase complex regenerates lipoic acid, and what makes it able to?",
      q_cn: "丙酮酸脱氢酶复合体中，哪个组分负责再生硫辛酸？它凭什么能做到？",
      options: [
        "Pyruvate dehydrogenase, by handing the hydrogens back through thiamine diphosphate",
        "Dihydrolipoyl transacetylase, by transferring the acetyl group and the hydrogens together",
        "Dihydrolipoyl dehydrogenase, a flavoprotein whose redox potential is far more negative than usual, letting it pass hydrogen on to NAD+",
        "Lactate dehydrogenase, using the NADH already present"
      ],
      answer: 2,
      optionRefs: { 3: "7-8-4" },
      optionNotes: {
        0: { en: "That component decarboxylates pyruvate and forms the active acetaldehyde bound to thiamine diphosphate; it does not handle the reoxidation.", cn: "那个组分负责让丙酮酸脱羧、生成结合在焦磷酸硫胺素上的「活性乙醛」；它不管重新氧化这件事。" },
        1: { en: "The transacetylase transfers the acetyl group onto coenzyme A and forms the structural core of the assembly, but it does not reoxidise dihydrolipoic acid.", cn: "转乙酰基酶负责把乙酰基交给辅酶A，并构成整个复合体的结构核心，但它不负责把二氢硫辛酸重新氧化。" },
        3: { en: "Lactate dehydrogenase belongs to the fermentative fate of pyruvate and is no part of this complex.", cn: "乳酸脱氢酶属于丙酮酸的发酵去路，与这个复合体无关。" }
      },
      why_en: "Lipoic acid comes out of the acetyl transfer in its reduced dihydro form and must be reoxidised before the complex can turn over again. Dihydrolipoyl dehydrogenase does this via FAD, and the book stresses that its redox potential is much more negative than that of typical flavoproteins -- which is precisely what allows it to pass the hydrogens onward to NAD+ rather than stopping at FADH2.",
      why_cn: "硫辛酸在交出乙酰基之后是还原型的二氢形式，必须重新氧化，复合体才能再转一轮。二氢硫辛酰脱氢酶经FAD完成这件事，而教材特别强调它的氧化还原电位比一般黄素蛋白**负得多**——正是这一点使它能把氢继续传给NAD+，而不是停在FADH2。"
    },
    {
      type: "mcq",
      q_en: "The book says the Gibbs energy of the aldehyde oxidation is conserved. In what?",
      q_cn: "教材说乙醛氧化的吉布斯自由能被保留了下来。保留在什么里面？",
      options: [
        "In ATP, made by substrate-level phosphorylation at this step",
        "In the high-energy thioester bond holding the acetyl group on lipoic acid",
        "In the C=O bonds of the CO2 that is released",
        "In the thiazole ring of thiamine diphosphate"
      ],
      answer: 1,
      optionRefs: { 0: "7-8-2" },
      optionNotes: {
        0: { en: "This complex makes no ATP. The trick of turning an oxidation directly into ATP belongs to glycolysis, where GAPDH stores it as an acyl phosphate and phosphoglycerate kinase cashes it in.", cn: "这个复合体不产ATP。把氧化直接变成ATP是糖酵解的把戏：GAPDH把它存成酰基磷酸，再由磷酸甘油酸激酶兑现。" },
        2: { en: "The CO2 simply leaves; nothing is stored in it. Decarboxylation happens before the oxidation step.", cn: "CO2就是走掉了，里面什么也没存。脱羧发生在氧化那一步之前。" },
        3: { en: "Thiamine diphosphate carries the two-carbon unit as active acetaldehyde before the oxidation; the energy appears only when that aldehyde becomes an acetyl group on lipoic acid.", cn: "焦磷酸硫胺素在氧化之前以「活性乙醛」的形式携带那个二碳单位；能量是在这个醛变成硫辛酸上的乙酰基时才出现的。" }
      },
      why_en: "Transfer of the aldehyde onto lipoic acid opens the disulfide ring and converts the aldehyde group into an acetyl group held by an energy-rich thioester bond -- and the book identifies that transfer as the actual dehydrogenation step, with the Gibbs energy of the oxidation conserved in the thioester. The acetyl group is then handed on to coenzyme A, which is why acetyl-CoA is itself a high-energy compound.",
      why_cn: "把醛基转移到硫辛酸上时，二硫环被打开，醛基变成由**富能硫酯键**结合的乙酰基——教材指出这一步转移才是真正的脱氢（氧化）步骤，氧化的吉布斯自由能被保留在这个硫酯键里。随后乙酰基被交给辅酶A，这也是乙酰辅酶A本身属于高能化合物的原因。"
    },
    {
      type: "short",
      q_en: "The NADH this complex produces is not the end of the story. What happens to it, and what yield does the book quote?",
      q_cn: "这个复合体产生的NADH并不是终点。它后面会怎样？教材给出的产量是多少？",
      accept: ["respiratory chain", "reoxid", "three", "3 ATP", "oxygen", "呼吸链", "重新氧化", "三"],
      answer_en: "The NAD+ is regenerated from NADH by electron transfer to oxygen in the mitochondrial respiratory chain, exactly as for the NAD+ used in oxidising glyceraldehyde-3-phosphate. The book puts the yield of that reoxidation at about three molecules of ATP.",
      answer_cn: "NADH在线粒体呼吸链中把电子传给氧，从而再生出NAD+——与氧化甘油醛-3-磷酸所用的NAD+完全一样。教材给出的这次重新氧化的产量是**约三分子ATP**。"
    }
  ],

  "7-9": [
    {
      type: "mcq",
      q_en: "How do the last two steps of glucose resynthesis proceed -- fructose-1,6-bisphosphate to fructose-6-phosphate, and glucose-6-phosphate to glucose?",
      q_cn: "葡萄糖再合成的最后两步——果糖-1,6-二磷酸到果糖-6-磷酸、葡萄糖-6-磷酸到葡萄糖——是怎样进行的？",
      options: [
        "By running phosphofructokinase and hexokinase backwards, regenerating ATP",
        "By hydrolysis, releasing inorganic phosphate and no ATP",
        "By phosphorolysis, releasing glucose-1-phosphate",
        "By transferring the phosphate onto UDP"
      ],
      answer: 1,
      optionRefs: { 0: "7-8-1", 2: "7-11-2-1", 3: "7-10-2" },
      optionNotes: {
        0: { en: "The phosphofructokinase reaction is practically irreversible -- that is exactly why glycolysis cannot simply be run backwards here. A literal reversal would also have to produce ATP, which is not what happens.", cn: "磷酸果糖激酶的反应实际上不可逆——这正是此处不能把糖酵解直接倒着跑的原因。而且单纯逆转还必须**生成**ATP，事实并非如此。" },
        2: { en: "Phosphorolysis is how glycogen is broken down inside the cell, and it yields glucose-1-phosphate, not free glucose.", cn: "磷酸解是细胞内分解糖原的方式，产物是葡萄糖-1-磷酸，不是游离葡萄糖。" },
        3: { en: "Transfer onto UDP is monosaccharide activation for biosynthesis, a different direction entirely.", cn: "转移到UDP上是为生物合成而做的单糖活化，完全是另一个方向。" }
      },
      why_en: "The book states that both final steps proceed by hydrolysis, releasing inorganic phosphate rather than forming ATP as a literal reversal of the corresponding kinase reactions would require. Worth noting honestly: within this section the book names no enzyme for either hydrolysis -- it uses the passive voice only.",
      why_cn: "教材指出这最后两步都是**水解**，释放无机磷酸，而不是像单纯逆转相应激酶反应那样去生成ATP。有一点要如实说明：在本节范围内，教材对这两步水解都**没有给出酶名**，只用了被动语态。"
    },
    {
      type: "mcq",
      q_en: "The book counts three high-energy phosphates per triose phosphate formed in gluconeogenesis. Which three?",
      q_cn: "教材算过：糖异生每形成一个丙糖磷酸要花三个高能磷酸。是哪三个？",
      options: [
        "Carboxybiotin formation; the decarboxylative phosphorylation of oxaloacetate to phosphoenolpyruvate; the reduction of 3-phosphoglycerate",
        "The hexokinase, phosphofructokinase and pyruvate kinase steps, each run in reverse",
        "One ATP for each of the triose's three carbons",
        "Two ATP plus one GTP spent on the two closing hydrolysis steps"
      ],
      answer: 0,
      optionRefs: { 1: "7-8-3" },
      optionNotes: {
        1: { en: "Those are glycolysis's own ATP rows (-1, -1, +2 twice). Pyruvate kinase is not reversed at all in gluconeogenesis -- it is bypassed via oxaloacetate.", cn: "那是糖酵解自己的ATP账（−1、−1、各+2）。而且丙酮酸激酶在糖异生里根本没有被逆转——它是**绕过去**的，走草酰乙酸。" },
        2: { en: "Nothing in the book counts phosphates per carbon; the three are named individually and belong to three specific reactions.", cn: "教材没有按碳数来算磷酸；这三个是逐一点名的，各自属于三个具体反应。" },
        3: { en: "The two closing steps are hydrolyses that release phosphate; they cost no nucleotide triphosphate at all.", cn: "最后那两步是**水解**、放出磷酸；它们根本不消耗核苷三磷酸。" }
      },
      why_en: "The book's tally names one high-energy phosphate for forming carboxybiotin (the carboxylation of pyruvate), a second for the decarboxylative phosphorylation of oxaloacetate to phosphoenolpyruvate -- the step that uses GTP rather than ATP -- and a third for the reduction of 3-phosphoglycerate, which is the phosphoglycerate-kinase step run in reverse, consuming ATP where glycolysis generated it.",
      why_cn: "教材的账是这样点的：第一个高能磷酸用于形成羧基生物素（丙酮酸的羧化），第二个用于草酰乙酸脱羧磷酸化为磷酸烯醇丙酮酸——就是用GTP而非ATP的那一步，第三个用于3-磷酸甘油酸的还原，即磷酸甘油酸激酶那一步的逆反应：糖酵解正向时它产ATP，这里则要花ATP。"
    },
    {
      type: "short",
      q_en: "Skeletal muscle cannot make glucose from its own lactate. What can it do with that lactate instead, and what route does the excess take?",
      q_cn: "骨骼肌无法用自己产生的乳酸造出葡萄糖。那么它能拿这些乳酸做什么？多余的部分走哪条路？",
      accept: ["oxidize", "oxidise", "aerobic", "blood", "liver", "back to the muscle", "氧化", "血", "肝脏"],
      answer_en: "Muscle lacks the main gluconeogenic enzymes, so it cannot resynthesize glucose from its own lactate even when oxygen is available -- but it can still oxidize that lactate further, aerobically. The excess is carried by the bloodstream to the liver, where glucose is resynthesized, and that glucose can then be transported back to the muscle by the blood. The book describes this loop without ever calling it the Cori cycle.",
      answer_cn: "肌肉缺乏糖异生的主要酶系，所以即使有氧，也无法用自身的乳酸重新合成葡萄糖——但它仍然可以把这些乳酸在有氧条件下进一步氧化。多余的乳酸经血流被送到肝脏，在那里重新合成葡萄糖，生成的葡萄糖再经血液运回肌肉。教材描述了这个环路，但**从未**称它为Cori循环。"
    },
    {
      type: "short",
      q_en: "This section describes two reactions without naming their enzymes. Which reactions are they, and what does the book say instead?",
      q_cn: "本节有两个反应，教材没有给出酶名。是哪两个反应？教材是怎么写的？",
      accept: ["hydroly", "fructose-1,6-bisphosphate", "glucose-6-phosphate", "passive", "not named", "水解", "未命名", "被动"],
      answer_en: "The two closing reactions of glucose resynthesis: fructose-1,6-bisphosphate to fructose-6-phosphate, and glucose-6-phosphate to glucose. The book describes both only in the passive voice -- that they are hydrolyzed, releasing inorganic phosphate -- and prints no enzyme name for either. Standard biochemistry calls them fructose-1,6-bisphosphatase and glucose-6-phosphatase, but since this book never says so, the honest answer states the chemistry and flags the missing names rather than supplying them as though the book had.",
      answer_cn: "就是葡萄糖再合成的最后两个反应：果糖-1,6-二磷酸→果糖-6-磷酸，以及葡萄糖-6-磷酸→葡萄糖。教材只用被动语态描述——「被水解」、「经水解生成」，同时释放无机磷酸——两处都没有印出酶名。标准生物化学称它们为果糖-1,6-二磷酸酶和葡萄糖-6-磷酸酶，但既然这本教材从未这样说，诚实的答法是讲清化学过程、并点明酶名缺失，而不是把它们当作教材写过的东西端出来。"
    }
  ],

  "7-9-1": [
    {
      type: "mcq",
      q_en: "Which pairing matches the book's two examples in section 7.9.1?",
      q_cn: "哪一种配对与教材7.9.1节给出的两个例子一致？",
      options: [
        "Alanine -> pyruvate; aspartic acid -> a four-carbon dicarboxylic acid",
        "Alanine -> a four-carbon dicarboxylic acid; aspartic acid -> pyruvate",
        "Both are converted to acetyl-CoA first",
        "Both enter as 2-oxoglutarate"
      ],
      answer: 0,
      optionRefs: { 2: "7-8-5", 3: "5-2-3-3" },
      optionNotes: {
        1: { en: "The two examples are swapped: the book gives alanine for the pyruvate route and aspartic acid for the four-carbon dicarboxylic acid route.", cn: "两个例子对调了：教材用丙氨酸举丙酮酸那条路，用天冬氨酸举四碳二羧酸那条路。" },
        2: { en: "Acetyl-CoA is not one of the two entry points this section names; the precondition it states is a four-carbon dicarboxylic acid or pyruvate.", cn: "乙酰辅酶A不在本节点名的两个入口之列；本节给出的前提条件是四碳二羧酸**或**丙酮酸。" },
        3: { en: "Conversion of amino acid carbon skeletons to 2-oxoglutarate is treated in the amino acid chapter; section 7.9.1 names only the two entry points above.", cn: "氨基酸碳骨架转化为2-氧代戊二酸是在氨基酸那一章讲的；7.9.1节只点了上面那两个入口。" }
      },
      why_en: "Section 7.9.1 is three sentences long and gives exactly one example for each of its two conditions: aspartic acid, whose breakdown supplies a four-carbon dicarboxylic acid, and alanine, whose breakdown supplies pyruvate. Both endpoints then feed gluconeogenesis directly, the dicarboxylic acid after conversion to oxaloacetate.",
      why_cn: "7.9.1节只有三句话，为它提出的两个条件各给一个例子：天冬氨酸，其分解提供四碳二羧酸；丙氨酸，其分解提供丙酮酸。两个终点随后都能直接进入糖异生，其中二羧酸要先转化为草酰乙酸。"
    },
    {
      type: "short",
      q_en: "Why does supplying a four-carbon dicarboxylic acid qualify an amino acid as convertible to glucose?",
      q_cn: "为什么「能提供四碳二羧酸」就足以让一个氨基酸具备转化为葡萄糖的资格？",
      accept: ["citric acid cycle", "citrate cycle", "intermediate", "oxaloacetate", "directly", "柠檬酸循环", "草酰乙酸", "中间产物"],
      answer_en: "Because four-carbon dicarboxylic acids are citric acid cycle intermediates, and as such they can be converted to oxaloacetate. Oxaloacetate feeds into gluconeogenesis directly, exactly as pyruvate does -- so an amino acid whose breakdown lands anywhere in that four-carbon pool has a route to glucose.",
      answer_cn: "因为四碳二羧酸是柠檬酸循环的中间产物，作为中间产物它们可以转化为草酰乙酸。而草酰乙酸能像丙酮酸一样**直接**进入糖异生——所以一个氨基酸只要分解后落进这个四碳池子，就有了通往葡萄糖的路。"
    }
  ],

  "7-10-1": [
    {
      type: "mcq",
      q_en: "Which enzyme class do glycosidases belong to, and where does the equilibrium of their reaction lie?",
      q_cn: "糖苷酶属于哪一类酶？它们所催化反应的平衡偏向哪一边？",
      options: [
        "Hydrolases; the equilibrium lies toward cleavage",
        "Transferases; the equilibrium lies toward synthesis",
        "Hydrolases; but the equilibrium lies toward synthesis, which is how oligosaccharides get built",
        "Isomerases; the equilibrium is even"
      ],
      answer: 0,
      optionRefs: { 1: "7-10-2", 3: "7-6-1" },
      optionNotes: {
        1: { en: "Glycosyltransferases are the synthetic enzymes, and they cannot work on a plain sugar at all -- the monosaccharide has to be activated as a nucleotide sugar first.", cn: "做合成的是糖基转移酶，而且它们根本不能直接用普通的糖——单糖必须先活化成核苷酸糖。" },
        2: { en: "The class is right, the direction is not: the book states the equilibrium of this reaction is shifted toward cleavage. Synthesis by a glycosidase is only an atypical side reaction.", cn: "类别答对了，方向不对：教材指出该反应的平衡偏向裂解。糖苷酶做合成只是一种非典型的副反应。" },
        3: { en: "Isomerases move a carbonyl or change a configuration; they do not cleave glycosidic bonds.", cn: "异构酶做的是搬动羰基或改变构型，不切糖苷键。" }
      },
      why_en: "The book classifies glycosidases among the hydrolases and states that the equilibrium of the reaction lies toward cleavage. That single fact is why biosynthesis cannot just be this reaction run backwards, and why the next section has to introduce a different enzyme family working on activated sugars.",
      why_cn: "教材把糖苷酶归入水解酶，并指出该反应的平衡偏向裂解。就凭这一条，生物合成就不可能是把这个反应倒着跑，所以下一节必须另请一族酶——作用于活化糖的糖基转移酶。"
    },
    {
      type: "mcq",
      q_en: "Why can one and the same enzyme not cleave both alpha- and beta-glucosides?",
      q_cn: "为什么同一个酶不能既切α-葡萄糖苷又切β-葡萄糖苷？",
      options: [
        "Because glycosidases are specific to the type of glycosidic bond -- the anomeric configuration -- as well as to the sugar",
        "Because the aglycone differs between the two",
        "Because alpha-glucosides can only be cleaved by transferases",
        "Because emulsin already contains both activities anyway"
      ],
      answer: 0,
      optionRefs: { 2: "7-10-2" },
      optionNotes: {
        1: { en: "The aglycone is precisely the feature glycosidases are NOT fussy about; the book says they show little specificity toward it.", cn: "配基恰恰是糖苷酶**不**挑剔的那一项；教材说它们对配基的特异性很低。" },
        2: { en: "Transferases build glycosidic bonds from activated sugars; they are not the enzymes that cleave alpha-glucosides.", cn: "转移酶是用活化糖去**建**糖苷键的，并不是切α-葡萄糖苷的那类酶。" },
        3: { en: "Emulsin is the book's counterexample: it is dominated by beta-D-glucosidase and alpha-D-glucosidase is completely absent from it.", cn: "乳化素恰恰是教材用来说明相反情况的例子：它以β-D-葡萄糖苷酶为主，完全**不含**α-D-葡萄糖苷酶。" }
      },
      why_en: "Glycosidase specificity is described as lopsided: high toward the identity of the bound sugar and toward the type of glycosidic bond, low toward the aglycone. That is why the enzymes are named by sugar plus configuration -- alpha-D-glucosidase, beta-D-glucosidase, alpha- and beta-D-galactosidase, beta-D-fructofuranosidase -- and why one of them cannot stand in for another.",
      why_cn: "教材把糖苷酶的特异性描述成「偏心」的：对所结合的糖是什么、以及糖苷键属于哪一型高度专一，对配基则很不讲究。正因如此这些酶才按「糖+构型」命名——α-D-葡萄糖苷酶、β-D-葡萄糖苷酶、α-与β-D-半乳糖苷酶、β-D-呋喃果糖苷酶——也正因如此它们不能互相顶替。"
    },
    {
      type: "short",
      q_en: "Emulsin is cited as one of the longest-known enzymes. What is it actually, and what does the book say about its source -- including anything you should treat with caution?",
      q_cn: "乳化素（Emulsin）被称为最早为人所知的酶之一。它究竟是什么？教材对它的来源怎么说——其中有什么需要留个心眼的地方？",
      accept: ["mixture", "beta-D-glucosidase", "absent", "sweet almond", "混合物", "甜杏仁", "不含"],
      answer_en: "Emulsin is not a single pure enzyme at all but a mixture of various glycosidases, in which beta-D-glucosidase predominates and alpha-D-glucosidase is completely absent -- which makes it a neat illustration of how sharply glycosidases discriminate by anomeric configuration. The book says it comes from sweet almonds; this node reproduces that as printed while flagging that standard sources more usually attribute this activity to bitter almonds, so the point is worth checking against a second source rather than repeating with confidence.",
      answer_cn: "乳化素根本不是单一的纯酶，而是多种糖苷酶的混合物，其中β-D-葡萄糖苷酶占优势，而**完全不含**α-D-葡萄糖苷酶——这正好说明糖苷酶按异头构型区分得有多严格。教材说它来自**甜**杏仁；本节点照原样保留这一说法，同时标注：通行资料多把这一活性归于苦杏仁，所以这一点值得另找一份资料核对，而不要自信地照搬。"
    }
  ],

  "7-10-2": [
    {
      type: "mcq",
      q_en: "When glucose-1-phosphate reacts with UTP, what leaves as the other product?",
      q_cn: "葡萄糖-1-磷酸与UTP反应时，另一个产物是什么？",
      options: [
        "Pyrophosphate",
        "Inorganic phosphate",
        "UDP",
        "ADP"
      ],
      answer: 0,
      optionRefs: { 1: "7-9", 3: "7-8-1" },
      optionNotes: {
        1: { en: "A single inorganic phosphate is what the hydrolysis steps at the end of gluconeogenesis release; this reaction splits off two phosphates together.", cn: "放出单个无机磷酸的是糖异生末尾那两步水解；这个反应脱下来的是连在一起的两个磷酸。" },
        2: { en: "UDP stays on the sugar -- that is the whole point of the activation. UDP is released later, when a glycosyltransferase hands the sugar to its acceptor.", cn: "UDP是留在糖上的——活化的意义就在这里。UDP要等到糖基转移酶把糖交给受体时才被释放。" },
        3: { en: "ATP and ADP belong to the earlier kinase step that made glucose-6-phosphate, not to this one.", cn: "ATP和ADP属于前面生成葡萄糖-6-磷酸的那一步激酶反应，不属于这一步。" }
      },
      why_en: "The activation sequence the book works through for glucose is: glucose + ATP (kinase) -> glucose-6-phosphate -> rearranged to glucose-1-phosphate -> reacts with UTP to give uridine diphosphoglucose, with pyrophosphate as the other product. Recognising which nucleotide fragment leaves at each step is what keeps the activation sequence straight.",
      why_cn: "教材以葡萄糖为例走的活化流程是：葡萄糖 + ATP（激酶）→ 葡萄糖-6-磷酸 → 重排为葡萄糖-1-磷酸 → 与UTP反应生成尿苷二磷酸葡萄糖，另一个产物是焦磷酸。看清每一步走掉的是哪一块核苷酸碎片，这条活化链才不会记乱。"
    },
    {
      type: "mcq",
      q_en: "In lactose biosynthesis, which partner is the activated donor?",
      q_cn: "在乳糖的生物合成中，哪一方是被活化的供体？",
      options: [
        "UDP-glucose, transferring glucose onto galactose",
        "UDP-galactose, transferring galactose onto glucose",
        "Free galactose, activated by a glycosidase",
        "Lactose-1-phosphate"
      ],
      answer: 1,
      optionRefs: { 0: "7-10-3", 2: "7-10-1" },
      optionNotes: {
        0: { en: "The two sugars are swapped. UDP-glucose is real and important, but in this reaction the book writes UDP-galactose + glucose -> UDP + lactose.", cn: "两种糖对调了。UDP-葡萄糖当然存在且重要，但这个反应教材写的是：UDP-半乳糖 + 葡萄糖 → UDP + 乳糖。" },
        2: { en: "Glycosidases hydrolyse; they do not activate sugars, and an unactivated free sugar cannot be transferred at all.", cn: "糖苷酶做的是水解；它们不活化糖，而未活化的游离糖根本无法被转移。" },
        3: { en: "No such compound appears in the book's account of this synthesis.", cn: "教材在讲这个合成时并没有出现这样一个化合物。" }
      },
      why_en: "The book's worked example reads UDP-galactose + glucose -> UDP + lactose: the galactose residue is handed from its activated nucleotide-sugar form onto glucose's free hydroxyl group, and UDP leaves. Which sugar sits on UDP and which supplies the hydroxyl is the whole content of the reaction.",
      why_cn: "教材的实例写作：UDP-半乳糖 + 葡萄糖 → UDP + 乳糖。半乳糖基从其活化的核苷酸糖形式转到葡萄糖的游离羟基上，UDP离开。哪种糖挂在UDP上、哪种糖提供羟基，这就是这个反应的全部内容。"
    },
    {
      type: "short",
      q_en: "Why must a monosaccharide be activated before a glycosyltransferase can use it, and what form does that activation take?",
      q_cn: "为什么单糖必须先被活化，糖基转移酶才能用它？活化采取的是什么形式？",
      accept: ["macroergic", "high-energy", "nucleoside diphosphate", "UDP", "GDP", "CMP", "活化", "高能", "核苷二磷酸"],
      answer_en: "Because synthesis is not hydrolysis run backwards -- the glycosidase reaction's equilibrium lies toward cleavage, so the sugar has to be brought up to a high-energy, macroergic form before a new glycosidic bond will form. That form is a nucleoside diphosphate sugar: usually UDP, but GDP for mannose and CMP for sialic acids. Only then can a glycosyltransferase transfer the residue onto an acceptor bearing a free hydroxyl group.",
      answer_cn: "因为合成不是把水解倒过来跑——糖苷酶反应的平衡偏向裂解，所以必须先把糖抬到高能（大能量）形式，新的糖苷键才会形成。这个形式就是核苷二磷酸糖：通常是UDP，但甘露糖用GDP、唾液酸用CMP。只有到这一步，糖基转移酶才能把糖基转移到带游离羟基的受体上。"
    }
  ],

  "7-10-3": [
    {
      type: "mcq",
      q_en: "Which enzyme actually attaches galactose to the UDP carrier?",
      q_cn: "真正把半乳糖挂到UDP这个载体上的是哪个酶？",
      options: [
        "Galactokinase",
        "Hexose-1-phosphate uridylyltransferase",
        "UDP-glucose-4-epimerase",
        "Glycogen synthase"
      ],
      answer: 1,
      optionRefs: { 3: "7-12-1" },
      optionNotes: {
        0: { en: "One step earlier: galactokinase phosphorylates free galactose to galactose-1-phosphate using ATP, which is the entry step, not the attachment to UDP.", cn: "早一步：半乳糖激酶用ATP把游离半乳糖磷酸化为半乳糖-1-磷酸，那是入口步骤，不是挂到UDP上。" },
        2: { en: "The epimerase changes the configuration at C-4 of a sugar that is already carried by UDP; it does not put galactose onto UDP in the first place.", cn: "差向异构酶改变的是**已经**挂在UDP上的糖的C-4构型；它并不负责把半乳糖装上UDP。" },
        3: { en: "Glycogen synthase takes glucose off UDP-glucose to lengthen a glycogen chain -- the consuming end of the nucleotide-sugar system.", cn: "糖原合酶是从UDP-葡萄糖上取下葡萄糖去延长糖原链——处在核苷酸糖体系的消耗端。" }
      },
      why_en: "The exchange reaction UDP-glucose + galactose-1-phosphate <=> UDP-galactose + glucose-1-phosphate, catalysed by hexose-1-phosphate uridylyltransferase, is how galactose becomes bound to the UDP coenzyme -- and in the same move it releases glucose-1-phosphate, the pathway's actual output.",
      why_cn: "交换反应「UDP-葡萄糖 + 半乳糖-1-磷酸 <=> UDP-半乳糖 + 葡萄糖-1-磷酸」由己糖-1-磷酸尿苷酰转移酶催化，正是它使半乳糖与UDP辅酶结合——而且在同一步里放出葡萄糖-1-磷酸，也就是这条途径真正的产出。"
    },
    {
      type: "mcq",
      q_en: "What exactly does UDP-glucose-4-epimerase change?",
      q_cn: "UDP-葡萄糖-4-差向异构酶究竟改变了什么？",
      options: [
        "It moves the carbonyl group to the neighbouring carbon",
        "It inverts the configuration at C-4 of the UDP-bound sugar",
        "It transfers the sugar from UDP onto a free hydroxyl group",
        "It moves the phosphate from C-1 to C-6"
      ],
      answer: 1,
      optionRefs: { 0: "7-6-1", 2: "7-10-2", 3: "7-10-2" },
      optionNotes: {
        0: { en: "Moving the carbonyl to the adjacent carbon is isomerization -- an aldose/ketose interconversion, a different reaction type from epimerization.", cn: "把羰基挪到相邻碳上是**异构化**——醛糖与酮糖的互变，与差向异构化是不同类型的反应。" },
        2: { en: "That is a glycosyltransferase reaction, which consumes the nucleotide sugar rather than rebuilding it.", cn: "那是糖基转移酶的反应，它是**消耗**核苷酸糖，而不是就地改造它。" },
        3: { en: "The glucose-6-phosphate to glucose-1-phosphate rearrangement is a separate step in the activation sequence, before UTP is involved.", cn: "葡萄糖-6-磷酸重排为葡萄糖-1-磷酸是活化流程里另一步，发生在UTP参与之前。" }
      },
      why_en: "The epimerase interconverts UDP-glucose and UDP-galactose, and the two differ in nothing but the configuration at C-4. The sugar is never released as a free sugar during this -- it is rebuilt while still on the nucleotide, which is exactly the point the epimerization section made about glucose and galactose. At equilibrium the ratio is 1:3 in favour of the galactose form.",
      why_cn: "差向异构酶让UDP-葡萄糖与UDP-半乳糖互变，两者的差别只有C-4的构型。整个过程中糖从未以游离糖的形式放出来——它是**挂在核苷酸上**被就地改造的，这正是讲差向异构化那一节针对葡萄糖与半乳糖强调的要点。平衡时葡萄糖:半乳糖为1:3。"
    },
    {
      type: "short",
      q_en: "The transferase consumes UDP-glucose and produces UDP-galactose. What keeps the pathway running turn after turn?",
      q_cn: "转移酶消耗UDP-葡萄糖、产生UDP-半乳糖。是什么让这条途径能一轮接一轮地转下去？",
      accept: ["epimerase", "UDP-glucose", "cycle", "regenerat", "C-4", "差向异构酶", "循环", "再生"],
      answer_en: "UDP-glucose-4-epimerase converts the UDP-galactose back into UDP-glucose by inverting C-4, which restores the substrate the transferase needs for the next turn. That is why the book treats galactokinase, the uridylyltransferase and the 4-epimerase as one three-enzyme route, and calls it galactose's single most important metabolic pathway: each turn takes in one galactose and puts out one glucose-1-phosphate.",
      answer_cn: "UDP-葡萄糖-4-差向异构酶通过翻转C-4，把UDP-半乳糖变回UDP-葡萄糖，从而把转移酶下一轮所需的底物补回来。这也是教材把半乳糖激酶、尿苷酰转移酶和4-差向异构酶当作**一条三酶路线**看待、并称之为半乳糖最重要的代谢途径的原因：每转一轮，进去一个半乳糖，出来一个葡萄糖-1-磷酸。"
    }
  ],

  "7-11-1-1": [
    {
      type: "mcq",
      q_en: "How does alpha-amylase attack amylose, in stages?",
      q_cn: "α-淀粉酶是分几个阶段进攻直链淀粉的？",
      options: [
        "It first cuts bonds one helical turn apart, giving oligosaccharides of 6-7 glucose units, and only then releases maltose",
        "It removes maltose units one at a time from the chain ends",
        "It releases free glucose directly, cutting both 1-4 and 1-6 bonds",
        "It works inward from the ends and stops before every branch point, leaving dextrin"
      ],
      answer: 0,
      optionRefs: { 2: "7-11-1-2" },
      optionNotes: {
        1: { en: "That is beta-amylase's exo mode. Alpha-amylase is an endoglycosidase: it cuts within the chain.", cn: "那是β-淀粉酶的外切模式。α-淀粉酶是内切糖苷酶：它在链**内部**切。" },
        2: { en: "Cutting both 1-4 and 1-6 bonds and liberating glucose directly is gamma-amylase's distinguishing property.", cn: "既切1-4又切1-6、并直接放出葡萄糖，是γ-淀粉酶的特征。" },
        3: { en: "That describes beta-amylase acting on amylopectin. On amylopectin alpha-amylase cuts in a disordered way, simply not attacking the branch points themselves.", cn: "那描述的是β-淀粉酶作用于支链淀粉。α-淀粉酶对支链淀粉是无序切割，只是不去动分支点本身。" }
      },
      why_en: "The book describes alpha-amylase's attack on amylose as staged and geometric: it first cleaves glycosidic bonds spaced one turn of the helix apart, producing 6-7-unit oligosaccharides, and only afterwards works those down to individual maltose units. The helical structure of the substrate, not the chain ends, sets the pattern.",
      why_cn: "教材把α-淀粉酶对直链淀粉的进攻描述成**分阶段、且带几何性**的：它先切开相隔一个螺旋圈的糖苷键，生成含6–7个葡萄糖单位的寡糖，之后才把这些片段拆成一个个麦芽糖。决定切法的是底物的螺旋结构，而不是链的末端。"
    },
    {
      type: "mcq",
      q_en: "Where does the book locate alpha- and beta-amylases?",
      q_cn: "教材把α-淀粉酶和β-淀粉酶分别定位在哪里？",
      options: [
        "Alpha: saliva, pancreas and malt; beta: predominantly the plant kingdom",
        "Alpha: the liver; beta: saliva and pancreas",
        "Alpha: rumen microflora; beta: the pancreas",
        "Both only in the intestinal mucosa"
      ],
      answer: 0,
      optionRefs: { 1: "7-11-1-2", 2: "7-11-1-2", 3: "7-11-1-2" },
      optionNotes: {
        1: { en: "The liver is where the book puts gamma-amylase, the one that can degrade glycogen completely on its own.", cn: "肝脏是教材安放γ-淀粉酶的地方——就是那个能独自把糖原完全分解的酶。" },
        2: { en: "Rumen microflora belongs to the cellulase story: animals rarely make cellulase themselves.", cn: "瘤胃微生物群属于纤维素酶那一节：动物自己很少产纤维素酶。" },
        3: { en: "The intestine is where maltase (alpha-D-glucosidase) splits the maltose that the amylases have already produced.", cn: "肠道是麦芽糖酶（α-D-葡萄糖苷酶）把淀粉酶已经产生的麦芽糖再分解的地方。" }
      },
      why_en: "The book gives saliva, the pancreas and malt for alpha-amylases, and says beta-amylases occur predominantly in the plant kingdom. Keeping the locations attached to the right enzyme also keeps the third amylase straight, since gamma-amylase is the liver one.",
      why_cn: "教材给α-淀粉酶的位置是唾液、胰腺和麦芽，并说β-淀粉酶主要存在于植物界。把位置钉在对应的酶上，第三种淀粉酶也就不会记乱——γ-淀粉酶才是肝脏里的那个。"
    },
    {
      type: "short",
      q_en: "Explain the naming logic behind alpha- and beta-amylase, and say what happens to the released maltose afterwards.",
      q_cn: "解释α-淀粉酶和β-淀粉酶命名背后的逻辑，并说明释放出来的麦芽糖之后会发生什么。",
      accept: ["alpha-form", "beta-form", "mutarotation", "equilibrium", "anomeric", "变旋", "构型", "平衡"],
      answer_en: "The names come from the anomeric form of the maltose each enzyme releases, not from the bonds they cut: alpha-amylase ultimately liberates maltose in the alpha-form, beta-amylase in the beta-form. In both cases the alpha/beta equilibrium is then established afterwards by mutarotation, so the released sugar does not stay in the form it came off in.",
      answer_cn: "这两个名字来自各自释放的麦芽糖的**异头构型**，而不是来自它们切的键：α-淀粉酶最终放出的是α型麦芽糖，β-淀粉酶放出的是β型。两种情况下，之后都会通过变旋作用建立α/β平衡，所以放出来的糖并不会停在原来的构型上。"
    }
  ],

  "7-11-1-2": [
    {
      type: "mcq",
      q_en: "What splits maltose into glucose, and where?",
      q_cn: "把麦芽糖分解为葡萄糖的是什么酶？在哪里进行？",
      options: [
        "Alpha-D-glucosidase (maltase), in the intestine",
        "Beta-D-glucosidase, in the intestine",
        "Gamma-amylase, in the liver",
        "Phosphorylase, releasing glucose-1-phosphate"
      ],
      answer: 0,
      optionRefs: { 1: "7-10-1", 3: "7-11-2-1" },
      optionNotes: {
        1: { en: "Beta-D-glucosidase is the dominant activity of emulsin and acts on beta-glucosides; maltose's bond needs the alpha-specific enzyme.", cn: "β-D-葡萄糖苷酶是乳化素的主要活性，作用于β-葡萄糖苷；麦芽糖里的那个键需要对α专一的酶。" },
        2: { en: "Gamma-amylase acts on glycogen itself, in the liver -- not on the maltose released in the gut.", cn: "γ-淀粉酶作用于糖原本身，在肝脏里——不是处理肠道中放出来的麦芽糖。" },
        3: { en: "Phosphorylase works inside the cell, breaks the bond with phosphate instead of water, and gives glucose-1-phosphate rather than glucose.", cn: "磷酸化酶在细胞内工作，用磷酸而不是水去断键，产物是葡萄糖-1-磷酸而不是葡萄糖。" }
      },
      why_en: "Amylase digestion stops at the disaccharide stage, so maltose still has to be split, and the book names alpha-D-glucosidase -- maltase -- doing this in the intestine. The name is not incidental: maltose's bond is an alpha bond, which is exactly what this glycosidase is specific for.",
      why_cn: "淀粉酶的消化停在二糖这一层，所以麦芽糖还得再切一次；教材点名由α-D-葡萄糖苷酶（即麦芽糖酶）在肠道内完成。这个名字不是随便取的：麦芽糖里的键是α键，而这个糖苷酶专一的正是α键。"
    },
    {
      type: "mcq",
      q_en: "Why does the breakdown of dietary cellulose depend on microflora?",
      q_cn: "为什么食物中纤维素的分解要依赖微生物群？",
      options: [
        "Because cellulases occur mainly in microorganisms and are only rarely found in animals",
        "Because beta-amylase cleaves cellulose, and it is a plant enzyme",
        "Because gamma-amylase handles cellulose in the liver",
        "Because cellulose has to be phosphorolysed first"
      ],
      answer: 0,
      optionRefs: { 1: "7-11-1-1", 3: "7-11-2-1" },
      optionNotes: {
        1: { en: "A naming trap. The beta in beta-amylase refers to the anomeric form of the maltose it releases from starch, not to cellulose's bonds.", cn: "这是个命名陷阱。β-淀粉酶里的β指的是它从淀粉上放出的麦芽糖的异头构型，与纤维素的键无关。" },
        2: { en: "Gamma-amylase hydrolyses glycogen's 1-4 and 1-6 bonds; cellulose is not its substrate.", cn: "γ-淀粉酶水解的是糖原的1-4和1-6键；纤维素不是它的底物。" },
        3: { en: "Phosphorolysis is the intracellular route for starch and glycogen, and it has nothing to do with cellulose.", cn: "磷酸解是细胞内分解淀粉和糖原的路线，与纤维素无关。" }
      },
      why_en: "The book states that cellulases occur mainly in microorganisms and are found only rarely in animals, so when cellulose is broken down as a food source it is almost always the animal's microflora doing the work -- the rumen of ruminants being the standard case.",
      why_cn: "教材指出纤维素酶主要存在于微生物中，动物体内很少见，所以当纤维素被当作食物来源分解时，几乎总是动物体内的微生物群在干活——反刍动物的瘤胃就是标准例子。"
    },
    {
      type: "short",
      q_en: "What makes gamma-amylase different from the other two amylases, where is it found, and what does its name mean?",
      q_cn: "γ-淀粉酶与另外两种淀粉酶有什么不同？它在哪里？它的名字是什么意思？",
      accept: ["1-6", "1-4", "completely", "liver", "third", "1,6", "肝脏", "第三", "完全"],
      answer_en: "Gamma-amylase cleaves glucose units directly off glycogen and, uniquely among the three, hydrolyses both 1-4 and 1-6 bonds -- so it is not stopped by branch points and can degrade glycogen completely on its own, which neither alpha- nor beta-amylase can do. It occurs in the liver. As for the name, the book is explicit that there is no reason for calling it gamma beyond its being the third type of amylase discovered.",
      answer_cn: "γ-淀粉酶直接从糖原上切下葡萄糖单位，而且在三者中唯独它能同时水解1-4键和1-6键——所以它不会被分支点挡住，可以独自把糖原**完全**分解，这是α-和β-淀粉酶都做不到的。它存在于肝脏中。至于名字，教材明说：叫它γ并没有别的道理，只因为它是被发现的第三种淀粉酶。"
    }
  ],

  "7-11-2-1": [
    {
      type: "mcq",
      q_en: "What is the immediate product when glycogen is broken down inside a cell?",
      q_cn: "糖原在细胞内被分解时，直接产物是什么？",
      options: [
        "Glucose-6-phosphate",
        "Glucose-1-phosphate",
        "Free glucose",
        "UDP-glucose"
      ],
      answer: 1,
      optionRefs: { 0: "7-8-1", 2: "7-11-1-2", 3: "7-10-2" },
      optionNotes: {
        0: { en: "One step further on: the phosphate still has to be moved from position 1 to position 6 before the sugar can go down glycolysis.", cn: "那是再往后一步：磷酸还得从1位挪到6位，糖才能进入糖酵解。" },
        2: { en: "Free glucose is what hydrolytic digestion in the gut delivers; phosphorolysis specifically avoids releasing an unphosphorylated sugar.", cn: "游离葡萄糖是消化道水解给出的东西；磷酸解恰恰要避免放出一个未磷酸化的糖。" },
        3: { en: "UDP-glucose is the activated form used to build glycogen, not a product of taking it apart.", cn: "UDP-葡萄糖是**建造**糖原所用的活化形式，不是拆解糖原的产物。" }
      },
      why_en: "Intracellular breakdown is phosphorolysis, not hydrolysis: a glucose residue is transferred from the polysaccharide onto phosphoric acid, so it leaves already carrying a phosphate at C-1. The bond is broken with phosphate instead of water, which is the whole difference from the digestive route.",
      why_cn: "细胞内的分解是**磷酸解**而不是水解：葡萄糖残基被从多糖上转移到磷酸上，所以它出来时C-1位已经带着磷酸。断键用的是磷酸而不是水，这就是它与消化道路线的全部区别。"
    },
    {
      type: "mcq",
      q_en: "Which end of the polysaccharide does phosphorylase work from, and what happens next?",
      q_cn: "磷酸化酶从多糖的哪一端下手？之后会怎样？",
      options: [
        "The reducing end, once per chain",
        "The non-reducing end, repeatedly, as each new terminal residue is exposed",
        "Random points inside the chain",
        "At the branch points first"
      ],
      answer: 1,
      optionRefs: { 2: "7-11-1-1", 3: "7-11-2-2" },
      optionNotes: {
        0: { en: "The book specifies the non-reducing end, and the reaction is not a one-off: the newly exposed terminal residue is cleaved the same way again.", cn: "教材指明的是非还原端，而且这个反应不是只做一次：新暴露出来的末端残基会被同样地再切一次。" },
        2: { en: "Cutting at random points inside the chain is alpha-amylase's endoglycosidase mode, a digestive-tract enzyme.", cn: "在链内部随机切是α-淀粉酶的内切模式，那是消化道里的酶。" },
        3: { en: "Branch points are where phosphorylase stops, four residues short -- they are the obstacle, not the starting point.", cn: "分支点恰恰是磷酸化酶**停下来**的地方（还差四个残基）——它们是障碍，不是起点。" }
      },
      why_en: "Phosphorylase takes the terminal residue at the non-reducing end and transfers it onto phosphate. That exposes a new terminal residue, which can be cleaved in the same way, so the enzyme works its way down the chain one glucose unit at a time. The book's figure draws the reaction with a double-headed arrow, i.e. as reversible.",
      why_cn: "磷酸化酶取的是非还原端的末端残基，把它转移到磷酸上。这样就露出一个新的末端残基，可以按同样方式再切，于是酶沿着链一个葡萄糖单位一个葡萄糖单位地推进。教材配图用双向箭头画出该反应，即表示可逆。"
    },
    {
      type: "short",
      q_en: "The same molecule can be taken apart by two different chemistries depending on where it is. Name both, and name the cells and tissues the book gives for the intracellular one.",
      q_cn: "同一种分子，在不同的地方会被两种不同的化学方式拆开。请说出这两种方式，并说出教材为细胞内那一种给出的细胞与组织。",
      accept: ["hydroly", "digest", "phosphoroly", "muscle", "liver", "plant cell", "水解", "磷酸解", "肌肉", "肝脏"],
      answer_en: "In the digestive tract polysaccharides are broken down by hydrolases -- hydrolysis, water splitting the bond. Inside cells the same bonds are broken by phosphorolysis, with inorganic phosphate as the acceptor and phosphorylase as the enzyme. The book applies the intracellular route both to starch in plant cells and to glycogen in muscle and liver.",
      answer_cn: "在消化道里，多糖由水解酶分解——即水解，用水去断键。在细胞内，同样的键是靠**磷酸解**断开的，受体是无机磷酸，酶是磷酸化酶。教材把细胞内这条路线同时用于植物细胞中的淀粉，以及肌肉和肝脏中的糖原。"
    }
  ],

  "7-11-2-2": [
    {
      type: "mcq",
      q_en: "What exactly does the transglycosidase move during debranching, and how does it reattach it?",
      q_cn: "脱支过程中，转糖苷酶搬走的到底是什么？又是怎么接回去的？",
      options: [
        "A single glucose residue, reattached by a 1->6 bond",
        "A three-residue block, onto another chain, by a new alpha-1->4 bond",
        "A four-residue block, onto the same chain",
        "A two-carbon fragment, using thiamine diphosphate"
      ],
      answer: 1,
      optionRefs: { 3: "7-7-2" },
      optionNotes: {
        0: { en: "The single residue left sitting at the branch is not relocated at all -- it is removed hydrolytically by alpha-1,6-glucosidase.", cn: "最后留在分支点上的那**一个**残基根本不是被搬走的——它是由α-1,6-葡萄糖苷酶以水解方式去除的。" },
        2: { en: "Four is where phosphorylase stops. Of those four residues, three are moved, and they go onto a different chain.", cn: "「四」是磷酸化酶停下来的位置。这四个残基里被搬走的是三个，而且是搬到**另一条**链上。" },
        3: { en: "Two-carbon fragment transfer with thiamine diphosphate is transketolase, in the pentose phosphate pathway.", cn: "用焦磷酸硫胺素搬二碳片段的是转酮醇酶，属于磷酸戊糖途径。" }
      },
      why_en: "Phosphorylase stalls at the fourth glucose residue before a branch point, and transglycosidase then detaches a three-residue block from that stub and attaches it to another chain via a new alpha-1->4 bond. That leaves exactly one residue at the old branch, still held by its 1->6 bond, for the third enzyme to deal with.",
      why_cn: "磷酸化酶在距分支点第四个葡萄糖残基处停住，随后转糖苷酶把这个残桩上的**三个残基整块**卸下来，通过新的α-1→4键接到另一条链上。这样原分支点处就恰好剩下一个残基，仍由1→6键连着，交给第三个酶去处理。"
    },
    {
      type: "mcq",
      q_en: "Complete breakdown of glycogen yields about 10% free glucose. Where does that free glucose come from?",
      q_cn: "糖原完全分解会产生约10%的游离葡萄糖。这些游离葡萄糖是从哪来的？",
      options: [
        "From the non-reducing ends, where phosphorylase releases glucose",
        "From the branch points, where alpha-1,6-glucosidase acts hydrolytically",
        "From maltose split by maltase",
        "From the hydrolysis of glucose-6-phosphate"
      ],
      answer: 1,
      optionRefs: { 2: "7-11-1-2", 3: "7-9" },
      optionNotes: {
        0: { en: "Phosphorylase releases glucose-1-phosphate, not free glucose -- that is exactly why the free-glucose fraction has to come from somewhere else.", cn: "磷酸化酶放出的是葡萄糖-1-磷酸而不是游离葡萄糖——正因如此，那部分游离葡萄糖必须另有来源。" },
        2: { en: "Maltase splitting maltose is the digestive route in the intestine, not the intracellular breakdown of glycogen.", cn: "麦芽糖酶分解麦芽糖是肠道里的消化路线，不是细胞内糖原的分解。" },
        3: { en: "Hydrolysis of glucose-6-phosphate to free glucose is the closing step of gluconeogenesis, a different pathway.", cn: "葡萄糖-6-磷酸水解为游离葡萄糖是**糖异生**的收尾步骤，属于另一条途径。" }
      },
      why_en: "Every residue removed phosphorolytically leaves as glucose-1-phosphate; only the single residue at each former branch point is removed hydrolytically, by alpha-1,6-glucosidase, and therefore comes off as plain glucose. The roughly 10% figure is a direct read-out of how often glycogen branches -- it should trigger the thought branch point, not be memorised as a loose number.",
      why_cn: "凡是被磷酸解切下的残基，出来都是葡萄糖-1-磷酸；只有每个原分支点上的那**一个**残基是被α-1,6-葡萄糖苷酶水解掉的，因此以普通葡萄糖的形式出现。约10%这个数字实际上直接反映了糖原分支的密度——看到它应当立刻想到分支点，而不是当成一个孤立的数字去背。"
    },
    {
      type: "short",
      q_en: "Three enzymes are needed to strip a branched glycogen molecule. Name each and say which chemistry it uses.",
      q_cn: "拆掉一个带分支的糖原分子需要三种酶。请分别说出它们的名字，以及各自用的是哪种化学方式。",
      accept: ["phosphorylase", "phosphoroly", "transglycosidase", "1,6-glucosidase", "hydroly", "磷酸解", "转糖苷酶", "水解"],
      answer_en: "Phosphorylase removes residues from the non-reducing end by phosphorolysis, giving glucose-1-phosphate, and stops four residues before each branch point. Transglycosidase then performs a transfer, not a cleavage to solvent: it relocates a three-residue block onto another chain by a new alpha-1,4 bond. Finally alpha-1,6-glucosidase removes the last remaining branch residue hydrolytically, which is why that one comes off as free glucose.",
      answer_cn: "磷酸化酶以**磷酸解**方式从非还原端取下残基，产物是葡萄糖-1-磷酸，并在距每个分支点四个残基处停住。转糖苷酶做的是**转移**而不是把键交给溶剂断开：它把三个残基的整块通过新的α-1,4键搬到另一条链上。最后，α-1,6-葡萄糖苷酶以**水解**方式去掉分支点上最后剩下的那个残基——这也是这一个会以游离葡萄糖形式出来的原因。"
    }
  ],

  "7-12-1": [
    {
      type: "mcq",
      q_en: "What does polysaccharide synthesis usually need before elongation can begin?",
      q_cn: "多糖合成通常需要什么，链的延长才能开始？",
      options: [
        "A starter molecule, typically a protein chain already carrying oligosaccharide chains",
        "A free glucose molecule to serve as the first residue",
        "A glucose-1-phosphate primer supplied by phosphorylase",
        "A branch point, created first by the branching enzyme"
      ],
      answer: 0,
      optionRefs: { 2: "7-11-2-1" },
      optionNotes: {
        1: { en: "The book does not start from a bare sugar: the starter it names already carries oligosaccharide chains, which are then elongated and branched.", cn: "教材并不是从一个光秃秃的糖开始的：它点名的引物**已经**带着寡糖链，之后才被延长和分支。" },
        2: { en: "Glucose-1-phosphate is the product of breaking glycogen down. Synthesis works from UDP-glucose instead, which is why the two directions are not mirror images.", cn: "葡萄糖-1-磷酸是**分解**糖原的产物。合成用的是UDP-葡萄糖——这也是两个方向并非互为镜像的原因。" },
        3: { en: "Branching comes afterwards: the branching enzyme converts some already-formed alpha-1,4 bonds into alpha-1,6 bonds.", cn: "分支是后面的事：分支酶是把**已经形成的**一部分α-1,4键转变成α-1,6键。" }
      },
      why_en: "Alongside glycosyltransferases and nucleotide-activated monosaccharides, the book adds one requirement specific to polysaccharides: a starter molecule, usually a protein chain already bearing oligosaccharide chains. Synthesis then proceeds by elongating those chains and, where appropriate, branching them.",
      why_cn: "除了糖基转移酶和以核苷酸活化的单糖之外，教材还为多糖多加了一个条件：一个引物分子，通常是**已经带有寡糖链的蛋白质链**。合成随后就是把这些链延长，并在合适的地方分支。"
    },
    {
      type: "short",
      q_en: "Divide the labour between glycogen synthase and the branching enzyme, and name the donor the synthase works from.",
      q_cn: "请把糖原合酶与分支酶的分工讲清楚，并说出合酶所用的供体。",
      accept: ["UDP-Glc", "UDP-glucose", "C-4", "alpha-1,4", "alpha-1,6", "branch", "分支", "末端"],
      answer_en: "Glycogen synthase only lengthens a chain: it transfers glucose from UDP-glucose onto the C-4 hydroxyl group of the terminal residue of the growing molecule, so the chain grows by alpha-1->4 bonds one glucose at a time. It cannot make a branch. That is a separate job, done by the branching enzyme, which converts some of those alpha-1->4 bonds into alpha-1->6 bonds and so creates the branch points characteristic of glycogen.",
      answer_cn: "糖原合酶只干一件事——**延长**：把葡萄糖从UDP-葡萄糖转移到正在生长分子的末端残基的C-4羟基上，于是链以α-1→4键一个葡萄糖一个葡萄糖地长起来。它造不出分支。分支是另一份工作，由分支酶完成：它把其中一部分α-1→4键转变为α-1→6键，从而产生糖原特有的分支点。"
    }
  ],

  "7-12-2": [
    {
      type: "mcq",
      q_en: "What reverses the three phosphorylations of this cascade?",
      q_cn: "这个级联中的三次磷酸化，是靠什么逆转的？",
      options: [
        "Adenylate cyclase",
        "Specific protein phosphatases, themselves drawn with an active and an inactive form",
        "Phosphorylase kinase, running backwards",
        "cAMP, by binding to the enzymes directly"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Adenylate cyclase starts the cascade: it makes cyclic AMP from ATP in response to adrenaline or glucagon.", cn: "腺苷酸环化酶是**启动**级联的：它在肾上腺素或胰高血糖素作用下把ATP变成环腺苷酸。" },
        2: { en: "Phosphorylase kinase adds a phosphate to phosphorylase. Nothing in the diagram shows a kinase taking phosphates off.", cn: "磷酸化酶激酶是给磷酸化酶**加**磷酸的。图中没有任何激酶在做「取下磷酸」这件事。" },
        3: { en: "cAMP works by activating protein kinase; it does not dephosphorylate anything itself.", cn: "cAMP的作用方式是**激活蛋白激酶**；它自己并不去磷酸化任何东西。" }
      },
      why_en: "All three phosphorylated states -- glycogen synthase D, phosphorylase kinase a, and phosphorylase a -- can have their phosphate groups removed again by specific protein phosphatases, releasing inorganic phosphate and resetting each step. The diagram even shows the phosphatase itself in an active and an inactive form.",
      why_cn: "三个磷酸化状态——糖原合酶D、磷酸化酶激酶a、磷酸化酶a——上的磷酸基团都可以被特异的蛋白磷酸酶重新去除，放出无机磷酸，把每一步复位。图中甚至把这个磷酸酶本身也画成了活性和无活性两种形式。"
    },
    {
      type: "mcq",
      q_en: "Adrenaline has just raised cAMP in the cell. Which combination of enzyme forms fits that moment?",
      q_cn: "肾上腺素刚刚使细胞内cAMP升高。此刻哪一种酶形式的组合是相符的？",
      options: [
        "Glycogen synthase in the D form, phosphorylase in the a form",
        "Glycogen synthase in the I form, phosphorylase in the a form",
        "Glycogen synthase in the D form, phosphorylase in the b form",
        "Glycogen synthase in the I form, phosphorylase in the b form"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "This breaks the reciprocity the book insists on. The same protein kinase that starts the phosphorylase branch also phosphorylates the synthase into its inactive D form, so the active I form cannot coexist with phosphorylase a.", cn: "这违反了教材强调的**相互性**。启动磷酸化酶那一支的，正是把合酶磷酸化成无活性D型的同一个蛋白激酶，所以活性的I型不可能与磷酸化酶a并存。" },
        2: { en: "Half the cascade has fired and half has not. The b form is the less active phosphorylase; under raised cAMP the second tier converts it to a.", cn: "这等于级联只响了一半。b型是活性较低的磷酸化酶；cAMP升高时，第二级会把它转成a型。" },
        3: { en: "That is the dephosphorylated resting state, the one the protein phosphatases restore -- the opposite of a hormone-stimulated cell.", cn: "那是去磷酸化的静息状态，也就是蛋白磷酸酶恢复出来的状态——与被激素刺激的细胞正好相反。" }
      },
      why_en: "Raised cAMP activates protein kinase, which phosphorylates glycogen synthase from the active I form to the inactive D form, and phosphorylates phosphorylase kinase from b to a; the active phosphorylase kinase then converts phosphorylase from b to the much more active a form. Synthesis off, breakdown on -- the reciprocity is built into having one kinase drive both branches.",
      why_cn: "cAMP升高会激活蛋白激酶：它把糖原合酶从活性的I型磷酸化成无活性的D型，同时把磷酸化酶激酶从b型磷酸化成a型；活性的磷酸化酶激酶再把磷酸化酶从b型转成活性强得多的a型。合成关掉、分解打开——这种相互性正是「由同一个激酶驱动两条分支」所内建的。"
    },
    {
      type: "short",
      q_en: "Besides covalent phosphorylation, what other kind of regulation does the book say both enzymes are subject to -- and what word does it use for the cascade as a whole?",
      q_cn: "除了共价磷酸化之外，教材说这两个酶还受哪一类调节？它用什么词来形容整个级联？",
      accept: ["allosteric", "non-covalent", "amplif", "别构", "非共价", "放大"],
      answer_en: "On top of the covalent phosphorylation control, the book states that both glycogen synthase and phosphorylase are also regulated by non-covalent allosteric interactions -- a second, independent layer. And it introduces the whole hormone-driven scheme as an amplifying cascade of reactions, coordinately controlling synthesis and breakdown together.",
      answer_cn: "在共价磷酸化调控之上，教材指出糖原合酶和磷酸化酶还都受**非共价的别构相互作用**调节——这是独立的第二层。而它在引入整套激素驱动的机制时，用的说法是「放大的级联反应」，把合成与分解协调地一起管起来。"
    }
  ]

});
