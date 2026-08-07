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
          "It is the largest amino acid by molecular weight / 它是分子量最大的氨基酸",
          "It carries a positive charge at physiological pH / 它在生理 pH 下带正电荷"
        ],
        answer: 1,
        why_en: "The absorbance at 280 nm comes from the conjugated flat indole ring. Trp has no ionisable R group at all, which is why Table 3-1 lists no R-group pKa for it.",
        why_cn: "280 nm 处的吸收来自共轭的扁平吲哚环。色氨酸完全没有可解离的侧链基团——这正是 Table 3-1 没有为它列出侧链 pKa 的原因。" },
      { type: "mcq",
        q_en: "At 280 nm, how does tryptophan's absorbance compare with tyrosine's?",
        q_cn: "在 280 nm 处，色氨酸的吸光度与酪氨酸相比如何？",
        options: [
          "About the same / 大致相同",
          "Roughly half / 约为一半",
          "More than four times greater / 超过四倍",
          "Tyrosine does not absorb at 280 nm at all / 酪氨酸在 280 nm 完全不吸收"
        ],
        answer: 2,
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
  }

);
