/* Questions for chapter 7, written against its spines.

   Covers M-7-4 (其他操纵子, spine_ch7.js), M-7-5 (固氮基因调控, spine_misc2.js),
   M-7-6 (转录水平上的其他调控方式, spine_ch7.js) and M-7-7 (转录后调控, spine_ch7.js).
   Nothing here is taken from a textbook — every claim is one a spine step makes.

   THE TWO MEASURED DEFECTS, DELIBERATELY NOT REPRODUCED. The bank this app forked
   from was re-measured at 42% of items answerable by picking the visibly longest
   option, and 60% of its answers sitting at index 1. The naive fix — cutting the
   correct option to a bare claim — was tried on this project and simply inverted the
   exploit (shortest-is-correct 48%). So here the correct option and its distractors
   are written to COMPARABLE length, whichever direction that takes, and the answer
   index is spread seven items to each of 0, 1, 2 and 3 across the four nodes.
   Reasoning lives in why_en / why_cn, where the reader meets it after answering.

   The shape leaned on throughout: give a result, a mutant or a condition and ask what
   follows from it. Distractors are the neighbouring subsection's mechanism, the right
   players in the wrong order, or the correct effect hung on the wrong molecule. */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* ===================================================================== M-7-4 */
window.BIOLITE_Q["M-7-4"] = [
  {
    "type": "mcq",
    "q_en": "A mutation destroys araO₂, so the AraC-held DNA loop can never form. Glucose is present and arabinose is absent. What follows at araBAD?",
    "q_cn": "一个突变毁掉了 araO₂，于是 AraC 拉出的那个 DNA 回转结构再也形不成。此时培养基里有葡萄糖、没有阿拉伯糖。araBAD 会怎样？",
    "options": [
      "araBAD reaches its full induced level, since the repressing step has been removed",
      "AraC switches permanently to the Pi form, since Pr must bind two sites at once",
      "Repression is lifted, but heavy transcription still needs Pi-form AraC and cAMP–CRP",
      "araBAD is silent for good, since P_BAD stays buried inside the loop in every state"
    ],
    "answer": 2,
    "why_en": "The loop IS the repression — AraC bound at araO₂ and the upper half of araI folds the promoter region inside it. Take the loop away and that block is gone, but the operon still does not fire: RNA polymerase will not bind P_BAD unless AraC in its Pi form and cAMP–CRP occupy the region together, and glucose keeps cAMP–CRP off its site. Removing a repressor and installing an activator are two different events.",
    "why_cn": "阻遏本身就是那个环——AraC 同时结合 araO₂ 与 araI 上半区，把启动子区折进环里。环没了，这一层阻挡就没了；但操纵子仍然发动不起来：除非 Pi 形式的 AraC 与 cAMP–CRP 同时占住这一区域，RNA 聚合酶不会结合 P_BAD，而有葡萄糖时 cAMP–CRP 根本不上位。「拿掉一个阻遏物」和「装上一个激活物」是两件事。"
  },
  {
    "type": "mcq",
    "q_en": "Arabinose binds AraC. In the terms this section uses, what has that binding actually changed?",
    "q_cn": "阿拉伯糖与 AraC 结合了。用本节的说法，这一结合究竟改变了什么？",
    "options": [
      "Which sites AraC holds: araO₂ plus upper araI gives way to araO₁ plus araI",
      "Whether AraC is on the DNA at all, since the inducer strips it off both operators",
      "How fast araC itself is transcribed leftwards from its own promoter P_c",
      "The affinity of cAMP–CRP for the site that lies between the two AraC sites"
    ],
    "answer": 0,
    "why_en": "Arabinose shifts the Pr ⇌ Pi equilibrium toward Pi, and what Pi does differently is bind a different pair of sites. Two AraC dimers move onto araO₁ and araI, the loop collapses, cAMP–CRP occupies the site that had been buried, and the polymerase initiates. The protein never leaves the DNA; it changes address.",
    "why_cn": "阿拉伯糖把 Pr ⇌ Pi 的平衡拉向 Pi，而 Pi 与 Pr 的差别就在于结合另一组位点：两个 AraC 二聚体移到 araO₁ 和 araI 上，环随之塌掉，原本被埋住的 cAMP–CRP 位点露出来，聚合酶开始起始。蛋白始终没离开 DNA，它只是换了地址。"
  },
  {
    "type": "mcq",
    "q_en": "A cya⁻ strain of E. coli cannot use lactose, yet it still grows on galactose as sole carbon source. What accounts for the difference?",
    "q_cn": "大肠杆菌的 cya⁻ 突变株不能利用乳糖，却仍然能以半乳糖为唯一碳源生长。差别从何而来？",
    "options": [
      "GalR is a repressor and LacI is not, so gal is never shut in the way lac is",
      "The two gal operators lie outside the promoter, so cAMP–CRP is never required",
      "Galactose enters through GalP, a carrier that operates without cyclic AMP",
      "The gal operon has S₂, a second promoter that starts without cAMP–CRP"
    ],
    "answer": 3,
    "why_en": "cya⁻ has no adenylate cyclase, so no cAMP and no cAMP–CRP. The lac promoter cannot work without it. The gal operon keeps two overlapping start points: S₁ needs cAMP–CRP, S₂ does not, and S₂ is in fact repressed by cAMP–CRP. Losing the complex leaves S₂ free, which is enough to grow on galactose.",
    "why_cn": "cya⁻ 没有腺苷酸环化酶，也就没有 cAMP、没有 cAMP–CRP，lac 启动子没它就不工作。gal 操纵子却备着两个相互重叠的起始点：S₁ 需要 cAMP–CRP，S₂ 不需要——而且 S₂ 平时反而受 cAMP–CRP 抑制。复合物一消失，S₂ 反倒放开了，足以支撑以半乳糖生长。"
  },
  {
    "type": "mcq",
    "q_en": "A gal promoter mutant cannot grow on galactose; mutating it further to cya⁻ restores that growth. What does the rescue require of cAMP–CRP?",
    "q_cn": "一个 gal 启动子突变株不能利用半乳糖；把它再突变成 cya⁻，反而恢复了利用能力。这种「获救」要求 cAMP–CRP 具有什么性质？",
    "options": [
      "That it be needed at S₂ and dispensable at S₁ under every growth condition",
      "That it repress S₂ while it activates S₁, so losing it can open a start point",
      "That it degrade the GalR repressor sitting at the operator inside galE",
      "That it raise the whole operon to the constitutive level the cell wall needs"
    ],
    "answer": 1,
    "why_en": "The first mutation killed the S₁ start and left S₂ intact, but the cell's own cAMP–CRP was holding S₂ down, so neither start point worked. The second mutation removes the complex and unblocks S₂. A strain rescued by losing an activator is only possible where that activator is also acting as a repressor — which is the whole point of the gal control region.",
    "why_cn": "第一次突变毁掉 S₁、留下 S₂，可细胞自身的 cAMP–CRP 一直压着 S₂，于是两个起始点都用不了。第二次突变把这个复合物拿走，S₂ 上的抑制随之解除。一个菌株因为「失去一个激活因子」而获救，只有在该因子同时兼任阻遏作用时才可能——这正是 gal 调节区要讲的事。"
  },
  {
    "type": "mcq",
    "q_en": "Ultraviolet light induces the SOS response. What is the immediate signal that converts RecA into a protease?",
    "q_cn": "紫外线诱导 SOS 应答。把 RecA 变成蛋白酶的直接信号是什么？",
    "options": [
      "The rise in LexA concentration that follows an interruption of replication",
      "Thymine dimers, which RecA binds directly and excises out of the duplex",
      "A drop in ppGpp, which releases recA from its normally repressed state",
      "Single-stranded DNA at the gaps left where replication was interrupted"
    ],
    "answer": 3,
    "why_en": "Severe damage stalls replication and leaves single-stranded gaps; RecA binds that single-stranded DNA and is thereby activated as a protease, cutting LexA into two fragments with no operator-binding activity. Because one LexA represses every SOS gene wherever it sits on the chromosome, that single cut lifts repression across the whole scattered regulon at once.",
    "why_cn": "严重损伤使复制中断、留下单链缺口；RecA 结合这些单链 DNA 后被激活成蛋白酶，把 LexA 切成两个没有操纵区结合活性的片段。由于分散在染色体各处的 SOS 基因都由同一个 LexA 阻遏，这一刀等于一次性解除了整个调控子的阻遏。"
  },
  {
    "type": "mcq",
    "q_en": "A two-component regulatory system answers a signal that never enters the cell. Which description matches its division of labour?",
    "q_cn": "二组分调控系统要应答一个根本进不了细胞的信号。下面哪一种说法符合它的分工？",
    "options": [
      "The membrane sensor kinase is phosphorylated and passes the phosphate inward",
      "The cytoplasmic response regulator is phosphorylated first and activates the sensor",
      "Both proteins sit in the membrane and the phosphate never enters the cytoplasm",
      "The response regulator binds the signal outside and carries it to the kinase"
    ],
    "answer": 0,
    "why_en": "The sensor kinase sits in the cytoplasmic membrane, reacts with the signal on the outside face and is phosphorylated in doing so; it then hands that phosphate to the cytoplasmic response regulator, and the phosphorylated regulator becomes the repressor or activator of the operon downstream. The phosphate is what crosses the membrane in place of the signal. ArcB–ArcA, EnvZ–OmpR and NtrB–NtrC are all built this way.",
    "why_cn": "传感激酶位于细胞质膜上，在膜外一侧与信号反应，并因此被磷酸化；随后它把磷酸基团交给胞质中的应答调节蛋白，磷酸化的应答调节蛋白便成为下游操纵子的阻遏或激活蛋白。真正穿过膜的不是信号，而是那个磷酸基团。ArcB–ArcA、EnvZ–OmpR、NtrB–NtrC 都是这个构造。"
  },
  {
    "type": "mcq",
    "q_en": "Amino acids run short, ppGpp rises, and P₁ of the rRNA operon rrnE is suppressed. What becomes of rRNA synthesis?",
    "q_cn": "氨基酸不足、ppGpp 升高，rRNA 操纵子 rrnE 的 P₁ 被抑制。rRNA 的合成会怎样？",
    "options": [
      "rRNA synthesis stops entirely until amino acids are restored to the medium",
      "P₂ is suppressed at the same moment, since both promoters answer to ppGpp",
      "The weak promoter P₂ keeps working and becomes the main source of rRNA",
      "P₁ is replaced by a σ⁵⁴-dependent promoter reading the −24 and −12 regions"
    ],
    "answer": 2,
    "why_en": "rRNA is a component of the ribosome and its supply can never fall to zero. rrnE carries two promoters: in log phase P₁ gives three to five times more transcript than P₂, and ppGpp suppresses P₁ while leaving P₂ untouched. The weak promoter takes over at exactly the moment the strong one is shut. rpsA does the same with four promoters, two strong and two weak.",
    "why_cn": "rRNA 是核糖体的组成部分，供应不能降到零。rrnE 上有两个启动子：对数期 P₁ 的转录产物比 P₂ 多 3~5 倍，而 ppGpp 抑制 P₁、不动 P₂。强启动子被关掉的那一刻，弱启动子接手。rpsA 用同样的思路，只是有 4 个启动子——两强两弱。"
  }
];

