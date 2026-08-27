/* Spines for chapters 13-15 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.
   House rules in biochemie_lite/SPINE_SPEC.md; the linter is tools/check-spine.py.

   L-13-2-1 and L-13-3-1 are the conceptual floor under the whole metabolism half:
   the five reaction types, and what ATP actually does. Later chapters point back
   at them. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ L-13-2-1 */
window.BIOLITE_SPINE["L-13-2-1"] = {
  assumed: ["glycolysis", "cholesterol", "chymotrypsin", "glycogen", "ketone body",
            "vitamin", "folate", "nicotinamide", "lactate", "pyruvate", "glucose",
            "ATP", "ADP", "NAD+", "amino acid", "enzyme", "substrate", "catalysis",
            "activation energy", "metabolism", "acetyl-CoA", "heme", "DNA"],
  nodeTitle_en: "The chemical logic under the pathways",
  nodeTitle_cn: "藏在代谢通路底下的化学逻辑",
  title_en: "Five reaction types instead of a thousand reactions — and the one unstable ion that shapes most of them",
  title_cn: "用五类反应代替上千个反应 —— 以及那个塑造了大半化学的不稳定离子",
  steps: [
    {
      en: "A typical cell runs thousands of different enzyme-catalysed reactions, and almost all of them fall into five classes: reactions that make or break carbon-carbon bonds; internal rearrangements, isomerizations and eliminations; free-radical reactions; group transfers; and oxidation-reductions. The five overlap on purpose — an isomerization can run through a free-radical intermediate — so they are five lenses to look through, not five boxes to sort into. **The payoff is that you learn the chemistry five times instead of learning a thousand reactions once each.**",
      cn: "一个典型细胞能进行上千个不同的酶催化反应，而它们几乎全部落进五类里：生成或断裂碳-碳键的反应；分子内重排、异构化与消除；自由基反应；基团转移；氧化还原。这五类是故意互相重叠的 —— 一个异构化反应可以经由自由基中间体进行 —— 所以它们是五副用来看的镜片，不是五个用来分装的盒子。**好处在于：你把这套化学学五遍，就不用把上千个反应各学一遍。**",
      src: "A p.472, §13.2"
    },
    {
      link_en: "and which reactions get into that set at all",
      link_cn: "那么，究竟哪些反应能进这个集合",
      en: "Two filters decide it. Relevance: the reaction has to start from a substrate the cell actually holds and end at a product the cell actually wants. Rate: a reaction can be chemically sensible and metabolically useful and still never happen, because its activation energy is too high for any enzyme to bring down far enough. What survives both filters is a toolbox, and evolution built the pathways out of that toolbox. **A metabolic pathway therefore runs along the shortest route through reactions that are fast enough to exist, and detours around the chemically shorter routes that are not.**",
      cn: "由两道过滤器决定。第一道是相关性：这个反应必须从细胞手头真有的底物出发，终点是细胞真的想要的产物。第二道是速率：一个反应可以在化学上说得通、在代谢上也有用，却依然永远不发生 —— 因为它的活化能太高，任何酶都降不到位。同时通过这两道过滤器的那些反应构成一套工具箱，演化就是用这套工具箱搭出通路的。**所以一条代谢通路走的，是「在快到足以存在的那些反应里」最短的一条路线；那些化学上更短、但走不动的路线，它绕开。**",
      src: "A p.472, §13.2"
    },
    {
      link_en: "before any mechanism: how a bond comes apart, and who attacks whom",
      link_cn: "在讲任何机制之前，先说清两件事：键怎么断，以及谁进攻谁",
      en: "A covalent bond is one shared pair of electrons, and it comes apart in exactly two ways. In homolytic cleavage the pair splits evenly and each atom leaves carrying one unpaired electron, which gives carbon radicals or neutral hydrogen atoms. In heterolytic cleavage, which is the commoner one, one atom walks off with both electrons; the possible products are a carbanion — a carbon holding a lone pair and a negative charge — a carbocation, a carbon short of that pair and positively charged, a proton, and a hydride ion, a hydrogen that takes both electrons with it. **Carbanion, carbocation and hydride ion are all highly unstable, and coping with that instability is what every mechanism below is for.** The vocabulary for coping is one pair of words: a nucleophile is a group rich in electrons and able to donate them, an electrophile is a group short of electrons and looking for them, and a reaction is a nucleophile handing electrons to an electrophile. A carbon atom is neither of those by nature — it plays whichever role the bonds and functional groups around it push it into.",
      cn: "一根共价键是一对共享电子，它只有两种断法。均裂（homolytic cleavage）：电子对平分，每个原子各带走一个未成对电子，得到碳自由基或不带电的氢原子。异裂（heterolytic cleavage）是更常见的那一种：一个原子把两个电子全带走；可能的产物有 carbanion —— 一个带着孤对电子和负电荷的碳；carbocation —— 一个少了这对电子、带正电的碳；一个质子；以及 hydride（氢负离子） —— 一个把两个电子一起带走的氢。**carbanion、carbocation 和 hydride 三者都极不稳定，而下面所有的机制，存在的理由就是应付这份不稳定。**应付它所需的词汇只有一对：亲核体（nucleophile）是富电子、能把电子给出去的基团；亲电体（electrophile）是缺电子、正在找电子的基团；一个反应就是亲核体把电子交给亲电体。碳原子本身两者都不是 —— 它周围的键和官能团把它推向哪个角色，它就演哪个。",
      src: "A p.472–473, §13.2, Fig. 13-1, 13-2"
    },
    {
      link_en: "now the first class, and the one that carries the rest",
      link_cn: "现在进第一类 —— 也是撑起其余部分的那一类",
      en: "Breaking a carbon-carbon bond heterolytically means producing a carbanion and a carbocation; making one means bringing a nucleophilic carbanion together with an electrophilic carbocation. Both of those ions are so unstable that generating them as reaction intermediates can be energetically out of reach even with an enzyme catalyst. For a cell, reactions that would need a bare carbanion or a bare carbocation are impossible reactions. **Every carbon-carbon bond your body makes or breaks therefore needs chemical help from a neighbouring part of the same molecule.**",
      cn: "把一根碳-碳键异裂，意味着要造出一个 carbanion 和一个 carbocation；反过来，形成一根碳-碳键，意味着要让一个亲核的 carbanion 和一个亲电的 carbocation 碰到一起。而这两种离子太不稳定了，把它们作为反应中间体生成，即使有酶催化剂也可能在能量上根本够不着。对细胞来说，需要一个「裸」carbanion 或「裸」carbocation 的反应，就是不可能的反应。**所以你身上每一根被生成或被断开的碳-碳键，都需要来自同一分子邻近部位的化学援助。**",
      src: "A p.473, §13.2"
    },
    {
      link_en: "and this is what the help is",
      link_cn: "这份援助具体是什么",
      en: "The help comes from a neighbouring group containing an electronegative atom, O or N, which rewrites the electron structure of the carbon next to it. The workhorse is the carbonyl group, a carbon double-bonded to an oxygen (C=O), and it does two jobs at once. Its own carbon is electrophilic, because the oxygen pulls electron density away and leaves that carbon partly positive. And it absorbs the negative charge of a carbanion on the adjoining carbon, spreading that charge onto itself, which is the only reason such a carbanion can form at all. A carbonyl group is an electron sink. **That one fact is why so much of metabolism is carbonyl chemistry: entire pathways are organised around getting a carbonyl into a particular position, so that one particular carbon-carbon bond becomes formable or breakable.**",
      cn: "援助来自一个含有电负性原子（O 或 N）的邻近基团 —— 它改写了旁边那个碳的电子结构。主力是 carbonyl（羰基），也就是一个与氧双键相连的碳（C=O），它一次干两件事。第一，它自己的碳是亲电的 —— 氧把电子密度拉走，这个碳就带上了部分正电荷。第二，它把相邻碳上 carbanion 的负电荷吸收过来、摊到自己身上 —— 而这正是那个 carbanion 之所以能够形成的唯一原因。**carbonyl 就是一个「电子槽」。仅凭这一件事，代谢里才有那么多化学是围着 carbonyl 转的：整条整条的通路，就是为了把一个 carbonyl 送到某个特定位置上，好让某一根特定的碳-碳键变得可生成、可断裂。**",
      src: "A p.473, §13.2, Fig. 13-3"
    },
    {
      link_en: "three reaction types drop straight out of that one property",
      link_cn: "三类反应直接从这一个性质里长出来",
      recall_en: "in each one, the electron sink from the step above is doing the work",
      recall_cn: "这三类里，干活的都是上一步那个电子槽",
      en: "**In all three, a carbanion intermediate is stabilised by a carbonyl, and very often a second carbonyl supplies the electrophile that carbanion attacks.** Aldol condensation: a carbanion attacks a carbonyl carbon — the aldolase step of glycolysis, which cuts a six-carbon sugar into two three-carbon pieces, is this reaction run backwards. Claisen ester condensation: the carbanion is held by the carbonyl of an adjacent thioester, which is a carboxylic acid joined through a sulfur instead of an oxygen — the synthesis of citrate from acetyl-CoA is the case, and acetyl-CoA is exactly such a thioester. Decarboxylation of a β-keto acid: CO2 leaves and abandons a carbanion on the carbon it departed from, which would not form at any usable rate without a carbonyl standing beside it — acetoacetate decarboxylase, in the making of ketone bodies out of fat, is the example.",
      cn: "**这三类里，每一类都有一个 carbanion 中间体被 carbonyl 稳定住，而且常常由第二个 carbonyl 提供那个 carbanion 去进攻的亲电体。**aldol condensation（羟醛缩合）：carbanion 去进攻一个 carbonyl 碳 —— 糖酵解里把六碳糖切成两个三碳片段的 aldolase 那一步，就是这个反应反着走。Claisen ester condensation（克莱森酯缩合）：carbanion 由相邻 thioester（硫酯）的 carbonyl 稳定，而所谓 thioester，就是羧酸通过一个硫、而非氧连接起来的形式 —— 例子是由 acetyl-CoA 合成柠檬酸，acetyl-CoA 正是这样一个 thioester。β-酮酸的脱羧（decarboxylation）：CO₂ 离开，在它原本所在的那个碳上丢下一个 carbanion —— 若非旁边站着一个 carbonyl，这个反应不会以任何可用的速率进行 —— 例子是由脂肪生成酮体时的 acetoacetate decarboxylase。",
      src: "A p.473–474, §13.2, Fig. 13-4",
      see: [
        { id: "L-16-2-1", en: "citrate synthase, where the Claisen condensation is run in full", cn: "柠檬酸合酶 —— Claisen 缩合的完整机制" },
        { id: "L-17-2-1", en: "where the ketone bodies come from", cn: "酮体是从哪里来的" }
      ]
    },
    {
      link_en: "understudies for the carbonyl, and ways to make it hungrier",
      link_cn: "carbonyl 的替补，以及把它调得更「饿」的办法",
      en: "Where no carbonyl is available, an imine — a carbon double-bonded to a nitrogen, C=N — takes over the same electron-withdrawing job, and so does a specialised cofactor, most often pyridoxal phosphate, the vitamin-B6-derived helper that sits at the centre of amino acid metabolism. In the other direction, the pull of a carbonyl can be strengthened: a metal ion such as Mg2+ resting on its oxygen, or a general acid — an enzyme side chain that donates a proton at the moment it is needed — makes it a better sink, which is where this chemistry meets the inside of an enzyme's active site. Cofactors also give you a second way to index all of this: coenzymes and metal ions — pyridoxal phosphate, vitamin B12, S-adenosylmethionine, folate, nicotinamide, Fe2+ — each take part in a narrow band of mechanistically related reactions, so **a reaction can be looked up by its type or by its cofactor, and the two indexes check each other.**",
      cn: "在没有 carbonyl 可用的地方，imine（亚胺，一个与氮双键相连的碳，C=N）接手同一份抽电子的工作；专门的辅因子也可以，最常见的是 pyridoxal phosphate（磷酸吡哆醛，PLP） —— 来自维生素 B₆ 的那个帮手，坐在氨基酸代谢的正中央。反方向上，carbonyl 的拉力也可以被加强：一个金属离子（例如 Mg²⁺）压在它的氧上，或者一个 general acid（广义酸）—— 也就是酶上某个在需要的那一刻递出质子的侧链 —— 都能把它变成一个更好的电子槽。这正是这套化学与酶活性位点内部接头的地方。辅因子还给了你索引这一切的第二种方式：辅酶与金属离子 —— PLP、维生素 B₁₂、S-腺苷甲硫氨酸、叶酸、烟酰胺、Fe²⁺ —— 每一种都只参与一小撮机制上彼此相关的反应，**所以一个反应既可以按类型查，也可以按辅因子查，两套索引还能互相校验。**",
      src: "A p.474, 478, §13.2",
      see: [{ id: "L-18-1-1", en: "pyridoxal phosphate at work, in transamination", cn: "PLP 在转氨基反应里的实际工作" }]
    },
    {
      link_en: "the carbanion route needs a carbonyl. The carbocation route does not",
      link_cn: "carbanion 路线需要 carbonyl；carbocation 路线不需要",
      en: "**The carbocation route works by a different trick: eliminate a group that departs so willingly that the positive charge left behind becomes affordable.** Such a group is called a good leaving group, and the standard one is pyrophosphate (PPi) — two phosphate groups joined end to end. In the prenyltransferase step early in cholesterol synthesis, PPi is thrown off dimethylallyl pyrophosphate; the carbocation left behind is spread out over an adjacent C=C bond, and it then condenses with isopentenyl pyrophosphate to give geranyl pyrophosphate.",
      cn: "**carbocation 路线靠的是另一个把戏：消去一个「走得极其痛快」的基团，痛快到留下的那个正电荷变得负担得起。**这样的基团叫 good leaving group（好的离去基团），标准的那个是 pyrophosphate（焦磷酸，PPi） —— 两个磷酸基团首尾相连。在胆固醇合成早期的 prenyltransferase 那一步，PPi 从 dimethylallyl pyrophosphate 上被甩掉；留下的 carbocation 被相邻的一根 C=C 键摊开、稳定住，随后与 isopentenyl pyrophosphate 缩合，生成 geranyl pyrophosphate。",
      src: "A p.474, §13.2, Fig. 13-5"
    },
    {
      link_en: "generalise that, because it is one of the largest ideas in metabolism",
      link_cn: "把这件事一般化 —— 它是代谢里最大的几个观念之一",
      recall_en: "the parallel of the carbonyl three steps up: one trick makes carbanions affordable, this one makes carbocations and substitutions affordable",
      recall_cn: "与上面 carbonyl 那步平行：一个把戏让 carbanion 变得负担得起，这个把戏让 carbocation 和取代反应变得负担得起",
      en: "**To activate a metabolic intermediate means to attach a good leaving group to it.** That is the whole content of the word. Inorganic phosphate (Pi) and pyrophosphate (PPi) are the standard leaving groups, which is why hanging a phosphoryl group onto an otherwise reluctant leaving group such as -OH is what makes a nucleophilic substitution go, and why substitutions in which a phosphoryl group is itself the leaving group turn up in hundreds of metabolic reactions. Thiols — sulfur's version of an alcohol, -SH — are the other family, and they activate carboxylic acids by forming thioesters. So every activated sugar, activated amino acid and activated fatty acid in metabolism means one and the same thing: something has been bolted on that will leave well.",
      cn: "**所谓「活化」一个代谢中间体，就是给它挂上一个好的离去基团。**这个词的全部含义就是这个。无机磷酸（Pi）和焦磷酸（PPi）是标准的离去基团 —— 这正是为什么给一个原本不情不愿的离去基团（例如 -OH）挂上一个磷酰基，亲核取代就跑得动了；也正是为什么「以磷酰基本身作为离去基团」的取代反应，会出现在成百上千个代谢反应里。thiol（硫醇，也就是把醇的氧换成硫，-SH）是另一族，它通过形成 thioester 来活化羧酸。所以代谢里每一个「活化的糖」「活化的氨基酸」「活化的脂肪酸」，说的都是同一件事：有个走得好的东西被拴上去了。",
      src: "A p.475–476, §13.2",
      see: [{ id: "L-13-3-1", en: "ATP doing exactly this, with three different groups", cn: "ATP 正是在做这件事，而且有三种不同的基团" }]
    },
    {
      link_en: "which brings the fourth class, group transfer, and the element that does most of it",
      link_cn: "由此进入第四类 —— 基团转移，以及承担了其中大半工作的那个元素",
      en: "Group transfer means moving an acyl, glycosyl or phosphoryl group from one nucleophile to another, and each of the three has its own geometry. Acyl transfer: the nucleophile adds to the carbonyl carbon, which briefly becomes four-coordinate — a tetrahedral intermediate — and that intermediate then collapses as the leaving group departs; the digestive protease chymotrypsin runs this way. Glycosyl transfer: nucleophilic substitution at C-1 of a sugar ring, the carbon that carries two oxygens and is called an acetal carbon. Phosphoryl transfer is the one to know structurally, because everything ATP does rests on it. **Phosphorus can form five covalent bonds, and that is what makes the mechanism possible.** Inorganic phosphate is a tetrahedron whose four P-O bonds are equivalent, each with some double-bond character; the familiar drawing with one P=O and three P-O is convenient and inaccurate. Oxygen is more electronegative than phosphorus, so the central phosphorus carries a partial positive charge and is an electrophile — that is why a nucleophile attacks it in the first place. When one attacks the phosphorus of ATP, the fifth bond lets a pentacovalent intermediate form and sit there, relatively stable, until the leaving group (ADP) departs. An enzyme that moves a phosphoryl group off ATP is a kinase, from the Greek kinein, to move.",
      cn: "基团转移（group transfer）指的是把一个酰基、糖基或磷酰基从一个亲核体搬到另一个亲核体上，三者各有各的几何。酰基转移：亲核体加到 carbonyl 碳上，这个碳短暂地变成四配位 —— 也就是四面体中间体（tetrahedral intermediate） —— 随后随着离去基团的离开而塌缩；消化道里的蛋白酶 chymotrypsin 走的就是这条路。糖基转移：在糖环的 C-1 上发生亲核取代，那个碳带着两个氧，叫做缩醛（acetal）碳。磷酰基转移是结构上最该弄清的一个，因为 ATP 所做的一切都压在它上面。**磷可以形成五根共价键，这正是整个机制得以成立的前提。**无机磷酸是一个四面体，四根 P-O 键等价，每一根都带一些双键性质；我们熟悉的那种「一根 P=O 加三根 P-O」的画法方便，但不准确。氧的电负性大于磷，所以中心磷带部分正电荷，是一个亲电体 —— 这就是亲核体为什么会去进攻它。当亲核体真的进攻 ATP 上的磷时，那第五根键让一个 pentacovalent（五共价）中间体得以形成并「相对稳定」地停在那里，直到离去基团（ADP）离开。把磷酰基从 ATP 上搬走的酶叫 kinase（激酶），来自希腊语 kinein，意思是「移动」。",
      src: "A p.475–476, §13.2"
    },
    {
      link_en: "four enzyme names collide right here, and they are told apart by who attacks",
      link_cn: "四个酶名正好在这里撞车，而分辨它们的判据是「谁去进攻」",
      en: "A kinase moves a phosphoryl group from a nucleoside triphosphate such as ATP onto an acceptor — hexokinase onto glucose, and the reaction is a phosphorylation. A phosphorylase breaks a bond with phosphate itself as the attacking species, so the phosphate ends up covalently stuck on the product: glycogen phosphorylase makes glucose 1-phosphate this way, and the reaction is called phosphorolysis. A phosphatase removes a phosphoryl group with water as the attacker. The second collision is a nastier one. A synthase catalyses a condensation that spends no nucleoside triphosphate; a synthetase catalyses one that does spend ATP or another nucleoside triphosphate, which makes every synthetase a kind of ligase, the general name for an enzyme that joins two atoms at the cost of energy. **A ligase and a lyase are different things: a lyase cleaves a bond, or run backwards adds across one, with electrons rearranging, and it spends nothing.** One warning: the same enzyme often carries two historical names — succinyl-CoA synthetase is also called succinate thiokinase, and pyruvate kinase is named for the direction opposite to the one it usually runs in a cell.",
      cn: "kinase（激酶）把一个磷酰基从核苷三磷酸（例如 ATP）搬到某个受体上 —— hexokinase 搬到葡萄糖上 —— 这个反应叫磷酸化。phosphorylase（磷酸化酶）断键时，进攻的物种是磷酸本身，所以磷酸最后共价地留在产物上：glycogen phosphorylase 就是这样生成葡萄糖-1-磷酸的，这个反应叫 phosphorolysis（磷酸解）。phosphatase（磷酸酶）把磷酰基卸下来，进攻的物种是水。第二处撞车更难缠。synthase（合酶）催化的缩合反应「不花」核苷三磷酸；synthetase（合成酶）催化的缩合反应「要花」ATP 或另一种核苷三磷酸 —— 于是每一个 synthetase 都属于 ligase（连接酶），也就是「以能量为代价把两个原子连起来」的酶的统称。**ligase 与 lyase 是两回事：lyase（裂合酶）断开一根键（反着走就是加成到一根键上），过程中电子发生重排，而且它什么都不花。**一句提醒：同一个酶常有两个历史遗留的名字 —— succinyl-CoA synthetase 又叫 succinate thiokinase；pyruvate kinase 的命名方向，与它在细胞里通常运行的方向相反。",
      src: "A p.477, §13.2, Box 13-1",
      see: [{ id: "L-15-2-1", en: "glycogen phosphorylase, and why phosphorolysis rather than hydrolysis", cn: "糖原磷酸化酶 —— 为什么是磷酸解而不是水解" }]
    },
    {
      link_en: "back to the list of five. The second class",
      link_cn: "回到五类的清单上。第二类",
      en: "**Internal rearrangements, isomerizations and eliminations have one defining criterion: electrons are redistributed inside the molecule and the overall oxidation state of the molecule does not change.** Two groups within one molecule may oxidise and reduce each other and cancel out exactly. The worked case is the glycolytic conversion of glucose 6-phosphate to fructose 6-phosphate: C-1 is reduced, aldehyde down to alcohol, while C-2 is oxidised, alcohol up to ketone — net zero across the molecule, which is precisely why this counts as an isomerization and not as a redox reaction. It passes through an enediol, a short-lived form carrying a C=C with an -OH on each of the two carbons, and two ionizable groups on the enzyme take turns at it: one strips a proton off as a general base, the other hands a proton back as a general acid. Losing water from an alcohol to leave a C=C behind is an elimination, and it sits in this class for the same reason — the oxidation state of the molecule as a whole is untouched.",
      cn: "**分子内重排、异构化与消除只有一条判据：电子在分子内部被重新分配，而分子整体的氧化态不变。**同一分子内的两个基团完全可以互相氧化、互相还原，最后正好抵消。范例是糖酵解里由葡萄糖-6-磷酸生成果糖-6-磷酸：C-1 被还原（醛降为醇），C-2 被氧化（醇升为酮）—— 整个分子净变化为零，而这正是它算异构化、不算氧化还原反应的原因。反应经由一个 enediol（烯二醇）进行 —— 那是一种短命的形式，带着一根 C=C，两个碳上各挂一个 -OH —— 酶上两个可解离的基团轮流对它动手：一个作为 general base 把质子夺走，另一个作为 general acid 把质子还回去。醇失去一分子水、留下一根 C=C，这叫消除（elimination），它归在这一类里的理由完全相同 —— 分子整体的氧化态没被动过。",
      src: "A p.474–475, §13.2, Fig. 13-6",
      see: [{ id: "L-14-4-1", en: "the glycolytic steps this isomerization sits between", cn: "这个异构化夹在糖酵解的哪两步之间" }]
    },
    {
      link_en: "the third class, and it uses the homolytic cleavage from three steps back",
      link_cn: "第三类 —— 它用的正是前面说过的均裂",
      recall_en: "homolytic cleavage was defined in the bond-breaking step; this is the class built on it",
      recall_cn: "均裂在讲「键怎么断」那一步已经定义过了，这一类就是建在它上面的",
      en: "**In a free-radical reaction a bond splits evenly and each fragment leaves with one unpaired electron — a radical.** These were once thought to be rare in biology and are now known across a wide range of processes. Four are worth holding. Isomerizations started by a 5'-deoxyadenosyl radical, generated either from adenosylcobalamin, a coenzyme form of vitamin B12, or from S-adenosylmethionine; the methylmalonyl-CoA mutase reaction is one. A radical decarboxylation in heme synthesis, where the oxygen-independent enzyme HemN converts the propionyl side chains of a heme precursor called coproporphyrinogen III into the vinyl side chains of the next precursor along, protoporphyrinogen IX. Ribonucleotide reductase, the enzyme that makes DNA's deoxyribonucleotides out of ribonucleotides — which is to say every deoxyribonucleotide in you was made by radical chemistry. And DNA photolyase, which repairs ultraviolet damage.",
      cn: "**在自由基反应里，一根键被平分，每个碎片各带走一个未成对电子 —— 这就是自由基（radical）。**这类反应曾被认为在生物学里很罕见，如今已知遍布相当广泛的一系列过程。有四个值得记住。由 5′-脱氧腺苷自由基发动的异构化反应，那个自由基或者来自 adenosylcobalamin（腺苷钴胺素，维生素 B₁₂ 的一种辅酶形式），或者来自 S-adenosylmethionine（S-腺苷甲硫氨酸）；methylmalonyl-CoA mutase 反应就是其中之一。血红素合成中的一步自由基脱羧：不依赖氧的酶 HemN 把一个血红素前体 —— coproporphyrinogen III —— 的丙酰基侧链，转变成下一个前体 protoporphyrinogen IX 的乙烯基侧链。ribonucleotide reductase（核糖核苷酸还原酶） —— 由核糖核苷酸制造 DNA 所需脱氧核糖核苷酸的那个酶，也就是说，你体内每一个脱氧核糖核苷酸都是自由基化学做出来的。以及 DNA photolyase（DNA 光解酶），负责修复紫外损伤。",
      src: "A p.475, §13.2, Fig. 13-7",
      openQuestion_en: "Which acceptor takes up the electron released in the HemN reaction is not known.",
      openQuestion_cn: "HemN 反应中释放出来的那个电子最终被谁接走，目前并不清楚。",
      see: [
        { id: "L-22-4-1", en: "ribonucleotide reductase in the nucleotide pathway", cn: "核苷酸通路里的核糖核苷酸还原酶" },
        { id: "L-25-2-1", en: "DNA photolyase and the repair of ultraviolet damage", cn: "DNA 光解酶与紫外损伤的修复" }
      ]
    },
    {
      link_en: "the fifth class, whose bookkeeping is a ladder",
      link_cn: "第五类 —— 它的记账方式是一架梯子",
      en: "Carbon sits in five oxidation states, depending on which elements it shares electrons with, and the ladder is worth memorising in order: alkane, alcohol, aldehyde (or ketone), carboxylic acid, carbon dioxide — each rung the oxidation of the one above it, with CO2 the most highly oxidised form of carbon found in living systems. Half of catabolism is a walk down that ladder, and the ladder is what a statement like 'fat is more reduced than sugar' actually means. A biological oxidation that removes two electrons and two hydrogen ions, the equivalent of two hydrogen atoms, is a dehydrogenation, and the enzyme is a dehydrogenase — lactate to pyruvate, electrons handed to NAD+, fully reversible. An enzyme that uses O2 as its electron acceptor is an oxidase if no oxygen atom ends up in the oxidised product, and an oxygenase if one does (a monooxygenase) or two do (a dioxygenase). Two closing statements: every oxidation is paid for by a reduction somewhere, since the removed electrons have to land on an acceptor; and **oxidations generally release energy, which is why most living cells get the energy they run on by oxidising fuel.**",
      cn: "碳依据它与哪些元素共享电子，处在五个氧化态上，这架梯子值得按顺序背下来：烷烃 → 醇 → 醛（或酮）→ 羧酸 → 二氧化碳 —— 每一级都是上一级那个碳被氧化的结果，而 CO₂ 是生命系统中所能见到的碳的最高氧化形式。分解代谢有一半就是沿着这架梯子往下走；「脂肪比糖更还原」这类说法，指的就是这架梯子上的位置。一次移走两个电子和两个氢离子（相当于两个氢原子）的生物氧化叫 dehydrogenation（脱氢），催化它的酶叫 dehydrogenase（脱氢酶） —— 乳酸变丙酮酸，电子交给 NAD⁺，完全可逆。以 O₂ 作电子受体的酶：若被氧化的产物里不出现氧原子，它是 oxidase（氧化酶）；若出现一个（monooxygenase，单加氧酶）或两个（dioxygenase，双加氧酶），它是 oxygenase（加氧酶）。最后两句：每一次氧化都必然由某处的一次还原来支付，因为被移走的电子总得落到某个受体上；**而氧化反应一般释放能量 —— 这正是多数活细胞靠氧化燃料来获得做功能量的原因。**",
      src: "A p.476–477, §13.2, Fig. 13-9, 13-10",
      see: [{ id: "L-19-1-1", en: "where those removed electrons actually go", cn: "被移走的那些电子究竟去了哪里" }]
    },
    {
      link_en: "one bookkeeping convention, and the next node leans on it",
      link_cn: "最后一条记账约定 —— 下一个节点压在它上面",
      en: "A phosphorylated compound exists as several ionisation states at once, and several of those bind Mg2+: at pH 7 with 2 mM Mg2+, what gets written as 'ATP' is an equilibrium mixture of ATP4-, HATP3-, H2ATP2-, MgHATP- and Mg2ATP. Rather than track all of it, a biochemical equation lets each symbol stand for the sum of those species and writes ATP + H2O -> ADP + Pi. H+ and Mg2+ are left out, because the reaction does not change their concentrations appreciably. A biochemical equation therefore balances C, N, O and P, and is allowed not to balance H, Mg or charge; its equilibrium constant K'eq depends on pH and on free [Mg2+]. A chemical equation balances everything including charge — above pH 8.5 with no Mg2+ present, ATP4- + H2O -> ADP3- + HPO4^2- + H+ — and its Keq depends only on temperature, pressure and ionic strength. **Use the chemical form when the question is a mechanism and every atom has to be accounted for; use the biochemical form when the question is which way a reaction will run at a stated pH and [Mg2+].** Standard values quoted for metabolism, ΔG'° and K'eq alike, are biochemical ones, measured at pH 7 and 1 mM Mg2+.",
      cn: "一个磷酸化合物同时以若干电离状态存在，其中几种还会结合 Mg²⁺：在 pH 7、2 mM Mg²⁺ 时，被写成「ATP」的那个东西，其实是 ATP⁴⁻、HATP³⁻、H₂ATP²⁻、MgHATP⁻ 与 Mg₂ATP 的一个平衡混合物。与其把这些全都追踪一遍，biochemical equation（生化方程式）让每个符号代表这一组物种之和，于是写作 ATP + H₂O → ADP + Pi。H⁺ 和 Mg²⁺ 被略去，因为反应不会显著改变它们的浓度。所以一个 biochemical equation 配平 C、N、O、P，却被允许不配平 H、Mg 和电荷；它的平衡常数 K′eq 依赖于 pH 和游离 [Mg²⁺]。另一边，chemical equation（化学方程式）则把一切都配平，包括电荷 —— 在 pH 8.5 以上、没有 Mg²⁺ 时，写作 ATP⁴⁻ + H₂O → ADP³⁻ + HPO₄²⁻ + H⁺ —— 它的 Keq 只依赖于温度、压力和离子强度。**讨论机制、每个原子都要交代清楚时，用化学式；想知道在给定 pH 与 [Mg²⁺] 下反应朝哪边跑时，用生化式。**最后记一句：代谢里引用的标准数值，ΔG′° 和 K′eq，全都是生化式的数值，在 pH 7、1 mM Mg²⁺ 下测定。",
      src: "A p.478, §13.2",
      see: [{ id: "L-13-3-1", en: "the ATP numbers that were measured under this convention", cn: "那些在这套约定下测出来的 ATP 数值" }]
    }
  ],
  terms: [
    { en: "carbanion", cn: "碳负离子",
      def_en: "A carbon atom holding a lone pair of electrons and a negative charge. Highly unstable on its own, so it exists in cells only when an adjacent electron-withdrawing group spreads the charge — almost always a carbonyl.",
      def_cn: "带着一对孤对电子和一个负电荷的碳原子。它自己极不稳定，所以在细胞里只有当相邻的抽电子基团把负电荷摊开时才存在 —— 那个基团几乎总是 carbonyl。" },
    { en: "carbocation", cn: "碳正离子",
      def_en: "A carbon atom short of an electron pair and carrying a positive charge. Made affordable not by a neighbouring sink but by eliminating a very good leaving group, pyrophosphate being the standard one.",
      def_cn: "少了一对电子、带正电荷的碳原子。让它变得负担得起的办法不是邻近的电子槽，而是消去一个极好的离去基团，标准的那个是焦磷酸。" },
    { en: "carbonyl group", cn: "羰基",
      def_en: "A carbon double-bonded to an oxygen, C=O. It works as an electron sink in two directions at once: its own carbon is electrophilic, and it delocalises the negative charge of a carbanion on the adjoining carbon. Aldol condensation, Claisen ester condensation and decarboxylation are all built on this.",
      def_cn: "与氧双键相连的碳，C=O。它同时朝两个方向充当电子槽：自己的碳是亲电的，同时又能把相邻碳上 carbanion 的负电荷离域掉。羟醛缩合、克莱森酯缩合和脱羧全都建在这上面。" },
    { en: "nucleophile / electrophile", cn: "亲核体／亲电体",
      def_en: "A group rich in electrons and able to donate them, versus a group short of electrons and seeking them. These are roles in a reaction, not fixed properties: a carbon atom plays either one depending on what surrounds it.",
      def_cn: "富电子、能把电子给出去的基团，对上缺电子、正在找电子的基团。这是反应中的角色，不是固有属性：一个碳原子演哪一个，取决于它周围有什么。" },
    { en: "homolytic / heterolytic cleavage", cn: "均裂／异裂",
      def_en: "The two ways a shared electron pair can come apart. Split evenly, each atom leaves with one unpaired electron and you get radicals. Split unevenly, one atom takes both electrons and you get a carbanion, a carbocation, a proton or a hydride ion. The uneven route is the commoner one.",
      def_cn: "一对共享电子的两种分开方式。平分，则每个原子各带走一个未成对电子，得到自由基。不平分，则一个原子带走两个电子，得到 carbanion、carbocation、质子或氢负离子。不平分的那条路更常见。" },
    { en: "good leaving group / activation", cn: "好的离去基团／活化",
      def_en: "A group that departs readily from a molecule, so a substitution at that position becomes feasible. Attaching one to a metabolic intermediate is precisely what the word activation means — Pi and PPi are the standard ones, thiols are the other family, and a thioester is a carboxylic acid activated by a thiol.",
      def_cn: "一个从分子上离开得很痛快的基团，因而在那个位置上的取代变得可行。给代谢中间体挂上这样一个基团，正是「活化」这个词的全部含义 —— Pi 与 PPi 是标准的那一族，thiol 是另一族，而 thioester 就是被 thiol 活化了的羧酸。" },
    { en: "thioester", cn: "硫酯",
      def_en: "A carboxylic acid joined through a sulfur instead of an oxygen, acetyl-CoA being the standard example. Two consequences: it is an activated carboxylic acid, because the thiol leaves well, and its carbonyl stabilises the carbanion next to it, which is what makes Claisen ester condensations possible.",
      def_cn: "羧酸通过硫、而非氧连接起来的形式，标准例子是 acetyl-CoA。两个后果：它是被活化的羧酸，因为 thiol 走得好；而它的 carbonyl 能稳定旁边的 carbanion，这正是克莱森酯缩合得以进行的原因。" },
    { en: "pentacovalent intermediate", cn: "五共价中间体",
      def_en: "The five-bonded phosphorus that forms when a nucleophile attacks the phosphorus of ATP, and sits there relatively stably until the leaving group departs. It is possible only because phosphorus can form five covalent bonds, which is the structural reason phosphoryl transfer is the cell's standard energy-carrying move.",
      def_cn: "亲核体进攻 ATP 上的磷时形成的那个五键磷原子，它会「相对稳定」地停在那里，直到离去基团离开。它之所以可能，全因磷可以形成五根共价键 —— 这就是「磷酰基转移」成为细胞标准携能动作的结构性理由。" },
    { en: "phosphorolysis", cn: "磷酸解",
      def_en: "Cleaving a bond with phosphate itself as the attacking species, so the phosphate ends up covalently attached to the product. Glycogen phosphorylase does this, releasing glucose 1-phosphate. Contrast the two neighbours: a kinase puts an ATP-derived phosphoryl group on, and a phosphatase takes one off with water attacking.",
      def_cn: "断键时由磷酸本身充当进攻物种，因而磷酸最后共价地留在产物上。糖原磷酸化酶就是这么干的，放出葡萄糖-1-磷酸。与两个邻居对照：kinase 把来自 ATP 的磷酰基装上去，phosphatase 由水进攻、把磷酰基卸下来。" },
    { en: "synthase / synthetase", cn: "合酶／合成酶",
      def_en: "Both catalyse condensations, and the criterion between them is the energy bill: the first spends no nucleoside triphosphate, the second spends ATP or another one. That makes the second kind a ligase — and a ligase is not a lyase, which cleaves a bond with electrons rearranging and spends nothing.",
      def_cn: "两者催化的都是缩合反应，判据是那张能量账单：前者不花核苷三磷酸，后者要花 ATP 或另一种核苷三磷酸。所以后者属于 ligase —— 而 ligase 不是 lyase：lyase 断开一根键、过程中电子重排，什么都不花。" },
    { en: "enediol", cn: "烯二醇",
      def_en: "A short-lived form carrying a C=C with a hydroxyl on each of the two carbons. It is the intermediate through which glucose 6-phosphate becomes fructose 6-phosphate, with one ionizable enzyme group pulling a proton off and another handing one back.",
      def_cn: "一种短命的形式，带一根 C=C，两个碳上各挂一个羟基。葡萄糖-6-磷酸变成果糖-6-磷酸正是经由它，酶上一个可解离基团夺走质子，另一个把质子还回去。" },
    { en: "dehydrogenase / oxidase / oxygenase", cn: "脱氢酶／氧化酶／加氧酶",
      def_en: "Three families sorted by what they do with electrons and with O2. The first removes two electrons and two hydrogen ions and hands them to a carrier such as NAD+. The second uses O2 as electron acceptor with no oxygen atom entering the product. The third puts one or two oxygen atoms into the product, and is a monooxygenase or a dioxygenase accordingly.",
      def_cn: "按「拿电子和氧怎么办」分出来的三族。第一族移走两个电子和两个氢离子，交给 NAD⁺ 这类载体。第二族以 O₂ 作电子受体，但产物里不出现氧原子。第三族把一个或两个氧原子放进产物，据此分为单加氧酶与双加氧酶。" },
    { en: "biochemical equation", cn: "生化方程式",
      def_en: "A simplified metabolic equation in which each symbol stands for the sum of a compound's ionic and Mg-bound species. It balances C, N, O and P but need not balance H, Mg or charge, and its K'eq depends on pH and free [Mg2+] — the convention under which every ΔG'° quoted for metabolism was measured.",
      def_cn: "一种简化的代谢方程式，其中每个符号代表某化合物各离子态与结合 Mg 态之和。它配平 C、N、O、P，却不必配平 H、Mg 和电荷；它的 K′eq 依赖 pH 与游离 [Mg²⁺] —— 代谢里引用的每一个 ΔG′° 都是在这套约定下测出来的。" }
  ]
};

