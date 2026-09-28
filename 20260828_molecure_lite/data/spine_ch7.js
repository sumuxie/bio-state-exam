/* Spines for chapter 7 — 原核基因表达调控, the three sections nothing else teaches.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 261–270,
   275–278 and 279–287.

   WHY THESE THREE NODES EXIST. The second coverage sweep asked about the parts of
   chapter 7 the first sweep never probed. §7.4, §7.6 and §7.7 came back ZERO or
   near-zero across all six existing trainers: no titled node anywhere covers the
   arabinose operon, the sigma-factor cascade, antitermination, riboswitches, sRNA
   regulation or the stringent response. This transcript is the only source for them.

   WHAT THE TRANSCRIPT SETTLED, AGAINST EXPECTATION. The brief written for the OCR
   run expected a histidine operon in §7.4 — the book has none, hisG never appears,
   and the histidine operon gets a single sentence back in §7.3.2. It expected the
   stringent response in §7.6 — ppGpp is in §7.7.8. It expected quorum sensing —
   absent from all 25 pages. None of the three is written in here.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. S₁ and S₂ five base pairs apart; 1 000 RecA monomers;
      SpoⅡAB and SpoⅡAA; 32% AUA in dnaG against 1% in structural proteins.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   THE ARC ACROSS THE THREE NODES. A bacterium controls a gene at whichever step is
   cheapest to reverse. §7.4 works on the DNA, and its sharpest case is one protein
   doing both jobs at one operon — AraC folding the DNA shut and then opening it.
   §7.6 moves up a level and re-specifies the polymerase itself, by exchanging the σ
   factor that reads promoters and by letting it read through terminators. §7.7 takes
   control off the DNA entirely and puts it on the message, where an mRNA with a
   half-life of two to three minutes makes every decision cheap to undo. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-7-4 */
