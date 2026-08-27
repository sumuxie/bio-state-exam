/* Spines for §2.1, §2.3, §3.4, §4.5, §5.2 and §5.3 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.

   HOUSE STYLE — the seven rules, followed literally:

   1. STATE THE THING. No "not X, but Y", no rhetorical inversion.
   2. NO UNBOUND "THE". Never a definite reference to something not yet named.
   3. NAME THE ACTUAL OBJECTS. Sperm-whale myoglobin, a kitchen of frozen ice,
      a can of helium bled into a collision cell, β-hydroxybutyric acid.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN YOU USE, in the same breath as the first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK, with `recall_en` / `recall_cn`.

   And every structural claim carries its consequence — 「这些东西一般有啥用？」

   FIVE OF THESE SIX NODES ARE SHORT ORIENTATION NODES in the full app — §2.1, §2.3,
   §4.5, §5.2 and §5.3 carry a summary and a mustKnow and no numbered points at all.
   Where the source is thin the spine is short rather than padded: §4.5 gets 10 steps
   and §5.3 gets 12, because that is how much the cited pages actually say. §3.4 is the
   one fully developed node here and gets 14.

   `beyond: true` marks detail that is standard and examinable but is NOT on the pages
   the node was read from. Every use carries a `beyondNote` saying what is missing. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== L-2-1-1 */
window.BIOLITE_SPINE["L-2-1-1"] = {
  assumed: ["water", "molecule", "atom", "electron", "proton", "ion", "charge",
            "salt", "solvent", "solute", "protein", "nucleic acid", "enzyme",
            "cell", "organelle", "cell membrane", "temperature", "energy",
            "entropy, s", "equilibrium", "covalent bond", "polypeptide",
            "peptide bond", "conformation", "domain", "double helix",
            "carbon dioxide", "oxygen", "lipid"],
  nodeTitle_en: "Weak interactions in aqueous systems",
  nodeTitle_cn: "水溶液中的弱相互作用",
  title_en: "Four forces too weak to matter one at a time, and how water decides the shape of everything",
  title_cn: "四种单个弱到无所谓的作用力，以及水如何决定了一切东西的形状",
  steps: [
    {
      en: "Oxygen pulls shared electrons harder than hydrogen does — that unequal pull is **electronegativity**. In a water molecule the two O—H bonds are bent rather than in a straight line, so the pulls do not cancel: the oxygen end carries a partial negative charge and each hydrogen a partial positive one. **Water is therefore a highly polar molecule, and the consequence runs through the whole of biochemistry: a polar molecule sticks to other polar molecules, starting with more water.**",
      cn: "氧比氢更用力地拉扯共用电子 —— 这种拉力上的不对等叫 **electronegativity（电负性）**。水分子里两条 O—H 键是弯折的、不在一条直线上，所以两边的拉力不会互相抵消：**氧那一端带部分负电荷，两个氢各带部分正电荷。** **因此水是高度极性的分子** —— 而这个后果贯穿整个生物化学：**极性分子会黏住别的极性分子，首先就是黏住更多的水。**",
      src: "A p.43, §2.1"
    },
    {
      link_en: "and that sticking has a name and a size",
      link_cn: "这种「黏住」有名字，也有大小",
      en: "When a hydrogen atom is already covalently attached to an electronegative atom — oxygen or nitrogen — the second electronegative atom nearby can share it. That shared arrangement is **a hydrogen bond**: roughly 10% covalent and 90% electrostatic in character, and fleeting, made and broken again in a fraction of a second. **What it buys: hydrogen bonds between water molecules provide the cohesive forces that make water a liquid at room temperature, and they give water a higher melting point, boiling point and heat of vaporization than most other common solvents.** Every one of those properties is the reason a cell can exist at all.",
      cn: "当一个氢原子**已经**共价连在一个电负性原子（氧或氮）上时，附近**第二个**电负性原子可以来分享它。这种共享的安排就是 **hydrogen bond（氢键）**：性质上大约 **10% 共价、90% 静电**，而且转瞬即逝，不到一秒就形成又断开。**它换来了什么：水分子之间的氢键提供了内聚力，使水在室温下是液体，并且让水的熔点、沸点和汽化热都高于大多数常见溶剂。** 这里每一条性质，都是细胞得以存在的前提。",
      src: "A pp.43–44"
    },
    {
      link_en: "count them, and ice explains itself",
      link_cn: "把它们数一数，冰就自己解释了自己",
      en: "Each water molecule can make at most four such bonds — two through its own hydrogens, two through the lone pairs on its oxygen. **In ice every molecule makes all four and sits in one fixed open lattice; in liquid water at room temperature the average is 3.4, and each contact lasts only an instant. The open lattice holds the molecules further apart than the jostling liquid does, so ice is less dense than water and floats on it.**",
      cn: "每个水分子最多能形成**四个**这样的键 —— 两个通过它自己的氢，两个通过氧上的孤对电子。**在冰里每个分子四个全部做满，固定在一个疏松的晶格上；在室温液态水里平均只有 3.4 个，而且每一次接触只持续一瞬。疏松的晶格把分子撑得比拥挤流动的液体更开，所以冰的密度小于水、能浮在水面上。**",
      src: "A p.43"
    },
    {
      link_en: "the same bond, made with something other than water, is a solubility rule",
      link_cn: "同一种键，只要另一头换成别的分子，就变成一条溶解度规则",
      en: "Hydrogen bonds are not unique to water: they readily form between an electronegative atom and a hydrogen attached to a second electronegative atom, whatever molecules those atoms belong to. **So the rule you can apply to a structure you have never seen before is this — alcohols, aldehydes, ketones, and compounds containing N—H bonds all form hydrogen bonds with water and are therefore water soluble.** Look for O—H and N—H groups, and for oxygens and nitrogens with a free pair of electrons.",
      cn: "氢键并非水的专利：只要一个电负性原子，和另一个连在电负性原子上的氢，两者靠近就容易形成氢键，跟这些原子属于哪个分子无关。**所以，面对一个你从没见过的结构，可以直接用的规则是：醇、醛、酮，以及含 N—H 键的化合物，都能与水形成氢键，因而可溶于水。** 找 O—H 和 N—H 基团，找带孤对电子的氧和氮。",
      src: "A p.45, p.53"
    },
    {
      link_en: "salts dissolve for a different reason, and it is worth separating",
      link_cn: "盐溶解靠的是另一套理由，值得分开记",
      en: "Water is a polar solvent, and it readily dissolves most biomolecules, which are generally charged or polar compounds. **For an ionic solid such as sodium chloride two things happen at once: water molecules turn their partial charges toward each ion and surround it, screening the attraction that held the crystal together, and the ordered crystal becomes a scattered population of hydrated ions — which raises the entropy of the system.** Screening plus entropy is why a salt crystal disappears in water.",
      cn: "水是极性溶剂，它能溶解大多数生物分子 —— 后者一般是带电或极性的化合物。**对氯化钠这样的离子晶体，同时发生两件事：水分子把自己的部分电荷朝向每个离子、把它围起来，屏蔽掉原本维系晶体的吸引力；同时有序的晶体变成一群四散的水合离子 —— 这提高了体系的熵。** 屏蔽加上熵，就是盐晶体在水里消失的原因。",
      src: "A p.46"
    },
    {
      link_en: "one dissolved gas is worth naming now, because a later chapter runs on it",
      link_cn: "有一种溶解的气体现在就该点名，因为后面整整一套系统靠它运转",
      en: "**Carbon dioxide forms carbonic acid, H2CO3, in aqueous solution, and it is transported in blood as the bicarbonate ion, HCO3−.** A gas that turns into an acid on dissolving is a gas that can change the pH of whatever it dissolves in.",
      cn: "**二氧化碳在水溶液中形成碳酸 H2CO3，并以碳酸氢根离子 HCO3− 的形式在血液中被运输。** 一种溶解后会变成酸的气体，就是一种能改变所在溶液 pH 的气体。",
      src: "A p.47",
      see: [{ id: "L-2-3-1", en: "the blood buffer built out of exactly this equilibrium", cn: "正是用这个平衡搭出来的血液缓冲体系" }]
    },
    {
      link_en: "now the molecules water cannot do any of this with",
      link_cn: "现在轮到那些水对它们无计可施的分子",
      en: "**A nonpolar compound — a hydrocarbon chain, for instance — has no partial charges and no O—H or N—H groups, so it cannot hydrogen-bond with the solvent. Its presence forces an energetically unfavourable ordering of water molecules at its surface**, because the water in contact with it has to arrange itself into a cage-like shell to keep making bonds to other water. **The expensive item on the bill is that shell: ordered water has lower entropy than free water. Nonpolar groups are therefore pushed together, because clustering shrinks the total surface that has to be caged. That pressure is the hydrophobic effect, and it is a property of water.**",
      cn: "**非极性化合物 —— 比如一条烃链 —— 既没有部分电荷，也没有 O—H 或 N—H 基团，所以它无法与溶剂形成氢键。它的存在迫使水分子在其表面周围形成能量上不利的有序排列**：与它接触的那些水必须排成一个笼状的壳，才能继续和别的水成键。**账单上贵的那一项正是这层壳：有序的水比自由的水熵更低。于是非极性基团被挤到一起 —— 因为聚成一团能缩小需要被「笼住」的总表面积。这股挤压力就是 hydrophobic effect（疏水效应），而它是水的性质。**",
      src: "A pp.48–49"
    },
    {
      link_en: "put both halves in one molecule and it builds a structure by itself",
      link_cn: "把两半装进同一个分子，它就会自己搭出结构",
      recall_en: "the polar half does step 4's hydrogen bonding; the nonpolar half pays step 7's entropy bill",
      recall_cn: "极性的那一半做的是第 4 步的氢键，非极性的那一半付的是第 7 步的熵账",
      en: "**A compound carrying a polar or charged region at one end and a nonpolar region at the other is amphipathic** — a fatty acid, with a charged carboxylate head and a long hydrocarbon tail, is the standard case. Mix one with water and the two halves are pulled in opposite directions: the polar, hydrophilic region interacts favourably with water while the nonpolar region is squeezed out of contact with it. **The molecules therefore aggregate, hiding their tails from water and leaving their heads facing it — a micelle when the tails point into a ball, a lipid bilayer when two sheets of them lie tail to tail. That association is driven by the hydrophobic effect, and it is why a biological membrane is two layers thick rather than one.**",
      cn: "**一端带极性或电荷、另一端是非极性区域的化合物，叫 amphipathic（两亲性）** —— 脂肪酸就是标准例子：一个带电的羧基「头」，加一条长长的烃链「尾」。把它和水混在一起，两半被朝相反方向拉扯：极性的亲水区与水相互作用有利，非极性区则被挤出与水的接触。**于是这些分子聚集起来，把尾巴藏起来、让头朝着水 —— 尾巴一起指向球心就是 micelle（微团），两层分子尾对尾贴在一起就是 lipid bilayer（脂双层）。这种缔合由疏水效应驱动，也正是生物膜为什么是两层厚而不是一层的原因。**",
      src: "A p.48, Table 2-1",
      see: [{ id: "L-11-2-1", en: "what a bilayer does once it exists — fluidity, flip-flop, rafts", cn: "双层一旦存在会怎么活动 —— 流动性、翻转、脂筏" }]
    },
    {
      link_en: "the same force, applied to a chain that has both kinds of side chain along it",
      link_cn: "同一股力，作用在一条两种侧链都有的链上",
      recall_en: "a polypeptide is amphipathic the way step 8's fatty acid is, except that its two kinds of region are strung along one chain",
      recall_cn: "多肽和第 8 步的脂肪酸一样是两亲的，只不过它的两类区域是串在同一条链上",
      en: "**Weak noncovalent interactions in large numbers are what decide how a protein or a nucleic acid folds, and the instruction they add up to has two halves: maximise hydrogen bonding, and bury the nonpolar parts away from water.** That is where a protein's greasy core comes from — the hydrophobic side chains end up on the inside because water pushed them there, and the polar and charged ones end up on the surface where they can hydrogen-bond.",
      cn: "**大量的弱非共价相互作用，才是决定蛋白质或核酸如何折叠的东西，而它们加总起来给出的指令有两半：把氢键做到最多，把非极性部分埋起来、远离水。** 蛋白质那个油腻的内核就是这么来的 —— 疏水侧链之所以落在里面，是被水挤进去的；极性和带电的侧链落在表面，因为那里才能形成氢键。",
      src: "A pp.49–50, §2.1",
      see: [
        { id: "2-2-2", en: "conformation and folding worked through in full, with the hydrophobic effect as its engine", cn: "构象与折叠的完整讨论，以疏水效应为发动机" },
        { id: "4-3-1", en: "the noncovalent interactions that fold a polypeptide into its active form", cn: "把多肽折成活性形式的那些非共价相互作用" }
      ]
    },
    {
      link_en: "so how weak is weak? Two numbers, and they are the whole argument",
      link_cn: "那么「弱」到底有多弱？两个数字，而这两个数字就是全部论证",
      en: "**Breaking one hydrogen bond in liquid water costs about 23 kJ/mol; breaking the covalent O—H bond inside that same water molecule costs about 470 kJ/mol.** The gap is the same at the other end of the scale: about **410 kJ** is needed to break a mole of C—H bonds, while as little as **4 kJ** is enough to disrupt a weak interaction. **So any single weak interaction is negligible against thermal jostling, and a protein makes hundreds of them at once — which is why the sum is decisive, and also why gentle heating unfolds a protein and melts a membrane while leaving every covalent bond in them intact.**",
      cn: "**在液态水中打断一个氢键约需 23 kJ/mol；打断同一个水分子内部的 O—H 共价键约需 470 kJ/mol。** 在尺度的另一头差距同样如此：打断一摩尔 C—H 键需要约 **410 kJ**，而扰乱一个弱相互作用只要 **4 kJ** 就够。**所以任何单独一个弱相互作用，在热运动面前都可以忽略不计，而一个蛋白质一次要做出成百上千个 —— 这既是「加起来才是决定性的」的含义，也解释了为什么温和加热就能让蛋白质解折叠、让膜散架，而其中每一个共价键都完好无损。**",
      src: "A p.50, §2.1"
    },
    {
      link_en: "one more weak force, and it works even between atoms with no charges at all",
      link_cn: "还有一种弱作用力，它在完全不带电的原子之间也照样起作用",
      en: "When two uncharged atoms are brought very close together, their surrounding electron clouds influence each other: a momentary lopsidedness in one cloud induces a matching lopsidedness in the other, and the two transient dipoles attract. **That attraction is a van der Waals interaction. Push the atoms closer still and the clouds repel, so there is one separation at which attraction is strongest, and half that distance is an atom's van der Waals radius.** **What it is for: this is the force that rewards a snug fit. Two surfaces that match each other in shape make many of these contacts at once, and two that do not make almost none — which is how a binding site tells one molecule from another.**",
      cn: "当两个不带电的原子被拉得很近时，它们周围的电子云会彼此影响：一片云上瞬时的偏斜会在另一片云上诱导出相应的偏斜，这两个瞬时偶极互相吸引。**这种吸引就是 van der Waals 相互作用。再往近推，电子云就会互相排斥，所以存在一个吸引力最强的间距，而这个间距的一半就是原子的 van der Waals 半径。** **它有什么用：这是奖励「贴合」的那股力。两个形状互补的表面能一次做出许许多多这样的接触，形状不合的两个表面几乎一个也做不出 —— 结合位点就是这样把一个分子和另一个分子区分开的。**",
      src: "A p.49, Fig. 2-11"
    },
    {
      link_en: "last, what dissolved solutes do to water itself, and it depends on counting",
      link_cn: "最后一件事：溶质对水本身做了什么 —— 而这取决于数数",
      en: "Solutes of all kinds alter certain physical properties of water: its vapour pressure, its boiling point, its melting point and its osmotic pressure. **These four depend on how many dissolved particles are present per litre and not on what those particles are, so the quantity that matters is osmolarity — the total concentration of solute particles, counting a sodium chloride that splits into two ions as two.**",
      cn: "各种溶质都会改变水的某些物理性质：**蒸气压、沸点、熔点和渗透压**。**这四项取决于每升里有多少个溶解的颗粒，而与这些颗粒是什么无关，所以真正要看的量是 osmolarity（渗透浓度）—— 溶质颗粒的总浓度，一个会裂成两个离子的氯化钠按两个算。**",
      src: "A p.51, §2.1"
    },
    {
      link_en: "and the property that decides whether your cells survive the afternoon",
      link_cn: "而其中那一项，决定了你的细胞能不能撑过这个下午",
      en: "**A semipermeable membrane is one that lets water through and holds solutes back — a cell's own membrane is close to this for many solutes. Water crosses it toward whichever side has the higher osmolarity, and that tendency for water to move produces the osmotic pressure.** In a hypertonic solution, one with higher osmolarity than the cytosol, a cell shrinks as water moves out; in a hypotonic one it takes up water, swells, and can burst. **The laboratory consequence is concrete and immediate: organelles must be separated from a broken cell in an isotonic solution — one matched in osmolarity — or they swell and burst before you can look at them.**",
      cn: "**semipermeable membrane（半透膜）是让水通过、把溶质挡住的膜 —— 细胞自己的膜对许多溶质而言接近于此。水会朝渗透浓度更高的那一侧穿过去，而水的这种移动趋势产生了渗透压。** 在**高渗（hypertonic）**溶液里 —— 即渗透浓度高于细胞质的溶液 —— 细胞失水皱缩；在**低渗（hypotonic）**溶液里，它吸水、膨胀，甚至破裂。**实验室里的后果非常具体、也马上兑现：从破碎的细胞里分离细胞器必须在等渗（isotonic，即渗透浓度相匹配）溶液中进行，否则它们还没等你去看，就已经胀破了。**",
      src: "A p.52, §2.1"
    }
  ],
  terms: [
    { en: "electronegativity", cn: "电负性",
      def_en: "How hard an atom pulls on the electrons it shares in a covalent bond. Oxygen and nitrogen pull much harder than hydrogen, which is what gives water its partial charges and makes it polar.",
      def_cn: "一个原子对共价键中共用电子的拉扯强度。氧和氮的拉力远大于氢，这正是水带上部分电荷、成为极性分子的原因。" },
    { en: "hydrogen bond", cn: "氢键",
      def_en: "A hydrogen already covalently attached to an electronegative atom (O or N) shared with a second electronegative atom nearby. About 10% covalent and 90% electrostatic, and short-lived. Each water molecule makes at most four; four in ice, an average of 3.4 in liquid water at room temperature, which is why ice is the less dense of the two.",
      def_cn: "一个已经共价连在电负性原子（O 或 N）上的氢，被附近第二个电负性原子共享。约 10% 共价、90% 静电，而且转瞬即逝。每个水分子最多形成四个：冰里是四个，室温液态水里平均 3.4 个 —— 这就是冰密度更小的原因。" },
    { en: "hydrophobic effect", cn: "疏水效应",
      def_en: "Water in contact with a nonpolar surface must order itself into a cage-like shell to keep hydrogen-bonding to other water, and ordered water has the lower entropy. Nonpolar groups are pushed together because clustering shrinks the caged surface. It is a property of water, and it builds protein cores, micelles and bilayers.",
      def_cn: "与非极性表面接触的水，必须排成笼状的壳才能继续和其他水成键，而有序的水熵更低。非极性基团被挤到一起，因为聚团能缩小被笼住的表面积。它是水的性质，蛋白质内核、微团和双层都由它搭成。" },
    { en: "amphipathic compound", cn: "两亲性化合物",
      def_en: "One molecule with a polar or charged region at one end and a nonpolar region at the other — a fatty acid, for example. In water it aggregates: tails hidden, heads out, giving a micelle or a lipid bilayer.",
      def_cn: "同一个分子上一端是极性或带电区域、另一端是非极性区域 —— 例如脂肪酸。在水中它会聚集：尾巴藏起来、头朝外，形成微团或脂双层。" },
    { en: "micelle and lipid bilayer", cn: "微团与脂双层",
      def_en: "Two ways amphipathic molecules hide their nonpolar tails from water. In a micelle the tails point inward to a common centre; in a bilayer two sheets lie tail to tail with both outer faces polar. A biological membrane is the second one, which is why it is two molecules thick.",
      def_cn: "两亲分子把非极性尾部藏开水的两种方式。微团里尾部指向共同的球心；双层里两片分子尾对尾贴合，两个外表面都是极性的。生物膜属于后者，所以它是两个分子厚。" },
    { en: "van der Waals radius", cn: "van der Waals 半径",
      def_en: "Two nearby uncharged atoms induce transient dipoles in each other's electron clouds and attract; pushed closer, the clouds repel. There is one separation at which the attraction peaks, and half of it is this radius. Many such contacts at once are what reward a snug shape match between two surfaces.",
      def_cn: "两个邻近的不带电原子在彼此的电子云中诱导出瞬时偶极而互相吸引；再靠近则电子云互斥。存在一个吸引力最强的间距，它的一半就是这个半径。大量这样的接触同时发生，正是对两个表面形状贴合的奖励。" },
    { en: "osmolarity", cn: "渗透浓度",
      def_en: "The total concentration of dissolved solute particles per litre, counting a salt that splits into two ions as two particles. Vapour pressure, boiling point, melting point and osmotic pressure all track this number and ignore what the particles are.",
      def_cn: "每升溶液中溶质颗粒的总浓度，一个裂成两个离子的盐按两个颗粒计。蒸气压、沸点、熔点和渗透压都只跟着这个数字走，不管颗粒是什么。" },
    { en: "osmosis and osmotic pressure", cn: "渗透与渗透压",
      def_en: "Water crossing a semipermeable membrane toward the side of higher osmolarity, and the pressure that tendency produces. A cell shrinks in a hypertonic solution and swells in a hypotonic one, which is why organelles are fractionated in isotonic buffers.",
      def_cn: "水穿过半透膜、流向渗透浓度更高的一侧，以及这种趋势所产生的压力。细胞在高渗液中皱缩、在低渗液中膨胀，所以分离细胞器要在等渗缓冲液中进行。" },
    { en: "semipermeable membrane", cn: "半透膜",
      def_en: "A barrier that lets water pass and holds solutes back. A cell's own boundary behaves this way for many solutes, which is what makes osmosis a biological problem rather than a physical curiosity.",
      def_cn: "让水通过、把溶质挡住的屏障。细胞自身的边界对许多溶质就是这样，正因如此渗透才成为一个生物学问题，而不只是物理上的趣闻。" }
  ]
};

