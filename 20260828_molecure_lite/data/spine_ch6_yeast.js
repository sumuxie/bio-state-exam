/* Spines for §6.4 and §6.5 of chapter 6 — 在酵母细胞中鉴定靶基因功能，以及其他分子生物学技术.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 229–237.
   Every `src` carries a PRINTED page number, read off the running footer of the page
   the claim was taken from, so a disputed sentence can be found again in seconds.

   THE ARC ACROSS BOTH NODES. §6.4 and §6.5 answer the same question with two different
   kinds of instrument, and reading them one after the other is what makes each one's
   limits visible.

   §6.4 answers it with a living cell. You have a sequence and a guess about what it
   does; you break a yeast cell in exactly the place your guess predicts, hand it the
   gene, and let survival decide. That is complementation, and it is a functional assay
   run backwards — the proof is that a foreign copy repairs a defect defined in advance.
   Its strength is that the cell integrates everything: folding, targeting, cofactors,
   the whole metabolic context. Its weakness is that it says a function was supplied and
   never says by what chemistry.

   §6.5 answers it with six instruments that each make one invisible event print itself:
   a band that moves more slowly (EMSA), a phage that stays on the plate (phage display),
   a black spot on film (in-vitro kinase assay), a stripe on a membrane (Western), a green
   cell (GFP and immunofluorescence), a dot above a threshold (GWAS). Each converts a
   molecular event into a position or a signal — and what it fails to convert is exactly
   the limit of what it proves. EMSA shows that something in an extract bound and never
   which protein it was; a GFP fusion gives an address and no biochemistry; GWAS gives a
   correlation and no mechanism.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. W1536 5B and elo2Δelo3Δ; the PⅡ lane of an ACO3 promoter;
      lanes 1, 4 and 5 at Mr 68,000; the quiescent centre of an Arabidopsis root tip.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has to
   stand up with everything else hidden.

   WHAT IS DELIBERATELY ABSENT. The printed pages of §6.4 contain no yeast three-hybrid
   and no yeast deletion collection; both are standard and both were left out rather than
   written in from memory. §6.4 has exactly two routes — Yip knockout plus tetrad
   analysis, and expression of a foreign gene followed by a phenotypic or chemical
   readout. Three steps across the two nodes go past the printed pages, and each one
   carries `beyond: true` with a note saying what the pages do and do not say. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-6-4 */