window.BIOLITE_SPINE["M-7-4"] = {
  /* Declared rather than left implicit, as SPINE_SPEC asks. The first group is the
     prokaryotic vocabulary this chapter is built on and that §7.1–§7.3 established
     (lac and trp are covered by PESB's own nodes). The second group are ordinary
     English words that happen also to be glossary entries — a reader here holds
     "system", "region", "signal" and "structure" in their everyday sense. Nothing
     load-bearing is parked here: cAMP–CRP, DNA looping, the SOS response, the
     two-component system and ppGpp are all introduced in the prose at first use. */
  assumed: ["DNA", "RNA", "gene", "operon", "promoter", "operator", "repressor",
            "inducer", "activator", "transcription", "translation", "mRNA", "tRNA",
            "rRNA", "ribosome", "RNA polymerase", "polymerase", "protein", "enzyme",
            "chromosome", "genome", "mutation", "mutant", "glucose", "lactose",
            "galactose", "arabinose", "carbon source", "membrane", "lac operon",
            "trp operon", "amino acid", "nucleotide", "base pair",
            "system", "region", "sequence", "element", "factor", "binding",
            "domain", "target", "signal", "activation", "template", "structure",
            "complex", "subunit", "conformation", "activity", "shift"],
  nodeTitle_en: "The other operons — galactose, arabinose, SOS and two-component systems",
  nodeTitle_cn: "其他操纵子——半乳糖、阿拉伯糖、SOS 应答与二组分系统",
  title_en: "Five control problems solved five different ways on the DNA itself, and **the sharpest of them is AraC, one protein that shuts its own operon by folding the DNA and opens it by letting go**",
  title_cn: "五个调控难题，在 DNA 这一层上用五种不同的装置解决；而**AraC 是其中最漂亮的一个：同一个蛋白，靠把 DNA 折成环来关闭自己的操纵子，又靠松开这个环来打开它**",
  steps: [
    {
      en: "In *E. coli* the galactose operon — the *gal* operon — sits at 17 min on the genetic map and carries three structural genes: *galE*, coding for UDP-galactose-4-epimerase, *galT*, coding for galactose transferase, and *galK*, coding for galactose kinase. Those three enzymes are what turn galactose into glucose-1-phosphate; galactose itself is the inducer, and the product of a separate gene *galP* is the carrier that brings galactose across the membrane. **The regulator gene *galR* lies at 55 min while *galE*, *galT* and *galK* lie at 17 min, and GalR is a repressor acting on the *gal* operator just as LacI acts on *lacO* — a repressor gene need not sit beside the genes it silences.**",
      cn: "在大肠杆菌里，半乳糖操纵子（galactose operon，即 gal 操纵子）位于遗传图 17 min 处，含三个结构基因：*galE* 编码差向异构酶（UDP–galactose–4–epimerase）、*galT* 编码半乳糖–磷酸尿苷转移酶、*galK* 编码半乳糖激酶。这三个酶把半乳糖变成葡糖–1–磷酸；诱导物就是半乳糖本身，而把半乳糖运过细胞膜的，是另一个基因 *galP* 的产物。**调节基因 *galR* 在 55 min 处，galE、galT、galK 在 17 min 处，两者离得很远；GalR 是阻遏蛋白，它对 gal 操纵区的作用与 LacI 对 lacO 的作用完全相同——阻遏基因不必挨着它所关闭的那些基因。**",
      src: "现分 p.261"
    },
    {
      link_en: "and this operon has two features the lac operon has not",
      link_cn: "而这个操纵子有两个 lac 操纵子没有的特点",
      en: "The *gal* operon has two promoters, so its mRNA can start at two different points: the two RNA-polymerase binding sites are called S₁ and S₂, they lie only 5 bp apart, and their Pribnow boxes overlap each other. It also has two operator regions — one upstream of the promoter at −67 to −73, and one inside the structural gene *galE* itself. **Because S₁ and S₂ overlap, a polymerase sitting on one of them obstructs the other, so the two start points are alternatives and the cell uses one or the other.**",
      cn: "gal 操纵子有两个启动子，因此它的 mRNA 可以从两个不同的起始点开始转录：这两个 RNA 聚合酶结合位点叫 S₁ 和 S₂，彼此只相距 5 bp，两者的 Pribnow 区互相重叠。它还有两个操纵区（O 区）——一个在 P 区上游 −67 ~ −73，另一个在结构基因 galE 内部。**正因为 S₁ 与 S₂ 相重叠，一个 RNA 聚合酶占住其中一个，就妨碍了另一个的使用；于是这两个起始点是二选一的关系。**",
      src: "现分 p.262（图 7-27）"
    },
    {
      link_en: "so something has to decide which of the two is used, and that something reports the glucose supply",
      link_cn: "于是必须有东西来决定用哪一个，而这个东西报告的是葡萄糖的多少",
      en: "cAMP–CRP is the complex of cyclic AMP with its receptor protein CRP, and a cell makes it when glucose is scarce. In vitro transcription on a DNA fragment carrying the *gal* control region showed that this complex does two opposite things at once: it stimulates transcription from S₁ and it inhibits transcription from S₂. Its mechanism at S₁ is thought to be help in melting the polymerase–S₁ complex into an open form, and that same complex then interferes with polymerase binding at the overlapping S₂. **With cAMP–CRP present transcription starts at S₁, and with cAMP–CRP absent transcription starts at S₂, so one signal moves the start point instead of simply opening or closing the operon.**",
      cn: "cAMP–CRP 是环腺苷酸与其受体蛋白 CRP 形成的复合物，细胞在缺葡萄糖时才大量形成它。用含 gal 操纵子调节区的 DNA 片段做体外转录实验发现，这个复合物同时做两件相反的事：刺激从 S₁ 起始的转录，抑制从 S₂ 起始的转录。一般认为它在 S₁ 处的机制是帮助 RNA 聚合酶–S₁ 复合物形成开链构象；而这个复合物的存在，又干扰了 RNA 聚合酶在相重叠的 S₂ 处结合。**有 cAMP–CRP 时转录从 S₁ 开始，无 cAMP–CRP 时转录从 S₂ 开始——一个信号在这里挪动的是起始点，而不只是把操纵子开或关。**",
      src: "现分 p.264"
    },
    {
      link_en: "and the mutants say the same thing inside a living cell",
      link_cn: "而突变株在活细胞里给出的答案是一样的",
      en: "Two mutations remove cAMP–CRP from a cell: *cya*⁻ knocks out adenylate cyclase, which is the enzyme that makes cyclic AMP, and *crp*⁻ knocks out the receptor protein itself. In either mutant the *gal* operon cannot start at S₁ at all, and adding cAMP–CRP back to an in-vitro system induces that start again. The consequence shows up on plates: **a *cya*⁻ or *crp*⁻ strain of *E. coli* is unable to use lactose, and the same strain still grows on galactose as sole carbon source, because S₂ is a promoter that works without cAMP–CRP.**",
      cn: "有两类突变能把 cAMP–CRP 从细胞里拿走：*cya*⁻ 破坏腺苷酸环化酶，即合成环腺苷酸的那个酶；*crp*⁻ 破坏受体蛋白本身。这两类突变株里，gal 操纵子都根本无法从 S₁ 起始转录；而在体外系统里补加 cAMP–CRP，就能重新诱发从 S₁ 起始的转录。这件事的后果在平板上就看得见：**大肠杆菌的 *cya*⁻ 或 *crp*⁻ 突变型不能利用乳糖，却仍然能以半乳糖为唯一碳源生长，原因是 S₂ 本来就是一个不需要 cAMP–CRP 的启动子。**",
      src: "现分 p.264"
    },
    {
      link_en: "and one double mutant makes the point sharper still",
      link_cn: "而有一个双突变株，把这件事讲得更透",
      en: "There is a *gal* promoter mutant that cannot grow on galactose, and mutating it further to *cya*⁻ or to *crp*⁻ restores that ability. The reason lies in the two start points: the first mutation destroyed the S₁ start and left S₂ intact, while the cell's own cAMP–CRP was still repressing S₂, so the operon had no working start at all. **Taking cAMP–CRP away by a second mutation lifts the block on S₂ and the *gal* genes are transcribed again, so a strain is rescued by losing an activator — which is only possible where that activator is also acting as a repressor.**",
      cn: "有一个 gal 启动子突变株不能利用培养基中的半乳糖，而把它再突变成 *cya*⁻ 或 *crp*⁻，细胞反而恢复了利用半乳糖的能力。原因就在那两个起始点上：第一次突变毁掉了从 S₁ 起始的能力，却没有影响 S₂；而细胞自身的 cAMP–CRP 又一直在抑制 S₂，于是这个操纵子两头都起不了始。**第二次突变把 cAMP–CRP 拿掉，S₂ 上的抑制随之解除，gal 基因重新被转录——一个菌株因为「失去一个激活因子」而获救，这只有在该激活因子同时也在起阻遏作用时才可能发生。**",
      src: "现分 p.264"
    },
    {
      link_en: "and the reason the operon needs two start points at all is a second job galactose does",
      link_cn: "而这个操纵子之所以需要两个起始点，是因为半乳糖还兼着另一份差事",
      en: "Galactose is a carbon source, and a related compound is something else: UDP-galactose (UDPgal) is a precursor of the *E. coli* cell wall, so the epimerase encoded by *galE* has to keep supplying it even when no galactose has been fed to the cell. Wall synthesis needs very little of that enzyme, so a background constitutive level suffices — and the constitutive level of *gal* mRNA is already higher than the level of *lac* mRNA made from the *lac* operon. **S₂ is the cAMP–CRP-independent promoter that supplies the constitutive background, and S₁ is the cAMP–CRP-dependent promoter that regulates high-level synthesis; one promoter alone could serve only one of those two duties.**",
      cn: "半乳糖是碳源，而与它相关的另一个物质另有用途：尿苷二磷酸半乳糖（UDPgal）是大肠杆菌细胞壁合成的前体，所以 *galE* 编码的差向异构酶必须一直供得上，哪怕细胞根本没接触外源半乳糖。细胞壁合成对这个酶的需要量很小，本底水平的组成型合成就够用了——而 gal mRNA 的组成型合成水平，实际上已高于 lac 操纵子所合成的 lac mRNA 水平。**S₂ 是那个不依赖 cAMP–CRP、负责本底组成型合成的启动子，S₁ 是那个依赖 cAMP–CRP、负责高水平合成调节的启动子；只有一个启动子的话，两份差事只能顾上一份。**",
      src: "现分 p.264"
    },
    {
      link_en: "the next operon puts both of those jobs inside a single protein",
      link_cn: "下一个操纵子，把这两份差事装进了同一个蛋白里",
      en: "Arabinose is a five-carbon sugar that *E. coli* can use as a carbon source, and degrading it takes three genes clustered as *araBAD*: *araB* codes for ribulokinase, *araA* for L-arabinose isomerase and *araD* for L-ribulose-5-phosphate-4-epimerase. Two further genes, *araE* and *araF*, lie far from that cluster and are the transport genes — one a membrane protein, one an arabinose-binding protein sitting between wall and membrane. **Arabinose is metabolised in the order *araA*, *araB*, *araD* while the genes are written *araB*, *araA*, *araD*, so gene order along an operon promises nothing about the order of the reactions.**",
      cn: "阿拉伯糖（arabinose）是另一种可作碳源的五碳糖，大肠杆菌降解它需要三个基因，成簇排列写作 araBAD：*araB* 编码核酮糖激酶，*araA* 编码 L–阿拉伯糖异构酶，*araD* 编码 L–核酮糖–5–磷酸–4–差向异构酶。另有两个基因 *araE* 和 *araF* 远离这个基因簇，负责把阿拉伯糖运进细胞——一个是膜蛋白，一个是位于细胞壁与细胞膜之间的阿拉伯糖结合蛋白。**阿拉伯糖的代谢按 araA、araB、araD 的顺序进行，而基因在染色体上却写成 araB、araA、araD；所以操纵子里的基因排列顺序，并不担保代谢途径中酶的作用顺序。**",
      src: "现分 p.265（图 7-28）"
    },
    {
      link_en: "and the regulator sitting next to that cluster behaves unlike any regulator so far",
      link_cn: "而挨着这个基因簇的调节基因，其性质与前面见过的调节基因全然不同",
      recall_en: "in the gal and lac operons those two jobs sat in two different molecules, GalR or LacI and cAMP–CRP",
      recall_cn: "在 gal 和 lac 操纵子里，这两份差事分在两个分子身上：GalR 或 LacI，以及 cAMP–CRP",
      en: "Beside *araBAD* lie a composite promoter region, two operator regions named *araO*₁ and *araO*₂, and the regulator gene *araC*. Transcription runs in opposite directions on opposite strands: *araBAD* is read rightwards from the promoter P_BAD, and *araC* is read leftwards from P_c. In the *lac* and *gal* operons a repressor can only act negatively and cAMP–CRP can only act positively. **AraC is one protein doing both jobs at one operon: the negative regulator that holds *araBAD* off and the positive regulator that switches it on are the same molecule.**",
      cn: "与 araBAD 相邻的是一个复合启动子区、两个操纵区（叫 araO₁ 和 araO₂）以及调节基因 *araC*。两段转录在两条链上朝相反方向进行：araBAD 从启动子 P_BAD 向右转录，araC 从 P_c 向左转录。在 lac 和 gal 操纵子里，阻遏蛋白只能做负调节因子，cAMP–CRP 只能做正调节因子。**AraC 是同一个蛋白在同一个操纵子上兼任两职：把 araBAD 关住的那个负调节因子，和把它打开的那个正调节因子，是同一个分子。**",
      src: "现分 p.265（图 7-28）"
    },
    {
      link_en: "the genetics settle which of the two jobs is the essential one",
      link_cn: "遗传学实验先定下这两份差事里哪一份是必需的",
      en: "A point mutation or a deletion inside *araC* gives an *araC*⁻ strain that makes no *araBAD* mRNA at all, and a partial diploid of genotype F′*araC*⁺/*araC*⁻ is still inducible, which means *araC*⁻ is recessive. Amber mutations in *araC* show that the gene product is a protein, and purified AraC protein confirmed it. **A mutant repressor would be at least partly dominant over *araC*⁺, so a recessive loss-of-function allele is the signature of a protein that has to be present for transcription to start.**",
      cn: "araC 基因内发生点突变或缺失突变，会产生完全不能合成 araBAD mRNA 的 araC⁻ 突变株；而构建基因型为 F′araC⁺/araC⁻ 的局部二倍体后，ara 操纵子仍可被诱导，这说明 araC⁻ 等位基因是隐性的。araC 基因的琥珀突变说明其产物是一种蛋白质，AraC 蛋白的纯化又进一步证实了这一点。**如果 araC⁻ 的产物是突变型的阻遏物，它对 araC⁺ 至少应有部分显性；所以「功能丧失且为隐性」这一点，正是「必须有这个蛋白在场，转录才起始」的标志。**",
      src: "现分 p.266（图 7-29）"
    },
    {
      link_en: "and the negative job turns out to be done by bending the DNA rather than by covering a site",
      link_cn: "而那份「负」的差事，靠的是把 DNA 掰弯，而不是盖住某个位点",
      en: "When glucose is high and arabinose is low, AraC binds two sites at once: the operator *araO*₂ and the upper half of the inducer region *araI*. Those two sites are far apart along the DNA, so holding both of them together pulls the piece between them — the piece carrying *araO*₁, P_c and the CRP binding site — out into a loop. **AraC bound at *araO*₂ and *araI* folds the DNA between them into a loop that buries the promoter region inside it, and *araBAD* stays silent, so repression here is a shape imposed on the DNA.**",
      cn: "当体系中葡萄糖水平较高、阿拉伯糖水平较低时，AraC 蛋白同时结合两个位点：操纵区 araO₂，以及诱导因子结合区 araI 的上半区。这两个位点在 DNA 上相距很远，同时抓住它们，就把夹在中间的那一段（带着 araO₁、P_c 和 CRP 结合位点的那一段）拉成一个环。**AraC 同时结合 araO₂ 与 araI，把两者之间的 DNA 折成一个回转（looping）结构，启动子区被埋在环里，araBAD 不表达——这里的阻遏是强加给 DNA 的一个形状。**",
      src: "现分 p.266（图 7-29）"
    },
    {
      link_en: "and the inducer undoes that shape without taking the protein off the DNA",
      link_cn: "而诱导物解开这个形状，却并没有把蛋白从 DNA 上拿走",
      en: "With arabinose present and glucose absent, arabinose binds AraC and changes its conformation into the activating form. Two AraC homodimers then occupy *araO*₁ and *araI*, the loop is destroyed, cAMP–CRP sits on its binding site between them, and RNA polymerase initiates at P_BAD. **Arabinose moves AraC from *araO*₂ plus the upper half of *araI* onto *araO*₁ and *araI*, and that change of binding sites is the whole conversion of one protein from the repressor of *araBAD* into its activator.**",
      cn: "当有阿拉伯糖而无葡萄糖时，阿拉伯糖与 AraC 结合，使其构象改变成激活蛋白的形式。两个 AraC 同源二聚体分别与 araO₁ 和 araI 结合，DNA 回转结构被破坏，cAMP–CRP 占据夹在中间的结合位点，RNA 聚合酶在 P_BAD 处起始转录。**阿拉伯糖做的事，是把 AraC 从「araO₂ 加 araI 上半区」挪到「araO₁ 加 araI」；换一组结合位点，就是同一个蛋白从 araBAD 的阻遏物变成它的激活物的全部过程。**",
      src: "现分 p.266（图 7-29）"
    },
    {
      link_en: "even in its activating form the protein is not enough on its own",
      link_cn: "但即使换成了激活形式，这个蛋白单靠自己仍然不够",
      en: "Two experiments show what else is required. In a reconstituted reaction holding *ara* operon DNA, RNA polymerase and only one of AraC or cAMP–CRP, no *araBAD* mRNA is made at all. Electron microscopy of *ara* operon DNA, a technique in which a bound RNA polymerase can be seen directly, gave the same answer: the polymerase generally fails to bind the operon unless AraC and cAMP–CRP are both there. **Both regulators must occupy the region together before RNA polymerase will bind, so activation at P_BAD is a joint condition of two proteins and not a single switch.**",
      cn: "两个实验说明还需要什么。第一个实验里，反应体系只含 ara 操纵子 DNA、RNA 聚合酶，以及 AraC 蛋白与 cAMP–CRP 二者之一时，araBAD mRNA 的转录根本无法起始。第二个实验用电镜直接观察 ara 操纵子 DNA 分子——这种技术可以看见结合了 RNA 聚合酶的 DNA——结果相同：除非 AraC 与 cAMP–CRP 同时存在，RNA 聚合酶一般不能与该操纵子 DNA 结合。**两个调节蛋白必须同时占住这一区域，RNA 聚合酶才会结合上去；所以 P_BAD 处的激活是两个蛋白的联合条件，不是一个开关。**",
      src: "现分 p.267"
    },
    {
      link_en: "and the two opposite jobs correspond to two shapes of the one molecule",
      link_cn: "而这两份相反的差事，对应着同一个分子的两种形状",
      en: "AraC works as both a positive and a negative regulator of P_BAD activity through two isomeric forms of the protein. Pr is the repressing form, which binds operator-like sites, and Pi is the inducing form, which acts by binding the P_BAD promoter; the two forms are held in equilibrium with each other. **Without arabinose the equilibrium sits on Pr, and arabinose binding pulls it towards Pi, so the inducer does nothing more than shift a balance between two shapes of one protein.**",
      cn: "AraC 蛋白对 P_BAD 活性兼任正、负调节因子，是通过该蛋白的两种异构体实现的。Pr 是起阻遏作用的形式，与类操纵区位点结合；Pi 是起诱导作用的形式，它通过与 P_BAD 启动子结合来发挥作用；两种形式之间处于相互平衡之中。**没有阿拉伯糖时 Pr 形式占优势，阿拉伯糖一结合就把平衡拉向 Pi；所以诱导物所做的，不过是在同一个蛋白的两种形状之间挪动一个平衡。**",
      src: "现分 p.267"
    },
    {
      link_en: "and three nutrient states cover everything the operon does",
      link_cn: "三种营养状态，就覆盖了这个操纵子的全部行为",
      en: "With glucose in the medium, cAMP–CRP is not bound, AraC is in the Pr form on operator site A, RNA polymerase cannot bind P_c, and only a little AraC is made — the whole system is as nearly shut as it can be. With no glucose and no arabinose, cAMP–CRP is bound but AraC is still mostly Pr and cannot bind operator site B, so no *araBAD* mRNA appears. With no glucose and arabinose present, most AraC is Pi, it binds both operator sites, and together with cAMP–CRP it drives heavy transcription of *araC* and *araBAD*. **Any glucose, or no arabinose, means no expression; expression requires both conditions at once — glucose absent and arabinose present.**",
      cn: "培养基中有葡萄糖时，cAMP–CRP 不与操纵区位点结合，AraC 处于 Pr 形式并结合在操纵区 A 位点上，RNA 聚合酶不能与 P_c 结合，只有少量 AraC 生成——整个系统尽可能地被关闭了。没有葡萄糖也没有阿拉伯糖时，cAMP–CRP 虽已结合，AraC 仍以 Pr 为主，无法与操纵区 B 位点结合，没有 araBAD mRNA。没有葡萄糖而有阿拉伯糖时，大量 AraC 以 Pi 形式存在，分别结合 B、A 两个位点，在 cAMP–CRP 的共同作用下，araC 与 araBAD 大量表达。**只要有葡萄糖，或者没有阿拉伯糖，就不表达；要表达，必须两个条件同时成立——无葡萄糖，且有阿拉伯糖。**",
      src: "现分 p.267（图 7-30）"
    },
    {
      link_en: "the next system does not reshape its repressor at all — it destroys it",
      link_cn: "下一个系统不去改造自己的阻遏蛋白，它把阻遏蛋白直接销毁",
      en: "When bacterial DNA is damaged, by ultraviolet light for instance, the cell switches on an inducible DNA repair system called the SOS response. Its genes are scattered over many parts of the chromosome, and all of them are held down by one and the same LexA repressor, so their level is normally very low. Roughly 1 000 RecA monomers already lie loose in the cytoplasm, because *recA* is barely repressed by LexA. Severe damage interrupts replication and leaves single-stranded gaps. **RecA binds the single-stranded DNA at those gaps and becomes a protease, cutting LexA into two fragments with no operator-binding activity, so the damage itself removes the repressor of every SOS gene at once.** Repair reverses that: when the activating signal is gone RecA returns to its non-proteolytic form, LexA accumulates again and re-establishes repression, and RecA is diluted back to its background level as the cells grow and divide.",
      cn: "当细菌 DNA 遭到破坏（例如受到紫外线照射）时，细胞会启动一个诱导型 DNA 修复系统，叫 SOS 应答。参与它的基因分散在染色体的各个部位，却都受同一个 LexA 阻遏蛋白的抑制，平时表达水平很低。细胞质里本来就散布着约 1 000 个 RecA 蛋白单体，因为 recA 基因基本不受 LexA 阻遏。DNA 严重受损时复制被中断，单链缺口增多。**RecA 与缺口处的单链 DNA 结合后被激活成蛋白酶，把 LexA 切成两个没有阻遏活性、也不能结合操纵区 DNA 的片段——于是「损伤」这件事本身，一次性拿掉了所有 SOS 基因的阻遏物。**修复完成后这一切反向进行：活化信号消失，RecA 回到非蛋白水解酶的形式，LexA 重新积累并恢复阻遏；随着细菌继续生长分裂，RecA 又被稀释回本底水平。",
      src: "现分 p.267–268（图 7-31）"
    },
    {
      link_en: "all of that assumes the signal can reach the regulator; many signals never get inside the cell",
      link_cn: "以上都假定信号能碰到调节蛋白；可有很多信号根本进不了细胞",
      en: "Temperature, pH, osmotic pressure, oxygen tension, nutrients and cell density all change around a bacterium. In the induction and repression systems seen so far a small effector molecule binds the regulatory protein directly, and in many other cases the outside signal is picked up by a sensor and relayed inwards instead — a process called signal transduction. The simplest known cellular signalling system is the two-component regulatory system, built of two proteins: a sensor protein in the cytoplasmic membrane, which carries kinase activity and is therefore called a sensor kinase, and a response regulator protein in the cytoplasm. **A sensor kinase is phosphorylated as it reacts with the signal outside the membrane and passes that phosphate group to the response regulator, and the phosphorylated response regulator becomes a repressor or an activator of the operon downstream.** *E. coli* runs a whole table of such pairs, one sensor with one regulator in each: ArcB with ArcA for lack of oxygen, EnvZ with OmpR for osmotic pressure and envelope proteins, KdpD with KdpE for potassium transport, PhoR with PhoB for phosphate scavenging, NtrB with NtrC for nitrogen metabolism, and NarX with NarL or NarQ with NarP for nitrate and nitrite respiration.",
      cn: "温度、pH、渗透压、氧分压、营养和细胞浓度，都在细菌周围不断变化。前面见过的诱导与阻遏系统，都是环境中的小分子效应物直接与调节蛋白结合；而在更多情况下，外部信号先由传感器（sensor）接收、再向内传递，这个过程叫信号转导（signal transduction）。目前已知最简单的细胞信号系统是二组分调控系统（two-component regulatory system），由两种蛋白组成：位于细胞质膜上的传感蛋白（因具有激酶活性，又称传感激酶）和位于细胞质中的应答调节蛋白。**传感激酶在与膜外信号反应的过程中被磷酸化，再把磷酸基团转移给应答调节蛋白；磷酸化的应答调节蛋白就成为下游操纵子的阻遏蛋白或激活蛋白。**大肠杆菌里有一整张这样的配对表，每一对由一个传感蛋白与一个应答调节蛋白组成：氧气缺乏用 ArcB–ArcA，渗透压与包被蛋白用 EnvZ–OmpR，钾离子运输用 KdpD–KdpE，磷酸盐清除用 PhoR–PhoB，氮代谢用 NtrB–NtrC，硝酸盐与亚硝酸盐呼吸用 NarX–NarL 或 NarQ–NarP。",
      src: "现分 p.269（表 7-3、图 7-32）",
      see: [{ "id": "M-7-5", "en": "NtrB/NtrC and the regulation of the nitrogen fixation genes", "cn": "NtrB/NtrC 与固氮基因的调控" }]
    },
    {
      link_en: "one last device on the DNA: keep several promoters and let conditions pick between them",
      link_cn: "DNA 这一层上还有最后一种装置：备好几个启动子，让环境去挑",
      recall_en: "the gal operon's S₁ and S₂ were the first case of this",
      recall_cn: "gal 操纵子的 S₁ 与 S₂ 就是这种做法的第一个例子",
      en: "The *E. coli* rRNA operon *rrnE* carries two promoters, P₁ and P₂. In log-phase cells P₁ gives three to five times more transcript than P₂, so P₁ is the strong one; under amino-acid starvation the concentration of ppGpp rises — ppGpp is a guanosine nucleotide the cell makes when amino acids run short — and rising ppGpp suppresses P₁ while leaving P₂ working. **rRNA is a component of the ribosome and its supply can never stop entirely, so the weak promoter P₂ becomes the main source of rRNA at exactly the moment the strong promoter has been shut down.**",
      cn: "大肠杆菌的 rRNA 操纵子 rrnE 上有两个启动子 P₁ 和 P₂。对数生长期时 P₁ 起始的转录产物比 P₂ 多 3~5 倍，所以 P₁ 是强启动子；而在氨基酸饥饿等紧急状态下，细胞中 ppGpp 浓度升高——ppGpp 是细胞在氨基酸不足时合成的一种鸟苷酸——P₁ 的作用被抑制，P₂ 则照常工作。**rRNA 是核糖体的组成部分，供应不能完全停止；于是恰恰在强启动子被关掉的那一刻，弱启动子 P₂ 变成了合成 rRNA 的主要来源。**",
      src: "现分 p.269（图 7-33）"
    },
    {
      link_en: "and two more operons are built to the same plan, one of them with four promoters",
      link_cn: "还有两个操纵子按同样的思路搭建，其中一个有四个启动子",
      en: "The ribosomal protein SI operon *rpsA* has four promoters, probably the largest number in *E. coli*: P₁ and P₂ are strong and carry the work in ordinary growth, while the weak P₃ and P₄ hold SI protein at the minimum needed for life once ppGpp has suppressed P₁ and P₂. The *dnaQ* operon is metered differently — DnaQ is a subunit of the DNA polymerase holoenzyme whose job is proofreading replication errors, and its two promoters answer to RNA polymerase activity: at low activity transcription runs from the weak P₂, at high activity from the strong P₁. **RNA polymerase activity tracks the cell's growth rate: a slowly replicating cell keeps DnaQ at the weak promoter's level, a fast-growing cell switches to the strong one, and proofreading capacity follows growth through promoter choice alone.**",
      cn: "核糖体蛋白 SI 操纵子（rpsA）有 4 个启动子，可能是大肠杆菌中启动子最多的操纵子：P₁、P₂ 是强启动子，平时主要靠它们表达；P₃、P₄ 是弱启动子，只有当 P₁、P₂ 被 ppGpp 抑制时，才由它们合成的 SI 蛋白维持生命的最低需要。dnaQ 操纵子用的则是另一把尺子——DnaQ 蛋白是 DNA 聚合酶全酶的亚基之一，功能是校正复制中的错误，它的两个启动子听命于 RNA 聚合酶的活性：活性低时由弱启动子 P₂ 控制转录，活性高时改用强启动子 P₁。**RNA 聚合酶活性反映细胞增殖的快慢，所以复制缓慢的细胞把 DnaQ 维持在弱启动子给出的水平，快速生长的细胞则切换到强启动子——仅靠「用哪个启动子」，就把校正能力绑在了复制速度上。**",
      src: "现分 p.270（图 7-34）"
    }
  ]
};

