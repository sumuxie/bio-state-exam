/* Merged spines — the five topics that carry the frame the rest of metabolism hangs on.
   速通简洁版, ONE spine per TOPIC.

   Fifteen member nodes come out here as five chains of 21, 10, 15, 9 and 10 steps.
   Two of the fifteen already had a node spine (L-13-2-1 and L-13-3-1); each of those
   is the backbone of its chain, and the Czech account is folded in where it ADDS —
   a number, a structural reason, a name the exam uses, a consequence Lehninger does
   not draw. The other thirteen nodes had no spine and were written from source.

   WHAT SITS NEXT DOOR AND IS NOT REPEATED HERE. `key:bioenergetics-basics` in
   spine_merged_foundations.js already derives Gibbs energy, the state-quantity
   argument, the coupling of glucose phosphorylation to ATP through a shared
   intermediate, ΔG = ΔG° + RT ln Q, the biochemical standard state, activation
   energy, catabolism/anabolism as an economy and the four trophic classes. These
   five chains sit beside it and reach back to it rather than deriving ΔG again.
   `key:citric-acid-cycle` carries the nine reactions of the cycle; the hub chain
   here carries what the cycle SUPPLIES and what has to be paid back into it.

   ONE disagreement between the two books is left standing rather than smoothed over,
   and it is flagged where it occurs (chain 2, step 8). On what physically makes a
   coupled reaction work, Biochemie says the exergonic reaction continuously removes
   the products of the endergonic one; Lehninger says the two reactions must share an
   intermediate that cancels when the equations are added. Both are stated.

   Every step keeps a `src` naming the pages it was read from; A = Lehninger 8e,
   B = Biochemie. A step built from both carries both, separated by a middle dot.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath it is first
   used; state the scope; reach back. Every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden — but the span is not where a term gets
   introduced. Introduction happens in the step's prose, which is the 主干线. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------ 生化反应的逻辑与代谢的地图 ---- */
