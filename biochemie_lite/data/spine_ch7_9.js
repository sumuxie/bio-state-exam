/* Spines for §7.4, §8.3, §8.4, §9.1, §9.2 and §9.3 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.

   HOUSE STYLE — the seven rules, followed literally:

   1. STATE THE THING. No rhetorical inversion.
   2. NO UNBOUND "THE". Never a definite reference to something not yet named.
   3. NAME THE ACTUAL OBJECTS. A hot spring, a kitchen of blue and white colonies,
      a red cell that vanishes in hours, a mosquito whose daughters are all sons.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN YOU USE, in the same breath as the first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK with `recall_en` / `recall_cn` when a step is the parallel, the
      same class, or the opposite of one earlier in the same spine.

   And every structural claim carries its consequence — 「这些东西一般有啥用？」

   L-8-3-1 continues directly from the L-8-2-1 spine in spine_ch8.js: base stacking
   and the double helix are established there and are recalled rather than re-taught.

   `beyond: true` marks detail that is standard and examinable but is NOT on the pages
   the node was read from. Used sparingly and always with a reason in `beyondNote`. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== L-7-4-1 */
window.BIOLITE_SPINE["L-7-4-1"] = {
  assumed: ["cell", "protein", "amino acid", "sugar", "carbohydrate", "gene", "enzyme",
            "blood", "virus", "hormone", "membrane", "hydrogen bond", "nucleotide",
            "DNA", "RNA", "base", "antibody", "glucose", "peptide", "nucleic acid", "indole ring"],
  nodeTitle_en: "Carbohydrates as informational molecules",
  nodeTitle_cn: "作为信息分子的糖",
  title_en: "What a sugar chain says, what reads it, and what it decides",
  title_cn: "一条糖链说了什么、谁在读它，以及它决定了什么",
  steps: [
    {
      en: "A monosaccharide is a single sugar unit such as glucose or mannose; a short chain of several of them joined end to end is an oligosaccharide, also called a glycan; a protein with a glycan attached to it is a glycoprotein. Glycobiology is the study of what those attached chains are and what they do, and its claim is that cells use specific oligosaccharides to encode information about four things: where inside the cell a newly made protein should go, how two cells recognise each other, how a cell differentiates and a tissue develops, and what a signal passing between cells says. **One chemical language serves all four — a protein finding its compartment, two cells finding each other, a tissue building itself, and a message crossing from one cell to the next.**",
      cn: "monosaccharide（单糖）是一个单独的糖单元，比如葡萄糖或甘露糖；几个单糖首尾相连成的短链叫 oligosaccharide（寡糖），也叫 glycan（聚糖）；身上挂着一条聚糖的蛋白质叫 glycoprotein（糖蛋白）。glycobiology（糖生物学）研究的就是这些挂上去的糖链是什么、又在干什么，而它的主张是：细胞用特定的寡糖来编码四类信息 —— 新造出来的蛋白该送到细胞内的哪个位置、两个细胞如何互相识别、一个细胞如何分化并使组织发育，以及细胞之间传递的信号说了什么。**同一套化学语言同时服务于这四件事 —— 一个蛋白找到自己的隔间、两个细胞找到彼此、一块组织把自己建起来，以及一条消息从一个细胞传到另一个细胞。**",
      src: "A p.254",
      see: [{ id: "7-5", en: "how a glycan is attached to a protein in the first place — O-linked, N-linked, and the shared pentasaccharide core", cn: "糖链一开始是怎么接到蛋白上的 —— O-连接、N-连接，以及共同的五糖核心" }]
    },
    {
      link_en: "why a sugar, of all molecules, is the right thing to write information in",
      link_cn: "在所有分子里，为什么偏偏是糖适合用来写信息",
      en: "A peptide is a string of amino acids and a nucleic acid is a string of nucleotides. An oligosaccharide is a tree: branched structures, which do not occur in nucleic acids or proteins, are common in oligosaccharides — a single real glycoprotein glycan can hold 14 monosaccharide residues of four different kinds, linked (1→2), (1→3), (1→4), (1→6), (2→3) and (2→6), some in the alpha and some in the beta configuration. Now count. From 20 available monosaccharide subunits, many billions of different hexasaccharides are possible, against 6.4 x 10^7 hexapeptides from 20 amino acids and only 4,096 hexanucleotides from four bases, and allowing one or more residues to be sulfated raises the sugar figure by a further two orders of magnitude. Two honest limits travel with that arithmetic: only a subset of those combinations is ever made, because the biosynthetic enzymes and the supply of precursors restrict it — and even after that cut, the information packed into a glycan far surpasses what a nucleic acid of the same modest size can hold. So **each oligosaccharide presents a unique three-dimensional face: a word in the sugar code, readable by the proteins that meet it.**",
      cn: "一条肽是氨基酸串成的线，一条核酸是核苷酸串成的线。而寡糖是一棵树：分支结构在核酸和蛋白质里都不出现，在寡糖里却很常见 —— 一条真实的糖蛋白聚糖可以含 14 个单糖残基、分属四种不同的糖，连接方式有 (1→2)、(1→3)、(1→4)、(1→6)、(2→3) 和 (2→6)，有的是 α 构型、有的是 β 构型。现在来数一数。用 20 种可用的单糖单元，可以组出数十亿种不同的六糖；相比之下，20 种氨基酸只给出 6.4 x 10^7 种六肽，四种碱基只给出 4,096 种六核苷酸；再允许其中一个或多个残基被硫酸化，糖的数目还要再抬高两个数量级。这笔算术要带着两条诚实的限定一起走：实际造出来的只是其中一小部分，因为生物合成酶和前体的供应把它限制住了 —— 而即使砍掉这一大截，一条聚糖里装下的信息量仍然远超同样大小的核酸。所以**每一条寡糖都呈现出一张独一无二的三维「面孔」：糖密码里的一个词，供遇到它的蛋白质读取。**",
      src: "A p.254"
    },
    {
      link_en: "a word is only a word if something reads it",
      link_cn: "一个词得有人读，才算是一个词",
      en: "**A lectin is a protein that binds carbohydrates with high specificity and with moderate to high affinity.** Lectins are the readers of the sugar code, and they are not a specialised curiosity: they work in cell-cell recognition, in signalling, in adhesion, and in directing newly synthesised proteins to the right compartment inside the cell. Plant lectins are abundant in seeds, where they probably serve as deterrents to insects and other predators — which is why they are cheap to obtain in bulk, and incidentally why some raw legumes are toxic. A purified plant lectin immobilised on a column sorts proteins by their sugar rather than by their charge, size or sequence, and that is the only routine laboratory method that reads the glycan directly.",
      cn: "**lectin（凝集素）是一类以高特异性、中等到高亲和力结合糖的蛋白质。**凝集素就是糖密码的读者，而且它们绝不是某个角落里的稀奇玩意：它们参与细胞间识别、信号传导、黏附，以及把新合成的蛋白送往细胞内正确的隔间。植物凝集素在种子里含量很高，在那里大概是用来吓退昆虫和其他捕食者的 —— 这也是它们能被大量廉价获得的原因，顺带解释了为什么有些生豆子有毒。把纯化的植物凝集素固定在层析柱上，就得到一台按「糖」来分选蛋白质的机器，而不是按电荷、大小或序列 —— 这是唯一一种直接读取聚糖的常规实验方法。",
      src: "A p.254"
    },
    {
      link_en: "so what does a reader actually decide? Start with how long a protein is allowed to live",
      link_cn: "那读者究竟决定什么？先从「一个蛋白被允许活多久」说起",
      en: "**Neu5Ac, a sialic acid, sits at the ends of the oligosaccharide chains of many blood plasma glycoproteins, and for as long as it is there it protects those proteins from uptake and degradation in the liver.** Strip it off and the galactose residue underneath is exposed. A hepatocyte — a liver cell — carries in its plasma membrane lectins called asialoglycoprotein receptors, asialo- meaning without sialic acid, and they bind precisely those unprotected galactose residues; binding triggers endocytosis, and the glycoprotein is swallowed and destroyed. Ceruloplasmin, a copper-carrying serum glycoprotein with several chains ending in Neu5Ac, is the worked case. A terminal sialic acid is a valid ticket, and losing it is a death sentence.",
      cn: "**Neu5Ac 是一种 sialic acid（唾液酸），它坐在许多血浆糖蛋白的寡糖链末端；只要它还在那儿，这些蛋白就不会被肝脏摄取和降解。**把它剥掉，底下的半乳糖残基就暴露出来。hepatocyte（肝细胞）的质膜上带着一类凝集素，叫 asialoglycoprotein receptor（去唾液酸糖蛋白受体），asialo- 的意思就是「没有唾液酸的」，它们结合的正是这些失去保护的半乳糖残基；一结合就触发内吞，糖蛋白被吞进去销毁。ceruloplasmin（铜蓝蛋白） 是一个含铜的血清糖蛋白，好几条糖链都以 Neu5Ac 结尾，正是书上举的实例。末端唾液酸是一张有效车票，丢了它就是死刑判决。",
      src: "A p.254",
      openQuestion_en: "What actually strips the sialic acid off a serum glycoprotein in the body is unclear — it may be a sialidase made by an invading organism, or a steady slow release by extracellular enzymes. The clock is well described at the reading end and undetermined at the winding end.",
      openQuestion_cn: "在体内究竟是什么把唾液酸从血清糖蛋白上摘下来的，目前并不清楚 —— 可能是入侵微生物产生的 sialidase，也可能是胞外酶缓慢而持续地把它释放掉。这只钟的「读数」一端描述得很清楚，「上发条」的一端还没定论。"
    },
    {
      link_en: "the same clock, run on a whole cell instead of on one protein",
      link_cn: "同一只钟，这回走在一整个细胞上，而不是一个蛋白上",
      recall_en: "the terminal Neu5Ac of the step above, now protecting an entire red cell",
      recall_cn: "还是上一步那个末端 Neu5Ac，只是这次它保护的是一整个红细胞",
      en: "A newly synthesised erythrocyte — a red blood cell — carries several membrane glycoproteins whose oligosaccharide chains end in Neu5Ac, and a similar mechanism is apparently what removes old erythrocytes from the mammalian bloodstream. The demonstration is a single subtraction: withdraw blood from an experimental animal, treat it in vitro with neuraminidase — an enzyme, also called a sialidase, that clips terminal sialic acid residues off — and put the blood back. The treated erythrocytes disappear from the circulation within a few hours, while erythrocytes withdrawn and reintroduced without the neuraminidase treatment go on circulating for days. **Hours against days, with one enzymatic treatment as the only difference between them.**",
      cn: "新合成的 erythrocyte（红细胞）膜上有好几种糖蛋白，它们的寡糖链同样以 Neu5Ac 结尾，而把衰老红细胞从哺乳动物血流中清除掉的，看起来就是同一套机制。证明它的实验只有一处差别：从实验动物体内抽血，在体外用 neuraminidase 处理 —— 这是一种酶，也叫 sialidase，专门把末端唾液酸残基剪掉 —— 然后把血输回去。经过处理的红细胞在几小时内就从循环中消失，而同样抽出、同样输回、只是没做酶处理的红细胞，则继续循环好几天。**几小时对好几天，两者之间唯一的差别就是那一次酶处理。**",
      src: "A p.254–255"
    },
    {
      link_en: "and the same clock again, this time setting the shape of a hormone curve",
      link_cn: "还是同一只钟，这次它决定了一条激素曲线的形状",
      en: "Luteinizing hormone and thyrotropin are polypeptide hormones made in the pituitary gland, and both carry N-linked oligosaccharides ending in the disaccharide GalNAc4S(β1→4)GlcNAc — GalNAc4S being N-acetylgalactosamine sulfated on the -OH at C-4. A lectin receptor on hepatocytes recognises that particular disaccharide, and the receptor-hormone interaction mediates uptake and destruction of the hormone, lowering its concentration in the blood. So the blood level of each of these hormones undergoes a periodic rise, caused by pulsatile secretion from the pituitary, and a fall, caused by constant destruction in the liver. The falling edge of every pulse is a sugar-mediated clearance whose rate is set by one sulfated disaccharide — which is why **a hormone's potency in a living animal cannot be predicted from its receptor affinity alone: its glycan decides how long it is present to act at all.**",
      cn: "luteinizing hormone（黄体生成素） 和 thyrotropin（促甲状腺激素） 都是垂体产生的多肽激素，两者都带着 N-连接的寡糖，末端是二糖 GalNAc4S(β1→4)GlcNAc —— 其中 GalNAc4S 指的是 C-4 位 -OH 被硫酸化的 N-乙酰半乳糖胺。肝细胞上有一个凝集素受体专门识别这个二糖，受体与激素一结合，就介导激素的摄取和销毁，把它在血中的浓度降下来。于是这两种激素的血中水平呈现周期性的上升（来自垂体的脉冲式分泌）和下降（来自肝脏持续不断的销毁）。每一次脉冲的下降沿，都是一次由糖介导的清除，而它的速率由一个硫酸化二糖决定 —— 这也是为什么**一种激素在活体里的效力，光看它的受体亲和力是算不出来的：它的聚糖决定了它究竟能在场多久。**",
      src: "A p.254"
    },
    {
      link_en: "a clock decides how long. The next job decides where — starting with a white cell that has to get out of a blood vessel",
      link_cn: "钟决定「多久」。下一项工作决定「在哪里」—— 先从一个必须离开血管的白细胞说起",
      en: "Selectins are a family of plasma membrane lectins that mediate cell-cell recognition and adhesion, and the worked process is how a leukocyte — a white blood cell — crosses a capillary wall to reach infected tissue. It happens in two steps with two different chemistries, and the split is the whole design. Step one is sugar-mediated and weak: **P-selectin on the surface of capillary endothelial cells binds a specific oligosaccharide on the surface glycoproteins of a passing leukocyte, and that binding slows the leukocyte into a roll along the endothelial lining.** Each individual contact breaks easily, so the cell rolls instead of stopping dead. Step two is protein-mediated and strong: integrin molecules in the leukocyte's plasma membrane bind an adhesion protein on the endothelial cell, and now the leukocyte stops and crosses the capillary wall into the tissue. Two further selectins complete this homing — E-selectin on the endothelial cell and L-selectin on the leukocyte, each reading its partner's oligosaccharide — and several of the selectins essential to it bind specifically to the tetrasaccharide sialyl Lewis x, Neu5Ac-(α2→3)-Gal-(β1→4)(α-L-Fuc-[1→4])-GlcNAc.",
      cn: "selectin（选择素）是一族质膜凝集素，负责介导细胞间的识别与黏附，书上的实例是 leukocyte（白细胞）如何穿过毛细血管壁、到达受感染的组织。这件事分两步完成，用的是两套不同的化学，而这个拆分本身就是整个设计的关键。第一步由糖介导，而且很弱：**毛细血管内皮细胞表面的 P-selectin 结合路过白细胞表面糖蛋白上的某个特定寡糖，这一结合把白细胞减速，让它沿着内皮内衬「滚」起来。**每一个单独的接触都很容易断开，所以细胞是在滚，而不是一下子刹死。第二步由蛋白介导，而且很强：白细胞质膜上的 integrin（整合素）结合内皮细胞上的一个黏附蛋白，这下白细胞停住，穿过毛细血管壁进入组织。另外两个选择素补齐了这套归巢过程 —— 内皮细胞上的 E-selectin 和白细胞上的 L-selectin，各自读取对方细胞上的寡糖 —— 而其中几个关键的选择素，专门结合一个四糖：sialyl Lewis x，即 Neu5Ac-(α2→3)-Gal-(β1→4)(α-L-Fuc-[1→4])-GlcNAc。",
      src: "A p.255"
    },
    {
      link_en: "that address is read by more than white cells, and the clinical weight runs both ways",
      link_cn: "读这张地址标签的不止白细胞，而且临床后果朝两个方向都成立",
      en: "Human selectins mediate the inflammatory responses in rheumatoid arthritis, asthma, psoriasis, multiple sclerosis and the rejection of transplanted organs, so there is great interest in drugs that block selectin-mediated adhesion: carbohydrate derivatives that mimic the sialyl Lewis x portion and compete for the selectin binding site, or compounds that alter how the oligosaccharide is built in the first place. The same address label appears in oncology. **Many carcinomas express sialyl Lewis x, and when it is shed into the circulation it facilitates tumour cell survival and metastasis — a tumour cell displaying the leukocyte homing address gets to use the leukocyte homing machinery.**",
      cn: "人的选择素参与介导类风湿关节炎、哮喘、银屑病、多发性硬化以及移植器官排斥中的炎症反应，所以人们非常想找到能阻断选择素介导黏附的药物：一类是模仿 sialyl Lewis x 那一段的糖衍生物，去竞争选择素的结合位点；另一类则设法改变这个寡糖本身的合成。同一张地址标签在肿瘤学里也出现了。**许多癌（carcinoma）都表达 sialyl Lewis x，而当它被脱落释放到循环中时，会促进肿瘤细胞的存活与转移 —— 一个挂着白细胞归巢地址的肿瘤细胞，就能顺理成章地借用白细胞的归巢机器。**",
      src: "A p.255"
    },
    {
      link_en: "a virus reads the same surface, and it needs to read it twice — once to get in, once to get out",
      link_cn: "病毒读的是同一片表面，而且它要读两次 —— 一次为了进去，一次为了出来",
      recall_en: "the sialidase from the red-cell experiment four steps up, now carried by the virus itself and used on purpose",
      recall_cn: "就是上面红细胞实验里那个 sialidase，这回它长在病毒自己身上，而且是被有意使用的",
      en: "Several animal viruses, influenza among them, attach to a host cell through an interaction with the oligosaccharides displayed on that cell's surface. Influenza's lectin is the HA (hemagglutinin) protein, and it is essential for viral entry and infection — so the first move of an influenza infection is a lectin reading a sugar. The elegance is on the way out. Newly made viral particles bud off wrapped in a piece of the host plasma membrane, which means they are covered in exactly the oligosaccharides their own HA binds, and would stick to the cell and to each other. **The solution is a viral sialidase that trims the terminal sialic acid off the host cell oligosaccharides, releasing the new particles and stopping them clumping together, so another round of infection can start.** Hence the drugs: oseltamivir (Tamiflu) and zanamivir (Relenza) are sugar analogues that inhibit the viral sialidase by competing with the host oligosaccharides for its binding site — which blocks release and causes the particles to aggregate, two blocks for one drug. Resistance is a small structural story worth having: oseltamivir fits the site by pushing a nearby Glu residue out of the way, and a mutation putting the larger Tyr side chain where a His used to sit means the drug can no longer shift that Glu, so it binds much less well and the mutant virus is effectively resistant.",
      cn: "包括流感在内的好几种动物病毒，都是通过与宿主细胞表面展示的寡糖相互作用来附着上去的。流感病毒的凝集素就是 HA（hemagglutinin，血凝素）蛋白，它是病毒进入和感染所必需的 —— 所以流感感染的第一个动作，就是一个凝集素在读一个糖。真正精巧的地方在出去的时候。新造好的病毒颗粒出芽时会裹上一块宿主质膜，也就是说它们浑身覆盖着自己的 HA 正好会结合的那些寡糖，本该黏在细胞上、也黏在彼此身上。**解决办法是病毒自带一个 sialidase，把宿主细胞寡糖末端的唾液酸剪掉，从而把新颗粒释放出来、也让它们不再互相聚集，于是下一轮感染才能开始。**由此就有了那两种药：oseltamivir（达菲）和 zanamivir（乐感清）是糖类似物，它们与宿主细胞寡糖竞争病毒 sialidase 的结合位点，从而抑制这个酶 —— 一举堵住两条路：病毒出不来，出来的还会聚成团。耐药的机制是一个值得记住的小结构故事：oseltamivir 是靠把附近一个 Glu 残基推开才挤进结合位点的；一个突变把原来的 His 换成侧链更大的 Tyr 之后，药物再也推不动那个 Glu，结合能力大幅下降，突变病毒就等于耐药了。",
      src: "A p.255–256"
    },
    {
      link_en: "and the same surface chemistry is where several major parasites hide",
      link_cn: "而好几种重要寄生虫，藏身的也正是这同一片糖表面",
      en: "Some of the most devastating human parasitic diseases are caused by eukaryotic microorganisms that display unusual surface oligosaccharides, in some cases known to be protective for the parasite — trypanosomes, which cause African sleeping sickness and Chagas disease; Plasmodium falciparum, which causes malaria; and Entamoeba histolytica, which causes amoebic dysentery. **That is why the pathways by which those parasites build their oligosaccharides have attracted so much drug-discovery effort: the coat is the target.**",
      cn: "有几种最凶险的人类寄生虫病，病原都是真核微生物，而它们在表面展示着不寻常的寡糖，其中有些已知对寄生虫本身有保护作用 —— trypanosome（锥虫，引起非洲昏睡病和恰加斯病）、Plasmodium falciparum（恶性疟原虫，引起疟疾），以及 Entamoeba histolytica（溶组织内阿米巴，引起阿米巴痢疾）。**这就是为什么这些寄生虫合成寡糖的途径吸引了如此多的药物开发投入：那层外衣本身就是靶点。**",
      src: "A p.256"
    },
    {
      link_en: "everything so far has been outside the cell. Lectins also work inside it, and there the sugar is a postal address",
      link_cn: "以上全发生在细胞外。凝集素在细胞内也干活，而在那里，糖是一个邮政地址",
      en: "Lectins act intracellularly as well, sorting proteins for transport to particular compartments: **an oligosaccharide carrying mannose 6-phosphate, recognised by a lectin, is a molecular zip code that tags a newly synthesised protein in the Golgi complex for transfer to the lysosome** — the organelle in which the cell digests things, and which therefore has to be filled with degradative enzymes without those enzymes being released anywhere else. X-ray crystallography of that lectin, the mannose 6-phosphate receptor, shows what specificity looks like atom by atom: every hydroxyl group of the mannose is hydrogen-bonded to the protein, the phosphate is hydrogen-bonded to Arg111 and coordinated to a manganese ion, and His105 is hydrogen-bonded to one of the phosphate oxygens — a complete complementary set rather than one contact. And then the part that turns a binding protein into a delivery vehicle: the lysosome has a lower internal pH than the Golgi complex, and on arrival the receptor loses its affinity for mannose 6-phosphate and lets the cargo go into the lysosomal matrix. His105, protonated at that lower pH, is thought to be the residue that causes the release.",
      cn: "凝集素在细胞内部同样干活，负责把蛋白分选到特定的隔间去：**一条带有 mannose 6-phosphate（甘露糖-6-磷酸）的寡糖被某个凝集素识别，就成了一个分子邮编，把高尔基体中新合成的蛋白标记为「送往 lysosome（溶酶体）」** —— 溶酶体就是细胞用来消化东西的细胞器，因此必须被灌满降解酶，同时又不能让这些酶漏到别处去。对这个凝集素（即 mannose 6-phosphate receptor）做的 X 射线晶体学，把「特异性」在原子层面长什么样摆了出来：甘露糖的每一个羟基都与蛋白形成氢键，磷酸基与 Arg111 形成氢键并与一个锰离子配位，His105 则与磷酸的一个氧原子形成氢键 —— 这是一整套互补接触，而不是孤零零的一个。接下来才是把「结合蛋白」变成「运输工具」的那一步：溶酶体内部的 pH 比高尔基体低，货物一到，受体就失去了对甘露糖-6-磷酸的亲和力，把它放进溶酶体基质里。一般认为，正是在较低 pH 下被质子化的 His105，导致了这次松手。",
      src: "A p.256–257",
      see: [{ id: "4-3-3", en: "how the mannose 6-phosphate tag gets put on in the first place", cn: "甘露糖-6-磷酸这个标签一开始是怎么被加上去的" }]
    },
    {
      link_en: "one puzzle has been left standing since the lectins were defined: high specificity paired with only moderate affinity",
      link_cn: "从定义凝集素那一步起，有个疑问一直悬着：高特异性，却只有中等亲和力",
      recall_en: "the leukocyte that rolls instead of sticking, four steps up — this is why it rolls",
      recall_cn: "上面那个「滚而不粘」的白细胞 —— 这一步说的就是它为什么会滚",
      en: "The two halves are engineered separately. Specificity comes from complementarity: in its carbohydrate-binding site a lectin has a subtle molecular complementarity that permits interaction only with its correct carbohydrate partner, and a divalent metal ion such as Ca2+ or Mn2+ is often part of that site — the manganese in the mannose 6-phosphate receptor is exactly this. Affinity is built rather than intrinsic: a single carbohydrate binding domain, or CBD, often binds its oligosaccharide only modestly, with a Kd in the micromolar to millimolar range, and the effective affinity is raised by lectin multivalency, one lectin molecule carrying several CBDs. Against a cluster of oligosaccharides, as a membrane surface presents, each one engages a different CBD; with several lectin receptors on the cell as well, the resulting avidity can be very high, enabling cooperative events such as cell attachment and rolling. **Weak-times-many is a different thing from strong: each P-selectin contact breaks under flow so the leukocyte keeps rolling, and there are enough contacts at once that it does not simply wash away.** Only weak-times-many gives a contact that is reversible and tunable.",
      cn: "这两半是分开造出来的。特异性来自互补：凝集素的糖结合位点具有精细的分子互补性，只允许它与正确的糖搭档发生相互作用，而这个位点里常常还嵌着一个二价金属离子，比如 Ca²⁺ 或 Mn²⁺ —— 上一步甘露糖-6-磷酸受体里的那个锰，就是这么回事。亲和力则是「搭出来」的，而不是天生的：单个 carbohydrate binding domain（糖结合结构域，CBD）与它的寡糖结合往往并不强，Kd 在微摩尔到毫摩尔量级；真正的有效亲和力靠 lectin multivalency（凝集素多价性）抬上来 —— 一个凝集素分子身上带着好几个 CBD。面对膜表面那种成簇排列的寡糖，每一条寡糖各自占住一个 CBD；再加上细胞上本来就有多个凝集素受体，最终的 avidity（亲合力） 可以非常高，足以支撑细胞黏附、滚动这类协同性事件。**「弱 × 多」和「强」是两回事：每一个 P-selectin 接触都会在血流冲刷下断开，所以白细胞一直在滚；而同时存在的接触又足够多，所以它不会被直接冲走。**只有「弱 × 多」才给得出一个可逆、可调的接触。",
      src: "A p.256–257"
    },
    {
      link_en: "one last general question: a sugar is covered in hydroxyls, so how does a protein grip one sugar rather than any other?",
      link_cn: "最后一个一般性问题：糖表面全是羟基，蛋白凭什么抓住这个糖而不是别的糖？",
      en: "**Many sugars have a more polar side and a less polar side. The more polar side hydrogen-bonds with the lectin, while the less polar side undergoes hydrophobic interactions with nonpolar amino acid residues, such as the indole ring of Trp.** The sum of those general contacts, laid on top of the specific complementarity and any bound divalent metal ion, is what produces the observed high-affinity, high-specificity binding of a lectin to its carbohydrate ligand.",
      cn: "**很多糖都有一面比较极性、一面比较不极性。极性较强的那一面与凝集素形成氢键，极性较弱的那一面则通过疏水作用与非极性氨基酸残基接触，比如 Trp 的吲哚环。**把这些一般性的接触加起来，再叠上前面说的特异性互补和那个结合着的二价金属离子，就得到了实际观测到的结果：凝集素对它的糖配体既亲和力高、又高度专一。",
      src: "A p.257"
    }
  ],
  terms: [
    { en: "oligosaccharide", cn: "寡糖",
      def_en: "A short chain of monosaccharide units joined end to end, also called a glycan when attached to a protein or lipid. Being branched, it can take far more distinguishable forms than a string of the same length: many billions of hexasaccharides against 6.4 x 10^7 hexapeptides and 4,096 hexanucleotides.",
      def_cn: "若干单糖单元首尾相连成的短链；接在蛋白或脂上时也叫聚糖。由于它是分支的，同样长度下能取的可区分形式远多于线性链：六糖有数十亿种，而六肽只有 6.4 x 10^7 种，六核苷酸只有 4,096 种。" },
    { en: "the sugar code", cn: "糖密码",
      def_en: "The idea that a glycan's structure is readable information. Each one presents a unique three-dimensional face, a word, read by proteins that meet it. Reality is smaller than the combinatorics because the biosynthetic enzymes and the supply of precursors restrict what is actually made.",
      def_cn: "「聚糖的结构本身就是可读信息」这个想法。每一条聚糖呈现一张独特的三维面孔，就是一个词，由遇到它的蛋白读取。实际造出来的比组合数少得多，因为生物合成酶和前体供应把可能性限制住了。" },
    { en: "lectin", cn: "凝集素",
      def_en: "A protein that binds carbohydrates with high specificity and moderate to high affinity. Lectins work in cell-cell recognition, signalling, adhesion and intracellular protein targeting. Plant ones are abundant in seeds, probably as deterrents to predators, and immobilised on a column they sort proteins by their glycan.",
      def_cn: "以高特异性、中等到高亲和力结合糖的蛋白质。它们参与细胞识别、信号、黏附以及细胞内蛋白定向。植物凝集素在种子里含量很高，可能是用来吓退捕食者的；固定在层析柱上时，它们能按聚糖来分选蛋白。" },
    { en: "asialoglycoprotein receptor", cn: "去唾液酸糖蛋白受体",
      def_en: "A hepatocyte plasma membrane lectin binding oligosaccharide chains whose galactose residues have lost their protecting terminal Neu5Ac, which triggers endocytosis and destruction. Ceruloplasmin is the worked case; the same logic retires aged erythrocytes, which vanish within hours once treated with neuraminidase.",
      def_cn: "肝细胞质膜上的一种凝集素，结合那些末端 Neu5Ac 保护已经丢失、半乳糖裸露出来的寡糖链，从而触发内吞与销毁。铜蓝蛋白是书上的实例；衰老红细胞的清除走的是同一条逻辑 —— 经 neuraminidase 处理的红细胞几小时内就消失了。" },
    { en: "selectin", cn: "选择素",
      def_en: "A family of plasma membrane lectins mediating cell-cell adhesion. P-selectin on endothelium slows a leukocyte into a roll; integrin then arrests it so it can cross the capillary wall. Several selectins read the tetrasaccharide sialyl Lewis x, which many carcinomas also display, promoting metastasis when shed.",
      def_cn: "一族介导细胞间黏附的质膜凝集素。内皮上的 P-selectin 把白细胞减速成滚动，随后 integrin 把它停住，使它得以穿过毛细血管壁。若干选择素读取的是四糖 sialyl Lewis x，而许多癌细胞也展示这个四糖，脱落进循环后会促进转移。" },
    { en: "HA and viral sialidase", cn: "HA 与病毒 sialidase",
      def_en: "Influenza enters by its HA (hemagglutinin) lectin binding host surface oligosaccharides, and leaves by a viral sialidase trimming terminal sialic acid so progeny particles are released and do not clump. Oseltamivir and zanamivir are sugar analogues competing for that sialidase; a His-to-Tyr change stops oseltamivir displacing a neighbouring Glu, giving resistance.",
      def_cn: "流感靠 HA（血凝素）这个凝集素结合宿主表面寡糖而进入，再靠病毒自带的 sialidase 剪掉末端唾液酸而离开，使子代颗粒得以释放且不互相聚集。oseltamivir 和 zanamivir 是糖类似物，竞争这个酶的结合位点；一个 His→Tyr 的改变使 oseltamivir 无法再推开旁边的 Glu，于是产生耐药。" },
    { en: "mannose 6-phosphate receptor", cn: "甘露糖-6-磷酸受体",
      def_en: "The lectin that reads the lysosomal zip code. Every mannose hydroxyl hydrogen-bonds to the protein, the phosphate to Arg111 and to a manganese ion, His105 to a phosphate oxygen. At the lysosome's lower pH, protonated His105 is thought to make the receptor let its cargo go.",
      def_cn: "读取「送往溶酶体」这个邮编的凝集素。甘露糖的每个羟基都与蛋白形成氢键，磷酸与 Arg111 及一个锰离子结合，His105 与磷酸的一个氧成氢键。在溶酶体较低的 pH 下，被质子化的 His105 被认为就是让受体松手的那个残基。" },
    { en: "multivalency", cn: "多价性",
      def_en: "One lectin molecule carrying several carbohydrate binding domains, so that a cluster of oligosaccharides is engaged many times at once. A single domain binds only modestly, with micromolar to millimolar Kd; many such contacts together give a high avidity that is still reversible, which is what lets a leukocyte roll rather than stick.",
      def_cn: "一个凝集素分子身上带着好几个糖结合结构域，因而能同时多次抓住一簇寡糖。单个结构域的结合并不强，Kd 在微摩尔到毫摩尔量级；许多这样的接触加在一起给出很高的 avidity，同时仍然可逆 —— 这正是白细胞能滚动而不是粘死的原因。" },
    { en: "avidity", cn: "亲合力",
      def_en: "The total strength of a multivalent interaction, as against the affinity of any single binding site. High avidity built from many weak, individually breakable contacts is what makes cooperative and reversible events such as cell attachment and rolling possible.",
      def_cn: "一个多价相互作用的总强度，区别于任何单个结合位点的亲和力。由许多单独看很弱、随时可断的接触堆出来的高 avidity，正是细胞黏附和滚动这类协同而又可逆的事件所依赖的东西。" }
  ]
};