/* ------------------------------------------------------------------ L-13-3-1 */
window.BIOLITE_SPINE["L-13-3-1"] = {
  assumed: ["glycolysis", "erythrocyte", "skeletal muscle", "glutamate", "glucose",
            "fatty acid", "coenzyme A", "tRNA", "firefly", "muscle contraction",
            "amino acid", "enzyme", "substrate", "ribose", "nucleotide", "DNA", "RNA",
            "signal", "cytosol", "hydrolysis", "equilibrium"],
  nodeTitle_en: "What ATP actually does",
  nodeTitle_cn: "ATP 到底在做什么",
  title_en: "Why -30.5 kJ/mol undersells ATP, and why ATP almost never simply hydrolyses",
  title_cn: "为什么 -30.5 kJ/mol 说轻了 ATP，以及为什么 ATP 几乎从不「单纯水解」",
  steps: [
    {
      en: "The number quoted for ATP hydrolysis, -30.5 kJ/mol, is a standard free-energy change, ΔG'°, and standard means every participant at 1 M. Inside a cell, ATP, ADP and Pi are nowhere near 1 M and nowhere near each other: in a human erythrocyte they are about 2.25, 0.25 and 1.65 mM. **The number measured under conditions the cell never occupies is not the number the cell works with.**",
      cn: "被引用来描述 ATP 水解的那个数字，-30.5 kJ/mol，是一个标准自由能变化 ΔG′°，而「标准」意味着每一个参与者都在 1 M。细胞里的 ATP、ADP 和 Pi 既远不到 1 M，彼此之间也差得很远：在人的红细胞里，它们分别大约是 2.25、0.25、1.65 mM。**在细胞从未身处的条件下测出来的数字，不是细胞实际使用的那个数字。**",
      src: "A p.479, §13.3, Table 13-5"
    },
    {
      link_en: "so put the real concentrations in",
      link_cn: "那就把真实浓度代进去",
      en: "**The actual free-energy change of ATP hydrolysis inside a cell has a name: its phosphorylation potential, written ΔGp, and it is calculated as ΔGp = ΔG'° + RT ln([ADP][Pi]/[ATP]).** With the erythrocyte concentrations above this comes to about -52 kJ/mol; with a lower estimate of free ADP — the fraction not bound to protein, around 25 μM — it reaches -58 kJ/mol. Nearly twice the number on the page.",
      cn: "**细胞内 ATP 水解真正的自由能变化有一个名字：它的磷酸化势（phosphorylation potential），写作 ΔGp，算法是 ΔGp = ΔG′° + RT ln([ADP][Pi]/[ATP])。**把上面那组红细胞浓度代进去，得到约 -52 kJ/mol；如果用一个更低的游离 ADP 估计值 —— 也就是没有被蛋白结合的那一部分，约 25 μM —— 会算到 -58 kJ/mol。几乎是纸面数字的两倍。",
      src: "A p.480, §13.3, Worked Example 13-2"
    },
    {
      link_en: "and it comes out more negative every time, for one reason",
      link_cn: "而且每一次都算得更负 —— 原因只有一个",
      en: "In a living cell the energy released by ATP hydrolysis is always greater than the standard value, because cells hold ATP far above the concentration it would settle at if hydrolysis were allowed to reach equilibrium. Keeping it there costs continuous work, and there has been very strong selective pressure for the regulatory machinery that does it. The consequence is worth stating plainly: **when ATP falls, the cell does not merely have less fuel — the fuel itself loses potency, because ΔGp falls with it.**",
      cn: "在活细胞里，ATP 水解释放的能量永远比标准值更大，因为细胞把 ATP 维持在远高于「水解达到平衡时它会落到的那个浓度」的水平上。维持在那里要付出持续不断的做功，而演化对「负责维持它的那套调控机制」施加了非常强的选择压力。这个后果值得直说：**ATP 一旦下降，细胞不只是燃料变少了 —— 这份燃料本身的效力也变差了，因为 ΔGp 跟着一起掉。**",
      src: "A p.480–481, §13.3"
    },
    {
      link_en: "one more correction to what the equation says the substrate is",
      link_cn: "关于「底物到底是什么」，方程式还需要一处更正",
      en: "Mg2+ in the cytosol binds ATP and ADP — that binding partly shields their negative charges and changes the shape, or conformation, the phosphate groups take up. For most enzymatic reactions in which ATP is the phosphoryl group donor, **the true substrate is MgATP2-, not free ATP4- — so the ΔG'° relevant to any real enzyme is that of MgATP2- hydrolysis.** This does not force any equation to be rewritten, because Mg2+ was never written into it: a biochemical equation leaves out species whose concentration the reaction does not change.",
      cn: "胞质里的 Mg²⁺ 会结合 ATP 和 ADP —— 这次结合部分屏蔽掉它们的负电荷，也改变了磷酸基团所采取的形状，也就是构象（conformation）。在大多数以 ATP 作磷酰基供体的酶促反应里，**真正的底物是 MgATP²⁻，不是游离的 ATP⁴⁻ —— 所以对任何真实的酶而言，相关的 ΔG′° 应该是 MgATP²⁻ 水解的那个值。**这并不逼着谁去改写方程式，因为 Mg²⁺ 本来就没被写进去：生化方程式会略去那些浓度不被反应改变的物种。",
      src: "A p.479–480, §13.3, Fig. 13-12",
      see: [{ id: "L-13-2-1", en: "why a biochemical equation is allowed to leave Mg out", cn: "生化方程式为什么可以把 Mg 略掉" }]
    },
    {
      link_en: "if ATP is that reactive, why has it not already reacted with everything?",
      link_cn: "既然 ATP 这么活泼，它为什么还没跟所有东西都反应掉？",
      en: "ATP is thermodynamically unstable in water and therefore a good phosphoryl group donor, and at the same time it is kinetically stable, because uncatalysed cleavage of its phosphoanhydride bonds — the two bonds joining its three phosphates — needs an activation energy of 200 to 400 kJ/mol. That gap between what is favourable and what is fast is not a curiosity. **It is the whole basis of control: ATP will not hand a phosphoryl group to water, or to any of the hundreds of other acceptors floating past, until a specific enzyme lowers the barrier for one specific acceptor.** The cell governs the energy carried by ATP by governing which of those enzymes are switched on.",
      cn: "ATP 在水里热力学上不稳定，因而是一个好的磷酰基供体；与此同时它在动力学上却很稳定 —— 因为在没有催化的情况下，裂解它的磷酸酐键（phosphoanhydride bond，连接三个磷酸的那两根键）需要 200 到 400 kJ/mol 的活化能。「有利」与「快」之间的这道落差不是趣闻。**它就是全部控制权的基础：在某个特定的酶为某个特定受体把这道势垒降下来之前，ATP 不会把磷酰基交给水，也不会交给身边飘过的成百上千个其他潜在受体。**细胞通过控制「哪些酶开着」，来控制 ATP 所携带的能量流向何处。",
      src: "A p.484, §13.3"
    },
    {
      link_en: "now the correction this whole node exists for",
      link_cn: "现在讲这个节点存在的理由 —— 那处最核心的更正",
      en: "**Hydrolysing ATP by itself accomplishes nothing except releasing heat, and heat cannot drive a chemical process in a system held at one temperature.** A cell is such a system. So the picture of ATP splitting somewhere and its released energy floating over to power a reaction elsewhere describes something that cannot happen. What ATP actually does is hand over a piece of itself. A single arrow written ATP -> ADP + Pi is nearly always shorthand for two steps: first a part of ATP — a phosphoryl group, a pyrophosphoryl group, or the whole adenylate (AMP) — is transferred and becomes covalently attached to the substrate or to an amino acid residue of the enzyme, raising that molecule's free energy, which is to say activating it; then in a second step the attached piece is displaced, leaving as Pi, PPi or AMP. ATP participates covalently in the reaction it powers.",
      cn: "**单纯把 ATP 水解掉，除了放出热之外什么也没干成，而热在一个温度恒定的系统里驱动不了化学过程。**细胞正是这样一个系统。所以「ATP 在某处裂开，放出的能量飘到别处去推动一个反应」这幅图，描述的是一件不可能发生的事。ATP 真正做的，是把自己的一部分交出去。写作 ATP → ADP + Pi 的那个单箭头，几乎总是两步的简写：第一步，ATP 的一部分 —— 一个磷酰基、一个焦磷酰基，或者整个腺苷酸（AMP）—— 被转移出去，共价地接到底物上、或接到酶的某个氨基酸残基上，把那个分子的自由能抬高，也就是把它活化；第二步，这块刚接上去的东西再被顶替下来，作为 Pi、PPi 或 AMP 离开。ATP 是共价参与到它所驱动的那个反应里的。",
      src: "A p.483, §13.3, Fig. 13-18",
      recall_en: "the same idea as attaching a good leaving group in the previous node — here ATP supplies the group",
      recall_cn: "和上一个节点里「挂上一个好的离去基团」是同一个想法 —— 这里由 ATP 来提供那个基团"
    },
    {
      link_en: "and here is the reaction that proves it",
      link_cn: "下面这个反应就是证据",
      en: "Glutamine synthetase is the enzyme that makes glutamine from glutamate and NH3. The two-step account below is what the enzyme actually does, step by step. First a phosphoryl group is transferred from ATP directly onto the carboxyl group of glutamate, giving enzyme-bound glutamyl phosphate and releasing ADP — glutamate is now an activated molecule sitting in the active site. Only then does NH3 attack that activated intermediate, displacing the phosphoryl group as Pi and forming glutamine. **The phosphoryl group never vanished into energy. It landed on glutamate, made glutamate attackable, and was then knocked off.** Note the scope: the intermediate is enzyme-bound, so free glutamate in solution is not phosphorylated — the transfer happens only in the active site.",
      cn: "glutamine synthetase（谷氨酰胺合成酶）由谷氨酸和 NH₃ 生成谷氨酰胺。下面这「两步」，描述的正是这个酶一步一步实际在做的事。第一步，一个磷酰基直接从 ATP 转移到谷氨酸的羧基上，生成酶结合态的 glutamyl phosphate（谷氨酰磷酸），同时放出 ADP —— 此刻谷氨酸已经是一个被活化的分子，坐在活性位点里。只有到这时候，NH₃ 才去进攻这个被活化的中间体，把磷酰基作为 Pi 顶替下来，同时生成谷氨酰胺。 请看清楚：**那个磷酰基从未化作能量消失掉。它落到了谷氨酸身上，把谷氨酸变得可被进攻，然后才被敲掉。**注意适用范围：这个中间体是酶结合态的，溶液里游离的谷氨酸不会被磷酸化 —— 转移只发生在活性位点内部。",
      src: "A p.483, §13.3, Fig. 13-18"
    },
    {
      link_en: "ATP has three phosphates, and attacking a different one transfers a different group",
      link_cn: "ATP 有三个磷，进攻不同的那一个，转移出去的基团也不同",
      en: "The three phosphates are labelled α, β and γ, γ being the terminal one furthest from the adenosine. Each is a distinct target for nucleophilic attack, and 18O-labelling experiments — which put a heavy oxygen isotope in and then track where it ends up — established which bond breaks in each case. Attack at γ displaces ADP and transfers a phosphoryl group, -PO3^2-; note it is a phosphoryl group and not a phosphate group, because the bridging oxygen in the product comes from the attacking alcohol and not from ATP. Attack at β displaces AMP and transfers a pyrophosphoryl group; the synthesis of 5-phosphoribosyl-1-pyrophosphate, the ribose-carrying intermediate that every nucleotide is built onto, works this way. Attack at α displaces PPi and transfers adenylate (5'-AMP) as an adenylyl group, a reaction called adenylylation. **Three attack sites, three transferred groups, three classes of ATP chemistry, and not one of them is simple hydrolysis.**",
      cn: "三个磷标记为 α、β、γ，γ 是离腺苷最远的那个末端磷。每一个都是一个独立的亲核进攻靶点，而 ¹⁸O 标记实验 —— 把一个重氧同位素放进去，再追踪它最后落在哪里 —— 确定了每种情况下断的是哪根键。进攻 γ 位：顶掉 ADP，转移出一个磷酰基（-PO₃²⁻）；请注意它是磷酰基而不是磷酸基，因为产物里那个桥氧来自进攻的醇，不来自 ATP。进攻 β 位：顶掉 AMP，转移出一个焦磷酰基；5-磷酸核糖-1-焦磷酸（PRPP）的合成走的就是这条路，而 PRPP 正是每一个核苷酸都在其上搭建起来的那个携带核糖的中间体。进攻 α 位：顶掉 PPi，把腺苷酸（5′-AMP）作为一个 adenylyl 基团转移出去，这个反应叫 adenylylation（腺苷酰化）。**三个进攻位点，三种被转移的基团，三类 ATP 化学 —— 没有一种是单纯的水解。**",
      src: "A p.484–485, §13.3, Fig. 13-20",
      see: [{ id: "L-22-4-1", en: "PRPP as the starting point of nucleotide synthesis", cn: "PRPP 作为核苷酸合成的起点" }]
    },
    {
      link_en: "the α route carries an extra push that is easy to miss",
      link_cn: "α 那条路还额外带着一份很容易漏掉的推力",
      en: "Two facts stack. First, hydrolysing the α-β phosphoanhydride bond releases considerably more energy (-45.6 kJ/mol) than hydrolysing the β-γ bond (-31 kJ/mol). Second, the PPi released is itself then hydrolysed to two Pi by inorganic pyrophosphatase, an enzyme present in essentially every cell, for a further -19.2 kJ/mol. The PPi is destroyed as fast as it appears, so the reaction cannot run backwards, and in effect both of ATP's phosphoanhydride bonds are broken: ATP + 2H2O -> AMP + 2Pi, ΔG'° = -64.8 kJ/mol. **That is why adenylylation reactions are thermodynamically very favourable, and it is the standard way a cell forces a synthesis to go to completion.**",
      cn: "两件事叠在一起。第一，水解 α-β 磷酸酐键释放的能量（-45.6 kJ/mol）明显多于水解 β-γ 键（-31 kJ/mol）。第二，放出来的那个 PPi 随后会被 inorganic pyrophosphatase（无机焦磷酸酶）——几乎每个细胞里都有的一种酶——再水解成两个 Pi，又放出 -19.2 kJ/mol。于是 PPi 一出现就被销毁，所以反应退不回去；实际效果是 ATP 的两根磷酸酐键全都断了：ATP + 2H₂O → AMP + 2Pi，ΔG′° = -64.8 kJ/mol。**这就是 adenylylation 反应在热力学上非常有利的原因，也是细胞逼一个合成反应走到底的标准手法。**",
      src: "A p.485, §13.3"
    },
    {
      link_en: "and that push is what pays for three of the biggest syntheses in the cell",
      link_cn: "而这份推力，正是细胞里三大类合成反应的付款方式",
      en: "Fatty acid activation is the worked case: adenylate is transferred from ATP onto the carboxyl group of a fatty acid, making a mixed anhydride called fatty acyl adenylate and liberating PPi; the thiol group of coenzyme A then displaces the adenylyl group, giving the thioester fatty acyl-CoA. Activating an amino acid before protein synthesis is the same reaction with tRNA in coenzyme A's place, and polymerising nucleic acids is the same again — each nucleoside triphosphate loses PPi as it is added to a growing DNA or RNA chain. One memorable case of the same chemistry: a firefly's light. **Pyrophosphate cleavage of ATP activates luciferin to luciferyl adenylate, and the light this produces is proportional to ATP present, which makes purified luciferin and luciferase sensitive enough to measure a few picomoles of ATP.**",
      cn: "脂肪酸的活化就是那个范例：腺苷酸从 ATP 被转移到脂肪酸的羧基上，生成一个叫 fatty acyl adenylate（脂酰腺苷酸）的混合酸酐，并放出 PPi；随后辅酶 A 的巯基把 adenylyl 基团顶替下来，得到硫酯 fatty acyl-CoA（脂酰辅酶 A）。蛋白质合成之前活化一个氨基酸，是同一个反应，只是把辅酶 A 换成了 tRNA；核酸的聚合又是同一个 —— 每一个核苷三磷酸被加到正在延长的 DNA 或 RNA 链上时都放出 PPi。同一套化学还有一个好记的例子：萤火虫的光。**ATP 的焦磷酸裂解把萤光素活化成萤光素腺苷酸，由此发出的光与在场的 ATP 量成正比 —— 这让纯化的萤光素和萤光素酶灵敏到可以测出几皮摩尔的 ATP。**",
      src: "A p.485–486, §13.3, Box 13-2",
      see: [
        { id: "L-17-2-1", en: "fatty acyl-CoA entering the oxidation cycle", cn: "脂酰辅酶 A 进入氧化循环" },
        { id: "L-27-2-1", en: "amino acid activation on tRNA, in full", cn: "氨基酸在 tRNA 上活化的完整机制" }
      ]
    },
    {
      link_en: "there are real exceptions, and one is worth knowing by name",
      link_cn: "确实存在真正的例外，其中一个值得记住名字",
      en: "Myosin, the motor protein that pulls on actin filaments in muscle, binds ATP tightly but noncovalently to one of its conformations and is held in that conformation. It then catalyses hydrolysis of the ATP bound to itself; ADP and Pi dissociate; and the protein relaxes into a second conformation until the next ATP binds. That binding-and-hydrolysis cycle is the mechanical stroke, and across many myosin heads it becomes muscle contraction. **Here the hydrolysis itself is the energy source, which is one of very few real cases.** Helicases and RecA moving along DNA, AAA+ ATPases cycling other proteins between active and inactive states, and GTP-binding signalling proteins ending a signal all work the same way. A subtler middle case: the Na+K+ ATPase does transfer a phosphoryl group covalently, but onto itself rather than onto a passing substrate, forcing its own conformational change through Na+-dependent phosphorylation and K+-dependent dephosphorylation.",
      cn: "myosin（肌球蛋白）是肌肉里拉动肌动蛋白丝的马达蛋白。它把 ATP 紧紧地、但非共价地结合在自己的某一个构象上，从而被固定在那个构象里。随后它催化水解自己身上结合着的那个 ATP；ADP 和 Pi 解离；蛋白弛豫到第二个构象，直到下一个 ATP 结合上来。这个「结合—水解」循环本身就是那一次机械冲程，在许多肌球蛋白头部上叠加起来，就成了肌肉收缩。**在这里，水解本身就是能量来源 —— 而这是极少数几个真实例子之一。**沿着 DNA 移动的 helicase 与 RecA、在活性与非活性状态间循环其他蛋白的 AAA+ ATPase、以及靠水解 GTP 来终止信号的 GTP 结合蛋白，走的都是这条路。还有一个更微妙的中间情况：Na⁺K⁺ ATPase 确实共价转移了一个磷酰基，但转给的是它自己，而不是路过的底物 —— 它靠 Na⁺ 依赖的磷酸化和 K⁺ 依赖的去磷酸化，逼出自身的构象变化。",
      src: "A p.483, 486–487, §13.3",
      see: [
        { id: "L-5-3-1", en: "myosin and actin as a motor, in full", cn: "肌球蛋白与肌动蛋白作为马达的完整机制" },
        { id: "L-11-3-1", en: "the Na+K+ ATPase as a transporter", cn: "Na⁺K⁺ ATPase 作为转运蛋白" }
      ]
    },
    {
      link_en: "the cell runs on more than one triphosphate, and one enzyme supplies all of them",
      link_cn: "细胞用的三磷酸不止一种，而供应它们的是同一个酶",
      en: "Nucleoside diphosphate kinase is present in all cells and catalyses ATP + NDP <-> ADP + NTP, where NDP is any nucleoside diphosphate. Its ΔG'° is close to zero, so the reaction is fully reversible, and the normally high [ATP]/[ADP] ratio pushes it to the right. It runs a two-step Ping-Pong mechanism, meaning the first substrate leaves before the second arrives: a phosphoryl group moves from ATP onto an active-site histidine, forming a phosphohistidine intermediate, and only then moves from there onto whichever diphosphate has bound. The enzyme does not care which base the diphosphate carries, and works equally well on deoxyribonucleoside diphosphates — so **this one enzyme makes every NTP and dNTP the cell needs, all of them out of ATP.**",
      cn: "nucleoside diphosphate kinase（核苷二磷酸激酶）存在于所有细胞中，催化 ATP + NDP ⇌ ADP + NTP，其中 NDP 指任意一种核苷二磷酸。它的 ΔG′° 接近零，所以反应完全可逆，而细胞里通常偏高的 [ATP]/[ADP] 比值把它推向右边。它走的是两步的 Ping-Pong（乒乓）机制 —— 意思是第一个底物先离开，第二个底物才进来：磷酰基先从 ATP 转到活性位点的一个组氨酸上，形成一个 phosphohistidine（磷酸组氨酸）中间体，然后才从那里转到刚结合上来的那个二磷酸上。这个酶不在乎二磷酸带的是哪种碱基，对脱氧核苷二磷酸也一样好用 —— **所以细胞需要的每一种 NTP 和 dNTP，都是这一个酶从 ATP 做出来的。**",
      src: "A p.487, §13.3, Fig. 13-21"
    },
    {
      link_en: "a different problem: heavy demand leaves ADP piling up",
      link_cn: "另一个问题：需求剧增时，ADP 会堆起来",
      en: "When phosphoryl transfer from ATP is running hard, ADP accumulates and gets in the way of further ATP-dependent work. **Adenylate kinase deals with it by running 2ADP <-> ATP + AMP, fully reversibly: two molecules of the accumulated ADP become one usable ATP and one AMP.** This lowers [ADP] and partly replenishes ATP at the same moment, and once the demand spike passes the AMP is phosphorylated back to ADP.",
      cn: "当 ATP 的磷酰基转移正剧烈进行时，ADP 会积累起来，妨碍后续依赖 ATP 的工作。**adenylate kinase（腺苷酸激酶）的对策是跑 2ADP ⇌ ATP + AMP，完全可逆：两分子积压的 ADP 变成一个可用的 ATP 加一个 AMP。**这在同一时刻既压低了 [ADP]，又部分补回了 ATP；等需求高峰过去，那个 AMP 会被重新磷酸化回 ADP。",
      src: "A p.487, §13.3"
    },
    {
      link_en: "and a faster buffer still, for the first seconds of a sudden demand",
      link_cn: "还有一个更快的缓冲，专管突发需求的头几秒",
      recall_en: "the same job as adenylate kinase one step up, on a shorter timescale",
      recall_cn: "和上一步 adenylate kinase 干的是同一件事，只是时间尺度更短",
      en: "Phosphocreatine is a small phosphorylated molecule held at about 30 mM in skeletal muscle — roughly ten times the concentration of ATP there — and at 5 to 10 mM in other tissues. **Creatine kinase catalyses ADP + phosphocreatine <-> ATP + creatine, with ΔG'° = -12.5 kJ/mol.** When a sudden demand hits, this reservoir refills ATP considerably faster than the catabolic pathways can synthesise it, and when the demand slackens the same enzyme runs backwards on the ATP that catabolism — the breakdown of fuel — has by then produced, rebuilding the phosphocreatine store for next time.",
      cn: "phosphocreatine（磷酸肌酸，PCr）是一个小的磷酸化分子，在骨骼肌里维持在约 30 mM —— 大约是那里 ATP 浓度的十倍 —— 在其他组织里是 5 到 10 mM。**creatine kinase（肌酸激酶）催化 ADP + 磷酸肌酸 ⇌ ATP + 肌酸，ΔG′° = -12.5 kJ/mol。**突发需求来临时，这个储备补充 ATP 的速度远快于分解代谢通路合成 ATP 的速度；等需求缓下来，同一个酶用分解代谢此时已经产出的 ATP 反向运行，把磷酸肌酸的库存补回去，留给下一次。",
      src: "A p.487–488, §13.3"
    }
  ],
  terms: [
    { en: "phosphorylation potential", cn: "磷酸化势",
      def_en: "The actual free-energy change of ATP hydrolysis under the concentrations prevailing inside a cell, ΔGp, calculated as ΔG'° + RT ln([ADP][Pi]/[ATP]). In a human erythrocyte it is about -52 kJ/mol, against the standard -30.5, and it is always more negative than standard because cells hold ATP far above its equilibrium concentration.",
      def_cn: "在细胞内实际浓度下，ATP 水解真正的自由能变化 ΔGp，算法是 ΔG′° + RT ln([ADP][Pi]/[ATP])。在人红细胞里约为 -52 kJ/mol，而标准值是 -30.5；它永远比标准值更负，因为细胞把 ATP 维持在远高于其平衡浓度的水平。" },
    { en: "phosphoanhydride bond", cn: "磷酸酐键",
      def_en: "Either of the two bonds joining ATP's three phosphates. Uncatalysed cleavage needs 200 to 400 kJ/mol of activation energy, which is why ATP is kinetically stable despite being thermodynamically unstable — and that stability is what lets a cell decide, enzyme by enzyme, where the energy goes.",
      def_cn: "连接 ATP 三个磷酸的那两根键中的任意一根。非催化条件下裂解它需要 200 到 400 kJ/mol 的活化能 —— 这正是 ATP 虽然热力学不稳定、动力学却很稳定的原因；而这份稳定，让细胞得以一个酶一个酶地决定能量去向。" },
    { en: "group transfer", cn: "群转移",
      def_en: "The mechanism by which ATP actually does work: part of the molecule — a phosphoryl group, a pyrophosphoryl group, or the whole adenylate — is transferred covalently onto a substrate or an enzyme residue, activating it, and is displaced in a second step. Simple hydrolysis liberates only heat, which drives nothing in a cell.",
      def_cn: "ATP 真正做功的机制：分子的一部分 —— 一个磷酰基、一个焦磷酰基，或整个腺苷酸 —— 被共价转移到底物或酶的某个残基上，把它活化，然后在第二步被顶替下来。单纯的水解只放出热，而热在细胞里驱动不了任何东西。" },
    { en: "adenylylation", cn: "腺苷酰化",
      def_en: "Nucleophilic attack at ATP's α phosphate, transferring adenylate (5'-AMP) and displacing PPi. It carries an extra push because inorganic pyrophosphatase destroys the PPi as fast as it appears, so both phosphoanhydride bonds end up broken: ATP + 2H2O -> AMP + 2Pi, ΔG'° = -64.8 kJ/mol. Fatty acid activation, amino acid activation and nucleic acid polymerisation all run on it.",
      def_cn: "亲核体进攻 ATP 的 α 位磷，转移出腺苷酸（5′-AMP）、顶掉 PPi。它自带一份额外推力，因为无机焦磷酸酶一出现就把 PPi 销毁，于是两根磷酸酐键最终都断了：ATP + 2H₂O → AMP + 2Pi，ΔG′° = -64.8 kJ/mol。脂肪酸活化、氨基酸活化和核酸聚合都靠它。" },
    { en: "Ping-Pong mechanism", cn: "乒乓机制",
      def_en: "A two-step enzyme mechanism in which the first substrate is released before the second binds, with the enzyme itself carrying the transferred group in between. Nucleoside diphosphate kinase is the standard case: ATP phosphorylates an active-site histidine, ADP leaves, then the phosphohistidine phosphorylates whichever diphosphate arrives.",
      def_cn: "一种两步的酶机制：第一个底物先被放走，第二个才结合，中间由酶自己扛着被转移的基团。核苷二磷酸激酶是标准例子：ATP 先把活性位点的一个组氨酸磷酸化，ADP 离开，然后这个磷酸组氨酸再去磷酸化随后到来的那个二磷酸。" },
    { en: "phosphocreatine", cn: "磷酸肌酸",
      def_en: "A small phosphorylated molecule held at about 30 mM in skeletal muscle, roughly ten times the ATP concentration there. Creatine kinase converts it plus ADP into ATP plus creatine at ΔG'° = -12.5 kJ/mol, refilling ATP far faster than catabolism can, and runs backwards to rebuild the store once demand drops.",
      def_cn: "一个小的磷酸化分子，在骨骼肌里维持在约 30 mM，大约是那里 ATP 浓度的十倍。肌酸激酶把它和 ADP 变成 ATP 和肌酸，ΔG′° = -12.5 kJ/mol，补充 ATP 的速度远快于分解代谢；需求下降后它反向运行，把库存补回去。" }
  ]
};

