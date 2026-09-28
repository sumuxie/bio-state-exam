/* Questions for §8.3 and §8.4, written against their spines.

   Covers M-8-3 (真核基因表达的染色质修饰和表观遗传调控, spine_ch8_epigenetics.js,
   printed 311–328) and M-8-4 (非编码 RNA 对真核基因表达的调控, spine_ch8_ncrna.js,
   printed 328–340). Ten items each. No other data file is touched here.

   THE TWO MEASURED DEFECTS, AND WHAT IS DONE ABOUT THEM HERE. The parent corpus was
   re-measured at 42% of items answerable by picking the visibly longest option, and
   60% of its answers sitting at index 1. Both are rules a reader finds by accident
   and then cannot unsee.

   Position: answers here run 0/1/2/3 five times each across the twenty items, and no
   node parks its answers at one index.

   Length: the fix is NOT to cut the correct option to a stub — that was tried on this
   project and simply inverted the exploit (longest-is-correct 16%, shortest-is-correct
   48%). Every item below is written so the correct option and its three distractors
   carry the SAME specificity and land within a few characters of one another. The
   reasoning still lives in why_en / why_cn, where the reader meets it after answering.

   VOCABULARY IS THE SPINES'. §8.3 as transcribed says MeCP1, and names the two DNA
   methyltransferases 日常型 and 从头合成型; it does not use Xist, HOTAIR, SWI/SNF,
   MeCP2, DNMT1 or DNMT3a. §8.4 does use Xist and HOTAIR. Nothing in a stem, an option
   or an explanation comes from outside those two spines.

   The productive shape here is a question that gives a RESULT — a nuclease cutting
   where it should not, a protein level falling while its mRNA holds steady, one
   pathway step knocked out — and asks what follows; or one that asks what a mechanism
   CANNOT do. Distractors are the neighbouring subsection's mechanism, the right
   players in the wrong order, or the correct effect hung on the wrong molecule. */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* ===================================================================== M-8-3 */
