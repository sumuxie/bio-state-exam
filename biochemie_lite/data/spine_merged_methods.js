/* MERGED SPINES — the methods half of the book. 速通简洁版, ONE spine per TOPIC.

   topics: working-with-proteins · exploring-protein-function ·
           nucleic-acid-chemistry · recombinant-dna-technology · genomics

   The merge rule is the same as in spine_merged_nucleic.js and _enzymes.js: the
   Lehninger telling is the backbone, and the Czech material is folded in only where
   it ADDS — a number, a name, a worked case, a consequence the other account does
   not draw. Where both say the same thing, the Lehninger sentence stands.

   Only ONE of these five topics has a Czech member node at all (2-2-6, Vlastnosti
   proteinů, inside working-with-proteins). The other four are covered by the Czech
   book nowhere: it has no cloning, no PCR, no sequencing, no genomics, and no
   CRISPR. So for those four the work here is a rewrite into one chain of one-claim
   steps, plus the cross-links that turn five separate method nodes into one thread:
   how you get a pure protein, how you find out what it does, what the chemistry of
   DNA allows, how you cut and paste it, and what a whole genome then says.

   A method earns a step only where the reader would otherwise not understand a
   result that depends on it. Every step therefore says what question the method
   answers, and not how the protocol runs.

   Keyed by topicKey. The app prefers `key:<topicKey>` and falls back to the
   per-node spine, so the per-node files still resolve and are left untouched.

   ONE bold span per field. 极简 mode shows only that span, so it has to read as a
   standalone claim with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------- 蛋白质的分离与测定 ---- */
/* Members: L-3-3-1 (purification, assay, electrophoresis), L-4-5-1 (structure
   determination), 2-2-6 (colloid properties, Mr range, ultracentrifugation).

   The Czech node supplies what the Lehninger purification section never states —
   what a protein solution IS physically, how large Mr actually gets, and the
   ultracentrifuge, which is the one Mr method Lehninger's chapter 3 omits. That
   also lets one `beyond` flag be dropped: L-3-3-1 flagged its comparison between an
   SDS gel and a sedimentation measurement as off-page, and it is on-page here. */