/* ------------------------------------------------------------------ L-13-5-1 */
window.BIOLITE_SPINE["L-13-5-1"] = {
  assumed: ["glycolysis", "gluconeogenesis", "glycogen", "insulin", "adrenaline",
            "diabetes mellitus", "hepatocyte", "liver", "kidney", "heart", "brain",
            "muscle", "glutathione", "glutamate", "cholesterol", "fatty acid",
            "glucose", "ATP", "ADP", "AMP", "NADH", "NAD+", "NADPH", "cyclic AMP",
            "hexokinase", "pyruvate kinase", "enzyme", "substrate", "promoter",
            "transcription", "translation", "mRNA", "hormone", "growth factor",
            "cytokine", "protein kinase", "pentose phosphate pathway", "citric acid cycle"],
  nodeTitle_en: "How a metabolic pathway is regulated",
  nodeTitle_cn: "代谢通路是怎么被调节的",
  title_en: "Flux moves while concentrations hold still — and the regulated steps are exactly the ones kept far from equilibrium",
  title_cn: "浓度不动，通量在动 —— 而被调节的那几步，恰恰是被摁在远离平衡处的那几步",
  steps: [
    {
      en: "Start with what a dynamic steady state actually asserts, because it is the sentence everything else hangs on. In a pathway A -> S -> P, the preceding reaction supplies S at exactly the rate the next one consumes it, so when the two rates are equal, the concentration of S does not change. The counterintuitive part is what that leaves free: the flux — the rate at which metabolite flows through a step — can be high, and can swing enormously, while the concentration of that step's substrate does not move at all. **Flux and concentration are independent variables, and regulation is almost always about flux.** Blood glucose is the concrete case: glucose entering the blood from several sources is balanced against uptake into tissues, and the concentration is held near 5 mM. That is homeostasis for blood glucose, and diabetes mellitus is what its failure looks like.",
      cn: "先说清 dynamic steady state（动态稳态）到底在断言什么 —— 后面一切都挂在这句话上。在一条通路 A → S → P 里，前一个反应供应 S 的速率，正好等于后一个反应消耗它的速率，所以当两个速率相等时，S 的浓度不变。反直觉的地方在于它放开了什么：通量（flux，也就是代谢物流过这一步的速率）可以很高、可以剧烈摆动，而这一步底物的浓度纹丝不动。也就是说，**通量和浓度是两个独立的变量，而调节几乎永远是在调通量。**血糖是那个具体例子：从几个来源进入血液的葡萄糖，与被组织摄取的量相互抵消，浓度被维持在 5 mM 附近。这就是血糖的稳态（homeostasis），而糖尿病就是它失效时的样子。",
      src: "A p.497–498, §13.5"
    },
    {
      link_en: "and why regulation can never be a local decision",
      link_cn: "以及为什么调节永远不可能是一个局部决定",
      en: "**Metabolism is a three-dimensional meshwork rather than a set of parallel lines, because most metabolites are shared by more than one pathway.** Glucose 6-phosphate in a liver cell has at least five fates open to it: glycogen, the pentose phosphate pathway, glycolysis, release into the blood as free glucose, and the amino sugars. Committing it to one of those changes the flow of metabolites everywhere else, directly or indirectly — so a regulatory decision at one junction propagates across the meshwork, and that is why the mechanisms below all have to work together rather than one at a time.",
      cn: "**代谢是一张三维的网，而不是几条平行的线 —— 因为大多数代谢物同时属于不止一条通路。**肝细胞里的葡萄糖-6-磷酸至少有五个去向敞开着：糖原、磷酸戊糖途径、糖酵解、作为游离葡萄糖释放进血液，以及氨基糖。把它投给其中之一，就会直接或间接地改变别处所有代谢物的流动 —— 所以某一个岔口上的调节决定会沿着整张网传播开去。这正是下面那些机制必须协同工作、而不是各干各的原因。",
      src: "A p.497, §13.5, Fig. 13-28"
    },
    {
      link_en: "how much a cell spends on this, and the two handles it has",
      link_cn: "细胞在这件事上花了多少钱，以及它手上有哪两个把手",
      en: "In humans about 2,500 genes — roughly 12% of all genes — encode regulatory proteins: receptors, regulators of gene expression, and more than 500 different protein kinases. A cell spending an eighth of its genome on regulatory machinery is not treating regulation as an afterthought. **What all that machinery does reduces to two handles: change the number of enzyme molecules, or change the catalytic activity of the molecules already there.** These act on time scales running from milliseconds to many hours, which is what makes them complementary rather than redundant — and it is very common for one enzyme to be regulated by transcription and allosterically and covalently all at once, each layer at its own speed.",
      cn: "在人体内，大约 2,500 个基因 —— 约占全部基因的 12% —— 编码调控蛋白：受体、基因表达的调控者，以及五百多种不同的蛋白激酶。一个把八分之一基因组花在调控机器上的细胞，显然没有把调控当作事后补丁。**而这些机器所做的事，归结起来只有两个把手：改变酶分子的数量，或者改变已经在场的那些分子的催化活性。**它们作用的时间尺度从毫秒到许多小时不等 —— 这正是它们互补而非冗余的原因；而且非常常见的情况是，同一个酶同时被转录水平、别构水平和共价修饰水平调节着，每一层各按自己的速度。",
      src: "A p.498, 501, §13.5"
    },
    {
      link_en: "the first handle: how much enzyme there is. Five places, not one",
      link_cn: "第一个把手：酶有多少。有五个位置，不是一个",
      en: "(1) Transcription. An extracellular signal activates a transcription factor, which is a nuclear protein that binds specific DNA sequences called response elements near a gene's promoter and switches transcription on or off. The detail that pays: genes whose proteins act together — the enzymes of glycolysis, for instance — often share the same response element sequence, so a single signal through a single transcription factor moves the whole group together. That is the mechanism behind every co-regulated pathway. (2) mRNA stability: the amount of an mRNA is set by its rate of synthesis and its rate of destruction by cellular ribonucleases. (3) Translation rate — and note the warning: an n-fold rise in an mRNA does not always mean an n-fold rise in its protein. (4) Degradation: **proteins last from minutes to many days, and some are tagged for destruction by covalent attachment of ubiquitin, which is a small protein that marks them for the proteasome, the cell's protein shredder.** Average half-lives run liver 0.9 days, kidney 1.7, heart 4.1, brain 4.6, muscle 10.7. Fast turnover is expensive, and what it buys is speed: a short-lived protein reaches a new steady-state level much faster. And (5) sequestration: keep the enzyme and its substrate in different compartments, so that transport across a membrane becomes the limiting step — hexokinase and glucose in a muscle cell, where entry depends on the glucose transporters.",
      cn: "（1）转录。一个胞外信号激活一个转录因子 —— 也就是一种核内蛋白，它结合基因启动子附近一段特定的 DNA 序列，那段序列叫 response element（应答元件） —— 从而开启或关闭转录。真正有用的细节在这里：那些「产物要一起干活」的基因，比如糖酵解的全套酶，往往共用同一段应答元件序列 —— 于是一个信号经由一个转录因子，就能把整组基因一起搬动。这就是每一条「协同调控」的通路背后的机制。（2）mRNA 稳定性：一种 mRNA 的量，由它的合成速率和被细胞内核酸酶降解的速率共同决定。（3）翻译速率 —— 注意这条警告：mRNA 涨 n 倍，并不总意味着它的蛋白产物也涨 n 倍。 接着是 （4）降解：**蛋白的寿命从几分钟到许多天不等，其中一些被共价挂上 ubiquitin（泛素，一个小蛋白）做标记，送进 proteasome（蛋白酶体，细胞的蛋白粉碎机）。**平均半衰期：肝 0.9 天、肾 1.7、心 4.1、脑 4.6、肌肉 10.7。快速周转很贵，买到的是速度：短寿命的蛋白能快得多地达到新的稳态水平。 最后是 （5）区隔（sequestration）：把酶和它的底物放在不同的区室里，于是跨膜转运本身成了限速步骤 —— 肌细胞里的己糖激酶与葡萄糖就是如此，葡萄糖能不能进来取决于葡萄糖转运蛋白。",
      src: "A p.498–499, §13.5, Fig. 13-29, Table 13-8",
      see: [{ id: "L-28-3-1", en: "transcription factors and response elements in full", cn: "转录因子与应答元件的完整机制" }]
    },
    {
      link_en: "and when all five have acted, the result is measured at three levels",
      link_cn: "这五个位置全部动过之后，结果在三个层次上被测量",
      en: "In vertebrates the liver is the most adaptable tissue: switching from a high-carbohydrate to a high-lipid diet changes the transcription of hundreds of genes and therefore the levels of hundreds of proteins. Such global changes are quantified as the transcriptome, which is the entire complement of mRNAs in a cell; the proteome, the entire complement of proteins; and the metabolome, the total ensemble of low-molecular-weight metabolites. The shape of a metabolome is worth knowing, because it is not what a pathway diagram would lead you to expect. In E. coli growing on glucose, 103 measured metabolites are dominated by a few classes: glutamate alone is 49%, at 9.6 mM; nucleotides, mostly ribonucleoside triphosphates, are 15%; the intermediates of glycolysis, the citric acid cycle and the pentose phosphate pathway together are another 15%; redox cofactors plus glutathione make 9%. **The intermediates that fill a metabolism course are, by mass, a minority of what is actually in the cell.**",
      cn: "在脊椎动物里，肝是适应性最强的组织：从高碳水饮食换成高脂饮食，会改变数以百计基因的转录，因而改变数以百计蛋白的水平。这类全局性的变化被在三个层次上量化：transcriptome（转录组），即细胞内全部 mRNA 的总和；proteome（蛋白质组），即全部蛋白的总和；metabolome（代谢组），即全部低分子量代谢物的总和。代谢组的「形状」值得知道，因为它和通路图会让你预期的样子不一样。在以葡萄糖为碳源生长的大肠杆菌里，测到的 103 种代谢物由很少几类主导：光谷氨酸就占 49%，绝对浓度 9.6 mM；核苷酸（主要是核糖核苷三磷酸）占 15%；糖酵解、柠檬酸循环与磷酸戊糖途径的中间产物加在一起又占 15%；氧化还原辅因子加谷胱甘肽占 9%。**塞满一门代谢课的那些中间产物，按质量算只是细胞内容物里的少数派。**",
      src: "A p.499, §13.5, Fig. 13-30"
    },
    {
      link_en: "the second handle: activity. The cheapest version is simply substrate concentration",
      link_cn: "第二个把手：活性。最便宜的那一种，就是底物浓度本身",
      en: "Every enzyme is sensitive to how much substrate it has. For an enzyme following Michaelis-Menten kinetics, the initial rate is half of maximal when the substrate concentration equals Km, which is the concentration at which that happens; below Km the rate falls off, and well below Km it is simply proportional to substrate concentration. Whether this counts as regulation depends on a measurement: intracellular substrate concentrations turn out to sit in the same range as Km, or lower. Plotting measured metabolite concentrations in E. coli against the Km values of the enzymes that consume them puts the points near the line of equality, so **substrate-level regulation works because the cell happens to operate on the steep part of the curve.** Two riders. Isozymes — different protein forms catalysing the same reaction — have different Km values, so one and the same change in glucose concentration affects the several forms of hexokinase differently, which is what makes isozymes a regulatory device and not just a curiosity. And the exception: for phosphoryl transfers from ATP and for redox reactions using NAD+ or NADPH, the cofactor concentration sits well above its Km, so those cofactors are not limiting, and a rate change cannot be explained by a small dip in ATP.",
      cn: "每个酶都对「手上有多少底物」敏感。对一个服从米氏动力学的酶来说，当底物浓度等于 Km（也就是使初速率达到最大值一半的那个浓度）时，速率是最大值的一半；低于 Km 速率就掉下来，远低于 Km 时速率干脆与底物浓度成正比。这算不算调节，取决于一个测量结果：细胞内底物浓度恰好落在与 Km 同一量级、或者更低的位置上。把大肠杆菌里实测的代谢物浓度，对着消耗它们的那些酶的 Km 画出来，点子就落在等值线附近 —— **所以底物水平的调节之所以有效，是因为细胞恰好工作在曲线陡峭的那一段上。**两条附注。isozyme（同工酶，催化同一反应的不同蛋白形式）的 Km 各不相同，所以同一个葡萄糖浓度变化，对几种己糖激酶的影响并不相同 —— 这正是同工酶成为调节手段、而不只是一件趣闻的原因。还有那个例外：对以 ATP 为供体的磷酰基转移、以及用 NAD⁺ 或 NADPH 的氧化还原反应而言，辅因子的浓度远高于它的 Km，所以这些辅因子不是限速因素；速率的变化，不能用 ATP 稍微掉了一点来解释。",
      src: "A p.500, §13.5, Fig. 13-31"
    },
    {
      link_en: "the next version of the activity handle, and the number that says how good it is",
      link_cn: "活性这个把手的下一种用法，以及一个能说明「它到底有多好」的数字",
      en: "An allosteric effector binds an enzyme somewhere other than the active site and works through a conformational change, which is why it need bear no chemical resemblance to the substrate — that is what lets the end product of a pathway regulate an enzyme several steps upstream. What such an effector typically does is convert hyperbolic kinetics into sigmoid kinetics, meaning an S-shaped curve, and on the steep part of an S a small change in substrate or effector concentration produces a large change in rate. How large is measurable. Cooperativity is quantified by the Hill coefficient, nH, with higher values meaning more cooperativity, and the table of what it buys is the whole argument: driving an enzyme from 10% to 90% of its maximal rate needs an 81-fold change in substrate concentration when nH = 1, which is the value for no cooperativity at all; 9-fold at nH = 2; 4.3-fold at nH = 3; and only 3-fold at nH = 4. **Three against eighty-one. That ratio is the entire content of the claim that allosteric regulation is effective: a cooperative enzyme turns a narrow band of substrate concentration into something close to a switch.**",
      cn: "一个别构（allosteric）效应物结合在酶上活性位点以外的地方，通过构象变化起作用 —— 所以它在化学上不必与底物有任何相似之处，而这正是「一条通路的终产物可以去调节上游好几步的某个酶」得以可能的原因。这样一个效应物通常做的事，是把双曲线型的动力学变成 sigmoid（S 形）动力学；而在 S 形曲线陡峭的那一段上，底物或效应物浓度的一点小变化，会带来速率的巨大变化。「巨大」是可以量出来的。协同性由 Hill coefficient（希尔系数，nH）量化，数值越大协同性越强；而它买到了什么，一张表就说完了：要把一个酶从最大速率的 10% 推到 90%，在 nH = 1（也就是完全没有协同性）时需要底物浓度改变 81 倍；nH = 2 时 9 倍；nH = 3 时 4.3 倍；nH = 4 时只要 3 倍。**三倍对八十一倍。「别构调节很有效」这句话的全部含义就是这个比值：一个有协同性的酶，把一段很窄的底物浓度区间变成了近乎一个开关。**",
      src: "A p.500, §13.5, Table 13-9",
      see: [{ id: "L-6-3-1", en: "Km, Vmax and where the Michaelis-Menten equation comes from", cn: "Km、Vmax，以及米氏方程是从哪里来的" }]
    },
    {
      link_en: "the third version, and the one that answers to signals from outside the cell",
      link_cn: "第三种用法 —— 也是那个响应细胞外信号的用法",
      en: "Covalent modification changes an enzyme within seconds or minutes of a regulatory signal, and phosphorylation with its reversal is by far the commonest form: **up to half the proteins in a eukaryotic cell are phosphorylated under some circumstances, which makes this the default state of a proteome rather than a special case.** Saying an enzyme is phosphorylated explains nothing on its own, so hold the four things a phosphoryl group can do: it can alter the electrostatic character of the active site; push an inhibitory stretch of the enzyme out of the active site; change how the enzyme interacts with other proteins; or force conformational changes that show up as a changed maximal rate or a changed Km. Reversibility is a design requirement, not a convenience — a family of phosphoprotein phosphatases restores the enzyme, and at least some of those phosphatases are themselves regulated, so the off switch has its own off switch. One further mechanism belongs here: many enzymes are switched by association with and dissociation from a separate regulatory protein. The cyclic-AMP-dependent protein kinase PKA is the case: it is inactive until cyclic AMP binds and pulls its catalytic subunits away from its inhibitory ones.",
      cn: "共价修饰在收到调控信号后的几秒到几分钟内改变一个酶，其中最常见的形式远远是磷酸化及其逆反应：在某些情况下，**真核细胞里多达一半的蛋白是被磷酸化的 —— 这说明它是蛋白质组的默认状态，而不是什么特例。**光说「这个酶被磷酸化了」本身什么也没解释，所以要记住一个磷酰基能做的四件事：改变活性位点的静电性质；把酶上一段起抑制作用的区域推出活性位点；改变这个酶与其他蛋白的相互作用方式；逼出构象变化，表现为最大速率或 Km 的改变。可逆性是设计上的硬性要求，不是顺手的便利 —— 一族磷酸蛋白磷酸酶负责把酶复原，而其中至少有一些磷酸酶自己也受调控，所以这个「关」的开关，自己还有一个「关」的开关。还有一种机制属于这里：许多酶靠与一个独立的调节蛋白结合、解离来开关。例如：依赖环腺苷酸的蛋白激酶 PKA 就是那个例子：它一直没有活性，直到 cyclic AMP 结合上来，把它的催化亚基从抑制性亚基上拉开。",
      src: "A p.501, §13.5",
      see: [{ id: "L-12-1-1", en: "how an extracellular signal reaches an enzyme in the cytosol", cn: "胞外信号怎么抵达胞质里的一个酶" }]
    },
    {
      link_en: "one distinction to read mechanisms with, and it comes with its own hedge",
      link_cn: "一个用来读机制的区分 —— 而它自带一句限定",
      en: "Metabolic regulation means processes that hold some cellular quantity, such as a metabolite concentration, steady over time even while the flow through the pathway changes. Metabolic control means a process that changes the output of a pathway over time, in response to an outside signal or a change in circumstances. The difference is what the verb acts on: **regulation keeps a concentration constant while flux moves; control moves the flux.** Blood glucose held at 5 mM across meals is regulation; the whole-body shift in fuel use after insulin or adrenaline is control. The hedge belongs with the distinction and should not be dropped: it is useful and not always easy to make, so treat it as a lens for reading a mechanism rather than as a box to defend — an honest answer often names both and says which aspect is being looked at.",
      cn: "metabolic regulation（代谢调节）指的是：在通量本身正在改变的同时，把某个细胞量（例如某个代谢物的浓度）维持在稳定水平上的那些过程。metabolic control（代谢控制）指的是：响应外部信号或环境变化，随时间改变一条通路输出量的那个过程。差别在于动词作用于什么：**调节让浓度不变而通量在动；控制则去动通量本身。**一日三餐之间血糖被稳在 5 mM，那是调节；胰岛素或肾上腺素之后全身燃料使用方式的整体切换，那是控制。那句限定和这个区分是一体的，不该被丢掉：它有用，但并不总是容易划清。所以把它当成读机制时的一副镜片，而不是一个要去捍卫的分类 —— 诚实的回答往往两个都点到，并说明自己在看哪一面。",
      src: "A p.501, §13.5"
    },
    {
      link_en: "now the core question: of all the enzymes in a pathway, which ones is regulation actually sitting on?",
      link_cn: "现在进入核心问题：一条通路里那么多酶，调节究竟坐在哪几个上？",
      en: "There is a test, and it replaces intuition. For a reaction A + B -> C + D, the mass-action ratio Q is [C][D]/[A][B] measured in the living cell, and the equilibrium constant K'eq is what that same ratio would be at equilibrium. When Q and K'eq are within one to two orders of magnitude of each other, the reaction is sitting near equilibrium. Such a step carries net flow that is only the small difference between a large forward rate and a large reverse rate, so a small change in concentration swings its net rate hugely and can even reverse it — which makes it a transmitter of flux, not a regulator of it. **By that test more than half the enzymes of glycolysis are near equilibrium, the practical line being a calculated ΔG under 6 kJ/mol in absolute value.** The three that are not near equilibrium are hexokinase, PFK-1 and pyruvate kinase — the same three irreversible steps that gluconeogenesis has to bypass. For PFK-1 the numbers are stark: K'eq is about 1,000, while Q in a liver cell at steady state is about 0.1. Four orders apart.",
      cn: "这里有一个判据，它取代了直觉。对一个反应 A + B → C + D，mass-action ratio（质量作用比）Q 就是在活细胞里实测的 [C][D]/[A][B]；而平衡常数 K′eq 是同一个比值在平衡时会取的数值。当 Q 与 K′eq 相差在一到两个数量级以内时，这个反应就坐在平衡附近。这样一步的净流量，只是「很大的正向速率」与「很大的逆向速率」之间那点小小的差额，所以浓度稍微一变，它的净速率就剧烈摆动、甚至反向 —— 这让它成为通量的传递者，而不是通量的调节者。**按这个判据，糖酵解里超过一半的酶都在平衡附近（实用的界线是：算出来的 ΔG 绝对值小于 6 kJ/mol）。**不在平衡附近的那三个是 hexokinase、PFK-1 和 pyruvate kinase —— 也正是糖异生必须绕开的那三个不可逆步骤。PFK-1 的数字很刺眼：K′eq 约为 1,000，而肝细胞稳态下的 Q 约为 0.1。相差四个数量级。",
      src: "A p.501–502, §13.5, Table 13-10",
      see: [
        { id: "L-14-4-1", en: "the three bypasses gluconeogenesis needs, in full", cn: "糖异生所需的那三条绕行路线的完整内容" },
        { id: "L-14-5-1", en: "how PFK-1 is actually switched", cn: "PFK-1 究竟是怎么被切换的" }
      ]
    },
    {
      link_en: "and the direction of the causal arrow, which is easy to state backwards",
      link_cn: "还有那个很容易说反的因果方向",
      recall_en: "the same argument as ATP's phosphorylation potential, seen from the other side",
      recall_cn: "和 ATP 磷酸化势那套论证是同一个，只是从另一面看",
      en: "It is because the reaction is held far from equilibrium in the cell that it is exergonic there and runs forward — the holding comes first and the exergonic behaviour follows from it. It is held there because its rate is limited by how much PFK-1 there is and by the allosteric effectors acting on that PFK-1. Two things go wrong if a reaction with a large equilibrium constant is allowed to reach equilibrium. Fructose 1,6-bisphosphate would climb into the molar range and wreck the cell osmotically. And if ATP + H2O -> ADP + Pi were allowed to approach equilibrium, its actual free-energy change would approach zero, and ATP would lose the phosphoryl group transfer potential that is the only reason it is worth anything. One caution bounds all of it: the adjustments acting on any one enzyme are so numerous that you cannot tell from the properties of a single enzyme whether it strongly influences net flow through the whole pathway. **Flux control is a property of the pathway, and it has to be measured.**",
      cn: "正是因为这个反应在细胞里被摁在远离平衡的地方，它在细胞条件下才是放能的、才朝前跑 —— 先有「被摁住」，「放能」是由此而来的结果。它之所以被摁在那里，是因为它的速率受限于「有多少 PFK-1」以及「作用在这些 PFK-1 上的别构效应物」。如果放任一个平衡常数很大的反应去达到平衡，有两件事会出问题。第一，果糖-1,6-二磷酸的浓度会爬升到摩尔级，在渗透压上把细胞毁掉。第二，如果 ATP + H₂O → ADP + Pi 被允许接近平衡，它实际的自由能变化就会趋近于零 —— ATP 会失去磷酰基转移势，而那是它唯一值钱的地方。最后有一句限定罩着这一切：作用在任何一个酶身上的调整实在太多，以至于你无法仅凭单个酶的性质，判断它对整条通路的净流量有没有强影响。**通量控制是整条通路的性质，而且必须靠测量得到。**",
      src: "A p.502, §13.5",
      see: [{ id: "L-13-3-1", en: "the phosphorylation potential this would destroy", cn: "这样会被毁掉的那个磷酸化势" }]
    },
    {
      link_en: "and finally, the one signal the cell listens hardest to — which is not the one that does the work",
      link_cn: "最后，细胞听得最认真的那一个信号 —— 而它并不是真正干活的那一个",
      en: "The argument runs in three steps. The kinetic danger: enzymes that use ATP have Km values of 0.1 to 1 mM while a typical cell holds ATP at 5 to 10 mM, so ATP normally saturates them; let ATP fall far enough and hundreds of reactions drop below saturation and slow down at once, which a cell probably does not survive. The thermodynamic danger, on top of it: since ATP becomes ADP or AMP when spent, the [ATP]/[ADP] ratio sets the driving force of every reaction using them at once, and the same goes for NADH/NAD+ and NADPH/NADP+. The amplification, which is the elegant part: a cell holds ATP at 5 to 10 mM but AMP below 0.1 mM, and spending ATP makes AMP in two steps — hydrolysis gives ADP, and adenylate kinase then turns 2ADP into ATP plus AMP. Because AMP starts from so low a base, a 10% fall in ATP shows up as roughly a 600% rise in AMP (5.0 to 4.5 mM ATP; ADP unchanged at 1.0; AMP 0.1 to 0.6). **AMP is therefore a far more sensitive indicator of energy status than ATP itself, which is why the emergency response is keyed to it.** The reader of that signal is AMP-activated protein kinase (AMPK) — a different enzyme from the cyclic-AMP-dependent PKA above, despite the similar names — which AMP activates allosterically. Its output is one coherent programme: increase glucose transport, switch on glycolysis and fatty acid oxidation, and shut down the synthesis of glycogen, fatty acids, cholesterol and protein. Every one of those raises ATP and lowers AMP.",
      cn: "论证分三步走。第一，动力学上的危险：用 ATP 的那些酶，Km 在 0.1 到 1 mM 之间，而典型细胞把 ATP 维持在 5 到 10 mM，所以 ATP 平时是把它们饱和的；一旦 ATP 掉得够多，数以百计的反应会同时跌出饱和区、同时变慢，细胞多半熬不过去。第二，叠加在上面的热力学危险：ATP 花掉之后变成 ADP 或 AMP，所以 [ATP]/[ADP] 比值一次性决定了所有用到它们的反应的推动力，NADH/NAD⁺ 与 NADPH/NADP⁺ 同理。第三，放大效应 —— 这是精妙的地方：细胞把 ATP 维持在 5 到 10 mM，却把 AMP 压在 0.1 mM 以下；而花掉 ATP 分两步生成 AMP —— 水解先给出 ADP，接着 adenylate kinase 把 2ADP 变成 ATP 加 AMP。因为 AMP 的基数极低，ATP 只要下降 10%，AMP 就会上升大约 600%（ATP 由 5.0 降到 4.5 mM；ADP 不变，仍是 1.0；AMP 由 0.1 升到 0.6）。**所以 AMP 是比 ATP 本身灵敏得多的能量状态指示器 —— 这正是应急响应挂在它身上的原因。**读这个信号的是 AMPK（AMP 激活的蛋白激酶） —— 尽管名字像，它与上面那个依赖 cyclic AMP 的 PKA 是两个不同的酶 —— AMP 别构地激活它。它的输出是一套自洽的应急方案：提高葡萄糖转运，开启糖酵解与脂肪酸氧化，关掉糖原、脂肪酸、胆固醇和蛋白质的合成。这里每一条，都会把 ATP 抬上去、把 AMP 压下来。",
      src: "A p.502–503, §13.5, Table 13-11",
      see: [{ id: "L-23-3-1", en: "AMPK inside the whole-body hormonal picture", cn: "AMPK 在全身激素图景里的位置" }]
    }
  ],
  terms: [
    { en: "dynamic steady state / flux", cn: "动态稳态／通量",
      def_en: "The condition in which each step of a pathway receives its substrate at exactly the rate it consumes it, so concentrations hold still. Flux is the rate at which metabolite flows through a step, and it is free to swing widely while concentrations do not move — which is why regulation is almost always about flux and not about concentration.",
      def_cn: "通路每一步接收底物的速率正好等于它消耗底物的速率，因而浓度保持不动的那种状态。通量指代谢物流过某一步的速率，它可以大幅摆动而浓度纹丝不动 —— 这正是调节几乎永远针对通量、而不是针对浓度的原因。" },
    { en: "response element", cn: "应答元件",
      def_en: "A specific DNA sequence near a gene's promoter, bound by an activated transcription factor. Genes whose products work together often share one, so a single signal switches an entire pathway's enzymes on or off as a group.",
      def_cn: "基因启动子附近一段特定的 DNA 序列，被激活的转录因子结合在这里。产物需要一起干活的那些基因常常共用同一段，所以一个信号就能把整条通路的酶成组开关。" },
    { en: "protein turnover", cn: "蛋白质周转",
      def_en: "The continuous synthesis and destruction of a protein, some of it directed by covalent attachment of ubiquitin marking the protein for the proteasome. Average half-lives run from 0.9 days in liver to 10.7 in muscle. It costs ATP, and what it buys is speed: a short-lived protein reaches a new steady-state level much faster.",
      def_cn: "蛋白不断被合成又被销毁，其中一部分由共价连接的泛素标记、送往蛋白酶体。平均半衰期从肝的 0.9 天到肌肉的 10.7 天。它耗 ATP，买到的是速度：短寿命的蛋白能快得多地达到新的稳态水平。" },
    { en: "transcriptome / proteome / metabolome", cn: "转录组／蛋白质组／代谢组",
      def_en: "The entire complement of a cell's mRNAs, of its proteins, and of its low-molecular-weight metabolites. Measured in E. coli on glucose, the last of these is dominated by glutamate at 49% — pathway intermediates together are only about 15%.",
      def_cn: "一个细胞全部 mRNA 的总和、全部蛋白的总和、全部低分子量代谢物的总和。在以葡萄糖生长的大肠杆菌里实测，最后一个由谷氨酸主导，占 49%，而通路中间产物加起来只有约 15%。" },
    { en: "Hill coefficient", cn: "希尔系数",
      def_en: "The number that quantifies cooperativity, and therefore how sharp an allosteric enzyme's response is. Going from 10% to 90% of maximal rate takes an 81-fold change in substrate with no cooperativity, and only a 3-fold change at a coefficient of 4 — which is what makes allosteric regulation a near-switch.",
      def_cn: "量化协同性的那个数字，也就等于量化一个别构酶的响应有多陡。从最大速率的 10% 到 90%，在没有协同性时需要底物变化 81 倍，而系数为 4 时只需要 3 倍 —— 这正是别构调节近乎一个开关的原因。" },
    { en: "metabolic regulation vs metabolic control", cn: "代谢调节与代谢控制",
      def_en: "Holding a concentration steady while flux changes, versus changing the flux itself in response to an outside signal. Blood glucose at 5 mM across meals is the first; the shift in fuel use after insulin is the second. The distinction is useful and not always easy to make, so it reads a mechanism rather than classifies it.",
      def_cn: "在通量变化的同时把某个浓度稳住，对上响应外部信号去改变通量本身。三餐之间血糖稳在 5 mM 是前者；胰岛素之后燃料使用的切换是后者。这个区分有用，但并不总是容易划清，所以它是用来读机制的，不是用来分类的。" },
    { en: "mass-action ratio, Q", cn: "质量作用比 Q",
      def_en: "The ratio of product to substrate concentrations actually measured in a living cell, [C][D]/[A][B]. Compared against the equilibrium constant, it says where a reaction sits: within one to two orders of magnitude means near equilibrium, and more than half of glycolysis is there.",
      def_cn: "在活细胞里实测的产物与底物浓度之比，[C][D]/[A][B]。把它与平衡常数相比，就知道一个反应坐在哪里：相差一到两个数量级以内就是「在平衡附近」，而糖酵解里超过一半的酶都在那里。" },
    { en: "far-from-equilibrium reaction", cn: "远离平衡的反应",
      def_en: "A step whose measured Q is orders of magnitude away from its equilibrium constant — PFK-1, with K'eq near 1,000 against Q near 0.1. Being held there is the cause of its being exergonic in the cell, not the consequence, and such steps are where regulation actually sits.",
      def_cn: "实测 Q 与它的平衡常数相差好几个数量级的那种步骤 —— 例如 PFK-1，K′eq 约 1,000 而 Q 约 0.1。被摁在那里是它在细胞里放能的原因，而不是结果；调节真正坐落的地方就是这类步骤。" },
    { en: "AMP as an amplified signal, and AMPK", cn: "作为被放大信号的 AMP，以及 AMPK",
      def_en: "A cell holds ATP at 5 to 10 mM and AMP below 0.1 mM, so a 10% fall in ATP appears as roughly a 600% rise in AMP. That makes AMP the sensitive indicator of energy status, read by AMP-activated protein kinase, which switches on glucose transport, glycolysis and fatty acid oxidation and switches off synthesis of glycogen, fat, cholesterol and protein.",
      def_cn: "细胞把 ATP 维持在 5 到 10 mM，却把 AMP 压在 0.1 mM 以下，所以 ATP 下降 10% 会表现为 AMP 上升约 600%。这让 AMP 成为灵敏的能量状态指示器，由 AMP 激活的蛋白激酶读取 —— 它开启葡萄糖转运、糖酵解与脂肪酸氧化，关闭糖原、脂肪、胆固醇与蛋白质的合成。" }
  ]
};

