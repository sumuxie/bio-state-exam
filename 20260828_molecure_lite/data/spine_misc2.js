/* Three more of the singleton spines.

   Transcribed from the scan of《现代分子生物学》第五版: printed pages 106–111
   (§3.9 RNA 的编辑/再编码/化学修饰, §3.10 mRNA 转运) and 270–274 (§7.5 固氮基因调控).

   WHY THESE THREE ARE HERE. spine_misc.js carries §2.6 转座 and §2.7 SNP, the first
   two leftovers of the coverage survey. These are the remaining three: §3.9 and §3.10
   scored NEAR-ABSENT in all six trainers, and §7.5 scored COVERED only because the
   probe matched biochemistry nodes about the CHEMISTRY of nitrogen fixation and could
   not tell a pathway from the control of a pathway. The nitrogenase steps below are
   the run-up; the regulation proper starts at §7.5.2.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. Codon 2 153 of apolipoprotein B; yeast U24 snoRNA;
      16 MgATP per N₂; R. trifolii on clover; a few hundred μmol/L against tens of
      nmol/L inside one nodule cell.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   WHAT IS NOT ON THE CITED PAGES is flagged with `beyond: true` and a `beyondNote`.
   Two kinds turn up here. One is ordinary standard content. The other is material
   that IS in the transcript but on a neighbouring printed page — §3.8's self-splicing
   introns on 106, §3.9.3's snoRNA paragraph running onto 111, §7.5's opening on 270 —
   which the node's own page range does not cover; the note says which. The transcript
   marks illegible handwriting ⟨?⟩; nothing has been invented to fill one. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-3-9 */
