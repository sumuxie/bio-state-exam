/* =========================================================================
   JIRI BANK — Chapter 4 . Applied molecular biology

   Hand-written for this bank. Chapter 4 is the one heading that is NOT on any
   of Jiri's sheets: it exists because the title scan in molbio/HANDOFF.md
   found topics that nothing in 13 MB of corpus is titled after, in a course
   (Molekulární biologie a genetika II) whose committee the supervisor sits on.

   If the sheets turn out to be the whole exam, this chapter is the first to
   cut — it is the only part of the bank not traceable to a printed question.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

{
  id: '4-1',
  chapter: 4,
  lecture: 'Mol Biol',
  section: '4.1',
  slides: '卷三 Micro 19（PCR 原理与微生物学应用）· 卷二 Lab 7（PCR 体系组分）· molbio Tier 1（qPCR）',
  coverage: 'partial',
  enTitle: 'PCR and qPCR — the principle, the mixture, and the one change that makes it quantitative',
  cnTitle: 'PCR 与 qPCR——原理、体系，以及使它变成定量的那一处改动',
  coverageNote: 'Written for this bank. Two sheet questions land here — the principle of PCR and its ' +
                'applications (Sheet 3 Micro 19) and the components of a PCR mixture with the role of ' +
                'each (Sheet 2 Lab 7). The title scan behind molbio/HANDOFF.md found 374 raw mentions of ' +
                'PCR in pesbexplain but only one node titled after it, and no node anywhere in 13 MB ' +
                'is titled after qPCR or RT-qPCR. That is the shape of the gap: PCR is named constantly ' +
                'as a step and taught once, and the quantitative version is not taught at all. The ' +
                'standard-curve reasoning in node 1-1 is the same reasoning applied here.',

  summary: {
    en: 'PCR is exponential copying driven by a temperature cycle. Denaturation separates the strands ' +
        'near 95 degrees, annealing lets primers find their complements at a temperature set by the ' +
        'primers themselves, and extension lets a thermostable polymerase build the new strand at its ' +
        'optimum near 72 degrees. Two primers pointing towards each other define the product, and ' +
        'because each cycle copies both the template and everything made so far, product accumulates ' +
        'as 2 to the power n. The mixture is short: template, two primers, a thermostable polymerase, ' +
        'the four dNTPs, magnesium, and a buffer. Magnesium is the one to be able to justify, because ' +
        'the polymerase is a magnesium-dependent enzyme and free magnesium also affects primer ' +
        'binding, so it is the parameter people titrate when a reaction misbehaves. qPCR changes one ' +
        'thing: a fluorescent readout measured every cycle, so the reaction is watched while it is ' +
        'still exponential instead of being looked at once at the end. The quantity reported is Cq, ' +
        'the cycle at which fluorescence crosses a threshold, and it is inversely related to starting ' +
        'template — more template, earlier crossing.',
    cn: 'PCR 是由温度循环驱动的指数式复制。变性在 95 摄氏度附近把双链分开；退火让引物在由引物自身决定的温度下找到互补序列；' +
        '延伸让耐热聚合酶在 72 摄氏度附近的最适温度合成新链。两条相向的引物定义了产物；因为每一轮既复制模板也复制此前生成的一切，' +
        '产物以 2 的 n 次方累积。体系很短：模板、两条引物、耐热聚合酶、四种 dNTP、镁离子、缓冲液。镁是要能讲出道理的那一个，' +
        '因为聚合酶是镁依赖的酶，而游离镁同时影响引物结合，所以反应不正常时人们调的就是它。qPCR 只改了一件事：' +
        '每一轮都测一次荧光，于是反应在还处于指数期时就被看着，而不是到最后才看一眼。它报告的量是 Cq，' +
        '即荧光越过阈值的那一轮，它与起始模板量成反比——模板越多，越早越过。'
  },

  mustKnow: 'PCR is **exponential copying driven by a temperature cycle, and the primers define both ' +
            'the product and the annealing temperature.** qPCR differs in exactly one respect: ' +
            '**fluorescence is read every cycle, so the measurement is taken while the reaction is ' +
            'still exponential.** The number reported is Cq, and it goes **down** as starting template ' +
            'goes up. ' +
            'PCR 是由温度循环驱动的指数式复制，引物同时决定产物与退火温度。qPCR 只在一处不同：' +
            '每一轮都读荧光，所以测量发生在反应还处于指数期的时候。它报告的数是 Cq，起始模板越多，Cq 越小。',

  skipIt: 'Do not memorise cycle times in seconds, a specific ramp rate, or a table of polymerase ' +
          'fidelity figures. Do not try to recite the Taq extension rate to the base per second. What ' +
          'is asked for is the three temperatures and why each one is where it is, the six components ' +
          'and what each does, and the difference between endpoint and real-time. ' +
          '不用背以秒计的循环时间、具体的升降温速率，或者聚合酶保真度的数值表，也不用背 Taq 每秒延伸多少个碱基。' +
          '要的是三个温度以及每个温度为什么在那里、六种组分各自做什么，以及终点法与实时法的区别。',

  explain: [
    {
      q: 'Why is the endpoint amount of PCR product a poor measure of how much template you started ' +
         'with, and what does qPCR do about it? ' +
         '（为什么 PCR 终点的产物量不能很好地反映起始模板量？qPCR 是怎么解决的？）',
      a: 'Because **the reaction stops being exponential long before it stops running.**\n\n' +
         'Primers are consumed, dNTPs run down, polymerase loses activity, and product strands begin ' +
         'to reanneal to each other faster than primers can bind. The curve flattens into a plateau, ' +
         'and the plateau height is set by which reagent ran out first, not by how much template was ' +
         'there at the start. Two reactions differing a hundred-fold in starting material can reach ' +
         'the same plateau, which is why a bright band on a gel means present, not abundant.\n\n' +
         'qPCR measures **during** the exponential phase instead. Fluorescence is read every cycle, ' +
         'and the reported quantity is Cq — the cycle at which fluorescence crosses a threshold set ' +
         'inside the exponential region. Under ideal doubling, a template ten-fold more abundant ' +
         'crosses about 3.3 cycles earlier, because 2 to the power 3.3 is roughly 10. ' +
         '（因为反应在停下来之前很久就已经不是指数式的了。引物被消耗、dNTP 减少、聚合酶失活，' +
         '而产物链之间的复性开始快过引物结合。曲线趋于平台，平台高度由哪一种试剂先耗尽决定，而不是由起始模板量决定。' +
         '起始量相差一百倍的两个反应可以到达同一个平台，这就是为什么胶上一条亮带说明「有」，而不是「多」。' +
         'qPCR 改为在指数期内测量：每一轮读一次荧光，报告的量是 Cq——荧光越过一条设在指数区内的阈值的那一轮。' +
         '在理想的每轮翻倍下，模板多十倍的样品大约提前 3.3 轮越过阈值，因为 2 的 3.3 次方约等于 10。）'
    },
    {
      q: 'SYBR Green and TaqMan both give fluorescence that rises with product. What is the real ' +
         'difference, and when does it matter? ' +
         '（SYBR Green 与 TaqMan 都给出随产物上升的荧光。真正的区别是什么？什么时候这个区别才重要？）',
      a: '**SYBR Green reports double-stranded DNA. TaqMan reports your sequence.**\n\n' +
         'SYBR Green is an intercalating dye that fluoresces when bound to any double-stranded DNA, so ' +
         'primer-dimers and mispriming products are counted as signal exactly like the intended ' +
         'amplicon. It is cheap and needs no extra design, and its weakness is checked rather than ' +
         'assumed: a melt curve run at the end should show one peak at one melting temperature, ' +
         'because two products of different length or GC content melt at different temperatures.\n\n' +
         'A TaqMan probe is a third oligonucleotide binding between the primers, carrying a reporter ' +
         'dye and a quencher. While intact, the quencher absorbs the reporter emission. When the ' +
         'polymerase extends through the probe, its 5-prime exonuclease activity cleaves it, ' +
         'separating reporter from quencher and releasing signal. Because signal now requires a third ' +
         'sequence-specific binding event, a primer-dimer is invisible — which is what makes ' +
         'multiplexing possible, since different probes can carry different dyes. ' +
         '（SYBR Green 报告的是双链 DNA，TaqMan 报告的是你的序列。SYBR Green 是嵌入型染料，' +
         '结合到任何双链 DNA 上都发荧光，所以引物二聚体和错配产物与目标扩增子一样被计为信号。它便宜、无需额外设计；' +
         '它的弱点靠核对而不是靠假设来处理：反应结束时跑一条熔解曲线，应当只出现一个峰、一个熔解温度，' +
         '因为长度或 GC 含量不同的两种产物熔解温度不同。TaqMan 探针是结合在两条引物之间的第三条寡核苷酸，' +
         '带一个报告基团和一个淬灭基团。探针完整时淬灭基团吸收报告基团的发射；当聚合酶延伸穿过探针时，' +
         '它的 5\' 外切酶活性把探针切开，报告基团与淬灭基团分离，信号释放。因为信号现在需要第三次序列特异的结合事件，' +
         '引物二聚体就是不可见的——这也正是多重反应之所以可能的原因，不同探针可以带不同的染料。）'
    },
    {
      q: 'A standard curve and delta-delta-Cq are two ways to turn Cq into an answer. When do you need ' +
         'which? ' +
         '（标准曲线与 delta-delta-Cq 是把 Cq 变成答案的两条路。什么时候该用哪一条？）',
      a: 'The question decides. **A standard curve gives an absolute number; delta-delta-Cq gives a ' +
         'fold change.**\n\n' +
         'If you need copies per microlitre — viral load, plasmid copy number, cells in a sample — you ' +
         'need a dilution series of a known standard, run in the same plate, and you read the unknown ' +
         'off the fitted line exactly as in node 1-1. The slope also tells you the efficiency: a slope ' +
         'of about -3.32 corresponds to doubling every cycle, and a slope far from it means the ' +
         'reaction is not doubling and the arithmetic underneath the calculation does not hold.\n\n' +
         'If you only need "is this gene up or down relative to a control", delta-delta-Cq is enough ' +
         'and no standard is required: normalise the target Cq to a reference gene in the same sample ' +
         'to give delta-Cq, then subtract the control condition\'s delta-Cq to give delta-delta-Cq, ' +
         'and report 2 to the power minus delta-delta-Cq. **That method assumes both amplicons run at ' +
         'the same efficiency, which is an assumption to state rather than to hope for.** ' +
         '（由问题决定。标准曲线给出绝对数，delta-delta-Cq 给出倍数变化。如果你要的是每微升多少拷贝——病毒载量、' +
         '质粒拷贝数、样品中的细胞数——你需要一份已知标准品的梯度稀释，在同一块板上跑，' +
         '然后像节点 1-1 那样从拟合直线上读出未知样品。斜率同时告诉你效率：斜率约 -3.32 对应每轮翻倍，' +
         '斜率离它很远就意味着反应并没有在翻倍，计算底下的算术不成立。如果你只需要「这个基因相对对照是升还是降」，' +
         'delta-delta-Cq 就够了，不需要标准品：把目标基因的 Cq 对同一样品中的内参基因归一化得到 delta-Cq，' +
         '再减去对照条件的 delta-Cq 得到 delta-delta-Cq，报告 2 的负 delta-delta-Cq 次方。' +
         '这个方法假定两个扩增子的效率相同，这是一个应当明说的假定，而不是一个可以指望的东西。）'
    },
    {
      q: 'RT-qPCR has one extra step and it is the one that goes wrong. What is it, and what does it ' +
         'cost you? ' +
         '（RT-qPCR 多出一步，而出问题的正是那一步。它是什么？代价是什么？）',
      a: 'The extra step is **reverse transcription: RNA is copied to cDNA before any PCR happens.** ' +
         'The PCR that follows is ordinary qPCR — it never sees RNA.\n\n' +
         'It costs you three things. First, efficiency: reverse transcriptase does not convert every ' +
         'transcript, and the conversion rate varies with the enzyme, the priming strategy (random ' +
         'hexamers, oligo-dT, or gene-specific) and the secondary structure of the transcript, so ' +
         'absolute quantification of RNA is harder to defend than of DNA. Second, a contamination ' +
         'mode that is unique to it: genomic DNA in the RNA prep is amplified by the same primers and ' +
         'is indistinguishable from cDNA, which is why primers are placed across an exon-exon ' +
         'junction where possible and why a no-RT control belongs on every plate. Third, RNA is far ' +
         'less stable than DNA, so a difference between samples can be a difference in handling.\n\n' +
         'The naming matters in an oral: **RT-PCR is reverse transcription PCR, not real-time PCR.** ' +
         'Real-time is qPCR. RT-qPCR is both at once. ' +
         '（多出的那一步是逆转录：在任何 PCR 发生之前，RNA 先被抄成 cDNA。随后的 PCR 就是普通的 qPCR——它从未见过 RNA。' +
         '代价有三个。第一是效率：逆转录酶不会把每一条转录本都转换，转换率随酶、引发策略（随机六聚体、oligo-dT 或基因特异引物）' +
         '以及转录本的二级结构而变，所以 RNA 的绝对定量比 DNA 更难站得住。第二是它独有的一种污染方式：' +
         'RNA 制备中的基因组 DNA 会被同一对引物扩增，与 cDNA 无法区分，这就是为什么引物尽可能跨外显子-外显子连接设计，' +
         '以及为什么每块板上都该有一个 no-RT 对照。第三，RNA 远不如 DNA 稳定，所以样品之间的差异可能只是操作上的差异。' +
         '在口试里名称很重要：RT-PCR 是逆转录 PCR，不是实时 PCR。实时的那个叫 qPCR。RT-qPCR 是两者同时。）'
    }
  ],

  points: [
    { term: 'Denaturation, near 95 degrees', en: 'Hydrogen bonds between the strands are broken so both become available as templates. Too long here costs polymerase activity, which is why cycle numbers and hold times are kept short.', cn: '变性，95 摄氏度附近：链间氢键被破坏，两条链都成为可用的模板。在这一步停留过久会损失聚合酶活性，这也是循环数与保持时间要短的原因。' },
    { term: 'Annealing, set by the primers', en: 'Primers bind their complements. The temperature is chosen from the primer melting temperature, typically a few degrees below it: too low and primers bind imperfect matches, too high and they do not bind at all.', cn: '退火，由引物决定：引物结合其互补序列。温度依据引物的熔解温度来选，通常低几度——太低引物会结合不完全匹配的位点，太高则根本不结合。' },
    { term: 'Extension, near 72 degrees', en: 'The optimum of Taq polymerase. Time is set by product length, since the enzyme synthesises at a roughly constant rate, so a long amplicon needs a longer extension step.', cn: '延伸，72 摄氏度附近：Taq 聚合酶的最适温度。时间由产物长度决定，因为酶的合成速率大致恒定，所以长扩增子需要更长的延伸时间。' },
    { term: 'The primers define the product', en: 'Two primers pointing towards each other set both ends. Specificity, product length and annealing temperature are all consequences of primer design, which is why design is where a PCR is won or lost.', cn: '引物定义产物：两条相向的引物确定了两端。特异性、产物长度、退火温度全都是引物设计的后果，这就是为什么一个 PCR 的成败在设计阶段就决定了。' },
    { term: 'Why it is exponential', en: 'Each cycle copies the original template and every product strand made so far, so copies grow as 2 to the power n. Thirty cycles is about a billion-fold in the ideal case.', cn: '为什么是指数式：每一轮既复制原始模板，也复制此前生成的每一条产物链，所以拷贝数以 2 的 n 次方增长。理想情况下三十轮约为十亿倍。' },
    { term: 'Thermostable polymerase', en: 'Taq from Thermus aquaticus survives the 95-degree step, which is what removed the need to add fresh enzyme every cycle and made the method practical. Taq has no proofreading; Pfu and Kapa-type enzymes have 3-prime to 5-prime exonuclease activity and far lower error rates.', cn: '耐热聚合酶：来自 Thermus aquaticus 的 Taq 能在 95 度那一步存活，正是它免去了每轮补加新鲜酶的麻烦，使这个方法变得可行。Taq 没有校对活性；Pfu 与 Kapa 类的酶具有 3\' 到 5\' 外切酶活性，错误率低得多。' },
    { term: 'dNTPs', en: 'The four building blocks, supplied in equimolar amounts. Unbalanced dNTPs raise the error rate, because the polymerase is more likely to insert whichever nucleotide is in excess.', cn: 'dNTP：四种原料，等摩尔供应。dNTP 不平衡会提高错误率，因为聚合酶更容易掺入过量的那一种核苷酸。' },
    { term: 'Magnesium is the parameter to justify', en: 'The polymerase is a magnesium-dependent enzyme and free magnesium also stabilises primer-template duplexes. Too little and the enzyme is slow; too much and mispriming and primer-dimers increase. It is what is titrated when a reaction misbehaves.', cn: '镁是那个要讲得出道理的参数：聚合酶是镁依赖的酶，游离镁同时稳定引物-模板双链。太少则酶变慢，太多则错配引发与引物二聚体增加。反应不正常时，被调的就是它。' },
    { term: 'Endpoint PCR plateaus', en: 'Reagents deplete and product strands reanneal, so the curve flattens. Plateau height is set by which reagent ran out first, not by starting template — a gel band means present, not abundant.', cn: '终点 PCR 会到平台：试剂耗尽、产物链之间复性，曲线变平。平台高度由哪种试剂先耗尽决定，而不是由起始模板决定——胶上一条带说明「有」，不是「多」。' },
    { term: 'Cq is the qPCR readout', en: 'The cycle at which fluorescence crosses a threshold set inside the exponential phase. It falls as starting template rises, and under perfect doubling a ten-fold difference is about 3.3 cycles.', cn: 'Cq 是 qPCR 的读数：荧光越过一条设在指数期内的阈值的那一轮。起始模板越多 Cq 越小，在完美翻倍下十倍差异约为 3.3 轮。' },
    { term: 'SYBR Green versus TaqMan', en: 'SYBR Green fluoresces on any double-stranded DNA, so primer-dimers count as signal and a melt curve is required as the check. A TaqMan probe adds a third sequence-specific binding event, so only the intended amplicon reports, and multiplexing becomes possible.', cn: 'SYBR Green 对比 TaqMan：SYBR Green 在任何双链 DNA 上都发荧光，所以引物二聚体也被计为信号，必须用熔解曲线作核对。TaqMan 探针加入了第三次序列特异的结合事件，于是只有目标扩增子报告信号，多重反应也成为可能。' },
    { term: 'Melt curve is the SYBR control', en: 'After cycling, the temperature is ramped and fluorescence tracked. One product gives one peak; a second peak at a different temperature means a second product, usually primer-dimer.', cn: '熔解曲线是 SYBR 的对照：循环结束后升温并追踪荧光。一种产物给出一个峰；在另一温度出现第二个峰意味着有第二种产物，通常是引物二聚体。' },
    { term: 'Efficiency from the standard curve slope', en: 'A slope near -3.32 corresponds to doubling each cycle. Far from it, the reaction is not doubling and neither absolute nor delta-delta-Cq arithmetic is safe.', cn: '从标准曲线斜率读效率：斜率接近 -3.32 对应每轮翻倍。离得远，反应就没有在翻倍，绝对定量与 delta-delta-Cq 的算术都不可靠。' },
    { term: 'Reverse transcription is a separate step', en: 'RNA is copied to cDNA first; the qPCR that follows never sees RNA. Conversion is incomplete and variable, so absolute RNA quantification is harder to defend than DNA.', cn: '逆转录是单独的一步：先把 RNA 抄成 cDNA，随后的 qPCR 从未见过 RNA。转换不完全且不稳定，所以 RNA 的绝对定量比 DNA 更难站得住。' },
    { term: 'The no-RT control', en: 'Genomic DNA in an RNA prep is amplified by the same primers and is indistinguishable from cDNA. A reaction run without reverse transcriptase reveals it, and exon-spanning primers avoid it by design.', cn: 'no-RT 对照：RNA 制备中的基因组 DNA 会被同一对引物扩增，与 cDNA 无法区分。不加逆转录酶跑一个反应就能暴露它，而跨外显子设计的引物从设计上就避开了它。' },
    { term: 'RT-PCR is not real-time PCR', en: 'RT means reverse transcription. Real-time is qPCR. RT-qPCR is both. Getting this wrong in an oral is a cheap and avoidable error.', cn: 'RT-PCR 不是实时 PCR：RT 指逆转录，实时的那个叫 qPCR，RT-qPCR 是两者同时。在口试里说错这个是廉价而且完全可以避免的失误。' }
  ],

  beyondPoints: [
    { term: 'The standard curve here is the same object as in node 1-1', en: 'A qPCR standard curve is a dilution series of known quantity, measured under the identical conditions as the unknown, with the unknown read off the fitted line — which is exactly the argument made about spectrophotometric standard curves. The two constraints carry over unchanged: the unknown must fall inside the range of the standards, because extrapolation assumes a relationship you did not measure; and the standards must be treated identically to the samples, because the curve calibrates the whole procedure, not the instrument. What is new in qPCR is that the slope carries a second piece of information, the amplification efficiency, so the calibration checks itself in a way an absorbance curve cannot.', cn: '这里的标准曲线和节点 1-1 里的是同一个东西：qPCR 的标准曲线是一组已知量的梯度稀释，在与未知样品完全相同的条件下测量，未知样品从拟合直线上读出——这正是关于分光光度标准曲线所讲的那套论证。两条约束原样适用：未知样品必须落在标准品的范围之内，因为外推假定了一个你并没有测量过的关系；标准品必须与样品完全同等对待，因为曲线校准的是整个流程，而不是仪器。qPCR 里新增的是斜率携带了第二条信息，即扩增效率，所以这条校准曲线能以吸光度曲线做不到的方式自我核对。' },
    { term: 'Why qPCR is the right answer to a microbiology question about PCR applications', en: 'Sheet 3 asks for the principle of PCR and its applications in microbiology, and the applications that matter are mostly quantitative or diagnostic rather than preparative: viral load in a patient sample, bacterial burden in a specimen, detection of an organism that cannot be cultured, and the 16S amplicon that is then sequenced for identification. Each of those is a qPCR or an amplicon-sequencing workflow rather than a gel. Answering with cloning and mutagenesis is not wrong but reads as a molecular-biology answer to a microbiology question, and the examiner asked the microbiology one.', cn: '为什么面对「PCR 的微生物学应用」这道题，qPCR 才是对的答案：卷三问的是 PCR 的原理及其在微生物学中的应用，而真正重要的应用大多是定量或诊断性的，而不是制备性的——病人样品中的病毒载量、标本中的细菌负荷、无法培养的病原体的检出，以及随后用于鉴定测序的 16S 扩增子。这几项都是 qPCR 或扩增子测序的流程，而不是一块胶。用克隆和诱变来回答并没有错，但那读起来像是用分子生物学的答案去回答一道微生物学的题，而考官问的是微生物学那道。' }
  ],

  terms: [
    { en: 'Denaturation', cn: '变性', def_en: 'The high-temperature step, near 95 degrees, that separates the two strands so both can serve as templates.', def_cn: '95 摄氏度附近的高温步骤，把两条链分开，使其都能作为模板。' },
    { en: 'Annealing temperature', cn: '退火温度', def_en: 'The temperature at which primers bind, chosen from the primer melting temperature; too low gives mispriming, too high gives no product.', def_cn: '引物结合的温度，依据引物熔解温度选定；太低导致错配引发，太高则没有产物。' },
    { en: 'Extension', cn: '延伸', def_en: 'Synthesis of the new strand at the polymerase optimum, near 72 degrees; the time needed scales with product length.', def_cn: '在聚合酶最适温度（72 摄氏度附近）合成新链；所需时间随产物长度增加。' },
    { en: 'Taq polymerase', cn: 'Taq 聚合酶', def_en: 'Thermostable polymerase from Thermus aquaticus; survives the denaturation step but has no proofreading activity.', def_cn: '来自 Thermus aquaticus 的耐热聚合酶；能在变性步骤中存活，但没有校对活性。' },
    { en: 'Proofreading', cn: '校对活性', def_en: '3-prime to 5-prime exonuclease activity that excises a misincorporated nucleotide, giving high-fidelity enzymes such as Pfu or Kapa a far lower error rate.', def_cn: '3\' 到 5\' 的外切酶活性，切除错误掺入的核苷酸，使 Pfu 或 Kapa 这类高保真酶的错误率低得多。' },
    { en: 'dNTP', cn: '脱氧核苷三磷酸', def_en: 'The four nucleotide building blocks, supplied in equimolar amounts; imbalance raises the error rate.', def_cn: '四种核苷酸原料，等摩尔供应；不平衡会提高错误率。' },
    { en: 'Magnesium', cn: '镁离子', def_en: 'Cofactor of the polymerase and a stabiliser of primer-template duplexes; the parameter titrated when a reaction misbehaves.', def_cn: '聚合酶的辅因子，同时稳定引物-模板双链；反应不正常时被调整的就是这个参数。' },
    { en: 'Plateau phase', cn: '平台期', def_en: 'The flat end of an endpoint PCR, whose height is set by reagent depletion rather than by starting template.', def_cn: '终点 PCR 末端的平坦部分，其高度由试剂耗尽决定，而非由起始模板决定。' },
    { en: 'Cq / Ct', cn: '循环阈值', def_en: 'The cycle at which fluorescence crosses a threshold inside the exponential phase; inversely related to starting template.', def_cn: '荧光在指数期内越过阈值的那一轮；与起始模板量成反比。' },
    { en: 'SYBR Green', cn: 'SYBR Green', def_en: 'Intercalating dye that fluoresces on any double-stranded DNA, so primer-dimers register as signal and a melt curve is required.', def_cn: '嵌入型染料，结合任何双链 DNA 均发荧光，因此引物二聚体也计为信号，必须配合熔解曲线。' },
    { en: 'TaqMan probe', cn: 'TaqMan 探针', def_en: 'A third oligonucleotide carrying reporter and quencher, cleaved by the polymerase 5-prime exonuclease activity so that only the intended amplicon gives signal.', def_cn: '带有报告基团与淬灭基团的第三条寡核苷酸，被聚合酶的 5\' 外切酶活性切开，因此只有目标扩增子给出信号。' },
    { en: 'Melt curve', cn: '熔解曲线', def_en: 'A post-run temperature ramp; one product gives one peak, and an extra peak reveals primer-dimer or a second amplicon.', def_cn: '反应结束后的升温过程；一种产物给出一个峰，多出的峰揭示引物二聚体或第二种扩增子。' },
    { en: 'Amplification efficiency', cn: '扩增效率', def_en: 'How close the reaction is to doubling each cycle, read from the standard curve slope; about -3.32 corresponds to perfect doubling.', def_cn: '反应有多接近每轮翻倍，从标准曲线斜率读出；约 -3.32 对应完美翻倍。' },
    { en: 'Delta-delta-Cq', cn: '双差 Cq 法', def_en: 'Relative quantification: normalise to a reference gene, then to a control condition, and report 2 to the power minus delta-delta-Cq. Assumes equal efficiency of both amplicons.', def_cn: '相对定量：先对内参基因归一化，再对对照条件归一化，报告 2 的负 delta-delta-Cq 次方。它假定两个扩增子效率相同。' },
    { en: 'Reverse transcription', cn: '逆转录', def_en: 'Copying RNA to cDNA before amplification; incomplete and variable, and the step that introduces the no-RT control requirement.', def_cn: '在扩增之前把 RNA 抄成 cDNA；转换不完全且不稳定，也是引入 no-RT 对照这一要求的那一步。' },
    { en: 'No-RT control', cn: 'no-RT 对照', def_en: 'A reaction run without reverse transcriptase, which reveals genomic DNA carried over in an RNA preparation.', def_cn: '不加逆转录酶的反应，用于揭示 RNA 制备中残留的基因组 DNA。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'Two PCR reactions started from template amounts differing a hundred-fold, yet both gel bands look equally bright. What does this show?',
      q_cn: '两个 PCR 反应的起始模板量相差一百倍，但胶上两条带看起来一样亮。这说明了什么？',
      options: [
        'One reaction was inhibited early, so the two converged by coincidence rather than by mechanism',
        'Both reactions reached plateau',
        'The primers annealed non-specifically in the more dilute reaction and produced extra product',
        'The dilute sample must have been contaminated with template from the concentrated one'
      ],
      answer: 1,
      why_en: 'Plateau height is set by which reagent ran out first, not by how much template was there at the start. This is the whole reason endpoint PCR is qualitative: a band means the sequence was present, and says almost nothing about how much.',
      why_cn: '平台高度由哪种试剂先耗尽决定，而不是由起始时有多少模板决定。这正是终点 PCR 只能定性的全部原因：一条带说明这段序列存在，几乎不说明它有多少。'
    },
    { type: 'mcq',
      q_en: 'A SYBR Green qPCR gives a clean amplification curve, but the melt curve shows two peaks. What is the most likely explanation?',
      q_cn: '一个 SYBR Green qPCR 的扩增曲线很干净，但熔解曲线出现两个峰。最可能的解释是什么？',
      options: [
        'The threshold was set outside the exponential phase, so the reported Cq is unreliable',
        'A second product is present',
        'The reverse transcription step converted only part of the RNA in the sample',
        'The reference gene was amplified in the same well as the target by mistake'
      ],
      answer: 1,
      why_en: 'SYBR Green fluoresces on any double-stranded DNA, so a primer-dimer or mispriming product contributes to the amplification curve indistinguishably from the target. Products of different length or GC content melt at different temperatures, which is exactly what the melt curve is run to detect.',
      why_cn: 'SYBR Green 在任何双链 DNA 上都发荧光，所以引物二聚体或错配产物对扩增曲线的贡献与目标产物无法区分。长度或 GC 含量不同的产物熔解温度不同，而熔解曲线正是为了检出这一点才跑的。',
      optionNotes: {
        0: { en: 'A badly placed threshold does corrupt Cq, but it distorts the amplification curve reading rather than creating a second melt peak. The melt curve is run after cycling and is independent of where the threshold sat.', cn: '阈值设错确实会污染 Cq，但它扭曲的是扩增曲线的读数，而不会造出第二个熔解峰。熔解曲线是在循环结束后跑的，与阈值设在哪里无关。' }
      }
    },
    { type: 'mcq',
      q_en: 'In qPCR, a sample with ten times more starting template than another will have a Cq that is:',
      q_cn: '在 qPCR 中，起始模板量是另一个样品十倍的样品，其 Cq 会：',
      options: [
        'Higher by about 3.3 cycles, since more template needs more cycles to saturate the detector',
        'Lower by about 3.3 cycles',
        'Unchanged, because Cq reports the threshold setting rather than the template amount',
        'Lower by exactly 10 cycles, following the ten-fold difference directly'
      ],
      answer: 1,
      why_en: 'More template crosses the threshold sooner, so Cq falls. The size of the shift comes from the exponential: 2 to the power 3.3 is roughly 10, so a ten-fold difference is about 3.3 cycles when the reaction is doubling properly.',
      why_cn: '模板越多越早越过阈值，所以 Cq 下降。位移的大小来自指数关系：2 的 3.3 次方约等于 10，所以在反应正常翻倍时，十倍差异约为 3.3 轮。'
    },
    { type: 'short',
      q_en: 'List the components of a PCR mixture and give the role of each. Which one would you change first if the reaction gave smeared, non-specific product?',
      q_cn: '列出 PCR 体系的组分并说明各自的作用。如果反应出现拖尾的非特异产物，你会先调哪一个？',
      accept: ['template', '模板', 'primer', '引物', 'polymerase', '聚合酶', 'dNTP', 'magnesium', '镁', 'buffer', '缓冲液', 'annealing', '退火'],
      answer_en: 'The mixture is template DNA; two primers, which define both ends of the product and set the annealing temperature; a thermostable polymerase such as Taq, or a proofreading enzyme such as Pfu or Kapa when fidelity matters; the four dNTPs in equimolar amounts as building blocks; magnesium, which is the cofactor of the polymerase and also stabilises primer-template duplexes; and a buffer holding pH and ionic strength. If the product were smeared and non-specific I would lower the magnesium first, because excess free magnesium stabilises imperfectly matched primer-template pairs and so promotes mispriming and primer-dimers, and it is the component with the widest usable range. In parallel I would raise the annealing temperature, since that also penalises imperfect matches, and I would check the primer design for self-complementarity before changing anything else.',
      answer_cn: '体系包括：模板 DNA；两条引物，它们定义产物的两端并决定退火温度；一种耐热聚合酶，如 Taq，或在需要保真度时用 Pfu、Kapa 这类带校对活性的酶；等摩尔的四种 dNTP 作为原料；镁离子，它既是聚合酶的辅因子，也稳定引物-模板双链；以及维持 pH 与离子强度的缓冲液。如果产物拖尾且非特异，我会先降镁，因为过量的游离镁会稳定不完全匹配的引物-模板配对，从而促进错配引发与引物二聚体，而且它是可用范围最宽的那个组分。同时我会提高退火温度，因为那同样惩罚不完全匹配；在改动其他任何东西之前，我会先检查引物设计有没有自身互补。'
    }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'What sets the annealing temperature of a PCR?',
      q_cn: 'PCR 的退火温度由什么决定？',
      options: [
        'The optimum working temperature of the polymerase being used',
        'The melting temperature of the primers',
        'The GC content of the template genome as a whole',
        'The length of the product the reaction is meant to generate'
      ],
      answer: 1,
      why_en: 'Annealing is a primer-binding step, so the primers set it, typically a few degrees below their melting temperature. Product length sets the extension time instead, and the polymerase optimum sets the extension temperature.',
      why_cn: '退火是引物结合的一步，所以由引物决定，通常取比其熔解温度低几度。产物长度决定的是延伸时间，聚合酶的最适温度决定的是延伸温度。'
    },
    { type: 'mcq',
      q_en: 'Why was the discovery of a thermostable polymerase what made PCR practical?',
      q_cn: '为什么耐热聚合酶的发现才使 PCR 变得可行？',
      options: [
        'It raised the fidelity of copying enough for the product to be sequenced directly',
        'It survives the denaturation step',
        'It works without magnesium, which removed the hardest parameter to control',
        'It allowed the reaction to run at a single temperature throughout'
      ],
      answer: 1,
      why_en: 'Before Taq, the 95-degree step destroyed the polymerase and fresh enzyme had to be added after every cycle. Surviving denaturation is what allowed the reaction to be automated in a thermal cycler. Taq has no proofreading, so fidelity was not the gain.',
      why_cn: '在 Taq 之前，95 度那一步会破坏聚合酶，每一轮之后都要补加新鲜的酶。能在变性中存活，才使反应可以在热循环仪里自动完成。Taq 没有校对活性，所以提高的并不是保真度。'
    },
    { type: 'mcq',
      q_en: 'A colleague says their result came from RT-PCR. What does the RT stand for?',
      q_cn: '同事说他们的结果来自 RT-PCR。这里的 RT 指什么？',
      options: [
        'Real-time, meaning fluorescence was measured every cycle',
        'Reverse transcription',
        'Room temperature, describing how the reaction was assembled',
        'Reduced thermal, meaning a shortened denaturation step was used'
      ],
      answer: 1,
      why_en: 'RT is reverse transcription: RNA was copied to cDNA before amplification. Real-time PCR is qPCR, and RT-qPCR is both together. Confusing the two in an oral is a cheap error to avoid.',
      why_cn: 'RT 指逆转录：RNA 在扩增之前被抄成了 cDNA。实时 PCR 叫 qPCR，RT-qPCR 是两者同时。在口试里混淆这两个是一个很廉价、完全可以避免的失误。'
    },
    { type: 'mcq',
      q_en: 'Why is a no-RT control included in an RT-qPCR experiment?',
      q_cn: '为什么 RT-qPCR 实验里要包含一个 no-RT 对照？',
      options: [
        'To measure how efficiently the reverse transcriptase converted the RNA',
        'To reveal genomic DNA in the RNA preparation',
        'To establish the fluorescence baseline before the exponential phase begins',
        'To confirm that the reference gene is expressed evenly across conditions'
      ],
      answer: 1,
      why_en: 'Genomic DNA carried over in an RNA prep is amplified by the same primers and is indistinguishable from cDNA. Omitting reverse transcriptase means any remaining signal must have come from DNA. Exon-spanning primers avoid the problem by design.',
      why_cn: 'RNA 制备中残留的基因组 DNA 会被同一对引物扩增，与 cDNA 无法区分。不加逆转录酶，则任何仍然出现的信号必定来自 DNA。跨外显子设计的引物从设计上避开了这个问题。'
    },
    { type: 'mcq',
      q_en: 'A qPCR standard curve has a slope of -3.9. What does that tell you?',
      q_cn: '一条 qPCR 标准曲线的斜率是 -3.9。这说明什么？',
      options: [
        'The dilution series spanned too narrow a range of concentrations',
        'Amplification is well below full doubling per cycle',
        'The threshold was placed above the exponential phase of the reaction',
        'The standards degraded between preparation and measurement'
      ],
      answer: 1,
      why_en: 'A slope near -3.32 corresponds to doubling every cycle. A steeper slope means each ten-fold dilution costs more than 3.3 cycles, so the reaction amplifies less than two-fold per cycle — often an inhibitor carried in with the sample, or a poorly designed amplicon.',
      why_cn: '斜率接近 -3.32 对应每轮翻倍。斜率更陡意味着每稀释十倍要多花超过 3.3 轮，也就是每轮扩增不到两倍——常见原因是样品带入了抑制剂，或者扩增子设计不佳。'
    },
    { type: 'mcq',
      q_en: 'Which qPCR chemistry allows several targets to be measured in one well?',
      q_cn: '哪一种 qPCR 化学允许在同一个孔里测量多个靶标？',
      options: [
        'SYBR Green, provided each target has a distinct melting temperature',
        'TaqMan probes',
        'Either, since the instrument separates targets by amplification curve shape',
        'Neither, because one well can only ever report one amplicon'
      ],
      answer: 1,
      why_en: 'Each TaqMan probe binds its own sequence and can carry a different reporter dye, so signals separate by colour. SYBR Green reports all double-stranded DNA identically and cannot distinguish targets, whatever their melting temperatures.',
      why_cn: '每条 TaqMan 探针结合自己的序列，并且可以带不同的报告染料，所以信号靠颜色区分。SYBR Green 对所有双链 DNA 的报告方式完全相同，无论熔解温度如何都无法区分靶标。'
    },
    { type: 'mcq',
      q_en: 'You need copies per microlitre of a virus in a patient sample. Which approach is required?',
      q_cn: '你需要得到病人样品中病毒的每微升拷贝数。需要用哪种方法？',
      options: [
        'Delta-delta-Cq against a housekeeping gene in the same sample',
        'A standard curve of known quantity run on the same plate',
        'Endpoint PCR with band intensity compared against a size marker',
        'A melt curve, reading the peak height as proportional to amount'
      ],
      answer: 1,
      why_en: 'Delta-delta-Cq gives a fold change relative to a control, not an absolute number. An absolute quantity needs a dilution series of known concentration measured under identical conditions, with the unknown read off the fitted line — the same argument as any standard curve.',
      why_cn: 'delta-delta-Cq 给出的是相对于对照的倍数变化，不是绝对数。绝对定量需要一组已知浓度的梯度稀释，在完全相同的条件下测量，未知样品从拟合直线上读出——和任何标准曲线是同一套论证。'
    },
    { type: 'short',
      q_en: 'Explain the principle of PCR and name three applications in microbiology.',
      q_cn: '解释 PCR 的原理，并说出它在微生物学中的三个应用。',
      accept: ['denaturation', '变性', 'annealing', '退火', 'extension', '延伸', 'exponential', '指数', 'primer', '引物', '16S', 'viral load', '病毒载量', 'diagnos', '诊断'],
      answer_en: 'PCR copies a defined region of DNA exponentially using a repeated temperature cycle. Denaturation near 95 degrees separates the strands; annealing at a temperature set by the primers lets two primers, pointing towards each other, bind and define both ends of the product; extension near 72 degrees lets a thermostable polymerase synthesise the new strands. Because each cycle copies the template and every product made so far, the amount grows as 2 to the power n. In microbiology the applications are mostly diagnostic and quantitative rather than preparative. First, detection and identification: amplifying the 16S ribosomal RNA gene with universal primers and sequencing the product identifies a bacterium without culturing it, which matters because most environmental bacteria have never been cultured. Second, quantification: qPCR gives viral load in a patient sample or bacterial burden in a specimen, by measuring fluorescence every cycle and reporting the cycle at which it crosses a threshold. Third, detecting specific genes rather than organisms — a resistance determinant or a toxin gene — which answers a clinical question faster than a phenotypic test can.',
      answer_cn: 'PCR 用重复的温度循环把一段确定的 DNA 区域指数式地复制。95 摄氏度附近的变性把双链分开；在由引物决定的温度下退火，让两条相向的引物结合并定义产物的两端；72 摄氏度附近的延伸让耐热聚合酶合成新链。因为每一轮既复制模板也复制此前生成的全部产物，总量以 2 的 n 次方增长。在微生物学里，它的应用主要是诊断性和定量的，而不是制备性的。第一是检出与鉴定：用通用引物扩增 16S 核糖体 RNA 基因并测序，可以在不培养的前提下鉴定一个细菌，这很重要，因为大多数环境细菌从未被培养过。第二是定量：qPCR 通过每轮测量荧光并报告越过阈值的那一轮，给出病人样品中的病毒载量或标本中的细菌负荷。第三是检测特定基因而非特定菌——某个耐药决定簇或某个毒素基因——它比表型试验更快地回答一个临床问题。'
    },
    { type: 'short',
      q_en: 'What is the difference between PCR and qPCR, and why does it matter?',
      q_cn: 'PCR 与 qPCR 的区别是什么？为什么这个区别重要？',
      accept: ['real-time', '实时', 'fluorescence', '荧光', 'Cq', 'Ct', 'exponential', '指数', 'plateau', '平台', 'quantitative', '定量'],
      answer_en: 'The chemistry of the amplification is the same; what differs is when the measurement is taken. Ordinary PCR is looked at once, at the end, usually on a gel. By then the reaction has plateaued because reagents are depleted and product strands reanneal, and plateau height is set by which reagent ran out first rather than by starting template — so two reactions differing a hundred-fold can look identical. That makes endpoint PCR qualitative: a band means the sequence was present. qPCR adds a fluorescent readout measured every cycle, so the reaction is observed while it is still exponential. The reported quantity is Cq, the cycle at which fluorescence crosses a threshold set inside the exponential region, and it falls as starting template rises — about 3.3 cycles per ten-fold when the reaction is doubling properly. This matters because it converts PCR from a presence-or-absence test into a measurement, which is what viral load, bacterial burden and gene-expression work all require.',
      answer_cn: '扩增的化学过程是一样的，不同的是测量发生在什么时候。普通 PCR 只在最后看一次，通常是在胶上。到那时反应已经到达平台，因为试剂耗尽、产物链之间发生复性，而平台高度由哪种试剂先耗尽决定，不是由起始模板决定——所以起始量相差一百倍的两个反应可以看起来完全一样。这使终点 PCR 只能定性：一条带说明这段序列存在。qPCR 加入了每轮测量的荧光读数，于是反应在还处于指数期时就被观察。报告的量是 Cq，即荧光越过一条设在指数区内的阈值的那一轮，起始模板越多它越小——反应正常翻倍时，大约每十倍差 3.3 轮。这个区别之所以重要，是因为它把 PCR 从一个有无试验变成了一次测量，而病毒载量、细菌负荷和基因表达研究要的都是测量。'
    }
  ],

  oral: {
    q_en: 'Explain the principle of PCR and its applications in microbiology.',
    q_cn: '解释 PCR 的原理及其在微生物学中的应用。',
    model_en: 'PCR is exponential copying of a defined DNA region, driven by a repeated temperature ' +
              'cycle. Denaturation near 95 degrees separates the strands so both are available as ' +
              'templates. Annealing, at a temperature chosen from the melting temperature of the ' +
              'primers, lets two primers pointing towards each other bind — and those primers define ' +
              'both ends of the product, so specificity is a matter of primer design. Extension near ' +
              '72 degrees lets a thermostable polymerase build the new strands; Taq from Thermus ' +
              'aquaticus survives the denaturation step, and that is what allowed the whole reaction ' +
              'to be automated. Because each cycle copies the original template and everything made ' +
              'so far, the product grows as 2 to the power n. The mixture is template, two primers, ' +
              'polymerase, the four dNTPs, magnesium and buffer, and magnesium is the one worth ' +
              'justifying, since it is the polymerase cofactor and also stabilises primer-template ' +
              'pairing, so it is what I would lower first if I saw non-specific product. For ' +
              'microbiology the important applications are diagnostic rather than preparative, and ' +
              'they mostly require the quantitative version. Amplifying 16S with universal primers ' +
              'and sequencing the amplicon identifies an organism without culturing it, which matters ' +
              'because most environmental bacteria have never been cultured. qPCR gives viral load or ' +
              'bacterial burden, by reading fluorescence every cycle and reporting Cq, the cycle at ' +
              'which fluorescence crosses a threshold inside the exponential phase; Cq falls as ' +
              'template rises, about 3.3 cycles per ten-fold. And PCR detects specific genes rather ' +
              'than organisms — a resistance determinant, a toxin gene — faster than a phenotypic ' +
              'test. If asked why endpoint PCR will not do for these, the answer is that it ' +
              'plateaus: the final amount is set by which reagent ran out first, so a gel band means ' +
              'present, not abundant.',
    model_cn: 'PCR 是对一段确定的 DNA 区域的指数式复制，由重复的温度循环驱动。95 摄氏度附近的变性把双链分开，' +
              '使两条链都能作模板。退火的温度依据引物的熔解温度选定，让两条相向的引物结合——这两条引物定义了产物的两端，' +
              '所以特异性是引物设计的问题。72 摄氏度附近的延伸让耐热聚合酶合成新链；来自 Thermus aquaticus 的 Taq ' +
              '能在变性步骤中存活，正是它使整个反应可以自动化。因为每一轮既复制原始模板也复制此前生成的一切，' +
              '产物以 2 的 n 次方增长。体系是模板、两条引物、聚合酶、四种 dNTP、镁和缓冲液，其中镁最值得讲出道理，' +
              '因为它既是聚合酶的辅因子，也稳定引物-模板配对，所以看到非特异产物时我会先降它。' +
              '就微生物学而言，重要的应用是诊断性而非制备性的，而且大多需要定量的那个版本。' +
              '用通用引物扩增 16S 并对扩增子测序，可以在不培养的前提下鉴定一个菌，这很重要，因为大多数环境细菌从未被培养过。' +
              'qPCR 通过每轮读荧光并报告 Cq——荧光在指数期内越过阈值的那一轮——给出病毒载量或细菌负荷；' +
              '模板越多 Cq 越小，大约每十倍差 3.3 轮。此外 PCR 还能检测特定基因而非特定菌——某个耐药决定簇、某个毒素基因——' +
              '比表型试验更快。如果被追问为什么终点 PCR 不能用于这些，答案是它会到平台：' +
              '最终的量由哪种试剂先耗尽决定，所以胶上一条带说明「有」，不是「多」。',
    checklist: [
      { en: 'Three temperatures, and why each one is where it is', cn: '三个温度，以及每个温度为什么在那里' },
      { en: 'Primers define both the product and the annealing temperature', cn: '引物同时定义产物和退火温度' },
      { en: 'Say explicitly why it is exponential — each cycle copies the products too', cn: '明确说出为什么是指数式——每一轮也复制此前的产物' },
      { en: 'Thermostable polymerase gave automation, not higher fidelity', cn: '耐热聚合酶带来的是自动化，不是更高的保真度' },
      { en: 'Six components, with magnesium justified rather than just listed', cn: '六种组分，其中镁要讲出道理而不只是列出来' },
      { en: 'Endpoint plateaus, so a band means present and not abundant', cn: '终点法会到平台，所以一条带说明「有」而不是「多」' },
      { en: 'qPCR measures during the exponential phase; Cq falls as template rises', cn: 'qPCR 在指数期内测量；模板越多 Cq 越小' },
      { en: '16S amplicon sequencing for identification without culture', cn: '16S 扩增子测序，不培养也能鉴定' },
      { en: 'Viral load and bacterial burden as the quantitative applications', cn: '病毒载量与细菌负荷作为定量应用' },
      { en: 'Gene detection — resistance or toxin genes — as the third application', cn: '基因检测——耐药或毒素基因——作为第三类应用' }
    ]
  }
},

{
  id: '4-2',
  chapter: 4,
  lecture: 'Mol Biol',
  section: '4.2',
  slides: 'MC250P16N 大纲「Identifikace a interakce proteinu — dvouhybridovy system v kvasinkach」· molbio Tier 1（蛋白互作）',
  coverage: 'partial',
  enTitle: 'Detecting protein-protein interactions — two-hybrid, pull-down and co-IP, SPR and ITC',
  cnTitle: '检测蛋白质相互作用——双杂交、pull-down 与 co-IP、SPR 与 ITC',
  coverageNote: 'Written fresh for this bank; this is a GAP node and its facts are NOT traceable to a ' +
                'source node, so treat it as the model speaking rather than as the book speaking. ' +
                'The gap was measured across all seven corpora, 13 MB, in both languages: ' +
                'SPR / Biacore / ITC score zero hits anywhere, yeast two-hybrid has 10 raw ' +
                'mentions and no node titled after it, and pull-down / co-IP has 18. It is the ' +
                'emptiest measured topic after structural biology. It earns a node because the ' +
                'syllabus of Molekularni biologie a genetika II names it outright — monoklonalni ' +
                'protilatky, protein-proteinove interakce, dvouhybridovy system v kvasinkach — and ' +
                'because protein-protein interaction is the supervisor\'s own research field, which ' +
                'makes it the likeliest place for a follow-up to go deep.',

  summary: {
    en: 'Four methods answer four different questions, and the commonest oral mistake is to offer one ' +
        'as if it answered all of them. The yeast two-hybrid splits a transcription factor into its ' +
        'DNA-binding domain and its activation domain, fuses one protein to each, and reads out ' +
        'reporter transcription: if the two proteins touch, the activator is reconstituted and the ' +
        'yeast grows. It is binary, it happens in a living nucleus, it scales to whole libraries ' +
        'because the readout is growth rather than a measurement — and it says only yes or no. ' +
        'Co-immunoprecipitation pulls an endogenous protein out of a lysate with an antibody and asks ' +
        'what came with it: native abundance, native modifications, but no way to tell a direct ' +
        'partner from one bridged by a third protein. A pull-down uses a purified tagged bait instead ' +
        'of an antibody, and when both partners are pure it is the experiment that demonstrates ' +
        'direct binding. Neither gives a number. Surface plasmon resonance immobilises one partner on ' +
        'a chip and flows the other over it, watching binding in real time without any label, so it ' +
        'reports the association and dissociation rate constants and therefore the dissociation ' +
        'constant as their ratio. Isothermal titration calorimetry titrates one into the other in ' +
        'free solution and measures the heat, giving the dissociation constant, the enthalpy and the ' +
        'stoichiometry from a single experiment with nothing immobilised and nothing labelled. ' +
        'The honest summary is that no single method proves an interaction happens in a cell, so the ' +
        'standard shape of an answer is a screen, then a cellular confirmation, then a number on ' +
        'purified protein.',
    cn: '四种方法回答的是四个不同的问题，而口试里最常见的错误就是拿其中一种当成能回答全部。' +
        '酵母双杂交把一个转录因子拆成 DNA 结合结构域和激活结构域，把两个待测蛋白各融合到一半上，' +
        '再用报告基因的转录作读数：两个蛋白如果接触，激活因子被重新拼起来，酵母就能长。' +
        '它是二元的、发生在活的细胞核里、并且因为读数是「长不长」而不是一次测量，所以能放大到整个文库——' +
        '而它只回答有或没有。免疫共沉淀用抗体把内源蛋白从裂解液里拉出来，再问跟着一起下来的是谁：' +
        '天然的丰度、天然的修饰，但没有办法区分直接的伙伴和被第三个蛋白搭桥的伙伴。' +
        'pull-down 用纯化的带标签诱饵取代抗体，当两边都是纯品时，它就是那个能证明直接结合的实验。' +
        '这两个都不给数字。表面等离子共振把一方固定在芯片上、让另一方流过，在完全不加标记的情况下实时看结合，' +
        '因此报告结合速率常数和解离速率常数，进而给出作为二者之比的解离常数。' +
        '等温滴定量热法把一方滴进另一方的自由溶液里并测量热量，一次实验就同时给出解离常数、焓变和化学计量比，' +
        '既不固定也不标记。诚实的总结是：没有任何单一方法能证明一次相互作用真的发生在细胞里，' +
        '所以一个答案的标准形状是——先筛选，再在细胞里确认，最后在纯蛋白上拿到数字。'
  },

  mustKnow: 'Sort the methods by **what question they answer**, not by how they work. ' +
            '**Two-hybrid = binary yes/no, in a living nucleus, scalable to libraries. ' +
            'Co-IP = who is in the complex, at native abundance, but direct and indirect look the ' +
            'same. Pull-down with two pure proteins = direct binding. SPR and ITC = the number.** ' +
            'SPR uniquely gives the two rate constants and therefore residence time; ITC uniquely ' +
            'gives enthalpy and stoichiometry with nothing immobilised. ' +
            '按「回答什么问题」给这些方法分类，而不是按原理分类：双杂交给有无，co-IP 给复合物成员，' +
            '两边都纯的 pull-down 给直接结合，SPR 与 ITC 给数字。',

  skipIt: 'Do not memorise chip surface chemistries, buffer recipes, or the model numbers of ' +
          'instruments. Do not memorise the full list of two-hybrid reporter strains. The two ' +
          'numbers worth carrying are that the dissociation constant is the ratio of the off rate ' +
          'to the on rate, and that residence time is the reciprocal of the off rate; everything ' +
          'else numeric here is instrument convention. ' +
          '不用背芯片表面化学、缓冲液配方或仪器型号，也不用背双杂交报告菌株的完整清单。' +
          '值得带走的数字只有两个：解离常数等于解离速率常数除以结合速率常数，' +
          '停留时间是解离速率常数的倒数。',

  explain: [
    {
      q: 'Why does the yeast two-hybrid use a transcription factor at all, instead of measuring the ' +
         'two proteins directly? '  +
         '（酵母双杂交为什么要绕道一个转录因子，而不是直接测这两个蛋白？）',
      a: '**Because a transcription factor is the only common laboratory protein whose function can ' +
         'be split in two and then restored by an event that has nothing to do with it.**\n\n' +
         'A eukaryotic activator such as Gal4 has two parts that do separable jobs: a DNA-binding ' +
         'domain that finds the promoter, and an activation domain that recruits the transcription ' +
         'machinery once something is bound there. Neither half works alone. The DNA-binding domain ' +
         'sits on the reporter promoter and does nothing; the activation domain floats in the nucleus ' +
         'and never reaches the promoter.\n\n' +
         'So you fuse your first protein, the bait, to the DNA-binding domain, and your second, the ' +
         'prey, to the activation domain. If bait and prey touch each other, they carry the two ' +
         'halves into the same place and a working activator exists again. The reporter is ' +
         'transcribed. **The interaction is not measured; it is converted into transcription.**\n\n' +
         'That conversion is the whole point, because it turns a biophysical question into a growth ' +
         'question. With an auxotrophy reporter such as HIS3, cells in which bait and prey interact ' +
         'make their own histidine and grow on medium lacking it, and cells in which they do not ' +
         'interact simply fail to appear. **A growth readout is a selection, not a screen** — you are ' +
         'not looking at every clone, you are letting the plate discard them for you — which is why ' +
         'one transformation can interrogate a library of millions against a single bait. No ' +
         'measurement-based method scales that way. ' +
         '（因为转录因子是实验室里唯一一种可以被拆成两半、又能被一个与它本身完全无关的事件重新接上的常用蛋白。' +
         '像 Gal4 这样的真核激活因子有两个功能可分离的部分：一个 DNA 结合结构域负责找到启动子，' +
         '一个激活结构域负责在有东西结合上去之后招募转录机器。两半单独都不工作。' +
         '于是把第一个蛋白（诱饵）融合到 DNA 结合结构域上，把第二个（猎物）融合到激活结构域上。' +
         '两者如果接触，就把两半带到同一个位置，一个有功能的激活因子重新存在，报告基因被转录。' +
         '相互作用不是被测量的，而是被转换成了转录。这个转换才是关键，因为它把一个生物物理问题变成了一个能不能长的问题。' +
         '用 HIS3 这类营养缺陷型报告基因时，诱饵与猎物有相互作用的细胞能自己合成组氨酸、在缺组氨酸的培养基上长起来，' +
         '没有相互作用的细胞则根本不出现。以生长为读数意味着这是筛选压力而不是逐个检查——' +
         '你不是在看每一个克隆，而是让平板替你把它们淘汰掉——这就是为什么一次转化就能让一个诱饵对上几百万的文库。' +
         '任何基于测量的方法都不可能这样放大。）'
    },
    {
      q: 'A two-hybrid screen returns a partner that no other method confirms. Where do the false ' +
         'positives and the false negatives actually come from? ' +
         '（双杂交筛出一个别的方法都验不出来的伙伴。假阳性和假阴性到底从哪儿来？）',
      a: '**Both come from the same source: the assay moved the interaction to a place it does not ' +
         'normally happen — the yeast nucleus — and forced it to happen there at a concentration it ' +
         'does not normally have.**\n\n' +
         'False positives, in order of how often they bite. A **self-activating bait**: some proteins ' +
         'recruit transcription machinery on their own, so the reporter fires with no prey at all. ' +
         'This is why the bait-alone control is not optional and is run before the screen, not after. ' +
         '**Overexpression**: both fusions are driven from strong promoters, and two proteins pushed ' +
         'to high concentration in one compartment will touch surfaces they would never meet at ' +
         'physiological abundance. **Sticky proteins** with exposed hydrophobic patches come up ' +
         'against many unrelated baits, which is why a candidate that appears in other people\'s ' +
         'screens against unrelated baits is treated as suspect.\n\n' +
         'False negatives are the mirror image. The interaction has to occur **in the nucleus**, so ' +
         'a partnership that requires a membrane, a lumenal compartment, or an oxidising environment ' +
         'for disulfide formation cannot be reported. Interactions that require a **post-translational ' +
         'modification** yeast does not make — a specific phosphorylation, a mammalian glycan — are ' +
         'invisible for the same reason. And fusing a domain to either terminus can block the very ' +
         'surface that binds, which is why a negative result is often re-run with the tags swapped.\n\n' +
         '**The consequence for an oral answer:** a two-hybrid hit is a hypothesis, and the sentence ' +
         'the examiner is waiting for is what you would do next. Confirm in the relevant cell type by ' +
         'co-immunoprecipitation, then demonstrate directness on purified protein. ' +
         '（两者来自同一个源头：这个实验把相互作用搬到了它平常不发生的地方——酵母的细胞核——' +
         '并且逼它在一个平常达不到的浓度下发生。' +
         '假阳性，按发生频率排：自激活的诱饵——有些蛋白自己就能招募转录机器，没有猎物报告基因也会开，' +
         '所以「只有诱饵」这个对照不是可选项，而且要在筛选之前跑，不是之后；过表达——两个融合蛋白都由强启动子驱动，' +
         '两个被推到高浓度、又挤在同一个区室里的蛋白，会碰到它们在生理丰度下永远不会碰到的表面；' +
         '以及「粘」的蛋白——表面有暴露疏水区的蛋白会在很多不相干的诱饵里都冒出来，' +
         '所以一个在别人针对不相干诱饵的筛选里也反复出现的候选者，应当被当作可疑对象。' +
         '假阴性是它的镜像。相互作用必须发生在细胞核里，所以需要膜、需要腔室、或需要氧化环境形成二硫键的搭档无法被报告；' +
         '需要酵母做不出来的翻译后修饰——某个特定的磷酸化、某种哺乳动物糖链——的相互作用同样看不见。' +
         '而把一个结构域融合到任一端，都可能正好挡住负责结合的那个面，所以阴性结果常常要把标签换一端重跑。' +
         '对口试的意义：双杂交的阳性结果是一个假说，考官在等的那句话是你下一步做什么——' +
         '先在相关的细胞类型里用免疫共沉淀确认，再在纯化蛋白上证明是直接结合。）'
    },
    {
      q: 'Co-IP and pull-down both end with beads, a wash and a gel. What is the actual difference, ' +
         'and which controls decide whether either result means anything? ' +
         '（co-IP 和 pull-down 最后都是珠子、洗、跑胶。真正的区别是什么？哪些对照决定了结果有没有意义？）',
      a: '**The difference is what does the catching, and it decides what the experiment can conclude.**\n\n' +
         'In a **co-immunoprecipitation** the catcher is an antibody against an endogenous protein. ' +
         'Nothing is overexpressed and nothing is tagged, so the bait is present at its natural ' +
         'abundance carrying its natural modifications, and whatever is genuinely in a complex with ' +
         'it in that lysate comes down too. The price is that **you cannot tell direct from ' +
         'indirect**: if A binds B and B binds C, an antibody against A brings down C, and the gel ' +
         'looks exactly the same as if A bound C itself. A co-IP establishes complex membership, not ' +
         'contact.\n\n' +
         'In a **pull-down** the catcher is a purified recombinant bait immobilised through a tag — ' +
         'GST on glutathione resin, His on nickel. Run against a lysate it has the same ' +
         'direct-or-indirect ambiguity as a co-IP. **Run against a second purified protein it does ' +
         'not**, because there is no third protein present to bridge them, and that is the one ' +
         'configuration in this whole node that demonstrates direct binding.\n\n' +
         'The controls are what separate a result from a picture of things that stick to agarose:\n\n' +
         '- **Beads alone**, no bait. Anything appearing here binds the matrix, not your protein.\n' +
         '- **Tag alone** — GST with nothing fused — for a pull-down. A surprising number of ' +
         'candidate partners turn out to like GST.\n' +
         '- **Non-specific antibody of the same isotype** for a co-IP, since immunoglobulin itself ' +
         'captures things.\n' +
         '- **The input lane**, so the reader can see what fraction was recovered rather than only ' +
         'that something was.\n\n' +
         'Wash stringency is the hidden variable behind all of it. Harsher washes lower the ' +
         'background and progressively strip real but weakly bound partners, so the method is ' +
         'systematically biased towards **stable** complexes and loses transient ones. Chemical ' +
         'crosslinking before lysis rescues the transient ones by fixing them in place, at the price ' +
         'of also fixing bystanders that happened to be nearby. ' +
         '（区别在于「谁来抓」，而这决定了实验能得出什么结论。免疫共沉淀里，抓手是针对内源蛋白的抗体。' +
         '没有过表达、没有标签，所以诱饵以其天然丰度、带着天然修饰存在，在那份裂解液里真正与它处于同一复合物中的东西也会一起下来。' +
         '代价是你分不清直接与间接：如果 A 结合 B、B 结合 C，那么针对 A 的抗体会把 C 拉下来，' +
         '胶上的样子和 A 直接结合 C 一模一样。co-IP 确立的是复合物成员关系，不是接触。' +
         'pull-down 里，抓手是通过标签固定的纯化重组诱饵——GST 配谷胱甘肽树脂，His 配镍柱。' +
         '如果拿它去钓裂解液，它和 co-IP 有同样的直接与间接的含糊；如果拿它去钓另一个纯化蛋白，就没有这个问题，' +
         '因为现场没有第三个蛋白可以搭桥——这是整个节点里唯一能证明直接结合的配置。' +
         '对照才是把一个结果和「一张东西粘在琼脂糖上的照片」区分开的东西：只有珠子、不放诱饵，' +
         '在这里出现的都是结合基质而不是结合你的蛋白；pull-down 要做只有标签的对照，即不融合任何东西的 GST，' +
         '会有出乎意料多的候选伙伴其实是喜欢 GST；co-IP 要做同型的非特异抗体对照，因为免疫球蛋白本身也会抓东西；' +
         '还要有 input 泳道，好让读者看到回收了多大比例，而不只是看到「有东西」。' +
         '洗涤强度是这一切背后的隐藏变量：洗得越狠，背景越低，同时也逐步冲掉真实但结合较弱的伙伴，' +
         '所以这类方法系统性地偏向稳定的复合物、丢掉瞬时的。在裂解之前做化学交联可以把瞬时的固定住，' +
         '代价是也会把恰好在旁边的旁观者一起固定住。）'
    },
    {
      q: 'SPR and ITC both give a dissociation constant. Why would anyone run both, and what does ' +
         'SPR know that a single number cannot say? ' +
         '（SPR 和 ITC 都能给出解离常数。那为什么还有人两个都做？SPR 知道哪些一个数字说不出来的事？）',
      trace: {
        what: '**结合的强度**，写成解离常数 KD。它是一个浓度：当自由配体浓度等于 KD 时，恰好一半的结合位点被占据。' +
              '所以 KD 越小结合越强，这一点方向容易记反。',
        from: '**KD 来自两个速率常数之比**：结合速率常数 kon（单位是每摩尔每秒）与解离速率常数 koff（单位是每秒）。' +
              'KD = koff / kon。SPR 直接测这两个；ITC 测的是热量，只给出比值本身。',
        to: '**koff 决定停留时间**：平均停留时间是 1/koff。药物研发里这是比 KD 更有意义的量，' +
            '因为在体内浓度被清除掉之后，还留在靶点上多久由 koff 说了算，不由 KD 说了算。',
        family: '同一族里还有 ITC（量热，给 KD、焓变与化学计量比）、微量热泳动、生物膜干涉（BLI），' +
                '以及只回答有无的 pull-down 与 co-IP。分界线是：有没有速率、有没有热力学、需不需要固定。',
        numbers: '**两个 KD 相同、koff 相差百倍的配体，停留时间也相差百倍。**这就是为什么只报一个 KD 会漏掉重点。' +
                 '仪器层面的换算（例如共振单位与表面质量密度的对应关系）属于厂商约定，不必记。'
      },
      a: '**Because they fail differently, and because a dissociation constant is an average that ' +
         'hides the two rates it came from.**\n\n' +
         'In **surface plasmon resonance** one partner, the ligand, is immobilised on a thin metal ' +
         'film and the other, the analyte, is flowed over it. Light is totally internally reflected ' +
         'at the film, and at one particular angle it drives a surface plasmon, draining energy from ' +
         'the reflected beam. That angle depends on the refractive index within a very short distance ' +
         'of the surface, which depends on how much mass is sitting there. **So the measurement is of ' +
         'mass at the surface, in real time, with no label on either protein.** While analyte flows, ' +
         'signal rises and the shape of that rise gives the on rate; when buffer replaces analyte, ' +
         'signal falls and the fall gives the off rate. Their ratio is the dissociation constant.\n\n' +
         'What SPR knows that a number cannot say is **residence time**. Two ligands with an ' +
         'identical dissociation constant, one binding and releasing quickly and the other slowly, ' +
         'behave completely differently once the free concentration drops — which is the situation ' +
         'every drug is in after a dose is cleared.\n\n' +
         '**ITC** does the opposite of immobilising anything. One partner is titrated into the other ' +
         'in solution and the instrument measures the heat taken up or released per injection. ' +
         'Fitting the resulting curve gives the dissociation constant, the enthalpy of binding, and ' +
         'the stoichiometry — how many bind how many — in one experiment, which no other method here ' +
         'delivers together. Its costs are real: it needs a lot of pure, well-matched material, and ' +
         'it cannot see an interaction that happens to release very little heat.\n\n' +
         'The failure modes are also mirror images, which is the actual argument for running both. ' +
         'SPR immobilises, so the tether can block the binding site, and if the analyte is bivalent ' +
         'like an antibody the two arms give an **avidity** effect and the apparent affinity is ' +
         'stronger than the true one. ITC immobilises nothing and so has neither problem. ' +
         '（因为它们的失效方式不同，而且解离常数是一个平均值，它把自己来源的两个速率藏了起来。' +
         '在表面等离子共振里，一方（配体）被固定在一层很薄的金属膜上，另一方（分析物）从上面流过。' +
         '光在膜上发生全内反射，在某一个特定角度会激发表面等离子体，从反射光中带走能量。' +
         '这个角度取决于紧贴表面极短距离内的折射率，而折射率取决于那里堆了多少质量。' +
         '所以测的是表面上的质量、实时的、两个蛋白都不需要标记。分析物在流的时候信号上升，上升的形状给出结合速率；' +
         '换成缓冲液时信号下降，下降的形状给出解离速率；两者之比就是解离常数。' +
         'SPR 知道而一个数字说不出来的，是停留时间：两个解离常数完全相同的配体，一个结合与释放都快、一个都慢，' +
         '在自由浓度下降之后行为完全不同——而每一种药物在一次给药被清除之后，正处于这个处境。' +
         'ITC 走的是相反的路：什么都不固定。把一方滴定进另一方的溶液里，仪器测量每一次注射吸收或放出的热量。' +
         '对得到的曲线作拟合，一次实验同时给出解离常数、结合焓变和化学计量比——几个结合几个——' +
         '这是这里其它方法都做不到的组合。它的代价是实打实的：需要大量纯度好、彼此匹配的样品，' +
         '而且如果一次结合恰好几乎不放热，它就看不见。' +
         '两者的失效方式也互为镜像，这才是「两个都做」的真正理由：SPR 要固定，所以拴住的那一点可能正好挡住结合位点，' +
         '而且如果分析物像抗体那样是二价的，两条臂会带来亲合力效应，表观亲和力比真实的更强。' +
         'ITC 什么都不固定，所以这两个问题都没有。）',
      takeaway: '先按问题分类，再按原理分类。KD 是 koff 除以 kon；只报 KD 会把停留时间这条信息丢掉。'
    }
  ],

  points: [
    { term: 'The four questions, in order', en: 'Does A touch B at all; who else is in the complex; is the contact direct; and how strong is it. Two-hybrid answers the first, co-IP the second, a pull-down of two pure proteins the third, SPR and ITC the fourth. Naming which question you are answering is the structure of a good oral answer.', cn: '四个问题，按顺序：A 和 B 到底碰不碰；复合物里还有谁；接触是不是直接的；有多强。双杂交回答第一个，co-IP 回答第二个，两边都纯的 pull-down 回答第三个，SPR 与 ITC 回答第四个。说清楚自己在回答哪一个问题，就是一个好口试答案的结构。' },
    { term: 'Split activator', en: 'A eukaryotic transcription factor such as Gal4 separates into a DNA-binding domain and an activation domain. Neither half activates transcription alone, so restoring function requires something to hold them together.', cn: '拆开的激活因子：像 Gal4 这样的真核转录因子可以分成 DNA 结合结构域和激活结构域。任一半单独都不能激活转录，所以要恢复功能就需要有东西把它们拉在一起。' },
    { term: 'Bait and prey', en: 'The bait is fused to the DNA-binding domain and sits on the reporter promoter; the prey is fused to the activation domain. An interaction between them reconstitutes an activator at the promoter and the reporter is transcribed.', cn: '诱饵与猎物：诱饵融合到 DNA 结合结构域上、停在报告基因的启动子处；猎物融合到激活结构域上。两者之间的相互作用在启动子处重建出一个激活因子，报告基因随之被转录。' },
    { term: 'The readout is growth, so it is a selection', en: 'With an auxotrophy reporter such as HIS3, only interacting cells make the missing amino acid and grow. The plate discards the negatives for you, which is what lets one transformation test a library of millions against one bait.', cn: '读数是生长，所以它是一种选择压力：用 HIS3 这类营养缺陷型报告基因，只有发生相互作用的细胞才能合成缺失的氨基酸并长起来。平板替你淘汰掉阴性，这正是一次转化就能让一个诱饵对上几百万文库的原因。' },
    { term: 'The bait-alone control is not optional', en: 'Some baits recruit transcription machinery by themselves and fire the reporter with no prey present. This self-activation is tested before the screen, not after, because a self-activating bait makes the entire screen uninterpretable.', cn: '「只有诱饵」这个对照不是可选项：有些诱饵自己就能招募转录机器，没有猎物也会打开报告基因。这种自激活要在筛选之前测，不是之后，因为一个自激活的诱饵会让整个筛选无法解读。' },
    { term: 'Where two-hybrid is blind', en: 'The interaction has to happen in the yeast nucleus, so partners needing a membrane, a lumenal compartment, an oxidising environment for disulfides, or a modification yeast does not make are false negatives by construction.', cn: '双杂交的盲区：相互作用必须发生在酵母的细胞核里，所以需要膜、需要腔室、需要氧化环境形成二硫键，或者需要酵母做不出的修饰的搭档，从设计上就是假阴性。' },
    { term: 'Split-ubiquitin for membrane proteins', en: 'A variant that reconstitutes ubiquitin rather than a transcription factor, releasing a tethered reporter by proteolysis. Because the event happens at the membrane, it reaches the class the classical assay cannot.', cn: '针对膜蛋白的分裂泛素系统：一个重建泛素而不是转录因子的变体，通过蛋白酶切释放一个拴住的报告蛋白。因为事件发生在膜上，它能覆盖经典系统够不到的那一类。' },
    { term: 'Co-IP catches complexes, not contacts', en: 'An antibody against an endogenous protein brings down everything in a complex with it, at native abundance and with native modifications, but a partner bridged by a third protein is indistinguishable from a direct one.', cn: 'co-IP 抓的是复合物，不是接触：针对内源蛋白的抗体会把与它同处一个复合物的所有东西都拉下来，丰度天然、修饰天然，但被第三个蛋白搭桥的伙伴与直接的伙伴无法区分。' },
    { term: 'A pull-down of two pure proteins is the directness experiment', en: 'A purified tagged bait on resin, incubated with a second purified protein, has no third component available to bridge them. Against a lysate the same experiment recovers the ambiguity.', cn: '两边都纯的 pull-down 才是证明直接性的实验：树脂上带标签的纯化诱饵，与第二个纯化蛋白一起孵育，现场没有第三个组分可以搭桥。同样的实验若换成钓裂解液，含糊又回来了。' },
    { term: 'The four controls', en: 'Beads with no bait, tag alone such as free GST, an isotype-matched irrelevant antibody, and the input lane. Without them the gel shows what sticks to the matrix rather than what binds the bait.', cn: '四个对照：不放诱饵的空珠子、只有标签（例如游离 GST）、同型的不相干抗体、以及 input 泳道。没有它们，胶显示的是什么粘在基质上，而不是什么结合了诱饵。' },
    { term: 'Wash stringency biases the answer', en: 'Harsher washing lowers background and strips weak but real partners, so these methods systematically report stable complexes and miss transient ones. Crosslinking before lysis recovers transient partners and fixes bystanders along with them.', cn: '洗涤强度会使结果产生偏向：洗得越狠，背景越低，同时也冲掉了弱但真实的伙伴，所以这类方法系统性地报告稳定复合物、漏掉瞬时的。裂解前交联可以找回瞬时的伙伴，同时也会把旁观者一起固定住。' },
    { term: 'SPR measures mass at a surface', en: 'One partner is immobilised, the other flows over. Binding changes the refractive index near the metal film and shifts the angle at which surface plasmons are excited, so the signal tracks bound mass in real time with no label on either protein.', cn: 'SPR 测的是表面上的质量：一方被固定，另一方流过。结合改变金属膜附近的折射率，使激发表面等离子体的角度发生移动，因此信号实时追踪结合上去的质量，两个蛋白都不需要标记。' },
    { term: 'Association, dissociation, and the ratio', en: 'The rise while analyte flows gives the on rate, the fall when buffer replaces it gives the off rate, and the dissociation constant is the off rate divided by the on rate. It is a concentration: at that free concentration half the sites are occupied.', cn: '结合、解离，以及二者之比：分析物流过时的上升给出结合速率常数，换成缓冲液后的下降给出解离速率常数，解离常数等于解离速率除以结合速率。它是一个浓度——在这个自由浓度下，恰好一半位点被占据。' },
    { term: 'Residence time is what the ratio hides', en: 'Mean residence time is the reciprocal of the off rate. Two ligands with the same dissociation constant but hundred-fold different off rates stay bound for hundred-fold different times once free concentration falls, which is the situation after a dose is cleared.', cn: '停留时间是那个比值掩盖掉的东西：平均停留时间是解离速率常数的倒数。两个解离常数相同但解离速率相差百倍的配体，在自由浓度下降之后停留的时间相差百倍——而一次给药被清除之后，正是这个处境。' },
    { term: 'Avidity is not affinity', en: 'A bivalent analyte such as an intact antibody engages an immobilised surface with two arms, so the apparent affinity is stronger than the intrinsic one for a single site. Using a monovalent fragment, or reversing which partner is immobilised, is the check.', cn: '亲合力不是亲和力：像完整抗体这样的二价分析物会用两条臂结合固定化的表面，所以表观亲和力比单个位点的内在亲和力更强。用单价片段，或者把固定的一方换过来，就是核对的办法。' },
    { term: 'ITC immobilises nothing', en: 'One partner is titrated into the other in free solution and the heat per injection is measured. A single experiment yields the dissociation constant, the binding enthalpy and the stoichiometry, at the cost of large amounts of well-matched pure material.', cn: 'ITC 什么都不固定：把一方滴定进另一方的自由溶液，测量每次注射的热量。一次实验同时得到解离常数、结合焓变与化学计量比，代价是需要大量纯度好、彼此匹配的样品。' },
    { term: 'No method proves it happens in the cell', en: 'Two-hybrid moves the event to a yeast nucleus, co-IP breaks the cell open first, and SPR and ITC use purified protein. The standard defence is orthogonal evidence: a screen, a cellular confirmation, then a number.', cn: '没有任何方法能证明它在细胞里发生：双杂交把事件搬到酵母细胞核，co-IP 先把细胞打开，SPR 与 ITC 用的是纯化蛋白。标准的辩护方式是正交证据——先筛选，再在细胞里确认，最后拿到数字。' }
  ],

  beyondPoints: [
    { term: 'Why two large interactome maps of the same organism disagree', en: 'Two-hybrid screens and affinity-purification mass spectrometry are both used to draw genome-scale interaction maps, and the maps overlap far less than people expect. This is usually reported as a reliability problem, but most of it is not: the two methods answer different questions. A two-hybrid reports a binary contact between two proteins forced together in a nucleus, including pairs that touch only there. Affinity purification followed by mass spectrometry reports co-membership of a complex in a lysate, including proteins that never touch each other but sit in the same assembly. A protein pair can therefore be a true positive in one and a true negative in the other without either being wrong. The lesson for an oral is to state the question a method answers before quoting its result, because a disagreement between methods is often a disagreement between questions.', cn: '为什么同一个物种的两张大规模互作图谱会互相矛盾：双杂交筛选和亲和纯化质谱都被用来画基因组尺度的相互作用图谱，而两张图的重合度远低于人们的预期。这通常被当作可靠性问题来报告，但其中大部分并不是：两种方法回答的是不同的问题。双杂交报告的是两个蛋白在细胞核里被凑到一起时的二元接触，包括那些只在那里才接触的配对。亲和纯化后接质谱报告的是在裂解液中同属一个复合物，包括那些彼此从不接触、只是待在同一个装配体里的蛋白。因此一对蛋白可以在一种方法里是真阳性、在另一种方法里是真阴性，而两者都没有错。对口试的启示是：在引用一个方法的结果之前先说清楚它回答的是哪个问题，因为方法之间的分歧常常其实是问题之间的分歧。' },
    { term: 'A predicted interface is not an interaction, and this project has the receipt', en: 'Structure prediction now offers an interface confidence score for a modelled complex, and it is tempting to treat a high score as evidence that two proteins interact. The recombinants project in this repo tested that directly and it failed: AlphaFold 3 models of chimeric RBDs docked onto ACE2 reproduced 0 to 1 of the 22 contacts seen in the crystal structure 6M0J, placing the RBD on the wrong face of ACE2 altogether. The interface score in that run was reporting a docking failure, not a weak interaction, and candidates ranked by it were ranked by nothing. Node 5-1 carries the same finding from the structural-methods side. The general form is worth having ready, because a examiner may well ask whether prediction has replaced the experiment: a predictor scores the model it built, and a confident score on a wrong pose is exactly what a wrong pose looks like from the inside.', cn: '预测出来的界面不等于相互作用，而这件事本项目有实证：结构预测现在会给建模出来的复合物一个界面置信度分数，把高分当成两个蛋白确实相互作用的证据是很有诱惑力的。本仓库里的重组体项目直接检验过这一点，结果是失败的：AlphaFold 3 给嵌合 RBD 与 ACE2 建的模型，只重现了晶体结构 6M0J 中 22 个接触里的 0 到 1 个，把 RBD 整个放在了 ACE2 错误的那一面上。那一轮里的界面分数报告的是对接失败，而不是弱相互作用，按它排出来的候选者等于没有排。节点 5-1 从结构方法那一侧记录了同一个发现。这个论点的一般形式值得随时能讲，因为考官很可能会问预测是不是已经取代了实验：预测器打分的对象是它自己建出来的模型，而一个错误构象上的高置信分数，正是错误构象从内部看起来的样子。' }
  ],

  terms: [
    { en: 'Yeast two-hybrid', cn: '酵母双杂交', def_en: 'An assay in which bait and prey are fused to the two halves of a split transcription factor, so that their interaction reconstitutes an activator and switches on a reporter gene.', def_cn: '一种把诱饵和猎物分别融合到拆开的转录因子两半上的实验，两者的相互作用重建出激活因子并打开报告基因。' },
    { en: 'DNA-binding domain', cn: 'DNA 结合结构域', def_en: 'The half of the split activator that binds the reporter promoter; carries the bait and does nothing on its own.', def_cn: '拆开的激活因子中结合报告基因启动子的那一半；携带诱饵，单独存在时不起作用。' },
    { en: 'Activation domain', cn: '激活结构域', def_en: 'The half that recruits transcription machinery once something is bound at the promoter; carries the prey.', def_cn: '在有东西结合到启动子上之后负责招募转录机器的那一半；携带猎物。' },
    { en: 'Auxotrophy reporter', cn: '营养缺陷型报告基因', def_en: 'A reporter such as HIS3 whose product supplies a missing nutrient, so that interaction is read out as growth and the assay becomes a selection.', def_cn: '像 HIS3 这样的报告基因，其产物补上一种缺失的营养，因此相互作用以「能否生长」被读出，实验也就成了一种选择。' },
    { en: 'Self-activating bait', cn: '自激活诱饵', def_en: 'A bait that switches on the reporter without any prey, making the screen uninterpretable; excluded by the bait-alone control run before the screen.', def_cn: '不需要任何猎物就能打开报告基因的诱饵，会让筛选无法解读；由筛选之前跑的「只有诱饵」对照排除。' },
    { en: 'Split-ubiquitin system', cn: '分裂泛素系统', def_en: 'A two-hybrid variant that reassembles ubiquitin instead of a transcription factor, allowing interactions to be scored at a membrane.', def_cn: '双杂交的一个变体，重新拼装的是泛素而不是转录因子，使膜上的相互作用也能被检测。' },
    { en: 'Co-immunoprecipitation', cn: '免疫共沉淀', def_en: 'Capturing an endogenous protein from a lysate with an antibody and identifying what came down with it; establishes complex membership, not direct contact.', def_cn: '用抗体从裂解液中捕获内源蛋白，并鉴定跟着一起下来的东西；确立的是复合物成员关系，而不是直接接触。' },
    { en: 'Pull-down', cn: 'pull-down', def_en: 'The same experiment with a purified tagged bait immobilised on resin in place of an antibody; run against a second purified protein it demonstrates direct binding.', def_cn: '同样的实验，但用固定在树脂上的纯化带标签诱饵取代抗体；若对手是第二个纯化蛋白，它就能证明直接结合。' },
    { en: 'Isotype control', cn: '同型对照', def_en: 'An irrelevant antibody of the same class, run in parallel to reveal what immunoglobulin captures regardless of specificity.', def_cn: '同一类别的不相干抗体，平行跑一份，用来揭示免疫球蛋白无论特异性如何都会抓到什么。' },
    { en: 'Input lane', cn: 'input 泳道', def_en: 'A sample of the material before capture, run on the same gel so that the recovered fraction can be judged rather than only its presence.', def_cn: '捕获之前的材料样品，跑在同一块胶上，使人能判断回收了多大比例，而不只是判断「有没有」。' },
    { en: 'Surface plasmon resonance', cn: '表面等离子共振', def_en: 'A label-free method measuring mass accumulating at a sensor surface in real time, giving association and dissociation rate constants directly.', def_cn: '一种无标记方法，实时测量传感表面上累积的质量，直接给出结合与解离速率常数。' },
    { en: 'Dissociation constant', cn: '解离常数', def_en: 'The off rate divided by the on rate. A concentration: at that free ligand concentration half the binding sites are occupied, so a smaller value means tighter binding.', def_cn: '解离速率常数除以结合速率常数。它是一个浓度：在该自由配体浓度下一半结合位点被占据，所以数值越小结合越紧。' },
    { en: 'Residence time', cn: '停留时间', def_en: 'The reciprocal of the off rate; how long a complex survives once free ligand is removed, which the dissociation constant alone cannot report.', def_cn: '解离速率常数的倒数；自由配体被移走之后复合物还能存活多久，这是单靠解离常数报告不出来的。' },
    { en: 'Avidity', cn: '亲合力', def_en: 'The enhanced apparent affinity of a multivalent binder engaging several sites at once, which makes an immobilised-surface measurement look tighter than the single-site value.', def_cn: '多价结合物同时结合多个位点所带来的表观亲和力增强，使固定化表面上的测量看起来比单位点数值更紧。' },
    { en: 'Isothermal titration calorimetry', cn: '等温滴定量热法', def_en: 'Titration of one partner into another in free solution with the heat per injection measured, yielding dissociation constant, enthalpy and stoichiometry together.', def_cn: '在自由溶液中把一方滴定进另一方并测量每次注射的热量，同时得到解离常数、焓变与化学计量比。' },
    { en: 'Crosslinking', cn: '交联', def_en: 'Chemical fixation before lysis that preserves transient complexes for capture, at the cost of also fixing bystanders that were merely nearby.', def_cn: '裂解之前的化学固定，把瞬时复合物保留下来以便捕获，代价是也会把仅仅在附近的旁观者一起固定。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'A pair of membrane proteins known to interact scores negative in a classical yeast two-hybrid. What is the built-in reason?',
      q_cn: '一对已知会相互作用的膜蛋白，在经典酵母双杂交里是阴性。这背后从设计上就存在的原因是什么？',
      options: [
        'The reporter can only be switched on in the nucleus',
        'Yeast degrades foreign membrane proteins before they fold',
        'The activation domain misfolds when fused to a hydrophobic partner',
        'The two fusions are driven from promoters of unequal strength'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'Degradation would be a property of those particular proteins, not a reason the assay fails for the whole class. The classical assay excludes every membrane interaction, whether the proteins are stable in yeast or not.', cn: '降解会是那几个特定蛋白的性质，而不是这个实验对整整一类都失效的原因。经典系统排除的是所有膜上的相互作用，无论那些蛋白在酵母里稳不稳定。' },
        3: { en: 'Unequal promoter strength changes how much of each fusion is present and can shift sensitivity, but it does not stop an interaction from being reported. The location requirement does.', cn: '启动子强度不等会改变两种融合蛋白各有多少、也可能影响灵敏度，但它不会让一次相互作用无法被报告。位置的要求会。' }
      },
      why_en: 'The readout is transcription of a reporter gene, so the reconstituted activator has to reach a promoter. That places the requirement on location: the interaction must occur in the nucleus. Proteins whose meeting happens in a membrane never deliver the two halves to DNA, so the assay is blind to the entire class by construction, which is why the split-ubiquitin variant exists.',
      why_cn: '读数是报告基因的转录，所以重建出来的激活因子必须到达启动子。这就把要求落在了位置上：相互作用必须发生在细胞核里。相遇发生在膜上的蛋白永远不会把两半送到 DNA 上，所以这个实验从设计上对整整一类都是盲的——分裂泛素这个变体正是为此存在。' },

    { type: 'mcq',
      q_en: 'An antibody against protein A co-immunoprecipitates protein C from a lysate. What has been established?',
      q_cn: '针对蛋白 A 的抗体从裂解液中把蛋白 C 一起沉淀了下来。这确立了什么？',
      options: [
        'That A and C were in the same complex',
        'That A and C bind one another directly',
        'That the antibody against A also recognises C',
        'That A and C are present at comparable abundance'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'This is the inference the experiment cannot support and the commonest overstatement of a co-IP. If A binds B and B binds C, the gel is identical to the one you would get if A bound C.', cn: '这正是这个实验支持不了的推论，也是对 co-IP 最常见的过度解读。如果 A 结合 B、B 结合 C，胶上的结果与 A 直接结合 C 时一模一样。' },
        2: { en: 'Cross-reactivity is a failure of the antibody rather than a result, and it is what the isotype control and a bait-free control are there to exclude before the lane is interpreted at all.', cn: '交叉反应是抗体的失效而不是一个结果，而同型对照和不放诱饵的对照正是为了在解读泳道之前先排除它。' }
      },
      why_en: 'Co-immunoprecipitation reports co-membership of a complex, at native abundance and with native modifications, which is its strength. What it cannot separate is a direct contact from one bridged by a third protein, because both give the same band. Demonstrating directness requires removing the possible bridge, which means a pull-down in which both partners are purified.',
      why_cn: '免疫共沉淀报告的是同处一个复合物，丰度天然、修饰天然，这是它的长处。它分不开的是直接接触与被第三个蛋白搭桥的接触，因为两者给出同一条带。要证明直接性就必须把可能的桥去掉，也就是做一个两边都是纯化蛋白的 pull-down。' },

    { type: 'mcq',
      q_en: 'Two inhibitors of the same enzyme have identical dissociation constants, but one has a hundred-fold slower off rate. Which statement follows?',
      q_cn: '同一个酶的两个抑制剂解离常数完全相同，但其中一个的解离速率常数慢一百倍。可以推出哪一条？',
      options: [
        'It has a hundred-fold longer residence time',
        'It binds a hundred-fold more tightly at equilibrium',
        'It must also have a hundred-fold faster on rate',
        'It cannot share a dissociation constant with the other'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'Equilibrium tightness is exactly what the dissociation constant reports, and the question says the two are identical. The rates are what differ, and they carry information the equilibrium constant has averaged away.', cn: '平衡状态下结合有多紧，正是解离常数所报告的，而题目说这两个数值相同。不同的是速率，而速率携带的信息已经被平衡常数平均掉了。' },
        2: { en: 'The direction is reversed. Since the dissociation constant is the off rate divided by the on rate, holding it fixed while the off rate falls a hundred-fold requires the on rate to fall a hundred-fold as well.', cn: '方向反了。既然解离常数等于解离速率除以结合速率，要在解离速率降低一百倍的同时保持它不变，结合速率也必须降低一百倍。' }
      },
      why_en: 'Mean residence time is the reciprocal of the off rate, so a hundred-fold slower off rate is a hundred-fold longer time bound. The dissociation constant is the ratio of the two rates and cannot distinguish a fast-on fast-off pair from a slow-on slow-off pair. This is the argument for measuring kinetics rather than only affinity, and it is why an SPR sensorgram carries information an equilibrium number does not.',
      why_cn: '平均停留时间是解离速率常数的倒数，所以解离速率慢一百倍就是结合停留的时间长一百倍。解离常数是两个速率之比，分不出「快结合快解离」和「慢结合慢解离」这两种情况。这就是要测动力学而不只测亲和力的理由，也是为什么一条 SPR 曲线携带的信息比一个平衡数值更多。' },

    { type: 'short',
      q_en: 'A two-hybrid screen returns a candidate partner for your protein. Describe the experiments you would do next, and say what each one adds.',
      q_cn: '双杂交筛选给了你的蛋白一个候选伙伴。描述你接下来会做的实验，并说明每一个各自补上了什么。',
      accept: ['bait alone', '只有诱饵', 'self-activation', '自激活', 'co-IP', '免疫共沉淀', 'pull-down', 'purified', '纯化', 'direct', '直接', 'SPR', 'ITC', 'KD', '解离常数', 'control', '对照'],
      answer_en: 'First I would go backwards, not forwards, and confirm the screen itself: the bait alone with an empty activation-domain vector must not switch on the reporter, because a self-activating bait makes every hit meaningless, and I would check whether the same candidate appears in published screens against unrelated baits, which marks it as generally sticky. Then co-immunoprecipitation in a cell type where both proteins are actually expressed, with an isotype-matched antibody control, a no-bait control and an input lane. That adds native abundance and native modifications, and it moves the claim out of a yeast nucleus — but it establishes only that the two are in one complex, since a third protein could bridge them. To show the contact is direct I would express and purify both and run a pull-down of one against the other, where no bridging protein is available. Finally, for a number, surface plasmon resonance with the smaller partner as analyte, which gives the on and off rate constants and therefore the dissociation constant, or isothermal titration calorimetry if immobilisation is a concern, since it also returns the stoichiometry. The logic of the sequence is that each step removes one artefact of the previous one, and no single step proves the interaction occurs in a living cell.',
      answer_cn: '第一步我会往回走而不是往前走，先确认筛选本身：诱饵单独与空的激活结构域载体在一起时不能打开报告基因，因为一个自激活的诱饵会让所有阳性都失去意义；我还会查这个候选者是否在别人针对不相干诱饵的筛选里也出现过，那说明它普遍地「粘」。接着在两个蛋白确实都表达的细胞类型里做免疫共沉淀，配同型抗体对照、不放诱饵的对照和 input 泳道。这一步补上了天然丰度与天然修饰，并把这个主张从酵母细胞核里搬了出来——但它只能确立两者同处一个复合物，因为可能有第三个蛋白搭桥。要证明接触是直接的，我会把两个蛋白都表达并纯化，用其中一个去 pull-down 另一个，现场没有任何可以搭桥的蛋白。最后是拿数字：用表面等离子共振，以较小的一方作分析物，得到结合与解离速率常数、进而得到解离常数；如果担心固定化带来的影响就用等温滴定量热法，它还能一并给出化学计量比。这个顺序的逻辑是每一步都消除上一步的一个假象，而且没有任何单独一步能证明这次相互作用发生在活细胞里。'
    }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'What makes the two-hybrid scalable to a library of millions when SPR is not?',
      q_cn: '是什么让双杂交能放大到几百万的文库，而 SPR 不能？',
      options: [
        'Its readout is survival, so the plate removes the negatives',
        'Its reagents are cheaper per interaction tested',
        'It needs no purified protein of either partner',
        'It reports interactions that are too weak to measure otherwise'
      ],
      answer: 0,
      why_en: 'With an auxotrophy reporter, non-interacting cells simply do not grow, so nothing has to be examined one at a time. That is a selection rather than a screen, and it is a property no measurement-based method has: SPR yields one sensorgram per pair and someone must run and read each one.',
      why_cn: '用营养缺陷型报告基因时，没有相互作用的细胞根本长不出来，所以不需要逐个检查。这是选择而不是逐个筛查，而任何基于测量的方法都没有这个性质：SPR 每一对给出一条曲线，每一条都得有人去跑、去读。' },

    { type: 'mcq',
      q_en: 'A pull-down with GST-tagged bait recovers three candidate partners. Which control decides whether any of them is about the bait?',
      q_cn: '用 GST 标签诱饵做 pull-down 得到三个候选伙伴。哪个对照决定了它们当中有没有一个是关于诱饵的？',
      options: [
        'Free GST on the same resin',
        'A second bait carrying a different tag',
        'The same pull-down at a higher salt concentration',
        'A parallel co-IP against the endogenous bait'
      ],
      answer: 0,
      optionNotes: {
        2: { en: 'Raising the salt changes stringency and will drop some bands, but a band that survives a harder wash on GST-only resin is still binding GST. Stringency ranks what sticks; it does not say what it stuck to.', cn: '提高盐浓度会改变洗涤强度、也会去掉一些带，但一条在只有 GST 的树脂上熬过更狠洗涤的带，依然是结合在 GST 上的。洗涤强度只能给「粘上去的东西」排序，它并不说明粘在了什么上。' },
        3: { en: 'A co-IP is orthogonal evidence and worth doing, but it is a second experiment rather than the control for this one. It cannot tell you which of these three bands came from the tag.', cn: 'co-IP 是正交证据，值得做，但它是第二个实验，而不是这个实验的对照。它没法告诉你这三条带里哪一条来自标签。' }
      },
      why_en: 'The bait is a fusion, so anything recovered may be binding the tag rather than the protein of interest. Running the tag alone on the same resin, in the same lysate, under the same washes, separates the two, and GST in particular has enough surface to attract genuine-looking partners.',
      why_cn: '诱饵是一个融合蛋白，所以回收到的任何东西都可能是结合了标签而不是目的蛋白。在同样的树脂上、同样的裂解液里、同样的洗涤条件下单独跑一次标签，就能把两者分开；而 GST 尤其有足够的表面去吸引看起来很像真的伙伴。' },

    { type: 'mcq',
      q_en: 'Why does an intact antibody measured over an immobilised antigen surface appear to bind more tightly than it does in solution?',
      q_cn: '为什么完整抗体在固定化抗原表面上测出来，会显得比它在溶液中结合得更紧？',
      options: [
        'Its two arms engage two surface sites at once',
        'Immobilisation concentrates the antigen locally',
        'The flow removes dissociated antibody continuously',
        'Its larger mass produces a larger response signal'
      ],
      answer: 0,
      optionNotes: {
        3: { en: 'A larger analyte does give a larger response per binding event, since the signal tracks mass at the surface. That changes the size of the curve, not the rate at which it decays, and affinity is read from the shape.', cn: '更大的分析物确实会让每一次结合事件给出更大的响应，因为信号追踪的是表面质量。那改变的是曲线的高度，不是它衰减的速率，而亲和力是从形状读出来的。' }
      },
      why_en: 'A bivalent binder can hold on by one arm while the other rebinds, so releasing completely requires both to let go at the same time. The apparent off rate collapses and the apparent affinity rises. This is avidity, it is a property of the geometry rather than of the binding site, and the checks are a monovalent fragment or reversing which partner is immobilised.',
      why_cn: '二价的结合物可以用一条臂拉住、同时另一条臂重新结合，所以要完全脱离就必须两条臂同时松手。表观解离速率因此骤降，表观亲和力随之升高。这就是亲合力，它是几何构型的性质而不是结合位点的性质，核对办法是改用单价片段，或者把固定的一方换过来。' },

    { type: 'short',
      q_en: 'Explain why a high interface confidence score from a structure predictor is not evidence that two proteins interact.',
      q_cn: '解释为什么结构预测器给出的高界面置信分数，并不构成两个蛋白发生相互作用的证据。',
      accept: ['docking', '对接', 'wrong pose', '错误', 'contacts', '接触', '6M0J', 'ipTM', 'experiment', '实验', 'crystal', '晶体'],
      answer_en: 'Because the predictor scores the model it has built, not the biology. Given two chains it will place them against each other and report how confident it is in the interface of that placement, and a confident score on a wrong pose is what a wrong pose looks like from the inside. This project has a direct measurement of it: AlphaFold 3 models of chimeric receptor-binding domains docked onto ACE2 reproduced zero to one of the twenty-two contacts present in the crystal structure 6M0J, having placed the domain on the wrong face of the receptor. Ranking candidates by that interface score was ranking them by a docking failure. The general rule is that prediction proposes an interface and an experiment tests it: co-immunoprecipitation for complex membership, a pull-down of purified proteins for directness, and SPR or calorimetry for the affinity.',
      answer_cn: '因为预测器打分的对象是它自己建出来的模型，而不是生物学。给它两条链，它就会把它们摆在一起，并报告自己对这个摆法所形成的界面有多大信心；而一个错误构象上的高置信分数，正是错误构象从内部看起来的样子。本项目有一次直接的测量：AlphaFold 3 给嵌合受体结合结构域与 ACE2 建的模型，只重现了晶体结构 6M0J 中二十二个接触里的零到一个，因为它把这个结构域放在了受体错误的那一面上。按那个界面分数给候选者排序，等于按一次对接失败给它们排序。一般规则是：预测提出一个界面，实验去检验它——用免疫共沉淀查复合物成员关系，用纯化蛋白的 pull-down 查直接性，用 SPR 或量热法拿亲和力。' }
  ],

  oral: {
    q_en: 'How would you determine whether two proteins interact?',
    q_cn: '你会怎么确定两个蛋白是否相互作用？',
    model_en: 'I would start by saying which question I am answering, because four different methods ' +
              'answer four different questions and offering one of them as if it settled everything ' +
              'is the usual mistake. If the question is whether two named proteins touch at all, and ' +
              'especially if I have one protein and want to find its partners, I would use a yeast ' +
              'two-hybrid. A eukaryotic activator such as Gal4 splits into a DNA-binding domain and ' +
              'an activation domain, neither of which works alone. The bait is fused to the first and ' +
              'sits on a reporter promoter; the prey is fused to the second. If they interact, a ' +
              'working activator is reconstituted and the reporter is transcribed. With an ' +
              'auxotrophy reporter the readout is growth, which makes it a selection rather than a ' +
              'screen, and that is why one transformation can test a library of millions. Its limits ' +
              'follow from its design: the interaction must happen in the yeast nucleus, so membrane ' +
              'partners and interactions needing a modification yeast cannot make are false ' +
              'negatives, and overexpression plus self-activating baits produce false positives, ' +
              'which is why the bait-alone control comes first. Next, whether they are together in a ' +
              'real cell, which is co-immunoprecipitation: an antibody against the endogenous protein ' +
              'pulls it from a lysate and I ask what came with it, at native abundance and with ' +
              'native modifications. That establishes complex membership but not contact, because a ' +
              'third protein can bridge them. To show the contact is direct I purify both partners ' +
              'and run a pull-down of one against the other, where nothing is available to bridge. ' +
              'Throughout, the controls are what make the gel mean anything: beads with no bait, the ' +
              'tag alone, an isotype-matched antibody, and the input lane. Finally the number. ' +
              'Surface plasmon resonance immobilises one partner and flows the other over a metal ' +
              'film, and because binding changes the refractive index at the surface it measures ' +
              'bound mass in real time with no label. The rise gives the on rate, the fall gives the ' +
              'off rate, and the dissociation constant is their ratio, so I get residence time as ' +
              'well as affinity, which matters because two ligands with the same dissociation ' +
              'constant can stay bound for very different times. Isothermal titration calorimetry is ' +
              'the alternative when immobilisation is a worry, since it works in free solution and ' +
              'returns enthalpy and stoichiometry too. The honest closing point is that none of these ' +
              'proves an interaction occurs in a living cell, so the standard is orthogonal evidence: ' +
              'a screen, a cellular confirmation, and a number on purified protein.',
    model_cn: '我会先说清楚自己在回答哪一个问题，因为这里有四种方法回答四个不同的问题，' +
              '而把其中一种当成能解决全部，正是常见的错误。' +
              '如果问题是两个指定的蛋白到底碰不碰，尤其是我手上有一个蛋白、想找它的伙伴，我会用酵母双杂交。' +
              '像 Gal4 这样的真核激活因子可以拆成 DNA 结合结构域和激活结构域，任一半单独都不工作。' +
              '诱饵融合到前者上、停在报告基因的启动子处，猎物融合到后者上；两者若有相互作用，' +
              '一个有功能的激活因子被重建，报告基因被转录。用营养缺陷型报告基因时读数是生长，' +
              '这使它成为选择而不是逐个筛查，也正是一次转化就能检验几百万文库的原因。' +
              '它的局限来自它的设计：相互作用必须发生在酵母细胞核里，所以膜上的搭档、' +
              '以及需要酵母做不出的修饰的相互作用，都是假阴性；而过表达加上自激活的诱饵会产生假阳性，' +
              '所以「只有诱饵」的对照要排在最前面。接下来是它们在真实细胞里是否在一起，也就是免疫共沉淀：' +
              '用针对内源蛋白的抗体把它从裂解液里拉出来，再看跟着一起下来的是谁，丰度天然、修饰天然。' +
              '这确立的是复合物成员关系而不是接触，因为可能有第三个蛋白搭桥。' +
              '要证明接触是直接的，我把两个搭档都纯化，用其中一个去 pull-down 另一个，现场没有任何东西可以搭桥。' +
              '在这整个过程中，让胶有意义的是对照：不放诱饵的空珠子、只有标签、同型的抗体，以及 input 泳道。' +
              '最后是数字。表面等离子共振把一方固定、让另一方流过金属膜，因为结合改变表面处的折射率，' +
              '它能在不加标记的情况下实时测量结合上去的质量。上升给出结合速率，下降给出解离速率，' +
              '解离常数是二者之比，所以我同时得到了停留时间和亲和力——这很重要，' +
              '因为解离常数相同的两个配体，结合停留的时间可以差很多。' +
              '如果担心固定化带来的问题，等温滴定量热法是替代方案，它在自由溶液中进行，还能一并给出焓变与化学计量比。' +
              '诚实的收尾是：这些方法没有一个能证明相互作用发生在活细胞里，' +
              '所以标准做法是正交证据——先筛选，再在细胞里确认，最后在纯化蛋白上拿到数字。',
    checklist: [
      { en: 'Name the question first: contact, complex membership, directness, or affinity', cn: '先点明问题：接触、复合物成员、直接性，还是亲和力' },
      { en: 'Two-hybrid: split activator, bait on the promoter, prey on the activation domain', cn: '双杂交：拆开的激活因子，诱饵在启动子上，猎物在激活结构域上' },
      { en: 'Growth readout makes it a selection, which is why it scales to libraries', cn: '以生长为读数使它成为选择，这正是它能放大到文库的原因' },
      { en: 'Bait-alone control first; self-activation invalidates the whole screen', cn: '先做「只有诱饵」的对照；自激活会让整个筛选作废' },
      { en: 'Blind to membrane partners and to modifications yeast cannot make', cn: '对膜上的搭档、以及酵母做不出的修饰是盲的' },
      { en: 'Co-IP gives complex membership at native abundance, not direct contact', cn: 'co-IP 给出天然丰度下的复合物成员关系，不是直接接触' },
      { en: 'Pull-down of two purified proteins is the directness experiment', cn: '两边都纯化的 pull-down 才是证明直接性的实验' },
      { en: 'Controls: beads only, tag only, isotype antibody, input lane', cn: '对照：空珠子、只有标签、同型抗体、input 泳道' },
      { en: 'SPR measures bound mass label-free and gives both rate constants', cn: 'SPR 无标记地测量结合质量，并给出两个速率常数' },
      { en: 'Dissociation constant is off rate over on rate; residence time is one over off rate', cn: '解离常数是解离速率除以结合速率；停留时间是解离速率的倒数' },
      { en: 'ITC immobilises nothing and adds enthalpy and stoichiometry', cn: 'ITC 什么都不固定，另外给出焓变与化学计量比' },
      { en: 'Close by admitting no method proves it happens in a living cell', cn: '收尾时承认没有任何方法能证明它发生在活细胞里' }
    ]
  }
},

{
  id: '4-3',
  chapter: 4,
  lecture: 'Mol Biol',
  section: '4.3',
  slides: 'MC250P16N 大纲「Kombinatorika v moderni biologii — genove cipy」· molbio Tier 1（基因芯片）',
  coverage: 'partial',
  enTitle: 'DNA microarrays — a closed question asked in parallel, and why sequencing replaced them',
  cnTitle: 'DNA 微阵列——把一个封闭的问题并行地问一万遍，以及测序为什么取代了它',
  coverageNote: 'Mixed sourcing, and the split matters. The microarray half is a GAP and is written ' +
                'fresh: measured across all seven corpora, the only hits for microarray / gene chip / ' +
                '基因芯片 / 微阵列 are four name-drops, and all four are the same list of monoclonal ' +
                'antibody diagnostic uses (pesbexplain 1.2.5 and 6.5, "immunohistochemistry, ' +
                'lateral-flow assays, microchips"). Nothing anywhere explains what a chip is or how it ' +
                'reports. It earns a node because the syllabus of Molekularni biologie a genetika II ' +
                'names genove cipy outright under its combinatorics heading. The RNA-Seq half is NOT ' +
                'a gap and is imported, not rewritten: Lehninger node `L-9-2-1` already teaches ' +
                'RNA-Seq properly — deep sequencing of reverse-transcribed RNA, abundance from read ' +
                'count, poly(dT) capture, scRNA-Seq, and the mass-spectrometry comparison — so those ' +
                'facts are used here as its facts and the node is cited rather than re-derived, per ' +
                'SCOPE.md. This is the same import-by-reference done for SDS-PAGE in node 1-7. ' +
                'No sheet question lands here, so by the chapter 4 rule this node is cuttable if the ' +
                'sheets turn out to be the whole exam.',

  summary: {
    en: 'A microarray is a grid of short DNA probes of known sequence, immobilised at known positions ' +
        'on a solid surface. Labelled sample nucleic acid is washed over it, each fragment sticks ' +
        'wherever it finds a complementary probe, and the fluorescence at each spot is read as how ' +
        'much of that one sequence was present. Because position encodes identity, tens of thousands ' +
        'of hybridisation experiments run at once on one chip, which is what made genome-wide ' +
        'expression profiling possible in the first place. The defining limitation follows from the ' +
        'same design: you can only detect what you chose to print. A chip is a closed question — ' +
        'it asks "how much of each of these known sequences is here" and cannot answer "what is here", ' +
        'so a novel transcript, an unexpected splice isoform or an unsequenced organism is invisible ' +
        'to it. RNA-Seq, covered in node L-9-2-1, is the open version of the same question: rather ' +
        'than hybridising to fixed probes, the RNA is reverse-transcribed and sequenced directly, so ' +
        'abundance comes from counting reads and nothing has to be anticipated in advance. That is why ' +
        'sequencing displaced arrays for discovery work. Arrays did not disappear, though — where the ' +
        'question genuinely is fixed and known in advance, such as a clinical genotyping panel, a ' +
        'closed assay is cheaper, faster and easier to standardise, and being closed stops being a ' +
        'weakness.',
    cn: '微阵列是一张网格，上面固定着许多序列已知的短 DNA 探针，每一个都在已知的位置上。' +
        '把带标记的样品核酸洗过去，每个片段会粘在它能找到互补探针的地方，' +
        '再把每个点上的荧光读作「这一条序列有多少」。因为位置本身编码了身份，' +
        '几万个杂交实验可以在一张芯片上同时进行——这正是全基因组表达谱一开始得以成为可能的原因。' +
        '而它决定性的局限来自同一个设计：你只能检测到你事先选择印上去的东西。' +
        '芯片提的是一个封闭的问题——它问的是「这些已知序列各有多少」，' +
        '回答不了「这里有什么」，所以一条新的转录本、一个意料之外的剪接异构体、' +
        '或者一个尚未测序的物种，对它来说都是不可见的。RNA-Seq（见节点 L-9-2-1）' +
        '是同一个问题的开放版本：不去和固定探针杂交，而是把 RNA 逆转录后直接测序，' +
        '丰度来自数读长的条数，什么都不需要事先预料。这就是测序在探索性工作上取代芯片的原因。' +
        '不过芯片并没有消失——当问题确实是固定且事先已知的，比如临床基因分型套餐，' +
        '一个封闭的检测更便宜、更快、也更容易标准化，「封闭」这时就不再是缺点。'
  },

  mustKnow: '**芯片是封闭问题，测序是开放问题。**微阵列用「位置 = 身份」的方式把几万次杂交并行起来，' +
            '但只能看见你印上去的探针；它答不了「这里有什么」，只能答「这些各有多少」。' +
            '**这一条同时解释了它为什么曾经革命性、又为什么被 RNA-Seq 取代**——' +
            '以及它在问题真的固定时（临床分型）为什么至今还在用。' +
            'A microarray is a closed question and sequencing is an open one. Position encodes ' +
            'identity, which buys massive parallelism but means you only ever see the probes you ' +
            'chose to print.',

  skipIt: 'Do not memorise probe lengths, spot densities, scanner wavelengths, or the commercial ' +
          'platform names and their differences. Do not memorise normalisation algorithms by name. ' +
          'The closed-versus-open distinction and the reason it decides which method to use are the ' +
          'whole content; everything else here is implementation detail that changed every few years ' +
          'and is now largely historical. ' +
          '不用背探针长度、点阵密度、扫描仪波长，也不用背商业平台的名字和它们之间的差别，' +
          '更不用背归一化算法的名称。封闭对开放这个区分、以及它如何决定该用哪种方法，就是全部内容；' +
          '其余都是每隔几年就变一次、如今大半已成历史的实现细节。',

  explain: [
    {
      q: 'A microarray reads out fluorescence intensity at thousands of spots. What actually makes a ' +
         'bright spot mean "this sequence was abundant" rather than "this probe binds well"? ' +
         '（微阵列读出的是几千个点上的荧光强度。到底是什么让一个亮点意味着「这条序列很多」，' +
         '而不是「这个探针本身就容易结合」？）',
      a: '**Strictly speaking, nothing does — and that is why a raw array intensity is never reported ' +
         'as an absolute quantity.**\n\n' +
         'The signal at a spot is the product of two things you care about differently: how much of ' +
         'that sequence was in the sample, and how efficiently that particular probe hybridises. Probe ' +
         'efficiency varies enormously between spots for reasons that have nothing to do with biology ' +
         '— GC content sets the melting temperature, so a GC-rich probe holds its target more tightly ' +
         'at the same wash stringency; secondary structure in either the probe or the target can ' +
         'occlude the binding site; and the probe\'s own physical density on the surface differs from ' +
         'spot to spot. **Two probes exposed to identical amounts of their targets will therefore give ' +
         'different intensities.**\n\n' +
         'So an array is not read as an absolute measurement. It is read as a **comparison**, and the ' +
         'comparison is constructed so that probe efficiency cancels. In the classic two-colour design ' +
         'this is done inside a single spot: the experimental sample is labelled with one fluorophore ' +
         'and the reference sample with another, the two are mixed and hybridised **competitively to ' +
         'the same chip**, and what is reported is the ratio of the two colours at each spot. Whatever ' +
         'that probe\'s efficiency is, it applied equally to both samples, so it divides out of the ' +
         'ratio. **The number that survives is a fold-change between two conditions, not a ' +
         'concentration.**\n\n' +
         'This is the same logic as a Western blot loading control in node 1-7 and as the standard ' +
         'curve in node 1-1, and it is worth naming as such in an oral: when a measurement is ' +
         'contaminated by a per-item factor you cannot measure, you design the experiment so that the ' +
         'factor appears in both the numerator and the denominator. ' +
         '（严格说，没有任何东西能保证这一点——这正是为什么微阵列的原始强度从来不会被当作绝对量来报告。' +
         '一个点上的信号是两件你在意程度完全不同的事情的乘积：样品里那条序列有多少，' +
         '以及那个特定探针的杂交效率有多高。而探针效率在不同点之间差异极大，' +
         '原因和生物学毫无关系：GC 含量决定熔解温度，所以在同样的洗涤强度下，' +
         '富含 GC 的探针会把靶标抓得更牢；探针或靶标自身的二级结构可能挡住结合位点；' +
         '探针在表面上的物理密度也点点不同。所以两个探针即使面对等量的靶标，也会给出不同的强度。' +
         '因此微阵列不是被当作绝对测量来读的，而是被当作一次比较来读——' +
         '而且这个比较被特意构造成能让探针效率相互抵消。' +
         '在经典的双色设计里，这件事是在同一个点内部完成的：实验样品用一种荧光基团标记、' +
         '参照样品用另一种，两者混合后竞争性地杂交到同一张芯片上，报告的是每个点上两种颜色的比值。' +
         '不管那个探针的效率是多少，它对两份样品都同等生效，所以在比值里被除掉了。' +
         '活下来的那个数字是两个条件之间的倍数变化，不是浓度。' +
         '这和节点 1-7 里 Western blot 的上样内参、以及节点 1-1 里的标准曲线是同一套逻辑，' +
         '值得在口试里明确点出来：当一个测量被某个你测不了的、逐项变化的因子污染时，' +
         '就把实验设计成让这个因子同时出现在分子和分母上。）'
    },
    {
      q: 'Why is "you can only detect what you printed" a deeper limitation than it sounds, and what ' +
         'exactly does RNA-Seq do differently? ' +
         '（「只能检测你印上去的东西」这句话为什么比听起来更要命？RNA-Seq 到底做了什么不一样的事？）',
      a: '**Because it means the array cannot tell you that it missed something.** An absent signal and ' +
         'an absent probe look identical in the output, and neither is flagged.\n\n' +
         'A chip is designed from a reference annotation: somebody decided, before the experiment, ' +
         'which sequences exist and are worth asking about. Everything outside that list is not ' +
         'measured as zero — it is **not measured at all**, and the data file contains no trace of the ' +
         'question having gone unasked. A transcript from an unannotated gene, a splice isoform nobody ' +
         'had catalogued, a transcript from a strain or species not in the reference, a fusion ' +
         'transcript in a tumour: each is simply outside the frame. **The result looks complete ' +
         'because completeness is defined by the chip, not by the sample.** For discovery work this is ' +
         'the whole problem, because the interesting result is usually the thing nobody thought to ' +
         'print.\n\n' +
         'There is a second, quieter version of the same issue: **cross-hybridisation**. A probe ' +
         'binds not only its intended target but anything similar enough to stay bound through the ' +
         'wash, so members of a gene family, or a gene and its pseudogene, can bleed into one ' +
         'another\'s spots. The array reports a clean number for each, and nothing in that number ' +
         'says how much of it came from the wrong molecule.\n\n' +
         '**RNA-Seq inverts the design.** Per node `L-9-2-1`, cellular RNA is reverse-transcribed and ' +
         'sequenced deeply, so the readout is a pile of reads that are then matched against whatever ' +
         'reference you like — or assembled without one. Abundance is not a fluorescence intensity ' +
         'requiring a probe-efficiency correction but a **count**: more copies of a transcript yield ' +
         'more reads. Nothing needs to be anticipated, novel and unannotated sequences show up as ' +
         'reads that simply do not map where expected, and the same data can be re-analysed years ' +
         'later against a better annotation — which an array\'s data can never be, because the ' +
         'unasked questions were never recorded. `L-9-2-1` also notes it is now sensitive enough for ' +
         'single cells, scRNA-Seq, which lets the transcriptional state of different parts of one ' +
         'tissue be catalogued separately. ' +
         '（因为这意味着芯片没有能力告诉你它漏掉了什么。「信号不存在」和「探针不存在」在输出里长得一模一样，' +
         '而且两者都不会被标记出来。芯片是按参考注释设计的：有人在实验之前就决定了哪些序列存在、' +
         '哪些值得问。清单之外的一切并不是被测成了零——它根本没有被测量，' +
         '而数据文件里不会留下任何「这个问题没被问过」的痕迹。一条来自未注释基因的转录本、' +
         '一个没人编目过的剪接异构体、一个不在参考序列里的菌株或物种的转录本、' +
         '肿瘤里的一条融合转录本：每一个都直接在取景框之外。' +
         '结果看起来是完整的，因为「完整」是由芯片定义的，不是由样品定义的。' +
         '对探索性研究来说这就是全部问题所在，因为有意思的结果通常恰恰是没人想到要印上去的那个。' +
         '还有一个更安静的同类问题：交叉杂交。一个探针不只结合它的目标，' +
         '也会结合任何相似到足以熬过洗涤的东西，所以一个基因家族的成员之间、' +
         '或者一个基因和它的假基因之间，信号会互相渗进对方的点里。' +
         '芯片会为每一个都报出一个干净的数字，而那个数字本身不会说其中有多少来自错误的分子。' +
         'RNA-Seq 把这个设计反了过来。按节点 L-9-2-1：细胞 RNA 被逆转录后深度测序，' +
         '读出的是一堆读长，之后再拿它们去比对你想用的任何参考序列——或者干脆不用参考序列做组装。' +
         '丰度不再是一个需要做探针效率校正的荧光强度，而是一个计数：' +
         '某条转录本拷贝越多，产生的读长就越多。什么都不需要事先预料，' +
         '新的、未注释的序列会以「读长比对不到预期位置」的形式显现出来，' +
         '而且同一批数据几年后可以拿更好的注释重新分析——这是芯片数据永远做不到的，' +
         '因为那些没被问的问题从来没有被记录下来。L-9-2-1 还指出它如今灵敏到可用于单个细胞（scRNA-Seq），' +
         '从而能把同一组织不同部位各自的转录状态分别编目。）'
    },
    {
      q: 'If RNA-Seq is better on every axis that matters for discovery, why are microarrays still ' +
         'manufactured and still used clinically? ' +
         '（如果 RNA-Seq 在所有对探索研究重要的维度上都更好，为什么微阵列还在生产、还在临床上使用？）',
      trace: {
        what: '**微阵列问的是一个封闭问题**：「这一份固定清单上的每条序列，各有多少？」' +
              '而 RNA-Seq 问的是开放问题：「这里有什么？」',
        from: '**封闭来自它的物理设计**——探针是事先印上去的，位置即身份。' +
              '这个约束不是缺陷，是它能并行几万次杂交的原因。',
        to: '**当问题本身确实固定时，封闭反而是优点**：结果空间有限，' +
            '所以流程可以被标准化、验证、审批，成本和分析复杂度都低得多。' +
            '临床基因分型套餐、已知致病变异筛查、拷贝数分析都属于这一类。',
        family: '同一族的「封闭 vs 开放」对照还有：qPCR（封闭，见节点 4-1）对 RNA-Seq；' +
                '定向探针质谱对全谱质谱；以及节点 4-2 里 SPR（问一对已知分子）对双杂交筛库（问一个文库）。',
        numbers: '这里没有必须记的数字。要能讲的是权衡的**方向**，不是任何具体的成本或通量数值——' +
                 '那些数字每隔几年就变一次。'
      },
      a: '**Because "worse for discovery" and "worse for a decision" are different judgements, and a ' +
         'clinical assay is making a decision.**\n\n' +
         'The properties that make an array limited in research are the same properties that make it ' +
         'attractive in a regulated setting. A closed assay has a **bounded output space**: it can ' +
         'only ever return values for a fixed set of positions, so the analysis pipeline is fixed too, ' +
         'and a fixed pipeline can be validated once and then trusted. An open assay produces data ' +
         'whose interpretation depends on which reference and which analysis version you ran, which is ' +
         'exactly what a diagnostic laboratory does not want to have to re-validate. Cost and turnaround ' +
         'follow the same way: you pay for the questions you asked, not for sequencing an entire ' +
         'transcriptome to answer forty of them.\n\n' +
         'And the array format was never only about expression. **Genotyping arrays** ask, at each of ' +
         'many known variant positions, which allele is present — a question that is genuinely and ' +
         'permanently closed, because the variants of interest are defined in advance by what is known ' +
         'to be clinically actionable. **Comparative genomic hybridisation** arrays ask about copy ' +
         'number along a chromosome. For both, "you only see what you printed" is not a limitation at ' +
         'all: seeing anything else would be outside the assay\'s remit.\n\n' +
         '**The general form is worth carrying into the oral**, because it generalises well beyond ' +
         'arrays: an open method is the right tool when you do not know what you are looking for, and ' +
         'a closed method is the right tool when you do and need the answer to be cheap, fast and ' +
         'reproducible. The same trade-off decides qPCR versus RNA-Seq in node 4-1, and SPR on a known ' +
         'pair versus a two-hybrid library screen in node 4-2. ' +
         '（因为「对探索研究更差」和「对做决定更差」是两个不同的判断，而临床检测是在做决定。' +
         '那些让微阵列在研究中显得受限的性质，恰恰也是让它在受监管场景中有吸引力的性质。' +
         '封闭的检测有一个有界的输出空间：它只可能对一组固定位置返回数值，' +
         '所以分析流程也是固定的，而固定的流程可以验证一次然后长期信任。' +
         '开放的检测产生的数据，其解读取决于你用了哪个参考序列、哪个版本的分析——' +
         '这恰恰是诊断实验室最不想反复重新验证的东西。成本和周转时间也是同一个道理：' +
         '你为你问的那些问题付费，而不是为了回答四十个问题去测一整个转录组。' +
         '而且微阵列这个形式从来就不只是用于表达谱。基因分型芯片问的是：' +
         '在许多已知变异位点上，各自是哪一个等位基因——这是一个真正且长期封闭的问题，' +
         '因为感兴趣的变异是由「已知具有临床可操作性」这件事事先定义好的。' +
         '比较基因组杂交芯片问的则是沿染色体的拷贝数。对这两者来说，' +
         '「只能看见你印上去的东西」根本不算限制：看见别的东西反而超出了该检测的职责范围。' +
         '这个一般形式值得带进口试，因为它远不止适用于芯片：' +
         '当你不知道自己在找什么时，开放的方法才是对的工具；' +
         '当你知道、并且需要答案便宜、快速、可重复时，封闭的方法才是对的工具。' +
         '同一个权衡也决定了节点 4-1 里 qPCR 与 RNA-Seq 的取舍，' +
         '以及节点 4-2 里「对一对已知分子做 SPR」与「对一个文库做双杂交筛选」的取舍。）',
      takeaway: '开放方法用于「不知道在找什么」，封闭方法用于「知道，且要便宜快速可重复」。芯片是后者。'
    }
  ],

  points: [
    { term: 'Position encodes identity', en: 'Probes of known sequence are immobilised at known coordinates, so which spot lights up tells you which sequence was captured. This is what allows tens of thousands of hybridisation reactions to be read in parallel from one surface.', cn: '位置即身份：序列已知的探针被固定在已知坐标上，所以哪个点亮了就说明捕获到了哪条序列。正是这一点让几万个杂交反应能在一个表面上被并行读出。' },
    { term: 'The signal is hybridisation, not sequencing', en: 'Labelled sample nucleic acid binds wherever it finds a complementary probe and the rest is washed away. Detection is therefore only as specific as the wash is stringent.', cn: '信号来自杂交而不是测序：带标记的样品核酸结合在能找到互补探针的地方，其余被洗掉。因此检测的特异性只能高到洗涤强度所允许的程度。' },
    { term: 'Raw intensity is not a quantity', en: 'Spot signal is the product of target abundance and that probe\'s hybridisation efficiency, and efficiency varies with GC content, secondary structure and probe density. An absolute intensity therefore cannot be read as a concentration.', cn: '原始强度不是一个量：点信号是靶标丰度与该探针杂交效率的乘积，而效率随 GC 含量、二级结构和探针密度而变。所以绝对强度读不出浓度。' },
    { term: 'Two-colour competitive hybridisation cancels probe efficiency', en: 'Sample and reference are labelled with different fluorophores, mixed, and hybridised to the same chip. The reported ratio at each spot divides out that spot\'s efficiency, so the output is a fold-change between conditions.', cn: '双色竞争杂交抵消探针效率：样品和参照用不同荧光基团标记后混合，杂交到同一张芯片上。每个点报告的比值把该点的效率除掉了，所以输出是两个条件之间的倍数变化。' },
    { term: 'The same trick as a loading control', en: 'When a measurement is contaminated by a per-item factor you cannot measure, put that factor in both numerator and denominator. This is the reasoning behind the Western loading control in node 1-7 and the standard curve in node 1-1.', cn: '和上样内参是同一个手法：当测量被一个你测不了、且逐项变化的因子污染时，就让这个因子同时出现在分子和分母上。节点 1-7 的 Western 内参和节点 1-1 的标准曲线背后是同一套推理。' },
    { term: 'A chip is a closed question', en: 'It answers "how much of each of these known sequences is present", never "what is present". Sequences absent from the design are not measured as zero — they are not measured at all, and nothing in the output records that the question went unasked.', cn: '芯片提的是封闭问题：它回答「这些已知序列各有多少」，从不回答「这里有什么」。设计之外的序列不是被测成零，而是根本没被测量，而且输出里不会留下「这个问题没被问过」的任何记录。' },
    { term: 'Cross-hybridisation blurs related sequences', en: 'A probe also binds anything similar enough to survive the wash, so gene-family members or a gene and its pseudogene bleed into one another. The reported number does not indicate how much came from the wrong molecule.', cn: '交叉杂交会让相近序列互相污染：探针也会结合任何相似到能熬过洗涤的东西，所以基因家族成员之间、或基因与其假基因之间会互相渗透。报出的数字不会显示其中有多少来自错误的分子。' },
    { term: 'RNA-Seq counts instead of hybridising', en: 'Per node L-9-2-1, cellular RNA is reverse-transcribed and deeply sequenced; abundance follows from read count, since more copies of a transcript give more reads. Nothing has to be anticipated in advance.', cn: 'RNA-Seq 靠计数而不是杂交：按节点 L-9-2-1，细胞 RNA 被逆转录后深度测序；丰度来自读长计数，因为某条转录本拷贝越多、产生的读长越多。什么都不需要事先预料。' },
    { term: 'Sequencing data can be re-analysed, array data cannot', en: 'Reads can be re-mapped years later against a better annotation, or assembled with no reference at all. An array\'s unasked questions were never recorded, so no reanalysis can recover them.', cn: '测序数据可以重新分析，芯片数据不行：读长几年后可以对着更好的注释重新比对，甚至完全不用参考序列做组装。芯片上没被问的问题从未被记录，所以任何重新分析都找不回来。' },
    { term: 'Closed is an advantage when the question is fixed', en: 'A bounded output space means a fixed analysis pipeline, which can be validated once and then trusted — which is what a regulated diagnostic needs. Cost and turnaround follow the same logic.', cn: '当问题固定时，封闭反而是优点：有界的输出空间意味着固定的分析流程，可以验证一次然后长期信任——这正是受监管的诊断所需要的。成本和周转时间也遵循同样的逻辑。' },
    { term: 'Arrays were never only about expression', en: 'Genotyping arrays ask which allele is present at many known variant positions, and comparative genomic hybridisation arrays ask about copy number along a chromosome. For both, the closed design matches a permanently closed question.', cn: '芯片从来不只用于表达谱：基因分型芯片问的是许多已知变异位点上各是哪个等位基因，比较基因组杂交芯片问的是沿染色体的拷贝数。对这两者来说，封闭的设计正好匹配一个长期封闭的问题。' }
  ],

  beyondPoints: [
    { term: 'Why the array era produced a reproducibility crisis, and what actually fixed it', en: 'Early expression-array studies were notorious for not replicating between laboratories, and the diagnosis is instructive because none of it was fraud. Different platforms printed different probes for the same gene, and since probe efficiency varies with sequence, two platforms measuring one sample disagreed about which genes had changed. Normalisation methods differed and were often chosen after seeing the data. And a chip measures tens of thousands of genes at once across a handful of samples, so without correction for multiple testing a list of significant hits is largely noise: testing 20,000 genes at a 5 percent threshold yields on the order of a thousand false positives before any biology happens at all. What fixed it was not better chips but reporting standards — declaring the platform, the raw data, the normalisation and the multiple-testing correction in advance. The statistical lesson outlived the technology and applies unchanged to RNA-Seq.', cn: '芯片时代为什么会出现可重复性危机，以及真正解决它的是什么：早期的表达谱芯片研究以「实验室之间无法重复」而出名，而它的诊断很有教益，因为其中没有一件是造假。不同平台为同一个基因印的探针不同，而探针效率随序列变化，于是两个平台测同一份样品，会在「哪些基因变了」上给出不一致的答案。归一化方法各不相同，而且常常是在看过数据之后才选定的。再加上一张芯片在少数几个样品上同时测量几万个基因，如果不做多重检验校正，一份显著命中清单基本上就是噪音：在 5% 的阈值下检验两万个基因，在任何生物学发生之前就已经有约一千个假阳性。真正解决问题的不是更好的芯片，而是报告规范——事先声明平台、原始数据、归一化方法和多重检验校正。这条统计学教训比那项技术活得更久，原样适用于 RNA-Seq。' }
  ],

  terms: [
    { en: 'DNA microarray', cn: 'DNA 微阵列', def_en: 'A grid of short DNA probes of known sequence immobilised at known positions, read by hybridising labelled sample nucleic acid to it.', def_cn: '一张网格，上面在已知位置固定着序列已知的短 DNA 探针，通过让带标记的样品核酸与之杂交来读取。' },
    { en: 'Probe', cn: '探针', def_en: 'The immobilised oligonucleotide of known sequence at one spot; what the array can detect is entirely determined by which probes were printed.', def_cn: '固定在某个点上的、序列已知的寡核苷酸；芯片能检测什么，完全由印上去的是哪些探针决定。' },
    { en: 'Hybridisation', cn: '杂交', def_en: 'Base-pairing of a labelled sample strand to a complementary probe; the binding event that produces the signal, with specificity set by wash stringency.', def_cn: '带标记的样品链与互补探针之间的碱基配对；产生信号的结合事件，其特异性由洗涤强度决定。' },
    { en: 'Probe efficiency', cn: '探针效率', def_en: 'How well one particular probe captures its target, varying with GC content, secondary structure and surface density — the reason raw intensity is not a quantity.', def_cn: '某一个特定探针捕获其靶标的能力，随 GC 含量、二级结构和表面密度而变——这正是原始强度不能当作量来读的原因。' },
    { en: 'Two-colour hybridisation', cn: '双色杂交', def_en: 'Labelling sample and reference with different fluorophores and hybridising them competitively to one chip, so the per-spot ratio cancels probe efficiency.', def_cn: '把样品和参照用不同荧光基团标记后竞争性地杂交到同一张芯片上，使每个点的比值把探针效率抵消掉。' },
    { en: 'Fold-change', cn: '倍数变化', def_en: 'The ratio between two conditions at one spot; what an array actually reports, as opposed to an absolute concentration.', def_cn: '某个点上两个条件之间的比值；这才是芯片真正报告的东西，而不是绝对浓度。' },
    { en: 'Closed assay', cn: '封闭式检测', def_en: 'One that can only return values for a fixed, predefined set of targets. Bounded output makes the pipeline validatable; the cost is that anything unanticipated is invisible.', def_cn: '只能对一组固定的、事先定义好的靶标返回数值的检测。有界的输出使流程可被验证；代价是任何未预料到的东西都不可见。' },
    { en: 'Cross-hybridisation', cn: '交叉杂交', def_en: 'Binding of a probe to sequences merely similar to its intended target, so related genes or pseudogenes contaminate each other\'s signal.', def_cn: '探针结合到仅仅与其目标相似的序列上，导致相关基因或假基因之间信号互相污染。' },
    { en: 'RNA-Seq', cn: 'RNA-Seq', def_en: 'Deep sequencing of reverse-transcribed cellular RNA, reporting which transcripts are present and their relative abundance from read counts. Taught in node L-9-2-1.', def_cn: '对经逆转录的细胞 RNA 进行深度测序，从读长计数得出哪些转录本存在及其相对丰度。见节点 L-9-2-1。' },
    { en: 'Transcriptome', cn: '转录组', def_en: 'The entire complement of RNAs transcribed in a cell under a given condition; the quantity both arrays and RNA-Seq attempt to survey.', def_cn: '一个细胞在给定条件下转录出的全部 RNA；芯片和 RNA-Seq 都试图测绘的正是这个量。' },
    { en: 'scRNA-Seq', cn: '单细胞 RNA 测序', def_en: 'RNA-Seq sensitive enough to run on a single cell, allowing different parts of one tissue to be catalogued separately.', def_cn: '灵敏度足以在单个细胞上进行的 RNA-Seq，使同一组织的不同部位可以被分别编目。' },
    { en: 'Genotyping array', cn: '基因分型芯片', def_en: 'An array asking which allele is present at each of many known variant positions — a permanently closed question, which is why the format still suits it.', def_cn: '用来询问许多已知变异位点上各是哪个等位基因的芯片——这是一个长期封闭的问题，也正因此这种形式至今适用。' },
    { en: 'Multiple testing correction', cn: '多重检验校正', def_en: 'The statistical adjustment required when tens of thousands of genes are tested at once; without it most of a significant-hit list is noise.', def_cn: '当几万个基因被同时检验时所必需的统计校正；没有它，一份显著命中清单大部分是噪音。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'Why is the raw fluorescence intensity of one microarray spot not usable as a measure of how much of that transcript was present?',
      q_cn: '为什么微阵列上一个点的原始荧光强度，不能直接用作「那条转录本有多少」的量度？',
      options: [
        'It also depends on that probe\'s hybridisation efficiency',
        'Fluorophores photobleach at different rates across the surface of the chip',
        'The scanner cannot distinguish signal from background at low spot intensities',
        'Sample nucleic acid is degraded unevenly during the labelling reaction step'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'Photobleaching is a real effect and is managed by scanning protocol, but it does not vary systematically per sequence. The problem here is that a given probe has its own capture efficiency set by its sequence, which no scanning protocol can correct.', cn: '光漂白是真实存在的效应，靠扫描流程来控制，但它不会随序列而系统性变化。这里的问题是每个探针有由其序列决定的、各自的捕获效率，任何扫描流程都纠正不了。' },
        2: { en: 'A detection floor at low intensity is a sensitivity limit and affects the weakest spots. It does not explain why two spots with equal amounts of target give different intensities, which is the actual issue.', cn: '低强度下的检测下限是灵敏度问题，影响的是最弱的那些点。它解释不了「两个点面对等量靶标却给出不同强度」，而那才是真正的问题。' }
      },
      why_en: 'Spot signal is the product of target abundance and probe efficiency, and efficiency varies between probes with GC content, secondary structure and surface density. Two probes given identical amounts of their targets return different intensities, so the number is only interpretable as a ratio against a reference hybridised to the same spot.',
      why_cn: '点信号是靶标丰度与探针效率的乘积，而效率在不同探针之间随 GC 含量、二级结构和表面密度变化。两个探针即使面对等量靶标也会返回不同强度，所以这个数字只有作为「与杂交到同一点上的参照之比」才可解读。' },

    { type: 'mcq',
      q_en: 'A microarray experiment finds no signal for a transcript that is in fact highly expressed. Which explanation is specific to the array format itself?',
      q_cn: '一次微阵列实验对一条实际上高表达的转录本没有检测到信号。哪一种解释是微阵列这种形式本身特有的？',
      options: [
        'No probe for it was printed on the chip',
        'The RNA sample degraded before the labelling reaction was carried out',
        'The hybridisation was washed at too high a stringency for that duplex',
        'The fluorophore used for that channel was quenched during scanning'
      ],
      answer: 0,
      optionNotes: {
        2: { en: 'Over-stringent washing does cause false negatives, but it is a protocol error that would apply to any hybridisation-based method, and it can in principle be diagnosed and corrected. The absent-probe case cannot be diagnosed from the output at all.', cn: '洗涤过强确实会造成假阴性，但那是流程上的错误，对任何基于杂交的方法都适用，而且原则上可以被诊断和纠正。而「没有探针」这种情况根本无法从输出中被诊断出来。' }
      },
      why_en: 'A chip is designed from a reference annotation, so anything not on that list is not measured as zero — it is not measured at all, and the output records no trace of the question having gone unasked. That failure mode belongs to the closed design, whereas degradation, stringency and quenching are generic wet-lab problems.',
      why_cn: '芯片是按参考注释设计的，所以不在清单上的东西并不是被测成了零——它根本没被测量，而输出里不会留下「这个问题没被问过」的痕迹。这种失效模式属于封闭式设计本身，而降解、洗涤强度和淬灭都是通用的实验问题。' },

    { type: 'mcq',
      q_en: 'Which of these is a reason genotyping arrays remain in clinical use even though sequencing is available?',
      q_cn: '在已经有测序的情况下，下列哪一项是基因分型芯片仍在临床使用的理由？',
      options: [
        'A fixed output space makes the pipeline validatable once',
        'Hybridisation detects variants that sequencing chemistry systematically misses',
        'Arrays achieve a higher per-base accuracy than any sequencing platform can',
        'Genotyping requires the discovery of previously unreported variant positions'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'This reverses the relationship. Sequencing sees everything in the sample including variants no array was designed for; hybridisation is the method that misses what it was not built to look for.', cn: '这把关系说反了。测序看到的是样品中的一切，包括任何芯片都没有为之设计的变异；杂交才是那个「没被设计去找的东西就看不见」的方法。' },
        3: { en: 'Discovery is exactly what genotyping does not require. The clinical value comes from the variant set being defined in advance by what is known to be actionable, which is what makes a closed assay appropriate.', cn: '基因分型恰恰不需要发现新东西。它的临床价值正来自变异集合是由「已知具有可操作性」事先定义好的，而这正是封闭式检测适用的原因。' }
      },
      why_en: 'A closed assay returns values only for a fixed set of positions, so the analysis pipeline is fixed too and can be validated once and then trusted — which is what a regulated diagnostic needs. Cost and turnaround follow, since you pay only for the questions asked rather than for sequencing everything to answer a few.',
      why_cn: '封闭式检测只对一组固定位置返回数值，所以分析流程也是固定的，可以验证一次然后长期信任——这正是受监管的诊断所需要的。成本和周转时间也随之而来，因为你只为所问的问题付费，而不必为回答少数几个问题去测全部。' },

    { type: 'short',
      q_en: 'Compare a DNA microarray with RNA-Seq for measuring gene expression, and say when you would still choose the array.',
      q_cn: '比较 DNA 微阵列与 RNA-Seq 在测量基因表达上的差别，并说明什么时候你仍然会选芯片。',
      accept: ['closed', '封闭', 'open', '开放', 'probe', '探针', 'hybridis', '杂交', 'read count', '读长', 'novel', '新', 'annotation', '注释', 'clinical', '临床'],
      answer_en: 'Both survey the transcriptome but they ask structurally different questions. An array is a grid of probes of known sequence at known positions; labelled sample nucleic acid hybridises wherever it finds a complement, and position encodes identity, which is what allows tens of thousands of measurements in parallel. Its signal is an intensity contaminated by each probe\'s own hybridisation efficiency, so it is reported as a ratio against a reference hybridised competitively to the same spot, and the output is a fold-change rather than a concentration. Crucially it is a closed question: only printed sequences are measured, an unannotated transcript or novel isoform is invisible, and nothing in the output records that the question went unasked. RNA-Seq inverts this — RNA is reverse-transcribed and sequenced, abundance comes from read counts, nothing has to be anticipated, novel sequences appear as reads that fail to map as expected, and the data can be re-analysed later against a better annotation. That is why sequencing displaced arrays for discovery. I would still choose an array where the question is genuinely fixed in advance: a clinical genotyping panel or copy-number analysis, where a bounded output space means the pipeline can be validated once, and cost and turnaround are lower because you pay only for the questions you asked.',
      answer_cn: '两者都测绘转录组，但提的问题在结构上不同。芯片是一张网格，上面在已知位置固定着序列已知的探针；带标记的样品核酸在能找到互补序列的地方杂交，位置即身份，这正是它能并行进行几万次测量的原因。它的信号是一个被各探针自身杂交效率污染的强度，所以要以「与竞争性杂交到同一点上的参照之比」来报告，输出是倍数变化而不是浓度。关键在于它提的是封闭问题：只有印上去的序列会被测量，未注释的转录本或新的异构体是不可见的，而且输出里不会记录「这个问题没被问过」。RNA-Seq 把这个反了过来——RNA 被逆转录后测序，丰度来自读长计数，什么都不需要事先预料，新序列会以「读长没有比对到预期位置」的形式出现，数据日后还能对着更好的注释重新分析。这就是测序在探索性研究上取代芯片的原因。而当问题确实事先固定时我仍然会选芯片：比如临床基因分型套餐或拷贝数分析，此时有界的输出空间意味着流程可以验证一次，成本和周转时间也更低，因为你只为所问的问题付费。' }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'In a two-colour array experiment, what does taking the ratio of the two channels at each spot achieve?',
      q_cn: '在双色芯片实验里，取每个点上两个通道的比值，达到了什么效果？',
      options: [
        'It cancels that spot\'s probe efficiency',
        'It corrects for uneven illumination across the surface of the scanned chip',
        'It compensates for the different quantum yields of the two fluorophores used',
        'It increases the dynamic range over which the spot intensity stays linear'
      ],
      answer: 0,
      why_en: 'Both samples were hybridised competitively to the same physical spot, so whatever that probe\'s capture efficiency is, it applied equally to both and divides out of the ratio. What survives is a comparison between the two conditions, which is why an array reports fold-change rather than concentration.',
      why_cn: '两份样品竞争性地杂交到同一个物理点上，所以不管那个探针的捕获效率是多少，它对两者同等生效，因而在比值里被除掉。活下来的是两个条件之间的比较，这也是芯片报告倍数变化而不是浓度的原因。' },

    { type: 'mcq',
      q_en: 'Why can RNA-Seq data be re-analysed years later against a better annotation while array data cannot?',
      q_cn: '为什么 RNA-Seq 的数据几年后可以对着更好的注释重新分析，而芯片数据不行？',
      options: [
        'Reads are recorded; unasked array questions never were',
        'Sequencing files are stored in open formats whereas array files are proprietary',
        'Array fluorophores degrade in storage so the original signal cannot be recovered',
        'Sequencing instruments retain the original sample and can simply be re-run on it'
      ],
      answer: 0,
      why_en: 'RNA-Seq records the reads themselves, so re-mapping them against a new reference is just recomputation on data you already have. An array only ever recorded intensities at the positions somebody chose to print, so a sequence that had no probe left no trace at all and no amount of reanalysis can recover it.',
      why_cn: 'RNA-Seq 记录的是读长本身，所以拿它们去比对新的参考序列只是在已有数据上重新计算。芯片记录的只是「有人选择印上去的那些位置」上的强度，所以一条没有探针的序列根本没有留下任何痕迹，再多的重新分析也找不回来。' },

    { type: 'mcq',
      q_en: 'An array study reports 900 significantly changed genes out of 20,000 tested, with no correction applied. What is the immediate problem?',
      q_cn: '一项芯片研究在检验的两万个基因中报告了 900 个显著变化的基因，且未做任何校正。眼下的问题是什么？',
      options: [
        'That is roughly the false-positive count expected by chance',
        'The sample size was too small to detect changes of that magnitude reliably',
        'Fold-change thresholds should have been applied before the statistical testing',
        'The reference channel must have been mislabelled during sample preparation'
      ],
      answer: 0,
      why_en: 'Testing 20,000 genes at a 5 percent threshold produces on the order of a thousand hits by chance alone, before any biology. Without a multiple-testing correction the reported list is not distinguishable from that null expectation, which is one of the reasons early array studies replicated so poorly.',
      why_cn: '在 5% 的阈值下检验两万个基因，仅凭偶然就会产生约一千个命中，这还没算上任何生物学。不做多重检验校正，报告出来的清单就和这个零假设预期区分不开——这正是早期芯片研究可重复性很差的原因之一。' }
  ],

  oral: {
    q_en: 'What is a DNA microarray, and how does it compare with RNA sequencing?',
    q_cn: '什么是 DNA 微阵列？它与 RNA 测序相比如何？',
    model_en: 'A microarray is a grid of short DNA probes of known sequence, immobilised at known ' +
              'positions on a solid surface. Labelled nucleic acid from the sample is washed over it, ' +
              'each fragment sticks wherever it finds a complementary probe, and the fluorescence at ' +
              'each spot is read out. Position encodes identity, so tens of thousands of hybridisation ' +
              'reactions are read in parallel from one chip, and that parallelism is what made ' +
              'genome-wide expression profiling possible in the first place. The signal needs care, ' +
              'though: a spot intensity is the product of how much target was present and how ' +
              'efficiently that particular probe hybridises, and efficiency varies with GC content, ' +
              'secondary structure and probe density. So an array is not read as an absolute quantity. ' +
              'In the classic two-colour design the sample and a reference are labelled with different ' +
              'fluorophores and hybridised competitively to the same chip, and the ratio at each spot ' +
              'is reported — whatever that probe\'s efficiency is, it applied to both and divides out. ' +
              'The output is therefore a fold-change between conditions. That is the same reasoning as ' +
              'a Western blot loading control. The defining limitation is that an array asks a closed ' +
              'question: it can only report on sequences somebody chose to print, so an unannotated ' +
              'transcript, an uncatalogued splice isoform or a fusion in a tumour is not measured as ' +
              'zero, it is not measured at all — and nothing in the output records that the question ' +
              'went unasked. There is also cross-hybridisation, where a probe captures anything similar ' +
              'enough to survive the wash, so gene-family members bleed into each other. RNA-Seq ' +
              'inverts the design: cellular RNA is reverse-transcribed and sequenced deeply, abundance ' +
              'follows from read count because more copies give more reads, nothing has to be ' +
              'anticipated, novel sequences show up as reads that do not map where expected, and the ' +
              'same data can be re-analysed years later against a better annotation. It is now ' +
              'sensitive enough for single cells. That is why sequencing displaced arrays for discovery ' +
              'work. Arrays did not disappear, though, and the reason is worth stating: where the ' +
              'question is genuinely fixed in advance — a clinical genotyping panel, copy-number ' +
              'analysis — a bounded output space means a fixed pipeline that can be validated once and ' +
              'then trusted, and you pay only for the questions you asked. Closed stops being a ' +
              'weakness exactly when the question is permanently closed.',
    model_cn: '微阵列是一张网格，上面在已知位置固定着许多序列已知的短 DNA 探针。' +
              '把样品中带标记的核酸洗过去，每个片段粘在它能找到互补探针的地方，再读出每个点上的荧光。' +
              '位置即身份，所以几万个杂交反应能在一张芯片上被并行读出，' +
              '而这种并行性正是全基因组表达谱一开始得以可能的原因。不过信号要小心处理：' +
              '一个点的强度是「靶标有多少」与「那个特定探针杂交效率有多高」的乘积，' +
              '而效率随 GC 含量、二级结构和探针密度变化。所以芯片不能当绝对量来读。' +
              '在经典的双色设计里，样品和参照用不同荧光基团标记后竞争性地杂交到同一张芯片上，' +
              '报告的是每个点上的比值——不管那个探针的效率是多少，它对两者同等生效，因而被除掉。' +
              '所以输出是两个条件之间的倍数变化。这和 Western blot 的上样内参是同一套推理。' +
              '它决定性的局限在于芯片提的是一个封闭问题：它只能报告有人选择印上去的序列，' +
              '所以一条未注释的转录本、一个没被编目的剪接异构体、或者肿瘤里的一条融合转录本，' +
              '不是被测成了零，而是根本没被测量——而且输出里不会记录「这个问题没被问过」。' +
              '此外还有交叉杂交：探针会捕获任何相似到能熬过洗涤的东西，于是基因家族成员之间信号互相渗透。' +
              'RNA-Seq 把这个设计反了过来：细胞 RNA 被逆转录后深度测序，' +
              '丰度来自读长计数——拷贝越多读长越多，什么都不需要事先预料，' +
              '新序列会以「读长没比对到预期位置」的形式出现，同一批数据几年后还能对着更好的注释重新分析。' +
              '它如今灵敏到可用于单个细胞。这就是测序在探索性工作上取代芯片的原因。' +
              '不过芯片并没有消失，理由值得说出来：当问题确实事先固定时——' +
              '临床基因分型套餐、拷贝数分析——有界的输出空间意味着固定的流程，' +
              '可以验证一次然后长期信任，而且你只为所问的问题付费。' +
              '当问题本身就是长期封闭的时候，「封闭」也就不再是缺点。',
    checklist: [
      { en: 'Probes of known sequence at known positions: position encodes identity', cn: '序列已知的探针在已知位置上：位置即身份' },
      { en: 'Parallelism is the point — tens of thousands of hybridisations at once', cn: '并行才是关键——几万次杂交同时进行' },
      { en: 'Spot intensity = target abundance x probe efficiency, so not absolute', cn: '点强度 = 靶标丰度 乘以 探针效率，所以不是绝对量' },
      { en: 'Two-colour competitive hybridisation cancels efficiency; output is fold-change', cn: '双色竞争杂交抵消效率；输出是倍数变化' },
      { en: 'Same reasoning as a Western loading control (node 1-7)', cn: '和 Western 上样内参是同一套推理（节点 1-7）' },
      { en: 'Closed question: unprinted sequences are not measured at all, not measured as zero', cn: '封闭问题：没印上去的序列是根本没被测量，而不是被测成零' },
      { en: 'Cross-hybridisation blurs gene families and pseudogenes', cn: '交叉杂交会混淆基因家族与假基因' },
      { en: 'RNA-Seq: read counts, nothing anticipated, novel sequences visible (node L-9-2-1)', cn: 'RNA-Seq：读长计数，无需预料，新序列可见（节点 L-9-2-1）' },
      { en: 'Sequencing data can be re-analysed later; array data cannot', cn: '测序数据日后可重新分析；芯片数据不能' },
      { en: 'Closed is an advantage when the question is permanently closed: clinical panels', cn: '当问题长期封闭时，封闭是优点：临床套餐' }
    ]
  }
},

{
  id: '4-4',
  chapter: 4,
  lecture: 'Mol Biol',
  section: '4.4',
  slides: 'Molekularni biologie a genetika II · molbio Tier 1（端粒/端粒酶）· chapter-4 queue rank 6',
  coverage: 'partial',
  enTitle: 'The end-replication problem — why a linear chromosome cannot copy its own ends, and what telomerase does about it',
  cnTitle: '末端复制问题——线性染色体为什么复制不了自己的末端，以及端粒酶为此做了什么',
  coverageNote: 'Re-measured before writing, and the queue verdict of GAP was too strong. The split ' +
                'matters and follows the rule set in node 1-7: check what a keyword hit actually ' +
                'says. Of 38 raw hits across all corpora, those in Lehninger `leh_ch9` / `leh_ch9c` ' +
                'are telomere-as-a-YAC-component name-drops (a YAC needs a centromere and two ' +
                'telomeres) and teach nothing about telomere biology. But `L-26-3-1` genuinely ' +
                'teaches the enzyme: telomerase IS a reverse transcriptase, and the unusual part is ' +
                'that it carries its own template, a short RNA inside the enzyme, with the ' +
                'Greider and Blackburn attribution. That half is therefore imported by reference ' +
                'and cited, not rewritten — the same treatment RNA-Seq got in node 4-3 and ' +
                'SDS-PAGE in node 1-7. What is a genuine measured gap is the MECHANISM that makes ' +
                'the enzyme necessary: searched in both languages across all corpora, ' +
                'end-replication 0 files, 末端复制 0, Hayflick 0, telomere-shortening 0, ' +
                '端粒缩短 0. So the fresh writing here is the end-replication problem and what ' +
                'follows from it. No sheet question lands here, so by the chapter 4 rule this node ' +
                'is cuttable if the sheets turn out to be the whole exam.',

  summary: {
    en: 'DNA polymerase has two hard requirements: it can only extend a strand 5\' to 3\', and it ' +
        'cannot start one from nothing — it needs a primer with a free 3\'-OH. On the lagging ' +
        'strand each Okazaki fragment is started by an RNA primer that is later removed and filled ' +
        'in by the neighbouring fragment. The very last primer at the 5\' end of the lagging strand ' +
        'has no neighbour to its left, so when it is removed there is nothing to fill the gap, and ' +
        'the daughter strand comes out shorter than its template. That is the end-replication ' +
        'problem, and it is a consequence of the chemistry of the polymerase, not a defect: every ' +
        'linear chromosome loses sequence from its ends at every division. Circular bacterial ' +
        'chromosomes never face it, because they have no ends. Eukaryotes solve it in two parts. ' +
        'First, the ends carry telomeres — long tandem repeats, TTAGGG in humans — which encode no ' +
        'protein, so what is lost each division is sacrificial buffer rather than a gene. Second, ' +
        'cells that must divide indefinitely express telomerase, which per node L-26-3-1 is a ' +
        'reverse transcriptase carrying its own internal RNA template; it reads that RNA to extend ' +
        'the chromosome end in DNA, and so writes back what replication could not copy. Most human ' +
        'somatic cells switch telomerase off, so their telomeres shorten with every division and ' +
        'the cell eventually stops dividing — telomere length acts as a mitotic clock. Germline and ' +
        'stem cells keep it on. So does the great majority of cancers, which is why reactivating ' +
        'telomerase is one of the recognised steps in becoming immortal.',
    cn: 'DNA 聚合酶有两条硬性要求：只能沿 5\' 到 3\' 方向延伸，而且不能从零起头——它需要一段带自由 ' +
        '3\'-OH 的引物。在后随链上，每个冈崎片段都由一段 RNA 引物起头，' +
        '这段引物随后被切除、再由左邻的片段填补上。' +
        '但后随链 5\' 末端上那最后一段引物，左边没有邻居了，' +
        '所以它被切除之后没有任何东西能填上那个缺口，子链于是比模板短一截。' +
        '这就是末端复制问题，而它是聚合酶化学性质的必然结果，不是什么缺陷：' +
        '每一条线性染色体，每分裂一次都会从末端丢掉一段序列。' +
        '细菌的环状染色体从来不面对这个问题，因为它根本没有末端。真核细胞分两步来解决。' +
        '第一，末端带有端粒——一长串串联重复，人类是 TTAGGG——它不编码任何蛋白，' +
        '所以每次分裂丢掉的是牺牲性的缓冲，而不是一个基因。' +
        '第二，那些必须无限分裂下去的细胞会表达端粒酶：按节点 L-26-3-1，' +
        '端粒酶是一种自带内部 RNA 模板的逆转录酶；它读这段 RNA，' +
        '以 DNA 的形式延长染色体末端，于是把复制抄不到的部分补写回去。' +
        '大多数人类体细胞把端粒酶关掉，所以端粒随每次分裂变短，细胞最终停止分裂——' +
        '端粒长度充当一个有丝分裂的计时器。生殖细胞和干细胞让它开着。' +
        '绝大多数癌症也让它开着，这正是重新激活端粒酶被列为「获得永生」公认步骤之一的原因。'
  },

  mustKnow: '**问题出在后随链的最后一段引物：它左边没有邻居，切掉之后没有东西能填。**' +
            '所以每一条线性染色体每分裂一次就从末端丢一段序列——这是聚合酶「只能 5\'→3\' 延伸、' +
            '且必须有引物」这两条硬约束的直接后果，**不是损伤，也没有酶出错**。' +
            '真核细胞用**端粒**（人类 TTAGGG 重复，不编码蛋白）把损失变成**牺牲性缓冲**，' +
            '再用**端粒酶**（见 L-26-3-1：自带 RNA 模板的逆转录酶）把它写回去。' +
            'The last primer on the lagging strand has no neighbour to its left, so removing it ' +
            'leaves a gap nothing can fill. Telomeres make the loss sacrificial; telomerase writes ' +
            'it back.',

  skipIt: 'Do not memorise the shelterin subunit names, the exact human telomere length in kilobases, ' +
          'the number of divisions in the Hayflick limit, or the names of telomerase inhibitors in ' +
          'trials. Do not memorise the TERT/TERC gene symbols. What is being examined is whether you ' +
          'can derive the problem from the polymerase\'s two constraints and then say what telomeres ' +
          'and telomerase each contribute — the mechanism, not the inventory. ' +
          '不用背 shelterin 各亚基的名字、人端粒到底多少 kb、Hayflick 极限具体是多少次分裂，' +
          '也不用背在研端粒酶抑制剂的名称，更不用背 TERT/TERC 这两个基因符号。' +
          '真正要考的是：你能不能从聚合酶那两条约束把问题推导出来，' +
          '再说清端粒和端粒酶各自贡献了什么——是机制，不是清单。',

  explain: [
    {
      q: 'Both new strands are made by the same polymerase with the same rules. Why does only ONE ' +
         'end of each daughter molecule come up short? ' +
         '（两条新链是同一个聚合酶按同样规则做出来的。为什么每个子代分子只有一端会短？）',
      a: '**Because the two strands run in opposite directions, so "the end of the chromosome" is a ' +
         'different kind of place for each of them.**\n\n' +
         'Take one end of a linear chromosome and look at what each new strand has to do there. ' +
         'The **leading strand** is synthesised continuously toward that end. Its polymerase starts ' +
         'once, far away, and runs outward until it falls off the last base of the template. There ' +
         'is no gap: the leading strand is copied right to the tip.\n\n' +
         'The **lagging strand** at that same end is built in the opposite direction, in Okazaki ' +
         'fragments, each one started by an RNA primer laid down ahead of it. Every primer is later ' +
         'removed and its gap is filled by the polymerase extending the fragment that lies to its ' +
         '3\' side — that is, by the neighbour. **The primer closest to the chromosome end has no ' +
         'such neighbour.** There is no template-adjacent fragment beyond it to extend into the gap, ' +
         'and the polymerase cannot start there itself because starting is exactly what it cannot ' +
         'do without a primer. So when that terminal RNA primer is removed, the gap stays open and ' +
         'the daughter strand ends short.\n\n' +
         'The consequence is worth stating precisely, because it is a common muddle: **a single ' +
         'round of replication does not shorten the parent molecule, and it does not shorten both ' +
         'ends of one daughter.** Each daughter duplex has one blunt-ish end made by leading-strand ' +
         'synthesis and one end with a 3\' single-stranded overhang, where the lagging strand fell ' +
         'short. It is the repetition over many divisions, with the shortened strand serving as ' +
         'template next time, that erodes the end. ' +
         '（因为两条链方向相反，所以「染色体的末端」对它们各自来说是完全不同性质的位置。' +
         '取线性染色体的一端，看每条新链在那里各要做什么。前导链朝着这一端连续合成：' +
         '它的聚合酶在很远处起头一次，然后一路向外跑，直到从模板最后一个碱基上掉下来。' +
         '这里没有缺口——前导链一直被抄到尖端。' +
         '而同一端上的后随链是朝相反方向、以冈崎片段的方式建起来的，' +
         '每个片段都由一段事先铺下的 RNA 引物起头。' +
         '每段引物随后被切除，它留下的缺口由聚合酶延伸位于其 3\' 侧的那个片段来填补——也就是靠邻居。' +
         '而最靠近染色体末端的那段引物没有这样的邻居。' +
         '它之外没有可供延伸进这个缺口的片段，聚合酶自己也无法在那里起头，' +
         '因为「起头」恰恰就是它没有引物时做不到的事。' +
         '所以当那段末端 RNA 引物被切掉时，缺口就一直开着，子链末端因此短了一截。' +
         '这个后果值得说准确，因为这里常被搞混：单独一轮复制并不会让亲代分子变短，' +
         '也不会让同一个子代的两端都变短。' +
         '每个子代双链体有一端是前导链合成出来的、比较平齐的末端，' +
         '另一端则带一个 3\' 单链突出，那正是后随链没够到的地方。' +
         '真正侵蚀末端的，是这件事在许多次分裂中反复发生、' +
         '而变短了的那条链下一轮又充当模板。）'
    },
    {
      q: 'Telomerase has to add DNA to a chromosome end where there is no template beyond the end. ' +
         'How can a polymerase copy something that is not there? ' +
         '（端粒酶要在染色体末端加 DNA，可末端之外根本没有模板。一个聚合酶怎么可能抄一个不存在的东西？）',
      a: '**It brings its own template.** That single fact resolves the paradox, and per node ' +
         '`L-26-3-1` it is also what makes telomerase a reverse transcriptase rather than an ' +
         'ordinary DNA polymerase.\n\n' +
         'Every polymerase discussed so far reads a template strand supplied by the DNA it is ' +
         'copying. Beyond the end of a chromosome there is no such strand, so no ordinary ' +
         'polymerase can work there — the problem is not that the enzyme is weak but that the ' +
         'instruction is missing. Telomerase carries a short piece of **RNA inside the enzyme ' +
         'itself**, and that RNA is the instruction. The enzyme base-pairs the RNA against the ' +
         'existing 3\' overhang at the chromosome end, then extends that overhang in DNA using its ' +
         'own RNA as the template, translocates along, and repeats. **The repeating telomere ' +
         'sequence is repeating because it is a short RNA read over and over.**\n\n' +
         'So the direction of information flow is RNA to DNA, which is the definition of reverse ' +
         'transcription. `L-26-3-1` makes the point that this is not a viral curiosity: your own ' +
         'cells run a reverse transcriptase every time a chromosome end is rebuilt, and telomerase ' +
         'is the example.\n\n' +
         'Two things follow that are worth having ready. First, telomerase extends only the strand ' +
         'with the 3\' overhang; the complementary strand is then filled in by ordinary lagging-' +
         'strand machinery, so **telomerase does not act alone**. Second, it does not repair a ' +
         'break and it is not a damage-response enzyme — it rebuilds a structure that the cell ' +
         'deliberately maintains. That distinction matters because a chromosome end and a ' +
         'double-strand break look chemically similar, and the cell must not confuse them: an end ' +
         'treated as a break would be fused to another chromosome. The telomere is also what stops ' +
         'that happening. ' +
         '（它自带模板。这一个事实就解开了这个悖论，而且按节点 L-26-3-1，' +
         '这也正是端粒酶之所以是一种逆转录酶、而不是普通 DNA 聚合酶的原因。' +
         '前面讲过的每一种聚合酶，读的都是它所复制的那段 DNA 提供的模板链。' +
         '而染色体末端之外没有这样的链，所以任何普通聚合酶在那里都无法工作——' +
         '问题不在于酶不够强，而在于指令根本不存在。' +
         '端粒酶在酶自身内部带着一小段 RNA，这段 RNA 就是那份指令。' +
         '酶让这段 RNA 与染色体末端已有的 3\' 突出配对，' +
         '再以自己这段 RNA 为模板、用 DNA 延长那个突出，然后沿着移位，再重复一次。' +
         '端粒序列之所以是重复的，正因为它是一小段 RNA 被一遍又一遍地读。' +
         '所以信息流动的方向是从 RNA 到 DNA，而这正是逆转录的定义。' +
         'L-26-3-1 特别指出这不是病毒专有的怪现象：' +
         '你自己的细胞每修一次染色体末端就要跑一次逆转录酶，端粒酶就是那个例子。' +
         '接下来有两件事值得随时备着。第一，端粒酶只延长带 3\' 突出的那条链；' +
         '互补链随后由普通的后随链机器补齐，所以端粒酶并不是单干的。' +
         '第二，它不修复断裂，也不是损伤应答酶——它重建的是细胞刻意维持的一个结构。' +
         '这个区分很重要，因为染色体末端和双链断裂在化学上看起来很像，而细胞绝不能把两者搞混：' +
         '一个被当成断裂来处理的末端，会被接到另一条染色体上去。而阻止这件事发生的，也正是端粒。）',
      trace: {
        what: '**端粒酶自带一段 RNA 模板**，读它、以 DNA 形式延长染色体 3\' 末端。',
        from: '**这段模板在酶内部，不来自被复制的 DNA**——所以它能在「模板已经没有了」的地方工作。',
        to: '**信息方向是 RNA → DNA，即逆转录**，因此端粒酶按定义是一种逆转录酶。' +
            '重复序列之所以重复，是因为同一小段 RNA 被反复读取。',
        family: '同属「自带模板/自带指令」这一族的还有：II 型内含子的 retrohoming（见 L-26-3-1）、' +
                'CRISPR 的 guide RNA（把指令与酶分开携带）。' +
                '对照组是普通 DNA 聚合酶——指令必须由被复制的分子提供。',
        numbers: '这里唯一值得记的「数字」是**重复单元本身**：人端粒是 **TTAGGG**。' +
                 '端粒总长度、Hayflick 极限的具体次数都不必记——见 skipIt。'
      },
      takeaway: '端粒酶不是更强的聚合酶，而是自带了指令的聚合酶——这就是它能在模板尽头之外工作的全部原因。'
    },
    {
      q: 'If telomerase solves the problem completely, why do most of your cells switch it off and ' +
         'let their telomeres run down? ' +
         '（如果端粒酶能彻底解决这个问题，为什么你大多数细胞反而把它关掉、任由端粒变短？）',
      a: '**Because an unlimited division counter is exactly what a tumour needs, and switching ' +
         'telomerase off makes it a limited one.**\n\n' +
         'Read telomere length as a record of how many times a lineage has divided. Without ' +
         'telomerase, every division shortens the ends a little; when they get short enough the ' +
         'cell stops dividing permanently. That is a **mitotic clock**, and a cell that has ' +
         'divided far more often than it should — which is what an incipient tumour is — runs out ' +
         'of telomere and arrests. The shortening that looks like wear is doing useful work: it is ' +
         'a brake on runaway proliferation, and it costs the organism little because most somatic ' +
         'cells do not need to divide indefinitely.\n\n' +
         'The cells that DO need to divide indefinitely keep telomerase on, and the list is ' +
         'informative: the germline, because those lineages must be handed to the next generation ' +
         'with full-length telomeres or the loss would accumulate across generations; and stem ' +
         'cells, which are the renewing compartments — bone marrow, gut epithelium, skin.\n\n' +
         '**The consequence for cancer follows directly, and it cuts both ways.** A cell that is ' +
         'going to become a tumour has to get past the clock, and the great majority of human ' +
         'cancers do it the same way: they reactivate telomerase. That makes telomerase an ' +
         'attractive drug target, since it is switched on in most tumours and off in most normal ' +
         'tissue — an unusually clean therapeutic window. But the same reasoning shows why it is ' +
         'harder than it sounds: the normal cells that DO express it, stem cells, are exactly the ' +
         'ones you cannot afford to poison, and a tumour with already-long telomeres would keep ' +
         'dividing for many cycles after the enzyme was inhibited, so the effect is delayed rather ' +
         'than immediate. **The mechanism explains both the appeal and the difficulty**, which is ' +
         'the kind of two-sided answer an examiner is listening for. ' +
         '（因为「无限的分裂计数器」恰恰是肿瘤所需要的，而关掉端粒酶就把它变成有限的了。' +
         '把端粒长度读作「这个细胞谱系已经分裂过多少次」的记录。' +
         '没有端粒酶，每分裂一次末端就短一点；短到一定程度，细胞就永久停止分裂。' +
         '这就是一个有丝分裂计时器，而一个分裂次数远超它应有次数的细胞——' +
         '也就是一个初期肿瘤——会把端粒用完然后停下。' +
         '那个看起来像磨损的变短过程其实在做有用的事：它是失控增殖的刹车，' +
         '而且对整个机体代价很小，因为大多数体细胞本来就不需要无限分裂。' +
         '那些确实需要无限分裂的细胞会让端粒酶开着，而这份名单本身很有信息量：' +
         '生殖细胞系，因为这些谱系必须以全长端粒交给下一代，否则损失会跨世代累积；' +
         '以及干细胞，也就是那些不断更新的区室——骨髓、肠上皮、皮肤。' +
         '由此直接推出对癌症的后果，而且是双向的。' +
         '一个将要变成肿瘤的细胞必须绕过这个计时器，' +
         '而绝大多数人类癌症用的是同一个办法：重新激活端粒酶。' +
         '这让端粒酶成为一个有吸引力的药物靶点，' +
         '因为它在多数肿瘤中开着、在多数正常组织中关着——一个异常干净的治疗窗口。' +
         '但同一套推理也说明了为什么它比听上去难：' +
         '那些确实表达它的正常细胞，也就是干细胞，恰恰是你毒不起的；' +
         '而一个端粒本来就很长的肿瘤，在酶被抑制之后仍能继续分裂许多个周期，' +
         '所以效果是延迟的、不是立竿见影的。' +
         '这个机制同时解释了它的吸引力和它的困难，' +
         '而这种两面兼顾的回答正是口试考官在等的东西。）',
      takeaway: '端粒缩短不是磨损，是刹车；癌症要做的第一件事之一就是松开它。'
    }
  ],

  points: [
    { term: 'The polymerase has two constraints, and both are needed', en: 'DNA polymerase extends only 5\' to 3\', and cannot begin a strand without a primer supplying a free 3\'-OH. The end-replication problem is a consequence of these two facts together; neither alone produces it.', cn: '聚合酶有两条约束，缺一不可：DNA 聚合酶只能 5\' 到 3\' 延伸，而且没有提供自由 3\'-OH 的引物就无法起头一条新链。末端复制问题是这两件事共同作用的结果，单独任何一条都推不出来。' },
    { term: 'The last lagging-strand primer has no neighbour', en: 'Internal RNA primers are removed and their gaps filled by the polymerase extending the adjacent Okazaki fragment. The primer at the extreme 5\' end of the lagging strand has no fragment beyond it, so its gap cannot be filled and the daughter strand ends short.', cn: '后随链最后一段引物没有邻居：内部的 RNA 引物被切除后，其缺口由聚合酶延伸相邻的冈崎片段来填补。而位于后随链最 5\' 端的那段引物，之外没有片段，所以它的缺口无法被填补，子链末端因此短了一截。' },
    { term: 'Only the lagging-strand end is affected', en: 'Leading-strand synthesis runs continuously to the last base of the template, so that end is copied fully. Each daughter duplex therefore has one full end and one with a 3\' single-stranded overhang.', cn: '只有后随链那一端受影响：前导链连续合成直到模板最后一个碱基，所以那一端被完整抄下。因此每个子代双链体有一端是完整的，另一端带一个 3\' 单链突出。' },
    { term: 'Circular chromosomes never face it', en: 'Bacteria have no chromosome ends, so every primer has a neighbour and no sequence is lost. The problem is created by linearity, not by the polymerase being poor.', cn: '环状染色体从不面对这个问题：细菌没有染色体末端，所以每段引物都有邻居，不会丢失任何序列。这个问题是由「线性」造成的，不是因为聚合酶不好。' },
    { term: 'Telomeres make the loss sacrificial', en: 'Chromosome ends carry long tandem repeats — TTAGGG in humans — that encode no protein. What erodes each division is buffer, so no gene is lost, which is why the problem is survivable at all.', cn: '端粒把损失变成牺牲性的：染色体末端带有长串联重复（人类是 TTAGGG），不编码任何蛋白。每次分裂被侵蚀掉的是缓冲序列，所以没有基因丢失——这正是这个问题之所以能被熬过去的原因。' },
    { term: 'Telomeres also stop ends being read as breaks', en: 'A chromosome end and a double-strand break are chemically similar, and an end mistaken for a break would be fused to another chromosome. The telomere marks the end as an end.', cn: '端粒还阻止末端被当成断裂：染色体末端与双链断裂在化学上相似，而一个被误认为断裂的末端会被接到另一条染色体上。端粒把末端标记为末端。' },
    { term: 'Telomerase carries its own template', en: 'Per node L-26-3-1 it is a reverse transcriptase holding a short RNA inside the enzyme. It pairs that RNA to the 3\' overhang, extends in DNA, translocates and repeats — which is why the telomere sequence is a repeat.', cn: '端粒酶自带模板：按节点 L-26-3-1，它是一种在酶内部握着一小段 RNA 的逆转录酶。它让这段 RNA 与 3\' 突出配对，以 DNA 延伸，移位，再重复——这正是端粒序列之所以是重复序列的原因。' },
    { term: 'Information flows RNA to DNA, which is the definition', en: 'Telomerase is not merely similar to a reverse transcriptase; it is one. L-26-3-1 uses it to make the point that reverse transcription is not virus-only — your own cells run it at every chromosome end.', cn: '信息从 RNA 流向 DNA，而这正是定义：端粒酶不只是「像」逆转录酶，它本身就是。L-26-3-1 正是用它来说明逆转录不是病毒专有的——你自己的细胞在每一个染色体末端都在跑它。' },
    { term: 'Telomerase does not act alone', en: 'It extends only the strand bearing the 3\' overhang; the complementary strand is then filled in by ordinary lagging-strand machinery.', cn: '端粒酶不是单干的：它只延长带 3\' 突出的那条链，互补链随后由普通的后随链机器补齐。' },
    { term: 'Telomere length is a mitotic clock', en: 'Without telomerase every division shortens the ends, and when they are short enough the cell stops dividing permanently. The shortening is a brake on runaway proliferation, not merely wear.', cn: '端粒长度是一个有丝分裂计时器：没有端粒酶，每次分裂都让末端变短，短到一定程度细胞就永久停止分裂。这个变短是对失控增殖的刹车，而不仅仅是磨损。' },
    { term: 'Germline and stem cells keep it on', en: 'The germline must hand full-length telomeres to the next generation or loss would accumulate across generations; stem cells are the renewing compartments — marrow, gut epithelium, skin.', cn: '生殖细胞和干细胞让它开着：生殖细胞系必须把全长端粒交给下一代，否则损失会跨世代累积；干细胞则是不断更新的区室——骨髓、肠上皮、皮肤。' },
    { term: 'Most cancers reactivate telomerase', en: 'Getting past the mitotic clock is a step in becoming a tumour, and the great majority of human cancers take the same route. That is why it is a drug target — on in most tumours, off in most normal tissue.', cn: '多数癌症重新激活端粒酶：绕过有丝分裂计时器是成为肿瘤的一个步骤，而绝大多数人类癌症走的是同一条路。这正是它成为药物靶点的原因——在多数肿瘤中开着，在多数正常组织中关着。' },
    { term: 'The same mechanism explains why the drug is hard', en: 'The normal cells that do express telomerase are stem cells, which cannot be poisoned; and a tumour with long telomeres keeps dividing for many cycles after inhibition, so any effect is delayed.', cn: '同一个机制也解释了这个药为什么难做：确实表达端粒酶的正常细胞是干细胞，而干细胞是毒不起的；而端粒本来就长的肿瘤在抑制之后仍会继续分裂许多周期，所以任何效果都是延迟的。' }
  ],

  terms: [
    { en: 'End-replication problem', cn: '末端复制问题', def_en: 'The loss of sequence from the 5\' end of each newly made lagging strand, because the terminal RNA primer has no neighbouring fragment to fill its gap.', def_cn: '每条新合成的后随链 5\' 端会丢失序列，因为末端那段 RNA 引物没有相邻片段可以来填补它的缺口。' },
    { en: 'Okazaki fragment', cn: '冈崎片段', def_en: 'One of the short pieces in which the lagging strand is synthesised, each started by its own RNA primer.', def_cn: '后随链分段合成时的那些短片段之一，每一段都由自己的 RNA 引物起头。' },
    { en: 'Primer', cn: '引物', def_en: 'A short RNA supplying the free 3\'-OH that DNA polymerase needs to begin; it is removed afterwards and the gap normally filled by the neighbouring fragment.', def_cn: '提供 DNA 聚合酶起头所需自由 3\'-OH 的一小段 RNA；随后被切除，缺口通常由相邻片段填补。' },
    { en: 'Telomere', cn: '端粒', def_en: 'Tandem repeats at a linear chromosome end, TTAGGG in humans, encoding no protein — sacrificial buffer that also marks the end as an end rather than a break.', def_cn: '线性染色体末端的串联重复序列，人类为 TTAGGG，不编码蛋白——既是牺牲性缓冲，也把末端标记为末端而不是断裂。' },
    { en: 'Telomerase', cn: '端粒酶', def_en: 'The reverse transcriptase that extends the 3\' overhang using a template RNA held inside the enzyme. Taught in node L-26-3-1.', def_cn: '用握在酶内部的模板 RNA 延长 3\' 突出的逆转录酶。见节点 L-26-3-1。' },
    { en: 'Reverse transcriptase', cn: '逆转录酶', def_en: 'Any polymerase copying RNA into DNA. L-26-3-1 stresses that it is not virus-only: telomerase is one, running at your own chromosome ends.', def_cn: '任何把 RNA 抄成 DNA 的聚合酶。L-26-3-1 强调它不是病毒专有的：端粒酶就是一种，在你自己的染色体末端运转。' },
    { en: '3-prime overhang', cn: '3\' 突出', def_en: 'The single-stranded tail left at a chromosome end where the lagging strand fell short; the substrate telomerase pairs its RNA against.', def_cn: '后随链没够到而在染色体末端留下的单链尾巴；端粒酶正是把自己的 RNA 与这个底物配对。' },
    { en: 'Mitotic clock', cn: '有丝分裂计时器', def_en: 'Telomere length read as a record of how many divisions a lineage has undergone, limiting further division once short.', def_cn: '把端粒长度读作某个细胞谱系已经历多少次分裂的记录，一旦变短就限制其继续分裂。' },
    { en: 'Replicative senescence', cn: '复制性衰老', def_en: 'The permanent arrest of division a cell enters when its telomeres become critically short.', def_cn: '当端粒短到临界程度时，细胞进入的永久性分裂停滞。' },
    { en: 'Germline', cn: '生殖细胞系', def_en: 'The lineage handed to the next generation; it keeps telomerase on so telomere loss does not accumulate across generations.', def_cn: '传递给下一代的细胞谱系；它让端粒酶保持开启，使端粒的损失不会跨世代累积。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'Why does removing the final RNA primer on the lagging strand leave a gap that cannot be filled?',
      q_cn: '为什么切除后随链上最后一段 RNA 引物，会留下一个无法填补的缺口？',
      options: [
        'There is no adjacent fragment for the polymerase to extend',
        'The primer at a chromosome end is made of DNA and resists the removal enzyme',
        'Ligase cannot seal a nick that lies within a tandem repeat sequence',
        'The polymerase loses processivity within the last few hundred bases'
      ],
      answer: 0,
      optionNotes: {
        2: { en: 'Ligase seals nicks in repeats perfectly well, and the problem exists before any sealing step. The gap is not a nick — there is no DNA there at all to join.', cn: 'Ligase 完全能封重复序列里的切口，而且问题在任何封口步骤之前就已经存在。这个缺口不是切口——那里根本没有 DNA 可供连接。' },
        3: { en: 'Processivity is about how long a polymerase stays on before falling off, which affects speed, not whether it can start. Here the block is that starting requires a 3-prime OH that nothing can supply.', cn: '持续合成能力讲的是聚合酶脱落前能停留多久，影响的是速度，而不是它能不能起头。这里的阻碍是「起头需要一个 3\' -OH」，而没有任何东西能提供它。' }
      },
      why_en: 'Internal primers are removed and their gaps filled by the polymerase extending the neighbouring Okazaki fragment. The terminal primer has no fragment beyond it, and the polymerase cannot start unprimed, so the gap stays open.',
      why_cn: '内部引物被切除后，缺口由聚合酶延伸相邻的冈崎片段来填补。末端那段引物之外没有片段，而聚合酶又无法在没有引物的情况下起头，所以缺口就一直开着。' },

    { type: 'mcq',
      q_en: 'What allows telomerase to synthesise DNA beyond the end of the existing template?',
      q_cn: '是什么让端粒酶能够在现有模板末端之外合成 DNA？',
      options: [
        'It carries a template RNA inside the enzyme',
        'It copies the complementary strand backwards from the opposite chromosome end',
        'It ligates pre-made telomere repeats supplied from a nuclear pool',
        'It works without any template, adding nucleotides in a fixed order'
      ],
      answer: 0,
      optionNotes: {
        3: { en: 'Template-independent addition in a fixed order describes terminal transferase, a different enzyme. Telomerase is templated — that is precisely why it counts as a reverse transcriptase.', cn: '不依赖模板、按固定顺序加核苷酸描述的是末端转移酶，那是另一种酶。端粒酶是有模板的——这正是它被算作逆转录酶的原因。' }
      },
      why_en: 'Per node L-26-3-1, telomerase holds a short RNA inside itself and pairs it against the 3-prime overhang, then extends in DNA using that RNA as template. Information flows RNA to DNA, which is the definition of reverse transcription, and the repeat is a repeat because one short RNA is read over and over.',
      why_cn: '按节点 L-26-3-1，端粒酶在自身内部握着一小段 RNA，让它与 3\' 突出配对，再以这段 RNA 为模板用 DNA 延伸。信息从 RNA 流向 DNA，这正是逆转录的定义；而重复序列之所以重复，是因为同一小段 RNA 被反复读取。' },

    { type: 'mcq',
      q_en: 'Bacteria with circular chromosomes never lose sequence from replication. What does that show?',
      q_cn: '拥有环状染色体的细菌在复制中从不丢失序列。这说明了什么？',
      options: [
        'The problem comes from linearity, not from the polymerase',
        'Bacterial polymerases carry a proofreading activity eukaryotic ones lack',
        'Bacterial replication uses no RNA primers at any stage of the process',
        'Circular DNA is replicated by a mechanism that needs no primer at all'
      ],
      answer: 0,
      optionNotes: {
        2: { en: 'Bacterial replication does use RNA primers, on the lagging strand as everywhere else. What differs is that on a circle every primer has a neighbour, so every gap gets filled.', cn: '细菌复制确实使用 RNA 引物，后随链上和别处一样。不同之处在于：在一个环上，每段引物都有邻居，所以每个缺口都能被填上。' }
      },
      why_en: 'A circle has no ends, so every primer has a neighbouring fragment to fill its gap. The same polymerase with the same two constraints loses nothing. That isolates linearity as the cause, which is why telomeres are a eukaryotic problem and a eukaryotic solution.',
      why_cn: '环没有末端，所以每段引物都有相邻片段来填补它的缺口。同一个聚合酶、同样两条约束，却什么都不丢。这就把「线性」单独锁定为原因，也正因此端粒既是真核细胞的问题，也是真核细胞的解决方案。' },

    { type: 'short',
      q_en: 'Explain the end-replication problem and how eukaryotic cells deal with it.',
      q_cn: '解释末端复制问题，以及真核细胞如何应对它。',
      accept: ['primer', '引物', 'lagging', '后随', 'telomere', '端粒', 'telomerase', '端粒酶', 'RNA', 'repeat', '重复'],
      answer_en: 'DNA polymerase can only extend a strand 5-prime to 3-prime and cannot start one without a primer providing a free 3-prime OH. On the lagging strand, synthesis is discontinuous: each Okazaki fragment begins with an RNA primer that is later removed, and the gap is filled by the polymerase extending the neighbouring fragment. The primer at the extreme 5-prime end has no neighbour beyond it, so when it is removed nothing can fill that gap and the daughter strand ends shorter than its template, leaving a 3-prime single-stranded overhang. Leading-strand synthesis runs to the last base, so only one end of each daughter duplex is affected. Circular bacterial chromosomes never face this, which shows the cause is linearity rather than a defective polymerase. Eukaryotes deal with it in two parts. First, chromosome ends carry telomeres — tandem repeats, TTAGGG in humans — which encode no protein, so what erodes is sacrificial buffer rather than a gene; telomeres also mark an end as an end so it is not repaired as a double-strand break. Second, cells that must divide indefinitely express telomerase, a reverse transcriptase that carries a short RNA template inside the enzyme, pairs it to the overhang and extends the end in DNA, writing back what replication could not copy. Most somatic cells switch telomerase off, so telomere length works as a mitotic clock limiting division; germline and stem cells keep it on, and most cancers reactivate it.',
      answer_cn: 'DNA 聚合酶只能沿 5\' 到 3\' 延伸，而且没有提供自由 3\'-OH 的引物就无法起头。在后随链上合成是不连续的：每个冈崎片段以一段 RNA 引物起头，该引物随后被切除，缺口由聚合酶延伸相邻片段来填补。而位于最 5\' 端的那段引物之外没有邻居，所以它被切除后没有任何东西能填上那个缺口，子链于是比模板短，留下一个 3\' 单链突出。前导链一直合成到最后一个碱基，所以每个子代双链体只有一端受影响。细菌的环状染色体从不面对这个问题，这说明原因是「线性」而不是聚合酶有缺陷。真核细胞分两步应对。第一，染色体末端带有端粒——串联重复，人类是 TTAGGG——不编码任何蛋白，所以被侵蚀的是牺牲性缓冲而不是基因；端粒还把末端标记为末端，使它不会被当作双链断裂去修复。第二，必须无限分裂的细胞表达端粒酶：一种在酶内部携带一小段 RNA 模板的逆转录酶，让它与 3\' 突出配对，再以 DNA 延长末端，把复制抄不到的部分写回去。大多数体细胞把端粒酶关掉，于是端粒长度成为限制分裂的有丝分裂计时器；生殖细胞和干细胞让它开着，而多数癌症会重新激活它。' }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'Which end of a newly replicated linear chromosome carries a single-stranded overhang, and why?',
      q_cn: '新复制出的线性染色体哪一端带有单链突出？为什么？',
      options: [
        'The lagging-strand end, where the terminal primer gap stayed open',
        'The leading-strand end, because synthesis there stops short of the tip',
        'Both ends equally, since both strands are primed the same way',
        'Neither end, because the overhang is created later by a nuclease'
      ],
      answer: 0,
      why_en: 'Leading-strand synthesis is continuous to the last base of the template, so that end is copied fully. The lagging strand at the same end loses its terminal primer with no neighbouring fragment to fill the gap, so the parental strand there is left unpaired as a 3-prime overhang.',
      why_cn: '前导链连续合成直到模板最后一个碱基，所以那一端被完整抄下。同一端上的后随链失去末端引物后没有相邻片段来填补缺口，于是那里的亲代链留下未配对的 3\' 突出。' },

    { type: 'mcq',
      q_en: 'A cell line in culture divides indefinitely without its telomeres shortening. What is the most likely explanation?',
      q_cn: '培养中的某细胞系可以无限分裂而端粒不缩短。最可能的解释是什么？',
      options: [
        'It expresses telomerase',
        'Its chromosomes have been circularised to remove the ends',
        'It replicates its DNA without using RNA primers on the lagging strand',
        'Its polymerase has acquired the ability to initiate without a primer'
      ],
      answer: 0,
      why_en: 'Indefinite division with maintained telomere length is the signature of telomerase expression, which is how germline and stem cells manage it and how the great majority of cancers and immortalised lines get past the mitotic clock. The other options would each require abolishing a general constraint of DNA replication.',
      why_cn: '能无限分裂且端粒长度得以维持，正是端粒酶表达的标志：生殖细胞和干细胞靠它，绝大多数癌症和永生化细胞系也靠它绕过有丝分裂计时器。其余选项都需要取消 DNA 复制的某条普遍约束。' },

    { type: 'mcq',
      q_en: 'Why is inhibiting telomerase a less immediately effective cancer strategy than the clean on/off expression pattern suggests?',
      q_cn: '为什么抑制端粒酶作为抗癌策略，效果不像「开/关」这种干净的表达模式所暗示的那样立竿见影？',
      options: [
        'A tumour with long telomeres keeps dividing for many cycles after inhibition',
        'Telomerase inhibitors cannot be delivered across the nuclear membrane',
        'Tumours switch to a circular chromosome architecture once inhibited',
        'The enzyme is expressed at identical levels in all normal tissues'
      ],
      answer: 0,
      why_en: 'Blocking telomerase does not shorten telomeres; it only stops them being rebuilt, so a tumour must divide through whatever telomere reserve it already has before arresting. The effect is delayed by that reserve. The other genuine difficulty is that the normal cells expressing telomerase are stem cells, which cannot be poisoned.',
      why_cn: '抑制端粒酶并不会让端粒变短，只是让它不再被补回去，所以肿瘤必须先把已有的端粒储备分裂消耗完才会停下。效果被这份储备延迟了。另一个真实困难是：表达端粒酶的正常细胞正是干细胞，而干细胞毒不起。' },

    { type: 'mcq',
      q_en: 'Why must a chromosome end be distinguishable from a double-strand break?',
      q_cn: '为什么染色体末端必须能与双链断裂区分开？',
      options: [
        'An end repaired as a break would be fused to another chromosome',
        'Break repair enzymes would otherwise add telomere repeats to the break',
        'The polymerase would begin replicating the chromosome a second time',
        'Ligase would circularise the chromosome and stop it segregating'
      ],
      answer: 0,
      why_en: 'The two are chemically similar, and the cell\'s response to a double-strand break is to join it to another DNA end. Applied to a natural chromosome end that produces end-to-end fusion, which is catastrophic at the next division. The telomere, with its bound proteins, marks the end as an end so repair leaves it alone.',
      why_cn: '两者在化学上相似，而细胞对双链断裂的反应是把它连到另一个 DNA 末端上。若把这套反应用在天然的染色体末端，就会产生端对端融合，在下一次分裂时是灾难性的。端粒连同其结合蛋白把末端标记为末端，使修复机制不去动它。' }
  ],

  oral: {
    q_en: 'What is the end-replication problem, and how do cells solve it?',
    q_cn: '什么是末端复制问题？细胞如何解决它？',
    model_en: 'The problem follows from two properties of DNA polymerase, and it is worth starting ' +
              'there rather than with telomeres, because the whole thing is a consequence of them. ' +
              'The polymerase can only extend a strand in the 5-prime to 3-prime direction, and it ' +
              'cannot begin a strand from nothing — it needs a primer supplying a free 3-prime ' +
              'hydroxyl. On the leading strand that costs nothing: synthesis starts once and runs ' +
              'continuously to the last base of the template, so that end is copied in full. The ' +
              'lagging strand is different. It is built discontinuously, in Okazaki fragments, each ' +
              'begun by an RNA primer. Those primers are removed afterwards, and each gap is filled ' +
              'by the polymerase extending the neighbouring fragment into it. But the primer at the ' +
              'extreme end of the chromosome has no neighbour beyond it, and the polymerase cannot ' +
              'start there unprimed, so when that last primer is removed the gap simply stays open. ' +
              'The daughter strand is shorter than its template and the parental strand is left as ' +
              'a 3-prime single-stranded overhang. Repeated over many divisions, the ends erode. ' +
              'The clean control is bacteria: a circular chromosome has no ends, every primer has a ' +
              'neighbour, and nothing is lost — so this is a problem created by linearity, not by a ' +
              'defective enzyme. Eukaryotes solve it in two parts. First, the ends carry telomeres, ' +
              'long tandem repeats — TTAGGG in humans — that encode no protein, so what is eroded ' +
              'each division is sacrificial buffer rather than a gene. Telomeres do a second job ' +
              'too: a chromosome end and a double-strand break look chemically alike, and an end ' +
              'mistaken for a break would be fused to another chromosome, so the telomere marks an ' +
              'end as an end. Second, cells that must divide indefinitely express telomerase. ' +
              'Telomerase is a reverse transcriptase, and the elegant part is that it carries its ' +
              'own template — a short RNA held inside the enzyme. It pairs that RNA against the ' +
              '3-prime overhang, extends the end in DNA, translocates and repeats, which is exactly ' +
              'why the telomere sequence is a repeat. It writes back what replication could not ' +
              'copy. It does not act alone: the complementary strand is then filled in by ordinary ' +
              'lagging-strand machinery. Finally, the regulation is the interesting part. Most ' +
              'human somatic cells switch telomerase off, so their telomeres shorten with every ' +
              'division and the cell eventually arrests — telomere length acts as a mitotic clock, ' +
              'and that is a brake on runaway proliferation rather than mere wear. Germline and ' +
              'stem cells keep it on. So does the great majority of cancers, which have to get past ' +
              'that clock, and that is why telomerase is an attractive drug target — though the ' +
              'same mechanism explains why it is difficult, since the normal cells expressing it ' +
              'are stem cells and a tumour with long telomeres would keep dividing well after the ' +
              'enzyme was blocked.',
    model_cn: '这个问题是从 DNA 聚合酶的两条性质推出来的，' +
              '值得从这两条讲起而不是从端粒讲起，因为整件事都是它们的后果。' +
              '聚合酶只能沿 5\' 到 3\' 方向延伸，而且不能从零起头一条链——' +
              '它需要一段提供自由 3\'-OH 的引物。这对前导链没有代价：' +
              '合成只起头一次，然后连续跑到模板的最后一个碱基，所以那一端被完整抄下。' +
              '后随链则不同。它是不连续地、以冈崎片段的方式建起来的，每段都由一段 RNA 引物起头。' +
              '这些引物随后被切除，每个缺口由聚合酶延伸相邻片段填进去。' +
              '但位于染色体最末端的那段引物之外没有邻居，而聚合酶又无法在没有引物时在那里起头，' +
              '所以当最后这段引物被切除时，缺口就那样一直开着。' +
              '子链比模板短，亲代链则留下一个 3\' 单链突出。这件事在许多次分裂中反复发生，末端就被侵蚀。' +
              '干净的对照是细菌：环状染色体没有末端，每段引物都有邻居，什么都不会丢——' +
              '所以这是「线性」造成的问题，不是酶有缺陷。真核细胞分两步解决。' +
              '第一，末端带有端粒，是长串联重复——人类是 TTAGGG——不编码任何蛋白，' +
              '所以每次分裂被侵蚀掉的是牺牲性缓冲，而不是一个基因。端粒还有第二个职责：' +
              '染色体末端和双链断裂在化学上看起来很像，' +
              '而一个被误认为断裂的末端会被接到另一条染色体上，所以端粒把末端标记为末端。' +
              '第二，必须无限分裂下去的细胞会表达端粒酶。' +
              '端粒酶是一种逆转录酶，而精巧之处在于它自带模板——一小段握在酶内部的 RNA。' +
              '它让这段 RNA 与 3\' 突出配对，以 DNA 延长末端，移位，再重复，' +
              '这正是端粒序列之所以是重复序列的原因。它把复制抄不到的部分写了回去。' +
              '它并非单干：互补链随后由普通的后随链机器补齐。最后，调控才是有意思的部分。' +
              '大多数人类体细胞把端粒酶关掉，于是端粒随每次分裂变短，细胞最终停滞——' +
              '端粒长度充当一个有丝分裂计时器，而这是对失控增殖的刹车，不只是磨损。' +
              '生殖细胞和干细胞让它开着。绝大多数癌症也一样，因为它们必须绕过那个计时器，' +
              '这正是端粒酶成为有吸引力药物靶点的原因——' +
              '不过同一个机制也说明了它为什么困难，因为表达它的正常细胞正是干细胞，' +
              '而端粒很长的肿瘤在酶被阻断之后仍会继续分裂很久。',
    checklist: [
      { en: 'Start from the polymerase: 5-prime to 3-prime only, and cannot start without a primer', cn: '从聚合酶讲起：只能 5\' 到 3\'，且没有引物就无法起头' },
      { en: 'Leading strand runs to the last base — that end is fine', cn: '前导链一直跑到最后一个碱基——那一端没问题' },
      { en: 'Lagging strand: terminal primer has no neighbour to fill its gap', cn: '后随链：末端引物没有邻居来填补它的缺口' },
      { en: 'Result is a shorter daughter strand and a 3-prime overhang', cn: '结果是更短的子链和一个 3\' 突出' },
      { en: 'Bacteria as the control: a circle has no ends, so linearity is the cause', cn: '细菌作为对照：环没有末端，所以原因是线性' },
      { en: 'Telomeres: non-coding tandem repeats, so the loss is sacrificial', cn: '端粒：不编码的串联重复，所以损失是牺牲性的' },
      { en: 'Telomeres also stop an end being repaired as a break', cn: '端粒还阻止末端被当作断裂来修复' },
      { en: 'Telomerase is a reverse transcriptase carrying its own RNA template (L-26-3-1)', cn: '端粒酶是自带 RNA 模板的逆转录酶（L-26-3-1）' },
      { en: 'That is why the sequence is a repeat — one short RNA read repeatedly', cn: '这正是序列为何是重复的——同一小段 RNA 被反复读取' },
      { en: 'Regulation: off in somatic cells, so length is a mitotic clock', cn: '调控：在体细胞中关闭，所以长度是有丝分裂计时器' },
      { en: 'On in germline and stem cells; reactivated in most cancers', cn: '在生殖细胞和干细胞中开启；在多数癌症中被重新激活' },
      { en: 'Drug target — and say why it is harder than it looks', cn: '药物靶点——并说明它为什么比看上去难' }
    ]
  }
}

]);