/* ------------------------------------------------------------------ L-14-4-1 */
window.BIOLITE_SPINE["L-14-4-1"] = {
  assumed: ["glycolysis", "glycogen", "liver", "kidney", "muscle", "brain",
            "erythrocyte", "testis", "adipocyte", "seedling", "yeast", "sucrose",
            "acetate", "propionate", "alanine", "glutamine", "leucine", "lysine",
            "fumarate", "succinyl-CoA", "citric acid cycle", "amino acid", "protein",
            "glucose", "ATP", "ADP", "GTP", "GDP", "NADH", "NAD+", "AMP", "Mg2+",
            "glucagon", "cyclic AMP", "protein kinase A", "hormone", "enzyme",
            "mitochondrion", "cytosol", "endoplasmic reticulum", "photosynthesis",
            "cell wall", "hexokinase", "pyruvate kinase", "aldolase"],
  nodeTitle_en: "Gluconeogenesis",
  nodeTitle_cn: "糖异生",
  title_en: "Three glycolytic steps are too far downhill to reverse — so three bypasses are built, and their cost is what buys direction",
  title_cn: "糖酵解有三步下坡太陡、退不回来 —— 于是造了三条绕行路线，而它们的开销买到的正是「方向」",
  steps: [
    {
      en: "Start with the demand, because it is a number and it makes everything else inevitable. Some tissues run almost entirely on glucose: the brain and nervous system, and also the erythrocytes, the testes, the renal medulla and embryonic tissue. **The brain alone requires about 120 g of glucose each day — more than half of all the glucose stored as glycogen in muscle and liver put together.** So the store is smaller than two days of one organ's demand, and between meals, through a longer fast, or after hard exercise it runs out. Gluconeogenesis, literally the new making of sugar, is the pathway that builds glucose from non-carbohydrate precursors — pyruvate and related three- and four-carbon compounds. It exists in all animals, plants, fungi and microorganisms, and the reactions are essentially the same everywhere; what changes from tissue to tissue is the context and the regulation.",
      cn: "从需求开始，因为它是一个数字，而这个数字让后面的一切都变得不可避免。有些组织几乎完全靠葡萄糖运转：脑与神经系统，还有红细胞、睾丸、肾髓质和胚胎组织。**光是脑，每天就需要约 120 g 葡萄糖 —— 这比肌肉和肝里以糖原形式储存的全部葡萄糖加起来还要多一半以上。**所以那点库存撑不到一个器官两天的需求；两餐之间、较长时间的禁食中，或者剧烈运动之后，它就见底了。糖异生（gluconeogenesis，字面意思就是「新造糖」）这条通路，用非糖类的前体 —— 丙酮酸以及与之相关的三碳、四碳化合物 —— 造出葡萄糖。它存在于所有动物、植物、真菌和微生物中，各处的反应本质上相同；随组织变化的是它所处的语境和它受到的调控。",
      src: "A p.533, §14.4"
    },
    {
      link_en: "which organs run it, and what they run it on",
      link_cn: "哪些器官在跑这条路，用的又是什么原料",
      en: "In mammals gluconeogenesis happens mainly in the liver, to a lesser extent in the renal cortex — the outer layer of the kidney — and in the epithelial cells lining the small intestine; the glucose made there goes into the blood for every other tissue. The important precursors in animals are three-carbon compounds — lactate, pyruvate and glycerol — together with certain amino acids. One loop has a name worth having: **after hard exercise, lactate made by anaerobic glycolysis in skeletal muscle travels in the blood to the liver, is converted there to glucose, and the glucose travels back to muscle and is stored as glycogen.** That circuit is the Cori cycle. Outside animals the same pathway serves other ends: a plant seedling converts stored fat and protein through gluconeogenesis into sucrose for transport, and many microorganisms start it from two- and three-carbon compounds such as acetate, lactate and propionate in their growth medium.",
      cn: "在哺乳动物里，糖异生主要发生在肝，其次是肾皮质（肾的外层）以及小肠上皮细胞；在那里造出来的葡萄糖进入血液，供给其余所有组织。动物体内重要的前体是三碳化合物 —— 乳酸、丙酮酸和甘油 —— 外加某些氨基酸。有一个循环的名字值得记住：**剧烈运动之后，骨骼肌里由无氧糖酵解产生的乳酸随血液到达肝，在肝内被转变成葡萄糖，葡萄糖再随血液回到肌肉、存成糖原。**这个回路叫 Cori cycle（科里循环）。在动物之外，同一条通路服务于别的目的：植物幼苗通过糖异生把储存的脂肪和蛋白转变成蔗糖以便运输；许多微生物则从培养基里的二碳、三碳化合物（例如乙酸、乳酸、丙酸）出发跑这条路。",
      src: "A p.533, §14.4"
    },
    {
      link_en: "and here is the measurement that decides the whole shape of the pathway",
      link_cn: "而下面这个测量结果，决定了整条通路的形状",
      en: "Seven of the ten enzymatic reactions of gluconeogenesis are exactly the reverse of glycolytic ones. Three are not, because in a living cell those three run so far downhill that nothing can push them back up. The three are glucose to glucose 6-phosphate by hexokinase, fructose 6-phosphate to fructose 1,6-bisphosphate by PFK-1, and phosphoenolpyruvate (PEP) to pyruvate by pyruvate kinase. Measured in erythrocytes at pH 7, their actual cellular free-energy changes are -33.4, -22.2 and -16.7 kJ/mol, while every one of the other seven steps sits between -6 and +25 — that is, near zero. Read the actual column, not the standard column, because they rank the steps differently: **the aldolase reaction has the largest positive standard free-energy change in the whole table, +23.8 kJ/mol, and yet inside the cell it runs between -6 and 0.** Standard values would have picked the wrong three steps.",
      cn: "糖异生十个酶促反应中，有七个正好是糖酵解反应的逆过程。另外三个不是 —— 因为在活细胞里，这三步下坡下得太陡，没有什么能把它们推回去。这三步是：hexokinase 催化的葡萄糖 → 葡萄糖-6-磷酸；PFK-1 催化的果糖-6-磷酸 → 果糖-1,6-二磷酸；pyruvate kinase 催化的磷酸烯醇丙酮酸（PEP）→ 丙酮酸。在红细胞、pH 7 条件下实测，它们在细胞里的实际自由能变化分别是 -33.4、-22.2 和 -16.7 kJ/mol，而其余七步全都落在 -6 到 +25 之间 —— 也就是接近零。要读「实际值」那一列，不要读「标准值」那一列，因为两列给出的排序不一样：**aldolase 反应的标准自由能变化是全表最大的正值，+23.8 kJ/mol，可它在细胞里跑的是 -6 到 0。**照标准值挑，会挑错这三步。",
      src: "A p.534–535, §14.4, Table 14-2",
      see: [{ id: "L-13-5-1", en: "the same three steps identified by Q against K'eq", cn: "用 Q 与 K′eq 之比认出的同样这三步" }]
    },
    {
      link_en: "the first bypass is the complicated one, and it takes two enzymes in two compartments",
      link_cn: "第一条绕行路线最复杂 —— 它动用了两个区室里的两个酶",
      en: "Pyruvate cannot be pushed back to PEP by reversing pyruvate kinase, so the cell takes a roundabout route that in eukaryotes needs enzymes in both the cytosol and the mitochondrion. Pyruvate is first carried into the mitochondrion, or made there from alanine by transamination, which is the swapping of an amino group onto a keto acid. Then comes pyruvate carboxylase: a mitochondrial enzyme that requires the coenzyme biotin, a small helper molecule the enzyme cannot work without, and turns pyruvate plus bicarbonate plus ATP into oxaloacetate — the four-carbon acid that carries the carbon onward — plus ADP and phosphate. The chemistry is worth having in two beats: bicarbonate is first phosphorylated by ATP into a mixed anhydride, carboxyphosphate, and then biotin displaces that phosphate to become carboxybiotin. Biotin is covalently tied to the enzyme through an amide bond to the ε-amino group of a lysine residue, and this long biotinyl-lysine arm swings the loaded CO2 from the site that makes it to the site that delivers it onto pyruvate. **So the ATP is not spent on the bond that ends up forming — it is spent on making the CO2 carriable.**",
      cn: "丙酮酸没法靠把 pyruvate kinase 反过来跑而被推回 PEP，所以细胞绕了一条远路 —— 在真核生物里，这条路同时需要胞质和线粒体中的酶。丙酮酸先被运进线粒体，或者在线粒体内由丙氨酸经转氨基作用（transamination，也就是把一个氨基换到某个酮酸上）生成。接着，pyruvate carboxylase（丙酮酸羧化酶）—— 一个需要辅酶 biotin（生物素）的线粒体酶 —— 把丙酮酸 + 碳酸氢根 + ATP 变成 oxaloacetate（草酰乙酸） + ADP + 磷酸。这段化学值得分两拍记住：碳酸氢根先被 ATP 磷酸化，形成一个混合酸酐 carboxyphosphate（羧基磷酸）；然后 biotin 把那个磷酸顶替掉，变成 carboxybiotin（羧基生物素）。biotin 通过一根酰胺键共价拴在酶上一个赖氨酸残基的 ε-氨基上，这条长长的「biotinyl-lysine 臂」把装好的 CO₂ 从「制造它的位点」荡到「把它交给丙酮酸的位点」。**所以那个 ATP 并没有花在最终形成的那根键上 —— 它花在「把 CO₂ 变得可搬运」这件事上。**",
      src: "A p.534–535, §14.4, Fig. 14-17"
    },
    {
      link_en: "and one sentence in that step is pure regulation",
      link_cn: "而这一步里有一句话，纯粹是在讲调控",
      en: "Pyruvate carboxylase is the first regulatory enzyme of gluconeogenesis, and it requires acetyl-CoA as a positive effector, meaning a molecule that binds it and turns it up. Acetyl-CoA is produced by fatty acid oxidation, so a build-up of it announces that fatty acids are available as fuel. Read what that means physiologically: **the cell does not start making glucose because glucose is scarce — it starts because fat is available to burn instead.** The signal is an abundance of the alternative fuel, not a shortage of the product. The same acetyl-CoA is at that moment a negative modulator of pyruvate dehydrogenase, the enzyme that would otherwise consume pyruvate, so one metabolite pushes pyruvate away from acetyl-CoA and towards oxaloacetate at the same instant. Keep one thing separate: this same reaction also replenishes citric acid cycle intermediates, and there the oxaloacetate stays in the cycle rather than being drawn off towards glucose.",
      cn: "pyruvate carboxylase 是糖异生通路上的第一个调节酶，它需要 acetyl-CoA 作为正效应物 —— 也就是一个结合上去、把它调高的分子。acetyl-CoA 由脂肪酸氧化产生，所以它的积累宣告的是「有脂肪酸可以当燃料」。读一下这在生理上意味着什么：**细胞开始造葡萄糖，不是因为葡萄糖短缺，而是因为有脂肪可以拿来烧。**信号是「替代燃料很充裕」，不是「产物不够了」。与此同时，同一个 acetyl-CoA 又是 pyruvate dehydrogenase（丙酮酸脱氢酶，本来会把丙酮酸消耗掉的那个酶）的负调节物 —— 所以同一个代谢物在同一瞬间，把丙酮酸从「去做 acetyl-CoA」推向「去做草酰乙酸」。有一件事要分开记：同一个反应也用来回补柠檬酸循环的中间产物，那时草酰乙酸留在循环里，而不是被抽去做葡萄糖。",
      src: "A p.535, §14.4",
      see: [{ id: "L-16-2-1", en: "why the cycle needs its oxaloacetate replenished", cn: "柠檬酸循环为什么需要回补草酰乙酸" }]
    },
    {
      link_en: "step two of the same bypass, and the detour in it is not a detour",
      link_cn: "同一条绕行路线的第二步 —— 而其中那段「绕路」其实并不是绕路",
      en: "The inner mitochondrial membrane has no transporter for oxaloacetate, so oxaloacetate is reduced to malate by mitochondrial malate dehydrogenase at the expense of NADH before it can leave. That reduction has a fairly high standard free-energy change, but with oxaloacetate held at a very low concentration the actual change is about zero and it runs freely both ways. Malate crosses on its own transporter and is re-oxidised in the cytosol, which produces cytosolic NADH. The oxaloacetate released there is then converted to PEP by PEP carboxykinase, a magnesium-dependent enzyme that uses GTP as its phosphoryl donor and releases the CO2 again. And here is the logic of the whole excursion: the cytosolic NADH/NAD+ ratio is several orders of magnitude lower than the mitochondrial one, and gluconeogenesis consumes cytosolic NADH further up the pathway, at the reduction of 1,3-bisphosphoglycerate. **Exporting malate and re-oxidising it in the cytosol moves reducing power to the compartment where it is scarce.** The detour carries electrons, and the carbon comes along with them.",
      cn: "线粒体内膜上没有草酰乙酸的转运蛋白，所以草酰乙酸必须先由线粒体的 malate dehydrogenase 消耗 NADH 还原成 malate（苹果酸）才能出去。这个还原的标准自由能变化相当高，但由于草酰乙酸浓度极低，实际变化大约为零，反应两个方向都跑得动。苹果酸走自己的转运蛋白出去，在胞质中被重新氧化 —— 这就产生了胞质里的 NADH。释放出来的草酰乙酸再由 PEP carboxykinase（PEP 羧激酶）转变成 PEP：这是一个依赖镁的酶，用 GTP 作磷酰基供体，并把那个 CO₂ 重新放掉。整段绕行的逻辑就在这里：胞质的 NADH/NAD⁺ 比值比线粒体里低好几个数量级，而糖异生在通路更上游、即 1,3-二磷酸甘油酸被还原的那一步，要消耗胞质 NADH。**把苹果酸运出去、在胞质里重新氧化，等于把还原力搬到了它稀缺的那个区室。**这条「绕路」搬的是电子，碳只是顺便跟着走。",
      src: "A p.535–536, §14.4"
    },
    {
      link_en: "add up the first bypass, and notice what the two CO2 molecules were for",
      link_cn: "把第一条绕行路线加总，然后注意那两个 CO₂ 是干什么用的",
      recall_en: "the same activation trick as attaching a good leaving group, in a different disguise",
      recall_cn: "和「挂上一个好的离去基团」是同一个活化把戏，只是换了副面孔",
      en: "The four reactions sum to: pyruvate + ATP + GTP + bicarbonate -> PEP + ADP + GDP + Pi + CO2, standard free-energy change +0.9 kJ/mol. Two high-energy phosphate equivalents are spent — one from ATP, one from GTP, each worth about 50 kJ/mol under cellular conditions — to phosphorylate a single pyruvate, where glycolysis running the other way got only one ATP out of that same step. The standard value is nearly flat, but the actual cellular value is about -25 kJ/mol, because PEP is consumed so fast elsewhere that its concentration stays low; so the step is effectively irreversible in the cell. Now the observation worth repeating out loud: **the CO2 added by pyruvate carboxylase is the same molecule removed by PEP carboxykinase.** Carboxylate, then decarboxylate — that sequence is a way of activating pyruvate, because it is the decarboxylation of oxaloacetate that makes PEP formation easy. The identical trick activates acetyl-CoA for fatty acid synthesis, so recognise it as a pattern. One variant: when lactate is the starting material, its oxidation to pyruvate already gives cytosolic NADH, so no malate export is needed, and a separate mitochondrial isozyme of PEP carboxykinase makes PEP inside the organelle for export.",
      cn: "四个反应加总得到：丙酮酸 + ATP + GTP + 碳酸氢根 → PEP + ADP + GDP + Pi + CO₂，标准自由能变化 +0.9 kJ/mol。为了把一个丙酮酸磷酸化，要花掉两个高能磷酸当量 —— 一个来自 ATP，一个来自 GTP，在细胞条件下每个约值 50 kJ/mol —— 而糖酵解反着跑的时候，同样这一步只拿到一个 ATP。标准值几乎是平的，但实际的细胞内数值约为 -25 kJ/mol，因为 PEP 在别处被消耗得太快、浓度一直很低；所以这一步在细胞里实际上不可逆。现在是那句值得念出声的观察：**pyruvate carboxylase 加上去的那个 CO₂，正是 PEP carboxykinase 拿掉的同一个分子。**先羧化、再脱羧 —— 这一整套顺序就是活化丙酮酸的办法，因为正是草酰乙酸的脱羧让 PEP 的生成变得容易。一模一样的把戏被用来活化 acetyl-CoA 以合成脂肪酸，所以把它当成一个模式来认，而不是一处怪癖。一个变体：当起始物是乳酸时，它氧化成丙酮酸本身就给出了胞质 NADH，因而不需要把苹果酸运出来；这时由 PEP carboxykinase 的一个线粒体同工酶在细胞器内部造出 PEP 再运出去。",
      src: "A p.536–537, §14.4",
      see: [{ id: "L-21-1-1", en: "the same carboxylate-then-decarboxylate trick on acetyl-CoA", cn: "同一个「先羧化再脱羧」的把戏用在 acetyl-CoA 上" }]
    },
    {
      link_en: "the other two bypasses, and this is where the two missing enzyme names appear",
      link_cn: "另外两条绕行路线 —— 那两个一直没被点名的酶，在这里露面",
      en: "Both are plain hydrolyses, run by phosphatases, and neither is a kinase in reverse. Fructose 1,6-bisphosphatase (FBPase-1) is a magnesium-dependent enzyme that makes fructose 6-phosphate from fructose 1,6-bisphosphate by the essentially irreversible hydrolysis of the C-1 phosphate — explicitly not by transferring that phosphoryl group to ADP — with a standard free-energy change of -16.3 kJ/mol. The name has a purpose: it distinguishes this enzyme from FBPase-2, which is a regulatory enzyme and does something else entirely. Glucose 6-phosphatase closes the pathway the same way: reversing hexokinase would mean handing a phosphoryl group from glucose 6-phosphate to ADP to make ATP, which is energetically unfavourable, so instead there is a simple hydrolysis of a phosphate ester, standard free-energy change -13.8 kJ/mol. **Notice what both hydrolyses throw away: the phosphate that a kinase paid a whole ATP to attach is released as inorganic phosphate and lost. That waste is exactly what is being bought — direction.**",
      cn: "这两条都是由磷酸酶催化的、干干净净的水解，两条都不是「激酶反过来跑」。Fructose 1,6-bisphosphatase（果糖-1,6-二磷酸酶，FBPase-1）是一个依赖镁的酶，它把果糖-1,6-二磷酸变成果糖-6-磷酸，靠的是对 C-1 位磷酸基本上不可逆的水解 —— 明确地不是把那个磷酰基转移给 ADP —— 标准自由能变化 -16.3 kJ/mol。这个名字有它的用处：它把这个酶与 FBPase-2 区分开，后者是一个调节酶，干的是完全不同的事。Glucose 6-phosphatase（葡萄糖-6-磷酸酶）以同样的方式给通路收尾：把 hexokinase 反过来跑，意味着要把一个磷酰基从葡萄糖-6-磷酸交给 ADP 去造 ATP，而这在能量上不划算；于是改用一次简单的磷酸酯水解，标准自由能变化 -13.8 kJ/mol。**注意这两次水解扔掉了什么：那个激酶曾花掉一整个 ATP 才装上去的磷酸，如今被当作无机磷酸放掉、白白损失。这份浪费买到的东西恰恰就是「方向」。**",
      src: "A p.536–537, §14.4"
    },
    {
      link_en: "and where the last of those two enzymes sits decides which organs can feed the blood",
      link_cn: "而后一个酶坐在哪里，决定了哪些器官有资格给血液供糖",
      en: "Glucose 6-phosphatase is a magnesium-activated membrane protein in the lumen of the endoplasmic reticulum, and it is present in hepatocytes, kidney cells and the epithelial cells of the small intestine — and in no other tissue. Two consequences follow, and the second is the one usually missed. First, the organ list is not an arbitrary fact: liver, kidney and intestine can export glucose because they alone can take the phosphate back off. Second, other tissues would be harmed by having it, because it would hydrolyse the very glucose 6-phosphate they need for glycolysis — the phosphate group is what keeps glucose inside a cell, so a tissue carrying this enzyme would leak its own fuel. Now carry the fact across: **muscle stores glycogen and can break it down, but muscle has no glucose 6-phosphatase, so muscle glycogen can never raise blood glucose.** It can only fuel the muscle it sits in.",
      cn: "Glucose 6-phosphatase 是一个由镁激活的膜蛋白，位于内质网腔内，只存在于肝细胞、肾细胞和小肠上皮细胞里 —— 其他组织都没有。由此有两个后果，第二个常被漏掉。第一，那份器官清单不是一条要死记的孤立事实：肝、肾、肠之所以能把葡萄糖输出去，是因为只有它们能把那个磷酸再摘下来。第二，其他组织如果有这个酶反而会受害，因为它会去水解那些组织自己进行糖酵解所需的葡萄糖-6-磷酸 —— 磷酸基团正是把葡萄糖留在细胞内的那样东西，所以带着这个酶的组织会漏掉自己的燃料。把这个事实带过去用：**肌肉储存糖原，也能分解糖原，但肌肉没有 glucose 6-phosphatase —— 所以肌糖原永远不可能抬高血糖。**它只能给它所在的那块肌肉供能。",
      src: "A p.537, §14.4",
      see: [{ id: "L-15-2-1", en: "glycogen breakdown, and the same enzyme met from the other side", cn: "糖原分解 —— 从另一侧再遇到同一个酶" }]
    },
    {
      link_en: "so what does one glucose cost, and why is a cell willing to pay it?",
      link_cn: "那么造一个葡萄糖到底花多少，细胞又为什么肯付这个钱？",
      en: "The whole biosynthesis from pyruvate to free blood glucose sums to: 2 pyruvate + 4 ATP + 2 GTP + 2 NADH + 4 H2O -> 1 glucose + 4 ADP + 2 GDP + 6 Pi + 2 NAD+. That is six high-energy phosphate groups per glucose, four from ATP and two from GTP, plus two NADH. Glycolysis in the forward direction returned only two ATP, so a round trip loses four high-energy phosphates outright. Much of that cost is what ensures gluconeogenesis is irreversible, and the two numbers make it concrete: under intracellular conditions the overall free-energy change of glycolysis is at least -63 kJ/mol, and the overall change for gluconeogenesis is -16 kJ/mol. **Both pathways are downhill in the same cell at the same time. That is only possible because they are not the same set of reactions — and it is the whole reason the three bypasses exist.** A second reason to pay: simply excreting pyruvate would throw away the more than 10 ATP its complete aerobic oxidation could have produced.",
      cn: "从丙酮酸到游离血糖的整个生物合成加总为：2 丙酮酸 + 4 ATP + 2 GTP + 2 NADH + 4 H₂O → 1 葡萄糖 + 4 ADP + 2 GDP + 6 Pi + 2 NAD⁺。也就是每个葡萄糖要花六个高能磷酸基团（四个来自 ATP，两个来自 GTP），外加两个 NADH。而糖酵解正向跑只还回两个 ATP，所以一个来回净亏四个高能磷酸。这份开销的大部分，买的正是「糖异生不可逆」这件事；两个数字把它说实了：在细胞内条件下，糖酵解总的自由能变化至少是 -63 kJ/mol，而糖异生总的自由能变化是 -16 kJ/mol。**同一个细胞里、同一时刻，两条方向相反的通路都在下坡。这之所以可能，唯一的原因是它们并不是同一套反应 —— 而这也正是那三条绕行路线存在的全部理由。**还有第二个肯付钱的理由：直接把丙酮酸排掉，等于扔掉它完全有氧氧化本可产出的十个以上 ATP。",
      src: "A p.537–538, §14.4"
    },
    {
      link_en: "and the list of things that can be turned into glucose is wider than pyruvate",
      link_cn: "而「能被变成葡萄糖的东西」远不止丙酮酸",
      en: "Because four-, five- and six-carbon intermediates of the citric acid cycle can be oxidised to oxaloacetate, they too feed the pathway. Most amino acids from protein are catabolised down to pyruvate or to a citric acid cycle intermediate, and an amino acid that can undergo net conversion to glucose that way is called glucogenic. The entry points are pyruvate, α-ketoglutarate, succinyl-CoA, fumarate and oxaloacetate. The fact worth memorising is the negative one: **of the 20 common amino acids, only leucine and lysine cannot furnish carbon for net glucose synthesis.** Eighteen of twenty is far easier to hold than a list of eighteen names. Two are singled out for a physiological reason: alanine and glutamine are the main carriers of amino groups from other tissues to the liver, and once their amino groups are stripped off in liver mitochondria the skeletons left behind — pyruvate and α-ketoglutarate — go straight into gluconeogenesis. The same two molecules deliver nitrogen for disposal and carbon for glucose on one trip.",
      cn: "由于柠檬酸循环里四碳、五碳、六碳的中间产物都能被氧化成草酰乙酸，它们同样可以进入这条通路。来自蛋白质的大多数氨基酸，最终会被分解到丙酮酸、或某个柠檬酸循环中间产物上；能够这样净转化为葡萄糖的氨基酸，就叫生糖氨基酸（glucogenic）。入口有五个：丙酮酸、α-酮戊二酸、琥珀酰辅酶A、延胡索酸、草酰乙酸。最值得背的是它的否定形式：**20 种常见氨基酸里，只有亮氨酸和赖氨酸不能为葡萄糖的净合成提供碳。**「二十里有十八」比记十八个名字容易太多。其中两个因为生理原因被单独拎出来：丙氨酸和谷氨酰胺是把氨基从其他组织运到肝去的主要载体；它们的氨基在肝线粒体里被摘掉之后，剩下的骨架 —— 分别是丙酮酸和 α-酮戊二酸 —— 直接进入糖异生。同一趟运输，既送去了要处理的氮，也送去了造糖的碳。",
      src: "A p.538, §14.4, Table 14-4",
      see: [{ id: "L-18-3-1", en: "which amino acid lands on which entry point", cn: "哪个氨基酸落在哪个入口上" }]
    },
    {
      link_en: "and the one substrate that famously cannot be used, with the reason spelled out",
      link_cn: "还有那个众所周知不能用的底物 —— 把理由说清楚",
      en: "**No net conversion of fatty acids to glucose occurs in mammals, and the reason is a chain of three clauses, each blocking a different escape route.** The catabolism of most fatty acids — their breakdown for energy — yields only acetyl-CoA. Mammals cannot use acetyl-CoA as a glucose precursor, because the pyruvate dehydrogenase reaction that made it is irreversible. And there is no other pathway in mammalian cells from acetyl-CoA back to pyruvate. Plants, yeast and many bacteria do have one — the glyoxylate cycle, which converts acetyl-CoA to oxaloacetate — so those organisms can build sugar from fat, which is how a germinating seedling lives on stored seed oil before it has leaves. Two qualifications keep the answer honest. Mammals can use the glycerol released when a triacylglycerol is broken up: glycerol kinase phosphorylates it, and oxidising the middle carbon gives dihydroxyacetone phosphate, an intermediate of this very pathway. And adipocytes, which have no glycerol kinase, run a truncated version called glyceroneogenesis — pyruvate down to dihydroxyacetone phosphate, then reduction to glycerol 3-phosphate — because they need a glycerol backbone to build fat onto.",
      cn: "**哺乳动物体内不存在脂肪酸到葡萄糖的净转化，理由是一条三段式的链条，每一段堵死一条逃生路。**第一，大多数脂肪酸分解只产生 acetyl-CoA。第二，哺乳动物不能拿 acetyl-CoA 当葡萄糖前体，因为造出它的那个 pyruvate dehydrogenase 反应是不可逆的。第三，哺乳动物细胞里没有别的通路能把 acetyl-CoA 送回丙酮酸。植物、酵母和许多细菌有 —— 那就是乙醛酸循环（glyoxylate cycle），它把 acetyl-CoA 变成草酰乙酸 —— 所以这些生物可以用脂肪造糖；一株正在萌发、还没长出叶子的幼苗，靠的就是种子里储存的油。两条限定让这个回答保持诚实。哺乳动物确实能用甘油：三酰甘油被拆开时放出甘油，glycerol kinase（甘油激酶）把它磷酸化，再把中间那个碳氧化，就得到磷酸二羟丙酮 —— 正是这条通路上的一个中间产物。而脂肪细胞没有 glycerol kinase，它跑一个截短版本，叫 glyceroneogenesis（甘油异生） —— 从丙酮酸走到磷酸二羟丙酮，再还原成 3-磷酸甘油 —— 因为它需要一副甘油骨架来把脂肪搭上去。",
      src: "A p.538, §14.4",
      see: [{ id: "L-17-2-1", en: "where the acetyl-CoA from fatty acids actually goes", cn: "脂肪酸来的 acetyl-CoA 最后去了哪里" }]
    },
    {
      link_en: "last: since both pathways sit in the same cytosol, they have to be switched against each other",
      link_cn: "最后：两条通路同处一个胞质，所以必须彼此对着开关",
      en: "In animals both pathways run largely in the cytosol, which forces reciprocal and coordinated regulation. Here is the minimum, read from the gluconeogenic side. At the PFK-1 and FBPase-1 pair the two enzymes are governed together and oppositely: FBPase-1 is strongly inhibited by AMP, so when the cell's ATP supply is low the ATP-hungry synthesis of glucose slows, while that same AMP relieves ATP's inhibition of PFK-1. **The dominant regulator is fructose 2,6-bisphosphate, and its most important property is that it is not an intermediate of either pathway — no flux runs through it, so the cell can raise and lower it purely as information.** It activates PFK-1 and inhibits FBPase-1 at the same time, and the load-bearing measurement is that at physiological concentrations of everything else, PFK-1 is virtually inactive without it. So the gluconeogenic switch reads: fat available (acetyl-CoA up), energy charge high (AMP down), fructose 2,6-bisphosphate low. Glucagon is the hormone that lowers it.",
      cn: "在动物体内，两条通路大部分都在胞质里跑，这就逼出了互为倒数、彼此协同的调控。下面是从糖异生这一侧读到的最低限度。在 PFK-1 与 FBPase-1 这一对上，两个酶被一起、且方向相反地管着：FBPase-1 被 AMP 强烈抑制 —— 于是当细胞的 ATP 供应偏低时，那条很费 ATP 的造糖路线就减速；而同一个 AMP 又解除了 ATP 对 PFK-1 的抑制。**起主导作用的调节物是果糖-2,6-二磷酸，而它最要紧的性质是：它不是这两条通路中任何一条的中间产物 —— 没有通量从它身上流过，所以细胞可以纯粹把它当作「信息」来抬高或压低。**它同时激活 PFK-1、抑制 FBPase-1；而最吃重的那个测量结果是：在其他一切都处于生理浓度时，没有它，PFK-1 几乎完全没有活性。所以糖异生这一侧的开关读数是：脂肪可用（acetyl-CoA 上升）、能荷高（AMP 下降）、果糖-2,6-二磷酸低。而把它压低的那个激素是胰高血糖素（glucagon）。",
      src: "A p.534, 542, §14.4–14.5",
      see: [{ id: "L-14-5-1", en: "the whole switching mechanism, in full", cn: "整套切换机制的完整内容" }]
    }
  ],
  terms: [
    { en: "gluconeogenesis", cn: "糖异生",
      def_en: "The pathway that builds glucose from non-carbohydrate precursors — pyruvate, lactate, glycerol and glucogenic amino acids. Seven of its ten reactions are shared with glycolysis run backwards; the other three are bypasses, because the glycolytic steps they replace are far too exergonic in the cell to reverse.",
      def_cn: "用非糖类前体 —— 丙酮酸、乳酸、甘油和生糖氨基酸 —— 造出葡萄糖的通路。它十个反应中有七个与糖酵解反向共用；另外三个是绕行路线，因为它们所取代的糖酵解步骤在细胞里放能太多，退不回来。" },
    { en: "Cori cycle", cn: "科里循环",
      def_en: "The circuit in which lactate made by anaerobic glycolysis in skeletal muscle travels to the liver, is rebuilt into glucose there, and returns to muscle to be stored as glycogen. It exists because muscle lacks the gluconeogenic enzymes and the liver has them.",
      def_cn: "骨骼肌无氧糖酵解产生的乳酸运到肝、在肝里被重新造成葡萄糖、再回到肌肉存成糖原的那个回路。它之所以存在，是因为肌肉没有糖异生的那几个酶，而肝有。" },
    { en: "pyruvate carboxylase", cn: "丙酮酸羧化酶",
      def_en: "The mitochondrial, biotin-requiring enzyme that spends ATP to add bicarbonate as CO2 to pyruvate, giving oxaloacetate. It is the first regulatory enzyme of the pathway, and acetyl-CoA turns it up — so the trigger for making glucose is the availability of fat, not the shortage of sugar.",
      def_cn: "一个位于线粒体、需要生物素的酶，它花掉 ATP 把碳酸氢根以 CO₂ 的形式加到丙酮酸上，生成草酰乙酸。它是这条通路上第一个调节酶，而 acetyl-CoA 会把它调高 —— 所以造糖的触发信号是「有脂肪可用」，不是「糖不够」。" },
    { en: "biotin and carboxybiotin", cn: "生物素与羧基生物素",
      def_en: "Biotin is the coenzyme that carries activated CO2, tied to the enzyme by an amide bond to a lysine ε-amino group. ATP first phosphorylates bicarbonate to the mixed anhydride carboxyphosphate; biotin then displaces the phosphate to become carboxybiotin, and the long biotinyl-lysine arm swings it to the second active site. The ATP pays for making CO2 carriable, not for the bond that forms.",
      def_cn: "生物素是携带活化 CO₂ 的辅酶，通过一根酰胺键连在酶上某个赖氨酸的 ε-氨基上。ATP 先把碳酸氢根磷酸化成混合酸酐羧基磷酸；生物素随后顶替掉那个磷酸，成为羧基生物素；那条长长的生物素-赖氨酸臂再把它荡到第二个活性位点。ATP 花的是「让 CO₂ 可搬运」的钱，不是最终成键的钱。" },
    { en: "PEP carboxykinase", cn: "PEP 羧激酶",
      def_en: "The magnesium-dependent enzyme that converts oxaloacetate to phosphoenolpyruvate using GTP as phosphoryl donor, releasing the same CO2 that was added a step earlier. Carboxylating and then decarboxylating is how the cell activates pyruvate — the same trick later activates acetyl-CoA for fatty acid synthesis.",
      def_cn: "依赖镁的酶，用 GTP 作磷酰基供体把草酰乙酸变成磷酸烯醇丙酮酸，并把上一步刚加上的那个 CO₂ 放掉。先羧化再脱羧，正是细胞活化丙酮酸的办法 —— 同一个把戏后来被用来活化 acetyl-CoA 以合成脂肪酸。" },
    { en: "FBPase-1 and glucose 6-phosphatase", cn: "FBPase-1 与葡萄糖-6-磷酸酶",
      def_en: "The two bypass enzymes of the second and third irreversible steps. Both are simple hydrolyses rather than kinases run backwards: the phosphate a kinase paid an ATP to attach is thrown away as inorganic phosphate, and that waste is what buys the pathway its direction.",
      def_cn: "第二、第三个不可逆步骤的两个绕行酶。两者都是干净的水解，而不是激酶反向运行：激酶曾花一个 ATP 装上去的磷酸被当作无机磷酸扔掉 —— 这份浪费买到的正是这条通路的方向。" },
    { en: "glucose 6-phosphatase in the ER lumen", cn: "内质网腔里的葡萄糖-6-磷酸酶",
      def_en: "A membrane protein of the endoplasmic reticulum lumen, present only in hepatocytes, kidney cells and small-intestine epithelium. Only those three tissues can strip the phosphate and export glucose to the blood; in any other tissue the enzyme would hydrolyse the glucose 6-phosphate that tissue needs for glycolysis. This is why muscle glycogen cannot raise blood sugar.",
      def_cn: "内质网腔内的一个膜蛋白，只存在于肝细胞、肾细胞和小肠上皮。只有这三种组织能把磷酸摘掉、把葡萄糖输出到血液里；换成任何其他组织，这个酶只会去水解该组织自己糖酵解所需的葡萄糖-6-磷酸。这正是肌糖原抬不高血糖的原因。" },
    { en: "glucogenic amino acid", cn: "生糖氨基酸",
      def_en: "An amino acid whose carbon skeleton reaches pyruvate or a citric acid cycle intermediate and can therefore be converted to glucose. Of the 20 common amino acids only leucine and lysine cannot. Alanine and glutamine matter most, because they carry amino groups to the liver and leave their skeletons there.",
      def_cn: "碳骨架能到达丙酮酸或某个柠檬酸循环中间产物、因而可以被转成葡萄糖的氨基酸。20 种常见氨基酸里只有亮氨酸和赖氨酸不行。丙氨酸与谷氨酰胺最重要，因为它们把氨基运到肝，顺便把骨架留在那里。" },
    { en: "glyoxylate cycle", cn: "乙醛酸循环",
      def_en: "The pathway from acetyl-CoA to oxaloacetate that plants, yeast and many bacteria have and mammals do not. Its absence is the reason no net conversion of fatty acids to glucose happens in mammals; its presence is how a germinating seedling lives on stored seed oil.",
      def_cn: "从 acetyl-CoA 到草酰乙酸的那条通路，植物、酵母和许多细菌有，哺乳动物没有。它的缺席正是哺乳动物无法把脂肪酸净转化为葡萄糖的原因；它的存在则是萌发中的幼苗能靠种子油活下去的原因。" }
  ]
};