/* ===================================================================== M-7-6
   Same assumed list as M-7-4, plus the σ-factor vocabulary this section builds on.
   The one thing deliberately NOT copied from the scan is the σ³⁸/RpoH and σ³²/RpoS
   pairing of 表 7-6: the body text on printed 276 says σ³² is the heat-shock factor,
   which contradicts the table's gene column, so only σ⁷⁰/RpoD and σ⁵⁴/RpoN are named
   with their genes here and σ³² is named by its job. A pairing that cannot be trusted
   is left out rather than passed on. */
window.BIOLITE_SPINE["M-7-6"] = {
  assumed: ["DNA", "RNA", "gene", "operon", "promoter", "operator", "repressor",
            "activator", "transcription", "translation", "mRNA", "rRNA", "ribosome",
            "RNA polymerase", "polymerase", "core enzyme", "holoenzyme", "protein",
            "enzyme", "chromosome", "genome", "terminator", "stem-loop", "hairpin",
            "bacteriophage", "phage", "spore", "heat shock", "phosphorylation",
            "dephosphorylation", "protease", "amino acid", "nucleotide",
            "system", "region", "sequence", "element", "factor", "binding",
            "domain", "target", "signal", "activation", "activity", "structure",
            "complex", "subunit", "conformation", "shift", "network"],
  nodeTitle_en: "Other controls at the level of transcription",
  nodeTitle_cn: "转录水平上的其他调控方式",
  title_en: "Every step of transcription is open to regulation, and **the largest lever is the σ factor: change the subunit that reads promoters and the same core polymerase transcribes a different set of genes**",
  title_cn: "转录的每一步都可以被调控，而**最大的一根杠杆是 σ 因子：换掉那个负责识别启动子的亚基，同一个核心酶就去转录另一套基因**",
  steps: [
    {
      en: "Transcription is the transcription machinery attaching to DNA, recognising a promoter sequence and then initiating, elongating and terminating an RNA chain; every one of those steps is regulated, and initiation is the main control point among them. The σ factor is the protein most often involved in regulation in *E. coli*, and it is the subunit that lets RNA polymerase find and read a promoter. Analysis of the *E. coli* genome sequence found at least seven of them, named by molecular mass or by their genes: σ⁷⁰, from *rpoD*, serves the basic physiological genes such as carbon metabolism and biosynthesis in log-phase growth; σ⁵⁴, from *rpoN*, serves most genes for using nitrogen sources; the rest cover heat shock, flagellar chemotaxis and iron transport. **Which promoters a polymerase can read is decided by the σ factor it carries, so a cell that changes σ factors changes the set of genes available to it without touching an operator or a repressor.**",
      cn: "转录这件事，就是转录机器附着到 DNA 上、识别启动子序列，然后起始、延伸、终止一条 RNA；其中每一步都受到调控，而起始是其中最主要的调控点。在大肠杆菌里参与这种调控最常见的蛋白，是 σ 因子——即让 RNA 聚合酶找到并读出启动子的那个亚基。对大肠杆菌基因组序列的分析发现至少存在 7 种 σ 因子，按相对分子质量或编码基因命名：σ⁷⁰（RpoD）负责对数生长期最基本的生理功能基因，如碳代谢与生物合成；σ⁵⁴（RpoN）负责多数氮源利用基因；其余分别管热休克、鞭毛趋化和铁离子转运。**一个 RNA 聚合酶能读哪些启动子，由它携带的 σ 因子决定；所以细胞只要换 σ 因子，就换掉了自己能用的那套基因，完全不必动操纵区或阻遏蛋白。**",
      src: "现分 p.275（表 7-6）"
    },
    {
      link_en: "so what part of a σ factor actually touches the promoter?",
      link_cn: "那么 σ 因子的哪一部分真正碰到启动子？",
      en: "All σ factors contain four conserved regions, numbered 1 to 4 along the chain. Five of the seven are homologous to one another in structure and are grouped together as the σ⁷⁰ family; σ⁵⁴, the factor for nitrogen metabolism, sits outside that family. **Conserved regions 2 and 4 are the parts that bind promoter DNA, and another part of region 2 takes part in opening the double helix into single strands, so one small subunit carries both the recognition and the melting that let transcription start.**",
      cn: "所有 σ 因子都含有 4 个保守区，沿肽链依次编号 1 到 4。7 种当中有 5 种彼此结构同源，合称 σ⁷⁰ 家族；参与氮代谢的 σ⁵⁴ 不在这个家族里。**第 2 个和第 4 个保守区是结合启动区 DNA 的部分，而第 2 个保守区的另一部分还参与把双链 DNA 解开成单链——识别与解链这两件让转录得以起始的事，都由这一个小亚基完成。**",
      src: "现分 p.276（图 7-37）"
    },
    {
      link_en: "and the one factor outside the family differs in both what it reads and when it reads it",
      link_cn: "而家族之外的那一个，读什么、什么时候读，两件事都不同",
      en: "A σ⁷⁰-type factor binds the −35 and −10 regions of its promoter, and σ⁵⁴ recognises and binds the −24 and −12 regions instead. The order of assembly differs too: a σ⁷⁰-type factor can bind the promoter region only after the core enzyme has landed on the DNA strand, while σ⁵⁴ behaves like the eukaryotic TATA-binding protein (TBP) and binds a promoter on its own, with no core enzyme present. **Both the sequence σ⁵⁴ reads and the moment at which it can bind differ from the σ⁷⁰ family, so the genes for using nitrogen sources sit on promoters the ordinary machinery cannot start from.**",
      cn: "σ⁷⁰ 类因子结合的是启动子的 −35 区和 −10 区，而 σ⁵⁴ 识别并结合的是 −24 区和 −12 区。装配顺序也不同：σ⁷⁰ 类要等核心酶先结合到 DNA 链上，才能与启动子区结合；σ⁵⁴ 则类似真核生物的 TATA 区结合蛋白（TATA-binding protein，TBP），在没有核心酶时就能独立结合到启动子上。**σ⁵⁴ 读的序列和它能结合的时机，两样都与 σ⁷⁰ 家族不同；于是氮源利用基因所在的那些启动子，普通的转录机器根本发动不了。**",
      src: "现分 p.276（图 7-38）"
    },
    {
      link_en: "and swapping one factor for another is how a cell answers an emergency",
      link_cn: "而把一种因子换成另一种，正是细胞应付突发状况的办法",
      en: "In *E. coli* most transcription is run by σ⁷⁰, and under particular conditions another factor takes its place. Facing high temperature, the cell rapidly increases the number of σ³² factors, which serve the heat-shock genes; those σ³² molecules replace σ⁷⁰ in part of the RNA polymerase population and lead those polymerase molecules to heat-shock promoters, activating heat-shock transcription. **The core enzyme is untouched while the gene set it transcribes changes completely, which is the cheapest possible reprogramming: one subunit is exchanged and hundreds of promoters change status at once.**",
      cn: "大肠杆菌里主要由 σ⁷⁰ 参与转录调控，在特定情况下由别的 σ 因子取而代之。面临高温时，细胞中参与热休克基因调控的 σ³² 因子数量迅速增加；这些 σ³² 替换掉一部分 RNA 聚合酶中的 σ⁷⁰，把这些聚合酶引到热休克基因的启动子上，激活热休克基因的转录。**核心酶一点没动，它所转录的那套基因却整个换了——这是代价最小的一种重编程：换掉一个亚基，成百个启动子的状态同时改变。**",
      src: "现分 p.276"
    },
    {
      link_en: "and because the factor is that powerful, the cell keeps two ways of disabling one",
      link_cn: "而正因为这个因子如此有力，细胞留了两种手段去废掉它",
      en: "Different σ factors can work independently, and they also interact with one another in a regulatory network, which keeps prokaryotic gene expression stable and balanced as different environmental signals arrive. σ factor activity is itself controlled from two directions: proteolytic enzymes degrade the factors, and each factor has a matching anti-σ factor. **An anti-σ factor binds its own σ factor and blocks it from assembling with RNA polymerase, so a σ factor that is already made and present can still be held out of use until something takes the anti-σ factor away.**",
      cn: "不同的 σ 因子可以各自独立起作用，同时它们之间又常常交互作用、构成网络式的调控，使原核基因表达在各种环境信号下保持稳定而平衡。σ 因子自身的活性从两个方向被控制：一是被蛋白水解酶降解，二是被与之同源的抗 σ 因子（anti-σ factor）失活。**抗 σ 因子与特定的 σ 因子结合，阻止它与 RNA 聚合酶组装；于是一个已经合成、就在细胞里的 σ 因子，仍然可以被扣住不用，直到有东西把抗 σ 因子拿开。**",
      src: "现分 p.276"
    },
    {
      link_en: "and the fullest use of all this is a bacterium building a spore",
      link_cn: "把这一整套用到极致的，是一株正在造芽孢的细菌",
      en: "When nutrients run out, the Gram-positive genus *Bacillus* forms spores to survive the bad time, and spore formation needs four different σ factors. σᴱ and σᴷ are present in the mother cell, and σᶠ and σᴳ are produced once spore formation has begun. σᶠ and σᴷ are first made as inactive precursors and are converted into active forms by the action of specific proteases. **Four σ factors are distributed between two compartments, the mother cell and the developing spore, so which genes a polymerase transcribes depends on where in the sporulating cell that polymerase is.**",
      cn: "营养物缺乏时，革兰氏阳性菌 Bacillus 会形成孢子来度过困难时期，而孢子的形成需要 4 种不同的 σ 因子。σᴱ 和 σᴷ 存在于母细胞中，一旦开始形成孢子就产生 σᶠ 和 σᴳ。σᶠ 和 σᴷ 先以非活性的前体形式被合成，再经特定的蛋白酶作用转变成活性形式。**4 种 σ 因子分处母细胞与正在形成的孢子这两个区室，于是一个 RNA 聚合酶转录哪些基因，取决于它待在这个产孢细胞的哪一边。**",
      src: "现分 p.277"
    },
    {
      link_en: "and the first of the four is released by a switch three proteins deep",
      link_cn: "而四种因子里的第一种，是被一个三层深的开关放出来的",
      recall_en: "the anti-σ factor two steps up is the first layer of this switch",
      recall_cn: "上面两步讲的抗 σ 因子，就是这个开关的第一层",
      en: "σᶠ sits in the spore in an inactive form, bound to the anti-σ factor SpoⅡAB. An environmental stimulus causes SpoⅡAA — the anti-anti-σ factor — to be dephosphorylated, dephosphorylated SpoⅡAA binds SpoⅡAB specifically, and active σᶠ is released. **Three layers stack up here: SpoⅡAB holds σᶠ, SpoⅡAA takes SpoⅡAB away, and a dephosphorylation frees SpoⅡAA, so a single phosphate group leaving one protein sets an active σ factor loose.**",
      cn: "σᶠ 以非活性形式存在于孢子中，与抗 σ 因子 SpoⅡAB 结合在一起。环境刺激导致抗–抗 σ 因子 SpoⅡAA 去磷酸化，去磷酸化的 SpoⅡAA 特异性地与 SpoⅡAB 结合，于是有活性的 σᶠ 被释放出来。**开关在这里叠了三层：SpoⅡAB 扣住 σᶠ，SpoⅡAA 把 SpoⅡAB 拉走，而去磷酸化又把 SpoⅡAA 放出来；所以一个磷酸基团的脱落，最终放出的是一个有活性的 σ 因子。**",
      src: "现分 p.277（图 7-39）"
    },
    {
      link_en: "and once the first factor is active it makes the next one",
      link_cn: "而第一个因子一旦有了活性，它就去做出下一个",
      en: "Active σᶠ drives transcription of the early spore-formation genes, and those genes include σᴳ and the gene for a protease that has to enter the mother cell to degrade the σᴱ precursor. Active σᴳ then activates the late spore-formation genes together with the gene for the protease that degrades the σᴷ precursor in the mother cell. **Each σ factor transcribes both the next σ factor and the protease that activates it, so the four fire in a fixed order and spore formation runs as a timed cascade rather than as four separate decisions.**",
      cn: "活性 σᶠ 促使早期孢子形成相关基因的转录，这些基因里就包括 σᴳ，以及那个需要进入母细胞、去降解 σᴱ 前体的蛋白酶基因。活性 σᴳ 随后激活后期孢子形成相关基因，同时激活在母细胞中降解 σᴷ 前体的蛋白酶基因。**每一个 σ 因子既转录出下一个 σ 因子，又转录出激活它的那个蛋白酶；于是四个因子按固定次序依次点燃，孢子形成成为一条有时序的级联，而不是四个各自独立的决定。**",
      src: "现分 p.277"
    },
    {
      link_en: "σ factors decide where the polymerase starts; a second class of protein decides what the DNA even looks like",
      link_cn: "σ 因子决定聚合酶从哪里起始；另一类蛋白决定的，是这段 DNA 长什么样",
      en: "Bacteria contain non-specific DNA-binding proteins that maintain the higher-order structure of their DNA, and these are called histone-like proteins. H–NS is one of them: it binds DNA in a sequence-independent way through a DNA-binding domain, and a second, protein–protein interaction domain lets bound H–NS form tetramers and larger multimers that hold that structure together. H–NS also has fairly high affinity for the regulatory regions of a large number of scattered *E. coli* genes, most of which have to do with changes in environmental conditions. **H–NS sitting non-specifically over those regulatory regions represses the genes beneath it, and activating any of them requires a specific transcription factor, so an environment-responsive gene is off by default.**",
      cn: "细菌里存在一些非特异性的 DNA 结合蛋白，用来维持 DNA 的高级结构，它们被称为组蛋白类似蛋白（histone-like proteins）。H–NS 就是其中之一：它通过一个 DNA 结合结构域以非特异性的方式结合 DNA，再通过另一个蛋白质–蛋白质相互作用结构域形成四聚体或多聚体，帮着把这个高级结构撑住。H–NS 还与大肠杆菌基因组上分散的大量基因的调控区有较高亲和性，而这些基因大都与环境条件的变化有关。**H–NS 非特异性地压在这些调控区上，抑制下面那些基因的转录；要激活它们，必须有特定的转录因子参与——也就是说，一个响应环境的基因，默认状态是关着的。**",
      src: "现分 p.277"
    },
    {
      link_en: "and those specific factors are a large, well-counted population",
      link_cn: "而这些「特定的转录因子」，是一个数目清楚的大群体",
      recall_en: "AraC, the protein that both represses and activates the arabinose operon",
      recall_cn: "AraC，就是那个既阻遏又激活阿拉伯糖操纵子的蛋白",
      en: "A transcription regulatory factor is a DNA-binding protein that binds in a gene's promoter region and activates or represses its transcription, and more than 300 *E. coli* genes encode one. Most are sequence-specific; some regulate large numbers of genes and some only one or two. CRP, FNR, IHF, Fis, ArcA, NarL and Lrp together regulate 50% of all genes, while about 60 factors bind specifically to only one or two promoters each. Many promoters carry sites for several factors that have to act together before RNA polymerase can be seated. **Some factors activate one gene and repress another, and AraC does both at one gene: before it binds arabinose it represses the arabinose operon, and after it binds arabinose it activates that same operon.**",
      cn: "转录调控因子是能与基因启动子区结合、对该基因转录起激活或抑制作用的 DNA 结合蛋白，大肠杆菌基因组中有 300 多个基因编码这类蛋白。它们大多是序列特异性的；有的调控大量基因，有的只管一两个。CRP、FNR、IHF、Fis、ArcA、NarL 和 Lrp 这几个加起来调控了 50% 基因的表达，而约有 60 个转录因子只能特异结合一两个启动子。许多基因的启动子区带有好几个转录调控因子的结合位点，必须它们共同作用，RNA 聚合酶才坐得上去。**有些因子对某个基因起激活作用、对另一个基因起抑制作用，而 AraC 在同一个基因上两件都做：结合阿拉伯糖之前抑制阿拉伯糖操纵子，结合之后激活同一个操纵子。**",
      src: "现分 p.278"
    },
    {
      link_en: "initiation is one place to intervene; the terminator is another",
      link_cn: "起始是一个可以插手的地方；终止子是另一个",
      en: "An antitermination factor is a protein that prevents transcription terminating at a particular site, and while one is present RNA polymerase passes the terminator and goes on transcribing the DNA. This kind of regulation is found mainly in bacteriophages and in a few bacteria. The polymerase has to pick the factor up before it arrives, because the sequence that signals antitermination is located upstream of the terminator. **A polymerase carrying an antitermination factor gets through a stem-loop terminator that stops every other polymerase, so one terminator becomes a place where two transcript lengths are possible.**",
      cn: "抗终止因子（antitermination factor）是能在特定位点阻止转录终止的一类蛋白质；有它在时，RNA 聚合酶就能越过终止子，继续转录 DNA。这种调控机制主要见于噬菌体和少数细菌。聚合酶必须在到达终止子之前就把这个因子接上，因为抗终止作用的信号序列位于终止子的上游。**带着抗终止因子的 RNA 聚合酶，能通过那个会拦下所有其他聚合酶的茎–环终止子；于是同一个终止子处，转录本就有了长短两种可能。**",
      src: "现分 p.278（图 7-40）"
    },
    {
      link_en: "and in E. coli the factors that do it change places with the σ factor itself",
      link_cn: "而在大肠杆菌里，干这件事的因子，正是与 σ 因子换班的那一个",
      en: "The proteins that carry out antitermination in *E. coli* are the Nus proteins. Shortly after initiation the σ factor dissociates from RNA polymerase and NusA binds the core enzyme in its place, and NusA increases the polymerase's pausing at a terminator hairpin, which is what promotes antitermination. NusA and σ cannot sit on the polymerase at the same time: NusA does not come off while the polymerase is on DNA, and σ can displace NusA from free polymerase, so initiation is governed by σ and termination by NusA. **A NusA-carrying polymerase transcribing the rRNA genes *rrn* meets the boxA sequence, NusB/S10 binds it there with the help of NusG, and the polymerase reads on: *rrn* is the standard case of antitermination in a bacterium.**",
      cn: "在大肠杆菌里执行抗终止作用的是 Nus 蛋白。转录起始后不久，σ 因子从 RNA 聚合酶上解离，NusA 蛋白接替它结合到核心酶上；NusA 的结合增加了聚合酶在终止子发夹结构处的暂停，而正是这种暂停促成了抗终止。NusA 与 σ 因子不能同时结合在聚合酶上：只要聚合酶还在 DNA 上，NusA 就不解离；而 σ 因子可以取代游离聚合酶上的 NusA——于是起始由 σ 因子管，终止由 NusA 管。**当带着 NusA 的聚合酶转录 rRNA 基因 rrn、遇到 boxA 序列时，NusB/S10 抗终止因子在 NusG 的帮助下与它结合，聚合酶继续读下去——rrn 基因的转录，正是细菌里抗终止作用的典型例子。**",
      src: "现分 p.278–279（图 7-41）"
    }
  ]
};