window.BIOLITE_SPINE["key:biochemical-reaction-logic"] = {
  assumed: ["cell", "enzyme", "protein", "substrate", "product", "catalysis", "catalyst",
            "metabolism", "metabolite", "pathway", "reaction", "molecule", "atom",
            "electron", "proton", "ion", "charge", "covalent bond", "double bond",
            "carbon", "oxygen", "nitrogen", "hydrogen", "sulfur", "phosphorus",
            "magnesium", "water", "carbon dioxide", "ammonia", "ph", "temperature",
            "pressure", "energy", "free energy", "gibbs energy", "activation energy",
            "equilibrium", "equilibrium constant", "oxidation", "reduction",
            "oxidation state", "isotope", "glucose", "fructose", "pyruvate", "lactate",
            "glycerol", "fatty acid", "amino acid", "protein", "polysaccharide",
            "monosaccharide", "hexose", "pentose", "lipid", "fat", "sugar", "starch",
            "glycogen", "cholesterol", "steroid", "vitamin", "coenzyme", "cofactor",
            "ATP", "ADP", "AMP", "NAD+", "NADH", "NADP+", "NADPH", "GTP", "phosphate",
            "inorganic phosphate", "acetyl-CoA", "coenzyme A", "citrate", "isocitrate",
            "succinate", "fumarate", "malate", "oxaloacetate", "citric acid cycle",
            "glycolysis", "hydrolysis", "condensation", "alcohol", "aldehyde", "ketone",
            "carboxylic acid", "alkane", "hydroxyl group", "carbonyl group", "keto group",
            "amino group", "acyl group", "methyl group", "side chain (r)", "heme",
            "DNA", "RNA", "nucleic acid", "deoxyribonucleotide", "ribonucleotide",
            "nucleoside triphosphate", "mitochondrion", "mitochondria", "organelle",
            "compartment", "eukaryotic cell", "chymotrypsin", "aldolase", "hexokinase",
            "ketone body", "ultraviolet", "radiation", "macromolecule", "monomer",
            "polymer", "storage", "turnover", "concentration", "rate", "flux"],
  nodeTitle_en: "How a biochemical reaction is built, and how metabolism is laid out",
  nodeTitle_cn: "一个生化反应是怎么搭起来的，以及代谢是怎么铺开的",
  title_en: "Five reaction types instead of a thousand reactions, and above them a funnel that narrows every nutrient onto one molecule",
  title_cn: "用五类反应代替上千个反应；而在它们之上，是一个把每一种养分都收窄到同一个分子上的漏斗",
  terms: [
    { en: "carbanion", cn: "碳负离子",
      def_en: "A carbon atom holding a lone pair of electrons and a negative charge. Highly unstable on its own, so it exists in a cell only when an adjacent electron-withdrawing group spreads the charge — almost always a carbonyl.",
      def_cn: "一个带着孤对电子和负电荷的碳原子。它自身极不稳定，所以只有当旁边有一个抽电子的基团把电荷摊开时，它才能在细胞里存在 —— 而那个基团几乎总是羰基。" },
    { en: "carbocation", cn: "碳正离子",
      def_en: "A carbon atom short of an electron pair and carrying a positive charge. Made affordable not by a neighbouring sink but by eliminating a very good leaving group, pyrophosphate being the standard one.",
      def_cn: "一个少了一对电子、带正电荷的碳原子。让它变得负担得起的不是旁边的电子槽，而是消去一个极好的离去基团 —— 标准的那个是焦磷酸。" },
    { en: "carbonyl group", cn: "羰基",
      def_en: "A carbon double-bonded to an oxygen, C=O. It works as an electron sink in two directions at once: its own carbon is electrophilic, and it delocalises the negative charge of a carbanion on the adjoining carbon.",
      def_cn: "一个与氧双键相连的碳，C=O。它同时朝两个方向充当电子槽：它自己的碳是亲电的，同时它又把相邻碳上碳负离子的负电荷离域到自己身上。" },
    { en: "nucleophile", cn: "亲核体",
      def_en: "A group rich in electrons and able to donate them. Its counterpart is the electrophile, a group short of electrons and seeking them. These are roles in a reaction, not fixed properties: a carbon atom plays either one depending on what surrounds it.",
      def_cn: "富电子、能把电子给出去的基团。与它相对的是亲电体（electrophile），即缺电子、正在找电子的基团。这是反应中的角色，不是固定的性质：同一个碳原子演哪一个，取决于它周围是什么。" },
    { en: "good leaving group", cn: "好的离去基团",
      def_en: "A group that departs readily from a molecule, so a substitution at that position becomes feasible. Attaching one to a metabolic intermediate is precisely what the word activation means — Pi and PPi are the standard ones, thiols are the other family.",
      def_cn: "从分子上走得很痛快的基团，因而使该位置上的取代反应变得可行。给一个代谢中间产物挂上这样一个基团，正是「活化」这个词的全部含义 —— 标准的是 Pi 和 PPi，另一族是硫醇。" },
    { en: "thioester", cn: "硫酯",
      def_en: "A carboxylic acid joined through a sulfur instead of an oxygen, acetyl-CoA being the standard example. Two consequences: it is an activated carboxylic acid, because the thiol leaves well, and its carbonyl stabilises the carbanion next to it.",
      def_cn: "羧酸通过一个硫、而非氧连接起来的形式，标准例子是乙酰-CoA。两个后果：它是被活化的羧酸，因为硫醇走得好；而它的羰基又能稳定住旁边的碳负离子。" },
    { en: "intermediary metabolism", cn: "中间代谢",
      def_en: "The sum of the mutually strictly coordinated reactions running in a living cell. The word coordinated is the load-bearing one: it is what separates a metabolism from a bag of reactions that happen to share a container.",
      def_cn: "在活细胞中进行的、彼此严格协调的全部反应之总和。承重的词是「协调」：正是它把一套代谢，与「一堆碰巧共用一个容器的反应」区分开来。" },
    { en: "nodal point", cn: "节点",
      def_en: "A metabolite shared as an intermediate by two or more different processes. It is where pathways connect and therefore where regulation has leverage; acetyl-CoA is the model case, with three inputs and three outputs.",
      def_cn: "被两条或更多不同过程共用作中间产物的代谢物。通路在这里连接，因而调节也在这里最有着力点；乙酰-CoA 是范例，三进三出。" },
    { en: "pool", cn: "代谢库",
      def_en: "The mobilizable store of a key metabolite. It is defined by the ability to hold a level steady under rapid turnover and not by a high absolute concentration: ATP stands at a few grams and is remade about 70 kg a day.",
      def_cn: "某个关键代谢物可动员的贮量。定义它的是「在快速周转下仍能把水平稳住」的能力，而不是绝对浓度高：ATP 的存量不过几克，一天却要重造约 70 公斤。" }
  ],
  steps: [
    {
      en: "A typical cell runs thousands of different enzyme-catalysed reactions, and almost all of them fall into five classes: reactions that make or break carbon-carbon bonds; internal rearrangements, isomerizations and eliminations; free-radical reactions, meaning reactions that go through a fragment carrying one unpaired electron; group transfers; and oxidation-reductions. The five overlap on purpose, since an isomerization can run through a free-radical intermediate, so they are five lenses to look through rather than five boxes to sort into. Two filters decide which reactions get into the set at all. Relevance: the reaction has to start from a substrate the cell actually holds and end at a product the cell actually wants. Rate: a reaction can be chemically sensible and metabolically useful and still never happen, because its activation energy — the climb that has to be made before reactants can turn into products — is too high for any enzyme to bring down far enough. **What survives both filters is a toolbox, and a pathway takes the shortest route through it, detouring around chemically shorter routes that are too slow to exist.**",
      cn: "一个典型细胞进行着上千个不同的酶催化反应，而它们几乎全部落进五类里：生成或断裂碳-碳键的反应；分子内重排、异构化与消除；自由基反应，也就是经由「带着一个未成对电子的碎片」进行的反应；基团转移；氧化还原。这五类是故意互相重叠的，因为一个异构化反应可以经由自由基中间体进行，所以它们是五副用来看的镜片，而不是五个用来分装的盒子。至于哪些反应能进这个集合，由两道过滤器决定。第一道是相关性：反应必须从细胞手头真有的底物出发，终点是细胞真的想要的产物。第二道是速率：一个反应可以在化学上说得通、在代谢上也有用，却依然永远不发生 —— 因为它的活化能（反应物变成产物之前必须爬完的那段坡）太高，任何酶都降不到位。**同时通过两道过滤器的那些反应构成一套工具箱，而一条通路走的是穿过这套工具箱的最短路线，绕开那些化学上更短、却慢到根本不存在的路线。**",
      src: "A p.472, §13.2"
    },
    {
      link_en: "before any mechanism, two things have to be settled: how a bond comes apart, and who attacks whom",
      link_cn: "在讲任何机制之前，先把两件事说定：键怎么断，以及谁进攻谁",
      en: "A covalent bond is one shared pair of electrons, and it comes apart in exactly two ways. In homolytic cleavage the pair splits evenly and each atom leaves carrying one unpaired electron, which gives carbon radicals or neutral hydrogen atoms. In heterolytic cleavage, the commoner of the two, one atom walks off with both electrons, and the possible products are a carbanion, which is a carbon holding a lone pair and a negative charge; a carbocation, which is a carbon short of that pair and positively charged; a proton; and a hydride ion, which is a hydrogen that takes both electrons with it. The vocabulary for handling all of this is one pair of words: a nucleophile is a group rich in electrons and able to donate them, an electrophile is a group short of electrons and looking for them, and a reaction is a nucleophile handing electrons to an electrophile. A carbon atom is neither of those by nature, and plays whichever role the bonds and functional groups around it push it into. **Carbanion, carbocation and hydride ion are all highly unstable, and coping with that instability is what every mechanism below exists for.**",
      cn: "一根共价键是一对共享电子，它只有两种断法。均裂（homolytic cleavage）：电子对被平分，每个原子各带走一个未成对电子，得到碳自由基或不带电的氢原子。异裂（heterolytic cleavage）是更常见的那一种：一个原子把两个电子全带走，可能的产物有 carbanion（碳负离子），也就是带着孤对电子和负电荷的碳；carbocation（碳正离子），也就是少了这对电子、带正电的碳；一个质子；以及 hydride（氢负离子），即把两个电子一起带走的氢。应付这一切所需的词汇只有一对：亲核体（nucleophile）是富电子、能把电子给出去的基团；亲电体（electrophile）是缺电子、正在找电子的基团；而一个反应就是亲核体把电子交给亲电体。碳原子本身两者都不是，它周围的键和官能团把它推向哪个角色，它就演哪个。**carbanion、carbocation 和 hydride 三者都极不稳定，而下面所有机制存在的理由，就是应付这份不稳定。**",
      src: "A pp.472–473, §13.2, Fig. 13-1, 13-2"
    },
    {
      link_en: "now the first class, and the one that carries the rest",
      link_cn: "现在进第一类 —— 也是撑起其余部分的那一类",
      en: "Breaking a carbon-carbon bond heterolytically means producing a carbanion and a carbocation, and making one means bringing a nucleophilic carbanion together with an electrophilic carbocation. Both ions are so unstable that generating them as reaction intermediates can be energetically out of reach even with an enzyme, so for a cell a reaction needing a bare carbanion or a bare carbocation is an impossible reaction. Every carbon-carbon bond a body makes or breaks therefore needs chemical help from a neighbouring part of the same molecule, and that help comes from a neighbouring group containing an electronegative atom, oxygen or nitrogen, which rewrites the electron structure of the carbon next to it. The workhorse is the carbonyl group, a carbon double-bonded to an oxygen and written C=O, and it does two jobs at once: its own carbon is electrophilic, because the oxygen pulls electron density away and leaves that carbon partly positive; and it absorbs the negative charge of a carbanion on the adjoining carbon by spreading that charge onto itself, which is the only reason such a carbanion can form at all. **A carbonyl group is an electron sink, and whole pathways are organised around getting one into position so that one particular carbon-carbon bond becomes formable or breakable.**",
      cn: "把一根碳-碳键异裂，意味着要造出一个 carbanion 和一个 carbocation；反过来，形成一根碳-碳键，意味着让一个亲核的 carbanion 与一个亲电的 carbocation 碰到一起。而这两种离子太不稳定了，把它们作为反应中间体生成，即使有酶也可能在能量上根本够不着 —— 所以对细胞来说，需要一个「裸」carbanion 或「裸」carbocation 的反应，就是不可能的反应。于是身体里每一根被生成或被断开的碳-碳键，都需要来自同一分子邻近部位的化学援助；而这份援助来自一个含有电负性原子（氧或氮）的邻近基团，它改写了旁边那个碳的电子结构。主力是 carbonyl（羰基），也就是一个与氧双键相连的碳，写作 C=O，它一次干两件事：第一，它自己的碳是亲电的，因为氧把电子密度拉走，让这个碳带上部分正电荷；第二，它把相邻碳上 carbanion 的负电荷吸收过来、摊到自己身上，而这正是那个 carbanion 之所以能够形成的唯一原因。**carbonyl 就是一个电子槽；整条整条的通路，都是围绕「把一个 carbonyl 送到位」来组织的，好让某一根特定的碳-碳键变得可生成、可断裂。**",
      src: "A p.473, §13.2, Fig. 13-3"
    },
    {
      link_en: "three reaction types drop straight out of that one property",
      link_cn: "三类反应直接从这一个性质里长出来",
      recall_en: "in each one, the electron sink from the step above is doing the work",
      recall_cn: "这三类里干活的，都是上一步那个电子槽",
      en: "In all three of the following, a carbanion intermediate is stabilised by a carbonyl group, and very often a second carbonyl supplies the electrophile that carbanion attacks. Aldol condensation is a carbanion attacking a carbonyl carbon, and the aldolase step of glycolysis, which cuts a six-carbon sugar into two three-carbon pieces, is this reaction run backwards. Claisen ester condensation holds the carbanion with the carbonyl of an adjacent thioester, a thioester being a carboxylic acid joined through a sulfur instead of an oxygen; the synthesis of citrate from acetyl-CoA is the case, and acetyl-CoA is exactly such a thioester. Decarboxylation of a beta-keto acid lets carbon dioxide leave and abandon a carbanion on the carbon it departed from, which would not form at any usable rate without a carbonyl standing beside it, and acetoacetate decarboxylase, in the making of ketone bodies out of fat, is the example. Where no carbonyl is available an imine — a carbon double-bonded to a nitrogen, C=N — takes over the same electron-withdrawing job, and so does a specialised cofactor, most often pyridoxal phosphate, the vitamin B6 derivative at the centre of amino acid metabolism. The pull of a carbonyl can also be strengthened, by a metal ion such as Mg2+ resting on its oxygen, or by a general acid, meaning an enzyme side chain that donates a proton at the moment it is needed. **Coenzymes and metal ions each take part in a narrow band of related reactions, so a reaction can be looked up by its type or by its cofactor, and the two indexes check each other.**",
      cn: "下面三类反应里，每一类都有一个 carbanion 中间体被 carbonyl 稳定住，而且常常由第二个 carbonyl 提供那个 carbanion 去进攻的亲电体。aldol condensation（羟醛缩合）就是 carbanion 去进攻一个 carbonyl 碳 —— 糖酵解里把六碳糖切成两个三碳片段的 aldolase 那一步，正是这个反应反着走。Claisen ester condensation（克莱森酯缩合）用相邻 thioester（硫酯）的 carbonyl 稳住 carbanion，而所谓 thioester，就是羧酸通过一个硫、而非氧连接起来的形式；例子是由乙酰-CoA 合成柠檬酸，乙酰-CoA 正是这样一个 thioester。β-酮酸的脱羧则是让二氧化碳离开，在它原本所在的那个碳上丢下一个 carbanion —— 若非旁边站着一个 carbonyl，这个反应不会以任何可用的速率进行；例子是由脂肪生成酮体时的 acetoacetate decarboxylase。在没有 carbonyl 可用的地方，imine（亚胺，一个与氮双键相连的碳，C=N）接手同一份抽电子的工作；专门的辅因子也可以，最常见的是 pyridoxal phosphate（磷酸吡哆醛），即坐在氨基酸代谢正中央的那个维生素 B6 衍生物。carbonyl 的拉力还可以被加强：一个金属离子（例如 Mg2+）压在它的氧上，或者一个 general acid（广义酸，即酶上某个在需要的那一刻递出质子的侧链）。**辅酶与金属离子各自只参与一小撮彼此相关的反应，所以一个反应既可以按类型查，也可以按辅因子查，两套索引还能互相校验。**",
      src: "A pp.473–474, 478, §13.2, Fig. 13-4",
      see: [{ id: "L-16-2-1", en: "citrate synthase, where the Claisen condensation is run in full", cn: "柠檬酸合酶 —— 完整地跑一遍那个克莱森缩合" },
            { id: "L-18-1-1", en: "pyridoxal phosphate at work, in transamination", cn: "磷酸吡哆醛在转氨反应里实际怎么干活" }]
    },
    {
      link_en: "the carbanion route needs a carbonyl. The carbocation route does not",
      link_cn: "carbanion 路线需要 carbonyl；carbocation 路线不需要",
      en: "**The carbocation route works by a different trick: eliminate a group that departs so willingly that the positive charge left behind becomes affordable.** Such a group is called a good leaving group, and the standard one is pyrophosphate, written PPi, which is two phosphate groups joined end to end. In the prenyltransferase step early in cholesterol synthesis, PPi is thrown off dimethylallyl pyrophosphate; the carbocation left behind is spread out over an adjacent carbon-carbon double bond, and it then condenses with isopentenyl pyrophosphate to give geranyl pyrophosphate.",
      cn: "**carbocation 路线靠的是另一个把戏：消去一个「走得极其痛快」的基团，痛快到留下的那个正电荷变得负担得起。**这样的基团叫 good leaving group（好的离去基团），标准的那个是 pyrophosphate（焦磷酸，写作 PPi），也就是两个磷酸基团首尾相连。在胆固醇合成早期的 prenyltransferase 那一步，PPi 从 dimethylallyl pyrophosphate 上被甩掉；留下的 carbocation 被相邻的一根碳-碳双键摊开、稳定住，随后与 isopentenyl pyrophosphate 缩合，生成 geranyl pyrophosphate。",
      src: "A p.474, §13.2, Fig. 13-5"
    },
    {
      link_en: "generalise that, because it is one of the largest ideas in metabolism",
      link_cn: "把这件事一般化 —— 它是代谢里最大的几个观念之一",
      recall_en: "the parallel of the carbonyl three steps up: one trick makes carbanions affordable, this one makes carbocations and substitutions affordable",
      recall_cn: "与上面 carbonyl 那步平行：一个把戏让 carbanion 变得负担得起，这个把戏让 carbocation 和取代反应变得负担得起",
      en: "**To activate a metabolic intermediate means to attach a good leaving group to it, and that is the whole content of the word.** Inorganic phosphate, written Pi, and pyrophosphate are the standard leaving groups, which is why hanging a phosphoryl group onto an otherwise reluctant leaving group such as a hydroxyl is what makes a nucleophilic substitution go, and why substitutions in which a phosphoryl group is itself the leaving group turn up in hundreds of metabolic reactions. Thiols, which are the sulfur version of an alcohol and written -SH, are the other family, and they activate carboxylic acids by forming thioesters. So every activated sugar, activated amino acid and activated fatty acid in metabolism means one and the same thing: something has been bolted on that will leave well.",
      cn: "**所谓「活化」一个代谢中间产物，就是给它挂上一个好的离去基团 —— 这个词的全部含义就是这个。**无机磷酸（写作 Pi）和焦磷酸是标准的离去基团，这正是为什么给一个原本不情不愿的离去基团（例如羟基）挂上一个磷酰基，亲核取代就跑得动了；也正是为什么「以磷酰基本身作为离去基团」的取代反应，会出现在成百上千个代谢反应里。thiol（硫醇，即把醇的氧换成硫，写作 -SH）是另一族，它通过形成 thioester 来活化羧酸。所以代谢里每一个「活化的糖」「活化的氨基酸」「活化的脂肪酸」，说的都是同一件事：有个走得好的东西被拴上去了。",
      src: "A pp.475–476, §13.2",
      see: [{ id: "L-13-3-1", en: "ATP doing exactly this, with three different groups", cn: "ATP 干的正是这件事，而且用三种不同的基团" }]
    },
    {
      link_en: "which brings the fourth class, group transfer, and the element that does most of it",
      link_cn: "由此进入第四类 —— 基团转移，以及承担了其中大半工作的那个元素",
      en: "Group transfer means moving an acyl, glycosyl or phosphoryl group from one nucleophile to another, and each of the three has its own geometry. In acyl transfer the nucleophile adds to the carbonyl carbon, which briefly becomes four-coordinate — a tetrahedral intermediate — and that intermediate then collapses as the leaving group departs; the digestive protease chymotrypsin runs this way. Glycosyl transfer is nucleophilic substitution at C-1 of a sugar ring, the carbon that carries two oxygens and is called an acetal carbon. Phosphoryl transfer is the one to know structurally, because everything ATP does rests on it. Inorganic phosphate is a tetrahedron whose four phosphorus-oxygen bonds are equivalent, each with some double-bond character, so the familiar drawing with one double bond and three single ones is convenient and inaccurate. Oxygen is more electronegative than phosphorus, so the central phosphorus carries a partial positive charge and is an electrophile, which is why a nucleophile attacks it in the first place. Phosphorus can also form five covalent bonds, and a pentacovalent intermediate — a phosphorus atom holding five bonds at once — is what that fifth bond makes possible. **When a nucleophile attacks the phosphorus of ATP, such an intermediate forms and sits there, relatively stable, until the leaving group ADP departs.**",
      cn: "基团转移（group transfer）指的是把一个酰基、糖基或磷酰基从一个亲核体搬到另一个亲核体上，三者各有各的几何。酰基转移：亲核体加到 carbonyl 碳上，这个碳短暂地变成四配位，也就是四面体中间体（tetrahedral intermediate），随后随着离去基团的离开而塌缩；消化道里的蛋白酶 chymotrypsin 走的就是这条路。糖基转移：在糖环的 C-1 上发生亲核取代，那个碳带着两个氧，叫作缩醛（acetal）碳。磷酰基转移是结构上最该弄清的一个，因为 ATP 所做的一切都压在它上面。无机磷酸是一个四面体，四根磷-氧键等价，每一根都带一些双键性质，所以我们熟悉的那种「一根双键加三根单键」的画法方便，但不准确。氧的电负性大于磷，所以中心磷带部分正电荷，是一个亲电体 —— 这就是亲核体为什么会去进攻它。磷还可以形成五根共价键，而所谓五共价中间体（pentacovalent intermediate），就是一个同时握着五根键的磷原子 —— 正是那第五根键让它成为可能。**当亲核体真的进攻 ATP 上的磷时，这样一个中间体便形成并「相对稳定」地停在那里，直到离去基团 ADP 离开。**",
      src: "A pp.475–476, §13.2"
    },
    {
      link_en: "four enzyme names collide right here, and they are told apart by who attacks",
      link_cn: "四个酶名正好在这里撞车，而分辨它们的判据是「谁去进攻」",
      en: "An enzyme that moves a phosphoryl group off a nucleoside triphosphate such as ATP onto an acceptor is a kinase, from the Greek kinein, to move — hexokinase moves one onto glucose — and the reaction is a phosphorylation. A phosphorylase breaks a bond with phosphate itself as the attacking species, so the phosphate ends up covalently stuck on the product: glycogen phosphorylase makes glucose 1-phosphate this way, and the reaction is called phosphorolysis. A phosphatase removes a phosphoryl group with water as the attacker. The second collision is a nastier one. A synthase catalyses a condensation that spends no nucleoside triphosphate; a synthetase catalyses one that does spend ATP or another nucleoside triphosphate, which makes every synthetase a kind of ligase, the general name for an enzyme that joins two atoms at the cost of energy. **A ligase and a lyase are different things: a lyase cleaves a bond, or run backwards adds across one, with electrons rearranging, and it spends nothing.** One warning: the same enzyme often carries two historical names, so succinyl-CoA synthetase is also called succinate thiokinase, and pyruvate kinase is named for the direction opposite to the one it usually runs in a cell.",
      cn: "把磷酰基从核苷三磷酸（例如 ATP）搬到某个受体上的酶叫 kinase（激酶），来自希腊语 kinein，意思是「移动」—— hexokinase 就是把它搬到葡萄糖上 —— 这个反应叫磷酸化。phosphorylase（磷酸化酶）断键时，进攻的物种是磷酸本身，所以磷酸最后共价地留在产物上：glycogen phosphorylase 就是这样生成葡萄糖-1-磷酸的，这个反应叫 phosphorolysis（磷酸解）。phosphatase（磷酸酶）把磷酰基卸下来，进攻的物种是水。第二处撞车更难缠。synthase（合酶）催化的缩合反应不花核苷三磷酸；synthetase（合成酶）催化的缩合反应要花 ATP 或另一种核苷三磷酸，于是每一个 synthetase 都属于 ligase（连接酶），也就是「以能量为代价把两个原子连起来」的酶的统称。**ligase 与 lyase 是两回事：lyase（裂合酶）断开一根键（反着走就是加成到一根键上），过程中电子发生重排，而且它什么都不花。**一句提醒：同一个酶常有两个历史遗留的名字 —— succinyl-CoA synthetase 又叫 succinate thiokinase；pyruvate kinase 的命名方向，与它在细胞里通常运行的方向相反。",
      src: "A p.477, §13.2, Box 13-1",
      see: [{ id: "L-15-2-1", en: "glycogen phosphorylase, and why phosphorolysis rather than hydrolysis", cn: "糖原磷酸化酶，以及为什么走磷酸解而不是水解" }]
    },
    {
      link_en: "back to the list of five. The second class",
      link_cn: "回到五类的清单上。第二类",
      en: "**Internal rearrangements, isomerizations and eliminations share one criterion: electrons are redistributed inside the molecule and its overall oxidation state does not change.** Two groups within one molecule may oxidise and reduce each other and cancel out exactly. The worked case is the glycolytic conversion of glucose 6-phosphate to fructose 6-phosphate: C-1 is reduced, aldehyde down to alcohol, while C-2 is oxidised, alcohol up to ketone, so the net change across the molecule is zero, which is precisely why this counts as an isomerization and not as a redox reaction. It passes through an enediol, a short-lived form carrying a carbon-carbon double bond with a hydroxyl on each of the two carbons, and two ionizable groups on the enzyme take turns at it: one strips a proton off as a general base, the other hands a proton back as a general acid. Losing water from an alcohol to leave a double bond behind is an elimination, and it sits in this class for the same reason, since the oxidation state of the molecule as a whole is untouched.",
      cn: "**分子内重排、异构化与消除共用一条判据：电子在分子内部被重新分配，而分子整体的氧化态不变。**同一分子内的两个基团完全可以互相氧化、互相还原，最后正好抵消。范例是糖酵解里由葡萄糖-6-磷酸生成果糖-6-磷酸：C-1 被还原（醛降为醇），C-2 被氧化（醇升为酮），整个分子的净变化为零 —— 而这正是它算异构化、不算氧化还原反应的原因。反应经由一个 enediol（烯二醇）进行，那是一种短命的形式，带着一根碳-碳双键，两个碳上各挂一个羟基；酶上两个可解离的基团轮流对它动手：一个作为 general base（广义碱）把质子夺走，另一个作为 general acid 把质子还回去。醇失去一分子水、留下一根双键，这叫消除（elimination），它归在这一类里的理由完全相同 —— 分子整体的氧化态没被动过。",
      src: "A pp.474–475, §13.2, Fig. 13-6",
      see: [{ id: "L-14-4-1", en: "the glycolytic steps this isomerization sits between", cn: "这个异构化夹在糖酵解的哪两步之间" }]
    },
    {
      link_en: "the third class, and it uses the homolytic cleavage from earlier",
      link_cn: "第三类 —— 它用的正是前面说过的均裂",
      recall_en: "homolytic cleavage was defined in the bond-breaking step; this is the class built on it",
      recall_cn: "均裂在讲「键怎么断」那一步已经定义过了，这一类就是建在它上面的",
      en: "**In a free-radical reaction a bond splits evenly and each fragment leaves with one unpaired electron, which is what a radical is.** These were once thought rare in biology and are now known across a wide range of processes, and four are worth holding. Isomerizations started by a 5'-deoxyadenosyl radical, generated either from adenosylcobalamin, a coenzyme form of vitamin B12, or from S-adenosylmethionine; the methylmalonyl-CoA mutase reaction is one of these. A radical decarboxylation in heme synthesis, where the oxygen-independent enzyme HemN converts the propionyl side chains of a heme precursor called coproporphyrinogen III into the vinyl side chains of the next precursor along, protoporphyrinogen IX. Ribonucleotide reductase, the enzyme that makes the deoxyribonucleotides of DNA out of ribonucleotides, which is to say that every deoxyribonucleotide in a body was made by radical chemistry. And DNA photolyase, which repairs ultraviolet damage.",
      cn: "**在自由基反应里，一根键被平分，每个碎片各带走一个未成对电子 —— 而这就是自由基（radical）。**这类反应曾被认为在生物学里很罕见，如今已知遍布相当广泛的一系列过程，其中有四个值得记住。第一，由 5′-脱氧腺苷自由基发动的异构化反应，那个自由基或者来自 adenosylcobalamin（腺苷钴胺素，维生素 B12 的一种辅酶形式），或者来自 S-adenosylmethionine（S-腺苷甲硫氨酸）；methylmalonyl-CoA mutase 反应就是其中之一。第二，血红素合成中的一步自由基脱羧：不依赖氧的酶 HemN 把一个血红素前体 coproporphyrinogen III 的丙酰基侧链，转变成下一个前体 protoporphyrinogen IX 的乙烯基侧链。第三，ribonucleotide reductase（核糖核苷酸还原酶），即由核糖核苷酸制造 DNA 所需脱氧核糖核苷酸的那个酶 —— 也就是说，身体里每一个脱氧核糖核苷酸都是自由基化学做出来的。第四，DNA photolyase（DNA 光解酶），负责修复紫外损伤。",
      src: "A p.475, §13.2, Fig. 13-7",
      openQuestion_en: "Which acceptor takes up the electron released in the HemN reaction is not known.",
      openQuestion_cn: "HemN 反应中释放出来的那个电子最终被谁接走，目前并不清楚。",
      see: [{ id: "L-22-4-1", en: "ribonucleotide reductase in the nucleotide pathway", cn: "核糖核苷酸还原酶在核苷酸通路里的位置" },
            { id: "L-25-2-1", en: "DNA photolyase and the repair of ultraviolet damage", cn: "DNA 光解酶与紫外损伤的修复" }]
    },
    {
      link_en: "the fifth class, whose bookkeeping is a ladder",
      link_cn: "第五类 —— 它的记账方式是一架梯子",
      en: "Carbon sits in five oxidation states, depending on which elements it shares electrons with, and the ladder is worth memorising in order: alkane, alcohol, aldehyde or ketone, carboxylic acid, carbon dioxide — each rung the oxidation of the one above it, with carbon dioxide the most highly oxidised form of carbon found in living systems. Half of catabolism is a walk down that ladder, and the ladder is what a statement such as fat is more reduced than sugar actually means. A biological oxidation that removes two electrons and two hydrogen ions, the equivalent of two hydrogen atoms, is a dehydrogenation, and the enzyme is a dehydrogenase — lactate to pyruvate, electrons handed to NAD+, fully reversible. An enzyme that uses O2 as its electron acceptor is an oxidase if no oxygen atom ends up in the oxidised product, and an oxygenase if one does, making it a monooxygenase, or two do, making it a dioxygenase. Every oxidation is paid for by a reduction somewhere, since the removed electrons have to land on an acceptor. **Oxidations generally release energy, which is why most living cells get the energy they run on by oxidising fuel.**",
      cn: "碳依据它与哪些元素共享电子，处在五个氧化态上，这架梯子值得按顺序背下来：烷烃 → 醇 → 醛（或酮）→ 羧酸 → 二氧化碳，每一级都是上一级那个碳被氧化的结果，而二氧化碳是生命系统中所能见到的碳的最高氧化形式。分解代谢有一半就是沿着这架梯子往下走；「脂肪比糖更还原」这类说法，指的就是这架梯子上的位置。一次移走两个电子和两个氢离子（相当于两个氢原子）的生物氧化叫 dehydrogenation（脱氢），催化它的酶叫 dehydrogenase（脱氢酶）—— 乳酸变丙酮酸，电子交给 NAD+，完全可逆。以 O2 作电子受体的酶：若被氧化的产物里不出现氧原子，它是 oxidase（氧化酶）；若出现一个，它是 monooxygenase（单加氧酶），出现两个则是 dioxygenase（双加氧酶），两者统称 oxygenase。每一次氧化都必然由某处的一次还原来支付，因为被移走的电子总得落到某个受体上。**而氧化反应一般是释放能量的 —— 这正是绝大多数活细胞都靠氧化燃料来获取自己运转所需能量的原因。**",
      src: "A pp.476–477, §13.2, Fig. 13-9, 13-10",
      see: [{ id: "L-19-1-1", en: "where those removed electrons actually go", cn: "被摘下来的这些电子究竟去了哪里" }]
    },
    {
      link_en: "one bookkeeping convention, and every number quoted for metabolism sits on it",
      link_cn: "最后一条记账约定 —— 代谢里引用的每一个数字都压在它上面",
      en: "A phosphorylated compound exists as several ionisation states at once, and several of those bind Mg2+: at pH 7 with 2 mM Mg2+, what gets written as ATP is an equilibrium mixture of ATP4-, HATP3-, H2ATP2-, MgHATP- and Mg2ATP. Rather than track all of it, a biochemical equation lets each symbol stand for the sum of those species and writes ATP + H2O giving ADP + Pi, leaving H+ and Mg2+ out because the reaction does not change their concentrations appreciably. A biochemical equation therefore balances carbon, nitrogen, oxygen and phosphorus, and is allowed not to balance hydrogen, magnesium or charge, and its equilibrium constant depends on pH and on the free Mg2+ concentration. A chemical equation balances everything including charge, and its equilibrium constant depends only on temperature, pressure and ionic strength. Use the chemical form when the question is a mechanism and every atom has to be accounted for, and the biochemical form when the question is which way a reaction will run at a stated pH and Mg2+ level. **Standard values quoted for metabolism are biochemical ones, measured at pH 7 and 1 mM Mg2+, which is what the prime on the symbol records.**",
      cn: "一个磷酸化合物同时以若干电离状态存在，其中几种还会结合 Mg2+：在 pH 7、2 mM Mg2+ 时，被写成「ATP」的那个东西，其实是 ATP4−、HATP3−、H2ATP2−、MgHATP− 与 Mg2ATP 的一个平衡混合物。与其把这些全都追踪一遍，biochemical equation（生化方程式）让每个符号代表这一组物种之和，于是写作 ATP + H2O 生成 ADP + Pi，并把 H+ 和 Mg2+ 略去，因为反应不会显著改变它们的浓度。所以生化方程式配平碳、氮、氧、磷，却被允许不配平氢、镁和电荷；它的平衡常数依赖于 pH 和游离 Mg2+ 浓度。另一边，chemical equation（化学方程式）把一切都配平，包括电荷，而它的平衡常数只依赖于温度、压力和离子强度。讨论机制、每个原子都要交代清楚时用化学式；想知道在给定 pH 与 Mg2+ 水平下反应朝哪边跑时用生化式。**代谢里引用的标准数值全都是生化式的数值，在 pH 7、1 mM Mg2+ 下测定 —— 符号右上角那一撇记的就是这件事。**",
      src: "A p.478, §13.2",
      see: [{ id: "L-13-3-1", en: "the ATP numbers that were measured under this convention", cn: "在这套约定下测出来的那些 ATP 数值" }]
    },
    {
      link_en: "that is the chemistry a cell has available. Now the map those reactions are laid out on",
      link_cn: "以上是细胞手头能用的化学。现在说这些反应被铺在什么样的地图上",
      en: "Intermediary metabolism is the sum of the mutually strictly coordinated reactions running in a living cell, and the word coordinated is the load-bearing one, since it is what separates a metabolism from a bag of reactions that happen to share a container. The degradative part of those reactions is called catabolism, and the sum of the synthetic reactions constitutes anabolism. Anabolic reactions include the ones by which the organism's own storage substances are formed, so laying down glycogen — the branched glucose polymer an animal keeps its sugar reserve as — or laying down fat both count as anabolism. **Storage is therefore not a third category beside building up and breaking down, which is why the whole subject can be organised around two poles instead of three.**",
      cn: "中间代谢（intermediary metabolism）指的是在活细胞中进行的、彼此严格协调的全部反应之总和；承重的词是「协调」，因为正是它把一套代谢，与「一堆碰巧共用一个容器的反应」区分开来。这些反应中的降解部分称为分解代谢（catabolism），合成反应的总和则构成合成代谢（anabolism）。合成代谢反应也包括生成机体自身贮存物质的那些反应，所以把糖原（动物把糖储备存成的那种带分支的葡萄糖聚合物）攒起来，或者把脂肪攒起来，都算合成代谢。**因此「贮存」不是与「造」和「拆」并列的第三个类别 —— 这也正是为什么整门学科可以只围绕两极来组织，而不需要三极。**",
      src: "B §10.1, p.218"
    },
    {
      link_en: "and what all that coordination is for, in four items",
      link_cn: "而这份协调是为了什么，一共四条",
      en: "The function of metabolism is given as four items. First, to obtain chemical energy from nutrient molecules or from solar radiation, and the mention of radiation is what keeps the definition valid for organisms that live on light. Second, to convert exogenous substances, meaning substances that came in from outside, into building units or precursors of the cell's own macromolecules. Third, to synthesise from those precursors the proteins, nucleic acids, lipids and other cell components. Fourth, to synthesise and degrade the molecules needed for the specific functions of the cell. The shape of that list is worth noticing: the first item is energy, the second and third are the two halves of construction — first make the parts, then assemble them — and the fourth is turnover. **Degradation appears in the fourth item as a function in its own right, so a cell takes things apart on purpose and not only when it wants the energy or the parts.**",
      cn: "代谢的功能被列为四条。第一，从养分分子或太阳辐射中获取化学能 —— 提到辐射，是为了让这个定义对靠光生活的生物同样成立。第二，把外源物质（也就是从外面进来的物质）转变为细胞自身大分子的构件或前体。第三，由这些前体合成蛋白质、核酸、脂质及其他细胞组分。第四，合成并降解细胞特定功能所需的分子。这个清单的结构值得留意：第一条是能量；第二、三条是建造的两半 —— 先造零件，再行组装；第四条是周转。**降解在第四条里是作为一项独立的功能出现的 —— 所以细胞是有意去拆东西的，而不只是在想要能量或零件的时候才拆。**",
      src: "B §10.1, p.218"
    },
    {
      link_en: "the degradative half has a shape, and the shape is a funnel",
      link_cn: "降解那一半有一个形状，而这个形状是漏斗",
      en: "Every catabolic and anabolic pathway consists of a series of consecutive enzyme-catalysed reactions, so nothing in metabolism happens in one step. The degradation of bulky nutrients — saccharides, lipids and proteins above all — runs in three phases. In the first phase the large molecules are cleaved into their building units: polysaccharides to monosaccharides, lipids to fatty acids and glycerol, proteins to amino acids. In the second phase those products are converted into a small number of still smaller intermediates: saccharides and glycerol change, by way of pyruvate, into acetyl-CoA; fatty acids are degraded to acetyl-CoA as well, by beta-oxidation, which is the pathway that takes a fatty acid apart two carbons at a time; and so are most amino acids. In the third phase the products of the second phase are oxidised all the way to carbon dioxide and water. **Three classes of nutrient go in, one common intermediate sits at the waist, and one common oxidative endpoint comes out.**",
      cn: "每一条分解代谢与合成代谢途径，都由一系列连续的酶催化反应组成 —— 代谢里没有任何一件事是一步完成的。大分子养分（主要是糖类、脂质与蛋白质）的降解分三个阶段进行。第一阶段，大分子被裂解为各自的构件：多糖变单糖，脂质变脂肪酸与甘油，蛋白质变氨基酸。第二阶段，这些产物被转变为少数几种更小的中间体：糖类与甘油经丙酮酸变成乙酰-CoA；脂肪酸经 β-氧化（也就是每次把脂肪酸拆掉两个碳的那条通路）同样降解为乙酰-CoA；大多数氨基酸亦然。第三阶段，第二阶段的产物被一路氧化为二氧化碳和水。**三类完全不同的养分从上面进去，中间的腰上坐着同一个共用的中间产物，而出来的是同一个共同的氧化终点。**",
      src: "B §10.1, p.218",
      see: [{ id: "L-17-2-1", en: "beta-oxidation taking a fatty acid apart, in full", cn: "β-氧化怎样把一条脂肪酸拆开 —— 完整版" }]
    },
    {
      link_en: "and the synthetic half is drawn as the same shape reversed",
      link_cn: "而合成那一半，被画成同一个形状倒过来",
      en: "Biosynthesis likewise has three phases. Its inputs are the small precursor molecules produced in the third phase of catabolism, or taken up from the environment, and the ones named are water, carbon dioxide and ammonia. In the second phase of the anabolic reactions the building units of macromolecules are formed, and in the third phase the cell's own macromolecules arise. The worked example is protein biosynthesis: in the first phase oxo acids are formed, an oxo acid being the carbon skeleton that carries a keto group where an amino acid carries its amino group; in the second phase those are converted into alpha-amino acids, the building blocks of proteins; and from those amino acids the body's own proteins are synthesised. **Catabolism narrows three nutrient classes to one intermediate, biosynthesis widens small precursors out into macromolecules, and that mirror symmetry is what the next steps qualify.**",
      cn: "生物合成同样有三个阶段。它的输入是分解代谢第三阶段产生的、或者从环境中摄取的小分子前体 —— 被点名的是水、二氧化碳和氨。合成代谢反应的第二阶段形成大分子的构件，第三阶段则生成细胞自身的大分子。教材给的范例是蛋白质的生物合成：第一阶段生成 oxo acid（酮酸），所谓酮酸，就是在氨基酸挂氨基的那个位置上改挂一个酮基的碳骨架；第二阶段把它们转变为 α-氨基酸，即蛋白质的构件；再由这些氨基酸合成机体自身的蛋白质。**分解代谢把三类养分收窄到一个中间产物，生物合成把小前体一路拓宽成大分子 —— 而这份镜像对称，正是接下来几步要加限定的东西。**",
      src: "B §10.1, p.218"
    },
    {
      link_en: "the funnel drawn again, with its actual intermediates named",
      link_cn: "把那个漏斗再画一遍，这次把中间产物的名字都点出来",
      en: "In the first phase, fats, polysaccharides and proteins interconvert with their building units in both directions: fatty acids plus glycerol, hexoses plus pentoses, and amino acids. In the second phase, hexoses and pentoses run through a shared sequence of three-carbon intermediates — glyceraldehyde 3-phosphate, then phosphoenolpyruvate, then pyruvate; the glycerol released from fat joins that route at phosphoenolpyruvate, while the fatty acids, and part of the amino acid pool, bypass more directly toward the pyruvate and acetyl-CoA end; and pyruvate then converts into acetyl-CoA. In the third phase acetyl-CoA is oxidised completely in the citrate cycle, which runs citrate to isocitrate to 2-oxoglutarate to succinate to fumarate to malate to oxaloacetate and back to citrate, taking in a fresh acetyl-CoA each turn. **The waste products at the bottom of the whole scheme are water and carbon dioxide, so three classes of nutrient are burned by one machine.**",
      cn: "第一阶段：脂肪、多糖与蛋白质同它们各自的构件之间双向互变 —— 脂肪酸加甘油，己糖加戊糖，以及氨基酸。第二阶段：己糖与戊糖走一条由三碳中间产物组成的共用序列 —— 甘油醛-3-磷酸 → 磷酸烯醇丙酮酸 → 丙酮酸；从脂肪释放出来的甘油在磷酸烯醇丙酮酸处汇入这条路线，而脂肪酸（以及部分氨基酸库）则更直接地绕向丙酮酸与乙酰-CoA 这一端；丙酮酸随后转化为乙酰-CoA。第三阶段：乙酰-CoA 在柠檬酸循环中被完全氧化 —— 柠檬酸 → 异柠檬酸 → 2-氧戊二酸 → 琥珀酸 → 延胡索酸 → 苹果酸 → 草酰乙酸 → 再回到柠檬酸，每转一圈接进一个新的乙酰-CoA。**整张图最底下的废物只有水和二氧化碳 —— 也就是说，三类完全不同的养分，最后是由同一台机器烧掉的。**",
      src: "B §6.1.3, pp.133–134, Obr. 6.2"
    },
    {
      link_en: "so why is any of this cut into so many small steps?",
      link_cn: "那么，这一切为什么要被切成这么多小步？",
      en: "Catabolism and anabolism both proceed stepwise, as a chain of successive enzyme-catalysed reactions, and that fine subdivision is described as economical for three reasons. The first is that both the production and the consumption of Gibbs energy — Gibbs energy being the quantity that decides whether a reaction can go at constant temperature and pressure — are in effect quantized, with individual doses of energy roughly matching individual partial reactions, rather than being released or demanded in one large burst nothing could handle. The second is that individual metabolites can be drawn down by several different routes, or replenished from a variety of different sources so as to hold a steady concentration, a flexibility only possible because the pathway is built out of many discrete shared intermediates. **The third is that a finely segmented metabolism is regulatable, and its two directions can be regulated separately because they use different enzymes and sit in different compartments.**",
      cn: "分解代谢与合成代谢都是逐步进行的，由一系列连续的酶催化反应组成；而这种精细的分步被称为「经济的」，理由有三条。第一，Gibbs 自由能（也就是在恒温恒压下决定一个反应能否进行的那个量）的产生与消耗实际上都是「量子化」的：单份能量剂量大致对应单个分步反应，而不是在一次谁也接不住的大爆发里被放出或被索取。第二，单个代谢物可以被好几条不同的路线抽用，也可以从不同来源被补充回去以维持稳定的浓度 —— 这种灵活性之所以可能，正是因为通路是由许多离散的、共用的中间产物搭成的。**第三，精细分段的代谢是可调控的；而且它的两个方向可以分开调控，因为它们用的是不同的酶、待在不同的区室里。**",
      src: "B §6.1.3, p.134",
      see: [{ id: "10-12", en: "what actually enforces that coordination", cn: "究竟是什么在强制实现这份协调" }]
    },
    {
      link_en: "that last reason has a stronger form, and it is why the two halves are not one road",
      link_cn: "最后一条理由还有一个更强的版本 —— 它解释了两半为什么不是同一条路",
      en: "Catabolic and anabolic processes between a precursor and a final product are not mutually reversible, and they run by different routes. The reason given is above all the fundamental difference in their energy demands: catabolic processes produce ATP, while anabolic reactions require energy and consume ATP in their course. A route optimised to release energy cannot simply be run backwards to store it, because the thermodynamics that make the forward direction favourable are exactly what make the reverse direction unfavourable, so the synthetic route has to bypass those steps with different chemistry. A second, parallel separation is spatial: catabolic and anabolic reactions are usually localised in different parts of the eukaryotic cell, and separating processes into different organelles lets both of them run at the same time. **Two separations, chemical and spatial, serve one purpose: if synthesis were degradation reversed, any signal that sped one up would speed the other up too, and the cell could not choose.**",
      cn: "在前体与终产物之间，分解代谢过程与合成代谢过程并非彼此可逆，它们走的是不同的路线。教材给出的理由首先是二者能量需求上的根本差异：分解代谢过程产生 ATP，而合成代谢反应需要能量、并在进行过程中消耗 ATP。一条为释放能量而优化的路线，不可能简单地倒过来用于储存能量，因为使正向有利的那套热力学，恰恰使反向变得不利，所以合成路线必须用不同的化学绕开那些步骤。第二种平行的分离是空间上的：分解与合成反应在真核细胞中通常定位于不同部位，而把过程分置于不同细胞器，使两者得以同时进行。**化学的与空间的这两种分离，服务于同一个目的：如果合成只是分解的倒放，那么任何加速其一的信号都会同时加速另一个，细胞将无从取舍。**",
      src: "B §10.1, p.218"
    },
    {
      link_en: "and that separateness is the design itself, not something left over from it",
      link_cn: "而这种「分开」本身就是设计，不是设计剩下的边角料",
      en: "Being separate carries one stated advantage above all: the two routes can be regulated independently. Separateness of that kind is a design feature and not an accident of how the pathways happened to arise, and it is the substance of the argument rather than a remark made in passing. **Two pathways that share no enzymes can be given opposite instructions at the same moment, which is the whole return on running degradation and synthesis by different roads.**",
      cn: "「分开」这件事带来的好处，首先被明确说出来的只有一条：这两条路线可以被独立调节。这种分离是一项设计特征，而不是通路碰巧演化成这样的偶然结果；它才是这段论述的实质所在，而不是顺口提的一句话。**两条不共用任何酶的通路，可以在同一时刻收到相反的指令——这就是「让降解与合成走不同的路」所换来的全部回报。**",
      src: "B §10.1, p.218"
    },
    {
      link_en: "between all these routes there are crossings, and at each crossing sits a quantity that has to be defined carefully",
      link_cn: "这些路线之间有许多交叉，而每个交叉上都坐着一个必须小心定义的量",
      en: "Between the metabolic processes there exist diverse cross-connections: on one side compounds are formed, and in another phase of metabolism they are consumed, so the organism sits in what is called dynamic equilibrium. The connection happens at certain nodal points, which means simply that different processes have common intermediates. For regulating cell metabolism some metabolites matter particularly, and they are acetyl-CoA, pyruvate, alpha-ketoglutarate, the reduced nicotinamide coenzymes NADH and NADPH, and ATP. What is significant about them is their mobilizable store, the so-called pool — and a pool need not be a high concentration of the substance. What matters is the ability to hold its level where it is wanted: concentrations may be relatively low, of the order of millimoles per litre, while turnover, meaning the rate at which the molecules of that store are replaced, is usually very rapid. **It has been calculated that a human body produces about 70 kg of ATP in 24 hours, so metabolism is a set of flows and never a set of stocks, and regulation controls a rate.**",
      cn: "各代谢过程之间存在多样的交叉连接：一方面化合物被生成，在代谢的另一阶段又被消耗，于是机体处在所谓的动态平衡之中。这种连接发生在若干节点（nodal point）上，其含义无非是：不同的过程拥有共同的中间产物。从调节细胞代谢的角度看，有几种代谢物格外重要，它们是乙酰-CoA、丙酮酸、α-酮戊二酸、还原型烟酰胺辅酶 NADH 与 NADPH，以及 ATP。它们的重要之处在于其可动员的贮量，也就是所谓的 pool（代谢库）—— 而一个库并不必然意味着该物质浓度很高。要紧的是把它的水平稳在需要的位置上：浓度可以相当低，mmol/l 量级；而周转（turnover，即这批分子被换掉的速率）通常非常迅速。**据计算，人体在 24 小时内产生约 70 公斤 ATP —— 所以代谢是一套流量，从来不是一套存量，而调节控制的是速率。**",
      src: "B §10.1, pp.218–219",
      see: [{ id: "L-13-5-1", en: "flux and concentration as two independent variables, measured", cn: "把通量与浓度当作两个独立变量来量" }]
    },
    {
      link_en: "one metabolite is the clearest example of such a pool, and its diagram is an argument rather than a summary",
      link_cn: "有一种代谢物是这种「库」最清晰的例子，而它的那张图是一个论证，不是一份摘要",
      recall_en: "the same molecule that sat at the waist of the funnel",
      recall_cn: "就是刚才坐在漏斗腰上的那个分子",
      en: "Acetyl-CoA arises from the degradation of sugars, of lipids and of proteins alike, and it is drawn off again in the synthesis of fatty acids and lipids and in the synthesis of isoprenoids, the family that includes the steroids. Drawn as a hub it has three arrows in — saccharides by way of pyruvate, lipids by way of fatty acids, proteins by way of amino acids — and three arrows out: to the citrate cycle and the respiratory chain, to lipids, and to isoprenoids. That is one catabolic exit against two anabolic ones, which makes the hub a burn-or-build branch point and exactly the place where the cell's energy status has to make itself felt. **What the diagram leaves out matters as much: there is no arrow back from acetyl-CoA to pyruvate, and that one missing arrow is why an animal cannot make sugar out of fat.** The figure's own caption is printed 'Obr. 10.1 Aceyl-CoA a jeho metabolismus', a typesetting error for Acetyl-CoA, flagged here rather than silently corrected.",
      cn: "乙酰-CoA 由糖、脂质与蛋白质的降解共同生成，又在脂肪酸与脂质的合成、以及异戊二烯类（isoprenoid，包括类固醇在内的那一族）的合成中被重新抽走。把它画成一个枢纽，就有三支箭头进来 —— 糖类经丙酮酸、脂质经脂肪酸、蛋白质经氨基酸 —— 以及三支箭头出去：通向柠檬酸循环与呼吸链、通向脂质、通向异戊二烯类。也就是一个分解出口对两个合成出口，这使这个枢纽成为一个「烧还是建」的分岔点，也正是细胞能量状态必须发挥作用的地方。**这张图没画出来的东西同样要紧：从乙酰-CoA 回到丙酮酸没有箭头，而正是这一条缺失的箭头，解释了动物为什么无法由脂肪制造糖。** 这张图的图注印作「Obr. 10.1 Aceyl-CoA a jeho metabolismus」，是「Acetyl-CoA」的一处排印错误；此处加以标注，而不是默默改掉。",
      src: "B §10.1, p.219, Obr. 10.1"
    }
  ]
};