window.BIOLITE_Q["M-8-3"] = [
  {
    "type": "mcq",
    "q_en": "HP1 dimers recognise H3K9me2/3 and then recruit SUV39, the H3K9 methyltransferase, which trimethylates freshly assembled histones nearby. Which two facts does that one arrangement account for?",
    "q_cn": "HP1 二聚体识别并结合 H3K9me2/3，再把 H3K9 甲基转移酶 SUV39 招募过来，给附近新组装的组蛋白打上三甲基。这一个安排同时解释了哪两件事？",
    "options": [
      "Why acetylation loosens a nucleosome and why deacetylation tightens it again",
      "Why CpG density at a promoter sets how strongly its transcription is repressed",
      "Why methylation raises the mutation frequency of the very site it marks",
      "Why heterochromatin spreads along a chromosome and why the state is inherited"
    ],
    "answer": 3,
    "why_en": "A mark recruits the enzyme that writes it. Sideways, that enzyme stamps the histones next door and the domain grows out from its nucleation centre; forwards, at division the marks left on the mother's chromatin bring the same methyltransferase to the newly replicated DNA, so the daughter is stamped at the same positions. Spreading and heritability are one mechanism seen twice.",
    "why_cn": "标记把写它的酶招过来。往旁边看，这个酶给隔壁的组蛋白也打上标记，异染色质就从成核中心向外扩散；往后代看，细胞分裂时母链染色质上已有的标记把同一种甲基转移酶招到新复制的 DNA 旁边，子代于是在相同位置被打上同样的标记。扩散和可遗传，是同一个机制的两个侧面。"
  },
  {
    "type": "mcq",
    "q_en": "In chromatin from chicken erythroblasts the β-globin gene is degraded by DNase I far more readily than ovalbumin; in chromatin from oviduct cells the preference runs the other way. What is the nuclease reading out?",
    "q_cn": "在鸡成红细胞的染色质里，β-血红蛋白基因比卵清蛋白基因更容易被 DNA 酶 I 降解；在鸡输卵管细胞的染色质里，优先次序正好反过来。这个核酸酶读出来的是什么？",
    "options": [
      "Which genes that particular tissue is transcribing, gene by gene",
      "Which genes hold a CpG island unmethylated at their promoter region",
      "Which genes have been rearranged into a position beside a promoter",
      "Which genes have risen in copy number in that tissue by amplification"
    ],
    "answer": 0,
    "why_en": "Sensitivity to DNase I follows the open state of chromatin, and the open state follows what that tissue is actually transcribing — which is why the same two genes swap places between two chicken tissues carrying identical DNA. Rearrangement and amplification do change the template, but they are the one class of control that alters the sequence, and neither is what differs here.",
    "why_cn": "对 DNA 酶 I 的敏感性跟着染色质的开放状态走，而开放状态跟着「这块组织正在转录哪些基因」走——所以同样两个基因在 DNA 完全相同的两种鸡组织里对调了位置。基因重排和基因扩增确实改动模板，但那是唯一会改变序列的那一类调控，这里差别不在那儿。"
  },
  {
    "type": "mcq",
    "q_en": "S1 nuclease cuts only single-stranded DNA, yet it hydrolyses chromosomal DNA at the chicken β-globin hypersensitive region (−50 to −280 bp) while that gene is actively expressed. What does the result say about the region?",
    "q_cn": "S1 核酸酶只切单链 DNA，但在鸡 β-血红蛋白基因活跃表达时，它确实水解了该基因超敏感区（−50～−280 bp）的染色体 DNA。这个结果说明这段区域处于什么状态？",
    "options": [
      "Z-DNA has replaced B-DNA across the whole transcribed region of the gene",
      "Part of the promoter has come apart into single strands and lies bare",
      "An extra nucleosome has been laid there to hold the promoter accessible",
      "The gene has lost the roughly 100 bp of DNA carrying both of its sites"
    ],
    "answer": 1,
    "why_en": "Single-stranded DNA is the substrate S1 requires, so a cut there means part of the promoter sequence has opened, can no longer stay wound on the nucleosome, and lies exposed on the histone surface. The same exposure that lets RNA polymerase and transcription factors reach the DNA is what lets a nuclease cut it — one state, read two ways. The 100 bp deletion is the Drosophila sgs4 mutant, a different experiment.",
    "why_cn": "S1 需要的底物就是单链 DNA，所以那里能被切开，意味着启动区的部分序列已经解开成单链，无法继续缠在核小体上，裸露在组蛋白表面。让 RNA 聚合酶和转录因子够得着 DNA 的正是这份暴露，让核酸酶下刀的也是它——同一个状态的两种读法。缺失约 100 bp 的是果蝇 sgs4 突变体，那是另一个实验。"
  },
  {
    "type": "mcq",
    "q_en": "One methyltransferase activity has a high affinity for half-methylated DNA and rapidly methylates the cytosine sitting opposite each existing methylcytosine. Which activity is that, and what does it deliver?",
    "q_cn": "有一种甲基转移酶活性对半甲基化 DNA 有很高的亲和力，迅速把与每个甲基胞嘧啶相对的那个胞嘧啶甲基化。这是哪一种，它成全的是什么？",
    "options": [
      "从头合成型 (de novo), which picks which gene comes under methylation control",
      "日常型 (maintenance), which turns an unmethylated CpG into mCpG unguided",
      "日常型 (maintenance), which carries a methylation pattern through replication",
      "从头合成型 (de novo), which keeps housekeeping CpG islands free of methyl groups"
    ],
    "answer": 2,
    "why_en": "A half-methylated double helix is exactly what replication leaves behind: the mother strand carries the marks, the new strand carries none. An enzyme that reads the mother strand and fills in the opposite cytosine is what brings a methylation pattern through replication and cell division unchanged. The 从头合成型 activity works with no mother strand to guide it, slowly, and it is what decides which gene falls under methylation control in the first place.",
    "why_cn": "半甲基化双链正是复制留下的产物：母链带甲基，新链不带。一个能读母链、把对面那个胞嘧啶补上甲基的酶，才让甲基化模式原样穿过 DNA 复制和细胞分裂。从头合成型不需要母链指导、速度很慢，它决定的是「哪个基因一开始就落进甲基化调控之下」。"
  },
  {
    "type": "mcq",
    "q_en": "Codon 273 of p53 contains a CpG and commonly mutates from CGT to CAT or TGT in brain tumours, breast cancer and rectal cancer, reaching a 59.3% C → T rate at that position in non-small-cell lung cancer. Which chemistry stands behind it?",
    "q_cn": "p53 基因第 273 位密码子含有 CpG 序列，在脑瘤、乳腺癌和直肠癌里常由 CGT 突变为 CAT 或 TGT，非小细胞肺癌中该位点 C → T 频率高达 59.3%。背后是哪一种化学？",
    "options": [
      "A methylated cytosine draws MeCP1 in, and MeCP1 nicks the DNA it grips",
      "Methylation converts that stretch to Z-DNA, and Z-DNA is copied with errors",
      "The demethylase that erases 5-mC takes the whole base away along with it",
      "5-mC deaminates to thymine, which repair does not recognise as an error"
    ],
    "answer": 3,
    "why_en": "A 5-mC that loses its amino group becomes an ordinary T, and repair has no way to see that this T is wrong, so the C → T transition is written in permanently and inherited. More than a third of human hereditary disease caused by base transitions traces back to it. That makes 5-mC an endogenous mutagen as well as a switch: the same chemistry that reversibly silences a gene also rewrites its sequence. MeCP1 binds methylated DNA and represses, but it cuts nothing.",
    "why_cn": "5-mC 脱去氨基就变成一个普通的 T，而修复系统看不出这个 T 是错的，于是 C → T 转换被永久写进 DNA 并可遗传。人体中由碱基转换引起的遗传病，三分之一以上源于此。所以 5-mC 既是开关也是内源性诱变剂：同一种化学可逆地关掉一个基因，也不可逆地改写了它的序列。MeCP1 结合甲基化 DNA 并起抑制作用，但它不切 DNA。"
  },
  {
    "type": "mcq",
    "q_en": "HAT transfers an acetyl group onto a lysine residue of a histone N-terminal tail. What is the immediate physical consequence at the nucleosome?",
    "q_cn": "HAT 把一个乙酰基转移到组蛋白 N 端尾巴的赖氨酸残基上。核小体那里紧接着发生的物理变化是什么？",
    "options": [
      "The lysine's positive charge is neutralised, loosening the tail's grip on DNA",
      "The tail takes on a negative charge that pulls the DNA in more tightly",
      "The octamer sheds H₁ and the spacer between nucleosomes shortens",
      "The tail is cleaved off, so the core no longer makes contact with DNA"
    ],
    "answer": 0,
    "why_en": "The side-chain amino group of a lysine is positively charged and DNA is negatively charged; acetylation neutralises that charge, so the affinity between tail and DNA drops. The nucleosome takes up a conformation that suits binding by transcription regulatory proteins, and a looser nucleosome raises the transcriptional activity of that stretch — acetylation is the activating mark, deacetylation by HDAC the reverse. H₁ stabilises chromatin from outside the core and is not what moves here.",
    "why_cn": "赖氨酸侧链的氨基带正电，DNA 带负电；乙酰化把这个正电荷中和掉，尾巴与 DNA 之间的亲和性随之下降。核小体转向有利于转录调节蛋白结合的构象，而核小体一松，这段基因组的转录活性就提高——乙酰化是「开」的标记，HDAC 去乙酰化则相反。H₁ 结合在核小体核心之外起稳定作用，这里动的不是它。"
  },
  {
    "type": "mcq",
    "q_en": "Rb bound to E2F at the promoters of cell-cycle genes recruits HDAC1, and that promoter region alone is deacetylated and condensed. Which general point does the case carry?",
    "q_cn": "结合了 E2F 的 Rb 在细胞周期基因的启动子上把 HDAC1 招募过来，于是只有该启动子区发生去乙酰化并浓缩。这个例子说明的一般道理是什么？",
    "options": [
      "A deacetylase acts genome-wide once expressed, and Rb only speeds it up",
      "Which genes fall silent is decided by whatever protein does the recruiting",
      "HDAC1 reads the E2F binding sequence in the promoter DNA for itself",
      "Rb acetylates the histones first and hands HDAC1 a prepared substrate"
    ],
    "answer": 1,
    "why_en": "Deacetylation silences genes and it is aimed, not general: Rpd3 in yeast and HDAC1 in humans both work inside very large complexes that have to be brought to one promoter before they can act. So the address is supplied by the recruiter — Rb for the cell-cycle genes, Sin3 as the corepressor alongside Rpd3 — and the enzyme itself has no sequence preference of its own.",
    "why_cn": "去乙酰化使基因沉默，而且它是有指向的，不是全面铺开：酵母 Rpd3 和人 HDAC1 都在很大的复合体中起作用，必须先被带到某一个启动子上。所以「地址」是募集者给的——细胞周期基因这里是 Rb，Rpd3 那边是共抑制子 Sin3——酶本身并不认序列。"
  },
  {
    "type": "mcq",
    "q_en": "A stretch of chromatin carries H3K4me3 concentrated at its transcription start site and H3K36me3 spread across its whole body. What is being said about it?",
    "q_cn": "某段染色质在转录起始位点富集 H3K4me3，整个转录区遍布 H3K36me3。这是在说这段区域处于什么状态？",
    "options": [
      "It is constitutive heterochromatin, of the kind held condensed permanently",
      "It carries polycomb repressor complexes and its expression is shut down",
      "It is being transcribed, marked at its start site and along its body",
      "It has switched from B-DNA to Z-DNA and its factors can no longer bind"
    ],
    "answer": 2,
    "why_en": "One chemical group means opposite things at different residues. A methyl on K9 or K27 of H₃ shuts a region down — H3K9me3 at centromere and telomere marks constitutive heterochromatin, H3K27me3 sits on silenced genes and is bound by polycomb complexes — while a methyl on K4 or K36 marks a region as being transcribed. The address is the residue, not the modification.",
    "why_cn": "同一个化学基团加在不同残基上，意思正好相反。甲基加在 H₃ 的 K9 或 K27 上是把区域关掉——H3K9me3 见于中心粒和端粒、标记组成型异染色质，H3K27me3 出现在沉默基因上并结合 polycomb 复合物；加在 K4 或 K36 上则标出它正在被转录。地址在残基，不在修饰种类。"
  },
  {
    "type": "mcq",
    "q_en": "LSD1 bound to the Co-REST repressor complex demethylates H3K4me1/2, while LSD1 bound to the androgen receptor demethylates H3K9. What follows about the enzyme?",
    "q_cn": "LSD1 与 Co-REST 抑制复合物结合时催化 H3K4me1/2 的去甲基化，与雄激素受体结合时催化 H3K9 的去甲基化。由此可以对这个酶下什么判断？",
    "options": [
      "LSD1 strips trimethyl groups from H3K4 using a jumonji catalytic domain",
      "LSD1 needs FAD when it acts on H3K9 but not when it acts on H3K4",
      "A demethylase reverses only the mark that its own SET domain has written",
      "One demethylase activates or represses transcription according to its partner"
    ],
    "answer": 3,
    "why_en": "The same catalytic activity reaches two different residues and therefore has two opposite meanings, and what selects between them is the complex LSD1 is working in — the enzyme is not intrinsically activating or repressing. LSD1 is the lysine-specific demethylase and uses FAD as cofactor in both cases; the jumonji domain, carried by JMJD2 and others, is the separate catalytic region able to strip a trimethyl group. SET is a writer's domain, on the HKMTs.",
    "why_cn": "同一种催化活性作用到两个不同残基上，含义正好相反，而在两者之间做选择的是 LSD1 所处的复合体——酶本身无所谓激活还是抑制。LSD1 是赖氨酸特异去甲基化酶，两种情形下都以 FAD 为辅助因子；能脱掉三甲基的是 JMJD2 等所带的 jumonji 结构域，那是另一类酶。SET 是「写」的那一类酶（HKMT）的结构域。"
  },
  {
    "type": "mcq",
    "q_en": "The protein output of a gene falls while its DNA carries no new methyl group and the chromatin over it is unchanged. Which route does m⁶A regulation take to produce that?",
    "q_cn": "某个基因的蛋白产量下降了，而它的 DNA 上没有新增甲基、上面的染色质也没有变化。m⁶A 是走哪条路做到这一点的？",
    "options": [
      "It acts on the transcript, via splicing, nuclear export, stability and translation",
      "It acts on the promoter, lowering how well transcription factors bind there",
      "It acts on the histone tails, condensing the chromatin over that gene",
      "It acts on the gene's DNA, turning that stretch from B-DNA into Z-DNA"
    ],
    "answer": 0,
    "why_en": "m⁶A is a methyl on the sixth-position nitrogen of an adenine in an mRNA, so it regulates after transcription and a gene can be turned down with neither its DNA nor its chromatin touched. It needs three components — a METTL3 methyltransferase complex to write, FTO or ALKBH5 to erase, and a YTH-domain reader to bind — and it works by changing RNA secondary structure. Lowered transcription factor binding and the B-to-Z conversion are what DNA methylation does.",
    "why_cn": "m⁶A 是 mRNA 中腺嘌呤第 6 位氮原子上的甲基化，属于转录之后的调控，所以基因可以在 DNA 和染色质都没被碰过的情况下被调低。它需要三类组分——以 METTL3 为核心的甲基化酶复合物负责写、FTO 与 ALKBH5 负责擦、带 YTH 结构域的蛋白负责读——起作用的路径是改变 RNA 的二级结构。降低转录因子结合、B-DNA 转 Z-DNA，那是 DNA 甲基化干的事。"
  }
];

