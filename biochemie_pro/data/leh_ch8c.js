/* ============================================================
   Lehninger 8 — Chapter 8, section 8.4. Third node from chapter 8,
   after L-8-2-1 (leh_ch8b.js) and L-8-3-1 (leh_ch8.js).

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」.
   Only `summary` + `mustKnow`. Written to the pattern of `leh_ch12b.js`.

   PAGE RANGE MEASURED IN A: the tsv says A 294-296 and both ends hold.
   The heading and "nucleotides have cellular functions as energy
   carriers, components of enzyme cofactors" are on A p.294; SUMMARY 8.4
   is on A p.296.

   CZECH COVERAGE — this is the one section of the eleven where the
   Czech layer is NOT thin, and the honest answer is "most of it is
   already there, one idea is not". Word-boundary measured:
     cAMP        77 hits (4-2-4-2 ×45, 7-12-2 ×24, 10-18/19/20)
     NAD         334, FAD 122, koenzym 13, ATP 1521
   So second messengers and nucleotide cofactors are taught, heavily.
   What is NOT anywhere: WHY those cofactors contain a nucleotide at
   all. `adenosin` scores 6 across all 207 Czech nodes and every one is
   structural (naming the parts of a nucleic acid in 4-1, 4-1-2,
   4-2-3-1, 4-2-4-2), never the binding-handle argument. That single
   idea is what this node is for, and the node says so instead of
   pretending the whole section is new.

   topicKey MERGES into `nucleotides` (Czech 4-1 + 4-1-2 + L-8-2-1),
   the key the rest of chapter 8's nucleotide material already uses.
   Already cross-book, so neither count moves. Deliberately NOT
   `atp-and-phosphoryl-transfer` (Czech 6-1-2-1/2) and NOT
   `hormone-structure-and-action` (where Czech 10-18's cAMP cascade
   lives): those two keys hold the CONSEQUENCES, this section is about
   the nucleotide itself. Both are named in the summary so a reader
   crossing over is sent to them by name rather than by merge.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-8-4-1",
    book: "lehninger",
    topicKey: "nucleotides",
    chapter: 8,
    section: "8.4",
    czTitle: "Další funkce nukleotidů (8.4) — jen orientačně: proč má skoro každý koenzym na sobě přilepený AMP",
    enTitle: "Other functions of nucleotides — a brief orientation: energy carrier, second messenger, and why almost every cofactor has an AMP stuck to it doing no chemistry",
    cnTitle: "核苷酸的其他功能——只作科普性了解：能量载体、第二信使，以及为什么几乎每个辅酶身上都挂着一个不参与化学反应的 AMP",
    pages: [294, 295, 296],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 8.4 read end to end, A printed pp.294-296: the heading is on printed p.294, SUMMARY 8.4 on printed p.296. `lehninger_only_scope.tsv` marks 8.4 `brief` and its range is correct at both ends. ⚠️ CZECH COVERAGE IS THE OPPOSITE OF THE OTHER BRIEF NODES AND IS REPORTED AS SUCH: measured with word-boundary matching, cAMP scores 77 hits (45 in 4-2-4-2, 24 in 7-12-2, the rest in 10-18/10-19/10-20), NAD 334, FAD 122, koenzym 13, ATP 1521. Second messengers and nucleotide cofactors are taught heavily and this node does not re-teach them. What is absent is one specific idea: WHY a cofactor carries a nucleotide at all. `adenosin` scores 6 across all 207 Czech nodes and every hit is structural -- naming the parts of a nucleic acid in 4-1, 4-1-2, 4-2-3-1 and 4-2-4-2 -- never the binding-handle argument. That idea, plus ppGpp and the ATP/ADP-as-neurotransmitter material, is what is new here. topicKey merges into `nucleotides` (Czech 4-1, 4-1-2 + L-8-2-1); it is deliberately NOT merged into `atp-and-phosphoryl-transfer` or `hormone-structure-and-action`, which hold the consequences rather than the nucleotide itself, and both are named in the summary so the reader is sent there by name.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；核苷酸的非遗传功能（能量、辅酶、第二信使）是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "The adenosine on NAD, FAD and coenzyme A does no chemistry — it is a binding HANDLE the enzyme grips to pull the business end into the active site. The number that proves it: strip the adenosine off acetoacetyl-CoA and its reactivity as a substrate for β-ketoacyl-CoA transferase falls by a factor of 10^6. So when you are asked why so many unrelated cofactors all contain AMP, the answer is binding energy, not reaction chemistry — and it explains why a cell can build a dozen different cofactors on one recycled part.",
      cn: "**NAD、FAD 和辅酶 A 上的那个腺苷不参与任何化学反应**——它是一个**结合用的「把手」**，酶抓住它、把**真正干活的那一端**拽进活性中心。⚠️ **证明它的那个数字**：把腺苷从**乙酰乙酰-CoA** 上去掉，它作为 **β-酮脂酰-CoA 转移酶**底物的反应性**下降 10⁶ 倍**。**所以当被问到「为什么这么多互不相干的辅酶身上都带一个 AMP」时，答案是结合能，不是反应化学**——**这也解释了细胞为什么能用同一个回收来的零件搭出十几种不同的辅酶。**"
    },
    summary: {
      en: "A short closing section listing what nucleotides do when they are not part of a nucleic acid — three jobs, one of which the Czech book never explains. First, energy: “ATP is the central carrier of chemical energy in cells” (A p.296), the phosphates attached at the 5' hydroxyl giving nucleoside mono-, di- and triphosphates. Second, cofactors: “The presence of an adenosine moiety in a variety of enzyme cofactors may be related to binding-energy requirements.” This is the part worth carrying, because it answers a question the Czech layer's heavy use of NAD, FAD and coenzyme A leaves open — why do all these unrelated molecules contain a nucleotide that takes no part in the reaction? The book's measurement is blunt: removing the adenosine from acetoacetyl-CoA reduces its reactivity as a substrate for β-ketoacyl-CoA transferase by a factor of 10^6, and the nucleotide moiety of coenzyme A appears to be a binding \"handle\" that helps pull the substrate into the active site. Third, signals. Cyclic AMP, formed from ATP by adenylyl cyclase, is the common second messenger produced in response to hormones — the same cascade Czech 10-18 and 7-12-2 already teach from the hormone side — and cGMP has regulatory roles too. Bacteria add ppGpp, made when protein synthesis slows during amino acid starvation, which shuts down rRNA and tRNA synthesis so the cell stops building ribosomes it cannot use. And finally the one that surprises people: “ATP and ADP serve as neurotransmitters in a variety of signaling pathways”, extracellular signals in their own right, which is how the anticlotting drug clopidogrel (Plavix) works — by blocking a receptor for one of them. IN THE BOOK'S OWN WORDS: “In none of these cofactors does the adenosine portion participate directly in the primary function” (A p.294); “a domain, called a nucleotide-binding fold, is found in many enzymes that bind ATP and nucleotide cofactors” (A p.295).",
      cn: "很短的收尾一节，列出**核苷酸在不作为核酸组成部分时都在干什么**——三件事，其中一件捷克书从未解释过。第一，**能量**：「**ATP 是细胞中化学能的中心载体**」（A p.296），磷酸基连在核糖的 **5' 羟基**上，给出核苷**一磷酸、二磷酸和三磷酸**。第二，**辅酶**：「**多种酶辅因子中都存在腺苷部分，这可能与结合能的需要有关**。」⚠️ **这才是最值得带走的一段**，因为它回答了一个捷克书大量使用 NAD、FAD、辅酶 A 却始终没有回答的问题——**这些互不相干的分子，为什么都带着一个根本不参与反应的核苷酸？** 书上的测量非常直白：把腺苷从**乙酰乙酰-CoA** 上去掉，它作为 **β-酮脂酰-CoA 转移酶**底物的反应性**下降 10⁶ 倍**；辅酶 A 上的核苷酸部分看起来就是一个**结合用的「把手」**，帮助把**底物拽进活性中心**。第三，**信号**。**环化 AMP (cAMP)** 由 **ATP 经腺苷酸环化酶**生成，是**响应激素而产生的常见第二信使**——正是捷克书 `10-18` 和 `7-12-2` 已经从激素那一侧讲过的同一条级联——**cGMP** 也有调节功能。细菌还多一个 **ppGpp**：在**氨基酸饥饿导致蛋白质合成变慢**时产生，它**关掉 rRNA 和 tRNA 的合成**，让细胞**不再造自己用不上的核糖体**。最后是最出人意料的一条：「**ATP 和 ADP 在多条信号通路中充当神经递质**」——**它们本身就是胞外信号**；抗血小板药**氯吡格雷（波立维, clopidogrel/Plavix）**正是靠**阻断其中一个的受体**起作用的。"
    }
  }
]);