/* ---------------------------------------------- 生物能学与热力学 ---- */
window.BIOLITE_SPINE["key:bioenergetics-and-thermodynamics"] = {
  assumed: ["cell", "organism", "enzyme", "protein", "molecule", "atom", "ion",
            "proton", "electron", "glucose", "nutrient", "metabolite", "substrate",
            "ATP", "ADP", "AMP", "NADPH", "NADP+", "phosphate", "inorganic phosphate",
            "water", "carbon dioxide", "oxygen", "energy", "free energy",
            "gibbs energy", "entropy, s", "enthalpy", "heat", "temperature",
            "pressure", "volume", "work", "concentration", "gradient", "equilibrium",
            "equilibrium constant", "state quantity", "reaction", "pathway",
            "metabolism", "catabolism", "anabolism", "hydrolysis", "oxidation",
            "reduction", "photosynthesis", "light", "solar radiation", "radiation",
            "plant", "bacterium", "bacteria", "muscle", "muscle contraction",
            "active transport", "signal", "biosynthesis", "macromolecule",
            "precursor", "membrane", "compartment", "glycolysis", "hexokinase",
            "isolated system", "closed system", "open system", "steady state",
            "homeostasis", "ph", "mole", "kinetics", "activation energy"],
  nodeTitle_en: "Bioenergetics and thermodynamics",
  nodeTitle_cn: "生物能学与热力学",
  title_en: "Why a cell can only work at constant temperature and pressure, what it spends its energy on, and the arithmetic that lets an uphill reaction run anyway",
  title_cn: "细胞为什么只能在恒温恒压下做功、它把能量花在哪里，以及让一个上坡反应照样跑得动的那道算术",
  terms: [
    { en: "open system", cn: "开放系统",
      def_en: "A thermodynamic system that exchanges both matter and energy with its surroundings. An organism is one, and it covers its need for energy and matter at the expense of the environment, increasing that environment's disorder as it does so.",
      def_cn: "与环境既交换物质又交换能量的热力学系统。生物体就是这样一个系统：它以周围环境为代价满足自身对能量和物质的需求，同时使环境自身的无序度增加。" },
    { en: "dynamic equilibrium", cn: "动态平衡",
      def_en: "The apparent, non-static balance an open living system holds with its environment, kept up by continuous exchange. Also called a steady state, and sharply different from the static equilibrium an isolated system reaches.",
      def_cn: "开放的生命系统与环境之间那种表面上的、非静态的平衡，靠持续不断的交换维持。也叫稳态，与孤立系统所达到的静态平衡有本质区别。" },
    { en: "exergonic reaction", cn: "放能反应",
      def_en: "A reaction whose standard Gibbs energy change is below zero, so it proceeds spontaneously and releases Gibbs energy. Its opposite number is the endergonic reaction, above zero, which cannot proceed alone and needs coupling.",
      def_cn: "标准 Gibbs 自由能变化小于零的反应，因而自发进行并释放 Gibbs 自由能。与之相对的是吸能反应（大于零），它单独无法进行，必须与放能反应偶联。" },
    { en: "coupled reaction", cn: "偶联反应",
      def_en: "An endergonic and an exergonic reaction combined into one overall process whose net standard Gibbs energy change is the sum of both steps. The worked case is glucose phosphorylation joined to ATP cleavage, catalysed by hexokinase.",
      def_cn: "把一个吸能反应与一个放能反应合并成一个总过程，其净标准 Gibbs 自由能变化等于两步之和。范例是葡萄糖磷酸化与 ATP 断裂相连，由己糖激酶催化。" },
    { en: "phototroph", cn: "光养生物",
      def_en: "An organism, such as a plant or some bacteria, that converts the electromagnetic energy of sunlight directly into the chemical-bond energy of nutrients by photosynthesis. Its counterpart is the chemotroph, which obtains Gibbs energy by oxidative cleavage of nutrients instead.",
      def_cn: "把太阳光的电磁能通过光合作用直接转化为营养物质化学键能的生物，例如植物和某些细菌。与之相对的是化能营养生物，它改为通过氧化裂解营养物质来获取 Gibbs 自由能。" }
  ],
  steps: [
    {
      en: "From a thermodynamic standpoint a living organism is an open system, meaning a system that exchanges both matter and energy with its surroundings: it covers its own need for energy and matter at the expense of the surrounding environment, and in doing so increases that environment's degree of disorder. The high internal order this buys is not decorative. **Internal order is what allows a living system autonomous regulation and adaptation to changes in the external environment, so it is bought for a purpose rather than kept as an ornament.**",
      cn: "从热力学角度看，生物体是一个开放系统 —— 也就是与环境既交换物质、也交换能量的系统：它以周围环境为代价来满足自身对能量和物质的需求，并在此过程中使环境自身的无序度增加。而由此换来的高度内部有序性，并不是装饰性的。**正是这种内部有序性，使生命系统得以自主调节、并适应外部环境的变化 —— 所以这份有序是为了某个用途才买下来的，不是拿来当摆设的。**",
      src: "B §6.1, p.130"
    },
    {
      link_en: "and the balance it seems to hold with that environment is not the kind of balance the word usually means",
      link_cn: "而它与环境之间看上去维持着的那种平衡，并不是这个词平常所指的那种平衡",
      recall_en: "the dynamic steady state already met in the foundations chain, now stated as the chapter's own premise",
      recall_cn: "在基础那条链里已经见过的动态稳态，这里被当作本章自己的前提重新说一遍",
      en: "Equilibrium with the surroundings is only apparent, and it is better described as dynamic equilibrium, also called a steady state, which is far removed from the static equilibrium of an isolated system — an isolated system being one that exchanges neither matter nor energy — as classical equilibrium thermodynamics describes it. **The basic laws of thermodynamics nevertheless apply without exception to living matter as well, so nothing here asks for a physics of its own.**",
      cn: "生物体与环境的平衡只是表象，更准确的说法是动态平衡（也称稳态）—— 它与经典平衡态热力学所描述的孤立系统静态平衡相去甚远，而所谓孤立系统，就是既不交换物质也不交换能量的系统。**即便如此，热力学的基本定律对生命物质同样成立、无一例外 —— 这里并不需要另立一套属于生命的物理学。**",
      src: "B §6.1, p.130",
      see: [{ id: "L-1-3-1", en: "how far from equilibrium a cell actually sits, measured on one reaction", cn: "细胞离平衡究竟有多远 —— 拿一个反应量出来" }]
    },
    {
      link_en: "so what is all that energy actually spent on? Three items, and they are the whole list",
      link_cn: "那么这些能量究竟花在什么地方？三条，而这就是全部清单",
      en: "A living organism obtains, transforms and uses energy for three purposes. The first is mechanical work: muscle contraction, and other movement of cells. The second is active transport of molecules and ions, meaning transport that runs against a concentration difference and therefore has to be paid for, together with the processing of signals, which is to say of information. The third is biosynthesis of macromolecules and other substances from precursors. **Every energy-consuming thing an organism does falls into moving something, carrying something across a boundary, or building something.**",
      cn: "生物体获取、转化并使用能量，是为了三类用途。第一是机械功：肌肉收缩，以及细胞的其他运动。第二是分子与离子的主动运输 —— 也就是逆着浓度差进行、因而必须付费的运输 —— 连同信号（即信息）的处理。第三是由前体物质合成大分子及其他物质，即生物合成。**生物体所做的每一件耗能的事，都落在这三样里：让东西动起来、把东西搬过一道边界、或者把东西造出来。**",
      src: "B §6.1, p.130"
    },
    {
      link_en: "and where does it all come from, and where does it all end up?",
      link_cn: "那这些能量又从哪里来、最后又到哪里去？",
      en: "The book's own flow scheme traces energy through the biosphere in one direction only. The electromagnetic energy of solar radiation drives photosynthesis, which converts it into the energy of chemical bonds, and the three things named as holding that bond energy are ATP, NADPH and nutrients. That bond energy then branches into the same three parallel uses — contraction and movement, transport, and biosynthesis — and all three converge again into one final box, unused energy, labelled as heat and entropy, entropy being the measure of how randomly a system's components are arranged. **Energy enters the biosphere once, as light, and leaves it once, as heat and disorder, and everything alive happens in between those two.**",
      cn: "教材自己给出的那张流程图，只朝一个方向描绘能量在生物圈中的流动。太阳辐射的电磁能驱动光合作用，光合作用把它转化为化学键能；被点名装着这份键能的有三样：ATP、NADPH 和营养物质。这些键能随后分支为刚才那三种并行用途 —— 收缩与运动、运输、生物合成 —— 而三者又都汇聚到同一个最终环节：未被利用的能量，标着「热」与「熵」，其中熵是衡量一个系统各组分排列有多随机的量。**能量以光的形式一次性进入生物圈，又以热和无序的形式一次性离开；一切活着的事情，都发生在这两者之间。**",
      src: "B §6.1, p.130"
    },
    {
      link_en: "one peculiarity of the machinery then fixes which thermodynamic quantity is the right one to use",
      link_cn: "而这套装置的一个特点，直接决定了该用哪一个热力学量",
      en: "The energetic apparatus of a living system has a crucial peculiarity: it cannot tolerate large differences of pressure, of temperature, or of the concentration of protons and other ions. It can therefore only perform work under constant temperature, constant pressure and other constant conditions. **Gibbs energy, written as its change ΔG, is the state variable suited to describing energy changes under exactly those constant conditions, which is why it and not heat is the quantity used throughout.**",
      cn: "生命系统的能量装置有一个关键特点：它承受不了较大的压力差、温度差，或质子和其他离子的浓度差。因此它只能在恒定温度、恒定压力等恒定条件下做功。**Gibbs 自由能（以其变化量 ΔG 表示）正是适合在这些恒定条件下描述能量变化的状态函数 —— 这就是为什么全篇用的是它，而不是热量。**",
      src: "B §6.1, p.130"
    },
    {
      link_en: "and one question then divides every organism on the planet into two",
      link_cn: "接着一个问题就把地球上所有生物分成了两半",
      recall_en: "the energy-source axis of the four trophic classes, met in the foundations chain",
      recall_cn: "四种营养类型里的「能源」那条轴，在基础那条链里见过",
      en: "Virtually all the energy used by organisms on Earth ultimately originates in the electromagnetic radiation of the Sun. Phototrophs — plants and some bacteria — convert that solar energy directly into the energy of the chemical bonds of nutrients, by photosynthesis. Chemotrophs instead obtain their Gibbs energy by oxidative cleavage of nutrients, meaning by breaking nutrients apart in reactions that strip electrons off them. **Both groups are living on sunlight, and the difference is only how many hands the energy passes through on the way.**",
      cn: "地球上生物体所利用的能量，几乎全部最终源自太阳的电磁辐射。光养生物（phototroph，即植物和某些细菌）通过光合作用，把太阳能直接转化为营养物质化学键中的能量。化能营养生物（chemotroph）则改为通过营养物质的氧化裂解取能 —— 也就是在把营养物拆开的同时，从它们身上剥走电子。**两类生物其实归根到底都靠阳光过活，区别只在于这份能量在抵达它们之前，在路上经过了几道手。**",
      src: "B §6.1, p.130",
      see: [{ id: "6-2-4-1", en: "where those stripped electrons are finally spent", cn: "被剥下来的这些电子最终花在了哪里" }]
    },
    {
      link_en: "now down from the whole organism to a single reaction — except that a single reaction is not how anything actually runs",
      link_cn: "现在从整个生物体下到单个反应 —— 只不过，任何东西实际上都不是以「单个反应」的方式运行的",
      en: "In living matter individual reactions never proceed in isolation; each is part of a system of reactions, and there are three shapes. A linear system runs A to B to C to D and onward. A branched system is a main chain that also sends side branches off to separate products, so one intermediate leads away to a product P and another to a product Q. A cyclic system runs A to B to C to D to E where the last intermediate feeds back and regenerates A, closing the loop. **Being part of a system rather than standing alone is exactly what will let an energetically impossible reaction run, so the shape of the network is not decoration.**",
      cn: "在生命物质中，各个反应从不孤立进行；每一个都是某个反应体系的一部分，而体系有三种形状。线性体系：A → B → C → D，一路下去。分支型体系：主链之外还分出支路通向另外的产物，于是某个中间体引向产物 P，另一个中间体引向产物 Q。环状体系：A → B → C → D → E，最后一个中间体反馈回去、再生成 A，把环闭上。**「身处一个体系之中」而不是孤零零站着，恰恰就是让一个在能量上不可能的反应跑得动的原因 —— 所以网络的形状不是装饰。**",
      src: "B §6.1.1, p.131"
    },
    {
      link_en: "that is what coupling is, and the two books explain the mechanism differently",
      link_cn: "这就是所谓偶联；而关于它的机制，两本书的解释并不相同",
      en: "An endergonic reaction is one whose standard Gibbs energy change is above zero, so it is thermodynamically unfavourable and cannot proceed on its own; an exergonic reaction is one whose standard Gibbs energy change is below zero, so it proceeds spontaneously and releases Gibbs energy. Being part of a system is what allows the first to run at the same time as the second, and the principle of that coupling is stated here as removal: the exergonic reaction continuously removes the products of the endergonic one, pulling it forward. A second account of the same phenomenon puts the emphasis on a shared intermediate — a species produced by one reaction and consumed by the other, which cancels from both sides and is what physically permits the two equations to be added at all. **Both accounts demand the same thing, that the two reactions touch each other chemically, because a favourable sum on paper transfers no energy between reactions that merely run side by side.**",
      cn: "吸能反应（endergonic）是标准 Gibbs 自由能变化大于零的反应，因而在热力学上不利、无法自行进行；放能反应（exergonic）是标准 Gibbs 自由能变化小于零的反应，因而自发进行并释放 Gibbs 自由能。正因为反应身处一个体系之中，前者才能与后者同时发生；而这里给出的偶联原理是「清除」：放能反应不断地把吸能反应的产物消耗掉，从而把它向前拉。关于同一现象还有第二种说法，重点落在共有中间产物上 —— 一个由前一反应生成、被后一反应消耗的物种，它从两边消去，正是它在物理上使两个方程式得以相加。**两种说法要求的是同一件事：两个反应必须在化学上彼此相触；因为纸面上的和再有利，两个各跑各的反应之间也传不过去任何能量。**",
      src: "B §6.1.1, p.131"
    },
    {
      link_en: "and here is the arithmetic, with the reaction that opens the breakdown of glucose",
      link_cn: "下面是那道算术，用的是开启葡萄糖分解的那个反应",
      recall_en: "the same three numbers appear in the foundations chain, there used to make the point about a shared intermediate; here they carry an enzyme's name",
      recall_cn: "同样这三个数字在基础那条链里出现过，那里用来说明共有中间产物；这里它们带上了一个酶的名字",
      en: "The thermodynamic fact underlying coupling is that the total standard Gibbs energy change of a series of reactions equals the sum of the individual steps' values, so an unfavourable step can be paid for by a sufficiently favourable one elsewhere in the same sequence. The numbers: the endergonic reaction glucose plus Pi giving glucose 6-phosphate plus water has a standard Gibbs energy change of +13.8 kJ per mole; the exergonic reaction ATP plus water giving ADP plus Pi has −30.5 kJ per mole; summed, the coupled reaction glucose plus ATP giving glucose 6-phosphate plus ADP comes to −16.7 kJ per mole and is exergonic overall. **That coupled reaction is the one hexokinase catalyses at the opening of glycolysis, so the first step of breaking sugar down is the coupling principle at work rather than a picture of it.**",
      cn: "偶联背后的热力学事实是：一系列反应的总标准 Gibbs 自由能变化，等于各个步骤数值之和 —— 因此一个不利的步骤，可以由同一序列中另一个足够有利的步骤来「支付」。具体数值：吸能反应「葡萄糖 + Pi → 葡萄糖-6-磷酸 + 水」的标准 Gibbs 自由能变化为 +13.8 kJ/mol；放能反应「ATP + 水 → ADP + Pi」为 −30.5 kJ/mol；两者相加，偶联反应「葡萄糖 + ATP → 葡萄糖-6-磷酸 + ADP」为 −16.7 kJ/mol，整体放能。**这个偶联反应正是己糖激酶在糖酵解开头所催化的那一步 —— 所以拆解糖的第一步，本身就是偶联原理的一次实作，而不只是它的一个插图。**",
      src: "B §6.1.1, p.131"
    },
    {
      link_en: "and one last line about what that number is a number of",
      link_cn: "最后一句，说清那个数字究竟是「什么」的数字",
      en: "The standard Gibbs energy change of a chemical reaction is defined as the maximum work that reaction could theoretically perform if it were carried out under isothermal and isobaric conditions, meaning at constant temperature and constant pressure. **That definition ties an abstract thermodynamic quantity to something concrete, a ceiling on the useful work available — and it is a ceiling, because friction of some kind always takes a cut.**",
      cn: "一个化学反应的标准 Gibbs 自由能变化，被定义为：若该反应在等温等压条件下（也就是恒定温度、恒定压力）进行，理论上它所能做的最大功。**这个定义把一个抽象的热力学量，系到了一件具体的事情上 —— 可用功的上限；而它确实只是上限，因为某种形式的摩擦总要抽走一部分。**",
      src: "B §6.1.1, p.131"
    }
  ]
};

