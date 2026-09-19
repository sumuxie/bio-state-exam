/* _ans_micro_b.js —— Microbiology 三十二题的后一半（_qbank.js 里 micro 数组的 #16–#31），
   短口答，不是卡。

   2026-09-19 Ruojin 提的：Biochemistry 三十二题有整套卡，Microbiology 三十二题一张都没有，
   考试 2026-10-05，只剩十几天。做卡来不及（生化那一套做了几周），所以这一批只做
   「能出声说出来的三到五句」＋ 一两行中文：没有四段脚本、没有追问树、没有图、
   没有公式块、没有识别变体。写着写着开始像卡了，就停。
   前一半（#0–#15）在 _ans_micro_a.js，两个文件 concat 到同一个 window.ANS_MICRO。

   出处顺序：
     ① ../jiri_bank/data/ —— 同一批题目单做的题库，house answer。凡是它已经写过的说法就照它的，
        免得她把同一件事学两个版本。q_s3b.js 覆盖了我这十六题里的十三题，q_s4.js 两题，
        q_s2.js 一题（生长曲线，导师那条把「描述曲线」和「怎么做实验」合成一条）。
     ② ../PESB/ 与 ../pesbexplain/ —— 她上过的 Protein Engineering 课。跟微生物学只有零星重叠：
        周质、溶菌酶切肽聚糖、质粒节点 1-9。jiri_bank 里好几条 micro 条目自己标的 sourceNodes
        （2-1 六大表达系统、2-2 无细胞蛋白合成）跟内容对不上，所以不算出处。
     ③ 通用微生物学 —— 前两项给不出的，中文行里明写 general，办法照 taq.js 那张卡。
   ⛔ 捷克生化书不是这里的出处：它讲生化，不讲微生物学，book/pages 一页都不要引。

   字段：q 逐字抄自 _qbank.js（两半要能对回导师的题目单）· en 出声说的英文，
   全文只有它在弯引号里面 · cn 一两行中文：轴 ＋ 出处 · warn 可选，只在真有坑的地方写。 */