window.BIOLITE_SPINE["M-6-4"] = {
  /* Declared rather than left implicit. The first group are the ordinary furniture of
     any molecular-biology sentence; the second are named as examples only. Nothing the
     node leans on is parked here: Yip, tetrad analysis, URA3/TRP1, elo2/elo3, KCS,
     GC and MS and GFP are all introduced in the prose at first use. */
  assumed: ["DNA", "RNA", "gene", "genome", "chromosome", "plasmid", "protein", "enzyme",
            "cell", "nucleus", "mitochondria", "endoplasmic reticulum", "peroxisome",
            "cytoskeleton", "eukaryote", "yeast", "diploid", "haploid", "spore",
            "mutation", "mutant", "phenotype", "wild type", "transformation",
            "expression vector", "selection", "marker", "fatty acid", "colony",
            "promoter", "transcription", "translation", "microscope", "fluorescence",
            "knockout", "homologous recombination", "conserved", "model organism",
            "cotton", "Escherichia coli",
            /* Ordinary English words that happen also to be glossary entries. A reader
               who has got this far holds them in their everyday sense, and writing a
               definition for each would pad every step without teaching anything. */
            "system", "region", "site", "series", "composition", "peak"],
  nodeTitle_en: "Identifying the function of a target gene in yeast",
  nodeTitle_cn: "在酵母细胞中鉴定靶基因功能",
  title_en: "A sequence never says what it does, so you break a yeast cell in one defined place and hand it the gene. **Complementation is a functional assay run backwards: a gene's job is proved by showing that a foreign copy repairs a cell broken in exactly that way.**",
  title_cn: "序列本身不会说出一个基因在干什么，于是先把酵母细胞在一个确定的位置弄坏，再把基因交给它。**互补实验是把功能测定反过来做：要证明一个基因干什么，就让它的外源拷贝去修好一个恰好在那里坏掉的细胞。**",
  steps: [
    {
      en: "Saccharomyces cerevisiae — 酿酒酵母, brewer's yeast — is a single-celled eukaryote that still carries the compartments an animal or plant cell carries: nucleus, endoplasmic reticulum, Golgi apparatus, mitochondria, peroxisome, cytoskeleton. Its growth and development run much as they do in those cells, and many genes are highly conserved between them. **A eukaryote that grows as one cell and takes biochemical and molecular handling easily is what makes yeast the routine host for asking what a gene does.**",
      cn: "酿酒酵母（Saccharomyces cerevisiae）是单细胞真核生物，却仍然具有与动植物细胞相似的结构：细胞核、内质网、高尔基体、线粒体、过氧化物酶体、细胞骨架。它的细胞生长发育过程与动植物细胞也有很高的相似性，很多基因在酵母与动植物之间高度保守。**一个以单细胞方式生长、又很容易做生物化学与分子生物学操作的真核生物，正是酵母成为基因功能研究常用模式生物的原因。**",
      src: "现分 p.229"
    },
    {
      link_en: "and the first thing you do to such a host is break one gene in it, precisely",
      link_cn: "而对这样一个宿主，第一件要做的事就是精确地把它的某一个基因弄坏",
      en: "Yip is an integrating plasmid — a plasmid that does not stay free but is built into the chromosome — and with it any gene in the yeast genome can be knocked out precisely, the resident copy being replaced rather than merely disturbed. **A replacement made at a known locus is what lets the strain you go on to test differ from wild-type in exactly one place, so whatever you then see can be laid at that gene's door.**",
      cn: "Yip 是整合型质粒，即不以游离状态存在、而被整合进染色体的质粒；用它可以对酵母基因组中的任意基因进行精确的敲除，也就是把原有的拷贝置换掉，而不只是把它扰动一下。**在一个已知位点上做的置换，使你随后要检测的菌株与野生型之间只差这一个地方；于是后面看到的任何变化，都可以算到这个基因头上。**",
      src: "现分 p.229"
    },
    {
      link_en: "and a cell whose missing gene was essential never grows at all, so the reading is done on spores",
      link_cn: "但如果被敲掉的基因是必需的，细胞根本长不出来，所以观测要落到孢子上",
      en: "A yeast diploid is built that carries a lethal mutation site and, on a plasmid, a foreign gene that might complement it, and starving that diploid makes it form a tetrad — four spores held together in one sac. A yeast tetrad dissection system separates the four so each grows on its own. **A haploid spore carrying the mutant gene forms a colony only when the introduced foreign gene can perform the function the mutated site lost; lacking that, the spore dies.**",
      cn: "构建一个酵母二倍体细胞，它带有致死突变位点，同时在质粒上带着一个可能互补该位点的外源基因；把这个二倍体放在饥饿条件下，它会形成四分体，即四个孢子包在一个孢子囊里。再用酵母四分体分离系统把这 4 个孢子分开，各自单独培养。**带有突变基因的那个单倍体孢子，只有在导入的外源基因具备互补突变位点的功能时才能长成菌落；不具备，孢子就长不出来。**",
      src: "现分 p.229"
    },
    {
      link_en: "and the gene under test is carried in on a plasmid that swaps places with another one",
      link_cn: "而受检的基因是搭在一个质粒上进来的，这个质粒要与另一个质粒交换位置",
      en: "In 图 6-32 several cotton KCS genes — each a candidate 超长链脂肪酸合成酶, very-long-chain fatty acid synthase — were cloned onto an expression plasmid carrying the URA3 selection marker, and that plasmid was then used to replace a plasmid carrying the TRP1 marker. **Two different selection markers are what make the exchange itself readable on a plate, so the cells taken forward to the growth test are known to hold the cotton gene and to have given up the plasmid it displaced.**",
      cn: "图 6-32 中，把多个棉花 KCS 基因——每一个都是候选的超长链脂肪酸合成酶基因——克隆到含有 URA3 筛选标记的表达质粒上，再用这个带 URA3 标记的质粒去替换带有 TRP1 标记的质粒。**两个不同的筛选标记，使「这次交换到底有没有发生」本身在平板上可读；于是进入生长实验的细胞，是确知带着棉花基因、并且已经舍弃了被替换掉的那个质粒的细胞。**",
      src: "现分 p.229（图 6-32）"
    },
    {
      link_en: "and then the plate is simply read from top to bottom",
      link_cn: "接下来这块平板从上往下读就行了",
      recall_en: "the survive-or-die readout set up two steps up, now with real strains on it",
      recall_cn: "上面第二步定下的那个「活还是死」的判读，现在换上了真实的菌株",
      en: "The spotting plate carries a dilution series of each strain. W1536 5B, a wild-type haploid, grows; elo2Δelo3Δ, a haploid with both of yeast's own very-long-chain fatty acid synthase genes deleted, is lethal and grows nothing. KCS12 and KCS6 restored the wild-type phenotype completely; KCS13 and KCS2 fell short of the wild-type phenotype and still let the cells grow again. **Partial rescue is evidence too: all four cotton genes supply a function similar to elo2 or elo3, and the dilution series grades how much of it each one supplies.**",
      cn: "点样平板上每个菌株都点了一个稀释梯度。W1536 5B 是野生型单倍体，能长；elo2Δelo3Δ 是酵母自身两个超长链脂肪酸合成酶基因都缺失的单倍体，属致死型，什么也长不出来。KCS12 与 KCS6 完全互补出野生型的表型；KCS13 与 KCS2 没有达到野生型表型，却仍使酵母细胞恢复了生长。**部分回复同样是证据：这四个棉花基因都具备与 elo2 或 elo3 相似的功能，而稀释梯度给出的是每一个基因把这份功能补回来多少。**",
      src: "现分 p.229（图 6-32）"
    },
    {
      link_en: "the mutant is one route in; the other one needs no mutant at all",
      link_cn: "用突变体是一条路；另一条路根本不需要突变体",
      en: "Clone a foreign gene onto a yeast expression vector, transform it into a wild-type or a mutant yeast strain, and then read out either a change in the yeast's phenotype or a change in the chemical composition of the cells. **A shift in the cell's chemistry is a readout in its own right, so a gene that produces nothing visible under a microscope can still be assayed by what the cell now contains.**",
      cn: "把外源基因克隆到酵母表达载体上，转化野生型或突变酵母菌株，然后去读两样东西之一：酵母表型的变化，或者细胞中化学成分的变化。**细胞化学组成的改变本身就是一种读出，所以一个在显微镜下看不出任何名堂的基因，仍然可以靠「细胞里现在多了什么」来测定。**",
      src: "现分 p.229"
    },
    {
      link_en: "one such readout answers where, and only where",
      link_cn: "其中有一种读出回答的是「在哪里」，而且只回答这一件事",
      en: "The green fluorescent protein (GFP) is a protein that glows green under the right illumination, and its gene can be fused to a foreign gene so that yeast expresses the two as one fusion protein. A fluorescence microscope then shows which subcellular region the fluorescence occupies. **Fluorescence sitting in one subcellular region is a statement about localisation alone — it gives the gene product an address inside the cell and leaves its biochemistry entirely open.**",
      cn: "绿色荧光蛋白（GFP）是一种在适当激发光下发绿色荧光的蛋白质，它的基因可以与外源基因相融合，让酵母把两者作为一个融合蛋白表达出来。之后用荧光显微镜观察荧光所在的亚细胞区域。**荧光落在某一个亚细胞区域，这句话只关于定位——它给了基因产物一个细胞内的地址，而这个产物的生化功能仍然完全没有交代。**",
      src: "现分 p.229"
    },
    {
      link_en: "and the other readout answers what, by weighing what the cell now makes",
      link_cn: "另一种读出回答的是「做了什么」，靠的是称一称细胞现在合成了什么",
      en: "GhKCS, a cotton gene that might encode a very-long-chain fatty acid synthase, was transformed into wild-type yeast and its expression induced, and the fatty acid composition of the cells was read by gas chromatography (GC) — which separates the fatty acids — and mass spectrometry (MS), which identifies them by mass. Yeast carrying the cotton gene showed a C22:0 saturated fatty acid peak, with C24:0 and C26:0 much reduced. **A new peak appearing in an otherwise wild-type background names the reaction: this protein makes very-long-chain fatty acids of the C22:0 type.**",
      cn: "GhKCS 是棉花中可能编码超长链脂肪酸合成酶的基因；把它转入野生型酵母细胞，诱导表达，再用气相色谱（GC，把各种脂肪酸分开）和质谱（MS，按质量把它们认出来）分析细胞的脂肪酸组成。带有棉花基因的酵母细胞中出现了 C22:0 饱和脂肪酸的峰，同时 C24:0 与 C26:0 大量减少。**在其余部分仍是野生型的背景上冒出一个新峰，这就点出了反应本身：该蛋白合成的是 C22:0 类型的超长链脂肪酸。**",
      src: "现分 p.230（图 6-33）"
    },
    {
      link_en: "and the reason a cotton gene works in yeast at all is worth stating, because it cuts the other way too",
      link_cn: "而棉花基因能在酵母里工作，这件事的原因值得说清楚，因为它反过来同样成立",
      en: "Yeast cells carry a system for modifying newly made proteins that is fairly close to the one animal and plant cells have. **Many animal and plant genes that yield no functional protein in *Escherichia coli* fold and work normally once expressed in yeast, so a blank result in a bacterial host leaves a gene's function undecided rather than disproved.**",
      cn: "酵母细胞中有与动植物细胞比较接近的蛋白质修饰系统，作用于新合成出来的蛋白质。**许多在大肠杆菌中不产生功能蛋白质的动植物基因，在酵母中表达后往往能正常发挥其生物学功能；所以在细菌宿主里得到的一个空白结果，只说明这个基因的功能尚未定论，而不构成否定。**",
      src: "现分 p.230"
    }
  ]
};
/* ===================================================================== M-6-5 */
/* INCOMPLETE — READ THIS BEFORE STUDYING FROM IT.
   §6.5 runs from printed page 230 to 237. These nine steps stop at 232: they cover
   the gel retardation assay (EMSA) and phage display, and nothing after them.
   Still missing from the printed section:
     p.233–234  in-vitro kinase assay, γ-³²P-ATP and MBP (图 6-36, 图 6-37)
     p.234–235  Western blotting, the five steps (图 6-38)
     p.235–236  subcellular localisation — GFP fusion and immunofluorescence (图 6-39, 图 6-40)
     p.236–237  GWAS, the four-step workflow and the GaKAS Ⅲ CGT/TGT haplotype (图 6-41)
   The writing run was cut off by a session limit mid-append; the steps that ARE here
   are complete and linter-clean, and only a dangling separator was removed to close
   the file. The transcript for the missing pages already exists, so this is a
   writing job and not another OCR job:
     scratchpad/transcripts/ch6_4-5_yeast_other.md
   The node's nodeTitle still promises Western and GWAS. Leave that promise in place
   only until these steps are written; if this node is shipped as final, cut the
   title back to what it actually delivers. */