window.BIOLITE_SPINE["M-3-9"] = {
  /* Declared rather than left implicit. The first group is the molecular-biology
     furniture a reader of chapter 3 already has; the second is chemistry a biochemist
     holds (nucleophile, phosphodiester bond, amino group); the third are ordinary
     words that happen to also be glossary entries. Nothing load-bearing is parked
     here — ribozyme, transesterification, lariat, internal guide sequence, RNA
     editing, ADAR, guide RNA, recoding, ribosome hopping, selenocysteine,
     pyrrolysine, pseudouridine, snoRNA and the D box are all introduced in the prose
     at first use. */
  assumed: ["DNA", "RNA", "mRNA", "tRNA", "rRNA", "pre-mRNA", "gene", "genome",
            "protein", "enzyme", "cell", "nucleus", "codon", "amino acid", "base",
            "base pair", "base pairing", "nucleotide", "nucleoside", "residue",
            "transcription", "translation", "ribosome", "intron", "exon", "splicing",
            "spliceosome", "splice site", "transcript", "reading frame", "template",
            "start codon", "stop codon", "terminator", "mutation", "central dogma",
            "phosphodiester bond", "phosphodiester", "nucleophile", "hydroxyl",
            "amino group", "methyl group", "ribose", "sulfur", "guanosine",
            "adenosine", "uridine", "uracil", "adenine", "guanine", "cytosine",
            "thymine", "inosine", "hypoxanthine", "deamination", "methylation",
            "mitochondria", "mitochondrion", "chloroplast", "organelle", "eukaryote",
            "prokaryote", "secondary structure", "complex", "subunit", "catalysis",
            "glutamine", "glutamate", "arginine", "leucine", "proline",
            "phenylalanine", "tyrosine", "apolipoprotein", "receptor", "liver",
            "intestine", "brain", "muscle", "testis", "tissue", "tumour", "domain",
            "pocket", "gap", "target", "processing"],
  nodeTitle_en: "RNA editing, recoding and chemical modification",
  nodeTitle_cn: "RNA 的编辑、再编码和化学修饰",
  title_en: "A gene is copied into RNA and the copy is then altered — bases swapped, uridines inserted, reading rules rewritten, chemical groups hung on — so **the message a ribosome finally reads differs from the one written in the DNA, and every mechanism in this chain is one way of producing that difference**",
  title_cn: "基因被抄成 RNA，这份抄件随后还会被改动——碱基被替换、尿苷被插入、读码规则被改写、化学基团被挂上去——于是**核糖体最终读到的信息，与 DNA 上写着的那一份已经不同；而这条链上的每一种机制，都是造出这种差别的一条途径**",
  steps: [
    {
      en: "The central dogma draws a straight line between DNA, RNA and protein: a continuous DNA sequence is transcribed faithfully into an mRNA sequence, and that mRNA is translated into a protein. Split genes and RNA splicing added one step to that line, since a transcript now has stretches cut out of it before it is read. **Splicing shortens the transcript and leaves the actual coding sequence written in the DNA exactly as it was — which is the assumption everything below breaks.**",
      cn: "中心法则在 DNA、RNA 和蛋白质之间画了一条直线：连续的 DNA 序列被真实地转录成 mRNA 序列，再翻译成蛋白质分子。断裂基因的发现和 RNA 剪接给这条线加了一步，因为转录本在被读之前，要先被剪掉几段。**剪接只是让转录本变短，DNA 上实际的编码序列一个字母都没有变——而下面所有内容，破坏的正是这个前提。**",
      src: "现分 p.107"
    },
    {
      link_en: "and even inside splicing itself, some introns need no machine to remove them",
      link_cn: "而且就在剪接内部，有些内含子根本不需要任何机器来切它",
      en: "Some introns are cut out of a transcript by the transcript itself. Removal of a group I self-splicing intron is two transesterification reactions — one phosphodiester bond handed over to a new partner, twice over. In the first, a free guanosine or guanosine nucleotide (GMP, GDP or GTP) is the nucleophile: its 3′-OH attacks the phosphodiester bond at the intron's 5′ end and cuts the RNA chain open upstream. In the second, the free 3′-OH of the upstream exon attacks the phosphodiester bond at the intron's 3′ nucleotide, the intron comes away completely, and the two exons are joined by a new phosphodiester bond. **A group I intron is released as a linear molecule, and neither transesterification hydrolyses anything, so the energy of the phosphodiester bonds is kept and the excision costs the cell nothing.**",
      cn: "有些内含子是被转录本自己切掉的。Ⅰ 类自剪接内含子的切除，就是两次转酯反应（trans-esterification）——同一个磷酸二酯键被交到新的搭档手上，交两次。第一次，由一个游离的鸟苷或鸟苷酸（GMP、GDP 或 GTP）充当亲核基团：它的 3′-OH 攻击内含子 5′ 端的磷酸二酯键，从上游把 RNA 链切开。第二次，上游外显子的自由 3′-OH 攻击内含子 3′ 位核苷酸上的磷酸二酯键，内含子被完全切下，上下游两个外显子通过新的磷酸二酯键相连。**Ⅰ 类内含子释放出来的是线性内含子，而且两次转酯反应都不水解任何东西，磷酸酯键的能量被贮存下来，这次切除不花细胞一分钱。**",
      src: "现分 p.106（图 3-35；「不需要耗能、磷酸酯键的能量被贮存」见该页手写批注）",
      beyond: true,
      beyondNote: "Ⅰ/Ⅱ 类自剪接内含子写在印刷页 106 上，属 §3.8 的末尾，落在本节点所标的 107–110 之外。内容确实在转录稿里，只是不在所引页面上；「不需要耗能」一句来自该页红笔手写批注，不是印刷正文。"
    },
    {
      link_en: "and a loose nucleophile in solution would cut anywhere, so the intron holds it in place",
      link_cn: "而一个在溶液里乱跑的亲核基团会到处下刀，所以内含子把它按住",
      en: "A group I intron is usually smaller than a group II intron, and it folds into a conserved secondary structure with two working parts: a pocket that accommodates the guanosine or guanosine nucleotide, and a stretch called the internal guide sequence that base-pairs with the 5′ splice site sequence. **Holding the nucleophile in a pocket and pinning the 5′ splice site down by base pairing is what fixes the precise bond the guanosine attacks, so an RNA working without any protein still cuts at one position rather than a neighbouring one.**",
      cn: "Ⅰ 类内含子通常比 Ⅱ 类内含子小，它折叠成一个保守的二级结构，其中有两个干活的部件：一个容纳鸟苷或鸟苷酸结合的口袋，以及一段与 5′ 剪接位点序列配对的「内在指导序列」（internal guide sequence）。**把亲核基团扣在口袋里、再用碱基配对把 5′ 剪接位点钉住，正是用来确定鸟苷亲核攻击的精确位置的；于是一条没有任何蛋白质帮忙的 RNA，仍然只切在这一处，而不是旁边那一处。**",
      src: "现分 p.106",
      beyond: true,
      beyondNote: "同上：Ⅰ 类内含子的保守二级结构写在印刷页 106（§3.8 末尾），不在本节点所标的 107–110 页范围内。"
    },
    {
      link_en: "the second family does the same chemistry with a nucleophile it already owns",
      link_cn: "第二类内含子用同样的化学，只是亲核基团是它自己身上的",
      recall_en: "the free guanosine of the group I case, two steps up",
      recall_cn: "上面第二步里那个游离的鸟苷",
      en: "Group II self-splicing introns sit mainly in the rRNA genes of eukaryotic mitochondria and chloroplasts. Their transesterifications require no free guanosine or guanosine nucleotide at all: the nucleophile is the 2′-OH of an adenosine near the intron's own 3′ end, and it attacks the phosphodiester bond at the intron's 5′ end, cutting the chain upstream and folding the intron back on itself into a lariat, a loop closed by that new bond. The upstream exon's free 3′-OH then attacks the intron's 3′ nucleotide and the two exons are joined. **A group II intron carries its own nucleophile inside itself and leaves as a lariat, and the reaction needs Mg²⁺.**",
      cn: "Ⅱ 类自剪接内含子主要存在于真核生物线粒体和叶绿体的 rRNA 基因中。它的转酯反应完全不需要游离的鸟苷或鸟苷酸：充当亲核基团的是内含子自身靠近 3′ 端的一个腺苷酸的 2′-OH，它攻击内含子 5′ 端的磷酸二酯键，从上游切开链，同时让内含子折回自身、形成套索结构（lariat，即被那个新键封起来的一个环）。随后上游外显子的自由 3′-OH 攻击内含子 3′ 位核苷酸，两个外显子相连。**Ⅱ 类内含子的亲核基团长在自己身上，切完之后以套索的形状离开，而且这个反应需要 Mg²⁺。**",
      src: "现分 p.106（图 3-36；「需要 Mg²⁺」见该页手写批注）",
      beyond: true,
      beyondNote: "同上：Ⅱ 类自剪接内含子写在印刷页 106（§3.8 末尾），不在本节点所标的 107–110 页范围内；「需要 Mg²⁺」来自该页红笔手写批注。"
    },
    {
      link_en: "so line the three kinds of splicing up and one column separates them",
      link_cn: "于是把三种剪接并排放着看，有一栏把它们分开了",
      en: "Table 3-11 puts the three types side by side. Nuclear pre-mRNA splicing is the common one, used by most eukaryotic genes; it runs two transesterifications with an A as its branch point and is carried out by the major spliceosome. Group II self-splicing is rare, found in eukaryotic genes of certain organelles and in some prokaryotic genes, and its mechanism resembles the pre-mRNA case. Group I self-splicing is rare as well, found in nuclear rRNA and organelle genes of some eukaryotes and in a few prokaryotic genes, with a G as its branch point. **Two of the three types are catalysed by a ribozyme — a catalytic RNA — encoded in the intron itself, so for those two the machinery that removes the sequence is written inside the sequence being removed.**",
      cn: "表 3-11 把三种剪接并排列了出来。细胞核 pre-mRNA 剪接是常见的那一种，适用于大多数真核基因；它走两步转酯反应，分支点为 A，由主要剪接体催化。Ⅱ 类自剪接内含子罕见，来自某些细胞器的真核基因及原核基因，机制与 pre-mRNA 相似。Ⅰ 类自剪接内含子同样罕见，见于某些真核生物的细胞核 rRNA、细胞器基因以及少量原核基因，分支点为 G。**三种里有两种的催化机器是内含子自己编码的核酶（ribozyme，即具有催化功能的 RNA）；对这两种来说，负责切除的机器就写在被切除的那段序列里面。**",
      src: "现分 p.107（表 3-11）"
    },
    {
      link_en: "all of that removes sequence and never changes a base — the next thing does",
      link_cn: "以上都只是把序列拿掉，一个碱基都没改；接下来这件事会改",
      en: "RNA editing is one of the ways a pre-mRNA gets processed: nucleotide residues are inserted, deleted or substituted, and the genetic information the DNA encoded is thereby changed. Two mechanisms carry it out — site-specific deamination, and insertion or deletion of uracil directed by a guide RNA. **Editing rewrites the sequence of an mRNA and with it the protein-coding information, inside a cell whose DNA has not been touched.**",
      cn: "RNA 的编辑（RNA editing）是 mRNA 前体的加工方式之一：通过插入、删除或取代一些核苷酸残基，使 DNA 所编码的遗传信息发生变化。介导它的机制有两种——位点特异性脱氨基作用，以及指导 RNA 引导的尿嘧啶插入或删除。**编辑改写的是 mRNA 的序列，连带改写蛋白质编码信息；而在同一个细胞里，DNA 一个碱基都没被动过。**",
      src: "现分 p.107, p.108"
    },
    {
      link_en: "and one gene shows what a single edited base is worth",
      link_cn: "有一个基因，能说明改动单个碱基值多少钱",
      en: "The apolipoprotein B gene of mammals is the case studied most. Its coding region is 4 563 codons long and its DNA sequence is identical in every tissue. In liver the gene gives a complete mRNA, translated into a full-length protein of 4 563 amino acids with a relative molecular mass of 5.1×10⁵. In intestine the mRNA carries only 2 153 codons and yields a protein of 2.5×10⁵, which is the N-terminal portion of the full-length one. Sequence comparison shows the intestinal mRNA identical to the liver mRNA except at codon 2 153, where CAA has become UAA. **Site-specific deamination turns one C into a U, a glutamine codon becomes a stop codon, and a single DNA sequence yields a full-length protein in one tissue and a truncated one in another.**",
      cn: "哺乳动物载脂蛋白 B（APOB）基因是被研究得最多的例子。它的编码区共 4 563 个密码子，在所有组织中 DNA 序列都相同。在肝中，该基因转录产生完整的 mRNA，翻译成有 4 563 个氨基酸的全长蛋白质，相对分子质量 5.1×10⁵。在肠中合成的 mRNA 只包含 2 153 个密码子，翻译出相对分子质量 2.5×10⁵ 的蛋白质，而它其实就是全长载脂蛋白的 N 端那一截。序列比较显示，肠 mRNA 与肝 mRNA 完全相同，只有第 2 153 位密码子例外：CAA 变成了 UAA。**位点特异性脱氨基作用把一个 C 变成 U，编码谷氨酰胺的密码子就变成了终止密码子；于是同一份 DNA 序列，在一个组织里给出全长蛋白，在另一个组织里给出截短的蛋白。**",
      src: "现分 p.108（图 3-37）"
    },
    {
      link_en: "so what stops the same enzyme from doing that to every base it could reach",
      link_cn: "那么，是什么拦着同一个酶，不让它把够得着的碱基全改一遍",
      en: "The C→U of apolipoprotein B mRNA and the A→I of glutamate receptor mRNA are both deaminations, catalysed by a cytosine deaminase and an adenine deaminase; the adenine deaminase acting on RNA is ADAR, and I is inosine, what an adenine becomes on losing its amino group. Those enzymes have little specificity on their own: an adenine deaminase can act on any adenosine residue in a double-stranded RNA region. **Editing takes place inside a complex that carries the catalytic deaminase subunit together with additional RNA-binding regions, and those extra regions are what pick out the one specific target site to be edited.**",
      cn: "载脂蛋白 mRNA 中的 C→U 与谷氨酸受体蛋白 mRNA 中的 A→I，都属于脱氨基作用的结果，分别由胞嘧啶脱氨酶和腺嘌呤脱氨酶催化；作用于 RNA 的腺嘌呤脱氨酶就是 ADAR，而 I 是次黄嘌呤核苷（inosine），即腺嘌呤脱去氨基之后的产物。这些酶单独看特异性并不强：腺嘌呤脱氨酶可以作用于双链 RNA 区的任何一个腺苷酸残基。**RNA 的编辑发生在一个复合体中，复合体里既有具催化作用的脱氨酶亚基，又有附加的 RNA 结合区；正是这些附加区域，把要编辑的那一个特异性靶位点挑了出来。**",
      src: "现分 p.109"
    },
    {
      link_en: "and the same trick is played on many messages, in different tissues",
      link_cn: "同一手法被用在许多条信息上，而且分布在不同组织里",
      en: "Table 3-12 collects further mammalian examples, and they land on different targets in different tissues. In muscle a U→A in galactosidase mRNA turns a phenylalanine codon into a tyrosine codon. In testis and in tumours a U→C in Wilms tumour gene-1 mRNA turns a leucine codon into a proline codon. In tumours a C→U in neurofibromatosis gene-1 mRNA turns an arginine codon into a stop codon. In brain an A→I in glutamate receptor mRNA turns several glutamate codons into arginine codons. **One base changed in an mRNA either swaps one amino acid for another or ends the protein early, and the same gene is edited in one tissue while it is left alone elsewhere.**",
      cn: "表 3-12 收集了更多哺乳动物中的实例，它们落在不同组织的不同靶标上。肌肉里，半乳糖苷酶 mRNA 上的 U→A 把苯丙氨酸密码子变成酪氨酸密码子。睾丸和肿瘤里，Wilms 肿瘤基因 -1 mRNA 上的 U→C 把亮氨酸密码子变成脯氨酸密码子。肿瘤里，神经纤维瘤基因 -1 mRNA 上的 C→U 把精氨酸密码子变成终止子。脑里，谷氨酸受体蛋白 mRNA 上的 A→I 把多个谷氨酸密码子变成精氨酸密码子。**mRNA 上改动一个碱基，要么把一个氨基酸换成另一个，要么让蛋白质提前收尾；而同一个基因，在一个组织里被编辑，在别的组织里则原封不动。**",
      src: "现分 p.108（表 3-12）"
    },
    {
      link_en: "the other mechanism does not swap a base at all — it adds bases that no gene encodes",
      link_cn: "另一种机制根本不换碱基，它添进去的碱基是任何基因都没有编码过的",
      en: "Cytochrome b mRNA of the parasite *Leishmania* contains many uracil residues that no nuclear gene encodes. The information for inserting them comes from a guide RNA, which is an RNA carrying a sequence complementary to the edited cytochrome b mRNA. Guide RNA and the region to be edited pair over a considerable stretch, and the guide RNA holds unpaired adenines that stand open as gaps in the duplex. **Every unpaired adenine on the guide RNA is a template position for one inserted uracil; once the insertions are made the guide RNA dissociates from the mRNA, and the mRNA is then used as the template for translation.**",
      cn: "寄生虫利什曼原虫属的细胞色素 b mRNA 中，含有许多独立于核基因的尿嘧啶残基——没有任何核基因编码过它们。特异性插入这些残基的信息来自指导 RNA（guide RNA，gRNA），即一条带有与编辑后细胞色素 b mRNA 互补序列的 RNA。指导 RNA 与被编辑区及其周围序列有相当程度的互补配对，而它自身上留着一些未能配对的腺嘌呤，在双链里空出一个个缺口。**指导 RNA 上每一个未配对的腺嘌呤，就是一个尿嘧啶的插入模板位；插入完成后指导 RNA 从 mRNA 上解离下来，mRNA 随即被用作翻译的模板。**",
      src: "现分 p.109（图 3-38）"
    },
    {
      link_en: "so what is a cell buying with all this",
      link_cn: "那么细胞花这些力气，买到的是什么",
      en: "Editing does three things. It corrects: genetic information that a gene lost in the course of a mutation can be restored at the RNA level. It controls translation: editing can build a start codon or a stop codon, or take one away, which makes it one way of regulating gene expression. And it expands the genetic information: an edited message can give a gene product a new structure and a new function. **One DNA sequence is made to yield more than one message, and a product with a new structure and a new function is something evolution can then work on.**",
      cn: "RNA 编辑做三件事。校正作用：有些基因在突变过程中丢失的遗传信息，可能通过 RNA 的编辑在 RNA 水平上恢复。调控翻译：通过编辑可以构建或去除起始密码子和终止密码子，这本身就是基因表达调控的一种方式。扩充遗传信息：编辑后的信息能使基因产物获得新的结构和功能。**一份 DNA 序列因此能给出不止一份信息；而一个带着新结构、新功能的产物，正是进化可以接着往下做文章的东西。**",
      src: "现分 p.109"
    },
    {
      link_en: "editing changes the letters; the next thing changes how the letters are grouped",
      link_cn: "编辑改的是字母；接下来这件事改的是字母怎么分组",
      en: "RNA recoding is the name for a change in the way an mRNA is coded and read: in some organisms a message is translated in more than one manner, under the influence of tRNA, rRNA and associated protein factors. The reading signal can shift by +1 or by −1, which is called programmed ribosomal +1/−1 frameshifting, and a ribosome can even skip 50 nucleotides in one jump, which is called ribosome hopping. **Shifting the frame or hopping over 50 bases means the ribosome groups the mRNA into codons differently from the way the DNA laid them out, while the mRNA sequence itself stays exactly as transcribed.**",
      cn: "RNA 的再编码（RNA recoding）指的是 RNA 编码和读码方式的改变：在某些有机体里，一条信息不是以固定方式被翻译的，而是在 tRNA、rRNA 和相关蛋白因子的作用下，以不同方式被翻译。读码信号可以发生 +1 或 −1 的移位，称为核糖体程序性 +1/−1 移位；核糖体甚至可以一次跳过 50 个核苷酸，称为核糖体跳跃。**移码或者跳过 50 个碱基，意味着核糖体把 mRNA 切成密码子的方式，与 DNA 当初排布它们的方式不一样了；而 mRNA 的序列本身，仍然是转录出来的原样。**",
      src: "现分 p.110"
    },
    {
      link_en: "and the same loosening of the rules is where two extra amino acids come from",
      link_cn: "而规则的这种松动，正是两个额外氨基酸的来处",
      recall_en: "the stop codon that editing created in apolipoprotein B is being read the other way here",
      recall_cn: "编辑在载脂蛋白 B 上造出来的那个终止密码子，在这里被反过来读了",
      en: "Nature turns out to hold a 21st and a 22nd amino acid: selenocysteine and pyrrolysine, both of them encoded through terminator read-through. Frameshifting, ribosome hopping and terminator read-through are all forms of recoding, because each uses a decoding rule other than the standard one. **A codon the table calls a stop is read as an amino acid, and recoding lets one mRNA give two or more related but different proteins, which is itself a way of regulating protein synthesis.**",
      cn: "自然界还存在第 21 和第 22 种氨基酸，即硒代半胱氨酸（selenocysteine）和吡咯赖氨酸（pyrrolysine），两者都是通过终止子通读而编码的。+1/−1 移码、核糖体跳跃以及终止子通读，都是再编码的表现方式，因为它们使用了不同于常规的基因解码规则。**密码表里写着终止的那个密码子，在这里被当成氨基酸读了出来；而再编码可以让一条 mRNA 产生两种或多种相互关联但又不同的蛋白质，这本身就是蛋白质合成的一种调节机制。**",
      src: "现分 p.110"
    },
    {
      link_en: "and after all that, individual bases still get chemically rebuilt one at a time",
      link_cn: "而在这一切之后，单个碱基还会被逐个做化学改造",
      en: "Some RNAs, pre-rRNA and tRNA above all, carry specific chemical modifications, and figure 3-39 sorts them into six classes. Methylation adds one or more −CH₃ to the base or to the ribose, as in m⁷G. Deamination takes an amino group off a base, guanine becoming hypoxanthine. Thiolation puts sulfur where an oxygen was, as in 4-thiouracil. Base isomerisation is a substitution within the ring, uracil rearranging into pseudouridine. Saturation of a double bond gives dihydrouracil. Nucleotide replacement puts an uncommon nucleotide in place of a common one, as with queuine. **Six kinds of change are made to a base after its RNA has already been transcribed, so the finished rRNA or tRNA is chemically a different molecule from the one the gene specified.**",
      cn: "有些 RNA，特别是前体 rRNA 和 tRNA，还会带有特异性的化学修饰；图 3-39 把它们归成六大类。甲基化：在核苷酸的碱基或核糖基上加一个或多个 −CH₃，例如鸟嘌呤甲基化产物 m⁷G。去氨基化：从碱基上去掉氨基，鸟嘌呤去氨基后成为次黄嘌呤。硫代：用硫取代碱基分子上的氧，例如 4-硫尿嘧啶。碱基的同分异构化：碱基环结构上发生分子替代，尿嘧啶变构生成假尿嘧啶（pseudouridine）。二价键的饱和化：把一个二价键饱和，得到二氢尿嘧啶。核苷酸的替代：用不常见核苷酸替换常见核苷酸，例如奎嘌呤。**六类改造都发生在 RNA 已经被转录出来之后、落在单个碱基上；于是成熟的 rRNA 或 tRNA，在化学上已经不是基因所指定的那个分子了。**",
      src: "现分 p.110（图 3-39）"
    },
    {
      link_en: "and something has to say which base out of thousands gets modified",
      link_cn: "而在成千上万个碱基里，总得有东西指出该改哪一个",
      recall_en: "the guide RNA of the editing steps finds an address by pairing too",
      recall_cn: "编辑那几步里的指导 RNA，同样是靠配对去找地址的",
      en: "Human cells alone carry 106 methylation products and 95 pseudouridine products on their rRNA molecules. No characteristic conserved sequence marking these positions has been found, and experimental evidence indicates that the modification is nevertheless site-specific. Small nucleolar RNA (snoRNA), only 70 to 100 nucleotides long, takes part: a snoRNA base-pairs with an rRNA and so picks out the position on it that needs modifying. In yeast, U24 snoRNA pairs with a 14-base stretch of rRNA, and one nucleotide inside that paired region ends up carrying the methyl group. **The D box on the snoRNA is currently taken to be the recognition site for the methylase, so one short RNA both finds the address on the rRNA and brings in the enzyme that writes there.**",
      cn: "仅人细胞内，rRNA 分子上就存在 106 种甲基化产物和 95 种假尿嘧啶产物。目前尚未发现标记这些位点的特征性保守序列，而实验证据表明，化学修饰仍然是位点特异的。相对分子质量只有 70~100 个核苷酸的核仁小 RNA（snoRNA）参与其中：一条 snoRNA 通过碱基配对与 rRNA 结合，把 rRNA 上需要修饰的位点找出来。在酵母中，U24 snoRNA 与 rRNA 上 14 个碱基的一段配对，配对区内的某一个核苷酸最终带上了甲基。**snoRNA 上的 D 盒（D box）现在一般被认为是甲基化酶的识别位点；于是一条很短的 RNA 既找到了 rRNA 上的地址，又把在那里落笔的酶带了过来。**",
      src: "现分 p.111（图 3-40）",
      beyond: true,
      beyondNote: "§3.9.3 的这一段（106 种甲基化 / 95 种假尿嘧啶、snoRNA 与 D 盒、图 3-40）排在印刷页 111 上，落在本节点所标的 107–110 之外。内容在转录稿里，只是跨到了下一页。"
    }
  ]
};

