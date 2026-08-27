/* Merged spines — DNA repair, DNA recombination, and the RNA-dependent arrow.

   These three topics have one member node each, all three from Lehninger, and no
   Czech partner node to fold in. So the merge here is a conversion rather than a
   synthesis: the substance, the numbers and every `src` of the per-node spine are
   kept, and what changes is the shape. Each step becomes ONE claim, in order,
   readable straight through, with the seven house rules applied — state the thing;
   no unbound "the"; name the actual objects; no commentary about a textbook;
   introduce every noun in the same breath; state the scope; reach back.

   Chapters 22–26 are not extracted anywhere else in this repo, so the per-node spine
   was the only source available. Nothing was added to it. Where a noun had to be
   glossed so a chain could be read straight through, the gloss defines a word the
   source already uses; no fact, number, page reference or example was invented.

   The three chains reach back to each other and to key:dna-replication, because a
   collapsed replication fork is where repair, recombination and replication turn out
   to be one subject: excision repair leaves a transient nick, a fork arriving at that
   nick loses an arm, and recombination is what rebuilds it.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------- DNA 修复 ---- */
window.BIOLITE_SPINE["key:dna-repair"] = {
  assumed: ["DNA", "RNA", "base", "base pair", "nucleotide", "protein", "enzyme", "ATP",
            "gene", "cell", "eukaryote", "bacterium", "chromosome", "replication",
            "replication fork", "template", "helicase", "DNA ligase", "exonuclease",
            "endonuclease", "nuclease", "deoxyribose", "adenine", "cytosine", "guanine",
            "thymine", "uracil", "purine", "pyrimidine", "cysteine", "proline",
            "collagen", "folate", "flavin", "FAD", "free radical", "hydrolysis",
            "deamination", "methylation", "cancer", "mammal", "yeast", "salmonella",
            "escherichia coli", "histidine", "ionizing radiation", "oxidative metabolism",
            "neuron", "colon", "single-strand binding protein", "proofreading",
            "processivity", "alpha-ketoglutarate", "dioxygenase", "chromatin",
            "recombination", "lesion", "mutagen", "carcinogen", "alkylating agent",
            "ultraviolet", "kinase", "polymerase"],
  nodeTitle_en: "DNA repair",
  nodeTitle_cn: "DNA 修复",
  title_en: "A damaged protein is thrown away and a damaged DNA strand is rebuilt from the other one — every repair system here is that one sentence applied to a different kind of damage",
  title_cn: "受损的蛋白被丢掉，受损的 DNA 链则照着另一条链重建 —— 这里每一套修复系统，都是这一句话用在不同类型的损伤上",
  steps: [
    {
      en: "A damaged protein or RNA molecule is simply degraded and remade from its gene, because the information needed to rebuild it is still on file in DNA. A lesion is any chemical change to a base or to the sugar-phosphate backbone. **DNA has no higher copy to be read back from: a mammalian cell picks up thousands of lesions in 24 hours and fewer than 1 in 1,000 becomes permanent, and that whole difference is repair.** So the cell tolerates an enormous amount of damage and corrects almost all of it afterwards.",
      cn: "一个受损的蛋白或 RNA 分子会被直接降解掉、再照着它的基因重造，因为重建它所需的信息还完好地存在 DNA 里。所谓损伤（lesion），就是碱基或糖-磷酸骨架上任何一处化学改变。**DNA 自己没有更上层的拷贝可供回读：哺乳动物细胞在 24 小时内累积成千上万处损伤，其中变成永久序列改变的不到千分之一，而这中间全部的差额就是修复。**所以细胞的做法是容忍巨量的损伤，再事后把它们几乎全部改回来。",
      src: "A p.930"
    },
    {
      link_en: "and correcting damage afterwards is possible because of one structural fact",
      link_cn: "而「事后还能改回来」之所以成立，靠的是一个结构事实",
      en: "DNA is double-stranded and the two strands carry the same information. **The undamaged strand records what the damaged one is supposed to say, so a repair system cuts the damage out and rebuilds the gap from the intact strand.** That is the whole basis of accurate repair. One situation is treated as a crisis: the one where the second strand is missing or damaged too, and there only two options are left — copy from another chromosome carrying the same sequence, or guess.",
      cn: "DNA 是双链的，两条链携带同一份信息。**未受损的那条链记录着「受损那条本该写什么」，所以各种修复系统的做法都是把损伤切除掉、再照着完好的那条链把缺口重建起来。**这就是精确修复的全部依据。只有一种情形被当作危机来处理：第二条链也缺失或也受损的那一种；到了那里只剩两个选择 —— 从另一条带有同样序列的染色体上抄，或者猜。",
      src: "A p.930–931, p.938"
    },
    {
      link_en: "what is at stake when repair fails has a name and a number",
      link_cn: "修复失败时的后果，有一个名字，也有一个数字",
      en: "A lesion that goes unrepaired before the DNA is copied becomes a permanent change in the nucleotide sequence, which is what a mutation is — one base pair swapped for another, or one or more base pairs inserted or deleted. A mutation falling in nonessential DNA, or barely affecting a gene's function, is silent; a few are advantageous; most of the rest are neutral or harmful. **The Ames test turns a mutation rate into countable colonies: Salmonella unable to make histidine is plated without it, and a mutagen on a paper disc causes back-mutations that let colonies grow.** Over 90% of compounds shown to cause cancer in animal trials score as mutagens on that plate. Compounds are also tested after incubation with a liver extract, because some are mutagenic only after the body's own metabolism has transformed them.",
      cn: "一处损伤如果在 DNA 被复制之前没修好，就变成核苷酸序列上的永久改变 —— 这就是突变：要么一个碱基对被换成另一个，要么一个或多个碱基对被插入或删除。落在非必需 DNA 上、或对基因功能影响可忽略的突变叫沉默突变；少数突变有利；其余大多中性或有害。**Ames 试验把突变率变成可以数的菌落：把一株不能合成组氨酸的沙门氏菌铺在不含组氨酸的培养基上，滤纸片上的诱变剂引起回复突变，菌落就长出来了。**在动物实验中被证明致癌的化合物里，超过 90% 在这块平板上也表现为诱变剂。化合物还要在与肝脏提取物一起温育之后再测一次，因为有些只有在被身体自身的代谢改造之后才有诱变性。",
      src: "A p.930"
    },
    {
      link_en: "two things about repair as a whole, before any single mechanism",
      link_cn: "在讲任何一套具体机制之前，先说关于修复整体的两件事",
      en: "Nearly 200 human genes encode proteins dedicated to DNA repair, and losing the function of one of them often produces genomic instability and a raised cancer risk. Redundancy is normal, and several separate systems can handle some common lesions. **Repair is extraordinarily inefficient energetically, an explicit exception to the pattern of almost every metabolic pathway, where each ATP is accounted for and spent well.** When the integrity of genetic information is what is at stake, the chemical energy invested seems almost beside the point — a claim demonstrated three times in the steps below: over a thousand base pairs destroyed to correct one, a whole protein molecule consumed per base repaired, and a deliberately raised mutation rate accepted as the price of continuing at all.",
      cn: "人类基因组中有将近 200 个基因专门编码 DNA 修复蛋白，其中任何一个失去功能，往往就带来基因组不稳定和癌症风险升高。冗余是常态：一些常见损伤可以由好几套彼此独立的系统处理。**修复在能量上极其不划算，这是对「几乎每一条代谢通路里每一个 ATP 都被精打细算地花掉」这一规律的明确例外。**当赌注是遗传信息的完整性时，投进去多少化学能几乎无关紧要 —— 这个论断在下面被演示三次：为纠正一个碱基而毁掉一千多个碱基对；每修好一个碱基就消耗掉一整个蛋白分子；以及把「主动提高突变率」作为「还能继续下去」的代价接受下来。",
      src: "A p.931, Table 25-5"
    },
    {
      link_en: "first system: the mismatches replication leaves behind, where the hard part is not finding them",
      link_cn: "第一套系统：复制留下的错配 —— 而这里难的并不在于找到它们",
      recall_en: "the third layer of the replication accuracy budget, after shape selection and proofreading",
      recall_cn: "这是复制精确度预算里的第三层，排在形状挑选和校对之后",
      en: "Correcting the rare mismatched base pairs left after replication improves overall fidelity by a further factor of 100 to 1,000. The difficulty is which strand to change: at a G-T mismatch both bases are perfectly normal DNA bases, and repairing the parent strand would make a copying error permanent. E. coli solves it with a clock. **Dam methylase methylates the adenine of every GATC sequence, and for minutes after a fork passes only the old strand carries that methyl group — that half-methylated state labels which strand is new.** The controls make the logic airtight: methylate both strands at a GATC and few mismatches get repaired; methylate neither and repair happens with no preference for either strand. Repair is a race against Dam methylase finishing its job, because once the site is fully methylated the evidence of which strand was new is gone.",
      cn: "把复制之后残留的少数错配碱基对纠正过来，会使总体保真度再提高 100–1,000 倍。难的是「该改哪一条链」：在一个 G-T 错配上两个碱基都是完全正常的 DNA 碱基，一旦改了亲代那条链，一个抄写错误就变成永久突变。大肠杆菌用一个时钟解决它。**Dam 甲基化酶在每一个 GATC 序列的腺嘌呤上加一个甲基；复制叉过去后的几分钟里只有旧链带着这个甲基 —— 这个半甲基化状态就标出了哪条链是新的。**几个对照把逻辑封死了：把一个 GATC 的两条链都甲基化，错配几乎修不了；两条链都不甲基化，修复照样发生，但对两条链毫无偏好。修复是一场与 Dam 甲基化酶赛跑的比赛，因为位点一旦被完全甲基化，「哪条链是新的」这条证据就消失了。",
      src: "A p.931–933, Fig. 25-20",
      see: [{ id: "L-25-1-1", en: "the same Dam methylase, timing replication initiation", cn: "同一个 Dam 甲基化酶，在那里为复制起始计时" }]
    },
    {
      link_en: "the mismatch and the label can be a thousand base pairs apart, so the machinery has to connect two distant places",
      link_cn: "错配与那个标签之间可能隔着上千个碱基对，所以机器必须把两个遥远的地点连起来",
      en: "MutS scans the DNA and clamps onto a mismatch, binding every kind except C-C. MutL joins it, and the pair slides along the DNA in either direction hunting for a half-methylated GATC. MutH rides with them carrying a nuclease activity that stays switched off until such a site is found, and there it cuts the unmethylated strand. A helicase, single-strand binding protein and one of four exonucleases then chew that strand from the cut all the way through the mismatch, polymerase III fills the gap and ligase seals it. **The cut can lie over 1,000 bp from the mismatch, so a thousand-odd nucleotides are destroyed and resynthesised to correct one wrong base — repair being extravagant, demonstrated once.**",
      cn: "MutS 沿 DNA 扫描，遇到错配就箍成一个夹子，除 C-C 之外每一种错配它都结合。MutL 加入进来，两者沿 DNA 向任一方向滑动，寻找一个半甲基化的 GATC。MutH 跟着一起走，身上带的核酸酶活性在找到这样一个位点之前一直关着，到了那里就把未甲基化的那条链切开。接着一个解旋酶、单链结合蛋白和四种外切酶中的一种，把那条链从切口一路啃到错配处，聚合酶 III 把缺口填上，连接酶封死。**切口可能距离错配 1,000 bp 以上，所以为纠正一个错误碱基要毁掉并重新合成一千多个核苷酸 —— 这就是「修复很奢侈」的第一次演示。**",
      src: "A p.933–934, Fig. 25-21, Fig. 25-22"
    },
    {
      link_en: "eukaryotes kept two of those three proteins, and the missing one leaves a hole",
      link_cn: "真核细胞保留了这三个蛋白里的两个，而缺掉的那一个留下了一个洞",
      en: "Eukaryotic cells have proteins matching MutS and MutL — chiefly an MSH2-MSH6 pair for single mismatches, an MSH2-MSH3 pair for longer mispaired loops, and an MLH1-PMS1 pair that binds and stabilises them — but nothing matching MutH, because a methylation clock is a bacterial solution and GATC sequences are not involved in eukaryotes. **Defects in mismatch repair cause hereditary nonpolyposis colon cancer, one of the commonest inherited cancer-susceptibility syndromes, most often through the genes hMLH1 and hMSH2.** Losing the ability to correct one wrong base in a million makes colon cancer close to inevitable.",
      cn: "真核细胞有与 MutS 和 MutL 对应的蛋白 —— 主要是结合单碱基错配的 MSH2–MSH6 对、结合较长错配环的 MSH2–MSH3 对，以及结合并稳定它们的 MLH1–PMS1 对 —— 却没有任何与 MutH 对应的东西，因为甲基化时钟是细菌的解法，真核细胞里并不涉及 GATC 序列。**错配修复缺陷会导致遗传性非息肉病性结肠癌（HNPCC），这是最常见的遗传性肿瘤易感综合征之一，最常见的致病基因是 hMLH1 与 hMSH2。**失去「把百万分之一的错误碱基改回来」的能力，就足以让结肠癌几乎无法避免。",
      src: "A p.932, p.934",
      openQuestion_en: "How a eukaryotic cell tells the newly synthesised strand from the template is not known.",
      openQuestion_cn: "真核细胞究竟怎么分辨哪一条是新合成的链、哪一条是模板，目前并不知道。"
    },
    {
      link_en: "second system: bases damaged by ordinary chemistry, where only the base comes out",
      link_cn: "第二套系统：被普通化学反应弄坏的碱基 —— 而这里只把碱基取出来",
      en: "A DNA glycosylase recognises one particular kind of damaged base and cuts the bond between that base and its sugar, so the base falls out and the sugar-phosphate backbone stays whole; that first step gives the pathway its name, base-excision repair. What is left is a position in the backbone with no base on it, called an AP site or abasic site. **Each glycosylase is specific for one lesion, which is why a cell carries many: for hypoxanthine from deaminated adenine, for 8-hydroxyguanine from oxidised purines, for 3-methyladenine.** AP sites also appear on their own, from slow spontaneous breaking of that same base-sugar bond, so the rest of this pathway is needed whether a glycosylase ever acted or not.",
      cn: "DNA 糖基化酶识别某一种特定的受损碱基，并把这个碱基与它的糖之间的键切断，于是碱基掉下来、糖-磷酸骨架完好无损；正是这第一步给了这条通路名字：碱基切除修复。剩下的是骨架上一个没有碱基的位置，叫 AP 位点，也叫无碱基位点。**每一种糖基化酶只针对一种损伤，所以细胞里备着很多种：针对腺嘌呤脱氨后生成的次黄嘌呤，针对嘌呤氧化后生成的 8-羟基鸟嘌呤，针对 3-甲基腺嘌呤之类的甲基化碱基。**AP 位点也会自己出现 —— 那个碱基–糖之间的键会缓慢地自发断裂 —— 所以无论糖基化酶有没有动过手，这条通路的后半段都是必需的。",
      src: "A p.934–935"
    },
    {
      link_en: "one of those glycosylases answers a question the rest of the course leaves open",
      link_cn: "其中一种糖基化酶，回答了这门课其余部分一直没答的一个问题",
      en: "Cytosine loses its amino group spontaneously and continuously in every cell, and what it becomes is uracil. Uracil DNA glycosylases remove exactly that uracil from DNA, and cells lacking the enzyme show a high rate of G≡C becoming A═T, because an uncorrected uracil pairs with adenine at the next round of copying. **Thymine is 5-methyluracil, so in a DNA built on uracil a uracil from a damaged cytosine would be identical to one that belongs there; because DNA uses thymine, every uracil in it is an error.** Most bacteria have one uracil glycosylase and humans have at least four, including one that travels with the replication machinery and one for single-stranded DNA, where cytosine loses its amino group 100 times faster than in a duplex.",
      cn: "在每一个细胞里，胞嘧啶都在自发地、持续地脱掉氨基，而它脱氨之后变成的就是尿嘧啶。尿嘧啶 DNA 糖基化酶专门把这种尿嘧啶从 DNA 里取走；缺少这个酶的细胞，G≡C 变成 A═T 的速率很高，因为没被清掉的尿嘧啶在下一轮复制时会与腺嘌呤配对。**胸腺嘧啶就是 5-甲基尿嘧啶，所以在一个以尿嘧啶为碱基的 DNA 里，由受损胞嘧啶产生的尿嘧啶与本该在那里的尿嘧啶化学上完全相同；正因为 DNA 用的是胸腺嘧啶，DNA 里的每一个尿嘧啶按定义就是错误。**大多数细菌只有一种尿嘧啶糖基化酶，人至少有四种，其中一种随复制机器一起移动，另一种专管单链 DNA —— 单链上胞嘧啶脱氨的速度是双链上的 100 倍。",
      src: "A p.935",
      openQuestion_en: "Whether this is why DNA came to contain thymine rather than uracil is a strong and widely repeated argument rather than a demonstrated history, and the hedge should be kept.",
      openQuestion_cn: "这是否就是 DNA 演化成含胸腺嘧啶而非尿嘧啶的原因，是一个有力且广为流传的论证，而不是一段已被证明的历史；这个保留语气应当保留。"
    },
    {
      link_en: "the base is out; why not simply put a correct one back?",
      link_cn: "碱基已经取走了 —— 那为什么不直接放一个正确的回去？",
      en: "The empty sugar left in the backbone is itself a lesion: it is chemically reactive and the strand is liable to break there, so putting a base back would repair the information and leave the molecule damaged. **An AP endonuclease cuts the backbone at the abasic site, a short segment is removed, DNA polymerase I lays down replacement DNA from the intact strand, and ligase seals the nick.** In eukaryotes the replacement is done by DNA polymerases beta, iota and lambda, each of which carries a second activity that clips out the abasic sugar as well, so one enzyme both removes the sugar and fills a gap that is often a single nucleotide long.",
      cn: "骨架上留下的那个空糖本身就是一处损伤：它化学上活泼，链在那里容易断；放一个碱基回去，等于把信息修好了、却把分子留在受损状态。**一个 AP 内切酶在无碱基位点处切开骨架，把包含它的一小段切除，DNA 聚合酶 I 以完好的那条链为模板铺上替换的 DNA，DNA 连接酶把剩下的切口封死。**在真核细胞里，替换这一步由 DNA 聚合酶 β、ι、λ 完成 —— 它们各自还带一个能把那个无碱基糖剪掉的活性，所以同一个酶既清走糖、又把缺口填上，而这个缺口往往只有一个核苷酸长。",
      src: "A p.935, p.940, Fig. 25-23"
    },
    {
      link_en: "third system: damage too bulky to handle base by base, recognised by a different principle",
      link_cn: "第三套系统：体积太大、没法按碱基逐个处理的损伤 —— 而它的识别原理完全不同",
      recall_en: "a glycosylase recognises one damaged base; this system recognises a shape",
      recall_cn: "糖基化酶识别的是某一个受损碱基；这一套识别的是一个形状",
      en: "Nucleotide-excision repair handles lesions bulky enough to distort the double helix, and it recognises the distortion rather than any particular damaged base, which is why one system copes with chemically unrelated damage. Its enzyme is called an excinuclease, and the name records what makes it unusual. **An excinuclease cuts the backbone twice, once on each side of the distortion, and lifts the damaged stretch out whole — a fragment of 12 to 13 nucleotides in E. coli and 27 to 29 in humans.** In E. coli it is the ABC excinuclease: a UvrA dimer scans and finds the lesion, hands it to UvrB, UvrC joins, the two of them make the two cuts, and the UvrD helicase pulls the fragment out; polymerase I then fills the gap, polymerase epsilon in humans, and ligase seals it. Its substrate list shows what recognising a shape buys — cyclobutane pyrimidine dimers and 6-4 photoproducts, both from ultraviolet light, and bulky adducts such as benzo[a]pyrene-guanine, which forms in DNA on exposure to cigarette smoke. One system, sunlight and tobacco alike.",
      cn: "核苷酸切除修复处理那些体积大到足以扭曲双螺旋的损伤；它识别的是这个扭曲，而不是某个具体的受损碱基 —— 这正是同一套系统能应付化学性质毫不相干的各种损伤的原因。它的酶叫切补核酸酶，这个名字记录了它的特别之处。**切补核酸酶把骨架切两刀，扭曲的两侧各一刀，把受损的那一段整块提出来 —— 大肠杆菌放出 12–13 个核苷酸的片段，人是 27–29 个。**在大肠杆菌里它是 ABC 切补核酸酶：一个 UvrA 二聚体扫描并找到损伤，交给 UvrB，UvrC 加入，两者各切一刀，再由 UvrD 解旋酶把片段抽出来；随后大肠杆菌用聚合酶 I、人用聚合酶 ε 把缺口填上，连接酶封死。它的底物清单说明了「按形状识别」有多强 —— 环丁烷嘧啶二聚体和 6-4 光产物（两者都由紫外线造成），以及苯并[a]芘–鸟嘌呤这类大体积加合物，后者是在接触香烟烟雾时在 DNA 里形成的。同一套系统，日光和烟草通吃。",
      src: "A p.935–936, Fig. 25-24"
    },
    {
      link_en: "what that system looks like when it is missing, and why humans suffer more than a bacterium would",
      link_cn: "这套系统缺失时是什么样子 —— 以及人为什么比细菌更遭殃",
      en: "Xeroderma pigmentosum is the disease of broken nucleotide-excision repair. **Nucleotide-excision repair is the only route humans have for repairing pyrimidine dimers, so patients are extremely sensitive to light and readily develop sunlight-induced skin cancers.** Most also have neurological problems, presumably because they cannot repair the lesions generated by the high oxidative metabolism of neurons. Defects in any of at least seven proteins cause it, giving the genetic groups XPA to XPG — two of them in complexes that recognise the damage, five of them parts of the human excinuclease itself. It is this severe because of lost redundancy: most microorganisms keep backup routes for pyrimidine dimers and placental mammals do not. One backup does remain, a polymerase that copies straight past a T-T dimer and puts two adenines opposite it, which is the right answer; losing that polymerase gives a variant form of the same disease.",
      cn: "着色性干皮病就是核苷酸切除修复坏掉时的样子。**核苷酸切除修复是人类修复嘧啶二聚体的唯一途径，所以患者对光极端敏感，很容易发生日光诱发的皮肤癌。**多数患者还伴有神经系统异常，推测是因为他们无法修复神经元高氧化代谢所产生的损伤。至少七个蛋白中任何一个出缺陷都能致病，由此分出 XPA 到 XPG 七个遗传组 —— 其中两个属于识别损伤的复合物，五个是人切补核酸酶本身的组件。它之所以如此严重，原因是冗余的丧失：大多数微生物对嘧啶二聚体都备有后备通路，而有胎盘的哺乳动物没有。有一条后备确实还留着：一个能径直越过 T-T 二聚体、并在它对面放上两个腺嘌呤的聚合酶 —— 而那正是正确答案；失去这个聚合酶会得同一种病的变异型。",
      src: "A p.932, Box 25-1",
      see: [{ id: "L-25-3-1", en: "BRCA1 and BRCA2, the other inherited repair defect, and what Rad51 does once BRCA2 has loaded it", cn: "BRCA1 与 BRCA2，另一种遗传性修复缺陷，以及 BRCA2 装载好 Rad51 之后它去做什么" }]
    },
    {
      link_en: "fourth system: the one that removes nothing at all",
      link_cn: "第四套系统：什么都不切除的那一套",
      en: "Some damage is reversed on the spot with nothing excised. A DNA photolyase splits a cyclobutane pyrimidine dimer back into two separate pyrimidines using the energy of absorbed light, so light undoes what light did; it carries a reduced flavin in all organisms plus a folate in E. coli and yeast, and the folate is an antenna catching blue photons and passing the energy to the flavin, which donates an electron to the dimer. Placental mammals have lost these enzymes, which is where the missing redundancy went. **O6-methylguanine pairs with thymine instead of cytosine, and the protein repairing it moves that methyl onto one of its own cysteines, inactivating itself: one whole protein per damaged base.** Pairing with thymine is what makes that alkylation lesion dangerous, and the protein that repairs it, O6-methylguanine-DNA methyltransferase, is therefore not strictly an enzyme, since an enzyme comes out of a reaction unchanged. A third route is oxidative demethylation: methyl groups landing on adenine and cytosine in single-stranded DNA block base pairing directly, and the AlkB protein takes them off oxidatively, using the same chemistry family as the enzyme that hydroxylates proline in collagen.",
      cn: "有些损伤干脆被就地逆转，什么也不切除。DNA 光解酶利用吸收到的光的能量，把一个环丁烷嘧啶二聚体重新劈回两个独立的嘧啶 —— 光把光造成的事撤销掉；它带有两个吸光基团：所有生物都有的还原型黄素，加上大肠杆菌和酵母里的一个叶酸，叶酸充当天线接住蓝光光子、把能量传给黄素，黄素再给二聚体一个电子。有胎盘的哺乳动物已经丢掉了这类酶 —— 上一步所说的冗余就是这样消失的。**O⁶-甲基鸟嘌呤的危险在于它会与胸腺嘧啶配对而不是与胞嘧啶配对；修复它的那个蛋白把甲基转移到自己的一个半胱氨酸上，从而把自己彻底失活：修好一个碱基，赔进一整个蛋白分子。**这个蛋白叫 O⁶-甲基鸟嘌呤-DNA 甲基转移酶，因此严格说来算不上一个酶，因为酶在反应后应当不变。第三条路是氧化脱甲基：落在单链 DNA 上腺嘌呤和胞嘧啶氨基上的甲基会直接妨碍碱基配对，AlkB 蛋白把它们氧化着摘掉，用的是与「给胶原蛋白里的脯氨酸加羟基」那个酶同属一个化学家族的机制。",
      src: "A p.937–938, Fig. 25-25, Fig. 25-26, Fig. 25-27"
    },
    {
      link_en: "every system so far assumed an intact complementary strand — here is the case where there is none",
      link_cn: "以上每一套系统都假定有一条完好的互补链 —— 现在来看没有互补链的情形",
      recall_en: "the structural fact from the second step: repair works because the other strand still holds the information",
      recall_cn: "第二步那个结构事实：修复之所以成立，是因为另一条链还保存着信息",
      en: "For a break running through both strands, a cross-link joining both strands, or damage in DNA that is single-stranded at the time, the complementary strand is itself damaged or simply absent, and every mechanism above becomes unavailable. It happens most often when a replication fork runs into a lesion that has not been repaired: the polymerase may disengage and start again further along, leaving the lesion behind in an unreplicated single-stranded gap, or the fork may arrive at a lesion in the middle of being repaired, where one strand already carries a temporary break, and turn that single-strand break into a break through both strands. Ionising radiation and oxidative reactions cause the same lesions directly. **Two avenues remain and no others: take the missing information from a separate chromosome carrying the same sequence, or replicate past the lesion without being able to read it.**",
      cn: "对于贯穿两条链的断裂、把两条链连在一起的交联，或者发生在当时正处于单链状态的 DNA 上的损伤，互补链本身也受了损、或者干脆不存在，于是上面每一套机制都用不上了。这种情形最常见的来路是复制叉撞上一处尚未修复的损伤：聚合酶可能脱开、跑到更远处重新起头，把那处损伤留在一段未被复制的单链缺口里；或者复制叉到达的是一处正在被修复、因而某条链上带有临时断口的损伤，叉的到来就把这个单链断口变成了贯穿两条链的断裂。电离辐射和氧化反应也能直接造成同样的损伤。**只剩两条路，没有第三条：到另一条带有同样序列的染色体上去取回丢失的信息，或者在读不出模板的情况下硬着头皮复制过去。**",
      src: "A p.938–939, Fig. 25-28",
      see: [{ id: "L-25-3-1", en: "the first avenue — recombinational repair from a homologous chromosome", cn: "第一条路：从同源染色体上取回信息的重组修复" }]
    },
    {
      link_en: "the second avenue is a system that deliberately raises the mutation rate",
      link_cn: "第二条路是一套刻意提高突变率的系统",
      en: "In bacteria, replicating past an unreadable lesion belongs to a stress response to heavy DNA damage called the SOS response, in which 40 or more proteins are induced; two of them, UmuC and UmuD, exist for this purpose, and UmuD is cut down to a shorter form that joins UmuC and RecA to make DNA polymerase V. **A translesion polymerase has no proofreading exonuclease and an open active site able to hold a damaged template base — both required by the job, and both the source of its 1-in-1,000 error rate.** A tight, shape-selective site would reject the lesion and stall, which is the very thing such a polymerase exists to avoid, and a loose site cannot discriminate correct incoming nucleotides either. This is a desperation strategy: UmuC and UmuD are fully induced only late in the response and only when damage is heavy and every replication fork is blocked, and the mutations kill some cells and damage others. Eukaryotes contain the same risk differently, giving their low-fidelity polymerases specialised repair jobs and only a few nucleotides to write at a time.",
      cn: "在细菌里，「在读不出模板的情况下复制过去」属于一套应对大量 DNA 损伤的应激反应，叫 SOS 反应，其中有 40 多个蛋白被诱导；其中两个 —— UmuC 与 UmuD —— 就是为此而存在的，UmuD 被剪短成一个较短的形式，与 UmuC 和 RecA 组成 DNA 聚合酶 V。**跨损伤聚合酶没有校对外切酶，活性中心更敞开、能容纳一个受损的模板碱基 —— 这两点都是这份工作要求的，也都是它约千分之一错误率的来源。**一个紧致的、按形状挑选的活性中心会直接拒绝这个损伤并停摆，而那恰恰是这类聚合酶存在的目的所要避免的；可是敞开的活性中心也就分辨不出进来的核苷酸对不对了。这是一种孤注一掷的策略：UmuC 与 UmuD 只在反应晚期才被完全诱导，而且只有在损伤严重、所有复制叉都被堵住时才启用，由此产生的突变会杀死一部分细胞、给另一部分留下有害突变。真核细胞用另一种办法控制同样的风险：让那些低保真度的聚合酶各有专门的修复任务，而且每次只写几个核苷酸。",
      src: "A p.939–940",
      see: [{ id: "L-25-3-1", en: "the accurate avenue, taken in full", cn: "另一条精确的路线，完整讲一遍" }]
    }
  ],
  terms: [
    { en: "mutation", cn: "突变",
      def_en: "A permanent change in the nucleotide sequence of DNA, produced when a lesion goes unrepaired and is then copied and passed on. Either one base pair substituted for another, or one or more base pairs inserted or deleted. Silent if it falls in nonessential DNA or barely affects a gene's function; rarely advantageous; most non-silent ones are neutral or harmful.",
      def_cn: "DNA 核苷酸序列上的永久改变，来自一处未被修复、随后被复制并传下去的损伤。形式是一个碱基对被换成另一个，或一个及以上碱基对被插入或删除。落在非必需 DNA 上、或对基因功能影响可忽略的是沉默的；有利的极少；其余非沉默的大多中性或有害。" },
    { en: "Ames test", cn: "Ames 试验",
      def_en: "A cheap bacterial assay for mutagenicity. A Salmonella strain whose histidine-synthesis enzyme has been broken by a mutation is plated without histidine, where almost nothing grows; a mutagen on a paper disc causes back-mutations that restore the pathway, and the colonies are counted. Over 90% of compounds shown carcinogenic in animal trials score as mutagens. Compounds are also tested after incubation with liver extract, since some become mutagenic only after metabolism.",
      def_cn: "一种便宜的细菌致突变性测定。取一株组氨酸合成酶被突变破坏的沙门氏菌，铺在不含组氨酸的培养基上，那里几乎什么都长不出来；滤纸片上的诱变剂引起回复突变把通路修好，数菌落即可。在动物实验中被证明致癌的化合物里超过 90% 在这里也是诱变剂。化合物还要与肝脏提取物一起温育后再测一次，因为有些经代谢改造后才有诱变性。" },
    { en: "mismatch repair", cn: "错配修复",
      def_en: "The system correcting the rare mismatched base pairs left after replication, worth a further 100- to 1,000-fold in fidelity. Its difficulty is not detection but strand choice: at a G-T mismatch both bases are normal, and correcting the template strand would make a copying error permanent. E. coli identifies the new strand by the transient half-methylated state of GATC sites just behind the fork. Defects cause hereditary nonpolyposis colon cancer.",
      def_cn: "纠正复制之后残留的少数错配碱基对的系统，再给保真度带来 100–1,000 倍的提升。难点不在于发现，而在于选链：G-T 错配上两个碱基都正常，改错了模板链就把抄写错误变成永久突变。大肠杆菌靠复制叉刚过去时 GATC 位点短暂的半甲基化状态来认新链。缺陷导致遗传性非息肉病性结肠癌。" },
    { en: "MutS, MutL and MutH", cn: "MutS、MutL 与 MutH",
      def_en: "The three E. coli proteins that connect a mismatch to a distant strand label. MutS scans and clamps onto the mismatch (all kinds except C-C); MutL joins and the pair slides either way looking for a half-methylated GATC; MutH carries a nuclease that stays off until such a site is found and then cuts the unmethylated strand. Helicase, single-strand binding protein and one of four exonucleases then remove everything from the cut through the mismatch — over 1,000 bp for one wrong base.",
      def_cn: "把一个错配与远处的链标签连起来的三个大肠杆菌蛋白。MutS 扫描并箍住错配（除 C-C 外的每一种）；MutL 加入，两者向任一方向滑动寻找半甲基化的 GATC；MutH 带的核酸酶在找到这样的位点之前一直关着，找到就切开未甲基化的那条链。随后解旋酶、单链结合蛋白和四种外切酶之一把从切口到错配之间的一切清除 —— 为一个错碱基毁掉 1,000 bp 以上。" },
    { en: "DNA glycosylase", cn: "DNA 糖基化酶",
      def_en: "An enzyme that recognises one particular kind of damaged base and cuts the bond between base and sugar, so the base leaves and the backbone stays whole. Each is specific for one lesion, hence the many kinds — for uracil from deaminated cytosine, hypoxanthine from deaminated adenine, 8-hydroxyguanine from oxidised purine, alkylated bases such as 3-methyladenine.",
      def_cn: "识别某一种特定受损碱基、并切断碱基与糖之间那个键的酶，于是碱基离开、骨架完好。每一种只针对一种损伤，所以种类很多 —— 针对胞嘧啶脱氨来的尿嘧啶、腺嘌呤脱氨来的次黄嘌呤、嘌呤氧化来的 8-羟基鸟嘌呤，以及 3-甲基腺嘌呤之类的烷基化碱基。" },
    { en: "AP site", cn: "AP 位点",
      def_en: "A position in DNA where the base has gone but the sugar-phosphate backbone remains — left by a glycosylase, or arising from slow spontaneous breaking of the base-sugar bond. It is not fixed by putting a base back, because the empty sugar is itself reactive and the strand breaks there; an AP endonuclease cuts the backbone, the whole nucleotide is replaced, and ligase seals the nick.",
      def_cn: "DNA 上碱基已经没了、糖-磷酸骨架还在的那个位置 —— 由糖基化酶留下，或由碱基–糖键缓慢自发断裂而来。放一个碱基回去解决不了问题，因为空糖本身活泼、链会在那里断；由 AP 内切酶切开骨架，把整个核苷酸换掉，再由连接酶封口。" },
    { en: "base-excision repair", cn: "碱基切除修复",
      def_en: "The pathway for chemically damaged bases, named for its first step: a glycosylase removes only the base, leaving an AP site. An AP endonuclease then cuts the backbone, a short segment is excised, DNA polymerase I fills from the intact strand, and ligase seals. In eukaryotes polymerases beta, iota and lambda do the filling, each also carrying an activity that clips out the abasic sugar.",
      def_cn: "处理化学性受损碱基的通路，名字来自它的第一步：糖基化酶只把碱基取走，留下一个 AP 位点。随后 AP 内切酶切开骨架，切除一小段，DNA 聚合酶 I 照着完好的链填上，连接酶封死。真核里由聚合酶 β、ι、λ 填充，它们各自还带一个能剪掉无碱基糖的活性。" },
    { en: "nucleotide-excision repair", cn: "核苷酸切除修复",
      def_en: "The pathway for bulky lesions that distort the helix. It recognises the distortion rather than a particular base, which is why one system handles chemically unrelated damage — pyrimidine dimers, 6-4 photoproducts, benzo[a]pyrene-guanine from cigarette smoke. An excinuclease cuts the backbone twice, once each side of the distortion, releasing 12–13 nucleotides in E. coli and 27–29 in humans; a helicase pulls the piece out, a polymerase fills, ligase seals.",
      def_cn: "处理扭曲螺旋的大体积损伤的通路。它识别的是扭曲而不是某个具体碱基，所以同一套系统能应付化学上毫不相干的损伤 —— 嘧啶二聚体、6-4 光产物、香烟烟雾带来的苯并[a]芘–鸟嘌呤。切补核酸酶在扭曲两侧各切一刀，大肠杆菌放出 12–13 个核苷酸、人 27–29 个；解旋酶把那段抽出来，聚合酶填补，连接酶封口。" },
    { en: "excinuclease", cn: "切补核酸酶",
      def_en: "The enzyme of nucleotide-excision repair, named for the property that sets it apart from an ordinary endonuclease: two specific cuts, one either side of a lesion, lifting the damaged stretch out as one piece. In E. coli it is the ABC form built from UvrA, UvrB and UvrC; in humans it is a large multisubunit complex whose components are five of the seven proteins whose loss causes xeroderma pigmentosum.",
      def_cn: "核苷酸切除修复的那个酶，名字记录了它与普通内切酶的区别：切两刀，损伤两侧各一刀，把受损的一段整块提出来。大肠杆菌里是由 UvrA、UvrB、UvrC 组成的 ABC 形式；人里是一个大的多亚基复合物，其组件正是着色性干皮病七个致病蛋白中的五个。" },
    { en: "xeroderma pigmentosum", cn: "着色性干皮病",
      def_en: "The human disease of failed nucleotide-excision repair. Since that pathway is the only route humans have for pyrimidine dimers, patients are extremely light-sensitive and readily develop sunlight-induced skin cancers; most also have neurological problems. Seven genetic groups, XPA to XPG. It is this severe because placental mammals have lost the backup routes most microorganisms keep.",
      def_cn: "核苷酸切除修复失效造成的人类疾病。由于那条通路是人修复嘧啶二聚体的唯一途径，患者对光极端敏感，很容易发生日光诱发的皮肤癌；多数还伴有神经系统异常。共分 XPA 到 XPG 七个遗传组。它之所以如此严重，是因为有胎盘的哺乳动物丢掉了大多数微生物还保留着的后备通路。" },
    { en: "DNA photolyase", cn: "DNA 光解酶",
      def_en: "Direct repair that splits a cyclobutane pyrimidine dimer back into two pyrimidines using the energy of absorbed light — light reversing what light caused. It carries a reduced flavin in all organisms plus a folate in E. coli and yeast; the folate is an antenna catching blue photons and passing the energy to the flavin, which donates an electron to the dimer. Placental mammals have lost these enzymes.",
      def_cn: "一种直接修复：利用吸收到的光的能量把环丁烷嘧啶二聚体劈回两个嘧啶 —— 光把光造成的事撤销掉。所有生物里它都带一个还原型黄素，大肠杆菌和酵母里还多一个叶酸；叶酸当天线接住蓝光光子、把能量传给黄素，黄素给二聚体一个电子。有胎盘的哺乳动物已经丢掉了这类酶。" },
    { en: "O6-methylguanine-DNA methyltransferase", cn: "O⁶-甲基鸟嘌呤-DNA 甲基转移酶",
      def_en: "Direct repair of a guanine methylated at O6, an alkylation lesion that is dangerous because it pairs with thymine instead of cytosine. The protein moves the methyl group onto one of its own cysteine residues, which permanently methylates and inactivates it — so it is not strictly an enzyme, since an enzyme comes out of a reaction unchanged. One whole protein molecule per damaged base is the sharpest illustration of how much a cell will spend on its genome.",
      def_cn: "对 O⁶ 位被甲基化的鸟嘌呤的直接修复；这种烷基化损伤的危险在于它会与胸腺嘧啶而不是胞嘧啶配对。这个蛋白把甲基转移到自己的一个半胱氨酸残基上，从而把自己永久甲基化、彻底失活 —— 所以严格说它算不上酶，因为酶在反应后应当不变。每修一个受损碱基赔进一整个蛋白分子，是「细胞肯为基因组花多少钱」最锋利的例证。" },
    { en: "SOS response", cn: "SOS 反应",
      def_en: "A bacterial stress response to heavy DNA damage, inducing 40 or more proteins. Some, such as UvrA and UvrB of the error-free excision repair, are already present and merely raised; UmuC and UmuD exist specifically for error-prone repair. UmuD is cut to a shorter form that joins UmuC and RecA as DNA polymerase V. Both umu genes are fully induced only late, and only when damage is heavy and all replication forks are blocked.",
      def_cn: "细菌应对大量 DNA 损伤的应激反应，诱导 40 多个蛋白。有些本来就在、只是被提高了表达，比如无错切除修复里的 UvrA 和 UvrB；UmuC 与 UmuD 则专为易错修复而存在。UmuD 被剪短成一个较短形式，与 UmuC 和 RecA 组成 DNA 聚合酶 V。两个 umu 基因只在晚期、且只有损伤严重、所有复制叉都被堵住时才被完全诱导。" },
    { en: "translesion synthesis", cn: "跨损伤合成",
      def_en: "Replicating straight past a lesion the normal machinery cannot read, necessarily inaccurate because correct base pairing is often impossible there. The polymerases that do it have no proofreading exonuclease and a more open active site able to hold a damaged template base — both required by the job and both the source of the error rate, which drops fidelity to about one error in 1,000. Eukaryotes contain the risk by giving these polymerases specialised repair jobs and only a few nucleotides to write.",
      def_cn: "越过普通机器读不出的损伤径直复制过去，必然不准确，因为在损伤处往往根本无法正确配对。干这活的聚合酶没有校对外切酶，活性中心也更敞开、能容纳受损的模板碱基 —— 这两点是工作要求的，也是错误率的来源，把保真度压到约千分之一。真核细胞的控制办法是给这些聚合酶专门的修复任务、每次只让它们写几个核苷酸。" }
  ]
};

