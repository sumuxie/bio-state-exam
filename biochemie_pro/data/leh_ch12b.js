/* ============================================================
   Lehninger 8 — Chapter 12, the five remaining sections that the
   Czech layer genuinely does not cover: 12.3, 12.5, 12.6, 12.8, 12.9.

   ⚠️ THESE ARE DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION,
   NOT A SHORTCUT. Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质
   must know 有就行」. So each node carries ONLY `summary` +
   `mustKnow` — no `points`, `terms`, `quiz`, `oral` or `trace`.
   `step5_check.py` requires only id/chapter/section/titles/coverage/
   summary, so this is a valid node, not a stub. Do NOT "finish" these
   later by adding drill layers unless she asks: the shallowness is
   the spec. Compare `L-12-1-1`, which was written BEFORE she said
   this and therefore carries the full set — that inconsistency is
   historical, not a model to copy.

   `coverage: "partial"` on all five, and the distinction matters:
   the whole section WAS read, but a summary-only node cannot stand in
   for the book, and `coverage` is what tells the reader whether it can.

   WHY THESE FIVE AND NOT 12.2 / 12.4 / 12.7. Measured against the
   Czech layer with word-boundary matching before writing:
     12.2  covered by Czech 10-18 (adenylyl cyclase/cAMP) + 10-19 (IP3/DAG)
     12.4  covered by Czech 10-20 (receptor tyrosine kinases)
     12.7  not even in lehninger_only_scope.tsv -- somebody judged it
           covered by the hormones line. ⚠️ THAT JUDGEMENT IS UNVERIFIED
           and this table has been overturned five times before; if you
           touch 12.7, grep first.
   The five below are the ones that came back empty: onkogen 0,
   apoptóz 0, p53 0, cyklin 0, CDK 0, raft 0, SH2 0, adaptor 0,
   rodopsin 0, and all of these on a WORD-BOUNDARY search -- a plain
   substring count is worthless here, it scored `Ras` at 607 because
   Czech enzyme names end in -rasa.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-12-3-1",
    book: "lehninger",
    topicKey: "hormone-structure-and-action",
    chapter: 12,
    section: "12.3",
    czTitle: "GPCR ve zraku, čichu a chuti (12.3) — jen orientačně: smysly používají tentýž aparát jako hormony",
    enTitle: "GPCRs in vision, olfaction and gustation — a brief orientation: the senses run on the same receptor machinery as hormones",
    cnTitle: "视觉、嗅觉与味觉里的 GPCR——只作科普性了解：感官用的是和激素同一套机器",
    pages: [429, 430, 431, 432],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 12.3 read end to end, A printed pp.429-432 with SUMMARY 12.3 on p.432, but only a summary and a mustKnow are written -- no points, terms, quiz or oral. `lehninger_only_scope.tsv` marks 12.3 `brief`. Czech coverage checked first with word-boundary matching: rodopsin 0, rhodopsin 0, zrak 0, chuť 0, opsin 1 -- essentially absent. topicKey merges into the existing Czech key `hormone-structure-and-action` rather than starting a new one, because the machinery here is exactly the GPCR machinery Czech 10-18 already teaches for hormones; the key was already cross-book, so key and cross-book counts do not move.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；视觉/嗅觉/味觉的信号转导是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Your eyes, nose and tongue use the same signalling hardware as your hormones: a GPCR, a heterotrimeric G protein, and a change in the sensory neuron's membrane potential. Nothing new has to be invented for the senses.",
      cn: "**眼睛、鼻子、舌头用的是和激素完全同一套信号硬件**：一个 **GPCR**、一个**异三聚体 G 蛋白**，最后改变感觉神经元的**膜电位**。**感官没有另起炉灶**——所以捷克书里 `10-18` 那套 cAMP 级联，换个受体就是视觉和嗅觉。"
    },
    summary: {
      en: "A short orientation section. “ Vision, olfaction, and gustation in vertebrates employ GPCRs, which act through heterotrimeric G proteins to change the membrane potential ” of a sensory neuron (A p.432). The economy is the point: “ GPCRs provide signal specificity, and their interaction with G proteins provides signal amplification ” -- the same two jobs they do for hormones. The G proteins switch effector enzymes on or off, chiefly adenylyl cyclase and the phosphodiesterases that destroy cAMP or cGMP, and the resulting change in second-messenger concentration alters either enzyme activities or the membrane's permeability to Ca2+, Na+ and K+. The sensory cell then depolarises or hyperpolarises, and that IS the signal, relayed onward to sensory centres in the brain. Desensitization works the way it does elsewhere: the receptor is phosphorylated and a protein called arrestin binds and interrupts the receptor-G protein interaction, which is why a smell fades while it is still present. IN THE BOOK'S OWN WORDS: “The detection of light, odors, and tastes (vision, olfaction, and gustation, respectively) in animals is accomplished by” (A p.429); “This change in the structure of the chromophore forces conformational changes in the rhodopsin molecule” (A p.430); “Each excited rhodopsin molecule activates at least 500 molecules of transducin” (A p.431).",
      cn: "一节很短的定位性内容。**「脊椎动物的视觉、嗅觉和味觉都使用 GPCR，它们通过异三聚体 G 蛋白改变感觉神经元的膜电位」**（A p.432）。要点在于这套系统的**经济性**：**「GPCR 提供信号特异性，而它们与 G 蛋白的相互作用提供信号放大」**——**和它们为激素做的是同样两件事**。G 蛋白开关下游的效应酶，主要是**腺苷酸环化酶**和**降解 cAMP 或 cGMP 的磷酸二酯酶**；第二信使浓度的变化，要么改变酶活性，要么改变膜对 **Ca²⁺、Na⁺、K⁺** 的通透性。感觉细胞随之**去极化或超极化**，而**这个电位变化本身就是信号**，再经中继神经元传到脑内的感觉中枢。**脱敏的方式和别处一样**：受体被磷酸化，一个叫 **arrestin（抑制蛋白）**的蛋白结合上去、切断受体与 G 蛋白的相互作用——**这正是一种气味明明还在、你却闻不到了的原因。**"
    }
  },
  {
    id: "L-12-5-1",
    book: "lehninger",
    topicKey: "membrane-architecture",
    chapter: 12,
    section: "12.5",
    czTitle: "Multivalentní adaptorové proteiny a membránové rafty (12.5) — jen orientačně",
    enTitle: "Multivalent adaptor proteins and membrane rafts — a brief orientation: signalling proteins are assembled, not wired",
    cnTitle: "多价衔接蛋白与膜筏——只作科普性了解：信号蛋白是被「拼装」起来的，不是被「接线」连起来的",
    pages: [438, 439, 440, 441, 442],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 12.5 read, A printed pp.438-442; note that unlike its neighbours this section carries no SUMMARY block of its own, so the quotations here come from the section body on p.439. `lehninger_only_scope.tsv` marks 12.5 `brief`. Czech coverage checked with word-boundary matching before writing: raft 0, SH2 0, adaptor 0, adaptér 0 -- the 32 naive hits for `raft` and the 15 for `scaffold` are all substring artefacts (the scaffold ones are the PRPP ribose-phosphate scaffold, nothing to do with signalling). topicKey merges into `membrane-architecture`, which already carries Czech 8-5-2-3 and the Lehninger node L-11-2-1 -- and L-11-2-1 already covers lipid rafts from the membrane-dynamics side, so this deepens an existing link rather than duplicating it.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；衔接蛋白与膜筏是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Signalling complexes are ASSEMBLED from interchangeable parts rather than hard-wired. A phosphorylated Tyr is a binding site; an SH2 domain reads it; an adaptor with several such domains holds two proteins together that have no affinity for each other. Phosphorylation is therefore not only a switch — it creates and destroys binding sites.",
      cn: "信号复合体是**用可互换的零件拼装**出来的，**不是硬接线连起来的**。一个**被磷酸化的 Tyr 就是一个结合位点**；**SH2 结构域**去读它；而一个带好几个这种结构域的**衔接蛋白**，能把两个**本来彼此毫无亲和力**的蛋白拽到一起。⚠️ **所以磷酸化不只是「开关」——它还在制造和销毁结合位点。**"
    },
    summary: {
      en: "A short section that supplies the mechanism behind the 'modularity' feature named back in 12.1. Phosphorylated Tyr residues of IRS-1 “ serve as binding sites for proteins with SH2 domains ” , and “ These multivalent proteins can serve as adaptors that bring two proteins into proximity ” (A p.439). The worked chain: Sos bound to Grb2 activates Ras, which activates a MAPK cascade ending in phosphorylation of targets in cytosol and nucleus, giving specific metabolic changes and altered gene expression. A second branch runs through the lipid: PI3K, activated by IRS-1, phosphorylates the membrane lipid PIP2 to PIP3, and PIP3 becomes a nucleation point for further branches of insulin signalling -- so a LIPID, not only a protein, can be the assembly platform. Membrane rafts concentrate particular signalling proteins into the same patch of bilayer, which raises the local concentration of partners that must meet. The section closes on the theme worth carrying away: extensive interconnections between pathways allow integration and fine-tuning rather than isolated on/off lines. IN THE BOOK'S OWN WORDS: “For simplicity, we have treated individual signaling pathways as separate sequences of events leading to separate metabolic consequences” (A p.438); “The human genome encodes at least 24 proteins that contain PTB domains, including IRSl” (A p.440); “The scaffold protein KSR has binding sites for all three of the kinases in the Raf-MEK-ERK cascade.” (A p.441); “In these circuits, protein kinases are the writers, domains such as SH2 are the readers, and PTPs and other phosphatases are the erasers.” (A p.442).",
      cn: "很短的一节，它补上的是 12.1 里点名过的**「模块化」**背后的具体机制。IRS-1 上**被磷酸化的 Tyr 残基**「**充当带 SH2 结构域的蛋白的结合位点**」，而「**这些多价蛋白可以充当衔接蛋白 (adaptor)，把两个蛋白拉到彼此靠近**」（A p.439）。书上走通的那条链是：**Grb2 上结合的 Sos 激活 Ras**，Ras 再激活一条 **MAPK 级联**，最终磷酸化胞质和核内的靶蛋白，产生特定的代谢变化和基因表达改变。**还有一条分支走的是脂**：由 IRS-1 激活的 **PI3K** 把膜脂 **PIP₂ 磷酸化成 PIP₃**，而 PIP₃ 成为胰岛素信号后续分支的**成核点**——**也就是说，充当装配平台的可以是一个脂，不只是蛋白**。**膜筏**则把特定的信号蛋白**聚到同一小块双层里**，从而提高那些必须相遇的搭档的**局部浓度**。本节结尾的那句话最值得带走：**通路之间广泛的互联，使得整合与精细调节成为可能**——**信号不是一条条彼此隔离的开关线路。**"
    }
  },
  {
    id: "L-12-6-1",
    book: "lehninger",
    topicKey: "membrane-transport",
    chapter: 12,
    section: "12.6",
    czTitle: "Řízené iontové kanály (12.6) — jen orientačně: nejjednodušší převodník signálu",
    enTitle: "Gated ion channels — a brief orientation: the simplest signal transducer there is, and the one neurons are built on",
    cnTitle: "门控离子通道——只作科普性了解：最简单的信号转导器，也是神经元赖以工作的那一个",
    pages: [442, 443, 444, 445],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 12.6 read end to end, A printed pp.442-445 with SUMMARY 12.6 on p.445. `lehninger_only_scope.tsv` marks 12.6 `brief`. Czech coverage checked with word-boundary matching first: napěťově 0, acetylcholinov 0, iontový kanál 1 -- near-zero. topicKey merges into `membrane-transport`, the existing key carrying the Lehninger node L-11-3-1, which already covers the K+ channel selectivity filter from the transport side; this is the signalling side of the same object, so it deepens that key instead of starting a parallel one.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；门控离子通道与动作电位是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "A gated ion channel needs no second messenger and no cascade — the signal opens a hole and ions do the rest, which is why Lehninger calls these the simplest signal transducers. And a neuron's membrane potential is not set by one channel: it is the SUM of every ion-channel contribution, which is what makes a neuron an integrator rather than a relay.",
      cn: "门控离子通道**不需要第二信使、也不需要级联**——**信号把孔打开，剩下的由离子自己完成**，所以 Lehninger 称它们是**最简单的信号转导器**。而且神经元的膜电位**不是由某一个通道决定的**：它是**所有离子通道贡献的总和**——**这正是神经元之所以是「整合器」而不是「中继器」的原因。**"
    },
    summary: {
      en: "The shortest signalling story in the chapter. “ Ion channels gated by membrane potential or ligands are central to signaling in neurons and other cells ” (A p.445). The action potential is the worked case: voltage-gated Na+ and K+ channels carry it along the axon as a wave of depolarization (Na+ influx) followed by repolarization (K+ efflux), and its arrival at the end of a presynaptic neuron triggers neurotransmitter release. The transmitter -- acetylcholine, for example -- diffuses across to the postsynaptic neuron, or to the muscle cell at a neuromuscular junction, binds specific receptors in the plasma membrane and changes Vm there. The point worth keeping is the arithmetic one: a neuron's cell body carries receptors for many different transmitters, and its Vm is the SUM of all the ion-channel contributions, so the cell adds its inputs rather than obeying any one of them. The section ends on a clinical hook: “ Neurotoxins, produced by many organisms, attack neuronal ion channels ” and are therefore fast-acting and deadly -- fast precisely because no cascade has to run first. IN THE BOOK'S OWN WORDS: “Changes in membrane potential are effected by gated ion channels. Excitable cells play central roles in nerve conduction” (A p.442); “The membrane potential of a cell at a given time is the result of the types and numbers of ion channels open at that instant.” (A p.443); “The acetylcholine receptor is a cation channel.” (A p.444).",
      cn: "全章最短的一个信号故事。**「由膜电位或配体门控的离子通道，是神经元及其他细胞信号传导的核心」**（A p.445）。样板是**动作电位**：**电压门控的 Na⁺ 和 K⁺ 通道**把它沿轴突带下去，形式是一波**去极化（Na⁺ 内流）**紧跟一波**复极化（K⁺ 外流）**；动作电位抵达突触前神经元末端时，**触发神经递质释放**。递质——比如**乙酰胆碱**——扩散到突触后神经元（在神经肌肉接头处则是肌细胞），结合质膜上的特异受体，**改变那里的 Vm**。最值得记住的是那条**算术式**的要点：神经元胞体上带着**多种不同递质的受体**，而它的 **Vm 是所有离子通道贡献的总和**——**所以细胞是把输入加起来，而不是服从其中任何一个**。本节以一个临床钩子收尾：**「许多生物产生的神经毒素攻击神经元的离子通道」**，因而**起效快且致命**——**之所以快，恰恰是因为不必先跑完一条级联。**"
    }
  },
  {
    id: "L-12-8-1",
    book: "lehninger",
    topicKey: "cell-cycle-control",
    chapter: 12,
    section: "12.8",
    czTitle: "Žádná — regulace buněčného cyklu proteinkinasami (12.8): cykliny, CDK a hodiny, které se samy ničí",
    enTitle: "Regulation of the cell cycle by protein kinases — a brief orientation: cyclins, CDKs, and a clock that destroys its own hand",
    cnTitle: "细胞周期的蛋白激酶调控——只作科普性了解：细胞周期蛋白、CDK，以及一座会自己销毁指针的钟",
    pages: [446, 447, 448, 449, 450],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 12.8 read end to end, A printed pp.446-450; SUMMARY 12.8 is on p.450, where A's OCR renders the heading as 'SUMMARY 12,8' with a comma -- noted so the next person searching for it does not conclude it is missing. `lehninger_only_scope.tsv` marks 12.8 `brief`. Czech coverage measured with word-boundary matching before writing and it is zero: buněčný cyklus 0, cyklin 0, CDK 0, mitóz 0, kontrolní bod 0. topicKey is a NEW single-book key, `cell-cycle-control`, because there is genuinely no Czech node to join -- the expected behaviour for a Lehninger-only topic, not a defect.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；细胞周期与 CDK 是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "A CDK is a kinase that cannot work alone: the catalytic subunit is inactive until a cyclin binds it. And the cyclin is deliberately unstable — rising cyclin eventually triggers its own destruction by ubiquitin tagging, which is what makes the level OSCILLATE instead of just rising. The clock works because it throws its own hand away.",
      cn: "**CDK 是一个单靠自己不能工作的激酶**：**催化亚基在细胞周期蛋白 (cyclin) 结合上来之前是无活性的**。而**这个 cyclin 是被刻意做成不稳定的**——**浓度升高最终会触发它自己被泛素标记、被销毁**，正因如此它的水平才会**振荡**，而不是一路升上去。⚠️ **这座钟之所以能走，是因为它会把自己的指针扔掉。**"
    },
    summary: {
      en: "A brief tour of how the cell cycle is timed. “ Progression through the cell cycle is regulated by the cyclin-dependent protein kinases ” (CDKs), which act at specific points in the cycle, phosphorylating key proteins and modulating their activities (A p.450). The control principle to keep: “ The catalytic subunit of CDKs is inactive unless associated with the regulatory cyclin subunit ” -- so activity requires two components, and the cell can regulate either one. Four levers change a cyclin-CDK complex's activity through the cycle: differential synthesis of the CDKs, specific degradation of the cyclin, phosphorylation and dephosphorylation of critical residues in the CDKs, and binding of inhibitory proteins to particular cyclin-CDK pairs. The most elegant part is the timer itself: a sequence in the cyclin called the destruction box marks it for ubiquitin tagging and degradation in proteasomes, and because the rise in cyclin concentration ultimately triggers that degradation, the level oscillates in step with the cycle rather than simply accumulating. The section also reaches the damage checkpoints -- a double-strand break is one of the signals that can arrest progression -- which is the hinge into 12.9. IN THE BOOK'S OWN WORDS: “One of the most dramatic manifestations of signaling pathways is the regulation of the eukaryotic cell cycle.” (A p.446); “The kinases are heterodimers with a regulatory subunit, a cyclin, and a catalytic subunit, a cyclin-dependent protein kinase (CDK).” (A p.447); “CDKs are active only when associated with a cyclin.” (A p.448); “There are scores of known CDK targets, and much remains to be learned.” (A p.449).",
      cn: "一节关于**细胞周期如何被计时**的简短导览。**「细胞周期的推进由细胞周期蛋白依赖性激酶（CDK）调控」**，它们在周期的**特定节点**上起作用，磷酸化关键蛋白并调节其活性（A p.450）。要记住的控制原理是：**「CDK 的催化亚基，在没有与调节性的 cyclin 亚基结合时是无活性的」**——**所以活性需要两个组件，而细胞可以调控其中任何一个**。有**四根杠杆**在周期中改变 cyclin-CDK 复合体的活性：**CDK 的差异性合成**、**cyclin 的特异性降解**、**CDK 上关键残基的磷酸化与去磷酸化**，以及**抑制性蛋白与特定 cyclin-CDK 对的结合**。最精巧的是**计时器本身**：cyclin 里有一段叫**破坏框 (destruction box)** 的序列，把它标记去接受**泛素标签**并在**蛋白酶体**中降解；而由于 **cyclin 浓度的升高最终会触发这一降解**，它的水平便随周期**振荡**，而不是一味累积。本节还讲到**损伤检查点**——**DNA 双链断裂**就是能让周期停下来的信号之一——**这正是通向 12.9 的那个铰链。**"
    }
  },
  {
    id: "L-12-9-1",
    book: "lehninger",
    topicKey: "oncogenes-and-apoptosis",
    chapter: 12,
    section: "12.9",
    czTitle: "Žádná — onkogeny, tumor supresorové geny a programovaná buněčná smrt (12.9)",
    enTitle: "Oncogenes, tumour suppressor genes and programmed cell death — a brief orientation: cancer as broken signalling, and why the two gene classes behave in opposite ways",
    cnTitle: "癌基因、抑癌基因与程序性细胞死亡——只作科普性了解：把癌看成「坏掉的信号转导」，以及这两类基因为什么行为相反",
    pages: [451, 452, 453, 454, 455, 456],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 12.9 read end to end, A printed pp.451-456 with SUMMARY 12.9 on p.456. `lehninger_only_scope.tsv` marks 12.9 `brief`. Czech coverage measured with word-boundary matching and it is zero: onkogen 0, apoptóz 0, p53 0, nádorov 1, rakovin 0, and Ras 0 -- note that a naive substring count returns 607 for `Ras` because Czech enzyme names end in -rasa, so that number is meaningless. topicKey is a NEW single-book key, `oncogenes-and-apoptosis`, as there is no Czech node to join. ⚠️ NOTE ON PRIORITY: an earlier session claimed this section had 'the highest exam relevance' in ch12. That claim had no basis and was withdrawn -- see the warning in CORE2. Nothing in this repo can say whether it is examined.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；癌基因、抑癌基因与凋亡是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Oncogenes and tumour suppressors are not two names for the same thing — they fail in opposite directions and are inherited in opposite ways. An oncogene is a signalling protein stuck ON, and it is genetically DOMINANT: one bad copy is enough. A tumour suppressor normally says stop, and it is RECESSIVE: you have to lose both copies. That is why cancer generally needs an ACCUMULATION of mutations rather than one.",
      cn: "**癌基因和抑癌基因不是同一件事的两个名字——它们坏的方向相反，遗传方式也相反。** **癌基因**是一个**卡在「开」上**的信号蛋白，而且是**遗传上显性的**：**坏一份拷贝就够了**。**抑癌基因**平时说的是「停」，它是**隐性的**：**必须两份拷贝都失去**。⚠️ **这正是为什么癌症通常需要突变的「累积」，而不是一个突变。**"
    },
    summary: {
      en: "The chapter's closing section, and it reads as the pathology of everything before it. “ Oncogenes encode defective signaling proteins ” : by continually giving the signal for cell division they lead to tumour formation, they are genetically DOMINANT, and they may encode defective growth factors, receptors, G proteins, protein kinases or nuclear regulators of transcription (A p.456) -- i.e. any component of the cascades in 12.1 to 12.5 can be the broken one. “ Tumor suppressor genes encode regulatory proteins that normally inhibit cell division ” ; mutations in them are genetically RECESSIVE but can still lead to tumours, because losing both copies removes a brake. Put together, “ Cancer is generally the result of an accumulation of mutations ” in oncogenes and tumour suppressor genes -- not a single event. A third class is worth knowing because it is the one people forget: stability genes encode the proteins needed to repair genetic damage, and when THEY are mutated, other mutations go unrepaired, including those in proto-oncogenes and tumour suppressors. Finally apoptosis: “ Apoptosis is programmed and controlled cell death ” that operates in normal development and in adulthood to destroy and recycle unnecessary, damaged or infected cells, and it can be triggered by extracellular signals such as TNF acting through plasma membrane receptors. The section also shows where the biochemistry became medicine, with protein kinase inhibitors such as imatinib. IN THE BOOK'S OWN WORDS: “Oncogenes were originally discovered in tumor-causing viruses, then later found to be derived” (A p.451); “In all types of cancer, the normal regulation of cell division has become dysfunctional due to defects in one or more genes.” (A p.452); “imatinib mesylate (Gleevec; Fig. 3a), a small-molecule inhibitor, has proved nearly 100% effective in bringing about remission” (A p.453); “Stability genes (also called caretaker genes) encode proteins that function in the repair of major genetic defects” (A p.454); “One trigger for apoptosis is irreparable damage to DNA. Programmed cell death also occurs during the normal development of an embryo” (A p.455).",
      cn: "全章的收尾一节，读起来就是**前面所有内容的病理学版本**。**「癌基因编码有缺陷的信号蛋白」**：它们**不停地发出「分裂」的信号**，从而导致肿瘤形成；它们在**遗传上是显性的**；而且它们可以编码有缺陷的**生长因子、受体、G 蛋白、蛋白激酶或转录的核内调节因子**——**也就是说，12.1 到 12.5 里那些级联的任何一个组件，都可能是坏掉的那个**。**「抑癌基因编码的调节蛋白，平时抑制细胞分裂」**；它们的突变在**遗传上是隐性的**，却同样能导致肿瘤，**因为失去两份拷贝就等于拆掉了一个刹车**。两者合起来：**「癌症通常是癌基因与抑癌基因上突变累积的结果」**——**不是单一事件**。还有**第三类**值得知道，因为它最常被忘掉：**稳定基因 (stability genes)** 编码修复遗传损伤所需的蛋白，**当它们本身发生突变时，其他突变就得不到修复**，其中就包括**原癌基因和抑癌基因上的突变**。最后是凋亡：**「凋亡是程序性的、受控的细胞死亡」**，它在正常发育和成年期都在运作，**销毁并回收不需要的、受损的或被感染的细胞**，并且可以由 **TNF** 这类**经质膜受体起作用的胞外信号**触发。本节还展示了这套生化在哪里变成了医学——**伊马替尼 (imatinib)** 这类**蛋白激酶抑制剂**。"
    }
  }
]);
