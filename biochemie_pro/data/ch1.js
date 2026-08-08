/* ============================================================
   Chapter 1 — Obecné zákonitosti živých soustav
   General principles of living systems / 生命系统的普遍规律
   Source: Biochemie – Základní kurz, pp. 8–20
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "1-1",
  book: "cz",
  topicKey: "cells-and-biomolecules",
  chapter: 1,
  section: "1.1",
  czTitle: "Co je biochemie?",
  enTitle: "What is biochemistry?",
  cnTitle: "什么是生物化学？",
  pages: [8, 9],
  coverage: "partial",
  coverageNote: "p.8 verified against scan; p.9 (Tab. 1.1 milestones) not in the extracted page set.",
  coverageNoteCn: "第 8 页已与扫描件核对；第 9 页（表 1.1 里程碑）不在提取到的页面集里，故本节点不包含它。",
  cnNote: { topic: "一", title: "序论", status: "mapped" },
  mustKnow: { en: "Biochemistry could only exist once chemistry itself got good enough to handle living matter's complexity — the Kjeldahl method for nitrogen (1883) is the book's own example of the enabling tool, so the field's founding date tracks an instrument, not an idea. And 'molecular biology' names two different things depending on who says it: broadly, all of biochemistry studied at the molecular level; narrowly, today, essentially molecular genetics — worth keeping straight since the book uses the wide sense.", cn: "生物化学能够出现，前提是化学本身变得足够强大，能够处理生命物质的复杂性——教材自己举的例子是1883年测氮的凯氏定氮法：这门学科的诞生日期，追根溯源是跟着一件工具走的，不是跟着一个想法走的。而『分子生物学』这个词，说的人不同、意思也不同：广义上它就是在分子层面研究的整个生物化学；今天的狭义用法则基本等同于分子遗传学——值得分清楚，因为教材用的是广义。" },
  trace: [
    {
      term: "molecular biology 分子生物学",
      what: "你会在很多地方看到这个词，然后发现每个人嘴里的它好像不是同一个东西——这不是你的错觉，它**真的有两个意思**。往大了说，它就是「在分子这个层面上做的生物化学」，那它跟生物化学基本是一回事；往小了说，也就是今天大多数人的用法，它差不多等于分子遗传学，专管核酸、复制、转录、翻译那一摊。",
      from: "为什么会长出两个意思？因为它出生得晚。生物化学在 19 世纪最后二十五年就已经成家立业了——它爹妈一个是有机化学、一个是生理学，所以早年干脆就叫 physiological chemistry（生理化学）。等到后来技术上真能在分子层面动手、核酸那条线又特别红火，「分子生物学」这个说法才冒出来。于是它一边被当成整个学科的时髦新名字，一边又被当成其中那个最红分支的名字，两种用法就都活下来了。",
      to: "对你来说只有一件事要记住：**这本教材用的是大的那个意思**。所以在这门课上碰到它，就按「分子层面的生物化学」去理解、去答，别自作主张缩小成分子遗传学。这一节里就这一个点会真的影响你的答案，其余都是背景。",
      family: "同一家子还有两个亲戚。physiological chemistry（生理化学）是这门学科的旧名字，现在基本没人这么叫了。biotechnology（生物技术）则是另一侧——生物化学管「搞懂它是怎么回事」，生物技术管「拿这些认识去干活」。一个求知，一个办事。"
    },
    {
      term: "Kjeldahl method 凯氏定氮法",
      what: "一个 1883 年发明出来的方法，干的事情特别朴素：测一份样品里到底有多少氮。教材专门点它的名，不是因为这方法本身多精巧，而是把它当成生物化学**能够出生**的标志。",
      from: "一个测氮的法子凭什么这么重要？因为**蛋白质里含氮**——氮量测准了，就等于能把蛋白质定量出来。在这之前是什么光景？普通化学和分析手段面对生命物质那种「又高度组织化、化学上又极其复杂」的样品，基本是抓瞎：你想研究它，可你连称一称、量一量都办不到。工具不到位的时候，再好的问题也问不出结果。",
      to: "这里藏着一条规律，而且它在这门课里会一遍一遍地出现：**这门学科每次往前跳，都是跟着工具走的，不是跟着想法走的**。19 世纪末靠的是凯氏定氮法这类分析方法；20 世纪下半叶那次爆发，靠的是另一批物理化学工具——光谱学、色谱、X 射线结构分析、电子显微镜。所以要是被问到「生物化学为什么这么晚才独立成一门学科」，答案不是「以前的人没想到」，而是「以前没这些家伙什」。",
      numbers: "1883 年，凯氏定氮法建立。19 世纪最后二十五年，生物化学成为独立学科——它是所有「大」化学学科里**最后一个**成家的。1906 年，第一本以生物化学命名的期刊《Biochemische Zeitschrift》创刊，这一年通常被当作它真正起飞的标志。"
    }
  ],
  summary: {
    en: "Biochemistry studies the substances occurring in organisms, the processes by which those substances enter or are formed in organisms, how they react with each other and with the environment, and the methods used to identify, characterise and measure them. It therefore sits simultaneously among the biological sciences (it studies living nature) and the chemical disciplines (it deals with chemical transformations).",
    cn: "生物化学研究生物体内存在的物质、这些物质进入或在体内生成的过程、它们彼此之间以及与环境之间的反应，还包括鉴定、表征和测定这些物质与过程的方法。因此它既属于生物科学（研究生命自然），又属于化学学科（研究化学转变）。"
  },
  points: [
    { cz: "rodiče oboru", en: "Its two 'parents' are organic chemistry (originally the chemistry of natural substances) on the chemical side, and physiology on the biological side — hence the early name 'physiological chemistry'.", cn: "本学科的两个「rodiče/父母」：化学一侧是有机化学（最初等同于天然产物化学），生物学一侧是生理学——因此早期也称「生理化学」。" },
    { en: "Biochemistry could only emerge once general chemistry and analytical methods were good enough to analyse highly organised, chemically very complex living matter. The Kjeldahl method for nitrogen determination (1883) is the textbook's example of such an enabling method.", cn: "只有当普通化学与分析方法发展到足以分析高度组织化、化学上极其复杂的生命物质时，生物化学才可能作为独立学科出现。教材举的例子是 1883 年建立的凯氏定氮法。" },
    { en: "It appears as an independent field only in the last quarter of the 19th century — the last of the 'great' chemical disciplines. A characteristic date for its real rise is 1906, the first journal with 'biochemistry' in its title (Biochemische Zeitschrift).", cn: "作为独立学科出现于 19 世纪最后二十五年，是「大」化学学科中最后成立的一个。真正兴起的标志性年份是 1906 年——第一本以「生物化学」命名的期刊《Biochemische Zeitschrift》创刊。" },
    { en: "The explosive growth in the second half of the 20th century again rested on improved experimental methods, this time physico-chemical: spectroscopy, chromatography, X-ray structure analysis, electron microscopy.", cn: "20 世纪下半叶的迅猛发展同样依赖实验方法的显著改进，这次主要是物理化学方法：光谱学、色谱、X 射线结构分析、电子显微镜。" },
    { en: "Biochemistry is a typical borderline field. Biophysics occupies a similar position, and because modern biochemistry depends so heavily on instrumental (physical) methods the two are now very close.", cn: "生物化学是典型的交叉学科。生物物理学处于类似地位；由于现代生物化学高度依赖仪器（本质上是物理的）方法，两个学科在当代观念中非常接近。" },
    { en: "Molecular biology in its broader sense is really a part of biochemistry — it explains biologically significant events at the molecular (hence chemical) level. Today a narrower sense dominates, largely equating it with molecular genetics.", cn: "分子生物学在广义上其实是生物化学的一部分——它在分子（因而是化学）层面阐明具有生物学意义的过程。今天则常用狭义理解，基本等同于分子遗传学。" },
    { en: "Applied links run to medicine (via pharmacology, toxicology and clinical biochemistry), to agrochemistry and to ecology; direct industrial application of biochemical knowledge is part of biotechnology.", cn: "应用方向延伸到医学（经由药理学、毒理学与临床生化）、农业化学与生态学；生化知识在生产中的直接应用属于生物技术。" }
  ],
  terms: [
    { cz: "biochemie", en: "biochemistry", cn: "生物化学", def_en: "Science of the chemical substances and chemical transformations occurring in living matter.", def_cn: "研究生命物质中的化学物质与化学转变的科学。" },
    { cz: "fyziologická chemie", en: "physiological chemistry", cn: "生理化学", def_en: "The early name for biochemistry, reflecting its descent from physiology.", def_cn: "生物化学的早期名称，反映其源自生理学。" },
    { cz: "Kjeldahlova metoda", en: "Kjeldahl method", cn: "凯氏定氮法", def_en: "Nitrogen determination method developed in 1883; cited as a method of decisive importance for the birth of biochemistry.", def_cn: "1883 年建立的氮测定方法；被视为对生物化学诞生具有决定性意义的方法。" },
    { cz: "molekulární biologie", en: "molecular biology", cn: "分子生物学", def_en: "In the broad sense a part of biochemistry; in today's narrow sense essentially molecular genetics.", def_cn: "广义上是生物化学的一部分；按今天的狭义理解基本等同于分子遗传学。" },
    { cz: "biotechnologie", en: "biotechnology", cn: "生物技术", def_en: "The direct application of biochemical knowledge in production.", def_cn: "生化知识在生产中的直接应用。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the textbook, which pair are the 'parents' of biochemistry?",
      q_cn: "按教材说法，生物化学的两个「父母」学科是？",
      options: [
        "Organic chemistry and physiology",
        "Physical chemistry and genetics",
        "Analytical chemistry and microbiology",
        "Biophysics and cytology"
      ],
      answer: 0,
      why_en: "The chemical parent is organic chemistry (originally the chemistry of natural substances); the biological parent is physiology — which is why the field was first called physiological chemistry.",
      why_cn: "化学一侧的来源是有机化学（最初即天然产物化学），生物学一侧是生理学——这正是该领域最初被称为「生理化学」的原因。"
    },
    {
      type: "mcq",
      q_en: "Which method does the textbook name as having had decisive importance for the emergence of biochemistry?",
      q_cn: "教材点名哪一种方法对生物化学的产生具有决定性意义？",
      options: [
        "X-ray structure analysis",
        "The Kjeldahl method for nitrogen determination (1883)",
        "Paper chromatography",
        "Electron microscopy"
      ],
      answer: 1,
      why_en: "The Kjeldahl nitrogen determination (1883) is given as the example of an analytical advance that made analysis of living matter feasible. Spectroscopy, chromatography, X-ray analysis and EM come later, driving the 20th-century expansion.",
      why_cn: "教材以 1883 年的凯氏定氮法为例，说明使分析生命物质成为可能的分析方法进步。光谱、色谱、X 射线分析与电镜属于更晚的阶段，推动的是 20 世纪的扩张。"
    },
    {
      type: "short",
      q_en: "Why does the textbook place biochemistry simultaneously among the biological and the chemical sciences?",
      q_cn: "教材为什么把生物化学同时归入生物科学与化学学科？",
      accept: ["living", "biological", "chemical", "transformation"],
      answer_en: "Because it studies living nature (which makes it biological) while its object is chemical transformations of substances (which makes it chemical). Its subject matter is the chemical substances present in organisms and the chemical processes running in them.",
      answer_cn: "因为它研究的是有生命的自然界（故属生物学），而其研究对象是物质的化学转变（故属化学）。其研究内容是生物体内存在的化学物质及其中进行的化学过程。"
    }
  ],
  oral: {
    q_en: "Define biochemistry and explain its position among the sciences.",
    q_cn: "定义生物化学，并说明它在各学科中的位置。",
    model_en: "Biochemistry is the science that studies the substances occurring in living organisms, the processes by which these substances enter or are formed in the organism, how they react with one another and with the surroundings, and the methods by which they are identified, characterised and measured. It belongs simultaneously to the biological sciences, because it investigates living nature, and to the chemical disciplines, because its subject is chemical transformation. Historically it arose from organic chemistry on one side and physiology on the other — it was originally called physiological chemistry. It could only become independent once analytical methods were sensitive enough to handle chemically complex living matter; the Kjeldahl nitrogen determination of 1883 is the classic example. It emerged as a separate field in the last quarter of the nineteenth century, the last of the great chemical disciplines, and expanded rapidly in the second half of the twentieth century thanks to spectroscopy, chromatography, X-ray structure analysis and electron microscopy. It is a typical borderline discipline, closely neighbouring biophysics, and molecular biology in its broad sense is really part of it.",
    checklist: [
      "Gave a definition covering substances + processes + methods",
      "Placed it in both biological and chemical sciences, with the reason for each",
      "Named organic chemistry and physiology as the parent disciplines",
      "Cited an enabling analytical method (Kjeldahl, 1883)",
      "Mentioned its late-19th-century emergence and 20th-century expansion",
      "Related it to biophysics and molecular biology"
    ]
  }
},

{
  id: "1-2",
  book: "cz",
  topicKey: "cells-and-biomolecules",
  chapter: 1,
  section: "1.2",
  czTitle: "Živé a neživé",
  enTitle: "Living and non-living",
  cnTitle: "生物与非生物",
  pages: [10, 11],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans. Tab. 1.2 and the Obr. 1.1 size scale were recovered by re-reading the page images — the raw OCR had dropped the whole composition table and garbled all four order-of-magnitude markers.",
  cnNote: { topic: "一", title: "序论", status: "mapped" },
  mustKnow: { en: "The line between living and non-living is not sharp — viruses barely show life's manifestations and structurally resemble crystals — so the book picks reproduction, not movement or metabolism, as the single most exclusive criterion, because it is the one thing that reliably separates the two. And the chemical difference between living and non-living matter is not WHICH elements are present, since living matter contains nothing inanimate nature lacks — it is a matter of concentration and of FORM: carbon in life is reduced and energy-rich, carbon in rock is already oxidised and spent.", cn: "生物和非生物之间的界线并不清晰——病毒几乎不表现出生命的迹象，结构上更接近晶体——所以教材挑选『繁殖』而不是『运动』或『代谢』，作为最具排他性的单一判据，因为这是唯一能可靠地把两者分开的东西。而生物物质和非生物物质在化学上的差别，不在于**存在哪些元素**——生物体里没有任何一种元素是非生命自然界所没有的——而在于**浓度**和**形式**：生命体里的碳是还原态、富含能量的，岩石里的碳则已经是氧化态、能量耗尽的了。" },
  summary: {
    en: "Distinguishing living from non-living looks trivial but is not sharply defined — viruses show very limited vital manifestations and structurally approach crystals, while at the other end of the size scale some hypotheses treat the whole Earth as a living 'superorganism' (Gaia). The most exclusive manifestation of life turns out to be reproduction; the most conspicuous structural feature is a high degree of organisation.",
    cn: "区分生物与非生物看似简单，实际上并没有精确界定——病毒的生命表现非常有限、结构上接近晶体；在尺度谱的另一端，有假说把整个地球视为活的「超级有机体」（盖娅）。生命最具排他性的表现是繁殖；结构上最显著的特征是高度的组织性。"
  },
  points: [
    { cz: "rozmnožování", en: "Reproduction is taken as the most exclusive criterion: the general ability of the living to assimilate matter from its surroundings and use it to multiply its own living matter — whether that shows as simple growth of the original individual or as the appearance of further similar individuals.", cn: "繁殖被视为最具排他性的判据：生物普遍具有从周围环境同化（即吸收为己有）物质、并用于增殖自身生命物质的能力——无论表现为原个体的单纯生长，还是产生与之相似的其他个体。" },
    { en: "Other manifestations of life: movement, response to external stimuli (irritability), and purposeful or even conscious action.", cn: "生命的其他表现：运动、对外界刺激的反应（应激性），以及有目的甚至有意识的行为。" },
    { en: "Structurally, the most striking characteristic is high organisation; other significant characteristics are regulation of the processes running in living matter and maintenance of a constant internal environment within relatively narrow limits.", cn: "从结构上看最显著的特征是高度组织化；其他重要特征是对生命物质中所进行过程的调节，以及把内环境维持在相对狭窄的范围内的恒定性。" },
    { en: "Qualitatively, living matter contains no element that does not also occur in inanimate nature. The difference is quantitative: living matter is conspicuous for a high concentration of light elements, and the trend is even sharper in atomic per cent than in mass per cent. Notably low are Si and Al, among the commonest elements on Earth.", cn: "从定性角度看，生命物质不含任何在无生命自然界中不存在的元素。差别是定量的：生命物质以轻元素浓度高为显著特征，若用原子百分比而非质量百分比比较，这一趋势更加突出。特别值得注意的是 Si 与 Al 含量很低，而它们是地球上最丰富的元素之列。" },
    { cz: "makrobiogenní prvky", en: "MACROBIOGENIC (primary biogenic) elements are H, O, C, N, P — present in all organisms at around 1 % of mass and above.", cn: "常量生源元素（初级生源元素）为 H、O、C、N、P——在所有生物体中含量约占质量 1% 及以上。" },
    { cz: "oligobiogenní / mikrobiogenní", en: "OLIGOBIOGENIC elements (0.05–1 % of mass): Ca, Mg, S, Na, K, Fe, Cl. MICROBIOGENIC elements: Cu, Zn, Co, Mn, I, Mo. Both groups are invariable — present in all organisms.", cn: "寡量生源元素（占质量 0.05–1%）：Ca、Mg、S、Na、K、Fe、Cl。微量生源元素：Cu、Zn、Co、Mn、I、Mo。两组都属于恒定元素——存在于所有生物体中。" },
    { cz: "variabilní / stopové prvky", en: "VARIABLE elements — B, Si, V, Br, Li, As, Se, Ti, Al — occur in significant amounts only in some species; also called trace elements or microelements.", cn: "可变元素——B、Si、V、Br、Li、As、Se、Ti、Al——只在某些物种中以较显著的量出现；也称痕量元素或微量元素。" },
    { en: "The most important difference in the FORM of elements is carbon: in inanimate nature carbon is mostly oxidised (carbonates, CO₂), whereas living matter is characterised by formally reduced (hydrogenated), energy-rich carbon, whose energy can be released simply by burning it in air to water and CO₂.", cn: "元素存在形式上最重要的差别在于碳：在无生命自然界中碳多为氧化态（碳酸盐、CO₂），而生命物质的特征是形式上被还原（加氢）的、富能的碳，其能量只需在空气中燃烧生成水和 CO₂ 即可释放。" },
    { cz: "chiralita", en: "A further striking feature of the carbon compounds in living matter is their chirality: unlike laboratory-prepared analogues, natural substances are mostly optically active. The causes of this are not yet fully explained.", cn: "生命物质中碳化合物另一显著特征是手性：与实验室制备的类似物不同，天然物质大多具有旋光活性。其原因至今尚未完全阐明。" },
    { en: "Nitrogen shows the same pattern: in inanimate nature mostly free gas and oxidised (nitrates), while living matter typically contains reduced-nitrogen compounds (especially amines).", cn: "氮表现出同样的规律：在无生命自然界中主要为游离气体和氧化态（硝酸盐），而生命物质的典型形式是还原态氮化合物（尤其是胺类）。" },
    { cz: "Tab. 1.2 — složení těla vs. zemská kůra", en: "TAB. 1.2 — composition of the human body vs. the Earth's crust, as mass % / atomic %, recovered directly from the page scan. HUMAN BODY: O 65.0 / 25.5 · C 18.5 / 9.7 · H 10.0 / 62.8 · Ca 1.5 / 0.24 · Si <0.001 / <0.001 · Al <0.001 / <0.001. EARTH'S CRUST: O 49.5 / 54.9 · C 0.1 / 0.14 · H 0.9 / 16.0 · Ca 3.4 / 1.5 · Si 25.7 / 16.3 · Al 7.5 / 4.9.", cn: "表 1.2——人体与地壳的组成，以质量% / 原子%表示，直接从页面扫描件恢复。人体：O 65.0 / 25.5 · C 18.5 / 9.7 · H 10.0 / 62.8 · Ca 1.5 / 0.24 · Si <0.001 / <0.001 · Al <0.001 / <0.001。地壳：O 49.5 / 54.9 · C 0.1 / 0.14 · H 0.9 / 16.0 · Ca 3.4 / 1.5 · Si 25.7 / 16.3 · Al 7.5 / 4.9。" },
    { en: "READ THE TABLE THIS WAY: hydrogen is only 10 % of body mass but 62.8 ATOMIC per cent — this is exactly the point that the trend towards light elements 'stands out even more sharply in atomic per cent'. Carbon is 18.5 % of the body against 0.1 % of the crust, a 185-fold enrichment, while silicon runs the other way: 25.7 % of the crust against less than 0.001 % of the body.", cn: "表格的正确读法：氢只占人体质量的 10%，却占 62.8 个原子百分比——这正是「用原子百分比比较时轻元素的趋势更加突出」这句话的确切含义。碳占人体 18.5%，而地壳仅 0.1%，富集达 185 倍；硅则相反：占地壳 25.7%，而在人体中不足 0.001%。" },
    { cz: "Obr. 1.1 — rozměrová variabilita", en: "OBR. 1.1 — the size comparison of living and non-living objects runs over four order-of-magnitude markers: 10⁻⁹ m (atoms, proteins, membrane thickness, viruses) · 10⁻⁶ m (chloroplast, cell) · 10⁻³ m (flea, length of DNA) · 10³ m (car, whale, sequoia, and man at about 1 m).", cn: "图 1.1——生物与非生物对象的尺寸比较跨越四个数量级刻度：10⁻⁹ m（原子、蛋白质、膜厚度、病毒）· 10⁻⁶ m（叶绿体、细胞）· 10⁻³ m（跳蚤、DNA 长度）· 10³ m（汽车、鲸、红杉，人约为 1 m）。" },
    { en: "Summary statement of the section: living matter is a dynamic system, subject to constant change and constantly renewing itself.", cn: "本节的总结性论断：生命物质是一个动态系统，不断发生变化并不断自我更新。" }
  ],
  terms: [
    { cz: "rozmnožování", en: "reproduction", cn: "繁殖", def_en: "The general ability of the living to assimilate matter from the surroundings and use it to multiply its own living matter; the most exclusive manifestation of life.", def_cn: "生物从环境中同化物质并用以增殖自身生命物质的普遍能力；生命最具排他性的表现。" },
    { cz: "makrobiogenní prvky", en: "macrobiogenic (primary biogenic) elements", cn: "常量生源元素", def_en: "H, O, C, N, P — present in all organisms at ~1 % of mass and above.", def_cn: "H、O、C、N、P——在所有生物体中占质量约 1% 及以上。" },
    { cz: "oligobiogenní prvky", en: "oligobiogenic elements", cn: "寡量生源元素", def_en: "Ca, Mg, S, Na, K, Fe, Cl — invariable elements at 0.05–1 % of mass.", def_cn: "Ca、Mg、S、Na、K、Fe、Cl——占质量 0.05–1% 的恒定元素。" },
    { cz: "mikrobiogenní prvky", en: "microbiogenic elements", cn: "微量生源元素", def_en: "Cu, Zn, Co, Mn, I, Mo — invariable elements present in the smallest amounts.", def_cn: "Cu、Zn、Co、Mn、I、Mo——含量最小的恒定元素。" },
    { cz: "variabilní (stopové) prvky", en: "variable / trace elements", cn: "可变元素（痕量元素）", def_en: "B, Si, V, Br, Li, As, Se, Ti, Al — significant only in some species.", def_cn: "B、Si、V、Br、Li、As、Se、Ti、Al——仅在某些物种中含量显著。" },
    { cz: "chiralita", en: "chirality", cn: "手性", def_en: "The property by which natural carbon compounds are mostly optically active, unlike their laboratory-made analogues.", def_cn: "天然碳化合物多具旋光活性的性质，与实验室制备的类似物不同。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which set does this textbook list as the MACROBIOGENIC (primary biogenic) elements?",
      q_cn: "本教材把哪一组列为常量生源元素（初级生源元素）？",
      options: [
        "H, O, C, N, P, S",
        "H, O, C, N, P",
        "C, H, O, N, Ca, Fe",
        "H, O, C, N, S, Cl"
      ],
      answer: 1,
      why_en: "Careful — this textbook puts sulfur in the OLIGOBIOGENIC group (Ca, Mg, S, Na, K, Fe, Cl), not with the macrobiogenic five. Do not answer with the usual CHNOPS mnemonic here.",
      why_cn: "注意——本教材把硫归入寡量生源元素组（Ca、Mg、S、Na、K、Fe、Cl），不在常量五元素之内。此处不要用通行的 CHNOPS 口诀作答。"
    },
    {
      type: "mcq",
      q_en: "In what chemical form does carbon characteristically occur in living matter, as opposed to inanimate nature?",
      q_cn: "与无生命自然界相比，碳在生命物质中的特征存在形式是什么？",
      options: [
        "Oxidised, as carbonates and CO₂",
        "As elemental graphite and diamond",
        "Formally reduced (hydrogenated) and energy-rich",
        "As cyanide and isocyanide complexes"
      ],
      answer: 2,
      why_en: "In inanimate nature carbon is mostly oxidised (carbonates, CO₂). Living matter is characterised by formally reduced, hydrogenated, energy-rich carbon — the energy is recoverable simply by burning it to water and CO₂.",
      why_cn: "在无生命自然界中碳多为氧化态（碳酸盐、CO₂）。生命物质的特征是形式上还原的、加氢的、富能的碳——其能量只需燃烧生成水和 CO₂ 即可回收。"
    },
    {
      type: "mcq",
      q_en: "Which two abundant crustal elements are conspicuously LOW in living matter?",
      q_cn: "哪两种在地壳中丰富的元素在生命物质中含量明显偏低？",
      options: ["Fe and Ca", "Si and Al", "Na and Cl", "K and Mg"],
      answer: 1,
      why_en: "Silicon and aluminium are among the commonest elements on Earth, yet their representation in living matter is strikingly low.",
      why_cn: "硅和铝属于地球上最常见的元素，但它们在生命物质中的占比却明显偏低。"
    },
    {
      type: "mcq",
      q_en: "Hydrogen is 10 % of the human body by MASS but 62.8 % by ATOMIC per cent. What does this illustrate?",
      q_cn: "氢占人体质量的 10%，却占 62.8 个原子百分比。这说明了什么？",
      options: [
        "That mass per cent is the more reliable measure for living matter",
        "That the trend towards light elements stands out even more sharply in atomic per cent than in mass per cent",
        "That hydrogen is a variable trace element",
        "That the human body is chemically identical to the Earth's crust"
      ],
      answer: 1,
      why_en: "This is exactly the textbook's point: living matter is conspicuous for a high concentration of light elements, and the trend emerges even more strongly when one compares atomic per cent instead of mass per cent — a light atom contributes little mass but counts fully as one atom.",
      why_cn: "这正是教材的论点：生命物质以轻元素浓度高为显著特征，而若比较原子百分比而非质量百分比，这一趋势会更加突出——轻原子贡献的质量很小，但在计数上算作完整的一个原子。"
    },
    {
      type: "short",
      q_en: "Name the criterion the textbook regards as the most exclusive manifestation of life, and define it.",
      q_cn: "说出教材认为最具排他性的生命表现判据，并给出定义。",
      accept: ["reproduc", "assimilat", "multipl", "繁殖", "同化"],
      answer_en: "Reproduction — understood generally as the ability of the living to assimilate matter from its surroundings and use it to multiply its own living matter, whether this shows as simple growth of the original individual or as the origin of further similar individuals.",
      answer_cn: "繁殖——在此泛指生物从周围环境同化物质、并用以增殖自身生命物质的能力，无论其表现为原个体的单纯生长，还是产生与之相似的其他个体。"
    },
    {
      type: "short",
      q_en: "The textbook gives two borderline cases that make 'living' hard to define. What are they?",
      q_cn: "教材给出了两个使「生命」难以界定的边界例子，是哪两个？",
      accept: ["virus", "gaia", "earth", "病毒", "地球", "盖娅"],
      answer_en: "Viruses, whose vital manifestations are very limited and whose structure approaches that of crystals; and, at the opposite end of the size scale, the Earth as a whole, which some hypotheses regard as a living 'superorganism' (Gaia).",
      answer_cn: "一是病毒，其生命表现非常有限、结构上接近晶体；二是在尺度谱另一端的整个地球，某些假说把它视为活的「超级有机体」（盖娅）。"
    }
  ],
  oral: {
    q_en: "How is living matter distinguished from non-living matter, in structure and in chemical composition?",
    q_cn: "从结构与化学组成上看，生命物质与非生命物质如何区分？",
    model_en: "The distinction is intuitively obvious but not precisely defined — viruses have very limited vital manifestations and structurally approach crystals, while some hypotheses even treat the Earth as a living superorganism. The most exclusive criterion is reproduction, understood as the ability to assimilate matter from the surroundings and use it to multiply one's own living matter. Other manifestations are movement, irritability, and purposeful action. Structurally the most striking feature is a high degree of organisation, together with regulation of internal processes and maintenance of a constant internal environment within narrow limits. Chemically, living matter contains no element absent from inanimate nature — the difference is quantitative. Living matter is conspicuous for light elements. The macrobiogenic elements are hydrogen, oxygen, carbon, nitrogen and phosphorus at about one per cent of mass and above; oligobiogenic elements are calcium, magnesium, sulfur, sodium, potassium, iron and chlorine at 0.05 to 1 per cent; microbiogenic are copper, zinc, cobalt, manganese, iodine and molybdenum. Silicon and aluminium, abundant in the crust, are strikingly scarce. The most important difference in form concerns carbon: in inanimate nature it is oxidised as carbonates and carbon dioxide, whereas living matter is characterised by formally reduced, energy-rich carbon. Nitrogen shows the same pattern — free or oxidised outside, reduced as amines inside. Natural carbon compounds are also mostly chiral and optically active. In summary, living matter is a dynamic system in constant change and constant self-renewal.",
    checklist: [
      "Named reproduction as the most exclusive criterion and defined it",
      "Listed high organisation, regulation, constant internal environment",
      "Stated that the difference in composition is quantitative, not qualitative",
      "Gave the macro- / oligo- / microbiogenic element groups correctly",
      "Contrasted reduced carbon in life with oxidised carbon outside it",
      "Mentioned chirality / optical activity of natural compounds"
    ]
  }
},

{
  id: "1-3",
  book: "cz",
  topicKey: "cells-and-biomolecules",
  chapter: 1,
  section: "1.3",
  czTitle: "Stavební kameny živé hmoty: od molekuly k buňce",
  enTitle: "Building blocks of living matter: from molecule to cell",
  cnTitle: "生命物质的建筑基块：从分子到细胞",
  pages: [11, 12, 13, 14, 15, 16],
  coverage: "partial",
  coverageNote: "pp. 11, 14 and 16 verified against scans; pp. 12, 13, 15 (Tab. 1.3 organelles, Obr. 1.4–1.6 cell diagrams) are not in the extracted page set — the organelle detail below is standard-course material, re-scan to confirm against the book.",
  cnNote: { topic: "一", title: "序论", status: "mapped" },
  mustKnow: { en: "Water is named up front as NOT a passive stage that reactions merely happen on — a deliberate correction to the intuitive picture, since the book treats water itself as an active participant in biochemistry. And the tension between the systems approach and reductionism is not resolved, only stated honestly: an organism truly exists only as a whole in interaction with its surroundings, yet biochemistry as a field is, practically, an expression of reductionism — which is exactly why any in vitro result has to be checked back against in vivo before it counts as knowledge.", cn: "水被一开头就点名**不是**反应发生的被动舞台——这是对直觉图像的一次刻意纠正，因为教材把水本身当作生物化学里主动的参与者。而『系统论』和『还原论』之间的张力并没有被解决，只是被诚实地摆出来：一个生物体真正的存在，只有作为一个整体、与周围环境互动才成立，但生物化学这门学科，实际操作上却是还原论的体现——这正是为什么任何一个体外（in vitro）的结果，都必须拿回体内（in vivo）去核对，才能算数。" },
  summary: {
    en: "Among the compounds occurring in living matter, water holds a special position as the main component of most organisms — and it is not merely a passive medium, a stage on which reactions play out. From monomers the cell builds biopolymers, and the structural hierarchy runs on up to the cell itself: prokaryotic cells with a simpler plan, fully developed eukaryotic cells in protists, algae, fungi, animals and higher plants.",
    cn: "在生命物质所含的化合物中，水占据特殊地位，是大多数生物体的主要组分——而且它不只是被动的介质、反应上演的舞台。细胞由单体建造生物大分子，结构层级一路上升到细胞本身：结构较简单的原核细胞，以及原生生物、藻类、真菌、动物和高等植物中结构完备的真核细胞。"
  },
  points: [
    { en: "Water is the main component of most organisms and is explicitly NOT just a passive environment — the textbook stresses this point when opening the section.", cn: "水是大多数生物体的主要组分，教材在本节开篇明确强调它并非仅仅是被动的环境。" },
    { en: "Prokaryotic cell (Obr. 1.4, Escherichia coli as the type example): bounded by a cytoplasmic membrane plus a cell wall.", cn: "原核细胞（图 1.4，以大肠杆菌为典型例子）：由细胞质膜加细胞壁包被。" },
    { en: "Fully developed structure is found in the eukaryotic cells of protists, algae, fungi, animals and higher plants. The textbook surveys the most important organelles of both cell types in Tab. 1.3 and Obr. 1.4, 1.5, 1.6.", cn: "结构完全发育的是原生生物、藻类、真菌、动物和高等植物的真核细胞。教材在表 1.3 与图 1.4、1.5、1.6 中综述了两类细胞最重要的细胞器。" },
    { en: "Organelles labelled in the animal-cell scheme (Obr. 1.5): smooth and rough endoplasmic reticulum, Golgi apparatus, peroxisome, mitochondria, centrioles, vacuole, chromosome, plasma membrane, lysosome, cilium/flagellum.", cn: "动物细胞示意图（图 1.5）中标注的细胞器：光面与粗面内质网、高尔基体、过氧化物酶体、线粒体、中心粒、液泡、染色体、质膜、溶酶体、纤毛（鞭毛）。" },
    { cz: "systémový přístup vs. redukcionismus", en: "Methodological tension: an organism exists only in interaction with its surroundings and as a whole, so it ought to be studied in those linkages (systems approach). But practically it is advantageous to isolate individual aspects and study them separately (reductionism).", cn: "方法论张力：生物体只在与环境的相互作用中、并作为整体而存在，因此本应在这些联系中研究它（系统方法）。但从实践考虑，把各个方面尽量与其他影响隔离、分别研究更为有利（还原论）。" },
    { en: "Biochemistry as a whole is — at least for now — rather an expression of the reductionist approach to studying life.", cn: "生物化学作为整体（至少目前）更多体现的是研究生命的还原论方法。" },
    { cz: "in vitro / in vivo / in silico", en: "Knowledge obtained from isolated reactions, often in considerably simplified model systems in a test tube (IN VITRO), must therefore be confronted with observations and experiments in the natural environment (IN VIVO) and fitted into the system of already known biochemical reactions. The study of computer models ('IN SILICO modeling') is gaining importance.", cn: "因此，由分离反应（常在试管中大为简化的模型系统里，即 in vitro）获得的知识，必须与自然环境中的观察和实验（in vivo）相对照，并纳入已知生化反应的体系之中。计算机模型研究（「in silico 建模」）的重要性正在上升。" }
  ],
  terms: [
    { cz: "systémový přístup", en: "systems approach", cn: "系统方法", def_en: "Studying the organism in its linkages, as a whole existing only in interaction with its surroundings.", def_cn: "在生物体的各种联系中、把它作为只在与环境相互作用中存在的整体来研究。" },
    { cz: "redukcionismus", en: "reductionism", cn: "还原论", def_en: "Isolating individual aspects and functions from other influences and studying them separately; the approach biochemistry mostly expresses.", def_cn: "把各个方面与功能同其他影响隔离、分别加以研究；生物化学主要体现的方法。" },
    { cz: "in vitro", en: "in vitro", cn: "体外", def_en: "In a test tube, in considerably simplified model systems.", def_cn: "在试管中，在大为简化的模型系统内。" },
    { cz: "in vivo", en: "in vivo", cn: "体内", def_en: "In the natural environment of the living organism.", def_cn: "在活体的自然环境中。" },
    { cz: "in silico", en: "in silico modeling", cn: "计算机模拟", def_en: "Study of computer models, of growing importance in contemporary biochemistry.", def_cn: "计算机模型研究，在当代生物化学中重要性日增。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which approach does the textbook say biochemistry as a whole mostly expresses?",
      q_cn: "教材说生物化学作为整体主要体现的是哪种方法？",
      options: ["The systems approach", "Reductionism", "Pure in vivo observation", "In silico modeling"],
      answer: 1,
      why_en: "Biochemistry is (at least for now) rather an expression of the reductionist approach — isolating aspects and studying them separately — which is precisely why in vitro results must be confronted with in vivo observation.",
      why_cn: "生物化学（至少目前）更多体现还原论方法——把各方面隔离、分别研究——这正是体外结果必须与体内观察相对照的原因。"
    },
    {
      type: "short",
      q_en: "Why must in vitro results be confronted with in vivo observation?",
      q_cn: "为什么体外结果必须与体内观察相对照？",
      accept: ["simplif", "isolat", "whole", "interaction", "简化", "整体", "相互作用"],
      answer_en: "Because an organism exists only in interaction with its surroundings and as a whole, whereas in vitro work uses isolated reactions in considerably simplified model systems. Knowledge from such systems has to be checked against the natural environment and fitted into the system of already known biochemical reactions.",
      answer_cn: "因为生物体只在与环境的相互作用中、并作为整体而存在，而体外工作使用的是大为简化的模型系统中的分离反应。来自这类系统的知识必须与自然环境相核对，并纳入已知生化反应的体系。"
    },
    {
      type: "short",
      q_en: "What does the textbook stress about water at the opening of this section?",
      q_cn: "教材在本节开篇强调了关于水的什么要点？",
      accept: ["not", "passive", "main component", "并非", "被动", "主要组分"],
      answer_en: "That water holds a special position as the main component of most organisms, and that it is not merely a passive medium — not just a stage on which the reactions take place.",
      answer_cn: "水作为大多数生物体的主要组分占据特殊地位，而且它不只是被动的介质——不只是反应上演的舞台。"
    }
  ],
  oral: {
    q_en: "Explain the methodological problem of studying a living organism, and the roles of in vitro, in vivo and in silico work.",
    q_cn: "解释研究活体生物的方法论问题，以及体外、体内和计算机模拟工作各自的作用。",
    model_en: "The researcher has to cope with the fact that an organism exists only in interaction with its surroundings and only as a whole, so strictly it ought to be studied in those linkages — the systems approach. For practical reasons, however, it is advantageous to isolate the individual aspects of its existence and its life functions from other influences and study them separately, which is reductionism. Biochemistry as a whole is, at least for now, rather an expression of the reductionist approach. The consequence is methodological: knowledge obtained by studying isolated reactions, often in considerably simplified model systems in a test tube — that is, in vitro — must be confronted with the results of observation and experiment in the natural environment, in vivo, and must be fitted into the system of already known biochemical reactions. In contemporary biochemistry the study of computer models, in silico modeling, is also gaining importance.",
    checklist: [
      "Stated that the organism exists only as a whole and in interaction — systems approach",
      "Named reductionism and why it is practically advantageous",
      "Said biochemistry mostly expresses the reductionist approach",
      "Defined in vitro as simplified model systems in a test tube",
      "Explained that in vitro must be confronted with in vivo",
      "Mentioned in silico modeling as growing in importance"
    ]
  }
},

{
  id: "1-4",
  book: "cz",
  topicKey: "bioenergetics-basics",
  chapter: 1,
  section: "1.4",
  czTitle: "Výživa a metabolismus",
  enTitle: "Nutrition and metabolism",
  cnTitle: "营养与代谢",
  pages: [16, 17],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans, including Tab. 1.4.",
  cnNote: { topic: "一", title: "序论", status: "mapped" },
  mustKnow: { en: "The same molecule can be a product from one direction and a substrate from the other — anabolism's output is catabolism's input — which is why the substrate/intermediate/waste categories are explicitly relative, not fixed labels on a compound. And the four-way trophic grid (carbon source times energy source) is not a list to memorise cell by cell: it is two independent yes/no questions — where does the carbon come from, where does the energy come from — and every organism's classification falls out of answering those two questions separately.", cn: "同一个分子，从一个方向看是产物，从另一个方向看就是底物——合成代谢的产出正是分解代谢的输入——这正是为什么『底物／中间产物／废物』这套分类被明确说成是相对的，不是贴死在某个化合物上的标签。而『碳源×能源』的四格分类表，不是要你一格一格死记的清单：它其实只是两个独立的是非问题——碳从哪来、能量从哪来——每种生物的分类，都是分别回答这两个问题之后自然得出的结果。" },
  summary: {
    en: "A characteristic feature of life is the use of externally acquired energy to build one's own organism. Compounds obtained by the organism are either converted into its constituents or used as an energy source. Even in a very simple organism such as Escherichia coli this requires the coordinated use of more than a thousand chemical reactions; their sum is called metabolism.",
    cn: "生命的特征之一是利用从外界获取的能量来构建自身机体。生物体获得的化合物或被转化为自身的组成成分，或被用作能源。即使在大肠杆菌这样非常简单的生物体中，这也需要一千多个化学反应的协调运作；它们的总和称为代谢（物质转化）。"
  },
  points: [
    { cz: "substráty / intermediáty / disimiláty", en: "By position in metabolism one distinguishes SUBSTRATES or nutrients (also assimilates); INTERMEDIATES (which may serve as precursors of biological macromolecules, for storing energy in a chemically usable form, or as means of converting one type of biologically significant compound into another); the structural substances proper; and WASTE PRODUCTS (dissimilates).", cn: "按化合物在代谢中的地位可区分：底物或养分（也称同化物）；中间产物（可作为生物大分子的前体、以化学上可利用的形式储能，或作为把一类生物学重要化合物转变为另一类的手段）；本身的建筑物质；以及废物（异化物）。" },
    { en: "This division is to a certain degree relative — the same substance may be a product from the standpoint of synthetic reactions (anabolism) and a substrate from the standpoint of degradative processes (catabolism).", cn: "这种划分在一定程度上是相对的——同一种物质从合成反应（合成代谢）的角度看是产物，从分解过程（分解代谢）的角度看则是底物。" },
    { cz: "makroergické sloučeniny", en: "Basic substrates are the inorganic substances (water, carbon dioxide, ammonia, salts) — generally substances low in chemically usable energy. Of special importance are MACROERGIC compounds, from which biochemical processes can relatively easily obtain a considerable quantity of energy, and which serve organisms as a kind of universal 'energy currency' for transferring and storing energy.", cn: "基本底物是无机物质（水、二氧化碳、氨、盐类）——总体上是化学可利用能量低的物质。特别重要的是高能（大能）化合物，通过生化过程可以相对容易地从中获得大量能量，它们充当生物体转移和储存能量的某种通用「能量货币」。" },
    { en: "Most biochemical reactions proceed only in the presence of catalysts; these are as a rule enzymes, i.e. specialised proteins.", cn: "多数生化反应只有在催化剂存在时才进行；这些催化剂通常是酶，即特化的蛋白质。" },
    { cz: "autotrofní (litotrofní) / heterotrofní (organotrofní)", en: "By CARBON SOURCE: AUTOTROPHIC (lithotrophic) organisms are producers of compounds containing hydrogenated carbon — they use carbon dioxide as their carbon source. HETEROTROPHIC (organotrophic) organisms are consumers of the organic compounds created by autotrophs.", cn: "按碳源划分：自养（无机营养）生物是含加氢碳化合物的生产者——以二氧化碳为碳源。异养（有机营养）生物是自养生物所创造的有机化合物的消费者。" },
    { cz: "fototrofní / chemotrofní", en: "By ENERGY SOURCE for assimilation: PHOTOTROPHS use light radiation in the process of photosynthesis; CHEMOTROPHS obtain energy by oxidation of substrates.", cn: "按同化作用的能源划分：光养生物在光合作用过程中利用光辐射；化养生物通过底物氧化获得能量。" },
    { en: "Tab. 1.4 — the four combinations: PHOTOLITHOTROPHIC (green and purple sulfur bacteria, algae, cyanobacteria, green plants); CHEMOLITHOTROPHIC, on inorganic substrates (sulfur, iron and nitrifying bacteria); PHOTOORGANOTROPHIC (purple non-sulfur bacteria, autotrophic protists such as Euglena); CHEMOORGANOTROPHIC, on organic substrates (bacteria, fungi, protists, animals).", cn: "表 1.4——四种组合：光能无机营养型（绿硫细菌与紫硫细菌、藻类、蓝细菌、绿色植物）；化能无机营养型，利用无机底物（硫细菌、铁细菌、硝化细菌）；光能有机营养型（紫色非硫细菌、自养原生动物如裸藻）；化能有机营养型，利用有机底物（细菌、真菌、原生动物、动物）。" },
    { cz: "vztah ke kyslíku", en: "Relation to oxygen: STRICT (obligate) ANAEROBES can grow and multiply only in the absence of oxygen — for some of them oxygen is a violent poison even in traces; most belong to primitive prokaryotic microorganisms and some are dangerous pathogens. FACULTATIVE ANAEROBES (e.g. yeasts) can use alternative metabolic schemes depending on external conditions. Most organisms, including humans, are OBLIGATE AEROBES and absolutely require oxygen.", cn: "与氧的关系：严格（专性）厌氧生物只能在无氧条件下生长繁殖——对其中一些来说，即使痕量氧也是剧毒；多数属于原始的原核微生物，有些是危险的病原体。兼性厌氧生物（如酵母）可根据外界条件采用替代的代谢方案。多数生物（包括人类）是专性需氧生物，其生命绝对需要氧。" }
  ],
  terms: [
    { cz: "metabolismus (přeměna látková)", en: "metabolism", cn: "代谢（物质转化）", def_en: "The sum of the coordinated chemical reactions by which an organism converts acquired compounds into its own constituents or uses them as an energy source; over a thousand reactions even in E. coli.", def_cn: "生物体把获得的化合物转变为自身组分或用作能源的、彼此协调的化学反应的总和；即使在大肠杆菌中也超过一千个反应。" },
    { cz: "anabolismus", en: "anabolism", cn: "合成代谢", def_en: "The synthetic reactions of metabolism.", def_cn: "代谢中的合成反应。" },
    { cz: "katabolismus", en: "catabolism", cn: "分解代谢", def_en: "The degradative processes of metabolism.", def_cn: "代谢中的分解过程。" },
    { cz: "makroergické sloučeniny", en: "macroergic (high-energy) compounds", cn: "高能化合物", def_en: "Compounds from which considerable energy is relatively easily obtained biochemically; the universal 'energy currency' for transfer and storage of energy.", def_cn: "通过生化过程可相对容易地获得大量能量的化合物；能量转移与储存的通用「能量货币」。" },
    { cz: "autotrofní (litotrofní)", en: "autotrophic (lithotrophic)", cn: "自养（无机营养）", def_en: "Producers of hydrogenated-carbon compounds, using CO₂ as carbon source.", def_cn: "以 CO₂ 为碳源、生产含加氢碳化合物的生物。" },
    { cz: "heterotrofní (organotrofní)", en: "heterotrophic (organotrophic)", cn: "异养（有机营养）", def_en: "Consumers of the organic compounds created by autotrophs.", def_cn: "自养生物所创造的有机化合物的消费者。" },
    { cz: "fototrofní", en: "phototrophic", cn: "光养", def_en: "Uses light radiation in photosynthesis as its energy source.", def_cn: "以光合作用中的光辐射为能源。" },
    { cz: "chemotrofní", en: "chemotrophic", cn: "化养", def_en: "Obtains energy by oxidation of substrates.", def_cn: "通过底物氧化获得能量。" },
    { cz: "striktní anaerob", en: "strict (obligate) anaerobe", cn: "专性厌氧生物", def_en: "Grows and multiplies only without oxygen; for some, traces of oxygen are a violent poison.", def_cn: "只能在无氧条件下生长繁殖；对某些种类而言痕量氧即为剧毒。" },
    { cz: "fakultativní anaerob", en: "facultative anaerobe", cn: "兼性厌氧生物", def_en: "Can use alternative metabolic schemes depending on external conditions; e.g. yeasts.", def_cn: "可依外界条件采用替代代谢方案的生物；如酵母。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "An organism that uses CO₂ as its carbon source and light as its energy source is classified as:",
      q_cn: "以 CO₂ 为碳源、以光为能源的生物属于：",
      options: ["Chemoorganotrophic", "Photoorganotrophic", "Photolithotrophic", "Chemolithotrophic"],
      answer: 2,
      why_en: "LITHO- denotes the CO₂ carbon source, PHOTO- the light energy source. Examples given: green and purple sulfur bacteria, algae, cyanobacteria, green plants.",
      why_cn: "LITHO- 表示碳源为 CO₂，PHOTO- 表示能源为光。教材所举例子：绿硫细菌与紫硫细菌、藻类、蓝细菌、绿色植物。"
    },
    {
      type: "mcq",
      q_en: "Sulfur, iron and nitrifying bacteria are examples of which nutritional type?",
      q_cn: "硫细菌、铁细菌和硝化细菌属于哪种营养类型？",
      options: ["Chemolithotrophic", "Photolithotrophic", "Chemoorganotrophic", "Photoorganotrophic"],
      answer: 0,
      why_en: "They obtain energy by oxidising inorganic substrates (CHEMO-) and use CO₂ as carbon source (LITHO-).",
      why_cn: "它们通过氧化无机底物获得能量（CHEMO-），并以 CO₂ 为碳源（LITHO-）。"
    },
    {
      type: "mcq",
      q_en: "Why is the division of compounds into substrates, intermediates and waste products described as relative?",
      q_cn: "为什么把化合物划分为底物、中间产物和废物被描述为相对的？",
      options: [
        "Because analytical methods cannot distinguish them",
        "Because the same substance may be a product in anabolism and a substrate in catabolism",
        "Because they interconvert spontaneously without enzymes",
        "Because only inorganic compounds are true substrates"
      ],
      answer: 1,
      why_en: "The textbook says the division is relative to a certain degree: from the standpoint of synthetic reactions (anabolism) a substance is a product, while from the standpoint of degradative processes (catabolism) the same substance is a substrate.",
      why_cn: "教材说这一划分在一定程度上是相对的：从合成反应（合成代谢）角度看某物质是产物，而从分解过程（分解代谢）角度看同一物质是底物。"
    },
    {
      type: "short",
      q_en: "Distinguish strict anaerobes, facultative anaerobes and obligate aerobes, with an example of each.",
      q_cn: "区分专性厌氧、兼性厌氧和专性需氧生物，各举一例。",
      accept: ["anaerob", "yeast", "aerob", "oxygen", "厌氧", "酵母", "需氧"],
      answer_en: "Strict (obligate) anaerobes grow and multiply only in the absence of oxygen — for some, traces of oxygen are a violent poison; most are primitive prokaryotic microorganisms and some are dangerous pathogens. Facultative anaerobes, for example yeasts, can use alternative metabolic schemes according to external conditions. Obligate aerobes, which includes most organisms and humans, absolutely require oxygen for life.",
      answer_cn: "严格（专性）厌氧生物只能在无氧条件下生长繁殖——对某些种类痕量氧即为剧毒；多数为原始的原核微生物，有些是危险病原体。兼性厌氧生物（例如酵母）可依外界条件采用替代的代谢方案。专性需氧生物（包括多数生物和人类）的生命绝对需要氧。"
    }
  ],
  oral: {
    q_en: "Classify organisms according to their mode of nutrition and their relation to oxygen.",
    q_cn: "按营养方式和与氧的关系对生物进行分类。",
    model_en: "Organisms are classified along two independent axes. The first is the source of carbon: autotrophic, also called lithotrophic, organisms are producers of compounds containing hydrogenated carbon and use carbon dioxide as their carbon source, whereas heterotrophic, or organotrophic, organisms are consumers of the organic compounds created by the autotrophs. The second axis is the source of energy for assimilation: phototrophs use light radiation in photosynthesis, and chemotrophs obtain energy by oxidation of substrates. Combining these gives four groups. Photolithotrophic organisms include green and purple sulfur bacteria, algae, cyanobacteria and green plants. Chemolithotrophic organisms, living on inorganic substrates, include the sulfur, iron and nitrifying bacteria. Photoorganotrophic organisms include the purple non-sulfur bacteria and autotrophic protists such as Euglena. Chemoorganotrophic organisms, living on organic substrates, include bacteria, fungi, protists and animals. A further important factor is the relation to oxygen. Strict or obligate anaerobes can grow only in the absence of oxygen — for some, oxygen is a violent poison even in traces; most are primitive prokaryotes and some are dangerous pathogens. Facultative anaerobes, such as yeasts, can switch between alternative metabolic schemes according to external conditions. Most organisms, humans included, are obligate aerobes and need oxygen absolutely.",
    checklist: [
      "Separated the carbon-source axis from the energy-source axis",
      "Defined autotroph/lithotroph and heterotroph/organotroph",
      "Defined phototroph and chemotroph",
      "Gave all four combinations with at least one example each",
      "Covered strict anaerobe, facultative anaerobe, obligate aerobe",
      "Gave yeasts as the facultative anaerobe example"
    ]
  }
},

{
  id: "1-5",
  book: "cz",
  topicKey: "bioenergetics-basics",
  chapter: 1,
  section: "1.5",
  czTitle: "Energie a život",
  enTitle: "Energy and life",
  cnTitle: "能量与生命",
  pages: [17, 18],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans.",
  cnNote: { topic: "一", title: "序论", status: "mapped" },
  lehNotes: [
    { kind: "cz-stronger", node: "L-1-3-1",
      en: "Do not read the Lehninger formula as a correction of this one. This node gives G = U + pV - TS, the fuller statement, with enthalpy H = U + pV as a derived quantity; Lehninger 1.3, where Gibbs is credited with showing that “the free energy, G, of any closed system can be defined in terms of three quantities” , gives only G = H - TS (A p.21) and never introduces chemical potential, activity, the principle of local equilibrium or the primed pH-7 standard state, all of which are here. On the formal thermodynamics the Czech book is the better source. What Lehninger adds is numbers, not theory.",
      cn: "不要把 Lehninger 的公式当作对这里的更正。本节点给出的是 G = U + pV − TS 这一更完整的表述，并把焓 H = U + pV 作为导出量；Lehninger 1.3 只给出 G = H − TS（A 第21页），且从未引入化学势、活度、局域平衡原理或加撇的 pH 7 标准态，而这些本节点都有。在形式化热力学上，捷克教材是更强的来源。Lehninger 补充的是数字，不是理论。" },
  ],
  mustKnow: { en: "Gibbs energy tells you whether a reaction CAN happen, never how fast it happens — that is a separate question the mechanism alone decides, and the two are easy to conflate. And coupling works for exactly the same reason ΔG is a state quantity in the first place: since only the start and end points matter, not the path, an unfavourable reaction and a favourable one can be wired together as a single overall process, and only their SUM has to come out negative. Living matter is not at equilibrium and is not supposed to be — it sits in a steady state that looks superficially similar but is only reachable by an open system continuously exchanging matter with its surroundings; true equilibrium, for a cell, is death.", cn: "吉布斯能告诉你一个反应**能不能**发生，从来不告诉你它发生得**有多快**——后者是一个独立的问题，完全由具体机制决定，这两者很容易被混为一谈。而『偶联』之所以行得通，正是因为 ΔG 本身是一个状态函数：既然只有起点和终点重要、路径无关，一个不利的反应和一个有利的反应就可以被接成同一个总过程，只需要两者的**总和**是负的就行。生命物质不处在平衡态，也不应该处在平衡态——它处在一种表面上很像平衡、但只有开放系统靠持续和外界交换物质才能维持住的**稳态**；对一个细胞来说，真正的平衡态就是死亡。" },
  summary: {
    en: "The general laws of energy conversion are the subject of thermodynamics. The behaviour of thermodynamic systems is described by state quantities — properties depending only on the overall state of the system, not on the path by which it reached that state. For biochemistry the most convenient state quantity is the Gibbs energy, G = U + pV − TS.",
    cn: "能量转变的普遍规律是热力学的研究对象。热力学系统的行为用状态量描述——状态量只取决于系统的总体状态，而与它达到该状态所经由的具体路径无关。对生物化学而言，最方便的状态量是吉布斯能 G = U + pV − TS。"
  },
  points: [
    { cz: "první zákon", en: "The FIRST LAW of thermodynamics can be summarised as: the total energy of a system and its surroundings is constant. Equivalently, the internal energy of the system (U) is a state quantity.", cn: "热力学第一定律可概括为：系统及其环境的总能量是恒定的。等价的表述是：系统的内能 (U) 是状态量。" },
    { cz: "druhý zákon", en: "The SECOND LAW provides the criterion for distinguishing spontaneous processes: they are those in which the total entropy of the system and its surroundings grows (equivalently, the total entropy S of an isolated system).", cn: "第二定律给出区分自发过程的判据：自发过程是系统及其环境的总熵增加的过程（等价地说，是孤立系统总熵 S 增加的过程）。" },
    { cz: "Gibbsova energie", en: "G = U + pV − TS. The first two terms define the enthalpy H = U + pV. In most biochemical processes volume work can be neglected, so H practically coincides with the internal energy.", cn: "G = U + pV − TS。前两项定义焓 H = U + pV。在多数生化过程中体积功可以忽略，因此 H 实际上与内能重合。" },
    { en: "At constant pressure and temperature — practically the conditions of biochemical reactions — in a closed system (no exchange of matter with the surroundings), spontaneous processes are those in which G decreases, ΔG < 0.", cn: "在恒压恒温条件下——这实际上就是生化反应的条件——在封闭系统（与环境无物质交换）中，自发过程是 G 下降的过程，即 ΔG < 0。" },
    { en: "Because G is a state quantity and its change does not depend on how the process is carried out, knowing the difference in Gibbs energy between starting substances and products lets us decide whether the reaction can proceed spontaneously.", cn: "由于 G 是状态量、其变化与过程的实施方式无关，知道起始物与产物之间的吉布斯能之差，就能判断所研究的反应（过程）能否自发进行。" },
    { en: "Gibbs energy is a thermodynamic potential, analogous to potential energy in mechanics — and just as in mechanics it gives NO information about the RATE of the process, for which the concrete mechanism is decisive.", cn: "吉布斯能是所谓热力学势，类比于力学中的势能；同样地，它不提供关于过程速率的任何信息，速率取决于过程实现的具体机制。" },
    { cz: "spřažení reakcí", en: "COUPLING OF REACTIONS is an important consequence of the fact that possibility depends only on initial and final state: an energetically unfavourable (ENDERGONIC) reaction with ΔG₁ > 0 can proceed if an EXERGONIC reaction with ΔG₂ < 0 runs alongside it in the system, provided the total change ΔG = ΔG₁ + ΔG₂ < 0.", cn: "反应偶联是「过程可能性只取决于始态与终态」这一事实的重要推论：能量上不利的（吸能）反应 ΔG₁ > 0 可以进行，只要系统中同时进行放能反应 ΔG₂ < 0，并且总变化 ΔG = ΔG₁ + ΔG₂ < 0。" },
    { en: "Energy can thus be 'made in advance and stored' by a suitable reaction, and the resulting energy-rich compound — or more generally an energy-rich situation, e.g. a non-equilibrium distribution of certain ions between two compartments — used to realise energetically unfavourable processes.", cn: "因此可以通过适当反应把能量「预先制造并储存起来」，再用由此产生的富能化合物——或更一般地说富能状态，例如某些离子在两个区室间的非平衡分布——去实现能量上不利的过程。" },
    { cz: "chemický potenciál", en: "For multi-component systems the CHEMICAL POTENTIAL is introduced — the partial molar Gibbs energy characteristic of the individual components. In ideally behaving (very dilute) solutions it is a linear function of concentration; in real solutions a linear function of the thermodynamic concentration, i.e. ACTIVITY, which is defined precisely so that this holds.", cn: "对于多组分体系引入化学势，即各组分特有的偏摩尔吉布斯能。在理想行为（极稀）溶液中它是浓度的线性函数；在实际溶液中则是热力学浓度即活度的线性函数，活度的定义正是为了使上述关系成立。" },
    { cz: "ΔG°′ a K", en: "Since total ΔG = 0 at equilibrium, one obtains ΔG° = −RT ln K, where K is the equilibrium constant. The superscript zero indicates values referred to the STANDARD STATE.", cn: "由于平衡时总 ΔG = 0，可得 ΔG° = −RT ln K，其中 K 为反应的平衡常数。上标零表示这些数值是相对于标准态而言的。" },
    { en: "In general thermodynamics the standard state has unit activities of all components, but for biochemistry this is unsuitable given physiological hydrogen-ion activities. Biochemistry therefore chooses a standard state where the hydrogen-ion activity corresponds to pH 7 and the activities of other components are unity; it is customary to mark this with a prime: ΔG°′, K′.", cn: "在一般热力学中，标准态取所有组分活度为 1；但考虑到生理条件下的氢离子活度，这一选择对生物化学并不合适。因此生物化学选取氢离子活度对应 pH 7、其余组分活度为 1 的状态作为标准态；习惯上在符号右上角加一撇以示区别：ΔG°′、K′。" },
    { cz: "princip lokální rovnováhy", en: "A fundamental limitation of classical thermodynamics is that its relations hold strictly only for isolated systems at equilibrium — such ideal systems exist neither in living nor in inanimate nature. Applicability to real systems follows from the PRINCIPLE OF LOCAL EQUILIBRIUM, which under certain assumptions allows a non-equilibrium (closed or open) system to be divided into subsystems that can be regarded with sufficient accuracy as equilibrium ones. This is why classical relations can describe individual chemical reactions or phenomena at a biological membrane.", cn: "经典热力学的根本局限在于：严格说来其关系式只对处于平衡的孤立系统成立——这样的理想系统在生命与非生命自然界中都不存在。之所以能用于实际系统，源于所谓局域平衡原理：在一定假设下，可把非平衡的（封闭或开放）热力学系统划分为若干子系统，这些子系统能以足够精度被视为平衡系统。这正是经典热力学关系可用于描述个别化学反应或生物膜上现象的原因。" },
    { cz: "stacionární stav", en: "Living matter is mostly in a STATIONARY (steady) STATE, which outwardly resembles equilibrium in that the system's parameters are independent of time; the equilibrium state is a special case of the stationary state. Unlike equilibrium, a stationary state is achievable also in OPEN systems, i.e. with exchange of matter with the surroundings. Time-independence holds for living systems only within a limited time interval — their overall development is non-stationary (ageing, death).", cn: "生命物质多处于所谓稳态，它在外观上类似平衡（系统参数不随时间变化）；平衡态是稳态的特例。与平衡不同，稳态在开放系统中也可实现，即允许与环境交换物质。必须意识到，对活系统而言时间无关性只在有限时间区间内成立，其总体发展是非稳态的（衰老、死亡）。" },
    { cz: "homeostáze", en: "More precisely, living matter is a DYNAMICALLY STATIONARY system in which the actual values of state quantities fluctuate within a certain range around the stationary values; keeping these fluctuations within permissible limits — HOMEOSTASIS, the principle of constancy of the internal environment — is an important condition of the system's stationary behaviour, that is, of its life.", cn: "更确切地说，可把生命物质表征为动态稳定系统，其中状态量的实际值在稳态值附近某一范围内波动；把这些波动维持在允许限度之内——即内稳态、内环境恒定原理——是系统稳态行为、也就是其生命的重要条件。" },
    { cz: "nerovnovážná termodynamika, synergetika", en: "For describing the organism as a whole, classical thermodynamics no longer suffices. This does not mean the laws of physics fail for living matter, only that relations describing simple idealised systems cannot fully describe it. Contemporary physics seeks new conceptual apparatus — NON-EQUILIBRIUM THERMODYNAMICS, and more generally SYNERGETICS for processes with abrupt change of quality — requiring special mathematics such as bifurcation theory, catastrophe theory, and abstract spaces of non-integer dimension (fractals).", cn: "要描述作为整体的生物体，经典热力学的手段已不敷使用。这并不意味着物理定律对生命物质不成立，而是不能用描述简单理想化系统的关系式来完整描述其行为。当代物理学正在寻求新的概念与理论工具——非平衡热力学，以及更普遍地针对发生质的突变过程的协同学——这需要发展专门的数学工具，例如分岔理论、突变理论，以及利用非整数维抽象空间（分形）。" }
  ],
  terms: [
    { cz: "stavová veličina", en: "state quantity", cn: "状态量", def_en: "A property depending only on the overall state of the system, not on the path taken to reach it.", def_cn: "只取决于系统总体状态、而与达到该状态的路径无关的性质。" },
    { cz: "Gibbsova energie", en: "Gibbs energy", cn: "吉布斯能", def_en: "G = U + pV − TS; at constant p and T in a closed system, spontaneous processes are those with ΔG < 0.", def_cn: "G = U + pV − TS；在封闭系统恒压恒温下，自发过程即 ΔG < 0 的过程。" },
    { cz: "entalpie", en: "enthalpy", cn: "焓", def_en: "H = U + pV; in most biochemical processes volume work is negligible so H practically coincides with U.", def_cn: "H = U + pV；多数生化过程中体积功可忽略，故 H 实际与 U 重合。" },
    { cz: "endergonická reakce", en: "endergonic reaction", cn: "吸能反应", def_en: "A reaction with ΔG > 0, energetically unfavourable on its own.", def_cn: "ΔG > 0 的反应，单独进行时在能量上不利。" },
    { cz: "exergonická reakce", en: "exergonic reaction", cn: "放能反应", def_en: "A reaction with ΔG < 0.", def_cn: "ΔG < 0 的反应。" },
    { cz: "spřažení reakcí", en: "coupling of reactions", cn: "反应偶联", def_en: "Running an endergonic reaction alongside an exergonic one so that the total ΔG < 0.", def_cn: "使吸能反应与放能反应并行进行，令总 ΔG < 0。" },
    { cz: "chemický potenciál", en: "chemical potential", cn: "化学势", def_en: "The partial molar Gibbs energy characteristic of an individual component of a multi-component system.", def_cn: "多组分体系中各组分特有的偏摩尔吉布斯能。" },
    { cz: "aktivita", en: "activity", cn: "活度", def_en: "Thermodynamic concentration, defined so that the chemical potential remains a linear function of it in real solutions.", def_cn: "热力学浓度，其定义使化学势在实际溶液中仍为其线性函数。" },
    { cz: "princip lokální rovnováhy", en: "principle of local equilibrium", cn: "局域平衡原理", def_en: "Allows a non-equilibrium system to be divided into subsystems treatable as equilibrium ones, justifying classical thermodynamics for individual reactions or membrane phenomena.", def_cn: "允许把非平衡系统划分为可当作平衡处理的子系统，从而为经典热力学用于个别反应或膜现象提供依据。" },
    { cz: "stacionární stav", en: "stationary (steady) state", cn: "稳态", def_en: "Parameters independent of time; achievable in open systems, unlike equilibrium, of which equilibrium is a special case.", def_cn: "参数不随时间变化；与平衡不同，稳态在开放系统中也可实现，平衡态是其特例。" },
    { cz: "homeostáze", en: "homeostasis", cn: "内稳态", def_en: "Keeping the fluctuations of state quantities within permissible limits around stationary values; a condition of the system's life.", def_cn: "把状态量围绕稳态值的波动维持在允许限度内；系统得以存活的条件。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does biochemistry use ΔG°′ with a prime rather than the ordinary ΔG°?",
      q_cn: "为什么生物化学使用带撇的 ΔG°′ 而不是普通的 ΔG°？",
      options: [
        "Because biochemical reactions occur at constant volume",
        "Because the standard state is redefined so that hydrogen-ion activity corresponds to pH 7",
        "Because enthalpy replaces internal energy",
        "Because activities are replaced by concentrations"
      ],
      answer: 1,
      why_en: "The general thermodynamic standard state takes unit activity for ALL components, including H⁺, which is unsuitable given physiological hydrogen-ion activities. Biochemistry therefore fixes H⁺ activity at pH 7, other components at unit activity, and marks the quantities with a prime.",
      why_cn: "一般热力学标准态取所有组分（包括 H⁺）活度为 1，考虑到生理条件下的氢离子活度，这并不合适。因此生物化学固定 H⁺ 活度对应 pH 7，其余组分活度为 1，并在符号上加一撇。"
    },
    {
      type: "mcq",
      q_en: "What does knowledge of ΔG tell you about a reaction?",
      q_cn: "知道 ΔG 能告诉你关于一个反应的什么信息？",
      options: [
        "Both whether it can proceed spontaneously and how fast",
        "Only how fast it will proceed",
        "Only whether it can proceed spontaneously, not its rate",
        "Only its equilibrium constant, not its direction"
      ],
      answer: 2,
      why_en: "Gibbs energy is a thermodynamic potential, analogous to potential energy in mechanics: it decides possibility, but gives no information about rate, for which the concrete mechanism is decisive. This is exactly why catalysis matters.",
      why_cn: "吉布斯能是热力学势，类比于力学中的势能：它决定可能性，但不提供关于速率的信息，速率取决于具体机制。这正是催化之所以重要的原因。"
    },
    {
      type: "mcq",
      q_en: "A stationary state differs from an equilibrium state in that:",
      q_cn: "稳态与平衡态的区别在于：",
      options: [
        "Its parameters change continuously with time",
        "It can be realised also in open systems, with exchange of matter",
        "It requires an isolated system",
        "It has zero entropy production by definition"
      ],
      answer: 1,
      why_en: "Both have time-independent parameters, and equilibrium is a special case of the stationary state. The distinguishing feature is that a stationary state is achievable in OPEN systems, i.e. with exchange of matter with the surroundings.",
      why_cn: "两者的参数都不随时间变化，平衡态是稳态的特例。区别在于稳态可在开放系统中实现，即允许与环境交换物质。"
    },
    {
      type: "short",
      q_en: "State the principle of coupling of reactions and explain what makes it thermodynamically legitimate.",
      q_cn: "陈述反应偶联原理，并解释它在热力学上何以成立。",
      accept: ["endergonic", "exergonic", "total", "sum", "state", "吸能", "放能", "总"],
      answer_en: "An energetically unfavourable, endergonic reaction with ΔG₁ > 0 can proceed if an exergonic reaction with ΔG₂ < 0 runs alongside it in the system, provided the total change ΔG = ΔG₁ + ΔG₂ < 0. It is legitimate because G is a state quantity, so the possibility or impossibility of a process depends only on the initial and final states, not on the route. Energy can therefore be made in advance and stored — as an energy-rich compound, or more generally as an energy-rich situation such as a non-equilibrium distribution of ions between two compartments.",
      answer_cn: "能量上不利的吸能反应（ΔG₁ > 0）可以进行，只要系统中同时进行放能反应（ΔG₂ < 0），且总变化 ΔG = ΔG₁ + ΔG₂ < 0。其成立的依据是 G 为状态量，因此过程的可能与否只取决于始态与终态，而与途径无关。所以能量可以预先制造并储存——以富能化合物形式，或更一般地以富能状态形式，例如离子在两个区室间的非平衡分布。"
    },
    {
      type: "short",
      q_en: "What is the principle of local equilibrium and why does biochemistry need it?",
      q_cn: "什么是局域平衡原理？生物化学为什么需要它？",
      accept: ["isolated", "equilibrium", "subsystem", "divide", "孤立", "平衡", "子系统"],
      answer_en: "Classical thermodynamic relations hold strictly only for isolated systems at equilibrium, and such ideal systems exist neither in living nor in inanimate nature. The principle of local equilibrium allows a non-equilibrium closed or open system to be divided, under certain assumptions, into subsystems that can be regarded with sufficient accuracy as being at equilibrium. That is what makes it legitimate to use classical relations to describe individual chemical reactions or phenomena at a biological membrane.",
      answer_cn: "经典热力学关系式严格说来只对处于平衡的孤立系统成立，而这种理想系统在生命与非生命自然界中都不存在。局域平衡原理允许在一定假设下，把非平衡的封闭或开放系统划分为能以足够精度视为平衡的子系统。正因如此，才可以用经典关系式描述个别化学反应或生物膜上的现象。"
    }
  ],
  oral: {
    q_en: "Explain how thermodynamics applies to living systems: Gibbs energy, coupling, the standard state in biochemistry, and the stationary state.",
    q_cn: "解释热力学如何应用于活系统：吉布斯能、反应偶联、生物化学中的标准态，以及稳态。",
    model_en: "Thermodynamic systems are described by state quantities, which depend only on the overall state and not on the path. The first law states that the total energy of a system and its surroundings is constant, equivalently that internal energy is a state quantity. The second law gives the criterion of spontaneity: total entropy grows. For biochemistry the most convenient state quantity is the Gibbs energy, G equals U plus pV minus TS, where the first two terms are the enthalpy; since volume work is usually negligible, enthalpy practically coincides with internal energy. At constant pressure and temperature in a closed system, spontaneous processes are those where G decreases. Because G is a state quantity, knowing the difference between reactants and products decides whether a reaction can proceed — but it says nothing about the rate, for which the mechanism is decisive. A key consequence is coupling: an endergonic reaction can run if an exergonic one runs alongside it and the sum of the two ΔG values is negative. Energy can thus be stored in advance, as a macroergic compound or as an energy-rich situation such as a non-equilibrium ion distribution across a membrane. At equilibrium the total ΔG is zero, which gives ΔG standard equals minus RT ln K. Biochemistry, however, cannot use the usual standard state of unit activity for all components, because that would be unrealistic for hydrogen ions; it therefore defines the standard state at pH 7 with other activities unity, and marks the quantities with a prime. Classical thermodynamics strictly applies only to isolated systems at equilibrium, which do not exist in nature; its use is justified by the principle of local equilibrium, which lets us divide a non-equilibrium system into subsystems treatable as equilibrium ones. Living matter is normally in a stationary state, whose parameters are time-independent — equilibrium is a special case of it, but unlike equilibrium the stationary state is possible in open systems. More precisely, living matter is dynamically stationary: state quantities fluctuate around stationary values, and keeping those fluctuations within permissible limits is homeostasis, the constancy of the internal environment, which is a condition of life itself. Time-independence holds only over a limited interval; overall development is non-stationary — ageing and death. For the organism as a whole, classical thermodynamics no longer suffices, and physics turns to non-equilibrium thermodynamics and synergetics.",
    checklist: [
      "Defined state quantity and stated both laws",
      "Wrote G = U + pV − TS and the ΔG < 0 spontaneity criterion",
      "Stressed that ΔG says nothing about rate",
      "Explained coupling with the ΔG₁ + ΔG₂ < 0 condition",
      "Explained the pH 7 standard state and the prime notation",
      "Distinguished stationary state from equilibrium (open systems)",
      "Defined homeostasis as fluctuation within permissible limits",
      "Noted that overall development is non-stationary — ageing, death"
    ]
  }
},

{
  id: "1-6",
  book: "cz",
  topicKey: "origin-and-evolution-of-life",
  chapter: 1,
  section: "1.6",
  czTitle: "Vznik a vývoj života",
  enTitle: "Origin and evolution of life",
  cnTitle: "生命的起源与演化",
  pages: [18, 19, 20],
  coverage: "partial",
  coverageNote: "Only the opening of the section on p.18 is in the extracted page set; pp. 19–20 were not extracted. Groups (b) and (c) below follow the structure the text sets up but should be checked against the book.",
  cnNote: { topic: "一", title: "序论", status: "mapped" },
  mustKnow: { en: "The book's own account of life's origin is incomplete in the extracted pages — only explanation group (a), the supernatural/creationist one, survives in the source; groups (b) and (c), presumably naturalistic accounts, are simply not in the material available. Flag this as a gap in the sourcing, not as the book's actual position, before ever quoting this section as if it were the full picture.", cn: "教材关于生命起源的说明，在已提取的页面里是不完整的——来源材料里只保留了解释分类中的第(a)组，也就是超自然／神创论那一组；第(b)组和第(c)组——大概率是自然主义的解释——根本不在现有材料里。在把这一节当作教材完整立场引用之前，先要标出这是**取材上的缺口**，不是教材真正的观点。" },
  summary: {
    en: "People have always been astonished by the complexity and variety of organisms, and by the elements of purposefulness in their internal arrangement, external organs and activity. Questions about the origin of living organisms, and about the origin of life as such, therefore belong among the oldest that humans ask.",
    cn: "人们历来惊叹于生物体的复杂与多样，以及其内部构造、外部器官和活动中体现的合目的性。因此，关于生物体起源、以及关于生命本身起源的问题，属于人类最古老的追问之列。"
  },
  points: [
    { en: "The textbook divides explanations of the origin of life into three groups, of which group (a) is: life arose as the result of a supernatural intervention (CREATIONISM), or through the action of forces inaccessible to direct scientific investigation (so-called INTELLIGENT DESIGN).", cn: "教材把生命起源的解释分为三组，其中 (a) 组是：生命作为超自然干预的结果而产生（创世论），或由无法直接进行科学研究的力量作用而产生（所谓智能设计）。" },
    { en: "Groups (b) and (c) continue on the following pages, which are not in the extracted page set — treat the remaining classification as to be confirmed from the book.", cn: "(b) 与 (c) 两组接续于后面的页面，而这些页面不在已提取的页面集合中——其余分类请以教材原书为准核对。" }
  ],
  terms: [
    { cz: "kreacionismus", en: "creationism", cn: "创世论", def_en: "The explanation that life arose as the result of a supernatural intervention.", def_cn: "认为生命是超自然干预的结果的解释。" },
    { cz: "inteligentní design", en: "intelligent design", cn: "智能设计", def_en: "The explanation that life arose through forces inaccessible to direct scientific investigation.", def_cn: "认为生命由无法直接进行科学研究的力量作用而产生的解释。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the textbook's classification, creationism and intelligent design belong to which group of explanations of the origin of life?",
      q_cn: "在教材的分类中，创世论与智能设计属于生命起源解释的哪一组？",
      options: [
        "Group (a) — supernatural intervention or forces inaccessible to science",
        "Group (b) — chemical evolution in the primordial ocean",
        "Group (c) — panspermia from extraterrestrial sources",
        "They are not classified in the textbook"
      ],
      answer: 0,
      why_en: "Group (a) covers both: life as the result of a supernatural intervention (creationism) or through the action of forces inaccessible to direct scientific investigation (intelligent design).",
      why_cn: "(a) 组同时涵盖两者：生命作为超自然干预的结果（创世论），或由无法直接进行科学研究的力量作用而产生（智能设计）。"
    }
  ],
  oral: {
    q_en: "How does the textbook classify explanations of the origin of life?",
    q_cn: "教材如何对生命起源的解释进行分类？",
    model_en: "The textbook opens by noting that people have always been astonished by the complexity and variety of organisms and by the elements of purposefulness in their internal arrangement, external organs and activity, so that questions about the origin of organisms and of life as such are among the oldest humans ask. It then divides the explanations into three groups. The first holds that life arose as the result of a supernatural intervention — creationism — or through the action of forces inaccessible to direct scientific investigation, so-called intelligent design.",
    checklist: [
      "Framed the question historically — among the oldest humans ask",
      "Stated that explanations fall into three groups",
      "Correctly described group (a): creationism and intelligent design",
      "Distinguished supernatural intervention from 'forces inaccessible to science'"
    ]
  }
}

);
