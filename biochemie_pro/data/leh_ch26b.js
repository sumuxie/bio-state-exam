/* ============================================================
   Lehninger 8 — Chapter 26, sections 26.3 and 26.4. Second and third
   nodes from chapter 26, after L-26-2-1 (leh_ch26.js, RNA processing).

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」.
   Only `summary` + `mustKnow`. Written to the pattern of `leh_ch12b.js`.

   ⚠️ 26.4 IS THE ONE NODE IN THIS SET WITH A REAL OVERLAP INSIDE THE
   LEHNINGER LAYER, AND IT IS WRITTEN AROUND THAT RATHER THAN OVER IT.
   Measured before writing: `ribozyme` scores 6 hits in L-26-2-1 and
   `self-splic` 11. L-26-2-1 already teaches that group I and group II
   introns are self-splicing, that the spliceosome's catalytic centre
   is RNA, and it carries a whole `trace` card on the word ribozyme.
   So this node does NOT re-teach what a ribozyme is. What is genuinely
   absent from the entire app -- `RNA world` scores 0 across every node
   in both books -- is the ARGUMENT: the checklist by which a ribozyme
   is judged to be a real enzyme, and the evolutionary hypothesis that
   checklist supports. That is what 26.4 is written to add, and the
   summary points back to L-26-2-1 by name instead of repeating it.

   CZECH COVERAGE, word-boundary matched before writing:
     26.3  reverzní transkriptas 0, retrovir 0, telomeráz 0,
           replikas 0, HIV 0. `telomer` scores 1 and it is a DISTRACTOR
           inside a quiz option in Czech 4-1-2 ("stabilises telomeres"),
           not a treatment. The 2 `reverzní` hits are in 7-9
           (gluconeogenesis, a reverse reaction). Zero.
           ⚠️ The Lehninger layer needed checking as well, and it is
           NOT zero: `reverse transcript` scores 5 in L-9-1-1 and 3 in
           L-9-2-1. Those are the ENZYME AS A LABORATORY REAGENT -- how
           you make cDNA -- which is a different question from the
           virology and telomere biology here. `retrovirus` scores 1 in
           L-9-1-1, `telomerase` 0 anywhere.
     26.4  ribozym 0, autokatal 0, RNA-svět 0. The 50 `intron` and 3
           `sestřih` hits in Czech 4-2-4-2 and 4-1-4-1 are eukaryotic
           splicing as a process, with no suggestion that the catalyst
           is RNA.

   ⚠️ A THIRD PROBE TRAP, FOUND HERE AND WORTH THE LINE (the first two
   are recorded in leh_ch2b.js and leh_ch4.js): `verify_citations.py`'s
   QUOTED regex captures a span of 18 to 140 CHARACTERS. L-26-3-1's
   citation first carried a 161-character quotation, which the regex
   therefore did not match at all -- reported as "no searchable phrase",
   i.e. as if the field held no quote, not as if the quote were wrong.
   A correct, verbatim, correctly-paged quotation can fail this way just
   for being long. Keep quoted spans short.

   PAGE RANGES MEASURED IN A:
     26.3  988-995. tsv correct at both ends.
     26.4  995-1001. ⚠️ tsv says 996-1001 and the START IS WRONG:
           SUMMARY 26.3 and the 26.4 heading share printed p.995, where
           "led to one of the most exciting discoveries in biochemistry"
           is measurably located.

   topicKey:
     26.3 starts a NEW single-book key `rna-dependent-synthesis`.
     26.4 MERGES into `transcription`, the key that already holds Czech
          4-1-4-1, 4-1-4-2 and L-26-2-1 -- which is exactly where a
          reader who followed the ribozyme thread out of L-26-2-1 should
          land. Already cross-book, so neither count moves.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-26-3-1",
    book: "lehninger",
    topicKey: "rna-dependent-synthesis",
    chapter: 26,
    section: "26.3",
    czTitle: "Žádná — syntéza RNA a DNA podle RNA předlohy (26.3): jediná šipka, kterou centrální dogma nemělo",
    enTitle: "RNA-dependent synthesis of RNA and DNA — a brief orientation: the arrow the central dogma did not have, and the three places your own cells use it",
    cnTitle: "以 RNA 为模板合成 RNA 和 DNA——只作科普性了解：中心法则里原本没有的那一支箭头，以及你自己的细胞在哪三处用到它",
    pages: [988, 989, 990, 991, 992, 993, 994, 995],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 26.3 read end to end, A printed pp.988-995: the heading and 'the role of the template strand has been reserved for DNA' are on printed p.988, SUMMARY 26.3 on printed p.995. `lehninger_only_scope.tsv` marks 26.3 `brief` and its range is correct at both ends. Czech coverage measured with word-boundary matching before writing: reverzní transkriptas 0, retrovir 0, telomeráz 0, replikas 0, HIV 0. `telomer` scores 1 and it is a distractor inside a quiz option in Czech 4-1-2, not a treatment; the 2 `reverzní` hits are the reverse reaction in 7-9 on gluconeogenesis. ⚠️ The Lehninger layer is NOT zero and the distinction matters: `reverse transcript` scores 5 in L-9-1-1 and 3 in L-9-2-1, but both are the enzyme AS A LABORATORY REAGENT for making cDNA -- a different question from the virology, retrohoming and telomere biology of this section. `retrovirus` scores 1 in L-9-1-1; `telomerase` scores 0 anywhere in the app before this node. topicKey is a NEW single-book key, `rna-dependent-synthesis`. NOT COVERED: the full HIV life cycle, the integrase and protease steps, and the structural detail of the telomerase RNP.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；逆转录酶、逆转录病毒与端粒酶是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Reverse transcriptase is not a virus-only curiosity: your own cells run one every time a chromosome end is rebuilt. Telomerase IS a reverse transcriptase, and the unusual part is that it carries its own template — a short piece of RNA inside the enzyme. Second thing worth keeping, because it explains the news: reverse transcriptases have NO 3'→5' proofreading exonuclease and make about 1 error per 20,000 nucleotides. That high error rate is why retroviruses and RNA viruses throw off new strains so fast — the mutation rate is built into the polymerase, not into the environment.",
      cn: "**逆转录酶不是病毒专有的怪现象：你自己的细胞每修一次染色体末端就要跑一次。** **端粒酶 (telomerase) 本身就是一种逆转录酶**，而它特别的地方在于**它自带模板**——**酶内部含着一小段 RNA**。第二件值得记住的事，因为它能解释新闻：**逆转录酶没有 3'→5' 校对外切酶活性**，**大约每 20,000 个核苷酸出一个错**。⚠️ **正是这个高错误率，让逆转录病毒和 RNA 病毒不断甩出新毒株——突变率是写在聚合酶里的，不是环境给的。**"
    },
    summary: {
      en: "Up to this section the template strand has always been DNA; here some enzymes use an RNA template instead. RNA-dependent DNA polymerases, also called reverse transcriptases, “were first discovered in retroviruses, which must convert their RNA genomes into double-stranded DNA” as part of their life cycle (A p.995) — and the same reaction, run in a tube, is how cDNA is made, which is the use already covered in L-9-1-1. Retroviruses cause human disease, including AIDS and cancers, and some carry oncogenes that make infected cells grow abnormally; the section's clinical anchor is HIV, whose reverse transcriptase was the target of azidothymidine (AZT), synthesised in 1964 as a failed anticancer drug and found in 1985 to treat AIDS. One number explains a great deal: reverse transcriptases, like RNA polymerases, have no 3'→5' proofreading exonuclease and make about 1 error per 20,000 nucleotides added, giving a high mutation rate and fast viral evolution — a factor in the frequent appearance of new disease-causing strains. Three further users of the same chemistry follow. Many eukaryotic transposons are related to retroviruses and move through an RNA intermediate. Group II introns do the same trick in reverse, inserting themselves into a DNA gene and then being copied back by an intron-encoded reverse transcriptase — retrohoming. And telomerase, the enzyme that builds the repeated sequence at the end of a linear chromosome, is a specialised reverse transcriptase carrying its own internal RNA template. Finally, RNA-dependent RNA polymerases: the replicases of RNA bacteriophages such as Qβ, and of eukaryotic RNA viruses including influenza and the coronaviruses of SARS and COVID-19. Every RNA virus except the retroviruses must encode one, because the host has no such enzyme. IN THE BOOK'S OWN WORDS: “Certain RNA viruses that infect animal cells carry within the viral particle an RNA-dependent DNA polymerase called reverse transcriptase” (A p.988); “Retroviruses typically have three genes: gag (a name derived from the historical designation group associated antigen), pol, and env” (A p.989); “They generally have error rates of about 1 per 20,000 nucleotides added.” (A p.990); “AZT was first synthesized in 1964 by Jerome P. Horwitz. It failed as an anticancer drug” (A p.991); “the movement of these intrans has been called retrohoming” (A p.992); “The enzyme telomerase, discovered by Carol Greider and Elizabeth Blackburn, solves this problem by adding telomeres to chromosome ends.” (A p.993); “chromosomes of these viruses also function as mRNAs for the synthesis of viral proteins” (A p.994).",
      cn: "在这一节之前，**模板链一直是 DNA**；这里有些酶改用 **RNA 作模板**。依赖 RNA 的 DNA 聚合酶，「**也称为逆转录酶，最早是在逆转录病毒中发现的——这类病毒的生活周期要求把它们的 RNA 基因组转变成双链 DNA**」（A p.995）——而**同一个反应在试管里跑，就是制备 cDNA 的方法**，这一用途 `L-9-1-1` 已经讲过。逆转录病毒能致病，包括 **AIDS 和某些癌症**，其中一些携带**癌基因**，使被感染的细胞异常增殖；本节的临床锚点是 **HIV**，其逆转录酶正是**叠氮胸苷 (AZT)** 的靶点——**AZT 于 1964 年作为抗癌药合成、失败，1985 年被发现可用于治疗 AIDS**。有一个数字能解释很多事：**逆转录酶和 RNA 聚合酶一样，没有 3'→5' 校对外切酶**，**每加入约 20,000 个核苷酸出一个错**，由此带来**高突变率和快速的病毒演化**——**这正是致病毒株不断推陈出新的一个原因**。接下来是同一套化学的另外三个用户。许多**真核转座子**与逆转录病毒同源，**经由一个 RNA 中间体移动**。**II 型内含子**把这个把戏反过来做：**先把自己插进一个 DNA 基因，再由内含子自己编码的逆转录酶抄回 DNA**——这叫 **retrohoming（逆转录归巢）**。而**端粒酶**，那个在线性染色体末端合成重复序列的酶，**就是一种自带内部 RNA 模板的特化逆转录酶**。最后是**依赖 RNA 的 RNA 聚合酶**：**RNA 噬菌体（如 Qβ）的复制酶**，以及**流感病毒和引起 SARS 与 COVID-19 的冠状病毒**等真核 RNA 病毒的复制酶。⚠️ **除逆转录病毒外，每一种 RNA 病毒都必须自己编码一个**——**因为宿主细胞根本没有这种酶。**"
    }
  },
  {
    id: "L-26-4-1",
    book: "lehninger",
    topicKey: "transcription",
    chapter: 26,
    section: "26.4",
    czTitle: "Katalytické RNA a hypotéza RNA světa (26.4) — jen orientačně: čím se dokazuje, že RNA je opravdu enzym",
    enTitle: "Catalytic RNAs and the RNA world hypothesis — a brief orientation: not what a ribozyme is (L-26-2-1 has that) but how you prove one is really an enzyme, and what that implies about the origin of life",
    cnTitle: "催化性 RNA 与 RNA 世界假说——只作科普性了解：不讲「核酶是什么」（那在 L-26-2-1 里），而是讲怎么证明它真的是酶，以及这件事对生命起源意味着什么",
    pages: [995, 996, 997, 998, 999, 1000, 1001],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 26.4 read end to end, A printed pp.995-1001: the heading and 'led to one of the most exciting discoveries in biochemistry' are on printed p.995 -- the same page as SUMMARY 26.3 -- and SUMMARY 26.4 is on printed p.1001. ⚠️ `lehninger_only_scope.tsv` marks 26.4 `brief` AND ITS RANGE IS WRONG AT THE START (it says 996-1001). ⚠️ THIS IS THE ONE NODE IN THIS SET WITH A REAL OVERLAP INSIDE THE LEHNINGER LAYER, measured before writing: `ribozyme` scores 6 hits in L-26-2-1 and `self-splic` 11, and L-26-2-1 also carries a whole trace card on the term. That node already teaches that group I and group II introns are self-splicing and that the spliceosome's catalytic centre is RNA, so THIS NODE DOES NOT RE-TEACH WHAT A RIBOZYME IS -- it points back by name. What is absent from the entire app is the argument rather than the object: `RNA world` scores 0 across every node in both books. Czech coverage is separately zero -- ribozym 0, autokatal 0, RNA-svět 0; the 50 `intron` and 3 `sestřih` hits in Czech 4-2-4-2 and 4-1-4-1 are splicing as a process with no suggestion that the catalyst is RNA. topicKey MERGES into `transcription`, which already holds Czech 4-1-4-1, 4-1-4-2 and L-26-2-1 -- where a reader following the ribozyme thread out of L-26-2-1 should land. Already cross-book, so neither count moves. NOT COVERED: the hammerhead mechanism in detail, the group I intron's internal guide sequence, and the SELEX protocol beyond naming it.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；核酶与 RNA 世界假说是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "The exam-usable content here is a CHECKLIST, not a definition. A ribozyme is called a real enzyme because it passes the same five tests a protein enzyme passes: a folded three-dimensional structure, inactivation by denaturation, acceleration of a reaction rate, saturable kinetics, and reaction specificity. That is what makes the RNA world hypothesis an argument rather than a story — if RNA can both carry information and catalyse, one molecule could have done both jobs before DNA and protein divided them. ⚠️ Do not re-answer \"what is a ribozyme\" from here; that is L-26-2-1's self-splicing introns.",
      cn: "这一节考试用得上的是一张**清单**，不是一个定义。**核酶之所以被称为真正的酶，是因为它通过了蛋白酶通过的同样五项检验**：**有折叠的三维结构**、**会因变性而失活**、**能加速反应速率**、**有可饱和的动力学**、**有反应特异性**。⚠️ **正是这五条把「RNA 世界假说」从一个故事变成了一个论证**——**如果 RNA 既能携带信息又能催化，那么在 DNA 和蛋白质分工之前，一种分子就可以同时干这两件事**。⚠️ **不要从这里回答「核酶是什么」**——那是 `L-26-2-1` 里自剪接内含子那一段的内容。"
    },
    summary: {
      en: "The chapter's closing section, and it is an argument rather than a catalogue. What a ribozyme IS has already been covered in L-26-2-1 — group I and group II self-splicing introns, and the spliceosome whose catalytic centre is RNA — so the part to take from here is the test. “Ribozymes and protein-based enzymes share common features, including folded three-dimensional structures, inactivation by denaturation, acceleration of reaction rates, saturable kinetics, and reaction specificity” (A p.1001). Those five criteria are why calling RNA an enzyme is a measurement rather than a metaphor. The best-characterised examples are the self-splicing group I introns, RNase P, and the small hammerhead ribozyme, and almost everything they do rests on two reactions: transesterification and phosphodiester bond hydrolysis. There is an elegance worth noticing — when the substrate is itself RNA, the catalyst can use base pairing to line the substrate up, a positioning trick no protein enzyme has available. Ribozymes are not fossils either: RNA-based catalysts are at work in cells today “including tRNA processing, nuclear pre-mRNA splicing, and translation” — that last one meaning the ribosome itself. From this the section reaches its conclusion: the evolution of life on Earth “may have included an RNA world in which RNA was the central information carrier and catalyst before proteins and DNA emerged as key players”, and “The existence of ribozymes provides a powerful piece of evidence in support of this hypothesis”. The supporting experiment is SELEX, which searches pools of random RNA polymers for particular activities — accelerated evolution in a test tube — and has yielded RNAs that bind amino acids, nucleotides and dyes, and ribozymes catalysing ester and amide bond formation and other reactions. IN THE BOOK'S OWN WORDS: “The study of posttranscriptional processing of RNA molecules led to one of the most exciting discoveries in biochemistry” (A p.995); “Ribozymes, like protein enzymes, are inactivated by heating above their melting temperature or by the addition of denaturing agents” (A p.996); “Each ribozyme molecule can process about 100 substrate molecules per hour and is not altered in the reaction” (A p.997); “an RNA component of ribosomes catalyzes the synthesis of proteins” (A p.998); “the discovery of ribozymes gave life to the RNA world hypothesis and led to widespread speculation” (A p.999); “SELEX (systematic evolution of ligands by exponential enrichment) is used to generate aptamers” (A p.1000).",
      cn: "本章的收尾一节，而它是一个**论证**，不是一份清单。**核酶「是什么」已经在 `L-26-2-1` 里讲过了**——I 型和 II 型自剪接内含子，以及**催化中心是 RNA 的剪接体**——所以**从这一节要带走的是那套检验标准**。「**核酶与以蛋白质为基础的酶共有一些特征，包括折叠的三维结构、因变性而失活、对反应速率的加速、可饱和的动力学，以及反应特异性**」（A p.1001）。⚠️ **正是这五条判据，使「把 RNA 叫作酶」成为一项测量，而不是一个比喻。** 研究得最清楚的例子是**自剪接的 I 型内含子、RNase P，以及很小的锤头状核酶 (hammerhead ribozyme)**，而它们所做的几乎一切都建立在**两个反应**上：**酯交换 (transesterification)** 和**磷酸二酯键的水解（切割）**。有一处优雅之处值得注意——**当底物本身就是 RNA 时，催化剂可以用碱基配对把底物对准位置**，**这是蛋白酶用不上的一种定位手段**。核酶也不是化石：**今天的细胞里仍有以 RNA 为基础的催化剂在工作**，「**包括 tRNA 的加工、核内 pre-mRNA 的剪接，以及翻译**」——**最后这一项指的就是核糖体本身**。由此本节得出结论：地球上生命的演化「**可能经历过一个 RNA 世界，其中在蛋白质和 DNA 成为主角之前，RNA 既是中心的信息载体又是催化剂**」，而「**核酶的存在为这一假说提供了一份有力的证据**」。支持它的实验是 **SELEX**：**从随机 RNA 聚合物的库中筛出具有特定活性的分子**——**相当于在试管里加速演化**——已经筛出了能结合**氨基酸、核苷酸和有机染料**的 RNA，以及能催化**酯键和酰胺键形成**等反应的核酶。"
    }
  }
]);