/* ===================================================================== L-2-3-1 */
window.BIOLITE_SPINE["L-2-3-1"] = {
  assumed: ["water", "proton", "ion", "acid", "base", "salt", "equilibrium",
            "concentration", "logarithm", "blood", "cell", "enzyme", "protein",
            "carbon dioxide", "glucose", "lung", "kidney", "conformation",
            "ion product of water (kw)", "conjugate acid-base pair"],
  nodeTitle_en: "Buffering against pH changes in biological systems",
  nodeTitle_cn: "生物体系中对 pH 变化的缓冲",
  title_en: "Why a titration curve is flat in the middle, and why blood pH is partly set by breathing",
  title_cn: "滴定曲线中间为什么是平的，以及血液 pH 为什么有一半是靠呼吸定的",
  steps: [
    {
      en: "**Almost every biological process is pH-dependent, and a small change in pH produces a large change in the rate of the process.** An enzyme's active site is lined with groups that gain or lose a proton over a narrow pH range, and a group that changes charge changes shape and changes what it can bind. **So a cell has no option: the intracellular and extracellular fluids of multicellular organisms hold a characteristic and nearly constant pH — roughly 6.9 inside a cell and 7.4 in the fluid outside it.**",
      cn: "**几乎每一个生物学过程都依赖 pH，而 pH 的微小变化会引起过程速率的巨大变化。** 酶的活性中心内壁排布着一些基团，它们在很窄的 pH 范围内得到或失去一个质子，而一个基团一改变电荷，形状就变了，能结合什么也就变了。**所以细胞别无选择：多细胞生物的细胞内液和细胞外液都维持着各自特有、且几乎恒定的 pH —— 细胞内大约 6.9，细胞外液 7.4。**",
      src: "A p.59, p.61"
    },
    {
      link_en: "so what holds a pH still? One mixture, and it has exactly two ingredients",
      link_cn: "那是什么把 pH 摁住的？一种混合液，而它恰好只有两样成分",
      en: "A weak acid is one that gives up its proton only partly, so at any moment some molecules still hold their proton and some have let it go. **The form still holding the proton is the proton donor, the form that has let it go is the proton acceptor, and the two together are one substance in two states.** **A buffer is a solution that holds both states at once, at comparable concentrations — a weak acid mixed with its own salt. What it does: such a mixture resists changes in pH caused by adding H+ or OH−.**",
      cn: "弱酸是那种只把质子部分让出去的酸，所以任何时刻都有一部分分子还攥着质子、另一部分已经放掉了。**还攥着质子的那一形态是质子供体，已经放掉的那一形态是质子受体，两者合起来是同一种物质的两种状态。** **buffer（缓冲液）就是同时含有这两种状态、且浓度相当的溶液 —— 一个弱酸加上它自己的盐。它干什么用：这样的混合物能抵抗加入 H+ 或 OH− 所引起的 pH 变化。**",
      src: "A p.60, p.64"
    },
    {
      link_en: "and the mechanism is two equilibria sharing one solution",
      link_cn: "机制是两个平衡共用一份溶液",
      en: "**Buffering results from two reversible reaction equilibria occurring in a solution in which the proton donor and the proton acceptor are present at nearly equal concentrations.** Add H+ and the acceptor takes it up, becoming donor; add OH− and the donor gives up a proton to neutralise it, becoming acceptor. **Either way what actually changes is the ratio of the two forms, and while both are present in quantity that ratio can absorb a lot of movement before the pH follows it.**",
      cn: "**缓冲作用源于两个可逆反应平衡，它们发生在同一份溶液中，而其中质子供体与质子受体的浓度接近相等。** 加入 H+，受体把它接走，自己变成供体；加入 OH−，供体让出一个质子把它中和掉，自己变成受体。**两种情况下真正改变的都是两种形态的比例；只要两者都还有相当的量，这个比例就能吸收掉很多变动，而 pH 才慢慢跟上去。**",
      src: "A p.60"
    },
    {
      link_en: "you can see that as a shape, on one curve",
      link_cn: "这件事可以在一条曲线上看成一个形状",
      en: "**A titration curve is the plot you get by adding a strong base to a weak acid in small measured increments and recording the pH after each one.** Its shape is the argument here: **it has a relatively flat zone extending about one pH unit either side of its midpoint, and in that zone a given amount of acid or base moves the pH far less than the same amount added outside it. That flat zone is the buffering region.**",
      cn: "**滴定曲线，就是把强碱一小份一小份地加进弱酸、每加一次记一次 pH 所得到的那张图。** 这里真正要用的是它的形状：**在它中点两侧各约 1 个 pH 单位的范围内，有一段相对平坦的区域；在这段区域里，同样量的酸或碱对 pH 的推动远小于在区域之外加入时。这段平坦区就是 buffering region（缓冲区间）。**",
      src: "A p.60, Fig. 2-17",
      see: [{ id: "L-2-2-1", en: "where a titration curve comes from, and what a pK is", cn: "滴定曲线是怎么做出来的，以及 pK 究竟是什么" }]
    },
    {
      link_en: "one place on that curve carries the whole design",
      link_cn: "曲线上的一个位置，承载了整个设计",
      recall_en: "the equal concentrations of donor and acceptor named two steps up are exactly this midpoint",
      recall_cn: "第 3 步里说的「供体与受体浓度接近相等」，指的正是这个中点",
      en: "**At the midpoint of the curve half the weak acid has given up its proton, so proton donor and proton acceptor are present in equal concentration — and there the pH is numerically equal to the pKa of that acid. The midpoint is both the flattest part of the curve and the point of maximum buffering power.** **What follows is the one practical rule: choosing a buffer is choosing an acid whose pKa sits near the pH you want to hold, because a buffer works only near its own pKa.**",
      cn: "**在曲线的中点上，弱酸有一半已经让出质子，因此质子供体与质子受体等浓度共存 —— 而在那里，pH 在数值上等于该酸的 pKa。中点既是曲线最平坦的地方，也是缓冲能力最强的点。** **由此得到唯一一条实用规则：选缓冲液就是选一个 pKa 靠近你想维持的那个 pH 的酸，因为缓冲液只在它自己的 pKa 附近才有用。**",
      src: "A p.60"
    },
    {
      link_en: "and the arithmetic that turns that picture into a number",
      link_cn: "而把这张图变成数字的算术是这样的",
      en: "**The Henderson-Hasselbalch equation gives the pH of any such mixture: pH = pKa + log([proton acceptor]/[proton donor]).** Read it at three points. Equal concentrations make the ratio 1, its logarithm 0, and pH = pKa — the midpoint again. A ratio of 10 to 1 adds exactly 1 to the pH, and a ratio of 1 to 10 subtracts exactly 1. **So the one-pH-unit width of the buffering region is not a rough estimate: it is the span over which the two forms stay within a factor of ten of each other, and outside it one of them has been nearly used up.**",
      cn: "**Henderson-Hasselbalch 方程给出这种混合液的 pH：pH = pKa + log([质子受体]/[质子供体])。** 从三个点上读它。两者浓度相等时比值为 1、对数为 0，于是 pH = pKa —— 又回到中点。比值为 10:1 时 pH 正好加 1，比值为 1:10 时正好减 1。**所以缓冲区间「上下各 1 个 pH 单位」这个宽度并不是粗略估计：它就是两种形态彼此相差不超过十倍的那一段，出了这一段，其中一种就已经快被用光了。**",
      src: "A pp.60–61"
    },
    {
      link_en: "two buffers run a body, and the first one is the simple one",
      link_cn: "身体靠两套缓冲体系运转，先说简单的那一套",
      en: "**The phosphate buffer works inside cells. Its proton donor is dihydrogen phosphate, H2PO4−, its acceptor is monohydrogen phosphate, HPO4^2−, and the pKa of that pair is 6.86.** By the one-unit rule that gives it real buffering power from about 5.9 to 7.9 — **which covers the 6.9 of cytoplasm and the 7.4 of extracellular fluid, and phosphate is present inside cells at concentrations high enough to matter.**",
      cn: "**磷酸盐缓冲体系在细胞内工作。它的质子供体是磷酸二氢根 H2PO4−，受体是磷酸一氢根 HPO4^2−，这一对的 pKa 是 6.86。** 按「上下各一个单位」的规则，它在大约 **5.9 到 7.9** 之间具有真实的缓冲能力 —— **正好覆盖细胞质的 6.9 和细胞外液的 7.4；而磷酸在细胞内的浓度也确实高到足以起作用。**",
      src: "A p.61"
    },
    {
      link_en: "the second one holds blood, and it is built the same way",
      link_cn: "第二套管血液，搭法完全一样",
      en: "**Blood plasma is buffered in part by the bicarbonate system: carbonic acid, H2CO3, as the proton donor and bicarbonate, HCO3−, as the proton acceptor, holding plasma near pH 7.4.**",
      cn: "**血浆的缓冲有一部分由碳酸氢盐体系承担：碳酸 H2CO3 作质子供体，碳酸氢根 HCO3− 作质子受体，把血浆维持在 pH 7.4 附近。**",
      src: "A p.62"
    },
    {
      link_en: "and here is the one thing it has that no bench buffer has",
      link_cn: "而它有一样实验台上的缓冲液绝对没有的东西",
      recall_en: "the carbon dioxide that dissolves into carbonic acid is the gas named in the water spine",
      recall_cn: "溶解后变成碳酸的那种气体，就是水那一条主线里点过名的二氧化碳",
      en: "A buffer in a flask is a closed system: whatever donor and acceptor it started with is all it will ever have. **The bicarbonate system is open at one end. Carbonic acid is in equilibrium with carbon dioxide dissolved in the plasma, and that dissolved gas is in equilibrium with the large reserve of gaseous CO2 in the air spaces of the lungs — so the blood's supply of proton donor is continuous with your breathing.** Breathe out faster and CO2 leaves the lungs, dissolved CO2 follows it, carbonic acid is consumed to replace it, and plasma pH rises. **That is why hyperventilation, the rapid breathing sometimes elicited by stress or anxiety, tips the normal balance — and why the fastest way to change blood pH is to change a breathing rate.**",
      cn: "烧瓶里的缓冲液是一个封闭体系：一开始装了多少供体和受体，它一辈子就只有这么多。**碳酸氢盐体系有一端是敞开的。碳酸与溶解在血浆中的二氧化碳处于平衡，而这些溶解的气体又与肺气腔中大量储备的 CO2 气体处于平衡 —— 所以血液里质子供体的供应，是和你的呼吸连成一体的。** 呼气加快，CO2 离开肺，溶解的 CO2 跟着走，碳酸被消耗来补上，血浆 pH 于是升高。**这就是为什么过度换气（hyperventilation，紧张或焦虑时有时会出现的急促呼吸）会打破正常平衡 —— 也是为什么改变血液 pH 最快的办法是改变呼吸频率。**",
      src: "A pp.62–63"
    },
    {
      link_en: "when it fails, the failure has two names",
      link_cn: "一旦失守，失守的方式有两个名字",
      en: "**Conditions that lower blood pH cause acidosis; conditions that raise it cause alkalosis. Both can be life-threatening.** The normal plasma value is 7.4, and the clinical line for acidosis sits just below it at 7.35 — the whole dangerous range is a few tenths of a unit wide.",
      cn: "**使血液 pH 降低的情况造成 acidosis（酸中毒），使之升高的造成 alkalosis（碱中毒）。两者都可能危及生命。** 血浆的正常值是 7.4，而酸中毒的临床界线就紧挨在它下面，7.35 —— 整个危险区间不过零点几个单位宽。",
      src: "A pp.63–64"
    },
    {
      link_en: "and one disease shows the whole chain running in one direction",
      link_cn: "有一种疾病能让整条链条朝一个方向跑给你看",
      en: "**In uncontrolled diabetes, fat is broken down for fuel faster than the products can be used, and two acids accumulate in the blood: β-hydroxybutyric acid and acetoacetic acid. They drive plasma pH below 7.35.** Severe acidosis then produces, in order, headache, drowsiness, nausea and vomiting, and then stupor, coma and convulsions — presumably because at the lower pH some enzymes no longer work optimally. **That last clause closes the loop with the first step of this chain: a shifted pH changes the charge on ionizable groups, an enzyme with the wrong charges on its active site works badly, and enough enzymes working badly is a coma.**",
      cn: "**在未受控制的糖尿病中，脂肪被当作燃料分解的速度快过产物被利用的速度，于是有两种酸在血液中堆积：β-羟丁酸和乙酰乙酸。它们把血浆 pH 压到 7.35 以下。** 严重的酸中毒随后依次产生头痛、嗜睡、恶心、呕吐，继而木僵、昏迷和惊厥 —— 推测是因为在更低的 pH 下某些酶不再处于最佳工作状态。**最后这半句正好和这条链的第一步接上了：pH 一移动，可电离基团的电荷就变；活性中心带错电荷的酶就干不好活；够多的酶干不好活，就是昏迷。**",
      src: "A p.64",
      see: [
        { id: "8-4-4-3", en: "where β-hydroxybutyrate and acetoacetate come from — acetyl-CoA and the ketone bodies", cn: "β-羟丁酸和乙酰乙酸是从哪来的 —— 乙酰-CoA 与酮体" },
        { id: "10-8", en: "the same ketone-body overproduction followed through to acidosis and coma", cn: "同一条酮体过量的线索，一直追到酸中毒与昏迷" }
      ]
    },
    {
      link_en: "which makes the measurement diagnostic",
      link_cn: "于是这个测量本身就有了诊断价值",
      en: "**Two numbers taken together point at one diagnosis: a high blood glucose with a low plasma pH is the picture of diabetes mellitus.** Neither number alone says it — a low pH has many causes and a high glucose has several — **and the pair is informative because each of them comes from a different link in the same chain, one from the fuel that is not being used and one from the acids produced instead.**",
      cn: "**两个数字合在一起指向同一个诊断：血糖高、同时血浆 pH 低，这就是糖尿病（diabetes mellitus）的图像。** 单看任何一个都说明不了 —— pH 低有很多原因，血糖高也有好几种 —— **这一对之所以有信息量，是因为两者来自同一条链条上的不同环节：一个来自那份没被用掉的燃料，一个来自因此被造出来的酸。**",
      src: "A p.64"
    }
  ],
  terms: [
    { en: "buffer", cn: "缓冲液",
      def_en: "A solution holding a weak acid and its own salt at comparable concentrations, so that both the proton donor and the proton acceptor are present at once. It resists pH change caused by added H+ or OH−, and it does so only near its own pKa.",
      def_cn: "同时含有一个弱酸及其盐、且两者浓度相当的溶液，因而质子供体与质子受体同时在场。它能抵抗加入 H+ 或 OH− 引起的 pH 变化，而且只在它自己的 pKa 附近才做得到。" },
    { en: "buffering region", cn: "缓冲区间",
      def_en: "The relatively flat zone of a titration curve, about one pH unit either side of the midpoint, where a given amount of acid or base moves the pH far less than the same amount added outside it. Its width is the span over which the two forms of the acid stay within a factor of ten of each other.",
      def_cn: "滴定曲线上相对平坦的那一段，位于中点两侧各约 1 个 pH 单位；在这一段里，同样量的酸或碱对 pH 的推动远小于在段外加入时。它的宽度就是酸的两种形态彼此相差不超过十倍的那一段。" },
    { en: "Henderson-Hasselbalch equation", cn: "Henderson-Hasselbalch 方程",
      def_en: "pH = pKa + log([proton acceptor]/[proton donor]). Equal concentrations give pH = pKa; a ten-to-one ratio moves the pH by exactly one unit in either direction, which is where the width of the flat zone comes from.",
      def_cn: "pH = pKa + log([质子受体]/[质子供体])。两者等浓度时 pH = pKa；比值为十比一时 pH 正好向任一方向移动一个单位，缓冲平坦区的宽度就是这么来的。" },
    { en: "phosphate buffer system", cn: "磷酸盐缓冲体系",
      def_en: "H2PO4− as proton donor and HPO4^2− as acceptor, pKa 6.86, effective from roughly 5.9 to 7.9. It is the intracellular one, covering cytoplasm at 6.9 and extracellular fluid at 7.4.",
      def_cn: "H2PO4− 作质子供体、HPO4^2− 作受体，pKa 为 6.86，有效范围大约 5.9 到 7.9。它是细胞内的那一套，覆盖细胞质的 6.9 和细胞外液的 7.4。" },
    { en: "bicarbonate system", cn: "碳酸氢盐体系",
      def_en: "H2CO3 as proton donor and HCO3− as acceptor, holding blood plasma near pH 7.4. It is open rather than closed: its acid component is in equilibrium with dissolved CO2 and thence with the gas reserve in the lungs, so breathing rate moves blood pH.",
      def_cn: "H2CO3 作质子供体、HCO3− 作受体，把血浆维持在 pH 7.4 附近。它是开放的而非封闭的：酸组分与溶解的 CO2 平衡，再与肺内的气体储备平衡，所以呼吸频率能移动血液 pH。" },
    { en: "acidosis / alkalosis", cn: "酸中毒／碱中毒",
      def_en: "Acidosis is a blood pH driven below normal, alkalosis a blood pH driven above it; plasma sits at 7.4 and the clinical line for the first is 7.35. Both can be life-threatening, and the mechanism of harm is that ionizable groups on enzymes change charge.",
      def_cn: "酸中毒是血液 pH 被压到正常以下，碱中毒是被推到正常以上；血浆正常值 7.4，前者的临床界线是 7.35。两者都可能危及生命，其致害机制是酶上可电离基团的电荷发生改变。" },
    { en: "ketone bodies", cn: "酮体",
      def_en: "β-hydroxybutyric acid and acetoacetic acid, produced when fat is broken down for fuel faster than the products are consumed. In uncontrolled diabetes they accumulate in blood and drive plasma pH below 7.35.",
      def_cn: "β-羟丁酸与乙酰乙酸，在脂肪作为燃料被分解的速度超过产物被消耗的速度时产生。在未受控制的糖尿病中它们在血中堆积，把血浆 pH 压到 7.35 以下。" }
  ]
};