/* ===================================================================== M-7-5 */
window.BIOLITE_Q["M-7-5"] = [
  {
    "type": "mcq",
    "q_en": "Nitrogenase can account for 20% of a diazotroph's total protein. Which property of the enzyme forces a cell to build that much of it?",
    "q_cn": "固氮酶最多可占固氮菌总蛋白量的 20%。是这个酶的哪一个性质，逼得细胞造这么多？",
    "options": [
      "Its sensitivity to oxygen, which wrecks most of the enzyme as fast as it is made",
      "Its slow turnover: one electron per cycle, about five a second, and N₂ needs eight",
      "Its cost of 16 MgATP per N₂, which the cell offsets by holding more copies",
      "Its need for a FeMo cofactor, which assembles only inside a large protein pool"
    ],
    "answer": 1,
    "why_en": "Only one electron crosses from Fe-protein to FeMo-protein per encounter, and only about five cross per second — the rate-limiting step of the whole reaction. Reducing one N₂ takes eight of them. A cell living off fixation therefore compensates for a slow catalyst with sheer quantity of catalyst. Oxygen sensitivity and the 16 MgATP are real, but they are the reasons the enzyme must not be built carelessly, not the reason it is built in bulk.",
    "why_cn": "铁蛋白与铁钼蛋白每碰面一次只传一个电子，每秒约 5 个，这是整个固氮反应的限速步骤；而还原一分子 N₂ 要传 8 个。靠固氮过日子的细胞，只能用「酶的数量」去补「酶的速度」。对氧敏感和 16 个 MgATP 都是事实，但它们是「不能乱造」的理由，不是「必须成批造」的理由。"
  },
  {
    "type": "mcq",
    "q_en": "Oxygen appears in the medium of a nifL⁺ diazotroph. By which step does that oxygen stop nif transcription?",
    "q_cn": "一株 nifL⁺ 固氮菌的培养环境里出现了氧气。氧气是通过哪一步把 nif 基因的转录停掉的？",
    "options": [
      "NifL binds the UAS and keeps the NifA oligomer from ever reaching that site",
      "NifL displaces σ⁵⁴ from the −24/−12 region so that no closed complex forms",
      "NifL cleaves NifA into fragments that can no longer bind the nif promoter",
      "NifL binds NifA and inhibits its ATPase, and activation runs on that ATP"
    ],
    "answer": 3,
    "why_en": "In an oxygen-free environment NifL cannot bind NifA at all. Under air it binds NifA and inhibits the middle AAA⁺ ATPase domain — the domain that hydrolyses ATP, contacts RNA polymerase and σ⁵⁴, and drives NifA to oligomerise. Since opening the closed complex is paid for with that ATP, blocking the ATPase alone is enough to hold the operon shut. Oxygen reaches the nif genes along this single path.",
    "why_cn": "缺氧时 NifL 根本结合不上 NifA；有氧时它结合 NifA，抑制中间那个 AAA⁺ ATP 酶结构域——正是这个结构域水解 ATP、与 RNA 聚合酶和 σ⁵⁴ 接触、并使 NifA 聚合。既然把封闭复合物打开这件事是拿 ATP 付账的，单堵住这个 ATP 酶就足以关住操纵子。氧气影响 nif 基因，走的就是这一条路。"
  },
  {
    "type": "mcq",
    "q_en": "An ordinary σ⁷⁰ holoenzyme cannot start transcription at a nif promoter. What distinguishes that promoter?",
    "q_cn": "普通的 σ⁷⁰ 全酶在 nif 启动子上发动不了转录。这个启动子特殊在哪里？",
    "options": [
      "It is read at −24 and −12 by σ⁵⁴, which can bind the DNA before the core enzyme",
      "It is read at −35 and −10 by σ⁵⁴, but only after the core enzyme has landed",
      "It carries no promoter sequence at all and is opened by NifA hydrolysing ATP",
      "It lies inside the nifA operon, which NtrC transcribes with no σ factor at all"
    ],
    "answer": 0,
    "why_en": "σ⁵⁴ (RpoN) is the one σ factor outside the σ⁷⁰ family, and it differs in both respects: it recognises the −24 and −12 regions rather than −35 and −10, and it behaves like the eukaryotic TBP in binding a promoter on its own, with no core enzyme present. A σ⁷⁰-type factor can only bind once the core enzyme has landed. That is why the nitrogen genes sit on promoters the ordinary machinery cannot fire.",
    "why_cn": "σ⁵⁴（RpoN）是 σ⁷⁰ 家族之外的那一个，两件事都不同：它识别的是 −24 与 −12 区而不是 −35 与 −10 区；而且它像真核的 TBP 一样，可以在没有核心酶时独立结合启动子。σ⁷⁰ 类因子则必须等核心酶先落到 DNA 上。氮源利用基因所在的启动子，普通转录机器因此发动不了。"
  },
  {
    "type": "mcq",
    "q_en": "NifA binds the upstream activator sequences, well away from the polymerase at −24/−12. How does it act on the promoter from there?",
    "q_cn": "NifA 结合在上游激活位点（UAS）上，离 −24/−12 处的聚合酶很远。它怎样从那里对启动子起作用？",
    "options": [
      "Its N-terminal regulatory domain slides along the DNA until it arrives at −24",
      "It recruits NtrC, which carries the signal from the UAS down to the promoter",
      "It bends the DNA between the two into a loop, contacts σ⁵⁴, and pays with ATP",
      "It strips H–NS off the intervening DNA, and that brings the two sites together"
    ],
    "answer": 2,
    "why_en": "The NifA oligomer bound at the UAS folds the intervening DNA into a loop and so reaches σ⁵⁴ and the polymerase sitting at −24/−12; the two touch in the closed complex, σ⁵⁴ changes conformation, the DNA melts, and the open initiation complex forms. The whole step depends on ATP hydrolysis by the middle AAA⁺ domain. Looping is the general device that lets a distant site act on a near one — AraC uses the same trick to do the opposite job.",
    "why_cn": "结合在 UAS 上的 NifA 多聚体把中间那段 DNA 弯成环，从而够到 −24/−12 处的 σ⁵⁴ 与聚合酶；两者接触形成封闭复合物，σ⁵⁴ 构象改变，DNA 解链，开放式起始复合物形成。整个过程依赖中间 AAA⁺ 结构域水解 ATP。「弯成环」是让远处位点作用于近处位点的通用手段——AraC 用同一招做的却是相反的事。"
  },
  {
    "type": "mcq",
    "q_en": "Glutamine is high inside the cell, which reports plentiful free ammonia. What happens at the nifA operon?",
    "q_cn": "细胞内谷氨酰胺浓度很高，这报告的是游离氨充足。nifA 操纵子这时会怎样？",
    "options": [
      "GlnD uridylylates GlnB, NtrB phosphorylates NtrC, and the operon is switched on",
      "GlnB goes un-uridylylated, binds NtrB, NtrC is dephosphorylated, the operon shuts",
      "NifL binds NifA directly and the operon is held shut until the oxygen falls again",
      "σ⁵⁴ is exchanged for σ⁷⁰ at that operon and transcription starts from −35 and −10"
    ],
    "answer": 1,
    "why_en": "Glutamine concentration tracks free ammonia, and GlnD, a uridylyltransferase, reads it. Low glutamine: GlnD puts UMP on GlnB and GlnK, NtrB phosphorylates NtrC, and phosphorylated NtrC opens the nifA operon. High glutamine: neither is uridylylated, unmodified GlnB binds NtrB and has NtrC dephosphorylated, and the operon closes. Option 0 is the same cascade run in the low-glutamine direction — the right players in the wrong condition.",
    "why_cn": "谷氨酰胺浓度与游离氨浓度正相关，读这个数的是尿苷转移酶 GlnD。谷氨酰胺低：GlnD 把 UMP 加到 GlnB 和 GlnK 上，NtrB 使 NtrC 磷酸化，磷酸化的 NtrC 打开 nifA 操纵子。谷氨酰胺高：两者都不尿苷化，未修饰的 GlnB 结合 NtrB 并使 NtrC 去磷酸化，操纵子关闭。选项 0 是同一条级联跑在「低谷氨酰胺」那一侧——人对，条件不对。"
  },
  {
    "type": "mcq",
    "q_en": "A nodule cell holds oxygen at a few hundred μmol/L, while nitrogenase only works at tens of nmol/L. How is that contradiction settled?",
    "q_cn": "根瘤细胞内氧浓度在数百 μmol/L，而固氮酶只在几十 nmol/L 的氧浓度下才工作。这对矛盾是怎么解决的？",
    "options": [
      "The nodule shuts oxygen out completely, so the bacteroid respires anaerobically",
      "Hup⁺ hydrogenase burns away all of the free oxygen inside the nodule cell",
      "Nodulins build a structural barrier that keeps oxygen away from the bacteroid",
      "Leghemoglobin binds the free oxygen and still hands it to the respiratory chain"
    ],
    "answer": 3,
    "why_en": "Leghemoglobin is the most abundant plant-encoded protein of a nodule cell and is homologous to animal myoglobin. Binding free oxygen drops the free concentration into the range nitrogenase tolerates while the bound oxygen is still delivered to the respiratory chain, so the bacteroid keeps respiring. The Hup⁺ hydrogenase does consume oxygen near the enzyme, but its job is recovering the hydrogen nitrogenase wastes, not setting the nodule's oxygen level.",
    "why_cn": "豆血红蛋白是根瘤细胞中植物基因组编码的最主要蛋白，与动物肌红蛋白同源。它结合自由氧，把自由氧浓度压到固氮酶受得了的范围；而被结合的氧照样送进呼吸链，类菌体仍能呼吸。Hup⁺ 的氢化酶确实会消耗酶附近的氧，但它的正事是回收固氮酶浪费掉的氢，而不是设定根瘤的氧水平。"
  },
  {
    "type": "mcq",
    "q_en": "NifL is present in only some diazotrophs, and the rest regulate NifA by other routes entirely. What does this section say survives that variation?",
    "q_cn": "NifL 只存在于部分固氮菌中，其余的固氮菌用完全不同的路子调控 NifA。按本节的说法，在这种差异之下，什么是不变的？",
    "options": [
      "The shape: oxygen and ammonia are both read before any nitrogenase is built",
      "The players: GlnB and GlnK behave identically in every diazotroph examined",
      "The route: NifA is activated by GlnB whenever the nitrogen source is scarce",
      "The regulator: NtrC takes NifA's place at the nif promoters in those species"
    ],
    "answer": 0,
    "why_en": "Details differ considerably — GlnB activates NifA under nitrogen scarcity in Rhodospirillum rubrum and Azospirillum brasilense, while GlnB and GlnK inhibit it under ammonia excess in Azorhizobium caulinodans — and the architecture does not. Every version is a cascade that reads the oxygen concentration and the ammonia concentration before committing to an enzyme that costs a fifth of the cell's protein and dies in air.",
    "why_cn": "细节差别很大——深红红螺菌和巴西固氮螺菌里，氮匮乏时由 GlnB 激活 NifA；茎瘤固氮根瘤菌里，氨富余时 GlnB 与 GlnK 反过来抑制它——可骨架不变。每一个版本都是这样一套级联：在动手造一个占细胞五分之一蛋白、又见空气就死的酶之前，先把氧浓度和氨浓度都读一遍。"
  }
];