window.BIOLITE_SPINE["key:working-with-proteins"] = {
  assumed: ["protein", "enzyme", "cell", "amino acid", "substrate", "product",
            "buffer", "salt", "molecule", "membrane", "gene", "ATP", "water",
            "solution", "virus", "light", "ribosome", "polypeptide", "atom",
            "electron", "ion", "crystal", "conformation", "domain", "residue",
            "solvent", "myoglobin", "sequence", "hormone", "toxin", "cofactor",
            "coenzyme", "centrifugation", "solubility", "concentration", "pH",
            "detergent", "dye", "polymer", "resin", "gel", "column", "spindle"],
  nodeTitle_en: "Working with proteins",
  nodeTitle_cn: "蛋白质操作技术",
  title_en: "How you get one protein out of the thousands in a cell, how you know when it is pure, how heavy it is, and where its picture came from",
  title_cn: "怎么把一种蛋白从细胞里成千上万种蛋白中弄出来、凭什么说它纯了、它有多重，以及它那张结构图是从哪来的",
  steps: [
    {
      en: "To study one protein you first have to separate it from the thousands of others in the same cell, in pure form, and then be able to measure what it does. There is a modern shortcut with a price attached: genetic-engineering methods make purification easier by adding a few or many extra amino acid residues to one or both ends of the protein, and in many cases that added stretch changes what the protein does. **An unaltered native protein therefore means either cutting that addition off afterwards or using the classical bench methods**, which is the honest reason ammonium sulfate precipitation is still worth learning.",
      cn: "要研究一种蛋白，你先得把它从同一个细胞里成千上万种其他蛋白中以纯品的形式分出来，然后还要能测出它在做什么。有一条现代捷径，但它带着代价：基因工程方法让纯化变得省事，做法是在蛋白的一端或两端加上少则几个、多则许多氨基酸残基，而在很多情况下，这段加上去的东西会改变蛋白的功能。**所以要拿到未经改造的天然蛋白，只能事后把这段东西切掉，或者改用经典的实验台方法 —— 这才是硫酸铵沉淀今天仍然值得学的老实理由。**",
      src: "A p.83"
    },
    {
      link_en: "so, from a live cell to something you can put on a column",
      link_cn: "那就从活细胞开始，一直做到能上柱的样品",
      en: "Break the cells open and what you have is a crude extract — every soluble protein of the cell together in one solution; if a particular organelle is wanted, differential centrifugation separates the subcellular fractions first. Separating those proteins into groups on the basis of one property such as size or charge is called fractionation, and the early steps use solubility, which depends in a complicated way on pH, temperature and salt concentration. Adding certain salts lowers protein solubility, an effect called salting out, and ammonium sulfate is particularly good at precipitating some proteins selectively while leaving others dissolved; low-speed centrifugation then removes what has come out of solution, and dialysis takes the salt back out — the preparation sits in a bag of semipermeable membrane suspended in a much larger volume of buffer, and the membrane passes salt and buffer while the protein, far bigger, stays inside. No single property tells one protein from all the rest, so several methods run in sequence, each separating on a different one. **Cheap crude procedures go first, when volume and contaminant count are both at their greatest**, and each completed step shrinks the sample until the expensive chromatography at the end becomes affordable.",
      cn: "把细胞破开，你得到的是粗提液（crude extract）—— 细胞里所有可溶蛋白全在一份溶液里；如果要的是某个特定细胞器，就先做差速离心把亚细胞组分分开。把这些蛋白按大小或电荷之类的某一种性质分成若干组，这个过程叫分级分离（fractionation），而前面几步利用的是溶解度，它以复杂的方式取决于 pH、温度和盐浓度。加入某些盐会降低蛋白溶解度，这个效应叫盐析（salting out），硫酸铵特别擅长有选择地沉淀一部分蛋白、让另一部分留在溶液里；随后用低速离心把析出的东西移走，再用透析把盐弄出去 —— 制备物装在半透膜袋里，悬在体积大得多的缓冲液中，膜让盐和缓冲液通过，而蛋白因为大得多留在袋内。没有任何单一性质能把一种蛋白与其余所有蛋白区分开，所以要依次用好几种方法，每种按不同的性质分离。**又便宜又粗放的手段排在最前面 —— 那时体积最大、杂蛋白最多 —— 而每完成一步样品就小一点，直到最后那些昂贵的层析变得负担得起。**",
      src: "A p.84, p.86"
    },
    {
      link_en: "three of the methods that follow share one piece of apparatus, so set the apparatus up once",
      link_cn: "接下来三种方法共用同一套装置，所以先把装置一次说清楚",
      en: "A column holds a porous solid whose chemical properties are chosen for the job — the stationary phase — and a buffered solution, the mobile phase, flows down through it. The sample is layered on top in the same buffer and percolates downward as a band, individual proteins moving faster or slower according to their properties; fractions leaving the bottom are collected in order, each is tested for the protein wanted, and the positive ones are pooled as the product of that step. Two effects fight each other here: a longer column improves separation because the proteins have more distance in which to pull apart, while every band also spreads by diffusion as time passes, which blurs them together again. **High-performance liquid chromatography drives the sample down with high-pressure pumps through a matrix tough enough to survive them, so transit time is short and diffusion gets less time to act** — it buys resolution without using any new property at all.",
      cn: "柱子里装着一种化学性质按用途挑过的多孔固体 —— 固定相（stationary phase）—— 而一种缓冲溶液，即流动相（mobile phase），自上而下流过它。样品用同样的缓冲液铺在柱顶，以一条带向下渗透，不同蛋白按各自的性质走得或快或慢；柱底流出的液体依次分部收集，每份检测有没有你要的蛋白，阳性的合并起来作为这一步的产物。这里有两种效应在对抗：柱子越长分离越好，因为蛋白有更长的距离可以拉开；而每条带同时随时间因扩散变宽，又把它们糊回一起。**高效液相层析用高压泵把样品往下赶，穿过扛得住这种压力的基质，于是在柱上停留的时间很短、留给扩散的时间也少 —— 它买到的是分辨率，用的却不是任何新的性质。**",
      src: "A p.84, Fig. 3-16; A p.86"
    },
    {
      link_en: "first column: it reads charge",
      link_cn: "第一根柱子：它读的是电荷",
      en: "Ion-exchange chromatography is the column that reads charge: it exploits differences in the sign and size of a protein's net electric charge at a given pH. The matrix is a synthetic polymer, a resin, carrying charged groups bound to it, and the naming is a trap: a resin with bound anionic groups is called a cation exchanger and one with bound cationic groups an anion exchanger, so the name says what the column catches rather than what the column carries. A cation exchanger is itself negative and holds back positively charged proteins. Peptide A with a pI of 5.1 — the pI is the pH at which a molecule carries no net charge — is net negative at neutral pH and comes off a cation exchanger first, while peptide B at pI 7.8 is net positive and is held back; on an anion exchanger the order reverses. **The protein whose charge is opposite to the resin's is the one that sticks, and whatever sticks comes off last**, released by a gradient of pH, which shifts the proteins' ionization states, or of salt, whose free ions compete for the resin's charges.",
      cn: "离子交换层析利用的是蛋白在给定 pH 下净电荷的符号与大小的差异。基质是一种合成聚合物（树脂），上面结合着带电基团，而命名是个陷阱：结合着阴离子基团的叫阳离子交换剂，结合着阳离子基团的叫阴离子交换剂 —— 名字说的是柱子抓什么，而不是柱子自己带什么。阳离子交换剂本身带负电，扣住的是带正电的蛋白。肽 A 的 pI 是 5.1（pI 就是分子净电荷为零时的那个 pH），它在中性 pH 下净带负电，在阳离子交换柱上先出来；肽 B 的 pI 是 7.8，净带正电，被扣住；换成阴离子交换柱，顺序颠倒。**电荷与树脂相反的那个蛋白会被粘住，而被粘住的最后才出来** —— 把它放出来靠的是 pH 梯度（改变蛋白的电离状态）或盐梯度（游离盐离子去竞争树脂上的电荷）。",
      src: "A p.85, Fig. 3-17; A p.86, Worked Example 3-1",
      see: [{ id: "L-2-2-1", en: "where a pI comes from, and why it is the mean of two pK values", cn: "pI 是从哪来的，以及它为什么是两个 pK 的平均值" }]
    },
    {
      link_en: "second column: it reads size, and the result runs backwards from what the name suggests",
      link_cn: "第二根柱子：它读的是大小，而结果和名字给人的印象正好反过来",
      en: "Size-exclusion chromatography, also called gel filtration or permeation chromatography, uses cross-linked polymer beads with internal cavities of an engineered size. Large proteins cannot get into the cavities and take the short route around the outside of the beads, so they reach the bottom quickly; small proteins go in, and the labyrinth inside makes their path much longer. What the column measures is how much of the beads' internal volume a molecule is allowed into. Run a set of standards of known relative molecular mass, written Mr, and retention time plotted against log Mr is a straight line. **Large proteins leave this column before small ones, and an unknown's approximate Mr is read straight off that calibration line, so a column built to separate proteins doubles as a way of weighing one.**",
      cn: "尺寸排阻层析，也叫凝胶过滤或渗透层析，用的是交联聚合物小球，球内有做成特定尺寸的空腔。大蛋白钻不进空腔，只能沿小球外面走近路，很快到柱底；小蛋白钻得进去，里面的迷宫让它们的路径长得多。这根柱子真正测量的，是一个分子被允许进入小球内部体积的多少。跑一组相对分子质量（记作 Mr）已知的标准品，以保留时间对 log Mr 作图就得到一条直线。**大蛋白比小蛋白更早离开这根柱子；而把未知样品的保留时间在标定直线上一读，就得到它近似的 Mr —— 一根为分离而造的柱子，同时也成了称重的工具。**",
      src: "A p.85, Fig. 3-17; A p.86 · B §2.2.6, p.37"
    },
    {
      link_en: "third column: it ignores physical properties altogether and reads what the protein does",
      link_cn: "第三根柱子：它根本不看物理性质，只看这个蛋白会做什么",
      recall_en: "the added residues from the very first step, now doing the job they were added for",
      recall_cn: "第一步里那些「加上去的残基」，在这里正干着它们被加上去的那份活",
      en: "Affinity chromatography separates on binding specificity. The beads carry a chemical group attached by a covalent bond — a ligand, meaning a group or molecule that binds to a macromolecule such as a protein — and any protein in the mixture with an affinity for that ligand is held back while everything else runs straight through. If the protein wanted does its job by binding ATP, attach something resembling ATP to the beads and the column selects exactly the proteins that do that job. Two elutions work differently: high salt interferes with ionic interactions and weakens binding generally, while free ligand added in solution competes with the ligand bolted to the beads, so a protein eluted that way often arrives still carrying the ligand used to release it. **Separating on what a protein binds is separating on function, and fusing an engineered tag onto a protein that binds nothing convenient gives the column something to grip**, which is how one step can do the work of a whole purification.",
      cn: "亲和层析按结合特异性分离。小球上以共价键接着一个化学基团 —— 配体（ligand），即能与蛋白这类大分子结合的一个基团或分子 —— 混合物中凡对这个配体有亲和力的蛋白都被扣住，其余径直流过。如果你要的蛋白靠结合 ATP 干活，就把类似 ATP 的东西接到小球上，这根柱子挑出来的恰好是干这份活的那些蛋白。洗脱有两条路，作用方式不同：高盐干扰离子相互作用、笼统地削弱结合；往溶液里加游离配体则去和拴在小球上的配体竞争，因此这样洗下来的蛋白往往还带着用来洗脱它的配体。**按「这个蛋白结合什么」分离，就是按功能分离；而给一个本来什么都不结合的蛋白融合上人工标签，柱子就有了可抓之处 —— 一步之内做完整套纯化的活，靠的正是这一招。**",
      src: "A p.85, Fig. 3-17; A p.86",
      see: [{ id: "L-9-1-1", en: "the standard tags, what each binds, and what a tag costs", cn: "标准的那几种标签、各自结合什么，以及一个标签的代价" }]
    },
    {
      link_en: "every step so far assumed something that has to be arranged before any of it starts",
      link_cn: "上面每一步都预设了一件事，而这件事必须在动手之前就安排好",
      en: "You must be able to find your protein among all the others and put a number on how much of it is there, at every stage, and that means an assay. For an enzyme the assay measures what the enzyme does — the increase in the rate at which its substrate is turned into product when the enzyme is present — and six things have to be known before that measurement means anything: the overall equation of the reaction, a way of following either substrate disappearing or product appearing, whether cofactors such as metal ions or coenzymes are needed, how activity depends on substrate concentration, the pH at which activity is highest, and a temperature range in which the enzyme stays both stable and active. Assays run at that pH, usually between 25 and 38 °C, and at a substrate concentration high enough that the measured initial rate is proportional to how much enzyme is present. One unit of enzyme activity is, by international agreement, the amount converting 1.0 micromole of substrate to product per minute at 25 °C; activity is the total units in the solution, and specific activity is units per milligram of total protein. Two flasks holding the same number of red marbles, one of them with far fewer marbles of every other colour, have the same activity and different specific activities. **Specific activity does not measure how much enzyme you have — it measures what fraction of the protein in your hand is the enzyme you want.**",
      cn: "你必须能在所有其他蛋白当中找到你的那个，并且在每一个阶段都给「有多少」一个数字 —— 这就要有一套活性测定（assay）。对酶来说，测定量的是这个酶所做的事：加了酶之后，底物转化为产物的速率增加了多少。而在这个测量有意义之前，有六件事必须先知道：所催化反应的总方程式；一种能追踪底物消失或产物出现的分析方法；要不要金属离子或辅酶之类的辅因子；活性如何随底物浓度变化；活性最高时的 pH；以及酶能保持稳定且有活性的温度区间。测定就在那个 pH 下进行，温度一般 25 到 38 °C，底物浓度高到让测得的初速率与酶的量成正比。按国际约定，1 个酶活性单位是指 25 °C 最适条件下每分钟把 1.0 微摩尔底物转化为产物所需的酶量；活性指溶液里的总单位数，比活性指每毫克总蛋白所含的单位数。两个瓶子里红弹珠一样多，第二个瓶子里其他颜色的弹珠少得多 —— 两瓶活性相同，比活性不同。**比活性量的根本不是「我有多少酶」，它量的是「我手上这堆蛋白里，有多大比例是我要的那一个」。**",
      src: "A pp.89–90",
      see: [{ id: "3-3-3", en: "why the amount of an enzyme is expressed as activity rather than as mass", cn: "为什么酶的量要用活性表示，而不是用质量" },
             { id: "L-6-3-1", en: "why a high substrate concentration makes the rate report enzyme concentration", cn: "为什么底物浓度足够高时，速率反映的就是酶的浓度" }]
    },
    {
      link_en: "now put every step in a table and do two divisions",
      link_cn: "现在把每一步列成一张表，做两次除法",
      recall_en: "the ratio from the marbles one step up, watched changing down a whole table",
      recall_cn: "上一步弹珠说的那个比值，现在看它沿着整张表一路变化",
      en: "A purification table records, for each step, the fraction volume, the total protein, the total activity and the specific activity. A worked enzyme purification runs: crude extract, 1,400 mL, 10,000 mg protein, 100,000 units, specific activity 10; ammonium sulfate precipitation, 280 mL, 3,000 mg, 96,000 units, 32; ion exchange, 90 mL, 400 mg, 80,000 units, 200; size exclusion, 80 mL, 100 mg, 60,000 units, 600; affinity, 6 mL, 3 mg, 45,000 units, 15,000. Final specific activity over starting specific activity, 15,000/10, is the purification factor, 1,500-fold; final total activity over starting total activity, 45,000/100,000, is the yield, 45%, and the two pull against each other because every step that raises purity throws product away. Total activity falls at every step through inactivation and non-ideal interactions with the column material; total protein falls faster, because removing unwanted protein is the whole objective; specific activity is the one divided by the other. **Total activity falling while specific activity rises is exactly what a successful step looks like**, and a protein counts as pure when further steps stop raising its specific activity and only one species can be detected on a gel.",
      cn: "一张纯化表记录每一步的组分体积、总蛋白、总活性和比活性。一次演示用的酶纯化是这样走的：粗提液 1,400 mL、10,000 mg 蛋白、100,000 单位、比活性 10；硫酸铵沉淀 280 mL、3,000 mg、96,000 单位、32；离子交换 90 mL、400 mg、80,000 单位、200；尺寸排阻 80 mL、100 mg、60,000 单位、600；亲和层析 6 mL、3 mg、45,000 单位、15,000。最终比活性除以初始比活性，15,000/10，就是纯化倍数 1,500 倍；最终总活性除以初始总活性，45,000/100,000，就是回收率 45%；两者互相拉扯，因为每一个提高纯度的步骤都要扔掉一部分产物。总活性每一步都下降，来自失活以及与柱材料之间的非理想相互作用；总蛋白降得更快，因为去掉不想要的蛋白本来就是全部目的；比活性是二者相除。**总活性在往下掉而比活性在往上涨，这正是一个成功步骤的样子；而当进一步的步骤再也提不高比活性、并且凝胶上只能检出单一物种时，这个蛋白就算纯了。**",
      src: "A p.87, Table 3-5; A p.90"
    },
    {
      link_en: "that table has been treating the protein as a thing with a mass, and getting that mass is a separate problem — starting with what a protein solution physically is",
      link_cn: "上面那张表一直把这个蛋白当作「有一个质量的东西」来对待。而拿到这个质量是另一个问题 —— 先要问：一份蛋白溶液在物理上究竟是什么",
      en: "A colloid is a system in which particles much larger than ordinary molecules are dispersed through a medium, and the Tyndall effect is the scattering of light by such particles, which makes a beam passing through visible from the side. Protein molecules in solution are comparable in size with the particles of inorganic colloids, so protein solutions share the Tyndall effect, gel formation and coagulation with them. One property separates the two: a polydisperse system is one whose particles come in a range of sizes, a homodisperse system one whose particles are all alike, and inorganic colloids are polydisperse while a protein solution is homodisperse — every molecule in it is the same molecule, which is what lets a whole flask be treated as one chemical species carrying one mass. A protein's Mr, 10⁴ to 10⁶ and 10⁷ in viruses, is beyond classical mass measurement, so **it is read off three things that change with size: how fast the molecule sinks, how it threads a sieve, how it moves in a field**.",
      cn: "胶体是指比普通分子大得多的颗粒分散在某种介质中形成的体系，而丁达尔效应是这类颗粒对光的散射，使穿过其中的光束从侧面看得见。溶液中的蛋白质分子在大小上可与无机胶体的颗粒相比拟，所以蛋白质溶液与它们共有丁达尔效应、凝胶形成和凝聚这几种性质。有一个性质把两者分开：多分散体系指颗粒大小参差不齐的体系，均分散体系指颗粒彼此一模一样的体系；无机胶体是多分散的，而蛋白质溶液是均分散的 —— 里面每一个分子都是同一个分子，正因如此，一整瓶溶液才能被当作携带同一个质量的单一化学物种来处理。**蛋白质的 Mr 是 10⁴ 到 10⁶、病毒里达 10⁷，超出经典分子量测定的能力，所以只能改从三样随大小而变的东西上读出来：分子沉降得多快、它怎样穿过分子筛、它在电场里怎么跑。**",
      src: "B §2.2.6, p.37",
      beyond: true,
      beyondNote: "p.37 names the Tyndall effect and inorganic colloids without defining either. The two one-clause descriptions are standard and are added so the sentence stands on its own."
    },
    {
      link_en: "take the first of those three, and watch what is actually being measured",
      link_cn: "拿三者中的第一种来看，看清楚真正被测量的是什么",
      en: "In a sedimentation method the protein solution is exposed to centrifugal force in an ultracentrifuge. Protein molecules, being heavier than water, sink slowly to the bottom of the cell, travelling away from the centre of rotation, and the sedimentation rate — the path covered per unit time in the direction of the centrifugal acceleration, dx/dt — is proportional to that acceleration: dx/dt = s · ω² · x, where x is the distance from the centre of rotation, ω is the angular velocity, and s is the sedimentation coefficient, whose value is given in svedberg units, S, one svedberg being 10⁻¹³ seconds. That coefficient rises with Mr without being proportional to it, so the mass has to be calculated from the Svedberg equation, Mr = R·T·s / [D·(1 − v̄·ρ)], in which D is the diffusion coefficient, v̄ the partial specific volume and ρ the density of the solvent. **Sedimentation coefficients must therefore never be added: a 30S and a 50S ribosomal subunit assemble into a 70S particle rather than an 80S one**, and the missing 10S is not a measurement error.",
      cn: "在沉降法中，蛋白质溶液在超速离心机中承受离心力。蛋白质分子比水重，缓慢沉向池底，也就是朝远离旋转中心的方向移动；沉降速度 —— 单位时间内沿离心加速度方向所走的路程 dx/dt —— 与该加速度成正比：dx/dt = s · ω² · x，其中 x 是距旋转中心的距离，ω 是角速度，s 是沉降系数，其数值以斯维德贝格单位 S 表示，1 斯维德贝格 = 10⁻¹³ 秒。这个系数随 Mr 增大，却不与它成正比，所以质量必须用斯维德贝格方程算出来：Mr = R·T·s / [D·(1 − v̄·ρ)]，其中 D 是扩散系数，v̄ 是偏比容，ρ 是溶剂密度。**因此沉降系数绝不能相加：一个 30S 亚基加一个 50S 亚基装成的是 70S 颗粒，而不是 80S，而少掉的那 10S 不是测量误差。**",
      src: "B §2.2.6, p.37",
      beyond: true,
      beyondNote: "The instruction never to add sedimentation coefficients follows from the non-proportionality stated on p.37 but is not spelled out there. The bacterial ribosome is the standard illustration."
    },
    {
      link_en: "and the third of the three, which needs two variables pinned before it can report anything",
      link_cn: "再说三者中的第三种 —— 它必须先按住两个变量，才报得出任何东西",
      recall_en: "the same sieve idea as the size-exclusion column, running the other way round",
      recall_cn: "和尺寸排阻柱是同一个分子筛的思路，只是方向反了过来",
      en: "Electrophoresis puts an electric field across a slab of gel holding a protein sample: charged molecules migrate through the gel, and how far each travels is the reading. It contributes nothing to purification and often damages a protein's structure and with it the protein's function, so it is a way of looking rather than a way of making — good for estimating how many different proteins are in a mixture, judging how pure a preparation is, and determining a protein's isoelectric point and approximate molecular weight. The physics is one relation and it decides everything after it: electrophoretic mobility is a molecule's velocity divided by the electrical potential driving it, and it equals the net charge Z divided by the frictional coefficient f, where f depends in part on shape. The gel itself is cross-linked polyacrylamide and acts as a molecular sieve in the ordinary direction, slowing large molecules down. **Migration distance depends on size and shape at once, two unknowns folded into one measurement, so a plain gel cannot report a mass**: a small heavily charged protein runs to the same place as a large weakly charged one.",
      cn: "电泳是把电场加在装有蛋白样品的一块凝胶上：带电分子在胶中迁移，而要读的就是每一种走了多远。它对纯化毫无贡献，还常常损伤蛋白的结构、连带损伤功能，所以它是一种「看」的手段而不是「造」的手段 —— 擅长的是快速估计混合物里有多少种蛋白、判断制备物有多纯，以及测定等电点和近似分子量。它的物理原理只有一条关系式，而这条式子决定了后面的一切：电泳迁移率等于分子的速度除以驱动它的电势，同时等于净电荷 Z 除以摩擦系数 f，而 f 部分地取决于形状。凝胶本身是交联聚丙烯酰胺，起分子筛作用，而且是按通常的方向 —— 它减慢大分子。**迁移距离同时取决于大小和形状，两个未知量被折进同一个测量值，所以一块普通凝胶报不出质量：一个电荷很高的小蛋白，会跑到和一个电荷很低的大蛋白相同的位置。**",
      src: "A p.87, Fig. 3-18; A p.88"
    },
    {
      link_en: "and one detergent pins both variables at the same time",
      link_cn: "而有一种去污剂，一次把两个变量都按住了",
      recall_en: "Z and f from the mobility relation one step up, dealt with one after the other",
      recall_cn: "上一步那条迁移率关系式里的 Z 和 f，这里一个一个被处理掉",
      en: "Sodium dodecyl sulfate, SDS, is a detergent whose tail is a twelve-carbon chain, and three facts about it do all the work. It binds in proportion to size — about 1.4 times a protein's own weight, close to one SDS molecule per amino acid residue — so how much is bound is set by how many residues there are. Its sulfate groups contribute a large net negative charge that swamps the protein's own, so every protein ends up with a similar charge-to-mass ratio and Z tracks mass instead of composition. And it partially unfolds proteins into a similar rodlike shape, so f stops varying. Standards of known molecular weight run in a neighbouring lane give a straight line of log Mr against migration distance, and because migration is linear in log Mr rather than in Mr, a gel separates 20,000 from 40,000 far more clearly than 200,000 from 220,000. Bands are stained with a dye such as Coomassie blue, which binds protein and not the gel, so a purification can be followed by watching bands disappear. **SDS pulls a multi-subunit protein apart, so an SDS gel reports the mass of a subunit while sedimentation in an ultracentrifuge weighs the intact assembled particle**: for a tetramer the two numbers legitimately differ about fourfold, and both are correct.",
      cn: "十二烷基硫酸钠（SDS）是一种去污剂，尾巴是十二个碳的链，关于它的三个事实包办了全部工作。它的结合量与大小成比例 —— 约为蛋白自身重量的 1.4 倍，差不多每个氨基酸残基一分子 —— 所以结合多少取决于有多少个残基。它的硫酸基贡献了巨大的净负电荷，淹没了蛋白自身的电荷，于是每种蛋白都有相近的电荷质量比，Z 跟着质量走而不再跟着组成走。它还把蛋白部分展开成相似的棒状，于是 f 不再变化。在相邻泳道跑一组分子量已知的标准品，就得到 log Mr 对迁移距离的一条直线；而由于迁移与 log Mr 成线性、而不是与 Mr 成线性，一块凝胶区分 20,000 和 40,000 要比区分 200,000 和 220,000 清楚得多。条带用考马斯亮蓝之类的染料染色，它结合蛋白而不结合凝胶，于是可以靠看着条带一条条消失来跟踪纯化。**SDS 会把多亚基蛋白拆开，所以 SDS 凝胶报告的是一个亚基的质量，而超速离心中的沉降称的是完整组装好的颗粒：对一个四聚体来说，两个数字相差约四倍是完全正当的，而且两者都对。**",
      src: "A p.88 · B §2.2.6, p.37"
    },
    {
      link_en: "one property left to separate on, and combining it with mass is worth more than either alone",
      link_cn: "还剩一种性质可以拿来分离，而把它和质量组合起来，价值远超各自单干",
      recall_en: "charge again, the property the first column read — used here to make a protein stop rather than to make it stick",
      recall_cn: "又是电荷 —— 第一根柱子读的就是它；这次用它让蛋白停下来，而不是让蛋白粘住",
      en: "Isoelectric focusing separates by pI. Ampholytes, which are low molecular weight organic acids and bases, are allowed to distribute themselves in an electric field across the gel, and doing so sets up a stable pH gradient along it. Each protein then migrates until it reaches the pH equal to its own pI and stops there, because at that pH its net charge is zero and the field has nothing left to pull on — the protein has become invisible to the field rather than being blocked by anything. Two-dimensional electrophoresis runs the two separations at right angles: isoelectric focusing first, in a thin strip of gel, and then the strip is laid along the edge of a slab gel and SDS-PAGE is run down it. **Horizontal position then reports pI and vertical position reports molecular weight**, which resolves thousands of cellular proteins and separates pairs that either method alone would leave lying on top of each other, and a single spot can be cut out of the gel and identified by mass spectrometry.",
      cn: "等电聚焦按 pI 分离。两性电解质（低分子量的有机酸和碱）在电场中沿凝胶自行分布，这一分布就建立起一个稳定的 pH 梯度。随后每种蛋白往前迁移，直到抵达 pH 等于它自己 pI 的那个位置，就停在那里 —— 因为在那个 pH 下它的净电荷为零，电场再无处着力；蛋白是对电场变成了隐形，而不是被什么挡住了。双向电泳把两种分离沿垂直的两个方向做：先在一条细长胶条里做等电聚焦，再把胶条沿边缘放到板状胶上，往下跑 SDS-PAGE。**于是水平位置报告 pI、垂直位置报告分子量，这样能分开成千上万种细胞蛋白，也能分开任何单一方法都会让它们重叠在一起的那些配对** —— 而单个斑点还能从胶上切下来，用质谱鉴定。",
      src: "A p.89, Figs. 3-20 and 3-21",
      see: [{ id: "L-3-4-1", en: "what mass spectrometry does with that spot once it is cut out", cn: "斑点切下来之后，质谱拿它做什么" }]
    },
    {
      link_en: "a mass and a pI still say nothing about shape, and every ribbon diagram you have ever seen came out of one of three machines",
      link_cn: "质量和 pI 都说不出形状；而你见过的每一张飘带图，都出自三台机器中的一台",
      en: "Essentially every three-dimensional protein structure now on record was produced by x-ray crystallography, nuclear magnetic resonance or cryo-electron microscopy, and in all three the machine measures something indirect while a computation turns that measurement into atomic positions. In x-ray crystallography the protein is crystallized — coaxed into a solid in which every molecule sits in the same orientation, repeated in a regular array — and that ordered array diffracts x-rays; a single molecule would scatter far too weakly to detect, while many thousands of identically aligned copies scatter in step and reinforce one another into discrete recordable spots. The positions and intensities of the diffracted beams depend on where the atoms are, so mathematical methods work backwards to the arrangement that would have produced exactly this pattern. John Kendrew crystallized myoglobin from sperm whale muscle, analysed a pattern of nearly 25,000 reflections in stages, and by 1959 had placed virtually every non-hydrogen atom; the check came from outside the method, in that the amino acid sequence obtained by chemical analysis agreed with the structure built from the diffraction data, and over 100,000 structures have since been solved this way. **What comes out is a list of atomic coordinates, and a ribbon diagram is a drawing made from that list, tracing the polypeptide backbone through those coordinates** — a rendering choice rather than a thing anyone saw.",
      cn: "如今在册的三维蛋白质结构，几乎全部由 X 射线晶体学、核磁共振或冷冻电镜做出；而这三者有一个共同点：仪器测到的都是某种间接的东西，再由计算把这份测量变成原子的位置。在 X 射线晶体学里，蛋白先被结晶 —— 被诱导成一种固体，其中每个分子取向相同、规则重复 —— 这个有序阵列会衍射 X 射线；单个分子的散射弱到根本测不到，而成千上万个排列一致的拷贝散射同步、彼此加强，形成离散而可记录的斑点。衍射线的位置和强度取决于原子在哪里，所以要用数学方法反着做：找出恰好会产生这张图样的那种原子排布。John Kendrew 把抹香鲸肌肉的肌红蛋白结晶出来，把近 25,000 个衍射点的图样分阶段解析，到 1959 年几乎每一个非氢原子都被定了位；对答案的检验来自方法之外 —— 化学分析得到的氨基酸序列，与依据衍射数据搭出的结构相符；此后用这个办法解出的结构已超过 100,000 个。**出来的东西是一份原子坐标表，而飘带图是从这份表画出来的图，那条飘带描的是多肽主链穿过这些坐标的走向 —— 它是一种绘制上的选择，而不是被谁看见的东西。**",
      src: "A pp.136–137, p.142",
      beyond: true,
      beyondNote: "That diffraction patterns and intensities depend on structure, and that mathematics reconstructs it, is on the cited pages. That the deliverable is a coordinate list and a ribbon is a rendering of it is standard practice, added because 'where does the picture come from' is the question these pages are being read to answer."
    },
    {
      link_en: "the cost of that method decides what its picture may be used to argue",
      link_cn: "这套方法的代价，决定了它那张图能拿来论证什么",
      recall_en: "the motion the crystal averages away is exactly what the next method keeps",
      recall_cn: "被晶体平均掉的那份运动，正是下一种方法保留下来的东西",
      en: "A crystal is not a cell, and four limits follow from that. The structure obtained is an average over every molecule in the crystal and over the whole time the data were collected, so a group occupying two positions appears as one blur; x-ray diffraction gives little information about molecular motion; the conditions that make a protein crystallize are often non-physiological and can affect the conformation; and a protein that will not crystallize gives nothing at all. Nuclear magnetic resonance drops the crystal and keeps the solution. It reports on atomic nuclei and on the chemical environment each nucleus sits in, and a structure is computed from hundreds of distance and geometric constraints, each constraint saying that two particular atoms lie within a certain distance of each other; because the molecules are tumbling in solution rather than locked in a lattice, motion survives the measurement and a region that moves shows up as a region that moves. Every signal must first be assigned to a particular atom in a particular residue before it can become a constraint, and a large protein produces so many signals crowded into the same range that assigning them is the bottleneck. **An x-ray structure is strong evidence about one shape and weak evidence about how that shape changes; an NMR structure is the other way round, and only for a small molecule.**",
      cn: "晶体不是细胞，由此有四条限制。得到的结构是对晶体中所有分子、以及整段数据采集时间的平均，所以一个占据两种位置的基团只会显示成一团模糊；X 射线衍射几乎不提供分子运动的信息；让蛋白结晶的条件常常是非生理的，而且可能改变构象；至于长不出晶体的蛋白，则什么也给不了。核磁共振丢掉晶体、保留溶液。它报告的是原子核以及每个原子核所处的化学环境，结构由数百个距离与几何约束计算出来，每个约束都在说「某两个特定原子彼此之间不超过某个距离」；因为分子是在溶液里翻滚而不是被锁在晶格上，运动在测量中被保留下来，一个会动的区域看上去就是一个会动的区域。而每一个信号都必须先被指认到某个残基上的某个原子，才能变成一个约束；大蛋白产生的信号太多、又挤在同一区间，指认本身就成了瓶颈。**X 射线结构是关于「某一个形状」的强证据、关于「这个形状怎么变」的弱证据；NMR 结构正好相反，而且只适用于小分子。**",
      src: "A p.137, p.138, p.142"
    },
    {
      link_en: "the third method needs neither a crystal nor a small molecule",
      link_cn: "第三种方法既不需要晶体，也不挑分子大小",
      recall_en: "the crystal's identical orientations two steps up, replaced here by every orientation at once",
      recall_cn: "上面两步里晶体那种「取向全都一样」，在这里被换成了「所有取向同时出现」",
      en: "In cryo-electron microscopy the sample is quick-frozen in vitreous ice — water frozen so fast that it never forms ice crystals, so the molecules are held still in whatever arrangement they had in solution — and imaged while it is kept frozen, which limits the beam damage that would otherwise destroy the specimen before a high-resolution image could be recorded. Discrete objects 100 to 300 Å across can be visualized this way. Thousands of individual molecules are frozen in random orientations, so each is photographed from a different angle; the molecules are then identified in the image, computationally sorted by orientation, and the sorted two-dimensional images are combined into a single three-dimensional structure. No crystal is needed, because the many viewing angles a crystal supplies by lining molecules up are supplied instead by molecules that landed every which way, and many novel structures have now been obtained this way without models based on prior x-ray or NMR work. When a structure is presented as a settled fact, find out which of the three produced it: **a crystal gives an averaged shape, NMR a small molecule that moves, cryo-EM a large assembly frozen out of solution**.",
      cn: "在冷冻电镜里，样品被急冻在玻璃态冰中 —— 冻得太快、以致根本来不及形成冰晶的水，其中的分子就保持着它们在溶液里的姿态被定住 —— 并在保持冷冻的状态下成像，这限制了电子束的损伤，否则样品还没等到高分辨率图像被记录就已被打坏。直径 100 到 300 Å 的离散颗粒可以这样被看到。成千上万个单独分子以随机取向被冻住，因此每一个都是从不同角度被拍到的；随后由计算机在图像中把单个分子识别出来、按取向分类，再把分类好的二维图像合并成一个三维结构。不需要晶体 —— 晶体本来是靠把分子排齐来提供多个观察角度的，而现在这些角度由四面八方乱躺的分子直接提供；如今已有许多全新结构由它单独解出，不依赖先前 X 射线或 NMR 结构所建的模板。**当一个结构被当作板上钉钉的事实端出来时，先查清它出自三者中的哪一种：晶体给的是被平均过的形状，NMR 给的是一个会动的小分子，冷冻电镜给的是一个从溶液里冻出来的大型复合体。**",
      src: "A pp.139–142",
      see: [{ id: "2-2-2", en: "the conformations these methods are used to establish, and the forces that set them", cn: "这些方法用来确立的那些构象，以及决定构象的那些作用力" }]
    }
  ],
  terms: [
    { en: "fractionation", cn: "分级分离",
      def_en: "Treating a crude extract so that its proteins separate into groups on the basis of one property such as size or charge. A purification is a sequence of these, each using a different property, because no single property tells one protein from all the rest.",
      def_cn: "对粗提液施加处理，让其中的蛋白按某一种性质（大小、电荷等）分成若干组。一次纯化就是这样一连串操作，每步换一种性质 —— 因为没有任何单一性质能把一种蛋白与其余所有蛋白区分开。" },
    { en: "crude extract", cn: "粗提液",
      def_en: "What breaking cells open gives you: every soluble protein of the cell together in one solution. It is the first row of a purification table, and its volume and contaminant count are the largest anything will ever be.",
      def_cn: "把细胞破开之后得到的东西：细胞里所有可溶蛋白混在同一份溶液里。它是纯化表的第一行，而它的体积和杂质数目是整个过程中的最大值。" },
    { en: "salting out", cn: "盐析",
      def_en: "Lowering protein solubility by adding salt. Ammonium sulfate is particularly good at precipitating some proteins selectively while leaving others in solution; low-speed centrifugation removes the precipitate and dialysis takes the salt back out. Cheap and crude, so it goes first.",
      def_cn: "靠加盐降低蛋白的溶解度。硫酸铵特别擅长有选择地沉淀一部分蛋白、让另一部分留在溶液里；低速离心移走沉淀，再靠透析把盐弄出去。它便宜又粗放，所以排在最前面。" },
    { en: "dialysis", cn: "透析",
      def_en: "Separating proteins from small solutes by size: the preparation sits in a semipermeable bag suspended in a much larger volume of buffer, the membrane passes salt and buffer, and the protein stays inside because it is too big to cross.",
      def_cn: "按大小把蛋白和小分子溶质分开：制备物装在半透膜袋子里，悬在体积大得多的缓冲液中，膜让盐和缓冲液通过，而蛋白因为太大过不去，留在袋内。" },
    { en: "stationary phase / mobile phase", cn: "固定相／流动相",
      def_en: "The two parts of a chromatography column: a porous solid with chosen chemical properties packed inside it, and a buffered solution flowing down through it carrying the sample. Everything a column separates comes from how the two differ in what they hold onto.",
      def_cn: "层析柱的两个部分：装在柱里的、化学性质经过挑选的多孔固体，以及从中向下流过、带着样品的缓冲溶液。柱子能分开蛋白，全靠这两者「抓住什么」的差别。" },
    { en: "cation exchanger", cn: "阳离子交换剂",
      def_en: "A resin carrying bound anionic groups, named for the ions it exchanges rather than for the ones it carries. Being negative, it holds back positively charged proteins. Reverse the name in your head and every elution prediction inverts.",
      def_cn: "带有结合态阴离子基团的树脂，名字取自它交换的离子，而不是它自己带的离子。它本身带负电，扣住的是带正电的蛋白。名字一旦记反，所有洗脱顺序的预测都会颠倒。" },
    { en: "size-exclusion chromatography", cn: "尺寸排阻层析",
      def_en: "Beads with internal cavities of a set size. Large proteins cannot get in and take the short path around the outside, so they elute first; small ones go in and are slowed by a labyrinthine path. Calibrated against standards it also gives an approximate Mr, which is why it counts as one of the three physico-chemical ways of weighing a protein.",
      def_cn: "内部带有特定尺寸空腔的小球。大蛋白进不去，走外面的近路，所以先被洗脱；小蛋白进得去，被迷宫般的路径拖慢。用标准品标定后它也能给出近似的 Mr —— 这正是它算作三类蛋白质称重方法之一的原因。" },
    { en: "affinity chromatography", cn: "亲和层析",
      def_en: "Separation by binding specificity, and therefore by function: a ligand is attached to the beads and only proteins that bind it are held back. Eluted with high salt, which weakens ionic interactions bluntly, or with free ligand, which competes the protein off specifically. An engineered tag turns it into a one-step purification.",
      def_cn: "按结合特异性分离，因而是按功能分离：把一个配体接到小球上，只有能结合它的蛋白才被扣住。洗脱可用高盐（笼统地削弱离子相互作用）或游离配体（特异地把蛋白竞争下来）。配上人工标签，它就成了一步纯化。" },
    { en: "ligand", cn: "配体",
      def_en: "A group or molecule that binds to a macromolecule such as a protein. Bolted to chromatography beads it makes the column select proteins by what they bind rather than by how big or how charged they are.",
      def_cn: "能与蛋白这类大分子结合的一个基团或分子。把它拴在层析小球上，柱子挑蛋白靠的就是「它结合什么」，而不是「它多大、带多少电」。" },
    { en: "unit of enzyme activity", cn: "酶活性单位",
      def_en: "By international agreement, the amount of enzyme converting 1.0 micromole of substrate to product per minute at 25 °C under optimal conditions. Assays use a very high substrate concentration so that the initial rate measured is proportional to how much enzyme is present.",
      def_cn: "按国际约定，指在最适条件下、25 °C 时每分钟把 1.0 微摩尔底物转化为产物所需的那么多酶。测定时用很高的底物浓度，好让测得的初速率与酶的量成正比。" },
    { en: "specific activity", cn: "比活性",
      def_en: "Enzyme units per milligram of total protein, as against activity, which is the total units in the solution. It reports what fraction of the protein present is the enzyme wanted, so it rises during a purification and stops rising once the enzyme is pure.",
      def_cn: "每毫克总蛋白所含的酶单位数；而「活性」指溶液里的总单位数。它报告的是「现有蛋白里有多大比例是想要的那个酶」，所以纯化过程中它上升，一旦酶纯了就不再上升。" },
    { en: "purification factor / yield", cn: "纯化倍数／回收率",
      def_en: "The two numbers a purification table gives up. Purification factor is final specific activity divided by starting specific activity (15,000/10 = 1,500-fold in the worked case). Yield is final total activity divided by starting total activity (45,000/100,000 = 45%). They pull against each other, since raising purity always costs product.",
      def_cn: "一张纯化表能交出来的两个数字。纯化倍数＝最终比活性÷初始比活性（例中 15,000/10＝1,500 倍）。回收率＝最终总活性÷初始总活性（45,000/100,000＝45%）。两者互相拉扯，因为提高纯度总要以损失产物为代价。" },
    { en: "homodisperse system", cn: "均分散体系",
      def_en: "A dispersion whose particles are all alike, as against a polydisperse one whose particles come in a range of sizes. Inorganic colloids are polydisperse; a protein solution is not, and that uniformity is what lets a whole flask be treated as one chemical species with one mass.",
      def_cn: "颗粒彼此一模一样的分散体系，与颗粒大小参差不齐的多分散体系相对。无机胶体是多分散的，蛋白质溶液不是 —— 正是这种均一性，使得一整瓶溶液可以当作携带同一个质量的单一化学物种来处理。" },
    { en: "Tyndall effect", cn: "丁达尔效应",
      def_en: "Scattering of light by particles much larger than ordinary molecules, which makes a beam passing through a colloid visible from the side. Protein solutions show it, along with gel formation and coagulation, because their molecules are comparable in size with colloidal particles.",
      def_cn: "比普通分子大得多的颗粒对光的散射，使穿过胶体的光束从侧面看得见。蛋白质溶液会出现它，还会出现凝胶形成和凝聚 —— 因为蛋白质分子在大小上可与胶体颗粒相比拟。" },
    { en: "sedimentation coefficient", cn: "沉降系数",
      def_en: "The quantity s in dx/dt = s · ω² · x, measured in an ultracentrifuge and given in svedberg units S, where one svedberg is 10⁻¹³ seconds. It rises with Mr without being proportional to it, so the values must never be added and the mass comes from the Svedberg equation instead.",
      def_cn: "dx/dt = s · ω² · x 中的 s，在超速离心机中测得，以斯维德贝格单位 S 表示，1 斯维德贝格 = 10⁻¹³ 秒。它随 Mr 增大却不成正比，所以这些数值绝不能相加，质量要靠斯维德贝格方程算。" },
    { en: "Svedberg equation", cn: "斯维德贝格方程",
      def_en: "Mr = R·T·s / [D·(1 − v̄·ρ)], where s is measured in the ultracentrifuge, D is the diffusion coefficient, v̄ the partial specific volume and ρ the density of the solvent. It is what converts a sinking rate into a relative molecular mass.",
      def_cn: "Mr = R·T·s / [D·(1 − v̄·ρ)]，其中 s 由超速离心测得，D 是扩散系数，v̄ 是偏比容，ρ 是溶剂密度。它就是把「沉得多快」换算成相对分子质量的那道式子。" },
    { en: "electrophoretic mobility", cn: "电泳迁移率",
      def_en: "A molecule's velocity divided by the electrical potential driving it, and equally its net charge Z divided by the frictional coefficient f. Since f reflects shape, migration in a plain gel depends on size and shape at once, which is why a plain gel cannot measure mass and why SDS is needed.",
      def_cn: "分子的速度除以驱动它的电势，同时也等于净电荷 Z 除以摩擦系数 f。由于 f 反映形状，普通凝胶里的迁移同时取决于大小和形状 —— 所以普通凝胶测不了质量，也所以才需要 SDS。" },
    { en: "SDS-PAGE", cn: "SDS 聚丙烯酰胺凝胶电泳",
      def_en: "Sodium dodecyl sulfate binds about 1.4 times a protein's weight, roughly one molecule per residue. Its sulfates swamp the protein's own charge so all proteins share a charge-to-mass ratio, and it partially unfolds them into similar rods. Both terms of Z over f are pinned, leaving mass — of subunits, since the detergent pulls subunits apart.",
      def_cn: "十二烷基硫酸钠的结合量约为蛋白自身重量的 1.4 倍，大致每个残基一分子。它的硫酸基淹没蛋白自身的电荷，使所有蛋白有相近的电荷质量比，同时把蛋白部分展开成相似的棒状。Z 除以 f 里的两项都被按住，剩下的就是质量 —— 而且是亚基的质量，因为这种去污剂会把亚基拆开。" },
    { en: "isoelectric focusing", cn: "等电聚焦",
      def_en: "Ampholytes distribute themselves in an electric field to set up a pH gradient across a gel; each protein migrates until the pH equals its pI, where its net charge is zero and the field can no longer move it. Run at right angles to SDS-PAGE it gives two-dimensional electrophoresis, pI horizontally and mass vertically.",
      def_cn: "两性电解质在电场中自行分布，在胶上建立起 pH 梯度；每种蛋白一直迁移到 pH 等于其 pI 的位置，在那里净电荷为零，电场再也推不动它。与 SDS-PAGE 垂直组合就是双向电泳，水平方向读 pI，垂直方向读质量。" },
    { en: "ampholytes", cn: "两性电解质",
      def_en: "Low molecular weight organic acids and bases that arrange themselves along an electric field and thereby create the stable pH gradient that isoelectric focusing needs.",
      def_cn: "低分子量的有机酸和碱，它们会沿电场自行排布，从而造出等电聚焦所需要的那个稳定 pH 梯度。" },
    { en: "x-ray crystallography", cn: "X 射线晶体学",
      def_en: "Many copies of a molecule are ordered into a solid array that diffracts x-rays; the positions and intensities of the diffracted beams depend on where the atoms are, and mathematics reconstructs the arrangement that would give that pattern. The answer is averaged over the whole array and the whole collection time, so it says little about motion.",
      def_cn: "把一个分子的大量拷贝排成有序固体阵列，使其衍射 X 射线；衍射线的位置与强度取决于原子在哪里，再用数学反推出能给出该图样的排布。答案是对整个阵列和整段采集时间的平均，所以几乎不涉及运动。" },
    { en: "NMR", cn: "核磁共振",
      def_en: "Nuclear magnetic resonance, carried out on molecules in solution. It reports on atomic nuclei and the chemical environment around each, and a structure is computed from hundreds of distance and geometric constraints. Motion survives the measurement, and the size limit comes from having to assign every signal to a particular atom first.",
      def_cn: "在溶液中进行的核磁共振。它报告原子核及其周围的化学环境，结构由数百个距离与几何约束计算得出。运动在测量中被保留下来；而它的分子大小上限，源于必须先把每一个信号指认到某个具体原子。" },
    { en: "cryo-electron microscopy", cn: "冷冻电镜",
      def_en: "A sample quick-frozen in vitreous ice and imaged while frozen, which limits beam damage. Thousands of molecules lie in random orientations, are identified and computationally sorted, and their two-dimensional images are combined into one three-dimensional structure. No crystal is required.",
      def_cn: "样品被急冻在玻璃态冰中并在冷冻状态下成像，从而限制电子束损伤。成千上万个分子以随机取向存在，被识别并由计算机按取向分类，其二维图像再合并成一个三维结构。全程不需要晶体。" }
  ]
};