/* ===================================================================== L-3-4-1 */
window.BIOLITE_SPINE["L-3-4-1"] = {
  assumed: ["protein", "polypeptide", "peptide bond", "amino acid", "side chain (r)",
            "gene", "DNA", "genome", "residue", "enzyme", "molecule", "atom",
            "ion", "charge", "electron", "conformation", "domain", "vacuum",
            "chromatography", "electrophoresis"],
  nodeTitle_en: "Determining an amino acid sequence",
  nodeTitle_cn: "氨基酸序列的测定",
  title_en: "Where a protein sequence actually comes from now, and what you do when you need the protein itself",
  title_cn: "今天一个蛋白质序列到底是从哪来的，以及当你需要蛋白质本身时该怎么做",
  steps: [
    {
      en: "**Sequences today are most often derived indirectly from the DNA sequences in genome databases: find the gene, read its bases three at a time, and write out the protein it encodes.** Direct sequencing of a protein is provided by mass spectrometry. **So the protein-chemistry methods below are what you reach for when you need the protein itself rather than the gene's prediction — to find which parts were cut off after the chain was made, which residues carry a chemical modification, or which protein a particular spot in a gel actually is. A gene sequence answers none of those three.**",
      cn: "**今天的序列大多是从基因组数据库里的 DNA 序列间接推导出来的：找到基因，三个碱基一组地读下去，把它编码的蛋白写出来。** 而对蛋白质的**直接**测序，由质谱提供。**所以下面这些蛋白质化学方法，是当你需要蛋白质本身、而不是基因给出的预测时才用的 —— 找出链造好之后被切掉了哪一段、哪些残基带着化学修饰、胶上某个点究竟是哪个蛋白。这三件事，基因序列一件也答不了。**",
      src: "A p.91, §3.4"
    },
    {
      link_en: "it did not start there. It started with one protein and one very stubborn person",
      link_cn: "它并不是从这里起步的。起步于一个蛋白质和一个非常执拗的人",
      en: "**The first protein sequence ever determined was bovine insulin, by Frederick Sanger in 1953.** Many researchers were surprised, having thought that determining a polypeptide's sequence would be a hopeless task. The same year gave the structure of DNA, and the genetic code linking the two followed barely a decade later. **Sanger's route was built on Edman degradation, a two-step chemical cycle developed by Pehr Edman that removes and identifies one residue at a time from the amino terminus of a chain.**",
      cn: "**第一个被测定的蛋白质序列是牛胰岛素，由 Frederick Sanger 于 1953 年完成。** 许多研究者对此感到意外 —— 他们本以为测定一条多肽的序列是件没指望的事。同一年 DNA 的结构被解出，把两者联系起来的遗传密码在此后仅十年就被阐明。**Sanger 走的路线建立在 Edman degradation（Edman 降解）之上：这是 Pehr Edman 开发的两步化学循环，每次从链的氨基末端移去并鉴定一个残基。**",
      src: "A p.91",
      see: [{ id: "L-8-3-1", en: "the other method that carries Sanger's name, which reads DNA rather than protein", cn: "另一套同样叫 Sanger 的方法，读的是 DNA 而不是蛋白质" }]
    },
    {
      link_en: "reading from one end means you first have to know which end that is",
      link_cn: "既然要从一端读起，就得先知道哪一端是哪一端",
      en: "**A polypeptide has a free α-amino group at one end — the amino terminus — and that group can be tagged with a reagent that sticks to it permanently: 1-fluoro-2,4-dinitrobenzene (FDNB), dansyl chloride, or dabsyl chloride.** The last two are worth choosing for a purely practical reason, and it is the observable to remember: **dansyl and dabsyl have useful absorbance and fluorescence at visible wavelengths, so the labelled residue can be seen and followed through the rest of the procedure. The catch, which has to be stated: these reagents also label the ε-amino group on the side chain of every lysine in the chain, so an amino-terminal label is not automatically a unique one.**",
      cn: "**一条多肽的一端有一个游离的 α-氨基 —— 这一端叫氨基末端 —— 而这个基团可以用一种会永久黏上去的试剂来标记：1-氟-2,4-二硝基苯（FDNB）、丹磺酰氯（dansyl chloride）或 dabsyl 氯。** 后两者值得选，理由纯粹是实用的，也正是要记住的可观测量：**丹磺酰和 dabsyl 在可见波长有可用的吸收和荧光，所以被标记的那个残基看得见、在后续步骤里跟得上。必须说清楚的陷阱是：这些试剂同样会标记链中每一个赖氨酸侧链上的 ε-氨基，所以「氨基末端标记」并不自动等于「唯一标记」。**",
      src: "A pp.91–92"
    },
    {
      link_en: "and before cutting anything, one kind of bond has to go",
      link_cn: "而在动刀之前，有一类键必须先处理掉",
      en: "**Two cysteine residues can be joined by a covalent S—S bond, and the joined pair is called a cystine; a disulfide bond of this kind can tie together two points on one chain or two separate chains.** Break them first, or the pieces you cut stay tied to each other and come off as one lump. **Two routes. Oxidise a cystine with performic acid and you get two cysteic acid residues — irreversible, one step, finished. Or reduce it with dithiothreitol (DTT) or β-mercaptoethanol to give two free Cys residues; this alone is not enough, and it is the step people forget — the reactive –SH groups must then be blocked, typically by carboxymethylation with iodoacetate, or the bond simply re-forms. The observable result either way: subunits come apart and stay apart.**",
      cn: "**两个半胱氨酸残基可以由一个共价 S—S 键连起来，连成的这一对叫 cystine（胱氨酸）；这种 disulfide bond（二硫键）既可以把同一条链上的两处拴在一起，也可以把两条不同的链拴在一起。** 要先把它们打断，否则你切出来的片段仍然彼此拴着，出来是一坨。**两条路线。用过甲酸氧化一个胱氨酸，得到两个半胱磺酸残基 —— 不可逆、一步、完事。或者用二硫苏糖醇（DTT）或 β-巯基乙醇把它还原成两个游离的 Cys 残基；只做到这一步不够，而这正是最容易被忘掉的一步 —— 活泼的 –SH 必须随即封闭，通常用碘乙酸做羧甲基化，否则这个键会重新长回来。两条路线可观测的结果一样：亚基散开，并且保持散开。**",
      src: "A p.92"
    },
    {
      link_en: "now the chain can be cut, and the point of a good cut is that it is predictable",
      link_cn: "现在可以切链了，而好的切法的意义在于它可以被预测",
      en: "**A protease is an enzyme that hydrolyses peptide bonds, and the useful ones cleave only next to a particular residue, so the same protein always breaks into the same pieces.** Trypsin is the standard case: **it hydrolyses only those peptide bonds in which the carbonyl group is contributed by a Lys or an Arg residue, regardless of the length or the sequence of the chain.** That gives a prediction you can work out on paper: **a polypeptide containing three Lys and/or Arg residues usually yields four smaller peptides, and all except one of them end in Lys or Arg** — the exception being the piece that carried the original carboxyl terminus.",
      cn: "**蛋白酶（protease）是水解肽键的酶，而有用的那几种只在特定残基旁边切，所以同一个蛋白每次都断成同样的片段。** 胰蛋白酶（trypsin）是标准例子：**它只水解那些羰基由 Lys 或 Arg 残基提供的肽键，与链的长度和序列无关。** 由此得到一个你可以在纸上算出来的预测：**一条含三个 Lys 和／或 Arg 的多肽通常产生四个较小的肽段，且其中除一个之外全部以 Lys 或 Arg 结尾** —— 那个例外，就是带着原来羧基末端的那一段。",
      src: "A p.92"
    },
    {
      link_en: "and there is a whole set of these, which is what makes the fragments orderable",
      link_cn: "这样的试剂有一整套，而正是这一整套让片段可以被排出顺序",
      en: "Table 3-6 collects them, and it is worth holding as a set. **Trypsin cuts on the carbonyl side of Lys and Arg. Chymotrypsin cuts on the carbonyl side of Phe, Trp and Tyr — the three aromatic residues. S. aureus V8 protease cuts on the carbonyl side of Asp and Glu; Asp-N-protease cuts the same two residues on the amino side. Pepsin cuts on the amino side of Leu, Phe, Trp and Tyr. Endoproteinase Lys-C cuts on the carbonyl side of Lys alone. Cyanogen bromide cuts on the carbonyl side of Met, and it is the only entry that is a chemical reagent rather than an enzyme.** **What the set is for: cut the same protein two different ways, and the two sets of fragments overlap each other. An overlap fixes which fragment follows which, and that is how short pieces get assembled back into one long sequence.**",
      cn: "Table 3-6 把它们收在一起，值得成套记住。**胰蛋白酶切在 Lys 和 Arg 的羰基侧。糜蛋白酶切在 Phe、Trp、Tyr 的羰基侧 —— 正是三个芳香族残基。金黄色葡萄球菌 V8 蛋白酶切在 Asp、Glu 的羰基侧；Asp-N 蛋白酶切同样这两个残基，但在氨基侧。胃蛋白酶切在 Leu、Phe、Trp、Tyr 的氨基侧。内切蛋白酶 Lys-C 只切 Lys 的羰基侧。溴化氰切在 Met 的羰基侧，而且它是表中唯一一个不是酶、而是化学试剂的条目。** **这一整套是干什么用的：把同一个蛋白用两种方式切开，两组片段会彼此重叠。一处重叠就固定了哪一段接在哪一段后面 —— 短片段就是这样被重新拼回一条长序列的。**",
      src: "A p.92, Table 3-6"
    },
    {
      link_en: "so much for the chemistry. The instrument that displaced it had one problem to solve first",
      link_cn: "化学部分到此为止。取代它的那台仪器，先得解决一个问题",
      en: "**A mass spectrometer ionises a sample in a vacuum and measures its mass-to-charge ratio, m/z, from how the ion moves in an electric and/or a magnetic field.** Because that measurement happens in the gas phase, the technique was for a long time limited to small molecules: a protein put into a vacuum by ordinary heating falls apart. **In 1988 two methods solved it. In MALDI the protein sits in a light-absorbing matrix, and a short pulse of laser light ionises it and knocks it off into the vacuum intact. In ESI the protein solution is pushed through a needle held at high electrical potential, which disperses it into a fine mist of charged microdroplets; the solvent evaporates from each droplet and leaves multiply charged protein ions in the gas phase.**",
      cn: "**质谱仪在真空中把样品离子化，再根据离子在电场和／或磁场中的运动测出它的质荷比 m/z。** 因为这一测量发生在气相，该技术长期只能用于小分子：靠普通加热把蛋白质弄进真空，它会散架。**1988 年有两种方法解决了这个问题。MALDI 让蛋白质待在一层吸光基质里，一束短脉冲激光把它离子化并完整地打进真空。ESI 则把蛋白质溶液压过一根处于高电位的针头，溶液被分散成带电微液滴的细雾；溶剂从每个液滴上蒸发掉，气相中就留下带多个电荷的蛋白质离子。**",
      src: "A pp.93–94"
    },
    {
      link_en: "and once the ion is flying, two ways to measure it",
      link_cn: "离子一旦飞起来，测它有两种办法",
      en: "**Time of flight (TOF) accelerates the ions in a field and times how long each takes to reach a detector, since that acceleration depends on m/z. An Orbitrap, newer and more efficient, traps the ions in orbit between an outer barrel-shaped electrode and an inner spindle-shaped one and reads m/z from the frequency of that orbit.**",
      cn: "**飞行时间法（TOF）在电场中加速离子，再计时每个离子到达检测器所用的时间 —— 因为这一加速取决于 m/z。Orbitrap 更新也更高效，它把离子束缚在外部桶形电极与内部纺锤形电极之间的轨道上，从轨道的频率读出 m/z。**",
      src: "A p.94"
    },
    {
      link_en: "what comes out of an ESI run looks wrong at first, and its wrongness is the method",
      link_cn: "ESI 跑出来的东西第一眼看着不对劲，而这份「不对劲」正是方法本身",
      en: "As a protein enters the gas phase it picks up a **variable** number of protons from the solvent, so different molecules of the same protein carry different positive charges. **One protein therefore gives a whole family of peaks at different m/z rather than a single peak. The family has a strict internal structure: each successive peak differs from its neighbour by one charge and by one mass unit, that one extra proton. Because the relationship is that regular, the mass of the protein can be calculated from any two neighbouring peaks — and the precision is high enough to tell apart two proteins differing by a single proton.**",
      cn: "蛋白质进入气相时，会从溶剂上捡到**数目不定**的质子，所以同一种蛋白的不同分子带的正电荷各不相同。**因此一个蛋白给出的是一整族 m/z 各不相同的峰，而不是单独一个峰。这一族峰内部有严格的结构：每个峰与相邻的峰之间恰好相差一个电荷、一个质量单位，也就是那多出来的一个质子。正因为关系如此规整，蛋白质的质量可以由任意两个相邻峰算出来 —— 而且精度高到能分辨两个仅相差一个质子的蛋白质。**",
      src: "A p.94, Fig. 3-28"
    },
    {
      link_en: "a mass is not a sequence. Getting a sequence takes two spectrometers in a row",
      link_cn: "质量不等于序列。要拿到序列，得把两台质谱串起来",
      en: "**Tandem mass spectrometry, written MS/MS, is one instrument carrying two mass filters in series with a collision cell between them.** Digest the protein with a protease first — often trypsin, because its cuts are so predictable — and inject the peptide mixture. **The first filter selects a single type of peptide out of the mixture and lets nothing else through. That peptide then crosses the collision cell, into which a collision gas such as helium or argon is bled; a high-energy impact breaks each individual molecule in about one place only, and mostly at a peptide bond. The second filter then measures the m/z of every fragment produced.**",
      cn: "**串联质谱（tandem mass spectrometry，写作 MS/MS）是一台仪器里串接着两个质量过滤器，中间夹一个碰撞室。** 先用蛋白酶把蛋白消化掉 —— 常用胰蛋白酶，因为它切得最可预测 —— 再把肽混合物注进去。**第一个过滤器从混合物里只挑出一种肽，别的一律不放行。这段肽随后穿过碰撞室，室内通入氦或氩这类碰撞气体；一次高能碰撞使每个分子平均只断在一个地方，而且多数断在肽键上。第二个过滤器再测出所产生的每一个碎片的 m/z。**",
      src: "A p.95, Fig. 3-29"
    },
    {
      link_en: "and here is how a list of fragment masses turns into letters",
      link_cn: "接下来，一串碎片质量是怎么变成字母的",
      en: "When a peptide bond breaks, one of the two pieces keeps the charge. **Fragments that kept the charge on the amino-terminal side are called b-type ions; those that kept it on the carboxyl-terminal side are y-type ions.** Within one set, each successive peak has one amino acid less than the one before it. **So the difference in mass between one peak and the next names the residue that was lost, because every amino acid has its own mass — and the run of differences, read along the set, spells out the sequence.**",
      cn: "肽键断开时，两块碎片中有一块保留了电荷。**把电荷保留在氨基末端一侧的碎片称为 b 型离子，保留在羧基末端一侧的称为 y 型离子。** 在同一组内，每个相继的峰都比前一个少一个氨基酸。**所以一个峰与下一个峰之间的质量差，就指认出丢掉的是哪个残基 —— 因为每种氨基酸都有自己的质量 —— 而沿着这一组读下来的一连串差值，就把序列拼了出来。**",
      src: "A p.95, Fig. 3-29"
    },
    {
      link_en: "one letter this cannot resolve, and the reason is chemistry rather than the instrument",
      link_cn: "有一个字母它读不出来，而原因在化学，不在仪器",
      recall_en: "the whole read-out of the previous step rests on each residue having its own mass; two residues break that",
      recall_cn: "上一步整套读数都建立在「每种残基有自己的质量」上，而有两个残基破坏了这一点",
      en: "**The only ambiguities involve leucine and isoleucine, which have the same mass.** They are structural isomers — the same atoms joined up differently — **so no mass measurement can separate them, and a better spectrometer will not help. Everything else is resolved.** **And the result is checked rather than merely trusted: breakage usually generates both a b-set and a y-set from the same peptide, so the sequence read off one set can be confirmed residue by residue against the other.**",
      cn: "**唯一的不确定性涉及亮氨酸和异亮氨酸，它们质量相同。** 两者是结构异构体 —— 同样的原子，连法不同 —— **所以任何质量测量都无法把它们分开，换一台更好的质谱也没用。其余残基全部可以确定。** **而且结果是被核对过的，不是光靠信任：一次断裂通常从同一段肽上同时产生 b 组和 y 组，所以从一组读出的序列可以逐个残基地拿另一组去核对。**",
      src: "A p.95"
    },
    {
      link_en: "and the reason all this displaced the chemistry is scale",
      link_cn: "而这一整套之所以取代了前面的化学，靠的是规模",
      en: "**Put liquid chromatography in front of a tandem spectrometer — LC-MS/MS — and you can work on a whole cell extract at once.** Digest all of it with trypsin, let the chromatography deliver the resolved peptides into the instrument one after another, and match each sequence that comes out against the known genomic sequence to identify which protein it came from. **MS/MS scans of dozens of peptides can be generated in less than a second, and the entire proteome of a yeast cell — a proteome being the entire complement of proteins in a cell — can be analysed in less than an hour. Relative abundance comes out of the same run for nothing, because a more abundant protein simply yields more copies of its peptides.**",
      cn: "**在串联质谱前面接上液相色谱 —— 就是 LC-MS/MS —— 你就能一次处理整个细胞抽提物。** 把它全部用胰蛋白酶消化，让色谱把分离好的肽段一段接一段送进仪器，再把每一段读出来的序列与已知的基因组序列比对，确定它来自哪个蛋白。**几十个肽段的 MS/MS 扫描可以在不到一秒内完成，而一个酵母细胞的整个 proteome（蛋白质组，即细胞中全部蛋白质的总和）可以在不到一小时内分析完。相对丰度在同一次运行里白送 —— 因为含量越高的蛋白，产生的肽段拷贝就越多。**",
      src: "A p.95",
      see: [
        { id: "L-3-3-1", en: "how a protein is purified and sized before any of this can start", cn: "在这一切开始之前，蛋白质是怎么被纯化和测大小的" },
        { id: "L-13-5-1", en: "what a measured proteome is then used for", cn: "测出来的蛋白质组接下来被拿去做什么" }
      ]
    },
    {
      link_en: "which brings the chain back to where it started",
      link_cn: "于是这条链绕回了它的起点",
      recall_en: "the genome database of step 1 is not a rival to the spectrometer; the last step used both together",
      recall_cn: "第 1 步里的基因组数据库和质谱并非对手 —— 上一步是两者一起用的",
      en: "**The identification step in LC-MS/MS matches a measured peptide sequence against a sequence predicted from a gene, so the two sources answer different halves of one question: the genome says what the cell could make, and the spectrometer says what is present in this sample, in what amount, and with what modifications.** The classical route — label one end, break the disulfides, cut at predictable places — survives because it is still exactly the preparation a spectrometer needs.",
      cn: "**LC-MS/MS 里的鉴定这一步，是拿实测的肽段序列去比对由基因预测出的序列 —— 所以两个来源回答的是同一个问题的两半：基因组说的是这个细胞「能造什么」，质谱说的是这份样品里「实际有什么、有多少、带着什么修饰」。** 而经典路线 —— 标记一端、打断二硫键、在可预测的位点切开 —— 之所以活了下来，是因为它至今仍然恰好就是质谱所需要的那份前处理。",
      src: "A p.95, §3.4"
    }
  ],
  terms: [
    { en: "Edman degradation", cn: "Edman 降解",
      def_en: "A two-step chemical cycle developed by Pehr Edman that removes and identifies one residue at a time from the amino terminus of a chain. Sanger's insulin sequencing was built on it.",
      def_cn: "Pehr Edman 开发的两步化学循环，每次从链的氨基末端移去并鉴定一个残基。Sanger 测定胰岛素序列即以此为基础。" },
    { en: "cystine", cn: "胱氨酸",
      def_en: "Two cysteine residues joined by a covalent S—S bond. The link can tie two points on one chain together or hold two separate chains together, which is why it has to be broken before a protein can be cut into orderable pieces.",
      def_cn: "两个半胱氨酸残基由一个共价 S—S 键连成的产物。它既能把同一条链上的两处拴住，也能把两条不同的链拴在一起 —— 所以在把蛋白切成可排序的片段之前，必须先把它打断。" },
    { en: "disulfide bond", cn: "二硫键",
      def_en: "The covalent S—S link between two cysteine side chains. Broken either by oxidation with performic acid, which is irreversible, or by reduction with DTT or β-mercaptoethanol followed by carboxymethylation with iodoacetate — without that blocking step it re-forms.",
      def_cn: "两个半胱氨酸侧链之间的共价 S—S 连接。打断它有两条路：用过甲酸氧化（不可逆），或者用 DTT／β-巯基乙醇还原后再用碘乙酸做羧甲基化封闭 —— 少了封闭这一步，它会重新长回来。" },
    { en: "trypsin", cn: "胰蛋白酶",
      def_en: "Hydrolyses only those peptide bonds whose carbonyl group is contributed by Lys or Arg, regardless of chain length or sequence, so fragmentation is reproducible. Three Lys/Arg residues usually give four peptides, all but one ending in Lys or Arg.",
      def_cn: "只水解羰基由 Lys 或 Arg 提供的肽键，与链长和序列无关，因此片段化是可重复的。三个 Lys/Arg 残基通常给出四个肽段，除一个之外都以 Lys 或 Arg 结尾。" },
    { en: "cyanogen bromide", cn: "溴化氰",
      def_en: "Cleaves on the carbonyl side of Met. The only entry in Table 3-6 that is a chemical reagent instead of an enzyme.",
      def_cn: "在 Met 的羰基侧切割。Table 3-6 中唯一一个不是酶、而是化学试剂的条目。" },
    { en: "MALDI", cn: "基质辅助激光解吸电离",
      def_en: "Matrix-assisted laser desorption/ionization. The protein sits in a light-absorbing matrix and a short laser pulse ionises it and knocks it into the vacuum intact. Introduced in 1988, and one of the two ways a macromolecule reaches the gas phase.",
      def_cn: "基质辅助激光解吸／电离。蛋白质置于吸光基质中，一束短脉冲激光将其离子化并完整地打进真空。1988 年问世，是大分子进入气相的两条路之一。" },
    { en: "ESI", cn: "电喷雾电离",
      def_en: "Electrospray ionization. Solution is forced through a needle at high electrical potential into a mist of charged microdroplets; the solvent evaporates and leaves multiply charged gas-phase ions. It gives a family of peaks whose neighbours differ by one charge and one proton, so the mass follows from any two of them.",
      def_cn: "电喷雾电离。溶液在高电位下被压过针头，形成带电微液滴的细雾；溶剂蒸发后留下气相中的多电荷离子。它给出一族峰，相邻两峰相差一个电荷、一个质子，因此由任意两个相邻峰即可求出质量。" },
    { en: "b-type and y-type ions", cn: "b 型与 y 型离子",
      def_en: "In MS/MS, fragments named by which side kept the charge when a peptide bond broke: b if the amino-terminal side kept it, y if the carboxyl-terminal side did. Successive peaks within one set differ by one residue, and those mass differences spell the sequence; having both sets lets each check the other.",
      def_cn: "在 MS/MS 中，按肽键断裂后哪一侧保留电荷来命名的碎片：氨基末端一侧保留电荷的是 b，羧基末端一侧的是 y。同一组内相继的峰相差一个残基，这些质量差即拼出序列；两组同时存在，就可以互相核对。" },
    { en: "proteome", cn: "蛋白质组",
      def_en: "The entire complement of proteins in a cell, together with estimates of their relative abundance. An entire yeast one can be analysed by LC-MS/MS in under an hour.",
      def_cn: "细胞中全部蛋白质的总和，连同它们相对丰度的估计。一个完整的酵母蛋白质组可以由 LC-MS/MS 在一小时内分析完。" }
  ]
};