/* ===================================================================== M-7-6 */
window.BIOLITE_Q["M-7-6"] = [
  {
    "type": "mcq",
    "q_en": "High temperature makes E. coli raise its σ³² count sharply. What has changed in the transcription machinery?",
    "q_cn": "高温使大肠杆菌胞内 σ³² 的数量迅速增加。转录机器里究竟变了什么？",
    "options": [
      "The core enzyme is swapped for one that reads only the heat-shock promoters",
      "σ⁷⁰ is destroyed by proteases and the cell rebuilds its polymerases from scratch",
      "An anti-σ factor is made against σ³², so the heat-shock genes stay repressed",
      "σ³² replaces σ⁷⁰ on part of the polymerase pool and redirects those enzymes"
    ],
    "answer": 3,
    "why_en": "The core enzyme is untouched; only the σ subunit is exchanged, on part of the polymerase population. Those polymerases are then led to heat-shock promoters instead of the σ⁷⁰ ones. This is the cheapest reprogramming a cell has: swap one subunit and hundreds of promoters change status at once, with no operator and no repressor involved anywhere.",
    "why_cn": "核心酶一点没动，换的只是 σ 亚基，而且只换掉一部分聚合酶。这些聚合酶随即被带到热休克基因的启动子上，不再去 σ⁷⁰ 的那些启动子。这是细胞代价最小的一种重编程：换一个亚基，成百个启动子的状态同时改变，全程不牵涉任何操纵区或阻遏蛋白。"
  },
  {
    "type": "mcq",
    "q_en": "σ⁵⁴ sits outside the σ⁷⁰ family. In which two respects does it differ from that family?",
    "q_cn": "σ⁵⁴ 不属于 σ⁷⁰ 家族。它与该家族的区别体现在哪两件事上？",
    "options": [
      "It reads −35/−10, and it binds only after the core enzyme has landed on the DNA",
      "It reads −24/−12, and it can bind a promoter with no core enzyme present at all",
      "It reads −24/−12, and it has lost the conserved regions 2 and 4 altogether",
      "It reads −35/−10, and it melts the helix with no help from conserved region 2"
    ],
    "answer": 1,
    "why_en": "Both the sequence it reads and the moment at which it can bind are different. A σ⁷⁰-type factor binds −35 and −10 and only after the core enzyme is already on the DNA; σ⁵⁴ binds −24 and −12, and like the eukaryotic TATA-binding protein it can occupy a promoter on its own. All σ factors, σ⁵⁴ included, keep the four conserved regions, of which 2 and 4 bind promoter DNA.",
    "why_cn": "读什么、什么时候读，两样都不同。σ⁷⁰ 类结合 −35 与 −10 区，且必须等核心酶先结合到 DNA 上；σ⁵⁴ 结合 −24 与 −12 区，并且像真核的 TATA 区结合蛋白一样，可以自己先占住启动子。所有 σ 因子（包括 σ⁵⁴）都保有那 4 个保守区，其中第 2、4 区负责结合启动区 DNA。"
  },
  {
    "type": "mcq",
    "q_en": "An environmental stimulus dephosphorylates SpoⅡAA in a sporulating Bacillus. What follows?",
    "q_cn": "环境刺激使正在产孢的 Bacillus 中 SpoⅡAA 去磷酸化。接下来发生什么？",
    "options": [
      "SpoⅡAA binds σᶠ directly and carries it to the spore-formation promoters",
      "SpoⅡAB is degraded by a protease, and σᶠ is released inside the mother cell",
      "SpoⅡAA binds SpoⅡAB, which had been holding σᶠ, and active σᶠ is set loose",
      "σᶠ is phosphorylated in its turn and only then binds the core RNA polymerase"
    ],
    "answer": 2,
    "why_en": "The switch is three layers deep. SpoⅡAB is the anti-σ factor holding σᶠ inactive; SpoⅡAA is the anti-anti-σ factor; and dephosphorylation is what frees SpoⅡAA to bind SpoⅡAB specifically and pull it off σᶠ. One phosphate group leaving one protein sets an active σ factor loose — and σᶠ then transcribes the next σ factor and the protease that activates it, which is how the four fire in a fixed order.",
    "why_cn": "这个开关叠了三层：SpoⅡAB 是抗 σ 因子，扣住无活性的 σᶠ；SpoⅡAA 是抗–抗 σ 因子；而去磷酸化才使 SpoⅡAA 得以特异结合 SpoⅡAB、把它从 σᶠ 上拉走。一个磷酸基团的脱落，放出的是一个有活性的 σ 因子——σᶠ 随后又转录出下一个 σ 因子和激活它的蛋白酶，四个因子因此按固定次序点燃。"
  },
  {
    "type": "mcq",
    "q_en": "Spore formation in Bacillus needs four σ factors, and they act in a fixed order rather than at once. What imposes that order?",
    "q_cn": "Bacillus 形成孢子需要 4 种 σ 因子，而它们是依次起作用、不是同时起作用的。是什么规定了这个次序？",
    "options": [
      "Each factor transcribes both the next σ factor and the protease that activates it",
      "Each factor is degraded by the next one, which frees the core enzyme to move on",
      "Their genes lie in one operon and are transcribed in the order they are written",
      "Their promoters differ in strength, so the strongest of the four is always used first"
    ],
    "answer": 0,
    "why_en": "Active σᶠ drives the early spore genes, which include σᴳ and the protease that must cross into the mother cell to degrade the σᴱ precursor; active σᴳ then drives the late genes together with the protease that degrades the σᴷ precursor. Because each factor makes both its successor and the enzyme that activates that successor, sporulation runs as a timed cascade instead of four independent decisions. σᶠ and σᴷ are made as inactive precursors, which is what gives the proteases something to do.",
    "why_cn": "活性 σᶠ 启动早期孢子基因，其中就包括 σᴳ，以及那个要进入母细胞去降解 σᴱ 前体的蛋白酶；活性 σᴳ 随后启动后期基因，同时启动降解 σᴷ 前体的蛋白酶基因。每一个因子既做出接班人、又做出激活接班人的酶，于是产孢是一条有时序的级联，而不是四个各自独立的决定。σᶠ 与 σᴷ 先以非活性前体形式合成，正是给这些蛋白酶留出了活干。"
  },
  {
    "type": "mcq",
    "q_en": "Antitermination requires the polymerase to pick up its factor before it reaches the terminator. Why must it be before?",
    "q_cn": "抗终止作用要求聚合酶在到达终止子之前就把抗终止因子接上。为什么必须在之前？",
    "options": [
      "Because the terminator hairpin itself is what the factor recognises and binds",
      "Because only σ can hand the factor over, and σ leaves right after initiation",
      "Because the sequence signalling antitermination lies upstream of the terminator",
      "Because the factor acts on the released transcript rather than on the polymerase"
    ],
    "answer": 2,
    "why_en": "The antitermination signal sequence sits upstream of the terminator, so a polymerase that has not already loaded the factor has no further chance to. Carrying it, the enzyme reads straight through a stem-loop that stops every other polymerase, and one terminator becomes a site where two transcript lengths are possible. That is the difference from attenuation, where the choice is made by an RNA structure forming or not forming as transcription proceeds.",
    "why_cn": "抗终止的信号序列位于终止子的上游，所以聚合酶若没在那之前把因子装上，之后就没有机会了。带着因子的酶能直接读过那个会拦下所有其他聚合酶的茎–环结构，于是同一个终止子处出现了长短两种转录本。这正是它与衰减作用（attenuation）的分别：后者靠的是转录进行中某个 RNA 结构形不形成。"
  },
  {
    "type": "mcq",
    "q_en": "NusA and σ cannot occupy RNA polymerase at the same time. What does this section conclude from that fact?",
    "q_cn": "NusA 与 σ 因子不能同时结合在 RNA 聚合酶上。本节从这个事实里得出什么结论？",
    "options": [
      "NusA initiates transcription and σ terminates it at the rrn boxA sequence",
      "σ governs initiation and NusA governs termination on the very same core enzyme",
      "A polymerase carrying NusA cannot elongate until σ has been restored to it",
      "NusA displaces σ from a polymerase that is already travelling along the DNA"
    ],
    "answer": 1,
    "why_en": "Shortly after initiation σ dissociates and NusA takes its place on the core enzyme; NusA then increases pausing at a terminator hairpin, which is what promotes antitermination. NusA does not come off while the polymerase is on DNA, and σ can only displace it from free polymerase. So the two ends of a transcription cycle are governed by two mutually exclusive occupants of one site. At rrn, NusB/S10 joins the paused enzyme at boxA with NusG's help and the polymerase reads on.",
    "why_cn": "转录起始后不久 σ 解离，NusA 接替它结合到核心酶上；NusA 增加聚合酶在终止子发夹处的暂停，而正是这种暂停促成抗终止。只要聚合酶还在 DNA 上，NusA 就不解离；σ 只能取代游离聚合酶上的 NusA。于是转录周期的两头，由同一个位点上互斥的两个占位者分管。在 rrn 上，NusB/S10 在 NusG 帮助下于 boxA 处与暂停的酶结合，聚合酶继续读下去。"
  },
  {
    "type": "mcq",
    "q_en": "H–NS binds DNA without sequence specificity, yet it has high affinity for the regulatory regions of many environment-responsive E. coli genes. What follows for those genes?",
    "q_cn": "H–NS 以非特异性的方式结合 DNA，却对大肠杆菌许多与环境变化有关的基因的调控区有较高亲和性。这对那些基因意味着什么？",
    "options": [
      "They are transcribed constitutively, since H–NS cannot pick out one promoter",
      "They are induced by H–NS multimerisation as soon as conditions change outside",
      "They lose their higher-order DNA structure and are left permanently open",
      "They are off by default and need a specific transcription factor to open them"
    ],
    "answer": 3,
    "why_en": "H–NS is a histone-like protein: one domain binds DNA without regard to sequence, a second lets bound molecules form tetramers and larger multimers that hold the higher-order structure together. Sitting over those regulatory regions it represses what lies beneath, so an environment-responsive gene starts from off and a specific factor — one of the 300-odd E. coli transcription regulators — is required to open it.",
    "why_cn": "H–NS 是一种组蛋白类似蛋白：一个结构域不管序列地结合 DNA，另一个使结合上去的分子形成四聚体乃至多聚体，把 DNA 的高级结构撑住。它压在那些调控区上，就抑制了下面的基因；于是一个响应环境的基因默认是关着的，要打开它，必须有特定的转录因子参与——大肠杆菌基因组编码的 300 多个调控因子之一。"
  }
];