/* ==================================================================== M-3-10 */
window.BIOLITE_SPINE["M-3-10"] = {
  /* Short section, seven steps, and padding it would be dishonest: printed page 111
     gives three paragraphs and one figure. Nothing load-bearing is parked here — the
     nuclear pore complex, active transport, the export signal and the transport
     receptor are all introduced in the prose at first use. */
  assumed: ["DNA", "RNA", "mRNA", "gene", "protein", "enzyme", "cell", "nucleus",
            "cytoplasm", "nuclear envelope", "nuclear membrane", "membrane",
            "transcription", "translation", "ribosome", "template", "intron",
            "splicing", "polyadenylation", "poly(A)", "cap", "capping", "GTP",
            "hydrolysis", "active transport", "signal", "receptor", "eukaryote",
            "eukaryotic", "prokaryote", "bacterium", "physiology", "processing",
            "complex", "component", "target", "activity", "transport"],
  nodeTitle_en: "Getting mRNA out of the nucleus",
  nodeTitle_cn: "mRNA 转运",
  title_en: "A finished mRNA leaves the nucleus through a hole in the nuclear envelope, and **the cell burns GTP on every molecule that goes — which is what buys it the right to refuse the ones that were processed wrongly or damaged**",
  title_cn: "加工完毕的 mRNA 经核膜上的一个孔离开细胞核，而**每送走一条分子，细胞都要烧掉 GTP——正是这笔开销，买来了「把加工错误或已受损伤的那些挡回去」的权力**",
  steps: [
    {
      en: "A eukaryotic mRNA goes to the cytoplasm once its maturation is complete: capped at the 5′ end, cleared of its introns, and polyadenylated. **Maturity is the qualification for leaving, because the three processing events happen first and the crossing comes afterwards — an mRNA still being worked on is still inside the nucleus.**",
      cn: "真核 mRNA 要等加工成熟之后才去细胞质：5′ 端加帽、去除内含子、多腺苷酸化，三件事做完为止。**「成熟」在这里就是「出核资格」：三步加工在前，穿膜在后——一条还在被加工的 mRNA，人一定还在核里。**",
      src: "现分 p.111"
    },
    {
      link_en: "and there is exactly one kind of doorway it can use",
      link_cn: "而它能走的门只有一种",
      en: "The route out is a special structure sitting in the nuclear membrane, called the nuclear pore complex. An mRNA passes through it, reaches the cytoplasm, and there serves as the template from which a protein is translated. **A doorway that every message has to pass through is also the one place where every message can be inspected, which is what the rest of this chain is built on.**",
      cn: "出去的路是核膜上的一个特殊结构，叫核孔复合体（nuclear pore complex）。mRNA 经它运出细胞核、进入细胞质，在那里充当翻译产生蛋白质的模板。**一道所有信息都必须经过的门，同时也是唯一一处所有信息都可以被检查的地方——这条链后面的内容，全建立在这一点上。**",
      src: "现分 p.111（图 3-41）"
    },
    {
      link_en: "and passing through it is not free",
      link_cn: "而穿过这道门是要花钱的",
      en: "Moving an mRNA from nucleus to cytoplasm — its export — is an active transport process, and the energy for it is supplied by the hydrolysis of GTP. **Export costs the cell a hydrolysed GTP per molecule shipped, which makes it an action the cell performs on each mRNA and therefore an action the cell can withhold.**",
      cn: "mRNA 从细胞核进入细胞质，是一个主动转运过程，能量由 GTP 水解提供。**每送出一条分子都要水解掉 GTP，于是出核成了细胞对每一条 mRNA 主动施行的动作——既然是主动施行的，也就可以不施行。**",
      src: "现分 p.111（该页手写批注在 GTP 旁写「GTP 供能」）"
    },
    {
      link_en: "and withholding it is exactly what the regulation is for",
      link_cn: "而「不施行」正是那套调控存在的理由",
      en: "Export is also finely regulated by a whole series of proteins, and what that regulation prevents is the escape of RNA that was processed wrongly or has already been damaged. RNA of that kind, once in the cytoplasm, would be translated, and what came off the ribosome would endanger the cell's normal physiological activity, in the worst case fatally. **Keeping a defective message on the nuclear side of the envelope is cheaper for the cell than dealing with the protein that message would otherwise have produced.**",
      cn: "出核过程还受一系列蛋白质的精细调控，而这套调控要挡住的，是加工错误或已受损伤的 RNA 溜出去。这类 RNA 一旦进入细胞质就会被翻译，从核糖体上下来的东西会危害细胞正常的生理活动，严重时甚至造成致命后果。**把一条有缺陷的信息拦在核膜里侧，对细胞来说，比事后去收拾这条信息造出来的蛋白质要便宜得多。**",
      src: "现分 p.111"
    },
    {
      link_en: "so what does the doorway actually read off a molecule that arrives",
      link_cn: "那么，门上到底读的是到访分子身上的什么",
      en: "A mature mRNA has to bind a group of proteins that carry the signal for transport across the nuclear membrane. A transport receptor recognises those signals and then guides the RNA through the pore and out of the nucleus. **What is read at the pore is the set of proteins loaded onto an mRNA, so which RNA is allowed to leave is decided by what the cell has put on it during processing.**",
      cn: "成熟 mRNA 必须结合一组携带了细胞核跨膜转运信号的蛋白质。转运受体识别这些信号，然后指导这条 RNA 通过核孔离开细胞核。**门上读的是装在 mRNA 身上的那套蛋白质；于是「哪条 RNA 获准离开」，取决于细胞在加工过程中给它装了什么。**",
      src: "现分 p.111"
    },
    {
      link_en: "and the escort does not stay in the cytoplasm with the cargo",
      link_cn: "而这套护送班子不会跟着货一起留在细胞质里",
      en: "Once the mRNA is in the cytoplasm, the protein components that took part in the transport dissociate from it, are recognised, and go back into the nucleus to take part in the next round of transport. **A reusable escort means a fixed pool of transport proteins can carry an enormous number of messages, and the size of that pool becomes one more quantity the cell can set.**",
      cn: "mRNA 进入细胞质之后，参与转运的蛋白质组分就从它身上解离下来，被识别后重新回到细胞核，参与下一轮 mRNA 的运输。**护送班子可以反复使用，意味着一批数量固定的转运蛋白能运走极大量的信息；而这批蛋白有多少，又成了细胞可以调的一个量。**",
      src: "现分 p.111（图 3-41）"
    },
    {
      link_en: "and this whole step exists only because of where the envelope sits",
      link_cn: "而这一整步之所以存在，只是因为核膜所在的位置",
      en: "In a eukaryotic cell the nuclear envelope stands between the place where an mRNA is made and the place where ribosomes read it, so transcription and translation happen in two separate compartments and one of them has to be crossed. A bacterium has no such barrier and its ribosomes start translating a message while it is still being transcribed. **Separating the two processes in space is what creates room for a checkpoint between them, and export through the pore is that checkpoint.**",
      cn: "在真核细胞里，核膜横在「mRNA 被造出来的地方」和「核糖体读它的地方」之间，转录与翻译因此发生在两个分开的区室里，中间必须穿过一次。细菌没有这道屏障，它的核糖体在信息还在被转录时就开始翻译了。**把两个过程在空间上分开，才腾出了在它们之间设一道关卡的余地；而经核孔的转运，就是这道关卡。**",
      src: "现分 p.111",
      beyond: true,
      beyondNote: "印刷页 111 只描述真核 mRNA 的转运过程，没有把原核的转录-翻译偶联拿来作对照。这一条是标准内容，用来说明这一步为什么存在，但不在所引页面上。"
    }
  ]
};