window.BIOLITE_SPINE["M-6-5"] = {
  /* The first group is the ordinary furniture of a molecular-biology sentence. The
     second group are ordinary English words that happen to be glossary entries too.
     Nothing load-bearing is parked here: EMSA, probe, non-denaturing gel, phage,
     lytic and lysogenic, pⅢ and pⅧ, biotin and streptavidin, MBP, EGTA, epitope,
     primary and secondary antibody, GFP, immunofluorescence, SNP and GWAS are each
     introduced in the prose at the point where they are first used. */
  assumed: ["DNA", "RNA", "gene", "genome", "chromosome", "plasmid", "protein", "enzyme",
            "cell", "nucleus", "cytoplasm", "bacterium", "virus", "ribosome",
            "amino acid", "electrophoresis", "polyacrylamide", "gel", "membrane",
            "antibody", "antigen", "radioisotope", "autoradiography", "promoter",
            "exon", "intron", "codon", "arginine", "cysteine", "serine", "threonine",
            "tyrosine", "histidine", "lysine", "aspartate", "glutamate", "kinase",
            "phosphatase", "phosphorylation", "substrate", "signal transduction",
            "mass spectrometry", "fluorescence", "microscope", "macrophage",
            "meristem", "Arabidopsis", "cotton", "trait", "genotype", "mutation",
            "expression vector", "transformation", "library", "affinity", "elution",
            /* Ordinary English words that happen also to be glossary entries. */
            "system", "region", "site", "series", "complex", "signal", "marker",
            "population", "sample", "control", "model", "peak", "band", "probe",
            "extract", "support", "solution", "concentration", "development",
            /* Named once as a historical example — EMSA's first dynamic data came
               from the lactose repressor of E. coli — and not leaned on anywhere.
               SPINE_SPEC says that is exactly what `assumed` is for; a step that
               actually rested on the lac operon would have to introduce it instead. */
            "lactose", "repressor", "metabolism", "selection"],
  nodeTitle_en: "Other molecular biology techniques — EMSA, phage display, Western, GWAS",
  nodeTitle_cn: "其他分子生物学技术——EMSA、噬菌体展示、Western、GWAS",
  title_en: "Six techniques share this heading, and every one of them makes an invisible event print itself: a band that moves slowly, a phage that stays on the plate, a black spot on film, a stripe on a membrane, a green cell, a dot above a threshold. **What a method fails to turn into a visible signal is exactly the limit of what it can prove.**",
  title_cn: "这个标题下面有六项技术，每一项都在让一件看不见的事把自己印出来：一条跑得慢的带、一个留在平板上的噬菌体、胶片上的一个黑点、膜上的一条杠、一个发绿光的细胞、一个越过阈值的点。**一种方法没能转换成可见信号的那一部分，恰好就是它所能证明的东西的边界。**",
  steps: [
    {
      en: "The gel retardation assay, or EMSA (electrophoretic mobility shift assay), is a special form of gel electrophoresis for analysing DNA–protein interaction in vitro. Binding a protein greatly increases a DNA fragment's relative molecular mass, and in gel electrophoresis the distance DNA travels toward the positive electrode is proportional to the logarithm of that mass. **A DNA fragment with nothing bound to it migrates fast and a DNA–protein complex is held back, so position in the gel is the entire measurement.** Historically this method supplied the first dynamic data on the lactose repressor of Escherichia coli binding its DNA site.",
      cn: "凝胶滞缓实验（electrophoretic mobility shift assay，EMSA）是体外分析 DNA 与蛋白质相互作用的一种特殊的凝胶电泳技术。蛋白质与 DNA 结合后将大大增加相对分子质量，而凝胶电泳中 DNA 朝正电极移动的距离与其相对分子质量的对数成正比。**没有结合蛋白质的 DNA 片段迁移得快，形成了 DNA–蛋白质复合物的 DNA 则受到阻滞而迁移得慢；于是「在胶上跑到哪里」就是全部的测量。**历史上，该技术首次为大肠杆菌乳糖阻遏物与其 DNA 结合位点的相互作用提供了动态数据。",
      src: "现分 p.230"
    },
    {
      link_en: "and the experiment itself is three moves: label, incubate, run",
      link_cn: "而实验本身只有三个动作：标记、温育、电泳",
      en: "The DNA fragment to be tested — the probe DNA — is labelled with a radioisotope, incubated with a cell extract so that DNA–protein complexes have time to form, and loaded onto a non-denaturing polyacrylamide gel, a gel that leaves proteins folded and complexes assembled. ³²P is the usual label and it is put on the DNA molecule, with the protein left unlabelled. Autoradiography afterwards shows where the radioactive DNA bands lie. **With no protein in the extract able to bind the labelled probe, every trace of radioactivity ends up at the bottom of the gel; once a complex forms, the labelled band appears somewhere higher up.**",
      cn: "用放射性同位素标记待检测的 DNA 片段，即探针 DNA，与细胞提取物共温育，让 DNA–蛋白质复合物有时间形成，再把它加到非变性聚丙烯酰胺凝胶中电泳——非变性指的是这种胶不让蛋白质变性，复合物因此在电泳中保持完整。通常用 ³²P 标记 DNA 分子，而不标记蛋白质。电泳结束后用放射自显影技术显现放射性 DNA 条带的位置。**如果细胞蛋白提取物中没有能与标记探针结合的蛋白质，全部放射性标记都出现在凝胶底部；一旦形成复合物，被标记的条带就出现在胶上更靠上的位置。**",
      src: "现分 p.230–231（图 6-34）"
    },
    {
      link_en: "and putting the label on the DNA rather than on the protein is what makes that reading unambiguous",
      link_cn: "而把标记放在 DNA 上、不放在蛋白质上，正是这个判读之所以没有歧义的原因",
      beyond: true,
      beyondNote: "现分 p.230 states the choice — ³²P on the DNA molecule, the protein left unlabelled — and states the two possible outcomes. Why that choice is what makes the film readable is reasoning from those two sentences and is not printed on the page.",
      en: "A cell extract holds thousands of different proteins, so a label placed on protein would mark all of them at once and the film would report where proteins ran. **A label carried by the probe means every band on the film is the same molecule, and the only question the film has to answer is where that one molecule ended up.**",
      cn: "细胞提取物里有成千上万种不同的蛋白质，标记如果打在蛋白质上，就等于把它们全都标上了，胶片报告的将是「蛋白质跑到哪里」。**标记由探针携带，胶片上的每一条带就都是同一个分子；于是胶片只需要回答一个问题：这一个分子最后停在哪里。**",
      src: "现分 p.230"
    },
    {
      link_en: "with a real promoter under test, the gel answers where and stops there",
      link_cn: "换成一个真实的启动子来做，胶给出的是「在哪一段」，而且只到这里为止",
      en: "图 6-34 takes the promoter upstream of the cotton ethylene synthase gene ACO3, divides it into six regions named PⅠ to PⅥ, and compares two cotton species — 亚洲棉 Gossypium arboreum (Ga) and 雷蒙德棉 Gossypium raimondii (Gr) — with each region used as a γ-³²P-labelled probe. Only the PⅡ lanes show a clearly retarded band; every other lane carries free probe at the bottom and nothing above it, and a MYB binding site is drawn inside that same region. **A shift localises binding to one sub-region of a promoter and goes no further: the assay never names which protein in the extract bound, which is why it serves as the opening step of purifying that protein.**",
      cn: "图 6-34 取棉花乙烯合成酶 ACO3 基因上游的启动子，把它划成 PⅠ~PⅥ 六个区段，并在亚洲棉（Ga）与雷蒙德棉（Gr）两种棉花材料之间作比较，每个区段各自作为 γ-³²P 标记的探针。只有 PⅡ 这一组的两道在胶上部出现明显的滞缓条带，其余各道底部只有自由探针、上方空白；而 MYB 结合位点恰好画在 PⅡ 这一段里。**滞缓把结合定位到启动子的某一个亚区段，然后就停住了：这个实验从不说出提取物里结合上去的是哪一个蛋白质——这也正是它被当作分离纯化该蛋白质的第一步的原因。**",
      src: "现分 p.231（图 6-34）"
    },
    {
      link_en: "the next technique needs a living particle to carry the protein around, so first what that particle is",
      link_cn: "下一项技术需要一个活的颗粒把蛋白质带着走，所以先说清这个颗粒是什么",
      en: "A bacteriophage is any virus of bacteria; the word comes from the Greek phagos, meaning to devour. A phage stays alive away from a host cell and can neither grow nor replicate there, because most phages use the host's ribosomes, protein synthesis factors, amino acids and energy metabolism to multiply. Two cycles are distinguished. In the lytic cycle the phage turns the cell it infected into a factory that pours out progeny particles, and a phage having only this cycle is called a virulent phage, 烈性噬菌体. In the lysogenic cycle the phage DNA is integrated into the host chromosome and becomes part of it, with no progeny particles made during infection; such a phage is called a temperate phage, 温和噬菌体. **One infected cell running the lytic cycle yields a great many identical particles, and that amplification is the property the display technique is built on.**",
      cn: "噬菌体是细菌病毒的总称，英文 bacteriophage 来源于希腊文 phagos，有「吞噬」之意。噬菌体可在脱离宿主细胞的状态下保持自己的生命，但一旦脱离宿主细胞就既不能生长也不能复制，因为大多数噬菌体只能利用宿主的核糖体、合成蛋白质的因子、各种氨基酸及能量代谢体系来增殖。它分两种周期：溶菌周期中，噬菌体把它感染的宿主细胞变成噬菌体的「制造厂」，产生大量子代噬菌体颗粒，只具有溶菌生长周期的噬菌体叫作烈性噬菌体；溶原周期中，噬菌体 DNA 被整合到宿主染色体 DNA 上成为它的一个组成部分，感染过程中不产生子代噬菌体颗粒，这类噬菌体称为温和噬菌体。**一个走溶菌周期的被感染细胞能给出大量彼此相同的颗粒，而展示技术正是建立在这种扩增能力之上。**",
      src: "现分 p.231"
    },
    {
      link_en: "so put the protein you care about on the outside of such a particle",
      link_cn: "于是把你关心的那个蛋白质放到这样一个颗粒的外面去",
      en: "Phage display couples an expression product to affinity selection. The DNA fragment encoding a bait protein — any protein of interest — is inserted into the phage genome and fused to the gene for a phage coat protein; the recombinant phage infects its host bacterium and replicates into large numbers of particles carrying the hybrid coat protein, and those particles are used directly to capture, from a library of target proteins, whatever interacts with the bait. **A particle carries the fusion protein on its surface and the DNA encoding it inside, so anything caught by binding arrives attached to a sequence — and 图 6-35 closes its loop at the gene encoding the specific binding protein.**",
      cn: "噬菌体展示技术是把基因表达产物与亲和选择结合起来的技术：将编码「诱饵」蛋白（研究中所发现的任何感兴趣的蛋白质）的 DNA 片段插入噬菌体基因组，并使之与噬菌体外壳蛋白编码基因相融合；该重组噬菌体侵染宿主细菌后，复制形成大量带有杂合外壳蛋白的噬菌体颗粒，直接用于捕获靶蛋白库中与「诱饵」相互作用的蛋白质。**一个颗粒表面带着融合蛋白，内部带着编码它的 DNA；所以凡是靠结合被抓住的东西，都连着一段序列一起到手——图 6-35 的环也正是闭合在「编码特异性结合蛋白的基因」上。**",
      src: "现分 p.231（图 6-35）"
    },
    {
      link_en: "and which coat protein you fuse to decides how many copies end up on one particle",
      link_cn: "而融合到哪一个外壳蛋白上，决定了一个颗粒上最终挂着多少个拷贝",
      en: "Two phage proteins can act as the vehicle: pⅢ, a minor structural protein, and pⅧ, the major structural protein of the coat. A fusion to the pⅢ gene is expressed weakly, giving no more than 5 copies per phage; a fusion to the pⅧ gene is expressed strongly, giving perhaps 2,700 to 3,000 copies on one coat. Both genes carry a single cloning site between the signal peptide and the mature protein coding region, so the fusion protein is secreted into the periplasmic space, has its signal peptide cut off by a host protease, and is presented on the virus particle's surface as a structural coat protein. **Display works by sending the foreign peptide down the coat protein's own secretion route, which is why the insert has to go precisely between the signal peptide and the mature coding sequence.**",
      cn: "能充当载体的有两个噬菌体蛋白：次要结构蛋白 pⅢ 和主要结构蛋白（外壳蛋白）pⅧ。与 pⅢ 基因融合时表达强度低，每个噬菌体上有不超过 5 个拷贝；与 pⅧ 基因融合时表达强度高，每个噬菌体外壳上可能有 2 700~3 000 个拷贝。这两个基因的信号肽与成熟蛋白质编码区之间都有单一的克隆位点，便于外源基因插入；表达出的融合蛋白被分泌到细胞间质，由宿主蛋白酶切除信号肽，最后作为结构外壳蛋白呈现到病毒粒子的表面。**展示之所以成立，是因为外源多肽是沿着外壳蛋白自己的分泌路线走出去的；这就是插入位点必须恰好落在信号肽与成熟蛋白编码区之间的原因。**",
      src: "现分 p.231–232"
    },
    {
      link_en: "and 5 copies against 3,000 is not a detail of yield — it changes what a selection round selects for",
      link_cn: "而 5 个拷贝对 3 000 个拷贝，不只是产量上的差别——它改变了一轮筛选到底在选什么",
      beyond: true,
      beyondNote: "现分 p.231 gives both copy numbers and calls the pⅢ fusion 表达强度低 and the pⅧ fusion 表达强度高. Reading those numbers as avidity and as selection stringency is standard practice in the field and is not stated on the printed page.",
      en: "A round of affinity selection means incubating the phage library with an immobilised target and washing the unbound particles away. A particle bearing up to 3,000 copies is held to that surface by many contacts at once, so even a weak bait–target pair survives the wash — high avidity, meaning binding strength summed over many simultaneous contacts, and therefore low stringency. A particle bearing 5 copies or fewer depends far more on the strength of one interaction. **A pⅧ display is the layout for catching weak or rare binders, and a pⅢ display is the layout for insisting on tight ones.**",
      cn: "所谓一轮亲和筛选，就是把噬菌体文库与固定在支持物上的靶分子温育，再把没结合上的颗粒洗掉。带着 3 000 个拷贝的颗粒是被许多个接触点同时按在那个表面上的，所以即使「诱饵–靶」这一对本身结合很弱，它也能挺过洗涤——这就是高亲合力（avidity，多点同时结合叠加起来的结合强度），也就意味着低严格性。而只带 5 个甚至更少拷贝的颗粒，能不能留下来就在很大程度上取决于单次相互作用的强弱。**pⅧ 展示是为了抓住弱的、稀有的结合者而摆的阵；pⅢ 展示则是为了只认结合得紧的那些。**",
      src: "现分 p.231"
    },
    {
      link_en: "the wash itself comes in two layouts, and neither works in one pass",
      link_cn: "而这一步洗涤有两种摆法，并且两种都不可能一遍做完",
      recall_en: "the selection round assumed in the step above, now spelled out",
      recall_cn: "上一步里被当作前提的「一轮筛选」，这里把它摊开",
      en: "Direct affinity screening couples the target protein molecules to a solid support, incubates the library phage with the support and washes the unbound phage off; what remains has affinity for the protein being screened against. Indirect affinity screening labels the target protein with biotin, incubates it with the library phage, then spreads the mixture on a plate containing streptavidin, a protein that binds biotin, and washes the unbound phage off; the phage left on the plate are the bound ones. Bound phage are eluted, used to infect bacteria, amplified, and sent into a new round. **Several successive rounds of affinity purification are what enrich the target-binding phage, because every round starts from a population already amplified out of the previous round's survivors.**",
      cn: "直接法亲和筛选是把靶蛋白质分子耦联到固相支持物上，文库噬菌体与固相支持物温育后洗去未结合的噬菌体，剩下的就是与所筛选蛋白有亲和性的噬菌体。间接法亲和筛选是把生物素标记的靶蛋白质分子与文库噬菌体温育，再铺在含有链霉亲和素（一种能与生物素相结合的蛋白质）的平皿上，洗去未结合的噬菌体，保留在平皿上的就是结合状态的噬菌体。洗脱结合状态的噬菌体后感染细菌、扩增噬菌体，再开始新一轮筛选。**真正把结合靶蛋白的噬菌体富集起来的，是连续几次的亲和纯化，因为每一轮的起点都是上一轮幸存者扩增出来的群体。**",
      src: "现分 p.232"
    }
  ]
};