/* ===================================================================== M-7-7 */
window.BIOLITE_Q["M-7-7"] = [
  {
    "type": "mcq",
    "q_en": "Raising the temperature from 30 ℃ to 37 ℃ lifts pfrA expression fivefold in Listeria monocytogenes. What is doing the sensing?",
    "q_cn": "温度由 30 ℃ 升到 37 ℃，单核增生性李斯特菌 pfrA 基因的表达提高 5 倍。是什么在感受这个温度？",
    "options": [
      "A hairpin in the mRNA's own 5′ UTR, which opens and uncovers the RBS",
      "A sensor kinase in the membrane, which phosphorylates a response regulator",
      "A heat-shock σ factor, which redirects the polymerase to the pfrA promoter",
      "An sRNA induced by heat, which pairs with the pfrA leader by way of Hfq"
    ],
    "answer": 0,
    "why_en": "The thermosensor RNA is a hairpin in the 5′ UTR of pfrA mRNA itself: at low temperature it covers the ribosome binding site, and warming opens it and releases the site. The message is the thermometer, and no sensing protein takes part at all. It is a riboswitch that answers to something other than a metabolite — the same class of element, with a physical rather than a chemical ligand.",
    "why_cn": "热敏 RNA 就是 pfrA mRNA 自己 5′ UTR 里的一段发夹：低温时它把核糖体结合位点封住，升温则把发夹打开、释放出这个位点。温度计就是这条 mRNA 本身，全程没有任何感受蛋白参与。它属于核糖开关，只是所「感受」的不是代谢物，而是一个物理量。"
  },
  {
    "type": "mcq",
    "q_en": "One SAM-sensing riboswitch appears in many methionine-pathway genes of B. subtilis and does two different things. Which two?",
    "q_cn": "同一种 SAM 感受型核糖开关出现在枯草杆菌许多甲硫氨酸途径基因里，做的却是两件不同的事。是哪两件？",
    "options": [
      "It closes the RBS in some of those genes and cuts the message in the others",
      "It cuts the message in some of them and blocks the promoter DNA in the others",
      "It closes the RBS in some of those genes and builds a terminator in the others",
      "It builds a terminator in some of them and redirects splicing in the others"
    ],
    "answer": 2,
    "why_en": "With no SAM bound, the riboswitch folds so the RBS is exposed and translation proceeds; binding SAM changes the secondary structure and closes the RBS. In other genes the same SAM-bound element instead adopts a transcription-terminating conformation upstream of the coding region and ends transcription early. One ligand, two levels — translation in some messages, transcription in others. The cutting is the glmS ribozyme, a different element; splicing is the eukaryotic case.",
    "why_cn": "没有结合 SAM 时，核糖开关的构象把 RBS 露在外面，翻译照常；结合 SAM 后二级结构改变，RBS 被封闭。而在另一些基因里，同样结合了 SAM 的元件却在编码区上游形成转录终止构象，提前终止转录。同一个配体，作用于两个层次——有的管翻译，有的管转录。「切开 mRNA」是 glmS 核酶那一例，属于另一种元件；剪接则是真核里的情形。"
  },
  {
    "type": "mcq",
    "q_en": "The enzyme GlmS has done its work and GlcN6P has accumulated in B. subtilis. What now happens to glmS mRNA?",
    "q_cn": "GlmS 酶已经干完活，枯草杆菌胞内 GlcN6P 积累起来了。glmS mRNA 这时会怎样？",
    "options": [
      "GlcN6P occupies the ribosome binding site and blocks the 30S subunit landing",
      "GlcN6P binds the ribozyme in the 5′ UTR, and the message is cut where it lies",
      "GlcN6P binds CsrA, which leaves the message exposed to nuclease attack",
      "GlcN6P binds a repressor protein that shuts the glmS promoter on the DNA"
    ],
    "answer": 1,
    "why_en": "The 5′ UTR of glmS mRNA is a ribozyme — RNA acting as a catalyst. With no GlcN6P bound it is quiet and the message is translated normally; once the product has accumulated it binds the ribozyme, the activated ribozyme cleaves glmS mRNA and translation stops. The product of the reaction destroys the message for the enzyme that produced it, and no protein regulator is involved anywhere in the loop.",
    "why_cn": "glmS mRNA 的 5′ UTR 本身是一段核酶——具有催化活性的 RNA。没有 GlcN6P 结合时它安静不动，mRNA 正常翻译；一旦产物积累起来并结合上去，被激活的核酶就切开 glmS mRNA，翻译停止。反应的产物销毁了造出这个反应的那条 mRNA，而整个回路里没有任何蛋白质调控因子。"
  },
  {
    "type": "mcq",
    "q_en": "Prokaryotic sRNAs pair with their target mRNAs loosely rather than exactly. What does that imprecision buy the cell?",
    "q_cn": "原核 sRNA 与靶 mRNA 之间是不严格的碱基互补配对。这种「不精确」给细胞换来了什么？",
    "options": [
      "Pairing that needs no Hfq, since an imperfect duplex needs no chaperone at all",
      "Cleavage of the target by the sRNA itself, which is acting here as a ribozyme",
      "Cis encoding, so that the sRNA is transcribed beside the gene it regulates",
      "One sRNA acting on several targets, speeding or slowing each of their fates"
    ],
    "answer": 3,
    "why_en": "Loose pairing is what lets a single 50–500 nt sRNA repress or promote several different targets and speed or slow their degradation; exact complementarity would tie it to one message. The price is that most sRNAs need the RNA chaperone Hfq to work at all. Prokaryotic sRNAs are mostly trans-encoded, transcribed from somewhere else on the chromosome than the gene they act on.",
    "why_cn": "正因为配对不严格，一条 50~500 nt 的 sRNA 才能抑制或促进好几个不同的靶标，并加速或减缓它们的降解；若要求严格互补，它就只能绑死在一条 mRNA 上。代价是大多数 sRNA 必须有 RNA 分子伴侣 Hfq 协助才起得了作用。原核 sRNA 以反式编码为主，转录自染色体上与靶基因不同的位置。"
  },
  {
    "type": "mcq",
    "q_en": "DsrA raises translation of rpoS while OxyS lowers translation of fhlA, though both are trans-encoded sRNAs. What separates the two outcomes?",
    "q_cn": "DsrA 提高 rpoS 的翻译，OxyS 降低 fhlA 的翻译，而两者都是反式编码的 sRNA。是什么造成了相反的结果？",
    "options": [
      "Where each one pairs: DsrA opens a structure hiding an RBS, OxyS covers one",
      "Which chaperone each one uses: DsrA needs Hfq and OxyS works without any",
      "Their length: DsrA is long enough to pair at two sites and OxyS at only one",
      "Their encoding: DsrA is cis-encoded and OxyS is trans-encoded well away"
    ],
    "answer": 0,
    "why_en": "OxyS pairs with part of the ribosome binding site of fhlA mRNA and with a sequence inside its coding region, so the ribosome is blocked. DsrA's first stem-loop, helped by Hfq, pairs with the rpoS leader and breaks the stem-loop that had been covering the RBS — it opens rather than covers. Same class of molecule, opposite effect, decided by where the pairing falls relative to the RBS.",
    "why_cn": "OxyS 与 fhlA mRNA 核糖体结合位点的部分序列配对，也与其编码区里的特定序列配对，于是核糖体被挡住。DsrA 的第一个茎–环在 Hfq 帮助下与 rpoS 的前导序列配对，把原本盖住 RBS 的那个茎–环破坏掉——它是「打开」而不是「盖住」。同一类分子，效果相反，取决于配对落在 RBS 的什么位置。"
  },
  {
    "type": "mcq",
    "q_en": "rRNA runs short in an E. coli cell. What do the free ribosomal proteins do about it?",
    "q_cn": "大肠杆菌细胞里 rRNA 不足了。游离的核糖体蛋白会怎么做？",
    "options": [
      "They are cleared by proteases, so that no unassembled protein accumulates",
      "They bind their own mRNA, close its RBS, and halt their own synthesis",
      "They bind the rRNA promoters and raise rRNA transcription to match demand",
      "They bind CsrB, which releases CsrA onto the glycolysis messages instead"
    ],
    "answer": 1,
    "why_en": "Ribosomal proteins have a strong affinity for rRNA, so while rRNA is plentiful they are all bound to it and never touch their own messages. When rRNA runs short they have nowhere else to go, settle on their own mRNA and close its RBS. Synthesis of ribosomal protein stops until rRNA is available again, which keeps the two components of a ribosome in step with each other.",
    "why_cn": "核糖体蛋白与 rRNA 的亲和力较强，所以只要 rRNA 充足，它们就都结合在 rRNA 上，不会去碰自身的 mRNA。rRNA 一旦不足，它们无处可去，只能结合到自身 mRNA 上，把该 mRNA 的 RBS 封闭。核糖体蛋白的合成就此停下，直到 rRNA 重新供得上——于是核糖体的两种组分在数量上始终配得上。"
  },
  {
    "type": "mcq",
    "q_en": "Starved of an amino acid, a rel⁺ cell drops its RNA synthesis rate and a rel⁻ cell does not. What is present in the first and missing in the second?",
    "q_cn": "缺乏某种氨基酸时，rel⁺ 菌株的 RNA 合成速度下降，rel⁻ 菌株却不下降。前者有、后者没有的是什么？",
    "options": [
      "Uncharged tRNA in the ribosomal A site, which rel⁻ cells cannot generate",
      "The nucleases that clear a useless message, absent from a rel⁻ background",
      "RelA, the ATP–GTP pyrophosphotransferase that makes ppGpp and pppGpp",
      "SpoT, the enzyme that degrades (p)ppGpp once the starvation has passed"
    ],
    "answer": 2,
    "why_en": "Starvation fills the ribosomal A site with uncharged tRNA in both strains — that is the signal, not the difference. What rel⁺ has is RelA, the ATP–GTP 3′ pyrophosphotransferase that turns the stalled reaction's accumulated GTP into the magic spots, with EFTu and EFG also required. ppGpp is pleiotropic: it changes the promoter specificity of RNA polymerase, blocks IF2-mediated initiation and activates proteases, which is why RNA synthesis falls only in rel⁺.",
    "why_cn": "饥饿时两种菌株的核糖体 A 位上都会出现不负载氨基酸的 tRNA——那是信号，不是差别所在。rel⁺ 多出来的是 RelA，即那个 ATP–GTP 3′ 焦磷酸转移酶，它把延伸停下后积累的 GTP 变成魔斑核苷酸，此外还需要 EFTu 和 EFG。ppGpp 是多效的：改变 RNA 聚合酶与启动子结合的专一性、抑制 IF2 介导的翻译起始、活化蛋白水解酶——所以只有 rel⁺ 的 RNA 合成会跟着下降。"
  }
];