/* ------------------------------------------------ ATP 与磷酰基转移 ---- */
window.BIOLITE_SPINE["key:atp-and-phosphoryl-transfer"] = {
  assumed: ["cell", "cytosol", "enzyme", "protein", "substrate", "molecule", "atom",
            "electron", "proton", "ion", "charge", "covalent bond", "double bond",
            "resonance", "hydrolysis", "equilibrium", "equilibrium constant",
            "free energy", "gibbs energy", "activation energy", "kinetics",
            "ATP", "ADP", "AMP", "GTP", "UTP", "CTP", "nucleotide", "nucleoside",
            "nucleoside triphosphate", "nucleoside diphosphate", "adenine", "ribose",
            "deoxyribose", "purine", "phosphate", "inorganic phosphate",
            "pyrophosphate", "magnesium", "manganese", "water", "carbon dioxide",
            "glucose", "glutamate", "glutamine", "ammonia", "amino acid", "fatty acid",
            "coenzyme A", "acetyl-CoA", "thiol", "ester", "carboxyl group",
            "histidine", "tRNA", "DNA", "RNA", "nucleic acid", "erythrocyte", "glycerol",
            "skeletal muscle", "muscle contraction", "actin", "myosin", "helicase",
            "creatine", "isotope", "conformation", "conformational change",
            "active site", "kinase", "phosphorylation", "glycolysis", "catabolism",
            "metabolism", "firefly", "signal", "mole", "concentration", "ph",
            "biosynthesis", "vertebrate", "invertebrate", "steroid", "chlorophyll"],
  nodeTitle_en: "High-energy compounds, ATP, and what a phosphoryl group is actually for",
  nodeTitle_cn: "高能化合物、ATP，以及磷酰基究竟是干什么用的",
  title_en: "Why high-energy names a crowded molecule and not a strong bond, why ATP sits in the middle of a ranking, and why it almost never simply hydrolyses",
  title_cn: "为什么「高能」说的是一个拥挤的分子而不是一根结实的键、为什么 ATP 卡在一张排名的正中间，以及它为什么几乎从不单纯水解",
  terms: [
    { en: "macroergic compound", cn: "高能化合物",
      def_en: "A metabolite sitting in an energetically unstable state, held back from a more stable arrangement by a single bond conventionally marked with a small wavy line. Hydrolysis of that bond releases 30 to 60 kJ per mole, against under about 12 for an ordinary one.",
      def_cn: "处在能量上不稳定状态的代谢物，仅靠一根键（习惯上以小波浪号标出）挡着它转变为更稳定的构型。断裂该键每摩尔释放 30 到 60 kJ，而普通键不到约 12。" },
    { en: "phosphagen", cn: "磷酸原",
      def_en: "A phosphoamide-bonded energy store: phosphocreatine in vertebrates, phosphoarginine in invertebrates. A partial positive charge on the phosphorus blocks the resonance that would otherwise stabilise the bond, which is why it holds so much free energy.",
      def_cn: "以磷酰胺键储能的化合物：脊椎动物中的磷酸肌酸，无脊椎动物中的磷酸精氨酸。磷原子上的部分正电荷阻断了本会稳定这根键的共振，这正是它保有如此多自由能的原因。" },
    { en: "phosphorylation potential", cn: "磷酸化势",
      def_en: "The actual free-energy change of ATP hydrolysis under the concentrations prevailing inside a cell, written ΔGp. In a human erythrocyte it is about −52 kJ per mole against the standard −30.5, and it is always more negative than standard.",
      def_cn: "在细胞内实际存在的浓度下，ATP 水解真正的自由能变化，写作 ΔGp。在人红细胞里约为 −52 kJ/mol，而标准值是 −30.5；它永远比标准值更负。" },
    { en: "group transfer", cn: "群转移",
      def_en: "The mechanism by which ATP actually does work: part of the molecule — a phosphoryl group, a pyrophosphoryl group, or the whole adenylate — is transferred covalently onto a substrate or an enzyme residue, activating it, and is displaced in a second step.",
      def_cn: "ATP 真正做功的机制：分子的一部分（一个磷酰基、一个焦磷酰基，或整个腺苷酸）被共价转移到底物或酶的某个残基上，把它活化，随后在第二步被顶替下来。" },
    { en: "adenylylation", cn: "腺苷酰化",
      def_en: "Nucleophilic attack at ATP's alpha phosphate, transferring adenylate and displacing pyrophosphate. It carries an extra push because inorganic pyrophosphatase destroys the pyrophosphate as fast as it appears, so both of ATP's phosphoanhydride bonds end up broken.",
      def_cn: "亲核体进攻 ATP 的 α 位磷，转移出腺苷酸、顶掉焦磷酸。它额外带一份推力，因为无机焦磷酸酶一出现就把焦磷酸销毁，于是 ATP 的两根磷酸酐键最终全都断了。" },
    { en: "phosphocreatine", cn: "磷酸肌酸",
      def_en: "A small phosphorylated molecule held at about 30 mM in skeletal muscle, roughly ten times the ATP concentration there. Creatine kinase turns it plus ADP into ATP plus creatine, refilling ATP far faster than catabolism can.",
      def_cn: "一个小的磷酸化分子，在骨骼肌中维持在约 30 mM，大约是那里 ATP 浓度的十倍。肌酸激酶把它与 ADP 变成 ATP 与肌酸，补充 ATP 的速度远快于分解代谢。" }
  ],
  steps: [
    {
      en: "An exergonic reaction is one that releases Gibbs energy as it proceeds, and an endergonic reaction is one that has to be paid for, and the coupling between the two need not be immediate and direct. Living systems instead use metabolites able to accumulate, store, transfer and, on demand, release Gibbs energy within their own molecule. Such a metabolite sits in an energetically unstable state, held back from a more stable configuration by a single chemical bond, and that bond is conventionally singled out and marked with a small wavy line; breaking it stabilises the system and releases Gibbs energy for use elsewhere. The atoms around that bond are themselves engaged in further covalent interactions, so the property being described belongs to a larger portion of the molecule. **The book therefore insists on the phrase macroergic compound rather than macroergic bond, because the instability is a property of the whole molecule and not of one bond looked at alone.**",
      cn: "放能反应（exergonic）是随着进行会释放 Gibbs 自由能的反应，吸能反应（endergonic）则是必须有人替它付账的反应；而两者之间的偶联未必是即时而直接的。生命系统改用一类代谢物 —— 它们能在自己分子内部积累、储存、传递，并在需要时释放 Gibbs 自由能。这样的代谢物处在能量上不稳定的状态，仅由一根化学键挡着它转变为更稳定的构型；习惯上会把这根键单独拎出来，用一个小波浪号标出。断开它会使体系稳定下来，并释放出 Gibbs 自由能供别处使用。而这根键周围的原子本身还参与着别的共价相互作用，所以真正被描述的那个性质，属于分子中更大的一块。**因此教材坚持用「高能化合物」这个说法，而不是「高能键」—— 因为不稳定是整个分子的性质，不是孤立看待的某一根键的性质。**",
      src: "B §6.1.2, p.131"
    },
    {
      link_en: "and high-energy has a number attached to it, which is where the word stops being vague",
      link_cn: "而「高能」是有数字撑着的 —— 这个词从这里开始不再含糊",
      en: "Macroergic compounds were found empirically to have a high standard Gibbs energy change of hydrolysis, in the range of 30 to 60 kJ per mole per bond. Hydrolysis of a non-macroergic compound, by contrast, usually does not exceed about 12 kJ per mole per bond. **That numeric range is the book's own operational definition of high-energy, so the label is a measurement and never an impression of a structural formula.**",
      cn: "经验上发现，高能化合物的水解标准 Gibbs 自由能变化较高，每根键在 30 到 60 kJ/mol 之间；相比之下，非高能化合物的水解通常不超过每根键约 12 kJ/mol。**这个数值区间就是教材对「高能」的操作性定义 —— 所以这个标签是一次测量的结果，从来不是看结构式看出来的印象。**",
      src: "B §6.1.2, p.131"
    },
    {
      link_en: "four structural types carry that property, and the first one is the family ATP belongs to",
      link_cn: "有四种结构类型带着这一性质，而第一类正是 ATP 所属的那一族",
      en: "Type one is the anhydrides, a class that includes the inorganic diphosphates, also called pyrophosphates, and the nucleotide triphosphates ATP, UTP, GTP and CTP, of which ATP and ADP are the most important. At pH 7 ATP carries four dissociable protons and ADP three, and both form complexes with magnesium ions inside the cell. Their macroergicity is explained structurally: phosphorus does not readily form double bonds, its bond to oxygen is semipolar, and negative charge is concentrated on the oxygen atoms, so a cluster of like charges sits together and their mutual electrostatic repulsion destabilises the molecule. Two further anhydride examples are named, the phosphosulfate bond in 3'-phosphoadenosine-5'-phosphosulfate, and the acylphosphate bonds of carbamoyl phosphate, of 1,3-bisphosphoglycerate and of acetyl phosphate. **Breaking a phosphoanhydride bond relieves that electrostatic strain, so what is released is crowding rather than the strength of the bond itself.**",
      cn: "第一类是酸酐类，其中包括无机二磷酸（也叫焦磷酸）以及核苷三磷酸 ATP、UTP、GTP、CTP，其中最重要的是 ATP 和 ADP。在 pH 7 时，ATP 带有四个可解离的质子，ADP 带三个；两者在细胞内都会与镁离子形成络合物。它们的高能性从结构上得到解释：磷不容易形成双键，它与氧之间的键是半极性的，而负电荷又集中在氧原子上，于是一堆同种电荷挤在一起，彼此间的静电斥力使分子失稳。教材还点名了另外两个酸酐类例子：3′-磷酸腺苷-5′-磷酸硫酸中的磷酸硫酸键，以及酰基磷酸键 —— 氨甲酰磷酸、1,3-二磷酸甘油酸和乙酰磷酸都属此类。**断开一根磷酸酐键，解除的正是这种静电张力 —— 所以被释放出来的是「拥挤」，而不是那根键本身的强度。**",
      src: "B §6.1.2, pp.131–132, Obr. 6.1"
    },
    {
      link_en: "type two stores energy in a bond between phosphorus and nitrogen, and it has a name worth knowing",
      link_cn: "第二类把能量存在一根磷—氮键里，而它的名字值得记住",
      en: "Type two is the phosphoamides, and they occur in the compounds called phosphagens, which are energy stores: phosphocreatine in vertebrates and phosphoarginine in invertebrates. The phosphate group here is attached through a bond between phosphorus and nitrogen rather than through an oxygen, and in this compound type a partial positive charge on the phosphorus atom prevents mesomerism, meaning the spreading of electrons over several bonds that would otherwise stabilise the arrangement. **Blocked resonance is the mechanistic reason a phosphorus-to-nitrogen bond of this kind counts as high-energy, and the same reason will return for two more of the four types.**",
      cn: "第二类是磷酰胺类，它们存在于所谓「磷酸原」这类储能化合物中：脊椎动物中的磷酸肌酸，无脊椎动物中的磷酸精氨酸。这里的磷酸基团是通过一根磷—氮键、而不是通过一个氧连接上去的；而在这类化合物中，磷原子上的部分正电荷阻止了 mesomerism（共振离域，即电子在若干根键上摊开，本来会使这个构型稳定下来）。**「共振被挡住」正是这种磷—氮键算作高能键的机制性原因；而同一个理由，在四类中的另外两类里还会再出现。**",
      src: "B §6.1.2, p.132"
    },
    {
      link_en: "types three and four, and the third one gets two energy releases out of one step",
      link_cn: "第三类与第四类；其中第三类一步就能放出两份能量",
      recall_en: "blocked resonance again, exactly as in the phosphoamides one step up",
      recall_cn: "又是「共振被挡住」，与上一步的磷酰胺类一模一样",
      en: "Type three is the enol phosphates, which show an especially high standard Gibbs energy change of hydrolysis, and the example is the enol-phosphate bond of phosphoenolpyruvate. An enol is a form carrying a hydroxyl on a doubly bonded carbon, and it can tautomerise, meaning shift a proton and a bond, into the keto form, which is lower in energy and therefore more stable. The ester phosphate bond physically prevents that shift, so hydrolysing the phosphate off releases both the bond's own energy and the energy of the tautomerisation it had been blocking. Type four is the thioesters, the bonds found in the acyl derivatives of coenzyme A such as acetyl-CoA, where the sulfur atom prevents the mesomerism normal for an ordinary oxygen ester, so the bond keeps more of its free energy. **Phosphoenolpyruvate sits at the top of the ranking because hydrolysing it does two things at once: it breaks a bond, and it lets the molecule relax into a shape it had been locked out of.**",
      cn: "第三类是烯醇磷酸酯，其水解的标准 Gibbs 自由能变化特别高，例子是磷酸烯醇丙酮酸中的烯醇磷酸键。所谓 enol（烯醇），是在一个参与双键的碳上挂着羟基的形式；它可以互变异构（tautomerise，即挪动一个质子和一根键）成酮式，而酮式能量更低、因而更稳定。那根酯化的磷酸键在物理上挡住了这次互变，所以把磷酸水解掉时，既释放了这根键本身的能量，也释放了原先被挡住的那次互变异构所蕴含的能量。第四类是硫酯，即辅酶 A 的酰基衍生物（例如乙酰-CoA）中的那种键；这里硫原子阻止了普通氧酯键通常具有的共振离域，于是这根键保留了更多自由能。**磷酸烯醇丙酮酸之所以坐在排名最顶端，是因为水解它一步做成两件事：断掉一根键，同时把分子从被锁住的构型里放出来。**",
      src: "B §6.1.2, pp.132–133"
    },
    {
      link_en: "with all four types in hand, the compounds can be put in one column and ranked",
      link_cn: "四类都有了之后，就可以把这些化合物排成一列",
      en: "The book ranks phosphorylated compounds by their standard Gibbs energy change of hydrolysis, most negative first, all in kJ per mole: phosphoenolpyruvate −61.9, 1,3-bisphosphoglycerate −49.3, creatine phosphate −43.1, acetyl phosphate −42.2, inorganic diphosphate −33.5, then acetyl-CoA at −31.4 in parentheses, then ATP going to ADP plus Pi at −30.5, then glucose 1-phosphate −20.9, fructose 6-phosphate −15.9, glucose 6-phosphate −13.8 and 1-glycerol 3-phosphate −9.2. Acetyl-CoA is the one entry in brackets because it is a thioester and not a phosphorylated compound at all, included for energetic comparison. **A single arrow runs down the whole column marking the direction of phosphate transfer, from the high-energy compounds at the top toward the low-energy ones at the bottom.**",
      cn: "教材按水解的标准 Gibbs 自由能变化，把磷酸化合物从最负开始排下来，单位都是 kJ/mol：磷酸烯醇丙酮酸 −61.9，1,3-二磷酸甘油酸 −49.3，磷酸肌酸 −43.1，乙酰磷酸 −42.2，无机二磷酸 −33.5，接着是括号里的乙酰辅酶 A −31.4，然后是 ATP → ADP + Pi 的 −30.5，再往下是葡萄糖-1-磷酸 −20.9、果糖-6-磷酸 −15.9、葡萄糖-6-磷酸 −13.8、1-甘油-3-磷酸 −9.2。乙酰辅酶 A 是唯一加了括号的一项，因为它是硫酯、根本不是磷酸化合物，列进来只为作能量比较。**表上还贯穿画着一支箭头，标明磷酸基团转移的方向：从上方的高能化合物指向下方的低能化合物。**",
      src: "B §6.1.2, p.133, Tab. 6.1"
    },
    {
      link_en: "and that ranking is not a list. It is the mechanism",
      link_cn: "而这份排名不是一张清单 —— 它就是机制本身",
      en: "Two conclusions are drawn. The first is that the biochemical derivatives of phosphoric acid fall into two groups relative to where ATP sits in the column: compounds above ATP, with a high standard Gibbs energy change of hydrolysis, can serve as donors of the phosphate group, while compounds below ATP, with a low one, have organic residues that act as acceptors instead. The second is that ATP and ADP together form the pair acting as the universal donor and acceptor of the phosphate group, which makes them the central compounds of bioenergetics, and that the formation of ATP in an organism is moreover well regulatable. **ATP thus represents one of the forms in which Gibbs energy is distributed around a cell, and its −30.5 kJ per mole works as a kind of quantum for energetic transformations there.**",
      cn: "由此得出两条结论。第一，磷酸的生化衍生物按其在这一列中相对于 ATP 的位置分成两组：排在 ATP 上方、水解标准 Gibbs 自由能变化较高的化合物，可以充当磷酸基团的供体；排在 ATP 下方、数值较低的化合物，其有机残基则充当受体。第二，ATP 与 ADP 共同组成那一对，扮演磷酸基团的通用供体与受体，因而是生物能学的中心化合物；而且机体内 ATP 的生成还具有良好的可调控性。**于是 ATP 代表着 Gibbs 自由能在细胞内被分配的形式之一，而它那 −30.5 kJ/mol 就相当于细胞内能量转化的一种「量子」。**",
      src: "B §6.1.2, p.133, Tab. 6.1"
    },
    {
      link_en: "that quantum is measured under conditions no cell ever occupies",
      link_cn: "而这个「量子」是在任何细胞都不曾身处的条件下测出来的",
      en: "The number quoted for ATP hydrolysis, −30.5 kJ per mole, is a standard free-energy change, and standard means every participant at a concentration of 1 M. Inside a cell, ATP, ADP and Pi are nowhere near 1 M and nowhere near each other: in a human erythrocyte, the red blood cell, they stand at about 2.25, 0.25 and 1.65 mM, and the values differ from one cell type to another. **The number measured under conditions the cell never occupies is not the number the cell works with.**",
      cn: "被引用来描述 ATP 水解的那个数字 −30.5 kJ/mol，是一个标准自由能变化；而「标准」意味着每一个参与者的浓度都是 1 M。细胞里的 ATP、ADP 和 Pi 既远不到 1 M，彼此之间也差得很远：在人的 erythrocyte（红细胞）里，它们分别约为 2.25、0.25、1.65 mM，而且这些数值还因细胞类型而异。**一个在细胞从未身处过的条件下测出来的数字，并不是细胞实际使用的那个数字，两者可以差出接近一倍。**",
      src: "A p.479, §13.3, Table 13-5"
    },
    {
      link_en: "so put the real concentrations in",
      link_cn: "那就把真实浓度代进去",
      en: "**The actual free-energy change of ATP hydrolysis inside a cell has a name — its phosphorylation potential, written ΔGp — and it is calculated as ΔGp = ΔG'° + RT ln([ADP][Pi]/[ATP]).** With the erythrocyte concentrations above this comes to about −52 kJ per mole; with a lower estimate of free ADP, meaning the fraction not bound to protein, at around 25 μM, it reaches −58. In a living cell the energy released by ATP hydrolysis is always greater than the standard value, because cells hold ATP far above the concentration it would settle at if hydrolysis were allowed to reach equilibrium, and there has been very strong selective pressure for the regulatory machinery that keeps it there. When ATP falls, the cell does not merely have less fuel: the fuel itself loses potency, because ΔGp falls with it.",
      cn: "**细胞内 ATP 水解真正的自由能变化有一个名字 —— 磷酸化势（phosphorylation potential），写作 ΔGp —— 算法是 ΔGp = ΔG′° + RT ln([ADP][Pi]/[ATP])。**把上面那组红细胞浓度代进去，得到约 −52 kJ/mol；如果用一个更低的游离 ADP 估计值（也就是没有被蛋白结合的那一部分，约 25 μM），会算到 −58。在活细胞里，ATP 水解释放的能量永远大于标准值，因为细胞把 ATP 维持在远高于「水解达到平衡时它会落到的那个浓度」的水平上，而演化对负责维持它的那套调控机制施加了非常强的选择压力。于是 ATP 一旦下降，细胞不只是燃料变少了：这份燃料本身的效力也变差了，因为 ΔGp 跟着一起掉。",
      src: "A pp.479–481, §13.3, Worked Example 13-2"
    },
    {
      link_en: "one more correction, this time to what the substrate even is",
      link_cn: "还有一处更正，这次是关于「底物到底是什么」",
      recall_en: "the magnesium complexes of ATP and ADP were already named on the structural side; here is what they do to a calculation",
      recall_cn: "ATP 和 ADP 的镁络合物在结构那一侧已经点过名；这里说的是它们对一次计算意味着什么",
      en: "Magnesium ions in the cytosol bind ATP and ADP, and that binding partly shields their negative charges and changes the conformation, meaning the three-dimensional shape, that the phosphate groups take up. For most enzymatic reactions in which ATP is the phosphoryl group donor, **the true substrate is the magnesium complex MgATP2- rather than free ATP4-, so the standard free-energy change relevant to any real enzyme is the one for MgATP2- hydrolysis.** This forces no equation to be rewritten, because magnesium was never written into it: a biochemical equation leaves out species whose concentration the reaction does not appreciably change.",
      cn: "胞质里的镁离子会结合 ATP 和 ADP，这次结合部分屏蔽掉它们的负电荷，也改变了磷酸基团所采取的构象（conformation，即三维形状）。在大多数以 ATP 作磷酰基供体的酶促反应中，**真正的底物是镁络合物 MgATP²⁻，而不是游离的 ATP⁴⁻ —— 所以对任何真实的酶而言，相关的标准自由能变化是 MgATP²⁻ 水解的那个值。**这并不逼着谁去改写方程式，因为镁本来就没被写进去：生化方程式会略去那些浓度不被反应显著改变的物种。",
      src: "A pp.479–480, §13.3, Fig. 13-12"
    },
    {
      link_en: "if ATP is that reactive, why has it not already reacted with everything in the cell?",
      link_cn: "既然 ATP 这么活泼，它为什么还没跟细胞里的所有东西反应掉？",
      en: "ATP is thermodynamically unstable in water and therefore a good phosphoryl group donor, and at the same time it is kinetically stable, because uncatalysed cleavage of its phosphoanhydride bonds — the two bonds joining its three phosphates in a row — needs an activation energy of 200 to 400 kJ per mole. The gap between what is favourable and what is fast is not a curiosity. **ATP will not hand a phosphoryl group to water, or to any of the hundreds of other acceptors floating past, until a specific enzyme lowers the barrier for one specific acceptor**, and a cell governs the energy carried by ATP by governing which of those enzymes are switched on.",
      cn: "ATP 在水中热力学上不稳定，因而是一个好的磷酰基供体；与此同时它在动力学上却很稳定 —— 因为在没有催化的情况下，裂解它的磷酸酐键（phosphoanhydride bond，即把三个磷酸一个接一个连起来的那两根键）需要 200 到 400 kJ/mol 的活化能。「有利」与「快」之间的这道落差不是趣闻。**在某个特定的酶为某个特定受体把这道势垒降下来之前，ATP 不会把磷酰基交给水，也不会交给身边飘过的成百上千个其他潜在受体**；而细胞正是通过控制「哪些酶开着」，来控制 ATP 所携带的能量流向何处。",
      src: "A p.484, §13.3"
    },
    {
      link_en: "now the correction this whole chain has been building toward",
      link_cn: "现在讲整条链一直在铺垫的那处更正",
      recall_en: "the same idea as attaching a good leaving group in the reaction-logic chain — here ATP supplies the group",
      recall_cn: "和「反应逻辑」那条链里「挂上一个好的离去基团」是同一个想法 —— 这里由 ATP 来提供那个基团",
      en: "**Hydrolysing ATP by itself accomplishes nothing except releasing heat, and heat cannot drive a chemical process in a system held at one temperature**, which a cell is. A single arrow written ATP giving ADP plus Pi is nearly always shorthand for two steps: first a part of ATP — a phosphoryl group, a pyrophosphoryl group, or the whole adenylate — is transferred and becomes covalently attached to the substrate or to an amino acid residue of the enzyme, raising that molecule's free energy, which is to say activating it; then the attached piece is displaced, leaving as Pi, as pyrophosphate or as AMP. Glutamine synthetase, the enzyme that makes glutamine from glutamate and ammonia, is the demonstration: a phosphoryl group is transferred from ATP directly onto the carboxyl group of glutamate, giving enzyme-bound glutamyl phosphate and releasing ADP, and only then does ammonia attack that activated intermediate, displacing the phosphoryl group as Pi and forming glutamine. The intermediate is enzyme-bound, so free glutamate in solution is not phosphorylated; the transfer happens only in the active site.",
      cn: "**单纯把 ATP 水解掉，除了放热之外什么也没干成，而热在一个温度恒定的系统里驱动不了化学过程** —— 细胞正是这样一个系统。写作「ATP → ADP + Pi」的那个单箭头，几乎总是两步的简写：第一步，ATP 的一部分（一个磷酰基、一个焦磷酰基，或者整个腺苷酸）被转移出去，共价地接到底物上、或接到酶的某个氨基酸残基上，把那个分子的自由能抬高，也就是把它活化；第二步，这块刚接上去的东西再被顶替下来，作为 Pi、焦磷酸或 AMP 离开。glutamine synthetase（谷氨酰胺合成酶）就是演示 —— 它由谷氨酸和氨生成谷氨酰胺：一个磷酰基直接从 ATP 转移到谷氨酸的羧基上，生成酶结合态的谷氨酰磷酸，同时放出 ADP；只有到这时候，氨才去进攻这个被活化的中间体，把磷酰基作为 Pi 顶替下来，同时生成谷氨酰胺。这个中间体是酶结合态的，所以溶液里游离的谷氨酸不会被磷酸化 —— 转移只发生在活性位点内部。",
      src: "A p.483, §13.3, Fig. 13-18"
    },
    {
      link_en: "ATP has three phosphates, and attacking a different one transfers a different group",
      link_cn: "ATP 有三个磷，进攻不同的那一个，转移出去的基团也不同",
      en: "The three phosphates are labelled alpha, beta and gamma, gamma being the terminal one furthest from the adenosine, and each is a distinct target for nucleophilic attack; labelling experiments with a heavy oxygen isotope established which bond breaks in each case. Attack at gamma displaces ADP and transfers a phosphoryl group, and note that it is a phosphoryl group and not a phosphate group, because the bridging oxygen in the product comes from the attacking alcohol. Attack at beta displaces AMP and transfers a pyrophosphoryl group, which is how 5-phosphoribosyl-1-pyrophosphate is made, the ribose-carrying intermediate every nucleotide is built onto. Attack at alpha displaces pyrophosphate and transfers adenylate as an adenylyl group, a reaction called adenylylation. That last route carries an extra push: hydrolysing the alpha-beta bond releases −45.6 kJ per mole against −31 for the beta-gamma bond, and the pyrophosphate released is then hydrolysed to two Pi by inorganic pyrophosphatase for a further −19.2, so it is destroyed as fast as it appears and the reaction cannot run backwards. **In effect both phosphoanhydride bonds break, ATP plus two waters giving AMP plus two Pi at −64.8 kJ per mole, which is the standard way a cell forces a synthesis to go to completion.**",
      cn: "三个磷标记为 α、β、γ，γ 是离腺苷最远的那个末端磷；每一个都是一个独立的亲核进攻靶点，而用重氧同位素做的标记实验确定了每种情况下断的是哪根键。进攻 γ 位会顶掉 ADP，转移出一个磷酰基 —— 请注意它是磷酰基而不是磷酸基，因为产物里那个桥氧来自进攻的那个醇。进攻 β 位会顶掉 AMP，转移出一个焦磷酰基，5-磷酸核糖-1-焦磷酸就是这样做出来的，而它正是每一个核苷酸都在其上搭建起来的那个携带核糖的中间体。进攻 α 位会顶掉焦磷酸，把腺苷酸作为一个 adenylyl 基团转移出去，这个反应叫 adenylylation（腺苷酰化）。最后这条路还额外带一份推力：水解 α-β 键释放 −45.6 kJ/mol，而水解 β-γ 键是 −31；放出来的焦磷酸随后又被无机焦磷酸酶水解成两个 Pi，再放 −19.2 —— 于是它一出现就被销毁，反应也就退不回去。**实际效果是两根磷酸酐键全断：ATP 加两分子水生成 AMP 加两个 Pi，−64.8 kJ/mol —— 这就是细胞逼一个合成反应走到底的标准手法。**",
      src: "A pp.484–485, §13.3, Fig. 13-20",
      see: [{ id: "L-22-4-1", en: "5-phosphoribosyl-1-pyrophosphate as the starting point of nucleotide synthesis", cn: "5-磷酸核糖-1-焦磷酸作为核苷酸合成的起点" }]
    },
    {
      link_en: "and that push is what pays for three of the biggest syntheses in the cell, plus one memorable stunt",
      link_cn: "而这份推力，正是细胞里三大类合成反应的付款方式 —— 外加一个好记的把戏",
      en: "Fatty acid activation is the worked case: adenylate is transferred from ATP onto the carboxyl group of a fatty acid, making a mixed anhydride called fatty acyl adenylate and liberating pyrophosphate, and the thiol group of coenzyme A then displaces the adenylyl group, giving the thioester fatty acyl-CoA. Activating an amino acid before protein synthesis is the same reaction with tRNA in coenzyme A's place, and polymerising nucleic acids is the same again, each nucleoside triphosphate losing pyrophosphate as it is added to a growing DNA or RNA chain. One memorable case of the same chemistry is a firefly's light: pyrophosphate cleavage of ATP activates luciferin to luciferyl adenylate, and the light this produces is proportional to the ATP present, which makes purified luciferin and the enzyme luciferase sensitive enough to measure a few picomoles of ATP. There are real exceptions to group transfer, and one is worth knowing by name. Myosin, the motor protein that pulls on actin filaments in muscle, binds ATP tightly but noncovalently to one of its conformations, then catalyses hydrolysis of the ATP bound to itself; ADP and Pi dissociate and the protein relaxes into a second conformation until the next ATP binds, and that binding-and-hydrolysis cycle is the mechanical stroke. **Here the hydrolysis itself is the energy source, which is one of very few real cases** — helicases and RecA moving along DNA, AAA+ ATPases and GTP-binding signalling proteins work the same way, while the Na+K+ ATPase is a middle case, transferring a phosphoryl group onto itself rather than onto a passing substrate.",
      cn: "脂肪酸的活化就是那个范例：腺苷酸从 ATP 被转移到脂肪酸的羧基上，生成一个叫 fatty acyl adenylate（脂酰腺苷酸）的混合酸酐，并放出焦磷酸；随后辅酶 A 的巯基把 adenylyl 基团顶替下来，得到硫酯脂酰辅酶 A。蛋白质合成之前活化一个氨基酸，是同一个反应，只把辅酶 A 换成 tRNA；核酸的聚合又是同一个 —— 每一个核苷三磷酸被加到正在延长的 DNA 或 RNA 链上时都放出焦磷酸。同一套化学还有一个好记的例子 —— 萤火虫的光：ATP 的焦磷酸裂解把萤光素（luciferin）活化成萤光素腺苷酸，由此发出的光与在场的 ATP 量成正比，这让纯化的萤光素和萤光素酶（luciferase）灵敏到可以测出几皮摩尔的 ATP。群转移确实存在真正的例外，其中一个值得记住名字。myosin（肌球蛋白）是肌肉里拉动肌动蛋白丝的马达蛋白，它把 ATP 紧紧地、但非共价地结合在自己的某一个构象上，随后催化水解自己身上结合着的那个 ATP；ADP 和 Pi 解离，蛋白弛豫到第二个构象，直到下一个 ATP 结合上来 —— 这个「结合—水解」循环本身就是那一次机械冲程。**在这里，能量的来源就是这次水解本身 —— 而这是极少数几个真正的例外之一，值得记住名字。** —— 沿着 DNA 移动的 helicase 与 RecA、AAA+ ATPase 以及 GTP 结合的信号蛋白走的都是这条路；Na⁺K⁺ ATPase 则是个中间情况，它把磷酰基转给的是自己，而不是路过的底物。",
      src: "A pp.483, 485–487, §13.3, Box 13-2",
      see: [{ id: "L-17-2-1", en: "fatty acyl-CoA entering the oxidation cycle", cn: "脂酰辅酶 A 进入氧化循环" },
            { id: "L-5-3-1", en: "myosin and actin as a motor, in full", cn: "肌球蛋白与肌动蛋白作为一台马达 —— 完整版" }]
    },
    {
      link_en: "last, the three housekeeping enzymes that keep the whole system liquid",
      link_cn: "最后是让整套系统保持「流动」的三个后勤酶",
      en: "Nucleoside diphosphate kinase is present in all cells and catalyses ATP plus any nucleoside diphosphate giving ADP plus the corresponding nucleoside triphosphate; its standard free-energy change is close to zero, so the reaction is fully reversible, and the normally high ratio of ATP to ADP pushes it to the right. It runs a two-step Ping-Pong mechanism, meaning the first substrate leaves before the second arrives: a phosphoryl group moves from ATP onto an active-site histidine, forming a phosphohistidine intermediate, and only then onto whichever diphosphate has bound. The enzyme does not care which base that diphosphate carries and works equally well on deoxyribonucleoside diphosphates, so this one enzyme makes every triphosphate the cell needs out of ATP. Adenylate kinase handles a different problem: heavy phosphoryl transfer leaves ADP piling up and getting in the way, so it runs two ADP giving ATP plus AMP, lowering the ADP level and partly replenishing ATP at the same moment. **Phosphocreatine does the same buffering on the fastest timescale, held at about 30 mM in skeletal muscle, ten times the ATP concentration, and turned into ATP by creatine kinase at −12.5 kJ per mole.**",
      cn: "nucleoside diphosphate kinase（核苷二磷酸激酶）存在于所有细胞中，催化「ATP 加任意一种核苷二磷酸 → ADP 加相应的核苷三磷酸」；它的标准自由能变化接近零，所以反应完全可逆，而细胞里通常偏高的 ATP 对 ADP 比值把它推向右边。它走的是两步的 Ping-Pong（乒乓）机制 —— 意思是第一个底物先离开，第二个底物才进来：磷酰基先从 ATP 转到活性位点的一个组氨酸上，形成磷酸组氨酸中间体，然后才转到刚结合上来的那个二磷酸上。这个酶不在乎那个二磷酸带的是哪种碱基，对脱氧核苷二磷酸也一样好用 —— 所以细胞需要的每一种三磷酸，都是这一个酶从 ATP 做出来的。adenylate kinase（腺苷酸激酶）处理的是另一个问题：磷酰基转移一旦剧烈进行，ADP 就会堆起来挡路，于是它跑「两个 ADP → ATP 加 AMP」，在压低 ADP 水平的同时部分补回 ATP。**磷酸肌酸在最快的时间尺度上做同一件缓冲的事：它在骨骼肌里维持在约 30 mM，是 ATP 浓度的十倍，由肌酸激酶以 −12.5 kJ/mol 转变成 ATP。**",
      src: "A pp.487–488, §13.3, Fig. 13-21"
    }
  ]
};

