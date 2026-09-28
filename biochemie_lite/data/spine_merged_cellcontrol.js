/* Merged spines — motor proteins, and the control of cell division. 速通简洁版,
   ONE spine per TOPIC.

   Three topics, three node spines (27 steps) between them, coming out here as three
   chains of 12, 7 and 8. Each of the three source nodes is marked 只作科普性了解 —
   a brief orientation — in the node list, so these chains are deliberately kept to
   the length the material actually has. Nothing is padded to reach a step count.

   The merge rule elsewhere in this app folds a Czech telling into a Lehninger one.
   Here there is nothing to fold: each of these topics has exactly one member node,
   a Lehninger one, and no Czech partner. So the work is conversion rather than
   synthesis — the substance, the numbers and every `src` of the source spine are
   kept, and the prose is rebuilt so that each step is one claim in order. Anything
   added to make a chain readable carries `beyond: true` and says why.

   Every step keeps a `src` naming the pages it was read from: `A p.y` for Lehninger.

   The last two topics are two halves of one story — a clock that stops a damaged
   cell, and what a cell does once that clock is broken — so they point at each
   other with `see` and `recall_*` instead of restating anything.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* --------------------------------------------------------------- 马达蛋白 ---- */
window.BIOLITE_SPINE["key:motor-proteins"] = {
  assumed: ["protein", "polypeptide", "amino acid", "domain", "conformation",
            "molecule", "ion", "cell", "ATP", "ADP", "energy", "enzyme", "hydrolysis",
            "membrane", "cell membrane", "ligand", "subunit", "muscle", "calcium",
            "concentration", "polymer", "signal", "phosphate", "protein-ligand"],
  nodeTitle_en: "Actin, myosin and molecular motors",
  nodeTitle_cn: "肌动蛋白、肌球蛋白与分子马达",
  title_en: "Every filament keeps its own length, and a muscle shortens because the filaments slide past each other",
  title_cn: "每一根肌丝都保持原来的长度；肌肉之所以变短，是因为肌丝彼此滑了过去",
  terms: [
    { en: "myosin", cn: "肌球蛋白",
      def_en: "Two heavy chains and four light chains. The heavy chains wind together into a fibrous coiled-coil tail and end in two globular heads. Tails stick to the tails of other such molecules to build a thick filament; the heads touch actin and hydrolyse ATP.",
      def_cn: "两条重链加四条轻链。重链彼此缠成一段纤维状的卷曲螺旋尾，末端是两个球状的头。尾巴与别的同类分子的尾巴黏在一起搭出粗肌丝；头部接触肌动蛋白并水解 ATP。" },
    { en: "thick filament", cn: "粗肌丝",
      def_en: "Several hundred myosin molecules joined by their tails, bipolar: tails toward the middle, heads projecting from both ends in stacked arrays. Heads pointing outward at both ends let one filament pull on thin filaments at either side and draw them toward its centre.",
      def_cn: "几百个肌球蛋白分子靠尾部连成的双极结构：尾朝中间，头从两端成排伸出。两端都有头向外伸，使同一根肌丝可以拉住两侧的细肌丝，把它们一起朝自己的中心拽。" },
    { en: "F-actin and G-actin", cn: "F-肌动蛋白与 G-肌动蛋白",
      def_en: "G is the globular subunit, Mr 42,000; F is the polymer made by stringing many of them together, and it is the backbone of a thin filament. ATP is hydrolysed during assembly alone, so every subunit in a finished filament carries ADP and that hydrolysis powers no contraction.",
      def_cn: "G 是球状亚基，Mr 42,000；F 是许多 G 串起来的多聚体，也是细肌丝的骨架。ATP 只在组装过程中被水解，所以成品肌丝里每个亚基带的都是 ADP，这步水解对收缩不供能。" },
    { en: "thin filament", cn: "细肌丝",
      def_en: "F-actin together with troponin and tropomyosin bound along it. The actin is what myosin heads walk on; the other two are the switch that decides whether they may.",
      def_cn: "F-肌动蛋白，外加沿它结合的肌钙蛋白与原肌球蛋白。肌动蛋白是肌球蛋白头行走的路面；另两个是决定「准不准走」的开关。" },
    { en: "sarcomere", cn: "肌节",
      def_en: "The contractile unit: thick filaments in the middle interleaved at both ends with thin filaments, bounded by a Z disk at each end, each thick filament surrounded by six thin ones in cross-section. During contraction it is the only thing that shortens.",
      def_cn: "收缩单位：粗肌丝居中，两端与细肌丝交错嵌插，两端各有一个 Z 盘为界；横截面上每根粗肌丝被六根细肌丝围绕。收缩时变短的只有它。" },
    { en: "sliding filament mechanism", cn: "肌丝滑动机制",
      def_en: "Thick and thin filaments move past one another, drawing the Z disks together and narrowing the I bands, while every filament keeps its own length. Driven by myosin heads that release one actin subunit and rebind a farther one, using the energy of ATP hydrolysis for that release-and-rebind.",
      def_cn: "粗、细肌丝彼此滑过，把 Z 盘拉近、使 I 带变窄，而每根肌丝长度不变。动力来自肌球蛋白头：它放开一个肌动蛋白亚基、再抓住更远的一个，ATP 水解的能量花在这「松开–重抓」上。" },
    { en: "troponin and tropomyosin", cn: "肌钙蛋白与原肌球蛋白",
      def_en: "Two accessory proteins bound along the thin filament. Ca2+ released from the sarcoplasmic reticulum binds troponin, the complex of the two changes shape, and that change starts the cycle of actin-myosin interactions. Calcium acts here and never on myosin.",
      def_cn: "沿细肌丝结合的两个辅助蛋白。肌浆网放出的 Ca2+ 结合肌钙蛋白，两者的复合体随之变构，这个变化启动肌动蛋白–肌球蛋白的相互作用循环。钙只在这里起作用，从不作用于肌球蛋白。" },
    { en: "sarcoplasmic reticulum", cn: "肌浆网",
      def_en: "An internal membrane compartment of a muscle cell that holds Ca2+ away from the filaments until a signal arrives, then releases it. It makes contraction a triggered event rather than a continuous one.",
      def_cn: "肌细胞内部的膜性区室，在信号到来之前把 Ca2+ 扣在肌丝够不着的地方，信号到了才放出来。它使收缩成为一次被扳动的事件，而不是持续进行的状态。" }
  ],
  steps: [
    {
      en: "Muscle contraction is ordinary protein-ligand binding put to work: myosin and actin are two proteins that bind and release each other over and over, and a motor protein is one that organises such binding in space and in time, so that the repetition adds up to movement in one direction. **The contractile force of a muscle appears where myosin and actin touch, and neither protein produces any force on its own.**",
      cn: "肌肉收缩就是把普通的蛋白质–配体结合拿去干活：肌球蛋白（myosin）与肌动蛋白（actin）是两个反复彼此结合又松开的蛋白；而所谓马达蛋白，就是把这种结合在空间和时间上组织起来、让重复累加成朝单一方向运动的蛋白。**肌肉的收缩力出现在肌球蛋白与肌动蛋白接触的地方；这两个蛋白单独都不产生任何力，力只在它们反复彼此结合又松开时才出现。**",
      src: "A p.169, p.172, §5.3",
      see: [{ id: "L-5-2-1", en: "protein-ligand binding and induced fit, without the timing", cn: "蛋白质–配体结合与诱导契合本身，不含时序那一层" }]
    },
    {
      link_en: "start with one myosin molecule, because its two halves do two different jobs",
      link_cn: "先看一个肌球蛋白分子，因为它的两半干的是两件不同的事",
      en: "A myosin molecule is built from two heavy chains and four light chains. The two heavy chains wind around each other along most of their length into a fibrous coiled-coil tail, and their far ends each fold into a globular head, one head per heavy chain, with the light chains bound to those heads. **That shape fixes a division of labour: a myosin tail sticks to other myosin tails, and a myosin head is the part that touches actin and hydrolyses ATP.**",
      cn: "一个肌球蛋白分子由两条重链和四条轻链搭成。两条重链在大部分长度上彼此缠绕，形成一段纤维状的卷曲螺旋「尾」；它们的远端各折成一个球状的「头」，每条重链一个，轻链就结合在这些头上。**这个形状把分工定死了：肌球蛋白的尾只和别的肌球蛋白的尾黏在一起，头才是接触肌动蛋白、并水解 ATP 的那一部分。**",
      src: "A pp.169–170"
    },
    {
      link_en: "several hundred of them assemble into the first of the two filaments",
      link_cn: "几百个这样的分子组装成两种肌丝里的第一种",
      en: "Several hundred myosin molecules associate by their tails into a thick filament, and that assembly is bipolar — every tail points toward the middle, so the heads project from both ends in regular stacked arrays and the two halves face in opposite directions. **A filament carrying heads that point outward at both of its ends can pull on something at each end at once and draw the two toward its own centre.**",
      cn: "几百个肌球蛋白分子靠尾部彼此缔合，形成一根粗肌丝，而这个组装体是双极的 —— 每条尾巴都朝向中间，于是头部从两端整齐成排地伸出，两半的朝向正好相反。**一根两端都有头向外伸的粗肌丝，可以同时拉住两侧的东西，把它们一起朝自己的中心拽过来；这正是双极组装换来的东西。**",
      src: "A p.170"
    },
    {
      link_en: "and the second filament is built from a different protein entirely",
      link_cn: "第二种肌丝则完全由另一种蛋白搭成",
      en: "The thin filament is F-actin — a polymer made by stringing together globular subunits called G-actin, each of Mr 42,000 — with two accessory proteins bound along its length, troponin and tropomyosin. Those two do no pulling at all. **Troponin and tropomyosin are a switch laid along the thin filament, and what that switch decides is taken up in the last steps of this chain.**",
      cn: "细肌丝是 F-肌动蛋白 —— 一种由球状亚基 G-肌动蛋白（每个 Mr 42,000）串接聚合而成的多聚体 —— 沿它的长度还结合着两个辅助蛋白：肌钙蛋白（troponin）与原肌球蛋白（tropomyosin）。这两个蛋白完全不出力。**肌钙蛋白和原肌球蛋白是铺在细肌丝上的一个开关；这个开关决定什么，留到本条主线的最后几步再说。**",
      src: "A p.170"
    },
    {
      link_en: "one point here is easy to get backwards",
      link_cn: "这里有一点很容易记反",
      en: "Actin does hydrolyse ATP, and it does so only while a filament is being assembled, so every G-actin subunit in a finished thin filament is carrying ADP and that hydrolysis contributes nothing whatever to contraction. **The energy for contraction comes from ATP hydrolysed in a myosin head, and the ATP that actin hydrolysed while the filament was being built has already been spent on assembly.**",
      cn: "肌动蛋白确实会水解 ATP —— 但只在肌丝正在组装的时候水解；因此成品细肌丝里每一个 G-肌动蛋白亚基带的都是 ADP，这一步水解对收缩毫无贡献。**收缩的能量来自肌球蛋白头部水解的 ATP；肌丝组装时肌动蛋白水解掉的那些 ATP，早就花在组装上了。**",
      src: "A p.170"
    },
    {
      link_en: "put the two filaments together and you get the unit that actually contracts",
      link_cn: "把两种肌丝装到一起，才得到真正会收缩的那个单位",
      en: "The contractile unit of a muscle is the sarcomere: thick filaments in the middle, interleaved at both ends with thin filaments running in from either side, the whole unit bounded at each end by a Z disk, and in cross-section each thick filament surrounded by six thin ones. **That six-around-one geometry means a myosin head has actin within reach wherever along the thick filament the head happens to sit.**",
      cn: "肌肉的收缩单位是肌节（sarcomere）：粗肌丝居中，两端与从两侧伸进来的细肌丝交错嵌插，整个单位两端各由一个 Z 盘界定；从横截面看，每根粗肌丝被六根细肌丝围绕。**「一根粗丝被六根细丝围住」这个几何布局，意味着无论肌球蛋白头长在粗肌丝的哪一段，它伸手可及处总有肌动蛋白。**",
      src: "A pp.170–171"
    },
    {
      link_en: "and now the claim this whole chain exists for",
      link_cn: "现在轮到整条主线为之存在的那个论断",
      en: "Contraction is sliding. Thick and thin filaments slide past each other, the Z disks at the two ends of a sarcomere are drawn closer together, and the I bands — the parts of the striped pattern that contain thin filaments alone — narrow as thin filaments are pulled in among the thick ones. **Only the sarcomere gets shorter: every filament inside it keeps exactly the length it had before the muscle contracted.**",
      cn: "收缩就是滑动。粗肌丝与细肌丝彼此滑过，肌节两端的 Z 盘被拉得更近，而 I 带 —— 条纹图案中只含细肌丝的那些部分 —— 随着细肌丝被拉进粗肌丝之间而变窄。**收缩时变短的只有肌节本身：它里面的每一根粗肌丝和每一根细肌丝，都保持着肌肉收缩之前的那个长度。**",
      src: "A p.171",
      beyond: true,
      beyondNote: "The narrowing of the I bands and the approach of the Z disks are on the cited page; that an I band is specifically the zone containing thin filaments only is the standard definition of the term and is not spelled out there."
    },
    {
      link_en: "so what does the sliding? one head, doing one thing over and over",
      link_cn: "那么是什么在滑？一个头部，把一件事反复做下去",
      en: "ATP hydrolysis in a myosin head drives a series of conformational changes in that head. The changes first dissociate the head from the F-actin subunit it was holding, and eventually reattach it to a different subunit farther along the thin filament. **A myosin head therefore walks along actin, and the thick filament slides forward past the thin filaments beside it as its heads walk.**",
      cn: "肌球蛋白头部水解 ATP，驱动这个头部发生一连串构象变化。这些变化先让头部从它原本抓着的那个 F-肌动蛋白亚基上解离，最终再把它接到细肌丝上更远处的另一个亚基上。**于是肌球蛋白头沿着肌动蛋白「走」了过去；头每走一步，粗肌丝就向前滑过旁边的细肌丝一段。**",
      src: "A p.171"
    },
    {
      link_en: "worth stating carefully, because what the ATP pays for is not the obvious thing",
      link_cn: "这一点值得说清楚，因为 ATP 买下的并不是直觉上那件事",
      recall_en: "three steps up the question was which protein spends the ATP; here it is what the ATP is spent on",
      recall_cn: "前面第三步问的是「谁花掉 ATP」，这一步问的是「ATP 花在什么上」",
      en: "The energy of ATP hydrolysis buys the release-and-rebind half of the cycle — it is what makes a myosin head let go of one actin subunit and take hold of another one farther along. A head that could only grip would hold the two filaments still. **A head that lets go, reaches and grips again turns a repeated chemical reaction into steady motion in one direction, and that directionality is what the word motor means here.**",
      cn: "ATP 水解的能量买下的是循环中「松开–重新抓住」的那一半 —— 它让肌球蛋白头放开一个肌动蛋白亚基，再去抓住更远处的另一个。一个只会抓紧的头，只能把两根肌丝固定在原地。**会松手、伸出去、再抓住的头，把反复进行的化学反应变成了朝单一方向的持续运动；这份方向性，就是「马达」二字在这里的含义。**",
      src: "A pp.171–172"
    },
    {
      link_en: "one thing is still missing: what starts it",
      link_cn: "还差一样东西：是什么让它开始",
      en: "Contraction is started by Ca2+ released from the sarcoplasmic reticulum, which is an internal membrane compartment inside a muscle cell that holds calcium away from the filaments until a signal arrives. **The trigger for contraction is a rise in the calcium concentration around the filaments, which is a different question from where the energy for contraction comes from.**",
      cn: "收缩由肌浆网释放的 Ca2+ 启动；肌浆网（sarcoplasmic reticulum）是肌细胞内部的一个膜性区室，在信号到来之前把钙扣在肌丝够不着的地方。**收缩的扳机是肌丝周围钙浓度的升高 —— 这和「收缩的能量从哪来」是两个不同的问题。**",
      src: "A pp.171–172",
      beyond: true,
      beyondNote: "That Ca2+ is released from the sarcoplasmic reticulum is on the cited pages; describing it as an internal membrane compartment that sequesters calcium is standard cell biology, added here so the name is not a bare noun."
    },
    {
      link_en: "and calcium does its work on the thin filament, nowhere near the motor",
      link_cn: "而钙是在细肌丝上干活的，离马达远得很",
      recall_en: "troponin and tropomyosin were named on the thin filament seven steps up and left with nothing to do; this is what they do",
      recall_cn: "第七步在细肌丝上点了肌钙蛋白和原肌球蛋白的名却没给它们活干 —— 它们干的就是这个",
      en: "Released Ca2+ binds troponin, and the change this produces in the troponin-tropomyosin complex is what starts the cycle of actin-myosin interactions. Calcium never touches myosin at all. **The switch for contraction sits on the thin filament and works by changing what myosin is allowed to reach, so the trigger and the fuel are two separate questions with two separate answers.**",
      cn: "释放出来的 Ca2+ 结合肌钙蛋白，由此在肌钙蛋白–原肌球蛋白复合体中引起的变化，才是启动肌动蛋白–肌球蛋白相互作用循环的那一步。钙从不碰肌球蛋白。**收缩的开关长在细肌丝上，它起作用的方式是改变「肌球蛋白被允许够到什么」；所以扳机和燃料是两个各自独立的问题，各有各的答案。**",
      src: "A pp.171–172"
    },
    {
      link_en: "one last thing this chain does not cover, said rather than left implied",
      link_cn: "最后有一样这条主线没讲的东西，明说出来，不留白",
      en: "Myosin walking on actin is one motor among several: kinesin and dynein are motor proteins that walk on microtubules instead of on actin, and a bacterial flagellar motor turns rather than walks. **Those are separate machines with separate mechanisms, so nothing in the actin-myosin cycle above should be carried across to them unchecked.**",
      cn: "肌球蛋白在肌动蛋白上行走，只是马达蛋白中的一种：驱动蛋白（kinesin）和动力蛋白（dynein）也是马达蛋白，但走的是微管而不是肌动蛋白；细菌的鞭毛马达则是旋转而不是行走。**那些是各自独立的机器、各有各的机制，所以上面肌动蛋白–肌球蛋白循环里的任何一条，都不该未经核对就搬过去。**",
      src: "A p.172, §5.3",
      beyond: true,
      beyondNote: "Section 5.3 names motor proteins as a class; kinesin, dynein and the flagellar motor are not developed on the cited pages and are listed here only to mark the boundary of what the chain above covers.",
      openQuestion_en: "How much of the actin-myosin cycle generalises to other motor proteins is a separate question, and it is settled machine by machine rather than in principle.",
      openQuestion_cn: "肌动蛋白–肌球蛋白这套循环有多少能推广到别的马达蛋白，是另一个问题，而且要一台机器一台机器地去定，没有一个通用的答案。"
    }
  ]
};