/* ------------------------------------------------------------------ L-14-5-1 */
window.BIOLITE_SPINE["L-14-5-1"] = {
  assumed: ["glycolysis", "gluconeogenesis", "glycogen", "liver", "muscle", "brain",
            "kidney", "heart", "erythrocyte", "myocyte", "hepatocyte", "adipose tissue",
            "insulin", "glucagon", "epinephrine", "hormone", "receptor", "enzyme",
            "substrate", "glucose", "ATP", "ADP", "AMP", "NADH", "NAD+", "NADPH",
            "cyclic AMP", "citrate", "alanine", "fatty acid", "lipid", "amino acid",
            "myocardial infarction", "creatine kinase", "transcription", "mRNA",
            "nucleus", "cytosol", "mitochondrion", "pentose phosphate pathway",
            "citric acid cycle", "oxidative phosphorylation", "fatty acid synthase",
            "hexokinase", "pyruvate kinase", "lactate dehydrogenase"],
  nodeTitle_en: "Switching glycolysis against gluconeogenesis",
  nodeTitle_cn: "把糖酵解与糖异生对着开关",
  title_en: "Running both at once would only make heat — so the two are switched against each other at three points, and one signal molecule does most of the switching",
  title_cn: "两条路同时开只会产热 —— 所以它们在三个点上被对着开关，而大部分切换由一个信号分子完成",
  steps: [
    {
      en: "Start with the arithmetic, because it fixes where regulation — the cell's control over which pathway actually runs — has to sit. At each of the three points where a glycolytic reaction is bypassed by a different gluconeogenic one, two different enzymes face each other across the same pair of molecules. Take PFK-1 and FBPase-1: one spends an ATP to put a phosphate on fructose 6-phosphate, the other hydrolyses that same phosphate straight off again. **Add the two reactions together and everything cancels except ATP + H2O -> ADP + Pi. Nothing is built, nothing is moved, and a large amount of chemical energy is dissipated as heat. A loop like that is a futile cycle.** Reciprocal regulation is therefore a requirement, and it must sit at exactly those three bypassed steps, because those are the only places where two opposed enzymes exist at all.",
      cn: "先算这笔账，因为它把「调节必须坐在哪里」这件事钉死了。在糖酵解的某一步被另一个糖异生反应绕过去的那三个点上，两个不同的酶隔着同一对分子面对面。就看 PFK-1 与 FBPase-1：一个花掉一个 ATP，把磷酸装到果糖-6-磷酸上；另一个立刻把这同一个磷酸水解掉。**把两个反应加起来，一切都抵消掉了，只剩下 ATP + H₂O → ADP + Pi。什么都没造出来，什么都没被搬动，而大量化学能被当成热耗散掉了。这样一个空转的环叫 futile cycle（无效循环）。**所以「互为倒数的调控」是一条硬性要求，而不只是一种精细化的追求；而且它必须正好坐在那三个被绕过的步骤上 —— 因为只有那三个地方，才存在两个方向相反的酶。",
      src: "A p.539, §14.5"
    },
    {
      link_en: "and which tissue has to make the choice at all",
      link_cn: "还有：究竟哪个组织才需要做这个选择",
      en: "In mammals gluconeogenesis runs primarily in the liver, whose job is to make glucose for export to other tissues once glycogen is gone and no dietary glucose is coming in. Glycolysis, by contrast, runs in most tissues — brain, kidney, muscle, liver — paying for ion pumping, for building macromolecules, for making lipids and glycogen, and for contraction. So **only the liver runs both pathways and has to decide between them minute by minute, and that is why almost every special mechanism below is a liver mechanism.** Muscle never faces the choice, because muscle does no gluconeogenesis; muscle regulation here is entirely local and metabolite-driven, while liver regulation is hormonal. That one distinction is why the liver form of pyruvate kinase is phosphorylated by a hormone-driven kinase and the muscle form is not, and why a separate liver hexokinase exists at all.",
      cn: "在哺乳动物里，糖异生主要在肝里跑 —— 肝的职责是在糖原耗尽、又没有膳食葡萄糖进来时，造出葡萄糖输送给别的组织。糖酵解则在大多数组织里跑 —— 脑、肾、肌肉、肝 —— 用来支付离子泵、大分子的搭建、脂类和糖原的合成，以及收缩。**所以只有肝同时跑两条路、必须一分一秒地在两者之间做选择；这正是下面几乎每一个特殊机制都是肝的机制的原因。**肌肉从来不面对这个选择，因为肌肉不做糖异生；这里肌肉的调节完全是局部的、由代谢物驱动的，而肝的调节是激素性的。正是这一条差别，解释了为什么 pyruvate kinase 的肝型会被一个激素驱动的激酶磷酸化而肌型不会，也解释了为什么肝要单独有一种己糖激酶。",
      src: "A p.539, §14.5"
    },
    {
      link_en: "control point one is the entry step. The muscle version is the simple case",
      link_cn: "第一个控制点是入口那一步。肌肉那个版本是简单的情形",
      en: "Hexokinase catalyses the entry of glucose into glycolysis by phosphorylating it, and humans have four isozymes of it, I to IV, from four different genes. The one that dominates in a muscle cell is hexokinase II, and it binds glucose very tightly: it is half-saturated at about 0.1 mM. Blood glucose is 4 to 5 mM, so glucose arriving in the muscle cell saturates the enzyme, and muscle hexokinase normally works at or near its maximal rate. What regulates it is therefore its product rather than its substrate: hexokinases I and II are allosterically inhibited by glucose 6-phosphate, so whenever that product rises above its usual level the enzyme is reversibly turned down until the rate of making it matches the rate of using it. Said physiologically: **a muscle cell phosphorylates glucose exactly as fast as it can consume the product, and not one molecule faster.** It has no reason to hold glucose for anybody else.",
      cn: "hexokinase（己糖激酶）通过给葡萄糖加磷酸，催化葡萄糖进入糖酵解；人有它的四种同工酶（I 到 IV），来自四个不同的基因。肌细胞里占主导的是 hexokinase II，它抓葡萄糖抓得很紧：在约 0.1 mM 时就半饱和。而血糖是 4 到 5 mM，所以进入肌细胞的葡萄糖把这个酶饱和了，肌肉的己糖激酶平时就工作在最大速率附近。因此，真正调节它的是它的产物，而它的底物管不了它：hexokinase I 和 II 被葡萄糖-6-磷酸别构抑制 —— 只要这个产物涨过平常水平，酶就被可逆地调低，直到「造它的速率」与「用它的速率」重新相等。用生理的话说：**肌细胞给葡萄糖加磷酸的速度，正好等于它能消耗产物的速度，一分子也不多。**它没有任何理由替别人存葡萄糖。",
      src: "A p.539, §14.5"
    },
    {
      link_en: "the liver version is the interesting one, and its apparently poor kinetics are the whole mechanism",
      link_cn: "肝那个版本才有意思 —— 它看起来很差的动力学，本身就是整个机制",
      en: "The dominant hexokinase of liver is hexokinase IV, also called glucokinase, and it is half-saturated at about 10 mM glucose — higher than blood glucose ever normally is. A fast transporter in the hepatocyte membrane, GLUT2, keeps cytosolic and blood glucose in step, so that high half-saturation point lets the enzyme read blood glucose directly. Follow it both ways. After a carbohydrate-rich meal blood glucose is high, the surplus enters the hepatocyte, and because the enzyme is still not saturated at 10 mM its activity keeps climbing as glucose climbs — the liver takes up more the more there is, which is exactly what a buffer organ must do. When blood glucose is low, glucose inside the hepatocyte is far below that half-saturation point, so glucose the liver has just made by gluconeogenesis walks back out of the cell before phosphorylation can trap it. Compare muscle hexokinase I, already at maximal rate at 5 mM and unable to respond to a rise at all. **A deliberately low-affinity enzyme is how the liver avoids eating the glucose it made for everyone else.**",
      cn: "肝里占主导的是 hexokinase IV，又叫 glucokinase（葡萄糖激酶），它在约 10 mM 葡萄糖时才半饱和 —— 比血糖正常时能达到的水平还高。肝细胞膜上一个高效的转运蛋白 GLUT2 让胞质葡萄糖与血糖保持同步，于是那个偏高的半饱和点，正好让这个酶直接「读」血糖。两个方向都跟一遍。富含碳水的一餐之后，血糖升高，多余的葡萄糖进入肝细胞；因为这个酶在 10 mM 时还没饱和，葡萄糖越高它的活性就越高 —— 血里越多，肝就拿走越多，而这正是一个缓冲器官必须做的事。 反过来看，血糖低的时候，肝细胞里的葡萄糖远低于那个半饱和点，所以肝刚刚用糖异生造出来的葡萄糖，会在被磷酸化「扣住」之前就走出细胞。对比一下肌肉的 hexokinase I：它在 5 mM 时已经处在最大速率，血糖再升它也毫无反应。**一个刻意低亲和力的酶，正是肝避免吃掉自己替别人造的葡萄糖的办法。**",
      src: "A p.539–540, §14.5, Fig. 14-20"
    },
    {
      link_en: "and two more differences, the second of which nobody guesses",
      link_cn: "还有另外两处差别，第二处没人猜得到",
      en: "Hexokinase IV is not inhibited by glucose 6-phosphate, so it keeps working under exactly the conditions that shut hexokinases I, II and III down completely. What inhibits it instead is the reversible binding of a regulatory protein found only in liver, and that binding is much tighter when fructose 6-phosphate is present, while glucose competes fructose 6-phosphate off and makes the regulatory protein let go. The mechanism is the surprise: the regulatory protein anchors hexokinase IV inside the nucleus, physically separated from the rest of glycolysis out in the cytosol. When cytosolic glucose rises it equilibrates with nuclear glucose through the nuclear pores, knocks the regulatory protein off, and hexokinase IV walks back out and starts phosphorylating. **This is not inhibition by covering an active site — it is inhibition by putting the enzyme in a different room.** During a fast, when blood glucose falls below 5 mM and fructose 6-phosphate is high, the enzyme is locked away and the liver stops competing with other organs for scarce glucose. There is a slow layer on top: conditions calling for more glucose consumption raise transcription of the hexokinase IV gene, while low blood glucose and glucagon raise transcription of glucose 6-phosphatase, the gluconeogenic enzyme that undoes this very step.",
      cn: "hexokinase IV 不被葡萄糖-6-磷酸抑制，所以在那些把 hexokinase I、II、III 彻底关停的条件下，它照样干活。真正抑制它的，是一个只在肝里才有的调节蛋白的可逆结合；而这种结合在果糖-6-磷酸在场时紧得多，葡萄糖则会把果糖-6-磷酸竞争下来，让调节蛋白松手。机制才是意外之处：那个调节蛋白把 hexokinase IV 锚定在细胞核里，与胞质中其余的糖酵解在物理上隔开。当胞质葡萄糖升高，它通过核孔与核内葡萄糖达成平衡，把调节蛋白撞下来，hexokinase IV 便走回胞质、开始磷酸化。**这不是「盖住活性位点」式的抑制 —— 这是「把酶关进另一个房间」式的抑制。**禁食时血糖跌破 5 mM、果糖-6-磷酸偏高，酶就被锁起来，肝于是不再和别的器官抢那点稀缺的葡萄糖。上面还叠着一层慢的：需要更多葡萄糖消耗的情形会提高 hexokinase IV 基因的转录；而低血糖与胰高血糖素则提高 glucose 6-phosphatase 的转录 —— 那正是把这一步撤销掉的那个糖异生酶。",
      src: "A p.540, §14.5, Fig. 14-21"
    },
    {
      link_en: "step back from hexokinase: what an isozyme is, and one place a ratio of two is read clinically",
      link_cn: "从己糖激酶退一步：同工酶到底是什么，以及临床上会去读它们比值的一个地方",
      en: "**An isozyme is one reaction catalysed by two or more different molecular forms of an enzyme, which may sit in the same species, the same tissue, even the same cell**, and which generally differ in their kinetics, in their regulation, in the cofactor they use, or in where in the cell they sit. Lactate dehydrogenase is the classic case: five isozymes, each a tetramer built from two kinds of chain — M from a muscle gene and H from a heart gene — so LDH1 is HHHH in heart and erythrocyte and LDH5 is MMMM in skeletal muscle and liver. The kinetic difference is real chemistry, not labelling: the muscle-type form is built to reduce very low concentrations of pyruvate to lactate quickly, and the heart-type form to oxidise lactate back to pyruvate quickly. Same reaction, opposite directions, two tissues with opposite needs. The clinical reading is a ratio, not a level: damaged heart muscle releases its LDH into the blood, and shortly after a myocardial infarction total LDH rises with more LDH2 than LDH1; by 12 hours the two are similar; by 24 hours there is more LDH1 than LDH2. That switch in the LDH1/LDH2 ratio, together with a rise in creatine kinase, is strong evidence of a recent infarction.",
      cn: "**isozyme（同工酶）指的是：同一个反应由两种或更多种不同分子形式的酶催化 —— 它们可以在同一物种、同一组织、甚至同一细胞里**，通常在动力学、调控方式、所用辅因子或所在的细胞位置上有所不同。乳酸脱氢酶是经典例子：五种同工酶，每一种都是由两类肽链搭成的四聚体 —— M 来自肌肉基因，H 来自心脏基因 —— 所以 LDH1 是 HHHH，见于心和红细胞；LDH5 是 MMMM，见于骨骼肌和肝。它们之间的动力学差别是真化学，不是贴标签：肌型那个是为「把极低浓度的丙酮酸迅速还原成乳酸」而生的，心型那个是为「把乳酸迅速氧化回丙酮酸」而生的。同一个反应，方向相反，两个需求相反的组织。临床上读的是比值，不是绝对水平：受损的心肌把自己的 LDH 释放进血液，心肌梗死之后不久，总 LDH 升高，且 LDH2 多于 LDH1；到 12 小时两者接近；到 24 小时 LDH1 多于 LDH2。LDH1/LDH2 比值的这次反转，加上肌酸激酶升高，是近期梗死的有力证据。",
      src: "A p.540, §14.5, Box 14-3"
    },
    {
      link_en: "control point two is the step that commits, and its main brake is one of its own substrates",
      link_cn: "第二个控制点是「作出承诺」的那一步 —— 而踩它刹车的，正是它自己的一个底物",
      en: "Glucose 6-phosphate can still go several ways — on down glycolysis, into glycogen, into the pentose phosphate pathway — so it commits nothing. The metabolically irreversible reaction catalysed by PFK-1 is the step that commits glucose to glycolysis, and this large enzyme carries several regulatory sites besides its catalytic ones. Now the elegant part: **ATP is both a substrate of PFK-1 and an end product of the pathway PFK-1 commits to.** When ATP is high, meaning it is being made faster than it is spent, ATP binds an allosteric site distinct from the catalytic site and lowers the enzyme's affinity for its other substrate, fructose 6-phosphate. ADP and AMP, which rise when consumption outruns production, bind and relieve that inhibition. The system therefore runs fast when ADP or AMP accumulate and slow when ATP accumulates. And AMP is the sharper of the two signals for an arithmetic reason: the adenylate pool is large and mostly ATP, so a small fractional fall in ATP shows up as a large fractional rise in AMP. The cell reads the small number, not the big one.",
      cn: "葡萄糖-6-磷酸还有好几条路可走 —— 继续走糖酵解、去做糖原、进磷酸戊糖途径 —— 所以它并没有承诺什么。真正把葡萄糖交付给糖酵解的，是 PFK-1 催化的那个代谢上不可逆的反应；这个大酶除了催化位点之外，还带着好几个调节位点。精妙之处在这里：**ATP 既是 PFK-1 的底物，又是 PFK-1 所交付的那条通路的终产物。**当 ATP 很高（意味着它被造出来的速度快过被花掉的速度），ATP 就结合到一个与催化位点不同的别构位点上，降低这个酶对它另一个底物、即果糖-6-磷酸的亲和力。而在消耗跑赢生产时会升高的 ADP 和 AMP，则结合上去解除这份抑制。于是这套系统在 ADP 或 AMP 积累时跑得快，在 ATP 积累时跑得慢。而 AMP 是两者中更锐利的那个信号，理由是算术上的：腺苷酸池很大，而且绝大部分是 ATP，所以 ATP 只掉一点点比例，AMP 就会涨很大的比例。细胞读的是那个小数字，不是那个大数字。",
      src: "A p.541, §14.5, Fig. 14-22",
      recall_en: "the same amplification that makes AMP the cell's energy alarm",
      recall_cn: "和「让 AMP 成为细胞能量警报」的那个放大效应是同一件事",
      see: [{ id: "L-13-5-1", en: "why a 10% fall in ATP reads as a 600% rise in AMP", cn: "为什么 ATP 掉 10% 会被读成 AMP 涨 600%" }]
    },
    {
      link_en: "two more signals complete the pair, and one of them is a message from a different fuel",
      link_cn: "还有两个信号把这一对补齐 —— 其中一个是另一种燃料捎来的口信",
      en: "Citrate — the key intermediate of the aerobic oxidation of pyruvate, fatty acids and amino acids — is also an allosteric regulator here, and a high citrate concentration deepens ATP's inhibition of PFK-1. Read what citrate is saying: the cell's current energy needs are already being met by burning fat and protein, so there is no reason to burn sugar as well. On the opposing side, FBPase-1 is strongly and allosterically inhibited by AMP, so when ATP supply is low the ATP-hungry synthesis of glucose slows down. The two enzymes are therefore regulated in a coordinated and reciprocal way: the same metabolite pushes one up and the other down. The general rule falls out of it: **when acetyl-CoA or citrate is plentiful, or a high proportion of the adenylate pool is ATP, gluconeogenesis is favoured**; when AMP rises it stimulates PFK-1 and, in a later chapter's material, also activates glycogen phosphorylase. One signal, three pathways, all pointing the same way.",
      cn: "柠檬酸（citrate） —— 丙酮酸、脂肪酸和氨基酸有氧氧化的那个关键中间产物 —— 在这里也是一个别构调节物：柠檬酸浓度高，会加深 ATP 对 PFK-1 的抑制。读一下柠檬酸在说什么：细胞当下的能量需求已经由烧脂肪和蛋白满足了，没有理由再去烧糖。在对面那一侧，FBPase-1 被 AMP 强烈地别构抑制 —— 于是 ATP 供应低时，那条很费 ATP 的造糖路线就减速。所以这两个酶是被协同地、且方向相反地管着的：同一个代谢物把一个抬上去、把另一个压下来。一般规则由此浮现：**acetyl-CoA 或柠檬酸充裕、或者腺苷酸池里 ATP 占比很高时，糖异生占上风**；AMP 升高时，它既刺激 PFK-1，也（在后面章节的内容里）激活糖原磷酸化酶。一个信号，三条通路，全都指向同一个方向。",
      src: "A p.541–542, §14.5, Fig. 14-23",
      see: [{ id: "L-15-3-1", en: "AMP activating glycogen phosphorylase", cn: "AMP 激活糖原磷酸化酶" }]
    },
    {
      link_en: "and now the molecule the whole section is built around",
      link_cn: "现在轮到整节内容围绕着建起来的那个分子",
      en: "Fructose 2,6-bisphosphate is not an intermediate of glycolysis and not an intermediate of gluconeogenesis. No flux runs through it. **It exists only to carry information — which is precisely why the cell can make and destroy it freely without disturbing either pathway's throughput.** It is an allosteric effector of both opposed enzymes, and its two actions are opposite and simultaneous. On PFK-1 it raises the affinity for the substrate fructose 6-phosphate and lowers the affinity for the inhibitors ATP and citrate. On FBPase-1 it lowers the affinity for its substrate, slowing gluconeogenesis. And here is the measurement that shows how central it is: at physiological concentrations of every substrate and of every other positive and negative effector, PFK-1 is virtually inactive in the absence of fructose 2,6-bisphosphate. So all the ATP, AMP and citrate tuning in the two steps above is fine adjustment sitting on top of a switch that is otherwise off.",
      cn: "果糖-2,6-二磷酸既不是糖酵解的中间产物，也不是糖异生的中间产物。没有任何通量从它身上流过。**它存在的唯一目的就是携带信息 —— 而这恰恰是细胞可以随意制造它、销毁它而不扰动两条通路吞吐量的原因。**它是那两个方向相反的酶共同的别构效应物，而它的两个作用方向相反、同时发生。对 PFK-1：提高它对底物果糖-6-磷酸的亲和力，降低它对抑制剂 ATP 和柠檬酸的亲和力。对 FBPase-1：降低它对自身底物的亲和力，从而拖慢糖异生。而下面这个测量结果说明了它有多核心：在所有底物、以及所有其他正负效应物都处于生理浓度时，一旦没有果糖-2,6-二磷酸，PFK-1 几乎完全没有活性。所以上面两步里那些 ATP、AMP、柠檬酸的调校，全都是叠在一个本来就关着的开关之上的微调。",
      src: "A p.542–543, §14.5, Fig. 14-24"
    },
    {
      link_en: "so what sets the level of that signal? A piece of protein architecture worth drawing",
      link_cn: "那么，这个信号的水平由什么决定？一处值得画出来的蛋白结构",
      en: "The concentration of fructose 2,6-bisphosphate is set by the balance between making it and destroying it. It is made by phosphorylating fructose 6-phosphate, a reaction catalysed by phosphofructokinase-2 (PFK-2), and destroyed by fructose 2,6-bisphosphatase (FBPase-2). Keep the numbering straight, because this is the commonest place to get the numbering wrong: PFK-2 and FBPase-2 are different enzymes from PFK-1 and FBPase-1, which make and break fructose 1,6-bisphosphate. The 1,6 pair moves metabolic traffic; the 2,6 pair moves a signal. Now the architecture. **PFK-2 and FBPase-2 are two separate enzymatic activities of a single bifunctional protein — one polypeptide chain, one kinase domain, one phosphatase domain, running opposite reactions on the same pair of molecules.** Why that matters is control economics: because both activities are on one chain, a single covalent modification raises one and lowers the other in the same instant. Two separate proteins would need two signals and could drift out of step. The reciprocity is built into the protein rather than maintained by regulation.",
      cn: "果糖-2,6-二磷酸的浓度，由「造它」与「拆它」之间的平衡决定。造它的是把果糖-6-磷酸磷酸化的那个反应，由 phosphofructokinase-2（PFK-2）催化；拆它的是 fructose 2,6-bisphosphatase（FBPase-2）。编号一定要理清楚，因为这里是全节最容易读错的地方：PFK-2 与 FBPase-2 跟 PFK-1、FBPase-1 是不同的酶；后面那一对造与拆的是果糖-1,6-二磷酸。「1,6」那一对搬的是代谢流量，「2,6」那一对搬的是信号。再看结构。**PFK-2 与 FBPase-2 是同一个双功能蛋白身上两种彼此独立的酶活性 —— 一条多肽链，一个激酶结构域，一个磷酸酶结构域，对着同一对分子跑方向相反的反应。**这为什么要紧？是控制的经济学：因为两个活性长在同一条链上，一次共价修饰就能在同一瞬间把一个抬上去、把另一个压下来。两个分开的蛋白需要两个信号，而且可能失去同步。这里的「互为倒数」是被造进蛋白里的，而不是靠调控去维持的。",
      src: "A p.542–543, §14.5, Fig. 14-25"
    },
    {
      link_en: "which is what lets a hormone in the blood reach an enzyme in the cytosol in seconds",
      link_cn: "而这正是「血里的激素能在几秒内够到胞质中一个酶」的原因",
      en: "Trace the chain one arrow at a time. Low blood glucose releases glucagon; glucagon stimulates adenylyl cyclase in the liver to make cyclic AMP from ATP; cyclic AMP activates protein kinase A; and protein kinase A transfers a phosphoryl group from ATP onto the bifunctional PFK-2/FBPase-2 protein — the one-chain enzyme pair described in the step above. Now the payoff of the one-protein design: **that single phosphorylation enhances the FBPase-2 activity and inhibits the PFK-2 activity.** Fructose 2,6-bisphosphate therefore falls, glycolysis is inhibited, gluconeogenesis is stimulated, and the liver makes more glucose for the blood — exactly what glucagon was sent to say. Now the other direction: insulin runs the same chain backwards: it stimulates a phosphoprotein phosphatase that takes the phosphoryl group back off, which activates PFK-2, raises fructose 2,6-bisphosphate, stimulates glycolysis and inhibits gluconeogenesis. Count the steps and notice what the cell bought: four steps from receptor to metabolite, all of them allosteric or covalent, none of them requiring a new protein to be made. That is why this arm works in seconds, while the transcriptional arm at the end takes minutes to days.",
      cn: "把这条链一箭一箭地跟下来。低血糖 → 释放胰高血糖素（glucagon）；胰高血糖素 → 刺激肝里的腺苷酸环化酶，由 ATP 造出 cyclic AMP；cyclic AMP → 激活蛋白激酶 A（protein kinase A）；蛋白激酶 A → 把一个磷酰基从 ATP 转到那个双功能 PFK-2/FBPase-2 蛋白上。「一个蛋白」这个设计的回报就在这里：**这一次磷酸化同时增强 FBPase-2 活性、抑制 PFK-2 活性。**于是果糖-2,6-二磷酸下降，糖酵解被抑制，糖异生被刺激，肝造出更多葡萄糖送进血液 —— 正是胰高血糖素被派来传达的那句话。反过来，胰岛素（insulin）把同一条链反着跑：它刺激一个磷酸蛋白磷酸酶，把那个磷酰基重新摘掉，于是 PFK-2 被激活，果糖-2,6-二磷酸升高，糖酵解被刺激，糖异生被抑制。数一数步数，看细胞买到了什么：从受体到代谢物只有四步，全部是别构或共价的，没有一步需要新造蛋白。这就是这一支能在几秒内起作用的原因；而最后那条转录的支线，要花几分钟到几天。",
      src: "A p.542, §14.5"
    },
    {
      link_en: "a second input reaches the same protein, and it is the link between eating carbohydrate and making fat",
      link_cn: "还有第二个输入抵达同一个蛋白 —— 它是「吃碳水」与「造脂肪」之间的那条连线",
      en: "Xylulose 5-phosphate, a product of the pentose phosphate pathway, mediates the rise in glycolysis that follows a high-carbohydrate meal, and the logic of using it as a signal is worth spelling out: its concentration climbs when glucose entering the liver becomes glucose 6-phosphate and flows into both glycolysis and the pentose phosphate pathway, so it reports that the glucose-using pathways are well supplied. What it does is activate phosphoprotein phosphatase 2A (PP2A), which dephosphorylates the same bifunctional PFK-2/FBPase-2 protein that glucagon phosphorylates. Dephosphorylation turns PFK-2 on and FBPase-2 off, fructose 2,6-bisphosphate rises, glycolysis is stimulated and gluconeogenesis inhibited. Follow it one step further to see why it matters beyond sugar: more glycolysis makes more acetyl-CoA, while more hexose through the pentose phosphate pathway makes NADPH — and **acetyl-CoA plus NADPH are exactly the two starting materials for fatty acid synthesis, which is why fat synthesis rises sharply after a carbohydrate-rich meal.** Xylulose 5-phosphate also increases the synthesis of the enzymes needed for it, so the same signal both opens the pathway and orders more machinery.",
      cn: "木酮糖-5-磷酸（xylulose 5-phosphate）是磷酸戊糖途径的产物，它介导了「富含碳水的一餐之后糖酵解上升」这件事；把它拿来当信号的逻辑值得说清楚：当进入肝的葡萄糖变成葡萄糖-6-磷酸、并同时流进糖酵解和磷酸戊糖途径时，它的浓度就升高 —— 所以它报告的是「用糖的那些通路底物很充足」。它做的事，是激活 phosphoprotein phosphatase 2A（PP2A，磷酸蛋白磷酸酶 2A），由后者去给那个双功能 PFK-2/FBPase-2 蛋白脱磷酸 —— 正是胰高血糖素磷酸化的同一个靶点。脱磷酸把 PFK-2 打开、把 FBPase-2 关上，果糖-2,6-二磷酸升高，糖酵解被刺激、糖异生被抑制。再往下跟一步，就明白它的意义超出了糖：糖酵解增多带来更多 acetyl-CoA，而更多己糖走磷酸戊糖途径则生成 NADPH —— 而 **acetyl-CoA 加 NADPH，正好就是脂肪酸合成的两样起始材料。这就是富含碳水的一餐之后脂肪合成会陡然上升的原因。**木酮糖-5-磷酸还会提高合成这些酶的量，所以同一个信号既打开了通路，又下单要更多机器。",
      src: "A p.543–544, §14.5"
    },
    {
      link_en: "control point three is the exit, and its inhibitor list reads as one sentence",
      link_cn: "第三个控制点是出口 —— 它那份抑制剂清单读起来其实是一句话",
      en: "Vertebrates have at least three isozymes of pyruvate kinase, differing by tissue and by which modulators — molecules that bind and turn the enzyme up or down — they answer to. High concentrations of ATP, of acetyl-CoA and of long-chain fatty acids allosterically inhibit all of them — and every one of those three is a sign of an abundant energy supply, so **the list reads as one sentence: stop making pyruvate when the cell is already rich.** Two more modulators finish it. Fructose 1,6-bisphosphate accumulating upstream activates the enzyme — feed-forward control, in which the product of the committed step warns the last step that material is on its way. And alanine, which is one transamination away from pyruvate, inhibits it, slowing pyruvate production when pyruvate's own downstream product is already piling up. Then the liver-only layer: when low blood glucose releases glucagon, protein kinase A phosphorylates the L isozyme of pyruvate kinase and inactivates it, which slows the liver's own use of glucose as fuel and spares it for export to the brain. The muscle M form is untouched by that phosphorylation — and in muscle a rise in cyclic AMP means the opposite thing entirely: in response to epinephrine it activates glycogen breakdown and glycolysis for fight or flight. Cyclic AMP is the second messenger in both cases: one and the same molecule, opposite outcomes, because the two tissues have different jobs.",
      cn: "脊椎动物至少有三种 pyruvate kinase 同工酶，按组织分布不同，响应的调节物也不同。高浓度的 ATP、acetyl-CoA 和长链脂肪酸会别构抑制它们全部 —— 而这三样每一样都是「能量供应充裕」的标志，所以**这份清单读起来就是一句话：细胞已经很富了，就别再造丙酮酸了。**还有两个调节物把画面补完。上游积累起来的果糖-1,6-二磷酸会激活这个酶 —— 这是前馈控制：那个「作出承诺」的步骤的产物，提前通知最后一步「货正在路上」。而丙氨酸（离丙酮酸只隔一次转氨基）会抑制它 —— 当丙酮酸自己的下游产物已经堆积时，就放慢丙酮酸的生产。再加上只有肝才有的那一层：低血糖释放胰高血糖素时，蛋白激酶 A 会磷酸化 pyruvate kinase 的 L 型同工酶并使其失活 —— 这减慢了肝自己把葡萄糖当燃料烧掉的速度，把它省下来输送给脑。肌肉的 M 型不受这次磷酸化影响 —— 而且在肌肉里，cyclic AMP 升高意味着完全相反的事：响应肾上腺素时，它激活糖原分解和糖酵解，为「战或逃」供能。两边的第二信使都是 cyclic AMP：同一个分子，相反的结局 —— 因为这两个组织的职责不同。",
      src: "A p.544, §14.5, Fig. 14-26"
    },
    {
      link_en: "one more branch, inside the mitochondrion, where fat gets a vote on glucose",
      link_cn: "还有一个岔口，在线粒体内部 —— 脂肪在那里对葡萄糖投票",
      en: "On the way from pyruvate towards glucose there is a branch that decides pyruvate's fate inside the mitochondrion: either to acetyl-CoA, by the pyruvate dehydrogenase complex, feeding the citric acid cycle; or to oxaloacetate, by pyruvate carboxylase, starting gluconeogenesis. What decides is whether fat is available. When fatty acids are plentiful, their breakdown in liver mitochondria makes acetyl-CoA — a signal that oxidising glucose for fuel is unnecessary. Acetyl-CoA then acts on both branches at once and in opposite directions: **it is a positive modulator of pyruvate carboxylase, and a negative modulator of pyruvate dehydrogenase**, the latter by stimulating a protein kinase that inactivates that complex. The loop closes on itself: energy needs met, oxidative phosphorylation slows, NADH rises against NAD+ and inhibits the citric acid cycle, acetyl-CoA accumulates, and the accumulated acetyl-CoA both blocks its own further production from pyruvate and pushes the spare pyruvate towards oxaloacetate and eventually glucose. That oxaloacetate becomes PEP through PEP carboxykinase — an enzyme regulated in mammals mostly by how much of it exists, with fasting and glucagon raising its transcription through cyclic AMP and stabilising its mRNA, and insulin or high blood glucose doing the reverse. Notice the timescale changing underfoot: minutes to days, not seconds.",
      cn: "从丙酮酸走向葡萄糖的路上，有一个岔口在线粒体内部决定丙酮酸的命运：要么由丙酮酸脱氢酶复合体变成 acetyl-CoA、去喂柠檬酸循环；要么由 pyruvate carboxylase 变成草酰乙酸、开启糖异生。 而决定权在于「有没有脂肪可用」。当脂肪酸充裕时，它们在肝线粒体里被分解，产生 acetyl-CoA —— 这是一个信号，说明没必要再氧化葡萄糖来供能。于是 acetyl-CoA 同时作用在两个分支上，方向相反：**它是 pyruvate carboxylase 的正调节物，同时是丙酮酸脱氢酶的负调节物** —— 后者是通过刺激一个把该复合体灭活的蛋白激酶实现的。这个环还会自己闭合：能量需求已满足 → 氧化磷酸化减慢 → NADH 相对 NAD⁺ 升高、抑制柠檬酸循环 → acetyl-CoA 积累 → 积累的 acetyl-CoA 既阻断它自己继续从丙酮酸生成，又把富余的丙酮酸推向草酰乙酸、最终推向葡萄糖。那些草酰乙酸再经 PEP carboxykinase 变成 PEP —— 而在哺乳动物里，这个酶主要是靠「它有多少」来调控的：禁食与胰高血糖素通过 cyclic AMP 提高它的转录、稳定它的 mRNA，胰岛素或高血糖则相反。注意脚下的时间尺度正在变：这里是几分钟到几天，不是几秒。",
      src: "A p.544–545, §14.5, Fig. 14-27"
    },
    {
      link_en: "and that change of timescale is the last layer: not how active an enzyme is, but how many there are",
      link_cn: "而时间尺度的这次变化正是最后一层：不再是酶有多活跃，而是酶有多少个",
      recall_en: "everything above changed the activity of molecules that already existed; this changes their number",
      recall_cn: "上面的一切改变的是已经存在的分子的活性；这一层改变的是它们的数量",
      en: "Insulin is the main driver. Acting through its plasma-membrane receptor it starts signalling pathways whose kinases phosphorylate transcription factors, and more than 150 genes are transcriptionally regulated by insulin. The direction of each is predictable from what insulin means — plenty. Up: hexokinase II and IV, PFK-1, the bifunctional PFK-2/FBPase-2 protein, pyruvate kinase, and the NADPH- and acetyl-CoA-producing enzymes that feed lipid synthesis. Down: PEP carboxykinase and glucose 6-phosphatase, the two enzymes without which glucose cannot be made and exported. One transcription factor is worth knowing by name: ChREBP, the carbohydrate response element binding protein, found mainly in liver, adipose tissue and kidney. Its unlocking takes two steps: phosphorylated ChREBP sits inactive in the cytosol; PP2A removes one phosphoryl group so it can enter the nucleus; a nuclear PP2A removes a second; and only then does it pair with its partner protein Mlx and turn on the synthesis of pyruvate kinase, fatty acid synthase and acetyl-CoA carboxylase. And what activates that PP2A is xylulose 5-phosphate again. So **the same pentose phosphate intermediate that flipped the fast switch also flips the slow one — one signal, two timescales.**",
      cn: "主要的驱动者是胰岛素。它通过质膜上的受体启动一系列信号通路，其中的激酶去磷酸化转录因子；受胰岛素转录调控的基因超过 150 个。每一个的方向都能从「胰岛素意味着丰盛」推出来。调高的：hexokinase II 与 IV、PFK-1、那个双功能 PFK-2/FBPase-2 蛋白、pyruvate kinase，以及为脂类合成供料的那些产 NADPH 和 acetyl-CoA 的酶。调低的：PEP carboxykinase 和 glucose 6-phosphatase —— 没有这两个酶就造不出、也送不出葡萄糖。有一个转录因子值得记住名字：ChREBP（碳水化合物应答元件结合蛋白），主要见于肝、脂肪组织和肾。它的解锁分两步：被磷酸化的 ChREBP 无活性地待在胞质里；PP2A 摘掉一个磷酰基，它才能进核；核内的 PP2A 再摘掉第二个；只有到这时它才与搭档蛋白 Mlx 配对，开启 pyruvate kinase、脂肪酸合酶和 acetyl-CoA 羧化酶的合成。而激活那个 PP2A 的，又是木酮糖-5-磷酸。**所以那个拨动了快开关的磷酸戊糖途径中间产物，也拨动了慢开关 —— 一个信号，两个时间尺度。**",
      src: "A p.545–546, §14.5, Table 14-5, Fig. 14-28",
      see: [{ id: "L-23-3-1", en: "insulin and glucagon across the whole body", cn: "胰岛素与胰高血糖素在全身层面的作用" }]
    }
  ],
  terms: [
    { en: "futile cycle", cn: "无效循环",
      def_en: "Two opposed enzymes running at once across the same pair of molecules, so that the two reactions sum to ATP + H2O -> ADP + Pi and the energy leaves as heat. Preventing this is why glycolysis and gluconeogenesis must be reciprocally regulated, and why the regulation sits precisely at the three bypassed steps.",
      def_cn: "两个方向相反的酶同时在同一对分子上运转，两个反应加总只剩 ATP + H₂O → ADP + Pi，能量以热的形式跑掉。防止这件事，正是糖酵解与糖异生必须互为倒数地被调控的原因，也是调控恰好坐在那三个被绕过的步骤上的原因。" },
    { en: "hexokinase IV (glucokinase)", cn: "己糖激酶 IV（葡萄糖激酶）",
      def_en: "The liver form, half-saturated at about 10 mM glucose, which is above blood glucose. That deliberately low affinity lets it read blood glucose directly: the liver takes up more the more there is, and lets newly made glucose leave rather than trapping it. It is also not inhibited by glucose 6-phosphate, and is instead locked inside the nucleus by a liver-specific regulatory protein when fructose 6-phosphate is high.",
      def_cn: "肝里的那一型，在约 10 mM 葡萄糖时才半饱和，而这高于血糖水平。这份刻意的低亲和力让它能直接「读」血糖：血里越多，肝拿走越多；而刚造出来的葡萄糖则被放走、不被扣住。它也不受葡萄糖-6-磷酸抑制，取而代之的是：果糖-6-磷酸高时，一个肝特异的调节蛋白把它锁在细胞核里。" },
    { en: "isozyme", cn: "同工酶",
      def_en: "Two or more molecular forms of an enzyme catalysing the same reaction, differing in kinetics, regulation, cofactor or location. Lactate dehydrogenase is the clinical case: the LDH1/LDH2 ratio in blood inverts within 24 hours of a myocardial infarction, and that inversion plus a rise in creatine kinase is strong evidence of a recent one.",
      def_cn: "催化同一反应的两种或更多种酶分子形式，在动力学、调控、辅因子或所在位置上不同。乳酸脱氢酶是那个临床例子：心肌梗死后 24 小时内，血中 LDH1/LDH2 的比值会反转；这次反转加上肌酸激酶升高，是近期梗死的有力证据。" },
    { en: "PFK-1 and the committed step", cn: "PFK-1 与「作出承诺」的那一步",
      def_en: "The metabolically irreversible reaction that commits glucose to glycolysis. Its main brake is one of its own substrates: ATP binds a separate allosteric site and lowers affinity for fructose 6-phosphate, citrate deepens that inhibition, and ADP and AMP relieve it.",
      def_cn: "把葡萄糖交付给糖酵解的那个代谢上不可逆的反应。踩它刹车的正是它自己的一个底物：ATP 结合到另一个别构位点上，降低它对果糖-6-磷酸的亲和力；柠檬酸加深这份抑制；ADP 与 AMP 则解除它。" },
    { en: "fructose 2,6-bisphosphate", cn: "果糖-2,6-二磷酸",
      def_en: "Not an intermediate of either pathway — a pure signal, which is why it can be made and destroyed without disturbing throughput. It activates PFK-1 and inhibits FBPase-1 at the same moment, and at physiological concentrations of everything else PFK-1 is virtually inactive without it.",
      def_cn: "它不是任何一条通路的中间产物 —— 它是纯粹的信号，所以造它、拆它都不会扰动通量。它在同一瞬间激活 PFK-1、抑制 FBPase-1；而在其他一切都处于生理浓度时，没有它，PFK-1 几乎没有活性。" },
    { en: "the bifunctional PFK-2/FBPase-2 protein", cn: "双功能的 PFK-2/FBPase-2 蛋白",
      def_en: "One polypeptide carrying a kinase domain that makes fructose 2,6-bisphosphate and a phosphatase domain that destroys it. Because both sit on one chain, one phosphorylation raises one activity and lowers the other in the same instant — the reciprocity is built into the protein. Do not confuse this pair with PFK-1 and FBPase-1, which move traffic rather than signal.",
      def_cn: "一条多肽链上同时带着「造果糖-2,6-二磷酸」的激酶结构域和「拆它」的磷酸酶结构域。因为两者长在同一条链上，一次磷酸化就能在同一瞬间把一个抬上去、把另一个压下来 —— 互为倒数是被造进蛋白里的。不要把这一对与 PFK-1／FBPase-1 混淆，后者搬的是流量，不是信号。" },
    { en: "the glucagon cascade", cn: "胰高血糖素级联",
      def_en: "Low blood glucose to glucagon to adenylyl cyclase to cyclic AMP to protein kinase A to phosphorylation of the bifunctional protein: FBPase-2 up, PFK-2 down, fructose 2,6-bisphosphate falls, gluconeogenesis runs. Insulin reverses it through a phosphoprotein phosphatase. Four steps from receptor to metabolite, none of them needing new protein — which is why it works in seconds.",
      def_cn: "低血糖 → 胰高血糖素 → 腺苷酸环化酶 → cyclic AMP → 蛋白激酶 A → 磷酸化那个双功能蛋白：FBPase-2 上升、PFK-2 下降，果糖-2,6-二磷酸下跌，糖异生开跑。胰岛素通过一个磷酸蛋白磷酸酶把它反过来。从受体到代谢物只有四步，没有一步需要新造蛋白 —— 所以它能在几秒内奏效。" },
    { en: "xylulose 5-phosphate", cn: "木酮糖-5-磷酸",
      def_en: "A pentose phosphate pathway product that reports the glucose-using pathways are well supplied. It activates phosphoprotein phosphatase 2A, which dephosphorylates the bifunctional protein and so raises fructose 2,6-bisphosphate — and the same phosphatase unlocks the transcription factor ChREBP. One signal working on both the seconds timescale and the days one.",
      def_cn: "磷酸戊糖途径的一个产物，报告「用糖的那些通路底物充足」。它激活磷酸蛋白磷酸酶 2A，后者给双功能蛋白脱磷酸，从而抬高果糖-2,6-二磷酸；而同一个磷酸酶还负责解锁转录因子 ChREBP。同一个信号，同时作用在「秒」和「天」两个时间尺度上。" },
    { en: "ChREBP and Mlx", cn: "ChREBP 与 Mlx",
      def_en: "The carbohydrate response element binding protein and its partner. Phosphorylated ChREBP is held inactive in the cytosol; PP2A removes one phosphoryl group to let it into the nucleus and a nuclear PP2A removes a second, after which it pairs with Mlx and switches on pyruvate kinase, fatty acid synthase and acetyl-CoA carboxylase.",
      def_cn: "碳水化合物应答元件结合蛋白，以及它的搭档。被磷酸化的 ChREBP 无活性地待在胞质里；PP2A 摘掉一个磷酰基让它进核，核内的 PP2A 再摘掉第二个；此后它与 Mlx 配对，开启 pyruvate kinase、脂肪酸合酶与 acetyl-CoA 羧化酶的合成。" }
  ]
};