/* ------------------------------------------------------------- DNA 重组 ---- */
window.BIOLITE_SPINE["key:dna-recombination"] = {
  assumed: ["DNA", "RNA", "base", "base pair", "nucleotide", "protein", "enzyme", "ATP",
            "NAD", "gene", "allele", "cell", "eukaryote", "bacterium", "chromosome",
            "chromatin", "centromere", "spindle", "replication", "replication fork",
            "template", "helicase", "nuclease", "endonuclease", "exonuclease",
            "DNA ligase", "primase", "kinase", "phosphorylation", "nucleophile",
            "phosphodiester bond", "tyrosine", "serine", "glutamate", "aspartate",
            "lysine", "hydroxyl", "antibody", "immunoglobulin", "lymphocyte",
            "bone marrow", "stem cell", "genome", "gamete", "diploid", "haploid",
            "meiosis", "mitosis", "cell cycle", "hemoglobin", "sickle cell",
            "RNA splicing", "antibiotic", "virus", "phage", "plasmid", "maize", "yeast",
            "escherichia coli", "cohesin", "single-strand binding protein", "cancer",
            "mutation", "menopause", "ovulation", "gestation", "down syndrome",
            "haplotype", "single-strand break", "double-strand break", "lesion",
            "polymerase", "trisomy", "fetus", "tumour", "oriC", "ionizing radiation"],
  nodeTitle_en: "DNA recombination",
  nodeTitle_cn: "DNA 重组",
  title_en: "A break through both strands leaves no template inside the molecule, so the cell fetches the only other copy of that sequence in existence — and everything here follows from that one move",
  title_cn: "两条链一起断掉时，分子内部再无模板可用 —— 于是细胞去把世上唯一另一份该序列的拷贝取来；下面的一切都由这一个动作推出",
  steps: [
    {
      en: "Genetic recombination means rearranging genetic information within or between DNA molecules, and it comes in three classes that differ in what each one requires. **Homologous recombination exchanges material between any two DNAs sharing a long stretch of nearly identical sequence, so it has no target sequence at all: its one requirement is a match.** Site-specific recombination is the opposite, in that exchange happens only at one short defined sequence and nowhere else. Transposition moves a short segment of DNA from one chromosomal position to another, needs no similarity of sequence, and picks its destination more or less at random; Barbara McClintock saw these jumping genes in maize in the 1940s, decades before anyone believed her.",
      cn: "遗传重组指的是在 DNA 分子内部或分子之间重排遗传信息；它分三类，区别在于各自要求什么。**同源重组在任意两条共有一长段几乎相同序列的 DNA 之间交换材料，所以它根本没有靶序列：它唯一的要求就是「配得上」。**位点特异性重组正相反，交换只发生在某一段短而确定的序列上，别处一律不发生。转座把一小段 DNA 从染色体上的一个位置搬到另一个位置，不要求序列相似，落点也基本随机；Barbara McClintock 在 1940 年代于玉米中最先看到这些跳跃基因，比任何人愿意相信她的时间早了几十年。",
      src: "A p.940–941"
    },
    {
      link_en: "the first of those three exists because the repair systems ran into a limit",
      link_cn: "这三类中的第一类之所以存在，是因为修复系统撞上了一个极限",
      recall_en: "every repair system needed an intact complementary strand as the record of what was lost",
      recall_cn: "每一套修复系统都需要一条完好的互补链，作为「丢失的信息原本是什么」的记录",
      en: "When a break runs through both strands no such record is left inside the molecule, so the cell finds the only other copy of that sequence in existence and uses it; that is homologous recombination, and when its purpose is repair it is called recombinational DNA repair, which in bacteria is mostly what it is for. Its usual target is one specific catastrophe, a replication fork that collapsed at a damage site. **Every excision pathway leaves a temporary break in one strand while it works, so a replication fork arriving at a site under repair has one arm cut loose and falls apart.** Repair in progress plus replication in progress equals a broken chromosome.",
      cn: "当断裂贯穿两条链时，分子内部再没有这样一份记录了，于是细胞去把世上唯一另一份该序列的拷贝找出来拿来用；这就是同源重组，而当它的目的是修复时，它被叫作重组修复 —— 在细菌里它主要就是干这个的。它通常针对的是一场特定的灾难：在损伤处塌陷掉的复制叉。**每一条切除通路在工作时都会在一条链上留下一个临时断口，所以复制叉一旦到达一处正在被修复的位置，它的一条臂就被切断、整个叉散架。**修复正在进行，加上复制正在进行，等于一条断掉的染色体。",
      src: "A p.941, Fig. 25-29",
      see: [{ id: "L-25-2-1", en: "the repair systems whose transient nicks cause this", cn: "那些临时断口来自哪几套修复系统" }]
    },
    {
      link_en: "the rescue runs in five moves, and each one has a reason",
      link_cn: "抢救分五步，每一步都有它的道理",
      en: "The broken end is first processed by chewing away the strand that ends in 5', which leaves a single-stranded tail ending in 3', so the cell deliberately destroys some of its own DNA in order to make a tool. **A recombinase coats that 3' tail and drives strand invasion, pushing the 3' end into an intact duplex of the same sequence to pair with the strand complementary to it and recover the lost information.** The result is a branched structure where three DNA segments meet, and the branch point then travels along, converting the branch into an X-shaped crossover called a Holliday intermediate, after Robin Holliday, who postulated it before anyone had seen one. A specialised nuclease finally cuts the X apart, which is called resolving it, ligase seals the nicks, and the fork is back.",
      cn: "先把断口加工一下：把以 5′ 结尾的那条链啃掉，留下一条以 3′ 结尾的单链尾巴 —— 细胞是在刻意毁掉自己的一部分 DNA，为的是造出一件工具。**一个重组酶包裹住这条 3′ 尾巴，驱动链侵入：这个 3′ 端挤进一段序列相同的完好双链，与和它互补的那条链配上对，从而把丢失的信息找回来。**由此得到一个三段 DNA 交汇的分支结构；分支点随后沿 DNA 移动，把这个分支变成一个 X 形的交叉结构，叫 Holliday 中间体，名字来自 Robin Holliday，他在任何人看见它之前就把它推想了出来。最后一个专门的核酸酶把这个 X 切开，这一步叫拆解，连接酶封住切口，复制叉就回来了。",
      src: "A p.941–942"
    },
    {
      link_en: "the enzyme that makes the 3' tail has a switch in it worth knowing",
      link_cn: "造出那条 3′ 尾巴的酶，里面藏着一个值得知道的开关",
      en: "RecBCD is a helicase and a nuclease in one protein. It binds linear DNA at a free broken end, so its substrate specificity is itself a damage signal, since an intact circular bacterial chromosome has no free ends; it then travels inward unwinding and destroying as it goes, powered by ATP, with RecB running 3' to 5' on one strand while RecD runs 5' to 3' on the other. **On meeting a short sequence called chi, GCTGGTGG read 5' to 3', RecBCD cuts back its destruction of the strand ending in 3' and steps up the 5' one, manufacturing the 3' tail strand invasion needs.** The E. coli genome carries 1,009 chi sites, each raising recombination frequency 5- to 10-fold within 1,000 bp of itself, which makes this a genome-wide design rather than a curiosity.",
      cn: "RecBCD 把解旋酶和核酸酶做在同一个蛋白里。它结合线性 DNA 上一个游离的断口，所以它的底物专一性本身就是一个损伤信号 —— 完好的环状细菌染色体根本没有游离末端；然后它由 ATP 驱动一路向内推进，边解开边降解，RecB 是一条链上 3′→5′ 的马达，RecD 是另一条链上 5′→3′ 的马达。**遇到一段叫 chi 的短序列（5′ 向 3′ 读作 GCTGGTGG）之后，RecBCD 大幅减少对 3′ 端那条链的降解、同时加大对 5′ 端那条链的降解，造出的正是链侵入所需的那条 3′ 尾巴。**大肠杆菌基因组里有 1,009 个 chi 位点，每一个都把自身 1,000 bp 范围内的重组频率提高 5–10 倍，可见这是一项全基因组尺度的设计，而不是一个奇闻。",
      src: "A p.942, Fig. 25-30"
    },
    {
      link_en: "and the recombinase that uses the tail does not work as a single molecule",
      link_cn: "而使用这条尾巴的那个重组酶，并不以单个分子的形式工作",
      en: "RecA is the bacterial recombinase, and its active form is an ordered helical filament of up to several thousand subunits assembled cooperatively on single-stranded DNA; one RecA molecule does nothing useful, because the homology search and the strand invasion belong to the polymer, which coats the DNA and presents it stretched out and organised. **Single-strand binding protein already sits on exactly the DNA RecA needs and stops the first few subunits nucleating a filament, so RecBCD itself acts as the RecA loader.** The same enzyme that manufactures the 3' tail therefore installs the protein that will use it. RecA is also a component of the error-prone polymerase that copies past unreadable lesions, so one protein sits at the junction of the accurate way out of a double-strand break and the desperate one.",
      cn: "RecA 是细菌的重组酶，它的活性形式是一条在单链 DNA 上协同组装起来的、可达数千个亚基的有序螺旋纤维；单个 RecA 分子毫无用处，因为同源性搜索和链侵入属于这条聚合物 —— 它包裹住 DNA，把它拉伸开、摆整齐地呈递出来。**单链结合蛋白本来就趴在 RecA 所需要的那段 DNA 上，挡住最初几个亚基使纤维无法成核，所以 RecBCD 自己充当了 RecA 的装载器。**于是「造出 3′ 尾巴的那个酶」同时也把「将要用这条尾巴的那个蛋白」安装上去。RecA 也是那个越过读不出的损伤硬抄过去的易错聚合酶的组件之一，所以同一个蛋白同时站在「走出双链断裂的精确路线」和「孤注一掷的那条路线」的岔口上。",
      src: "A p.942–943, Fig. 25-31",
      see: [{ id: "L-25-2-1", en: "the desperate route — translesion synthesis and the SOS response", cn: "孤注一掷的那条路：跨损伤合成与 SOS 反应" }]
    },
    {
      link_en: "cutting the X apart is not the end, because a repaired fork is not yet a working fork",
      link_cn: "把 X 切开还不算完，因为「修好的叉」还不等于「能跑的叉」",
      en: "The bacterial RuvC protein resolves the Holliday intermediate, cutting it on opposing sides of the junction so that two continuous arms remain in each product, and ligase seals the nicks. The machinery that assembles a replication fork is built to act at oriC, the single origin, and this fork is in the middle of a chromosome, so bacteria keep a separate route called origin-independent restart: combinations of PriA, PriB, PriC and DnaT work with DnaC to load the DnaB helicase onto the rebuilt fork, primase lays an RNA primer, and polymerase III reassembles on the helicase. **Keeping a whole dedicated protein system for restarting a fork mid-chromosome says that fork collapse is common enough to build for, rather than a rare accident.**",
      cn: "细菌的 RuvC 蛋白负责拆解 Holliday 中间体：它在交叉点的对侧各切一刀，使每个产物里都保留两条连续的臂，再由连接酶封住切口。装配复制叉的那套机器是为在 oriC 这唯一一个起点上工作而造的，而现在这个叉在染色体中间，所以细菌另有一条路，叫不依赖起点的复制重启：PriA、PriB、PriC、DnaT 这四个蛋白的不同组合与 DnaC 一起把 DnaB 解旋酶装到重建好的叉上，引物酶铺一段 RNA 引物，聚合酶 III 在解旋酶上重新组装。**为「在染色体中间重启一个叉」专门养着一整套蛋白系统，说明复制叉塌陷常见到值得为它造机器，而不是偶尔一见的事故。**",
      src: "A p.943"
    },
    {
      link_en: "in a eukaryote the same chemistry has a second job, and this one is not optional",
      link_cn: "在真核细胞里，同样的化学还有第二项工作 —— 而这一项没得商量",
      en: "Meiosis is the two divisions that turn a diploid germ-line cell into haploid gametes: DNA is replicated once, then the cell divides twice with no replication in between, the first division separating the two homologous chromosomes and the second separating the two sister chromatids within each. Chromosomes that are to be pulled apart must first be physically joined, because spindle fibres pull on the centromeres and the resulting tension is the signal that a pair is correctly aligned; where both centromeres of a pair are attached to the same pole there is no tension, and a kinase senses its absence and strips the attachments so the cell can try again. Sister chromatids get their links from cohesins laid down at replication. **Homologous chromosomes carry no cohesins, so the links for the first division must be manufactured, and recombination makes them — visible as crossing over, at points called chiasmata.** The genetic diversity generated on the way is real, and it is secondary: the primary product is a handle the spindle can pull against.",
      cn: "减数分裂是把二倍体生殖系细胞变成单倍体配子的两次分裂：DNA 只复制一次，然后细胞连分两次、中间不再复制；第一次分裂分开两条同源染色体，第二次分开每条里面的两条姐妹染色单体。将要被拉开的染色体必须先在物理上被连在一起，因为纺锤丝拉的是着丝粒，由此产生的张力才是「这一对已经正确对齐」的信号；如果一对染色体的两个着丝粒连到了同一极就没有张力，一个激酶感知到张力的缺失，把连接拆掉让细胞重来。姐妹染色单体的连接来自复制时铺下的黏连蛋白。**同源染色体身上没有黏连蛋白，所以第一次分裂所需的连接必须被制造出来，而制造它们的正是重组 —— 这种交换在光学显微镜下看得见，叫交叉互换，发生的位置叫交叉点。**沿途产生的遗传多样性是真实的，但它是次要产物：首要产物是一个能让纺锤体拉住的把手。",
      src: "A p.944–946"
    },
    {
      link_en: "the eukaryotic mechanism is the bacterial one with a different cast, and one new name is why this matters in a clinic",
      link_cn: "真核的机制就是细菌那一套换了演员 —— 而新演员里有一个名字，正是它在临床上重要的原因",
      recall_en: "resection to a 3' tail, strand invasion, a Holliday intermediate, resolution — the same four moves as the bacterial fork rescue",
      recall_cn: "切出 3′ 尾巴、链侵入、Holliday 中间体、拆解 —— 与细菌抢救复制叉完全是同样的四个动作",
      en: "Meiotic recombination has four features: the homologous chromosomes align; a break through both strands is made in one of them and an exonuclease chews the ends back to leave 3' single-stranded tails; those 3' ends invade the intact duplex of the homolog, and branch migration or replication follows, giving a pair of Holliday intermediates; cutting the two crossovers yields complete recombinant products. Once an invading 3' end has paired with the homolog, a stretch of hybrid DNA exists made of strands from two different parents, and the pair of intermediates can be cut two ways — one leaves the flanking DNA unrecombined, the other recombines it, and both happen in living cells. **Rad51 and Dmc1 are the eukaryotic counterparts of RecA, and BRCA2 loads Rad51 onto DNA; inherited BRCA2 defects account for about 10% of breast and ovarian cancers.** A woman carrying such a mutation cannot efficiently load the recombinase that repairs breaks through both strands, so the accurate route is impaired and damage accumulates.",
      cn: "减数分裂中的重组有四个要点：两条同源染色体先对齐；在其中一条上造成一个贯穿两条链的断裂，外切酶把断端啃回去、留下 3′ 单链尾巴；这些 3′ 端侵入同源染色体上完好的双链，随后是分支迁移或复制，形成一对 Holliday 中间体；把这两个交叉切开，就得到完整的重组产物。一旦侵入的 3′ 端与同源染色体配上对，就存在一段由两个不同来源的链组成的杂合 DNA；而这一对中间体有两种切法 —— 一种使两侧的 DNA 不发生重组，另一种使它们发生重组，活细胞里两种都会出现。**Rad51 与 Dmc1 是 RecA 的真核对应物，而把 Rad51 装载到 DNA 上的是 BRCA2；BRCA2 的遗传性缺陷占乳腺癌与卵巢癌的约 10%。**携带这种突变的女性无法高效地装载那个修复双链断裂的重组酶，于是精确的那条路受损，损伤不断累积。",
      src: "A p.947, Fig. 25-34"
    },
    {
      link_en: "and this exchange is what makes a genetic map possible, with one honest caveat",
      link_cn: "而这种交换正是遗传图谱得以成立的原因 —— 但有一个必须说清的保留",
      en: "Two homologous chromosomes are not identical: the order of genes is the same, but some genes differ slightly in sequence, that is, carry different alleles — one chromosome may carry the allele for hemoglobin A and the other the allele for hemoglobin S, and the difference between them may be a single base pair among millions. Recombination shuffles which alleles end up together on one chromosome, and that is the whole of its contribution to diversity here. **If crossing over is roughly equally probable anywhere along two homologous chromosomes, the recombination frequency between two points is proportional to their distance apart, so it is a ruler.** Two genes far apart are separated by a crossover often, two close together rarely. Crossing over is not entirely random, though, and hot spots have been found on many eukaryotic chromosomes, so a map distance obtained this way is not a physical distance in base pairs and will be wrong wherever recombination is locally unusual.",
      cn: "两条同源染色体并不完全相同：基因的排列顺序一样，但某些基因的序列可能略有差别，也就是携带不同的等位基因 —— 一条染色体上可能带血红蛋白 A 的等位基因，另一条带血红蛋白 S 的，而两者之间的差别可能只是数百万个碱基对中的一个。重组所做的就是重新洗牌哪些等位基因最终落在同一条染色体上，在这个层面上它对多样性的贡献仅此而已。**如果交叉互换在两条同源染色体上任何位置发生的概率大致相等，那么两点之间发生重组的频率就大致正比于它们之间的距离，于是重组频率就是一把尺子。**相距远的两个基因经常被一次交叉分开，靠得近的两个则很少被分开。不过交叉互换并非完全随机，许多真核染色体上已发现热点，所以这样得到的图距并不是以碱基对计的物理距离，凡是局部重组行为异常的地方它都会出错。",
      src: "A p.947, Fig. 25-35"
    },
    {
      link_en: "when those manufactured links fail, the consequence in humans is measurable and large",
      link_cn: "当那些被制造出来的连接失效时，在人身上的后果既可测量，又非常大",
      recall_en: "the links exist so that spindle tension can verify alignment",
      recall_cn: "那些连接的存在，是为了让纺锤体的张力能验证对齐是否正确",
      en: "If alignment and recombination in the first meiotic division are not correct and complete, segregation goes wrong and a gamete ends up with no copy or two copies of a chromosome; a cell with the wrong number of chromosomes is aneuploid. The rates climb with complexity: about 1 in 10,000 meiotic events in yeast, 1 in 100 in mice, and 10% to 30% of fertilised human eggs, which is almost certainly an underestimate. **Aneuploidy is the leading cause of pregnancy loss and the leading genetic cause of developmental and mental disability; the few trisomic fetuses born carry chromosome 13, 18 or 21 in triplicate.** The maternal age effect has a mechanism rather than only a statistic: human egg production begins before birth, meiosis starts in the fetus at 12 to 13 weeks, the chromosomes line up and generate their crossovers, and the cells then stop in an arrested phase called the dictyate stage with those crossovers already in place, waiting anywhere from 13 to 50 years until ovulation lets one finish. The crossovers have to survive that whole wait, and the rate of trisomy climbs as they age.",
      cn: "如果减数第一次分裂中的对齐与重组不正确、不完整，分离就会出错，配子最终会一份该染色体也没有、或者拿到两份；染色体数目不对的细胞叫非整倍体。这个比率随生物复杂度上升：酵母约每 10,000 次减数分裂 1 次，小鼠 1/100，而人受精卵中占 10%–30%，且这几乎肯定还是低估。**非整倍体是妊娠丢失的首要原因，也是发育与智力障碍的首要遗传原因；少数能出生的三体胎儿一般是 13、18 或 21 号染色体三份。**母亲年龄效应有机制可讲，不只是一个统计数字：人的卵子发生始于出生之前，减数分裂在胎儿 12–13 周时开始，染色体排好队、生成交叉，然后细胞就停住了，进入一个叫核网期的停滞阶段，交叉已经就位地待在那里，一等就是 13 到 50 年，直到排卵才让其中一个把分裂做完。这些交叉必须挺过整段等待，而随着它们老化，三体的发生率就往上爬。",
      src: "A p.946, Box 25-2"
    },
    {
      link_en: "the same repair defect that causes those cancers can be turned into a way of killing them",
      link_cn: "而造成那些癌症的同一个修复缺陷，可以反过来变成杀死它们的办法",
      en: "A human chromosome is millions of base pairs of elaborate chromatin, so a repair protein has to be told where a break is. PARP1 is a first responder that scans for damage, especially breaks in one strand, and on finding one builds an elaborate branched polymer out of NAD attached to itself and to nearby proteins; that polymer is a flag marking where the damage is, and repair proteins are recruited to it. Lose PARP1 and single-strand breaks pile up, and at the next replication they become breaks through both strands. **A breast or ovarian tumour with a BRCA1 or BRCA2 defect has already lost accurate repair of double-strand breaks, so taking PARP1 away as well kills it while normal cells with working BRCA survive.** Olaparib, the first PARP1 inhibitor, approved in 2014, gave a fourfold increase in progression-free survival as maintenance treatment for women with BRCA-deficient tumours. Attacking the backup pathway in a cell whose primary pathway is already gone is the general principle.",
      cn: "一条人类染色体是数百万碱基对的复杂染色质，所以修复蛋白必须被告知断口在哪。PARP1 是一个第一响应者，在 DNA 上扫描损伤、尤其是单条链上的断口，一旦找到就用 NAD 造出一大团有分支的聚合物，接在自己身上、也连到附近的蛋白上；这团聚合物是一面旗，标出损伤的位置，修复蛋白被招募到这里来。失去 PARP1，单链断口就会堆积，到下一次复制时变成贯穿两条链的断裂。**带 BRCA1 或 BRCA2 缺陷的乳腺或卵巢肿瘤已经失去了对双链断裂的精确修复，所以再把 PARP1 也拿掉它就死了，而 BRCA 还好好的正常细胞活得下来。**奥拉帕利是第一个 PARP1 抑制剂，2014 年获批，对 BRCA 缺陷肿瘤的女性作为维持治疗使无进展生存期提高了四倍。在一个主通路已经没了的细胞里去打它的后备通路，这就是那条通则。",
      src: "A p.948, Box 25-3"
    },
    {
      link_en: "and when there is no second copy to fetch at all, the cell falls back on something cruder",
      link_cn: "而当根本没有第二份拷贝可取时，细胞退而求其次，用一种粗糙得多的办法",
      en: "Outside replication there is no sister chromatid, so recombinational repair is simply not available, and a broken chromosome would kill the cell. **The fallback is nonhomologous end joining: the two broken ends are trimmed and ligated straight back together, which does not conserve the original sequence and is frankly a mutagenic process.** Even so it handles most repair of double-strand breaks outside meiosis in mammals, where a diploid cell has an undamaged homolog to balance small losses and a non-germ-line mutation is not inherited; in yeast, with a small genome and little room for lost information, recombination does most of the work instead. A Ku70-Ku80 pair binds the broken ends first and acts as the scaffold everything else assembles on, recruiting the kinase DNA-PKcs and the nuclease Artemis; the two ends are held together, DNA-PKcs phosphorylates Artemis, and phosphorylated Artemis trims back single-stranded overhangs and hairpins. Strands from the two different ends then anneal wherever short complementary patches happen to be found, which is exactly why sequence is lost; polymerase mu or lambda fills the small gaps and a complex of XRCC4, XLF and DNA ligase IV seals the nicks. Ends are not joined at random, because chromatin holds the two ends of one break near each other.",
      cn: "在不复制的时期没有姐妹染色单体，重组修复根本用不上，而一条断掉的染色体会要了细胞的命。**退路是非同源末端连接：把两个断端修剪一下直接连回去；它不保留原来的序列，坦白说就是一个致突变的过程。**即便如此，在哺乳动物中减数分裂之外的双链断裂修复大多由它承担 —— 二倍体细胞有一条未受损的同源染色体来平衡小的丢失，而非生殖系的突变也不会遗传下去；相比之下酵母基因组小、丢不起信息，那里大部分工作仍由重组完成。Ku70–Ku80 二聚体最先结合断端，充当其余一切在其上组装的支架，招募激酶 DNA-PKcs 和核酸酶 Artemis；两个断端被并拢固定，DNA-PKcs 使 Artemis 磷酸化，磷酸化后的 Artemis 把单链突出端和发夹修剪掉。接着来自两个不同断端的链会在任何恰好互补的短片段处退火配对，这正是序列丢失的原因；聚合酶 μ 或 λ 把小缺口填上，由 XRCC4、XLF 与 DNA 连接酶 IV 组成的复合体把切口封死。断端并不是随机乱接的，因为染色质把同一个断口的两端保持在彼此附近。",
      src: "A p.948–950"
    },
    {
      link_en: "second class: recombination that happens at one sequence only, and its chemistry answers an energy question",
      link_cn: "第二类：只在某一段序列上发生的重组 —— 而它的化学回答了一个能量问题",
      en: "A site-specific recombination system needs only two things: a recombinase, and a defined recombination site of 20 to 200 bp where it acts. In the tyrosine class the recombinase binds each of two sites, cuts one DNA strand at each, and holds the cut end on itself as a covalent phosphotyrosine bond. **That linkage preserves the energy of the broken phosphodiester bond, so no ATP is needed downstream: the energy is parked on the enzyme and spent again when the strands are rejoined to new partners.** The exchange goes through a Holliday intermediate and then repeats at a second point in each site; enzymes of the serine class cut both strands of each site at once and rejoin them with no Holliday intermediate. In both classes the exchange is reciprocal and precise, and the recombination sites are regenerated intact when the reaction finishes, so nothing is gained, lost or degraded. A recombinase is a site-specific endonuclease and a ligase in one package.",
      cn: "一套位点特异性重组系统只需要两样东西：一个重组酶，以及它作用其上的一段确定的重组位点，长 20–200 bp。在酪氨酸类里，重组酶分别结合两个位点，在每个位点上切开一条 DNA 链，并把切断的那一端以共价的磷酸酪氨酸键挂在自己身上。**这个连接把被切断的那个磷酸二酯键的能量保存了下来，所以后续步骤不需要 ATP —— 能量寄存在酶身上，等到把链接到新的伙伴上时再花出去。**交换途经一个 Holliday 中间体，然后在每个位点的第二个位置再来一遍；丝氨酸类的酶则同时切开每个位点的两条链，不经过 Holliday 中间体就重新接好。两类都一样：交换是互易而精确的，反应结束时重组位点被完好地重新生成，没有任何东西被增加、丢失或降解。一个重组酶就是「位点特异性内切酶加连接酶」打包在一起。",
      src: "A p.951–952, Fig. 25-38"
    },
    {
      link_en: "and what such a system does to a chromosome follows from geometry alone",
      link_cn: "而这样一套系统对染色体做了什么，仅凭几何就能推出来",
      en: "Recombination sites are not palindromes, so each one has an orientation, and two sites line up in the same orientation during the reaction. **Two sites on one DNA pointing opposite ways invert the DNA between them; two pointing the same way delete it; sites on different molecules exchange, giving an insertion if one molecule is circular.** That last case is exactly how a phage, a virus that infects bacteria, integrates itself into a bacterial chromosome. One use closes a loop with the start of this chain: recombinational repair of a circular bacterial chromosome sometimes resolves a Holliday intermediate one way and finishes replication as one contiguous dimeric chromosome instead of two monomers, and covalently linked chromosomes cannot be handed to two daughter cells, so the dividing cell gets stuck. The XerCD system of E. coli converts dimers back to monomers, and the reaction it performs is precisely the site-specific deletion just described.",
      cn: "重组位点不是回文序列，所以每一个都有方向，反应时两个位点以相同的方向对齐。**同一条 DNA 上方向相反的两个位点会把它们之间的 DNA 倒转；方向相同的两个则把中间那段删除；位于不同分子上的位点之间发生交换，若其中一个分子是环状的，结果就是插入。**最后这种情形正是噬菌体（一类感染细菌的病毒）把自己整合进细菌染色体的方式。有一个用途与本节开头合上了环：环状细菌染色体的重组修复有时会把 Holliday 中间体按某一种方式拆解、再把复制做完，得到的不是两条单体染色体而是一条首尾相连的二聚体染色体，而共价连在一起的染色体没法分给两个子细胞，分裂中的细胞就此卡住。大肠杆菌的 XerCD 系统把二聚体变回单体，它执行的反应恰恰就是刚才说的那种位点特异性删除。",
      src: "A p.952, Fig. 25-39"
    },
    {
      link_en: "third class: segments that move on their own, and are described as molecular parasites",
      link_cn: "第三类：会自己搬家的片段 —— 它们被称作分子寄生物",
      en: "A transposon is a segment of DNA that jumps from a donor site to a target site with no requirement for similar sequence and a more or less random destination, perhaps the simplest of molecular parasites, adapted to replicate passively inside a host's chromosomes. Landing inside an essential gene would be lethal, so transposition is tightly regulated and usually rare. Insertion sequences carry only what transposition needs, the terminal sequences plus the gene for the transposase, while complex transposons carry extra genes as well, antibiotic resistance among them, and the spread of resistance through disease-causing bacteria is largely transposon-mediated. **Inserting a transposon duplicates 5 to 10 bp of the target, leaving a short direct repeat each side, so such repeats flanking a sequence are evidence that it arrived by transposition.** That duplication is a consequence of the staggered cut used to insert it. Direct transposition cuts the element out and relocates it, leaving a double-strand break in the donor for the repair systems to handle; replicative transposition copies the element and leaves the original behind, passing through a joined intermediate called a cointegrate that site-specific recombination later separates. The chemistry underneath both is the same: the liberated 3'-hydroxyls at the transposon's ends act as nucleophiles and attack phosphodiester bonds in the target DNA. Nearly half the human genome is made of transposable elements.",
      cn: "转座子是一段 DNA，它从供体位点跳到靶位点，不要求序列相似，落点也基本随机 —— 大概是最简单的分子寄生物，其生存之道就是被动地在宿主染色体内复制。落进一个必需基因里会致死，所以转座被严格调控，通常很少发生。插入序列只携带转座所必需的东西：两端的序列加上转座酶的基因；复杂转座子则另外携带别的基因，其中就有抗生素抗性，而抗性在致病菌群中的扩散很大程度上由转座介导。**转座子插入时会把靶序列上 5–10 bp 复制一份，于是插入片段两侧各留下一段短的正向重复；所以在一段序列两侧发现这样的重复，就是它由转座而来的证据。**这份重复是插入时那一刀错位切割的必然结果。直接转座把元件切下来搬走，在供体处留下一个双链断裂交给上面那些修复系统去善后；复制型转座则把元件复制一份、把原件留在原处，中途经过一个叫共整合体的连体中间产物，随后由位点特异性重组把它分开。两条路底下的化学是同一套：转座子两端游离出来的 3′-羟基充当亲核试剂，去进攻靶 DNA 上的磷酸二酯键。人类基因组中将近一半由各种可转座元件构成。",
      src: "A p.951–953, Fig. 25-40, Fig. 25-41"
    },
    {
      link_en: "and the last case is a programmed rearrangement solving an arithmetic problem that looks impossible",
      link_cn: "最后一个案例，是一次被编排好的重排 —— 它解决了一道看上去无解的算术题",
      recall_en: "the 3'-hydroxyl attacking a phosphodiester bond, from the transposition step just above",
      recall_cn: "上一步转座里那个「3′-羟基去进攻磷酸二酯键」的动作",
      en: "A human makes millions of different antibodies from a genome of about 20,000 genes. In an undifferentiated cell the coding information for the IgG kappa light chain sits in three kinds of separate segment: 40 different V segments encoding the first 95 residues of the variable region, 5 different J segments encoding its remaining 12, and 1 C segment for the constant region. As a bone-marrow stem cell becomes a mature B lymphocyte, a recombination system joins one V to one J and deletes what lay between, giving 40 times 5, which is 200 combinations; the joining is deliberately imprecise, and the extra variation at the junction raises that by a factor of at least 2.5, to about 500. Heavy chains give over 5,000, and any heavy chain can pair with any light chain, so at least 2.5 million different IgGs, while each mature B lymphocyte makes only one antibody, so the range belongs to the population of cells. **RAG1 and RAG2 cut at recombination signal sequences beside each V and J segment using the chemistry of transposition, and nonhomologous end joining puts the two ends together.** The excised DNA even has the sequence structure of a transposon, and in a test tube RAG1 and RAG2 can insert it into other DNA molecules.",
      cn: "一个人用大约 20,000 个基因的基因组，造出数以百万计的不同抗体。在未分化的细胞里，IgG 的 κ 轻链的编码信息分散在三种独立的片段中：40 个不同的 V 片段，编码可变区的前 95 个残基；5 个不同的 J 片段，编码可变区剩下的 12 个残基；以及 1 个编码恒定区的 C 片段。当骨髓干细胞分化为成熟 B 淋巴细胞时，一套重组系统把一个 V 与一个 J 接到一起并把中间的 DNA 删除，得到 40 乘 5 即 200 种组合；这个连接是刻意不精确的，接口处额外产生的变异又把这个数至少乘上 2.5 倍，达到约 500 种。重链能给出 5,000 种以上，而任何一条重链都能与任何一条轻链配对，于是至少 250 万种不同的 IgG；而每个成熟 B 淋巴细胞只造一种抗体，所以这个巨大的范围属于整个细胞群体。**RAG1 与 RAG2 在每个 V 和 J 片段旁边的重组信号序列处切开，用的是与转座相同的化学，两端则由非同源末端连接接起来。**被切出去的那段 DNA 其序列结构甚至就是转座子的样子；在试管里，RAG1 和 RAG2 还能把它插进别的 DNA 分子中去。",
      src: "A p.954–955, Fig. 25-43",
      openQuestion_en: "Whether the vertebrate immune system evolved in part from ancient transposons is a question rather than a finding, and it is marked as speculation: the properties of the rearrangement system suggest it, but it cannot be known for certain.",
      openQuestion_cn: "脊椎动物免疫系统是否部分地由古老的转座子演化而来，是一个问题而不是一项结论，并且被明确标为推测：重排系统的性质提示了这一点，但无法确知。"
    }
  ],
  terms: [
    { en: "homologous recombination", cn: "同源重组",
      def_en: "Exchange between any two DNAs, or two parts of one DNA, sharing a long stretch of nearly identical sequence. The actual bases are irrelevant so long as the two match — there is no target motif, only a requirement for similarity. Largely a way of repairing breaks that run through both strands; in eukaryotes it additionally manufactures the physical links meiosis needs.",
      def_cn: "在任意两条 DNA、或同一条 DNA 的两段之间进行的交换，条件是它们共有一长段几乎相同的序列。具体是哪些碱基完全无所谓，只要两边对得上 —— 它没有靶序列，只要求相似。它主要是一种修复贯穿两条链的断裂的办法；在真核细胞里它还额外制造减数分裂所需要的那些物理连接。" },
    { en: "recombinational DNA repair", cn: "重组修复",
      def_en: "The name homologous recombination goes by when its purpose is repair, which in bacteria is its main role. Usually aimed at rebuilding a replication fork that collapsed: a fork arriving at a lesion under repair, where one template strand carries a temporary break, loses an arm, and exchange with the intact duplex on the other arm restores it.",
      def_cn: "同源重组以修复为目的时的名字；在细菌里这是它的主要角色。通常针对的是重建塌陷的复制叉：叉到达一处正在被修复、某条模板链上带着临时断口的损伤时会失去一条臂，与另一条臂上完好的双链交换即可把它复原。" },
    { en: "strand invasion", cn: "链侵入",
      def_en: "The central step of homologous recombination: a single-stranded 3' tail, made by chewing away the strand that ends in 5' at a break, is coated by a recombinase and pushes into an intact duplex carrying the same sequence, pairing with the strand complementary to it. This is the step that recovers the lost information, and it works only because the invaded duplex is homologous.",
      def_cn: "同源重组的核心一步：在断口处把以 5′ 结尾的链啃掉而得到的单链 3′ 尾巴，被重组酶包裹后挤进一段带有同样序列的完好双链，与和它互补的那条链配上对。这一步才是把丢失的信息找回来的那一步，而它之所以可行，正是因为被侵入的双链是同源的。" },
    { en: "Holliday intermediate", cn: "Holliday 中间体",
      def_en: "The X-shaped crossover formed when the branch point made by strand invasion migrates along the DNA; named for Robin Holliday, who postulated it before it had been seen. It is resolved by nucleases such as bacterial RuvC, which cuts on opposing sides of the junction so each product keeps two continuous arms; ligase then seals the nicks. Which of two ways it is cut decides whether the flanking DNA ends up recombined.",
      def_cn: "链侵入造成的分支点沿 DNA 迁移后形成的 X 形交叉结构；名字来自 Robin Holliday，他在它被看到之前就把它推想了出来。它由 RuvC 之类的核酸酶拆解 —— 在交叉点的对侧各切一刀，使每个产物保留两条连续的臂，再由连接酶封口。两种切法中用了哪一种，决定两侧的 DNA 最终是否重组。" },
    { en: "RecBCD and chi", cn: "RecBCD 与 chi 序列",
      def_en: "A helicase and nuclease in one protein. It binds linear DNA at a free broken end — itself a damage signal, since an intact circular chromosome has none — and travels inward unwinding and degrading, RecB as a 3' to 5' motor on one strand and RecD as a 5' to 3' motor on the other. On meeting the chi sequence, GCTGGTGG, it cuts back its destruction of the 3'-ending strand and steps up the 5' one, manufacturing the 3' tail strand invasion needs. E. coli carries 1,009 chi sites, each raising local recombination 5- to 10-fold.",
      def_cn: "把解旋酶和核酸酶做在一个蛋白里。它结合线性 DNA 上一个游离的断口 —— 这本身就是损伤信号，因为完好的环状染色体没有游离末端 —— 然后一路向内解开并降解，RecB 是一条链上 3′→5′ 的马达，RecD 是另一条链上 5′→3′ 的马达。遇到 chi 序列 GCTGGTGG 后，它减少对 3′ 端那条链的降解、加大对 5′ 端那条的降解，造出链侵入所需的 3′ 尾巴。大肠杆菌有 1,009 个 chi 位点，每一个都把局部重组提高 5–10 倍。" },
    { en: "RecA", cn: "RecA",
      def_en: "The bacterial recombinase, unusual in that its active form is an ordered helical filament of up to several thousand subunits assembled cooperatively on single-stranded DNA — one molecule does nothing, the homology search and strand invasion belong to the polymer. Single-strand binding protein blocks nucleation of the filament, and RecBCD itself acts as the loader that overcomes this. The same protein is a component of the error-prone translesion polymerase.",
      def_cn: "细菌的重组酶，特别之处在于它的活性形式是一条在单链 DNA 上协同组装的、可达数千个亚基的有序螺旋纤维 —— 单个分子什么也做不了，同源性搜索与链侵入属于这条聚合物。单链结合蛋白挡住纤维成核，而克服这一点的装载器正是 RecBCD 自己。同一个蛋白也是那个易错的跨损伤聚合酶的组件。" },
    { en: "origin-independent restart", cn: "不依赖起点的复制重启",
      def_en: "How a replication fork is rebuilt after recombinational repair, since the normal fork-assembly machinery is built to act at the single origin and not in mid-chromosome. Combinations of PriA, PriB, PriC and DnaT work with DnaC to load the DnaB helicase onto the reconstructed fork, primase lays an RNA primer, and polymerase III reassembles. Keeping a whole dedicated system for this shows how common fork collapse is.",
      def_cn: "重组修复之后复制叉如何被重建 —— 因为常规的叉装配机器是为在唯一的起点上工作而造的，不是为染色体中间。PriA、PriB、PriC、DnaT 的不同组合与 DnaC 一起把 DnaB 解旋酶装到重建好的叉上，引物酶铺一段 RNA 引物，聚合酶 III 重新组装。为此专门养着一整套系统，说明复制叉塌陷有多常见。" },
    { en: "chiasma", cn: "交叉点",
      def_en: "The point where recombination has physically joined two homologous chromosomes during the first meiotic division, visible down a light microscope as crossing over. The links exist because chromosomes to be pulled apart must first be joined: spindle fibres pull, and the resulting tension is the signal that the pair is aligned correctly. Sister chromatids get their links from cohesins; homologs have none, so recombination has to make them.",
      def_cn: "减数第一次分裂中重组把两条同源染色体在物理上连起来的那个点，在光学显微镜下表现为交叉互换。这些连接之所以存在，是因为要被拉开的染色体必须先被连在一起：纺锤丝一拉，产生的张力就是「这一对已经正确对齐」的信号。姐妹染色单体的连接来自黏连蛋白；同源染色体没有，只能由重组去造。" },
    { en: "Rad51, Dmc1 and BRCA2", cn: "Rad51、Dmc1 与 BRCA2",
      def_en: "The eukaryotic counterparts of RecA. Rad51 and Dmc1 carry out strand invasion, and BRCA2 loads Rad51 onto DNA, doing the job the bacterial RecF, RecO and RecR set does. Inherited BRCA2 defects account for about 10% of breast and ovarian cancers: without efficient loading of the recombinase, the accurate route out of a break through both strands is impaired and damage accumulates.",
      def_cn: "RecA 的真核对应物。Rad51 与 Dmc1 执行链侵入，BRCA2 把 Rad51 装载到 DNA 上，干的是细菌 RecF、RecO、RecR 那一套的活。BRCA2 的遗传性缺陷占乳腺癌与卵巢癌的约 10%：重组酶装载不上去，走出双链断裂的那条精确路线就受损，损伤不断累积。" },
    { en: "aneuploidy and the dictyate stage", cn: "非整倍体与核网期",
      def_en: "Having the wrong number of chromosomes, the consequence of incorrect or incomplete alignment and recombination in the first meiotic division. Rates rise with complexity — 1 in 10,000 meiotic events in yeast, 1 in 100 in mice, 10% to 30% of fertilised human eggs. It is the leading cause of pregnancy loss and the leading genetic cause of developmental disability. Human female meiosis starts in the fetus, makes its crossovers, then arrests in the dictyate stage for 13 to 50 years, which is why trisomy rates climb with age.",
      def_cn: "染色体数目不对，来自减数第一次分裂中不正确或不完整的对齐与重组。比率随复杂度上升 —— 酵母每 10,000 次减数分裂 1 次，小鼠 1/100，人受精卵 10%–30%。它是妊娠丢失的首要原因，也是发育障碍的首要遗传原因。人的女性减数分裂在胎儿期开始、先生成交叉，随后在核网期停滞 13 到 50 年，这正是三体发生率随年龄上升的原因。" },
    { en: "PARP1 and olaparib", cn: "PARP1 与奥拉帕利",
      def_en: "PARP1 is a first responder that scans DNA for damage, especially breaks in one strand, and on finding one builds a branched polymer from NAD on itself and on nearby proteins — a flag that recruits repair proteins to the site. Without it, single-strand breaks accumulate and become double-strand breaks at the next replication. In a tumour that has already lost BRCA-dependent repair of double-strand breaks, removing PARP1 as well is lethal to the tumour and not to normal cells. Olaparib, approved 2014, gave a fourfold increase in progression-free survival.",
      def_cn: "PARP1 是一个第一响应者，在 DNA 上扫描损伤、尤其是单链断口，找到就用 NAD 在自己和附近的蛋白上造出一团有分支的聚合物 —— 这是一面把修复蛋白招募过来的旗。没有它，单链断口会累积，并在下一次复制时变成双链断裂。在一个已经失去 BRCA 依赖的双链断裂修复的肿瘤里，再把 PARP1 拿掉对肿瘤是致命的，对正常细胞则不是。奥拉帕利 2014 年获批，使无进展生存期提高四倍。" },
    { en: "nonhomologous end joining", cn: "非同源末端连接",
      def_en: "The fallback for a break through both strands when no sister chromatid exists to copy from. The two ends are trimmed and ligated straight back together, which does not conserve the original sequence and is frankly mutagenic. Ku70-Ku80 binds the ends as a scaffold and recruits DNA-PKcs and the nuclease Artemis; phosphorylated Artemis trims overhangs and hairpins, strands from the two ends anneal at chance short complementary patches, polymerase mu or lambda fills, and XRCC4, XLF and ligase IV seal. It handles most double-strand break repair outside meiosis in mammals.",
      def_cn: "当没有姐妹染色单体可抄时，应付贯穿两条链的断裂的退路。两个断端被修剪后直接连回去，不保留原来的序列，坦白说就是致突变的。Ku70–Ku80 结合断端充当支架，招募 DNA-PKcs 和核酸酶 Artemis；磷酸化的 Artemis 修剪突出端和发夹，来自两端的链在偶然出现的短互补片段处退火，聚合酶 μ 或 λ 填补，XRCC4、XLF 与连接酶 IV 封口。哺乳动物中减数分裂之外的双链断裂修复大多由它承担。" },
    { en: "site-specific recombination", cn: "位点特异性重组",
      def_en: "Recombination limited to one short defined sequence. A system needs only a recombinase and a recombination site of 20 to 200 bp. Tyrosine-class enzymes cut one strand per site and hold the end as a covalent phosphotyrosine bond, which preserves the broken phosphodiester bond's energy so no ATP is needed downstream. The exchange is reciprocal and precise, and the sites are regenerated intact — a recombinase is a site-specific endonuclease and a ligase in one package.",
      def_cn: "只发生在某一段短而确定的序列上的重组。一套系统只需要一个重组酶和一段 20–200 bp 的重组位点。酪氨酸类的酶在每个位点上切开一条链，把末端以共价磷酸酪氨酸键挂住，这保存了被切断的磷酸二酯键的能量，所以后续不需要 ATP。交换互易而精确，位点在反应结束时被完好地重新生成 —— 一个重组酶就是位点特异性内切酶加连接酶的打包。" },
    { en: "inversion, deletion, insertion and XerCD", cn: "倒转、删除、插入与 XerCD",
      def_en: "Recombination sites are nonpalindromic and therefore oriented, and the outcome of site-specific recombination follows from geometry alone. Two sites on one DNA pointing opposite ways invert the DNA between them; pointing the same way, they delete it. Sites on different molecules exchange between them, giving an insertion if one is circular — how a phage integrates. The XerCD system of E. coli uses the deletion reaction to convert the dimeric chromosomes sometimes left by recombinational repair back into monomers, without which the dividing cell gets stuck.",
      def_cn: "重组位点不是回文序列，因此有方向；位点特异性重组的结果仅凭几何就能推出。同一条 DNA 上方向相反的两个位点把它们之间的 DNA 倒转，方向相同的则把它删除。位于不同分子上的位点之间发生交换，若其中一个是环状的就得到插入 —— 噬菌体就是这样整合的。大肠杆菌的 XerCD 用删除反应把重组修复有时留下的二聚体染色体变回单体，否则分裂中的细胞会卡住。" },
    { en: "transposon", cn: "转座子",
      def_en: "A segment of DNA that jumps from a donor site to a target site without needing similar sequence, landing more or less at random — perhaps the simplest of molecular parasites. Insertion sequences carry only the terminal sequences and the transposase gene; complex transposons carry extra genes, and antibiotic-resistance spread is largely transposon-mediated. Insertion duplicates 5 to 10 bp of the target, leaving a short direct repeat each side — a signature of the staggered cut. Nearly half the human genome is transposable elements.",
      def_cn: "一段从供体位点跳到靶位点的 DNA，不需要序列相似，落点基本随机 —— 大概是最简单的分子寄生物。插入序列只带两端的序列和转座酶基因；复杂转座子还带别的基因，抗生素抗性的扩散很大程度上由它介导。插入会把靶序列上 5–10 bp 复制一份，两侧各留下一段短的正向重复 —— 这是错位切割的签名。人类基因组中将近一半是可转座元件。" },
    { en: "V(D)J rearrangement", cn: "V(D)J 重排",
      def_en: "The programmed recombination that assembles immunoglobulin genes, letting about 20,000 human genes yield millions of antibodies. The IgG kappa light chain is encoded as 40 V segments, 5 J segments and 1 C segment; as a bone-marrow stem cell becomes a B lymphocyte, one V is joined to one J and the DNA between is deleted, giving 200 combinations, raised to about 500 because the junction is deliberately imprecise. Heavy chains give over 5,000, so at least 2.5 million IgGs. RAG1 and RAG2 cut at recombination signal sequences using the chemistry of transposition, and the ends are joined by nonhomologous end joining.",
      def_cn: "把免疫球蛋白基因拼装起来的、被编排好的重组，使大约 20,000 个人类基因能给出数以百万计的抗体。IgG 的 κ 轻链由 40 个 V 片段、5 个 J 片段和 1 个 C 片段编码；骨髓干细胞变成 B 淋巴细胞时，一个 V 与一个 J 接到一起、中间的 DNA 被删除，给出 200 种组合，又因接口刻意不精确而升到约 500 种。重链给出 5,000 种以上，于是至少 250 万种 IgG。RAG1 与 RAG2 在重组信号序列处切开，用的是转座的化学，两端由非同源末端连接接起来。" }
  ]
};

