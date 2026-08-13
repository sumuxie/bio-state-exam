/* Bank questions for Czech textbook chapter 6 (Bioenergetika) — the second question
   layer, see BANK_SPEC.md. Every item below is derived from the content already in
   biochemie_pro/data/ch6.js; no fact here comes from outside the node it is attached to.
   Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  "6-1": [
    {
      type: "mcq",
      q_en: "The book's own (unnumbered) energy-flow scheme for the biosphere runs in one direction. Which box does every branch of it finally converge on?",
      q_cn: "教材给出的（未编号的）生物圈能流示意图是单向的。图中所有分支最终都汇聚到哪一项？",
      options: [
        "Photosynthesis, which recycles the energy back to the Sun",
        "The energy of chemical bonds — ATP, NADPH and nutrients",
        "Unused energy: heat and entropy",
        "Biosynthesis of macromolecules from precursors"
      ],
      answer: 2,
      optionRefs: { 0: "9-2", 1: "6-1-2-1", 3: "6-1-3" },
      optionNotes: {
        0: { en: "Photosynthesis is the scheme's entry step, converting solar electromagnetic energy into chemical-bond energy — the flow never returns to the Sun.", cn: "光合作用是示意图的入口环节，把太阳电磁能转化为化学键能——能流不会再回到太阳。" },
        1: { en: "Chemical-bond energy is the middle stage of the scheme, not its end: from there the flow branches into contraction/movement, transport and biosynthesis.", cn: "化学键能是示意图的中间环节，而不是终点：能量从这里再分支到收缩/运动、运输和生物合成。" },
        3: { en: "Biosynthesis is only one of the three parallel uses drawn side by side; all three still empty into the same final box.", cn: "生物合成只是并列的三种用途之一；三者最后都汇入同一个终点。" }
      },
      why_en: "The scheme is strictly one-way: solar electromagnetic radiation drives photosynthesis, which stores the energy in chemical bonds (ATP, NADPH, nutrients); that bond energy then splits into contraction/movement, transport and biosynthesis, and all three converge again on a single final box — unused energy as heat and entropy. Nothing in the scheme flows backwards.",
      why_cn: "这个示意图严格单向：太阳电磁辐射驱动 photosynthesis，把能量储存为化学键能（ATP、NADPH、营养物质）；键能再分成收缩/运动、运输、生物合成三路，而这三路又都汇合到同一个终点——未被利用的能量，即热和熵。图中没有任何一步是往回走的。"
    },
    {
      type: "mcq",
      q_en: "Which of the following is NOT one of the three purposes the book names when it says organisms need energy?",
      q_cn: "教材列举生物体需要能量的三种用途时，下列哪一项不在其中？",
      options: [
        "Mechanical work — muscle contraction and other cell movement",
        "Active transport of molecules and ions, plus signal (information) processing",
        "Producing heat to hold the body at a constant temperature",
        "Biosynthesis of macromolecules and other substances from precursors"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "This is the first of the three purposes, listed explicitly.", cn: "这是教材明确列出的三种用途中的第一项。" },
        1: { en: "This is the second purpose, and the book bundles signal processing together with active transport rather than counting it separately.", cn: "这是第二项用途；教材把信号（信息）处理与主动运输合并成一项，而不是单独计数。" },
        3: { en: "This is the third purpose, the anabolic one.", cn: "这是第三项用途，即合成代谢方向的用途。" }
      },
      why_en: "The three purposes are mechanical work, active transport plus signal processing, and biosynthesis. Heat does appear in the chapter — but only in the flow scheme's final box, as UNUSED energy that the three purposes dissipate into, never as a purpose the cell spends energy on. The book's related point about temperature is the opposite one: the cell cannot tolerate large temperature differences, which is why Gibbs energy is the right state variable.",
      why_cn: "三种用途是机械功、主动运输加信号处理、生物合成。热在本章确实出现——但只出现在能流图的最后一格，作为三种用途耗散掉的「未被利用的能量」，从来不是细胞主动花能量去做的事。教材关于温度的说法恰恰相反：细胞受不了大的温度差，这正是用 Gibbs energy 作状态函数的理由。"
    },
    {
      type: "short",
      q_en: "Trace the book's energy-flow scheme from its source to its final box, naming the three parallel uses in the middle.",
      q_cn: "沿教材的能流示意图，从能量来源一路讲到最终环节，并说出中间并列的三种用途。",
      accept: ["solar", "sun", "photosynthesis", "chemical bond", "ATP", "NADPH", "transport", "biosynthesis", "heat", "entropy", "太阳", "光合", "化学键", "运输", "生物合成", "熵"],
      answer_en: "The scheme starts from the electromagnetic energy of solar radiation, which drives photosynthesis; photosynthesis converts it into the energy of chemical bonds, explicitly ATP, NADPH and nutrients. That bond energy then branches into three parallel uses — contraction and movement, transport, and biosynthesis — and all three converge into one final box, unused energy in the form of heat and entropy.",
      answer_cn: "示意图从太阳辐射的电磁能开始，驱动 photosynthesis；photosynthesis 把它转化为化学键能，教材明确写出 ATP、NADPH 和营养物质。键能随后分成三路并列的用途——收缩/运动、运输、生物合成——三者最后又汇聚到同一个终点：以热和熵形式存在的、未被利用的能量。"
    }
  ],

  "6-1-1": [
    {
      type: "mcq",
      q_en: "In the book's worked coupling example, which of the three reactions is the ENDERGONIC one?",
      q_cn: "在教材的偶联示例中，下面三个反应里哪一个是吸能反应？",
      options: [
        "glucose + Pᵢ ⇌ glucose-6-phosphate + H₂O (ΔG⁰′ = +13.8 kJ·mol⁻¹)",
        "ATP + H₂O ⇌ ADP + Pᵢ (ΔG⁰′ = −30.5 kJ·mol⁻¹)",
        "glucose + ATP ⇌ glucose-6-phosphate + ADP (ΔG⁰′ = −16.7 kJ·mol⁻¹)",
        "All three, because each one needs an enzyme"
      ],
      answer: 0,
      optionRefs: { 1: "6-1-2-2", 2: "7-8-1" },
      optionNotes: {
        1: { en: "This is the exergonic partner — the one that pays. Its −30.5 kJ·mol⁻¹ is the value Tab. 6.1 gives for ATP hydrolysis.", cn: "这是出钱的那一半，即放能反应。它的 −30.5 kJ·mol⁻¹ 正是表 6.1 给 ATP 水解的数值。" },
        2: { en: "This is the coupled result, exergonic overall (−16.7); it is the hexokinase step that opens glycolysis.", cn: "这是偶联后的总反应，整体放能（−16.7）；也就是开启 glycolysis 的 hexokinase 那一步。" },
        3: { en: "Needing an enzyme says nothing about the sign of ΔG⁰′ — the node separates the three reactions by their ΔG⁰′ values alone.", cn: "需要酶并不能说明 ΔG⁰′ 的正负——本节完全是按 ΔG⁰′ 的数值来区分这三个反应的。" }
      },
      why_en: "Endergonic means ΔG⁰′ > 0, and only glucose + Pᵢ → glucose-6-phosphate qualifies, at +13.8 kJ·mol⁻¹; on its own it will not run. ATP hydrolysis at −30.5 is exergonic, and the coupled reaction inherits the sum of the two, −16.7, so it runs forward.",
      why_cn: "吸能反应是指 ΔG⁰′ > 0，三个里只有 glucose + Pᵢ → glucose-6-phosphate 符合，为 +13.8 kJ·mol⁻¹，单独进行不会发生。ATP 水解的 −30.5 是放能反应；偶联后的反应取两者之和 −16.7，因此能够正向进行。"
    },
    {
      type: "mcq",
      q_en: "What exactly does coupling do to the individual ΔG⁰′ values of the two reactions it joins?",
      q_cn: "偶联究竟对被连接的两个反应各自的 ΔG⁰′ 做了什么？",
      options: [
        "It lowers the endergonic reaction's own ΔG⁰′ until that reaction becomes exergonic by itself",
        "Nothing — the two values are unchanged and simply add, so the sequence's total ΔG⁰′ is negative",
        "It multiplies the two values, which is why the coupled value is larger in magnitude than either step",
        "It cancels the endergonic reaction, leaving only ATP hydrolysis"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The commonest misconception: coupling does not rewrite either step's own value. Glucose phosphorylation is still +13.8 — it is the SUM that is negative.", cn: "最常见的误解：偶联并不会改写任何一步自身的数值。葡萄糖磷酸化仍然是 +13.8——变成负值的是两者之和。" },
        2: { en: "Multiplication would give −44.3 in this example; the book's arithmetic is 13.8 + (−30.5) = −16.7, an addition.", cn: "若相乘，本例会得到 −44.3；教材的算法是 13.8 + (−30.5) = −16.7，是相加。" },
        3: { en: "Both reactions really happen — the exergonic one continuously removes the endergonic one's products, which is what pulls it forward.", cn: "两个反应都真实发生——放能反应不断把吸能反应的产物移走，正是这一点把它拉着往前走。" }
      },
      why_en: "The thermodynamic fact behind coupling is that the total ΔG⁰′ of a SERIES of reactions equals the SUM of the individual steps' values. Neither step's own ΔG⁰′ changes; the unfavourable step is simply 'paid for' by a sufficiently favourable one in the same sequence, and mechanistically the exergonic reaction keeps removing the endergonic reaction's products.",
      why_cn: "偶联背后的热力学事实是：一串反应的总 ΔG⁰′ 等于各步 ΔG⁰′ 之和。任何一步自身的 ΔG⁰′ 都没有变；不利的那一步只是被同一序列中足够有利的那一步「买单」了，机制上则是放能反应不断消耗掉吸能反应的产物。"
    },
    {
      type: "short",
      q_en: "The book defines ΔG⁰′ in a very specific physical way. Say what −16.7 kJ·mol⁻¹ for the coupled hexokinase reaction therefore means, and under what conditions that statement holds.",
      q_cn: "教材对 ΔG⁰′ 给了一个很具体的物理定义。据此说明偶联的 hexokinase 反应的 −16.7 kJ·mol⁻¹ 到底代表什么，以及这句话在什么条件下成立。",
      accept: ["maximum work", "maximal", "theoretically", "isothermal", "isobaric", "constant temperature", "constant pressure", "最大功", "理论", "等温", "等压", "恒温"],
      answer_en: "The book defines ΔG⁰′ of a reaction as the maximum work the reaction could theoretically perform if it were carried out under isothermal-isobaric conditions, that is at constant temperature and pressure. So −16.7 kJ·mol⁻¹ is the ceiling on the useful work obtainable per mole from the coupled glucose + ATP reaction under those conditions — a theoretical maximum, not a promise of what is actually captured.",
      answer_cn: "教材把反应的 ΔG⁰′ 定义为：若该反应在等温等压条件（恒定温度、恒定压力）下进行，理论上能做的最大功。所以 −16.7 kJ·mol⁻¹ 是在这种条件下，偶联的 glucose + ATP 反应每摩尔可获得的有用功的上限——是理论最大值，并不等于实际被捕获的量。"
    }
  ],

  "6-1-2-1": [
    {
      type: "mcq",
      q_en: "What numeric range does the book use as its own operational definition of a 'high-energy' (macroergic) bond?",
      q_cn: "教材用哪个数值范围作为它自己对「高能」（macroergic）键的操作性定义？",
      options: [
        "About 12 kJ·mol⁻¹ per bond or less",
        "30 to 60 kJ·mol⁻¹ per bond",
        "Exactly −30.5 kJ·mol⁻¹ per bond",
        "Around −61.9 kJ·mol⁻¹ per bond"
      ],
      answer: 1,
      optionRefs: { 2: "6-1-2-2", 3: "6-1-2-2" },
      optionNotes: {
        0: { en: "This is the other side of the threshold: hydrolysis of NON-macroergic compounds usually does not exceed about 12 kJ·mol⁻¹ per bond.", cn: "这是阈值的另一侧：非高能化合物的水解通常不超过每键约 12 kJ·mol⁻¹。" },
        2: { en: "−30.5 is one single member of the range — ATP's own hydrolysis value in Tab. 6.1, not the definition of the class.", cn: "−30.5 只是这个区间里的一个具体成员——表 6.1 中 ATP 自身的水解值，而不是整类化合物的定义。" },
        3: { en: "−61.9 is Tab. 6.1's most negative single entry, phosphoenolpyruvate; it sits above the range's upper edge rather than defining it.", cn: "−61.9 是表 6.1 中最负的一项，即 phosphoenolpyruvate；它高出这个区间的上缘，并不是区间本身。" }
      },
      why_en: "Macroergic compounds were found empirically to hydrolyse with ΔG⁰′ of 30 to 60 kJ·mol⁻¹ per bond, against under about 12 kJ·mol⁻¹ for ordinary bonds. That contrast — a band, not a single value — is what the word 'high-energy' actually means in this book.",
      why_cn: "经验上发现，高能化合物每个键的水解 ΔG⁰′ 在 30 到 60 kJ·mol⁻¹ 之间，而普通键通常不到约 12 kJ·mol⁻¹。「高能」在本书里指的就是这个对比区间，而不是某一个具体数字。"
    },
    {
      type: "mcq",
      q_en: "Why does the book insist that 'macroergic COMPOUND' is more correct than 'macroergic BOND'?",
      q_cn: "教材为什么坚持说「高能化合物」比「高能键」更准确？",
      options: [
        "Because the bond marked with the wavy line ~ is unusually strong, and strength is a property of the whole molecule",
        "Because no single bond in these molecules can actually be hydrolysed",
        "Because the atoms around the so-called macroergic bond are engaged in further covalent interactions, so macroergicity is a property of a larger portion of the molecule",
        "Because the energy is stored in the compound's magnesium complex rather than in any bond"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "The reversal that matters most here: 'high-energy' does not mean a strong bond. It means the molecule sits in an unstable state that cleaving one bond relieves.", cn: "这里最关键的一个反向理解：「高能」不是指键很强，而是指分子处于不稳定状态，断开某一个键正好解除这种不稳定。" },
        1: { en: "One bond is conventionally singled out and marked with a small wavy line ~ precisely because its cleavage stabilises the molecule and releases the energy.", cn: "恰恰有一个键被习惯性地挑出来、用小波浪号 ~ 标记，因为断裂它能使分子稳定并释放能量。" },
        3: { en: "ATP and ADP do form Mg²⁺ complexes in the cell, but the book gives that as a separate property, not as the site of the stored energy.", cn: "ATP 和 ADP 在细胞内确实会形成 Mg²⁺ 络合物，但教材把这当作另一条性质，并没有说能量储存在那里。" }
      },
      why_en: "The atoms flanking the so-called macroergic bond take part in further covalent interactions, so the energetic instability belongs to a larger portion of the molecule rather than to one bond viewed in isolation — hence 'compound', even though one bond is still marked with ~ as the one whose cleavage stabilises the molecule.",
      why_cn: "所谓高能键两侧的原子还参与其他共价相互作用，所以这种能量上的不稳定属于分子较大的一部分，而不是孤立地属于某一个键——因此说「化合物」；不过习惯上仍会用 ~ 标出断裂后能使分子稳定的那个键。"
    },
    {
      type: "mcq",
      q_en: "Phosphocreatine's P–N bond is high-energy. Which mechanism does the book give for THIS compound type specifically?",
      q_cn: "Phosphocreatine 的 P–N 键属于高能键。教材专门针对这一类化合物给出的机制是哪一个？",
      options: [
        "Electrostatic repulsion between negative charges concentrated on the oxygen atoms",
        "A sulfur atom prevents the mesomerism normal for an ordinary ester bond",
        "The phosphate prevents the molecule from adopting a more stable keto form",
        "A partial positive charge on the phosphorus atom prevents mesomerism"
      ],
      answer: 3,
      optionRefs: { 1: "6-1-2-2", 2: "6-1-2-2" },
      optionNotes: {
        0: { en: "That is the type-1 anhydride explanation, for polyphosphates such as ATP: phosphorus does not readily form double bonds, its P–O bond is semipolar, and like charges crowd the oxygens.", cn: "那是第 1 类酸酐（如 ATP 这类多磷酸）的解释：磷不易形成双键、P–O 键为半极性、同种负电荷又挤在氧上。" },
        1: { en: "That is type 4, the thioesters of coenzyme A — the sulfur blocks the resonance an O-ester would have.", cn: "那是第 4 类硫酯（coenzyme A 的酰基衍生物）——硫阻断了普通氧酯本该有的共振。" },
        2: { en: "That is type 3, the enol phosphates such as phosphoenolpyruvate, where hydrolysis also releases the molecule to relax into the keto form.", cn: "那是第 3 类烯醇磷酸酯（如 phosphoenolpyruvate），水解同时把分子放开、让它松弛为酮式。" }
      },
      why_en: "Type 2, the phosphoamides, occur in the phosphagens — phosphocreatine in vertebrates, phosphoarginine in invertebrates. Their mechanism is a partial positive charge on phosphorus that prevents mesomerism, i.e. blocks the resonance delocalisation that would otherwise stabilise the bond.",
      why_cn: "第 2 类磷酰胺存在于 phosphagen 类储能化合物中——脊椎动物是 phosphocreatine，无脊椎动物是 phosphoarginine。其机制是磷原子上的部分正电荷阻止了共振（mesomerism），也就是挡掉了本会稳定该键的离域作用。"
    },
    {
      type: "short",
      q_en: "Besides the ATP/ADP-type polyphosphates, the book lists two further kinds of anhydride bond. Name them with an example each.",
      q_cn: "除了 ATP/ADP 这类多磷酸之外，教材还列出了另外两种酸酐键。分别说出名称并各举一例。",
      accept: ["phosphosulfate", "3'-phosphoadenosine", "phosphosulfát", "acylphosphate", "acyl phosphate", "carbamoyl", "1,3-bisphosphoglycerate", "磷酸硫酸", "酰基磷酸", "氨甲酰磷酸", "二磷酸甘油酸"],
      answer_en: "First, the phosphosulfate bond, found in 3'-phosphoadenosine-5'-phosphosulfate. Second, acylphosphate bonds, for which the book names carbamoylphosphate (cross-referenced to ch. 5.2.2) and 1,3-bisphosphoglycerate (cross-referenced to ch. 7.8). Both belong to type 1, the anhydrides, alongside the inorganic diphosphates and the nucleotide triphosphates ATP, UTP, GTP and CTP.",
      answer_cn: "第一是磷酸硫酸键，存在于 3'-phosphoadenosine-5'-phosphosulfate 中。第二是酰基磷酸键，教材举的例子是 carbamoylphosphate（引到第 5.2.2 节）和 1,3-bisphosphoglycerate（引到第 7.8 节）。两者都属于第 1 类酸酐，和无机二磷酸以及 ATP、UTP、GTP、CTP 这些核苷三磷酸并列。"
    }
  ],

  "6-1-2-2": [
    {
      type: "mcq",
      q_en: "Glucose-6-phosphate sits near the bottom of Tab. 6.1, at −13.8 kJ·mol⁻¹. What does its position tell you about what it can do with its phosphate group?",
      q_cn: "Glucose-6-phosphate 位于表 6.1 靠下的位置，为 −13.8 kJ·mol⁻¹。它的位置说明它对自己的磷酸基团能做什么？",
      options: [
        "It lies below ATP, so its organic residue acts as a phosphate ACCEPTOR, not a donor",
        "It lies below ATP, so it is the strongest phosphate DONOR in the table",
        "It lies above ATP, so it can phosphorylate ADP directly",
        "Its position says nothing about donor/acceptor behaviour, only about its concentration in the cell"
      ],
      answer: 0,
      optionRefs: { 1: "7-8-1", 2: "6-2-1-1" },
      optionNotes: {
        1: { en: "Direction reversed: donors are the compounds ABOVE ATP, with high ΔG⁰′ of hydrolysis. Glucose-6-phosphate is in fact made by accepting a phosphate from ATP, in the hexokinase reaction.", cn: "方向反了：供体是排在 ATP 上方、水解 ΔG⁰′ 高的化合物。glucose-6-phosphate 恰恰是在 hexokinase 反应中从 ATP 那里接受磷酸而生成的。" },
        2: { en: "−13.8 is below ATP's −30.5, not above it. Only compounds above ATP — PEP, 1,3-bisphosphoglycerate, creatine phosphate, acetylphosphate — can hand a phosphate to ADP.", cn: "−13.8 比 ATP 的 −30.5 更靠下，而不是更靠上。只有排在 ATP 之上的化合物——PEP、1,3-bisphosphoglycerate、creatine phosphate、acetylphosphate——才能把磷酸交给 ADP。" },
        3: { en: "Tab. 6.1 is a ranking by ΔG⁰′ of hydrolysis, not by concentration; the whole point of conclusion (a) is that position relative to ATP decides donor versus acceptor.", cn: "表 6.1 是按水解 ΔG⁰′ 排序的，不是按浓度；结论 (a) 的全部意义就在于：相对 ATP 的位置决定了是供体还是受体。" }
      },
      why_en: "Conclusion (a) of Tab. 6.1 divides phosphoric-acid derivatives at ATP: those above ATP, with high ΔG⁰′ of hydrolysis, act as phosphate donors; those below, with low ΔG⁰′, have organic residues that act as acceptors. The arrow drawn down the table marks exactly this direction of Pᵢ transfer, from top to bottom.",
      why_cn: "表 6.1 的结论 (a) 以 ATP 为界把磷酸衍生物分成两组：排在 ATP 上方、水解 ΔG⁰′ 高的作磷酸供体；排在下方、ΔG⁰′ 低的，其有机残基作受体。贯穿全表向下的那个箭头标的正是这个 Pᵢ 转移方向：自上而下。"
    },
    {
      type: "mcq",
      q_en: "Tab. 6.1 lists '(acetyl-CoA)' at −31.4 kJ·mol⁻¹ — the only one of its eleven rows printed in parentheses. What is the most plausible reason?",
      q_cn: "表 6.1 把「(acetyl-CoA)」列为 −31.4 kJ·mol⁻¹，是全表 11 行中唯一加括号的一项。最合理的解释是什么？",
      options: [
        "Its value is uncertain, unlike the other ten",
        "It is the only entry that lies below ATP in the ranking",
        "It is a thioester, not a phosphorylated compound, so it is included only for energetic comparison with the table's own category",
        "It is the only entry that does not occur in living cells"
      ],
      answer: 2,
      optionRefs: { 1: "6-1-2-2" },
      optionNotes: {
        0: { en: "Nothing in the table or its caption marks the number as uncertain; the parentheses flag category membership, not measurement quality.", cn: "表格和表题都没有说这个数值不确定；括号标的是「类别归属」，不是测量质量。" },
        1: { en: "Its −31.4 is slightly MORE negative than ATP's −30.5, so acetyl-CoA sits just above ATP, not below it; the rows below ATP are the sugar phosphates and glycerol phosphate.", cn: "它的 −31.4 比 ATP 的 −30.5 还要更负一点，所以 acetyl-CoA 排在 ATP 上方而不是下方；排在 ATP 下方的是几个糖磷酸和甘油磷酸。" },
        3: { en: "Acetyl-CoA is the chapter's central metabolite — the hub of Obr. 6.2 and the substrate of the citrate cycle.", cn: "acetyl-CoA 正是本章的核心代谢物——图 6.2 的枢纽，也是 citrate cycle 的底物。" }
      },
      why_en: "The table's own stated subject is the ΔG⁰′ of hydrolysis of certain PHOSPHORYLATED compounds. Acetyl-CoA is a thioester, not a phosphate ester, so the parentheses most plausibly mark it as a guest included for energetic comparison rather than as a member of the table's category.",
      why_cn: "表题本身写明的主题是「若干磷酸化合物」的水解 ΔG⁰′。acetyl-CoA 是硫酯而不是磷酸酯，所以那个括号最可能是在提示：它只是为了作能量对比而被请进来的客人，并不属于表格自己定义的那一类。"
    },
    {
      type: "mcq",
      q_en: "A single arrow is drawn down the whole of Tab. 6.1. What does it mark?",
      q_cn: "表 6.1 上贯穿全表画了一个向下的箭头。它标示的是什么？",
      options: [
        "Increasing standard redox potential E⁰′ of the listed compounds",
        "The direction of phosphate (Pᵢ) transfer, from the high-energy compounds at the top toward the low-energy ones at the bottom",
        "The order in which these compounds appear along glycolysis",
        "Increasing ATP yield per mole of compound oxidised"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-1-1", 2: "7-8-3", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "Wrong table: the ranking by increasing E⁰′ is Tab. 6.2's fifteen biological redox couples, which is about electron flow, not phosphate transfer.", cn: "看错表了：按 E⁰′ 递增排列的是表 6.2 的 15 个生物氧化还原对，那讲的是电子流向，不是磷酸转移。" },
        2: { en: "Several entries are glycolytic intermediates, but the table is ordered by ΔG⁰′ of hydrolysis; PEP, for instance, comes late in glycolysis yet stands at the very top here.", cn: "表中确有几个 glycolysis 的中间体，但排序依据是水解 ΔG⁰′；例如 PEP 在 glycolysis 中出现得很晚，在这里却排在最上面。" },
        3: { en: "ATP yields per substrate belong to the citrate-cycle bookkeeping (12 per acetyl-CoA, 38 per glucose), not to this table.", cn: "每种底物产多少 ATP 属于 citrate cycle 的能量账（每个 acetyl-CoA 12 个、每摩尔葡萄糖 38 个），不是这张表的内容。" }
      },
      why_en: "Tab. 6.1 ranks compounds by ΔG⁰′ of hydrolysis, most negative first, and the arrow running down it marks the direction in which a phosphate group can actually be handed on: from high-energy donors at the top to low-energy acceptors at the bottom, with ATP/ADP sitting in the middle as the obligatory go-between.",
      why_cn: "表 6.1 按水解 ΔG⁰′ 从最负开始排列，那个向下的箭头标的是磷酸基团实际能够被传递的方向：从上方的高能供体传向下方的低能受体，而 ATP/ADP 正好卡在中间，充当必经的中介。"
    },
    {
      type: "short",
      q_en: "Explain why ATP's middle position in Tab. 6.1 is what makes it useful, and what the book means by calling its −30.5 kJ·mol⁻¹ a 'quantum'.",
      q_cn: "解释为什么 ATP 在表 6.1 中处于中间位置反而使它有用，以及教材把它的 −30.5 kJ·mol⁻¹ 称为「量子」是什么意思。",
      accept: ["middle", "donor", "acceptor", "universal", "quantum", "regulat", "−30.5", "-30.5", "中间", "供体", "受体", "通用", "量子", "调控"],
      answer_en: "Sitting mid-table, ATP can accept a phosphate from every compound above it and donate one to every compound below it, so ATP and ADP together act as the universal donor-acceptor pair and become the central compounds of bioenergetics; the book adds that ATP's formation is also well regulatable. Its hydrolysis value, −30.5 kJ·mol⁻¹ per bond, then works as a kind of quantum: energy is distributed around the cell in discrete doses of about that size rather than in one large burst.",
      answer_cn: "正因为排在表的中段，ATP 可以从上方任何化合物那里接受磷酸，又能把磷酸给下方任何化合物，所以 ATP 与 ADP 一起成为通用的供体—受体对，是生物能学的中心化合物；教材还补充说，机体内 ATP 的生成具有良好的可调控性。它每键 −30.5 kJ·mol⁻¹ 的水解值因此像一种「量子」：细胞里的能量是按这个量级一份一份地分配，而不是一次性放出一大笔。"
    }
  ],

  "6-1-3": [
    {
      type: "mcq",
      q_en: "Of the three reasons the book gives for splitting metabolism into many small steps, which one is specifically about REGULATION?",
      q_cn: "教材为「把代谢拆成许多小步骤」给出了三条理由，其中真正讲调控的是哪一条？",
      options: [
        "Production and consumption of Gibbs energy become 'quantized' into doses matching the individual partial reactions",
        "Intermediates can be drawn off by several routes or replenished from various sources to hold a steady-state concentration",
        "A finely segmented metabolism is regulatable, and catabolism and anabolism additionally use different enzymes in different cell compartments",
        "Each enzyme can catalyse only a single reaction, so many reactions require many enzymes"
      ],
      answer: 2,
      optionRefs: { 0: "6-1-2-2", 1: "10-4", 3: "3-1" },
      optionNotes: {
        0: { en: "That is reason (a), about the SIZE of the energy doses — it echoes the 'quantum' language used for ATP's −30.5 kJ·mol⁻¹.", cn: "那是理由 (a)，讲的是能量剂量的大小——与 ATP 的 −30.5 kJ·mol⁻¹ 被称作「量子」是同一套说法。" },
        1: { en: "That is reason (b), about shared metabolites and flexible supply, not about control.", cn: "那是理由 (b)，讲的是代谢物共享和供应灵活，而不是调控。" },
        3: { en: "The book does not use enzyme specificity as one of its three reasons here; enzyme classification and specificity belong to chapter 3.", cn: "教材在这里并没有把酶的专一性列为三条理由之一；酶的分类和专一性属于第 3 章的内容。" }
      },
      why_en: "Reason (c) is the regulatory one: a finely segmented metabolism can be regulated, and on top of that catabolism and anabolism can be regulated independently of each other because the two directions use a different enzymatic apparatus and are localised in different parts of the cell.",
      why_cn: "理由 (c) 就是调控这一条：精细分段的代谢可以被调控；而且在此之外，分解代谢和合成代谢还能各自独立调控，因为这两个方向用的是不同的酶系统，并且分布在细胞的不同部位。"
    },
    {
      type: "mcq",
      q_en: "In Obr. 6.2, the pyruvate → acetyl-CoA arrow is drawn with the same double-stroke glyph as its neighbours. What does the node say this does and does not tell us?",
      q_cn: "在图 6.2 中，pyruvate → acetyl-CoA 这个箭头与相邻箭头用的是完全相同的双向画法。本节说这一点能说明什么、不能说明什么？",
      options: [
        "It is the figure's only one-way arrow, so the figure marks this step as irreversible",
        "The figure simply does not flag this step as irreversible — whatever is true of the enzyme, that is not what this diagram encodes",
        "It proves the step is freely reversible in the cell",
        "It shows that acetyl-CoA can be converted back into fats, polysaccharides and proteins in one step"
      ],
      answer: 1,
      optionRefs: { 0: "7-8-5", 2: "7-8-5" },
      optionNotes: {
        0: { en: "This is exactly the claim an earlier pass made and a zoomed re-check disproved — the arrow uses the identical glyph as its neighbours.", cn: "这正是早先一版内容提出、后经放大重新核对被推翻的说法——该箭头与相邻箭头的画法完全相同。" },
        2: { en: "The opposite over-reading. The figure is silent on reversibility here; pyruvate's oxidative decarboxylation itself is treated in ch. 7.8.", cn: "这是反方向的过度解读。图在这一点上没有表态；pyruvate 的氧化脱羧本身在第 7.8 节处理。" },
        3: { en: "Phase I's double-headed arrows link macromolecules with their own building blocks; they do not run from acetyl-CoA straight back to fats or proteins.", cn: "第 I 阶段的双向箭头连接的是大分子与其自身的构件单位，并不是从 acetyl-CoA 一步回到脂肪或蛋白质。" }
      },
      why_en: "The node explicitly records a correction: a zoomed re-check found that this arrow uses the same double-stroke glyph as every other arrow in the figure, so Obr. 6.2 does not itself encode irreversibility at this step. Reading a claim out of a diagram that the diagram does not make is precisely the error being flagged.",
      why_cn: "本节明确记录了一处订正：放大重新核对后发现，这个箭头与图中其他箭头使用完全相同的双向画法，所以图 6.2 本身并没有在这一步表达「不可逆」。从图里读出图并没有表达的结论，正是这里要提醒避免的错误。"
    },
    {
      type: "short",
      q_en: "Reason (b) says an intermediate can be drawn down by several routes or replenished from various sources. What structural property of a stepwise pathway makes that possible?",
      q_cn: "理由 (b) 说某个中间体既可以被多条路径抽走，也可以从多种来源得到补充。逐步进行的代谢途径具备什么结构特点，才使这成为可能？",
      accept: ["many", "discrete", "shared", "intermediates", "several", "steady-state", "replenish", "中间体", "共享", "多条", "稳态", "补充"],
      answer_en: "Because the pathway is built from many small, discrete, enzyme-catalysed steps, it contains many separate intermediates, and each of those is a point other routes can tap into or feed. That is what lets a metabolite be consumed by several different pathways at once, or have its supply topped up from a variety of sources, so that its concentration can be held at a steady-state value.",
      answer_cn: "因为途径由许多小的、离散的酶催化步骤组成，中间就有许多个各自独立的代谢物，每一个都可以成为其他路径接入或供料的节点。正因如此，同一个代谢物可以同时被几条不同的途径取用，也可以从多种来源得到补充，从而把浓度维持在稳态水平。"
    }
  ],

  "6-2-1-1": [
    {
      type: "mcq",
      q_en: "The book states that released electrons and protons cannot exist independently. Which pair of statements follows from that, in the book's own terms?",
      q_cn: "教材指出，释放出的电子和质子无法独立存在。按教材自己的说法，由此可以得出下面哪一组结论？",
      options: [
        "Oxidation is exergonic and reduction endergonic, and every oxidation must be coupled to the reduction of another substance",
        "Oxidation is endergonic and reduction exergonic, and the two need not occur together",
        "Both oxidation and reduction are exergonic, which is why redox reactions are always spontaneous",
        "Oxidation raises the products' Gibbs energy while lowering their entropy"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Both halves are reversed. Oxidation is the exergonic direction, and because free electrons and protons cannot exist on their own, the two half-reactions are inseparable.", cn: "两半句都反了。氧化才是放能方向；而且由于自由电子和质子无法单独存在，两个半反应根本不可能分开发生。" },
        2: { en: "If both directions were exergonic the pairing would be meaningless — the point is precisely that the endergonic reduction is carried by the exergonic oxidation.", cn: "如果两个方向都放能，配对就没有意义了——关键恰恰在于吸能的还原是被放能的氧化带着走的。" },
        3: { en: "The signs are swapped: oxidation gives products of LOWER Gibbs energy, i.e. more stable metabolites, though with HIGHER entropy than the starting materials.", cn: "正负号弄反了：氧化生成的产物 Gibbs 自由能更低（即更稳定的代谢物），但熵比起始物质更高。" }
      },
      why_en: "Because neither electrons nor protons can float free, an oxidation is always coupled to the reduction of something else — that combined event is what 'oxidation-reduction process' means. Oxidation itself is the exergonic direction, giving products of lower Gibbs energy but higher entropy; reduction is the endergonic one.",
      why_cn: "既然电子和质子都不能游离存在，氧化就必然与另一物质的还原相偶联——这个合起来的事件才叫「氧化还原过程」。氧化本身是放能方向，产物 Gibbs 自由能更低但熵更高；还原则是吸能方向。"
    },
    {
      type: "mcq",
      q_en: "Why can standard Gibbs energies only be attached to DIFFERENCES of redox potential, and never to a single E⁰′ value on its own?",
      q_cn: "为什么标准 Gibbs 自由能只能对应氧化还原电位的差值，而不能对应某一个 E⁰′ 单独的数值？",
      options: [
        "Because the constants n and F are not known for biological systems",
        "Because the ΔG⁰′ axis has no fixed starting point of its own, unlike E⁰′, whose zero is fixed by convention at the hydrogen electrode; ΔG⁰′ = −nF·ΔE⁰′",
        "Because ΔG⁰′ is by definition zero at the standard hydrogen electrode",
        "Because redox potentials in Tab. 6.2 are measured at pH 7 rather than pH 0"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "n and F are exactly what the conversion uses; the problem is the missing zero point, not missing constants.", cn: "n 和 F 正是换算公式要用的量；问题出在缺一个零点，而不是缺常数。" },
        2: { en: "The confusion is one level off: it is E⁰′, not ΔG⁰′, whose zero is fixed by the hydrogen-electrode convention.", cn: "混淆错了一层：由氢电极惯例固定零点的是 E⁰′，不是 ΔG⁰′。" },
        3: { en: "True but irrelevant to the zero-point argument — the pH-7 convention is what shifts the hydrogen electrode from 0 mV to −420 mV, matching Tab. 6.2's own H₂/2H⁺ row.", cn: "这句本身没错，但与零点的论证无关——pH 7 的惯例只是把氢电极从 0 mV 移到 −420 mV，正好对上表 6.2 自己的 H₂/2H⁺ 那一行。" }
      },
      why_en: "A parallel ΔG⁰′ axis can be laid alongside the redox-potential axis, but it floats: only E⁰′ has a conventional zero (the standard hydrogen electrode, 0 mV classically, −420 mV under the biological pH-7 convention). So a Gibbs energy can only be assigned to a potential DIFFERENCE, via ΔG⁰′ = −nF·ΔE⁰′.",
      why_cn: "可以在氧化还原电位轴旁边再配一条 ΔG⁰′ 轴，但这条轴是浮动的：只有 E⁰′ 有约定的零点（标准氢电极，经典条件下 0 mV，生物学 pH 7 惯例下为 −420 mV）。所以 Gibbs 自由能只能赋给电位的差值，公式是 ΔG⁰′ = −nF·ΔE⁰′。"
    },
    {
      type: "mcq",
      q_en: "The book gives ΔG⁰′ = −196.6 kJ·mol⁻¹ for glucose broken down anaerobically to lactate, and −2870 kJ·mol⁻¹ for glucose oxidised aerobically. What does the comparison show?",
      q_cn: "教材给出葡萄糖无氧分解为乳酸的 ΔG⁰′ = −196.6 kJ·mol⁻¹，有氧氧化则为 −2870 kJ·mol⁻¹。这个对比说明了什么？",
      options: [
        "Anaerobic breakdown releases only a small fraction of the Gibbs energy that complete oxidation to CO₂ and H₂O makes available",
        "The two routes release almost the same energy, so oxygen makes little difference",
        "Anaerobic breakdown is the more exergonic of the two",
        "−196.6 kJ·mol⁻¹ is the value for alanine, not for glucose"
      ],
      answer: 0,
      optionRefs: { 2: "7-8-4", 3: "6-2-1-1" },
      optionNotes: {
        1: { en: "The two differ by more than a factor of ten — the very reason the book prints both summary equations side by side.", cn: "两者相差十倍以上——教材把这两个总反应式并排列出，正是为了这个对比。" },
        2: { en: "Sign magnitude reversed: −2870 is far more negative than −196.6. Lactate is still a relatively energy-rich end product, unlike CO₂ and H₂O.", cn: "数值大小弄反了：−2870 远比 −196.6 更负。乳酸仍是含能量较多的终产物，不像 CO₂ 和 H₂O。" },
        3: { en: "Alanine's own equation is the fourth one, at −1046 kJ·mol⁻¹; the other two worked values are palmitic acid at −11 340 and aerobic glucose at −2870.", cn: "alanine 的方程是第四个，为 −1046 kJ·mol⁻¹；另外两个数值是棕榈酸 −11 340、有氧葡萄糖 −2870。" }
      },
      why_en: "Organisms obtain energy by oxidatively cleaving nutrients to low-energy end products, and the four worked equations quantify how far that cleavage goes. Lactate fermentation stops at a product that still holds most of glucose's energy (−196.6), whereas complete oxidation to CO₂ and H₂O releases −2870 kJ·mol⁻¹.",
      why_cn: "生物体通过把营养物质氧化裂解为低能终产物来获取能量，四个总反应式量化的正是「裂解到什么程度」。乳酸发酵停在一个仍保留着葡萄糖大部分能量的产物上（−196.6），而完全氧化为 CO₂ 和 H₂O 则释放 −2870 kJ·mol⁻¹。"
    },
    {
      type: "short",
      q_en: "Write the general form of an oxidoreduction system, and say what the Nernst-Peterson relation adds to the standard potential E⁰′.",
      q_cn: "写出氧化还原体系的一般式，并说明 Nernst-Peterson 关系式在标准电位 E⁰′ 之上还补充了什么。",
      accept: ["Red", "Ox", "n e", "electrons", "E⁰′", "E0'", "ln", "ratio", "concentration", "还原态", "氧化态", "电子", "浓度", "比值"],
      answer_en: "Any oxidoreduction system can be written Red ⇌ Ox + n e⁻, with Red the reduced and Ox the oxidised form, as in Fe²⁺ ⇌ Fe³⁺ + e⁻; oxidation is loss of electrons, reduction is acceptance of them. The system is characterised by its redox potential, and the Nernst-Peterson relation E = E⁰′ + (RT/nF)·ln([Ox]/[Red]) says the actual potential is the standard one shifted by the actual ratio of oxidised to reduced form — so E⁰′ alone describes only the standard state.",
      answer_cn: "任何氧化还原体系都可以写成 Red ⇌ Ox + n e⁻，Red 为还原态、Ox 为氧化态，例如 Fe²⁺ ⇌ Fe³⁺ + e⁻；氧化是失电子，还原是得电子。体系用氧化还原电位来表征，而 Nernst-Peterson 关系式 E = E⁰′ + (RT/nF)·ln([Ox]/[Red]) 说明：实际电位等于标准电位再按氧化态与还原态的实际比值作修正——所以单看 E⁰′ 描述的只是标准状态。"
    }
  ],

  "6-2-2-1": [
    {
      type: "mcq",
      q_en: "Obr. 6.4 labels four mitochondrial compartments: Mb1, Mb2, MMP and Mx. Where does the book localise the citrate cycle's reactions?",
      q_cn: "图 6.4 标出了线粒体的四个部分：Mb1、Mb2、MMP、Mx。教材把 citrate cycle 的反应定位在哪里？",
      options: [
        "Mb1, the outer membrane",
        "Mb2, the inner membrane",
        "MMP, the intermembrane/cytosolic space",
        "Mx, the matrix — the inner space of the mitochondrion"
      ],
      answer: 3,
      optionRefs: { 1: "6-2-4-1", 2: "6-2-4-3" },
      optionNotes: {
        0: { en: "Mb1 is the outer membrane; the book gives it no citrate-cycle role.", cn: "Mb1 是外膜；教材没有赋予它任何 citrate cycle 的功能。" },
        1: { en: "Mb2, the inner membrane, is where the respiratory chain and aerobic phosphorylation sit — the next section, not this one.", cn: "Mb2 是内膜，那里安放的是呼吸链和有氧磷酸化——属于下一节，不是本节。" },
        2: { en: "MMP is the intermembrane (cytosolic) space, the side protons are pushed OUT to by Complexes I and III.", cn: "MMP 是膜间（胞质）空间，是复合物 I 和 III 把质子推出去的那一侧。" }
      },
      why_en: "Complete oxidation of both carbons of the CoA-bound acetyl residue happens through the citrate-cycle sequence localised in the matrix (Mx), the mitochondrion's inner space. Keeping this straight matters later: the cycle runs in the matrix, while the chain that consumes its NADH and FADH₂ is built into the inner membrane that encloses it.",
      why_cn: "结合在 CoA 上的乙酰基，其两个碳的完全氧化是通过定位在基质（Mx，即线粒体内部空间）的 citrate cycle 反应序列完成的。这一点后面很关键：循环在基质里跑，而消耗它产生的 NADH 和 FADH₂ 的呼吸链，则嵌在包住基质的那层内膜里。"
    },
    {
      type: "mcq",
      q_en: "Per Tab. 6.3, which citrate-cycle enzyme is listed with NO cofactor at all ('žádné')?",
      q_cn: "根据表 6.3，citrate cycle 中哪一个酶的辅因子栏写的是「无」（žádné）？",
      options: [
        "Aconitase",
        "Fumarase",
        "Malate dehydrogenase",
        "Succinate dehydrogenase"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-2", 2: "6-2-2-3", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "Aconitase is listed with Fe²⁺, in both of its rows (reactions 2 and 3).", cn: "aconitase 的两行（反应 2 和 3）辅因子都写的是 Fe²⁺。" },
        2: { en: "Malate dehydrogenase (EC 1.1.1.37) needs NAD⁺ — it makes the cycle's third NADH.", cn: "malate dehydrogenase（EC 1.1.1.37）需要 NAD⁺——它生成循环中第三个 NADH。" },
        3: { en: "Succinate dehydrogenase (EC 1.3.99.1) is listed with FAD plus Fe²⁺, and its FAD is unusual in being covalently bound.", cn: "succinate dehydrogenase（EC 1.3.99.1）的辅因子是 FAD 加 Fe²⁺，而且它的 FAD 特别之处在于是共价结合的。" }
      },
      why_en: "Fumarase (EC 4.2.1.2, reaction 8) is the one row of Tab. 6.3 whose cofactor column reads 'none'. That fits its chemistry: it only adds water across fumarate's double bond, with no redox step and no metal or nucleotide to carry anything.",
      why_cn: "fumarase（EC 4.2.1.2，反应 8）是表 6.3 中唯一一行辅因子写着「无」的。这与它的化学过程相符：它只是把水加到延胡索酸的双键上，既没有氧化还原步骤，也不需要金属或核苷酸来携带什么。"
    },
    {
      type: "mcq",
      q_en: "One row of Tab. 6.3 is printed by the book itself in quotation marks and given no EC number. Which is it, and what is unusual about its cofactor entry?",
      q_cn: "表 6.3 中有一行是教材自己加了引号、并且没有给 EC 编号的。是哪一行？它的辅因子栏有什么特别？",
      options: [
        "Reaction 1, citrate synthase — its only cofactor is CoA",
        "Reaction 5, '2-oxoglutarate oxidase' — six cofactors: TDP, CoA, FAD, NAD⁺, lipoic acid and Mg²⁺",
        "Reaction 6, succinyl-CoA synthetase — its cofactors are CoA and GDP",
        "Reaction 3, aconitase — it repeats an enzyme already listed in reaction 2"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1", 2: "6-2-2-3", 3: "6-2-2-2" },
      optionNotes: {
        0: { en: "Citrate synthase is printed normally, with EC 4.1.3.7 and CoA; what is special about it is that the book calls it a regulatory enzyme.", cn: "citrate synthase 是正常排印的，有 EC 4.1.3.7 和 CoA；它的特别之处在于教材称它为调节性酶。" },
        2: { en: "Succinyl-CoA synthetase does have an EC number (6.2.1.4); its notable feature is that its product is GTP, not ATP.", cn: "succinyl-CoA synthetase 是有 EC 编号的（6.2.1.4）；它值得注意的地方是产物为 GTP 而非 ATP。" },
        3: { en: "Reaction 3 also carries no separate EC number, but for a different reason: it is the same physical enzyme as row 2, whose dehydration and rehydration sub-steps get separate row numbers.", cn: "反应 3 确实也没有单独的 EC 编号，但原因不同：它与第 2 行是同一个酶蛋白，只是脱水和加水两个子步骤被分别编号。" }
      },
      why_en: "Reaction 5 is printed as '2-oxoglutarátoxidasa', in the book's own quotation marks and without an EC number, and it carries the longest cofactor list in the table — six: TDP, CoA, FAD, NAD⁺, lipoic acid and Mg²⁺. That set is the same one the book uses for pyruvate's oxidative decarboxylation, which is the clue that the two reactions share a mechanism.",
      why_cn: "反应 5 印成「2-oxoglutarátoxidasa」，引号是教材自己加的，也没有 EC 编号，而且它的辅因子是全表最长的一串——六种：TDP、CoA、FAD、NAD⁺、硫辛酸、Mg²⁺。这一套与教材写 pyruvate 氧化脱羧时用的完全相同，正是两个反应共享机制的线索。"
    },
    {
      type: "short",
      q_en: "Per Obr. 6.3, list everything one turn of the citrate cycle releases, and say at which numbered steps each item appears.",
      q_cn: "按图 6.3，列出 citrate cycle 转一圈释放出的全部产物，并说明各自出现在哪一个编号的步骤。",
      accept: ["2 CO2", "CO₂", "3 NADH", "NADH", "FADH2", "FADH₂", "GTP", "④", "⑤", "⑦", "⑥", "⑨", "4", "5", "6", "7", "9"],
      answer_en: "Per turn the cycle releases two CO₂, three NADH, one FADH₂ and one GTP. The CO₂ leaves only at reactions ④ (isocitrate to 2-oxoglutarate) and ⑤ (2-oxoglutarate to succinyl-CoA); NADH is made at ④, ⑤ and ⑨ (malate to oxaloacetate); FADH₂ at ⑦ (succinate to fumarate); GTP at ⑥ (succinyl-CoA to succinate). Two carbons enter as acetyl and exactly two leave as CO₂, so the carbon balance is net zero.",
      answer_cn: "每转一圈，循环释放 2 个 CO₂、3 个 NADH、1 个 FADH₂ 和 1 个 GTP。CO₂ 只在反应 ④（isocitrate → 2-oxoglutarate）和 ⑤（2-oxoglutarate → succinyl-CoA）两处离开；NADH 在 ④、⑤、⑨（malate → oxaloacetate）生成；FADH₂ 在 ⑦（succinate → fumarate）生成；GTP 在 ⑥（succinyl-CoA → succinate）生成。2 个碳以乙酰基形式进入，恰好 2 个碳以 CO₂ 形式离开，碳平衡净值为零。"
    }
  ],

  "6-2-2-2": [
    {
      type: "mcq",
      q_en: "Why must citrate be isomerised to isocitrate before the cycle can oxidise it further?",
      q_cn: "为什么柠檬酸必须先异构为异柠檬酸，循环才能继续把它氧化下去？",
      options: [
        "Citrate's hydroxyl sits on a tertiary carbon and cannot be oxidised; isocitrate's is on a secondary carbon and can be dehydrogenated",
        "Citrate has three carboxyl groups and must lose one before any oxidation is possible",
        "Aconitase oxidises citrate, and that oxidation is what produces the first NADH",
        "Citrate cannot bind NAD⁺ because it carries no phosphate group"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-2-1" },
      optionNotes: {
        1: { en: "Citrate does have three carboxyls — that is why the cycle is also called the tricarboxylic acid cycle — but the obstacle here is the tertiary alcohol, not the carboxyl count. The first CO₂ leaves only after the isomerisation.", cn: "柠檬酸确实有三个羧基——这正是循环又叫三羧酸循环的原因——但这里的障碍是叔醇，不是羧基数目。第一个 CO₂ 要等异构化之后才离开。" },
        2: { en: "No net redox happens across aconitase's two sub-steps at all; it removes water and adds it back. The first NADH comes at reaction ④, from isocitrate dehydrogenase.", cn: "aconitase 的两个子步骤根本没有净的氧化还原；它只是先脱水再加水。第一个 NADH 出现在反应 ④，由 isocitrate dehydrogenase 生成。" },
        3: { en: "Nothing in the node makes phosphate a condition for NAD⁺-linked dehydrogenation; the deciding feature is whether the carbon bearing the -OH still has a hydrogen to lose.", cn: "本节没有任何地方把磷酸当作 NAD⁺ 依赖脱氢的条件；决定性的是带 -OH 的那个碳上还有没有氢可以失去。" }
      },
      why_en: "A tertiary alcohol has no hydrogen left on the carbinol carbon, so it cannot be turned into a carbonyl without breaking a C-C bond. Isomerisation moves the hydroxyl onto a carbon that still carries a hydrogen — a secondary alcohol — and only then can isocitrate dehydrogenase do its work.",
      why_cn: "叔醇的那个碳上已经没有氢，不断裂 C-C 键就无法变成羰基。异构化把羟基挪到一个仍带氢的碳上，成为仲醇，之后 isocitrate dehydrogenase 才有活可干。"
    },
    {
      type: "mcq",
      q_en: "The book draws oxalosuccinate inside SQUARE BRACKETS. What is it signalling?",
      q_cn: "教材把 oxalosuccinate 画在方括号里。这是在提示什么？",
      options: [
        "That it is a 2-oxo acid, like pyruvate",
        "That it is a transient, non-isolable enzyme-bound intermediate rather than a free metabolite",
        "That its structure has not been determined",
        "That it leaves the mitochondrion before decarboxylating"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-2" },
      optionNotes: {
        0: { en: "It is a 3-oxo (β-keto) acid, which is exactly why it decarboxylates spontaneously. The 2-oxo acids here are pyruvate and 2-oxoglutarate, whose decarboxylation is oxidative and enzyme-driven.", cn: "它是 3-氧代（β-酮）酸，这正是它会自发脱羧的原因。这里的 2-氧代酸是 pyruvate 和 2-oxoglutarate，它们的脱羧是氧化性的、由酶驱动。" },
        2: { en: "The book prints its full structure (O=C-COO⁻ / CH-COO⁻ / CH₂-COO⁻); the brackets are about its lifetime, not about uncertainty.", cn: "教材把它的完整结构都画了出来（O=C-COO⁻ / CH-COO⁻ / CH₂-COO⁻）；括号讲的是它的存在时间，而不是结构不确定。" },
        3: { en: "It never gets that far — the whole point is that it decarboxylates spontaneously and exergonically the moment it forms, on the enzyme.", cn: "它根本走不到那一步——关键就在于它一生成就在酶上自发、放能地脱羧了。" }
      },
      why_en: "Isocitrate dehydrogenase oxidises isocitrate's secondary -OH to a ketone, and the resulting oxalosuccinate is so unstable — one carboxyl sits β to the new carbonyl — that it decarboxylates spontaneously to 2-oxoglutarate. The square brackets are the book's way of saying: this species exists on the enzyme, not in the metabolite pool.",
      why_cn: "isocitrate dehydrogenase 把异柠檬酸的仲羟基氧化成酮基，生成的 oxalosuccinate 极不稳定——有一个羧基正好位于新羰基的 β 位——因此会自发脱羧生成 2-oxoglutarate。方括号是教材在表示：这个物种存在于酶上，而不在代谢物库里。"
    },
    {
      type: "mcq",
      q_en: "Both reaction ④ and reaction ⑤ release a CO₂. Which statement correctly distinguishes them?",
      q_cn: "反应 ④ 和反应 ⑤ 都释放一个 CO₂。下面哪一句正确地区分了两者？",
      options: [
        "④ is an oxidative decarboxylation needing six cofactors, while ⑤'s CO₂ comes off spontaneously from a β-keto acid",
        "④'s CO₂ comes off spontaneously from the β-keto acid oxalosuccinate after an NAD⁺-linked oxidation, while ⑤ is an oxidative decarboxylation of a 2-oxo acid needing six cofactors",
        "④ produces FADH₂ and ⑤ produces NADH",
        "④ releases CO₂ but ⑤ releases the cycle's GTP instead"
      ],
      answer: 1,
      optionRefs: { 2: "6-2-2-3", 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "The two halves are swapped. The six-cofactor system (TDP, CoA, FAD, NAD⁺, lipoic acid, Mg²⁺) belongs to reaction ⑤, and the spontaneous β-keto decarboxylation to reaction ④.", cn: "两半调换了。六辅因子体系（TDP、CoA、FAD、NAD⁺、硫辛酸、Mg²⁺）属于反应 ⑤，自发的 β-酮酸脱羧属于反应 ④。" },
        2: { en: "Both ④ and ⑤ generate NADH. The cycle's only FADH₂ comes from reaction ⑦, succinate dehydrogenase.", cn: "④ 和 ⑤ 生成的都是 NADH。循环中唯一的 FADH₂ 来自反应 ⑦，即 succinate dehydrogenase。" },
        3: { en: "GTP is made at reaction ⑥, by succinyl-CoA synthetase, one step after the last CO₂ has already left.", cn: "GTP 在反应 ⑥ 由 succinyl-CoA synthetase 生成，那时最后一个 CO₂ 已经离开了一步。" }
      },
      why_en: "At ④, NAD⁺-linked oxidation of isocitrate makes the β-keto acid oxalosuccinate, and 3-oxo acids decarboxylate by themselves, exergonically. At ⑤, 2-oxoglutarate — a homologue of pyruvate — undergoes a genuine oxidative decarboxylation by the same mechanism as pyruvate, needing the full six-cofactor set. Both give NADH, and together they account for the cycle's entire carbon loss.",
      why_cn: "在 ④，NAD⁺ 依赖的氧化把异柠檬酸变成 β-酮酸 oxalosuccinate，而 3-氧代酸会自己放能脱羧。在 ⑤，2-oxoglutarate 作为 pyruvate 的同系物，按与 pyruvate 相同的机制进行真正的氧化脱羧，需要完整的六种辅因子。两步都生成 NADH，加起来构成了循环全部的碳损失。"
    },
    {
      type: "short",
      q_en: "List the six cofactors Tab. 6.3 gives for reaction 5, and say what that list is evidence for.",
      q_cn: "列出表 6.3 为反应 5 给出的六种辅因子，并说明这一串辅因子能佐证什么。",
      accept: ["TDP", "thiamine", "CoA", "FAD", "NAD", "lipoic", "Mg", "pyruvate", "same mechanism", "硫辛酸", "丙酮酸", "相同机制"],
      answer_en: "Reaction 5 needs TDP (thiamine diphosphate), CoA, FAD, NAD⁺, lipoic acid and Mg²⁺ — six in all, the longest list in the table. It is the same cofactor set the book uses for the oxidative decarboxylation of pyruvate, which is consistent with its statement that 2-oxoglutarate's oxidative decarboxylation runs by the same mechanism, 2-oxoglutarate being a homologue of pyruvate.",
      answer_cn: "反应 5 需要 TDP（焦磷酸硫胺素）、CoA、FAD、NAD⁺、硫辛酸和 Mg²⁺，共六种，是表中最长的一串。这与教材写 pyruvate 氧化脱羧时用的辅因子完全相同，正好印证了它的说法：2-oxoglutarate 的氧化脱羧走的是同一套机制，因为 2-oxoglutarate 是 pyruvate 的同系物。"
    }
  ],

  "6-2-2-3": [
    {
      type: "mcq",
      q_en: "The book stresses that succinyl-CoA is NOT simply hydrolysed to succinate. What happens instead, and why does it matter?",
      q_cn: "教材强调 succinyl-CoA 转变为 succinate 并不是简单的水解。那实际发生的是什么？为什么重要？",
      options: [
        "It is hydrolysed, and the energy of the thioester is released as heat",
        "It reacts with GDP and inorganic phosphate, so the thioester's energy is conserved as GTP",
        "It reacts with ATP, which donates the phosphate that ends up in GTP",
        "It is oxidised by succinate dehydrogenase, which is what makes the cycle's FADH₂"
      ],
      answer: 1,
      optionRefs: { 3: "6-2-2-3" },
      optionNotes: {
        0: { en: "Simple hydrolysis is exactly what does NOT happen — that would waste a macroergic compound's energy, which is why the book contrasts the two routes.", cn: "简单水解正是没有发生的事——那会白白浪费掉一个高能化合物的能量，教材把两条路线对比出来就是为了这一点。" },
        2: { en: "Direction reversed. ATP is not a reactant here; the terminal phosphate of the GTP made at this step can afterwards be transferred TO ADP, in the separate reaction GTP + ADP ⇌ GDP + ATP.", cn: "方向反了。ATP 不是这里的反应物；这一步生成的 GTP，其末端磷酸随后才可以转给 ADP，那是另一个独立反应 GTP + ADP ⇌ GDP + ATP。" },
        3: { en: "That is the next reaction, ⑦: succinate dehydrogenase oxidises succinate (not succinyl-CoA) to trans-fumarate, producing FADH₂.", cn: "那是下一个反应 ⑦：succinate dehydrogenase 把 succinate（不是 succinyl-CoA）氧化成反式 fumarate，生成 FADH₂。" }
      },
      why_en: "Succinyl-CoA is a macroergic compound, and succinyl-CoA synthetase captures rather than discards that energy: succinyl~S-CoA + Pᵢ + GDP → succinate + GTP + CoA-SH. The direct product is GTP, not ATP; converting it to ATP is a separate, later reaction.",
      why_cn: "succinyl-CoA 是高能化合物，succinyl-CoA synthetase 的做法是把这份能量留住而不是丢掉：succinyl~S-CoA + Pᵢ + GDP → succinate + GTP + CoA-SH。直接产物是 GTP，不是 ATP；转成 ATP 是后面另一个独立反应。"
    },
    {
      type: "mcq",
      q_en: "How is the figure of 12 ATP per acetyl-CoA oxidised actually assembled?",
      q_cn: "每氧化一个 acetyl-CoA 得到 12 个 ATP，这个数字是怎么加出来的？",
      options: [
        "3 NADH × 3 ATP + 1 FADH₂ × 2 ATP + 1 GTP counted as ATP",
        "4 NADH × 3 ATP, all of it from NADH",
        "3 NADH × 3 ATP + 1 FADH₂ × 2 ATP, with the GTP not counted",
        "2 turns of the cycle, 6 ATP each"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-4-1" },
      optionNotes: {
        1: { en: "The cycle has four dehydrogenation steps but only three of them make NADH; the fourth, succinate dehydrogenase, makes FADH₂, which is worth only about 2 ATP.", cn: "循环有四个脱氢步骤，但只有三个生成 NADH；第四个是 succinate dehydrogenase，生成 FADH₂，只值约 2 个 ATP。" },
        2: { en: "That arithmetic gives 11. The GTP is counted, because its terminal phosphate can be transferred to ADP.", cn: "这样算只有 11。GTP 是要算进去的，因为它的末端磷酸可以转给 ADP。" },
        3: { en: "Two turns is the glucose-level bookkeeping: 2 × 12 = 24 ATP from the citrate cycle, part of the 38 per glucose.", cn: "两圈是按葡萄糖算账时的说法：2 × 12 = 24 个 ATP 来自 citrate cycle，是每摩尔葡萄糖 38 个中的一部分。" }
      },
      why_en: "The respiratory chain regenerates NADH and FADH₂ at approximately 3 ATP per NADH and 2 per FADH₂. One turn yields 3 NADH (9 ATP), 1 FADH₂ (2 ATP) and 1 GTP convertible to ATP (1), giving the summary equation's 12 ATP per acetyl-CoA.",
      why_cn: "呼吸链使 NADH 和 FADH₂ 再生时，大约每个 NADH 产 3 个 ATP、每个 FADH₂ 产 2 个。转一圈得到 3 个 NADH（9 个 ATP）、1 个 FADH₂（2 个 ATP）、1 个可转成 ATP 的 GTP（1 个），加起来就是总反应式里每个 acetyl-CoA 的 12 个 ATP。"
    },
    {
      type: "mcq",
      q_en: "The book explicitly compares fumarase's reaction to one earlier step of the citrate cycle. Which one, and on what grounds?",
      q_cn: "教材明确把 fumarase 的反应与循环中较早的某一步作类比。是哪一步？依据是什么？",
      options: [
        "Reaction 2, citrate's dehydration to cis-aconitate — both remove a water molecule",
        "Reaction 3, cis-aconitate + H₂O → isocitrate — in both cases water is added across a double bond",
        "Reaction 9, malate dehydrogenase — both close the cycle",
        "Reaction 1, citrate synthase — both form a carbon-carbon bond"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-2", 2: "6-2-2-3", 3: "6-2-2-1" },
      optionNotes: {
        0: { en: "That is the opposite operation: reaction 2 REMOVES water to create the double bond that reaction 3 then hydrates. Fumarase adds water, so it matches reaction 3.", cn: "那是相反的操作：反应 2 是脱水、造出双键，反应 3 再把水加回去。fumarase 是加水，所以对应的是反应 3。" },
        2: { en: "Malate dehydrogenase is a redox step, using NAD⁺; fumarase's reaction involves no oxidation or reduction at all.", cn: "malate dehydrogenase 是用 NAD⁺ 的氧化还原步骤；fumarase 的反应完全不涉及氧化或还原。" },
        3: { en: "Citrate synthase makes a C-C bond by aldol condensation, a different chemistry entirely; it is also the step the book calls regulatory.", cn: "citrate synthase 通过羟醛缩合形成 C-C 键，是完全不同的化学；那一步也正是教材称为调节性的步骤。" }
      },
      why_en: "Fumarate is formed as the trans isomer and fumarase converts it to L-malate by adding water across the double bond — exactly the chemistry of the cycle's third reaction, where water adds across cis-aconitate's double bond to give isocitrate. Both are hydrations, neither is a redox step, and fumarase is listed in Tab. 6.3 with no cofactor at all.",
      why_cn: "fumarate 以反式异构体形式生成，fumarase 把水加到双键上使其变为 L-malate——这正是循环第三个反应的化学：水加到 cis-aconitate 的双键上生成 isocitrate。两者都是水合，都不是氧化还原步骤；而且表 6.3 中 fumarase 的辅因子栏是「无」。"
    },
    {
      type: "short",
      q_en: "The book says only about 40% of glucose's energy is captured. Which two numbers does it compare, and what happens to the remainder?",
      q_cn: "教材说葡萄糖的能量只有约 40% 被捕获。它比较的是哪两个数？剩下的去了哪里？",
      accept: ["1159", "2870", "38", "40", "not captured", "heat", "ATP", "未被捕获", "热"],
      answer_en: "The 38 mol ATP obtainable from one mole of glucose (8 from glycolysis, 6 from the oxidative decarboxylation of the two pyruvates, 24 from two turns of the citrate cycle) corresponds to about 1159 kJ, against the ΔG⁰′ of −2870 kJ·mol⁻¹ for complete oxidation of glucose to CO₂. That is roughly 40%; the remaining ~60% is simply not captured as ATP.",
      answer_cn: "1 摩尔葡萄糖最多可得 38 摩尔 ATP（glycolysis 8 个、两个 pyruvate 的氧化脱羧 6 个、citrate cycle 两圈 24 个），相当于约 1159 kJ；而葡萄糖完全氧化为 CO₂ 的 ΔG⁰′ 是 −2870 kJ·mol⁻¹。两者之比约 40%，其余约 60% 并没有以 ATP 的形式被捕获。"
    }
  ],

  "6-2-2-4": [
    {
      type: "mcq",
      q_en: "Which reaction does pyruvate carboxylase actually catalyse?",
      q_cn: "pyruvate carboxylase 实际催化的是哪个反应？",
      options: [
        "oxaloacetate → pyruvate + CO₂, releasing the carbon the cycle took in",
        "pyruvate + CO₂ + ATP + H₂O → oxaloacetate + ADP + Pᵢ",
        "oxaloacetate + GTP → phosphoenolpyruvate + CO₂ + GDP",
        "acetyl-CoA + CO₂ → malonyl-CoA"
      ],
      answer: 1,
      optionRefs: { 2: "7-9", 3: "8-3-1" },
      optionNotes: {
        0: { en: "Direction reversed. The whole purpose of an anaplerotic reaction is to ADD oxaloacetate, not to consume it — a decarboxylation would make the shortage worse.", cn: "方向反了。回补反应的全部目的就是把 oxaloacetate 补上去，而不是消耗它——脱羧只会让短缺更严重。" },
        2: { en: "That is the gluconeogenic step out of the cycle, taking oxaloacetate toward PEP; it belongs to glucose resynthesis, not to replenishment.", cn: "那是通向 gluconeogenesis 的一步，把 oxaloacetate 引向 PEP；它属于葡萄糖再合成，而不是回补。" },
        3: { en: "Malonyl-CoA formation is the committed carboxylation of fatty-acid biosynthesis — a different carboxylase with a different substrate and product.", cn: "malonyl-CoA 的生成是脂肪酸生物合成中那一步定向的羧化——是另一个羧化酶，底物和产物都不同。" }
      },
      why_en: "The most important anaplerotic reaction forms oxaloacetate directly from pyruvate and CO₂: pyruvate + CO₂ + ATP + H₂O → oxaloacetate + ADP + Pᵢ, requiring ATP, Mn²⁺ and the coenzyme biotin. It puts a four-carbon acid back into the cycle, which is exactly what withdrawal of intermediates has taken out.",
      why_cn: "最重要的回补反应是直接由 pyruvate 和 CO₂ 生成 oxaloacetate：pyruvate + CO₂ + ATP + H₂O → oxaloacetate + ADP + Pᵢ，需要 ATP、Mn²⁺ 和辅酶 biotin。它把一个四碳酸补回循环里，补的正是中间体被抽走所亏掉的那部分。"
    },
    {
      type: "mcq",
      q_en: "If 2-oxoglutarate is continually transaminated away to glutamate, which compound's level does the book say is ultimately threatened?",
      q_cn: "如果 2-oxoglutarate 不断被转氨基取走去生成 glutamate，教材说最终受到威胁的是哪种化合物的水平？",
      options: [
        "Acetyl-CoA, because it can no longer enter the cycle",
        "Oxaloacetate, the cycle's starting substance, which can fall below a workable level",
        "CO₂, because fewer decarboxylation steps are reached",
        "NAD⁺, because fewer dehydrogenations occur"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1", 3: "6-2-4-1" },
      optionNotes: {
        0: { en: "Acetyl-CoA's supply comes from outside the cycle — from pyruvate, from alanine transamination, and abundantly from fatty-acid β-oxidation — so withdrawal of an intermediate does not cut it off.", cn: "acetyl-CoA 的供应来自循环之外——来自 pyruvate、alanine 转氨基，以及大量来自脂肪酸 β-oxidation——所以抽走中间体并不会切断它。" },
        2: { en: "CO₂ is an output, not a reserve that can run short; it leaves at reactions ④ and ⑤ and the cycle is never limited by it.", cn: "CO₂ 是产物，不是会短缺的储备；它在反应 ④ 和 ⑤ 离开，循环从不会因它而受限。" },
        3: { en: "NAD⁺ is regenerated by the respiratory chain, not by the cycle itself; the book's concern here is the carbon skeleton that has to condense with each new acetyl group.", cn: "NAD⁺ 由呼吸链再生，不是由循环本身再生；教材这里担心的是每一圈都要与新乙酰基缩合的那个碳骨架。" }
      },
      why_en: "Withdrawing any intermediate for biosynthesis progressively drains the pool, and the book names oxaloacetate specifically: as the starting substance that must be present to condense with each incoming acetyl-CoA, its amount can fall below a workable level and stop the cycle. Anaplerotic reactions exist to top it back up.",
      why_cn: "为生物合成抽走任何一个中间体，都会逐步消耗整个库存，而教材点名的是 oxaloacetate：它是每一圈都必须在场、去与新进来的 acetyl-CoA 缩合的起始物质，其数量一旦降到难以维持的水平，循环就会停摆。回补反应存在的意义就是把它补回来。"
    },
    {
      type: "short",
      q_en: "The book calls replenishing reactions 'doplňovací'. Explain what problem they solve and what would follow without them.",
      q_cn: "教材把补充性反应称为「doplňovací」。解释它们要解决什么问题，以及没有它们会怎样。",
      accept: ["anaplerotic", "replenish", "oxaloacetate", "withdraw", "biosynthes", "pyruvate carboxylase", "回补", "补充", "草酰乙酸", "抽走", "生物合成"],
      answer_en: "Because the cycle also feeds biosyntheses — 2-oxoglutarate transaminated to glutamate, succinyl-CoA taken for porphyrin synthesis — intermediates are constantly being withdrawn, and that lets oxaloacetate fall below a workable level. Anaplerotic ('doplňovací') reactions replenish the pool so the cycle can keep running uninterrupted; without them the cycle would eventually stall for want of the starting compound. The most important one is pyruvate carboxylase's, forming oxaloacetate from pyruvate and CO₂ with ATP, Mn²⁺ and biotin.",
      answer_cn: "由于循环同时还在为生物合成供料——2-oxoglutarate 转氨基生成 glutamate、succinyl-CoA 被取去合成 porphyrin——中间体不断被抽走，oxaloacetate 就会降到难以维持的水平。回补（doplňovací，anaplerotic）反应负责把库存补上，好让循环不间断地运转；没有它们，循环最终会因缺少起始物质而停下来。最重要的一个是 pyruvate carboxylase 催化的反应：由 pyruvate 和 CO₂ 生成 oxaloacetate，需要 ATP、Mn²⁺ 和 biotin。"
    }
  ],

  "6-2-3": [
    {
      type: "mcq",
      q_en: "Which pair of enzymes is unique to the glyoxylate cycle — the two the whole pathway is 'based on'?",
      q_cn: "哪一对酶是乙醛酸循环所独有的——也就是整条途径所「基于」的那两个反应的酶？",
      options: [
        "Citrate synthase and aconitase",
        "Isocitrate lyase and malate synthase",
        "Succinate dehydrogenase and fumarase",
        "Isocitrate dehydrogenase and 2-oxoglutarate oxidase"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1", 2: "6-2-2-3", 3: "6-2-2-2" },
      optionNotes: {
        0: { en: "Both are borrowed from the citrate cycle: Obr. 6.5 uses them to build citrate from oxaloacetate plus the first acetyl-CoA and isomerise it to isocitrate.", cn: "这两个都是从 citrate cycle 借来的：图 6.5 用它们把 oxaloacetate 与第一分子 acetyl-CoA 建成 citrate，再异构为 isocitrate。" },
        2: { en: "Also borrowed: they process the succinate co-product of isocitrate lyase onward toward a second malate/oxaloacetate.", cn: "同样是借用的：它们把 isocitrate lyase 产生的副产物 succinate 继续加工，通向第二个 malate/oxaloacetate。" },
        3: { en: "These are precisely the two reactions the glyoxylate cycle BYPASSES — the citrate cycle's two CO₂-releasing steps, ④ and ⑤.", cn: "这两个恰恰是乙醛酸循环所绕过的反应——citrate cycle 中释放 CO₂ 的 ④ 和 ⑤ 两步。" }
      },
      why_en: "Isocitrate lyase cleaves isocitrate straight into glyoxylate + succinate, and malate synthase condenses that glyoxylate with a second acetyl-CoA to give malate. Everything else in the pathway is reused citrate-cycle machinery; those two reactions are what distinguish the two cycles from each other.",
      why_cn: "isocitrate lyase 把 isocitrate 直接裂解为 glyoxylate + succinate，malate synthase 再把这个 glyoxylate 与第二分子 acetyl-CoA 缩合生成 malate。途径中其余部分都是重复利用 citrate cycle 的机器；正是这两个反应把两个循环区分开。"
    },
    {
      type: "mcq",
      q_en: "How many molecules of acetyl-CoA does one turn of the glyoxylate cycle consume, and where?",
      q_cn: "乙醛酸循环转一圈消耗几分子 acetyl-CoA？分别在哪里消耗？",
      options: [
        "One, at citrate synthase, exactly as in the citrate cycle",
        "Two — one condensing with oxaloacetate at citrate synthase, one condensing with glyoxylate at malate synthase",
        "Two, both consumed by malate synthase",
        "None — the cycle synthesises acetyl-CoA rather than consuming it"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-1" },
      optionNotes: {
        0: { en: "One acetyl-CoA per turn is the citrate cycle's stoichiometry; the second condensation, at malate synthase, is exactly what the glyoxylate cycle adds.", cn: "每圈一分子 acetyl-CoA 是 citrate cycle 的化学计量；乙醛酸循环多出来的正是 malate synthase 那第二次缩合。" },
        2: { en: "Malate synthase takes only one; the other is consumed at the start, condensing with oxaloacetate to build citrate.", cn: "malate synthase 只用掉一分子；另一分子是在开头与 oxaloacetate 缩合生成 citrate 时用掉的。" },
        3: { en: "The opposite: acetyl-CoA is the input. What the cycle synthesises net is a four-carbon dicarboxylic acid, oxaloacetate.", cn: "正好相反：acetyl-CoA 是输入。循环净合成出来的是四碳二羧酸 oxaloacetate。" }
      },
      why_en: "The overall equation takes in 2 acetyl-CoA and releases no CO₂ at all: the first condenses with oxaloacetate (citrate synthase), the second with glyoxylate (malate synthase). Four carbons in, none lost, so one new four-carbon oxaloacetate is netted per turn — a genuine gain of carbon skeleton that the plain citrate cycle can never achieve.",
      why_cn: "总反应式摄入 2 分子 acetyl-CoA，完全不释放 CO₂：第一分子与 oxaloacetate 缩合（citrate synthase），第二分子与 glyoxylate 缩合（malate synthase）。4 个碳进来、一个也不丢，所以每圈净得一个新的四碳 oxaloacetate——这是普通 citrate cycle 永远做不到的真正的碳骨架增益。"
    },
    {
      type: "mcq",
      q_en: "The book says 8 mol ATP arise per turn of the glyoxylate cycle. Which count does that correspond to?",
      q_cn: "教材说乙醛酸循环每圈产生 8 摩尔 ATP。这个数字对应的是哪一组计数？",
      options: [
        "2 NADH × 3 ATP + 1 FADH₂ × 2 ATP",
        "3 NADH × 3 ATP − 1 GTP",
        "12 ATP, as for one turn of the citrate cycle",
        "38 ATP, as for one mole of glucose"
      ],
      answer: 0,
      optionRefs: { 2: "6-2-2-3", 3: "6-2-2-3" },
      optionNotes: {
        1: { en: "The glyoxylate cycle's overall equation makes 2 NADH, not 3, and no GTP at all — the substrate-level phosphorylation step is not part of it.", cn: "乙醛酸循环的总反应式生成 2 个 NADH 而不是 3 个，也完全没有 GTP——底物水平磷酸化那一步不在其中。" },
        2: { en: "12 is the citrate cycle's yield per acetyl-CoA (3 NADH + 1 FADH₂ + 1 GTP), for a turn that also loses two carbons as CO₂.", cn: "12 是 citrate cycle 每个 acetyl-CoA 的产量（3 NADH + 1 FADH₂ + 1 GTP），而那一圈同时要以 CO₂ 形式丢掉两个碳。" },
        3: { en: "38 is the whole-glucose figure: 8 from glycolysis + 6 from pyruvate's oxidative decarboxylation + 24 from two citrate-cycle turns.", cn: "38 是整摩尔葡萄糖的数字：glycolysis 8 + 两个 pyruvate 氧化脱羧 6 + citrate cycle 两圈 24。" }
      },
      why_en: "The overall equation produces 2 NADH and 1 FADH₂, and applying the same ratios used earlier — about 3 ATP per NADH, 2 per FADH₂ — gives 6 + 2 = 8 mol ATP. The lower yield is the price of the bypass: skipping the two decarboxylations is what saves the carbon.",
      why_cn: "总反应式生成 2 个 NADH 和 1 个 FADH₂，套用前面同样的比例——每个 NADH 约 3 个 ATP、每个 FADH₂ 约 2 个——得到 6 + 2 = 8 摩尔 ATP。产量偏低正是走旁路的代价：省下碳，靠的就是跳过那两个脱羧步骤。"
    },
    {
      type: "short",
      q_en: "The book gives two concrete significances for the glyoxylate cycle. What are they, and what capability do both rest on?",
      q_cn: "教材为乙醛酸循环给出了两个具体的意义。分别是什么？两者共同依赖的是什么能力？",
      accept: ["bacteria", "acetate", "carbon source", "oil seed", "germinat", "fatty acid", "carbohydrate", "net", "细菌", "乙酸", "碳源", "油料种子", "萌发", "脂肪酸", "糖类", "净"],
      answer_en: "First, it is why many bacteria can grow on acetate, or other acetyl-CoA-yielding compounds, as their carbon source. Second, it is why germinating oil-seed plants can break down their stored fatty acids and obtain the carbohydrates and energy they need from the resulting acetyl-CoA. Both rest on the same capability: because no CO₂ is released, two acetyl-CoA yield one net four-carbon oxaloacetate, so acetyl-CoA can be turned into net new carbon skeleton.",
      answer_cn: "第一，它使许多细菌能够以乙酸或其他能产生 acetyl-CoA 的化合物作为碳源生长。第二，它使萌发的油料种子在分解储存的脂肪酸之后，能从生成的 acetyl-CoA 获得所需的糖类和能量。两者依赖的是同一种能力：因为完全不释放 CO₂，2 分子 acetyl-CoA 净得 1 个四碳 oxaloacetate，于是 acetyl-CoA 可以转化成净新增的碳骨架。"
    }
  ],

  "6-2-4-1": [
    {
      type: "mcq",
      q_en: "Which three components does the book name as the MOBILE parts of the respiratory chain?",
      q_cn: "教材把呼吸链的哪三个组分称为「可移动」组分？",
      options: [
        "FMN, the FeS proteins and cytochrome b",
        "NADH, ubiquinol (dihydroubiquinone, coenzyme Q) and cytochrome c",
        "ATP, ADP and inorganic phosphate",
        "Cytochrome c₁, cytochrome a and cytochrome a₃"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-4-2", 2: "6-2-4-5", 3: "6-2-4-4" },
      optionNotes: {
        0: { en: "These are prosthetic groups fixed inside their complexes: FMN and the FeS clusters belong to Complex I, cytochrome b to Complex III.", cn: "这些是固定在各自复合物内部的辅基：FMN 和 FeS 簇属于复合物 I，cytochrome b 属于复合物 III。" },
        2: { en: "ATP, ADP and Pᵢ are the substrates and products of the phosphorylation complex, not carriers within the electron-transport chain.", cn: "ATP、ADP 和 Pᵢ 是磷酸化复合物的底物与产物，不是电子传递链内部的载体。" },
        3: { en: "Cytochrome c₁ is membrane-bound within Complex III, and cytochromes a/a₃ are functional units of Complex IV; only the small cytochrome c moves.", cn: "cytochrome c₁ 是结合在复合物 III 中的膜结合成分，cytochrome a/a₃ 是复合物 IV 的功能单位；能移动的只有那个小小的 cytochrome c。" }
      },
      why_en: "Five multienzyme lipoprotein complexes are integral membrane components and form the chain's fixed basic units; the parts that actually travel between them are NADH, ubiquinol (sometimes called coenzyme Q) and cytochrome c. Distinguishing fixed from mobile is what makes the chain's geometry — and therefore its vectorial proton transfer — intelligible.",
      why_cn: "五个多酶脂蛋白复合物是膜的整合组分，构成呼吸链固定的基本单位；真正在它们之间往返的是 NADH、泛醇（有时称 coenzyme Q）和 cytochrome c。分清「固定」与「可移动」，才能看懂这条链的几何结构，也才能理解它的矢量式质子转移。"
    },
    {
      type: "mcq",
      q_en: "The book says the membrane-embedded enzyme system has a 'vectorial character'. What does it say this makes possible?",
      q_cn: "教材说嵌在膜中的酶系统具有「矢量特性」。它说这一特性使什么成为可能？",
      options: [
        "A higher reaction rate, which is the only thing membrane embedding changes",
        "Electron flow from carriers of higher toward carriers of lower redox potential",
        "Mutual interconversion of chemical energy (ΔG′) and osmotic work — transport of H⁺ against its concentration gradient — linking the oxidoreduction and phosphorylation systems",
        "Free diffusion of ATP out of the mitochondrion"
      ],
      answer: 2,
      optionRefs: { 1: "6-2-1-1", 3: "6-2-4-2" },
      optionNotes: {
        0: { en: "Rate is not the point being made: membrane embedding determines rate AND direction in three-dimensional space, and it is the direction that is new.", cn: "重点不在速率：嵌入膜中既决定速率、也决定在三维空间中的方向，而新增的正是「方向」这一条。" },
        1: { en: "Direction reversed. Electrons pass from carriers of LOWER (more negative) redox potential toward carriers of higher, more positive values, finally to oxygen.", cn: "方向反了。电子是从电位较低（更负）的载体流向电位更高、更正的载体，最终到氧。" },
        3: { en: "Obr. 6.6 shows ATP leaving through a dedicated carrier protein exchanging it for ADP, not by free diffusion.", cn: "图 6.6 显示 ATP 是通过专门的载体蛋白与 ADP 交换而离开的，不是自由扩散。" }
      },
      why_en: "Because the enzymes are built into the membrane rather than dissolved in solution, the system acquires a direction in three-dimensional space, not just a rate. That fixed orientation is what allows chemical energy and osmotic work — pumping H⁺ against its own gradient — to be converted into each other, and it is the connecting link between the cell's two energy-transport systems, the oxidoreduction system and the phosphorylation system.",
      why_cn: "由于这些酶是嵌在膜里而不是溶在溶液中，整个系统获得的不只是速率，还有三维空间中的方向。正是这种固定的取向，使化学能与渗透功（把 H⁺ 逆着自身梯度泵出去）能够相互转化；它也是细胞两大能量传递系统——氧化还原系统与磷酸化系统——之间的连接环节。"
    },
    {
      type: "short",
      q_en: "Where do the electrons entering the respiratory chain finally end up, and in what order of redox potential do they travel to get there?",
      q_cn: "进入呼吸链的电子最终去了哪里？沿途按什么样的氧化还原电位顺序传递？",
      accept: ["oxygen", "O2", "lower", "higher", "more positive", "series", "tab. 6.2", "氧", "较低", "更正", "递增"],
      answer_en: "They end at oxygen. Transfer proceeds as a series of hand-offs from one cofactor to the next, always from carriers of lower redox potential toward carriers of rising, more positive values, the order given in Tab. 6.2 — and the carriers are tied to the structure of the inner mitochondrial membrane, so the sequence is fixed in space as well as in energy.",
      answer_cn: "最终到氧。传递是一棒接一棒地从一个辅因子交到下一个，方向始终是从氧化还原电位较低的载体走向电位不断升高、更正的载体，顺序就是表 6.2 给出的那一串——而且这些载体都固定在内线粒体膜的结构上，所以这个顺序不仅在能量上是确定的，在空间上也是确定的。"
    }
  ],

  "6-2-4-2": [
    {
      type: "mcq",
      q_en: "Which cofactor set does Complex II carry?",
      q_cn: "复合物 II 携带的是哪一组辅因子？",
      options: [
        "FMN plus an Fe₄S₄ and an Fe₂S₂ cluster",
        "FAD plus two Fe₂S₂-type groups",
        "Two b-type hemes plus cytochrome c₁ and an FeS protein",
        "Cytochromes a and a₃ plus copper ions"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-4-2", 2: "6-2-4-3", 3: "6-2-4-4" },
      optionNotes: {
        0: { en: "That is Complex I: the flavoprotein NADH-dehydrogenase with FMN, then Fe₄S₄ on the cytosolic side and Fe₂S₂ on the matrix side.", cn: "那是复合物 I：黄素蛋白 NADH-dehydrogenase 带 FMN，随后是胞质侧的 Fe₄S₄ 和基质侧的 Fe₂S₂。" },
        2: { en: "That is Complex III's redox core — cytochromes bT and bK, cytochrome c₁ and one FeS protein.", cn: "那是复合物 III 的氧化还原核心——cytochrome bT 和 bK、cytochrome c₁ 以及一个 FeS 蛋白。" },
        3: { en: "That is Complex IV, cytochrome oxidase, whose functional units are cytochromes a/a₃ with Cu ions.", cn: "那是复合物 IV，即 cytochrome oxidase，其功能单位是 cytochrome a/a₃ 加铜离子。" }
      },
      why_en: "Complex II, succinate:ubiquinone oxidoreductase, is a flavoprotein with the prosthetic group FAD plus two Fe₂S₂-type groups — and it is the very same succinate dehydrogenase already met as reaction ⑦ of the citrate cycle, seen here as a second entry point into the ubiquinone pool rather than as a cycle step.",
      why_cn: "复合物 II 即 succinate:ubiquinone oxidoreductase，是一种含辅基 FAD 和两个 Fe₂S₂ 型基团的黄素蛋白——它正是 citrate cycle 反应 ⑦ 里那个 succinate dehydrogenase，只不过这里把它看作进入泛醌库的第二个入口，而不是循环的一步。"
    },
    {
      type: "mcq",
      q_en: "In Complex I, which FeS protein sits on the outer (cytosolic) side, and what does it release there?",
      q_cn: "在复合物 I 中，哪个 FeS 蛋白位于外侧（胞质侧）？它在那里释放什么？",
      options: [
        "The Fe₂S₂ protein, releasing electrons to NAD⁺",
        "The Fe₄S₄ protein, which accepts electrons from FMNH₂ and releases protons into the cytosolic (intermembrane) space",
        "The Fe₄S₄ protein, releasing oxide ions",
        "The Fe₂S₂ protein, releasing protons into the matrix"
      ],
      answer: 1,
      optionRefs: { 2: "6-2-4-4" },
      optionNotes: {
        0: { en: "Sides swapped: the Fe₂S₂ protein sits on the opposite, matrix side, and it hands its electrons on to ubiquinone's semiquinone form, not back to NAD⁺.", cn: "两侧弄反了：Fe₂S₂ 蛋白位于相反的基质侧，而且它把电子交给泛醌的半醌形式，不是交回给 NAD⁺。" },
        2: { en: "Oxide ions are made at Complex IV, where oxygen is progressively reduced; Complex I has nothing to do with them.", cn: "氧化物离子是在复合物 IV 生成的，那里氧被逐步还原；复合物 I 与此无关。" },
        3: { en: "Both halves are off: the protons go OUT to the cytosolic side, and it is the Fe₄S₄ protein that releases them.", cn: "两半都不对：质子是向外释放到胞质侧的，而且释放它们的是 Fe₄S₄ 蛋白。" }
      },
      why_en: "On the matrix side, Complex I dehydrogenates NADH via FMN; on the outer, cytosolic side it is reoxidised by an Fe₄S₄-type protein, which takes the electrons from FMNH₂ and releases protons into the intermembrane space. Those electrons then cross to an Fe₂S₂ protein on the opposite, matrix side, which reduces ubiquinone's semiquinone. The alternation of sides is the geometry that makes the proton transfer vectorial.",
      why_cn: "在基质侧，复合物 I 通过 FMN 使 NADH 脱氢；在外侧（胞质侧），它被一个 Fe₄S₄ 型蛋白再氧化，后者从 FMNH₂ 接过电子，并把质子释放到膜间空间。这些电子随后越到相反的基质侧、交给 Fe₂S₂ 蛋白，由它还原泛醌的半醌。正是这种「两侧交替」的几何布局，使质子转移具有矢量性。"
    },
    {
      type: "mcq",
      q_en: "Three components of the chain move, but not in the same way. Which one moves freely DISSOLVED IN the membrane, and why?",
      q_cn: "呼吸链有三个组分会移动，但方式并不相同。哪一个是溶解在膜里自由移动的？为什么？",
      options: [
        "Cytochrome c, because it is small and water-soluble",
        "NADH, because it is not bound to any complex",
        "Ubiquinone, in its semiquinone and ubiquinol forms, because of its hydrophobic character",
        "FMN, because it is only loosely attached to the flavoprotein"
      ],
      answer: 2,
      optionRefs: { 0: "6-2-4-3", 1: "6-2-4-1" },
      optionNotes: {
        0: { en: "Cytochrome c is mobile too, but it slides along the membrane SURFACE in the cytosolic space rather than dissolving in the lipid interior.", cn: "cytochrome c 也是可移动的，但它是在胞质空间里沿着膜的表面「滑动」，并不溶进膜的脂质内部。" },
        1: { en: "NADH is listed among the chain's mobile components, but it is a water-soluble carrier delivering electrons to Complex I, not something dissolved in the bilayer.", cn: "NADH 确实被列为呼吸链的可移动组分，但它是把电子送到复合物 I 的水溶性载体，并不是溶在双层膜里的东西。" },
        3: { en: "FMN is the prosthetic group of the flavoprotein NADH-dehydrogenase, i.e. part of Complex I itself, and does not travel.", cn: "FMN 是黄素蛋白 NADH-dehydrogenase 的辅基，也就是复合物 I 自身的一部分，并不移动。" }
      },
      why_en: "The Fe₂S₂ protein hands its electrons to ubiquinone's semiquinone form, and ubiquinone — thanks to its hydrophobic character — moves freely dissolved within the membrane. That is what lets one shared quinone pool serve both Complex I and Complex II and deliver to Complex III.",
      why_cn: "Fe₂S₂ 蛋白把电子交给泛醌的半醌形式，而泛醌凭借其疏水性，能够溶解在膜中自由移动。正因如此，同一个泛醌库才能同时服务复合物 I 和复合物 II，并把电子送到复合物 III。"
    },
    {
      type: "short",
      q_en: "Obr. 6.6 draws several carrier proteins on the left of the inner membrane, separate from the chain itself. Which ones, and what do they move?",
      q_cn: "图 6.6 在内膜左侧画了几个与呼吸链本身分开的载体蛋白。是哪些？它们各自转运什么？",
      accept: ["malate", "phosphate", "Pi", "ADP", "ATP", "OH", "exchange", "苹果酸", "磷酸", "交换"],
      answer_en: "Obr. 6.6 shows separate carrier proteins for malate, for inorganic phosphate (Pᵢ), and for ADP, which is exchanged for ATP, together with an OH⁻ carrier. They are drawn apart from the folded curve of membrane that carries the chain itself and the F₁/F₀ ATP synthase, making the point that substrates and products have to be moved across the inner membrane by dedicated transporters.",
      answer_cn: "图 6.6 画出了分别负责 malate、无机磷酸（Pᵢ）和 ADP（与 ATP 交换）的载体蛋白，另外还有一个 OH⁻ 载体。它们画在与呼吸链本体和 F₁/F₀ ATP synthase 所在的那段弯曲膜结构分开的位置，说明底物和产物必须靠专门的转运蛋白才能跨过内膜。"
    }
  ],

  "6-2-4-3": [
    {
      type: "mcq",
      q_en: "Complex III contains two cytochrome b molecules. Why do bT and bK differ in redox potential, and which of them can ubiquinol reduce?",
      q_cn: "复合物 III 含有两个 cytochrome b 分子。bT 与 bK 的氧化还原电位为什么不同？泛醇能还原的是哪一个？",
      options: [
        "They carry chemically different hemes; ubiquinol reduces bK",
        "They are bound to different polypeptides; only bT is reducible by ubiquinol",
        "They are bound to different polypeptides; only bK is reducible by ubiquinol, on the matrix side",
        "They have identical potentials, and either can be reduced by ubiquinol"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The book attributes the difference to the polypeptide each is bound to, not to a difference in the heme itself.", cn: "教材把这个差别归于二者各自结合的多肽不同，而不是血红素本身不同。" },
        2: { en: "bK is indeed the one working on the matrix side, but it receives its electron from bT, not from ubiquinol.", cn: "bK 确实是在基质侧起作用的那一个，但它的电子来自 bT，而不是来自泛醇。" },
        3: { en: "If the two potentials were identical there would be no downhill step from bT to bK, and the matrix-side loop that regenerates ubiquinone could not run.", cn: "如果两者电位相同，从 bT 到 bK 就没有下坡的一步，基质侧那个再生泛醌的环路也就跑不起来了。" }
      },
      why_en: "bT and bK differ in redox potential because they are bound to different polypeptides, and only bT is reducible by ubiquinol. That asymmetry sets up the loop: bT passes its electron on to bK, which on the matrix side uses it to reduce ubiquinone back to the semiquinone, consuming one matrix proton.",
      why_cn: "bT 和 bK 因结合的多肽不同而氧化还原电位不同，并且只有 bT 能被泛醇还原。这种不对称正好搭起了那个环路：bT 把电子交给 bK，bK 在基质侧用它把泛醌还原回半醌，同时消耗基质中的一个质子。"
    },
    {
      type: "mcq",
      q_en: "At which point does Complex III take a proton FROM the matrix?",
      q_cn: "复合物 III 在哪一步是从基质取走一个质子的？",
      options: [
        "When ubiquinol is oxidised to the semiquinone by cytochrome bT on the cytosolic side",
        "When the semiquinone is oxidised to ubiquinone by cytochrome c₁",
        "When cytochrome bK, on the matrix side, uses its electron to reduce ubiquinone to the semiquinone",
        "When cytochrome c hands its electron on to Complex IV"
      ],
      answer: 2,
      optionRefs: { 3: "6-2-4-4" },
      optionNotes: {
        0: { en: "Direction reversed: that step RELEASES one proton into the cytosolic space, it does not take one from the matrix.", cn: "方向反了：那一步是向胞质空间释放一个质子，而不是从基质取走一个。" },
        1: { en: "Also a release: a further proton goes out into the cytosolic space as c₁ oxidises QH• all the way to Q.", cn: "那一步同样是释放：c₁ 把 QH• 一直氧化到 Q 时，又有一个质子被放到胞质空间。" },
        3: { en: "Matrix protons are consumed later, at Complex IV, but as a substrate of water formation (½O₂ + 2e⁻ + 2H⁺ → H₂O), not by cytochrome c.", cn: "基质质子的确会在后面的复合物 IV 被消耗，但那是作为生成水的底物（½O₂ + 2e⁻ + 2H⁺ → H₂O），与 cytochrome c 无关。" }
      },
      why_en: "The two oxidation steps on the cytosolic side each release a proton outward — QH₂ → QH• by bT, then QH• → Q by c₁ — which is why one electron reaching cytochrome c corresponds to two cytosolic protons. The matrix-side event is the opposite one: bK reduces ubiquinone back to the semiquinone, and that reduction consumes one proton taken from the matrix.",
      why_cn: "胞质侧的两次氧化各向外释放一个质子——bT 把 QH₂ 变成 QH•，c₁ 再把 QH• 变成 Q——所以一个电子到达 cytochrome c 就对应两个胞质质子。基质侧发生的则是相反的事：bK 把泛醌还原回半醌，这一还原消耗掉基质中的一个质子。"
    },
    {
      type: "mcq",
      q_en: "What mismatch does Complex III's arrangement exist to solve?",
      q_cn: "复合物 III 的这套安排是为了解决什么样的「不匹配」？",
      options: [
        "Ubiquinol carries two electrons and two protons at once, while cytochrome c can only take one electron at a time",
        "Electrons from FADH₂ cannot enter the chain without it",
        "NAD⁺ must be regenerated for the citrate cycle, and only Complex III can do that",
        "Oxygen would otherwise be reduced too quickly for the matrix to keep up"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-4-2", 2: "6-2-4-1" },
      optionNotes: {
        1: { en: "FADH₂-borne electrons enter at Complex II, succinate:ubiquinone oxidoreductase, which feeds the same quinone pool; Complex III is downstream of that entry, not the entry itself.", cn: "来自 FADH₂ 的电子是在复合物 II（succinate:ubiquinone oxidoreductase）进入的，它供给的是同一个泛醌库；复合物 III 在这个入口的下游，本身不是入口。" },
        2: { en: "NAD⁺ regeneration happens at Complex I, which dehydrogenates NADH on the matrix side.", cn: "NAD⁺ 的再生发生在复合物 I，它在基质侧使 NADH 脱氢。" },
        3: { en: "Nothing in the node makes Complex III a brake on oxygen reduction; oxygen chemistry belongs to Complex IV.", cn: "本节没有把复合物 III 说成给氧的还原「踩刹车」；与氧有关的化学属于复合物 IV。" }
      },
      why_en: "Ubiquinol is a two-electron, two-proton carrier; cytochrome c is a one-electron carrier. Complex III splits each ubiquinol's pair: one electron goes out through c₁ to cytochrome c, the other circulates in the loop QH• → bT → bK → QH• to regenerate ubiquinone on the matrix side. That is the interface between the chain's paired-carrier chemistry and its single-electron cytochrome relay, and it is why two electrons move four protons here.",
      why_cn: "泛醇是双电子、双质子的载体，而 cytochrome c 是单电子载体。复合物 III 把每个泛醇的这对电子拆开：一个经 c₁ 送给 cytochrome c，另一个在 QH• → bT → bK → QH• 这个环里循环，用来在基质侧再生泛醌。这正是呼吸链「成对载体」化学与「单电子」细胞色素接力之间的接口，也是这里两个电子能搬走四个质子的原因。"
    },
    {
      type: "short",
      q_en: "Cytochrome c is described as able to 'slide'. Where does it slide, and between which two complexes does it carry what?",
      q_cn: "教材说 cytochrome c 能够「滑动」。它在哪里滑动？在哪两个复合物之间搬运什么？",
      accept: ["cytosolic", "intermembrane", "surface", "Complex III", "Complex IV", "one electron", "c1", "胞质", "膜间", "表面", "复合物 III", "复合物 IV", "单电子"],
      answer_en: "Membrane-bound cytochrome c₁ inside Complex III reduces the mobile cytochrome c, which then slides along the membrane surface in the cytosolic (intermembrane) space. It is a one-electron carrier, and it shuttles electrons from Complex III to Complex IV, where cytochrome oxidase accepts them on the cytosolic side.",
      answer_cn: "复合物 III 内部膜结合的 cytochrome c₁ 把可移动的 cytochrome c 还原，后者随后在胞质（膜间）空间沿膜表面滑动。它是单电子载体，把电子从复合物 III 运到复合物 IV，由 cytochrome oxidase 在胞质侧接收。"
    }
  ],

  "6-2-4-4": [
    {
      type: "mcq",
      q_en: "Which complex does the book say has the least clear mechanism of all the mitochondrial oxidoreduction systems, and what are its functional units?",
      q_cn: "教材说线粒体各氧化还原系统中机制最不清楚的是哪一个复合物？它的功能单位是什么？",
      options: [
        "Complex I — FMN and two FeS clusters",
        "Complex III — cytochromes bT, bK and c₁",
        "Complex IV — seven proteins, with cytochromes a and a₃ plus copper ions",
        "Complex V — the F₁ and F₀ subunits"
      ],
      answer: 2,
      optionRefs: { 0: "6-2-4-2", 1: "6-2-4-3", 3: "6-2-4-5" },
      optionNotes: {
        0: { en: "Complex I's internal relay is set out step by step in Obr. 6.7: FMN, then Fe₄S₄, then Fe₂S₂, then ubiquinone.", cn: "复合物 I 的内部接力在图 6.7 中一步步都画清楚了：FMN → Fe₄S₄ → Fe₂S₂ → 泛醌。" },
        1: { en: "Complex III's mechanism is given in detail, including the circulating-electron loop and its proton bookkeeping.", cn: "复合物 III 的机制讲得很细，连电子循环的环路和质子账都给了。" },
        3: { en: "Complex V's mechanism is presented as a hypothesis about ATP release, but it is not the one the book singles out as least clear.", cn: "复合物 V 的机制是以「关于 ATP 释放的假说」形式给出的，但教材点名说最不清楚的并不是它。" }
      },
      why_en: "The book states explicitly that Complex IV's mechanism is the least clear of all the mitochondrial oxidoreduction systems. It is built from seven proteins, with cytochromes a and a₃ plus copper ions as its functional units, and it accepts electrons from mobile cytochrome c on the cytosolic side, progressively reducing oxygen to oxide ions.",
      why_cn: "教材明确指出，复合物 IV 的机制是线粒体所有氧化还原系统中最不清楚的。它由七种蛋白质构成，功能单位是 cytochrome a 和 a₃ 加铜离子；它在胞质侧接受来自可移动 cytochrome c 的电子，把氧逐步还原为氧化物离子。"
    },
    {
      type: "mcq",
      q_en: "Six protons leave the matrix per NADH (Complexes I+III+IV) but only four per succinate (II+III+IV). Where does the difference come from?",
      q_cn: "每个 NADH（复合物 I+III+IV）有 6 个质子离开基质，而每个 succinate（II+III+IV）只有 4 个。差别出在哪里？",
      options: [
        "From Complex I's own contribution of 2 H⁺, since neither II nor IV contributes any",
        "From Complex IV, which pumps 2 extra protons when the electrons come from NADH",
        "From Complex III, which contributes 4 H⁺ in the NADH route but only 2 in the succinate route",
        "From Complex II, which pumps 2 H⁺ inward instead of outward"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Complex IV never transports protons across the membrane at all, by either route; in Obr. 6.9 no proton-release arrow is drawn beneath it.", cn: "复合物 IV 在任何一条路线下都完全不跨膜转运质子；图 6.9 中它下方根本没有质子释放箭头。" },
        2: { en: "Complex III contributes the same 4 H⁺ either way — that is exactly why the succinate route's total is 4.", cn: "复合物 III 两条路线下贡献的都是同样的 4 个 H⁺——这正是为什么 succinate 路线的总数就是 4。" },
        3: { en: "Complex II contributes no protons in either direction; in Obr. 6.9 it too has no proton arrow beneath it.", cn: "复合物 II 在任何方向都不贡献质子；图 6.9 中它下方同样没有质子箭头。" }
      },
      why_en: "In Obr. 6.9 proton-release arrows appear only beneath Complex III (4 H⁺) and Complex I (2 H⁺). So the NADH route totals 6 and the succinate route, which skips Complex I, totals exactly Complex III's own 4. That single difference is why NADH is worth about 3 ATP and succinate about 2.",
      why_cn: "图 6.9 中，质子释放箭头只出现在复合物 III（4 H⁺）和复合物 I（2 H⁺）下方。所以 NADH 路线合计 6 个，而跳过复合物 I 的 succinate 路线正好只剩复合物 III 自己的 4 个。差别就这一处，也正是 NADH 值约 3 个 ATP、succinate 只值约 2 个的原因。"
    },
    {
      type: "mcq",
      q_en: "Obr. 6.9 draws the complexes in the order II, III, I, IV. How should that layout be read?",
      q_cn: "图 6.9 把各复合物按 II、III、I、IV 的顺序排列。这个布局该怎么读？",
      options: [
        "As the sequence of electron flow: electrons go II → III → I → IV",
        "As a layout grouping the complexes around the carriers they share — the mobile ubiquinone pool and cytochrome c — so the Roman numerals are not the figure's left-to-right order",
        "As a ranking by how many protons each complex releases",
        "As the order in which the complexes were historically isolated"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-4-2" },
      optionNotes: {
        0: { en: "Complexes I and II are alternative ENTRY points feeding the same quinone pool, not consecutive stations; electrons never pass from Complex III into Complex I.", cn: "复合物 I 和 II 是并列的两个入口，供给同一个泛醌库，而不是前后相连的两站；电子绝不会从复合物 III 进入复合物 I。" },
        2: { en: "The proton figures are drawn separately, as arrows beneath III (4 H⁺) and I (2 H⁺); they are not what the left-to-right order encodes.", cn: "质子数是另外画的，是 III（4 H⁺）和 I（2 H⁺）下方的箭头；左右顺序表达的并不是这个。" },
        3: { en: "Nothing in the node makes any claim about the order of discovery or isolation.", cn: "本节没有任何关于发现或分离先后顺序的说法。" }
      },
      why_en: "The figure's title is the overall scheme of the function of oxidoreduction complexes I to IV, and it places them so that the shared mobile carriers can be drawn between them: the ubiquinone pool appears between II and III and again between III and I, and cytochrome c between III's output and IV's input. Complexes I and II are two doors into the same quinone pool, which is why neither the numbering nor the drawing order is a flow sequence.",
      why_cn: "该图的标题是「氧化还原复合物 I 至 IV 功能总示意图」，它这样摆放是为了把共享的可移动载体画在中间：泛醌库分别画在 II–III 之间和 III–I 之间，cytochrome c 画在 III 的输出端与 IV 的输入端之间。复合物 I 和 II 是通向同一个泛醌库的两扇门，所以无论编号还是排列顺序都不代表流向。"
    },
    {
      type: "short",
      q_en: "Complex IV is called ferrocytochrome c:oxygen oxidoreductase. Where does it get its electrons, what does it do with oxygen, and what does that do to matrix pH?",
      q_cn: "复合物 IV 被称为 ferrocytochrome c:oxygen oxidoreductase。它的电子从哪里来？对氧做了什么？这对基质 pH 有什么影响？",
      accept: ["cytochrome c", "cytosolic", "oxide", "water", "H2O", "raises", "pH", "consum", "细胞色素 c", "胞质", "氧化物", "水", "升高", "消耗"],
      answer_en: "Cytochrome oxidase accepts electrons from mobile cytochrome c on the cytosolic side and progressively reduces oxygen molecules to oxide ions: 2 cyt c(Fe²⁺) + ½O₂ ⇌ 2 cyt c(Fe³⁺) + O²⁻. Unlike the preceding complexes it transports no protons across the membrane, yet it still raises matrix pH, because the final water-forming step ½O₂ + 2e⁻ + 2H⁺ → H₂O consumes matrix protons as a substrate.",
      answer_cn: "cytochrome oxidase 在胞质侧接受来自可移动 cytochrome c 的电子，把氧分子逐步还原为氧化物离子：2 cyt c(Fe²⁺) + ½O₂ ⇌ 2 cyt c(Fe³⁺) + O²⁻。与前面各复合物不同，它并不跨膜转运质子，但仍会使基质 pH 升高，因为最后生成水的一步 ½O₂ + 2e⁻ + 2H⁺ → H₂O 把基质质子当作底物消耗掉了。"
    }
  ],

  "6-2-4-5": [
    {
      type: "mcq",
      q_en: "In which direction do protons move at Complex V, and how does that compare with Complexes I and III?",
      q_cn: "在复合物 V 中，质子的移动方向是什么？与复合物 I 和 III 相比如何？",
      options: [
        "From the matrix out to the cytosolic side, against the gradient — the same direction as at Complexes I and III",
        "From the cytosolic side into the matrix, along the gradient — the reverse of what Complexes I and III set up",
        "In both directions equally, which is why the gradient is maintained",
        "Protons do not move at Complex V; only ADP and Pᵢ do"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-4-4", 3: "6-2-4-5" },
      optionNotes: {
        0: { en: "That is the direction the oxidoreduction complexes pump: I contributes 2 H⁺ and III 4 H⁺ outward, building the gradient that Complex V then spends.", cn: "那是氧化还原复合物泵送的方向：I 贡献 2 个 H⁺、III 贡献 4 个，都是向外，建立起随后被复合物 V 花掉的那个梯度。" },
        2: { en: "If the flow were symmetric no work could be extracted; the point is that Complex V is where the difference is discharged, equalizing it again.", cn: "如果两个方向对称，就无法从中取出功；关键在于复合物 V 正是这个浓度差被放掉、重新拉平的地方。" },
        3: { en: "Proton passage is the whole mechanism: it is flow through F₀ that changes F₁'s active-site conformation and releases the ATP.", cn: "质子通过恰恰就是全部机制：正是经 F₀ 的质子流改变了 F₁ 活性位点的构象，把 ATP 放出来。" }
      },
      why_en: "Complex V is unique in the set: here H⁺ moves in the direction of its concentration gradient, from the cytosolic side of the membrane into the matrix, equalizing the difference that Complexes I and III built up. That downhill flow is what is coupled to ATP formation.",
      why_cn: "复合物 V 在这组复合物中是独一无二的：在这里 H⁺ 顺着自身浓度梯度移动，从膜的胞质侧进入基质，把复合物 I 和 III 建立起来的浓度差重新拉平。正是这个「顺坡」的质子流与 ATP 的生成相偶联。"
    },
    {
      type: "mcq",
      q_en: "The book gives ΔG⁰′ = +30.5 kJ·mol⁻¹ for ADP + Pᵢ → ATP + H₂O. What does the POSITIVE sign tell you?",
      q_cn: "教材给出 ADP + Pᵢ → ATP + H₂O 的 ΔG⁰′ = +30.5 kJ·mol⁻¹。这个正号说明了什么？",
      options: [
        "Synthesis of ATP is endergonic and cannot run on its own — it has to be driven, here by the proton gradient",
        "ATP synthesis releases 30.5 kJ·mol⁻¹, which is why it proceeds spontaneously",
        "The value describes the energy stored in the proton gradient rather than in ATP",
        "The reaction is at equilibrium, so neither direction is favoured"
      ],
      answer: 0,
      optionRefs: { 1: "6-1-2-2" },
      optionNotes: {
        1: { en: "Sign flipped. −30.5 is the value for the reaction run the other way, ATP hydrolysis, which is where Tab. 6.1 places ATP among the phosphorylated compounds.", cn: "正负号弄反了。−30.5 是反方向即 ATP 水解的数值，表 6.1 正是按这个数值把 ATP 排在磷酸化合物之中的。" },
        2: { en: "The figure is attached to the chemical reaction ADP + Pᵢ → ATP + H₂O; the gradient is named separately as the complex's main energy source.", cn: "这个数值挂在化学反应 ADP + Pᵢ → ATP + H₂O 上；质子梯度是另外提到的，作为该复合物的主要能量来源。" },
        3: { en: "A positive ΔG⁰′ means the forward direction is disfavoured under standard conditions, not that the reaction sits at equilibrium.", cn: "ΔG⁰′ 为正意味着标准条件下正向不利，而不是说反应处于平衡。" }
      },
      why_en: "A positive standard Gibbs energy change marks an endergonic reaction, one that will not go by itself — consistent with the book's framing of Complex V as a phosphorylation complex whose main energy source is the transmembrane proton gradient built by NADH- and succinate-linked electron transport. The same magnitude with the opposite sign, −30.5, is ATP hydrolysis in Tab. 6.1.",
      why_cn: "标准 Gibbs 自由能变化为正，说明这是吸能反应，自己不会发生——这与教材把复合物 V 定位为磷酸化复合物、其主要能量来源是 NADH 和 succinate 相关电子传递所建立的跨膜质子梯度，完全一致。同样大小、相反符号的 −30.5，就是表 6.1 中的 ATP 水解。"
    },
    {
      type: "mcq",
      q_en: "Both of the book's figures reduce to the same proton-per-ATP ratio. What is it, and where do the two pairings come from?",
      q_cn: "教材给出的两组数字换算后是同一个「每 ATP 消耗多少质子」的比值。这个比值是多少？两组配对分别来自哪里？",
      options: [
        "About 3 H⁺ per ATP, from 6 H⁺ → 2 ATP and 4 H⁺ → 1 ATP",
        "About 2 H⁺ per ATP, from 6 H⁺ → 3 ATP (the NADH route) and 4 H⁺ → 2 ATP (the succinate route)",
        "About 6 H⁺ per ATP, one for each proton crossing the membrane",
        "About 1 H⁺ per ATP, since each proton passing F₀ releases one ATP"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-3" },
      optionNotes: {
        0: { en: "3 is the ATP-per-NADH figure, not the protons-per-ATP figure; mixing the two ratios is the trap here.", cn: "3 是「每个 NADH 产多少 ATP」的数字，不是「每个 ATP 用几个质子」；把两个比例混起来正是这里的陷阱。" },
        2: { en: "6 is the total protons transported per NADH by Complexes I + III, not the cost of a single ATP.", cn: "6 是复合物 I + III 每个 NADH 转运的质子总数，不是单个 ATP 的成本。" },
        3: { en: "The mechanism does not tie one proton to one ATP; the figures the book gives are 6→3 and 4→2.", cn: "机制并没有把一个质子对应一个 ATP；教材给出的数字是 6→3 和 4→2。" }
      },
      why_en: "Transfer of 6 protons across the inner membrane corresponds to formation of approximately 3 ATP, and transfer of 4 protons to about 2 ATP — the pairings drawn explicitly in Obr. 6.10 as '6H⁺ nebo 4H⁺' against '3ATP nebo 2ATP'. Both reduce to roughly 2 protons per ATP, which is why the ratio is fixed by the geometry of the two entry routes rather than chosen.",
      why_cn: "6 个质子跨内膜转运对应生成约 3 个 ATP，4 个质子对应约 2 个 ATP——图 6.10 中直接把「6H⁺ 或 4H⁺」与「3ATP 或 2ATP」画在一起。两组换算下来都是每个 ATP 约 2 个质子，可见这个比值是由两条入口路线的几何关系定死的，而不是可以挑的。"
    },
    {
      type: "short",
      q_en: "Give the book's overall summary equation for oxidative phosphorylation coupled to NADH oxidation, and say what fixes the number 3 in it.",
      q_cn: "写出教材给出的、与 NADH 氧化相偶联的氧化磷酸化总反应式，并说明式中的「3」是被什么定下来的。",
      accept: ["NADH", "1/2 O2", "½O₂", "3 ADP", "3 Pi", "3 ATP", "4 H2O", "NAD+", "6", "proton", "质子"],
      answer_en: "NADH + H⁺ + ½O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O. The 3 comes from the proton bookkeeping: electrons from NADH pass through Complexes I, III and IV and move 6 protons out of the matrix, and transfer of 6 protons back through ATP synthase corresponds to formation of approximately 3 ATP. Had the electrons entered at Complex II instead, only 4 protons would move and the yield would be about 2.",
      answer_cn: "NADH + H⁺ + ½O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O。式中的 3 是由质子账定下来的：来自 NADH 的电子经复合物 I、III、IV，把 6 个质子送出基质，而 6 个质子经 ATP synthase 回流对应生成约 3 个 ATP。如果电子改从复合物 II 进入，只会转运 4 个质子，产量就是约 2 个。"
    }
  ],

  "6-3-1": [
    {
      type: "mcq",
      q_en: "Why are porphyrins coloured — why are they pigments?",
      q_cn: "卟啉为什么有颜色，为什么算色素？",
      options: [
        "Because of the metal ion each one holds in its centre",
        "Because their rich system of conjugated double bonds absorbs in the visible part of the spectrum",
        "Because the four pyrrole nitrogens absorb ultraviolet light",
        "Because they are always bound to proteins, and proteins are coloured"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The metal decides what the porphyrin DOES — Fe²⁺ in heme, Mg in chlorophyll — but the book attributes the colour to the conjugated ring system itself.", cn: "金属决定卟啉「做什么」——血红素里的 Fe²⁺、叶绿素里的 Mg——但教材把颜色归因于共轭环系本身。" },
        2: { en: "The four pyrrole rings joined by four methine bridges are the skeleton; what matters optically is the conjugation across that skeleton, and the absorption is in the VISIBLE range.", cn: "四个吡咯环由四个次甲基桥连成骨架；在光学上起作用的是贯穿这个骨架的共轭，而且吸收位于可见光范围。" },
        3: { en: "Chlorophyll's porphyrin and heme are prosthetic groups, and it is the prosthetic group that carries the colour, not the protein.", cn: "叶绿素的卟啉和血红素都是辅基，带颜色的是辅基，而不是蛋白质。" }
      },
      why_en: "A porphyrin is four pyrrole heterocycles joined by four methine (=CH–) bridges, and the rich system of conjugated double bonds running through that macrocycle predetermines absorption in the visible part of the electromagnetic spectrum. Hence they are coloured — pigments — and nature has re-used the same ring for many different jobs.",
      why_cn: "卟啉由四个吡咯杂环通过四个次甲基（=CH–）桥连接而成，贯穿这个大环的丰富共轭双键体系决定了它在电磁波谱可见光区的吸收。所以它们是有颜色的——是色素——而自然界把同一个环反复用在许多不同的用途上。"
    },
    {
      type: "mcq",
      q_en: "Catalase and hemoglobin both carry a heme. What separates them in Tab. 6.4?",
      q_cn: "过氧化氢酶和血红蛋白都带血红素。在表 6.4 中，把两者区分开的是什么？",
      options: [
        "Catalase's heme iron changes valence, hemoglobin's does not — binding O₂ is not itself a redox event",
        "Hemoglobin's prosthetic group is an Mg-porphyrin, catalase's an Fe-porphyrin",
        "Catalase's prosthetic group includes copper ions, hemoglobin's does not",
        "Both change valence; the difference is only which substrate they act on"
      ],
      answer: 0,
      optionRefs: { 1: "6-3-1", 2: "6-3-1" },
      optionNotes: {
        1: { en: "The Mg-porphyrin is chlorophyll's, row 9 — and chlorophyll is the OTHER entry whose metal does not change valence.", cn: "Mg-卟啉是叶绿素的，即第 9 行——而叶绿素恰好是另一个金属不发生价态变化的条目。" },
        2: { en: "Heme plus Cu ions is cytochrome oxidase's entry, row 5, which is what distinguishes it from cytochromes c and b.", cn: "「血红素加铜离子」是第 5 行 cytochrome oxidase 的辅基，这正是它区别于 cytochrome c 和 b 的地方。" },
        3: { en: "Hemoglobin is one of only two entries in the whole table marked with no valence change.", cn: "血红蛋白是全表仅有的两个标记为「无价态变化」的条目之一。" }
      },
      why_en: "Tab. 6.4's own criterion is the valence change of the metal centre. Catalase, which decomposes 2 H₂O₂ → 2 H₂O + O₂, is marked '+'; hemoglobin, which merely transports O₂, is marked '–', because binding oxygen is not a redox event and the iron stays Fe²⁺. Seven of the table's nine entries are redox-active; only hemoglobin and chlorophyll are not.",
      why_cn: "表 6.4 自己的判据就是金属中心有没有价态变化。分解 2 H₂O₂ → 2 H₂O + O₂ 的 catalase 标为「+」；只负责运输 O₂ 的血红蛋白标为「–」，因为结合氧本身不是氧化还原事件，铁始终是 Fe²⁺。全表九个条目里有七个是氧化还原活性的，只有血红蛋白和叶绿素不是。"
    },
    {
      type: "short",
      q_en: "Using Tab. 6.4, contrast the jobs done by porphyrins whose metal cycles through oxidation states with those whose metal does not.",
      q_cn: "利用表 6.4，对比「金属会经历价态循环」的卟啉与「金属不发生价态变化」的卟啉各自承担什么工作。",
      accept: ["peroxidase", "catalase", "cytochrome", "oxygenase", "electron transport", "hemoglobin", "chlorophyll", "transport of O2", "light", "过氧化物酶", "细胞色素", "加氧酶", "电子传递", "血红蛋白", "叶绿素", "光能"],
      answer_en: "Seven of the nine entries show a valence change and are doing real redox chemistry: plant and animal peroxidase (oxidation using H₂O₂), catalase (decomposing H₂O₂), cytochrome oxidase (terminal oxidation, heme plus Cu), cytochromes c and b (electron transport), and the oxygenases (introducing O₂ into substrates). The two without a valence change use the ring for something else entirely: hemoglobin binds and transports O₂ with its iron staying Fe²⁺, and chlorophyll converts light energy to chemical energy with an Mg-containing porphyrin. One scaffold, two quite different kinds of use.",
      answer_cn: "九个条目中有七个发生价态变化，做的是真正的氧化还原化学：植物与动物 peroxidase（借 H₂O₂ 进行氧化）、catalase（分解 H₂O₂）、cytochrome oxidase（末端氧化，辅基为血红素加 Cu）、cytochrome c 和 b（电子传递），以及 oxygenase（把 O₂ 引入底物）。另外两个不发生价态变化的，则把这个环用在完全不同的地方：血红蛋白结合并运输 O₂，其铁始终保持 Fe²⁺；叶绿素则用含 Mg 的卟啉把光能转化为化学能。同一个骨架，两类截然不同的用途。"
    }
  ],

  "6-3-2": [
    {
      type: "mcq",
      q_en: "In the first two condensations of heme biosynthesis, how many molecules combine and what is lost each time?",
      q_cn: "血红素生物合成的头两次缩合中，各有几个分子结合？每次分别失去什么？",
      options: [
        "2 δ-aminolevulate lose 2 H₂O to give porphobilinogen; 4 porphobilinogen lose 4 NH₃ to give the linear tetrapyrrole",
        "2 δ-aminolevulate lose 2 NH₃; 4 porphobilinogen lose 4 H₂O",
        "2 δ-aminolevulate lose 2 CO₂; 4 porphobilinogen lose 4 CO₂",
        "4 δ-aminolevulate lose 4 H₂O to give porphobilinogen directly"
      ],
      answer: 0,
      optionRefs: { 2: "6-3-2" },
      optionNotes: {
        1: { en: "The two losses are swapped: water comes off when the pyrrole ring is closed, ammonia when the four rings are strung together.", cn: "两次失去的东西调换了：闭合吡咯环时脱去的是水，把四个环串起来时脱去的才是氨。" },
        2: { en: "CO₂ is lost later, and twice: 4 CO₂ going from uroporphyrinogen III to coproporphyrinogen III, then 2 more on oxidation to protoporphyrin IX.", cn: "CO₂ 是后面才失去的，而且分两次：uroporphyrinogen III → coproporphyrinogen III 失去 4 个 CO₂，再氧化为 protoporphyrin IX 时又失去 2 个。" },
        3: { en: "Two δ-aminolevulates make one porphobilinogen; four porphobilinogens are needed for the tetrapyrrole, i.e. eight δ-aminolevulates in all.", cn: "两分子 δ-aminolevulate 生成一个 porphobilinogen；组成四吡咯需要四个 porphobilinogen，也就是总共八分子 δ-aminolevulate。" }
      },
      why_en: "Glycine + succinyl-CoA give two molecules of δ-aminolevulate (losing 2 HSCoA and 2 CO₂); two δ-aminolevulates then condense with loss of 2 H₂O to the pyrrole derivative porphobilinogen; and four porphobilinogens condense with loss of 4 NH₃ to a linear tetrapyrrole, which cyclises to uroporphyrinogen III.",
      why_cn: "glycine + succinyl-CoA 生成两分子 δ-aminolevulate（失去 2 个 HSCoA 和 2 个 CO₂）；两分子 δ-aminolevulate 再缩合、失去 2 个 H₂O，生成吡咯衍生物 porphobilinogen；四个 porphobilinogen 缩合、失去 4 个 NH₃，生成线型四吡咯，随后环化为 uroporphyrinogen III。"
    },
    {
      type: "mcq",
      q_en: "The prefixes 'uro-' and 'proto-' each carry information about the molecule. What is it?",
      q_cn: "前缀「uro-（尿）」和「proto-（原）」各自携带了关于分子的什么信息？",
      options: [
        "'uro-' derivatives are already mostly decarboxylated; 'proto-' derivatives still carry 8 carboxyl groups",
        "'uro-' derivatives still carry 8 carboxyl groups; 'proto-' derivatives are by then already mostly decarboxylated",
        "'uro-' means the ring is still open; 'proto-' means it has closed",
        "'uro-' means the rings are joined by methine bridges; 'proto-' means methylene bridges"
      ],
      answer: 1,
      optionRefs: { 3: "6-3-2" },
      optionNotes: {
        0: { en: "Exactly reversed: the carboxyls come off along the pathway, so the earlier 'uro-' stage is the carboxyl-rich one.", cn: "正好反了：羧基是沿途逐步脱掉的，所以更早的「uro-」阶段才是羧基多的那个。" },
        2: { en: "Uroporphyrinogen III is already a closed macrocycle — cyclisation happens when the linear tetrapyrrole closes, before the 'uro-' stage is named.", cn: "uroporphyrinogen III 已经是闭合的大环——环化发生在线型四吡咯闭环时，早于命名为「uro-」的阶段。" },
        3: { en: "That is the separate '-nogen' rule, and it also runs the other way: '-nogen' derivatives have –CH₂– bridges, while protoporphyrin and heme have =CH– methine bridges.", cn: "那是另一条关于「-nogen（原）」后缀的规则，而且方向也相反：带「-nogen」的衍生物是 –CH₂– 桥，protoporphyrin 和血红素才是 =CH– 次甲基桥。" }
      },
      why_en: "The names track the decarboxylations. Uroporphyrinogen III still carries 8 carboxyl groups; losing 4 CO₂ gives coproporphyrinogen III, and oxidation with loss of 2 more CO₂ gives protoporphyrin IX, by which point the 'proto-' derivatives are already mostly decarboxylated and bear vinyl groups instead.",
      why_cn: "这些名字记录的是脱羧的进度。uroporphyrinogen III 仍带 8 个羧基；失去 4 个 CO₂ 变成 coproporphyrinogen III，再经氧化又失去 2 个 CO₂ 得到 protoporphyrin IX——到这一步，带「proto-」的衍生物已经大部分脱羧，环上换成了乙烯基。"
    },
    {
      type: "short",
      q_en: "What is the final step in making heme itself, and what else do analogous pathways go on to produce?",
      q_cn: "生成血红素本身的最后一步是什么？类似的途径还继续通向哪些分子？",
      accept: ["protoporphyrin IX", "Fe2+", "Fe²⁺", "iron", "cytochrome", "oxidase", "oxygenase", "chlorophyll", "原卟啉", "铁", "细胞色素", "叶绿素"],
      answer_en: "Protoporphyrin IX combines with Fe²⁺, coordinated by the four pyrrole nitrogens at the centre of the ring, to give heme. Through further metabolites and transformations, analogous pathways lead on to the molecules of the cytochromes, the oxidases, the oxygenases and chlorophyll — the same entries Tab. 6.4 lists as the porphyrin proteins' range of jobs.",
      answer_cn: "protoporphyrin IX 与 Fe²⁺ 结合，由环中央的四个吡咯氮配位，生成血红素。经过进一步的代谢物和转化，类似的途径还通向 cytochrome、oxidase、oxygenase 和叶绿素等分子——正是表 6.4 中列出的那些卟啉蛋白的用途。"
    }
  ],

  "6-3-3": [
    {
      type: "mcq",
      q_en: "The book says other porphyrin derivatives degrade 'analogously' to heme. What does that mean here?",
      q_cn: "教材说其他卟啉衍生物的降解与血红素「类似」。这里的「类似」指的是什么？",
      options: [
        "That they are all converted into bilirubin first",
        "That the same three-step chemistry applies generally — oxidation of a methine bridge, release of the metal atom, opening of the ring",
        "That they are all excreted as bile pigments",
        "That they are all degraded by the same enzyme"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Bilirubin and biliverdin are named as the products of HEME degradation specifically; the general claim is about the reaction sequence, not about a shared product.", cn: "bilirubin 和 biliverdin 是作为血红素降解的具体产物提到的；那句一般性的说法讲的是反应顺序，而不是共同产物。" },
        2: { en: "Excretion as bile pigments is again the heme route, whose main source is the hemoglobin of broken-down erythrocytes.", cn: "以胆色素形式排出同样是血红素这条路线，其主要来源是破裂红细胞中的血红蛋白。" },
        3: { en: "The book makes the point from a CHEMICAL standpoint — same chemistry — and names no shared enzyme.", cn: "教材是从化学角度说的——化学过程相同——并没有点出什么共用的酶。" }
      },
      why_en: "The degradation sequence is: oxidation of a methine bridge, release of the iron atom, and opening of the porphyrin ring, turning the closed macrocycle into an open, linear tetrapyrrole. From a chemical standpoint that same three-step logic applies to porphyrin derivatives generally, not only to heme.",
      why_cn: "降解顺序是：次甲基桥的氧化、铁原子的释放、卟啉环的打开，把闭合大环变成开链的线型四吡咯。从化学角度看，这同一套三步逻辑适用于卟啉衍生物的一般情况，并不只适用于血红素。"
    },
    {
      type: "mcq",
      q_en: "Which pigment does the book say is formed by FURTHER REDUCTION of bilirubin?",
      q_cn: "教材说由 bilirubin 进一步还原生成的是哪一种色素？",
      options: [
        "Biliverdin",
        "Urobilin",
        "Stercobilin",
        "Heme"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Biliverdin is named alongside bilirubin as a product of heme degradation, a linear-tetrapyrrole bile pigment in its own right — not something made from bilirubin.", cn: "biliverdin 是与 bilirubin 并列提到的血红素降解产物，本身就是一种线型四吡咯胆色素——不是由 bilirubin 生成的。" },
        1: { en: "Urobilin appears here only as the partner pigment that, together with stercobilin, colours urine and stool; the node does not derive it from bilirubin.", cn: "urobilin 在这里只是作为与 stercobilin 一起给尿液和粪便上色的伙伴出现；本节并没有说它由 bilirubin 生成。" },
        3: { en: "Heme is the starting material of the whole sequence, above all from the hemoglobin of disintegrated erythrocytes.", cn: "血红素是整个序列的起点，主要来自破裂红细胞的血红蛋白。" }
      },
      why_en: "Heme degradation gives the bilin derivatives excreted as bile pigments, specifically the linear tetrapyrroles bilirubin and biliverdin. Further reduction of bilirubin produces stercobilin, which together with urobilin colours urine and stool yellow to brown — so a change in that colour is a visible readout of heme turnover.",
      why_cn: "血红素降解生成以胆色素形式排出的 bilin 类衍生物，具体是线型四吡咯 bilirubin 和 biliverdin。bilirubin 进一步还原生成 stercobilin，它与 urobilin 一起使尿液和粪便呈黄到棕色——所以颜色的变化正是血红素周转情况的一个可见读数。"
    },
    {
      type: "short",
      q_en: "What structural change turns a closed porphyrin into a bile pigment, and where does the material being degraded mostly come from?",
      q_cn: "什么样的结构变化把闭合的卟啉变成胆色素？被降解的材料主要来自哪里？",
      accept: ["ring", "open", "linear", "tetrapyrrole", "methine", "iron", "hemoglobin", "erythrocyte", "环", "打开", "线型", "四吡咯", "次甲基", "铁", "血红蛋白", "红细胞"],
      answer_en: "A methine bridge is oxidised, the iron atom is released, and the porphyrin ring is opened, so the closed macrocycle becomes an open, linear tetrapyrrole — that is what a bile pigment such as bilirubin or biliverdin structurally is. The material being degraded is above all heme, specifically the heme of hemoglobin from disintegrated erythrocytes.",
      answer_cn: "先氧化一个次甲基桥，再释放铁原子，然后打开卟啉环，闭合的大环就变成开链的线型四吡咯——bilirubin、biliverdin 这类胆色素在结构上就是这么来的。被降解的材料主要是血红素，具体说是来自破裂红细胞中血红蛋白的血红素。"
    }
  ]

});