/* ===================================================================== L-8-3-1 */
window.BIOLITE_SPINE["L-8-3-1"] = {
  assumed: ["DNA", "RNA", "double helix", "base", "base pair", "nucleotide", "gene",
            "protein", "enzyme", "cell", "amino acid", "hydrogen bond", "genome",
            "chromosome", "mutation", "DNA polymerase", "phosphodiester bond",
            "purine", "pyrimidine", "transcription", "replication", "base stacking"],
  nodeTitle_en: "Nucleic acid chemistry",
  nodeTitle_cn: "核酸的化学",
  title_en: "What melting does not break, what slow chemistry does break, and what both make possible",
  title_cn: "熔解破坏不了什么、缓慢的化学反应又确实破坏了什么，以及这两件事各自成全了什么",
  steps: [
    {
      recall_en: "base stacking and the hydrogen bonds between paired bases, from the double-helix spine — this step is what happens when both are removed",
      recall_cn: "回到双螺旋那条主线里的碱基堆积和配对碱基之间的氢键 —— 这一步说的就是把这两样同时撤掉会发生什么",
      en: "Native DNA in solution at neutral pH and room temperature is highly viscous; take the pH to an extreme, or the temperature above 80 °C, and the viscosity falls sharply, which says something physical has changed. What changed: **the hydrogen bonds between paired bases and the base-stacking interactions are disrupted, and the double helix unwinds into two separate single strands along part or all of its length.** No covalent bonds in the DNA are broken. The sugar-phosphate backbone of each strand is exactly as it was; the two strands have simply stopped holding each other. That is denaturation.",
      cn: "中性 pH、室温下溶液里的天然 DNA 黏度很高；把 pH 推到极端，或者把温度升到 80 °C 以上，黏度就急剧下降 —— 这说明有某种物理变化发生了。变的是什么：**配对碱基之间的氢键、以及碱基堆积作用被破坏了，双螺旋在一部分或全部长度上解开，变成两条分开的单链。**DNA 里没有任何一个共价键被打断。每条链的糖-磷酸骨架跟原来一模一样，只是两条链不再互相拉着了。这就是 denaturation（变性）。",
      src: "A p.279, figure 8-26"
    },
    {
      link_en: "and because nothing was cut, the whole thing runs backwards",
      link_cn: "而正因为什么都没被切断，整件事可以倒着再走一遍",
      en: "Put the conditions back to normal and the two strands find each other again, in two phases with very different speeds. First a slow step, in which strands collide at random until a short complementary segment happens to pair; then a much faster zippering step, as the remaining bases fall into register along the whole length. This is renaturation, also called annealing. **It is possible only because denaturation cut nothing — every technology later in this chain is an application of that one fact.**",
      cn: "把条件恢复正常，两条链会重新找到彼此，分成速度差别很大的两个阶段。先是一个慢步骤：两条链随机碰撞，直到碰巧有一小段互补序列配上；随后是快得多的「拉拉链」步骤，其余碱基沿着全长依次归位。这就是 renaturation（复性），也叫 annealing（退火）。**它之所以可能，唯一的原因就是变性并没有切断任何东西 —— 这条主线后面的每一项技术，都是这一个事实的应用。**",
      src: "A p.279"
    },
    {
      link_en: "before using it, you need a way to see it happening",
      link_cn: "要用它，先得有办法看见它正在发生",
      en: "An intact nucleic acid absorbs less ultraviolet light than a solution of the same concentration of free nucleotides, because its bases are stacked close together, and pairing two complementary strands decreases the absorption further still. That is the hypochromic effect. Denaturation does the reverse and absorption increases, which is the hyperchromic effect. So **the double-stranded to single-stranded transition is followed simply by monitoring ultraviolet absorption at 260 nanometres while temperature or pH is changed — a direct, continuous readout that assumes nothing about mechanism.**",
      cn: "一条完整的核酸吸收的紫外光，比同样浓度的游离核苷酸溶液更少，原因是它的碱基紧密堆叠在一起；而两条互补链配上对之后，吸收还要再低一些。这叫 hypochromic effect（减色效应）。变性则反过来，吸收上升，这叫 hyperchromic effect（增色效应）。于是**「双链变单链」这个转变，只要在改变温度或 pH 的同时监测 260 纳米处的紫外吸收就能跟踪 —— 一个直接、连续的读数，不需要对机制作任何假设。**",
      src: "A p.279"
    },
    {
      link_en: "with a readout you get a number, and the number turns out to report base composition",
      link_cn: "有了读数就有了一个数字，而这个数字居然能报出碱基组成",
      en: "Each species of DNA has a characteristic melting point, Tm: the temperature at which half of it is present as separated single strands. The higher the G+C content of a DNA molecule, the higher its melting temperature, chiefly because G-C pairs contribute more to base stacking than A-T pairs do. Measured at fixed pH and ionic strength, Tm therefore estimates base composition. The arithmetic is worth doing once. Species X has 32% adenine, so 32% thymine, leaving 36% G+C split 18/18. Species Y has 17% adenine, so 17% thymine, leaving 66% G+C split 33/33. **One of the two came from a 64 °C hot spring, and it is species Y: higher G+C, higher melting temperature, DNA still double-stranded at a temperature that would melt the other.**",
      cn: "每一种 DNA 都有它特征性的熔点 Tm：在这个温度下，一半的 DNA 已经变成分开的单链。一个 DNA 分子的 G+C 含量越高，熔解温度越高，主要原因是 G-C 对对碱基堆积的贡献大于 A-T 对。因此在固定 pH 和离子强度下测得的 Tm，可以用来估计碱基组成。这笔账值得亲手算一遍。物种 X 有 32% 腺嘌呤，于是也有 32% 胸腺嘧啶，剩下 36% 是 G+C，各占 18%。物种 Y 有 17% 腺嘌呤，于是也有 17% 胸腺嘧啶，剩下 66% 是 G+C，各占 33%。**两者之中有一个来自 64 °C 的温泉，那就是物种 Y：G+C 更高、熔解温度更高，在足以熔化另一个物种 DNA 的温度下，它的 DNA 仍然是双链。**",
      src: "A p.279–280, Worked Example 8-1"
    },
    {
      link_en: "and the same difference shows up as a picture, and then inside a living cell",
      link_cn: "同样这个差别，先变成一张照片，然后出现在活细胞里",
      en: "Under carefully controlled conditions, **regions rich in A-T base pairs denature first while most of the molecule stays double-stranded; those locally denatured regions are called bubbles, and fixing the DNA to prevent renaturation makes them directly visible by electron microscopy.** This is not confined to a test tube. In vivo, strand separation during DNA replication and transcription is often initiated at sites that are similarly rich in A-T pairs — the same weaker stacking that melts first in a cuvette is what makes those sites the easiest place for the cell's own machinery to start unwinding.",
      cn: "在精心控制的条件下，**富含 A-T 碱基对的区域会先变性，而分子的大部分仍然保持双链；这些局部变性的区域叫 bubble（泡），把 DNA 固定住以防复性之后，用电子显微镜可以直接看见它们。**这件事并不只发生在试管里。在体内，DNA 复制和转录时的链分离也常常从同样富含 A-T 的位点开始 —— 在比色皿里最先熔化的那种较弱堆积，正是让细胞自己的机器最容易在那里起手解旋的原因。",
      src: "A p.280, figure 8-28"
    },
    {
      link_en: "one comparison before leaving melting behind",
      link_cn: "在离开熔解这个话题之前，先做一个比较",
      en: "Duplexes of two RNA strands can be denatured too, and so can an RNA-DNA hybrid — a duplex with one strand of each. **At neutral pH, melting a double-helical RNA requires a temperature at least several degrees higher than melting a DNA duplex of comparable sequence, and an RNA-DNA hybrid sits between the two in stability.**",
      cn: "两条 RNA 链构成的双链也能被变性，一条 RNA 配一条 DNA 组成的 RNA-DNA hybrid（杂合双链） 同样可以。**在中性 pH 下，熔化一段双螺旋 RNA 所需的温度，比熔化序列相当的 DNA 双链至少高好几度；而 RNA-DNA 杂合链的稳定性介于两者之间。**",
      src: "A p.280",
      openQuestion_en: "The physical basis for these differences in thermal stability is not known. Carry it exactly like that rather than dressed in an invented mechanism.",
      openQuestion_cn: "这些热稳定性差别的物理成因目前并不清楚。就这么原样记住，不要给它套一个编出来的机制。"
    },
    {
      link_en: "melting breaks no covalent bond. Slow chemistry does, all day, every day",
      link_cn: "熔解打不断共价键。而缓慢的化学反应打得断 —— 每天，一整天",
      en: "Bases spontaneously lose their exocyclic amino groups, a reaction called deamination. Cytosine deaminates to uracil in about 1 of every 10^7 cytidine residues in 24 hours, which comes to roughly 100 spontaneous events per day in a mammalian cell; adenine and guanine deaminate at about a hundredth of that rate. **This slow reaction is almost certainly why DNA uses thymine rather than uracil.** Uracil is what cytosine deamination produces, and because DNA normally contains no uracil at all, any uracil appearing in it is instantly recognisable as damage and is removed by a repair system. Had DNA used uracil as a normal base from the start, a deamination-generated uracil would be invisible against the background, and G-C pairs would slowly and permanently convert to A-U pairs.",
      cn: "碱基会自发地失去环外氨基，这个反应叫 deamination（脱氨）。胞嘧啶脱氨变成 uracil（尿嘧啶），速率约为 24 小时内每 10⁷ 个胞苷残基有 1 个，折算下来是哺乳动物细胞里每天约 100 次自发事件；腺嘌呤和鸟嘌呤的脱氨速率大约只有它的百分之一。**这个缓慢的反应几乎肯定就是 DNA 用胸腺嘧啶而不用尿嘧啶的原因。**胞嘧啶脱氨的产物正是尿嘧啶，而由于 DNA 里本来就不含尿嘧啶，任何出现在 DNA 中的尿嘧啶都立刻可以被认定为损伤，并被修复系统清除掉。假如 DNA 从一开始就把尿嘧啶当作正常碱基，那么脱氨产生的尿嘧啶就会淹没在背景里看不出来，G-C 对会缓慢而且永久地变成 A-U 对。",
      src: "A p.280–281"
    },
    {
      link_en: "a second reaction removes the base altogether",
      link_cn: "第二个反应干脆把碱基整个拿掉",
      en: "The N-β-glycosyl bond joining a base to its pentose sugar is hydrolysed spontaneously, releasing the base and leaving a sugar with nothing attached — an abasic site, also called an AP site, for apurinic or apyrimidinic. **Purines are lost far faster than pyrimidines: as many as 1 in 10^5 purines, about 10,000 per mammalian cell, are lost every 24 hours under ordinary cellular conditions.** The same chemistry can be driven deliberately: incubating DNA at pH 3 selectively removes purine bases and yields a derivative called apurinic acid.",
      cn: "把碱基与它的戊糖连起来的 N-β-糖苷键会自发水解，碱基被放出去，留下一个什么都没接的糖 —— 这叫 abasic site（无碱基位点），也叫 AP site（apurinic/apyrimidinic，即脱嘌呤/脱嘧啶位点）。**嘌呤丢失的速度远快于嘧啶：在普通细胞条件下，每 24 小时约有十万分之一的嘌呤丢失，相当于哺乳动物每个细胞约 10,000 个。**同样的化学可以被有意加速：把 DNA 在 pH 3 下保温，会选择性地把嘌呤碱基脱下来，得到一种叫 apurinic acid（脱嘌呤酸） 的衍生物。",
      src: "A p.281, figure 8-29"
    },
    {
      link_en: "and two kinds of radiation, doing two different kinds of harm",
      link_cn: "还有两种辐射，造成的是两类不同的伤害",
      en: "Ultraviolet light makes two adjacent pyrimidine bases on the same strand condense into a cyclobutane pyrimidine dimer — most often between two thymidines — and a second lesion called the 6-4 photoproduct also forms. The observable consequence is structural: **a cyclobutane pyrimidine dimer puts a bend, or kink, into the DNA.** Near-ultraviolet radiation, 200 to 400 nm, is a real part of the solar spectrum and does this in bacterial DNA and in human skin cells. Ionising radiation — x-rays and gamma rays — does something cruder: ring opening, base fragmentation, and breaks in the covalent backbone itself. Between them, ultraviolet and ionising radiation are estimated to cause about 10% of all environmentally caused DNA damage.",
      cn: "紫外光会让同一条链上相邻的两个嘧啶碱基缩合成一个 cyclobutane pyrimidine dimer（环丁烷嘧啶二聚体） —— 最常见的是两个胸腺嘧啶之间 —— 同时还会生成第二种损伤，叫 6-4 photoproduct（6-4 光产物）。可观察到的后果是结构性的：**一个环丁烷嘧啶二聚体会把 DNA 弯出一个折角（kink）。**近紫外辐射（200–400 nm）本来就是太阳光谱的一部分，它在细菌 DNA 和人的皮肤细胞里都会造成这种损伤。电离辐射 —— X 射线和 γ 射线 —— 干的事更粗暴：开环、碱基碎裂，以及共价骨架本身的断裂。紫外与电离辐射加在一起，估计造成了全部环境来源 DNA 损伤的约 10%。",
      src: "A p.281–282, figure 8-30"
    },
    {
      link_en: "chemicals do it too, and one class is in your food on purpose",
      link_cn: "化学品也一样，而且其中一类是被有意加进食物里的",
      en: "Two classes of environmental chemical damage DNA without any enzyme. Deaminating agents accelerate the deamination reaction above — chiefly nitrous acid, formed from precursors such as nitrosamines, nitrites and nitrates, together with bisulfite. Both nitrites and bisulfite are used as food preservatives, and the stated position is worth quoting rather than editorialising: at the small amounts used they do not measurably increase cancer risk, and the risk from food spoilage if they were withdrawn would be greater. Alkylating agents are the second class — dimethyl sulfate is the highly reactive example, and it methylates guanine to O6-methylguanine. **The consequence is one you can check on any base-pairing diagram: O6-methylguanine cannot base-pair with cytosine.**",
      cn: "有两类环境化学品能在没有任何酶参与的情况下损伤 DNA。脱氨剂加速的正是上面那个脱氨反应 —— 主要是亚硝酸，它由亚硝胺、亚硝酸盐、硝酸盐这类前体生成，此外还有亚硫酸氢盐（bisulfite）。亚硝酸盐和亚硫酸氢盐都被用作食品防腐剂，而书上的表态值得原样引用，不要加工：在实际使用的微小剂量下，它们并不会可测量地提高患癌风险，而一旦停用，食物腐败带来的风险反倒更大。第二类是烷化剂 —— 典型例子是活性极高的 dimethyl sulfate（硫酸二甲酯），它把鸟嘌呤甲基化成 O6-methylguanine（O6-甲基鸟嘌呤）。**后果是任何一张碱基配对图上都能自己核对的一件事：O6-甲基鸟嘌呤没法与胞嘧啶配对。**",
      src: "A p.282, figure 8-31"
    },
    {
      link_en: "and the largest source of all is the cell's own metabolism",
      link_cn: "而所有来源里最大的那一个，是细胞自己的代谢",
      en: "The most important source of mutagenic alterations in DNA is oxidative damage. Reactive oxygen species — hydrogen peroxide, hydroxyl radicals and superoxide radicals — arise during irradiation and, far more commonly, as an ordinary byproduct of aerobic metabolism, and hydroxyl radicals are responsible for most of the oxidative damage to DNA. Cells run an elaborate defence of named enzymes, catalase and superoxide dismutase, which convert these species to harmless products, and a fraction escapes anyway: every day the DNA of each human cell is subjected to thousands of damaging oxidative reactions. Put all of this chain's damage chemistry together and one conclusion follows. **DNA is the only macromolecule that has the benefit of extensive biochemical repair systems** — the reason is not that DNA is chemically tougher than RNA or protein, it is that DNA is the only one whose continuous repair is worth the metabolic cost.",
      cn: "DNA 中致突变改变的最重要来源是氧化损伤。活性氧 —— 过氧化氢、羟自由基、超氧自由基 —— 在受到辐射时产生，而更常见的情况是它们本来就是有氧代谢的普通副产物；其中 羟自由基造成了 DNA 氧化损伤的大部分。细胞备有一整套点名的防御酶：catalase（过氧化氢酶） 和 superoxide dismutase（超氧化物歧化酶），把这些物种转化成无害产物，但总有一部分会漏过去：人的每一个细胞，其 DNA 每天都要承受数千次破坏性的氧化反应。把这条主线上的全部损伤化学放在一起，可以得出一个结论。**DNA 是唯一享有庞大生化修复系统的大分子** —— 原因并不在于 DNA 在化学上比 RNA 或蛋白更结实，而在于只有 DNA 值得为持续修复付出那笔代谢开销。",
      src: "A p.283",
      see: [{ id: "L-25-2-1", en: "the four repair systems that clean all of this up", cn: "把上面这些损伤统统收拾掉的那四套修复系统" }]
    },
    {
      link_en: "not every methyl group on DNA is damage. Some are put there on purpose, and they carry information",
      link_cn: "DNA 上的甲基并非都是损伤。有些是被有意加上去的，而且它们携带信息",
      en: "Certain bases are methylated enzymatically, adenine and cytosine more often than guanine and thymine, and all known DNA methylases use S-adenosylmethionine, abbreviated SAM, as the methyl group donor. E. coli runs two systems on that chemistry. **A restriction-modification system marks the cell's own DNA with methyl groups, so that unmarked foreign DNA can be identified and destroyed** — a way of telling self from non-self written in methyl groups. The Dam methylase, for DNA adenine methylation, methylates the adenosine within every 5'-GATC-3' sequence to N6-methyladenosine shortly after replication, which lets the cell tell a newly made strand from the older, already-methylated one. In eukaryotic cells about 5% of cytidine residues are methylated to 5-methylcytidine, most often at CpG sequences and symmetrically on both strands; how much of that methylation a given region carries varies across a large eukaryotic DNA molecule, and that variation affects DNA metabolism and gene expression.",
      cn: "某些碱基会被酶促甲基化，腺嘌呤和胞嘧啶比鸟嘌呤和胸腺嘧啶更常见，而且所有已知的 DNA 甲基化酶都用 S-adenosylmethionine（S-腺苷甲硫氨酸，缩写 SAM）作甲基供体。大肠杆菌基于这套化学跑了两个系统。**restriction-modification system（限制-修饰系统）用甲基把细胞自己的 DNA 标记起来，于是没有标记的外源 DNA 就能被认出来并被摧毁** —— 一种用甲基写成的「区分自我与非我」的办法。Dam methylase（DNA adenine methylation，DNA 腺嘌呤甲基化酶）在复制后不久，把每一个 5'-GATC-3' 序列中的腺苷甲基化成 N6-甲基腺嘌呤，这让细胞能把刚造好的新链与已经甲基化的旧链区分开。在真核细胞里，约有 5% 的胞苷残基被甲基化成 5-甲基胞苷，最常发生在 CpG 序列上，而且在两条链上对称出现；一个大真核 DNA 分子上，不同区域携带的甲基化程度各不相同，而这种差异影响 DNA 代谢和基因表达。",
      src: "A p.283",
      see: [{ id: "L-28-3-1", en: "what CpG methylation does to a eukaryotic gene", cn: "CpG 甲基化对一个真核基因究竟做了什么" }]
    },
    {
      link_en: "that is the chemistry. Everything from here is what people built on it, starting with the raw material",
      link_cn: "化学讲完了。从这里开始全是人们在它上面造出来的东西，先从原料说起",
      en: "Rapid, accurate synthesis of short oligonucleotides — short single strands of DNA of a sequence you choose — was pioneered by H. Gobind Khorana in the 1970s, and refinements by Robert Letsinger and Marvin Caruthers produced the chemistry in widest use today, the phosphoramidite method. The strand is grown on a solid silica support, one nucleotide per cycle, and the cleverness is that the process can be watched. The growing chain's 5' end carries an acid-labile protecting group, DMT, which is coloured, so stripping it off with an acid wash can be followed spectrophotometrically — the machine sees each cycle succeed. One cycle is: remove the coloured DMT cap, couple the next protected nucleotide, oxidise the new linkage, wash the excess reagent away. At the end the remaining protecting groups come off and the finished oligonucleotide is cleaved from the support. **Losses compound across cycles, so routine synthesis reaches 70 to 80 nucleotides reliably, and that ceiling is why every method below uses short pieces of made-to-order DNA rather than long ones.**",
      cn: "快速而准确地合成短 oligonucleotide（寡核苷酸，也就是你自己指定序列的短单链 DNA），由 H. Gobind Khorana 在 1970 年代开创，随后 Robert Letsinger 与 Marvin Caruthers 的改良给出了今天最通用的化学方法：phosphoramidite method（亚磷酰胺法）。链在固相二氧化硅载体上生长，每个循环接一个核苷酸，而巧妙之处在于整个过程可以被看见。正在生长的链的 5' 端带着一个酸不稳定的保护基 DMT，这个基团是有颜色的，所以用酸洗把它脱掉的过程可以用分光光度法跟踪 —— 仪器能看见每一轮是否成功。一个循环是：脱掉带色的 DMT 帽、偶联下一个被保护的核苷酸、氧化新形成的连接、洗掉过量试剂。最后再脱掉剩余的保护基，把做好的寡核苷酸从载体上切下来。**误差会随循环数累积，所以常规合成可靠地做到 70 到 80 个核苷酸；正是这个上限，使得下面每一种方法用的都是短的定制 DNA，而不是长的。**",
      src: "A p.283–284, figure 8-32"
    },
    {
      link_en: "give those short pieces to a polymerase and melting-and-reannealing becomes a machine",
      link_cn: "把这些短片段交给聚合酶，「熔解再复性」就变成了一台机器",
      recall_en: "the denature-and-anneal cycle from the first two steps, now driven deliberately, over and over",
      recall_cn: "就是最前面两步里的「变性—复性」，现在被有意地一遍遍驱动",
      en: "The polymerase chain reaction, conceived by Kary Mullis in 1983, needs four components: the DNA sample; a pair of synthetic oligonucleotide primers, complementary to opposite strands and flanking the target, with their 5' ends defining the ends of the amplified segment and their 3' ends pointing toward each other across it; a pool of the four dNTPs; and a DNA polymerase. Three steps repeat: heat to denature the template into single strands, cool to let the primers — deliberately present in excess — anneal before the two long strands can find each other again, and let DNA polymerase extend from each primer across the target. The enzyme that makes this automatable is Taq polymerase, isolated from Thermus aquaticus, a bacterium living in hot springs near the boiling point of water; being heat-stable it survives every heating step and never needs replenishing, so the whole cycle runs unattended in a benchtop thermocycler. **Each cycle doubles the number of target copies, so 20 cycles amplify it more than a millionfold and 30 cycles more than a billionfold, which is why one DNA molecule in almost any kind of sample can be detected and amplified.** Hence undegraded DNA cloned from samples more than 40,000 years old, mummified humans and the woolly mammoth among them, viral infections and some cancers detected before symptoms appear, and prenatal diagnosis of genetic disease.",
      cn: "polymerase chain reaction（聚合酶链式反应，PCR） 由 Kary Mullis 在 1983 年构想出来，需要四样东西：DNA 样品；一对合成的寡核苷酸 primer（引物），分别与两条链互补、夹住目标区段，它们的 5' 端界定扩增片段的两端、3' 端隔着目标相向而对；四种 dNTP 的混合池；以及一个 DNA 聚合酶。三个步骤反复循环：加热使模板变性成单链；降温让刻意过量加入的引物先复性上去，抢在两条长链重新找到彼此之前；再让 DNA 聚合酶从每个引物出发、沿目标延伸。使这一切可以自动化的酶是 Taq polymerase，分离自 Thermus aquaticus —— 一种生活在接近沸点的温泉里的细菌；由于它耐热，每一次加热步骤它都能挺过来、无需补加，于是整个循环可以在台式 thermocycler（热循环仪）里无人值守地跑。**每一轮循环使目标拷贝数翻倍，所以 20 轮扩增一百万倍以上，30 轮扩增十亿倍以上 —— 这就是为什么几乎任何样品中的单个 DNA 分子都能被检出并扩增出来。**由此才有了：从四万年以上的样品（干尸、猛犸象）里克隆出未降解的 DNA，在症状出现之前查出病毒感染和某些癌症，以及遗传病的产前诊断。",
      src: "A p.283–286, figure 8-33",
      see: [{ id: "L-9-1-1", en: "PCR put to work in cloning, plus its RNA and quantitative variants", cn: "PCR 在克隆里的实际用法，以及它面向 RNA 和定量的两个变体" }]
    },
    {
      link_en: "PCR amplifies a length. Sometimes the length itself is the answer",
      link_cn: "PCR 扩增出的是一个长度。而有时候，这个长度本身就是答案",
      en: "DNA genotyping, also called DNA fingerprinting or profiling, was first described by Alec Jeffreys in 1985, and it rests on sequence polymorphisms averaging 1 difference per 1,000 bp between individuals. Forensic work targets short tandem repeats, or STRs: typically a 4 bp motif repeated 4 to 50 times, so 16 to 200 bp long. More than 20,000 tetranucleotide STR loci are characterised in the human genome, together about 3% of all human DNA. **PCR amplifies across an STR, and the length of the product reveals the repeat number; because one chromosome comes from each parent, most people carry two different lengths at each locus.** A commercial multi-locus kit run by capillary electrophoresis with colour-coded dyes gives a profile essentially unique to one individual from less than 1 nanogram of degraded DNA — a single hair follicle, a drop of blood — with a chance of misidentification below 1 in 10^18 when a good genotype is obtained. The amelogenin gene, differently sized on X and Y, is genotyped alongside the STRs to reveal the donor's sex. CODIS, the US standard database established in 1998 with 13 loci and expanded in 2017 to 20 core loci, held more than 18 million genotypes and had assisted nearly 500,000 investigations by mid-2019; the same method produced many hundreds of postconviction exonerations, and in 1996 confirmed the identity of the bones of the last Russian czar and his family.",
      cn: "DNA genotyping（DNA 基因分型），也叫 DNA 指纹或 DNA 图谱分析，由 Alec Jeffreys 于 1985 年首次描述，其基础是个体之间平均每 1,000 bp 有 1 处差异的序列多态性。法医工作瞄准的是 short tandem repeat（短串联重复，STR）：典型情况是一个 4 bp 的基序重复 4 到 50 次，因而长 16 到 200 bp。人类基因组中已鉴定出两万多个四核苷酸 STR 位点，合计约占全部人类 DNA 的 3%。**PCR 跨过一个 STR 做扩增，产物的长度就报出了重复次数；由于两条染色体分别来自父母，多数人在每个位点上带着两个不同的长度。**用商品化的多位点试剂盒、以毛细管电泳配色标染料跑出来，只要不到 1 纳克的降解 DNA（一个毛囊、一滴血）就能给出一份基本上属于某一个体的图谱，而在获得良好基因型的前提下，误认的概率低于 10¹⁸ 分之一。amelogenin（釉原蛋白） 基因在 X 和 Y 上长度不同，因此和 STR 一起分型，用来判定供体性别。CODIS 是美国的标准数据库，1998 年建立时含 13 个位点，2017 年扩展到 20 个核心位点；到 2019 年年中已收录超过 1,800 万份基因型、协助了近 50 万起调查。同一套方法带来了数以百计的定罪后平反，并在 1996 年确认了末代俄国沙皇及其家人遗骨的身份。",
      src: "A p.288, box 8-1"
    },
    {
      link_en: "amplifying a segment is one thing. Reading it letter by letter is another, and it turns on one missing atom",
      link_cn: "扩出一段是一回事，把它一个字母一个字母读出来是另一回事 —— 而关键在于少了一个原子",
      en: "Before 1977, sequencing even 5 to 10 nucleotides was laborious; two methods that year changed it, and Frederick Sanger's dideoxy chain-termination sequencing proved both easier and more accurate. A dideoxynucleoside triphosphate, or ddNTP, carries -H rather than -OH at the 3' position of its ribose ring, and DNA polymerase needs that 3'-hydroxyl to add the next nucleotide — so once a ddNTP goes in, the strand cannot be extended further. Mix a small amount of one ddNTP, say ddCTP, into a large excess of ordinary dCTP: most strands keep growing, but some terminate at random at every position where a C belongs, producing a mixture of fragments all ending exactly there. Run four such reactions, one per base, separate the labelled fragments by electrophoresis, and **because shorter fragments migrate faster the gel is read bottom to top in the 5' to 3' direction — and what it gives is the sequence of the strand complementary to the one being analysed.** Automation came from labelling each of the four ddNTPs with a different-coloured fluorescent tag, so all four run in one reaction and one lane while a laser reads the colour of each fragment as it passes and feeds the sequence straight to a computer. That is the machine that sequenced all 3.2 x 10^9 bp of human DNA in the human genome project, over nearly a decade and dozens of laboratories, and it is still used for routine analysis of short segments today.",
      cn: "1977 年以前，哪怕测 5 到 10 个核苷酸都很吃力；那一年出现的两种方法改变了局面，其中 Frederick Sanger 的 dideoxy chain-termination sequencing（双脱氧链终止测序） 被证明既更简便也更准确。dideoxynucleoside triphosphate（双脱氧核苷三磷酸，ddNTP）的核糖 3' 位上是 -H，而不是 -OH，而 DNA 聚合酶必须有这个 3'-羟基才能接上下一个核苷酸 —— 所以一旦掺进一个 ddNTP，这条链就再也延伸不下去了。往大量普通 dCTP 里掺入少量某一种 ddNTP（比如 ddCTP）：多数链继续生长，但总有一些在每一个本该是 C 的位置上随机终止，于是得到一堆恰好都终止在 C 位的片段。做四个这样的反应（每种碱基一个），把带标记的片段用电泳分开，**由于较短的片段跑得更快，凝胶要从下往上读，方向就是 5' 到 3' —— 而读出来的是被分析那条链的互补链序列。**自动化来自给四种 ddNTP 各贴一个不同颜色的荧光标记，于是四者可以在同一个反应、同一条泳道里跑，激光读出每个片段经过时的颜色，直接把序列送进计算机。正是这台机器，在人类基因组计划中测完了全部 3.2 x 10⁹ bp 的人类 DNA，前后历时近十年、动用了几十个实验室；今天它仍用于短片段的常规分析。",
      src: "A p.286–287 & 290, figures 8-34 and 8-35"
    },
    {
      link_en: "and then the same job was rebuilt around two opposite trade-offs",
      link_cn: "然后同一件事被重做了两遍，用的是两个正好相反的取舍",
      en: "Next-generation methods shear DNA into fragments, immobilise them on a solid support and sequence very many of them in parallel, tracked by fluorescent dye and optical detection. Illumina's reversible terminator method ligates known adapters onto fragments a few hundred base pairs long, clusters them on a flow cell by in-place PCR, then extends one fluorescently labelled, chemically blocked nucleotide per cycle: image, remove the label and the block, repeat. Reads are short, typically 100 to 300 nucleotides, and accuracy is high, with error rates as low as 0.1%. Pacific Biosciences' SMRT method — single-molecule real-time — takes the opposite trade: one DNA polymerase sits at the bottom of each of 150,000 nanoscale pores about 70 nm across, narrower than the wavelength of the light used so illumination stays confined to the bottom 20 to 30 nm, and it copies a circularised template continuously, emitting one light pulse per nucleotide incorporated. **Reads average 30,000 to 40,000 bp, long enough to span repetitive regions and reveal structural rearrangements that short reads cannot**, at lower throughput, higher cost and a much higher error rate of about 10 to 15% — which the circular template itself corrects, because the same molecule is read over and over and a consensus of those passes removes most of the error.",
      cn: "新一代测序方法把 DNA 打断成片段，固定在固相载体上，靠荧光染料和光学检测同时并行地测大量片段。Illumina 的 reversible terminator（可逆终止子）方法把已知的接头连到几百个碱基对长的片段上，用原位 PCR 在流动池上把它们成簇扩增，然后每个循环只延伸一个带荧光标记、且化学封闭的核苷酸：拍照、脱掉标记和封闭基团、再来一轮。读长很短，通常 100 到 300 个核苷酸，但准确度高，错误率可低至 0.1%。Pacific Biosciences 的 SMRT 方法（single-molecule real-time，单分子实时测序）做的是相反的取舍：15 万个纳米孔中，每个孔底坐着一个 DNA 聚合酶，孔径约 70 nm，比所用光的波长还小，因此照明被限制在孔底 20 到 30 nm 之内；聚合酶连续复制一个环化的模板，每掺入一个核苷酸就发出一次光脉冲。**读长平均 30,000 到 40,000 bp，长到足以跨过重复区、并揭示短读长看不出来的结构重排**；代价是通量更低、成本更高、错误率高达约 10 到 15% —— 而这个错误率正是被环化模板本身纠正的：同一个分子被反复读过很多遍，取这些读次的共识序列就把大部分错误消掉了。",
      src: "A p.290–293, figures 8-36 and 8-37"
    },
    {
      link_en: "however the reads were produced, none of them covers a genome. Putting them together is the same chemistry again",
      link_cn: "不管这些读段是怎么产生的，没有任何一条覆盖得了一个基因组。把它们拼起来，靠的还是同一套化学",
      recall_en: "the slow random-collision step of renaturation, from the second step of this chain — finding a short matching stretch is exactly what an assembler does",
      recall_cn: "回到这条主线第二步里复性的那个「随机碰撞」慢步骤 —— 找到一小段能对上的序列，正是组装程序在做的事",
      en: "The number of times a given nucleotide is sequenced on average is the sequencing depth, also called coverage, and a typical target is 100x to 1,000x — high enough that most sequencing errors are caught and thrown out by comparison between reads that cover the same base. Computer programs then align overlapping fragments end to end, tracing the sequence from one read into the next, and assemble long contiguous sequences called contigs, some spanning millions of base pairs in a successful project. The whole chain closes here: **telling two short overlapping sequences apart and joining them where they match is the same recognition, run at genome scale, that two single strands perform on each other when a melted solution is allowed to cool.**",
      cn: "一个给定核苷酸平均被测到多少次，叫 sequencing depth（测序深度），也叫 coverage（覆盖度），常见的目标是 100x 到 1,000x —— 高到足以让覆盖同一个碱基的多条读段互相比对，把大部分测序错误挑出来扔掉。随后由计算机程序把有重叠的片段首尾对齐，从一条读段追到下一条，拼装出长的连续序列，称为 contig（重叠群）；在顺利的项目里，有些 contig 能跨越数百万碱基对。整条主线在这里合拢：**分辨两段有重叠的短序列、并在它们相符处把它们接起来，与一杯熔解后的溶液冷却时两条单链彼此完成的识别，是同一件事，只是放大到了基因组的尺度。**",
      src: "A p.293, figure 8-38"
    }
  ],
  terms: [
    { en: "denaturation", cn: "变性",
      def_en: "Unwinding of the double helix into two separate single strands under heat or extreme pH. Only the hydrogen bonds between paired bases and the base-stacking interactions are disrupted; no covalent bond is broken, and each backbone survives intact.",
      def_cn: "在受热或极端 pH 下，双螺旋解开成两条分离的单链。被破坏的只有配对碱基之间的氢键和碱基堆积作用；没有任何共价键断裂，每条链的骨架都完好无损。" },
    { en: "renaturation", cn: "复性",
      def_en: "Two separated complementary strands re-forming a duplex once conditions return to normal — first a slow step of random collision until a short complementary segment pairs, then a much faster zippering as the rest falls into register. Also called annealing, and possible only because nothing was ever cut.",
      def_cn: "条件恢复正常后，两条分开的互补链重新形成双链 —— 先是随机碰撞的慢步骤，直到有一小段互补序列配上，随后是快得多的「拉拉链」，其余部分依次归位。也叫退火；它之所以可能，唯一原因是先前什么都没被切断。" },
    { en: "hyperchromic effect", cn: "增色效应",
      def_en: "The rise in ultraviolet absorption at 260 nm when a nucleic acid is denatured. Its opposite, the hypochromic effect, is the lowered absorption of intact stacked and paired nucleic acid relative to free nucleotides. Together they give a direct, continuous readout of melting.",
      def_cn: "核酸变性时 260 nm 处紫外吸收上升的现象。与之相反的减色效应，指完整的、堆叠并配对的核酸相对游离核苷酸吸收更低。两者合起来提供了一个直接、连续跟踪熔解过程的读数。" },
    { en: "melting point Tm", cn: "熔点 Tm",
      def_en: "The temperature at which half a DNA sample is present as separated single strands. It rises with G+C content, mainly because G-C pairs contribute more to base stacking than A-T pairs, so a Tm measured at fixed pH and ionic strength estimates base composition.",
      def_cn: "一份 DNA 样品中有一半以分离单链形式存在时的温度。它随 G+C 含量升高，主要原因是 G-C 对对碱基堆积的贡献大于 A-T 对；因此在固定 pH 和离子强度下测得的 Tm 可以用来估计碱基组成。" },
    { en: "AP site", cn: "AP 位点",
      def_en: "A sugar left with no base attached after spontaneous hydrolysis of the N-glycosyl bond; apurinic or apyrimidinic, also called abasic. Purines are lost much faster, about 10,000 per mammalian cell every 24 hours, and incubating DNA at pH 3 removes them selectively to give apurinic acid.",
      def_cn: "N-糖苷键自发水解后，留下一个不带碱基的糖；按丢失的是嘌呤还是嘧啶称为脱嘌呤或脱嘧啶位点，也叫无碱基位点。嘌呤丢得快得多，哺乳动物每个细胞每 24 小时约丢 10,000 个；把 DNA 在 pH 3 下保温会选择性地脱去嘌呤，得到脱嘌呤酸。" },
    { en: "deamination", cn: "脱氨",
      def_en: "Spontaneous loss of a base's exocyclic amino group. Cytosine becomes uracil at about 1 in 10^7 residues per 24 hours, roughly 100 events a day in a mammalian cell. Because DNA normally holds no uracil, any that appears is recognisable as damage — thought to be why DNA uses thymine.",
      def_cn: "碱基自发失去环外氨基。胞嘧啶变成尿嘧啶的速率约为每 24 小时每 10⁷ 个残基 1 个，相当于哺乳动物细胞每天约 100 次。由于 DNA 里本来不含尿嘧啶，任何出现的尿嘧啶都能被识别为损伤 —— 一般认为这就是 DNA 使用胸腺嘧啶的原因。" },
    { en: "cyclobutane pyrimidine dimer", cn: "环丁烷嘧啶二聚体",
      def_en: "Two adjacent pyrimidines on one strand, most often two thymidines, condensed by ultraviolet light into a four-membered ring that puts a bend or kink into the helix. The 6-4 photoproduct is a second ultraviolet lesion. Ionising radiation instead opens rings, fragments bases and breaks the backbone.",
      def_cn: "同一条链上相邻的两个嘧啶（最常见是两个胸腺嘧啶）被紫外光缩合成一个四元环，把螺旋弯出一个折角。6-4 光产物是另一种紫外损伤。电离辐射造成的则是开环、碱基碎裂和骨架断裂。" },
    { en: "restriction-modification system", cn: "限制-修饰系统",
      def_en: "A bacterial pair in which a methylase marks the cell's own DNA with methyl groups and a nuclease destroys any DNA arriving unmarked. All known DNA methylases use S-adenosylmethionine as methyl donor. A separate use of the same chemistry, E. coli's Dam methylase on 5'-GATC-3', tells a newly replicated strand from the old one.",
      def_cn: "细菌里的一对搭档：甲基化酶用甲基标记细胞自身的 DNA，核酸酶则摧毁任何没有标记就闯进来的 DNA。所有已知 DNA 甲基化酶都用 S-腺苷甲硫氨酸作甲基供体。同一套化学的另一种用法是大肠杆菌作用于 5'-GATC-3' 的 Dam methylase，用来区分刚复制出来的新链与旧链。" },
    { en: "phosphoramidite method", cn: "亚磷酰胺法",
      def_en: "The dominant chemistry for automated DNA synthesis on a solid support, from Khorana and refined by Letsinger and Caruthers. Each cycle's coloured DMT protecting group is stripped by an acid wash and followed spectrophotometrically. Compounding losses cap routine synthesis at 70 to 80 nucleotides.",
      def_cn: "在固相载体上自动合成 DNA 的主流化学，源自 Khorana，经 Letsinger 与 Caruthers 改良。每个循环中带颜色的 DMT 保护基被酸洗脱掉，可用分光光度法跟踪。误差逐轮累积，使常规合成的长度上限约为 70 到 80 个核苷酸。" },
    { en: "polymerase chain reaction", cn: "聚合酶链式反应",
      def_en: "Kary Mullis, 1983. A DNA sample, two flanking synthetic primers, the four dNTPs and a heat-stable polymerase, cycled through denaturation, annealing and extension. Each cycle doubles the target: more than a millionfold after 20 cycles, more than a billionfold after 30.",
      def_cn: "Kary Mullis，1983 年。一份 DNA 样品、两条夹住目标的合成引物、四种 dNTP 和一个耐热聚合酶，反复经历变性、复性与延伸三步。每轮循环使目标翻倍：20 轮后一百万倍以上，30 轮后十亿倍以上。" },
    { en: "Taq polymerase", cn: "Taq 聚合酶",
      def_en: "A heat-stable DNA polymerase from Thermus aquaticus, a bacterium of hot springs near the boiling point of water. It survives every heating step of a thermal cycle without needing replenishment, which is what makes unattended automated amplification possible.",
      def_cn: "来自 Thermus aquaticus 的耐热 DNA 聚合酶，这种细菌生活在接近沸点的温泉里。它能挺过热循环中的每一次加热而无需补加，正因如此，无人值守的自动扩增才成为可能。" },
    { en: "short tandem repeat", cn: "短串联重复",
      def_en: "A short motif, typically 4 bp, repeated 4 to 50 times in a row; the number of repeats varies between individuals, so the length of a PCR product spanning one identifies a person. More than 20,000 tetranucleotide loci are known, about 3% of human DNA. CODIS is the US database, 20 core loci since 2017.",
      def_cn: "一个短基序（典型为 4 bp）连续重复 4 到 50 次；重复次数因人而异，所以跨过它的 PCR 产物长度可以识别个体。已知的四核苷酸位点超过两万个，约占人类 DNA 的 3%。CODIS 是美国的数据库，自 2017 年起为 20 个核心位点。" },
    { en: "dideoxy chain-termination sequencing", cn: "双脱氧链终止测序",
      def_en: "Frederick Sanger, 1977. A ddNTP has -H instead of -OH at the ribose 3' position, so a polymerase cannot extend past it; spiking one ddNTP into an excess of the normal nucleotide terminates strands at every position of that base. Fragments separated by size read shortest to longest, 5' to 3', giving the complementary strand's sequence.",
      def_cn: "Frederick Sanger，1977 年。ddNTP 的核糖 3' 位是 -H 而非 -OH，聚合酶无法越过它继续延伸；把一种 ddNTP 少量掺进过量的正常核苷酸中，就会在该碱基的每一个位置上终止一部分链。片段按大小分开，从短到长读出，方向为 5' 到 3'，得到的是互补链的序列。" },
    { en: "sequencing depth", cn: "测序深度",
      def_en: "How many times a given nucleotide is read on average, also called coverage; typically 100x to 1,000x, high enough that comparing reads over the same base removes most errors. Overlapping reads are then aligned end to end into long contiguous sequences called contigs.",
      def_cn: "一个给定核苷酸平均被读到多少次，也叫覆盖度；常见为 100x 到 1,000x，高到足以让覆盖同一碱基的多条读段互相比对、消除大部分错误。随后把有重叠的读段首尾对齐，拼成称为 contig 的长连续序列。" }
  ]
};