/* ------------------------------------------------------------------ L-15-2-1 */
window.BIOLITE_SPINE["L-15-2-1"] = {
  assumed: ["glycolysis", "gluconeogenesis", "liver", "kidney", "muscle", "brain",
            "hepatocyte", "adipose tissue", "blood-brain barrier", "amylase",
            "starch", "cellulose", "vitamin", "amino acid", "transamination",
            "lysosome", "electron microscopy", "myoglobin", "ketone body", "protein",
            "glucose", "ATP", "UTP", "Mn2+", "enzyme", "substrate", "cytosol",
            "endoplasmic reticulum", "hexokinase", "glucokinase", "fatty acid"],
  nodeTitle_en: "Glycogen breakdown and synthesis",
  nodeTitle_cn: "糖原的分解与合成",
  title_en: "Why the cell takes glycogen apart with phosphate instead of water, and why putting it back together costs three times what it returns",
  title_cn: "为什么细胞用磷酸而不是水去拆糖原，以及为什么装回去要花掉拆下来时收回的三倍",
  steps: [
    {
      en: "Start with the osmotic argument, because it turns a storage fact into a reason. A well-fed liver cell holds a great deal of stored glucose — stored as glycogen, which is a large, heavily branched polymer of glucose residues — and **if all of it were sitting there as free monomers it would come to about 0.4 M — an osmolarity so far above the surrounding fluid that water would pour in and probably burst the cell.** Polymerised, one glycogen molecule of 55,000 residues exerts the osmotic pressure of a single particle instead of 55,000. That is the whole point of the polymer. The quantities are worth having exactly: a 70 kg human stores about 100 g of glycogen in the liver and up to 400 g in skeletal muscle, which is 5 to 10 percent of the liver's wet weight and 1 to 2 percent of muscle's. And the reason a vertebrate keeps this small expensive store alongside a fat store roughly a hundred times larger is three sentences: fat cannot be turned into glucose; fat cannot be broken down anaerobically, which is what hard-working skeletal muscle often needs; and the brain cannot use fatty acids at all, because long-chain fatty acids do not cross the blood-brain barrier.",
      cn: "从渗透压这个论证开始，因为它把一个「储存事实」变成了一个理由。一个吃饱的肝细胞里储着大量葡萄糖 —— 它们以糖原（glycogen）的形式储存，那是一种高度分支的葡萄糖聚合物 —— **如果这些葡萄糖以游离单体的形式待在那儿，浓度大约是 0.4 M —— 这个渗透浓度远高于周围的体液，水会倒灌进来，多半会把细胞胀破。**聚合起来之后，一个含 55,000 个残基的糖原分子，产生的渗透压只相当于一个颗粒，而不是 55,000 个。这就是这个聚合物存在的全部意义。数量值得记准：一个 70 kg 的人肝里约存 100 g 糖原，骨骼肌里最多 400 g，分别相当于肝湿重的 5–10%、肌肉湿重的 1–2%。而脊椎动物为什么要在一个大约一百倍于它的脂肪库之外，还留着这个又小又贵的库？三句话：脂肪不能被转变成葡萄糖；脂肪不能在无氧条件下分解，而奋力工作的骨骼肌常常正需要无氧分解；脑根本用不了脂肪酸，因为长链脂肪酸过不了血脑屏障。",
      src: "A p.556–557, §15.1–15.2"
    },
    {
      link_en: "and the shape it is stored in is not a detail — it is where the tissue difference starts",
      link_cn: "而它被存成什么形状并不是细节 —— 组织之间的差别正是从这里开始的",
      en: "Glycogen sits in cytosolic granules. A muscle β-granule is 20 to 30 nm across and carries up to 55,000 glucose residues with about 2,000 nonreducing ends — **a nonreducing end being a chain terminus whose anomeric carbon is tied up in the glycosidic bond, and therefore the only place the enzymes of this pathway can work.** In liver, 20 to 40 β-granules cluster into protein-rich α-granules up to 300 nm across, visible under the electron microscope in a well-fed animal and essentially gone after a 24-hour fast. Muscle β-granules release glucose faster than liver α-granules, which matches what the two tissues are for. At the core of every granule is a dimer of the protein glycogenin, and around it sit tier upon tier of chains of about 13 residues, six or seven tiers deep, with the outermost unbranched tier making up most of the granule. The enzymes that build and break glycogen, and the regulatory proteins that act on them, are bolted onto the granule itself — so this is not a store with enzymes nearby, it is an assembly with its machinery attached.",
      cn: "糖原以胞质颗粒的形式存在。肌肉里的 β 颗粒直径 20 到 30 nm，带着多达 55,000 个葡萄糖残基、约 2,000 个非还原端 —— **所谓非还原端，是指那个链末端的异头碳已经参与了糖苷键，因而它正是这条通路上的酶唯一能下手的地方。**在肝里，20 到 40 个 β 颗粒聚成富含蛋白的 α 颗粒，直径可达 300 nm；在吃饱的动物身上用电子显微镜看得见，禁食 24 小时后基本消失。肌肉的 β 颗粒放出葡萄糖比肝的 α 颗粒快，这与两个组织各自的用途相符。每个颗粒的核心都是蛋白 glycogenin（糖原蛋白）的一个二聚体，围绕它的是一层又一层约 13 个残基的链，共六到七层，而最外面那层不带分支的链占了颗粒的大部分。造糖原和拆糖原的那些酶、以及作用在它们身上的调节蛋白，是直接拴在颗粒上的 —— 所以这不是「一个旁边放着酶的仓库」，而是一个自带机器的组装体。",
      src: "A p.556–558, §15.1"
    },
    {
      link_en: "now the breakdown, and the first decision is which molecule attacks the bond",
      link_cn: "现在讲分解 —— 第一个决定是「由哪个分子去进攻那根键」",
      en: "Glycogen phosphorylase is the enzyme that takes the terminal residue off a nonreducing end: it lets inorganic phosphate attack the α-1,4 glycosidic bond, and the residue leaves as α-D-glucose 1-phosphate. That is phosphorolysis, and it is a deliberate alternative to hydrolysis, which is what amylase does to dietary starch and glycogen in the gut with water as the attacker and free glucose as the product. The gain is stated in energy terms: **some of the energy of the glycosidic bond is conserved in the phosphate ester that forms. The cell does not have to buy that phosphate back later.**",
      cn: "glycogen phosphorylase（糖原磷酸化酶）从一个非还原端摘下末端残基，办法是让无机磷酸去进攻那根 α-1,4 糖苷键，残基便以 α-D-葡萄糖-1-磷酸的形式离开。这就是 phosphorolysis（磷酸解），它是对水解的一个有意为之的替代 —— 而水解正是肠道里 amylase 对膳食淀粉和糖原所做的事：进攻者是水，产物是游离葡萄糖。这里的收益是用能量说的：**糖苷键的一部分能量，被保存在了新形成的那个磷酸酯里。细胞后面就不必再把那个磷酸买回来了。**",
      src: "A p.558–559, §15.2"
    },
    {
      link_en: "and that gain can be counted, in ATP, at a named step",
      link_cn: "而这份收益可以数出来 —— 用 ATP，而且能指名道姓是在哪一步",
      recall_en: "the phosphoryl group is a good leaving group already attached, so the sugar arrives pre-activated",
      recall_cn: "磷酰基是一个已经装好的好离去基团，所以这个糖是「预先活化」着到场的",
      en: "Glucose 1-phosphate becomes glucose 6-phosphate and enters glycolysis already phosphorylated, so it skips the hexokinase step altogether. **The preparatory phase of glycolysis therefore costs 1 ATP instead of 2, and the cell nets 3 ATP instead of 2 per glucose monomer** — a saving of exactly one ATP per monomer, and the saving is at hexokinase. There is a second gain that costs nothing: a phosphorylated sugar cannot cross the plasma membrane, so glucose released from glycogen by phosphorolysis is trapped inside the cell that released it. Free glucose, which hydrolysis would have produced, could simply leave.",
      cn: "葡萄糖-1-磷酸转成葡萄糖-6-磷酸，进入糖酵解时已经带着磷酸，因此它把 hexokinase 那一步整个跳过了。**于是糖酵解的准备阶段只花 1 个 ATP，而不是 2 个**，细胞每个葡萄糖单体净得 3 个 ATP，而不是 2 个 —— 每个单体正好省下一个 ATP，而且省在 hexokinase 那一步。还有一份不花钱的额外收益：磷酸化的糖过不了质膜，所以靠磷酸解从糖原上放下来的葡萄糖，被扣在放出它的那个细胞里。而水解本会产生的游离葡萄糖，是可以直接走掉的。",
      src: "A p.522, 559, §15.2, Worked Example 14-1"
    },
    {
      link_en: "one cofactor here answers a question about vitamins, and it does an unusual job",
      link_cn: "这里有一个辅因子回答了一个关于维生素的问题 —— 而它干的活很不寻常",
      en: "Pyridoxal phosphate is an essential cofactor of glycogen phosphorylase, covalently attached near the active site. Pyridoxal phosphate is the active form of vitamin B6, so the question of which vitamin glycogen breakdown depends on has a real answer. What makes this worth remembering is that the job is not its usual one. Everywhere else in metabolism, pyridoxal phosphate does Schiff-base chemistry on an amino group — transamination, decarboxylation, amino acid metabolism generally. **Here it does not touch the substrate's chemistry at all. Only its own phosphate group takes part, acting as a general acid catalyst that helps inorganic phosphate attack the glycosidic bond.**",
      cn: "pyridoxal phosphate（磷酸吡哆醛，PLP）是 glycogen phosphorylase 必需的辅因子，共价连接在活性位点附近。PLP 是维生素 B₆ 的活性形式，所以「糖原分解依赖哪种维生素」这个问题是有真实答案的。它值得记住的原因在于：这里它干的不是它平时的活。在代谢的其他任何地方，PLP 做的都是对氨基的席夫碱化学 —— 转氨基、脱羧，以及氨基酸代谢中的种种。**而在这里，它根本不碰底物的化学。参与反应的只是它自己身上那个磷酸基团，充当 general acid（广义酸）催化剂，帮助无机磷酸去进攻糖苷键。**",
      src: "A p.559, §15.2"
    },
    {
      link_en: "phosphorylase cannot finish the job on its own, and the enzyme that rescues it is one protein, not two",
      link_cn: "磷酸化酶自己干不完这活；而来救场的是一个蛋白，不是两个",
      en: "Phosphorylase chews along a nonreducing end and then stops dead four glucose residues short of every α-1,6 branch point — a branch point being the spot where one chain is joined onto the side of another. What clears the branch is the debranching enzyme, formally oligo α-1,6 to α-1,4 glucantransferase, and the thing to get right is the count: **it is one bifunctional protein carrying two chemically different activities, not two enzymes.** Its transferase activity is the first move: it takes a block of three residues from the branch to a nearby nonreducing end and reattaches them in α-1,4 linkage. Its glucosidase activity then hydrolyses the single remaining α-1,6-linked glucose off, and that one leaves as free glucose, not as a phosphate. Phosphorylase can then carry on. Two pieces of evidence say it is one protein: the enzyme is described as bifunctional, and a single genetic defect — type IIIa glycogen storage disease, Cori or Forbes disease — knocks out both activities at once.",
      cn: "磷酸化酶沿着一个非还原端一路啃，然后在距离每个 α-1,6 分支点还有四个葡萄糖残基的地方停下。清理分支的是 debranching enzyme（脱支酶），正式名称是 oligo α-1,6→α-1,4 glucantransferase；这里要弄准的是「数量」：**它是一个带着两种化学性质不同活性的双功能蛋白，不是两个酶。**它的 transferase（转移酶）活性把三个残基的一整块从分支上搬到附近某个非还原端，以 α-1,4 键重新接上。它的 glucosidase（葡糖苷酶）活性接着水解掉剩下的那一个 α-1,6 连接的葡萄糖 —— 这一个是以游离葡萄糖的形式离开的，不是磷酸酯。此后磷酸化酶就能继续往下啃。有两条证据说明它是一个蛋白：这个酶被明确描述为「双功能的」；而且一个单一的遗传缺陷 —— IIIa 型糖原贮积病，即 Cori 病或 Forbes 病 —— 会一次把两种活性一起打掉。",
      src: "A p.559, 562, §15.2, Fig. 15-4"
    },
    {
      link_en: "the third enzyme of the breakdown trio is the one people skip, and its mechanism is worth one sentence",
      link_cn: "分解三人组里的第三个酶最常被跳过 —— 它的机制值得一句话",
      en: "Phosphoglucomutase turns glucose 1-phosphate into glucose 6-phosphate, and it does it by handing over a phosphoryl group it is already carrying. **The enzyme starts phosphorylated on a serine residue; it donates that phosphoryl group to C-6 of the incoming sugar, which makes glucose 1,6-bisphosphate**; then it takes the phosphoryl group from C-1, leaving glucose 6-phosphate and a re-phosphorylated enzyme ready for the next molecule. That is the same pattern as phosphoglycerate mutase in glycolysis — a transiently phosphorylated enzyme and a bisphosphate intermediate. A mutase moves a functional group from one position to another within the same molecule, and mutases are a subclass of isomerases. Note that the reaction is reversible, because glycogen synthesis runs this very enzyme the other way, from glucose 6-phosphate to glucose 1-phosphate.",
      cn: "phosphoglucomutase（磷酸葡萄糖变位酶）把葡萄糖-1-磷酸变成葡萄糖-6-磷酸，办法是把它自己已经带着的一个磷酰基交出去。**这个酶起初在一个丝氨酸残基上被磷酸化；它把那个磷酰基交给进来的糖的 C-6，于是形成 glucose 1,6-bisphosphate（葡萄糖-1,6-二磷酸）**；然后它再从 C-1 上取走一个磷酰基，留下葡萄糖-6-磷酸，而酶自己重新带上磷酸，等着下一个分子。这与糖酵解里的 phosphoglycerate mutase 是同一个套路 —— 一个瞬时被磷酸化的酶，加一个二磷酸中间体。这里顺带定一个名：mutase（变位酶）指的是把一个官能团在同一个分子内部从一个位置搬到另一个位置的酶，它是异构酶的一个亚类。注意这个反应是可逆的 —— 因为糖原合成用的正是这同一个酶，只是反着跑：从葡萄糖-6-磷酸到葡萄糖-1-磷酸。",
      src: "A p.522, 559, 562, §15.2"
    },
    {
      link_en: "and what happens to that glucose 6-phosphate is where liver and muscle part company",
      link_cn: "而那个葡萄糖-6-磷酸的去向，正是肝与肌肉分道扬镳的地方",
      en: "In skeletal muscle it goes into glycolysis to pay for contraction, and that is the end of it. In liver it has a different job — putting glucose back into the blood when blood glucose falls — and that needs glucose 6-phosphatase, present in liver and kidney and not in other tissues. The architecture looks perverse until you hear the reason. The enzyme is an integral protein of the endoplasmic reticulum with its active site facing into the ER lumen, so glucose 6-phosphate made in the cytosol has to be carried in by a transporter called T1, hydrolysed there, and the products carried back out by T2 and T3, with the glucose finally leaving the cell through GLUT2. The reason: **putting the active site inside the ER keeps this reaction physically away from glycolysis, which runs in the cytosol and would be aborted if a phosphatase were loose among its intermediates.** Muscle and adipose tissue have no glucose 6-phosphatase and therefore contribute no glucose to the blood at all. One honest note on the tissue list: this pathway is described as liver and kidney only, while the gluconeogenesis chapter names liver, renal cortex and small-intestine epithelium. Give liver and kidney, and add intestinal epithelium as the third site named elsewhere.",
      cn: "在骨骼肌里，它进入糖酵解、为收缩付账，到此为止。在肝里它有另一项职责 —— 血糖下降时把葡萄糖送回血液 —— 而这需要 glucose 6-phosphatase（葡萄糖-6-磷酸酶），它存在于肝和肾，其他组织没有。这套结构看起来别扭，直到你听见理由。这个酶是内质网的一个整合膜蛋白，活性位点朝向内质网腔；所以在胞质里造出的葡萄糖-6-磷酸必须由一个叫 T1 的转运蛋白送进腔里、在那里被水解，产物再由 T2 和 T3 送出来，葡萄糖最后经 GLUT2 离开细胞。理由是：**把活性位点放进内质网，就把这个反应与糖酵解在物理上隔开了 —— 糖酵解在胞质里跑，如果有一个磷酸酶散在它的中间产物之间，它会被打断。**肌肉和脂肪组织没有 glucose 6-phosphatase，因此完全不向血液提供葡萄糖。关于组织清单，有一处要如实说明：这一章说的是「只有肝和肾」，而糖异生那一章列的是肝、肾皮质和小肠上皮。回答时给出肝和肾，并补一句「另一处还点了小肠上皮」。",
      src: "A p.560, 569, §15.2, Fig. 15-6",
      see: [{ id: "L-14-4-1", en: "the same enzyme, and the tissue list given there", cn: "同一个酶，以及那里给出的组织清单" }]
    },
    {
      link_en: "synthesis does not simply reuse the breakdown currency, and the reason is a general principle",
      link_cn: "合成并不是把分解那套货币再用一遍 —— 理由是一条普遍原则",
      en: "A sugar nucleotide is a sugar whose anomeric carbon has been activated by attaching a nucleotide to it through a phosphate ester bond, and such compounds are the substrates for building disaccharides, glycogen, starch, cellulose and complex polysaccharides. Luis Leloir found their role in 1953. Four properties make them the right tool, and the first is the load-bearing one. Their formation is metabolically irreversible. The condensation of a nucleoside triphosphate with a hexose 1-phosphate is barely downhill on its own — the free-energy change is in fact slightly positive — but **it releases pyrophosphate, and inorganic pyrophosphatase destroys that immediately in a strongly exergonic reaction, standard free-energy change -19.2 kJ/mol, which pulls the synthesis forward.** The other three: the nucleotide part gives an enzyme many groups to grip, adding binding energy to catalysis; the nucleotidyl group is an excellent leaving group, priming the sugar carbon for nucleophilic attack; and tagging a hexose with a nucleotidyl group sets it aside in a separate pool, so sugar destined for glycogen is kept apart from sugar destined for glycolysis. UDP-glucose is a label as much as an activation.",
      cn: "sugar nucleotide（糖核苷酸）指的是：一个糖的异头碳通过一根磷酸酯键接上了一个核苷酸，从而被活化；这类化合物正是搭建二糖、糖原、淀粉、纤维素和复杂多糖的底物。Luis Leloir 在 1953 年发现了它们的作用。有四条性质让它们成为合适的工具，而第一条是承重的那条：它们的形成在代谢上不可逆。核苷三磷酸与己糖-1-磷酸的缩合本身几乎不下坡（自由能变化其实还略微为正），**但它放出 pyrophosphate（焦磷酸），而无机焦磷酸酶立刻把它销毁 —— 那是一个强放能反应，标准自由能变化 -19.2 kJ/mol —— 由此把合成拉着往前走。**另外三条：核苷酸那部分给了酶很多可抓的基团，为催化补上结合能；核苷酰基是一个极好的离去基团，把糖上的那个碳预备好接受亲核进攻；而给一个己糖挂上核苷酰基标签，等于把它拨进一个单独的池子里 —— 于是要去做糖原的糖，与要去走糖酵解的糖被分开了。UDP-glucose 既是一次活化，也是一枚标签。",
      src: "A p.560–561, §15.2",
      recall_en: "the same PPi-hydrolysis push that makes adenylylation irreversible",
      recall_cn: "和让腺苷酰化不可逆的那份「PPi 水解推力」是同一个东西",
      see: [{ id: "L-13-3-1", en: "PPi hydrolysis pulling a reaction forward", cn: "PPi 水解把反应拉着往前走" }]
    },
    {
      link_en: "so count what activating one glucose costs",
      link_cn: "那就来数一数，活化一个葡萄糖要花多少",
      en: "Glycogen synthesis starts from glucose 6-phosphate — made from free glucose by hexokinase I or II in muscle, or by hexokinase IV, glucokinase, in liver. Phosphoglucomutase turns it into glucose 1-phosphate, and UDP-glucose pyrophosphorylase then makes UDP-glucose from glucose 1-phosphate plus UTP, releasing pyrophosphate. The enzyme is named for the reverse of the direction it actually runs; in a cell it goes towards UDP-glucose, because pyrophosphate is destroyed as fast as it appears. The net reaction of the whole manoeuvre is: sugar phosphate + NTP -> NDP-sugar + 2 Pi. Read that and the price is visible: both phosphoanhydride bonds of the UTP are spent to activate one single glucose residue. Add the ATP that hexokinase spent to bring a free blood glucose in, and **storing one glucose as glycogen costs three high-energy phosphate equivalents — while phosphorolysis on the way back out returns only one.**",
      cn: "糖原合成从葡萄糖-6-磷酸出发 —— 它由游离葡萄糖经肌肉里的 hexokinase I 或 II、或肝里的 hexokinase IV（glucokinase）生成。phosphoglucomutase 把它变成葡萄糖-1-磷酸，然后 UDP-glucose pyrophosphorylase 用葡萄糖-1-磷酸加 UTP 造出 UDP-glucose，同时放出焦磷酸。这个酶是按它实际运行方向的反方向命名的；在细胞里它朝着生成 UDP-glucose 的方向跑，因为焦磷酸一出现就被销毁。整套动作的净反应是：糖磷酸 + NTP → NDP-糖 + 2 Pi。读出这一行，价钱就看得见了：UTP 的两根磷酸酐键，全花在活化「一个」葡萄糖残基上。再加上 hexokinase 为把一个游离血糖弄进来所花的那个 ATP —— **把一个葡萄糖存成糖原要花三个高能磷酸当量，而磷酸解在拆出来的时候只还回一个。**",
      src: "A p.562–563, §15.2, Fig. 15-7",
      beyond: true,
      beyondNote: "The three-in, one-out tally is arithmetic done from two printed statements — the net equation of Figure 15-7 and Worked Example 14-1 — rather than a sentence stated on these pages."
    },
    {
      link_en: "with the sugar activated, two different enzymes make two different bonds",
      link_cn: "糖被活化之后，两个不同的酶去造两种不同的键",
      en: "Glycogen synthase is the enzyme that takes the glucose residue from UDP-glucose and attaches it to a nonreducing end of a branched glycogen molecule as an α-1,4 linkage, and the whole path from glucose 6-phosphate to glycogen-lengthened-by-one strongly favours synthesis. But **glycogen synthase cannot make an α-1,6 bond, which is the bond at every branch point.** That job belongs to the glycogen-branching enzyme, also called amylo 1,4 to 1,6 transglycosylase, which takes a terminal fragment of 6 or 7 glucose residues from the nonreducing end of a branch that has at least 11 residues, and reattaches it to the C-6 hydroxyl of a glucose sitting further inside the same chain or another one.",
      cn: "glycogen synthase（糖原合酶）从 UDP-glucose 上取下葡萄糖残基，以 α-1,4 键接到一个分支糖原分子的非还原端上；而从葡萄糖-6-磷酸到「糖原长了一个单位」这整条路，强烈偏向合成一侧。**但 glycogen synthase 造不出 α-1,6 键 —— 而每一个分支点上的键都是 α-1,6。**那份活属于 glycogen-branching enzyme（糖原分支酶），又叫 amylo 1,4→1,6 transglycosylase：它从一条至少有 11 个残基的支链的非还原端上取下一段 6 或 7 个葡萄糖残基的末端片段，重新接到同一条链或另一条链上、位置更靠内的某个葡萄糖的 C-6 羟基上。",
      src: "A p.563, §15.2"
    },
    {
      link_en: "and branching is not cosmetic — it is what makes the granule fast",
      link_cn: "而分支不是装饰 —— 它正是颗粒之所以快的原因",
      recall_en: "the 2,000 nonreducing ends of a muscle granule, from the second step of this chain",
      recall_cn: "肌肉颗粒上那 2,000 个非还原端，来自这条链的第二步",
      en: "The biological effect of branching is to increase the number of nonreducing ends, and both glycogen synthase and glycogen phosphorylase work only at nonreducing ends. Put that beside the granule: **55,000 residues carrying about 2,000 nonreducing ends means up to two thousand enzyme molecules can work on one glycogen molecule at the same time.** So branching buys parallelism rather than shape — it is why a burst of muscle contraction can be supplied within seconds rather than being fed one chain-end at a time.",
      cn: "分支的生物学效果是增加非还原端的数目 —— 而 glycogen synthase 和 glycogen phosphorylase 都只在非还原端上干活。把这句话与颗粒并排放：**55,000 个残基上带着约 2,000 个非还原端，意味着最多两千个酶分子可以「同时」在同一个糖原分子上工作。**所以分支买到的是并行度，而形状只是副产品 —— 这正是一次爆发性的肌肉收缩能在几秒内被供上能，而不是只能一个链末端一个链末端地慢慢喂的原因。",
      src: "A p.557, 563, §15.1–15.2"
    },
    {
      link_en: "one thing is still missing: glycogen synthase can lengthen a chain but cannot start one",
      link_cn: "还缺一件东西：糖原合酶能把链加长，却起不了头",
      en: "Glycogen synthase cannot initiate a new glycogen chain from nothing. It needs a primer — a pre-existing α-1,4 polyglucose chain to add to. So how does the first one ever appear? The answer is glycogenin, which is both the primer that new chains are assembled on and the enzyme that assembles them. It is a homodimer, and the first step is odd enough to be memorable: **each subunit transfers a glucose residue from UDP-glucose onto Tyr194 of the other subunit — the protein glucosylates itself, across the dimer.** Each nascent chain is then extended by seven more glucose residues, again from UDP-glucose, by glycogenin's own chain-extending activity, and only at that point does glycogen synthase take over. Glycogenin then stays buried inside the granule, covalently attached at the reducing end, for the entire life of the particle. A Mn2+ ion is essential to the catalysis, holding each UDP-glucose by its phosphates and acting as a Lewis acid that stabilises UDP as it leaves.",
      cn: "glycogen synthase 无法从零开始起一条新的糖原链。它需要一个引物 —— 一段已经存在的 α-1,4 多聚葡萄糖链，好让它往上加。那么第一条链究竟是怎么出现的？答案是 glycogenin（糖原蛋白）：它既是新链赖以搭建的那个引物，也是搭建它们的那个酶。它是一个同源二聚体，而第一步古怪到足以让人记住：**每个亚基把一个葡萄糖残基从 UDP-glucose 转到「另一个」亚基的 Tyr194 上 —— 这个蛋白隔着二聚体给自己加糖。**接着，每条新生链再由 glycogenin 自己的延长活性、同样以 UDP-glucose 为供体，多加七个葡萄糖残基；直到这时，glycogen synthase 才接手。此后 glycogenin 就一直埋在颗粒内部，以共价键连在还原端上，陪伴这个颗粒的一生。催化过程中一个 Mn²⁺ 离子是必需的：它通过磷酸抓住每一个 UDP-glucose，并充当路易斯酸，在 UDP 离去时把它稳住。",
      src: "A p.563–565, §15.2, Fig. 15-10"
    },
    {
      link_en: "and the cheapest way to check whether the pathway is really held is the list of what breaks when one enzyme is missing",
      link_cn: "而检验这条通路是否真的记住了，最省事的办法是看「少了某个酶会坏成什么样」",
      en: "There are thirteen human glycogen storage diseases, each naming one enzyme, the organ it fails in, and what goes wrong. Read them in pairs rather than as a list. Type V, McArdle disease, is a defect of muscle phosphorylase and gives exercise-induced cramps with myoglobin in the urine; type VI, Hers disease, is a defect of liver phosphorylase and gives an enlarged liver. **Same enzymatic activity, two tissues, two entirely different illnesses — the isozyme argument made by nature.** Type Ia, von Gierke disease, is a defect of glucose 6-phosphatase; type Ib is a defect of the ER transporter T1 that carries glucose 6-phosphate into the lumen, and it gives the same picture plus a high susceptibility to bacterial infection. The same failure at the enzyme and at its transporter, which is what proves the ER compartmentation is real and not a drawing convention. Four more map onto this chain: type 0, glycogen synthase; type IIIa, Cori or Forbes disease, the debranching enzyme; type IV, Andersen disease, the branching enzyme; and type II, Pompe disease, a lysosomal glucosidase.",
      cn: "人类已知有十三种糖原贮积病，每一种都点出一个酶、它失灵的器官，以及后果。读的时候要成对读，而不是当清单背。 先看第一对：V 型，McArdle 病，缺陷在肌肉磷酸化酶，表现为运动诱发的痉挛、尿中出现肌红蛋白；VI 型，Hers 病，缺陷在肝磷酸化酶，表现为肝肿大。**同一种酶活性，两个组织，两种完全不同的病 —— 这是大自然亲手做出的同工酶论证。** 第二对：Ia 型，von Gierke 病，缺陷在 glucose 6-phosphatase；Ib 型缺陷在那个把葡萄糖-6-磷酸送进内质网腔的转运蛋白 T1，表现与 Ia 相同，另加对细菌感染高度易感。同一处失败，一次发生在酶上、一次发生在它的转运蛋白上 —— 这恰恰证明了内质网的区隔是真的，不是画图时的一种约定。还有四种落在这条链上：0 型，糖原合酶；IIIa 型（Cori 病／Forbes 病），脱支酶；IV 型（Andersen 病），分支酶；II 型（Pompe 病），溶酶体葡糖苷酶。",
      src: "A p.562, §15.2, Box 15-1"
    }
  ],
  terms: [
    { en: "phosphorolysis", cn: "磷酸解",
      def_en: "Cleaving the α-1,4 glycosidic bond at a nonreducing end with inorganic phosphate as the attacking species rather than water, so the residue leaves as glucose 1-phosphate. Some of the bond's energy is conserved in that phosphate ester, which is worth exactly one ATP per monomer — the hexokinase step is skipped — and the phosphorylated sugar cannot leave the cell.",
      def_cn: "在非还原端断开 α-1,4 糖苷键时，进攻的物种是无机磷酸而不是水，因而残基以葡萄糖-1-磷酸的形式离开。糖苷键的一部分能量被保存在这个磷酸酯里，正好值每个单体一个 ATP —— hexokinase 那一步被跳过了 —— 而且磷酸化的糖离不开细胞。" },
    { en: "nonreducing end", cn: "非还原端",
      def_en: "A chain terminus whose anomeric carbon is committed to a glycosidic bond. Both glycogen synthase and glycogen phosphorylase work only here, which is why branching — which multiplies these ends to about 2,000 per muscle granule — is what makes a granule fast rather than what makes it tidy.",
      def_cn: "异头碳已经参与糖苷键的那种链末端。糖原合酶和糖原磷酸化酶都只在这里干活 —— 这正是为什么分支（它把这种末端增加到每个肌肉颗粒约 2,000 个）带来的是速度，而不是整齐。" },
    { en: "pyridoxal phosphate at phosphorylase", cn: "磷酸化酶上的磷酸吡哆醛",
      def_en: "The active form of vitamin B6, covalently attached near glycogen phosphorylase's active site. Unusually, it does no Schiff-base chemistry on the substrate here: only its own phosphate group takes part, as a general acid catalyst helping inorganic phosphate attack the glycosidic bond.",
      def_cn: "维生素 B₆ 的活性形式，共价连在糖原磷酸化酶活性位点附近。不寻常之处在于：它在这里完全不对底物做席夫碱化学，参与反应的只有它自身的磷酸基团 —— 充当广义酸催化剂，帮助无机磷酸进攻糖苷键。" },
    { en: "debranching enzyme", cn: "脱支酶",
      def_en: "One bifunctional protein with two chemically different activities, not two enzymes. Its transferase activity moves a block of three residues from a branch to a nearby nonreducing end as an α-1,4 bond; its glucosidase activity hydrolyses the last α-1,6-linked glucose off as free glucose. A single genetic defect knocks out both.",
      def_cn: "一个带着两种化学性质不同活性的双功能蛋白，不是两个酶。它的转移酶活性把三个残基的一整块从分支搬到附近的非还原端、以 α-1,4 键接上；它的葡糖苷酶活性把最后那个 α-1,6 连接的葡萄糖水解下来，成为游离葡萄糖。一个单一的遗传缺陷会把两种活性一起打掉。" },
    { en: "phosphoglucomutase", cn: "磷酸葡萄糖变位酶",
      def_en: "Converts glucose 1-phosphate to glucose 6-phosphate through a transiently phosphorylated serine and a glucose 1,6-bisphosphate intermediate — the same pattern as phosphoglycerate mutase. A mutase moves a group from one position to another within one molecule, and mutases are a subclass of isomerases. The reaction is reversible and glycogen synthesis runs it the other way.",
      def_cn: "通过一个瞬时被磷酸化的丝氨酸和一个葡萄糖-1,6-二磷酸中间体，把葡萄糖-1-磷酸变成葡萄糖-6-磷酸 —— 与磷酸甘油酸变位酶是同一个套路。变位酶把一个基团在同一分子内部从一个位置搬到另一个位置，属于异构酶的一个亚类。这个反应可逆，糖原合成时它反着跑。" },
    { en: "sugar nucleotide, UDP-glucose", cn: "糖核苷酸与 UDP-葡萄糖",
      def_en: "A sugar whose anomeric carbon is activated by a nucleotide attached through a phosphate ester. Four properties earn it the job: its formation is irreversible because inorganic pyrophosphatase destroys the released PPi at -19.2 kJ/mol; the nucleotide gives the enzyme grip; the nucleotidyl group is an excellent leaving group; and it labels the sugar as belonging to the glycogen pool rather than the glycolytic one.",
      def_cn: "异头碳被一个通过磷酸酯连上来的核苷酸活化了的糖。它胜任这份工作有四条理由：它的形成不可逆，因为无机焦磷酸酶以 -19.2 kJ/mol 销毁放出的 PPi；核苷酸部分让酶有得抓；核苷酰基是极好的离去基团；而且它给这个糖打上标签，表明它属于糖原池而不是糖酵解池。" },
    { en: "glycogenin", cn: "糖原蛋白",
      def_en: "The protein that is both the primer a new glycogen chain is built on and the enzyme that builds it. Each subunit of the homodimer glucosylates Tyr194 of the other subunit, then extends that chain by seven more residues from UDP-glucose before glycogen synthase takes over; it stays buried in the granule, covalently attached at the reducing end, for the granule's whole life.",
      def_cn: "既是新糖原链赖以搭建的引物、又是搭建它的酶的那个蛋白。同源二聚体的每个亚基给「另一个」亚基的 Tyr194 加上葡萄糖，随后以 UDP-glucose 为供体把那条链再延长七个残基，之后糖原合酶才接手；它此后一直埋在颗粒里、以共价键连在还原端上，陪伴颗粒一生。" },
    { en: "glucose 6-phosphatase in the ER lumen", cn: "内质网腔里的葡萄糖-6-磷酸酶",
      def_en: "An integral endoplasmic reticulum protein whose active site faces the lumen, so glucose 6-phosphate must be carried in by transporter T1 and the products carried back out by T2 and T3. The point of that architecture is to keep the phosphatase physically away from cytosolic glycolysis, which it would otherwise abort. Muscle and adipose tissue lack it and contribute no glucose to the blood.",
      def_cn: "内质网的一个整合膜蛋白，活性位点朝向腔内，所以葡萄糖-6-磷酸必须由转运蛋白 T1 送进去、产物再由 T2 和 T3 送出来。这套结构的用意是把这个磷酸酶与胞质里的糖酵解在物理上隔开，否则它会把糖酵解打断。肌肉和脂肪组织没有它，因此完全不向血液供糖。" },
    { en: "glycogen storage disease", cn: "糖原贮积病",
      def_en: "Thirteen human disorders, each removing one enzyme of this pathway. Read in pairs: muscle phosphorylase (McArdle) against liver phosphorylase (Hers) shows what isozymes are for; glucose 6-phosphatase (von Gierke, type Ia) against its ER transporter (type Ib) shows that the ER compartmentation is physically real.",
      def_cn: "十三种人类疾病，每一种去掉这条通路上的一个酶。要成对地读：肌肉磷酸化酶（McArdle）对上肝磷酸化酶（Hers），显示了同工酶的意义；葡萄糖-6-磷酸酶（von Gierke，Ia 型）对上它的内质网转运蛋白（Ib 型），显示了内质网的区隔在物理上是真实的。" }
  ]
};