/* ----------------------------------------------------------- 探究蛋白质的功能 ---- */
/* Member: L-9-2-1 alone. The Czech book has no section on comparative genomics,
   RNA-Seq, fluorescent fusions, interaction screens or CRISPR, so there is nothing
   to fold in; what this rewrite adds is one bold claim per step for 极简 mode and
   the links that tie it to the purification chain before it and the cloning chain
   after it — the affinity tag, the fusion protein and the bacterial immune system
   are the same three objects seen from three sides. */
window.BIOLITE_SPINE["key:exploring-protein-function"] = {
  assumed: ["protein", "gene", "genome", "DNA", "RNA", "mrna", "cell", "enzyme",
            "nucleus", "chromosome", "bacteria", "virus", "yeast", "antibody",
            "plasmid", "column", "amino acid", "sequence", "mutation", "phenotype",
            "ligand", "receptor", "transcription", "translation", "phosphorylation",
            "evolution", "database", "microscope", "vitamin", "jellyfish",
            "nematode", "mosquito", "tumour", "glutamate", "calmodulin", "protease",
            "electroporation", "affinity chromatography", "mass spectrometry",
            "reverse transcriptase", "DNA polymerase", "recombination",
            "homologous recombination", "ATP", "peptide", "primer", "sperm"],
  nodeTitle_en: "Exploring protein function",
  nodeTitle_cn: "探究蛋白质的功能",
  title_en: "You have a gene and no idea what its protein does — four kinds of evidence, ending with taking the protein away",
  title_cn: "你有一个基因，却不知道它的蛋白在做什么 —— 四类证据，最后一类是把这个蛋白拿掉",
  steps: [
    {
      en: "Asking what a protein does is three different questions, and each is answered by a different experiment. Phenotypic function is what the protein does to the whole organism: remove it and the organism grows slowly, develops abnormally, or dies. Cellular function is the set of other molecules it works with inside a cell. Molecular function is the exact biochemical activity — which reaction it catalyses, which ligand it binds. **Holding those three apart decides which method to reach for, and an answer at one level is not an answer at another**: knowing that a protein binds ATP says nothing about whether an organism can live without it.",
      cn: "问「一个蛋白在做什么」，其实是三个不同的问题，每一个由不同的实验来回答。表型功能：这个蛋白对整个生物体做了什么 —— 把它去掉，生物体生长变慢、发育异常，或者死亡。细胞功能：它在细胞里和哪些分子一起工作。分子功能：确切的生化活性 —— 催化哪个反应、结合哪个配体。**把这三层分开，才知道该伸手去拿哪种方法；而且一个层面上的答案不是另一个层面的答案：知道某个蛋白结合 ATP，完全不说明缺了它生物体能不能活。**",
      src: "A p.317, §9.2"
    },
    {
      link_en: "the cheapest evidence first, because it costs no bench work at all",
      link_cn: "先看最便宜的证据，因为它完全不用做实验",
      en: "A new protein sequence is first compared with sequences whose function is already known, and BLAST is the program that does the comparison, searching the public sequence databases at NCBI and Ensembl for anything similar. Similarity counts as evidence only because of evolution: two sequences are similar because they descend from one ancestral sequence, and a shape that has been kept usually kept its job along with it. Three words decide whether a hit means anything. Orthologs are related genes in different species; paralogs are related genes within one species, usually made by gene duplication; and synteny is conservation of gene order along a chromosome, so two genes sitting at the same position inside segments whose neighbouring genes also match are more likely to be orthologous than the sequence match alone can show. Function established for a gene in one species carries over tentatively to its ortholog in another, most safely between close relatives such as mouse and human. **Sequence comparison alone does not get far enough: every newly sequenced genome still contains many genes, often 40% or more, about which little or nothing is known.**",
      cn: "拿到一段新的蛋白序列，第一步是把它和已知功能的序列比较，做这件比较的程序叫 BLAST：把你的序列丢进去，到 NCBI 和 Ensembl 的公共序列数据库里搜出所有相似的。相似性之所以能当证据，完全是因为进化：两段序列相似，是因为它们来自同一段祖先序列；而一个被保留下来的形状，通常连同它的活儿一起被保留了下来。一个搜索结果算不算数，取决于三个词。直系同源（orthologs）是不同物种之间的相关基因；旁系同源（paralogs）是同一物种内部的相关基因，通常由基因重复产生；共线性（synteny）指的是染色体上基因顺序的保守 —— 当两个基因位于「邻居也彼此对得上」的片段中的同一位置时，它们互为直系同源的可能性，就超出单靠序列相似所能显示的程度。在一个物种里确立的功能，可以暂定地搬到另一个物种的直系同源基因上，在小鼠与人这样的近亲之间最稳妥。**光靠序列比较走不了多远：每一个新测序的基因组里仍然有大量基因 —— 常常占四成以上 —— 我们对它们几乎一无所知。**",
      src: "A p.317"
    },
    {
      link_en: "so go to the cell and ask when and where the protein is actually present",
      link_cn: "那就到细胞里去问：这个蛋白究竟在什么时候、什么地方出现",
      en: "The transcriptome is the whole set of RNAs a cell has transcribed at one given moment; the proteome is the whole set of proteins present at one given moment. Those four words, at one given moment, are the entire content of both terms. **A genome is fixed, while a transcriptome and a proteome change with tissue, condition and time** — and how they shift when one gene is altered is among the strongest clues to what that gene's product was doing.",
      cn: "转录组是一个细胞在某一给定时刻转录出来的全部 RNA；蛋白质组是某一给定时刻存在的全部蛋白。「在某一给定时刻」这半句，就是这两个词的全部内涵。**基因组是固定的，而转录组和蛋白质组随组织、条件和时间变化 —— 当你改动某一个基因时，它们如何移动，是关于该基因产物在干什么的最有力线索之一。**",
      src: "A p.317"
    },
    {
      link_en: "the method that reads a transcriptome, and the reason it counts as well as lists",
      link_cn: "读取转录组的方法 —— 以及它为什么不只是「列清单」，还能「数数」",
      en: "RNA-Seq is deep sequencing of a cell's RNA: the RNA is isolated, fragmented to a size the sequencing machine likes, copied into double-stranded DNA by reverse transcriptase — an enzyme that makes DNA from an RNA template — and sequenced. Two preparation choices each encode a decision. For the whole transcriptome, prime the reverse transcriptase with random hexamers, six-base primers that land everywhere; six bases suffice because an RNA-DNA hybrid is more stable than a DNA-DNA one. For protein-coding genes only, catch the eukaryotic messenger RNAs by their poly(A) tails on beads coated with poly(dT). The method now runs on a single cell, which is how the transcripts of different parts of one tissue are catalogued, and it matters most in a tumour, where genome instability has produced a range of cell types. **Counting comes free — more copies of one RNA give more sequencing reads, so read number reports abundance** — but the messenger RNAs present are only a clue to the proteins present, because not every one of them is translated straight away.",
      cn: "RNA-Seq 就是对细胞 RNA 做深度测序：分离 RNA，打碎到测序仪喜欢的长度，用逆转录酶（一种以 RNA 为模板合成 DNA 的酶）拷贝成双链 DNA，再测序。有两个制备上的选择，各自编码了一个决定。要整个转录组，就用随机六聚体（落在到处都能落的六碱基引物）来引发逆转录；六个碱基就够，因为 RNA-DNA 杂合体比 DNA-DNA 杂合体更稳定。只要蛋白编码基因，就用包被 poly(dT) 的磁珠，通过真核 mRNA 的 poly(A) 尾把它们钓出来。这个方法如今灵敏到能用于单个细胞，于是可以编目同一组织不同部位各自在转录什么；而它在肿瘤里最要紧，因为基因组不稳定性在那里造出了一系列不同的细胞类型。**「计数」是白送的 —— 某种 RNA 拷贝越多，产生的读长就越多，于是读长数目直接报告丰度 —— 但存在的 mRNA 只是关于存在哪些蛋白的线索，因为并非每一条都会马上被翻译。**",
      src: "A p.318"
    },
    {
      link_en: "and the method that closes exactly that gap",
      link_cn: "而下面这个方法，补的正是这个缺口",
      en: "Mass spectrometry separates molecules by mass and charge, and it catalogues and quantifies the thousands of proteins in a cell directly. It complements RNA-Seq: read counts list what was transcribed, mass spectrometry lists what was transcribed and then translated. It also adds one dimension no sequencing method has, because it reports how each protein has been chemically modified and therefore what regulatory state it is in. **A phosphorylated enzyme and its unphosphorylated form come from the same gene and the same transcript and are two different molecules, and only this method sees the difference.**",
      cn: "质谱按质量与电荷把分子分开，直接编目并定量一个细胞里的数千种蛋白。它是对 RNA-Seq 的补充：读长数目列出的是被转录的东西，质谱列出的是既被转录又被翻译的东西。它还多出一个维度，任何测序方法都没有：它报告每个蛋白被怎样化学修饰，从而报告它处在什么调控状态。**一个磷酸化的酶和它未磷酸化的形式，来自同一个基因、同一条转录本，却是两个不同的分子 —— 只有这个方法看得见这个差别。**",
      src: "A p.318",
      see: [{ id: "L-3-4-1", en: "how a mass spectrometer turns a protein into a sequence", cn: "质谱是怎么把一个蛋白变成一段序列的" }]
    },
    {
      link_en: "abundance is not location, and location needs a lamp",
      link_cn: "丰度不等于位置；要看位置，得给它点一盏灯",
      en: "Green fluorescent protein, GFP, comes from the jellyfish Aequorea victoria and glows green under blue light. Fuse your gene to the GFP gene and the cell makes one fusion protein carrying both jobs, so your protein can be watched while the cell is alive. It works almost anywhere for one structural reason: GFP is a barrel of beta strands with its light-emitting group at the centre, and that group is generated autocatalytically from three of GFP's own residues, Ser65-Tyr66-Gly67, needing nothing from the host except molecular oxygen. Osamu Shimomura found the protein, Martin Chalfie showed the fusion trick works, and Roger Tsien's engineering together with related proteins from other sea animals produced variants across the visible spectrum, so two tagged proteins can be told apart by colour in one cell. A GLR1-GFP fusion lights up a glutamate receptor in the nematode Caenorhabditis elegans, and Escherichia coli expressing GFP fused to a plasmid-binding protein shows bright dots exactly where its plasmids sit. **Having no cofactor to supply means there is no cell that cannot support it, and a few molecules are enough to see down a microscope.**",
      cn: "绿色荧光蛋白（GFP）来自水母 Aequorea victoria，在蓝光下发绿光。把你的基因和 GFP 的基因融合，细胞就造出一个身兼两职的融合蛋白，于是你的蛋白可以在细胞还活着的时候被观察。它几乎放到哪儿都能用，原因是一个结构上的事实：GFP 是一个 β 折叠围成的桶，发光基团位于桶心，而这个基团由 GFP 自身的三个残基 Ser65-Tyr66-Gly67 自催化生成，除分子氧之外不向宿主索取任何东西。Osamu Shimomura 发现了这个蛋白，Martin Chalfie 证明融合这一招行得通；Roger Tsien 的蛋白质工程加上从其他海洋动物分到的同类荧光蛋白，做出了覆盖可见光谱的各种变体，于是同一个细胞里两个被标记的蛋白可以靠颜色分开。GLR1-GFP 融合体点亮线虫 Caenorhabditis elegans 里的一个谷氨酸受体；表达「质粒结合蛋白 + GFP」的 Escherichia coli 则显示出明亮的光点，恰好标出质粒所在的位置。**不需要额外提供辅因子，就意味着没有哪个细胞供不起它；而显微镜下几个分子就够看见。**",
      src: "A p.319"
    },
    {
      link_en: "a fusion protein is still an altered protein, and sometimes that is unacceptable",
      link_cn: "但融合蛋白终究是被改动过的蛋白，有时这不能接受",
      recall_en: "the same trade as the affinity tag that made a protein purifiable — convenience bought with an alteration",
      recall_cn: "和「靠亲和标签把蛋白变得可纯化」是同一笔交易 —— 方便是用改动换来的",
      en: "Immunofluorescence locates the unaltered native protein instead, using an antibody that carries a fluorescent dye. The indirect version amplifies the signal: an unlabelled first antibody binds your protein, and several dye-carrying second antibodies then bind that first one, so one target ends up wearing many dyes rather than one. A stronger version of the same trick uses biotin, a small vitamin that streptavidin — a bacterial protein — grips in one of the tightest non-covalent interactions known: attach biotin to the first antibody, detect it with dye-linked streptavidin, and every target again carries several dyes. **The cost is fixation of the cell, and therefore its death — you trade a living cell for an honest untagged one.**",
      cn: "免疫荧光换一条路，去看未经改动的天然蛋白，用的是一个带荧光染料的抗体。间接法用来放大信号：先用一个不带标记的一抗结合你的蛋白，再让若干个带染料的二抗去结合这个一抗，于是一个目标身上挂的不是一个染料，而是很多个。同一招还有更强的版本：用生物素 —— 一种小分子维生素，链霉亲和素（一种细菌蛋白）抓住它靠的是已知最紧的非共价相互作用之一 —— 把生物素接到一抗上，再用连着染料的链霉亲和素去检测，每个目标同样挂上好几个染料。**代价是必须把细胞固定，也就是把它杀死 —— 你是拿「活细胞」换了「没被加标签的真实蛋白」。**",
      src: "A p.320"
    },
    {
      link_en: "that answers where. The cellular level asks who with",
      link_cn: "以上回答的是「在哪」。细胞层面的问题是「和谁一起」",
      en: "An epitope tag is a short peptide stuck onto your protein for which a well-characterised antibody already exists commercially. Express the tagged protein, precipitate it with that antibody, and whatever was bound to your protein at that moment comes down with it; mass spectrometry then names the passengers. Tandem affinity purification runs the same logic twice with two different tags in series — protein A, which binds immobilised IgG, then a calmodulin-binding peptide, which binds immobilised calmodulin — with a cut by the specific TEV protease between the two columns. **Only an interaction surviving both steps is reported, which is what suppresses false positives**: a weak or promiscuous binder that rode along on the first column is very unlikely to survive a second, unrelated one.",
      cn: "表位标签是接在你的蛋白上的一小段肽，市面上已经有性质研究透彻的抗体专门认它。表达带标签的蛋白，用那个抗体把它沉淀下来，那一刻结合在你的蛋白上的东西就跟着一起下来；随后用质谱点名这些「搭车的」。串联亲和纯化把同一套逻辑用两个不同的标签连着跑两遍 —— 先是 Protein A（结合固定化的 IgG），再是一段钙调蛋白结合肽（结合固定化的钙调蛋白）—— 两根柱子之间用特异的 TEV 蛋白酶切一刀。**只有两步都活下来的相互作用才被报告，这正是它压住假阳性的原因：一个碰巧在第一根柱子上蹭下来的弱结合物或滥交结合物，极不可能在第二根毫不相关的柱子上也活下来。**",
      src: "A p.320–321"
    },
    {
      link_en: "both of those pull proteins out of a broken cell. The next one asks the question inside a living one",
      link_cn: "上面两招都是从「被打碎的细胞」里往外捞。下面这招是在活细胞内部提问",
      en: "Yeast two-hybrid analysis turns a physical meeting between two proteins into a yes-or-no answer visible on a plate. It exploits Gal4p, a yeast protein that switches genes on and is built from two parts, one binding a specific DNA sequence and the other activating RNA polymerase; those two parts stay folded and stable when separated, and transcription fires only when they are brought close together. Fuse protein X to the DNA-binding part and protein Y to the activating part in two separate constructs, and if X and Y touch each other, the two parts of Gal4p are dragged into proximity and a reporter gene — a gene whose product either lets the cell grow on selective medium or turns it a colour — is switched on. At scale, one yeast strain library carries many DNA-binding fusions, a second strain carries the activating fusion for your protein, the strains are mated, and sequencing the fusion carried by a diploid whose reporter fired names the partner. **It probes the interaction inside an intact living cell, and multiprotein complexes make it generate false positives, so a hit from it is a lead rather than a result.**",
      cn: "酵母双杂交把两个蛋白之间的一次物理相遇，变成平板上肉眼可见的是/否答案。它利用的是 Gal4p —— 酵母里一个负责把基因打开的蛋白，由两个部分构成：一个结合特定 DNA 序列，另一个激活 RNA 聚合酶；这两部分分开时各自折叠稳定，而只有被凑到一起，转录才会启动。把蛋白 X 融合到 DNA 结合的那部分、把蛋白 Y 融合到激活的那部分，做成两个独立构建体；如果 X 和 Y 真的碰在一起，Gal4p 的两部分就被拽到一处，一个报告基因（其产物要么让细胞在选择培养基上长起来，要么让它变色）随之被打开。规模化时，一株酵母的文库携带许多 DNA 结合部分的融合体，另一株携带你那个蛋白的激活部分融合体，两株交配；把报告基因被点亮的那个二倍体所携带的融合基因测序，就点出了那个伙伴。**它是在完整的活细胞内部探测相互作用；而多蛋白复合物会让它产生假阳性，所以它给出的命中是一条线索，而不是一个结论。**",
      src: "A p.321–322"
    },
    {
      link_en: "the phenotypic level has only one honest experiment: take the protein away",
      link_cn: "表型层面只有一个诚实的实验：把这个蛋白拿掉",
      en: "The general strategy is older than any editing tool: cut the gene at a functionally critical site and let the cell's own repair machinery ruin it. In eukaryotes the cut is a double-strand break, both strands of the DNA severed at the same place, and it is usually sealed by non-homologous end joining, a repair route that rejoins the two ends imprecisely and often deletes or adds a few nucleotides at the junction. A few nucleotides gained or lost inside a coding sequence wrecks the reading frame, so the gene is dead, which is what the experiment wanted. **CRISPR/Cas9 introduced no new principle of gene inactivation; it made the cut easy to aim, which is why systems developed from 2011 largely displaced the older targeting methods.**",
      cn: "这个总策略比任何编辑工具都老：在一个功能关键的位点把基因切开，让细胞自己的修复机器把它搞坏。在真核细胞里，这一刀造成的是双链断裂（DNA 两条链在同一处都被切断），通常由非同源末端连接封上 —— 这是一种把两个断端不精确地接回去的修复途径，连接处常常少几个或多几个核苷酸。编码序列里多几个少几个核苷酸就毁了阅读框，基因就死了，而这正是这个实验想要的。**CRISPR/Cas9 没有引入任何新的基因失活原理，它只是让这一刀变得容易瞄准 —— 这就是 2011 年以来发展出的这套系统在很大程度上取代了旧靶向方法的原因。**",
      src: "A p.322"
    },
    {
      link_en: "and to see why aiming it is so easy, read the name",
      link_cn: "而要理解它为什么那么容易瞄准，读一下这个名字",
      en: "CRISPR stands for clustered, regularly interspaced short palindromic repeats: a stretch of a bacterial genome made of short repeated sequences at regular intervals, with a different spacer sequence sitting between each pair of repeats. Every spacer is a piece of a bacteriophage — a virus of bacteria — that infected this bacterium before and failed to kill it. A Cas protein, for CRISPR-associated, is a nuclease, an enzyme that cuts nucleic acid. Together the two are an immune system: when the same phage comes back, the repeat array is transcribed into RNA, individual spacers are cut out of that RNA as guide RNAs, a guide RNA joins one or more Cas proteins — in some systems with a second RNA called tracrRNA — and the complex finds the matching viral DNA by base pairing and destroys it. **The bacterium is consulting a written record of infections it survived rather than inventing a targeting sequence each time, so what aims the nuclease is a sequence and nothing else.**",
      cn: "CRISPR 是 clustered, regularly interspaced short palindromic repeats（成簇的、规律间隔的短回文重复）的缩写：细菌基因组里一段由规律间隔的短重复序列组成的阵列，每两个重复之间夹着一段各不相同的 spacer（间隔）序列。每一段 spacer 都是一个噬菌体（感染细菌的病毒）的片段 —— 那个噬菌体曾经感染过这个细菌，却没能杀死它。Cas 蛋白（CRISPR-associated）是一种核酸酶，即切核酸的酶。两者合起来就是一套免疫系统：当同一种噬菌体再来时，这串重复阵列被转录成 RNA，单个 spacer 从这条 RNA 上被切出来，成为 guide RNA；一条 guide RNA 与一个或多个 Cas 蛋白结合（某些系统里还要加上第二条叫 tracrRNA 的 RNA），这个复合物靠碱基配对找到匹配的病毒 DNA 并把它摧毁。**细菌是在查阅一份「我扛过哪些感染」的书面档案，而不是每次现造一段靶向序列 —— 所以给这把核酸酶瞄准的，只是一段序列，别无其他。**",
      src: "A p.322"
    },
    {
      link_en: "and anything that works by base pairing can be retyped",
      link_cn: "而凡是靠碱基配对工作的东西，都可以重打一遍",
      en: "The tool is that natural system stripped down. Streptococcus pyogenes carries a CRISPR/Cas system simple enough that cutting DNA needs only one Cas protein, Cas9. Jennifer Doudna's and Emmanuelle Charpentier's laboratories fused the guide RNA and the tracrRNA into one single guide RNA, and that sgRNA does two jobs at once: it pairs with the target and it activates Cas9's cutting machinery. Delivery follows ordinary cloning practice — plasmids carrying Cas9 and the sgRNA enter microbial cells by electroporation, and enter mammalian cells packaged inside engineered viruses that carry them to the nucleus. That fusion is the engineering step that made the system programmable, because **the 20-nucleotide targeting stretch inside an sgRNA can simply be rewritten to point Cas9 at almost any sequence in any genome**.",
      cn: "工具就是把这套天然系统剥到只剩骨架。酿脓链球菌（Streptococcus pyogenes）带有一套简单到「切 DNA 只需要一个 Cas 蛋白」的 CRISPR/Cas 系统，这个蛋白叫 Cas9。Jennifer Doudna 与 Emmanuelle Charpentier 的实验室把 guide RNA 和 tracrRNA 融合成一条 single guide RNA；这条 sgRNA 同时干两件事：与靶序列配对，并激活 Cas9 的切割装置。递送方式就是普通克隆那一套 —— 带 Cas9 与 sgRNA 的质粒靠电穿孔进微生物细胞，进哺乳动物细胞则打包在改造过的病毒里，由病毒把它们送进细胞核。**正是这一步融合让整套系统变得可编程，因为 sgRNA 里那段 20 个核苷酸的靶向序列可以被直接改写，把 Cas9 指向任何基因组中几乎任何一段序列。**",
      src: "A p.322–323"
    },
    {
      link_en: "one detail inside Cas9 decides whether you get a knockout or an edit",
      link_cn: "Cas9 内部的一个细节，决定了你拿到的是「敲除」还是「编辑」",
      recall_en: "it works by choosing which repair route gets the damage — the imprecise end joining from three steps up, or homologous recombination",
      recall_cn: "它靠的是「让哪条修复途径来处理这个损伤」—— 上面第三步说的那种不精确的末端连接，还是同源重组",
      en: "Cas9 carries two separate nuclease domains, one cutting the DNA strand that the sgRNA has paired with and the other cutting the opposite strand. Leave both active and the result is a double-strand break, non-homologous end joining repairs it badly, and the gene is knocked out at a random junction. Inactivate just one of the two domains and the enzyme cuts one strand only, making a nick, which is a single-strand break; supply alongside it a donor DNA fragment carrying the sequence change wanted, and the nick is repaired by homologous recombination, which copies the donor. **A double-strand break plus imprecise end joining is how a gene is deleted, and a nick plus a donor is how one is rewritten** — choosing between them is choosing which repair route sees the damage.",
      cn: "Cas9 带有两个独立的核酸酶结构域：一个切「与 sgRNA 配上对」的那条链，另一个切对面那条。两个都留着有活性，得到的就是双链断裂，非同源末端连接粗糙地封上，基因在一个随机的连接处被敲掉。只让两个结构域中的一个失活，酶就只切一条链，造成一个 nick（缺口），即单链断裂；这时再补上一段携带你想要的序列改动的供体 DNA，这个缺口就由同源重组来修复，而同源重组会照抄供体。**双链断裂加上不精确的末端连接，是删掉一个基因的办法；缺口加上供体，是改写一个基因的办法 —— 在两者之间做选择，就是在选择让哪条修复途径看到这个损伤。**",
      src: "A p.323"
    },
    {
      link_en: "and once one gene can be perturbed on demand, a whole genome can be perturbed at once",
      link_cn: "而一旦「按需扰动一个基因」成立，就可以一次性扰动整个基因组",
      en: "A genetic screen introduces a perturbation — inactivation or activation of a gene — so that each individual cell in a population has one gene affected while across the whole population most or all genes are affected in some cell; apply a stress, and cells missing a gene they needed to survive it drop out. CRISPR scales this. An sgRNA library covering nearly every gene in a genome is built, and the 20 bp targeting sequence inside each sgRNA doubles as a unique bar code that deep sequencing reads back out. The cassettes travel in lentiviral vectors, which are vectors derived from HIV with its own multiplication genes removed, delivered at low multiplicity of infection so that most cells take up only one cassette, which is what keeps one perturbation per cell true. Which Cas9 variant rides along sets the effect: unmodified Cas9 cuts and knocks out, a nuclease-dead Cas9 merely sits on the DNA and blocks transcription, and Cas9 fused to a repressor or activator domain silences or boosts transcription without cutting DNA at all. **After selection, the rise or fall of each bar code says which genes were required, dispensable, or actively harmful under that stress.**",
      cn: "一次遗传筛选引入一个扰动（让某个基因失活或激活），使群体中每个细胞只有一个基因受影响，而在整个群体层面几乎所有基因都在某个细胞里被影响过；施加一种压力，缺了「活下去所必需的那个基因」的细胞就掉队。CRISPR 把这套做法规模化：构建覆盖基因组中几乎每个基因的 sgRNA 文库，而每条 sgRNA 里那 20 bp 的靶向序列同时兼作一个独一无二的条形码，深度测序能把它读回来。这些表达盒装在慢病毒载体里 —— 一类源自 HIV、并已去除其自身增殖基因的载体 —— 以较低的感染复数递送，好让大多数细胞只拿到一个表达盒，这正是保证「一个细胞只有一个扰动」的关键。同车携带的是哪种 Cas9 变体，决定了产生什么效果：未改造的 Cas9 切开、敲除；核酸酶失活的 Cas9 只是趴在 DNA 上、阻断转录；融合了阻遏或激活结构域的 Cas9 则完全不切 DNA，只沉默或增强转录。**选择之后，每个条形码丰度的上升或下降就说明：在那种压力下，哪些基因是必需的、可有可无的，或者反而是有害的。**",
      src: "A p.323–324"
    },
    {
      link_en: "the same machinery pointed at a whole wild population, and it does not come back",
      link_cn: "同一套装置对准整个野生种群 —— 而且收不回来",
      en: "A gene drive is a cassette engineered to spread through a wild population faster than ordinary inheritance allows. The proven design in mosquitoes is the X-shredder: insert into the Y chromosome a cassette expressing Cas9 plus several sgRNAs aimed at multiple unique sites on the X chromosome, under a control system active only during spermatogenesis, which is the making of sperm. During spermatogenesis the cassette destroys the X chromosome at several places at once, so only Y-bearing sperm stay viable; every offspring of such a male is male, every one of those males carries the same cassette, females become scarce and the population collapses. Resistance could evolve by mutation at the sgRNA target sites, which is why multiple sites are used. **Once males carrying a gene drive are released into the wild the effect is essentially impossible to call back, and it is for that reason that the work has stayed in the laboratory.**",
      cn: "基因驱动是一个被设计成「在野生种群中扩散得比普通遗传快得多」的表达盒。在蚊子身上已经验证的设计叫 X-shredder（X 染色体粉碎器）：往 Y 染色体里插入一个表达盒，它表达 Cas9 外加若干条瞄准 X 染色体上多个独特位点的 sgRNA，并置于一个只在精子发生期间才活跃的调控系统之下。精子发生期间，这个表达盒同时在多个位点摧毁 X 染色体，于是只有带 Y 染色体的精子还能存活；这样一头雄性的后代全是雄性，而这些雄性全都携带同一个表达盒，雌性变得稀少，种群随之崩溃。抗性可能通过 sgRNA 靶点处的突变演化出来，这正是要用多个靶点的原因。**一旦携带基因驱动的雄性被放到野外，这个效果基本无法收回 —— 正是因为这一点，这项工作至今停留在实验室里。**",
      src: "A p.325, Box 9-1",
      openQuestion_en: "Whether a drive released into one population would stay in it is not settled, and that is part of why no release has been made.",
      openQuestion_cn: "一个被释放到某个种群里的驱动会不会就留在那个种群里，目前并无定论 —— 这也是至今没有实际释放的原因之一。"
    }
  ],
  terms: [
    { en: "ortholog", cn: "直系同源基因",
      def_en: "A gene in a different species descended from the same ancestral gene, with a clear sequence and functional relationship. Function established in one species carries over tentatively — most safely between close relatives, and more safely still when gene order around it also matches.",
      def_cn: "不同物种中源自同一祖先基因、序列与功能关系明确的基因。在一个物种里确立的功能可以暂定地搬过去 —— 近亲之间最稳妥，而当它周围的基因顺序也对得上时更稳妥。" },
    { en: "paralog", cn: "旁系同源基因",
      def_en: "A gene descended from the same ancestral gene as another one inside a single species, usually created by duplication of that gene. It is the within-species counterpart of an ortholog.",
      def_cn: "在同一个物种内部与另一个基因源自同一祖先基因的基因，通常由该基因的重复产生。它是直系同源在物种内部的对应物。" },
    { en: "synteny", cn: "共线性",
      def_en: "Conservation of gene order along a chromosome between related species, rather than conservation of the genes alone. Two genes at the same relative position within matching segments are more likely to be orthologous than sequence similarity by itself can show.",
      def_cn: "相关物种之间染色体上基因顺序的保守，而不只是基因本身的保守。位于彼此吻合的片段中相同相对位置的两个基因，比单靠序列相似所能显示的更可能互为直系同源。" },
    { en: "transcriptome", cn: "转录组",
      def_en: "All the RNA a cell has transcribed at one given moment. Unlike a genome, which is fixed, it changes with tissue, condition and time — and that change is the informative part.",
      def_cn: "一个细胞在某一给定时刻转录出来的全部 RNA。与固定的基因组不同，它随组织、条件和时间变化 —— 而这种变化正是有信息量的部分。" },
    { en: "proteome", cn: "蛋白质组",
      def_en: "All the proteins present in a cell at one given moment. Mass spectrometry catalogues and quantifies them directly and also reports how each has been chemically modified, which is a read-out of its regulatory state.",
      def_cn: "一个细胞在某一给定时刻存在的全部蛋白。质谱可以直接编目并定量它们，还能一并报告每个蛋白被怎样化学修饰 —— 这就是它调控状态的读出。" },
    { en: "RNA-Seq", cn: "RNA 测序",
      def_en: "Deep sequencing of a cell's RNA after reverse transcription into DNA. More copies of a transcript give more reads, so abundance is measured with no extra step. Random hexamers prime the whole transcriptome; poly(dT) beads select the eukaryotic messenger RNAs by their tails. Sensitive enough for one cell.",
      def_cn: "把细胞 RNA 逆转录成 DNA 后做深度测序。某个转录本拷贝越多，产生的读长越多，于是不用额外步骤就测到了丰度。随机六聚体用于整个转录组；poly(dT) 磁珠则靠尾巴挑出真核 mRNA。灵敏度已足以用于单个细胞。" },
    { en: "green fluorescent protein", cn: "绿色荧光蛋白 (GFP)",
      def_en: "A beta-barrel protein from the jellyfish Aequorea victoria whose light-emitting group forms autocatalytically from three of its own residues, Ser65-Tyr66-Gly67, using only molecular oxygen. Because it needs nothing from the host cell, a gene fused to it can be watched in almost any living cell.",
      def_cn: "来自水母 Aequorea victoria 的 β 桶状蛋白，其发光基团由自身三个残基（Ser65-Tyr66-Gly67）自催化生成，只需要分子氧。因为它对宿主细胞一无所求，与它融合的基因几乎可以在任何活细胞里被观察。" },
    { en: "immunofluorescence", cn: "免疫荧光",
      def_en: "Locating a native, untagged protein with a dye-carrying antibody. The indirect version amplifies the signal by binding several dyed second antibodies to one unlabelled first antibody, or by a biotin-streptavidin pair. It requires fixation of the cell, and therefore its death.",
      def_cn: "用带荧光染料的抗体去定位天然的、未加标签的蛋白。间接法通过让若干个带染料的二抗结合一个不带标记的一抗、或借助生物素—链霉亲和素这对搭档来放大信号。它要求把细胞固定，也就是把细胞杀死。" },
    { en: "epitope tag", cn: "表位标签",
      def_en: "A short peptide fused to a protein under study, chosen because a well-characterised commercial antibody binds it tightly. Used to precipitate that protein and identify everything that came down bound to it.",
      def_cn: "融合在待研究蛋白上的一小段肽，选它是因为市面上已有性质透彻、结合很紧的抗体。用来把该蛋白沉淀下来，再鉴定跟着一起下来的所有东西。" },
    { en: "tandem affinity purification", cn: "串联亲和纯化 (TAP)",
      def_en: "Two different affinity tags in series on one target protein — protein A, then a calmodulin-binding peptide — purified over two columns with a protease cut in between. Only partners surviving both steps are reported, which is what suppresses false positives.",
      def_cn: "在一个目标蛋白上串联两个不同的亲和标签 —— 先 Protein A，再一段钙调蛋白结合肽 —— 过两根柱子，中间切一刀。只有两步都活下来的伙伴才被报告，这正是它压住假阳性的原因。" },
    { en: "yeast two-hybrid analysis", cn: "酵母双杂交",
      def_en: "Detecting a protein-protein contact inside a living yeast cell by splitting the activator Gal4p into its DNA-binding and activating parts, fusing one candidate protein to each, and reading out a reporter gene that fires only when a contact drags the two parts together.",
      def_cn: "在活的酵母细胞内检测蛋白之间的接触：把激活蛋白 Gal4p 拆成 DNA 结合部分和激活部分，把两个候选蛋白各融合一个，再读出报告基因 —— 只有当接触把两部分拽到一起时，报告基因才被点亮。" },
    { en: "CRISPR", cn: "CRISPR",
      def_en: "Clustered, regularly interspaced short palindromic repeats — an array of short repeats in a bacterial genome with spacer sequences between them, each spacer a fragment of a phage that infected the bacterium before without killing it. Transcribed and processed into guide RNAs that lead a Cas nuclease to matching viral DNA. A filed record of survived infections, repurposed since 2011 into a programmable editing tool.",
      def_cn: "成簇的、规律间隔的短回文重复 —— 细菌基因组中一串短重复序列，重复之间夹着 spacer，每段 spacer 都是曾经感染过它却没能杀死它的噬菌体的片段。它被转录并加工成 guide RNA，引导 Cas 核酸酶找到匹配的病毒 DNA。这是一份「扛过的感染」的存档，自 2011 年起被改造成可编程的编辑工具。" },
    { en: "single guide RNA", cn: "单一向导 RNA (sgRNA)",
      def_en: "The engineered fusion of a bacterium's natural guide RNA with its tracrRNA into one molecule, made principally in Jennifer Doudna's and Emmanuelle Charpentier's laboratories. Its 20-nucleotide targeting stretch pairs with the genomic target and can be retyped at will, which is the whole basis of programmability.",
      def_cn: "把细菌天然的 guide RNA 与 tracrRNA 工程融合成一个分子，主要由 Jennifer Doudna 与 Emmanuelle Charpentier 的实验室完成。它 20 个核苷酸的靶向段与基因组靶点配对，并且可以随意改写 —— 这就是可编程性的全部基础。" },
    { en: "non-homologous end joining", cn: "非同源末端连接 (NHEJ)",
      def_en: "The eukaryotic repair route that rejoins the two ends of a severed DNA duplex without using a template, sealing the break imprecisely and often deleting or adding nucleotides at the junction. A coding sequence repaired this way usually loses its reading frame, which is what turns a Cas9 cut into a knockout.",
      def_cn: "真核细胞把被切断的 DNA 双链两个断端不用模板直接接回去的修复途径，封口不精确，连接处常常缺失或插入核苷酸。编码序列这样被修复后通常丢掉阅读框 —— 这正是 Cas9 的一刀变成敲除的原因。" },
    { en: "nick", cn: "缺口",
      def_en: "A break in one strand of a DNA duplex only, made by Cas9 when just one of its two nuclease domains is left active. Combined with a donor DNA fragment it is repaired by homologous recombination, which installs a specific chosen edit rather than random damage.",
      def_cn: "只在 DNA 双链的一条链上出现的断口，由只保留一个核酸酶结构域活性的 Cas9 造成。配上一段供体 DNA 片段，它由同源重组修复，装进去的是特定的、你选定的编辑，而不是随机的破坏。" },
    { en: "genetic screen", cn: "遗传筛选",
      def_en: "Perturbing genes so that each cell in a population has one gene affected while the population between them covers most or all genes, then applying a stress and seeing which cells drop out. With an sgRNA library the 20 bp targeting sequence doubles as a bar code, so deep sequencing reads out which genes were required.",
      def_cn: "对基因施加扰动，使群体中每个细胞只有一个基因受影响、而整个群体合起来覆盖几乎所有基因，然后施加压力、看哪些细胞掉队。用 sgRNA 文库时，那 20 bp 的靶向序列同时兼作条形码，深度测序即可读出哪些基因是必需的。" },
    { en: "gene drive", cn: "基因驱动",
      def_en: "A CRISPR/Cas9 cassette engineered to spread through a wild population faster than ordinary inheritance allows — the X-shredder design destroys the X chromosome during sperm formation so that only male offspring result, all of them carrying the cassette, until females run out. Laboratory-only, and once released essentially irreversible.",
      def_cn: "一个被设计成在野生种群中扩散得远快于普通遗传的 CRISPR/Cas9 表达盒 —— X-shredder 设计在精子发生期间摧毁 X 染色体，于是后代全是雄性、且全都携带该表达盒，直到雌性耗尽。目前仅限实验室；一旦释放基本不可逆。" }
  ]
};

