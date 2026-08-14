/* ============================================================
   Chapter 6 — Bioenergetika
   Bioenergetics / 生物能学
   Source: Biochemie – Základní kurz, pp. 130–147
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "6-1",
  book: "cz",
  topicKey: "bioenergetics-and-thermodynamics",
  chapter: 6,
  section: "6.1",
  czTitle: "Principy bioenergetiky",
  enTitle: "Principles of bioenergetics",
  cnTitle: "生物能学原理",
  pages: [130],
  coverage: "full",
  coverageNote: "Page 130 read in full: the chapter-6 opening framing (living matter as a thermodynamically open system, dynamic equilibrium/steady state, the three listed energy needs), the book's own unlabelled energy-flow scheme (no 'Obr.' number is attached to this box diagram — the first numbered figure in the chapter is Obr. 6.1 on p.132), and the closing paragraph on Gibbs energy as the state variable plus the phototroph/chemotroph distinction. The page ends cleanly with the chemotroph sentence and the page number '130'; section 6.1.1 begins fresh at the top of p.131.",
  cnNote: { topic: "十八", title: "生物能学 (笔记 仅凭标题/页码推测 p.103起，未直接核对)", status: "partial" },
  mustKnow: { en: "An organism only looks like it is at equilibrium with its surroundings — it is actually in a steady state, kept up by constant exchange of matter and energy; true equilibrium is death, not health. And because a cell cannot tolerate big swings in temperature, pressure or ion concentration, it can only do work under roughly constant conditions — which is exactly why Gibbs energy (ΔG), not heat, is the number that describes it.", cn: "生物体看起来和环境处于平衡，其实是**稳态**——靠持续不断地交换物质与能量维持住的；真正的平衡态是死亡，不是健康。而且因为细胞受不了温度、压力或离子浓度的大幅波动，它只能在大致恒定的条件下做功——这正是为什么描述它的量是吉布斯能（ΔG），而不是热量。" },
  summary: {
    en: "Chapter 6 opens by framing living matter thermodynamically as an OPEN SYSTEM: its high degree of internal order is not an end in itself but what enables autonomous regulation and adaptation to a changing environment, and maintaining it requires constant exchange of information, matter and energy with the surroundings — in the process increasing the surroundings' own disorder. What looks like equilibrium with the environment is only apparent; the book insists on DYNAMIC equilibrium or STEADY STATE (stacionární stav), sharply different from the static equilibrium of an isolated system in classical equilibrium thermodynamics — though the basic laws of thermodynamics (ch. 1.5) still apply without exception to living matter. The chapter covers how organisms obtain, transform and use the energy they need for mechanical work (muscle contraction, other cell movement), active transport of molecules/ions plus signal processing, and biosynthesis of macromolecules from precursors. A schematic traces energy flow through the biosphere: solar electromagnetic radiation drives photosynthesis, which converts it into the energy of chemical bonds (ATP, NADPH, nutrients); that bond energy then branches into contraction/movement, transport and biosynthesis, all three of which ultimately dissipate into unused energy (heat, entropy). Because biological systems cannot tolerate large gradients of pressure, temperature or ion concentration and so can only perform work under constant temperature, pressure and other constant conditions, GIBBS ENERGY (ΔG) is the appropriate state variable for describing their energy changes. Nearly all energy used by organisms on Earth traces back to the Sun's electromagnetic radiation, converted by PHOTOTROPHS (plants, some bacteria) into the energy of nutrients' chemical bonds (ch. 9); CHEMOTROPHS instead obtain Gibbs energy by oxidative cleavage of nutrients (ch. 1.4).",
    cn: "第6章开篇即从热力学角度将生物体定位为一个开放系统：其高度的内部有序性并非目的本身，而是使生命系统得以自主调节并适应外部环境变化的前提；维持这种有序性需要不断与周围环境交换信息、物质与能量——同时使环境自身的无序度增加。生物体与环境之间看似的平衡其实只是表象；教材坚持称之为动态平衡或稳态（stacionární stav），这与经典平衡态热力学中孤立系统的静态平衡有本质区别——尽管热力学基本定律（第1.5节）对生命物质同样完全适用。本章将讲述生物体如何获取、转化并利用其所需的能量，用于：肌肉收缩等细胞运动的机械功；分子与离子的主动运输及信号（信息）处理；以及由前体物质合成大分子等物质的生物合成。教材给出了一个能量在生物圈中流动的示意图：太阳电磁辐射驱动光合作用，光合作用将其转化为化学键能（ATP、NADPH）；这些键能再分支用于收缩/运动、运输和生物合成，三者最终都耗散为未被利用的能量（热、熵）。由于生物系统的能量装置无法承受较大的压力、温度或离子浓度梯度，因而只能在恒定温度、恒定压力等恒定条件下做功，故Gibbs自由能（ΔG）是描述其能量变化的合适状态函数。地球上生物体所利用的能量几乎全部最终源自太阳的电磁辐射：光养生物（植物及部分细菌）将其转化为营养物质的化学键能（第9章）；其他生物即化能营养生物，则通过营养物质的氧化裂解获取Gibbs自由能（第1.4节）。"
  },
  points: [
    { cz: "otevřený systém", en: "A living organism is, from a thermodynamic standpoint, an OPEN SYSTEM: it covers its need for energy and matter at the expense of the surrounding environment, and in doing so INCREASES the environment's own degree of disorder. This high internal order is not decorative — it is precisely what allows living systems autonomous regulation and adaptation to changes in the external environment.", cn: "从热力学角度看，生物体是一个开放系统：它以周围环境为代价满足自身对能量和物质的需求，同时使环境自身的无序度增加。这种高度的内部有序性并非装饰性的，恰恰是它使生命系统得以自主调节并适应外部环境的变化。" },
    { cz: "rovnováha = dynamická (stacionární stav)", en: "Equilibrium with the surroundings is only APPARENT — better described as DYNAMIC equilibrium (sometimes called STEADY STATE, stacionární stav), far removed from the static equilibrium of an isolated system described by classical equilibrium thermodynamics. Even so, the basic laws of thermodynamics apply WITHOUT EXCEPTION to living matter too (cross-referenced to ch. 1.5).", cn: "生物体与环境的平衡只是表象——更准确地说是动态平衡（有时也称稳态，stacionární stav），与经典平衡态热力学所描述的孤立系统静态平衡相去甚远。即便如此，热力学基本定律对生命物质同样完全适用、无一例外（参见第1.5节）。" },
    { cz: "tři energetické potřeby organismu", en: "This chapter covers obtaining, transforming and using the energy living organisms need for three purposes: MECHANICAL WORK in muscle contraction and other cell movement; ACTIVE TRANSPORT of molecules and ions plus signal (information) processing; and BIOSYNTHESIS of macromolecules and other substances from precursors.", cn: "本章讲述生物体获取、转化并利用能量以满足三类需求：肌肉收缩及其他细胞运动所需的机械功；分子与离子的主动运输及信号（信息）处理；以及由前体物质合成大分子及其他物质的生物合成。" },
    { cz: "schéma toku energie v biosféře", en: "The book's own (unnumbered) flow scheme traces energy through the biosphere in one direction: the ELECTROMAGNETIC ENERGY OF SOLAR RADIATION drives PHOTOSYNTHESIS, which converts it into the ENERGY OF CHEMICAL BONDS (explicitly named: ATP, NADPH, and nutrients). That bond energy then branches into three parallel uses — CONTRACTION/MOVEMENT, TRANSPORT, and BIOSYNTHESIS — all three of which converge again into one final box, UNUSED ENERGY (heat, entropy).", cn: "教材给出的（未编号的）流程图描绘了能量在生物圈中单向流动的过程：太阳辐射的电磁能驱动光合作用，光合作用将其转化为化学键能（明确列出：ATP、NADPH及营养物质）。这些键能随后分支用于三种并行用途——收缩/运动、运输、生物合成——三者又都汇聚到同一个最终环节：未被利用的能量（热、熵）。" },
    { cz: "Gibbsova energie (ΔG) jako stavová veličina", en: "The energetic apparatus of living systems has one crucial peculiarity: it cannot tolerate large differences of pressure, temperature, or concentration of protons/other ions, so it can only perform work under CONSTANT temperature, pressure and other constant conditions. The suitable state variable for describing these energy changes is therefore GIBBS ENERGY (ΔG).", cn: "生命系统的能量装置有一个关键特点：它无法承受较大的压力、温度或质子/其他离子浓度差异，因而只能在恒定温度、恒定压力等恒定条件下做功。因此，描述这些能量变化的合适状态函数就是Gibbs自由能（ΔG）。" },
    { cz: "fototrofové vs chemotrofové", en: "Virtually all energy used by organisms on Earth ultimately originates from the electromagnetic radiation of the Sun. PHOTOTROPHS (plants and some bacteria) convert that solar energy directly into the energy of nutrients' chemical bonds (forward cross-reference to ch. 9, photosynthesis). Other organisms, the CHEMOTROPHS, instead obtain their Gibbs energy by OXIDATIVE CLEAVAGE of nutrients (cross-referenced back to ch. 1.4).", cn: "地球上生物体所利用的能量几乎全部最终源自太阳的电磁辐射。光养生物（植物及部分细菌）将太阳能直接转化为营养物质的化学键能（前瞻引用第9章光合作用）。其他生物，即化能营养生物，则通过营养物质的氧化裂解获取Gibbs自由能（回引第1.4节）。" }
  ],
  terms: [
    { cz: "otevřený systém", en: "open system", cn: "开放系统", def_en: "A thermodynamic system that exchanges both matter and energy with its surroundings; the organism is one, meeting its needs at the environment's expense.", def_cn: "与周围环境同时交换物质和能量的热力学系统；生物体即是一例，以环境为代价满足自身需求。" },
    { cz: "dynamická rovnováha (stacionární stav)", en: "dynamic equilibrium (steady state)", cn: "动态平衡（稳态）", def_en: "The apparent, non-static equilibrium of an open living system with its environment, maintained by continuous exchange, as opposed to the static equilibrium of an isolated system.", def_cn: "开放的生命系统与环境之间看似的、非静态的平衡，靠持续的交换维持，区别于孤立系统的静态平衡。" },
    { cz: "Gibbsova energie (ΔG)", en: "Gibbs energy (ΔG)", cn: "Gibbs自由能（ΔG）", def_en: "The state variable suitable for describing energy changes under the constant temperature and pressure conditions living systems are restricted to.", def_cn: "适合描述生命系统在其所受限的恒定温度和压力条件下能量变化的状态函数。" },
    { cz: "fototrof", en: "phototroph", cn: "光养生物", def_en: "An organism (plants, some bacteria) that converts the Sun's electromagnetic energy directly into the chemical-bond energy of nutrients via photosynthesis.", def_cn: "通过光合作用将太阳电磁能直接转化为营养物质化学键能的生物（植物及部分细菌）。" },
    { cz: "chemotrof", en: "chemotroph", cn: "化能营养生物", def_en: "An organism that obtains Gibbs energy by oxidative cleavage of nutrients rather than directly from sunlight.", def_cn: "通过营养物质氧化裂解获取Gibbs自由能，而非直接利用阳光的生物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the book insist on calling the living organism's apparent equilibrium with its surroundings a 'dynamic equilibrium' or 'steady state' rather than a true equilibrium?",
      q_cn: "为什么教材坚持将生物体与环境之间看似的平衡称为「动态平衡」或「稳态」，而不是真正的平衡？",
      options: [
        "Because it is a closed system that exchanges heat but no matter with its surroundings, so the order it maintains is paid for by increasing its own internal disorder rather than the environment's",
        "Because the basic laws of thermodynamics were derived for isolated systems and are suspended in living matter, so equilibrium there needs its own biological definition",
        "Because it is an open system, kept far from the static equilibrium of an isolated system in classical thermodynamics by continuous exchange of matter and energy with the environment",
        "Because temperature, pressure and ion concentration inside the cell swing over a wide range, and a system whose variables never settle can only be called dynamic rather than truly equilibrated"
      ],
      answer: 2,
      optionRefs: { 1: "1-5" },
      optionNotes: {
        0: { en: "Both halves are reversed: the book calls the organism an OPEN system that covers its needs at the expense of the surroundings, and in doing so increases the ENVIRONMENT's disorder, not its own.", cn: "两处都反了：教材把生物体定义为开放系统，靠环境来满足自己的物质和能量需要，并且提高的是环境的无序度，而不是自身的。" },
        1: { en: "The book says the opposite in the same sentence: the basic laws of thermodynamics apply to living matter without exception, and it cross-references ch. 1.5 for them.", cn: "教材在同一句里说的正好相反：热力学基本定律对生命物质同样毫无例外地适用，并把读者指回第 1.5 节。" },
        3: { en: "The reversal that matters here: the energetic apparatus of living systems cannot tolerate large differences of pressure, temperature or ion concentration — that intolerance is exactly why work is done under constant conditions.", cn: "这里的关键在于方向反了：生命系统的能量装置恰恰承受不了大的压力、温度或离子浓度差异——正因为受不了，做功才只能在恒定条件下进行。" }
      },
      why_en: "The book frames the organism as an OPEN system whose apparent equilibrium is dynamic/steady-state, sharply distinct from the static equilibrium of an ISOLATED system in classical equilibrium thermodynamics — maintained only by constant exchange of information, matter and energy with the surroundings. The basic laws of thermodynamics still apply fully (ch. 1.5), so option B is wrong; option A contradicts the very premise of an open system; the book's actual point is the opposite of option D — biological systems can ONLY do work under near-constant conditions.",
      why_cn: "教材将生物体定位为开放系统，其看似的平衡是动态的/稳态的，与经典平衡态热力学中孤立系统的静态平衡有本质区别——仅靠与环境持续交换信息、物质与能量来维持。热力学基本定律仍完全适用（第1.5节），故选项B错误；选项A与开放系统的前提本身矛盾；教材的实际论点与选项D相反——生物系统只能在近乎恒定的条件下做功。"
    },
    {
      type: "mcq",
      q_en: "Why does the book identify Gibbs energy (ΔG) specifically as the appropriate state variable for describing the energetic changes of living systems?",
      q_cn: "为什么教材specifically指出Gibbs自由能（ΔG）是描述生命系统能量变化的合适状态函数？",
      options: [
        "Because living systems' energetic apparatus cannot tolerate large gradients of pressure, temperature or ion concentration, so they can only perform work under constant temperature, pressure and similar constant conditions",
        "Because Gibbs energy is the only thermodynamic quantity that can be measured directly inside an intact cell, whereas the other state variables can only be obtained from isolated systems held at true equilibrium in a calorimeter",
        "Because ATP hydrolysis is the cell's only source of Gibbs energy, so the state variable and the carrier molecule that distributes that energy around the cell amount to one and the same quantity",
        "Because living systems hold their interior at a temperature far below that of their surroundings, and Gibbs energy is the one state variable that stays defined across such a standing temperature gradient"
      ],
      answer: 0,
      optionRefs: { 2: "6-1-2-2" },
      optionNotes: {
        1: { en: "The book's reason is not measurability but conditions: work can only be done at constant temperature and pressure, which is where Gibbs energy is the natural state variable.", cn: "教材给的理由不是「能不能测」，而是条件：做功只能在恒温恒压下进行，而这正是 Gibbs energy 作为状态函数适用的场合。" },
        2: { en: "ATP is one FORM in which Gibbs energy is distributed around the cell — a carrier with its own hydrolysis value of −30.5 kJ·mol⁻¹ — not the thermodynamic quantity itself.", cn: "ATP 只是 Gibbs energy 在细胞内被分发的一种形式——一个自身水解值为 −30.5 kJ·mol⁻¹ 的载体——它不等于那个热力学量本身。" },
        3: { en: "Reversed again: the point is that the cell cannot sustain a large temperature difference at all, so it works under near-constant conditions rather than across a gradient.", cn: "还是反了：要点是细胞根本撑不住大的温度差，所以它是在近乎恒定的条件下做功，而不是跨着一个温度梯度做功。" }
      },
      why_en: "The book states this as a 'crucial peculiarity': the energetic apparatus of living systems cannot bear larger differences of pressure, temperature or ion concentration, so it can only do work at constant temperature, pressure and other constant conditions — exactly the conditions under which Gibbs energy is the natural state variable. The other three options are not claims the book makes at all.",
      why_cn: "教材将此称为一个「关键特点」：生命系统的能量装置无法承受较大的压力、温度或离子浓度差异，因而只能在恒定温度、恒定压力等恒定条件下做功——这恰恰是Gibbs自由能作为自然状态函数所适用的条件。其余三个选项都不是教材提出的论点。"
    },
    {
      type: "short",
      q_en: "What is the key difference between how phototrophs and chemotrophs obtain Gibbs energy, and where does virtually all of that energy ultimately originate?",
      q_cn: "光养生物与化能营养生物获取Gibbs自由能的方式有何关键差异？这些能量最终几乎都源自哪里？",
      accept: ["phototroph", "chemotroph", "photosynthesis", "oxidative", "sun", "solar", "光合", "氧化", "太阳"],
      answer_en: "Phototrophs (plants, some bacteria) convert the Sun's electromagnetic radiation directly into the chemical-bond energy of nutrients via photosynthesis (ch. 9); chemotrophs instead obtain Gibbs energy by oxidative cleavage of nutrients (ch. 1.4). Either way, virtually all energy used by organisms on Earth ultimately traces back to the Sun's electromagnetic radiation.",
      answer_cn: "光养生物（植物及部分细菌）通过光合作用把太阳电磁辐射直接转化为营养物质的化学键能（第9章）；化能营养生物则通过营养物质的氧化裂解获取Gibbs自由能（第1.4节）。无论哪种方式，地球上生物体利用的能量几乎全部最终都源自太阳的电磁辐射。"
    }
  ],
  oral: {
    q_en: "Explain why the book describes a living organism as a thermodynamically open system in dynamic equilibrium, and outline the three purposes for which organisms need energy plus how that energy ultimately originates.",
    q_cn: "解释为什么教材将生物体描述为处于动态平衡的热力学开放系统，并概述生物体需要能量的三种用途，以及这些能量最终的来源。",
    model_en: "Living matter is marked, especially compared with its surroundings, by a high degree of internal order, and that order isn't decorative — it's exactly what lets living systems regulate themselves autonomously and adapt to a changing environment. Keeping it up requires a constant exchange of information, matter and energy with the surroundings, which makes the organism, from a thermodynamic point of view, an open system: it meets its own need for energy and matter at the expense of the environment, whose disorder it correspondingly increases. What looks like equilibrium with the surroundings is really only apparent, better described as a dynamic equilibrium or steady state, which is far removed from the static equilibrium of an isolated system in classical equilibrium thermodynamics — though the basic laws of thermodynamics still hold without exception for living matter. This chapter deals with how organisms obtain, transform and use the energy they need for three things: mechanical work, as in muscle contraction and other cell movement; active transport of molecules and ions together with signal processing; and biosynthesis of macromolecules and other substances from precursors. The book's own flow scheme traces this energy through the biosphere in one direction, from the electromagnetic energy of solar radiation, through photosynthesis, into the energy of chemical bonds such as ATP, NADPH and nutrients generally, which then branches into contraction and movement, transport, and biosynthesis, all three of which eventually dissipate into unused energy as heat and entropy. Because the energetic apparatus of living systems can't tolerate large differences in pressure, temperature or ion concentration, it can only do work under constant temperature, pressure and similar conditions, which is exactly why Gibbs energy is the appropriate state variable here. And almost all of the energy organisms on Earth actually use traces back to that same solar electromagnetic radiation: phototrophs, meaning plants and some bacteria, convert it directly into the chemical-bond energy of nutrients, while other organisms, the chemotrophs, instead obtain their Gibbs energy by oxidative cleavage of those nutrients.",
    checklist: [
      "Defined the organism as a thermodynamically open system",
      "Explained why the apparent equilibrium is called dynamic/steady-state, not static",
      "Noted that thermodynamic laws still fully apply to living matter",
      "Named all three energy needs: mechanical work, active transport/signalling, biosynthesis",
      "Traced the flow scheme: solar energy to photosynthesis to chemical-bond energy to the three uses to unused heat/entropy",
      "Explained why Gibbs energy (ΔG) is the appropriate state variable (constant T, P)",
      "Distinguished phototrophs from chemotrophs and their energy sources"
    ]
  }
},

{
  id: "6-1-1",
  book: "cz",
  topicKey: "bioenergetics-and-thermodynamics",
  chapter: 6,
  section: "6.1.1",
  czTitle: "Reakce exergonické a endergonické",
  enTitle: "Exergonic and endergonic reactions",
  cnTitle: "放能反应与吸能反应",
  pages: [131],
  coverage: "full",
  coverageNote: "The top portion of p.131 read in full: from the '6.1.1 Reakce exergonické a endergonické' heading through the linear/branched/cyclic reaction-system schemes, the coupling principle, the ΔG⁰′-additivity statement, the worked glucose/ATP coupling table (all three numeric rows verified directly against the scan), the note that the resulting hexokinase reaction is exergonic, and the closing sentence defining ΔG⁰′ as maximal theoretical work. The rest of p.131, from the '6.1.2 Makroergické sloučeniny' heading onward, belongs to node 6-1-2-1.",
  cnNote: { topic: "十八", title: "生物能学 (笔记 仅凭标题/页码推测 p.103起，未直接核对)", status: "partial" },
  mustKnow: { en: "An unfavourable (endergonic) reaction can run only because a favourable (exergonic) one is chained to it and keeps pulling its product away — and the two ΔG values simply add. That is the whole trick behind hexokinase: phosphorylating glucose is unfavourable alone (+13.8 kJ/mol), but chained to ATP hydrolysis (-30.5) it nets -16.7 and runs forward. This coupling pattern is how the cell does anything 'uphill.'", cn: "一个不利的（吸能）反应之所以能进行，只是因为它和一个有利的（放能）反应连在一起，后者不断把前者的产物拉走——而两个 ΔG 直接相加。己糖激酶就是靠这个：单独把葡萄糖磷酸化是不利的（+13.8 kJ/mol），但和 ATP 水解（-30.5）连起来，净值是 -16.7，反应就能往前走。细胞做任何『逆坡』的事，用的都是这套偶联手法。" },
  trace: [
    {
      term: "coupling 反应偶联",
      what: "把一个「本来不会自己发生」的反应，拴在一个「抢着要发生」的反应上，让后者带着前者一起跑。教材的说法是：吸能反应（endergonic，ΔG⁰′>0）和放能反应（exergonic，ΔG⁰′<0）连在一起进行。",
      from: "凭什么拴在一起就能跑？靠一条特别朴素的热力学事实：**一串反应的总 ΔG，等于各步 ΔG 直接相加**。没有折扣，没有换算。所以只要放能那一步的负值足够大，把吸能那一步的正值盖过去，整串的净值就是负的，反应就能往前走。细胞不是「推着」不利反应走，它只是把账合并起来算。",
      to: "教材给了一个把这件事讲透的例子，值得连数字一起记住：单独让葡萄糖磷酸化是不划算的，ΔG⁰′ = **+13.8** kJ/mol，不会自己发生；而 ATP 水解是 **−30.5**。两者一偶联，净值 **−16.7**，于是反应顺理成章地进行——这正是己糖激酶（hexokinase）在糖酵解第一步干的事。**细胞做任何「逆着坡往上走」的事情，用的都是这一招**，往后你会反复看到它。",
      family: "反应在细胞里从不孤立发生，而是组成体系。教材分了三种：linear（A→B→C→D 一条道走到底）、branched（主链上分出支线）、cyclic（循环，柠檬酸循环就是）。理解偶联之后再看这三种结构，会发现它们都是在解决同一个问题：怎么让能量在需要的地方到位。"
    }
  ],
  summary: {
    en: "Reactions in living matter never run in isolation — they are part of LINEAR (A→B→C→D...), BRANCHED (a chain with side branches to further products, e.g. P and Q), or CYCLIC (A→B→C→D→E, with the last step regenerating A) systems. This matters because, within such a system, a thermodynamically unfavourable ENDERGONIC reaction (ΔG⁰′>0) can run simultaneously with — powered by — a spontaneous EXERGONIC reaction (ΔG⁰′<0); the coupling works by the exergonic reaction continuously removing the endergonic reaction's products. The key thermodynamic fact making this work is that the overall ΔG⁰′ of a reaction sequence equals the SUM of the individual steps' ΔG⁰′ values. The book works this through numerically: phosphorylating glucose to glucose-6-phosphate is endergonic (ΔG⁰′=+13.8 kJ·mol⁻¹), while ATP hydrolysis is strongly exergonic (ΔG⁰′=-30.5 kJ·mol⁻¹); summed, the coupled reaction glucose+ATP⇌glucose-6-phosphate+ADP is exergonic overall (ΔG⁰′=-16.7 kJ·mol⁻¹) — which is exactly the hexokinase reaction that opens glycolysis. Finally, ΔG⁰′ of a chemical reaction is defined as the MAXIMUM WORK theoretically obtainable from it under isothermal-isobaric conditions.",
    cn: "生命物质中的反应从不孤立进行——它们属于线性（A→B→C→D……）、分支型（主链上还分出支路生成其他产物，如P和Q）或环状（A→B→C→D→E，最后一步再生成A）反应体系的一部分。这一点很重要，因为在这样的体系中，一个热力学上不利的吸能反应（ΔG⁰′>0）可以与一个自发进行的放能反应（ΔG⁰′<0）同时发生——由后者「供能」；这种偶联的原理是放能反应不断消耗掉吸能反应的产物。使这一切得以成立的关键热力学事实是：一系列反应的总ΔG⁰′等于各个步骤ΔG⁰′之和。教材给出了具体数值：葡萄糖磷酸化为葡萄糖-6-磷酸是吸能反应（ΔG⁰′=+13.8 kJ·mol⁻¹），而ATP水解是强放能反应（ΔG⁰′=-30.5 kJ·mol⁻¹）；两者相加后，偶联反应葡萄糖+ATP⇌葡萄糖-6-磷酸+ADP整体为放能反应（ΔG⁰′=-16.7 kJ·mol⁻¹）——这正是开启糖酵解的己糖激酶反应。最后，化学反应的ΔG⁰′被定义为在等温等压条件下该反应理论上能够做的最大功。"
  },
  points: [
    { cz: "lineární / rozvětvené / cyklické soustavy reakcí", en: "In living matter, individual reactions never proceed in isolation but as part of a SYSTEM of reactions: LINEAR (A→B→C→D…), BRANCHED (a main chain that also sends side branches off to separate products, e.g. one intermediate branching to P and another to Q), or CYCLIC (A→B→C→D→E, where the last intermediate feeds back to regenerate A, closing the loop).", cn: "生命物质中的各个反应从不孤立进行，而是属于某个反应体系的一部分：线性型（A→B→C→D……）、分支型（主链还分出支路通向其他产物，例如某中间体分支生成P、另一中间体分支生成Q），或环状型（A→B→C→D→E，最后一个中间体又反馈回去再生成A，形成闭环）。" },
    { cz: "spřažení exergonické a endergonické reakce", en: "Being part of a system, rather than isolated, is what allows a thermodynamically unfavourable ENDERGONIC reaction (ΔG⁰′>0) to run at the same time as a spontaneously occurring EXERGONIC one (ΔG⁰′<0). The principle of this COUPLING is that the exergonic reaction continuously removes the products of the endergonic one, pulling it forward.", cn: "正因为反应属于某个体系而非孤立存在，一个热力学上不利的吸能反应（ΔG⁰′>0）才能与一个自发进行的放能反应（ΔG⁰′<0）同时发生。这种偶联的原理在于：放能反应不断地消耗掉吸能反应的产物，从而把吸能反应向前推动。" },
    { cz: "součet ΔG⁰′ dílčích kroků", en: "An important thermodynamic fact underlies coupling: the total change in Gibbs energy of a SERIES of reactions equals the SUM of the ΔG⁰′ values of the individual reaction steps — so an unfavourable step can be 'paid for' by a sufficiently favourable one elsewhere in the same sequence.", cn: "偶联背后有一个重要的热力学事实：一系列反应的总Gibbs自由能变化等于各个反应步骤ΔG⁰′之和——因此一个不利的步骤可以由同一序列中另一个足够有利的步骤来「支付」。" },
    { cz: "glukosa + ATP → glukosa-6-fosfát + ADP (−16,7 kJ·mol⁻¹)", en: "Worked numeric example: the ENDERGONIC reaction glucose+Pᵢ⇌glucose-6-phosphate+H₂O has ΔG⁰′=+13.8 kJ·mol⁻¹; the EXERGONIC reaction ATP+H₂O⇌ADP+Pᵢ has ΔG⁰′=-30.5 kJ·mol⁻¹. Summed, the COUPLED reaction glucose+ATP⇌glucose-6-phosphate+ADP has ΔG⁰′=-16.7 kJ·mol⁻¹ (13.8 + (-30.5) = -16.7) — exergonic overall.", cn: "具体数值示例：吸能反应葡萄糖+Pᵢ⇌葡萄糖-6-磷酸+H₂O的ΔG⁰′=+13.8 kJ·mol⁻¹；放能反应ATP+H₂O⇌ADP+Pᵢ的ΔG⁰′=-30.5 kJ·mol⁻¹。两者相加后，偶联反应葡萄糖+ATP⇌葡萄糖-6-磷酸+ADP的ΔG⁰′=-16.7 kJ·mol⁻¹（13.8+(-30.5)=-16.7）——整体为放能反应。" },
    { cz: "hexokinasová reakce = exergonická", en: "This resulting coupled reaction — glucose phosphorylation to glucose-6-phosphate powered by ATP hydrolysis — is precisely the reaction CATALYSED BY HEXOKINASE during the breakdown of glucose in GLYCOLYSIS, and it is exergonic overall thanks to the coupling.", cn: "这一偶联反应——由ATP水解驱动、把葡萄糖磷酸化为葡萄糖-6-磷酸——正是糖酵解中葡萄糖分解时由己糖激酶催化的反应，得益于偶联，其整体为放能反应。" },
    { cz: "ΔG⁰′ = maximální práce (izotermicko-izobarický děj)", en: "The book defines ΔG⁰′ of a chemical reaction as the MAXIMUM WORK that could theoretically be performed by that reaction if carried out under ISOTHERMAL-ISOBARIC conditions (constant temperature and pressure) — tying the abstract thermodynamic quantity back to the concrete idea of usable work.", cn: "教材将化学反应的ΔG⁰′定义为：若该反应在等温等压条件下（恒定温度、恒定压力）进行，理论上能够做的最大功——把抽象的热力学量与可利用功这一具体概念联系了起来。" }
  ],
  terms: [
    { cz: "exergonická reakce", en: "exergonic reaction", cn: "放能反应", def_en: "A reaction with ΔG⁰′<0 that proceeds spontaneously, releasing Gibbs energy.", def_cn: "ΔG⁰′<0、能自发进行并释放Gibbs自由能的反应。" },
    { cz: "endergonická reakce", en: "endergonic reaction", cn: "吸能反应", def_en: "A reaction with ΔG⁰′>0 that cannot proceed spontaneously and needs coupling to an exergonic reaction.", def_cn: "ΔG⁰′>0、不能自发进行、需要与放能反应偶联才能发生的反应。" },
    { cz: "spřažená reakce", en: "coupled reaction", cn: "偶联反应", def_en: "The combination of an endergonic and an exergonic reaction into one overall process, whose net ΔG⁰′ is the sum of both steps.", def_cn: "把一个吸能反应与一个放能反应结合为一个整体过程，其净ΔG⁰′为两步之和。" },
    { cz: "hexokinasa", en: "hexokinase", cn: "己糖激酶", def_en: "The enzyme catalysing glucose+ATP⇌glucose-6-phosphate+ADP, the first, exergonic (coupled) step of glycolysis.", def_cn: "催化葡萄糖+ATP⇌葡萄糖-6-磷酸+ADP的酶，是糖酵解的第一步、整体为放能的偶联反应。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the book's worked example, what is the ΔG⁰′ of the coupled reaction glucose + ATP ⇌ glucose-6-phosphate + ADP, and how is it obtained?",
      q_cn: "在教材给出的示例中，偶联反应葡萄糖+ATP⇌葡萄糖-6-磷酸+ADP的ΔG⁰′是多少？它是如何得出的？",
      options: [
        "−30.5 kJ·mol⁻¹, the value of ATP hydrolysis on its own, the coupled pair simply inheriting the sign and size of its exergonic half",
        "+13.8 kJ·mol⁻¹, the value of the glucose phosphorylation step on its own, which would leave the coupled reaction endergonic and unable to run",
        "−44.3 kJ·mol⁻¹, the product rather than the sum of the two steps' ΔG⁰′ values, taking coupling to multiply energies",
        "−16.7 kJ·mol⁻¹, the sum of the endergonic phosphorylation's +13.8 kJ·mol⁻¹ and the exergonic ATP hydrolysis's −30.5 kJ·mol⁻¹"
      ],
      answer: 3,
      optionRefs: { 0: "6-1-2-2", 1: "6-1-2-2" },
      optionNotes: {
        0: { en: "−30.5 kJ·mol⁻¹ is what Tab. 6.1 gives for ATP hydrolysis by itself; the coupled reaction takes the SUM of both steps, so half of that value is spent paying for the phosphorylation.", cn: "−30.5 kJ·mol⁻¹ 是表 6.1 给 ATP 单独水解的数值；偶联反应取的是两步之和，其中一部分被用来支付葡萄糖磷酸化的开销。" },
        1: { en: "+13.8 kJ·mol⁻¹ is the endergonic half alone — the same number Tab. 6.1 lists as glucose-6-phosphate's hydrolysis energy. On its own that reaction will not run; the coupling is what makes the total negative.", cn: "+13.8 kJ·mol⁻¹ 只是吸能的那一半——也正是表 6.1 中 glucose-6-phosphate 水解能量的同一个数字。单独进行时这个反应不会发生，是偶联把总和变成了负值。" },
        2: { en: "The total ΔG⁰′ of a series of reactions is the SUM of its steps: the book's arithmetic is 13.8 + (−30.5) = −16.7. Combining the two values any other way gives a number the book never derives.", cn: "一串反应的总 ΔG⁰′ 等于各步之和：教材的算式是 13.8 + (−30.5) = −16.7。用别的方式把这两个数拼起来，得到的都是教材从未推出过的数字。" }
      },
      why_en: "Because the total ΔG⁰′ of a reaction sequence is the SUM of its steps' individual ΔG⁰′ values, 13.8 + (-30.5) = -16.7 kJ·mol⁻¹. Options A and B each ignore one of the two steps; option C wrongly multiplies rather than sums the two values.",
      why_cn: "由于一系列反应的总ΔG⁰′等于各步骤ΔG⁰′之和，13.8+(-30.5)=-16.7 kJ·mol⁻¹。选项A和B都各自忽略了其中一步；选项C错误地把两个数值相乘而非相加。"
    },
    {
      type: "mcq",
      q_en: "How does the book define ΔG⁰′ of a chemical reaction?",
      q_cn: "教材如何定义化学反应的ΔG⁰′？",
      options: [
        "The total heat released by the reaction when it is carried out under isothermal-isobaric conditions, that is at constant temperature and constant pressure",
        "The maximum work the reaction could theoretically perform, carried out under isothermal-isobaric (constant temperature and pressure) conditions",
        "The rate at which the reaction approaches its equilibrium once the enzyme catalysing it is present at a saturating concentration",
        "The number of ATP molecules the reaction consumes or produces, each one counted at the −30.5 kJ·mol⁻¹ Tab. 6.1 gives for ATP hydrolysis"
      ],
      answer: 1,
      optionRefs: { 0: "6-1", 2: "3-3-1", 3: "6-1-2-2" },
      optionNotes: {
        0: { en: "Work, not heat. Heat enters this chapter only at the far end of the energy-flow scheme, as the UNUSED energy that every process finally dissipates into.", cn: "是功，不是热。热在本章只出现在能流图的末端，作为一切过程最后耗散掉的「未被利用的能量」。" },
        2: { en: "ΔG⁰′ says nothing about how fast a reaction goes — a strongly exergonic reaction can be immeasurably slow without its enzyme. Speed is the subject of enzyme kinetics.", cn: "ΔG⁰′ 完全不涉及反应有多快——放能很强的反应没有酶也可以慢到测不出来。快慢是酶动力学的题目。" },
        3: { en: "ATP is one particular macroergic carrier whose hydrolysis happens to be −30.5 kJ·mol⁻¹, which the book calls a kind of energy quantum; ΔG⁰′ itself is defined for any reaction, ATP or no ATP.", cn: "ATP 只是一种具体的高能载体，其水解恰好是 −30.5 kJ·mol⁻¹，教材称之为能量的「量子」；而 ΔG⁰′ 对任何反应都有定义，跟有没有 ATP 无关。" }
      },
      why_en: "The book explicitly states ΔG⁰′ of a chemical reaction means the maximal work that can theoretically be performed if the process is carried out isothermally and isobarically — not heat, not rate, and not an ATP count (ATP is just one specific example of a macroergic carrier, covered in the next section).",
      why_cn: "教材明确指出，化学反应的ΔG⁰′是指若该过程在等温等压条件下进行，理论上能够做的最大功——不是热量，不是速率，也不是ATP分子数（ATP只是下一节中讨论的一种具体的高能载体）。"
    },
    {
      type: "short",
      q_en: "Explain the principle by which an exergonic reaction can drive a thermodynamically unfavourable endergonic reaction, and name the type of reaction-system arrangement (linear/branched/cyclic) that makes this possible.",
      q_cn: "解释放能反应如何能够推动一个热力学上不利的吸能反应？使这成为可能的是哪种反应体系排列方式（线性/分支/环状）？",
      accept: ["coupling", "spřažení", "remove products", "sum", "linear", "branched", "cyclic", "偶联", "去除产物", "线性", "分支", "环状"],
      answer_en: "Reactions in living matter are never isolated but part of linear, branched, or cyclic systems. Within such a system, an exergonic reaction can drive an endergonic one by coupling: the exergonic reaction continuously removes the endergonic reaction's products, and because total ΔG⁰′ of the sequence is the sum of the individual steps, a large negative ΔG⁰′ from the exergonic step can outweigh a smaller positive ΔG⁰′ from the endergonic one, making the overall process spontaneous.",
      answer_cn: "生命物质中的反应从不孤立存在，而是属于线性、分支或环状体系的一部分。在这样的体系中，放能反应可以通过偶联来推动吸能反应：放能反应不断消耗掉吸能反应的产物；又因为整个序列的总ΔG⁰′等于各步骤之和，放能步骤较大的负ΔG⁰′可以抵消吸能步骤较小的正ΔG⁰′，使整个过程整体上自发进行。"
    }
  ],
  oral: {
    q_en: "Explain the difference between exergonic and endergonic reactions, how they can be thermodynamically coupled, and work through the book's glucose-phosphorylation example.",
    q_cn: "解释放能反应与吸能反应的区别、二者如何在热力学上实现偶联，并演算教材中葡萄糖磷酸化的例子。",
    model_en: "In living matter, reactions never occur in isolation but as part of a system — linear, branched, or cyclic — and that arrangement is exactly what makes it possible for a thermodynamically unfavourable, endergonic reaction, one with a positive standard Gibbs energy change, to proceed at the same time as a spontaneous, exergonic reaction with a negative one. The principle behind this coupling is that the exergonic reaction continuously removes the products of the endergonic reaction, pulling it forward, and the reason this works mathematically is that the overall change in Gibbs energy for a series of reactions is simply the sum of the individual steps' values. The book illustrates this with glucose phosphorylation: on its own, glucose plus inorganic phosphate going to glucose-6-phosphate plus water is endergonic, with a standard Gibbs energy change of plus 13.8 kilojoules per mole, so it wouldn't happen spontaneously. But ATP hydrolysis to ADP and phosphate is strongly exergonic, at minus 30.5 kilojoules per mole, and when the two are coupled — glucose plus ATP going to glucose-6-phosphate plus ADP — the values simply add, giving minus 16.7 kilojoules per mole, an overall exergonic, spontaneous reaction. This coupled reaction is in fact the very first step of glycolysis, catalysed by the enzyme hexokinase. And finally, this standard Gibbs energy change of a reaction has a precise physical meaning: it's the maximum work the reaction could theoretically perform, if it were carried out under isothermal, isobaric conditions, that is, at constant temperature and pressure.",
    checklist: [
      "Defined exergonic (ΔG⁰′<0) versus endergonic (ΔG⁰′>0) reactions",
      "Named linear, branched, and cyclic reaction systems",
      "Explained the coupling principle: continuous removal of the endergonic reaction's products",
      "Stated that total ΔG⁰′ of a sequence equals the sum of individual steps",
      "Walked through the glucose+Pi (+13.8), ATP hydrolysis (−30.5), coupled (−16.7 kJ·mol⁻¹) numbers",
      "Identified the coupled reaction as the hexokinase step of glycolysis",
      "Defined ΔG⁰′ as maximum theoretical work under isothermal-isobaric conditions"
    ]
  }
},

{
  id: "6-1-2-1",
  book: "cz",
  topicKey: "atp-and-phosphoryl-transfer",
  chapter: 6,
  section: "6.1.2",
  czTitle: "Makroergické sloučeniny — pojem, anhydridy a fosfamidy",
  enTitle: "High-energy (macroergic) compounds — the concept, anhydrides and phosphoamides",
  cnTitle: "高能化合物——概念、酸酐类与磷酰胺类",
  pages: [131, 132],
  coverage: "full",
  coverageNote: "The bottom of p.131 (from the '6.1.2 Makroergické sloučeniny' heading through '...Makroergických sloučenin je několik typů (obr. 6.1):') plus all of p.132 through the end of the '2. Fosfamidy' paragraph ('...brání parciální kladný náboj na atomu fosforu mezomerii.') verified directly against the scans, including Obr. 6.1's own structural drawings for ATP, ADP, acetylfosfát and fosfokreatin (zoomed to confirm the ATP/ADP purine-ring-plus-ribose-plus-polyphosphate layout and the phosphocreatine phosphoramidate-type P-N linkage). Obr. 6.1's remaining two structures (fosfoenolpyruvát, acetylkoenzym A) and the '3. Enolfosfáty'/'4. Thioestery' text, plus Tab. 6.1, belong to node 6-1-2-2.",
  cnNote: { topic: "十八", title: "生物能学——高能化合物 (笔记 仅凭标题/页码推测 p.103起，未直接核对)", status: "partial" },
  mustKnow: { en: "'High-energy' does not describe an unusually strong bond — it describes a molecule sitting in an unstable, charge-crowded state (phosphorus resists forming double bonds, and negative charge piles up on its oxygens), so breaking one bond relieves that strain and releases 30-60 kJ/mol, against under 12 for an ordinary bond. That is why the book insists on 'high-energy compound', not 'high-energy bond' — the instability belongs to the whole molecule, not to one bond viewed in isolation.", cn: "『高能』说的不是一个格外结实的键——而是分子本身处在一种不稳定、电荷拥挤的状态（磷不容易形成双键，负电荷又堆在它的氧原子上），所以断开一个键就能释放这种张力，放出 30-60 kJ/mol，而普通键还不到 12。这就是为什么教材坚持说『高能化合物』，而不是『高能键』——不稳定是整个分子的属性，不是孤立的某一个键。" },
  trace: [
    {
      term: "high-energy compound 高能化合物",
      what: "先破一个几乎人人都会有的误会：**「高能」说的不是这个键特别结实、特别能装能量**。恰恰相反——它说的是**整个分子处在一种别扭、不稳定的状态**，所以一旦断开某个键，这份憋着的张力就释放出来了。能量不是存在键里的，是存在「不舒服」里的。",
      from: "为什么会别扭？教材给的结构理由很具体：磷这个元素不太容易形成双键，它和氧之间的键是半极性的；再加上一堆负电荷全挤在相邻的氧原子上，彼此排斥。这样一个电荷拥挤的结构，本来就巴不得散开。所以它不是「充满能量」，而是「憋着一股劲」。",
      to: "**这就是为什么教材坚持叫它「高能化合物」而不是「高能键」**——不稳定是整个分子的性质，不是某一根键单独拥有的属性。这个区分不是咬文嚼字：如果你以为能量藏在键里，那么「断键要吸能、成键才放能」这条化学常识就会和你打架，你会越想越糊涂。想通了这一层，ATP 为什么是能量货币就不需要背了。",
      family: "教材给了四种结构类型，第一类是 anhydride（酸酐）——无机焦磷酸和各种核苷三磷酸（ATP、UTP、GTP、CTP）都属于这一类，其中 ATP 和 ADP 最重要。还有一类叫 phosphagen（磷酸原），例如磷酸肌酸、磷酸精氨酸，作用是**临时储能**：肌肉里需要爆发时先用它顶上，等于一个随身的备用电池。",
      numbers: "高能化合物每个键的水解 ΔG⁰′ 在 **30–60** kJ/mol；而非高能化合物不到 **12**。这两个数摆在一起，「高能」这个称呼的界线就清楚了。"
    }
  ],
  summary: {
    en: "Coupling of exergonic and endergonic reactions need not be direct: living systems instead use METABOLITES able to accumulate, store, transfer and — on demand — release Gibbs energy within their own molecule. These metabolites sit in an energetically unstable state, held back from a more stable configuration by a single chemical bond, often called a MACROERGIC (high-energy) bond and marked with a small wavy line (~); breaking it stabilises the system and releases Gibbs energy for use elsewhere, e.g. in an endergonic reaction. Because the atoms around that bond are also engaged in further covalent interactions, macroergicity is really a property of a larger part of the molecule — so the book prefers to speak of MACROERGIC COMPOUNDS rather than macroergic bonds. Macroergic compounds show high ΔG⁰′ of hydrolysis, 30-60 kJ·mol⁻¹ per bond, versus under about 12 kJ·mol⁻¹ per bond for non-macroergic compounds. Obr. 6.1 catalogues four structural types. Type 1, ANHYDRIDES, includes the inorganic di-/triphosphates and nucleotide triphosphates (ATP, UTP, GTP, CTP); ATP and ADP are the most important — at pH 7, ATP has four dissociable protons and ADP three, and both form complexes with Mg²⁺ ions in the cell. Their 'macroergicity' is explained structurally: phosphorus does not readily form double bonds and its bond to oxygen is semipolar, while negative charge accumulates on the oxygen atoms — the resulting electrostatic repulsion between like charges destabilises the molecule. Other anhydride bonds include the phosphosulfate bond in 3′-phosphoadenosine-5′-phosphosulfate and acylphosphate bonds such as carbamoylphosphate (ch. 5.2.2) or 1,3-bisphosphoglycerate (ch. 7.8). Type 2, PHOSPHOAMIDES, occurs in so-called PHOSPHAGENS — phosphocreatine in vertebrates, phosphoarginine in invertebrates — where a partial positive charge on the phosphorus atom prevents mesomerism (resonance stabilisation).",
    cn: "放能反应与吸能反应的偶联未必是直接的：生命系统会利用一些能在自身分子内积累、储存、传递并在需要时释放Gibbs自由能的代谢物。这些代谢物处于能量上不稳定的状态，仅靠一个化学键就阻止其转变为更稳定的构型，这个键常被称为高能（大能）键，并以一个小波浪号（~）标出；断裂该键会使体系稳定下来并释放Gibbs自由能，供其他地方（例如某个吸能反应）使用。由于该键周围的原子还参与其他共价相互作用，「高能性」实际上是分子较大部分的属性——因此教材更倾向于说「高能化合物」而非「高能键」。高能化合物的水解ΔG⁰′较高，为每键30-60 kJ·mol⁻¹，而非高能化合物的水解通常不超过每键约12 kJ·mol⁻¹。图6.1列出了四种结构类型。第1类——酸酐类——包括无机二/三磷酸及核苷三磷酸（ATP、UTP、GTP、CTP）；其中ATP和ADP最为重要——在pH 7时，ATP有四个可解离质子，ADP有三个，二者都能在细胞内与Mg²⁺离子形成络合物。其「高能性」从结构上解释为：磷原子不易形成双键，其与氧的键为半极性，同时氧原子上又聚集了负电荷——由此产生的同种电荷间静电斥力使分子失稳。其他酸酐键还包括3′-磷酸腺苷-5′-磷酸硫酸中的磷酸硫酸键，以及酰基磷酸键，如氨甲酰磷酸（第5.2.2节）或1,3-二磷酸甘油酸（第7.8节）。第2类——磷酰胺类——存在于所谓的「磷酸原」中：脊椎动物中的磷酸肌酸、无脊椎动物中的磷酸精氨酸，其中磷原子上的部分正电荷阻止了共振（离域）稳定化。"
  },
  points: [
    { cz: "makroergická sloučenina, ne 'vazba'", en: "Coupling of exergonic/endergonic reactions need not be immediate and direct: living systems use METABOLITES capable of accumulating, storing, transferring, and on demand releasing Gibbs energy within their own molecule. Because the atoms around the so-called macroergic bond are also engaged in further covalent interactions, macroergicity is usually a property of a LARGER PORTION of the molecule — so the book insists it is more correct to speak of MACROERGIC COMPOUNDS than of macroergic bonds, even though one single bond (marked with a small wavy line, ~) is conventionally singled out as the one whose cleavage stabilises the molecule and releases the energy.", cn: "放能反应与吸能反应的偶联未必是即时且直接的：生命系统利用能在自身分子内积累、储存、传递并在需要时释放Gibbs自由能的代谢物。由于所谓「高能键」周围的原子还参与其他共价相互作用，「高能性」通常是分子较大部分的属性——因此教材坚持认为更准确的说法是「高能化合物」而非「高能键」，尽管习惯上仍会specifically指出其中断裂后能使分子稳定并释放能量的那一个键（以小波浪号~标出）。" },
    { cz: "ΔG⁰′ hydrolýzy: 30–60 vs <12 kJ·mol⁻¹", en: "Macroergic compounds were empirically found to have HIGH ΔG⁰′ of hydrolysis, in the range 30 TO 60 kJ·mol⁻¹ PER BOND. Hydrolysis of non-macroergic compounds, by contrast, usually does not exceed about 12 kJ·mol⁻¹ per bond — this numeric threshold is the book's own operational definition of what counts as 'high-energy.'", cn: "经验发现，高能化合物的水解ΔG⁰′较高，每键在30到60 kJ·mol⁻¹之间。相比之下，非高能化合物的水解通常不超过每键约12 kJ·mol⁻¹——这一数值范围就是教材对「高能」这一说法的操作性定义。" },
    { cz: "Obr. 6.1 — čtyři typy makroergických sloučenin", en: "Obr. 6.1 illustrates four structural types of macroergic compound with example structures: ATP and ADP (an adenine base attached to a ribose sugar — drawn with free 2′- and 3′-hydroxyls, i.e. the ribose of RNA-type nucleotides, not deoxyribose — whose 5′-CH₂-O- carries a chain of three or two phosphate groups linked by phosphoanhydride bonds) for type 1; acetylphosphate (CH₃-CO-O-PO₃²⁻, an acyl-phosphate mixed anhydride) also under type 1; phosphocreatine (creatine's guanidino nitrogen carrying the phosphate group via a P-N linkage) for type 2; and phosphoenolpyruvate plus acetyl-CoA (shown in shorthand as CoA-S-COCH₃), illustrating types 3 and 4, covered in the next node.", cn: "图6.1用示例结构展示了四种高能化合物类型：ATP和ADP（腺嘌呤碱基连接核糖——图中画出游离的2′-和3′-羟基，即RNA型核苷酸所用的核糖而非脱氧核糖——其5′-CH₂-O-连接由磷酸酐键相连的三个或两个磷酸基团）为第1类；乙酰磷酸（CH₃-CO-O-PO₃²⁻，一种酰基磷酸混合酸酐）同属第1类；磷酸肌酸（肌酸的胍基氮通过P-N键连接磷酸基团）为第2类；磷酸烯醇丙酮酸与乙酰辅酶A（以CoA-S-COCH₃简写表示）则分别展示第3类和第4类，将在下一个节点中介绍。" },
    { cz: "typ 1: anhydridy — ATP/ADP, protony, Mg²⁺", en: "TYPE 1, ANHYDRIDES: found in inorganic diphosphates (pyrophosphates) and in nucleotide triphosphates (ATP, UTP, GTP, CTP), of which ATP and ADP are the most important. At pH 7, ATP carries FOUR dissociable protons and ADP THREE; both form complexes with MAGNESIUM ions in the cell.", cn: "第1类——酸酐类：存在于无机二磷酸（焦磷酸）及核苷三磷酸（ATP、UTP、GTP、CTP）中，其中ATP和ADP最为重要。在pH 7时，ATP带有四个可解离质子，ADP带有三个；二者都能在细胞内与镁离子形成络合物。" },
    { cz: "proč jsou polyfosfáty 'makroergní' — mechanismus", en: "The book explains the structural basis of polyphosphate 'macroergicity': phosphorus does not readily form DOUBLE bonds, and its bond to oxygen is SEMIPOLAR; in addition, NEGATIVE CHARGES are concentrated on the oxygen atoms. The result is a cluster of like charges whose mutual ELECTROSTATIC REPULSION destabilises the molecule — so breaking a phosphoanhydride bond relieves that strain and releases substantial Gibbs energy.", cn: "教材从结构上解释了多磷酸「高能性」的原因：磷原子不易形成双键，其与氧的键为半极性；此外，负电荷又集中在氧原子上。结果是同种电荷聚集在一起，彼此间的静电斥力使分子失稳——因此断裂一个磷酸酐键能解除这种张力，释放出可观的Gibbs自由能。" },
    { cz: "další anhydridy: fosfosulfátové, acylfosfátové", en: "Besides ATP/ADP-type polyphosphates, the book lists two further anhydride examples: the PHOSPHOSULFATE bond in 3′-phosphoadenosine-5′-phosphosulfate, and ACYLPHOSPHATE bonds such as CARBAMOYLPHOSPHATE (cross-referenced forward to ch. 5.2.2) and 1,3-BISPHOSPHOGLYCERATE (cross-referenced forward to ch. 7.8).", cn: "除ATP/ADP这类多磷酸外，教材还列举了另外两个酸酐类例子：3′-磷酸腺苷-5′-磷酸硫酸中的磷酸硫酸键，以及酰基磷酸键，例如氨甲酰磷酸（前瞻引用第5.2.2节）和1,3-二磷酸甘油酸（前瞻引用第7.8节）。" },
    { cz: "typ 2: fosfamidy — fosfokreatin, fosfoarginin", en: "TYPE 2, PHOSPHOAMIDES, occur in so-called PHOSPHAGENS — energy-storage compounds, named specifically as PHOSPHOCREATINE in VERTEBRATES and PHOSPHOARGININE in INVERTEBRATES. In this compound type, a PARTIAL POSITIVE CHARGE on the phosphorus atom prevents MESOMERISM (resonance delocalisation) — the mechanistic reason this P-N bond is high-energy.", cn: "第2类——磷酰胺类：存在于所谓的「磷酸原」这类储能化合物中——脊椎动物中specifically称为磷酸肌酸，无脊椎动物中称为磷酸精氨酸。在这类化合物中，磷原子上的部分正电荷阻止了共振（离域）稳定化——这正是这种P-N键属于高能键的机制性原因。" }
  ],
  terms: [
    { cz: "makroergická sloučenina", en: "high-energy (macroergic) compound", cn: "高能化合物", def_en: "A metabolite in an energetically unstable state whose hydrolysis (of a bond conventionally marked ~) releases 30-60 kJ·mol⁻¹, much more than a non-macroergic bond (<~12 kJ·mol⁻¹).", def_cn: "处于能量不稳定状态的代谢物，其（习惯上以~标出的）某个键水解可释放30-60 kJ·mol⁻¹，远高于非高能键（约小于12 kJ·mol⁻¹）。" },
    { cz: "anhydridová vazba", en: "anhydride bond", cn: "酸酐键", def_en: "The phosphoanhydride-type high-energy bond found in ATP/ADP and other nucleotide di-/triphosphates, plus phosphosulfate and acylphosphate variants.", def_cn: "存在于ATP/ADP及其他核苷二/三磷酸中的磷酸酐型高能键，另有磷酸硫酸及酰基磷酸两种变体。" },
    { cz: "fosfagen (fosfokreatin, fosfoarginin)", en: "phosphagen (phosphocreatine, phosphoarginine)", cn: "磷酸原（磷酸肌酸、磷酸精氨酸）", def_en: "A phosphoamide-bonded energy-storage compound: phosphocreatine in vertebrates, phosphoarginine in invertebrates; resonance is blocked by a partial positive charge on phosphorus.", def_cn: "以磷酰胺键储能的化合物：脊椎动物中为磷酸肌酸，无脊椎动物中为磷酸精氨酸；磷原子上的部分正电荷阻止了共振。" },
    { cz: "Mg²⁺-komplexy ATP/ADP", en: "Mg²⁺ complexes of ATP/ADP", cn: "ATP/ADP的Mg²⁺络合物", def_en: "The magnesium complexes both ATP and ADP form in the cell, alongside their four/three dissociable protons at pH 7.", def_cn: "ATP和ADP在细胞内都会形成的镁离子络合物，二者在pH 7时分别带有四个/三个可解离质子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What structural explanation does the book give for why polyphosphate compounds like ATP are 'macroergic'?",
      q_cn: "教材从结构上如何解释ATP这类多磷酸化合物为什么是「高能」的？",
      options: [
        "Because phosphorus readily forms unusually strong double bonds with oxygen, and the energy stored in those bonds is what is released when a phosphoanhydride bond is hydrolysed and the molecule relaxes",
        "Phosphorus resists forming double bonds and its bond to oxygen is semipolar, while negative charges accumulate on the oxygens — the resulting electrostatic repulsion between like charges destabilises the molecule",
        "Because the purine base and the ribose are held in a strained conformation by the polyphosphate chain, so hydrolysing the terminal phosphate releases the ring system to relax into the more stable form it had been locked out of",
        "Because the negative charges along the polyphosphate chain are neutralised by complexation with Mg²⁺ ions, and the energy of that complex is released together with the terminal phosphate group"
      ],
      answer: 1,
      optionRefs: { 2: "6-1-2-2" },
      optionNotes: {
        0: { en: "Exactly reversed: the book's premise is that phosphorus does NOT readily form double bonds and that its bond to oxygen is semipolar. High-energy never means a strong bond here — it means an unstable molecule that cleavage stabilises.", cn: "正好说反了：教材的前提是磷原子不容易形成双键，且 P–O 键是半极性的。这里的「高能」从来不是指键很强，而是指分子不稳定，断键反而使它稳定下来。" },
        2: { en: "Relaxing into a more stable form it was locked out of is a real mechanism in this chapter — but it belongs to phosphoenolpyruvate, whose phosphate blocks tautomerisation to the keto form, not to ATP's adenine and ribose.", cn: "「松弛回到原本被锁住的更稳定形式」在本章确实是一个真实机制——但那是 phosphoenolpyruvate 的事，它的磷酸基阻止分子变成酮式，与 ATP 的腺嘌呤和核糖无关。" },
        3: { en: "ATP and ADP really do form Mg²⁺ complexes in the cell, but the book lists that as a separate property. The macroergicity comes from the mutual repulsion of the like charges — neutralising them is the opposite of the mechanism.", cn: "ATP 和 ADP 在细胞内确实会与 Mg²⁺ 形成络合物，但教材是把这条当作另一项性质列出的。高能性来自同种电荷之间的互斥——把电荷中和掉恰恰与这个机制相反。" }
      },
      why_en: "The book explains 'macroergicity' of polyphosphates structurally: phosphorus does not readily form double bonds and its P-O bond is semipolar, while negative charge accumulates on the oxygen atoms, producing electrostatic repulsion between like charges that destabilises the molecule. The other options describe mechanisms the book does not give — it never claims unusually strong P=O double bonds, an unstable purine ring, or a ribose-to-deoxyribose conversion.",
      why_cn: "教材从结构上解释了多磷酸「高能性」的原因：磷原子不易形成双键，P-O键为半极性，同时负电荷聚集在氧原子上，产生同种电荷间的静电斥力使分子失稳。其余选项描述的机制教材均未提及——它从未声称P=O存在异常强的双键、嘌呤环本身不稳定，或核糖会转变为脱氧核糖。"
    },
    {
      type: "mcq",
      q_en: "Phosphagens are a subtype of macroergic phosphoamide compound. Which pairing of phosphagen and organism group, plus its stabilising mechanism, is correct per the book?",
      q_cn: "磷酸原是磷酰胺类高能化合物的一个亚型。根据教材，下列哪一项对磷酸原与其对应生物类群及稳定化机制的配对是正确的？",
      options: [
        "Phosphoarginine in vertebrates and phosphocreatine in invertebrates; in both, a partial negative charge on phosphorus prevents mesomerism (resonance)",
        "Phosphocreatine in vertebrates and phosphoarginine in invertebrates; in both, a double bond between phosphorus and nitrogen locks the phosphate in place",
        "Phosphocreatine and phosphoarginine occur side by side in all animals; in both, it is the anhydride bond to oxygen that carries the stored energy",
        "Phosphocreatine in vertebrates and phosphoarginine in invertebrates; in both, a partial positive charge on phosphorus prevents mesomerism (resonance)"
      ],
      answer: 3,
      optionNotes: {
        0: { en: "Two things flipped at once: the book gives phosphocreatine to vertebrates and phosphoarginine to invertebrates, and the charge on phosphorus that blocks mesomerism is partial POSITIVE.", cn: "一次翻了两处：教材把 phosphocreatine 归给脊椎动物、phosphoarginine 归给无脊椎动物；而阻止共振的是磷原子上的部分正电荷。" },
        1: { en: "The taxonomic pairing is right, the mechanism is not: it is a partial positive charge on phosphorus that prevents mesomerism, and the book's general point is that phosphorus resists forming double bonds.", cn: "生物类群配对是对的，机制不对：阻止共振的是磷原子上的部分正电荷；而且教材总的说法正是磷原子不倾向于形成双键。" },
        2: { en: "The book states the taxonomic split explicitly rather than leaving it out, and phosphagens are type-2 PHOSPHOAMIDES with the phosphate on nitrogen — the anhydride bond to oxygen is type 1, ATP and acetylphosphate.", cn: "教材明确写出了这个类群区分，并没有含糊带过；而且 phosphagen 属于第 2 类 phosphoamide，磷酸接在氮上——接在氧上的酸酐键是第 1 类，即 ATP 和 acetylphosphate。" }
      },
      why_en: "The book specifically names phosphocreatine as the vertebrate phosphagen and phosphoarginine as the invertebrate one, and explains that in this compound type a partial positive charge on the phosphorus atom is what prevents mesomerism — not a P=N double bond and not a full negative charge, and the taxonomic split is explicit, not absent.",
      why_cn: "教材specifically指出，脊椎动物中的磷酸原是磷酸肌酸，无脊椎动物中的是磷酸精氨酸，并说明在这类化合物中，正是磷原子上的部分正电荷阻止了共振——而不是P=N双键，也不是完全的负电荷；而且教材明确区分了这两个类群，并非「无区分」。"
    },
    {
      type: "short",
      q_en: "At pH 7, how many dissociable protons do ATP and ADP each carry, and what else do both form in the cell?",
      q_cn: "在pH 7时，ATP和ADP各带有多少个可解离质子？二者在细胞内还会形成什么？",
      accept: ["four", "4", "three", "3", "magnesium", "Mg", "四", "三", "镁"],
      answer_en: "At pH 7, ATP has four dissociable protons and ADP has three. Both ATP and ADP also form complexes with magnesium (Mg²⁺) ions in the cell.",
      answer_cn: "在pH 7时，ATP带有四个可解离质子，ADP带有三个。ATP和ADP在细胞内还都会与镁（Mg²⁺）离子形成络合物。"
    }
  ],
  oral: {
    q_en: "Explain why the book prefers 'macroergic compound' over 'macroergic bond', what numeric threshold defines a high-energy bond, and describe the anhydride and phosphoamide compound types with examples.",
    q_cn: "解释为什么教材更倾向于用「高能化合物」而不是「高能键」这一说法？高能键的数值判断标准是什么？并举例描述酸酐类与磷酰胺类这两种化合物类型。",
    model_en: "Coupling of exergonic and endergonic reactions doesn't always have to be immediate and direct, because living systems have at their disposal a number of metabolites that can accumulate, store, transfer and, when needed, release Gibbs energy within their own molecule. These metabolites sit in an energetically unstable state, and what stands between them and a more stable configuration is often just a single chemical bond, conventionally marked with a small wavy line and called a macroergic, or high-energy, bond; breaking it stabilises the system and releases Gibbs energy that can drive an endergonic reaction elsewhere. But the atoms clustered around that bond are also involved in further covalent interactions of their own, so really the property of being high-energy belongs to a larger part of the molecule, which is why the book insists it's more correct to talk about macroergic compounds rather than macroergic bonds. Empirically, these compounds show standard Gibbs energies of hydrolysis in the range of thirty to sixty kilojoules per mole per bond, compared with under about twelve kilojoules per mole for an ordinary, non-macroergic bond. The book's own figure catalogues four structural types. The first is anhydrides, found in inorganic diphosphates and in the nucleotide triphosphates — ATP, UTP, GTP and CTP — of which ATP and ADP matter most; at physiological pH seven, ATP carries four dissociable protons and ADP three, and both form complexes with magnesium ions in the cell. The structural reason these polyphosphates are so high in energy is that phosphorus doesn't readily form double bonds and its bond to oxygen is semipolar, while negative charge keeps accumulating on the oxygen atoms, so you end up with a cluster of like charges whose mutual electrostatic repulsion destabilises the whole grouping. Other anhydride bonds the book mentions include the phosphosulfate bond in three-prime-phosphoadenosine-five-prime-phosphosulfate, and acylphosphate bonds such as carbamoylphosphate or 1,3-bisphosphoglycerate. The second type is phosphoamides, found in the so-called phosphagens — phosphocreatine in vertebrates and phosphoarginine in invertebrates — where a partial positive charge sitting on the phosphorus atom is what prevents mesomerism, the resonance stabilisation that would otherwise make the bond more ordinary and lower-energy.",
    checklist: [
      "Explained why living systems use energy-storing metabolites rather than only direct coupling",
      "Distinguished 'macroergic compound' from 'macroergic bond' and explained why",
      "Gave the ΔG⁰′ hydrolysis thresholds: 30-60 kJ·mol⁻¹ (macroergic) vs <~12 kJ·mol⁻¹ (non-macroergic)",
      "Named all four types shown in Obr. 6.1 (even if only describing types 1-2 in depth here)",
      "Described type 1 (anhydrides): ATP/ADP protons, Mg²⁺ complexes, and the phosphorus/oxygen structural explanation",
      "Gave the two extra anhydride examples: phosphosulfate and acylphosphate (carbamoylphosphate, 1,3-BPG)",
      "Described type 2 (phosphoamides): phosphocreatine vs phosphoarginine and the mesomerism-blocking mechanism"
    ]
  }
},

{
  id: "6-1-2-2",
  book: "cz",
  topicKey: "atp-and-phosphoryl-transfer",
  chapter: 6,
  section: "6.1.2",
  czTitle: "Makroergické sloučeniny — enolfosfáty, thioestery a Tab. 6.1",
  enTitle: "High-energy compounds — enol phosphates, thioesters, and the Table 6.1 energy ranking",
  cnTitle: "高能化合物——烯醇磷酸酯、硫酯与表6.1能量排序",
  pages: [132, 133],
  coverage: "full",
  coverageNote: "The bottom of p.132 ('3. Enolfosfáty' and '4. Thioestery' paragraphs) plus the top of p.133 (Tab. 6.1's full 11-row table and the two lettered conclusions a/b) verified directly. Tab. 6.1 was re-checked value-by-value against the scan, including the parenthesised '(acetylkoenzym A)' row — unlike the other ten entries, this one is not actually a phosphorylated compound (it is a thioester), so the book's own parentheses most likely flag it as included only for energetic comparison, not as a literal member of the table's titular category of 'fosforylované sloučeniny.' Obr. 6.2 and the running text of section 6.1.3, printed lower on this same p.133, belong to node 6-1-3.",
  cnNote: { topic: "十八", title: "生物能学——高能化合物 (笔记 仅凭标题/页码推测 p.103起，未直接核对)", status: "partial" },
  mustKnow: { en: "Table 6.1 is a ranking, and the ranking IS the mechanism: compounds above ATP can donate their phosphate group, compounds below it can only accept — so ATP/ADP sits in the middle as the obligatory go-between, the 'quantum' every phosphate transfer in the cell passes through. PEP sits at the very top because hydrolysing it does not just break a bond — it also releases the molecule to relax into a more stable keto form it had been locked out of, two energy releases from one step.", cn: "表 6.1 是一份排名，而这份排名本身就是机制：排在 ATP 之上的化合物能把磷酸基团让出去，排在它之下的只能接受——于是 ATP/ADP 卡在中间，成了每一次磷酸转移都必须经过的『量子』。PEP 排在最顶端，是因为水解它不只是断开一个键——还把分子从被锁住的构型里放出来，弛豫成更稳定的酮式，一步释放两份能量。" },
  summary: {
    en: "The book completes its catalogue of macroergic-compound types. Type 3, ENOL PHOSPHATES, have especially high ΔG⁰′ of hydrolysis; the example is the enol-phosphate bond in PHOSPHOENOLPYRUVATE (PEP) — its ester phosphate bond physically PREVENTS the molecule from tautomerising to the keto form, which is lower in energy and thus more stable, so hydrolysis releases not only the phosphate bond's own energy but also the energy of the subsequent, otherwise-blocked tautomerisation. Type 4, THIOESTERS, occur in the acyl derivatives of coenzyme A; here the sulfur atom prevents the MESOMERISM (resonance stabilisation) that is normal for an ordinary O-ester bond, which is why the thioester bond is comparatively high-energy. TAB. 6.1 then ranks eleven phosphorylated (plus, for comparison, one thioester) compounds by their ΔG⁰′ of hydrolysis, from phosphoenolpyruvate at -61.9 kJ·mol⁻¹ down to 1-glycerol-3-phosphate at -9.2 kJ·mol⁻¹, with an arrow spanning the table marking the DIRECTION of phosphate-group transfer — from the higher-energy compounds at the top toward the lower-energy ones at the bottom. Two conclusions follow: (a) there are two groups of phosphoric-acid derivatives — those listed ABOVE ATP, with high ΔG⁰′ of hydrolysis, which can act as phosphate DONORS, and those BELOW ATP, with low ΔG⁰′, whose organic residues act as phosphate ACCEPTORS; (b) ATP and ADP form a pair that acts as the UNIVERSAL donor/acceptor of the phosphate group and are the CENTRAL compounds of bioenergetics — ATP formation is, moreover, well regulatable, so ATP represents one form of distributing Gibbs energy through the cell, and its ΔG⁰′ of hydrolysis (-30.5 kJ·mol⁻¹ per bond) functions as a kind of 'quantum' for energetic transformations in the cell.",
    cn: "教材至此完成了对高能化合物类型的分类。第3类——烯醇磷酸酯——水解ΔG⁰′特别高；例子是磷酸烯醇丙酮酸（PEP）中的烯醇磷酸键——其酯化的磷酸键在物理上阻止了分子互变为能量更低、因而更稳定的酮式，因此水解不仅释放磷酸键本身的能量，还释放了原本被阻止的互变异构过程所蕴含的能量。第4类——硫酯——存在于辅酶A的酰基衍生物中；这里硫原子阻止了普通O-酯键通常具有的共振（离域）稳定化，这正是硫酯键相对高能的原因。表6.1随后按水解ΔG⁰′对11种磷酸化合物（外加一种硫酯以作比较）进行排序，从磷酸烯醇丙酮酸的-61.9 kJ·mol⁻¹一直到1-甘油-3-磷酸的-9.2 kJ·mol⁻¹，表格上还画有一个贯穿全表的箭头，标示磷酸基团转移的方向——从表格上方能量较高的化合物转向下方能量较低的化合物。由此得出两条结论：（a）磷酸衍生物分为两组——列在ATP上方的，水解ΔG⁰′较高，可作为磷酸基团的供体；列在ATP下方的，ΔG⁰′较低，其有机残基则充当磷酸基团的受体；（b）ATP与ADP组成一对，起着磷酸基团通用供体/受体的作用，是生物能学的中心化合物——此外ATP的生成还具有良好的可调控性，因此ATP代表着细胞内Gibbs自由能分配的一种形式，其水解ΔG⁰′（每键-30.5 kJ·mol⁻¹）相当于细胞内能量转化的一种「量子」。"
  },
  points: [
    { cz: "typ 3: enolfosfáty — proč má PEP tak vysoké ΔG⁰′", en: "TYPE 3, ENOL PHOSPHATES: these compounds show ESPECIALLY high ΔG⁰′ of hydrolysis. The example given is the enol-phosphate bond of PHOSPHOENOLPYRUVATE (PEP). Mechanistically, the ester phosphate bond PREVENTS formation of the KETO form of the molecule, which is lower in energy (and so more stable) than the enol form the phosphate locks in place — hydrolysing off the phosphate releases the compound to relax into that more stable keto form, which is the structural reason PEP's hydrolysis is so strongly exergonic.", cn: "第3类——烯醇磷酸酯：这类化合物的水解ΔG⁰′特别高。教材给出的例子是磷酸烯醇丙酮酸（PEP）中的烯醇磷酸键。从机制上看，这个酯化的磷酸键阻止了分子转变为酮式——酮式的能量比磷酸「锁定」的烯醇式更低（因而更稳定）——水解掉磷酸后，分子便能松弛为更稳定的酮式，这正是PEP水解如此强烈放能的结构性原因。" },
    { cz: "typ 4: thioestery — síra brání mezomerii", en: "TYPE 4, THIOESTERS: these bonds occur in the ACYL DERIVATIVES OF COENZYME A (shorthand CoA-S-CO-R, e.g. acetyl-CoA). The SULFUR atom prevents the MESOMERISM (resonance delocalisation between the carbonyl and the ester oxygen) that is normal for an ordinary O-ester bond — without that resonance stabilisation, the thioester bond retains more of its free energy and hydrolyses with a comparatively large ΔG⁰′.", cn: "第4类——硫酯：这类键存在于辅酶A的酰基衍生物中（简写为CoA-S-CO-R，例如乙酰辅酶A）。硫原子阻止了普通O-酯键中通常存在的、羰基与酯氧之间的共振（离域）——由于缺少这种共振稳定化，硫酯键保留了更多自由能，水解时ΔG⁰′相对较大。" },
    { cz: "Tab. 6.1 — kompletní žebříček ΔG⁰′ hydrolýzy", en: "TAB. 6.1 ranks phosphorylated compounds (plus, in parentheses, the thioester acetyl-CoA for comparison) by ΔG⁰′ of hydrolysis, most negative first, all in kJ·mol⁻¹: phosphoenolpyruvate -61.9, 1,3-bisphosphoglycerate -49.3, creatine phosphate -43.1, acetylphosphate -42.2, inorganic diphosphate -33.5, (acetyl-CoA) -31.4, ATP→ADP+Pᵢ -30.5, glucose-1-phosphate -20.9, fructose-6-phosphate -15.9, glucose-6-phosphate -13.8, 1-glycerol-3-phosphate -9.2. A single arrow drawn down the whole table marks the DIRECTION OF Pᵢ TRANSFER, from the high-energy compounds at the top toward the low-energy ones at the bottom.", cn: "表6.1按水解ΔG⁰′对磷酸化合物（外加括号中的硫酯乙酰辅酶A以作比较）进行排序，从最负值开始，单位均为kJ·mol⁻¹：磷酸烯醇丙酮酸-61.9，1,3-二磷酸甘油酸-49.3，磷酸肌酸-43.1，乙酰磷酸-42.2，无机二磷酸-33.5，（乙酰辅酶A）-31.4，ATP→ADP+Pᵢ -30.5，葡萄糖-1-磷酸-20.9，果糖-6-磷酸-15.9，葡萄糖-6-磷酸-13.8，1-甘油-3-磷酸-9.2。表格上贯穿全表画有一个箭头，标示Pᵢ转移的方向：从表格上方的高能化合物指向下方的低能化合物。" },
    { cz: "závěr a) — dvě skupiny derivátů kyseliny fosforečné", en: "Conclusion (a) drawn from Tab. 6.1: biochemical derivatives of phosphoric acid fall into TWO groups relative to ATP's own position in the table — compounds ABOVE ATP, with high ΔG⁰′ of hydrolysis, can serve as DONORS of the phosphate group, while compounds BELOW ATP, with low ΔG⁰′, have organic residues that instead act as phosphate ACCEPTORS.", cn: "由表6.1得出结论（a）：磷酸的生化衍生物按其在表中相对于ATP的位置分为两组——列在ATP上方、水解ΔG⁰′较高的化合物，可充当磷酸基团的供体；列在ATP下方、ΔG⁰′较低的化合物，其有机残基则充当磷酸基团的受体。" },
    { cz: "závěr b) — ATP/ADP jako ústřední dvojice, ATP = 'kvantum'", en: "Conclusion (b): ATP and ADP together form the pair that acts as the UNIVERSAL donor and acceptor of the phosphate group, making them the CENTRAL compounds of bioenergetics; ATP's formation in the organism is also well REGULATABLE. ATP thus represents one of the forms in which Gibbs energy is distributed around the cell, and its ΔG⁰′ of hydrolysis, -30.5 kJ·mol⁻¹ per bond, functions as a kind of 'QUANTUM' for energetic transformations in the cell — the book's own word, echoing the 'quantized' energy doses described for catabolism/anabolism in the next section (6.1.3).", cn: "结论（b）：ATP与ADP共同组成一对，起着磷酸基团通用供体和受体的作用，是生物能学的中心化合物；此外，机体内ATP的生成还具有良好的可调控性。因此ATP代表着细胞内Gibbs自由能分配的一种形式，其水解ΔG⁰′（每键-30.5 kJ·mol⁻¹）相当于细胞内能量转化的一种「量子」——这是教材自己的用词，与下一节（6.1.3）中描述分解/合成代谢时「量子化」的能量剂量相呼应。" },
    { cz: "'(acetylkoenzym A)' v závorce — proč", en: "Table 6.1 places '(acetylkoenzym A)' uniquely in parentheses among its eleven rows. Every other entry is an actual phosphorylated compound, which is the table's own stated subject ('Hodnoty ΔG⁰′ pro hydrolýzu NĚKTERÝCH FOSFORYLOVANÝCH SLOUČENIN'); acetyl-CoA is a thioester, not a phosphate ester, so the parentheses most plausibly flag that it is included only for ENERGETIC COMPARISON against the phosphorylated series, not as a literal member of the table's own category.", cn: "表6.1的11行数据中，只有「（乙酰辅酶A）」一项加了括号。其余各行都是真正的磷酸化合物，这正是表格标题所述的主题（「若干磷酸化合物水解的ΔG⁰′数值」）；而乙酰辅酶A是硫酯，并非磷酸酯，因此这个括号最可能是在提示：它被列入只是为了与磷酸化合物系列作能量比较，而并非真正属于表格自身所定义的那一类别。" }
  ],
  terms: [
    { cz: "enolfosfát (fosfoenolpyruvát)", en: "enol phosphate (phosphoenolpyruvate, PEP)", cn: "烯醇磷酸酯（磷酸烯醇丙酮酸，PEP）", def_en: "A high-energy phosphate ester of an enol; hydrolysis is strongly exergonic because it releases the molecule to tautomerise to the more stable keto form.", def_cn: "烯醇的高能磷酸酯；水解强烈放能，因为水解后分子得以互变为更稳定的酮式。" },
    { cz: "thioester (acetylkoenzym A)", en: "thioester (acetyl-CoA)", cn: "硫酯（乙酰辅酶A）", def_en: "A high-energy sulfur-linked acyl bond found in CoA derivatives; the sulfur atom blocks the resonance stabilisation normal for O-esters.", def_cn: "存在于辅酶A衍生物中、以硫连接的高能酰基键；硫原子阻止了O-酯通常具有的共振稳定化。" },
    { cz: "Tab. 6.1 — směr přenosu Pi (donor vs akceptor)", en: "Tab. 6.1's donor/acceptor logic", cn: "表6.1的供体/受体逻辑", def_en: "Compounds ranked above ATP by ΔG⁰′ of hydrolysis act as phosphate donors; those ranked below act as phosphate acceptors, with Pi transfer flowing from higher to lower ΔG⁰′.", def_cn: "按水解ΔG⁰′排在ATP上方的化合物充当磷酸供体；排在下方的充当磷酸受体，Pi的转移方向是从ΔG⁰′较高流向较低。" },
    { cz: "ATP jako 'kvantum' Gibbsovy energie", en: "ATP as a Gibbs-energy 'quantum'", cn: "ATP作为Gibbs自由能的「量子」", def_en: "The book's characterisation of ATP's -30.5 kJ·mol⁻¹ hydrolysis ΔG⁰′ as the basic discrete unit of energy exchange in the cell.", def_cn: "教材将ATP水解ΔG⁰′（-30.5 kJ·mol⁻¹）表述为细胞内能量交换的基本离散单位。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does phosphoenolpyruvate (PEP) have such an unusually large (negative) ΔG⁰′ of hydrolysis?",
      q_cn: "为什么磷酸烯醇丙酮酸（PEP）的水解ΔG⁰′异常大（负值）？",
      options: [
        "Because its ester phosphate bond prevents the molecule from tautomerising to the more stable keto form, so hydrolysis releases both the bond energy and the blocked tautomerisation energy",
        "Because the sulfur atom in its ester bond blocks the resonance delocalisation an ordinary O-ester enjoys, so the bond retains more of its free energy right up until the moment it is hydrolysed",
        "Because PEP carries more dissociable protons at pH 7 than ATP and ADP do, and every extra proton adds to the free energy released when its phosphate group is cleaved",
        "Because PEP's phosphate is bound to a nitrogen atom rather than to oxygen, and a partial positive charge on the phosphorus prevents the molecule from stabilising by mesomerism"
      ],
      answer: 0,
      optionRefs: { 2: "6-1-2-1", 3: "6-1-2-1" },
      optionNotes: {
        1: { en: "That is the type-4 thioester mechanism, which belongs to the acyl derivatives of coenzyme A. PEP contains no sulfur at all; its phosphate is an oxygen ester.", cn: "那是第 4 类 thioester 的机制，属于 coenzyme A 的酰基衍生物。PEP 根本不含硫，它的磷酸是氧酯。" },
        2: { en: "The proton counts the book gives — four for ATP and three for ADP at pH 7 — are a property of those nucleotides, not a measure of hydrolysis energy, and no such count is given for PEP.", cn: "教材给出的可解离质子数（pH 7 时 ATP 四个、ADP 三个）是这两个核苷酸的性质，并不是水解能量的度量，教材也没有给 PEP 数过质子。" },
        3: { en: "That is the type-2 phosphoamide mechanism of the phosphagens, phosphocreatine and phosphoarginine. PEP is a type-3 enol phosphate, with the phosphate esterified to oxygen.", cn: "那是第 2 类 phosphoamide、也就是 phosphocreatine 和 phosphoarginine 的机制。PEP 属于第 3 类 enol phosphate，磷酸酯化在氧上。" }
      },
      why_en: "The book explains that PEP's ester phosphate bond prevents formation of the lower-energy, more stable keto form; hydrolysis releases the compound to relax into that keto form, adding that tautomerisation energy on top of ordinary phosphate-bond hydrolysis energy. PEP contains no sulfur (that mechanism belongs to thioesters, type 4), no proton-count comparison is made in the book, and PEP's phosphate is an oxygen ester, not a phosphoamide.",
      why_cn: "教材解释道，PEP酯化的磷酸键阻止了能量更低、更稳定的酮式的形成；水解后分子得以松弛为酮式，这部分互变异构能量叠加在普通磷酸键水解能量之上。PEP不含硫（那是第4类硫酯的机制），教材也没有比较质子数，且PEP的磷酸是氧酯而非磷酰胺。"
    },
    {
      type: "mcq",
      q_en: "According to Tab. 6.1's ranking of ΔG⁰′ of hydrolysis, which compound sits at the very top (most negative, highest-energy) of the list?",
      q_cn: "根据表6.1按水解ΔG⁰′排列的顺序，排在表格最上方（负值最大、能量最高）的是哪种化合物？",
      options: [
        "ATP → ADP + Pᵢ, at −30.5 kJ·mol⁻¹",
        "1-glycerol-3-phosphate, at −9.2 kJ·mol⁻¹",
        "Phosphoenolpyruvate, at −61.9 kJ·mol⁻¹",
        "Glucose-6-phosphate, at −13.8 kJ·mol⁻¹"
      ],
      answer: 2,
      optionRefs: { 3: "6-1-1" },
      optionNotes: {
        0: { en: "ATP sits in the MIDDLE of Tab. 6.1, and that is the table's whole point: everything above it can donate a phosphate group, everything below it can only accept one. Its −30.5 kJ·mol⁻¹ is the cell's energy quantum.", cn: "ATP 位于表 6.1 的中间，而这正是整张表的用意：排在它上面的都能给出磷酸基，排在它下面的只能接受。它的 −30.5 kJ·mol⁻¹ 就是细胞的能量「量子」。" },
        1: { en: "This is the other end of the table — its least negative entry, at the very bottom. Sitting below ATP, its organic residue can only ACCEPT a phosphate group, never donate one.", cn: "这是表格的另一端——负值最小的一项，排在最底下。位于 ATP 之下，它的有机残基只能接受磷酸基，绝不会给出。" },
        3: { en: "−13.8 kJ·mol⁻¹ is near the bottom of the table, on the acceptor side; it is the same magnitude that appears as the +13.8 kJ·mol⁻¹ cost of phosphorylating glucose in the coupling example.", cn: "−13.8 kJ·mol⁻¹ 靠近表格底部，属于受体一侧；它和偶联例子里葡萄糖磷酸化那 +13.8 kJ·mol⁻¹ 的开销是同一个数值。" }
      },
      why_en: "Phosphoenolpyruvate heads Tab. 6.1 at −61.9 kJ·mol⁻¹, the most negative (highest-energy) value in the table — consistent with its being singled out as an especially high-energy enol phosphate in the running text. ATP sits roughly in the middle at −30.5; glucose-6-phosphate and 1-glycerol-3-phosphate sit near the bottom, among the lowest-energy, acceptor-side compounds.",
      why_cn: "磷酸烯醇丙酮酸在表6.1中位居首位，为-61.9 kJ·mol⁻¹，是表中负值最大（能量最高）的数值——这与正文中将其点名为特别高能的烯醇磷酸酯相一致。ATP大致居中，为-30.5；葡萄糖-6-磷酸和1-甘油-3-磷酸则位于表格靠后的位置，属于能量最低、位于受体一侧的化合物。"
    },
    {
      type: "mcq",
      q_en: "What structural feature specifically explains why the thioester bond in acetyl-CoA is high-energy?",
      q_cn: "乙酰辅酶A中的硫酯键为什么是高能键？其结构原因specifically是什么？",
      options: [
        "The sulfur atom forms an unusually strong double bond to the carbonyl carbon, and hydrolysis sets that stored energy free",
        "The acyl group is locked out of the more stable keto form until the thioester bond is finally cleaved",
        "Coenzyme A carries a polyphosphate chain whose like charges repel one another, exactly as they do in ATP",
        "The sulfur atom prevents the mesomerism (resonance delocalisation) that is normal for an ordinary O-ester bond"
      ],
      answer: 3,
      optionRefs: { 0: "6-1-2-1", 2: "6-1-2-1" },
      optionNotes: {
        0: { en: "High-energy never means a strong bond in this book; it means a molecule held in an unstable state that cleaving one bond relieves.", cn: "在本书里「高能」从来不是指键强，而是指分子被卡在不稳定状态，断掉一个键正好解除这种不稳定。" },
        1: { en: "Blocked tautomerisation to the keto form is the type-3 enol-phosphate mechanism, the reason phosphoenolpyruvate heads Tab. 6.1 — not the reason a thioester is high-energy.", cn: "被阻断的酮式互变异构是第 3 类 enol phosphate 的机制，也是 phosphoenolpyruvate 高居表 6.1 之首的原因——不是 thioester 高能的原因。" },
        2: { en: "Charge repulsion along a polyphosphate chain is the type-1 anhydride mechanism of ATP and ADP; the thioester bond is a C-S bond, and its energy comes from blocked resonance.", cn: "多磷酸链上的电荷互斥是 ATP、ADP 所属第 1 类酸酐的机制；thioester 是 C-S 键，能量来自共振被阻断。" }
      },
      why_en: "The book states plainly that the sulfur atom in a thioester prevents the mesomerism that is common in O-ester bonds — without that resonance delocalisation, more free energy is retained in the bond, which is released on hydrolysis. The other three options are not mechanisms the book describes.",
      why_cn: "教材明确指出，硫酯中的硫原子阻止了O-酯键中常见的共振（离域）——由于缺少这种离域，键中保留了更多自由能，水解时得以释放。其余三个选项都不是教材描述的机制。"
    },
    {
      type: "short",
      q_en: "What are the two conclusions the book draws from Tab. 6.1 about ATP's position among phosphorylated compounds?",
      q_cn: "教材从表6.1中就ATP在磷酸化合物中的位置得出了哪两点结论？",
      accept: ["donor", "acceptor", "universal", "central", "quantum", "regulat", "供体", "受体", "通用", "中心", "量子"],
      answer_en: "(a) Phosphoric-acid derivatives split into two groups relative to ATP's position in the table: those above it (high ΔG⁰′) act as phosphate donors, those below it (low ΔG⁰′) act as phosphate acceptors. (b) ATP and ADP form the pair acting as the universal donor/acceptor of the phosphate group and are the central compounds of bioenergetics; ATP formation is well regulatable, and its hydrolysis ΔG⁰′ (−30.5 kJ·mol⁻¹) works as a 'quantum' for the cell's energy transformations.",
      answer_cn: "（a）磷酸衍生物按其在表中相对于ATP的位置分为两组：位于ATP上方（ΔG⁰′较高）的充当磷酸供体，位于ATP下方（ΔG⁰′较低）的充当磷酸受体。（b）ATP与ADP组成一对，充当磷酸基团的通用供体/受体，是生物能学的中心化合物；ATP的生成具有良好的可调控性，其水解ΔG⁰′（-30.5 kJ·mol⁻¹）相当于细胞能量转化的「量子」。"
    }
  ],
  oral: {
    q_en: "Describe the enol-phosphate and thioester compound types with their structural explanations, then explain what Table 6.1 shows about ATP's central position in cellular bioenergetics.",
    q_cn: "描述烯醇磷酸酯和硫酯这两种化合物类型及其结构解释，然后说明表6.1如何体现ATP在细胞生物能学中的中心地位。",
    model_en: "Finishing off the catalogue of macroergic compound types, the third is enol phosphates, which show especially high standard Gibbs energies of hydrolysis; the example is phosphoenolpyruvate, where the phosphate ester bond actually prevents the molecule from tautomerising into its keto form, which would be lower in energy and therefore more stable. Once you hydrolyse off the phosphate, the molecule is free to relax into that more stable keto form, so you get both the ordinary bond-hydrolysis energy and the energy of that otherwise-blocked tautomerisation, which is why phosphoenolpyruvate tops the whole ranking. The fourth type is thioesters, found in the acyl derivatives of coenzyme A, where it's a sulfur atom rather than oxygen that links the acyl group; that sulfur prevents the resonance delocalisation, or mesomerism, that's normal for an ordinary oxygen ester bond, so the bond keeps more of its free energy in reserve. The book then lays all of this out quantitatively in Table 6.1, ranking phosphorylated compounds, plus acetyl-CoA in parentheses for comparison, by their standard Gibbs energy of hydrolysis: phosphoenolpyruvate at minus 61.9 kilojoules per mole at the very top, then 1,3-bisphosphoglycerate, creatine phosphate, acetylphosphate, inorganic diphosphate, acetyl-CoA, and then ATP going to ADP plus phosphate at minus 30.5, roughly in the middle of the table, followed by glucose-1-phosphate, fructose-6-phosphate, glucose-6-phosphate, and finally 1-glycerol-3-phosphate at just minus 9.2 at the bottom. An arrow drawn down the whole table shows phosphate transfer running from the high-energy compounds at the top toward the low-energy ones at the bottom, and this is exactly why ATP sits where it does: compounds above it in the table, with higher hydrolysis energies, can act as phosphate donors that phosphorylate ADP to ATP, while compounds below it, with lower hydrolysis energies, act as acceptors that ATP itself can phosphorylate. That makes ATP and ADP together the universal donor-acceptor pair and the central compounds of the whole bioenergetic system, and because ATP formation in the cell is also well regulated, ATP effectively represents one packaged form of distributing Gibbs energy, with its own hydrolysis energy of minus 30.5 kilojoules per mole acting as a kind of basic quantum for energetic transformations throughout the cell.",
    checklist: [
      "Described type 3 (enol phosphates): PEP example and the keto-tautomer-blocking mechanism",
      "Described type 4 (thioesters): acetyl-CoA and the sulfur/mesomerism-blocking mechanism",
      "Recited at least four or five Tab. 6.1 values in correct relative order",
      "Explained the Pi-transfer-direction arrow (high to low ΔG⁰′, top to bottom of the table)",
      "Stated conclusion (a): above-ATP compounds are donors, below-ATP compounds are acceptors",
      "Stated conclusion (b): ATP/ADP as the universal, central, regulatable donor/acceptor pair",
      "Explained ATP's −30.5 kJ·mol⁻¹ as a 'quantum' of cellular energy exchange"
    ]
  }
},

{
  id: "6-1-3",
  book: "cz",
  topicKey: "biochemical-reaction-logic",
  chapter: 6,
  section: "6.1.3",
  czTitle: "Katabolické a anabolické děje",
  enTitle: "Catabolic and anabolic processes",
  cnTitle: "分解代谢与合成代谢过程",
  pages: [133, 134],
  coverage: "full",
  coverageNote: "Obr. 6.2 (the lower half of p.133, printed a page ahead of the text that explains it) plus the full running text of section 6.1.3 at the top of p.134 (the three lettered reasons a/b/c for why catabolism/anabolism run stepwise) verified directly — the section's own opening sentence on p.134 ('lze rozdělit na pochody katabolické a anabolické (obr. 6.2)') explicitly cross-references the figure printed on the previous page, so both are treated as one node. Obr. 6.2 was examined closely to confirm every box label; a re-check found that the pyruvát→acetylkoenzym A arrow uses the SAME double-stroke glyph as every other arrow in the diagram (not a uniquely one-way arrow as an earlier pass claimed — see the correction note on the 'fáze II' point below). Glycerol's entry point was also re-checked: the diagram's curved connector line actually terminates at fosfoenolpyruvát (PEP), one step later than glyceraldehyd-3-fosfát. Section 6.2/6.2.1, beginning immediately below on the same p.134, belongs to the next node.",
  cnNote: { topic: "十七", title: "代谢总论 (笔记 仅凭标题/页码推测 p.99起，未直接核对)", status: "partial" },
  mustKnow: { en: "Sugars, fats and most amino acids all funnel down to one single molecule, acetyl-CoA, before they are oxidised — so however different the starting nutrient, the cell only needs to build one oxidative machine, the citrate cycle, to burn all three. And splitting metabolism into many small steps is not fussiness: each step is a small, usable dose of energy, and it lets catabolism and anabolism be regulated independently, because they run on different enzymes in different cell compartments.", cn: "糖、脂肪和大多数氨基酸在被氧化之前，都会先汇成同一个分子——乙酰辅酶A——所以不管进来的营养物有多不同，细胞只需要造一套氧化机器（柠檬酸循环）就能把三者都烧掉。把代谢拆成许多小步骤也不是繁琐：每一步释放的都是一小份、用得上的能量，而且这样才能让分解代谢和合成代谢分开调控——因为它们用的是不同的酶、发生在细胞的不同区室。" },
  summary: {
    en: "All transformations of substances in living systems — metabolic processes — divide into CATABOLIC and ANABOLIC processes (Obr. 6.2). Both proceed STEPWISE, as a series of successive, enzymatically catalysed reactions, and the book gives three reasons this fine subdivision is economical: (a) both production and consumption of Gibbs energy are effectively 'QUANTIZED' — individual energy doses roughly match individual partial reactions; (b) individual metabolites can be drawn from or fed back into several different metabolic pathways, keeping their steady-state concentration replenished from varied sources; (c) such a finely divided metabolism is REGULATABLE (ch. 10.2), and catabolism/anabolism can additionally be regulated independently of each other because they use DIFFERENT enzymatic machinery and are localised in DIFFERENT cell compartments. Obr. 6.2 diagrams this as three phases. PHASE I is reversible interconversion between macromolecules (fats, polysaccharides, proteins) and their building blocks (fatty acids+glycerol, hexoses+pentoses, amino acids). PHASE II funnels those building blocks toward a single hub: hexoses/pentoses run through glyceraldehyde-3-phosphate, phosphoenolpyruvate and pyruvate; the glycerol portion of fat joins this route near PHOSPHOENOLPYRUVATE (not glyceraldehyde-3-phosphate) while fatty acids and part of the amino acid pool bypass more directly toward the hub; pyruvate then converts into ACETYL-CoA (drawn with the same double-headed arrow glyph as the rest of the diagram — a check for a uniquely one-way arrow at this step found none). PHASE III oxidises acetyl-CoA completely in the CITRATE CYCLE (citrate→isocitrate→2-oxoglutarate→succinate→fumarate→malate→oxaloacetate→back to citrate), yielding the final waste products H₂O and CO₂.",
    cn: "生命系统中物质的一切转化——即代谢过程——都分为分解代谢与合成代谢两类（图6.2）。二者都是逐步进行的，由一系列连续的、酶催化的反应组成，教材给出了三点理由说明为何这种精细的分步是「经济的」：（a）Gibbs自由能的产生与消耗实际上都是「量子化」的——单个能量剂量大致对应单个分步反应；（b）单个代谢物可以被多条不同的代谢途径抽用，也可以从不同来源被补充回去，从而维持其稳态浓度；（c）这种精细划分的代谢是可调控的（第10.2节），而且分解代谢与合成代谢还可以借助各自不同的酶系统、以及分别定位在细胞不同区室这一点，实现彼此独立的调控。图6.2将其描绘为三个阶段。第Ⅰ阶段是大分子（脂肪、多糖、蛋白质）与其构件单位（脂肪酸+甘油、己糖+戊糖、氨基酸）之间的可逆互变。第Ⅱ阶段将这些构件单位汇集到一个共同枢纽：己糖/戊糖经甘油醛-3-磷酸、磷酸烯醇丙酮酸、丙酮酸；脂肪中的甘油部分在靠近磷酸烯醇丙酮酸（而非甘油醛-3-磷酸）处汇入，而脂肪酸及部分氨基酸库则更直接地绕道汇入枢纽；丙酮酸随后转化为乙酰辅酶A（该步骤所用箭头与图中其余箭头样式相同，均为双向）。第Ⅲ阶段中，乙酰辅酶A在柠檬酸循环中被完全氧化（柠檬酸→异柠檬酸→2-氧戊二酸→琥珀酸→延胡索酸→苹果酸→草酰乙酸→再回到柠檬酸），最终产物为H₂O和CO₂。"
  },
  points: [
    { cz: "katabolismus vs anabolismus (obr. 6.2)", en: "All transformations of substances in living systems, i.e. metabolic processes, can be divided into CATABOLIC and ANABOLIC processes — the subject of Obr. 6.2, which the book's own text on this page explicitly cross-references.", cn: "生命系统中物质的一切转化，即代谢过程，都可分为分解代谢与合成代谢——这正是图6.2的主题，本页正文明确引用了该图。" },
    { cz: "postupné, enzymově katalyzované kroky — proč je to 'ekonomické'", en: "Catabolism and anabolism both proceed STEPWISE, as a chain of successive, enzyme-catalysed reactions. Breaking both processes down into many small steps is described as ECONOMICAL, for three stated reasons.", cn: "分解代谢和合成代谢都是逐步进行的，由一连串连续的、酶催化的反应组成。教材指出，将二者都分解为许多小步骤是「经济的」，并给出了三点理由。" },
    { cz: "a) 'kvantování' tvorby a spotřeby energie", en: "Reason (a): both the PRODUCTION and the CONSUMPTION of Gibbs energy are, in effect, 'QUANTIZED' — individual doses of Gibbs energy roughly correspond to individual partial reactions of the catabolic and anabolic processes, rather than being released or demanded in one large, hard-to-handle burst.", cn: "理由（a）：Gibbs自由能的产生和消耗实际上都是「量子化」的——单个能量剂量大致对应分解代谢和合成代谢中的单个分步反应，而不是一次性释放或需求一大笔难以处理的能量。" },
    { cz: "b) sdílené metabolity, doplňování zásoby z různých zdrojů", en: "Reason (b): individual metabolites (pathway intermediates) can be DRAWN DOWN and used by several different metabolic routes, or their supply can be REPLENISHED to maintain a steady-state concentration from a variety of different sources — a flexibility only possible because the pathway is built from many discrete, shared intermediates.", cn: "理由（b）：单个代谢物（途径中间体）可以被多条不同的代谢路径抽取利用，也可以从多种不同来源得到补充，从而维持其稳态浓度——这种灵活性正是因为途径由许多离散、共享的中间体构成才得以实现。" },
    { cz: "c) regulovatelnost — odlišné enzymy, odlišné kompartmenty", en: "Reason (c): such a finely segmented metabolism is REGULATABLE (cross-referenced forward to ch. 10.2). A further, independent way to regulate catabolism and anabolism separately is that these two directions use a DIFFERENT enzymatic apparatus from one another and are LOCALISED in different parts/compartments of the cell.", cn: "理由（c）：这种精细分割的代谢是可调控的（前瞻引用第10.2节）。另一种能对分解代谢和合成代谢分别独立调控的方式是：这两个方向使用彼此不同的酶系统，并且定位在细胞的不同部位/区室中。" },
    { cz: "fáze I — makromolekuly ⇌ stavební jednotky", en: "Obr. 6.2, PHASE I: fats, polysaccharides and proteins interconvert (double-headed arrows, i.e. both breakdown and resynthesis) with their respective building blocks — fatty acids plus glycerol, hexoses plus pentoses, and amino acids.", cn: "图6.2第Ⅰ阶段：脂肪、多糖和蛋白质分别与其构件单位——脂肪酸加甘油、己糖加戊糖、氨基酸——之间以双向箭头互变（即既有分解也有重新合成）。" },
    { cz: "fáze II — společná dráha ke acetylkoenzymu A", en: "PHASE II funnels the building blocks toward a single hub, ACETYL-CoA. Hexoses/pentoses pass through the shared sequence glyceraldehyde-3-phosphate ⇌ phosphoenolpyruvate ⇌ pyruvate; the diagram shows glycerol joining this route near PHOSPHOENOLPYRUVATE (not glyceraldehyde-3-phosphate — corrected after a zoomed re-check of the connector line's actual endpoint), while fatty acids (and, per the diagram's separate arrows, part of the amino acid pool) bypass more directly toward the acetyl-CoA/pyruvate end of the route. CORRECTION: an earlier pass claimed the final arrow of this phase, pyruvate→acetyl-CoA, was drawn one-way only, unlike the rest of the figure's double-headed arrows — a zoomed re-check found this is NOT what the diagram shows; that arrow uses the identical double-stroke glyph as its neighbours, so Obr. 6.2 does not itself flag this step as irreversible (even though pyruvate dehydrogenase genuinely is irreversible as a matter of standard biochemistry, that fact isn't what this particular figure is encoding).", cn: "第Ⅱ阶段将各构件单位汇集到一个共同枢纽——乙酰辅酶A。己糖/戊糖经共同的序列甘油醛-3-磷酸⇌磷酸烯醇丙酮酸⇌丙酮酸；图中显示甘油在靠近磷酸烯醇丙酮酸（而非甘油醛-3-磷酸——经放大重新核对连接线的实际终点后订正）处汇入这条路线，而脂肪酸（以及图中另有箭头显示的部分氨基酸库）则更直接地绕道汇入丙酮酸/乙酰辅酶A一端。订正：此前一版内容曾声称这一阶段的最后一步——丙酮酸→乙酰辅酶A——画成了唯一的单向箭头，不同于图中其余双向箭头；经放大重新核对，图中并非如此——该箭头与相邻箭头使用完全相同的双向双线画法，因此图6.2本身并未以图示方式标示这一步不可逆（尽管丙酮酸脱氢酶催化的这一步在标准生物化学事实上确实不可逆，但这并非本图所要表达的内容）。" },
    { cz: "fáze III — citrátový cyklus → H₂O + CO₂", en: "PHASE III: acetyl-CoA enters the CITRATE CYCLE, cycling through citrate→isocitrate→2-oxoglutarate→succinate→fumarate→malate→oxaloacetate and back to citrate (combining with a fresh acetyl-CoA each turn), with the cycle's final waste products shown converging at the bottom of the diagram as H₂O and CO₂.", cn: "第Ⅲ阶段：乙酰辅酶A进入柠檬酸循环，依次经柠檬酸→异柠檬酸→2-氧戊二酸→琥珀酸→延胡索酸→苹果酸→草酰乙酸，再回到柠檬酸（每一圈都与新的乙酰辅酶A结合），循环的最终废物H₂O和CO₂汇聚显示在图的底部。" }
  ],
  terms: [
    { cz: "katabolismus", en: "catabolism", cn: "分解代谢", def_en: "The stepwise, enzyme-catalysed breakdown of macromolecules and their building blocks, ultimately to CO2 and H2O via the citrate cycle.", def_cn: "大分子及其构件单位逐步、经酶催化的分解过程，最终经柠檬酸循环生成CO2和H2O。" },
    { cz: "anabolismus", en: "anabolism", cn: "合成代谢", def_en: "The stepwise, enzyme-catalysed synthesis of macromolecules from building blocks, running via different enzymes and cell compartments than catabolism.", def_cn: "由构件单位逐步、经酶催化合成大分子的过程，所用的酶和细胞区室与分解代谢不同。" },
    { cz: "třífázový model odbourávání živin (obr. 6.2)", en: "three-phase model of nutrient breakdown (Obr. 6.2)", cn: "营养物质分解的三阶段模型（图6.2）", def_en: "Phase I: macromolecules ⇌ building blocks; Phase II: building blocks → acetyl-CoA via glyceraldehyde-3-P/PEP/pyruvate; Phase III: acetyl-CoA oxidised in the citrate cycle to H2O + CO2.", def_cn: "第Ⅰ阶段：大分子⇌构件单位；第Ⅱ阶段：构件单位经甘油醛-3-磷酸/PEP/丙酮酸生成乙酰辅酶A；第Ⅲ阶段：乙酰辅酶A在柠檬酸循环中氧化为H2O+CO2。" },
    { cz: "acetylkoenzym A jako metabolický uzel", en: "acetyl-CoA as the metabolic hub", cn: "乙酰辅酶A作为代谢枢纽", def_en: "The convergence point of Phase II where carbohydrate-, fat-, and amino-acid-derived carbon skeletons meet before entering the citrate cycle in Phase III.", def_cn: "第Ⅱ阶段的汇合点，来自糖类、脂肪和氨基酸的碳骨架在此汇合，然后在第Ⅲ阶段进入柠檬酸循环。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which THREE reasons does the book give for why catabolism and anabolism proceeding stepwise, through many small enzyme-catalysed reactions, is 'economical'?",
      q_cn: "教材给出了哪三点理由，说明分解代谢和合成代谢通过许多酶催化的小步骤逐步进行是「经济的」？",
      options: [
        "Quantized energy doses; shared metabolites replenishable from multiple sources; regulatability via distinct enzymes/compartments",
        "Faster overall reaction rates; fewer enzymes needed per pathway; and a smaller demand for coenzymes at each step",
        "Energy released in one large burst; each metabolite confined to a single pathway; the same enzymes used in both directions",
        "Avoiding heat production altogether; holding the cell at a true static equilibrium; keeping every intermediate at one fixed concentration"
      ],
      answer: 0,
      optionRefs: { 3: "6-1" },
      optionNotes: {
        1: { en: "Speed and enzyme economy are not among the three reasons. The book's are: energy in doses matching single steps, metabolites shared between pathways, and regulatability.", cn: "速度和「省酶」都不在这三条理由里。教材给的是：能量按单个步骤分成小份、代谢物在多条途径之间共享、以及整个代谢可被调控。" },
        2: { en: "Each clause is the exact negation of one of the three reasons: energy is quantized into step-sized doses, intermediates are shared between routes, and catabolism and anabolism run on different enzymes in different compartments.", cn: "三个分句正好逐条否定了那三条理由：能量被「量子化」成与单步匹配的小份、中间产物在多条路线之间共用、分解与合成代谢使用不同的酶并分处不同区室。" },
        3: { en: "Heat is where the chapter's energy flow ENDS, not something metabolism is built to avoid, and the cell's equilibrium is explicitly dynamic or steady-state, never static.", cn: "热是本章能流图的终点，而不是代谢要设法避免的东西；而且细胞的平衡教材明说是动态的、稳态的，绝不是静态平衡。" }
      },
      why_en: "The book explicitly lists three reasons: (a) production/consumption of Gibbs energy is effectively quantized, matching individual reaction steps; (b) metabolites can be drawn from or replenish several pathways, keeping steady-state pool concentrations from varied sources; (c) such segmented metabolism is regulatable, further aided by catabolism/anabolism using different enzymes and cell compartments. None of the other options are reasons the book gives.",
      why_cn: "教材明确列出三点理由：（a）Gibbs自由能的产生/消耗实际上是量子化的，与单个反应步骤相匹配；（b）代谢物可被多条途径抽用或补充，从不同来源维持稳态库浓度；（c）这种分割的代谢是可调控的，且分解/合成代谢使用不同的酶和细胞区室进一步助益于此。其余选项都不是教材给出的理由。"
    },
    {
      type: "mcq",
      q_en: "In Obr. 6.2's Phase II, where does glycerol (from fat breakdown) join the main hexose/pentose route toward acetyl-CoA?",
      q_cn: "在图6.2第Ⅱ阶段中，甘油（来自脂肪分解）在何处汇入通向乙酰辅酶A的己糖/戊糖主路线？",
      options: [
        "At glyceraldehyde-3-phosphate, the first intermediate of the shared hexose route",
        "At phosphoenolpyruvate (PEP), one step later than glyceraldehyde-3-phosphate",
        "Directly at pyruvate, the last intermediate before the acetyl-CoA hub",
        "Directly at acetyl-CoA, the hub that the whole of Phase II converges on"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The obvious reading of the figure, and the one a zoomed re-check overturned: the connector line ends one box later, at PEP. Glyceraldehyde-3-phosphate is where the hexose and pentose route itself starts.", cn: "这是看图时最容易得出的答案，也正是放大核对后被推翻的那个：连接线终止在再往后一格的 PEP。甘油醛-3-磷酸是己糖/戊糖路线自己的起点。" },
        2: { en: "Pyruvate closes the shared sequence, and in the figure it is the fatty acids, not glycerol, that run more directly toward that end of the route.", cn: "丙酮酸是这条共用序列的末端；图中更直接奔向这一端的是脂肪酸，不是甘油。" },
        3: { en: "Acetyl-CoA is indeed the hub Phase II converges on, but everything reaches it through pyruvate; glycerol joins the route much earlier, at PEP.", cn: "乙酰辅酶 A 确实是第 II 阶段汇聚的枢纽，但所有支路都要经丙酮酸才到达；甘油汇入的位置要早得多，在 PEP。" }
      },
      why_en: "The diagram's connector line for glycerol terminates at PHOSPHOENOLPYRUVATE, not at glyceraldehyde-3-phosphate — a detail easy to misjudge without zooming in, since the two boxes sit close together in the figure.",
      why_cn: "图中甘油的连接线终止于磷酸烯醇丙酮酸，而不是甘油醛-3-磷酸——由于图中这两个方框位置相邻，若不放大查看很容易判断错误。"
    },
    {
      type: "short",
      q_en: "Outline the three phases of Obr. 6.2's model of catabolism, naming the hub metabolite that Phase II converges on and the pathway Phase III uses to finish the job.",
      q_cn: "概述图6.2所示分解代谢模型的三个阶段，指出第Ⅱ阶段汇聚到的枢纽代谢物，以及第Ⅲ阶段用以完成最终氧化的途径。",
      accept: ["acetyl-CoA", "citrate cycle", "phase I", "phase II", "phase III", "乙酰辅酶A", "柠檬酸循环", "阶段"],
      answer_en: "Phase I is reversible interconversion between macromolecules (fats, polysaccharides, proteins) and their building blocks (fatty acids+glycerol, hexoses+pentoses, amino acids). Phase II funnels those building blocks, via glyceraldehyde-3-phosphate/phosphoenolpyruvate/pyruvate, to the hub metabolite acetyl-CoA. Phase III oxidises acetyl-CoA completely in the citrate cycle, yielding H2O and CO2 as final products.",
      answer_cn: "第Ⅰ阶段是大分子（脂肪、多糖、蛋白质）与其构件单位（脂肪酸+甘油、己糖+戊糖、氨基酸）之间的可逆互变。第Ⅱ阶段将这些构件单位经甘油醛-3-磷酸/磷酸烯醇丙酮酸/丙酮酸汇集到枢纽代谢物乙酰辅酶A。第Ⅲ阶段中乙酰辅酶A在柠檬酸循环中被完全氧化，最终产物为H2O和CO2。"
    }
  ],
  oral: {
    q_en: "Explain why catabolism and anabolism proceed in many small steps rather than large ones, and describe the three-phase funnel that Obr. 6.2 uses to model nutrient breakdown.",
    q_cn: "解释为什么分解代谢与合成代谢是通过许多小步骤而非大步骤进行的，并描述图6.2用以描绘营养物质分解的三阶段汇聚模型。",
    model_en: "All the transformations of substances that go on in living systems, in other words all of metabolism, can be split into catabolic processes and anabolic processes, and both of them proceed stepwise, as a whole series of successive, enzyme-catalysed reactions, rather than as one big leap. The book gives three reasons why breaking things down into so many small steps is actually economical. First, both the production and the consumption of Gibbs energy are, in effect, quantized: individual doses of energy roughly match individual partial reactions, so the cell is never trying to handle one enormous, unmanageable packet of energy at once. Second, individual metabolites sitting along these pathways can be drawn off and used for various different metabolic routes, or conversely their steady-state pool can be topped up from a variety of different sources, which only works because the pathway is built from many shared, discrete intermediates rather than one continuous transformation. And third, this kind of finely divided metabolism is regulatable, and catabolism and anabolism can be regulated quite independently of one another besides, because they're carried out by different sets of enzymes and are physically localised in different compartments of the cell. The book's own figure lays this out as three phases. In phase one, macromolecules — fats, polysaccharides, and proteins — interconvert reversibly with their building blocks: fatty acids and glycerol, hexoses and pentoses, and amino acids. Phase two funnels all of those building blocks toward a single hub. Hexoses and pentoses run through a shared sequence, glyceraldehyde-3-phosphate to phosphoenolpyruvate to pyruvate, with glycerol joining in near the phosphoenolpyruvate step — one step later than glyceraldehyde-3-phosphate — while fatty acids, and part of the amino acid pool, bypass more directly toward the far end of that route; pyruvate then goes on to acetyl-CoA, drawn in the diagram with the same double-headed arrow as everywhere else in the figure. Phase three then takes that acetyl-CoA and oxidises it completely in the citrate cycle — citrate to isocitrate to two-oxoglutarate to succinate to fumarate to malate to oxaloacetate and back to citrate again — with water and carbon dioxide as the final waste products.",
    checklist: [
      "Defined catabolism and anabolism and noted both proceed stepwise",
      "Gave all three reasons (a/b/c) for why stepwise breakdown is economical",
      "Described Phase I: reversible macromolecule/building-block interconversion",
      "Described Phase II: convergence via glyceraldehyde-3-P/PEP/pyruvate onto acetyl-CoA",
      "Correctly placed glycerol's entry point at phosphoenolpyruvate, not glyceraldehyde-3-phosphate",
      "Described Phase III: the citrate cycle and its H2O/CO2 end products",
      "Connected fatty acids' and amino acids' separate entry points into Phase II"
    ]
  }
},

{
  id: "6-2-1-1",
  book: "cz",
  topicKey: "biological-redox",
  chapter: 6,
  section: "6.2.1",
  czTitle: "Oxidačně redukční pochody",
  enTitle: "Oxidation-reduction processes",
  cnTitle: "氧化还原过程",
  pages: [134, 135],
  coverage: "full",
  coverageNote: "The '6.2 Děje vedoucí k zisku Gibbsovy energie, resp. k tvorbě ATP' section header (no body text of its own — it opens straight into 6.2.1) plus the full '6.2.1 Oxidačně redukční pochody' text on the bottom half of p.134 (general Red⇌Ox+ne⁻ formalism, the Fe²⁺/Fe³⁺ example, the dehydrogenation framing with the ethanol/acetaldehyde example, the oxidation-is-exergonic/reduction-is-endergonic statement, and the Nernst-Peterson equation) verified directly, continuing through the whole of p.135: Tab. 6.2's full 15-row redox-potential table (re-checked row by row on a second pass — note row 2, H₂/2H⁺ at E⁰′=-0.42 V, matches the book's own later statement that the biological standard hydrogen electrode sits at -420 mV, a good internal consistency check), the electron-flow/exergonic-endergonic explanation, the parallel-ΔG⁰′-axis discussion, the ΔG⁰′=-nFΔE⁰′ relation, and the four nutrient-oxidation summary equations with their ΔG⁰′ values. IMPORTANT BOUNDARY NOTE: p.135's last line is CUT OFF MID-SENTENCE — '...organismus však může zachycovat a využívat energii jen v určitých kvantech, řádově' stops there, with only the page number '135' below it. The sentence (very likely about to state a specific kJ·mol⁻¹ order of magnitude, plausibly echoing the ATP ΔG⁰′≈30 kJ·mol⁻¹ 'quantum' from node 6-1-2-2) continues onto p.136, which is outside this node's/this agent's assigned page range. Section 6.2.1 is therefore NOT fully closed off by this node — whatever completes that sentence, and any further content of 6.2.1, belongs to a node drafted from the next page batch (136+).",
  cnNote: { topic: "十八", title: "生物能学——氧化还原过程 (笔记 仅凭标题/页码推测 p.103起，未直接核对)", status: "partial" },
  mustKnow: { en: "Electrons always flow spontaneously from the more negative potential toward the more positive one, ending at oxygen — that single rule is the whole logic of the respiratory chain, before you look at a single complex. And ΔG⁰′ has no fixed zero point of its own, unlike E⁰′ — only a DIFFERENCE in redox potential converts into usable energy (ΔG⁰′=-nFΔE⁰′), which is why the chain is built as a staircase of many small potential steps rather than one big drop.", cn: "电子总是自发地从电位更负的一方流向更正的一方，最终流到氧——在你去看任何一个复合物之前，这一条规则就是整条呼吸链的全部逻辑。而且 ΔG⁰′ 本身没有固定的零点，不像 E⁰′——只有氧化还原电位的**差值**才能换算成可用的能量（ΔG⁰′=-nFΔE⁰′），这也是为什么呼吸链要造成一级一级的小台阶，而不是一次性的大落差。" },
  trace: [
    {
      term: "redox potential E⁰′ 氧化还原电位",
      what: "一个数，衡量某个体系**有多想要电子**。数值越正，抢电子的本事越大；越负，越乐意把电子送出去。",
      from: "有了这个数能干什么？能一句话定出电子往哪走：**电子总是自发地从电位更负的一方，流向电位更正的一方**。教材的 Tab. 6.2 把十五个有生物学意义的体系按电位从负到正排好——**这张表读懂了，整条呼吸链的逻辑就已经拿到了**，剩下的只是认识每个复合物长什么样。氧排在最正的一端，所以电子最终都流向氧，这不是规定，是顺势而下。",
      to: "还有一个容易被忽略但很关键的区别：**ΔG⁰′ 没有固定的零点，而 E⁰′ 有**。所以单看一个体系的电位说不出能量，只有**两者之差**才能换算成可用的能量，公式是 ΔG⁰′ = −nFΔE⁰′。这解释了呼吸链为什么要设计成一级一级的小台阶，而不是从 NADH 一步跌到氧：分成小段落差，每一段释放的能量才是刚好够用、能被装进 ATP 的一份，一次性放完只会变成热。",
      family: "在有机物这边，「氧化」经常特指 dehydrogenation（脱氢）——失去氢，也就是同时失去一个质子和一个电子。还要记住电子和质子都不能单独存在，所以**任何氧化必然伴随着另一个物质的还原**，它们永远成对发生，这也是「氧化还原体系」这个说法的由来。"
    }
  ],
  summary: {
    en: "Section 6.2 turns to how organisms actually GAIN Gibbs energy / form ATP, starting with oxidation-reduction. Any oxidoreduction system can be written generally as Red⇌Ox+n e⁻ (e.g. Fe²⁺⇌Fe³⁺+e⁻): OXIDATION means losing electrons, REDUCTION means gaining them. In organic chemistry, oxidation very often means DEHYDROGENATION — loss of a hydrogen atom or atoms, i.e. a proton-electron pair — illustrated with CH₃CH₂OH⇌CH₃CHO (ethanol to acetaldehyde, -2H forward). Because free electrons and protons cannot exist independently, an oxidation is always coupled to the reduction of some other substance — an oxidation-REDUCTION process. Oxidation, being EXERGONIC, converts compounds to products with lower Gibbs energy (more stable, but higher-entropy) than the starting material; reduction, conversely, is ENDERGONIC. The system is characterised by its oxidation-reduction (redox) POTENTIAL, given by the Nernst-Peterson relation E=E⁰′+(RT/nF)ln([Ox]/[Red]). TAB. 6.2 orders fifteen biologically important redox couples by increasing standard redox potential, from acetaldehyde/acetate at -0.60 V up to H₂O/½O₂ at +0.82 V — with H₂/2H⁺ sitting at exactly -0.42 V, matching the book's later statement that the biological-standard (pH 7) hydrogen electrode is defined at E⁰′=-420 mV, unlike the classical convention of 0 mV. Electrons flow SPONTANEOUSLY from the more-negative-potential system (the reductant) to the more-positive-potential one (the oxidant) — that direction is EXERGONIC; the reverse is endergonic. A parallel ΔG⁰′ axis can be attached to the E⁰′ axis, but unlike E⁰′ it has no fixed zero point of its own — only DIFFERENCES in E⁰′ translate into ΔG⁰′, via ΔG⁰′=-nFΔE⁰′. Organisms obtain energy by oxidatively cleaving nutrients down to low-energy end products; the book gives four worked summary equations with their ΔG⁰′: anaerobic glycolysis of glucose to two lactate (-196.6 kJ·mol⁻¹), full aerobic combustion of glucose (-2870 kJ·mol⁻¹), of palmitic acid (-11 340 kJ·mol⁻¹), and of alanine (-1046 kJ·mol⁻¹, releasing NH₃). The theoretically available Gibbs energy is thus very large — but, the page notes as it cuts off, the organism can only capture and use energy in certain quanta, of an order of magnitude the sentence does not finish stating within this node's pages.",
    cn: "第6.2节转向讨论生物体究竟如何获得Gibbs自由能、生成ATP，首先从氧化还原讲起。任何氧化还原体系都可以一般地写成Red⇌Ox+n e⁻（例如Fe²⁺⇌Fe³⁺+e⁻）：氧化指失去电子，还原指得到电子。在有机化学中，氧化很常指脱氢——失去一个或多个氢原子，即一对质子和电子——以CH₃CH₂OH⇌CH₃CHO（乙醇变乙醛，正向-2H）为例。由于自由的电子和质子无法独立存在，氧化过程总是与另一物质的还原相偶联——即氧化还原过程。氧化是放能反应，把化合物转化为Gibbs自由能更低（更稳定，但熵更高）的产物；还原则相反，是吸能反应。该体系的特征用氧化还原（redox）电位来表征，由著名的能斯特-彼得斯关系式给出：E=E⁰′+(RT/nF)ln([Ox]/[Red])。表6.2按标准氧化还原电位递增的顺序排列了15个具有生物学意义的氧化还原对，从乙醛/乙酸盐的-0.60 V一直到H₂O/½O₂的+0.82 V——其中H₂/2H⁺恰好为-0.42 V，与教材后文所述「生物学标准（pH 7）氢电极定义为E⁰′=-420 mV」（不同于经典约定的0 mV）相吻合。电子会自发地从电位更负的体系（还原剂）流向电位更正的体系（氧化剂）——这个方向是放能的；反方向则是吸能的。可以在E⁰′轴上再配一条平行的ΔG⁰′轴，但与E⁰′不同，ΔG⁰′轴本身没有固定的零点——只有E⁰′的差值才能换算成ΔG⁰′，换算关系为ΔG⁰′=-nFΔE⁰′。生物体通过将营养物质氧化裂解为低能终产物来获取能量；教材给出了四个具体的总反应式及其ΔG⁰′：葡萄糖的无氧糖酵解生成两分子乳酸（-196.6 kJ·mol⁻¹）、葡萄糖的完全有氧燃烧（-2870 kJ·mol⁻¹）、棕榈酸的完全燃烧（-11 340 kJ·mol⁻¹），以及丙氨酸的氧化（-1046 kJ·mol⁻¹，释放NH₃）。由此可见理论上可获得的Gibbs自由能相当可观——但正如该页戛然而止之处所说，生物体只能以一定的「量子」来捕获和利用能量，至于其数量级，句子在本节点所覆盖的页面范围内尚未说完。"
  },
  points: [
    { cz: "obecný oxidoredukční systém — Red ⇌ Ox + n e⁻", en: "Any oxidation-reduction system can be written generally as RED ⇌ OX + n e⁻, where Red is the reduced form and Ox the oxidised form — e.g. Fe²⁺⇌Fe³⁺+e⁻. OXIDATION here means giving up (losing) electrons; REDUCTION means accepting them.", cn: "任何氧化还原体系都可以一般地写成RED ⇌ OX + n e⁻，其中Red为还原态、Ox为氧化态——例如Fe²⁺⇌Fe³⁺+e⁻。此处氧化指失去（给出）电子，还原指接受电子。" },
    { cz: "oxidace v organické chemii = dehydrogenace", en: "In the field of organic compounds, oxidation very often specifically means DEHYDROGENATION — loss of a hydrogen atom or atoms, i.e. a PAIR of proton and electron. Worked example: CH₃CH₂OH⇌CH₃CHO (ethanol to acetaldehyde), -2H in the oxidative (forward) direction, +2H on reduction back.", cn: "在有机化合物领域，氧化很常specifically是指脱氢——失去一个或多个氢原子，即一对质子和电子。示例：CH₃CH₂OH⇌CH₃CHO（乙醇变乙醛），正向（氧化方向）为-2H，逆向（还原）为+2H。" },
    { cz: "elektrony/protony nejsou volné — oxidace exergonická, redukce endergonická", en: "Released electrons and protons cannot exist independently, so an oxidative process is always coupled to the REDUCTION of another substance — an oxidation-reduction process. OXIDATION is an EXERGONIC process, converting compounds to products with LOWER Gibbs energy (more stable metabolites, though with HIGHER entropy than the starting materials); REDUCTION, conversely, is an ENDERGONIC process.", cn: "释放出的电子和质子无法独立存在，因此氧化过程总是与另一物质的还原相偶联——即氧化还原过程。氧化是放能反应，把化合物转化为Gibbs自由能更低（更稳定的代谢物，但熵比起始物质更高）的产物；还原则相反，是吸能反应。" },
    { cz: "Nernstova-Petersova rovnice", en: "The oxidoreduction system is characterised by its oxidation-reduction (REDOX) POTENTIAL, whose value is given by the well-known NERNST AND PETERSON relation: E = E⁰′ + (RT/nF)·ln([Ox]/[Red]).", cn: "氧化还原体系的特征用氧化还原（redox）电位来表征，其数值由著名的能斯特与彼得斯关系式给出：E = E⁰′ + (RT/nF)·ln([Ox]/[Red])。" },
    { cz: "Tab. 6.2 — 15 biologických redoxpárů, seřazeno vzestupně", en: "TAB. 6.2 orders fifteen biologically significant oxidoreduction systems by INCREASING standard redox potential E⁰′ (volts): acetaldehyde/acetate -0.60; H₂/2H⁺ -0.42; isocitrate/2-oxoglutarate+CO₂ -0.38; glutathione-SH/glutathione-SS -0.34; NADH+H⁺/NAD⁺ -0.32; glyceraldehyde-3-phosphate+H₃PO₄/1,3-bisphosphoglycerate -0.28; FADH₂/FAD -0.20; lactate/pyruvate -0.19; malate/oxaloacetate -0.17; cytochrome b (Fe²⁺)/(Fe³⁺) 0.00; succinate/fumarate +0.03; dihydroubiquinone/ubiquinone +0.10; cytochrome c (Fe²⁺)/(Fe³⁺) +0.26; H₂O₂/O₂ +0.29; H₂O/½O₂ +0.82.", cn: "表6.2按标准氧化还原电位E⁰′（伏特）递增的顺序排列了15个具有生物学意义的氧化还原体系：乙醛/乙酸盐-0.60；H₂/2H⁺ -0.42；异柠檬酸/2-氧戊二酸+CO₂ -0.38；谷胱甘肽-SH/谷胱甘肽-SS -0.34；NADH+H⁺/NAD⁺ -0.32；甘油醛-3-磷酸+H₃PO₄/1,3-二磷酸甘油酸-0.28；FADH₂/FAD -0.20；乳酸/丙酮酸-0.19；苹果酸/草酰乙酸-0.17；细胞色素b(Fe²⁺)/(Fe³⁺) 0.00；琥珀酸/延胡索酸+0.03；二氢泛醌/泛醌+0.10；细胞色素c(Fe²⁺)/(Fe³⁺) +0.26；H₂O₂/O₂ +0.29；H₂O/½O₂ +0.82。" },
    { cz: "směr toku elektronů = exergonický děj", en: "For the systems in Tab. 6.2, electrons will SPONTANEOUSLY pass from the system with the MORE NEGATIVE redox potential (the reducing agent, reductant) to the system with the HIGHER (more positive) redox potential (the oxidising agent, oxidant) — reading DOWN the table. That direction is the EXERGONIC one; the reverse direction is endergonic.", cn: "对于表6.2中的体系，电子会自发地从氧化还原电位更负的体系（还原剂）流向电位更高（更正）的体系（氧化剂）——即沿表格向下的方向。这个方向是放能的；反方向则是吸能的。" },
    { cz: "ΔG⁰′ osa nemá pevný bod — ΔG⁰′ = −nFΔE⁰′; biologická vodíková elektroda = −420 mV", en: "A parallel axis of standard Gibbs energy values can be attached to the redox-potential axis, but unlike E⁰′ — whose zero point is fixed by convention at the standard HYDROGEN ELECTRODE (E⁰=0 mV; note that in BIOLOGICAL systems, at pH 7, this becomes E⁰′=-420 mV instead, exactly matching Tab. 6.2's own H₂/2H⁺ row) — the ΔG⁰′ axis has NO fixed starting point of its own; ΔG⁰′ values can only be assigned to DIFFERENCES of E⁰′, via ΔG⁰′ = −nF·ΔE⁰′.", cn: "可以在氧化还原电位轴上再配一条平行的标准Gibbs自由能轴，但与E⁰′不同——E⁰′的零点由惯例固定在标准氢电极上（E⁰=0 mV；但在生物系统中、pH 7时，这一数值变为E⁰′=-420 mV，恰好与表6.2自身H₂/2H⁺一行相符）——ΔG⁰′轴本身没有固定的起点；ΔG⁰′的数值只能赋给E⁰′的差值，换算关系为ΔG⁰′ = −nF·ΔE⁰′。" },
    { cz: "čtyři sumární rovnice oxidace živin (ΔG⁰′)", en: "Organisms obtain energy by oxidatively cleaving nutrients to low-energy end products. Four worked summary equations, with their ΔG⁰′: glucose, ANAEROBICALLY (lactate fermentation), C₆H₁₂O₆→2 CH₃-CHOH-COOH, ΔG⁰′=-196.6 kJ·mol⁻¹; glucose, AEROBICALLY, C₆H₁₂O₆+6 O₂→6 CO₂+6 H₂O, ΔG⁰′=-2870 kJ·mol⁻¹; PALMITIC ACID, C₁₆H₃₂O₂+23 O₂→16 CO₂+16 H₂O, ΔG⁰′=-11 340 kJ·mol⁻¹; ALANINE, C₃H₇O₂N+3 O₂→3 CO₂+2 H₂O+NH₃, ΔG⁰′=-1046 kJ·mol⁻¹. The book notes the theoretically obtainable amount of Gibbs energy is considerable, but — as the page cuts off mid-sentence — the organism can only capture and use this energy in certain QUANTA, of an order of magnitude the running text does not finish stating within this node's page range (see coverageNote).", cn: "生物体通过将营养物质氧化裂解为低能终产物来获取能量。教材给出了四个具体总反应式及其ΔG⁰′：葡萄糖无氧（乳酸发酵），C₆H₁₂O₆→2 CH₃-CHOH-COOH，ΔG⁰′=-196.6 kJ·mol⁻¹；葡萄糖有氧，C₆H₁₂O₆+6 O₂→6 CO₂+6 H₂O，ΔG⁰′=-2870 kJ·mol⁻¹；棕榈酸，C₁₆H₃₂O₂+23 O₂→16 CO₂+16 H₂O，ΔG⁰′=-11 340 kJ·mol⁻¹；丙氨酸，C₃H₇O₂N+3 O₂→3 CO₂+2 H₂O+NH₃，ΔG⁰′=-1046 kJ·mol⁻¹。教材指出理论上可获得的Gibbs自由能相当可观，但——正如该页戛然而止之处所说——生物体只能以一定的「量子」来捕获和利用这些能量，至于其数量级，正文在本节点覆盖的页面范围内尚未说完（见coverageNote）。" }
  ],
  terms: [
    { cz: "redoxpotenciál (E⁰′)", en: "redox potential (E⁰′)", cn: "氧化还原电位（E⁰′）", def_en: "The characteristic value of an oxidoreduction system given by the Nernst-Peterson equation; more negative = stronger reductant, more positive = stronger oxidant.", def_cn: "由能斯特-彼得斯方程给出的、表征氧化还原体系的特征值；越负表示还原性越强，越正表示氧化性越强。" },
    { cz: "Nernstova(-Petersova) rovnice", en: "Nernst(-Peterson) equation", cn: "能斯特（-彼得斯）方程", def_en: "E = E⁰′ + (RT/nF)·ln([Ox]/[Red]); relates the actual redox potential to the standard potential and the ratio of oxidised to reduced forms.", def_cn: "E = E⁰′ + (RT/nF)·ln([Ox]/[Red])；将实际氧化还原电位与标准电位及氧化态/还原态比值联系起来。" },
    { cz: "dehydrogenace", en: "dehydrogenation", cn: "脱氢作用", def_en: "The organic-chemistry form of oxidation: loss of a hydrogen atom or atoms (a proton-electron pair), e.g. ethanol to acetaldehyde.", def_cn: "有机化学中氧化的一种形式：失去一个或多个氢原子（质子-电子对），例如乙醇变为乙醛。" },
    { cz: "standardní vodíková elektroda (biologická, −420 mV)", en: "standard hydrogen electrode (biological convention, −420 mV)", cn: "标准氢电极（生物学惯例，−420 mV）", def_en: "The reference point of the E⁰′ scale; classically 0 mV by convention, but −420 mV under the biological (pH 7) standard-state convention.", def_cn: "E⁰′标度的参考点；经典惯例中为0 mV，但在生物学（pH 7）标准态惯例下为−420 mV。" },
    { cz: "ΔG⁰′ = −nFΔE⁰′", en: "ΔG⁰′ = −nFΔE⁰′", cn: "ΔG⁰′ = −nFΔE⁰′", def_en: "The relation converting a difference in standard redox potential into a standard Gibbs energy change; unlike E⁰′, ΔG⁰′ itself has no fixed zero point.", def_cn: "将标准氧化还原电位之差换算为标准Gibbs自由能变化的关系式；与E⁰′不同，ΔG⁰′本身没有固定的零点。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Given two redox couples from Tab. 6.2, NADH+H⁺/NAD⁺ (E⁰′=-0.32 V) and cytochrome c Fe²⁺/Fe³⁺ (E⁰′=+0.26 V), in which direction do electrons spontaneously flow, and is that direction exergonic or endergonic?",
      q_cn: "给定表6.2中的两个氧化还原对，NADH+H⁺/NAD⁺（E⁰′=-0.32 V）和细胞色素c Fe²⁺/Fe³⁺（E⁰′=+0.26 V），电子自发流动的方向是什么？该方向是放能还是吸能？",
      options: [
        "From cytochrome c to NADH, and this is exergonic",
        "From NADH to cytochrome c, and this is endergonic",
        "From NADH to cytochrome c, and this is exergonic",
        "Electrons do not pass between these two systems"
      ],
      answer: 2,
      optionRefs: { 0: "6-2-4-1" },
      optionNotes: {
        0: { en: "This is the reverse direction, and it is the endergonic one. Electrons run from the more NEGATIVE potential to the more positive, which is why the whole respiratory chain hands them along from carriers of lower potential toward rising ones, finishing at oxygen at +0.82 V.", cn: "这是反方向，而且是吸能（endergonic）的方向。电子从更负的电位流向更正的电位——整条 respiratory chain 正是按这个顺序把电子从低电位载体一路传到高电位载体，最后交给 +0.82 V 的氧。" },
        1: { en: "The direction is right but the sign is wrong. The book states plainly that passage from the more negative toward the more positive potential is the exergonic direction; only the reverse, from positive back to negative, would be endergonic.", cn: "方向对了，但符号错了。教材说得很直接：从更负电位流向更正电位就是放能（exergonic）方向；只有反过来、从正电位回到负电位，才是吸能的。" },
        3: { en: "Both couples are listed in Tab. 6.2 precisely so that pairs like this can be compared, and their separation of 0.58 V is a large driving force, not an absence of one — ΔG⁰′ = −nFΔE⁰′ turns exactly that difference into usable energy.", cn: "这两个 redox 对都被列进 Tab. 6.2，本来就是为了让人这样两两比较；它们相差 0.58 V，是很大的推动力，而不是没有推动力——ΔG⁰′ = −nFΔE⁰′ 正是把这个差值换算成可用能量。" }
      },
      why_en: "Electrons spontaneously pass from the system with the more negative redox potential (here NADH/NAD⁺ at -0.32 V, the reductant) to the one with the higher, more positive potential (cytochrome c at +0.26 V, the oxidant) — and per the book, that direction, from negative to positive potential, is the exergonic one.",
      why_cn: "电子会自发地从氧化还原电位更负的体系（此处为NADH/NAD⁺，-0.32 V，还原剂）流向电位更高、更正的体系（细胞色素c，+0.26 V，氧化剂）——根据教材，从负电位到正电位的这个方向正是放能方向。"
    },
    {
      type: "mcq",
      q_en: "Why is the standard redox potential of the hydrogen electrode given as −420 mV in biological systems, rather than the classical convention of 0 mV?",
      q_cn: "为什么在生物系统中，氢电极的标准氧化还原电位被定为−420 mV，而不是经典惯例中的0 mV？",
      options: [
        "Because Tab. 6.2's H₂/2H⁺ row was copied from a classical E⁰ list and printed on the wrong scale, so the −420 mV is a stray value the book's running text never repeats in words anywhere, nor uses in the ΔG⁰′ discussion that follows",
        "Because the classical 0 mV convention is defined at a different reference pH than the biological (pH 7) standard state the book uses, which shifts the value to −420 mV — exactly matching Tab. 6.2's own H₂/2H⁺ row",
        "Because hydrogen gas takes no part in biological redox reactions, so the book drops the hydrogen electrode from its scale altogether and anchors the zero point on the NADH+H⁺/NAD⁺ couple instead",
        "Because ΔG⁰′ has a fixed zero point of its own, set at the hydrogen electrode, so the E⁰′ scale has to be displaced by −420 mV before the two parallel axes can be read against each other"
      ],
      answer: 1,
      optionRefs: { 3: "6-1-1" },
      optionNotes: {
        0: { en: "Not a misprint but a deliberate convention: the running text states the shift in words as well, and the table's value agrees with it exactly. Two conventions coexist — classical E⁰ with the hydrogen electrode at 0 mV, and biological E⁰′ measured at pH 7.", cn: "这不是印错，而是有意选定的惯例：正文里也用文字说明了这个移动，表里的数值与之完全一致。两套惯例并存——经典 E⁰ 把 hydrogen electrode 定为 0 mV，生物学 E⁰′ 则在 pH 7 下测定。" },
        2: { en: "Hydrogen-transferring couples are everywhere in biology, and H₂/2H⁺ is itself one of Tab. 6.2's fifteen rows, sitting at −0.42 V just below acetaldehyde/acetate. NADH+H⁺/NAD⁺ appears in the same table at −0.32 V as an ordinary entry, not as a zero point.", cn: "生物体里传递氢的 redox 对到处都是，H₂/2H⁺ 本身就是 Tab. 6.2 十五行中的一行，位于 −0.42 V，紧挨在 acetaldehyde/acetate 下面。NADH+H⁺/NAD⁺ 在同一张表里是 −0.32 V 的普通一行，不是什么零点。" },
        3: { en: "This is the relation between the two axes turned upside down. E⁰′ is the axis with the fixed, conventionally defined zero; ΔG⁰′ has no starting point of its own at all, and can only be attached to DIFFERENCES of redox potential, through ΔG⁰′ = −nFΔE⁰′.", cn: "这是把两条轴的关系整个说反了。有固定零点、由惯例定义的是 E⁰′；ΔG⁰′ 自己根本没有起点，只能通过 ΔG⁰′ = −nFΔE⁰′ 挂在 redox 电位的差值上。" }
      },
      why_en: "The book explicitly distinguishes the classical E⁰ convention (hydrogen electrode = 0 mV) from the biological E⁰′ convention (pH 7), under which the hydrogen electrode becomes −420 mV — a value that matches Tab. 6.2's own H₂/2H⁺ row exactly, confirming it is a deliberate convention, not a misprint. Hydrogen-transferring couples are common in biology (this very couple is listed in the table), and it is the E⁰′ axis, not ΔG⁰′, that has the fixed reference point.",
      why_cn: "教材明确区分了经典的E⁰惯例（氢电极=0 mV）与生物学E⁰′惯例（pH 7），在后者下氢电极变为−420 mV——这一数值恰好与表6.2自身H₂/2H⁺一行相符，说明这是刻意的惯例设定，而非印刷错误。涉氢的氧化还原对在生物学中很常见（该对本身就列在表中），而且是E⁰′轴而非ΔG⁰′轴才有固定的参考点。"
    },
    {
      type: "mcq",
      q_en: "Among the book's four worked nutrient-oxidation equations, which single substrate yields the most negative (largest-magnitude) ΔG⁰′ per mole?",
      q_cn: "在教材给出的四个营养物质氧化总反应式中，哪种底物每摩尔的ΔG⁰′负值最大（绝对值最大）？",
      options: [
        "Glucose, oxidised anaerobically to lactate (−196.6 kJ·mol⁻¹)",
        "Alanine, oxidised with release of NH₃ (−1046 kJ·mol⁻¹)",
        "Glucose, oxidised fully and aerobically to CO₂ and H₂O (−2870 kJ·mol⁻¹)",
        "Palmitic acid, oxidised fully to CO₂ and H₂O (−11 340 kJ·mol⁻¹)"
      ],
      answer: 3,
      optionRefs: { 2: "6-2-2-3" },
      optionNotes: {
        0: { en: "The smallest of the four, and deliberately so: lactate fermentation stops at a substrate that is still highly reduced, so most of glucose's energy is left inside the lactate rather than released.", cn: "四者中最小的一个，而且理应如此：lactate fermentation 停在一个仍然高度还原的产物上，葡萄糖的能量大部分留在 lactate 里，没有释放出来。" },
        1: { en: "Alanine's full oxidation with release of NH₃ comes to −1046 kJ·mol⁻¹ — larger than glucose's anaerobic figure but an order of magnitude short of the fatty acid, since alanine is a small three-carbon skeleton.", cn: "Alanine 完全氧化并放出 NH₃ 为 −1046 kJ·mol⁻¹——比葡萄糖的无氧数值大，但比脂肪酸小一个数量级，因为 alanine 只是个三碳的小骨架。" },
        2: { en: "This is the aerobic glucose figure, −2870 kJ·mol⁻¹, and it is the number that comes back later as the denominator for the roughly 40% of glucose's energy the cell actually captures as its 38 ATP.", cn: "这是葡萄糖有氧氧化的数值 −2870 kJ·mol⁻¹，后面还会再出现一次：细胞实际以 38 ATP 捕获约 40% 的能量，算的就是以它为分母。" }
      },
      why_en: "Palmitic acid's full aerobic combustion (C₁₆H₃₂O₂+23 O₂→16 CO₂+16 H₂O) has ΔG⁰′=−11,340 kJ·mol⁻¹, far more negative than glucose's anaerobic (−196.6) or aerobic (−2870) oxidation or alanine's oxidation (−1046) — consistent with palmitic acid being both a larger molecule and a much more reduced (fat-derived) substrate than the others.",
      why_cn: "棕榈酸的完全有氧燃烧（C₁₆H₃₂O₂+23 O₂→16 CO₂+16 H₂O）的ΔG⁰′=−11340 kJ·mol⁻¹，远比葡萄糖的无氧（−196.6）或有氧（−2870）氧化、以及丙氨酸的氧化（−1046）更负——这与棕榈酸既是较大分子、又是比其他底物更「还原」（脂肪来源）的底物这一事实相符。"
    },
    {
      type: "short",
      q_en: "Explain what 'dehydrogenation' means as a form of oxidation in organic chemistry, and give the book's worked example.",
      q_cn: "解释「脱氢作用」作为有机化学中一种氧化形式的含义，并给出教材中的示例。",
      accept: ["hydrogen", "proton", "electron", "ethanol", "acetaldehyde", "氢", "质子", "电子", "乙醇", "乙醛"],
      answer_en: "In organic chemistry, oxidation very often means dehydrogenation: loss of a hydrogen atom or atoms, i.e. loss of a proton-electron pair. The book's worked example is CH₃CH₂OH⇌CH₃CHO (ethanol to acetaldehyde), which loses 2H in the oxidative (forward) direction and gains 2H back on reduction.",
      answer_cn: "在有机化学中，氧化很常指脱氢作用：失去一个或多个氢原子，即失去一对质子-电子。教材给出的示例是CH₃CH₂OH⇌CH₃CHO（乙醇变乙醛），正向（氧化方向）失去2H，还原时再得到2H。"
    }
  ],
  oral: {
    q_en: "Explain the general oxidoreduction formalism, how it connects to Gibbs energy via redox potential, what Table 6.2 shows, and how the book quantifies the energy available from oxidising major nutrient types.",
    q_cn: "解释一般的氧化还原形式、它如何通过氧化还原电位与Gibbs自由能联系起来、表6.2展示了什么，以及教材如何量化氧化主要营养物质类型所能获得的能量。",
    model_en: "Section 6.2 turns to how organisms actually gain Gibbs energy, and the first mechanism it covers is oxidation-reduction. Any such system can be written generally as a reduced form going to an oxidised form plus some number of electrons, the classic example being ferrous iron going to ferric iron plus an electron; oxidation here simply means losing electrons, reduction means gaining them. In organic chemistry specifically, oxidation very often takes the form of dehydrogenation, the loss of a hydrogen atom or atoms, which is really the loss of a proton together with an electron, as in ethanol losing two hydrogens to become acetaldehyde. Because free electrons and protons can't exist on their own, every oxidation has to be coupled to the reduction of something else, so what you really have is an oxidation-reduction process, and because oxidation is exergonic, converting a compound into a more stable, lower-Gibbs-energy, higher-entropy product, reduction by the same logic has to be endergonic. The system is characterised by its redox potential, given by the Nernst and Peterson relation, and the book's Table 6.2 puts fifteen biologically important redox couples in order of increasing standard redox potential, starting at minus 0.60 volts for acetaldehyde going to acetate and rising all the way to plus 0.82 volts for water going to half an oxygen molecule, with familiar biological couples like NADH to NAD-plus at minus 0.32 and cytochrome c at plus 0.26 falling in between. Electrons spontaneously flow from whichever system sits lower, more negative, on that scale — the reductant — toward whichever sits higher, more positive — the oxidant — and that direction is exergonic, while running it backwards would be endergonic. You can lay a parallel axis of standard Gibbs energy alongside that redox-potential axis, but there's an important asymmetry: the potential axis has a fixed zero, conventionally the standard hydrogen electrode, though under the biological, pH-seven convention that point actually sits at minus 420 millivolts rather than zero. The Gibbs-energy axis has no such fixed point of its own; you can only convert a difference in redox potential into a Gibbs energy value, through the relation that Gibbs energy change equals minus n, F, times the change in potential. Ultimately, organisms get their energy by oxidatively cleaving nutrients down to simple, low-energy end products, and the book quantifies this with four summary equations: glucose fermented anaerobically to two lactates releases about 197 kilojoules per mole; glucose burned fully and aerobically releases nearly 2870; palmitic acid, fully oxidised, releases over 11000; and alanine, oxidised with the release of ammonia, releases about 1046. The theoretical energy available is clearly enormous — but, as the book notes right as this page runs out, the organism can only actually capture and use that energy in discrete quanta, and the precise order of magnitude it's about to give continues onto the next page.",
    checklist: [
      "Gave the general Red⇌Ox+ne⁻ formalism with the Fe²⁺/Fe³⁺ example",
      "Explained dehydrogenation as organic-chemistry oxidation, with the ethanol/acetaldehyde example",
      "Stated oxidation=exergonic, reduction=endergonic, and why (electrons/protons can't exist free)",
      "Gave the Nernst-Peterson equation and named the redox potential it defines",
      "Recited several Tab. 6.2 values in correct increasing order",
      "Explained the electron-flow rule (negative to positive potential = exergonic)",
      "Explained the −420 mV biological hydrogen electrode and the ΔG⁰′=−nFΔE⁰′ relation",
      "Gave at least two of the four nutrient-oxidation ΔG⁰′ values",
      "Acknowledged the page's own sentence cuts off before stating the energy-quantum order of magnitude"
    ]
  }
},

{
  id: "6-2-2-1",
  book: "cz",
  topicKey: "citric-acid-cycle",
  chapter: 6,
  section: "6.2.2",
  czTitle: "Citrátový cyklus — úvod, přehled cyklu, citrátsynthasa",
  enTitle: "The citrate cycle — introduction, cycle overview, and citrate synthase",
  cnTitle: "柠檬酸循环——概论、循环总览与柠檬酸合酶",
  pages: [136, 137],
  coverage: "full",
  coverageNote: "Both pages read directly from the scans. The very top of p.136 is the tail end of the preceding (6.2.1-area) discussion, mid-paragraph: '...30 kJ·mol⁻¹, které odpovídá hydrolýze a tvorbě ATP (kap. 6.1.1 a 6.1.2)', followed by a short paragraph naming NAD⁺/NADP⁺/FAD as oxidoreductase coenzymes that act as electron/proton acceptors, then a paragraph comparing anaerobic vs aerobic ATP yield (2 mol ATP/mol glucose anaerobically vs a theoretical 38 mol ATP/mol glucose aerobically) — this belongs to the node another agent is covering and is reported here only for the boundary check, not treated as this node's own content. This node's actual material starts at the '6.2.2 Citrátový cyklus' heading partway down p.136: the acetyl-CoA-entry paragraph, the full 9-row Tab. 6.3 (every enzyme name, EC number, and cofactor list re-read to confirm exactly which two rows — row 3, aconitase's second sub-step, and row 5, '2-oxoglutarátoxidasa' — are the only ones printed WITHOUT their own EC number), the mitochondrial-localization sentence, and the citrate-synthase mechanism/regulation paragraph running onto p.137. p.137 covers the citrate-synthase structural-formula equation at the top (oxaloacetate + acetyl-CoA ⇌ citrate + CoA-SH + H⁺, zoomed to confirm every -COO⁻ branch position) and the complete Obr. 6.3 cycle diagram beneath it, checked circle-by-circle against Tab. 6.3's 9 numbered reactions to confirm every intermediate structure, arrow direction, and by-product label (CO2+NADH at both ④ and ⑤, GTP at ⑥, FADH2 at ⑦, NADH at ⑨). No ΔG° value is actually printed for the citrate-synthase step itself — the book only calls it 'an exergonic reaction' and moves straight to the structural equation; a numeric ΔG only reappears later (p.139-140) for the cycle as a whole, so none is invented here.",
  cnNote: { topic: "二十", title: "柠檬酸循环 (笔记二十, 约p.119 — 页码来自HANDOFF.md §11预填表格的标题匹配，本次任务未直接查阅中文笔记PDF核实，故标记为partial)", status: "partial" },
  mustKnow: { en: "Acetyl-CoA is the single doorway every fuel walks through into the citrate cycle — carbon from sugar, fat and amino acids all becomes acetyl-CoA first, then meets the same nine reactions. And the opening condensation is only chemically possible because acetyl-CoA's thioester bond blocks the resonance an ordinary ester would have, which is exactly what fixes its carbonyl's reactivity and lets citrate synthase's aldol condensation happen at all.", cn: "乙酰辅酶A是所有燃料进入柠檬酸循环时共用的唯一一道门——不管碳来自糖、脂肪还是氨基酸，都要先变成乙酰辅酶A，然后走同一套九步反应。而开场的缩合反应之所以在化学上可能，是因为乙酰辅酶A的硫酯键挡住了普通酯键本来会有的共振——正是这一点固定住了羰基的反应活性，柠檬酸合酶的羟醛缩合才做得成。" },
  trace: [
    {
      term: "acetyl-CoA 乙酰辅酶A",
      what: "所有燃料进入柠檬酸循环时**共用的唯一一道门**。不管这些碳原子最初来自糖、来自脂肪，还是来自氨基酸，都必须先变成乙酰辅酶A，然后走同一套九步反应被烧掉。",
      from: "细胞为什么要设这么一道门？想想不这么做的后果：糖、脂肪、氨基酸三类营养物长得完全不一样，如果各烧各的，细胞就得养三套独立的氧化机器，还得三套分别调控。而只要先把它们都收敛成同一个分子，**一套机器就够了**。这是整个中间代谢最省事的一个设计，也是你在代谢总论里反复看到「汇聚」这个词的原因。",
      to: "记住这道门在哪，很多问题就不用单独背了。教材点名它有三个来源：糖酵解来的丙酮酸、脂肪酸 β-氧化、以及部分氨基酸的降解。反过来问「某某营养物怎么被彻底氧化」，答案的骨架永远是同一句：**先变成乙酰辅酶A，再进循环**。整个过程发生在线粒体基质（mitochondrial matrix）里。",
      family: "还有一个化学上的小机关值得知道，它解释了循环的第一步凭什么做得成：乙酰辅酶A 上的是**硫**酯键而不是普通的氧酯键，而硫酯挡住了普通酯键会发生的那种共振离域。结果是羰基的反应活性被固定住了，citrate synthase 才能顺利完成那步羟醛缩合。顺带一提，教材明确说 citrate synthase 是个**调节酶**——多数生物里被 ATP 强烈抑制，也就是「能量够了就别烧了」。"
    }
  ],
  summary: {
    en: "Section 6.2.2 opens the citrate cycle (also called the cycle of tricarboxylic acids), the pathway that completely oxidizes the two carbons of the acetyl group carried on coenzyme A. That acetyl-CoA arrives from three places the book names explicitly: pyruvate formed in glycolysis (ch. 7.8) or by transamination of alanine (ch. 5.2), both converted onward by oxidative decarboxylation (ch. 7.8.1); or abundantly from fatty-acid β-oxidation (ch. 8.4). Each acetyl group entering the cycle is converted to 2 CO2, while reduced NADH and FADH2 coenzymes are generated. The whole sequence is localized in the mitochondrial matrix (Obr. 6.4) and is laid out end-to-end in Tab. 6.3 — all 9 numbered enzyme-catalyzed steps with their EC numbers and cofactors — and in Obr. 6.3, the full structural-diagram roadmap. The cycle's opening reaction, catalyzed by the regulatory enzyme citrate synthase (strongly inhibited by ATP in most organisms, by NADH in some), condenses acetyl-CoA's activated methyl carbon with oxaloacetate's carbonyl carbon in an aldol-type condensation — possible because acetyl-CoA's thioester bond, unlike an ordinary O-ester, resists mesomeric delocalization and so fixes the reactivity of its carbonyl — releasing free CoA-SH and yielding citrate.",
    cn: "6.2.2节开篇讲的是柠檬酸循环（亦称三羧酸循环），这是把辅酶A所携带乙酰基上两个碳原子彻底氧化的途径。教材明确指出乙酰辅酶A有三个来源：糖酵解（第7.8节）生成的丙酮酸，或丙氨酸经转氨基作用（第5.2节）生成的丙酮酸——二者都经氧化脱羧（第7.8.1节）转化而来；以及大量来自脂肪酸β-氧化（第8.4节）。每个进入循环的乙酰基都转化为2个CO2，同时生成还原型辅酶NADH和FADH2。整个反应序列定位于线粒体基质（图6.4），并由表6.3（全部9个编号反应步骤及其酶、EC编号和辅因子）与图6.3（完整的结构示意图路线图）逐一列出。循环的第一步反应由调节性酶柠檬酸合酶催化（在大多数生物中被ATP强烈抑制，在某些生物中被NADH抑制），是乙酰辅酶A被活化的甲基碳与草酰乙酸的羰基碳之间的一次羟醛型缩合——之所以可能，是因为乙酰辅酶A的硫酯键不同于普通的氧酯键，不能发生离域共振，从而固定了其羰基的反应活性——释放出游离的CoA-SH，生成柠檬酸。"
  },
  points: [
    { cz: "vstup acetyl-CoA do cyklu — 3 zdroje", en: "Acetyl-CoA enters the cycle from THREE sources the book names explicitly: pyruvate formed in glycolysis (ch. 7.8) during carbohydrate breakdown; pyruvate formed by transamination of alanine (ch. 5.2); and — 'in abundant amounts' (hojné míře) — fatty-acid β-oxidation (ch. 8.4). The first two reach acetyl-CoA via oxidative decarboxylation of pyruvate (ch. 7.8.1). Acetyl-CoA represents the shared entry point of all these pathways into the citrate cycle.", cn: "乙酰辅酶A有三个明确来源：糖酵解（第7.8节）中糖类分解生成的丙酮酸；丙氨酸经转氨基作用（第5.2节）生成的丙酮酸；以及「大量」来自脂肪酸β-氧化（第8.4节）。前两者都要经丙酮酸的氧化脱羧（第7.8.1节）才能到达乙酰辅酶A。乙酰辅酶A是这些代谢途径共同进入柠檬酸循环的入口。" },
    { cz: "lokalizace v matrix mitochondrie (Obr. 6.4)", en: "Complete oxidation of both carbons of the acetyl residue bound to coenzyme A happens via the sequence of citrate-cycle reactions localized in the MATRIX, the inner space of the mitochondrion — shown in Obr. 6.4 (Mb1 = outer membrane, Mb2 = inner membrane, MMP = intermembrane/cytosolic space, Mx = matrix). Acetyl converts to 2 CO2; reduced NADH and FADH2 also form.", cn: "结合在辅酶A上的乙酰基，其两个碳原子的完全氧化是通过一系列定位于线粒体基质（内部空间）的柠檬酸循环反应完成的——如图6.4所示（Mb1=外膜，Mb2=内膜，MMP=膜间隙，有时也称胞质侧空间，Mx=基质）。乙酰基转化为2个CO2；同时生成还原型的NADH和FADH2。" },
    { cz: "Tab. 6.3 — 9 reakcí, enzymy, EC čísla, kofaktory", en: "TAB. 6.3 lists all NINE numbered reactions of the cycle with enzyme, EC number, and cofactor(s): 1 citrate synthase (EC 4.1.3.7, CoA); 2 aconitase (EC 4.2.1.3, Fe²⁺); 3 aconitase again (Fe²⁺, no separate EC number printed — same physical enzyme as row 2, but its dehydration and rehydration sub-steps are given separate row numbers); 4 isocitrate dehydrogenase (EC 1.1.1.41, NAD⁺); 5 '2-oxoglutarátoxidasa' — printed in quotation marks by the book itself, with NO EC number given, cofactors TDP, CoA, FAD, NAD⁺, lipoic acid, Mg²⁺ (six in total); 6 succinyl-CoA synthetase (EC 6.2.1.4, CoA + GDP); 7 succinate dehydrogenase (EC 1.3.99.1, FAD + Fe²⁺); 8 fumarase (EC 4.2.1.2, no cofactor — 'žádné'); 9 malate dehydrogenase (EC 1.1.1.37, NAD⁺).", cn: "表6.3列出了循环全部九个编号反应及其酶、EC编号和辅因子：1 柠檬酸合酶（EC 4.1.3.7，CoA）；2 乌头酸酶（EC 4.2.1.3，Fe²⁺）；3 乌头酸酶（再次出现，Fe²⁺，未单独给出EC编号——与第2行是同一个酶蛋白，但其脱水和加水两个子步骤被分别编号）；4 异柠檬酸脱氢酶（EC 1.1.1.41，NAD⁺）；5「2-氧戊二酸氧化酶」——教材原文自己加了引号，且未给出EC编号，辅因子为TDP、CoA、FAD、NAD⁺、硫辛酸、Mg²⁺（共六种）；6 琥珀酰辅酶A合成酶（EC 6.2.1.4，CoA+GDP）；7 琥珀酸脱氢酶（EC 1.3.99.1，FAD+Fe²⁺）；8 延胡索酸酶（EC 4.2.1.2，无辅因子——「žádné」）；9 苹果酸脱氢酶（EC 1.1.1.37，NAD⁺）。" },
    { cz: "citrátsynthasa — mechanismus (thioester brání mezomerii → aldolová kondenzace)", en: "The thioester group of acetyl-CoA prevents the mesomeric delocalization common to an ordinary O-ester bond (ch. 6.1.2); this FIXES the carbonyl structure in acetyl-CoA and enables an ALDOL CONDENSATION. Citrate synthase catalyzes exactly this: condensation between the carbon atom of oxaloacetic acid's carbonyl and the methyl group of acetyl, which is itself activated by the carbonyl of the thioester bond. Coenzyme A is simultaneously split off. Structural equation: oxalacetát (O=C-COO⁻ / CH2-COO⁻) + acetyl-CoA (H-CH2-CO~S-CoA) ⇌ citrát (HO-C-COO⁻, with a CH2-COO⁻ branch above and below) + CoA-SH + H⁺.", cn: "乙酰辅酶A的硫酯基团不像普通氧酯键（第6.1.2节）那样能发生离域共振，这就固定了乙酰辅酶A中羰基的结构，从而使羟醛缩合成为可能。柠檬酸合酶催化的正是这一反应：草酰乙酸羰基的碳原子与被硫酯键羰基活化的乙酰甲基之间发生缩合，同时裂解出辅酶A。结构式：草酰乙酸（O=C-COO⁻ / CH2-COO⁻）+乙酰辅酶A（H-CH2-CO~S-CoA）⇌柠檬酸（HO-C-COO⁻，上下各带一个CH2-COO⁻分支）+CoA-SH+H⁺。" },
    { cz: "citrátsynthasa je regulační enzym — ATP/NADH inhibice", en: "The book explicitly calls citrate synthase a REGULATORY enzyme. In most organisms it is strongly inhibited by ATP; in some, by NADH. The reaction is stated to be exergonic, though no specific ΔG value is printed for this individual step (a numeric ΔG for the CYCLE as a whole appears later, in the ATP-yield discussion).", cn: "教材明确将柠檬酸合酶称为调节性酶。在大多数生物中它被ATP强烈抑制，在某些生物中被NADH抑制。教材指出该反应是放能反应，但并未给出这一具体步骤的ΔG数值（整个循环的ΔG数值稍后在ATP产量的讨论中才给出）。" },
    { cz: "\"cyklus trikarboxylových kyselin\" — alternativní název", en: "The book notes the citrate cycle is 'sometimes also' (někdy též) called the cycle of TRICARBOXYLIC acids — citrate itself carries three carboxyl groups, visible directly in its structural formula.", cn: "教材指出柠檬酸循环「有时也」被称为三羧酸循环——柠檬酸本身带有三个羧基，从其结构式中即可直接看出。" },
    { cz: "Obr. 6.3 — celkové schéma, 9 očíslovaných kroků, uhlík opouští cyklus dvakrát", en: "OBR. 6.3 diagrams the full roadmap, numbered ① to ⑨, matching Tab. 6.3: acetyl-CoA condenses with oxaloacetate (①) to citrate; citrate isomerizes via cis-aconitate to isocitrate (②③, both aconitase); isocitrate is oxidized and decarboxylated to 2-oxoglutarate, releasing CO2 + NADH (④); 2-oxoglutarate is oxidized and decarboxylated to succinyl-CoA, releasing a SECOND CO2 + NADH (⑤); succinyl-CoA converts to succinate, releasing GTP (⑥); succinate is oxidized to fumarate, releasing FADH2 (⑦); fumarate is hydrated to malate (⑧); malate is oxidized back to oxaloacetate, releasing NADH (⑨), closing the cycle. Net carbon balance per turn: 2 carbons enter as acetyl, exactly 2 leave as CO2 — at ④ and ⑤ only.", cn: "图6.3给出了与表6.3对应、编号①至⑨的完整路线图：乙酰辅酶A与草酰乙酸缩合（①）生成柠檬酸；柠檬酸经顺乌头酸异构为异柠檬酸（②③，均由乌头酸酶催化）；异柠檬酸被氧化并脱羧为2-氧戊二酸，释放CO2+NADH（④）；2-氧戊二酸被氧化并脱羧为琥珀酰辅酶A，释放第二个CO2+NADH（⑤）；琥珀酰辅酶A转化为琥珀酸，释放GTP（⑥）；琥珀酸被氧化为延胡索酸，释放FADH2（⑦）；延胡索酸加水生成苹果酸（⑧）；苹果酸被氧化回草酰乙酸，释放NADH（⑨），循环闭合。每转一圈的净碳平衡：2个碳以乙酰基形式进入，恰好2个碳以CO2形式离开——分别在④和⑤两步。" }
  ],
  terms: [
    { cz: "citrátový cyklus (cyklus trikarboxylových kyselin)", en: "citrate cycle (tricarboxylic acid cycle)", cn: "柠檬酸循环（三羧酸循环）", def_en: "The mitochondrial-matrix pathway that fully oxidizes acetyl-CoA's two carbons to 2 CO2 across 9 enzyme-catalyzed steps, generating 3 NADH, 1 FADH2, and 1 GTP per turn.", def_cn: "位于线粒体基质中的代谢途径，通过9个酶促步骤把乙酰辅酶A的两个碳原子完全氧化为2个CO2，每转一圈生成3个NADH、1个FADH2和1个GTP。" },
    { cz: "acetyl-CoA", en: "acetyl-CoA", cn: "乙酰辅酶A", def_en: "The activated two-carbon unit (thioester of acetate and coenzyme A) that condenses with oxaloacetate to start the citrate cycle; arrives from pyruvate oxidation, alanine transamination, or fatty-acid β-oxidation.", def_cn: "被活化的二碳单位（乙酸与辅酶A形成的硫酯），与草酰乙酸缩合启动柠檬酸循环；来自丙酮酸氧化、丙氨酸转氨基或脂肪酸β-氧化。" },
    { cz: "citrátsynthasa (EC 4.1.3.7)", en: "citrate synthase", cn: "柠檬酸合酶", def_en: "The cycle's regulatory first enzyme; condenses acetyl-CoA's methyl carbon with oxaloacetate's carbonyl carbon (aldol condensation) to give citrate + CoA-SH; inhibited by ATP (most organisms) or NADH (some).", def_cn: "循环的第一个调节性酶；催化乙酰辅酶A甲基碳与草酰乙酸羰基碳的羟醛缩合，生成柠檬酸和CoA-SH；被ATP（多数生物）或NADH（部分生物）抑制。" },
    { cz: "oxalacetát", en: "oxaloacetate", cn: "草酰乙酸", def_en: "The cycle's 4-carbon starting/regenerating compound; condenses with acetyl-CoA to form citrate and is regenerated at the cycle's final step (malate dehydrogenase).", def_cn: "循环的四碳起始/再生化合物；与乙酰辅酶A缩合生成柠檬酸，并在循环最后一步（苹果酸脱氢酶）重新生成。" },
    { cz: "mitochondriální matrix (Obr. 6.4)", en: "mitochondrial matrix", cn: "线粒体基质", def_en: "The innermost mitochondrial compartment (Mx in Obr. 6.4), enclosed by the inner membrane (Mb2), where all citrate-cycle reactions are localized.", def_cn: "线粒体最内层区室（图6.4中的Mx），由内膜（Mb2）包裹，柠檬酸循环全部反应均定位于此。" },
    { cz: "Tab. 6.3 / Obr. 6.3 — enzymy a schéma cyklu", en: "Tab. 6.3 and Obr. 6.3 — the cycle's enzyme/cofactor table and structural diagram", cn: "表6.3与图6.3——循环的酶/辅因子表与结构示意图", def_en: "The book's paired master reference for the citrate cycle: Tab. 6.3 lists all 9 reactions' enzymes, EC numbers and cofactors; Obr. 6.3 draws every intermediate's structure around the numbered cycle.", def_cn: "教材对柠檬酸循环的成对总参考：表6.3列出全部9个反应的酶、EC编号和辅因子；图6.3则围绕编号循环画出每个中间体的结构式。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Per Tab. 6.3, which enzyme of the citrate cycle is explicitly identified as a regulatory enzyme, strongly inhibited by ATP in most organisms?",
      q_cn: "根据表6.3及正文，柠檬酸循环中哪个酶被明确指出是调节性酶，在大多数生物中被ATP强烈抑制？",
      options: [
        "Citrate synthase",
        "Isocitrate dehydrogenase",
        "Aconitase",
        "Malate dehydrogenase"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-2-2", 2: "6-2-2-2", 3: "6-2-2-3" },
      optionNotes: {
        1: { en: "Tab. 6.3 gives it EC 1.1.1.41 with NAD⁺, and it catalyses reaction ④, the cycle's first CO₂-releasing step — but the book attaches no regulatory statement to it on these pages.", cn: "Tab. 6.3 给的是 EC 1.1.1.41、辅因子 NAD⁺，催化反应 ④，也就是本 cycle 第一个放出 CO₂ 的步骤——但教材在这几页里没有把任何调控的说法安在它头上。" },
        2: { en: "Aconitase occupies rows 2 and 3 of Tab. 6.3 with Fe²⁺ as cofactor; it only dehydrates citrate and rehydrates the double bond the other way round to give isocitrate. No redox, no regulation named.", cn: "Aconitase 占 Tab. 6.3 的第 2、3 行，辅因子是 Fe²⁺；它只是把 citrate 脱水、再换个方向把水加回双键上得到 isocitrate。既没有氧化还原，教材也没说它受调控。" },
        3: { en: "Malate dehydrogenase (EC 1.1.1.37, NAD⁺) is reaction ⑨, the step that closes the cycle by regenerating oxaloacetate and the cycle's third NADH — again with no regulatory claim in the text.", cn: "Malate dehydrogenase（EC 1.1.1.37，NAD⁺）是反应 ⑨，靠再生 oxaloacetate 和第三个 NADH 来闭合 cycle——教材同样没有说它受调控。" }
      },
      why_en: "The book states citrate synthase is a regulatory enzyme, strongly inhibited by ATP in most organisms and by NADH in some — this regulation is discussed right after its reaction mechanism, not attached to any of the other three enzymes on these pages.",
      why_cn: "教材指出柠檬酸合酶是调节性酶，在大多数生物中被ATP强烈抑制，在某些生物中被NADH抑制——这一调节机制紧跟在其反应机理之后讨论，并未提及本页其他三个酶具有此性质。"
    },
    {
      type: "short",
      q_en: "Table 6.3 lists 'akonitasa' twice, as reactions 2 and 3, both with Fe²⁺ as cofactor. Why, if it's the same enzyme?",
      q_cn: "表6.3将「乌头酸酶」列了两次，分别作为反应2和3，辅因子都是Fe²⁺。既然是同一个酶，为什么要分开列两行？",
      accept: ["citrate", "cis-aconitate", "isocitrate", "dehydration", "hydration", "isomerization", "顺乌头酸", "异柠檬酸", "脱水", "加水", "异构"],
      answer_en: "Aconitase catalyzes the isomerization of citrate to isocitrate in two chemically distinct sub-steps: first a dehydration of citrate to cis-aconitate (reaction 2), then a re-addition of water to cis-aconitate's double bond, but in a different orientation, giving isocitrate (reaction 3). The book numbers these as two separate reactions because they are two separate chemical transformations, even though one physical enzyme catalyzes both.",
      answer_cn: "乌头酸酶催化柠檬酸异构为异柠檬酸，这一过程分为两个化学上不同的子步骤：先是柠檬酸脱水生成顺乌头酸（反应2），再是水以不同方向重新加到顺乌头酸的双键上，生成异柠檬酸（反应3）。教材把这两步编为两个独立反应，是因为它们是两次不同的化学转化，尽管催化二者的是同一个酶蛋白。"
    },
    {
      type: "mcq",
      q_en: "Why is citrate synthase's condensation of oxaloacetate with acetyl-CoA described as possible specifically because of acetyl-CoA's THIOESTER bond?",
      q_cn: "为什么柠檬酸合酶催化草酰乙酸与乙酰辅酶A的缩合反应，其可行性被特别归因于乙酰辅酶A的硫酯键？",
      options: [
        "Because thioesters are so unstable that they hydrolyse on their own, and the CoA-SH released is what attacks oxaloacetate's carbonyl carbon",
        "Because, unlike an ordinary O-ester bond, the thioester resists mesomeric delocalization, fixing the carbonyl's reactivity and enabling an aldol condensation",
        "Because the thioester bond delocalises its carbonyl exactly as an ordinary O-ester does, and it is oxaloacetate's own methyl group that this activates for the condensation",
        "Because coenzyme A itself serves as the catalytic base of the reaction, and is split off only once the new bond between the two carbon skeletons has formed"
      ],
      answer: 1,
      optionRefs: { 0: "6-1-2-2", 2: "6-1-2-2" },
      optionNotes: {
        0: { en: "Instability is not the argument. The thioester is macroergic for a structural reason — sulfur blocks the mesomerism an ordinary O-ester enjoys — and CoA-SH leaves as a product of the condensation, not as the species that attacks oxaloacetate.", cn: "教材讲的不是不稳定。Thioester 之所以是 macroergic，理由是结构性的——硫原子挡住了普通 O-ester 那种 mesomerism；而 CoA-SH 是缩合反应的产物，不是去进攻 oxaloacetate 的那一方。" },
        2: { en: "Exactly backwards, and with the partners swapped as well. Sulfur PREVENTS the delocalisation an O-ester shows, and the methyl group entering the condensation is acetyl's, while oxaloacetate contributes the carbonyl carbon.", cn: "正好说反了，而且两个反应物也调换了。硫原子是阻止 O-ester 那种离域，而参与缩合的甲基来自 acetyl，oxaloacetate 提供的是 carbonyl 的碳。" },
        3: { en: "Coenzyme A is split off simultaneously with the condensation, as a product — Tab. 6.3 lists it as the reaction's cofactor, not as a catalytic base, and the book names no base-catalysis step here.", cn: "Coenzyme A 是在缩合的同时作为产物脱下来的——Tab. 6.3 把它列为该反应的辅因子，不是催化用的碱，教材在这里也没有提任何碱催化的步骤。" }
      },
      why_en: "The book states the thioester group prevents the mesomerism common to O-ester bonds, which fixes acetyl-CoA's carbonyl structure and enables the aldol-type condensation with oxaloacetate's carbonyl carbon — this is the mechanistic reason given, not instability or base catalysis.",
      why_cn: "教材指出，硫酯基团不会像氧酯键那样发生常见的离域共振，这就固定了乙酰辅酶A的羰基结构，从而使其能与草酰乙酸的羰基碳发生羟醛型缩合——这是教材给出的机理原因，而非硫酯不稳定或CoA起碱催化作用。"
    },
    {
      type: "short",
      q_en: "Name the three sources of acetyl-CoA entering the citrate cycle that the book lists at the start of 6.2.2.",
      q_cn: "教材在6.2.2节开头列出了乙酰辅酶A进入柠檬酸循环的三个来源，分别是什么？",
      accept: ["glycolysis", "pyruvate", "transamination", "alanine", "beta-oxidation", "fatty acid", "糖酵解", "丙氨酸", "转氨基", "脂肪酸", "β-氧化"],
      answer_en: "Pyruvate from glycolysis (ch. 7.8), pyruvate from transamination of alanine (ch. 5.2) — both converted to acetyl-CoA by oxidative decarboxylation (ch. 7.8.1) — and, in abundant amounts, fatty-acid β-oxidation (ch. 8.4).",
      answer_cn: "糖酵解（第7.8节）生成的丙酮酸；丙氨酸经转氨基作用（第5.2节）生成的丙酮酸——二者都经氧化脱羧（第7.8.1节）转化为乙酰辅酶A；以及大量来自脂肪酸β-氧化（第8.4节）。"
    }
  ],
  oral: {
    q_en: "Introduce the citrate cycle: where does its acetyl-CoA come from, where does the cycle run, and how does its first reaction work?",
    q_cn: "请介绍柠檬酸循环：其乙酰辅酶A从何而来？循环在哪里进行？第一步反应的机理是什么？",
    model_en: "The citrate cycle, also called the cycle of tricarboxylic acids, is the pathway that completely oxidizes the two carbons carried by acetyl-CoA, converting them to two molecules of carbon dioxide while generating reduced coenzymes. That acetyl-CoA has three possible origins: pyruvate produced in glycolysis, pyruvate produced by transamination of alanine, both of which reach acetyl-CoA through oxidative decarboxylation, and, in large amounts, the beta-oxidation of fatty acids. The entire sequence of reactions runs in the mitochondrial matrix, the innermost compartment bounded by the inner mitochondrial membrane, and it is conventionally summarized as nine numbered enzyme-catalyzed steps, each with its own cofactor requirement. The opening step is catalyzed by citrate synthase, which the book explicitly identifies as a regulatory enzyme, strongly inhibited by ATP in most organisms and by NADH in some. Mechanistically, this enzyme condenses the carbonyl carbon of oxaloacetate with the methyl carbon of acetyl-CoA in what is essentially an aldol condensation; this is possible because the thioester bond linking acetyl to coenzyme A, unlike an ordinary oxygen ester, cannot delocalize its electrons by mesomerism, so the carbonyl stays reactive. The condensation releases free coenzyme A-SH and produces citrate, a molecule with three carboxyl groups, which is exactly why this whole pathway is sometimes given the alternative name of the tricarboxylic acid cycle. Overall, each full turn takes in one two-carbon acetyl unit and, by the end of the cycle, releases exactly two carbons again as carbon dioxide, so there is no net gain or loss of carbon skeleton across a single turn — a fact that becomes important later when comparing this cycle to its glyoxylate-cycle variant.",
    checklist: [
      "Named all three sources of acetyl-CoA (glycolytic pyruvate, alanine transamination, fatty-acid β-oxidation)",
      "Stated the cycle runs in the mitochondrial matrix",
      "Identified citrate synthase as the regulatory first enzyme and named its ATP/NADH inhibition",
      "Explained the thioester-vs-O-ester mesomerism reasoning for why the aldol condensation works",
      "Gave the citrate synthase equation (oxaloacetate + acetyl-CoA → citrate + CoA-SH)",
      "Mentioned the alternative name 'tricarboxylic acid cycle' and why (citrate's three carboxyls)",
      "Stated that exactly 2 carbons enter (as acetyl) and 2 leave (as CO2) per turn, net zero"
    ]
  }
},

{
  id: "6-2-2-2",
  book: "cz",
  topicKey: "citric-acid-cycle",
  chapter: 6,
  section: "6.2.2",
  czTitle: "Citrátový cyklus — izomerace a dvě oxidační dekarboxylace (citrát → isocitrát → 2-oxoglutarát → sukcinyl-CoA)",
  enTitle: "The citrate cycle — isomerization and the two oxidative decarboxylations (citrate to isocitrate to 2-oxoglutarate to succinyl-CoA)",
  cnTitle: "柠檬酸循环——异构化与两步氧化脱羧（柠檬酸→异柠檬酸→2-氧戊二酸→琥珀酰辅酶A）",
  pages: [138],
  coverage: "full",
  coverageNote: "Full page read directly from the scan, including the Obr. 6.4 caption at the top (continued from p.137's diagram, covered in the previous node). Covers: the citrate-cannot-be-oxidized-further / isomerization-to-isocitrate paragraph with its full three-structure aconitase diagram (citrát ⇌ cis-akonitát ⇌ isocitrát, each -H2O/+H2O arrow zoomed to confirm direction and the exact carbon bearing OH shifts from tertiary in citrate to secondary in isocitrate); the isocitrate-to-2-oxoglutarate mechanism diagram, zoomed specifically to confirm the bracketed, unlabelled-as-a-named-box 'oxalsukcinát' intermediate structure and the NAD⁺/NADH and H⁺/CO2 arrow labels on each side of it; the paragraph explaining oxalosuccinate's β-carboxyl instability and its general statement that 3-oxo-acid decarboxylation is (with 2-oxo-acid oxidative decarboxylation) a major CO2 source in biochemical systems generally; and the final 2-oxoglutarate-to-succinyl-CoA reaction and its explicit cross-reference to pyruvate's oxidative decarboxylation mechanism (ch. 7.8), justified by 2-oxoglutarate being pyruvate's homolog.",
  cnNote: { topic: "二十", title: "柠檬酸循环 (笔记二十, 约p.119 — 页码来自HANDOFF.md §11预填表格的标题匹配，本次任务未直接查阅中文笔记PDF核实，故标记为partial)", status: "partial" },
  mustKnow: { en: "Citrate itself cannot be oxidised any further — its hydroxyl sits on a carbon with no hydrogen left to give up — so the cycle's very first move after forming citrate is to isomerise it to isocitrate, whose hydroxyl CAN be dehydrogenated. And both of the cycle's CO2-releasing steps happen right here, at reactions 4 and 5; everything from succinate onward is redox and hydration chemistry, with no more carbon lost.", cn: "柠檬酸本身没法再被氧化——它的羟基长在一个没有多余氢可以脱的碳上——所以循环生成柠檬酸之后的第一件事，就是把它异构成异柠檬酸，这个羟基**可以**被脱氢。而循环释放的两个 CO2，全都在这里出来——反应④和⑤；从琥珀酸往后，全是氧化还原和加水的化学，不会再丢碳。" },
  summary: {
    en: "This node covers the citrate cycle's two chemically richest reactions: the isomerization of citrate to isocitrate, and the cycle's two CO2-releasing oxidative decarboxylations. Citrate's hydroxyl sits on a TERTIARY carbon and so cannot itself be oxidized further; aconitase (aconitate hydratase) first removes water to give cis-aconitate, then re-adds water in a different orientation to give isocitrate, whose hydroxyl now sits on a SECONDARY carbon capable of dehydrogenation. Isocitrate dehydrogenase (NAD⁺) then oxidizes that hydroxyl to a ketone, producing the unstable intermediate oxalosuccinate — a β-keto (3-oxo) acid that decarboxylates spontaneously and exergonically, losing its β-carboxyl as CO2 to give 2-oxoglutarate. The book explicitly flags 3-oxo-acid decarboxylation, alongside oxidative decarboxylation of 2-oxo acids, as a major general source of CO2 in biochemical systems. 2-oxoglutarate is then oxidatively decarboxylated a second time — by the same mechanism used for pyruvate (ch. 7.8), since 2-oxoglutarate is pyruvate's homolog — releasing the cycle's second CO2 and producing succinyl-CoA, NADH and H⁺. After this point, no more carbon leaves the cycle.",
    cn: "本节讲的是柠檬酸循环中化学内容最丰富的两步反应：柠檬酸异构为异柠檬酸，以及循环中释放CO2的两次氧化脱羧。柠檬酸的羟基位于叔碳原子上，因此本身无法被进一步氧化；乌头酸酶（乌头酸水合酶）先脱去一分子水生成顺乌头酸，再以不同方向重新加水生成异柠檬酸，此时羟基已转移到可以脱氢的仲碳原子上。异柠檬酸脱氢酶（NAD⁺）随后将该羟基氧化为酮基，生成不稳定的中间体草酰琥珀酸——一种β-酮酸（3-氧代酸），会自发地放能脱羧，失去其β位羧基（以CO2形式）生成2-氧戊二酸。教材特别指出，3-氧代酸的脱羧，连同2-氧代酸的氧化脱羧，是生化系统中CO2的主要来源之一。2-氧戊二酸随后经历第二次氧化脱羧——采用与丙酮酸（第7.8节）相同的机制，因为2-氧戊二酸是丙酮酸的同系物——释放循环中第二个CO2，生成琥珀酰辅酶A、NADH和H⁺。此后，循环中不再有碳原子离开。"
  },
  points: [
    { cz: "citrát = terciární alkohol → nelze oxidovat", en: "Citrate, the product of the citrate-synthase condensation, contains a TERTIARY alcohol group, which CANNOT be further oxidized (no way to form a carbonyl there without breaking a C-C bond). The prerequisite for citrate's further oxidative transformation is therefore isomerization to isocitrate, whose SECONDARY alcohol group IS capable of dehydrogenation.", cn: "柠檬酸合酶缩合反应的产物柠檬酸含有一个叔醇基团，无法被进一步氧化（若不断裂C-C键就无法在该位置形成羰基）。因此，柠檬酸要进一步发生氧化转化，前提是先异构为异柠檬酸，其仲醇基团才具备脱氢的能力。" },
    { cz: "akonitasa (akonitáthydratasa) — dehydratace + rehydratace přes cis-akonitát", en: "This isomerization is catalyzed by AKONITÁTHYDRATASA (also called akonitasa/aconitase): it involves dehydration of citrate — removing H2O to form cis-aconitate's α,β double bond — followed by addition of water back onto that double bond, in a new orientation, to give isocitrate. Structures: citrát (HO-C-COO⁻ with two CH2-COO⁻ arms) ⇌(-H2O/+H2O)⇌ cis-akonitát (C=CH-COO⁻ with one CH2-COO⁻ arm) ⇌(+H2O/-H2O)⇌ isocitrát (two adjacent CH-COO⁻ carbons, one now bearing OH, plus one CH2-COO⁻ arm). No net redox occurs across these two sub-steps; Tab. 6.3 lists Fe²⁺ as the cofactor for both.", cn: "该异构化由乌头酸水合酶（亦称乌头酸酶）催化：先使柠檬酸脱水——脱去一分子水，形成顺乌头酸的α,β双键——再让水以新的方向重新加到该双键上，生成异柠檬酸。结构式：柠檬酸（HO-C-COO⁻，两侧各带一个CH2-COO⁻臂）⇌（-H2O/+H2O）⇌顺乌头酸（C=CH-COO⁻，带一个CH2-COO⁻臂）⇌（+H2O/-H2O）⇌异柠檬酸（两个相邻的CH-COO⁻碳，其中一个现在带OH，另加一个CH2-COO⁻臂）。这两个子步骤中不发生净氧化还原；表6.3列出两步的辅因子均为Fe²⁺。" },
    { cz: "isocitrátdehydrogenasa (EC 1.1.1.41) → oxalsukcinát (nestabilní, v hranaté závorce)", en: "Isocitrate dehydrogenase (NAD⁺-dependent) first oxidizes isocitrate's secondary -OH to a ketone, giving OXALOSUCCINATE — drawn by the book INSIDE SQUARE BRACKETS to mark it as a transient, non-isolable enzyme-bound intermediate, not a free metabolite. Structure: isocitrát (HO-CH-COO⁻ / CH-COO⁻ / CH2-COO⁻) + NAD⁺ → [oxalsukcinát: O=C-COO⁻ / CH-COO⁻ / CH2-COO⁻] + NADH.", cn: "异柠檬酸脱氢酶（NAD⁺依赖）先将异柠檬酸的仲羟基氧化为酮基，生成草酰琥珀酸——教材将其画在方括号内，标明这是一个短暂存在、无法分离的酶结合中间体，而非游离代谢物。结构式：异柠檬酸（HO-CH-COO⁻ / CH-COO⁻ / CH2-COO⁻）+NAD⁺→[草酰琥珀酸：O=C-COO⁻ / CH-COO⁻ / CH2-COO⁻]+NADH。" },
    { cz: "oxalsukcinát → 2-oxoglutarát — spontánní dekarboxylace β-ketokyseliny (CO2 č.1)", en: "Oxalosuccinate is unstable because one of its carboxyl groups sits in the β-POSITION relative to the new carbonyl group. Such β-keto acids (3-oxo acids) decarboxylate SPONTANEOUSLY (exergonically): [oxalsukcinát] + H⁺ → 2-oxoglutarát (O=C-COO⁻ / CH2 / CH2-COO⁻) + CO2. The book states explicitly that breakdown of 3-oxo acids is, alongside oxidative decarboxylation of 2-oxo acids, a MAJOR SOURCE OF CO2 in biochemical systems generally — not a claim specific to this one reaction. This is the cycle's FIRST CO2-releasing step.", cn: "草酰琥珀酸不稳定，是因为其中一个羧基位于相对新生羰基的β位。这类β-酮酸（3-氧代酸）会自发地（放能地）脱羧：[草酰琥珀酸]+H⁺→2-氧戊二酸（O=C-COO⁻ / CH2 / CH2-COO⁻）+CO2。教材明确指出，3-氧代酸的分解，连同2-氧代酸的氧化脱羧，是生化系统中CO2的主要来源——这并非仅针对这一个反应的特殊说法。这是循环中第一个释放CO2的步骤。" },
    { cz: "2-oxoglutarát → sukcinyl-CoA — mechanismus jako u pyruvátu (CO2 č.2)", en: "Oxidative decarboxylation of 2-oxoglutaric acid proceeds by the SAME mechanism as oxidative decarboxylation of pyruvate (ch. 7.8), because 2-oxoglutarate is a HOMOLOG of pyruvate (both are α/2-oxo acids). Reaction: 2-oxoglutarát (O=C-COO⁻ / CH2 / CH2-COO⁻) + NAD⁺ + CoA-SH → sukcinyl-CoA (CO~S-CoA / CH2 / CH2-COO⁻) + CO2 + NADH + H⁺. This is the cycle's SECOND and LAST CO2-releasing step — every reaction from here to the end of the cycle (succinyl-CoA → succinate → fumarate → malate → oxaloacetate) is redox or hydration chemistry only, with no further loss of carbon.", cn: "2-氧戊二酸的氧化脱羧采用与丙酮酸氧化脱羧（第7.8节）相同的机制，因为2-氧戊二酸是丙酮酸的同系物（二者都是α/2-氧代酸）。反应式：2-氧戊二酸（O=C-COO⁻ / CH2 / CH2-COO⁻）+NAD⁺+CoA-SH→琥珀酰辅酶A（CO~S-CoA / CH2 / CH2-COO⁻）+CO2+NADH+H⁺。这是循环中第二个、也是最后一个释放CO2的步骤——从这里到循环结束（琥珀酰辅酶A→琥珀酸→延胡索酸→苹果酸→草酰乙酸）的所有反应都只是氧化还原或水合反应，不再有碳原子丢失。" },
    { cz: "šest kofaktorů komplexu 5 (TDP, CoA, FAD, NAD+, kys. lipoová, Mg2+)", en: "Per Tab. 6.3, reaction 5 ('2-oxoglutarátoxidasa') needs SIX cofactors: TDP (thiamine diphosphate), CoA, FAD, NAD⁺, lipoic acid, and Mg²⁺ — the same cofactor set the book uses for pyruvate's oxidative decarboxylation, consistent with the two reactions sharing one mechanism.", cn: "根据表6.3，反应5（「2-氧戊二酸氧化酶」）需要六种辅因子：TDP（焦磷酸硫胺素）、CoA、FAD、NAD⁺、硫辛酸和Mg²⁺——与教材中丙酮酸氧化脱羧所用的辅因子组合完全相同，这与两个反应共享同一机制的说法相符。" },
    { cz: "shrnutí — uhlík opouští cyklus PŘESNĚ v tomto úseku (④ a ⑤)", en: "Taken together, this node covers the ONLY two points in the entire 9-reaction cycle where carbon leaves as CO2: reaction ④ (isocitrate → 2-oxoglutarate, via unstable oxalosuccinate) and reaction ⑤ (2-oxoglutarate → succinyl-CoA, mechanistically identical to pyruvate's decarboxylation). Both are oxidative-decarboxylation-type losses, both generate NADH, and together they account for the citrate cycle's carbon-counting logic: 2 carbons in (as acetyl), 2 carbons out (as CO2, here).", cn: "综合来看，本节涵盖了整个九步循环中唯一两个碳以CO2形式离开的环节：反应④（异柠檬酸→2-氧戊二酸，经不稳定的草酰琥珀酸中间体）和反应⑤（2-氧戊二酸→琥珀酰辅酶A，机制上与丙酮酸脱羧完全相同）。两者都是氧化脱羧类型的碳损失，都生成NADH，二者共同构成了柠檬酸循环碳计数的核心逻辑：2个碳（以乙酰基形式）进入，2个碳（在此处以CO2形式）离开。" }
  ],
  terms: [
    { cz: "isocitrát", en: "isocitrate", cn: "异柠檬酸", def_en: "Citrate's isomer, bearing a secondary (dehydrogenatable) hydroxyl instead of citrate's tertiary one; formed by aconitase via cis-aconitate.", def_cn: "柠檬酸的异构体，带有可脱氢的仲羟基而非柠檬酸的叔羟基；由乌头酸酶经顺乌头酸生成。" },
    { cz: "cis-akonitát", en: "cis-aconitate", cn: "顺乌头酸", def_en: "The unsaturated intermediate between citrate and isocitrate, formed by dehydration of citrate and consumed by re-hydration to isocitrate.", def_cn: "柠檬酸与异柠檬酸之间的不饱和中间体，由柠檬酸脱水生成，再经加水转化为异柠檬酸。" },
    { cz: "akonitasa (akonitáthydratasa, EC 4.2.1.3)", en: "aconitase (aconitate hydratase)", cn: "乌头酸酶（乌头酸水合酶）", def_en: "Fe²⁺-dependent enzyme catalyzing citrate ⇌ cis-aconitate ⇌ isocitrate by sequential dehydration and rehydration; no net oxidation occurs.", def_cn: "依赖Fe²⁺的酶，通过先脱水后加水催化柠檬酸⇌顺乌头酸⇌异柠檬酸的转化；过程中不发生净氧化。" },
    { cz: "oxalsukcinát", en: "oxalosuccinate", cn: "草酰琥珀酸", def_en: "Unstable β-keto (3-oxo) acid intermediate formed by NAD⁺-linked oxidation of isocitrate's hydroxyl; decarboxylates spontaneously to 2-oxoglutarate.", def_cn: "异柠檬酸羟基经NAD⁺偶联氧化生成的不稳定β-酮酸（3-氧代酸）中间体；会自发脱羧生成2-氧戊二酸。" },
    { cz: "2-oxoglutarát (α-oxoglutarát, α-ketoglutarát)", en: "2-oxoglutarate (α-oxoglutarate, α-ketoglutarate)", cn: "2-氧戊二酸（α-酮戊二酸）", def_en: "The 5-carbon 2-oxo acid formed by isocitrate dehydrogenase's oxidation-plus-decarboxylation of isocitrate; itself a homolog of pyruvate.", def_cn: "由异柠檬酸脱氢酶对异柠檬酸进行氧化并脱羧后生成的五碳2-氧代酸；本身是丙酮酸的同系物。" },
    { cz: "isocitrátdehydrogenasa (EC 1.1.1.41)", en: "isocitrate dehydrogenase", cn: "异柠檬酸脱氢酶", def_en: "NAD⁺-dependent enzyme oxidizing isocitrate to (unstable) oxalosuccinate, which decarboxylates to 2-oxoglutarate; the cycle's first CO2-releasing step.", def_cn: "NAD⁺依赖酶，将异柠檬酸氧化为（不稳定的）草酰琥珀酸，后者脱羧生成2-氧戊二酸；是循环中第一个释放CO2的步骤。" },
    { cz: "sukcinyl-CoA", en: "succinyl-CoA", cn: "琥珀酰辅酶A", def_en: "High-energy thioester formed by oxidative decarboxylation of 2-oxoglutarate; the cycle's last carbon-losing product, en route to substrate-level GTP formation.", def_cn: "由2-氧戊二酸氧化脱羧生成的高能硫酯；是循环中最后一个发生碳损失的产物，随后经底物水平磷酸化生成GTP。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Exactly which two reactions of the citrate cycle release CO2?",
      q_cn: "柠檬酸循环中恰好是哪两个反应释放CO2？",
      options: [
        "Citrate synthase and aconitase, reactions ① and ②",
        "Succinate dehydrogenase and fumarase, reactions ⑦ and ⑧ of the cycle",
        "Isocitrate dehydrogenase and 2-oxoglutarate dehydrogenase",
        "Malate dehydrogenase and succinyl-CoA synthetase"
      ],
      answer: 2,
      optionRefs: { 1: "6-2-2-3", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "These two are where carbon ENTERS and is rearranged: citrate synthase condenses acetyl-CoA onto oxaloacetate, and aconitase only moves a hydroxyl by dehydrating and rehydrating. Neither loses a carbon.", cn: "这两步是碳进入并被重排的地方：citrate synthase 把 acetyl-CoA 缩合到 oxaloacetate 上，aconitase 只是先脱水再加水、把羟基挪个位置。两步都不掉碳。" },
        1: { en: "Reactions ⑦ and ⑧ are a dehydrogenation and a hydration — succinate to fumarate, then fumarate plus water to L-malate. Everything from succinyl-CoA onward is redox and hydration chemistry with no further carbon lost.", cn: "反应 ⑦ 和 ⑧ 分别是脱氢和加水——succinate 变 fumarate，再由 fumarate 加水成 L-malate。从 succinyl-CoA 往后全是氧化还原和加水，不再掉任何碳。" },
        3: { en: "Reaction ⑨ regenerates oxaloacetate and the third NADH, and reaction ⑥ is the substrate-level phosphorylation that makes GTP; both are four-carbon-in, four-carbon-out steps.", cn: "反应 ⑨ 再生 oxaloacetate 并给出第三个 NADH，反应 ⑥ 是生成 GTP 的 substrate-level phosphorylation；两步都是四碳进、四碳出。" }
      },
      why_en: "CO2 is released only at reaction ④ (isocitrate → 2-oxoglutarate, via the spontaneous decarboxylation of oxalosuccinate) and reaction ⑤ (2-oxoglutarate → succinyl-CoA, mechanistically identical to pyruvate's oxidative decarboxylation). No other reaction in the cycle loses carbon.",
      why_cn: "CO2仅在反应④（异柠檬酸→2-氧戊二酸，经草酰琥珀酸的自发脱羧）和反应⑤（2-氧戊二酸→琥珀酰辅酶A，机制上与丙酮酸氧化脱羧完全相同）中释放。循环中的其他反应都不发生碳损失。"
    },
    {
      type: "short",
      q_en: "Why does oxalosuccinate decarboxylate spontaneously, and what class of compound does that make it?",
      q_cn: "为什么草酰琥珀酸会自发脱羧？这使它属于哪一类化合物？",
      accept: ["beta", "β", "keto acid", "3-oxo", "carboxyl", "unstable", "酮酸", "3-氧代", "羧基", "不稳定"],
      answer_en: "Oxalosuccinate has one of its carboxyl groups in the β-position relative to its (newly formed) carbonyl group, making it a β-keto acid (3-oxo acid); such acids decarboxylate spontaneously and exergonically, which is why oxalosuccinate is drawn in brackets as a transient intermediate rather than a stable free metabolite.",
      answer_cn: "草酰琥珀酸有一个羧基位于其（新生成的）羰基的β位，使它成为β-酮酸（3-氧代酸）；这类酸会自发地、放能地脱羧，这也是教材把草酰琥珀酸画在方括号内、标为短暂中间体而非稳定游离代谢物的原因。"
    },
    {
      type: "mcq",
      q_en: "Why does the book say 2-oxoglutarate's oxidative decarboxylation uses the 'same mechanism' described for pyruvate in ch. 7.8?",
      q_cn: "为什么教材说2-氧戊二酸的氧化脱羧使用的是第7.8节描述丙酮酸时「相同的机制」？",
      options: [
        "Because both reactions run in the cytoplasm rather than in the matrix, where the rest of the cycle sits",
        "Because 2-oxoglutarate is a homolog of pyruvate — both are 2-oxo acids, differing only in chain length",
        "Because pyruvate is itself an intermediate of the citrate cycle, joining it directly at reaction ⑤",
        "Because one single-subunit enzyme, listed in Tab. 6.3 with its own EC number, catalyses both reactions"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1", 2: "6-2-2-1", 3: "6-2-2-1" },
      optionNotes: {
        0: { en: "Both reactions do share the matrix — Obr. 6.4 places the whole cycle there, and pyruvate's oxidative decarboxylation delivers acetyl-CoA into it. But compartment is not what the book is pointing at; the shared mechanism follows from the shared 2-oxo acid chemistry.", cn: "两个反应确实都在 matrix 里——Obr. 6.4 把整个 cycle 画在那里，pyruvate 的氧化脱羧也是在那里把 acetyl-CoA 送进来的。但教材说的不是区室问题；机制相同是因为两者都是 2-oxo 酸。" },
        2: { en: "Pyruvate is not a cycle intermediate at all. It reaches the cycle only after its own oxidative decarboxylation, and it enters as acetyl-CoA at reaction ①, not at ⑤.", cn: "Pyruvate 根本不是 cycle 的中间产物。它要先经过自己的氧化脱羧，然后以 acetyl-CoA 的形式从反应 ① 进入，而不是从 ⑤。" },
        3: { en: "Tab. 6.3 prints reaction ⑤'s enzyme in quotation marks with no EC number at all, and lists six cofactors for it — TDP, CoA, FAD, NAD⁺, lipoic acid and Mg²⁺. That is a multi-enzyme complex, and a different one from pyruvate's.", cn: "Tab. 6.3 把反应 ⑤ 的酶名加了引号，而且完全没给 EC 号，还列了六个辅因子——TDP、CoA、FAD、NAD⁺、lipoic acid、Mg²⁺。那是个多酶复合体，而且和 pyruvate 用的不是同一个。" }
      },
      why_en: "The book states 2-oxoglutarate is a homolog of pyruvate — both belong to the 2-oxo acid class, just with different chain lengths — which is why the same oxidative-decarboxylation mechanism (and the same six-cofactor multi-enzyme-complex machinery: TDP, CoA, FAD, NAD+, lipoic acid, Mg2+) applies to both.",
      why_cn: "教材指出2-氧戊二酸是丙酮酸的同系物——二者都属于2-氧代酸类，只是链长不同——这正是同一套氧化脱羧机制（以及同一套六种辅因子的多酶复合体机制：TDP、CoA、FAD、NAD⁺、硫辛酸、Mg²⁺）能同时适用于两者的原因。"
    }
  ],
  oral: {
    q_en: "Walk through how citrate becomes succinyl-CoA, and explain precisely where and why the cycle's two CO2 molecules are released.",
    q_cn: "请说明柠檬酸如何转化为琥珀酰辅酶A，并准确说明循环释放两个CO2分子的具体位置和原因。",
    model_en: "Citrate itself cannot be oxidized any further because its hydroxyl group sits on a tertiary carbon, so before anything else can happen it must be isomerized to isocitrate, a job done by aconitase, which first removes a molecule of water to form the unsaturated intermediate cis-aconitate and then adds water back on in a different orientation, placing the hydroxyl on a secondary carbon instead. That secondary hydroxyl is now oxidizable, and isocitrate dehydrogenase does exactly that, using NAD+ to oxidize it to a ketone and produce oxalosuccinate — a compound the book draws inside brackets because it never really exists as a free, stable molecule. The reason it doesn't is that one of its carboxyl groups sits in the beta position relative to that new carbonyl, and beta-keto acids of this kind decarboxylate spontaneously and exergonically, so oxalosuccinate immediately loses that carboxyl as carbon dioxide and becomes 2-oxoglutarate. That is the cycle's first carbon dioxide. The second follows almost immediately: 2-oxoglutarate is itself a homolog of pyruvate, just a longer-chain two-oxo acid, so it is oxidatively decarboxylated by essentially the same multi-enzyme-complex mechanism used for pyruvate back in glycolysis's endpoint, needing the same six cofactors — thiamine diphosphate, coenzyme A, FAD, NAD+, lipoic acid and magnesium — and yielding succinyl-CoA, carbon dioxide, and NADH. After this point it's worth remembering that not one more carbon atom leaves the cycle; everything that happens from succinyl-CoA onward is rearrangement, hydration and oxidation-reduction chemistry, not decarboxylation.",
    checklist: [
      "Explained why citrate itself cannot be oxidized (tertiary alcohol)",
      "Described aconitase's two sub-steps via cis-aconitate",
      "Named oxalosuccinate as the unstable, bracketed intermediate and why (β-keto acid)",
      "Identified the first CO2 release at isocitrate dehydrogenase",
      "Explained the pyruvate/2-oxoglutarate homology justifying the shared mechanism",
      "Named all six cofactors of the 2-oxoglutarate dehydrogenase step",
      "Identified the second CO2 release at 2-oxoglutarate dehydrogenase",
      "Stated explicitly that no further carbon leaves the cycle after this point"
    ]
  }
},

{
  id: "6-2-2-3",
  book: "cz",
  topicKey: "citric-acid-cycle",
  chapter: 6,
  section: "6.2.2",
  czTitle: "Citrátový cyklus — substrátová fosforylace a regenerace oxalacetátu, souhrnná rovnice a energetická bilance",
  enTitle: "The citrate cycle — substrate-level phosphorylation and oxaloacetate regeneration, overall equation and ATP yield",
  cnTitle: "柠檬酸循环——底物水平磷酸化与草酰乙酸的再生，总反应式与ATP产量",
  pages: [139, 140],
  coverage: "full",
  coverageNote: "p.139 read in full: the succinyl-CoA-to-succinate reaction and its explicit statement that this conversion happens via reaction with GDP + Pi rather than simple hydrolysis (succinyl-CoA-synthetasa), the separate GTP+ADP⇌GDP+ATP transphosphorylation equation, the succinate dehydrogenase reaction with its note about covalently-bound FAD and its structural diagram (zoomed to confirm the trans double bond drawn for fumarate), the fumarase reaction (explicitly compared by the book to reaction 3's hydration chemistry), the malate dehydrogenase reaction and its aside that oxaloacetate, like oxalosuccinate, is technically a 3-oxo acid but markedly more stable, the full per-turn balanced equation, the ATP-yield equation with the book's stated ~3 ATP/NADH and ~2 ATP/FADH2 conversion ratios, and the start of the glucose-oxidation 38-ATP breakdown sentence. Continued to the very top of p.140, where that same sentence concludes with the '1159 kJ·mol⁻¹ / ~40% / ΔG°'=-2870 kJ·mol⁻¹' figures, verified against the arithmetic (38×~30.5≈1159; 1159/2870≈40%) before being trusted, immediately before the italic 'Vztah citrátového cyklu k biosyntetickým pochodům' subheading that belongs to the next node.",
  cnNote: { topic: "二十", title: "柠檬酸循环 (笔记二十, 约p.119 — 页码来自HANDOFF.md §11预填表格的标题匹配，本次任务未直接查阅中文笔记PDF核实，故标记为partial)", status: "partial" },
  lehNotes: [
    { kind: "conflict", node: "L-16-2-1",
      en: "THE ATP TOTAL IN THIS NODE IS NOT THE ONE A MODERN TEXTBOOK GIVES, and the difference is worth understanding before an examiner asks you to justify the number. This node uses about 3 ATP per NADH and about 2 per FADH2, hence 12 ATP per acetyl-CoA and 38 per glucose as 8 + 6 + 24. Lehninger 16.2 (TABLE 16-1, A p.589) uses the measured, non-integer values of about 2.5 per NADH and about 1.5 per FADH2, and reports that âas many as 32 atp are obtained per glucoseâ â a range of 30 to 32, because the cytosolic NADH from glycolysis yields either 3 or 5 ATP depending on which shuttle carries its electrons into the matrix. The efficiency figure moves with it: 34 percent of the theoretical maximum on standard free energies, nearer 65 percent once corrected for the actual cost of making ATP in a cell, against the roughly 40 percent quoted here. The biochemistry is identical; only the P/O stoichiometry convention differs. ANSWER 38 IN THIS COURSE, but be able to say why.",
      cn: "本节点的 ATP 总账并不是现代教科书给的那个，而这个差别值得在考官要求你为这个数字辩护之前弄清楚。本节点用的是每个 NADH 约 3 个 ATP、每个 FADH2 约 2 个，于是每个乙酰-CoA 12 个、每分子葡萄糖 38 个（拆分为 8 + 6 + 24）。Lehninger 16.2（TABLE 16-1，A p.589）用的是实测的非整数值：每个 NADH 约 2.5 个、每个 FADH2 约 1.5 个，并报告“每分子葡萄糖最多可得 32 个 ATP”——实际为 30 到 32 的范围，因为糖酦解产生的胞质 NADH 依其电子由哪种穿梭机制送入基质，产出 3 个或 5 个 ATP。效率数字也随之变动：按标准自由能计算是理论最大值的 34%，按细胞内合成 ATP 的实际代价校正后接近 65%，而本节点引用的约为 40%。生物化学是一样的，不同的只是 P/O 化学计量的惯例。在本课程里就答 38，但要能说出理由。" }
  ],
  mustKnow: { en: "The cycle's only direct nucleotide-triphosphate-forming step makes GTP, not ATP — succinyl-CoA's energy is captured as GTP first, and only converted to ATP in a separate reaction afterward. And of the 2870 kJ/mol theoretically available from fully oxidising glucose, the cell only actually captures about 40% as ATP (38 mol); the rest leaves as heat, which is not waste but the price of keeping the whole sequence running forward rather than backward.", cn: "循环里唯一一步直接生成核苷三磷酸的反应，产物是 GTP，不是 ATP——琥珀酰辅酶A的能量先以 GTP 的形式被捕获，之后才在另一个反应里换成 ATP。而完全氧化一摩尔葡萄糖理论上能放出 2870 kJ，细胞实际只以 ATP 的形式捕获了大约 40%（38 摩尔）；剩下的以热的形式散失——这不是浪费，而是让整条反应链保持朝一个方向走而不逆转所必须付出的代价。" },
  summary: {
    en: "This node covers the citrate cycle's second half — from succinyl-CoA back to oxaloacetate — none of which loses any more carbon, plus the cycle's full bookkeeping. Succinyl-CoA, a high-energy thioester, is converted to succinate not by simple hydrolysis but by succinyl-CoA synthetase's reaction with GDP and inorganic phosphate, directly forming GTP (whose terminal phosphate can separately be transferred to ADP to give ATP). Succinate dehydrogenase, notable for containing covalently bound FAD, oxidizes succinate to the trans-isomer fumarate, releasing FADH2. Fumarase hydrates fumarate's double bond to L-malate — chemically parallel to the earlier aconitase hydration step. Malate dehydrogenase closes the cycle, oxidizing malate back to oxaloacetate (itself, like oxalosuccinate, technically a 3-oxo acid, but considerably more stable) and producing the cycle's third NADH. One full turn is captured by the equation Acetyl-CoA + 3 NAD⁺ + FAD + GDP + Pi + 2 H2O → 2 CO2 + 3 NADH + 3 H⁺ + FADH2 + GTP + CoA. Using the book's stated respiratory-chain conversion ratios of about 3 ATP per NADH and 2 ATP per FADH2, one full turn nets a maximum of 12 ATP per acetyl-CoA; scaled up, complete aerobic oxidation of one mole of glucose nets a maximum of 38 mol ATP (8 from glycolysis + 6 from pyruvate's oxidative decarboxylation + 24 from two turns of the citrate cycle), equal to about 1159 kJ/mol — roughly 40% of glucose oxidation's total ΔG°' of -2870 kJ/mol.",
    cn: "本节讲的是柠檬酸循环的后半段——从琥珀酰辅酶A回到草酰乙酸——这一段不再有碳损失，此外还讲循环的完整能量核算。琥珀酰辅酶A是高能硫酯，并非通过简单水解、而是经琥珀酰辅酶A合成酶催化其与GDP和无机磷酸反应转化为琥珀酸，直接生成GTP（其末端磷酸基团可另经一步反应转移给ADP，生成ATP）。琥珀酸脱氢酶的特点是含有共价结合的FAD，将琥珀酸氧化为反式异构体延胡索酸，释放FADH2。延胡索酸酶使水加成到延胡索酸的双键上，生成L-苹果酸——这在化学上与之前乌头酸酶的加水步骤相呼应。苹果酸脱氢酶使循环闭合，将苹果酸重新氧化为草酰乙酸（草酰乙酸本身，与草酰琥珀酸一样，严格来说也是一种3-氧代酸，但要稳定得多），并生成循环中第三个NADH。循环转一圈可用如下方程概括：乙酰辅酶A+3NAD⁺+FAD+GDP+Pi+2H2O→2CO2+3NADH+3H⁺+FADH2+GTP+CoA。按照教材给出的呼吸链换算比例——约每个NADH对应3个ATP，每个FADH2对应2个ATP——循环转一圈每个乙酰辅酶A最多净得12个ATP；按此推算，1摩尔葡萄糖完全有氧氧化最多可净得38摩尔ATP（糖酵解8个+丙酮酸氧化脱羧6个+柠檬酸循环两圈24个），相当于约1159 kJ/mol——约占葡萄糖氧化总ΔG°'（-2870 kJ/mol）的40%。"
  },
  points: [
    { cz: "sukcinyl-CoA-synthetasa — reakce s GDP+Pi, ne pouhá hydrolýza", en: "The succinyl-CoA formed in the previous step is a MACROERGIC (high-energy) compound. It converts to succinate NOT by simple hydrolysis but by reaction with GDP and inorganic phosphate, catalyzed by succinyl-CoA-synthetasa: sukcinyl~S-CoA + Pi + GDP → sukcinát + GTP + CoA-SH. The direct product is GTP, not ATP.", cn: "上一步生成的琥珀酰辅酶A是高能化合物。它转化为琥珀酸的方式并非简单水解，而是与GDP和无机磷酸反应，由琥珀酰辅酶A合成酶催化：琥珀酰~S-CoA+Pi+GDP→琥珀酸+GTP+CoA-SH。直接产物是GTP，而不是ATP。" },
    { cz: "GTP + ADP ⇌ GDP + ATP — koncový fosfát lze přenést", en: "The book gives this as a SEPARATE reaction: the terminal phosphate residue of GTP can be transferred onto ADP: GTP + ADP ⇌ GDP + ATP. This distinguishes GTP FORMATION (at the synthetase step itself) from the later, optional conversion to ATP.", cn: "教材将此列为一个独立的反应：GTP的末端磷酸基团可以转移到ADP上：GTP+ADP⇌GDP+ATP。这明确区分了GTP的生成（在合成酶这一步本身）与随后、可选的向ATP的转化。" },
    { cz: "sukcinátdehydrogenasa — kovalentně vázaný FAD, trans-fumarát", en: "Succinate is oxidized to fumarate by succinate dehydrogenase, which the book specifically notes contains COVALENTLY bound FAD (most flavoenzymes bind FAD non-covalently). Fumarate forms as the TRANS isomer: sukcinát (CH2-COO⁻/CH2-COO⁻) + FAD → fumarát (⁻OOC-CH=CH-COO⁻, trans) + FADH2.", cn: "琥珀酸被琥珀酸脱氢酶氧化为延胡索酸，教材特别指出该酶含有共价结合的FAD（大多数黄素酶的FAD都是非共价结合的）。生成的延胡索酸是反式异构体：琥珀酸（CH2-COO⁻/CH2-COO⁻）+FAD→延胡索酸（⁻OOC-CH=CH-COO⁻，反式）+FADH2。" },
    { cz: "fumarasa — adice H2O, analogie k reakci 3", en: "Fumarate forms in the trans-isomer form and, in the next reaction catalyzed by fumaráthydratasa (fumarasa), changes to L-malate. The book explicitly compares this to the citrate cycle's THIRD reaction (cis-aconitate + H2O → isocitrate): in both cases a water molecule is added across a double bond. Fumarát + H2O → L-malát.", cn: "延胡索酸以反式异构体形式生成，在下一步由延胡索酸水合酶（延胡索酸酶）催化的反应中转化为L-苹果酸。教材明确将此与柠檬酸循环第三个反应（顺乌头酸+H2O→异柠檬酸）相类比：两者都是水分子加成到双键上。延胡索酸+H2O→L-苹果酸。" },
    { cz: "malátdehydrogenasa — uzavření cyklu; oxalacetát je 3-oxokyselina, ale stálejší", en: "Malate is the substrate of malate dehydrogenase, which produces NADH and oxaloacetate: L-malát (CH2-COO⁻/HO-CH-COO⁻) + NAD⁺ ⇌ oxalacetát (CH2-COO⁻/O=C-COO⁻) + NADH + H⁺. This reaction CLOSES the citrate cycle and produces the cycle's third NADH. The book notes oxaloacetate, like oxalosuccinate earlier, is ALSO a 3-oxo acid — but is markedly MORE STABLE (it does not spontaneously decarboxylate).", cn: "苹果酸是苹果酸脱氢酶的底物，该反应生成NADH和草酰乙酸：L-苹果酸（CH2-COO⁻/HO-CH-COO⁻）+NAD⁺⇌草酰乙酸（CH2-COO⁻/O=C-COO⁻）+NADH+H⁺。这一反应使柠檬酸循环闭合，生成循环中第三个NADH。教材指出，草酰乙酸和之前的草酰琥珀酸一样，也是一种3-氧代酸——但要稳定得多（不会自发脱羧）。" },
    { cz: "souhrnná rovnice cyklu (1 acetyl-CoA)", en: "The entire citrate cycle, per turn, is expressed by: Acetyl-CoA + 3 NAD⁺ + FAD + GDP + Pi + 2 H2O → 2 CO2 + 3 NADH + 3 H⁺ + FADH2 + GTP + CoA. The '3 NADH' come from reactions ④, ⑤ and ⑨; the '1 FADH2' from reaction ⑦; the '1 GTP' from reaction ⑥.", cn: "整个柠檬酸循环每转一圈可表示为：乙酰辅酶A+3NAD⁺+FAD+GDP+Pi+2H2O→2CO2+3NADH+3H⁺+FADH2+GTP+CoA。其中「3个NADH」分别来自反应④、⑤和⑨；「1个FADH2」来自反应⑦；「1个GTP」来自反应⑥。" },
    { cz: "energetická bilance — ~3 ATP/NADH, ~2 ATP/FADH2 → 12 ATP/acetyl-CoA", en: "Regeneration of NADH/FADH2 by the respiratory chain (ch. 6.2.4) produces ATP at ratios of APPROXIMATELY 3 ATP per NADH and 2 ATP per FADH2. Including the GTP (convertible to ATP), the maximum energy yield per turn is: CH3CO~S-CoA + 2 O2 + 12 ADP + 12 Pi → 2 CO2 + CoA-SH + 12 ATP + 13 H2O — i.e. 12 ATP per acetyl-CoA oxidized (3×3 NADH + 1×2 FADH2 + 1 GTP-as-ATP = 12).", cn: "呼吸链（第6.2.4节）使NADH/FADH2再生的过程中，大约每个NADH产生3个ATP，每个FADH2产生2个ATP。加上可转化为ATP的GTP，循环每转一圈的最大能量产量为：CH3CO~S-CoA+2O2+12ADP+12Pi→2CO2+CoA-SH+12ATP+13H2O——即每氧化一个乙酰辅酶A净得12个ATP（3×3个NADH+1×2个FADH2+1个GTP转化的ATP=12）。" },
    { cz: "38 ATP/glukosa — rozpis 8+6+24, ~40 % ΔG°' zachyceno", en: "For aerobic breakdown of 1 mol glucose, the MAXIMUM yield is: 8 ATP (glycolysis) + 6 ATP (oxidative decarboxylation of the 2 pyruvates) + 24 ATP (citrate cycle, 2 turns × 12) = 38 mol ATP total — equal to about 1159 kJ/mol, i.e. roughly 40% of the total energy balance of glucose oxidation to CO2 (ΔG°' = -2870 kJ/mol). The remaining ~60% is not captured as ATP.", cn: "1摩尔葡萄糖有氧分解的最大产量为：8个ATP（糖酵解）+6个ATP（2个丙酮酸的氧化脱羧）+24个ATP（柠檬酸循环，2圈×12）=共38摩尔ATP——相当于约1159 kJ/mol，约占葡萄糖氧化为CO2总能量平衡（ΔG°'=-2870 kJ/mol）的40%。其余约60%并未以ATP形式被捕获。" }
  ],
  terms: [
    { cz: "sukcinyl-CoA-synthetasa (EC 6.2.1.4)", en: "succinyl-CoA synthetase", cn: "琥珀酰辅酶A合成酶", def_en: "Enzyme converting succinyl-CoA + GDP + Pi to succinate + GTP + CoA-SH — a substrate-level phosphorylation, the cycle's only direct nucleoside-triphosphate-forming step.", def_cn: "催化琥珀酰辅酶A+GDP+Pi生成琥珀酸+GTP+CoA-SH的酶——属于底物水平磷酸化，是循环中唯一直接生成核苷三磷酸的步骤。" },
    { cz: "sukcinát", en: "succinate", cn: "琥珀酸", def_en: "The symmetric 4-carbon dicarboxylic acid formed from succinyl-CoA; oxidized by succinate dehydrogenase to fumarate.", def_cn: "由琥珀酰辅酶A生成的对称四碳二羧酸；被琥珀酸脱氢酶氧化为延胡索酸。" },
    { cz: "sukcinátdehydrogenasa (EC 1.3.99.1)", en: "succinate dehydrogenase", cn: "琥珀酸脱氢酶", def_en: "FAD-dependent (covalently bound) enzyme oxidizing succinate to trans-fumarate, releasing FADH2.", def_cn: "依赖FAD（共价结合）的酶，将琥珀酸氧化为反式延胡索酸，释放FADH2。" },
    { cz: "fumarát", en: "fumarate", cn: "延胡索酸", def_en: "The trans-unsaturated dicarboxylic acid formed by succinate oxidation; hydrated by fumarase to L-malate.", def_cn: "由琥珀酸氧化生成的反式不饱和二羧酸；经延胡索酸酶加水生成L-苹果酸。" },
    { cz: "fumarasa (fumaráthydratasa, EC 4.2.1.2)", en: "fumarase (fumarate hydratase)", cn: "延胡索酸酶（延胡索酸水合酶）", def_en: "Cofactor-free enzyme adding water across fumarate's double bond to give L-malate.", def_cn: "不需要辅因子的酶，使水加成到延胡索酸的双键上生成L-苹果酸。" },
    { cz: "L-malát", en: "L-malate", cn: "L-苹果酸", def_en: "The hydroxy-acid formed by fumarate hydration; oxidized by malate dehydrogenase back to oxaloacetate, closing the cycle.", def_cn: "由延胡索酸加水生成的羟基酸；被苹果酸脱氢酶氧化回草酰乙酸，使循环闭合。" },
    { cz: "malátdehydrogenasa (EC 1.1.1.37)", en: "malate dehydrogenase", cn: "苹果酸脱氢酶", def_en: "NAD⁺-dependent enzyme oxidizing L-malate to oxaloacetate, producing the cycle's third NADH and regenerating the cycle's starting compound.", def_cn: "NAD⁺依赖酶，将L-苹果酸氧化为草酰乙酸，生成循环中第三个NADH，并使循环的起始化合物再生。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the DIRECT product of the succinyl-CoA synthetase reaction — ATP or GTP?",
      q_cn: "琥珀酰辅酶A合成酶反应的直接产物是ATP还是GTP？",
      options: [
        "ATP directly, the GDP in Tab. 6.3's cofactor column serving only to hold the enzyme together",
        "GTP; its terminal phosphate can separately be transferred to ADP to form ATP",
        "Neither; succinyl-CoA is hydrolysed and its energy released as heat",
        "Both, in equal amounts, since GDP and ADP compete for the same site"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1" },
      optionNotes: {
        0: { en: "Tab. 6.3 lists CoA and GDP as reaction ⑥'s cofactors and the book writes the equation out in full: sukcinyl~S-CoA + Pi + GDP → sukcinát + GTP + CoA-SH. GDP is a substrate that leaves as GTP, not a structural aid.", cn: "Tab. 6.3 把反应 ⑥ 的辅因子写成 CoA 和 GDP，教材还把方程完整写出来：sukcinyl~S-CoA + Pi + GDP → sukcinát + GTP + CoA-SH。GDP 是底物，最后以 GTP 离开，不是什么结构性的帮手。" },
        2: { en: "The book insists on the opposite: succinyl-CoA does NOT convert by simple hydrolysis, but by reaction with GDP and inorganic phosphate. That is precisely what makes this step the cycle's substrate-level phosphorylation.", cn: "教材强调的正好相反：succinyl-CoA 不是靠简单水解转化的，而是与 GDP 和无机磷酸反应。正因为如此，这一步才是本 cycle 的 substrate-level phosphorylation。" },
        3: { en: "Only one nucleoside triphosphate is made per turn, and it is GTP. ATP appears only afterwards, through the separate, freely reversible transfer GTP + ADP ⇌ GDP + ATP.", cn: "每转一圈只生成一个 nucleoside triphosphate，而且是 GTP。ATP 只在之后出现，靠的是另一个可逆反应 GTP + ADP ⇌ GDP + ATP。" }
      },
      why_en: "The book is explicit: sukcinyl~S-CoA + Pi + GDP → sukcinát + GTP + CoA-SH. A SEPARATE reaction, GTP + ADP ⇌ GDP + ATP, is needed to convert that GTP's terminal phosphate into ATP.",
      why_cn: "教材明确写道：琥珀酰~S-CoA+Pi+GDP→琥珀酸+GTP+CoA-SH。需要另一个独立的反应GTP+ADP⇌GDP+ATP，才能把GTP的末端磷酸转化为ATP。"
    },
    {
      type: "short",
      q_en: "What is unusual about succinate dehydrogenase's FAD cofactor, and what geometric isomer of fumarate does it produce?",
      q_cn: "琥珀酸脱氢酶的FAD辅因子有什么不寻常之处？它生成的延胡索酸是哪种几何异构体？",
      accept: ["covalent", "covalently bound", "trans", "共价", "反式"],
      answer_en: "Its FAD is covalently bound to the enzyme (unlike most flavoenzymes, where FAD is non-covalently associated). The product, fumarate, forms specifically as the trans isomer.",
      answer_cn: "它的FAD与酶蛋白共价结合（不同于大多数黄素酶中FAD以非共价方式结合）。生成的产物延胡索酸具体是反式异构体。"
    },
    {
      type: "mcq",
      q_en: "For one mole of glucose oxidized completely and aerobically, how does the book break down the maximum 38 mol ATP yield?",
      q_cn: "对于1摩尔葡萄糖的完全有氧氧化，教材如何拆分其最大38摩尔ATP产量？",
      options: [
        "12 ATP from glycolysis + 12 from the two pyruvate decarboxylations + 14 from the citrate cycle's two turns",
        "8 ATP from glycolysis + 6 ATP from pyruvate's oxidative decarboxylation + 24 ATP from the citrate cycle (2 turns)",
        "24 ATP from glycolysis alone + 6 ATP from pyruvate's oxidative decarboxylation + 8 ATP from the citrate cycle's two turns",
        "8 ATP from glycolysis + 6 ATP from pyruvate's oxidative decarboxylation + 12 ATP from a single turn of the citrate cycle"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Glycolysis is the smallest of the three contributions in the book's own split, not the largest, and the cycle's share is fixed at 12 ATP per turn — so 14 cannot arise from two turns however the rest is arranged.", cn: "在教材自己的拆分里，glycolysis 是三项中最小的一项，不是最大的；而 cycle 的份额被固定为每转 12 ATP——所以无论其他怎么摆，两圈也凑不出 14。" },
        2: { en: "The three terms have been permuted. 24 is the citrate cycle's share, arrived at as 2 turns × 12 ATP; glycolysis contributes 8, and only the middle term, the 6 from pyruvate's decarboxylation, is in its right place.", cn: "三项被打乱了。24 是 citrate cycle 的份额，来自 2 圈 × 12 ATP；glycolysis 贡献的是 8；三项里只有中间那个 6（pyruvate 氧化脱羧）放对了位置。" },
        3: { en: "The per-turn figure of 12 ATP is right, but one glucose gives TWO pyruvates and therefore two acetyl-CoA, so the cycle turns twice: 2 × 12 = 24. Counting one turn also under-counts the decarboxylation step, which likewise happens twice.", cn: "每圈 12 ATP 这个数字是对的，但一分子葡萄糖给出两个 pyruvate、因而两个 acetyl-CoA，所以 cycle 转两圈：2 × 12 = 24。只算一圈的话，氧化脱羧那一步也同样少算了一次。" }
      },
      why_en: "The book states: 8 ATP (glykolýza) + 6 ATP (oxidační dekarboxylace pyruvátu) + 24 ATP (citrátový cyklus) = 38 total. The 24 comes from 2 turns of the cycle (one per pyruvate/acetyl-CoA) at 12 ATP each.",
      why_cn: "教材写道：8个ATP（糖酵解）+6个ATP（丙酮酸氧化脱羧）+24个ATP（柠檬酸循环）=共38个。其中24来自循环转两圈（每个丙酮酸/乙酰辅酶A各一圈），每圈12个ATP。"
    },
    {
      type: "short",
      q_en: "Both oxalosuccinate and oxaloacetate are described as 3-oxo acids. What key difference does the book draw between them?",
      q_cn: "草酰琥珀酸与草酰乙酸都被描述为3-氧代酸。教材在二者之间指出了什么关键区别？",
      accept: ["stable", "stability", "spontaneous", "decarboxylate", "稳定", "自发", "脱羧"],
      answer_en: "Although both are technically 3-oxo (β-keto) acids, oxalosuccinate is unstable and decarboxylates spontaneously, while oxaloacetate — the book says explicitly — 'je však stálejší' (is, however, more stable), and does not spontaneously decarboxylate under these conditions.",
      answer_cn: "尽管两者在结构上都属于3-氧代（β-酮）酸，但草酰琥珀酸不稳定、会自发脱羧，而草酰乙酸——教材明确指出——「却更稳定」，在这些条件下不会自发脱羧。"
    }
  ],
  oral: {
    q_en: "Continue the cycle from succinyl-CoA back to oxaloacetate, and give the overall energy bookkeeping for one turn and for a full glucose molecule.",
    q_cn: "请说明循环如何从琥珀酰辅酶A回到草酰乙酸，并给出循环一圈以及一整个葡萄糖分子完整氧化的能量核算。",
    model_en: "From succinyl-CoA onward, the cycle no longer loses any carbon; what remains is converting a high-energy thioester back into oxaloacetate while extracting as much usable energy as possible. First, succinyl-CoA synthetase converts succinyl-CoA to succinate, and importantly this isn't a simple hydrolysis — the energy of that thioester bond is captured by reacting with GDP and inorganic phosphate to form GTP directly, a form of substrate-level phosphorylation; a separate reaction can then hand that phosphate off to ADP to make ATP. Succinate is then oxidized by succinate dehydrogenase, an enzyme worth remembering because its FAD cofactor is unusually bound covalently, producing fumarate specifically as the trans isomer and releasing FADH2. Fumarase adds water across that double bond to give L-malate, chemically the same kind of hydration reaction aconitase performed earlier in the cycle. Finally, malate dehydrogenase oxidizes malate back to oxaloacetate, producing a third molecule of NADH and closing the cycle; it's worth noting that oxaloacetate, like the oxalosuccinate we saw earlier, is technically also a three-oxo acid, but unlike oxalosuccinate it's stable enough not to spontaneously decarboxylate. Putting a full turn together: one acetyl-CoA, three NAD+, one FAD, one GDP and phosphate, and two waters yield two carbon dioxides, three NADH, one FADH2, one GTP and free coenzyme A. Once the respiratory chain reoxidizes those carriers, at roughly three ATP per NADH and two per FADH2, and the GTP is counted as an ATP equivalent, one turn nets a maximum of twelve ATP. Scaling that up across a whole glucose molecule: eight ATP from glycolysis, six more from oxidatively decarboxylating the two resulting pyruvates, and twenty-four from two full turns of the citrate cycle, for a maximum theoretical total of thirty-eight ATP — about eleven hundred fifty-nine kilojoules per mole, which is only around forty percent of the nearly twenty-nine hundred kilojoules per mole released by fully oxidizing glucose to carbon dioxide.",
    checklist: [
      "Explained succinyl-CoA synthetase forms GTP directly, not ATP, via substrate-level phosphorylation",
      "Named the separate GTP+ADP⇌GDP+ATP transfer reaction",
      "Noted succinate dehydrogenase's covalently bound FAD and the trans-fumarate product",
      "Described fumarase's hydration as parallel to aconitase's",
      "Closed the cycle with malate dehydrogenase, noting oxaloacetate is a stable 3-oxo acid",
      "Gave the full per-turn balanced equation (3 NADH, 1 FADH2, 1 GTP, 2 CO2)",
      "Applied the ~3 ATP/NADH and ~2 ATP/FADH2 ratios to get 12 ATP per turn",
      "Gave the full glucose breakdown: 8 + 6 + 24 = 38 ATP, and the ~40% efficiency figure"
    ]
  }
},

{
  id: "6-2-2-4",
  book: "cz",
  topicKey: "intermediary-metabolism-hub",
  chapter: 6,
  section: "6.2.2",
  czTitle: "Citrátový cyklus — vztah k biosyntetickým pochodům a anaplerotické reakce",
  enTitle: "The citrate cycle — relationship to biosynthetic pathways and anaplerotic reactions",
  cnTitle: "柠檬酸循环——与生物合成途径的关系及回补（anaplerotic）反应",
  pages: [140],
  coverage: "full",
  coverageNote: "The full italic-subheaded passage 'Vztah citrátového cyklu k biosyntetickým pochodům' on p.140 read directly from the scan, from immediately after the previous node's closing ATP/ΔG sentence through to the pyruvate-carboxylase equation, ending right before the '6.2.3 Glyoxylátový cyklus' heading (covered by the next node). Note on terminology: the book's own text here does NOT use the specific word 'amphibolic' — it simply says the cycle is important 'i pro některé biosyntézy' (also for certain biosyntheses) beyond its bioenergetic role. 'Amphibolic' is a standard descriptive label from general biochemistry applied in this node's title/summary for clarity; this is flagged explicitly so it is not mistaken for the book's own wording.",
  cnNote: { topic: "二十", title: "柠檬酸循环 (笔记二十, 约p.119 — 页码来自HANDOFF.md §11预填表格的标题匹配，本次任务未直接查阅中文笔记PDF核实，故标记为partial；本节回补反应内容笔记中是否单独涉及未核实)", status: "partial" },
  mustKnow: { en: "Pulling any citrate-cycle intermediate out for biosynthesis — glutamate from 2-oxoglutarate, porphyrins from succinyl-CoA — drains oxaloacetate and would stall the whole cycle if nothing replaced it. So the cell keeps a dedicated reaction, pyruvate carboxylase, whose only job is topping oxaloacetate back up. The cycle is not a closed loop reserved for energy alone — it is also a hub other pathways draw material from, and anaplerosis is what keeps it solvent.", cn: "从柠檬酸循环里抽走任何一个中间产物去做生物合成——用 2-氧戊二酸做谷氨酸、用琥珀酰辅酶A做卟啉——都会消耗草酰乙酸，如果没有补充，整个循环就会停转。所以细胞专门留了一个反应，丙酮酸羧化酶，它唯一的工作就是把草酰乙酸补回去。这个循环不是一个只为供能封闭运转的圈——它同时是其他通路取材的枢纽，而回补反应就是让它不『破产』的办法。" },
  summary: {
    en: "Beyond its bioenergetic role, the book states the citrate cycle is also important for certain biosyntheses (a dual role generally labelled 'amphibolic' in biochemistry, though the book does not use that specific term here): 2-oxoglutarate can be transaminated to the amino acid glutamate, and succinyl-CoA serves as a precursor in porphyrin biosynthesis (ch. 6.3). This creates a problem — withdrawing any cycle intermediate for biosynthesis can progressively deplete oxaloacetate, the cycle's starting compound, below a workable level. To keep the cycle running uninterrupted, replenishing reactions are needed — 'doplňovací,' translated by the book as ANAPLEROTIC, reactions. The most important of these is catalyzed by pyruvate carboxylase, which forms oxaloacetate directly from pyruvate and CO2, requiring ATP, Mn²⁺, and the coenzyme biotin: pyruvát + CO2 + ATP + H2O → oxalacetát + ADP + Pi.",
    cn: "教材指出，除了生物能作用之外，柠檬酸循环对某些生物合成过程也很重要（这种双重作用在生物化学中通常被称为「双向」或「amphibolic」，不过教材本身在此处并未使用这一术语）：2-氧戊二酸可以经转氨基作用生成氨基酸谷氨酸，琥珀酰辅酶A则是卟啉生物合成（第6.3节）的前体。这就带来一个问题——不断抽取循环中的任何中间体用于生物合成，会使循环的起始物质草酰乙酸逐渐消耗到难以维持循环运转的程度。为了保证循环不间断地进行，需要补充性反应——教材将其译为「回补」（doplňovací），即anaplerotic反应。其中最重要的是丙酮酸羧化酶催化的反应，它直接由丙酮酸和CO2生成草酰乙酸，需要ATP、Mn²⁺和辅酶生物素：丙酮酸+CO2+ATP+H2O→草酰乙酸+ADP+Pi。"
  },
  points: [
    { cz: "biosyntetický význam cyklu (vedle bioenergetického)", en: "Besides its undisputed bioenergetic significance, the book states the citrate cycle is ALSO important for certain biosyntheses. (The book's own phrasing here is just 'important also for some biosyntheses' — it does not use the word 'amphibolic'; that is a standard biochemistry label applied in this node's title for the dual catabolic-and-anabolic role being described.)", cn: "教材指出，除了公认的生物能意义之外，柠檬酸循环对某些生物合成过程也很重要。（教材原文此处只是说「对某些生物合成也很重要」，并未使用「双向的」或「amphibolic」这个词；这是生物化学中对这种兼具分解代谢与合成代谢双重作用的标准说法，用在本节标题中是为了清楚描述这一特性。）" },
    { cz: "2-oxoglutarát → glutamát (transaminace)", en: "As one example, 2-oxoglutarate can be TRANSAMINATED to the amino acid glutamate — directly linking the citrate cycle to amino acid metabolism (recall ch. 5.2's own forward-reference naming the citrate cycle as the final common fate of amino acids' carbon skeletons; this is essentially that same link run in reverse).", cn: "例如，2-氧戊二酸可以经转氨基作用生成氨基酸谷氨酸——这就把柠檬酸循环与氨基酸代谢直接联系起来（回想第5.2节曾前瞻性地指出柠檬酸循环是氨基酸碳骨架的最终共同归宿；这里正是同一条联系的反向体现）。" },
    { cz: "sukcinyl-CoA → biosyntéza porfyrinů (kap. 6.3)", en: "As a second example, succinyl-CoA serves as a PRECURSOR in the biosynthesis of PORPHYRINS (forward cross-reference to ch. 6.3).", cn: "第二个例子是，琥珀酰辅酶A是卟啉生物合成的前体（前瞻引用第6.3节）。" },
    { cz: "problém — odčerpávání meziproduktů vyčerpává oxalacetát", en: "Withdrawing (odčerpávání) ANY metabolite/intermediate from the cycle for these biosyntheses can progressively let the amount of the STARTING substance, oxaloacetate, fall below a workable ('únosnou') level — threatening the cycle's continued operation.", cn: "从循环中抽取（odčerpávání）任何一种中间代谢物用于这些生物合成，都可能使起始物质草酰乙酸的数量逐渐下降到难以维持（únosnou）的水平——从而威胁循环的持续运转。" },
    { cz: "anaplerotické (\"doplňovací\") reakce — definice", en: "To ensure the citrate cycle's uninterrupted operation, REPLENISHING reactions are needed — the book gives 'doplňovací' as the Czech term and states its translation is ANAPLEROTIC reactions.", cn: "为保证柠檬酸循环不间断地运转，需要补充性反应——教材给出的捷克语术语是「doplňovací」，并说明其翻译对应「回补」（anaplerotic）反应。" },
    { cz: "pyruvátkarboxylasa — nejdůležitější anaplerotická reakce", en: "The MOST IMPORTANT anaplerotic reaction is catalyzed by PYRUVATE CARBOXYLASE. It catalyzes formation of oxaloacetate from pyruvate and CO2, requiring ATP, Mn²⁺, and the coenzyme BIOTIN: pyruvát + CO2 + ATP + H2O --(Mn²⁺)--> oxalacetát + ADP + Pi.", cn: "最重要的回补反应由丙酮酸羧化酶催化。它催化丙酮酸与CO2生成草酰乙酸，需要ATP、Mn²⁺和辅酶生物素：丙酮酸+CO2+ATP+H2O --(Mn²⁺)-->草酰乙酸+ADP+Pi。" }
  ],
  terms: [
    { cz: "anaplerotické (doplňovací) reakce", en: "anaplerotic reactions", cn: "回补反应", def_en: "Reactions that replenish citrate-cycle intermediates depleted by biosynthetic withdrawal, keeping the cycle running; pyruvate carboxylase's reaction is the most important example.", def_cn: "补充因生物合成消耗而减少的柠檬酸循环中间体、以维持循环运转的反应；丙酮酸羧化酶所催化的反应是最重要的例子。" },
    { cz: "pyruvátkarboxylasa", en: "pyruvate carboxylase", cn: "丙酮酸羧化酶", def_en: "Biotin-, Mn²⁺- and ATP-dependent enzyme forming oxaloacetate directly from pyruvate and CO2; the cycle's most important anaplerotic reaction.", def_cn: "依赖生物素、Mn²⁺和ATP的酶，直接由丙酮酸和CO2生成草酰乙酸；是柠檬酸循环最重要的回补反应。" },
    { cz: "biotin", en: "biotin", cn: "生物素", def_en: "The coenzyme required by pyruvate carboxylase (and other carboxylases) for CO2 fixation.", def_cn: "丙酮酸羧化酶（及其他羧化酶）在固定CO2时所需的辅酶。" },
    { cz: "porfyriny (biosyntéza, kap. 6.3)", en: "porphyrins (biosynthesis, ch. 6.3)", cn: "卟啉（生物合成，第6.3节）", def_en: "Ring compounds whose biosynthesis draws on succinyl-CoA as a precursor, forward-referenced from this section.", def_cn: "其生物合成以琥珀酰辅酶A为前体的环状化合物，本节对此作了前瞻引用（详见第6.3节）。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the most important anaplerotic reaction the book names, and what does it require as cofactors?",
      q_cn: "教材指出的最重要的回补反应是什么？它需要哪些辅因子？",
      options: [
        "Citrate synthase; requires only CoA",
        "Pyruvate carboxylase; requires ATP, Mn²⁺ and biotin",
        "Isocitrate dehydrogenase; requires NAD⁺ and CO₂",
        "Malate dehydrogenase; requires NAD⁺, Mn²⁺ and biotin"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1", 2: "6-2-2-2", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "Citrate synthase (Tab. 6.3, EC 4.1.3.7, cofactor CoA) opens the cycle by condensing acetyl-CoA onto oxaloacetate — it CONSUMES the oxaloacetate pool rather than topping it up, which is the opposite of anaplerosis.", cn: "Citrate synthase（Tab. 6.3，EC 4.1.3.7，辅因子 CoA）把 acetyl-CoA 缩合到 oxaloacetate 上、开启 cycle——它是在消耗 oxaloacetate 池，而不是补充，正好和 anaplerosis 相反。" },
        2: { en: "Isocitrate dehydrogenase (EC 1.1.1.41, NAD⁺) works inside the cycle and RELEASES CO₂ at reaction ④; the anaplerotic step is the one that fixes CO₂ back on, which is why it needs biotin and ATP.", cn: "Isocitrate dehydrogenase（EC 1.1.1.41，NAD⁺）在 cycle 内部工作，并且在反应 ④ 放出 CO₂；而 anaplerotic 那一步是把 CO₂ 固定回来，所以才需要 biotin 和 ATP。" },
        3: { en: "Malate dehydrogenase (EC 1.1.1.37, NAD⁺) does make oxaloacetate, but out of malate that is already inside the cycle — it recycles the pool at reaction ⑨ instead of adding new carbon to it.", cn: "Malate dehydrogenase（EC 1.1.1.37，NAD⁺）确实生成 oxaloacetate，但用的是本来就在 cycle 里的 malate——它在反应 ⑨ 循环利用现有的池子，并没有往里添新的碳。" }
      },
      why_en: "The book names pyruvate carboxylase's reaction (pyruvate + CO2 + ATP + H2O → oxaloacetate + ADP + Pi) as the most important anaplerotic reaction, requiring ATP, Mn²⁺ and the coenzyme biotin.",
      why_cn: "教材指出丙酮酸羧化酶所催化的反应（丙酮酸+CO2+ATP+H2O→草酰乙酸+ADP+Pi）是最重要的回补反应，需要ATP、Mn²⁺和辅酶生物素。"
    },
    {
      type: "short",
      q_en: "Why does the citrate cycle need 'anaplerotic' reactions at all, given that oxaloacetate is regenerated every turn by malate dehydrogenase?",
      q_cn: "既然草酰乙酸每一圈循环都会由苹果酸脱氢酶重新生成，为什么柠檬酸循环还需要「回补」反应？",
      accept: ["withdraw", "biosynthesis", "deplete", "intermediate", "抽取", "消耗", "生物合成", "中间体"],
      answer_en: "Because cycle intermediates are also withdrawn for biosynthesis (e.g. 2-oxoglutarate to glutamate, succinyl-CoA to porphyrins), that withdrawal can progressively deplete oxaloacetate below a workable level even though each turn technically regenerates it — anaplerotic reactions like pyruvate carboxylase's replace what biosynthesis removes.",
      answer_cn: "因为循环中间体也会被抽取用于生物合成（例如2-氧戊二酸生成谷氨酸、琥珀酰辅酶A生成卟啉），这种抽取即使在每圈循环理论上都会重新生成草酰乙酸的情况下，仍可能使草酰乙酸逐渐消耗到难以维持的水平——像丙酮酸羧化酶这样的回补反应正是用来补充生物合成所消耗掉的部分。"
    },
    {
      type: "mcq",
      q_en: "Which two citrate-cycle intermediates does the book name as biosynthetic precursors in this passage?",
      q_cn: "本段教材点名了哪两个柠檬酸循环中间体作为生物合成的前体？",
      options: [
        "Citrate (to glutamate, by transamination) and oxaloacetate (to porphyrins)",
        "2-oxoglutarate (to glutamate, via transamination) and succinyl-CoA (to porphyrins)",
        "Succinyl-CoA (to glutamate, by transamination) and 2-oxoglutarate (to the porphyrin ring)",
        "Malate (to glutamate, by transamination) and fumarate (to the porphyrin ring system)"
      ],
      answer: 1,
      optionRefs: { 2: "6-3-2", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "Neither is named here. The transaminated intermediate is 2-oxoglutarate, and the porphyrin precursor is succinyl-CoA; citrate and oxaloacetate stay in the cycle throughout this passage.", cn: "这两个在这一段里都没被点名。被 transamination 的中间产物是 2-oxoglutarate，porphyrin 的前体是 succinyl-CoA；citrate 和 oxaloacetate 在这一段里始终留在 cycle 内。" },
        2: { en: "The right two intermediates with their destinations swapped: 2-oxoglutarate is the one transaminated to glutamate, and succinyl-CoA is the porphyrin precursor that ch. 6.3 picks up as the starting material for heme.", cn: "两个中间产物挑对了，但去向调换了：被 transamination 成 glutamate 的是 2-oxoglutarate，而 succinyl-CoA 才是 porphyrin 的前体——第 6.3 节正是从它开始讲 heme 的合成。" },
        3: { en: "Neither malate nor fumarate is named as a biosynthetic exit in this passage; both simply run on inside the cycle, fumarate being hydrated to malate and malate oxidised back to oxaloacetate.", cn: "这一段里 malate 和 fumarate 都没有被列为生物合成的出口；它们只是在 cycle 内继续往下走——fumarate 加水成 malate，malate 再氧化回 oxaloacetate。" }
      },
      why_en: "The book gives exactly two examples: 2-oxoglutarate, transaminated to glutamate, and succinyl-CoA, a precursor in porphyrin biosynthesis (ch. 6.3) — not the pairings in the other options.",
      why_cn: "教材恰好给出两个例子：2-氧戊二酸经转氨基生成谷氨酸，以及琥珀酰辅酶A作为卟啉生物合成（第6.3节）的前体——并非其他选项中的配对。"
    }
  ],
  oral: {
    q_en: "Explain how the citrate cycle serves biosynthesis as well as energy production, and what anaplerotic reactions do about it.",
    q_cn: "请说明柠檬酸循环如何在提供能量之外还服务于生物合成，以及回补反应在其中起什么作用。",
    model_en: "Although the citrate cycle's bioenergetic role is undisputed, the book is clear that it also matters for biosynthesis, because several of its intermediates double as starting materials for other pathways. Two-oxoglutarate, for instance, can be transaminated straight into the amino acid glutamate, and succinyl-CoA is a precursor used in porphyrin biosynthesis. This dual identity — serving both catabolism and anabolism at once — is what biochemists generally call an amphibolic pathway, even though the book itself doesn't use that exact word here. The trouble is that every time an intermediate gets pulled out of the cycle for one of these biosyntheses, the pool of oxaloacetate, the compound the cycle depends on to keep accepting new acetyl-CoA, can gradually run down below a workable level, even though in principle each full turn regenerates it. The organism's solution is a set of replenishing reactions, which the book translates as anaplerotic reactions, and the single most important one is catalyzed by pyruvate carboxylase: it fixes carbon dioxide directly onto pyruvate to form oxaloacetate, spending one ATP and requiring manganese and the coenzyme biotin. This reaction is really the safety valve that keeps the citrate cycle running at full capacity even while it's simultaneously being raided for biosynthetic starting material — and it's exactly this kind of cross-talk between the citrate cycle and the rest of intermediary metabolism that becomes the whole subject of chapter ten.",
    checklist: [
      "Named the citrate cycle's dual bioenergetic + biosynthetic role (noting the book doesn't use the word 'amphibolic' itself)",
      "Gave both named examples: 2-oxoglutarate→glutamate and succinyl-CoA→porphyrins",
      "Explained why intermediate withdrawal threatens the cycle (oxaloacetate depletion)",
      "Defined anaplerotic ('doplňovací'/replenishing) reactions",
      "Gave the pyruvate carboxylase reaction and all three of its cofactors (ATP, Mn²⁺, biotin)",
      "Connected this to the cycle's broader role in intermediary metabolism"
    ]
  }
},

{
  id: "6-2-3",
  book: "cz",
  topicKey: "starch-sucrose-biosynthesis",
  chapter: 6,
  section: "6.2.3",
  czTitle: "Glyoxylátový cyklus",
  enTitle: "The glyoxylate cycle",
  cnTitle: "乙醛酸循环",
  pages: [140, 141],
  coverage: "full",
  coverageNote: "The full '6.2.3 Glyoxylátový cyklus' section read directly from the scans: the opening framing paragraph and the two distinguishing-reaction structural diagrams (isocitrate lyase and malate synthase) on the bottom half of p.140, continuing to the malate-to-oxaloacetate sentence and the overall equation at the very bottom of p.140. p.141 covers the full Obr. 6.5 diagram (traced arrow-by-arrow to confirm it integrates the two glyoxylate-cycle-specific reactions with five reused citrate-cycle enzymes — citrate synthase, aconitase, succinate dehydrogenase, fumarase, malate dehydrogenase — converging on a single net new oxaloacetate) and the closing paragraph (ATP yield, physiological significance for bacteria and germinating oil-seed plants), ending cleanly at '...získat potřebné sacharidy a energii.' — a complete sentence — immediately before the bold '6.2.4 Respirační řetězec a aerobní fosforylace' heading, which starts an unrelated topic not covered by this node. Honesty flag: the book's text restricts this pathway's occurrence to 'u některých mikroorganismů a rostlin' (in some microorganisms and plants) without ever explicitly stating in these words that animals lack it or naming the missing enzymes as the reason; the enzyme-based explanation given in this node's points is standard biochemistry filling that gap, clearly labelled as such rather than presented as the book's own sentence.",
  cnNote: { topic: null, title: "乙醛酸循环——HANDOFF.md §11的中文笔记映射表未单独列出此主题（该表只列了「二十 柠檬酸循环 p.119」），乙醛酸循环内容有可能包含在同一笔记条目内，但本次任务未查阅中文笔记PDF核实，暂标记为pending", status: "pending" },
  mustKnow: { en: "A single turn of the ordinary citrate cycle can never build new carbon skeleton — 2 carbons go in as acetyl, exactly 2 come out as CO2, always net zero. The glyoxylate cycle exists because it skips both CO2-releasing steps, so 2 acetyl-CoA (4 carbons) go in and none leave as CO2, netting one new 4-carbon oxaloacetate. That is the entire reason plants and some bacteria can turn fat, or acetate, into carbohydrate — and why animals, lacking its two extra enzymes, cannot.", cn: "普通柠檬酸循环转一圈，永远造不出新的碳骨架——2 个碳以乙酰的形式进去，正好 2 个碳以 CO2 的形式出来，净收益永远是零。乙醛酸循环之所以存在，就是因为它跳过了两步释放 CO2 的反应：2 分子乙酰辅酶A（4 个碳）进去，一个 CO2 都不出来，净得到一个新的 4 碳草酰乙酸。这正是植物和某些细菌能把脂肪、甚至乙酸变成糖的全部原因——而动物因为缺这两个额外的酶，做不到这一点。" },
  trace: [
    {
      term: "glyoxylate cycle 乙醛酸循环",
      what: "柠檬酸循环的一个改装版，只有某些微生物和植物有。改装的目的很明确：**让循环转一圈之后能净赚一根新的碳骨架**，而普通柠檬酸循环做不到这件事。",
      from: "为什么普通循环做不到？算一下账就明白：乙酰辅酶A 带 2 个碳进去，转一圈正好有 2 个碳以 CO₂ 的形式跑掉——**进多少出多少，净收益永远是零**。所以柠檬酸循环只能烧碳，不能攒碳。乙醛酸循环的办法很直接：**把那两步放 CO₂ 的反应跳过去**。于是 2 分子乙酰辅酶A（4 个碳）进去，一个 CO₂ 都不出来，净得到一个 4 碳的草酰乙酸。",
      to: "这一改带来的后果，大到能解释一个你可能一直觉得理所当然的现象：**植物和某些细菌能把脂肪、甚至醋酸变成糖，而动物不能**。种子发芽时靠储存的油长出幼苗，走的就是这条路。动物为什么不行？因为**缺这两个额外的酶**——不是缺原料，是缺工具。所以「人不能把脂肪净变成葡萄糖」这句常被当作结论背下来的话，原因就在这一节。",
      family: "改装靠的是两个酶，它们正是区分两个循环的地方：isocitrate lyase（异柠檬酸裂解酶）把异柠檬酸直接劈成乙醛酸和琥珀酸；malate synthase（苹果酸合酶）拿这个乙醛酸再接上**另一分子**乙酰辅酶A，生成苹果酸。往后苹果酸脱氢变草酰乙酸这一步，用的还是柠檬酸循环自己的苹果酸脱氢酶——**这条路大部分零件是借来的，只换了两个关键的**。"
    }
  ],
  summary: {
    en: "Section 6.2.3 describes the glyoxylate cycle as 'an interesting modification of the citrate cycle,' found — the book states — in some microorganisms and plants. Instead of degrading acetyl-CoA (the citrate cycle's degradative/decarboxylation phase is skipped entirely), acetyl-CoA is used to SYNTHESIZE four-carbon dicarboxylic acids. Two reactions define the pathway and simultaneously distinguish it from the plain citrate cycle. First, isocitrate lyase cleaves isocitrate directly into glyoxylate + succinate — bypassing both of the citrate cycle's CO2-releasing steps (isocitrate dehydrogenase and 2-oxoglutarate dehydrogenase) in one stroke, with no carbon lost. Second, malate synthase condenses that glyoxylate with a SECOND molecule of acetyl-CoA to give malate, which is then dehydrogenated (reusing the citrate cycle's own malate dehydrogenase) to oxaloacetate. Combined with reused citrate-cycle machinery (Obr. 6.5), the net result — captured in the equation 2 acetyl-CoA + 2 NAD⁺ + FAD + 3 H2O → oxaloacetate + 2 NADH + H⁺ + FADH2 + 2 CoA-SH — is a genuine NET GAIN of a four-carbon skeleton from two two-carbon units, something a single turn of the ordinary citrate cycle can never achieve (there, 2 carbons in as acetyl always balance 2 carbons out as CO2). This net gain, yielding 8 ATP per turn, is why many bacteria can grow on acetate — or other acetyl-CoA-producing compounds — as a carbon source, and why germinating oil-seed plants can turn stored fat into carbohydrate and energy.",
    cn: "6.2.3节把乙醛酸循环描述为「柠檬酸循环的一种有趣变体」，教材指出它存在于某些微生物和植物中。与柠檬酸循环不同，乙醛酸循环并不降解乙酰辅酶A（完全跳过了柠檬酸循环的降解/脱羧阶段），而是利用乙酰辅酶A来合成四碳二羧酸。有两个反应界定了这条途径，同时也是它与普通柠檬酸循环的区别所在。第一，异柠檬酸裂解酶直接将异柠檬酸裂解为乙醛酸和琥珀酸——一步就绕过了柠檬酸循环中释放CO2的两个步骤（异柠檬酸脱氢酶和2-氧戊二酸脱氢酶），没有任何碳损失。第二，苹果酸合酶将这个乙醛酸与第二分子乙酰辅酶A缩合生成苹果酸，随后苹果酸经脱氢（重复利用柠檬酸循环自身的苹果酸脱氢酶）生成草酰乙酸。结合重复使用的柠檬酸循环相关酶系（图6.5），最终结果——由方程2乙酰辅酶A+2NAD⁺+FAD+3H2O→草酰乙酸+2NADH+H⁺+FADH2+2CoA-SH所概括——是从两个二碳单位真正净得一个四碳骨架，这是普通柠檬酸循环转一圈永远无法实现的（在那里，以乙酰基形式进入的2个碳，总是与以CO2形式离开的2个碳相抵消）。这种净得碳骨架的能力，加上每圈产生8个ATP，正是许多细菌能以乙酸盐或其他能生成乙酰辅酶A的化合物为碳源生长、萌发的油料种子植物能把储存的脂肪转化为糖类和能量的原因。"
  },
  points: [
    { cz: "modifikace cyklu — jen některé mikroorganismy a rostliny", en: "The book describes this as 'an interesting modification of the citrate cycle' (zajímavá modifikace citrátového cyklu), found in SOME MICROORGANISMS AND PLANTS. Here, acetyl-CoA is NOT degraded — the citrate cycle's degradative phase is skipped — but instead used to SYNTHESIZE four-carbon dicarboxylic acids, which can in turn feed other biosyntheses.", cn: "教材将其描述为「柠檬酸循环的一种有趣变体」，存在于某些微生物和植物中。在这里，乙酰辅酶A并不被降解——柠檬酸循环的降解阶段被完全跳过——而是被用来合成四碳二羧酸，这些二羧酸又可进一步用于其他生物合成。" },
    { cz: "2 klíčové reakce odlišují citrátový a glyoxylátový cyklus", en: "The book states the pathway is BASED ON two reactions that simultaneously distinguish the citrate cycle and the glyoxylate cycle from each other.", cn: "教材指出，这条途径的基础是两个反应，它们同时也是柠檬酸循环与乙醛酸循环相互区别的关键所在。" },
    { cz: "reakce 1 — isocitrátlyasa: isocitrát → glyoxylát + sukcinát", en: "The FIRST reaction is catalyzed by ISOCITRATE LYASE, cleaving isocitrate DIRECTLY into glyoxylate + succinate: isocitrát (HO-CH-COO⁻/CH-COO⁻/CH2-COO⁻) → glyoxylát (O=CH-COO⁻) + sukcinát (CH2-COO⁻/CH2-COO⁻). This is the KEY bypass: it replaces the citrate cycle's TWO CO2-releasing steps — reaction ④ (isocitrate dehydrogenase) AND reaction ⑤ (2-oxoglutarate dehydrogenase) — with a single non-oxidative, non-decarboxylating cleavage. No CO2 is released here.", cn: "第一个反应由异柠檬酸裂解酶催化，直接将异柠檬酸裂解为乙醛酸+琥珀酸：异柠檬酸（HO-CH-COO⁻/CH-COO⁻/CH2-COO⁻）→乙醛酸（O=CH-COO⁻）+琥珀酸（CH2-COO⁻/CH2-COO⁻）。这正是关键的「旁路」：它用一次非氧化、不脱羧的裂解，取代了柠檬酸循环中释放CO2的两个步骤——反应④（异柠檬酸脱氢酶）和反应⑤（2-氧戊二酸脱氢酶）。这里不释放任何CO2。" },
    { cz: "reakce 2 — malátsynthasa: glyoxylát + 2. acetyl-CoA → malát", en: "The SECOND reaction is catalyzed by MALATE SYNTHASE, using the product of reaction 1 — glyoxylate — plus ANOTHER molecule of acetyl-CoA: glyoxylát (O=CH-COO⁻) + acetyl-CoA (H-CH2-CO~S-CoA) + H2O → malát (HO-CH-COO⁻/CH2-COO⁻) + CoA-SH. This is the SECOND acetyl-CoA consumed per turn of the glyoxylate cycle.", cn: "第二个反应由苹果酸合酶催化，使用反应1的产物乙醛酸，再加上另一分子乙酰辅酶A：乙醛酸（O=CH-COO⁻）+乙酰辅酶A（H-CH2-CO~S-CoA）+H2O→苹果酸（HO-CH-COO⁻/CH2-COO⁻）+CoA-SH。这是乙醛酸循环每一圈消耗的第二分子乙酰辅酶A。" },
    { cz: "malát → oxalacetát (dehydrogenace, sdílený krok); Obr. 6.5 = kombinace s citrátovým cyklem", en: "From malate, dehydrogenation gives oxaloacetate ('OOC-CO-CH2-COO⁻) — REUSING the citrate cycle's own malate dehydrogenase. Combined with other reused citrate-cycle steps (Obr. 6.5 shows citrate synthase and aconitase used to first build and isomerize citrate/isocitrate from oxaloacetate + the FIRST acetyl-CoA, and succinate dehydrogenase + fumarase used to process the succinate co-product from reaction 1 onward to a SECOND malate/oxaloacetate), this closes the glyoxylate cycle.", cn: "苹果酸经脱氢生成草酰乙酸（⁻OOC-CO-CH2-COO⁻）——这一步重复利用了柠檬酸循环自身的苹果酸脱氢酶。结合其他重复使用的柠檬酸循环步骤（图6.5显示：柠檬酸合酶和乌头酸酶先由草酰乙酸+第一分子乙酰辅酶A构建并异构出柠檬酸/异柠檬酸；琥珀酸脱氢酶和延胡索酸酶则处理反应1产生的副产物琥珀酸，将其进一步转化为第二个苹果酸/草酰乙酸），从而使乙醛酸循环闭合。" },
    { cz: "souhrnná rovnice — 2 acetyl-CoA → 1 oxalacetát (čistý zisk uhlíku!)", en: "Overall equation: 2 CH3CO~S-CoA + 2 NAD⁺ + FAD + 3 H2O → ⁻OOC-CO-CH2-COO⁻ (oxalacetát) + 2 NADH + H⁺ + FADH2 + 2 CoA-SH. CRITICALLY, unlike one turn of the plain citrate cycle (where 2 carbons enter as acetyl and exactly 2 leave as CO2, net zero), the glyoxylate cycle takes in 2 acetyl-CoA (4 carbons) and releases NO CO2 at all, netting ONE new 4-carbon oxaloacetate — a genuine net gain of carbon skeleton from two 2-carbon units.", cn: "总反应式：2CH3CO~S-CoA+2NAD⁺+FAD+3H2O→⁻OOC-CO-CH2-COO⁻（草酰乙酸）+2NADH+H⁺+FADH2+2CoA-SH。关键在于：不同于普通柠檬酸循环转一圈（2个碳以乙酰基形式进入，恰好2个碳以CO2形式离开，净值为零），乙醛酸循环摄入2分子乙酰辅酶A（4个碳），完全不释放CO2，净得1个新的四碳草酰乙酸——这是从两个二碳单位真正净得一个碳骨架。" },
    { cz: "proč zvířata tuto dráhu nemají — teze odvozená, ne doslovná věta knihy", en: "This net carbon gain is exactly why the pathway matters: it lets organisms that have it convert acetyl-CoA (from acetate or from fat breakdown) into net NEW carbohydrate. HONESTY NOTE: the book's own wording restricts the pathway to 'some microorganisms and plants' but never explicitly states in so many words that animals lack it or names the missing enzymes. Standard biochemistry attributes animals' inability to run this pathway to their genomes not encoding isocitrate lyase or malate synthase — the two enzymes unique to reactions 1-2 above — which is why animals cannot achieve net synthesis of carbohydrate from fatty-acid-derived acetyl-CoA. This explanatory sentence is standard biochemical knowledge supplementing the book's implicit scoping, not a direct quotation or paraphrase of a book sentence.", cn: "这种净得碳骨架的能力正是这条途径的意义所在：拥有它的生物可以把乙酰辅酶A（来自乙酸盐或脂肪分解）转化为净新增的糖类。诚实性说明：教材原文只是将这条途径的分布限定为「某些微生物和植物」，并没有明确用这样的措辞指出动物缺乏此途径，也没有点明缺失的具体酶。标准生物化学知识将动物无法运行这条途径归因于其基因组不编码异柠檬酸裂解酶和苹果酸合酶——这正是上述反应1、2中独有的两个酶——这也是动物无法从脂肪酸来源的乙酰辅酶A净合成糖类的原因。这句解释性说明属于补充教材隐含范围界定的标准生物化学知识，并非教材原句的直接引用或改写。" },
    { cz: "Obr. 6.5, 8 ATP, význam — bakterie na acetátu, klíčící olejnatá semena", en: "In proportion to its 2 NADH + 1 FADH2, 8 mol ATP arise (using the same ~3 ATP/NADH and ~2 ATP/FADH2 ratios given earlier in 6.2.2). The book gives two concrete significances: this cycle is WHY many BACTERIA can grow on ACETATE or other acetyl-CoA-yielding compounds as a carbon source, and WHY GERMINATING OIL-SEED PLANTS can, after breaking down their stored fatty acids, obtain needed carbohydrates and energy by this route.", cn: "按其2个NADH+1个FADH2折算，可产生8摩尔ATP（沿用6.2.2节给出的约3 ATP/NADH、约2 ATP/FADH2的比例）。教材给出了两个具体的意义：正是这条循环使许多细菌能够以乙酸盐或其他能产生乙酰辅酶A的化合物作为碳源生长；也正是这条循环使萌发的油料种子植物在分解储存的脂肪酸之后，能够通过这条途径获得所需的糖类和能量。" }
  ],
  terms: [
    { cz: "glyoxylátový cyklus", en: "glyoxylate cycle", cn: "乙醛酸循环", def_en: "A modification of the citrate cycle, found in some microorganisms and plants, that bypasses both CO2-releasing decarboxylation steps to achieve net synthesis of a 4-carbon dicarboxylic acid from two acetyl-CoA.", def_cn: "柠檬酸循环的一种变体，存在于某些微生物和植物中，绕过了释放CO2的两个脱羧步骤，从而由两分子乙酰辅酶A净合成一个四碳二羧酸。" },
    { cz: "isocitrátlyasa", en: "isocitrate lyase", cn: "异柠檬酸裂解酶", def_en: "Enzyme unique to the glyoxylate cycle; cleaves isocitrate directly into glyoxylate + succinate, bypassing the citrate cycle's two decarboxylation steps.", def_cn: "乙醛酸循环特有的酶；直接将异柠檬酸裂解为乙醛酸和琥珀酸，绕过柠檬酸循环的两个脱羧步骤。" },
    { cz: "glyoxylát", en: "glyoxylate", cn: "乙醛酸", def_en: "The 2-carbon aldehyde-acid product of isocitrate lyase; condensed with a second acetyl-CoA by malate synthase to give malate.", def_cn: "异柠檬酸裂解酶生成的二碳醛酸产物；被苹果酸合酶与第二分子乙酰辅酶A缩合生成苹果酸。" },
    { cz: "malátsynthasa", en: "malate synthase", cn: "苹果酸合酶", def_en: "Enzyme unique to the glyoxylate cycle; condenses glyoxylate with a second acetyl-CoA (+H2O) to give malate + CoA-SH.", def_cn: "乙醛酸循环特有的酶；将乙醛酸与第二分子乙酰辅酶A（+H2O）缩合，生成苹果酸和CoA-SH。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The glyoxylate cycle bypasses exactly which two reactions of the citrate cycle?",
      q_cn: "乙醛酸循环恰好绕过了柠檬酸循环中的哪两个反应？",
      options: [
        "Citrate synthase and aconitase — the two steps that build and then isomerise citrate",
        "Isocitrate dehydrogenase and 2-oxoglutarate dehydrogenase — the cycle's two CO2-releasing steps",
        "Succinate dehydrogenase and fumarase — the two steps that carry the succinate co-product onward to malate",
        "Malate dehydrogenase and citrate synthase — the two steps shared with the glyoxylate cycle"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1", 2: "6-2-2-3", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "Obr. 6.5 shows these two being REUSED, not bypassed: citrate synthase joins oxaloacetate to the first acetyl-CoA, and aconitase isomerises the citrate to isocitrate so that isocitrate lyase has a substrate at all.", cn: "Obr. 6.5 显示这两步是被沿用、而不是被绕过：citrate synthase 把 oxaloacetate 和第一个 acetyl-CoA 接起来，aconitase 再把 citrate 异构成 isocitrate——isocitrate lyase 这才有底物可用。" },
        2: { en: "Also reused rather than bypassed. The succinate that isocitrate lyase splits off is handed straight to succinate dehydrogenase and then fumarase, which carry it on toward a second malate and oxaloacetate.", cn: "同样是沿用而不是绕过。Isocitrate lyase 切下来的 succinate 直接交给 succinate dehydrogenase，再交给 fumarase，一路带到第二个 malate 和 oxaloacetate。" },
        3: { en: "Half right in a way that gives the game away: these two ARE shared with the glyoxylate cycle — malate dehydrogenase oxidises malate to oxaloacetate for both — but the question asks which steps are bypassed.", cn: "对了一半，反而露了马脚：这两步确实是和 glyoxylate cycle 共用的——malate dehydrogenase 在两条路里都把 malate 氧化成 oxaloacetate——但题目问的是哪两步被绕过。" }
      },
      why_en: "Isocitrate lyase cleaves isocitrate directly to glyoxylate + succinate in one step, replacing BOTH of the citrate cycle's decarboxylation reactions (isocitrate dehydrogenase, reaction ④, and 2-oxoglutarate dehydrogenase, reaction ⑤) — the only two steps in the ordinary cycle that release CO2.",
      why_cn: "异柠檬酸裂解酶一步就将异柠檬酸直接裂解为乙醛酸+琥珀酸，取代了柠檬酸循环中的两个脱羧反应（异柠檬酸脱氢酶，反应④；和2-氧戊二酸脱氢酶，反应⑤）——这是普通循环中唯一释放CO2的两个步骤。"
    },
    {
      type: "short",
      q_en: "Why can't animals achieve net synthesis of carbohydrate from fatty-acid-derived acetyl-CoA, based on this pathway?",
      q_cn: "根据这条途径，为什么动物无法从脂肪酸来源的乙酰辅酶A净合成糖类？",
      accept: ["isocitrate lyase", "malate synthase", "enzyme", "lack", "genome", "异柠檬酸裂解酶", "苹果酸合酶", "缺乏", "基因组"],
      answer_en: "The book restricts the glyoxylate cycle to some microorganisms and plants. Standard biochemistry explains this as animals' genomes not encoding the two enzymes unique to this pathway, isocitrate lyase and malate synthase, so animals cannot bypass the citrate cycle's two decarboxylation steps and therefore cannot net-convert two-carbon acetyl-CoA into four-carbon oxaloacetate (a precursor for glucose synthesis).",
      answer_cn: "教材将乙醛酸循环的分布限定为某些微生物和植物。标准生物化学的解释是：动物的基因组不编码这条途径特有的两个酶——异柠檬酸裂解酶和苹果酸合酶，因此动物无法绕过柠檬酸循环的两个脱羧步骤，也就无法把二碳的乙酰辅酶A净转化为四碳的草酰乙酸（糖异生的前体）。"
    },
    {
      type: "mcq",
      q_en: "What is the net carbon outcome of ONE turn of the glyoxylate cycle, compared to one turn of the plain citrate cycle?",
      q_cn: "乙醛酸循环转一圈的净碳结果，与普通柠檬酸循环转一圈相比如何？",
      options: [
        "Both are carbon-neutral: the glyoxylate cycle takes in 2 acetyl-CoA (4 carbons) and releases all 4 again as CO2, exactly as the citrate cycle takes in 2 carbons as acetyl and releases 2, so neither builds new skeleton",
        "The glyoxylate cycle takes in 2 acetyl-CoA (4 carbons) and releases no CO2, netting one new 4-carbon oxaloacetate; the citrate cycle takes in 2 carbons (as acetyl) and releases exactly 2 as CO2, netting zero",
        "The glyoxylate cycle releases more CO2 than the plain citrate cycle, since it takes in two acetyl-CoA per turn instead of one and decarboxylates both of them at isocitrate lyase",
        "Neither cycle changes the oxaloacetate pool: the glyoxylate cycle's malate synthase consumes the oxaloacetate that its own malate dehydrogenase step regenerates later in the same turn"
      ],
      answer: 1,
      optionRefs: { 2: "6-2-2-2" },
      optionNotes: {
        0: { en: "The book's overall equation releases no CO2 at all: 2 acetyl-CoA + 2 NAD⁺ + FAD + 3 H2O → oxaloacetate + 2 NADH + H⁺ + FADH2 + 2 CoA-SH. Carbon-neutrality is true of the plain citrate cycle only, and it is exactly what the glyoxylate cycle exists to escape.", cn: "教材给的总方程完全不放 CO2：2 acetyl-CoA + 2 NAD⁺ + FAD + 3 H2O → oxaloacetate + 2 NADH + H⁺ + FADH2 + 2 CoA-SH。碳收支为零只适用于普通的 citrate cycle，而 glyoxylate cycle 存在的意义正是摆脱这一点。" },
        2: { en: "Isocitrate lyase performs no decarboxylation whatever: it cleaves isocitrate straight into glyoxylate plus succinate. It sits there precisely to replace the two steps, reactions ④ and ⑤, that would otherwise have released the CO2.", cn: "Isocitrate lyase 根本不做脱羧：它直接把 isocitrate 切成 glyoxylate 和 succinate。它被放在那里，正是为了替换掉本来会放出 CO2 的那两步，也就是反应 ④ 和 ⑤。" },
        3: { en: "Malate synthase consumes glyoxylate and a SECOND acetyl-CoA, not oxaloacetate — it makes malate out of them. The turn therefore ends with one new four-carbon oxaloacetate that was not there before, which is the whole point of the pathway.", cn: "Malate synthase 消耗的是 glyoxylate 和第二个 acetyl-CoA，不是 oxaloacetate——它用这两者生成 malate。所以转完一圈会多出一个原来没有的四碳 oxaloacetate，这正是这条通路的意义所在。" }
      },
      why_en: "Per the overall equations: the citrate cycle's acetyl-CoA + ... → 2 CO2 + ... balances 2 carbons in against 2 out. The glyoxylate cycle's 2 acetyl-CoA + ... → oxaloacetate + ... releases no CO2 at all, so all 4 incoming carbons end up in the one new oxaloacetate — a genuine net gain, which the plain cycle can never produce in a single turn.",
      why_cn: "根据总反应式：柠檬酸循环的「乙酰辅酶A+...→2CO2+...」中，进入的2个碳与离开的2个碳（以CO2形式）相抵消。而乙醛酸循环的「2乙酰辅酶A+...→草酰乙酸+...」完全不释放CO2，因此进入的4个碳全部保留在新生成的一个草酰乙酸中——这是真正的净得，普通循环转一圈永远无法做到这一点。"
    }
  ],
  oral: {
    q_en: "Describe the glyoxylate cycle: which two reactions define it, what does it bypass, and why does that matter physiologically?",
    q_cn: "请描述乙醛酸循环：哪两个反应定义了它？它绕过了什么？这在生理上有什么意义？",
    model_en: "The glyoxylate cycle is what the book calls an interesting modification of the citrate cycle, found in some microorganisms and in plants, in which acetyl-CoA is not degraded but instead used to build four-carbon dicarboxylic acids. Two reactions define it and simultaneously distinguish it from the ordinary citrate cycle. The first is isocitrate lyase, which cleaves isocitrate directly into glyoxylate and succinate in a single step; this is the crucial bypass, because it replaces both of the citrate cycle's decarboxylation reactions — isocitrate dehydrogenase and two-oxoglutarate dehydrogenase — the only two steps in the normal cycle where carbon is lost as carbon dioxide. The second reaction is malate synthase, which takes that glyoxylate and condenses it with a second molecule of acetyl-CoA to form malate. That malate is then oxidized, reusing the citrate cycle's own malate dehydrogenase, to oxaloacetate, and together with several other reused citrate-cycle enzymes shown in the cycle's diagram, this closes the pathway. The overall arithmetic is the whole point: two molecules of acetyl-CoA go in, no carbon dioxide comes out, and one new molecule of oxaloacetate comes out — a genuine net gain of a four-carbon skeleton from two two-carbon units, which a single turn of the ordinary citrate cycle, where two carbons entering as acetyl are always balanced by two carbons leaving as carbon dioxide, can never achieve. That net gain is exactly why this pathway matters: it's the reason many bacteria can grow using acetate, or other compounds that produce acetyl-CoA, as a carbon source, and the reason germinating oil-seed plants can convert the fat stored in their seeds into the carbohydrate and energy a growing seedling needs. It's also worth being precise about what the book does and doesn't say here: it restricts the pathway's occurrence to some microorganisms and plants, but it doesn't spell out in these words that animals lack it or name the missing enzymes — that animals' genomes simply don't encode isocitrate lyase or malate synthase, and therefore cannot achieve this same net conversion of fat into sugar, is standard biochemical knowledge filling a gap the book leaves implicit rather than something quoted directly from the page.",
    checklist: [
      "Framed the pathway as a citrate-cycle modification restricted to some microorganisms and plants",
      "Named isocitrate lyase and its product (glyoxylate + succinate from isocitrate)",
      "Explained this bypasses BOTH CO2-releasing steps (isocitrate DH and 2-oxoglutarate DH)",
      "Named malate synthase and its reaction (glyoxylate + 2nd acetyl-CoA → malate)",
      "Gave the overall equation and the net-carbon-gain point (2 acetyl-CoA in, 0 CO2 out, 1 new oxaloacetate)",
      "Contrasted this explicitly with the citrate cycle's net-zero carbon balance",
      "Gave both physiological examples (bacteria on acetate, germinating oil seeds)",
      "Distinguished the book's own scoping language from the standard-biochemistry enzyme explanation for why animals lack the pathway"
    ]
  }
},

{
  id: "6-2-4-1",
  book: "cz",
  topicKey: "respiratory-chain",
  chapter: 6,
  section: "6.2.4",
  czTitle: "Respirační řetězec a aerobní fosforylace — úvod a komplex I",
  enTitle: "The respiratory chain and aerobic phosphorylation — introduction and Complex I",
  cnTitle: "呼吸链与有氧磷酸化——导论与复合物I",
  pages: [141],
  coverage: "full",
  coverageNote: "GAP-FILL NODE: this node's material was originally expected (per this batch's own task framing) to be covered by whichever node/agent handled pages up through 141. Cross-checking that neighbouring scratch file directly (ch6_part2.js) shows its last node, id '6-2-3' (Glyoxylátový cyklus, pages [140,141]), explicitly and deliberately stops its own coverage 'immediately before the bold 6.2.4 Respirační řetězec a aerobní fosforylace heading, which starts an unrelated topic not covered by this node' — so the entire 6.2.4 opening (the section heading itself, its framing paragraphs, and Complex I's identity/defining equation) was left uncovered by anyone. Since this content was already read in full directly from the scan (necessary anyway to check the page-141/142 boundary for the next node), this node closes that gap rather than leaving it as a bare flag. Read: the full '6.2.4 Respirační řetězec a aerobní fosforylace' heading and its four opening paragraphs on p.141 (bioenergetic framing/substrate sources, redox-potential-directed transfer and the membrane's 'vectorial character', the five-multienzyme-complex + mobile-carrier framing, and Complex I's identity and defining equation), stopping at 'Jeho základem je flavoprotein NADH-dehydrogenasa obsahující kromě FMN další prostetické skupiny typu FeS' — the sentence that continues, mid-word-group, onto p.142 as '(tzv. proteiny s nehemově vázanými atomy železa a síry).', which is where the next node (6-2-4-2) picks up.",
  cnNote: { topic: "二十一", title: "氧化磷酸化作用（笔记 p.127起）——标题与本节呼吸链/有氧磷酸化导论内容强对应，具体页码未逐页核实", status: "partial" },
  mustKnow: { en: "Because the redox enzymes are built INTO the membrane rather than floating free, the whole system gets a fixed direction in three-dimensional space, not just a rate — and that fixed orientation is exactly what lets chemical energy convert into a proton gradient at all. Strip Complex I down to one sentence: it takes the electrons NADH is carrying and hands them to ubiquinone, releasing protons along the way.", cn: "因为这些氧化还原酶是嵌在膜里的，而不是自由漂浮的，整个系统就获得了三维空间里固定的**方向**，而不只是速率——正是这种固定的取向，才让化学能能够转化成质子梯度。把复合物I压缩成一句话：它接过 NADH 携带的电子，交给泛醌，并在这个过程中释放质子。" },
  summary: {
    en: "Section 6.2.4 opens by framing the respiratory chain and aerobic phosphorylation together as the two membrane-localized processes that COMPLETE the bioenergetic story: the aerobic route to chemical energy via oxidative cleavage of chemical bonds. Reduced cofactors feeding the chain come not only from the citrate cycle's four dehydrogenation steps, but also from pyruvate's oxidative decarboxylation (ch. 7.8), fatty-acid β-oxidation (ch. 8.4), and — if glycolysis runs aerobically — glyceraldehyde-3-phosphate dehydrogenation (ch. 7.8). Transfer proceeds cofactor to cofactor toward rising (more positive) redox potential, ending at oxygen (tab. 6.2). Critically, because the oxidoreductant enzymes are built INTO the inner mitochondrial membrane rather than floating free, the membrane gives the system a VECTORIAL character — fixing not just reaction rate but direction in 3D space — which is what lets chemical energy (ΔG') interconvert with osmotic work (H+ transport against its gradient), the link between the cell's oxidoreduction and phosphorylation energy-transport systems. Five multienzyme lipoprotein complexes (Roman numerals I-V) are the chain's basic structural units; its three MOBILE components are NADH, ubiquinol, and cytochrome c. Complex I, detailed in Obr. 6.7, is NADH:ubiquinone oxidoreductase: NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2 — i.e. reduction of the semiquinone form of ubiquinone to ubiquinol — built on the flavoprotein NADH-dehydrogenase.",
    cn: "6.2.4节开篇把呼吸链和有氧磷酸化这两个定位于膜内的过程放在一起框定：它们共同完成了生物能学的整个故事——通过化学键的氧化裂解获取化学能的有氧途径。进入呼吸链的还原型辅因子不仅来自柠檬酸循环的四个脱氢步骤，也来自丙酮酸的氧化脱羧（第7.8节）、脂肪酸的β-氧化（第8.4节），以及——若糖酵解以有氧方式进行——3-磷酸甘油醛的脱氢（第7.8节）。传递按辅因子到辅因子的顺序进行，朝着氧化还原电位升高（更正）的方向前进，最终到达氧（表6.2）。关键在于，由于催化氧化还原的酶系统是构建在内线粒体膜之中、而非游离存在的，膜结构赋予了该系统「矢量特性」——不仅决定反应速率，也决定其在三维空间中的方向——这正是化学能（ΔG'）得以与渗透功（逆浓度梯度转运H+）相互转化的原因，也是细胞氧化还原能量传递系统与磷酸化能量传递系统之间的连接环节。五个多酶脂蛋白复合物（以罗马数字I–V标注）是呼吸链的基本结构单位；其三个可移动组分是NADH、泛醇和细胞色素c。复合物I（详见图6.7）是NADH:泛醌氧化还原酶：NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2——即把半醌形式的泛醌还原为泛醇——其基础是黄素蛋白NADH-脱氢酶。"
  },
  points: [
    { cz: "resp. řetězec + aerobní fosforylace = dovršení bioenergetiky", en: "6.2.4 covers TWO processes together, both localized in the inner mitochondrial membrane (Obr. 6.6): the RESPIRATORY CHAIN and AEROBIC PHOSPHORYLATION. Together they represent the AEROBIC way of obtaining chemical energy via oxidative cleavage of chemical bonds, and they COMPLETE/CROWN the bioenergetic processes described earlier in the chapter.", cn: "6.2.4节把两个过程放在一起讨论，二者都定位于内线粒体膜（图6.6）：呼吸链和有氧磷酸化。二者共同代表了通过化学键氧化裂解获取化学能的有氧方式，并完成/收束了本章前面所描述的生物能学过程。" },
    { cz: "zdroje redukovaných kofaktorů (cit. cyklus, pyruvát, MK, glykolýza)", en: "Reduced cofactors entering the chain come from FOUR sources: the citrate cycle's FOUR dehydrogenation steps; the OXIDATIVE DECARBOXYLATION of pyruvate (cross-ref ch. 7.8); β-OXIDATION of fatty acids (cross-ref ch. 8.4); and dehydrogenation of GLYCERALDEHYDE-3-PHOSPHATE, IF glycolysis (cross-ref ch. 7.8) is running AEROBICALLY.", cn: "进入呼吸链的还原型辅因子来自四个来源：柠檬酸循环的四个脱氢步骤；丙酮酸的氧化脱羧（前瞻引用第7.8节）；脂肪酸的β-氧化（前瞻引用第8.4节）；以及——若糖酵解（前瞻引用第7.8节）以有氧方式进行——3-磷酸甘油醛的脱氢。" },
    { cz: "směr přenosu: nižší → vyšší redoxpotenciál, konečně na O2 (tab. 6.2)", en: "Transfer of electrons (and protons, or electrons alone) proceeds as a SERIES of hand-offs from one cofactor to the next, finally to OXYGEN, moving from carriers with LOWER redox potential toward those with RISING, more positive values (see tab. 6.2). The relevant oxidoreductants are tied to the STRUCTURE of the inner mitochondrial membrane.", cn: "电子（及质子，或仅电子）的传递以一系列从一个辅因子到下一个辅因子的接力方式进行，最终传给氧，方向是从氧化还原电位较低的载体走向电位不断升高、更正的载体（见表6.2）。相关的氧化还原载体都与内线粒体膜的结构相联系。" },
    { cz: "vektorový charakter membrány; ΔG' ⇌ osmotická práce (spojovací článek)", en: "Because the enzyme system is BUILT INTO the biological membrane, this determines not just the REACTION RATE but also its DIRECTION in three-dimensional space — giving it a VECTORIAL character. This is what enables mutual interconversion of chemical energy (ΔG') and osmotic work (transport of H+ AGAINST its concentration gradient) — the connecting link between the cell's TWO energy-transport systems, the OXIDOREDUCTION system and the PHOSPHORYLATION system.", cn: "由于该酶系统被构建在生物膜之中，这不仅决定了反应速率，也决定了其在三维空间中的方向——赋予其矢量特性。正是这一点使化学能（ΔG'）与渗透功（逆浓度梯度转运H+）得以相互转化——这是细胞两大能量传递系统，即氧化还原系统与磷酸化系统之间的连接环节。" },
    { cz: "5 multienzymových lipoproteinových komplexů; mobilní složky NADH/ubichinol/cyt c", en: "FIVE MULTIENZYME LIPOPROTEIN COMPLEXES can be isolated from the inner mitochondrial membrane, denoted by ROMAN NUMERALS; they are integral membrane components and the BASIC UNITS of the respiratory chain (Obr. 6.9, 6.10). The chain's MOBILE components are NADH, UBIQUINOL (dihydroubiquinone, sometimes called coenzyme Q), and CYTOCHROME c.", cn: "内线粒体膜中可分离出五个多酶脂蛋白复合物，以罗马数字标注；它们是膜的整合组分，也是呼吸链的基本单位（图6.9、6.10）。呼吸链的可移动组分是NADH、泛醇（二氢泛醌，有时也称辅酶Q）和细胞色素c。" },
    { cz: "komplex I = NADH:ubichinon-oxidoreduktasa; NADH+H⁺+2QH•⇌NAD⁺+2QH2", en: "COMPLEX I (detailed in Obr. 6.7) can be designated NADH:UBIQUINONE OXIDOREDUCTASE. It catalyses: NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2 — i.e. reduction of the SEMIQUINONE form of ubiquinone (QH•) to UBIQUINOL (QH2). Its basis is the flavoprotein NADH-DEHYDROGENASE, containing besides FMN further FeS-type prosthetic groups [the sentence completing this description continues onto p.142, covered by the next node].", cn: "复合物I（详见图6.7）可定义为NADH:泛醌氧化还原酶。它催化：NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2——即把半醌形式的泛醌（QH•）还原为泛醇（QH2）。其基础是黄素蛋白NADH-脱氢酶，除FMN外还含有FeS型辅基［该描述的句子在142页仍有后续，由下一节点覆盖］。" }
  ],
  terms: [
    { cz: "dýchací (respirační) řetězec", en: "respiratory (electron transport) chain", cn: "呼吸链（电子传递链）", def_en: "The series of membrane-embedded redox complexes and mobile carriers that transfer electrons from reduced cofactors to oxygen, generating a proton gradient across the inner mitochondrial membrane.", def_cn: "一系列嵌入膜内的氧化还原复合物及可移动载体，把电子从还原型辅因子传递到氧，从而在内线粒体膜两侧建立质子梯度。" },
    { cz: "redoxpotenciál (tab. 6.2)", en: "redox potential (tab. 6.2)", cn: "氧化还原电位（表6.2）", def_en: "A measure of a carrier's tendency to accept electrons; respiratory-chain carriers are ordered from lower to progressively higher (more positive) redox potential, ending at oxygen.", def_cn: "衡量载体接受电子倾向的指标；呼吸链载体按氧化还原电位从低到逐渐升高（更正）排列，终点是氧。" },
    { cz: "vektorový charakter (membránový enzymový systém)", en: "vectorial character (of the membrane-embedded enzyme system)", cn: "矢量特性（膜结合酶系统）", def_en: "The directionality in 3D space that a membrane-embedded reaction acquires beyond its rate, arising because the catalysing enzymes are fixed within the membrane rather than free in solution.", def_cn: "膜结合反应除反应速率外还获得的三维空间方向性，源于催化酶被固定在膜内而非游离于溶液中。" },
    { cz: "ΔG' a osmotická práce — spojovací článek", en: "ΔG' and osmotic work — the connecting link", cn: "ΔG'与渗透功——连接环节", def_en: "The interconversion between the free-energy change of redox reactions and the work of transporting H+ against its own concentration gradient, linking the oxidoreduction and phosphorylation energy-transport systems.", def_cn: "氧化还原反应的自由能变化与逆浓度梯度转运H+所做的功之间的相互转化，连接了氧化还原与磷酸化两大能量传递系统。" },
    { cz: "pět multienzymových lipoproteinových komplexů (I–V)", en: "five multienzyme lipoprotein complexes (I-V)", cn: "五个多酶脂蛋白复合物（I–V）", def_en: "The Roman-numeral-labelled integral membrane complexes that form the basic structural units of the respiratory chain and phosphorylation system.", def_cn: "以罗马数字标注的整合膜复合物，是呼吸链与磷酸化系统的基本结构单位。" },
    { cz: "NADH:ubichinon-oxidoreduktasa (komplex I, úvodní definice)", en: "NADH:ubiquinone oxidoreductase (Complex I, opening definition)", cn: "NADH:泛醌氧化还原酶（复合物I，开篇定义）", def_en: "Complex I's identity and defining reaction as first introduced: NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2, reducing ubiquinone's semiquinone form to ubiquinol.", def_cn: "复合物I的定义及其最初引入的反应式：NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2，把泛醌的半醌形式还原为泛醇。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Besides the citrate cycle's four dehydrogenation steps, which set of pathways does the book name as sources of reduced cofactors entering the respiratory chain?",
      q_cn: "除柠檬酸循环的四个脱氢步骤外，教材还指出了哪些途径是进入呼吸链的还原型辅因子的来源？",
      options: [
        "Glycolysis alone, whether it is running aerobically or anaerobically, since it is the only cytosolic pathway in the list with a dehydrogenation step of its own",
        "Fatty-acid β-oxidation alone; pyruvate's oxidative decarboxylation and glycolysis both feed a separate and unrelated route",
        "Oxidative decarboxylation of pyruvate, fatty-acid β-oxidation, and dehydrogenation of glyceraldehyde-3-phosphate when glycolysis runs aerobically",
        "Electron carriers imported ready-reduced from the chloroplast, together with the dehydrogenation of glyceraldehyde-3-phosphate"
      ],
      answer: 2,
      optionRefs: { 3: "6-1" },
      optionNotes: {
        0: { en: "Glycolysis qualifies, but only conditionally: the book names dehydrogenation of glyceraldehyde-3-phosphate as a source specifically WHEN glycolysis is running aerobically. Dropping that condition is the error, and it is the condition that matters.", cn: "Glycolysis 算数，但是有条件的：教材点名的是 glyceraldehyde-3-phosphate 的脱氢，而且限定在 glycolysis 有氧运行的时候。把这个条件丢掉就是这里的错误，而这个条件恰恰是关键。" },
        1: { en: "β-oxidation is one of three further sources, not the only one. Pyruvate's oxidative decarboxylation is named right alongside it, and all of these deliver their reduced cofactors into the same chain, not into a separate route.", cn: "β-oxidation 只是另外三个来源之一，不是唯一。Pyruvate 的氧化脱羧就写在它旁边，而且这些来源的还原型辅因子都进入同一条链，不存在什么另一条独立的路线。" },
        3: { en: "Chloroplasts belong to photosynthesis in ch. 9, the phototrophs' route; nothing in the mitochondrial chain is imported from them. The glyceraldehyde-3-phosphate half of this option is right, but only under the aerobic condition.", cn: "叶绿体属于第 9 章的 photosynthesis，是 phototroph 那条路；mitochondria 的呼吸链没有任何东西是从那里进口的。选项后半句 glyceraldehyde-3-phosphate 倒是对的，但只在有氧条件下成立。" }
      },
      why_en: "The book names three further sources besides the citrate cycle: oxidative decarboxylation of pyruvate (ch. 7.8), β-oxidation of fatty acids (ch. 8.4), and dehydrogenation of glyceraldehyde-3-phosphate specifically when glycolysis (ch. 7.8) proceeds aerobically — not glycolysis unconditionally, and not fatty-acid oxidation alone.",
      why_cn: "除柠檬酸循环外，教材还指出了另外三个来源：丙酮酸的氧化脱羧（第7.8节）、脂肪酸的β-氧化（第8.4节），以及——特别是当糖酵解（第7.8节）以有氧方式进行时——3-磷酸甘油醛的脱氢，而不是无条件地包括糖酵解，也不是只有脂肪酸氧化一项。"
    },
    {
      type: "mcq",
      q_en: "According to the book's introduction to 6.2.4, what specifically gives the respiratory chain's membrane-embedded enzyme system a 'vectorial character'?",
      q_cn: "根据教材对6.2.4节的导论，究竟是什么赋予了呼吸链膜结合酶系统「矢量特性」？",
      options: [
        "The free diffusion of NADH through the mitochondrial matrix, which delivers reducing equivalents to whichever complex happens to be nearest, so that direction follows the concentration gradient",
        "A dedicated motor protein that drags each carrier into position, independently of how the membrane itself is built",
        "The fact that every reaction in the chain is fully reversible, so that net direction is set by how much reduced cofactor is present rather than by structure",
        "Its embedding in the biological membrane, which fixes not just reaction rate but also direction in three-dimensional space, enabling interconversion of chemical energy and osmotic work"
      ],
      answer: 3,
      optionRefs: { 2: "6-2-1-1" },
      optionNotes: {
        0: { en: "NADH is indeed one of the chain's three mobile components, with ubiquinol and cytochrome c — but mobility is the opposite of what fixes direction. Direction comes from the complexes being built into the membrane at fixed positions.", cn: "NADH 确实是这条链的三个可移动组分之一（另两个是 ubiquinol 和 cytochrome c）——但可移动性恰恰不是决定方向的东西。方向来自各复合体被固定嵌在膜里的位置。" },
        1: { en: "No motor protein appears anywhere in the book's account of the chain. What determines not just rate but also direction in three-dimensional space is that the enzyme system is built INTO the biological membrane.", cn: "教材讲呼吸链时从头到尾没有出现过什么 motor protein。既决定速率、又决定三维空间方向的，是这套酶系统被嵌进生物膜这件事本身。" },
        2: { en: "The chain runs one way because each carrier hands its electrons to one of higher redox potential, ending at oxygen at +0.82 V. The membrane then fixes that direction in space; it does not leave it to concentrations.", cn: "这条链单向运行，是因为每个载体都把电子交给 redox 电位更高的下一个，最后交给 +0.82 V 的氧。膜进一步把这个方向固定在空间里，而不是把它交给浓度去决定。" }
      },
      why_en: "The book states that embedding the enzyme system in the biological membrane determines, besides rate, also the direction of the catalysed reaction in three-dimensional space — i.e. gives it a vectorial character — and that this is what enables interconversion of chemical energy (ΔG') and osmotic work (H+ transport against its gradient).",
      why_cn: "教材指出，把酶系统嵌入生物膜不仅决定了反应速率，也决定了所催化反应在三维空间中的方向——即赋予其矢量特性——正是这一点使化学能（ΔG'）与渗透功（逆梯度转运H+）之间的相互转化成为可能。"
    },
    {
      type: "short",
      q_en: "Give Complex I's defining reaction as introduced at the start of 6.2.4, and explain in words what it represents.",
      q_cn: "请给出6.2.4节开篇引入的复合物I的定义反应式，并用文字说明它代表什么。",
      accept: ["NADH", "QH2", "ubiquinol", "semiquinone", "QH•", "泛醇", "半醌", "还原"],
      answer_en: "NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2. This represents Complex I, NADH:ubiquinone oxidoreductase, coupling oxidation of NADH to reduction of the semiquinone form of ubiquinone (QH•) all the way to ubiquinol (QH2).",
      answer_cn: "NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2。这代表复合物I（NADH:泛醌氧化还原酶）将NADH的氧化与半醌形式泛醌（QH•）被彻底还原为泛醇（QH2）这一过程相偶联。"
    }
  ],
  oral: {
    q_en: "Introduce section 6.2.4: what are the respiratory chain and aerobic phosphorylation, where do the chain's substrates come from, and what does the membrane's 'vectorial character' mean?",
    q_cn: "请介绍6.2.4节：呼吸链与有氧磷酸化是什么？呼吸链的底物来自哪里？膜的「矢量特性」意味着什么？",
    model_en: "Section 6.2.4 covers two processes together, the respiratory chain and aerobic phosphorylation, both localized in the inner mitochondrial membrane, and the book frames them as the aerobic route to chemical energy through oxidative cleavage of chemical bonds, the point at which the whole bioenergetic story comes together. The reduced cofactors that feed into this chain are not limited to the four dehydrogenation steps of the citrate cycle; they also arrive from the oxidative decarboxylation of pyruvate, from beta-oxidation of fatty acids, and, whenever glycolysis is running aerobically, from the dehydrogenation of glyceraldehyde-3-phosphate. Within the chain itself, electrons, or electrons together with protons, are handed from one cofactor to the next in a strict direction, moving from carriers with lower redox potential toward those with progressively higher, more positive values, until they finally reach oxygen. What makes this whole system distinctive is that its enzyme complexes are not freely diffusing in solution but built into the structure of the inner mitochondrial membrane itself, and that embedding does something important: it doesn't just set the reaction's rate, it also fixes its direction in three-dimensional space, giving the whole system what the book calls a vectorial character. That vectorial character is precisely what allows chemical energy, in the form of the free energy change of these redox reactions, to be interconverted with osmotic work, meaning the transport of protons against their own concentration gradient, and this interconversion is the connecting link between the two great energy-transport systems of living cells, the oxidoreduction system and the phosphorylation system. Structurally, five multienzyme lipoprotein complexes can be isolated from the inner mitochondrial membrane, numbered with Roman numerals, each an integral part of the membrane and a basic functional unit of the chain, while three mobile components, NADH, ubiquinol, and cytochrome c, ferry electrons and protons between them. The first of these, Complex I, can be identified as NADH:ubiquinone oxidoreductase, and its defining reaction is written as NADH plus a proton plus two molecules of the semiquinone form of ubiquinone yielding NAD-plus plus two molecules of ubiquinol — in other words, Complex I couples the oxidation of NADH to the full reduction of ubiquinone's semiquinone radical form down to ubiquinol, and it does this using the flavoprotein NADH-dehydrogenase as its structural basis, a protein that carries not only FMN but also further iron-sulfur prosthetic groups.",
    checklist: [
      "Named the two processes (respiratory chain + aerobic phosphorylation) and their shared membrane location",
      "Listed all four sources of reduced cofactors (citrate cycle, pyruvate oxidative decarboxylation, fatty-acid β-oxidation, aerobic glycolysis's G3P step)",
      "Described electron/proton transfer direction (low to high redox potential, ending at O2)",
      "Explained 'vectorial character' and its link to interconverting ΔG' and osmotic work",
      "Named the five multienzyme complexes and the three mobile components",
      "Identified Complex I and gave its defining equation"
    ]
  }
},

{
  id: "6-2-4-2",
  book: "cz",
  topicKey: "respiratory-chain",
  chapter: 6,
  section: "6.2.4",
  czTitle: "Komplex I a Komplex II respiračního řetězce",
  enTitle: "Complex I and Complex II of the respiratory chain",
  cnTitle: "呼吸链复合物I与复合物II",
  pages: [142, 143],
  coverage: "full",
  coverageNote: "Continues directly from 6-2-4-1: p.142 opens MID-SENTENCE ('(tzv. proteiny s nehemově vázanými atomy železa a síry).' — completing 'further prosthetic groups of the FeS type, so-called proteins with non-heme-bound iron and sulfur atoms', a sentence begun on p.141 and covered by the preceding node). This node picks up from there: the rest of Complex I's FeS relay, the two chain-wide repeating principles, and the full Obr. 6.6 overview figure (zoomed in three passes — left transport-protein half, right respiratory-complex half, and the ATP-synthase/F1F0 portion at the bottom). p.143 read in full through Obr. 6.7 (zoomed twice, left FMN/FeS half and right FeS/Q half, to confirm every 2Fe3+/2Fe2+ redox-state label and the M/C matrix-cytosol orientation) and the two-sentence Complex II definition, stopping exactly where Obr. 6.8/Komplex III begins (covered by the next node). NODE-SPLIT NOTE: the book marks 'Komplex I', 'Komplex II' etc. only as bold run-in phrases inside continuous prose, not as numbered sub-headings — same situation as ch.5's 5.2.1 split. The grouping into one node per complex (or complex-pair, here) is an editorial choice for this dense section, not a break the book itself marks; all five 6.2.4 nodes in this batch share the book's own single section number.",
  cnNote: { topic: "二十一", title: "氧化磷酸化作用（笔记 p.127起）——标题与本节呼吸链复合物内容强对应，具体页码未逐页核实", status: "partial" },
  mustKnow: { en: "Every carrier in the chain is one of two kinds: some move an electron+proton pair together (NAD⁺, FMN, Q), others move electrons alone (FeS clusters, cytochromes) — and it is exactly this alternation, plus each carrier's fixed position in the membrane, that adds up to protons moving in one particular direction rather than randomly. Complex II is not a new idea — it IS the citrate cycle's own succinate dehydrogenase, now viewed as a second doorway feeding the same ubiquinone pool as Complex I.", cn: "链上的每一种载体只有两种类型：有的同时搬运一对电子加质子（NAD⁺、FMN、Q），有的只搬运电子（FeS 簇、细胞色素）——正是这种交替，加上每个载体在膜里固定的位置，才使质子朝着某一个特定方向移动，而不是随机乱跑。复合物II并不是什么新东西——它**就是**柠檬酸循环里那个琥珀酸脱氢酶，现在被当作另一道门，把电子送进和复合物I相同的泛醌池。" },
  summary: {
    en: "Complex I (NADH:ubiquinone oxidoreductase, defined on the previous page) is built around the flavoprotein NADH-dehydrogenase: besides FMN it carries iron-sulfur (FeS) prosthetic groups, i.e. proteins with non-heme-bound Fe and S atoms. On the matrix side FMN is reduced to FMNH2 by NADH; FMNH2's electrons are then relayed first to a Fe4S4 cluster (positioned toward the cytosolic side, which reoxidizes FMNH2 and releases protons into the intermembrane/cytosolic space) and then to a second, Fe2S2 cluster back on the matrix side, which finally reduces the mobile, hydrophobic semiquinone (ubiquinone dissolved in the membrane) toward ubiquinol. The book flags two features that recur through the WHOLE chain: carriers alternate between ones that move a full electron+proton pair (NAD+, FMN, Q) and ones that move ELECTRONS ONLY (FeS proteins, cytochromes); and this alternation, combined with each carrier's fixed position in the membrane, produces a net VECTORIAL transfer of 2 protons from the matrix to the cytosolic (intermembrane) side. Obr. 6.6 shows this whole arrangement — NADH-dehydrogenase, FeS proteins, the Q/cytochrome relay, and the F1F0 ATP synthase — laid out across the inner mitochondrial membrane, alongside separate carrier proteins for malate, phosphate and ADP/ATP exchange. Obr. 6.7 gives Complex I's own simplified 2-electron/2-proton transfer scheme. Complex II, covered in two sentences, is succinate:ubiquinone oxidoreductase — a flavoprotein with FAD and two Fe2S2 groups, identical to the succinate dehydrogenase already familiar from the citrate cycle.",
    cn: "复合物I（NADH:泛醌氧化还原酶，定义见前一页）以黄素蛋白NADH-脱氢酶为核心：除FMN外，它还携带铁硫（FeS）辅基，即非血红素结合的铁硫原子蛋白。在基质侧，NADH将FMN还原为FMNH2；FMNH2的电子接着依次传递给一个Fe4S4簇（位于偏cytosol侧的位置，使FMNH2再氧化，并向膜间/胞质侧释放质子），再传给回到基质侧的第二个Fe2S2簇，后者最终将疏水的、可在膜内自由移动的半醌形式泛醌还原为泛醇。教材特别指出两个贯穿整条呼吸链的规律：载体在「传递完整的电子+质子对」（NAD+、FMN、Q）和「只传递电子」（FeS蛋白、细胞色素）之间交替出现；这种交替再加上各载体在膜内固定的位置，共同造成了从基质侧到胞质（膜间）侧净2个质子的矢量式转移。图6.6把这整套装置——NADH脱氢酶、FeS蛋白、Q/细胞色素接力链，以及F1F0 ATP合酶——画在内线粒体膜的横截面上，旁边还有苹果酸、磷酸和ADP/ATP交换的独立载体蛋白。图6.7给出了复合物I自身简化的「2电子/2质子」转移示意图。复合物II只用了两句话带过：它是琥珀酸:泛醌氧化还原酶——一种含FAD和两个Fe2S2基团的黄素蛋白，与柠檬酸循环中早已认识的琥珀酸脱氢酶是同一个酶。"
  },
  points: [
    { cz: "NADH-dehydrogenasa; FMN + FeS skupiny", en: "Complex I's core is the flavoprotein NADH-DEHYDROGENASE. Besides FMN it contains further FeS-type prosthetic groups — i.e. proteins with NON-HEME-bound iron and sulfur atoms (this is the sentence spanning the p.141/p.142 page break).", cn: "复合物I的核心是黄素蛋白NADH-脱氢酶。除FMN外，它还含有FeS型辅基——即非血红素结合的铁硫原子蛋白（这句话正好跨越141/142页的分页处）。" },
    { cz: "Fe4S4 (cytosolová str.) → Fe2S2 (matrix. str.)", en: "On the matrix side the complex dehydrogenates NADH; on the OUTER/cytosolic side it is reoxidized by an FeS protein of the Fe4S4 TYPE, which accepts electrons from FMNH2 and releases PROTONS into the cytosolic (more precisely intermembrane) space. Electrons from the Fe4S4 protein then pass to an analogous Fe2S2-type protein located on the OPPOSITE, matrix side.", cn: "复合物在基质侧使NADH脱氢；在外侧/胞质侧，它被一个Fe4S4型的FeS蛋白再氧化，该蛋白接受来自FMNH2的电子，并向胞质（更准确地说是膜间）空间释放质子。Fe4S4蛋白的电子随后传递给位于相反一侧（基质侧）的类似Fe2S2型蛋白。" },
    { cz: "ubichinon — hydrofobní, volně pohyblivý v membráně", en: "The Fe2S2 protein hands its electrons to the SEMIQUINONE form of ubiquinone, which — thanks to its hydrophobic character — moves freely, DISSOLVED IN THE MEMBRANE (cross-referenced forward to ch. 8.5).", cn: "Fe2S2蛋白将电子交给半醌形式的泛醌，后者由于其疏水性质而能够自由移动，溶解于膜中（前瞻引用第8.5节）。" },
    { cz: "2 opakující se rysy: pár e⁻+H⁺ vs. jen e⁻; vektorový přenos", en: "TWO features recur throughout the whole respiratory chain, already visible at Complex I: (1) carriers ALTERNATE between transporting a full pair of electron+proton (better: 2 electrons + 2 protons) via NAD+, FMN or Q, and transporting ELECTRONS ONLY via FeS-proteins and cytochromes; (2) this alternation of carriers, combined with their fixed placement in the membrane, produces a VECTORIAL, apparent transfer of 2 protons from the inner (matrix) side outward to the intermembrane (cytosolic) space.", cn: "有两个规律贯穿整条呼吸链，从复合物I开始就已显现：（1）载体在经NAD+、FMN或Q传递「完整的电子+质子对（更准确地说是2电子+2质子）」与经FeS蛋白和细胞色素「只传递电子」之间交替；（2）这种载体交替加上它们在膜内固定的位置，共同产生了从内侧（基质）到膜间（胞质）侧2个质子的矢量式（表观）转移。" },
    { cz: "Obr. 6.6 — celková lokalizace ve vnitřní membráně", en: "OBR. 6.6 maps the whole respiratory chain plus ATP synthase onto a cross-section of the inner mitochondrial membrane (M = matrix, C = cytosolic/intermembrane side). To the left it shows separate carrier proteins for MALATE, phosphate (Pi) and ADP (exchanged for ATP, plus an OH⁻ carrier). To the right, folded into a single continuous curve of membrane, it shows NADH+H+/NAD+ entering FMNH2, two labelled Fe-S clusters, the Q/QH•/QH2 pool, two 'b'-type cytochromes, cytochrome c1, cytochromes a/a3 with Cu, and three separate '2H+' arrows pointing out to the C side at different points along the chain — then, below, the F1/F0 ATP synthase with ADP+Pi entering and ATP leaving, 1/2O2+2H+ combining to H2O, and a final 2H+ arrow flowing back through F0.", cn: "图6.6把整条呼吸链加上ATP合酶画在内线粒体膜的横截面上（M=基质，C=胞质/膜间侧）。左侧显示了苹果酸、磷酸（Pi）和ADP（与ATP交换，另有一个OH⁻载体）各自独立的载体蛋白。右侧则在一段连续弯曲的膜结构中，依次画出NADH+H+/NAD+进入FMNH2、两个标注出来的Fe-S簇、Q/QH•/QH2库、两个「b」型细胞色素、细胞色素c1、含铜的细胞色素a/a3，以及沿链条不同位置指向C侧的三个独立「2H+」箭头；下方则是F1/F0 ATP合酶，ADP+Pi进入、ATP离开，1/2O2+2H+结合生成H2O，还有一个2H+箭头流回F0。" },
    { cz: "Obr. 6.7 — schéma přenosu 2 e⁻ + 2 H⁺ komplexem I", en: "OBR. 6.7 is Complex I's own simplified scheme (M labelled top, C labelled bottom). NADH+H+/NAD+ enter/leave at the matrix (M) side into an FMN/FMNH2 loop (labelled 'FP', flavoprotein); FMNH2 hands electrons to a Fe4S4 cluster (shown cycling 2Fe3+ ⇌ 2Fe2+), which hands them to a Fe2S2 cluster (2Fe2+ ⇌ 2Fe3+); the output, on the M side of the membrane, is 2 QH• reduced onward to 2 QH2. A separate '2H+' arrow is drawn entering from the C (bottom) side into the junction between the FMN loop and the Fe4S4 cluster.", cn: "图6.7是复合物I自身的简化示意图（M标在上方，C标在下方）。NADH+H+/NAD+在基质（M）侧进出一个FMN/FMNH2循环（标注为「FP」，黄素蛋白）；FMNH2把电子交给Fe4S4簇（图中显示其在2Fe3+⇌2Fe2+间循环），后者再交给Fe2S2簇（2Fe2+⇌2Fe3+）；在膜的M侧，输出为2个QH•被进一步还原为2个QH2。图中另有一个「2H+」箭头，从C（下方）侧进入FMN循环与Fe4S4簇的连接处。" },
    { cz: "komplex II = sukcinátdehydrogenasa (citrátový cyklus)", en: "COMPLEX II can be briefly defined as SUCCINATE:UBIQUINONE OXIDOREDUCTASE. It is a flavoprotein containing the prosthetic group FAD plus TWO Fe2S2-type groups — it is the same succinate dehydrogenase already known from the CITRATE CYCLE (ch. 6.2.2), now viewed as a respiratory-chain entry point rather than a citrate-cycle step.", cn: "复合物II可简要定义为琥珀酸:泛醌氧化还原酶。它是一种含辅基FAD和两个Fe2S2型基团的黄素蛋白——正是柠檬酸循环（第6.2.2节）中已经认识的那个琥珀酸脱氢酶，只不过这里是把它看作呼吸链的一个电子入口，而非柠檬酸循环的一步反应。" },
    { cz: "komplex I vs. II — oba \"krmí\" stejný chinonový pool", en: "Complex I (from NADH) and Complex II (from succinate) are both, functionally, ENTRY points that feed electrons into the SAME mobile ubiquinone pool — a point the book reinforces later with Obr. 6.9, where both complexes are drawn converging on Complex III through shared Q/QH2 carriers.", cn: "复合物I（来自NADH）和复合物II（来自琥珀酸）在功能上都是把电子输送进同一个可移动泛醌库的「入口」——教材后面用图6.9进一步强化了这一点，图中两个复合物都通过共享的Q/QH2载体汇入复合物III。" }
  ],
  terms: [
    { cz: "NADH:ubichinon-oxidoreduktasa (komplex I)", en: "NADH:ubiquinone oxidoreductase (Complex I)", cn: "NADH:泛醌氧化还原酶（复合物I）", def_en: "The respiratory-chain entry complex that dehydrogenates NADH on the matrix side via FMN, then relays electrons through two FeS clusters to reduce ubiquinone.", def_cn: "呼吸链的入口复合物，在基质侧经FMN使NADH脱氢，再经两个FeS簇接力传递电子以还原泛醌。" },
    { cz: "FMN / FMNH2 (flavoprotein, FP)", en: "FMN / FMNH2 (flavoprotein, FP)", cn: "FMN/FMNH2（黄素蛋白，FP）", def_en: "Flavin mononucleotide, Complex I's first electron/proton-accepting cofactor; reduced to FMNH2 by NADH on the matrix side.", def_cn: "黄素单核苷酸，复合物I第一个接受电子/质子的辅factor；在基质侧被NADH还原为FMNH2。" },
    { cz: "Fe4S4 / Fe2S2 proteiny", en: "Fe4S4 / Fe2S2 iron-sulfur (FeS) proteins", cn: "Fe4S4/Fe2S2铁硫（FeS）蛋白", def_en: "Non-heme iron-sulfur redox centres in Complex I that relay electrons only (no protons) from FMNH2 onward to ubiquinone.", def_cn: "复合物I中的非血红素铁硫氧化还原中心，只传递电子（不传递质子），把电子从FMNH2继续传向泛醌。" },
    { cz: "ubichinon (Q) / ubichinol (QH2) / semichinon (QH•)", en: "ubiquinone (Q) / ubiquinol (QH2) / semiquinone (QH•)", cn: "泛醌（Q）/泛醇（QH2）/半醌（QH•）", def_en: "The mobile, hydrophobic lipid-soluble electron/proton carrier of the respiratory chain, existing in fully oxidised (Q), one-electron-reduced radical (QH•) and fully reduced (QH2) forms.", def_cn: "呼吸链中可移动、疏水、脂溶性的电子/质子载体，存在完全氧化（Q）、单电子还原自由基（QH•）和完全还原（QH2）三种形式。" },
    { cz: "vektorový přenos protonů", en: "vectorial proton transfer", cn: "质子的矢量式转移", def_en: "The net, directional movement of protons from the matrix to the cytosolic/intermembrane side that emerges from carriers' fixed orientation in the membrane, not from any single explicit 'pump' step.", def_cn: "由载体在膜内固定取向所产生的、从基质侧到胞质/膜间侧的净定向质子移动，并非来自某个单一明确的「泵」步骤。" },
    { cz: "sukcinát:ubichinon-oxidoreduktasa (komplex II)", en: "succinate:ubiquinone oxidoreductase (Complex II)", cn: "琥珀酸:泛醌氧化还原酶（复合物II）", def_en: "The respiratory-chain complex identical to citrate-cycle succinate dehydrogenase; a flavoprotein with FAD and two Fe2S2 clusters, feeding electrons from succinate into the ubiquinone pool.", def_cn: "与柠檬酸循环中琥珀酸脱氢酶相同的呼吸链复合物；含FAD和两个Fe2S2簇的黄素蛋白，把来自琥珀酸的电子输入泛醌库。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the sentence spanning the p.141/142 page break, what does Complex I's NADH-dehydrogenase contain besides FMN?",
      q_cn: "根据跨越141/142页分页处的那句话，复合物I的NADH-脱氢酶除FMN外还含有什么？",
      options: [
        "Copper ions, of the kind that pair with the hemes at the end of the chain",
        "A second molecule of FMN, bound on the matrix side of the complex",
        "Further prosthetic groups of the FeS type — proteins with non-heme-bound iron and sulfur atoms",
        "A bound molecule of cytochrome c, held permanently against the cytosolic face of the inner membrane"
      ],
      answer: 2,
      optionRefs: { 0: "6-2-4-4", 3: "6-2-4-3" },
      optionNotes: {
        0: { en: "Copper enters only at Complex IV, where cytochromes a and a3 together with copper ions are the functional units of cytochrome oxidase. Complex I has no copper at all.", cn: "铜只在 Complex IV 出现，那里 cytochrome a、a3 加上铜离子构成 cytochrome oxidase 的功能单元。Complex I 里根本没有铜。" },
        1: { en: "FMN appears once, in the flavoprotein NADH-dehydrogenase. What follows it is not a second flavin but an Fe4S4 cluster on the cytosolic side, then an Fe2S2 cluster on the matrix side.", cn: "FMN 只出现一次，在 flavoprotein NADH-dehydrogenase 里。跟在它后面的不是第二个 flavin，而是位于胞质侧的 Fe4S4 簇，再传给基质侧的 Fe2S2 簇。" },
        3: { en: "Cytochrome c is a MOBILE carrier that slides along the membrane surface in the cytosolic space, between Complex III and Complex IV. It is not a component of any complex, least of all the first one.", cn: "Cytochrome c 是可移动的载体，在胞质侧沿膜面滑动，往返于 Complex III 和 Complex IV 之间。它不属于任何一个复合体，更不属于第一个。" }
      },
      why_en: "The text explicitly names 'další prostetické skupiny typu FeS (tzv. proteiny s nehemově vázanými atomy železa a síry)' — further FeS-type prosthetic groups, i.e. proteins with non-heme-bound iron and sulfur atoms. Copper appears only later, at Complex IV; cytochrome c is a separate mobile carrier, not part of Complex I.",
      why_cn: "原文明确指出「另有非血红素结合的铁硫原子蛋白类型的辅基」——即FeS型辅基。铜离子要到复合物IV才出现；细胞色素c是另一个独立的可移动载体，并非复合物I的一部分。"
    },
    {
      type: "mcq",
      q_en: "Per the two 'repeating features' the book highlights at Complex I, which pair of carriers moves ELECTRONS ONLY, without accompanying protons?",
      q_cn: "根据教材在复合物I处强调的两个「重复出现的规律」，哪一对载体只传递电子、不伴随质子？",
      options: [
        "FeS-proteins and cytochromes",
        "NAD⁺ and FMN in sequence",
        "Ubiquinone (Q) and FMN together",
        "NADH and the semiquinone form QH•"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Both belong to the OTHER group. The book puts NAD⁺, FMN and Q together as the carriers that move a full electron-and-proton pair — better, 2 electrons and 2 protons — which is exactly the alternation the question is about.", cn: "这两个都属于另一组。教材把 NAD⁺、FMN 和 Q 归在一起，说它们运的是完整的电子加质子对（更准确地说是 2 个电子加 2 个质子）——题目问的正是这种交替。" },
        2: { en: "Ubiquinone belongs with NAD⁺ and FMN among the paired carriers; only FeS-proteins and cytochromes move electrons on their own, and it is that alternation which makes the proton transfer vectorial.", cn: "Ubiquinone 和 NAD⁺、FMN 同属成对运输的一组；只有 FeS-proteins 和 cytochromes 单独运电子，正是这种交替使质子的转移具有方向性。" },
        3: { en: "NADH is the reduced substrate entering at the matrix side and QH• the semiquinone leaving Complex I toward ubiquinol — both carry protons along with their electrons, so neither is electron-only.", cn: "NADH 是从基质侧进入的还原型底物，QH• 是离开 Complex I 走向 ubiquinol 的半醌——两者都是带着质子一起运电子的，都不属于只运电子那一组。" }
      },
      why_en: "The book states carriers alternate between transporting a full electron+proton pair via NAD+, FMN or Q, and transporting ELECTRONS ONLY via FeS-proteins and cytochromes. NAD+, FMN and Q are all in the paired-transport group, not the electron-only group.",
      why_cn: "教材指出，载体在经NAD+、FMN或Q传递完整的电子+质子对，与经FeS蛋白和细胞色素只传递电子之间交替。NAD+、FMN和Q都属于「成对传递」组，而非「只传电子」组。"
    },
    {
      type: "short",
      q_en: "In Obr. 6.7's scheme, trace the electron path from FMNH2 to the point where ubiquinone is reduced, naming both FeS clusters in order.",
      q_cn: "在图6.7的示意图中，请描述电子从FMNH2到泛醌被还原为止的传递路径，并按顺序说出两个FeS簇的名称。",
      accept: ["Fe4S4", "Fe2S2", "FMNH2", "semiquinone", "QH2", "半醌", "泛醌"],
      answer_en: "FMNH2 passes its electrons first to the Fe4S4 cluster, which passes them on to the Fe2S2 cluster; the Fe2S2 cluster then reduces the semiquinone form of ubiquinone (QH•) onward to ubiquinol (QH2), shown in the figure as 2 QH• → 2 QH2.",
      answer_cn: "FMNH2先把电子交给Fe4S4簇，Fe4S4簇再把电子交给Fe2S2簇；Fe2S2簇随后将半醌形式的泛醌（QH•）进一步还原为泛醇（QH2），图中表示为2 QH•→2 QH2。"
    },
    {
      type: "mcq",
      q_en: "What does the book say about the relationship between Complex I and Complex II at the level of the enzyme itself?",
      q_cn: "关于复合物I与复合物II在酶本身层面的关系，教材是怎么说的？",
      options: [
        "They are two names for one enzyme, Complex II being the membrane-bound form of the NADH-dehydrogenase in Complex I",
        "Complex I activates Complex II by phosphorylating it, which is why succinate can only be oxidised while NADH is being consumed",
        "Complex II operates only in plants and some microorganisms; mammalian mitochondria feed the shared ubiquinone pool through Complex I alone, as Obr. 6.9 is drawn to show",
        "Complex II is stated to be identical to the succinate dehydrogenase already known from the citrate cycle, feeding the same ubiquinone pool that Complex I feeds"
      ],
      answer: 3,
      optionRefs: { 1: "6-2-4-5", 2: "6-2-4-4" },
      optionNotes: {
        0: { en: "Two different enzymes, not two names. Complex I's core is the flavoprotein NADH-dehydrogenase with FMN and FeS groups; Complex II is a flavoprotein with FAD and two Fe2S2 groups. What they share is the ubiquinone pool they both feed.", cn: "是两个不同的酶，不是同一个酶的两个名字。Complex I 的核心是带 FMN 和 FeS 基团的 flavoprotein NADH-dehydrogenase；Complex II 是带 FAD 和两个 Fe2S2 基团的 flavoprotein。它们共有的是都在供给的那个 ubiquinone 池。" },
        1: { en: "No phosphorylation of one complex by another appears anywhere in this chapter. Phosphorylation is Complex V's business, and what it phosphorylates is ADP, using the proton gradient the other complexes build.", cn: "本章从头到尾没有出现过一个复合体去磷酸化另一个复合体这回事。磷酸化是 Complex V 的工作，而且它磷酸化的是 ADP，用的是其他复合体建立起来的质子梯度。" },
        2: { en: "Obr. 6.9 draws the complexes in the order II, III, I, IV, with II and I both converging on Complex III through shared Q/QH2 carriers — the figure shows the opposite of a species restriction, and none is stated anywhere.", cn: "Obr. 6.9 把复合体按 II、III、I、IV 的顺序画出来，II 和 I 都通过共用的 Q/QH2 载体汇聚到 Complex III——这张图显示的恰恰不是什么物种上的限制，教材也从没提过这种限制。" }
      },
      why_en: "The book calls Complex II 'sukcinátdehydrogenasa známá z citrátového cyklu' — the succinate dehydrogenase already known from the citrate cycle — a flavoprotein with FAD and two Fe2S2 groups. It is a distinct enzyme from Complex I, but both feed electrons into the same mobile ubiquinone pool.",
      why_cn: "教材称复合物II为「柠檬酸循环中已知的琥珀酸脱氢酶」——一种含FAD和两个Fe2S2基团的黄素蛋白。它是与复合物I不同的独立酶，但两者都把电子输送进同一个可移动的泛醌库。"
    }
  ],
  oral: {
    q_en: "Describe Complex I's internal electron relay and explain the two general principles the book says recur throughout the whole respiratory chain.",
    q_cn: "请描述复合物I内部的电子接力过程，并解释教材指出的、贯穿整条呼吸链的两个一般规律。",
    model_en: "Complex I, NADH:ubiquinone oxidoreductase, is built around the flavoprotein NADH-dehydrogenase, which besides its FMN carries further iron-sulfur prosthetic groups — proteins with non-heme-bound iron and sulfur atoms. On the matrix side of the inner mitochondrial membrane this complex dehydrogenates NADH, reducing FMN to FMNH2; on the opposite, cytosolic side, FMNH2 is reoxidised by an iron-sulfur protein of the Fe4S4 type, which accepts its electrons and releases protons into the intermembrane space. Those electrons then pass to a second cluster, of the Fe2S2 type, positioned back on the matrix side, which finally reduces the semiquinone form of ubiquinone; because ubiquinone is hydrophobic it simply dissolves and moves freely within the membrane rather than needing its own carrier protein. Already at this first complex the book wants two general principles noticed, because they recur at every subsequent stage of the chain. First, the carriers alternate in what they move: some, like NAD+, FMN and ubiquinone, carry a full pair of one electron plus one proton, while others, the iron-sulfur proteins and later the cytochromes, carry electrons only, with no accompanying proton. Second, precisely because these two kinds of carrier alternate and each has a fixed orientation within the membrane, the net effect — even without any single dramatic 'pumping' step — is a vectorial transfer of protons from the matrix side out to the intermembrane, cytosolic side; at Complex I specifically this amounts to two protons. Complex II, by contrast, gets only a brief mention here: it is succinate:ubiquinone oxidoreductase, a flavoprotein carrying FAD and two Fe2S2 clusters, and it turns out to be nothing other than the succinate dehydrogenase already familiar from the citrate cycle, now viewed as a second, parallel entry point feeding electrons into that same mobile ubiquinone pool that Complex I feeds.",
    checklist: [
      "Named Complex I as NADH:ubiquinone oxidoreductase, built on the NADH-dehydrogenase flavoprotein",
      "Traced the electron path FMN/FMNH2 to Fe4S4 to Fe2S2 to ubiquinone",
      "Explained where protons are released relative to matrix vs cytosolic side",
      "Stated principle 1: alternation between paired electron+proton carriers and electron-only carriers",
      "Stated principle 2: fixed membrane orientation plus alternation produces vectorial proton transfer",
      "Identified Complex II as succinate:ubiquinone oxidoreductase = citrate-cycle succinate dehydrogenase",
      "Noted both Complex I and Complex II feed the same mobile ubiquinone pool"
    ]
  }
},

{
  id: "6-2-4-3",
  book: "cz",
  topicKey: "respiratory-chain",
  chapter: 6,
  section: "6.2.4",
  czTitle: "Komplex III respiračního řetězce a Q-cyklus",
  enTitle: "Complex III of the respiratory chain and the Q cycle",
  cnTitle: "呼吸链复合物III与Q循环",
  pages: [143, 144],
  coverage: "full",
  coverageNote: "p.143 read in full from where the previous node left off: Obr. 6.8 (zoomed in three passes — top with the two H+ arrows and cytochrome bK/bT pair, middle with the QH•/QH2/Q labels, bottom with cytochrome c1 and the small mobile-cytochrome-c circle) plus the Complex III definition and its summary reaction. p.144 read in full through the Q-cycle discussion: the cytochrome bT-to-bK electron handoff, the boxed 'Komplex I či II → QH• → bT → bK → QH•' scheme (re-read zoomed to confirm the dashed feedback line and the c1/c branch), and the '4 protons per 2 electrons' stoichiometry statement — stopping exactly where 'Komplex IV' begins (covered by the next node).",
  cnNote: { topic: "二十一", title: "氧化磷酸化作用（笔记 p.127起）——标题与本节呼吸链复合物内容强对应，具体页码未逐页核实", status: "partial" },
  mustKnow: { en: "Complex III's whole trick is solving a mismatch: ubiquinol carries two electrons at once, but cytochrome c can only take one at a time. So Complex III splits the pair — one electron goes on to cytochrome c, and the other, via a second cytochrome loop, is used to regenerate ubiquinone on the matrix side. Splitting one two-electron carrier into two one-electron handoffs like this is why one NADH's worth of electrons through this complex releases 4 protons, not 2.", cn: "复合物III的全部窍门在于解决一个『不匹配』：泛醌醇一次带两个电子，而细胞色素c一次只能接一个。所以复合物III把这一对电子拆开——一个交给细胞色素c，另一个则通过第二条细胞色素回路，用来在基质一侧重新生成泛醌。正是这种把一个『双电子载体』拆成两次『单电子交接』的做法，才使得一份 NADH 的电子经过这个复合物能释放 4 个质子，而不是 2 个。" },
  summary: {
    en: "Complex III reoxidizes the ubiquinol produced by Complex I or II, and can be characterized as ubiquinol:cytochrome c oxidoreductase: 2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+. Its redox core is TWO cytochrome b molecules, bT and bK, which differ in redox potential because they bind different polypeptides; only bT is reducible by ubiquinol. The complex also contains cytochrome c1 and an FeS protein. Mechanistically (this is the book's own account of what modern biochemistry calls the Q cycle): mobile QH2 is oxidized at the cytosolic side by cytochrome bT down to the semiquinone QH•, releasing one proton to the cytosolic space; that semiquinone is further oxidized by cytochrome c1 (also cytosolic-side) all the way to Q, releasing a second proton and letting c1 reduce the mobile carrier cytochrome c. Meanwhile the electron that reduced bT is passed on to cytochrome bK, which uses it, on the MATRIX side, to reduce ubiquinone back to the semiquinone form — consuming one proton from the matrix. The book draws this as a small flow scheme: Complex I or II → QH• → bT → bK → QH•, with a feedback line showing the electron 'circulating' in that bT→bK loop, and a branch QH• → c1 → c. Net result: transferring one electron from Complex I or II onward to cytochrome c corresponds to releasing two protons into the cytosolic space, so two electrons (one NADH's worth) release four protons here — an arrangement that also lets the two-electron/two-proton carrier ubiquinol interface cleanly with the one-electron carrier cytochrome c.",
    cn: "复合物III使复合物I或II产生的泛醇再氧化，可定性为泛醇:细胞色素c氧化还原酶：2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+。其氧化还原核心是两个细胞色素b分子——bT和bK，二者因结合不同多肽而具有不同的氧化还原电位；只有bT能被泛醇还原。该复合物还含有细胞色素c1和一个FeS蛋白。从机制上看（这是教材对现代生物化学所称「Q循环」的自有表述）：可移动的QH2在胞质侧被细胞色素bT氧化至半醌QH•，向胞质空间释放一个质子；该半醌进一步被（同样位于胞质侧的）细胞色素c1氧化至Q，释放第二个质子，并使c1得以还原可移动载体细胞色素c。与此同时，使bT还原的那个电子被传递给细胞色素bK，后者在基质侧利用该电子把泛醌重新还原为半醌形式——消耗基质中的一个质子。教材把这一过程画成一个简单的流程图：复合物I或II→QH•→bT→bK→QH•，用一条反馈线表示电子在bT→bK这一环中「循环」，另有一条分支QH•→c1→c。最终结果是：一个电子从复合物I或II传递到细胞色素c，对应向胞质空间释放两个质子，因此两个电子（相当于一个NADH的量）在此处释放四个质子——这一安排同时也使得双电子/双质子载体泛醇能够与单电子载体细胞色素c顺畅对接。"
  },
  points: [
    { cz: "komplex III = ubichinol:cytochrom c-oxidoreduktasa", en: "COMPLEX III reoxidizes the product of Complex I or II (ubiquinol) and is characterized as UBIQUINOL:CYTOCHROME C OXIDOREDUCTASE, summarized by: 2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+.", cn: "复合物III使复合物I或II的产物（泛醇）再氧化，定性为泛醇:细胞色素c氧化还原酶，总反应式为：2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+。" },
    { cz: "cytochromy bT a bK — různé polypeptidy, různý redoxpotenciál", en: "The redox core is TWO cytochrome b molecules, bT and bK, which differ in redox potential because of binding to DIFFERENT POLYPEPTIDES. Only bT is REDUCIBLE BY UBIQUINOL. The complex also contains cytochrome c1 and a molecule of FeS-protein.", cn: "氧化还原核心是两个细胞色素b分子——bT和bK，二者因结合不同多肽而氧化还原电位不同。只有bT能被泛醇还原。该复合物还含有细胞色素c1和一个FeS蛋白分子。" },
    { cz: "QH2 → QH• na cytosolové straně (cyt bT), uvolní se 1 H⁺", en: "Ubiquinol (QH2), formed by Complex I or II's reduction of the semiquinone, moves in the membrane and is oxidized on the CYTOSOLIC (C) side by cytochrome bT — but only down to the SEMIQUINONE (QH•) again. ONE proton is released into the cytosolic space at this step.", cn: "泛醇（QH2）由复合物I或II还原半醌而形成，在膜内移动，并在胞质（C）侧被细胞色素bT氧化——但只氧化到半醌（QH•）为止。这一步向胞质空间释放一个质子。" },
    { cz: "QH• → Q přes cytochrom c1, uvolní se 2. H⁺; c1 redukuje mobilní cyt c", en: "This semiquinone is further oxidized, also on the cytosolic side, by cytochrome c1 all the way to ubiquinone (Q). A FURTHER proton is released into the cytosolic space at the same time. Membrane-bound cytochrome c1 then reduces MOBILE cytochrome c, which can 'slide' along the membrane surface in the cytosolic space.", cn: "该半醌进一步被（同样位于胞质侧的）细胞色素c1氧化至泛醌（Q）。与此同时，又有一个质子被释放到胞质空间。膜结合的细胞色素c1随后还原可移动的细胞色素c，后者能在胞质空间中沿膜表面「滑动」。" },
    { cz: "bT → bK; bK redukuje Q na matrixové straně, spotřebuje se H⁺ z matrix", en: "What happens to the now-reduced cytochrome bT? It passes its electron to cytochrome bK, which — on the MATRIX side — uses it to reduce ubiquinone to the semiquinone form; this consumes ONE proton FROM the matrix.", cn: "此时已被还原的细胞色素bT接下来会怎样？它把电子传给细胞色素bK，后者在基质侧利用该电子把泛醌还原为半醌形式；这一步消耗基质中的一个质子。" },
    { cz: "schéma: Komplex I/II → QH• → bT → bK → QH• (+ větev c1 → c)", en: "The book draws the electron path in Complex III as a scheme: Komplex I či II → QH• → bT → bK → QH•, with a dashed feedback line linking the two QH• positions and the note that 'one electron thus cyclically circulates in the loop QH• → bT → bK → QH•'; a second branch runs from the first QH• down through c1 to c.", cn: "教材把复合物III中的电子路径画成示意图：复合物I或II→QH•→bT→bK→QH•，并用一条虚线反馈线连接前后两个QH•的位置，注明「一个电子由此在QH•→bT→bK→QH•这一环中循环」；另有一条分支从第一个QH•向下经c1通向c。" },
    { cz: "1 e⁻ → cyt c ⇒ 2 H⁺ do cytosolu; 2 e⁻ (1 NADH) ⇒ 4 H⁺", en: "NET STOICHIOMETRY: transfer of ONE electron from Complex I or II onward to cytochrome c corresponds to transfer of TWO protons into the cytosolic space — i.e. two electrons (one NADH's worth) allow transfer of FOUR protons at this point.", cn: "净化学计量：一个电子从复合物I或II传递到细胞色素c，对应向胞质空间转移两个质子——即两个电子（相当于一个NADH的量）在此处使四个质子得以转移。" },
    { cz: "proč: 2e⁻/2H⁺ nosič (ubichinol) styká s 1e⁻ nosičem (cyt c)", en: "This arrangement is precisely what lets the TWO-electron (and two-proton) carrier, ubiquinol, interact with the ONE-electron carrier, cytochrome c — the Q-cycle mechanism is the interface between the chain's paired-carrier chemistry and its single-electron cytochrome relay.", cn: "这一安排正是使双电子（且双质子）载体泛醇能够与单电子载体细胞色素c相互作用的关键——Q循环机制正是连接呼吸链「成对载体」化学与其单电子细胞色素接力的接口。" }
  ],
  terms: [
    { cz: "ubichinol:cytochrom c-oxidoreduktasa (komplex III)", en: "ubiquinol:cytochrome c oxidoreductase (Complex III)", cn: "泛醇:细胞色素c氧化还原酶（复合物III）", def_en: "The respiratory complex reoxidizing ubiquinol produced by Complex I/II, reducing cytochrome c while releasing protons to the cytosolic side; reaction 2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+.", def_cn: "使复合物I/II产生的泛醇再氧化的呼吸链复合物，还原细胞色素c的同时向胞质侧释放质子；反应式为2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+。" },
    { cz: "cytochrom bT / cytochrom bK", en: "cytochrome bT / cytochrome bK", cn: "细胞色素bT/细胞色素bK", def_en: "The two cytochrome b molecules forming Complex III's redox core, differing in redox potential via different polypeptide binding; only bT is directly reducible by ubiquinol.", def_cn: "构成复合物III氧化还原核心的两个细胞色素b分子，因结合不同多肽而氧化还原电位不同；只有bT能被泛醇直接还原。" },
    { cz: "cytochrom c1", en: "cytochrome c1", cn: "细胞色素c1", def_en: "A membrane-bound cytochrome in Complex III that oxidizes the semiquinone QH• to Q, releasing a proton, and reduces mobile cytochrome c.", def_cn: "复合物III中膜结合的细胞色素，将半醌QH•氧化为Q并释放一个质子，同时还原可移动的细胞色素c。" },
    { cz: "cytochrom c (mobilní)", en: "cytochrome c (mobile)", cn: "细胞色素c（可移动）", def_en: "A small, water-soluble one-electron carrier that slides along the membrane surface in the cytosolic/intermembrane space, shuttling electrons from Complex III to Complex IV.", def_cn: "一种小分子、水溶性的单电子载体，在胞质/膜间空间沿膜表面滑动，将电子从复合物III传送到复合物IV。" },
    { cz: "Q-cyklus (elektron \"obíhá\" QH•→bT→bK→QH•)", en: "the Q cycle (electron 'circulating' QH•→bT→bK→QH•)", cn: "Q循环（电子在QH•→bT→bK→QH•间「循环」）", def_en: "The book's own name-free description of the mechanism by which Complex III splits each ubiquinol's two electrons between cytochrome c (via c1) and a matrix-side ubiquinone-regenerating loop (via bT/bK), releasing 4 cytosolic protons per 2 electrons overall.", def_cn: "教材对复合物III机制的自有描述（未使用「Q循环」这一名称本身）：将每个泛醇的两个电子分别送往细胞色素c（经c1）和基质侧再生泛醌的循环（经bT/bK），整体上每2个电子向胞质释放4个质子。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is Complex III's summary reaction, and which product is released alongside the reduced cytochrome c?",
      q_cn: "复合物III的总反应式是什么？除了还原型细胞色素c之外还释放了什么产物？",
      options: [
        "2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+, releasing the semiquinone and protons",
        "2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 Q + 2 H2O, releasing water and fully oxidised ubiquinone",
        "2 QH• + 2 cyt c(Fe2+) → 2 cyt c(Fe3+) + 2 QH2, running the whole transfer the other way",
        "2 QH2 + O2 → 2 Q + 2 H2O directly, with no cytochrome c taking part at any stage"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-4-4", 3: "6-2-4-4" },
      optionNotes: {
        1: { en: "The oxidation stops at the SEMIQUINONE QH•, not at Q, and what leaves the complex is 2 H⁺ released into the cytosolic space, not water. Water is made at Complex IV, from oxygen.", cn: "氧化停在半醌 QH• 这一步，没有走到 Q；离开复合体的是放进胞质侧的 2 个 H⁺，不是水。水是在 Complex IV 由氧生成的。" },
        2: { en: "The arrow is reversed. Complex III REOXIDISES the ubiquinol that Complex I or II made and REDUCES cytochrome c, which then carries the electron onward; running it this way would be the endergonic direction.", cn: "箭头反了。Complex III 是把 Complex I 或 II 生成的 ubiquinol 重新氧化，并把 cytochrome c 还原，再由它把电子带下去；按这个方向跑属于吸能方向。" },
        3: { en: "This is Complex IV's chemistry, not Complex III's. Complex III is defined as ubiquinol:cytochrome c oxidoreductase and never touches O2; the oxygen-to-water step belongs to cytochrome oxidase at the end of the chain.", cn: "这是 Complex IV 的化学，不是 Complex III 的。Complex III 的定义是 ubiquinol:cytochrome c oxidoreductase，从不接触 O2；由氧生成水那一步属于链末端的 cytochrome oxidase。" }
      },
      why_en: "The book gives the summary equation as 2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+ — ubiquinol is only oxidized to the SEMIQUINONE (QH•) at this overall step, not all the way to Q, and protons are released, not water.",
      why_cn: "教材给出的总反应式为2 QH2 + 2 cyt c(Fe3+) → 2 cyt c(Fe2+) + 2 QH• + 2 H+——泛醇在这一总反应中只被氧化到半醌（QH•），并非彻底氧化为Q，释放的是质子而非水。"
    },
    {
      type: "short",
      q_en: "Trace what happens to the electron that reduces cytochrome bT — where does it go, and what does it accomplish there?",
      q_cn: "请描述使细胞色素bT还原的那个电子接下来的去向，以及它在那里完成了什么？",
      accept: ["bK", "matrix", "semiquinone", "ubiquinone", "matrixová", "半醌", "基质", "泛醌"],
      answer_en: "The electron passes from bT to cytochrome bK, which is positioned to act on the matrix side, where it uses the electron to reduce ubiquinone (Q) back to the semiquinone form (QH•), consuming a proton from the matrix in the process — this regenerates a carrier that can later pick up a second electron.",
      answer_cn: "电子从bT传递给细胞色素bK，后者作用于基质侧，利用该电子把泛醌（Q）重新还原为半醌形式（QH•），过程中消耗基质中的一个质子——这样便再生出一个日后可以接受第二个电子的载体。"
    },
    {
      type: "mcq",
      q_en: "How many protons does the book say are released into the cytosolic space when 2 electrons (equivalent to one NADH) pass through Complex III to cytochrome c?",
      q_cn: "教材指出，当2个电子（相当于一个NADH）经复合物III传递到细胞色素c时，向胞质空间释放了多少个质子？",
      options: [
        "1 proton",
        "2 protons, i.e. one for each electron reaching cytochrome c",
        "4 protons",
        "6 protons, the figure for Complexes I, III and IV together"
      ],
      answer: 2,
      optionRefs: { 3: "6-2-4-4" },
      optionNotes: {
        0: { en: "Half of one half. One proton is what Complex III releases at each of its two cytosolic-side steps — QH2 to QH•, then QH• to Q — and there are two electrons to move, so the four accumulate.", cn: "只有一半的一半。1 个质子是 Complex III 在胞质侧两个步骤中每一步放出的量——QH2 到 QH•，再由 QH• 到 Q——而要搬的电子有两个，所以累计是 4 个。" },
        1: { en: "This is the per-ELECTRON figure, and the book states it in exactly that form: transfer of one electron onward to cytochrome c corresponds to two protons. One NADH's worth is two electrons, hence four protons.", cn: "这是按每个电子算的数，教材原话就是这么给的：向 cytochrome c 传递 1 个电子对应 2 个质子。一个 NADH 相当于 2 个电子，所以是 4 个质子。" },
        3: { en: "6 is the total for Complexes I, III and IV working together on one NADH — Complex III's own 4 plus Complex I's 2. Complex IV contributes none, so the extra 2 here are Complex I's, not Complex III's.", cn: "6 是 Complex I、III、IV 一起处理一个 NADH 的总数——Complex III 自己的 4 加上 Complex I 的 2。Complex IV 一个都不出，所以多出来的这 2 个是 Complex I 的，不是 Complex III 的。" }
      },
      why_en: "The book states that transferring ONE electron to cytochrome c corresponds to 2 protons released to the cytosolic space, so 2 electrons (one NADH's worth) release 4 protons at Complex III — this is the number later added to Complex I's 2 protons to give the pathway total of 6.",
      why_cn: "教材指出，一个电子传递到细胞色素c对应向胞质空间释放2个质子，因此2个电子（相当于一个NADH的量）在复合物III处释放4个质子——这个数字后来与复合物I的2个质子相加，得到NADH途径总计6个质子。"
    }
  ],
  oral: {
    q_en: "Explain how Complex III processes the two electrons carried by one ubiquinol molecule, and why this matters for interfacing with cytochrome c.",
    q_cn: "请解释复合物III如何处理一分子泛醇所携带的两个电子，并说明这为何对与细胞色素c的对接很重要。",
    model_en: "Complex III's job is to reoxidize the ubiquinol produced by either Complex I or Complex II, and the book characterizes it as ubiquinol:cytochrome c oxidoreductase, summarized by the equation two ubiquinol plus two oxidized cytochrome c yielding two reduced cytochrome c, two semiquinone, and two protons. Its redox core is two distinct cytochrome b molecules, called bT and bK, which differ in redox potential because each is bound to a different polypeptide; of the two, only bT can actually be reduced by ubiquinol directly. The complex also carries cytochrome c1 and an iron-sulfur protein. Mechanistically, a mobile ubiquinol molecule arriving at the cytosolic face of the membrane is oxidized there by cytochrome bT down to the semiquinone form, releasing one proton into the cytosolic space; that semiquinone is then further oxidized, again on the cytosolic side, by cytochrome c1, releasing a second proton and allowing c1 to reduce the small mobile carrier cytochrome c, which can then slide along the membrane surface toward Complex IV. But that accounts for only one of ubiquinol's two electrons. The other electron, having reduced cytochrome bT, is passed onward to cytochrome bK, which sits so as to act on the matrix side, where it uses that electron to reduce a fresh ubiquinone molecule back to the semiquinone form, consuming a proton from the matrix as it does so. The book draws this whole path as a small scheme, complex one or two feeding into a semiquinone, which splits toward cytochrome c one way and cycles through bT and bK the other way back to a regenerated semiquinone, with a dashed line showing that single electron circulating in that loop. The net accounting is elegant: delivering one electron to cytochrome c costs two protons released to the cytosolic side, so a full pair of electrons, the equivalent of one NADH, yields four protons here — and this whole arrangement is precisely what allows ubiquinol, a carrier built to move two electrons and two protons together, to hand its electrons off one at a time to cytochrome c, a carrier that only ever takes one.",
    checklist: [
      "Named Complex III as ubiquinol:cytochrome c oxidoreductase and gave its summary equation",
      "Distinguished cytochrome bT (reducible by ubiquinol) from bK, and noted their different polypeptide binding",
      "Described QH2 to QH• oxidation at the cytosolic side by bT, releasing 1 proton",
      "Described QH• to Q oxidation by c1, releasing a second proton and reducing mobile cytochrome c",
      "Traced the second electron through bT to bK to matrix-side ubiquinone reduction, consuming a matrix proton",
      "Stated the net stoichiometry: 1 electron to cyt c = 2 cytosolic protons; 2 electrons = 4 protons",
      "Explained why this mechanism lets a 2e-/2H+ carrier interface with a 1e- carrier"
    ]
  }
},

{
  id: "6-2-4-4",
  book: "cz",
  topicKey: "respiratory-chain",
  chapter: 6,
  section: "6.2.4",
  czTitle: "Komplex IV a souhrnné schéma komplexů I až IV",
  enTitle: "Complex IV and the summary scheme of Complexes I to IV",
  cnTitle: "呼吸链复合物IV与I–IV复合物总览",
  pages: [144, 145],
  coverage: "full",
  coverageNote: "p.144 read in full for Complex IV's definition, reaction, composition and mechanism, plus Obr. 6.9 (zoomed across three overlapping crops — left half with Complex II/III, middle boundary region, and right half with Complex I/IV — specifically to resolve which proton-count labels, 4H+/4H+/2H+, belong to which complex; this was cross-checked against, and fully resolved by, the explicit prose on p.145). p.145 read in full for its opening paragraph, which states the totals directly: 6 protons via Complexes I+III+IV per NADH, 4 protons via Complexes II+III+IV per succinate — stopping exactly where 'Mechanismus aerobní fosforylace' begins (covered by the next node).",
  cnNote: { topic: "二十一", title: "氧化磷酸化作用（笔记 p.127起）——标题与本节呼吸链复合物内容强对应，具体页码未逐页核实", status: "partial" },
  mustKnow: { en: "Complex IV never moves a single proton across the membrane, unlike Complexes I and III — yet it still raises the matrix's pH, because its last step consumes matrix protons as a substrate, combining them with electrons and oxygen to make water. That is exactly why starting from succinate (Complexes II+III+IV) nets only 4 protons out, while starting from NADH (I+III+IV) nets 6 — the whole difference is Complex I's own contribution, and it is why NADH is 'worth' more ATP than succinate.", cn: "复合物IV和复合物I、III不同，它从不把质子搬过膜——但它仍然会提高基质的 pH，因为它最后一步是把基质里的质子当作底物消耗掉，和电子、氧气一起结合成水。这正是为什么从琥珀酸出发（复合物II+III+IV）净得到的只有 4 个质子，而从 NADH 出发（I+III+IV）净得到 6 个——差的这一份完全是复合物I自己的贡献，这也是为什么 NADH『值』比琥珀酸更多的 ATP。" },
  summary: {
    en: "Complex IV is ferrocytochrome c:oxygen oxidoreductase, i.e. cytochrome oxidase: 2 cyt c(Fe2+) + 1/2 O2 ⇌ 2 cyt c(Fe3+) + O2-. The book calls its mechanism 'the least clear of all the mitochondrial oxidoreduction systems' — it is built from seven proteins, with cytochromes a and a3 plus copper ions as the functional units. It accepts electrons from mobile cytochrome c at the cytosolic side and progressively reduces oxygen molecules to oxide ions; unlike Complexes I and III, it does NOT transport protons across the membrane — but it still raises the matrix pH, because its final step protonates the oxide ions to form water: 1/2 O2 + 2 e- + 2 H+ → H2O, consuming matrix protons as a substrate rather than pumping them. Obr. 6.9 draws Complexes II, III, I and IV together (in that left-to-right order) sharing the mobile ubiquinone pool and mobile cytochrome c, with cytosolic-side proton-release arrows appearing only beneath Complex III (4 H+) and Complex I (2 H+) — none beneath Complex II or Complex IV. The opening of p.145 states the resulting totals explicitly: cooperation of Complexes I, III and IV transfers 2 electrons from NADH to oxygen while transporting 6 PROTONS from the matrix to the cytosolic space; when Complexes II, III and IV cooperate instead (starting from succinate), only 4 protons are transported.",
    cn: "复合物IV是铁细胞色素c:氧气氧化还原酶，即细胞色素氧化酶：2 cyt c(Fe2+) + 1/2 O2 ⇌ 2 cyt c(Fe3+) + O2-。教材称其机制「是所有线粒体氧化还原系统中最不清楚的」——它由七种蛋白质构成，功能单位是细胞色素a和a3以及铜离子。它在胞质侧接受来自可移动细胞色素c的电子，并逐步将氧分子还原为氧化物离子；与复合物I和III不同，它并不向膜外转运质子——但它仍会提高基质pH，因为其最后一步是将氧化物离子质子化生成水：1/2 O2 + 2 e- + 2 H+ → H2O，这是把基质质子作为底物消耗掉，而非将其泵出。图6.9把复合物II、III、I、IV（按此从左到右的顺序）画在一起，共用可移动的泛醌库和可移动的细胞色素c，向胞质侧释放质子的箭头只出现在复合物III（4 H+）和复合物I（2 H+）下方——复合物II或IV下方均无此箭头。第145页开篇明确给出了由此产生的总数：复合物I、III、IV协同作用，将2个电子从NADH传递到氧，同时从基质向胞质空间转运6个质子；而当复合物II、III、IV协同作用（从琥珀酸开始）时，只转运4个质子。"
  },
  points: [
    { cz: "komplex IV = ferrocytochrom c:kyslík-oxidoreduktasa", en: "COMPLEX IV functions as FERROCYTOCHROME C:OXYGEN OXIDOREDUCTASE, i.e. CYTOCHROME OXIDASE. Its catalysed reaction is summarized: 2 cyt c(Fe2+) + 1/2 O2 ⇌ 2 cyt c(Fe3+) + O2-.", cn: "复合物IV的功能是铁细胞色素c:氧气氧化还原酶，即细胞色素氧化酶。其催化反应总结为：2 cyt c(Fe2+) + 1/2 O2 ⇌ 2 cyt c(Fe3+) + O2-。" },
    { cz: "\"nejméně jasný mechanismus\"; 7 proteinů; cyt a, a3 + Cu", en: "The book states this complex's mechanism is the LEAST CLEAR of all the mitochondrial oxidoreduction systems. It is built from SEVEN PROTEINS, with CYTOCHROMES a AND a3, plus COPPER IONS, as its functional units.", cn: "教材指出该复合物的机制是所有线粒体氧化还原系统中最不清楚的。它由七种蛋白质构成，功能单位是细胞色素a和a3以及铜离子。" },
    { cz: "přijímá e⁻ od mobilního cyt c; redukuje O2 na oxidové ionty", en: "Cytochrome oxidase accepts electrons from MOBILE cytochrome c on the CYTOSOLIC side and progressively reduces oxygen molecules to OXIDE IONS.", cn: "细胞色素氧化酶在胞质侧接受来自可移动细胞色素c的电子，并逐步将氧分子还原为氧化物离子。" },
    { cz: "nepřenáší H⁺ přes membránu, ale zvyšuje pH matrix (spotřeba H⁺)", en: "UNLIKE all the preceding complexes, Complex IV does NOT transport protons across the membrane. It nevertheless RAISES matrix pH, by PROTONATING the oxide ions in the final reaction that forms water: 1/2 O2 + 2 e- + 2 H+ → H2O — matrix protons are CONSUMED as a substrate here, not pumped outward.", cn: "与前面各复合物不同，复合物IV并不向膜外转运质子。但它仍会提高基质pH，因为最后一步反应是将氧化物离子质子化生成水：1/2 O2 + 2 e- + 2 H+ → H2O——基质质子在此是作为底物被消耗，而非被泵出。" },
    { cz: "Obr. 6.9 — pořadí II, III, I, IV sdílející Q-pool a cyt c", en: "OBR. 6.9 ('Celkové schéma funkce oxidoredukčních komplexů I až IV') draws the complexes in the order II, III, I, IV (not I–II–III–IV), each with its cofactors labelled (Complex II: succinate/fumarate structures, FAD/FADH2; Complex III: paired Fe redox centres; Complex I: FMN/FMNH2, an FeS pair; Complex IV: paired Cu/Fe centres reducing O2), sharing the mobile ubiquinone pool (drawn between II–III and again between III–I) and mobile cytochrome c (drawn twice, linked by an arrow, between III's output and IV's input).", cn: "图6.9（「氧化还原复合物I至IV功能总示意图」）把各复合物按II、III、I、IV的顺序排列（而非I–II–III–IV），并标注各自的辅因子（复合物II：琥珀酸/延胡索酸结构、FAD/FADH2；复合物III：成对的Fe氧化还原中心；复合物I：FMN/FMNH2、一对FeS；复合物IV：还原O2的成对Cu/Fe中心），共用可移动泛醌库（分别画在II–III之间和III–I之间）以及可移动细胞色素c（画了两次，用箭头连接，位于III的输出端与IV的输入端之间）。" },
    { cz: "proton-release šipky pouze pod III (4H⁺) a I (2H⁺), ne pod II/IV", en: "In Obr. 6.9, cytosolic-side proton-release arrows appear ONLY beneath Complex III (4 H+) and beneath Complex I (2 H+) — NONE appear beneath Complex II or beneath Complex IV, visually confirming that only I and III contribute to the transmembrane proton gradient in this book's scheme.", cn: "在图6.9中，指向胞质侧的质子释放箭头只出现在复合物III（4 H+）和复合物I（2 H+）下方——复合物II或IV下方都没有这样的箭头，这从图示上确认了在教材的方案中只有复合物I和III对跨膜质子梯度有贡献。" },
    { cz: "součinnost I+III+IV: 2 e⁻ z NADH na O2, transport 6 H⁺", en: "Opening statement of p.145: through the COOPERATION of Complexes I, III and IV, TWO ELECTRONS are transferred from NADH to oxygen while SIMULTANEOUSLY transporting 6 PROTONS from the matrix to the cytosolic space of the mitochondrion.", cn: "第145页开篇陈述：通过复合物I、III、IV的协同作用，2个电子从NADH传递到氧，同时从基质向线粒体胞质空间转运6个质子。" },
    { cz: "součinnost II+III+IV (sukcinátdehydrogenasa): jen 4 H⁺", en: "When Complexes II, III and IV are engaged instead, starting from SUCCINATE DEHYDROGENASE (Complex II), only 4 PROTONS are transported — exactly Complex III's own contribution alone, since neither II nor IV contributes.", cn: "若改为复合物II、III、IV协同作用（从琥珀酸脱氢酶/复合物II开始），则只转运4个质子——恰好等于复合物III单独的贡献，因为II和IV都不贡献质子。" }
  ],
  terms: [
    { cz: "cytochromoxidasa (komplex IV)", en: "cytochrome oxidase (Complex IV)", cn: "细胞色素氧化酶（复合物IV）", def_en: "Ferrocytochrome c:oxygen oxidoreductase, the terminal respiratory complex; 7 proteins, functional units cytochromes a/a3 plus Cu ions; reduces O2 to water without pumping protons itself.", def_cn: "铁细胞色素c:氧气氧化还原酶，呼吸链的末端复合物；由7种蛋白质组成，功能单位为细胞色素a/a3及铜离子；将O2还原为水，自身不泵出质子。" },
    { cz: "cytochrom a, a3", en: "cytochrome a, a3", cn: "细胞色素a、a3", def_en: "The two cytochrome functional units of Complex IV, working with copper ions to progressively reduce oxygen to oxide ions.", def_cn: "复合物IV的两个细胞色素功能单位，与铜离子共同作用，将氧逐步还原为氧化物离子。" },
    { cz: "oxidové ionty (O2-)", en: "oxide ions (O2-)", cn: "氧化物离子（O2-）", def_en: "The intermediate reduction product of O2 at Complex IV, subsequently protonated by matrix H+ to form water.", def_cn: "O2在复合物IV中还原的中间产物，随后被基质中的H+质子化生成水。" },
    { cz: "1/2 O2 + 2e⁻ + 2H⁺ → H2O", en: "1/2 O2 + 2e- + 2H+ → H2O", cn: "1/2 O2 + 2e- + 2H+ → H2O", def_en: "Complex IV's final water-forming reaction; consumes matrix protons as substrate, raising matrix pH without translocating protons across the membrane.", def_cn: "复合物IV最后生成水的反应；将基质质子作为底物消耗，从而提高基质pH，但并不跨膜转运质子。" },
    { cz: "6 H⁺ (I+III+IV, z NADH) vs. 4 H⁺ (II+III+IV, ze sukcinátu)", en: "6 H+ (Complexes I+III+IV, from NADH) vs. 4 H+ (Complexes II+III+IV, from succinate)", cn: "6 H+（复合物I+III+IV，来自NADH）对4 H+（复合物II+III+IV，来自琥珀酸）", def_en: "The two total cytosolic-proton outputs the book gives for the two possible electron-entry routes through the respiratory chain, underlying the different ATP yields of NADH- versus succinate-linked substrates.", def_cn: "教材给出的呼吸链两条可能电子入口途径各自向胞质释放的质子总数，是NADH途径与琥珀酸途径ATP产量不同的根本原因。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which statement correctly describes how Complex IV affects the mitochondrial proton distribution?",
      q_cn: "关于复合物IV如何影响线粒体质子分布，下列哪项描述是正确的？",
      options: [
        "It pumps 4 protons per O2 across the membrane, exactly matching the number Complex III releases, and Obr. 6.9 draws the same arrow beneath it too",
        "It does not transport protons across the membrane, but raises matrix pH by consuming matrix protons to protonate oxide ions into water",
        "It pumps protons the other way, from the cytosolic space back into the matrix, and so lowers matrix pH as it works",
        "It leaves the proton distribution untouched at both faces, taking no part in the mitochondrion's pH balance at all"
      ],
      answer: 1,
      optionRefs: { 2: "6-2-4-5" },
      optionNotes: {
        0: { en: "Obr. 6.9 draws cytosolic-side proton-release arrows beneath Complex III (4 H⁺) and Complex I (2 H⁺) only — none beneath Complex II and none beneath Complex IV. Those 4 protons are Complex III's alone.", cn: "Obr. 6.9 只在 Complex III（4 H⁺）和 Complex I（2 H⁺）下面画了指向胞质侧的放质子箭头——Complex II 下面没有，Complex IV 下面也没有。那 4 个质子只属于 Complex III。" },
        2: { en: "Both the direction and the pH effect are reversed. Matrix protons are consumed here, not delivered, so matrix pH goes UP. The one complex that does move protons back into the matrix is Complex V, and it does so down the gradient.", cn: "方向和 pH 效应都说反了。这里是消耗基质里的质子，不是往里送，所以基质 pH 是升高。真正把质子送回基质的是 Complex V，而且是顺着梯度走的。" },
        3: { en: "It does not pump, but it is not neutral either. The final step 1/2 O2 + 2 e⁻ + 2 H⁺ → H2O takes matrix protons out of solution as a substrate, and that alone raises the pH of the matrix.", cn: "它确实不泵质子，但也不是毫无影响。最后一步 1/2 O2 + 2 e⁻ + 2 H⁺ → H2O 把基质里的质子当底物消耗掉，仅此一点就足以让基质 pH 升高。" }
      },
      why_en: "The book explicitly states Complex IV 'nepřenáší protony přes membránu' (does not transport protons across the membrane) but 'zvyšuje pH matrixu' (raises matrix pH) via protonation of oxide ions in the water-forming reaction — matrix H+ is consumed as a substrate, not pumped.",
      why_cn: "教材明确指出复合物IV「不跨膜转运质子」，但会「提高基质pH」，机制是在生成水的反应中把氧化物离子质子化——基质中的H+是作为底物被消耗，而非被泵出。"
    },
    {
      type: "short",
      q_en: "In Obr. 6.9, beneath which complexes do proton-release arrows to the cytosolic side appear, and what total does this predict for the NADH-fed pathway?",
      q_cn: "在图6.9中，指向胞质侧的质子释放箭头出现在哪些复合物下方？这对NADH供电子的途径预示着怎样的质子总数？",
      accept: ["Complex III", "Complex I", "4", "2", "6", "复合物III", "复合物I", "六"],
      answer_en: "Arrows appear only beneath Complex III (4 H+) and Complex I (2 H+); none appear under Complex II or IV. For the NADH-fed pathway (I+III+IV), this predicts 2+4+0 = 6 protons transported to the cytosolic space, matching the explicit statement at the top of p.145.",
      answer_cn: "箭头只出现在复合物III（4 H+）和复合物I（2 H+）下方；复合物II或IV下方都没有。对于NADH供电子的途径（I+III+IV），这预示着2+4+0=6个质子被转运到胞质空间，与第145页开篇的明确陈述相符。"
    },
    {
      type: "mcq",
      q_en: "Per the explicit statement at the start of p.145, how many protons are transported when Complexes II, III and IV cooperate, starting from succinate dehydrogenase?",
      q_cn: "根据第145页开篇的明确陈述，当复合物II、III、IV从琥珀酸脱氢酶开始协同作用时，转运了多少个质子？",
      options: [
        "1 proton",
        "8 protons",
        "6 protons, the figure when the chain starts from NADH at Complex I",
        "4 protons"
      ],
      answer: 3,
      optionRefs: { 2: "6-2-4-2" },
      optionNotes: {
        0: { en: "Far too few. Complex III alone releases 4 protons for one pair of electrons, and in this combination it is the only contributor — Complex II and Complex IV each add none.", cn: "太少了。单是 Complex III 对一对电子就放出 4 个质子，而在这个组合里它是唯一的贡献者——Complex II 和 Complex IV 各自都是零。" },
        1: { en: "Double counting. Getting to 8 would need Complex II or Complex IV to match Complex III's 4, and Obr. 6.9 draws no proton-release arrow beneath either of them.", cn: "算重了。要凑到 8，就得让 Complex II 或 Complex IV 也拿出和 Complex III 一样的 4 个，而 Obr. 6.9 在这两个下面根本没画放质子的箭头。" },
        2: { en: "6 is the NADH route, Complexes I + III + IV: Complex III's 4 plus Complex I's own 2. Starting from succinate enters at Complex II instead, skipping Complex I and its 2 protons with it.", cn: "6 是走 NADH 那条路（Complex I + III + IV）的数：Complex III 的 4 加 Complex I 自己的 2。从 succinate 出发是从 Complex II 进入的，跳过了 Complex I，也就跳过了它那 2 个质子。" }
      },
      why_en: "The book states that when Complexes II, III and IV are engaged 'u sukcinátdehydrogenasy pouze 4 protony' — only 4 protons — reflecting that Complex II itself contributes none, and only Complex III's 4-proton release applies (Complex IV contributes none either).",
      why_cn: "教材指出当复合物II、III、IV在琥珀酸脱氢酶处协同作用时，「只有4个质子」——这反映出复合物II本身不贡献质子，起作用的只有复合物III释放的4个质子（复合物IV同样不贡献）。"
    }
  ],
  oral: {
    q_en: "Describe Complex IV's function and composition, and explain how the book arrives at its two total proton-transport figures, 6 and 4.",
    q_cn: "请描述复合物IV的功能与组成，并解释教材是如何得出6和4这两个质子转运总数的。",
    model_en: "Complex IV functions as ferrocytochrome c:oxygen oxidoreductase, better known as cytochrome oxidase, catalysing the reduction of oxygen by mobile cytochrome c: two reduced cytochrome c plus a half molecule of oxygen yield two oxidised cytochrome c plus an oxide ion. The book is candid that this complex's mechanism is the least well understood of all the mitochondrial redox systems; structurally it is built from seven proteins, and its functional units are cytochromes a and a3 together with copper ions. It accepts electrons from mobile cytochrome c at the cytosolic face of the membrane and reduces oxygen molecules step by step down to oxide ions. What sets it apart from Complexes I and III is that it does not itself transport protons across the membrane at all — and yet it still changes the matrix's proton balance, because its very last step protonates those oxide ions to form water, a reaction that consumes two protons from the matrix for every oxygen atom reduced; the matrix becomes less acidic not because protons are pumped out of it, but because they are used up as a substrate. This whole arrangement is drawn together in Obr. 6.9, which places Complexes II, III, I and IV in sequence, sharing a common mobile ubiquinone pool and a common mobile cytochrome c, and if you look at where the diagram actually places its proton-release arrows toward the cytosolic side, they appear only underneath Complex III, four protons, and underneath Complex I, two protons — nowhere under Complex II or Complex IV. That figure is exactly what the opening paragraph of the next page spells out in words: when Complexes I, III and IV work together, transferring two electrons from NADH all the way to oxygen, six protons are transported from the matrix into the cytosolic space; but when the entry point is succinate instead, via Complex II, III and IV, only four protons are transported, because Complex II contributes nothing to the gradient and Complex III's four protons are all that remain. That six-versus-four contrast is precisely what later explains why NADH-linked substrates and succinate-linked substrates yield different amounts of ATP.",
    checklist: [
      "Named Complex IV as ferrocytochrome c:oxygen oxidoreductase / cytochrome oxidase and gave its reaction",
      "Noted the book calls its mechanism the least clear of the mitochondrial redox systems",
      "Gave its composition: 7 proteins, functional units cytochromes a/a3 plus Cu ions",
      "Explained it does NOT pump protons but still raises matrix pH via the water-forming reaction",
      "Described Obr. 6.9's shared ubiquinone pool and shared mobile cytochrome c across complexes",
      "Stated the 6-proton total for the NADH route (I+III+IV) and its 2+4+0 breakdown",
      "Stated the 4-proton total for the succinate route (II+III+IV) and why it's lower"
    ]
  }
},

{
  id: "6-2-4-5",
  book: "cz",
  topicKey: "respiratory-chain",
  chapter: 6,
  section: "6.2.4",
  czTitle: "Komplex V (ATP-synthasa) a mechanismus aerobní fosforylace",
  enTitle: "Complex V (ATP synthase) and the mechanism of aerobic phosphorylation",
  cnTitle: "复合物V（ATP合酶）与有氧磷酸化机制",
  pages: [145, 146],
  coverage: "full",
  coverageNote: "p.145 read in full: the 'Mechanismus aerobní fosforylace' heading and its opening paragraph, Obr. 6.10 (zoomed across two passes — top half with the H2O/O2- reaction and the '6H+ (nebo 4H+)' to '3ATP (nebo 2ATP)' relationship at F1, bottom half with the complex boxes II-III-I-IV-V and the dashed proton-circuit lines explicitly labelled '4H+ + 2H+' summing into '6H+ nebo 4H+') and Obr. 6.11 (zoomed once, full structural rendering, to read every subunit label against its own caption). p.146 read in full for its top paragraph: the ATP-synthase mechanism description, the ADP+Pi→ATP+H2O equation with its ΔG0', and the final 6H+→~3ATP / 4H+→~2ATP statement with the overall NADH-oxidation equation — stopping exactly where '6.3 Porfyrinové proteiny' begins (covered by a later node). NODE-SPLIT NOTE: same editorial-grouping caveat as the other 6.2.4 nodes in this batch — 'Mechanismus aerobní fosforylace' is the book's own italic run-in heading, not a numbered sub-section.",
  cnNote: { topic: "二十一", title: "氧化磷酸化作用（笔记 p.127起）——标题与本节（有氧磷酸化机制/ATP合酶）强对应，具体页码未逐页核实", status: "partial" },
  mustKnow: { en: "ATP synthase does not use the proton gradient to build the bond between ADP and phosphate — that bond forms on its own at the F1 active site. What proton flow through F0 actually does is change F1's shape enough to RELEASE the ATP that was already made and stuck there. And the ratio is fixed by geometry, not by choice: about 6 protons buys 3 ATP, about 4 protons buys 2 — always roughly 2 protons per ATP.", cn: "ATP合酶并不是靠质子梯度去搭建 ADP 和磷酸之间的键——那个键在 F1 的活性位点上是自己形成的。质子流过 F0 真正做的事，是改变 F1 的构象，把已经做好、卡在那里的 ATP **放出来**。而且这个比例是由结构决定的，不是随意的：大约 6 个质子换来 3 个 ATP，4 个质子换来 2 个——始终是大约 2 个质子对 1 个 ATP。" },
  trace: [
    {
      term: "ATP synthase 复合物 V / ATP 合酶",
      what: "呼吸链上的最后一个复合物，但它和前面四个不是同一类：**前四个都是氧化还原复合物，它是磷酸化复合物**。它不搬电子，它造 ATP。",
      from: "这里有个几乎人人第一次都会想错的地方，而教材说的恰恰相反。直觉是：质子梯度提供能量，用这份能量把 ADP 和磷酸「拼」起来。**但那个键其实是在 F1 的活性位点上自己形成的**，不需要质子梯度去推它。所以问题就变成了：那质子流过 F0 到底在干什么？",
      to: "答案是：**把已经做好、却死死卡在活性位点上的 ATP 放出来**。ATP 一生成就黏在那儿不肯走，真正费劲的是「松手」这一步——质子流过 F0 时改变 F1 的构象，把它松开。**能量花在了释放上，不是花在成键上。**这是这一节最容易被考、也最容易答反的一个点，值得单独记一句。",
      family: "还有一处对照值得留意：质子在这里是**顺着**浓度梯度走的——从膜的胞质侧流回基质，和前面那些复合物拼命把质子往外泵的方向正好相反。前面几步辛苦存下的势能，到这一步被兑现。",
      numbers: "换算比例是结构决定的，不是随便的：大约 **6 个质子换 3 个 ATP**，**4 个质子换 2 个**——归结起来始终是**约 2 个质子对 1 个 ATP**。"
    }
  ],
  summary: {
    en: "The transmembrane proton gradient built by Complexes I/III (from NADH) or III alone (from succinate) is the energy source used mainly by COMPLEX V (Obr. 6.6, 6.10, 6.11) — unlike Complexes I-IV, this is NOT an oxidoreduction complex but a PHOSPHORYLATION complex, i.e. ATP synthase. Uniquely among the five complexes, protons here move WITH the concentration gradient, from the cytosolic side back into the matrix, re-equalizing the proton difference; this movement is coupled to ATP formation: ADP + Pi → ATP + H2O, ΔG0' = +30.5 kJ/mol. The book's account of the mechanism: the active site in ATP synthase's F1 subunit forms the bond between ADP and phosphate, but the resulting ATP stays BOUND at that active site; passage of protons through the F0 subunit changes the active site's CONFORMATION, letting the newly made ATP be released from F1, so the cycle can repeat. Structurally (Obr. 6.11), F1 is built from alternating α and β subunits around a central γ stalk, plus a δ subunit anchoring a peripheral b2 stalk that runs down to the membrane-embedded 'a' subunit of F0, with ε sitting near the F1/F0 junction. Quantitatively, transferring 6 protons across the inner mitochondrial membrane corresponds to forming approximately 3 ATP; transferring 4 protons, approximately 2 ATP (Obr. 6.10 shows this directly: '6H+ (nebo 4H+)' feeding F1, yielding '3H2O+3ATP nebo (2H2O+2ATP)' from '3ADP+3P nebo 2ADP+2P'). This gives the overall summary equation for NADH oxidation: NADH + H+ + 1/2 O2 + 3 ADP + 3 Pi → NAD+ + 3 ATP + 4 H2O.",
    cn: "由复合物I/III（来自NADH）或单独由复合物III（来自琥珀酸）建立的跨膜质子梯度，是主要供复合物V（图6.6、6.10、6.11）使用的能量来源——与复合物I–IV不同，它不是氧化还原复合物，而是磷酸化复合物，即ATP合酶。在五个复合物中，唯独在这里质子是顺着浓度梯度移动的，即从胞质侧返回基质，重新拉平质子浓度差；这一移动与ATP的生成相偶联：ADP + Pi → ATP + H2O，ΔG0' = +30.5 kJ/mol。教材对机制的描述是：ATP合酶F1亚基中的活性位点促成ADP与磷酸之间成键，但生成的ATP仍然结合在该活性位点上；质子经F0亚基的通过会改变活性位点的构象，使新生成的ATP得以从F1亚基释放，循环得以重复。从结构上看（图6.11），F1由围绕中央γ轴交替排列的α和β亚基构成，另有一个δ亚基锚定外周的b2「柄」，向下连接到F0中嵌入膜内的a亚基，ε则位于F1/F0交界处附近。从数量关系看，6个质子跨内线粒体膜转运对应生成约3个ATP；4个质子对应生成约2个ATP（图6.10直接展示了这一点：「6H+（或4H+）」进入F1，由「3ADP+3P或2ADP+2P」生成「3H2O+3ATP或(2H2O+2ATP)」）。由此得到NADH氧化的总反应式：NADH + H+ + 1/2 O2 + 3 ADP + 3 Pi → NAD+ + 3 ATP + 4 H2O。"
  },
  points: [
    { cz: "komplex V = ATP-synthasa; NENÍ oxidoredukční", en: "By catalytic function, Complex V can be called ATP-SYNTHASE. UNLIKE all the preceding complexes, it is NOT an oxidoreduction complex but a PHOSPHORYLATION complex — the transmembrane proton gradient built by NADH- and succinate-linked electron transport is its main energy source.", cn: "按催化功能，复合物V可称为ATP合酶。与前面所有复合物不同，它不是氧化还原复合物，而是磷酸化复合物——由NADH和琥珀酸相关电子传递所建立的跨膜质子梯度是其主要能量来源。" },
    { cz: "H⁺ pohyb PO směru gradientu (cytosol→matrix); ADP+Pi→ATP+H2O, ΔG⁰'=+30,5 kJ/mol", en: "Here, uniquely, H+ moves IN THE DIRECTION of the concentration gradient — from the cytosolic side of the membrane INTO the matrix — again equalizing the proton difference. This process is coupled to ATP formation: ADP + Pi → ATP + H2O, ΔG0' = +30.5 kJ·mol-1.", cn: "唯独在这里，H+顺着浓度梯度移动——从膜的胞质侧进入基质——再次拉平质子浓度差。这一过程与ATP的生成相偶联：ADP + Pi → ATP + H2O，ΔG0' = +30.5 kJ·mol-1。" },
    { cz: "mechanismus: ATP zůstává vázán na F1, H⁺ přes F0 mění konformaci → uvolnění ATP", en: "The book's explanation of the mechanism: the active site in the F1 subunit leads to formation of the bond between ADP and phosphate, but per this hypothesis the resulting ATP STAYS BOUND at the active site. Passage of protons through the F0 subunit changes the active site's CONFORMATION, so the formed ATP can be RELEASED from F1, and the cycle repeats.", cn: "教材对机制的解释是：F1亚基中的活性位点促成ADP与磷酸之间成键，但按此假说，生成的ATP仍结合在活性位点上。质子经F0亚基通过会改变活性位点的构象，使已生成的ATP得以从F1释放，循环随之重复。" },
    { cz: "Obr. 6.10 — 6H⁺(nebo 4H⁺) → 3ATP (nebo 2ATP)", en: "OBR. 6.10 draws Complexes II, III, I, IV and V across the membrane (same unusual II-III-I-IV ordering as Obr. 6.9), with dashed proton-circuit lines explicitly summing Complex III's 4H+ plus Complex I's 2H+ into '6H+ nebo 4H+' feeding into F1, next to '3H2O+3ATP nebo (2H2O+2ATP)' and '3ADP+3P' / '2ADP+2P' — i.e. the figure directly shows 6 protons paired with 3 ATP, or 4 protons paired with 2 ATP.", cn: "图6.10把复合物II、III、I、IV、V依次画在膜上（与图6.9相同的II-III-I-IV顺序），用虚线质子回路明确地把复合物III的4H+与复合物I的2H+相加，得到进入F1的「6H+或4H+」，旁边标注「3H2O+3ATP或(2H2O+2ATP)」以及「3ADP+3P」/「2ADP+2P」——也就是说，图中直接把6个质子与3个ATP对应，4个质子与2个ATP对应。" },
    { cz: "Obr. 6.11 — F1 (α3β3+δ+γ+ε), F0 (a + b2)", en: "OBR. 6.11 ('Struktura ATP-synthasy') shows F1 as a headpiece of alternating α and β subunits arranged around a central γ stalk, with a δ subunit sitting alongside and anchoring the peripheral 'b2' stalk that runs down through the membrane to the 'a' subunit of F0; ε sits near the F1/F0 junction where γ enters the membrane. The caption itself lists only F0, F1, α, β, γ, δ, ε, a, b2 as labelled subunits — no separate 'c' ring is named in this figure's own caption.", cn: "图6.11（「ATP合酶的结构」）显示F1为一个由α和β亚基围绕中央γ轴交替排列组成的头部结构，旁边有一个δ亚基锚定外周的「b2」柄，向下穿过膜连接到F0的「a」亚基；ε位于γ进入膜处、F1/F0交界附近。该图自身的图注只列出了F0、F1、α、β、γ、δ、ε、a、b2这些标注的亚基——图注中并未单独命名「c」环。" },
    { cz: "6 H⁺ → cca 3 ATP; 4 H⁺ → cca 2 ATP", en: "QUANTITATIVE relationship stated directly in prose: according to current views on aerobic phosphorylation, transfer of 6 PROTONS across the inner mitochondrial membrane corresponds to formation of APPROXIMATELY 3 ATP; transfer of 4 protons, formation of about 2 ATP.", cn: "正文直接给出的数量关系：根据目前对有氧磷酸化的认识，6个质子跨内线粒体膜转运对应生成约3个ATP；4个质子转运对应生成约2个ATP。" },
    { cz: "NADH + H⁺ + 1/2 O2 + 3 ADP + 3 Pi → NAD⁺ + 3 ATP + 4 H2O", en: "This gives the OVERALL summary equation for oxidative phosphorylation coupled to NADH oxidation: NADH + H+ + 1/2 O2 + 3 ADP + 3 Pi → NAD+ + 3 ATP + 4 H2O.", cn: "由此得到NADH氧化偶联氧化磷酸化的总反应式：NADH + H+ + 1/2 O2 + 3 ADP + 3 Pi → NAD+ + 3 ATP + 4 H2O。" },
    { cz: "orientační pojem: poměr protonů na ATP (mimo text knihy)", en: "As a general orientation note (not the book's own terminology): both ratios reduce to the same 2 protons per ATP (6÷3 = 4÷2 = 2) — this 3-ATP-per-NADH vs 2-ATP-per-succinate relationship is what other textbooks commonly call the 'P/O ratio.'", cn: "作为一般性说明（并非教材本身使用的术语）：两个比例换算后都是每生成1个ATP消耗2个质子（6÷3=4÷2=2）——这种「每NADH产3个ATP、每琥珀酸产2个ATP」的关系，在其他教材中通常被称为「P/O比值」。" }
  ],
  terms: [
    { cz: "ATP-synthasa (komplex V)", en: "ATP synthase (Complex V)", cn: "ATP合酶（复合物V）", def_en: "The phosphorylation complex (not a redox complex) that uses the proton gradient built by Complexes I/III or III alone to synthesise ATP from ADP and Pi as protons flow back into the matrix.", def_cn: "利用复合物I/III或单独复合物III所建立的质子梯度、在质子回流基质的过程中由ADP和Pi合成ATP的磷酸化复合物（非氧化还原复合物）。" },
    { cz: "F1 podjednotka", en: "F1 subunit", cn: "F1亚基", def_en: "The catalytic headpiece of ATP synthase, built from alternating α/β subunits around a central γ stalk plus δ and ε, where the ADP+Pi→ATP bond forms.", def_cn: "ATP合酶的催化头部，由围绕中央γ轴交替排列的α/β亚基以及δ、ε亚基组成，ADP+Pi→ATP的成键在此发生。" },
    { cz: "F0 podjednotka", en: "F0 subunit", cn: "F0亚基", def_en: "The membrane-embedded portion of ATP synthase (subunit a plus the peripheral b2 stalk in this figure's labelling) through which proton passage changes F1's active-site conformation.", def_cn: "ATP合酶嵌入膜内的部分（在本图标注中为a亚基加外周b2柄），质子经此通过会改变F1活性位点的构象。" },
    { cz: "ΔG⁰' ATP hydrolýzy/syntézy (+30,5 kJ/mol)", en: "ΔG0' of ATP synthesis (+30.5 kJ/mol)", cn: "ATP合成的ΔG0'（+30.5 kJ/mol）", def_en: "The standard free-energy change the book gives for ADP + Pi → ATP + H2O — a positive (energy-requiring) value, consistent with the reaction needing the proton-motive force to proceed.", def_cn: "教材给出的ADP + Pi → ATP + H2O反应的标准自由能变化——为正值（需要能量），与该反应需要质子驱动力才能进行相符。" },
    { cz: "konformační změna aktivního místa (vazba–uvolnění ATP)", en: "conformational change of the active site (ATP binding/release)", cn: "活性位点的构象变化（ATP的结合与释放）", def_en: "The book's mechanism for ATP release: proton flow through F0 alters F1's active-site shape, releasing ATP that was already formed but had remained bound.", def_cn: "教材对ATP释放机制的描述：质子经F0流动会改变F1活性位点的形状，从而释放已经生成但此前一直结合在原位的ATP。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What fundamentally distinguishes Complex V from Complexes I through IV?",
      q_cn: "复合物V与复合物I至IV在根本上有何不同？",
      options: [
        "Complex V is not an oxidoreduction complex but a phosphorylation complex, and protons move WITH the gradient (cytosol to matrix) rather than being transferred against it",
        "Complex V is an oxidoreduction complex like the four before it, only much slower, which is why it and not the electron transfer sets the pace at which the whole chain runs",
        "Complex V works only once oxygen runs out, taking over from Complexes I to IV the phosphorylation they carry out while oxygen is still present",
        "Complex V transports electrons but no protons at all, taking them from Complex IV through cytochrome c and handing them on to oxygen in the matrix"
      ],
      answer: 0,
      optionRefs: { 3: "6-2-4-4" },
      optionNotes: {
        1: { en: "The book's own words are that Complex V is NOT an oxidoreduction complex but a phosphorylation one. The difference is in kind, not in speed, and no rate comparison between the complexes is made anywhere.", cn: "教材的原话是 Complex V 不是 oxidoreduction 复合体，而是 phosphorylation 复合体。区别在于性质不同，不是快慢不同，而且教材从没在各复合体之间比较过速率。" },
        2: { en: "The proton gradient Complex V runs on is built by NADH- and succinate-linked electron transport, which needs oxygen as its final acceptor. Take the oxygen away and the gradient goes with it; there is no anaerobic hand-over.", cn: "Complex V 靠的质子梯度，是由 NADH 和 succinate 驱动的电子传递建立起来的，而这需要氧作为最终受体。把氧拿走，梯度也就没了；不存在什么缺氧时的接手。" },
        3: { en: "Complex V moves protons and nothing else. The chain's last electrons go to oxygen at Complex IV, delivered there by mobile cytochrome c — by the time protons reach F0, the electron transfer is already finished.", cn: "Complex V 只搬质子，别的都不搬。这条链最后的电子在 Complex IV 交给氧，由可移动的 cytochrome c 送过去——质子走到 F0 的时候，电子传递早已结束。" }
      },
      why_en: "The book explicitly states Complex V 'není oxidoredukční, ale fosforylační' (is not an oxidoreduction complex, but a phosphorylation one), and that unlike all preceding complexes, protons here move IN THE DIRECTION of the concentration gradient, from cytosol back into the matrix, coupled to ATP formation.",
      why_cn: "教材明确指出复合物V「不是氧化还原复合物，而是磷酸化复合物」，并且与前面所有复合物不同，这里的质子是顺着浓度梯度移动的，从胞质返回基质，并与ATP的生成相偶联。"
    },
    {
      type: "mcq",
      q_en: "Per the book's account of the ATP-formation mechanism, what specifically triggers release of the already-formed ATP from the F1 active site?",
      q_cn: "根据教材对ATP生成机制的描述，究竟是什么触发了已生成的ATP从F1活性位点释放？",
      options: [
        "A rise in matrix temperature, which loosens the α and β subunits of the F1 headpiece enough to let the ATP go",
        "The passage of protons through the F0 subunit, which changes the active site's conformation",
        "The binding of a second ADP molecule at the neighbouring β subunit",
        "Hydrolysis of the ATP back to ADP and Pi, worth 30.5 kJ·mol⁻¹"
      ],
      answer: 1,
      optionRefs: { 0: "6-1" },
      optionNotes: {
        0: { en: "Nothing in the mechanism turns on temperature. Living systems cannot tolerate temperature gradients in the first place — that is exactly why Gibbs energy, defined at constant temperature and pressure, is the state variable used throughout this chapter.", cn: "这套机制和温度没有任何关系。生命系统本来就承受不了温度梯度——这正是本章自始至终用 Gibbs 自由能（定义在恒温恒压下）作为状态函数的原因。" },
        2: { en: "The conformational change comes from proton flow through F0, not from a second substrate arriving. ADP and Pi are what the F1 site condenses into ATP; they do not displace the finished product.", cn: "构象变化来自质子穿过 F0，而不是又来了一个底物。ADP 和 Pi 是 F1 活性位点缩合成 ATP 的原料，它们并不会把做好的产物挤出去。" },
        3: { en: "Hydrolysis would undo the work just done. The bond between ADP and phosphate is formed at the F1 site with ΔG⁰′ = +30.5 kJ·mol⁻¹, and the difficulty the mechanism solves is releasing the finished ATP, not breaking it apart again.", cn: "水解等于把刚做的功又还回去。ADP 和磷酸之间的键是在 F1 活性位点上形成的，ΔG⁰′ = +30.5 kJ·mol⁻¹；这套机制要解决的难题是把做好的 ATP 放出来，而不是再把它拆掉。" }
      },
      why_en: "The book states that ATP formed at the F1 active site initially stays bound; it is specifically the passage of protons THROUGH F0 that changes the active site's conformation, allowing the ATP to be released so the cycle can repeat.",
      why_cn: "教材指出，在F1活性位点生成的ATP最初仍保持结合状态；正是质子经F0通过这一过程改变了活性位点的构象，才使ATP得以释放，循环得以重复。"
    },
    {
      type: "short",
      q_en: "According to Obr. 6.10 and the accompanying text, what ATP yield corresponds to 6 protons crossing the membrane, and what yield corresponds to 4 protons?",
      q_cn: "根据图6.10及配套正文，6个质子跨膜对应多少ATP产量？4个质子又对应多少？",
      accept: ["3 ATP", "2 ATP", "6", "4", "approximately", "přibližně", "约"],
      answer_en: "6 protons crossing the inner mitochondrial membrane correspond to formation of approximately 3 ATP (matching the NADH-fed pathway, I+III+IV); 4 protons correspond to approximately 2 ATP (matching the succinate-fed pathway, II+III+IV).",
      answer_cn: "6个质子跨内线粒体膜对应生成约3个ATP（对应NADH供电子的I+III+IV途径）；4个质子对应生成约2个ATP（对应琥珀酸供电子的II+III+IV途径）。"
    },
    {
      type: "mcq",
      q_en: "Which subunits does Obr. 6.11's own caption list as the labelled parts of ATP synthase?",
      q_cn: "图6.11自身的图注列出了ATP合酶的哪些标注亚基？",
      options: ["F0, F1, α, β, γ, δ, ε, a, b2", "F0, F1, α, β, γ, c-ring only", "Only the α and β subunits, with no stalk components named", "F1, F2, F3 and a rotor ring"],
      answer: 0,
      optionRefs: { 1: "6-2-4-4" },
      optionNotes: {
        1: { en: "A c-ring is a standard feature of ATP synthase drawings elsewhere, but this figure's caption names no separate c subunit at all. The F0 parts it does list are a and b2.", cn: "c 环在别处的 ATP synthase 图里是标配，但这张图的图注根本没有单独标出 c 亚基。它列出的 F0 部件只有 a 和 b2。" },
        2: { en: "α and β are named, but so is the whole stalk: γ running up the centre of the headpiece, δ alongside it anchoring the peripheral b2 stalk, and ε sitting where γ enters the membrane.", cn: "α 和 β 确实被列出，但整根柄也被列出了：γ 从头部中央穿过，δ 在旁边把外周的 b2 柄锚住，ε 位于 γ 进入膜的那个位置。" },
        3: { en: "There is no F2 or F3 anywhere in this complex. ATP synthase has exactly two parts — F1 as the headpiece on the matrix side and F0 embedded in the membrane — and the caption lists both.", cn: "这个复合体里根本没有 F2 或 F3。ATP synthase 只有两个部分——基质侧的头部 F1 和嵌在膜里的 F0——图注把两个都列了。" }
      },
      why_en: "The caption reads 'Struktura ATP-synthasy (F0, F1, α, β, γ, δ, ε, a, b2 – podjednotky ATP-synthasy)' — these nine labels are exactly what the book itself names; no separate 'c' subunit or c-ring is labelled in this particular figure's caption, even though small membrane-embedded structures are visible in the F0 region of the drawing.",
      why_cn: "图注写的是「ATP合酶的结构（F0、F1、α、β、γ、δ、ε、a、b2——ATP合酶的亚基）」——这九个标签正是教材自己命名的内容；尽管图中F0区域可见一些嵌入膜内的小结构，但这张图的图注并未单独标出「c」亚基或c环。"
    }
  ],
  oral: {
    q_en: "Explain how ATP synthase differs from the other four respiratory complexes, describe its proposed mechanism, and state the two ATP yields tied to the 6-proton and 4-proton pathways.",
    q_cn: "请解释ATP合酶与其他四个呼吸链复合物有何不同，描述其提出的作用机制，并说出与6质子和4质子两条途径分别对应的ATP产量。",
    model_en: "The proton gradient built up across the inner mitochondrial membrane by the transfer of electrons from NADH or succinate is, according to the book, predominantly put to use in Complex V, and the first thing worth saying about Complex V is what it is not: unlike Complexes I through IV, it is not an oxidoreduction complex at all, but a phosphorylation complex, better known by its catalytic function as ATP synthase. Here, uniquely in the whole chain, protons move with the concentration gradient rather than against it, flowing from the cytosolic side of the membrane back into the matrix, which re-equalises the proton difference the earlier complexes built up; and this downhill proton movement is tightly coupled to the formation of ATP from ADP and inorganic phosphate, a reaction with a positive standard free energy change of about thirty point five kilojoules per mole, meaning it needs exactly this kind of energy input to proceed. As for how that coupling actually works, the book's explanation is that the active site sitting in the F1 subunit is where the chemistry happens: it brings ADP and phosphate together to form the bond that makes ATP, but critically, that newly formed ATP does not simply drift away — it stays bound to the active site. What releases it is the passage of protons through the F0 subunit, which changes the shape, the conformation, of that active site, and it's this conformational change that lets the ATP go, freeing the site to bind ADP and phosphate again and repeat the cycle. Structurally, Obr. 6.11 shows the F1 headpiece as a ring of alternating alpha and beta subunits surrounding a central gamma stalk, with a delta subunit anchoring a peripheral stalk, labelled b2, that runs down through the membrane to the a subunit sitting in F0, and an epsilon subunit near the point where the central stalk enters the membrane. Quantitatively, the book is explicit: transferring six protons across the membrane corresponds to the formation of approximately three ATP, while transferring only four protons yields about two ATP — and Obr. 6.10 draws this directly, showing six or four protons feeding into F1 and coming out the other side as three ATP with three water, or two ATP with two water. Putting the whole NADH-fed pathway together into one equation gives NADH plus a proton plus a half molecule of oxygen plus three ADP plus three inorganic phosphate yielding NAD-plus, three ATP, and four water — the complete bottom line of everything Complexes I, III, IV and now V accomplish together.",
    checklist: [
      "Stated Complex V is a phosphorylation complex, not a redox complex",
      "Explained protons move WITH the gradient here (cytosol to matrix)",
      "Gave the ADP+Pi to ATP+H2O equation with its positive ΔG0'",
      "Described the mechanism: ATP forms and stays bound at F1; H+ through F0 changes conformation and releases it",
      "Named F1's subunits (alternating α/β around γ, plus δ) and F0's (a, peripheral b2 stalk)",
      "Gave both yields: 6H+ to ~3 ATP, and 4H+ to ~2 ATP",
      "Stated the overall NADH-oxidation summary equation with 3 ADP/3 ATP/4 H2O"
    ]
  }
},

{
  id: "6-3-1",
  book: "cz",
  topicKey: "oxygen-binding-proteins",
  chapter: 6,
  section: "6.3",
  czTitle: "Porfyrinové proteiny — struktura a mnohostrannost (Tab. 6.4)",
  enTitle: "Porphyrin proteins — structure and biological versatility (Table 6.4)",
  cnTitle: "卟啉蛋白——结构与生物学多样性（表6.4）",
  pages: [146],
  coverage: "full",
  coverageNote: "The full '6.3 Porfyrinové proteiny' opening on p.146 read directly from the scan: the porphyrin structure/pigment paragraph and the complete 9-row Tab. 6.4 (zoomed to confirm every cell, including the valence-change '+'/'–' column), ending exactly where 'Důležitým prekurzorem porfyrinů...' begins (covered by the next node).",
  cnNote: { topic: null, title: "笔记十二「维生素和辅酶」p.77——标题可能对应本节（卟啉蛋白）或第3章辅酶部分，HANDOFF.md 明确标注两种可能性均未核实，本节未强行匹配任何笔记编号", status: "pending" },
  mustKnow: { en: "The same ring, a porphyrin, does two completely different jobs depending on one detail: whether the metal it holds changes oxidation state. Where it does not (hemoglobin's Fe²⁺, chlorophyll's Mg), the porphyrin binds or absorbs something reversibly; where it does (peroxidases, catalase, the cytochromes, oxygenases — 7 of the table's 9 entries), it is doing real redox chemistry. One scaffold, two entirely different uses, decided by that single fact.", cn: "同一个环——卟啉——能干两件完全不同的事，取决于一个细节：它抓着的金属离子会不会改变价态。不变价的（血红蛋白的 Fe²⁺、叶绿素的 Mg），卟啉是在可逆地结合或吸收某样东西；变价的（过氧化物酶、过氧化氢酶、各种细胞色素、加氧酶——表中 9 个例子里的 7 个），卟啉在做真正的氧化还原化学。同一套骨架，两种截然不同的用法，由这一个事实决定。" },
  summary: {
    en: "A porphyrin is a relatively complex structure made of FOUR pyrrole heterocyclic rings mutually joined by FOUR methine bridges — already touched on in ch.3.2 (cytochrome-type coenzymes) and ch.6.2 (the respiratory chain). Its rich system of conjugated double bonds means porphyrins absorb visible light, making them coloured pigments; nature has reused the porphyrin molecule for many different biological roles, documented here by Tab. 6.4's nine examples. Two entries — hemoglobin (O2 transport via heme Fe2+) and chlorophyll (light-to-chemical energy conversion via a Mg-containing porphyrin) — show NO valence change at their metal centre. The other seven — plant and animal peroxidase, catalase, cytochrome oxidase (heme plus Cu ions), cytochrome c, cytochrome b, and oxygenases (introducing O2 into substrates) — all involve a valence change, i.e. genuine redox chemistry at the metal centre.",
    cn: "卟啉是一种相对复杂的结构，由四个吡咯杂环通过四个次甲基桥相互连接而成——第3.2节（细胞色素类辅酶）和第6.2节（呼吸链）中都已提到过它。其丰富的共轭双键体系意味着卟啉能吸收可见光，因而成为有色色素；自然界把卟啉分子反复利用于多种不同的生物学功能，表6.4的九个实例对此作了说明。其中两项——血红蛋白（经血红素Fe2+运输O2）和叶绿素（经含Mg卟啉将光能转化为化学能）——其金属中心都没有发生价态变化。其余七项——植物和动物过氧化物酶、过氧化氢酶、细胞色素氧化酶（血红素加铜离子）、细胞色素c、细胞色素b，以及加氧酶（把O2引入底物）——都涉及价态变化，即金属中心确实发生了氧化还原反应。"
  },
  points: [
    { cz: "porfyrin = 4 pyrolová jádra + 4 methinové můstky", en: "A PORPHYRIN is a relatively complex structure consisting of FOUR PYRROLE heterocyclic rings mutually connected by FOUR METHINE (=CH–) BRIDGES. Porphyrins were already touched on in ch. 3.2 (cytochrome-type coenzymes) and ch. 6.2 (the respiratory/respiratory chain).", cn: "卟啉是一种相对复杂的结构，由四个吡咯杂环通过四个次甲基（=CH–）桥相互连接而成。卟啉在第3.2节（细胞色素类辅酶）和第6.2节（呼吸链）中都已提到过。" },
    { cz: "konjugované vazby → absorpce viditelného světla → pigmenty", en: "The rich system of CONJUGATED DOUBLE BONDS predetermines absorption in the VISIBLE part of the electromagnetic spectrum. These substances are COLOURED — they are PIGMENTS. Nature has used the porphyrin molecule MULTIPLE TIMES [for multiple different purposes], so these are biologically significant substances.", cn: "丰富的共轭双键体系决定了其在电磁波谱可见光部分的吸收。这些物质是有颜色的——它们是色素。自然界多次利用（即用于多种不同目的）卟啉分子，因此它们是具有生物学重要意义的物质。" },
    { cz: "Tab. 6.4 řádek 1: hemoglobin — transport O2, hem (Fe2+), beze změny valence", en: "TAB. 6.4, row 1: HEMOGLOBIN — function: TRANSPORT of O2; prosthetic group: heme (Fe2+); valence change: NONE (–). Binding O2 is not itself a redox event, so the iron stays Fe2+.", cn: "表6.4第1行：血红蛋白——功能：运输O2；辅基：血红素（Fe2+）；价态变化：无（–）。结合O2本身并非氧化还原事件，因此铁始终保持Fe2+。" },
    { cz: "Tab. 6.4 ř. 2–4: peroxidasy, katalasa (+valence)", en: "TAB. 6.4, rows 2-4: PLANT PEROXIDASE and ANIMAL PEROXIDASE (both: oxidation using H2O2, heme Fe2+/Fe3+, valence change +) and CATALASE (decomposition 2 H2O2 → 2 H2O + O2, heme, valence change +) — all three DO show a valence change at the heme iron, unlike hemoglobin.", cn: "表6.4第2–4行：植物过氧化物酶和动物过氧化物酶（均为：借助H2O2进行氧化，血红素Fe2+/Fe3+，价态变化+）以及过氧化氢酶（分解2 H2O2→2 H2O+O2，血红素，价态变化+）——这三者的血红素铁都发生价态变化，与血红蛋白不同。" },
    { cz: "Tab. 6.4 ř. 5–7: cytochromoxidasa, cyt c, cyt b (+valence)", en: "TAB. 6.4, rows 5-7: CYTOCHROME OXIDASE (terminal oxidation, the respiratory enzyme; prosthetic group heme PLUS Cu ions; valence change +), CYTOCHROME c and CYTOCHROME b (both: electron transport; heme; valence change +) — these three are the same redox proteins already met in the respiratory-chain nodes, now placed in the wider context of porphyrin diversity.", cn: "表6.4第5–7行：细胞色素氧化酶（末端氧化，呼吸酶；辅基为血红素加铜离子；价态变化+）、细胞色素c和细胞色素b（均为：电子传递；血红素；价态变化+）——这三者正是呼吸链相关节点中已经认识的氧化还原蛋白，此处被放在卟啉多样性这一更广的背景下再次呈现。" },
    { cz: "Tab. 6.4 řádky 8–9: oxygenasy (Fe-porfyrin, +) a chlorofyl (Mg-porfyrin, beze změny)", en: "TAB. 6.4, rows 8-9: OXYGENASES (function: introducing O2 into substrates; prosthetic group Fe2+/Fe3+-porphyrin; valence change +) and CHLOROPHYLL (function: converting light energy to chemical energy; prosthetic group a porphyrin containing an Mg ion; valence change: NONE –) — chlorophyll's Mg centre, like hemoglobin's Fe centre, does not itself cycle through oxidation states during the molecule's primary function.", cn: "表6.4第8–9行：加氧酶（功能：把O2引入底物；辅基为Fe2+/Fe3+-卟啉；价态变化+）和叶绿素（功能：将光能转化为化学能；辅基为含Mg离子的卟啉；价态变化：无–）——叶绿素的Mg中心与血红蛋白的Fe中心一样，在该分子执行其主要功能时，本身并不经历价态循环。" },
    { cz: "vzor: 7 z 9 položek mění valenci (redoxně aktivní), 2 nemění (O2-vazba / světlosběr)", en: "Reading the whole table together: 7 of the 9 entries show a valence change (genuinely redox-active porphyrin proteins: both peroxidases, catalase, cytochrome oxidase, cytochrome c, cytochrome b, oxygenases), while only 2 do NOT (hemoglobin's reversible O2 binding, and chlorophyll's light-energy capture) — a useful structural contrast between porphyrins used for electron/oxygen chemistry versus porphyrins used for binding or light absorption without a redox cycle.", cn: "综观整张表格：9个条目中有7个显示价态变化（真正具有氧化还原活性的卟啉蛋白：两种过氧化物酶、过氧化氢酶、细胞色素氧化酶、细胞色素c、细胞色素b、加氧酶），只有2个没有变化（血红蛋白可逆结合O2，以及叶绿素捕获光能）——这为「用于电子/氧化学反应的卟啉」与「用于结合或吸光而不经历氧化还原循环的卟啉」之间提供了一个有用的结构性对比。" }
  ],
  terms: [
    { cz: "porfyrin", en: "porphyrin", cn: "卟啉", def_en: "A complex structure of 4 pyrrole heterocyclic rings joined by 4 methine bridges, with a conjugated double-bond system that absorbs visible light.", def_cn: "由4个吡咯杂环通过4个次甲基桥连接而成的复杂结构，具有能吸收可见光的共轭双键体系。" },
    { cz: "pyrolové jádro", en: "pyrrole ring", cn: "吡咯环", def_en: "A five-membered nitrogen-containing heterocycle; four of them make up a porphyrin's core skeleton.", def_cn: "含氮的五元杂环；四个这样的环构成卟啉的核心骨架。" },
    { cz: "methinový můstek (=CH–)", en: "methine bridge (=CH–)", cn: "次甲基桥（=CH–）", def_en: "The =CH– linkage connecting adjacent pyrrole rings in most porphyrins (contrast the –CH2– bridges of '-nogen' derivatives, covered in the next node).", def_cn: "大多数卟啉中连接相邻吡咯环的=CH–键（与下一节所述「-原」衍生物的–CH2–桥相对）。" },
    { cz: "hem (Fe2+/Fe3+ prostetická skupina)", en: "heme (Fe2+/Fe3+ prosthetic group)", cn: "血红素（Fe2+/Fe3+辅基）", def_en: "An iron-containing porphyrin prosthetic group; whether its iron changes valence depends on the protein's function (no change in hemoglobin, a change in the peroxidases and cytochromes).", def_cn: "含铁的卟啉辅基；其铁是否发生价态变化取决于所在蛋白质的功能（血红蛋白中不变，过氧化物酶和细胞色素中会变化）。" },
    { cz: "změna valence (redoxní aktivita kovového centra)", en: "valence change (redox activity of the metal centre)", cn: "价态变化（金属中心的氧化还原活性）", def_en: "Tab. 6.4's own criterion distinguishing porphyrin proteins that cycle their metal ion through oxidation states (most entries) from those that do not (hemoglobin, chlorophyll).", def_cn: "表6.4自身用来区分「金属离子经历价态循环」的卟啉蛋白（多数条目）与「不经历」的卟啉蛋白（血红蛋白、叶绿素）的判据。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "How does the book define a porphyrin's basic structure?",
      q_cn: "教材如何定义卟啉的基本结构？",
      options: [
        "Three pyrrole heterocyclic rings connected by two methine bridges",
        "Four pyrrole heterocyclic rings joined directly to one another with no bridging groups at all",
        "One large heterocyclic ring carrying four methine substituents",
        "Four pyrrole heterocyclic rings mutually connected by four methine bridges"
      ],
      answer: 3,
      optionRefs: { 2: "6-3-2" },
      optionNotes: {
        0: { en: "The counts are fixed at four and four. It is that closed, fully conjugated macrocycle of four rings and four bridges that absorbs in the visible part of the spectrum, which is why these substances are coloured and are called pigments.", cn: "两个数目都是四：四个环、四座桥。正是这样一个闭合、完全共轭的大环，才会吸收可见光——这些物质因此是有颜色的，被称为 pigment。" },
        1: { en: "Without the methine bridges there is no conjugated system running round the ring, and it is the rich system of conjugated double bonds that predetermines absorption in the visible and makes porphyrins pigments at all.", cn: "没有 methine 桥，环上就没有贯通的共轭体系；而正是这套丰富的共轭双键决定了它在可见区的吸收，porphyrin 才成其为色素。" },
        2: { en: "A porphyrin is built up from four separate pyrrole heterocycles, not from one large ring. The '-nogen' intermediates of heme synthesis show the same four rings, only joined by -CH2- bridges instead of methine ones.", cn: "Porphyrin 是由四个独立的 pyrrole 杂环搭起来的，不是一个大环。Heme 合成途径上带 '-nogen' 后缀的中间体也是同样的四个环，只不过桥换成了 -CH2- 而不是 methine。" }
      },
      why_en: "The book defines a porphyrin as 'poměrně složitý útvar, který sestává ze čtyř pyrolových heterocyklických kruhů vzájemně spojených čtyřmi methinovými můstky' — four pyrrole heterocyclic rings mutually connected by four methine bridges.",
      why_cn: "教材将卟啉定义为「由四个吡咯杂环通过四个次甲基桥相互连接而成的相对复杂结构」。"
    },
    {
      type: "mcq",
      q_en: "Per Tab. 6.4, which TWO substances are the only ones NOT to show a valence change at their metal centre?",
      q_cn: "根据表6.4，哪两种物质是其金属中心不发生价态变化的仅有例外？",
      options: [
        "Catalase and hemoglobin",
        "Chlorophyll and cytochrome oxidase",
        "Hemoglobin and chlorophyll",
        "The two peroxidases, plant and animal"
      ],
      answer: 2,
      optionRefs: { 1: "6-2-4-4" },
      optionNotes: {
        0: { en: "Half right. Hemoglobin is one of the two, but catalase — which decomposes 2 H2O2 into 2 H2O + O2 — is marked with a valence change, exactly like the two peroxidases sitting beside it in the table.", cn: "对了一半。Hemoglobin 确实是那两个之一，但 catalase（把 2 H2O2 分解为 2 H2O + O2）在表里是标了价态变化的，和紧挨着它的两个 peroxidase 一样。" },
        1: { en: "Half right the other way round. Chlorophyll's Mg centre does not cycle, but cytochrome oxidase certainly does: it is the terminal respiratory enzyme, its prosthetic group is heme plus Cu ions, and Tab. 6.4 marks it +.", cn: "反过来也对了一半。Chlorophyll 的 Mg 中心确实不循环，但 cytochrome oxidase 是循环的：它是末端呼吸酶，辅基是 heme 加铜离子，Tab. 6.4 给它标的是 +。" },
        3: { en: "Both peroxidases, plant and animal alike, oxidise their substrates using H2O2 through a heme Fe2+/Fe3+ couple, so both are marked +. Seven of the table's nine entries are; only two are not.", cn: "两个 peroxidase（植物的和动物的）都是通过 heme 的 Fe2+/Fe3+ 对、用 H2O2 氧化底物，所以都标 +。表里九项中有七项如此，只有两项不是。" }
      },
      why_en: "Tab. 6.4 marks 'Změna valence' as '–' (no change) only for hemoglobin (heme Fe2+, O2 transport) and chlorophyll (Mg-containing porphyrin, light-to-chemical energy conversion); all seven other entries are marked '+'.",
      why_cn: "表6.4中「价态变化」一栏标为「–」（无变化）的只有血红蛋白（血红素Fe2+，运输O2）和叶绿素（含Mg卟啉，光能转化为化学能）；其余七项均标为「+」。"
    },
    {
      type: "short",
      q_en: "According to Tab. 6.4, what distinguishes cytochrome oxidase's prosthetic group from that of cytochrome c or cytochrome b?",
      q_cn: "根据表6.4，细胞色素氧化酶的辅基与细胞色素c或细胞色素b的辅基有何不同？",
      accept: ["copper", "Cu", "heme + Cu", "铜", "血红素+铜"],
      answer_en: "Cytochrome oxidase's prosthetic group is listed as 'hem + ionty Cu' (heme plus copper ions), while cytochrome c and cytochrome b are each listed as simply 'hem' (heme) with no copper.",
      answer_cn: "细胞色素氧化酶的辅基列为「血红素+铜离子」，而细胞色素c和细胞色素b的辅基则各自仅列为「血红素」，不含铜。"
    }
  ],
  oral: {
    q_en: "Define what a porphyrin is, explain why porphyrins are coloured, and use Table 6.4 to illustrate the range of biological roles they serve.",
    q_cn: "请定义什么是卟啉，解释卟啉为何有颜色，并借助表6.4说明卟啉所承担的各种生物学功能范围。",
    model_en: "A porphyrin is described as a relatively complex structure built from four pyrrole heterocyclic rings, mutually joined together by four methine bridges — a scaffold the book has actually already touched on twice before this point, once among the cytochrome-type coenzymes back in chapter three, and once in the respiratory chain material just covered in this chapter. What makes porphyrins visually distinctive is their rich system of conjugated double bonds, which predetermines that they absorb light in the visible part of the spectrum; that's exactly why these substances are coloured, and the book calls them pigments outright. And nature, rather than inventing a new scaffold for every job, has reused this one porphyrin molecule again and again for different biological purposes, which is precisely what table six point four sets out to document across nine examples. Hemoglobin sits at one end, using an iron-containing heme to transport oxygen, and critically, that iron never changes its valence in the process, it stays ferrous throughout, because binding oxygen reversibly is not a redox event. At the other extreme sit the genuinely redox-active porphyrin proteins, where the metal centre does cycle between oxidation states: the plant and animal peroxidases, which oxidise substrates using hydrogen peroxide; catalase, which disproportionates two molecules of hydrogen peroxide into water and oxygen; cytochrome oxidase, whose prosthetic group is notably heme plus copper ions rather than heme alone, reflecting its role as the terminal respiratory enzyme; cytochromes c and b, simple heme proteins dedicated to electron transport; and the oxygenases, which use an iron-porphyrin to insert oxygen directly into substrate molecules. Chlorophyll closes the table, and it's worth noticing it belongs with hemoglobin rather than with the redox-active majority: its porphyrin carries a magnesium ion instead of iron, and its job is to convert light energy into chemical energy, again without that metal centre itself changing valence. So the table's real lesson, read as a whole, is that the same four-ring, four-bridge porphyrin scaffold gets reused for two quite different kinds of biological job — sometimes as a genuine redox centre that shuttles electrons or activates oxygen, and sometimes simply as a stable binding site or light-absorbing antenna where the metal's oxidation state never has to move at all.",
    checklist: [
      "Gave the structural definition: 4 pyrrole rings joined by 4 methine bridges",
      "Explained conjugated double bonds cause visible-light absorption, making porphyrins pigments",
      "Named at least 5 of Table 6.4's 9 entries with their functions",
      "Identified hemoglobin and chlorophyll as the two entries with NO valence change",
      "Noted cytochrome oxidase's prosthetic group is heme plus copper, unlike cytochrome c/b",
      "Articulated the general lesson: same scaffold reused for redox-active vs non-redox roles"
    ]
  }
},

{
  id: "6-3-2",
  book: "cz",
  topicKey: "amino-acid-derived-molecules",
  chapter: 6,
  section: "6.3",
  czTitle: "Biosyntéza hemu (Obr. 6.12)",
  enTitle: "Biosynthesis of heme (Fig. 6.12)",
  cnTitle: "血红素的生物合成（图6.12）",
  pages: [146, 147],
  coverage: "full",
  coverageNote: "p.146's closing paragraph read in full and re-zoomed twice for exact character-level precision (see the flagged discrepancy below). p.147 read in full through the naming-rule paragraphs ('Deriváty s předponou proto-...', 'Deriváty s příponou -nogen...', 'Analogické cesty...') and the complete Obr. 6.12 pathway figure, traced structure-by-structure and cross-checked step-by-step against its own labelled arrows (glycine + succinyl-CoA → step 1 losing 2 HSCoA/2 CO2 → 2x δ-aminolevulate → losing 2 H2O → porphobilinogen → + 3x more porphobilinogen, losing 4 NH3 → linear tetrapyrrole → cyclization → uroporphyrinogen III → losing 4 CO2 → coproporphyrinogen III → oxidation, losing 2 CO2 → protoporphyrin IX → + Fe2+ → heme), stopping at the 'Degradace porfyrinů' heading (covered by the next node). FLAG (book-internal inconsistency, per the honesty rules): on p.146 the running prose names the key regulatory enzyme 'Příslušný enzym 6-aminolevulátsynthasa' — using the DIGIT 6, in plain (non-bold) type. This is almost certainly a typesetting error for 'δ-aminolevulátsynthasa' (delta), because (a) the immediately preceding clause, in bold, correctly prints 'δ-aminolevulát' with a genuine Greek delta glyph, visibly distinct on close zoom from both the digit '6' used for the enzyme name and the real digit '6' two words later in 'obr. 6.12'; and (b) Obr. 6.12 itself glosses the same precursor as 'δ-aminolevulát (5-aminolevulát)' — its own alternative name uses '5-', never '6-'. This content follows the delta reading (δ-aminolevulate synthase) as overwhelmingly the intended one, and flags the stray '6-' rather than silently reproducing it as fact.",
  cnNote: { topic: null, title: "笔记十二「维生素和辅酶」p.77——标题可能对应本节或第3章辅酶部分，HANDOFF.md 标注未核实，本节未强行匹配", status: "pending" },
  mustKnow: { en: "Heme is built from the same two starting materials that also feed the citrate cycle and glycine metabolism — succinyl-CoA and glycine — so its synthesis is not an isolated pathway but a side branch off metabolism the cell is already running. And the naming itself carries information: '-nogen' intermediates are joined by -CH2- bridges (more reduced), while the finished porphyrins (protoporphyrin, heme) have =CH- bridges instead — so a molecule's own name tells you how far along the pathway it is.", cn: "血红素是从同样喂给柠檬酸循环和甘氨酸代谢的两种原料——琥珀酰辅酶A和甘氨酸——造出来的，所以它的合成不是一条孤立的通路，而是细胞本来就在运转的代谢分出的一条支路。而名字本身就带着信息：带『-nogen』后缀的中间体，四个吡咯环之间是 -CH2- 桥（更还原）；到了成熟的卟啉（原卟啉、血红素），桥变成了 =CH-——所以光看一个分子的名字，就能知道它走到通路的哪一步了。" },
  summary: {
    en: "δ-Aminolevulinate (ALA — the book also glosses it as '5-aminolevulate') is the key porphyrin precursor, formed from succinyl-CoA (the citrate-cycle intermediate, ch. 6.2.2) plus glycine, with loss of HSCoA and CO2. The enzyme forming it, ALA SYNTHASE, is the KEY REGULATORY POINT for porphyrin synthesis (the book's own text prints this enzyme's name with a stray digit '6-' instead of 'δ-' in one place — almost certainly a typo, flagged above). Two ALA molecules condense (losing 2 H2O) to the pyrrole derivative PORPHOBILINOGEN; four porphobilinogens then condense (losing 4 NH3) into a LINEAR TETRAPYRROLE, which cyclizes to UROPORPHYRINOGEN III (an 'uro-' derivative, still carrying 8 carboxyl groups). Losing 4 CO2 gives COPROPORPHYRINOGEN III; a further oxidation losing 2 CO2 gives PROTOPORPHYRIN IX (a 'proto-' derivative, by this point mostly decarboxylated, now bearing vinyl groups). Finally, insertion of Fe2+ gives HEME. Two general naming rules close out the section: '-nogen'-suffixed derivatives have their 4 pyrrole rings joined by –CH2– (methylene) bridges, while the others (like protoporphyrin and heme itself) have methine (=CH–) bridges; and analogous biosynthetic pathways lead onward to the molecules of cytochromes, oxidases, oxygenases and chlorophyll.",
    cn: "δ-氨基酮戊酸（ALA，教材也将其注释为「5-氨基酮戊酸」）是关键的卟啉前体，由琥珀酰辅酶A（柠檬酸循环中间产物，第6.2.2节）与甘氨酸生成，同时失去HSCoA和CO2。生成它的酶——δ-氨基酮戊酸合酶——是卟啉合成的关键调控点（教材正文中有一处将该酶名称印成了带有多余数字「6-」而非「δ-」的形式——几乎可以肯定是排版错误，已在上方标注）。两分子ALA缩合（失去2个H2O）生成吡咯衍生物卟胆原；随后四分子卟胆原缩合（失去4个NH3）生成线型四吡咯，后者环化生成尿卟啉原III（一种「尿-」衍生物，仍带有8个羧基）。失去4个CO2生成粪卟啉原III；再经氧化失去2个CO2生成原卟啉IX（一种「原-」衍生物，此时已大部分脱羧，并带有乙烯基）。最后，插入Fe2+生成血红素。本节末尾给出两条通用命名规则：以「-原」为后缀的衍生物，其4个吡咯环由–CH2–（亚甲基）桥连接，而其余的（如原卟啉和血红素本身）则由次甲基（=CH–）桥连接；类似的生物合成途径还通向细胞色素、氧化酶、加氧酶和叶绿素等分子。"
  },
  points: [
    { cz: "δ-aminolevulát ze sukcinyl-CoA + glycinu; δ-aminolevulátsynthasa = klíčová regulace", en: "δ-AMINOLEVULATE (also glossed in Obr. 6.12 as '5-aminolevulate') is formed from SUCCINYL-CoA (ch. 6.2.2) and GLYCINE. The enzyme forming it, δ-AMINOLEVULATE SYNTHASE, is the KEY REGULATORY POINT of porphyrin synthesis. [Note: p.146's prose prints this enzyme name with a stray '6-' instead of 'δ-' in one instance — flagged in this node's coverageNote as almost certainly a typo, since the book elsewhere consistently uses δ/'5-'.]", cn: "δ-氨基酮戊酸（在图6.12中也被注为「5-氨基酮戊酸」）由琥珀酰辅酶A（第6.2.2节）和甘氨酸生成。生成它的酶——δ-氨基酮戊酸合酶——是卟啉合成的关键调控点。[注：第146页正文中有一处将该酶名称误印为带有多余「6-」而非「δ-」——已在本节coverageNote中标注，几乎可以肯定是排版错误，因为教材其他地方均一致使用δ/「5-」。]" },
    { cz: "Obr. 6.12 krok 1: glycin + sukcinyl-CoA → 2x δ-aminolevulát (-2 HSCoA, -2 CO2)", en: "OBR. 6.12, step 1: GLYCINE + SUCCINYL-CoA react (losing 2 HSCoA and 2 CO2) to give TWO molecules of δ-aminolevulate. The figure draws out the full structures: glycine as H2N-CH2-COOH, succinyl-CoA with its terminal -CO-SCoA and -COOH groups.", cn: "图6.12步骤1：甘氨酸+琥珀酰辅酶A反应（失去2个HSCoA和2个CO2），生成两分子δ-氨基酮戊酸。图中画出了完整结构：甘氨酸为H2N-CH2-COOH，琥珀酰辅酶A带有末端的-CO-SCoA和-COOH基团。" },
    { cz: "2x δ-aminolevulát → porfobilinogen (-2 H2O)", en: "TWO molecules of δ-aminolevulate condense, LOSING 2 H2O, to form the pyrrole derivative PORPHOBILINOGEN — drawn in Obr. 6.12 as a pyrrole ring bearing an H2N-CH2- substituent plus COOH/CH2COOH side chains.", cn: "两分子δ-氨基酮戊酸缩合，失去2个H2O，生成吡咯衍生物卟胆原——图6.12中将其画为带有H2N-CH2-取代基以及COOH/CH2COOH侧链的吡咯环。" },
    { cz: "4x porfobilinogen → lineární tetrapyrol (-4 NH3) → uroporfyrinogen III", en: "FOUR porphobilinogens condense (LOSING 4 NH3) to form a LINEAR TETRAPYRROLE — four pyrrole rings joined by –CH2– bridges, each still carrying its COOH/CH2COOH or H2NCH2- side chains. This linear tetrapyrrole then CYCLIZES to UROPORPHYRINOGEN III, a closed macrocycle. Derivatives with the 'uro-' prefix still carry 8 CARBOXYL groups.", cn: "四分子卟胆原缩合（失去4个NH3），生成线型四吡咯——四个吡咯环由–CH2–桥连接，每个环仍带有各自的COOH/CH2COOH或H2NCH2-侧链。该线型四吡咯随后环化生成尿卟啉原III，形成闭合大环。带有「尿-」前缀的衍生物仍带有8个羧基。" },
    { cz: "uroporfyrinogen III → koproporfyrinogen III (-4 CO2)", en: "Uroporphyrinogen III loses 4 CO2 to give COPROPORPHYRINOGEN III — some of the ring's carboxyl-bearing side chains are decarboxylated at this step, while propionate (HOOC-CH2-CH2-) side chains remain at other positions.", cn: "尿卟啉原III失去4个CO2生成粪卟啉原III——这一步使环上部分带羧基的侧链发生脱羧，而其他位置的丙酸（HOOC-CH2-CH2-）侧链则得以保留。" },
    { cz: "koproporfyrinogen III → protoporfyrin IX (oxidace, -2 CO2)", en: "Coproporphyrinogen III undergoes OXIDATION with loss of a further 2 CO2, giving PROTOPORPHYRIN IX, which now carries VINYL (HC=CH2) groups alongside its remaining propionate and methyl side chains. Derivatives with the 'proto-' prefix are, by this point, ALREADY MOSTLY DECARBOXYLATED.", cn: "粪卟啉原III经氧化再失去2个CO2，生成原卟啉IX，此时环上已带有乙烯基（HC=CH2），以及保留下来的丙酸和甲基侧链。带有「原-」前缀的衍生物到此阶段已大部分脱羧。" },
    { cz: "protoporfyrin IX + Fe2+ → hem", en: "FINALLY, protoporphyrin IX combines with Fe2+ — coordinated by the four pyrrole nitrogens at the centre of the ring — to give HEME. Through further metabolites and transformations, analogous pathways lead onward to the molecules of CYTOCHROMES, OXIDASES, OXYGENASES and CHLOROPHYLL.", cn: "最后，原卟啉IX与Fe2+结合——由环中央的四个吡咯氮原子配位——生成血红素。经过进一步的代谢物和转化，类似的途径还通向细胞色素、氧化酶、加氧酶和叶绿素等分子。" },
    { cz: "pravidlo: \"-nogen\" = CH2 můstky; ostatní = methinové (=CH–) můstky", en: "GENERAL NAMING RULE: derivatives with the '-NOGEN' suffix have their 4 pyrrole rings joined by –CH2– (METHYLENE) bridges; the others (protoporphyrin, heme) have METHINE (=CH–) bridges instead — i.e. the '-nogen' forms are the more REDUCED intermediates along this pathway.", cn: "通用命名规则：以「-原」为后缀的衍生物，其4个吡咯环由–CH2–（亚甲基）桥连接；其余的（原卟啉、血红素）则由次甲基（=CH–）桥连接——也就是说，「-原」型化合物是这条途径中更「还原」的中间产物。" }
  ],
  terms: [
    { cz: "δ-aminolevulát (kys. δ-aminolevulová, ALA)", en: "δ-aminolevulate (δ-aminolevulinic acid, ALA)", cn: "δ-氨基酮戊酸（ALA）", def_en: "The key porphyrin precursor, formed from succinyl-CoA + glycine; the book also glosses it as '5-aminolevulate.'", def_cn: "关键的卟啉前体，由琥珀酰辅酶A+甘氨酸生成；教材也将其注释为「5-氨基酮戊酸」。" },
    { cz: "δ-aminolevulátsynthasa", en: "δ-aminolevulate synthase (ALA synthase)", cn: "δ-氨基酮戊酸合酶", def_en: "The enzyme forming δ-aminolevulate from succinyl-CoA and glycine; the key regulatory point of the whole porphyrin-synthesis pathway.", def_cn: "由琥珀酰辅酶A和甘氨酸生成δ-氨基酮戊酸的酶；是整条卟啉合成途径的关键调控点。" },
    { cz: "porfobilinogen", en: "porphobilinogen", cn: "卟胆原", def_en: "The pyrrole derivative formed by condensation of 2 δ-aminolevulate molecules (losing 2 H2O); 4 of these condense further to build the tetrapyrrole skeleton.", def_cn: "由2分子δ-氨基酮戊酸缩合（失去2个H2O）生成的吡咯衍生物；4分子该化合物进一步缩合以构建四吡咯骨架。" },
    { cz: "lineární tetrapyrol", en: "linear tetrapyrrole", cn: "线型四吡咯", def_en: "The open-chain intermediate formed from 4 porphobilinogens (losing 4 NH3), with its 4 pyrrole rings joined by -CH2- bridges, before cyclization.", def_cn: "由4分子卟胆原（失去4个NH3）生成的开链中间产物，其4个吡咯环由-CH2-桥连接，尚未环化。" },
    { cz: "uroporfyrinogen III", en: "uroporphyrinogen III", cn: "尿卟啉原III", def_en: "The cyclized macrocycle formed from the linear tetrapyrrole; an 'uro-' derivative, still carrying 8 carboxyl groups.", def_cn: "由线型四吡咯环化生成的大环化合物；属「尿-」衍生物，仍带有8个羧基。" },
    { cz: "koproporfyrinogen III", en: "coproporphyrinogen III", cn: "粪卟啉原III", def_en: "Formed from uroporphyrinogen III by loss of 4 CO2; the next intermediate en route to protoporphyrin IX.", def_cn: "由尿卟啉原III失去4个CO2生成；是通向原卟啉IX途中的下一个中间产物。" },
    { cz: "protoporfyrin IX", en: "protoporphyrin IX", cn: "原卟啉IX", def_en: "Formed from coproporphyrinogen III by oxidation with loss of 2 more CO2; a 'proto-' derivative, mostly decarboxylated, bearing vinyl groups; combines with Fe2+ to give heme.", def_cn: "由粪卟啉原III经氧化再失去2个CO2生成；属「原-」衍生物，大部分已脱羧，带有乙烯基；与Fe2+结合生成血红素。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What two starting materials combine to form δ-aminolevulate, and what enzyme catalyses this key regulatory step?",
      q_cn: "哪两种起始物质结合生成δ-氨基酮戊酸？催化这一关键调控步骤的酶是什么？",
      options: [
        "Alanine + oxaloacetate, catalysed by transaminase",
        "Glycine + acetyl-CoA, catalysed by citrate synthase",
        "Glutamate + succinyl-CoA, catalysed by glutamate dehydrogenase",
        "Glycine + succinyl-CoA, catalysed by δ-aminolevulate synthase"
      ],
      answer: 3,
      optionRefs: { 0: "6-2-2-4", 1: "6-2-2-1" },
      optionNotes: {
        0: { en: "Neither alanine nor oxaloacetate appears anywhere in this pathway. Transamination does connect to the citrate cycle, but at 2-oxoglutarate, which is transaminated to glutamate — a different branch off the same hub.", cn: "Alanine 和 oxaloacetate 在这条通路里都没有出现。Transamination 确实和 citrate cycle 有联系，但那是在 2-oxoglutarate 上——它被 transaminate 成 glutamate，是同一个枢纽上的另一条分支。" },
        1: { en: "Glycine is right, but neither the partner nor the enzyme is. Citrate synthase condenses acetyl-CoA with oxaloacetate inside the citrate cycle; acetyl-CoA plays no part in porphyrin synthesis.", cn: "Glycine 挑对了，但搭档和酶都不对。Citrate synthase 是在 citrate cycle 内部把 acetyl-CoA 和 oxaloacetate 缩合起来；acetyl-CoA 在 porphyrin 合成里没有角色。" },
        2: { en: "Succinyl-CoA is right, but the amino acid is glycine, not glutamate, and glutamate dehydrogenase belongs to amino-acid metabolism rather than to this pathway. The enzyme here is the pathway's key regulatory point.", cn: "Succinyl-CoA 挑对了，但氨基酸是 glycine 而不是 glutamate，而 glutamate dehydrogenase 属于氨基酸代谢，不属于这条通路。这里的酶是整条通路的关键调控点。" }
      },
      why_en: "Obr. 6.12 and the running text both show δ-aminolevulate forming from glycine + succinyl-CoA (losing 2 HSCoA and 2 CO2), catalysed by δ-aminolevulate synthase — explicitly named the key regulatory point of porphyrin synthesis.",
      why_cn: "图6.12与正文都显示δ-氨基酮戊酸由甘氨酸+琥珀酰辅酶A生成（失去2个HSCoA和2个CO2），由δ-氨基酮戊酸合酶催化——该酶被明确指出是卟啉合成的关键调控点。"
    },
    {
      type: "short",
      q_en: "Put the intermediates of heme biosynthesis in order from porphobilinogen to heme, naming what is lost at each step.",
      q_cn: "请按顺序列出从卟胆原到血红素的血红素生物合成中间产物，并说明每一步失去了什么。",
      accept: ["linear tetrapyrrole", "uroporphyrinogen", "coproporphyrinogen", "protoporphyrin", "NH3", "CO2", "Fe", "线型四吡咯", "尿卟啉原", "粪卟啉原", "原卟啉"],
      answer_en: "Porphobilinogen (x4, losing 4 NH3) → linear tetrapyrrole → (cyclization) → uroporphyrinogen III (losing 4 CO2) → coproporphyrinogen III (oxidation, losing 2 CO2) → protoporphyrin IX (+ Fe2+) → heme.",
      answer_cn: "卟胆原（4分子，失去4个NH3）→线型四吡咯→（环化）→尿卟啉原III（失去4个CO2）→粪卟啉原III（氧化，失去2个CO2）→原卟啉IX（+Fe2+）→血红素。"
    },
    {
      type: "mcq",
      q_en: "What structural feature distinguishes '-nogen'-suffixed porphyrin derivatives (like uroporphyrinogen and coproporphyrinogen) from derivatives like protoporphyrin and heme?",
      q_cn: "以「-原」为后缀的卟啉衍生物（如尿卟啉原和粪卟啉原）与原卟啉、血红素等衍生物在结构上有何区别？",
      options: [
        "The '-nogen' derivatives carry only 2 pyrrole rings instead of 4, closing into the full macrocycle only at protoporphyrin IX",
        "The '-nogen' derivatives' 4 pyrrole rings are joined by -CH2- (methylene) bridges, while the others have methine (=CH-) bridges",
        "The '-nogen' derivatives contain no nitrogen at all, their pyrrole nitrogens having been lost as the 4 NH3 released during the condensation",
        "There is no structural difference at all, only a difference in which organ makes them and when they are excreted"
      ],
      answer: 1,
      optionRefs: { 0: "6-3-1" },
      optionNotes: {
        0: { en: "All of them carry four pyrrole rings. Uroporphyrinogen III is already a closed macrocycle, formed by cyclisation of the linear tetrapyrrole, so the ring is complete two steps before protoporphyrin IX appears.", cn: "它们全都带四个 pyrrole 环。Uroporphyrinogen III 已经是闭合的大环了，由线性四吡咯环化而来——环在 protoporphyrin IX 出现之前两步就已经闭合。" },
        2: { en: "The 4 NH3 lost when four porphobilinogens condense come from their H2N-CH2- side chains, not from the rings. The four ring nitrogens stay put, and they are exactly what coordinates Fe2+ at the centre in the final step to heme.", cn: "四个 porphobilinogen 缩合时脱掉的 4 个 NH3 来自它们的 H2N-CH2- 侧链，不是来自环。环上的四个氮一个也没少，最后一步生成 heme 时，正是它们在中心配位 Fe2+。" },
        3: { en: "The difference is chemical, and it is the whole point of the naming rule: -CH2- (methylene) bridges mark the more reduced intermediates, =CH- (methine) bridges the finished porphyrins. The name tells you how far along the pathway a molecule is.", cn: "差别是化学上的，而且正是这条命名规则的意义所在：-CH2-（methylene）桥标记更还原的中间体，=CH-（methine）桥标记已完成的 porphyrin。名字本身就告诉你这个分子走到哪一步了。" }
      },
      why_en: "The book states derivatives with the '-nogen' suffix have their 4 pyrrole rings connected by -CH2- bridges, while the rest (like protoporphyrin and heme) have methine, i.e. =CH-, bridges — the '-nogen' forms are the more reduced intermediates.",
      why_cn: "教材指出，以「-原」为后缀的衍生物，其4个吡咯环由-CH2-桥连接，而其余的（如原卟啉和血红素）则由次甲基，即=CH-桥连接——「-原」型是这条途径中更「还原」的中间产物。"
    },
    {
      type: "mcq",
      q_en: "Why does this content refer to the porphyrin-synthesis regulatory enzyme as 'δ-aminolevulate synthase' rather than reproducing the book's own printed '6-aminolevulátsynthasa'?",
      q_cn: "为什么本节内容将卟啉合成调控酶称为「δ-氨基酮戊酸合酶」，而不是照搬教材印刷的「6-氨基酮戊酸合酶」？",
      options: [
        "Because '6-aminolevulátsynthasa' names a different enzyme entirely, one with no connection to δ-aminolevulate, so the two names stand side by side on p.146 for two separate reactions of the same pathway, and only the second of them is the regulatory step Obr. 6.12 singles out at the head of the sequence",
        "Because the book never attaches any number or Greek letter to this enzyme's name, so the δ- is supplied here from standard nomenclature rather than from anything the text itself prints",
        "Because the book's own bold-printed 'δ-aminolevulát' earlier in the same sentence, and Obr. 6.12's own gloss '(5-aminolevulát)', both confirm the precursor is δ-/5-, making the plain-text '6-' almost certainly a stray typesetting error rather than the book's real intent",
        "Because English-language textbooks avoid Greek letters in enzyme names by convention, so δ- is rewritten as 5- whenever such a name is carried over out of Czech"
      ],
      answer: 2,
      optionRefs: { 1: "6-3-1" },
      optionNotes: {
        0: { en: "Only one enzyme is named on the page and only one regulatory point exists in the pathway. The precursor that enzyme makes is printed in bold as δ-aminolevulát in the very same sentence, which is what makes the isolated 6- look like a slip.", cn: "这一页上只出现了一个酶名，整条通路也只有一个调控点。这个酶生成的前体，就在同一句话里以粗体印作 δ-aminolevulát——正因如此，那个孤零零的 6- 才显得像是排版失误。" },
        1: { en: "The letter is printed, and twice over: the bold precursor name uses δ-, and Obr. 6.12 glosses it as (5-aminolevulát). It is the enzyme name alone, in one plain-text instance, that carries the stray 6-.", cn: "那个字母是印出来了的，而且印了两次：粗体的前体名用的是 δ-，Obr. 6.12 又注了一句 (5-aminolevulát)。只有酶名这一处正文里，冒出了那个多余的 6-。" },
        3: { en: "The book is Czech and uses δ- itself, in its own text and in its own figure. The problem is not translation into English but one inconsistent character inside a single Czech word on a single line.", cn: "这本书是捷克文的，它自己的正文和图里用的就是 δ-。问题不在于翻译成英文，而在于某一行的一个捷克文词里，有一个字符和别处不一致。" }
      },
      why_en: "The book's own text is internally consistent everywhere EXCEPT this one plain-text instance: the bold precursor name and the figure's own parenthetical gloss both use δ-/'5-', so the isolated '6-' in the enzyme name is best read as a typesetting slip, not a genuine alternative naming the book intends — exactly the kind of book-internal inconsistency the honesty rules require flagging rather than silently repeating.",
      why_cn: "教材正文在除这一处普通排版文字外的所有地方都是内部一致的：加粗的前体名称和图注中的括号说明都使用「δ-/5-」，因此酶名称中孤立出现的「6-」最可能是排版失误，而非教材真正想表达的另一种命名——这正是诚实性规则要求主动标注、而非默默照搬的那类教材内部不一致之处。"
    }
  ],
  oral: {
    q_en: "Trace the full heme biosynthesis pathway from glycine and succinyl-CoA to heme, and explain the naming logic behind the uro-/proto-/-nogen prefixes and suffixes.",
    q_cn: "请描述从甘氨酸和琥珀酰辅酶A到血红素的完整生物合成途径，并解释尿-/原-/-原 这些前缀和后缀背后的命名逻辑。",
    model_en: "Heme biosynthesis begins with a molecule the book calls the important precursor of all porphyrins, delta-aminolevulate, which it also glosses under the alternative name five-aminolevulate. This is formed from two starting materials: succinyl-CoA, the same intermediate already familiar from the citrate cycle, and the amino acid glycine; the reaction loses a molecule of coenzyme A and a molecule of carbon dioxide, and is catalysed by delta-aminolevulate synthase, which the book singles out as the key regulatory point for the entire porphyrin synthesis pathway. Two molecules of this delta-aminolevulate then condense, losing two molecules of water, to form a pyrrole derivative called porphobilinogen. The pathway then needs four separate porphobilinogen molecules, which condense together with loss of four molecules of ammonia to build a linear tetrapyrrole, an open chain of four pyrrole rings joined by methylene bridges. That chain then cyclizes into a closed macrocycle, uroporphyrinogen the third, and this is where the naming convention becomes useful: derivatives carrying the prefix uro- still retain all eight of their original carboxyl groups. From there, loss of four molecules of carbon dioxide converts it to coproporphyrinogen the third, and a further oxidation with loss of two more carbon dioxide molecules gives protoporphyrin nine; derivatives with the proto- prefix, the book notes, are by this stage already mostly decarboxylated, and indeed protoporphyrin now carries vinyl groups where earlier carboxyl groups used to be. The pathway's final step is simply the insertion of a ferrous iron ion, coordinated by the four central pyrrole nitrogens, which converts protoporphyrin into heme itself, and the book adds that analogous pathways, through further metabolites, lead onward to the molecules of cytochromes, oxidases, oxygenases and chlorophyll as well. One more naming rule ties the whole sequence together structurally: derivatives ending in -nogen, like uroporphyrinogen and coproporphyrinogen, have their four pyrrole rings joined by methylene, that is single-carbon saturated, bridges, whereas the rest, including protoporphyrin and heme itself, have methine bridges instead, meaning the -nogen forms really are the more chemically reduced intermediates along the way. It's also worth flagging, in the interest of precision, that the book's own printed text has one small internal inconsistency here: in one sentence the regulatory enzyme's name is typeset with a stray digit six instead of the Greek delta used everywhere else for this same precursor, which on close inspection looks like a straightforward typesetting slip rather than an intended alternative name.",
    checklist: [
      "Named δ-aminolevulate (ALA) as the key precursor, formed from succinyl-CoA + glycine via ALA synthase",
      "Traced porphobilinogen formation (2 ALA, -2 H2O)",
      "Traced linear tetrapyrrole formation (4 porphobilinogen, -4 NH3) and its cyclization to uroporphyrinogen III",
      "Explained the uro- prefix = 8 carboxyl groups",
      "Traced uroporphyrinogen III to coproporphyrinogen III (-4 CO2) to protoporphyrin IX (oxidation, -2 CO2)",
      "Explained the proto- prefix = mostly decarboxylated, with vinyl groups",
      "Stated the final Fe2+ insertion step giving heme",
      "Explained the -nogen = CH2-bridge vs methine-bridge naming rule",
      "Noted the book's own '6-' vs 'δ-' enzyme-name inconsistency"
    ]
  }
},

{
  id: "6-3-3",
  book: "cz",
  topicKey: "amino-acid-derived-molecules",
  chapter: 6,
  section: "6.3",
  czTitle: "Degradace porfyrinů",
  enTitle: "Degradation of porphyrins",
  cnTitle: "卟啉的降解",
  pages: [147],
  coverage: "full",
  coverageNote: "The full 'Degradace porfyrinů' section on p.147 read directly from the scan (final two paragraphs of the page, below Obr. 6.12): heme/hemoglobin breakdown to bile pigments, the three-step mechanism, the generalization to other porphyrin derivatives, and the further reduction to stercobilin/urobilin. This is the last section within pages 142-147; page 148 (visible only as faint bleed-through behind this page's text) begins chapter 7, outside this node's scope.",
  cnNote: { topic: null, title: "笔记十二「维生素和辅酶」p.77——标题可能对应本节或第3章辅酶部分，HANDOFF.md 标注未核实，本节未强行匹配", status: "pending" },
  mustKnow: { en: "Heme is not simply discarded when it is broken down — it is dismantled in a fixed order (oxidise a bridge, release the iron, THEN open the ring), and that same order applies to every porphyrin, not just heme. The end products, bilirubin and its relatives, are not just waste either: they are exactly what colours urine and stool, so a change in that colour is a direct, visible readout of how heme is being turned over.", cn: "血红素被降解时并不是简单地被扔掉——它是按固定顺序被拆解的（先氧化一个桥，再释放铁，然后才打开环），而且这同一个顺序适用于所有卟啉，不只是血红素。最终产物——胆红素和它的同类——也不只是废物：尿液和粪便的颜色**正是**由它们决定的，所以颜色的变化，就是血红素周转情况的一个直接、看得见的读数。" },
  summary: {
    en: "Degradation of heme — above all the heme of hemoglobin from disintegrated (broken-down) erythrocytes — produces bilin derivatives excreted as bile pigments, namely the linear tetrapyrroles bilirubin and biliverdin. The reaction sequence includes oxidation of a methine bridge, release of the iron atom, and opening of the porphyrin ring; the book notes that, chemically speaking, other porphyrin derivatives degrade analogously. Further reduction of bilirubin produces stercobilin, which together with urobilin colours urine and stool yellow to brown.",
    cn: "血红素的降解——主要是来自破裂红细胞中血红蛋白的血红素——生成胆色素衍生物，以胆色素的形式排出，即线型四吡咯化合物胆红素和胆绿素。反应顺序包括次甲基桥的氧化、铁原子的释放，以及卟啉环的打开；教材指出，从化学角度看，其他卟啉衍生物也以类似方式降解。胆红素经进一步还原生成粪胆素，粪胆素与尿胆素共同使尿液和粪便呈现黄色至棕色。"
  },
  points: [
    { cz: "zdroj: hem, především z hemoglobinu rozpadlých erytrocytů", en: "The main source of porphyrin degradation is HEME — above all the heme of HEMOGLOBIN from DISINTEGRATED (broken-down) ERYTHROCYTES.", cn: "卟啉降解的主要来源是血红素——主要是来自破裂红细胞中血红蛋白的血红素。" },
    { cz: "produkty: bilinové deriváty = žlučová barviva (bilirubin, biliverdin)", en: "Degradation of heme produces BILIN derivatives, which are excreted as BILE PIGMENTS — specifically the LINEAR TETRAPYRROLES BILIRUBIN and BILIVERDIN.", cn: "血红素降解生成胆色素衍生物，以胆色素的形式排出——具体为线型四吡咯化合物胆红素和胆绿素。" },
    { cz: "mechanismus: oxidace methinového můstku → uvolnění Fe → otevření kruhu", en: "The REACTION SEQUENCE for this degradation includes: (1) OXIDATION of a methine bridge, (2) RELEASE of the iron atom, and (3) OPENING of the porphyrin ring — converting the closed macrocycle into an open (linear) tetrapyrrole.", cn: "该降解的反应顺序包括：（1）次甲基桥的氧化；（2）铁原子的释放；（3）卟啉环的打开——把闭合大环转变为开链（线型）四吡咯。" },
    { cz: "ostatní porfyrinové deriváty se degradují analogicky (chemicky)", en: "From a CHEMICAL standpoint, the book notes, the OTHER porphyrin derivatives (beyond heme itself) degrade ANALOGOUSLY — i.e. this same three-step logic (methine-bridge oxidation, metal release, ring opening) is the general porphyrin-breakdown pattern, not something unique to heme.", cn: "教材指出，从化学角度看，其他（除血红素本身外的）卟啉衍生物也以类似方式降解——即这同一套三步逻辑（次甲基桥氧化、金属释放、环打开）是卟啉降解的一般模式，并非血红素独有。" },
    { cz: "bilirubin → sterkobilin (redukce); + urobilin → barva moči/stolice", en: "FURTHER REDUCTION of bilirubin produces STERCOBILIN, which — TOGETHER WITH UROBILIN — colours URINE and STOOL yellow to brown.", cn: "胆红素经进一步还原生成粪胆素，粪胆素与尿胆素共同使尿液和粪便呈现黄色到棕色。" }
  ],
  terms: [
    { cz: "bilinový derivát / žlučové barvivo", en: "bilin derivative / bile pigment", cn: "胆色素衍生物/胆色素", def_en: "An open-chain (linear) tetrapyrrole product of porphyrin ring degradation, excreted from the body; bilirubin and biliverdin are the two named examples here.", def_cn: "卟啉环降解产生的开链（线型）四吡咯产物，从体内排出；此处举出的两个实例是胆红素和胆绿素。" },
    { cz: "bilirubin", en: "bilirubin", cn: "胆红素", def_en: "A linear tetrapyrrole bile pigment produced by heme degradation; further reduction of bilirubin yields stercobilin.", def_cn: "血红素降解产生的线型四吡咯胆色素；胆红素经进一步还原生成粪胆素。" },
    { cz: "biliverdin", en: "biliverdin", cn: "胆绿素", def_en: "A linear tetrapyrrole bile pigment produced alongside bilirubin by heme degradation.", def_cn: "血红素降解过程中与胆红素一同产生的线型四吡咯胆色素。" },
    { cz: "sterkobilin", en: "stercobilin", cn: "粪胆素", def_en: "The product of further reduction of bilirubin; together with urobilin, gives urine and stool their yellow-to-brown colour.", def_cn: "胆红素经进一步还原的产物；与尿胆素共同赋予尿液和粪便黄色到棕色的颜色。" },
    { cz: "urobilin", en: "urobilin", cn: "尿胆素", def_en: "A bile-pigment breakdown product that, together with stercobilin, colours urine and stool yellow to brown.", def_cn: "一种胆色素降解产物，与粪胆素共同使尿液和粪便呈现黄色到棕色。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the main biological source of the porphyrin degradation described here?",
      q_cn: "此处所述卟啉降解的主要生物学来源是什么？",
      options: [
        "Dietary chlorophyll, broken down in the gut and absorbed as bilin",
        "Heme, above all from the hemoglobin of disintegrated erythrocytes",
        "Cytochrome c, released as mitochondrial inner membranes are turned over",
        "Newly made protoporphyrin IX that failed to take up its iron"
      ],
      answer: 1,
      optionRefs: { 0: "6-3-1", 3: "6-3-2" },
      optionNotes: {
        0: { en: "Chlorophyll is a porphyrin, and chemically it does degrade by the same three steps — oxidise a methine bridge, release the metal, open the ring. But the source the book names for the bile pigments described here is heme from red cells.", cn: "Chlorophyll 是 porphyrin，从化学上讲它也按同样三步降解——氧化一座 methine 桥、放出金属、开环。但教材为这里讲的胆色素点名的来源，是来自红细胞的 heme。" },
        2: { en: "Cytochrome c is a heme protein and degrades analogously, as the book says the other porphyrin derivatives do. What makes hemoglobin the answer is quantity: it is the mass of disintegrated erythrocytes that supplies the bile pigments.", cn: "Cytochrome c 是含 heme 的蛋白，和教材说的其他 porphyrin 衍生物一样按类似方式降解。之所以答案是 hemoglobin，是数量问题：供给胆色素的是大量崩解的红细胞。" },
        3: { en: "Protoporphyrin IX sits on the synthetic side of the pathway, one step before Fe2+ is inserted to give heme. It is a precursor, not a degradation substrate, and the book describes no quality-control route of this kind.", cn: "Protoporphyrin IX 位于合成这一侧，是插入 Fe2+ 生成 heme 的前一步。它是前体，不是降解的底物，教材也没有描述过这种质检式的路线。" }
      },
      why_en: "The book states degradation is 'především hemoglobinu z rozpadlých erytrocytů' — above all the heme of hemoglobin from disintegrated (broken-down) red blood cells — as the main source of the bile pigments described.",
      why_cn: "教材指出降解「主要是来自破裂红细胞中的血红蛋白」——即血红蛋白的血红素是所述胆色素的主要来源。"
    },
    {
      type: "short",
      q_en: "List the three steps in the porphyrin-ring degradation sequence, in order.",
      q_cn: "请按顺序列出卟啉环降解顺序中的三个步骤。",
      accept: ["oxidation", "methine bridge", "iron", "ring opening", "氧化", "次甲基", "铁", "开环"],
      answer_en: "(1) Oxidation of the methine bridge, (2) release of the iron atom, (3) opening of the porphyrin ring — converting the closed macrocycle to an open, linear tetrapyrrole such as biliverdin or bilirubin.",
      answer_cn: "（1）次甲基桥的氧化；（2）铁原子的释放；（3）卟啉环的打开——把闭合大环转变为开链的线型四吡咯，如胆绿素或胆红素。"
    },
    {
      type: "mcq",
      q_en: "What ultimately gives urine and stool their yellow-to-brown colour, according to this section?",
      q_cn: "根据本节内容，尿液和粪便的黄色到棕色最终是由什么造成的？",
      options: [
        "Stercobilin, formed by further reduction of bilirubin, together with urobilin",
        "Heme itself, excreted unchanged once the iron has been released",
        "Biliverdin alone, straight from the opening of the porphyrin ring, with no further reduction",
        "Protoporphyrin IX, taken up from the diet and excreted without transformation"
      ],
      answer: 0,
      optionRefs: { 3: "6-3-2" },
      optionNotes: {
        1: { en: "Heme is not excreted intact. Degradation oxidises a methine bridge, releases the iron and then opens the ring, so what leaves is an open, linear tetrapyrrole — a bilin derivative — and never the closed macrocycle.", cn: "Heme 不会原样排出。降解先氧化一座 methine 桥、放出铁，再把环打开，所以排出的是开链的线性四吡咯——bilin 衍生物——绝不会是闭合的大环。" },
        2: { en: "Biliverdin is one of the two bilin derivatives the book names, but it is the earlier and differently coloured one. The yellow-to-brown colour appears only after bilirubin has been reduced further, to stercobilin.", cn: "Biliverdin 是教材点名的两个 bilin 衍生物之一，但它出现得更早、颜色也不同。黄到棕的颜色要等 bilirubin 进一步还原成 stercobilin 之后才出现。" },
        3: { en: "Protoporphyrin IX belongs to heme SYNTHESIS, one step before the iron goes in, and the book names no dietary route for it. Nothing on the synthetic side of the pathway ends up colouring urine or stool.", cn: "Protoporphyrin IX 属于 heme 的合成，位于铁插入前的一步，教材也没有给它任何来自食物的途径。合成这一侧的东西不会跑去给尿和粪便上色。" }
      },
      why_en: "The book states that further reduction of bilirubin produces stercobilin, which together with urobilin colours urine and stool yellow to brown — heme itself and biliverdin are earlier, differently-coloured intermediates in the same degradation sequence.",
      why_cn: "教材指出，胆红素经进一步还原生成粪胆素，粪胆素与尿胆素共同使尿液和粪便呈现黄色到棕色——血红素本身和胆绿素是同一降解序列中更早期、颜色不同的中间产物。"
    }
  ],
  oral: {
    q_en: "Describe how heme is degraded into bile pigments and what ultimately happens to those pigments in the body.",
    q_cn: "请描述血红素如何降解为胆色素，以及这些色素在体内最终会发生什么变化。",
    model_en: "Once red blood cells reach the end of their lifespan and are broken down, the heme they carried, overwhelmingly as part of hemoglobin, has to be degraded, and this degradation produces a family of bilin derivatives that the body excretes as bile pigments — specifically the two linear tetrapyrroles biliverdin and bilirubin. The reaction sequence that gets from a closed, ring-shaped heme molecule to one of these open-chain pigments involves three recognisable steps: first, oxidation of one of the methine bridges that link the porphyrin's pyrrole rings together; second, release of the iron atom that had been sitting coordinated at the centre of the ring; and third, opening of the ring itself, which is what turns the closed macrocycle into a linear tetrapyrrole. The book is careful to generalise this beyond heme specifically, noting that from a purely chemical standpoint, other porphyrin derivatives degrade in an analogous way, following essentially the same oxidation, metal-release, ring-opening logic. Bilirubin itself is not the end of the story: further reduction converts it into stercobilin, and it is stercobilin, acting together with a related pigment called urobilin, that is ultimately responsible for the characteristic yellow-to-brown colouration of both urine and stool. So the overall arc runs from a red, iron-containing, ring-closed porphyrin all the way to a family of open-chain, iron-free pigments whose colours are literally what you see when you look at these two excretion products.",
    checklist: [
      "Identified heme (mainly from hemoglobin of broken-down erythrocytes) as the source",
      "Named bilirubin and biliverdin as the linear tetrapyrrole bile pigments produced",
      "Listed the three mechanism steps: methine-bridge oxidation, iron release, ring opening",
      "Noted the generalisation that other porphyrin derivatives degrade analogously",
      "Traced bilirubin's further reduction to stercobilin",
      "Named stercobilin + urobilin as responsible for urine/stool colour"
    ]
  }
}

);