/* ------------------------------------------------------------- 细胞周期调控 ---- */
window.BIOLITE_SPINE["key:cell-cycle-control"] = {
  assumed: ["cell", "protein", "enzyme", "kinase", "phosphorylation", "phosphate",
            "ATP", "gene", "DNA", "residue", "subunit", "concentration",
            "signal transduction", "degradation", "synthesis", "eukaryote",
            "chromosome", "cell division", "daughter cell"],
  nodeTitle_en: "Regulation of the cell cycle by protein kinases",
  nodeTitle_cn: "细胞周期的蛋白激酶调控",
  title_en: "A clock that runs because it keeps throwing away its own hand",
  title_cn: "一座钟之所以能走，是因为它不断把自己的指针扔掉",
  terms: [
    { en: "cell cycle", cn: "细胞周期",
      def_en: "The ordered sequence of stages a eukaryotic cell passes through in order to divide. Its timing is set by protein kinases that act at specific points, phosphorylating key proteins.",
      def_cn: "真核细胞为了分裂而走过的一串有次序的阶段。它的时序由在特定节点上起作用的蛋白激酶设定，那些激酶磷酸化关键蛋白。" },
    { en: "CDK", cn: "细胞周期蛋白依赖性激酶",
      def_en: "A heterodimeric protein kinase: a catalytic subunit that is inactive until a regulatory subunit, a cyclin, binds to it. Requiring two components gives a cell two independent ways to switch it off.",
      def_cn: "一种异二聚体蛋白激酶：催化亚基在调节亚基 cyclin 结合上来之前没有活性。需要两个组件，等于给了细胞两条彼此独立的关闭途径。" },
    { en: "cyclin", cn: "细胞周期蛋白",
      def_en: "The regulatory subunit a CDK cannot work without, deliberately built to be unstable. Its own rising concentration eventually triggers its destruction, so its level oscillates with the cycle instead of accumulating.",
      def_cn: "CDK 少不了的那个调节亚基，被刻意做成不稳定的。它自身浓度的上升最终触发对它的销毁，所以它的水平随周期振荡，而不是一路累积。" },
    { en: "destruction box", cn: "破坏框",
      def_en: "A short sequence in a cyclin that marks it for tagging with ubiquitin and shredding in a proteasome. It is the piece that turns a rising quantity into an oscillating one, and so turns a signal into a clock.",
      def_cn: "cyclin 里的一小段序列，把它标记去接受泛素标签、送进蛋白酶体粉碎。正是这一段把「一路上升的量」变成「振荡的量」，从而把一个信号变成一座钟。" },
    { en: "damage checkpoint", cn: "损伤检查点",
      def_en: "A place in the cell cycle where progression halts if something is wrong — a double-strand break in DNA being one such signal. It stops a cell from copying damage into its daughters.",
      def_cn: "细胞周期上的一处位置：一旦出了问题，推进就在这里停住 —— DNA 双链断裂就是这样一个信号。它阻止细胞把损伤复制给子代。" }
  ],
  steps: [
    {
      en: "The cell cycle is the ordered sequence of stages a eukaryotic cell passes through in order to divide, and what times it is a set of protein kinases called CDKs, or cyclin-dependent protein kinases. They act at specific points in the cycle, phosphorylating key proteins and changing what those proteins do. **When a cell divides is settled as a signalling problem, and it is solved by phosphorylation — the same chemistry that carries every other signal in a cell.**",
      cn: "细胞周期（cell cycle）是真核细胞为了分裂而走过的一串有次序的阶段，而给它计时的，是一组叫 CDK（cyclin-dependent protein kinase，细胞周期蛋白依赖性激酶）的蛋白激酶。它们在周期的特定节点上起作用，磷酸化关键蛋白、改变这些蛋白的活性。**「什么时候分裂」是当作信号问题来解决的，用的是磷酸化 —— 和细胞里传递其他信号的化学完全相同。**",
      src: "A p.450, §12.8 summary",
      see: [{ id: "L-12-1-1", en: "the general features every signalling system shares", cn: "所有信号系统共有的那些一般特征" }]
    },
    {
      link_en: "what makes a CDK unusual among kinases",
      link_cn: "CDK 在激酶里特别在哪",
      en: "A CDK cannot work alone. It is a heterodimer of two subunits: a catalytic subunit, which does the phosphorylating, and a regulatory subunit called a cyclin, and the catalytic subunit is inactive unless a cyclin is bound to it. **Activity needs both components at once, so a cell has two independent handles on the kinase — how much catalytic subunit exists and how much cyclin exists — and either one shuts it down.**",
      cn: "CDK 单靠自己不能工作。它是由两个亚基组成的异二聚体：一个催化亚基（负责磷酸化），和一个叫 cyclin（细胞周期蛋白）的调节亚基；在没有 cyclin 结合上来时，催化亚基没有活性。**活性需要两个组件同时到位，于是细胞手里有了两个彼此独立的把手 —— 催化亚基有多少、cyclin 有多少 —— 任何一个都能把这个激酶关掉。**",
      src: "A pp.447–448"
    },
    {
      link_en: "in fact there are four handles, not two",
      link_cn: "其实把手不是两个，是四个",
      en: "Four things change the activity of a cyclin-CDK pair as the cycle runs: how much of each CDK is made and when; the specific degradation of the cyclin; the phosphorylation and dephosphorylation of critical residues on the CDK itself; and the binding of inhibitory proteins to particular cyclin-CDK pairs. **A cell can act on its clock at four independent places, which is what lets one chemistry produce a schedule with distinct stages instead of a single on switch.**",
      cn: "随着周期推进，有四样东西在改变一个 cyclin–CDK 对的活性：每种 CDK 在什么时候被合成、合成多少；cyclin 的特异性降解；CDK 自身关键残基的磷酸化与去磷酸化；以及抑制性蛋白与特定 cyclin–CDK 对的结合。**细胞可以在四个彼此独立的位置上对这座钟下手；正因如此，同一套化学才能排出一张分阶段的时刻表，而不只是一个开关。**",
      src: "A pp.448–449"
    },
    {
      link_en: "of those four, the second is the one that makes it a clock",
      link_cn: "四者之中，第二个才是让它成为「钟」的那一个",
      en: "A cyclin carries a short stretch of sequence called the destruction box, and that stretch marks it for ubiquitin tagging: ubiquitin is a small protein attached to a target as a label meaning destroy this, and the labelled cyclin is then fed into a proteasome — the cell's protein shredder — and taken apart. **A cyclin is deliberately built to be unstable, and the destruction box is the piece of sequence that makes it so.**",
      cn: "cyclin 里带着一小段序列，叫破坏框（destruction box），这段序列把它标记去接受泛素化：泛素（ubiquitin）是一个小蛋白，被接到目标上作为「销毁此物」的标签，被标记的 cyclin 随即被送进蛋白酶体（proteasome，细胞的蛋白粉碎机）拆掉。**cyclin 是被刻意做成不稳定的，而让它不稳定的，正是破坏框这一小段把它送去接受泛素标签、再送进蛋白酶体的序列。**",
      src: "A pp.449–450"
    },
    {
      recall_en: "the destruction box from the step above, wired into a loop",
      recall_cn: "上一步说的破坏框，接进一条回路里",
      en: "The rise in cyclin concentration is itself what eventually triggers that destruction, so the level climbs, sets off its own removal, falls, and climbs again, oscillating in step with the cycle. **A quantity that rose and stayed high could mark one event and never a second one, whereas a quantity that rises and is thrown away marks every turn: that oscillation is the clock.**",
      cn: "cyclin 浓度的上升，本身就是最终触发这场销毁的原因；于是它的水平爬升、触发自己被清除、回落、再爬升，随周期振荡。**一个升上去就停在高位的量只能标记一次事件，再标记不了第二次；而一个升上去又被扔掉的量每一圈都能标记 —— 这个振荡就是钟。**",
      src: "A p.450"
    },
    {
      link_en: "the clock can also be stopped from outside",
      link_cn: "这座钟也可以被外面叫停",
      en: "The cycle has damage checkpoints — places where progression is halted if something is wrong, and a double-strand break in DNA is one of the signals that can stop it. **A cell that would otherwise copy a broken chromosome into two daughter cells pauses at a checkpoint and repairs it first, so checkpoints are how a cell keeps from passing damage on.**",
      cn: "这个周期上设有损伤检查点（damage checkpoint）—— 一旦出了问题，推进就在这些地方被叫停，而 DNA 双链断裂就是能叫停它的信号之一。**一个本来会把断掉的染色体复制给两个子细胞的细胞，会在检查点先停下来把它修好；检查点就是细胞不让损伤传下去的办法。**",
      src: "A pp.449–450",
      see: [{ id: "L-12-9-1", en: "what happens once these checkpoints fail", cn: "这些检查点失灵之后会发生什么" }]
    },
    {
      link_en: "how much of this is actually settled",
      link_cn: "这些内容里，究竟有多少是定论",
      en: "There are scores of known CDK targets, and the list of proteins each cyclin-CDK pair phosphorylates at each stage of the cycle is far from complete. **The framework is solid — two subunits, four handles, an oscillating cyclin — while the full inventory of which proteins get phosphorylated, and when, is not.**",
      cn: "已知的 CDK 靶蛋白有几十个，而「每一个 cyclin–CDK 对在每个阶段各自磷酸化哪些蛋白」这份清单，远远没有列完。**框架是牢固的 —— 两个亚基、四个把手、一个振荡的 cyclin —— 而「究竟哪些蛋白被磷酸化、在什么时候」的完整清单并不牢固。**",
      src: "A p.449",
      openQuestion_en: "Which proteins each cyclin-CDK pair phosphorylates at each stage of the cycle is still being worked out, and most of that inventory is not yet known.",
      openQuestion_cn: "每一个 cyclin–CDK 对在周期的每个阶段分别磷酸化哪些蛋白，目前仍在研究之中，这份清单的大部分还不知道。"
    }
  ]
};