/* ===================================================================== L-8-4-1 */
window.BIOLITE_SPINE["L-8-4-1"] = {
  assumed: ["cell", "protein", "enzyme", "gene", "DNA", "RNA", "nucleic acid", "base",
            "sugar", "ribose", "phosphate", "ATP", "ADP", "AMP", "hormone", "receptor",
            "amino acid", "ribosome", "cofactor", "coenzyme", "active site", "bacteria", "catalysis"],
  nodeTitle_en: "Other functions of nucleotides",
  nodeTitle_cn: "核苷酸的其他功能",
  title_en: "What a nucleotide does when it is not part of a nucleic acid",
  title_cn: "当核苷酸不是核酸的一部分时，它在干什么",
  steps: [
    {
      en: "A nucleotide is three parts joined together: a nitrogenous base, a five-carbon sugar, and one or more phosphate groups attached at the sugar's 5' hydroxyl. A base joined to the sugar with no phosphate at all is a nucleoside; attach one phosphate and you have a nucleoside monophosphate, two a diphosphate, three a triphosphate. **Strung together by their phosphates, nucleotides make DNA and RNA. Left loose, single, in the cytosol, the same molecules do three other jobs — and each one is a job the nucleic acid role does not predict.**",
      cn: "一个 nucleotide（核苷酸） 由三部分接在一起：一个含氮碱基、一个五碳糖，以及接在糖的 5' 羟基上的一个或多个磷酸基。碱基单独接在糖上、一个磷酸都没有，叫 nucleoside（核苷）；接一个磷酸是核苷一磷酸，两个是二磷酸，三个是三磷酸。**用磷酸把它们串起来，就得到 DNA 和 RNA。而单个地、松散地留在胞质里时，同样这些分子还干着另外三件事 —— 而且每一件都不是从「核酸组分」这个身份能推出来的。**",
      src: "A p.294–296"
    },
    {
      link_en: "job one, and the one already familiar",
      link_cn: "第一件事，也是最耳熟的一件",
      en: "**ATP is the central carrier of chemical energy in cells: the molecule that picks up free energy where reactions release it and spends it where reactions need it.** That role belongs to a single loose nucleotide, doing nothing whatever with its base as a letter of a genetic message.",
      cn: "**ATP 是细胞中化学能的中心载体：在放能反应处把自由能接过来，再到需要能量的反应处花掉。**承担这个角色的就是一个游离的单个核苷酸，而它的碱基在这里完全没有被当作遗传信息里的一个字母来用。",
      src: "A p.296",
      see: [{ id: "L-13-3-1", en: "what ATP actually does with that energy, and why it almost never simply hydrolyses", cn: "ATP 究竟怎么使用这份能量，以及它为什么几乎从不单纯水解" }]
    },
    {
      link_en: "job two starts as a question rather than a fact",
      link_cn: "第二件事，先以一个疑问的形式出现",
      en: "NAD, FAD and coenzyme A are cofactors — small molecules an enzyme needs alongside its protein in order to work — and they carry out completely unrelated chemistry: NAD and FAD move electrons, coenzyme A carries acyl groups. Yet all three contain an adenosine, which is adenine joined to a ribose. **In none of these cofactors does the adenosine portion participate directly in the primary function.** So the question is why so many unrelated cofactors are all built around a nucleotide that takes no part in the reaction.",
      cn: "NAD、FAD 和辅酶 A 都是 cofactor（辅因子） —— 酶除了自己的蛋白部分之外还需要的小分子 —— 而它们干的化学彼此毫不相干：NAD 和 FAD 搬电子，辅酶 A 搬酰基。可是这三者身上都含有一个 adenosine（腺苷），也就是腺嘌呤连上一个核糖。**在这些辅因子中，腺苷部分都不直接参与其主要功能。**于是问题就来了：为什么这么多互不相干的辅因子，都围着一个根本不参与反应的核苷酸搭建？",
      src: "A p.294"
    },
    {
      link_en: "and the answer is one measured number",
      link_cn: "而答案是一个实测出来的数字",
      en: "**The adenosine is a binding handle. An enzyme grips it and uses that grip to pull the business end of the cofactor into its active site — so what the adenosine supplies is binding energy, not reaction chemistry.** The measurement that settles it: strip the adenosine off acetoacetyl-CoA and its reactivity as a substrate for β-ketoacyl-CoA transferase falls by a factor of 10^6. A part that does no chemistry at all, whose removal costs a millionfold in rate.",
      cn: "**那个腺苷是一个「结合用的把手」。酶抓住它，靠这一抓把辅因子上真正干活的那一端拽进自己的活性中心 —— 所以腺苷提供的是结合能，不是反应化学。**一锤定音的测量是：把腺苷从 acetoacetyl-CoA（乙酰乙酰辅酶 A）上去掉，它作为 β-ketoacyl-CoA transferase（β-酮脂酰辅酶 A 转移酶）底物的反应性下降 10⁶ 倍。一个完全不参与化学的部件，拿掉它却让速率掉了一百万倍。",
      src: "A p.294"
    },
    {
      link_en: "and once that is understood, two further things follow",
      link_cn: "想通了这一点，还能顺出两件事",
      en: "First, the grip has a name on the protein side: a domain called a nucleotide-binding fold is found in many enzymes that bind ATP and nucleotide cofactors — one recurring piece of protein architecture that recognises the same handle wherever it appears. Second, and this is what makes the arrangement economical: **because the handle is generic and only the business end differs, a cell can build a dozen different cofactors out of one recycled part.**",
      cn: "第一，这个「抓」在蛋白那一侧是有名字的：许多结合 ATP 和核苷酸辅因子的酶身上，都有一个叫 nucleotide-binding fold（核苷酸结合折叠）的结构域 —— 同一个反复出现的蛋白结构模块，无论把手出现在哪里都能认出它。第二，正是这一点让整套安排变得极其划算：**由于把手是通用的、只有干活的那一端不同，细胞就能用同一个回收来的零件搭出十几种不同的辅因子。**",
      src: "A p.295"
    },
    {
      link_en: "job three: the same molecule used as a message",
      link_cn: "第三件事：同一个分子被当成一条消息来用",
      en: "**Cyclic AMP, or cAMP, is made from ATP by the enzyme adenylyl cyclase, and it is the common second messenger produced in response to hormones.** A second messenger is an intracellular signal generated when an extracellular signal arrives at the cell surface — the hormone itself stays outside, and cAMP is what carries the news inward. Cyclic GMP, cGMP, has regulatory roles too. So a nucleotide serves here as a word in a signalling vocabulary, a role that has nothing to do with either energy or catalysis.",
      cn: "**cyclic AMP（环化 AMP，cAMP）由 ATP 经 adenylyl cyclase（腺苷酸环化酶）生成，是响应激素时产生的常见 second messenger（第二信使）。**所谓第二信使，是指胞外信号抵达细胞表面时在细胞内部生成的信号 —— 激素本身留在细胞外，把消息往里传的是 cAMP。cyclic GMP（cGMP）同样具有调节作用。所以在这里，核苷酸充当的是信号词汇表里的一个词，这个角色与能量和催化都毫无关系。",
      src: "A p.296",
      see: [{ id: "L-12-1-1", en: "the signalling cascades cAMP sits inside", cn: "cAMP 所处的那些信号级联" }]
    },
    {
      link_en: "bacteria have a signalling nucleotide of their own, and what it says is unusually blunt",
      link_cn: "细菌有自己的信号核苷酸，而它传达的意思异常直白",
      en: "**ppGpp is a nucleotide made in bacteria when protein synthesis slows down during amino acid starvation, and what it does is shut off the synthesis of rRNA and tRNA.** Those two RNAs are the bulk of what a ribosome is built from, so the message is a straightforward accounting decision: amino acids have run short, translation has stalled, therefore stop building ribosomes the cell cannot use.",
      cn: "**ppGpp 是细菌在氨基酸饥饿导致蛋白质合成变慢时产生的一种核苷酸，它的作用是关掉 rRNA 和 tRNA 的合成。**这两种 RNA 正是核糖体的主要构件，所以这条消息就是一个直白的算账决定：氨基酸不够了、翻译已经卡住，那就别再造细胞用不上的核糖体。",
      src: "A p.296"
    },
    {
      link_en: "and the one that surprises people, because it puts the energy molecule outside the cell",
      link_cn: "还有一条最出人意料的，因为它把「能量分子」放到了细胞外面",
      recall_en: "the same ATP and ADP that carried chemical energy at the start of this chain, now used as messages between cells",
      recall_cn: "还是这条主线开头那对搬运化学能的 ATP 和 ADP，这回被当作细胞之间的消息来用",
      en: "**ATP and ADP serve as neurotransmitters in a variety of signalling pathways — extracellular signals in their own right, released to be detected by receptors on other cells.** The anticlotting drug clopidogrel, sold as Plavix, works by blocking a receptor for one of them, which is a fair test of whether the claim is doing any work: a whole class of prescriptions rests on it.",
      cn: "**ATP 和 ADP 在多条信号通路中充当神经递质 —— 它们本身就是胞外信号，被释放出去，由其他细胞上的受体来接收。**抗血小板药 clopidogrel（氯吡格雷，商品名波立维）正是靠阻断其中一个的受体起作用的，而这也是检验这条说法有没有分量的一个好办法：一整类处方药就建立在它上面。",
      src: "A p.296"
    },
    {
      link_en: "all of this is one section of a book. Held together it is a single observation about design",
      link_cn: "以上都出自书里的一小段。合起来看，它们其实是关于「设计」的同一个观察",
      en: "**One chemical scaffold — base, sugar, phosphate — is reused across four completely different jobs: the monomer of a genetic polymer, the carrier of chemical energy, the recognition handle on a cofactor, and a signal both inside and outside the cell.** Nothing about the base-pairing role predicts any of the other three, and an enzyme meeting a nucleotide has no way of knowing which of the four it is looking at until it reads the rest of the molecule.",
      cn: "**一套化学骨架 —— 碱基、糖、磷酸 —— 被重复使用在四件完全不同的工作上：遗传聚合物的单体、化学能的载体、辅因子上的识别把手，以及细胞内外的信号。**碱基配对那个角色，对其余三个角色一点预测力都没有；一个酶碰上一个核苷酸时，不把分子的其余部分读完，根本无从知道自己面对的是这四者中的哪一个。",
      src: "A p.294–296"
    }
  ],
  terms: [
    { en: "nucleoside mono-, di- and triphosphate", cn: "核苷一磷酸／二磷酸／三磷酸",
      def_en: "A base joined to a five-carbon sugar carrying one, two or three phosphate groups at the sugar's 5' hydroxyl. Linked through those phosphates the units build DNA and RNA; left single and loose in the cytosol they carry energy, act as cofactor handles, and serve as signals.",
      def_cn: "一个碱基连着一个五碳糖，糖的 5' 羟基上带一个、两个或三个磷酸基。通过这些磷酸连接起来，这些单元构成 DNA 和 RNA；单个游离在胞质中时，它们搬运能量、充当辅因子的把手，并作为信号使用。" },
    { en: "adenosine as a binding handle", cn: "作为结合把手的腺苷",
      def_en: "The adenine-plus-ribose portion carried by NAD, FAD and coenzyme A, which takes no direct part in the chemistry those cofactors perform. It exists so that an enzyme can grip the cofactor and pull its reactive end into the active site: removing it from acetoacetyl-CoA drops reactivity toward β-ketoacyl-CoA transferase by 10^6.",
      def_cn: "NAD、FAD 和辅酶 A 身上那段「腺嘌呤 + 核糖」，它并不直接参与这些辅因子所完成的化学。它存在的意义是让酶抓住辅因子、把其反应端拽进活性中心：把它从乙酰乙酰辅酶 A 上去掉，对 β-酮脂酰辅酶 A 转移酶的反应性下降 10⁶ 倍。" },
    { en: "nucleotide-binding fold", cn: "核苷酸结合折叠",
      def_en: "A protein domain found in many enzymes that bind ATP and nucleotide cofactors — the recurring piece of architecture that recognises the adenosine handle wherever it turns up, which is what lets one recycled part serve a dozen different cofactors.",
      def_cn: "许多结合 ATP 和核苷酸辅因子的酶都具有的一个蛋白结构域 —— 无论腺苷把手出现在哪里都能识别它的那个反复出现的结构模块；正因为有它，同一个回收零件才能服务于十几种不同的辅因子。" },
    { en: "second messenger", cn: "第二信使",
      def_en: "An intracellular signal generated when an extracellular signal reaches the cell surface. Cyclic AMP, made from ATP by adenylyl cyclase, is the common one produced in response to hormones; cyclic GMP has regulatory roles too.",
      def_cn: "胞外信号抵达细胞表面时，在细胞内部生成的信号。由 ATP 经腺苷酸环化酶生成的环化 AMP 是响应激素时最常见的一种；环化 GMP 同样具有调节作用。" },
    { en: "ppGpp", cn: "ppGpp",
      def_en: "A bacterial signalling nucleotide made when protein synthesis slows during amino acid starvation. It shuts down rRNA and tRNA synthesis, so the cell stops building ribosomes it has no amino acids to use.",
      def_cn: "细菌在氨基酸饥饿、蛋白质合成变慢时产生的信号核苷酸。它关掉 rRNA 和 tRNA 的合成，于是细胞不再制造那些没有氨基酸可用的核糖体。" }
  ]
};