/* ---------------------------------------------------------------- 核酸的化学 ---- */
/* Member: L-8-3-1 alone. The Czech book stops at enzymatic degradation of
   nucleotides to uric acid, urea and beta-alanine, which is a different subject
   entirely — it carries no denaturation, no melting curve, no damage chemistry, no
   synthesis, no PCR and no sequencing. So this is the chapter-8 chain compressed
   from eighteen steps to sixteen, one bold claim per step: the two radiation
   lesions and the two chemical classes are now one step, and the melting curve now
   carries the A-T bubbles it explains. */
window.BIOLITE_SPINE["key:nucleic-acid-chemistry"] = {
  assumed: ["DNA", "RNA", "double helix", "base", "base pair", "nucleotide", "gene",
            "protein", "enzyme", "cell", "amino acid", "hydrogen bond", "genome",
            "chromosome", "mutation", "DNA polymerase", "phosphodiester bond",
            "purine", "pyrimidine", "transcription", "replication", "base stacking",
            "pentose", "ribose", "sugar", "phosphate", "virus", "cancer", "blood",
            "hair", "skin", "ultraviolet", "x-ray", "laser", "primer", "PCR"],
  nodeTitle_en: "Nucleic acid chemistry",
  nodeTitle_cn: "核酸的化学",
  title_en: "What melting does not break, what slow chemistry does break, and what both of those make possible",
  title_cn: "熔解破坏不了什么、缓慢的化学反应又确实破坏了什么，以及这两件事各自成全了什么",
  steps: [
    {
      recall_en: "base stacking and the hydrogen bonds between paired bases, from the double-helix chain — this step is what happens when both are removed",
      recall_cn: "双螺旋那条主线里的碱基堆积和配对碱基间的氢键 —— 这一步说的是把这两样同时撤掉会怎样",
      en: "Native DNA in solution at neutral pH and room temperature is highly viscous; take the pH to an extreme, or the temperature above 80 °C, and the viscosity falls sharply, which says something physical has changed. What changed is that the hydrogen bonds between paired bases and the base-stacking interactions are disrupted, and the double helix unwinds into two separate single strands along part or all of its length. That is denaturation. **No covalent bond in the DNA is broken: the sugar-phosphate backbone of each strand is exactly as it was, and the two strands have simply stopped holding each other.**",
      cn: "中性 pH、室温下溶液里的天然 DNA 黏度很高；把 pH 推到极端，或把温度升到 80 °C 以上，黏度就急剧下降 —— 这说明有某种物理变化发生了。变的是：配对碱基之间的氢键、以及碱基堆积作用被破坏了，双螺旋在一部分或全部长度上解开，成为两条分开的单链。这就是变性。**DNA 里没有任何一个共价键被打断：每条链的糖-磷酸骨架跟原来一模一样，只是两条链不再互相拉着了。**",
      src: "A p.279, figure 8-26"
    },
    {
      link_en: "and because nothing was cut, the whole thing runs backwards",
      link_cn: "而正因为什么都没被切断，整件事可以倒着再走一遍",
      en: "Put the conditions back to normal and the two strands find each other again, in two phases of very different speed. First a slow step, in which strands collide at random until a short complementary segment happens to pair; then a much faster zippering step, as the remaining bases fall into register along the whole length. This is renaturation, also called annealing. **It is possible only because denaturation cut nothing, and every technology later in this chain — synthesis, amplification, sequencing, assembly — is an application of that one fact.**",
      cn: "把条件恢复正常，两条链会重新找到彼此，分成速度差别很大的两个阶段。先是慢步骤：两条链随机碰撞，直到碰巧有一小段互补序列配上；随后是快得多的「拉拉链」步骤，其余碱基沿全长依次归位。这就是复性，也叫退火。**它之所以可能，唯一的原因就是变性并没有切断任何东西 —— 这条主线后面的每一项技术（合成、扩增、测序、拼装）都是这一个事实的应用。**",
      src: "A p.279"
    },
    {
      link_en: "before using it, you need a way to see it happening",
      link_cn: "要用它，先得有办法看见它正在发生",
      en: "An intact nucleic acid absorbs less ultraviolet light than a solution of the same concentration of free nucleotides, because its bases are stacked close together, and pairing two complementary strands lowers the absorption further still; that is the hypochromic effect. Denaturation does the reverse and absorption rises, which is the hyperchromic effect. **The double-stranded to single-stranded transition is therefore followed by monitoring ultraviolet absorption at 260 nanometres while temperature or pH is changed** — a direct, continuous readout that assumes nothing about mechanism.",
      cn: "一条完整的核酸吸收的紫外光比同样浓度的游离核苷酸溶液更少，原因是它的碱基紧密堆叠在一起；而两条互补链配上对之后，吸收还要再低一些 —— 这叫减色效应。变性则反过来，吸收上升，这叫增色效应。**于是「双链变单链」这个转变，只要在改变温度或 pH 的同时监测 260 纳米处的紫外吸收就能跟踪 —— 一个直接、连续的读数，不需要对机制作任何假设。**",
      src: "A p.279"
    },
    {
      link_en: "with a readout you get a number, and the number turns out to report base composition",
      link_cn: "有了读数就有了一个数字，而这个数字居然能报出碱基组成",
      en: "Each species of DNA has a characteristic melting point, Tm, which is the temperature at which half of it is present as separated single strands. The higher the G+C content, the higher the melting temperature, chiefly because G-C pairs contribute more to base stacking than A-T pairs do, so a Tm measured at fixed pH and ionic strength estimates base composition. Species X has 32% adenine and therefore 32% thymine, leaving 36% G+C split 18/18; species Y has 17% adenine and therefore 17% thymine, leaving 66% G+C split 33/33, and species Y is the one from a 64 °C hot spring. Under carefully controlled conditions, regions rich in A-T pairs denature first while most of the molecule stays double-stranded; those locally denatured regions are called bubbles, and fixing the DNA to prevent renaturation makes them directly visible by electron microscopy. **In a living cell too, strand separation during replication and transcription is often initiated at A-T-rich sites** — the weaker stacking that melts first in a cuvette is what makes those sites the easiest place for the cell's own machinery to start unwinding.",
      cn: "每一种 DNA 都有它特征性的熔点 Tm：在这个温度下，一半的 DNA 已经变成分开的单链。G+C 含量越高，熔解温度越高，主要原因是 G-C 对对碱基堆积的贡献大于 A-T 对；所以在固定 pH 和离子强度下测得的 Tm，可以用来估计碱基组成。物种 X 有 32% 腺嘌呤、因而也有 32% 胸腺嘧啶，剩下 36% 是 G+C，各占 18%；物种 Y 有 17% 腺嘌呤、因而也有 17% 胸腺嘧啶，剩下 66% 是 G+C，各占 33% —— 来自 64 °C 温泉的是物种 Y。在精心控制的条件下，富含 A-T 碱基对的区域会先变性，而分子的大部分仍是双链；这些局部变性的区域叫泡（bubble），把 DNA 固定住以防复性之后，用电子显微镜可以直接看见它们。**在活细胞里也一样：复制和转录时的链分离常常从富含 A-T 的位点开始 —— 在比色皿里最先熔化的那种较弱堆积，正是让细胞自己的机器最容易在那里起手解旋的原因。**",
      src: "A p.279–280, Worked Example 8-1; A p.280, figure 8-28"
    },
    {
      link_en: "one comparison before leaving melting behind",
      link_cn: "在离开熔解这个话题之前，先做一个比较",
      en: "Duplexes of two RNA strands can be denatured too, and so can an RNA-DNA hybrid, which is a duplex carrying one strand of each. **At neutral pH, melting a double-helical RNA needs a temperature at least several degrees higher than melting a DNA duplex of comparable sequence**, and an RNA-DNA hybrid sits between the two in stability.",
      cn: "两条 RNA 链构成的双链也能被变性，一条 RNA 配一条 DNA 组成的 RNA-DNA 杂合双链同样可以。**在中性 pH 下，熔化一段双螺旋 RNA 所需的温度，比熔化序列相当的 DNA 双链至少高好几度；而 RNA-DNA 杂合链的稳定性介于两者之间。**",
      src: "A p.280",
      openQuestion_en: "The physical basis for these differences in thermal stability is not known. Carry it exactly like that rather than dressed in an invented mechanism.",
      openQuestion_cn: "这些热稳定性差别的物理成因目前并不清楚。就这么原样记住，不要给它套一个编出来的机制。"
    },
    {
      link_en: "melting breaks no covalent bond. Slow chemistry does, all day, every day",
      link_cn: "熔解打不断共价键。而缓慢的化学反应打得断 —— 每天，一整天",
      en: "Bases spontaneously lose their exocyclic amino groups, a reaction called deamination. Cytosine deaminates to uracil in about 1 of every 10^7 cytidine residues in 24 hours, which comes to roughly 100 spontaneous events per day in a mammalian cell; adenine and guanine deaminate at about a hundredth of that rate. **That slow reaction is almost certainly why DNA uses thymine rather than uracil: DNA normally holds no uracil, so any that appears is instantly recognisable as damage** and is removed before it can turn a G-C pair into an A-U pair.",
      cn: "碱基会自发地失去环外氨基，这个反应叫脱氨。胞嘧啶脱氨变成尿嘧啶，速率约为 24 小时内每 10⁷ 个胞苷残基有 1 个，折算下来是哺乳动物细胞里每天约 100 次自发事件；腺嘌呤和鸟嘌呤的脱氨速率大约只有它的百分之一。**这个缓慢的反应几乎肯定就是 DNA 用胸腺嘧啶而不用尿嘧啶的原因：DNA 里本来一点尿嘧啶都没有，所以任何出现的尿嘧啶立刻就能被认定为损伤并被清除，来不及把一个 G-C 对变成 A-U 对。**",
      src: "A p.280–281"
    },
    {
      link_en: "a second reaction removes the base altogether",
      link_cn: "第二个反应干脆把碱基整个拿掉",
      recall_en: "the N-glycosyl bond is the single bond that holds a base onto a chain, from the nucleotide chain",
      recall_cn: "N-糖苷键就是把碱基固定在链上的那唯一一根键 —— 核苷酸那条主线里说过",
      en: "The N-β-glycosyl bond joining a base to its pentose sugar is hydrolysed spontaneously, releasing the base and leaving a sugar with nothing attached — an abasic site, also called an AP site, for apurinic or apyrimidinic. The same chemistry can be driven deliberately: incubating DNA at pH 3 selectively removes purine bases and yields a derivative called apurinic acid. **Purines are lost far faster than pyrimidines — as many as 1 in 10^5 purines, about 10,000 per mammalian cell, every 24 hours under ordinary cellular conditions** — so an intact backbone carrying gaps where bases used to be is the normal state of a genome.",
      cn: "把碱基与它的戊糖连起来的 N-β-糖苷键会自发水解，碱基被放出去，留下一个什么都没接的糖 —— 这叫无碱基位点，也叫 AP 位点（脱嘌呤／脱嘧啶位点）。同样的化学可以被有意加速：把 DNA 在 pH 3 下保温，会选择性地脱去嘌呤碱基，得到一种叫脱嘌呤酸的衍生物。**嘌呤丢失的速度远快于嘧啶 —— 普通细胞条件下每 24 小时约有十万分之一的嘌呤丢失，相当于哺乳动物每个细胞约 10,000 个 —— 所以「骨架完好、但一些位置上的碱基已经没了」才是一个基因组的常态。**",
      src: "A p.281, figure 8-29"
    },
    {
      link_en: "two kinds of radiation and two classes of chemical, doing four different kinds of harm",
      link_cn: "两种辐射加两类化学品，造成四种不同的伤害",
      en: "Ultraviolet light makes two adjacent pyrimidine bases on the same strand condense into a cyclobutane pyrimidine dimer, most often between two thymidines, and a second lesion called the 6-4 photoproduct forms as well; near-ultraviolet radiation, 200 to 400 nm, is a real part of the solar spectrum and does this in bacterial DNA and in human skin cells. Ionising radiation, meaning x-rays and gamma rays, does something cruder: ring opening, base fragmentation, and breaks in the covalent backbone itself. Between them the two are estimated to cause about 10% of all environmentally caused DNA damage. Two classes of chemical do it without any enzyme. Deaminating agents accelerate the deamination reaction — chiefly nitrous acid, formed from precursors such as nitrosamines, nitrites and nitrates, together with bisulfite; nitrites and bisulfite are both used as food preservatives, and at the amounts used they do not measurably increase cancer risk, while the risk from food spoilage if they were withdrawn would be greater. Alkylating agents are the second class, dimethyl sulfate being the highly reactive example, which methylates guanine to O6-methylguanine. **The structural consequence of each lesion is what makes it dangerous: a cyclobutane dimer puts a bend into the DNA, and O6-methylguanine cannot base-pair with cytosine at all.**",
      cn: "紫外光会让同一条链上相邻的两个嘧啶碱基缩合成一个环丁烷嘧啶二聚体，最常见的是两个胸腺嘧啶之间；同时还会生成第二种损伤，叫 6-4 光产物。近紫外辐射（200–400 nm）本来就是太阳光谱的一部分，它在细菌 DNA 和人的皮肤细胞里都会造成这种损伤。电离辐射（X 射线和 γ 射线）干的事更粗暴：开环、碱基碎裂，以及共价骨架本身的断裂。两者加在一起，估计造成了全部环境来源 DNA 损伤的约 10%。另有两类化学品能在没有任何酶参与的情况下做同样的事。脱氨剂加速的正是上面那个脱氨反应 —— 主要是亚硝酸，由亚硝胺、亚硝酸盐、硝酸盐这类前体生成，此外还有亚硫酸氢盐；亚硝酸盐和亚硫酸氢盐都被用作食品防腐剂，而在实际使用的剂量下它们并不会可测量地提高患癌风险，一旦停用，食物腐败带来的风险反倒更大。第二类是烷化剂，典型例子是活性极高的硫酸二甲酯，它把鸟嘌呤甲基化成 O6-甲基鸟嘌呤。**每一种损伤之所以危险，全在它造成的结构后果：环丁烷二聚体把 DNA 弯出一个折角，而 O6-甲基鸟嘌呤根本没法与胞嘧啶配对。**",
      src: "A p.281–282, figures 8-30 and 8-31"
    },
    {
      link_en: "and the largest source of all is the cell's own metabolism",
      link_cn: "而所有来源里最大的那一个，是细胞自己的代谢",
      en: "The most important source of mutagenic alterations in DNA is oxidative damage. Reactive oxygen species — hydrogen peroxide, hydroxyl radicals and superoxide radicals — arise during irradiation and, far more commonly, as an ordinary byproduct of aerobic metabolism, and hydroxyl radicals are responsible for most of the oxidative damage to DNA. Cells run an elaborate defence of named enzymes, catalase and superoxide dismutase, which convert these species to harmless products, and a fraction escapes anyway: every day the DNA of each human cell is subjected to thousands of damaging oxidative reactions. **DNA is the only macromolecule that has the benefit of extensive biochemical repair systems**, and the reason is not that DNA is chemically tougher than RNA or protein — it is that DNA is the only one whose continuous repair is worth the metabolic cost.",
      cn: "DNA 中致突变改变的最重要来源是氧化损伤。活性氧 —— 过氧化氢、羟自由基、超氧自由基 —— 在受到辐射时产生，而更常见的情况是它们本来就是有氧代谢的普通副产物；其中羟自由基造成了 DNA 氧化损伤的大部分。细胞备有一整套点名的防御酶：过氧化氢酶和超氧化物歧化酶，把这些物种转化成无害产物，但总有一部分会漏过去：人的每一个细胞，其 DNA 每天都要承受数千次破坏性的氧化反应。**DNA 是唯一享有庞大生化修复系统的大分子，而原因不在于它在化学上比 RNA 或蛋白更结实 —— 而在于只有它值得为持续修复付出那笔代谢开销。**",
      src: "A p.283",
      see: [{ id: "L-25-2-1", en: "the four repair systems that clean all of this up", cn: "把上面这些损伤统统收拾掉的那四套修复系统" }]
    },
    {
      link_en: "not every methyl group on DNA is damage. Some are put there on purpose, and they carry information",
      link_cn: "DNA 上的甲基并非都是损伤。有些是被有意加上去的，而且它们携带信息",
      en: "Certain bases are methylated enzymatically, adenine and cytosine more often than guanine and thymine, and all known DNA methylases use S-adenosylmethionine, abbreviated SAM, as the methyl group donor. E. coli runs two systems on that chemistry. The Dam methylase, for DNA adenine methylation, methylates the adenosine within every 5'-GATC-3' sequence to N6-methyladenosine shortly after replication, which lets the cell tell a newly made strand from the older, already-methylated one. In eukaryotic cells about 5% of cytidine residues are methylated to 5-methylcytidine, most often at CpG sequences and symmetrically on both strands, and how much of that methylation a region carries varies across a large eukaryotic DNA molecule and affects DNA metabolism and gene expression. **A restriction-modification system marks the cell's own DNA with methyl groups so that unmarked foreign DNA can be identified and destroyed**, which is a way of telling self from non-self written entirely in methyl groups.",
      cn: "某些碱基会被酶促甲基化，腺嘌呤和胞嘧啶比鸟嘌呤和胸腺嘧啶更常见，而且所有已知的 DNA 甲基化酶都用 S-腺苷甲硫氨酸（缩写 SAM）作甲基供体。大肠杆菌基于这套化学跑了两个系统。Dam 甲基化酶在复制后不久，把每一个 5'-GATC-3' 序列中的腺苷甲基化成 N6-甲基腺嘌呤，这让细胞能把刚造好的新链与已经甲基化的旧链区分开。在真核细胞里，约有 5% 的胞苷残基被甲基化成 5-甲基胞苷，最常发生在 CpG 序列上，而且在两条链上对称出现；一个大真核 DNA 分子上不同区域携带的甲基化程度各不相同，并影响 DNA 代谢和基因表达。**限制-修饰系统用甲基把细胞自己的 DNA 标记起来，于是没有标记的外源 DNA 就能被认出来并被摧毁 —— 一种完全用甲基写成的「区分自我与非我」的办法。**",
      src: "A p.283",
      see: [{ id: "L-9-1-1", en: "that same defence system taken apart and sold as a laboratory reagent", cn: "同一套防御系统被拆开，当作实验室试剂卖" },
             { id: "L-28-3-1", en: "what CpG methylation does to a eukaryotic gene", cn: "CpG 甲基化对一个真核基因究竟做了什么" }]
    },
    {
      link_en: "that is the chemistry. Everything from here is what people built on it, starting with the raw material",
      link_cn: "化学讲完了。从这里开始全是人们在它上面造出来的东西，先从原料说起",
      en: "Rapid, accurate synthesis of short oligonucleotides — short single strands of DNA of a sequence you choose — was pioneered by H. Gobind Khorana in the 1970s, and refinements by Robert Letsinger and Marvin Caruthers produced the chemistry in widest use today, the phosphoramidite method. The strand is grown on a solid silica support, one nucleotide per cycle, and the process can be watched: the growing chain's 5' end carries an acid-labile protecting group, DMT, which is coloured, so stripping it off with an acid wash is followed spectrophotometrically and the machine sees each cycle succeed. One cycle is remove the coloured DMT cap, couple the next protected nucleotide, oxidise the new linkage, wash the excess reagent away; at the end the remaining protecting groups come off and the finished oligonucleotide is cleaved from the support. **Losses compound across cycles, so routine synthesis reaches 70 to 80 nucleotides reliably**, and that ceiling is why every method below uses short pieces of made-to-order DNA rather than long ones.",
      cn: "快速而准确地合成短寡核苷酸（也就是你自己指定序列的短单链 DNA），由 H. Gobind Khorana 在 1970 年代开创，随后 Robert Letsinger 与 Marvin Caruthers 的改良给出了今天最通用的化学方法：亚磷酰胺法。链在固相二氧化硅载体上生长，每个循环接一个核苷酸，而整个过程可以被看见：正在生长的链的 5' 端带着一个酸不稳定的保护基 DMT，这个基团是有颜色的，所以用酸洗把它脱掉的过程可以用分光光度法跟踪 —— 仪器能看见每一轮是否成功。一个循环是：脱掉带色的 DMT 帽、偶联下一个被保护的核苷酸、氧化新形成的连接、洗掉过量试剂；最后再脱掉剩余的保护基，把做好的寡核苷酸从载体上切下来。**误差会随循环数累积，所以常规合成可靠地做到 70 到 80 个核苷酸；正是这个上限，使得下面每一种方法用的都是短的定制 DNA，而不是长的。**",
      src: "A p.283–284, figure 8-32"
    },
    {
      link_en: "give those short pieces to a polymerase and melting-and-reannealing becomes a machine",
      link_cn: "把这些短片段交给聚合酶，「熔解再复性」就变成了一台机器",
      recall_en: "the denature-and-anneal cycle from the first two steps, now driven deliberately, over and over",
      recall_cn: "就是最前面两步里的「变性—复性」，现在被有意地一遍遍驱动",
      en: "The polymerase chain reaction, conceived by Kary Mullis in 1983, needs four components: the DNA sample; a pair of synthetic oligonucleotide primers, complementary to opposite strands and flanking the target, with their 5' ends defining the ends of the amplified segment and their 3' ends pointing toward each other across it; a pool of the four dNTPs; and a DNA polymerase. Three steps repeat: heat to denature the template into single strands, cool to let the primers, deliberately present in excess, anneal before the two long strands can find each other again, and let DNA polymerase extend from each primer across the target. Taq polymerase, isolated from Thermus aquaticus, a bacterium living in hot springs near the boiling point of water, is heat-stable, so it survives every heating step and never needs replenishing and the whole cycle runs unattended in a benchtop thermocycler. **Each cycle doubles the number of target copies, so 20 cycles amplify it more than a millionfold and 30 cycles more than a billionfold**, which is why one DNA molecule in almost any kind of sample can be detected and amplified — hence undegraded DNA cloned from samples more than 40,000 years old, viral infections and some cancers detected before symptoms appear, and prenatal diagnosis of genetic disease.",
      cn: "聚合酶链式反应（PCR）由 Kary Mullis 在 1983 年构想出来，需要四样东西：DNA 样品；一对合成的寡核苷酸引物，分别与两条链互补、夹住目标区段，它们的 5' 端界定扩增片段的两端、3' 端隔着目标相向而对；四种 dNTP 的混合池；以及一个 DNA 聚合酶。三个步骤反复循环：加热使模板变性成单链；降温让刻意过量加入的引物先复性上去，抢在两条长链重新找到彼此之前；再让 DNA 聚合酶从每个引物出发、沿目标延伸。Taq 聚合酶分离自 Thermus aquaticus（一种生活在接近沸点的温泉里的细菌），它耐热，每一次加热步骤都能挺过来、无需补加，于是整个循环可以在台式热循环仪里无人值守地跑。**每一轮循环使目标拷贝数翻倍，所以 20 轮扩增一百万倍以上、30 轮扩增十亿倍以上 —— 这就是为什么几乎任何样品中的单个 DNA 分子都能被检出并扩增出来** —— 由此才有了从四万年以上的样品里克隆出未降解的 DNA、在症状出现之前查出病毒感染和某些癌症，以及遗传病的产前诊断。",
      src: "A p.283–286, figure 8-33",
      see: [{ id: "L-9-1-1", en: "PCR put to work in cloning, plus its RNA and quantitative variants", cn: "PCR 在克隆里的实际用法，以及它面向 RNA 和定量的两个变体" }]
    },
    {
      link_en: "PCR amplifies a length. Sometimes the length itself is the answer",
      link_cn: "PCR 扩增出的是一个长度。而有时候，这个长度本身就是答案",
      en: "DNA genotyping, also called DNA fingerprinting, was first described by Alec Jeffreys in 1985, and it rests on sequence polymorphisms averaging 1 difference per 1,000 bp between individuals. Forensic work targets short tandem repeats, or STRs: typically a 4 bp motif repeated 4 to 50 times, so 16 to 200 bp long. More than 20,000 tetranucleotide STR loci are characterised in the human genome, together about 3% of all human DNA. A commercial multi-locus kit run by capillary electrophoresis with colour-coded dyes gives a profile essentially unique to one individual from less than 1 nanogram of degraded DNA — a single hair follicle, a drop of blood — with a chance of misidentification below 1 in 10^18 when a good genotype is obtained; the amelogenin gene, differently sized on X and Y, is genotyped alongside the STRs to reveal the donor's sex. CODIS, the US standard database established in 1998 with 13 loci and expanded in 2017 to 20 core loci, held more than 18 million genotypes and had assisted nearly 500,000 investigations by mid-2019. **PCR amplifies across an STR and the length of the product reveals the repeat number**, and because one chromosome comes from each parent most people carry two different lengths at each locus.",
      cn: "DNA 基因分型（也叫 DNA 指纹）由 Alec Jeffreys 于 1985 年首次描述，其基础是个体之间平均每 1,000 bp 有 1 处差异的序列多态性。法医工作瞄准的是短串联重复（STR）：典型情况是一个 4 bp 的基序重复 4 到 50 次，因而长 16 到 200 bp。人类基因组中已鉴定出两万多个四核苷酸 STR 位点，合计约占全部人类 DNA 的 3%。用商品化的多位点试剂盒、以毛细管电泳配色标染料跑出来，只要不到 1 纳克的降解 DNA（一个毛囊、一滴血）就能给出一份基本上属于某一个体的图谱，而在获得良好基因型的前提下，误认的概率低于 10¹⁸ 分之一；釉原蛋白基因在 X 和 Y 上长度不同，因此和 STR 一起分型，用来判定供体性别。CODIS 是美国的标准数据库，1998 年建立时含 13 个位点，2017 年扩展到 20 个核心位点，到 2019 年年中已收录超过 1,800 万份基因型、协助了近 50 万起调查。**PCR 跨过一个 STR 做扩增，产物的长度就报出了重复次数；而由于两条染色体分别来自父母，多数人在每个位点上带着两个不同的长度。**",
      src: "A p.288, box 8-1"
    },
    {
      link_en: "amplifying a segment is one thing. Reading it letter by letter is another, and it turns on one missing atom",
      link_cn: "扩出一段是一回事，把它一个字母一个字母读出来是另一回事 —— 而关键在于少了一个原子",
      en: "Before 1977, sequencing even 5 to 10 nucleotides was laborious; two methods that year changed it, and Frederick Sanger's dideoxy chain-termination sequencing proved both easier and more accurate. A dideoxynucleoside triphosphate, or ddNTP, carries -H rather than -OH at the 3' position of its ribose ring, and DNA polymerase needs that 3'-hydroxyl to add the next nucleotide, so once a ddNTP goes in the strand cannot be extended further. Mix a small amount of one ddNTP into a large excess of the ordinary nucleotide: most strands keep growing, but some terminate at random at every position where that base belongs, producing a mixture of fragments all ending exactly there. Run four such reactions, one per base, and separate the labelled fragments by electrophoresis. Automation came from labelling each of the four ddNTPs with a different-coloured fluorescent tag, so all four run in one reaction and one lane while a laser reads the colour of each fragment as it passes; that machine sequenced all 3.2 x 10^9 bp of human DNA in the human genome project, over nearly a decade and dozens of laboratories. **Shorter fragments migrate faster, so the gel is read bottom to top in the 5' to 3' direction — and what it gives is the sequence of the strand complementary to the one being analysed.**",
      cn: "1977 年以前，哪怕测 5 到 10 个核苷酸都很吃力；那一年出现的两种方法改变了局面，其中 Frederick Sanger 的双脱氧链终止测序被证明既更简便也更准确。双脱氧核苷三磷酸（ddNTP）的核糖 3' 位上是 -H 而不是 -OH，而 DNA 聚合酶必须有这个 3'-羟基才能接上下一个核苷酸 —— 所以一旦掺进一个 ddNTP，这条链就再也延伸不下去了。往大量普通核苷酸里掺入少量某一种 ddNTP：多数链继续生长，但总有一些在每一个本该是该碱基的位置上随机终止，于是得到一堆恰好都终止在那里的片段。做四个这样的反应（每种碱基一个），把带标记的片段用电泳分开。自动化来自给四种 ddNTP 各贴一个不同颜色的荧光标记，于是四者可以在同一个反应、同一条泳道里跑，激光读出每个片段经过时的颜色；正是这台机器，在人类基因组计划中测完了全部 3.2 x 10⁹ bp 的人类 DNA，前后历时近十年、动用了几十个实验室。**较短的片段跑得更快，所以凝胶要从下往上读，方向就是 5' 到 3' —— 而读出来的是被分析那条链的互补链序列。**",
      src: "A p.286–287 & 290, figures 8-34 and 8-35"
    },
    {
      link_en: "and then the same job was rebuilt around two opposite trade-offs",
      link_cn: "然后同一件事被重做了两遍，用的是两个正好相反的取舍",
      en: "Next-generation methods shear DNA into fragments, immobilise them on a solid support and sequence very many of them in parallel, tracked by fluorescent dye and optical detection. Illumina's reversible terminator method ligates known adapters onto fragments a few hundred base pairs long, clusters them on a flow cell by in-place PCR, then extends one fluorescently labelled, chemically blocked nucleotide per cycle: image, remove the label and the block, repeat. Reads are short, typically 100 to 300 nucleotides, and accuracy is high, with error rates as low as 0.1%. Pacific Biosciences' single-molecule real-time method takes the opposite trade: one DNA polymerase sits at the bottom of each of 150,000 nanoscale pores about 70 nm across, narrower than the wavelength of the light used so that illumination stays confined to the bottom 20 to 30 nm, and it copies a circularised template continuously, emitting one light pulse per nucleotide incorporated; throughput is lower and cost higher than Illumina's. **Its reads average 30,000 to 40,000 bp, long enough to span repetitive regions that short reads cannot, at an error rate of 10 to 15% which the circular template corrects by being read over and over.**",
      cn: "新一代测序方法把 DNA 打断成片段，固定在固相载体上，靠荧光染料和光学检测同时并行地测大量片段。Illumina 的可逆终止子方法把已知的接头连到几百个碱基对长的片段上，用原位 PCR 在流动池上把它们成簇扩增，然后每个循环只延伸一个带荧光标记、且化学封闭的核苷酸：拍照、脱掉标记和封闭基团、再来一轮。读长很短，通常 100 到 300 个核苷酸，但准确度高，错误率可低至 0.1%。Pacific Biosciences 的单分子实时测序做的是相反的取舍：15 万个纳米孔中，每个孔底坐着一个 DNA 聚合酶，孔径约 70 nm，比所用光的波长还小，因此照明被限制在孔底 20 到 30 nm 之内；聚合酶连续复制一个环化的模板，每掺入一个核苷酸就发出一次光脉冲；相比 Illumina，它的通量更低、成本更高。**它的读长平均 30,000 到 40,000 bp，长到足以跨过短读长跨不过的重复区；错误率高达 10 到 15%，而这个错误率被环化模板自己纠正 —— 同一个分子被反复读了很多遍。**",
      src: "A p.290–293, figures 8-36 and 8-37"
    },
    {
      link_en: "however the reads were produced, none of them covers a genome. Putting them together is the same chemistry again",
      link_cn: "不管这些读段是怎么产生的，没有任何一条覆盖得了一个基因组。把它们拼起来，靠的还是同一套化学",
      recall_en: "the slow random-collision step of renaturation, from the second step of this chain — finding a short matching stretch is exactly what an assembler does",
      recall_cn: "回到这条主线第二步里复性的那个「随机碰撞」慢步骤 —— 找到一小段能对上的序列，正是组装程序在做的事",
      en: "The number of times a given nucleotide is sequenced on average is the sequencing depth, also called coverage, and a typical target is 100x to 1,000x — high enough that most sequencing errors are caught and thrown out by comparison between reads covering the same base. Computer programs then align overlapping fragments end to end, tracing the sequence from one read into the next, and assemble long contiguous sequences called contigs, some spanning millions of base pairs in a successful project. **Telling two short overlapping sequences apart and joining them where they match is the same recognition, run at genome scale, that two single strands perform on each other** when a melted solution is allowed to cool.",
      cn: "一个给定核苷酸平均被测到多少次，叫测序深度，也叫覆盖度，常见的目标是 100x 到 1,000x —— 高到足以让覆盖同一个碱基的多条读段互相比对，把大部分测序错误挑出来扔掉。随后由计算机程序把有重叠的片段首尾对齐，从一条读段追到下一条，拼装出长的连续序列，称为 contig（重叠群）；在顺利的项目里，有些 contig 能跨越数百万碱基对。**分辨两段有重叠的短序列、并在它们相符处把它们接起来，与一杯熔解后的溶液冷却时两条单链彼此完成的识别，是同一件事，只是放大到了基因组的尺度。**",
      src: "A p.293, figure 8-38",
      see: [{ id: "L-9-3-1", en: "what those assembled genomes then said about our own", cn: "这些拼装好的基因组随后说出了关于我们自己的什么" }]
    }
  ],
  terms: [
    { en: "denaturation", cn: "变性",
      def_en: "Unwinding of the double helix into two separate single strands under heat or extreme pH. Only the hydrogen bonds between paired bases and the base-stacking interactions are disrupted; no covalent bond is broken, and each backbone survives intact.",
      def_cn: "在受热或极端 pH 下，双螺旋解开成两条分离的单链。被破坏的只有配对碱基之间的氢键和碱基堆积作用；没有任何共价键断裂，每条链的骨架都完好无损。" },
    { en: "renaturation", cn: "复性",
      def_en: "Two separated complementary strands re-forming a duplex once conditions return to normal — first a slow step of random collision until a short complementary segment pairs, then a much faster zippering as the rest falls into register. Also called annealing, and possible only because nothing was ever cut.",
      def_cn: "条件恢复正常后，两条分开的互补链重新形成双链 —— 先是随机碰撞的慢步骤，直到有一小段互补序列配上，随后是快得多的「拉拉链」，其余部分依次归位。也叫退火；它之所以可能，唯一原因是先前什么都没被切断。" },
    { en: "hyperchromic effect", cn: "增色效应",
      def_en: "The rise in ultraviolet absorption at 260 nm when a nucleic acid is denatured. Its opposite, the hypochromic effect, is the lowered absorption of intact stacked and paired nucleic acid relative to free nucleotides. Together they give a direct, continuous readout of melting.",
      def_cn: "核酸变性时 260 nm 处紫外吸收上升的现象。与之相反的减色效应，指完整的、堆叠并配对的核酸相对游离核苷酸吸收更低。两者合起来提供了一个直接、连续跟踪熔解过程的读数。" },
    { en: "melting point Tm", cn: "熔点 Tm",
      def_en: "The temperature at which half a DNA sample is present as separated single strands. It rises with G+C content, mainly because G-C pairs contribute more to base stacking than A-T pairs, so a value measured at fixed pH and ionic strength estimates base composition.",
      def_cn: "一份 DNA 样品中有一半以分离单链形式存在时的温度。它随 G+C 含量升高，主要原因是 G-C 对对碱基堆积的贡献大于 A-T 对；因此在固定 pH 和离子强度下测得的数值可以用来估计碱基组成。" },
    { en: "AP site", cn: "AP 位点",
      def_en: "A sugar left with no base attached after spontaneous hydrolysis of the N-glycosyl bond; apurinic or apyrimidinic, also called abasic. Purines are lost much faster, about 10,000 per mammalian cell every 24 hours, and incubating DNA at pH 3 removes them selectively to give apurinic acid.",
      def_cn: "N-糖苷键自发水解后，留下一个不带碱基的糖；按丢失的是嘌呤还是嘧啶称为脱嘌呤或脱嘧啶位点，也叫无碱基位点。嘌呤丢得快得多，哺乳动物每个细胞每 24 小时约丢 10,000 个；把 DNA 在 pH 3 下保温会选择性地脱去嘌呤，得到脱嘌呤酸。" },
    { en: "deamination", cn: "脱氨",
      def_en: "Spontaneous loss of a base's exocyclic amino group. Cytosine becomes uracil at about 1 in 10^7 residues per 24 hours, roughly 100 events a day in a mammalian cell. Because DNA normally holds no uracil, any that appears is recognisable as damage — thought to be why DNA uses thymine.",
      def_cn: "碱基自发失去环外氨基。胞嘧啶变成尿嘧啶的速率约为每 24 小时每 10⁷ 个残基 1 个，相当于哺乳动物细胞每天约 100 次。由于 DNA 里本来不含尿嘧啶，任何出现的尿嘧啶都能被识别为损伤 —— 一般认为这就是 DNA 使用胸腺嘧啶的原因。" },
    { en: "cyclobutane pyrimidine dimer", cn: "环丁烷嘧啶二聚体",
      def_en: "Two adjacent pyrimidines on one strand, most often two thymidines, condensed by ultraviolet light into a four-membered ring that puts a bend or kink into the helix. The 6-4 photoproduct is a second ultraviolet lesion. Ionising radiation instead opens rings, fragments bases and breaks the backbone.",
      def_cn: "同一条链上相邻的两个嘧啶（最常见是两个胸腺嘧啶）被紫外光缩合成一个四元环，把螺旋弯出一个折角。6-4 光产物是另一种紫外损伤。电离辐射造成的则是开环、碱基碎裂和骨架断裂。" },
    { en: "restriction-modification system", cn: "限制-修饰系统",
      def_en: "A bacterial pair in which a methylase marks the cell's own DNA with methyl groups and a nuclease destroys any DNA arriving unmarked. All known DNA methylases use S-adenosylmethionine as methyl donor. A separate use of the same chemistry, E. coli's Dam methylase on 5'-GATC-3', tells a newly replicated strand from the old one.",
      def_cn: "细菌里的一对搭档：甲基化酶用甲基标记细胞自身的 DNA，核酸酶则摧毁任何没有标记就闯进来的 DNA。所有已知 DNA 甲基化酶都用 S-腺苷甲硫氨酸作甲基供体。同一套化学的另一种用法是大肠杆菌作用于 5'-GATC-3' 的 Dam 甲基化酶，用来区分刚复制出来的新链与旧链。" },
    { en: "phosphoramidite method", cn: "亚磷酰胺法",
      def_en: "The dominant chemistry for automated DNA synthesis on a solid support, from Khorana and refined by Letsinger and Caruthers. Each cycle's coloured DMT protecting group is stripped by an acid wash and followed spectrophotometrically. Compounding losses cap routine synthesis at 70 to 80 nucleotides.",
      def_cn: "在固相载体上自动合成 DNA 的主流化学，源自 Khorana，经 Letsinger 与 Caruthers 改良。每个循环中带颜色的 DMT 保护基被酸洗脱掉，可用分光光度法跟踪。误差逐轮累积，使常规合成的长度上限约为 70 到 80 个核苷酸。" },
    { en: "polymerase chain reaction", cn: "聚合酶链式反应",
      def_en: "Kary Mullis, 1983. A DNA sample, two flanking synthetic primers, the four dNTPs and a heat-stable polymerase, cycled through denaturation, annealing and extension. Each cycle doubles the target: more than a millionfold after 20 cycles, more than a billionfold after 30.",
      def_cn: "Kary Mullis，1983 年。一份 DNA 样品、两条夹住目标的合成引物、四种 dNTP 和一个耐热聚合酶，反复经历变性、复性与延伸三步。每轮循环使目标翻倍：20 轮后一百万倍以上，30 轮后十亿倍以上。" },
    { en: "Taq polymerase", cn: "Taq 聚合酶",
      def_en: "A heat-stable DNA polymerase from Thermus aquaticus, a bacterium of hot springs near the boiling point of water. It survives every heating step of a thermal cycle without needing replenishment, which is what makes unattended automated amplification possible.",
      def_cn: "来自 Thermus aquaticus 的耐热 DNA 聚合酶，这种细菌生活在接近沸点的温泉里。它能挺过热循环中的每一次加热而无需补加，正因如此，无人值守的自动扩增才成为可能。" },
    { en: "short tandem repeat", cn: "短串联重复",
      def_en: "A short motif, typically 4 bp, repeated 4 to 50 times in a row; the number of repeats varies between individuals, so the length of a PCR product spanning one identifies a person. More than 20,000 tetranucleotide loci are known, about 3% of human DNA. CODIS is the US database, 20 core loci since 2017.",
      def_cn: "一个短基序（典型为 4 bp）连续重复 4 到 50 次；重复次数因人而异，所以跨过它的 PCR 产物长度可以识别个体。已知的四核苷酸位点超过两万个，约占人类 DNA 的 3%。CODIS 是美国的数据库，自 2017 年起为 20 个核心位点。" },
    { en: "dideoxy chain-termination sequencing", cn: "双脱氧链终止测序",
      def_en: "Frederick Sanger, 1977. A ddNTP has -H instead of -OH at the ribose 3' position, so a polymerase cannot extend past it; spiking one into an excess of the normal nucleotide terminates strands at every position of that base. Fragments separated by size read shortest to longest, 5' to 3', giving the complementary strand's sequence.",
      def_cn: "Frederick Sanger，1977 年。ddNTP 的核糖 3' 位是 -H 而非 -OH，聚合酶无法越过它继续延伸；把一种 ddNTP 少量掺进过量的正常核苷酸中，就会在该碱基的每一个位置上终止一部分链。片段按大小分开，从短到长读出，方向为 5' 到 3'，得到的是互补链的序列。" },
    { en: "sequencing depth", cn: "测序深度",
      def_en: "How many times a given nucleotide is read on average, also called coverage; typically 100x to 1,000x, high enough that comparing reads over the same base removes most errors. Overlapping reads are then aligned end to end into long contiguous sequences called contigs.",
      def_cn: "一个给定核苷酸平均被读到多少次，也叫覆盖度；常见为 100x 到 1,000x，高到足以让覆盖同一碱基的多条读段互相比对、消除大部分错误。随后把有重叠的读段首尾对齐，拼成称为 contig 的长连续序列。" }
  ]
};