/* ===================================================================== L-4-5-1 */
window.BIOLITE_SPINE["L-4-5-1"] = {
  /* A brief orientation node in the full app: summary and mustKnow only, no numbered
     points. Ten steps, which is what the cited pages actually carry. */
  assumed: ["protein", "polypeptide", "amino acid", "atom", "molecule", "electron",
            "ion", "crystal", "conformation", "domain", "residue", "enzyme",
            "cell", "solvent", "myoglobin", "sequence"],
  nodeTitle_en: "Determination of protein and biomolecular structures",
  nodeTitle_cn: "蛋白质与生物大分子结构的测定",
  title_en: "Where every ribbon diagram came from, and what each of the three methods cannot tell you",
  title_cn: "你见过的每一张飘带图是从哪来的，以及三种方法各自看不见什么",
  steps: [
    {
      en: "**Three methods produced essentially every three-dimensional protein structure now on record: x-ray crystallography, nuclear magnetic resonance (NMR) and cryo-electron microscopy (cryo-EM).** Structural biologists combine biochemical approaches with physical tools and computational methods to obtain them — **in all three cases the machine measures something indirect, and a computation turns that measurement into atomic positions.**",
      cn: "**现存的三维蛋白质结构，几乎全部由三种方法做出：X 射线晶体学、核磁共振（NMR）和冷冻电镜（cryo-EM）。** 结构生物学家把生化手段、物理工具和计算方法结合起来去获得它们 —— **这三种方法有一个共同点：仪器测到的都是某种间接的东西，再由计算把这份测量变成原子的位置。**",
      src: "A p.136, §4.5"
    },
    {
      link_en: "the first method starts by turning a solution into a solid",
      link_cn: "第一种方法的第一步，是把溶液变成固体",
      en: "**In x-ray crystallography, protein molecules are crystallized — coaxed into a solid in which every molecule sits in the same orientation, repeated in a regular array — and that ordered array diffracts x-rays.** A single molecule would scatter far too weakly to detect; **many thousands of copies lined up identically scatter in step with one another, and the scattered beams reinforce each other into a pattern of discrete spots strong enough to record.**",
      cn: "**在 X 射线晶体学里，蛋白质分子先被结晶 —— 也就是被诱导成一种固体，其中每一个分子取向相同、规则地重复排列 —— 而这个有序阵列会衍射 X 射线。** 单个分子的散射弱到根本测不到；**成千上万个拷贝以完全相同的方式排好队，散射就彼此同步，散射线互相加强，形成一张由离散斑点组成、强到可以被记录下来的图样。**",
      src: "A pp.136–137"
    },
    {
      link_en: "and the structure is then reconstructed backwards from that pattern",
      link_cn: "然后再从这张图样反推回结构",
      en: "**The positions and the intensities of the diffracted beams depend on the arrangement of atoms in the molecule, so mathematical methods are used to work backwards: find the arrangement of atoms that would have produced exactly this pattern.** **The output is a list of atomic coordinates. A ribbon diagram is a drawing made from that list — the ribbon traces the path of the polypeptide backbone through those coordinates, and it is a rendering choice rather than a thing that was seen.**",
      cn: "**衍射线的位置和强度取决于分子中原子的排布，所以要用数学方法反着做：找出「哪一种原子排布恰好会产生这张图样」。** **输出的是一份原子坐标表。飘带图是从这份坐标表画出来的图 —— 那条飘带描的是多肽主链穿过这些坐标的走向，它是一种绘制方式上的选择，而不是被谁看见的东西。**",
      src: "A pp.136–137, p.142",
      beyond: true,
      beyondNote: "The section states that diffraction patterns and intensities depend on structure and that mathematical methods reconstruct it. That the deliverable is a coordinate list and that a ribbon is a rendering of it is standard practice, added here because 'where does the picture come from' is the question the section is being read to answer."
    },
    {
      link_en: "one worked case, and it is the one that started the field",
      link_cn: "有一个完整的例子，而它正是这门学科的起点",
      en: "**John Kendrew crystallized myoglobin from sperm whale muscle. Its diffraction pattern was highly complex, with nearly 25,000 reflections, and it was analysed in stages until by 1959 virtually every non-hydrogen atom had been placed.** The check on the answer came from outside the method: **the amino acid sequence obtained by chemical analysis agreed with the structure built from the diffraction data. Over 100,000 protein structures have since been solved this way.**",
      cn: "**John Kendrew 把抹香鲸肌肉中的肌红蛋白结晶出来。它的衍射图样极其复杂，有近 25,000 个衍射点，被分阶段解析，到 1959 年几乎每一个非氢原子的位置都被确定下来。** 对答案的检验来自方法之外：**由化学分析得到的氨基酸序列，与依据衍射数据搭建出的结构相符。此后用这个办法解出的蛋白质结构已超过 100,000 个。**",
      src: "A p.137",
      see: [{ id: "L-3-4-1", en: "the chemical sequencing that supplied Kendrew's independent check", cn: "为 Kendrew 提供独立核对的那套化学测序" }]
    },
    {
      link_en: "and the cost of the method, stated plainly, because it is the examinable half",
      link_cn: "接下来是这套方法的代价，要直说，因为它才是真正要考的那一半",
      en: "**A crystal is not a cell.** Four limits follow. **The structure obtained is an average over every molecule in the crystal and over the whole time the data were collected, so a group that occupies two positions appears as one blur. X-ray diffraction gives little information about molecular motion. The conditions that make a protein crystallize are often non-physiological, and they can affect the conformation. And a protein that will not crystallize gives nothing at all.** **What to do with that: an x-ray structure is strong evidence about one shape and weak evidence about how that shape changes.**",
      cn: "**晶体不是细胞。** 由此有四条限制。**得到的结构是对晶体中所有分子、以及整个数据采集时间的平均，所以一个占据两种位置的基团只会显示成一团模糊。X 射线衍射几乎不提供分子运动的信息。让蛋白质结晶的条件常常是非生理的，而这些条件可能改变构象。至于长不出晶体的蛋白，则什么也给不了。** **这一条该怎么用：X 射线结构是关于「某一个形状」的强证据，是关于「这个形状怎么变化」的弱证据。**",
      src: "A p.137, p.142"
    },
    {
      link_en: "so the second method drops the crystal and keeps the solution",
      link_cn: "于是第二种方法丢掉晶体，保留溶液",
      recall_en: "the motion that the crystal averaged away is exactly what this one keeps",
      recall_cn: "被晶体平均掉的那份运动，正是这一种方法保留下来的东西",
      en: "**NMR is carried out on molecules in solution. It reports on atomic nuclei and on the chemical environment each nucleus sits in, and a structure is computed from hundreds of distance and geometric constraints — each constraint saying that two particular atoms are within a certain distance of each other.** **Because the molecules are tumbling in solution rather than locked in a lattice, motion survives the measurement, and a region that moves shows up as a region that moves.**",
      cn: "**NMR 在溶液中进行。它报告的是原子核，以及每个原子核所处的化学环境；结构则由数百个距离与几何约束计算出来 —— 每一个约束都在说「某两个特定原子彼此之间不超过某个距离」。** **因为分子是在溶液里翻滚，而非被锁在晶格上，运动在测量中被保留了下来：一个会动的区域，看上去就是一个会动的区域。**",
      src: "A p.138"
    },
    {
      link_en: "and its limit comes from one prerequisite step",
      link_cn: "而它的局限来自一个前置步骤",
      en: "**For those distance constraints to be useful, the atoms giving rise to each signal must first be identified — every signal has to be assigned to a particular atom in a particular residue before it can be turned into a constraint. NMR is therefore limited to smaller molecules: a large protein produces so many signals, crowded into the same range, that assigning them becomes the bottleneck.**",
      cn: "**要让那些距离约束能用，必须先弄清每一个信号是由哪些原子产生的 —— 每个信号都得先被指认到某个残基上的某个具体原子，才能变成一个约束。因此 NMR 只能做比较小的分子：一个大蛋白产生的信号太多，又挤在同一个区间里，指认它们本身就成了瓶颈。**",
      src: "A p.138",
      beyond: true,
      beyondNote: "The size limit and the assignment requirement are both on the cited pages; that crowded, overlapping signals are the specific reason the limit exists is the standard explanation and is not spelled out there."
    },
    {
      link_en: "the third method needs neither a crystal nor a small molecule",
      link_cn: "第三种方法既不需要晶体，也不挑分子大小",
      en: "**In cryo-electron microscopy a sample is quick-frozen in vitreous ice — water frozen so fast that it never forms ice crystals, so the molecules in it are held still in whatever arrangement they had in solution — and it is kept frozen while it is imaged. Freezing limits the beam damage that would otherwise destroy the specimen before a high-resolution image could be recorded.** Discrete objects in the diameter range 100 to 300 Å can be visualized this way.",
      cn: "**在冷冻电镜里，样品被急冻在玻璃态冰（vitreous ice）中 —— 也就是冻得太快、以致根本来不及形成冰晶的水，其中的分子就保持着它们在溶液里的那副姿态被定住 —— 并在全程保持冷冻状态下成像。冷冻限制了电子束的损伤，否则样品还没等到高分辨率图像被记录下来就已经被打坏了。** 直径在 100 到 300 Å 范围内的离散颗粒可以用这种方式被看到。",
      src: "A pp.139–140"
    },
    {
      link_en: "and the randomness that ought to ruin it is what makes it work",
      link_cn: "而那份本该毁掉它的随机性，恰恰是它成立的原因",
      recall_en: "the crystal's identical orientations two methods up are replaced here by every orientation at once",
      recall_cn: "第一种方法里晶体那种「取向全都一样」，在这里被换成了「所有取向同时出现」",
      en: "**Thousands of individual molecules are frozen in random orientations, so each one is photographed from a different angle. The individual molecules are then identified in the image and computationally sorted by orientation, and the sorted two-dimensional images are combined into a single three-dimensional structure.** **The consequence: no crystal is needed, because the many viewing angles that a crystal would have supplied by lining molecules up are supplied instead by molecules that landed every which way.**",
      cn: "**成千上万个单独的分子以随机取向被冻住，因此每一个都是从不同角度被拍到的。随后由计算机在图像中把单个分子识别出来、按取向分类，再把分类好的二维图像合并成一个三维结构。** **后果是：不再需要晶体 —— 晶体本来是靠把分子排齐来提供多个观察角度的，而现在这些角度由那些四面八方乱躺的分子直接提供了。**",
      src: "A p.139, p.142"
    },
    {
      link_en: "and it has stopped being a method of last resort",
      link_cn: "而它已经不再是一种没办法时才用的方法",
      en: "**Many novel structures have now been obtained by cryo-EM without models based on prior x-ray or NMR structures** — the technique determines a structure from its own data rather than fitting a known one into a blurry envelope. **So the practical instruction is this: when a structure is presented as a settled fact, find out which of the three produced it. A crystal structure is evidence about an averaged shape, an NMR structure is evidence about a small molecule that moves, and a cryo-EM structure is evidence about a large assembly frozen out of solution. Which one it is decides what the picture can be used to argue.**",
      cn: "**如今已有许多全新的结构由冷冻电镜单独解出，无需依赖先前 X 射线或 NMR 结构所建的模板** —— 也就是说，它靠自己的数据定出结构，而不是把一个已知结构往模糊的轮廓里塞。**所以实用的指令是：当一个结构被当作板上钉钉的事实端出来时，先查清它是三种方法中的哪一种做出来的。晶体结构是关于「一个被平均过的形状」的证据；NMR 结构是关于「一个会动的小分子」的证据；冷冻电镜结构是关于「一个从溶液里冻出来的大型复合体」的证据。是哪一种，决定了这张图能拿来论证什么。**",
      src: "A pp.141–142",
      see: [{ id: "2-2-2", en: "the conformations these methods are used to establish, and the forces that set them", cn: "这些方法用来确立的那些构象，以及决定构象的那些作用力" }]
    }
  ],
  terms: [
    { en: "x-ray crystallography", cn: "X 射线晶体学",
      def_en: "Many copies of a molecule are ordered into a solid array that diffracts x-rays; the positions and intensities of the diffracted beams depend on where the atoms are, and mathematics reconstructs the arrangement that would give that pattern. The answer is averaged over the whole array and over the collection time, so it says little about motion.",
      def_cn: "把一个分子的大量拷贝排成有序固体阵列，使其衍射 X 射线；衍射线的位置与强度取决于原子在哪里，再用数学反推出能给出该图样的排布。答案是对整个阵列和整段采集时间的平均，所以几乎不涉及运动。" },
    { en: "NMR", cn: "核磁共振",
      def_en: "Nuclear magnetic resonance, carried out on molecules in solution. It reports on atomic nuclei and the chemical environment around each, and a structure is computed from hundreds of distance and geometric constraints. Motion survives, and the size limit comes from having to assign every signal to a particular atom first.",
      def_cn: "核磁共振，在溶液中进行。它报告原子核及其周围的化学环境，结构由数百个距离与几何约束计算得出。运动被保留下来；而它的分子大小上限，源于必须先把每一个信号指认到某个具体原子。" },
    { en: "cryo-electron microscopy", cn: "冷冻电镜",
      def_en: "A sample quick-frozen in vitreous ice and imaged while frozen, which limits beam damage. Thousands of molecules lie in random orientations, are identified and computationally sorted, and their two-dimensional images are combined into one three-dimensional structure. No crystal is required.",
      def_cn: "样品被急冻在玻璃态冰中并在冷冻状态下成像，从而限制电子束损伤。成千上万个分子以随机取向存在，被识别并由计算机按取向分类，其二维图像再合并成一个三维结构。全程不需要晶体。" },
    { en: "vitreous ice", cn: "玻璃态冰",
      def_en: "Water frozen fast enough that it never crystallizes, so it has no lattice of its own. Molecules trapped in it keep the arrangement they had in solution, which is what makes freezing a way of preserving a structure instead of a way of rearranging it.",
      def_cn: "冻得足够快、因而从未结晶的水，它自身没有晶格。被困在其中的分子保持着它们在溶液里的姿态 —— 正因如此，冷冻才成了一种保存结构的手段，而不是一种打乱结构的手段。" },
    { en: "reflection (in diffraction)", cn: "衍射点",
      def_en: "One discrete spot in a diffraction pattern, produced by scattered x-rays reinforcing each other in one direction. Sperm-whale myoglobin gave nearly 25,000 of them, and their positions and intensities are the raw data a structure is computed from.",
      def_cn: "衍射图样上的一个离散斑点，由散射的 X 射线在某一方向上互相加强而产生。抹香鲸肌红蛋白给出了近 25,000 个，它们的位置与强度就是用来计算结构的原始数据。" }
  ]
};

