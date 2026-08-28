/* Questions, written alongside each spine. Empty until the first spine lands. */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* M-8-5 · §8.5 真核基因其他水平上的表达调控, 现分 p.341–352.
   Drawn from the chapter's 思考题 11 (蛋白质磷酸化如何影响基因表达), 13 (激素影响
   基因表达的基本模式) and 14 (分子伴侣的分类及其影响基因表达的机制), plus the
   material of the section itself.

   MEASURED DEFECT BEING AVOIDED: in the parent corpus 89% of questions could be
   answered by picking the longest option. Here the correct option is cut back to
   its bare claim and every distractor is raised to the same specificity; the
   reasoning lives in why_en / why_cn, never in the option text. Answer positions:
   2,1,3,1,2,1,3,1,2,0,3,2. */
window.BIOLITE_Q["M-8-5"] = [
  {
    "type": "mcq",
    "q_en": "Inactive protein kinase A (PKA) has which subunit composition, and what does cAMP do to it?",
    "q_cn": "非活性状态的 A 激酶(PKA)全酶由什么亚基组成？cAMP 对它做了什么？",
    "options": [
      "C2R2, and cAMP phosphorylates the regulatory subunits ｜ C2R2，cAMP 使调节亚基磷酸化",
      "R4, and cAMP splits the tetramer into two active dimers ｜ R4，cAMP 把四聚体拆成两个活性二聚体",
      "R2C2, and cAMP binds R and frees active C monomers ｜ R2C2，cAMP 结合 R，释放有活性的 C 单体",
      "R2C2, and cAMP binds C and frees active R monomers ｜ R2C2，cAMP 结合 C，释放有活性的 R 单体"
    ],
    "answer": 2,
    "why_en": "Inactive PKA is a holoenzyme of four subunits, R2C2: two regulatory and two catalytic. cAMP binds the regulatory subunits, the conformation changes, and the catalytic subunits are released as catalytically active monomers. PKA then transfers the terminal phosphate of ATP onto a serine or threonine residue at a site marked by two or more basic residues upstream, X–Arg–Arg–X–Ser–X. Because each kind of cell offers PKA a different substrate, the same messenger produces a different response in each target cell.",
    "why_cn": "非活性 PKA 全酶由 4 个亚基组成，即 R2C2：两个调节亚基、两个催化亚基。cAMP 与调节亚基结合，引起构象变化，催化亚基被释放成为有催化活性的单体。随后 PKA 把 ATP 末端磷酸基团加到丝氨酸或苏氨酸残基上，该位点 N 端上游往往有两个或以上碱性氨基酸，即 X–Arg–Arg–X–Ser–X。不同细胞给 PKA 的底物不同，所以同一个信使在不同靶细胞里诱发不同反应。"
  },
  {
    "type": "mcq",
    "q_en": "The cAMP response element (CRE) in the 5′ promoter region of cAMP-inducible genes has which core sequence?",
    "q_cn": "受 cAMP 诱导的基因，其 5′ 端启动区中的 cAMP 应答元件(CRE)，基本序列是什么？",
    "options": [
      "TGACTCA — the phorbol-ester element TRE, read by AP1 ｜ TGACTCA——佛波酯元件 TRE，由 AP1 读取",
      "TGACGTCA — bound once PKA has phosphorylated CREB ｜ TGACGTCA——PKA 使 CREB 磷酸化后结合于此",
      "CCATATTAGG — the serum element SRE, read by SRF ｜ CCATATTAGG——血清元件 SRE，由 SRF 读取",
      "CNNGAANNTCCNNG — the heat shock element HSE, read by HSF ｜ CNNGAANNTCCNNG——热激元件 HSE，由 HSF 读取"
    ],
    "answer": 1,
    "why_en": "TGACGTCA is the CRE. The chain is: ligand binds receptor R, R couples to the GTP-binding protein, that activates membrane-bound adenylate cyclase, cAMP rises, PKA is activated, and its catalytic subunit enters the nucleus. Phosphorylated CREB and CREM then act as transcriptional activators on the CRE. The other three sequences are real response elements from the same table, each with its own factor.",
    "why_cn": "CRE 的基本序列是 TGACGTCA。整条链是：配基与受体 R 结合，R 与 GTP 结合蛋白耦合，激活膜上的腺苷酸环化酶，胞内 cAMP 上升，A 激酶被活化，催化亚基入核。被磷酸化的 CREB、CREM 就作为转录激活因子作用于 CRE。其余三条也是真实的应答元件序列，各有各的结合因子。"
  },
  {
    "type": "mcq",
    "q_en": "PIP2 is cut into IP3 and DAG. What does DAG contribute to activating C kinase (PKC)?",
    "q_cn": "PIP2 被切成 IP3 和 DAG。在激活 C 激酶(PKC)这件事上，DAG 出的力是什么？",
    "options": [
      "It opens a plasma-membrane Ca2+ channel ｜ 它打开质膜上的 Ca2+ 通道",
      "It phosphorylates PKC's regulatory domain ｜ 它磷酸化 PKC 的调节结构域",
      "It carries PKC into the nucleus ｜ 它把 PKC 带进细胞核",
      "It raises PKC's affinity for Ca2+ ｜ 它提高 PKC 对 Ca2+ 的亲和力"
    ],
    "answer": 3,
    "why_en": "IP3 raises the cytosolic Ca2+ level, which pulls PKC to the inner face of the plasma membrane; DAG then sharply raises PKC's affinity for Ca2+, so a physiological Ca2+ level is enough to switch the enzyme on. DAG binding also lifts the inhibition that PKC's regulatory domain imposes on its catalytic domain. PKC is named for that dependence on Ca2+.",
    "why_cn": "IP3 使细胞质 Ca2+ 浓度升高，把 C 激酶拉到原生质膜内侧；DAG 再大大提高 C 激酶对 Ca2+ 的亲和力，使生理水平的 Ca2+ 就足以活化它。DAG 结合后还解除调节结构域对催化结构域的抑制。C 激酶之名正来自这种对 Ca2+ 的依赖。"
  },
  {
    "type": "mcq",
    "q_en": "In a rabbit reticulocyte extract with no haemin added, the inhibitor HCI is activated. What does HCI do?",
    "q_cn": "兔网织红细胞粗抽提液中不加氯高铁血红素时，抑制剂 HCI 被活化。HCI 做了什么？",
    "options": [
      "It cleaves eIF-2 into fragments that are then degraded ｜ 它把 eIF-2 切成片段并随即降解",
      "It phosphorylates the α subunit of eIF-2, inactivating it ｜ 它使 eIF-2 的 α 亚基磷酸化，令其失活",
      "It removes the 5′ cap so the 40S subunit cannot enter ｜ 它去掉 5′ 帽子，40S 亚基无法进入",
      "It binds the IRE and blocks that message's translation ｜ 它结合 IRE，阻断该 mRNA 的翻译"
    ],
    "answer": 1,
    "why_en": "HCI is a haemin-regulated kinase acting on eIF-2: it phosphorylates the α subunit and turns eIF-2 from its active form into an inactive one. Phosphorylated eIF-2α binds eIF-2B tightly, so eIF-2 cannot be recycled and no initiation complex forms. Inactive HCI switches itself on by autophosphorylation with help from the heat-stable HS factor, and haemin blocks that activation. Oxidised glutathione and double-stranded RNA produce the same shutdown.",
    "why_cn": "HCI 是受氯高铁血红素调节的 eIF-2 激酶：它使 eIF-2 的 α 亚基磷酸化，把 eIF-2 由活性型变成非活性型。磷酸化的 eIF-2α 与 eIF-2B 紧密结合，eIF-2 无法再利用，起始复合物形成不了。没有活性的 HCI 可经自身磷酸化变成活性型，与热稳定的 HS 因子有关；氯高铁血红素能阻断这一活化。添加氧化型谷胱甘肽或双链 RNA 也能引起同样的停摆。"
  },
  {
    "type": "mcq",
    "q_en": "The activity of the p53 gene falls in a cell. Following the chain p21 → CDK2-cyclin E → pRb → E2F, what happens?",
    "q_cn": "细胞中 p53 基因活性降低。沿 p21 → CDK2-周期蛋白 E → pRb → E2F 这条链走下去，会发生什么？",
    "options": [
      "p21 rises, CDK2 is inhibited, pRb holds E2F, the cell arrests ｜ p21 升高，CDK2 被抑制，pRb 扣住 E2F，细胞停滞",
      "p21 falls, CDK2 is inhibited, E2F stays bound, the cell arrests ｜ p21 下降，CDK2 被抑制，E2F 仍被扣住，细胞停滞",
      "p21 falls, CDK2 phosphorylates pRb, E2F is freed, the cell enters S ｜ p21 下降，CDK2 磷酸化 pRb，E2F 被释放，细胞进入 S 期",
      "p21 rises, CDK2 phosphorylates pRb, E2F is freed, the cell enters S ｜ p21 升高，CDK2 磷酸化 pRb，E2F 被释放，细胞进入 S 期"
    ],
    "answer": 2,
    "why_en": "Abundant p21 binds the cyclin E–CDK2 complex, CDK2 then cannot phosphorylate pRb, unphosphorylated pRb holds E2F and E2F cannot switch on the enzymes of DNA synthesis, so the cell stays in G1. Lower p53 activity drops p21 sharply, so cyclin E–CDK2 phosphorylates pRb, pRb releases E2F, and freed E2F activates the DNA-synthesis genes: the cell goes from G1 into S and divides. This is one worked answer to 思考题 11.",
    "why_cn": "p21 过量时与周期蛋白 E-CDK2 复合物结合，CDK2 丧失磷酸化 pRb 的功能；未磷酸化的 pRb 扣住 E2F，E2F 不能激活与 DNA 合成有关的酶，细胞停在 G1 期。p53 基因活性降低则 p21 含量急剧下降，周期蛋白 E-CDK2 得以磷酸化 pRb，pRb 放开 E2F，游离 E2F 激活 DNA 合成相关基因，细胞由 G1 期进入 S 期并分裂。这正是思考题 11 的一个标准答例。"
  },
  {
    "type": "mcq",
    "q_en": "How does acetylation raise p53's ability to bind DNA?",
    "q_cn": "乙酰化是怎样提高 p53 结合 DNA 的能力的？",
    "options": [
      "The acetyl groups themselves contact the DNA backbone ｜ 乙酰基自身与 DNA 骨架发生接触",
      "The regulatory domain moves off the DNA-binding region ｜ 调节结构域挪开，DNA 结合区域暴露",
      "Acetylation makes p53 form the tetramer it needs ｜ 乙酰化使 p53 形成它所需的四聚体",
      "Acetylation stops p53 being degraded, so more exists ｜ 乙酰化阻止 p53 降解，使其含量上升"
    ],
    "answer": 1,
    "why_en": "In the unmodified protein the regulatory domain folds back over the DNA-binding domain and DNA binding is nil. Acetylation swings the regulatory domain aside, the DNA-binding region is exposed, binding becomes strong and target-gene transcription rises. CBP/p300 complexes do both halves of the job: they acetylate p53 and they alter chromosome structure in a way that favours p53 binding.",
    "why_cn": "未经修饰时，调节结构域折回来压住 DNA 结合结构域，DNA 结合能力为零。乙酰化把调节结构域挪开，DNA 结合区域暴露，结合能力变强，靶基因转录随之提高。CBP/p300 等蛋白复合体两件事一起干：既使 p53 乙酰化，又诱导染色体结构发生有利于结合 p53 的改变。"
  },
  {
    "type": "mcq",
    "q_en": "Steroid hormones reach every cell. What makes their control of transcription tissue-specific?",
    "q_cn": "类固醇激素能到达每一个细胞。是什么使它们对转录的调控具有组织特异性？",
    "options": [
      "Only target cells carry the ~20 bp HRE upstream of these genes ｜ 只有靶细胞在这些基因上游带有约 20 bp 的 HRE",
      "Only target cells let the hormone cross the plasma membrane ｜ 只有靶细胞允许激素穿过质膜",
      "Only target cells can convert the hormone to its active form ｜ 只有靶细胞能把激素转成活性形式",
      "Target cells hold abundant receptor protein, other cells little ｜ 靶细胞含大量激素受体蛋白，其他细胞很少"
    ],
    "answer": 3,
    "why_en": "Target cells contain a great deal of hormone receptor protein while non-target cells have little or none, and that difference is the root of the tissue specificity of hormone-regulated transcription. The receptor is what forms the complex, changes conformation, crosses the nuclear envelope and binds the hormone response element (HRE), a cis-acting element of about 20 bp that acts like an enhancer under hormone control. This is 思考题 13.",
    "why_cn": "靶细胞中含有大量激素受体蛋白，而非靶细胞中没有或很少有这类受体，这正是激素调节转录具有组织特异性的根本原因。受体才是那个与激素形成复合物、改变构象、穿过核膜并结合激素应答元件(HRE)的分子；HRE 是一段约 20 bp 的顺式作用元件，作用类似增强子，活性受激素制约。此题即思考题 13。"
  },
  {
    "type": "mcq",
    "q_en": "In the DEX-inducible system a nuclear protein X is fused to the glucocorticoid receptor GR. Where is the fusion protein before DEX is added?",
    "q_cn": "在 DEX 可诱导系统中，核蛋白 X 与糖皮质激素受体 GR 构成融合蛋白。加 DEX 之前，融合蛋白在哪里？",
    "options": [
      "In the nucleus, because GR carries a constitutive localisation signal ｜ 在核内，因为 GR 带组成型核定位信号",
      "In the cytoplasm, complexed with HSP90 ｜ 在胞质中，与 HSP90 形成复合物",
      "On the plasma membrane, anchored there by the GR part ｜ 在质膜上，由 GR 部分锚定在那里",
      "In the nucleus but off the DNA, waiting for DEX ｜ 在核内但不结合 DNA，等着 DEX"
    ],
    "answer": 1,
    "why_en": "Without added DEX the fusion protein forms a complex with HSP90 and, for reasons of conformation and steric hindrance, stays in the cytoplasm and cannot localise to the nucleus. Adding DEX lets it diffuse into the cell and bind GR; the fusion protein changes conformation, its nuclear localisation signal is exposed, it enters the nucleus, and the downstream gene is expressed. The natural version of this is nuclear shuttling by glucocorticoid.",
    "why_cn": "不施加外源 DEX 时，融合蛋白与 HSP90 形成复合物，由于构象和空间位阻等原因存在于胞质中，不能定位到细胞核内。添加 DEX 后，DEX 扩散入胞与 GR 结合，融合蛋白构象改变，核定位信号暴露，行使入核功能，下游基因随即表达。其天然版本就是糖皮质激素的核穿梭(nuclear shuttling)。"
  },
  {
    "type": "mcq",
    "q_en": "Heat shock proteins fall into four families by relative molecular mass and homology. Which grouping is right?",
    "q_cn": "按相对分子质量的大小与同源程度，热休克蛋白分为四个家族。下面哪一组是对的？",
    "options": [
      "HSP110, HSP90, HSP70 and the small HSPs ｜ HSP110、HSP90、HSP70 和小分子 HSP",
      "HSP90, HSP70, HSP60 and the calnexin/calreticulin pair ｜ HSP90、HSP70、HSP60 与钙联蛋白/钙网蛋白",
      "HSP90, HSP70, the small HSPs and ubiquitin ｜ HSP90、HSP70、小分子 HSP 和泛素",
      "HSP100, HSP90, HSP70 and ubiquitin ｜ HSP100、HSP90、HSP70 和泛素"
    ],
    "answer": 2,
    "why_en": "The four families are HSP90, HSP70, the small HSPs and ubiquitin. HSP70's main job is protein metabolism — folding and unfolding, translocation, assembly of multi-subunit complexes — and ubiquitin's is clearing denatured protein out of the cell by degradation; HSP90 promotes the binding of steroid receptors to hormone and to DNA. An HSP regulates a target protein's activity without being part of that target, which is why it is called a molecular chaperone. This is 思考题 14.",
    "why_cn": "四个家族是 HSP90、HSP70、小分子 HSP 及泛素。HSP70 的主要功能是参与蛋白质代谢——折叠与去折叠、转位、多聚复合物的组装；泛素的主要功能是通过降解清除细胞内的变性蛋白质；HSP90 则促进甾醇激素受体与激素及与 DNA 的结合。HSP 参与靶蛋白活性和功能的调节，却不是靶蛋白的组成部分，因此称为分子伴侣。此题即思考题 14。"
  },
  {
    "type": "mcq",
    "q_en": "What frees HSF to trimerise during heat shock, and what returns it to a monomer afterwards?",
    "q_cn": "热激时是什么把 HSF 释放出来形成三体？热激过后又是什么把它变回单体？",
    "options": [
      "Denatured protein pulls HSP70 off HSF; new HSP70 later rebinds ｜ 变性蛋白把 HSP70 从 HSF 上夺走；新生 HSP70 随后再结合",
      "Binding at the HSE drives trimerisation, and dephosphorylation reverses it ｜ 与 HSE 的结合驱动三聚化，去磷酸化使其逆转",
      "Heat denatures HSF itself into a trimer, and cooling refolds the monomer ｜ 高温把 HSF 自身变性成三体，降温使单体复性",
      "Ubiquitin tags monomeric HSF, and degrading the tag releases it ｜ 泛素标记单体 HSF，标记被降解后它获释"
    ],
    "answer": 0,
    "why_en": "Without stress HSF is a monomer with no DNA-binding ability, and HSP70 is thought to keep it that way. Heat fills the cell with denatured protein, which competes with HSF for HSP70 and so releases HSF; freed HSF trimerises, enters the nucleus, binds HSE and drives transcription of the heat-shock genes, HSP70 among them. As the heat passes, the newly abundant HSP70 rebinds HSF, returns it to a monomer with no DNA-binding ability, and it leaves the DNA. HSF is also rapidly phosphorylated after heat shock, which may affect its binding.",
    "why_cn": "无胁迫时 HSF 以单体存在、没有 DNA 结合能力，HSP70 可能参与维持这种单体形式。受热后细胞内变性蛋白增多，它们与 HSF 竞争结合 HSP70，从而释放 HSF；游离 HSF 形成三体、入核、与 HSE 特异结合，启动包括 HSP70 在内的热激应答基因转录。热激温度消失后，大量游离的 HSP70 又与 HSF 结合，使之变回没有 DNA 结合能力的单体并脱离 DNA。热激后 HSF 还会迅速磷酸化，这可能也影响其结合能力。"
  },
  {
    "type": "mcq",
    "q_en": "In an iron-starved cell the same IREBP binds the same kind of IRE on ferritin mRNA and on transferrin-receptor (TfR) mRNA, yet the two proteins move in opposite directions. Why?",
    "q_cn": "缺铁细胞里，同一个 IREBP 结合铁蛋白 mRNA 与转运铁蛋白受体(TfR) mRNA 上同一类 IRE，两个蛋白的水平却朝相反方向变化。为什么？",
    "options": [
      "Ferritin's IRE differs in sequence from the IREs of TfR mRNA ｜ 铁蛋白的 IRE 与 TfR mRNA 上的 IRE 序列不同",
      "IREBP changes conformation between the two messages it binds ｜ IREBP 在两条 mRNA 之间改变了自身构象",
      "Iron changes the amount of ferritin mRNA but not of TfR mRNA ｜ 铁改变铁蛋白 mRNA 的量，却不改变 TfR mRNA 的量",
      "Ferritin's IRE is in the 5′ UTR, TfR's IREs in the 3′ UTR ｜ 铁蛋白的 IRE 在 5′ 非翻译区，TfR 的 IRE 在 3′ 非翻译区"
    ],
    "answer": 3,
    "why_en": "One protein, one element, opposite outcomes, decided only by which untranslated region the element occupies. IREBP bound to the 5′ IRE of ferritin mRNA blocks that message being translated; IREBP bound to the 3′ IREs of TfR mRNA blocks that message being degraded, so more TfR protein is made. Deleting ferritin's 5′ untranslated IRE gives permanently high ferritin translation, and iron-starved versus iron-loaded cells differ by two orders of magnitude in protein with no significant difference at the mRNA level.",
    "why_cn": "同一个蛋白、同一个元件，结果相反，唯一的分别是元件坐在哪一段非翻译区。IREBP 结合铁蛋白 mRNA 5′ 非翻译区的 IRE，有效地阻止铁蛋白 mRNA 的翻译；结合 TfR mRNA 3′ 非翻译区的 IRE，则有效地阻止 TfR mRNA 的降解，促进 TfR 蛋白合成。去掉铁蛋白的 5′ 非翻译区 IRE，可造成铁蛋白的永久性高水平翻译；缺铁与高铁细胞之间蛋白水平差两个数量级，mRNA 水平却没有显著差异。"
  },
  {
    "type": "mcq",
    "q_en": "In Kozak's scanning model, why does the 40S initiation complex normally start at the AUG nearest the 5′ end?",
    "q_cn": "在 Kozak 的「扫描模式」里，40S 起始复合物为什么通常停在离 5′ 端最近的那个 AUG 上起始？",
    "options": [
      "That AUG is the only one preceded by a Shine-Dalgarno sequence ｜ 只有那个 AUG 前面配有 SD 序列",
      "The 60S subunit binds first and covers every downstream AUG ｜ 60S 亚基先结合，盖住了下游所有 AUG",
      "The sequence on either side of it, A/G NNAUGG, suits initiation best ｜ 它前后的序列 A/G NNAUGG 最适合起始",
      "Cap methylation marks that AUG and no other on the message ｜ 帽子甲基化只标记了那一个 AUG"
    ],
    "answer": 2,
    "why_en": "The 40S subunit and the initiation factors bind near the 5′ end and slide toward the 3′ end; where they stop is decided by the sequence before and after the AUG. A survey of over 200 eukaryotic mRNAs found almost all of them reading A/G NNAUGG at the first AUG. The same picture explains why hydrolysing an mRNA activates a start codon inside it: hydrolysis creates a new 5′ end, and a new 5′ end is an entry site for the 40S complex.",
    "why_cn": "40S 亚基与起始因子先结合在 mRNA 靠近 5′ 端处，再向 3′ 方向滑行；停在哪里由 AUG 前(5′ 方向)和后(3′ 方向)的序列决定。调查 200 多种真核生物 mRNA 发现，5′ 端第一个 AUG 前后绝大部分都是 A/G NNAUGG。同一幅图也解释了为什么 mRNA 水解后其内部的起始密码子会被活化：水解产生了新的 5′ 端，而新的 5′ 端可以成为 40S 起始复合物的进入位点。"
  }
];
