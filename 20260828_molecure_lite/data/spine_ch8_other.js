/* Spine for §8.5 — 真核基因其他水平上的表达调控.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 341–352.

   THE ARC. Chapter 8 has spent itself on transcription initiation. This section is
   everything that happens on either side of it, and one question runs the whole way
   through: a molecule outside the cell, or a temperature, or an iron shortage, has to
   end up changing how much of one protein exists — so where is the switch?

   Each block answers that with a different level.
     · Signal transduction (p.341–343): the switch is a phosphate group. A receptor in
       the membrane, a second messenger, a kinase cascade, and finally a transcription
       factor that has been phosphorylated. PKA, PKC, CaM kinase, MAP kinase.
     · Cell division (p.343–344): the same machinery, followed to its end — p53, p21,
       CDK2-cyclin E, pRb, E2F, and whether the cell enters S phase.
     · Acetylation (p.344): the switch is an acetyl group, and it works by moving a
       domain out of the way of the DNA-binding surface.
     · Hormones (p.345): the switch is where the receptor is allowed to be, cytoplasm
       or nucleus — which is also how a laboratory inducible system is built.
     · Heat shock (p.346–348): the switch is HSF's oligomeric state, and HSP70 closes
       the loop by switching off the factor that made it.
     · Translation (p.348–352): the switch has left the DNA entirely. Ribosome
       scanning, the cap, the IRE, and eIF-2α.

   The IRE/IREBP step is the one worth the price of the section: the SAME protein on
   the SAME element gives opposite outcomes, decided only by which untranslated region
   the element sits in.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. TGACGTCA; R2C2; a rabbit reticulocyte extract with the
      haemin left out; poliovirus in a HeLa cell; 60 bp upstream of a TATA box.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has to
   stand up with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-8-5 */