/* ---------------------------------------------------- 生物氧化还原 ---- */
window.BIOLITE_SPINE["key:biological-redox"] = {
  assumed: ["cell", "organism", "enzyme", "molecule", "atom", "electron", "proton",
            "ion", "charge", "iron", "oxygen", "water", "hydrogen", "carbon dioxide",
            "hydrogen peroxide", "nutrient", "substrate", "metabolite", "energy",
            "free energy", "gibbs energy", "entropy, s", "equilibrium",
            "concentration", "ph", "mole", "electrode", "volt", "ethanol",
            "acetaldehyde", "acetate", "glucose", "lactate", "pyruvate", "malate",
            "oxaloacetate", "succinate", "fumarate", "isocitrate", "glutathione",
            "palmitic acid", "alanine", "ammonia", "fatty acid", "amino acid",
            "protein", "1,3-bisphosphoglycerate", "1,3-bisfosfoglycerát",
            "NAD+", "NADH", "FAD", "FADH2", "ubiquinone", "cytochrome",
            "cytochrome b", "cytochrome c", "coenzyme", "ATP", "phosphate",
            "glyceraldehyde 3-phosphate", "fermentation", "glycolysis",
            "respiratory chain", "oxidation", "reduction", "dehydrogenation",
            "oxidising agent", "reducing agent", "combustion", "aerobic", "anaerobic",
            "standard state", "temperature", "gas constant", "faraday constant"],
  nodeTitle_en: "Oxidation and reduction as a cell does them",
  nodeTitle_cn: "细胞是怎么做氧化还原的",
  title_en: "One rule about which way electrons move, a fifteen-rung table they move down, and why the energy released has to be taken in small doses",
  title_cn: "一条关于电子往哪边走的规则、一张十五级的表，以及为什么放出来的能量必须一小份一小份地取",
  terms: [
    { en: "redox potential", cn: "氧化还原电位",
      def_en: "The characteristic value of an oxidation-reduction system, written E and E°' for the standard value, given by the Nernst and Peterson relation. A more negative value marks a stronger reducing agent, a more positive one a stronger oxidising agent.",
      def_cn: "氧化还原体系的特征数值，写作 E，标准值写作 E°′，由能斯特—彼得斯关系式给出。数值越负，还原能力越强；越正，氧化能力越强。" },
    { en: "dehydrogenation", cn: "脱氢作用",
      def_en: "The form oxidation usually takes among organic compounds: loss of one or more hydrogen atoms, each of which is a proton and an electron together. Ethanol going to acetaldehyde is the worked example, minus two hydrogens in the oxidative direction.",
      def_cn: "氧化在有机化合物领域通常采取的形式：失去一个或多个氢原子，而每个氢原子就是一个质子加一个电子。范例是乙醇变乙醛，氧化方向上减去两个氢。" },
    { en: "standard hydrogen electrode", cn: "标准氢电极",
      def_en: "The fixed zero point of the redox-potential scale. By the classical convention it is 0 mV; under the biological standard state, at pH 7, the same electrode sits at −420 mV, which is exactly where the hydrogen couple appears in the biological table.",
      def_cn: "氧化还原电位标度的固定零点。按经典约定它是 0 mV；在生物学标准态（pH 7）下，同一个电极位于 −420 mV —— 而这正是氢电对在生物学表格中出现的位置。" }
  ],
  steps: [
    {
      en: "Any oxidation-reduction system can be written in one general form: a reduced form, abbreviated Red, gives an oxidised form, abbreviated Ox, plus n electrons. The iron couple is the plain example, an iron ion carrying two positive charges giving one carrying three plus one electron. **Oxidation means giving electrons up and reduction means accepting them, so the two words describe one transaction seen from its two ends and never two separate events.**",
      cn: "任何氧化还原体系都可以写成同一个一般形式：还原态（缩写 Red）给出氧化态（缩写 Ox）加上 n 个电子。最朴素的例子是铁的电对：带两个正电荷的铁离子给出带三个正电荷的铁离子，加一个电子。**氧化就是把电子交出去，还原就是把电子接过来 —— 这两个词描述的是同一笔交易的两头，而从来不是两件各自独立的事。**",
      src: "B §6.2.1, p.134"
    },
    {
      link_en: "among carbon compounds that transaction usually wears a different coat",
      link_cn: "在碳化合物这边，同一笔交易通常穿着另一件外衣",
      en: "In the field of organic compounds, oxidation very often means dehydrogenation specifically, meaning the loss of a hydrogen atom or atoms — and a hydrogen atom is a proton and an electron together, so losing one is losing an electron with a proton attached. The worked example is ethanol going to acetaldehyde, which is minus two hydrogens in the oxidative direction and plus two hydrogens running back the other way. **Wherever a biochemical pathway says a dehydrogenation, it is saying an oxidation, and the electrons are what the next step actually wants.**",
      cn: "在有机化合物领域，氧化很常特指 dehydrogenation（脱氢），也就是失去一个或多个氢原子 —— 而一个氢原子就是一个质子加一个电子，所以失去一个氢，就是把一个电子连着一个质子一起交出去。范例是乙醇变成乙醛：氧化方向上是减去两个氢，反过来走则是加上两个氢。**一条生化通路只要说到「脱氢」，说的就是「氧化」，而下一步真正想要的东西是那些电子。**",
      src: "B §6.2.1, p.134"
    },
    {
      link_en: "and the electrons cannot simply be left lying around",
      link_cn: "而这些电子不可能就那么撂在原地",
      en: "Released electrons and protons cannot exist independently, so an oxidative process is always coupled to the reduction of some other substance, which is why the whole thing is called an oxidation-reduction process rather than an oxidation. Oxidation is an exergonic process, converting compounds into products of lower Gibbs energy, which are more stable metabolites though with higher entropy than the starting materials. **Reduction is correspondingly endergonic, so every reducing step in biosynthesis is a bill, and every oxidising step in the breakdown of a nutrient is income.**",
      cn: "被释放出来的电子和质子无法独立存在，所以一个氧化过程总是与另一物质的还原相偶联 —— 这就是为什么整件事被称作「氧化还原过程」，而不是「氧化」。氧化是放能过程，它把化合物转变为 Gibbs 自由能更低的产物，也就是更稳定的代谢物，尽管它们的熵比起始物质更高。**还原则相应地是吸能过程 —— 所以生物合成里每一个还原步骤都是一张账单，而分解养分时每一个氧化步骤都是一笔收入。**",
      src: "B §6.2.1, p.134"
    },
    {
      link_en: "each such system can be given a number, and one equation produces it",
      link_cn: "每一个这样的体系都可以给出一个数字，而算出它的只有一个方程",
      en: "An oxidation-reduction system is characterised by its oxidation-reduction potential, usually shortened to redox potential, and its value is given by the well-known relation of Nernst and Peterson: E equals E°' plus RT over nF, times the natural logarithm of the concentration of the oxidised form divided by that of the reduced form. R is the gas constant, T the absolute temperature, n the number of electrons transferred and F the Faraday constant. **The potential of a couple therefore moves with the ratio of its two forms, so a number quoted for a couple is a standard value and the actual one shifts as the cell shifts that ratio.**",
      cn: "一个氧化还原体系由它的氧化还原电位（redox potential）来表征，其数值由著名的能斯特与彼得斯关系式给出：E 等于 E°′ 加上 RT 除以 nF，再乘以「氧化态浓度除以还原态浓度」的自然对数。其中 R 是气体常数，T 是绝对温度，n 是转移的电子数，F 是法拉第常数。**因此一个电对的电位会随它两种形式的比值而移动 —— 所以为某个电对引用的那个数字是标准值，而实际值会随着细胞改变这个比值而变。**",
      src: "B §6.2.1, p.134"
    },
    {
      link_en: "fifteen of these systems, in order, are the whole periodic table of biological electron traffic",
      link_cn: "十五个这样的体系按顺序排下来，就是生物电子交通的整张周期表",
      en: "Fifteen biologically significant oxidation-reduction systems are ordered by increasing standard redox potential, in volts: acetaldehyde over acetate at −0.60; hydrogen over two protons at −0.42; isocitrate over 2-oxoglutarate plus carbon dioxide at −0.38; reduced over oxidised glutathione at −0.34; NADH plus a proton over NAD+ at −0.32; glyceraldehyde 3-phosphate plus phosphoric acid over 1,3-bisphosphoglycerate at −0.28; FADH2 over FAD at −0.20; lactate over pyruvate at −0.19; malate over oxaloacetate at −0.17; cytochrome b, the iron-carrying electron-transfer protein, at 0.00; succinate over fumarate at +0.03; dihydroubiquinone over ubiquinone at +0.10; cytochrome c at +0.26; hydrogen peroxide over oxygen at +0.29; and water over half a molecule of oxygen at +0.82. **The span from the top of that list to the bottom is 1.42 volts, and oxygen sits at the bottom of it, which is why oxygen is the terminal acceptor and not merely a convenient one.**",
      cn: "十五个具有生物学意义的氧化还原体系，按标准氧化还原电位递增排列，单位伏特：乙醛/乙酸盐 −0.60；氢/两个质子 −0.42；异柠檬酸/2-氧戊二酸加二氧化碳 −0.38；还原型/氧化型谷胱甘肽 −0.34；NADH 加质子/NAD⁺ −0.32；甘油醛-3-磷酸加磷酸/1,3-二磷酸甘油酸 −0.28；FADH₂/FAD −0.20；乳酸/丙酮酸 −0.19；苹果酸/草酰乙酸 −0.17；细胞色素 b（那种携带铁的电子传递蛋白）0.00；琥珀酸/延胡索酸 +0.03；二氢泛醌/泛醌 +0.10；细胞色素 c +0.26；过氧化氢/氧 +0.29；水/半分子氧 +0.82。**这张表从头到尾的跨度是 1.42 伏，而氧坐在最底下 —— 这正是氧之所以是终端受体、而不只是一个顺手的受体的原因。**",
      src: "B §6.2.1, p.135, Tab. 6.2"
    },
    {
      link_en: "and one rule says which way anything in that column moves",
      link_cn: "而有一条规则，决定了这一列里的任何东西朝哪边走",
      en: "For the systems in that table, electrons pass spontaneously from the system with the more negative redox potential, which is the reducing agent, to the system with the more positive one, which is the oxidising agent — that is, reading down the table. **That direction is the exergonic one and the reverse direction is endergonic, so the entire logic of the respiratory chain is settled before a single protein complex has been named.**",
      cn: "对这张表中的各个体系而言，电子会自发地从电位更负的体系（也就是还原剂）流向电位更正的体系（也就是氧化剂）—— 也就是沿着表格往下读的方向。**这个方向是放能的，反方向则是吸能的 —— 所以在还没点到任何一个蛋白复合物的名字之前，整条呼吸链的逻辑就已经定下来了。**",
      src: "B §6.2.1, p.135",
      see: [{ id: "6-2-4-1", en: "the respiratory chain itself, complex by complex", cn: "呼吸链本身 —— 一个复合物一个复合物地看" }]
    },
    {
      link_en: "those volts can be converted into energy, with one asymmetry between the two scales",
      link_cn: "这些伏特可以换算成能量，但两把标尺之间有一处不对称",
      en: "A parallel axis of standard Gibbs energy values can be laid alongside the redox-potential axis, and the conversion between them is that the standard Gibbs energy change equals minus n times F times the change in standard redox potential, where n is the number of electrons moved and F the Faraday constant. The zero point of the potential scale is fixed by convention at the standard hydrogen electrode, at 0 mV classically; in biological systems, at pH 7, that same electrode instead sits at −420 mV, which is exactly where the hydrogen couple appears in the table above. **The Gibbs energy axis has no fixed starting point of its own, so a value can only ever be assigned to a difference of potentials and never to one potential alone.**",
      cn: "可以在氧化还原电位轴旁边再配一条平行的标准 Gibbs 自由能轴，两者之间的换算是：标准 Gibbs 自由能变化等于负的 n 乘以 F 再乘以标准氧化还原电位之差，其中 n 是被转移的电子数，F 是法拉第常数。电位标度的零点由惯例固定在标准氢电极上，经典约定下是 0 mV；而在生物系统中、pH 7 时，同一个电极却位于 −420 mV —— 这恰好就是氢电对在上面那张表中出现的位置。**Gibbs 自由能这条轴本身没有固定的起点，所以数值只能赋给电位之差，永远不能赋给单独一个电位。**",
      src: "B §6.2.1, p.135"
    },
    {
      link_en: "and here is what those differences add up to, on four real nutrients",
      link_cn: "而在四种真实的养分上，这些差值加起来是多少",
      en: "Organisms obtain energy by oxidatively cleaving nutrients down to low-energy end products, and four summary equations carry their standard Gibbs energy changes. Glucose fermented anaerobically to two molecules of lactic acid gives −196.6 kJ per mole. The same glucose burned aerobically, with six oxygen molecules to six carbon dioxide and six water, gives −2870. Palmitic acid, a sixteen-carbon fatty acid, with twenty-three oxygen molecules to sixteen carbon dioxide and sixteen water, gives −11340. Alanine, an amino acid, with three oxygen molecules to three carbon dioxide, two water and ammonia, gives −1046. **Fermenting a glucose recovers under a fifteenth of what burning it does, which is the whole argument for keeping oxygen at the end of the chain.**",
      cn: "生物体通过把养分氧化裂解为低能终产物来取得能量；四个总反应式各带着自己的标准 Gibbs 自由能变化。葡萄糖在无氧条件下发酵成两分子乳酸，−196.6 kJ/mol。同一个葡萄糖在有氧条件下被烧掉，加六个氧分子生成六个二氧化碳和六个水，−2870。棕榈酸（一种十六碳的脂肪酸）加二十三个氧分子生成十六个二氧化碳和十六个水，−11340。丙氨酸（一种氨基酸）加三个氧分子生成三个二氧化碳、两个水和氨，−1046。**把一个葡萄糖发酵掉，回收到的还不到把它烧掉所得的十五分之一 —— 这就是「把氧留在链条末端」的全部理由。**",
      src: "B §6.2.1, p.135"
    },
    {
      link_en: "so the energy on offer is enormous, and that raises the last problem",
      link_cn: "可见能拿到的能量极其可观，而这带出最后一个问题",
      recall_en: "the quantum from the ATP chain, now seen from the supply side",
      recall_cn: "ATP 那条链里说的「量子」，现在从供给一侧再看一遍",
      en: "The theoretically obtainable quantity of Gibbs energy is therefore very large. An organism, however, can capture and use energy only in certain quanta, meaning in fixed small doses rather than in one lump, and the running text breaks off at the page's edge before naming the order of magnitude. **The dose is ATP's own −30.5 kJ per mole, so burning a glucose completely is not one payment of 2870 but roughly thirty separate ones, each the size of a single phosphoanhydride bond.**",
      cn: "由此看来，理论上可获得的 Gibbs 自由能相当可观。然而生物体只能以一定的「量子」来捕获和利用能量 —— 也就是以固定的小剂量、而不是一整块地取用；而正文在这一页的末尾断在了半句上，没有说出这个量级。**这个剂量就是 ATP 自己的 −30.5 kJ/mol —— 所以把一个葡萄糖完全烧掉，不是一次付清 2870，而是大约三十次分开的支付，每一次都只有一根磷酸酐键那么大。**",
      src: "B §6.2.1, p.135 · B §6.1.2, p.133, Tab. 6.1",
      beyond: true,
      beyondNote: "p.135 ends mid-sentence, at 'the organism can only capture and use energy in certain quanta, of an order of magnitude' — the number that completes it is on p.136, outside this node. The −30.5 kJ/mol identified here as that quantum is the book's own word and figure from §6.1.2 (Tab. 6.1 and its conclusion b), carried across rather than read off pp.134–135; the arithmetic of roughly thirty doses is a bridging statement.",
      see: [{ id: "6-1-2-2", en: "where the quantum is named and measured", cn: "「量子」这个说法是在哪里被点名和量出来的" }]
    }
  ]
};

