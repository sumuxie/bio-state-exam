/* ============================================================
   Lehninger 8 — Chapter 4, section 4.5. The first node from chapter 4.

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」.
   Only `summary` + `mustKnow` — no `points`, `terms`, `quiz`, `oral`
   or `trace`. Written to the pattern of `leh_ch12b.js`.

   PAGE RANGE MEASURED IN A: the tsv says A 136-142 and both ends hold.
   The heading "4.5 Determination of Protein and Biomolecular Structures"
   sits on A p.136 immediately after SUMMARY 4.4, and SUMMARY 4.5 is on
   A p.142.
   ⚠️ A PROBE THAT LOOKED LIKE A FAILURE AND WAS NOT, worth recording
   because it will happen again: the section's opening sentence
   "Structural biology is the study of the three-dimensional structures
   of biomolecules" reports NOT FOUND when searched against A, even
   though it is verbatim on p.136. A breaks it across a line as
   "three- dimensional", and `verify_citations.norm()` rejoins
   "(\w)- (\w)" into "threedimensional", which no longer contains the
   probe's "three-dimensional". RULE: do not build a probe around a
   hyphenated compound; pick a phrase without one.

   CZECH COVERAGE, word-boundary matched before writing: krystalograf 0,
   rentgen 0, NMR 0, kryo 0, difrakc 0. Zero across all 207 Czech nodes.
   The Lehninger layer was checked too, since a gap can be filled from
   either book: `crystallograph` appears twice (L-24-3-1, on nucleosome
   structure) and `cryo-EM` three times (L-19-1-1, on respiratory
   complexes) as passing evidence for a structural claim, never as a
   method. `NMR` scores 6 in L-23-2-1 and every one is PHOSPHORUS NMR of
   exercising muscle -- a metabolic measurement, a different technique
   answering a different question. So no node explains how any structure
   in this app was determined.

   topicKey MERGES into `working-with-proteins` (Czech 2-2-6 "Vlastnosti
   proteinů" + L-3-3-1 "Working with proteins"): that key is already the
   methods key -- how you purify a protein, how you measure it -- and
   "how you determine its structure" is the same question one step on.
   The key is already cross-book, so neither count moves.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };
window.BIOCHEM.topics = (window.BIOCHEM.topics || []).concat([
  {
    id: "L-4-5-1",
    book: "lehninger",
    topicKey: "working-with-proteins",
    chapter: 4,
    section: "4.5",
    czTitle: "Určování struktury proteinů a biomolekul (4.5) — jen orientačně: odkud se vlastně berou ty obrázky struktur",
    enTitle: "Determination of protein and biomolecular structures — a brief orientation: where every ribbon diagram you have ever seen actually came from, and what each method cannot tell you",
    cnTitle: "蛋白质与生物大分子结构的测定——只作科普性了解：你见过的每一张结构图是怎么来的，以及每种方法各自看不到什么",
    pages: [136, 137, 138, 139, 140, 141, 142],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 4.5 read end to end, A printed pp.136-142: the heading sits on printed p.136 directly after SUMMARY 4.4, and SUMMARY 4.5 is on printed p.142. `lehninger_only_scope.tsv` marks 4.5 `brief` and its range is correct at both ends. Czech coverage measured with word-boundary matching before writing and it is exactly zero: krystalograf 0, rentgen 0, NMR 0, kryo 0, difrakc 0. The Lehninger layer was checked as well, because an existing node could have closed the gap from the other side: crystallography appears twice in L-24-3-1 and cryo-EM three times in L-19-1-1, both as evidence for a structural claim rather than as a method, and the 6 hits for NMR in L-23-2-1 are phosphorus NMR of exercising muscle -- a metabolic measurement, not structure determination. topicKey merges into `working-with-proteins` (Czech 2-2-6 + L-3-3-1), which is already the methods key and already cross-book, so key count and cross-book count do not move. ⚠️ NOT COVERED: the section's treatment of how a crystal is grown, the mathematics of the Fourier transform, and multi-dimensional NMR experiment design -- a brief node names these and stops.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；X 射线晶体学 / NMR / 冷冻电镜是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Three methods, and each one's weakness is the exam-usable part. X-ray crystallography needs a crystal and gives you a space-and-time AVERAGE — it tells you almost nothing about how the protein moves. NMR works in solution, so motion survives, but it is limited to smaller molecules. Cryo-EM needs no crystal at all: the molecules are quick-frozen in vitreous ice in random orientations and the computer sorts them. So when a structure looks like a hard fact, ask which of the three produced it — that decides what the picture is actually evidence for.",
      cn: "**三种方法，而每一种的短板正是考试用得上的那部分。** **X 射线晶体学**必须先长出**晶体**，给你的是**空间与时间上的平均**——**它几乎不告诉你蛋白质是怎么运动的**。**NMR** 在**溶液**里做，所以**运动被保留下来**，但**只能做比较小的分子**。**冷冻电镜 (cryo-EM)** **完全不需要晶体**：分子被**急冻在玻璃态冰里**、朝向随机，由计算机去分类。⚠️ **所以当一个结构看起来像是铁一样的事实时，先问它是三者中哪一种做出来的**——**这决定了这张图究竟能当什么的证据。**"
    },
    summary: {
      en: "A methods section, and a short one. Structural biology combines biochemical approaches with physical tools and computation, and three techniques supply essentially every structure in this book. In x-ray crystallography, “protein molecules are crystallized in well-ordered orientations that diffract x-rays” (A p.142); the patterns and intensities of the diffracted beams depend on the structure, and mathematical methods then reconstruct the structure that would produce that pattern. The historical case is worth carrying: John Kendrew's crystalline sperm-whale myoglobin gave a diffraction pattern with nearly 25,000 reflections, analysed in stages until by 1959 virtually every non-hydrogen atom was placed, and the sequence obtained by chemical analysis agreed with the model. Over 100,000 protein structures have since been solved this way. But the book states the cost plainly: a crystal is not a cell, it imposes a space and time average on the structure, x-ray diffraction gives little information about molecular motion, and non-physiological crystallisation conditions can affect the conformation. NMR is the complement — carried out on molecules in solution, reporting on atomic nuclei and their chemical environment, with structures computed from hundreds of distance and geometric constraints. Cryo-EM removes the crystal requirement entirely: a sample is quick-frozen in vitreous (noncrystalline) ice and kept frozen while imaged, which limits the beam damage that would otherwise destroy the specimen before a high-resolution image could be recorded. Individual particles lie in random orientations, and then, as the summary puts it, “The individual molecules are then identified and computationally sorted” and the sorted two-dimensional images are combined into a three-dimensional structure. IN THE BOOK'S OWN WORDS: “Structural biologists combine biochemical approaches with physical tools and computational methods to obtain these structures” (A p.136); “is highly complex, with nearly 25,000 reflections” (A p.137); “for these distance constraints to be useful, the atoms giving rise to each signal must be identified” (A p.138); “Thousands of Individual Molecules Are Used to Determine Structures by Cryo-Electron Microscopy” (A p.139); “discrete objects in the diameter range 100 to 300 A can be visualized by electron microscopy” (A p.140); “Many novel structures have now been obtained by cryo-EM without models based on prior x-ray or NMR structures” (A p.141).",
      cn: "一节方法学内容，而且很短。**结构生物学**把生化手段、物理工具和计算方法结合起来，本书里几乎每一个结构都出自三种技术之一。在 **X 射线晶体学**中，「**蛋白质分子被结晶成排列良好的取向，从而衍射 X 射线**」（A p.142）；**衍射线的图样和强度取决于结构**，再用数学方法**反推出能产生该图样的结构**。那段历史值得记住：**John Kendrew** 的**抹香鲸肌红蛋白晶体**给出的衍射图样有近 **25,000 个衍射点**，分阶段解析，到 **1959 年**几乎所有**非氢原子**的位置都被确定，而**化学分析得到的氨基酸序列与模型相符**。此后用这个办法解出的蛋白结构已**超过 100,000 个**。但书上把代价说得很直白：**晶体不是细胞**，它把结构**在空间和时间上做了平均**，**X 射线衍射几乎不提供分子运动的信息**，而且**非生理的结晶条件也可能改变构象**。**NMR** 正是它的互补——**在溶液中进行**，报告**原子核及其化学环境**，结构由**数百个距离和几何约束**计算出来。**冷冻电镜**则彻底取消了对晶体的要求：样品被**急冻在玻璃态（非晶）冰**中并在冷冻状态下成像，从而**限制了电子束的损伤**——否则在拿到高分辨率图像之前样品就被打坏了。单个颗粒**取向随机**，然后，如摘要所说，「**再把单个分子识别出来并用计算机分类**」，把分类后的**二维图像合并成三维结构**。"
    }
  }
]);