window.BIOLITE_SPINE["M-8-5"] = {
  /* Declared rather than left implicit. The first group is the molecular-biology
     baseline a reader arriving at chapter 8 already holds; the second group are
     ordinary words that happen to be glossary entries too. Nothing load-bearing is
     parked here — PKA, CRE, PIP2, IP3, DAG, CaM kinase, MAP kinase, p53, p21, pRb,
     E2F, HRE, HSE, HSF, IRE, IREBP, eIF-2 and the cap types are all introduced in
     the prose at first use. */
  assumed: ["DNA", "RNA", "mRNA", "tRNA", "rRNA", "gene", "genome", "protein", "peptide",
            "enzyme", "cell", "nucleus", "cytoplasm", "cytosol", "chromatin", "chromosome",
            "promoter", "transcription", "translation", "ribosome", "codon", "start codon",
            "intron", "exon", "splicing", "pre-mRNA", "untranslated region", "amino acid",
            "serine", "threonine", "tyrosine", "arginine", "residue", "phosphate",
            "phosphorylation", "kinase", "phosphatase", "ATP", "GTP", "ADP", "cAMP",
            "hormone", "insulin", "virus", "yeast", "bacterium", "gene expression",
            "transcription factor", "initiation", "conformation", "holoenzyme",
            "subunit", "domain", "complex", "receptor", "membrane", "plasma membrane",
            "lipid", "phospholipid", "ligand", "substrate", "affinity", "degradation",
            "tumour", "apoptosis", "differentiation", "temperature", "iron", "calcium"],
  nodeTitle_en: "Regulation at every other level a eukaryotic gene passes through",
  nodeTitle_cn: "真核基因其他水平上的表达调控",
  title_en: "A signal that never enters the cell still changes how much of a protein exists, and **every level a eukaryotic gene passes through — kinase cascade, acetyl group, hormone receptor, heat-shock factor, ribosome scanning, mRNA stability — carries a switch of its own**",
  title_cn: "一个从未进入细胞的信号，照样能改变某个蛋白质的含量；**真核基因所经过的每一个层次——激酶级联、乙酰基、激素受体、热激因子、核糖体扫描、mRNA 稳定性——都各有一个自己的开关**",
  steps: [
    {
      en: "A hormone or a growth factor stays outside the cell, and what it binds is a receptor in the plasma membrane. Two upstream routes carry the message inward: the protein tyrosine kinase (PTK) route, where the receptor itself or its binding protein has tyrosine kinase activity, and the G-protein route, where the ligand-bound receptor works through a GTP-binding protein to produce a mediator that activates serine/threonine or tyrosine kinases. Under the collision-coupling hypothesis, also called the dynamic-receptor hypothesis, a receptor drifts sideways inside the phospholipid bilayer until it meets an effector molecule; on the G-protein route that drifting produces the momentary random collision which activates the effector. **Lateral diffusion drives tyrosine kinase receptors together into oligomers, and oligomerisation is what receptor-to-receptor autophosphorylation requires — signal transduction starts with two molecules finding each other inside a membrane.**",
      cn: "激素或生长因子停在细胞外，它结合的是质膜上的受体。往细胞内传的上游途径有两条：一条是蛋白酪氨酸激酶(protein tyrosine kinase，PTK)途径，受体本身或受体结合蛋白具有内源酪氨酸激酶活性；另一条是 G 蛋白途径，配体(ligand)与受体结合后，通过 G 蛋白介导的效应系统产生介质，活化丝氨酸/苏氨酸或酪氨酸激酶。按照「碰撞耦联」学说、也叫「动态受体」学说，受体能在磷脂双层里侧向流动，直到与效应分子相遇；在 G 蛋白途径里，正是这种侧向扩散造成的瞬时随机碰撞，使 G 蛋白活化效应分子。**侧向扩散让酪氨酸激酶受体聚成寡聚体，而受体–受体之间的自身磷酸化正需要这种寡聚化——信号转导的第一步，就是两个分子在膜里找到对方。**",
      src: "现分 p.341（图 8-60）"
    },
    {
      link_en: "on the G-protein route the mediator is cAMP, and one enzyme is built to read it",
      link_cn: "G 蛋白途径产生的介质是 cAMP，而有一种酶专门用来读它",
      en: "A protein kinase that depends on cAMP is called A kinase (PKA), and it moves the terminal phosphate of ATP onto a serine or threonine residue of one particular protein, at a site marked by two or more basic residues just upstream of it: X–Arg–Arg–X–Ser–X. Inactive PKA is a holoenzyme of four subunits, R2C2 — two regulatory and two catalytic. **cAMP binds the regulatory subunits, the conformation changes, and the catalytic subunits come away as active monomers — and since each kind of cell offers PKA a different substrate, one messenger produces a different response in each target cell.**",
      cn: "依赖于 cAMP 的蛋白激酶叫 A 激酶(PKA)，它把 ATP 分子上的末端磷酸基团加到某个特定蛋白质的丝氨酸或苏氨酸残基上；被磷酸化的氨基酸 N 端上游往往有两个或两个以上碱性氨基酸，即 X–Arg–Arg–X–Ser–X。非活性状态的 PKA 全酶由 4 个亚基组成，写作 R2C2——两个调节亚基、两个催化亚基。**cAMP 与调节亚基结合，引起构象变化，催化亚基被释放出来成为有催化活性的单体；而不同细胞体系给 PKA 的反应底物不同，所以同一个信使能在不同靶细胞里诱发不同的反应。**",
      src: "现分 p.341（图 8-61）"
    },
    {
      link_en: "and a catalytic subunit that has come loose can walk into the nucleus",
      link_cn: "而脱离出来的催化亚基，可以走进细胞核",
      en: "Many transcription factors are activated by exactly this cAMP-mediated phosphorylation, because the 5′ promoter region of the genes concerned carries one or more copies of a cAMP response element (CRE), whose core sequence is TGACGTCA. The chain runs like this: ligand binds receptor R, R changes conformation and couples to the GTP-binding protein, the coupling activates membrane-bound adenylate cyclase (AC), cAMP concentration rises inside the cell, PKA is activated, and its catalytic subunit enters the nucleus and phosphorylates its substrates there. **Phosphorylated CREB and CREM are transcriptional activators sitting on the CRE, so a hormone that never crossed the membrane ends up starting transcription at a named eight-base sequence.**",
      cn: "许多转录因子正是通过这种 cAMP 介导的磷酸化被激活的，因为这类基因的 5′ 端启动区大都拥有一个或数个 cAMP 应答元件(cAMP-response element，CRE)，其基本序列为 TGACGTCA。整条链是这样跑的：配基与膜上的受体 R 结合，R 构象改变并与 GTP 结合蛋白相结合，这一耦合激活了与膜相关的腺苷酸环化酶(AC)，胞内 cAMP 浓度上升，A 激酶被活化，催化亚基进入核内实施底物磷酸化。**被磷酸化的 CREB、CREM 就是坐在 CRE 上的转录激活因子；于是一个从未穿过细胞膜的激素，最终在一段八个碱基的序列上启动了转录。**",
      src: "现分 p.342"
    },
    {
      link_en: "the other branch of the G-protein route makes its messengers by cutting a membrane lipid in half",
      link_cn: "G 蛋白途径的另一支，是把一个膜脂切成两半来造信使",
      en: "In the phosphoinositide cascade the G protein, working through the activated receptor, switches on phospholipase-β, and that enzyme cuts phosphatidylinositol-4,5-bisphosphate (PIP2) into two products: inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG). **Both halves of that single cut are messengers: IP3 leaves for the cytosol and raises the free Ca2+ concentration, DAG stays in the membrane, and the kinase the two of them activate together is C kinase (PKC), named for its dependence on Ca2+.**",
      cn: "在磷酸肌醇级联放大里，G 蛋白通过活化的受体开启磷酸酯酶-β，这个酶把磷脂酰肌醇-4,5-二磷酸(PIP2)切成两个产物：肌醇 1,4,5-三磷酸(IP3)和二酰基甘油(DAG)。**PIP2 被切出来的两半都是信使：IP3 离开质膜进入细胞质、提高游离 Ca2+ 浓度，DAG 留在膜上；而它们两个共同激活的那个激酶，因为活性依赖 Ca2+，所以叫 C 激酶(PKC)。**",
      src: "现分 p.342（图 8-62）"
    },
    {
      link_en: "and a raised Ca2+ level has two readers, not one",
      link_cn: "而升高的 Ca2+ 有两个读者",
      en: "Rising cytosolic Ca2+ pulls PKC out of the cytosol to the inner face of the plasma membrane, where DAG and Ca2+ activate it together. DAG works by sharply raising PKC's affinity for Ca2+, which is what allows a physiological Ca2+ level to switch the enzyme on at all, and DAG binding also lifts the inhibition that PKC's regulatory domain imposes on its catalytic domain. **Ca2+ has a second reader as well: calmodulin kinase (CaM kinase) is another serine/threonine kinase, but it answers to intracellular Ca2+ level alone, and most of what Ca2+ does in a cell is done through it.**",
      cn: "细胞质 Ca2+ 浓度升高，把 C 激酶从胞质拉到靠近原生质膜内侧处，在那里被 DAG 和 Ca2+ 双重影响所激活。DAG 起作用的方式是大大提高 C 激酶对 Ca2+ 的亲和力，从而使生理水平的 Ca2+ 就足以活化它；DAG 结合后还能解除调节结构域对催化结构域造成的抑制，提高酶活性。**Ca2+ 还有第二个读者：钙调蛋白激酶(CaM-kinase)同样是一类丝氨酸/苏氨酸激酶，但它仅应答于细胞内 Ca2+ 水平，Ca2+ 的细胞学功能主要就是通过它来实现的。**",
      src: "现分 p.343"
    },
    {
      link_en: "PKC and Ras both hand their signal to a chain in which each kinase phosphorylates the next",
      link_cn: "C 激酶和 Ras 都把信号交给一条链，链上每个激酶去磷酸化下一个",
      en: "MAP kinase — mitogen-activated protein kinase, also named extracellular-signal-regulated kinase (ERK) — is induced by many growth and differentiation factors from outside the cell, and it is controlled from both the tyrosine kinase system and the G-protein receptor system. Its activity turns on whether two residues lying just one amino acid apart, a tyrosine and a serine, have both been phosphorylated. **An enzyme catalysing both phosphorylations at once is MAP-kinase-kinase, activated in turn by MAP-kinase-kinase-kinase, which PKC and Ras switch on — one signal amplified down a three-step cascade onto the transcription factors Jun and Elk-1.**",
      cn: "MAP 激酶——全称丝裂原活化蛋白激酶(mitogen-activated protein kinase)，又称 extracellular-signal-regulated kinase(ERKs)——的活性受许多外源细胞生长、分化因子诱导，也受酪氨酸蛋白激酶及 G 蛋白受体系统的调控。它的活性取决于该蛋白质中仅有一个氨基酸之隔的酪氨酸残基与丝氨酸残基是否都被磷酸化。**能同时催化这两个残基磷酸化的酶叫 MAP-激酶-激酶，它自己又被 MAP-激酶-激酶-激酶磷酸化激活，而后者由 C 激酶或 Ras 蛋白激活——一个信号沿着三级级联被放大，最后落到 Jun、Elk-1 这些转录因子身上。**",
      src: "现分 p.343（图 8-63）"
    },
    {
      link_en: "follow one of these phosphorylations to its end and it decides whether the cell divides",
      link_cn: "把其中一次磷酸化追到底，它决定的是细胞分不分裂",
      en: "Cell division is held at the boundary between G1 phase and S phase by a chain of five proteins. When p21 protein is abundant it binds the cyclin E–CDK2 complex — CDK stands for cyclin-dependent protein kinase — and CDK2 loses the ability to phosphorylate pRb protein; unphosphorylated pRb then binds the transcription factor E2F and stops E2F activating the enzymes of DNA synthesis, so the cell cannot get from G1 into S. **Let the activity of the p53 gene fall and p21 protein drops sharply with it: cyclin E–CDK2 phosphorylates pRb, pRb releases E2F, freed E2F switches on the genes of DNA synthesis, and the cell enters S phase and divides.**",
      cn: "细胞分裂被五个蛋白质组成的一条链卡在 G1 期与 S 期的交界上。p21 蛋白过量时，大量周期蛋白(cyclin)E-CDK2 复合物与 p21 蛋白结合——CDK 即周期蛋白依赖性激酶(cyclin-dependent protein kinase)——CDK2 因此丧失磷酸化 pRb 蛋白的功能；没有被磷酸化的 pRb 与转录因子 E2F 结合，使 E2F 不能激活一系列与 DNA 合成有关的酶，细胞就不能由 G1 期进入 S 期。**只要 p53 基因活性降低，p21 蛋白含量就急剧下降：周期蛋白 E-CDK2 得以把 pRb 磷酸化，pRb 放开 E2F，游离的 E2F 激活许多与 DNA 合成有关的基因，细胞进入 S 期，分裂发生。**",
      src: "现分 p.343, p.344（图 8-64）"
    },
    {
      link_en: "so what is done to p53 itself decides the whole chain, and one of the things done to it is acetylation",
      link_cn: "于是「对 p53 本身做了什么」决定了整条链，而其中一件事是乙酰化",
      recall_en: "the same p53 that sits at the head of the p21 chain one step up",
      recall_cn: "就是上一步那条 p21 链最上游的 p53",
      en: "p53 is a tumour suppressor transcribed in every cell into a 2.2–2.5 kb mRNA encoding a 393-amino-acid protein of relative molecular mass 5.3×10⁴, and it acts in cell-cycle control, DNA damage repair, blood-vessel formation and suppression, and apoptosis. Its sequence falls into three regions: an acidic N-terminal region (residues 1–80), a basic C-terminal region (319–393) and a hydrophobic middle (100–300). Which promoter p53 binds is decided by that promoter's topology and by the conformation of p53 and its partner proteins, and in the unmodified protein the regulatory domain folds back over the DNA-binding domain so that DNA binding is nil. **Acetylation swings the regulatory domain aside and exposes p53's DNA-binding region, so binding becomes strong and target-gene transcription rises — and CBP/p300 acetylates p53 while remodelling chromatin in its favour.**",
      cn: "肿瘤抑制因子 p53 在所有细胞中都转录产生 2.2~2.5 千核苷酸的 mRNA，编码一个由 393 个氨基酸组成、相对分子质量 5.3×10⁴ 的蛋白质，参与细胞周期调控、DNA 损伤修复、血管的生成与抑制以及细胞凋亡等多条信号通路。按结构特点它分为三个区域：N 端酸性区(1~80 位)、C 端碱性区(319~393 位)和中间(100~300 位)的疏水区。p53 结不结合某个启动子，由该启动子区的拓扑结构以及 p53 及其辅助蛋白的构象决定；未经修饰时，调节结构域折回来压住 DNA 结合结构域，DNA 结合能力为零。**乙酰化把调节结构域挪开，使 p53 蛋白的 DNA 结合区域暴露，结合能力变强，靶基因转录随之上升——CBP/p300 蛋白复合体干的正是这件事：一边让 p53 被乙酰化，一边把染色体结构改成有利于结合 p53 的样子。**",
      src: "现分 p.344（图 8-65）"
    },
    {
      link_en: "a steroid hormone needs no membrane receptor at all, because it goes straight through the membrane",
      link_cn: "类固醇激素根本不需要膜上的受体，因为它直接穿膜而入",
      en: "Steroid hormones — oestrogen, progesterone, aldosterone, glucocorticoid, androgen — together with ordinary metabolic hormones such as insulin, do their regulating by starting gene transcription. A target cell holds a specific cytoplasmic receptor, and the route is this: the hormone forms a complex with that receptor, whose three-dimensional structure and even chemical character change; the modified complex passes through the nuclear envelope, binds a particular region of chromatin, and starts or shuts off transcription there. **Glucocorticoid-responsive genes carry a cis-acting element of about 20 bp called the hormone response element (HRE), which works like an enhancer whose activity the hormone controls.** Target cells hold plenty of receptor protein while non-target cells hold little or none, and that difference is the root of the tissue specificity of hormone-regulated transcription.",
      cn: "许多类固醇激素——雌激素、孕激素、醛固酮、糖皮质激素、雄激素——以及胰岛素这类一般代谢性激素，其调控作用都是通过起始基因转录实现的。靶细胞具有专一的细胞质受体，激素与之形成复合物，导致受体三维结构甚至化学性质发生变化；经修饰的受体–激素复合物穿过核膜进入细胞核，与染色质的特定区域结合，导致基因转录的起始或关闭。**糖皮质类激素应答基因都带有一段大约 20 bp 的顺式作用元件，叫激素应答元件(HRE)，它具有类似增强子的作用，而其活性受激素制约。**靶细胞中含有大量激素受体蛋白，非靶细胞中没有或很少有这类受体，这正是激素调节转录具有组织特异性的根本原因。",
      src: "现分 p.345"
    },
    {
      link_en: "and because the receptor is what holds its cargo in the cytoplasm, the whole arrangement can be rebuilt as a laboratory switch",
      link_cn: "而正因为「把货物扣在胞质里」的是受体，这一整套可以被改造成一个实验室里的开关",
      en: "Glucocorticoid acts by nuclear shuttling: the hormone binds its receptor, the receptor's conformation changes, the receptor enters the nucleus and sits on the enhancer that drives the gene downstream. An inducible expression system is built straight out of that. The nuclear protein X under study is fused to the glucocorticoid receptor GR, and the fusion gene is transformed into yeast, animal cells or plants. **With no dexamethasone (DEX) supplied, the fusion protein sits in a complex with HSP90 and steric hindrance holds it in the cytoplasm; add DEX and it binds GR, the fusion changes shape, its nuclear localisation signal is exposed, and it enters.**",
      cn: "糖皮质激素通过核穿梭(nuclear shuttling)激活下游信号通路：激素与相应受体结合，改变其构象，使之进入细胞核，结合在能够促进转录的相应增强子上，从而促进下游基因转录。可诱导表达系统就是照这个原理搭的：把要研究的核蛋白 X 与糖皮质激素受体 GR 构建成融合蛋白，转基因到酵母、动物细胞或者植物中。**不施加外源地塞米松(dexamethasone，DEX)时，融合蛋白与 HSP90 形成复合物，由于构象和空间位阻等原因留在胞质中；一加 DEX，它扩散入胞与 GR 结合，融合蛋白构象改变，核定位信号暴露，入核，下游基因随即表达。**",
      src: "现分 p.345"
    },
    {
      link_en: "HSP90 was named for heat, and heat has a response element of its own",
      link_cn: "HSP90 是因热而得名的，而热本身也有一个属于自己的应答元件",
      en: "Above their optimum temperature range many organisms are induced by heat to make a series of heat shock proteins (HSP). An upstream DNA sequence that binds one specific protein factor and thereby controls a gene's expression is called a response element, and three of them are the heat shock response element (HSE), the glucocorticoid response element (GRE) and the metal response element (MRE); each has its own factor, HSE (CNNGAANNTCCNNG) read by heat shock factor (HSF), the phorbol-ester element TRE (TGACTCA) by AP1, and the serum element SRE (CCATATTAGG) by SRF. **Heat raises HSP70 mRNA in fruit-fly cells a thousandfold, and the reason is that HSF binds the HSE lying 60 bp upstream of the TATA region of the HSP70 gene and starts transcription there.**",
      cn: "许多生物在最适温度范围以上，能受热诱导合成一系列热休克蛋白(heat shock protein，HSP)。能与某个专一蛋白因子结合、从而控制基因特异表达的 DNA 上游序列，叫应答元件(response element)；其中三个是热激应答元件(heat shock response element，HSE)、糖皮质应答元件(GRE)和金属应答元件(MRE)，每个都有自己的结合蛋白：HSE(CNNGAANNTCCNNG)由热激因子(heat shock factor，HSF)读，佛波酯元件 TRE(TGACTCA)由 AP1 读，血清元件 SRE(CCATATTAGG)由 SRF 读。**受热后果蝇细胞内 HSP70 mRNA 水平提高 1 000 倍，原因就是 HSF 与 HSP70 基因 TATA 区上游 60 碱基对处的 HSE 相结合，在那里诱发转录起始。**",
      src: "现分 p.346, p.347（表 8-9）"
    },
    {
      link_en: "and what keeps HSF switched off in a cool cell is the very protein HSF makes",
      link_cn: "而在不热的细胞里，把 HSF 关着的，正是 HSF 自己做出来的那个蛋白",
      recall_en: "HSP90 held the GR fusion protein out of the nucleus two steps up; HSP70 does the same kind of job on HSF here",
      recall_cn: "上面第二步里，是 HSP90 把 GR 融合蛋白扣在核外；这里 HSP70 对 HSF 干的是同一类活",
      en: "With no heat and no other environmental stress, HSF exists mainly as a monomer in cytoplasm and nucleus; a monomeric HSF has no DNA-binding ability, and HSP70 is thought to be what keeps HSF monomeric. Heat shock or other stress fills the cell with denatured protein, and denatured proteins compete with HSF for HSP70 and thereby release it. **Released HSF forms a trimer, is imported into the nucleus, binds HSE specifically and promotes transcription — then the HSP70 so made accumulates as the heat passes, rebinds HSF and returns it to a monomer that leaves the DNA.**  HSF is also phosphorylated rapidly after heat shock, and that phosphorylation may modulate the trimer's binding ability.",
      cn: "在没有受热或其他环境胁迫时，HSF 主要以单体的形式存在于细胞质和核内；单体 HSF 没有 DNA 结合能力，HSP70 可能参与了维持 HSF 的单体形式。受到热激或其他环境胁迫时，细胞内变性蛋白增多，它们与 HSF 竞争结合 HSP70，从而把 HSF 释放出来。**被释放的 HSF 形成三体、输入核内、与 HSE 特异结合并促进转录——随后热激温度消失，由此大量产生的 HSP70 又与 HSF 结合，把它变回没有 DNA 结合能力的单体并脱离 DNA。**热激以后 HSF 还会迅速被磷酸化，这可能也影响三体的结合能力。",
      src: "现分 p.348（图 8-68）"
    },
    {
      link_en: "the proteins produced by that cycle sort into four families, and their genes share one odd feature",
      link_cn: "这个循环产出的蛋白分成四个家族，而它们的基因有一个共同的怪特点",
      en: "By relative molecular mass and degree of homology the heat shock proteins fall into four families: HSP90, HSP70, the small HSPs, and ubiquitin. HSP70's main job is protein metabolism — folding and unfolding, translocation across membranes, and assembly of multi-subunit complexes — while ubiquitin's main job is clearing denatured protein out of the cell by degradation. An HSP regulates a target protein's activity and function without being any part of that target, which is why it is called a molecular chaperone (chaperonine). **HSP genes carry very few introns and none has ever been found in an HSP70 gene, so a transcript needs no splicing to become mature mRNA — which is how HSP gets made in bulk the moment heat shock arrives.**",
      cn: "按相对分子质量的大小以及同源程度，热休克蛋白分为四个家族：HSP90、HSP70、小分子 HSP 及泛素。HSP70 的主要功能是参与蛋白质的代谢——折叠与去折叠、跨膜转位、多聚复合物的组装——而泛素的主要功能是通过降解清除细胞内的变性蛋白质。HSP 参与靶蛋白活性和功能的调节，却不是靶蛋白的组成部分，因此一般称它为分子伴侣或伴侣蛋白(chaperonine)。**HSP 基因中内含子数量都很少，至今尚未发现 HSP70 基因中有内含子，所以转录本不需剪接就能产生成熟 mRNA——热激一来，HSP 就能大量而迅速地被做出来。**",
      src: "现分 p.347, p.348（表 8-10）"
    },
    {
      link_en: "every switch so far acted on or near the DNA; the last group acts on the mRNA after it has left",
      link_cn: "到此为止的开关都长在 DNA 上或它附近；最后这一组，长在已经离开细胞核的 mRNA 上",
      en: "Protein synthesis initiation needs four devices at once: the ribosome as the site, mRNA as the template carrying the genetic message, soluble protein factors, and tRNA as the amino-acid carrier. In eukaryotes the 40S ribosomal subunit and the initiation factors first bind the mRNA near its 5′ end, then slide toward the 3′ end, and on meeting an AUG start codon they join the 60S subunit into an 80S initiation complex — Kozak's scanning model. **What stops a ribosome at the AUG nearest the 5′ end is the sequence on either side of it: of 200-odd eukaryotic mRNAs surveyed, nearly all read A/G NNAUGG there, the context best suited to starting translation.**  Hydrolysing an mRNA activates a start codon lying inside it, because hydrolysis makes a new 5′ end and a new 5′ end is an entry site for the 40S complex.",
      cn: "蛋白质生物合成的起始反应需要四种装置同时到位：核糖体是合成场所，mRNA 是传递基因信息的模板，可溶性蛋白因子是起始物形成所必需的因子，tRNA 是氨基酸的携带者。真核生物起始时，40S 核糖体亚基及有关起始因子先与 mRNA 靠近 5′ 端处结合，然后向 3′ 方向滑行，发现 AUG 起始密码子时与 60S 大亚基结合形成 80S 起始复合物——这就是 Kozak 提出的「扫描模式」。**让核糖体停在离 5′ 端最近的那个 AUG 上的，是这个 AUG 前后的序列：调查过的 200 多种真核生物 mRNA 中，绝大部分都是 A/G NNAUGG，这样的序列对翻译起始最为合适。**把 mRNA 水解之后，它内部的起始密码子会被活化，因为水解产生了新的 5′ 端，而新的 5′ 端又可以成为 40S 起始复合物的进入位点。",
      src: "现分 p.348, p.349"
    },
    {
      link_en: "the 5′ end that the subunit enters at is capped, so something has to recognise a cap",
      link_cn: "亚基进入的那个 5′ 端上戴着帽子，于是必须有东西来认这顶帽子",
      en: "Nearly every eukaryotic mRNA carries a cap at its 5′ end, put on by guanylyl transferase and methyl transferase inside the nucleus while the pre-mRNA is still being transcribed, and the linkage they make is a 5′-5′ phosphodiester bond. Caps come in three types, O, Ⅰ and Ⅱ, differing in how far the bases in them are methylated; O to Ⅰ is made in the nucleus and Ⅰ to Ⅱ in the cytoplasm. **In poliovirus-infected HeLa cells host capped mRNA stops being translated while the uncapped viral mRNA is untouched, and the cause is inactivation of the host cap-binding protein CBPⅡ — adding CBPⅡ back restores it.**",
      cn: "绝大多数真核生物 mRNA 的 5′ 端都带有「帽子」结构，由细胞核内的鸟苷酸转移酶和甲基转移酶在前体 mRNA 刚转录出来不久或尚未转录完成时加上，它们生成的连接是 5′-5′ 磷酸二酯键。帽子有 O 型、Ⅰ 型和 Ⅱ 型三种，差异在于帽子中碱基甲基化程度的不同；从 O 型到 Ⅰ 型在细胞核内完成，由 Ⅰ 型加工成 Ⅱ 型在细胞质内进行。**脊髓灰质炎病毒感染的 HeLa 细胞里，有帽子的宿主 mRNA 翻译受阻，没有帽子的病毒 mRNA 却照常翻译；根本原因是宿主细胞的帽子结合蛋白 CBPⅡ 失活——补加 CBPⅡ，宿主 mRNA 的翻译活性就恢复。**",
      src: "现分 p.350, p.351, p.352（表 8-11）"
    },
    {
      link_en: "and one element can settle a message's fate in two opposite ways, decided only by which end of the message it sits at",
      link_cn: "而同一个元件能把一条 mRNA 的命运推向两个相反的方向，唯一的分别是它坐在这条 mRNA 的哪一端",
      en: "In higher eukaryotes iron uptake and iron detoxification are handled by the transferrin receptor (TfR) and by ferritin, and both messages carry a similar cis-acting element called the iron responsive element (IRE), which one and the same IRE-binding protein (IREBP) reads. Ferritin's IRE lies in the 5′ untranslated region of its mRNA; the IREs of TfR mRNA lie in the 3′ untranslated region. **In an iron-starved cell IREBP binds both tightly: on ferritin mRNA it blocks translation, on TfR mRNA it blocks degradation — the same protein on the same element, and which untranslated region holds it decides which way it goes.**  Delete ferritin's 5′ IRE and ferritin is translated at a permanently high level; between iron-starved and iron-loaded cells these two protein levels differ by two orders of magnitude with no significant difference at the mRNA level.",
      cn: "在高等真核生物中，转运铁蛋白受体(TfR)和铁蛋白负责铁吸收和铁解毒，这两个 mRNA 上都存在相似的顺式作用元件，称为铁应答元件(iron responsive element，IRE)，读它的是同一个 IRE 结合蛋白(IREBP)。铁蛋白的 IRE 位于其 mRNA 的 5′ 非翻译区；TfR mRNA 的 IRE 则位于 3′ 非翻译区。**细胞缺铁时，IREBP 对两者都高亲和力结合：在铁蛋白 mRNA 上它挡住翻译，在 TfR mRNA 上它挡住降解——同一个蛋白、同一个元件，方向由「元件坐在哪一段非翻译区」决定。**去掉铁蛋白的 5′ 非翻译区 IRE，可造成铁蛋白的永久性高水平翻译；而缺铁与高铁的细胞之间，这两个蛋白水平能差两个数量级，mRNA 水平上却没有显著差异。",
      src: "现分 p.350（图 8-69）"
    },
    {
      link_en: "the last switch is put on the soluble factors themselves",
      link_cn: "最后一个开关，装在可溶性蛋白因子自己身上",
      en: "In a rabbit reticulocyte crude extract with no haemin added, protein synthesis activity falls sharply within minutes and then disappears, because an inhibitor called HCI has been activated. HCI is a haemin-regulated kinase that acts on the initiation factor eIF-2: it phosphorylates the α subunit of eIF-2 and converts eIF-2 from an active form into an inactive one. Inactive HCI switches itself on by autophosphorylation, helped by a heat-stable protein named HS factor, and haemin blocks that activation. **Phosphorylated eIF-2α binds eIF-2B tightly, so eIF-2 cannot be reused and no initiation complex is formed — the same shutdown that oxidised glutathione or double-stranded RNA produces.**",
      cn: "用兔网织红细胞粗抽提液研究蛋白质合成时发现，如果不添加氯高铁血红素，几分钟之内蛋白质合成活性急剧下降直到完全消失，因为一种叫 HCI 的抑制剂被活化了。HCI 是受氯高铁血红素调节的激酶，作用对象是起始因子 eIF-2：它使 eIF-2 的 α 亚基磷酸化，把 eIF-2 由活性型变成非活性型。没有活性的 HCI 可以通过自身磷酸化变成活性型，这一过程与一个称为 HS 因子的热稳定蛋白有关，而氯高铁血红素能够阻断 HCI 的活化。**磷酸化的 eIF-2α 与 eIF-2B 紧密结合，eIF-2 因此无法再利用，起始复合物也就形成不了——添加氧化型谷胱甘肽或双链 RNA 引发的是同一种停摆。**",
      src: "现分 p.350, p.351（图 8-70）"
    },
    {
      link_en: "so what all four translation-level switches act on is one property of the message",
      link_cn: "于是翻译水平上这四个开关，动的都是同一条 mRNA 的同一个性质",
      recall_en: "the cap, the scanning context, the IRE and eIF-2α — the four steps just read",
      recall_cn: "帽子、扫描时的上下文、IRE、eIF-2α——刚读过的四步",
      en: "In protein biosynthesis, and above all in the initiation reaction, what decides the outcome is the translatability of the mRNA. **A signal system is carried in the message itself — the 5′ cap, the secondary structure, the complementarity with rRNA, the sequence around the start codon — and regulation is those signals meeting the soluble factors and the ribosome.**",
      cn: "在蛋白质生物合成、特别是起始反应中，起决定作用的是 mRNA 的「可翻译性」。**信号系统就长在这条 mRNA 自己身上——5′ 端的帽子结构、二级结构、与 rRNA 的互补性、以及起始密码附近的核苷酸序列——所谓调控，就是这些信号与可溶性蛋白因子或与核糖体之间的相互作用。**",
      src: "现分 p.352"
    }
  ]
};
