/* Spine for chapter 8 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.

   HOUSE STYLE, and it is the point of this app. All four rules come from the reader
   telling me exactly which sentences stopped them:

   1. STATE THE THING. No "not X, but Y", no rhetorical inversion.
        ✗ 双螺旋不是谁宣布的，是四组实验逼出来的
        ✓ 双螺旋是从四组实验推出来的
   2. NO UNBOUND "THE". Never a definite reference to something not yet named — no
      "the model", "this section", "that sentence", "the correction". If a thing has
      not appeared yet, name it or drop the sentence.
        ✗ The x-ray pattern had two spacings, and the model had to produce both.
          （"这里指的模型是什么模型？"）
        ✓ Franklin and Wilkins' x-ray pattern had two spacings: 3.4 Å and 34 Å.
   3. NAME THE ACTUAL OBJECTS. S bacteria, a capsule, sulfur-35, a kitchen blender.
      An experiment described in the abstract is neither memorable nor examinable.
   4. NO COMMENTARY ABOUT THE TEXTBOOK. Nothing about what the Czech node says, what
      this section supplies, or what an examiner might ask. That is the other app's job.
   5. INTRODUCE EVERY NOUN YOU USE. A step that names a thing for the first time says
      what it is in the same breath. Do not assume the reader met it in another node.
        ✗ 要记住三个：I/II 型内含子自己剪自己…
          （"为啥突然开始说 I/II 型内含子…为啥 rna 会有内含子"）
        ✓ 先说清转录本比需要的长、被剪掉的那段叫内含子，再说有些内含子会自己剪自己。
   6. STATE THE SCOPE. If a claim is about part of a thing, say which part.
        ✗ RNA 双链只有 A 型  （"这个是泛指嘛，所有 rna 都是 a?"）
        ✓ RNA 大部分时候是单链；配上对的那些片段才是 A 型。

   7. REACH BACK. When a step is the parallel, the same class, or the opposite of
      something said earlier in this spine, say so and point at it (`recall`). A
      claim that connects to one you already hold costs almost nothing to learn.

   Every term a step uses is defined either in the step or in `terms` below it.

   `beyond: true` marks detail that is standard and commonly examined but is NOT in
   the source pages this node was read from — the same honesty rule the full app's
   beyondPoints uses. Griffith's S/R strains are the case here: Lehninger 8 §8.2
   opens at Avery, so the strains are carried in as context, flagged, not passed off
   as read off the page. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

window.BIOLITE_SPINE["L-8-2-1"] = {
  /* Short node title. The full app's is 240 characters and says what this node adds
     relative to the Czech one — exactly the commentary rule 4 removes. */
  /* What this spine takes as already held. Declared rather than left implicit: the
     linter honours it, and when a concept feels like it came from nowhere this list
     is the first place to look. */
  assumed: ["double helix", "DNA", "RNA", "base", "nucleotide", "protein", "gene"],
  nodeTitle_en: "Nucleic acid structure",
  nodeTitle_cn: "核酸的结构",
  title_en: "How the double helix was worked out, and what holds it together",
  title_cn: "双螺旋是怎么被推出来的，以及它靠什么撑住",
  steps: [
    {
      en: "The double helix was worked out from four experiments.",
      cn: "双螺旋是从四组实验推出来的。",
      src: "A p.269–272, §8.2"
    },
    {
      link_en: "first experiment",
      link_cn: "第一组实验",
      en: "Pneumococcus comes in two forms: S bacteria have a polysaccharide capsule and kill mice; R bacteria have no capsule and do not. Add an extract of heat-killed S bacteria to living R bacteria and the R bacteria turn into S bacteria, permanently and heritably. Avery, MacLeod and McCarty purified that extract step by step; what was left was DNA.",
      cn: "肺炎链球菌有两型：**S 菌**有多糖荚膜，能让小鼠死亡；**R 菌**没有荚膜，不致死。把加热杀死的 S 菌提取物加进活的 R 菌里，R 菌变成了 S 菌，而且这个性状会一代代传下去。Avery、MacLeod 与 McCarty 一步步纯化那份提取物，最后剩下的是 **DNA**。",
      src: "A p.269",
      beyond: true,
      beyondNote: "The S/R strains are Griffith's 1928 setup, carried in as context; §8.2 itself opens at Avery."
    },
    {
      link_en: "that showed DNA carries it — this showed protein does not",
      link_cn: "上一组证明 DNA 能携带遗传信息；这一组排除了蛋白",
      en: "A phage is a virus that infects bacteria: a protein coat with DNA inside, which sticks to a cell and injects something into it. **Hershey and Chase labelled the coat with sulfur-35 and the DNA with phosphorus-32** — sulfur is in protein and not in DNA, phosphorus is in DNA and not in protein, so the two labels cannot be confused. They let the phage infect E. coli, then knocked the spent coats off the cells in a kitchen blender. The phosphorus went into the cells; the sulfur stayed outside. DNA entered, protein did not.",
      cn: "噬菌体（phage）是**专门感染细菌的病毒**：一个蛋白外壳，里面装着 DNA，它贴到细菌上、往里注射东西。**Hershey 与 Chase 用 ³⁵S 标记外壳、用 ³²P 标记 DNA** —— 硫只在蛋白里、不在 DNA 里，磷只在 DNA 里、不在蛋白里，所以两个标记不会混。他们让噬菌体感染大肠杆菌，再用厨房搅拌机把用完的空壳从细胞上打下来。**磷进了细胞，硫留在外面** —— 进去的是 DNA，不是蛋白。",
      src: "A p.269"
    },
    {
      link_en: "so the material is DNA. What shape is it?",
      link_cn: "所以遗传物质是 DNA。那它长什么样？",
      en: "Chargaff measured base composition species by species and found A = T and G = C every time, while the ratio between species varies. Any model of DNA had to produce those two equalities.",
      cn: "Chargaff 一个物种一个物种地测碱基组成，每次都得到 **A = T、G = C**，而物种之间的比例各不相同。任何 DNA 模型都必须给出这两个等式。",
      src: "A p.270"
    },
    {
      link_en: "and the second constraint on any shape",
      link_cn: "对形状的第二个约束",
      en: "Franklin and Wilkins' x-ray pattern had two spacings: 3.4 Å between stacked bases and 34 Å for one full turn. Ten base pairs per turn follows.",
      cn: "Franklin 与 Wilkins 的 X 射线衍射图上有两个周期：堆叠碱基之间 **3.4 Å**，一整圈 **34 Å**。由此得到**每圈十个碱基对**。",
      src: "A p.272"
    },
    {
      link_en: "one correction to that number",
      link_cn: "这个数字要更正一处",
      en: "Ten is the value in a dried fibre. In solution the helix has 10.5 base pairs per turn. Give 10.5 in an exam.",
      cn: "十是**干燥纤维**里的数值。**溶液中每圈 10.5 个碱基对**。考试答 **10.5**。",
      src: "A p.272"
    },
    {
      link_en: "and that difference between dry and wet is where the letters A and B come from",
      link_cn: "而「干」和「湿」的这个差别，正是 A 和 B 这两个字母的来历",
      en: "Franklin's fibres gave two different diffraction patterns depending on how much water they held, and the two patterns were simply labelled A and B. **That is all the letters mean: A is the drier fibre, B is the wetter one.** DNA inside a cell is wet, so B is the form it is normally in. A third form, Z, is left-handed and is named after the zigzag its backbone traces.",
      cn: "Franklin 的纤维含水量不同，给出的衍射图也不同，这两张图当时就被简单地标成 **A** 和 **B**。**这两个字母的全部含义就是这个：A 是较干的那张，B 是较湿的那张。** 细胞里的 DNA 是湿的，所以它平常就处在 **B 型**。第三种是 **Z 型**，左手螺旋，名字来自它骨架走出的锯齿形（zigzag）。",
      src: "A p.272-273",
      beyond: true,
      beyondNote: "The humidity dependence is in the source (B to A below about 75% relative water content); that the letters are simply the two pattern labels is standard history, added here because the naming was asked about."
    },
    {
      en: "Hydrogen bonds decide which base pairs with which. That is specificity.",
      cn: "**氢键决定谁和谁配对**。这是**特异性**。",
      src: "A p.271"
    },
    {
      link_en: "so if not hydrogen bonds, then what?",
      link_cn: "那如果不是氢键，是什么？",
      en: "Two things do it. **Metal cations sit on the backbone and shield the negative charges on its phosphates, which would otherwise push the two strands apart. And the bases, being flat, lie face to face all the way up the middle of the helix like a stack of coins — that face-to-face contact is worth energy, and it is what stacking means.** That is what makes the two strands hard to pull apart, and it is why GC-rich DNA is more stable. Counting hydrogen bonds, three against two, predicts the same thing for the wrong reason.",
      cn: "有两样东西在起作用。**一是金属阳离子贴在骨架上，屏蔽掉磷酸的负电荷 —— 否则这些负电荷会把两条链推开。二是碱基本身是扁平的，它们在螺旋中央一路面对面地叠上去，像一摞硬币 —— 这种面对面的接触本身就值能量，这就是「堆积（stacking）」的意思。**这才是把两条链拉开很难的原因，也是**富含 GC 的 DNA 更稳定**的原因。数氢键（三个对两个）会得到同一个结论，但理由是错的。",
      src: "A p.271"
    },
    {
      link_en: "so far, the plain duplex. It is not the only thing DNA does",
      link_cn: "以上都是普通双链。DNA 能做的不止这些",
      en: "A base already in a Watson-Crick pair still has a free face pointing into the major groove — the N-7, O6 and N6 atoms of purines, called the Hoogsteen positions. A third strand hydrogen-bonds there, giving a triplex. **What it is for: these polypurine and polypyrimidine tracts sit in the regions that regulate expression of some eukaryotic genes, so a stretch of DNA can switch by changing shape rather than by changing sequence.**",
      cn: "已经配好对的碱基还有一面朝着主沟空着 —— 嘌呤的 **N-7、O6、N6**，叫 **Hoogsteen 位点**。第三条链在那里形成氢键，得到 **triplex（三链体）**。**有什么用：这些多聚嘌呤／多聚嘧啶区段正好位于某些真核基因的调控区，所以一段 DNA 可以靠改变形状来开关，而不必改变序列。**",
      src: "A p.274, figure 8-20",
      see: [
        { id: "L-28-3-1", en: "how eukaryotic genes are actually regulated", cn: "真核基因调控的完整机制" },
        { id: "4-1-2", en: "the Czech section on nucleic acid structure", cn: "捷克教材的核酸结构一节" }
      ]
    },
    {
      link_en: "the same idea with four strands",
      link_cn: "同一个想法，换成四条链",
      en: "Four guanine-rich strands can pair instead of two, giving a G-tetraplex. **What it is for: the guanine-rich single strand at the end of a chromosome folds into one, which is how a telomere caps itself.**",
      cn: "四条富含鸟嘌呤的链也能互相配对，得到 **G-四链体**。**有什么用：染色体末端那段富含鸟嘌呤的单链会折成这种结构 —— 端粒就是这样把自己封住的。**",
      src: "A p.274",
      beyond: true,
      beyondNote: "The telomere connection is standard and examinable; §8.2 introduces the G-tetraplex as a structure and does not develop the telomere on these pages.",
      see: [{ id: "L-9-1-1", en: "telomeres, and how chromosome ends are studied", cn: "端粒，以及染色体末端怎么被研究" }]
    },
    {
      link_en: "DNA is double-stranded from the start. RNA is not, and everything below follows from that",
      link_cn: "DNA 从一开始就是双链，RNA 不是 —— 下面几条全都由此而来",
      en: "RNA is made as a single strand, so it folds back on itself wherever two nearby stretches are complementary. **That fold is a hairpin, and a hairpin is a signal: one in the growing transcript is what makes RNA polymerase let go and stop transcribing.**",
      cn: "**RNA 以单链形式合成**，所以只要附近两段互补，它就会折回自身。**这个折叠就是发夹 —— 而发夹是一个信号：正在延长的转录本上出现一个发夹，RNA 聚合酶就会松开、停止转录。**",
      src: "A p.275–277",
      see: [
        { id: "4-1-4-2", en: "transcription termination, where the hairpin does its work", cn: "转录终止 —— 发夹起作用的地方" },
        { id: "4-2-4-1", en: "the trp operon, where a hairpin decides whether to keep going", cn: "trp 操纵子 —— 发夹决定要不要继续转录" }
      ]
    },
    {
      link_en: "when it does pair, the geometry is not DNA's",
      recall_en: "the opposite of the DNA case two steps up: DNA is wet and picks B; RNA cannot pick at all",
      recall_cn: "和上面 DNA 那步正好相反：DNA 是湿的、可以选 B；RNA 根本没得选",
      link_cn: "而它一旦配上对，几何形状也和 DNA 不一样",
      en: "An RNA strand ends up double-stranded in exactly two situations: **it folds back and pairs with itself, which is the hairpin above; or it pairs with the DNA template it is being copied from, which is the hybrid inside the polymerase.** Both of those short duplexes are A-form, never B-form. The rest of the molecule is single-stranded and is no helix at all. **DNA gets to pick B because its sugar has no 2'-OH. RNA has one, and it does not fit the B-form geometry — so a paired stretch of RNA has no choice: A is the only form open to it.** That is why the hybrid inside a transcribing polymerase has a different shape from the DNA on either side of it.",
      cn: "一条 RNA 只有**两种情况**会变成双链：**一是它折回来和自己配对，就是上一步说的发夹；二是它和正在被抄写的那条 DNA 模板配对，就是聚合酶内部那段杂合链。**这两种短双链**都是 A 型，绝不会是 B 型**。分子的其余部分是单链，根本不构成螺旋。**DNA 之所以能选 B 型，是因为它的糖上没有 2′-OH。RNA 有，而这个 OH 塞不进 B 型的几何 —— 所以配上对的 RNA 没得选，A 型是它唯一能用的形式。** 这也是正在转录的聚合酶内部那段杂合链，形状与它两侧的 DNA 不一样的原因。",
      src: "A p.275–277",
      see: [{ id: "L-26-1-1", en: "transcription, and the hybrid inside the polymerase", cn: "转录，以及聚合酶内部那段杂合链" }]
    },
    {
      link_en: "one more thing about RNA, needed before the last step makes sense",
      link_cn: "关于 RNA 还有一件事，不先说清楚，最后一步会看不懂",
      en: "A eukaryotic gene is transcribed into an RNA longer than the cell needs. **The stretches that get cut out are introns; the stretches that are kept and joined up are exons; the cutting-and-joining is splicing.** An intron is not a separate molecule — it is part of the RNA, until it is removed.",
      cn: "真核基因转录出来的 RNA 比细胞实际需要的长。**被剪掉的那些段叫内含子（intron），留下并接在一起的叫外显子（exon），这个剪切拼接的过程叫剪接（splicing）。** 内含子不是另一个分子 —— 在被切掉之前，它就是这条 RNA 的一部分。",
      src: "A p.275–277",
      see: [{ id: "L-26-2-1", en: "RNA processing — splicing in full", cn: "RNA 加工 —— 剪接的完整机制" }]
    },
    {
      link_en: "a single strand that folds has a shape, and a shape can be an active site",
      recall_en: "same move as the hairpin two steps up — folding is what gives a single strand a shape",
      recall_cn: "和上面发夹是同一个动作 —— 折叠正是单链获得形状的方式",
      link_cn: "会折叠的单链就有形状，而形状可以成为活性中心",
      en: "Some RNAs are enzymes, and the reason is the folding again: **a single strand that folds has a fixed three-dimensional shape, and a shape can hold two reacting groups in position. That is what an active site is.** A group I or group II intron folds into one, and then cuts itself out of the transcript with no protein involved — group I recruits a free guanosine to make the first cut, group II uses the 2'-OH of one of its own adenosines and comes out as a lasso. **The intron is RNA, so an intron removing itself is RNA catalysing a reaction on RNA.** Two more worth having: RNase P, whose catalytic part is RNA, trims tRNA precursors to length; and the ribosome, which forms every peptide bond in the cell with RNA at its active site, not protein.",
      cn: "有些 RNA 本身就是酶，原因还是折叠：**会折叠的单链就有固定的三维形状，而形状可以把两个要反应的基团摆到正确的相对位置上 —— 这就是活性中心。** I 型和 II 型内含子折出这样一个结构，然后不靠任何蛋白把自己从转录本里剪出去 —— **I 型**拉一个游离的鸟苷来发动第一刀，**II 型**用自己内部某个腺苷的 2′-OH 去进攻，剪下来时成一个套索。**内含子本身就是 RNA，所以「内含子自己剪自己」就是 RNA 在催化一个针对 RNA 的反应。**另外两个值得记：RNase P 的催化部分是 RNA，负责把 tRNA 前体切到正确长度；核糖体形成细胞里每一个肽键，其活性中心是 RNA 而不是蛋白。",
      src: "A p.275–277",
      openQuestion_en: "Why introns are there at all is a separate question, and not a settled one.",
      openQuestion_cn: "至于内含子当初为什么会存在，那是另一个问题，而且并没有定论。",
      see: [
        { id: "L-26-4-1", en: "catalytic RNAs in full, and the RNA world", cn: "核酶的完整讨论与 RNA 世界假说" },
        { id: "L-26-2-1", en: "RNA processing — where self-splicing was found", cn: "RNA 加工 —— 自剪接是在这里发现的" },
        { id: "L-27-2-1", en: "the ribosome as a ribozyme", cn: "核糖体是一个核酶" }
      ]
    }
  ],
  terms: [
    { en: "phage", cn: "噬菌体",
      def_en: "A virus that infects bacteria — a protein coat with DNA inside. It sticks to a cell and injects its contents, which is what made it the right tool for asking whether protein or DNA carries heredity.",
      def_cn: "专门感染细菌的病毒 —— 一个蛋白外壳，里面装着 DNA。它贴到细菌上，把内容物注射进去；正因为如此，它才成了「究竟是蛋白还是 DNA 携带遗传信息」这个问题的合适工具。" },
    { en: "base stacking", cn: "碱基堆积",
      def_en: "The flat faces of successive bases lying against each other up the middle of the helix, like a stack of coins. The contact is worth energy, and together with cation shielding of the phosphates it is what holds the two strands together — the hydrogen bonds supply specificity, not stability.",
      def_cn: "相邻碱基的扁平面在螺旋中央一路贴合叠起，像一摞硬币。这种接触本身值能量；它与阳离子对磷酸负电荷的屏蔽一起，才是把两条链维系住的原因 —— 氢键提供的是特异性，不是稳定性。" },
    { en: "A, B and Z forms", cn: "A / B / Z 型",
      def_en: "A and B are the labels Franklin's two fibre-diffraction patterns received — A from the drier fibre, B from the wetter. Cellular DNA is wet and is therefore B. Z is left-handed, named for the zigzag of its backbone. Paired RNA is always A, because its 2'-OH does not fit B-form geometry.",
      def_cn: "A 与 B 是 Franklin 两张纤维衍射图的标号 —— A 来自较干的纤维，B 来自较湿的。细胞里的 DNA 是湿的，所以是 B 型。Z 型是左手螺旋，名字来自骨架的锯齿形。配上对的 RNA 永远是 A 型，因为它的 2′-OH 塞不进 B 型的几何。" },
    { en: "intron / exon / splicing", cn: "内含子／外显子／剪接",
      def_en: "A eukaryotic transcript is longer than the cell needs. The stretches cut out are introns, the ones kept and joined are exons, and the cutting-and-joining is splicing. An intron is RNA — part of the same molecule — until it is removed.",
      def_cn: "真核转录本比细胞需要的长。被切掉的段叫内含子，留下并连接起来的叫外显子，这个切除与连接的过程叫剪接。内含子就是 RNA，是同一条分子的一部分，直到它被切掉为止。" },
    { en: "S and R pneumococcus", cn: "S 型与 R 型肺炎球菌",
      def_en: "S has a polysaccharide capsule and is lethal to mice; R has no capsule and is harmless. The pair is what makes transformation visible.",
      def_cn: "S 型有多糖荚膜、对小鼠致死；R 型无荚膜、无害。正是这一对差别让「转化」这件事看得见。" },
    { en: "Hoogsteen positions", cn: "Hoogsteen 位点",
      def_en: "The N-7, O6 and N6 atoms of a purine, which face into the major groove and stay free after Watson-Crick pairing. A third strand binds here.",
      def_cn: "嘌呤的 N-7、O6、N6 原子，朝向主沟，在 Watson-Crick 配对后仍然空着。第三条链结合在这里。" },
    { en: "triplex", cn: "三链体",
      def_en: "Three-stranded DNA, held by Hoogsteen bonds to a normal duplex. Most stable at low pH, because the G-C triplet needs a protonated cytosine.",
      def_cn: "三条链的 DNA，靠 Hoogsteen 氢键搭在一条普通双链上。低 pH 下最稳定，因为 G-C 三联体需要一个被质子化的胞嘧啶。" },
    { en: "G-tetraplex", cn: "G-四链体",
      def_en: "Four-stranded DNA formed by guanosine-rich sequences. Stable over a wide range of conditions, but needs a very high proportion of guanosine.",
      def_cn: "由富含鸟苷的序列形成的四链 DNA。在很宽的条件范围内稳定，但需要很高比例的鸟苷。" }
  ]
};