/* ===================================================================== L-5-2-1 */
window.BIOLITE_SPINE["L-5-2-1"] = {
  /* A brief orientation node in the full app: summary and mustKnow only, no numbered
     points. Eleven steps. */
  assumed: ["protein", "polypeptide", "amino acid", "side chain (r)", "residue",
            "domain", "conformation", "molecule", "ion", "charge", "cell", "blood",
            "gene", "enzyme", "hydrophobic effect", "concentration", "equilibrium",
            "heme (fe2+/fe3+ prosthetic group)", "hemoglobin", "myoglobin"],
  nodeTitle_en: "Complementary interactions between proteins and ligands: immunoglobulins",
  nodeTitle_cn: "蛋白质与配体的互补性相互作用：免疫球蛋白",
  title_en: "One binding-site design, an astronomical number of different contents",
  title_cn: "一种结合位点的设计，装进去的内容却多到天文数字",
  steps: [
    {
      en: "**A ligand is any molecule a protein binds reversibly at a specific site on its surface.** Some proteins do it with the help of a prosthetic group — a permanently attached non-amino-acid part, such as the iron-carrying haem of haemoglobin. **Most protein-ligand interactions do not involve a prosthetic group at all: the binding site is built out of amino acid side chains and nothing else. An antibody is that ordinary case pushed to its limit, which is why it is the cleanest example in the book of how a protein recognises anything.**",
      cn: "**ligand（配体）指的是任何一种被蛋白质在其表面某个特定位点上可逆结合的分子。** 有些蛋白质要靠 prosthetic group（辅基）来完成结合 —— 辅基是永久连在蛋白上的非氨基酸部件，比如血红蛋白里那个携铁的血红素。**而大多数蛋白质–配体相互作用根本不涉及辅基：结合位点完全由氨基酸侧链搭成，别无他物。抗体就是这种普通情形被推到极限的样子 —— 所以它是全书讲「蛋白质如何识别一样东西」最干净的例子。**",
      src: "A p.164, §5.2",
      see: [{ id: "L-5-1-1", en: "the prosthetic-group case worked through — myoglobin, haemoglobin and oxygen", cn: "辅基那一类的完整例子 —— 肌红蛋白、血红蛋白与氧" }]
    },
    {
      link_en: "who makes them, and what they are made against",
      link_cn: "它们由谁制造，又是冲着什么制造的",
      en: "**The immune response is carried by an array of specialised leukocytes, the white cells of the blood. T lymphocytes make T-cell receptors; B lymphocytes make immunoglobulins, which are the same thing as antibodies. An antigen is whatever molecule an antibody is made against and binds.**",
      cn: "**免疫应答由一系列特化的 leukocyte（白细胞，即血液中的白色细胞）承担。T 淋巴细胞产生 T 细胞受体；B 淋巴细胞产生免疫球蛋白（immunoglobulin），免疫球蛋白和抗体（antibody）是同一样东西。而 antigen（抗原）指的是抗体为之而生、并会去结合的那个分子。**",
      src: "A pp.164–165"
    },
    {
      link_en: "humans make five kinds, and one chain decides which kind it is",
      link_cn: "人造五种，而决定是哪一种的只有一条链",
      en: "An immunoglobulin is built from two kinds of polypeptide chain, a longer heavy chain and a shorter light chain. **Humans have five classes of immunoglobulin, distinguished by which heavy chain they use: α, δ, ε, γ and μ, giving IgA, IgD, IgE, IgG and IgM respectively. There are only two types of light chain, κ and λ, and both occur in all five classes — so the class is named by the heavy chain and the light chain says nothing about it.**",
      cn: "免疫球蛋白由两类多肽链搭成：较长的**重链**和较短的**轻链**。**人有五类免疫球蛋白，靠所用的重链来区分：α、δ、ε、γ、μ，分别对应 IgA、IgD、IgE、IgG 和 IgM。轻链只有两型，κ 和 λ，而且五类里都有 —— 所以类别是由重链命名的，轻链在这件事上不提供任何信息。**",
      src: "A p.166"
    },
    {
      link_en: "one of the five is the one to know",
      link_cn: "五种里有一种是必须掌握的",
      en: "**IgG is the most abundant class, and its fundamental structure was first established by Gerald Edelman and Rodney Porter in the 1960s: a Y-shaped protein of four chains — two identical heavy chains and two identical light chains — held together so that the two arms of the Y are equivalent to each other.**",
      cn: "**IgG 是含量最高的一类，它的基本结构最早由 Gerald Edelman 与 Rodney Porter 在 1960 年代阐明：一个 Y 形蛋白，由四条链组成 —— 两条完全相同的重链、两条完全相同的轻链 —— 组装的方式使得 Y 的两条臂彼此等价。**",
      src: "A p.165"
    },
    {
      link_en: "each chain is not one lump but a row of units, and the row has two kinds of unit",
      link_cn: "每条链并非一整块，而是一排单元，而这排单元分两种",
      en: "**Each chain is built of domains — compact segments that fold up independently of one another. Some of those domains are constant, meaning they are the same from one IgG molecule to the next, and they fold into a shape shared across the whole family, the immunoglobulin fold. Each chain also carries exactly one variable domain, whose sequence differs from one antibody to another.** **So a single design is reused throughout: the constant parts hold the Y together and are identical everywhere, and all the difference between one antibody and another sits in four small variable domains.**",
      cn: "**每条链由结构域搭成 —— 结构域是能各自独立折叠的紧凑片段。其中一些结构域是恒定的，也就是说在不同的 IgG 分子之间完全相同，它们折成整个家族共有的一种形状，即 immunoglobulin fold（免疫球蛋白折叠）。每条链另外恰好带一个可变结构域，其序列因抗体而异。** **所以整套设计是被反复复用的：恒定的部分把 Y 撑起来、处处相同，而抗体与抗体之间的全部差别，只集中在四个小小的可变结构域上。**",
      src: "A pp.165–166"
    },
    {
      link_en: "and those four variable domains pair up to make the working part",
      link_cn: "这四个可变结构域两两配对，做成真正干活的部件",
      en: "**At each tip of the Y, the variable domain of one heavy chain and the variable domain of one light chain lie against each other, and the pocket between them is the antigen-binding site. The residues that vary most from antibody to antibody line that pocket. So the binding specificity of an antibody is determined by the amino acid residues in the variable domains, and the site is built from both chains at once — neither a heavy chain nor a light chain makes a binding site on its own.** One IgG therefore carries **two identical antigen-binding sites**, one at each tip.",
      cn: "**在 Y 的每一个顶端，一条重链的可变结构域与一条轻链的可变结构域彼此贴合，两者之间的那个口袋就是抗原结合位点。抗体之间变化最大的那些残基，正好衬在这个口袋的内壁上。所以抗体的结合特异性由可变结构域中的氨基酸残基决定，而这个位点是由重链和轻链两条链共同搭出来的 —— 单独一条重链或单独一条轻链，都做不出一个结合位点。** 因此一个 IgG 分子带着**两个完全相同的抗原结合位点**，两个顶端各一个。",
      src: "A p.167",
      see: [{ id: "2-2-3", en: "the same heavy-and-light-chain contact seen as a case of subunit contact in general", cn: "同一处重链–轻链接触，被当作亚基接触的一般例子来看" }]
    },
    {
      link_en: "and now the correction that most people get wrong about what it binds",
      link_cn: "接下来是关于「它到底结合什么」这件事上最容易搞错的一处",
      en: "**A given immunoglobulin generally binds to only a part, called the epitope, of a large antigen** — a patch on the surface of a protein, perhaps a few residues across, rather than the whole molecule. **Two consequences follow directly. One large protein carries many epitopes, so it can be recognised by many different antibodies at the same time. And an epitope is a surface feature, so it can be destroyed by unfolding the antigen even though every residue is still there.**",
      cn: "**一个给定的免疫球蛋白通常只结合大抗原的一部分，这一部分称为 epitope（表位）** —— 它是蛋白质表面上的一小块，可能只有几个残基宽，而不是整个分子。**由此直接得出两条推论。一个大蛋白身上带着许多表位，所以它能同时被许多种不同的抗体识别。而且表位是一种表面特征，所以只要把抗原解折叠，即使每一个残基都还在，表位也可能就此消失。**",
      src: "A p.169"
    },
    {
      link_en: "binding is not a key dropping into a lock. Both sides move",
      link_cn: "结合并非钥匙掉进锁孔那么简单 —— 双方都会动",
      en: "**Antigen binding often involves a small conformational change in the binding site, the antibody closing slightly around what it has caught. That is an induced fit, and it is common to protein-ligand interactions generally rather than special to antibodies.** **What it buys: a site that adjusts can make more contacts with its ligand than a rigid site of the same shape could, so induced fit is part of where the binding strength comes from.**",
      cn: "**抗原结合常常伴随结合位点上一个小小的构象变化 —— 抗体会略微合拢，包住它抓到的东西。这就是 induced fit（诱导契合），它在蛋白质–配体相互作用中普遍存在，并非抗体独有。** **它换来了什么：会调整的位点，比同样形状的刚性位点能与配体做出更多接触，所以诱导契合本身就是结合强度的一部分来源。**",
      src: "A pp.167–168"
    },
    {
      link_en: "and the strength is worth one number",
      link_cn: "而这个强度值得记一个数",
      en: "**The dissociation constant Kd is the ligand concentration at which half of a protein's binding sites are occupied, so a smaller Kd means tighter binding. A typical antibody-antigen interaction has a Kd as low as 10^-10 M** — meaning the antibody is still half-occupied when its antigen has been diluted to a ten-billionth of a mole per litre. **That is the extreme of specificity referred to at the start of this chain, expressed as a measurement.**",
      cn: "**解离常数 Kd 是指「蛋白质的结合位点被占据一半时」所对应的配体浓度，所以 Kd 越小，结合越紧。典型的抗原–抗体相互作用 Kd 可以低到 10^-10 M** —— 意思是当抗原被稀释到每升百亿分之一摩尔时，抗体仍有一半的位点是被占着的。**这就是这条链开头所说的「特异性的极端」，换成一个可测量的数字来表达。**",
      src: "A pp.167–168",
      beyond: true,
      beyondNote: "The 10^-10 M figure is on these pages; the definition of Kd as the half-saturating ligand concentration belongs to §5.1 and is carried in here so the number can be read."
    },
    {
      link_en: "and the energy behind that number comes from things already met",
      link_cn: "而支撑这个数字的能量，来自前面早就见过的东西",
      recall_en: "these are the four weak interactions of the water chain, with nothing added",
      recall_cn: "这就是水那一条主线里的四种弱相互作用，一样没多",
      en: "**The binding energy comes from the ordinary hydrophobic effect together with ionic interactions, hydrogen bonds and van der Waals interactions. No new kind of force appears in an antibody.** **So the extreme specificity is a matter of arrangement: a pocket whose shape, polarity and charge match one epitope makes hundreds of these weak contacts at once, and a pocket that matches nothing in particular makes very few.**",
      cn: "**结合能来自普通的疏水效应，加上离子相互作用、氢键和 van der Waals 相互作用。抗体身上并没有出现任何新的作用力。** **所以那份极端的特异性，是安排上的事：一个在形状、极性和电荷上都与某个表位相匹配的口袋，能一次做出成百上千个这样的弱接触；而一个谁也不特别匹配的口袋，做出来的接触寥寥无几。**",
      src: "A pp.167–168",
      see: [{ id: "L-2-1-1", en: "the four weak interactions themselves, and why water sets them up", cn: "四种弱相互作用本身，以及水为什么把它们安排成这样" }]
    },
    {
      link_en: "which is exactly why an antibody ends up on a bench rather than only in a body",
      link_cn: "也正因如此，抗体最后出现在实验台上，而不只是在身体里",
      en: "**Because the specificity is that exact, an antibody can be attached to a label and used as a reagent that finds one protein in a mixture of thousands and reports whether it is present and where it is.** **Immunoblotting, also called a Western blot, is the standard form: the proteins in a sample are separated by size, a labelled antibody is washed over them, and wherever it sticks a band appears. That allows the detection of a minor component in a sample and provides an approximation of its molecular weight at the same time.**",
      cn: "**正因为特异性精确到这个地步，抗体可以被挂上一个标记，当作试剂使用：在成千上万种蛋白的混合物中找出某一种，并报告它在不在、在哪里。** **免疫印迹（immunoblotting，也叫 Western blot）就是标准做法：先把样品中的蛋白按大小分开，再让带标记的抗体从上面流过，它黏在哪里，哪里就出现一条带。这样既能检出样品中的微量组分，又同时给出它分子量的近似值。**",
      src: "A p.168",
      see: [
        { id: "L-9-2-1", en: "labelled antibodies used to say where and when a protein is present", cn: "用带标记的抗体去回答一个蛋白何时、何处存在" },
        { id: "L-25-3-1", en: "where the astronomical diversity of variable domains actually comes from", cn: "可变结构域那份天文数字般的多样性究竟从何而来" }
      ]
    }
  ],
  terms: [
    { en: "ligand", cn: "配体",
      def_en: "Any molecule a protein binds reversibly at a specific site on its surface. The interaction is the subject of this whole chapter, and an antibody is its most specific example.",
      def_cn: "被蛋白质在其表面特定位点上可逆结合的任何分子。这种相互作用是整章的主题，而抗体是其中特异性最高的例子。" },
    { en: "prosthetic group", cn: "辅基",
      def_en: "A permanently attached non-amino-acid part of a protein, such as the iron-carrying haem of haemoglobin. Most protein-ligand binding sites manage without one and are built from side chains alone.",
      def_cn: "永久连在蛋白质上的非氨基酸部件，例如血红蛋白中携铁的血红素。大多数蛋白质–配体结合位点并不需要它，完全由侧链搭成。" },
    { en: "immunoglobulin", cn: "免疫球蛋白",
      def_en: "The protein a B lymphocyte makes against an antigen; antibody is the same word. Five human classes named by heavy chain — IgA, IgD, IgE, IgG, IgM — with κ and λ light chains occurring in all of them.",
      def_cn: "B 淋巴细胞针对抗原制造的蛋白质；「抗体」是同一个意思。人有五类，按重链命名 —— IgA、IgD、IgE、IgG、IgM —— 而 κ 与 λ 两型轻链在五类中都出现。" },
    { en: "antigen", cn: "抗原",
      def_en: "The molecule an antibody is made against and binds. Only a small patch of a large one is actually contacted.",
      def_cn: "抗体为之而生、并会去结合的那个分子。对于一个大分子而言，真正被接触到的只是其表面的一小块。" },
    { en: "epitope", cn: "表位",
      def_en: "The one small part of a large antigen that a given immunoglobulin binds — a surface patch a few residues across. A large protein carries many, so many different antibodies can recognise it at once, and unfolding the protein can abolish one without removing any residue.",
      def_cn: "一个给定的免疫球蛋白所结合的、大抗原上的那一小部分 —— 表面上宽约几个残基的一小块。一个大蛋白身上有很多个，所以能同时被多种抗体识别；而把蛋白解折叠可以毁掉一个表位，却一个残基也没少。" },
    { en: "variable domain", cn: "可变结构域",
      def_en: "One per chain, and the only part whose sequence differs from one antibody to the next. A heavy-chain one and a light-chain one lie against each other at each tip of the Y, and the pocket between them is the antigen-binding site, so both chains are needed to make one.",
      def_cn: "每条链一个，也是抗体之间序列唯一不同的部分。在 Y 的每个顶端，一个重链的和一个轻链的彼此贴合，两者之间的口袋就是抗原结合位点 —— 所以做出一个位点需要两条链同时到场。" },
    { en: "immunoglobulin fold", cn: "免疫球蛋白折叠",
      def_en: "The shape into which the constant domains fold, shared right across the family. It is what makes every IgG the same object structurally while the four variable domains carry all the difference.",
      def_cn: "恒定结构域折叠成的那种形状，整个家族共有。正是它使得每一个 IgG 在结构上都是同一个物件，而全部差异都由四个可变结构域承担。" },
    { en: "induced fit", cn: "诱导契合",
      def_en: "The small conformational change a binding site makes as it closes around its ligand. Common to protein-ligand interactions generally, and part of where binding strength comes from, since a site that adjusts makes more contacts than a rigid one.",
      def_cn: "结合位点在合拢包住配体时发生的那个小小构象变化。它在蛋白质–配体相互作用中普遍存在，也是结合强度的部分来源 —— 会调整的位点比刚性位点能做出更多接触。" },
    { en: "dissociation constant Kd", cn: "解离常数 Kd",
      def_en: "The ligand concentration at which half a protein's binding sites are occupied; smaller means tighter. A typical antibody-antigen pair reaches 10^-10 M.",
      def_cn: "蛋白质结合位点被占据一半时所对应的配体浓度；数值越小，结合越紧。典型的抗原–抗体对可以达到 10^-10 M。" },
    { en: "immunoblotting", cn: "免疫印迹",
      def_en: "Also called a Western blot. Proteins in a sample are separated by size, a labelled antibody is washed over them, and a band appears wherever it sticks. It detects a minor component and approximates its molecular weight in one operation.",
      def_cn: "也叫 Western blot。先把样品中的蛋白按大小分开，再让带标记的抗体流过，它黏在哪里就出现一条带。一次操作既检出微量组分，又给出其分子量的近似值。" }
  ]
};