/* ===================================================================== M-8-4 */
window.BIOLITE_Q["M-8-4"] = [
  {
    "type": "mcq",
    "q_en": "Injecting antisense MEX3 mRNA into worm gonad cells lowered endogenous MEX3 a little; injecting MEX3 double-stranded RNA left almost none detectable in the embryos. What does the pair of results establish?",
    "q_cn": "把 MEX3 的反义 mRNA 显微注射进线虫性腺细胞，子代胚胎中内源 MEX3 只略有下降；注射 MEX3 双链 RNA，则几乎检测不到。这一对结果确立了什么？",
    "options": [
      "Double-stranded RNA is by far the more efficient form of the silencing trigger",
      "Antisense RNA silences by blocking the ribosome rather than by base pairing",
      "Silencing needs the target to have been introduced as a transgene first",
      "The injected RNA silences any abundant message regardless of its homology"
    ],
    "answer": 0,
    "why_en": "Both injections carry the same sequence, so the difference between a small drop and near-total loss is carried by the double-stranded form alone. Together with the observation that an introduced RNA only silences genes homologous to it, that fixes the mechanism as one that runs on base pairing and is triggered by dsRNA. The white petunias came out of extra copies of an endogenous pigment gene, and co-suppression hit the endogenous gene too.",
    "why_cn": "两次注射用的是同一段序列，所以「只略有下降」与「几乎测不到」之间的差别，只能由双链这个形式承担。再加上「引入的外源 RNA 只对同源基因有高沉默效率」，就把机制定在了靠碱基配对认靶、由 dsRNA 触发。白花牵牛的实验导入的是内源色素基因的额外拷贝，共抑制打掉的正是内源基因本身。"
  },
  {
    "type": "mcq",
    "q_en": "Dicer's PAZ domain grips the two unpaired 3′ nucleotides of a duplex, and the RNase III cutting site sits about 6.5 nm away from PAZ. What does that geometry produce?",
    "q_cn": "Dicer 的 PAZ 结构域抓住双链 RNA 3′ 端两个不配对的核苷酸，而 RNase Ⅲ 的催化切点距 PAZ 约 6.5 nm。这个几何关系带来的结果是什么？",
    "options": [
      "A duplex unwound from one end, so the guide strand can be handed over",
      "A cut at a fixed distance, so every product comes out 21–23 nt long",
      "A cut between nucleotides 9 and 10 of the message paired to the guide",
      "A phosphate left on each 5′ end and a hydroxyl left on each 3′ end"
    ],
    "answer": 1,
    "why_en": "6.5 nm is the length of some twenty nucleotides, so Dicer is a ruler: it holds one end of the duplex and cuts at a fixed distance from that grip, and the two RNase III domains dimerise so that each cuts one strand and the pair makes a double-strand break. The 21–23 nt step seen in the degraded target mRNA is the same number arriving from the other direction. Cutting between 9 and 10 is PIWI's job, later, inside RISC.",
    "why_cn": "6.5 nm 正相当于二十几个核苷酸的长度，所以 Dicer 本身就是一把尺子：咬住双链的一端，在固定距离处下刀；两个 RNase Ⅲ 结构域形成分子内二聚体，各切一条链，造成双链断裂。靶 mRNA 降解片段那个 21～23 nt 的步长，是同一个数字从另一头出现。第 9、10 位之间的切割是后面 RISC 里 PIWI 干的事。"
  },
  {
    "type": "mcq",
    "q_en": "Dicer leaves a roughly 21 nt miRNA–miRNA* duplex, and only one of its two strands is loaded into Argonaute as the mature miRNA. What decides which strand survives?",
    "q_cn": "Dicer 切出长约 21 nt 的 miRNA–miRNA* 双链，两条链中只有一条被装进 Argonaute 成为成熟 miRNA。决定哪条链留下来的是什么？",
    "options": [
      "Whichever strand carries the seed at nucleotides 2 to 8 is the one kept",
      "Whichever strand R2D2 has bound directly is the one that is kept",
      "Whichever strand has the less stably paired 5′ end is the one kept",
      "Whichever strand HEN1 has methylated at its 3′ end is the one kept"
    ],
    "answer": 2,
    "why_en": "Strand choice is thermodynamic: the strand whose 5′ end is held in the weaker pairing is the more likely to become the functional miRNA. It is the same rule that runs on the siRNA side, where R2D2 binds the thermally MORE stable end and therefore ends up on the guide strand's 3′ side — so R2D2 marks the passenger end, not the guide. Both strands carry positions 2–8; the seed is a consequence of being chosen, not the criterion. HEN1 methylates both 3′ ends of a plant duplex.",
    "why_cn": "选链是热力学决定的：5′ 端配对相对不稳定的那条，更可能成为有功能的成熟 miRNA。这和 siRNA 那边是同一条规则——R2D2 结合的是热稳定性较高的那一端，因而常落在引导链 3′ 端一侧，也就是说 R2D2 标出的是乘客链那头。两条链都有第 2～8 位；种子序列是「被选中」之后的结果，不是选择的依据。HEN1 在植物中把双链两个 3′ 端都甲基化。"
  },
  {
    "type": "mcq",
    "q_en": "Inside an assembled RISC, where does the specificity for a target message come from, and where does the cut fall?",
    "q_cn": "在装配好的 RISC 里，认靶的特异性来自哪一段，切口又落在哪里？",
    "options": [
      "Pairing along all 21 nt; the cut falls at the 3′ end of the paired duplex",
      "Pairing at nucleotides 2 to 8; the cut falls between nucleotides 9 and 10",
      "Pairing at nucleotides 9 and 10; the cut falls inside the seed, at 2 to 8",
      "Pairing within the 3′UTR only; the cut falls at the base of the poly(A) tail"
    ],
    "answer": 1,
    "why_en": "Nucleotides 2–8 of the guide are the core seed sequence and they are what supplies the specific pairing; about ten base pairs of the mRNA–siRNA hybrid then sit in the PIWI domain, and PIWI catalyses the cut between 9 and 10. Argonaute holds the guide's 5′ end at MID and its 3′ end at PAZ, so the strand lies stretched across the MID/PIWI interface. The severed message leaves and the same RISC goes on to the next one.",
    "why_cn": "引导链第 2～8 个核苷酸是核心种子序列，提供与靶 mRNA 的特异性配对；长约 10 个核苷酸的 mRNA–siRNA 配对物位于 PIWI 功能域，由 PIWI 在第 9、10 位之间下刀。Argonaute 用 MID 结合引导链 5′ 端、PAZ 结合 3′ 端，整条链铺在 MID/PIWI 界面上。被切断的 mRNA 离开，同一个 RISC 再去找下一条。"
  },
  {
    "type": "mcq",
    "q_en": "A mammalian cell is made null for Exportin 5. At which point does miRNA production stop, and what accumulates?",
    "q_cn": "让一个哺乳动物细胞完全失去 Exportin 5。miRNA 的生产在哪一步停下，积累的是什么？",
    "options": [
      "pri-miRNA is never transcribed, because RNA polymerase II requires Exportin 5",
      "Drosha cannot release the ~70 nt precursor out of the pri-miRNA stem–loop",
      "The mature duplex is made but never handed to an Argonaute protein at all",
      "pre-miRNA is made in the nucleus and never reaches Dicer in the cytoplasm"
    ],
    "answer": 3,
    "why_en": "The order is pri-miRNA (RNA polymerase II, capped and polyadenylated) → Drosha with DGCR8 cuts both sides of the stem–loop → a ~70 nt pre-miRNA → Exportin 5 with RanGTP carries it out → Dicer removes the loop end in the cytoplasm. Exportin 5 sits between the two nucleases, so knocking it out leaves the nuclear steps intact and strands the pre-miRNA where Dicer cannot reach it. Plants run the whole thing differently: DCL1 makes both cuts in the nucleus and HASTY does the export.",
    "why_cn": "顺序是 pri-miRNA（RNA 聚合酶 Ⅱ 转录，加帽加尾）→ Drosha 与 DGCR8 在茎–环两侧各切一刀 → 约 70 nt 的 pre-miRNA → Exportin 5/RanGTP 运出核 → 胞质中 Dicer 切掉环端。Exportin 5 卡在两把核酸酶中间，所以敲掉它，核内那几步照常完成，pre-miRNA 却被困在 Dicer 够不到的地方。植物走的是另一套：DCL1 在核内切两刀，HASTY 负责外运。"
  },
  {
    "type": "mcq",
    "q_en": "A miRNA is expressed and the target gene's protein level drops, while Northern blot shows the target mRNA sitting at its former level. Which of the two miRNA routes was taken?",
    "q_cn": "某个 miRNA 表达后，靶基因的蛋白水平下降，而 Northern 印迹显示靶 mRNA 的水平没有变化。走的是 miRNA 两条路里的哪一条？",
    "options": [
      "The message was deadenylated and decapped by GW182, NOT1, CAF1 and DCP",
      "PIWI cut the message between nucleotides 9 and 10 and RISC moved on",
      "Translation was repressed, with the transcript left intact in the cytoplasm",
      "RDRP copied the message into dsRNA, which Dicer then cut into siRNA"
    ],
    "answer": 2,
    "why_en": "The mRNA level is the discriminator. Both the siRNA-style cleavage route and the deadenylation–decapping route in flies destroy the transcript, so either would show up as less mRNA. A steady mRNA with less protein is translational repression — the gene is off with its message still sitting intact in the cytoplasm. Where in translation it acts is unsettled; hippuristanol experiments point at obstruction of ribosome assembly, a drop-off.",
    "why_cn": "判别的关键量就是 mRNA 水平。siRNA 式的切割和果蝇里 GW182/脱腺苷/脱帽那条路都会毁掉转录本，两者都表现为 mRNA 减少。mRNA 不变而蛋白减少，说明是翻译水平的抑制——基因被关掉时，转录本还完好地待在胞质里。抑制究竟发生在翻译的哪一步尚无定论；hippuristanol 实验指向核糖体装配受阻，即 drop-off。"
  },
  {
    "type": "mcq",
    "q_en": "RDRP cannot approach an mRNA whose 5′ cap-binding protein and 3′ poly(A)-binding protein are both in place. How is secondary siRNA still made from such an intact message?",
    "q_cn": "一条 mRNA 的 5′ 帽子结合蛋白和 3′ 多腺苷酸结合蛋白都在，RDRP 就靠不上去。那么这样一条完好的 mRNA 上，次级 siRNA 是怎么产生的？",
    "options": [
      "RDRP strips the two binding proteins off the ends before it starts copying",
      "The message is copied whole into dsRNA, which clears it as a faulty mRNA",
      "Secondary siRNA is only made in cells that lack those binding proteins",
      "An existing siRNA serves as the primer, and RDRP extends it into a duplex"
    ],
    "answer": 3,
    "why_en": "The coat keeps RDRP off the ends, so amplification starts from the middle instead: an siRNA already paired to the message acts as a primer and RDRP extends from it. The new secondary siRNAs pair with regions of the target the first one never touched, and in plants they travel cell to cell and through the phloem. The bare-template route is real but is the other case — an mRNA missing its binding proteins, which is how a faulty message is cleared.",
    "why_cn": "两端的结合蛋白挡住了 RDRP，于是扩增改从中间开始：已经与 mRNA 配对的 siRNA 充当引物，RDRP 从它延伸成双链。新产生的次级 siRNA 与靶 mRNA 上第一条没碰过的区域配对，在植物里还能在细胞间传递、经韧皮部扩散。裸模板那条路确实存在，但那是另一种情形——缺少结合蛋白的 mRNA，也就是机体清除错误 mRNA 的方式。"
  },
  {
    "type": "mcq",
    "q_en": "A decoy lncRNA and a guide lncRNA can both bind the same kinds of chromatin-modifying partner. What separates the two classes?",
    "q_cn": "诱饵型 lncRNA 和引导型 lncRNA 可以结合同一类染色质修饰蛋白。区分这两类的是什么？",
    "options": [
      "A decoy binds a protein and adds nothing; a guide places it on a target",
      "A decoy acts in trans while a guide acts only in cis, on a nearby gene",
      "A decoy comes from an enhancer region and a guide from an intronic one",
      "A decoy binds a single protein while a guide binds several at one time"
    ],
    "answer": 0,
    "why_en": "A decoy is transcribed, binds its protein target and adds no further function — a molecular filter that draws transcription factors and chromatin modifiers onto itself and away from where they would otherwise act, as Gas5 does by mimicking a glucocorticoid response element and holding the receptor off the chromosome. A guide binds the same sort of partner and then positions that ribonucleoprotein on a chosen target, in cis or in trans, as COLDAIR does with PRC2 on FLC. Same partners, opposite result. Binding several complexes at once is the scaffold class.",
    "why_cn": "诱饵型转录出来后结合在蛋白靶点上，不再附加任何功能——相当于分子过滤器，把转录因子、染色质修饰子诱导到自己身上，带离它们本该起作用的地方；Gas5 用茎–环模拟糖皮质激素响应元件，把受体挡在染色体之外，就是这样。引导型结合同一类蛋白，却把这个核糖核蛋白复合体安放到选定的靶点上，或顺式或反式，如 COLDAIR 把 PRC2 引到 FLC 上。搭档相同，结果相反。同时抓住多个复合体的是骨架型。"
  },
  {
    "type": "mcq",
    "q_en": "HOTAIR binds PRC2 at its 5′ end and the LSD1/CoREST/REST complex at its 3′ end. What does one such RNA do to its target gene?",
    "q_cn": "HOTAIR 的 5′ 端连着 PRC2，3′ 端连着 LSD1/CoREST/REST 复合体。这样一条 RNA 对靶基因做了什么？",
    "options": [
      "H3K27 is demethylated and H3K4 trimethylated, so the gene is switched on",
      "H3K27 is trimethylated and H3K4 demethylated, so the gene is switched off",
      "H3K9 is trimethylated by G9a, so the maternal allele alone falls silent",
      "The CpG island at that promoter is methylated, so MeCP1 binds and represses"
    ],
    "answer": 1,
    "why_en": "PRC2 trimethylates H3K27, a repressive mark, and LSD1 demethylates H3K4, an activating one, so a single scaffold lncRNA adds the off mark and removes the on mark in one operation — which is what a scaffold is for: several functional regions binding several effectors at once, packaged into one unit. HOTAIR is raised in primary and metastatic breast cancer, and losing it lowers invasiveness. G9a on H3K9 is the imprinting case, Air and Kcnq1ot1.",
    "why_cn": "PRC2 使 H3K27 三甲基化，那是抑制性标记；LSD1 使 H3K4 去甲基化，那是激活性标记。于是一条骨架型 lncRNA 一次操作里既加上「关」的标记、又拿掉「开」的标记——这正是骨架分子的用处：多个功能区同时结合多个效应分子，打包成一个整体。HOTAIR 在原发性和转移性乳腺癌中升高，缺失它会降低癌细胞的侵袭性。G9a 作用于 H3K9，那是基因印记那一组，Air 与 Kcnq1ot1。"
  },
  {
    "type": "mcq",
    "q_en": "Xist is expressed from the X chromosome that is about to be inactivated and coats it as transcription continues. What do Tsix and Jpx do to Xist?",
    "q_cn": "Xist 从将要失活的那条 X 染色体上表达，一边转录一边覆盖住它。Tsix 和 Jpx 对 Xist 分别做什么？",
    "options": [
      "Tsix activates Xist while Jpx suppresses it, so the coating stays in cis",
      "Both suppress Xist, which is how the second X escapes inactivation",
      "Tsix suppresses Xist, and Jpx builds up on the inactive X and activates it",
      "Both are diced into siRNA that pairs with Xist and degrades the transcript"
    ],
    "answer": 2,
    "why_en": "Tsix is the antisense transcript of Xist and suppresses it; Jpx is a separate noncoding RNA that accumulates on the inactive X and pushes Xist up. Xist itself is the signal-molecule case: expressed at one place and one moment, coating the chromosome while large numbers of histones there are methylated, until the genes on it stop being expressed. Nothing in this route runs through Dicer — lncRNA regulation has stopped pairing with messages altogether.",
    "why_cn": "Tsix 是 Xist 的反义转录物，抑制 Xist；Jpx 是另一种非编码 RNA，在失活的 X 染色体中积累并进一步激活 Xist。Xist 本身属于信号分子那一类：在特定地点、特定时刻表达，一边覆盖染色体，一边使其上大量组蛋白被甲基化，直到该染色体上的基因不再表达。这条路上没有 Dicer 的事——lncRNA 的调控已经不再靠与 mRNA 配对了。"
  }
];
