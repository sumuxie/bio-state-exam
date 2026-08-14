/* ============================================================
   INTEGRATION CARDS — kind: "entity"
   One entity, everything about it, gathered from wherever it is
   scattered. See HANDOFF_LEHNINGER.md sections 4 and 12.

   These carry NO `book` and NO `chapter`/`pages`: an integration
   card is not anchored to one place in one book, which is the
   whole point of it. The validator has a separate required-field
   list for kind: "entity" (tools/validate-data.js).

   Every claim below was located in a source and carries the page
   to open. Anything from neither book is marked `beyond: true`
   and says so in the text — see section 12d.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "E-tryptophan",
    kind: "entity",
    topicKey: "amino-acids",
    enTitle: "Tryptophan — one ring, and everything that follows from it",
    cnTitle: "色氨酸——一个环，以及由它推出的一切",
    cnNote: { topic: "四", title: "氨基酸（笔记 pp.17–19：芳香族氨基酸、乙醛酸反应显色）", status: "mapped" },

    mustKnow: {
      en: "Everything about tryptophan follows from one fact: it carries a flat indole ring that holds no charge. That is why you can measure protein concentration at 280 nm, why it sits buried in the hydrophobic core, and why it is the precursor that it is. Learn it as a chain, not a list — each property is the reason for the next.",
      cn: "色氨酸的一切都从一个事实推出来：它带着一个**不带电的平面吲哚环**。正因如此你才能在 280 nm 测蛋白浓度，它才会埋在疏水核心里，它才成为那些物质的前体。**把它当成一条链来记，不要当清单**——每一条性质都是下一条的原因。"
    },
    summary: {
      en: "Tryptophan is the best entity to learn as a chain rather than as a list, because almost everything about it follows from one structural fact: it carries a flat indole ring that holds no charge. Read downward and each property is the reason for the next — why you can measure protein concentration on a Nanodrop, why Trp sits where the membrane meets water, why E. coli regulates this one amino acid twice over. The exam value is that a single remembered fact regenerates the rest.",
      cn: "色氨酸最好当成一条链来学，而不是一张清单，因为它几乎所有性质都源于一个结构事实：它带一个不带电荷的扁平吲哚环。自上而下读，每一条性质都是下一条的原因——为什么你能用 Nanodrop 测蛋白浓度、为什么色氨酸恰好待在膜与水的交界处、为什么大肠杆菌要对这一个氨基酸调控两遍。考试时的价值在于：记住一个事实就能把其余的重新推出来。"
    },

    chains: [
      {
        title_en: "Chain 1 — from the ring to the Nanodrop",
        title_cn: "链条一：从环到 Nanodrop",
        steps: [
          { en: "Tryptophan's side chain is an indole ring: flat, and carrying no charge at any pH you meet in a cell. There is no ionisable group on it, which is why Table 3-1 gives Trp a pK1 and a pK2 but no R-group pKa at all. The book still rates it “significantly more polar than phenylalanine because of the tyrosine hydroxyl group” and the indole nitrogen.",
            cn: "色氨酸的侧链是一个吲哚环：扁平，且在细胞内遇到的任何 pH 下都不带电荷。它没有可解离的基团——这正是 Table 3-1 给色氨酸列出 pK1 和 pK2，却完全没有侧链 pKa 的原因。",
            src: "A p.71–79, §3.1" },
          { en: "A flat uncharged ring is awkward for water to surround, so it is pushed out of water. That is the hydrophobic effect — “the hydrophobic effect makes a large contribution to the stability of protein structures” — and it is why Trp ends up buried in a protein's core rather than on its surface.",
            cn: "水很难把一个不带电的扁平环包围起来，于是它被排挤出水相。这就是疏水效应，也是色氨酸最终埋在蛋白质核心而不是暴露在表面的原因。",
            src: "A p.116–129, §4.3" },
          { en: "But the ring is not purely greasy either — the indole nitrogen makes Trp measurably more polar than phenylalanine. The book says so directly: Tyr and Trp are 'significantly more polar than phenylalanine because of the tyrosine hydroxyl group and the nitrogen of the tryptophan indole ring.' Half-greasy, half-polar is exactly the property the next step needs.",
            cn: "但这个环也不是纯粹的油性——吲哚氮使色氨酸的极性明显强于苯丙氨酸。书里直说：酪氨酸和色氨酸「因为酪氨酸的羟基和色氨酸吲哚环上的氮，极性显著强于苯丙氨酸」。半油半极性，正是下一步需要的性质。",
            src: "A p.75, §3.1" },
          { en: "A conjugated flat ring absorbs ultraviolet light. Trp absorbs at 280 nm, and — this is the number that makes it useful rather than merely true — more than four times as strongly as tyrosine at that wavelength. Phenylalanine contributes little.",
            cn: "共轭的扁平环会吸收紫外光。色氨酸在 280 nm 处吸收，而且——这个数字才是它有用而非仅仅正确的关键——在该波长下的吸收强度是酪氨酸的四倍以上。苯丙氨酸贡献很小。",
            src: "A p.75, Fig. 3-6" },
          { en: "Absorbance becomes concentration through the Lambert-Beer law, which Lehninger states in a boxed methods section four sentences after the 280 nm passage: A = εcl, where 'ε is the molar extinction coefficient (in units of liters per mole-centimeter), c is the concentration, l is the path length'. Note the book's word order is Lambert-Beer, not Beer-Lambert.",
            cn: "吸光度通过 Lambert-Beer 定律变成浓度。Lehninger 就在 280 nm 那段之后第四句的方法框里给出：A = εcl，其中「ε 是摩尔消光系数（单位为升每摩尔厘米），c 是浓度，l 是光程」。注意书里的语序是 Lambert-Beer，不是 Beer-Lambert。",
            src: "A p.75–76, Box 3-1" },
          { en: "That is the Nanodrop reading on the bench: you pipette 1 µl, the instrument measures A280, and the number it reports as a protein concentration exists because tryptophan has an indole ring.",
            cn: "这就是实验台上 Nanodrop 的读数：你滴 1 µl，仪器测 A280，它报出的那个蛋白浓度之所以存在，是因为色氨酸有一个吲哚环。",
            src: "" }
        ]
      },
      {
        title_en: "Chain 2 — why Trp sits exactly at the membrane surface",
        title_cn: "链条二：为什么色氨酸恰好待在膜的表面",
        steps: [
          { en: "A membrane is not one environment but three stacked ones: water outside, polar head groups, then the greasy acyl chains in the middle. A residue that is half-greasy and half-polar has nowhere ideal in a protein core — but it has an ideal place here, and the book calls it a remarkable feature of many transmembrane proteins: “the presence of Tyr and Trp residues at the interface between lipid and water” .",
            cn: "膜不是一种环境，而是三层叠在一起：外侧的水、极性头部基团、以及中间油性的酰基链。一个半油半极性的残基在蛋白质核心里没有理想位置——但在这里有。",
            src: "A p.367–376, §11.1" },
          { en: "And that is where they are found. Fig. 11-15: Tyr and Trp residues 'are found predominantly where the nonpolar region of acyl chains meets the polar head-group region', acting as 'membrane interface anchors, able to interact simultaneously with the central lipid phase and the aqueous phases on either side.'",
            cn: "而它们确实就在那里。Fig. 11-15：酪氨酸和色氨酸残基「主要出现在酰基链的非极性区与极性头部基团区相接之处」，充当「膜界面锚，能够同时与中央的脂相和两侧的水相相互作用」。",
            src: "A p.375–376, Fig. 11-15" },
          { en: "The same logic shows up again in β-barrel membrane proteins, on the very same page: 'in β strands of membrane proteins… aromatic side chains are commonly found at the lipid-protein interface.' One structural property, two independent places it predicts the answer.",
            cn: "同样的逻辑在同一页里的 β 桶状膜蛋白中再次出现：「在膜蛋白的 β 折叠股中……芳香族侧链常见于脂-蛋白界面。」一个结构性质，在两个彼此独立的地方都预测对了答案。",
            src: "A p.375, §11.1" }
        ]
      },
      {
        title_en: "Chain 3 — expensive to make, therefore regulated twice",
        title_cn: "链条三：合成昂贵，因此被调控两遍",
        steps: [
          { en: "Tryptophan is the most expensive amino acid the cell makes. The aromatic branch is the longest biosynthetic pathway of the twenty: chorismate → anthranilate (glutamine donates the nitrogen that becomes the indole N) → condensation with PRPP → indole-3-glycerol phosphate, and finally tryptophan synthase, an α₂β₂ enzyme that separates into α and β₂ halves each catalysing one half of the reaction. In the book's words, “the indole ring of tryptophan is derived from the ring carbons and amino group of anthranilate” plus two carbons from PRPP.",
            cn: "色氨酸是细胞合成代价最高的氨基酸。芳香族分支是二十种氨基酸中最长的生物合成途径：分支酸 → 邻氨基苯甲酸（谷氨酰胺提供那个后来成为吲哚氮的氮）→ 与 PRPP 缩合 → 吲哚-3-甘油磷酸，最后由色氨酸合酶完成，那是一个 α₂β₂ 酶，可拆成 α 与 β₂ 两半，各自催化反应的一半。",
            src: "A p.810–812, §22.2" },
          { en: "Something that expensive is worth controlling tightly, so E. coli controls it twice. First repression: “when tryptophan is abundant, it binds to the trp repressor, causing a conformational change” — the repressor is a homodimer, and it then binds an operator that overlaps the promoter — so the product of the pathway switches off the genes that build it.",
            cn: "这么昂贵的东西值得严格控制，所以大肠杆菌控制了两遍。第一层是阻遏：色氨酸本身结合 trp 阻遏蛋白（一个同源二聚体），后者随即结合与启动子重叠的操纵基因——于是途径的产物关掉了合成它的基因。",
            src: "A p.1067–1069, §28.2" },
          { en: "Then attenuation fine-tunes on top of that, and the combined range is the number worth remembering: 'Different cellular concentrations of tryptophan can vary the rate of synthesis… over a 700-fold range.' Two mechanisms stacked, because one was not enough for the costliest product.",
            cn: "然后衰减调控在此之上做精细调节，两者合起来的范围就是值得记住的那个数字：「不同的胞内色氨酸浓度可以使合成速率变化……达 700 倍。」两种机制叠加，因为对最昂贵的产物来说一种还不够。",
            src: "A p.1068, §28.2" },
          { en: "This is also the bridge back to the Czech book, which already teaches the trp operon at §4.2.4 — so this chain is not new material, it is the reason the textbook example is the textbook example.",
            cn: "这也是通回捷克教材的桥梁：捷克书在 §4.2.4 已经讲了 trp 操纵子——所以这条链不是新材料，而是解释了为什么这个教科书例子成为教科书例子。",
            src: "CZ §4.2.4" }
        ]
      }
    ],

    points: [
      { cz: "Trp — konstanty", en: "The constants, for when you are asked flatly: Mr 204, pK1 2.38, pK2 9.39, pI 5.89, and no R-group pKa. The missing R-group pKa is not an omission — it is the fact that generates chain 1.", cn: "被直接问到时用的常数：Mr 204、pK1 2.38、pK2 9.39、pI 5.89，无侧链 pKa。侧链 pKa 的缺席不是遗漏——它正是推出链条一的那个事实。" },
      { cz: "ketogenní i glukogenní", en: "Tryptophan is one of only five amino acids that are BOTH ketogenic and glucogenic — the indole ring's carbons are disposed of along more than one route.", cn: "色氨酸是仅有的五种同时生酮又生糖的氨基酸之一——吲哚环的碳原子经不止一条路线被处理掉。" },
      { cz: "deriváty: serotonin, melatonin", en: "What tryptophan becomes: serotonin, and from serotonin melatonin — the pineal hormone the Czech book already covers at §10.3, where it is one of the two amino acids (with tyrosine) that the whole amino-acid-derived hormone class reduces to.", cn: "色氨酸会变成什么：血清素，再由血清素生成褪黑素——捷克教材 §10.3 已经讲过的松果体激素，在那里它是整个氨基酸衍生激素类别所归结到的两种氨基酸之一（另一个是酪氨酸）。" },
      { cz: "barevná reakce", en: "The Chinese notes add the colour reaction the other two sources skip: Trp gives the glyoxylic acid reaction (乙醛酸反应), note p.19 — useful because it is an observable you can be asked to name.", cn: "中文笔记补上了另外两个来源都跳过的显色反应：色氨酸给出乙醛酸反应，笔记第 19 页——有用，因为这是一个可能被要求说出名字的可观测现象。" }
    ],

    beyondPoints: [
      { en: "NOT IN EITHER BOOK — flagged rather than passed off as sourced. Lehninger gives the Lambert-Beer law and defines ε, but never prints ε280 for tryptophan itself (~5,500 M⁻¹cm⁻¹) or the protein rule of thumb that follows from it. If you want to actually compute a concentration you need that number from elsewhere.", cn: "两本书里都没有——标出来而不是当作有来源。Lehninger 给了 Lambert-Beer 定律并定义了 ε，却从未印出色氨酸自身的 ε280（约 5,500 M⁻¹cm⁻¹），也没有由此得出的蛋白质经验规则。要真正算出一个浓度，这个数字得从别处来。" },
      { en: "NOT IN EITHER BOOK — tryptophan fluorescence. Searching Lehninger 8 for 'tryptophan fluorescence' returns zero hits, checked after the ligature bug was fixed. It is a real and commonly examined property (Trp fluorescence reports on folding, because burying the residue changes its emission), and it is simply absent from the source.", cn: "两本书里都没有——色氨酸荧光。在 Lehninger 第 8 版中搜索 tryptophan fluorescence 返回零结果（已在连字符 bug 修复后复查）。这是一个真实且常被考到的性质（色氨酸荧光可报告折叠状态，因为残基被埋会改变其发射），但它在来源中就是不存在。" }
    ],

    terms: [
      { cz: "indol", en: "indole ring", cn: "吲哚环", def_en: "The bicyclic aromatic side chain of tryptophan: flat, conjugated, and carrying no ionisable group — the single structural fact the whole card unrolls from.", def_cn: "色氨酸的双环芳香侧链：扁平、共轭、不含可解离基团——整张卡片由这一个结构事实展开。" },
      { cz: "Lambertův-Beerův zákon", en: "Lambert-Beer law", cn: "Lambert-Beer 定律", def_en: "A = εcl. Turns an absorbance reading into a concentration. Lehninger uses this word order, not 'Beer-Lambert', and states it in Box 3-1 immediately after the Trp 280 nm passage.", def_cn: "A = εcl。把吸光读数转换成浓度。Lehninger 用的是这个语序而非「Beer-Lambert」，并在紧接色氨酸 280 nm 段落之后的 Box 3-1 中给出。" },
      { cz: "molární absorpční koeficient", en: "molar extinction coefficient (ε)", cn: "摩尔消光系数 (ε)", def_en: "The proportionality constant in the Lambert-Beer law, in litres per mole per centimetre. Defined in Lehninger; its numeric value for tryptophan is not printed there.", def_cn: "Lambert-Beer 定律中的比例常数，单位为升每摩尔每厘米。Lehninger 有定义；但色氨酸的具体数值书中没有印出。" },
      { cz: "membránová kotva", en: "membrane interface anchor", cn: "膜界面锚", def_en: "Lehninger's own term for what Trp and Tyr do at a membrane: sit where acyl chains meet head groups and interact with the lipid phase and the water on both sides at once.", def_cn: "Lehninger 自己用来描述色氨酸与酪氨酸在膜上作用的术语：待在酰基链与头部基团相接之处，同时与脂相和两侧的水相相互作用。" },
      { cz: "attenuace", en: "attenuation", cn: "衰减调控", def_en: "The second layer of trp operon control, on top of repression. Together they span a 700-fold range of synthesis rate.", def_cn: "trp 操纵子调控的第二层，叠加在阻遏之上。两者合起来跨越 700 倍的合成速率范围。" }
    ],

    quiz: [
      { type: "mcq",
        q_en: "You measure A280 on a Nanodrop and get a protein concentration. Which single structural property of tryptophan is that measurement ultimately resting on?",
        q_cn: "你用 Nanodrop 测 A280 并得到蛋白浓度。这个测量最终依赖于色氨酸的哪一个结构性质？",
        options: [
          "Its side-chain carboxyl group ionises near pH 2.4 / 侧链羧基在 pH 2.4 附近解离",
          "Its indole ring is flat and conjugated, so it absorbs UV / 吲哚环扁平且共轭，因而吸收紫外光",
          "It is the largest of the twenty by molecular mass, Mr 204 / 它是二十种中分子量最大的，Mr 204",
          "It carries a positive charge at physiological pH, as histidine does / 它在生理 pH 下带正电荷，与组氨酸一样"
        ],
        answer: 1,
        optionRefs: { 3: "E-histidine" },
        optionNotes: {
          0: { en: "2.38 is pK1, the α-carboxyl every amino acid has, not a side-chain value. The card's generating fact is the opposite one: tryptophan has NO R-group pKa at all, which is why Table 3-1 leaves that column empty for it — and an unionisable side chain is exactly what leaves the ring free to do optics instead of acid-base chemistry.", cn: "2.38 是 pK1，即每个氨基酸都有的 α-羧基，不是侧链的数值。这张卡片的生成事实恰恰相反：tryptophan 根本**没有**侧链 pKa，所以 Table 3-1 那一栏对它是空的——而侧链不解离，正是让这个环腾出手来做光学而不是酸碱化学的原因。" },
          2: { en: "True and irrelevant, which makes it the more tempting: Mr 204 does make tryptophan the largest of the twenty. But A280 is not a mass measurement — the Lambert-Beer law A = εcl turns absorbance into concentration through the molar extinction coefficient, and ε comes from the conjugated ring, not from the residue's bulk.", cn: "既真实又不相干，这才更容易上当：Mr 204 确实让 tryptophan 成为二十种中最大的。但 A280 不是质量测量——Lambert-Beer 定律 A = εcl 是通过 molar extinction coefficient 把吸光度换成浓度的，而 ε 来自共轭环，不来自残基的体积。" },
          3: { en: "The indole nitrogen carries no charge — it is what makes tryptophan measurably more polar than phenylalanine and so a membrane interface anchor, but it never ionises. The residue that is part-protonated at pH 7 is histidine, and that is the whole subject of its own card.", cn: "吲哚上的氮不带电荷——它使 tryptophan 的极性明显高于 phenylalanine，因而成为 membrane interface anchor，但它从不解离。在 pH 7 下部分质子化的那个残基是 histidine，那正是组氨酸那张卡片的全部主题。" }
        },
        why_en: "The absorbance at 280 nm comes from the conjugated flat indole ring. Trp has no ionisable R group at all, which is why Table 3-1 lists no R-group pKa for it.",
        why_cn: "280 nm 处的吸收来自共轭的扁平吲哚环。色氨酸完全没有可解离的侧链基团——这正是 Table 3-1 没有为它列出侧链 pKa 的原因。" },
      { type: "mcq",
        q_en: "At 280 nm, how does tryptophan's absorbance compare with tyrosine's?",
        q_cn: "在 280 nm 处，色氨酸的吸光度与酪氨酸相比如何？",
        options: [
          "About the same as tyrosine's / 与酪氨酸大致相同",
          "Roughly half of tyrosine's / 约为酪氨酸的一半",
          "More than four times greater / 超过四倍",
          "Tyrosine does not absorb there at all / 酪氨酸在该处完全不吸收"
        ],
        answer: 2,
        optionNotes: {
          0: { en: "If the two were equal, Trp content would not dominate a protein's A280 and a Trp-free protein would read just like any other. Fig. 3-6 puts them far apart, and that gap is the whole reason A280 works as a quick concentration assay at all.", cn: "如果两者相当，蛋白 A280 就不会由 Trp 含量主导，不含 Trp 的蛋白读数也会与别的没什么两样。Fig. 3-6 把两者拉得很开，而正是这个差距，才让 A280 成为一个可用的快速定量方法。" },
          1: { en: "This has the ratio the wrong way round as well as the wrong size — tryptophan is the larger absorber, not the smaller. Fig. 3-6 gives Trp more than four times Tyr's measured absorbance at 280 nm.", cn: "这句话不但把倍数说小了，还把方向弄反了——吸收更强的是 tryptophan，不是它更弱。Fig. 3-6 给出的是 280 nm 处 Trp 的实测吸光度是 Tyr 的四倍以上。" },
          3: { en: "Tyrosine absorbs at 280 nm perfectly well; it is simply outclassed by more than fourfold. Both residues contribute, which is why a protein's extinction coefficient depends on its Trp AND Tyr content and why only a protein with neither is hard to quantify this way.", cn: "tyrosine 在 280 nm 吸收得好好的，只是被强出四倍以上而已。两种残基都有贡献，所以一个蛋白的消光系数取决于它的 Trp **与** Tyr 含量，也所以只有两者都没有的蛋白才难以用这个办法定量。" }
        },
        why_en: "Fig. 3-6: Trp's measured absorbance is more than four times that of Tyr at 280 nm. That ratio is why Trp dominates a protein's A280 and why Trp-free proteins are hard to quantify this way.",
        why_cn: "Fig. 3-6：在 280 nm 处色氨酸的实测吸光度是酪氨酸的四倍以上。这个比值正是色氨酸主导蛋白质 A280 的原因，也是不含色氨酸的蛋白难以用此法定量的原因。" },
      { type: "short",
        q_en: "Why is tryptophan found specifically at the membrane interface rather than in the middle of the lipid bilayer or out in the water?",
        q_cn: "为什么色氨酸恰好出现在膜界面，而不是脂双层中央或水相之中？",
        accept: ["interface", "界面", "both", "polar", "极性", "indole nitrogen", "吲哚氮", "amphi", "anchor", "锚"],
        answer_en: "Because it is both at once. The flat ring is nonpolar enough to avoid water, but the indole nitrogen makes it measurably more polar than phenylalanine — so it has no ideal home either in bulk water or in the greasy core, and its ideal home is precisely the boundary where acyl chains meet head groups. Lehninger calls Trp and Tyr “membrane interface anchors, able to interact simultaneously with the central lipid phase” and the aqueous phases on either side of the membrane (A p.375–376).",
        answer_cn: "因为它两者兼具。扁平的环足够非极性以躲开水，但吲哚氮又使它的极性明显强于苯丙氨酸——所以它在纯水相和油性核心中都没有理想归宿，而它的理想归宿恰恰是酰基链与头部基团相接的边界。Lehninger 称色氨酸与酪氨酸为「膜界面锚」，能同时与脂相和两侧水相相互作用（A 第 396–397 页）。" }
    ],

    oral: {
      q_en: "Tell me about tryptophan.",
      q_cn: "请讲一讲色氨酸。",
      model_en: "I would start from its structure, because almost everything else follows from it. Tryptophan's side chain is an indole ring — bicyclic, flat, conjugated, and importantly carrying no ionisable group, so unlike say lysine or glutamate it has no side-chain pKa at all. Three consequences follow. First, a flat uncharged ring is difficult for water to solvate, so tryptophan is pushed out of water and tends to be buried in the hydrophobic core of a protein. But — and this is the interesting qualification — it is not purely nonpolar, because the indole nitrogen makes it significantly more polar than phenylalanine. That intermediate character explains where you actually find it in membrane proteins: not in the middle of the bilayer and not out in the water, but right at the interface where the acyl chains meet the polar head groups. Lehninger calls tryptophan and tyrosine membrane interface anchors, because they can interact with the lipid phase and the aqueous phase at the same time. Second consequence: a conjugated aromatic ring absorbs ultraviolet light, and tryptophan absorbs at 280 nanometres more than four times as strongly as tyrosine. Combined with the Lambert-Beer law, absorbance equals epsilon times concentration times path length, that is exactly what a Nanodrop does when it reports a protein concentration from one microlitre. Third, on metabolism: tryptophan is the most expensive amino acid for the cell to make — the aromatic branch is the longest biosynthetic pathway of the twenty, running from chorismate through anthranilate and PRPP to indole-3-glycerol phosphate, with tryptophan synthase at the end. Because it is so costly, E. coli regulates it twice: repression, where tryptophan itself binds the repressor which then blocks the promoter, and attenuation layered on top, and between them the synthesis rate can vary about seven hundred fold. That is the trp operon, the classic textbook example. Finally, tryptophan is both ketogenic and glucogenic — one of only five amino acids that are both — and it is the precursor of serotonin and hence of melatonin.",
      checklist: [
        "Started from the indole ring: flat, conjugated, no ionisable group, hence no R-group pKa",
        "Hydrophobic effect → buried in the protein core",
        "Qualified it: indole nitrogen makes Trp more polar than Phe",
        "Membrane interface anchor — where acyl chains meet head groups, interacting with both phases",
        "UV absorbance at 280 nm, more than 4× tyrosine",
        "Closed the loop to concentration via the Lambert-Beer law / Nanodrop",
        "Most expensive amino acid to synthesise; longest pathway of the twenty",
        "trp operon: repression AND attenuation, ~700-fold range",
        "Both ketogenic and glucogenic",
        "Precursor of serotonin and melatonin"
      ]
    }
  },

  {
    id: "E-histidine",
    kind: "entity",
    topicKey: "amino-acids",
    enTitle: "Histidine — one pKa sitting at pH 7, and everything the cell builds on it",
    cnTitle: "组氨酸——一个恰好落在 pH 7 上的 pKa，以及细胞在它之上建起的一切",
    cnNote: { topic: "四", title: "氨基酸（笔记 pp.17–19：碱性氨基酸；组氨酸的咪唑基）", status: "partial" },

    mustKnow: {
      en: "Histidine\'s whole card hangs on one number: its imidazole pKa is about 6, the only common side chain ionisable near neutral pH. So in one and the same environment it can both give a proton away and take one back — which is why enzyme active sites are full of it, and why haemoglobin can use it as a pH sensor.",
      cn: "组氨酸整张卡挂在一个数上：它咪唑环的 pKa 约为 6，是唯一一个在中性 pH 附近可解离的常见侧链。所以**在同一个环境里，它既能把质子送出去、又能接回来**——这就是为什么酶的活性中心里到处是它，也是血红蛋白能拿它当 pH 传感器的原因。"
    },
    summary: {
      en: "Histidine is the second entity worth learning as a chain rather than a list, and its single generating fact is even sharper than tryptophan's: its imidazole side chain has a pKa of 6.0, which makes it “the only common amino acid having an ionizable side chain with pKa near neutrality” (A p.76). Sit that number next to the pH your cells actually run at and the consequence is immediate — at pH 7 histidine exists as a MIXTURE of the protonated and unprotonated forms, so the same residue can hand a proton away and take one back. Nothing else in the twenty can do that. Read downward and four separate stories come out of that one number: why chymotrypsin needs a histidine to make its serine reactive at all, why a single histidine is the reason background carbon monoxide does not kill you, why your blood unloads oxygen exactly in the tissues that need it, and why every His-tagged protein you have ever pulled off a nickel column comes off it. The exam value is the same as tryptophan's — remember pKa 6.0 and you can regenerate the rest.",
      cn: "组氨酸是第二个值得当成**链条**而不是清单来学的 entity，而它的生成性事实比色氨酸还要锋利：它的咪唑侧链 pKa = 6.0，这使它成为“the only common amino acid having an ionizable side chain with pKa near neutrality”（A 第76页）——二十种氨基酸里唯一一个侧链在中性附近解离的。把这个数字和你的细胞实际运行的 pH 并排放在一起，推论立刻就出来了：在 pH 7 下，组氨酸以质子化与非质子化两种形式**共存**，所以**同一个残基既能把质子交出去、又能把质子收回来**。其余十九种没有一个做得到。自上而下读，这一个数字长出四个彼此独立的故事：为什么胰凝乳蛋白酶非得靠一个组氨酸才能让它的丝氨酸具备反应性、为什么仅仅一个组氨酸就是背景浓度的一氧化碳没能毒死你的原因、为什么你的血液恰好在最需要氧的组织里卸下氧、以及为什么你跑过的每一根镍柱都能把 His-tag 蛋白洗下来。考试价值与色氨酸相同——记住 pKa 6.0，其余的都能重新推出来。"
    },

    chains: [
      {
        title_en: "Chain 1 — pKa 6.0 makes histidine the cell's proton handler, and chymotrypsin is the proof",
        title_cn: "链条一：pKa 6.0 使组氨酸成为细胞的质子搬运工，胰凝乳蛋白酶就是证明",
        steps: [
          { en: "Start with the numbers. Histidine has three ionizable groups, and the book gives them in a worked example: “The pKa values for histidine are” pK1 = 1.8 (the carboxyl), pK2 = 6.0 (the imidazole side chain) and pK3 = 9.2 (the α-amino group). The middle one is the whole card.",
            cn: "从数字开始。组氨酸有三个可解离基团，教材在一个例题里给出：“The pKa values for histidine are” pK1 = 1.8（羧基）、pK2 = 6.0（咪唑侧链）、pK3 = 9.2（α-氨基）。中间那一个就是整张卡片的全部。",
            src: "A p.61, §2.3" },
          { en: "Why 6.0 matters is not that it is small but that it is close to 7. Lehninger states it as a uniqueness claim: “As the only common amino acid having an ionizable side chain with pKa near neutrality”, and it lists histidine among the positively charged R groups as the one “histidine, which has an aromatic imidazole group”.",
            cn: "6.0 之所以重要，不在于它小，而在于它**接近 7**。Lehninger 把这写成一个唯一性论断：“As the only common amino acid having an ionizable side chain with pKa near neutrality”；在带正电的 R 基一类里，它是“histidine, which has an aromatic imidazole group”那一个。",
            src: "A p.76, §3.1" },
          { en: "The consequence is stated in the same paragraph, and it is the sentence to memorise: “histidine may be positively charged (protonated form) or uncharged at pH 7.0”. Both forms are present at once at physiological pH. Therefore one residue can act as an acid and as a base — which is why His residues “facilitate many enzyme-catalyzed reactions by serving as proton donors” and acceptors.",
            cn: "推论就在同一段里，而且是那句该背下来的话：“histidine may be positively charged (protonated form) or uncharged at pH 7.0”——在生理 pH 下两种形式**同时存在**。因此**同一个残基既能当酸又能当碱**，这正是组氨酸残基能够“facilitate many enzyme-catalyzed reactions by serving as proton donors”（以及受体）的原因。",
            src: "A p.76, §3.1" },
          { en: "Now the worked example, and it starts from a problem. Chymotrypsin attacks its substrate with the oxygen of Ser195 — but a serine hydroxyl is a poor nucleophile while it still carries its proton, and “of a Ser hydroxyl group is generally too high” for the unprotonated form to be present in any useful amount at physiological pH. Serine alone cannot do the job.",
            cn: "现在进入实例，而它起于一个**问题**。胰凝乳蛋白酶用 Ser195 的氧去进攻底物——但丝氨酸羟基只要还带着质子就是个很差的亲核体，而丝氨酸羟基的 pKa“of a Ser hydroxyl group is generally too high”，以至于在生理 pH 下非质子化形式的量根本不够用。**丝氨酸单靠自己做不成这件事。**",
            src: "A p.205, §6.4" },
          { en: "The solution is to put a histidine next to it. In chymotrypsin Ser195 is linked to His57 and Asp102 “in a hydrogen-bonding network referred to as the catalytic triad”. The name of the enzyme class follows: “Proteases with a Ser residue that plays this role in reaction mechanisms are called serine proteases”.",
            cn: "解法是**在它旁边放一个组氨酸**。在胰凝乳蛋白酶中，Ser195 与 His57、Asp102 相连，“in a hydrogen-bonding network referred to as the catalytic triad”（催化三联体）。酶类的名称也由此而来：“Proteases with a Ser residue that plays this role in reaction mechanisms are called serine proteases”。",
            src: "A p.205, §6.4" },
          { en: "And here is the part worth pausing on, because the protein does not merely USE histidine's pKa — it TUNES it. When substrate binds, a conformational change “compresses the hydrogen bond between His57 and Asp102”, “resulting in a stronger interaction”, and that raises His57's own pKa from about 7 for free histidine to over 12 — “allowing the His residue to act as an enhanced general base” which strips the proton off Ser195 and so “makes the Ser side chain a stronger nucleophile”.",
            cn: "这里值得停一下，因为蛋白质不只是**利用**组氨酸的 pKa——它还**调这个 pKa**。底物结合时，构象变化“compresses the hydrogen bond between His57 and Asp102”，“resulting in a stronger interaction”，从而把 His57 自身的 pKa 从游离组氨酸的约 7 抬高到 12 以上——“allowing the His residue to act as an enhanced general base”，于是它把 Ser195 上的质子夺走，“makes the Ser side chain a stronger nucleophile”。",
            src: "A p.208, §6.4" },
          { en: "Then the same residue turns round and does the opposite job. Later in the cycle His57 protonates the leaving group, “now acting as a general acid catalyst”, and further on it deprotonates the attacking water and reprotonates the serine oxygen. One residue, both roles, several times in one turnover — and that is only possible because its pKa sits in the middle of the working range rather than at one end. (The transient negative charge that develops is caught separately, “forming within a pocket on the enzyme called the oxyanion hole”.)",
            cn: "接着**同一个残基**转过身去做相反的工作。在循环稍后，His57 把质子给了离去基团，“now acting as a general acid catalyst”；再往后它又夺走进攻水分子的质子、并在丝氨酸氧离去时把质子还给它。一个残基、两种角色、在一次周转里来回数次——而这之所以可能，正因为它的 pKa 落在工作区间的**中央**而不是某一端。（过程中出现的瞬时负电荷由另一处结构接住，“forming within a pocket on the enzyme called the oxyanion hole”。）",
            src: "A p.208, §6.4" },
          { en: "The observable, per the rule that every chain must end on something you can see: you can read this pKa straight off a kinetics experiment. “The pH dependence of chymotrypsin-catalyzed reactions” gives a bell-shaped “pH-rate profile with an optimum at pH 8.0”, and the book states the condition plainly — for full activity “His57 must be unprotonated”. The falling left-hand limb of that curve IS histidine losing its proton. A number from a titration table, visible as the shape of a rate curve.",
            cn: "按「每条链都要落在看得见的东西上」这条规矩，本链的可观测量是：**你可以直接从动力学实验里读出这个 pKa**。“The pH dependence of chymotrypsin-catalyzed reactions” 给出一条钟形的“pH-rate profile with an optimum at pH 8.0”，而教材把条件说得很直白——要有完整活性，“His57 must be unprotonated”。**那条曲线左侧下降的一支，就是组氨酸在失去质子。**一个来自滴定表的数字，以速率曲线的形状呈现出来。",
            src: "A p.205, §6.4" }
        ]
      },
      {
        title_en: "Chain 2 — the imidazole nitrogen holds the haem iron, and that is why background CO does not kill you",
        title_cn: "链条二：咪唑氮抓住血红素铁——这就是背景浓度的一氧化碳没毒死你的原因",
        steps: [
          { en: "Imidazole's other property is its nitrogen lone pair, which coordinates metals. In the globins the haem iron has six coordination bonds, four to the porphyrin ring and two perpendicular to it, and one of those two is permanently occupied by “a highly conserved His residue referred to as the proximal His” — His93, also called His F8, in myoglobin. The protein holds the iron by a histidine.",
            cn: "咪唑的另一个性质是它氮上的孤对电子，能**配位金属**。在珠蛋白中，血红素铁有六个配位键，四个连向卟啉环、两个垂直于环面，而这两个中的一个被“a highly conserved His residue referred to as the proximal His”（近端组氨酸）长期占据——在肌红蛋白中即 His93，也写作 His F8。**蛋白质是靠一个组氨酸攥住这个铁的。**",
            src: "A p.149, §5.1" },
          { en: "The other perpendicular bond is where O₂ binds — and a SECOND histidine sits on the far side of it, the distal His (His64, His E7). It does not touch the iron. What it does is reach across to the bound oxygen: “A hydrogen bond between the imidazole side chain of His E7” and the bound O₂ stabilises the complex, because the Fe–O₂ complex carries a partial negative charge and is therefore polar.",
            cn: "另一个垂直配位键正是 O₂ 的结合位点——而在它的**对面**还坐着**第二个**组氨酸，即远端组氨酸（His64，His E7）。它**不接触铁**。它做的是伸过去够住已结合的氧：“A hydrogen bond between the imidazole side chain of His E7” 与结合的 O₂ 之间形成氢键并使该复合物稳定，因为 Fe–O₂ 复合物带部分负电荷、因而是**极性的**。",
            src: "A p.152, §5.1" },
          { en: "The size of the effect: myoglobin's oxygen affinity “is thus selectively increased by a factor of about 500”, and it “is selectively increased by the presence of the distal His”. Read the word SELECTIVELY carefully — it is the whole point of the chain.",
            cn: "效应有多大：肌红蛋白对氧的亲和力“is thus selectively increased by a factor of about 500”（约提高 500 倍），而且它“is selectively increased by the presence of the distal His”。请仔细读 **SELECTIVELY（选择性地）** 这个词——它是整条链的关键。",
            src: "A p.152, §5.1" },
          { en: "It is selective because CO cannot accept that hydrogen bond. The Fe–CO complex is not polar in the same way, so the distal His does nothing for it. Free haem binds CO about 20,000 times more tightly than O₂, but that preference “declines to approximately 40-fold for heme embedded in myoglobin”. The oxygen got a 500-fold boost and carbon monoxide got none.",
            cn: "它之所以是**选择性**的，是因为 CO **接不住**那个氢键。Fe–CO 复合物不具有同样的极性，所以远端组氨酸对它毫无帮助。游离血红素结合 CO 的紧密程度约为 O₂ 的 **20,000 倍**，但这一偏好“declines to approximately 40-fold for heme embedded in myoglobin”（在嵌入肌红蛋白的血红素中降至约 40 倍）。**氧得到了 500 倍的加成，一氧化碳一点也没有。**",
            src: "A p.152, §5.1" },
          { en: "The observable, and it is a clinical one — the book draws the conclusion itself: this selectivity matters because “it helps prevent poisoning by the CO that is generated in small amounts from metabolism”. Your own metabolism produces carbon monoxide continuously. Without the distal histidine that background CO would occupy your haemoglobin permanently and you would asphyxiate on your own by-product. One side chain, positioned to hydrogen-bond to one of two similar-looking ligands and not the other, is what makes aerobic life on a CO-producing metabolism possible.",
            cn: "本链的可观测量是**临床**的——而且这个结论是教材自己下的：这种选择性之所以重要，是因为“it helps prevent poisoning by the CO that is generated in small amounts from metabolism”（它有助于防止由代谢少量产生的 CO 造成中毒）。你自身的代谢在持续产生一氧化碳。**若没有远端组氨酸**，这些背景 CO 会永久占据你的血红蛋白，你会被自己的代谢副产物窒息而死。一个侧链，被摆在恰好能与两个长得很像的配体中的**一个**形成氢键、而对另一个无能为力的位置上——**这就是「以产生 CO 的代谢方式过好氧生活」得以可能的原因。**",
            src: "A p.152, §5.1" }
        ]
      },
      {
        title_en: "Chain 3 — the same pKa again, now as your blood's oxygen-unloading switch",
        title_cn: "链条三：同一个 pKa，这次成了你血液卸氧的开关",
        steps: [
          { en: "Back to pKa 6.0, but in a different setting. Blood is not at one pH: “The pH of blood is 7.6 in the lungs and 7.2 in the tissues”. That 0.4-unit swing is small in absolute terms, but it lands squarely in the range where an imidazole group changes its protonation state — which no other side chain would notice.",
            cn: "回到 pKa 6.0，但换一个场景。血液并不是单一 pH：“The pH of blood is 7.6 in the lungs and 7.2 in the tissues”。这 0.4 个单位的摆动在绝对值上很小，却**正好落在咪唑基改变质子化状态的区间里**——而其余任何侧链都不会察觉到这个变化。",
            src: "A p.161, §5.1" },
          { en: "The physiological effect of that pH difference on oxygen binding has a name: it “is called the Bohr effect, after Christian Bohr, the Danish physiologist” who described it in 1904 — the father of the physicist Niels Bohr.",
            cn: "这一 pH 差异对氧结合所产生的生理效应有一个名字：它“is called the Bohr effect, after Christian Bohr, the Danish physiologist”——由这位丹麦生理学家于 1904 年描述，他是物理学家 Niels Bohr 的父亲。",
            src: "A p.160, §5.1" },
          { en: "Note first what it is NOT: oxygen and protons “are not bound at the same sites in hemoglobin”. O₂ goes to the haem irons; the protons go to amino acid side chains elsewhere in the protein. This is allostery, not competition for one site — the mistake worth not making in an oral answer.",
            cn: "先注意它**不是**什么：氧与质子“are not bound at the same sites in hemoglobin”。O₂ 去的是血红素铁，质子去的是蛋白质中别处的氨基酸侧链。**这是别构效应，不是两者争夺同一个位点**——这是口试作答时最值得避开的错误。",
            src: "A p.161, §5.1" },
          { en: "And the residue responsible is a histidine: “A major contribution to the Bohr effect is made by His146” of the β subunits. When protonated it forms an ion pair with Asp94 that “helps stabilize deoxyhemoglobin in the T state” — the low-affinity state.",
            cn: "而负责的残基正是一个组氨酸：“A major contribution to the Bohr effect is made by His146”，位于 β 亚基上。当它被质子化时，会与 Asp94 形成一对离子键，从而“helps stabilize deoxyhemoglobin in the T state”——即**低亲和力**状态。",
            src: "A p.161, §5.1" },
          { en: "Now assemble it, because assembled it is one of the most satisfying arguments in the whole book. A tissue working hard produces CO₂ and acid, so its pH falls. The falling pH protonates His146. Protonated His146 locks haemoglobin into the low-affinity T state. Low affinity means the oxygen is let go — precisely in the tissue that was working hard enough to acidify itself. In the lung the pH rises, His146 deprotonates, the T state is destabilised, and haemoglobin takes oxygen back up. The delivery system needs no sensor and no signal: the pKa IS the sensor.",
            cn: "现在把它拼起来，因为拼起来之后这是全书最令人satisfying的论证之一。一块正在费力工作的组织产生 CO₂ 与酸，于是其 pH 下降。下降的 pH 使 His146 质子化。质子化的 His146 把血红蛋白**锁定**在低亲和力的 T 态。低亲和力意味着**氧被放开**——而且恰好是在那块费力到把自己弄酸了的组织里。到了肺里 pH 回升，His146 去质子化，T 态失稳，血红蛋白重新装上氧。**这套输送系统不需要任何传感器、也不需要任何信号：那个 pKa 本身就是传感器。**",
            src: "" }
        ]
      },
      {
        title_en: "Chain 4 — six histidines in a row, and the nickel column on your bench",
        title_cn: "链条四：连着的六个组氨酸，与你实验台上的那根镍柱",
        steps: [
          { en: "Return to the metal-coordinating lone pair from chain 2 — the property that holds the haem iron. Molecular biology took that same chemistry and used it deliberately, by appending to a protein “a simple sequence of six or more His residues”.",
            cn: "回到链条二里那对能配位金属的孤对电子——也就是攥住血红素铁的那个性质。分子生物学把**同一套化学**拿过来**刻意使用**：在蛋白质上接一段“a simple sequence of six or more His residues”。",
            src: "A p.313, §9.1" },
          { en: "What that buys you is stated flatly: “These histidine tags, or His tags, bind tightly and specifically to nickel ions”. Tightly, and specifically — the two properties a purification handle has to have.",
            cn: "它换来的是什么，书里说得很直白：“These histidine tags, or His tags, bind tightly and specifically to nickel ions”。**又紧、又专一**——这正是一个纯化把手必须具备的两个性质。",
            src: "A p.313, §9.1" },
          { en: "So a matrix carrying immobilised Ni²⁺ “can be used to quickly separate a His-tagged protein from other proteins in an extract”. That is the observable this chain ends on, and it is one you have run yourself: every His-tag purification works because imidazole coordinates a transition metal — the same reason a histidine can hold the iron in the haemoglobin carrying oxygen to the hand pipetting the column.",
            cn: "于是一根带有固定化 Ni²⁺ 的柱子“can be used to quickly separate a His-tagged protein from other proteins in an extract”。这就是本链落脚的可观测现象，而且是**你自己跑过的**：每一次 His-tag 纯化之所以成立，都是因为咪唑能配位过渡金属——**与「一个组氨酸攥住血红蛋白里的铁、把氧送到你正在上柱的那只手上」是同一个理由。**",
            src: "A p.313, §9.1" }
        ]
      }
    ],

    points: [
      { cz: "His — konstanty", en: "The constants, for when you are asked flatly: pK1 = 1.8 (carboxyl), pK2 = 6.0 (imidazole), pK3 = 9.2 (α-amino). Unlike tryptophan, where the ABSENCE of an R-group pKa generates the card, here it is the PRESENCE of one, at 6.0, that does — the only side-chain pKa near neutrality among the twenty.",
        cn: "被直接问到时用的常数：pK1 = 1.8（羧基）、pK2 = 6.0（咪唑）、pK3 = 9.2（α-氨基）。与色氨酸相反——那里是侧链 pKa 的**缺席**推出整张卡片，这里则是它的**在场**、且恰好在 6.0：二十种氨基酸中唯一一个接近中性的侧链 pKa。" },
      { cz: "histamin — dekarboxylace", en: "What histidine becomes: “histidine undergoes decarboxylation to histamine, a powerful vasodilator in animal tissues” (A p.822). One decarboxylation, and it is the mediator of the allergic response. It has a second job too — “it also stimulates acid secretion in the stomach” (A p.822). This is the Czech book's §10.3 territory and Lehninger's §22.3, which the depth node L-22-3-1 already covers.",
        cn: "组氨酸会变成什么：“histidine undergoes decarboxylation to histamine, a powerful vasodilator in animal tissues”（A 第822页）。**一步脱羧**，就得到了过敏反应的介质。它还有第二个职务——“it also stimulates acid secretion in the stomach”（A 第822页）。这属于捷克教材 §10.3 与 Lehninger §22.3 的范围，深度节点 L-22-3-1 已经覆盖。",
      },
      { cz: "cimetidin — lék postavený na tomto", en: "The drug that follows, and it is worth having ready as an example of mechanism becoming medicine: cimetidine (Tagamet) is a structural analogue of histamine that blocks its receptor, and “it promotes the healing of duodenal ulcers by inhibiting secretion of gastric acid” (A p.822). A decarboxylated amino acid, a receptor, and a blockbuster ulcer drug — the whole line runs from one imidazole ring.",
        cn: "由此而来的药物，值得备着当作「机制变成医学」的例子：西咪替丁（Tagamet）是组胺的结构类似物，阻断其受体，而“it promotes the healing of duodenal ulcers by inhibiting secretion of gastric acid”（A 第822页）。一个脱羧的氨基酸、一个受体、一款十亿美元级的溃疡药——**整条线索都源自一个咪唑环。**",
      },
      { cz: "dvě His v hemoglobinu — nezaměňovat", en: "Do not confuse the three histidines that appear in the globin story, because an examiner can ask for any of them: the PROXIMAL His (His93/F8) bonds the iron directly; the DISTAL His (His64/E7) does not touch the iron but hydrogen-bonds the bound oxygen; and His146 (HC3) of the β subunit is a different residue again, the Bohr-effect one, which forms an ion pair stabilising the T state.",
        cn: "不要混淆珠蛋白故事里出现的**三个**组氨酸，因为考官任何一个都可能问：**近端** His（His93/F8）直接与铁成键；**远端** His（His64/E7）**不接触铁**，而是与已结合的氧形成氢键；而 β 亚基上的 **His146（HC3）** 又是另一个残基，属于 Bohr 效应，通过形成离子对稳定 T 态。" },
      { cz: "proč je His v aktivních místech tak častý", en: "The generalisation worth stating out loud in an oral answer: histidine is over-represented in enzyme active sites far beyond its abundance in proteins, and chain 1 says why. Catalysis very often requires moving a proton, and at pH 7 histidine is the only side chain that is half-loaded — able to give one or take one without waiting for the pH to change.",
        cn: "值得在口试中明确说出来的那条概括：**组氨酸在酶活性中心里的出现频率，远高于它在蛋白质中的丰度**，而链条一说明了原因。催化极其频繁地需要**搬运一个质子**，而在 pH 7 下，组氨酸是唯一一个「半装载」的侧链——**无需等待 pH 改变，就能随时给出或接受一个质子。**" }
    ],

    beyondPoints: [
      { en: "NOT PRINTED IN EITHER BOOK — histidine's pI. It follows arithmetically from the book's own pKa values as (6.0 + 9.2) / 2 ≈ 7.6, since the two transitions flanking the neutral species are pK2 and pK3, but Lehninger does not print the figure for histidine in the passages read for this card. Flagged rather than presented as sourced; if an exam wants pI, derive it from the two pKa values rather than quoting a number from memory.",
        cn: "两本书里都没有印出——**组氨酸的 pI**。它可以由教材自身给出的 pKa 值算出：(6.0 + 9.2) / 2 ≈ 7.6，因为夹住中性型的两次解离是 pK2 与 pK3；但在为本卡片阅读的段落中，Lehninger 并未印出组氨酸的这个数值。**标出来而不是当作有来源**；考试若要 pI，请从两个 pKa 现推，而不要凭记忆报数字。" },
      { en: "NOT IN THE PASSAGES READ — how a His-tagged protein is actually ELUTED. Lehninger says the tag binds nickel and that the matrix separates the protein, but the bench step that completes the method — competing the tag off with an imidazole gradient, i.e. free imidazole displacing the His side chains — is not stated in §9.1. Worth knowing because it is the step that makes the tag reversible, and because it explains why free imidazole is what sits in your elution buffer.",
        cn: "所读段落中没有——**His-tag 蛋白究竟怎么洗脱**。Lehninger 说了标签结合镍、柱子能分离蛋白，但让整套方法闭环的那一步台面操作——**用咪唑梯度把标签竞争下来**，即游离咪唑置换掉 His 侧链——在 §9.1 中并未说明。值得知道，因为正是这一步使该标签**可逆**，也解释了为什么你的洗脱缓冲液里装的就是游离咪唑。" }
    ],

    terms: [
      { cz: "imidazol", en: "imidazole ring", cn: "咪唑环",
        def_en: "The five-membered, two-nitrogen aromatic side chain of histidine. Two properties do all the work: a pKa of 6.0, and a nitrogen lone pair that coordinates metals. Every chain on this card starts from one or the other.",
        def_cn: "组氨酸的五元双氮芳香侧链。两个性质承担了全部工作：pKa = 6.0，以及一对能配位金属的氮孤对电子。本卡片的每一条链都起于其中之一。" },
      { cz: "proximální His", en: "proximal His", cn: "近端组氨酸",
        def_en: "The conserved His that occupies one of the two perpendicular coordination bonds of the haem iron and so anchors the haem to the protein — His93 (His F8) in myoglobin. It touches the iron.",
        def_cn: "占据血红素铁两个垂直配位键之一、从而把血红素锚定在蛋白上的保守组氨酸——肌红蛋白中为 His93（His F8）。**它接触铁。**" },
      { cz: "distální His", en: "distal His", cn: "远端组氨酸",
        def_en: "His64 (His E7), on the far side of the oxygen-binding site. It does NOT bond the iron; it hydrogen-bonds the bound oxygen, raising O₂ affinity about 500-fold while doing nothing for CO — which is what makes the enhancement selective.",
        def_cn: "His64（His E7），位于氧结合位点的**另一侧**。它**不与铁成键**，而是与已结合的氧形成氢键，使 O₂ 亲和力提高约 500 倍，同时对 CO 毫无作用——这正是该增强作用具有**选择性**的原因。" },
      { cz: "katalytická triáda", en: "catalytic triad", cn: "催化三联体",
        def_en: "Ser195–His57–Asp102 in chymotrypsin, a hydrogen-bonding network. Its function is to make a serine hydroxyl into a usable nucleophile, which it cannot be on its own because its pKa is far too high. The defining feature of the serine proteases.",
        def_cn: "胰凝乳蛋白酶中的 Ser195–His57–Asp102 氢键网络。其功能是把一个丝氨酸羟基**变成可用的亲核体**——单靠它自己做不到，因为其 pKa 太高。这是丝氨酸蛋白酶类的定义性特征。" },
      { cz: "Bohrův efekt", en: "Bohr effect", cn: "Bohr 效应",
        def_en: "The dependence of haemoglobin's oxygen affinity on pH and CO₂, described by Christian Bohr in 1904. Mechanism: falling pH protonates His146 of the β subunit, which forms an ion pair stabilising the low-affinity T state, so oxygen is released. O₂ and H⁺ bind at different sites — it is allosteric, not competitive.",
        def_cn: "血红蛋白氧亲和力对 pH 与 CO₂ 的依赖性，由 Christian Bohr 于 1904 年描述。机制：pH 下降使 β 亚基的 His146 质子化，后者形成离子对稳定低亲和力的 T 态，于是氧被释放。O₂ 与 H⁺ **结合在不同位点**——这是**别构**，不是竞争。" },
      { cz: "His-tag", en: "His tag", cn: "His 标签",
        def_en: "A run of six or more His residues appended to a recombinant protein. It binds immobilised Ni²⁺ tightly and specifically, allowing one-step purification from a crude extract — the same metal-coordinating chemistry as the proximal His, put to deliberate use.",
        def_cn: "接在重组蛋白上的一段六个或更多的组氨酸。它与固定化 Ni²⁺ 结合得又紧又专一，从而可从粗提物中一步纯化——与近端组氨酸是**同一套配位化学**，只是被刻意加以利用。" },
      { cz: "obecná acidobazická katalýza", en: "general acid-base catalysis", cn: "总酸碱催化",
        def_en: "Catalysis in which a group other than water donates or accepts a proton during the reaction. Histidine is its commonest agent in proteins, because at pH 7 it is the only side chain available in both protonated and unprotonated forms at once.",
        def_cn: "反应过程中由水以外的基团给出或接受质子的催化方式。组氨酸是蛋白质中最常见的执行者，因为在 pH 7 下它是唯一同时以质子化与非质子化两种形式存在的侧链。" }
    ],

    quiz: [
      { type: "mcq",
        q_en: "Why is histidine, rather than any other amino acid, the residue most often found doing acid-base catalysis in enzyme active sites?",
        q_cn: "为什么在酶的活性中心里执行酸碱催化的，最常是组氨酸而不是其他任何氨基酸？",
        options: [
          "Its imidazole side chain is the most nucleophilic of the twenty, so it attacks the substrate itself / 它的咪唑侧链在二十种中亲核性最强，因而由它自己进攻底物",
          "Its side-chain pKa is 6.0, so at pH 7 both the protonated and unprotonated forms are present / 它的侧链 pKa 为 6.0，故在 pH 7 下质子化与非质子化两种形式同时存在",
          "It is the only amino acid carrying an aromatic ring, which is what makes it reactive / 它是唯一带芳香环的氨基酸，正是这一点使它具有反应性",
          "It carries a full positive charge at every physiological pH, so a proton is always ready / 它在任何生理 pH 下都带完整正电荷，故随时备有一个质子"
        ],
        answer: 1,
        optionRefs: { 0: "E-cysteine" },
        optionNotes: {
          0: { en: "The nucleophile in a serine protease is the serine, not the histidine — the whole function of the Ser195–His57–Asp102 triad is to make a serine hydroxyl usable as a nucleophile, which it cannot be alone because its pKa is far too high. Histidine's job in that network is to move the proton. For a side chain that really is reactive as a nucleophile, see the cysteine card.", cn: "丝氨酸蛋白酶里的亲核体是 serine，不是 histidine——Ser195–His57–Asp102 三联体的全部功能，就是把一个丝氨酸羟基变成可用的亲核体，而它单独做不到，因为 pKa 太高。histidine 在这个网络里的工作是**搬质子**。真正以亲核性见长的侧链，见 cysteine 那张卡片。" },
          2: { en: "It is not the only one — phenylalanine, tyrosine and tryptophan are aromatic too — and aromaticity by itself buys no catalysis: tryptophan's flat conjugated ring gives it UV absorbance and nothing acid-base at all. What matters here is the imidazole's pKa, not the fact that it is a ring.", cn: "它不是唯一的——phenylalanine、tyrosine 和 tryptophan 同样是芳香族——而且芳香性本身买不到催化能力：tryptophan 那个扁平共轭环给它的是紫外吸收，与酸碱毫无关系。这里要紧的是咪唑的 pKa，不是它是个环。" },
          3: { en: "Being permanently protonated is exactly what would disqualify it. A residue locked in one form can give a proton away once and then has no way to take one back; catalysis needs both moves in succession. That is why the pKa has to sit near the working pH rather than far below it.", cn: "永远处于质子化状态，恰恰会取消它的资格。锁死在一种形式上的残基，给出一个质子之后就再没有办法收回来；而催化需要这两步接连发生。这正是 pKa 必须落在工作 pH 附近、而不是远低于它的原因。" }
        },
        why_en: "Lehninger states the uniqueness directly: “As the only common amino acid having an ionizable side chain with pKa near neutrality”, histidine “may be positively charged (protonated form) or uncharged at pH 7.0” (A p.76). Because both forms coexist at physiological pH, one residue can donate a proton at one step and accept one at the next — which is exactly what His57 does in chymotrypsin. Option 3 is false anyway: Phe, Tyr and Trp are aromatic too.",
        why_cn: "Lehninger 直接给出了这个唯一性论断：“As the only common amino acid having an ionizable side chain with pKa near neutrality”，组氨酸“may be positively charged (protonated form) or uncharged at pH 7.0”（A 第76页）。因为两种形式在生理 pH 下**共存**，同一个残基才能在这一步给出质子、在下一步收回质子——这正是 His57 在胰凝乳蛋白酶中所做的。选项 3 本身也是错的：苯丙氨酸、酪氨酸、色氨酸同样是芳香族。" },
      { type: "mcq",
        q_en: "The distal His raises myoglobin's affinity for O₂ about 500-fold but does not help CO binding at all. Why does that selectivity matter physiologically?",
        q_cn: "远端组氨酸把肌红蛋白对 O₂ 的亲和力提高约 500 倍，却对 CO 结合毫无帮助。这种选择性在生理上为何重要？",
        options: [
          "It makes myoglobin release its oxygen faster in working muscle, which is what an oxygen store has to do if it is to be of any use at all / 它使肌红蛋白在做功的肌肉中更快释放氧，而一个氧储库若要有任何用处，正需要做到这一点",
          "It narrows free haem's ~20,000-fold preference for CO down to ~40-fold, so endogenously produced CO does not permanently block the site / 它把游离血红素对 CO 约 20,000 倍的偏好压缩到约 40 倍，使内源产生的 CO 不会永久占据该位点",
          "It holds the haem iron in the Fe³⁺ state, which is the only oxidation state able to bind a diatomic gas reversibly / 它把血红素铁保持在 Fe³⁺ 状态，而只有这个氧化态才能可逆地结合双原子气体",
          "It is what produces the Bohr effect, so that oxygen is unloaded exactly where the pH has fallen / 它正是产生 Bohr 效应的原因，使氧恰好在 pH 下降处被卸下"
        ],
        answer: 1,
        optionRefs: { 0: "E-cysteine" },
        optionNotes: {
          0: { en: "Raising affinity 500-fold makes myoglobin hold oxygen more tightly, not release it faster — and holding it is the point, since myoglobin is a store rather than a carrier. Unloading on demand is haemoglobin's job, and it is done by the Bohr effect and by the T-state ion pairs, not by the distal His.", cn: "把亲和力提高 500 倍，是让肌红蛋白把氧抓得**更紧**，而不是放得更快——而抓紧正是要点，因为肌红蛋白是储库不是运输者。按需卸氧是血红蛋白的工作，靠的是 Bohr 效应和 T 态的离子对，不是远端 His。" },
          2: { en: "The iron must be Fe²⁺, not Fe³⁺, for oxygen to bind at all — and the distal His does not touch the iron in any case. The residue that occupies a coordination bond of the haem iron is the PROXIMAL His, His93 (F8); the distal His64 (E7) sits on the far side and reaches only the bound gas. For a side chain that does bolt a cofactor on covalently, see the cysteine card and the c-type cytochromes.", cn: "铁必须是 Fe²⁺ 而不是 Fe³⁺，氧才可能结合——何况远端 His 根本不接触铁。占据血红素铁一个配位键的是**近端** His，即 His93 (F8)；远端的 His64 (E7) 在另一侧，只够得着结合上去的那个气体分子。至于真正把辅因子共价拴上去的侧链，见 cysteine 卡片与 c 型细胞色素。" },
          3: { en: "A third histidine, and a different protein. The Bohr effect runs through His146 (HC3) of the haemoglobin β subunit, which is protonated as the pH falls and forms an ion pair stabilising the low-affinity T state. Myoglobin has no such subunit and no cooperativity to modulate.", cn: "这是第三个 histidine，而且在另一个蛋白上。Bohr 效应走的是血红蛋白 β 亚基上的 His146 (HC3)，pH 下降时它被质子化，形成离子对稳定低亲和力的 T 态。肌红蛋白既没有这样的亚基，也没有可供调节的协同性。" }
        },
        why_en: "The Fe–O₂ complex is polar and can accept a hydrogen bond from the imidazole of His E7; the Fe–CO complex cannot, so only oxygen is helped. Affinity “is thus selectively increased by a factor of about 500” (A p.152), collapsing free haem's ~20,000-fold CO preference to roughly 40-fold in myoglobin. Since metabolism generates CO continuously, this selectivity is what stops your own by-product from occupying the site. Option 4 is a different histidine entirely — His146 of the β subunit.",
        why_cn: "Fe–O₂ 复合物是极性的，能接受来自 His E7 咪唑基的氢键；Fe–CO 复合物不能，所以**只有氧得到帮助**。亲和力“is thus selectively increased by a factor of about 500”（A 第152页），使游离血红素约 20,000 倍的 CO 偏好在肌红蛋白中塌缩到约 40 倍。由于代谢**持续**产生 CO，正是这种选择性阻止了你自己的副产物占据该位点。选项 4 说的是**完全另一个**组氨酸——β 亚基上的 His146。" },
      { type: "short",
        q_en: "Explain the Bohr effect mechanistically, starting from histidine's pKa.",
        q_cn: "请从组氨酸的 pKa 出发，机制性地解释 Bohr 效应。",
        accept: ["His146", "T state", "T 态", "ion pair", "离子对", "pKa", "protonat", "质子化", "different sites", "不同位点", "allosteric", "别构"],
        answer_en: "Blood pH is not constant — “The pH of blood is 7.6 in the lungs and 7.2 in the tissues” (A p.161) — and that 0.4-unit swing sits in the range where an imidazole changes protonation state, which is why histidine and not another residue is the sensor. A working tissue makes CO₂ and acid, the pH falls, and “A major contribution to the Bohr effect is made by His146” (A p.161) of the β subunits: protonated, it forms an ion pair with Asp94 that “helps stabilize deoxyhemoglobin in the T state” (A p.161), the low-affinity state, so oxygen is released exactly where metabolism is highest. In the lung the reverse happens. Crucially O₂ and H⁺ “are not bound at the same sites in hemoglobin” (A p.161) — this is allostery, not competition for one site.",
        answer_cn: "血液 pH 并非恒定——“The pH of blood is 7.6 in the lungs and 7.2 in the tissues”（A 第161页）——而这 0.4 个单位的摆动恰好落在咪唑基改变质子化状态的区间内，这正是**传感器是组氨酸而不是别的残基**的原因。做功的组织产生 CO₂ 与酸，pH 下降，而“A major contribution to the Bohr effect is made by His146”（A 第161页），位于 β 亚基：质子化后它与 Asp94 形成离子对，“helps stabilize deoxyhemoglobin in the T state”（A 第161页），即低亲和力状态，于是**氧恰好在代谢最旺盛处被释放**。在肺中过程反转。关键在于 O₂ 与 H⁺ “are not bound at the same sites in hemoglobin”（A 第161页）——这是**别构**，不是两者争夺同一位点。" }
    ],

    oral: {
      q_en: "Tell me about histidine.",
      q_cn: "请讲一讲组氨酸。",
      model_en: "I would start from one number, because everything else follows from it. Histidine has three ionizable groups — pK one is one point eight for the carboxyl, pK three is nine point two for the alpha-amino group, and in between, pK two is six point zero, which belongs to the imidazole side chain. That middle value is the important one, and not because it is small but because it is close to seven. Lehninger puts it as a uniqueness claim: histidine is the only common amino acid having an ionizable side chain with a pKa near neutrality. So at physiological pH histidine exists as a mixture — it may be positively charged, in the protonated form, or uncharged. Both forms are there at once. Now, three consequences. First, catalysis. Because both forms coexist, one histidine residue can donate a proton at one step of a reaction and accept one at the next. That is why His residues facilitate so many enzyme-catalysed reactions as proton donors and acceptors, and it is why histidine is far over-represented in active sites relative to its abundance. The worked example is chymotrypsin. The nucleophile is the oxygen of Ser195, but a serine hydroxyl has a pKa much too high to be deprotonated at physiological pH, so serine cannot act alone. The solution is the catalytic triad — Ser195 hydrogen-bonded to His57 and Asp102. And here is the elegant part: when substrate binds, a conformational change compresses the hydrogen bond between His57 and Asp102, and that raises His57's own pKa from about seven for free histidine to over twelve, which lets it act as an enhanced general base and strip the proton off the serine, making it a much stronger nucleophile. Then later in the same catalytic cycle the same residue acts as a general acid, protonating the leaving group. One residue, both roles. And you can see this on the bench: the pH-rate profile of chymotrypsin is bell-shaped with an optimum at pH eight, and for activity His57 must be unprotonated — so the left-hand limb of that curve is literally histidine losing its proton. Second consequence: the imidazole nitrogen coordinates metals. In myoglobin and haemoglobin the haem iron has two coordination positions perpendicular to the ring; one is permanently held by the proximal histidine, His93 or F8. The other is where oxygen binds — and on the far side of it sits a second histidine, the distal His, His64 or E7, which does not touch the iron but hydrogen-bonds the bound oxygen. That raises oxygen affinity about five hundred fold, and crucially it is selective, because the Fe-CO complex is not polar in the same way and gets no such help. Free haem prefers CO over oxygen by about twenty thousand fold; inside myoglobin that falls to roughly forty fold. Since our own metabolism produces CO continuously, that one histidine is why we are not poisoned by our own by-product. Third, and it is the same pKa as the first: the Bohr effect. Blood is pH seven point six in the lungs and seven point two in the tissues, and that small swing is exactly where an imidazole changes protonation. His146 of the beta subunit is the major contributor — when protonated it forms an ion pair with Asp94 that stabilises deoxyhaemoglobin in the T state, the low-affinity state, so oxygen is unloaded precisely in the tissue that has acidified itself by working. I should stress that oxygen and protons are not bound at the same sites; this is allostery, not competition. Finally two things worth adding. Histidine decarboxylates to histamine, a powerful vasodilator that mediates the allergic response and also stimulates gastric acid secretion — and blocking its receptor with cimetidine, a histamine analogue, heals duodenal ulcers. And in the laboratory we exploit the metal coordination deliberately: a tag of six or more histidines binds immobilised nickel tightly and specifically, which is how a His-tagged protein is purified in one step from a crude extract.",
      checklist: [
        "Started from the three pKa values and singled out pK2 = 6.0 for the imidazole",
        "Stated the uniqueness: the only common amino acid with a side-chain pKa near neutrality",
        "Drew the consequence — both protonated and uncharged forms coexist at pH 7",
        "Explained why that makes histidine the standard general acid-base catalyst",
        "Gave chymotrypsin: serine's pKa is too high, hence the Ser-His-Asp catalytic triad",
        "Included the pKa TUNING — compressing the His57–Asp102 bond raises His57's pKa from ~7 to >12",
        "Noted the same residue later acts as a general acid, not only as a base",
        "Landed it on an observable: the bell-shaped pH-rate profile, optimum pH 8, His57 unprotonated",
        "Distinguished proximal His (bonds the iron) from distal His (hydrogen-bonds the O₂)",
        "Gave the ~500-fold O₂ enhancement and explained why it is SELECTIVE against CO",
        "Drew the physiological payoff: endogenous CO does not permanently block the site",
        "Bohr effect: pH 7.6 lungs / 7.2 tissues, His146 protonation, ion pair with Asp94, T state stabilised",
        "Stated that O₂ and H⁺ bind at DIFFERENT sites — allosteric, not competitive",
        "Added histamine by decarboxylation, and cimetidine as the drug built on it",
        "Closed with the His-tag / nickel column as the same coordination chemistry used deliberately"
      ]
    }
  },

  {
    id: "E-cysteine",
    kind: "entity",
    topicKey: "amino-acids",
    enTitle: "Cysteine — the only side chain that makes a COVALENT bond, and the free thiol that keeps you alive",
    cnTitle: "半胱氨酸——唯一能形成**共价键**的侧链，以及那个让你活着的游离巯基",
    cnNote: { topic: "四", title: "氨基酸（笔记 pp.17–19：含硫氨基酸、胱氨酸与二硫键）", status: "partial" },

    mustKnow: {
      en: "Cysteine is the only side chain that forms a COVALENT bond with another side chain. Everything else amino acids do to each other is non-covalent and reversible; this one is not — which is why disulfides are counted as primary structure, why they are found in secreted proteins and not in the cytosol, and why reducing agents unfold a protein that heat alone would not.",
      cn: "半胱氨酸是**唯一**能和另一个侧链形成**共价键**的侧链。氨基酸之间其余所有相互作用都是非共价、可逆的，这一个不是——所以二硫键被算进一级结构，所以它出现在分泌蛋白里而不是胞质里，也所以还原剂能拆开一个单靠加热拆不开的蛋白。"
    },
    summary: {
      en: "Tryptophan's card runs from a ring that holds no charge; histidine's from a pKa sitting at pH 7. Cysteine's runs from something different in kind: it is the only side chain that can form a COVALENT bond with another side chain. Everything else amino acids do to each other — hydrogen bonds, ion pairs, hydrophobic packing — is non-covalent and reversible on the timescale of a breath. A disulfide is a real bond. Notice first that Lehninger files cysteine with the polar uncharged group and then immediately qualifies it: “cysteine is an outlier here because its polarity”, “contributed by its sulfhydryl group, is quite modest”. So its importance is not polarity at all. It is that “Cysteine is readily oxidized to form a covalently linked dimeric amino acid called cystine” (A p.76), and that these “Disulfide bonds play a special role in the structures of many proteins” “by forming covalent links between parts of a polypeptide molecule” or between two separate chains. Four consequences follow, and unusually for this project the fourth ends in a hospital. First, structure: insulin is two separate polypeptides that “are joined by disulfide cross-linkages” and nothing else. Second, technique: because the bond is covalent you must deliberately break it before you can see what a protein is made of — which is why Sanger had to break insulin apart before he could sequence it, and why running a gel with and without a reducing agent is how you tell a real subunit from a chain tied on by a disulfide. Third, folding: getting the RIGHT pairs joined is a hard enough problem that cells keep an enzyme for it, protein disulfide isomerase, whose whole job is “the interchange, or shuffling, of disulfide bonds” “until the bonds of the native conformation are formed”. Fourth, and this is the one to tell an examiner: the cysteines that DO NOT pair up are the cell's reducing power. Carried as glutathione, that free thiol is what destroys the peroxide your own respiration makes — and when the pathway that regenerates it fails, a person eats a plate of falafel and their red cells burst. One sulfhydryl group, and the line runs from protein structure to a genetic disease that 400 million people carry because it protects against malaria.",
      cn: "色氨酸那张卡起于一个不带电荷的环，组氨酸那张起于一个恰好落在 pH 7 的 pKa。半胱氨酸起于**种类上**就不同的东西：**它是唯一能与另一个侧链形成共价键的侧链。**氨基酸之间做的其余一切——氢键、离子对、疏水堆积——都是非共价的，在一次呼吸的时间尺度上就可逆。**而二硫键是一根真正的键。**先注意一件事：Lehninger 把半胱氨酸归进「极性不带电」一类，随即又立刻加以限定——“cysteine is an outlier here because its polarity”，“contributed by its sulfhydryl group, is quite modest”。**所以它的重要性根本不在极性。**而在于“Cysteine is readily oxidized to form a covalently linked dimeric amino acid called cystine”（A 第76页），以及这些“Disulfide bonds play a special role in the structures of many proteins”，“by forming covalent links between parts of a polypeptide molecule”或连接两条彼此独立的链。由此长出四条推论，而且——在本项目里不多见——**第四条一直走到了医院里**。其一，**结构**：insulin 是两条各自独立的多肽，它们“are joined by disulfide cross-linkages”，除此之外别无连接。其二，**技术**：正因为这是共价键，你必须**刻意去打断它**，才能看清一个蛋白到底由什么组成——这正是 Sanger 必须先把 insulin 拆开才能测序的原因，也是「加还原剂与不加还原剂各跑一次胶」能区分「真正的亚基」与「被二硫键拴上来的一条链」的原因。其三，**折叠**：把**正确的**那几对连起来，是个足够困难的问题，以至于细胞专门养了一个酶来干这件事——蛋白二硫键异构酶，它的全部职责就是“the interchange, or shuffling, of disulfide bonds”，“until the bonds of the native conformation are formed”。其四，也是最该讲给考官听的一条：**那些没有配对的半胱氨酸，就是细胞的还原力。**它以谷胱甘肽的形式被携带，正是这个游离巯基在销毁你自己的呼吸所产生的过氧化物——而当再生它的那条途径失灵时，一个人吃了一盘 falafel，红细胞就会破裂。**一个巯基，这条线索从蛋白质结构一直通向一种四亿人携带的遗传病——而他们之所以携带它，是因为它能抵抗疟疾。**"
    },

    chains: [
      {
        title_en: "Chain 1 — not polarity but reactivity: the one side chain that forms a real bond",
        title_cn: "链条一：关键不是极性而是反应性——唯一能形成真正化学键的侧链",
        steps: [
          { en: "Start with what the book does NOT say. Cysteine is listed among the polar uncharged R groups, and then immediately demoted: “cysteine is an outlier here because its polarity” is, “contributed by its sulfhydryl group, is quite modest”. It adds that “Cysteine is a weak acid and can make weak hydrogen bonds with oxygen or nitrogen”. Weak, modest, outlier — if polarity were the point, cysteine would be unremarkable.",
            cn: "先从教材**没有**说的东西开始。半胱氨酸被列在「极性不带电」的 R 基里，随即又立刻被降级：“cysteine is an outlier here because its polarity”——它的极性“contributed by its sulfhydryl group, is quite modest”（由巯基提供，相当有限）。书里还补充“Cysteine is a weak acid and can make weak hydrogen bonds with oxygen or nitrogen”。弱、有限、异类——**如果重点在极性，半胱氨酸就毫不起眼。**",
            src: "A p.76, §3.1" },
          { en: "The point is reactivity instead. “Cysteine is readily oxidized to form a covalently linked dimeric amino acid called cystine”, in which two cysteines are joined by a disulfide bond. Note the word covalently — this is the only side-chain-to-side-chain interaction in the twenty amino acids that is an actual chemical bond rather than an attraction.",
            cn: "重点在**反应性**。“Cysteine is readily oxidized to form a covalently linked dimeric amino acid called cystine”——两个半胱氨酸经由一个二硫键相连。请留意 **covalently（共价地）** 这个词：在二十种氨基酸中，这是**唯一**一种侧链对侧链的相互作用是**真正的化学键**、而不是某种吸引力。",
            src: "A p.76, §3.1" },
          { en: "So the structural role is different in kind from every other residue's. “Disulfide bonds play a special role in the structures of many proteins” “by forming covalent links between parts of a polypeptide molecule” or between two different polypeptide chains. Hydrogen bonds and hydrophobic packing shape a protein; a disulfide staples it.",
            cn: "因此它的结构作用在**种类**上就不同于其余任何残基。“Disulfide bonds play a special role in the structures of many proteins”，“by forming covalent links between parts of a polypeptide molecule”，或者连接两条不同的多肽链。氢键与疏水堆积**塑造**一个蛋白；而二硫键是把它**钉住**。",
            src: "A p.76, §3.1" },
          { en: "One detail that is easy to miss and worth keeping, because it inverts the classification you just learned: once the bond forms, the character of the residues flips. “The disulfide-linked residues are strongly hydrophobic” — nonpolar. Cysteine is filed as polar; cystine is not. The reaction changes which class the residue belongs to.",
            cn: "有一个容易忽略、却值得记住的细节，因为它把你刚学的分类**反了过来**：一旦键形成，残基的性质就翻转了。“The disulfide-linked residues are strongly hydrophobic”——非极性。半胱氨酸被归为极性，**胱氨酸却不是**。**这个反应改变了残基所属的类别。**",
            src: "A p.76, §3.1" },
          { en: "The observable, and it is one you inject: insulin. It is not one polypeptide but two, an A chain and a B chain, which “are joined by disulfide cross-linkages” and by nothing else. The book notes how conserved it is — “The A chain of insulin is identical in human, pig, dog, rabbit, and sperm whale insulins” — which is exactly why animal insulin worked as a human drug for decades. Czech node 10-25 and the depth node L-23-3-1 both treat insulin; neither says what physically holds it together.",
            cn: "本链的可观测物，而且是**你会注射进身体的**那个：insulin。它不是一条多肽，而是**两条**——A 链与 B 链——它们“are joined by disulfide cross-linkages”，除此之外别无连接。教材还指出它有多保守：“The A chain of insulin is identical in human, pig, dog, rabbit, and sperm whale insulins”——这正是动物胰岛素能作为人用药物使用数十年的原因。捷克节点 10-25 与深度节点 L-23-3-1 都讲了 insulin，**但都没说是什么在物理上把它连在一起。**",
            src: "A p.92, §3.4" }
        ]
      },
      {
        title_en: "Chain 2 — a covalent bond must be broken deliberately, which is why Sanger had to break insulin first",
        title_cn: "链条二：共价键必须被刻意打断——这正是 Sanger 必须先把 insulin 拆开的原因",
        steps: [
          { en: "Because the link is covalent, no buffer, no salt and no detergent will undo it. If you want to know what a protein is made of, you have to attack the bond chemically. This is not a footnote in the history of the subject: “The method used by Sanger to sequence insulin is based on the classical method” of direct chemical sequencing from the amino terminus, and insulin is two chains stapled together — so the disulfides had to go first.",
            cn: "因为这是**共价**连接，任何缓冲液、盐或去污剂都拆不开它。要想知道一个蛋白由什么组成，你必须**用化学手段去攻击这根键**。这在本学科的历史上不是脚注：“The method used by Sanger to sequence insulin is based on the classical method”（即从氨基端出发的经典直接化学测序法），而 insulin 是**被钉在一起的两条链**——所以**二硫键必须先被拆掉**。",
            src: "A p.92, §3.4" },
          { en: "Lehninger gives two routes under the heading “Breaking disulfide bonds in proteins”: oxidise the cystine with performic acid, which converts it into two cysteic acid residues and is irreversible; or reduce it, with dithiothreitol or β-mercaptoethanol, back to two free cysteines.",
            cn: "Lehninger 在“Breaking disulfide bonds in proteins”这一标题下给了两条路线：用**过甲酸氧化**胱氨酸，把它转变成两个半胱磺酸残基，这是不可逆的；或者用**二硫苏糖醇（DTT）或 β-巯基乙醇还原**它，还原回两个游离的半胱氨酸。",
            src: "A p.93, §3.4" },
          { en: "But reduction alone does not finish the job, and this is the step people forget: two free thiols sitting next to each other will simply re-oxidise and re-form the bond. So the freed —SH groups must be capped. “Carboxymethylation by iodoacetate serves this purpose”. Reduce, then block — one operation, two reagents.",
            cn: "但**光还原并不算完**，而这一步正是人们最容易忘记的：两个彼此相邻的游离巯基会**重新被氧化、重新成键**。因此释放出来的 —SH 必须被**封端**。“Carboxymethylation by iodoacetate serves this purpose”（用碘乙酸做羧甲基化即可达到此目的）。**先还原、再封闭**——一次操作，两种试剂。",
            src: "A p.93, §3.4" },
          { en: "The same chemistry has a second use the book points out in passing: “The methods used to break disulfide bonds can also be used to denature proteins when that is required”. Breaking the staples and unfolding the protein are the same operation seen from two ends.",
            cn: "同一套化学还有教材顺带指出的第二种用途：“The methods used to break disulfide bonds can also be used to denature proteins when that is required”。**拆掉钉子**与**让蛋白去折叠**，其实是同一个操作的两个视角。",
            src: "A p.93, §3.4" },
          { en: "The observable, and it is the one you will actually use at a bench: run the same sample on SDS-PAGE with and without a reducing agent. If a band splits into two when you add DTT, those were separate chains held by an interchain disulfide, not one polypeptide. If the pattern does not change, the disulfides were all intramolecular. Reduced versus non-reduced is the standard way to distinguish a genuine subunit from a chain tied on by cysteine.",
            cn: "本链的可观测量，而且是你在台面上**真的会用**的那一个：把同一份样品在**加还原剂**与**不加还原剂**两种条件下各跑一次 SDS-PAGE。若加了 DTT 之后某条带**裂成两条**，那说明它们本是由**链间二硫键**连着的两条独立的链，而不是一条多肽。若图谱不变，则二硫键全是**分子内**的。**还原 vs 非还原**，就是区分「真正的亚基」与「被半胱氨酸拴上来的一条链」的标准做法。",
            src: "" }
        ]
      },
      {
        title_en: "Chain 3 — forming the RIGHT pairs is hard enough that the cell keeps an enzyme for it",
        title_cn: "链条三：把「正确的」那几对连起来有多难——难到细胞专门养了一个酶",
        steps: [
          { en: "Making a disulfide is easy; making the correct one is not. The classic demonstration is Anfinsen's, which Lehninger figures as the “Renaturation of unfolded, denatured ribonuclease” — urea unfolds the chain and mercaptoethanol reduces its disulfides, and on removing both the enzyme folds back and its activity returns, which is the evidence that sequence alone specifies structure.",
            cn: "**造出一根二硫键很容易，造出「对的那一根」不容易。**经典演示是 Anfinsen 的实验，Lehninger 以“Renaturation of unfolded, denatured ribonuclease”为图题——尿素使肽链去折叠、巯基乙醇还原其二硫键，而当两者都被去除后，该酶会**重新折叠、活性恢复**，这正是「仅凭序列即可决定结构」的证据。",
            src: "A p.130, §4.4" },
          { en: "But count the possibilities. A protein with eight cysteines can pair them up in many ways and only one is right; the wrong ones are covalent too, so a mistake does not simply fall apart again. Left alone, a folding protein can staple itself into a dead end.",
            cn: "但把可能性数一数。一个含**八个**半胱氨酸的蛋白，其配对方式有很多种，而**只有一种是对的**；错的那些**同样是共价键**，所以一个错误**不会自己散掉**。若放任不管，一个正在折叠的蛋白会把自己**钉死在一条死路上**。",
            src: "" },
          { en: "So cells keep a dedicated enzyme to fix exactly this. “Protein disulfide isomerase (PDI) is a widely distributed enzyme” that catalyses “the interchange, or shuffling, of disulfide bonds” “until the bonds of the native conformation are formed”. Note that it does not make or break the bonds on balance — it SWAPS them, trying pairings until the right set is reached.",
            cn: "于是细胞专门养了一个酶来解决这件事。“Protein disulfide isomerase (PDI) is a widely distributed enzyme”（蛋白二硫键异构酶，一种分布广泛的酶），它催化“the interchange, or shuffling, of disulfide bonds”，“until the bonds of the native conformation are formed”。请注意：它在净效果上**并不生成或破坏**这些键——它**交换**它们，不断试换配对，直到试出正确的那一组。",
            src: "A p.133, §4.4" },
          { en: "And the book states its clean-up role explicitly: PDI “catalyzes the elimination of folding intermediates with inappropriate disulfide cross-links”. The observable here is the enzyme itself — evolution does not maintain a dedicated shuffling enzyme unless getting cysteine pairs wrong is a real and frequent failure. PDI's existence is the measurement.",
            cn: "教材还明确陈述了它的**清理**职责：PDI “catalyzes the elimination of folding intermediates with inappropriate disulfide cross-links”（催化清除带有错误二硫交联的折叠中间体）。**本链的可观测物就是这个酶本身**——若「把半胱氨酸配错」不是一件真实且频繁的失败，演化不会专门维持一个负责试换的酶。**PDI 的存在本身就是那个测量结果。**",
            src: "A p.133, §4.4" }
        ]
      },
      {
        title_en: "Chain 4 — the cysteines that DO NOT pair are your reducing power, and the line ends in a hospital",
        title_cn: "链条四：那些**没有**配对的半胱氨酸就是你的还原力——而这条线索终点在医院",
        steps: [
          { en: "Everything above was about the thiol being oxidised. Now the opposite: a free —SH is a reducing agent, and the cell carries a large pool of it as glutathione, a small peptide whose business end is a single cysteine. Cells directly exposed to oxygen work at keeping it that way, “By maintaining a reducing environment” — specifically “a high ratio of reduced glutathione to oxidized glutathione”.",
            cn: "上面全部讲的是巯基**被氧化**。现在反过来：**一个游离的 —SH 就是一种还原剂**，而细胞以**谷胱甘肽**的形式储备了大量的它——那是一个小肽，其起作用的那一端就是**单个半胱氨酸**。直接暴露于氧的细胞会努力维持这种状态，“By maintaining a reducing environment”（维持一个还原性环境）——具体而言是“a high ratio of reduced glutathione to oxidized glutathione”（还原型与氧化型谷胱甘肽的高比值）。",
            src: "A p.547, §14.6" },
          { en: "What that buys them: “such cells can prevent or undo oxidative damage to proteins, lipids” and other sensitive molecules. Concretely, reduced glutathione “protects the cell by destroying hydrogen peroxide and hydroxyl free radicals” — the by-products your own aerobic metabolism generates continuously.",
            cn: "它换来的是：“such cells can prevent or undo oxidative damage to proteins, lipids”（这些细胞得以预防或修复对蛋白质、脂质及其他敏感分子的氧化损伤）。具体地说，还原型谷胱甘肽“protects the cell by destroying hydrogen peroxide and hydroxyl free radicals”——即你自身的好氧代谢**持续产生**的那些副产物。",
            src: "A p.548, §14.6" },
          { en: "But glutathione gets used up, and regenerating it costs NADPH, which erythrocytes get almost entirely from the pentose phosphate pathway. So the whole thiol defence hangs on the pathway's first enzyme, glucose 6-phosphate dehydrogenase. A defect there is common: G6PD “deficiency, which affects about 400 million people worldwide”.",
            cn: "但谷胱甘肽会被**消耗掉**，而再生它需要 NADPH，红细胞的 NADPH 几乎完全来自**磷酸戊糖途径**。于是**整套巯基防御都吊在该途径的第一个酶上**——葡萄糖-6-磷酸脱氢酶。这里的缺陷相当常见：G6PD “deficiency, which affects about 400 million people worldwide”（影响全球约四亿人）。",
            src: "A p.548, §14.6" },
          { en: "The clinical picture is startlingly specific. Fava beans contain an oxidant; in a G6PD-deficient person the glutathione pool cannot keep up, and “erythrocytes begin to lyse 24 to 48 hours after ingestion of the beans”. Jaundice, and sometimes kidney failure, follow. The condition is favism, and Lehninger notes that Pythagoras forbade his followers to eat the beans.",
            cn: "临床表现具体得惊人。蚕豆含有一种氧化剂；在 G6PD 缺乏者体内，谷胱甘肽池跟不上，于是“erythrocytes begin to lyse 24 to 48 hours after ingestion of the beans”（红细胞在食用蚕豆后 24 至 48 小时开始溶解）。随之而来的是黄疸，有时还有肾衰竭。这种情况称为**蚕豆病**，而 Lehninger 提到毕达哥拉斯曾禁止其门徒食用蚕豆。",
            src: "A p.548, §14.6" },
          { en: "And the reason 400 million people carry it is the best ending this card has. Malaria parasites live inside erythrocytes and “The parasite is very sensitive to oxidative damage”, so growth of Plasmodium falciparum “is inhibited in G6PD-deficient erythrocytes”. A defect in maintaining reduced thiols is protective against malaria, and the geographic distribution of the deficiency follows the distribution of the disease. The chain that began with one sulfhydryl group ends as a selection pressure written into human populations.",
            cn: "而**四亿人之所以携带它**，是这张卡片最好的结尾。疟原虫**寄生在红细胞内部**，而“The parasite is very sensitive to oxidative damage”（该寄生虫对氧化损伤极为敏感），因此恶性疟原虫的生长“is inhibited in G6PD-deficient erythrocytes”。**「维持还原态巯基的能力有缺陷」反而能抵抗疟疾**，而该缺陷的地理分布也确实跟随着疟疾的分布。**这条起于一个巯基的链条，终点是一道写进人类群体的选择压力。**",
            src: "A p.548, §14.6" }
        ]
      }
    ],

    points: [
      { cz: "Cys drží i to, co His nedrží", en: "The pairing with the histidine card, worth seeing side by side: in c-type cytochromes it is cysteine, not histidine, that holds the haem — “the hemes of c-type cytochromes are covalently attached through Cys residues” (A p.664), whereas in a and b cytochromes the haem is tightly but NOT covalently bound. Histidine coordinates the iron; cysteine bolts the whole cofactor on.",
        cn: "与组氨酸那张卡对照着看的一条，值得并排放在一起：在 **c 型细胞色素**中，抓住血红素的是**半胱氨酸**而不是组氨酸——“the hemes of c-type cytochromes are covalently attached through Cys residues”（A 第664页）；而在 a 型与 b 型细胞色素中，血红素虽结合紧密但**并非共价**。**组氨酸配位那个铁，半胱氨酸把整个辅基铆上去。**" },
      { cz: "Fe-S centra", en: "Iron-sulfur centres are the other place cysteine binds a metal, and they are everywhere in the respiratory chain (depth node L-19-1-1, §19.1): “the iron is present not in heme but in association with inorganic sulfur atoms” or with the sulfur atoms of Cys residues in the protein, or both — ranging from a single Fe coordinated by four Cys up to “more complex Fe-S centers with two or four Fe atoms” (A p.664).",
        cn: "**铁硫中心**是半胱氨酸结合金属的另一个场合，而它们在呼吸链中随处可见（深度节点 L-19-1-1，§19.1）：“the iron is present not in heme but in association with inorganic sulfur atoms”，或与蛋白中 Cys 残基的硫原子结合，或两者兼有——从由四个 Cys 配位的单个 Fe，一直到“more complex Fe-S centers with two or four Fe atoms”（A 第664页）。" },
      { cz: "glutathion i pro syntézu DNA", en: "Glutathione is not only a defence. It also drives biosynthesis: “A second source of reducing equivalents for ribonucleotide reductase is glutathione” (A p.830), acting through glutaredoxin. So the same free thiol that destroys peroxide also supplies the electrons that turn ribonucleotides into deoxyribonucleotides — the committed step toward DNA.",
        cn: "谷胱甘肽不只是**防御**。它还驱动**生物合成**：“A second source of reducing equivalents for ribonucleotide reductase is glutathione”（A 第830页），经由谷氧还蛋白起作用。因此，**同一个销毁过氧化物的游离巯基，也提供了把核糖核苷酸变成脱氧核糖核苷酸的电子**——那是通向 DNA 的承诺步骤。" },
      { cz: "shrnutí: tři způsoby, jak může být postranní řetězec zvláštní", en: "The set is now complete and worth holding as one idea. A side chain can be special in three ways, and the three cards are one each: Trp is special OPTICALLY (a flat conjugated ring, hence 280 nm and the Nanodrop); His is special ELECTROSTATICALLY (a pKa at 6.0, hence catalysis and the Bohr effect); Cys is special COVALENTLY (a thiol, hence disulfides and redox). Asked why an amino acid matters, decide first which of the three kinds of special it is.",
        cn: "这一组现在完整了，值得当作**一个**观念来记。侧链能「特殊」的方式有**三种**，而这三张卡各占其一：色氨酸特殊在**光学上**（扁平共轭环，因而有 280 nm 与 Nanodrop）；组氨酸特殊在**静电上**（pKa 落在 6.0，因而有催化与 Bohr 效应）；半胱氨酸特殊在**共价上**（一个巯基，因而有二硫键与氧化还原）。被问到某个氨基酸为何重要时，**先判断它属于这三种「特殊」中的哪一种。**" }
    ],

    beyondPoints: [
      { en: "NOT IN THE PASSAGES READ — the compartment rule. The standard explanation for why secreted and extracellular proteins are full of disulfides while cytosolic ones are not is that the cytosol is kept reducing (by exactly the glutathione pool of chain 4) while the ER lumen and the outside of the cell are oxidising. Chain 4 supplies half of that argument from the book, but Lehninger does not state the extracellular-versus-cytosolic contrast in any passage read for this card. Flagged rather than presented as sourced — it is almost certainly elsewhere in the book, but the page was not found, so no page is cited.",
        cn: "所读段落中没有——**分区规则**。「为什么分泌蛋白与胞外蛋白富含二硫键、而胞质蛋白没有」，标准解释是：胞质被维持在**还原**状态（正是靠链条四里的谷胱甘肽池），而内质网腔与细胞外侧是**氧化性**的。链条四从书中提供了这个论证的一半，但在为本卡片阅读的任何段落中，Lehninger 都没有陈述「胞外 vs 胞质」这一对比。**标出来而不是当作有来源**——它几乎肯定在书中别处，但页码没找到，因此这里不引任何页码。" },
      { en: "NOT IN THE PASSAGES READ — how a disulfide PATTERN is determined experimentally. Knowing a protein has three disulfides does not tell you which cysteine is paired with which. The classical answer is to digest the protein without reducing it, then compare the peptide map before and after reduction, so that a peptide which changes position was held by a disulfide. Lehninger gives the reagents for breaking the bonds but no passage read here describes determining the pairing. If an examiner asks which cysteines are joined, that is the method, and it is from outside these pages.",
        cn: "所读段落中没有——**二硫键的配对模式在实验上如何测定**。知道一个蛋白有三根二硫键，并不告诉你**哪个半胱氨酸与哪个**配对。经典做法是：**先不还原**就把蛋白酶解，再比较还原前后的肽图，凡位置发生改变的肽段即原本被二硫键连着。Lehninger 给出了断键的试剂，但此处所读的段落都没有描述如何测定配对。若考官问「是哪几个半胱氨酸连在一起」，方法就是这个，而它来自这些页面之外。" }
    ],

    terms: [
      { cz: "sulfhydrylová skupina (—SH)", en: "sulfhydryl group (—SH)", cn: "巯基 (—SH)",
        def_en: "Cysteine's side chain. Contributes only modest polarity — the book calls cysteine an outlier on that count — but it is uniquely reactive: it can be oxidised to form a covalent bond with a second cysteine, and in the reduced state it is the cell's principal reducing agent.",
        def_cn: "半胱氨酸的侧链。它提供的极性相当有限——教材在这一点上称半胱氨酸为「异类」——但它的**反应性**独一无二：它可被氧化而与第二个半胱氨酸形成**共价键**，而在还原态下，它是细胞主要的**还原剂**。" },
      { cz: "cystin", en: "cystine", cn: "胱氨酸",
        def_en: "The dimer formed when two cysteines are oxidised together, joined by a disulfide bond. Worth noting that the linked residues become strongly hydrophobic — forming the bond moves the residue out of the polar class it was listed in.",
        def_cn: "两个半胱氨酸一同被氧化、由一根二硫键相连所形成的二聚体。值得注意的是，相连后的残基变得**强疏水**——**成键这一步把该残基移出了它原先所属的极性类别。**" },
      { cz: "disulfidový můstek", en: "disulfide bond", cn: "二硫键",
        def_en: "The only covalent bond formed between two side chains in proteins. It links parts of one polypeptide or two separate chains, cannot be undone by buffer or detergent, and must be broken chemically — by oxidation with performic acid or reduction with DTT or β-mercaptoethanol, followed by capping the freed thiols.",
        def_cn: "蛋白质中**唯一**由两个侧链之间形成的共价键。它连接同一条多肽的不同部分或两条独立的链，**无法被缓冲液或去污剂解开**，必须以化学方法断裂——过甲酸氧化，或 DTT / β-巯基乙醇还原，随后还需将释出的巯基封端。" },
      { cz: "protein-disulfid-isomerasa (PDI)", en: "protein disulfide isomerase (PDI)", cn: "蛋白二硫键异构酶 (PDI)",
        def_en: "A widely distributed enzyme that shuffles disulfide bonds until the native set is reached, and eliminates folding intermediates carrying inappropriate cross-links. Its existence is the evidence that forming the wrong pairs is a real and frequent problem.",
        def_cn: "一种分布广泛的酶，不断**试换**二硫键直至达成天然的那一组，并清除带有错误交联的折叠中间体。**它的存在本身，就是「配错对是一个真实且频繁的问题」的证据。**" },
      { cz: "glutathion (GSH)", en: "glutathione (GSH)", cn: "谷胱甘肽 (GSH)",
        def_en: "A small peptide whose functional group is a single cysteine thiol; the cell's main reducing buffer. It destroys hydrogen peroxide and hydroxyl radicals, and supplies reducing equivalents to ribonucleotide reductase. Regenerating it from the oxidised form requires NADPH from the pentose phosphate pathway.",
        def_cn: "一个小肽，其功能基团就是**单个半胱氨酸的巯基**；细胞主要的**还原性缓冲体系**。它销毁过氧化氢与羟自由基，并为核糖核苷酸还原酶提供还原当量。要把它从氧化型再生回来，需要来自磷酸戊糖途径的 NADPH。" },
      { cz: "deficit G6PD / favismus", en: "G6PD deficiency / favism", cn: "G6PD 缺乏症 / 蚕豆病",
        def_en: "The commonest enzymopathy in humans, affecting about 400 million people. Without NADPH the glutathione pool cannot be kept reduced, so an oxidant challenge lyses erythrocytes — after fava beans, within 24 to 48 hours. It persists at high frequency because the malaria parasite is itself very sensitive to oxidative damage.",
        def_cn: "人类最常见的酶病，影响约四亿人。没有 NADPH，谷胱甘肽池就无法维持在还原态，于是一次氧化剂冲击就会使红细胞溶解——食用蚕豆后 24 至 48 小时内发生。它之所以能维持高频率，是因为**疟原虫本身对氧化损伤极为敏感**。" }
    ],

    quiz: [
      { type: "mcq",
        q_en: "What makes cysteine's side chain different in KIND from the other nineteen?",
        q_cn: "半胱氨酸的侧链在**种类**上与其余十九种有何不同？",
        options: [
          "It is the most polar of the uncharged side chains, which is why it is grouped with them / 它是不带电侧链中极性最强的，正因如此才与它们归为一类",
          "It is the only side chain that can form a covalent bond with another side chain / 它是唯一能与另一个侧链形成共价键的侧链",
          "It is the only side chain containing an atom other than C, H, O and N / 它是唯一含有碳氢氧氮以外原子的侧链",
          "It carries a negative charge at physiological pH, as aspartate and glutamate do / 它在生理 pH 下带负电荷，与天冬氨酸和谷氨酸一样"
        ],
        answer: 1,
        optionNotes: {
          0: { en: "Lehninger files cysteine with the polar uncharged group and then immediately takes the polarity back: cysteine is an outlier there because the polarity contributed by its sulfhydryl group is quite modest. Nor does the polarity survive use — once two cysteines are oxidised to cystine the linked residues become strongly hydrophobic.", cn: "Lehninger 把 cysteine 归进极性不带电那一组，随即又把这份极性收了回去：cysteine 在那里是个异类，因为它的巯基所贡献的极性相当有限。而且这点极性也经不起使用——两个 cysteine 一旦被氧化成 cystine，相连的残基就变得强疏水了。" },
          2: { en: "Methionine also contains sulfur, so cysteine is not the only one — and a thioether does none of this chemistry. Uniqueness lies in what the free —SH can do: be oxidised to a covalent link with a second cysteine, coordinate iron in an Fe-S centre, or, as glutathione, act as the cell's principal reducing agent.", cn: "methionine 同样含硫，所以 cysteine 并不是唯一的——而且硫醚做不了这些化学。独特之处在于游离 —SH 能做什么：被氧化成与另一个 cysteine 的共价连接、在 Fe-S 中心里配位铁，或者以 glutathione 的形式充当细胞主要的还原剂。" },
          3: { en: "The thiol is not an acid of that strength; cysteine is not listed among the negatively charged side chains at all, which is the group aspartate and glutamate belong to. Its reactivity is redox chemistry, not charge — the sulfur gives up electrons rather than a proton.", cn: "巯基没有那么强的酸性；cysteine 根本不在带负电侧链那一组里，而 aspartate 与 glutamate 才属于那一组。它的反应性来自氧化还原化学，不是电荷——硫交出的是电子，不是质子。" }
        },
        why_en: "Lehninger explicitly downgrades its polarity — “cysteine is an outlier here because its polarity” is “contributed by its sulfhydryl group, is quite modest” (A p.76). What is unique is the chemistry: “Cysteine is readily oxidized to form a covalently linked dimeric amino acid called cystine” (A p.76), and disulfides are the only covalent side-chain-to-side-chain links in proteins. Option 3 is wrong because methionine also contains sulfur.",
        why_cn: "Lehninger 明确**降低**了它在极性上的分量——“cysteine is an outlier here because its polarity”，其极性“contributed by its sulfhydryl group, is quite modest”（A 第76页）。真正独特的是**化学**：“Cysteine is readily oxidized to form a covalently linked dimeric amino acid called cystine”（A 第76页），而二硫键是蛋白质中**唯一**的侧链对侧链共价连接。选项 3 错在甲硫氨酸同样含硫。" },
      { type: "mcq",
        q_en: "A protein runs as one 90 kDa band on SDS-PAGE, but as two bands of 60 and 30 kDa when DTT is added. What does this show?",
        q_cn: "某蛋白在 SDS-PAGE 上跑成一条 90 kDa 的带，但加入 DTT 后跑成 60 kDa 与 30 kDa 两条带。这说明什么？",
        options: [
          "The protein was partially degraded by the reducing agent / 该蛋白被还原剂部分降解了",
          "It is two separate polypeptide chains joined by an interchain disulfide bond / 它是由链间二硫键连接的两条独立多肽链",
          "It is a single chain whose intramolecular disulfides were broken / 它是一条单链，其分子内二硫键被打断了",
          "DTT changed the charge and therefore the migration / DTT 改变了电荷、从而改变了迁移率"
        ],
        answer: 1,
        why_en: "SDS already denatures and coats the protein, so what remains holding two pieces together is a covalent bond — a disulfide. Breaking it with DTT releases two chains that migrate separately, and their masses sum to the original. Option 3 is the alternative case and gives the OPPOSITE result: breaking intramolecular disulfides changes a band's shape and apparent mobility but does not increase the number of bands. This reduced-versus-non-reduced comparison is the standard way to distinguish a genuine subunit from a chain tied on by cysteine.",
        why_cn: "SDS 本身已经使蛋白变性并包被了它，所以此时仍把两块连在一起的只能是**共价键**——即二硫键。用 DTT 打断它，两条链就各自迁移，且质量之和等于原来的值。选项 3 是**另一种情形**，给出的是**相反**的结果：打断**分子内**二硫键会改变条带的形状与表观迁移率，但**不会增加条带数目**。这种「还原 vs 非还原」的比较，正是区分「真正的亚基」与「被半胱氨酸拴上来的一条链」的标准做法。" },
      { type: "short",
        q_en: "Trace the line from cysteine's sulfhydryl group to why G6PD deficiency protects against malaria.",
        q_cn: "请从半胱氨酸的巯基出发，一路推到「G6PD 缺乏为何能抵抗疟疾」。",
        accept: ["glutathione", "谷胱甘肽", "NADPH", "pentose phosphate", "磷酸戊糖", "peroxide", "过氧化", "oxidative", "氧化", "lyse", "溶解"],
        answer_en: "A free thiol is a reducing agent, and the cell carries its main pool of reducing power as glutathione, whose working group is one cysteine. Cells exposed to oxygen survive “By maintaining a reducing environment” (A p.547), specifically “a high ratio of reduced glutathione to oxidized glutathione” (A p.547), because reduced glutathione “protects the cell by destroying hydrogen peroxide and hydroxyl free radicals” (A p.548). Regenerating it costs NADPH, which erythrocytes get from the pentose phosphate pathway, so the whole defence depends on G6PD — and that “deficiency, which affects about 400 million people worldwide” (A p.548) leaves red cells unable to meet an oxidant challenge, so after fava beans “erythrocytes begin to lyse 24 to 48 hours after ingestion of the beans” (A p.548). It persists because the malaria parasite lives in those same cells and “The parasite is very sensitive to oxidative damage” (A p.548), so its growth “is inhibited in G6PD-deficient erythrocytes” (A p.548).",
        answer_cn: "游离巯基是一种**还原剂**，而细胞把它的主要还原力储备成**谷胱甘肽**，其起作用的基团就是**一个半胱氨酸**。暴露于氧的细胞靠“By maintaining a reducing environment”（A 第547页）生存，具体是“a high ratio of reduced glutathione to oxidized glutathione”（A 第547页），因为还原型谷胱甘肽“protects the cell by destroying hydrogen peroxide and hydroxyl free radicals”（A 第548页）。再生它需要 NADPH，红细胞的 NADPH 来自**磷酸戊糖途径**，所以**整套防御都依赖 G6PD**——而这种“deficiency, which affects about 400 million people worldwide”（A 第548页）使红细胞无法应对氧化冲击，于是食用蚕豆后“erythrocytes begin to lyse 24 to 48 hours after ingestion of the beans”（A 第548页）。它之所以长期存在，是因为疟原虫就住在这些细胞里，而“The parasite is very sensitive to oxidative damage”（A 第548页），故其生长“is inhibited in G6PD-deficient erythrocytes”（A 第548页）。" }
    ],

    oral: {
      q_en: "Tell me about cysteine.",
      q_cn: "请讲一讲半胱氨酸。",
      model_en: "Cysteine is worth introducing by saying what it is NOT. The textbook lists it among the polar uncharged side chains and then immediately calls it an outlier, because the polarity contributed by its sulfhydryl group is quite modest — it is only a weak acid and makes only weak hydrogen bonds. So polarity is not why it matters. What matters is that cysteine is readily oxidised to form a covalently linked dimer called cystine, in which two cysteines are joined by a disulfide bond. That makes it unique among the twenty: it is the only side chain that forms an actual covalent bond with another side chain. Everything else — hydrogen bonds, ion pairs, hydrophobic packing — is non-covalent. A disulfide is a real bond, and I would say it staples a protein rather than shapes it. One detail worth adding is that once the bond forms the residues become strongly hydrophobic, so the reaction moves the residue out of the polar class it was filed in. Four consequences. First, structure. Insulin is the clearest example: it is not one polypeptide but an A chain and a B chain joined by disulfide cross-linkages and nothing else, and the A chain is identical in human, pig, dog, rabbit and sperm whale, which is why animal insulin worked as a human drug. Second, technique — and this follows directly from the bond being covalent, because no buffer or detergent will undo it. If you want to see what a protein is made of you must break the disulfides chemically. That is why Sanger had to break insulin apart before he could sequence it. There are two routes: oxidise the cystine with performic acid, giving two cysteic acid residues irreversibly, or reduce it with dithiothreitol or beta-mercaptoethanol. But reduction alone is not enough, because two free thiols side by side simply re-oxidise, so you must cap them — carboxymethylation with iodoacetate serves that purpose. On the bench this gives you a very practical test: run the same sample on SDS-PAGE with and without a reducing agent. If a band splits when you add DTT, those were two chains held by an interchain disulfide. Third, folding. Making a disulfide is easy; making the right one is not, because with several cysteines most pairings are wrong and a wrong pairing is covalent too, so the protein can staple itself into a dead end. Cells therefore keep protein disulfide isomerase, whose job is the shuffling of disulfide bonds until the bonds of the native conformation are formed, and which eliminates intermediates carrying inappropriate cross-links. I find the existence of that enzyme is itself the evidence that the problem is real. Fourth, and this is the one I would spend time on: the cysteines that do not pair up are the cell's reducing power, carried as glutathione, a small peptide whose working group is one cysteine thiol. Cells exposed to oxygen survive by maintaining a reducing environment, meaning a high ratio of reduced to oxidised glutathione, because reduced glutathione destroys hydrogen peroxide and hydroxyl free radicals. Regenerating it costs NADPH, which red cells get from the pentose phosphate pathway, so the entire defence hangs on the first enzyme of that pathway, glucose 6-phosphate dehydrogenase. Deficiency affects about four hundred million people. In those people an oxidant challenge overwhelms the glutathione pool, and after eating fava beans the erythrocytes begin to lyse within twenty-four to forty-eight hours — that is favism, with jaundice and sometimes kidney failure. And the reason it is so common is that the malaria parasite lives inside erythrocytes and is itself very sensitive to oxidative damage, so its growth is inhibited in G6PD-deficient cells. So a line that starts with one sulfhydryl group ends as a selection pressure written into human populations. If I may add one connection: in c-type cytochromes it is cysteine, not histidine, that attaches the haem — covalently — whereas in a and b cytochromes the haem is bound tightly but not covalently. And iron-sulfur centres throughout the respiratory chain are built on the sulfur of cysteine residues.",
      checklist: [
        "Opened by rejecting polarity as the reason — the book calls cysteine an outlier there",
        "Named the unique property: the only side chain forming a covalent bond with another side chain",
        "Gave cystine and the disulfide bond, and noted the linked residues become strongly hydrophobic",
        "Used insulin as the structural example: two chains joined only by disulfide cross-linkages",
        "Explained that a covalent bond must be broken chemically — hence Sanger had to break insulin first",
        "Gave both routes: performic acid oxidation, or DTT / beta-mercaptoethanol reduction",
        "Included the step people forget — capping the freed thiols with iodoacetate",
        "Landed on the bench test: SDS-PAGE with and without a reducing agent, and what a splitting band means",
        "Explained why forming the RIGHT pairs is hard, and that a wrong pair is covalent too",
        "Named protein disulfide isomerase and its shuffling role",
        "Turned to the free thiol as reducing power, carried as glutathione",
        "Gave the glutathione → NADPH → pentose phosphate → G6PD dependency chain",
        "Gave favism concretely: ~400 million affected, lysis 24–48 h after fava beans, jaundice",
        "Closed with the malaria selection argument — the parasite is sensitive to oxidative damage",
        "Optional bonus: cysteine attaches haem covalently in c-type cytochromes, and builds Fe-S centres"
      ]
    }
  }

);