/* ===================================================================== L-5-3-1 */
window.BIOLITE_SPINE["L-5-3-1"] = {
  /* A brief orientation node in the full app: summary and mustKnow only, no numbered
     points. Twelve steps. */
  assumed: ["protein", "polypeptide", "amino acid", "domain", "conformation",
            "molecule", "ion", "cell", "ATP", "ADP", "energy", "enzyme",
            "hydrolysis", "membrane", "cell membrane", "ligand", "subunit"],
  nodeTitle_en: "Protein interactions modulated by chemical energy: actin and myosin",
  nodeTitle_cn: "受化学能调节的蛋白质相互作用：肌动蛋白与肌球蛋白",
  title_en: "The filaments do not shorten, they slide past each other",
  title_cn: "肌丝并不缩短，它们是彼此滑过去的",
  steps: [
    {
      en: "**The contractile force of muscle is generated by the interaction of two proteins, myosin and actin.** Neither one contracts by itself; the force appears where they touch. **In motor proteins, protein-ligand interactions achieve a special degree of spatial and temporal organization** — the same binding-and-releasing seen elsewhere in this chapter, but timed and repeated so that it adds up to movement in one direction.",
      cn: "**肌肉的收缩力由两种蛋白质的相互作用产生：肌球蛋白（myosin）与肌动蛋白（actin）。** 两者单独都不会收缩；力出现在它们接触的地方。**在马达蛋白中，蛋白质–配体相互作用达到了一种特殊程度的空间与时间组织性** —— 用的还是本章别处那套「结合与释放」，只是被安排了时序、并且不断重复，于是累加成朝一个方向的运动。",
      src: "A p.169, p.172, §5.3"
    },
    {
      link_en: "start with one myosin molecule, because its two halves do two different jobs",
      link_cn: "先看一个肌球蛋白分子，因为它的两半干的是两件不同的事",
      en: "**A myosin molecule is two heavy chains and four light chains. The two heavy chains wind around each other along most of their length into a fibrous coiled-coil tail, and their other ends fold up into a globular head, one per heavy chain, with the light chains bound to it.** **The division of labour is fixed by that shape: the tail is for sticking to other myosins, and the head is the part that touches actin and hydrolyses ATP.**",
      cn: "**一个肌球蛋白分子由两条重链和四条轻链组成。两条重链在大部分长度上彼此缠绕，形成一段纤维状的卷曲螺旋「尾」；它们的另一端各折成一个球状的「头」（每条重链一个），轻链就结合在头上。** **分工由这个形状定死了：尾巴负责和别的肌球蛋白黏在一起，头才是接触肌动蛋白、并水解 ATP 的那一部分。**",
      src: "A pp.169–170"
    },
    {
      link_en: "several hundred of them assemble into the first of the two filaments",
      link_cn: "几百个这样的分子组装成两种肌丝中的第一种",
      en: "**Several hundred myosin molecules associate by their tails into a thick filament, and the assembly is bipolar: the tails all point toward the middle, so the heads project from either end in regular stacked arrays and the two halves face in opposite directions.** **What that buys: a filament with heads pointing outward at both ends can pull on something at each end and draw the two toward its centre.**",
      cn: "**几百个肌球蛋白分子靠尾部相互缔合，形成一根粗肌丝，而这个组装体是双极性的：所有尾巴都朝向中间，于是头部从两端整齐成排地伸出，两半的朝向正好相反。** **这换来了什么：一根两端都有头向外伸的肌丝，可以同时拉住两端的东西，把它们一起朝自己的中心拽。**",
      src: "A p.170"
    },
    {
      link_en: "and the second filament is built from a different protein entirely",
      link_cn: "第二种肌丝则完全由另一种蛋白搭成",
      en: "**The thin filament is F-actin, a polymer made by stringing together globular subunits called G-actin, each of Mr 42,000, together with two accessory proteins bound along its length: troponin and tropomyosin.** Those two do no pulling at all; **their job is switching, and it comes back in the last steps of this chain.**",
      cn: "**细肌丝是 F-肌动蛋白：一种由球状亚基 G-肌动蛋白（每个 Mr 42,000）串接聚合而成的多聚体，此外沿其长度还结合着两个辅助蛋白 —— 肌钙蛋白（troponin）和原肌球蛋白（tropomyosin）。** 这两个蛋白完全不出力；**它们的职责是开关，这一点会在本条主线的最后几步里回来。**",
      src: "A p.170"
    },
    {
      link_en: "one trap here, and it costs marks every year",
      link_cn: "这里有一个陷阱，年年都在丢分",
      en: "**Actin does hydrolyse ATP, and it does so only while the filament is being assembled. Every G-actin subunit in a finished filament is therefore carrying ADP, and that hydrolysis contributes nothing whatever to contraction.** **So when the question is where the energy for contraction comes from, the answer is the myosin head, every time.**",
      cn: "**肌动蛋白确实会水解 ATP —— 但只在肌丝正在组装的时候水解。因此成品肌丝中的每一个 G-肌动蛋白亚基上带的都是 ADP，而这一步水解对收缩毫无贡献。** **所以，一旦问到「收缩的能量从哪来」，答案永远是肌球蛋白的头部。**",
      src: "A p.170"
    },
    {
      link_en: "put the two filaments together and you get the unit that actually contracts",
      link_cn: "把两种肌丝装到一起，才得到真正会收缩的那个单位",
      en: "**The contractile unit is the sarcomere: thick filaments in the middle, interleaved at both ends with thin filaments that run in from either side, and the whole unit bounded at each end by a Z disk. In cross-section each thick filament is surrounded by six thin ones**, which is the geometry that lets one myosin head always find actin within reach.",
      cn: "**收缩单位是 sarcomere（肌节）：粗肌丝居中，两端与从两侧伸进来的细肌丝交错嵌插，整个单位的两端各由一个 Z 盘界定。从横截面看，每根粗肌丝被六根细肌丝围绕** —— 正是这个几何布局，使得任何一个肌球蛋白头部伸手可及的范围内总有肌动蛋白。",
      src: "A pp.170–171"
    },
    {
      link_en: "and now the claim the whole node exists for",
      link_cn: "现在轮到整个节点为之存在的那个论断",
      en: "**Contraction is sliding. The thick and thin filaments slide past each other, the Z disks at the two ends of the sarcomere are drawn closer together, and the I bands — the parts of the striped pattern that contain thin filaments alone — narrow as thin filaments are pulled in among the thick ones. Nothing gets shorter except the sarcomere itself: every filament in it keeps the length it had.**",
      cn: "**收缩就是滑动。粗肌丝与细肌丝彼此滑过，肌节两端的 Z 盘被拉得更近，而 I 带 —— 也就是条纹图案中只含细肌丝的那些部分 —— 随着细肌丝被拉进粗肌丝之间而变窄。除了肌节本身，没有任何东西变短：其中每一根肌丝都保持着原来的长度。**",
      src: "A p.171",
      beyond: true,
      beyondNote: "The narrowing of the I bands and the approach of the Z disks are on the cited page; that an I band is specifically the zone containing thin filaments only is the standard definition of the term and is not spelled out there."
    },
    {
      link_en: "so what does the sliding? One head, doing one thing over and over",
      link_cn: "那么是什么在滑？一个头部，把一件事反复做下去",
      en: "**ATP hydrolysis in the myosin head drives a series of conformational changes in that head. The changes dissociate the head from the F-actin subunit it was holding, and eventually reattach it to a different subunit farther along the thin filament — so the head walks along the actin, and the thick filament thereby slides forward past the adjacent thin filaments.**",
      cn: "**肌球蛋白头部水解 ATP，驱动这个头部发生一连串构象变化。这些变化先让头部从它原本抓着的那个 F-肌动蛋白亚基上解离，最终再把它接到细肌丝上更远处的另一个亚基上 —— 于是头部沿着肌动蛋白「走」了过去，粗肌丝也就因此向前滑过相邻的细肌丝。**",
      src: "A p.171"
    },
    {
      link_en: "which is worth stating carefully, because the obvious reading is the wrong one",
      link_cn: "这一点值得仔细说清楚，因为直觉上的读法是错的",
      recall_en: "the trap two steps up was about which protein spends the ATP; this one is about what the ATP is spent on",
      recall_cn: "前面那个陷阱问的是「谁花掉 ATP」，这一个问的是「ATP 花在什么上」",
      en: "**The energy of ATP hydrolysis buys the release-and-rebind half of the cycle: it is what makes the head let go of one actin subunit and take hold of another one farther along.** A head that could only grip would hold the two filaments in place. **A head that lets go, reaches, and grips again converts a repeated chemical reaction into steady motion in one direction, and that directionality is what a motor protein is.**",
      cn: "**ATP 水解的能量买下的是循环中「松开–重新抓住」的那一半：它让头部放开一个肌动蛋白亚基，再去抓住更远处的另一个。** 一个只会抓紧的头，只能把两根肌丝固定在原地。**而一个会松手、伸出去、再抓住的头，把一个反复进行的化学反应变成了朝单一方向的持续运动 —— 这份方向性，正是「马达蛋白」的含义。**",
      src: "A pp.171–172"
    },
    {
      link_en: "one thing is still missing: what starts it",
      link_cn: "还差一样东西：是什么让它开始",
      en: "**Contraction is stimulated by Ca2+ released from the sarcoplasmic reticulum, an internal membrane compartment inside a muscle cell that holds calcium away from the filaments until a signal arrives.** **So the trigger arrives as a rise in the calcium concentration around the filaments, which is a different question from where the energy comes from.**",
      cn: "**收缩由肌浆网（sarcoplasmic reticulum）释放的 Ca2+ 启动。肌浆网是肌细胞内部的一个膜性区室，在信号到来之前，它把钙扣在肌丝够不着的地方。** **所以扳机的形式是「肌丝周围钙浓度的升高」—— 这和「能量从哪来」是两个不同的问题。**",
      src: "A pp.171–172",
      beyond: true,
      beyondNote: "That Ca2+ is released from the sarcoplasmic reticulum is on the cited pages; describing it as an internal membrane compartment that sequesters calcium is standard cell biology, added so the name is not a bare noun."
    },
    {
      link_en: "and calcium does its work on the thin filament, nowhere near the motor",
      link_cn: "而钙是在细肌丝上干活的，离马达远得很",
      recall_en: "troponin and tropomyosin were named on the thin filament four steps up and left with nothing to do; this is what they do",
      recall_cn: "第 4 步在细肌丝上点了肌钙蛋白和原肌球蛋白的名却没给它们活干 —— 它们干的就是这个",
      en: "**The released Ca2+ binds troponin, and the resulting change in the troponin-tropomyosin complex is what starts the cycle of actin-myosin interactions.** **Calcium never touches myosin. The switch sits on the thin filament, and it works by changing what myosin is allowed to reach — which is why the trigger for contraction and the fuel for contraction are two separate questions with two separate answers.**",
      cn: "**释放出来的 Ca2+ 结合肌钙蛋白，由此引起的肌钙蛋白–原肌球蛋白复合体的变化，才是启动肌动蛋白–肌球蛋白相互作用循环的那一步。** **钙从不碰肌球蛋白。开关长在细肌丝上，它起作用的方式是改变「肌球蛋白被允许够到什么」—— 所以收缩的扳机和收缩的燃料，是两个各自独立的问题，各有各的答案。**",
      src: "A pp.171–172"
    },
    {
      link_en: "one last thing this chain does not cover, said rather than left implied",
      link_cn: "最后有一样这条主线没讲的东西，明说出来，不留白",
      en: "**Myosin walking on actin is one motor among several: kinesin and dynein walk on microtubules instead, and a bacterial flagellar motor turns rather than walks.** Those are separate machines with separate mechanisms, and nothing in the actin-myosin cycle above should be carried across to them unchecked.",
      cn: "**肌球蛋白在肌动蛋白上行走，只是马达蛋白中的一种：驱动蛋白（kinesin）和动力蛋白（dynein）走的是微管，而细菌的鞭毛马达是旋转而不是行走。** 那些是各自独立的机器、各有各的机制，上面肌动蛋白–肌球蛋白循环里的任何一条，都不应该未经核对就搬过去。",
      src: "A p.172, §5.3",
      beyond: true,
      beyondNote: "Section 5.3 names motor proteins as a class; kinesin, dynein and the flagellar motor are not developed on the cited pages and are listed here only to mark the boundary of what the chain above covers.",
      openQuestion_en: "How much of the actin-myosin cycle generalises to other motor proteins is a separate question, and it is settled machine by machine rather than in principle.",
      openQuestion_cn: "肌动蛋白–肌球蛋白这套循环有多少能推广到别的马达蛋白，是另一个问题，而且要一台机器一台机器地去定，没有一个通用的答案。"
    }
  ],
  terms: [
    { en: "myosin", cn: "肌球蛋白",
      def_en: "Two heavy chains and four light chains. The heavy chains wind together into a fibrous coiled-coil tail and end in two globular heads. Tails stick to other molecules of it to build a thick filament; the heads touch actin and hydrolyse ATP.",
      def_cn: "两条重链加四条轻链。重链彼此缠绕成纤维状卷曲螺旋的「尾」，末端折成两个球状的「头」。尾部与同类分子黏合搭成粗肌丝；头部接触肌动蛋白并水解 ATP。" },
    { en: "thick filament", cn: "粗肌丝",
      def_en: "Several hundred myosin molecules joined by their tails, bipolar: tails toward the middle, heads projecting from both ends in stacked arrays. Heads pointing outward at both ends let one filament pull on thin filaments at either side and draw them toward its centre.",
      def_cn: "几百个肌球蛋白分子靠尾部连成，呈双极性：尾朝中间，头从两端成排伸出。两端都有头向外伸，使一根肌丝能同时拉住两侧的细肌丝，把它们朝自己中心拽。" },
    { en: "F-actin and G-actin", cn: "F-肌动蛋白与 G-肌动蛋白",
      def_en: "G is the globular subunit, Mr 42,000; F is the polymer made by stringing many of them together, and it is the backbone of a thin filament. ATP is hydrolysed during assembly alone, so every subunit in a finished filament carries ADP and that hydrolysis powers no contraction.",
      def_cn: "G 是球状亚基，Mr 42,000；F 是把许多个 G 串接起来形成的多聚体，也就是细肌丝的骨干。ATP 只在组装过程中被水解，所以成品肌丝中每个亚基带的都是 ADP，这一步水解不为收缩提供任何动力。" },
    { en: "thin filament", cn: "细肌丝",
      def_en: "F-actin together with troponin and tropomyosin bound along it. The actin is what myosin heads walk on; the other two are the switch that decides whether they may.",
      def_cn: "F-肌动蛋白，外加沿其长度结合的肌钙蛋白与原肌球蛋白。肌动蛋白是肌球蛋白头部行走的路面；另外两个是决定它们能不能走的开关。" },
    { en: "sarcomere", cn: "肌节",
      def_en: "The contractile unit: thick filaments in the middle interleaved at both ends with thin filaments, bounded by a Z disk at each end, each thick filament surrounded by six thin ones in cross-section. During contraction it is the only thing that shortens.",
      def_cn: "收缩单位：粗肌丝居中，两端与细肌丝交错嵌插，两端各由一个 Z 盘界定；横截面上每根粗肌丝被六根细肌丝围绕。收缩时，它是唯一变短的东西。" },
    { en: "sliding filament mechanism", cn: "肌丝滑动机制",
      def_en: "Thick and thin filaments move past one another, drawing the Z disks together and narrowing the I bands, while every filament keeps its own length. Driven by myosin heads that release one actin subunit and rebind a farther one, using the energy of ATP hydrolysis for that release-and-rebind.",
      def_cn: "粗、细肌丝彼此滑过，把 Z 盘拉近、使 I 带变窄，而每根肌丝自身长度不变。动力来自肌球蛋白头部：它松开一个肌动蛋白亚基、再抓住更远处的一个，ATP 水解的能量正是花在这一「松开–重新抓住」上。" },
    { en: "troponin and tropomyosin", cn: "肌钙蛋白与原肌球蛋白",
      def_en: "Two accessory proteins bound along the thin filament. Ca2+ released from the sarcoplasmic reticulum binds troponin, the complex of the two changes, and that change starts the cycle of actin-myosin interactions. Calcium acts here and never on myosin.",
      def_cn: "结合在细肌丝上的两个辅助蛋白。肌浆网释放的 Ca2+ 结合肌钙蛋白，两者形成的复合体随之变化，这一变化启动肌动蛋白–肌球蛋白的相互作用循环。钙作用在这里，从不作用于肌球蛋白。" },
    { en: "sarcoplasmic reticulum", cn: "肌浆网",
      def_en: "An internal membrane compartment of a muscle cell that holds Ca2+ away from the filaments until a signal arrives, then releases it. It makes contraction a triggered event rather than a continuous one.",
      def_cn: "肌细胞内部的膜性区室，在信号到来之前把 Ca2+ 扣在肌丝够不着的地方，收到信号则将其释放。正是它使收缩成为一个被触发的事件，而不是持续进行的过程。" }
  ]
};