/* --------------------------------------------------------------- 重组 DNA 技术 ---- */
/* Member: L-9-1-1 alone; the Czech book has no cloning, no vectors, no libraries
   and no recombinant expression. Fifteen steps, one bold claim each, cross-linked
   backwards to the methylation chemistry the restriction enzymes come out of and
   to the affinity column the tags were invented for. */
window.BIOLITE_SPINE["key:recombinant-dna-technology"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "cell", "bacteria", "E. coli",
            "yeast", "virus", "chromosome", "genome", "base pair", "nucleotide",
            "amino acid", "antibiotic", "PCR", "DNA polymerase", "promoter",
            "transcription", "translation", "ribosome", "mRNA", "colony", "mutation",
            "reverse transcriptase", "electrophoresis", "eukaryote", "telomere",
            "centromere", "affinity chromatography", "recombination", "maltose",
            "chitin", "glutathione", "ATP", "plasmid", "primer", "ligand", "column",
            "insect", "plant", "fermenter", "spindle", "agarose"],
  nodeTitle_en: "Studying genes and their products",
  nodeTitle_cn: "研究基因及其产物",
  title_en: "Why a palindrome makes cloning possible, and why you never look for the cell that worked",
  title_cn: "为什么一个回文序列让克隆成为可能，以及为什么你从不去「找」那个成功的细胞",
  steps: [
    {
      en: "Cloning a gene means putting a chosen piece of DNA into a cell that will copy it, and the procedure is the same five steps every time. One: obtain the DNA segment — cut it out with restriction endonucleases, shear genomic DNA at random, or, now that sequences sit in databases, amplify it by PCR or have it synthesised. Two: choose a small DNA molecule capable of autonomous replication, meaning it can be copied inside a cell independently of that cell's own chromosome; that is the cloning vector, and vector here means carrier. Three: join the two covalently, which DNA ligase does; the product carries covalently linked segments from two or more sources and is called recombinant DNA. Four: get that molecule out of the tube and into a host cell, which supplies the machinery to replicate it. Five: select or identify the host cells that actually contain it. The whole of it is recombinant DNA technology, informally genetic engineering, and E. coli was the first host and is still the most common. **Every complication in the rest of this chain hangs off one of those five steps: which enzyme cuts, which carrier holds it, which cell grows it, and how the rare cell that took it is found.**",
      cn: "克隆一个基因，就是把选定的一段 DNA 放进一个会替你复制它的细胞里，而这套流程每次都是同样的五步。一：拿到 DNA 片段 —— 用限制性内切酶切出来、把基因组 DNA 随机剪碎，或者（既然序列都在数据库里了）用 PCR 扩出来、干脆直接合成。二：选一个能自主复制的小 DNA 分子，意思是它能在细胞内独立于细胞自身染色体而被复制；这就是克隆载体，vector 在这里就是「运载工具」。三：把两者共价连起来，这活儿由 DNA 连接酶来干；产物携带着来自两个或更多来源、共价相连的片段，叫重组 DNA。四：把这个分子从试管里弄进宿主细胞，由宿主提供复制它所需的酶机器。五：选出或认出真正含有它的那些宿主细胞。整套东西叫重组 DNA 技术，俗称基因工程；最早的宿主是大肠杆菌，直到现在它也仍是最常用的。**后面所有的麻烦事都挂在这五步中的某一步上：谁来切、装在什么上、放进哪种细胞长、以及怎么找到那个稀有的成功细胞。**",
      src: "A p.301–302"
    },
    {
      link_en: "step one turns on an enzyme that bacteria did not evolve for our convenience",
      link_cn: "第一步依赖一种酶，而细菌进化出它可不是为了方便我们",
      en: "Werner Arber found in the early 1960s that the biological function of a restriction endonuclease in a bacterium is to recognise and cleave foreign DNA, the DNA of an infecting virus for instance; such DNA is said to be restricted. The obvious objection is that the bacterium's own chromosome contains the same sequence, and the answer is the other half of the system: the host's own copies of that sequence are methylated by a matching DNA methylase, and methylation blocks cleavage. Nuclease plus methylase together are a restriction-modification system. **The exact, reproducible specificity that makes this enzyme a laboratory tool is a by-product of a bacterial immune system** — as is CRISPR, the other programmable cutting tool, which was built out of one too.",
      cn: "Werner Arber 在 1960 年代初发现，限制性内切酶在细菌体内的生物学功能，是识别并切开外源 DNA —— 例如入侵病毒的 DNA；这种 DNA 就被说成是「被限制了」。一个显而易见的反驳是：细菌自己的染色体上也有同样的序列。回答是这套系统的另一半：宿主自身那些序列被一个配套的 DNA 甲基化酶甲基化，而甲基化会阻止切割。核酸酶加甲基化酶合起来就是限制-修饰系统。**让这个酶成为实验室工具的那种精确、可重复的特异性，其实是细菌免疫系统的副产品 —— 另一件可编程的切割工具 CRISPR 同样是从一套细菌免疫系统里造出来的。**",
      src: "A p.303",
      see: [{ id: "L-8-3-1", en: "the same methylation chemistry, and what else a cell uses it for", cn: "同一套甲基化化学，以及细胞还用它来做什么" },
             { id: "L-9-2-1", en: "the other bacterial immune system, and what it was turned into", cn: "另一套细菌免疫系统，以及它被改造成了什么" }]
    },
    {
      link_en: "of the three kinds that exist, exactly one is usable",
      link_cn: "现存的三类里，恰好只有一类能用",
      en: "There are three types of restriction endonuclease, designated I, II and III. Types I and III are large multisubunit complexes carrying both the endonuclease and the methylase activities in one machine, which makes them awkward to use. Type II enzymes, first isolated by Hamilton Smith in 1970, are simpler and require no ATP, and Daniel Nathans then used them to map and analyse genes and genomes. Thousands are now known from different bacterial species, recognising more than 100 different sequences, and their names are not arbitrary: a three-letter abbreviation of the bacterial species, sometimes a strain letter, then a roman numeral saying which enzyme it was from that species — BamHI is therefore the first restriction endonuclease characterised from Bacillus amyloliquefaciens, strain H. **The decisive property of a type II enzyme is that it cleaves particular phosphodiester bonds inside the recognition sequence itself, so you know before you start exactly where the cut will fall.**",
      cn: "限制性内切酶有三类，标为 I、II、III 型。I 型和 III 型是庞大的多亚基复合体，把内切酶活性和甲基化酶活性装在同一台机器里，用起来很别扭。II 型酶由 Hamilton Smith 在 1970 年首次分离，更简单，而且不需要 ATP；随后 Daniel Nathans 用它们来绘制和分析基因与基因组。如今已知的这类酶来自数千种细菌，识别一百多种不同序列，而它们的名字并非随意：先是细菌种名的三字母缩写，有时再加一个菌株字母，最后一个罗马数字表示它是该物种中第几个被鉴定出来的酶 —— 所以 BamHI 就是从 Bacillus amyloliquefaciens 菌株 H 中鉴定出的第一个限制性内切酶。**II 型酶的决定性性质在于：它切的是识别序列内部特定的磷酸二酯键，所以动手之前你就确切知道切口会落在哪里。**",
      src: "A p.303"
    },
    {
      link_en: "and now the one lucky fact that makes the whole technology possible",
      link_cn: "接下来是让整套技术得以成立的那个幸运事实",
      en: "A recognition sequence is usually 4 to 6 bp long and is palindromic, meaning it reads the same on both strands in the same direction. Many type II enzymes cut the two strands in a staggered way rather than straight across, leaving two to four nucleotides of one strand unpaired at each end; those overhangs are called sticky ends, because they can base-pair with each other. Other enzymes cut both strands straight across at opposing phosphodiester bonds and leave blunt ends with no unpaired bases, which ligate less efficiently because nothing holds the two pieces together while ligase works, and fragments with different, non-complementary overhangs generally do not ligate at all — an EcoRI fragment will not join a BamHI fragment, which is why gene and vector are cut with the same enzyme. **Because the recognition sequence is a palindrome, every fragment cut by a given enzyme ends in exactly the same overhang, so any two of them will anneal** — the gene and the vector included, and that single coincidence is what cloning is built on.",
      cn: "识别序列通常长 4 到 6 bp，而且是回文的 —— 两条链按同一方向读出来是一样的。许多 II 型酶切两条链时是错开切的，于是每一端都留下两到四个未配对的核苷酸；这些突出端叫黏性末端，因为它们能彼此碱基配对。另一些酶在相对的磷酸二酯键上把两条链齐头切断，留下没有未配对碱基的平末端；平末端连接效率更低，因为连接酶干活时没有东西把两块拉在一起，而带有不同的、互不互补突出端的片段一般根本连不上 —— EcoRI 切出来的片段接不上 BamHI 切出来的片段，这就是为什么目的基因和载体要用同一种酶来切。**正因为识别序列是回文，同一种酶切出来的每一个片段，末端的突出序列完全相同，所以任意两个片段都能退火配上 —— 目的基因和载体也包括在内；整个克隆技术，就搭在这一个巧合上面。**",
      src: "A p.303–304"
    },
    {
      link_en: "and if the sequence you need has no convenient site, you can put one there",
      link_cn: "而如果你要的序列上没有合适的切点，你可以自己造一个",
      en: "Two engineering conveniences show up everywhere. The fragment to be cloned is most often generated by PCR, and a primer can carry a non-complementary 5' extension containing a restriction site; the extension does not anneal to the target, yet it is copied into the product anyway, so cleaving the amplified fragment at those added sites creates sticky ends to order on DNA that was never in the chromosome. Separately, a short synthetic fragment inserted to bridge two ends being ligated is called a linker. **A linker carrying recognition sequences for several different restriction endonucleases is a multiple cloning site**, and it is what makes one vector backbone reusable: it offers a menu of places to cut, so the same vector accepts many different inserts.",
      cn: "有两个工程上的便利到处都在用。要克隆的片段多半是 PCR 扩出来的，而引物的 5' 端可以带一段不互补的延伸序列，里面塞进一个酶切位点；这段延伸不与模板退火，却照样会被复制到产物里，于是在这些「加上去的」位点上切开扩增片段，就在一段染色体上从来没有过的 DNA 上按需造出了黏性末端。另外，为了把两个待连接的末端搭起来而插入的短合成片段叫接头（linker）。**带有好几种不同限制酶识别序列的接头叫多克隆位点，正是它让同一个载体骨架可以反复使用：它提供一份「可切位点菜单」，于是同一个载体能接纳许多不同的插入片段。**",
      src: "A p.304–305"
    },
    {
      link_en: "so much for cutting and joining. Now the carrier the gene is joined to",
      link_cn: "切和接说完了。现在说基因要接到什么上面去",
      en: "A plasmid is a circular DNA molecule that replicates separately from the host chromosome. Naturally occurring bacterial plasmids run from 5,000 to 400,000 bp; many are little more than molecular parasites, though some earn their keep by conferring antibiotic resistance or a new ability — the Ti plasmid of Agrobacterium tumefaciens lets its host colonise plant cells. pBR322, built in 1977, shows what a cloning vector needs. **A cloning vector needs four things: an origin of replication where the cell's enzymes start copying it, resistance genes so that carriers can be selected, unique restriction sites to be cut open at, and small size**, which eases entry into cells. Each detail of pBR322 follows from one of those four. The origin's regulatory system holds pBR322 at 10 to 20 copies per cell. The resistances are to ampicillin and to tetracycline. The sites — PstI, EcoRI, BamHI, SalI, PvuII — have to be unique, because an enzyme cutting twice would remove a piece of the vector itself. And the small size was achieved by trimming a larger parent plasmid down to what is actually needed.",
      cn: "质粒是一个环形 DNA 分子，独立于宿主染色体进行复制。天然存在的细菌质粒从 5,000 bp 到 400,000 bp 不等；许多不过是分子层面的寄生虫，但也有些靠赋予抗生素抗性或某种新本领来「挣饭吃」—— Agrobacterium tumefaciens 的 Ti 质粒就让宿主得以定殖植物细胞。1977 年构建的 pBR322 展示了一个克隆载体需要什么。**一个克隆载体需要四样东西：一个复制起点，细胞的酶从那里开始复制它；抗性基因，好把携带者选出来；唯一的限制酶切位点，用来把它切开；以及小尺寸，让它更容易进入细胞。**pBR322 的每个细节都从这四条中的某一条推出来。复制起点的调控系统把它维持在每个细胞 10 到 20 个拷贝。抗性针对的是氨苄青霉素和四环素。那些位点（PstI、EcoRI、BamHI、SalI、PvuII）必须唯一，因为切两次的酶会把载体自身的一段切掉。而 4,361 bp 这个小尺寸，是把一个更大的母本质粒裁到只剩真正需要的部分得来的。",
      src: "A p.305"
    },
    {
      link_en: "one property of that origin decides two things people get wrong",
      link_cn: "复制起点的一个性质，决定了两件常被搞错的事",
      en: "The replication origins used in common plasmid vectors were taken from naturally occurring plasmids, and each is regulated to maintain a particular copy number — depending on which origin is used, from one to hundreds or thousands per cell, which is a real choice between high copy number for yield and low copy number for stability. **Two plasmids that share a replication origin cannot both function in one cell, because the regulation of one interferes with the replication of the other, and such plasmids are called incompatible.** Putting two plasmids into one bacterial cell therefore requires that each carry a different origin.",
      cn: "常用质粒载体上的复制起点都是从天然质粒那里取来的，而每一种起点都被调控成维持某个特定的拷贝数 —— 取决于用的是哪个起点，可以是每个细胞一个，也可以是几百上千个；这是一个真实的选择：要产量就用高拷贝，要稳定就用低拷贝。**两个共用同一个复制起点的质粒，无法在同一个细胞里同时工作，因为其中一个的调控会干扰另一个的复制；这样的质粒被称为不相容。**所以要把两个质粒放进同一个细菌细胞，就必须让它们各带一个不同的复制起点。",
      src: "A p.306"
    },
    {
      link_en: "the recombinant molecule is finished. Getting it into a cell is where the second big idea lives",
      link_cn: "重组分子做好了。而把它弄进细胞这一步，藏着第二个大想法",
      en: "In the laboratory a small plasmid enters a bacterium by transformation: cells and plasmid DNA are incubated together at 0 °C in calcium chloride, then given a heat shock by shifting rapidly to 37–43 °C, and for reasons not well understood some of the treated cells take up the DNA. Some species, such as Acinetobacter baylyi, are naturally competent and need no treatment. The alternative is electroporation, a high-voltage pulse that briefly makes the membrane permeable to large molecules. Either way, relatively few cells take up the plasmid, which is the whole reason selection exists. A selectable marker is a gene that either permits a cell to grow, which is positive selection, or kills it, which is negative selection, under defined conditions; antibiotic resistance is the standard case and pBR322 carries two. A screenable marker instead encodes a protein that makes the cell produce a coloured or fluorescent molecule, so nothing is harmed and the right colonies are identified by colour. **You do not find the rare cell that worked — you arrange conditions in which only that cell can live.**",
      cn: "在实验室里，小质粒靠转化进入细菌：把细胞和质粒 DNA 一起放在 0 °C 的氯化钙中保温，再迅速升到 37–43 °C 给一次热激；出于尚未完全搞清的原因，处理过的细胞里有一部分会把 DNA 摄进去。有些物种（如 Acinetobacter baylyi）天生具有感受态，根本不需要处理。另一条路是电穿孔，用一次高压脉冲让膜短暂地对大分子通透。无论走哪条路，真正摄入质粒的细胞都相当少 —— 这正是「选择」这件事存在的全部理由。选择标记是这样一个基因：在特定条件下，它要么让细胞得以生长（正选择），要么把细胞杀死（负选择）；抗生素抗性是标准例子，pBR322 上带了两个。筛选标记则编码一个使细胞产生有色或荧光分子的蛋白，细胞毫发无损，目标菌落只是靠颜色被认出来。**你不去把那个成功的稀有细胞找出来 —— 你布置一套条件，让只有它能活下去。**",
      src: "A p.306–307"
    },
    {
      link_en: "and a plasmid runs out of room long before a gene does",
      link_cn: "而质粒的容量，远在基因用完之前就见底了",
      en: "Transformation with purified DNA becomes less successful as the plasmid grows, so cloning a segment longer than about 15,000 bp in an ordinary plasmid is difficult. A bacterial artificial chromosome, or BAC, typically carries 100,000 to 300,000 bp, and it is a fairly simple plasmid with three additions. First, a stable origin holding it at only one or two copies per cell — deliberately low, because few copies means few opportunities for recombination between them, which would otherwise scramble a large insert over time. Second, par genes taken from the F plasmid, encoding proteins that direct reliable distribution of the recombinant chromosomes to daughter cells at division, necessary precisely because there are so few copies to go round. Third, both kinds of marker: chloramphenicol resistance for positive selection, and a lacZ gene positioned so that an insert disrupts it. **lacZ encodes β-galactosidase, so on X-gal plates a colony with intact lacZ turns the colourless X-gal blue, while one whose lacZ was interrupted by the insert you wanted stays white** — pick the white colonies.",
      cn: "用纯化 DNA 做转化，质粒越大成功率越低，所以在普通质粒里克隆超过约 15,000 bp 的片段很困难。细菌人工染色体（BAC）通常能装 100,000 到 300,000 bp，它本身是个相当简单的质粒，只多了三样东西。第一，一个稳定的复制起点，把它维持在每个细胞只有一两个拷贝 —— 刻意压低，因为拷贝少就意味着拷贝之间发生重组的机会少，否则时间一长，大插入片段会被重组搅乱。第二，取自 F 质粒的 par 基因，编码的蛋白负责在分裂时把重组染色体可靠地分配到子细胞里去 —— 正因为拷贝太少，这件事才必须专门保证。第三，两类标记都有：氯霉素抗性用于正选择，还有一个位置安排得使插入片段恰好把它打断的 lacZ 基因。**lacZ 编码 β-半乳糖苷酶，所以在含 X-gal 的平板上，lacZ 完整的菌落把无色的 X-gal 变成蓝色，而 lacZ 被你想要的插入片段打断的菌落保持白色 —— 挑白色菌落。**",
      src: "A p.307"
    },
    {
      link_en: "and when even that is not enough, you stop imitating a chromosome and build one",
      link_cn: "而当这也不够用时，就别再模仿染色体了 —— 直接造一条",
      en: "A yeast artificial chromosome, or YAC, carries the largest inserts, up to about 2 x 10^6 bp, by containing everything a eukaryotic chromosome needs to survive in a yeast nucleus: a yeast origin of replication, two selectable markers, a centromere for attachment to the spindle at division, and two telomeres to cap and protect the ends. In use, the vector is grown as a circular bacterial plasmid and then cut twice: one enzyme removes the DNA lying between the two telomere sequences, leaving the telomeres at the ends of a now-linear molecule, and a second cut splits that molecule into two vector arms, each carrying a different selectable marker. Genomic DNA is partially digested, size-separated by pulsed field gel electrophoresis because an ordinary gel cannot resolve pieces this large, ligated between the two arms, and used to transform yeast spheroplasts, which are cells pretreated to strip their wall. Inserts over 150,000 bp are nearly as stable as normal chromosomes, those under 100,000 bp are gradually lost during mitosis, and a YAC missing a telomere at either end is rapidly degraded. **Requiring both markers for growth guarantees that only a genuine arm-insert-arm chromosome survives, so the selection does the quality control that no inspection of the ligation could.**",
      cn: "酵母人工染色体（YAC）能装最大的插入片段，可达约 2 x 10⁶ bp；它做到这一点的办法，是把一条真核染色体在酵母细胞核里存活所需的一切都装齐：一个酵母复制起点、两个选择标记、一个用于分裂时挂上纺锤体的着丝粒，以及两个用来封住并保护末端的端粒。用的时候，先把这个载体当作环形细菌质粒扩增出来，然后切两刀：一种酶切掉夹在两段端粒序列之间的 DNA，使端粒落到一个已经变成线形的分子的两端；第二刀再把这个分子切成两条载体臂，每条各带一个不同的选择标记。基因组 DNA 做部分酶切，用脉冲场凝胶电泳按大小分开（普通凝胶分辨不了这么大的片段），连到两条臂中间，再去转化酵母原生质球，也就是预先把细胞壁除掉的细胞。插入片段大于 150,000 bp 的 YAC 几乎和正常染色体一样稳定；小于 100,000 bp 的会在有丝分裂中逐渐丢失；任何一端缺了端粒的 YAC 会被迅速降解。**要求两个标记同时存在才能生长，就保证了只有真正「臂—插入片段—臂」结构的染色体才活得下来 —— 于是选择替你完成了任何肉眼检查连接产物都做不到的质检。**",
      src: "A p.307–309"
    },
    {
      link_en: "everything so far only keeps a gene. Getting the protein out of it takes a different vector",
      link_cn: "到目前为止的一切都只是把基因存起来。要从它得到蛋白，得换一种载体",
      en: "A eukaryotic gene carries the sequences needed for its transcription and regulation in its own cells, and those sequences do not function in a bacterium. Dropped into E. coli, a eukaryotic gene has no bacterial promoter — the site where RNA polymerase binds to start making mRNA — no ribosome-binding site to allow translation, and none of the other regulatory sequences. **An expression vector supplies all of them, positioned correctly relative to the insert: a well-characterised promoter and its regulatory elements sit next to the multiple cloning site**, so a gene inserted there is transcribed from that promoter, with the end encoding the protein's amino terminus placed closest to it. An operator, which is a short stretch of DNA beside the promoter where a repressor protein can sit and physically block RNA polymerase, lets the promoter be switched off and on; a ribosome-binding site improves translation; a transcription-termination sequence improves mRNA yield and stability; and a selectable marker allows the usual selection. Separately, a plasmid carrying more than one replication origin can be propagated in more than one species, for example in both yeast and E. coli, and is called a shuttle vector.",
      cn: "一个真核基因身上带着它在自己细胞里转录和调控所需的序列，而这些序列在细菌里不起作用。把一个真核基因丢进大肠杆菌，它没有细菌启动子（RNA 聚合酶结合、开始合成 mRNA 的位点）、没有允许翻译发生的核糖体结合位点，其他调控序列也一概没有。**表达载体把这些全部配齐，并且相对插入片段摆在正确的位置上：一个性质清楚的启动子及其调控元件就挨着多克隆位点，所以插进去的基因由这个启动子转录**，而编码蛋白氨基端的那一端要放在离它最近的位置。操纵基因是紧挨启动子的一小段 DNA，阻遏蛋白可以坐上去、从物理上挡住 RNA 聚合酶，于是启动子可以被关掉和打开；核糖体结合位点改善翻译；转录终止序列提高 mRNA 的产量和稳定性；再加一个选择标记以便照常做选择。另外，带有不止一个复制起点的质粒可以在不止一个物种里增殖，比如同时在酵母和大肠杆菌里，这种质粒叫穿梭载体。",
      src: "A p.309"
    },
    {
      link_en: "and which cell you express it in is always the same trade",
      link_cn: "至于在哪种细胞里表达，做的永远是同一笔交易",
      en: "Bacteria, especially E. coli, are the most common host: regulatory sequences are well understood, growth is cheap, DNA goes in and out easily, and fermenters give huge yields. Against that, many foreign proteins do not fold correctly, many miss the posttranslational modification or proteolytic cleavage they need, and eukaryotic proteins frequently aggregate into insoluble precipitates called inclusion bodies — plenty of protein, no activity. Expression can reach 10% or more of cellular protein, at which point some foreign proteins kill the host, so expression is limited to the few hours before harvest. Two bacterial systems are worth naming: the lactose operon promoter is convenient but leaky, never fully off in the absence of lactose, which is a problem when the product is toxic, while the bacteriophage T7 system fuses the gene to a T7 promoter transcribed by a separately cloned, tightly regulated T7 RNA polymerase rather than by E. coli's own, making it both efficient and properly switchable. Yeast works the same way with the GAL1 and GAL10 promoters, on in galactose and off in glucose, and being a eukaryote it folds and modifies eukaryotic proteins more accurately. Insect cells use baculoviruses, insect viruses that late in infection make huge amounts of two proteins, p10 and polyhedrin, neither needed in cultured cells, so both genes can be replaced by the gene you want, which is then produced at up to 25% of total protein. Mammalian cells in culture give the most faithful modification of all but are very expensive. **Every host is a trade-off and the trade is always folding and modification against cost, which is why tissue culture is used to test what a protein does in a living cell rather than to manufacture it.**",
      cn: "细菌（尤其是大肠杆菌）是最常用的宿主：调控序列研究得很透、培养便宜、DNA 进出容易，发酵罐还能给出巨大产量。代价是：许多外源蛋白折叠不正确，许多得不到它们需要的翻译后修饰或蛋白酶切割，真核蛋白还经常聚集成不溶的沉淀，叫包涵体 —— 蛋白一大堆，活性为零。表达量可以高到占细胞总蛋白的 10% 以上，而到了那个程度，有些外源蛋白会把宿主杀死，所以表达只能限制在收获前的几小时内。有两个细菌系统值得点名：乳糖操纵子启动子好用但是「漏」的 —— 没有乳糖时也关不严，而当产物有毒时这就是个麻烦；噬菌体 T7 系统则把基因融合到一个 T7 启动子上，转录它的不是大肠杆菌自己的聚合酶，而是另行克隆、受严格调控的 T7 RNA 聚合酶，因此既高效又真正开关自如。酵母用同样的思路，靠 GAL1 和 GAL10 启动子 —— 在半乳糖中开、在葡萄糖中关；而作为真核生物，它折叠和修饰真核蛋白也更准确。昆虫细胞用杆状病毒，这是一类昆虫病毒，感染后期会大量制造 p10 和 polyhedrin 两种蛋白，而在培养细胞里这两者都不需要，所以两个基因都可以换成你想要的基因，产量可高达总蛋白的 25%。哺乳动物细胞培养给出的修饰最忠实，但非常昂贵。**每一种宿主都是一笔取舍，而这笔交易永远是「折叠与修饰」换「成本」—— 所以组织培养是用来在活细胞里检验一个蛋白做什么的，而不是用来生产它的。**",
      src: "A p.309–311"
    },
    {
      link_en: "with the gene cloned and expressed, you can start asking it questions — one residue at a time",
      link_cn: "基因克隆到手、也表达出来了，就可以开始向它提问 —— 一次问一个残基",
      en: "Alter the DNA of a cloned gene and you alter the protein it makes; site-directed mutagenesis is how you ask a protein what a single residue does. If suitable restriction sites flank the region of interest, cut that segment out and replace it with a synthetic one identical except for the change wanted. When no convenient sites exist, use oligonucleotide-directed mutagenesis: denature the cloned gene, anneal two short complementary synthetic strands carrying the desired base change to opposite strands of the circular vector — a single mismatch in 30 to 40 bp does not prevent annealing — and let them prime synthesis in both directions around the plasmid; after several PCR cycles the mutation-containing DNA predominates and is used to transform bacteria. Changes need not be small: whole domains can be deleted by cutting and religating, and parts of two different genes can be joined to give a fusion protein. **RecA is a 352-residue protein whose Lys at position 72 is involved in ATP hydrolysis, and changing Lys72 to Arg gives a variant that binds ATP but cannot hydrolyse it** — exactly the tool needed to separate binding from hydrolysis in the protein's mechanism.",
      cn: "改动一个克隆基因的 DNA，就改动了它造出来的蛋白；定点突变就是你用来向一个蛋白提问「某一个残基到底在干什么」的手段。如果目标区域两侧正好有合适的酶切位点，就把那一段切出来，换上一段除了你想要的改动之外完全相同的合成序列。没有合适位点时，就用寡核苷酸定向突变：把克隆基因变性，让两条互补的短合成链（带着你想要的碱基改动）分别退火到环形载体的两条链上（30 到 40 bp 中只有一个错配并不妨碍退火），再让它们作为引物沿质粒双向合成；跑几轮 PCR 之后，含突变的 DNA 占了上风，用它去转化细菌即可。改动也不必很小：整个结构域可以靠切开再连接而删除，两个不同基因的一部分也可以接在一起，得到融合蛋白。**RecA 是一个 352 个残基的蛋白，其 72 位的 Lys 参与 ATP 水解；把 Lys72 换成 Arg，得到的变体能结合 ATP 却无法水解它 —— 这正是在该蛋白的机制里把「结合」和「水解」分开所需要的工具。**",
      src: "A p.312"
    },
    {
      link_en: "and to study the protein you must first hold it in your hand, purified",
      link_cn: "而要研究这个蛋白，你首先得把纯的它拿在手里",
      recall_en: "the column that separates on what a protein binds, from the purification chain — this is how a protein that binds nothing convenient is made to fit it",
      recall_cn: "纯化那条主线里「按结合什么来分离」的那根柱子 —— 这里说的是怎么让一个什么都不结合的蛋白也能上那根柱子",
      en: "Affinity chromatography is among the most efficient purification methods, and it needs the protein to bind a ligand that can be immobilised on a column, which most proteins do not. The fix is genetic: fuse the target gene to a gene encoding a peptide or protein that binds a simple, stable ligand tightly and specifically. The standard set is Protein A at 59 kDa, binding the Fc portion of IgG; (His)6 at 0.8 kDa, binding Ni2+; glutathione-S-transferase at 26 kDa, binding glutathione; maltose-binding protein at 41 kDa, binding maltose; β-galactosidase at 116 kDa, binding TPEG; and the chitin-binding domain at 5.7 kDa, binding chitin. Glutathione-S-transferase shows the whole cycle: express the fusion protein, pass a crude extract through a column of glutathione immobilised on cross-linked agarose beads, wash everything else through, then elute gently with high salt or with free glutathione competing for the binding site. The larger tags, maltose-binding protein among them, add solubility and stability and can rescue a protein that would otherwise be inactive through misfolding. **Every tag is also a risk: even a small one can perturb folding and therefore the result, and even after protease cleavage one or a few extra residues remain**, so a tag's effect has to be controlled for rather than assumed absent.",
      cn: "亲和层析是效率最高的纯化方法之一，但它要求目标蛋白能结合某个可以固定在柱子上的配体，而大多数蛋白并不能。解决办法是遗传学的：把目的基因与一个编码某种肽或蛋白的基因融合，后者能紧密而专一地结合一个简单、稳定的配体。标准的一套是：Protein A，59 kDa，结合 IgG 的 Fc 部分；(His)6，0.8 kDa，结合 Ni²⁺；谷胱甘肽-S-转移酶，26 kDa，结合谷胱甘肽；麦芽糖结合蛋白，41 kDa，结合麦芽糖；β-半乳糖苷酶，116 kDa，结合 TPEG；几丁质结合结构域，5.7 kDa，结合几丁质。谷胱甘肽-S-转移酶展示了完整流程：表达融合蛋白，把粗提液过一根固定了谷胱甘肽的交联琼脂糖珠柱，其余东西全部流穿冲掉，再用高盐、或者用游离谷胱甘肽竞争结合位点，温和地把目标洗脱下来。较大的标签（麦芽糖结合蛋白就是其一）能增加溶解度和稳定性，可以救回一个本来会因折叠错误而失活的蛋白。**而每一个标签同时也是风险：哪怕很小的标签也可能扰动折叠、从而扰动结果；即使用蛋白酶切掉，蛋白上仍会残留一两个多余的残基 —— 所以标签的影响必须做对照，不能想当然地认为它不存在。**",
      src: "A p.313–314",
      see: [{ id: "L-3-3-1", en: "the column itself, and the two ways anything is eluted from it", cn: "那根柱子本身，以及从它上面洗脱任何东西的两种办法" }]
    },
    {
      link_en: "one last family of methods, all built on an enzyme that runs the central dogma backwards",
      link_cn: "最后一组方法，全都建立在一个把中心法则倒着跑的酶上",
      en: "Reverse transcriptase works like a DNA polymerase but copies an RNA template into DNA, which is what lets all three of the following reach the RNA in a cell rather than its genes. Reverse transcriptase PCR uses it for the first cycle and ordinary DNA polymerase thereafter, and because only living cells are transcribing, it distinguishes sequences from living cells from those of dead tissue. Quantitative PCR counts instead: the reaction runs with a reporter oligonucleotide carrying both a fluorophore and a quencher, so it stays dark until it anneals to the amplified segment, which separates the two and lets fluorescence appear; the readout is CT, the cycle number at which fluorescence first crosses a set threshold, so a sequence present in greater amount at the start reaches the threshold earlier, while a no-template control shows only slow background drift. A cDNA library is built by extracting mRNA from an organism or from particular cells, copying it with reverse transcriptase, ligating oligonucleotides of known sequence to the 3' end of the first strand to prime second-strand synthesis, and cloning the double-stranded product into a vector, one cloned sequence per host cell across millions of cells. A combinatorial gene library is the opposite in scope, holding many variants of one gene, made for example by amplifying a segment with a deliberately inaccurate DNA polymerase so each clone carries one or two random base changes. **A cDNA library contains no DNA that was not transcribed, so finding a gene in it means that gene was being expressed in those cells under those conditions.**",
      cn: "逆转录酶的工作方式像 DNA 聚合酶，但它以 RNA 为模板合成 DNA —— 正是这一点，让下面三样东西能够触及细胞里的 RNA，而不只是它的基因。逆转录 PCR（RT-PCR）在第一轮用它、之后交给普通 DNA 聚合酶；由于只有活细胞在转录，它能把来自活细胞的序列和来自死组织的序列区分开。定量 PCR 做的则是计数：反应体系里加了一条报告寡核苷酸，同时带着一个荧光基团和一个淬灭基团，因此在退火到扩增片段之前是暗的；一旦退火上去，两者被分开，荧光就出现。读数是 CT，即荧光首次越过设定阈值时的循环数 —— 起始量越多的序列越早到达阈值，而无模板对照只会显示缓慢的背景漂移。cDNA 文库的做法是：从某个生物、或某些特定细胞里提取 mRNA，用逆转录酶抄成 DNA，把已知序列的寡核苷酸连到第一条链的 3' 端以引发第二条链的合成，再把双链产物克隆进载体 —— 每个宿主细胞携带一条克隆序列，数以百万计的细胞。组合基因文库在范围上正好相反：它装的是同一个基因的许多变体，做法比如用一个刻意不准确的 DNA 聚合酶去扩增某一段，使每个克隆带上一两个随机碱基改动。**cDNA 文库里不含任何未被转录过的 DNA，所以在其中找到一个基因，就意味着在那些细胞、那些条件下这个基因当时正在表达。**",
      src: "A p.314–316",
      see: [{ id: "L-9-2-1", en: "the sequencing method that replaced a cDNA library for the same question", cn: "在同一个问题上取代了 cDNA 文库的那种测序方法" }]
    }
  ],
  terms: [
    { en: "restriction endonuclease", cn: "限制性内切酶",
      def_en: "A bacterial enzyme recognising a specific short palindromic sequence and cleaving DNA there. Its natural role is defence — it destroys incoming foreign DNA while the host's own copies of that sequence are protected by methylation. Type II enzymes, from Hamilton Smith in 1970, need no ATP and cut inside the recognition sequence itself, which is why they and not types I or III became the laboratory tool.",
      def_cn: "一种细菌酶，识别某个特定的短回文序列并在那里切开 DNA。它天然的角色是防御 —— 摧毁闯进来的外源 DNA，而宿主自身那些同样序列则由甲基化加以保护。1970 年 Hamilton Smith 分离的 II 型酶不需要 ATP，而且切在识别序列内部，所以成为实验室工具的是它，而不是 I 型或 III 型。" },
    { en: "sticky ends", cn: "黏性末端",
      def_en: "The two-to-four-nucleotide single-stranded overhangs left when a restriction endonuclease cuts the two strands in staggered fashion. Because the recognition sequence is palindromic, every fragment that enzyme cuts carries the same overhang, so any two of them anneal. Blunt ends, cut straight across, ligate less efficiently, and non-complementary overhangs generally do not ligate at all.",
      def_cn: "限制性内切酶错开切割两条链时留下的两到四个核苷酸的单链突出端。由于识别序列是回文的，同一种酶切出的每个片段都带着相同的突出端，因此任意两个都能退火配上。齐头切出的平末端连接效率更低，而互不互补的突出端一般根本连不上。" },
    { en: "cloning vector", cn: "克隆载体",
      def_en: "A small DNA molecule capable of autonomous replication, used to carry an inserted segment into a host cell and be copied there. It needs an origin of replication, at least one selectable marker and unique restriction sites to be cut open at; small size eases entry. pBR322 is the teaching example at 4,361 bp.",
      def_cn: "一个能自主复制的小 DNA 分子，用来把插入片段带进宿主细胞并在其中被复制。它需要一个复制起点、至少一个选择标记，以及用来切开的唯一酶切位点；尺寸小则更容易进入细胞。4,361 bp 的 pBR322 是教科书例子。" },
    { en: "multiple cloning site", cn: "多克隆位点",
      def_en: "A short synthetic stretch carrying recognition sequences for several different restriction endonucleases, inserted into a vector so that the same backbone offers a menu of places to cut and therefore accepts many different inserts. A linker is the general term for such a bridging fragment.",
      def_cn: "一段带有好几种不同限制酶识别序列的短合成序列，插在载体上，使同一个骨架提供一份「可切位点菜单」，因而能接纳许多不同的插入片段。接头（linker）是这类搭桥片段的统称。" },
    { en: "incompatible plasmids", cn: "不相容质粒",
      def_en: "Two plasmids that cannot function in one cell because they share a replication origin, so the regulation of one interferes with the replication of the other. Putting two plasmids into one bacterium therefore requires two different origins; the origin also fixes copy number, from one to thousands per cell.",
      def_cn: "两个因为共用同一个复制起点而无法在同一个细胞里共存的质粒 —— 其中一个的调控会干扰另一个的复制。所以要把两个质粒放进同一个细菌，就必须用两个不同的起点；起点还决定拷贝数，从每细胞一个到上千个不等。" },
    { en: "selectable marker / screenable marker", cn: "选择标记／筛选标记",
      def_en: "A selectable marker is a gene that under defined conditions either permits a cell to grow, which is positive selection, or kills it, which is negative selection; antibiotic resistance is the standard case. A screenable marker harms nothing and instead makes the cell produce a coloured or fluorescent molecule, so the right colonies are picked out by eye.",
      def_cn: "选择标记是这样一个基因：在特定条件下，它要么让细胞得以生长（正选择），要么把细胞杀死（负选择），抗生素抗性是标准例子。筛选标记不伤害细胞，而是让细胞产生有色或荧光分子，于是目标菌落靠肉眼就能挑出来。" },
    { en: "bacterial artificial chromosome", cn: "细菌人工染色体 (BAC)",
      def_en: "A simple plasmid carrying 100,000 to 300,000 bp, held at one or two copies per cell by a stable origin so that recombination between copies cannot scramble the insert, distributed to daughter cells by par genes from the F plasmid, and read out by blue-white screening on X-gal where an insert interrupts lacZ.",
      def_cn: "一种能装 100,000 到 300,000 bp 的简单质粒，靠稳定的复制起点维持在每细胞一两个拷贝，使拷贝之间的重组无法搅乱插入片段；靠取自 F 质粒的 par 基因分配到子细胞；并靠 X-gal 上的蓝白筛选读出结果 —— 插入片段会打断 lacZ。" },
    { en: "yeast artificial chromosome", cn: "酵母人工染色体 (YAC)",
      def_en: "The vector for the largest inserts, up to about 2 x 10^6 bp, carrying everything a eukaryotic chromosome needs in a yeast nucleus: a yeast origin, two selectable markers, a centromere and two telomeres. It is used as two arms with one marker each, so requiring both markers guarantees a genuine arm-insert-arm product.",
      def_cn: "用于最大插入片段（可达约 2 x 10⁶ bp）的载体，把一条真核染色体在酵母核里所需的一切都带齐：酵母复制起点、两个选择标记、一个着丝粒和两个端粒。使用时被切成各带一个标记的两条臂，因此「两个标记都要」就保证了产物是真正的「臂—插入片段—臂」。" },
    { en: "expression vector", cn: "表达载体",
      def_en: "A vector supplying everything a foreign gene needs in order to be transcribed and translated in the host: a well-characterised promoter beside the cloning site, an operator so the promoter can be switched, a ribosome-binding site, a transcription terminator and a selectable marker. A vector with two origins that propagates in two species is a shuttle vector.",
      def_cn: "一种把外源基因在宿主里转录和翻译所需的一切都配齐的载体：克隆位点旁一个性质清楚的启动子、一个使启动子可以开关的操纵基因、一个核糖体结合位点、一个转录终止序列，以及一个选择标记。带两个复制起点、能在两个物种里增殖的载体叫穿梭载体。" },
    { en: "inclusion body", cn: "包涵体",
      def_en: "An insoluble precipitate of aggregated foreign protein formed in a bacterial host, the standard failure mode when a eukaryotic protein is expressed in E. coli: plenty of protein and no activity. It is the concrete form of the trade every host makes, folding and modification against cost.",
      def_cn: "外源蛋白在细菌宿主中聚集形成的不溶沉淀，是在大肠杆菌里表达真核蛋白时的典型失败方式：蛋白一大堆，活性为零。它就是「每种宿主都要拿折叠与修饰去换成本」这笔交易的具体形态。" },
    { en: "site-directed mutagenesis", cn: "定点突变",
      def_en: "Changing chosen bases in a cloned gene in order to ask what one residue of its protein does — by swapping in a synthetic segment where restriction sites allow, or by annealing short mismatched oligonucleotides to a circular vector and letting them prime synthesis around it. RecA Lys72Arg, which binds ATP but cannot hydrolyse it, is the worked case.",
      def_cn: "改动克隆基因中选定的碱基，以便追问它的蛋白里某一个残基在干什么 —— 有酶切位点时换进一段合成序列，没有时让带错配的短寡核苷酸退火到环形载体上、以它为引物绕质粒合成。RecA 的 Lys72Arg（能结合 ATP 却无法水解）就是那个实例。" },
    { en: "affinity tag", cn: "亲和标签",
      def_en: "A peptide or protein fused to a target so that an affinity column has something to grip: Protein A binds IgG, (His)6 binds Ni2+, glutathione-S-transferase binds glutathione, maltose-binding protein binds maltose, β-galactosidase binds TPEG, the chitin-binding domain binds chitin. Larger ones add solubility; all of them risk perturbing folding, and cleavage still leaves extra residues behind.",
      def_cn: "融合到目标蛋白上、好让亲和柱有东西可抓的一段肽或一个蛋白：Protein A 结合 IgG，(His)6 结合 Ni²⁺，谷胱甘肽-S-转移酶结合谷胱甘肽，麦芽糖结合蛋白结合麦芽糖，β-半乳糖苷酶结合 TPEG，几丁质结合结构域结合几丁质。较大的能增加溶解度；而所有标签都有扰动折叠的风险，即使切掉也会留下多余残基。" },
    { en: "cDNA library", cn: "cDNA 文库",
      def_en: "A collection of clones made by copying a cell's mRNA into DNA with reverse transcriptase and cloning the double-stranded product, one sequence per host cell across millions of cells. It holds no DNA that was not transcribed, so finding a gene in it shows that gene was being expressed in those cells under those conditions.",
      def_cn: "把细胞的 mRNA 用逆转录酶抄成 DNA、再把双链产物克隆起来所得到的一批克隆，每个宿主细胞一条序列，合计数以百万计。它不含任何未被转录过的 DNA，所以在其中找到一个基因，就说明在那些细胞、那些条件下它当时正在表达。" },
    { en: "quantitative PCR", cn: "定量 PCR",
      def_en: "Amplification watched in real time with a reporter oligonucleotide carrying a fluorophore and a quencher, dark until it anneals to the product and separates the two. The readout is CT, the cycle at which fluorescence crosses a set threshold: more target at the start means an earlier CT, and a no-template control drifts only slowly.",
      def_cn: "用一条同时带荧光基团和淬灭基团的报告寡核苷酸实时观察扩增 —— 它在退火到产物、把两者分开之前是暗的。读数是 CT，即荧光越过设定阈值时的循环数：起始量越多，CT 越早；而无模板对照只会缓慢漂移。" }
  ]
};

