/* Merged spine — nitrogen metabolism. 速通简洁版, ONE spine per TOPIC.

   Five nodes go in and one chain comes out: an overview section that already had a
   spine, and four short sections that had none. The overview carries the enzymology —
   what the cofactors are, what the ATP buys, how the assimilating enzymes are
   controlled. The four short ones carry the half of the subject an overview does not
   develop: where soil nitrate comes from, why soil keeps its nitrogen oxidised, what
   a plant has to spend to get it back down to ammonia, and how the whole thing closes
   on itself in the biosphere. Neither half is the subject on its own.

   The merge rule: the Lehninger telling is the backbone. Other material is folded in
   only where it ADDS — a number, a name, a mass, a worked electron path, a consequence
   the backbone does not draw. Where both say the same thing, the Lehninger sentence
   stands. Where the two disagree — the fixation stoichiometry, which enzyme actually
   assimilates ammonia, how far the ATP is cleaved — the disagreement is stated and
   settled on evidence rather than quietly resolved in one direction.

   Every step keeps a `src` naming the pages it was read from; a step built from both
   accounts carries both, separated by a middle dot. A = the Lehninger overview,
   B = §9.4 of the Czech course book, pp.214–216.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------ 氮代谢 ---- */
window.BIOLITE_SPINE["key:nitrogen-metabolism"] = {
  assumed: [
    "ATP", "ADP", "AMP", "Pi", "pyrophosphate", "NADH", "NADPH", "NAD+", "NADP+",
    "FAD", "FMN", "flavin mononucleotide", "enzyme", "substrate", "Km", "equilibrium",
    "allosteric", "active site", "subunit", "dimer", "tetramer", "conformation",
    "reduction potential", "redox potential", "electron transfer", "electron carrier",
    "terminal electron acceptor", "respiration", "respiratory chain", "anaerobic",
    "aerobic", "oxidative phosphorylation", "proton gradient", "half-life",
    "relative molecular mass", "activation energy", "exergonic", "catalyst",
    "citric acid cycle", "citrate cycle", "chloroplast", "mitochondrion", "cytoplasm",
    "membrane", "phospholipid", "organelle", "chromosome", "DNA", "gene",
    "transcription", "protein", "amino acid", "amino group", "amide", "peptide",
    "glutamate", "glutamine", "alanine", "glycine", "aspartate", "serine",
    "alpha-ketoglutarate", "alpha-oxoglutarate", "oxaloacetate", "transamination",
    "pyridoxal phosphate", "PLP", "tetrahydrofolate", "S-adenosylmethionine",
    "purine", "pyrimidine", "nucleotide", "nucleic acid", "ribose",
    "nitrogen", "N2", "ammonia", "ammonium", "nitrate", "nitrite", "nitric oxide",
    "nitrous oxide", "urea", "hydrogen", "oxygen", "O2", "water", "carbon dioxide",
    "carbohydrate", "sulfur", "iron", "iron-sulfur centre", "heme", "cytochrome",
    "haemoglobin", "molybdenum", "vanadium", "ferredoxin", "flavodoxin", "siroheme",
    "homocitrate", "hydrazine", "cyclobutane", "Cys", "His", "Arg", "Tyr", "cysteine",
    "arginine", "tyrosine", "sulfhydryl", "phosphoryl group", "kinase",
    "bacteria", "archaea", "cyanobacteria", "microorganism", "planctomycetes",
    "Azotobacter", "Escherichia coli", "algae", "plant", "vascular plant", "animal",
    "leaf", "root", "root nodule", "legume", "soil", "symbiosis", "biosphere",
    "food chain", "excretion", "decomposition", "photosynthesis", "light reactions",
    "photosystem", "thylakoid", "crop rotation", "maize", "clover", "alfalfa",
    "waste treatment", "G protein", "cholera", "pertussis", "toxin", "hormone",
    "signalling protein", "GTP", "energy charge", "feedback inhibition", "mammal",
    "rocket fuel", "industry", "pressure", "temperature"
  ],
  nodeTitle_en: "Nitrogen metabolism — fixation, assimilation and the cycle in the biosphere",
  nodeTitle_cn: "氮代谢——固氮、同化，以及生物圈中的循环",
  title_en: "Four-fifths of the air, almost none of it usable: what it costs to open one bond, and what the biosphere does with the nitrogen once it is open",
  title_cn: "空气的五分之四，却几乎全不可用：打开一根键要付多少钱，以及打开之后生物圈拿这些氮做什么",
  terms: [
    {
      en: "the nitrogen web", cn: "氮的「网」",
      def_en: "The organising picture for this whole subject: a vertical axis of the oxidation number of the nitrogen atom, from nitrate at +5 down through nitrite, nitric oxide and nitrous oxide, past N2 at 0, to ammonia at −3. Fixation and assimilation move down it, nitrification moves up it, denitrification and anaerobic ammonia oxidation return to N2 in the middle. The paths cross and rejoin often enough that a single neat circle no longer describes them.",
      def_cn: "整个题目的组织图像：一根竖轴，轴上是氮原子的氧化数，从 +5 的硝酸盐往下，经亚硝酸盐、一氧化氮、一氧化二氮，过 0 价的 N₂，到 −3 的氨。固氮与同化沿轴向下，硝化沿轴向上，反硝化与厌氧氨氧化回到中间的 N₂。这些路径交叉汇合的次数太多，一个整齐的圆圈已经描述不了它们。"
    },
    {
      en: "anammox and the anammoxosome", cn: "anammox 与 anammoxosome",
      def_en: "Anaerobic ammonia oxidation converts ammonia and nitrite straight to N2, and as much as 50–70 % of the biosphere's return of NH3 to N2 may go this way, though it went undetected until the 1980s. It runs through hydrazine — a rocket fuel, toxic, and freely diffusible across an ordinary membrane — which the bacteria keep inside a dedicated organelle walled with ladderane lipids, fused cyclobutane rings stacked into a very dense barrier. The organisms are planctomycetes, which also keep their DNA inside a membrane. In waste treatment they cut ammonia-removal costs by up to 90 %.",
      def_cn: "厌氧氨氧化把氨与亚硝酸盐直接变成 N₂；生物圈中「NH₃ 回到 N₂」这一步可能有 50%–70% 经由它完成，而它直到 1980 年代才被发现。中间体是肼——火箭燃料，剧毒，能自由扩散穿过普通的膜——细菌把它关在一个专门的细胞器里，器壁由梯烷脂质构成，即堆叠成致密屏障的稠合环丁烷环。这类生物是浮霉菌，它们同样把 DNA 包在一层膜里。用于污水处理时，可把除氨成本降低多达 90%。"
    },
    {
      en: "nitrification and denitrification", cn: "硝化与反硝化",
      def_en: "The two bacterial processes that move soil nitrogen up and down the axis without any organism eating it. Soil bacteria oxidise ammonia through nitrite to nitrate, which is a non-toxic store; other soil bacteria run nitrate back down to N2O and N2 gas, using nitrate in place of oxygen as the terminal acceptor of an anaerobic respiratory chain, which is why that direction is also called nitrate respiration.",
      def_cn: "两个细菌过程，把土壤中的氮沿氧化数轴上下搬动，而不经过任何生物的取食。土壤细菌把氨经亚硝酸盐氧化成硝酸盐，后者是一个无毒的贮库；另一些土壤细菌把硝酸盐一路还原回 N₂O 与 N₂ 气体，用硝酸盐代替氧作厌氧呼吸链的末端受体——这也是这个方向又叫「硝酸盐呼吸」的原因。"
    },
    {
      en: "nitrate reductase", cn: "硝酸还原酶",
      def_en: "The cytoplasmic enzyme that reduces NO3− to NO2−, the first of the two steps by which a plant gets soil nitrate back down to ammonia. Relative molecular mass about 500,000; it carries FAD, iron and molybdenum, and takes its electrons from NADH: NADH → FAD → a 2Fe3+/2Fe2+ couple → a 2Mo5+/2Mo6+ couple → NO3− + H+, giving NO2− and water.",
      def_cn: "位于胞质的酶，把 NO₃⁻ 还原为 NO₂⁻，是植物把土壤硝酸盐还原回氨这两步中的第一步。相对分子质量约 500 000；带 FAD、铁和钼，电子来自 NADH：NADH → FAD → 2Fe³⁺/2Fe²⁺ 电对 → 2Mo⁵⁺/2Mo⁶⁺ 电对 → NO₃⁻ + H⁺，生成 NO₂⁻ 和水。"
    },
    {
      en: "nitrite reductase", cn: "亚硝酸还原酶",
      def_en: "The enzyme performing the six-electron reduction of NO2− to NH4+, taking its electrons one at a time through a 4Fe-4S centre and a heme-like cofactor called siroheme. Six electrons at once demands a reductant of very low reduction potential: in a leaf that is ferredoxin reduced by the light reactions, in a root it must be paid for out of respiration. Plants keep it in the chloroplast; non-photosynthetic microorganisms use a different form with NADPH as donor.",
      def_cn: "催化 NO₂⁻ 到 NH₄⁺ 的六电子还原的酶，电子经一个 4Fe-4S 中心和一个类血红素辅因子 siroheme 一次一个地送入。一次交出六个电子要求一个还原电位极低的还原剂：在叶片里那就是被光反应还原的铁氧还蛋白，在根里则只能由呼吸作用买单。植物把它放在叶绿体；非光合微生物用的是另一种形式，供体为 NADPH。"
    },
    {
      en: "the nitrogenase complex", cn: "固氮酶复合体",
      def_en: "Two proteins. The reductase, also called the Fe protein, Mr 60,000, is a dimer holding one 4Fe-4S centre between its subunits with an ATP/ADP site on each, and it delivers one electron per binding cycle at a cost of two ATP. The dinitrogenase, also called the Mo-Fe protein, Mr 240,000, is an α2β2 tetramer carrying a P cluster (two 4Fe-4S centres sharing a sulfur) and the FeMo cofactor — 7 Fe, 9 inorganic S, a Cys side chain, a central carbon atom, and a Mo bound to three sulfurs, a His and two oxygens of homocitrate. Electrons reach it from cellular metabolism through ferredoxin and flavodoxin.",
      def_cn: "两个蛋白。还原酶，又称 Fe 蛋白，Mr 60 000，是二聚体，两亚基之间夹一个 4Fe-4S 中心，每个亚基上各有一个 ATP／ADP 位点；每结合一次交出一个电子，代价两个 ATP。固氮酶本体，又称 Mo-Fe 蛋白，Mr 240 000，是 α₂β₂ 四聚体，带 P 簇（两个共用一个硫的 4Fe-4S 中心）与 FeMo 辅因子——7 个 Fe、9 个无机 S、一个 Cys 侧链、一个中央碳原子，以及一个结合三个硫、一个 His 和高柠檬酸两个氧的钼。电子由细胞代谢经铁氧还蛋白与黄素氧还蛋白送来。"
    },
    {
      en: "the fixation stoichiometry", cn: "固氮的化学计量",
      def_en: "N2 + 10 H+ + 8 e− + 16 ATP → 2 NH4+ + 16 ADP + 16 Pi + H2. Six of the eight electrons reduce N2 and two make one H2, whose production is an obligate part of the mechanism although what it is biologically for is unknown. Electrons cross one at a time, two ATP per cycle, eight cycles. The simpler equation N2 + 6 H+ + 6 e− → 2 NH3 at one ATP per electron is still widely printed and accounts for no hydrogen at all.",
      def_cn: "N₂ + 10 H⁺ + 8 e⁻ + 16 ATP → 2 NH₄⁺ + 16 ADP + 16 Pᵢ + H₂。八个电子中六个用来还原 N₂，两个生成一分子 H₂；放出这个 H₂ 是机制中必然的一环，尽管它在生物学上有何用处并不清楚。电子一次一个地交出，每轮两个 ATP，共八轮。更简单的写法 N₂ + 6 H⁺ + 6 e⁻ → 2 NH₃、每电子一个 ATP 仍被广泛印行，而它完全没有交代氢气。"
    },
    {
      en: "leghemoglobin", cn: "豆血红蛋白",
      def_en: "An oxygen-binding heme protein made by a legume and filling its root nodules, where the bacterial symbionts are bathed in it. It holds all the free oxygen so that none reaches the oxygen-sensitive fixing enzyme, while still feeding oxygen efficiently to the bacterial electron-transfer chain — a buffer rather than a barrier. The surplus ammonia the symbionts release into the soil is the basis of crop rotation.",
      def_cn: "由豆科植物合成、充满其根瘤的一种结合氧的血红素蛋白，共生细菌就浸在其中。它把游离的氧全部结合住，使氧到不了那个对氧敏感的固氮酶跟前，同时仍能高效地把氧交给细菌的电子传递链——是缓冲器，不是屏障。共生菌释放到土壤里的富余氨，正是轮作的依据。"
    },
    {
      en: "glutamine synthetase and glutamate synthase", cn: "谷氨酰胺合成酶与谷氨酸合酶",
      def_en: "The main route by which ammonia enters biology. The synthetase adds NH4+ to glutamate in two steps through an enzyme-bound γ-glutamyl phosphate, giving glutamine, ADP and Pi; glutamate synthase then reductively aminates α-ketoglutarate using that glutamine as donor, giving two glutamates. Aminating α-ketoglutarate directly with glutamate dehydrogenase is a minor third route, since its equilibrium favours the reactants and its Km for NH4+ near 1 mM is too high to matter in a mammal. Animals lack glutamate synthase entirely; plants have a ferredoxin-driven form of it.",
      def_cn: "氨进入生物界的主要路线。合成酶分两步把 NH₄⁺ 加到谷氨酸上，中间经一个与酶结合的 γ-谷氨酰磷酸，产物是谷氨酰胺、ADP 与 Pᵢ；谷氨酸合酶再以这个谷氨酰胺为供体，把 α-酮戊二酸还原氨基化，生成两分子谷氨酸。用谷氨酸脱氢酶一步给 α-酮戊二酸加氨是次要的第三条路线，因为它的平衡偏向反应物，且它对 NH₄⁺ 的 Km 约 1 mM，在哺乳动物体内高到没有意义。动物完全没有谷氨酸合酶；植物另有一种由铁氧还蛋白驱动的形式。"
    },
    {
      en: "cumulative feedback inhibition", cn: "累积反馈抑制",
      def_en: "How bacterial glutamine synthetase is controlled: alanine, glycine and at least six end products of glutamine metabolism each inhibit only partially, but their combined effect is more than additive and all eight together virtually stop the enzyme. The logic is that no single downstream product may close a shared entry point on its own, while a general excess may. Adenylylation of Tyr397 is superimposed and makes the enzyme more sensitive to those inhibitors; a further cascade through the PII protein decides the adenylylation and also controls transcription of the gene.",
      def_cn: "细菌谷氨酰胺合成酶的调控方式：丙氨酸、甘氨酸，以及至少六种谷氨酰胺代谢的终产物，每一种单独作用都只造成部分抑制，但合在一起的效果超过简单相加，八种同时存在几乎把酶完全停下。其逻辑是：任何单一的下游产物都无权独自关掉一个共用入口，而「普遍过剩」这件事可以。叠在上面的是 Tyr397 的腺苷酰化，它让酶对上述抑制剂更敏感；再上一层由 PII 蛋白构成的级联决定腺苷酰化，并同时控制该基因的转录。"
    },
    {
      en: "glutamine amidotransferase", cn: "谷氨酰胺酰胺转移酶",
      def_en: "The enzyme class that hands the amide nitrogen of glutamine to more than a dozen biosynthetic acceptors. Two domains: one binds glutamine, where a conserved Cys attacks the amide through a glutamyl-enzyme intermediate and frees NH3; the other binds the acceptor, usually after it has been activated, for instance by a phosphoryl group from ATP. The NH3 travels between them through an internal channel, so a toxic, freely diffusible intermediate never enters solution — which is why glutamine rather than free NH4+ is the practical nitrogen donor.",
      def_cn: "把谷氨酰胺的酰胺氮交给十几种生物合成受体的一类酶。两个结构域：一个结合谷氨酰胺，其中一个保守的 Cys 经谷氨酰-酶中间体进攻酰胺、放出 NH₃；另一个结合受体，而受体通常已被活化过，例如接上一个来自 ATP 的磷酰基。NH₃ 沿一条内部通道在两者之间穿行，于是一个有毒且能自由扩散的中间体从不进入溶液——这正是十几条生物合成路线实际用谷氨酰胺、而不用游离 NH₄⁺ 作氮供体的原因。"
    }
  ],
  steps: [
    {
      en: "Four-fifths of the atmosphere is N2 — 78 % of the air — and living things cannot use any of it. **One bond is the reason: the nitrogen-nitrogen triple bond has a bond energy of 930 kJ/mol, which makes N2 far too unreactive to be of any use.** Converting it into a form life can use is called nitrogen fixation, and only bacteria and archaea can carry it out. Higher plants, algae and animals have no such ability at all and must be handed their nitrogen already in some other form: as ammonia, as nitrate, or bound into organic molecules, above all into amino acids. More than 10^11 kg of nitrogen is fixed biologically each year, and industrial sources now supply nearly as much again.",
      cn: "大气的五分之四是 N₂——占空气的 78%——而生物一点也用不上。**原因就在一根键：氮氮三键的键能是 930 kJ/mol，这使 N₂ 惰性到完全无法被利用。** 把它变成生命能用的形式，这件事叫固氮（nitrogen fixation），而能做这件事的只有细菌和古菌。高等植物、藻类和动物根本没有这个能力，必须以别的现成形式被喂到氮：氨、硝酸盐，或者已经结合进有机分子——首先是氨基酸。生物圈每年固定的氮超过 10¹¹ kg，如今工业来源的量已几乎与之相当。",
      src: "A p.795–797, §22.1 · B §9.4, p.214"
    },
    {
      link_en: "and the whole subject fits on one axis, worth drawing before any pathway",
      link_cn: "而整个题目可以画在一根轴上——在看任何通路之前先把它画出来",
      en: "Draw a vertical axis of the oxidation number of the nitrogen atom: nitrate at +5 at the top, down through nitrite, nitric oxide and nitrous oxide, past N2 gas at 0, to ammonia at −3 at the bottom. **Every named process is then one movement along that axis: fixation and assimilation go down it, nitrification goes up it, and denitrification and anammox come back to N2 in the middle.** The paths cross and rejoin often enough that nitrogen moves through a web rather than around a neat circle, but the axis holds whatever the arrows do.",
      cn: "画一根竖轴，轴上是氮原子的氧化数：顶端是硝酸盐（+5），往下依次是亚硝酸盐、一氧化氮、一氧化二氮，经过 0 价的 N₂ 气体，一直到底端 −3 的氨。**这样每一个有名字的过程都成了沿这根轴的一次移动：固氮和同化向下，硝化向上，反硝化与 anammox 回到中间的 N₂。** 这些路径交叉汇合的次数多到「循环」这个词不够用——氮是在一张网里移动的；但无论箭头怎么画，这根轴都成立。",
      src: "A p.795, figure 22-1"
    },
    {
      link_en: "and most biological ammonia never came out of the air at all",
      link_cn: "而生物界的氨，大部分根本不是从空气里来的",
      en: "**More than 90 % of the NH4+ made by plants, algae and microorganisms comes from nitrate assimilation: a two-step reduction of nitrate already in the soil, bypassing atmospheric N2 completely.** Nitrate reductase does the first of those two steps, reducing nitrate to nitrite. It is a large enzyme, relative molecular mass about 500,000, it sits in the cytoplasm rather than in the chloroplast, and it carries FAD together with iron and molybdenum. The electron path runs the whole way: NADH hands two electrons to FAD, FAD passes them through cysteine sulfhydryl groups and an iron centre that is a cytochrome b557, then to a molybdenum cofactor, and finally onto nitrate with a proton, giving nitrite and water. Molybdenum is the atom that actually touches the nitrogen, and that turns out to be a recurring design.",
      cn: "**植物、藻类和微生物产生的 NH₄⁺ 中，超过 90% 来自硝酸盐同化：把土壤里本来就有的硝酸盐分两步还原，完全绕开大气中的 N₂。** 这两步中的第一步由硝酸还原酶完成，把硝酸盐还原成亚硝酸盐。它是个大酶，相对分子质量约 500 000，位于胞质而不是叶绿体，带着 FAD 以及铁和钼。电子路径可以一路写下来：NADH 把两个电子交给 FAD，FAD 经半胱氨酸巯基和一个其实是细胞色素 b₅₅₇ 的铁中心往下传，再传给一个钼辅因子，最后连同一个质子交给硝酸盐，生成亚硝酸盐和水。真正与氮接触的原子是钼——而这是一个会反复出现的设计。",
      src: "A p.796 · B §9.4, p.215"
    },
    {
      link_en: "the second step needs a reductant strong enough to be hard to come by, and that one requirement settles where it can happen",
      link_cn: "第二步需要一个强到不容易弄到的还原剂，而仅这一个要求就决定了它能在哪里发生",
      en: "Nitrite reductase carries out the second step, a six-electron reduction of nitrite straight to NH4+, taking its electrons one at a time from ferredoxin through a 4Fe-4S centre and then a heme-like cofactor called siroheme. Six electrons demands an unusually strong reductant, one of very low reduction potential, and where that reductant can be found decides where the step can run. **In a leaf it is ferredoxin reduced by the light reactions of photosynthesis, so nitrogen assimilation is a direct consumer of light; in a root the same job is paid for out of respiration.** In plants the enzyme sits in the chloroplast, next to the light reactions that feed it; non-photosynthetic microorganisms use a different nitrite reductase that takes NADPH as its donor.",
      cn: "第二步由亚硝酸还原酶完成：把亚硝酸盐一次六电子直接还原成 NH₄⁺，电子由铁氧还蛋白一次一个地供给，经一个 4Fe-4S 中心，再经一个类血红素的辅因子 siroheme。六个电子要求一个特别强、还原电位极低的还原剂，而这个还原剂能从哪里来，就决定了这一步能在哪里跑。**在叶片里，它是被光反应还原的铁氧还蛋白，所以氮同化是光合作用的直接消费者；在根里，同样这件活儿由呼吸作用买单。** 在植物中这个酶位于叶绿体，就挨着供给它的光反应；非光合微生物用的是另一种亚硝酸还原酶，供体是 NADPH。",
      src: "A p.796 · B §9.4, p.216",
      see: [{ id: "9-13", en: "where reduced ferredoxin comes off the light reactions", cn: "还原态铁氧还蛋白从光反应的哪里出来" }]
    },
    {
      link_en: "so where did all that soil nitrate come from, if a plant only ever reduces it?",
      link_cn: "既然植物只会还原它，那土壤里的硝酸盐又是从哪儿来的？",
      recall_en: "this is the upward direction on the axis two steps back",
      recall_cn: "这是两步前那根轴上向上的方向",
      en: "Reduced nitrogen returns to the soil in excreta and, after death, through the decomposition of plant and animal bodies, and soil bacteria then oxidise all of that ammonia up through nitrite to nitrate, a process called nitrification. **Soil holds its nitrogen as nitrate rather than as ammonia because nitrate is non-toxic, and the price of that storage form is that a plant taking it up must reduce it all the way back to ammonia.** Other soil bacteria run the reverse, denitrification, written with general coefficients because the mix of gaseous products varies: x NO3− + y NADH + y H+ → (N2O, N2) + y NAD+ + z H2O. It is also called nitrate respiration, because under anaerobic conditions nitrate stands in for oxygen as the terminal electron acceptor of a respiratory chain. One printed version of that equation lists N2H2, diimide, among the products; N2O and N2 are the recognised ones and the safe answer.",
      cn: "还原态的氮以排泄物的形式、以及死亡后经动植物遗体的分解回到土壤，随后土壤细菌把这些氨经亚硝酸盐一路氧化成硝酸盐，这个过程叫硝化（nitrification）。**土壤把氮存成硝酸盐而不是氨，是因为硝酸盐无毒；而这种储存形式的代价是：植物吸收之后必须把它一路还原回氨。** 另一些土壤细菌走相反方向，即反硝化（denitrification），方程用通用系数写，因为气态产物的组合是变的：x NO₃⁻ + y NADH + y H⁺ →（N₂O, N₂）+ y NAD⁺ + z H₂O。它又叫硝酸盐呼吸，因为在厌氧条件下硝酸盐顶替氧，充当呼吸链的末端电子受体。有的版本把 N₂H₂（二亚胺）也列进产物；被公认的是 N₂O 和 N₂，背方程时答这两个稳妥。",
      src: "B §9.4, p.215"
    },
    {
      link_en: "one arrow returning nitrogen to N2 was missed entirely until the 1980s, and it may be the largest of them",
      link_cn: "把氮送回 N₂ 的箭头里，有一支直到 1980 年代才被发现，而它可能是最大的一支",
      recall_en: "denitrification in the step above is the arrow that was already known",
      recall_cn: "上一步的反硝化，是早就知道的那一支",
      en: "**Anammox is anaerobic ammonia oxidation: bacteria converting ammonia and nitrite directly to N2, and as much as 50 % to 70 % of the biosphere's return of NH3 to N2 may run through it.** The chemistry is strange. It proceeds through hydrazine, N2H4, which is used as a rocket fuel, is highly toxic, and diffuses straight across an ordinary phospholipid membrane. The bacteria answer that by keeping the hydrazine inside a dedicated organelle, the anammoxosome, whose membrane is built from ladderane lipids — fused cyclobutane rings that stack into a barrier dense enough to slow the escape. How a cell makes strained cyclobutane rings is not known. The organisms are planctomycetes, which turned out to keep their chromosomal DNA inside a membrane as well, a bacterial nucleus. In waste treatment, using them cuts the cost of removing ammonia by up to 90 %.",
      cn: "**anammox 就是厌氧氨氧化：一类细菌把氨和亚硝酸盐直接变成 N₂；而生物圈里「NH₃ 回到 N₂」这一步，可能有多达 50%–70% 是经由它完成的。** 它的化学很怪。中间体是肼（hydrazine, N₂H₄）——一种被用作火箭燃料的分子，剧毒，而且能直接扩散穿过普通的磷脂膜。细菌的对策是把肼关在一个专门的细胞器里，叫 anammoxosome；它的膜由梯烷脂质（ladderane）构成，即一串串稠合的环丁烷环，堆叠成致密到足以拖慢肼外逃的屏障。细胞怎么造出张力这么大的环丁烷环，目前不知道。这类生物是浮霉菌（planctomycetes），人们后来还发现它们的染色体 DNA 也被包在一层膜里——一个细菌的「细胞核」。在污水处理中用它们，可以把除氨成本降低多达 90%。",
      src: "A p.796, p.799, box 22-1"
    },
    {
      link_en: "now back down the axis to the expensive arrow: what fixation itself costs",
      link_cn: "现在沿轴回到最贵的那支箭：固氮本身要花多少",
      en: "The equation is worth memorising whole: N2 + 10 H+ + 8 e− + 16 ATP → 2 NH4+ + 16 ADP + 16 Pi + H2. **Eight electrons rather than six, because six of them reduce N2 while the other two make one molecule of H2, and releasing that H2 is an obligatory part of the mechanism.** Sixteen ATP, because the electrons are handed over one at a time: a reduced reductase binds, passes a single electron, and dissociates, and each turn of that cycle hydrolyses two ATP — eight cycles at two ATP each. A simpler stoichiometry is still widely printed and still examined, N2 + 6 H+ + 6 e− → 2 NH3 at one ATP per electron and therefore 6 ATP, and it is internally consistent. What settles the disagreement is the hydrogen: H2 comes off every time nitrogen is fixed, and a six-electron equation has nothing to make it out of.",
      cn: "这条方程值得整条背下来：N₂ + 10 H⁺ + 8 e⁻ + 16 ATP → 2 NH₄⁺ + 16 ADP + 16 Pᵢ + H₂。**为什么是八个电子而不是六个：六个用来还原 N₂，另外两个生成一分子 H₂，而放出这个 H₂ 是反应机制中必然的一部分。** 为什么是十六个 ATP：因为电子是一次一个交出去的——一个还原态的还原酶结合上去、递出一个电子、再解离，每一轮循环水解两个 ATP，八轮，每轮两个。另有一个更简单的化学计量至今仍被广泛印行、也仍在考：N₂ + 6 H⁺ + 6 e⁻ → 2 NH₃，每电子一个 ATP，因而是 6 个 ATP；它自身是自洽的。真正了结这场分歧的是氢气：每固定一次氮就放出一次 H₂，而六电子方程里根本没有东西可以用来生成它。",
      src: "A p.797, p.800 · B §9.4, p.214",
      openQuestion_en: "What the obligatory H2 is biologically for is not understood. Say that the two extra electrons are mechanistically required, and stop there.",
      openQuestion_cn: "那个必然放出的 H₂ 在生物学上有什么用，目前并不清楚。答题时说「这两个额外的电子在机制上是必需的」，到此为止。"
    },
    {
      link_en: "and the six-ATP scheme is worth reading off in full, because it counts differently",
      link_cn: "那个六 ATP 的图值得整张读一遍，因为它的账是另一种算法",
      en: "The scheme drawn with the six-electron equation makes its ATP accounting explicit: the process is ATP-dependent and probably requires 1 ATP for each transferred electron, so 6 ATP → 6 ADP + Pi is written alongside the six electrons that pass from cellular metabolism through ferredoxin and flavodoxin into the two nitrogenase proteins. **One ATP per transferred electron, rather than two per delivery cycle, is the whole of the difference between a scheme showing 6 ATP and an equation demanding 16.**",
      cn: "与六电子方程一起画出的那张图，把 ATP 的账算得很明白：该过程依赖 ATP，很可能每传递一个电子需要 1 个 ATP，因此在那六个电子旁边写着 6 ATP → 6 ADP + Pᵢ；这六个电子从细胞代谢经铁氧还蛋白、黄素氧还蛋白，进入固氮酶的两个蛋白。**每传递一个电子算一个 ATP，而每一轮递送算两个 ATP——6 ATP 的图与 16 ATP 的方程，差别全部在这里。**",
      src: "B §9.4, p.215"
    },
    {
      link_en: "for scale, put the two ways of breaking that bond side by side",
      link_cn: "为了有个尺度感，把打断那根键的两种办法放在一起比",
      en: "Industry breaks the same bond in the Haber process, at 400–500 °C and hundreds of atmospheres of pressure over a special catalyst. **A bacterium does it at ordinary temperature and 0.8 atm of nitrogen, paying in ATP instead of in heat and pressure**, and the reaction is exergonic either way — so the ATP buys passage over an activation barrier. That is the single most useful thing to be able to say about fixation: the difficulty was never in the thermodynamics.",
      cn: "工业上打断同一根键用的是哈伯法（Haber process）：400–500 °C、几百个大气压，外加特殊催化剂。**一个细菌在常温、0.8 atm 氮分压下做成同一件事，代价从高温高压换成了 ATP；而这个反应无论哪条路都是放能的——所以那些 ATP 买的是翻过活化能垒。** 关于固氮，这是最值得能说出口的一句话：难点从来不在热力学。",
      src: "A p.797 · B §9.4, p.214"
    },
    {
      link_en: "so what is the enzyme, and where does it get electrons of that quality",
      link_cn: "那么这个酶是什么，它又从哪里弄到品质这么高的电子",
      en: "Only certain bacteria and archaea fix nitrogen, and they are called diazotrophs: cyanobacteria, methanogenic archaea, free-living soil bacteria such as Azotobacter, and the symbionts inside legume root nodules. Their nitrogenase complex is two proteins, often labelled simply the Fe protein and the Mo-Fe protein. **Dinitrogenase reductase, the Fe protein, Mr 60,000, is a dimer with one 4Fe-4S centre between its two subunits and an ATP site on each**; dinitrogenase, the Mo-Fe protein, Mr 240,000, is an α2β2 tetramer. Dinitrogenase carries two metal clusters: the P cluster, which is two 4Fe-4S centres sharing a sulfur atom, and the FeMo cofactor — 7 Fe, 9 inorganic S, a Cys side chain, one carbon atom sitting at the very centre of the cluster, and a molybdenum bound to three sulfurs, a His side chain and two oxygens from a molecule of homocitrate. That central carbon and that homocitrate are what make it more than an ordinary iron-sulfur centre, and molybdenum is once again the atom in contact with nitrogen. Electrons reach it from the cell's ordinary metabolism: two carriers deliver them, ferredoxin and flavodoxin, a flavin mononucleotide protein. Two further nitrogenases exist, one putting vanadium where the molybdenum was and one a second iron atom; the molybdenum type is ancestral and is present in every nitrogen-fixing bacterium and archaeon.",
      cn: "只有某些细菌和古菌能固氮，它们叫固氮微生物（diazotroph）：蓝细菌、产甲烷古菌、像 Azotobacter 这样的自由生活土壤细菌，以及豆科根瘤里的共生菌。它们的固氮酶复合体是两个蛋白，常被直接标作 Fe 蛋白和 Mo-Fe 蛋白。**固氮酶还原酶，即 Fe 蛋白，Mr 60 000，是二聚体，两个亚基之间夹着一个 4Fe-4S 中心，每个亚基上各有一个 ATP 位点；固氮酶本体，即 Mo-Fe 蛋白，Mr 240 000，是 α₂β₂ 四聚体。** 固氮酶本体带两个金属簇：P 簇，即两个共用一个硫原子的 4Fe-4S 中心；以及 FeMo 辅因子——7 个 Fe、9 个无机 S、一个 Cys 侧链、一个正坐在簇中央的碳原子，还有一个钼，它结合着三个硫、一个 His 侧链，以及来自一分子高柠檬酸的两个氧。正是那个中央碳原子和那个高柠檬酸，让它不只是一个普通铁硫中心；而与氮接触的原子又一次是钼。电子从细胞代谢经两种载体到来：铁氧还蛋白，以及含黄素单核苷酸的黄素氧还蛋白。此外还有另外两种固氮酶，一种在钼的位置换成钒，一种换成第二个铁原子；含钼的那种是祖先型，存在于每一种固氮细菌和古菌里。",
      src: "A p.797, p.800 · B §9.4, p.214–215"
    },
    {
      link_en: "and now what those sixteen ATP actually buy, since they are not buying thermodynamics",
      link_cn: "那么这十六个 ATP 到底买了什么——反正买的不是热力学",
      recall_en: "the reaction was already exergonic two steps up, so the ATP does something else",
      recall_cn: "两步前说过这个反应本来就是放能的，所以 ATP 是花在别处",
      en: "ATP binding and ATP hydrolysis change the shape of dinitrogenase reductase, and two measurable things follow. Electrochemically, binding two ATP shifts its reduction potential from −300 mV to −420 mV, turning a reductant that is not strong enough into one that is. **Geometrically, the same binding brings that 4Fe-4S centre from 18 Å to 14 Å from the P cluster, and four ångströms of approach separates an electron transfer too slow to matter from one that works.** The ATP are hydrolysed just before the electron actually moves. The two regions of the reductase that change shape are structurally homologous with the switch 1 and switch 2 regions of GTP-binding signalling proteins — the same nucleotide-driven switch, used here to move an electron instead of to relay a hormone signal.",
      cn: "ATP 的结合与水解改变固氮酶还原酶的构象，由此有两个可测量的后果。电化学上：结合两个 ATP 使它的还原电位从 −300 mV 移到 −420 mV，把一个「不够强」的还原剂变成一个「够强」的。**几何上：同一次结合把那个 4Fe-4S 中心与 P 簇的距离从 18 Å 拉近到 14 Å，而这 4 Å 的靠近，正是「慢到没有意义的电子转移」与「行得通的电子转移」之间的差别。** ATP 是在电子真正移动之前才被水解的。还原酶上发生构象改变的那两个区域，在结构上与 GTP 结合信号蛋白的 switch 1、switch 2 区同源——同一种由核苷酸驱动的开关，在这里用来搬一个电子，而不是传递激素信号。",
      src: "A p.800",
      openQuestion_en: "How electrons pass from the P cluster to the FeMo cofactor, and how eight of them are accumulated before ammonia is released, is not known in detail. Two hypotheses fit the data, both with the Mo atom central.",
      openQuestion_cn: "电子如何从 P 簇传到 FeMo 辅因子、以及八个电子是怎样被攒起来的，细节尚不清楚。有两个假说与现有数据相容，两者都把钼原子放在中心位置。"
    },
    {
      link_en: "and the whole apparatus has one fatal weakness",
      link_cn: "而整套装置有一个致命弱点",
      en: "**Nitrogenase is destroyed by oxygen: in air the reductase has a half-life of 30 seconds and dinitrogenase 10 minutes, so fixation is less a matter of running a reaction than of protecting a catalyst.** Free-living fixers cope in three ways: some live only anaerobically; some stop making the enzyme whenever oxygen is present; and some aerobes, such as Azotobacter vinelandii, partially uncouple electron transfer from ATP synthesis so as to burn oxygen off as fast as it enters, with the striking result that a culture fixing nitrogen warms up. Bacteria in legume root nodules solve that problem and the energy problem together. The plant feeds them carbohydrate and citric acid cycle intermediates, which may let them fix hundreds of times more nitrogen than their free-living relatives, and bathes them in leghemoglobin, an oxygen-binding heme protein it makes itself: leghemoglobin holds all the free oxygen so that none reaches the enzyme, while still delivering oxygen efficiently to the bacterial electron-transfer chain — an oxygen buffer rather than an oxygen barrier. The symbionts make far more ammonia than the plant needs and release the surplus into the soil, which is the whole basis of crop rotation, alternating a non-legume such as maize with a legume such as clover or alfalfa.",
      cn: "**固氮酶会被氧气毁掉：在空气中，还原酶的半衰期是 30 秒，固氮酶本体是 10 分钟；所以固氮与其说是让反应跑起来，不如说是保护一个催化剂。** 自由生活的固氮菌有三种应对：有的干脆只在厌氧条件下生活；有的一旦有氧就停止合成这个酶；还有些好氧种，比如 Azotobacter vinelandii，把电子传递与 ATP 合成部分解偶联，好把进来的氧一进来就烧掉——结果是一个正在固氮的培养物会升温。豆科根瘤里的细菌则把氧气问题和能量问题一起解决了。植物供给它们碳水化合物和柠檬酸循环中间物，这可能让它们固定的氮比自由生活的同类多出几百倍；同时植物把它们泡在自己合成的豆血红蛋白（leghemoglobin）里，一种结合氧的血红素蛋白：它把游离的氧全部结合住，使氧到不了那个酶跟前，同时又能高效地把氧交给细菌的电子传递链——是氧的缓冲器，不是氧的屏障。这些共生菌造出的氨远多于植物所需，把富余的释放进土壤，这就是轮作的全部依据：把玉米这类非豆科作物与三叶草、苜蓿这类豆科作物轮着种。",
      src: "A p.801–802"
    },
    {
      link_en: "sixteen ATP a time is not money a cell spends carelessly",
      link_cn: "一次十六个 ATP，这不是细胞会随便花的钱",
      en: "Fixation is regulated on three time scales. Immediately, by energy charge: a high ADP concentration, which reports a low ATP concentration, strongly inhibits nitrogenase. Over hours, by product: NH4+ represses the roughly 20 nif genes, so a bacterium that finds ammonia around it stops building the machinery at all — and that same figure of about 20 genes, many of them needed only to build the cofactors and insert them, is why simply moving fixation into a crop plant has never worked, quite apart from the oxygen problem the new host would still have. And covalently, in some species: **an ADP-ribosyl group moves from NADH onto one specific Arg residue of the reductase and switches fixation off** — the same modification cholera toxin makes on a G protein.",
      cn: "固氮在三个时间尺度上被调控。即时的，看能量状态：高浓度的 ADP——它报告的是低浓度的 ATP——强烈抑制固氮酶。数小时尺度的，看产物：NH₄⁺ 抑制那大约 20 个 nif 基因，所以一个在周围发现了氨的细菌会干脆不再制造这套机器；而同样这个「大约 20 个基因」的数字（其中许多只是为了合成辅因子并把它们装进去），正是「把固氮直接搬进作物」始终没有成功的原因——更不用说新宿主自己还要解决氧气问题。**还有共价修饰，见于某些种：一个 ADP-核糖基从 NADH 转到还原酶上某个特定的 Arg 残基上，固氮就被关掉——这与霍乱毒素对 G 蛋白做的是同一种修饰。**",
      src: "A p.801–802"
    },
    {
      link_en: "once ammonia exists, however it was made, it enters biology through exactly two amino acids",
      link_cn: "氨一旦存在——不管它是怎么来的——它只经由两个氨基酸进入生物界",
      recall_en: "the same NH4+ that nitrite reductase made in a leaf four steps back",
      recall_cn: "就是四步前叶片里亚硝酸还原酶做出来的那个 NH₄⁺",
      en: "Glutamate and glutamine are the entry point: glutamate supplies the amino group of most other amino acids by transamination, and the amide nitrogen of glutamine supplies a wide range of biosyntheses. **Glutamine synthetase adds NH4+ to glutamate in two steps, through an enzyme-bound γ-glutamyl phosphate intermediate, giving glutamine plus ADP and Pi** — a phosphoryl transfer from the γ-phosphate of ATP. Glutamate synthase, also called glutamate:oxoglutarate aminotransferase and hence GOGAT, then uses that glutamine to reductively aminate α-ketoglutarate, giving two glutamates; net, the pair turns α-ketoglutarate, NH4+, NAD(P)H and ATP into glutamate. The carbon skeleton that receives the nitrogen is α-ketoglutarate pulled out of the citric acid cycle, which is the one concrete junction between carbon metabolism and nitrogen metabolism. The synthetase reaction is sometimes written as going all the way to AMP plus two phosphates; that would need a glutamyl-adenylate intermediate rather than the γ-glutamyl phosphate that is actually observed, so ADP and Pi is the product pair to give.",
      cn: "入口只有两个氨基酸：谷氨酸和谷氨酰胺。谷氨酸经转氨作用为其余大多数氨基酸提供氨基，谷氨酰胺的酰胺氮则为一大批生物合成反应供氮。**谷氨酰胺合成酶分两步把 NH₄⁺ 加到谷氨酸上，中间经过一个与酶结合的 γ-谷氨酰磷酸中间体，产物是谷氨酰胺加 ADP 和 Pᵢ——这是一次来自 ATP γ-磷酸的磷酰基转移。** 谷氨酸合酶（又名 glutamate:oxoglutarate aminotransferase，缩写 GOGAT）再用这个谷氨酰胺把 α-酮戊二酸还原氨基化，生成两分子谷氨酸；净结果是这一对把 α-酮戊二酸、NH₄⁺、NAD(P)H 和 ATP 变成谷氨酸。接受氮的碳骨架是从柠檬酸循环里抽出来的 α-酮戊二酸，这是碳代谢与氮代谢之间唯一那个具体的接口。这个合成酶反应有时被写成一路断到 AMP 加两个磷酸；那需要一个谷氨酰-腺苷酸中间体，而实际观察到的是 γ-谷氨酰磷酸，所以产物应当答 ADP 和 Pᵢ。",
      src: "A p.802–803 · B §9.4, p.215",
      beyond: true,
      beyondNote: "The γ-glutamyl phosphate intermediate and the ADP + Pi products are both on A p.802–803, and the AMP + 2 Pi version is on B p.215. The argument joining them — that a phosphoryl transfer from ATP's γ-phosphate necessarily leaves ADP, while an AMP product would require an adenylate intermediate — is general nucleotide chemistry and is on neither page.",
      see: [{ id: "5-2-1-2", en: "transamination and the PLP mechanism in full", cn: "转氨作用与 PLP 机制的完整过程" }]
    },
    {
      link_en: "and the AMP version deserves to be understood rather than simply set aside",
      link_cn: "而那个走到 AMP 的写法值得弄懂，而不是随手放到一边",
      en: "Taken as printed, the chloroplast equation runs L-glutamate + NH4+ + ATP → L-glutamine + AMP + 2 Pi, in which the ATP is cleaved at the α–β position instead of losing only its terminal phosphate. **Products of AMP and two inorganic phosphates would mean two high-energy-bond equivalents are spent, not one, which drives the step effectively to completion.** Spending two bonds to buy irreversibility is exactly the chemistry of a synthetase, so the reading is coherent on its own terms even where the observed γ-glutamyl phosphate intermediate points to ADP and Pi.",
      cn: "照印出来的样子读，叶绿体里那条方程是 L-谷氨酸 + NH₄⁺ + ATP → L-谷氨酰胺 + AMP + 2 Pᵢ，其中 ATP 是在 α–β 位断开的，而不只是掉一个末端磷酸。**产物是 AMP 加两个无机磷酸，就意味着消耗掉的是两个高能键当量而不是一个，正是这一点把该步骤推向完全。** 花两个键去买不可逆性，恰恰就是 synthetase 这一类酶的化学，所以这种读法在它自己的框架里是自洽的——即便实际观察到的 γ-谷氨酰磷酸中间体指向的是 ADP 和 Pᵢ。",
      src: "B §9.4, p.215"
    },
    {
      link_en: "there is a one-step way to do the same job, and it is worth knowing why it is not the main one",
      link_cn: "同样这件事有一条一步就能走完的路，而值得知道为什么它不是主路",
      en: "Glutamate dehydrogenase aminates α-ketoglutarate directly, in one reversible reaction: α-ketoglutarate + NADPH + H+ + NH4+ ⇌ glutamate + NADP+ + H2O. It is the obvious route and it is easy to name as the main one. **It is a minor third route in fact, because its equilibrium favours the reactants and its Km for NH4+ of about 1 mM is far too high to matter for assimilation in a mammal.** Glutamine synthetase plus glutamate synthase does the work instead, and that pair spends ATP precisely so as not to depend on a favourable equilibrium. Two organism-level differences follow and are worth holding: animals have no glutamate synthase at all and keep their glutamate topped up by transamination, while plants have a second form of it driven by reduced ferredoxin, which puts ammonia assimilation in a leaf on the same light-supplied reductant as nitrite reduction.",
      cn: "谷氨酸脱氢酶一步就能给 α-酮戊二酸加上氨，而且是可逆反应：α-酮戊二酸 + NADPH + H⁺ + NH₄⁺ ⇌ 谷氨酸 + NADP⁺ + H₂O。这是最显眼的一条路，也很容易被当作主路来记。**它其实只是次要的第三条路线，因为它的平衡偏向反应物一侧，而它对 NH₄⁺ 的 Km 约为 1 mM，对哺乳动物体内的同化来说高得毫无意义。** 真正干活的是谷氨酰胺合成酶加谷氨酸合酶那一对，而它们花掉 ATP，正是为了不必依赖一个有利的平衡。由此还带出两个物种层面的差别，值得一并记住：动物根本没有谷氨酸合酶，靠转氨作用维持谷氨酸；植物则另有一种由还原态铁氧还蛋白驱动的谷氨酸合酶，这让叶片里的氨同化与亚硝酸还原用上了同一个由光供给的还原剂。",
      src: "A p.802–803 · B §9.4, p.215"
    },
    {
      link_en: "and the first enzyme of that pair is where nitrogen metabolism is actually controlled",
      link_cn: "而那一对里的第一个酶，正是氮代谢真正的控制点",
      en: "**Alanine, glycine and at least six end products of glutamine metabolism are all allosteric inhibitors of bacterial glutamine synthetase; each alone inhibits only partially**, but together they are more than additive and all eight at once virtually shut the enzyme down. That is cumulative feedback inhibition, and the design logic is worth stating: no single downstream product can close a shared entry point on its own, while a general excess across many products can. Superimposed on it is adenylylation — an AMP attached to Tyr397 near the active site — which makes the enzyme more sensitive to those allosteric inhibitors rather than switching it off outright. Which subunits get adenylylated is decided by a further cascade: an adenylyltransferase whose direction is set by a regulatory protein, PII, itself uridylylated or not depending on glutamine, Pi, α-ketoglutarate and ATP — and that same PII also controls transcription of the synthetase's own gene. Net effect: activity falls when glutamine is plentiful and rises when glutamine is scarce and its substrates are available.",
      cn: "**丙氨酸、甘氨酸，以及至少六种谷氨酰胺代谢的终产物，都是细菌谷氨酰胺合成酶的别构抑制剂；每一种单独作用时只造成部分抑制，但合在一起的效果超过简单相加，八种同时存在几乎把这个酶完全关停。** 这叫累积反馈抑制（cumulative feedback inhibition），其设计逻辑值得说出来：任何单一的下游产物都无权独自关掉一个共用的入口，而「多种产物普遍过剩」这件事可以。叠在上面的是腺苷酰化——在活性位点附近的 Tyr397 上接一个 AMP；它的作用是让这个酶对上述别构抑制剂更敏感，而不是把酶直接关掉。哪些亚基被腺苷酰化，又由再上一层的级联决定：一个腺苷酰转移酶，其方向由调节蛋白 PII 设定，而 PII 自身是否被尿苷酰化，取决于谷氨酰胺、Pᵢ、α-酮戊二酸和 ATP；同一个 PII 还控制着这个合成酶自身基因的转录。净效果是：谷氨酰胺充裕时活性下降，谷氨酰胺稀缺而底物又充足时活性上升。",
      src: "A p.803–804"
    },
    {
      link_en: "and glutamine, once made, is how nitrogen gets to everything else — through a piece of plumbing worth knowing",
      link_cn: "谷氨酰胺一旦造出来，氮就靠它抵达其余一切——而中间有一段值得知道的「管道」",
      en: "Three chemistries do most of the work downstream: transaminations run by enzymes carrying pyridoxal phosphate, transfers of one-carbon groups using tetrahydrofolate at the −CHO and −CH2OH levels and S-adenosylmethionine at the −CH3 level, and transfers of the amide nitrogen of glutamine. That last is done by the glutamine amidotransferases, and their architecture is the memorable part: one domain binds glutamine, where a conserved Cys attacks the amide through a glutamyl-enzyme intermediate and releases NH3, the other binds the acceptor, and the NH3 travels between the two active sites down an internal channel. **The channel is the whole point: free ammonia is toxic and would diffuse away, so it is tunnelled from where it is made to where it is used without ever entering solution** — which is why glutamine is the practical nitrogen donor. From glutamate and glutamine, transamination step by step builds every other amino acid, and from there the purine and pyrimidine rings of the nucleotides.",
      cn: "下游的活主要由三类化学承担：由携带磷酸吡哆醛（PLP）的酶完成的转氨作用；一碳单位的转移——四氢叶酸负责 −CHO 与 −CH₂OH 氧化态，S-腺苷甲硫氨酸负责 −CH₃ 态；以及谷氨酰胺酰胺氮的转移。最后这一类由谷氨酰胺酰胺转移酶完成，而它们的架构才是值得记的部分：一个结构域结合谷氨酰胺，其中一个保守的 Cys 经谷氨酰-酶中间体进攻酰胺、放出 NH₃；另一个结构域结合受体；NH₃ 则沿一条内部通道，从一个活性位点走到另一个。**这条通道就是全部要点：游离氨有毒，而且会径直扩散跑掉，所以它被从生成处直接隧穿到使用处，全程不进入溶液——这正是实际的氮供体是谷氨酰胺的原因。** 由谷氨酸和谷氨酰胺出发，转氨作用一步一步造出其余每一种氨基酸，再由它们造出核苷酸的嘌呤环和嘧啶环。",
      src: "A p.804",
      see: [
        { id: "L-22-2-1", en: "the six precursor families the amino acids are built from", cn: "氨基酸赖以建造的六大前体家族" },
        { id: "L-22-4-1", en: "where the glutamine amide nitrogen ends up — the purine ring", cn: "谷氨酰胺的酰胺氮最后去了哪里——嘌呤环" }
      ]
    },
    {
      link_en: "and now the axis closes on itself, because every atom of that nitrogen comes back",
      link_cn: "现在这根轴自己合上了，因为那些氮原子一个也不会留下",
      recall_en: "the same axis from the second step, now with organisms hung on it",
      recall_cn: "还是第二步那根轴，只是现在把生物挂了上去",
      en: "**Ammonia is the hub of the whole cycle: bacterial fixation, the breakdown of urea, and death and decomposition all converge on NH3**, and from NH3 nitrogen either goes up into nitrite and nitrate or across into organic compounds. The organic loop runs plants first — NH3 is assimilated into the organic compounds of a plant, which pass as food into the organic compounds of an animal, which come back out as urea, H2NCONH2, in excretion, and plants and soil microorganisms break that urea back down to NH3, while death and decomposition return organic nitrogen to NH3 directly. Around that loop stand the bacteria: nitrogenase-carrying bacteria bring N2 in at one side, nitrifying bacteria oxidise NH3 up to nitrite and nitrate to build the soil store, denitrifying bacteria carry nitrogen back to N2, and anammox bacteria do the same by another road. Nothing in the loop is optional; take out the bacteria and the nitrogen stops moving.",
      cn: "**氨是整个循环的枢纽：细菌固氮、尿素分解、死亡与腐解，全都汇聚到 NH₃；而氮又从 NH₃ 出发，或向上进入亚硝酸盐和硝酸盐，或横向进入有机化合物。** 有机那一圈是从植物开始的——NH₃ 被同化进植物的有机化合物，这些化合物作为食物进入动物的有机化合物，再经排泄以尿素（H₂NCONH₂）的形式出来；植物和土壤微生物把尿素分解回 NH₃，而死亡与腐解让有机氮直接回到 NH₃。围着这一圈站着的是细菌：含固氮酶的细菌在一侧把 N₂ 引进来，硝化细菌把 NH₃ 向上氧化成亚硝酸盐和硝酸盐、筑起土壤里的贮库，反硝化细菌把氮送回 N₂，anammox 细菌则走另一条路做同一件事。这圈里没有哪一环是可有可无的：把细菌抽走，氮就不动了。",
      src: "B §9.4, p.216, obr. 9.9 · A p.795",
      see: [{ id: "L-18-2-1", en: "the urea cycle that makes the urea in that loop", cn: "造出这圈里那个尿素的尿素循环" }]
    }
  ]
};