/* ===================================================================== M-7-7
   The stringent response lives HERE, in 7.7.8, and not in §7.6 — the brief for the
   OCR run expected it one section earlier. ppGpp is introduced in M-7-4 as the thing
   that shuts the rrnE P₁ promoter; this node is where it is actually explained. */
window.BIOLITE_SPINE["M-7-7"] = {
  assumed: ["DNA", "RNA", "gene", "operon", "promoter", "operator", "repressor",
            "activator", "transcription", "translation", "mRNA", "tRNA", "rRNA",
            "ribosome", "RNA polymerase", "polymerase", "protein", "enzyme",
            "chromosome", "genome", "codon", "anticodon", "start codon",
            "stop codon", "reading frame", "open reading frame", "base pairing",
            "secondary structure", "stem-loop", "hairpin", "nuclease", "protease",
            "bacteriophage", "phage", "amino acid", "nucleotide", "GTP", "ATP",
            "metabolite", "glycolysis", "glycogen", "replication", "mutation",
            "system", "region", "sequence", "element", "factor", "binding",
            "domain", "target", "signal", "activation", "activity", "structure",
            "complex", "subunit", "conformation", "shift", "stability", "half-life",
            "template", "network"],
  nodeTitle_en: "Post-transcriptional control in bacteria",
  nodeTitle_cn: "转录后调控",
  title_en: "Control moves off the DNA and onto the message, and **a bacterial mRNA lasts two to three minutes, so a decision taken on the message is undone as fast as the message itself turns over**",
  title_cn: "调控从 DNA 上挪到 mRNA 上，而**细菌 mRNA 的半衰期只有 2~3 min，所以在 mRNA 上做的决定，随着这条 mRNA 的更新就被撤销了——撤销得和它一样快**",
  steps: [
    {
      en: "Regulating transcription is the most economical thing a cell can do: a protein it does not need is a protein it need not transcribe at all. After transcription has made the mRNA, a second layer of adjustment works at the level of translation and after it, and that layer supplements what transcription decided, fitting expression more closely to the cell's own needs and to changes in the world outside. **All cells carry nucleases for clearing away useless mRNA, and a typical bacterial mRNA has a half-life of two to three minutes, so anything decided on the message is short-lived by construction.**",
      cn: "转录水平的调控是细胞最经济的调控方式：用不着某种蛋白，就干脆用不着转录它。而在转录做出 mRNA 之后，还有第二层调节在翻译及翻译后的水平上进行；这一层是对转录调控的补充，使基因表达更贴合生物自身的需求和外界条件的变化。**所有细胞都有一系列核酸酶用来清除无用的 mRNA，而一个典型的细菌 mRNA 半衰期只有 2~3 min；所以凡是在 mRNA 上做出的决定，天然就是短命的。**",
      src: "现分 p.279, p.281"
    },
    {
      link_en: "and the first switches are written into the message itself, starting at the point where translation begins",
      link_cn: "而最先的一批开关就写在 mRNA 自己身上，从翻译起始的那一点开始",
      en: "Prokaryotic translation begins when the 30S ribosomal subunit recognises the start codon AUG on an mRNA, which is what fixes the open reading frame; the recognition is done by base pairing with the 3′-UAC-5′ carried in fMet-tRNA, the initiator tRNA. Prokaryotes also use alternative start codons: 14% of *E. coli* genes begin with GUG, 3% with UUG, and two genes use AUU. These uncommon start codons pair with fMet-tRNA more weakly than AUG does, which lowers translation efficiency. **Replacing an AUG with GUG or UUG cut the translation efficiency of the mRNA eightfold, so which start codon a gene uses is already a setting for how much protein it will make.**",
      cn: "原核生物的翻译，靠核糖体 30S 亚基识别 mRNA 上的起始密码子 AUG——正是这一步定下了开放读码框；识别由起始 tRNA（fMet–tRNA）中所含的碱基配对信息（3′–UAC–5′）完成。原核里还存在其他可选择的起始密码子：14% 的大肠杆菌基因用 GUG，3% 用 UUG，另有两个基因用 AUU。这些不常见的起始密码子与 fMet–tRNA 的配对能力弱于 AUG，因而翻译效率降低。**把 AUG 换成 GUG 或 UUG，mRNA 的翻译效率降到原来的八分之一；所以「用哪个起始密码子」本身，已经是在设定这个基因将做出多少蛋白。**",
      src: "现分 p.279"
    },
    {
      link_en: "and just upstream of that codon sits the site the ribosome actually lands on",
      link_cn: "而就在这个密码子的上游，是核糖体真正落脚的那个位点",
      en: "Translation of the genetic message begins at the ribosome binding site (RBS) on the mRNA, which is generally the untranslated stretch upstream of the start codon AUG and includes the SD sequence. That SD sequence pairs with the 3′ end of the ribosome's own 16S rRNA, which draws the ribosome onto the mRNA and favours initiation. **How strongly an RBS binds is set by two things: the structure of the SD sequence, and its distance from AUG — 4 to 10 nucleotides of spacing works, and 9 nucleotides is the best of them.**",
      cn: "遗传信息的翻译起始于 mRNA 上的核糖体结合位点（ribosome binding site，RBS），一般就是起始密码子 AUG 上游那段包含 SD 序列在内的非翻译区。SD 序列与核糖体自身 16S rRNA 的 3′ 端互补配对，把核糖体拉到 mRNA 上，有利于翻译起始。**RBS 的结合强度取决于两件事：SD 序列的结构，以及它与 AUG 之间的距离——相距 4~10 个核苷酸为佳，其中 9 个核苷酸最好。**",
      src: "现分 p.279"
    },
    {
      link_en: "and the shape the 5′ end folds into decides whether that site can be reached at all",
      link_cn: "而 5′ 端折成什么形状，决定了这个位点够不够得着",
      en: "The secondary structure of the mRNA is an equally important part of initiation, because the 30S subunit can only bind if the 5′ end of the mRNA has a certain spatial arrangement. Small changes in the SD sequence often produce hundred-fold or thousand-fold differences in expression efficiency, because changed nucleotides change the free energy of that 5′ structure and so change how well the 30S subunit binds. *lacI* is the worked case: it is transcribed constitutively from a weak promoter, and its 5′ UTR sequence is unfavourable for ribosome binding, so it is translated inefficiently. **Weak translation of *lacI* mRNA keeps a cell down to about ten LacI repressor tetramers, and holding the repressor that low is what lets a little lactose make enough inducer to lift repression fast.**",
      cn: "mRNA 的二级结构同样是翻译起始的重要因素，因为 30S 亚基必须在 mRNA 5′ 端有一定空间结构时才结合得上去。SD 序列的微小变化，往往造成表达效率上百倍甚至上千倍的差异；因为核苷酸一变，5′ 端二级结构的自由能就变了，30S 亚基与 mRNA 的结合随之改变。lacI 是现成的例子：它在弱启动子控制下组成型转录，其 5′ UTR 的序列又不利于核糖体结合，于是翻译效率很低。**lacI mRNA 翻译得差，使每个细胞里通常只有约 10 个 LacI 阻遏蛋白四聚体；把阻遏蛋白压到这么低，正是少量乳糖就能生成足够诱导物、迅速解除阻遏的原因。**",
      src: "现分 p.279–280"
    },
    {
      link_en: "and some messages carry a whole sensing device in that same 5′ region",
      link_cn: "而有些 mRNA 在同一段 5′ 区里，干脆带了一整套感受装置",
      en: "Some mRNAs contain a regulatory element called a riboswitch, which is a structured RNA sequence that in prokaryotes usually lies in the 5′ UTR of the message. A riboswitch senses conditions inside the cell — the concentration of a metabolite, the concentration of an ion, the temperature — and answers by changing its own secondary structure and with it its regulatory behaviour, which changes the expression state of the gene. **A riboswitch can act on transcription initiation, elongation or termination, on the binding of the ribosome to the mRNA, or on the stability of the mRNA, so an element inside the message can intervene at whichever step is nearest to it.** In eukaryotes a riboswitch can also work through splicing, which is the step that cuts pieces out of a transcript and rejoins what remains.",
      cn: "有些 mRNA 含有一种叫核糖开关（riboswitch）的表达调控元件，它是一段具有复杂结构的 RNA 序列，在原核生物中通常位于 mRNA 的 5′ UTR。核糖开关能感受细胞内的状况——代谢物浓度、离子浓度、温度——并以改变自身二级结构、进而改变自身调控功能的方式作答，从而改变基因的表达状态。**核糖开关可以作用于转录的起始、延伸或终止，可以作用于核糖体与 mRNA 的结合，也可以作用于 mRNA 的稳定性；也就是说，长在 mRNA 里的一个元件，可以在离它最近的那一步上插手。**在真核生物中，核糖开关还能通过控制 mRNA 的剪接来调控表达。",
      src: "现分 p.280"
    },
    {
      link_en: "and the same sensing element can be wired to two completely different steps",
      link_cn: "而同一个感受元件，可以接到两个完全不同的步骤上",
      en: "In *Bacillus subtilis* many genes of the methionine pathway carry about 200 bp of RNA in their 5′ UTR that acts as a SAM-sensing riboswitch, SAM being the metabolite of that pathway which it binds. In some of those genes, the riboswitch with no SAM bound folds so that the RBS is left exposed and the ribosome binds and translates the protein; once SAM binds, the secondary structure changes, the RBS is closed off and translation is inhibited. In other genes the same SAM-sensing riboswitch, on binding SAM, instead forms a transcription-terminating conformation upstream of the coding region and ends transcription early. **One ligand acts at two levels in two different genes: SAM shuts the ribosome binding site in some messages and builds a terminator in others.**",
      cn: "在枯草杆菌（Bacillus subtilis）中，许多参与甲硫氨酸途径的基因在 5′ UTR 有一段约 200 bp 的 RNA，被认为是 SAM 感受型核糖开关（SAM-sensing riboswitch）——SAM 就是它所结合的、该途径的代谢物。在其中一些基因里，核糖开关没有结合 SAM 时，RNA 的二级结构让核糖体结合位点（RBS）暴露在外，核糖体结合上去开始翻译；一旦结合了 SAM，二级结构改变，RBS 被封闭，翻译被抑制。而在另一些基因里，同样的 SAM 感受型核糖开关一旦结合 SAM，则在编码区上游形成转录终止的构象，提前终止转录。**同一个配体在不同基因里作用于两个层次：SAM 在有些 mRNA 上关掉核糖体结合位点，在另一些 mRNA 上则搭出一个终止子。**",
      src: "现分 p.280（图 7-42）"
    },
    {
      link_en: "and one of these elements does more than change shape — it cuts",
      link_cn: "而这类元件里有一个不只是改变形状——它直接下刀",
      en: "The *B. subtilis* gene *glmS* encodes an enzyme that synthesises glucosamine-6-phosphate (GlcN6P), and the 5′ UTR of *glmS* mRNA contains a ribozyme, which is a stretch of RNA that acts as a catalyst. With no GlcN6P bound to it, that ribozyme is quiet and *glmS* mRNA is translated normally. **Once the enzyme has raised the GlcN6P concentration, GlcN6P binds the ribozyme, the activated ribozyme cuts the *glmS* mRNA and translation stops, so the product of a reaction destroys the message for the enzyme that made it.**",
      cn: "枯草杆菌的 glmS 基因编码一种合成葡糖胺–6–磷酸（GlcN6P）的酶，而 glmS mRNA 的 5′ UTR 序列中有一段核酶（ribozyme）结构——核酶就是本身具有催化活性的一段 RNA。没有 GlcN6P 与该核酶结合时，它安静不动，glmS mRNA 正常翻译出蛋白质。**当翻译出的酶催化反应、把细胞中 GlcN6P 的浓度提高之后，GlcN6P 就与核酶结合，有活性的核酶切割 glmS mRNA、阻止翻译——反应的产物销毁的，正是造出这个反应的那条 mRNA。**",
      src: "现分 p.280–281（图 7-43）"
    },
    {
      link_en: "and one of them senses no molecule at all",
      link_cn: "而其中还有一个，什么分子都不感受",
      en: "Some riboswitches answer to something other than a metabolite. The 5′ UTR of the *pfrA* gene of *Listeria monocytogenes* holds a hairpin structure called a thermosensor RNA, and at low temperature that hairpin covers the RBS. **Raising the temperature from 30 ℃ to 37 ℃ opens the hairpin and releases the RBS, and *pfrA* expression rises fivefold, so the message is the thermometer and no sensing protein is involved at all.**",
      cn: "有些核糖开关不受代谢物调节，而是受别的因素影响。单核增生性李斯特菌（Listeria monocytogenes）pfrA 基因的 5′ UTR 有一段发夹结构，被称为热敏 RNA（thermosensor RNA）；低温时这个发夹把 RBS 位点封住。**温度由 30 ℃ 升到 37 ℃ 时，发夹打开、释放出 RBS 位点，pfrA 基因的表达水平提高 5 倍——温度计就是这条 mRNA 本身，全程没有任何感受蛋白参与。**",
      src: "现分 p.281（图 7-44）"
    },
    {
      link_en: "a message can also be regulated by how long it is allowed to survive",
      link_cn: "一条 mRNA 还可以靠「允许它活多久」来调控",
      recall_en: "the nucleases and the two-to-three-minute half-life from the first step",
      recall_cn: "第一步说的那些核酸酶，以及 2~3 min 的半衰期",
      en: "How likely an mRNA molecule is to be degraded depends on its secondary structure, and *E. coli* has a system that exploits exactly that, the CsrAB system. CsrA is an RNA-binding protein and CsrB is a non-coding RNA molecule that can hold up to 18 CsrA proteins at once; CsrA can bind either the mRNAs it regulates or the CsrB RNA. In a resting cell sugar is stored as glycogen and in fast growth sugar is spent through glycolysis, and CsrAB balances those two: CsrA activates glycolysis and represses glucose and glycogen synthesis. **CsrA bound to the mRNA of a *glg* glycogen-synthesis gene leaves that mRNA open to nuclease attack, degradation speeds up and the mRNA can no longer serve as a template, so the protein binds the message and the cell's own nucleases do the rest.**",
      cn: "一个 mRNA 分子被降解的可能性，取决于它的二级结构；大肠杆菌有一套正是利用这一点的系统——CsrAB 调节系统。CsrA 是一个 RNA 结合蛋白，CsrB 是一个非编码的 RNA 分子，每个 CsrB 分子最多能结合 18 个 CsrA 蛋白；CsrA 既可以结合它所调控的 mRNA，也可以结合 CsrB。静止期细胞把糖以糖原形式储存，快速生长期则通过糖酵解消耗糖，这两个过程的平衡就由 CsrAB 完成：CsrA 激活糖酵解，抑制葡萄糖和糖原的合成。**CsrA 一结合到糖原合成基因 glg 的 mRNA 上，这条 mRNA 就变得易受核酸酶攻击、降解加快，不能再作为蛋白质合成的模板——蛋白只负责结合，其余的由细胞自己的核酸酶完成。**",
      src: "现分 p.281（图 7-45）"
    },
    {
      link_en: "and proteins bound to a message can push it either way",
      link_cn: "而结合在 mRNA 上的蛋白，可以把它往两个方向推",
      en: "Some mRNA-binding proteins in bacteria activate translation of their target gene instead of blocking it. The *E. coli* BipA protein has a ribosome-dependent GTPase activity, and it activates translation of *fis* mRNA, which encodes a transcription regulatory protein; BipA is required for Fis protein to be made. **mRNA-specific repressor proteins do the opposite job: they compete with the ribosome for the mRNA molecule itself and so block the initiation of translation.**",
      cn: "细菌中有些 mRNA 结合蛋白，做的是激活靶基因翻译的事，而不是挡住它。大肠杆菌 BipA 蛋白具有依赖于核糖体的 GTP 酶活性，能激活转录调控蛋白基因 fis 的 mRNA 的翻译，是 Fis 蛋白合成所必需的。**mRNA 特异性的抑制蛋白做的是相反的事：它们与核糖体竞争性地结合 mRNA 分子本身，从而抑制翻译的起始。**",
      src: "现分 p.281–282"
    },
    {
      link_en: "and the clearest case of that is a protein whose own message is what it blocks",
      link_cn: "而这件事最清楚的例子，是一个蛋白挡住的正是自己的那条 mRNA",
      en: "Ribosomal proteins in *E. coli* show translational repression of exactly this kind. rRNA genes are transcribed and translated normally, producing ribosomal proteins, and those proteins have a strong affinity for rRNA molecules, so as long as the cell holds enough rRNA the ribosomal proteins bind rRNA and never touch their own mRNA. **When rRNA runs short the ribosomal proteins have nothing else to bind and settle on their own mRNA, closing its RBS and stopping their own synthesis, which keeps rRNA and ribosomal protein in step with each other.**",
      cn: "大肠杆菌的核糖体蛋白就存在这种翻译抑制现象。rRNA 基因正常转录、翻译，产生核糖体蛋白；由于这些蛋白与 rRNA 分子的亲和力较强，只要细胞中有足够的 rRNA，核糖体蛋白就都结合在 rRNA 上，不会去碰自身的 mRNA。**一旦 rRNA 不足，核糖体蛋白无处可结合，只能结合到自身 mRNA 上，把该 mRNA 的 RBS 位点封闭、停止自身的合成——于是 rRNA 与核糖体蛋白在数量上始终配得上。**",
      src: "现分 p.282（图 7-46）"
    },
    {
      link_en: "and the regulator does not have to be a protein at all",
      link_cn: "而调控者根本不一定是蛋白",
      en: "Under environmental stress — oxidative stress, osmotic pressure, temperature — bacteria make non-coding small RNA molecules 50 to 500 nt long, and a non-coding RNA of a prokaryotic cell is called an sRNA. These molecules bind either mRNA or protein, and they regulate expression by changing the stability of a target mRNA, by affecting protein–RNA binding, or by acting on translation of that mRNA. Prokaryotic sRNAs are mostly trans-encoded, meaning they are transcribed somewhere else on the chromosome than their target. **Most of them need the RNA chaperone Hfq, which is a protein that assists their action, and they pair with a target mRNA loosely rather than exactly, so one sRNA can repress or promote several targets and speed or slow their degradation.**",
      cn: "在环境压力（氧化压力、渗透压、温度等）之下，细菌会产生一些长度在 50~500 nt 之间的非编码小 RNA；原核细胞中的这类非编码 RNA 叫 sRNA（small non-coding RNA）。它们能结合 mRNA 或蛋白质，通过改变靶 mRNA 的稳定性、影响蛋白质–RNA 的结合、或者作用于该 mRNA 的翻译来调节表达。原核 sRNA 以反式编码为主，也就是说它转录自染色体上与靶基因不同的位置。**大部分 sRNA 需要 RNA 分子伴侣 Hfq 蛋白协助才能发挥作用，而且它们与靶 mRNA 是不严格的碱基互补配对；正因如此，一条 sRNA 可以抑制或促进好几个不同靶标的翻译，也可以加速或减缓它们的降解。**",
      src: "现分 p.282–283",
      see: [{ "id": "M-8-4", "en": "noncoding RNA as a regulator in eukaryotes", "cn": "真核里的非编码 RNA 调控" }]
    },
    {
      link_en: "the plainest case pairs a message with an RNA copied from the opposite strand",
      link_cn: "最直白的一例，是把 mRNA 与一条从对面链抄出来的 RNA 配到一起",
      en: "Bacterioferritin stores the cell's excess iron, and it is encoded by the *bfr* gene, while a neighbouring gene *anti-bfr* encodes an antisense RNA — an RNA complementary to the *bfr* message. *bfr* is transcribed into mRNA whatever the iron concentration is, and the transcription of *anti-bfr* is what varies, because it is controlled by the Fur protein, which senses iron. With too much iron in the cell, Fur acts as a repressor and switches off the many operons of iron uptake, *anti-bfr* among them, so *bfr* mRNA is translated and the excess iron is stored. **At low iron, *anti-bfr* is transcribed heavily, the antisense RNA pairs with *bfr* mRNA and translation of bacterioferritin is blocked, so the storage protein is made only when there is something to store.**",
      cn: "细菌铁蛋白（bacterioferritin）用来储存细胞中过剩的铁离子，它由 bfr 基因编码；旁边的 anti-bfr 基因则编码一条反义 RNA（antisense RNA），即与 bfr mRNA 互补的一条 RNA。无论铁离子浓度高低，bfr 基因都照常转录成 mRNA；变的是 anti-bfr 的转录，因为它受能感应铁离子浓度的 Fur 蛋白调控。细胞中铁过多时，Fur 作为抑制因子关掉众多与铁摄取有关的操纵子，anti-bfr 也在其中；于是 bfr mRNA 正常翻译，过剩的铁被储存起来。**铁离子浓度低时，anti-bfr 大量转录，反义 RNA 与 bfr mRNA 配对，细菌铁蛋白的翻译被阻止——于是这个储存蛋白只在真有东西可储存时才做出来。**",
      src: "现分 p.283（图 7-47）"
    },
    {
      link_en: "and two named sRNAs show the same molecule class working in both directions",
      link_cn: "而两条有名字的 sRNA，显示同一类分子可以往两个方向作用",
      en: "OxyS is an sRNA induced by oxidative stress in *E. coli*, and DsrA is one induced by low temperature; both are trans-encoded and each regulates the translation of several genes. OxyS pairs with part of the ribosome binding site of *fhlA* mRNA — *fhlA* encodes a transcription activator of formate metabolism — and also with a specific sequence inside the *fhlA* coding region, blocking the ribosome and inhibiting translation. DsrA does the opposite at *rpoS*, the gene for a stress-related σ factor: its first stem-loop, with the help of Hfq, pairs with the leader of *rpoS* mRNA and breaks the stem-loop that was covering the ribosome binding site. **Opening a structure that hid an RBS is how DsrA activates translation, and covering an RBS is how OxyS blocks it, so the same kind of molecule turns a message on or off according to where it pairs.**",
      cn: "OxyS 是大肠杆菌中受氧化压力诱导产生的 sRNA，DsrA 是受低温诱导产生的 sRNA；两者都以反式编码的方式调控多个基因的翻译。OxyS 与 fhlA mRNA（fhlA 编码细菌甲酸盐代谢中的转录激活蛋白）核糖体结合位点的部分序列配对，也与 fhlA 编码序列中的特定序列配对，挡住核糖体，抑制翻译。DsrA 在 rpoS（编码一个与胁迫相关的 σ 因子）上做的正相反：它的第一个茎–环在 Hfq 蛋白帮助下与 rpoS mRNA 的前导序列互补配对，破坏了原本盖住核糖体结合位点的茎–环结构。**打开一个藏住 RBS 的结构，是 DsrA 激活翻译的办法；盖住一个 RBS，是 OxyS 阻断翻译的办法——同一类分子，按配对的位置不同，把一条 mRNA 打开或关上。**",
      src: "现分 p.283–284（图 7-48）"
    },
    {
      link_en: "translation can also be throttled by the codons a gene happens to be written in",
      link_cn: "翻译还可以被「这个基因恰好用了哪些密码子」卡住",
      en: "*dnaG*, *rpoD* and *rpsU* lie in one *E. coli* operon and yet their products differ enormously in number: 50 copies of DnaG, which is the primase that synthesises the RNA primer ahead of each Okazaki fragment, against 2 800 copies of RpoD and 40 000 copies of RpsU. Too much primase harms the cell, so the difference has to be made after transcription. Counting codon usage shows how: the rare codon AUA is almost never used in efficiently expressed structural proteins (1%) or in the σ subunit (0%), and makes up 32% of the isoleucine codons of *dnaG*. Regulatory proteins present in small numbers, LacI, AraC and TrpR, share that pattern. **A cell holds few tRNAs for a rare codon, so a gene written with many of them is translated haltingly, and its total output stays low even though it is transcribed on the same mRNA as its neighbours.**",
      cn: "dnaG、rpoD 和 rpsU 同属大肠杆菌基因组上的一个操纵子，产物数量却相差极大：dnaG 编码的引物酶（在每个冈崎片段之前合成 RNA 引物的那个酶）每个细胞仅 50 个拷贝，而 RpoD 有 2 800 个、RpsU 高达 40 000 个。引物酶过多对细胞有害，所以这个差别只能在转录之后做出来。统计密码子使用频率就看得出办法：稀有密码子 AUA 在高效表达的结构蛋白中几乎不用（1%）、在 σ 亚基中为 0%，而在 dnaG 中占其异亮氨酸密码子的 32%。细胞内含量很低的调控蛋白 LacI、AraC、TrpR，密码子使用频率也是同样的格局。**细胞里对应稀有密码子的 tRNA 很少，所以大量使用这些密码子的基因翻译起来走走停停；哪怕它与邻居转录在同一条 mRNA 上，产量也一直很低。**",
      src: "现分 p.284–285（表 7-7）"
    },
    {
      link_en: "and where two genes must come out in equal numbers, the message is written so that one ribosome does both",
      link_cn: "而当两个基因必须等量产出时，mRNA 就写成让同一个核糖体一口气做完两个",
      en: "Overlapping genes were first found in the *E. coli* phage ΦX174, where gene B lies inside gene A and gene E inside gene D, different reading frames giving different proteins from the same DNA. In the *trp* operon the overlap does regulatory work: the stop codon of *trpE* and the start codon of *trpD* share one nucleotide, in the sequence UGA immediately followed by AUG. **A ribosome finishing *trpE* is standing in an initiation context at that instant, so the same ribosome translates straight on into *trpD*, and this translational coupling is what keeps two neighbouring gene products at equal numbers.** *trpB* and *trpA* overlap in the same way and are also equimolar. The *gal* operon does it with a variant: the stop codon of *galT* is three nucleotides from the start codon of *galK*, but *galK*'s SD sequence lies before *galT*'s stop codon, and a ribosome covers 20 nucleotides of mRNA, so it reaches the SD sequence without falling off.",
      cn: "重叠基因最早是在大肠杆菌噬菌体 ΦX174 中发现的：B 基因包含在 A 基因内，E 基因包含在 D 基因内，用不同的阅读方式从同一段 DNA 得到不同的蛋白质。在 trp 操纵子里，这种重叠承担了调控功能：trpE 的终止密码子与 trpD 的起始密码子共用一个核苷酸——UGA 之后紧接着 AUG。**核糖体翻译完 trpE 的那一刻，正好处在起始环境中，于是同一个核糖体直接接着翻译 trpD；这种翻译耦联（translational coupling），正是让相邻两个基因产物数量相等的手段。**trpB 与 trpA 也以同样方式重叠，产物同样等量。gal 操纵子用的是一个变体：galT 的终止密码子与 galK 的起始密码子相隔 3 个核苷酸，但 galK 的 SD 序列位于 galT 终止密码子之前，而核糖体在 mRNA 上可以覆盖 20 个核苷酸，因此它还没脱落就够到了那段 SD 序列。",
      src: "现分 p.285"
    },
    {
      link_en: "a protein can also repress translation the way one represses transcription, and one virus needs exactly that",
      link_cn: "蛋白也可以像阻遏转录那样阻遏翻译，而有一种病毒正需要这个",
      en: "The RNA phage Qβ of *E. coli* carries three genes, 5′ to 3′: the maturation protein gene A, used in assembly and adsorption, the coat protein gene, and the RNA replicase gene. When the phage infects a cell its RNA, called the (+) strand, is immediately used as a template to make replicase, which joins host subunits to do the copying — and by then many ribosomes are translating along the (+) strand 5′ to 3′, against the 3′-to-5′ direction in which the replicase must synthesise the (−) strand. **Qβ replicase acts as a translational repressor: bound to the coat protein gene's translation initiation region it stops any new ribosome initiating, and once the ribosomes already running drop off, replication begins on a clear strand.** Purified replicase shows this in a cell-free reaction, and the same molecule binds both that initiation region and the 3′ end of the (+) strand; both sites carry the sequence CUUUUAAA, which forms a stable stem-loop.",
      cn: "大肠杆菌 RNA 噬菌体 Qβ 的基因组有 3 个基因，从 5′ 到 3′ 依次是：与噬菌体组装和吸附有关的成熟蛋白基因 A、外壳蛋白基因、RNA 复制酶基因。噬菌体感染细菌后，进入细胞的这条称为 (+) 链的 RNA 立即作为模板指导合成复制酶，复制酶再与宿主中已有的亚基结合行使复制功能；可此时 (+) 链上已经有不少核糖体在从 5′ 向 3′ 翻译，而复制酶合成 (−) 链的方向是从 3′ 到 5′，两者相撞。**Qβ 复制酶用「充当翻译阻遏物」来解决这个矛盾：纯化的复制酶结合到外壳蛋白基因的翻译起始区上，核糖体便无法在那里起始；已经起始的翻译仍继续到完毕、核糖体脱落之后，结合在 (+) 链 3′ 端的复制酶就在一条清空的链上开始复制。**它的这两个结合位点上都有 CUUUUAAA 序列，能形成稳定的茎–环结构。",
      src: "现分 p.286"
    },
    {
      link_en: "and one last signal shuts the whole apparatus down when the building blocks run out",
      link_cn: "最后还有一个信号，在原料耗尽时把整套机器关掉",
      en: "An *E. coli* auxotroph (*trp*⁻*his*⁻) grown without an essential amino acid drops its protein synthesis rate at once, and its RNA synthesis rate falls as well; since tryptophan and histidine are not precursors of RNA, that fall is a secondary consequence of protein synthesis being blocked. Another mutant stops protein synthesis under the same starvation while its RNA synthesis rate holds up. The first behaviour is called stringent control, genotype *rel*⁺, and the second relaxed control, genotype *rel*⁻. **Starved *rel*⁺ cells make guanosine tetraphosphate (ppGpp) and guanosine pentaphosphate (pppGpp), which *rel*⁻ cells cannot; the two showed up as spots on a chromatogram and were named the magic spots.**",
      cn: "大肠杆菌营养缺陷型（trp⁻his⁻）在缺少某种必需氨基酸的培养基上生长时，蛋白质合成速度立即下降，RNA 合成速度也跟着下降；由于色氨酸和组氨酸并不是 RNA 的前体，这个下降是蛋白质合成受阻后的次级反应。另一个突变株在同样的饥饿条件下蛋白质合成虽然停止，RNA 合成速度却没有下降。前一种现象叫严紧控制（基因型 rel⁺），后一种叫松散控制（基因型 rel⁻）。**缺乏氨基酸时，rel⁺ 菌株能合成鸟苷四磷酸（ppGpp）和鸟苷五磷酸（pppGpp），rel⁻ 菌株则不能；这两种化合物当年是在层析谱上作为斑点被检出的，因此得名魔斑（magic spot）。**",
      src: "现分 p.286"
    },
    {
      link_en: "and the signal that triggers them is read off the ribosome itself",
      link_cn: "而触发它们的信号，是从核糖体上读出来的",
      recall_en: "ppGpp shutting the rrnE P₁ promoter, from the multi-promoter operons",
      recall_cn: "多启动子操纵子那步里，把 rrnE 的 P₁ 关掉的正是 ppGpp",
      en: "In a vigorously growing cell 65% to 90% of the tRNA is carrying an amino acid. When amino acids run short, uncharged tRNA becomes more abundant and still binds the A site of the ribosome, and uncharged tRNA sitting in the A site is the signal for stringent control. Normal elongation needs GTP to bring aminoacyl-tRNA to the growing chain, and with that reaction halted the accumulated GTP is used instead as the precursor for the magic spots. **RelA is the ATP–GTP 3′ pyrophosphotransferase that synthesises the magic spots, with the translation factors EFTu and EFG also required, while a separate gene *spoT* encodes the enzyme that degrades (p)ppGpp once conditions recover.**",
      cn: "旺盛生长的细胞里，65%~90% 的 tRNA 是载有氨基酸的。氨基酸缺乏时，不负载氨基酸的 tRNA 增多，它仍然能与核糖体的 A 位结合；而核糖体 A 位上这种不负载氨基酸的 tRNA，就是细胞产生严紧控制的信号。正常延伸时，把 AA–tRNA 送到正在延伸的多肽上需要 GTP；这一反应停下来后，大量 GTP 便被改用作合成魔斑核苷酸的前体。**RelA 就是合成魔斑核苷酸的那个 ATP–GTP 3′ 焦磷酸转移酶，此外还需要翻译因子 EFTu 和 EFG；而另一个基因 spoT 编码降解 (p)ppGpp 的酶，条件恢复时由它把这个信号撤掉。**",
      src: "现分 p.286（图 7-49）"
    },
    {
      link_en: "and one small molecule then reaches every part of the apparatus at once",
      link_cn: "于是一个小分子同时伸手到这套机器的每一个部件上",
      en: "ppGpp is pleiotropic, meaning it acts on many things at once: it alters the specificity with which RNA polymerase binds promoters, and it affects the activity of ribosomal proteins, which together make it the key to stringent control. With the cell well fed, ppGpp is low and IF2-mediated translation initiation runs freely; when nutrients are poor and amino acids scarce, ppGpp rises sharply, inhibits the IF2-mediated initiation step, and 70S ribosomes that never entered initiation pile up, so the proportion of active ribosomes falls. **One nucleotide reaches the whole apparatus: ppGpp suppresses ribosome and macromolecule synthesis, activates certain amino-acid operons and activates proteases, which is why ppGpp and cAMP are called alarmones.**",
      cn: "ppGpp 是多效性的，也就是同时作用于许多环节：它既影响 RNA 聚合酶与启动子结合的专一性，又影响核糖体蛋白的活性，二者合起来使它成为细胞内严紧控制的关键。营养状况好时胞内 ppGpp 水平较低，IF2 介导的翻译起始顺利进行；营养状况差、缺乏氨基酸时，ppGpp 水平大大提高，抑制 IF2 介导的翻译起始步骤，没能进入起始的 70S 核糖体单体大量堆积，活性核糖体的比例随之降低。**一个核苷酸就伸到了整套机器的各处——抑制核糖体与其他大分子的合成、活化某些氨基酸操纵子的转录、关掉与氨基酸运转无关的系统、活化蛋白水解酶——正因如此，ppGpp 和 cAMP 这类物质被称为警报素（alarmone）。**",
      src: "现分 p.287（图 7-50）"
    }
  ]
};