/* ------------------------------------------------------------------ L-15-3-1 */
window.BIOLITE_SPINE["L-15-3-1"] = {
  assumed: ["glycolysis", "gluconeogenesis", "glycogen", "liver", "kidney", "muscle",
            "brain", "hepatocyte", "myocyte", "insulin", "glucagon", "epinephrine",
            "hormone", "receptor", "enzyme", "substrate", "protein", "gene",
            "glucose", "ATP", "ADP", "AMP", "cyclic AMP", "x-ray crystallography",
            "plasma membrane", "vesicle", "nucleus", "cytosol", "muscle contraction",
            "pyruvate kinase", "hexokinase", "glucokinase", "myoglobin"],
  nodeTitle_en: "Switching glycogen breakdown against glycogen synthesis",
  nodeTitle_cn: "把糖原分解与糖原合成对着开关",
  title_en: "Two tiers on the breakdown arm and one on the synthesis arm — why the cascade is lopsided, and what one phosphatase does to undo all of it",
  title_cn: "分解那一臂有两级，合成那一臂只有一级 —— 级联为什么不对称，以及一个磷酸酶如何把这一切全部撤销",
  steps: [
    {
      en: "Glycogen phosphorylase earns its place as the textbook case of enzyme regulation on four counts at once: it was one of the first known allosterically regulated enzymes; the first enzyme ever shown to be controlled by reversible phosphorylation; one of the first allosteric enzymes whose active and inactive three-dimensional structures were both solved by x-ray crystallography; and a clean illustration of isozymes doing tissue-specific jobs. The history carries the facts. **In the late 1930s Carl and Gerty Cori found that the muscle enzyme exists in two interconvertible forms: glycogen phosphorylase a, which is catalytically active, and glycogen phosphorylase b, which is much less so.** Earl Sutherland then showed that b predominates in resting muscle, and that when the muscle is working hard, epinephrine triggers phosphorylation of b into the more active a; in liver, glucagon does the same. One naming trap: this enzyme is often called simply phosphorylase, because it was the first phosphorylase discovered and the short name stuck — but phosphorylase on its own now names a whole class of enzymes, so say glycogen phosphorylase.",
      cn: "glycogen phosphorylase（糖原磷酸化酶）之所以配得上「酶调控的教科书范例」，同时占了四条：它是最早被认识的别构调节酶之一；它是历史上第一个被证明由可逆磷酸化控制的酶；它是最早由 X 射线晶体学同时解出活性态与非活性态三维结构的别构酶之一；而且它干净利落地展示了同工酶如何各司其职、各守一个组织。历史本身就带着这些事实。**1930 年代末，Carl 与 Gerty Cori 发现肌肉里的这个酶存在两种可以互相转换的形式：glycogen phosphorylase a，有催化活性；glycogen phosphorylase b，活性低得多。**随后 Earl Sutherland 证明：静息肌肉里以 b 型为主；而在肌肉奋力工作时，肾上腺素触发 b 的磷酸化，把它变成活性更高的 a；在肝里，胰高血糖素做同一件事。有一个命名陷阱：这个酶常常被简称为「phosphorylase」，因为它是最早被发现的磷酸化酶，简称就此沿用下来 —— 但今天单说 phosphorylase 指的是一整类酶，所以回答时要说 glycogen phosphorylase。",
      src: "A p.565–566, §15.3"
    },
    {
      link_en: "now the cascade, and the commonest error in it is dropping a whole tier",
      link_cn: "现在讲级联 —— 关于它最常见的错误，是把一整级漏掉",
      en: "Epinephrine in muscle, or glucagon in liver, raises cyclic AMP, and cyclic AMP activates protein kinase A — the enzyme through which every one of these hormonal effects is delivered. From there the two arms are different lengths. On the synthesis arm, protein kinase A phosphorylates glycogen synthase directly and switches it off — one step. On the breakdown arm, protein kinase A's target is phosphorylase kinase, and phosphorylase kinase is what then phosphorylates glycogen phosphorylase b into the active a form — two steps. **Say it in that order and the standard error becomes impossible: protein kinase A never touches glycogen phosphorylase itself.** The book states the fork twice, in two different places, with both arms side by side: phosphorylase kinase gets phosphorylated and activated, leading to activation of glycogen phosphorylase; glycogen synthase gets phosphorylated and inactivated, blocking glycogen synthesis.",
      cn: "肌肉里的肾上腺素、或肝里的胰高血糖素，抬高 cyclic AMP，而 cyclic AMP 激活蛋白激酶 A（protein kinase A，PKA）。从这里开始，两条臂的长度就不一样了。在合成那一臂上，PKA 直接磷酸化 glycogen synthase，把它关掉 —— 一步。在分解那一臂上，PKA 的靶点是 phosphorylase kinase（磷酸化酶激酶），再由 phosphorylase kinase 去把 glycogen phosphorylase b 磷酸化成有活性的 a 型 —— 两步。**按这个顺序说出来，那个标准错误就犯不了了：PKA 从来不碰 glycogen phosphorylase 本身。**教材在两个不同的地方各说了一遍这个分叉，而且把两条臂并排放着：磷酸化并激活 phosphorylase kinase，从而激活 glycogen phosphorylase；磷酸化并灭活 glycogen synthase，从而阻断糖原合成。",
      src: "A p.566, 569, §15.3"
    },
    {
      link_en: "and there is a reason the two arms are unequal, which makes the structure memorable rather than merely correct",
      link_cn: "两条臂不等长是有理由的 —— 知道理由，这个结构才从「记对了」变成「忘不掉」",
      en: "The two enzymes have different numbers of kinases acting on them. Glycogen phosphorylase has exactly one — phosphorylase kinase — which is why an extra tier is needed to reach it at all. Glycogen synthase has several acting on it directly: glycogen synthase kinase 3, which is itself primed by casein kinase II; AMP-activated protein kinase; and protein kinase A. So the lopsidedness is not an accident of how the diagram was drawn. It reflects how many separate inputs each enzyme has to integrate: **one enzyme with one input needs a relay; one enzyme with several inputs is wired to all of them directly.**",
      cn: "这两个酶身上作用着的激酶数目不同。glycogen phosphorylase 只有一个 —— phosphorylase kinase —— 这正是为什么必须多一级才够得着它。glycogen synthase 则有好几个直接作用在它身上：glycogen synthase kinase 3（GSK3，它自己还要先被 casein kinase II 引发）、AMP 激活的蛋白激酶（AMPK），以及 PKA 本身。所以这份不对称并不是画图时的偶然，它反映的是每个酶各自要整合多少个独立的输入：**只有一个输入的酶需要一个中继站；有好几个输入的酶则被直接接到每一个输入上。**",
      src: "A p.566–568, §15.3"
    },
    {
      link_en: "and what the extra tier buys is amplification, with actual numbers",
      link_cn: "而多出来的那一级买到的是放大 —— 而且有真实数字",
      en: "A cascade is a catalyst activating a catalyst activating a catalyst, and each enzymatic step multiplies. Counting molecules stage by stage: **x molecules of hormone give 20x cyclic AMP, 10x active protein kinase A, 100x active phosphorylase b kinase, 1,000x active glycogen phosphorylase a, and 10,000x glucose 1-phosphate — a ten-thousand-fold amplification from hormone to product**, and these are described as certainly low estimates. Two things are worth noticing rather than just memorising. The numbers are not simply multiplied step by step — cyclic AMP is 20x while active protein kinase A is only 10x, because several cyclic AMP molecules are needed to activate one kinase. What multiplies is catalysis at each enzymatic step. And the two largest jumps in the whole chain, 10x to 100x and 100x to 1,000x, are exactly the two kinase steps that the two-tier structure creates. Delete the phosphorylase kinase tier and a factor of ten disappears from the response.",
      cn: "所谓级联，就是一个催化剂激活一个催化剂、再激活一个催化剂，每一个酶促步骤都在做乘法。一级一级数分子数：**x 个激素分子 → 20x 个 cyclic AMP → 10x 个有活性的 PKA → 100x 个有活性的 phosphorylase b kinase → 1,000x 个有活性的 glycogen phosphorylase a → 10,000x 个葡萄糖-1-磷酸 —— 从激素到产物放大一万倍**；而且书上明说这些多半还是偏低的估计。有两点值得注意，而不只是背下来。这些数字并不是简单地逐级相乘 —— cyclic AMP 是 20x，而有活性的 PKA 只有 10x，因为激活一个激酶需要好几个 cyclic AMP 分子。真正在做乘法的，是每个酶促步骤上的催化。还有：整条链上最大的两次跃升，10x → 100x 和 100x → 1,000x，恰恰就是「两级结构」造出来的那两个激酶步骤。把 phosphorylase kinase 这一级删掉，整个响应就少掉一个数量级。",
      src: "A p.566, §15.3, Fig. 15-12"
    },
    {
      link_en: "and what that second-tier kinase actually does, in one sentence",
      link_cn: "而第二级那个激酶具体做了什么，一句话讲完",
      en: "Phosphorylase b kinase transfers a phosphoryl group to Ser14 on each of the two identical subunits of phosphorylase b — two phosphates per enzyme molecule, costing 2 ATP — and **that triggers a conformational change from the T state, which is phosphorylase b, to the R state, which is phosphorylase a.** Three things are packed into that. The residue and the count: Ser14, one on each subunit. The mechanism class: this is the same T-to-R allosteric transition met in the oxygen-binding and enzyme chapters, driven here by covalent modification rather than by a ligand binding — which is exactly why this enzyme sits in both stories at once. And the reverse: phosphorylase a goes back to the less active b when those phosphoryl groups are removed by phosphoprotein phosphatase 1 (PP1), which in muscle happens as the muscle returns to rest.",
      cn: "phosphorylase b kinase 把一个磷酰基转移到 phosphorylase b 两个相同亚基各自的 Ser14 上 —— 每个酶分子两个磷酸，花掉 2 个 ATP —— **由此触发一次构象变化：从 T 态（也就是 phosphorylase b）转到 R 态（也就是 phosphorylase a）。**这句话里塞了三样东西。残基与数目：Ser14，每个亚基上一个。机制归属：这与氧结合蛋白和酶那两章里遇到的 T→R 别构转变是同一回事，只是这里驱动它的是共价修饰，而不是配体结合 —— 这正是这个酶同时站在两个故事里的原因。以及逆过程：当那些磷酰基被 phosphoprotein phosphatase 1（PP1，磷酸蛋白磷酸酶 1）摘掉时，phosphorylase a 就回到活性较低的 b 型；在肌肉里，这发生在肌肉重新进入静息状态的时候。",
      src: "A p.566–567, §15.3, Fig. 15-11"
    },
    {
      link_en: "running alongside all of that is a second, allosteric layer — and in muscle it has two sensors",
      link_cn: "与上面这一切并行跑着的，是第二层：别构层 —— 在肌肉里它有两个感受器",
      en: "The first muscle sensor is calcium. Ca2+, the very signal that tells a muscle to contract, binds to and activates phosphorylase b kinase — and it binds through the kinase's δ subunit, which is calmodulin, the general-purpose calcium-binding protein. Read what that means: **the molecule that orders contraction and the molecule that orders fuel mobilisation are the same molecule, acting on the same protein.** The physiological consequence is spelled out later: epinephrine is not released under low-stress conditions, but with each neuronal stimulation of contraction, cytosolic Ca2+ rises briefly and activates phosphorylase kinase through that calmodulin subunit. So ordinary unhurried muscle work mobilises glycogen with no hormone involved at all.",
      cn: "肌肉的第一个感受器是钙。Ca²⁺ —— 正是那个命令肌肉收缩的信号 —— 结合并激活 phosphorylase b kinase；而它结合的位置是这个激酶的 δ 亚基，那个亚基就是 calmodulin（钙调蛋白），一种通用的钙结合蛋白。读一下这意味着什么：**下达「收缩」命令的分子，和下达「动员燃料」命令的分子，是同一个分子，作用在同一个蛋白上。**生理后果在后文被点明：低应激状态下并不会释放肾上腺素，但每一次神经元刺激引发收缩时，胞质 Ca²⁺ 都会短暂上升，并通过那个 calmodulin 亚基激活 phosphorylase kinase。所以平常不紧不慢的肌肉工作，根本不需要任何激素参与，就已经在动员糖原了。",
      src: "A p.566–567, 569, §15.3"
    },
    {
      link_en: "the second muscle sensor reads the energy charge, and it reads it as a ratio",
      link_cn: "肌肉的第二个感受器读的是能荷 —— 而且它读的是一个比值",
      en: "AMP piles up in vigorously contracting muscle as ATP is spent, and AMP binds and activates glycogen phosphorylase itself, speeding the release of glucose 1-phosphate. When ATP is adequate, ATP occupies the same allosteric site that AMP would bind to, and the enzyme is turned down. Note the economy: **AMP and ATP compete for one site, so what the enzyme actually measures is their ratio, not either concentration on its own.** And note carefully where each of the two muscle sensors enters the cascade, because they are not at the same place: calcium acts on phosphorylase kinase, one tier up; AMP acts on glycogen phosphorylase itself, at the bottom.",
      cn: "AMP 在剧烈收缩的肌肉里随着 ATP 被花掉而堆积起来，它直接结合并激活 glycogen phosphorylase 本身，加快葡萄糖-1-磷酸的释放。而当 ATP 充足时，ATP 占住 AMP 本来要结合的那个别构位点，酶就被调低。注意这份经济性：**AMP 和 ATP 争夺同一个位点，所以酶实际测量的是它们的比值，而不是其中任何一个的绝对浓度。**还要留意这两个肌肉感受器各自切入级联的位置，因为它们并不在同一层：钙作用在 phosphorylase kinase 上，高一级；AMP 作用在 glycogen phosphorylase 本身上，在最底下。",
      src: "A p.567, §15.3, Fig. 15-12"
    },
    {
      link_en: "the liver uses the same enzyme as a completely different instrument",
      link_cn: "肝把同一个酶当成一件完全不同的乐器来用",
      en: "When blood glucose is too low, glucagon runs the cascade and phosphorylase a starts pushing glucose into the blood. When blood glucose comes back to normal, glucose enters the hepatocyte and binds an inhibitory allosteric site on phosphorylase a. **That binding produces a conformational change which exposes the enzyme's phosphorylated serine residues to PP1, which dephosphorylates them and shuts the enzyme down. So liver glycogen phosphorylase acts as its own glucose sensor.** Two features are worth naming. This is product inhibition with a twist: glucose does not block the active site, it makes the enzyme a better substrate for the phosphatase — so the off-switch is covalent and lasting rather than momentary. And it is a purely local circuit: the liver cell reads the blood directly through that site and needs no hormone in order to stop, which is what makes the liver a homeostat rather than an obedient effector. Insulin also acts indirectly on the same phosphatase, so the hormonal route and the direct route converge on PP1.",
      cn: "血糖过低时，胰高血糖素跑完整条级联，phosphorylase a 开始把葡萄糖推进血液。而当血糖回到正常，葡萄糖进入肝细胞，结合到 phosphorylase a 上一个抑制性的别构位点。**这次结合带来一次构象变化，把这个酶上被磷酸化的丝氨酸残基暴露给 PP1；PP1 把它们脱磷酸，酶就关停了。所以肝的 glycogen phosphorylase 是它自己的葡萄糖感受器。**有两点值得点名。这是一种带转折的产物抑制：葡萄糖并不去堵活性位点，它做的是「让这个酶变成磷酸酶更好的底物」—— 于是这个「关」是共价的、持久的，而不是一瞬间的。以及：这是一条纯粹的局部回路 —— 肝细胞通过那个位点直接读血液，不需要任何激素来叫停。这正是肝之所以是一个恒稳器、而不是一个听命令的执行器的原因。胰岛素也间接作用在同一个磷酸酶上，所以激素那条路和直接那条路，最后汇合在 PP1 身上。",
      src: "A p.567, §15.3, Fig. 15-13"
    },
    {
      link_en: "now the synthesis arm, where the sense of the phosphorylation is reversed",
      link_cn: "现在换到合成那一臂 —— 那里磷酸化的正负号是反的",
      en: "Glycogen synthase also exists in a phosphorylated and an unphosphorylated form, but the active one is the unphosphorylated form, glycogen synthase a. Glycogen synthase kinase 3 puts phosphoryl groups on three serine residues near the carboxyl terminus, converting it to glycogen synthase b, which is inactive unless its allosteric activator glucose 6-phosphate is present. Then the mechanism that makes this kinase unusual: **its action is hierarchical — it cannot touch glycogen synthase until another kinase, casein kinase II, has phosphorylated a nearby residue first, an event called priming.** The geometry explains why. The kinase grips its substrate with three positively charged residues that clamp onto a phosphoserine four residues downstream, which lines its active site up over the serine at position zero; phosphorylating that one creates a new priming site, so the enzyme walks back down the chain to position minus 4, and then minus 8. It is a processive walker that needs somebody else to lay the first stone. Two other kinases act here directly: AMP-activated protein kinase, which sits on the glycogen granule through its own carbohydrate-binding domain and shuts synthesis down when AMP is high and ATP low; and protein kinase A, the direct arm of the hormonal cascade.",
      cn: "glycogen synthase 同样有磷酸化与非磷酸化两种形式，但有活性的那一个是「非磷酸化」的那一个 —— glycogen synthase a。接下来是那个把它关掉的酶：glycogen synthase kinase 3（GSK3）把磷酰基装到靠近羧基末端的三个丝氨酸残基上，把它变成 glycogen synthase b，而 b 型除非有它的别构激活剂葡萄糖-6-磷酸在场，否则没有活性。接着是让这个激酶显得与众不同的那个机制：**它的作用是有层级的（hierarchical）—— 在另一个激酶 casein kinase II 先把附近某个残基磷酸化之前，GSK3 根本碰不了 glycogen synthase；这个先行事件叫「引发（priming）」。**几何结构解释了原因：这个激酶用三个带正电的残基夹住下游第 4 位上的一个磷酸丝氨酸，从而把自己的活性位点对准第 0 位上的丝氨酸；而把第 0 位磷酸化，又造出了一个新的引发位点，于是这个酶沿着链往回走到第 −4 位，再走到第 −8 位。它是一个连续行走的酶，却需要别人替它放下第一块砖。还有两个激酶直接作用在这里：AMPK，它通过自身的糖结合结构域坐在糖原颗粒上，在 AMP 高、ATP 低时把合成关掉；以及 PKA，激素级联的那条直达臂。",
      src: "A p.567–568, §15.3, Fig. 15-15"
    },
    {
      link_en: "and insulin does not add another kinase to that chain — it works on the off switches",
      link_cn: "而胰岛素并没有往这条链上再加一个激酶 —— 它作用在那些「关」的开关上",
      en: "Insulin favours the active form of glycogen synthase by doing two things at once: blocking glycogen synthase kinase 3, and activating PP1. The blocking half is one of the neatest inhibition tricks in the subject. Insulin activates a protein kinase called PKB, and PKB phosphorylates a serine near glycogen synthase kinase 3's own amino terminus. That converts that stretch of the protein into a pseudosubstrate — a fake substrate — which folds back into the very site where a real substrate's priming phosphoserine would bind. The kinase is now holding its own tail and cannot grip anything else. In one line: **an enzyme that requires a primed substrate is switched off by being handed a fake one, made out of itself.** Two consequences. Insulin tips both sides of the balance at once — it removes a kinase and adds a phosphatase — which is why its effect is large. And the targets are layered consistently: PP1 removes exactly the phosphates that glycogen synthase kinase 3 installed, so blocking the kinase and activating the phosphatase push the same equilibrium the same way.",
      cn: "胰岛素通过同时做两件事，把天平推向有活性的 glycogen synthase：一是封住 GSK3，二是激活 PP1。「封住」那一半，是整门学科里最漂亮的抑制花招之一。胰岛素激活一个叫 PKB 的蛋白激酶，而 PKB 去磷酸化 GSK3 自己氨基末端附近的一个丝氨酸。这一下把那段序列变成了一个 pseudosubstrate（假底物）—— 它折回来，正好塞进「真底物的引发磷酸丝氨酸本该结合」的那个位点。这个激酶现在攥着自己的尾巴，再也抓不住别的东西。一句话说完：**一个必须要有「被引发过的底物」才能干活的酶，被塞了一个用它自己做成的假底物，就此关停。**两个后果。胰岛素同时压两边的秤盘 —— 拿掉一个激酶，加上一个磷酸酶 —— 这正是它效果显著的原因。而且这些靶点是层层对齐的：PP1 摘掉的，恰恰就是 GSK3 装上去的那些磷酸；所以「封住激酶」和「激活磷酸酶」把同一个平衡推向同一边。",
      src: "A p.568, §15.3, Fig. 15-15b"
    },
    {
      link_en: "one phosphatase undoes everything the cascade did — and how it is controlled is what stops the system oscillating",
      link_cn: "一个磷酸酶把级联做过的一切全部撤销 —— 而它如何被控制，正是这套系统不会来回振荡的原因",
      recall_en: "the same PP1 that reverses phosphorylase a, two steps up",
      recall_cn: "就是上面把 phosphorylase a 逆转回去的那个 PP1",
      en: "PP1 can strip phosphoryl groups from all three of the enzymes the cascade phosphorylated: phosphorylase kinase, glycogen phosphorylase, and glycogen synthase. Two details make it work. Delivery: the catalytic subunit of PP1 is never free in the cytosol. It is held on its targets by a tissue-specific regulatory subunit from a family of glycogen-targeting proteins that bind both the glycogen and each of the three enzymes — GM in muscle, GL in liver — so the phosphatase is scaffolded onto the granule beside its substrates, and specificity does not have to be built into its active site. Control, and there are four handles: PP1 is inactivated when protein kinase A phosphorylates it; it is allosterically activated by glucose 6-phosphate, which also makes glycogen synthase b a better substrate for it, so glucose 6-phosphate is the synthase side's own sensor; protein kinase A phosphorylates GM at one site to make PP1 fall off the granule altogether, while insulin-driven phosphorylation at a different site on GM activates it; and protein kinase A phosphorylates a separate small protein, inhibitor 1, which once phosphorylated inhibits PP1. **The fourth handle is the elegant one: active glycogen phosphorylase directly inhibits PP1. So while breakdown is running, the very enzyme doing the breaking holds off the switch that would start synthesis** — a futile-cycle interlock built out of the pathway itself.",
      cn: "PP1 能把级联磷酸化过的全部三个酶身上的磷酰基都摘掉：phosphorylase kinase、glycogen phosphorylase 和 glycogen synthase。有两个细节让它真正管用。递送：PP1 的催化亚基从来不游离在胞质里。它被一个组织特异的调节亚基摁在靶点上，那个亚基来自一族叫 glycogen-targeting protein（糖原靶向蛋白）的蛋白，它们同时结合糖原和那三个酶 —— 肌肉里是 GM，肝里是 GL —— 于是磷酸酶被支架固定在颗粒上、紧挨着自己的底物，特异性因此不必被造进活性位点里。控制，一共四个把手：PKA 把它磷酸化，它就失活；葡萄糖-6-磷酸别构地激活它，而同一个葡萄糖-6-磷酸还让 glycogen synthase b 变成 PP1 更好的底物 —— 所以葡萄糖-6-磷酸是合成那一侧自己的感受器；PKA 在 GM 的一个位点上磷酸化，会让 PP1 整个从糖原颗粒上掉下来，而胰岛素驱动的、在 GM 另一个位点上的磷酸化则激活它；PKA 还磷酸化另一个小蛋白 inhibitor 1（抑制蛋白 1），后者一旦被磷酸化就去抑制 PP1。**第四个把手最精妙：有活性的 glycogen phosphorylase 直接抑制 PP1。也就是说，分解正在进行时，那个正在拆糖原的酶亲自摁住了「启动合成」的开关** —— 这是一个用通路自身零件搭出来的无效循环联锁装置。",
      src: "A p.568–569, §15.3, Fig. 15-16"
    },
    {
      link_en: "put it all together for a well-fed liver cell",
      link_cn: "把这一切放到一个吃饱的肝细胞上",
      en: "After a carbohydrate-rich meal, high blood glucose triggers insulin release, and insulin has two immediate effects: it inactivates glycogen synthase kinase 3, and it activates a protein phosphatase, probably PP1. Between them, glycogen synthase is fully switched on. **The same PP1 then dephosphorylates and inactivates both glycogen phosphorylase a and phosphorylase kinase, so breakdown stops at the same moment synthesis starts.** Meanwhile glucose pours in through GLUT2, the high-capacity transporter that is always present in the hepatocyte membrane, and the rise in intracellular glucose knocks hexokinase IV loose from its nuclear regulatory protein, so the enzyme walks out into the cytosol and starts phosphorylating glucose — feeding glycolysis and supplying the precursor for glycogen. The liver fills up to about 10 percent of its total weight.",
      cn: "富含碳水的一餐之后，高血糖触发胰岛素释放，而胰岛素有两个立即生效的作用：灭活 GSK3，以及激活一个蛋白磷酸酶（多半就是 PP1）。两者合力，把 glycogen synthase 完全打开。**同一个 PP1 接着给 glycogen phosphorylase a 和 phosphorylase kinase 脱磷酸并使其失活，于是分解停止的时刻，正是合成启动的时刻。**与此同时，葡萄糖经 GLUT2 大量涌入 —— 那是肝细胞膜上一直都在的高容量转运蛋白 —— 而细胞内葡萄糖的升高把 hexokinase IV 从它的核内调节蛋白上撞下来，于是这个酶走进胞质、开始给葡萄糖加磷酸：既喂给糖酵解，也为糖原提供前体。肝会一直装到约占它自身总重的 10%。",
      src: "A p.569, §15.3",
      see: [{ id: "L-14-5-1", en: "hexokinase IV and its nuclear regulatory protein", cn: "hexokinase IV 与它的核内调节蛋白" }]
    },
    {
      link_en: "and the same liver cell during a fast, where one kinase does four things",
      link_cn: "同一个肝细胞在禁食时 —— 一个激酶做四件事",
      en: "Blood glucose drops, glucagon is released, and protein kinase A mediates every one of glucagon's effects. Count them off. One: it phosphorylates phosphorylase kinase, activating it, which activates glycogen phosphorylase. Two: it phosphorylates glycogen synthase, inactivating it. Three: it phosphorylates the bifunctional PFK-2/FBPase-2 protein, dropping fructose 2,6-bisphosphate, which shuts down PFK-1 and activates FBPase-1. Four: it phosphorylates and inactivates pyruvate kinase. Read the four together and the strategy is obvious: **the liver is making glucose 6-phosphate by two routes at once — glycogen breakdown and gluconeogenesis — while refusing to spend any of it, so that as much as possible can be exported.** And the export step is the one that limits who can do this: releasing free glucose into the blood is possible only in liver and kidney, because other tissues have no glucose 6-phosphatase.",
      cn: "血糖下降，胰高血糖素被释放，而胰高血糖素的每一项作用都由 PKA 来执行。数一数，一共四件。第一，它磷酸化并激活 phosphorylase kinase，从而激活 glycogen phosphorylase。第二，它磷酸化 glycogen synthase，使其失活。第三，它磷酸化那个双功能的 PFK-2/FBPase-2 蛋白，把果糖-2,6-二磷酸压下去，于是 PFK-1 被关掉、FBPase-1 被打开。第四，它磷酸化并灭活 pyruvate kinase。把这四件放在一起读，策略一目了然：**肝正在同时用两条路造葡萄糖-6-磷酸 —— 糖原分解和糖异生 —— 同时拒绝花掉其中任何一点，好让尽可能多的量被输出去。**而「输出」这一步决定了谁才有资格这么干：把游离葡萄糖释放进血液，只有肝和肾做得到，因为其他组织没有 glucose 6-phosphatase。",
      src: "A p.569, §15.3"
    },
    {
      link_en: "and finally the contrast that all of this has been building towards",
      link_cn: "最后，是上面这一切一直在铺垫的那个对照",
      en: "Muscle differs from liver in three physiological ways: it uses its stored glycogen only for its own needs; its demand for ATP swings enormously between rest and vigorous contraction; and it has no machinery for gluconeogenesis. Four molecular consequences follow, and each answers a different question. One: myocytes have no glucagon receptors, which hepatocytes do — so glucagon is the liver's hormone and epinephrine is the muscle's, and the question of which hormone acts where is settled by receptor distribution rather than by any difference in enzymes. Two: the muscle isozyme of pyruvate kinase is not phosphorylated by protein kinase A, so high cyclic AMP does not shut muscle glycolysis down; it actually speeds it up, probably by activating glycogen phosphorylase. That is the sharpest single contrast in the chapter — **the same second messenger accelerates glycolysis in muscle and slows it in liver, because the two tissues have opposite jobs.** Three: a myocyte keeps a reserve of GLUT4 in intracellular vesicles and insulin moves them to the plasma membrane, whereas the hepatocyte's GLUT2 is always there — so insulin makes muscle take glucose up out of the blood, while it makes liver store the glucose that was already entering freely. Four: only liver and kidney have glucose 6-phosphatase. The tissue split shows up clinically too: type V McArdle disease is the muscle phosphorylase, giving exercise cramps and myoglobin in the urine, and type VI Hers disease is the liver one, giving an enlarged liver — because the two phosphorylases are isozymes, encoded by different genes and differing in how they are regulated.",
      cn: "肌肉与肝在三个生理层面上不同：肌肉储存的糖原只供自己使用；它对 ATP 的需求在静息与剧烈收缩之间摆动极大；它没有搞糖异生的那套机器。由此推出四个分子层面的后果，每一个都回答一个不同的问题。第一：肌细胞没有胰高血糖素受体，而肝细胞有 —— 所以胰高血糖素是肝的激素、肾上腺素是肌肉的激素；「哪个激素在哪里起作用」这个问题，是由受体分布决定的，而不是由酶的差别决定的。第二：pyruvate kinase 的肌型同工酶不被 PKA 磷酸化，所以 cyclic AMP 升高并不会关掉肌肉的糖酵解 —— 它反而让糖酵解加快，多半是通过激活 glycogen phosphorylase 实现的。这是整章里最锐利的一处对照：**同一个第二信使，在肌肉里加速糖酵解，在肝里减慢糖酵解，因为这两个组织的职责相反。**第三：肌细胞在胞内囊泡里存着一批 GLUT4，胰岛素把它们调到质膜上；而肝细胞的 GLUT2 一直都在 —— 所以胰岛素让肌肉「从血里把葡萄糖拿走」，让肝「把本来就在自由流入的葡萄糖存起来」。第四：只有肝和肾有 glucose 6-phosphatase。这个组织分野在临床上也看得见：V 型 McArdle 病坏的是肌肉磷酸化酶，表现为运动性痉挛和尿中肌红蛋白；VI 型 Hers 病坏的是肝的那一个，表现为肝肿大 —— 因为这两个磷酸化酶是同工酶，由不同的基因编码，调控性质也不同。",
      src: "A p.566, 569, §15.3, Box 15-1",
      see: [{ id: "L-15-2-1", en: "the glycogen storage diseases in full", cn: "糖原贮积病的完整清单" }]
    }
  ],
  terms: [
    { en: "phosphorylase a / phosphorylase b", cn: "磷酸化酶 a／磷酸化酶 b",
      def_en: "The two interconvertible forms of glycogen phosphorylase, found by the Coris. The b form predominates in resting muscle and is the T state; phosphorylase kinase puts a phosphoryl group on Ser14 of each of its two identical subunits, which flips it to the R state and gives the catalytically active a form. PP1 removes those phosphates again.",
      def_cn: "Cori 夫妇发现的糖原磷酸化酶的两种可互相转换的形式。b 型在静息肌肉里占主导，处于 T 态；phosphorylase kinase 在它两个相同亚基各自的 Ser14 上装一个磷酰基，把它翻到 R 态，得到有催化活性的 a 型。PP1 再把这些磷酸摘掉。" },
    { en: "phosphorylase kinase", cn: "磷酸化酶激酶",
      def_en: "The second tier of the breakdown cascade, and the only kinase that acts on glycogen phosphorylase — which is why the cascade needs an extra step to reach it. Protein kinase A phosphorylates this enzyme, not phosphorylase itself. Its δ subunit is calmodulin, so Ca2+ activates it directly.",
      def_cn: "分解那条级联的第二级，也是唯一作用于糖原磷酸化酶的激酶 —— 这正是级联必须多一步才够得着它的原因。PKA 磷酸化的是这个酶，而不是磷酸化酶本身。它的 δ 亚基就是钙调蛋白，所以 Ca²⁺ 能直接激活它。" },
    { en: "calmodulin", cn: "钙调蛋白",
      def_en: "The general-purpose calcium-binding protein that serves as the δ subunit of phosphorylase kinase. Its presence there means the signal for contraction is also the signal for fuel mobilisation, so ordinary neuronal stimulation of a muscle breaks glycogen down with no hormone involved.",
      def_cn: "那个通用的钙结合蛋白，在这里充当磷酸化酶激酶的 δ 亚基。它坐在那里，意味着「收缩」的信号同时就是「动员燃料」的信号 —— 所以普通的神经元刺激就能让肌肉分解糖原，完全不需要激素。" },
    { en: "glycogen synthase kinase 3, priming", cn: "糖原合酶激酶 3 与引发",
      def_en: "The kinase that inactivates glycogen synthase by phosphorylating three serines near its carboxyl terminus. Its action is hierarchical: casein kinase II must phosphorylate a nearby residue first. The kinase grips a phosphoserine four residues downstream, phosphorylates the serine at position zero, thereby creating a new priming site, and walks down the chain.",
      def_cn: "通过磷酸化糖原合酶羧基末端附近的三个丝氨酸而使其失活的那个激酶。它的作用有层级：必须先由 casein kinase II 磷酸化附近某个残基。这个激酶抓住下游第 4 位的一个磷酸丝氨酸，磷酸化第 0 位的丝氨酸，由此造出一个新的引发位点，然后沿链往下走。" },
    { en: "pseudosubstrate", cn: "假底物",
      def_en: "A stretch of a protein that mimics its own substrate and folds into its own binding site, blocking it. Insulin uses one: PKB phosphorylates a serine near glycogen synthase kinase 3's amino terminus, turning that region into a fake primed substrate that jams the very site a real primed substrate would occupy.",
      def_cn: "蛋白自身的一段序列，模仿它自己的底物、折回来塞进自己的结合位点，把位点堵住。胰岛素用的就是这一招：PKB 磷酸化 GSK3 氨基末端附近的一个丝氨酸，把那段序列变成一个假的「已引发底物」，恰好卡住真底物本该占据的那个位点。" },
    { en: "phosphoprotein phosphatase 1, PP1", cn: "磷酸蛋白磷酸酶 1（PP1）",
      def_en: "The single phosphatase that reverses all three enzymes the cascade phosphorylates. Its catalytic subunit is never free in the cytosol — a glycogen-targeting protein holds it on the granule beside its substrates. It is turned down by protein kinase A and by phosphorylated inhibitor 1, turned up by glucose 6-phosphate, and inhibited directly by active glycogen phosphorylase.",
      def_cn: "把级联磷酸化过的三个酶统统逆转回去的那一个磷酸酶。它的催化亚基从不游离于胞质 —— 一个糖原靶向蛋白把它摁在颗粒上、紧挨着底物。PKA 和被磷酸化的抑制蛋白 1 把它调低，葡萄糖-6-磷酸把它调高，而有活性的糖原磷酸化酶直接抑制它。" },
    { en: "glycogen-targeting proteins GM and GL", cn: "糖原靶向蛋白 GM 与 GL",
      def_en: "Tissue-specific regulatory subunits — GM in muscle, GL in liver — that bind glycogen and all three target enzymes and hold PP1's catalytic subunit on the granule. Because the phosphatase is scaffolded next to its substrates, specificity does not have to be built into its active site; and phosphorylating GM at one site throws PP1 off the granule entirely.",
      def_cn: "组织特异的调节亚基 —— 肌肉里是 GM，肝里是 GL —— 它们同时结合糖原和那三个靶酶，把 PP1 的催化亚基摁在颗粒上。因为磷酸酶被支架固定在底物旁边，特异性就不必被造进活性位点；而在 GM 的某一个位点上磷酸化，会把 PP1 整个从颗粒上甩下来。" },
    { en: "glucose sensor and glucose 6-phosphate sensor", cn: "葡萄糖感受器与葡萄糖-6-磷酸感受器",
      def_en: "Two direct readouts that need no hormone. Glucose binds an inhibitory site on liver phosphorylase a and exposes its phosphoserines to PP1, so the enzyme senses blood glucose itself. Glucose 6-phosphate makes glycogen synthase b a better substrate for PP1 and activates PP1 allosterically, so the synthase senses the supply of its own precursor.",
      def_cn: "两个不需要激素的直接读数。葡萄糖结合在肝 phosphorylase a 的一个抑制性位点上，把它的磷酸丝氨酸暴露给 PP1 —— 于是这个酶自己就能感知血糖。葡萄糖-6-磷酸让 glycogen synthase b 变成 PP1 更好的底物，同时别构激活 PP1 —— 于是合酶自己就能感知它前体的供应量。" }
  ]
};
