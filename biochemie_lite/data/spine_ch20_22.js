/* Spines for chapters 20, 21 and 22 — 速通简洁版.

   These are the biosynthesis chapters, and the trap in them is reciting pathways. A
   spine step is a CLAIM, not a station on a map: why the Calvin cycle has to be
   switched on at all, why nitrogen fixation costs what it costs, why the purine ring
   is built onto the sugar instead of attached afterwards. The step lists live in the
   full app; what is here is the argument that makes them rememberable.

   House rules, all seven of them, are in biochemie_lite/SPINE_SPEC.md. The two that
   this file was written against hardest:
     - introduce every noun where you first use it, in the same breath;
     - every structural claim gets its consequence («这些东西一般有啥用？»).

   `beyond: true` marks something standard and examinable that is NOT on the pages the
   node cites. Flagged, never passed off as read off the page. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ L-20-2-1 */
window.BIOLITE_SPINE["L-20-2-1"] = {
  assumed: ["ATP", "ADP", "NAD+", "NADH", "NADP+", "NADPH", "photon", "electron transfer",
            "oxidation", "reduction", "membrane", "protein", "enzyme", "mitochondrion",
            "chloroplast", "CO2", "O2"],
  nodeTitle_en: "The light reactions — what is inside the boxes",
  nodeTitle_cn: "光反应——那些盒子里到底装着什么",
  title_en: "Where light stops being energy and becomes chemistry, and the four counting problems that follow",
  title_cn: "光在哪一步不再是能量、变成了化学，以及由此产生的四个「数目对不上」的问题",
  steps: [
    {
      en: "A thylakoid is the flattened internal membrane sac of a chloroplast, and photosynthesis happens on it. It is packed with chlorophyll, the green pigment that absorbs the light, at roughly two hundred chlorophyll molecules for every one place where chemistry actually happens. **Two of those two hundred do the chemistry; the other hundred and ninety-eight only absorb.** Everything in this node follows from asking what makes those two different.",
      cn: "**类囊体（thylakoid）**是叶绿体内部那一摞扁平膜囊，光合作用就发生在它上面。膜上塞满了**叶绿素（chlorophyll）**，就是负责吸光的那种绿色色素——大约**每两百个叶绿素分子，才对应一个真正发生化学反应的位点**。**这两百个里只有两个在做化学，其余一百九十八个只负责吸光。** 这个节点里所有内容，都是从「那两个到底哪里不一样」这个问题推出来的。",
      src: "A p.707, §20.2"
    },
    {
      link_en: "so what makes two of them different? Nothing chemical — geometry",
      link_cn: "那这两个哪里不一样？化学上完全一样，不一样的是几何位置",
      en: "Two chlorophylls at the centre are held close enough to share bonding orbitals, so when light excites them they behave as one compound rather than as two neighbouring molecules. **That pair is called the special pair.** An electron in it is lifted to a higher-energy orbital and handed to an acceptor molecule waiting alongside; the acceptor goes negative and the pair is left one electron short, as a positively charged radical. **This one event is where light stops being energy and becomes a separated charge, and every later step of photosynthesis is bookkeeping on it.**",
      cn: "中央那**两个叶绿素**被固定得足够近，近到可以**共用成键轨道**——所以被光激发时，它们的行为像**一个化合物**，而不像两个挨在一起的分子。**这一对就叫 special pair（特殊对）。** 它里面的一个电子被抬到高能轨道上，然后交给旁边等着的一个受体分子；受体带上负电，这一对则少了一个电子，变成带正电的自由基。**光正是在这一步不再是能量、变成了被分开的电荷——后面整个光合作用都只是在给这一次事件记账。**",
      src: "A p.707",
      see: [{ id: "9-11", en: "the primary photochemical act, named", cn: "初级光化学作用（捷克层给了名字）" }]
    },
    {
      link_en: "and the other hundred and ninety-eight?",
      link_cn: "那另外一百九十八个呢？",
      en: "They form an antenna, which is a collector: an excited chlorophyll passes its **energy** to a neighbour, exciting that one and dropping back itself, and the hop repeats from molecule to molecule until the excitation reaches the special pair. **The travelling packet of excitation energy is called an exciton, and what travels is energy alone — no electron moves and no charge moves.** The special pair plus the carriers immediately around it is called a reaction center. **The two-hundred-to-one ratio is the design consequence: an energy hop is fast and cheap, an electron transfer is slow and expensive, so the cell builds many collectors feeding one converter.**",
      cn: "它们组成**天线（antenna）**，也就是一套收集装置：一个被激发的叶绿素把**能量**传给邻居，邻居被激发、自己落回基态，这一跳在分子之间一路重复，直到激发传到 special pair。**这个在分子间跑动的激发能量包叫 exciton（激子）；跑的只有能量——没有电子在动，也没有电荷在动。** special pair 连同紧挨着它的那几个载体，合起来叫**反应中心（reaction center）**。**二百比一这个比例就是设计上的必然结果：能量跳跃又快又便宜，电子转移又慢又贵，所以细胞造很多个收集器，供养一个转换器。**",
      src: "A p.707, figure 20-10",
      see: [{ id: "9-11", en: "antenna and reaction centre, the Czech parts list", cn: "天线与反应中心（捷克层的部件表）" }]
    },
    {
      link_en: "one reaction center is a whole photosynthetic machine — in bacteria",
      link_cn: "一个反应中心就足以构成一台完整的光合机器——在细菌里",
      en: "A photosynthetic bacterium carries one reaction center, and there are two kinds of it. Purple bacteria run the pheophytin-quinone kind at a special pair called P870, where pheophytin is chlorophyll a with its central Mg2+ taken out; their electrons go out through pheophytin and a quinone to a proton-pumping cytochrome complex and come back to P870. **That path is closed, so it reduces nothing: the sole product is a proton gradient across the membrane, and hence ATP.** Green sulfur bacteria run the Fe-S kind at P840, which can run the same closed loop or run linear — out to ferredoxin, an iron-sulfur electron carrier protein, and on to NAD+, with the electron that left P840 replaced by oxidising H2S to elemental sulfur.",
      cn: "一个光合细菌只有一个反应中心，而反应中心分成两类。紫细菌用的是去镁叶绿素-醌型（pheophytin-quinone），特殊对叫 P870；**pheophytin（去镁叶绿素）就是把中心 Mg²⁺ 拿掉的叶绿素 a**。它的电子经 pheophytin、一个醌，交给一个会泵质子的细胞色素复合体，再绕回 P870。**这条路是闭合的，所以它什么也还原不了：唯一的产物是跨膜的质子梯度，以及由此得到的 ATP。** 绿硫细菌用的是 Fe-S 型，特殊对叫 P840；它既能走同样的闭环，也能走线性路线——出去交给铁氧还蛋白（ferredoxin），那是一种含铁硫簇的电子载体蛋白，再交给 NAD⁺；而 P840 失去的那个电子，靠把 H₂S 氧化成单质硫来补上。",
      src: "A p.707–708, figure 20-11"
    },
    {
      link_en: "a plant has both of them, wired in series",
      link_cn: "植物两类都有，而且是串联起来的",
      recall_en: "the two bacterial types from the step above, now in one membrane",
      recall_cn: "上一步那两类细菌反应中心，现在装在同一张膜上",
      en: "A plant thylakoid carries both kinds at once: photosystem II is the pheophytin-quinone kind with a special pair called P680, and photosystem I is the Fe-S kind with P700. The plant apparatus most likely arose by combining two simpler bacterial photosystems. **The zigzag drawn as the Z scheme is that combination seen edge-on — two bacterial machines in series.** Two numbers drop out of it instead of having to be memorised: **every electron is lifted twice, because neither bacterial center alone spans the gap from water up to NADP+; and eight photons are needed per O2 released, four at each photosystem.**",
      cn: "植物的类囊体上**两类同时存在**：**光系统 II（PSII）**是 pheophytin-醌型，特殊对叫 **P680**；**光系统 I（PSI）**是 Fe-S 型，特殊对叫 **P700**。植物的这套装置最可能是由**两套更简单的细菌光系统合并**而来的。**画成 Z 方案的那个之字形，就是这次合并的侧面图——两台细菌机器串联在一起。** 有两个数字因此变成推论，而不必硬背：**每个电子要被抬升两次**，因为单独一个细菌反应中心跨不过从水到 NADP⁺ 这么大的电位差；**每放出一个 O₂ 需要八个光子**，两个光系统各四个。",
      src: "A p.708–710, figure 20-12",
      see: [{ id: "9-13", en: "the Z scheme as the Czech layer states it", cn: "捷克层给出的 Z 方案" }]
    },
    {
      link_en: "inside PSII there is one structural oddity, and it is the one worth keeping",
      link_cn: "PSII 内部有一处结构上的怪事，而恰恰是这处值得记",
      en: "The core of PSII is a pair of proteins named D1 and D2. They are nearly mirror-symmetrical and each carries its own full set of electron carriers, yet electrons travel down only the D1 branch; the D2 branch is built, present and electronically silent. **The consequence is that all the wear falls on one subunit: D1 is the protein carrying the tyrosine through which every electron taken from water passes, it holds the site several herbicides bind to, and a plant has to keep synthesising fresh copies of it because it takes the photo-oxidative damage.** A machine with one live branch has one part that wears out.",
      cn: "PSII 的核心是**一对蛋白，叫 D1 和 D2**。它们几乎是镜像对称的，各自带着一整套电子载体，但电子只走 D1 那一条支路；D2 那条造出来了、存在着，电子学上却是哑的。 **后果是所有损耗都集中到一个亚基上：从水拿来的每一个电子都要经过 D1 上的一个酪氨酸残基；好几种除草剂的结合位点也在 D1 上；而植物必须不停地合成新的 D1，因为光氧化损伤全由它承担。** 只有一条支路带电的机器，就只有一个零件会磨坏。",
      src: "A p.710, figures 20-13, 20-14",
      beyond: true,
      beyondNote: "That D1 is the herbicide-binding subunit and is continuously resynthesised is standard and examinable; pp.710 give the one-branch asymmetry and the Tyr, not the turnover."
    },
    {
      link_en: "now follow one electron out of P680, and the first counting problem appears",
      link_cn: "现在跟着一个电子离开 P680，第一个「数目对不上」就出现了",
      en: "Two compartments have to be named first: the stroma is the soluble space of the chloroplast outside the thylakoid, and the lumen is the space enclosed inside it. Excited P680 gives an electron to pheophytin within picoseconds and is left as P680+. Pheophytin passes it to a plastoquinone — that is a small carrier soluble in the lipid of the membrane — named PQA and tightly bound, and PQA passes it to a second one, loosely bound, named PQB. **PQB does not leave until it has taken two electrons in two such transfers and picked up two protons from the stroma, becoming the fully reduced quinol PQBH2.** So the reaction center works one electron at a time while the mobile carrier works two at a time, and PQB is the converter between them. **Those two protons were taken from the stroma and will be let go into the lumen — which is how a carrier that merely diffuses ends up moving protons across a membrane.**",
      cn: "先把两个区室的名字定下来：基质（stroma）是叶绿体里类囊体外面那部分可溶空间，腔（lumen）是类囊体内部围起来的空间。被激发的 P680 在皮秒内把一个电子交给 pheophytin，自己变成 P680⁺。pheophytin 把电子交给一个紧密结合的质体醌（plastoquinone）PQ_A，那是一种小的脂溶性载体；PQ_A 再交给第二个、结合较松的 PQ_B。**PQ_B 要等到自己经两次这样的传递拿满两个电子、并从基质一侧抓来两个质子、变成完全还原的醇式 PQ_BH₂，才会离开。** 也就是说：反应中心一次只处理一个电子，而流动载体一次运两个——PQ_B 就是这两种「进制」之间的转换器。 **这两个质子是在基质一侧拿的，将在腔一侧放掉——一个只会扩散的载体，就是这样把质子搬过膜的。**",
      src: "A p.710"
    },
    {
      link_en: "PQBH2 carries the electrons to the machine that banks the energy",
      link_cn: "PQ_BH₂ 把电子送到真正把能量存下来的那台机器",
      recall_en: "the same trick as the respiratory chain, and for the same reason as the PQB step above",
      recall_cn: "和呼吸链是同一招，理由也和上一步 PQ_B 那里一样",
      en: "Cytochrome b6f is the complex sitting between the two photosystems, and it is the chloroplast's version of mitochondrial Complex III, the proton-pumping complex of the respiratory chain: same kind of b-type cytochrome, same Rieske iron-sulfur protein, same Q cycle, **up to four protons delivered into the lumen per pair of electrons.** It hands the electrons on to plastocyanin, which is a small soluble copper protein, and plastocyanin carries them one at a time to PSI. **Then a fact about volume that does real work: the lumen is a tiny flattened space, so a small number of protons shifts its pH a long way — stroma at pH 8 against lumen at pH 5 is a thousandfold difference in proton concentration. Part of the gradient is bought with geometry rather than with pumping.**",
      cn: "**细胞色素 b₆f（cytochrome b₆f）**是夹在两个光系统之间的复合体，它就是叶绿体版的**线粒体复合体 III**——呼吸链里那个泵质子的复合体：同样有 b 型细胞色素，同样有 **Rieske 铁硫蛋白**，同样跑 **Q 循环**，**每传递一对电子，最多有四个质子进入腔内。** 它把电子交给**质体蓝素（plastocyanin）**，一种小的可溶性含铜蛋白，由它一次一个地送去 PSI。**接着是一个真正起作用的体积事实：腔是一个非常小的扁平空间，所以少量质子就能把它的 pH 拉开很大——基质 pH 8 对腔 pH 5，是一千倍的质子浓度差。这段梯度有一部分是靠几何形状买来的，而不是靠泵出来的。**",
      src: "A p.712–713, figure 20-17",
      see: [{ id: "6-2-4-3", en: "the Q cycle in Complex III", cn: "复合体 III 的 Q 循环" }]
    },
    {
      link_en: "and at PSI the same act happens a second time",
      link_cn: "到了 PSI，同一个动作再来一遍",
      recall_en: "identical in form to the special-pair event at the top of this spine",
      recall_cn: "形式上和本条主线开头那次 special pair 事件完全相同",
      en: "Excited P700 hands an electron to A0, a chlorophyll a that does exactly the job pheophytin does in PSII, and P700+ pulls its replacement off plastocyanin. The electron then runs through phylloquinone, three 4Fe-4S clusters and ferredoxin to NADP+. **The reason for doing the whole thing twice is the size of the climb: water sits at a low enough potential that one photosystem can lift an electron off it, but only a second lift carries that electron high enough to reduce NADP+. That is the whole content of the zigzag.**",
      cn: "被激发的 P700 把一个电子交给 **A₀**，那是一个叶绿素 a，干的活和 PSII 里 pheophytin 完全一样；**P700⁺** 则从质体蓝素那里把缺的电子补回来。电子接着经**叶绿醌（phylloquinone）**、三个 **4Fe-4S 簇**和铁氧还蛋白，最后到 NADP⁺。**为什么整套动作要做两次？因为这段「爬升」太高：水的电位低到一个光系统就能把电子从它身上抬起来，但只有第二次抬升才能把电子送到足以还原 NADP⁺ 的高度。这就是那个之字形的全部内容。**",
      src: "A p.711, figures 20-15, 20-16"
    },
    {
      link_en: "the second lift can also be spent a different way, and that turns out to be a dial",
      link_cn: "第二次抬升也可以花在别处，而这恰好构成一个可调的旋钮",
      en: "Some electrons arriving at ferredoxin turn back — through plastoquinone, cytochrome b6f and plastocyanin to P700 — instead of continuing to NADP+. That loop yields no NADPH and no O2, but it still drives proton pumping by cytochrome b6f, so it still makes ATP; it is called cyclic photophosphorylation. What it is for is a ratio. CO2 assimilation consumes ATP and NADPH at 3:2, and linear flow on its own does not deliver 3:2. **By partitioning electrons between the linear and cyclic paths a plant tunes what the light reactions produce to what the carbon reactions will spend, photon by photon.**",
      cn: "有一部分到达铁氧还蛋白的电子会折返——经质体醌、cytochrome b₆f、质体蓝素回到 P700——而不再往 NADP⁺ 去。这个环既不产 NADPH 也不产 O₂，但它照样驱动 cytochrome b₆f 泵质子，所以照样产 ATP；这叫**循环光合磷酸化（cyclic photophosphorylation）**。**它是干什么用的？为了一个比例。CO₂ 同化消耗 ATP 与 NADPH 的比例是 3:2，而单靠线性电子流给不出 3:2。** 靠调节电子在线性路线和循环路线之间的分配，植物把光反应「产什么」调到和碳反应「花什么」一致——而且是随光调的。",
      src: "A p.713",
      see: [
        { id: "L-20-4-1", en: "what the 3:2 is spent on — the carbon reactions", cn: "这 3:2 花在哪里——碳同化反应" },
        { id: "9-13", en: "cyclic versus linear flow, named", cn: "循环电子流与线性电子流（捷克层给了名字）" }
      ]
    },
    {
      link_en: "two photosystems in series create a problem the bacteria never had",
      link_cn: "两个光系统串联，带来了细菌从未有过的一个问题",
      en: "P700 is excited by longer-wavelength, lower-energy light than P680. Energy always migrates downhill between pigments, so if the two photosystems sat next to each other, excitons collected by PSII's antenna would drift into PSI and leave PSII chronically underexcited, which would stall a machine that only works in series. The plant's answer is spatial: PSII sits almost entirely in the tightly stacked granal thylakoid membranes, while PSI and ATP synthase sit in the unstacked stromal thylakoids, where they can reach ADP and NADP+ dissolved in the stroma. **This is what the stacking of chloroplast membranes is for — pressing the granal membranes together is how PSII is kept out of PSI's reach, and LHCII, the mobile light-harvesting antenna complex, is itself the adhesive holding those stacks together.**",
      cn: "**P700 被激发所需的光波长更长、能量更低**，低于 P680。色素之间的能量永远往低处流，所以两个光系统如果挨在一起，PSII 天线收到的激子会一路漂进 PSI，让 PSII 长期处于「吃不饱」的状态——而这台机器必须串联才能工作，一头饿着就停摆。**植物的解法是空间上的：PSII 几乎全部待在紧密堆叠的基粒（granal）类囊体膜上，而 PSI 和 ATP 合酶待在不堆叠的基质（stromal）类囊体上，那里才够得着溶在基质里的 ADP 和 NADP⁺。** 叶绿体的膜为什么要堆叠，答案就在这里——把基粒膜压在一起，正是让 PSII 待在 PSI 够不着的地方的办法；而 LHCII，也就是那个可移动的捕光天线复合体，本身就是把这些膜片粘住的胶。",
      src: "A p.713, figure 20-18"
    },
    {
      link_en: "separated in space, the two then have to be balanced — and there is a switch for it",
      link_cn: "空间上分开之后，还得让两边平衡——为此有一个开关",
      recall_en: "the plastoquinone pool from the PQB step, now doing a second job",
      recall_cn: "PQ_B 那一步里的质体醌池，在这里兼了第二份差事",
      en: "The plastoquinone pool sits physically between the two photosystems, so its redox state is exactly the quantity that reports which photosystem is running ahead. In intense or blue light PSII outruns PSI, PQH2 accumulates, and the accumulation activates a protein kinase — an enzyme whose job is to attach a phosphate group to a particular residue of a particular protein — which phosphorylates one critical Thr residue in LHCII. **Phosphorylated LHCII loses its grip on the appressed granal membrane, drifts to the stromal thylakoids, and starts feeding its excitons to PSI instead — which speeds up the oxidation of PQH2 and cancels the imbalance that produced the signal.** In shade, which is richer in red light, PSI outruns PSII, oxidised PQ accumulates and the phosphate is taken off again. **One phosphate on one threonine sets both the antenna distribution and whether flow is mainly linear or mainly cyclic.**",
      cn: "**质体醌池的位置正好在两个光系统之间**，所以它的氧化还原状态，恰恰就是「哪一边跑快了」这个量的直接读数。强光或蓝光下 PSII 跑过 PSI，**PQH₂ 积累起来**，这个积累激活一个蛋白激酶，把 **LHCII 上一个关键 Thr 残基磷酸化**。**磷酸化的 LHCII 抓不住紧贴的基粒膜了，漂到基质类囊体上去，改把激子喂给 PSI——于是 PQH₂ 被氧化得更快，产生这个信号的失衡自己被抵消掉。** 而在遮荫处（红光更多），PSI 跑过 PSII，**氧化型 PQ 积累**，磷酸基又被去掉。**一个苏氨酸上的一个磷酸基，同时决定了天线怎么分配、以及电子流以线性为主还是以循环为主。**",
      src: "A p.713, figure 20-19"
    },
    {
      link_en: "and when photons arrive faster than either path can spend them",
      link_cn: "而当光子来得比两条路线花得掉的还快时",
      en: "Carotenoids are the orange and yellow accessory pigments carried inside LHCII. When light is intense enough that PSII and PSI together cannot make ATP and NADPH as fast as photons arrive, carotenoids absorb the excitons and quench the excited chlorophyll before it can react. **What that prevents is chemistry, not waste: an excited chlorophyll with nowhere to send its energy can hand it to O2 and generate reactive oxygen species — and O2 is precisely what PSII is busy producing.** A saturated photosystem is dangerous in the same way a blocked respiratory chain is. **The trigger for the switch into the quenching state is a falling lumen pH, which is what a lumen whose protons are not being spent looks like; the detailed mechanism of the switch is not known.**",
      cn: "**类胡萝卜素（carotenoid）**是 LHCII 里携带的那些橙黄色辅助色素。当光强到 PSII 和 PSI 加在一起也来不及把 ATP 和 NADPH 造出来、跟不上光子到达速度时，类胡萝卜素就吸走激子，在被激发的叶绿素反应之前把它**淬灭（quench）**。**它拦下的是一场化学反应，而不只是浪费：一个激发态叶绿素若无处可送能量，就可能把能量交给 O₂，生成活性氧（ROS）——而 O₂ 恰恰是 PSII 自己正在大量产生的东西。** 一个饱和的光系统，其危险性和一条被堵住的呼吸链是同一类。**切换到淬灭状态的触发信号是腔内 pH 下降——「质子没被花掉」的腔就是这个样子；至于这个切换的详细机制，目前并不清楚。**",
      src: "A p.713",
      see: [{ id: "9-8", en: "carotenoids as accessory pigments", cn: "作为辅助色素的类胡萝卜素" }]
    },
    {
      link_en: "one thing is still unfinished: P680+ is short an electron, and the source is water",
      link_cn: "还有一件事没了结：P680⁺ 还缺一个电子，而补给来源是水",
      en: "P680+ has to be given an electron back before it can absorb another photon, and the donor is water. Two obstacles stand in the way and they are different obstacles. **The first is energy: a single photon of visible light does not carry enough to break a bond in water, so four photons are required for the cleavage.** The second is counting: oxidising two water molecules to one O2 releases four electrons in one act, and P680+ accepts only one at a time. So what the cell needs is a device that converts four separate one-electron events into one four-electron event. **Framed that way, the structure that follows is the only design that could work.**",
      cn: "P680⁺ 必须先把电子补回来，才能再吸收下一个光子，而供体是水。挡在中间的有两个障碍，而且是两个不同性质的障碍。 第一个是能量：可见光的单个光子没有足够能量去打断水中的化学键，所以这次裂解需要四个光子。 **第二个是数目：把两个水分子氧化成一个 O₂，一次要交出四个电子，而 P680⁺ 一次只收一个。** 所以细胞需要的是一台把四次单电子事件攒成一次四电子事件的装置。**这样一摆，接下来那个结构就不再是要背的一堆事实，而是唯一可行的设计。**",
      src: "A p.714–715",
      see: [{ id: "9-9", en: "the oxygen-evolving centre, named and left unexplained", cn: "放氧复合体（捷克层只给了名字）" }]
    },
    {
      link_en: "that device is a piece of inorganic chemistry bolted to the lumen face of PSII",
      link_cn: "这台装置是一块无机化学，挂在 PSII 面向腔的一侧",
      en: "The oxygen-evolving center is a cluster of four manganese ions, one calcium ion and five oxygens — written Mn4CaO5 — held on the lumen face of PSII by three peripheral proteins, and in the crystal structure it is shaped like a chair. It is charged up through Tyr_Z, a tyrosine residue in D1 that gives up a proton and an electron together, becomes an electrically neutral tyrosine radical, and takes both back by oxidising the cluster. **Each photon leaves the cluster one oxidising equivalent further oxidised; after four single-electron transfers it carries a charge of 4+, and only in that state does it take four electrons from two water molecules in a single act, release O2 and return to its starting charge. The cluster's job is to count to four.** It also acts as a proton pump without pumping: the four protons are simply released on the lumen side, so choosing which face of the membrane to do the chemistry on is the whole of the mechanism.",
      cn: "**放氧复合体（oxygen-evolving center, OEC）**是一个由四个锰离子、一个钙离子和五个氧组成的簇——写作 Mn₄CaO₅——由三个外周蛋白扶在 PSII 面向腔的那一面上；晶体结构里它长得像一把椅子。给它充电的是 Tyr_Z，D1 上的一个酪氨酸残基：它同时失去一个质子和一个电子，变成电中性的酪氨酸自由基，再通过氧化这个簇把两者都拿回来。**每来一个光子，簇就被多氧化一个当量；四次单电子转移之后，它带上 +4 的电荷——只有在这个状态下，它才能一次性从两个水分子拿走四个电子、放出 O₂ 并复位。这个簇的工作就是数到四。** 它同时还是一台不用泵的质子泵：那四个质子直接被放在腔的一侧，所以「在膜的哪一面做这个化学反应」就是它全部的泵送机制。",
      src: "A p.715, figure 20-20",
      openQuestion_en: "How the Mn4CaO5 cluster actually breaks the bonds in water is not settled — the structure has produced several testable hypotheses and no accepted mechanism. Describe the counting; do not narrate the bond chemistry.",
      openQuestion_cn: "Mn₄CaO₅ 簇究竟如何打断水中的键，并没有定论——结构给出了几个可检验的假说，但没有公认机制。答题时讲「攒四个电子」这件事，不要把逐个成键断键的过程当成已知来讲。"
    }
  ],
  terms: [
    { en: "special pair", cn: "特殊对",
      def_en: "Two chlorophylls at the heart of a reaction center, held close enough to share bonding orbitals so that light excites them as a single compound. Excitation promotes one electron, which is passed to an acceptor, leaving a positively charged radical — the charge separation on which all of photosynthesis rests. P680 in PSII, P700 in PSI, P870 in purple bacteria, P840 in green sulfur bacteria.",
      def_cn: "反应中心核心处的两个叶绿素，靠得足够近以共用成键轨道，因此被光当作一个化合物来激发。激发把一个电子抬高、交给受体，留下一个带正电的自由基——这次电荷分离是整个光合作用的地基。PSII 里是 P680，PSI 里是 P700，紫细菌是 P870，绿硫细菌是 P840。" },
    { en: "exciton", cn: "激子",
      def_en: "The packet of excitation energy that hops from antenna pigment to antenna pigment until it reaches a special pair. Energy moves; no electron and no charge moves. This is why an antenna can be two hundred molecules deep with no redox chemistry in it at all.",
      def_cn: "在天线色素之间一路跳跃、直到抵达 special pair 的那一份激发能量。移动的是能量，没有电子、也没有电荷在移动。正因如此，一套两百个分子厚的天线内部可以完全不发生任何氧化还原化学。" },
    { en: "type I and type II reaction centers", cn: "I 型与 II 型反应中心",
      def_en: "The two kinds of photosynthetic reaction center: a pheophytin-quinone kind (purple bacteria at P870, and PSII at P680) and an Fe-S kind (green sulfur bacteria at P840, and PSI at P700). A bacterium has one; a plant has both in series, which is what the Z scheme is, and why an electron is lifted twice and eight photons are spent per O2.",
      def_cn: "光合反应中心的两大类：去镁叶绿素-醌型（紫细菌的 P870，以及 PSII 的 P680）和 Fe-S 型（绿硫细菌的 P840，以及 PSI 的 P700）。细菌只有一类，植物两类串联——这就是 Z 方案，也是每个电子要被抬两次、每个 O₂ 要花八个光子的原因。" },
    { en: "PQA and PQB", cn: "PQ_A 与 PQ_B",
      def_en: "The two plastoquinones of PSII and the place where the bookkeeping changes base. PQA is tightly bound and takes one electron at a time from pheophytin; PQB is loosely bound and leaves only after collecting two electrons plus two protons from the stroma. A one-electron reaction center therefore feeds a two-electron mobile carrier, and the two protons crossing to the lumen are what makes the diffusing quinol a proton carrier.",
      def_cn: "PSII 的两个质体醌，也是「记账进制」发生改变的地方。PQ_A 结合紧密，一次从 pheophytin 接一个电子；PQ_B 结合松散，要攒满两个电子外加从基质取来的两个质子才离开。于是一个单电子的反应中心供养一个双电子的流动载体，而那两个质子跨到腔一侧，正是让扩散的醇式醌变成质子搬运工的原因。" },
    { en: "cytochrome b6f", cn: "细胞色素 b₆f",
      def_en: "The proton-pumping complex between the two photosystems, the chloroplast counterpart of mitochondrial Complex III: a b-type cytochrome, a Rieske iron-sulfur protein, cytochrome f, and a Q cycle, delivering up to four protons into the lumen per electron pair. It converts a two-electron lipid-soluble carrier (plastoquinol) into a one-electron soluble one (plastocyanin).",
      def_cn: "夹在两个光系统之间的泵质子复合体，是线粒体复合体 III 在叶绿体里的对应物：一个 b 型细胞色素、一个 Rieske 铁硫蛋白、细胞色素 f，跑 Q 循环，每对电子最多送四个质子进腔。它把一个双电子的脂溶性载体（质体醌醇）转换成一个单电子的可溶载体（质体蓝素）。" },
    { en: "cyclic electron flow", cn: "循环电子流",
      def_en: "Electrons leaving ferredoxin returning through plastoquinone, cytochrome b6f and plastocyanin to P700 instead of reducing NADP+. No NADPH and no O2 are made, but protons are still pumped, so ATP is. Its purpose is quantitative: CO2 assimilation needs ATP and NADPH at 3:2, which linear flow alone does not supply.",
      def_cn: "离开铁氧还蛋白的电子经质体醌、cytochrome b₆f、质体蓝素折回 P700，而不去还原 NADP⁺。不产 NADPH、不产 O₂，但质子照泵，所以 ATP 照产。它的用途是定量的：CO₂ 同化需要 ATP 与 NADPH 之比为 3:2，而单靠线性流给不出这个比例。" },
    { en: "state transition", cn: "状态转换",
      def_en: "The rebalancing switch between the two photosystems. Accumulated plastoquinol activates a kinase that phosphorylates a Thr in LHCII; phosphorylated LHCII leaves the appressed granal membrane for the stromal thylakoids and feeds PSI instead of PSII. The plastoquinone pool works as the sensor because it sits physically between the two photosystems.",
      def_cn: "两个光系统之间的再平衡开关。积累的质体醌醇激活一个激酶，把 LHCII 上一个 Thr 磷酸化；磷酸化的 LHCII 离开紧贴的基粒膜、前往基质类囊体，改喂 PSI 而不再喂 PSII。质体醌池之所以能当传感器，是因为它的位置正好在两个光系统之间。" },
    { en: "oxygen-evolving center / Mn4CaO5", cn: "放氧复合体 / Mn₄CaO₅ 簇",
      def_en: "A chair-shaped inorganic cluster of four Mn ions, one Ca ion and five oxygens on the lumen face of PSII, held by three peripheral proteins. It exists to fix an arithmetic mismatch: P680+ accepts one electron at a time, oxidising two waters to O2 releases four at once, and no single visible photon can break a bond in water. The cluster accumulates one oxidising equivalent per photon through the Tyr_Z radical in D1 until it reaches 4+, then takes four electrons from two waters in one act. The four protons go into the lumen, so it is a proton pump that pumps nothing.",
      def_cn: "PSII 面向腔一侧的一个椅形无机簇：四个 Mn 离子、一个 Ca 离子、五个氧，由三个外周蛋白扶住。它的存在是为了修一个算术上的不匹配：P680⁺ 一次只收一个电子，把两个水氧化成 O₂ 一次要交出四个，而单个可见光光子又打不断水里的键。这个簇通过 D1 上的 Tyr_Z 自由基，每来一个光子就多攒一个氧化当量，直到 +4，然后一次性从两个水分子取走四个电子。四个质子被放进腔里，所以它是一台什么都不泵的质子泵。" },
    { en: "granal and stromal thylakoids", cn: "基粒类囊体与基质类囊体",
      def_en: "The two membrane regions of a chloroplast, and the reason the membranes stack at all. PSII sits in the tightly appressed granal stacks; PSI and ATP synthase sit in the unstacked stromal thylakoids where stromal ADP and NADP+ are reachable. Since PSI is excited by lower-energy light, contiguity would let excitons run downhill out of PSII, so appression is a functional separation. LHCII is the glue that holds the stacks together.",
      def_cn: "叶绿体膜的两个区域，也是这些膜为什么要堆叠的原因。PSII 待在紧密贴合的基粒堆里；PSI 和 ATP 合酶待在不堆叠的基质类囊体上，那里够得着基质中的 ADP 和 NADP⁺。由于 PSI 被更低能量的光激发，两者若相邻，激子就会从 PSII 顺坡流走，所以「贴合堆叠」是一种功能性的隔离。把这些膜片粘在一起的胶正是 LHCII。" }
  ]
};

/* ------------------------------------------------------------------ L-20-3-1 */
window.BIOLITE_SPINE["L-20-3-1"] = {
  assumed: ["ATP", "ADP", "Pi", "NADH", "proton", "pH", "mitochondrion", "chloroplast",
            "cytosol", "plasma membrane", "DNA", "enzyme", "membrane", "protein",
            "O2", "CO2", "ubiquinone", "cytochrome c", "lactate", "pyruvate"],
  nodeTitle_en: "Chloroplast ATP synthase",
  nodeTitle_cn: "叶绿体的 ATP 合酶",
  title_en: "Same machine, three compartments: how an apparent reversal turns out to be a naming problem",
  title_cn: "同一台机器，三个区室：那个「看起来装反了」的朝向，其实是命名问题",
  steps: [
    {
      en: "Photophosphorylation is ATP synthesis driven by light in a chloroplast; oxidative phosphorylation is ATP synthesis driven by the oxidation of fuel in a mitochondrion. **Everything upstream of the proton gradient differs between them — photons instead of NADH, plastoquinone instead of ubiquinone, plastocyanin instead of cytochrome c, water instead of a nutrient as the electron source. Everything downstream of the proton gradient is the same machine.** That boundary is the claim this whole node defends, and stating where it falls is most of the answer.",
      cn: "**光合磷酸化（photophosphorylation）**是叶绿体里由光驱动的 ATP 合成；**氧化磷酸化（oxidative phosphorylation）**是线粒体里由燃料氧化驱动的 ATP 合成。**在「质子梯度」这一点以前，两者处处不同**——光子代替 NADH，质体醌代替泛醌，质体蓝素代替细胞色素 c，电子来源是水而不是营养物。**在质子梯度这一点以后，两者是同一台机器。** 这条**分界线**就是整个节点要论证的主张；能说清它划在哪里，答案就已经完成了大半。",
      src: "A p.716, §20.3"
    },
    {
      link_en: "first, where the gradient comes from, because it needs no pump",
      link_cn: "先说这个梯度是怎么来的——因为它根本不需要泵",
      en: "The electron carriers between PSII and PSI are held in the thylakoid membrane facing a fixed way round, which is what asymmetric orientation means. **A carrier that always picks its protons up on one face of the membrane and always lets them go on the other moves protons across that membrane every time an electron passes through it.** So light-driven electron flow produces a net movement of protons out of the stroma, which is the soluble space of the chloroplast around the thylakoid, and into the lumen, which is the space enclosed inside the thylakoid. **A pump with no moving parts is just a redox carrier bolted in with a consistent orientation, and this is exactly the trick the inner mitochondrial membrane uses.**",
      cn: "PSII 与 PSI 之间的那些电子载体，在类囊体膜上都是**朝着固定的一个方向安装的**——这就是「**不对称取向（asymmetric orientation）**」的意思。**一个总是在基质面取质子、总是在腔面放质子的载体，每传一次电子，就把质子搬过膜一次。** 于是光驱动的电子流的净结果，就是质子从基质进入腔。**所谓「没有活动部件的泵」，不过是一个被以一致朝向装进膜里的氧化还原载体——线粒体内膜用的正是同一招。**",
      src: "A p.716, figure 20-21"
    },
    {
      link_en: "now the observation that makes students doubt the claim",
      link_cn: "接下来是那个让人怀疑上述主张的观察",
      en: "Under an electron microscope the ATP synthase complexes of a thylakoid appear as knobs projecting **outward**, into the stroma, while in a mitochondrion they project **inward**, into the matrix. **And the pumping runs the other way too: a mitochondrion pumps protons out of the matrix, a chloroplast pumps them into the thylakoid lumen.** Read as anatomy, that is a reversal — the thylakoid looks like a mitochondrion turned inside out. **That reading is what has to be dismantled, and dismantling it is worth more marks than reciting the structure.**",
      cn: "在电子显微镜下，类囊体上的 ATP 合酶复合体是**朝外**（朝基质）伸出的小球；而线粒体上的是**朝内**（朝基质腔 matrix）伸出的。**泵的方向看起来也是反的：线粒体把质子泵出 matrix，叶绿体把质子泵进类囊体腔。** 按解剖学来读，这就是一次「反转」——类囊体像是被翻过来的线粒体。**要拆掉的正是这种读法；拆掉它比把结构背出来更值分。**",
      src: "A p.717",
      see: [{ id: "9-14", en: "the Czech layer calls the thylakoid an inverted mitochondrion", cn: "捷克层把类囊体称作「反过来的线粒体」" }]
    },
    {
      link_en: "the whole reversal disappears if the two faces are named by proton concentration",
      link_cn: "只要改用「质子浓度」来给膜的两面命名，这个反转就消失了",
      en: "Name the two faces of an energy-transducing membrane this way: the P side is the face protons are pumped to — high proton concentration, low pH, more positive; the N side is the face they are pumped from — low proton concentration, higher pH. The naming says nothing about which face anatomy calls inside. **In a mitochondrion the intermembrane space is P and the matrix is N; in a chloroplast the thylakoid lumen is P and the stroma is N. In both, F1 — the knob where the chemistry happens — sits on the N side, and protons flow P to N through F0, the pore in the membrane. Nothing is reversed except which face happens to have been called inside.**",
      cn: "给一层**能量转换膜**的两面这样命名：P 侧（positive）是质子被泵「到」的那一面——质子浓度高、pH 低、电位偏正；N 侧（negative）是质子被泵「离开」的那一面——质子浓度低、pH 高。 这套命名完全不涉及解剖学上哪一面叫「里面」。**线粒体：膜间隙是 P 侧，matrix 是 N 侧；叶绿体：类囊体腔是 P 侧，基质是 N 侧。两种情形里，做化学反应的那个小球 F₁ 都长在 N 侧，质子都是经膜上的孔道 F₀ 从 P 侧流向 N 侧。反过来的只有「哪一面碰巧被叫做里面」。**",
      src: "A p.717, figure 20-22"
    },
    {
      link_en: "and one observation settles it, because a product cannot appear on the wrong side",
      link_cn: "有一个观察可以一锤定音——产物不可能出现在错的那一侧",
      recall_en: "the P/N naming from the step above, used as a test rather than as a definition",
      recall_cn: "把上一步的 P/N 命名当成一个检验来用，而不只是当定义",
      en: "ATP is made in the mitochondrial matrix, in the chloroplast stroma, and in the bacterial cytosol. Those three compartments are all N sides. **If the chloroplast enzyme really ran backwards, its product would appear in the thylakoid lumen, and it does not.** Bacteria state the case most cleanly of the three: a bacterium pumps protons out of the cell, so the outside of the cell is the P side, F1 hangs in the cytosol, and ATP appears there.",
      cn: "ATP 造在**线粒体 matrix**、叶绿体基质、细菌胞质里。这三个区室全都是 N 侧。 **如果叶绿体那台酶真的是反着跑的，它的产物就该出现在类囊体腔里——而并没有。** 三者之中细菌把这件事说得最干净：细菌把质子泵出细胞，所以胞外是 P 侧，F₁ 挂在胞质里，ATP 也就出现在胞质里。",
      src: "A p.717, figure 20-22"
    },
    {
      link_en: "the parts are not merely alike; the word used for them is stronger than that",
      link_cn: "这些部件不只是「像」——书上用的词比「像」强",
      en: "The chloroplast enzyme has two components: CF0 and CF1, where the C marks the compartment. CF0 is a transmembrane proton pore built from several integral membrane proteins and is **homologous** to mitochondrial F0; CF1 is a peripheral complex very similar to mitochondrial F1 in subunit composition, structure and function. Homologous is a claim about descent rather than about resemblance: it says the two proteins came from one ancestral protein. **Keep the halves apart when answering, because they do different jobs: CF0 is the road the protons take through the membrane, CF1 is where ADP and Pi are joined, on the N side.**",
      cn: "叶绿体的这台酶有两个组分：CF₀ 与 CF₁，其中 C 只是标出它所在的区室。**CF₀ 是由若干整合膜蛋白构成的跨膜质子孔道，与线粒体 F₀ 同源（homologous）**；CF₁ 是外周复合体，在亚基组成、结构和功能上都与线粒体 F₁ 十分相似。「同源」是关于来源的断言，其分量强于「长得像」：它是说这两个蛋白来自同一个祖先蛋白。 **答题时把两半分开讲，因为它们干的活不同：CF₀ 是质子穿膜走的路，CF₁ 是把 ADP 和 Pi 接起来的地方，位于 N 侧。**",
      src: "A p.717",
      see: [{ id: "9-14", en: "CF0 and CF1, named in the Czech layer", cn: "捷克层里的 CF₀ 与 CF₁" }]
    },
    {
      link_en: "the mechanism carries over unchanged, and it contains one correction worth saying out loud",
      link_cn: "机制原封不动地搬过来，而其中有一处更正值得明确说出来",
      en: "Rotational catalysis engages each of the three beta subunits of CF1 in turn, in three states: ADP plus Pi binding, ATP synthesis, ATP release. Each subunit passes through all three per revolution, which is why this enzyme is one rotary motor rather than three independent active sites. **The correction: on the enzyme surface ADP and Pi condense into ATP readily, so forming that bond costs little. The expensive step is letting go — the enzyme binds the finished ATP very tightly, and the proton-motive force is spent prising it off.** So the gradient pays for releasing ATP, and hardly at all for making it.",
      cn: "**旋转催化（rotational catalysis）**让 CF₁ 的三个 β 亚基轮流经过三种状态：结合 ADP 与 Pi、合成 ATP、释放 ATP。每转一圈，每个亚基都走完这三种状态——这正是它是一台旋转马达、而三个活性位点并不各自独立的原因。**这里有一处更正：在酶表面上，ADP 与 Pi 很容易缩合成 ATP，形成那根键几乎不花钱。贵的那一步是「松手」——酶把做好的 ATP 抓得极紧，质子动力势花在把它撬下来。** 所以梯度买的是「把 ATP 放开」，几乎不用买「造出 ATP」。",
      src: "A p.717",
      see: [{ id: "6-2-4-5", en: "the binding-change mechanism in mitochondria", cn: "线粒体里的结合变化机制" }]
    },
    {
      link_en: "does the gradient actually carry enough energy? Follow the numbers as one chain",
      link_cn: "这个梯度真的够用吗？把数字串成一条链看",
      en: "Per four electrons — that is, per O2 formed — about 12 protons cross from stroma into lumen: **4 released into the lumen by the oxygen-evolving center that splits water, and up to 8 delivered by cytochrome b6f, which is the proton-pumping complex between the two photosystems.** The result is a thousandfold H+ difference, a pH difference of 3. At about −17 kJ per mole of protons, twelve moles bank roughly 200 kJ, against 30.5 kJ needed per mole of ATP. **Three ATP costs about 92 kJ, so the mechanism has room to spare — and the size of that margin is itself evidence that this is how it is done.**",
      cn: "每传四个电子（也就是每形成一个 O₂），约有 12 个质子从基质进入腔：**其中 4 个是劈水的放氧复合体直接放进腔里的，最多 8 个由 cytochrome b₆f 送进去**——那是夹在两个光系统之间、负责泵质子的复合体。结果是跨膜 1000 倍的 H⁺ 浓度差，即 ΔpH = 3。**按每摩尔质子约 −17 kJ 计，12 摩尔存下约 200 kJ；而每合成 1 摩尔 ATP 需要 30.5 kJ。** 三个 ATP 约需 92 kJ，所以账面很宽裕——而这个「宽裕」本身就是「机制确实如此」的一个证据。",
      src: "A p.716"
    },
    {
      link_en: "one genuine difference from mitochondria hides inside that number",
      link_cn: "上面那个数字里，藏着与线粒体的一处真正差别",
      en: "A proton gradient has two components: a difference in proton concentration, which is the pH term, and a difference in electrical charge across the membrane, which is the electrical term. In a chloroplast the pH term carries nearly all of the energy, because other ions move across the thylakoid membrane to follow the protons and cancel most of the charge difference. **The practical consequence is that a chloroplast can afford an enormous pH difference where a mitochondrion cannot, and this is why the thylakoid lumen goes down to pH 5 while the mitochondrial gradient leans much more on voltage.**",
      cn: "一个质子梯度有两个分量：质子浓度差（pH 项）和跨膜电荷差（电位项 Δψ）。在叶绿体里，能量几乎全部由 pH 项承担，因为**其他离子会跟着质子穿过类囊体膜，把大部分电荷差抵消掉（counterion movement）**。**实际后果是：叶绿体能承受一个巨大的 pH 差，而线粒体不能——这就是类囊体腔能酸到 pH 5、而线粒体那边的梯度更多靠电位撑着的原因。**",
      src: "A p.716",
      beyond: true,
      beyondNote: "p.716 states that counterion movement dissipates most of the electrical potential in chloroplasts; the explicit contrast with how much the mitochondrial gradient leans on the electrical term is carried in from chapter 19 and is not on these pages."
    },
    {
      link_en: "and the whole chain has been measured, not only calculated",
      link_cn: "而且这条链是被实测过的，不只是算出来的",
      en: "Direct measurement gives about **8 photons** absorbed per O2 produced and about **3 ATP** made per O2. **Quote the measurement rather than deriving the number, because a derivation depends on how many protons this enzyme spends per ATP and the measurement does not.**",
      cn: "实测结果：每产生一个 O₂ 约吸收 8 个光子，约生成 3 个 ATP。 **答题时引用这个实测值，不要现推——推导要依赖这台酶「几个质子换一个 ATP」，而实测不依赖它。**",
      src: "A p.716, p.719 summary"
    },
    {
      link_en: "the same enzyme in three compartments raises a question about where it came from",
      link_cn: "同一台酶出现在三个区室里，这就引出一个「它从哪来」的问题",
      en: "Oxygenic photosynthesis, which is photosynthesis that releases O2, appeared about **2.5 billion years ago**, on a planet whose atmosphere was methane, CO2 and N2, with essentially no molecular oxygen and no ozone layer to block solar ultraviolet. **Two consequences run in opposite directions, and that is why the event mattered so much: on the supply side it made a nearly limitless reducing agent — water — available for building organic compounds; on the consumption side it eventually allowed mechanisms to evolve that use O2 as the final electron acceptor in respiration.** The waste product of one process became the terminal oxidant of the other, so there was no aerobic respiration to have until photosynthesis put O2 into the air.",
      cn: "产氧光合作用，也就是会放出 O₂ 的那种光合作用，出现在约 25 亿年前；当时大气是甲烷、CO₂ 和 N₂，**几乎没有分子氧，也没有臭氧层**来挡住太阳紫外线。**由此产生的两个后果方向相反，这正是这件事分量如此之重的原因：在「供给端」，它让一种近乎无限的还原剂——水——可以被用来制造有机物；在「消耗端」，它最终使得「以 O₂ 作为呼吸链末端电子受体」的机制得以演化出来。** 一个过程的废物成了另一个过程的末端氧化剂——在光合作用把 O₂ 放进大气之前，根本不存在有氧呼吸这回事。",
      src: "A p.717–718"
    },
    {
      link_en: "and one organism alive today shows the two processes have not fully separated",
      link_cn: "而今天还活着的一类生物，显示这两个过程根本没有完全分开",
      en: "A cyanobacterium makes ATP by oxidative phosphorylation **or** by photophosphorylation, having neither mitochondria nor chloroplasts: both sets of machinery sit in one convoluted plasma membrane. **Three components serve both processes at once. Cytochrome b6f carries electrons from plastoquinone in photosynthesis and from ubiquinone in respiration, doing the job mitochondrial cytochrome bc1 does. Cytochrome c6, which is homologous to mitochondrial cytochrome c, carries electrons between respiratory complexes and also from cytochrome b6f to PSI, which is plastocyanin's job in a plant. And the ATP synthase is shared outright.** One organism, one membrane, two processes, three shared parts — convergence does not produce that.",
      cn: "蓝细菌（cyanobacterium）既能靠氧化磷酸化、也能靠光合磷酸化造 ATP，而它既没有线粒体也没有叶绿体：两套机器都装在同一张高度折叠的质膜上。**有三个组分同时为两个过程服务。cytochrome b₆f：光合时从质体醌接电子，呼吸时从泛醌接电子，干的正是线粒体 cytochrome bc₁ 的活。cytochrome c₆：与线粒体细胞色素 c 同源，既在呼吸复合体之间运电子，也能把电子从 cytochrome b₆f 送到 PSI——那在植物里是质体蓝素的活。第三个就是 ATP 合酶本身，直接共用。** 一个生物、一张膜、两个过程、三个共用部件——趋同演化造不出这种局面。",
      src: "A p.718, figures 20-23, 20-24"
    },
    {
      link_en: "the same logic, applied to the electron donor, rewrites the equation of photosynthesis",
      link_cn: "同样的逻辑用在「电子供体」上，会把光合作用的方程改写一遍",
      en: "Many photosynthetic bacteria are obligate anaerobes, meaning O2 kills them, so they must use a donor other than water: green sulfur bacteria use hydrogen sulfide and deposit elemental sulfur where a plant would release O2, and others use organic compounds such as lactate and form pyruvate. **Written out separately these look like three different reactions; written generally they are one — 2 H2D + CO2 → (CH2O) + H2O + 2 D, where H2D is whatever donates the electrons and hydrogens and D is its oxidised form.** The first photosynthetic bacteria most likely used H2S, so water is the late and hardest donor rather than the original one, and the general equation is a record of which donors were tried.",
      cn: "许多光合细菌是专性厌氧菌——意思是 O₂ 会杀死它们——所以它们必须用水以外的供体：**绿硫细菌用硫化氢，在植物放出 O₂ 的地方析出单质硫**；另一些用乳酸之类的有机物，产物是丙酮酸。**分开写，这像是三个不同的反应；写成通式，它们是同一个反应：2 H₂D + CO₂ → (CH₂O) + H₂O + 2 D，其中 H₂D 是任何一种提供电子和氢的物质，D 是它的氧化形式。** 最早的光合细菌很可能用的是 H₂S，所以水是最晚被采用、也最难对付的那个供体，而不是原初的那个——这条通式其实是一份「试过哪些供体」的记录。",
      src: "A p.717–718",
      see: [{ id: "9-2", en: "the general equation as the Czech layer gives it", cn: "捷克层给出的光合作用通式" }]
    },
    {
      link_en: "last, notice how differently the two evolutionary claims are stated",
      link_cn: "最后，注意这两个演化主张的语气差得有多远",
      en: "The ATP synthases of bacteria, cyanobacteria, mitochondria and chloroplasts are said flatly to share a common evolutionary precursor and a common enzymatic mechanism. The endosymbiotic origin of the chloroplast — one cell taking up another and keeping it — is called a widely accepted **hypothesis**. **Reproduce that difference in strength, because it tracks the difference in evidence: for the enzyme there are structures, subunit compositions and a shared mechanism to compare side by side, while endosymbiosis rests on a set of consistent observations — chloroplasts carry their own DNA and protein-synthesising machinery, they arise only by division of existing chloroplasts, and cyanobacterial light capture, electron flow and ATP synthesis all resemble a chloroplast's.**",
      cn: "「细菌、蓝细菌、线粒体、叶绿体的 ATP 合酶**共享同一个演化前体和同一套酶学机制**」——这句话是**直陈**的。而「叶绿体起源于**内共生（endosymbiosis）**」——即一个细胞吞进另一个细胞并把它留下来——被称为一个**广为接受的假说（hypothesis）**。**答题时把这个语气差别照搬过去，因为它对应着证据强度的差别：对这台酶，有结构、有亚基组成、有共同机制可以逐项对照；而内共生依靠的是一组彼此相容的观察——叶绿体带有自己的 DNA 和蛋白质合成机器，它只能由已有的叶绿体分裂而来，而蓝细菌的捕光、电子传递和 ATP 合成又都与叶绿体相像。**",
      src: "A p.718–719"
    }
  ],
  terms: [
    { en: "P side and N side", cn: "P 侧与 N 侧",
      def_en: "A way of naming the two faces of an energy-transducing membrane by proton concentration instead of by anatomy. Protons are pumped **to** the positive face and **from** the negative one. It exists because inside and outside mislead: mitochondria pump protons out with F1 facing in, chloroplasts pump into the thylakoid lumen with CF1 facing out, and that looks like a reversal. In every case F1 sits on the more alkaline face, protons flow from the crowded face to the empty one through F0, and ATP appears in the matrix, the stroma or the bacterial cytosol — all of them the same kind of face.",
      def_cn: "一套按质子浓度、而不是按解剖学来给能量转换膜两面命名的办法：质子被泵「到」的那一面为正，被泵「离开」的那一面为负。它之所以存在，是因为「里/外」会骗人：线粒体把质子泵出去而 F₁ 朝里，叶绿体把质子泵进类囊体腔而 CF₁ 朝外，看上去正好相反。事实上每一种情形里 F₁ 都长在偏碱的那一面，质子都是从拥挤的一面经 F₀ 流向空的一面，而 ATP 都出现在 matrix、基质或细菌胞质——它们是同一类面。" },
    { en: "CF0 and CF1", cn: "CF₀ 与 CF₁",
      def_en: "The two components of the chloroplast ATP synthase, the C marking its compartment. One of them is a transmembrane proton pore of several integral membrane proteins, homologous to the mitochondrial pore; the other is a peripheral complex very similar to its mitochondrial counterpart in subunit composition, structure and function, sitting on the stromal face — which is why electron microscopy shows knobs projecting outward from a thylakoid.",
      def_cn: "叶绿体 ATP 合酶的两个组分，C 只标出它所在的区室。其一是由若干整合膜蛋白构成的跨膜质子孔道，与线粒体那个孔道同源；其二是外周复合体，在亚基组成、结构和功能上都与线粒体的对应物极为相似，位于基质那一面——这正是电镜下看到小球从类囊体朝外伸出的原因。" },
    { en: "rotational catalysis", cn: "旋转催化",
      def_en: "The mechanism the chloroplast enzyme uses unchanged from the mitochondrial one: three beta subunits cycled through binding of substrates, bond formation, and product release, each subunit passing through all three states per revolution. The correction worth making out loud is that forming the phosphoanhydride bond is cheap — substrates condense readily on the enzyme surface — and the proton-motive force is spent releasing the tightly bound product.",
      def_cn: "叶绿体那台酶原封不动地沿用线粒体的机制：三个 β 亚基轮流经过「结合底物—成键—释放产物」三种状态，每转一圈每个亚基走完全部三种。值得明确说出的更正是：形成那根磷酸酐键是便宜的——底物在酶表面上很容易缩合——质子动力势花在把抓得极紧的产物释放出来。" },
    { en: "the photophosphorylation numbers", cn: "光合磷酸化的那串数字",
      def_en: "About twelve protons cross per O2 formed: four released into the lumen by water splitting, up to eight delivered by cytochrome b6f. That gives a thousandfold H+ difference, a pH difference of 3, and at about −17 kJ per mole of protons banks roughly 200 kJ against the 30.5 kJ per mole an ATP costs. Measured yield is about eight photons and three ATP per O2. The margin between 200 and 92 kJ is itself an argument that the mechanism is adequate.",
      def_cn: "每形成一个 O₂ 约有十二个质子跨膜：四个由劈水直接放进腔里，最多八个由 cytochrome b₆f 送入。结果是 1000 倍的 H⁺ 浓度差、ΔpH = 3；按每摩尔质子约 −17 kJ 计，存下约 200 kJ，而每摩尔 ATP 需 30.5 kJ。实测每个 O₂ 约耗八个光子、得三个 ATP。200 kJ 对 92 kJ 的这段余量，本身就是「机制说得通」的论据。" },
    { en: "cytochrome c6", cn: "细胞色素 c₆",
      def_en: "A cyanobacterial electron carrier that does two jobs a eukaryote splits between two proteins: homologous to mitochondrial cytochrome c, it carries electrons between respiratory complexes, and it also carries them from cytochrome b6f to PSI, which is plastocyanin's role in a plant. One protein in one bacterial membrane doing what two proteins do in two different organelles is a large part of the common-origin argument.",
      def_cn: "蓝细菌的一种电子载体，一身兼任真核细胞交给两个蛋白去做的两份工作：它与线粒体细胞色素 c 同源，在呼吸复合体之间运电子；同时也能把电子从 cytochrome b₆f 送到 PSI——那在植物里是质体蓝素的活。一个蛋白在一张细菌膜上干了两个细胞器里两个蛋白的活，这构成了共同起源论证的很大一部分。" },
    { en: "the general equation of photosynthesis", cn: "光合作用的通式",
      def_en: "2 H2D + CO2 → (CH2O) + H2O + 2 D, where H2D donates the electrons and hydrogens and D is its oxidised form. H2D may be water, hydrogen sulfide, lactate or another organic compound, so plant and bacterial photosynthesis are one reaction with different donors — green sulfur bacteria deposit elemental sulfur where plants release O2. The first photosynthetic bacteria most likely used H2S, which makes water the hardest donor, adopted late.",
      def_cn: "2 H₂D + CO₂ → (CH₂O) + H₂O + 2 D，其中 H₂D 提供电子和氢，D 是它的氧化形式。H₂D 可以是水、硫化氢、乳酸或别的有机物，所以植物和细菌的光合作用是同一个反应、只是供体不同——绿硫细菌在植物放出 O₂ 的地方析出单质硫。最早的光合细菌很可能用 H₂S，因此水是最晚被采用、也最难对付的供体。" }
  ]
};

/* ------------------------------------------------------------------ L-20-4-1 */
window.BIOLITE_SPINE["L-20-4-1"] = {
  assumed: ["ATP", "ADP", "NADPH", "NADP+", "CO2", "O2", "enzyme", "substrate",
            "active site", "allosteric regulation", "phosphorylation", "disulfide bond",
            "lysine", "Mg2+", "pH", "chloroplast", "cytosol", "sucrose", "glycolysis",
            "Calvin cycle", "ribulose 1,5-bisphosphate", "glucose 6-phosphate",
            "fructose 1,6-bisphosphate", "triose phosphate", "haemoglobin"],
  nodeTitle_en: "Switching the Calvin cycle on",
  nodeTitle_cn: "把 Calvin 循环打开",
  title_en: "One question asked five ways: is the light on?",
  title_cn: "同一个问题，被问了五遍：光开着吗？",
  steps: [
    {
      en: "The Calvin cycle is the set of reactions that build sugar from CO2 in the chloroplast stroma, and it is reductive and expensive: it spends ATP and NADPH on every turn. **Running it in the dark would be doubly wrong — there is no ATP or NADPH to run it with, and the carbon it fixed would have to come out of the sugar the leaf made during the day.** So every regulatory device in this node is an answer to one question: is the light on? Hold that question and the mechanisms stop being a list.",
      cn: "Calvin 循环是叶绿体基质里用 CO₂ 造糖的那一整套反应，它是还原性的、而且很贵：每转一圈都要花掉 ATP 和 NADPH。**在黑暗里跑它是双重错误——既没有 ATP 和 NADPH 可用，而且它固定的碳还得从叶片白天造好的糖里掏出来。** 所以本节点里每一个调控装置，都是在回答同一个问题：光开着吗？ **抓住这个问题，那些机制就不再是一张清单。**",
      src: "A p.719, §20.4"
    },
    {
      link_en: "four devices are named, and two of them could not exist in an animal",
      link_cn: "书上列了四个装置，其中两个在动物身上根本不可能存在",
      en: "The four are: reduction of disulfide bonds by electrons flowing from photosystem I; the changes in pH and Mg2+ concentration that illumination produces; ordinary allosteric regulation by metabolic intermediates; and covalent modification by phosphorylation. **The last two are the mechanisms already familiar from glycolysis and glycogen metabolism. The first two exist only in an organelle that is being illuminated, and they are what this node is about.** A question about how the Calvin cycle is regulated is mostly a question about those two.",
      cn: "这四个是：**（1）来自光系统 I 的电子对二硫键的还原；（2）光照引起的 pH 与 Mg²⁺ 浓度变化；（3）代谢中间物的常规别构调节；（4）磷酸化这种共价修饰。** 后两个是糖酵解和糖原代谢里早就熟悉的机制。前两个只存在于「正在被光照的细胞器」里，也正是本节点要讲的。 所以「Calvin 循环怎么被调控」这个问题，问的主要是前两个。",
      src: "A p.719"
    },
    {
      link_en: "before the switches, two numbers that explain why a switch is worth building",
      link_cn: "在讲开关之前，先看两个数字——它们解释了「为什么值得造一个开关」",
      en: "Rubisco, the enzyme that attaches CO2 to ribulose 1,5-bisphosphate, is extraordinarily slow: at 25 °C **one rubisco molecule fixes only three CO2 per second.** Plants compensate with sheer quantity — about 250 mg/mL in the stroma, an active-site concentration near 4 mM, almost half of all soluble chloroplast protein, and probably the most abundant enzyme in the biosphere. **Read the two facts as one chain: slow enzyme, therefore enormous quantity, therefore an enormous investment of the plant's nitrogen in a single protein, therefore it is well worth switching that protein off whenever it cannot be used.** That chain is the reason the rest of this node exists.",
      cn: "rubisco 是把 CO₂ 接到 ribulose 1,5-bisphosphate 上的那个酶，它慢得离谱：25 °C 下**一个 rubisco 分子每秒只固定 3 个 CO₂**。植物的对策是堆数量——基质中约 250 mg/mL，活性位点浓度约 4 mM，占叶绿体可溶性蛋白将近一半，很可能是整个生物圈里最丰富的酶。 **这两个事实要当成一条因果链来读：酶慢，所以要造得极多；造得极多，就意味着植物把巨量的氮投在了一个蛋白上；投得这么重，就非常值得在它用不上的时候把它关掉。** 这条链就是本节点后面所有内容存在的理由。",
      src: "A p.720",
      see: [{ id: "9-17", en: "rubisco's mechanism and its first stable product", cn: "RubisCO 的机理与第一个稳定产物" }]
    },
    {
      link_en: "and the first surprise: this enzyme does not work as made",
      link_cn: "第一个意外：这个酶造出来是不能直接用的",
      en: "A rubisco molecule must be activated before it can catalyse anything. **A CO2 molecule reacts non-enzymatically with the amino group of a lysine in the active site, producing a carbamoyl-lysine — a lysine side chain carrying a carbamate group, Lys-NH-COO−.** That carbamate carries a negative charge, and the negative charge is what creates a binding site for Mg2+. Only the Mg2+ form of the enzyme is active. So activation is a covalent modification made by a small molecule that happens to be lying around in the stroma anyway.",
      cn: "一个 rubisco 分子必须先被激活，才能催化任何反应。**一个 CO₂ 分子会非酶促地与活性位点上一个赖氨酸的氨基反应，生成 carbamoyl-lysine（氨甲酰赖氨酸）**——也就是侧链上挂了一个氨甲酰基的赖氨酸，Lys-NH-COO⁻。 **这个氨甲酰基带负电，而正是这个负电荷造出了一个 Mg²⁺ 的结合位点。只有结合了 Mg²⁺ 的那种形式才有活性。** 所以这次激活是一次共价修饰，而做修饰的那个小分子，本来就在基质里到处都是。",
      src: "A p.721, figure 20-30"
    },
    {
      link_en: "which produces the most counterintuitive fact in the section",
      link_cn: "由此得出本节最反直觉的一点",
      recall_en: "the same chemistry appears in haemoglobin — CO2 carbamoylating a protein to change what it does",
      recall_cn: "同样的化学在血红蛋白那里出现过——CO₂ 通过氨甲酰化改变一个蛋白的行为",
      en: "**CO2 is rubisco's activator and rubisco's substrate at the same time, at two different sites, and they are two different CO2 molecules.** One is bonded to the lysine and never becomes sugar; the other is added to ribulose 1,5-bisphosphate and does. **Two things follow. Raising the CO2 concentration does more than supply substrate — it also raises the fraction of enzyme that is switched on, so the response to elevated CO2 is larger than a plain substrate-saturation argument predicts.** And because carbamoylation is a reaction of a free amino group, it goes faster in alkaline conditions — which is the hinge connecting this to the light-induced pH rise three steps below.",
      cn: "**CO₂ 同时是 rubisco 的激活剂和它的底物，作用在两个不同的位点上，而且是两个不同的 CO₂ 分子。** 一个接在赖氨酸上、永远不会变成糖；另一个被加到 ribulose 1,5-bisphosphate 上、会变成糖。**由此有两个推论。第一，提高 CO₂ 浓度不只是「多给底物」——它同时提高了处于开启状态的酶的比例，所以对高 CO₂ 的响应比单纯的底物饱和论证所预测的更大。** 第二，氨甲酰化是一个自由氨基参与的反应，因此在碱性条件下更快——这正是它与后面三步要讲的「光引起的 pH 上升」之间的铰链。",
      src: "A p.721",
      beyond: true,
      beyondNote: "The parallel with carbaminohaemoglobin — CO2 carbamoylating the N-terminal amino groups of haemoglobin and lowering its oxygen affinity — is chapter 5 material, carried in here because it is the same chemistry; pp.719-727 do not mention it."
    },
    {
      link_en: "and a second surprise that inverts what enzyme kinetics taught you",
      link_cn: "第二个意外，它把酶动力学教给你的直觉倒了过来",
      en: "Ribulose 1,5-bisphosphate — rubisco's own substrate — binds tightly to an uncarbamoylated active site and locks the enzyme in a closed conformation with the lysine out of reach. **What it inhibits is activation, and not catalysis.** An uncarbamoylated rubisco holding its substrate is a dead end: it cannot turn the substrate over because it was never switched on, and it cannot be switched on because the substrate is in the way. **The plant's answer is an enzyme whose entire job is to rescue another enzyme from its own substrate — rubisco activase promotes an ATP-dependent release of the bound ribulose 1,5-bisphosphate, freeing the lysine for CO2.** Note the cost: activating rubisco itself spends ATP, so it only makes sense while the light reactions are running.",
      cn: "**ribulose 1,5-bisphosphate——rubisco 自己的底物——会牢牢结合在尚未氨甲酰化的活性位点上，把酶锁在关闭构象里，让那个赖氨酸够不着。** 它抑制的是「激活」，而不是「催化」。 一个还没氨甲酰化、却已经抓着底物的 rubisco 就是死局：它没法把底物转化掉，因为它压根没被打开；它也没法被打开，因为底物挡在那儿。 **植物的解法是造一个酶，专门负责把另一个酶从它自己的底物手里救出来——rubisco activase 以耗 ATP 的方式促使已结合的 ribulose 1,5-bisphosphate 释放，把赖氨酸腾出来交给 CO₂。** 注意它的代价：激活 rubisco 本身就要花 ATP，所以这件事只在光反应正在运转时才划算。",
      src: "A p.721"
    },
    {
      link_en: "now the second device, and it needs no receptor at all",
      link_cn: "接下来是第二个装置，它完全不需要任何受体",
      en: "The stroma is the soluble space of the chloroplast; the thylakoid is the flattened membrane sac inside it, and the lumen is the space that sac encloses. Pumping protons out of the stroma into the thylakoid lumen does two things in one event: the first of them is the gradient that drives ATP synthase. The second is that the compartment the protons left turns alkaline: stromal pH rises from about 7 to about 8. Mg2+ flows the other way, out of the thylakoid into the stroma, as charge compensation — positive charge has to move back — taking stromal Mg2+ from 1–3 mM up to 3–6 mM. **Several stromal enzymes have simply evolved pH optima and Mg2+ requirements sitting exactly where the illuminated stroma sits. There is no receptor, no second messenger and no cascade: the signal is a by-product of the machinery doing its job, which makes it the cheapest signal a cell can have.**",
      cn: "把质子从基质泵进类囊体腔，这一个动作同时干了两件事。第一件是产生驱动 ATP 合酶的梯度。第二件是：质子离开的那个区室变碱了——基质 pH 从约 7 升到约 8。同时 Mg²⁺ 反向流动，从类囊体流进基质，作为电荷补偿（正电荷必须往回走一些），把基质 Mg²⁺ 从 1–3 mM 抬到 3–6 mM。 **好几个基质酶干脆把自己的 pH 最适值和 Mg²⁺ 需求，演化到正好落在「被光照的基质」所处的位置上。这里没有受体、没有第二信使、没有级联反应：信号本身就是机器干活时顺带产生的副产物——这是一个细胞能拥有的最便宜的信号。**",
      src: "A p.725"
    },
    {
      link_en: "two worked examples, and the second carries a number worth quoting",
      link_cn: "两个具体例子，第二个带着一个值得引用的数字",
      recall_en: "closes the loop opened three steps up, where carbamoylation was said to prefer alkaline conditions",
      recall_cn: "把上面第三步埋下的伏笔收回来——氨甲酰化偏好碱性条件",
      en: "The first example is rubisco. **The same event that supplies it with ATP and NADPH also raises the pH that speeds its carbamoylation and supplies the Mg2+ that completes its active site: three separate requirements met by one physical change.** The second is fructose 1,6-bisphosphatase, an enzyme of the cycle's regeneration arm which needs Mg2+ and is strongly pH-dependent. Illumination raises its activity more than a hundredfold: that is the return on one pH unit and a few millimolar of Mg2+. **An enormous gain for so small a physical change, and it is why the regeneration arm is essentially off in the dark and essentially on in the light.**",
      cn: "第一个例子就是 rubisco。**给它送来 ATP 和 NADPH 的那同一个事件，同时抬高了让它氨甲酰化更快的 pH，又送来了补全它活性位点的 Mg²⁺：一次物理变化，同时满足三项互不相干的需求。** 第二个例子是 fructose 1,6-bisphosphatase，循环再生臂上的一个酶，它需要 Mg²⁺ 而且对 pH 高度敏感。光照使基质 pH 与 Mg²⁺ 同时上升时，它的活性上升一百倍以上。 **一个 pH 单位加几毫摩尔，换来一百倍——对如此小的物理变化来说这是巨大的增益；这也正是再生臂在黑暗中基本关闭、在光下基本全开的原因。**",
      src: "A p.725, figure 20-36",
      see: [{ id: "9-19", en: "the two irreversible bisphosphatases in the full cycle", cn: "完整循环图里的两个不可逆二磷酸酶" }]
    },
    {
      link_en: "one transporter is easy to skim past, and it is doing two jobs at once",
      link_cn: "有一个转运体很容易被一眼扫过，而它一次干了两件事",
      en: "The inner chloroplast membrane is impermeable to most phosphorylated compounds, including fructose 6-phosphate, glucose 6-phosphate and fructose 1,6-bisphosphate. **That impermeability is what makes the stroma a separate metabolic compartment at all — the cycle's intermediates cannot leak into the cytosol.** What can cross is one specific antiporter, an exchanger that swaps one Pi for one triose phosphate — either dihydroxyacetone phosphate or 3-phosphoglycerate. Count what a single exchange achieves: carbon leaves for the cytosol, where it starts sucrose synthesis, and Pi enters the stroma, where photophosphorylation needs it. **Because the exchange is one-for-one, carbon cannot leave unless phosphate comes in — which is why a chloroplast exporting too little triose phosphate runs out of Pi and stalls.**",
      cn: "叶绿体内膜对大多数磷酸化化合物不通透，包括 fructose 6-phosphate、glucose 6-phosphate、fructose 1,6-bisphosphate。**正是这种不通透，才使基质成为一个独立的代谢区室——循环的中间物漏不进胞质。** 能跨膜的是一个专一的反向转运体（antiporter），它以 1 个 Pᵢ 换 1 个三碳糖磷酸——换出的是磷酸二羟丙酮或 3-磷酸甘油酸。数一数一次交换办成了什么：碳被送到胞质，在那里开始合成蔗糖；同时 Pᵢ 进入基质，而光合磷酸化正需要它。 **由于交换是一比一的，碳不进则磷不出、磷不入则碳不走——所以一个三碳糖磷酸输出太少的叶绿体会因为缺 Pᵢ 而停摆。**",
      src: "A p.724, figures 20-33, 20-34",
      see: [{ id: "L-20-6-1", en: "where the exported triose phosphate goes", cn: "输出的三碳糖磷酸去了哪里" }]
    },
    {
      link_en: "and now the most elegant device, because what it reads is not a concentration",
      link_cn: "接下来是最精巧的那个装置——因为它读的根本不是浓度",
      en: "Assimilating CO2 needs a lot of ATP and NADPH, and both rise in the stroma on illumination. **The plant does not measure either of them. It taps the electron stream itself.** Electrons flow from photosystem I to ferredoxin; an enzyme called ferredoxin:thioredoxin reductase passes them to thioredoxin, which is a small soluble protein carrying a disulfide bond; reduced thioredoxin then cleaves a critical disulfide bond in each target enzyme, and that reductive cleavage brings a conformational change which raises the enzyme's activity. **What is being sensed is the reduced state of ferredoxin, which exists only while PSI is turning over — so the targets are on while photons are arriving and off within seconds of their stopping, with no metabolite ever having to accumulate or decay.** It is the difference between reading a fuel gauge and reading the ignition.",
      cn: "同化 CO₂ 要花大量 ATP 和 NADPH，光照时这两者在基质里都会升高。而植物两个都不测量。它直接从电子流上接线。 电子从光系统 I 流到 ferredoxin（铁氧还蛋白）；一个叫 **ferredoxin:thioredoxin 还原酶**的酶把电子交给 thioredoxin（硫氧还蛋白），那是一个带二硫键的小可溶蛋白；还原态的 thioredoxin 再去把每个靶酶上的一个关键二硫键切开，而这次还原性断裂带来一次构象改变，使该酶活性上升。 **被感知的是 ferredoxin 的还原状态——只有在 PSI 正在周转时它才存在。于是靶酶在光子到达期间是开的，光子一停几秒内就关，全程不需要任何代谢物先积累起来或先降解掉。** 这相当于「看油表」和「看点火开关」的区别。",
      src: "A p.725–727, figure 20-37"
    },
    {
      link_en: "which enzymes get this switch is not arbitrary",
      link_cn: "这个开关装在哪几个酶上，并不是随便挑的",
      en: "Four Calvin cycle enzymes are activated this way. Three are named: ribulose 5-phosphate kinase, fructose 1,6-bisphosphatase and sedoheptulose 1,7-bisphosphatase. **The two bisphosphatases are the cycle's irreversible steps — hydrolysis is what makes the regeneration arm run one way only — and ribulose 5-phosphate kinase is the ATP-spending step that commits carbon to making the acceptor rubisco will use.** So the light switch has been placed on the irreversible, committing, energy-spending steps, which is where regulation is placed in every pathway in this course.",
      cn: "有**四个** Calvin 循环酶用这种方式被激活，书上点名了三个：ribulose 5-phosphate 激酶、fructose 1,6-bisphosphatase、sedoheptulose 1,7-bisphosphatase。 **两个二磷酸酶正是循环里不可逆的那两步——水解使再生臂只能单向运行；而 ribulose 5-phosphate 激酶是那个花 ATP、把碳投入「制造 rubisco 要用的受体」的承诺步骤。** 也就是说，光开关被装在了不可逆的、承诺性的、耗能的步骤上——这门课里每一条途径的调控点都装在这种位置。",
      src: "A p.725"
    },
    {
      link_en: "and the same switch, on one more enzyme, runs the other way",
      link_cn: "同一个开关装在另一个酶上，方向是反的",
      recall_en: "the same reduction as the step above, with the opposite effect",
      recall_cn: "和上一步是同一次还原，效果相反",
      en: "Glucose 6-phosphate dehydrogenase is the first enzyme of the oxidative pentose phosphate pathway, the route that makes NADPH by oxidising glucose 6-phosphate. **Reduction of a critical disulfide by electrons from ferredoxin inactivates it.** Think about what that buys. One pathway makes NADPH by oxidising sugar; the Calvin cycle spends NADPH to make sugar. Running both at once is a futile cycle that loses carbon every turn. **One redox relay resolves it without ambiguity: the reduction that switches the Calvin enzymes on switches the competing NADPH-producing enzyme off, and in daylight NADPH is coming from the light reactions anyway.**",
      cn: "glucose 6-phosphate 脱氢酶是氧化磷酸戊糖途径的第一个酶，那条途径靠氧化 glucose 6-phosphate 来生产 NADPH。**来自 ferredoxin 的电子把它的一个关键二硫键还原，结果是使它失活。** 想想这买到了什么：一条途径靠氧化糖来产 NADPH，而 Calvin 循环靠消耗 NADPH 来造糖。两者同时运行就是一个无效循环，每转一圈都白白损失碳。 **一条氧化还原中继线毫不含糊地解决了它：把 Calvin 循环那几个酶打开的那次还原，同时把竞争性的产 NADPH 的酶关掉；而在白天，NADPH 本来就由光反应源源不断地供着。**",
      src: "A p.726",
      see: [{ id: "7-7-1", en: "the oxidative pentose phosphate pathway itself", cn: "氧化磷酸戊糖途径本身" }]
    },
    {
      link_en: "collapse the whole thing into one sentence, then give it two numbers",
      link_cn: "把整节收成一句话，再给它配两个数字",
      en: "**Every device here answers the question is the light on, and each answers it by reading a different physical consequence of the light reactions running.** Rubisco reads CO2 through carbamoylation and Mg2+ through its active-site complex, both favoured by the alkaline stroma. Fructose 1,6-bisphosphatase reads pH and Mg2+ directly, and gains over a hundredfold. Four enzymes read the redox state of ferredoxin, the most immediate report of PSI turnover there is; glucose 6-phosphate dehydrogenase reads the same signal and does the opposite. The Pi antiporter enforces the accounting that ties carbon export to phosphate import. None of these is a receptor and none is a hormone — they are enzymes whose properties sit where the illuminated stroma sits. **And state the limit honestly: this explains what switches the cycle on and off, and says nothing about how fast it runs once on. That is set by rubisco's three per second, and by a competing reaction with O2.**",
      cn: "**这里的每一个装置都在回答「光开着吗」，而每一个都是通过读取「光反应正在运转」的某一个不同的物理后果来回答的。** rubisco 经氨甲酰化读 CO₂、经活性位点复合物读 Mg²⁺，而这两件事都被偏碱的基质所偏好。fructose 1,6-bisphosphatase 直接读 pH 和 Mg²⁺，增益一百倍以上。四个酶读 ferredoxin 的氧化还原态——那是关于「PSI 是否在周转」最直接的报告；glucose 6-phosphate 脱氢酶读同一个信号，作用相反。Pᵢ 反向转运体则强制执行「碳出必须磷入」这本账。这里没有一个是受体，也没有一个是激素——它们只是一些把自身性质安放在「被光照的基质」所处位置上的酶。 **也要老实说出边界：以上解释的是循环怎样被打开和关闭，完全没有说它开着的时候跑多快。那由 rubisco 每秒三个的速率，以及一个与 O₂ 竞争的反应决定。**",
      src: "A p.719–727",
      see: [{ id: "L-20-5-1", en: "the competing reaction with O2, and what plants do about it", cn: "与 O₂ 竞争的那个反应，以及植物的对策" }]
    }
  ],
  terms: [
    { en: "carbamoylation of rubisco", cn: "rubisco 的氨甲酰化",
      def_en: "The covalent activation step. A CO2 molecule reacts non-enzymatically with the amino group of an active-site lysine to give a carbamoyl-lysine, whose negative charge creates the Mg2+ site; only the Mg2+ complex works. So CO2 acts as both substrate and activator, at different sites and as different molecules — confusing the two makes everything downstream rote. Being a reaction of a free amino group, it goes faster in alkaline conditions, which is how it couples to the light-induced rise in stromal pH.",
      def_cn: "共价激活的那一步。一个 CO₂ 分子非酶促地与活性位点上赖氨酸的氨基反应，生成氨甲酰赖氨酸，其负电荷造出 Mg²⁺ 位点；只有结合了 Mg²⁺ 的复合物才有活性。所以 CO₂ 同时充当底物和激活剂，位点不同、分子也不同——混淆这两者会让后面的一切变成死记。由于它是自由氨基参与的反应，在碱性条件下更快，这正是它与光照引起的基质 pH 上升挂钩的方式。" },
    { en: "rubisco activase", cn: "rubisco 活化酶",
      def_en: "An ATP-dependent enzyme whose whole job is to rescue another enzyme from its own substrate. Ribulose 1,5-bisphosphate binds tightly to an uncarbamoylated active site and locks it in a closed conformation with the lysine unreachable, so the substrate inhibits activation rather than catalysis. This enzyme promotes ATP-dependent release of that bound substrate, exposing the lysine for CO2 and then Mg2+. Two consequences: switching rubisco on itself costs ATP, so it only pays while the light reactions run; and an ATPase existing solely to unblock an active site is unusual enough to be worth naming in an answer.",
      def_cn: "一个耗 ATP 的酶，全部职责就是把另一个酶从它自己的底物手里救出来。ribulose 1,5-bisphosphate 牢牢结合在尚未氨甲酰化的活性位点上，把酶锁在赖氨酸够不着的关闭构象里，因此底物抑制的是「激活」而非「催化」。这个酶以耗 ATP 的方式促使该底物释放，把赖氨酸让给 CO₂，再让 Mg²⁺ 结合。两个推论：打开 rubisco 本身要花 ATP，所以只在光反应运转时才划算；而一个专为疏通活性位点而存在的 ATP 酶，本身就罕见到值得在答案里点名。" },
    { en: "the light-induced stromal pH and Mg2+ shift", cn: "光照引起的基质 pH 与 Mg²⁺ 位移",
      def_en: "The signal with no receptor. Pumping protons out of the stroma into the thylakoid lumen makes the gradient that drives ATP synthase and, in the same act, leaves the stroma alkaline — pH about 7 to about 8. Mg2+ moves the other way as charge compensation, from 1–3 mM to 3–6 mM. Several stromal enzymes have pH optima and Mg2+ requirements placed exactly there, so illumination activates them with no signalling machinery at all: rubisco carbamoylation speeds up, and fructose 1,6-bisphosphatase gains more than a hundredfold.",
      def_cn: "一个没有受体的信号。把质子从基质泵入类囊体腔，既造出驱动 ATP 合酶的梯度，又在同一动作里让基质变碱——pH 由约 7 到约 8。Mg²⁺ 作为电荷补偿反向移动，由 1–3 mM 升到 3–6 mM。好几个基质酶的 pH 最适值和 Mg²⁺ 需求就落在这个位置上，于是光照不需要任何信号机器就把它们打开了：rubisco 的氨甲酰化加快，fructose 1,6-bisphosphatase 活性上升一百倍以上。" },
    { en: "the ferredoxin-thioredoxin system", cn: "ferredoxin–thioredoxin 系统",
      def_en: "The relay that turns light into enzyme activity. Electrons from photosystem I reach ferredoxin; ferredoxin:thioredoxin reductase passes them to thioredoxin, a small soluble disulfide-containing protein; reduced thioredoxin cleaves a critical disulfide in each target, and the reduction brings a conformational change that raises activity. What is sensed is the reduced state of ferredoxin, which exists only while PSI turns over — an ignition switch rather than a fuel gauge. Targets are on while photons arrive and off seconds after they stop.",
      def_cn: "把光变成酶活性的那条中继线。来自光系统 I 的电子到达 ferredoxin；ferredoxin:thioredoxin 还原酶把电子交给 thioredoxin，一个带二硫键的小可溶蛋白；还原态的 thioredoxin 切开每个靶酶上的一个关键二硫键，这次还原伴随构象改变、使活性上升。被感知的是 ferredoxin 的还原态——只有 PSI 在周转时才存在，所以这是点火开关而不是油表。光子到达时靶酶是开的，光子停下几秒后就关。" },
    { en: "glucose 6-phosphate dehydrogenase as the reverse case", cn: "glucose 6-phosphate 脱氢酶——同一开关的反向",
      def_en: "The first enzyme of the oxidative pentose phosphate pathway, and the reason the redox relay is a logic and not merely a mechanism. The same reduction by electrons from ferredoxin **inactivates** it. One pathway makes NADPH by oxidising sugar while the Calvin cycle spends NADPH to make sugar, so running both would be a futile cycle losing carbon every turn. In daylight the light reactions already supply NADPH, so the switch that turns the Calvin enzymes on turns the competitor off.",
      def_cn: "氧化磷酸戊糖途径的第一个酶，也是「这条氧化还原中继线是一套逻辑而不只是一个机制」的原因。来自 ferredoxin 的电子做的是同一次还原，效果却是使它失活。一条途径靠氧化糖产 NADPH，而 Calvin 循环靠消耗 NADPH 造糖，两者同时开就是每转一圈都损失碳的无效循环。白天 NADPH 本来就由光反应供应，所以打开 Calvin 那几个酶的开关，同时关掉了竞争者。" },
    { en: "the Pi / triose phosphate antiporter", cn: "Pᵢ／三碳糖磷酸反向转运体",
      def_en: "A one-for-one exchanger in the inner chloroplast membrane, which is otherwise impermeable to phosphorylated compounds — that impermeability is what makes the stroma a separate metabolic compartment. It swaps Pi for dihydroxyacetone phosphate or 3-phosphoglycerate, doing two jobs in one event: exporting carbon to the cytosol as the start of sucrose synthesis, and importing the Pi photophosphorylation needs. One-for-one means carbon cannot leave unless phosphate comes in, so a chloroplast exporting too little runs out of Pi.",
      def_cn: "叶绿体内膜上的一个一比一交换器；该膜对磷酸化化合物本来是不通透的——正是这种不通透使基质成为独立的代谢区室。它以 Pᵢ 换磷酸二羟丙酮或 3-磷酸甘油酸，一次交换办两件事：把碳输出到胞质、作为蔗糖合成的起点，同时把光合磷酸化所需的 Pᵢ 输进来。一比一意味着碳不出则磷不入，所以输出太少的叶绿体会缺 Pᵢ。" },
    { en: "rubisco's turnover number and abundance", cn: "rubisco 的周转数与丰度",
      def_en: "Two facts that explain each other. Three CO2 fixed per second per enzyme molecule at 25 °C is extraordinarily slow, so plants compensate with quantity: about 250 mg/mL in the stroma, active sites near 4 mM, almost half of all soluble chloroplast protein, probably the most abundant enzyme in the biosphere. The chain: slow, therefore abundant, therefore a huge nitrogen investment in one protein, therefore worth switching off when it cannot be used.",
      def_cn: "两个互相解释的事实。25 °C 下每个酶分子每秒只固定三个 CO₂，慢得离谱，所以植物靠数量补偿：基质中约 250 mg/mL，活性位点约 4 mM，占可溶性叶绿体蛋白将近一半，很可能是生物圈中最丰富的酶。这条链是：慢，所以多；多，所以在一个蛋白上压了巨量的氮；压得这么重，所以在它用不上时非常值得关掉。" }
  ]
};

/* ------------------------------------------------------------------ L-20-5-1 */
window.BIOLITE_SPINE["L-20-5-1"] = {
  assumed: ["ATP", "NADPH", "CO2", "O2", "enzyme", "substrate", "Km", "affinity",
            "mitochondrion", "chloroplast", "cytosol", "vacuole", "pH",
            "Calvin cycle", "malate", "oxaloacetate", "aspartate", "maize",
            "sugarcane", "crabgrass", "pineapple", "soybean", "wheat"],
  nodeTitle_en: "Photorespiration, C4 and CAM",
  nodeTitle_cn: "光呼吸、C-4 与 CAM",
  title_en: "One defect in one enzyme, three answers, and all three are priced in ATP",
  title_cn: "一个酶的一处缺陷，三种应对，而三种的价钱都用 ATP 结算",
  steps: [
    {
      en: "Rubisco is not specific for CO2. **It also accepts O2 at the same active site, and the product of that side reaction has to be salvaged by a pathway that consumes O2 and releases CO2 — which is why the whole business is called photorespiration.** The name is a trap: mitochondrial respiration conserves energy, and this conserves none. It inhibits net biomass formation. Everything else in this node is a response to that one defect.",
      cn: "rubisco 对 CO₂ 并不专一。 **它在同一个活性位点上也接受 O₂，而这个副反应的产物必须由一条回收途径处理掉；那条途径耗 O₂、放 CO₂——整件事因此被叫做「光呼吸（photorespiration）」。** 这个名字是个陷阱：线粒体的呼吸作用会保存能量，而光呼吸一点也不保存。它压低净生物量的形成。 本节点其余的一切，都是对这一处缺陷的应对。",
      src: "A p.729, §20.5",
      see: [{ id: "9-20", en: "the photorespiration pathway in full — three enzymes, three compartments", cn: "光呼吸的完整途径——三个酶、三个区室" }]
    },
    {
      link_en: "how much does it actually cost? The number is the reason the rest of the section exists",
      link_cn: "它到底损失多少？这个数字就是本节其余内容存在的理由",
      en: "Average United States yields are estimated to be reduced by 36 % for soybean and 20 % for wheat by the need to recycle the product of that side reaction. **Read those as agricultural statistics rather than biochemical ones: more than a third of a national soybean crop, lost to a side reaction of a single enzyme.** That is the scale that makes two whole alternative anatomies worth evolving.",
      cn: "据估计，美国大豆的平均产量因回收这个副反应产物而减少约 36%，小麦约 20%。 **把这两个数当农业统计来读，而不是当生化数据：全国三分之一以上的大豆产量，输给了一个酶的一个副反应。** 正是这个量级，才使得为它演化出两整套不同的解剖结构变得划算。",
      src: "A p.729"
    },
    {
      link_en: "and the defect gets worse exactly where plants most need it not to",
      link_cn: "而这处缺陷偏偏在植物最不希望它恶化的地方恶化",
      en: "As temperature rises, rubisco's affinity for CO2 falls, so the oxygenase side reaction takes a larger share. The obvious fix is more CO2, and the only way in is through the stomata, which are the adjustable pores in a leaf surface. Open stomata also let water vapour out. **So the real shape of the problem is this: in a hot dry place water is dearer than carbon, the stomata must stay as shut as possible, and CO2 still has to reach rubisco.** Both surviving answers are ways of delivering CO2 to rubisco without leaving the door open.",
      cn: "温度升高时，rubisco 对 CO₂ 的亲和力下降，于是那个加氧副反应占的份额更大。**显而易见的对策是提高 CO₂，而 CO₂ 唯一的入口是气孔（stomata）——叶片表面那些可开合的小孔。气孔一开，水蒸气也一起往外跑。** 所以问题真正的形状是这样的：在又热又干的地方，水比碳贵，气孔必须尽量关着，而 CO₂ 还得送到 rubisco 跟前。 **两种现存的解法，都是「不把门敞开也能把 CO₂ 送到」的办法。**",
      src: "A p.729–732"
    },
    {
      link_en: "both use the same trick, and it is one enzyme",
      link_cn: "两种解法用的是同一招，而这一招就是一个酶",
      en: "**PEP carboxylase attaches inorganic carbon to phosphoenolpyruvate — PEP, the three-carbon compound that sits one step before pyruvate in glycolysis — giving the four-carbon acid oxaloacetate, and it does this at concentrations far too low for rubisco to work at.** One detail explains part of that: **its substrate is bicarbonate, HCO3−, and not CO2 itself** — bicarbonate is the abundant form of inorganic carbon at the pH of a plant cell's cytosol. **The four-carbon acid is a carrier: fix carbon cheaply where it is dilute, move it, and let it go again next to rubisco where it is needed concentrated.** Both alternative pathways are built out of that one move.",
      cn: "**PEP 羧化酶（PEP carboxylase）把无机碳接到磷酸烯醇式丙酮酸上，生成四碳酸「草酰乙酸」，而且它在 rubisco 根本干不了活的低浓度下就能工作。** 有一个细节解释了其中一部分原因：**它的底物是碳酸氢根 HCO₃⁻，而不是 CO₂ 本身**——在植物细胞胞质的 pH 下，碳酸氢根才是无机碳的主要存在形式。**那个四碳酸是一个载体：在碳稀薄的地方廉价地把它固定下来，运走，再在 rubisco 旁边、需要高浓度的地方把它放出来。** 两条替代途径都是由这一个动作搭起来的。",
      src: "A p.730"
    },
    {
      link_en: "the first answer separates the two halves in space",
      link_cn: "第一种解法把这两半分在空间上",
      en: "In a C4 plant, PEP carboxylase works in the mesophyll cells at the leaf surface, and the malate or aspartate it produces travels into the bundle-sheath cells that ring the vein, where the carbon is released as CO2 right beside rubisco. **The route between the two cell layers is the plasmodesmata: protein-lined channels connecting adjacent plant cells, wide enough for metabolites and even small proteins.** Without them the two concentric cell layers would just be cells sitting next to each other; with them the pair is one pump with a delivery pipe. One consistent detail: bundle-sheath mitochondria hold very little of the glycine decarboxylase complex, an enzyme of the salvage pathway — the cells that receive concentrated CO2 are the ones least equipped to salvage, and least in need of it.",
      cn: "在 C-4 植物里，PEP 羧化酶在叶表附近的叶肉细胞（mesophyll cells）里工作，它生成的苹果酸或天冬氨酸被运进围着叶脉的维管束鞘细胞（bundle-sheath cells），碳在那里以 CO₂ 的形式、就在 rubisco 旁边被放出来。**两层细胞之间的通道叫胞间连丝（plasmodesmata）：那是连接相邻植物细胞的、内衬蛋白的孔道，宽到代谢物甚至小蛋白都能通过。** 没有它，那两层同心细胞不过是彼此挨着的细胞；有了它，这一对才是「一台泵加一根输送管」。 还有一个吻合的细节：**维管束鞘细胞的线粒体里，回收途径中的甘氨酸脱羧酶复合体含量非常低**——收到高浓度 CO₂ 的那些细胞，恰恰是最没有回收装备、也最不需要回收的。",
      src: "A p.730",
      see: [{ id: "9-22", en: "Kranz anatomy and the lower Km of PEP carboxylase", cn: "Kranz 解剖结构与 PEP 羧化酶更低的 Km" }]
    },
    {
      link_en: "and it is not free",
      link_cn: "而这不是白来的",
      en: "**Every CO2 assimilated through the C4 route requires a molecule of phosphoenolpyruvate to be regenerated, at the cost of two phosphoanhydride bonds of ATP.** So the bill per CO2 completely reduced is **5 ATP against a C3 plant's 3**, with 2 NADPH in both cases. None of those two extra ATP buys carbon. They buy the ability to keep the stomata shut.",
      cn: "**走 C-4 路线每同化一个 CO₂，就必须再生一分子磷酸烯醇式丙酮酸，代价是 ATP 上的两个磷酸酐键。** 于是每完全还原一个 CO₂ 的账单是：**C-4 用 5 个 ATP，C-3 用 3 个**，两者都用 2 个 NADPH。**多出来的那两个 ATP 一点碳也没买到。它们买的是「气孔可以关着」这件事。**",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "which means there is a temperature at which the trade flips",
      link_cn: "这也意味着存在一个「这笔买卖翻盘」的温度",
      recall_en: "the falling CO2 affinity from three steps up is what moves the balance",
      recall_cn: "上面第三步说的「亲和力随温度下降」正是让天平倾斜的东西",
      en: "Below about 28–30 °C, a C3 plant wins: photorespiration is tolerable and the extra ATP is not worth paying. **Above that, rubisco's falling CO2 affinity makes the oxygenase reaction expensive enough that eliminating it more than covers the surcharge, and the C4 plant wins.** The everyday version of this is a lawn in midsummer: crabgrass is a C4 plant and it outgrows most of the C3 grasses around it.",
      cn: "约 28–30 °C 以下，C-3 植物占优：光呼吸还忍得了，那两个额外的 ATP 不值得花。 **越过这个温度，rubisco 对 CO₂ 的亲和力下降，使加氧反应贵到「消除它所省下的」超过了那笔附加费——于是 C-4 植物占优。** 这件事的日常版本，就是盛夏的草坪：**马唐草是 C-4 植物，它长得比周围大多数 C-3 草都快。**",
      src: "A p.732"
    },
    {
      link_en: "the second answer separates the same two halves along a different axis",
      link_cn: "第二种解法把同样的两半分在另一个轴上",
      en: "Succulent plants — cactus, prickly pear, orchid, pineapple — live where it is very hot and very dry, and they separate the initial trapping of CO2 from its fixation by rubisco **over time** instead of over space. **That single sentence is the whole difference from the C4 pathway, and everything else follows mechanically: same PEP carboxylase doing the trapping, same rubisco doing the fixing, same malate as the carrier, and only the timetable changes.** When asked how C4 and CAM differ, give the dimension of separation — space against time. Where each plant lives is a consequence of that, and not the mechanism.",
      cn: "多肉植物——仙人掌、仙人掌果、兰花、菠萝——生活在极热极干的地方；它们把「先捕获 CO₂」和「rubisco 固定 CO₂」这两件事**分在时间上**，而不是分在空间上。**这一句话就是它与 C-4 的全部区别，其余一切都是机械地推出来的：还是那个 PEP 羧化酶负责捕获，还是 rubisco 负责固定，还是苹果酸做载体，改变的只有时间表。** 被问到 C-4 和 CAM 的区别时，答「分开的维度」——一个空间，一个时间。至于两者各自长在哪里，那是这个区别的结果，而机制在别处。",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "why at night, and the reason is physics rather than biochemistry",
      link_cn: "为什么选在夜里？理由是物理，不是生化",
      en: "**At night the stomata open and PEP carboxylase fixes CO2 into oxaloacetate.** The reason for that hour is the air: water leaves a leaf because the vapour concentration inside it is higher than outside, and cool moist night air is far closer to saturated than hot dry day air. **The same stomatal opening held for the same time therefore costs far less water at night — the plant opens its pores when the exchange rate between carbon and water is at its best.**",
      cn: "**夜里气孔打开，PEP 羧化酶把 CO₂ 固定成草酰乙酸。** 选在这个时辰的理由在空气：水之所以离开叶片，是因为叶内的水蒸气浓度高于叶外，而又凉又湿的夜间空气比又热又干的白天空气更接近饱和。**所以同样开度、同样时长的气孔，在夜里付出的水少得多——植物是在「碳与水的兑换率」最划算的时候开门。**",
      src: "A p.732"
    },
    {
      link_en: "and a whole night of fixed carbon has to be put somewhere that will not poison the cell",
      link_cn: "而一整夜固定下来的碳，得放在一个不会毒死细胞的地方",
      en: "The oxaloacetate is reduced to malate and stored in the vacuole, which is the large fluid-filled compartment of a plant cell. Storing it there is a requirement: a whole night's carbon is a great deal of malic acid, and the low pH its dissociation produces would damage the enzymes of the cytosol and the plastids. The vacuole is the compartment that can hold that much acid safely. **This is also where the name comes from — a CAM leaf is measurably acidic at dawn and much less so by evening, and crassulacean acid metabolism records exactly that daily acid swing. Remember the swing and the mechanism can be rebuilt from it: something makes acid at night from something in the air, and something takes it apart by day for a purpose that needs light.** The prefix is from the Crassulaceae, the stonecrops, where it was first found — not from the cacti.",
      cn: "草酰乙酸被还原成苹果酸，存进液泡（vacuole）——植物细胞里那个充满液体的大区室。存在那里是一个必需条件：一整夜的碳意味着大量苹果酸，而它解离产生的低 pH 会损伤胞质和质体里的酶。液泡是唯一能安全容纳这么多酸的区室。 **名字也是从这里来的——CAM 植物的叶片在黎明时可测地偏酸，到傍晚酸度大减；「景天酸代谢（crassulacean acid metabolism）」记录的正是这个每日的酸度摆动。记住这个摆动，机制就能被重建出来：夜里有什么东西用空气里的什么造出了酸，白天又有什么东西为了某个需要光的目的把它拆掉。** 前缀来自**景天科（Crassulaceae）**，最早在那里被发现——并非来自仙人掌。",
      src: "A p.732"
    },
    {
      link_en: "and the daytime half is where the point of the exercise becomes visible",
      link_cn: "白天那一半，才让整件事的意义显出来",
      en: "**By day the stomata close against the heat, and an enzyme called NADP-linked malic enzyme decarboxylates the stored malate, releasing the CO2 for rubisco and the Calvin cycle.** Look at what has been achieved: the plant photosynthesises in bright light with its pores shut. A C3 leaf sealed like that runs out of CO2 within minutes, and the rising ratio of O2 to CO2 drives rubisco straight into its oxygenase reaction. The overnight malate store is working as an internal CO2 cylinder. **Two consequences: photorespiration is suppressed for the same reason as in a C4 plant, because rubisco sits in a locally high CO2 concentration; and the day's photosynthesis is capped by how much malate the vacuole held at dawn, which is why CAM plants grow slowly.**",
      cn: "**白天气孔关闭以躲开高温，NADP 依赖的苹果酸酶把储存的苹果酸脱羧，把 CO₂ 放出来交给 rubisco 和 Calvin 循环。** 看看这实现了什么：这株植物在强光下、门却关着，照样在做光合作用。一片这样封死的 C-3 叶子几分钟内就会耗尽 CO₂，而升高的 O₂ 对 CO₂ 之比会把 rubisco 直接推进加氧反应。 那一夜的苹果酸库存，起的是体内 CO₂ 钢瓶的作用。**两个推论：光呼吸被压制的原因和 C-4 植物完全相同，都是因为 rubisco 处在局部高 CO₂ 之中；而这一天的光合总量，被黎明时液泡里存了多少苹果酸卡死——这就是 CAM 植物长得慢的原因。**",
      src: "A p.732"
    },
    {
      link_en: "line the three up and the section stops being three mechanisms",
      link_cn: "把三条并排放好，本节就不再是三个机制",
      recall_en: "the C4 price two steps back, now with the third pathway next to it",
      recall_cn: "把前面 C-4 的价钱拿过来，旁边再摆上第三条路",
      en: "Per CO2 completely reduced: C3 spends 3 ATP and 2 NADPH; C4 spends 5 and 2; CAM spends 6.5 and 2. CAM is the most expensive of the three, and it is the one that survives where nothing else does. **Read the ATP column as a price list for water, and the three stop being three levels of sophistication and become three points on one trade — carbon gained against water lost, with the climate deciding which point wins.**",
      cn: "每完全还原一个 CO₂：C-3 花 3 个 ATP + 2 个 NADPH；C-4 花 5 + 2；CAM 花 6.5 + 2。 CAM 是三者中最贵的，而它恰恰是在别的都活不下去的地方还活着的那一个。 **把 ATP 那一列当成「水的价目表」来读，这三条就不再是三个先进程度不同的档次，而是同一笔买卖上的三个点位——用得到的碳去换失掉的水，由气候决定哪个点位划算。**",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "one grouping is easy to misfile, and there is a one-word test that fixes it",
      link_cn: "有一组归类特别容易放错桶，而有一个只需一个词的判据能把它归对",
      en: "**Cactus, prickly pear, orchid and pineapple are CAM plants. Maize, sugarcane and crabgrass are C4 plants.** Succulents get grouped with C4 plants often enough to be worth guarding against, and the two really do share their chemistry — the same PEP carboxylase, the same four-carbon carrier, the same concentrating of CO2 around rubisco. The test that separates them is the clock: a C4 plant fixes no CO2 at night, and a CAM plant does nearly all of its fixing then. **So a sentence about CO2 being fixed at night is false of the C4 pathway and is the definition of CAM. The same sentence changes truth value depending on which pathway it is attached to, which is exactly why the two get confused.**",
      cn: "**仙人掌、仙人掌果、兰花、菠萝是 CAM 植物。玉米、甘蔗、马唐草是 C-4 植物。** 多肉植物常被误归到 C-4 那一栏，值得专门提防一下；而这两类确实共用同一套化学——同一个 PEP 羧化酶、同一种四碳载体、同样是在 rubisco 周围把 CO₂ 浓缩起来。把它们分开的判据是「时钟」：C-4 植物在夜间不固定任何 CO₂，而 CAM 植物几乎全部的固定都发生在夜间。 **所以「CO₂ 在夜间被固定」这句话，用来描述 C-4 是错的，用来描述 CAM 则正是定义。同一句话挂在哪条途径上，真假就翻转——这正是两者被混淆的原因。**",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "and the honest limit, because none of the three fixes the actual defect",
      link_cn: "最后是老实说的边界——三条路没有一条真正修好了那处缺陷",
      en: "**All three pathways work around rubisco's lack of specificity; none of them repairs it.** The inefficiency has inspired attempts to engineer a rubisco that does not react with O2, or one that simply works faster. **That goal is stated as not, as yet, within reach.**",
      cn: "**这三条途径都是在绕开 rubisco 的不专一，没有一条是在修它。** 这种低效促使人们尝试改造出一个不与 O₂ 反应的 rubisco，或者干脆一个更快的 rubisco。**书上对这个目标的说法是：目前尚未做到。**",
      src: "A p.729, box 20-1",
      openQuestion_en: "Whether a rubisco can be engineered that keeps its carboxylase activity without the oxygenase side reaction is unsettled; the trade-off between specificity and speed in this enzyme is itself an active question.",
      openQuestion_cn: "能否改造出一个保留羧化活性、却没有加氧副反应的 rubisco，目前没有定论；这个酶身上「专一性与速度之间是否必须取舍」本身就是一个尚未解决的问题。"
    }
  ],
  terms: [
    { en: "photorespiration", cn: "光呼吸",
      def_en: "The consequence of rubisco accepting O2 as well as CO2 at the same active site: the salvage of the resulting two-carbon product consumes O2 and releases CO2, hence the name. Unlike mitochondrial respiration it conserves no energy and inhibits net biomass formation. The cost is measurable — average United States soybean and wheat yields are estimated to be reduced by 36 % and 20 % by the need to recycle that product — and it worsens as temperature rises, because rubisco's affinity for CO2 falls.",
      def_cn: "rubisco 在同一活性位点上既接受 CO₂ 又接受 O₂ 所造成的后果：回收由此产生的二碳产物要耗 O₂、放 CO₂，名字由此而来。与线粒体呼吸不同，它不保存任何能量，还压低净生物量形成。代价是可以量化的——据估计，美国大豆与小麦的平均产量因回收该产物而分别减少约 36% 与 20%——而且随温度升高而恶化，因为 rubisco 对 CO₂ 的亲和力下降。" },
    { en: "PEP carboxylase and bicarbonate", cn: "PEP 羧化酶与碳酸氢根",
      def_en: "The enzyme both alternative pathways use to trap carbon before rubisco ever sees it, attaching inorganic carbon to phosphoenolpyruvate to give the four-carbon oxaloacetate. Its substrate is bicarbonate rather than CO2 — the abundant species of inorganic carbon at cytosolic pH — which is part of the chemistry behind the much lower Km that lets it work where rubisco cannot. Trap carbon cheaply where it is dilute, carry it as a four-carbon acid, release it concentrated next to rubisco.",
      def_cn: "两条替代途径都用它在 rubisco 见到碳之前先把碳捉住：把无机碳接到磷酸烯醇式丙酮酸上，生成四碳的草酰乙酸。它的底物是碳酸氢根而不是 CO₂——在胞质 pH 下无机碳的主要形式——这正是它那个远低于 rubisco 的 Km 背后的化学。在稀薄处廉价捕碳，以四碳酸为载体运送，再在 rubisco 旁边高浓度释放。" },
    { en: "spatial versus temporal separation", cn: "空间分离与时间分离",
      def_en: "The one sentence that distinguishes the two alternative pathways. Both pre-fix carbon with PEP carboxylase so that CO2 can be released in high local concentration around rubisco while the stomata stay nearly shut; they differ only in the dimension along which the pre-fixation is held apart from rubisco. C4 separates them in space — PEP carboxylase in mesophyll cells, rubisco in bundle-sheath cells. CAM separates them in time — PEP carboxylase at night, rubisco by day. Where each plant lives follows from that; it is not the mechanism.",
      def_cn: "区分两条替代途径的那一句话。两者都用 PEP 羧化酶预先固定碳，好让 CO₂ 能在气孔几乎关闭的情况下在 rubisco 周围高浓度释放；它们的差别只在于「预固定与 rubisco 被分开」的维度。C-4 分在空间上——PEP 羧化酶在叶肉细胞，rubisco 在维管束鞘细胞。CAM 分在时间上——PEP 羧化酶在夜里，rubisco 在白天。各自长在什么地方是由此推出的结果，而不是机制本身。" },
    { en: "why malate is stored in the vacuole", cn: "苹果酸为什么存进液泡",
      def_en: "A requirement rather than a detail. A whole night's fixed carbon accumulates as malic acid, and the low pH its dissociation produces would damage cytosolic and plastid enzymes; the vacuole is the compartment that can hold that much acid safely. It is also the origin of the word acid in the pathway's name — the leaf is measurably acidic at dawn and much less so by evening, an observation made long before anyone knew of PEP carboxylase.",
      def_cn: "这是必需条件，而非细节。一整夜固定下来的碳以苹果酸的形式积累，它解离产生的低 pH 会损伤胞质与质体中的酶；液泡是唯一能安全容纳这么多酸的区室。这也是途径名字里那个「酸」的来源——叶片在黎明时可测地偏酸、到傍晚酸度大减，这个观察远早于任何人知道 PEP 羧化酶。" },
    { en: "plasmodesmata", cn: "胞间连丝",
      def_en: "Protein-lined channels connecting two adjacent plant cells, wide enough to pass metabolites and even small proteins. In the C4 pathway they are what carries malate or aspartate from mesophyll cells into bundle-sheath cells. Without them the two concentric cell layers of Kranz anatomy would be nothing but neighbouring cells; with them the pair is a pump with a delivery pipe.",
      def_cn: "连接两个相邻植物细胞的、内衬蛋白的孔道，宽到足以通过代谢物甚至小蛋白。在 C-4 途径里，正是它把苹果酸或天冬氨酸从叶肉细胞送进维管束鞘细胞。没有它，Kranz 解剖里那两层同心细胞只是彼此相邻的细胞；有了它，这一对才成为「一台泵加一根输送管」。" },
    { en: "the price list of the three pathways", cn: "三条途径的价目表",
      def_en: "Per CO2 completely reduced: 3 ATP and 2 NADPH for C3, 5 and 2 for C4, 6.5 and 2 for CAM. The C4 surcharge is explicit — each CO2 assimilated requires phosphoenolpyruvate to be regenerated at the cost of two phosphoanhydride bonds. None of the extra ATP buys carbon; all of it buys the ability to keep the stomata shut. The C4 crossover sits at about 28–30 °C, above which eliminating the oxygenase reaction more than covers the surcharge.",
      def_cn: "每完全还原一个 CO₂：C-3 用 3 ATP + 2 NADPH，C-4 用 5 + 2，CAM 用 6.5 + 2。C-4 的附加费有明确出处——每同化一个 CO₂ 都要再生一分子磷酸烯醇式丙酮酸，代价是两个磷酸酐键。多出的 ATP 一点碳也没买到，买到的全是「气孔可以关着」。C-4 的翻盘点约在 28–30 °C，越过它，消除加氧反应所省下的就超过了这笔附加费。" }
  ]
};

/* ------------------------------------------------------------------ L-20-6-1 */
window.BIOLITE_SPINE["L-20-6-1"] = {
  assumed: ["ATP", "UTP", "ADP", "UDP", "Pi", "NADH", "glucose", "fructose",
            "glycogen", "starch", "cellulose", "sucrose", "cytosol", "chloroplast",
            "mitochondrion", "plasma membrane", "enzyme", "glycolysis",
            "gluconeogenesis", "citric acid cycle", "acetyl-CoA", "beta oxidation",
            "triacylglycerol", "fatty acid", "glycerol", "oxaloacetate", "pyruvate",
            "phosphoenolpyruvate", "isocitrate", "citrate", "succinate", "malate",
            "Calvin cycle", "peroxisome", "microtubule", "osmosis"],
  nodeTitle_en: "Starch, sucrose, cellulose — and the seed that lives on fat",
  nodeTitle_cn: "淀粉、蔗糖、纤维素——以及靠脂肪过活的那颗种子",
  title_en: "One chemistry asked where three times, and the nucleotide is the answer",
  title_cn: "同一套化学，把「在哪里做」问了三遍——而答案写在核苷酸上",
  steps: [
    {
      en: "A cell never adds free glucose to a growing polysaccharide — a polysaccharide being any long chain of sugar units, starch and cellulose among them. **It first attaches the sugar to a nucleotide: glucose bonded to a nucleoside diphosphate, which is what ADP-glucose and UDP-glucose are. An enzyme of the glycosyltransferase family — a transferase whose job is to move a sugar from a donor onto an acceptor — then hands that glucose to the non-reducing end of the chain, which is the end whose terminal sugar has no free anomeric carbon, and lets the nucleotide go.** That is the whole chemistry of this node, and it is the chemistry already used for glycogen. What changes between starch, sucrose and cellulose is where it happens.",
      cn: "细胞**从来不会**把游离的葡萄糖直接接到正在延长的多糖上。**它先把糖挂到一个核苷二磷酸上，做成 ADP-葡萄糖、UDP-葡萄糖这样的糖核苷酸（sugar nucleotide），再由一个糖基转移酶（glycosyltransferase）把这个葡萄糖交到链的非还原端上，同时把核苷二磷酸丢掉。** 这就是本节点全部的化学，而且它正是糖原合成用的那套化学。淀粉、蔗糖、纤维素之间变化的，只是「在哪里做」。",
      src: "A p.733, §20.6",
      see: [{ id: "7-12-1", en: "the same mechanism worked out for glycogen", cn: "同一套机制在糖原上的展开" }]
    },
    {
      link_en: "why bother activating it at all?",
      link_cn: "那为什么非要先「活化」一步？",
      en: "Forming a glycosidic bond releases almost no energy, so the reaction sits near equilibrium and runs either way; concentration alone would decide whether a cell builds its polymer or takes it apart. **Attaching the sugar to a nucleotide puts a high-energy phosphoanhydride bond onto it in advance — the same kind of bond that joins the phosphates of ATP — and breaking that bond during the transfer pushes the whole reaction one way.** Activation is not chemical decoration: it is how a reversible reaction is made irreversible, and irreversibility is the precondition for being able to regulate anything at all.",
      cn: "**形成一个糖苷键几乎不放能，所以这个反应处在平衡附近、两个方向都能走；单靠浓度就能决定细胞是在造多糖还是在拆多糖。** 把糖挂到核苷酸上，等于预先在它身上装了一根高能磷酸酐键；转移时这根键断掉，整个反应就被推成单向。 所以「活化」不是化学上的装饰：它是把一个可逆反应变成不可逆反应的手段，而不可逆正是「能被调控」的前提。",
      src: "A p.733"
    },
    {
      link_en: "first destination: starch, and it is glycogen with two substitutions",
      link_cn: "第一个去向：淀粉——它就是换了两个零件的糖原",
      en: "Starch is a polymer of glucose in α1→4 linkage, built inside plastids, which are the plant's double-membraned organelles: chloroplasts for the starch a leaf lives on overnight, and amyloplasts of seeds, roots and tubers for the starch a potato is. **ADP-glucose is made by condensing glucose 1-phosphate with ATP; starch synthase transfers residues to the non-reducing end; a branching enzyme puts in the α1→6 branches of amylopectin.** Line those three up against glycogen synthesis and only two things have changed: the donor, and the compartment the reaction sits in. The plastid also holds inorganic pyrophosphatase, which destroys the PPi released, so the activation step cannot run backwards — overall about −50 kJ/mol from glucose 1-phosphate. **The scale is worth one number: starch supplies more than 80 % of human dietary calories worldwide.**",
      cn: "淀粉是 α1→4 连接的葡萄糖聚合物，造在质体（plastid）内部——质体就是植物那类双层膜细胞器：叶绿体里的淀粉是叶片夜里赖以过活的，种子、根、块茎里的淀粉体（amyloplast）中的淀粉则是「一个土豆」。**ADP-葡萄糖由葡萄糖-1-磷酸与 ATP 缩合而成；淀粉合酶把残基加到非还原端；一个分支酶装上支链淀粉的 α1→6 分支。** 把这三步和糖原合成并排放，改变的只有供体和隔间。 质体里还有无机焦磷酸酶，把放出的 PPᵢ 就地毁掉，于是活化那一步回不去了——从葡萄糖-1-磷酸起算，总的 ΔG′° 约 −50 kJ/mol。**规模值得记一个数：淀粉提供了全世界人类膳食热量的 80% 以上。**",
      src: "A p.733"
    },
    {
      link_en: "and one absence in the plant cytosol turns out to be load-bearing",
      link_cn: "而植物胞质里缺的一个酶，后来成了承重结构",
      en: "**Inorganic pyrophosphatase is present in plant plastids and absent from the plant cytosol.** In most cells it is that enzyme's activity which makes every PPi-releasing biosynthetic reaction one-way. Take it away and cytosolic PPi sits at about 0.3 mM, high enough to keep reactions such as the one making UDP-glucose readily reversible in both directions. **Read it as a rule worth carrying out of the whole course: a reaction is not irreversible by nature, it is made irreversible by removing a product — and a compartment that declines to remove it has kept its options open.** Which option, exactly, comes out at the end of this node.",
      cn: "**无机焦磷酸酶（inorganic pyrophosphatase）在植物质体里有，在植物胞质里没有。** 在多数细胞里，正是这个酶的活性让每一个放出 PPᵢ 的生物合成反应变成单向的。把它拿走，胞质里的 PPᵢ 就维持在约 0.3 mM——高到足以让「生成 UDP-葡萄糖」这一类反应在两个方向上都能顺畅进行。 **这条值得当作整门课的一条通则带走：一个反应本身并不天然不可逆，它是靠「移走某个产物」才变得不可逆的——而一个不肯移走它的隔间，是特意给自己留了余地。** 具体留了哪一手，本节点最后会揭晓。",
      src: "A p.734"
    },
    {
      link_en: "so why two different nucleotides at all?",
      link_cn: "那为什么要用两种不同的核苷酸？",
      recall_en: "the plastid/cytosol split from the two steps above, now given its purpose",
      recall_cn: "上面两步里的「质体／胞质」之分，在这里被赋予了目的",
      en: "Starch is built from ADP-glucose inside the plastid; sucrose is built from UDP-glucose in the cytosol. **Two donors in two compartments means two separate pools, and two separate pools mean two independent knobs: the plant can make more starch without automatically making less sucrose.** If both routes drew on UDP-glucose they would compete for one pool and would have to move together. The choice of nucleotide is compartmentation written at the level of a molecule, and it is the answer to why the same sugar is carried on two different carriers.",
      cn: "淀粉用质体内的 ADP-葡萄糖造，蔗糖用胞质里的 UDP-葡萄糖造。 **两个供体分处两个隔间，就意味着两个彼此独立的池子；两个池子就意味着两个各自独立的旋钮：植物可以多造淀粉，而不必因此自动少造蔗糖。** 假如两条路都取自 UDP-葡萄糖，它们就要抢同一个池子，只能一动全动。 **核苷酸的选择，是「分区」这件事被写在分子层面上的形式——这就是「同一种糖为什么要挂在两种载体上」的答案。**",
      src: "A p.733–734"
    },
    {
      link_en: "second destination: sucrose. And there is a structural reason it is the one that travels",
      link_cn: "第二个去向：蔗糖。而「为什么是它去旅行」有一个结构上的理由",
      en: "Sucrose joins the anomeric C-1 of glucose to the anomeric C-2 of fructose — the anomeric carbon is the one that opens and closes the sugar ring, and in every other common disaccharide one of the two is left free. **Sucrose spends both of them in the same bond, and two useful things follow. No amylase — the starch-splitting enzyme of saliva and gut — and no other common carbohydrate-cleaving enzyme hydrolyses that linkage, so the sugar survives the journey through the phloem instead of being eaten on the way. And with no free anomeric carbon there is no open-chain aldehyde, so sucrose cannot react non-enzymatically with the amino groups of proteins the way glucose does.** A transport sugar has to be inert in both senses, and this one is.",
      cn: "蔗糖把葡萄糖的**异头碳 C-1** 和果糖的异头碳 C-2 连在一起——异头碳就是那个负责开环闭环的碳；在其他常见的双糖里，两个异头碳总有一个是空着的。 **蔗糖把两个都花在了同一根键上，由此有两个好处。第一，淀粉酶以及其他常见的糖裂解酶都水解不了这根键，所以这个糖能活着走完韧皮部的旅程，不会半路被吃掉。第二，没有空着的异头碳就没有开链的醛式，所以蔗糖不会像葡萄糖那样非酶促地跟蛋白质的氨基反应。** 一个运输用的糖必须在这两个意义上都是惰性的，而蔗糖正是如此。",
      src: "A p.733",
      see: [{ id: "7-3-1", en: "sucrose as the non-reducing disaccharide", cn: "作为非还原性双糖的蔗糖" }]
    },
    {
      link_en: "and its synthesis looks wasteful until you look at the two numbers",
      link_cn: "而它的合成看起来很浪费，直到你看那两个数字",
      en: "Sucrose is made in two steps: sucrose 6-phosphate synthase joins UDP-glucose to fructose 6-phosphate, then sucrose 6-phosphate phosphatase takes the phosphate off again. Why phosphorylate a product only to remove the phosphate? Because the synthase reaction releases only about −5.7 kJ/mol — near equilibrium, reversible, and therefore useless as a commitment. The hydrolysis that follows releases about −16.5 kJ/mol and drags the pair over. **Learn the shape rather than the numbers: a near-isoenergetic bond-forming step, followed by an irreversible hydrolysis that pulls it forward. A cell buys direction by hydrolysing something afterwards, and you have already seen the same move at hexokinase, which is the enzyme that traps glucose inside a cell by phosphorylating it, and at the two bisphosphatases of the Calvin cycle.**",
      cn: "蔗糖分两步造：蔗糖-6-磷酸合酶把 UDP-葡萄糖接到果糖-6-磷酸上，然后**蔗糖-6-磷酸磷酸酶**再把那个磷酸去掉。**为什么先给产物加一个磷酸、只为了再把它拿掉？因为合酶那一步只放出约 −5.7 kJ/mol——处在平衡附近，可逆，因而作为「承诺步骤」毫无用处。紧随其后的水解放出约 −16.5 kJ/mol，把这一对整体拉了过去。** 要记的是这个形状，而不是这两个数：一个几乎不放能的成键步骤，后面跟一个把它拽向前的不可逆水解。细胞是靠「事后水解掉某样东西」来买到方向的——己糖激酶那一步、Calvin 循环里那两个二磷酸酶，用的都是同一招。",
      src: "A p.733–734"
    },
    {
      link_en: "before any regulator, see what is being regulated — the leaf is squeezed from both sides",
      link_cn: "在讲任何调控因子之前，先看清被调控的是什么——叶片是被两头夹住的",
      en: "A triose phosphate is a three-carbon sugar carrying a phosphate group, and what the Calvin cycle makes of it can be stored in the chloroplast as starch, exported as sucrose, or both. The ceiling: five-sixths of it must be recycled to regenerate the cycle's CO2 acceptor, so drawing off more than one-sixth slows the cycle or stops it. **The floor, which is the half people miss: every triose phosphate carries a phosphate group out with it, so a chloroplast that hoards triose phosphate has hoarded its own Pi — and Pi is what ATP synthase needs in order to make the ATP the cycle runs on.** Export too much carbon and the cycle runs out of acceptor; export too little and it runs out of phosphate. Every device in the next three steps exists to keep the flux between those two walls.",
      cn: "Calvin 循环造出的**三碳糖磷酸**可以留在叶绿体里变成淀粉，可以变成蔗糖输出，也可以两者都做。上限：其中六分之五必须被回收，用来再生循环的 CO₂ 受体——所以抽走超过六分之一，循环就会变慢乃至停下。 **下限（这一半常被忽略）：每一个三碳糖磷酸都带着一个磷酸基一起离开，所以一个囤着三碳糖磷酸不放的叶绿体，同时也囤住了自己的 Pᵢ——而 ATP 合酶正是靠 Pᵢ 才能造出循环运转所需的 ATP。** 碳输出得太多，循环缺受体；输出得太少，循环缺磷。接下来三步里的每一个装置，都是为了把通量夹在这两堵墙之间。",
      src: "A p.734"
    },
    {
      link_en: "the cytosolic regulator moves opposite to the thing it regulates, and that inversion is the mechanism",
      link_cn: "胞质里那个调控分子的浓度，与它所调控的东西反向变化——这个反向就是机制本身",
      en: "Fructose 2,6-bisphosphate is a pure regulator: it is not an intermediate of any pathway, and its only job is to inhibit fructose 1,6-bisphosphatase and stimulate the PPi-dependent phosphofructokinase that runs the same step backwards. High F26BP therefore pushes the cytosol away from sucrose and toward glycolysis. **Its concentration varies inversely with the rate of photosynthesis, and the circuit is short enough to reconstruct: the kinase that makes F26BP is inhibited by dihydroxyacetone phosphate and by 3-phosphoglycerate, and stimulated by Pi — and active photosynthesis produces the first two while consuming the third.** So light lowers F26BP, the brake on sucrose synthesis comes off, and in the dark the whole circuit runs backwards and the cell burns sugar instead of making it. One metabolite, two enzymes, opposite effects, and the sign is set by the light.",
      cn: "**果糖-2,6-二磷酸（F26BP）是一个纯粹的调控分子：它不是任何途径的中间物，唯一的职责就是抑制果糖-1,6-二磷酸酶、并激活那个把同一步反过来跑的「依赖 PPᵢ 的磷酸果糖激酶」。** 所以 F26BP 高，胞质就被推离蔗糖、推向糖酵解。它的浓度与光合速率反向变化，而这条回路短到可以现场重建：造 F26BP 的那个激酶被磷酸二羟丙酮和 3-磷酸甘油酸抑制、被 Pᵢ 激活——而活跃的光合作用恰好生产前两者、消耗后者。 **于是光把 F26BP 压低，蔗糖合成的刹车松开；到了黑暗里整条回路反向运行，细胞改成烧糖而不是造糖。一个代谢物、两个酶、相反的效果，而正负号由光来定。**",
      src: "A p.734, figure 20-42"
    },
    {
      link_en: "the second cytosolic control point is worth reading for its architecture",
      link_cn: "胞质里第二个控制点，值得看的是它的架构",
      en: "Sucrose 6-phosphate synthase is activated allosterically by glucose 6-phosphate and inhibited by Pi. On top of that sits covalent control: a protein kinase phosphorylates one Ser residue and makes the enzyme less active, and a phosphatase reverses that. **Now the architecture. Glucose 6-phosphate also inhibits the kinase that would switch the enzyme off, and Pi also inhibits the phosphatase that would switch it back on. Each signal therefore acts twice, both times in the same direction — which is why this arrangement amplifies rather than merely repeats.** The physiological reading is plain: plenty of hexose phosphate opens sucrose synthesis, and high Pi — which is what a slow photosynthesis leaves behind — closes it.",
      cn: "**蔗糖-6-磷酸合酶**被葡萄糖-6-磷酸别构激活、被 Pᵢ 抑制。在这之上还叠了一层共价调控：一个蛋白激酶把它某个 Ser 残基磷酸化，使它活性下降，而一个磷酸酶把这个磷酸去掉、逆转之。**关键在架构：葡萄糖-6-磷酸同时还抑制那个「会把它关掉」的激酶，而 Pᵢ 同时还抑制那个「会把它重新打开」的磷酸酶。于是每一个信号都作用两次，而且两次方向一致——这套安排起的是放大作用，而不是简单的重复。** 生理上的读法很直白：己糖磷酸充裕就打开蔗糖合成；Pᵢ 高就关上——而 Pᵢ 高正是光合作用变慢之后留下的局面。",
      src: "A p.734–735, figure 20-43"
    },
    {
      link_en: "and the third control point sits in the other compartment, reading the same metabolites",
      link_cn: "第三个控制点在另一个隔间里，读的却是同样的代谢物",
      recall_en: "the two-knob argument from the nucleotide step, now with the knobs identified",
      recall_cn: "前面「两个旋钮」那一步的论证，现在把旋钮指出来了",
      en: "ADP-glucose pyrophosphorylase, the enzyme that makes starch's donor, is activated by 3-phosphoglycerate — which accumulates when photosynthesis is active — and inhibited by Pi. It reads the ratio of the two. **Now line the three control points up, because as a set they say something no one of them says alone: the signal of active photosynthesis opens both outlets at once, and Pi closes both. The plant does not choose between starch and sucrose by opposing signals; it opens both when carbon is abundant and closes both when phosphate is short.** One genuine coupling sits on top: when sucrose export backs up, the 3-phosphoglycerate that would have been drawn off accumulates instead, activating this very enzyme — so a leaf whose export is blocked falls back on storage automatically.",
      cn: "**ADP-葡萄糖焦磷酸化酶**——制造淀粉那个供体的酶——被 3-磷酸甘油酸激活（光合活跃时它会积累），被 Pᵢ 抑制。它读的是这两者的比值。 **现在把三个控制点并排放好，因为它们作为一组说出了单看任何一个都说不出的话：「光合正在进行」这个信号同时打开两个出口，而 Pᵢ 同时关上两个。植物并不是靠两个方向相反的信号在淀粉和蔗糖之间做选择；碳充裕时它把两个出口都打开，磷短缺时把两个都关上。** 上面还叠着一处真正的耦合：当蔗糖输出堵住时，本该被抽走的 3-磷酸甘油酸转而积累起来，恰好激活这个酶——于是一片输出受阻的叶子会自动改走「存起来」这条路。",
      src: "A p.735, figure 20-44"
    },
    {
      link_en: "everything so far assumed a leaf in sunlight. A germinating seed has neither",
      link_cn: "以上一切都预设了「一片晒着太阳的叶子」。而一颗正在萌发的种子两样都没有",
      en: "A seed underground has no light and no leaves; what it has is stored oil. Its triacylglycerols are hydrolysed to fatty acids, which are oxidised to acetyl-CoA inside glyoxysomes — specialised peroxisomes that appear only during germination — and the acetyl-CoA enters the glyoxylate cycle. **That cycle is the citric acid cycle with two steps replaced. Isocitrate lyase splits isocitrate into succinate and glyoxylate instead of letting isocitrate dehydrogenase — the citric acid cycle enzyme that would otherwise decarboxylate it — have it; malate synthase then condenses the glyoxylate with a second acetyl-CoA to give malate.** Both decarboxylations of the citric acid cycle are bypassed, so two acetyl groups go in and four carbons come out as succinate rather than leaving as two CO2. Keeping the carbon is the entire point: a seed is turning fat into sugar. **And the compartments are load-bearing rather than decorative. Citrate synthase, aconitase and malate dehydrogenase are shared between the two cycles, yet the seed builds a separate glyoxysomal isozyme of each instead of borrowing the mitochondrial ones — because one acetyl-CoA that wanders into the mitochondrial citric acid cycle is decarboxylated twice and lost as CO2. The fat-to-sugar route has to be kept physically away from the machinery that would burn it.** Only the succinate leaves, for the mitochondrion; the oxaloacetate made from it reaches the cytosol, where PEP carboxykinase converts it to phosphoenolpyruvate and gluconeogenesis carries it on to fructose 6-phosphate and sucrose. Three compartments — glyoxysome, mitochondrion, cytosol — integrated to turn stored oil into the plant's transport sugar.",
      cn: "一颗埋在土里的种子既没有光也没有叶子；它有的是贮存的油。它的三酰甘油被水解成脂肪酸，脂肪酸在乙醛酸循环体（glyoxysome）——一种只在萌发期才出现的特化过氧化物酶体——里被氧化成乙酰-CoA，乙酰-CoA 随即进入乙醛酸循环。 **这个循环就是把柠檬酸循环里的两步换掉：异柠檬酸裂解酶（isocitrate lyase）把异柠檬酸劈成琥珀酸和乙醛酸，不让异柠檬酸脱氢酶——柠檬酸循环里本来会把它脱羧的那个酶——碰到它；接着苹果酸合酶（malate synthase）把那个乙醛酸与第二个乙酰-CoA 缩合，生成苹果酸。** 柠檬酸循环的两次脱羧都被绕过了，于是两个乙酰基进去，出来的是四个碳的琥珀酸，而不是两个 CO₂ 跑掉。「把碳留住」就是全部要点：一颗种子正在把脂肪变成糖。 **而这些隔间是承重的，不是装饰。柠檬酸合酶、顺乌头酸酶、苹果酸脱氢酶本是两个循环共用的，可种子偏偏为每一个都另造一份乙醛酸循环体专用的同工酶，而不去借线粒体那一份——因为只要有一个乙酰-CoA 溜进线粒体的柠檬酸循环，它就会被脱羧两次、以 CO₂ 的形式丢掉。「脂肪变糖」这条路必须在物理上远离那台会把它烧掉的机器。** 离开乙醛酸循环体的只有琥珀酸，去往线粒体；由它生成的草酰乙酸进入胞质，PEP 羧激酶把它变成磷酸烯醇式丙酮酸，再由糖异生一路走到果糖-6-磷酸和蔗糖。三个隔间——乙醛酸循环体、线粒体、胞质——被整合起来，把贮存的油变成这株植物的运输糖。",
      src: "A p.735–736, p.740, figure 20-45",
      see: [{ id: "6-2-3", en: "the glyoxylate cycle as a pathway", cn: "作为一条通路的乙醛酸循环" }]
    },
    {
      link_en: "which gives the cleanest answer to a question people usually answer wrongly",
      link_cn: "由此可以给出一个常被答错的问题的最干净的答案",
      en: "An animal cannot make glucose from the two carbons of acetyl-CoA, and the reason is the absence of two enzymes rather than any energetic barrier. The pyruvate dehydrogenase reaction is effectively irreversible, so acetyl-CoA cannot be walked back into pyruvate; and animals have no isocitrate lyase and no malate synthase, so there is no way round either. Say it as two missing enzymes, because the energetics are perfectly fine — a germinating seed does exactly this every spring. **Two riders keep the answer honest. The word net matters: fatty acid carbons do appear in glucose after passing through the citric acid cycle, but two carbons enter and two leave as CO2, so nothing is gained. And the glycerol backbone of a triacylglycerol is glucogenic in animals too, entering gluconeogenesis after oxidation to dihydroxyacetone phosphate. So the honest claim is that the fatty acids cannot become glucose, and not that fat cannot.**",
      cn: "动物无法用乙酰-CoA 的那两个碳造出葡萄糖，而原因是缺了两个酶，而非任何能量上的障碍。 丙酮酸脱氢酶那一步实际上不可逆，所以乙酰-CoA 走不回丙酮酸；而动物既没有异柠檬酸裂解酶、也没有苹果酸合酶，所以也没有绕道可走。答题时要把它说成「缺两个酶」，因为热力学完全没问题——每年春天，一颗萌发的种子都在做这件事。 **有两条补充能让答案诚实。第一，「净」这个字要紧：脂肪酸的碳确实会经柠檬酸循环出现在葡萄糖里，但进去两个碳、又有两个碳以 CO₂ 离开，所以没有净增。第二，三酰甘油的甘油骨架在动物体内同样是生糖的——它被氧化成磷酸二羟丙酮后进入糖异生。所以老实的说法是：脂肪酸变不成葡萄糖，而不是「脂肪」变不成葡萄糖。**",
      src: "A p.736"
    },
    {
      link_en: "third destination: cellulose. Its difficulty is topological rather than chemical",
      link_cn: "第三个去向：纤维素。它的难处在拓扑，不在化学",
      recall_en: "the missing cytosolic pyrophosphatase, four steps back, is what makes its supply line possible",
      recall_cn: "前面第四步里「胞质缺失的焦磷酸酶」，正是它的供应线得以成立的原因",
      en: "Cellulose is a linear β1→4 polymer that gives a plant cell wall its rigidity and stops the cell bursting when water flows in — more than 10^11 metric tons of it are made each year. **The difficulty is that it must be synthesised from precursors inside the cell and deposited outside the plasma membrane, which starch and glycogen never have to do.** The machine is a rosette: six particles in a hexagon about 30 nm across, each holding about three cellulose synthase molecules. UDP-glucose is taken on the cytoplasmic face and the growing chain extruded through a transmembrane channel. **Three features follow from that. Synthesis has to be highly processive, because a chain longer than six to eight glucose units is insoluble and could never be re-bound once released — some run to 15,000 units. Six times three is eighteen, and eighteen chains crystallising side by side as they emerge is exactly one microfibril, which is why the machine is a hexamer and not a single enzyme. And the configuration inverts: glucose is α-linked in UDP-glucose and β1→4 in the product.** The donor is supplied by sucrose synthase, an enzyme named after its reverse reaction — in the plant it takes sucrose apart, giving UDP-glucose plus fructose, and it can only run that way because the cytosol left its PPi in place.",
      cn: "纤维素是 β1→4 的线性聚合物，它给植物细胞壁刚性、并在水往里流时防止细胞胀破——全世界每年合成的量超过 10¹¹ 公吨。 **难处在于：它必须用细胞内部的前体合成，却要沉积在质膜外面——淀粉和糖原从来不必面对这个问题。** 干这活的机器是一个 rosette（玫瑰花结）：六个颗粒排成一个约 30 nm 宽的正六边形，每个颗粒里大约装三个纤维素合酶分子。 UDP-葡萄糖在胞质一侧被取用，正在延长的链经跨膜通道被挤到外面去。**由此有三个特征。一，合成必须高度持续（processive），因为超过 6–8 个葡萄糖单位的链就不溶于水，一旦松手就再也接不回去——有些链长达 15,000 个单位。二，六乘三等于十八，而十八条链在露出膜面时并排结晶，恰好就是一根微纤丝——这正是这台机器必须是六聚体而不是单个酶的原因。三，构型发生翻转：葡萄糖在 UDP-葡萄糖里是 α 连接的，在产物里却是 β1→4。** 供体由 sucrose synthase 提供，这个酶是按它的逆反应命名的——在植物体内它做的事是把蔗糖拆开，生成 UDP-葡萄糖加果糖；而它之所以能朝这个方向跑，正是因为胞质把自己的 PPᵢ 留在了原地。",
      src: "A p.736–738, figures 20-46, 20-47",
      see: [{ id: "7-4-1-2", en: "cellulose as a structural polysaccharide", cn: "作为结构多糖的纤维素" }]
    },
    {
      link_en: "and the section ends by dissolving its own headings",
      link_cn: "本节最后把自己的小标题溶解掉",
      en: "The pathways here interconnect so completely that the useful picture is one of pools rather than of separate routes. Three pools are named: the hexose phosphates, the pentose 5-phosphates, and the triose phosphates. **Within a pool the free-energy changes are small and the members re-equilibrate almost immediately, so draining one member is corrected at once — which is exactly why every regulator in this node acts on the enzymes that move carbon between pools and between compartments, and never on the interconversions inside a pool.** At the level of the whole plant the same logic gives source and sink: **a photosynthetic leaf exports sucrose into the phloem, its high sucrose content draws in water by osmosis, and the turgor pressure pushes the sap toward roots, tubers and bulbs, where the sucrose becomes starch or fuel.** And the direction reverses on a daily cycle: by day the leaf exports, and at night it lives off the starch it made and supplies the rest of the plant from that.",
      cn: "这里的各条通路彼此连通得如此彻底，以至于有用的图景是「一个个池子」，而不是「一条条独立的路线」。 书上点名了三个池子：己糖磷酸、戊糖-5-磷酸、三碳糖磷酸。 **池子内部各成员之间的自由能变化很小，几乎立刻重新达到平衡，所以抽走其中一个成员会被马上补回来——这正是本节点里每一个调控因子都作用在「把碳从一个池子搬到另一个池子、从一个隔间搬到另一个隔间」的酶上，而从不作用于池子内部相互转化的原因。** 在整株植物的层面上，同一套逻辑给出源与库：**进行光合作用的叶片把蔗糖输出到韧皮部，高蔗糖含量靠渗透把水吸进来，升高的膨压把汁液推向根、块茎和鳞茎，蔗糖在那里变成淀粉或燃料。** 而这个方向每天翻转一次：白天叶片输出，夜里它靠自己白天造的淀粉过活，并由此供养植株其余部分。",
      src: "A p.738–740, figures 20-48, 20-49"
    }
  ],
  terms: [
    { en: "sugar nucleotide", cn: "糖核苷酸",
      def_en: "A monosaccharide carried on a nucleoside diphosphate, and the form in which glucose is always donated to a growing polysaccharide — never as the free sugar. The point of the activation is thermodynamic: forming a glycosidic bond is close to isoenergetic and therefore reversible, so a high-energy phosphoanhydride bond is pre-attached and its cleavage drives the transfer one way. Which nucleotide is used marks the compartment: ADP-glucose inside plastids for starch, UDP-glucose in the cytosol for sucrose and at the plasma membrane for cellulose.",
      def_cn: "挂在核苷二磷酸上的单糖，也是葡萄糖被交给正在延长的多糖时永远采用的形式——从来不是游离糖。活化的意义在热力学：形成糖苷键几乎不放能、因而可逆，所以预先在糖上装一根高能磷酸酐键，转移时把它断掉，反应就被推成单向。用哪个核苷酸标记的是隔间：质体内造淀粉用 ADP-葡萄糖，胞质里造蔗糖、质膜上造纤维素用 UDP-葡萄糖。" },
    { en: "the missing cytosolic pyrophosphatase", cn: "胞质中缺失的焦磷酸酶",
      def_en: "A difference between plant and animal cells that looks like trivia and turns out to be load-bearing. Inorganic pyrophosphatase hydrolyses PPi at about −19.2 kJ/mol, and in most cells its activity is what makes PPi-liberating biosynthetic reactions irreversible. In plants it is present in plastids and absent from the cytosol, so cytosolic PPi sits near 0.3 mM — high enough to keep reactions such as that of UDP-glucose pyrophosphorylase readily reversible. That reversibility is the enabling condition for running sucrose synthase backwards to supply the cellulose machinery.",
      def_cn: "一处看起来像冷知识、实则承重的植物／动物差别。无机焦磷酸酶水解 PPᵢ 的 ΔG′° 约 −19.2 kJ/mol；在多数细胞里，正是它的活性让放出 PPᵢ 的生物合成反应变得不可逆。植物的这个酶在质体里有、在胞质里没有，所以胞质 PPᵢ 维持在约 0.3 mM——高到足以让 UDP-葡萄糖焦磷酸化酶这一类反应保持双向可行。而这种可逆性，正是「把 sucrose synthase 反着跑、给纤维素机器供货」得以成立的前提。" },
    { en: "sucrose synthase", cn: "蔗糖合酶",
      def_en: "An enzyme named after the reverse of the reaction it actually catalyses in a plant. It runs sucrose + UDP to UDP-glucose + fructose — it takes sucrose apart in order to regenerate an activated glucose donor — and a membrane-bound form supplies UDP-glucose locally to the cellulose synthesis complex. It can work in that direction only because the plant cytosol keeps its PPi. The name is a standing trap: this enzyme degrades sucrose, while sucrose 6-phosphate synthase makes it.",
      def_cn: "一个按它逆反应命名的酶。它在植物体内跑的是「蔗糖 + UDP → UDP-葡萄糖 + 果糖」——把蔗糖拆开，以便再生出一个活化的葡萄糖供体；其膜结合形式就近向纤维素合成复合体供应 UDP-葡萄糖。它之所以能朝这个方向跑，全靠植物胞质把 PPᵢ 留着。这个名字是个长期陷阱：这个酶是拆蔗糖的，造蔗糖的是蔗糖-6-磷酸合酶。" },
    { en: "fructose 2,6-bisphosphate in plants", cn: "植物中的果糖-2,6-二磷酸",
      def_en: "A pure regulator — an intermediate of no pathway — that decides whether cytosolic triose phosphate becomes sucrose or is burned. It inhibits fructose 1,6-bisphosphatase and stimulates the PPi-dependent phosphofructokinase, so a high concentration pushes the cell toward glycolysis and away from sucrose. Its level runs inversely to the rate of photosynthesis, because the kinase that makes it is inhibited by dihydroxyacetone phosphate and 3-phosphoglycerate and stimulated by Pi, and active photosynthesis makes the first two while consuming the third.",
      def_cn: "一个纯粹的调控分子——不是任何途径的中间物——决定胞质里的三碳糖磷酸是变成蔗糖还是被烧掉。它抑制果糖-1,6-二磷酸酶、激活依赖 PPᵢ 的磷酸果糖激酶，所以浓度高就把细胞推向糖酵解、推离蔗糖。它的水平与光合速率反向变化，因为制造它的那个激酶被磷酸二羟丙酮和 3-磷酸甘油酸抑制、被 Pᵢ 激活，而活跃的光合作用生产前两者、消耗后者。" },
    { en: "the two-sided squeeze on triose phosphate", cn: "三碳糖磷酸受到的两头挤压",
      def_en: "The constraint every regulator in this section serves. Five-sixths of the triose phosphate made by the Calvin cycle must be recycled to regenerate the CO2 acceptor, so drawing off more than one-sixth slows or stops the cycle — that is the ceiling. But each triose phosphate also carries a phosphate group out of the chloroplast, so hoarding it starves the chloroplast of the Pi that ATP synthase needs — that is the floor. Export too much and the cycle loses its acceptor; export too little and it loses its phosphate.",
      def_cn: "本节所有调控因子服务的那个约束。Calvin 循环造出的三碳糖磷酸中，六分之五必须被回收以再生 CO₂ 受体，所以抽走超过六分之一会使循环变慢或停下——这是上限。但每一个三碳糖磷酸也把一个磷酸基带出叶绿体，所以把它囤着不放，就会让叶绿体缺少 ATP 合酶所需的 Pᵢ——这是下限。输出太多，循环失去受体；输出太少，循环失去磷酸。" },
    { en: "glyoxysome", cn: "乙醛酸循环体",
      def_en: "A specialised peroxisome appearing only during seed germination, housing both fatty acid oxidation and the glyoxylate cycle. Its existence is a design requirement: acetyl-CoA entering the mitochondrial citric acid cycle would be decarboxylated twice and lost as CO2, so the fat-to-sugar route is kept physically apart from the machinery that would burn it. Enzymes shared with the citric acid cycle exist as separate isozymes here for the same reason; only succinate is exported.",
      def_cn: "一种只在种子萌发期出现的特化过氧化物酶体，同时容纳脂肪酸氧化与乙醛酸循环。它的存在是一个设计上的必需：进入线粒体柠檬酸循环的乙酰-CoA 会被脱羧两次、以 CO₂ 丢失，所以「脂肪变糖」的路线必须与那台会烧掉它的机器在物理上隔开。与柠檬酸循环共用的那几个酶在这里另有一套同工酶，也是同一个理由；离开它的只有琥珀酸。" },
    { en: "isocitrate lyase and malate synthase", cn: "异柠檬酸裂解酶与苹果酸合酶",
      def_en: "The only two enzymes unique to the glyoxylate cycle, and the entire difference between a seed and an animal on the question of making sugar from fat. One splits isocitrate into succinate and glyoxylate instead of letting it be decarboxylated; the other condenses that glyoxylate with a second acetyl-CoA to give malate. Between them both decarboxylations of the citric acid cycle are bypassed, so two acetyl groups yield a four-carbon product. Animals lack both — that absence, and not any thermodynamic barrier, is why fatty acids cannot become glucose in an animal.",
      def_cn: "乙醛酸循环独有的仅有两个酶，也是「种子与动物在『能否用脂肪造糖』上的全部差别」。前者把异柠檬酸劈成琥珀酸和乙醛酸，而不让它被脱羧；后者把那个乙醛酸与第二个乙酰-CoA 缩合成苹果酸。两者合起来绕开了柠檬酸循环的两次脱羧，于是两个乙酰基产出一个四碳产物。动物两个都没有——正是这处缺失，而非任何热力学障碍，使动物体内的脂肪酸变不成葡萄糖。" },
    { en: "the cellulose rosette", cn: "纤维素 rosette 复合体",
      def_en: "The machine that solves cellulose's topological problem — the polymer must be built from cytosolic precursors and deposited outside the plasma membrane. Six particles in a hexagon about 30 nm across, each holding about three cellulose synthase molecules, take UDP-glucose on the cytoplasmic face and extrude the chain through a transmembrane channel. Six times three is eighteen chains, which co-crystallise as they emerge into exactly one microfibril. Synthesis must be processive because a chain over six to eight units long is insoluble and could not be re-bound, and the configuration inverts from α in the donor to β1→4 in the product.",
      def_cn: "解决纤维素拓扑难题的那台机器——这个聚合物必须用胞质里的前体制造，却要沉积在质膜之外。六个颗粒排成约 30 nm 宽的六边形，每个颗粒约装三个纤维素合酶分子，在胞质面取用 UDP-葡萄糖，把链经跨膜通道挤出去。六乘三等于十八条链，它们在露出膜面时共结晶，恰好构成一根微纤丝。合成必须是持续性的，因为超过 6–8 个单位的链已不溶、松手后接不回去；构型也发生翻转：供体上是 α，产物里是 β1→4。" },
    { en: "source and sink tissues", cn: "源组织与库组织",
      def_en: "The whole-plant version of the same logic. A source tissue is one with net CO2 fixation — a photosynthetic leaf — which exports sucrose into the phloem; the high sucrose content draws water in by osmosis and the raised turgor pressure pushes the sap toward sink tissues such as roots, tubers and bulbs, where sucrose becomes starch, fuel, or hexose phosphates for the cell wall. The direction of flow through a leaf's shared metabolite pools reverses between day and night: exporting by day, living off its own starch at night.",
      def_cn: "同一套逻辑在整株植物层面的版本。源组织是有净 CO₂ 固定的组织——一片进行光合作用的叶子——它把蔗糖输出到韧皮部；高蔗糖含量靠渗透吸水，升高的膨压把汁液推向根、块茎、鳞茎这类库组织，蔗糖在那里变成淀粉、燃料，或供细胞壁使用的己糖磷酸。叶片内共享代谢池中的流向每天翻转一次：白天输出，夜里靠自己的淀粉过活。" }
  ]
};

/* ------------------------------------------------------------------ L-21-1-1 */
window.BIOLITE_SPINE["L-21-1-1"] = {
  assumed: ["ATP", "ADP", "AMP", "Pi", "NADH", "NAD+", "NADPH", "NADP+", "FAD",
            "acetyl-CoA", "coenzyme A", "CoA", "citric acid cycle", "citrate synthase",
            "oxaloacetate", "pyruvate", "malate", "mitochondrion", "cytosol",
            "inner mitochondrial membrane", "endoplasmic reticulum", "biotin",
            "glucagon", "epinephrine", "phospholipid", "aspirin", "platelet",
            "beta oxidation", "pentose phosphate pathway", "O2", "CO2", "serine"],
  nodeTitle_en: "Fatty acid biosynthesis",
  nodeTitle_cn: "脂肪酸的生物合成",
  title_en: "Building in one compartment what is burned in another — and the one bond mammals cannot make",
  title_cn: "在一个隔间里造、在另一个隔间里烧——以及哺乳动物做不出来的那一根双键",
  steps: [
    {
      en: "Fatty acids are built in the cytosol. Their raw material, acetyl-CoA, is made inside the mitochondrion, and the inner mitochondrial membrane will not let acetyl-CoA across. **So before any chemistry can start there is a logistics problem, and the way it is solved turns out to answer two other questions as well: where the pathway's reducing power comes from, and how the cell stops itself building and burning fatty acids at the same time.**",
      cn: "脂肪酸是在**胞质**里造的。而它的原料乙酰-CoA 是在线粒体内部造出来的，线粒体内膜又不让乙酰-CoA 通过。 **所以在任何化学反应开始之前，先有一个物流问题；而这个问题的解法，顺带回答了另外两个问题：这条途径的还原力从哪来，以及细胞怎样阻止自己一边造脂肪酸一边烧脂肪酸。**",
      src: "A p.745, §21.1"
    },
    {
      link_en: "the acetyl group leaves in disguise",
      link_cn: "乙酰基是乔装出去的",
      en: "**Inside the mitochondrion, acetyl-CoA condenses with oxaloacetate to give citrate — the ordinary citrate synthase reaction of the citric acid cycle. Citrate does have a transporter in the inner membrane, so it crosses. In the cytosol, citrate lyase spends one ATP to split it back into acetyl-CoA and oxaloacetate.** The acetyl group has been carried out as part of a larger molecule that the membrane is willing to pass, and put back together on the far side. That is the whole of the citrate shuttle's outward leg.",
      cn: "**在线粒体内部，乙酰-CoA 与草酰乙酸缩合生成柠檬酸**——就是柠檬酸循环里那个普通的柠檬酸合酶反应。柠檬酸在内膜上是有转运体的，所以它过得去。到了胞质，柠檬酸裂解酶（citrate lyase）花掉一个 ATP，把它重新劈回乙酰-CoA 和草酰乙酸。 **乙酰基是作为一个更大分子的一部分被带出去的——那个分子恰好是膜肯放行的——然后在另一边被重新拆装出来。这就是柠檬酸穿梭（citrate shuttle）出去那一程的全部内容。**",
      src: "A p.751–752"
    },
    {
      link_en: "the return leg is the half worth knowing, because it pays for the pathway",
      link_cn: "回程才是真正值得记的那一半——因为它在给整条途径买单",
      en: "**Oxaloacetate cannot simply go back: there is no oxaloacetate transporter in the inner membrane.** So it is reduced to malate, and malic enzyme then converts malate to pyruvate and CO2, generating NADPH as it does so. A palmitate costs 14 NADPH, and this return leg supplies roughly half of them; the pentose phosphate pathway supplies the rest. **So the same shuttle that delivers the carbon also delivers half the reducing power — the transport problem and the supply problem have one solution.**",
      cn: "**草酰乙酸不能就这么回去：内膜上根本没有草酰乙酸转运体。** 于是它被还原成苹果酸，再由苹果酸酶（malic enzyme）转化为丙酮酸和 CO₂，在这一步生成 NADPH。 **合成一分子软脂酸要花 14 个 NADPH，而这条回程提供其中大约一半；其余由磷酸戊糖途径提供。** 也就是说：送碳进来的那同一条穿梭，也送来了一半的还原力——运输问题和供给问题共用一个解。",
      src: "A p.752",
      see: [{ id: "7-7-1", en: "the pentose phosphate pathway, source of the other half", cn: "磷酸戊糖途径——另一半 NADPH 的来源" }]
    },
    {
      link_en: "and one measurement explains why building and burning can share a compartment",
      link_cn: "有一组实测数字解释了「造」和「烧」为什么能共处一室",
      en: "Anabolism — the building of molecules — generally runs on NADPH, while catabolism, their breakdown, runs on NAD+. In a liver cell's cytosol the ratio [NADPH]/[NADP+] is about 75, a strongly reducing setting, while [NADH]/[NAD+] in that same cytosol is about 8 × 10⁻⁴. **Two pools of nearly identical molecules are held at opposite redox poise in one compartment, which is what lets the reductive synthesis of fatty acids and the oxidative breakdown of glucose proceed side by side without interfering.** In a plant the reducing pool sits in the chloroplast, which is the organelle that runs photosynthesis, and fatty acid synthesis moves there accordingly.",
      cn: "合成代谢（anabolism）——把分子造出来——一般靠 NADPH；**分解代谢（catabolism）**——把分子拆掉——靠 NAD⁺。**在肝细胞胞质里，[NADPH]/[NADP⁺] 约为 75，是一个强还原性的环境；而同一份胞质里的 [NADH]/[NAD⁺] 约为 8 × 10⁻⁴。** 两个分子结构几乎相同的库，在同一个隔间里被维持在完全相反的氧化还原电位上——正因如此，还原性的脂肪酸合成和氧化性的葡萄糖分解才能并肩进行而互不干扰。 在植物里，还原性的那个库位于叶绿体，脂肪酸合成也就跟着搬到那里去。",
      src: "A p.751"
    },
    {
      link_en: "now the committed step, and the ATP spent on it looks wasted until the next step",
      link_cn: "接下来是承诺步骤——花在它上面的那个 ATP 看着像白花，直到下一步",
      en: "Acetyl-CoA carboxylase attaches a carboxyl group, taken from bicarbonate rather than from CO2 gas, onto acetyl-CoA, spending one ATP and giving malonyl-CoA — acetyl-CoA with one extra carboxyl group on it. The reaction is irreversible, and it is the rate-limiting step of the whole pathway. In animals one polypeptide carries all three parts — a biotin carrier protein, a biotin carboxylase and a transcarboxylase — and the biotin sits on a long flexible arm that physically swings the carboxyl group from the first active site to the second. **Then the surprise: that carboxyl is put on only in order to be taken off again. Eliminating it in the next reaction is what makes the condensation thermodynamically favourable, so the CO2 contributes nothing to the product and its net balance over a whole palmitate is zero. The ATP was not spent on the carbon; it was spent on making the following step go.**",
      cn: "**乙酰-CoA 羧化酶把一个羧基接到乙酰-CoA 上，生成丙二酰-CoA（malonyl-CoA）**；羧基取自碳酸氢根而非 CO₂ 气体，反应花掉一个 ATP，不可逆，而且是整条途径的限速步骤。 在动物体内，一条多肽同时带着三个部分——生物素载体蛋白、生物素羧化酶、转羧酶——而且生物素装在一条长而柔软的臂上，把羧基从第一个活性位点实实在在地「甩」到第二个活性位点去。 **接着是意外之处：这个羧基装上去，只是为了再被卸下来。它在下一步反应里被消去，正是使那次缩合在热力学上变得有利的原因；所以这个 CO₂ 对产物毫无贡献，在合成一整条软脂酸的账上净贡献为零。那个 ATP 买的不是碳，买的是「让下一步走得动」。**",
      src: "A p.745–746, figures 21-1, 21-2",
      see: [{ id: "8-3-1", en: "the carboxylase's cofactors and the malonyl-CoA equation", cn: "羧化酶的辅因子与丙二酰-CoA 的反应式" }]
    },
    {
      link_en: "and once the condensation has happened, you already know the rest of the cycle",
      link_cn: "缩合一旦发生，这个循环剩下的部分你其实已经会了",
      recall_en: "the same three reactions as beta oxidation, run in the reverse order",
      recall_cn: "和 β-氧化是同样的三个反应，只是顺序反过来",
      en: "**After the condensation the remaining three reactions are nearly identical to those of beta oxidation, taken in reverse order: the beta-keto group is reduced to an alcohol, water is eliminated to make a double bond, and that double bond is reduced to give a saturated chain.** So anyone who knows how a fatty acid is taken apart already knows three quarters of how one is built, and only three things are genuinely new: the malonyl-CoA priming, the use of NADPH instead of NAD+ and FAD, and the direction.",
      cn: "缩合之后，剩下的三个反应与 β-氧化中的反应几乎完全相同，只是顺序倒过来：β-酮基被还原成醇，脱去一分子水生成双键，双键再被还原，得到饱和的酰基链。 **所以，会拆脂肪酸的人已经会了「造脂肪酸」的四分之三；真正需要新学的只有三件事：用丙二酰-CoA 引发、用 NADPH 而不是 NAD⁺／FAD、以及方向。**",
      src: "A p.746",
      see: [{ id: "8-4-4-2", en: "beta oxidation, the same three reactions the other way", cn: "β-氧化机制——同样三个反应的反方向" }]
    },
    {
      link_en: "the machine that runs the cycle has one structural feature with a real consequence",
      link_cn: "跑这个循环的那台机器，有一处结构特点带来实际后果",
      en: "In mammals the seven catalytic activities are not seven proteins but **seven domains of one large polypeptide, fatty acid synthase I, which works as a dimer of two independently operating subunits.** One of those domains is the acyl carrier protein, ACP, which holds the growing chain on a long phosphopantetheine arm and swings it from one active site to the next. Because ACP is part of the same chain as every active site it serves, no intermediate is ever released into solution — the whole chain is built without letting go once. **The consequence worth stating: bacteria and plants use separable enzymes for the same job, which is precisely why antibiotics and herbicides can be aimed at their version and leave the mammalian one alone.**",
      cn: "在哺乳动物体内，那七种催化活性并不是七个蛋白，而是同一条大多肽上的七个结构域——**脂肪酸合酶 I（fatty acid synthase I, FAS I）**，它以二聚体形式工作，两个亚基各自独立运转。其中一个结构域就是酰基载体蛋白（ACP），它用一条长长的磷酸泛酰巯基乙胺臂抓着正在延长的链，在一个个活性位点之间甩来甩去。由于 ACP 与它所服务的每一个活性位点都在同一条链上，中间产物从来不会被释放到溶液里——整条链造完，中途一次也没有松手。 **值得说出的后果是：细菌和植物用的是可以分开的一组酶来干同样的活，而这正是抗生素和除草剂能够只瞄准它们那一版、放过哺乳动物那一版的原因。**",
      src: "A p.746–748, figure 21-3",
      see: [{ id: "8-3-2", en: "ACP and the phosphopantetheine arm", cn: "ACP 与磷酸泛酰巯基乙胺臂" }]
    },
    {
      link_en: "count the carbons, because the count is examinable and easy to get backwards",
      link_cn: "把碳数一遍——这个数很爱考，而且很容易记反",
      en: "Seven turns of the cycle build the 16-carbon palmitoyl group, still attached to ACP. **The very first acetyl-CoA is the primer and is never carboxylated: its methyl and carboxyl carbons end up as C-16 and C-15 of palmitate, and every other carbon in the chain arrives by way of malonyl-CoA.** That is why the balance sheet needs 8 acetyl-CoA but only 7 carboxylations, and 7 ATP rather than 8.",
      cn: "**七轮循环造出十六碳的软脂酰基**，此时它还挂在 ACP 上。**最开头那一个乙酰-CoA 是引物，从来不被羧化：它的甲基碳和羧基碳最终成为软脂酸的 C-16 与 C-15，而链上其余每一个碳都是经丙二酰-CoA 送来的。** 这就是为什么收支表需要 8 个乙酰-CoA、却只需要 7 次羧化，也只花 7 个 ATP 而不是 8 个。",
      src: "A p.749, figure 21-6",
      see: [{ id: "8-3-4", en: "the full stoichiometry of palmitate synthesis", cn: "软脂酸合成的完整化学计量" }]
    },
    {
      link_en: "and it stops at sixteen carbons — the mechanism is known, the reason is not",
      link_cn: "它停在十六个碳——机制是清楚的，理由并不清楚",
      en: "A thioesterase activity built into the same multifunctional protein — one more domain of the same polypeptide — hydrolyses the finished 16-carbon chain off ACP. That is how it stops. **Why the synthase stops there rather than carrying on is stated in the book as not well understood, and repeating that as it stands is a stronger answer than inventing a rationalisation.**",
      cn: "**同一条多功能蛋白里内置了一个硫酯酶（thioesterase）活性，把造好的十六碳链从 ACP 上水解下来。** 停下的机制就是这个。至于合酶为什么停在十六碳而不继续下去，书上明说「原因尚不清楚」；照原样把这句话说出来，比现编一个理由更有力。",
      src: "A p.750",
      openQuestion_en: "Why chain elongation by the synthase halts at sixteen carbons is not understood.",
      openQuestion_cn: "合酶为什么恰好在十六个碳处停止延长，目前没有解释。"
    },
    {
      link_en: "the rate-limiting step is where control acts, and it is controlled three ways at once",
      link_cn: "限速步骤就是调控落点，而它同时被三种方式控制",
      recall_en: "the carboxylase from the committed step above, now as the control point",
      recall_cn: "上面那个承诺步骤里的羧化酶，在这里成了控制点",
      en: "Citrate is an allosteric activator of acetyl-CoA carboxylase, raising its Vmax — and notice what that means: citrate is at once the vehicle that carries acetyl groups out to the cytosol and the signal that switches on the enzyme which consumes them, so a rising supply is its own instruction to start. Palmitoyl-CoA, the pathway's own main product, is a feedback inhibitor. **And covalent control sits on top: AMP-activated protein kinase, roused by glucagon, epinephrine or a high AMP concentration, phosphorylates at least three Ser residues, which both inactivates the enzyme and makes it less sensitive to citrate — a double shutdown for a cell that is short of energy or being told to mobilise fuel rather than store it.** The active, unphosphorylated form assembles into filaments visible in an electron microscope.",
      cn: "**柠檬酸是乙酰-CoA 羧化酶的别构激活剂，提高它的 Vmax**——注意这意味着什么：柠檬酸既是把乙酰基运到胞质的运载工具，又是打开那个消耗乙酰基的酶的信号；于是「供应上升」这件事本身就是「开工」的指令。 软脂酰-CoA，也就是这条途径自己的主产物，是它的反馈抑制剂。 **上面还叠着共价调控：AMP 活化蛋白激酶（AMPK）被胰高血糖素、肾上腺素或高浓度 AMP 唤醒，把至少三个 Ser 残基磷酸化——既使酶失活，又降低它对柠檬酸的敏感性，对一个缺能量、或被要求动员燃料而非储存燃料的细胞来说，这是一次双重关闭。** 活性的、未磷酸化的那种形式会聚合成细丝，在电镜下看得见。",
      src: "A p.753, figure 21-11"
    },
    {
      link_en: "and one molecule keeps synthesis and breakdown from running at once",
      link_cn: "而有一个分子专门负责不让「造」和「烧」同时开工",
      en: "If synthesis and beta oxidation ran together the pair would be a futile cycle, spending ATP to build what is simultaneously being taken apart. The cell forbids it with a single link: malonyl-CoA, the first committed intermediate of synthesis, inhibits carnitine acyltransferase I — the enzyme that loads fatty acids onto carnitine for carriage into the mitochondrion. So the moment synthesis starts, breakdown is blocked at the transport step, before a fatty acid can even reach the oxidation machinery. **One consequence is worth stating carefully: in an animal, acetyl-CoA from fatty acid oxidation is not a significant source of material for fatty acid synthesis, because the reciprocal control makes the two pathways mutually exclusive.**",
      cn: "如果合成与 β-氧化同时开工，这一对就构成一个无效循环：花着 ATP 去造一样正在被拆掉的东西。**细胞用一条连线禁止了它：丙二酰-CoA——合成途径的第一个承诺中间物——抑制肉碱脂酰转移酶 I，也就是那个把脂肪酸装到肉碱上、送进线粒体的酶。** 于是合成一开始，分解就在「运输」这一步被卡住，脂肪酸根本到不了氧化机器跟前。 **有一个推论要说准：在动物体内，脂肪酸氧化产生的乙酰-CoA 对脂肪酸合成来说算不上重要的原料来源，因为这种拮抗调控让两条途径互相排斥。**",
      src: "A p.753",
      see: [{ id: "8-4-4-1", en: "the carnitine shuttle, the gate this inhibitor closes", cn: "肉碱穿梭——被这个抑制剂关上的那道闸" }]
    },
    {
      link_en: "what becomes of palmitate, and where mammals hit a hard wall",
      link_cn: "软脂酸的去向，以及哺乳动物撞上的那堵硬墙",
      en: "Elongation lengthens palmitate to stearate (18:0) and beyond; elongation systems exist in both the smooth endoplasmic reticulum and in mitochondria, **and the endoplasmic reticulum system is the more active of the two.** It uses coenzyme A rather than ACP as the carrier, and is otherwise mechanistically the same. Desaturation puts a single cis double bond between C-9 and C-10, giving the two commonest monounsaturated fatty acids of animal tissue, palmitoleate (16:1) and oleate (18:1). And here is the wall: a mammal cannot introduce a double bond beyond C-9. **Linoleate (18:2) and alpha-linolenate (18:3) therefore cannot be made at all and must come from plant material in the diet — that, and nothing else, is what makes them the essential fatty acids.** From linoleate the body makes arachidonate, which is the 20-carbon fatty acid every signalling lipid in the last steps of this node comes from; from alpha-linolenate it makes EPA and DHA.",
      cn: "延长（elongation）把软脂酸接长成硬脂酸（18:0）乃至更长；延长系统在光面内质网和线粒体里都有，而内质网那套是更活跃的一个。它用辅酶 A 而不是 ACP 当载体，机制上则与合成相同。去饱和（desaturation）在 C-9 与 C-10 之间装上一个顺式双键，给出动物组织里最常见的两种单不饱和脂肪酸：棕榈油酸（16:1）和油酸（18:1）。而这里就是那堵墙：哺乳动物无法在 C-9 之外的位置引入双键。 **于是亚油酸（18:2）与 α-亚麻酸（18:3）根本造不出来，必须从膳食中的植物性材料获得——所谓「必需脂肪酸」，指的仅仅是这件事。** 由亚油酸，机体制造**花生四烯酸（arachidonate）**；由 α-亚麻酸，制造 EPA 与 DHA。",
      src: "A p.754, figure 21-12",
      see: [{ id: "8-2-1-2", en: "essential fatty acids in the structural chapter", cn: "结构那一章里的必需脂肪酸" }]
    },
    {
      link_en: "how a double bond is installed, and the odd enzyme class that does it",
      link_cn: "双键是怎么装上去的，以及干这活的那一类怪酶",
      en: "Fatty acyl-CoA desaturase is a **mixed-function oxidase**, and the definition is worth stating precisely because it sounds wrong at first: **two different substrates are oxidised at the same time by one molecule of O2 — here the fatty acyl-CoA and NADPH, each losing two electrons.** The electrons travel a short chain that should look familiar: a flavoprotein, cytochrome b5 reductase, and the cytochrome b5 itself. **All three components sit in the smooth endoplasmic reticulum, which is why desaturation is located there.** Plants do the same job with a different donor, using reduced ferredoxin in the stroma — that is the soluble interior of the chloroplast.",
      cn: "**脂酰-CoA 去饱和酶是一种「混合功能氧化酶（mixed-function oxidase）」**；这个定义值得说准，因为初听会觉得别扭：**两种不同的底物被同一个 O₂ 分子同时氧化——在这里是脂酰-CoA 和 NADPH，各自失去两个电子。** 电子沿一条看着眼熟的短链传递：一个**黄素蛋白（cytochrome b₅ 还原酶）**，以及**细胞色素 b₅** 本身。**这三个组分都位于光面内质网，去饱和作用之所以定位在那里，原因就在这。** 植物用另一种供体干同样的活：在叶绿体基质里用还原态的铁氧还蛋白。",
      src: "A p.755, figure 21-13"
    },
    {
      link_en: "and the essential fatty acids matter because of what one of them becomes",
      link_cn: "必需脂肪酸之所以要紧，是因为其中一种会变成什么",
      recall_en: "arachidonate came from linoleate two steps up, and this is why that mattered",
      recall_cn: "花生四烯酸是上面第二步里由亚油酸来的——这里就是它为什么要紧",
      en: "On a hormonal signal or an injury, **an enzyme called phospholipase A2 cuts arachidonate out of a membrane phospholipid.** Enzymes of the smooth endoplasmic reticulum then convert it, through cyclooxygenase — also called prostaglandin H2 synthase, and abbreviated COX — into PGH2, the branch point from which many prostaglandins and all thromboxanes come. The products are the eicosanoids: short-range signalling lipids made from 20- and 22-carbon polyunsaturated fatty acids. **Two COX isozymes with closely similar sequences do different jobs, and that single fact explains a whole drug class: COX-1 makes the prostaglandins that keep the stomach secreting its protective mucin, and COX-2 makes those that mediate inflammation, pain and fever.**",
      cn: "在激素信号或损伤发生时，磷脂酶 A₂（phospholipase A₂）把花生四烯酸从膜磷脂上切下来。 光面内质网上的酶再通过**环氧合酶（cyclooxygenase，又叫前列腺素 H₂ 合酶，缩写 COX）**把它变成 PGH₂——由这个分岔点产生许多前列腺素和全部血栓烷。这些产物统称类二十烷酸（eicosanoid）：由 20 碳和 22 碳多不饱和脂肪酸做成的短程信号脂质。 **COX 有两个序列高度相似的同工酶，干的却是不同的活；仅这一个事实就解释了一整类药：COX-1 制造那些让胃持续分泌保护性黏蛋白的前列腺素，COX-2 制造那些介导炎症、疼痛与发热的前列腺素。**",
      src: "A p.757–758, figure 21-15"
    },
    {
      link_en: "which turns the pharmacology into biochemistry you can derive rather than memorise",
      link_cn: "于是这门药理学变成了可以推出来、而不必硬背的生化",
      en: "Aspirin irreversibly inactivates both isozymes by acetylating a Ser residue in the active site; ibuprofen and naproxen hit the same pair. **Blocking the inflammation isozyme relieves pain, and blocking the gastric one at the same time removes the stomach's protection — which is exactly where the gastric side effects come from.** Drugs selective for the inflammation isozyme were built for that reason; rofecoxib and valdecoxib were later withdrawn after being linked to increased heart attack and stroke risk, and celecoxib remains in use with caution. **Beyond PGH2 the path forks. Thromboxane synthase in platelets makes thromboxane A2, which causes vasoconstriction and platelet aggregation — the opening moves of clotting, and the reason a small regular dose of aspirin lowers the risk of heart attack and stroke while a larger single dose merely relieves pain.** The other fork is linear: lipoxygenases make leukotrienes, and leukotrienes are not inhibited by aspirin or the other non-steroidal anti-inflammatory drugs. Since leukotrienes drive bronchoconstriction, that is the biochemical reason these drugs do nothing for asthma and a separate class is needed.",
      cn: "**阿司匹林通过把活性位点上的一个 Ser 残基乙酰化，不可逆地使两个同工酶都失活；布洛芬和萘普生打的是同一对。** 把管炎症的那个同工酶挡住，疼痛就缓解；同时把管胃的那个也挡住，胃就失去了保护——胃部副作用正是从这儿来的。 针对炎症那个同工酶的选择性药物就是为此而造的；后来 罗非昔布（Vioxx）与伐地昔布（Bextra）因被关联到心梗与卒中风险升高而撤市，塞来昔布（Celebrex）在谨慎使用中保留。**过了 PGH₂，路分成两支。血小板里的血栓烷合酶造出血栓烷 A₂，它引起血管收缩与血小板聚集——凝血的头几步；这也是「长期小剂量阿司匹林能降低心梗与卒中风险、而单次大剂量只是止痛」的原因。** 另一支是线性的：脂加氧酶（lipoxygenase）制造白三烯，而白三烯不被阿司匹林或其他非甾体抗炎药抑制。既然白三烯引起支气管收缩，这就是这类药对哮喘无效、必须另用一类药的生化原因。",
      src: "A p.758–759, figure 21-16"
    }
  ],
  terms: [
    { en: "citrate shuttle", cn: "柠檬酸穿梭",
      def_en: "The route by which acetyl groups leave the mitochondrion, needed because the inner membrane is impermeable to acetyl-CoA. Acetyl-CoA condenses with oxaloacetate to citrate, citrate crosses on its own transporter, and cytosolic citrate lyase splits it back at the cost of one ATP. The return leg is the part that pays: since there is no oxaloacetate transporter, oxaloacetate is reduced to malate, and malic enzyme converts malate to pyruvate and CO2 while generating NADPH — about half of the 14 NADPH a palmitate costs.",
      def_cn: "乙酰基离开线粒体所走的路线；之所以需要它，是因为内膜对乙酰-CoA 不通透。乙酰-CoA 与草酰乙酸缩合成柠檬酸，柠檬酸经自己的转运体过膜，胞质中的柠檬酸裂解酶花一个 ATP 把它劈回来。回程才是买单的那一半：既然没有草酰乙酸转运体，草酰乙酸就被还原成苹果酸，再由苹果酸酶转成丙酮酸和 CO₂，同时生成 NADPH——约占一分子软脂酸所需 14 个 NADPH 的一半。" },
    { en: "acetyl-CoA carboxylase", cn: "乙酰-CoA 羧化酶",
      def_en: "The biotin-dependent enzyme that carboxylates acetyl-CoA to malonyl-CoA using bicarbonate and ATP; irreversible, and the rate-limiting step of fatty acid synthesis. In animals a single multifunctional polypeptide whose biotin rides a long flexible arm between two active sites. The carboxyl it adds is eliminated again at the next step — its elimination is what makes the condensation favourable — so the CO2 contributes nothing to the product and the ATP buys thermodynamics rather than carbon.",
      def_cn: "依赖生物素的酶，用碳酸氢根和 ATP 把乙酰-CoA 羧化成丙二酰-CoA；反应不可逆，是脂肪酸合成的限速步骤。在动物体内是一条多功能多肽，其生物素装在一条长而柔软的臂上，在两个活性位点之间摆动。它加上的那个羧基在下一步又被消去——正是这次消去使缩合变得有利——所以 CO₂ 对产物毫无贡献，那个 ATP 买的是热力学而不是碳。" },
    { en: "fatty acid synthase I", cn: "脂肪酸合酶 I",
      def_en: "The mammalian synthase: seven catalytic activities as domains of one large polypeptide, working as a dimer. Because the acyl carrier protein is part of the same chain as every active site it feeds, no intermediate is ever released into solution. Bacteria and plants use separable enzymes for the same chemistry, which is why antibiotics and herbicides can be aimed at their version alone.",
      def_cn: "哺乳动物的合酶：七种催化活性作为同一条大多肽上的七个结构域，以二聚体形式工作。由于酰基载体蛋白与它所供给的每一个活性位点都在同一条链上，中间产物从不释放到溶液中。细菌和植物用可分离的一组酶做同样的化学，这正是抗生素与除草剂能只针对它们那一版的原因。" },
    { en: "the two cytosolic redox pools", cn: "胞质中的两个氧化还原库",
      def_en: "The measurement that explains how one compartment can build and break down at the same time. In a hepatocyte's cytosol [NADPH]/[NADP+] is about 75 — strongly reducing — while [NADH]/[NAD+] in the same cytosol is about 8 × 10⁻⁴. Anabolism draws on the first pool and catabolism on the second, so reductive fatty acid synthesis and oxidative glucose breakdown proceed side by side without interference.",
      def_cn: "解释「同一个隔间为何能同时造与拆」的那组实测数字。肝细胞胞质里 [NADPH]/[NADP⁺] 约为 75，强还原性；而同一份胞质里 [NADH]/[NAD⁺] 约为 8 × 10⁻⁴。合成代谢取用第一个库，分解代谢取用第二个，于是还原性的脂肪酸合成与氧化性的葡萄糖分解可以并行而互不干扰。" },
    { en: "reciprocal regulation by malonyl-CoA", cn: "丙二酰-CoA 的拮抗调控",
      def_en: "The single link that stops synthesis and beta oxidation running together as a futile cycle. Malonyl-CoA, the first committed intermediate of synthesis, inhibits carnitine acyltransferase I, the enzyme that loads fatty acids for carriage into the mitochondrion — so breakdown is blocked at the transport step the moment synthesis begins. It follows that in an animal, acetyl-CoA from fatty acid oxidation is not a significant source of material for fatty acid synthesis.",
      def_cn: "阻止合成与 β-氧化同时运行、形成无效循环的那一条连线。丙二酰-CoA 作为合成途径的第一个承诺中间物，抑制肉碱脂酰转移酶 I——那个把脂肪酸装载好、送进线粒体的酶——于是合成一开始，分解就在运输这一步被卡死。由此可知：在动物体内，脂肪酸氧化产生的乙酰-CoA 算不上脂肪酸合成的重要原料来源。" },
    { en: "essential fatty acids", cn: "必需脂肪酸",
      def_en: "Linoleate (18:2) and alpha-linolenate (18:3), which a mammal cannot make because it cannot introduce a double bond beyond carbon 9, and which must therefore come from plant material in the diet. That single synthetic limit is the entire definition. Linoleate yields arachidonate, the precursor of the eicosanoids; alpha-linolenate yields EPA and DHA.",
      def_cn: "亚油酸（18:2）与 α-亚麻酸（18:3）；哺乳动物无法在第 9 号碳之外引入双键，所以造不出它们，只能从膳食中的植物性材料获得。这一条合成上的限制就是「必需」二字的全部含义。亚油酸生成花生四烯酸，即类二十烷酸的前体；α-亚麻酸生成 EPA 与 DHA。" },
    { en: "mixed-function oxidase", cn: "混合功能氧化酶",
      def_en: "An enzyme class in which two different substrates are oxidised simultaneously by one molecule of O2. The fatty acyl-CoA desaturase oxidises both the acyl-CoA and NADPH, routing electrons through cytochrome b5 reductase and cytochrome b5, all three components sitting in the smooth endoplasmic reticulum. The lipoxygenases that make leukotrienes belong to the same class.",
      def_cn: "一类酶：两种不同的底物被同一个 O₂ 分子同时氧化。脂酰-CoA 去饱和酶同时氧化脂酰-CoA 和 NADPH，电子经细胞色素 b₅ 还原酶与细胞色素 b₅ 传递，三个组分都位于光面内质网。制造白三烯的脂加氧酶属于同一类。" },
    { en: "COX-1 and COX-2", cn: "COX-1 与 COX-2",
      def_en: "Two isozymes of prostaglandin H2 synthase, closely similar in sequence and different in role: one makes the prostaglandins that keep the stomach secreting protective mucin, the other those that mediate inflammation, pain and fever. Aspirin irreversibly acetylates a serine in the active site of both, which is why relieving pain through one costs stomach protection through the other. Drugs selective for the inflammation isozyme were built for that reason; two were withdrawn over cardiovascular risk.",
      def_cn: "前列腺素 H₂ 合酶的两个同工酶，序列高度相似而职责不同：一个制造让胃持续分泌保护性黏蛋白的前列腺素，另一个制造介导炎症、疼痛与发热的前列腺素。阿司匹林把两者活性位点上的一个丝氨酸不可逆地乙酰化——这就是「靠其一止痛，同时就要付出另一其保护胃的代价」的原因。针对炎症那个同工酶的选择性药物正是为此而造，其中两种因心血管风险被撤市。" },
    { en: "thromboxane A2 and leukotrienes", cn: "血栓烷 A₂ 与白三烯",
      def_en: "The two forks beyond PGH2. Thromboxane synthase in platelets makes thromboxane A2, which causes vasoconstriction and platelet aggregation — the basis of low-dose aspirin taken to lower heart attack and stroke risk. Leukotrienes are the linear products of the lipoxygenases and are not inhibited by aspirin or other non-steroidal anti-inflammatory drugs; since they drive bronchoconstriction, that is why those drugs do nothing for asthma.",
      def_cn: "PGH₂ 之后的两个分支。血小板中的血栓烷合酶造出血栓烷 A₂，引起血管收缩与血小板聚集——这正是「小剂量阿司匹林降低心梗与卒中风险」的依据。白三烯是脂加氧酶产生的线性产物，不被阿司匹林或其他非甾体抗炎药抑制；既然它们引起支气管收缩，这就是那些药对哮喘无效的原因。" }
  ]
};

/* ------------------------------------------------------------------ L-22-1-1 */
window.BIOLITE_SPINE["L-22-1-1"] = {
  assumed: ["ATP", "ADP", "AMP", "Pi", "NADH", "NADPH", "FAD", "enzyme", "substrate",
            "Km", "equilibrium", "allosteric", "reduction potential", "electron transfer",
            "proton gradient", "oxidative phosphorylation", "citric acid cycle",
            "chloroplast", "mitochondrion", "membrane", "phospholipid", "amino acid",
            "glutamate", "glutamine", "alpha-ketoglutarate", "transamination",
            "cholera", "G protein", "gene", "transcription", "O2", "haemoglobin"],
  nodeTitle_en: "Nitrogen metabolism — the overview",
  nodeTitle_cn: "氮代谢总览",
  title_en: "Four-fifths of the air, and almost none of it usable: what it costs to open one bond",
  title_cn: "空气的五分之四，却几乎全不可用：打开一根键要付多少钱",
  steps: [
    {
      en: "Four-fifths of the atmosphere is N2, and living things cannot use any of it. **The reason is one bond: the nitrogen-nitrogen triple bond has a bond energy of 930 kJ/mol, which makes N2 too unreactive to be of use.** Converting it into a form life can use is called nitrogen fixation, and almost all of the key reactions are carried out by bacteria and archaea rather than by plants or animals. More than 10^11 kg of nitrogen is fixed biologically each year, and industrial sources now supply nearly as much again.",
      cn: "**大气的五分之四是 N₂，而生物一点也用不上。** **原因就在一根键：氮氮三键的键能是 930 kJ/mol，这使 N₂ 惰性到无法被利用。** 把它转变成生命能用的形式，这件事叫**固氮（nitrogen fixation）**；而其中几乎所有关键反应都是由**细菌和古菌**完成的，不是植物、也不是动物。生物圈每年固定的氮超过 **10¹¹ kg**，而如今**工业来源的量已几乎与之相当**。",
      src: "A p.795–797, §22.1"
    },
    {
      link_en: "and the whole subject fits on one axis, which is worth drawing before any pathway",
      link_cn: "而整个题目可以画在一根轴上——在看任何通路之前先把它画出来",
      en: "Draw a vertical axis of the **oxidation number of the nitrogen atom**: nitrate at +5 at the top, down through nitrite, nitric oxide and nitrous oxide, past N2 gas at 0, to ammonia at −3 at the bottom. **Every named process is then a movement along that axis: fixation and assimilation go down, nitrification goes up, and denitrification and anammox come back to N2 in the middle.** The paths cross and rejoin often enough that nitrogen moves through a web rather than around a neat cycle, but the axis holds whatever the arrows do.",
      cn: "画一根竖轴，轴上是**氮原子的氧化数**：顶端是硝酸盐（+5），往下依次是亚硝酸盐、一氧化氮、一氧化二氮，经过 0 价的 N₂ 气体，一直到底端 −3 的氨。**这样一来，每一个有名字的过程都变成沿这根轴的一次移动：固氮和同化向下走，硝化向上走，反硝化与 anammox 回到中间的 N₂。** 这些路径彼此交叉、汇合的次数多到「循环」这个词不够用——氮是在一张**网**里移动的；但无论箭头怎么画，这根轴都成立。",
      src: "A p.795, figure 22-1",
      see: [{ id: "9-25", en: "nitrification and denitrification", cn: "硝化与反硝化" }]
    },
    {
      link_en: "one arrow on that web was missed entirely until the 1980s, and it may be the biggest",
      link_cn: "这张网上有一支箭直到 1980 年代才被发现，而它可能是最大的一支",
      en: "**Anammox is anaerobic ammonia oxidation: a group of bacteria converting ammonia and nitrite directly to N2, and as much as 50 % to 70 % of the biosphere's conversion of NH3 back to N2 may run through it.** The chemistry is strange. It proceeds through hydrazine, N2H4, which is used as a rocket fuel, is highly toxic, and diffuses straight across an ordinary phospholipid membrane. **The bacteria answer that by keeping the hydrazine inside a dedicated organelle, the anammoxosome, whose membrane is built from ladderane lipids — fused cyclobutane rings that stack into a barrier dense enough to slow the escape.** How a cell makes strained cyclobutane rings is not known. The organisms are planctomycetes, which turned out also to have their chromosomal DNA inside a membrane — a bacterial nucleus. In waste treatment, using them cuts the cost of removing ammonia by up to 90 %.",
      cn: "**anammox 就是「厌氧氨氧化」：一类细菌把氨和亚硝酸盐直接变成 N₂；而生物圈中「NH₃ 回到 N₂」这一步，可能有多达 50%–70% 是经由它完成的。** 它的化学很怪。**中间体是肼（hydrazine, N₂H₄）**——一种被用作火箭燃料的分子，剧毒，而且能直接扩散穿过普通的磷脂膜。**细菌的对策是把肼关在一个专门的细胞器里，叫 anammoxosome；它的膜由「梯烷脂质（ladderane）」构成——一串串稠合的环丁烷环，堆叠成致密到足以拖慢肼外逃的屏障。** 细胞怎么造出张力这么大的环丁烷环，目前不知道。这类生物是**浮霉菌（planctomycetes）**，人们后来还发现它们的染色体 DNA 被包在一层膜里——**一个细菌的「细胞核」**。在污水处理中用它们，可以把除氨成本降低多达 **90%**。",
      src: "A p.796, p.799, box 22-1"
    },
    {
      link_en: "and most biological ammonia never came from the air at all",
      link_cn: "而生物界的氨，大部分根本不是从空气里来的",
      en: "**More than 90 % of the NH4+ generated by vascular plants, algae and microorganisms comes from nitrate assimilation — a two-step reduction of nitrate already in the soil, which bypasses atmospheric N2 completely.** Nitrate reductase is the first of the two: it passes electrons from NADH through cysteine sulfhydryl groups, FAD and a cytochrome b557 to a molybdenum cofactor, and reduces nitrate to nitrite. Nitrite reductase then performs a **six-electron** reduction to NH4+, taking the electrons one at a time from ferredoxin through a 4Fe-4S centre and then a heme-like cofactor called siroheme. In plants that enzyme sits in the chloroplast; non-photosynthetic microbes use a different nitrite reductase with NADPH as donor.",
      cn: "**维管植物、藻类和微生物产生的 NH₄⁺ 中，超过 90% 来自「硝酸盐同化」**——把土壤里本来就有的硝酸盐分两步还原，**完全绕开大气中的 N₂**。**硝酸还原酶**把电子从 NADH 经半胱氨酸巯基、FAD、细胞色素 b₅₅₇ 送到一个**钼辅因子**，把硝酸盐还原成亚硝酸盐。**亚硝酸还原酶**接着做一次**六电子**还原，得到 NH₄⁺；电子由铁氧还蛋白**一次一个**地供给，经一个 4Fe-4S 中心，再经一个类血红素的辅因子 **siroheme（西罗血红素）**。在植物里这个酶位于叶绿体；非光合微生物用的是另一种亚硝酸还原酶，供体是 NADPH。",
      src: "A p.796",
      see: [{ id: "9-26", en: "nitrite reductase and the reductant it needs", cn: "亚硝酸还原酶与它需要的还原剂" }]
    },
    {
      link_en: "now the expensive arrow: what fixation actually costs",
      link_cn: "现在看那支最贵的箭：固氮到底花多少",
      en: "The equation is worth memorising whole: **N2 + 10 H+ + 8 e− + 16 ATP → 2 NH4+ + 16 ADP + 16 Pi + H2.** Two things in it need explaining. **Eight electrons rather than six, because six reduce N2 and two make one molecule of H2 — and producing that H2 is an obligate part of the mechanism.** And sixteen ATP, because the electrons are handed over one at a time: a reduced reductase binds, passes a single electron, and dissociates, and each turn of that cycle hydrolyses two ATP. Eight cycles at two ATP each is sixteen.",
      cn: "这条方程值得整条背下来：**N₂ + 10 H⁺ + 8 e⁻ + 16 ATP → 2 NH₄⁺ + 16 ADP + 16 Pᵢ + H₂。** 其中有两处需要解释。**为什么是八个电子而不是六个：六个用来还原 N₂，另外两个用来生成一分子 H₂——而放出这个 H₂ 是反应机制中必然的一部分。** 为什么是十六个 ATP：因为电子是**一次一个**交出去的——一个还原态的还原酶结合上去、递出一个电子、再解离；每一轮循环水解**两个 ATP**。八轮，每轮两个，就是十六个。",
      src: "A p.797, p.800",
      openQuestion_en: "What the obligatory H2 is biologically for is not understood. Say that the two extra electrons are mechanistically required, and stop there.",
      openQuestion_cn: "那个必然放出的 H₂ 在生物学上有什么用，目前并不清楚。答题时说「这两个额外的电子在机制上是必需的」，到此为止。",
      see: [{ id: "9-23", en: "nitrogenase and the fixation of atmospheric nitrogen", cn: "固氮酶与大气氮的固定" }]
    },
    {
      link_en: "for scale, compare the two ways of breaking that bond",
      link_cn: "为了有个尺度感，把打断那根键的两种办法放在一起比",
      en: "Industry breaks the same bond in the Haber process, at 400–500 °C and hundreds of atmospheres of pressure. **A bacterium does it at ambient temperature and 0.8 atm of nitrogen, and it pays for that in ATP instead of in heat and pressure.** The reaction is exergonic overall — the difficulty was never the thermodynamics, it was the activation barrier, and the sixteen ATP are spent getting over it.",
      cn: "工业上打断同一根键用的是**哈伯法（Haber process）**：400–500 °C、几百个大气压。**一个细菌在常温、0.8 atm 氮分压下就做成了同一件事，代价从「高温高压」换成了「ATP」。** 整个反应在总体上是放能的——**难点从来不是热力学，而是活化能垒**；那十六个 ATP 就是花在翻过这道垒上。",
      src: "A p.797"
    },
    {
      link_en: "what the enzyme is, and it is two proteins with an unusual amount of metal in them",
      link_cn: "这个酶是什么：两个蛋白，里面装着异乎寻常多的金属",
      en: "Only certain bacteria and archaea can fix nitrogen, and they are called diazotrophs: cyanobacteria, methanogenic archaea, free-living soil bacteria such as Azotobacter, and the symbionts inside legume root nodules. Their nitrogenase complex — the enzyme system that does the fixing — has two parts. **Dinitrogenase reductase, Mr 60,000, is a dimer holding a single 4Fe-4S centre between its two subunits, with one ATP/ADP site on each.** **Dinitrogenase, Mr 240,000, is an α2β2 tetramer carrying two metal clusters: the P cluster, which is two 4Fe-4S centres sharing a sulfur atom, and the FeMo cofactor — 7 Fe, 9 inorganic S, a Cys side chain, a single carbon atom sitting at the centre of the cluster, and a molybdenum bound to three sulfurs, a His side chain and two oxygens from a molecule of homocitrate.** The central carbon and the homocitrate are what make this more than an ordinary iron-sulfur centre.",
      cn: "只有某些细菌和古菌能固氮，它们叫**固氮微生物（diazotroph）**：蓝细菌、产甲烷古菌、像 Azotobacter 这样的自由生活土壤细菌，以及豆科根瘤里的共生菌。它们的**固氮酶（nitrogenase）复合体**分两部分。**固氮酶还原酶（dinitrogenase reductase），Mr 60,000，是一个二聚体，两个亚基之间夹着一个 4Fe-4S 中心，每个亚基上各有一个 ATP／ADP 位点。** **固氮酶（dinitrogenase），Mr 240,000，是 α₂β₂ 四聚体，带着两个金属簇：P 簇（两个共用一个硫原子的 4Fe-4S 中心），以及 FeMo 辅因子——7 个 Fe、9 个无机 S、一个 Cys 侧链、一个位于簇中央的碳原子，还有一个钼，它结合着三个硫、一个 His 侧链，以及来自一分子高柠檬酸（homocitrate）的两个氧。** 中央那个碳原子和那个高柠檬酸，正是让它不只是一个普通铁硫中心的地方。",
      src: "A p.797, p.800"
    },
    {
      link_en: "and now what the ATP is actually buying, since it is not buying thermodynamics",
      link_cn: "那么这些 ATP 到底买了什么——反正买的不是热力学",
      recall_en: "the reaction was already exergonic two steps up; so the ATP does something else",
      recall_cn: "上面第二步说过这个反应本来就是放能的，所以 ATP 是花在别处",
      en: "**ATP binding and ATP hydrolysis change the shape of the reductase, and two measurable things follow.** Electrochemically, binding two ATP shifts the reductase's reduction potential from −300 mV to −420 mV — turning a reductant that is not strong enough into one that is. Geometrically, the same binding brings the reductase's 4Fe-4S centre from **18 Å to 14 Å** from the P cluster, and four ångströms of approach is the difference between an electron transfer too slow to matter and one that works. The ATP are hydrolysed just before the electron actually moves. **The two regions of the reductase that change shape are structurally homologous with the switch 1 and switch 2 regions of GTP-binding signalling proteins — the same nucleotide-driven switch, used here to move an electron instead of to relay a hormone signal.**",
      cn: "**ATP 的结合与水解改变还原酶的构象，由此有两个可测量的后果。** 电化学上：**结合两个 ATP 使还原酶的还原电位从 −300 mV 移到 −420 mV**——把一个「不够强」的还原剂变成一个「够强」的。几何上：同一次结合把还原酶的 4Fe-4S 中心与 P 簇之间的距离**从 18 Å 拉近到 14 Å**；而这 4 Å 的靠近，正是「慢到没有意义的电子转移」与「行得通的电子转移」之间的差别。ATP 是在电子真正移动之前才被水解的。**还原酶上发生构象改变的那两个区域，在结构上与 GTP 结合信号蛋白的 switch 1、switch 2 区同源——同一种由核苷酸驱动的开关，在这里用来搬一个电子，而不是用来传递激素信号。**",
      src: "A p.800",
      openQuestion_en: "How electrons pass from the P cluster to the FeMo cofactor, and how eight of them are accumulated before N2 is released as ammonia, is not known in detail. Two hypotheses fit the data, both with the Mo atom central.",
      openQuestion_cn: "电子如何从 P 簇传到 FeMo 辅因子、以及八个电子是怎样被攒起来的，细节尚不清楚。有两个假说与现有数据相容，两者都把钼原子放在中心位置。"
    },
    {
      link_en: "and there is more than one version of the enzyme, which turns out to matter",
      link_cn: "这个酶还不止一个版本，而这件事是有后果的",
      en: "Two further nitrogenases exist, each with its own set of genes: one substituting **vanadium** for molybdenum, and one with a second **iron** atom in place of the Mo. **The molybdenum type is the ancestral one and is present in every nitrogen-fixing bacterium and archaeon; the alternatives are somewhat less efficient but matter where molybdenum is scarce or absent.** They also do chemistry the original does not: the vanadium enzyme of Azotobacter vinelandii can reduce carbon monoxide to ethylene, ethane and propane — a biological catalyst performing a reaction of serious industrial interest.",
      cn: "此外还存在**另外两种固氮酶**，各有各的一套基因：一种用**钒（vanadium）**代替钼，另一种在钼的位置上换成**第二个铁原子**。**含钼的那种是祖先型，存在于每一种固氮细菌和古菌里；另外两种效率略低，但在钼稀少或缺失的环境里就有了意义。** 它们还能做原版做不到的化学：**Azotobacter vinelandii 的含钒酶能把一氧化碳还原成乙烯、乙烷和丙烷**——一个生物催化剂在做一件工业上非常想做的反应。",
      src: "A p.800"
    },
    {
      link_en: "and the whole apparatus has one fatal weakness",
      link_cn: "而整套装置有一个致命弱点",
      en: "**Nitrogenase is destroyed by oxygen: in air the reductase has a half-life of 30 seconds and dinitrogenase 10 minutes.** Those two numbers reframe the subject — fixation is less a problem of running a reaction than of protecting a catalyst. Free-living fixers cope in three ways: some live only anaerobically; some stop making the enzyme whenever oxygen is present; and some aerobes, such as Azotobacter vinelandii, **partially uncouple electron transfer from ATP synthesis so as to burn oxygen off as fast as it enters the cell** — with the striking result that a culture fixing nitrogen warms up, from the effort of getting rid of oxygen.",
      cn: "**固氮酶会被氧气毁掉：在空气中，还原酶的半衰期是 30 秒，固氮酶本体是 10 分钟。** 这两个数字把整个题目重新定义了一遍——**固氮与其说是「怎么让反应跑起来」，不如说是「怎么保护一个催化剂」。** 自由生活的固氮菌有三种应对：有的干脆只在厌氧条件下生活；有的一旦有氧就停止合成这个酶；还有些好氧种，比如 Azotobacter vinelandii，**把电子传递与 ATP 合成部分解偶联，好把进入细胞的氧「一进来就烧掉」**——由此有一个惊人的结果：**正在固氮的这类菌的培养物会升温**，因为它正忙着摆脱氧气。",
      src: "A p.801"
    },
    {
      link_en: "and one partnership solves the energy problem and the oxygen problem at once",
      link_cn: "而有一种伙伴关系，一次解决了能量问题和氧气问题",
      recall_en: "the 16 ATP from the cost equation, and the 30-second half-life from the step above",
      recall_cn: "把「16 个 ATP」和上一步的「30 秒半衰期」两件事一起解决",
      en: "Bacteria living in legume root nodules get carbohydrate and citric acid cycle intermediates from the plant, which may let them fix hundreds of times more nitrogen than their free-living relatives — that is the energy half. **The oxygen half is solved by leghemoglobin, an oxygen-binding heme protein the plant makes, in which the bacteria are bathed: it binds all the free oxygen so none can reach the enzyme, while still delivering oxygen efficiently to the bacterial electron-transfer chain. It is an oxygen buffer rather than an oxygen barrier.** The symbionts make far more ammonia than the plant needs and release the surplus into the soil, **which is the whole basis of crop rotation — alternating a non-legume such as maize with a legume such as clover or alfalfa.** As for simply moving the genes into a crop plant: about 20 genes are needed for nitrogenase activity, many of them just to build and insert the cofactors, and the new host would still have to solve the oxygen problem.",
      cn: "住在豆科根瘤里的细菌从植物那里拿到**碳水化合物和柠檬酸循环中间物**，这可能让它们固定的氮比自由生活的同类多出几百倍——这是**能量**那一半。**氧气那一半由豆血红蛋白（leghemoglobin）解决：一种由植物合成的结合氧的血红素蛋白，细菌就泡在它的溶液里。它把所有游离的氧都结合住，使氧到不了那个酶跟前，同时又能高效地把氧交给细菌的电子传递链。它是一个氧的缓冲器，而不是一道氧的屏障。** 这些共生菌造出的氨远多于植物所需，把富余的释放进土壤——**这就是轮作（crop rotation）的全部依据：把玉米这类非豆科作物与三叶草、苜蓿这类豆科作物轮着种。** 至于「把基因搬进作物里」这个显而易见的办法：**固氮酶活性大约需要 20 个基因**，其中许多只是为了合成、组装并装入那些辅因子；而且新宿主仍然要自己解决氧气问题。",
      src: "A p.801–802"
    },
    {
      link_en: "sixteen ATP a time is not something a cell spends carelessly",
      link_cn: "一次十六个 ATP，这不是细胞会随便花的钱",
      en: "Fixation is regulated on three time scales. **Immediately, by energy charge: a high ADP concentration — which reports a low ATP concentration — strongly inhibits nitrogenase.** Over hours, by product: NH4+ represses the roughly 20 nif genes, so a bacterium that finds ammonia around it stops building the machinery at all. And covalently, in some species: **an ADP-ribosyl group is transferred from NADH onto one specific Arg residue of the reductase, switching fixation off.** That last is worth recognising, because it is the same modification the cholera and pertussis toxins make on a G protein — the toxin does to your signalling protein what the bacterium does to its own enzyme.",
      cn: "固氮在**三个时间尺度**上被调控。**即时的，看能量状态：高浓度的 ADP——它报告的是低浓度的 ATP——强烈抑制固氮酶。** 数小时尺度的，看产物：**NH₄⁺ 抑制那大约 20 个 nif 基因的表达**，所以一个在周围发现了氨的细菌，会干脆不再制造这套机器。还有共价修饰，见于某些种：**把一个 ADP-核糖基从 NADH 转移到还原酶上某个特定的 Arg 残基上，固氮就被关掉。** 最后这一条值得认出来，因为**霍乱毒素和百日咳毒素对 G 蛋白做的正是同一种修饰**——毒素对你的信号蛋白做的事，就是这种细菌对自己那个酶做的事。",
      src: "A p.801–802"
    },
    {
      link_en: "once ammonia exists, it enters biology through exactly two amino acids",
      link_cn: "氨一旦存在，它只经由两个氨基酸进入生物界",
      en: "**Glutamate and glutamine are the entry point: glutamate supplies the amino group of most other amino acids by transamination, and the amide nitrogen of glutamine supplies a wide range of biosyntheses.** The main assimilating route takes two enzymes. **Glutamine synthetase adds NH4+ to glutamate in two steps — through an enzyme-bound γ-glutamyl phosphate intermediate — giving glutamine plus ADP and Pi.** **Glutamate synthase — also called glutamate:oxoglutarate aminotransferase, hence GOGAT — then uses that glutamine to reductively aminate α-ketoglutarate, giving two glutamates.** Net, the pair converts α-ketoglutarate, NH4+, NAD(P)H and ATP into glutamate. Aminating α-ketoglutarate in one step with glutamate dehydrogenase is a third, minor route: its equilibrium favours the reactants and its Km for NH4+ is around 1 mM, too high to matter for assimilation in a mammal. **Animals have no glutamate synthase at all and keep their glutamate topped up by transamination instead; plants have a second form of it that runs on reduced ferredoxin.**",
      cn: "**入口只有两个氨基酸：谷氨酸和谷氨酰胺。谷氨酸经转氨作用为其余大多数氨基酸提供氨基，谷氨酰胺的酰胺氮则为一大批生物合成反应提供氮。** 主要的同化路线要用两个酶。**谷氨酰胺合成酶（glutamine synthetase）分两步把 NH₄⁺ 加到谷氨酸上，中间经过一个与酶结合的 γ-谷氨酰磷酸中间体，产物是谷氨酰胺加 ADP 和 Pᵢ。** **谷氨酸合酶（glutamate synthase）——又名 glutamate:oxoglutarate aminotransferase，缩写 GOGAT——再用这个谷氨酰胺把 α-酮戊二酸还原氨基化，生成两分子谷氨酸。** 净结果是：这一对把 α-酮戊二酸、NH₄⁺、NAD(P)H 和 ATP 变成谷氨酸。**用谷氨酸脱氢酶一步把 α-酮戊二酸氨基化，是第三条、次要的路线**：它的平衡偏向反应物一侧，而它对 NH₄⁺ 的 Km 约为 1 mM，高到在哺乳动物体内对同化没有意义。**动物根本没有谷氨酸合酶，改用转氨作用来维持谷氨酸水平；植物则另有一种用还原态铁氧还蛋白的谷氨酸合酶。**",
      src: "A p.802–803",
      see: [{ id: "9-24", en: "ammonia assimilation onto alpha-oxoglutarate", cn: "氨在 α-氧代戊二酸上的同化" }]
    },
    {
      link_en: "and the first of those two enzymes is where nitrogen metabolism is actually controlled",
      link_cn: "而这两个酶里的第一个，正是氮代谢真正的控制点",
      en: "**Alanine, glycine and at least six end products of glutamine metabolism are all allosteric inhibitors of bacterial glutamine synthetase, and each alone inhibits only partially — but their effects together are more than additive, and all eight at once virtually shut the enzyme down.** That is cumulative feedback inhibition, and the design logic is worth stating: no single downstream product can close a shared entry point on its own, while a general excess across many products can. **Superimposed on that is adenylylation — an AMP attached to Tyr397 near the active site — which makes the enzyme more sensitive to those allosteric inhibitors rather than switching it off outright.** Which subunits get adenylylated is decided by a further cascade: an adenylyltransferase whose direction is set by a regulatory protein, PII, which is itself uridylylated or not depending on glutamine, Pi, α-ketoglutarate and ATP — and the same PII also controls transcription of the synthetase's own gene. **Net effect: activity falls when glutamine is plentiful and rises when glutamine is scarce and its substrates are available.**",
      cn: "**丙氨酸、甘氨酸，以及至少六种谷氨酰胺代谢的终产物，都是细菌谷氨酰胺合成酶的别构抑制剂；每一种单独作用时只造成部分抑制——但它们合在一起的效果超过简单相加，八种同时存在几乎把这个酶完全关停。** 这叫**累积反馈抑制（cumulative feedback inhibition）**，其设计逻辑值得说出来：**任何单一的下游产物都无权独自关掉一个共用的入口，而「多种产物普遍过剩」这件事可以。** **叠在上面的是腺苷酰化（adenylylation）——在活性位点附近的 Tyr397 上接一个 AMP；它的作用是让这个酶对上述别构抑制剂更敏感，而非把酶直接关掉。** 哪些亚基被腺苷酰化，又由再上一层的级联决定：一个腺苷酰转移酶，其方向由调节蛋白 **PII** 设定，而 PII 自身是否被尿苷酰化，取决于谷氨酰胺、Pᵢ、α-酮戊二酸和 ATP——**而同一个 PII 还控制着这个合成酶自身基因的转录。** **净效果是：谷氨酰胺充裕时活性下降，谷氨酰胺稀缺而底物又充足时活性上升。**",
      src: "A p.803–804"
    },
    {
      link_en: "and three kinds of reaction recur through everything that follows",
      link_cn: "最后，有三类反应会贯穿后面所有内容",
      en: "**Three chemistries do most of the work in amino acid and nucleotide biosynthesis: transaminations and related rearrangements run by enzymes carrying pyridoxal phosphate; transfers of one-carbon groups, using tetrahydrofolate at the −CHO and −CH2OH oxidation levels and S-adenosylmethionine at the −CH3 level; and transfers of the amide nitrogen of glutamine.** The last is done by the glutamine amidotransferases, and their architecture is the memorable part. **Each has two domains: one binds glutamine, where a conserved Cys attacks the amide through a glutamyl-enzyme intermediate and releases NH3; the other binds the acceptor, usually after that acceptor has been activated, for instance with a phosphoryl group from ATP that makes a hydroxyl displaceable. The NH3 travels between the two active sites down an internal channel.** **The channel is the whole point: free ammonia is toxic and would simply diffuse away, so it is tunnelled from where it is made to where it is used without ever entering solution — which is why glutamine, and not free NH4+, is the practical nitrogen donor for a dozen biosyntheses.**",
      cn: "**在氨基酸与核苷酸的生物合成里，三类化学承担了大部分工作：由携带磷酸吡哆醛（PLP）的酶完成的转氨作用及相关重排；一碳单位的转移——四氢叶酸负责 −CHO 与 −CH₂OH 氧化态，S-腺苷甲硫氨酸负责 −CH₃ 态；以及谷氨酰胺酰胺氮的转移。** 最后这一类由**谷氨酰胺酰胺转移酶（glutamine amidotransferase）**完成，而它们的架构才是值得记的部分。**每一个都有两个结构域：一个结合谷氨酰胺，那里有一个保守的 Cys 进攻酰胺、经谷氨酰-酶中间体把 NH₃ 释放出来；另一个结合受体，而受体通常先被活化过，例如接上一个来自 ATP 的磷酰基、使某个羟基变得可被取代。NH₃ 则沿着一条内部通道，从一个活性位点走到另一个。** **这条通道就是全部要点：游离氨有毒，而且会径直扩散跑掉；所以它被从「生成处」直接隧穿到「使用处」，全程不进入溶液——这正是十几种生物合成反应实际上的氮供体是谷氨酰胺、而不是游离 NH₄⁺ 的原因。**",
      src: "A p.804",
      see: [
        { id: "5-2-1-2", en: "transamination and the PLP mechanism", cn: "转氨基作用与 PLP 机制" },
        { id: "L-22-4-1", en: "where the glutamine amide nitrogen actually goes — the purine ring", cn: "谷氨酰胺的酰胺氮最终去了哪里——嘌呤环" }
      ]
    }
  ],
  terms: [
    { en: "the nitrogen web", cn: "氮的「网」",
      def_en: "The organising picture for this whole subject: a vertical axis of the oxidation number of the nitrogen atom, from nitrate at +5 down through nitrite, nitric oxide and nitrous oxide, past N2 at 0, to ammonia at −3. Fixation and assimilation move down it, nitrification moves up, denitrification and anaerobic ammonia oxidation return to N2 in the middle. The paths cross and rejoin often enough that the older single-cycle picture no longer holds.",
      def_cn: "整个题目的组织图景：一根竖轴，标的是氮原子的氧化数——顶端硝酸盐 +5，往下经亚硝酸盐、一氧化氮、一氧化二氮，过 0 价的 N₂，到底端 −3 的氨。固氮与同化沿轴向下，硝化向上，反硝化与厌氧氨氧化回到中间的 N₂。这些路径交叉汇合得太频繁，旧的「单一循环」图景已经不够用。" },
    { en: "anammox and the anammoxosome", cn: "anammox 与 anammoxosome",
      def_en: "Anaerobic ammonia oxidation converts ammonia and nitrite straight to N2, and as much as 50–70 % of the biosphere's return of NH3 to N2 may go this way, though it went undetected until the 1980s. It runs through hydrazine — a rocket fuel, toxic, and freely diffusible across an ordinary membrane — which the bacteria keep inside a dedicated organelle walled with ladderane lipids, fused cyclobutane rings stacked into a very dense barrier. The organisms are planctomycetes, which also keep their DNA inside a membrane. In waste treatment they cut ammonia-removal costs by up to 90 %.",
      def_cn: "厌氧氨氧化把氨和亚硝酸盐直接变成 N₂；生物圈中「NH₃ 回到 N₂」可能有 50%–70% 走这条路，而它直到 1980 年代才被发现。它的中间体是肼——火箭燃料，有毒，且能自由扩散穿过普通膜——细菌把它关在一个专门的细胞器里，其膜由梯烷脂质构成，即堆叠成极致密屏障的稠合环丁烷环。这类生物是浮霉菌，它们的 DNA 也被包在一层膜里。在污水处理中，它们能把除氨成本降低多达 90%。" },
    { en: "the nitrogenase complex", cn: "固氮酶复合体",
      def_en: "Two proteins. The reductase, Mr 60,000, is a dimer holding one 4Fe-4S centre between its subunits with an ATP/ADP site on each, and it delivers one electron per binding cycle at a cost of two ATP. The dinitrogenase, Mr 240,000, is an α2β2 tetramer carrying a P cluster (two 4Fe-4S centres sharing a sulfur) and the FeMo cofactor — 7 Fe, 9 inorganic S, a Cys side chain, a central carbon atom, and a Mo bound to three sulfurs, a His and two oxygens of homocitrate.",
      def_cn: "两个蛋白。还原酶 Mr 60,000，二聚体，两亚基之间夹着一个 4Fe-4S 中心，每个亚基上各一个 ATP／ADP 位点；每结合一轮递出一个电子，代价是两个 ATP。固氮酶本体 Mr 240,000，α₂β₂ 四聚体，带一个 P 簇（两个共用一个硫的 4Fe-4S 中心）和一个 FeMo 辅因子——7 个 Fe、9 个无机 S、一个 Cys 侧链、一个中央碳原子，以及一个结合三个硫、一个 His 和高柠檬酸两个氧的钼。" },
    { en: "the fixation stoichiometry", cn: "固氮的化学计量",
      def_en: "N2 + 10 H+ + 8 e− + 16 ATP → 2 NH4+ + 16 ADP + 16 Pi + H2. Six of the eight electrons reduce N2 and two make one H2, whose production is an obligate part of the mechanism although what it is biologically for is unknown. Electrons cross one at a time, two ATP per cycle, eight cycles. Compare the Haber process, which needs 400–500 °C and hundreds of atmospheres for the same bond.",
      def_cn: "N₂ + 10 H⁺ + 8 e⁻ + 16 ATP → 2 NH₄⁺ + 16 ADP + 16 Pᵢ + H₂。八个电子里六个用于还原 N₂，两个用于生成一分子 H₂；放出这个 H₂ 是机制中必然的一部分，但它在生物学上有什么用并不清楚。电子一次一个地传递，每轮两个 ATP，共八轮。对照哈伯法：打断同一根键需要 400–500 °C 和几百个大气压。" },
    { en: "oxygen lability and leghemoglobin", cn: "对氧的不稳定性与豆血红蛋白",
      def_en: "In air the reductase has a half-life of 30 seconds and the dinitrogenase 10 minutes, so fixation is as much a problem of protecting a catalyst as of running a reaction. Free-living fixers go anaerobic, stop making the enzyme, or partially uncouple electron transfer to burn oxygen off — such cultures actually warm up. Legume nodules bathe their bacteria in a plant-made oxygen-binding heme protein that holds all the free oxygen while still feeding the bacterial electron-transfer chain: a buffer rather than a barrier. The surplus ammonia released into the soil is the basis of crop rotation.",
      def_cn: "在空气中，还原酶半衰期 30 秒，固氮酶本体 10 分钟；所以固氮既是「怎么跑反应」的问题，也同样是「怎么保护催化剂」的问题。自由生活的固氮菌或者转入厌氧，或者停止合成该酶，或者把电子传递部分解偶联以烧掉氧——这样的培养物真的会升温。豆科根瘤让细菌浸在植物合成的一种结合氧的血红素蛋白溶液里，它扣住全部游离氧，同时仍向细菌的电子传递链供氧：是缓冲器而非屏障。释放到土壤中的富余氨，正是轮作的依据。" },
    { en: "glutamine synthetase plus glutamate synthase", cn: "谷氨酰胺合成酶 + 谷氨酸合酶",
      def_en: "The main route by which ammonia enters biology. The synthetase adds NH4+ to glutamate in two steps through an enzyme-bound γ-glutamyl phosphate, giving glutamine, ADP and Pi; glutamate synthase then reductively aminates α-ketoglutarate using that glutamine as donor, giving two glutamates. Aminating α-ketoglutarate directly with glutamate dehydrogenase is a minor third route, since its equilibrium favours the reactants and its Km for NH4+ near 1 mM is too high to matter in a mammal. Animals lack glutamate synthase entirely; plants have a ferredoxin-driven form of it.",
      def_cn: "氨进入生物界的主要路线。合成酶分两步把 NH₄⁺ 加到谷氨酸上，中间经一个与酶结合的 γ-谷氨酰磷酸，产物是谷氨酰胺、ADP 和 Pᵢ；谷氨酸合酶再以该谷氨酰胺为供体，把 α-酮戊二酸还原氨基化，生成两分子谷氨酸。用谷氨酸脱氢酶直接把 α-酮戊二酸氨基化是次要的第三条路：其平衡偏向反应物，且对 NH₄⁺ 的 Km 约 1 mM，对哺乳动物而言过高。动物完全没有谷氨酸合酶；植物另有一种由铁氧还蛋白驱动的形式。" },
    { en: "cumulative feedback inhibition", cn: "累积反馈抑制",
      def_en: "How bacterial glutamine synthetase is controlled: alanine, glycine and at least six end products of glutamine metabolism each inhibit only partially, but their combined effect is more than additive and all eight together virtually stop the enzyme. The logic is that no single downstream product may close a shared entry point on its own, while a general excess may. Adenylylation of Tyr397 is superimposed and makes the enzyme more sensitive to those inhibitors; a further cascade through the PII protein decides the adenylylation and also controls transcription of the gene.",
      def_cn: "细菌谷氨酰胺合成酶的调控方式：丙氨酸、甘氨酸以及至少六种谷氨酰胺代谢终产物，各自单独只造成部分抑制，但合起来的效果超过简单相加，八种同时存在几乎让酶停摆。其逻辑是：任何单一下游产物都不该独自关掉一个共用入口，而普遍性的过剩可以。叠加其上的是 Tyr397 的腺苷酰化，它使该酶对上述抑制剂更敏感；再上一层经 PII 蛋白的级联决定腺苷酰化的方向，并同时控制该基因的转录。" },
    { en: "glutamine amidotransferase and its ammonia channel", cn: "谷氨酰胺酰胺转移酶与它的氨通道",
      def_en: "The enzyme class that hands the amide nitrogen of glutamine to more than a dozen biosynthetic acceptors. Two domains: one binds glutamine, where a conserved Cys attacks the amide through a glutamyl-enzyme intermediate and frees NH3; the other binds the acceptor, usually after it has been activated, for instance by a phosphoryl group from ATP. The NH3 travels between them through an internal channel, so a toxic, freely diffusible intermediate never enters solution — which is why glutamine rather than free NH4+ is the practical nitrogen donor.",
      def_cn: "把谷氨酰胺的酰胺氮交给十几种生物合成受体的那一类酶。两个结构域：一个结合谷氨酰胺，其中一个保守的 Cys 经谷氨酰-酶中间体进攻酰胺、释出 NH₃；另一个结合受体，而受体通常已被活化过，例如接上来自 ATP 的一个磷酰基。NH₃ 则经一条内部通道在两者之间穿行，于是一个有毒且能自由扩散的中间体全程不进入溶液——这正是实际的氮供体是谷氨酰胺而非游离 NH₄⁺ 的原因。" }
  ]
};

/* ------------------------------------------------------------------ L-22-2-1 */
window.BIOLITE_SPINE["L-22-2-1"] = {
  assumed: ["ATP", "ADP", "NADH", "NADPH", "enzyme", "allosteric", "isoenzyme",
            "glycolysis", "citric acid cycle", "pentose phosphate pathway",
            "pyruvate", "oxaloacetate", "alpha-ketoglutarate", "3-phosphoglycerate",
            "phosphoenolpyruvate", "ribose 5-phosphate", "erythrose 4-phosphate",
            "glutamate", "glutamine", "serine", "glycine", "cysteine", "proline",
            "arginine", "ornithine", "citrulline", "urea cycle", "methionine",
            "threonine", "lysine", "isoleucine", "valine", "leucine", "alanine",
            "aspartate", "asparagine", "tryptophan", "phenylalanine", "tyrosine",
            "histidine", "transamination", "S-adenosylmethionine", "tetrahydrofolate"],
  nodeTitle_en: "Biosynthesis of amino acids",
  nodeTitle_cn: "氨基酸的生物合成",
  title_en: "Six on-ramps of very unequal length, and what the long one costs a plant",
  title_cn: "六条长短悬殊的匝道，以及最长那条让植物付出了什么",
  steps: [
    {
      en: "Amino acid biosynthesis is not one pathway but **six unrelated on-ramps**, each starting from a metabolite already familiar from glycolysis, the citric acid cycle or the pentose phosphate pathway, with the nitrogen entering through glutamate and glutamine. **How long each on-ramp is turns out to be the thing that decides whether a mammal can build that amino acid at all — which means the words essential and nonessential are really a statement about pathway length.**",
      cn: "氨基酸的生物合成**不是一条途径，而是六条彼此无关的匝道**；每条的起点都是糖酵解、柠檬酸循环或磷酸戊糖途径里已经熟悉的某个代谢物，而**氮**则经谷氨酸和谷氨酰胺进入。**每条匝道有多长，恰恰决定了哺乳动物能不能造出对应的那个氨基酸——也就是说，「必需」与「非必需」这两个词，说的其实是「途径有多长」。**",
      src: "A p.805–806, §22.2, table 22-1"
    },
    {
      link_en: "the six, named by where each one starts",
      link_cn: "这六条，按各自的起点命名",
      en: "**α-Ketoglutarate** gives glutamate, glutamine, proline and arginine. **Pyruvate** gives alanine, valine, leucine and isoleucine. **3-Phosphoglycerate** gives serine, glycine and cysteine. **Oxaloacetate** gives aspartate and asparagine, and by longer routes methionine, threonine, lysine and isoleucine. **Phosphoenolpyruvate plus erythrose 4-phosphate** gives the three aromatic amino acids. **Ribose 5-phosphate** gives histidine. Ten of the twenty sit one or a few steps from their family's precursor; the aromatics are far away from theirs, and that asymmetry is why all twenty cannot be treated alike.",
      cn: "**α-酮戊二酸**给出谷氨酸、谷氨酰胺、脯氨酸、精氨酸。**丙酮酸**给出丙氨酸、缬氨酸、亮氨酸、异亮氨酸。**3-磷酸甘油酸**给出丝氨酸、甘氨酸、半胱氨酸。**草酰乙酸**给出天冬氨酸和天冬酰胺，并经更长的路线给出甲硫氨酸、苏氨酸、赖氨酸、异亮氨酸。**磷酸烯醇式丙酮酸加赤藓糖-4-磷酸**给出三种芳香族氨基酸。**核糖-5-磷酸**给出组氨酸。**二十种里有十种离本家族的前体只有一步或几步；而三种芳香族离自己的前体极远**——正是这种不对称，使得二十种氨基酸没法被一视同仁地对待。",
      src: "A p.806, table 22-1"
    },
    {
      link_en: "which turns the essential/nonessential split into something you can derive",
      link_cn: "于是「必需／非必需」这个划分变成可以推出来的东西",
      en: "**Plants and most bacteria synthesise all twenty; a mammal makes only about half, generally the ones with short pathways, and those are the ones called nonessential.** **The label is misleading in one specific way worth quoting: an innate pathway that exists may still not supply enough for optimal growth and health.** A few amino acids sit between the two categories and are called conditionally essential — needed at particular developmental stages, or non-essential only while some other supply holds up.",
      cn: "**植物和大多数细菌能合成全部二十种；哺乳动物只造得出大约一半，一般正是途径短的那些——这些就被叫作「非必需」。** **这个标签在一个具体的地方会误导人，值得原样记住：一条天生就有的途径，仍然可能供不上「最佳生长与健康」所需的量。** 还有少数氨基酸夹在两类之间，叫**条件必需**——只在特定发育阶段才需要，或者只在别的某项供应还撑得住时才算非必需。",
      src: "A p.805, p.816"
    },
    {
      link_en: "the shortest walk in the section, and it hides a chemical hazard",
      link_cn: "本节最短的一条路，而它藏着一个化学上的隐患",
      en: "Proline is a cyclised glutamate, and the route is almost trivially short: ATP phosphorylates glutamate's γ-carboxyl, NADPH or NADH reduces it to glutamate γ-semialdehyde, **that semialdehyde cyclises spontaneously with no enzyme at all**, and one more reduction gives proline. **The hazard is exactly that spontaneity: an intermediate that ring-closes by itself cannot be stopped from doing so, which becomes a problem the moment a cell wants to carry that same intermediate somewhere else.**",
      cn: "**脯氨酸就是环化了的谷氨酸**，路线短得近乎平凡：ATP 把谷氨酸的 γ-羧基磷酸化，NADPH 或 NADH 把它还原成**谷氨酸-γ-半醛**，**这个半醛不需要任何酶就会自发环化**，再还原一次就得到脯氨酸。**隐患恰恰就在这个「自发」上：一个会自己关环的中间体，是没法叫它别关的——而细胞一旦想把这同一个中间体带去别处，这就成了问题。**",
      src: "A p.806–807"
    },
    {
      link_en: "and the next pathway spends two extra steps doing nothing but preventing it",
      link_cn: "而下一条途径多花两步，干的事只有一件：阻止它关环",
      recall_en: "the spontaneous cyclisation from the step above is the thing being blocked",
      recall_cn: "上一步那个自发环化，正是这里要挡掉的东西",
      en: "In bacteria, arginine is built from the same glutamate γ-semialdehyde — **so the pathway first acetylates glutamate's α-amino group, which blocks the ring closure, does its transamination, and then removes the acetyl group again to give ornithine.** **Two steps that add no atoms to the product and exist purely to keep an intermediate from reacting with itself.** Ornithine then continues through citrulline and argininosuccinate to arginine, along steps that parallel the urea cycle. **A mammal runs none of this: it obtains proline from arginine instead, using the urea cycle enzyme arginase — and when dietary arginine falls short, the same intermediates are read in the opposite direction and feed the urea cycle back toward arginine.**",
      cn: "在细菌里，精氨酸是从**同一个**谷氨酸-γ-半醛造起的——**所以这条途径先把谷氨酸的 α-氨基乙酰化，把关环这条路堵死，做完转氨之后，再把乙酰基去掉，得到鸟氨酸。** **这多出来的两步没给产物添一个原子，存在的唯一目的就是不让中间体自己跟自己反应。** 鸟氨酸接着经瓜氨酸、精氨酸代琥珀酸走到精氨酸，这几步与尿素循环平行。**哺乳动物完全不走这条路：它改为用尿素循环里的精氨酸酶，从精氨酸得到脯氨酸——而当膳食精氨酸不足时，同样这几个中间体被反方向读取，把尿素循环推回精氨酸那一侧。**",
      src: "A p.806–808"
    },
    {
      link_en: "the 3-phosphoglycerate family, and one step of it belongs to another subject entirely",
      link_cn: "3-磷酸甘油酸家族，其中有一步整个属于另一个题目",
      en: "Serine's route is the same in every organism: 3-phosphoglycerate's hydroxyl is oxidised, transamination from glutamate follows, and a phosphatase releases free serine. **Serine then becomes glycine by losing one carbon, and that carbon is not discarded — serine hydroxymethyltransferase hands it to tetrahydrofolate as N5,N10-methylene-tetrahydrofolate.** **So this is not only an amino acid pathway; it is the cell's main supply line for one-carbon units, which is what nucleotide synthesis runs on.** Vertebrate liver has a second route to glycine, running the glycine cleavage reaction backwards.",
      cn: "**丝氨酸的路线在所有生物里都一样**：3-磷酸甘油酸的羟基被氧化，接着由谷氨酸转氨，再由一个磷酸酶放出游离的丝氨酸。**丝氨酸随后失去一个碳变成甘氨酸，而这个碳并没有被丢掉——丝氨酸羟甲基转移酶把它交给四氢叶酸，形成 N⁵,N¹⁰-亚甲基四氢叶酸。** **所以这不只是一条氨基酸途径；它同时是细胞「一碳单位」的主要供应线，而核苷酸合成正是靠一碳单位跑的。** 脊椎动物肝脏另有一条通向甘氨酸的路：把甘氨酸裂解反应反过来跑。",
      src: "A p.806–808",
      see: [{ id: "L-22-4-1", en: "where those one-carbon units are spent", cn: "这些一碳单位花在哪里" }]
    },
    {
      link_en: "and cysteine is the clearest case of two kingdoms solving one problem differently",
      link_cn: "而半胱氨酸是「两个界用两种办法解决同一个问题」最清楚的例子",
      en: "**The question for cysteine is where the sulfur comes from.** Plants and bacteria reduce sulfate taken from the environment — an eight-electron reduction, through an activated form called PAPS — and use the resulting sulfide to convert serine to cysteine in two steps. **A mammal cannot do that reduction at all, so it cannibalises methionine instead: methionine to S-adenosylmethionine, then demethylation and hydrolysis to homocysteine, which condenses with serine to give cystathionine, and a PLP-dependent lyase cuts that to free cysteine.** **So mammalian cysteine is assembled from two different amino acids at once — methionine donates the sulfur, serine donates the carbon skeleton — which is why a diet short of methionine shows up as a shortage of cysteine.**",
      cn: "**半胱氨酸的问题在于：硫从哪来。** 植物和细菌把从环境里取来的**硫酸盐**还原掉——这是一次**八电子还原**，经由一种活化形式 **PAPS**——再用得到的硫化物分两步把丝氨酸变成半胱氨酸。**哺乳动物根本做不了这次还原，于是改为拆甲硫氨酸来取硫：甲硫氨酸 → S-腺苷甲硫氨酸，脱甲基并水解得到同型半胱氨酸，后者与丝氨酸缩合生成胱硫醚，再由一个依赖 PLP 的裂解酶切开，得到游离半胱氨酸。** **所以哺乳动物的半胱氨酸是由两个不同的氨基酸拼起来的——甲硫氨酸出硫，丝氨酸出碳骨架——这也是为什么膳食中甲硫氨酸不足，表现出来会是半胱氨酸不足。**",
      src: "A p.808–809"
    },
    {
      link_en: "the simplest pathways of all turn out to have a clinical use, precisely because they are simple",
      link_cn: "最简单的那几条途径反而有临床用途——正因为它们简单",
      en: "Alanine and aspartate are made by straightforward transamination from pyruvate and oxaloacetate; asparagine follows by amidating aspartate, with glutamine donating the nitrogen. **The malignant lymphocytes of childhood acute lymphoblastic leukaemia make little or no asparagine synthetase, so they cannot make their own asparagine and live entirely on what circulates in the blood.** **Treatment attacks exactly that gap: bacterial L-asparaginase is given to strip asparagine out of the serum, starving the leukaemic cells while normal cells, which still have the enzyme, carry on making their own.** Combined with chemotherapy this reaches over 95 % remission, against 40–60 % for the enzyme alone; about 10 % of remissions later relapse with resistant tumours.",
      cn: "丙氨酸和天冬氨酸是由丙酮酸、草酰乙酸直接转氨而来；天冬酰胺则由天冬氨酸酰胺化得到，氮由谷氨酰胺提供。**儿童急性淋巴细胞白血病的恶性淋巴细胞几乎不产生天冬酰胺合成酶，所以造不出自己的天冬酰胺，完全靠血中循环的那一份活着。** **治疗打的正是这个缺口：给予细菌来源的 L-天冬酰胺酶，把血清里的天冬酰胺清空，把白血病细胞饿死；而正常细胞仍有该酶，照样自己合成。** 与化疗联用时缓解率超过 **95%**，单用该酶为 40–60%；约 **10%** 的缓解后来会复发为耐药肿瘤。",
      src: "A p.809–810"
    },
    {
      link_en: "the oxaloacetate and pyruvate families are a web rather than a family tree",
      link_cn: "草酰乙酸和丙酮酸这两个家族是一张网，而不是一棵家谱树",
      en: "From aspartate, one branch point — aspartate β-semialdehyde — feeds methionine, threonine **and** lysine; a second, homoserine, splits between threonine and methionine; **and threonine is then itself the precursor of isoleucine, so a change far upstream ripples out into several end products at once.** From pyruvate, valine and isoleucine share four enzymes on parallel routes, and an intermediate of the valine route, α-ketoisovalerate, starts a separate four-step branch to leucine. **This tangle is the reason the regulation described at the end of this node has to be as elaborate as it is: with shared steps everywhere, a naive feedback signal would shut down the wrong products.**",
      cn: "从天冬氨酸出发，一个分支点——**天冬氨酸-β-半醛**——同时供给甲硫氨酸、苏氨酸**和**赖氨酸；第二个分支点**高丝氨酸**在苏氨酸与甲硫氨酸之间分岔；**而苏氨酸本身又是异亮氨酸的前体，于是上游很远处的一个变动，会同时波及好几个终产物。** 从丙酮酸出发，缬氨酸与异亮氨酸在平行的路线上共用四个酶；缬氨酸路线上的一个中间体 **α-酮异戊酸**，又另起一条四步的支路通向亮氨酸。**这张缠结的网，正是本节点末尾那套调控必须如此精细的原因：到处都是共用步骤，一个天真的反馈信号会关错东西。**",
      src: "A p.810"
    },
    {
      link_en: "and now the long on-ramp, which is long for a chemical reason",
      link_cn: "现在是那条长匝道——它之所以长，有一个化学上的理由",
      en: "**An aromatic ring is stable once it exists, but the environment does not hand a cell one, so it has to be built: a ring is closed from an aliphatic precursor and double bonds are then added stepwise. That is the main biological route to an aromatic ring at all.** Four steps from erythrose 4-phosphate and phosphoenolpyruvate give the seven-carbon **shikimate**; three more, adding three carbons from a second phosphoenolpyruvate, give **chorismate**, which is the branch point — tryptophan on one side, phenylalanine and tyrosine on the other.",
      cn: "**一个芳香环一旦形成就很稳定，但环境不会白送给细胞一个，所以它必须自己造：先由一个脂肪族前体关环，再一步步装上双键。这就是生物学上生成芳香环的主要途径——几乎是唯一的。** 从赤藓糖-4-磷酸与磷酸烯醇式丙酮酸走四步，得到七碳的**莽草酸（shikimate）**；再走三步，由第二个磷酸烯醇式丙酮酸补上三个碳，得到**分支酸（chorismate）**——**这就是分岔口**：一边通向色氨酸，另一边通向苯丙氨酸和酪氨酸。",
      src: "A p.811"
    },
    {
      link_en: "and a pathway one kingdom has and another lacks is a free drug target",
      link_cn: "一个界有、另一个界没有的途径，就是一个白送的药靶",
      recall_en: "mammals make only the short on-ramps, from the third step of this spine",
      recall_cn: "本条主线第三步说过：哺乳动物只保留了短匝道",
      en: "**The herbicide glyphosate competitively inhibits one step on the way from shikimate to chorismate, and it is relatively non-toxic to mammals for one reason only: a mammal has no such pathway to inhibit.** **The selectivity is an evolutionary accident rather than a piece of clever design against a shared target — and it is the cleanest illustration in this node of why pathway length matters beyond nutrition.**",
      cn: "**除草剂草甘膦（glyphosate）竞争性抑制「莽草酸→分支酸」路上的一步；它对哺乳动物相对无毒，理由只有一个：哺乳动物根本没有这条途径可供抑制。** **这种选择性是演化留下的偶然，而不是针对共有靶点的精巧设计——它也是本节点里最干净的一个例证：途径的长短，其意义远不止营养学。**",
      src: "A p.811"
    },
    {
      link_en: "one enzyme on the tryptophan branch does something worth seeing",
      link_cn: "色氨酸那一支上，有一个酶做的事值得专门看一眼",
      en: "On the way to tryptophan, chorismate becomes anthranilate with glutamine donating the nitrogen that will be the indole ring's nitrogen, and anthranilate then condenses with PRPP — 5-phosphoribosyl-1-pyrophosphate, an activated ribose made from ribose 5-phosphate and ATP. **The last enzyme, tryptophan synthase, is an α2β2 complex whose two activities can be separated: the α subunit makes indole from indole-3-glycerol phosphate, and the β2 unit condenses that indole with serine through a PLP-dependent Schiff base.** **The indole is never released into solution — it travels from one active site to the other through an internal tunnel in the protein.** **This channelling may run across the whole chorismate-to-tryptophan pathway, which would make it a metabolon, a multienzyme complex; such complexes do not survive ordinary purification, which is why one was not isolated for so long.**",
      cn: "通向色氨酸的路上，分支酸先变成**邻氨基苯甲酸（anthranilate）**，其中的氮由谷氨酰胺提供，日后成为吲哚环上的那个氮；邻氨基苯甲酸再与 **PRPP** 缩合——PRPP 即 5-磷酸核糖-1-焦磷酸，是由核糖-5-磷酸加 ATP 做成的活化核糖。**最后那个酶「色氨酸合酶」是 α₂β₂ 复合体，两种活性可以拆开：α 亚基把吲哚-3-甘油磷酸变成吲哚，β₂ 单元再经一个依赖 PLP 的席夫碱把这个吲哚与丝氨酸缩合。** **那个吲哚从不释放到溶液中——它经蛋白内部的一条隧道，从一个活性位点直接走到另一个。** **这种「物质传送（channeling）」可能贯穿从分支酸到色氨酸的整条途径；果真如此，它就是一个 metabolon（多酶复合体）。这类复合体在常规纯化中保不住，这正是它长期未能被分离出来的原因。**",
      src: "A p.811–812"
    },
    {
      link_en: "the other branch is short, and its shortness is what makes tyrosine a special case",
      link_cn: "另一支很短，而正是这个「短」使酪氨酸成了特例",
      en: "From chorismate, phenylalanine and tyrosine share a single intermediate, **prephenate** — the step that makes it is a rare biological example of a Claisen rearrangement — and one transamination from glutamate then gives either amino acid. **Animals have a shortcut of their own: phenylalanine hydroxylase hydroxylates C-4 of the phenyl ring, turning phenylalanine straight into tyrosine, and it is the same enzyme that begins phenylalanine's degradation, so it is a two-way door rather than a dedicated biosynthetic step.** **That is why tyrosine is conditionally essential: it can always be made, provided phenylalanine — which must be eaten — is there to make it from.**",
      cn: "从分支酸出发，苯丙氨酸和酪氨酸共用一个中间体**预苯酸（prephenate）**——生成它的那一步是生物学中罕见的 **Claisen 重排**实例——之后由谷氨酸转氨一次，就得到其中任一个氨基酸。**动物另有一条自己的捷径：苯丙氨酸羟化酶在苯环的 C-4 上加一个羟基，把苯丙氨酸直接变成酪氨酸；而这正是启动苯丙氨酸降解的同一个酶，所以它是一扇双向门，而不是一个专职的合成步骤。** **这就是酪氨酸被称为「条件必需」的原因：只要有苯丙氨酸——那是必须吃进来的——酪氨酸随时都造得出来。**",
      src: "A p.812"
    },
    {
      link_en: "and one amino acid reaches outside amino acid metabolism altogether",
      link_cn: "还有一个氨基酸，干脆伸手到氨基酸代谢之外去了",
      en: "**Histidine draws on three sources at once: PRPP contributes five carbons, the purine ring of ATP contributes one nitrogen and one carbon, and glutamine supplies the second ring nitrogen.** ATP and PRPP condense, the purine ring then **opens**, and a new five-membered ring carrying two nitrogens — the imidazole ring, which is the side chain that makes histidine histidine — closes around the nitrogen glutamine gave. **Using ATP as an ordinary source of carbon and nitrogen rather than as a phosphoryl donor looks wasteful until you see what is left over: the remnant is AICAR, which is itself an intermediate of purine biosynthesis and is rapidly recycled back into ATP.** **So the two pathways do not merely resemble each other — they share literal chemical machinery, and nothing is thrown away.**",
      cn: "**组氨酸同时取用三个来源：PRPP 提供五个碳，ATP 的嘌呤环提供一个氮和一个碳，谷氨酰胺提供环上第二个氮。** ATP 与 PRPP 缩合，随后那个嘌呤环**被打开**，咪唑环则围着谷氨酰胺给的那个氮闭合起来。**把 ATP 当成普通的碳源氮源、而不是当成磷酰基供体来用，乍看很浪费——直到你看见剩下的那部分：残余物是 AICAR，而它本身就是嘌呤合成的中间物，很快就被回收变回 ATP。** **所以这两条途径不只是彼此相像——它们共用着实实在在的同一套化学机器，而且什么也没扔掉。**",
      src: "A p.814",
      see: [{ id: "L-22-4-1", en: "AICAR in its home pathway, purine synthesis", cn: "AICAR 在它自己的老家——嘌呤合成" }]
    },
    {
      link_en: "and finally the regulation, which escalates through three patterns",
      link_cn: "最后是调控——它沿着三种模式层层升级",
      recall_en: "the tangle of shared branch points is the problem the third pattern solves",
      recall_cn: "前面那张共用分支点的网，正是第三种模式要解决的问题",
      en: "**Simple feedback inhibition** is the baseline: an end product allosterically inhibits the first committed enzyme of **its own** pathway — isoleucine inhibiting the first step of its own synthesis from threonine, historically one of the first allosteric feedback inhibitions ever found. **Concerted inhibition** is one enzyme integrating several independent signals whose combined effect exceeds the sum of each alone: bacterial glutamine synthetase is inhibited by six different glutamine-derived products at once. **Sequential feedback inhibition** answers the problem of several end products sharing the same upstream steps, and it answers it with isoenzymes — several independently regulated copies of the same enzyme, each listening to a different product. **In the aspartate-derived pathway of E. coli the first enzyme exists as three isoenzymes and the enzymes at the next two branch points as two each; on the aromatic pathway, three isoenzymes catalyse the first step toward chorismate, one inhibited by phenylalanine, one by tyrosine, one by tryptophan.** **The multiplicity is the whole point: an excess of one product must not be allowed to shut down the supply of the others that share those steps.**",
      cn: "**简单反馈抑制**是基线：终产物别构抑制**自己那条途径**的第一个承诺酶——异亮氨酸抑制自己从苏氨酸合成的第一步，这是历史上最早被发现的别构反馈抑制之一。**协同抑制**是一个酶同时整合多个独立信号，而合并效果超过各自单独作用之和：细菌的谷氨酰胺合成酶同时被六种谷氨酰胺衍生产物抑制。**序贯反馈抑制**回答的是「多个终产物共用同一段上游步骤」这个问题，而它的答案是**同工酶**——同一步反应有好几份各自独立受调控的酶，每一份听一个不同产物的话。**在大肠杆菌由天冬氨酸出发的途径里，第一个酶有三份同工酶，接下来两个分支点上的酶各有两份；在芳香族途径上，通向分支酸的第一步由三份同工酶催化，一份被苯丙氨酸抑制、一份被酪氨酸抑制、一份被色氨酸抑制。** **「有好几份」正是全部要点：某一个产物过量，绝不能被允许去切断其他共用这些步骤的产物的供应。**",
      src: "A p.814–816"
    }
  ],
  terms: [
    { en: "six precursor families", cn: "六大前体家族",
      def_en: "The organising scheme for amino acid biosynthesis: α-ketoglutarate, pyruvate, 3-phosphoglycerate, phosphoenolpyruvate plus erythrose 4-phosphate, oxaloacetate, and ribose 5-phosphate, each the starting metabolite for a subset of the twenty. Ten amino acids sit one or a few steps from their family precursor; the aromatics sit far from theirs, and that difference in distance is what the essential/nonessential split really tracks.",
      def_cn: "氨基酸生物合成的组织框架：α-酮戊二酸、丙酮酸、3-磷酸甘油酸、磷酸烯醇式丙酮酸加赤藓糖-4-磷酸、草酰乙酸、核糖-5-磷酸，每一个都是二十种中某一组的起点代谢物。十种氨基酸离本家族前体只有一步或几步；三种芳香族离得很远——而「必需／非必需」的划分，实际追踪的正是这个距离差。" },
    { en: "conditionally essential amino acid", cn: "条件必需氨基酸",
      def_en: "One that is non-essential only under certain conditions. Tyrosine is the worked example: an animal makes it in a single hydroxylation from phenylalanine, so it is non-essential exactly as long as dietary phenylalanine — which is essential — holds up. The same hydroxylase also opens phenylalanine's degradation, so it is a two-way door rather than a dedicated biosynthetic enzyme.",
      def_cn: "只在特定条件下才算非必需的氨基酸。酪氨酸是标准例子：动物只需把苯丙氨酸羟化一次就能造出它，所以只要膳食里的苯丙氨酸——那是必需的——供得上，酪氨酸就是非必需的。同一个羟化酶也开启苯丙氨酸的降解，所以它是一扇双向门，而非专职的合成酶。" },
    { en: "shikimate and chorismate", cn: "莽草酸与分支酸",
      def_en: "Successive intermediates on the pathway that builds an aromatic ring from scratch, out of erythrose 4-phosphate and phosphoenolpyruvate. A ring is closed from an aliphatic precursor and double bonds added stepwise — the main biological route to an aromatic ring at all. Chorismate is the branch point, splitting toward tryptophan on one side and phenylalanine plus tyrosine on the other. Glyphosate blocks a step here and is relatively harmless to mammals because mammals have no such pathway.",
      def_cn: "从赤藓糖-4-磷酸与磷酸烯醇式丙酮酸从零造出芳香环的那条途径上的先后两个中间体。做法是先由脂肪族前体关环，再逐步装上双键——这是生物学上生成芳香环的主要路线。分支酸是分岔口：一边通向色氨酸，另一边通向苯丙氨酸和酪氨酸。草甘膦阻断这条路上的一步；它对哺乳动物相对无害，只因为哺乳动物根本没有这条途径。" },
    { en: "tryptophan synthase and channelling", cn: "色氨酸合酶与物质传送",
      def_en: "An α2β2 complex whose two activities can be separated: one subunit makes indole from indole-3-glycerol phosphate, the other condenses indole with serine through a PLP-dependent Schiff base. The indole never enters solution but travels between the two active sites through an internal tunnel. That channelling may extend across the whole pathway from chorismate, making it a metabolon — a multienzyme complex that does not survive ordinary purification, which is why it went so long undetected.",
      def_cn: "一个 α₂β₂ 复合体，两种活性可以拆开：一个亚基把吲哚-3-甘油磷酸变成吲哚，另一个经依赖 PLP 的席夫碱把吲哚与丝氨酸缩合。那个吲哚从不进入溶液，而是经蛋白内部的隧道在两个活性位点之间穿行。这种物质传送可能贯穿从分支酸开始的整条途径，使之成为一个 metabolon——一种在常规纯化中保不住的多酶复合体，这正是它长期未被检出的原因。" },
    { en: "the three regulatory patterns", cn: "三种调控模式",
      def_en: "Simple feedback inhibition: an end product allosterically blocks the first committed enzyme of its own pathway, as isoleucine does on its own synthesis from threonine. Concerted inhibition: one enzyme integrating several independent signals whose joint effect is more than additive, as with the six glutamine-derived inhibitors of bacterial glutamine synthetase. Sequential feedback inhibition: where several end products share upstream steps, those steps are catalysed by independently regulated isoenzymes, so that one product's excess cannot cut off the others.",
      def_cn: "简单反馈抑制：终产物别构阻断自己那条途径的第一个承诺酶，如异亮氨酸抑制自己由苏氨酸合成的第一步。协同抑制：一个酶整合多个独立信号，合并效果超过各自之和，如细菌谷氨酰胺合成酶被六种谷氨酰胺衍生产物抑制。序贯反馈抑制：多个终产物共用上游步骤时，这些步骤由各自独立受调控的同工酶催化，于是某一个产物过量也切不断其余产物的供应。" },
    { en: "L-asparaginase as therapy", cn: "作为疗法的 L-天冬酰胺酶",
      def_en: "A bacterial enzyme given in childhood acute lymphoblastic leukaemia to strip asparagine out of the serum. It works because the leukaemic lymphocytes make little or no asparagine synthetase and therefore depend entirely on circulating asparagine, while normal cells still make their own. With chemotherapy it reaches over 95 % remission, against 40–60 % for the enzyme alone; about 10 % of remissions relapse with resistant tumours.",
      def_cn: "一种细菌来源的酶，用于儿童急性淋巴细胞白血病，把血清中的天冬酰胺清空。它之所以有效，是因为白血病淋巴细胞几乎不产生天冬酰胺合成酶，只能完全依赖循环中的天冬酰胺，而正常细胞仍能自产。与化疗联用缓解率超过 95%，单用为 40–60%；约 10% 的缓解会复发为耐药肿瘤。" },
    { en: "the mammalian sulfur route to cysteine", cn: "哺乳动物通向半胱氨酸的硫路线",
      def_en: "Plants and bacteria reduce environmental sulfate through an activated form, PAPS, in an eight-electron reduction, and use the sulfide to make cysteine from serine. A mammal cannot do that reduction, so it takes the sulfur from methionine instead — through S-adenosylmethionine to homocysteine, which condenses with serine to cystathionine, cleaved by a PLP-dependent lyase to cysteine. Mammalian cysteine therefore comes from two amino acids: methionine supplies the sulfur, serine the carbon skeleton.",
      def_cn: "植物和细菌把环境中的硫酸盐经活化形式 PAPS 做一次八电子还原，再用生成的硫化物由丝氨酸造出半胱氨酸。哺乳动物做不了这次还原，改从甲硫氨酸取硫——经 S-腺苷甲硫氨酸到同型半胱氨酸，后者与丝氨酸缩合成胱硫醚，再由依赖 PLP 的裂解酶切成半胱氨酸。所以哺乳动物的半胱氨酸来自两个氨基酸：甲硫氨酸出硫，丝氨酸出碳骨架。" }
  ]
};

/* ------------------------------------------------------------------ L-22-3-1 */
window.BIOLITE_SPINE["L-22-3-1"] = {
  assumed: ["ATP", "NADPH", "FAD", "FMN", "enzyme", "cofactor", "glycine", "glutamate",
            "arginine", "cysteine", "methionine", "tyrosine", "tryptophan", "histidine",
            "ornithine", "succinyl-CoA", "citric acid cycle", "S-adenosylmethionine",
            "haemoglobin", "erythrocyte", "liver", "kidney", "spleen", "bile",
            "serum albumin", "transfer RNA", "peptidoglycan", "cellulose",
            "deoxyribonucleotide", "membrane", "free radical", "calmodulin",
            "Parkinson disease", "tuberculosis", "epilepsy", "schizophrenia"],
  nodeTitle_en: "Molecules derived from amino acids",
  nodeTitle_cn: "由氨基酸衍生出的分子",
  title_en: "One branching pathway, its diseases, and the discovery that its waste is a signal",
  title_cn: "一条分岔的通路、它的疾病，以及「废物其实是信号」这个发现",
  steps: [
    {
      en: "A porphyrin is a flat four-ring organic cage; put an iron in the middle of one and you have **heme**, the group that carries oxygen in haemoglobin. **The cage is built from four molecules of porphobilinogen, and each porphobilinogen from two molecules of δ-aminolevulinate — so δ-aminolevulinate is the committed precursor of every porphyrin in the cell.**",
      cn: "**卟啉（porphyrin）**是一个扁平的四环有机笼；在笼中央放一个铁，就是**血红素（heme）**——血红蛋白里负责携氧的那个基团。**这个笼由四分子胆色素原（porphobilinogen）搭成，而每一分子胆色素原又由两分子 δ-氨基乙酰丙酸（δ-aminolevulinate）搭成——所以 δ-氨基乙酰丙酸是细胞里一切卟啉的承诺前体。**",
      src: "A p.816–817, §22.3, figure 22-25",
      see: [{ id: "6-3-2", en: "the biosynthesis of heme in outline", cn: "血红素生物合成的整体轮廓" }]
    },
    {
      link_en: "and that precursor is made two entirely different ways, depending on the kingdom",
      link_cn: "而这个前体有两种完全不同的做法，取决于你问的是哪一界",
      en: "**In higher eukaryotes, including mammals, glycine condenses with succinyl-CoA — taken straight out of the citric acid cycle — and the product is decarboxylated to δ-aminolevulinate.** **In plants, algae and most bacteria the precursor is glutamate instead, by a strikingly roundabout route: the glutamate is first esterified onto a transfer RNA, reduced by NADPH to glutamate 1-semialdehyde, cut off the tRNA, and finally handed to an aminotransferase.** A transfer RNA is the molecule of protein synthesis, and finding one in the middle of a small-molecule pathway is worth remembering precisely because it looks out of place.",
      cn: "**在包括哺乳动物在内的高等真核生物里，甘氨酸与琥珀酰-CoA 缩合——琥珀酰-CoA 是直接从柠檬酸循环里取来的——产物再脱羧，得到 δ-氨基乙酰丙酸。** **而在植物、藻类和大多数细菌里，前体换成了谷氨酸，路线绕得惊人：谷氨酸先被酯化到一个转运 RNA 上，由 NADPH 还原成谷氨酸-1-半醛，再从 tRNA 上切下来，最后交给一个转氨酶。** 转运 RNA 是蛋白质合成用的分子；在一条小分子生物合成途径中间遇到它，正因为「看着不该在这儿」，才格外值得记住。",
      src: "A p.817"
    },
    {
      link_en: "and the order of the last step is the opposite of what most people guess",
      link_cn: "而最后一步的顺序，和多数人猜的正好相反",
      en: "Two δ-aminolevulinate condense into porphobilinogen, and four porphobilinogen are assembled into **protoporphyrin** — the finished cage, with no metal in it. **The iron goes in last, into the completed ring, in a step catalysed by ferrochelatase.** Regulation needs no memorising: **heme feedback-inhibits the early steps of its own synthesis.** Keep the name ferrochelatase — the next step shows what happens when that particular reaction fails.",
      cn: "两分子 δ-氨基乙酰丙酸缩合成胆色素原，四分子胆色素原再组装成**原卟啉（protoporphyrin）**——已经完工、但中间还没有金属的那个笼。**铁是最后才装进去的**，装进已经完成的环里，**这一步由亚铁螯合酶（ferrochelatase）催化。** 调控这一条不用背：**血红素反馈抑制自己合成途径的早期步骤。** 请记住「亚铁螯合酶」这个名字——下一步就要看这一步出故障会发生什么。",
      src: "A p.818, figure 22-26"
    },
    {
      link_en: "block this pathway anywhere and the block itself becomes the disease",
      link_cn: "把这条通路堵在任何一处，这个「堵」本身就成了病",
      en: "**Block any enzyme of the pathway and the specific precursors upstream of the block pile up in erythrocytes, body fluids and the liver. The porphyrias are not a list to memorise — they are what a branching pathway does when it is stopped at different points.** In **acute intermittent porphyria**, the commonest form, most people who inherit it are heterozygotes and stay symptom-free because one working gene copy makes enough enzyme; a poorly understood nutritional or environmental trigger then lets δ-aminolevulinate and porphobilinogen accumulate, and the attack is acute abdominal pain with neurological dysfunction. **King George III's episodes of apparent madness fit this picture.** In a second form, reduced **ferrochelatase** activity lets protoporphyrin accumulate — **and protoporphyrin exposed to light releases free radicals that damage membrane proteins and lipids, so these patients must avoid not only sunlight but bright indoor light.** A drug released slowly from an implant under the skin, afamelanotide, relieves it by stimulating melanin production. **A rarer form stains the urine red, makes the teeth fluoresce under ultraviolet light, leaves the skin abnormally sun-sensitive and causes anaemia — a combination that may be where the vampire legends came from.**",
      cn: "**把这条通路上任何一个酶堵住，堵点上游那些特定的前体就会在红细胞、体液和肝脏里堆积起来。卟啉病（porphyria）不是一张要背的清单——它就是「一条分岔通路被堵在不同位置时会发生什么」。** 最常见的是**急性间歇性卟啉病**：大多数携带者是杂合子、平时并无症状，因为一份正常基因拷贝造出的酶已经够用；随后某个尚不清楚的营养或环境诱因让 δ-氨基乙酰丙酸和胆色素原积累起来，发作时表现为**急性腹痛加神经功能障碍**。**英王乔治三世那些看似疯癫的发作，符合这幅图景。** 第二种：**亚铁螯合酶**活性降低，原卟啉积累——**而原卟啉一见光就释放自由基，损伤膜蛋白和膜脂；所以这些患者不但要避开日光，连明亮的室内光也得躲。** 一种由皮下小植入体缓慢释放的药物 afamelanotide 通过刺激黑色素生成来缓解它。**还有一种更罕见的：尿液被染红、牙齿在紫外光下发荧光、皮肤对日光异常敏感，并因血红素不足而贫血——这几样凑在一起，可能正是吸血鬼传说的来源。**",
      src: "A p.819"
    },
    {
      link_en: "now the other direction: what happens to heme when a red cell dies",
      link_cn: "现在换个方向：一个红细胞死掉时，它的血红素去了哪里",
      en: "Heme released from dying erythrocytes in the spleen is taken apart in two steps. **The first, by heme oxygenase, opens the ring, and it makes three things: biliverdin, a linear open tetrapyrrole; free Fe2+, which is captured immediately by ferritin because loose iron is dangerous; and carbon monoxide.** **That third product is not a detail to wave away — because heme is turned over continuously, about 1 % of a person's heme is bound to CO at any moment, with no environmental exposure of any kind.**",
      cn: "在脾脏里，从死亡红细胞释放出来的血红素分两步被拆掉。**第一步由血红素加氧酶（heme oxygenase）完成，它把环打开，同时产生三样东西：胆绿素（biliverdin），一个线性开环的四吡咯；游离 Fe²⁺，它立刻被铁蛋白（ferritin）捕获，因为散落的铁很危险；以及一氧化碳（CO）。** **第三样东西不能挥挥手带过——由于血红素在不断更新，一个人体内任何时刻约有 1% 的血红素结合着 CO，而这与任何环境暴露都无关。**",
      src: "A p.817"
    },
    {
      link_en: "and the second step is an experiment you have already run on yourself",
      link_cn: "而第二步，是一个你已经在自己身上做过的实验",
      en: "**Biliverdin reductase converts biliverdin to bilirubin — the second open tetrapyrrole of the sequence, and the yellow one.** **You can watch the whole two-enzyme sequence in a bruise: the initial black or purple is haemoglobin released from damaged red cells, the green that follows is biliverdin, and the yellow after that is bilirubin.** That turns an abstract pair of reactions into something with a timescale you have personally observed — and the same two pigments are what jaundice is about.",
      cn: "**胆绿素还原酶（biliverdin reductase）把胆绿素变成胆红素（bilirubin）。** **这两个酶的整个序列，你可以在一块瘀青上看完：最初的黑紫色是从受损红细胞里释放的血红蛋白，随后转成的绿色是胆绿素，再之后的黄色是胆红素。** 这把一对抽象的反应变成了你亲眼看过、还带着时间进程的东西——而黄疸讲的正是同样这两种色素。",
      src: "A p.820, figure 22-27"
    },
    {
      link_en: "follow the bilirubin out of the body and two everyday colours get explained",
      link_cn: "跟着胆红素走出身体，两种日常的颜色就有了解释",
      en: "Bilirubin is largely insoluble, so it travels in blood bound to serum albumin. The liver converts it to bilirubin diglucuronide, soluble enough to be secreted in bile into the small intestine, where microbial enzymes turn it mostly into **urobilinogen**. **Some urobilinogen is reabsorbed and reaches the kidney, where it becomes urobilin — the compound that makes urine yellow; what stays in the intestine becomes stercobilin, which is what makes faeces red-brown.** **When liver function is impaired or bile secretion blocked, bilirubin leaks back into the blood and yellows the skin and the whites of the eyes: jaundice.** Newborns are often jaundiced simply because they have not yet made enough of the enzyme that attaches the glucuronides, and the classic treatment is elegant — **a fluorescent lamp drives a photochemical conversion of bilirubin into more soluble compounds the infant can excrete.**",
      cn: "胆红素基本不溶，所以它在血中是结合着**血清白蛋白**运送的。肝脏把它转成**胆红素二葡糖醛酸苷**，溶解度足以随胆汁分泌进小肠；肠道微生物的酶在那里把它主要变成**尿胆素原（urobilinogen）**。**一部分尿胆素原被重吸收、到达肾脏，在那里变成尿胆素（urobilin）——尿液呈黄色就是因为它；留在肠道里的那部分变成粪胆素（stercobilin），粪便的红棕色就是因为它。** **当肝功能受损或胆汁分泌受阻时，胆红素漏回血中，把皮肤和眼白染黄，这就是黄疸。** 新生儿常常发黄，只是因为他们还没造出足够的那个「挂上葡糖醛酸」的酶；而经典的治疗办法很漂亮——**用一盏荧光灯，通过光化学反应把胆红素变成更易溶、婴儿能排出去的化合物。**",
      src: "A p.818"
    },
    {
      link_en: "and then the surprise that changes what the whole pathway is for",
      link_cn: "接着是那个改变整条通路性质的意外",
      recall_en: "the CO and the bilirubin from the two steps above, seen a second time",
      recall_cn: "上面两步里的 CO 和胆红素，在这里被重新看了一遍",
      en: "**This pathway looks like disposal and is not. At the very low concentrations heme degradation produces, the carbon monoxide acts as a signalling molecule — a vasodilator, like nitric oxide though less potent, with further effects on neurotransmission.** **And bilirubin, the pigment of jaundice, is the most abundant antioxidant in mammalian tissue and accounts for most of the antioxidant activity of serum, apparently mattering most in the developing brain of a newborn.** **That reframes the previous step: the cell damage in jaundice is probably bilirubin in excess of the albumin available to dissolve it, rather than bilirubin being poisonous in itself.** Because the products matter, the pathway is regulated at its first step, and humans carry three heme oxygenases: one inducible by a long list of stresses — shear stress, hypoxia, hyperoxia, heat shock, ultraviolet light, hydrogen peroxide; one expressed constantly, mainly in brain and testes; and a third with no catalytic activity at all, which may work as an oxygen sensor instead.",
      cn: "**这条通路看着像在处理废物，其实不是。在血红素降解所产生的极低浓度下，那个一氧化碳充当信号分子——一种血管舒张剂，作用与一氧化氮类似但较弱，此外还影响神经传递。** **而黄疸的那个色素胆红素，是哺乳动物组织中含量最丰富的抗氧化剂，血清抗氧化活性大部分由它承担；它的保护作用看来在新生儿正在发育的大脑里最为要紧。** **这就把上一步重新定义了：黄疸里的细胞损伤，很可能是「胆红素超出了可用来溶解它的白蛋白的量」，而不是胆红素本身有毒。** 正因为这些产物是有用的，这条通路在第一步就受调控；人类有三种血红素加氧酶：一种可被一长串应激诱导——切应力、缺氧、高氧、热休克、紫外线、过氧化氢；一种持续表达，主要在脑和睾丸；第三种完全没有催化活性，可能改行做**氧感受器**。",
      src: "A p.819"
    },
    {
      link_en: "the same section keeps going, and the rest is one move repeated: edit an amino acid, get a working molecule",
      link_cn: "本节还没完，而其余部分是同一个动作的重复：改一改某个氨基酸，就得到一个能干活的分子",
      en: "**Creatine is assembled from glycine and arginine, with S-adenosylmethionine donating a methyl group; its phosphorylated form, phosphocreatine, is the energy buffer of skeletal muscle.** **Glutathione is a tripeptide of glutamate, cysteine and glycine, and the way to think of it is as a redox buffer.** Its three jobs connect to three other subjects: it keeps protein sulfhydryl groups reduced, it keeps the iron of heme in the Fe2+ state, and it supplies the reducing power for making deoxyribonucleotides. Its oxidised form is simply two glutathiones joined by a disulfide bond.",
      cn: "**肌酸（creatine）由甘氨酸和精氨酸拼成，甲基由 S-腺苷甲硫氨酸提供；它的磷酸化形式磷酸肌酸，是骨骼肌的能量缓冲物质。** **谷胱甘肽（glutathione）是由谷氨酸、半胱氨酸、甘氨酸构成的三肽，最好把它当作一个氧化还原缓冲剂来理解。** 它的三项工作分别通向三个别的题目：让蛋白质的巯基保持还原态、让血红素上的铁保持 Fe²⁺、以及为脱氧核糖核苷酸的合成提供还原力。它的氧化形式不过是两分子谷胱甘肽由一根二硫键连起来。",
      src: "A p.820–821, figure 22-28"
    },
    {
      link_en: "and one enzyme that uses it explains a line on a vitamin bottle",
      link_cn: "而用到它的一个酶，解释了保健品标签上的一行字",
      en: "**Glutathione peroxidase removes toxic peroxides, and it carries a covalently bound selenium atom in the form of selenocysteine — an amino acid with selenium where cysteine has sulfur.** **That selenium is essential for the enzyme's activity, and that is the biochemical reason selenium is a required dietary trace element at all.**",
      cn: "**谷胱甘肽过氧化物酶负责清除有毒的过氧化物，而它身上带着一个共价结合的硒原子，形式是「硒代半胱氨酸（selenocysteine）」——一个把半胱氨酸的硫换成硒的氨基酸。** **这个硒是该酶活性所必需的；这就是硒之所以成为一种必需膳食微量元素的生化理由。**",
      src: "A p.820"
    },
    {
      link_en: "another edit — swapping a molecule's handedness — turns a bacterium into a target",
      link_cn: "另一种改动——把分子的手性换过来——把细菌变成了靶子",
      en: "**D-amino acids do not generally occur in proteins, but bacterial peptidoglycan — the mesh that is the bacterial cell wall — contains both D-alanine and D-glutamate.** They are made straight from the ordinary L isomers by **amino acid racemases**, which use pyridoxal phosphate, PLP, as their cofactor. **Because racemisation matters to a bacterium and not to us, alanine racemase is a good drug target: cycloserine is used against tuberculosis, and L-fluoroalanine has been tested as an antibacterial.** **The honest caveat explains a whole class of side effects: these inhibitors also hit some of the human enzymes that need the same cofactor.**",
      cn: "**D-型氨基酸一般不出现在蛋白质里，但细菌的肽聚糖——构成细菌细胞壁的那张网——同时含有 D-丙氨酸和 D-谷氨酸。** 它们是由**氨基酸消旋酶（racemase）**直接从普通的 L-型转过来的，这类酶用**磷酸吡哆醛（PLP）**作辅因子。**由于「消旋」对细菌要紧、对我们不要紧，丙氨酸消旋酶就是一个好药靶：环丝氨酸（cycloserine）用于治疗结核，L-氟丙氨酸也被试作抗菌药。** **而那句老实的补充解释了一整类副作用：这些抑制剂同样会打到人体内一些需要同一个辅因子的酶。**",
      src: "A p.820",
      see: [{ id: "5-2-1-2", en: "what PLP does, mechanistically", cn: "PLP 在机制上到底做了什么" }]
    },
    {
      link_en: "in plants the same starting materials become most of what you can smell and taste",
      link_cn: "在植物那边，同样的起始材料变成了你闻得到、尝得到的大部分东西",
      en: "**Lignin, the rigid polymer that stiffens wood, is built from phenylalanine and tyrosine and is second only to cellulose in abundance in plant tissue — and its structure is complex and still not well understood.** **Tryptophan becomes indole-3-acetate, better known as auxin, which is the plant growth hormone — a signal a plant makes in one place and acts on in another.** And the same two aromatic amino acids give the tannins that inhibit oxidation in wine, the alkaloids including morphine, and the flavour compounds of cinnamon oil, nutmeg, cloves, vanilla and cayenne pepper.",
      cn: "**木质素（lignin）**——让木材变硬的那种刚性聚合物——**由苯丙氨酸和酪氨酸造成，在植物组织中的丰度仅次于纤维素；而它的结构很复杂，至今仍未被充分弄清。** **色氨酸变成吲哚-3-乙酸，也就是更常听到的名字「生长素（auxin）」，植物的生长激素。** 同样这两个芳香族氨基酸还给出：抑制葡萄酒氧化的**单宁**、包括**吗啡**在内的**生物碱**，以及肉桂油、肉豆蔻、丁香、香草和辣椒的风味化合物。",
      src: "A p.822, figure 22-30"
    },
    {
      link_en: "and in a nervous system, one chemical step does almost all of it",
      link_cn: "而在神经系统里，几乎全部工作由同一个化学步骤完成",
      recall_en: "the same PLP as the bacterial racemases three steps up, doing a different job",
      recall_cn: "和上面第三步细菌消旋酶用的是同一个 PLP，干的却是另一件事",
      en: "**The common move is decarboxylation, and it is another PLP-dependent reaction.** **Tyrosine gives the catecholamines — dopamine, norepinephrine, epinephrine — whose levels track blood pressure among other things; Parkinson disease goes with underproduction of dopamine and was traditionally treated with L-dopa, while overproduction in the brain may be linked to schizophrenia.** **Glutamate gives GABA, an inhibitory transmitter whose underproduction is associated with epileptic seizures**, and GABA analogues treat epilepsy and hypertension. **Tryptophan gives serotonin in two steps. Histidine gives histamine, a powerful vasodilator released in quantity during an allergic response and also a stimulant of gastric acid secretion — which is why cimetidine, a structural analogue of histamine that blocks its receptor, heals duodenal ulcers by shutting that secretion down.** Methionine and ornithine give the polyamines spermine and spermidine, which help package DNA, and the first enzyme of that route, ornithine decarboxylase, is itself the target of several powerful drugs.",
      cn: "**共同的动作是脱羧，而这又是一个依赖 PLP 的反应。** **酪氨酸给出儿茶酚胺——多巴胺、去甲肾上腺素、肾上腺素——它们的水平与血压等指标相关；帕金森病伴随多巴胺生成不足，传统上用 L-多巴治疗，而脑内生成过多则可能与精神分裂症有关。** **谷氨酸给出 GABA，一种抑制性递质，它生成不足与癫痫发作相关**；GABA 类似物用于治疗癫痫与高血压。**色氨酸经两步给出血清素（serotonin）。组氨酸给出组胺（histamine），一种强力血管舒张剂，在过敏反应中被大量释放，同时也刺激胃酸分泌——这就是为什么西咪替丁（cimetidine），一个阻断组胺受体的组胺结构类似物，能通过关掉胃酸分泌来促进十二指肠溃疡愈合。** 甲硫氨酸与鸟氨酸给出多胺**精胺与亚精胺**，它们参与 DNA 的包装；而这条路线的第一个酶「鸟氨酸脱羧酶」本身就是好几种强效药物的靶点。",
      src: "A p.821, figure 22-31"
    },
    {
      link_en: "and the last product of the section is the strangest one",
      link_cn: "本节最后一个产物，也是最古怪的那个",
      en: "**Until the mid-1980s nitric oxide was known mainly as a component of smog; finding that it is a biological messenger was a genuine surprise.** It is made from **arginine** in an NADPH-dependent five-electron oxidation by nitric oxide synthase, a dimeric enzyme each of whose subunits carries four cofactors at once — FMN, FAD, tetrahydrobiopterin and an Fe3+ heme. **It is a small gas that diffuses through membranes freely, but it is so reactive that its range is about one millimetre from where it was made, which makes it a strictly local signal rather than a hormone carried in blood.** **And it cannot be stored at all, so its availability is controlled entirely at the moment of synthesis — switched on by the synthase binding Ca2+-calmodulin.** In humans it works in neurotransmission, in blood clotting and in the control of blood pressure.",
      cn: "**直到 1980 年代中期，一氧化氮（NO）主要还是作为雾霾成分为人所知；发现它是一种生物信使，是一个真正的意外。** 它由**精氨酸**经一次依赖 NADPH 的**五电子氧化**生成，催化者是**一氧化氮合酶**，一个二聚体酶，其每个亚基同时携带四种辅因子——FMN、FAD、四氢生物蝶呤，以及一个 Fe³⁺ 血红素。**它是一种能自由扩散穿膜的小气体分子，但反应性太强，作用半径只有大约一毫米——这使它成为一个严格局部的信号，而不是随血液输送的激素。** **而且它根本无法贮存，所以它的可得量完全在「合成的那一刻」被控制——由合酶结合 Ca²⁺-钙调蛋白来开启。** 在人体内，它参与神经传递、血液凝固和血压调控。",
      src: "A p.822, p.824, figure 22-33"
    }
  ],
  terms: [
    { en: "delta-aminolevulinate", cn: "δ-氨基乙酰丙酸",
      def_en: "The committed precursor of every porphyrin: two molecules condense into porphobilinogen, and four porphobilinogen build the ring. It is made two entirely different ways — from glycine plus succinyl-CoA in higher eukaryotes, and from glutamate through a glutamyl-transfer-RNA intermediate in plants, algae and most bacteria.",
      def_cn: "一切卟啉的承诺前体：两分子缩合成胆色素原，四分子胆色素原搭成环。它有两种完全不同的做法——高等真核生物用甘氨酸加琥珀酰-CoA，植物、藻类和大多数细菌则从谷氨酸出发，中间经过一个谷氨酰-转运 RNA。" },
    { en: "ferrochelatase", cn: "亚铁螯合酶",
      def_en: "The enzyme that inserts iron into protoporphyrin, and the last step of heme synthesis — the ring is finished first and the metal goes in afterwards. Reduced activity causes a porphyria in which accumulated protoporphyrin converts light into free-radical damage to membrane lipids and proteins, so patients must avoid even bright indoor light.",
      def_cn: "把铁装进原卟啉的那个酶，也是血红素合成的最后一步——环先造完，金属后放。它活性降低会导致一种卟啉病：积累的原卟啉把光转变成自由基，损伤膜脂与膜蛋白，患者连明亮的室内光也必须躲开。" },
    { en: "the porphyrias", cn: "卟啉病",
      def_en: "What a branching biosynthetic pathway does when it is blocked at different points: the precursors upstream of each block accumulate in erythrocytes, body fluids and liver. The commonest form is usually silent in heterozygotes until a trigger produces acute abdominal pain with neurological dysfunction — the picture that fits King George III's episodes.",
      def_cn: "一条分岔的生物合成通路被堵在不同位置时的表现：每个堵点上游的前体在红细胞、体液和肝脏中积累。最常见的那种在杂合子中通常无声无息，直到某个诱因引发急性腹痛伴神经功能障碍——这正是与英王乔治三世的发作相符的图景。" },
    { en: "heme oxygenase", cn: "血红素加氧酶",
      def_en: "Catalyses the first step of heme degradation, opening the ring to give biliverdin, free Fe2+ that ferritin captures at once, and carbon monoxide. About 1 % of a person's heme is CO-bound at any moment with no environmental exposure. Humans have three: one stress-inducible, one constitutive in brain and testes, and one with no catalytic activity that may serve as an oxygen sensor.",
      def_cn: "催化血红素降解的第一步，把环打开，给出胆绿素、随即被铁蛋白捕获的游离 Fe²⁺，以及一氧化碳。即使毫无环境暴露，人体内任何时刻也约有 1% 的血红素结合着 CO。人类有三种：一种受应激诱导，一种在脑与睾丸中组成型表达，还有一种完全没有催化活性、可能充当氧感受器。" },
    { en: "bilirubin as an antioxidant", cn: "作为抗氧化剂的胆红素",
      def_en: "The yellow pigment of jaundice is the most abundant antioxidant in mammalian tissue and supplies most of the antioxidant activity of serum, apparently mattering most in a newborn's developing brain. That reframes jaundice: the cell damage is probably bilirubin in excess of the serum albumin available to dissolve it, rather than the molecule being poisonous in itself.",
      def_cn: "黄疸那个黄色色素，是哺乳动物组织中含量最丰富的抗氧化剂，血清抗氧化活性大部分由它提供，而它的作用看来在新生儿正在发育的大脑里最为要紧。这也重新定义了黄疸：细胞损伤很可能来自「胆红素超过了可用来溶解它的血清白蛋白」，而不是这个分子本身有毒。" },
    { en: "urobilin and stercobilin", cn: "尿胆素与粪胆素",
      def_en: "The end products of bilirubin's passage through the gut. Intestinal microbes convert secreted bilirubin diglucuronide to urobilinogen; some is reabsorbed and converted in the kidney to urobilin, which is what makes urine yellow, while what stays behind becomes stercobilin, which is what makes faeces red-brown.",
      def_cn: "胆红素走完肠道之后的终产物。肠道微生物把分泌出来的胆红素二葡糖醛酸苷变成尿胆素原；一部分被重吸收、在肾脏变成尿胆素——尿液发黄就是因为它；留下的那部分变成粪胆素——粪便呈红棕色就是因为它。" },
    { en: "glutathione", cn: "谷胱甘肽",
      def_en: "A tripeptide of glutamate, cysteine and glycine, best understood as a redox buffer. It keeps protein sulfhydryl groups reduced, keeps heme iron in the Fe2+ state, and supplies reducing power for deoxyribonucleotide synthesis. Its oxidised form is two molecules joined by a disulfide bond. The peroxidase that uses it carries a covalently bound selenium as selenocysteine, essential for activity — the reason selenium is a dietary trace element.",
      def_cn: "由谷氨酸、半胱氨酸、甘氨酸构成的三肽，最好理解为一个氧化还原缓冲剂。它让蛋白质巯基保持还原、让血红素铁保持 Fe²⁺、并为脱氧核糖核苷酸的合成提供还原力。其氧化形式是两分子由二硫键相连。使用它的那个过氧化物酶携带一个以硒代半胱氨酸形式共价结合的硒，为活性所必需——这正是硒成为必需膳食微量元素的原因。" },
    { en: "PLP-dependent decarboxylation", cn: "依赖 PLP 的脱羧作用",
      def_en: "The single chemical step behind almost all the biological amines: tyrosine to the catecholamines, glutamate to GABA, tryptophan to serotonin, histidine to histamine, ornithine to the polyamines. The same cofactor also serves the bacterial racemases that make the D-alanine and D-glutamate of peptidoglycan, which is why drugs aimed at those racemases also disturb human enzymes.",
      def_cn: "几乎所有生物胺背后的同一个化学步骤：酪氨酸到儿茶酚胺、谷氨酸到 GABA、色氨酸到血清素、组氨酸到组胺、鸟氨酸到多胺。同一个辅因子也服务于制造肽聚糖中 D-丙氨酸和 D-谷氨酸的细菌消旋酶——这正是针对那些消旋酶的药物同时会扰动人体酶的原因。" },
    { en: "nitric oxide synthase", cn: "一氧化氮合酶",
      def_en: "Makes nitric oxide from arginine in an NADPH-dependent five-electron oxidation; a dimer whose every subunit carries FMN, FAD, tetrahydrobiopterin and an Fe3+ heme. The product diffuses through membranes freely but is so reactive that it acts only within about a millimetre of its source, and it cannot be stored at all — so its availability is set entirely at synthesis, switched on by the enzyme binding Ca2+-calmodulin.",
      def_cn: "以精氨酸为原料、经一次依赖 NADPH 的五电子氧化制造一氧化氮；它是二聚体，每个亚基都同时带着 FMN、FAD、四氢生物蝶呤和一个 Fe³⁺ 血红素。产物能自由扩散穿膜，但反应性太强，只在距离产生地约一毫米内起作用；而且它完全无法贮存——所以它的可得量全部在合成的那一刻被决定，由该酶结合 Ca²⁺-钙调蛋白来开启。" }
  ]
};

/* ------------------------------------------------------------------ L-22-4-1 */
window.BIOLITE_SPINE["L-22-4-1"] = {
  assumed: ["ATP", "ADP", "GTP", "GDP", "AMP", "GMP", "CTP", "UTP", "NADPH", "NAD+",
            "FAD", "DNA", "RNA", "nucleotide", "nucleoside", "base", "ribose",
            "enzyme", "allosteric", "amino acid", "glycine", "aspartate", "glutamine",
            "serine", "glutathione", "urea cycle", "mitochondrion", "cytosol",
            "acetyl-CoA", "succinyl-CoA", "DNA replication", "gene therapy",
            "T lymphocyte", "cancer", "kidney"],
  nodeTitle_en: "Nucleotide biosynthesis and degradation",
  nodeTitle_cn: "核苷酸的生物合成与降解",
  title_en: "Two rings built in opposite orders, and everything that follows from it",
  title_cn: "两个环，建造顺序相反——以及由此推出的一切",
  steps: [
    {
      en: "A cell gets its nucleotides two ways. **De novo pathways build them from ordinary precursors — amino acids, ribose 5-phosphate, CO2 and NH3 — and are nearly identical in every living organism. Salvage pathways instead recycle the free bases and nucleosides released when nucleic acids are broken down.** **The consequence to hold on to: the free bases — adenine, guanine, cytosine, uracil, thymine — are not intermediates of the de novo routes at all, and they are intermediates of the salvage routes.** One framing number: cellular pools of every nucleotide except ATP are perhaps 1 % or less of what is needed to build the cell's DNA, so synthesis has to keep running throughout replication.",
      cn: "细胞获得核苷酸有两条路。**从头合成途径（de novo）用普通前体来造——氨基酸、核糖-5-磷酸、CO₂ 和 NH₃——而且在所有生物里几乎一模一样。补救途径（salvage）则回收核酸被降解时释放出来的游离碱基和核苷。** **要记住的推论是：游离碱基——腺嘌呤、鸟嘌呤、胞嘧啶、尿嘧啶、胸腺嘧啶——根本不是从头合成途径的中间物；它们是补救途径的中间物。** 还有一个定框架的数字：**除 ATP 之外，细胞里各种核苷酸的库存大约只有「造完自己那份 DNA 所需量」的 1% 甚至更少**，所以合成必须在整个复制过程中一直跑着。",
      src: "A p.823–824, §22.4",
      see: [{ id: "4-1-1-1", en: "the purine route step by step", cn: "嘌呤路线的逐步展开" }]
    },
    {
      link_en: "and the two de novo routes are built in opposite orders — this is the most examinable sentence here",
      link_cn: "而两条从头合成路线的建造顺序相反——这是本节最该背下来的一句话",
      en: "**The purine ring is built up one or a few atoms at a time while already attached to ribose, so a free purine base never exists anywhere along the route.** **The pyrimidine ring is finished first, as orotate, and only then mounted on ribose 5-phosphate.** PRPP — 5-phosphoribosyl-1-pyrophosphate, the activated ribose-phosphate donor — is used by both, **but it enters at opposite ends: it is what the very first committed step of purine synthesis acts on, and it arrives three steps from the end in pyrimidine synthesis.** In both, the ribose stays in the product, unlike in tryptophan and histidine synthesis where it is taken apart.",
      cn: "**嘌呤环是一次一个或几个原子、直接盖在已经就位的核糖上的——所以整条路线上从来不存在游离的嘌呤碱基。** **嘧啶环则是先在外面造完（造到乳清酸 orotate 为止），造完之后才被装到核糖-5-磷酸上。** **PRPP**——5-磷酸核糖-1-焦磷酸，活化的核糖磷酸供体——两条路都用，**但进场的位置正好相反：嘌呤合成的第一个承诺步骤作用的对象就是它；而在嘧啶合成里，它要到倒数第三步才出现。** 两条路里核糖都留在产物中——这一点与色氨酸和组氨酸的合成不同，那里核糖会被拆掉。",
      src: "A p.823, p.828",
      see: [{ id: "4-1-1-2", en: "the pyrimidine route step by step", cn: "嘧啶路线的逐步展开" }]
    },
    {
      link_en: "and the map of which atom came from where is an experimental result, not a list",
      link_cn: "而「哪个原子来自哪里」这张图是一个实验结果，不是一张清单",
      en: "**John Buchanan fed birds precursors labelled with carbon-14 and nitrogen-15, choosing birds because they conveniently excrete surplus nitrogen as uric acid — which is a purine, so the labelled skeleton comes back out of the animal in collectable form.** The map: **aspartate gives N-1; glycine gives N-7 and two carbons, entering as one intact unit; the amide nitrogen of glutamine gives N-3 and N-9; and two carbons arrive as formate, carried in on N10-formyltetrahydrofolate.** Across both de novo pathways glutamine is the single largest source of amino groups, used at five separate steps. **Each pathway also has one characteristic amino acid: glycine for purines, aspartate for pyrimidines.**",
      cn: "**John Buchanan 用 ¹⁴C 和 ¹⁵N 标记的前体去喂鸟——之所以选鸟，是因为鸟正好把多余的氮以尿酸的形式排出，而尿酸就是一个嘌呤，于是被标记的骨架能以可收集的形式从动物体内出来。** 这张图是：**天冬氨酸给出 N-1；甘氨酸给出 N-7 和两个碳，是作为一个完整单元整块进来的；谷氨酰胺的酰胺氮给出 N-3 和 N-9；还有两个碳以甲酸的形式到达，由 N¹⁰-甲酰四氢叶酸带进来。** 在两条从头合成途径里，**谷氨酰胺是最大的氨基来源，被用于五个不同的步骤**。**每条途径还各有一个特征氨基酸：嘌呤是甘氨酸，嘧啶是天冬氨酸。**",
      src: "A p.824–825, figure 22-34"
    },
    {
      link_en: "the first committed step makes something that falls apart in half a minute",
      link_cn: "第一个承诺步骤造出来的东西，半分钟就散掉了",
      en: "Glutamine-PRPP amidotransferase attaches an amino group from glutamine to C-1 of PRPP. **The product, 5-phosphoribosylamine, has a half-life of 30 seconds at pH 7.5.** **An intermediate that short-lived cannot cross a cytosol looking for its next enzyme, so it must be handed straight over — which is this section's main evidence that the enzymes of purine synthesis work as a metabolon, a large multienzyme complex.** The supporting evidence is that single polypeptides carry several of these activities at once — in eukaryotes from yeast to fruit flies to chickens, one protein does three of the early steps — while in bacteria the same activities sit on separate proteins that may still associate into a complex.",
      cn: "**谷氨酰胺-PRPP 酰胺转移酶**把谷氨酰胺的一个氨基接到 PRPP 的 C-1 上。**产物 5-磷酸核糖胺，在 pH 7.5 下半衰期只有 30 秒。** **一个这么短命的中间体，不可能横穿胞质去找下一个酶——它必须被直接递过去；这正是本节支持「嘌呤合成的酶以 metabolon（大型多酶复合体）方式工作」的主要证据。** 佐证是：单条多肽常常同时带着这里的好几种活性——从酵母到果蝇到鸡，一个蛋白就干完早期三步；而在细菌里，这些活性分处不同蛋白，但它们仍可能彼此结合成一个复合体。",
      src: "A p.825"
    },
    {
      link_en: "and the branch point has an arrangement that balances itself",
      link_cn: "而那个分岔点上有一处能自我平衡的安排",
      en: "**The first intermediate carrying a complete purine ring is inosinate, IMP, and IMP is the branch point.** On the way to adenylate, aspartate donates an amino group through adenylosuccinate, with fumarate eliminated — **and the high-energy phosphate for this branch comes from GTP, not ATP.** On the way to guanylate, IMP is oxidised at C-2 in an NAD+-requiring step to xanthylate, and glutamine then donates an amino group **with ATP cleaved to AMP**. **Each branch is paid for with the other branch's nucleotide, so a shortage of one automatically slows production of the other and the two pools balance themselves — with no dedicated sensor anywhere.**",
      cn: "**第一个带有完整嘌呤环的中间物是次黄嘌呤核苷酸 IMP，而 IMP 就是分岔点。** 通向腺苷酸的那一支：天冬氨酸经腺苷酸代琥珀酸供出一个氨基，同时消去延胡索酸——**而这一支所需的高能磷酸来自 GTP，不是 ATP。** 通向鸟苷酸的那一支：IMP 在 C-2 位被一个需要 NAD⁺ 的步骤氧化成黄苷酸，随后谷氨酰胺供出一个氨基，**这一步把 ATP 裂解成 AMP。** **两支各自由对方的核苷酸出钱，于是任一种短缺都会自动放慢另一种的生产，两个库自己就平衡了——全程没有任何一个专门的传感器。**",
      src: "A p.825–827"
    },
    {
      link_en: "and three more controls sit on top of that one",
      link_cn: "在这一层之上还叠着另外三重控制",
      en: "**First, the entry step: glutamine-PRPP amidotransferase is inhibited by IMP, AMP and GMP, with AMP and GMP acting synergistically — so an excess of either partially closes the door on both.** **Second, branch-selective control: excess GMP inhibits the enzyme oxidising IMP without touching the adenylate branch, and excess adenylate inhibits its own branch without touching guanylate; only when both products are plentiful does IMP itself accumulate and inhibit an earlier, shared step.** **Third, the reciprocal GTP/ATP funding just described. Fourth, and further upstream still, the synthesis of PRPP itself is inhibited — and by metabolites of the other pathways that also start from PRPP, so purine synthesis does not get to drain a shared resource.**",
      cn: "**第一层在入口：谷氨酰胺-PRPP 酰胺转移酶被 IMP、AMP、GMP 抑制，而 AMP 与 GMP 是协同作用的——所以任一种过量，都会把这道门部分关上。** **第二层是分支选择性的：GMP 过量时抑制氧化 IMP 的那个酶，而完全不碰腺苷酸那一支；腺苷酸过量时抑制自己这一支，而不碰鸟苷酸。只有当两个产物都充裕时，IMP 自己才会积累起来，去抑制更早的那个共用步骤。** **第三层就是刚说过的 GTP／ATP 互相出资。第四层还要更靠上游：PRPP 自身的合成也被抑制——而且是被那些同样以 PRPP 为起点的其他途径的代谢物所抑制，于是嘌呤合成没有权利把一个共用资源抽干。**",
      src: "A p.827"
    },
    {
      link_en: "the pyrimidine route starts from a molecule you have already met in another chapter",
      link_cn: "嘧啶路线的起点，是你在另一章已经见过的一个分子",
      recall_en: "carbamoyl phosphate is the urea cycle's opening molecule too — but not the same pool",
      recall_cn: "氨甲酰磷酸也是尿素循环的开场分子——但不是同一个池子",
      en: "**Carbamoyl phosphate serves both the urea cycle and pyrimidine synthesis, and in an animal the two uses are kept completely apart: carbamoyl phosphate synthetase I is mitochondrial and feeds urea, while carbamoyl phosphate synthetase II is cytosolic and feeds pyrimidines.** A bacterium does not split the job, and its single enzyme is worth knowing for a different reason: **it has three separate active sites strung along a channel nearly 100 Å long — glutamine donates its nitrogen as ammonium at the first, the ammonium travels down the tunnel to meet bicarbonate at the second, and the resulting carbamate re-enters the tunnel to be phosphorylated at the third.** In eukaryotes the pathway's first three enzymes are one trifunctional protein called CAD.",
      cn: "**氨甲酰磷酸同时服务于尿素循环和嘧啶合成；而在动物体内，这两种用途被彻底分开：氨甲酰磷酸合成酶 I 在线粒体里，供给尿素；氨甲酰磷酸合成酶 II 在胞质里，供给嘧啶。** 细菌不分这个家，而它那个「一酶两用」的酶值得记住是因为另一个理由：**它有三个分开的活性位点，串在一条将近 100 Å 长的通道上——谷氨酰胺在第一个位点以铵的形式供出氮，铵沿隧道走到第二个位点与碳酸氢根相遇，生成的氨甲酸再进入隧道，在第三个位点被磷酸化。** 在真核生物里，这条途径的头三个酶合为一条三功能蛋白，叫 **CAD**。",
      src: "A p.828–829"
    },
    {
      link_en: "and the next enzyme is worth a step of its own, partly for a word",
      link_cn: "下一个酶值得单占一步，其中一部分原因是为了一个词",
      en: "**Aspartate transcarbamoylase joins carbamoyl phosphate to aspartate, and that is the first committed step of pyrimidine synthesis.** **Committed is a claim about the shape of the map, and not about speed: past this point the material has nowhere else to go, whereas carbamoyl phosphate on its own could still have become urea. Rate-limiting would be a different claim — that this step is the slowest and sets the throughput — and it is not the claim being made here.** The enzyme itself is one of the most studied allosteric proteins: six catalytic and six regulatory subunits, the whole molecule existing in an active and an inactive conformation. **CTP binding the regulatory subunits shifts it toward the inactive form, and ATP prevents that shift.** **The numbers show what kind of inhibition it is: 0.8 mM CTP raises the aspartate K0.5 from about 12 mM to about 23 mM — the enzyme is made harder to saturate rather than switched off — and 0.6 mM ATP reverses it completely, so what the enzyme actually reads is a purine-to-pyrimidine ratio.**",
      cn: "**天冬氨酸转氨甲酰酶把氨甲酰磷酸接到天冬氨酸上，这就是嘧啶合成的第一个承诺步骤（committed step）。** **「承诺」说的是代谢图的形状，不是速度：过了这一点，物料再无别处可去；而氨甲酰磷酸本身仍然可能变成尿素。「限速」是另一个说法——指这一步最慢、决定整条途径的通量——而这里并没有作出那个断言。** 这个酶本身是被研究得最透的别构蛋白之一：**六个催化亚基、六个调节亚基**，整个分子存在**活性**与**非活性**两种构象。**CTP 结合到调节亚基上会把它推向非活性构象，而 ATP 阻止这一转变。** **数字说明了这是哪一类抑制：0.8 mM 的 CTP 把天冬氨酸的 K₀.₅ 从约 12 mM 抬到约 23 mM——是让酶更难被饱和，而不是把酶关掉；0.6 mM 的 ATP 又能把它完全逆转。所以这个酶实际读的是「嘌呤对嘧啶」的比值。**",
      src: "A p.828–829, figure 22-40"
    },
    {
      link_en: "every deoxyribonucleotide in the cell comes from one enzyme, and it needs a free radical",
      link_cn: "细胞里每一个脱氧核糖核苷酸都出自同一个酶，而它需要一个自由基",
      en: "Ribonucleotide reductase reduces the 2-position of the ribose of a ribonucleoside diphosphate — ADP to dADP, GDP to dGDP, and so on. **The reduction happens at a non-activated carbon: there is no carbonyl, no acid, nothing to make that carbon reactive, and no closely analogous chemical reaction is known.** **Ordinary two-electron chemistry has nothing to grip, so the enzyme uses radical chemistry instead, and it is the best-characterised example of free radicals doing biochemical work.** It is an α2β2 dimer: the catalytic subunits carry two regulatory sites and two mechanistic cysteines, the other pair carry a critical Tyr122 and a two-iron centre that makes and stabilises a tyrosyl radical. **The active sites sit at the interface between the two kinds of subunit, and the radical is too far away to act directly — so a chain of aromatic residues relays it across to an active-site cysteine.** Reducing equivalents come from NADPH by either of two routes: through thioredoxin, re-reduced by a flavoenzyme carrying FAD, or through glutathione and glutaredoxin.",
      cn: "**核糖核苷酸还原酶**把核糖核苷二磷酸上核糖的 2 位还原掉——ADP 变 dADP，GDP 变 dGDP，等等。**这次还原发生在一个「未活化」的碳上：那里没有羰基、没有酸性基团，没有任何东西让这个碳变得活泼，而且已知的化学反应里没有相近的类比。** **普通的双电子化学在这里无处下手，所以这个酶改用自由基化学——它也是「自由基在生化反应中干活」被研究得最透的例子。** 它是 **α₂β₂** 二聚体：催化亚基带着两类调节位点和两个参与机制的半胱氨酸，另一对亚基带着关键的 **Tyr122** 和一个双铁中心，负责产生并稳定一个**酪氨酰自由基**。**活性位点位于两类亚基的界面上，而那个自由基离活性位点太远、够不着底物——于是一串芳香族残基把它接力传送到活性位点的半胱氨酸上。** 还原力来自 NADPH，走两条路之一：经**硫氧还蛋白**，再由一个带 FAD 的黄素酶把它重新还原；或者经**谷胱甘肽与谷氧还蛋白**。",
      src: "A p.829–831",
      see: [{ id: "L-20-4-1", en: "thioredoxin doing the same redox job in a chloroplast", cn: "硫氧还蛋白在叶绿体里干同一份氧化还原的活" }]
    },
    {
      link_en: "and its regulation does something almost no other enzyme's does",
      link_cn: "而它的调控做了一件几乎没有别的酶会做的事",
      en: "**Each catalytic subunit carries two different kinds of regulatory site, and the second kind changes not how fast the enzyme works but which substrate it prefers.** The primary site sets overall activity: ATP bound activates, dATP bound inactivates. **The specificity site redirects it — ATP or dATP bound favours reduction of UDP and CDP; dTTP bound switches it to GDP; dGTP bound switches it to ADP; and a high level of dATP stops it altogether.** **Read the loop and the design is plain: the enzyme rotates through four jobs so that no one deoxynucleotide runs far ahead of the others, and the reason that matters is that unbalanced pools raise the error rate of DNA replication.** The switching is structural — around 50 μM dATP drives the active dimer into ring-shaped assemblies in which the radical-relay path is broken open to solvent, and the rings come apart again when dATP falls.",
      cn: "**每个催化亚基上带着两类不同的调节位点，而第二类改变的不是「酶跑多快」，而是「酶偏好哪个底物」。** 第一类位点决定总活性：结合 ATP 则激活，结合 dATP 则失活。**特异性位点则给它换方向——结合 ATP 或 dATP 时偏好还原 UDP 和 CDP；结合 dTTP 时切换到 GDP；结合 dGTP 时切换到 ADP；而 dATP 水平一高，整个酶就停工。** **把这个环读一遍，设计意图就很清楚：这个酶在四份工作之间轮转，好让任何一种脱氧核苷酸都不会跑得比别的远太多；而这之所以要紧，是因为不平衡的核苷酸库会抬高 DNA 复制的出错率。** 这种切换是结构性的——约 50 μM 的 dATP 会把有活性的二聚体驱动成环状聚集体，其中那条自由基接力通路被打断并暴露于溶剂；dATP 一降下来，环又散开。",
      src: "A p.831–832"
    },
    {
      link_en: "thymine needs one more step, and that step is where two drugs and one vitamin deficiency meet",
      link_cn: "胸腺嘧啶还要多走一步——而两种药和一种维生素缺乏正好在这一步相遇",
      en: "**dUTPase converts dUTP to dUMP, and its real job is defensive: keeping dUTP pools low so that uracil is not put into DNA in the first place.** **Thymidylate synthase then transfers a one-carbon unit from N5,N10-methylenetetrahydrofolate onto dUMP and reduces it to a methyl group — and it pays for that reduction by oxidising tetrahydrofolate to dihydrofolate, which is unusual, since most reactions leave that cofactor at the same oxidation level.** **So a second enzyme is obligatory: dihydrofolate reductase must regenerate tetrahydrofolate, and serine hydroxymethyltransferase then restores the methylene form using serine.** The clinical reading follows directly: about 10 % of people, and up to 50 % in impoverished communities, are folate-deficient; **less thymidylate means uracil goes into DNA instead, repair enzymes recognise and excise it, and the resulting strand breaks damage the DNA** — which is the route from a vitamin deficiency to heart disease, cancer, brain dysfunction, and neural tube defects in pregnancy.",
      cn: "**dUTP 酶把 dUTP 变成 dUMP，而它真正的职责是防御性的：把 dUTP 的库存压低，好让尿嘧啶一开始就进不了 DNA。** **胸苷酸合酶接着把一个一碳单位从 N⁵,N¹⁰-亚甲基四氢叶酸转到 dUMP 上，并把它还原成甲基——而它为这次还原付的代价，是把四氢叶酸氧化成二氢叶酸；这很不寻常，因为大多数反应都让这个辅因子停在原来的氧化态上。** **于是第二个酶就是强制性的：二氢叶酸还原酶必须把四氢叶酸再生出来，然后由丝氨酸羟甲基转移酶用丝氨酸把亚甲基形式补回去。** 临床上的读法由此直接得出：约 **10%** 的人口——在贫困社区可高达 **50%**——处于叶酸缺乏状态；**胸苷酸变少，尿嘧啶就被装进 DNA，修复酶认出并切掉它，由此产生的断链损伤 DNA**——这就是从一种维生素缺乏通向心脏病、癌症、脑功能障碍，以及孕期神经管缺陷的那条路。",
      src: "A p.833"
    },
    {
      link_en: "now the other end of the subject: what happens when a nucleotide is taken apart",
      link_cn: "现在换到题目的另一端：一个核苷酸被拆掉时会发生什么",
      en: "5-Nucleotidase strips the phosphate, adenosine deaminase and hydrolysis give hypoxanthine, and **xanthine oxidase oxidises hypoxanthine to xanthine and then xanthine to uric acid — a flavoenzyme carrying one molybdenum atom and four iron-sulfur centres, using molecular oxygen as its electron acceptor. It catalyses two consecutive steps, so inhibiting it once blocks the pathway twice.** Guanylate converges on the same end. **Then the species ladder, and this is where the answer depends on who you are asking about: uric acid is the excreted end product in primates, birds, reptiles and insects; in most other mammals urate oxidase degrades it further to allantoin, and other animals go on to allantoate, urea and ammonium.** **A human is a primate with no working urate oxidase, so in a human the chain stops at uric acid — which is exactly why gout is a human disease.** A healthy adult excretes about 0.6 g of uric acid a day. Pyrimidines are tidier: thymine's carbons end as succinyl-CoA, cytosine's and uracil's as acetyl-CoA.",
      cn: "5-核苷酸酶先把磷酸去掉，经腺苷脱氨酶和水解得到次黄嘌呤，**黄嘌呤氧化酶再把次黄嘌呤氧化成黄嘌呤、又把黄嘌呤氧化成尿酸——它是一个黄素酶，辅基里带一个钼原子和四个铁硫中心，电子受体是分子氧。它连着催化两步，所以抑制它一次，等于把通路堵住两处。** 鸟苷酸最后也汇到同一个终点。**接下来是物种阶梯，而答案取决于你问的是谁：尿酸是灵长类、鸟类、爬行类和昆虫排出的终产物；在大多数其他哺乳动物体内，尿酸氧化酶会把它继续降解成尿囊素，另一些动物还会继续走到尿囊酸、尿素和铵。** **人是灵长类，而且体内没有能工作的尿酸氧化酶——所以在人身上，这条链就停在尿酸；这正是痛风成为一种人类疾病的原因。** 一个健康成年人每天排出约 **0.6 g** 尿酸。嘧啶那边干净得多：胸腺嘧啶的碳最终成为琥珀酰-CoA，胞嘧啶和尿嘧啶的碳成为乙酰-CoA。",
      src: "A p.833–834",
      see: [{ id: "4-1-5", en: "the degradation routes in outline", cn: "降解路线的整体轮廓" }]
    },
    {
      link_en: "and losing a recycling enzyme causes overproduction, which is the paradox worth holding",
      link_cn: "而丢掉一个「回收」的酶反倒导致产量过剩——这个悖论值得记住",
      recall_en: "free bases live only here, in the salvage half, as the first step of this spine said",
      recall_cn: "如本条主线第一步所说，游离碱基只活在这一半——补救途径里",
      en: "Free bases arrive constantly from nucleotide turnover and are mostly recycled in one reaction: **adenosine phosphoribosyltransferase joins free adenine to PRPP, and hypoxanthine-guanine phosphoribosyltransferase does the same for guanine and hypoxanthine.** **A genetic lack of the second enzyme causes Lesch-Nyhan syndrome — almost exclusively in young boys, apparent around age 2: poor coordination, intellectual deficits, and compulsive self-destructive behaviour.** **The paradox resolves in two moves: the unsalvaged bases go on to uric acid, and the PRPP that would have been spent on them piles up instead — and rising PRPP drives the de novo pathway harder. Losing a recycling enzyme therefore causes purine overproduction, not shortage.** A neighbouring enzyme fails differently: **adenosine deaminase deficiency raises cellular dATP a hundredfold, and dATP is the inhibitor that shuts ribonucleotide reductase down, so T lymphocytes end up starved of every other deoxynucleotide — a severe immunodeficiency, and one of the first targets of human gene therapy, in 1990.**",
      cn: "游离碱基不断从核苷酸的更新中产生，绝大多数只用一个反应就被回收：**腺嘌呤磷酸核糖转移酶把游离腺嘌呤接到 PRPP 上，次黄嘌呤-鸟嘌呤磷酸核糖转移酶（HGPRT）对鸟嘌呤和次黄嘌呤做同样的事。** **后一个酶的遗传性缺失导致 Lesch-Nyhan 综合征——几乎只见于男孩，约两岁时显现：协调能力差、智力缺陷，以及强迫性的自毁行为。** **这个悖论分两步解开：没被回收的碱基继续走向尿酸；同时，本该被它们消耗掉的 PRPP 转而积累起来——而 PRPP 升高会把从头合成途径推得更猛。所以丢掉一个回收酶造成的是嘌呤生产过剩，而不是短缺。** 隔壁的另一个酶则以另一种方式出故障：**腺苷脱氨酶缺乏使细胞内 dATP 升高一百倍，而 dATP 正是关停核糖核苷酸还原酶的那个抑制剂——于是 T 淋巴细胞缺乏其余每一种脱氧核苷酸，造成严重免疫缺陷；它也是 1990 年人类基因治疗最早的靶点之一。**",
      src: "A p.834–835"
    },
    {
      link_en: "and the insoluble end product explains one disease and one drug completely",
      link_cn: "而那个难溶的终产物，把一种病和一种药完整地解释清楚了",
      en: "**Uric acid is the least soluble molecule on its own pathway, and when it is in excess it crystallises as sodium urate in joints — inflamed, painful, arthritic — and deposits in the kidney tubules. That is gout.** It occurs predominantly in males, its precise cause is not known, and **it often involves under-excretion of urate rather than overproduction; the long-standing attribution to high living is described as erroneous.** **Allopurinol inhibits xanthine oxidase, and the mechanism is elegant: it is a small alteration of the enzyme's own substrate, the enzyme converts it to oxypurinol, and oxypurinol then stays tightly bound in the reduced enzyme's active site and inactivates it. The drug is activated by the target it destroys.** **And the therapeutic gain is chemical rather than quantitative: with that enzyme blocked, what gets excreted is xanthine and hypoxanthine, which are more water-soluble than uric acid and much less likely to crystallise. An insoluble end product has been replaced by two soluble precursors.**",
      cn: "**尿酸是它自己那条通路上溶解度最差的分子；一旦过量，它就在关节里析出为尿酸钠晶体——关节发炎、疼痛、出现关节炎样改变——并沉积在肾小管里。这就是痛风。** 它以男性为主，确切成因不明，而**它常常涉及尿酸排泄不足，而非生成过多；长期以来把它归因于「吃得太好」的说法被明确称为错误。** **别嘌醇（allopurinol）抑制黄嘌呤氧化酶，其机制很漂亮：它是该酶自身底物的一个小改动，酶把它转化成别黄嘌呤（oxypurinol），而别黄嘌呤随后牢牢卡在还原态酶的活性位点里不走，把酶废掉。这个药是被它要摧毁的靶点亲手激活的。** **而治疗上的收益是化学性的、不是数量性的：那个酶被堵住之后，排出去的东西变成黄嘌呤和次黄嘌呤，它们比尿酸更易溶于水、也远不容易结晶。一个不溶的终产物，被换成了两个可溶的前体。**",
      src: "A p.835–836"
    },
    {
      link_en: "and the remaining drugs all exploit the same weakness in a dividing cell",
      link_cn: "而其余几种药，利用的都是分裂细胞身上同一个弱点",
      en: "**A cancer cell needs more nucleotides than a resting one, so it is more sensitive to inhibitors of these pathways — the selectivity comes from demand, not from a cancer-specific target.** **Fluorouracil is not itself the inhibitor: the salvage pathways convert it in the cell to FdUMP, which enters thymidylate synthase's normal mechanism, gets stuck when the hydride shift that would release product is blocked, and leaves a dead-end covalent complex. The enzyme is destroyed by doing its own job on the wrong substrate.** **Methotrexate attacks the other half of that cycle, competitively inhibiting dihydrofolate reductase, which binds it about 100 times more tightly than its real substrate.** **And trimethoprim is selectivity done properly: it binds the bacterial version of that same enzyme nearly 100,000 times better than the mammalian one, which is what makes it an antibiotic rather than a poison.** Allopurinol and trimethoprim both came from Gertrude Elion and George Hitchings, who also developed acyclovir.",
      cn: "**癌细胞比静止细胞需要更多核苷酸，所以它对这些通路的抑制剂更敏感——这种选择性来自「需求量」，而不是来自某个癌细胞专有的靶点。** **氟尿嘧啶本身并不是抑制剂：补救途径在细胞内把它变成 FdUMP，FdUMP 进入胸苷酸合酶的正常反应机制，走到那个本该释放产物的氢负离子转移时被卡住，留下一个走不下去的共价复合物。这个酶是因为对着错误的底物照常干活而被毁掉的。** **甲氨蝶呤打的是同一个循环的另一半：竞争性抑制二氢叶酸还原酶，而该酶结合它的紧密程度约为结合真底物的 100 倍。** **甲氧苄啶则是「选择性」的正确做法：它结合细菌那一版同一个酶的能力，比结合哺乳动物版本强将近 100,000 倍——这正是它能当抗生素而不是当毒药的原因。** 别嘌醇和甲氧苄啶都出自 Gertrude Elion 与 George Hitchings 之手，他们还开发了阿昔洛韦。",
      src: "A p.835–838"
    }
  ],
  terms: [
    { en: "de novo and salvage pathways", cn: "从头合成途径与补救途径",
      def_en: "The two ways a cell obtains nucleotides. De novo synthesis starts from amino acids, ribose 5-phosphate, CO2 and NH3 and is nearly identical in all organisms; salvage recycles the free bases and nucleosides released when nucleic acids break down. The consequence worth holding is that free bases are not intermediates of the de novo routes at all, only of the salvage routes — so the degradation half of this subject is what feeds the recycling half.",
      def_cn: "细胞获得核苷酸的两条路。从头合成从氨基酸、核糖-5-磷酸、CO₂ 和 NH₃ 出发，在所有生物里几乎一样；补救途径回收核酸降解时释放的游离碱基和核苷。要记住的推论是：游离碱基根本不是从头合成途径的中间物，只是补救途径的中间物——所以这个题目的降解那一半，正是喂养回收那一半的来源。" },
    { en: "the two rings, built in opposite orders", cn: "两个环，相反的建造顺序",
      def_en: "The purine ring is assembled a few atoms at a time on ribose that is already in place, so a free purine base never exists along the route; the pyrimidine ring is finished first as orotate and mounted on ribose 5-phosphate afterwards. PRPP serves both but enters at opposite ends — the first committed step of the purine route acts on it, while it arrives three steps from the end of the pyrimidine route. In both, the ribose is retained in the product.",
      def_cn: "嘌呤环是在已经就位的核糖上、一次几个原子地拼起来的，所以整条路线上不存在游离嘌呤碱基；嘧啶环则先造完（到乳清酸为止），再装到核糖-5-磷酸上。PRPP 两条路都用，但进场位置相反——嘌呤路线的第一个承诺步骤作用的就是它，而在嘧啶路线上它要到倒数第三步才出现。两条路里核糖都留在产物中。" },
    { en: "5-phosphoribosylamine and the metabolon argument", cn: "5-磷酸核糖胺与 metabolon 论证",
      def_en: "The product of the first committed step of purine synthesis, with a half-life of 30 seconds at pH 7.5. An intermediate that short-lived cannot diffuse across a cytosol to find its next enzyme, so it must be handed over directly — which is the section's main evidence that these enzymes work as a multienzyme complex. Single eukaryotic polypeptides carrying several of the activities support the same reading.",
      def_cn: "嘌呤合成第一个承诺步骤的产物，pH 7.5 下半衰期只有 30 秒。这么短命的中间体不可能横穿胞质去找下一个酶，只能被直接递过去——这是本节支持「这些酶以多酶复合体形式工作」的主要证据。真核生物里单条多肽同时携带其中数种活性，也支持同一读法。" },
    { en: "reciprocal funding of the two purine branches", cn: "嘌呤两分支的互相出资",
      def_en: "Converting the common intermediate to adenylate requires GTP, while converting it to guanylate requires ATP. Because each branch is paid for with the other branch's nucleotide, a shortage of one automatically slows production of the other and the two pools balance themselves without any dedicated sensor. It is one of four cooperating controls on purine synthesis.",
      def_cn: "把共同中间物转成腺苷酸需要 GTP，转成鸟苷酸则需要 ATP。由于每一支都由另一支的核苷酸买单，任一种短缺都会自动放慢另一种的生产，两个库不需要任何专门的传感器就能自我平衡。这是嘌呤合成四重协同调控中的一重。" },
    { en: "committed step versus rate-limiting step", cn: "承诺步骤与限速步骤",
      def_en: "Two different claims that often coincide and are not the same. Committed is about the shape of the metabolic map — past this point the material has no destination but this pathway's product. Rate-limiting is about speed — this step is the slowest and sets the throughput. Aspartate transcarbamoylase catalyses the first committed step of pyrimidine synthesis; committed steps are the sensible place to put regulation, which is why the two labels so often land on the same enzyme.",
      def_cn: "两个经常重合、但并不相同的断言。「承诺」讲的是代谢图的形状——过了这一点，物料除了本途径的产物再无别的去处。「限速」讲的是速度——这一步最慢，决定整条途径的通量。天冬氨酸转氨甲酰酶催化嘧啶合成的第一个承诺步骤；而承诺步骤正是安放调控的合理位置，这也是两个标签常落在同一个酶身上的原因。" },
    { en: "aspartate transcarbamoylase", cn: "天冬氨酸转氨甲酰酶",
      def_en: "Six catalytic and six regulatory subunits, the whole molecule existing in an active and an inactive conformation. CTP bound to the regulatory subunits shifts it toward inactive and ATP prevents that shift, so the enzyme reads a purine-to-pyrimidine ratio rather than either nucleotide alone. Quantitatively, 0.8 mM CTP raises the aspartate K0.5 from about 12 to about 23 mM — harder to saturate rather than switched off — and 0.6 mM ATP fully reverses it.",
      def_cn: "六个催化亚基加六个调节亚基，整个分子存在活性与非活性两种构象。CTP 结合调节亚基把它推向非活性，ATP 阻止这一转变——所以这个酶读的是「嘌呤对嘧啶」的比值，而不是其中任何一种单独的浓度。定量上：0.8 mM CTP 把天冬氨酸的 K₀.₅ 从约 12 mM 抬到约 23 mM——是更难饱和，而不是被关掉；0.6 mM ATP 又能完全逆转。" },
    { en: "ribonucleotide reductase", cn: "核糖核苷酸还原酶",
      def_en: "The single enzyme that makes every deoxyribonucleotide, by reducing the 2-position of a ribonucleoside diphosphate — a non-activated carbon with no close chemical analogue, which is why it works through a tyrosyl radical rather than ordinary two-electron chemistry. An α2β2 dimer whose active sites lie at the interface; the radical is relayed to them along a chain of aromatic residues. Reducing equivalents come from NADPH through thioredoxin or through glutathione and glutaredoxin.",
      def_cn: "制造一切脱氧核糖核苷酸的那个唯一的酶，做法是还原核糖核苷二磷酸的 2 位——那是一个未活化的碳，化学上没有相近的类比，所以它靠酪氨酰自由基而不是普通的双电子化学来完成。它是 α₂β₂ 二聚体，活性位点位于两类亚基的界面；自由基沿一串芳香族残基被接力传送过去。还原力来自 NADPH，经硫氧还蛋白，或经谷胱甘肽与谷氧还蛋白。" },
    { en: "the substrate-specificity site", cn: "底物特异性位点",
      def_en: "The second kind of regulatory site on each catalytic subunit of ribonucleotide reductase, which changes which ribonucleotide is reduced rather than how fast. ATP or dATP favours UDP and CDP; dTTP switches it to GDP; dGTP switches it to ADP; high dATP stops it altogether. The loop exists to keep the four deoxynucleotide pools balanced, because unbalanced pools raise the error rate of DNA replication. A separate primary site sets overall activity.",
      def_cn: "核糖核苷酸还原酶每个催化亚基上的第二类调节位点，它改变的是「还原哪一种核糖核苷酸」，而不是速度。ATP 或 dATP 使它偏好 UDP 与 CDP；dTTP 把它切到 GDP；dGTP 把它切到 ADP；dATP 一高就全停。这个环存在的目的是让四种脱氧核苷酸库保持平衡，因为不平衡的核苷酸库会抬高 DNA 复制的出错率。另有一个独立的主位点负责总活性。" },
    { en: "thymidylate synthase and dihydrofolate reductase", cn: "胸苷酸合酶与二氢叶酸还原酶",
      def_en: "The only cellular route to thymine, and therefore a two-enzyme drug target. The synthase moves a one-carbon unit onto dUMP and reduces it to a methyl group, paying for that reduction by oxidising tetrahydrofolate to dihydrofolate — unusual, since most reactions leave that cofactor untouched — so the reductase must regenerate it. Blocking either enzyme stops thymine, uracil goes into DNA instead, repair excises it, and the strand breaks do the damage; the same route explains what folate deficiency does.",
      def_cn: "细胞通向胸腺嘧啶的唯一路线，因而是一个双酶药靶。合酶把一个一碳单位搬到 dUMP 上并将其还原成甲基，为这次还原付出的代价是把四氢叶酸氧化成二氢叶酸——这很不寻常，因为大多数反应不改变这个辅因子的氧化态——所以还原酶必须把它再生出来。堵住其中任一个酶，胸腺嘧啶就断供，尿嘧啶被装进 DNA，修复酶把它切掉，造成的断链带来损伤；叶酸缺乏走的也是同一条路。" },
    { en: "why the chain stops at uric acid in a human", cn: "为什么这条链在人身上停在尿酸",
      def_en: "Uric acid is the excreted end product of purine breakdown in primates, birds, reptiles and insects. In most other mammals urate oxidase degrades it further to allantoin, and other animals continue to allantoate, urea and ammonium. A human is a primate with no working urate oxidase, so the chain stops at the least soluble molecule on it — which is why gout is a human disease, and why a statement true of mammals as a class can be false of us.",
      def_cn: "在灵长类、鸟类、爬行类和昆虫体内，尿酸是嘌呤降解排出的终产物。在大多数其他哺乳动物体内，尿酸氧化酶会把它继续降解成尿囊素，另一些动物还会走到尿囊酸、尿素和铵。人是灵长类，而且体内没有能工作的尿酸氧化酶——所以这条链停在它上面溶解度最差的那个分子上；这就是痛风为何是人类疾病，也说明一句对「哺乳动物」这个类别成立的话，可能对我们自己并不成立。" },
    { en: "the Lesch-Nyhan paradox", cn: "Lesch-Nyhan 的悖论",
      def_en: "Losing hypoxanthine-guanine phosphoribosyltransferase — a salvage enzyme — causes purine overproduction rather than shortage. The unsalvaged bases go on to uric acid, and the PRPP that would have been spent on them accumulates instead, and rising PRPP drives the de novo pathway harder. The syndrome appears almost exclusively in young boys, around age 2, with poor coordination, intellectual deficits and compulsive self-destructive behaviour.",
      def_cn: "丢掉次黄嘌呤-鸟嘌呤磷酸核糖转移酶——一个补救途径的酶——造成的是嘌呤生产过剩，而不是短缺。没被回收的碱基继续走向尿酸，而本该被它们花掉的 PRPP 转为积累；PRPP 升高又把从头合成推得更猛。该综合征几乎只见于男孩，约两岁显现，表现为协调能力差、智力缺陷和强迫性自毁行为。" },
    { en: "mechanism-based inactivation", cn: "机制依赖性失活",
      def_en: "How fluorouracil works. The drug itself inhibits nothing; salvage pathways convert it inside the cell to FdUMP, which enters thymidylate synthase's normal mechanism and proceeds until the hydride shift that would release product is blocked, leaving a stable dead-end covalent complex. The enzyme is destroyed by carrying out its own reaction on the wrong substrate — which is also why the drug hits fast-dividing cells hardest.",
      def_cn: "氟尿嘧啶的作用方式。这个药本身什么也不抑制；补救途径在细胞内把它变成 FdUMP，后者进入胸苷酸合酶的正常反应机制，一路走到那个本该释放产物的氢负离子转移被卡住为止，留下一个稳定的、走不下去的共价复合物。这个酶是因为对着错误的底物执行自己的反应而被毁掉的——这也正是该药对快速分裂细胞打击最重的原因。" }
  ]
};