/* ------------------------------------------------ 中间代谢的枢纽 ---- */
window.BIOLITE_SPINE["key:intermediary-metabolism-hub"] = {
  assumed: ["cell", "organism", "enzyme", "coenzyme", "cofactor", "substrate",
            "molecule", "carbon", "hydrogen", "oxygen", "nitrogen", "electron",
            "carbon dioxide", "water", "acetyl-CoA", "coenzyme A", "acetyl group",
            "acetic acid", "citrate", "isocitrate", "succinate", "succinyl-CoA",
            "fumarate", "malate", "oxaloacetate", "pyruvate", "citric acid cycle",
            "glycolysis", "NAD+", "NADH", "FAD", "FADH2", "ATP", "ADP", "GTP",
            "phosphate", "inorganic phosphate", "manganese", "biotin", "vitamin",
            "amino acid", "glutamate", "glycine", "tyrosine", "aspartate",
            "amino group", "transamination", "porphyrin", "heme", "chlorophyll",
            "mitochondrion", "mitochondria", "membrane", "respiratory chain",
            "oxidation", "reduction", "dehydrogenation", "decarboxylation",
            "biosynthesis", "catabolism", "anabolism", "metabolism", "metabolite",
            "precursor", "intermediate", "energy", "free energy", "gibbs energy",
            "carboxylase", "kinase", "fatty acid", "lipid", "protein", "glucose"],
  nodeTitle_en: "The citrate cycle as a hub: what it hands out, and what has to be paid back",
  nodeTitle_cn: "柠檬酸循环作为枢纽：它发出去什么，又必须补回什么",
  title_en: "One high-energy phosphate made directly, four reduced coenzymes handed to another machine, four exits for biosynthesis, and one reaction whose only job is keeping the cycle solvent",
  title_cn: "直接做出来的高能磷酸只有一个、四个还原型辅酶交给另一台机器、四个通向生物合成的出口，以及一个唯一任务就是让循环不破产的反应",
  terms: [
    { en: "amphibolic pathway", cn: "两性途径",
      def_en: "A pathway serving catabolism and anabolism at once. The citrate cycle is the classic case: it oxidises an acetyl group for energy and at the same time exports 2-oxoglutarate, oxaloacetate, succinyl-CoA and fumarate for biosynthesis.",
      def_cn: "同时服务于分解代谢与合成代谢的途径。柠檬酸循环是经典案例：它一边把乙酰基氧化取能，一边又输出 2-氧戊二酸、草酰乙酸、琥珀酰辅酶 A 和延胡索酸供生物合成之用。" },
    { en: "anaplerotic reaction", cn: "回补反应",
      def_en: "A replenishing reaction that puts back a citrate-cycle intermediate drained away by biosynthesis, so the cycle can keep running without interruption. The original word for them is doplňovací, filling-up.",
      def_cn: "把被生物合成抽走的柠檬酸循环中间产物补回去的反应，使循环得以不间断地运转。原文里给它们的词是 doplňovací，意即「填补性的」。" },
    { en: "delta-aminolevulate", cn: "δ-氨基乙酰丙酸",
      def_en: "The compound formed when succinyl-CoA reacts with the amino acid glycine. It is the precursor from which porphyrins are built, and porphyrins are the ring compounds at the centre of heme and of chlorophyll.",
      def_cn: "琥珀酰辅酶 A 与氨基酸甘氨酸反应所生成的化合物。它是卟啉赖以建成的前体，而卟啉正是血红素与叶绿素正中央的那类环状化合物。" },
    { en: "pyruvate carboxylase", cn: "丙酮酸羧化酶",
      def_en: "The enzyme forming oxaloacetate directly from pyruvate and carbon dioxide, requiring ATP, manganese ions and the coenzyme biotin. It is named as the most important replenishing reaction of the citrate cycle.",
      def_cn: "直接由丙酮酸与二氧化碳生成草酰乙酸的酶，需要 ATP、锰离子和辅酶生物素。教材点名它是柠檬酸循环最重要的回补反应。" }
  ],
  steps: [
    {
      en: "In the citrate cycle the residues of acetic acid, which are the acetyl groups, are oxidised all the way up to carbon dioxide, and the hydrogen atoms taken off them are used for the reduction of coenzymes, meaning the small helper molecules that carry electrons away from a reaction. **Carbon leaves as a gas and hydrogen leaves on carriers, so the cycle produces one waste product and one export, and only the export is worth anything downstream.**",
      cn: "在柠檬酸循环中，乙酸的残基（也就是乙酰基）被一路氧化到二氧化碳，而从它们身上摘下来的氢原子，则用于还原辅酶 —— 所谓辅酶，就是把电子从一个反应带走的那些小的辅助分子。**碳以气体的形式离开，氢则搭着载体离开；所以这个循环产出的是一样废物加一样出口货，而在下游值钱的只有那样出口货。**",
      src: "B §10.1.4, p.220"
    },
    {
      link_en: "and it begins by joining the two-carbon piece to a four-carbon one",
      link_cn: "而它的开头，是把那个两碳的片段接到一个四碳的分子上",
      en: "In the first step acetyl-CoA binds to oxaloacetate and citrate arises. Citrate is a six-carbon compound, and in the course of one turn of the cycle it is decarboxylated twice, meaning that carbon dioxide is split off from it on two separate occasions. **Two carbons come in on acetyl-CoA and two leave as carbon dioxide, so the cycle returns exactly where it started, which is what makes a cycle the right shape for the job.**",
      cn: "第一步，乙酰辅酶 A 与草酰乙酸结合，生成柠檬酸。柠檬酸是一个六碳化合物，而在循环转一圈的过程中，它被脱羧两次 —— 也就是在两个不同的时刻，各有一分子二氧化碳从它身上被劈下来。**两个碳随乙酰辅酶 A 进来，两个碳作为二氧化碳出去，于是循环准确地回到起点 —— 这正是「循环」而非「链条」才是这份工作正确形状的原因。**",
      src: "B §10.1.4, p.220"
    },
    {
      link_en: "the reduced coenzymes are the point of the whole thing, and they can be counted",
      link_cn: "还原型辅酶才是整件事的重点，而它们是可以数清楚的",
      en: "In one turn there arise one FADH2 and three NADH. The FADH2 comes from the dehydrogenation of succinate to fumarate, and the three NADH come from the oxidative conversions of isocitrate, of 2-oxoglutarate and of malate. **Naming the four substrates is what makes the tally memorable rather than arbitrary, since each number is attached to a step that can be pointed at on the circle.**",
      cn: "每转一圈，产生一个 FADH₂ 和三个 NADH。FADH₂ 来自琥珀酸脱氢生成延胡索酸这一步；三个 NADH 分别来自异柠檬酸、2-氧戊二酸和苹果酸的氧化转变。**把这四个底物点出名字，才使这个计数可记而不武断 —— 因为每一个数字都拴在圆圈上某个可以用手指出来的步骤上。**",
      src: "B §10.1.4, p.220"
    },
    {
      link_en: "and exactly one high-energy phosphate is made inside the cycle itself",
      link_cn: "而在循环内部直接做出来的高能磷酸，恰好只有一个",
      en: "One macroergic compound is also formed in the cycle, and it is GTP, made during the oxidative decarboxylation of 2-oxoglutarate. A macroergic compound is one whose hydrolysis releases a large amount of Gibbs energy, in the range that makes it usable currency. **GTP is the only high-energy phosphate the cycle produces directly, so counting the cycle's yield by ATP alone gives one per turn and misses where almost all of the energy actually went.**",
      cn: "循环内部还生成了一个高能化合物，那就是 GTP，产生于 2-氧戊二酸的氧化脱羧过程中。所谓高能化合物，指的是水解时释放大量 Gibbs 自由能、多到足以充当可用货币的那类化合物。**GTP 是这个循环直接产出的唯一一个高能磷酸 —— 所以若只按 ATP 来数它的产量，一圈只得一个，而几乎全部能量到底去了哪里也就被漏掉了。**",
      src: "B §10.1.4, p.220"
    },
    {
      link_en: "so where did the rest of it go?",
      link_cn: "那么，其余那些去哪儿了？",
      recall_en: "the four reduced coenzymes counted two steps up are the answer",
      recall_cn: "答案就是上面第二步数出来的那四个还原型辅酶",
      en: "The conversion of the main share of the energy contained in acetyl-CoA takes place in the respiratory chain, during the reoxidation of the reduced coenzymes NADH and FADH2, and that sequence of oxidation-reduction reactions is connected with what the book calls aerobic phosphorylation, meaning the synthesis of ATP coupled to those reactions. **The cycle is a supplier and the respiratory chain is the machine, so the cycle's real output is four loaded electron carriers and one GTP rather than a quantity of ATP.**",
      cn: "乙酰辅酶 A 所含能量的主要份额，其真正的转换并不发生在循环内部，而是在呼吸链中，即还原型辅酶 NADH 与 FADH₂ 被重新氧化的过程中；而这一系列氧化还原反应与教材所称的「需氧磷酸化」相连 —— 也就是与这些反应相偶联的 ATP 合成。**循环是供货方，呼吸链才是机器；所以循环真正的产出，是四个装满了的电子载体加一个 GTP，而不是若干个 ATP。**",
      src: "B §10.1.4, pp.220–221",
      see: [{ id: "6-2-4-1", en: "the respiratory chain reoxidising those carriers", cn: "呼吸链怎样把这些载体重新氧化" }]
    },
    {
      link_en: "two qualifications come with that partnership",
      link_cn: "这份伙伴关系带着两条限定",
      en: "The respiratory chain also reoxidises reduced coenzymes originating from other reactions, so the citrate cycle is their most significant supplier and not their only one. And the two processes are moreover localised in close proximity within the mitochondria, the organelles in which both of them run. **A reduced coenzyme sits at low concentration and has to be handed over quickly, so the distance between where it is loaded and where it is emptied is part of the design.**",
      cn: "呼吸链也会重新氧化来自其他反应的还原型辅酶，所以柠檬酸循环是它们最重要的供应者，而不是唯一的供应者。而且这两个过程在线粒体（也就是两者都在其中运行的那种细胞器）内部彼此紧邻地定位着。**「紧邻」不是一句装饰性的话：还原型辅酶浓度很低、必须被迅速交出去，所以「装货的地方」与「卸货的地方」之间的距离，本身就是设计的一部分。**",
      src: "B §10.1.4, pp.220–221"
    },
    {
      link_en: "and the cycle is not purely catabolic. Four of its intermediates leave it for good",
      link_cn: "而这个循环并不是纯粹分解性的 —— 它有四个中间产物是一去不回的",
      en: "The cycle can also serve as a source of intermediates for synthetic reactions, and four exits are named. 2-Oxoglutarate and oxaloacetate are converted by transamination reactions into amino acids, transamination being the handing over of an amino group from one carbon skeleton to another; 2-oxoglutarate taking one becomes glutamate. Succinyl-CoA, reacting with the amino acid glycine, provides delta-aminolevulate, from which porphyrins are formed, and porphyrins are the ring compounds at the heart of heme and of chlorophyll. And through fumarate the cycle is connected with the metabolism of the amino acids tyrosine and aspartic acid. **A pathway serving catabolism and anabolism at once is called amphibolic, and this cycle is the standard case of one.**",
      cn: "这个循环还可以充当合成反应的中间产物来源，教材点了四个出口。2-氧戊二酸和草酰乙酸经转氨反应转变为氨基酸 —— 所谓转氨（transamination），就是把一个氨基从一个碳骨架交给另一个碳骨架；2-氧戊二酸接过一个氨基，就成了谷氨酸。琥珀酰辅酶 A 与氨基酸甘氨酸反应，提供 δ-氨基乙酰丙酸，再由它生成卟啉；而卟啉正是血红素与叶绿素核心处的那类环状化合物。此外，通过延胡索酸，这个循环与氨基酸酪氨酸和天冬氨酸的代谢相连。**同时服务于分解代谢与合成代谢的途径叫作 amphibolic（两性途径），而这个循环就是它的标准案例。**",
      src: "B §10.1.4, p.221 · B §6.2.2, p.140"
    },
    {
      link_en: "four exits and no new entrance is an arrangement that cannot last",
      link_cn: "四个出口、却没有新的入口 —— 这种安排撑不下去",
      recall_en: "the first step needs oxaloacetate, and oxaloacetate is one of the four things being carried away",
      recall_cn: "第一步需要草酰乙酸，而草酰乙酸正是被搬走的那四样东西之一",
      en: "Withdrawing any metabolite from the cycle for those biosyntheses can progressively let the amount of oxaloacetate, the starting substance the first step consumes, fall below a workable level, which threatens the cycle's continued operation. The reason it is oxaloacetate that runs short even when something else is the thing removed is that the intermediates convert into one another around the circle, so a drain anywhere lowers the whole ring. **A cycle can only keep turning while its starting compound is present, so exporting material out of a closed loop is a debt that has to be settled somewhere else.**",
      cn: "为了那些生物合成而从循环中抽走任何一种代谢物，都可能使草酰乙酸（也就是第一步所消耗的那个起始物质）的数量逐渐下降到难以维持的水平，从而威胁循环的持续运转。之所以被抽走的哪怕是别的东西、短缺的却是草酰乙酸，是因为这些中间产物沿着圆圈彼此互相转化，所以任何一处的泄漏都会把整个环的水位拉低。**一个循环只有在它的起始化合物还在场时才转得动 —— 所以从一个闭环里往外运货，是一笔必须在别处结清的债。**",
      src: "B §6.2.2, p.140"
    },
    {
      link_en: "so the cell keeps a class of reactions whose only job is settling that debt",
      link_cn: "于是细胞专门留了一类反应，它们唯一的工作就是结清这笔债",
      en: "To ensure the citrate cycle's uninterrupted operation, replenishing reactions are needed — doplňovací in the original, meaning filling-up — and the name given to them is anaplerotic reactions. **An anaplerotic reaction adds an intermediate from outside the cycle, because no step of the circle itself can raise the total amount of material going round it.**",
      cn: "为保证柠檬酸循环不间断地运转，需要补充性的反应 —— 原文里的词是 doplňovací，意思是「填补性的」—— 而给它们的名字是 anaplerotic reactions（回补反应）。**回补反应是从循环之外补进一个中间产物，因为圆圈自身的任何一步，都无法提高在圈里转着的物质总量。**",
      src: "B §6.2.2, p.140"
    },
    {
      link_en: "and one of them matters more than the rest",
      link_cn: "而其中有一个比其余都重要",
      en: "The most important anaplerotic reaction is catalysed by pyruvate carboxylase. It forms oxaloacetate directly from pyruvate and carbon dioxide, and it requires ATP, manganese ions and the coenzyme biotin, which is the vitamin-derived helper that carbon dioxide is attached to before being handed on. The equation is pyruvate plus carbon dioxide plus ATP plus water giving oxaloacetate plus ADP plus Pi. **Topping the cycle back up costs one ATP each time, so the price of using the cycle as a supply depot is paid in the same currency the cycle exists to earn.**",
      cn: "最重要的回补反应由丙酮酸羧化酶催化。它直接由丙酮酸与二氧化碳生成草酰乙酸，需要 ATP、锰离子和辅酶生物素 —— 生物素是那种由维生素衍生而来的帮手，二氧化碳先挂在它身上，然后才被交出去。反应式是：丙酮酸 + 二氧化碳 + ATP + 水 → 草酰乙酸 + ADP + Pi。**每把循环补满一次就要花掉一个 ATP —— 所以「把循环当补给站用」的代价，付的正是这个循环存在着要去挣的那种货币。**",
      src: "B §6.2.2, p.140"
    }
  ]
};