/* --------------------------------------------------------- 癌基因与细胞凋亡 ---- */
window.BIOLITE_SPINE["key:oncogenes-and-apoptosis"] = {
  assumed: ["cell", "protein", "gene", "DNA", "mutation", "enzyme", "kinase",
            "receptor", "virus", "signal transduction", "plasma membrane",
            "transcription", "growth factor", "cell division", "embryo", "cancer",
            "tumour", "chromosome", "G protein", "copy", "development"],
  nodeTitle_en: "Oncogenes, tumour suppressor genes and programmed cell death",
  nodeTitle_cn: "癌基因、抑癌基因与程序性细胞死亡",
  title_en: "Cancer as broken signalling, and two classes of gene that break in opposite directions",
  title_cn: "癌症是坏掉的信号转导，而两类基因坏的方向恰好相反",
  terms: [
    { en: "oncogene", cn: "癌基因",
      def_en: "A gene encoding a defective signalling protein that keeps giving the signal for cell division, leading to a tumour. Genetically dominant — one damaged copy suffices, because a protein stuck in the on position cannot be silenced by a normal copy. Its normal counterpart is a proto-oncogene.",
      def_cn: "编码一个有缺陷的信号蛋白的基因，该蛋白持续发出分裂信号，导致肿瘤。遗传上显性 —— 一份坏拷贝就够，因为卡在「开」位的蛋白无法被正常拷贝压住。它正常的对应物叫原癌基因。" },
    { en: "tumour suppressor gene", cn: "抑癌基因",
      def_en: "A gene encoding a regulatory protein that normally inhibits cell division — a brake. Its mutations are genetically recessive, because one intact copy still brakes, so both copies must be lost before a tumour can follow.",
      def_cn: "编码一个通常抑制细胞分裂的调节蛋白的基因 —— 一个刹车。它的突变遗传上隐性，因为只要还有一份完好拷贝，刹车就还在，所以两份都失去才可能长出肿瘤。" },
    { en: "stability gene", cn: "稳定基因",
      def_en: "Also called a caretaker gene. It encodes proteins that repair major genetic damage, so mutating it leaves every other mutation unrepaired — including those in proto-oncogenes and tumour suppressors. It is how an accumulation of cancer mutations gets started.",
      def_cn: "也叫看护基因。它编码修复重大遗传损伤的蛋白，所以它一旦突变，别的突变就都得不到修复 —— 包括原癌基因和抑癌基因上的突变。癌症突变的累积往往由此开始。" },
    { en: "apoptosis", cn: "凋亡",
      def_en: "Programmed, controlled cell death, running in embryonic development and throughout adult life to destroy and recycle unnecessary, damaged or infected cells. Triggered by irreparable DNA damage or by external signals such as TNF acting through plasma-membrane receptors.",
      def_cn: "程序性的、受控的细胞死亡，在胚胎发育中运行并贯穿成年期，用来销毁并回收不必要的、受损的或被感染的细胞。触发者可以是无法修复的 DNA 损伤，也可以是 TNF 这类经质膜受体作用的外来信号。" }
  ],
  steps: [
    {
      en: "In every kind of cancer the normal regulation of cell division — the machinery that decides whether a cell divides at all — has stopped working, because of defects in one or more genes. **A tumour is what a cell does once the signalling pathway that tells it whether to divide has been damaged, so a cancer is a signalling system read as pathology.**",
      cn: "在每一种癌症里，细胞分裂的正常调控 —— 也就是决定一个细胞到底分不分裂的那套机器 —— 都已经失灵，原因是一个或多个基因出了缺陷。**肿瘤，就是「告诉细胞该不该分裂」的那条通路被破坏之后细胞所做的事；所以癌症是把一套信号系统当作病理来读。**",
      src: "A p.452, §12.9",
      see: [{ id: "L-12-8-1", en: "the cyclin-CDK clock this damaged machinery is supposed to be running", cn: "这套被破坏的机器本该驱动的那座 cyclin–CDK 钟" }]
    },
    {
      link_en: "the first class of gene",
      link_cn: "第一类基因",
      en: "An oncogene is a gene encoding a defective signalling protein that keeps giving the signal for cell division whether or not that signal is wanted, and the continuous signal is what leads to a tumour. Oncogenes were first found in tumour-causing viruses and were later shown to be derived from the cell's own genes; the normal, well-behaved version of such a gene is called a proto-oncogene. **Any component of a signalling cascade can be the broken one: a defective growth factor, receptor, G protein, protein kinase, or nuclear regulator of transcription.**",
      cn: "癌基因（oncogene）是编码一个有缺陷的信号蛋白的基因，这个蛋白不管需不需要，都在持续发出「分裂」的信号，而这个不停的信号就是肿瘤的成因。癌基因最早是在致瘤病毒里发现的，后来才证明它们来源于细胞自己的基因；这类基因正常、规矩的那个版本叫原癌基因（proto-oncogene）。**信号级联里的任何一个组件都可能是坏掉的那个：有缺陷的生长因子、受体、G 蛋白、蛋白激酶，或转录的核内调节因子。**",
      src: "A pp.451–452, p.456"
    },
    {
      link_en: "and how such a gene is inherited",
      link_cn: "这样一个基因是怎么遗传的",
      en: "An oncogene is genetically dominant: one damaged copy is enough to cause trouble, even with a perfectly good copy sitting beside it. **A protein stuck in the on position keeps shouting divide regardless of what the normal copy is doing, and a normal copy has no way to silence it.**",
      cn: "癌基因在遗传上是显性的：只要有一份拷贝坏了就足以出事，哪怕旁边还放着一份完全正常的拷贝。**一个卡在「开」位上的蛋白会不停地喊「分裂」，不管那份正常拷贝在干什么；而正常拷贝没有办法让它闭嘴。**",
      src: "A p.456"
    },
    {
      recall_en: "the opposite of the step above in both respects — what the protein does, and how the gene is inherited",
      recall_cn: "和上一步在两个方面都正好相反 —— 蛋白干什么，以及基因怎么遗传",
      en: "A tumour suppressor gene encodes a regulatory protein whose normal job is to inhibit cell division, so it works as a brake. Mutations in it are genetically recessive, because one working copy still brakes, and both copies have to be lost before a tumour can follow. **The two classes of cancer gene fail in opposite directions and are inherited in opposite ways: a dominant accelerator, and a recessive brake.**",
      cn: "抑癌基因（tumour suppressor gene）编码的调节蛋白，本职工作是抑制细胞分裂，所以它起的是刹车的作用。它的突变在遗传上是隐性的：只要还剩一份能工作的拷贝，刹车就还在，必须两份拷贝都失去，才可能长出肿瘤。**这两类癌症基因坏的方向相反、遗传的方式也相反：一个是显性的油门，一个是隐性的刹车。**",
      src: "A p.456"
    },
    {
      recall_en: "put the dominant class and the recessive class together and a consequence falls out",
      recall_cn: "把显性那一类和隐性那一类放在一起，会掉出一个推论",
      en: "Cancer is generally the result of an accumulation of mutations in oncogenes and tumour suppressor genes, rather than of any single event. Turning on one accelerator is usually not enough while the brakes still hold, and losing one brake needs a second hit on the other copy. **That is why cancer risk climbs with age, and why a single carcinogenic exposure rarely produces a tumour on its own.**",
      cn: "癌症通常是癌基因与抑癌基因上突变累积的结果，而不是任何单一事件的结果。只要刹车还在，踩下一个油门通常还不够；而要失去一个刹车，还得等另一份拷贝再挨一下。**这正是癌症风险随年龄上升的原因，也是单独一次致癌暴露很少凭自己就长出肿瘤的原因 —— 突变要一个一个地攒够。**",
      src: "A p.456"
    },
    {
      link_en: "a third class that is usually forgotten",
      link_cn: "还有第三类，通常被忘掉",
      en: "Stability genes, also called caretaker genes, encode the proteins that repair major genetic damage; they neither drive cell division nor brake it, they proofread. When one of them is mutated, other mutations stop being repaired, including mutations in proto-oncogenes and in tumour suppressor genes. **Damaging one stability gene raises the rate at which every other cancer gene is damaged, which is how the accumulation described above usually gets started.**",
      cn: "稳定基因（stability gene），也叫看护基因（caretaker gene），编码的是修复重大遗传损伤所需的蛋白；它们既不推动分裂也不刹车，而是负责校对。它们一旦突变，别的突变从此得不到修复，其中就包括原癌基因和抑癌基因上的突变。**毁掉一个稳定基因，等于提高了其他所有癌症相关基因被毁掉的速率；上一步说的那种累积，往往就是这样开的头。**",
      src: "A p.454"
    },
    {
      link_en: "the other half of the story: how a cell is supposed to die",
      link_cn: "故事的另一半：细胞本该怎么死",
      recall_en: "a damage checkpoint stops a damaged cell from dividing; this is what happens to a cell whose damage cannot be repaired at all",
      recall_cn: "损伤检查点让受损的细胞停下不分裂；而这里说的是「损伤根本修不好」的细胞会怎样",
      en: "Apoptosis is programmed, controlled cell death; it runs during the normal development of an embryo and continues throughout adult life, destroying and recycling cells that are unnecessary, damaged or infected. It is triggered by irreparable damage to DNA, and also by signals arriving from outside — TNF, tumour necrosis factor, acts through receptors in the plasma membrane to set it off. **A cell too damaged to repair is supposed to kill itself, so a cell that has lost the ability to do so keeps dividing with its damage intact.**",
      cn: "凋亡（apoptosis）是程序性的、受控的细胞死亡；它在胚胎的正常发育中运行，并贯穿整个成年期，负责销毁并回收那些不必要的、受损的或被感染的细胞。触发它的可以是无法修复的 DNA 损伤，也可以是外来的信号 —— TNF（肿瘤坏死因子）就通过质膜上的受体把它启动。**一个损伤到无法修复的细胞本应自杀；所以一个失去了自杀能力的细胞，会带着损伤继续分裂下去。**",
      src: "A p.455, p.456",
      see: [{ id: "L-11-2-1", en: "the lipid signal that marks an apoptotic cell for removal", cn: "把凋亡细胞标出来等待清除的那个脂类信号" }]
    },
    {
      link_en: "where this biochemistry became medicine",
      link_cn: "这套生化在哪里变成了医学",
      en: "An oncogene product is often a protein kinase stuck on, so a small molecule that inhibits exactly that kinase is a treatment. Imatinib is one such small-molecule protein kinase inhibitor, and it has proved nearly 100% effective at bringing about remission in the leukaemia driven by its target kinase. **Naming the broken component of a signalling pathway identifies a drug target, so working out which protein is stuck on is what makes a specific inhibitor possible.**",
      cn: "癌基因的产物常常是一个卡在「开」上的蛋白激酶，那么一个专门抑制这个激酶的小分子，就是一种治疗。伊马替尼（imatinib）就是这样一个小分子蛋白激酶抑制剂，在由它靶向的那个激酶所驱动的白血病中，缓解率接近 100%。**把信号通路里坏掉的那个组件叫出名字，等于指认了一个药靶；弄清是哪个蛋白卡在「开」上，才使一个专一的抑制剂成为可能。**",
      src: "A p.453"
    }
  ]
};
