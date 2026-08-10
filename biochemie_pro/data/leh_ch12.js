/* ============================================================
   Lehninger 8 — Chapter 12, section 12.1,
   General Features of Signal Transduction.

   SCOPE IS "BRIEF" AND THAT IS DELIBERATE. `lehninger_only_scope.tsv`
   marks 12.1 as `brief`, which is Ruojin's own ruling on the whole
   of ch12: 「其他的最简单一笔带过就行」. So this node is short by
   design — 7 points, not the 15–20 of a `full` node. Writing it deep
   would be overriding her call, not being thorough.

   `topicKey` MERGES into the existing Czech key
   `hormone-structure-and-action` rather than starting a new one, and
   the reason is measured, not assumed. The stated principle in CORE2
   is that Lehninger-only nodes get single-book keys "because they have
   no Czech node to connect to". That is NOT true here: Czech `10-17`
   (receptors), `10-18` (adenylyl cyclase / cAMP), `10-19` (IP3 / DAG)
   and `10-20` (receptor tyrosine kinases) are all on this key and are
   all specific instances of exactly the framework 12.1 generalises.
   The key was ALREADY cross-book (it carries L-23-3-1), so this is the
   L-19-5-1 case: joining it deepens an existing link and moves neither
   the key count nor the cross-book count. Because it merges, czTitle
   follows the depth-node convention and does NOT open with `Žádná —`.

   WHY THIS SECTION IS A REAL GAP WHILE 12.2 AND 12.4 ARE NOT.
   Measured against the Czech layer before writing, with word-boundary
   matching (a naive substring count is worthless here — `Ras` scored
   607 on plain `.count()` because Czech enzyme names end in `-rasa`,
   and `raft` scored 32 the same way; both are 0 on a real word match):
     covered by Czech, so NOT written  12.2 (cAMP cascade in 10-18,
                                       IP3/DAG in 10-19), 12.4 (RTK
                                       in 10-20)
     genuinely absent                  the general framework itself —
                                       "druhý posel" 0, amplifikace 0,
                                       desenzitizace 0, GPCR 0
   So what is missing from the Czech layer is not the cascades; it is
   the vocabulary that says what all the cascades have in common.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-12-1-1",
    book: "lehninger",
    topicKey: "hormone-structure-and-action",
    chapter: 12,
    section: "12.1",
    czTitle: "Přenos signálu (12.1) — hloubková vrstva: osm vlastností společných všem signálním drahám, čtyři typy receptorů a asi deset stavebních dílů, ze kterých je celá signalizace složena",
    enTitle: "General features of signal transduction — the eight properties every signalling system shares, the four receptor types they are built on, and why roughly ten kinds of protein component account for all of it",
    cnTitle: "信号转导的一般特征——所有信号系统共有的八个性质、它们所依托的四类受体，以及为什么大约十种蛋白组件就能拼出全部信号转导",
    pages: [408, 409, 410, 411],
    coverage: "full",
    coverageNote: "Read Lehninger 8 section 12.1 end to end, A printed pp.408-411 (section boundary measured in A itself, not interpolated from the A<->B map: 12.1 opens on p.408 with the chapter head and SUMMARY 12.1 sits on p.412, where 12.2 begins). Covers FIGURE 12-1 (the eight features), TABLE 12-1 (signals cells respond to), TABLE 12-2 (conserved elements), FIGURE 12-2 (four receptor types) and the chapter's opening principles. Czech coverage was measured before writing rather than assumed: the specific cascades ARE present (10-18 adenylyl cyclase/cAMP, 10-19 IP3/DAG, 10-20 receptor tyrosine kinases), which is why 12.2 and 12.4 are not being written; but the unifying vocabulary is absent -- second messenger, amplification, desensitization and GPCR are all zero hits on a word-boundary search of the Czech layer.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；信号转导的八个一般特征是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    trace: [
      {
        term: "signal transduction 信号转导——它是一个「把信息变成化学变化」的定义",
        what: "书上的定义句值得原样记住：**「This conversion of information into a chemical change, signal transduction, is a universal property of living cells」**。要点在于**它不是「传递信号」，而是「转换」**：信号本身是**信息**，由**特异的受体**检测到，然后**必然通过一个化学过程**变成细胞的应答。**所以任何一条信号通路，都可以被追问同一个问题：信息是在哪一步变成化学的？**",
        from: "这个定义之所以值得单独立一张卡，是因为**捷克层里恰好缺的就是这一层词汇**。捷克书讲了**具体的级联**——`10-18` 腺苷酸环化酶与 cAMP、`10-19` 磷酸肌醇与 IP₃/DAG、`10-20` 受体酪氨酸激酶——**每一条都对，但它们是并排的三个故事**。而 12.1 给的是**把这三个故事叠在一起看时剩下的那部分**：八个共有特征、四类受体、约十种组件。**先有这层框架，那三条级联才不是要分别死记的三张表。**",
        to: "考试里两处。第一，被问「**什么是信号转导**」——**不要只答「细胞接收信号」**，答**「把信息转换成化学变化」**，并强调它是**活细胞的普遍性质**。第二，凡是被问某条具体通路（cAMP、IP₃、RTK 都在捷克层里），**都可以用八个特征当骨架去答**：特异性、灵敏度、放大、模块化、脱敏、整合、发散、局部化——**挑其中三四条套上去，答案立刻从「背下来的步骤」变成「有结构的分析」**。",
        family: "四类受体是本节的另一根骨架，**按「信号怎么跨膜」分**：**GPCR**（经 G 蛋白间接激活产生第二信使的酶）· **受体酶**（胞外结合、胞内侧有酶活性，典型是酪氨酸激酶）· **门控离子通道**（书上说它们是**最简单的信号转导器**）· **核受体**（配体进细胞、改变基因转录速率）。⚠️ 注意**核受体那一类的信号根本没有跨膜转导**——配体自己进去了，所以它和前三类不是同一种机制。",
        numbers: "**八个**共有特征（FIGURE 12-1）；**四类**基本受体（FIGURE 12-2）；整套信号机器由**约 10 种**基本蛋白组件搭成（TABLE 12-2）。⚠️ 另记一条尺度：植物与动物两支在真核里**至少分开了十亿年**，所以本章明说**只讲动物界**——捷克书讲激素时不作这个限定，答题时不要把动物的机制推广到植物。"
      }
    ],
    mustKnow: {
      en: "Signal transduction is not 'passing a signal along' — it is CONVERTING information into a chemical change, and that conversion is a universal property of living cells. Every specific cascade the Czech book teaches (cAMP, IP3/DAG, receptor tyrosine kinases) is one instance of the same eight features.",
      cn: "信号转导**不是「把信号传下去」，而是「把信息转换成化学变化」**，而且这种转换是**活细胞的普遍性质**。捷克书讲的每一条具体级联（cAMP、IP₃/DAG、受体酪氨酸激酶）**都只是同一套八个特征的一个实例**——先有框架，那些级联就不用分开背。"
    },
    summary: {
      en: "Section 12.1 is the framework the rest of chapter 12 hangs on, and it is short. It opens with the definition worth quoting: the signal is information, it is detected by specific receptors, and its conversion into a chemical change IS signal transduction, a universal property of living cells. FIGURE 12-1 then lays out eight features shared by every signalling system: specificity (the ligand fits its complementary receptor and others do not), sensitivity (high affinity, low Kd), amplification (enzymes activating enzymes, so the number of affected molecules grows geometrically in a cascade), modularity (multivalent proteins assembling diverse complexes from interchangeable parts, with phosphorylation providing reversible points of interaction), desensitization/adaptation (activation triggers a feedback circuit that shuts the receptor off or removes it from the surface), integration (two signals with opposite effects on the same second messenger or membrane potential produce one net outcome), divergence (one activated receptor driving two or more pathways with different ends), and localized response (the enzyme that destroys the message clustered with its producer, so the message is degraded before it can diffuse). TABLE 12-2 makes the economy of the system explicit: despite the enormous number of signals in TABLE 12-1, the machinery is built from about ten basic types of protein component. The general process is the same everywhere: a ligand interacts with a receptor; the activated receptor interacts with cellular machinery, producing a second signal or a change in a protein's activity; the target cell's metabolic activity changes; and the transduction event ends. FIGURE 12-2 sorts the systems into four receptor types -- G protein-coupled receptors acting through G proteins on enzymes that make second messengers; receptor enzymes with cytoplasmic catalytic activity, typically tyrosine kinases; gated ion channels, which the book calls the simplest signal transducers; and nuclear receptors, which bind their ligand inside the cell and change transcription rates. The section closes with a warning about nomenclature: signalling proteins are named in the context where they were first found and then turn out to act elsewhere, so the names are historical accidents rather than descriptions.",
      cn: "12.1 是整个第 12 章挂靠的框架，而且很短。开篇那句定义值得原样引用：**信号就是信息**，由**特异的受体**检测到，而**把它转换成化学变化这件事本身就是信号转导**，是**活细胞的普遍性质**。随后 FIGURE 12-1 列出所有信号系统**共有的八个特征**：**特异性**（配体只与互补的受体契合，别的配体进不去）、**灵敏度**（受体亲和力高、Kd 低）、**放大**（酶激活酶，受影响的分子数在级联中**几何式增长**）、**模块化**（多价蛋白用可互换的零件拼出各式复合体，磷酸化提供**可逆**的结合点）、**脱敏／适应**（受体一被激活就触发反馈回路，把自己关掉或从细胞表面撤走）、**整合**（两个信号对同一个第二信使或膜电位作用相反时，输出的是**净结果**）、**发散**（一个被激活的受体驱动两条或更多结局不同的通路）、**局部化应答**（销毁信息的酶与生产它的酶挨在一起，信息**还没扩散出去就被降解**，所以应答又局部又短暂）。TABLE 12-2 把这套系统的经济性挑明：尽管 TABLE 12-1 里细胞要响应的信号种类极多，**整套机器只由约十种基本蛋白组件搭成**。通用流程各处相同：配体与受体相互作用 → 被激活的受体与细胞机器相互作用，产生第二个信号或改变某个蛋白的活性 → 靶细胞的代谢活性发生变化 → **转导事件结束**。FIGURE 12-2 按受体把系统分成**四类**：**G 蛋白偶联受体**（经 G 蛋白间接激活产生第二信使的酶）、**受体酶**（胞质侧带催化活性，典型是酪氨酸激酶）、**门控离子通道**（书上称之为**最简单的信号转导器**）、**核受体**（在细胞内部结合配体，改变转录速率）。本节以一个关于**命名**的告诫收尾：信号蛋白往往是在某一个场景里被发现并据此命名的，后来却发现它在别处也起作用——**所以这些名字是历史的偶然，不是对功能的描述。**"
    },
    points: [
      {
        cz: "definice: informace se mění v chemickou změnu",
        en: "THE DEFINITION IS THE POINT, AND IT IS WORTH QUOTING EXACTLY. The signal is not a substance being handed along a chain; it is information. “ the signal represents information that is detected by specific receptors and converted to a cellular response ” , and the book then names the conversion itself: “ This conversion of information into a chemical change, signal transduction, is a universal property of living cells ” (A p.408). Read that as an instruction for how to interrogate any pathway: find the step where information becomes chemistry. The chapter's own opening principle spells out the four jobs a receptor system does, and they are the four things worth checking off for any cascade: “ receptor-mediated processes that amplify the signal, integrate it with input from other receptors ” , transmit it to the appropriate effectors, and eventually END the response (A p.408). Termination is part of the definition, not an afterthought.",
        cn: "**定义本身就是要点，值得一字不差地记。** 信号**不是一种沿着链条被递下去的物质，它是信息**。书上说信号「是由特异受体检测到、并被转换成细胞应答的**信息**」，随后直接给这个转换命名：**「把信息转换成化学变化这件事，就是信号转导，而它是活细胞的普遍性质」**（A p.408）。把这句话当成审问任何一条通路的方法：**找出信息在哪一步变成了化学。** 本章开篇的原则还点出受体系统做的**四件事**，正好是任何级联都该逐条核对的：**放大**信号、把它与**其他受体的输入整合**、把它**传给正确的效应器**，以及**最终结束这个应答**（A p.408）。⚠️ **「结束」是定义的一部分，不是附带说明。**"
      },
      {
        cz: "osm vlastností (1–4): specificita, citlivost, zesílení, modularita",
        en: "THE FIRST FOUR OF THE EIGHT SHARED FEATURES (FIGURE 12-1, A p.410). SPECIFICITY: “ Signaling ligand fits binding site on its complementary receptor ” and other ligands do not — the lock-and-key argument, applied to receptors rather than enzymes. SENSITIVITY: “ Receptor has high affinity ” for its ligand, i.e. a low dissociation constant, so a very low concentration of signal is enough. AMPLIFICATION: when enzymes activate enzymes, “ the number of affected molecules increases geometrically in an enzyme cascade ” — this is the single most important reason cascades exist at all, and it is why a few hormone molecules can reorganise a whole cell. MODULARITY: “ Proteins with multivalent affinities form diverse signaling complexes from interchangeable parts ” , with phosphorylation supplying REVERSIBLE points of interaction. Note what modularity buys: the cell does not need a bespoke protein per pathway, it recombines a small parts list — which is exactly what makes the ten-component economy of TABLE 12-2 possible.",
        cn: "**八个共有特征里的前四个**（FIGURE 12-1，A p.410）。**特异性**：「信号配体只与它互补的那个受体的结合位点契合」，别的配体进不去——**把锁-钥匙的论证从酶搬到了受体上**。**灵敏度**：「受体对配体的亲和力很高」，即**解离常数很低**，所以**极低浓度的信号就够用**。**放大**：当酶激活酶时，「受影响的分子数在酶级联中**几何式增长**」——**这是级联之所以存在的最重要理由**，也是为什么**几个激素分子能重组整个细胞**。**模块化**：「带多价亲和力的蛋白，用可互换的零件拼出各式各样的信号复合体」，而**磷酸化提供了可逆的结合点**。⚠️ 注意模块化换来的是什么：**细胞不需要为每条通路定制一套蛋白，它是在重新组合一份很短的零件清单**——这正是 TABLE 12-2 那种「十种组件」的经济性得以成立的原因。"
      },
      {
        cz: "osm vlastností (5–8): desenzitizace, integrace, divergence, lokální odpověď",
        en: "THE OTHER FOUR, AND THE LAST TWO ARE THE ONES USUALLY LEFT OUT (FIGURE 12-1, A p.410). DESENSITIZATION/ADAPTATION: “ Receptor activation triggers a feedback circuit that shuts off the receptor or removes it from the cell surface ” — the system switches itself off, which is why a constant signal stops producing a constant response. INTEGRATION: when two signals push a second messenger or the membrane potential in opposite directions, the outcome is the NET input of both — a cell does not obey one signal at a time. DIVERGENCE: one activated receptor is not one output; “ it activates two or more pathways with different end effects ” . LOCALIZED RESPONSE: when the enzyme that destroys an intracellular message sits clustered with the enzyme producing it, “ the message is degraded before it can diffuse to distant points ” , so the response stays local and brief. That last one is worth holding onto, because it answers a question the cascade picture invites: if a second messenger is freely soluble, why is the response not global? Because the sink is parked next to the source.",
        cn: "**另外四个，而最后两个恰恰是通常被略掉的**（FIGURE 12-1，A p.410）。**脱敏／适应**：「受体一被激活就触发一个反馈回路，把受体关掉、或者把它从细胞表面撤走」——**系统会自己关掉自己**，这正是**持续的信号不会产生持续的应答**的原因。**整合**：当两个信号把同一个第二信使或膜电位往**相反方向**推时，结局是两者的**净输入**——**细胞不是一次只听一个信号**。**发散**：一个被激活的受体**不等于一个输出**，「它会激活两条或更多结局不同的通路」。**局部化应答**：当**销毁**胞内信息的酶与**生产**它的酶挨在一起时，「信息还没来得及扩散到远处就被降解了」，所以应答**又局部又短暂**。⚠️ **最后这条特别值得记住**，因为它回答了级联图必然引出的一个问题：**第二信使既然可以自由扩散，应答为什么不是全细胞的？** 答案是——**「排水口」就停在「水龙头」旁边。**"
      },
      {
        cz: "univerzální průběh: čtyři kroky, včetně ukončení",
        en: "THE GENERAL PROCESS IS THE SAME EVERYWHERE, AND IT HAS FOUR STEPS (A p.410-411). The book states it plainly — “ the general features of signal transduction are common to all ” — and then gives the sequence: a signal (ligand) interacts with a receptor; the activated receptor interacts with cellular machinery, producing a second signal or a change in the activity of a cellular protein; the metabolic activity of the target cell undergoes a change; and finally the transduction event ENDS. Learn it as four steps rather than three: the ending is a step, and it is the one an exam answer most often drops. This is also the frame that makes the Czech cascades legible — 10-18's adenylyl cyclase and 10-19's phospholipase C are both just 'the cellular machinery producing a second signal' in step two.",
        cn: "**通用流程在哪里都一样，而且是四步**（A p.410-411）。书上直说「**信号转导的一般特征对所有系统都是共同的**」，随后给出顺序：**信号（配体）与受体相互作用 → 被激活的受体与细胞机器相互作用，产生第二个信号、或改变某个细胞蛋白的活性 → 靶细胞的代谢活性发生变化 → 最后，转导事件结束**。⚠️ **要按四步记，不要按三步**：**「结束」是其中一步**，而它恰恰是答题时最常被丢掉的一步。这个框架也正好让捷克层那几条级联变得可读——`10-18` 的**腺苷酸环化酶**和 `10-19` 的**磷脂酶 C**，**在第二步里都不过是「产生第二个信号的细胞机器」而已**。"
      },
      {
        cz: "čtyři typy receptorů",
        en: "FOUR RECEPTOR TYPES, SORTED BY HOW THE SIGNAL GETS ACROSS THE MEMBRANE (FIGURE 12-2, A p.411). (1) G protein-coupled receptors, which act indirectly — through GTP-binding proteins — on enzymes that generate intracellular second messengers; the beta-adrenergic system responding to epinephrine is the worked example. (2) Receptor enzymes, with an enzymatic activity on the cytoplasmic side triggered by ligand binding outside: “ Receptors with tyrosine kinase activity, for example, catalyze the phosphorylation of Tyr residues ” in specific intracellular targets, the insulin receptor being the case in point. (3) “ Gated ion channels of the plasma membrane that open and close ” in response to a ligand or to a change in transmembrane potential — “ These are the simplest signal transducers ” . (4) “ Nuclear receptors that bind specific ligands ” such as estrogen and “ alter the rate at which specific genes are transcribed ” . NOTE WHAT SEPARATES THE FOURTH FROM THE OTHER THREE: there is no transduction across the membrane at all, because the ligand itself goes in.",
        cn: "**四类受体，按「信号怎么跨过膜」来分**（FIGURE 12-2，A p.411）。**（1）G 蛋白偶联受体**：**间接**起作用——经**结合 GTP 的 G 蛋白**去作用于产生**胞内第二信使**的酶；书上的样板是响应肾上腺素的 **β-肾上腺素能系统**。**（2）受体酶**：胞外结合配体，触发**胞质侧的酶活性**；「例如带**酪氨酸激酶**活性的受体，会催化特定胞内靶蛋白上 **Tyr 残基的磷酸化**」，典型例子是**胰岛素受体**。**（3）门控离子通道**：「质膜上会开会关的门控离子通道」，响应配体或跨膜电位的变化——书上直接说**「这是最简单的信号转导器」**。**（4）核受体**：「结合特定配体（如雌激素）」并「**改变特定基因被转录的速率**」。⚠️ **注意第四类和前三类的根本区别：它根本没有跨膜转导这回事，因为配体自己进去了。**"
      },
      {
        cz: "asi deset typů stavebních dílů",
        en: "THE ECONOMY OF THE SYSTEM, WHICH IS THE SECTION'S MOST QUOTABLE NUMBER (TABLE 12-1 and TABLE 12-2, A p.410-411). TABLE 12-1 lists what cells respond to and the list is long: antigens, cell-surface glycoproteins, developmental signals, extracellular matrix components, growth factors, hormones, hypoxia, light, mechanical touch, pathogens, neurotransmitters, nutrients, odorants, pheromones, tastants. And yet the machinery “ is built from about 10 basic types of protein components ” — seven-transmembrane receptors, G proteins, membrane enzymes making or consuming cyclic nucleotides, kinases that phosphorylate GPCRs, membrane tyrosine kinases, cyclic-nucleotide-dependent kinases, Ca2+-binding proteins, Ca2+-dependent kinases, kinases activated during cell division, and non-enzymic scaffolds. THE POINT IS NOT THE LIST, IT IS THE RATIO: an enormous input space handled by a small parts list, which is only possible because of the modularity in point 2.",
        cn: "**这套系统的经济性，也是本节最值得引用的一个数字**（TABLE 12-1 与 TABLE 12-2，A p.410-411）。TABLE 12-1 列出细胞要响应的东西，**清单很长**：抗原、细胞表面糖蛋白、发育信号、细胞外基质成分、生长因子、激素、缺氧、光、机械触碰、病原体、神经递质、营养物、气味分子、信息素、味觉物质。**然而整套机器「只由约 10 种基本蛋白组件搭成」**——七次跨膜受体、G 蛋白、以环核苷酸为底物或产物的膜酶、磷酸化 GPCR 的激酶、膜上的酪氨酸激酶、依赖环核苷酸的激酶、**结合 Ca²⁺ 的蛋白**、**依赖 Ca²⁺ 的激酶**、**细胞分裂时被激活的激酶**，以及**非酶性的支架蛋白**。⚠️ **要点不是这张清单，而是那个比值**：**极其庞大的输入空间，由一份很短的零件清单来应付**——而这只有靠上一条讲的**模块化**才可能。"
      },
      {
        cz: "varování o názvosloví",
        en: "A WARNING ABOUT NAMES, WHICH THE BOOK PUTS AT THE END ON PURPOSE (A p.411). Signalling proteins “ are typically discovered in one context and named accordingly ” , and then turn out to be involved in something else entirely. The practical consequence for revision: the name of a signalling protein is a historical accident recording where somebody first found it, NOT a description of what it does. Do not try to reason from the name to the function, and do not be thrown when the same protein reappears under a different heading — that is the normal case in this chapter, not an exception.",
        cn: "**一个关于命名的告诫，书上是故意放在最后的**（A p.411）。信号蛋白「通常是在某一个场景里被发现、并据此命名的」，**后来却发现它参与的是完全另一件事**。对复习的实际后果是：**一个信号蛋白的名字，记录的是「当年谁在哪里先撞见它」这个历史偶然，而不是对它功能的描述**。⚠️ **不要试图从名字推功能**；也**不要因为同一个蛋白在另一个标题下再次出现就慌**——**在这一章里那是常态，不是例外。**"
      }
    ],
    terms: [
      {
        cz: "přenos signálu (signal transduction)",
        en: "signal transduction",
        cn: "信号转导",
        def_en: "The conversion of information (a signal detected by a specific receptor) into a chemical change in the cell. Lehninger calls it a universal property of living cells. Note that terminating the response is part of the process, not an addendum.",
        def_cn: "把**信息**（由特异受体检测到的信号）**转换成细胞内的化学变化**。Lehninger 称之为活细胞的**普遍性质**。注意**结束应答也是这个过程的一部分**，不是附加说明。"
      },
      {
        cz: "druhý posel (second messenger)",
        en: "second messenger",
        cn: "第二信使",
        def_en: "An intracellular molecule whose concentration changes in response to receptor activation, carrying the signal onward inside the cell. cAMP, IP3 and diacylglycerol are the examples the Czech layer already teaches as separate cascades; 12.1 supplies the collective name, which the Czech layer does not have.",
        def_cn: "一种**胞内**分子，其浓度随受体激活而改变，把信号在细胞内部继续传下去。cAMP、IP₃ 和二酰甘油就是捷克层已经**分开讲过**的那几条级联；**12.1 提供的是它们的统称**，而这个统称捷克层里没有。"
      },
      {
        cz: "zesílení signálu (amplification)",
        en: "amplification",
        cn: "信号放大",
        def_en: "The geometric growth in the number of affected molecules when enzymes activate enzymes in a cascade. This is why a handful of hormone molecules can reorganise a cell, and it is the main functional reason cascades have several steps rather than one.",
        def_cn: "当级联中**酶激活酶**时，受影响的分子数呈**几何式增长**。这正是**几个激素分子就能重组一个细胞**的原因，也是**级联为什么要有好几步而不是一步**的主要功能理由。"
      },
      {
        cz: "modularita (modularity)",
        en: "modularity",
        cn: "模块化",
        def_en: "Multivalent proteins assembling diverse signalling complexes out of interchangeable parts, with phosphorylation providing reversible points of interaction. Modularity is what allows an enormous variety of signals to be handled by only about ten basic types of protein component.",
        def_cn: "多价蛋白用**可互换的零件**拼装出各式各样的信号复合体，而**磷酸化提供可逆的结合点**。**正是模块化，使得极其多样的信号只需约十种基本蛋白组件就能应付。**"
      },
      {
        cz: "desenzitizace / adaptace",
        en: "desensitization / adaptation",
        cn: "脱敏／适应",
        def_en: "A feedback circuit triggered by receptor activation that shuts the receptor off or removes it from the cell surface. It is why a sustained signal does not produce a sustained response — the system turns itself down.",
        def_cn: "受体一被激活就触发的**反馈回路**，它把受体**关掉**、或把它**从细胞表面撤走**。这正是**持续的信号不会产生持续应答**的原因——**系统会自己把自己调下去。**"
      },
      {
        cz: "integrace vs. divergence",
        en: "integration vs divergence",
        cn: "整合 vs 发散",
        def_en: "Two opposite bookkeeping rules. Integration: two signals acting in opposite directions on the same second messenger or membrane potential give one NET outcome. Divergence: one activated receptor drives two or more pathways with different end effects. A cell neither obeys one signal at a time nor produces one output per receptor.",
        def_cn: "两条方向相反的记账规则。**整合**：两个信号对**同一个**第二信使或膜电位作用相反时，输出的是一个**净**结果。**发散**：**一个**被激活的受体驱动**两条或更多**结局不同的通路。所以**细胞既不是一次只听一个信号，也不是一个受体只给一个输出。**"
      },
      {
        cz: "lokalizovaná odpověď",
        en: "localized response",
        cn: "局部化应答",
        def_en: "When the enzyme that destroys an intracellular message is clustered with the enzyme that makes it, the message is degraded before it can diffuse far, so the response stays local and brief. This is the answer to why a freely soluble second messenger does not produce a whole-cell response.",
        def_cn: "当**销毁**胞内信息的酶与**生产**它的酶聚在一起时，信息**还没扩散远就被降解**，于是应答**又局部又短暂**。**这正是「可自由扩散的第二信使为什么不会引起全细胞应答」的答案。**"
      },
      {
        cz: "čtyři typy receptorů",
        en: "the four receptor types",
        cn: "四类受体",
        def_en: "GPCRs (act through G proteins on enzymes that make second messengers); receptor enzymes (cytoplasmic catalytic activity, typically tyrosine kinase); gated ion channels (the simplest signal transducers); and nuclear receptors. Only the first three transduce across the membrane — a nuclear receptor's ligand enters the cell itself.",
        def_cn: "**GPCR**（经 G 蛋白作用于产生第二信使的酶）、**受体酶**（胞质侧有催化活性，典型是酪氨酸激酶）、**门控离子通道**（**最简单的**信号转导器）、**核受体**。⚠️ **只有前三类是跨膜转导**——核受体的**配体自己就进了细胞**。"
      }
    ],
    quiz: [
      {
        type: "mcq",
        q_en: "A cell is exposed to a steady, unchanging concentration of a hormone for an hour. The response is strong at first and then fades, even though the hormone concentration never drops. Which of the eight general features of signalling explains this?",
        q_cn: "一个细胞被暴露在**恒定不变**的激素浓度下一小时。应答一开始很强，随后逐渐消退——**尽管激素浓度从未下降**。八个一般特征里，哪一个解释了这件事？",
        options: [
          "Amplification — the cascade exhausts its supply of downstream enzymes",
          "Desensitization/adaptation — receptor activation triggers a feedback circuit that shuts the receptor off or removes it from the cell surface",
          "Specificity — the receptor gradually begins binding other ligands instead",
          "Localized response — the message is degraded before it can diffuse"
        ],
        answer: 1,
        why_en: "This is the defining behaviour of desensitization: the response fades because the SYSTEM turns itself down, not because the signal weakened or the machinery ran out. Activation itself triggers a feedback circuit that either shuts the receptor off or physically removes it from the cell surface, so a constant signal stops producing a constant response. Amplification is wrong because a cascade is catalytic — its components are not consumed stoichiometrically. Specificity is wrong because a receptor does not start accepting other ligands over time; that would defeat the lock-and-key arrangement. Localized response is about WHERE a message acts (the destroying enzyme sits next to the producing enzyme, so the message never diffuses far) rather than about a response fading over time under a constant signal.",
        why_cn: "这正是**脱敏**的定义性表现：应答之所以消退，是因为**系统把自己调下去了**，而不是因为信号变弱、也不是因为机器耗尽了。**激活本身**就会触发一个反馈回路，把受体**关掉**或把它**从细胞表面物理移除**，所以**恒定的信号不再产生恒定的应答**。选放大不对，因为级联是**催化性**的——它的组件不会被化学计量地消耗掉。选特异性不对，因为受体**不会随时间推移开始接受别的配体**，那等于取消了锁-钥匙的安排。选局部化应答也不对：那讲的是信息**在哪里**起作用（销毁它的酶就在生产它的酶旁边，所以它扩散不远），**而不是恒定信号下应答随时间消退**。"
      },
      {
        type: "mcq",
        q_en: "Cells respond to an enormous variety of inputs — antigens, growth factors, hormones, light, hypoxia, odorants, tastants, mechanical touch. Roughly how many basic types of protein component does Lehninger say the machinery transducing ALL of these is built from, and which general feature makes that economy possible?",
        q_cn: "细胞要响应的输入种类极多——抗原、生长因子、激素、光、缺氧、气味、味觉物质、机械触碰。Lehninger 说转导**所有这些**的机器由大约多少种基本蛋白组件搭成？又是哪一个一般特征让这种经济性成为可能？",
        options: [
          "About 10 types, made possible by modularity — multivalent proteins assembling diverse complexes from interchangeable parts",
          "About 100 types, made possible by specificity — one dedicated component per signal",
          "About 10 types, made possible by amplification — fewer components are needed when each is reused catalytically",
          "About 50 types, made possible by divergence"
        ],
        answer: 0,
        why_en: "The number is about ten (TABLE 12-2), and the feature that permits it is modularity: multivalent proteins form diverse signalling complexes from interchangeable parts, with phosphorylation supplying reversible interaction points. Because complexes are recombined rather than custom-built, the cell does not need a bespoke protein per pathway. Amplification is a real feature but it explains signal GAIN, not parts economy — a cascade could amplify beautifully while still requiring a unique protein set per pathway. The 'one dedicated component per signal' option inverts the whole point of the section, and would predict a parts list as long as TABLE 12-1.",
        why_cn: "数字是**约十种**（TABLE 12-2），而让它成立的特征是**模块化**：多价蛋白用**可互换的零件**拼出各式复合体，磷酸化提供**可逆**的结合点。因为复合体是**重新组合**出来的、不是定制的，**细胞就不需要为每条通路配一套专属蛋白**。选放大不对——放大是真实存在的特征，但它解释的是**信号增益**，不是**零件经济**：一条级联完全可以放大得很漂亮，却仍然要求每条通路一套独有的蛋白。而「每个信号配一个专属组件」那一项**把本节的要点整个倒过来了**，它预测出的零件清单会和 TABLE 12-1 一样长。"
      },
      {
        type: "mcq",
        q_en: "Which of the four receptor types in FIGURE 12-2 does NOT transduce a signal across the plasma membrane, and why?",
        q_cn: "FIGURE 12-2 里的四类受体中，哪一类**并不跨质膜转导信号**？为什么？",
        options: [
          "Gated ion channels, because ions rather than information cross the membrane",
          "G protein-coupled receptors, because the G protein is on the inside",
          "Nuclear receptors, because the ligand itself enters the cell and the receptor acts on transcription inside",
          "Receptor enzymes, because the kinase domain faces the cytoplasm"
        ],
        answer: 2,
        why_en: "Nuclear receptors bind ligands such as estrogen INSIDE the cell and alter the rate at which specific genes are transcribed, so nothing has to be relayed across the membrane — the ligand crosses it. The other three are all genuine transmembrane transducers: a GPCR binds its ligand outside and acts through a G protein inside; a receptor enzyme binds outside and switches on a catalytic domain inside (the insulin receptor's tyrosine kinase being the standard case); and a gated ion channel converts a ligand or a voltage change into a flow of ions, which Lehninger calls the simplest signal transducers. Options 2 and 4 describe true facts about where those components sit, but sitting on the inside is exactly what a transmembrane transducer does — it is not a reason to exclude them.",
        why_cn: "**核受体**在**细胞内部**结合雌激素这类配体，并改变特定基因被转录的速率，所以**没有任何东西需要跨膜传递——是配体自己跨过去的**。另外三类都是**真正的跨膜转导器**：GPCR 在外侧结合配体、经内侧的 G 蛋白起作用；受体酶在外侧结合、开启内侧的催化结构域（标准例子是胰岛素受体的酪氨酸激酶）；门控离子通道把配体或电压变化转换成**离子流**，Lehninger 称它们是**最简单的信号转导器**。第 2、4 项陈述的位置关系本身没错，**但「组件在膜内侧」恰恰是跨膜转导器的常态，不构成排除它们的理由。**"
      }
    ],
    oral: {
      q_en: "Your examiner says: 'You have told me about the cAMP cascade and about receptor tyrosine kinases. Now tell me what they have in common — what is signal transduction, in general?' Answer using the general framework rather than by describing a third pathway.",
      q_cn: "考官说：「你已经讲了 cAMP 级联，也讲了受体酪氨酸激酶。现在告诉我它们的**共同点**——一般意义上的信号转导，是什么？」请用**一般框架**来答，不要再描述第三条通路。",
      model_en: "Signal transduction is the conversion of information into a chemical change, and Lehninger calls that a universal property of living cells. The signal is information; it is detected by a specific receptor; and the conversion into chemistry is the transduction itself. The general process has four steps and it is the same for every system: a ligand interacts with a receptor; the activated receptor interacts with cellular machinery, producing a second signal or changing the activity of a cellular protein; the metabolic activity of the target cell changes; and finally the transduction event ends. I want to stress that fourth step, because termination is part of the definition rather than an afterthought. Underneath the specific cascades there are eight shared features. Specificity: the ligand fits its complementary receptor and other ligands do not. Sensitivity: the receptor has high affinity, so a very low concentration of signal suffices. Amplification: when enzymes activate enzymes, the number of affected molecules grows geometrically in a cascade, which is why a handful of hormone molecules can reorganise a cell — this is the main reason cascades have several steps. Modularity: multivalent proteins build diverse complexes out of interchangeable parts, with phosphorylation providing reversible interaction points. Desensitization: activation triggers a feedback circuit that shuts the receptor off or removes it from the surface, so a constant signal does not give a constant response. Integration: two signals pushing a second messenger or the membrane potential in opposite directions give one net outcome. Divergence: one activated receptor can drive two or more pathways with different ends. And localized response: when the enzyme that destroys a message sits clustered with the enzyme producing it, the message is degraded before it can diffuse, so the response is local and brief — that last one answers why a freely soluble second messenger does not produce a whole-cell response. Now to make the comparison concrete. The cAMP cascade is a G protein-coupled receptor system: the receptor acts indirectly, through a GTP-binding protein, on an enzyme that makes an intracellular second messenger. The receptor tyrosine kinase is a receptor enzyme: ligand binding outside switches on a catalytic activity on the cytoplasmic side, phosphorylating Tyr residues in intracellular targets. Those are two of the four receptor types in FIGURE 12-2; the other two are gated ion channels, which Lehninger calls the simplest signal transducers, and nuclear receptors — and the nuclear receptor is the odd one out, because its ligand enters the cell, so there is no transduction across the membrane at all. Finally the point I find most striking. Cells respond to an enormous range of inputs — antigens, growth factors, hormones, light, hypoxia, odorants, tastants, touch — and yet the machinery for all of it is built from only about ten basic types of protein component. That economy is possible precisely because of modularity: the cell recombines a short parts list rather than inventing a dedicated protein per pathway. So what the cAMP cascade and the receptor tyrosine kinase have in common is not a shared molecule; it is a shared architecture.",
      model_cn: "信号转导就是**把信息转换成化学变化**，而 Lehninger 称这是**活细胞的普遍性质**。信号是**信息**；它被**特异的受体**检测到；而**转换成化学这件事本身就是转导**。通用流程有**四步**，对每个系统都一样：配体与受体相互作用；被激活的受体与细胞机器相互作用，产生第二个信号或改变某个细胞蛋白的活性；靶细胞的代谢活性发生变化；最后，**转导事件结束**。我想强调第四步，因为**「结束」是定义的一部分，不是附带说明**。在那些具体级联的下面，有**八个共有特征**。**特异性**：配体只与互补的受体契合，别的配体不行。**灵敏度**：受体亲和力高，所以极低浓度的信号就够。**放大**：酶激活酶时，受影响的分子数在级联中**几何式增长**，这正是几个激素分子能重组一个细胞的原因，也是级联要有好几步的主要理由。**模块化**：多价蛋白用可互换的零件搭出各式复合体，磷酸化提供**可逆**的结合点。**脱敏**：激活会触发反馈回路，把受体关掉或从表面撤走，所以**恒定的信号不给恒定的应答**。**整合**：两个信号把第二信使或膜电位往相反方向推时，得到的是一个**净**结果。**发散**：一个被激活的受体可以驱动两条或更多结局不同的通路。以及**局部化应答**：当销毁信息的酶与生产它的酶挨在一起时，信息还没扩散就被降解，所以应答又局部又短暂——**最后这条正好回答了「可自由扩散的第二信使为什么不引起全细胞应答」**。现在把比较落到实处。**cAMP 级联是一个 GPCR 系统**：受体**间接**地、经由一个结合 GTP 的蛋白，去作用于一个制造胞内第二信使的酶。**受体酪氨酸激酶是一个受体酶**：胞外结合配体，开启**胞质侧**的催化活性，磷酸化胞内靶蛋白上的 Tyr 残基。这两类是 FIGURE 12-2 里四类受体中的两类；另外两类是**门控离子通道**——Lehninger 称之为**最简单的**信号转导器——和**核受体**；而**核受体是例外的那一个，因为它的配体自己进了细胞，所以根本不存在跨膜转导**。最后是我觉得最值得说的一点：细胞要响应的输入范围极大——抗原、生长因子、激素、光、缺氧、气味、味觉物质、触碰——**然而支撑这一切的机器，只由大约十种基本蛋白组件搭成**。这种经济性之所以可能，**恰恰是因为模块化**：细胞是在**重新组合一份很短的零件清单**，而不是为每条通路发明一个专属蛋白。所以 cAMP 级联和受体酪氨酸激酶的共同点**不是某个共有的分子，而是一套共有的架构**。",
      checklist: [
        "Defined signal transduction as the CONVERSION of information into a chemical change, and called it a universal property of living cells",
        "Gave the general process as four steps and explicitly included TERMINATION as the fourth",
        "Named the eight shared features rather than describing another individual pathway",
        "Explained amplification as geometric growth in an enzyme cascade, and why that is the reason cascades have several steps",
        "Explained localized response as the destroying enzyme being clustered with the producing enzyme, answering why a soluble second messenger stays local",
        "Placed the cAMP cascade as a GPCR system and the RTK as a receptor enzyme, i.e. two of the four types in FIGURE 12-2",
        "Identified the nuclear receptor as the type with no transmembrane transduction, because the ligand itself enters the cell",
        "Quoted the economy: an enormous input range handled by about ten basic protein component types, and attributed it to modularity"
      ]
    }
  }
]);
