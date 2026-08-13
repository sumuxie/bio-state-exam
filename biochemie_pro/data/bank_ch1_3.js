/* Bank questions for Czech textbook chapters 1–3 — the second question layer, see BANK_SPEC.md.
   Every item below is derived from the content already in data/ch1.js, data/ch2.js and
   data/ch3.js (points, summary, mustKnow, terms, coverageNote); no fact here comes from
   outside the node it is attached to. gapPoints blocks were deliberately NOT used as a
   source, because they are flagged in the data as material not read from the book.
   Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  /* ===================== Chapter 1 ===================== */

  '1-1': [
    {
      type: 'mcq',
      q_en: "Which date does the textbook give as characteristic of the real RISE of biochemistry as a field?",
      q_cn: "教材把哪一个年份当作生物化学真正兴起的标志？",
      options: [
        "1883 — the Kjeldahl method for nitrogen determination",
        "1906 — the first journal with 'biochemistry' in its title, Biochemische Zeitschrift",
        "The last quarter of the 19th century, when it became an independent field",
        "The second half of the 20th century, when it grew explosively"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "1883 is the enabling analytical method, not the date of the field's rise — Kjeldahl made the analysis of living matter feasible, which is a precondition, not the event itself.", cn: "1883 年是使这门学科成为可能的分析方法，不是它兴起的年份——凯氏定氮法让分析生命物质变得可行，这是前提条件，不是事件本身。" },
        2: { en: "That is when biochemistry appears as an independent field — the last of the 'great' chemical disciplines — but the textbook names 1906 as the characteristic date of its rise.", cn: "那是生物化学作为独立学科出现的时期——「大」化学学科中最后成立的一个——但教材点名 1906 年为其兴起的标志年份。" },
        3: { en: "The explosive growth of the second half of the 20th century rests on physico-chemical methods (spectroscopy, chromatography, X-ray analysis, electron microscopy); it is a later stage.", cn: "20 世纪下半叶的迅猛发展依靠的是物理化学方法（光谱、色谱、X 射线分析、电镜），属于更晚的阶段。" }
      },
      why_en: "The textbook gives 1906 — the year the first journal carrying 'biochemistry' in its title, Biochemische Zeitschrift, appeared — as the characteristic date for the field's real rise. Note how each of the other three answers is also a true date from this section but marks a different event: an enabling method, an emergence, an expansion.",
      why_cn: "教材给出的是 1906 年——第一本以「生物化学」命名的期刊《Biochemische Zeitschrift》创刊之年——作为该领域真正兴起的标志。注意另外三项也都是本节里真实的时间点，只是标记的是不同的事件：使之可能的方法、独立成学科、迅速扩张。"
    },
    {
      type: 'mcq',
      q_en: "The textbook says the 20th-century expansion of biochemistry again rested on better experimental methods. Which set does it name?",
      q_cn: "教材说 20 世纪生物化学的扩张同样依赖实验方法的改进。它点名的是哪一组方法？",
      options: [
        "Nitrogen determination and other classical wet-chemical analyses",
        "Spectroscopy, chromatography, X-ray structure analysis, electron microscopy",
        "Ultracentrifugation, gel (permeation) chromatography and electromigration methods",
        "Ion-exchange chromatography and electrophoresis"
      ],
      answer: 1,
      optionRefs: { 2: '2-2-6', 3: '2-1-2' },
      optionNotes: {
        0: { en: "Classical analysis, of which the Kjeldahl nitrogen determination is the example, belongs to the 19th-century birth of the field, not to the 20th-century expansion.", cn: "经典分析（教材举的例子是凯氏定氮法）属于 19 世纪该学科诞生的阶段，而不是 20 世纪的扩张阶段。" },
        2: { en: "That is the trio of physico-chemical methods used specifically to determine the relative molecular mass of a protein.", cn: "那是专门用于测定蛋白质相对分子质量的三类物理化学方法。" },
        3: { en: "Those two separate amino acids and proteins by exploiting their differing isoelectric points — a separation technique, not the general instrumental revolution described here.", cn: "这两种方法是利用等电点差异来分离氨基酸和蛋白质的——属于分离技术，不是这里讲的整体仪器革命。" }
      },
      why_en: "The section names spectroscopy, chromatography, X-ray structure analysis and electron microscopy — physico-chemical rather than wet-chemical methods. The pattern the textbook is drawing is that the field jumps forward when its instruments do, first with analytical chemistry and then with physics.",
      why_cn: "本节点名的是光谱学、色谱、X 射线结构分析和电子显微镜——都是物理化学方法而非湿化学方法。教材要说明的规律是：这门学科每一次跃进都跟着仪器走，先是分析化学，后是物理学。"
    },
    {
      type: 'short',
      q_en: "The term 'molecular biology' has two senses. Give both, and say which one this textbook uses.",
      q_cn: "「分子生物学」一词有两种含义。请说出两者，并指出本教材用的是哪一种。",
      accept: ["broad", "narrow", "molecular genetics", "广义", "分子遗传学"],
      answer_en: "In the broader sense molecular biology is really a part of biochemistry: it explains biologically significant events at the molecular, and therefore chemical, level. In the narrower sense, which dominates today, it is largely equated with molecular genetics. This textbook uses the broad sense, so in this course the term should be read as biochemistry studied at the molecular level.",
      answer_cn: "广义上，分子生物学其实是生物化学的一部分——它在分子（因而是化学）层面阐明具有生物学意义的过程。狭义上（也是今天占主导的用法）它基本等同于分子遗传学。本教材使用的是广义，所以在这门课里遇到这个词，就按「分子层面的生物化学」来理解。"
    }
  ],

  '1-2': [
    {
      type: 'mcq',
      q_en: "Which of these elements does the textbook classify as VARIABLE (trace) rather than invariable?",
      q_cn: "教材把下列哪一种元素归为可变（痕量）元素，而不是恒定元素？",
      options: ["Phosphorus", "Iron", "Molybdenum", "Silicon"],
      answer: 3,
      optionNotes: {
        0: { en: "Phosphorus is macrobiogenic — one of the five (H, O, C, N, P) present in all organisms at about 1 % of mass and above.", cn: "磷属于常量生源元素——H、O、C、N、P 五种之一，在所有生物体中占质量约 1% 及以上。" },
        1: { en: "Iron is oligobiogenic (0.05–1 % of mass, with Ca, Mg, S, Na, K, Cl) and, like all the oligo- and microbiogenic elements, is invariable — present in all organisms.", cn: "铁属于寡量生源元素（占质量 0.05–1%，与 Ca、Mg、S、Na、K、Cl 同组），和所有寡量、微量生源元素一样是恒定元素——存在于所有生物体中。" },
        2: { en: "Molybdenum is microbiogenic (with Cu, Zn, Co, Mn, I): the smallest amounts, but still invariable.", cn: "钼属于微量生源元素（与 Cu、Zn、Co、Mn、I 同组）：含量最小，但仍属恒定元素。" }
      },
      why_en: "The variable elements — B, Si, V, Br, Li, As, Se, Ti, Al — occur in significant amounts only in some species, which is exactly what 'variable' means here; they are also called trace elements or microelements. The macro-, oligo- and microbiogenic groups are all invariable: their defining property is that they are present in ALL organisms, and the three groups differ only in how much.",
      why_cn: "可变元素——B、Si、V、Br、Li、As、Se、Ti、Al——只在某些物种中以较显著的量出现，这正是这里「可变」的含义；它们也称痕量元素或微量元素。常量、寡量、微量三组都是恒定元素：其界定性质是存在于**所有**生物体中，三组之间只差在含量多少。"
    },
    {
      type: 'mcq',
      q_en: "How does nitrogen differ in form between inanimate nature and living matter?",
      q_cn: "氮在无生命自然界与生命物质中的存在形式有何不同？",
      options: [
        "Outside: mostly free gas and oxidised as nitrates. Inside: reduced-nitrogen compounds, especially amines",
        "Outside: reduced compounds such as amines. Inside: mostly nitrates and free gas",
        "Outside: carbonates and CO₂. Inside: formally reduced, hydrogenated and energy-rich",
        "Nitrogen is a variable element and occurs only in some species"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Same two facts, direction reversed. The rule is that living matter holds its key elements in the REDUCED form and inanimate nature in the oxidised one.", cn: "两个事实都对，但方向反了。规律是：生命物质把关键元素保持在**还原**态，无生命自然界则是氧化态。" },
        2: { en: "That is the corresponding statement for CARBON, and it is correct — for carbon. Nitrogen follows the same pattern with different species: free gas and nitrates outside, amines inside.", cn: "这是关于**碳**的对应说法，而且对碳来说是正确的。氮遵循同样的规律，只是具体物种不同：外面是游离气体和硝酸盐，里面是胺类。" },
        3: { en: "Nitrogen is macrobiogenic (H, O, C, N, P) — present in all organisms at about 1 % of mass and above. The variable elements are B, Si, V, Br, Li, As, Se, Ti, Al.", cn: "氮属于常量生源元素（H、O、C、N、P）——在所有生物体中占质量约 1% 及以上。可变元素是 B、Si、V、Br、Li、As、Se、Ti、Al。" }
      },
      why_en: "Nitrogen repeats the carbon pattern. In inanimate nature it is mostly free gas or oxidised as nitrates; living matter typically contains it in the reduced form, above all as amines. This is the textbook's point that the chemical difference between living and non-living matter is one of concentration and of FORM, not of which elements are present at all.",
      why_cn: "氮重复了碳的规律。在无生命自然界中它主要以游离气体或氧化态（硝酸盐）存在；生命物质中它的典型形式是还原态，首先是胺类。这正是教材的论点：生物与非生物在化学上的差别在于**浓度**和**形式**，而不在于到底存在哪些元素。"
    },
    {
      type: 'short',
      q_en: "Living matter contains no element that is absent from inanimate nature. In what two respects, then, is it chemically different?",
      q_cn: "生命物质不含任何在无生命自然界中不存在的元素。那么它在化学上的差别体现在哪两个方面？",
      accept: ["quantitative", "light element", "reduced", "浓度", "还原"],
      answer_en: "First, quantitatively: living matter is conspicuous for a high concentration of light elements, a trend that stands out even more sharply in atomic per cent than in mass per cent, while silicon and aluminium — among the commonest elements of the Earth's crust — are strikingly scarce. Second, in the FORM the elements take: carbon in inanimate nature is mostly oxidised as carbonates and CO₂, whereas living matter is characterised by formally reduced, hydrogenated, energy-rich carbon, and nitrogen shows the same pattern. A further feature of the natural carbon compounds is their chirality.",
      answer_cn: "第一是定量上的：生命物质以轻元素浓度高为显著特征，用原子百分比比较时这一趋势比用质量百分比更突出；而硅和铝——地壳中最常见的元素之列——在生命物质中却少得惊人。第二是元素存在**形式**上的：无生命自然界中的碳多为氧化态（碳酸盐、CO₂），而生命物质的特征是形式上被还原、加氢的富能碳，氮也表现出同样的规律。天然碳化合物还有一个特征是手性。"
    }
  ],

  '1-3': [
    {
      type: 'mcq',
      q_en: "Escherichia coli is the textbook's type example of which cell, and what bounds that cell?",
      q_cn: "大肠杆菌是教材举的哪一类细胞的典型例子？这类细胞由什么包被？",
      options: [
        "The prokaryotic cell, bounded by a cytoplasmic membrane plus a cell wall",
        "The eukaryotic cell — the fully developed structure of protists, algae, fungi, animals and higher plants",
        "A cell bounded by a wall alone, with no cytoplasmic membrane",
        "A cell whose labelled organelles include the Golgi apparatus, mitochondria and lysosomes"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "That is the other cell type of this section. Fully developed structure is found in eukaryotes; E. coli is given as the prokaryotic type example.", cn: "那是本节的另一类细胞。结构完全发育的是真核细胞；E. coli 是教材举的原核细胞典型例子。" },
        2: { en: "The wall is additional to the cytoplasmic membrane, not a replacement for it — the prokaryotic cell has both.", cn: "细胞壁是在细胞质膜之外附加的，不是取代它——原核细胞两者都有。" },
        3: { en: "Those are organelles labelled in the ANIMAL-cell scheme (Obr. 1.5), together with smooth and rough endoplasmic reticulum, peroxisome, centrioles, vacuole, chromosome and cilium — i.e. a eukaryotic cell.", cn: "那些是**动物**细胞示意图（图 1.5）中标注的细胞器，还包括光面与粗面内质网、过氧化物酶体、中心粒、液泡、染色体和纤毛——也就是真核细胞。" }
      },
      why_en: "The section introduces the prokaryotic cell with E. coli as its type example (Obr. 1.4) and says it is bounded by a cytoplasmic membrane plus a cell wall; the fully developed structure, surveyed in Tab. 1.3 and Obr. 1.5–1.6, belongs to eukaryotes.",
      why_cn: "本节以 E. coli 作为原核细胞的典型例子引入（图 1.4），并说它由细胞质膜加细胞壁包被；结构完全发育的类型（见表 1.3 与图 1.5、1.6）属于真核细胞。"
    },
    {
      type: 'mcq',
      q_en: "Which term does the textbook use for the study of computer models, and what does it say about it?",
      q_cn: "教材用哪个术语指计算机模型研究？它对此有什么评价？",
      options: [
        "In vitro — work in considerably simplified model systems in a test tube",
        "In vivo — observation and experiment in the natural environment",
        "In silico modeling — gaining importance in contemporary biochemistry",
        "The systems approach — studying the organism in its linkages, as a whole"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "In vitro is bench work on isolated reactions in simplified model systems; its results are exactly what has to be confronted with in vivo observation.", cn: "in vitro 指在简化模型体系中做分离反应的实验；它的结果正是必须拿去与 in vivo 观察相对照的那一类。" },
        1: { en: "In vivo is the natural environment of the living organism — the standard against which in vitro findings are checked, not a modelling method.", cn: "in vivo 指活体的自然环境——它是用来检验体外结果的标准，不是一种建模方法。" },
        3: { en: "The systems approach is a methodological stance (study the organism as a whole, in its linkages), not a technique; its practical rival is reductionism.", cn: "系统方法是一种方法论立场（把生物体作为整体、在其各种联系中研究），不是一种技术手段；与它相对的实践取向是还原论。" }
      },
      why_en: "The textbook names in silico modeling as the study of computer models and says it is gaining importance. It sits alongside the older pair in vitro / in vivo, but it is not a substitute for either: the argument of the section is that isolated, simplified results of any kind still have to be fitted back into the system of already known biochemical reactions.",
      why_cn: "教材把计算机模型研究称为 in silico 建模，并说它的重要性正在上升。它与更早的 in vitro / in vivo 这一对并列，但并不能取代其中任何一个：本节的论点是，任何分离的、简化的结果，最终都必须重新纳入已知生化反应的体系中去。"
    },
    {
      type: 'short',
      q_en: "Into which two cell types does this section divide cells, and in which organisms is the fully developed type found?",
      q_cn: "本节把细胞分为哪两类？结构完全发育的那一类见于哪些生物？",
      accept: ["prokaryot", "eukaryot", "protist", "fungi", "原核", "真核"],
      answer_en: "Into prokaryotic and eukaryotic cells. The prokaryotic cell has the simpler plan — Escherichia coli is the type example, bounded by a cytoplasmic membrane plus a cell wall. The fully developed structure is found in the eukaryotic cells of protists, algae, fungi, animals and higher plants, whose most important organelles the textbook surveys in Tab. 1.3 and Obr. 1.4–1.6.",
      answer_cn: "分为原核细胞和真核细胞。原核细胞结构较简单——典型例子是大肠杆菌，由细胞质膜加细胞壁包被。结构完全发育的是原生生物、藻类、真菌、动物和高等植物的真核细胞，教材在表 1.3 与图 1.4–1.6 中综述了它们最重要的细胞器。"
    }
  ],

  '1-4': [
    {
      type: 'mcq',
      q_en: "Purple NON-sulfur bacteria and autotrophic protists such as Euglena belong to which nutritional type?",
      q_cn: "紫色非硫细菌和裸藻这类自养原生生物属于哪种营养类型？",
      options: ["Photolithotrophic", "Photoorganotrophic", "Chemoorganotrophic", "Chemolithotrophic"],
      answer: 1,
      optionNotes: {
        0: { en: "Photolithotrophic covers the green and purple SULFUR bacteria, algae, cyanobacteria and green plants — light as energy source, CO₂ as carbon source.", cn: "光能无机营养型包括绿硫细菌与紫**硫**细菌、藻类、蓝细菌和绿色植物——以光为能源、CO₂ 为碳源。" },
        2: { en: "Chemoorganotrophic organisms — bacteria, fungi, protists, animals — take both their carbon and their energy from organic substrates.", cn: "化能有机营养型生物（细菌、真菌、原生动物、动物）的碳和能量都来自有机底物。" },
        3: { en: "Chemolithotrophic organisms live on inorganic substrates: the sulfur, iron and nitrifying bacteria.", cn: "化能无机营养型生物依靠无机底物生活：硫细菌、铁细菌、硝化细菌。" }
      },
      why_en: "The prefix answers the energy question and the stem answers the carbon question, and they are independent. PHOTO- means the energy comes from light radiation in photosynthesis; -ORGANOTROPHIC means the carbon comes from organic compounds made by autotrophs. Read the name as two separate answers and the whole of Tab. 1.4 stops needing to be memorised.",
      why_cn: "前缀回答能源问题，词干回答碳源问题，两者相互独立。PHOTO- 表示能量来自光合作用中的光辐射；-ORGANOTROPHIC 表示碳来自自养生物制造的有机化合物。把名称拆成两个独立的答案来读，整张表 1.4 就不必死记了。"
    },
    {
      type: 'mcq',
      q_en: "What does the textbook call the compounds that serve organisms as a kind of universal 'energy currency'?",
      q_cn: "教材把充当生物体通用「能量货币」的化合物称为什么？",
      options: [
        "The basic inorganic substrates — water, carbon dioxide, ammonia, salts",
        "Macroergic (high-energy) compounds",
        "Enzymes, i.e. specialised proteins",
        "Waste products (dissimilates)"
      ],
      answer: 1,
      optionRefs: { 2: '3-2' },
      optionNotes: {
        0: { en: "The inorganic basic substrates are described as generally LOW in chemically usable energy — they are the raw material, not the currency.", cn: "无机基本底物被描述为化学可利用能量总体上很**低**——它们是原料，不是货币。" },
        2: { en: "Enzymes are the catalysts most biochemical reactions require; they make reactions go, they do not carry the energy.", cn: "酶是多数生化反应所需的催化剂；它们让反应发生，但不携带能量。" },
        3: { en: "Dissimilates are the waste end of the substrate–intermediate–waste classification, and that classification is itself relative.", cn: "异化物是「底物—中间产物—废物」分类中的废物一端，而这个分类本身还是相对的。" }
      },
      why_en: "Macroergic compounds are those from which biochemical processes can relatively easily obtain a considerable quantity of energy, and the textbook explicitly calls them a universal energy currency for transferring and storing energy. Chapter 6 works out which bonds actually carry that energy.",
      why_cn: "高能（大能）化合物是指通过生化过程可以相对容易地从中获得大量能量的化合物，教材明确称之为转移和储存能量的通用「能量货币」。第 6 章会具体讲清楚究竟是哪些键携带了这些能量。"
    },
    {
      type: 'short',
      q_en: "What roles can INTERMEDIATES play in metabolism, according to this section?",
      q_cn: "按本节所述，中间产物在代谢中可以起哪些作用？",
      accept: ["precursor", "macromolecul", "convert", "前体", "转变"],
      answer_en: "Intermediates occupy the middle position of the classification and can serve in three ways: as precursors of biological macromolecules; as a means of storing energy in a chemically usable form; and as a means of converting one type of biologically significant compound into another. The classification is relative, though — from the standpoint of anabolism such a substance is a product, from the standpoint of catabolism it is a substrate.",
      answer_cn: "中间产物处在这一分类的中间位置，可以有三种作用：作为生物大分子的前体；以化学上可利用的形式储存能量；以及作为把一类具有生物学意义的化合物转变为另一类的手段。不过这一划分是相对的——从合成代谢角度看它是产物，从分解代谢角度看同一种物质就是底物。"
    }
  ],

  '1-5': [
    {
      type: 'mcq',
      q_en: "The relation ΔG° = −RT ln K can be written because:",
      q_cn: "之所以能写出 ΔG° = −RT ln K，是因为：",
      options: [
        "the total ΔG is zero at equilibrium",
        "the total entropy of an isolated system grows in a spontaneous process",
        "volume work is negligible, so enthalpy practically coincides with internal energy",
        "the activities of all components are set to unity at pH 7"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "That is the second law, the criterion of spontaneity. It is what makes ΔG < 0 meaningful in the first place, but it is not the step that produces the equilibrium-constant relation.", cn: "那是第二定律，即自发性的判据。它使 ΔG < 0 这个判据本身有意义，但并不是导出平衡常数关系的那一步。" },
        2: { en: "That is the simplification that lets H = U + pV be treated as practically equal to U in biochemical processes — a separate remark about the definition of Gibbs energy.", cn: "那是让 H = U + pV 在生化过程中可近似等于 U 的简化——是关于吉布斯能定义的另一条说明。" },
        3: { en: "That is the biochemical STANDARD STATE convention, which is what the superscript ° and the prime record; it fixes the reference point, it does not derive the relation.", cn: "那是生物化学**标准态**的约定，也正是上标 ° 和那一撇所记录的内容；它固定的是参考点，而不是推导出这个关系式。" }
      },
      why_en: "At equilibrium the total change in Gibbs energy is zero, and setting ΔG = 0 in the expression for a reaction leaves ΔG° = −RT ln K, where K is the equilibrium constant. The superscript zero then records that the values are referred to a standard state — which is a separate decision, and the one biochemistry modifies to pH 7.",
      why_cn: "平衡时吉布斯能的总变化为零，把 ΔG = 0 代入反应的表达式即得 ΔG° = −RT ln K，其中 K 为平衡常数。上标零随后记录这些数值是相对于标准态而言的——那是另一个独立的选择，也正是生物化学改为 pH 7 的那个。"
    },
    {
      type: 'mcq',
      q_en: "What does the textbook mean by HOMEOSTASIS?",
      q_cn: "教材所说的内稳态（homeostasis）指的是什么？",
      options: [
        "Keeping the fluctuations of state quantities within permissible limits around their stationary values",
        "The state in which all parameters are exactly constant, i.e. true thermodynamic equilibrium",
        "The constancy of the total energy of a system and its surroundings",
        "The growth of total entropy that marks a spontaneous process"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Living matter is dynamically stationary, not at equilibrium; equilibrium is only a special case of the stationary state, and unlike it, is unreachable by an open system exchanging matter.", cn: "生命物质处于动态稳态，而不是平衡态；平衡态只是稳态的一个特例，而且与稳态不同，开放系统靠与外界交换物质是达不到平衡的。" },
        2: { en: "That is the first law of thermodynamics — equivalently, that internal energy U is a state quantity.", cn: "那是热力学第一定律——等价地说，内能 U 是状态量。" },
        3: { en: "That is the second law, which supplies the criterion for distinguishing spontaneous processes.", cn: "那是第二定律，它提供了区分自发过程的判据。" }
      },
      why_en: "The textbook characterises living matter as a dynamically stationary system whose state quantities fluctuate within a certain range around the stationary values. Homeostasis — the principle of constancy of the internal environment — is keeping those fluctuations inside the permissible limits, and it is stated as a condition of the system's stationary behaviour, that is, of its life.",
      why_cn: "教材把生命物质刻画为动态稳定系统，其状态量在稳态值附近一定范围内波动。内稳态——内环境恒定原理——就是把这些波动维持在允许限度之内，教材把它表述为系统稳态行为、也就是其生命的条件。"
    },
    {
      type: 'mcq',
      q_en: "What is the CHEMICAL POTENTIAL, as introduced in this section?",
      q_cn: "本节引入的化学势指的是什么？",
      options: [
        "The partial molar Gibbs energy characteristic of an individual component of a multi-component system",
        "The thermodynamic concentration, defined so that a linear relation still holds in real solutions",
        "The Gibbs energy of the system as a whole, G = U + pV − TS",
        "The energy that must be supplied for molecules to overcome the barrier to reaction"
      ],
      answer: 0,
      optionRefs: { 3: '3-3-1' },
      optionNotes: {
        1: { en: "That is ACTIVITY. Chemical potential is a linear function of concentration in ideal, very dilute solutions and of the activity in real ones — activity is defined precisely so that this stays true.", cn: "那是**活度**。化学势在理想（极稀）溶液中是浓度的线性函数，在实际溶液中是活度的线性函数——活度的定义正是为了让这个关系继续成立。" },
        2: { en: "That is the Gibbs energy itself. The chemical potential is introduced because a multi-component system needs a per-component quantity.", cn: "那是吉布斯能本身。之所以引入化学势，是因为多组分体系需要一个「按组分计」的量。" },
        3: { en: "That is activation energy, a kinetic quantity — and the section stresses that Gibbs energy says nothing at all about rate.", cn: "那是活化能，属于动力学量——而本节强调，吉布斯能对速率不提供任何信息。" }
      },
      why_en: "For multi-component systems one needs a quantity attached to each component separately, and that is the chemical potential: the partial molar Gibbs energy. Its behaviour then motivates the concept of activity, since only in ideally behaving, very dilute solutions is it a linear function of concentration.",
      why_cn: "对多组分体系需要一个分别归属于每个组分的量，这就是化学势：偏摩尔吉布斯能。它的行为随即引出活度的概念——因为只有在理想行为的极稀溶液中，它才是浓度的线性函数。"
    },
    {
      type: 'short',
      q_en: "Why does the textbook say classical thermodynamics no longer suffices for the organism as a whole, and what does contemporary physics offer instead?",
      q_cn: "教材为什么说经典热力学不足以描述作为整体的生物体？当代物理学提出了什么替代工具？",
      accept: ["non-equilibrium", "synergetic", "bifurcation", "fractal", "非平衡", "协同学"],
      answer_en: "Not because the laws of physics fail for living matter — the textbook is explicit that they do not — but because relations derived for simple, idealised systems cannot fully describe the behaviour of an organism. Contemporary physics therefore seeks new conceptual apparatus: non-equilibrium thermodynamics, and more generally synergetics for processes with an abrupt change of quality, which in turn require special mathematics such as bifurcation theory, catastrophe theory and abstract spaces of non-integer dimension (fractals).",
      answer_cn: "并不是因为物理定律对生命物质不成立——教材明确说不是——而是因为为简单、理想化系统导出的关系式无法完整描述一个生物体的行为。因此当代物理学在寻求新的概念工具：非平衡热力学，以及更普遍地、针对发生质的突变过程的协同学；这又需要专门的数学，例如分岔理论、突变理论和非整数维的抽象空间（分形）。"
    }
  ],

  '1-6': [
    {
      type: 'mcq',
      q_en: "This node presents only group (a) of the textbook's three groups of explanations. Why?",
      q_cn: "本节点只给出了教材三组解释中的 (a) 组。为什么？",
      options: [
        "Groups (b) and (c) continue on pages that are not in the extracted page set, so they are flagged as to be confirmed from the book",
        "The textbook recognises only one group of explanations",
        "Groups (b) and (c) were judged unscientific and left out",
        "Groups (b) and (c) are covered instead in the chapter on nucleic acids"
      ],
      answer: 0,
      optionRefs: { 3: '4-1' },
      optionNotes: {
        1: { en: "The textbook explicitly divides the explanations into THREE groups; only group (a) — creationism and intelligent design — survives in the material that was verified.", cn: "教材明确把这些解释分为**三**组；只是在已核对的材料里只保留下 (a) 组——创世论与智能设计。" },
        2: { en: "The omission is a gap in the sourcing, not a judgement. Nothing in the node says anything about the scientific standing of the missing groups.", cn: "这个缺失是取材上的缺口，不是价值判断。节点里没有任何内容对缺失的两组作科学地位上的评价。" },
        3: { en: "The nucleic-acid chapter is about heredity and the structure and synthesis of DNA and RNA; it does not restate this classification.", cn: "核酸那一章讲的是遗传以及 DNA 与 RNA 的结构与合成，并不重述这里的分类。" }
      },
      why_en: "Only the opening of the section on p.18 is in the extracted page set; pp. 19–20 were not extracted. The honest thing, and what the node does, is to state the gap as a gap: group (a) is verified, the rest is to be checked against the book, and this section must not be quoted as though it were the textbook's full position.",
      why_cn: "已提取的页面里只有第 18 页上本节的开头，第 19–20 页没有提取到。诚实的做法（也正是该节点的做法）是把缺口如实标为缺口：(a) 组已核对，其余部分要以原书为准核对，因此不能把这一节当作教材的完整立场来引用。"
    },
    {
      type: 'short',
      q_en: "What does group (a) contain, and what distinguishes the two explanations inside it?",
      q_cn: "(a) 组包含什么？组内两种解释的区别是什么？",
      accept: ["supernatural", "creationism", "intelligent design", "超自然", "智能设计"],
      answer_en: "Group (a) holds that life arose either as the result of a supernatural intervention — creationism — or through the action of forces inaccessible to direct scientific investigation, so-called intelligent design. The two are grouped together because both place the cause outside what can be investigated directly, but they are not phrased identically: creationism names a supernatural intervention, intelligent design names forces that are simply not accessible to direct scientific study.",
      answer_cn: "(a) 组认为生命的产生要么是超自然干预的结果——创世论——要么源于无法直接进行科学研究的力量的作用，即所谓智能设计。两者被归在一起，是因为它们都把原因置于可直接研究的范围之外；但表述并不相同：创世论点名的是超自然的干预，智能设计点名的是无法被直接科学研究触及的力量。"
    }
  ],

  /* ===================== Chapter 2 ===================== */

  '2-1-1': [
    {
      type: 'mcq',
      q_en: "Which two amino acids does the textbook name as the MOST POLAR of the polar-side-chain group?",
      q_cn: "教材点名极性侧链组中极性最强的是哪两种氨基酸？",
      options: [
        "Serine and threonine",
        "Asparagine and glutamine",
        "Cysteine and tyrosine",
        "Glutamic acid and aspartic acid"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Serine and threonine do belong to the polar group and carry an –OH group, but the textbook singles out cysteine and tyrosine as the most polar of the group.", cn: "丝氨酸和苏氨酸确实属于极性组、带 –OH 基，但教材单独点出的「极性最强」是半胱氨酸和酪氨酸。" },
        1: { en: "Asparagine and glutamine are the amide members of the same group — polar, but not the ones the textbook calls most polar.", cn: "天冬酰胺和谷氨酰胺是同一组里带酰胺基的成员——是极性的，但不是教材所说的极性最强者。" },
        3: { en: "Those two form group 3 — the negatively charged side chains, each carrying a second carboxyl group. Charged is a separate category from polar in this four-group scheme.", cn: "这两种构成第 3 组——带负电的侧链，各自在侧链上还有第二个羧基。在这个四分法里，「带电」和「极性」是彼此分开的类别。" }
      },
      why_en: "Group 2 gathers the side chains carrying an –OH group (Thr, Ser, Tyr), an amide group (Asn, Gln) or an –SH group (Cys), and the textbook notes that within this group cysteine and tyrosine are the most polar. Note also that glycine is the amino acid the book says is very difficult to place in this classification at all.",
      why_cn: "第 2 组汇集了带 –OH 基（Thr、Ser、Tyr）、酰胺基（Asn、Gln）或 –SH 基（Cys）的侧链，教材指出本组中极性最强的是半胱氨酸和酪氨酸。另外注意，教材说很难归入这一分类的氨基酸是甘氨酸。"
    },
    {
      type: 'mcq',
      q_en: "Which statement about the number 20 is correct?",
      q_cn: "关于「20」这个数字，哪一说法是正确的？",
      options: [
        "Only twenty amino acids exist in living cells",
        "The twenty are the ones that build proteins and have a genetic code; over 150 further amino acids occur in cells and tissues but never in proteins",
        "The twenty include D-configuration members such as D-glutamic acid",
        "Amino acids found only rarely in protein hydrolysates are counted among the twenty"
      ],
      answer: 1,
      optionRefs: { 2: '2-1-2' },
      optionNotes: {
        0: { en: "Over 150 further amino acids have been found in various cells and tissues, free or bound. What twenty counts is participation in proteins, not existence in cells.", cn: "在各种细胞和组织中还发现了 150 多种氨基酸，或游离或结合存在。「二十」数的是**参与蛋白质**，不是「在细胞里存在」。" },
        2: { en: "D-glutamic acid, in bacterial cell walls, is one of the NON-protein amino acids; the amino acids found in proteins belong to the L-configuration series.", cn: "细菌细胞壁中的 D-谷氨酸属于**非**蛋白质氨基酸；在蛋白质中发现的氨基酸属于 L 构型系列。" },
        3: { en: "The rare ones are additional to the twenty: further amino acids found in the hydrolysates of some proteins, their occurrence mostly tied to a particular type of protein.", cn: "罕见的那些是**在二十种之外**的：在某些蛋白质的水解产物中另外发现的氨基酸，其出现多与特定类型的蛋白质相关。" }
      },
      why_en: "Twenty is a genetic-code fact, not a chemical one. The twenty hold their special position because they are the basic components of proteins and a genetic code exists for them; over 150 other amino acids occur free or bound in cells and tissues but never enter a protein, and some of them — citrulline and ornithine in urea formation, β-alanine as a precursor of coenzyme A — are metabolically important all the same.",
      why_cn: "「二十」是遗传密码的事实，不是化学的事实。这二十种之所以地位特殊，是因为它们是蛋白质的基本组分、并且有遗传密码与之对应；另有 150 多种氨基酸在细胞和组织中或游离或结合地存在，却从不进入蛋白质——而其中有些（尿素生成中的瓜氨酸和鸟氨酸、辅酶 A 前体 β-丙氨酸）在代谢上依然重要。"
    },
    {
      type: 'short',
      q_en: "Why does the classification of amino acids rest on the side chain R rather than on the backbone?",
      q_cn: "为什么氨基酸的分类依据的是侧链 R，而不是主链？",
      accept: ["backbone", "side chain", "nonpolar", "polar", "主链", "侧链"],
      answer_en: "Because the backbone is the same in all of them: every one of the twenty carries a carboxyl group and an amino group, and in the proteinogenic amino acids the amino group is always in the α-position. Everything that distinguishes one amino acid from another therefore sits in the characteristic side chain R, which is why the textbook sorts them into four groups by that side chain — nonpolar, polar, negatively charged and positively charged. Proline is the one structural exception to the common pattern, having no free unsubstituted amino group on the α-carbon.",
      answer_cn: "因为主链在所有氨基酸中都是一样的：二十种全都带一个羧基和一个氨基，而在蛋白质氨基酸中氨基永远处于 α 位。因此，区分不同氨基酸的一切都落在特征性侧链 R 上，教材也正是按侧链把它们分成四组——非极性、极性、带负电、带正电。结构上的唯一例外是脯氨酸，它的 α 碳上没有游离未取代的氨基。"
    }
  ],

  '2-1-2': [
    {
      type: 'mcq',
      q_en: "Which statement about the light absorption of amino acids is correct?",
      q_cn: "关于氨基酸的光吸收，哪一说法正确？",
      options: [
        "None of the twenty absorbs in the visible region; tyrosine, tryptophan and phenylalanine absorb significantly in the UV",
        "All twenty absorb in the UV, which is what makes the A₂₈₀ measurement possible",
        "Cystine absorbs at 280 nm, while tyrosine and tryptophan absorb at 240 nm",
        "The aromatic amino acids absorb in the visible region, which is where protein colour comes from"
      ],
      answer: 0,
      optionRefs: { 3: '2-2-5' },
      optionNotes: {
        1: { en: "Only three of the twenty absorb significantly in the UV. A₂₈₀ works because proteins contain tyrosine and tryptophan residues, not because every residue absorbs.", cn: "二十种里只有三种在紫外区有显著吸收。A₂₈₀ 之所以可行，是因为蛋白质含有酪氨酸和色氨酸残基，而不是因为每个残基都吸收。" },
        2: { en: "The two wavelengths are swapped: tyrosine and tryptophan are read at 280 nm, and it is cystine that absorbs weakly at 240 nm.", cn: "两个波长弄反了：酪氨酸和色氨酸在 280 nm 读数，而在 240 nm 有弱吸收的是胱氨酸。" },
        3: { en: "No amino acid found in proteins absorbs in the visible at all. Colour in a protein comes from a non-peptide component — heme, for instance, is an Fe–porphyrin complex.", cn: "蛋白质中的氨基酸没有一种在可见光区吸收。蛋白质的颜色来自非肽组分——例如血红素就是铁与卟啉的配合物。" }
      },
      why_en: "None of the twenty absorbs in the visible; three — tyrosine, tryptophan and phenylalanine — absorb significantly in the UV. Because proteins contain tyrosine and tryptophan, the absorbance at 280 nm is a quick and convenient measure of protein content in solution; cystine, separately, absorbs weakly at 240 nm.",
      why_cn: "二十种氨基酸没有一种在可见区吸收；其中三种——酪氨酸、色氨酸、苯丙氨酸——在紫外区有显著吸收。由于蛋白质含有酪氨酸和色氨酸，280 nm 吸光度成为测定溶液中蛋白质含量的快速简便方法；另外，胱氨酸在 240 nm 有弱吸收。"
    },
    {
      type: 'mcq',
      q_en: "On what property do ion-exchange chromatography and electrophoresis separate amino acids?",
      q_cn: "离子交换色谱和电泳依据什么性质来分离氨基酸？",
      options: [
        "On differences in relative molecular mass",
        "On the fact that the further ionisable groups in the side chains make the pI values differ",
        "On the fact that all of them except glycine are optically active",
        "On the absorbance of tyrosine and tryptophan at 280 nm"
      ],
      answer: 1,
      optionRefs: { 0: '2-2-6' },
      optionNotes: {
        0: { en: "Size-based separation — molecular sieves in gel (permeation) chromatography, or the ultracentrifuge — is how the relative molecular mass of a PROTEIN is approached; it is not what these two methods exploit.", cn: "按大小分离——凝胶（渗透）色谱的分子筛，或者超速离心——是用来处理**蛋白质**相对分子质量的路子，不是这两种方法所利用的性质。" },
        2: { en: "Optical activity follows from the asymmetric carbon and defines the L-configuration series; it is stereochemistry, not charge, and these methods do not sort by it.", cn: "旋光活性源于不对称碳，界定的是 L 构型系列；那是立体化学而非电荷，这两种方法并不按它分离。" },
        3: { en: "UV absorbance at 280 nm is how you DETECT and quantify, not how you separate.", cn: "280 nm 的紫外吸收是用来**检测**和定量的，不是用来分离的。" }
      },
      why_en: "Charge is a function of pH: at low pH the carboxyl is protonated and the amino acid is a cation, at high pH it is an anion, and at its isoelectric point the net charge is zero. Because the side chains carry further ionisable groups whose dissociation also depends on pH, different amino acids have different pI values — and that difference is exactly what both ion-exchange chromatography and electrophoresis exploit.",
      why_cn: "电荷是 pH 的函数：低 pH 下羧基被质子化，氨基酸是阳离子；高 pH 下则是阴离子；而在等电点上净电荷为零。由于侧链还带有其他可电离基团、其解离同样依赖 pH，不同氨基酸的 pI 值各不相同——离子交换色谱与电泳正是利用这一差异。"
    },
    {
      type: 'short',
      q_en: "To which configuration series do the amino acids found in proteins belong, what is the exception, and what is the reference compound?",
      q_cn: "蛋白质中的氨基酸属于哪个构型系列？例外是什么？参照物是什么？",
      accept: ["glycine", "glyceraldehyde", "serine", "asymmetric", "甘氨酸", "甘油醛"],
      answer_en: "They all belong to the L-configuration series, referenced through L-serine, which is derived from L-glyceraldehyde. The exception is glycine: its R is hydrogen, so it contains no asymmetric carbon and is not optically active. All the other amino acids commonly occurring in proteins have one asymmetric carbon, except threonine and isoleucine, which have two.",
      answer_cn: "它们全部属于 L 构型系列，参照物是由 L-甘油醛派生的 L-丝氨酸。例外是甘氨酸：它的 R 就是氢，因此不含不对称碳，也没有旋光活性。蛋白质中常见的其他氨基酸都含一个不对称碳，唯苏氨酸和异亮氨酸含两个。"
    }
  ],

  '2-1-3': [
    {
      type: 'mcq',
      q_en: "What is acylation of the α-amino group by an acyl halide or anhydride used for?",
      q_cn: "用酰卤或酸酐对 α-氨基进行酰化，是用来做什么的？",
      options: [
        "For protecting the amino group",
        "For reducing the carboxyl group to an α-amino alcohol",
        "For forming the esters and azides used in peptide synthesis",
        "For developing the blue-violet ninhydrin colour"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Reduction to an α-amino alcohol is a reaction of the –COOH group, and it is a reduction, not an acylation.", cn: "还原成 α-氨基醇是 –COOH 基的反应，而且是还原反应，不是酰化。" },
        2: { en: "Amides, esters, acyl halides and azides are formed FROM the carboxyl group; those are the carboxyl-side reactions used in peptide synthesis.", cn: "酰胺、酯、酰卤和叠氮化物是由**羧基**生成的；那些是用于肽合成的羧基一侧的反应。" },
        3: { en: "The opposite: ninhydrin gives the blue-violet product with a FREE –NH₂. An amino group whose –NH₂ is substituted gives yellow — which is why proline behaves differently.", cn: "恰恰相反：茚三酮与**游离** –NH₂ 反应才生成蓝紫色产物。–NH₂ 被取代的氨基酸生成黄色——这正是脯氨酸表现不同的原因。" }
      },
      why_en: "Acylating the α-amino group blocks it, and blocking is the point: to build a peptide in a chosen order you protect one end so that the coupling happens where you want it. Leaving every group free would give a random polymer rather than a defined sequence.",
      why_cn: "把 α-氨基酰化就等于把它封住，而「封住」正是目的：要按指定顺序接出一条肽，就得先保护一端，让偶联发生在你想要的位置。若两端都不管，得到的是随机聚合物，而不是确定的序列。"
    },
    {
      type: 'short',
      q_en: "An amino acid heated with ninhydrin gives a YELLOW product. What does that tell you about it, and what would blue-violet have told you?",
      q_cn: "某氨基酸与茚三酮共热后生成**黄色**产物。这说明它是什么？如果生成蓝紫色又说明什么？",
      accept: ["proline", "substituted", "free", "脯氨酸", "取代"],
      answer_en: "Yellow means the –NH₂ group is substituted rather than free, which among the twenty means proline. A blue-violet product would have meant a free, unsubstituted α-amino group, i.e. any of the other nineteen. This is the most characteristic reaction of the α-amino group, and it is useful precisely because it turns a colourless spot into a visible one and identifies proline by colour alone.",
      answer_cn: "黄色说明 –NH₂ 基是被取代的而非游离的，在二十种氨基酸中即脯氨酸。蓝紫色产物则说明 α-氨基是游离、未被取代的，也就是其余十九种中的任何一种。这是 α-氨基最具特征性的反应，它有用之处正在于把本来无色的斑点变成可见的，并且单凭颜色就把脯氨酸认出来。"
    }
  ],

  '2-1-4': [
    {
      type: 'mcq',
      q_en: "A chain of exactly eight amino acid residues is called:",
      q_cn: "恰好由八个氨基酸残基组成的链称为：",
      options: ["A dipeptide", "An oligopeptide", "A polypeptide", "A protein"],
      answer: 1,
      optionNotes: {
        0: { en: "A dipeptide is two residues joined by one peptide bond; three make a tripeptide, and so on.", cn: "二肽是由一个肽键连接的两个残基；三个是三肽，依此类推。" },
        2: { en: "Polypeptide begins above ten residues. The boundary is a convention of naming, not a change of chemistry.", cn: "多肽从十个以上残基算起。这条界线是命名的约定，不是化学性质的改变。" },
        3: { en: "This textbook reserves 'protein' for chains of more than 100 residues.", cn: "本教材把「蛋白质」一词留给残基数超过 100 的链。" }
      },
      why_en: "Not more than ten residues is an oligopeptide; more than ten is a polypeptide; more than a hundred is called a protein. All three are the same chemistry — an unbranched chain of residues joined by peptide bonds — and the numbers are conventions of naming.",
      why_cn: "不超过十个残基是寡肽；多于十个是多肽；多于一百个称为蛋白质。三者的化学本质完全相同——由肽键连接的不分支残基链——这些数字只是命名上的约定。"
    },
    {
      type: 'mcq',
      q_en: "The peptide bond is formed between which groups, and what is lost?",
      q_cn: "肽键在哪两个基团之间形成？形成时失去什么？",
      options: [
        "Between the carboxyl of one amino acid and the α-amino of the next, with loss of a molecule of water",
        "Between two side chains R, with loss of a molecule of water",
        "Between the α-amino groups of two residues, with loss of ammonia",
        "Between two carboxyl groups, with loss of CO₂"
      ],
      answer: 0,
      optionRefs: { 1: '2-2-3', 3: '3-1' },
      optionNotes: {
        1: { en: "The side chains form the variable part of the chain, not the backbone linkage. A covalent link between two side chains does exist — the disulfide bridge — and this book counts its placement as part of the primary structure.", cn: "侧链构成肽链的可变部分，而不是主链的连接。侧链之间确实存在共价连接——二硫桥——本教材把它的位置算作一级结构的一部分。" },
        2: { en: "Both ends of the linkage would then be amino groups, and the chain could no longer have one free –NH₂ end and one free –COOH end, which is what gives a sequence its direction.", cn: "那样连接的两端都会是氨基，链也就不再有一端游离 –NH₂、一端游离 –COOH——而正是这一点让序列具有方向性。" },
        3: { en: "Cleaving a bond with release of CO₂ is decarboxylation, the kind of non-hydrolytic, non-oxidative cleavage catalysed by the lyases (class 4).", cn: "以释放 CO₂ 的方式断键属于脱羧，是第 4 类裂合酶所催化的那种非水解、非氧化断裂。" }
      },
      why_en: "The peptide bond is an amide bond joining the carboxyl group of one amino acid to the α-amino group of the next, formed with loss of a molecule of water. Because each residue is joined through one –NH₂ and one –COOH, the chain is unbranched and has exactly two chemically different ends — which is why a sequence has a direction and is written N-terminus first.",
      why_cn: "肽键是酰胺键，把一个氨基酸的羧基与下一个氨基酸的 α-氨基相连，形成时脱去一分子水。由于每个残基是通过一个 –NH₂ 和一个 –COOH 接上去的，链不分支，并且恰好有两个化学性质不同的末端——这正是序列具有方向、并从 N 端写起的原因。"
    },
    {
      type: 'short',
      q_en: "Why is Ala-Gly not the same molecule as Gly-Ala?",
      q_cn: "为什么 Ala-Gly 和 Gly-Ala 不是同一个分子？",
      accept: ["direction", "N-terminal", "C-terminal", "方向", "N 端"],
      answer_en: "Because the chain has two chemically different ends and therefore a direction. Each residue is joined through one amino group and one carboxyl group, so one end of the chain keeps a free amino group (the N-terminal residue) and the other a free carboxyl group (the C-terminal residue). By convention the sequence is written starting at the N-terminus, so Ala-Gly has alanine at the free-amino end and glycine at the free-carboxyl end, while Gly-Ala is the reverse arrangement — a different compound.",
      answer_cn: "因为这条链有两个化学性质不同的末端，因而具有方向。每个残基通过一个氨基和一个羧基接入，所以链的一端保留游离氨基（N 端残基），另一端保留游离羧基（C 端残基）。按惯例序列从 N 端写起，因此 Ala-Gly 是丙氨酸在游离氨基一端、甘氨酸在游离羧基一端，而 Gly-Ala 恰好相反——是另一种化合物。"
    }
  ],

  '2-2-1': [
    {
      type: 'mcq',
      q_en: "Which of the textbook's four reasons for wanting the amino acid sequence is the one about solving the catalytic mechanism of an enzyme?",
      q_cn: "教材列出四条「为什么要知道氨基酸序列」的理由，其中关于阐明酶催化机制的是哪一条？",
      options: [
        "Reason (a) — the sequence is the connecting link between the genetic information in DNA and the three-dimensional structure",
        "Reason (b) — the sequence belongs among the fundamental data for solving a protein's mechanism of action",
        "Reason (c) — molecular pathology, where a changed sequence causes abnormal function and serious disease",
        "Reason (d) — evolutionary history, since proteins are similar in sequence only if they have a common ancestor"
      ],
      answer: 1,
      optionRefs: { 0: '2-2-2' },
      optionNotes: {
        0: { en: "Reason (a) is about structure: analysing sequence against three-dimensional structure reveals the rules governing the chain's arrangement in space.", cn: "理由 (a) 讲的是结构：把序列与三维结构对照分析，可以揭示支配肽链空间排布的规则。" },
        2: { en: "Reason (c) is molecular pathology — the sickle cell anaemia example, glutamic acid at position 6 of the haemoglobin β-chain replaced by valine.", cn: "理由 (c) 是分子病理学——即镰状细胞贫血的例子：血红蛋白 β 链第 6 位的谷氨酸被缬氨酸取代。" },
        3: { en: "Reason (d) is evolution, and it runs in one direction only: similarity of sequence is evidence of common ancestry, not of similar function.", cn: "理由 (d) 讲的是演化，而且只在一个方向上成立：序列相似是共同祖先的证据，而不是功能相似的证据。" }
      },
      why_en: "Reason (b) is the mechanistic one: knowledge of the sequence belongs among the fundamental data for solving how a protein acts, the catalytic mechanism of enzymes being the textbook's example. The four reasons are worth holding apart, because an oral examiner asking 'why does the sequence matter' is asking you to produce more than one of them.",
      why_cn: "理由 (b) 是机制层面的：了解序列属于阐明蛋白质如何起作用的基础数据，教材举的例子正是酶的催化机制。这四条理由值得分清楚，因为口试老师问「序列为什么重要」时，期待你不止说出一条。"
    },
    {
      type: 'mcq',
      q_en: "Why is an amino acid analysis — the kinds and numbers of residues released by hydrolysis — not enough to characterise a peptide chain?",
      q_cn: "为什么氨基酸分析（水解释放出的残基种类和数目）不足以表征一条肽链？",
      options: [
        "Because hydrolysis destroys the side chains",
        "Because their ORDER must also be known — and that order is what is called the primary structure",
        "Because the placement of disulfide bridges is not part of the primary structure",
        "Because the relative molecular mass cannot be obtained by hydrolysis"
      ],
      answer: 1,
      optionRefs: { 2: '2-2-3', 3: '2-2-6' },
      optionNotes: {
        0: { en: "Hydrolysis releases the residues; what is lost in the process is the information about the order they were in, not the side chains themselves.", cn: "水解释放出的是各个残基；过程中丢失的是它们原来排列顺序的信息，而不是侧链本身。" },
        2: { en: "The opposite, in this textbook: it explicitly counts the placement of disulfide bridges as part of the primary structure — a point on which books differ.", cn: "在本教材里恰恰相反：它明确把二硫桥的位置算作一级结构的一部分——这一点各书并不一致。" },
        3: { en: "True but irrelevant here. Relative molecular mass is approached by ultracentrifugation, gel chromatography and electromigration, and it would still not give the order.", cn: "这句本身没错，但与此处无关。相对分子质量要靠超速离心、凝胶色谱和电迁移方法测定，而且即便测出来也仍然给不出顺序。" }
      },
      why_en: "The sequence — the order of the amino acids covalently bound in the chain — is the primary structure, and it is what carries the information. Kinds and numbers alone would leave an enormous number of possible chains indistinguishable, which is exactly why one changed position can be a disease.",
      why_cn: "序列——即链中共价结合的氨基酸的顺序——就是一级结构，也正是承载信息的东西。只知道种类和数目，会让为数极多的可能肽链无法区分；这也正是为什么改动一个位置就可能是一种疾病。"
    },
    {
      type: 'short',
      q_en: "Two proteins are found to be similar in amino acid sequence. What does the textbook allow you to conclude, and what does it NOT allow?",
      q_cn: "发现两种蛋白质的氨基酸序列相似。按教材，你可以据此得出什么结论？又不能得出什么结论？",
      accept: ["common ancestor", "evolution", "function", "共同祖先", "功能"],
      answer_en: "You may conclude common ancestry: the textbook states that proteins are similar in amino acid sequence only if they have a common ancestor, which is why sequence knowledge reveals much of a protein's evolutionary history. You may not conclude similar function — nothing in the sequence comparison measures what the proteins do. Function follows from the three-dimensional structure, and the sequence is only the connecting link to it.",
      answer_cn: "可以得出「有共同祖先」的结论：教材说，只有在具有共同祖先的情况下，蛋白质的氨基酸序列才会彼此相似——这正是序列知识能揭示演化史的原因。但不能据此断定功能相似——序列比较本身并不测量蛋白质做什么。功能取决于三维结构，而序列只是通往它的连接环节。"
    }
  ],

  '2-2-2': [
    {
      type: 'mcq',
      q_en: "Why does the peptide bond define a flat AMIDE PLANE?",
      q_cn: "肽键为什么会界定出一个平的「酰胺平面」？",
      options: [
        "Because partial delocalisation of the carbonyl π-electrons and the nitrogen lone pair gives the C–N bond partial double-bond character, so it cannot rotate freely",
        "Because the hydrophobic effect flattens the backbone",
        "Because hydrogen bonds hold the successive residues in one plane",
        "Because the trans isomer is more stable than the cis isomer"
      ],
      answer: 0,
      optionRefs: { 2: '2-2-4' },
      optionNotes: {
        1: { en: "The hydrophobic effect is about the ordered water around nonpolar groups; it drives the molecule towards the smallest surface and a nonpolar core, not towards backbone geometry.", cn: "疏水效应关乎非极性基团周围有序排列的水；它把分子推向最小表面和非极性核心，而不是决定主链的几何形状。" },
        2: { en: "Hydrogen bonds are indeed among the forces holding the sections of a folded chain in position, but planarity here comes from bond order, not from bonding between residues.", cn: "氢键确实是把折叠链各片段固定在位的作用力之一，但这里的平面性来自键级，而不是残基之间的成键。" },
        3: { en: "Trans predominance in globular proteins is a CONSEQUENCE of the restricted rotation, not its cause; the cis form occurs practically only next to a proline residue.", cn: "球状蛋白中反式占优是旋转受限的**结果**，不是原因；顺式形式实际上只出现在脯氨酸残基旁边。" }
      },
      why_en: "The C–N bond in the peptide bond is 1.32 Å, between a single C–N (1.49 Å) and a double C=N (1.27 Å). That intermediate length is the signature of partial double-bond character, which arises from delocalisation of the carbonyl π-electrons together with the nitrogen's lone pair — and a bond with double-bond character cannot rotate freely. Hence the planar amide unit, and hence cis–trans isomerism.",
      why_cn: "肽键中的 C–N 键长为 1.32 Å，介于单键 C–N（1.49 Å）与双键 C=N（1.27 Å）之间。这个居中的键长正是部分双键性质的标志，它来自羰基 π 电子与氮孤对电子的离域——而具有双键性质的键不能自由旋转。于是有了平面的酰胺单元，也于是有了顺反异构。"
    },
    {
      type: 'mcq',
      q_en: "Which statement about the hydrophobic effect matches the textbook?",
      q_cn: "关于疏水效应，哪一说法与教材一致？",
      options: [
        "It is an attraction between nonpolar side chains that lowers the enthalpy of the molecule",
        "It is an intramolecular interaction whose essence is an INCREASE of entropy",
        "It drives the molecule to maximise its surface area",
        "It is a covalent cross-link between distant parts of the chain"
      ],
      answer: 1,
      optionRefs: { 3: '2-2-3' },
      optionNotes: {
        0: { en: "The driving force is not attraction between the chains but the water around them: burying nonpolar groups disrupts the regular arrangement of the water molecules held in order around them.", cn: "推动力不是链与链之间的吸引，而是它们周围的水：把非极性基团埋起来，就破坏了原本围绕它们规则排列的水分子结构。" },
        2: { en: "Exactly reversed. One of the effect's two manifestations is that the molecule tends towards the SMALLEST possible surface.", cn: "正好说反了。这一效应的两种表现之一，就是分子倾向于形成**尽可能小**的表面。" },
        3: { en: "Covalent cross-links between distant parts of the chain are the disulfide bridges, whose placement this textbook counts as part of the primary structure.", cn: "链上相距很远的部分之间的共价交联指的是二硫桥，本教材把它的位置算作一级结构的一部分。" }
      },
      why_en: "The textbook defines the hydrophobic effect as an intramolecular interaction whose essence is the increase of entropy resulting from disruption of the regular arrangement of water molecules around hydrophobic particles. It shows itself in two ways: the molecule tends towards the smallest possible surface, and the nonpolar chains interact mutually to create a nonpolar core.",
      why_cn: "教材把疏水效应定义为一种分子内相互作用，其本质是疏水颗粒周围水分子规则排列被破坏所带来的熵增。它有两种表现：分子趋向于形成尽可能小的表面，以及非极性链彼此相互作用形成非极性核心。"
    },
    {
      type: 'short',
      q_en: "What restricts rotation in the polypeptide backbone, and what does that restriction do to the number of shapes the chain can take?",
      q_cn: "多肽主链中的旋转受到什么限制？这种限制对肽链可能采取的构象数目有什么影响？",
      accept: ["double bond", "delocal", "rotate", "plane", "双键", "旋转"],
      answer_en: "The C–N bond of the peptide bond has partial double-bond character, from delocalisation of the carbonyl π-electrons and the nitrogen lone pair, and therefore cannot rotate freely. The backbone is consequently not a floppy string but a row of flat rigid amide planes hinged only at the α-carbons, so far fewer conformations are open to the chain than its length would suggest — which is what makes a defined conformation attainable at all. The same restriction produces cis–trans isomerism, with trans predominating in globular proteins and cis occurring practically only next to a proline residue.",
      answer_cn: "肽键中的 C–N 键因羰基 π 电子与氮孤对电子的离域而具有部分双键性质，因此不能自由旋转。于是主链不是一根软绳，而是一排平的刚性酰胺平面、只在 α 碳处有铰链，肽链可采取的构象数远少于其长度所暗示的——而这正是「确定构象」得以存在的前提。同样的限制也带来顺反异构：球状蛋白中反式占优，顺式实际上只出现在脯氨酸残基旁边。"
    }
  ],

  '2-2-3': [
    {
      type: 'mcq',
      q_en: "Quaternary structure is spoken of only when:",
      q_cn: "只有在什么情况下才谈四级结构？",
      options: [
        "the protein consists of more than one peptide chain",
        "the chain is arranged into two or more compact globular regions joined by a flexible segment",
        "the chain contains both α-helical and β-structure sections",
        "disulfide bridges are present"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Those compact globular regions are DOMAINS, 100–400 residues each, and a single chain can carry several of them without there being any quaternary structure at all.", cn: "那些紧密的球状区域是**结构域**，每个 100–400 个残基；一条链上可以有好几个结构域，却完全不存在四级结构。" },
        2: { en: "Sections of α-helix and β-structure are elements of secondary structure; a cluster of them — the βαβ motif, the αα unit, the β-meander — is supersecondary structure.", cn: "α-螺旋和 β-结构的片段是二级结构的要素；它们的「簇」——βαβ 基序、αα 单元、β-曲折——属于超二级结构。" },
        3: { en: "This textbook counts the placement of disulfide bridges as part of the PRIMARY structure, together with the sequence.", cn: "本教材把二硫桥的位置连同序列一起算作**一级**结构。" }
      },
      why_en: "Quaternary structure concerns proteins built of more than one peptide chain — of subunits, which may be the same or different — and it describes their spatial arrangement and the character of their contact. Those contact sites are often important for biological activity: in antibodies the antigen-binding site is formed by parts of chains belonging to both the H and the L subunits.",
      why_cn: "四级结构针对的是由一条以上肽链（亚基，可相同也可不同）构成的蛋白质，描述亚基的空间排布及其接触的性质。这些接触部位常常对生物活性至关重要：在抗体中，抗原结合位点由分属 H 链和 L 链两类亚基的肽链部分共同构成。"
    },
    {
      type: 'mcq',
      q_en: "The βαβ motif is an example of which level of organisation?",
      q_cn: "βαβ 基序属于哪一个组织层次的例子？",
      options: ["Secondary structure", "Supersecondary structure", "Tertiary structure", "A domain"],
      answer: 1,
      optionNotes: {
        0: { en: "The elements of secondary structure are the α-helix, the β-structure and the collagen helix — the individual regular arrangements, not groupings of them.", cn: "二级结构的要素是 α-螺旋、β-结构和胶原螺旋——是单个的规则排布，而不是它们的组合。" },
        2: { en: "Tertiary structure is about the spatial arrangement of residues far apart in the linear sequence, and the textbook admits the secondary/tertiary boundary is sometimes hard to define.", cn: "三级结构讲的是在线性序列中相距很远的残基的空间排布；教材也承认二级与三级的界限有时难以界定。" },
        3: { en: "A domain is a compact globular region of 100–400 residues joined to the rest of the chain by a flexible segment — a much larger unit than a motif.", cn: "结构域是 100–400 个残基的紧密球状区域，通过链的柔性片段与其余部分相连——比一个基序大得多。" }
      },
      why_en: "Supersecondary structure names clusters of individual sections of secondary structure. The βαβ motif — two sections of β-structure separated by a section in α-helical arrangement — is the one the textbook singles out; Obr. 2.15 shows it alongside the αα unit and the β-meander.",
      why_cn: "超二级结构指的是二级结构各个片段的「簇」。教材单独点出的是 βαβ 基序——两段 β-结构中间隔以一段 α-螺旋排布的肽链；图 2.15 把它与 αα 单元和 β-曲折并列展示。"
    },
    {
      type: 'short',
      q_en: "Distinguish a DOMAIN from a SUBUNIT.",
      q_cn: "区分「结构域」与「亚基」。",
      accept: ["subunit", "flexible segment", "compact", "100", "亚基", "柔性"],
      answer_en: "A subunit is a separate peptide chain: a protein made of more than one chain has quaternary structure, which describes how the subunits are arranged in space and how they contact one another, and the subunits may be the same or different. A domain lies one level down, inside a single chain: it is a compact globular region, 100 to 400 amino acid residues in size, connected to the next such region by a flexible segment of the same chain. So one chain may carry several domains without any quaternary structure existing at all.",
      answer_cn: "亚基是一条独立的肽链：由一条以上肽链构成的蛋白质才有四级结构，四级结构描述亚基如何在空间排布、彼此如何接触，亚基可以相同也可以不同。结构域则低一个层次，位于**同一条链内部**：它是一个紧密的球状区域，大小为 100 至 400 个氨基酸残基，通过同一条链的柔性片段与下一个这样的区域相连。因此一条链上可以有好几个结构域，却完全不存在四级结构。"
    }
  ],

  '2-2-4': [
    {
      type: 'mcq',
      q_en: "Which is the textbook's example of a GLOBULAR protein converted into a FIBRILLAR one?",
      q_cn: "教材举的「球状蛋白转变为纤维状蛋白」的例子是哪一个？",
      options: [
        "Keratin stretched to double its length when a hair is wetted and heated",
        "Fibroin laid down as silk fibre",
        "Fibrinogen turning into fibrin during blood clotting",
        "Collagen"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Keratin is fibrillar to begin with. Wetting and heating releases the hydrogen bonds of its α-helix so the chains can take up a β-parallel arrangement — a change of secondary structure inside a fibrous protein.", cn: "角蛋白本来就是纤维状的。润湿加热释放了 α-螺旋的氢键，使肽链能转成 β-平行排布——这是纤维状蛋白内部二级结构的改变。" },
        1: { en: "Fibroin is a fibrous protein from the start: its high content of small residues (glycine, alanine, serine) allows the regular β-antiparallel arrangement.", cn: "丝心蛋白一开始就是纤维状蛋白：小残基（甘氨酸、丙氨酸、丝氨酸）含量高，使规则的 β-反平行排布成为可能。" },
        3: { en: "Collagen is named as the third representative of the fibrillar proteins, its spatial arrangement having been described in section 2.2.2.", cn: "胶原被列为纤维状蛋白的第三个代表，其空间排布已在 2.2.2 节中描述。" }
      },
      why_en: "A globular protein can be converted into a fibrillar one forming a mechanically firm structure, and the textbook's example is the formation of fibrin from the globular, soluble fibrinogen during blood clotting. It is the cleanest illustration that fibrous versus globular is a division of labour — load-bearing versus chemistry — and not a fixed taxonomy.",
      why_cn: "球状蛋白可以转变为纤维状蛋白、形成机械上坚固的结构，教材举的例子就是血液凝固过程中由可溶的球状纤维蛋白原生成纤维蛋白。这是最干净的例证，说明「纤维状 vs 球状」是分工——承力还是做化学——而不是固定的分类。"
    },
    {
      type: 'mcq',
      q_en: "In mammalian keratin, what is the PROTOFIBRIL?",
      q_cn: "在哺乳动物角蛋白中，「原原纤维」指的是什么？",
      options: [
        "A left-handed four-stranded 'cable' formed by two pairs of parallel-running α-helices",
        "A regular β-antiparallel sheet built from glycine, alanine and serine",
        "A globule with sections of regular structure alternating with random coil",
        "A bundle of disulfide bridges linking neighbouring chains"
      ],
      answer: 0,
      optionRefs: { 3: '2-2-3' },
      optionNotes: {
        1: { en: "That is fibroin, the protein of silk fibre: a high content of small amino acid residues allows the planar formations with β-antiparallel secondary structure.", cn: "那是丝心蛋白，即蚕丝纤维的蛋白质：小分子氨基酸残基含量高，使具有 β-反平行二级结构的平面构造成为可能。" },
        2: { en: "That describes a globular protein, in which α- or β-type sections alternate with sections of random coil.", cn: "那描述的是球状蛋白，其中 α 型或 β 型片段与无规卷曲片段交替出现。" },
        3: { en: "Disulfide bonds are one of the forces holding the sections of a chain in position, and this book counts their placement in the primary structure — but the protofibril is defined by how the helices are wound.", cn: "二硫键是把链的各片段固定在位的作用力之一，本教材还把它的位置算作一级结构——但原原纤维是由螺旋的缠绕方式定义的。" }
      },
      why_en: "Keratin, the basic protein of the vertebrate body surface, has the α-helix as its basic secondary structure in mammals, and two pairs of parallel-running helices twist together into a left-handed four-stranded cable, the protofibril. The hierarchy matters: a change at the level of the hydrogen bonds holding those helices is what lets a wetted, heated hair stretch to double its length.",
      why_cn: "角蛋白是脊椎动物体表的基本蛋白质，在哺乳动物中其基本二级结构是 α-螺旋，两对平行走向的螺旋缠绕成左手四股缆索，即原原纤维。这个层级关系很重要：正是维系这些螺旋的氢键层面上的改变，才让润湿加热后的头发能被拉长到两倍。"
    },
    {
      type: 'short',
      q_en: "How does a globular protein behave in dilute solution, and how does that differ from a fibrillar protein?",
      q_cn: "球状蛋白在稀溶液中如何存在？这与纤维状蛋白有何不同？",
      accept: ["individual", "independent", "aggregate", "单个", "聚集"],
      answer_en: "In dilute solution globular proteins exist as individual, mutually independent molecules, whereas fibrillar proteins are aggregates of many parallel-oriented molecules cross-linked into macroscopic fibres. Within the single globular molecule the individual sections of the chain are held in position by disulfide bonds, ionic interactions, hydrogen bonds, van der Waals forces and the hydrophobic effect.",
      answer_cn: "在稀溶液中，球状蛋白以单个、彼此独立的分子形式存在；纤维状蛋白则是许多平行取向的分子交联成宏观纤维后的聚集体。在单个球状分子内部，肽链的各个片段靠二硫键、离子相互作用、氢键、范德华力和疏水效应保持在各自的位置上。"
    }
  ],

  '2-2-5': [
    {
      type: 'mcq',
      q_en: "The glycoproteins of blood group substances and of mucins carry their saccharide attached:",
      q_cn: "血型物质糖蛋白和黏蛋白糖蛋白中，糖是如何连接上去的？",
      options: [
        "N-glycosidically, via the amide nitrogen of asparagine",
        "O-glycosidically, via the hydroxyl group of serine or threonine",
        "Predominantly to hydroxyproline or hydroxylysine",
        "As glycosaminoglycans covalently bound to the protein"
      ],
      answer: 1,
      optionRefs: { 3: '7-4-2' },
      optionNotes: {
        0: { en: "N-glycosidic attachment via the amide nitrogen of asparagine is the mode whose typical representatives are the glycoproteins of blood serum.", cn: "经由天冬酰胺酰胺氮的 N-糖苷连接，其典型代表是血清糖蛋白。" },
        2: { en: "That is collagen, which carries D-galactose, or a disaccharide of D-galactose and D-glucose, bound predominantly to hydroxyproline or hydroxylysine.", cn: "那是胶原：它带有 D-半乳糖，或含 D-半乳糖与 D-葡萄糖的二糖，主要结合在羟脯氨酸或羟赖氨酸上。" },
        3: { en: "Glycosaminoglycans covalently bound to protein define the proteoglycans, which are components of connective tissue — a separate subgroup, not a linkage type.", cn: "共价结合于蛋白质的糖胺聚糖定义的是蛋白聚糖，它是结缔组织的组分——那是一个单独的亚类，而不是一种连接方式。" }
      },
      why_en: "The textbook separates the two linkage types by which side chain does the joining: N-glycosidic through the amide nitrogen of asparagine (serum glycoproteins), O-glycosidic through the hydroxyl of serine or threonine (blood group substances, mucins). Both fall under group (a), the proteins with shorter, very often branched oligosaccharide chains.",
      why_cn: "教材按「由哪个侧链完成连接」把两种连接方式分开：N-糖苷经由天冬酰胺的酰胺氮（血清糖蛋白），O-糖苷经由丝氨酸或苏氨酸的羟基（血型物质、黏蛋白）。两者都属于 (a) 组，即带较短、常为分支寡糖链的蛋白质。"
    },
    {
      type: 'mcq',
      q_en: "In eukaryotic phosphoproteins, how is the phosphate group attached?",
      q_cn: "在真核生物的磷蛋白中，磷酸基是如何连接的？",
      options: [
        "Covalently, most often by an ester bond to the hydroxyl of serine, threonine or tyrosine",
        "To the imidazole group of histidine",
        "As part of a complex with porphyrin",
        "Non-covalently, as an ion pair with a positively charged side chain"
      ],
      answer: 0,
      optionRefs: { 2: '6-3-1', 3: '3-7' },
      optionNotes: {
        1: { en: "Imidazole is named in this node in a different context: the carboxyl, imidazole and sulfhydryl groups are the ones that form complexes with heavy metals, which is how metalloproteins arise.", cn: "咪唑在本节点出现于另一处语境：羧基、咪唑基和巯基是能与重金属形成配合物的基团，金属蛋白正是这样产生的。" },
        2: { en: "A complex of an Fe ion with porphyrin is heme, the component of the hemoproteins — the oxygen carriers, cytochromes and heme enzymes.", cn: "铁离子与卟啉形成的配合物是血红素，即血红素蛋白（氧载体、细胞色素、血红素酶）的组分。" },
        3: { en: "Non-covalent binding of a component does occur among conjugated proteins in general, but the phosphate of a eukaryotic phosphoprotein is bound covalently. Reversibility comes from kinases and phosphatases removing it, not from weak binding.", cn: "结合蛋白质中确实存在以非共价方式结合组分的情况，但真核磷蛋白的磷酸是共价结合的。它的可逆性来自激酶与磷酸酶把它装上卸下，而不是来自弱结合。" }
      },
      why_en: "Phosphate is bound covalently, most often as an ester to the hydroxyl group of serine, threonine or tyrosine. It is the one component that goes on and comes off again — phosphorylation by protein kinases is exactly why phosphoproteins play so large a part in regulation of the cell cycle and in cell signalling — and phosphoproteins additionally have a depot function, as in phosvitin of egg yolk with about 100 phosphate residues per chain.",
      why_cn: "磷酸是共价结合的，最常见的是与丝氨酸、苏氨酸或酪氨酸的羟基形成酯键。它是唯一能装上去又卸下来的组分——蛋白激酶催化的磷酸化，正是磷蛋白在细胞周期调控和细胞信号转导中占如此重要地位的原因；此外磷蛋白还有储存功能，例如卵黄的卵黄高磷蛋白，每条肽链约含 100 个磷酸残基。"
    },
    {
      type: 'mcq',
      q_en: "In FeS proteins, how is the iron bound?",
      q_cn: "在铁硫蛋白中，铁是怎样结合的？",
      options: [
        "In complex with porphyrin",
        "In complex with –SH groups and sulfide ions",
        "Bound with high affinity by a blood plasma protein for transport",
        "Stored as ferric ions up to 30 % of the protein's mass"
      ],
      answer: 1,
      optionRefs: { 0: '6-3-1' },
      optionNotes: {
        0: { en: "An Fe ion complexed with porphyrin is heme — the hemoproteins, i.e. the oxygen carriers, cytochromes and heme enzymes.", cn: "铁离子与卟啉形成的配合物是血红素——对应血红素蛋白，即氧载体、细胞色素和血红素酶。" },
        2: { en: "That is transferrin, the blood plasma protein that binds Fe³⁺ with high affinity and transports it; ceruloplasmin does the same job for copper.", cn: "那是转铁蛋白，一种以高亲和力结合并转运 Fe³⁺ 的血浆蛋白；铜蓝蛋白对铜起同样的作用。" },
        3: { en: "That is ferritin, Mr 46 000, the iron depot protein, which releases Fe³⁺ when needed.", cn: "那是铁蛋白，Mr = 46 000，铁的储存蛋白，需要时释放 Fe³⁺。" }
      },
      why_en: "In FeS proteins the iron is bound in complex with –SH groups and sulfide ions. Such complexes were demonstrated in bacterial and plant ferredoxins and are significant in biological oxidation–reduction reactions. Keeping the four iron-holding arrangements apart — FeS, heme, transport (transferrin), depot (ferritin) — is what this section is really testing.",
      why_cn: "在铁硫蛋白中，铁与 –SH 基和硫离子形成配合物。这类配合物已在细菌和植物的铁氧还蛋白中得到证实，在生物氧化还原反应中具有重要意义。把四种「装铁」的方式分清楚——铁硫、血红素、转运（转铁蛋白）、储存（铁蛋白）——才是本节真正要考的。"
    },
    {
      type: 'short',
      q_en: "What is heme, and which three groups of hemoproteins does the textbook name?",
      q_cn: "血红素是什么？教材点名了哪三类血红素蛋白？",
      accept: ["porphyrin", "oxygen carrier", "cytochrome", "卟啉", "细胞色素"],
      answer_en: "Heme is the complex of an Fe ion with porphyrin. The textbook contrasts it with the complexes of metal ions and the functional groups of amino acids, which fall apart when the peptide chain is cleaved — heme is a distinct, self-contained component. The hemoproteins it names are the oxygen carriers, the cytochromes and the heme enzymes.",
      answer_cn: "血红素是铁离子与卟啉形成的配合物。教材把它与「金属离子和氨基酸官能团形成的配合物」相对照——后者在肽链断裂时即解体，而血红素是一个独立完整的组分。教材点名的血红素蛋白有三类：氧载体、细胞色素和血红素酶。"
    }
  ],

  '2-2-6': [
    {
      type: 'mcq',
      q_en: "Why does the sedimentation coefficient alone not give the relative molecular mass?",
      q_cn: "为什么单凭沉降系数得不到相对分子质量？",
      options: [
        "Because s increases with Mr but not in direct proportion, so the Svedberg equation with D, v̄ and ρ is needed",
        "Because s is expressed in seconds while Mr is a dimensionless ratio",
        "Because sedimentation sorts molecules by charge rather than by mass",
        "Because protein solutions are polydisperse"
      ],
      answer: 0,
      optionRefs: { 2: '2-1-2' },
      optionNotes: {
        1: { en: "The unit is not the difficulty. One svedberg is simply defined as 10⁻¹³ s; the problem is the form of the relationship between s and Mr.", cn: "问题不在单位。1 斯维德贝格不过是定义为 10⁻¹³ 秒；难点在于 s 与 Mr 之间关系的形式。" },
        2: { en: "Separation by charge is what the electromigration methods do, and what makes electrophoresis work at all is the pH-dependent charge and the differing isoelectric points.", cn: "按电荷分离是电迁移方法所做的事；而电泳之所以行得通，靠的是随 pH 变化的电荷和各不相同的等电点。" },
        3: { en: "The opposite: protein solutions are homodisperse, which is precisely how they differ from ordinary colloidal solutions and why they resemble true solutions.", cn: "恰恰相反：蛋白质溶液是均分散的，这正是它们与普通胶体溶液的区别所在，也正因如此它们才类似真溶液。" }
      },
      why_en: "The sedimentation coefficient rises with Mr but not proportionally, so Mr has to be computed with the Svedberg equation, Mr = R·T·s / [D·(1 − v̄·ρ)], which brings in the diffusion coefficient, the partial specific volume and the density of the solvent. The practical consequence worth remembering is that S values do not add: a 30S and a 50S subunit make a 70S particle, not an 80S one.",
      why_cn: "沉降系数随 Mr 增大，但不成正比，所以必须用斯维德贝格方程 Mr = R·T·s / [D·(1 − v̄·ρ)] 来计算，其中引入了扩散系数、偏比容和溶剂密度。值得记住的实际推论是：S 值不能相加——30S 加 50S 得到的是 70S 颗粒，而不是 80S。"
    },
    {
      type: 'mcq',
      q_en: "In an ultracentrifuge, how do protein molecules move and what is the rate proportional to?",
      q_cn: "在超速离心机中，蛋白质分子如何运动？其速率与什么成正比？",
      options: [
        "Away from the centre of rotation, at a rate proportional to the centrifugal acceleration",
        "Towards the centre of rotation, because they are lighter than the solvent",
        "They stay in place while the solvent is driven outwards",
        "They separate according to their isoelectric points"
      ],
      answer: 0,
      optionRefs: { 3: '2-1-2' },
      optionNotes: {
        1: { en: "Direction and reason both reversed: protein molecules are heavier than water, so they sink slowly to the bottom of the cell, i.e. away from the centre.", cn: "方向和理由都反了：蛋白质分子比水重，所以缓慢沉向池底，也就是远离旋转中心的方向。" },
        2: { en: "What is measured is the movement of the protein molecules themselves — dx/dt, the path travelled in the direction of the centrifugal acceleration per unit time.", cn: "被测量的正是蛋白质分子自身的移动——dx/dt，即单位时间内沿离心加速度方向所行的路程。" },
        3: { en: "Sorting by isoelectric point is the principle of ion-exchange chromatography and electrophoresis, methods that act on charge, not on sedimentation.", cn: "按等电点分离是离子交换色谱和电泳的原理，这些方法作用于电荷，而不是沉降。" }
      },
      why_en: "Protein molecules are heavier than water, so under centrifugal force they travel away from the centre of rotation, and the sedimentation rate dx/dt is proportional to the centrifugal acceleration: dx/dt = s·ω²·x, where x is the distance from the centre, ω the angular velocity and s the sedimentation coefficient in svedberg units.",
      why_cn: "蛋白质分子比水重，因此在离心力作用下朝远离旋转中心的方向移动，沉降速度 dx/dt 与离心加速度成正比：dx/dt = s·ω²·x，其中 x 为距旋转中心的距离，ω 为角速度，s 为以斯维德贝格为单位的沉降系数。"
    },
    {
      type: 'short',
      q_en: "What do protein solutions have in common with colloidal solutions, and in what respect do they differ?",
      q_cn: "蛋白质溶液与胶体溶液有哪些共同之处？又在哪一点上不同？",
      accept: ["Tyndall", "coagulation", "homodisperse", "丁达尔", "均分散"],
      answer_en: "Because of their high relative molecular mass, protein molecules in solution are comparable with the particles of inorganic colloids, so protein solutions share some colloidal properties: the Tyndall effect, gel formation, coagulation. They differ in that colloids are polydisperse systems while protein solutions are homodisperse — the particles are uniform — and in that respect they resemble true solutions.",
      answer_cn: "由于相对分子质量高，溶液中的蛋白质分子可与无机胶体粒子相比拟，因此蛋白质溶液具有一些胶体性质：丁达尔效应、凝胶形成、凝聚。不同之处在于，胶体是多分散体系，而蛋白质溶液是均分散体系——粒子是均一的——就这一点而言它们更像真溶液。"
    }
  ],

  /* ===================== Chapter 3 ===================== */

  '3-1': [
    {
      type: 'mcq',
      q_en: "The reaction hexose + ATP → hexose-phosphate + ADP is catalysed by ATP:hexose-phosphotransferase (hexokinase). Which main class is that?",
      q_cn: "反应「己糖 + ATP → 己糖磷酸 + ADP」由 ATP:己糖-磷酸转移酶（己糖激酶）催化。它属于哪一大类？",
      options: [
        "Class 1 — oxidoreductases",
        "Class 2 — transferases",
        "Class 3 — hydrolases",
        "Class 6 — ligases (synthetases)"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Oxidoreductases catalyse transfer of electrons or hydrogen, or reaction with oxygen; their systematic name has the pattern donor:acceptor-oxidoreductase.", cn: "氧化还原酶催化电子或氢的转移，或与氧的反应；其系统名格式为「供体:受体-氧化还原酶」。" },
        2: { en: "Hydrolases catalyse hydrolytic reactions, and their subclasses are formed according to the type of bond hydrolysed. Here nothing is cleaved by water.", cn: "水解酶催化水解反应，其亚类按所水解键的类型划分。这里没有任何键是被水打断的。" },
        3: { en: "The trap: ligases also consume ATP. But a ligase FORMS a bond with simultaneous hydrolysis of the macroergic compound (X + Y + ATP → X–Y + ADP + Pᵢ), whereas here a phosphate group is simply transferred from one molecule to another.", cn: "这里是陷阱：连接酶同样消耗 ATP。但连接酶是在高能化合物水解的同时**形成**一个键（X + Y + ATP → X–Y + ADP + Pᵢ），而这里只是把一个磷酸基从一个分子转移到另一个分子上。" }
      },
      why_en: "The six classes sort by the kind of chemistry, not by which molecule appears in the equation. Here a group — the phosphate — moves from a donor (ATP) to an acceptor (the hexose), which is the definition of class 2, and the systematic name announces it: donor:acceptor group-transferase.",
      why_cn: "六大类是按化学反应的类型来分的，不是按方程里出现了哪个分子。这里是一个基团（磷酸）从供体（ATP）转移到受体（己糖），这正是第 2 类的定义，而系统名也把它写明了：供体:受体 基团-转移酶。"
    },
    {
      type: 'mcq',
      q_en: "Which class catalyses non-hydrolytic, non-oxidative cleavage of bonds, often with formation of a double bond?",
      q_cn: "哪一类酶催化键的非水解、非氧化断裂，且常伴随双键的生成？",
      options: [
        "Hydrolases (class 3)",
        "Lyases / synthases (class 4)",
        "Isomerases (class 5)",
        "Oxidoreductases (class 1)"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Hydrolases cleave with water — that is exactly the case class 4 is defined to exclude. They are among the longest-known enzymes and many keep non-systematic names.", cn: "水解酶靠水断键——这正是第 4 类定义中要排除的情形。水解酶属于最早为人所知的酶，其中许多仍沿用非系统名称。" },
        2: { en: "Isomerases catalyse isomerisations; the textbook's example is fumarate ⇌ maleate, catalysed by fumarate cis-trans-isomerase.", cn: "异构酶催化异构化；教材举的例子是延胡索酸 ⇌ 马来酸，由延胡索酸顺反异构酶催化。" },
        3: { en: "Oxidoreductases are the oxidative case, again excluded by the definition of class 4.", cn: "氧化还原酶对应的是氧化的情形，同样被第 4 类的定义排除在外。" }
      },
      why_en: "Class 4, the lyases or synthases, is defined negatively — cleavage that is neither hydrolytic nor oxidative — and typically leaves a double bond behind, or conversely adds to one. The textbook's example is oxalate carboxy-lyase (oxalate decarboxylase): (COOH)₂ → HCOOH + CO₂.",
      why_cn: "第 4 类（裂合酶／合酶）是用否定的方式定义的——既不是水解、也不是氧化的断裂——通常会留下一个双键，或者反过来对双键加成。教材举的例子是草酸羧基裂合酶（草酸脱羧酶）：(COOH)₂ → HCOOH + CO₂。"
    },
    {
      type: 'mcq',
      q_en: "'Lactate dehydrogenase' is which of the three designations an enzyme receives?",
      q_cn: "「乳酸脱氢酶」属于一个酶所获得的三种称谓中的哪一种？",
      options: [
        "The systematic name",
        "The recommended name",
        "The code number",
        "The subclass"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The systematic name characterises the catalysed reaction and is usually long and complicated; here it is L-lactate:NAD⁺-oxidoreductase.", cn: "系统名表征所催化的反应，通常又长又复杂；此处是 L-乳酸:NAD⁺-氧化还原酶。" },
        2: { en: "The code number identifies the enzyme unambiguously: E.C. 1.1.1.27.", cn: "编码号是明确识别该酶的标识：E.C. 1.1.1.27。" },
        3: { en: "The subclass is the second of the four numbers — here, oxidation of a primary alcoholic group. It is a position in the code, not a name.", cn: "亚类是四个数字中的第二个——此处指伯醇基的氧化。它是编码中的一个位置，不是名称。" }
      },
      why_en: "Each enzyme gets three things: a systematic name that describes the reaction, a recommended name used in everyday practice, and a code number that identifies it unambiguously. Lactate dehydrogenase is the short working name; L-lactate:NAD⁺-oxidoreductase and E.C. 1.1.1.27 are the other two designations of the same enzyme.",
      why_cn: "每种酶都获得三样东西：描述反应的系统名、日常使用的推荐名，以及能明确识别它的编码号。乳酸脱氢酶是简短的实用名称；L-乳酸:NAD⁺-氧化还原酶和 E.C. 1.1.1.27 是同一种酶的另外两种称谓。"
    },
    {
      type: 'short',
      q_en: "Explain what each of the four numbers of an E.C. code means, using 1.1.1.27 as the example.",
      q_cn: "以 1.1.1.27 为例，解释 E.C. 编码中四个数字各自的含义。",
      accept: ["main class", "subclass", "acceptor", "serial", "亚类", "受体"],
      answer_en: "The first number is the main class of enzymes — here class 1, the oxidoreductases. The second is the subclass, in this case oxidation of a primary alcoholic group. The third determines the type of hydrogen acceptor, here an enzyme cooperating with the nicotinamide coenzymes. The fourth is the serial number of the concrete enzyme within that sub-subgroup. So E.C. 1.1.1.27 is lactate dehydrogenase, systematically L-lactate:NAD⁺-oxidoreductase, catalysing L-lactate + NAD⁺ ⇌ pyruvate + NADH + H⁺.",
      answer_cn: "第一个数字是酶的大类——此处为第 1 类，氧化还原酶。第二个是亚类，本例中为伯醇基的氧化。第三个确定氢受体的类型，这里是与烟酰胺辅酶协同工作的酶。第四个是该酶在所属次亚类中的序号。所以 E.C. 1.1.1.27 就是乳酸脱氢酶，系统名 L-乳酸:NAD⁺-氧化还原酶，催化 L-乳酸 + NAD⁺ ⇌ 丙酮酸 + NADH + H⁺。"
    }
  ],

  '3-2': [
    {
      type: 'mcq',
      q_en: "Which coenzyme transfers an ALDEHYDE group, and which vitamin does it correspond to?",
      q_cn: "哪种辅酶转移**醛**基？它对应哪种维生素？",
      options: [
        "Coenzyme A — pantothenic acid",
        "TPP — thiamin",
        "Pyridoxal phosphate — pyridoxin (B₆)",
        "NADP⁺ — nicotinic acid"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Coenzyme A carries an ACYL group and corresponds to pantothenic acid.", cn: "辅酶 A 运载的是**酰基**，对应泛酸。" },
        2: { en: "Pyridoxal phosphate carries the –NH₂ group and corresponds to pyridoxin (B₆).", cn: "磷酸吡哆醛运载的是 –NH₂ 基，对应吡哆醇 (B₆)。" },
        3: { en: "NADP⁺, like NAD⁺, FMN, FAD and coenzyme Q, carries H⁺ and e⁻; its vitamin is nicotinic acid.", cn: "NADP⁺ 与 NAD⁺、FMN、FAD、辅酶 Q 一样运载 H⁺ 和 e⁻；其对应维生素是烟酸。" }
      },
      why_en: "Tab. 3.1 pairs each coenzyme with the group it transfers and the vitamin it comes from. TPP (thiamine pyrophosphate) is the aldehyde carrier, from thiamin. The table is best learnt as three columns read together, because the group transferred is what tells you what kind of reaction the enzyme is doing.",
      why_cn: "表 3.1 把每种辅酶与它所转移的基团、以及它来自的维生素配成一组。TPP（焦磷酸硫胺素）是醛基的载体，来自硫胺素。这张表最好三列一起读，因为「所转移的基团」就告诉了你这个酶在做哪一类反应。"
    },
    {
      type: 'mcq',
      q_en: "Removing the cofactor from a holoenzyme leaves what behind?",
      q_cn: "把辅因子从全酶中除去，剩下的是什么？",
      options: [
        "The apoenzyme — the protein part of the enzyme",
        "A prosthetic group",
        "A metalloenzyme",
        "A coenzyme that kinetically behaves as a substrate"
      ],
      answer: 0,
      optionRefs: { 3: '3-3-2' },
      optionNotes: {
        1: { en: "A prosthetic group is a coenzyme bound to the apoenzyme very strongly — it is part of what you removed, not what remains.", cn: "辅基是与脱辅基酶结合得非常牢固的辅酶——它属于被除去的那一部分，而不是剩下的部分。" },
        2: { en: "A metalloenzyme is an enzyme that HAS a metal ion as its cofactor, e.g. Zn²⁺ in alcohol dehydrogenase; stripping the cofactor is what makes it stop being one.", cn: "金属酶是**带有**金属离子作为辅因子的酶，例如乙醇脱氢酶中的 Zn²⁺；把辅因子剥掉，它才不再是金属酶。" },
        3: { en: "Weakly bound coenzymes do behave kinetically as substrates — that is exactly why a reaction with a nicotinamide coenzyme counts as a two-substrate reaction — but again, this is the removed component.", cn: "弱结合的辅酶在动力学上确实表现得像底物——这正是含烟酰胺辅酶的反应算作双底物反应的原因——但它同样属于被除去的那一部分。" }
      },
      why_en: "The catalytically active protein–cofactor complex is the holoenzyme; the protein part left after removal of the cofactor is the apoenzyme. Remember also that the cofactors are thermally stable while the protein part is not, so heat destroys the activity and leaves the cofactor intact.",
      why_cn: "具有催化活性的蛋白质-辅因子复合物是全酶；除去辅因子后剩下的蛋白质部分是脱辅基酶（酶蛋白）。另外记住：辅因子是热稳定的，而蛋白质部分不是——所以加热会毁掉活性，辅因子却完好无损。"
    },
    {
      type: 'mcq',
      q_en: "Why are most coenzymes structurally related to vitamins?",
      q_cn: "为什么大多数辅酶在结构上与维生素相关？",
      options: [
        "Because vitamins are themselves enzymes",
        "Because vitamins are organic substances indispensable for the life functions of cells that must be supplied to the organism with food, and the coenzymes are built from them",
        "Because vitamins act as bridges binding the substrate to the enzyme",
        "Because vitamins, like the protein part of an enzyme, are thermally labile"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Vitamins are not catalysts. The catalyst is the holoenzyme; the vitamin supplies the chemistry of the coenzyme, which acts as an intermediary carrier of the transferred group.", cn: "维生素不是催化剂。催化剂是全酶；维生素提供的是辅酶那一小段化学结构，而辅酶充当被转移基团的中间载体。" },
        2: { en: "Acting as a bridge binding the substrate to the enzyme is one of the three functions of a METAL ion in an enzyme, the others being part of the active centre and stabiliser of the spatial structure.", cn: "作为把底物结合到酶上的桥梁，是**金属离子**在酶中三种作用方式之一，另两种是构成活性中心的一部分、以及稳定空间结构。" },
        3: { en: "Reversed: it is the cofactors that are thermally stable and the protein part that is not.", cn: "说反了：热稳定的是辅因子，不耐热的是蛋白质部分。" }
      },
      why_en: "Coenzymes are mostly molecules corresponding in structure to vitamins or their derivatives, and vitamins are by definition organic substances the organism cannot do without and cannot make for itself — they have to arrive with food. The practical consequence is that a missing vitamin takes out every enzyme whose coenzyme is built from it, which is why the third column of Tab. 3.1 is worth learning.",
      why_cn: "辅酶多为结构上与维生素或其衍生物相对应的分子，而维生素按定义就是机体不可缺少、又无法自行合成的有机物——只能随食物进来。实际后果是：缺一种维生素，就等于同时废掉所有以它为原料构建辅酶的酶，这正是表 3.1 第三列值得记住的原因。"
    },
    {
      type: 'short',
      q_en: "What does the textbook say about catalysts that are not proteins?",
      q_cn: "关于「不是蛋白质的催化剂」，教材是怎么说的？",
      accept: ["ribonucleic", "RNA", "catalytic", "核糖核酸", "催化"],
      answer_en: "All enzymes known until recently were of protein nature. Research of roughly the last twenty years shows that some other types of macromolecule can also have a certain catalytic ability, but so far only the case of one ribonucleic acid is described. So the definition of an enzyme as a specialised protein still holds as the working rule, with one documented exception rather than a whole class of them.",
      answer_cn: "直到不久前，所知的全部酶都是蛋白质性质的。近约二十年的研究表明，某些其他类型的大分子也可能具有一定的催化能力，但迄今只描述了一种核糖核酸的情形。所以「酶是特化的蛋白质」这一定义作为工作规则仍然成立，只是有一个有据可查的例外，而不是一整类例外。"
    }
  ],

  '3-3-1': [
    {
      type: 'mcq',
      q_en: "On the Lineweaver–Burk plot as printed in this textbook, what is the intercept on the 1/v axis?",
      q_cn: "在本教材所印的 Lineweaver–Burk 图上，1/v 轴上的截距是什么？",
      options: ["K_m / V_lim", "1 / V_lim", "V_lim", "K_m"],
      answer: 1,
      optionNotes: {
        0: { en: "That is the SLOPE of the same line. Equation (7) is 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim, so slope and intercept are the two things it gives you.", cn: "那是同一条直线的**斜率**。方程 (7) 是 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim，斜率和截距正是它给出的两个量。" },
        2: { en: "V_lim itself is read directly off the Cornish-Bowden and Eisenthal direct linear plot, where the coordinates of the intersection of the asymptotes are K_m and V_max. On a double-reciprocal plot everything is a reciprocal.", cn: "V_lim 本身是从 Cornish-Bowden 与 Eisenthal 的直接线性作图上直接读出的——那里双曲线渐近线交点的坐标就是 K_m 和 V_max。而在双倒数图上，一切都是倒数。" },
        3: { en: "K_m appears directly, as −K_m on the [A] axis, on the direct linear plot (Obr. 3.4) — not as an intercept of the double-reciprocal line.", cn: "K_m 直接出现在直接线性作图（图 3.4）上，即 [A] 轴上的 −K_m——而不是双倒数直线的截距。" }
      },
      why_en: "Equation (7) as printed is 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim: the equation of a straight line whose slope is K_m/V_lim and whose intercept on the 1/v axis is 1/V_lim. That is the whole point of the transformation — a hyperbola is hard to extrapolate by eye, a straight line is not.",
      why_cn: "书中所印的方程 (7) 是 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim：一条直线的方程，斜率为 K_m/V_lim，在 1/v 轴上的截距为 1/V_lim。这正是这一变换的意义所在——双曲线难以靠肉眼外推，直线则不难。"
    },
    {
      type: 'mcq',
      q_en: "According to the textbook, how does a catalyst accelerate a reaction?",
      q_cn: "按教材，催化剂是怎样加速反应的？",
      options: [
        "By raising the energy of the reactant molecules so that they can overcome the barrier",
        "By joining temporarily with the reactants, so that the reaction proceeds by another mechanism with lower activation energy",
        "By exciting the molecules so that the reaction follows a different reaction coordinate",
        "By shifting the position of the equilibrium towards the products"
      ],
      answer: 1,
      optionRefs: { 3: '1-5' },
      optionNotes: {
        0: { en: "That is HEATING, the first of the three ways of accelerating a reaction — and the one organisms cannot use, because they are mostly thermolabile.", cn: "那是**加热**，是加速反应的三条途径中的第一条——也正是生物体用不了的一条，因为它们大多热不稳定。" },
        2: { en: "That is excitation by electromagnetic radiation, the third way; the reaction then usually proceeds along a different reaction coordinate.", cn: "那是被电磁辐射激发，即第三条途径；此时反应通常沿另一条反应坐标进行。" },
        3: { en: "Whether a reaction can go at all is decided by the difference in Gibbs energy between starting substances and products, and that is not a kinetic quantity — ΔG says nothing about rate, and the catalyst says nothing about possibility.", cn: "一个反应到底能不能进行，是由起始物与产物之间的吉布斯能之差决定的，那不是动力学量——ΔG 不谈速率，而催化剂不谈可能性。" }
      },
      why_en: "The catalyst — in organisms, the enzyme — temporarily joins with the reactants so that the reaction proceeds by another mechanism with lower activation energy. Obr. 3.1 draws exactly this: the uncatalysed path over one barrier, and the catalysed path through the complex AK over two lower ones.",
      why_cn: "催化剂——在生物体内即酶——暂时与反应物结合，使反应沿另一条活化能更低的机制进行。图 3.1 画的正是这件事：未催化的路径翻过一个高能垒，催化的路径经由复合物 AK 翻过两个更低的能垒。"
    },
    {
      type: 'short',
      q_en: "What notation does this textbook use for the substrate, the product and the maximal rate, and how does it differ from most English textbooks?",
      q_cn: "本教材对底物、产物和最大速率使用什么记号？与多数英文教材有何不同？",
      accept: ["V_lim", "V_max", "EA", "E + A"],
      answer_en: "The substrate is written A rather than S, the product X rather than P, and the maximal rate V_lim rather than V_max, so the scheme of the simplest enzyme reaction reads E + A ⇌ EA → E + X. This matters in an oral exam: the same equations look unfamiliar in the other notation, and K_m is the one symbol that stays the same in both.",
      answer_cn: "底物写作 A 而不是 S，产物写作 X 而不是 P，最大速率写作 V_lim 而不是 V_max，所以最简单的酶反应式写成 E + A ⇌ EA → E + X。这在口试里是有影响的：同样的方程换一套记号就显得陌生，而 K_m 是两套记号中唯一不变的符号。"
    }
  ],

  '3-3-2': [
    {
      type: 'mcq',
      q_en: "In a ping-pong mechanism, when is the FIRST product released?",
      q_cn: "在乒乓机制中，第一个产物是在什么时候释放的？",
      options: [
        "When the binary complex with the first substrate breaks down, giving the modified enzyme E′ — before the second substrate binds",
        "When the ternary complex EAB breaks down",
        "Only after the enzyme has been regenerated",
        "At the same moment as the second product"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "No ternary complex arises at all in a ping-pong mechanism — that is its defining feature. EAB belongs to mechanism (a), in its random or ordered variant.", cn: "乒乓机制中根本不形成三元复合物——这正是它的决定性特征。EAB 属于机制 (a)，即无序型或有序型。" },
        2: { en: "Regeneration is the END of the cycle: E′ reacts with the second substrate B, gives the second product Y, and only then is the enzyme back to E.", cn: "再生发生在循环的**末尾**：E′ 与第二种底物 B 反应，生成第二个产物 Y，酶这时才回到 E。" },
        3: { en: "The two products leave in two separate half-reactions, which is what 'ping-pong' names: X first, then Y.", cn: "两个产物是在两个分开的半反应中离开的，这正是「乒乓」这个名字的含义：先是 X，然后才是 Y。" }
      },
      why_en: "The enzyme reacts with substrate A; the binary complex that forms breaks down, releasing the first product X and leaving a modified enzyme E′. Only then does E′ react with the second substrate B, forming a second binary complex E′B, giving the second product Y and regenerating the enzyme. At no point are both substrates held at once.",
      why_cn: "酶先与底物 A 反应；所形成的二元复合物分解，释放第一个产物 X，并留下一个修饰过的酶 E′。此后 E′ 才与第二种底物 B 反应，形成第二个二元复合物 E′B，生成第二个产物 Y 并使酶再生。全过程中从未同时抓住两个底物。"
    },
    {
      type: 'mcq',
      q_en: "An enzyme binds its two substrates in a strict, obligatory order to form EAB. Which mechanism is that?",
      q_cn: "某酶按严格的、强制性的顺序结合两种底物，形成 EAB。这是哪种机制？",
      options: [
        "The random (neuspořádaný) ternary-complex mechanism",
        "The ordered (uspořádaný) ternary-complex mechanism",
        "The ping-pong mechanism",
        "The simple two-step mechanism E + A ⇌ EA → E + X"
      ],
      answer: 1,
      optionRefs: { 3: '3-3-1' },
      optionNotes: {
        0: { en: "In the random variant the order of binding of the substrates to the enzyme does not matter — the ternary complex is the same, the route to it is free.", cn: "无序型中，底物结合到酶上的顺序无关紧要——三元复合物是同一个，只是到达它的路径不受限制。" },
        2: { en: "In the ping-pong mechanism no ternary complex arises at all; the enzyme is transiently modified to E′ between the two half-reactions.", cn: "乒乓机制中根本不形成三元复合物；酶在两个半反应之间被暂时修饰为 E′。" },
        3: { en: "That is the one-substrate case, the scheme for which the Michaelis–Menten equation holds; two-substrate reactions are the complication this section adds.", cn: "那是单底物情形，也就是米氏方程成立的那个反应式；双底物反应正是本节所增加的复杂性。" }
      },
      why_en: "Both substrates bound simultaneously means a ternary complex, mechanism (a); a strict order of binding makes it the ordered variant rather than the random one. The distinction that actually carries information is the earlier one: ternary complex or no ternary complex, i.e. whether the enzyme must hold both substrates at once to make them react.",
      why_cn: "两种底物同时结合意味着形成三元复合物，即机制 (a)；结合遵循严格顺序则说明是有序型而非无序型。真正带信息量的区分其实在上一层：有没有三元复合物，也就是酶是否必须同时抓住两个底物才能让它们反应。"
    },
    {
      type: 'short',
      q_en: "Follow the enzyme itself through a complete ping-pong reaction: what happens to it at each stage?",
      q_cn: "跟踪酶自身走完一个完整的乒乓反应：每个阶段它发生了什么？",
      accept: ["modified", "binary", "regenerat", "修饰", "再生"],
      answer_en: "The enzyme E reacts with the first substrate A, forming a binary complex. That complex breaks down with formation of the first product X, and the enzyme is left chemically modified, as E′. The modified enzyme E′ then reacts with the second substrate B, giving a second binary complex E′B, and finally the second product Y — and in that step the enzyme is regenerated to its original form. No ternary complex arises at any point, which is what distinguishes this from the mechanisms in which both substrates are bound simultaneously.",
      answer_cn: "酶 E 先与第一种底物 A 反应，形成一个二元复合物。该复合物分解，生成第一个产物 X，同时酶被化学修饰、变成 E′。修饰酶 E′ 随后与第二种底物 B 反应，生成第二个二元复合物 E′B，最终生成第二个产物 Y——就在这一步中酶被再生为原来的形式。全过程中从不出现三元复合物，这正是它与「两种底物同时结合」那类机制的区别。"
    }
  ],

  '3-3-3': [
    {
      type: 'mcq',
      q_en: "One katal is:",
      q_cn: "1 开特 (katal) 是指：",
      options: [
        "the amount of enzyme converting 1 μmol of substrate per minute",
        "the amount of enzyme converting 1 mol of substrate per second, i.e. 6·10⁷ U",
        "10⁻¹³ s",
        "one unit of activity per milligram of protein"
      ],
      answer: 1,
      optionRefs: { 2: '2-2-6' },
      optionNotes: {
        0: { en: "That is the standard unit U, measured at the enzyme's pH optimum and at 25 °C.", cn: "那是标准单位 U，在酶的 pH 最适值和 25 °C 下测定。" },
        2: { en: "10⁻¹³ s is one svedberg, the unit of the sedimentation coefficient — a quantity about size, not about catalytic activity.", cn: "10⁻¹³ 秒是 1 斯维德贝格，即沉降系数的单位——那是关于大小的量，不是关于催化活性的。" },
        3: { en: "Activity per amount of protein (U/mg) is the SPECIFIC activity, which measures the purity of a preparation rather than an amount of enzyme.", cn: "单位蛋白质量的活性 (U/mg) 是**比活性**，衡量的是制剂的纯度，而不是酶的数量。" }
      },
      why_en: "The katal is the SI unit: the amount of enzyme converting 1 mol of substrate in 1 second, so 1 kat = 6·10⁷ U. The two units measure the same thing on wildly different scales, which is why the practical literature stays with U.",
      why_cn: "开特是国际单位制单位：每秒转化 1 mol 底物所需的酶量，因此 1 kat = 6·10⁷ U。两个单位衡量的是同一件事，只是尺度相差极大——这也是实际文献仍然沿用 U 的原因。"
    },
    {
      type: 'mcq',
      q_en: "Which quantity measures the CATALYTIC ABILITY of an enzyme, and was formerly called the turnover number?",
      q_cn: "哪一个量衡量酶的**催化能力**，且旧称「转换数」？",
      options: [
        "Specific activity, U per mg of protein",
        "Concentration, U per ml",
        "Molecular activity, the number of substrate molecules converted by one enzyme molecule per minute",
        "The Michaelis constant K_m"
      ],
      answer: 2,
      optionRefs: { 3: '3-3-1' },
      optionNotes: {
        0: { en: "Specific activity is the measure of the PURITY of an enzyme preparation: the more of the protein present is the enzyme you want, the higher it is.", cn: "比活性是酶制剂**纯度**的量度：样品中的蛋白质里属于目标酶的比例越高，它就越大。" },
        1: { en: "Activity per unit volume is simply how the concentration of an enzyme is expressed — a statement about how much is in the tube.", cn: "单位体积的活性只是酶浓度的表示方式——说的是管子里有多少酶。" },
        3: { en: "K_m is the substrate concentration at half the maximal rate; a low K_m means high affinity of the enzyme for its substrate, which is a different property from how fast it works once loaded.", cn: "K_m 是速率达到最大值一半时的底物浓度；K_m 小表示酶对底物的亲和力高，这与「装上底物之后干得多快」是两种不同的性质。" }
      },
      why_en: "Molecular activity (MA), formerly the turnover number, is the number of substrate molecules converted by one enzyme molecule in one minute, and it can be determined from V and the molecular mass of the enzyme. Note how the three related quantities answer three different questions: how much enzyme (U/ml), how pure (U/mg), how good (MA).",
      why_cn: "分子活性 (MA)，旧称转换数，是一个酶分子每分钟所转化的底物分子数，可由 V 与酶的分子质量求得。注意这三个相关的量回答的是三个不同的问题：有多少酶（U/ml）、有多纯（U/mg）、有多强（MA）。"
    },
    {
      type: 'short',
      q_en: "Why is the amount of an enzyme usually expressed as an activity rather than in grams or moles?",
      q_cn: "为什么酶的数量通常用活性来表示，而不用克或摩尔？",
      accept: ["pure", "molecular mass", "assumption", "纯品", "分子质量"],
      answer_en: "Because expressing it in grams or moles, as for any other substance, requires two assumptions: that the enzyme is pure and that its molecular mass is known. In practice often neither is fulfilled, so what is measured instead is what the sample DOES — the amount of substrate it converts per unit time under standard conditions, which is the definition of the unit U.",
      answer_cn: "因为像对其他物质那样用克或摩尔表示，需要两个前提：酶是纯品，而且分子质量已知。实际工作中这两点常常都不满足，于是改为测量这份样品**能做什么**——在标准条件下单位时间内转化多少底物，这正是单位 U 的定义。"
    }
  ],

  '3-4': [
    {
      type: 'mcq',
      q_en: "The pH optimum of an enzyme need not coincide with the pH at which it works in the organism. What does the textbook conclude from this?",
      q_cn: "酶的 pH 最适值不一定与它在生物体内工作时的 pH 一致。教材由此得出什么结论？",
      options: [
        "That the influence of pH is one of the tools of regulation of enzyme activity and of cell metabolism",
        "That the measured optimum is an artefact of the experimental arrangement",
        "That such enzymes are permanently denatured in vivo",
        "That the enzyme must therefore be a regulatory, allosteric enzyme"
      ],
      answer: 0,
      optionRefs: { 3: '3-7' },
      optionNotes: {
        1: { en: "It is the TEMPERATURE optimum whose value depends on the arrangement of the experiment, because it is the resultant of two opposing processes.", cn: "取决于实验设置方式的是**温度**最适值，因为它是两个相反过程共同作用的结果。" },
        2: { en: "Denaturation is the thermal effect: above a critical temperature it prevails and the rate begins to fall. A pH away from the optimum lowers activity, which is a different and reversible matter.", cn: "变性说的是温度效应：超过临界温度后它占上风，速率开始下降。pH 偏离最适值会降低活性，那是另一回事，而且是可逆的。" },
        3: { en: "Allosteric enzymes are regulated by non-covalent binding of a specific metabolite at a site distinct from the active centre — a different regulatory mechanism, not a consequence of the pH mismatch.", cn: "别构酶是通过特定代谢物在不同于活性中心的部位上非共价结合来调节的——那是另一种调节机制，不是 pH 不匹配的推论。" }
      },
      why_en: "The mismatch is not a flaw but a lever. Because activity depends on H⁺ concentration and the optimum need not be the physiological pH, shifting the local pH becomes a way of turning an enzyme, and hence a pathway, up or down — which is why the textbook lists pH among the tools of regulation of cell metabolism.",
      why_cn: "这种不匹配不是缺陷，而是一个杠杆。既然活性依赖于 H⁺ 浓度、而最适值又不必等于生理 pH，那么改变局部 pH 就成了把一个酶（进而把一条通路）调高或调低的手段——这正是教材把 pH 列入细胞代谢调节手段的原因。"
    },
    {
      type: 'mcq',
      q_en: "Besides acting on the enzyme itself, in what other way can the pH of the environment affect the reaction?",
      q_cn: "除了作用于酶本身，环境的 pH 还可能通过什么方式影响反应？",
      options: [
        "It may influence the dissociation of the substrate",
        "It lowers the activation energy of the reaction",
        "It shifts the temperature optimum",
        "It binds at the allosteric site"
      ],
      answer: 0,
      optionRefs: { 1: '3-3-1', 3: '3-7' },
      optionNotes: {
        1: { en: "Lowering the activation energy is what the catalyst does, by joining the reactants temporarily so the reaction runs by another mechanism.", cn: "降低活化能是催化剂做的事——它暂时与反应物结合，使反应沿另一种机制进行。" },
        2: { en: "The temperature optimum is the resultant of the rate increase with temperature and the thermal denaturation of the enzyme; it is a separate balance, not something pH sets.", cn: "温度最适值是「速率随温度上升」与「酶的热变性」两者的合力结果；那是另一套平衡，不是由 pH 设定的。" },
        3: { en: "Binding at a special site distinct from the active centre is what an allosteric modulator does — a specific metabolite, not the hydrogen ion.", cn: "结合到不同于活性中心的特殊部位上，是别构调节物做的事——那是特定的代谢物，不是氢离子。" }
      },
      why_en: "The essence of the pH effect is the acid-base character of the enzyme molecule, above all of the active centre. But the textbook adds that pH may also influence the dissociation of the substrate, so a measured pH curve mixes two contributions — one from the catalyst and one from what it has to bind.",
      why_cn: "pH 影响的本质是酶分子（首先是活性中心）的酸碱特性。但教材补充说，pH 也可能影响**底物**的解离——所以实测的 pH 曲线里混合了两份贡献：一份来自催化剂，一份来自它要结合的东西。"
    },
    {
      type: 'short',
      q_en: "Raising the temperature normally speeds a reaction up. Why does an enzyme reaction slow down above a certain temperature?",
      q_cn: "升高温度通常会加快反应。那么为什么酶反应超过一定温度后反而变慢？",
      accept: ["denatur", "critical", "twofold", "变性", "临界"],
      answer_en: "Two opposing processes run at once. The rate of most reactions, enzyme reactions included, rises about twofold for every 10 °C. But above a critical value the thermal denaturation of the protein catalyst prevails, and the rate of the enzyme reaction begins to fall. The temperature optimum is simply where the two trends cross, which is why its value depends on the arrangement of the experiment. Most enzymes are inactivated around 55–60 °C, though some, mostly from thermophilic bacteria, are active even at 85 °C.",
      answer_cn: "有两个方向相反的过程在同时进行。多数反应（包括酶反应）的速率每升温 10 °C 约增加一倍。但超过某个临界值后，蛋白质催化剂的热变性占了上风，酶反应速率开始下降。所谓温度最适值，不过是这两股趋势交叉的地方——所以它的数值取决于实验的设置方式。多数酶在 55–60 °C 左右失活，不过有些酶（多来自嗜热细菌）在 85 °C 下仍有活性。"
    }
  ],

  '3-5': [
    {
      type: 'mcq',
      q_en: "The section discusses only inhibitors. What does it say about activators?",
      q_cn: "本节只讨论抑制剂。那么它对激活剂是怎么说的？",
      options: [
        "That activators do not occur in cells",
        "That everything said about inhibitors holds for activators too, only in the opposite sense",
        "That activators are by definition allosteric modulators",
        "That activators act only by covalent modification of the enzyme"
      ],
      answer: 1,
      optionRefs: { 2: '3-7', 3: '3-7' },
      optionNotes: {
        0: { en: "Both exist. Modulators are substances that influence the rate of an enzyme reaction by interacting with the catalyst; those that raise it are activators, those that lower it inhibitors. Inhibitors are simply commoner in practice.", cn: "两者都存在。调节物是通过与催化剂相互作用来影响酶反应速率的物质；使速率提高的是激活剂，使之降低的是抑制剂。只是抑制剂在实践中更常见。" },
        2: { en: "Allosteric modulation is one specific mechanism — non-covalent binding of a specific metabolite at a site distinct from the active centre — and a modulator there may act in either direction. It is not the definition of an activator.", cn: "别构调节只是一种具体机制——特定代谢物在不同于活性中心的部位上非共价结合——而且那里的调节物可以往两个方向起作用。它不是激活剂的定义。" },
        3: { en: "Covalent modification defines the other class of regulatory enzymes; the modulators discussed here interact with the catalyst without that being assumed.", cn: "共价修饰定义的是另一类调节酶；这里讨论的调节物只是与催化剂相互作用，并不预设共价修饰。" }
      },
      why_en: "The textbook states plainly that it treats inhibitors because they occur in practice much more often, but that all the data hold for activators as well, only in the opposite sense. Reading the section that way doubles what it teaches for free.",
      why_cn: "教材明说：之所以讲抑制剂，是因为它们在实践中出现得频繁得多，但所有内容对激活剂同样成立，只是意义相反。按这个方式读，这一节能白赚一倍的内容。"
    },
    {
      type: 'mcq',
      q_en: "Reversible inhibitors are divided into kinetic types in principle according to:",
      q_cn: "从原则上说，可逆抑制剂划分为不同动力学类型的依据是：",
      options: [
        "whether the inhibitor is structurally similar to the substrate",
        "which form of the enzyme the inhibitor interacts with — free E, giving EI, or the complex EA, giving EAI",
        "whether the inhibitor binds covalently",
        "whether K_m or V_max is the quantity that changes on the graph"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Structural similarity to the substrate is a chemical description of certain inhibitors, not the criterion the kinetic classification uses.", cn: "与底物结构相似是对某些抑制剂的化学描述，不是这套动力学分类所用的判据。" },
        2: { en: "Very firm, mostly covalent binding that modifies the enzyme's functional groups is IRREVERSIBLE inhibition, which falls outside this classification altogether — the Michaelis–Menten equation does not even hold for it.", cn: "非常牢固的、通常是共价的结合并修饰酶的官能团，那是**不可逆**抑制，根本不在这套分类之内——对它连米氏方程都不成立。" },
        3: { en: "Those are the experimental consequences, not the criterion: non-competitive inhibition, for instance, shows as a decrease of V_max with K_m unchanged.", cn: "那些是实验上的**结果**，不是判据：例如非竞争性抑制表现为 V_max 降低而 K_m 不变。" }
      },
      why_en: "Because reversible inhibitors bind by weak interactions, the Michaelis–Menten equation still applies, and the enzyme exists in an equilibrium of forms. The classification then follows the only structural question that matters kinetically: does the inhibitor grab the free enzyme E, the enzyme–substrate complex EA, or both — and if both, with equal strength or not? That last case is mixed inhibition, where K_i ≠ K_i′.",
      why_cn: "由于可逆抑制剂以弱相互作用结合，米氏方程依然适用，而酶则处在几种形式的平衡之中。于是分类就依据动力学上唯一要紧的结构问题：抑制剂抓的是游离酶 E、酶-底物复合物 EA，还是两者都抓——若两者都抓，强度是否相同？最后这种情形就是混合型抑制，此时 K_i ≠ K_i′。"
    },
    {
      type: 'mcq',
      q_en: "What is irreversible inhibition used for, and where does the textbook say it turns up outside the laboratory?",
      q_cn: "不可逆抑制有什么用途？教材说它在实验室之外出现在什么地方？",
      options: [
        "For studying the structure of enzymes; some chemical warfare agents act as irreversible inhibitors of enzymes of nervous tissue",
        "For obtaining data on substrate specificity and the structure of the active centre",
        "As the basis of feedback regulation of intermediary metabolism",
        "As the mechanism by which most drugs act"
      ],
      answer: 0,
      optionRefs: { 2: '3-7' },
      optionNotes: {
        1: { en: "Valuable data on substrate specificity and the structure of the active centre come from REVERSIBLE inhibitors, which bind by weak interactions and leave the enzyme intact.", cn: "关于底物特异性和活性中心结构的宝贵数据，来自**可逆**抑制剂——它们以弱相互作用结合，不破坏酶本身。" },
        2: { en: "Feedback regulation runs on reversible inhibition by specific metabolites; irreversible inhibition destroys the enzyme, which is no way to run a control loop.", cn: "反馈调节靠的是特定代谢物的可逆抑制；不可逆抑制会毁掉酶，那不可能拿来做控制回路。" },
        3: { en: "The textbook links the action of some drugs to reversible inhibition of enzymes by specific metabolites, not to irreversible inhibition.", cn: "教材把某些药物的作用与「特定代谢物对酶的可逆抑制」联系起来，而不是与不可逆抑制。" }
      },
      why_en: "An irreversible inhibitor binds very firmly, mostly covalently, modifies the enzyme's functional groups and inactivates it — which is precisely why it is useful for probing structure, and precisely why the Michaelis–Menten equation fails, since the concentration of active enzyme is itself changing. Chemical warfare agents acting on enzymes of nervous tissue are the textbook's real-world case.",
      why_cn: "不可逆抑制剂非常牢固地、通常以共价方式结合，修饰酶的官能团并使之失活——这正是它可用于探查结构的原因，也正是米氏方程失效的原因，因为有活性的酶本身的浓度在变。教材举的现实例子是作用于神经组织中酶的化学战剂。"
    },
    {
      type: 'short',
      q_en: "What is non-competitive inhibition: where does the inhibitor act, what happens on the graph, and what is the textbook's example?",
      q_cn: "什么是非竞争性抑制：抑制剂作用在哪里？图形上有什么表现？教材举的例子是什么？",
      accept: ["outside the active centre", "V_max", "heavy metal", "活性中心之外", "重金属"],
      answer_en: "The inhibitor is usually a substance that interacts with functional groups lying outside the active centre of the enzyme, but which are nevertheless necessary for preserving catalytic activity. Experimentally it shows as a decrease of V_max while K_m does not change. The textbook's example is heavy metal ions, which inhibit SH-enzymes non-competitively. Its general case is mixed inhibition, where everything just said still applies except that the inhibitor's interaction with E and with EA is no longer the same, i.e. K_i ≠ K_i′.",
      answer_cn: "抑制剂通常是与酶**活性中心之外**的官能团发生相互作用的物质，而这些基团对保持催化活性又是必需的。实验上表现为 V_max 降低而 K_m 不变。教材举的例子是重金属离子对巯基酶的非竞争性抑制。它的一般情形是混合型抑制：上面说的一切仍然成立，只是抑制剂与 E 和与 EA 的相互作用不再相同，即 K_i ≠ K_i′。"
    }
  ],

  '3-6': [
    {
      type: 'mcq',
      q_en: "What does the urease example demonstrate, and with what number?",
      q_cn: "脲酶的例子说明了什么？用的是什么数字？",
      options: [
        "That enzymes are specific — urease acts on urea and on nothing else",
        "That enzymes are highly efficient — urease raises the rate of hydrolysis of urea 10¹⁴-fold compared with catalysis by hydrogen ions",
        "That enzymes lower the activation energy by 10¹⁴ kJ per mole",
        "That reactions in the cell need high temperature to run at a useful rate"
      ],
      answer: 1,
      optionRefs: { 2: '3-3-1' },
      optionNotes: {
        0: { en: "Specificity is the OTHER significant property of enzymes, and it has two forms — substrate specificity and specificity of action. The urease number illustrates efficiency, not specificity.", cn: "特异性是酶的**另一个**显著性质，而且有两种形式——底物特异性和作用特异性。脲酶那个数字说明的是效率，不是特异性。" },
        2: { en: "The figure is a ratio of rates, not an energy. What catalysis does to activation energy is lower it by letting the reaction run through the enzyme–substrate complex by another mechanism.", cn: "这个数字是速率之比，不是能量。催化对活化能的作用，是让反应经由酶-底物复合物走另一种机制，从而把活化能降低。" },
        3: { en: "The opposite is the textbook's point: thanks to enzymes, most reactions in the cell proceed in dilute solutions, at low temperature and at neutral pH.", cn: "教材的论点恰恰相反：正因为有酶，细胞内多数反应才能在稀溶液中、低温下、中性 pH 下进行。" }
      },
      why_en: "High efficiency is the second significant property of enzymes, after specificity, and urease is the textbook's measured case: 10¹⁴-fold acceleration of urea hydrolysis over catalysis by hydrogen ions. (Worth knowing that the raw OCR of this page dropped the exponent and rendered it as 10-fold; the value was re-read from the page image.) The consequence is the one that matters for physiology: the cell can run its chemistry in dilute solution, cold and neutral.",
      why_cn: "高效率是酶继特异性之后的第二个显著性质，脲酶是教材给出的实测例子：与氢离子催化相比，尿素水解速率提高 10¹⁴ 倍。（值得一提：该页的原始 OCR 把指数整个丢掉了，识别成 10 倍；这个数值是从页面图像重新读出的。）它带来的推论对生理学最要紧：细胞可以在稀溶液、低温、中性条件下完成自己的化学。"
    },
    {
      type: 'mcq',
      q_en: "In the chymotrypsin example of covalent catalysis, what is formed in the FIRST step?",
      q_cn: "在胰凝乳蛋白酶这个共价催化的例子中，第一步生成的是什么？",
      options: [
        "The acetylated enzyme E–O–CO–CH₃, together with nitrophenol as the first product",
        "Free enzyme E–OH and acetic acid",
        "A ternary complex of the enzyme with both substrates",
        "A complex at a site outside the active centre"
      ],
      answer: 0,
      optionRefs: { 2: '3-3-2', 3: '3-7' },
      optionNotes: {
        1: { en: "Those are the products of the SECOND step: the acetylated enzyme reacts with water, giving back E–OH and releasing acetic acid as the second product.", cn: "那是**第二步**的产物：乙酰化的酶与水反应，交还 E–OH 并释放乙酸作为第二个产物。" },
        2: { en: "A ternary complex, in which both substrates are bound simultaneously, belongs to the classification of two-substrate mechanisms — a kinetic description, not this chemical one.", cn: "两种底物同时结合的三元复合物，属于双底物机制的分类——那是动力学描述，不是这里的化学描述。" },
        3: { en: "A site distinct from the active centre is the allosteric site, where a modulating metabolite binds; catalysis itself happens in the active centre.", cn: "不同于活性中心的部位是别构部位，供调节代谢物结合；催化本身发生在活性中心。" }
      },
      why_en: "Covalent catalysis means that not only the enzyme–substrate complex is transiently formed but also a very reactive, unstable, covalently modified enzyme. In the chymotrypsin scheme the enzyme's –OH is acetylated, nitrophenol leaves as the first product, and only then does water hydrolyse the acetylated enzyme, giving acetic acid as the second product and restoring E–OH.",
      why_cn: "共价催化的意思是：暂时形成的不只是酶-底物复合物，还有一种反应性很强、不稳定的共价修饰酶。在胰凝乳蛋白酶的反应式里，酶的 –OH 被乙酰化，硝基酚作为第一个产物离开；此后水才把乙酰化的酶水解，生成第二个产物乙酸，并使 E–OH 复原。"
    },
    {
      type: 'short',
      q_en: "What two kinds of specificity does the textbook distinguish, and what does it say would happen without them?",
      q_cn: "教材区分了哪两种特异性？它说如果没有特异性会发生什么？",
      accept: ["substrate specificity", "specificity of action", "flooded", "底物特异性", "作用特异性"],
      answer_en: "Substrate specificity — an enzyme catalyses the conversion of only a certain substrate — and specificity of action, meaning the catalysed reaction proceeds only in a certain way. If it were not so, the cell would very quickly be flooded with undesirable products. The degree varies: some enzymes have practically absolute specificity and will not act even on molecules very similar to the substrate, while others attack a whole large group of substances sharing only certain structural features; most are stereospecific, and some can even distinguish two identical substituents on a non-chiral carbon.",
      answer_cn: "一是底物特异性——一种酶只催化特定底物的转变；二是作用特异性——所催化的反应只按特定方式进行。若非如此，细胞会很快被不需要的产物淹没。特异性的程度各不相同：有些酶的特异性实际上是绝对的，连与底物非常相似的分子都不作用；另一些则作用于只共有某些结构特征的一大类物质。多数酶具有立体特异性，有些甚至能分辨非手性碳上两个相同的取代基。"
    }
  ],

  '3-7': [
    {
      type: 'mcq',
      q_en: "What distinguishes the allosteric site from the active centre?",
      q_cn: "别构部位与活性中心的区别是什么？",
      options: [
        "It is a special place in the enzyme molecule, distinct from the active centre, into which the modulating metabolite binds",
        "It is where the substrate binds once the enzyme has been inhibited",
        "It binds its metabolite covalently",
        "It is the small region built from residues lying far apart in the primary structure"
      ],
      answer: 0,
      optionRefs: { 3: '3-6' },
      optionNotes: {
        1: { en: "The substrate keeps binding at the active centre. The whole point of allosteric control is that the control input arrives somewhere else entirely.", cn: "底物始终结合在活性中心。别构调控的要点恰恰在于：控制信号是从**完全另一个地方**进来的。" },
        2: { en: "Allosteric enzymes are defined by modulation through NON-covalent interaction with a specific metabolite. Covalent modification defines the other class of regulatory enzymes.", cn: "别构酶的定义是通过与特定代谢物的**非共价**相互作用受到调节。共价修饰定义的是另一类调节酶。" },
        3: { en: "That describes the ACTIVE CENTRE: a relatively small region in the tertiary structure, whose amino acids may be considerably distant from one another in the primary structure.", cn: "那描述的是**活性中心**：三级结构中一个相对较小的区域，而属于它的氨基酸在一级结构上可能彼此相距很远。" }
      },
      why_en: "An allosteric enzyme is one whose activity is modulated by non-covalent interaction with a specific metabolite, and that metabolite binds into a special place — the allosteric site — which is not where the substrate binds. Separating the control input from the catalytic site is what makes regulation possible without interfering with catalysis itself.",
      why_cn: "别构酶是指其活性通过与特定代谢物的非共价相互作用而被调节的酶，而该代谢物结合到一个特殊部位——别构部位——那不是底物结合的地方。把控制输入与催化部位分开，正是「既能调节、又不干扰催化本身」的前提。"
    },
    {
      type: 'mcq',
      q_en: "In a metabolic sequence A → B → C → D → E, which enzyme does the end product E typically modulate?",
      q_cn: "在代谢序列 A → B → C → D → E 中，终产物 E 通常调节哪一个酶？",
      options: [
        "The enzyme catalysing the last step, D → E",
        "The enzyme catalysing the first step, at whose beginning the allosteric enzyme acts",
        "None — E is a product, and products do not act as modulators",
        "The enzyme is modulated instead by its own substrate A, binding at the allosteric site"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Direction reversed. Feedback means the signal travels backwards along the sequence, from its end to its beginning.", cn: "方向反了。所谓反馈，就是信号沿着序列往回走，从末端回到起点。" },
        2: { en: "The textbook says the opposite: allosteric modulators are OFTEN the products of the metabolic sequence at whose beginning the allosteric enzyme acts.", cn: "教材说的正好相反：别构调节物**往往**正是某条代谢序列的产物，而别构酶恰好作用于该序列的起点。" },
        3: { en: "The substrate binds at the active centre; the modulator is a different metabolite binding at the allosteric site. Confusing the two collapses the distinction the whole mechanism rests on.", cn: "底物结合在活性中心；调节物是另一种代谢物，结合在别构部位。把两者混为一谈，整个机制赖以成立的区分就没有了。" }
      },
      why_en: "Allosteric modulators are often the products of the metabolic sequence at whose beginning the allosteric enzyme acts — so in A → B → C → D → E, the end product E modulates the enzyme catalysing the first step. That is the principle of feedback regulation, and its value is that a pathway senses its own output and throttles itself without needing a signal from outside.",
      why_cn: "别构调节物往往正是某条代谢序列的产物，而别构酶恰好作用于该序列的起点——所以在 A → B → C → D → E 中，是终产物 E 调节催化第一步的酶。这就是反馈调节的原理，它的价值在于：一条通路能感知自己的产出并自行收油门，不需要来自外部的信号。"
    },
    {
      type: 'short',
      q_en: "The activity of ALL enzymes can be influenced in the cell. Why, then, does the textbook single out a class called 'regulatory enzymes'?",
      q_cn: "细胞里**所有**酶的活性都可能被影响。那么教材为什么还要单独划出一类「调节酶」？",
      accept: ["allosteric", "covalent", "specific properties", "别构", "共价"],
      answer_en: "Because being influenceable is not the same as being built for control. Every enzyme's activity is affected by the pH of its environment, by the concentration of substrate or coenzyme, by the presence of an inhibitor or activator, and so on. Regulatory enzymes are those with specific properties that predestine them for a regulatory role in metabolism, and the textbook names two highly specialised kinds: the allosteric enzymes, modulated by non-covalent interaction with a specific metabolite at an allosteric site, and the covalently modulated enzymes.",
      answer_cn: "因为「会被影响」和「专门用来做控制」不是一回事。任何酶的活性都会受环境 pH、底物或辅酶浓度、抑制剂或激活剂的存在等因素影响。调节酶则是那些具有特殊性质、因而注定在代谢中承担调节作用的酶；教材点名了两类高度特化的酶：别构酶（通过特定代谢物在别构部位上的非共价相互作用被调节）和共价调节酶。"
    }
  ]

});