/* ===================================================================== M-7-5 */
window.BIOLITE_SPINE["M-7-5"] = {
  /* Declared rather than left implicit. The first group is molecular-biology and
     cell-biology furniture; the second is chemistry and metabolism a biochemist
     already holds (ferredoxin, flavodoxin, ammonia, glutamine, molybdenum); the
     third are ordinary words that happen to also be glossary entries. Nothing
     load-bearing is parked here — nitrogenase, diazotroph, Fe-protein,
     FeMo-protein, the FeMo cofactor, homocitrate, NifA, NifL, σ⁵⁴/RpoN, UAS, NtrB,
     NtrC, GlnD, GlnB, GlnK, lectin, nodulin and leghemoglobin are all introduced in
     the prose at first use. */
  assumed: ["DNA", "RNA", "mRNA", "gene", "genome", "operon", "promoter", "protein",
            "polypeptide", "enzyme", "cell", "bacterium", "bacteria", "archaea",
            "cyanobacteria", "actinomycete", "plant", "root", "seed", "legume",
            "symbiosis", "photosynthesis", "chemosynthesis", "metabolite",
            "nucleic acid", "amino acid", "transcription", "translation",
            "RNA polymerase", "holoenzyme", "sigma factor", "domain", "subunit",
            "dimer", "heterodimer", "tetramer", "oligomer", "cofactor",
            "prosthetic group", "haem", "heme", "isoform", "intron",
            "reading frame", "homology", "homologous", "myoglobin", "glycoprotein",
            "lipopolysaccharide", "oligosaccharide", "galactose", "mannose",
            "N-acetylglucosamine", "ATP", "ADP", "hydrolysis", "phosphorylation",
            "phosphorylated", "dephosphorylate", "electron", "reduction", "reduce",
            "reduced", "oxidation", "catalyst", "catalyse", "ferredoxin",
            "flavodoxin", "hydrogenase", "ammonia", "glutamine", "nitrogen",
            "oxygen", "hydrogen", "proton", "molybdenum", "vanadium", "carbon",
            "iron", "sulfur", "centrifugation", "supernatant", "conformation",
            "complex", "component", "activity", "activator", "regulator",
            "structural gene", "expression", "concentration", "signal", "target",
            "partial pressure", "anaerobic", "aerobic", "conserved", "cascade",
            "cytoplasm", "respiratory chain", "assimilation", "infection", "host",
            "system", "region", "site", "sequence", "structure", "surface",
            "membrane", "cell wall", "receptor", "factor", "affinity", "residue",
            "molecule", "product", "reaction", "substrate", "energy"],
  nodeTitle_en: "Regulation of the nitrogen fixation genes",
  nodeTitle_cn: "固氮基因调控",
  title_en: "Nitrogenase spends 16 MgATP on one molecule of N₂ and a little oxygen wrecks it, so **every layer of nif regulation is the cell refusing to build the enzyme until nitrogen is scarce and oxygen is low at the same moment**",
  title_cn: "固氮酶每还原一分子 N₂ 要耗掉 16 个 MgATP，而一点氧气就能把它毁掉；所以**nif 基因上一层又一层的调控，都是细胞在拒绝：除非氮源匮乏与低氧同时成立，否则不造这个酶**",
  steps: [
    {
      en: "Nitrogen is a basic constituent of every organism — proteins, nucleic acids and many small metabolites are nitrogen compounds — and although 78% of the atmosphere is nitrogen gas, very few kinds of organism can use free nitrogen directly. Nitrogen fixation is the conversion of free nitrogen into combined nitrogen. N₂ is the most stable diatomic molecule known and opening its N≡N triple bond takes a great deal of energy: the human ammonia-synthesis route runs at high temperature and high pressure over a catalyst and eats about 1% of all the energy humanity uses in a year. **Lightning and similar natural events fix about 5% of the yearly total and industry about 30%, while more than half of it is done by living organisms.**",
      cn: "氮是所有生物的基本组成成分——蛋白质、核酸及许多小分子代谢产物都是氮化合物；而地球大气虽有 78% 是氮气，有能力直接利用这种游离态氮的生物种类却很少。固氮就是将游离态氮转化为化合态氮的过程。氮气分子是已知最稳定的双原子分子，打开 N≡N 三键需要大量能量：人类的合成氨法要在高温高压下由催化剂催化，每年消耗人类总能耗的 1%，属于高能耗高污染的生产过程。**每年通过雷电等自然现象转化的氮约占总固氮量的 5%，人类合成氨工业约占 30%，而总固氮量的一半以上，是由生物固氮贡献的。**",
      src: "现分 p.270",
      beyond: true,
      beyondNote: "§7.5 的开篇（固氮的定义、N≡N 的稳定性、5%/30%/一半以上的份额、合成氨占人类总能耗 1%）印在页 270 上，落在本节点所标的 271–274 之外。内容在转录稿里，只是排在前一页。"
    },
    {
      link_en: "and the organisms doing that half are a narrow group living three ways",
      link_cn: "而做掉这一半的生物是很窄的一群，活法有三种",
      en: "Every organism found so far to fix nitrogen is a prokaryote: bacteria, actinomycetes and cyanobacteria. A nitrogen-fixing prokaryote is a diazotroph, and three ways of living divide them. A free-living diazotroph lives independently and pays for fixation out of photosynthesis or chemosynthesis. An associative diazotroph keeps a looser mutual arrangement, sitting against a plant's root system, taking up what the roots secrete and returning nitrogen compounds. **A symbiotic diazotroph builds a mutually dependent relationship with a plant, fixing on the nutrients the plant supplies and handing nitrogen compounds back, and the rhizobia forming nodules on legumes are the most studied case.**",
      cn: "迄今已经发现的能够固氮的生物都是原核生物：细菌、放线菌和蓝藻。能固氮的原核生物统称固氮菌（diazotroph），按生活状态分成三类。自养固氮菌（free-living）独立生活，靠光合作用或化能合成的能量支撑固氮。联合固氮菌（associative）与植物形成比较松散的互利关系，依附在植物根系附近，吸收根系分泌的营养成分，回馈氮化合物。**共生固氮菌（symbiotic）与植物形成互相依赖的共生关系，利用植物提供的养料高效固氮，再向植物提供氮化合物——其中研究得最广泛的，就是在豆科植物上形成根瘤的根瘤菌。**",
      src: "现分 p.270",
      beyond: true,
      beyondNote: "固氮菌按生活状态分三类（自养/共生/联合）印在页 270 上，落在本节点所标的 271–274 之外。"
    },
    {
      link_en: "whichever way it lives, it needs one enzyme, and that enzyme was found by watching it die in air",
      link_cn: "不管哪种活法，它都需要同一个酶；而这个酶，是在空气中失活时被人看见的",
      en: "In the early 1960s a dried anaerobic clostridium was dissolved in dilute salt solution, the supernatant was taken after centrifugation, ¹⁵N₂ was added, and after a while ¹⁵NH₃ appeared in the system; the activity in that cell-free extract was then rapidly and completely destroyed by air. The enzyme responsible is nitrogenase, every nitrogen-fixing organism has it, and its structure and function are highly conserved. Nitrogenase catalyses N₂ + 8e⁻ + 8H⁺ + 16MgATP → 2NH₃ + H₂ + 16MgADP + 16Pi. **Sixteen MgATP are spent to reduce one molecule of N₂, and the very experiment that first measured the activity also watched it vanish in air — the cost and the fragility were on the table from the start.**",
      cn: "20 世纪 60 年代初，有人把晾干的厌氧微生物芽孢梭菌细胞溶于稀盐溶液，离心后取上清液，加入 ¹⁵N₂，一定时间后在反应体系中发现了 ¹⁵NH₃；而这份无细胞提取液中的活性，很快就被空气完全破坏。负责这件事的酶叫固氮酶（nitrogenase），所有固氮生物体内都有它，其结构和功能都很保守。固氮酶催化的反应是 N₂ + 8e⁻ + 8H⁺ + 16MgATP ⟶ 2NH₃ + H₂ + 16MgADP + 16Pi。**还原一分子氮气要花掉 16 个 MgATP；而最早测出这个活性的那个实验，同时也看着它在空气里消失——代价与脆弱，从第一天起就一起摆在桌上。**",
      src: "现分 p.271"
    },
    {
      link_en: "and the enzyme spending that much is built out of two proteins that must meet",
      link_cn: "花掉这么多钱的这个酶，是由两个必须碰面的蛋白质搭起来的",
      en: "Nitrogenase is built from two protein components, the Fe-protein and the FeMo-protein. FeMo-protein is an axially symmetric α₂β₂ heterotetramer assembled from two αβ heterodimers, and each αβ dimer binds one [8Fe-7S] P cluster and one FeMo cofactor — a [7Fe-Mo-9S-X] cluster with a homocitrate, a six-carbon acid, attached to its molybdenum atom, the X having recently been shown to be a carbon atom. Fe-protein is a dimer of two subunits joined by a single [4Fe-4S] cluster, each subunit carrying one MgATP binding site. **One nitrogenase is one FeMo-protein heterotetramer with two Fe-protein dimers bound to it, one to each αβ half, and fixation fails if either protein, the cofactor or any of those clusters is missing.** Under molybdenum shortage some diazotrophs make an iron-vanadium or an iron-iron cofactor in place of the FeMo cofactor.",
      cn: "固氮酶由铁蛋白（Fe-protein）和铁钼蛋白（FeMo-protein）两个蛋白质组分构成。铁钼蛋白是由两个 αβ 异二聚体聚合成的轴对称 α₂β₂ 异四聚体，每个 αβ 异二聚体结合一个 [8Fe-7S] 的 P 金属簇和一个铁钼辅因子（FeMo cofactor）——后者由一个 [7Fe-Mo-9S-X] 金属簇的钼原子上连接一个高柠檬酸（homocitrate，一种六碳酸）构成，其中的 X 原子最近被发现是一个碳原子。铁蛋白是两个亚基形成的二聚体，两亚基之间由一个 [4Fe-4S] 金属簇连接，每个亚基含有一个 MgATP 结合位点。**一个固氮酶，就是一个铁钼蛋白异四聚体加上结合在它两个 αβ 半边上的两个铁蛋白异二聚体；两种蛋白、辅因子和这些金属簇，缺任何一样固氮都做不成。**缺钼条件下，有些固氮生物可以合成铁钒辅因子或铁铁辅因子来代替铁钼辅因子。",
      src: "现分 p.271"
    },
    {
      link_en: "and the two proteins meet once per electron, which is where the time goes",
      link_cn: "而这两个蛋白每传一个电子才碰一次面——时间就花在这里",
      en: "Reducing one N₂ means passing eight electrons. Electron donors, ferredoxin and flavodoxin among them, hand an electron to the Fe-protein, reducing its [4Fe-4S]²⁺ to [4Fe-4S]⁺. That electron then moves to the [8Fe-7S] cluster of the FeMo-protein, a step that depends on the Fe-protein hydrolysing MgATP, after which the Fe-protein leaves the FeMo-protein, binds ATP again and takes up another electron. Inside the FeMo-protein the [8Fe-7S] cluster passes the electron on to the FeMo cofactor, which is the active site that binds the nitrogen molecule and catalyses its reduction. **One electron crosses per cycle and only about five cross per second, which is the rate-limiting step of the whole reaction — and the reason a cell relying on fixation has to build the enzyme in bulk.**",
      cn: "还原一分子氮气要传递 8 个电子。铁氧还蛋白和黄素氧还蛋白等电子供体先把电子交给铁蛋白，将其 [4Fe-4S]²⁺ 还原为 [4Fe-4S]⁺。这个电子随后从铁蛋白传到铁钼蛋白的 [8Fe-7S] 金属簇上，这一步依赖铁蛋白水解 MgATP；传完之后铁蛋白离开铁钼蛋白，重新结合 ATP 并接受下一个电子。在铁钼蛋白内部，[8Fe-7S] 金属簇再把电子传给铁钼辅因子，而铁钼辅因子就是结合氮分子、催化氮还原反应的活性位点。**每一轮只传一个电子，每秒只能传约 5 个，这是整个固氮反应的限速步骤——也正是靠固氮过日子的细胞必须成批地造这个酶的原因。**",
      src: "现分 p.271"
    },
    {
      link_en: "and while it is doing that slowly, it is also doing something wasteful",
      link_cn: "而它在慢慢干活的同时，还在干一件浪费的事",
      en: "Alongside reducing nitrogen, nitrogenase has a secondary activity: it reduces protons to molecular hydrogen. That reaction works against fixation twice over, since it consumes energy and produces H₂, which competitively inhibits the fixing activity. Some rhizobial strains, the Hup⁺ ones, carry a hydrogenase that catalyses the combination of that hydrogen with oxygen, letting the cell use the hydrogen the reaction released. **Burning the escaped hydrogen regenerates some of the ATP lost in proton reduction and consumes molecular oxygen in the neighbourhood of the enzyme, so a single reaction repairs two different kinds of damage.**",
      cn: "在还原氮的同时，固氮酶还有一个次要活性：把氢质子还原成分子氢。这一反应从两头拖后腿，因为它既消耗能量，又产生能竞争性抑制固氮活性的氢分子。根瘤菌中有些株系（Hup⁺）带有氢化酶，能催化氢和氧的结合，从而把反应中释放的氢利用起来。**把跑掉的氢烧掉，一方面使质子还原过程中丢失的某些 ATP 再生，另一方面消耗掉固氮酶附近的分子氧——一个反应同时修补两种损失。**",
      src: "现分 p.271"
    },
    {
      link_en: "put the slow rate and the fragility together and you get the reason for everything below",
      link_cn: "把「慢」和「脆」放在一起，就得到了下面一切内容的理由",
      recall_en: "five electrons a second, from two steps up",
      recall_cn: "上面第二步说的每秒 5 个电子",
      en: "Because nitrogen reduction is so slow a reaction, a bacterium that must get its nitrogen source this way has to synthesise large amounts of nitrogenase: at maximum, nitrogenase can account for 20% of the cell's total protein. The enzyme is at the same time highly sensitive to oxygen, and a fairly low oxygen partial pressure is enough to destroy its activity; among the nitrogenases studied, exactly one, carried by a diazotroph of a high-temperature environment, tolerates oxygen. **Building a fifth of the cell's protein and then having it wrecked by air is the waste that nif regulation exists to prevent, and the two quantities the regulation watches are the oxygen concentration and the concentration of the product, ammonia.**",
      cn: "正因为固氮酶催化的氮还原是一个很慢的反应，需要靠固氮获得氮源的细菌必须合成大量固氮酶：最多时，固氮酶可占细胞总蛋白量的 20%。与此同时，固氮酶对氧高度敏感，较低的氧分压就足以破坏它的活性；在已经研究过的固氮酶里，只有一种高温环境固氮菌携带的固氮酶是耐氧的。**造出细胞五分之一的蛋白、然后被空气毁掉——固氮基因调控要防的浪费就是这个；而它盯着的两个量，一个是氧浓度，一个是产物氨的浓度。**",
      src: "现分 p.271, p.272"
    },
    {
      link_en: "so start at the promoter: an unusual σ factor is what reads it",
      link_cn: "那就从启动子开始看：读它的是一个不寻常的 σ 因子",
      en: "The nif genes are a whole set: genes encoding the individual protein components of nitrogenase, genes for making the various metal clusters and cofactors, and genes encoding transcription regulators. Transcription of them is activated jointly by NifA protein and the σ⁵⁴ factor. σ⁵⁴, also called RpoN, is one component of the RNA polymerase holoenzyme, and what it recognises and binds is the −24 and −12 regions of the DNA, which is where it differs from every other σ factor. **σ⁵⁴ interacts with NifA or with NtrA and thereby positions RNA polymerase over the promoter region of the nitrogen fixation genes, so the polymerase is delivered to a site no other σ factor would take it to.**",
      cn: "固氮酶系统里包含许多基因：编码固氮酶各个蛋白质组分的基因、参与各种金属簇和辅因子合成的基因，以及一些编码转录调控因子的基因。这些固氮酶基因（nif）的转录，是由 NifA 蛋白和 σ⁵⁴ 因子共同激活的。σ⁵⁴ 又称 RpoN 因子，是 RNA 聚合酶全酶的组分之一；它识别和结合的是 DNA 上的 −24 与 −12 区，这一点与其他所有 σ 因子都不一样。**σ⁵⁴ 与 NifA 或 NtrA 相互作用之后，把 RNA 聚合酶定位在固氮基因的启动子区域；于是聚合酶被送到了一个别的 σ 因子不会把它带去的位点上。**",
      src: "现分 p.272"
    },
    {
      link_en: "and the partner that brings it there is a protein split into three jobs",
      link_cn: "而把它带过去的搭档，是一个被切成三份工作的蛋白",
      en: "NifA protein is made of three domains. Its C-terminal DNA-binding domain is of the HTH type — helix-turn-helix — and it recognises and binds the upstream activator sequences (UAS) of a nif operon. Its middle domain is a conserved AAA⁺ ATPase that binds and hydrolyses ATP, interacts with RNA polymerase (RNAP) and with σ⁵⁴, and drives NifA to assemble into an oligomer. Its N-terminal domain is a regulatory domain and is chiefly responsible for controlling NifA's own activity. **Three domains split the work three ways: one finds the address on the DNA, one supplies the energy and the contact with the polymerase, and one takes in the signals that decide whether NifA does anything at all.**",
      cn: "NifA 蛋白由 3 个结构域组成。C 端是 HTH 型（helix-turn-helix，螺旋-转角-螺旋）DNA 结合结构域，它识别并结合 nif 操纵子的上游激活位点（UAS，upstream activator sequences）。中间是保守的 AAA⁺ ATP 酶活性结构域，可以结合并水解 ATP，与 RNA 聚合酶（RNAP）及 σ⁵⁴ 相互作用，并使 NifA 聚合成多聚体。N 端是调控结构域，主要负责 NifA 自身活性的调控。**三个结构域把工作分成三份：一份负责在 DNA 上找到地址，一份负责出能量、并与聚合酶接上头，还有一份负责接收「NifA 到底干不干活」的信号。**",
      src: "现分 p.272（图 7-35；NifA 三个结构域的简图见该页手写批注）"
    },
    {
      link_en: "and with both parties in place, activation is a physical act",
      link_cn: "两边都就位之后，激活是一个力学动作",
      en: "A NifA oligomer bound at the UAS reaches the σ⁵⁴ factor and the RNA polymerase sitting at −24/−12 by bending the DNA between them into a loop, and the two make contact in what is called the closed complex. That contact alters the conformation of σ⁵⁴, the DNA is melted apart, an open transcription initiation complex forms, and nif transcription starts. The whole step depends on hydrolysing ATP. **An activator bound well upstream pays ATP to melt the DNA at the promoter, and bending the intervening DNA into a loop is what lets a distant site act on a near one.**",
      cn: "结合在 UAS 位点上的 NifA 多聚体，通过把中间的 DNA 弯折成环，够到结合在 −24/−12 区的 σ⁵⁴ 因子和 RNA 聚合酶，两者接触形成所谓的封闭复合物。这一接触改变了 σ⁵⁴ 因子的构象，使 DNA 解链，形成开放式转录起始复合物，nif 基因转录随之开始。整个过程依赖于 ATP 的水解。**结合在上游远处的激活因子，花 ATP 把启动子处的 DNA 打开；而把中间那段 DNA 弯成环，正是让一个远处的位点能对近处的位点起作用的办法。**",
      src: "现分 p.272（图 7-35）"
    },
    {
      link_en: "so oxygen only needs to reach one of those three domains to stop everything",
      link_cn: "于是氧气只要够到那三个结构域里的一个，整件事就停了",
      recall_en: "the AAA⁺ ATPase domain of NifA, two steps up, is what gets blocked",
      recall_cn: "上面第二步里 NifA 那个 AAA⁺ ATP 酶结构域，正是被堵住的东西",
      en: "The nifL and nifA genes lie in one operon, and NifL is the negative regulator of NifA. In an oxygen-free environment NifL cannot bind NifA. In an aerobic environment NifL binds NifA and inhibits its ATPase activity, which holds nif transcription down. **Since activation needs NifA to hydrolyse ATP, blocking that ATPase is by itself enough to stop transcription, and oxygen reaches the nif genes along this one path.**",
      cn: "nifL 和 nifA 基因位于同一个操纵子上，而 NifL 是 NifA 的负调控因子。在缺氧环境下，NifL 不能结合 NifA。在有氧环境下，NifL 结合 NifA 并抑制它的 ATP 酶活性，从而遏制 nif 基因转录。**既然激活必须依赖 NifA 水解 ATP，那么单是把这个 ATP 酶堵住就足以停掉转录；而氧气影响固氮基因，走的正是这一条路。**",
      src: "现分 p.273（图 7-36）"
    },
    {
      link_en: "ammonia reaches them along a longer path, through a second activator",
      link_cn: "氨走的是另一条更长的路，要经过第二个激活因子",
      en: "NtrC protein is the activator of the nifA operon, and it resembles NifA in structure and in function: it binds upstream DNA and interacts with the σ⁵⁴ factor of RNA polymerase, and once NtrC has been phosphorylated it melts the DNA into an open complex and initiates transcription. Ammonia is reported to it indirectly, because the concentration of glutamine in the cell is positively correlated with the concentration of free ammonia. GlnD, a uridylyltransferase, is the enzyme that reads that level: when glutamine is low, GlnD transfers uridylate (UMP) onto the GlnB and GlnK proteins, NtrB then phosphorylates NtrC, and NtrC switches the nifA operon on; when glutamine is high, neither GlnB nor GlnK is uridylylated, unmodified GlnB binds NtrB and has NtrC dephosphorylated, and the nifA operon closes. **Uridylylation of GlnB is the step that converts a metabolite concentration into a phosphorylation state, and the same protein carries the signal in both directions.**",
      cn: "NtrC 蛋白是 nifA 操纵子的激活因子，它的结构和功能都类似 NifA：结合上游 DNA，并与 RNA 聚合酶的 σ⁵⁴ 因子相互作用；一旦 NtrC 被磷酸化，就能使 DNA 解链形成开放复合物并起始转录。氨是间接报到它这里的，因为细胞中谷氨酰胺的浓度与游离氨的浓度呈正相关。读这个水平的酶是 glnD 编码的尿苷转移酶（uridylyltransferase）：谷氨酰胺浓度低时，GlnD 把尿苷酸（UMP）转移到 GlnB 和 GlnK 蛋白上，此时 NtrB 使 NtrC 磷酸化，nifA 操纵子被 NtrC 激活；谷氨酰胺浓度高时，GlnB 和 GlnK 都不发生尿苷化，未修饰的 GlnB 结合 NtrB 并使 NtrC 去磷酸化，nifA 操纵子被关闭。**GlnB 的尿苷化，是把一个代谢物浓度换算成一个磷酸化状态的那一步；而正反两个方向的信号，由同一个蛋白携带。**",
      src: "现分 p.273（图 7-36）"
    },
    {
      link_en: "and the two paths are not independent — they meet on one protein",
      link_cn: "而这两条路并不各走各的，它们在同一个蛋白上碰头",
      en: "GlnK is where the oxygen arm and the ammonia arm meet. When the oxygen concentration is low, GlnK carrying no UMP inhibits NifL from binding NifA, which keeps NifA free to activate nif gene expression. NifL itself exists in only some diazotrophs, and in a nifL⁻ diazotroph NifA is under no NifL control at all: in Rhodospirillum rubrum, Herbaspirillum seropedicae and Azospirillum brasilense, NifA is activated by GlnB when nitrogen is scarce, while in Azorhizobium caulinodans NifA is inhibited by GlnB and GlnK when ammonia is plentiful. **Details differ considerably from one diazotroph to another and the shape does not: a cascade in which the oxygen concentration and the ammonia concentration are both read before nitrogenase is built.**",
      cn: "氧这一条线和氨这一条线，在 GlnK 上碰头。氧浓度低时，不带 UMP 的 GlnK 会抑制 NifL 结合 NifA，从而保证 NifA 能自由地激活 nif 基因表达。NifL 本身只在部分固氮菌中存在，nifL⁻ 型固氮菌的 NifA 则完全不受 NifL 调控：深红红螺菌（Rhodospirillum rubrum）、草螺菌（Herbaspirillum seropedicae）和巴西固氮螺菌（Azospirillum brasilense）的 NifA 在氮匮乏时由 GlnB 负责激活；茎瘤固氮根瘤菌（Azorhizobium caulinodans）的 NifA 则在氨富余时受到 GlnB 及 GlnK 的抑制。**不同固氮生物之间细节差异很大，骨架却是同一个：一套在造固氮酶之前先把氧浓度和氨浓度都读一遍的级联调控。**",
      src: "现分 p.273"
    },
    {
      link_en: "all of that is inside one bacterium; the symbiotic route needs a plant to agree first",
      link_cn: "以上都发生在一个细菌内部；而共生这条路，得先让植物同意",
      recall_en: "the symbiotic diazotroph named in the second step of this spine",
      recall_cn: "本条链第二步说的那类共生固氮菌",
      en: "Infection starts with rhizobia growing in the rhizosphere of a legume and touching the young part of a root hair, after which the plant builds a nodule, the swelling on the root inside which the bacteria live and fix. A given race of rhizobium has a narrow host range: Rhizobium trifolii mainly infects clover, R. phaseoli kidney bean, R. leguminosarum pea. The bacterium attaches to the plant cell in a polar fashion, and the specificity of that contact is determined by an interaction between a plant lectin and the bacterial cell wall — a lectin being a glycoprotein made by the plant, with high and specific affinity for oligosaccharide complexes containing galactose, N-acetylglucosamine and mannose. A lipopolysaccharide component of the rhizobial cell wall has been identified as the probable lectin receptor. **One particular lectin recognises one particular bacterial surface receptor, so a host range set by the bacterium's genotype is also shaped by the plant's genome.**",
      cn: "感染的第一步，是根瘤菌在豆科植物根际生长、并接触到宿主植物根毛的幼嫩部位；之后植物长出根瘤——根上的那个瘤状结构，细菌就住在里面固氮。每个根瘤菌小种的宿主范围都很狭窄：Rhizobium trifolii 主要感染三叶草，R. phaseoli 主要感染菜豆，R. leguminosarum 主要感染豌豆。根瘤菌以极性的方式与根毛接触并附着到植物细胞上，而这种接触的专一性，由植物凝血素（lectin）与细菌细胞壁之间的相互作用决定——植物凝血素是植物细胞产生的一种糖蛋白，对含有半乳糖、N-乙酰葡糖胺和甘露糖的寡聚糖复合体有很高的亲和力与专一性。现已鉴定出根瘤菌细胞壁上的一种脂多糖组分，很可能就是植物凝血素的受体。**特定的植物凝血素只识别特定的细菌表面受体；于是由细菌基因型决定的宿主范围，同时也受植物基因组的影响。**",
      src: "现分 p.274（表 7-4）"
    },
    {
      link_en: "and once the nodule exists, the plant has to solve the oxygen problem inside it",
      link_cn: "而根瘤一旦长成，植物就得在里面解决那个氧的问题",
      recall_en: "the oxygen that wrecks nitrogenase, from the hinge step of this spine",
      recall_cn: "本条链转折处说的那个会毁掉固氮酶的氧",
      en: "Leghemoglobin (Lb) is the protein that regulates the oxygen content of a nodule cell, and it is the most abundant protein encoded by the plant genome in that cell, with a haem prosthetic group that is probably encoded by the bacterium; four isoforms exist, their reading frames carry three introns of differing length, and the amino acid sequence is homologous to animal myoglobin. Lb is one of at least 20 polypeptides that the plant genome encodes and expresses only in cells a rhizobium has induced; those proteins together are called nodulins, and they fall into three functional classes — structural proteins of the nodule, the enzyme system that assimilates the nitrogen fixed by the bacteroid and moves it into the plant, and the proteins required to keep a bacteroid working. **Oxygen in a cell runs at a few hundred μmol/L while nitrogenase works only at tens of nmol/L, and Lb settles that contradiction by binding free oxygen: the free concentration drops, and the bound oxygen is still delivered to the respiratory chain.**",
      cn: "豆血红蛋白（leghemoglobin，Lb）是调节根瘤细胞氧含量的那个蛋白，也是根瘤细胞中植物基因组编码的最主要的蛋白质，其血红素辅基可能是由细菌编码的；已发现 4 种异构体，它们的读码框中插入了 3 个长短不一的内含子，而氨基酸序列与动物肌红蛋白存在同源性。Lb 是至少 20 多种由植物基因组编码、却只在根瘤菌诱导的细胞中表达的多肽之一，这些蛋白质统称根瘤素（nodulin），按生理功能分为三类——根瘤结构蛋白；负责把类菌体（住在根瘤细胞里的根瘤菌）固定的氮素同化并转移到植物体内的酶系统；以及维持类菌体功能所必需的蛋白质。**细胞内氧浓度一般在数百 μmol/L，而固氮酶只能在几十 nmol/L 的氧浓度下工作；Lb 靠结合自由氧解决了这对矛盾：自由氧浓度被大大降低，被结合的氧又照样送进呼吸链。**",
      src: "现分 p.274"
    }
  ]
};