/* ------------------------------------------- 以 RNA 为模板的合成（科普性了解） ---- */
/* This topic is a brief orientation in the index — 只作科普性了解 — so the chain is
   kept to eleven steps and states the arrow, the enzyme, and the three places a human
   cell uses it. It is deliberately not expanded into a full treatment. */
window.BIOLITE_SPINE["key:rna-dependent-synthesis"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "virus", "influenza", "chromosome", "genome", "mRNA", "cancer",
            "coronavirus", "SARS", "COVID-19", "template", "polymerase", "exonuclease",
            "proofreading", "mutation", "bacterium", "eukaryote", "transcription",
            "replication", "HIV", "AIDS", "drug", "bacteriophage", "envelope",
            "antigen", "deoxynucleoside triphosphate"],
  nodeTitle_en: "RNA-dependent synthesis of RNA and DNA",
  nodeTitle_cn: "以 RNA 为模板合成 RNA 和 DNA",
  title_en: "The arrow that runs backwards, and the three places your own cells use it",
  title_cn: "那个反着走的箭头，以及你自己的细胞用到它的三个地方",
  steps: [
    {
      recall_en: "the central dogma allowed two special transfers alongside its main arrows; both of them are here",
      recall_cn: "中心法则在主干箭头之外还允许两条特殊传递 —— 两条都在这里",
      en: "Everything so far has run one way: DNA is copied into DNA, and DNA is read into RNA. **In every one of those reactions the template, meaning the strand being read, is DNA; the enzymes below read an RNA template instead, which runs the information backwards.** An enzyme that reads RNA and writes DNA is copying from the disposable version back into the permanent store.",
      cn: "到目前为止一切都朝一个方向走：DNA 被抄成 DNA，DNA 被读成 RNA。**在上述每一个反应里，模板 —— 也就是被读的那条链 —— 都是 DNA；而下面这些酶读的模板是 RNA，等于把信息倒着走了一遍。**一个读 RNA、写 DNA 的酶，是在从一次性的拷贝往永久的存储里抄。",
      src: "A p.988",
      see: [{ id: "L-26-1-1", en: "the DNA-templated direction, in full", cn: "以 DNA 为模板的那个方向，完整讲一遍" }]
    },
    {
      link_en: "the enzyme has a name, and it was found in a class of virus that cannot live without it",
      link_cn: "这个酶有名字，而且是在一类离了它就活不了的病毒里被发现的",
      en: "An enzyme that builds DNA on an RNA template is an RNA-dependent DNA polymerase, usually called a reverse transcriptase. **It was first found in retroviruses, animal viruses whose genome is RNA and which must convert that RNA genome into double-stranded DNA so the DNA copy can be inserted into a host chromosome.** The virus particle carries the enzyme inside it, because the host cell has none to lend.",
      cn: "以 RNA 为模板造 DNA 的酶叫 RNA 依赖的 DNA 聚合酶，通常叫逆转录酶。**它最早是在逆转录病毒里发现的 —— 这类动物病毒的基因组是 RNA，它们必须把这份 RNA 基因组转换成双链 DNA，好让这份 DNA 拷贝插进宿主染色体。**病毒颗粒把这个酶自带在里面，因为宿主细胞没有这种酶可借。",
      src: "A p.988"
    },
    {
      link_en: "a retroviral genome is small enough to name gene by gene",
      link_cn: "逆转录病毒的基因组小到可以一个基因一个基因地点名",
      en: "A retrovirus typically has three genes, called gag, pol and env. The name gag is short for group associated antigen, and that gene encodes the structural proteins of the particle; pol encodes the reverse transcriptase along with the other enzymes the virus needs; env encodes the proteins of the envelope that lets the particle enter a cell. **Three genes is the whole genome, which is why a retrovirus has to make each gene do more than one job, and why the frameshifting trick of the genetic code turns up in exactly this virus.**",
      cn: "逆转录病毒一般有三个基因，叫 gag、pol、env。gag 的名字来自 group associated antigen，这个基因编码病毒颗粒的结构蛋白；pol 编码逆转录酶以及病毒需要的其他几个酶；env 编码包膜蛋白，颗粒靠包膜进入细胞。**全部基因组就这三个基因，所以逆转录病毒必须让每个基因身兼数职，而遗传密码那边的移码花招也正好出现在这类病毒身上。**",
      src: "A p.989",
      see: [{ id: "L-27-1-1", en: "translational frameshifting in Rous sarcoma virus, which is how one transcript makes both Gag and the reverse transcriptase", cn: "劳斯肉瘤病毒里的翻译移码 —— 一条转录本同时做出 Gag 和逆转录酶靠的就是它" }]
    },
    {
      link_en: "and the same reaction, run in a tube, became one of the standard tools of molecular biology",
      link_cn: "而同样的反应搬进试管，成了分子生物学的标准工具之一",
      en: "Give a purified reverse transcriptase an mRNA and the four deoxynucleoside triphosphates, and it writes out a DNA copy of that message. A eukaryotic transcript is longer than the cell needs, and the stretches cut out of it before use are called introns. **That DNA copy is called cDNA, or complementary DNA, and it is a version of a gene with the introns already gone, because the mRNA it was copied from had already been spliced.** That is how a eukaryotic gene is put into a bacterium, which has no splicing machinery and could not otherwise read it.",
      cn: "给纯化的逆转录酶一条 mRNA 和四种脱氧核苷三磷酸，它就写出这条信息的 DNA 拷贝。真核转录本比细胞需要的长，使用之前被切掉的那些段叫内含子。**这份 DNA 拷贝叫 cDNA，即互补 DNA，它是一个内含子已经不在了的基因版本，因为被抄的那条 mRNA 早就剪接过了。**把一个真核基因塞进细菌里用的就是这一招 —— 细菌没有剪接机器，否则根本读不了那个基因。",
      src: "A p.995",
      see: [{ id: "L-9-1-1", en: "cDNA as a laboratory reagent, in full", cn: "cDNA 作为实验室试剂，完整讲一遍" }]
    },
    {
      link_en: "in a person, the same viruses cause disease, and some of them cause it by carrying a stolen gene",
      link_cn: "在人身上，同一批病毒会致病，其中一些致病的方式是带着一个偷来的基因",
      en: "Retroviruses cause human disease, including AIDS and several cancers. Some retroviruses carry an oncogene, which is a gene whose product makes an infected cell grow and divide abnormally. **A retrovirus with an oncogene damages growth control from the inside: it delivers a copy of a growth-control gene into the chromosome and leaves it switched on.**",
      cn: "逆转录病毒会引起人的疾病，包括艾滋病和若干种癌症。有些逆转录病毒带着一个癌基因，即其产物会让被感染的细胞异常地生长和分裂的基因。**带癌基因的逆转录病毒是从内部破坏细胞的生长调控：它把一份生长调控基因的拷贝送进染色体，并让它一直开着。**",
      src: "A p.989"
    },
    {
      link_en: "and because one enzyme is doing all of this, it is the obvious drug target",
      link_cn: "而既然这一切都由一个酶完成，它就是最明显的药物靶点",
      en: "HIV, the retrovirus that causes AIDS, was attacked at exactly that enzyme. Azidothymidine, or AZT, was synthesised in 1964 by Jerome Horwitz as a candidate anticancer drug and failed at that job, and it sat unused until 1985, when it was found to work against AIDS by blocking the reverse transcriptase of HIV. **A compound already made, already characterised and already discarded became the first treatment for a new disease, which is why failed compounds are kept rather than thrown away.**",
      cn: "引起艾滋病的逆转录病毒 HIV，正是在这个酶上被攻击的。叠氮胸苷（AZT）由 Jerome Horwitz 于 1964 年合成，本来是候选抗癌药，在那个用途上失败了，此后一直闲置，直到 1985 年被发现能通过阻断 HIV 的逆转录酶来治疗艾滋病。**一个早已合成、早已表征、早已被弃用的化合物，成了一种新疾病的第一个疗法 —— 失败的化合物之所以要留着而不是扔掉，原因就在这里。**",
      src: "A p.991"
    },
    {
      link_en: "and one number explains why treating that virus has been so hard",
      link_cn: "而有一个数字解释了为什么治这个病毒这么难",
      recall_en: "the same missing proofreading exonuclease that makes a translesion polymerase inaccurate",
      recall_cn: "跨损伤聚合酶之所以不准，缺的也正是这个校对外切酶",
      en: "Reverse transcriptases have no 3' to 5' proofreading exonuclease, meaning no second active site that removes a wrongly added base from the growing end, and they make about 1 error in every 20,000 nucleotides added. **That gives a very high mutation rate and correspondingly fast evolution: the virus in one patient is a swarm of variants, so a drug that works today selects for the variant resisting it.** New disease-causing strains keep appearing, and from the point of view of the virus the missing proofreading step is where its adaptability comes from.",
      cn: "逆转录酶没有 3′→5′ 校对外切酶，也就是没有那个能把接错的碱基从生长端去掉的第二活性中心，它们每接约 20,000 个核苷酸出错一个。**由此得到极高的突变率和相应极快的演化：一个病人体内的病毒是一大堆变体的混合，所以今天有效的药会筛选出对它耐药的那个变体。**新的致病株不断出现；而从病毒的角度看，缺少校对正是它适应能力的来源。",
      src: "A p.990",
      see: [{ id: "L-25-2-1", en: "the same missing exonuclease in a translesion polymerase, and why it is missing", cn: "跨损伤聚合酶里同样缺席的外切酶，以及它为什么缺席" }]
    },
    {
      link_en: "the same chemistry is at work inside your own cells, in three places; first, sequences that move",
      link_cn: "同样的化学也在你自己的细胞里运作，共三处；第一处是会移动的序列",
      en: "A transposon is a segment of DNA that can move from one place in a genome to another. **Many eukaryotic transposons are related to retroviruses and move the same way: the segment is transcribed into RNA, a reverse transcriptase copies that RNA into DNA, and the copy inserts elsewhere.** The original stays where it was, so each move leaves one more copy behind, which is why sequences of this kind have accumulated to occupy a large fraction of a mammalian genome.",
      cn: "转座子是基因组里能从一个位置搬到另一个位置的一段 DNA。**许多真核转座子与逆转录病毒同源，搬家方式也一样：这段序列先被转录成 RNA，逆转录酶再把这条 RNA 抄回 DNA，DNA 拷贝插进别处。**原件留在原地，所以每搬一次就多留下一份拷贝 —— 这类序列之所以在哺乳动物基因组里累积到占很大比例，原因就在这里。",
      src: "A p.992",
      see: [{ id: "L-25-3-1", en: "transposition as a class of recombination, and the direct repeats it leaves", cn: "作为一类重组的转座，以及它留下的正向重复" }]
    },
    {
      link_en: "second, an intron that puts itself back into a gene it has already left",
      link_cn: "第二处：一个内含子把自己塞回一个它已经离开过的基因",
      en: "A group II intron is one of the introns that splices itself out of a transcript with no protein enzyme present, and it can also run that reaction in reverse. **The excised intron RNA inserts itself into the DNA of a gene at the site it came from, and a reverse transcriptase the intron encodes copies it back into DNA there — a movement called retrohoming.** It is called homing because the intron goes to the one specific site it belongs at, and it means an intron is not only a passenger in a transcript: it can be a mobile element that maintains its own presence in a genome.",
      cn: "II 型内含子是那类不靠蛋白酶、自己把自己从转录本里剪出去的内含子，它也能把这个反应倒过来跑。**被切出来的内含子 RNA 把自己插进某个基因的 DNA 里、插在它原本所在的那个位点上，然后由内含子自己编码的一个逆转录酶在那里把它抄回成 DNA —— 这个移动叫归巢式逆转座。**「归巢」是因为内含子回到的正是它归属的那一个特定位点；这也意味着内含子不只是转录本上的搭车客，它可以是一个靠自己维持在基因组中存在的可移动元件。",
      src: "A p.992",
      see: [{ id: "L-8-2-1", en: "group I and group II introns, and self-splicing", cn: "I 型与 II 型内含子，以及自剪接" }]
    },
    {
      link_en: "third, the enzyme that finishes the ends of your chromosomes, which no ordinary polymerase can finish",
      link_cn: "第三处：把你染色体末端收尾的那个酶 —— 普通聚合酶收不了这个尾",
      en: "A linear chromosome has a problem at each end: an ordinary DNA polymerase cannot fill in the very last stretch, so each round of copying would leave the chromosome slightly shorter. Telomerase, discovered by Carol Greider and Elizabeth Blackburn, solves it by adding a repeated sequence, called a telomere, onto each end. **Telomerase is a specialised reverse transcriptase carrying its own RNA template inside itself, so a piece of chromosome is built from a template that belongs to no chromosome.**",
      cn: "线性染色体的两端各有一个问题：普通 DNA 聚合酶补不上最末那一小段，于是每复制一轮染色体就会短一点。端粒酶由 Carol Greider 与 Elizabeth Blackburn 发现，它的解法是在每一端加上一段重复序列，这段序列叫端粒。**端粒酶是一种特化的逆转录酶，它读的那份 RNA 模板就装在这个酶自己身体里，于是有一段染色体是照着不属于任何染色体的模板造出来的。**",
      src: "A p.993",
      see: [{ id: "L-8-2-1", en: "how a telomere caps itself once it is built", cn: "端粒造好之后怎样把自己封起来" },
            { id: "L-9-1-1", en: "telomeres and how chromosome ends are studied", cn: "端粒，以及染色体末端是怎么被研究的" }]
    },
    {
      link_en: "and one last enzyme in this family reads RNA and writes RNA, which is why it has no host counterpart to hide behind",
      link_cn: "这一家族还有最后一个酶，读 RNA 写 RNA —— 正因如此，它在宿主里找不到同类可以躲",
      en: "An RNA-dependent RNA polymerase, also called a replicase, copies an RNA template into RNA. The bacteriophage Q-beta, a virus that infects bacteria, carries one, and so do the eukaryotic RNA viruses, including influenza and the coronaviruses of SARS and COVID-19; for several of them the viral chromosome doubles as the mRNA from which the viral proteins are made. **Every RNA virus other than the retroviruses has to encode a replicase of its own, because a host cell has no enzyme that copies RNA into RNA.** That is what makes a replicase such a clean drug target: the reaction it catalyses does not happen anywhere in an uninfected cell, so a compound that blocks it has nothing of yours to damage.",
      cn: "RNA 依赖的 RNA 聚合酶，也叫复制酶，把一条 RNA 模板抄成 RNA。噬菌体 Qβ（一类感染细菌的病毒）带着一个，真核的 RNA 病毒也带着 —— 包括流感病毒以及 SARS 和 COVID-19 的冠状病毒；其中好几种的病毒染色体同时就充当合成病毒蛋白所用的 mRNA。**除逆转录病毒之外的每一种 RNA 病毒都必须自己编码一个复制酶，因为宿主细胞里没有任何酶能把 RNA 抄成 RNA。**这正是复制酶作为药物靶点如此干净的原因：它催化的反应在未感染的细胞里任何地方都不发生，所以阻断它的化合物没有你自己的东西可损伤。",
      src: "A p.994"
    }
  ],
  terms: [
    { en: "reverse transcriptase", cn: "逆转录酶",
      def_en: "An RNA-dependent DNA polymerase: it builds DNA on an RNA template, running information from the disposable copy back into the permanent store. First found in retroviruses, which must convert their RNA genome into double-stranded DNA to be inserted into a host chromosome, and which carry the enzyme inside the particle because the host has none.",
      def_cn: "RNA 依赖的 DNA 聚合酶：以 RNA 为模板造 DNA，把信息从一次性的拷贝倒流回永久的存储。它最早在逆转录病毒里被发现 —— 这类病毒必须把 RNA 基因组转换成双链 DNA 才能插进宿主染色体，而它们把这个酶自带在颗粒里，因为宿主没有。" },
    { en: "gag, pol, env", cn: "gag、pol、env",
      def_en: "The three genes of a typical retrovirus. The first, whose name is short for group associated antigen, encodes the particle's structural proteins; the second encodes the reverse transcriptase and the virus's other enzymes; the third encodes the envelope proteins that let the particle enter a cell. Three genes is the whole genome, which is why each has to do more than one job.",
      def_cn: "一个典型逆转录病毒的三个基因。第一个的名字来自 group associated antigen，编码病毒颗粒的结构蛋白；第二个编码逆转录酶和病毒的其他几个酶；第三个编码包膜蛋白，颗粒靠包膜进入细胞。全部基因组就这三个，所以每一个都必须身兼数职。" },
    { en: "AZT", cn: "AZT（叠氮胸苷）",
      def_en: "Azidothymidine, synthesised by Jerome Horwitz in 1964 as a candidate anticancer drug, which failed at that. In 1985 it was found to act against AIDS by blocking the reverse transcriptase of HIV — an already-made, already-discarded compound becoming the first treatment for a new disease.",
      def_cn: "叠氮胸苷，Jerome Horwitz 于 1964 年作为候选抗癌药合成，在那个用途上失败了。1985 年被发现能通过阻断 HIV 的逆转录酶来对付艾滋病 —— 一个早已合成、早已被弃用的化合物，成了一种新疾病的第一个疗法。" },
    { en: "retrohoming", cn: "归巢式逆转座",
      def_en: "A group II intron inserting its excised RNA back into the DNA of the gene at the exact site it came from, after which a reverse transcriptase encoded by that intron copies it into DNA there. An intron can therefore be a mobile element maintaining its own presence in a genome, not merely a passenger in a transcript.",
      def_cn: "II 型内含子把切出来的 RNA 插回它原本所在基因的 DNA、且正好插在原位点上，随后由这个内含子编码的一个逆转录酶在那里把它抄成 DNA。所以内含子可以是一个靠自己维持在基因组中存在的可移动元件，而不只是转录本上的搭车客。" },
    { en: "telomerase", cn: "端粒酶",
      def_en: "The enzyme, found by Carol Greider and Elizabeth Blackburn, that adds the repeated telomere sequence to the end of a linear chromosome, which an ordinary DNA polymerase cannot finish. It is a specialised reverse transcriptase carrying its own RNA template inside itself — so a piece of chromosome is built from a template that is not part of any chromosome.",
      def_cn: "由 Carol Greider 与 Elizabeth Blackburn 发现的酶，负责给线性染色体末端加上重复的端粒序列 —— 那一小段普通 DNA 聚合酶补不上。它是一种特化的逆转录酶，自己身体里带着 RNA 模板，于是有一段染色体是照着不属于任何染色体的模板造出来的。" },
    { en: "replicase", cn: "复制酶",
      def_en: "An RNA-dependent RNA polymerase, copying an RNA template into RNA. Carried by bacteriophage Q-beta and by eukaryotic RNA viruses including influenza and the SARS and COVID-19 coronaviruses. Every RNA virus except the retroviruses must encode one, because no host enzyme copies RNA into RNA — which is what makes it so clean a drug target.",
      def_cn: "RNA 依赖的 RNA 聚合酶，把 RNA 模板抄成 RNA。噬菌体 Qβ 带着它，真核 RNA 病毒也带着，包括流感病毒和 SARS 与 COVID-19 的冠状病毒。除逆转录病毒外的每一种 RNA 病毒都必须自己编码一个，因为宿主没有任何酶把 RNA 抄成 RNA —— 这正是它作为药物靶点如此干净的原因。" }
  ]
};