window.ANS_MICRO = (window.ANS_MICRO || []).concat([

{q:'Describe the structure and function of bacterial cell walls.',
 en:'“The bacterial cell wall is made of peptidoglycan, also called murein: chains of two alternating sugars, N-acetylglucosamine and N-acetylmuramic acid, cross-linked to each other by short peptides. The cross-links are made by transpeptidases, and those enzymes are exactly what beta-lactam antibiotics inhibit. The function is mechanical and it also sets cell shape, because a bacterium is hypertonic relative to its surroundings, so water flows in and the wall is the only thing stopping lysis. In a Gram-positive cell the peptidoglycan is a thick layer outside a single membrane, with teichoic acids running through it. In a Gram-negative cell it is a thin layer in the periplasm, between an inner membrane and an outer membrane whose outer leaflet is lipopolysaccharide.”',
 cn:'轴：肽聚糖抗的是膨压；革兰氏的区别是建筑上的区别，染色和药物通透性都从它来。出处 jiri_bank q_s3b「S3 Micro 2」（house answer）；PESB 只沾到两处（周质、溶菌酶切肽聚糖），其余按 general 通用微生物学说。',
 warn:'⚠ 别说革兰氏阴性菌「没有肽聚糖」——它有，只是薄，夹在内外膜之间的周质里。外膜那句话后面接的是 LPS 的 lipid A ＝ 内毒素，他很容易追过去。'},

{q:'Explain the concept of antibiotic resistance.',
 en:'“Antibiotic resistance is the ability of a bacterium to grow at a drug concentration that inhibits other members of its species. The point to make early is that the antibiotic does not create resistance, it selects for variants that are already in the population. There are four mechanisms: destroy the drug, modify the drug, alter the target, or keep the drug out by low permeability and efflux pumps. Beta-lactamase destroys ampicillin, kanamycin is inactivated by being phosphorylated, a point mutation in DNA gyrase gives ciprofloxacin resistance, and an efflux pump often covers several unrelated drugs at once. Resistance arises by mutation or by horizontal gene transfer, and transfer dominates clinically because a resistance gene on a conjugative plasmid crosses between species in one step.”',
 cn:'轴：抗生素不制造耐药，它筛选。四个机制各配一个她天天在用的药，正好接回第一张卷子上 ampicillin / kanamycin / ciprofloxacin 那道题。出处 jiri_bank q_s3b「S3 Micro 11」，内容 general。',
 warn:'⚠ 遗传性的 resistance 跟生物膜里的 tolerance 不是一回事，别混着说（见 biofilms 那条）。'},

{q:'Explain the different methods of bacterial reproduction.',
 en:'“Bacteria reproduce by binary fission, and that is essentially the whole answer. The chromosome replicates from a single origin, the two copies move to opposite poles, and a septum forms at mid-cell to give two identical daughter cells. Because it is asexual, a colony is the clonal progeny of one cell, which is what makes streaking for single colonies a purification method. A few species bud and filamentous bacteria fragment, but those are minor variants. Then say what is not reproduction: transformation, transduction and conjugation are horizontal gene transfer, and sporulation gives one spore from one cell, so neither raises the cell number.”',
 cn:'轴：繁殖只有二分裂；水平基因转移和芽孢都不算繁殖，这一句才是考官在等的。出处 jiri_bank q_s3b「S3 Micro 6」——那条自己也没有源节点，是现写的 general。'},

{q:'Explain the principle of PCR and its applications in microbiology.',
 en:'“PCR is the exponential copying of one defined stretch of DNA, driven by a repeated cycle of three temperatures. Denaturation near ninety-five degrees separates the strands, annealing at a temperature set by the primers lets two primers bind facing each other, and extension near seventy-two degrees lets a thermostable polymerase build the new strands. The two primers define both ends of the product, so specificity is a matter of primer design, and because every product becomes a template the amount doubles every cycle. In microbiology the applications are mostly diagnostic rather than preparative. Amplifying the 16S ribosomal RNA gene with universal primers and sequencing that product names the organism without culturing it, and quantitative PCR gives viral load or bacterial burden from the cycle at which fluorescence crosses a threshold.”',
 cn:'轴：原理是三个温度 ＋ 引物划定两端；微生物学的用法是诊断（16S 免培养鉴定、qPCR 定量、查耐药基因和毒素基因），不是克隆。出处 jiri_bank q_s4「S3 Micro 19」。九十五度和七十二度是通用的工作温度，不是从哪本书抄的数。',
 warn:'⚠ 终点 PCR 会到平台期，最后多少取决于哪个试剂先用完，不是起始模板量。胶上有带只能说「有」，不能说「多」——要定量就得 qPCR。'},

{q:'Explain the role of quorum sensing in bacterial communication.',
 en:'“Quorum sensing is cell-density-dependent gene regulation, carried by a small diffusible signal molecule called an autoinducer. Every cell makes the autoinducer constantly and releases it, so the outside concentration stays dilute when the population is sparse and rises as the population grows. Above a threshold concentration the autoinducer binds a regulator inside the cell and switches on a set of genes, and because the regulator usually raises autoinducer synthesis too, the switch turns on sharply rather than gradually. The logic is economic, since some behaviours only pay off collectively and one cell alone gains nothing by secreting a toxin or building a biofilm. The classic cases are bioluminescence in Vibrio fischeri, virulence factor expression, biofilm formation and competence, and Gram-negative bacteria typically signal with acyl-homoserine lactones while Gram-positive bacteria use peptides.”',
 cn:'轴：阈值 ＋ 正反馈＝一个开关，不是渐变；集体行为才划算，所以病原菌人少的时候先不出毒力因子。出处 jiri_bank q_s3b「S3 Micro 15」，无源节点，general。',
 warn:'⚠ 只说「细菌之间会交流」拿不到分。他在听三个词：autoinducer、阈值、正反馈。'},

{q:'How do you identify bacteria using biochemical tests?',
 en:'“Each biochemical test asks whether the organism has one particular enzyme or metabolic capability, and it is the pattern of answers, not any single test, that identifies the species. You start from a pure culture and a Gram stain, because those already narrow the field before any biochemistry. Then you run a panel: catalase separates staphylococci from streptococci, oxidase separates Pseudomonas from the Enterobacteriaceae, and coagulase separates Staphylococcus aureus from the other staphylococci. Sugar fermentation on differential media is read as a colour change of a pH indicator, and in practice the whole panel is a commercial multi-test strip read as a numeric profile against a database. The limitation is that the organism must be culturable and must behave typically, and the method resolves less finely than 16S sequencing.”',
 cn:'轴：单个反应什么也不能定，是「组合」认菌，所以答题先说组合再报试验名。出处 jiri_bank q_s3b「S3 Micro 18」；试验名和菌名 general。最后一句的诚实限制正好接回上一题（测序为什么取代了它）。',
 warn:'⚠ 必须先有纯培养：混样里一株过氧化氢酶阳性、一株阴性，试验只会报阳性——一个很自信的错答案。'},

{q:'How do you isolate and culture bacteria from a sample?',
 en:'“The goal is a pure culture, and the operational definition of pure is a single well separated colony, because a colony is the clonal progeny of one colony-forming unit. The standard route is streak plating, which is really a dilution performed with a loop instead of a pipette. You flame the loop between sectors, so each sector starts only from what the loop carried over, and by the third or fourth sector the cells are far enough apart to grow as separate colonies. Choosing the medium is choosing what you will be able to see, since a selective medium suppresses everything except your target while a differential medium lets several organisms grow but makes them look different. Then you incubate at the right temperature and atmosphere, pick a single colony and re-streak it to confirm purity, and you keep an uninoculated control plate to prove the aseptic technique held.”',
 cn:'轴：划线不是「画图案」，是用接种环做的梯度稀释；选培养基就是在选你能看见什么。出处 jiri_bank q_s4「S3 Micro 7」（house answer）。'},

{q:'How do you perform a bacterial growth curve experiment?',
 en:'“You inoculate a flask of medium from a fresh overnight culture, incubate it with shaking at the growth temperature, and take samples at fixed time intervals. For each sample you measure the optical density at 600 nanometres against a blank of sterile medium, and you plot the logarithm of that value against time. Optical density measures light scattering, so it counts live and dead cells together, and a viable count by serial dilution and plating is added when that distinction matters. The plot should show the four phases: lag, exponential, stationary and death. Two practical points: dilute the sample once the reading leaves the linear range of the spectrophotometer, and sample often enough during exponential phase to fit a straight line and get a doubling time.”',
 cn:'轴：定时取样、测 OD600、对数作图，再补一条活菌计数。OD600 的说法照 jiri_bank q_s2「S2 Basic 4」；四个期照 q_s2 那条「S2 Micro 11 · S3 Micro 13」——导师把「描述曲线」和「怎么做实验」当成同一条，所以这一题说完四个期要接上做法。',
 warn:'⚠ OD 是散射不是细胞数，活的死的一起算。读数超出分光光度计线性范围要先稀释再读，然后乘回稀释倍数。'},

{q:'How do you perform a Gram stain?',
 en:'“A Gram stain is four steps, and the third one is the step that actually does the work. You flood a heat-fixed smear with crystal violet so everything goes purple, then add iodine as a mordant to form a large crystal violet iodine complex inside the cell. Then you decolourise briefly with alcohol or acetone, and this is the timed and critical step. In a Gram-positive cell the thick peptidoglycan dehydrates and traps the complex, while in a Gram-negative cell the alcohol dissolves the lipid outer membrane and the thin wall cannot hold the complex. Finally you counterstain with safranin, so Gram-positive cells read purple and the now colourless Gram-negative cells read pink.”',
 cn:'轴：前两步把两类染成一样，后一步只给脱色剂洗掉的那些上色——所以壁厚的差别只在第三步表达出来。出处 jiri_bank q_s3b「S3 Micro 4」。',
 warn:'⚠ 脱色过头，阳性菌读成阴性；培养物太老也一样（老的阳性菌壁受损，留不住染料）。这是这道题唯一的失分点，一定要主动说出来。'},

{q:'What are bacteriophages and how do they infect bacteria?',
 en:'“Bacteriophages are viruses that infect bacteria, so each one is a nucleic acid genome inside a protein capsid, with no metabolism of its own. Infection begins with adsorption to a specific surface receptor, and that receptor is what sets the host range. The genome is then injected while the capsid stays outside, which is the observation behind the Hershey and Chase experiment. After that the phage runs one of two programmes: in the lytic cycle the host machinery is redirected to make phage components, these assemble, and the cell lyses to release progeny. In the lysogenic cycle the genome integrates into the host chromosome as a prophage and is copied passively until a stress signal induces the lytic cycle, and a temperate phage can do both.”',
 cn:'轴：吸附的受体决定宿主范围；裂解 vs 溶原两条路。出处 jiri_bank q_s3b「S3 Micro 10」，无源节点，general。溶原正是 DE3 的原理（染色体上一个 λ 原噬菌体，带 lacUV5 控制的 T7 RNA 聚合酶），他很可能顺着问过去；另一头是 transduction。',
 warn:'⚠ 别说噬菌体「钻进细胞」——进去的只有核酸，衣壳留在外面，这正是 Hershey-Chase 看到的那件事。'},

{q:'What are biofilms and their significance in microbiology?',
 en:'“A biofilm is a community of microorganisms attached to a surface and embedded in a matrix they produce themselves, and that matrix is extracellular polymeric substances: polysaccharide, protein and extracellular DNA. Formation runs as a sequence of reversible attachment, irreversible attachment, matrix production and maturation, then dispersal of cells that go on to seed new sites. The significance is that cells in a biofilm behave differently from the same cells in liquid culture, and they are far more resistant to antibiotics and disinfectants. The matrix limits penetration, the cells deep inside grow slowly and so escape drugs that only act on growing cells, and some cells are dormant persisters. That resistance is physiological rather than genetic, so a standard susceptibility test on free-swimming cells underestimates what a biofilm infection needs, and this is why catheters, implants and heart valves are so hard to clear.”',
 cn:'轴：同一株菌在基质里和在摇瓶里是两种行为。出处 jiri_bank q_s3b「S3 Micro 14」，无源节点，general。要接的话：生物膜是群体感应调控的，所以这两题最好连着背。',
 warn:'⚠ 生物膜的抗药是 tolerance——生理性的、可逆的，打散之后同一批细胞又敏感了；遗传性 resistance 是遗传的。常规药敏试验测的是游离细胞，测不出这一层。'},

{q:'What are plasmids and their role in bacteria?',
 en:'“A plasmid is an extrachromosomal DNA molecule, usually circular, that replicates independently of the chromosome, and that independence is the defining property, because the plasmid carries its own origin of replication. Biologically it carries accessory genes that are not needed for growth but pay off in particular conditions: antibiotic resistance, virulence factors, extra metabolic capabilities, and the transfer functions of a conjugative plasmid. That makes plasmids a major vehicle of horizontal gene transfer and the main reason antibiotic resistance spreads so fast. In the laboratory a plasmid is the standard vector, and the parts to name are the origin that sets copy number, a selectable marker, and a multiple cloning site. An expression plasmid adds a promoter, a ribosome binding site and often a purification tag.”',
 cn:'轴：自带复制起点 ＝ 独立复制，这是定义性质，先说它；附属基因那一段接水平基因转移。出处 jiri_bank q_s3b「S3 Micro 3」，源节点是 PESB 1-9「质粒——克隆型 vs 表达型，以及复制起点」——这一条是这十六题里出处最实的一条。',
 warn:'⚠ 同一个复制起点的两个质粒不相容：共转化也维持不住，几代之后群体就分成各带一个。高拷贝起点给产量，低拷贝起点留给大的或有毒的构建。'},

{q:'What are the different types of bacterial metabolism?',
 en:'“Bacterial metabolism is classified along two independent axes, the carbon source and the energy source, and combining them gives the names. The carbon axis separates autotrophs, which fix carbon dioxide, from heterotrophs, which use organic carbon. The energy axis separates phototrophs on light from chemotrophs on chemical oxidation, and chemotrophs split again into lithotrophs using inorganic donors such as ammonia or sulfur and organotrophs using organic ones. Combining them gives cyanobacteria as photoautotrophs, nitrifying and sulfur bacteria as chemolithoautotrophs with no eukaryotic equivalent, and Escherichia coli and most bacteria you handle as chemoorganoheterotrophs. A separate axis is the terminal electron acceptor, so aerobic respiration uses oxygen, anaerobic respiration uses nitrate, sulfate or fumarate instead, and fermentation has no electron transport chain and regenerates NAD plus with an internal organic acceptor.”',
 cn:'轴：两个轴交叉出名字，第三个轴是末端电子受体；最后再补一句耐氧分类（专性需氧、专性厌氧、兼性厌氧、微需氧）。出处 jiri_bank q_s3b「S3 Micro 17」，无源节点，general。',
 warn:'⚠ 厌氧呼吸不是发酵：厌氧呼吸照样有电子传递链，只是末端受体不是氧，所以 ATP 产量可观；发酵根本没有链，内部有机受体只是用来把 NAD 再生出来。'},

{q:'What are the mechanisms of action of different classes of antibiotics?',
 en:'“Organise the answer by target, which gives five groups, and the unifying principle is selective toxicity: each one hits something bacteria have and we do not. Cell wall synthesis is hit by beta-lactams, which inhibit the transpeptidase that cross-links peptidoglycan, and by glycopeptides such as vancomycin, which bind the peptide precursor itself. Protein synthesis is hit on the 30S subunit by aminoglycosides and tetracyclines and on the 50S subunit by macrolides and chloramphenicol, and the selectivity comes from the bacterial ribosome differing from ours. Nucleic acid synthesis is hit by fluoroquinolones on DNA gyrase and topoisomerase IV, and by rifampicin on the bacterial RNA polymerase. Folate synthesis is blocked at two successive steps by sulfonamides and trimethoprim together, and polymyxins act on the Gram-negative outer membrane itself.”',
 cn:'轴：按靶点分组，统一原理是 selective toxicity，开口第一句就把这两件事说掉。出处 jiri_bank q_s3b「S3 Micro 12」。叶酸那一组：选择性在于细菌必须自己合成叶酸、我们从食物里拿；磺胺和甲氧苄啶合用是因为堵同一条路的两个相邻步骤，协同，而且要耐药得改两处。',
 warn:'⚠ beta-lactam 只对正在生长的细胞有效——不分裂的细胞不裂解，因为药挡的是新壁的建造，不是拆已有的壁。还有 30S 和 50S 别记反。'},

{q:'What is the importance of aseptic technique in microbiology?',
 en:'“Aseptic technique protects in two directions at once: it keeps contaminants out of your culture, and it keeps your organism out of you and out of the environment. The first matters because microbiology is done on pure cultures, so a contaminant that grows faster than your organism takes over and every result afterwards is about the wrong species. You cannot see contamination until it is established, so prevention is the only control you have. In practice you work near a flame or in a laminar flow hood, flame the loop before and after each transfer, and flame the neck of the bottle when you open it. You hold the cap in your hand instead of putting it down, you disinfect the bench before and after, and you verify the whole thing with an uninoculated negative control incubated alongside.”',
 cn:'轴：两个方向同时防；污染在成形之前看不见，所以只有预防这一个手段。要说的是道理不是清单：空气、台面、手、自己的器材都是来源，每一条规矩各堵一个。出处 jiri_bank q_s3b「S3 Micro 8」。',
 warn:'⚠ 阴性对照长了，这个实验就作废，不是「结果打个折扣」。同理，板子上冒出另一种形态的菌落也是作废。'},

{q:'What is the significance of the bacterial capsule?',
 en:'“A capsule is an organised polysaccharide layer outside the cell wall, and it differs from a loose slime layer by being firmly attached. Its significance is mostly virulence, because it resists phagocytosis: a phagocyte cannot get a grip on a slippery hydrated polysaccharide surface, and the capsule also hides the surface antigens underneath from antibodies. It protects against drying and against complement as well, and it mediates adhesion and biofilm formation. The capsule is what Griffith’s transformation experiment turned on, since the encapsulated smooth pneumococci were lethal and the rough ones were not. It is also the basis of conjugate vaccines, which link capsular polysaccharide to a carrier protein and turn a weak response into a lasting one.”',
 cn:'轴：意义主要是毒力——抗吞噬 ＋ 挡抗体，后面接 Griffith 和结合疫苗两个落点。出处 jiri_bank q_s3b「S3 Micro 5」。追问「怎么看见荚膜」就答墨汁或苯胺黑负染：荚膜把染料排开，暗背景上显出一圈亮环。',
 warn:'⚠ 纯多糖疫苗是 T 非依赖应答：没有记忆、婴儿身上无效——这正是为什么要做成 conjugate（Hib、肺炎球菌疫苗就是这么来的）。'}

]);
