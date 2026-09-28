/* Spine for chapter 6 — 分子生物学研究法(下)·基因功能研究技术.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 211–236.

   WHY THIS NODE EXISTS AT ALL. Across all six existing trainers, "gene knockout"
   first scored COVERED — but only because the probe regex contained crispr|cas9 and
   matched a Lehninger node. Split apart: ES-cell gene targeting scores ZERO in every
   corpus, Cre-lox and knockout mice have no titled node anywhere, and CRISPR itself
   is mentioned 193 times without one node being named after it. This is the widest
   measured gap of the whole survey.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. G418 and ganciclovir; a black mouse in a white litter;
      exons IV–VI; acetosyringone leaking out of a wounded root.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   THE ARC. One question runs through all sixteen steps: you have a sequence and no
   idea what it does, so you must break it inside a living organism and watch. Every
   technique here is an answer to a difficulty that creates — homologous recombination
   is too rare to find, so selection is rebuilt to make survival depend on it; a
   complete knockout kills the embryo, so the cut is put under a promoter you control;
   the animal route does not work in plants, so a soil bacterium is borrowed; and
   finally the double-strand break is made directly, which is where CRISPR comes in. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-6-2 */
window.BIOLITE_SPINE["M-6-2"] = {
  /* Declared rather than left implicit, as SPINE_SPEC asks. The second group are
     ordinary English words that happen to also be glossary entries — a reader who
     has got this far holds "target", "selection" and "domain" in their everyday
     sense, and writing a definition for each would pad every step without teaching
     anything. Nothing load-bearing is parked here: the terms this node actually
     leans on (PNS, HSV-tk, Ti plasmid, TALEN, nuclease, PAM, sgRNA) are introduced
     in the prose at first use. */
  assumed: ["DNA", "RNA", "gene", "exon", "intron", "promoter", "enhancer", "plasmid",
            "chromosome", "genome", "enzyme", "protein", "cell", "embryo", "mouse",
            "bacterium", "PCR", "Southern blot", "restriction enzyme", "electrophoresis",
            "homologous recombination", "phenotype", "mutation", "transcription",
            "target", "targeting", "insertion", "selection", "domain"],
  nodeTitle_en: "Gene knockout techniques",
  nodeTitle_cn: "基因敲除技术",
  title_en: "You have a sequence and no idea what it does, so you break it in a living animal — and **every technique here answers a difficulty that creates**",
  title_cn: "你有一段序列，却不知道它干什么，于是你在活体里把它弄坏——而**每一项技术，都是在解决「在活体里弄坏一个基因」所带来的一个难处**",
  steps: [
    {
      en: "Classical genetics (forward genetics) starts at a mutant with an odd phenotype and hunts backwards for the gene responsible. Reverse genetics runs the other way: it starts from a sequence already read off the genome, breaks it on purpose, and reads the function off whatever then goes wrong. **Gene knockout — 基因打靶 — is that deliberate breaking, and it does it by homologous recombination between DNA you introduce and the chromosome itself.**",
      cn: "经典遗传学（forward genetics，正向遗传学）是从一个表型古怪的突变体出发，往回追是哪个基因造成的。反向遗传学（reverse genetics）反着走：从基因组上已经读出来的一段序列出发，故意把它弄坏，再从「坏了以后出什么问题」反推它的功能。**基因敲除（gene knock-out）又叫基因打靶，就是这个「故意弄坏」的动作，靠的是导入的外源 DNA 与染色体 DNA 之间发生同源重组。**",
      src: "现分 p.211"
    },
    {
      link_en: "so you aim the construct at one locus — and then almost nothing happens",
      link_cn: "于是你把载体对准一个位点——然后几乎什么都没发生",
      en: "Homologous recombination between introduced DNA and its matching chromosomal site happens on its own at a rate of 10⁻²–10⁻⁵ in animals and 10⁻⁴–10⁻⁵ in plants. Out of a dish of cells, essentially none of them are the one you want, and nothing about a correct cell looks different down a microscope. **A rate that low cannot be screened for by looking; the experiment has to be rebuilt so that only a cell which recombined correctly stays alive.**",
      cn: "导入的 DNA 与染色体上对应位点之间的同源重组，自然发生率是动物 10⁻²~10⁻⁵、植物 10⁻⁴~10⁻⁵。一皿细胞里，几乎没有一个是你要的那个，而且在显微镜下，重组对了的细胞看上去和别的没有任何区别。**低到这个程度的概率没法靠「看」筛出来；只能把实验改造成——只有正确重组了的细胞才活得下来。**",
      src: "现分 p.211, p.212"
    },
    {
      link_en: "which is done by putting two drug-resistance genes in two different places",
      link_cn: "做法是把两个抗性基因放在两个不同的位置上",
      en: "Positive-negative selection, or PNS, is a layout: two drug-resistance markers are placed in a targeting vector — the piece of DNA carrying the disrupted copy of the gene — at two positions that behave differently. *neo*, which confers resistance to the antibiotic G418, sits *inside* the most critical exon of the target — so it is both the disruption and the positive marker. *HSV-tk* is herpes simplex virus thymidine kinase, an enzyme that converts the drug ganciclovir into a poison, and it sits *outside* the stretch that matches the chromosome. **Homologous recombination copies in only what lies between the two matching arms, so it brings *neo* in and leaves *HSV-tk* behind; a random insertion swallows the whole linear construct and carries *HSV-tk* in with it.**",
      cn: "正-负双向选择（positive-negative selection, PNS）说的是一种摆法：把两个抗性标记放进打靶载体（即携带被破坏版本基因的那段 DNA）里，放在两个行为不同的位置上。*neo* 基因赋予对抗生素 G418 的抗性，被插在靶基因最关键的外显子里面——所以它既是那个「破坏」，又是正向筛选标记。*HSV-tk* 就是单纯疱疹病毒胸腺嘧啶激酶，这个酶能把药物丙氧鸟苷变成毒物；它被放在与染色体同源的那段序列外侧。**同源重组只会把两条同源臂之间的东西拷进去，所以它把 *neo* 带进来、把 *HSV-tk* 丢在外面；而随机插入是整条线性载体一起进去，*HSV-tk* 也跟着进去了。**",
      src: "现分 p.211（图 6-10）"
    },
    {
      link_en: "so the two drugs, given together, sort the dish for you",
      link_cn: "于是两种药一起加，就替你把这皿细胞分好了",
      en: "Grow the cells in G418 and ganciclovir at once. A correctly targeted cell carries *neo* and survives the G418, and having dropped *HSV-tk* it is untouched by the ganciclovir. A randomly inserted cell also has *neo*, but it kept *HSV-tk*, so the ganciclovir kills it. **Selection only enriches — it never proves, because a cell can survive both drugs for reasons other than the one intended, so every surviving line is still checked by PCR and Southern blot before it is believed.**",
      cn: "把细胞同时放在 G418 和丙氧鸟苷里养。正确打靶的细胞带着 *neo*，扛得住 G418；又因为丢掉了 *HSV-tk*，丙氧鸟苷对它没作用。随机插入的细胞同样有 *neo*，但它把 *HSV-tk* 留下了，于是被丙氧鸟苷杀死。**筛选只做富集，它从不做证明——细胞能在两种药里活下来，可能出于你没设想的原因，所以每一个活下来的细胞系，仍然要用 PCR 和 Southern 杂交验过才算数。**",
      src: "现分 p.212"
    },
    {
      link_en: "a verified cell line is still only a cell in a dish, and the question was about an animal",
      link_cn: "验过的细胞系仍然只是皿里的细胞，而问题问的是一只动物",
      en: "The targeting is done in embryonic stem cells (ES cells), which can still give rise to every tissue including the germ line. Targeted ES cells are injected into the cavity of an early embryo, and the pup born is a chimera — part of it grown from the host embryo, part from the injected cells. Coat colour makes this readable at a glance: black ES cells go into a white embryo, so black patches mark ES-derived tissue. **Because recombination altered only one of the two chromosomes, the chimera is backcrossed and at least two generations are needed before any animal is homozygous for the knockout.**",
      cn: "打靶是在胚胎干细胞（ES 细胞）里做的——它还能分化成所有组织，包括生殖系。把打靶成功的 ES 细胞注射进早期胚胎的囊胚腔，生出来的幼崽是嵌合体：一部分由受体胚胎长成，一部分由注射进去的细胞长成。毛色让这件事一眼可读：黑毛的 ES 细胞注进白毛胚胎，黑色区域就是 ES 细胞来源的组织。**因为重组只改了两条染色体中的一条，嵌合体还要回交，至少两代之后才可能出现敲除纯合的动物。**",
      src: "现分 p.213（图 6-12）"
    },
    {
      link_en: "and then the phenotype can finally be asked for",
      link_cn: "到这一步，才终于能问表型",
      en: "One worked case runs the whole chain. Exons Ⅳ to Ⅵ of the intestinal alkaline phosphatase (IAP) gene were replaced by *neo*; Southern blot confirmed the gene was gone from the genome, Northern found no transcript and Western found no protein in the homozygote. **Fed a high-fat diet, the IAP knockout mice got visibly fatter than wild-type littermates — which is the whole point of the exercise: a phenotype that names what the gene was doing.**",
      cn: "有一个完整跑通的例子。把肠碱性磷酸酶（IAP）基因的外显子Ⅳ到Ⅵ换成 *neo*；Southern 杂交证实这个基因已从基因组中消失，Northern 查不到转录本，Western 在纯合子体内查不到蛋白。**在高脂饲养下，IAP 敲除小鼠明显比野生型同窝仔胖——这才是整件事的目的：一个能说出这个基因原本在干什么的表型。**",
      src: "现分 p.213–214（图 6-13）"
    },
    {
      link_en: "but for a great many genes the animal never gets far enough to be weighed",
      link_cn: "但对相当多的基因来说，动物根本活不到能被称重的那天",
      en: "When a gene carries an important physiological job, deleting it in every cell from the first division onward usually kills the embryo, and an embryo that dies tells you almost nothing about what the gene does in an adult liver. **Conditional knockout exists precisely for that dead embryo: instead of removing the gene everywhere and always, the removal is put under something the experimenter switches on at a chosen time in a chosen tissue.**",
      cn: "当一个基因担着重要的生理功能，从第一次分裂起就在每个细胞里把它删掉，通常会导致胚胎死亡；而一个死掉的胚胎，几乎不能告诉你这个基因在成年肝脏里做什么。**条件型基因敲除的存在，正是为了这个死胎：不再是「处处删、始终删」，而是把「删」这个动作交给实验者在选定的时间、选定的组织里去开启。**",
      src: "现分 p.212"
    },
    {
      link_en: "the switch is a recombinase that recognises a short sequence and nothing else",
      link_cn: "这个开关是一种重组酶，它只认一段短序列，别的都不认",
      en: "Cre is a recombinase from a bacteriophage — a virus that infects bacteria — and it recognises a 34 bp site called LoxP. **Cre joins two LoxP sites that point the same way and deletes everything lying between them, so where the two LoxP are placed is exactly what decides which piece of the gene disappears.** The targeting vector therefore puts one LoxP on each side of the target's important functional domain and hides *neo* in an intron, where it will not disturb the gene. Three further systems work the same way: Gin/Gix from a phage, and FLP/FRT and R/RS from yeast, with Cre/LoxP the most widely used of the four.",
      cn: "Cre 是一种来自噬菌体（即感染细菌的病毒）的重组酶，它识别一段 34 bp 的序列，叫 LoxP。**Cre 把两个方向相同的 LoxP 接到一起，并删掉夹在它们中间的一切；所以「两个 LoxP 放在哪里」，就恰好决定了基因的哪一段会消失。**因此打靶载体在靶基因重要功能域的两侧各放一个 LoxP，并把 *neo* 藏在内含子里，让它不干扰这个基因。另外三套系统原理相同：噬菌体的 Gin/Gix，以及酵母的 FLP/FRT 和 R/RS；四套里 Cre/LoxP 用得最广。",
      src: "现分 p.211, p.212（图 6-11）"
    },
    {
      link_en: "and because Cre is itself a gene, whoever controls its promoter controls when the deletion happens",
      link_cn: "而 Cre 自己也是一个基因，所以谁控制它的启动子，谁就控制删除发生在什么时候",
      recall_en: "this is what answers the dead embryo two steps up",
      recall_cn: "这正是回答上面两步那个死胎问题的东西",
      en: "Cre is delivered by crossing in a mouse that carries the *Cre* gene, and *Cre* is put under a promoter that is either tissue-specific or drug-inducible. **Whatever decides when and where Cre is made decides when and where the target gene dies** — so the animal develops normally and loses the gene only afterwards, in one tissue, which is how a gene whose complete knockout is lethal still gets studied.",
      cn: "Cre 是通过与携带 *Cre* 基因的小鼠杂交带进来的，而 *Cre* 被放在一个组织特异性的、或者可药物诱导的启动子之下。**决定 Cre 何时何地被合成的东西，也就决定了靶基因何时何地死掉；于是可以让动物先正常发育，之后才在某一个组织里把这个基因去掉——完全敲除会致死的基因，就是这样仍然被研究到的。**",
      src: "现分 p.212"
    },
    {
      link_en: "all of that aims at a gene you already chose; the opposite approach chooses none",
      link_cn: "以上都是冲着一个你已经选定的基因去的；还有一条相反的路，它谁也不选",
      en: "Gene trapping inserts a reporter gene at random — usually *neo*ʳ or the *GUS* gene — with no promoter of its own. Landing in a random spot, it stays silent; landing inside a gene that the cell is already transcribing, it is carried along by that gene's own transcription and produces a fusion protein. **A promoterless reporter can only light up where it has interrupted an active gene, so the insertion reports itself, and sequencing the DNA flanking the marker names the gene that was hit.**",
      cn: "基因捕获法是把一个报告基因随机插进去——通常是 *neo*ʳ 或 *GUS* 基因——而且它自己不带启动子。落在随机的地方，它就是哑的；落进一个细胞本来就在转录的基因里，它被那个基因自身的转录带着一起表达，产生一个融合蛋白。**一个没有启动子的报告基因，只可能在它打断了某个活跃基因的地方亮起来；于是插入事件自己报告自己，再测标记两侧的 DNA 序列，就能知道被打中的是哪个基因。**",
      src: "现分 p.214（图 6-14）"
    },
    {
      link_en: "and where a construct lands changes how much it is expressed, whichever route put it there",
      link_cn: "而且不管用哪条路把载体送进去，它落在哪里都会改变它表达多少",
      en: "An integrated transgene is read in the context of the chromatin around its landing site, and the promoter and enhancer region at its 5′ end and the terminator region at its 3′ end all shift how much of it is made. This is the position effect. Introns matter too: an intron can carry regulatory elements that affect splicing, and can hold sequences that open up a chromosomal domain. **Because expression depends on where the construct landed and not only on what it contains, targeting vectors are often built with a tissue-specific promoter of their own rather than left at the mercy of the site.**",
      cn: "整合进去的转基因，是在它落点周围的染色质环境里被读的；它 5′ 端的启动子与增强子区、3′ 端的终止子区，都会改变它被做出来多少。这就是位置效应。内含子同样有影响：内含子里可能带有影响剪接的调控元件，也可能含有能打开某个染色体功能域的序列。**因为表达取决于载体落在哪里、而不只取决于它带了什么，打靶载体常常自带一个组织特异性启动子，而不是听凭落点摆布。**",
      src: "现分 p.214"
    },
    {
      link_en: "none of this transfers to a plant, because a plant has no ES cell to inject into an embryo",
      link_cn: "这一整套都搬不到植物上，因为植物没有 ES 细胞可以注射进胚胎",
      en: "Plants are knocked out by T-DNA insertional inactivation, and the delivery is borrowed from a plant pathogen. *Agrobacterium* carries a plasmid called the Ti plasmid — Ti is for tumour-inducing — which holds a transferable segment named T-DNA, a virulence region called Vir, genes for auxin and cytokinin that make the wound tissue grow into a crown gall, and genes for opines the bacterium feeds on. **A wounded root leaks the phenolic compound acetosyringone, that induces *Vir*, and *Vir* cuts one strand of the T-DNA out of the Ti plasmid and carries it into the plant cell nucleus, where it integrates into the host genome.**",
      cn: "植物用 T-DNA 插入失活来做敲除，而运送这件事是从一种植物病原菌那里借来的。根瘤农杆菌带有一个质粒，叫 Ti 质粒（Ti 即 tumor-inducing，诱导肿瘤）；它上面有一段可转移的片段叫 T-DNA、一个致毒区叫 Vir、两套分别合成生长素与分裂素、使创伤组织长成冠瘿瘤的基因，还有一套合成冠瘿碱（细菌自己的食物）的基因。**植物根部受伤后会分泌酚类物质乙酰丁香酮，它诱导 *Vir* 基因表达，*Vir* 把 Ti 质粒上的 T-DNA 单链切下来，带进植物细胞核，最终整合到宿主基因组上。**",
      src: "现分 p.215"
    },
    {
      link_en: "and because that integration picks no particular site, randomness becomes the method",
      link_cn: "而正因为这种整合不挑位点，随机本身就成了方法",
      en: "T-DNA has no preferred integration site and lands essentially at random in the plant genome. **Make enough independent insertion lines and every gene in the genome is hit in one of them, which turns a random process into a knockout library that can be searched instead of built to order.** *Arabidopsis* suits this: its genome carries little redundant sequence and its genes sit densely, so nearly every insertion destroys some gene's function, and a researcher looks up a mutant in a database rather than making one.",
      cn: "T-DNA 没有专一的整合位点，在植物基因组里基本是随机落点。**只要独立插入的株系数目足够多，基因组里每一个基因都会在其中某一株里被打中——于是一个随机过程变成了一个可以检索的敲除突变体文库，不必再逐个定做。**拟南芥特别适合这么干：它基因组冗余序列少、基因密度高，几乎每一个插入都会毁掉某个基因的功能；研究者是去数据库里查一个突变体，而不是去做一个。",
      src: "现分 p.216, p.217"
    },
    {
      link_en: "delivering DNA is one problem; the Ti plasmid being too big to engineer is another",
      link_cn: "送 DNA 是一个问题；Ti 质粒本身大到没法做分子操作，是另一个问题",
      en: "A Ti plasmid is large and awkward to cut and rejoin, so two vector systems were built around it. In a co-integrate system the gene of interest is first cloned into a small vector carrying T-DNA, and homologous recombination inside *Agrobacterium* moves it onto the Ti plasmid. **In a binary system the two plasmids never recombine and both replicate independently: one helper Ti plasmid keeps *Vir* and has lost its T-DNA entirely, and a separate shuttle plasmid carries the gene between a left and a right border.** *Vir* recognises those two borders and cuts there, which is all it needs from the shuttle plasmid.",
      cn: "Ti 质粒很大，切开再接回去很不好操作，于是围绕它发展出两套载体系统。共整合载体系统里，目的基因先克隆到一个带 T-DNA 的小载体上，再在农杆菌体内通过同源重组把它挪到 Ti 质粒上。**双元载体系统里，两个质粒之间不发生同源重组，各自独立复制：辅助 Ti 质粒只保留 *Vir* 功能、T-DNA 区已被整个删掉，而另一个穿梭质粒把目的基因夹在 *Vir* 能识别并切割的左臂（LB）与右臂（RB）之间。**",
      src: "现分 p.216（图 6-15）"
    },
    {
      link_en: "every method so far waits for the cell to recombine; the next one stops waiting and cuts",
      link_cn: "到此为止的每一种方法都在等细胞去重组；下一种不等了，它直接切",
      recall_en: "the rarity of homologous recombination, from the second step, is the problem being attacked",
      recall_cn: "第二步那个「同源重组太罕见」的问题，正是这里要攻的靶",
      en: "Genome editing is the name for a different move: take a nuclease — an enzyme that cuts nucleic acid — build it to recognise one chosen sequence, and have it cut both strands of the DNA at that spot. The cell cannot leave a double-strand break alone: it repairs it, either by homologous recombination against a template or by non-homologous end joining (NHEJ), which rejoins the ends and often loses or gains a few bases doing so. **The break is the tool and the cell's own repair is the mechanism — which is why a rate that was 10⁻⁵ becomes workable.** Until 2013 the standard tools for this were two engineered proteins: the zinc-finger nuclease, named for the zinc-finger units that give it its sequence recognition, and TALEN, which is short for transcription activator-like effector nuclease.",
      cn: "基因组编辑（genome editing）是另一种打法的名字：拿一种核酸酶——即切割核酸的酶——把它造成只认某一段选定的序列，让它在那个位点把 DNA 双链切断。细胞不可能对一个双链断裂坐视不管：它一定会修，要么以模板进行同源重组，要么走非同源末端连接（NHEJ）——把两端接回去，接的时候常常丢掉或多出几个碱基。**「切」是工具，而细胞自己的修复才是机制——这就是那个原本 10⁻⁵ 的概率变得可用的原因。**在 2013 年之前，干这件事的标准工具是两种人工改造的蛋白：锌指核酸酶（它的序列识别能力来自那些叫「锌指」的结构单元，故此得名），以及 TALEN，全称是转录激活样效应因子核酸酶（transcription activator-like effector nuclease）。",
      src: "现分 p.217"
    },
    {
      link_en: "and then a bacterial immune system turned out to do the same job with an RNA instead of a protein",
      link_cn: "然后人们发现，一套细菌的免疫系统用一条 RNA 就干成了同样的事，不必用蛋白",
      en: "CRISPR/Cas is part of the adaptive immune system of bacteria and archaea, and its job there is to destroy invading viruses and foreign DNA. Its two parts sit next to each other on the chromosome: a CRISPR array, in which short spacer sequences alternate with a highly conserved direct repeat, and the cas gene cluster at the array's 5′ end, encoding proteins that cut foreign DNA. **A spacer is a piece of a previously encountered invader kept on file, so the array is a record of past infections and the cas proteins are what acts on that record.** Of the three types, Ⅰ, Ⅱ and Ⅲ, type Ⅱ is the one that became the tool.",
      cn: "CRISPR/Cas 本来是细菌和古菌适应性免疫系统的一部分，它在那里的职责是摧毁入侵的病毒和外源 DNA。它的两个部分在染色体上紧挨着：一个 CRISPR 序列，由一段段短的间隔序列与高度保守的正向重复序列相间排列而成；以及位于该序列 5′ 端的 Cas 基因簇，编码能切割外源 DNA 的蛋白质。**一段间隔序列就是一份从前遇到过的入侵者的存档，所以 CRISPR 序列是一份感染史记录，而 Cas 蛋白是对这份记录采取行动的那一方。**Ⅰ、Ⅱ、Ⅲ 三型里，成为工具的是Ⅱ型。",
      src: "现分 p.217"
    },
    {
      link_en: "and the cutting takes two RNA molecules, not one — which is the detail the whole tool was built out of",
      link_cn: "而切割要用到两条 RNA，不是一条——整个工具正是从这个细节里造出来的",
      en: "When foreign DNA arrives, the CRISPR array is transcribed and processed into a mature crRNA of about 40 nt. That crRNA base-pairs with a second RNA, tracrRNA (trans-activating CRISPR RNA), and the resulting double-stranded RNA both activates Cas9 and guides it to the matching stretch of invading DNA, called the protospacer. Cas9 then cuts with two separate nuclease domains, one per strand: **the HNH domain cuts the strand that is base-paired with the crRNA, and the RuvC-like domain cuts the other, non-complementary strand.**",
      cn: "外源 DNA 入侵时，CRISPR 序列被转录并加工成约 40 nt 的成熟 crRNA。这条 crRNA 与另一条 RNA——tracrRNA（trans-activating CRISPR RNA）——碱基互补配对，形成的双链 RNA 既激活 Cas9，又把它引到入侵 DNA 上与之匹配的那一段，即原型间隔序列（protospacer）。随后 Cas9 用两个各自独立的核酸酶结构域切开两条链，**一个结构域切一条：HNH 结构域切的是与 crRNA 互补配对的那条链，RuvC-like 结构域切的是另一条非互补链。**",
      src: "现分 p.217（图 6-16a）"
    },
    {
      link_en: "and one short motif next to the target decides whether Cas9 will cut there at all",
      link_cn: "而靶点旁边一段很短的基序，决定了 Cas9 到底会不会在那里下刀",
      en: "Cas9 only cuts when the protospacer is followed by a short motif called the PAM (protospacer-adjacent motif), which is usually 5′-NGG-3′ and rarely 5′-NAG-3′; the cut falls at the third base upstream of it. **The PAM sits on the invader's DNA and not in the bacterium's own CRISPR array, so requiring it is what stops Cas9 from cutting the very spacers that program it — the same requirement that later fixes where an engineered cut can be aimed.**",
      cn: "只有当原型间隔序列后面跟着一段短基序——PAM（protospacer-adjacent motif）——时，Cas9 才切；PAM 通常是 5′-NGG-3′，极少数情况下是 5′-NAG-3′，切点落在它上游第三个碱基处。**PAM 在入侵者的 DNA 上，而细菌自己的 CRISPR 序列里没有；所以「必须有 PAM」正是 Cas9 不会去切那些给它编程的间隔序列的原因——后来同一个要求，也框定了人工设计的切点能瞄到哪里。**",
      src: "现分 p.217"
    },
    {
      link_en: "so to make a tool of it, the two RNAs were welded into one",
      link_cn: "于是要把它做成工具，就把那两条 RNA 焊成了一条",
      recall_en: "crRNA and tracrRNA, the two molecules from three steps up",
      recall_cn: "上面第三步那两条分子——crRNA 与 tracrRNA",
      en: "The crRNA::tracrRNA pair was fused into a single hairpin-shaped molecule, the sgRNA (single guide RNA), whose 5′ end carries a 20 nt guide sequence fully complementary to the DNA target. **Changing those 20 nt is the entire act of retargeting — any 5′-(N)₂₀-NGG-3′ in a genome becomes a target, and the Cas9 protein itself is never redesigned.** That is the difference from a zinc-finger nuclease or a TALEN, where hitting a new site means engineering a new protein.",
      cn: "把 crRNA::tracrRNA 这一对融合成一个具有发夹结构的单分子，就是 sgRNA（single guide RNA）；它 5′ 端带着一段 20 nt 的引导序列，与 DNA 靶序列完全互补。**改这 20 nt 就是重新瞄准的全部动作——基因组上任意 5′-(N)₂₀-NGG-3′ 都能成为靶点，而 Cas9 蛋白本身一次都不用重新设计。**这正是它与锌指核酸酶、TALEN 的差别：后两者要打一个新位点，就得重新改造一个蛋白。",
      src: "现分 p.217（图 6-16b）"
    },
    {
      link_en: "the cut leaves no marker behind, so finding the edited plants takes its own trick",
      link_cn: "这一刀不留下任何标记，所以找出被编辑的植株要另想办法",
      recall_en: "unlike the neo of the PNS step, nothing here confers a drug resistance to select on",
      recall_cn: "和 PNS 那步的 neo 不同，这里没有任何东西能带来抗药性可供筛选",
      en: "In plants the 20 bp guide and its adjacent 5′-NGG PAM are chosen from the target gene, cloned into a vector carrying the sgRNA scaffold and the *Cas9* gene, and expressed from a U6 or U3 promoter. Since editing leaves only a few inserted or deleted bases, screening is indirect: if the cut destroys a restriction site, wild-type PCR product still digests into two small fragments while the mutant's stays one band. **Where no suitable restriction site exists, the PCR product is melted and re-annealed so mutant and wild-type strands pair imperfectly, and T7 endonuclease Ⅰ — which cuts only mismatched duplexes — reveals the edit; sequencing then confirms it.**",
      cn: "在植物里，先从靶基因上选定 20 bp 引导序列及紧跟其后的 5′-NGG PAM，克隆到带 sgRNA 骨架和 *Cas9* 基因的表达载体中，由 U6 或 U3 启动子驱动表达。因为编辑只留下几个碱基的插入或缺失，鉴定只能是间接的：如果这一刀恰好破坏了一个限制性内切酶位点，野生型的 PCR 产物仍能被切成两条小片段，而突变体的还是一条带。**如果找不到合适的酶切位点，就把 PCR 产物变性再复性，让突变型与野生型的链不完全配对，再用只切错配双链的 T7 核酸内切酶Ⅰ把编辑显示出来；最后由 DNA 测序确认。**",
      src: "现分 p.218（图 6-16、图 6-17）"
    }
  ]
};
