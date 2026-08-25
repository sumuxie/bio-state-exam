/* =========================================================================
   JIRI BANK — Chapter 2b . Microbiology, written for this bank

   Hand-written here, NOT generated. data/ch2.js is rebuilt by tools/port.py
   and anything added to it is destroyed on the next run; this file is where
   new Microbiology nodes belong.

   The sheets ask far more microbiology than any existing corpus covers: both
   trainers work on yeast and on E. coli that arrives already pure in a tube,
   so the organism-level questions had no source node at all.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

{
  id: '2-2',
  chapter: 2,
  lecture: 'Micro',
  section: '2.2',
  slides: '卷一 Micro 1 · 卷三 Micro 1 · Micro 4（染色操作）· Micro 5（荚膜）',
  coverage: 'partial',
  enTitle: 'Gram-positive and Gram-negative — one wall difference that explains the stain, the antibiotic and the endotoxin',
  cnTitle: 'Gram 阳性与阴性——一处细胞壁差异，同时解释了染色、抗生素和内毒素',
  coverageNote: 'Written for this bank. Four sheet questions collapse onto one wall: the difference itself ' +
                '(Sheet 1 Micro 1 and Sheet 3 Micro 1 — one of the eleven cross-sheet repeats, so it is ' +
                'x3 weight), how to perform a Gram stain (Sheet 3 Micro 4), and the significance of the ' +
                'capsule (Sheet 3 Micro 5). The gap analysis found no titled node anywhere in 13 MB for ' +
                'the stain procedure or the capsule. Answer the wall first and the other three fall out ' +
                'of it, which is also how to survive a follow-up.',

  summary: {
    en: 'The whole answer hangs on one structural fact: Gram-positives have a thick peptidoglycan layer ' +
        'on the outside of the single membrane, and Gram-negatives have a thin one sandwiched between ' +
        'an inner and an outer membrane. Everything else is a consequence. The stain works because the ' +
        'crystal violet-iodine complex is trapped in thick peptidoglycan when alcohol dehydrates and ' +
        'closes it, while in Gram-negatives the alcohol dissolves the lipid-rich outer membrane and the ' +
        'thin layer cannot hold the complex, so it washes out and the safranin counterstain shows pink. ' +
        'The outer membrane is also a permeability barrier, which is why Gram-negatives are ' +
        'intrinsically resistant to several antibiotics that reach a Gram-positive target easily, and ' +
        'its lipopolysaccharide is endotoxin, which is why a Gram-negative infection can cause septic ' +
        'shock even after the cells are killed. The capsule sits outside all of this and is a separate ' +
        'layer with a separate job.',
    cn: '整个回答挂在一个结构事实上：Gram 阳性菌在唯一一层膜的外侧有厚的肽聚糖，Gram 阴性菌的肽聚糖很薄，夹在内膜与外膜之间。' +
        '其余全是推论。染色之所以成立，是因为乙醇脱水使厚肽聚糖收缩闭合，把结晶紫-碘复合物困住；而在 Gram 阴性菌里乙醇溶掉了富含脂质的外膜，' +
        '薄薄一层留不住复合物，被洗脱，于是复染的沙黄显出粉红。外膜同时是一道通透性屏障，这就是为什么 Gram 阴性菌对若干能轻易到达 ' +
        'Gram 阳性靶点的抗生素有固有抗性；而它的脂多糖就是内毒素，这又是为什么 Gram 阴性菌感染在细菌被杀死之后仍可能引起感染性休克。' +
        '荚膜位于这一切之外，是另一层，有另一份工作。'
  },

  mustKnow: 'Say the wall before you say the colour. **Gram-positive: thick peptidoglycan, one membrane, ' +
            'stains purple. Gram-negative: thin peptidoglycan between two membranes, stains pink.** The ' +
            'decolorisation step is the one that discriminates, and the outer membrane is what makes ' +
            'Gram-negatives both harder to kill and capable of causing endotoxic shock. ' +
            '先说墙，再说颜色。Gram 阳性：厚肽聚糖、一层膜、染成紫色；Gram 阴性：薄肽聚糖夹在两层膜之间、染成粉红。' +
            '脱色那一步才是做出区分的一步，而外膜既让 Gram 阴性菌更难杀死，也让它能引起内毒素性休克。',

  skipIt: 'Do not memorise stain concentrations, timings in seconds, or a species list of which organism ' +
          'is which. No examiner asks for the safranin concentration. Do not try to recite the full ' +
          'lipopolysaccharide structure either — lipid A is the toxic part, and that is the level ' +
          'required. 不用背染液浓度、以秒计的时间，或者哪个菌属于哪一类的物种清单。没有考官会问沙黄的浓度。' +
          '也不要试图背出完整的脂多糖结构——lipid A 是有毒的那一部分，讲到这个程度就够了。',

  explain: [
    {
      q: 'The alcohol step is called decolorisation. What is it actually doing, and why does it act in ' +
         'opposite directions on the two wall types? ' +
         '（乙醇那一步叫脱色。它究竟在做什么？为什么它对两种细胞壁的作用方向相反？）',
      a: 'It is doing **two different things because it meets two different structures.**\n\n' +
         'In a Gram-positive cell the alcohol dehydrates the thick peptidoglycan mesh, which shrinks ' +
         'and tightens. The crystal violet-iodine complex is a large aggregate and is physically ' +
         'trapped inside the closing mesh, so the cell stays purple.\n\n' +
         'In a Gram-negative cell the alcohol first dissolves the lipid-rich outer membrane, removing ' +
         'it as a barrier, and the peptidoglycan underneath is a thin layer with wide spacing that ' +
         'cannot retain the complex. It washes straight out and the cell is left colourless until ' +
         'safranin stains it pink.\n\n' +
         'This is **the only discriminating step in the procedure**, which is why over-decolorising ' +
         'turns Gram-positives into false negatives and is the commonest way to get the test wrong. ' +
         '（乙醇在做两件不同的事，因为它遇到的是两种不同的结构。在 Gram 阳性细胞里，它使厚肽聚糖网脱水，' +
         '网收缩变紧，结晶紫-碘复合物是一个大聚集体，被物理地困在正在闭合的网里，所以保持紫色。' +
         '在 Gram 阴性细胞里，它先溶掉富含脂质的外膜，这道屏障被移除，下面的肽聚糖只是薄薄一层、网眼很宽，' +
         '留不住复合物，于是被直接洗出，细胞变为无色，直到沙黄把它染成粉红。这是整个操作里唯一做出区分的一步，' +
         '也正因如此，脱色过度会把 Gram 阳性菌变成假阴性，这是把这个试验做错的最常见方式。）'
    },
    {
      q: 'Why are many antibiotics that work well on Gram-positives ineffective against Gram-negatives? ' +
         '（为什么许多对 Gram 阳性菌很有效的抗生素对 Gram 阴性菌无效？）',
      a: 'Because **the target is still there but the drug cannot reach it.**\n\n' +
         'Vancomycin binds the D-Ala-D-Ala terminus of peptidoglycan precursors, and Gram-negatives ' +
         'have peptidoglycan with the same terminus. But vancomycin is a large glycopeptide and ' +
         'cannot cross the outer membrane, whose porins admit only small hydrophilic molecules.\n\n' +
         'So the resistance is **intrinsic and structural rather than acquired**: nothing has to be ' +
         'mutated or transferred for it to hold. The same barrier is why Gram-negative infections ' +
         'narrow the useful drug list quickly, and why an agent that does get through — a ' +
         'fluoroquinolone acting on an intracellular target, for instance — is valuable. ' +
         '（因为靶点仍然在，但药到不了。万古霉素结合肽聚糖前体的 D-Ala-D-Ala 末端，Gram 阴性菌的肽聚糖有相同的末端；' +
         '但万古霉素是一个大的糖肽，无法穿过外膜，外膜的孔蛋白只放小的亲水分子通过。所以这种抗性是固有的、结构性的，' +
         '而不是获得性的：不需要任何突变或转移它就成立。同一道屏障也是为什么 Gram 阴性菌感染会迅速缩窄可用药物清单，' +
         '以及为什么一种确实能穿过去的药物——比如作用于胞内靶点的氟喹诺酮——很有价值。）'
    },
    {
      q: 'A patient deteriorates after antibiotic treatment kills a Gram-negative infection. Why can ' +
         'killing the bacteria make things worse? ' +
         '（抗生素杀死了 Gram 阴性菌感染之后，病人反而恶化。为什么杀死细菌可能让情况更糟？）',
      a: 'Because **the toxin is a structural component, not a secreted product.**\n\n' +
         'Lipopolysaccharide sits in the outer leaflet of the outer membrane, and its lipid A moiety ' +
         'is endotoxin. Lysing the cell releases it in bulk. Lipid A is recognised by TLR4 on host ' +
         'immune cells, which triggers a large cytokine response — fever, vasodilation, hypotension, ' +
         'and in the extreme septic shock.\n\n' +
         'The contrast worth drawing is with a Gram-positive **exotoxin**, which is a secreted ' +
         'protein: killing the organism stops production. An endotoxin is already built into every ' +
         'cell that is about to be destroyed, so the dose is delivered by the treatment itself. ' +
         '（因为这种毒素是结构组分，不是分泌产物。脂多糖位于外膜的外小叶，它的 lipid A 部分就是内毒素。' +
         '裂解细胞会把它大量释放出来，而 lipid A 被宿主免疫细胞上的 TLR4 识别，触发大规模细胞因子反应——' +
         '发热、血管扩张、低血压，极端情况下是感染性休克。值得拿来对照的是 Gram 阳性菌的外毒素，那是一种分泌的蛋白：' +
         '杀死菌就停止了生产。而内毒素早已内建在每一个即将被摧毁的细胞里，所以这个剂量是治疗本身送出去的。）'
    },
    {
      q: 'The capsule is outside the wall and takes no part in the Gram distinction. What is it for, ' +
         'and why does it not stain? ' +
         '（荚膜在细胞壁之外，完全不参与 Gram 的区分。它是干什么的？为什么它不着色？）',
      a: 'It is a hydrated polysaccharide layer — occasionally polypeptide — and its main significance ' +
         'is **immune evasion**: it hides surface antigens from antibody, and its slippery hydrated ' +
         'surface resists phagocytosis, so an encapsulated strain of a species can be virulent where ' +
         'the unencapsulated strain is not. It also helps the cell resist desiccation and mediates ' +
         'adherence, which is where it connects to biofilm formation.\n\n' +
         'It takes up neither Gram dye because it is **neither peptidoglycan nor lipid membrane**, so ' +
         'on a Gram stain it appears only as a clear halo. Demonstrating it properly needs negative ' +
         'staining, where India ink or nigrosin darkens the background and the capsule shows as an ' +
         'unstained zone around the cell. Capsular polysaccharide is also what conjugate vaccines are ' +
         'made from. ' +
         '（它是一层水合的多糖——偶尔是多肽——主要意义在于免疫逃避：把表面抗原藏起来不让抗体接触，' +
         '而湿滑的水合表面抵抗吞噬，所以同一个种里有荚膜的株可以有毒力，无荚膜的株则没有。它还帮助细胞抵抗干燥并介导黏附，' +
         '这就是它与生物膜形成的连接点。它不吸收任何一种 Gram 染料，因为它既不是肽聚糖也不是脂膜，' +
         '所以在 Gram 染色上只表现为一圈透明光晕。要正经显示它需要负染，用印度墨汁或苯胺黑把背景染暗，' +
         '荚膜就作为细胞周围一圈未着色的区域显现出来。荚膜多糖也正是结合疫苗的制造原料。）'
    }
  ],

  points: [
    { term: 'Gram-positive wall', en: 'A thick peptidoglycan layer, many chains cross-linked into a dense mesh, lying outside a single cytoplasmic membrane. Teichoic acids run through it and carry negative charge.', cn: 'Gram 阳性细胞壁：厚的肽聚糖层，多条链交联成致密的网，位于唯一一层胞质膜的外侧。磷壁酸贯穿其中并带负电。' },
    { term: 'Gram-negative wall', en: 'A thin peptidoglycan layer in the periplasm, between an inner cytoplasmic membrane and an outer membrane. Two membranes, one thin wall between them.', cn: 'Gram 阴性细胞壁：周质中的一层薄肽聚糖，夹在内侧的胞质膜与外膜之间。两层膜，中间一层薄壁。' },
    { term: 'The outer membrane is the real difference', en: 'An asymmetric bilayer with phospholipid inside and lipopolysaccharide outside, crossed by porins. It is a permeability barrier, and it is the reason for both intrinsic antibiotic resistance and endotoxin.', cn: '外膜才是真正的区别：一层不对称的双层，内侧是磷脂、外侧是脂多糖，由孔蛋白贯穿。它是一道通透性屏障，也正是固有抗生素抗性与内毒素两者的来源。' },
    { term: 'Crystal violet then iodine', en: 'The primary stain enters both cell types; iodine is the mordant and forms a large crystal violet-iodine complex that is too bulky to diffuse out easily. At this point everything is purple.', cn: '先结晶紫、后碘液：初染剂进入两类细胞；碘是媒染剂，形成一个大的结晶紫-碘复合物，体积太大不易扩散出去。到这一步为止一切都是紫的。' },
    { term: 'Alcohol is the discriminating step', en: 'It dehydrates and closes thick peptidoglycan, trapping the complex; it dissolves the outer membrane and washes the complex out of thin peptidoglycan. Over-decolorising is the classic error and gives false negatives.', cn: '乙醇是做出区分的一步：它使厚肽聚糖脱水闭合，把复合物困住；它溶解外膜，把复合物从薄肽聚糖中洗出。脱色过度是经典错误，给出假阴性。' },
    { term: 'Safranin counterstain', en: 'Stains whatever was decolorised. It has no discriminating power of its own — it exists only to make the now-colourless Gram-negatives visible, as pink against the purple.', cn: '沙黄复染：给已被脱色的东西上色。它本身没有任何区分能力——它存在的唯一目的是让此刻无色的 Gram 阴性菌可见，在紫色之中显为粉红。' },
    { term: 'Lipopolysaccharide is endotoxin', en: 'Its lipid A anchor is recognised by host TLR4 and drives the cytokine cascade of septic shock. It is structural, so it is released by lysis rather than secreted, and killing the bacteria delivers the dose.', cn: '脂多糖就是内毒素：它的 lipid A 锚被宿主的 TLR4 识别，驱动感染性休克的细胞因子级联。它是结构性的，所以由裂解释放而非分泌，杀死细菌等于把剂量送出去。' },
    { term: 'Exotoxin, for contrast', en: 'A secreted protein, typical of Gram-positives but not exclusive to them. Because it is made and exported by living cells, killing the organism stops production — the opposite of the endotoxin situation.', cn: '作为对照的外毒素：一种分泌的蛋白，典型见于 Gram 阳性菌但并非其专有。因为它由活细胞制造并输出，杀死菌就停止了生产——与内毒素的情形正好相反。' },
    { term: 'The capsule is a third layer', en: 'Outside the wall, usually polysaccharide, hydrated and slippery. Its job is immune evasion — hiding antigens and resisting phagocytosis — plus desiccation resistance and adherence.', cn: '荚膜是第三层：位于细胞壁之外，通常是多糖，水合而湿滑。它的工作是免疫逃避——藏起抗原、抵抗吞噬——外加抗干燥与黏附。' },
    { term: 'Capsules need negative staining', en: 'They take up neither Gram dye, so a Gram stain shows only a clear halo. India ink or nigrosin darkens the background and reveals the capsule as an unstained zone.', cn: '荚膜需要负染：它不吸收任何一种 Gram 染料，所以 Gram 染色上只见一圈透明光晕。印度墨汁或苯胺黑把背景染暗，把荚膜显示为一圈未着色的区域。' },
    { term: 'Acid-fast is the third outcome', en: 'Mycobacteria have a mycolic-acid-rich wall that resists Gram staining altogether and appears weakly positive or unstained. Naming this shows the dichotomy is not exhaustive.', cn: '抗酸性是第三种结果：分枝杆菌的细胞壁富含分枝菌酸，完全抵抗 Gram 染色，表现为弱阳性或不着色。点出这一条说明这个二分法并不穷尽。' }
  ],

  beyondPoints: [
    { term: 'You already exploit this difference every week without calling it microbiology', en: 'Lysozyme cleaves the beta-1,4 bond in peptidoglycan and works readily on Gram-positives, while a Gram-negative needs EDTA to destabilise the outer membrane before lysozyme can reach the wall at all — which is exactly why an E. coli lysis buffer contains EDTA and a yeast protocol uses lyticase instead. The same logic runs through competent-cell preparation, where calcium chloride and heat shock are working on an outer membrane a Gram-positive does not have. If an examiner asks the difference and you can name a bench consequence you rely on, the answer stops being a memorised list.', cn: '你每周都在利用这个差异，只是没把它叫作微生物学：溶菌酶切开肽聚糖里的 beta-1,4 键，对 Gram 阳性菌轻易奏效，而 Gram 阴性菌需要先用 EDTA 破坏外膜的稳定，溶菌酶才够得着细胞壁——这正是为什么大肠杆菌的裂解缓冲液里有 EDTA，而酵母的方案改用 lyticase。同一条逻辑贯穿感受态细胞的制备，氯化钙与热激所作用的正是一层 Gram 阳性菌没有的外膜。如果考官问这个差异，而你能说出一个自己天天依赖的实验后果，这个回答就不再是一份背下来的清单。' },
    { term: 'Why the stain survived 140 years', en: 'Hans Christian Gram published it in 1884 and considered it a failure, because it did not stain everything. It survives because the single binary it reports correlates with an unusually large number of clinically actionable properties at once — which antibiotic class is likely to work, whether endotoxic shock is a risk, and what the organism probably is — from a five-minute bench procedure with no instrument. Very few tests in biology compress that much decision-relevant information into one bit.', cn: '这个染色法为什么活了 140 年：Hans Christian Gram 于 1884 年发表它，并认为它是失败的，因为它没能把所有东西都染上。它之所以存活下来，是因为它报告的那一个二值，同时与异常多的、可据以行动的临床性质相关——哪一类抗生素可能有效、是否存在内毒素休克的风险、这个菌大概是什么——而代价只是一个五分钟、不需要仪器的台面操作。生物学里极少有试验能把这么多与决策相关的信息压缩进一个比特。' }
  ],

  terms: [
    { en: 'Peptidoglycan', cn: '肽聚糖', def_en: 'Alternating N-acetylglucosamine and N-acetylmuramic acid chains cross-linked by short peptides; the load-bearing mesh that resists turgor pressure.', def_cn: '由 N-乙酰葡糖胺与 N-乙酰胞壁酸交替构成的链，经短肽交联；承受膨压的承重网。' },
    { en: 'Outer membrane', cn: '外膜', def_en: 'The second bilayer of a Gram-negative cell, asymmetric with lipopolysaccharide facing outward, and the barrier responsible for intrinsic antibiotic resistance.', def_cn: 'Gram 阴性细胞的第二层双层膜，不对称，脂多糖朝外；造成固有抗生素抗性的那道屏障。' },
    { en: 'Periplasm', cn: '周质', def_en: 'The compartment between inner and outer membrane, containing the thin peptidoglycan layer and enzymes such as beta-lactamase.', def_cn: '内膜与外膜之间的空间，容纳薄肽聚糖层以及 beta-内酰胺酶等酶。' },
    { en: 'Lipopolysaccharide (LPS)', cn: '脂多糖', def_en: 'Outer-leaflet molecule of the outer membrane; its lipid A anchor is endotoxin and is recognised by TLR4.', def_cn: '外膜外小叶的分子；其 lipid A 锚即内毒素，被 TLR4 识别。' },
    { en: 'Lipid A', cn: '类脂 A', def_en: 'The membrane anchor of LPS and the toxic moiety of endotoxin.', def_cn: '脂多糖的膜锚，也是内毒素中有毒的那一部分。' },
    { en: 'Endotoxin', cn: '内毒素', def_en: 'A structural toxin released by lysis rather than secreted, so killing the bacterium delivers it.', def_cn: '一种结构性毒素，由裂解释放而非分泌，因此杀死细菌就等于把它送出去。' },
    { en: 'Exotoxin', cn: '外毒素', def_en: 'A protein secreted by living cells; production stops when the organism is killed.', def_cn: '由活细胞分泌的蛋白；菌被杀死时生产即停止。' },
    { en: 'Mordant', cn: '媒染剂', def_en: 'Iodine in the Gram stain: it forms a bulky complex with crystal violet that cannot diffuse out easily.', def_cn: 'Gram 染色中的碘：它与结晶紫形成一个大体积复合物，不易扩散出去。' },
    { en: 'Decolorisation', cn: '脱色', def_en: 'The alcohol or acetone-alcohol step, and the only step in the procedure that discriminates between the two wall types.', def_cn: '乙醇或丙酮-乙醇那一步，也是整个操作中唯一区分两种细胞壁的一步。' },
    { en: 'Counterstain', cn: '复染', def_en: 'Safranin, which colours only the cells that were decolorised and has no discriminating power of its own.', def_cn: '沙黄，只给被脱色的细胞上色，本身没有区分能力。' },
    { en: 'Capsule', cn: '荚膜', def_en: 'A hydrated polysaccharide layer outside the wall that resists phagocytosis and hides surface antigens.', def_cn: '细胞壁之外的一层水合多糖，抵抗吞噬并掩盖表面抗原。' },
    { en: 'Negative staining', cn: '负染', def_en: 'Darkening the background with India ink or nigrosin so that an unstainable structure such as a capsule shows as a clear zone.', def_cn: '用印度墨汁或苯胺黑把背景染暗，使荚膜这类无法着色的结构显示为透明区域。' },
    { en: 'Teichoic acid', cn: '磷壁酸', def_en: 'Anionic polymer threading through Gram-positive peptidoglycan; contributes surface charge and is a target of the innate immune system.', def_cn: '贯穿 Gram 阳性肽聚糖的阴离子聚合物；贡献表面电荷，并是先天免疫系统的识别靶点。' },
    { en: 'Porin', cn: '孔蛋白', def_en: 'Channel protein of the outer membrane admitting small hydrophilic solutes, and the reason large drugs are excluded.', def_cn: '外膜的通道蛋白，允许小的亲水溶质通过，也是大分子药物被排除在外的原因。' },
    { en: 'Acid-fast', cn: '抗酸', def_en: 'Staining behaviour of mycolic-acid-rich walls such as those of mycobacteria, which the Gram stain classifies poorly.', def_cn: '分枝菌酸丰富的细胞壁（如分枝杆菌）的染色行为，Gram 染色对其分类效果很差。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'A Gram stain of a known Gram-positive culture comes out pink. Which step was most likely mishandled?',
      q_cn: '一份已知 Gram 阳性培养物的染色结果是粉红色。最可能是哪一步操作出了问题？',
      options: [
        'The crystal violet was applied for too short a time to saturate the wall',
        'The iodine mordant was omitted, so no complex formed inside the cells',
        'The alcohol was left on too long',
        'The safranin was applied before the cells had been rinsed of iodine'
      ],
      answer: 2,
      why_en: 'Decolorisation is the only discriminating step, and it is the only one whose failure mode is graded rather than all-or-nothing. Given enough alcohol, even a thick peptidoglycan mesh eventually surrenders the crystal violet-iodine complex, and the cell then takes safranin like a Gram-negative. This is the commonest technical error in the procedure.',
      why_cn: '脱色是唯一做出区分的一步，也是唯一一步其失效是渐变而非全有全无的。乙醇给够，连厚的肽聚糖网最终也会交出结晶紫-碘复合物，细胞随后就像 Gram 阴性菌一样接受沙黄。这是这个操作中最常见的技术错误。',
      optionNotes: {
        1: { en: 'Omitting iodine would prevent the complex forming and could indeed give a pink result, but it is an omission rather than a mishandling and would affect every cell on the slide identically, including the controls.', cn: '省略碘液确实会阻止复合物形成，也确实可能给出粉红结果，但那是遗漏而不是操作失当，而且它会以完全相同的方式影响玻片上每一个细胞，包括对照。' }
      }
    },
    { type: 'mcq',
      q_en: 'Why does vancomycin fail against Gram-negative bacteria even though they contain peptidoglycan?',
      q_cn: '为什么万古霉素对 Gram 阴性菌无效，尽管它们同样含有肽聚糖？',
      options: [
        'Gram-negative peptidoglycan uses a different cross-link terminus that the drug cannot bind',
        'The molecule cannot cross the outer membrane',
        'Periplasmic beta-lactamase hydrolyses the drug before it reaches the wall',
        'The thin peptidoglycan layer presents too few target sites for a useful effect'
      ],
      answer: 1,
      why_en: 'The target is present and bindable; access is what fails. Vancomycin is a large glycopeptide, and outer-membrane porins admit only small hydrophilic solutes. This makes the resistance intrinsic and structural — nothing needs to be mutated or acquired for it to hold.',
      why_cn: '靶点在那里，也能结合；失败的是接近。万古霉素是一个大的糖肽，而外膜孔蛋白只允许小的亲水溶质通过。这使得该抗性是固有的、结构性的——不需要任何突变或获得性事件它就成立。',
      optionNotes: {
        2: { en: 'Beta-lactamase does sit in the periplasm and does destroy beta-lactams there, but vancomycin is a glycopeptide and is not a beta-lactam, so that enzyme is irrelevant to it.', cn: 'beta-内酰胺酶确实位于周质，也确实在那里破坏 beta-内酰胺类，但万古霉素是糖肽而非 beta-内酰胺，所以那个酶与它无关。' }
      }
    },
    { type: 'mcq',
      q_en: 'A septic patient worsens in the hours after effective antibiotic therapy begins. Which property of the organism best explains this?',
      q_cn: '一位脓毒症患者在有效抗生素治疗开始后的数小时内病情恶化。该菌的哪一项性质最能解释这一点？',
      options: [
        'It secretes an exotoxin whose production briefly increases under antibiotic stress',
        'Its toxin is a structural component released on lysis',
        'It forms a biofilm whose dispersal releases planktonic cells into the bloodstream',
        'It carries a resistance plasmid that transfers to commensals during treatment'
      ],
      answer: 1,
      why_en: 'Lipopolysaccharide is built into the outer membrane, so the bacterial load is also the toxin load. Killing the cells releases lipid A in bulk, TLR4 on host immune cells recognises it, and the cytokine response can be worse than the infection was. An exotoxin behaves oppositely: it is secreted by living cells, so killing them stops production.',
      why_cn: '脂多糖内建于外膜，所以细菌载量同时就是毒素载量。杀死细胞会大量释放 lipid A，宿主免疫细胞上的 TLR4 识别它，随之而来的细胞因子反应可能比感染本身更糟。外毒素的行为正相反：它由活细胞分泌，所以杀死它们就停止了生产。'
    },
    { type: 'short',
      q_en: 'You examine a Gram stain and see purple rods surrounded by clear halos. What are the halos, and what would you do to demonstrate them properly?',
      q_cn: '你在 Gram 染色下看到紫色杆菌，周围有一圈透明光晕。这些光晕是什么？你会怎么做才能正经地把它们显示出来？',
      accept: ['capsule', '荚膜', 'negative stain', '负染', 'India ink', '印度墨汁', 'nigrosin', '苯胺黑', 'polysaccharide', '多糖'],
      answer_en: 'The halos are capsules. A capsule is a hydrated polysaccharide layer outside the cell wall and takes up neither Gram dye, so it appears only as an unstained gap between the cell and the background. To demonstrate it properly I would use a negative stain — India ink or nigrosin — which darkens the background rather than the cell, so the capsule stands out as a clear zone of definite width. The reason it is worth demonstrating is that the capsule is a virulence factor: it hides surface antigens from antibody and resists phagocytosis, so an encapsulated strain can be pathogenic where the unencapsulated strain of the same species is not.',
      answer_cn: '这些光晕是荚膜。荚膜是细胞壁之外的一层水合多糖，不吸收任何一种 Gram 染料，所以它只表现为细胞与背景之间一段未着色的空隙。要正经地显示它，我会用负染——印度墨汁或苯胺黑——它把背景而不是细胞染暗，于是荚膜作为一圈宽度明确的透明区域凸显出来。值得去显示它的原因是荚膜是一个毒力因子：它把表面抗原藏起来不让抗体接触，并抵抗吞噬，所以同一个种里有荚膜的株可以致病，而无荚膜的株不能。'
    }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'Where does the thin peptidoglycan layer of a Gram-negative cell sit?',
      q_cn: 'Gram 阴性细胞的薄肽聚糖层位于哪里？',
      options: [
        'Outside both membranes, as the outermost structural layer',
        'In the periplasm, between inner and outer membrane',
        'Immediately inside the cytoplasmic membrane, facing the cytosol',
        'Woven into the outer membrane itself as an integral component'
      ],
      answer: 1,
      why_en: 'The periplasm is the compartment between the two membranes, and it holds both the thin wall and enzymes such as beta-lactamase. Naming the compartment is what distinguishes a memorised answer from an understood one.',
      why_cn: '周质是两层膜之间的空间，其中既有薄壁也有 beta-内酰胺酶这类酶。能说出这个空间的名字，正是背下来的回答与理解了的回答之间的区别。'
    },
    { type: 'mcq',
      q_en: 'What is the function of iodine in the Gram stain?',
      q_cn: '碘液在 Gram 染色中起什么作用？',
      options: [
        'It is the mordant',
        'It selectively oxidises the outer membrane of Gram-negative cells before decolorisation',
        'It fixes the cells to the slide so that they survive the washing steps',
        'It counterstains any cell that has failed to retain the primary dye'
      ],
      answer: 0,
      why_en: 'Iodine forms a bulky crystal violet-iodine complex that cannot diffuse out of a closed peptidoglycan mesh. Without it, the primary dye washes out of both cell types and the test reports nothing.',
      why_cn: '碘与结晶紫形成一个大体积复合物，无法从闭合的肽聚糖网中扩散出去。没有它，初染剂会从两类细胞中都洗掉，这个试验什么也报告不了。'
    },
    { type: 'mcq',
      q_en: 'Which structure makes Gram-negative bacteria intrinsically resistant to many antibiotics?',
      q_cn: '哪一个结构使 Gram 阴性菌对许多抗生素具有固有抗性？',
      options: [
        'The thick peptidoglycan mesh, which physically excludes large molecules',
        'The outer membrane',
        'The capsule, which coats the cell in a hydrated barrier layer',
        'Teichoic acids, whose negative charge repels anionic drugs'
      ],
      answer: 1,
      why_en: 'Its porins admit only small hydrophilic solutes, so a large drug never reaches a target that is otherwise perfectly bindable. Intrinsic resistance of this kind needs no mutation and no acquired gene.',
      why_cn: '它的孔蛋白只允许小的亲水溶质通过，所以大分子药物根本到不了一个本来完全可以结合的靶点。这类固有抗性不需要任何突变，也不需要任何获得性基因。'
    },
    { type: 'mcq',
      q_en: 'Which of these is a property of endotoxin but not of exotoxin?',
      q_cn: '下列哪一项是内毒素而非外毒素的性质？',
      options: [
        'It provokes a strong host immune response at low concentration',
        'It is released when the cell is destroyed',
        'It can cause fever and a fall in blood pressure in the infected host',
        'It is produced by bacteria growing inside a human host'
      ],
      answer: 1,
      why_en: 'The other three are true of both. The discriminating property is that endotoxin is structural — lipid A anchors LPS in the outer membrane — so lysis delivers it, whereas an exotoxin is secreted and stops being made once the organism dies.',
      why_cn: '另外三项对两者都成立。做出区分的性质是内毒素是结构性的——lipid A 把脂多糖锚在外膜上——所以裂解把它送出来；而外毒素是分泌的，菌一旦死亡就不再制造。'
    },
    { type: 'mcq',
      q_en: 'Why does a lysis protocol for E. coli contain EDTA while one for a Gram-positive organism may not need it?',
      q_cn: '为什么大肠杆菌的裂解方案里含有 EDTA，而 Gram 阳性菌的方案可能不需要？',
      options: [
        'EDTA inhibits the nucleases released when the cell breaks open',
        'EDTA destabilises the outer membrane so that lysozyme can reach the wall',
        'EDTA raises the ionic strength enough to burst the cell osmotically',
        'EDTA prevents the peptidoglycan fragments from aggregating into a gel'
      ],
      answer: 1,
      why_en: 'EDTA chelates the divalent cations that bridge adjacent LPS molecules, loosening the outer membrane. A Gram-positive has no outer membrane, so lysozyme meets its peptidoglycan substrate directly. Chelating nucleases is a real secondary benefit but not the reason it is in the buffer.',
      why_cn: 'EDTA 螯合了桥接相邻脂多糖分子的二价阳离子，使外膜松动。Gram 阳性菌没有外膜，所以溶菌酶直接遇到它的肽聚糖底物。抑制核酸酶确实是一个真实的附带好处，但不是它出现在缓冲液里的原因。'
    },
    { type: 'mcq',
      q_en: 'Mycobacteria stain poorly by the Gram method. Why?',
      q_cn: '分枝杆菌用 Gram 法染色效果很差。为什么？',
      options: [
        'They lack peptidoglycan entirely and so have nothing to retain the dye',
        'Their wall is rich in mycolic acids',
        'They grow too slowly to accumulate enough dye during the staining time',
        'Their capsule is unusually thick and blocks both dyes from reaching the wall'
      ],
      answer: 1,
      why_en: 'The waxy mycolic-acid layer keeps aqueous dyes out, so mycobacteria appear weakly positive or unstained and need the Ziehl-Neelsen acid-fast stain instead. Naming this shows the Gram dichotomy is not exhaustive.',
      why_cn: '蜡质的分枝菌酸层把水性染料挡在外面，所以分枝杆菌表现为弱阳性或不着色，需要改用 Ziehl-Neelsen 抗酸染色。指出这一点说明 Gram 二分法并不穷尽。'
    },
    { type: 'short',
      q_en: 'State the structural difference between Gram-positive and Gram-negative cell walls, and give two consequences of it.',
      q_cn: '说出 Gram 阳性与阴性细胞壁的结构差异，并给出它的两个后果。',
      accept: ['thick peptidoglycan', '厚肽聚糖', 'outer membrane', '外膜', 'thin', '薄', 'endotoxin', '内毒素', 'LPS', '脂多糖', 'resistance', '抗性', 'periplasm', '周质'],
      answer_en: 'A Gram-positive cell has a thick peptidoglycan layer outside a single cytoplasmic membrane. A Gram-negative cell has a thin peptidoglycan layer in the periplasm, between an inner membrane and an outer membrane. Two consequences follow. First, the stain: alcohol dehydrates and closes thick peptidoglycan so the crystal violet-iodine complex is trapped and the cell stays purple, whereas it dissolves the outer membrane and washes the complex out of the thin layer, leaving the cell to take safranin and appear pink. Second, the outer membrane is a permeability barrier whose porins admit only small hydrophilic molecules, which makes Gram-negatives intrinsically resistant to large drugs such as vancomycin; and its lipopolysaccharide is endotoxin, so lysing a Gram-negative infection releases lipid A and can drive septic shock.',
      answer_cn: 'Gram 阳性细胞在唯一一层胞质膜之外有厚的肽聚糖层。Gram 阴性细胞的肽聚糖很薄，位于周质中，夹在内膜与外膜之间。由此有两个后果。第一是染色：乙醇使厚肽聚糖脱水闭合，结晶紫-碘复合物被困住，细胞保持紫色；而它溶解外膜并把复合物从薄层中洗出，细胞随后接受沙黄而呈粉红。第二，外膜是一道通透性屏障，其孔蛋白只允许小的亲水分子通过，这使 Gram 阴性菌对万古霉素这类大分子药物具有固有抗性；而它的脂多糖就是内毒素，所以裂解一个 Gram 阴性菌感染会释放 lipid A，可能驱动感染性休克。'
    },
    { type: 'short',
      q_en: 'Walk through the Gram stain procedure and say which step does the discriminating.',
      q_cn: '走一遍 Gram 染色的操作，并说出哪一步在做区分。',
      accept: ['crystal violet', '结晶紫', 'iodine', '碘', 'alcohol', '乙醇', 'decolor', '脱色', 'safranin', '沙黄', 'heat fix', '固定'],
      answer_en: 'Make a thin smear and heat-fix it so the cells survive washing. Apply crystal violet, the primary stain, which enters both cell types. Apply iodine as a mordant; it forms a bulky crystal violet-iodine complex that cannot easily diffuse out. Then decolorise briefly with alcohol — this is the only discriminating step. In a Gram-positive the alcohol dehydrates and tightens the thick peptidoglycan and traps the complex; in a Gram-negative it dissolves the outer membrane and the thin wall cannot retain the complex, so the cell goes colourless. Finally counterstain with safranin, which colours only the decolorised cells. Gram-positives are purple, Gram-negatives pink. The classic error is over-decolorising, which turns a Gram-positive into a false negative, so a known-positive control on the same slide is worth running.',
      answer_cn: '做一份薄涂片并加热固定，使细胞经得起冲洗。加结晶紫，即初染剂，它进入两类细胞。加碘液作媒染剂；它形成一个大体积的结晶紫-碘复合物，不易扩散出去。然后用乙醇短暂脱色——这是唯一做出区分的一步。在 Gram 阳性菌里，乙醇使厚肽聚糖脱水收紧，把复合物困住；在 Gram 阴性菌里，它溶解外膜，薄壁留不住复合物，细胞变为无色。最后用沙黄复染，它只给已脱色的细胞上色。Gram 阳性为紫色，阴性为粉红。经典错误是脱色过度，它把 Gram 阳性菌变成假阴性，所以在同一张玻片上跑一个已知阳性对照是值得的。'
    }
  ],

  oral: {
    q_en: 'What are the differences between Gram-positive and Gram-negative bacteria?',
    q_cn: 'Gram 阳性菌与阴性菌之间有哪些区别？',
    model_en: 'The difference is one of wall architecture, and everything else follows from it. A ' +
              'Gram-positive cell has a single cytoplasmic membrane with a thick peptidoglycan layer ' +
              'outside it, threaded with teichoic acids. A Gram-negative cell has a thin peptidoglycan ' +
              'layer sitting in the periplasm between an inner membrane and a second, outer membrane. ' +
              'That outer membrane is asymmetric, with lipopolysaccharide in its outer leaflet and ' +
              'porins crossing it. The stain reports this difference. Crystal violet enters both, ' +
              'iodine forms a bulky complex with it, and then alcohol does the discriminating: in a ' +
              'Gram-positive it dehydrates and closes the thick mesh so the complex is trapped and the ' +
              'cell stays purple, while in a Gram-negative it dissolves the outer membrane and the thin ' +
              'wall cannot hold the complex, so the cell decolorises and safranin makes it pink. Two ' +
              'consequences matter clinically. The outer membrane is a permeability barrier, so a large ' +
              'drug like vancomycin cannot reach a peptidoglycan target that is otherwise perfectly ' +
              'bindable — intrinsic resistance with nothing mutated. And lipopolysaccharide is ' +
              'endotoxin: because lipid A is a structural part of the membrane rather than a secreted ' +
              'product, killing the bacteria releases it in bulk, which is why a Gram-negative sepsis ' +
              'can deteriorate after effective treatment begins. An exotoxin behaves the opposite way. ' +
              'I would add that the dichotomy is not exhaustive — mycobacteria have a mycolic-acid wall ' +
              'and are acid-fast rather than either — and that the capsule, if present, is a separate ' +
              'layer outside all of this, invisible on a Gram stain and shown by negative staining.',
    model_cn: '这个区别是细胞壁构造上的区别，其余一切都由它推出。Gram 阳性细胞有一层胞质膜，膜外是厚的肽聚糖层，其中贯穿磷壁酸。' +
              'Gram 阴性细胞的肽聚糖很薄，位于内膜与第二层外膜之间的周质中。那层外膜是不对称的，外小叶是脂多糖，孔蛋白贯穿其间。' +
              '染色报告的就是这个区别：结晶紫进入两者，碘与之形成大体积复合物，然后乙醇做出区分——在 Gram 阳性菌里它使厚网脱水闭合，' +
              '复合物被困住，细胞保持紫色；在 Gram 阴性菌里它溶掉外膜，薄壁留不住复合物，细胞脱色，沙黄把它染成粉红。' +
              '有两个后果在临床上重要。外膜是一道通透性屏障，所以万古霉素这样的大分子药物到不了一个本来完全可以结合的肽聚糖靶点——' +
              '这是固有抗性，什么都没有突变。而脂多糖就是内毒素：因为 lipid A 是膜的结构部分而非分泌产物，杀死细菌会把它大量释放，' +
              '这就是为什么 Gram 阴性菌脓毒症可能在有效治疗开始后反而恶化。外毒素的行为正好相反。我还会补充，这个二分法并不穷尽——' +
              '分枝杆菌是分枝菌酸细胞壁，属于抗酸而不属于两者之一——以及荚膜（如果有）是这一切之外的另一层，在 Gram 染色上看不见，' +
              '要用负染来显示。',
    checklist: [
      { en: 'Wall architecture first: thick peptidoglycan outside one membrane, versus thin peptidoglycan between two', cn: '先讲细胞壁构造：一层膜外的厚肽聚糖，对比两层膜之间的薄肽聚糖' },
      { en: 'Name the periplasm as the compartment holding the thin wall', cn: '点出周质是容纳薄壁的那个空间' },
      { en: 'Crystal violet, iodine as mordant, alcohol, safranin — in order', cn: '结晶紫、碘作媒染剂、乙醇、沙黄——按顺序' },
      { en: 'Say explicitly that decolorisation is the only discriminating step', cn: '明确说出脱色是唯一做出区分的一步' },
      { en: 'Outer membrane as permeability barrier, with vancomycin as the example', cn: '外膜作为通透性屏障，以万古霉素为例' },
      { en: 'LPS is endotoxin, lipid A is the toxic part, released by lysis not secretion', cn: '脂多糖即内毒素，lipid A 是有毒部分，由裂解释放而非分泌' },
      { en: 'Contrast with exotoxin, which stops when the organism is killed', cn: '与外毒素对照，后者在菌被杀死时即停止' },
      { en: 'Mention acid-fast mycobacteria so the dichotomy is not overstated', cn: '提到抗酸的分枝杆菌，以免把二分法说过头' },
      { en: 'Capsule as a separate outer layer, needing negative staining', cn: '荚膜是独立的最外层，需要负染才能显示' }
    ]
  }
}

]);