/* ------------------------------------------------------------------ 基因组学 ---- */
/* Member: L-9-3-1 alone, and read as a brief orientation on the reader's own
   instruction (2026-08-10: 基因组学可以简单讲). Ten steps rather than fourteen,
   because ten is what the material holds without padding. What it adds over the
   seven-step node spine is the scale of what has been sequenced, the named
   transposon families, the simple-sequence repeats that make centromere and
   telomeres, comparative genomics against other primates, and the closing point
   that every number here is a property of an assembly. */
window.BIOLITE_SPINE["key:genomics"] = {
  assumed: ["genome", "gene", "DNA", "RNA", "base", "chromosome", "protein", "cell",
            "sequencing", "mutation", "inheritance", "evolution", "bacteria",
            "eukaryote", "recombination", "primate", "messenger RNA", "transcription"],
  nodeTitle_en: "Genomics and the human story",
  nodeTitle_cn: "基因组学与人类的来历",
  title_en: "Two numbers from a whole human genome: how little of it is gene, and how little of it differs between two people",
  title_cn: "整个人类基因组给出的两个数字：其中真正是基因的有多少，以及两个人之间不同的有多少",
  steps: [
    {
      en: "Reading one gene tells you about one product. Reading a whole genome — every base of DNA an organism carries — allows two questions no single gene can answer: what the DNA is mostly made of, and how one person's DNA differs from another's. Since the first complete human genomes in 2001, genomes from every known bacterial family have been sequenced, completed eukaryotic genomes number in the tens of thousands, and the list now includes extinct species such as Homo neanderthalensis and individual humans who died in past millennia. **Both of those questions are answered by a number, and both numbers overturn the picture most people carry of what a genome is.**",
      cn: "读一个基因，你了解的是一个产物。读整个基因组 —— 一个生物体携带的每一个 DNA 碱基 —— 才能问两个单个基因回答不了的问题：这些 DNA 大部分究竟是什么，以及一个人的 DNA 和另一个人差在哪里。自 2001 年第一批完整人类基因组发表以来，每一个已知细菌科的基因组都被测过，完成的真核基因组数以万计，名单上如今还包括已灭绝的物种（例如尼安德特人 Homo neanderthalensis）以及几千年前死去的人类个体。**这两个问题的答案都是一个数字，而两个数字都推翻了大多数人心里那幅「基因组是什么」的图。**",
      src: "A p.326–336, §9.3"
    },
    {
      link_en: "the first number, and it is about the content of one genome",
      link_cn: "第一个数字，说的是一个基因组里有什么",
      en: "Exons are the stretches of a gene kept in the finished messenger RNA and therefore available to specify amino acids; introns are the stretches transcribed and then cut back out of the RNA before it is used, and they count as part of the gene without specifying anything. Counting exons and introns together, **only about 30% of human DNA lies inside protein-coding genes at all, so the part that actually specifies amino acids is a small fraction of a small fraction**, and sequencing a human genome is a long way from listing its proteins.",
      cn: "外显子是基因中保留到成熟 mRNA 里、因而能够规定氨基酸的那些段；内含子是先被转录、随后又在 RNA 被使用前切掉的那些段，它算作基因的一部分，却什么也不规定。把外显子和内含子一起算进去，**人类 DNA 中真正落在蛋白编码基因里的也只有约 30% —— 所以真正规定氨基酸的那部分，是一小部分里的一小部分；「测出一个人类基因组」离「列出它的蛋白清单」还远得很。**",
      src: "A p.336"
    },
    {
      link_en: "so if 70% is not gene, what is it?",
      link_cn: "那么，剩下那 70% 不是基因，又是什么？",
      en: "Nearly half of human DNA is derived from parasitic transposons. A transposon is a segment of DNA that copies or moves itself to a new position in a genome, carrying the machinery to do so and nothing that serves its host, and the human ones fall into named families — LTR retrotransposons, LINEs and SINEs. **By mass a human genome is more transposon wreckage than gene: the largest single component of your DNA is the accumulated residue of elements that copied themselves for their own sake.**",
      cn: "人类 DNA 中将近一半来自寄生性的转座子。转座子是一段能把自己复制或搬到基因组新位置去的 DNA，它带着完成这件事所需的装置，却不带任何对宿主有用的东西；人类身上的转座子分成几个有名字的家族 —— LTR 逆转座子、LINE 和 SINE。**按重量算，人类基因组里转座子的残骸比基因还多：你的 DNA 中最大的单一组分，是一批「为自己而复制」的元件积累下来的残余。**",
      src: "A p.336",
      beyond: true,
      beyondNote: "The fraction and the family names are on A p.336; how a transposon actually moves is developed in chapter 25 and is carried in here only far enough to name the noun.",
      openQuestion_en: "Whether that transposon-derived half does anything for us is a separate question, and not a settled one.",
      openQuestion_cn: "这来自转座子的一半究竟对我们有没有用处，是另一个问题，而且并没有定论。",
      see: [{ id: "L-25-3-1", en: "how a transposon actually moves itself", cn: "转座子究竟是怎么把自己搬走的" }]
    },
    {
      link_en: "and the remainder is not silence either",
      link_cn: "而剩下的部分也不是沉默的",
      en: "Much of what is left encodes RNAs of many types, meaning RNA that is transcribed and never translated into protein. Simple-sequence repeats — short sequences repeated head to tail many times over — make up the centromere, which is the site where a chromosome attaches to the spindle at division, and the telomeres that cap and protect its two ends. **Short tandem repeats among those simple sequences are what forensic DNA analysis actually measures, so the part of the genome used to identify a person is a part that codes for nothing at all.**",
      cn: "剩下的很大一部分编码各种各样的 RNA —— 也就是被转录出来、却从不被翻译成蛋白的 RNA。简单序列重复（短序列首尾相接地重复很多次）构成着丝粒（染色体在分裂时挂上纺锤体的那个位点）和端粒（封住并保护两端的那两段）。**法医 DNA 分析实际测量的，正是这些简单序列中的短串联重复 —— 所以用来识别一个人身份的那部分基因组，恰恰是什么也不编码的那一部分。**",
      src: "A p.336",
      see: [{ id: "L-24-3-1", en: "what a centromere and a telomere are for", cn: "着丝粒和端粒各自是干什么用的" },
             { id: "L-8-3-1", en: "how a repeat length is actually turned into a profile", cn: "一段重复的长度究竟怎么变成一份图谱" }]
    },
    {
      link_en: "the second number is about the difference between two people rather than the content of one",
      link_cn: "第二个数字说的是两个人之间的差别，而不是一个人体内有什么",
      en: "Alongside millions of single-base differences sit larger deletions, insertions and rearrangements, so the variation between two people is small and also structured. **Any two people differ by roughly 1 base in every 1,000, which over three billion bases is millions of differences and yet as a fraction is tiny**, so the useful work is not listing the differences but tracking which of them travel together.",
      cn: "除了数以百万计的单碱基差异之外，还有更大的缺失、插入和重排，所以两个人之间的变异既很小、又是有结构的。**任意两个人之间大约每 1,000 个碱基有 1 个不同：放在三十亿个碱基上这是几百万处差异，作为比例却极小 —— 所以真正有价值的工作不是把差异一条条列出来，而是追踪哪些差异是结伴而行的。**",
      src: "A p.336"
    },
    {
      link_en: "each of those differences has a name",
      link_cn: "每一处这样的差异都有一个名字",
      en: "A single nucleotide polymorphism, SNP, is a position in the genome where different people carry different single bases. **One SNP on its own says almost nothing: it is one letter among three billion, and most of them sit outside any gene.**",
      cn: "单核苷酸多态性（SNP）指基因组上的某个位置，不同的人在那里带着不同的单个碱基。**单看一个 SNP 几乎什么也说明不了：它只是三十亿个字母里的一个，而且大多数根本不落在任何基因里。**",
      src: "A p.336"
    },
    {
      link_en: "they become useful in blocks, and the block has a name too",
      link_cn: "它们成块出现时才有用，而这个块也有名字",
      recall_en: "this is the which of them travel together from two steps up",
      recall_cn: "这就是上面两步说的「哪些差异结伴而行」",
      en: "SNPs sitting close together on the same chromosome are rarely separated by recombination, because a chromosome is passed on in long pieces, so they are inherited as a set. **A set of SNPs travelling together this way is called a haplotype, and the haplotype rather than the individual SNP is the unit that actually gets used.**",
      cn: "位于同一条染色体上、彼此靠得很近的 SNP 很少被重组拆开，因为染色体是一大段一大段传下去的，于是它们成套遗传。**这样结伴而行的一组 SNP 就叫一个单倍型，而真正被拿来用的单位是单倍型，不是单个 SNP。**",
      src: "A p.336"
    },
    {
      link_en: "and two entirely different fields are built on that one unit",
      link_cn: "而两个完全不同的领域，都建立在这一个单位之上",
      en: "Disease-gene hunting finds a haplotype carried more often by people with a condition than by people without it, and the variant responsible lies somewhere inside that block, which narrows the search from a whole genome to one stretch of one chromosome. Human migration history runs the other way: two populations sharing a haplotype share an ancestor who carried it, so the geographic distribution of haplotypes traces where people came from and in what order. **The same blocks are read for medicine in one case and for history in the other, and neither reading needs to know what a single letter inside the block does.**",
      cn: "找致病基因：找出一个在患病者中比在未患病者中更常见的单倍型，负责的那个变异就落在这个块里的某处 —— 搜索范围于是从整个基因组缩小到一条染色体上的一段。人类迁徙史则反过来走：两个群体共享同一个单倍型，说明他们共享一位携带过它的祖先，于是单倍型的地理分布就画出了人从哪里来、按什么顺序来。**同样的一批块，一边读出的是医学，另一边读出的是历史 —— 而两种读法都不需要知道块里任何一个字母到底在干什么。**",
      src: "A p.326–336"
    },
    {
      link_en: "and one more thing a whole genome allows that a single gene does not",
      link_cn: "还有一件事是整个基因组才做得到、单个基因做不到的",
      en: "Comparative genomics sets the human genome against those of other primates and asks which differences are ours alone. **That one comparison serves two purposes at once: finding the alterations that define humanity, and finding the ones that cause inherited disease.**",
      cn: "比较基因组学把人类基因组与其他灵长类的基因组摆在一起，问哪些差异是我们独有的。**这一个比较同时服务于两个目的：既用来找出「定义人之为人」的那些改变，也用来找出导致遗传病的那些改变。**",
      src: "A p.326–336",
      see: [{ id: "L-9-2-1", en: "the same comparison run on one gene at a time, and what makes a match count", cn: "同一种比较逐个基因地做，以及一次匹配凭什么算数" }]
    },
    {
      link_en: "none of these numbers existed before the reads could be put together",
      link_cn: "在读段被拼起来之前，上面这些数字一个都不存在",
      recall_en: "the alignment of overlapping reads into contigs, from the nucleic acid chemistry chain",
      recall_cn: "核酸化学那条主线里「把有重叠的读段拼成 contig」的那一步",
      en: "No single sequencing read comes anywhere near spanning a genome. Reads are produced in bulk, each nucleotide is covered many times over so that comparison between reads covering the same base throws out most errors, and overlapping reads are then aligned end to end into long contiguous sequences. **A genome reaches you as an assembly of overlapping reads, so the 30% and the 1-in-1,000 are properties of a reconstruction rather than of anything anyone looked at directly.**",
      cn: "没有任何一条测序读段接近覆盖得了一个基因组。读段是成批产生的，每个核苷酸被覆盖很多次，好让覆盖同一碱基的读段互相比对、把大部分错误扔掉；随后把有重叠的读段首尾对齐，拼成长的连续序列。**一个基因组是以「一堆有重叠的读段拼起来的结果」的形式到你手上的 —— 所以那个 30% 和那个千分之一，都是一份重建物的性质，而不是任何人直接看到的东西的性质。**",
      src: "A p.293, figure 8-38; A p.336",
      see: [{ id: "L-8-3-1", en: "the sequencing methods that produced those reads", cn: "产生这些读段的那几种测序方法" }]
    }
  ],
  terms: [
    { en: "exon", cn: "外显子",
      def_en: "A stretch of a gene that survives into the finished messenger RNA and is therefore available to specify amino acids.",
      def_cn: "基因中保留到成熟 mRNA 里、因而能够规定氨基酸的那些段。" },
    { en: "intron", cn: "内含子",
      def_en: "A stretch of a gene that is transcribed and then cut back out of the RNA before it is used. It counts as part of the gene and does not specify amino acids.",
      def_cn: "基因中先被转录、随后又在 RNA 被使用前切掉的那些段。它算作基因的一部分，但不规定氨基酸。" },
    { en: "transposon", cn: "转座子",
      def_en: "A segment of DNA that copies or moves itself to a new position in a genome, carrying what it needs to do so and nothing that serves its host. Nearly half of human DNA is derived from these, in the families LTR retrotransposons, LINEs and SINEs.",
      def_cn: "一段能把自己复制或搬到基因组新位置去的 DNA，自带完成此事所需的装置，却不带任何对宿主有用的东西。人类 DNA 中近一半源自它们，分属 LTR 逆转座子、LINE 和 SINE 这几个家族。" },
    { en: "simple-sequence repeat", cn: "简单序列重复",
      def_en: "A short sequence repeated head to tail many times over. Stretches of these make up the centromere and the telomeres, and the short tandem repeats among them are what forensic DNA analysis measures — a part of the genome that codes for nothing and identifies a person.",
      def_cn: "一段短序列首尾相接地重复很多次。这类序列构成着丝粒和端粒，而其中的短串联重复正是法医 DNA 分析所测量的对象 —— 一段什么也不编码、却能确认一个人身份的基因组。" },
    { en: "single nucleotide polymorphism", cn: "单核苷酸多态性 (SNP)",
      def_en: "A position in the genome at which different individuals carry different single bases. Two people differ at roughly one position in every thousand, and most such positions lie outside any gene.",
      def_cn: "基因组上的一个位置，不同个体在那里携带不同的单个碱基。两个人大约每一千个位置有一个不同，而这类位置大多不在任何基因里。" },
    { en: "haplotype", cn: "单倍型",
      def_en: "A group of nearby single-base differences on one chromosome that are inherited together as a block, because chromosomes are passed on in long pieces and recombination rarely separates them. This block, rather than any one difference in it, is the unit used for finding disease genes and for tracing human migrations.",
      def_cn: "同一条染色体上彼此靠近、作为一整块一起遗传的一组单碱基差异 —— 因为染色体是一大段一大段传下去的，重组很少把它们拆开。用来找致病基因、追踪人类迁徙的单位是这个块，而不是块里的任何单个差异。" },
    { en: "comparative genomics", cn: "比较基因组学",
      def_en: "Setting one species' genome against another's — the human against other primates — to find which differences are unique to it. The same comparison locates both the alterations that define humanity and the ones responsible for inherited disease.",
      def_cn: "把一个物种的基因组与另一个物种的摆在一起 —— 人类对其他灵长类 —— 找出哪些差异是它独有的。同一个比较既定位「定义人之为人」的那些改变，也定位导致遗传病的那些改变。" }
  ]
};