/* ===================================================================== L-9-1-1 */
window.BIOLITE_SPINE["L-9-1-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "cell", "bacteria", "E. coli",
            "yeast", "virus", "chromosome", "genome", "base pair", "nucleotide",
            "amino acid", "antibiotic", "PCR", "DNA polymerase", "promoter",
            "transcription", "translation", "ribosome", "mRNA", "colony", "mutation",
            "reverse transcriptase", "electrophoresis", "eukaryote", "telomere",
            "centromere", "affinity chromatography", "recombination", "maltose", "chitin", "glutathione"],
  nodeTitle_en: "Studying genes and their products",
  nodeTitle_cn: "研究基因及其产物",
  title_en: "Why a palindrome makes cloning possible, and why you never look for the cell that worked",
  title_cn: "为什么一个回文序列让克隆成为可能，以及为什么你从不去「找」那个成功的细胞",
  steps: [
    {
      en: "**Cloning a gene is five steps, and every complication later hangs off one of them.** One: obtain the DNA segment — cut it out with restriction endonucleases, shear genomic DNA at random, or, now that sequences sit in databases, amplify it by PCR or simply have it synthesised. Two: choose a small DNA molecule capable of autonomous replication, meaning it can be copied inside a cell independently of that cell's own chromosome; this is the cloning vector, and vector here just means carrier. Three: join the two covalently, which DNA ligase does; the product, carrying covalently linked segments from two or more sources, is recombinant DNA. Four: get that molecule out of the test tube and into a host cell, which supplies the machinery to replicate it. Five: select or identify the host cells that actually contain it. The whole of it is called recombinant DNA technology, informally genetic engineering, and E. coli was the first host and is still the most common.",
      cn: "**克隆一个基因分五步，而后面所有的麻烦事都挂在其中某一步上。**一：拿到要克隆的 DNA 片段 —— 用限制性内切酶切出来、把基因组 DNA 随机剪碎，或者（既然序列都在数据库里了）用 PCR 扩出来、干脆直接合成。二：选一个能自主复制的小 DNA 分子，意思是它能在细胞内独立于细胞自身染色体而被复制；这就是 cloning vector（克隆载体），vector 在这里就是「运载工具」的意思。三：把两者共价连起来，这活儿由 DNA ligase（连接酶）来干；产物携带着来自两个或更多来源、共价相连的片段，叫 recombinant DNA（重组 DNA）。四：把这个分子从试管里弄进宿主细胞，由宿主提供复制它所需的酶机器。五：选出或认出真正含有它的那些宿主细胞。整套东西叫重组 DNA 技术，俗称基因工程；最早的宿主是大肠杆菌，直到现在它也仍是最常用的。",
      src: "A p.301–302"
    },
    {
      link_en: "step one turns on an enzyme that bacteria did not evolve for our convenience",
      link_cn: "第一步依赖一种酶，而细菌进化出它可不是为了方便我们",
      en: "Werner Arber found in the early 1960s that the biological function of a restriction endonuclease in a bacterium is to recognise and cleave foreign DNA — the DNA of an infecting virus, for instance. Such DNA is said to be restricted. The obvious objection is that the bacterium's own chromosome contains the same sequence, and the answer is the other half of the system: the host's own copies of that sequence are methylated by a matching DNA methylase, and methylation blocks cleavage. The nuclease and its methylase together are a restriction-modification system. So **the exact, reproducible specificity that makes the enzyme a laboratory tool is a by-product of a bacterial immune system.**",
      cn: "Werner Arber 在 1960 年代初发现，restriction endonuclease（限制性内切酶）在细菌体内的生物学功能，是识别并切开外源 DNA —— 例如入侵病毒的 DNA。这种 DNA 就被说成是「被限制了」。一个显而易见的反驳是：细菌自己的染色体上也有同样的序列。回答就是这套系统的另一半：宿主自身那些序列被一个配套的 DNA methylase（甲基化酶）甲基化，而甲基化会阻止切割。核酸酶和它的甲基化酶合起来就是 restriction-modification system（限制-修饰系统）。于是，**让这个酶成为实验室工具的那种精确、可重复的特异性，其实是细菌免疫系统的副产品。**",
      src: "A p.303",
      see: [{ id: "L-8-3-1", en: "the same methylation chemistry, and what else a cell uses it for", cn: "同一套甲基化化学，以及细胞还用它来做什么" }]
    },
    {
      link_en: "of the three kinds that exist, exactly one is usable",
      link_cn: "现存的三类里，恰好只有一类能用",
      en: "There are three types of restriction endonuclease, designated I, II and III. Types I and III are large multisubunit complexes carrying both the endonuclease and the methylase activities in one machine, which makes them awkward. Type II enzymes, first isolated by Hamilton Smith in 1970, are simpler, require no ATP, and — this is the decisive property — catalyse hydrolytic cleavage of particular phosphodiester bonds within the recognition sequence itself, so you know exactly where the cut will fall. Daniel Nathans then used them to map and analyse genes and genomes. Thousands are now known from different bacterial species, recognising more than 100 different sequences, and their names are not arbitrary: a three-letter abbreviation of the bacterial species, sometimes a strain letter, then a roman numeral saying which enzyme it was from that species. **BamHI is therefore the first restriction endonuclease characterised from Bacillus amyloliquefaciens, strain H.**",
      cn: "限制性内切酶有三类，标为 I、II、III 型。I 型和 III 型是庞大的多亚基复合体，把内切酶活性和甲基化酶活性装在同一台机器里，用起来很别扭。II 型酶由 Hamilton Smith 在 1970 年首次分离，它更简单、不需要 ATP，而且 —— 这是决定性的性质 —— 它水解切割的是识别序列内部特定的磷酸二酯键，所以你确切知道切口落在哪里。随后 Daniel Nathans 用它们来绘制和分析基因与基因组。如今已知的 II 型酶来自数千种细菌，识别一百多种不同序列，而它们的名字并非随意：先是细菌种名的三字母缩写，有时再加一个菌株字母，最后一个罗马数字表示它是该物种中第几个被鉴定出来的酶。**所以 BamHI 就是从 Bacillus amyloliquefaciens 菌株 H 中鉴定出的第一个限制性内切酶。**",
      src: "A p.303"
    },
    {
      link_en: "and now the one lucky fact that makes the whole technology possible",
      link_cn: "接下来是让整套技术得以成立的那个幸运事实",
      en: "A recognition sequence is usually 4 to 6 bp long and is palindromic — it reads the same on both strands in the same direction. Many type II enzymes cut the two strands in a staggered way rather than straight across, leaving two to four nucleotides of one strand unpaired at each end. Those overhangs are sticky ends, so called because they can base-pair with each other. And because the recognition sequence is a palindrome, **every fragment cut by a given enzyme ends in exactly the same overhang, so any two of them will anneal — the gene and the vector included. That single coincidence is what cloning is built on.** Others cut both strands straight across at opposing phosphodiester bonds and leave blunt ends with no unpaired bases. Two consequences follow at once: ligation is less efficient for blunt ends than for complementary sticky ends, because base pairing holds sticky ends together while ligase works; and fragments with different, non-complementary sticky ends generally are not ligated at all, so an EcoRI fragment will not join a BamHI fragment. That is why gene and vector are cut with the same enzyme.",
      cn: "识别序列通常长 4 到 6 bp，而且是回文的 —— 两条链按同一方向读出来是一样的。许多 II 型酶切两条链时是错开切的，而不是齐头切断，于是每一端都留下两到四个未配对的核苷酸。这些突出端就是 sticky end（黏性末端），叫这个名字是因为它们能彼此碱基配对。而正因为识别序列是回文，**同一种酶切出来的每一个片段，末端的突出序列完全相同，所以任意两个片段都能退火配上 —— 目的基因和载体也包括在内。整个克隆技术，就搭在这一个巧合上面。**另一些酶在相对的磷酸二酯键上把两条链齐头切断，留下没有未配对碱基的 blunt end（平末端）。两个推论立刻跟着出来：平末端的连接效率低于互补的黏性末端，因为黏性末端在连接酶干活时靠碱基配对被拉在一起；而带有不同的、互不互补黏性末端的片段一般根本连不上，所以 EcoRI 切出来的片段接不上 BamHI 切出来的片段。这就是为什么目的基因和载体要用同一种酶来切。",
      src: "A p.303–304"
    },
    {
      link_en: "and if the sequence you need has no convenient site, you can put one there",
      link_cn: "而如果你要的序列上没有合适的切点，你可以自己造一个",
      en: "Two engineering conveniences show up everywhere. First, the fragment to be cloned is most often generated by PCR, and a primer can carry a non-complementary 5' extension containing a restriction site: **the extension does not anneal to the target, but it is copied into the product anyway, so cleaving the amplified fragment at those added sites creates sticky ends to order — DNA that was never in the chromosome.** Second, a short synthetic fragment inserted to bridge two ends being ligated is a linker, and a linker carrying recognition sequences for several different restriction endonucleases is a multiple cloning site, or MCS. An MCS is what makes one vector backbone reusable: it offers a menu of places to cut, so the same vector accepts many different inserts.",
      cn: "有两个工程上的便利到处都在用。第一，要克隆的片段多半是 PCR 扩出来的，而引物的 5' 端可以带一段不互补的延伸序列，里面塞进一个酶切位点：**这段延伸不与模板退火，但照样会被复制到产物里，于是在这些「加上去的」位点上切开扩增片段，就按需造出了黏性末端 —— 一段染色体上从来没有过的 DNA。**第二，为了把两个待连接的末端搭起来而插入的短合成片段叫 linker（接头），而带有好几种不同限制酶识别序列的 linker 叫 multiple cloning site（多克隆位点，MCS）。MCS 正是让同一个载体骨架可以反复使用的东西：它提供了一份「可切位点菜单」，于是同一个载体能接纳许多不同的插入片段。",
      src: "A p.304–305"
    },
    {
      link_en: "so much for cutting and joining. Now the carrier the gene is joined to",
      link_cn: "切和接说完了。现在说基因要接到什么上面去",
      en: "**A plasmid is a circular DNA molecule that replicates separately from the host chromosome.** Naturally occurring bacterial plasmids run from 5,000 to 400,000 bp; many are little more than molecular parasites, though some earn their keep by conferring antibiotic resistance or a new ability — the Ti plasmid of Agrobacterium tumefaciens lets its host colonise plant cells. pBR322, built in 1977, shows the four features a cloning vector needs. One: an origin of replication, ori, where the cell's enzymes start copying it, with a regulatory system that holds pBR322 at 10 to 20 copies per cell. Two: genes conferring antibiotic resistance, here to ampicillin and tetracycline, which is how cells carrying the plasmid are selected. Three: several unique restriction sites — PstI, EcoRI, BamHI, SalI, PvuII — places to cut the circle open and insert foreign DNA; unique matters, because an enzyme cutting twice would remove a piece of the vector itself. Four: small size, 4,361 bp, which eases entry into cells, achieved by trimming a larger parent plasmid down to what is actually needed.",
      cn: "**plasmid（质粒）是一个环形 DNA 分子，它独立于宿主染色体进行复制。**天然存在的细菌质粒从 5,000 bp 到 400,000 bp 不等；许多不过是分子层面的寄生虫，但也有些靠赋予抗生素抗性或某种新本领来「挣饭吃」—— Agrobacterium tumefaciens 的 Ti 质粒就让宿主得以定殖植物细胞。1977 年构建的 pBR322 展示了一个克隆载体需要的四个特征。一：一个 origin of replication（复制起点，ori），细胞的酶从那里开始复制它，并有一套调控系统把 pBR322 维持在每个细胞 10 到 20 个拷贝。二：赋予抗生素抗性的基因，这里是氨苄青霉素和四环素抗性，携带质粒的细胞就是靠它被选出来的。三：几个唯一的限制酶切位点 —— PstI、EcoRI、BamHI、SalI、PvuII —— 用来把环切开、插入外源 DNA；「唯一」很要紧，因为切两次的酶会把载体自身的一段切掉。四：小 —— 4,361 bp —— 这让它更容易进入细胞；做法是把一个更大的母本质粒裁到只剩真正需要的部分。",
      src: "A p.305"
    },
    {
      link_en: "one property of that origin decides two things people get wrong",
      link_cn: "复制起点的一个性质，决定了两件常被搞错的事",
      en: "The replication origins used in common plasmid vectors were taken from naturally occurring plasmids, and each is regulated to maintain a particular copy number — depending on which origin is used, from one to hundreds or thousands per cell. That is a real choice: high copy number for yield, low copy number for stability. And it has a hard consequence. **Two different plasmids cannot function in the same cell if they use the same origin of replication, because the regulation of one interferes with the replication of the other; such plasmids are said to be incompatible.** So putting two plasmids into one bacterial cell requires that each carry a different origin.",
      cn: "常用质粒载体上的复制起点，都是从天然质粒那里取来的，而每一种起点都被调控成维持某个特定的拷贝数 —— 取决于用的是哪个起点，可以是每个细胞一个，也可以是几百上千个。这是一个真实的选择：要产量就用高拷贝，要稳定就用低拷贝。它还带来一个硬性后果。**两个不同的质粒若使用同一个复制起点，就无法在同一个细胞里共存，因为其中一个的调控会干扰另一个的复制；这样的质粒被称为不相容（incompatible）。**所以要把两个质粒放进同一个细菌细胞，就必须让它们各带一个不同的复制起点。",
      src: "A p.306"
    },
    {
      link_en: "the recombinant molecule is finished. Getting it into a cell is where the second big idea lives",
      link_cn: "重组分子做好了。而把它弄进细胞这一步，藏着第二个大想法",
      en: "In the laboratory a small plasmid enters a bacterium by transformation: cells and plasmid DNA are incubated together at 0 °C in calcium chloride, then given a heat shock by shifting rapidly to 37–43 °C, and for reasons not well understood some of the treated cells take up the DNA. Some species, such as Acinetobacter baylyi, are naturally competent and need no treatment. The alternative is electroporation, a high-voltage pulse that briefly makes the membrane permeable to large molecules. Either way, relatively few cells take up the plasmid — which is the whole reason selection exists. **You do not find the rare cell that worked; you arrange conditions in which only that cell can live.** A selectable marker is a gene that either permits a cell to grow (positive selection) or kills it (negative selection) under defined conditions — antibiotic resistance is the standard case, and pBR322 carries two. A screenable marker instead encodes a protein that makes the cell produce a coloured or fluorescent molecule; nothing is harmed, and the right colonies are simply identified by colour.",
      cn: "在实验室里，小质粒靠 transformation（转化） 进入细菌：把细胞和质粒 DNA 一起放在 0 °C 的氯化钙中保温，再迅速升到 37–43 °C 给一次 heat shock（热激）；出于尚未完全搞清的原因，处理过的细胞里有一部分会把 DNA 摄进去。有些物种（如 Acinetobacter baylyi）天生具有感受态，根本不需要处理。另一条路是 electroporation（电穿孔），用一次高压脉冲让膜短暂地对大分子通透。无论走哪条路，真正摄入质粒的细胞都相当少 —— 这正是「选择」这件事存在的全部理由。**你不去把那个成功的稀有细胞找出来；你布置一套条件，让只有它能活下去。**selectable marker（选择标记）是这样一个基因：在特定条件下，它要么让细胞得以生长（正选择），要么把细胞杀死（负选择） —— 抗生素抗性是标准例子，pBR322 上带了两个。screenable marker（筛选标记）则编码一个使细胞产生有色或荧光分子的蛋白；细胞毫发无损，带有目标质粒的菌落只是靠颜色被认出来而已。",
      src: "A p.306–307"
    },
    {
      link_en: "and a plasmid runs out of room long before a gene does",
      link_cn: "而质粒的容量，远在基因用完之前就见底了",
      en: "Transformation with purified DNA becomes less successful as the plasmid grows, so cloning a segment longer than about 15,000 bp in an ordinary plasmid is difficult. A bacterial artificial chromosome, or BAC, typically carries 100,000 to 300,000 bp, and it is a fairly simple plasmid with three additions. First, a stable origin holding it at only one or two copies per cell — deliberately low, because few copies means few opportunities for recombination between them, which would otherwise scramble a large insert over time. Second, par genes taken from the F plasmid, encoding proteins that direct reliable distribution of the recombinant chromosomes to daughter cells at division, necessary precisely because there are so few copies to go round. Third, both marker kinds: chloramphenicol resistance for positive selection, and a lacZ gene positioned so that an insert disrupts it. lacZ encodes β-galactosidase; **on plates containing X-gal, a colony with intact lacZ makes active β-galactosidase, converts the colourless X-gal to a blue product and turns blue, while a colony whose lacZ was interrupted by the insert you wanted stays white.** The white colonies are the ones to pick.",
      cn: "用纯化 DNA 做转化，质粒越大成功率越低，所以在普通质粒里克隆超过约 15,000 bp 的片段很困难。bacterial artificial chromosome（细菌人工染色体，BAC）通常能装 100,000 到 300,000 bp，它本身是个相当简单的质粒，只多了三样东西。第一，一个稳定的复制起点，把它维持在每个细胞只有一两个拷贝 —— 刻意压低，因为拷贝少就意味着拷贝之间发生重组的机会少，否则时间一长，大插入片段会被重组搅乱。第二，取自 F 质粒的 par 基因，编码的蛋白负责在分裂时把重组染色体可靠地分配到子细胞里去 —— 正因为拷贝太少，这件事才必须专门保证。第三，两类标记都有：氯霉素抗性用于正选择，还有一个位置安排得使插入片段恰好把它打断的 lacZ 基因。lacZ 编码 β-半乳糖苷酶；**在含 X-gal 的平板上，lacZ 完整的菌落造出有活性的 β-半乳糖苷酶，把无色的 X-gal 转化成蓝色产物，于是菌落变蓝；而 lacZ 被你想要的那个插入片段打断的菌落则保持白色。**要挑的就是白色菌落。",
      src: "A p.307"
    },
    {
      link_en: "and when even that is not enough, you stop imitating a chromosome and build one",
      link_cn: "而当这也不够用时，就别再模仿染色体了 —— 直接造一条",
      en: "A yeast artificial chromosome, or YAC, carries the largest inserts, up to about 2 x 10^6 bp, and it does so by containing everything a eukaryotic chromosome needs to survive in a yeast nucleus: a yeast origin of replication, two selectable markers, a centromere for attachment to the spindle at division, and two telomeres to cap and protect the ends. In use, the vector is grown as a circular bacterial plasmid, then cut twice: one enzyme removes the DNA lying between the two telomere sequences, leaving the telomeres at the ends of a now-linear molecule, and a second cut splits that molecule into two vector arms, each carrying a different selectable marker. Genomic DNA is partially digested, size-separated by pulsed field gel electrophoresis — an ordinary gel cannot resolve pieces this large — ligated between the two arms, and used to transform yeast spheroplasts, cells pretreated to strip their wall. **Requiring both markers for growth guarantees that only a genuine arm-insert-arm chromosome survives.** Two size facts travel with it: inserts over 150,000 bp are nearly as stable as normal chromosomes, those under 100,000 bp are gradually lost during mitosis, and a YAC missing a telomere at either end is rapidly degraded.",
      cn: "yeast artificial chromosome（酵母人工染色体，YAC）能装最大的插入片段，可达约 2 x 10⁶ bp；它做到这一点的办法，是把一条真核染色体在酵母细胞核里存活所需的一切都装齐：一个酵母复制起点、两个选择标记、一个用于分裂时挂上纺锤体的 centromere（着丝粒），以及两个用来封住并保护末端的 telomere（端粒）。用的时候，先把这个载体当作环形细菌质粒扩增出来，然后切两刀：一种酶切掉夹在两段端粒序列之间的 DNA，使端粒落到一个已经变成线形的分子的两端；第二刀再把这个分子切成两条 vector arm（载体臂），每条各带一个不同的选择标记。基因组 DNA 做部分酶切，用 pulsed field gel electrophoresis（脉冲场凝胶电泳） 按大小分开 —— 普通凝胶分辨不了这么大的片段 —— 连到两条臂中间，再去转化酵母 spheroplast（原生质球），也就是预先把细胞壁除掉的细胞。**要求两个标记同时存在才能生长，就保证了只有真正「臂—插入片段—臂」结构的染色体才活得下来。**还有两个关于大小的事实要一起记住：插入片段大于 150,000 bp 的 YAC 几乎和正常染色体一样稳定；小于 100,000 bp 的会在有丝分裂中逐渐丢失；而任何一端缺了端粒的 YAC 会被迅速降解。",
      src: "A p.307–309"
    },
    {
      link_en: "everything so far only keeps a gene. Getting the protein out of it takes a different vector",
      link_cn: "到目前为止的一切，都只是把基因存起来。要从它得到蛋白，得换一种载体",
      en: "A eukaryotic gene carries the sequences needed for its transcription and regulation in its own cells, and those sequences do not function in a bacterium. Dropped into E. coli, a eukaryotic gene has no bacterial promoter — the site where RNA polymerase binds to start making mRNA — no ribosome-binding site to allow translation, and none of the other regulatory sequences. **An expression vector supplies all of them, positioned correctly relative to the insert: a well-characterised promoter and its regulatory elements sit next to the MCS, so a gene inserted there is transcribed from that promoter**, with the end encoding the protein's amino terminus placed closest to the promoter. An operator — a short stretch of DNA beside the promoter where a repressor protein can sit and physically block RNA polymerase — lets the promoter be switched off and on, a ribosome-binding site improves translation, a transcription-termination sequence improves mRNA yield and stability, and a selectable marker allows the usual selection. Separately: a plasmid carrying more than one replication origin can be propagated in more than one species, for example in both yeast and E. coli, and is called a shuttle vector.",
      cn: "一个真核基因身上带着它在自己细胞里转录和调控所需的序列，而这些序列在细菌里不起作用。把一个真核基因丢进大肠杆菌，它没有细菌 promoter（启动子，即 RNA 聚合酶结合、开始合成 mRNA 的位点）、没有允许翻译发生的核糖体结合位点，其他调控序列也一概没有。**expression vector（表达载体）把这些全部配齐，并且相对插入片段摆在正确的位置上：一个性质清楚的启动子及其调控元件就挨着 MCS，所以插进去的基因由这个启动子转录**，而编码蛋白氨基端的那一端要放在离启动子最近的位置。一个 operator（操纵基因）使阻遏蛋白得以调控它，一个核糖体结合位点改善翻译，一个转录终止序列提高 mRNA 的产量和稳定性，再加一个选择标记以便照常做选择。另外还有一条：带有不止一个复制起点的质粒可以在不止一个物种里增殖，比如同时在酵母和大肠杆菌里，这种质粒叫 shuttle vector（穿梭载体）。",
      src: "A p.309"
    },
    {
      link_en: "and which cell you express it in is always the same trade",
      link_cn: "至于在哪种细胞里表达，做的永远是同一笔交易",
      en: "**Every host is a trade-off, and the trade is always folding and modification against cost.** Bacteria, especially E. coli, are the most common: regulatory sequences are well understood, growth is cheap, DNA goes in and out easily, and fermenters give huge yields. Against that: many foreign proteins do not fold correctly, many miss the posttranslational modification or proteolytic cleavage they need, and eukaryotic proteins frequently aggregate into insoluble precipitates called inclusion bodies — plenty of protein, no activity. Expression can reach 10% or more of cellular protein, at which point some foreign proteins kill the host, so expression is limited to the few hours before harvest. Two bacterial systems are worth naming: the lactose operon promoter is convenient but leaky — never fully off in the absence of lactose, which is a problem when the product is toxic — while the bacteriophage T7 system fuses the gene to a T7 promoter transcribed by a separately cloned, tightly regulated T7 RNA polymerase rather than by E. coli's own, which makes it both efficient and properly switchable. Yeast works the same way with the GAL1 and GAL10 promoters, on in galactose and off in glucose, so expression is set by the choice of medium; being a eukaryote it folds and modifies eukaryotic proteins more accurately. Insect cells use baculoviruses, insect viruses that late in infection make huge amounts of two proteins, p10 and polyhedrin, neither needed in cultured cells — so both genes can be replaced by the gene you want, which is then produced at up to 25% of total protein. Mammalian cells in culture give the most faithful modification of all and can express transiently or permanently, but tissue culture is very expensive, so that route is used to test a protein's function in a living cell rather than to manufacture it.",
      cn: "**每一种宿主都是一笔取舍，而这笔交易永远是「折叠与修饰」换「成本」。**细菌（尤其是大肠杆菌）最常用：调控序列研究得很透、培养便宜、DNA 进出容易，发酵罐还能给出巨大产量。代价是：许多外源蛋白折叠不正确，许多得不到它们需要的翻译后修饰或蛋白酶切割，真核蛋白还经常聚集成不溶的沉淀，叫 inclusion body（包涵体） —— 蛋白一大堆，活性为零。表达量可以高到占细胞总蛋白的 10% 以上，而到了那个程度，有些外源蛋白会把宿主杀死，所以表达只能限制在收获前的几小时内。有两个细菌系统值得点名：乳糖操纵子启动子好用但是「漏」的 —— 没有乳糖时它也关不严，而当产物有毒时这就是个麻烦；噬菌体 T7 系统则把基因融合到一个 T7 启动子上，转录它的不是大肠杆菌自己的聚合酶，而是另行克隆、受严格调控的 T7 RNA 聚合酶，因此既高效又真正开关自如。酵母用同样的思路，靠 GAL1 和 GAL10 启动子 —— 在半乳糖中开、在葡萄糖中关，于是表达由培养基的选择来决定；而作为真核生物，它折叠和修饰真核蛋白也更准确。昆虫细胞用 baculovirus（杆状病毒），这是一类昆虫病毒，感染后期会大量制造 p10 和 polyhedrin 两种蛋白，而在培养细胞里这两者都不需要 —— 所以两个基因都可以换成你想要的基因，产量可高达总蛋白的 25%。哺乳动物细胞培养给出的修饰最忠实，而且可以瞬时表达也可以稳定表达，但组织培养非常昂贵，所以这条路是用来在活细胞里检验一个蛋白的功能，而不是用来生产它的。",
      src: "A p.309–311"
    },
    {
      link_en: "with the gene cloned and expressed, you can start asking it questions — one residue at a time",
      link_cn: "基因克隆到手、也表达出来了，就可以开始向它提问 —— 一次问一个残基",
      en: "Alter the DNA of a cloned gene and you alter the protein it makes. Site-directed mutagenesis is how you ask a protein what a single residue does. If suitable restriction sites flank the region of interest, cut that segment out and replace it with a synthetic one identical except for the change you want. When no convenient sites exist, use oligonucleotide-directed mutagenesis: denature the cloned gene, anneal two short complementary synthetic strands carrying the desired base change to opposite strands of the circular vector — a single mismatch in 30 to 40 bp does not prevent annealing — and let them prime synthesis in both directions around the plasmid; after several PCR cycles the mutation-containing DNA predominates and is used to transform bacteria. The worked case is the best kind: **RecA is a 352-residue protein whose Lys at position 72 is involved in ATP hydrolysis, and changing Lys72 to Arg gives a variant that binds ATP but cannot hydrolyse it** — exactly the tool needed to separate binding from hydrolysis in the protein's mechanism. Changes need not be small: whole domains can be deleted by cutting and religating, and parts of two different genes can be joined to give a fusion protein.",
      cn: "改动一个克隆基因的 DNA，就改动了它造出来的蛋白。site-directed mutagenesis（定点突变）就是你用来向一个蛋白提问「某一个残基到底在干什么」的手段。如果目标区域两侧正好有合适的酶切位点，就把那一段切出来，换上一段除了你想要的改动之外完全相同的合成序列。没有合适位点时，就用 oligonucleotide-directed mutagenesis（寡核苷酸定向突变）：把克隆基因变性，让两条互补的短合成链（带着你想要的碱基改动）分别退火到环形载体的两条链上 —— 30 到 40 bp 中只有一个错配并不会妨碍退火 —— 再让它们作为引物沿质粒双向合成；跑几轮 PCR 之后，含突变的 DNA 占了上风，用它去转化细菌即可。书上的实例是最好的那一类：**RecA 是一个 352 个残基的蛋白，其 72 位的 Lys 参与 ATP 水解；把 Lys72 换成 Arg，得到的变体能结合 ATP 却无法水解它** —— 这正是在该蛋白的机制里把「结合」和「水解」分开所需要的工具。改动也不必很小：整个结构域可以靠切开再连接而删除，两个不同基因的一部分也可以接在一起，得到 fusion protein（融合蛋白）。",
      src: "A p.312"
    },
    {
      link_en: "and to study the protein you must first hold it in your hand, purified",
      link_cn: "而要研究这个蛋白，你首先得把纯的它拿在手里",
      en: "Affinity chromatography is among the most efficient purification methods, and it needs the protein to bind a ligand that can be immobilised on a column — which most proteins do not. The fix is genetic: fuse the target gene to a gene encoding a peptide or protein that binds a simple, stable ligand tightly and specifically, so any protein at all becomes one the column can catch. The standard set: Protein A, 59 kDa, binds the Fc portion of IgG; (His)6, 0.8 kDa, binds Ni2+; glutathione-S-transferase, GST, 26 kDa, binds glutathione; maltose-binding protein, 41 kDa, binds maltose; β-galactosidase, 116 kDa, binds TPEG; and the chitin-binding domain, 5.7 kDa, binds chitin. GST shows the whole cycle: express the fusion protein, pass a crude extract through a column of glutathione immobilised on cross-linked agarose beads, wash everything else through, then elute gently with high salt or with free glutathione competing for the binding site. Two practical matters separate a good answer from a memorised one. **The larger tags, maltose-binding protein among them, add solubility and stability and can rescue a protein that would otherwise be inactive through misfolding.** And every tag is a risk: even a small one can perturb folding and therefore the result, and even after protease cleavage one or a few extra residues remain on the protein — so a tag's effect has to be controlled for rather than assumed absent.",
      cn: "亲和层析是效率最高的纯化方法之一，但它要求目标蛋白能结合某个可以固定在柱子上的配体 —— 而大多数蛋白并不能。解决办法是遗传学的：把目的基因与一个编码某种肽或蛋白的基因融合，后者能紧密而专一地结合一个简单、稳定的配体，于是任何蛋白都变成了柱子抓得住的蛋白。标准的一套是：Protein A，59 kDa，结合 IgG 的 Fc 部分；(His)6，0.8 kDa，结合 Ni²⁺；glutathione-S-transferase（谷胱甘肽-S-转移酶，GST），26 kDa，结合谷胱甘肽；maltose-binding protein（麦芽糖结合蛋白），41 kDa，结合麦芽糖；β-半乳糖苷酶，116 kDa，结合 TPEG；chitin-binding domain（几丁质结合结构域），5.7 kDa，结合几丁质。GST 展示了完整流程：表达融合蛋白，把粗提液过一根固定了谷胱甘肽的交联琼脂糖珠柱，其余东西全部流穿冲掉，再用高盐、或者用游离谷胱甘肽来竞争结合位点，温和地把目标洗脱下来。有两件实操上的事，把「答得好」和「背下来」区分开。**较大的标签（麦芽糖结合蛋白就是其一）能增加溶解度和稳定性，可以救回一个本来会因折叠错误而失活的蛋白。**而每一个标签都是风险：哪怕很小的标签也可能扰动折叠、从而扰动结果；即使用蛋白酶切掉，蛋白上仍会残留一两个多余的残基 —— 所以标签的影响必须做对照，不能想当然地认为它不存在。",
      src: "A p.313–314"
    },
    {
      link_en: "one last family of methods, all built on an enzyme that runs the central dogma backwards",
      link_cn: "最后一组方法，全都建立在一个把中心法则倒着跑的酶上",
      en: "Reverse transcriptase works like a DNA polymerase but copies an RNA template into DNA, which is what lets all three of the following reach the RNA in a cell rather than its genes. Reverse transcriptase PCR, RT-PCR, uses it for the first cycle and ordinary DNA polymerase thereafter; because only living cells are transcribing, RT-PCR distinguishes sequences from living cells from those of dead tissue. Quantitative PCR, qPCR or real-time PCR, counts instead: the reaction runs with a reporter oligonucleotide carrying both a fluorophore and a quencher, so it stays dark until it anneals to the amplified segment, which separates the two and lets fluorescence appear. The readout is CT, the cycle number at which fluorescence first crosses a set threshold — a sequence present in greater amount at the start reaches the threshold earlier, and a no-template control shows only slow background drift. And a cDNA library is built by extracting mRNA from an organism or from particular cells, copying it with reverse transcriptase, ligating oligonucleotides of known sequence to the 3' end of the first strand to prime second-strand synthesis, and cloning the double-stranded product into a vector — one cloned sequence per host cell, millions of cells, millions of segments. Its interpretive value is the whole reason to build one: **such a library contains no DNA that was not transcribed, so finding a gene in it means that gene was being expressed in those cells under those conditions.** A combinatorial gene library is the opposite in scope: many variants of one gene, made for example by amplifying a segment with a deliberately inaccurate DNA polymerase so each clone carries one or two random base changes — from which you select the improved enzyme variants, or simply read off which changes were tolerated.",
      cn: "reverse transcriptase（逆转录酶）的工作方式像 DNA 聚合酶，但它以 RNA 为模板合成 DNA —— 正是这一点，让下面三样东西能够触及细胞里的 RNA，而不只是它的基因。reverse transcriptase PCR（逆转录 PCR，RT-PCR） 在第一轮用它，之后交给普通 DNA 聚合酶；由于只有活细胞在转录，RT-PCR 能把来自活细胞的序列和来自死组织的序列区分开。quantitative PCR（定量 PCR，qPCR，也叫实时 PCR） 做的则是计数：反应体系里加了一条报告寡核苷酸，它同时带着一个 fluorophore（荧光基团） 和一个 quencher（淬灭基团），因此在退火到扩增片段之前是暗的；一旦退火上去，两者被分开，荧光就出现了。读数是 CT，即荧光首次越过设定阈值时的循环数 —— 起始量越多的序列越早到达阈值，而无模板对照只会显示缓慢的背景漂移。至于 cDNA library（cDNA 文库），做法是从某个生物、或某些特定细胞里提取 mRNA，用逆转录酶抄成 DNA，把已知序列的寡核苷酸连到第一条链的 3' 端以引发第二条链的合成，再把双链产物克隆进载体 —— 每个宿主细胞携带一条克隆序列，数以百万计的细胞，数以百万计的片段。建这样一个文库的全部意义就在于它的可解释性：**这种文库里不含任何未被转录过的 DNA，所以在其中找到一个基因，就意味着在那些细胞、那些条件下这个基因当时正在表达。**combinatorial gene library（组合基因文库）在范围上正好相反：它装的是同一个基因的许多变体，做法比如用一个刻意不准确的 DNA 聚合酶去扩增某一段，使每个克隆带上一两个随机碱基改动 —— 然后从中挑出性能改善的酶变体，或者干脆读出哪些改动被容忍、哪些不被容忍。",
      src: "A p.314–316"
    }
  ],
  terms: [
    { en: "restriction endonuclease", cn: "限制性内切酶",
      def_en: "A bacterial enzyme recognising a specific short palindromic sequence and cleaving DNA there. Its natural role is defence — it destroys incoming foreign DNA while the host's own copies of that sequence are protected by methylation. Type II enzymes, from Hamilton Smith in 1970, need no ATP and cut inside the recognition sequence itself, which is why they and not types I or III became the laboratory tool.",
      def_cn: "一种细菌酶，识别某个特定的短回文序列并在那里切开 DNA。它天然的角色是防御 —— 摧毁闯进来的外源 DNA，而宿主自身那些同样序列则由甲基化加以保护。1970 年 Hamilton Smith 分离的 II 型酶不需要 ATP，而且切在识别序列内部，所以成为实验室工具的是它，而不是 I 型或 III 型。" },
    { en: "sticky ends", cn: "黏性末端",
      def_en: "The two-to-four-nucleotide single-stranded overhangs left when a restriction endonuclease cuts the two strands in staggered fashion. Because the recognition sequence is palindromic, every fragment that enzyme cuts carries the same overhang, so any two of them anneal. Blunt ends, cut straight across, ligate less efficiently, and non-complementary overhangs generally do not ligate at all.",
      def_cn: "限制性内切酶错开切割两条链时留下的两到四个核苷酸的单链突出端。由于识别序列是回文的，同一种酶切出的每个片段都带着相同的突出端，因此任意两个都能退火配上。齐头切出的平末端连接效率更低，而互不互补的突出端一般根本连不上。" },
    { en: "cloning vector", cn: "克隆载体",
      def_en: "A small DNA molecule capable of autonomous replication, used to carry an inserted segment into a host cell and be copied there. It needs an origin of replication, at least one selectable marker and unique restriction sites to be cut open at; small size eases entry. pBR322 is the teaching example at 4,361 bp.",
      def_cn: "一个能自主复制的小 DNA 分子，用来把插入片段带进宿主细胞并在那里被复制。它需要一个复制起点、至少一个选择标记，以及可供切开的唯一酶切位点；体积小则更容易进入细胞。教学用的例子是 4,361 bp 的 pBR322。" },
    { en: "plasmid incompatibility", cn: "质粒不相容性",
      def_en: "Two plasmids using the same replication origin cannot be maintained in one cell, because the regulation of one interferes with the replication of the other. Since the origin also sets copy number — one to thousands per cell — the choice of origin decides both yield and whether two constructs can coexist.",
      def_cn: "两个使用同一复制起点的质粒无法在同一个细胞里共存，因为其中一个的调控会干扰另一个的复制。而由于复制起点同时决定拷贝数（每个细胞一个到数千个），起点的选择既决定产量，也决定两个构建体能否共存。" },
    { en: "selectable marker", cn: "选择标记",
      def_en: "A gene on a vector that lets a cell grow (positive selection) or kills it (negative selection) under defined conditions, typically antibiotic resistance. It exists because transformation is inefficient: rather than searching for the rare cell that took up the DNA, you create conditions in which only that cell survives. Distinguish a screenable marker, which harms nothing and merely colours the right colonies.",
      def_cn: "载体上的一个基因，在特定条件下让细胞得以生长（正选择）或把细胞杀死（负选择），典型的是抗生素抗性。它之所以存在，是因为转化效率很低：与其去搜寻那个摄入了 DNA 的稀有细胞，不如布置一套只有它能活的条件。要与筛选标记区分开 —— 后者不伤害细胞，只是把目标菌落染上颜色。" },
    { en: "blue-white screening", cn: "蓝白斑筛选",
      def_en: "A screenable marker system. The vector carries lacZ, encoding β-galactosidase, positioned so that an insert disrupts it. On plates with X-gal, colonies with intact lacZ convert the colourless X-gal to a blue product and turn blue; colonies whose lacZ was interrupted by the wanted insert stay white, and those are the ones to pick.",
      def_cn: "一种筛选标记系统。载体上带 lacZ（编码 β-半乳糖苷酶），位置安排得使插入片段恰好把它打断。在含 X-gal 的平板上，lacZ 完整的菌落把无色的 X-gal 转成蓝色产物而变蓝；被目标插入片段打断 lacZ 的菌落保持白色 —— 要挑的正是这些白色菌落。" },
    { en: "bacterial artificial chromosome", cn: "细菌人工染色体",
      def_en: "A plasmid vector engineered for very long inserts, typically 100,000 to 300,000 bp, where an ordinary plasmid tops out near 15,000 bp. It uses a stable origin holding one or two copies per cell — low on purpose, to limit recombination between copies that would scramble a large insert — plus par genes from the F plasmid so each daughter cell gets one, and both marker kinds.",
      def_cn: "为超长插入片段设计的质粒载体，通常装 100,000 到 300,000 bp，而普通质粒的上限约在 15,000 bp。它用一个稳定的复制起点把拷贝数压在每细胞一到两个 —— 刻意压低，以减少拷贝间重组把大插入片段搅乱的机会 —— 再加上取自 F 质粒的 par 基因保证每个子细胞都分到一份，两类标记也都齐备。" },
    { en: "yeast artificial chromosome", cn: "酵母人工染色体",
      def_en: "A vector holding everything a eukaryotic chromosome needs in a yeast nucleus — a yeast origin, a centromere, two telomeres and two selectable markers — and therefore able to carry inserts up to about 2 x 10^6 bp. Requiring both markers ensures only genuine arm-insert-arm constructs survive; inserts over 150,000 bp are nearly as stable as real chromosomes, and one missing a telomere is rapidly degraded.",
      def_cn: "一种在酵母细胞核中具备真核染色体全部必需件的载体 —— 酵母复制起点、一个着丝粒、两个端粒和两个选择标记 —— 因此可以携带最大约 2 x 10⁶ bp 的插入片段。要求两个标记同时具备，就保证只有真正「臂—插入片段—臂」的构建体能存活；插入片段超过 150,000 bp 时几乎和真染色体一样稳定，而缺了端粒的会被迅速降解。" },
    { en: "expression vector", cn: "表达载体",
      def_en: "A cloning vector that additionally carries the transcription and translation signals needed to make the protein rather than merely keep the gene: a promoter, an operator for repressor control, a ribosome-binding site and often a termination sequence. Necessary because a eukaryotic gene's own regulatory sequences do not work in a bacterium. The end encoding the amino terminus goes closest to the promoter.",
      def_cn: "一种克隆载体，额外带上了「造出蛋白」而不仅仅「存住基因」所需的转录与翻译信号：一个启动子、一个供阻遏蛋白调控的操纵基因、一个核糖体结合位点，往往还有一个终止序列。之所以必要，是因为真核基因自带的调控序列在细菌里不起作用。编码氨基端的那一端要放在离启动子最近处。" },
    { en: "inclusion bodies", cn: "包涵体",
      def_en: "The insoluble intracellular precipitates many eukaryotic proteins form when overexpressed in bacteria, because they fail to fold correctly there. They are the standard reason a bacterial expression attempt yields plenty of protein and no activity, and the standard argument for moving to yeast, insect or mammalian cells, or for using a large solubilising tag.",
      def_cn: "许多真核蛋白在细菌中过表达时形成的不溶胞内沉淀，原因是它们在那种环境里折叠不正确。它们正是「细菌表达做出一大堆蛋白却毫无活性」的标准原因，也是改用酵母、昆虫或哺乳动物细胞、或者加一个大的助溶标签的标准理由。" },
    { en: "site-directed mutagenesis", cn: "定点突变",
      def_en: "Deliberately changing specified residues of a protein by altering its cloned gene, either by swapping in a synthetic restriction fragment or, when no convenient sites exist, by annealing mutagenic oligonucleotides that prime synthesis around the plasmid. The worked case: RecA Lys72 to Arg gives a protein that binds ATP but cannot hydrolyse it.",
      def_cn: "通过改动克隆基因来有意改变蛋白中指定的残基：或者换进一段合成的限制性片段，或者在缺乏合适位点时，让带突变的寡核苷酸退火上去、作为引物绕质粒合成。书上的实例是：把 RecA 的 Lys72 换成 Arg，得到一个能结合 ATP 却不能水解它的蛋白。" },
    { en: "affinity tag", cn: "亲和标签",
      def_en: "A peptide or protein fused to a target by joining their genes, chosen because it binds a simple, stable, immobilisable ligand — so the fusion can be captured on a column and everything else washed away. Common ones: (His)6 on Ni2+, GST on glutathione, maltose-binding protein on maltose, protein A on the Fc of IgG. Large tags add solubility; every tag can perturb folding, and protease removal still leaves a residue or two behind.",
      def_cn: "通过把基因接在一起而融合到目标蛋白上的一段肽或一个蛋白，选它是因为它结合某个简单、稳定、可固定的配体 —— 于是融合蛋白能被柱子抓住，其余的全部冲走。常见的有：(His)6 结合 Ni²⁺、GST 结合谷胱甘肽、麦芽糖结合蛋白结合麦芽糖、Protein A 结合 IgG 的 Fc。大标签能增加溶解度；而任何标签都可能扰动折叠，即使用蛋白酶切掉也还会留下一两个残基。" },
    { en: "cDNA library", cn: "cDNA 文库",
      def_en: "A collection of clones made from a cell's mRNA with reverse transcriptase, therefore containing only sequences that were actually transcribed. That exclusion is its value: finding a gene in the library means that gene was being expressed in those cells under those conditions. Contrast a combinatorial gene library, which holds many random variants of a single gene for selecting improved forms.",
      def_cn: "用逆转录酶从细胞 mRNA 出发做出来的一批克隆，因此只含真正被转录过的序列。这种「排除」正是它的价值所在：在文库中找到某个基因，就意味着在那些细胞、那些条件下它当时正在表达。与之相对的是组合基因文库，里面装的是同一个基因的大量随机变体，用来筛选性能更好的形式。" }
  ]
};

/* END OF PART */

