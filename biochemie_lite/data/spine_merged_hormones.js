/* Merged topic spines — hormones. 速通简洁版.

     key:hormone-structure-and-action   10-17 10-18 10-19 10-20 10-21 10-22 10-23
                                        10-24 10-25 10-26 L-12-1-1 L-12-3-1 L-23-3-1
     key:tissue-specific-metabolism     10-10 L-23-2-1

   The first key is the largest untouched topic in the app: thirteen member nodes,
   ten of them Czech §10.3 read page by page and three of them Lehninger. Three
   members already had spines of their own — L-12-1-1 (13 steps), L-12-3-1 (7) and
   L-23-3-1 (14) — and those are used as the backbone wherever they cover the same
   ground. The remaining ten Czech nodes are converted from their own source.

   Length is set by the material and not by a step count. The reader's instruction
   is 不要缺失任何节点 — 急速简化成主线不代表同意删除任何内容 — so every named
   hormone, every organ column of Tab. 10.1, every Mr value, every abbreviation and
   every residue is carried. Thirteen nodes come to 34 steps; two nodes come to 17.

   `src` letter "B" is the Czech textbook, cited by section and printed page; "A" is
   Lehninger 8, cited by its own page numbers. A step never carries a page it was
   not read from. Nothing here is written from memory.

   Reach-back is real and checked: key:gene-regulation-proteins carries the nuclear
   hormone receptor and the hormone response element, key:metabolic-regulation
   carries induction/repression, allosteric negative feedback and covalent
   modification, and key:obesity-and-body-mass and key:diabetes-mellitus lean on the
   hormone action set out here. Nothing below contradicts them.

   House style is SPINE_SPEC.md: one claim per step, every noun introduced where it
   is first used, every structural claim followed by its consequence, and exactly
   ONE `**` run per `en` and per `cn` — the app has a compact mode that shows only
   the bolded run, so each one must read as a complete statement on its own. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ========================================= hormone structure and action ==== */
window.BIOLITE_SPINE["key:hormone-structure-and-action"] = {
  assumed: ["cell", "blood", "tissue", "organ", "gland", "protein", "enzyme", "gene",
            "dna", "transcription", "translation", "nucleus", "membrane",
            "plasma membrane", "cell membrane", "receptor", "hormone", "ligand",
            "atp", "adp", "amp", "gtp", "phosphate", "pyrophosphate",
            "phosphorylation", "phosphorylated", "kinase", "protein kinase",
            "tyrosine", "serine", "threonine", "tyrosine kinase", "amino acid",
            "peptide", "protein synthesis", "residue", "amide", "disulfide",
            "cysteine", "cystine", "glycine", "glycoprotein", "second messenger",
            "cyclic amp", "camp", "cgmp", "adenylyl cyclase", "adenylate cyclase",
            "phosphodiesterase", "phospholipase c", "protein kinase c",
            "diacylglycerol", "inositol", "phosphatidylinositol", "arachidonate",
            "arachidonic acid", "stearate", "fatty acid", "lipid", "membrane lipid",
            "steroid", "steroid hormone", "cholesterol", "hydroxyl", "aldehyde",
            "ketone", "aromatic", "methyl group", "acetyl", "indole", "methoxy",
            "iodine", "calcium", "sodium", "potassium", "ion", "ion channel",
            "calcium channel", "membrane potential", "depolarisation", "neuron",
            "neurotransmitter", "sensory neuron", "brain", "retina", "rod cell",
            "g protein", "gtp-binding protein", "transducin", "rhodopsin",
            "arrestin", "chromophore", "conformational change", "transcription factor",
            "growth factor", "insulin", "glucagon", "epinephrine", "adrenaline",
            "noradrenaline", "dopamine", "serotonin", "melatonin", "thyroxine",
            "cortisol", "aldosterone", "corticosterone", "progesterone",
            "testosterone", "estradiol", "estrogen", "oxytocin", "vasopressin",
            "prolactin", "erythropoietin", "erythrocyte", "parathormone",
            "calcitonin", "somatotropin", "acth", "tsh", "fsh", "lh", "msh", "adh",
            "hcg", "thyroglobulin", "hypophysis", "pituitary", "hypothalamus",
            "adrenal gland", "adrenal cortex", "adrenal medulla", "thyroid",
            "thyroid gland", "parathyroid", "pancreas", "ovary", "testis", "testes",
            "placenta", "kidney", "uterus", "mammary gland", "pineal gland",
            "corpus luteum", "follicle", "sperm", "ovum", "germ cell", "melanin",
            "glucose", "blood glucose", "blood sugar", "glycogen", "glycolysis",
            "gluconeogenesis", "glycogenolysis", "lipolysis", "steroidogenesis",
            "metabolism", "basal metabolism", "stress", "blood pressure", "pulse",
            "diuresis", "lactation", "pregnancy", "embryogenesis", "affinity",
            "dissociation constant", "concentration", "half-life", "cascade",
            "prostaglandin", "prostacyclin", "thromboxane", "leukotriene",
            "eicosanoid", "icosanoid", "vision", "olfaction", "gustation",
            "glut4", "glut2", "vesicle", "exocytosis", "starvation", "fasting", "meal",
            "glucokinase", "beta cell", "flux", "cytosol", "potassium channel",
            "calcium channel", "voltage-gated", "depolarisation", "depolarization",
            "sulfonylurea", "sulfonylureas", "diabetes", "diabetes mellitus",
            "fructose 2,6-bisphosphate", "pfk-1", "fbpase-1", "perilipin",
            "lipid droplet", "lipase", "adipose tissue", "glycogen",
            "cushing disease", "addison disease", "haemorrhage", "hemorrhage",
            "infection", "muscle", "liver", "adipose tissue", "bone", "skin",
            "molecular weight", "subunit", "dimer", "monomer", "octamer"],
  nodeTitle_en: "Hormones — structure, the four mechanisms of action, and the four chemical classes",
  nodeTitle_cn: "激素——结构、四种作用机制与四大化学分类",
  title_en: "A hormone reaches every cell the blood reaches and only the equipped ones answer — four mechanisms of answering, four chemical classes of signal, and one blood glucose number they exist to defend",
  title_cn: "激素流到血液所及的每一个细胞，只有装备齐全的那些才作答 —— 四种作答机制、四类化学信号，以及它们为之存在的那一个血糖数字",
  terms: [
    { en: "target cell", cn: "靶细胞",
      def_en: "A cell containing the receptor for a given hormone. Possession of that receptor, and not exposure to the hormone, is what makes a cell one: the signal goes everywhere the blood goes, so specificity is a property of the receiver.",
      def_cn: "含有针对某一激素之受体的细胞。使一个细胞成为靶的，是它「拥有那个受体」，而不是它「接触到了激素」：信号随血液流到所有地方，所以特异性是接收方的属性。" },
    { en: "glandotropic versus peripherally effective hormone", cn: "促腺激素与外周有效激素",
      def_en: "The two rungs of the gland hierarchy. A tropic hormone — ACTH, TSH, FSH, LH — has another gland as its target and switches that gland on; a peripherally effective hormone such as cortisol or thyroxin acts on the tissues themselves and inhibits the two levels above it.",
      def_cn: "腺体层级中的两级。促（tropic）激素 —— ACTH、TSH、FSH、LH —— 的靶是另一个腺体，负责把那个腺体打开；外周有效激素（如皮质醇、甲状腺素）作用于组织本身，并回过头去抑制它上方的两个层级。" },
    { en: "the four mechanisms of hormone action", cn: "激素作用的四种机制",
      def_en: "The adenylyl cyclase cascade raising cyclic AMP; the phosphoinositide cascade cutting one membrane lipid into two messengers; the receptor tyrosine kinase, where the receptor is itself the enzyme; and the nuclear route, where the hormone walks into the cell and its receptor is a DNA-binding protein. Only the last makes new protein rather than modifying protein already present.",
      def_cn: "腺苷酸环化酶级联（提高环化 AMP）；磷酸肌醇级联（把一种膜脂切成两个信使）；受体酪氨酸激酶（受体自己就是酶）；以及核内路线（激素直接走进细胞，其受体是一个结合 DNA 的蛋白）。只有最后一条产出新的蛋白，而不是修饰已经在场的蛋白。" },
    { en: "the four chemical classes", cn: "四大化学分类",
      def_en: "Steroid hormones; hormones derived from amino acids; peptide hormones and proteohormones; and icosanoids, which contain 20 carbon atoms, from the Greek eikosi meaning twenty. This division does not correspond one to one with the division by mechanism, and confusing the two is the commonest mistake the chapter invites.",
      def_cn: "类固醇激素；由氨基酸衍生的激素；肽类激素与蛋白类激素；以及二十烷酸类（含 20 个碳原子，「eikosi」在希腊语中意为二十）。这一分类与按机制的分类并非一一对应，把两者混为一谈是本章最容易引出的错误。" },
    { en: "prohormone", cn: "激素原",
      def_en: "An inactive precursor secreted by the gland and activated elsewhere. Thyroxin is the case: the active hormone is 3,5,3′-triiodothyronine, the same structure carrying one iodine atom fewer, so the periphery activates on demand what the thyroid shipped inert.",
      def_cn: "由腺体分泌、在别处才被激活的无活性前体。甲状腺素就是例子：活性激素是 3,5,3′-三碘甲状腺原氨酸，结构相同、只少一个碘原子 —— 腺体运出的是惰性的，外周按需把它激活。" }
  ],
  steps: [
    {
      en: "Hormonal control means influencing tissues or cells with specifically effective substances called hormones, formed in specialized glands, tissues or cells. **A hormone is either secreted into the blood circulation or acts on the cells surrounding the one that made it, so a single definition already covers both long-range and local signalling.** Nothing in that definition says which cells will answer.",
      cn: "激素调控（hormonal control）就是用具有特异作用的物质 —— 激素 —— 去影响组织或细胞；激素在特化的腺体、组织或细胞中生成。**激素要么被分泌进血液循环，要么就作用于制造它的那个细胞周围的细胞 —— 一个定义已经同时涵盖了远距离信号与局部信号两种方式。**这个定义里没有任何一句说明「哪些细胞会作出回答」。",
      src: "B §10.3, p.222"
    },
    {
      link_en: "the gland that makes a hormone is itself run by a hormone",
      link_cn: "制造激素的那个腺体，自己也被激素管着",
      recall_en: "the same negative feedback as an end product inhibiting the first enzyme of its own pathway, scaled up from a molecule to a chain of organs",
      recall_cn: "和「终产物抑制自己那条通路开头那个酶」是同一种负反馈，只是从一个分子放大成一串器官",
      en: "The activity of a hormonal gland is itself controlled hormonally, and for cortisol that hierarchy has three levels: the diencephalon produces a neurosecretion, which acts on the hypophysis; the hypophysis produces a glandotropic hormone, which acts on the adrenal cortex; the adrenal cortex produces cortisol, which acts on the tissues. **One inhibition arrow runs back from cortisol to the hypophysis and to the diencephalon at once, so the end product shuts its own production down at two levels above itself rather than at one.**",
      cn: "激素腺体自身的活动也受激素调控；就皮质醇而言，这个层级有三层：间脑产生神经分泌物，作用于垂体；垂体产生促腺激素，作用于肾上腺皮质；肾上腺皮质产生皮质醇，作用于组织。**有一条抑制箭头从皮质醇同时回指垂体与间脑 —— 终产物是在它上方的两个层级上关闭自己的生产，而不是只在一个层级上。**",
      src: "B §10.3, p.223"
    },
    {
      link_en: "so which cells answer, given that the blood reaches all of them?",
      link_cn: "那么，既然血液流到所有细胞，究竟哪些细胞会作答？",
      en: "Most hormones act only on certain organs, tissues or cells, and those are called target cells. **A target cell is defined by what it has, not by where the hormone went: only a target cell carries receptors for that hormone, so specificity is a property of the receiving cell and not of the signal.** A hormone reaches everywhere the blood reaches, and the equipped cells alone respond — which is the single idea the rest of this chain keeps cashing out.",
      cn: "大多数激素只作用于某些器官、组织或细胞，这些被称为靶细胞（target cell）。**靶细胞是由「它拥有什么」定义的，而不是由「激素去了哪里」定义的：只有靶细胞带着针对该激素的受体，所以特异性是接收细胞的属性，而非信号的属性。**激素抵达血液所及之处，只有装备齐全的细胞才作出反应 —— 这一条，是本链条后面反复兑现的那个唯一的想法。",
      src: "B §10.3, p.223"
    },
    {
      link_en: "and what a receiving cell actually does with a signal has one name",
      link_cn: "而接收细胞对一个信号所做的事，有一个统一的名字",
      en: "A signal arriving at a cell is information, and the cell's job is to turn that information into a chemical change. **Turning information into chemistry is what the term signal transduction names, and Lehninger calls it a universal property of living cells.** It runs in four steps: a ligand — the molecule carrying the signal — binds its receptor; the activated receptor acts on the cell's own machinery; the metabolism of that cell changes; and the transduction event ends. Learn it as four steps and not three, because a signal that cannot be switched off leaves the cell stuck in one state for good.",
      cn: "到达细胞的信号是信息，而细胞的工作是把这份信息变成一个化学变化。**把信息转换成化学，就是「信号转导（signal transduction）」这个词所指的东西；Lehninger 称它是活细胞的普遍性质。**它分四步走：配体（ligand，携带信号的那个分子）结合它的受体；被激活的受体作用于细胞自身的机器；这个细胞的代谢发生改变；转导事件结束。要按四步记而不是三步 —— 因为一个关不掉的信号，会让细胞永远卡在同一个状态里。",
      src: "A pp.408–411"
    },
    {
      link_en: "every signalling system there is shares eight properties, and the first four say what the arrangement buys",
      link_cn: "所有信号系统共有八个性质；前四个说的是「这套安排换来了什么」",
      en: "Specificity: the ligand fits the binding site of its complementary receptor, and other molecules in the same fluid do not fit. Sensitivity: the receptor holds its ligand with high affinity — a low dissociation constant — so a very dilute signal already fills the receptors, and a gland need not make much. **Amplification: an enzyme activates an enzyme which activates another enzyme, so the number of affected molecules grows geometrically, which is the whole reason a pathway is built as a cascade.** Modularity: multivalent proteins, meaning proteins carrying several binding surfaces at once, assemble different complexes from the same interchangeable parts, and phosphorylation supplies interaction points that can be made and removed at will.",
      cn: "特异性：配体正好嵌进与之互补的受体的结合位点，而同一份体液里的别的分子嵌不进去。敏感性：受体以很高的亲和力抓住配体 —— 即解离常数很低 —— 所以极稀的信号就已经把受体填满，腺体不必生产很多。**放大：一个酶激活一个酶，那个酶再激活另一个酶，于是受影响的分子数呈几何级数增长 —— 这就是通路之所以被造成级联的全部理由。**模块化：多价蛋白（同时带着好几个结合面的蛋白）用同一批可互换的零件拼出不同的复合体，而磷酸化提供了可以随时造出、又随时抹掉的相互作用位点。",
      src: "A p.410, figure 12-1",
      see: [{ id: "L-12-5-1", en: "modularity worked out — adaptors and phosphotyrosine docking", cn: "模块化的完整版 —— 接头蛋白与磷酸酪氨酸停靠" }]
    },
    {
      link_en: "the other four are the ones usually left out",
      link_cn: "另外四个，恰恰是通常被略掉的那四个",
      en: "Desensitization, also called adaptation: activating a receptor triggers a feedback circuit that switches that same receptor off or pulls it off the surface, so a steady signal stops producing a steady response. Integration: when two signals push one second messenger or one membrane potential in opposite directions, what the cell does is the net of the two. Divergence: one activated receptor can drive several pathways ending in different places. **Localized response: the enzyme that destroys an intracellular message sits clustered with the enzyme that makes it, so the message is degraded before it can diffuse far.**",
      cn: "脱敏（desensitization），也叫适应：激活一个受体的同时会触发一条反馈回路，把这同一个受体关掉、或把它从表面撤走 —— 于是持续的信号不再产生持续的应答。整合：当两个信号把同一个第二信使、或同一个膜电位往相反方向推时，细胞的行为由两者的净和决定。发散：一个被激活的受体可以驱动好几条终点各异的通路。**局域化应答：销毁胞内信息的那个酶，与制造它的那个酶挤在一起，所以信息还没扩散到远处就被降解掉了。**",
      src: "A p.410, figure 12-1"
    },
    {
      link_en: "and all of it is built from a very short parts list, wired into four kinds of receptor",
      link_cn: "而这一切都由一份很短的零件清单搭成，最后接成四类受体",
      en: "**Four receptor types cover every signalling system there is, sorted by how the signal gets across the membrane: G protein-coupled receptors, receptor enzymes, gated ion channels and nuclear receptors.** A G protein-coupled receptor acts indirectly, switching on a G protein — a protein that binds GTP — which switches on an enzyme that makes a second messenger, the small intracellular molecule carrying the message onward. A receptor enzyme carries a catalytic activity on its own cytoplasmic end, most often a tyrosine kinase. A gated ion channel opens or closes, and is the simplest signal transducer there is. A nuclear receptor binds a ligand that crossed the membrane by itself. Behind them stands a list of inputs running from antigens and growth factors through light, touch, odorants and tastants, all of it handled by about ten basic types of protein component.",
      cn: "**受体只有四类，覆盖了所有信号系统，分类标准是「信号怎么过膜」：G 蛋白偶联受体、受体酶、门控离子通道、核受体。**G 蛋白偶联受体是间接起作用的：它先打开一个 G 蛋白（一种结合 GTP 的蛋白），G 蛋白再打开一个制造第二信使的酶 —— 第二信使就是那个在细胞内把消息继续带下去的小分子。受体酶自己朝胞质的那一端就带着催化活性，最常见的是酪氨酸激酶。门控离子通道只是开或关，是最简单的信号转导器。核受体结合的，是一个自己就穿过了膜的配体。这四类背后是一张长长的输入清单：从抗原、生长因子，到光、触碰、气味分子和味觉物质 —— 而处理它们的机器，只由大约十种基本类型的蛋白零件搭成。",
      src: "A pp.410–411, figure 12-2, tables 12-1 and 12-2",
      see: [{ id: "L-12-6-1", en: "gated ion channels, the third type, in full", cn: "第三类：门控离子通道的完整讲法" }]
    },
    {
      link_en: "of the four mechanisms, take first the one two familiar hormones use",
      link_cn: "四种机制里，先看两种熟面孔激素所用的那一种",
      en: "There are four main mechanisms of hormone action, and most hormones bind a receptor on the surface of the cell and set off a cascade of enzyme reactions. One of them runs on a small molecule that an enzyme called adenylyl cyclase makes out of ATP — cyclic AMP. **In the adenylyl cyclase cascade the hormone raises the level of cyclic AMP, cyclic AMP activates a protein kinase, and that kinase phosphorylates serine and threonine residues of target proteins.** Epinephrine and glucagon both act this way, and the residues are worth marking down: serine and threonine here, against tyrosine in a mechanism further along this chain.",
      cn: "激素的作用机制主要有四种，而大多数激素结合的是细胞表面的受体，随后引发一连串酶反应的级联。其中一种靠的是一个小分子 —— 由一个叫腺苷酸环化酶（adenylyl cyclase）的酶从 ATP 造出来的环化 AMP。**在腺苷酸环化酶级联里，激素提高环化 AMP 的水平，环化 AMP 激活一种蛋白激酶，而这个激酶去磷酸化靶蛋白上的丝氨酸与苏氨酸残基。**肾上腺素和胰高血糖素都以这种方式起作用；而残基值得记下来：这里是丝氨酸和苏氨酸，与本链条再往后那种机制里的酪氨酸相对。",
      src: "B §10.3, pp.223–224"
    },
    {
      link_en: "a messenger that carries a signal has to be destroyable, and this one has a named destroyer",
      link_cn: "一个传信号的信使必须能被销毁，而这一个有专门的销毁者",
      en: "Adenylyl cyclase converts ATP into cyclic AMP with the loss of pyrophosphate, and phosphodiesterase — the enzyme that ends the message — hydrolyses cyclic AMP to ordinary AMP, taking up water and releasing a proton. **Cyclic AMP is degraded rapidly inside the cell and its half-life is short, which is a requirement rather than a defect: a second messenger that persisted could never be switched off.**",
      cn: "腺苷酸环化酶把 ATP 转成环化 AMP，同时失去焦磷酸；而磷酸二酯酶 —— 也就是终结这条消息的那个酶 —— 把环化 AMP 水解成普通的 AMP，消耗一分子水、放出一个质子。**环化 AMP 在细胞内被迅速降解、半衰期很短，这是必需而不是缺陷：一个赖着不走的第二信使，永远关不掉。**",
      src: "B §10.3, pp.223–224"
    },
    {
      link_en: "and forming a second messenger at all buys two things at once",
      link_cn: "而「生成一个第二信使」这件事本身，一下换来两样东西",
      recall_en: "amplification was the third of the eight shared properties; here it is inside one named cascade",
      recall_cn: "放大是八个共有性质里的第三个 —— 这里是它在一条具名级联内部的样子",
      en: "One hormone molecule at the surface yields many cyclic AMP molecules, each of which activates a kinase that phosphorylates many substrates, so the amplifying effect arises from forming a second messenger at all. **Different cells and tissues are influenced in different ways on that one principle, according to their equipment with receptors and with enzyme systems sensitive to cyclic AMP.** The specificity therefore sits downstream of the messenger, in whatever a given cell happens to have available to be phosphorylated.",
      cn: "表面的一个激素分子生成许多个环化 AMP 分子，每一个又激活一个能磷酸化众多底物的激酶 —— 放大效应正是从「生成第二信使」这件事本身来的。**不同的细胞与组织，在同一条原理之下被以不同的方式影响，这取决于它们在受体、以及对环化 AMP 敏感的酶系统方面装备了什么。**所以特异性位于信使的下游：在于某个细胞手头恰好有什么可供磷酸化。",
      src: "B §10.3, p.224"
    },
    {
      link_en: "the second cascade cuts a membrane lipid instead of building a nucleotide",
      link_cn: "第二种级联不去造核苷酸，而是切一种膜脂",
      en: "Serotonin acts through the phosphoinositide cascade. Binding of the hormone to a receptor on the cell membrane activates phosphoinositidase, also named phospholipase C, which hydrolyses phosphatidylinositol-4,5-bisphosphate. The substrate is prepared in advance: two ATP phosphorylate phosphatidylinositol at positions 4 and 5, so the signalling lipid is made beforehand and held in the membrane, ready. **Phosphatidylinositol carries two acyl chains labelled as usually arachidonate and usually stearate, and the first name returns at the end of this chain as the raw material of a whole hormone class.**",
      cn: "5-羟色胺（serotonin）走的是磷酸肌醇级联。激素与细胞膜受体的结合激活磷酸肌醇酶 —— 亦称磷脂酶 C —— 它水解磷脂酰肌醇-4,5-二磷酸。底物是预先备好的：两个 ATP 在 4 位和 5 位上使磷脂酰肌醇磷酸化，于是这个信号脂类事先造好、存在膜里待命。**它的两条酰基链被标注为「通常是花生四烯酸」与「通常是硬脂酸」—— 而前一个名字会在本链条的末尾回来，成为一整类激素的原料。**",
      src: "B §10.3, p.224"
    },
    {
      link_en: "one cut, and what comes out is two messengers rather than one",
      link_cn: "切一刀，出来的是两个信使而不是一个",
      en: "**Two substances arise from that single cleavage and both of them carry the signal: inositol-1,4,5-trisphosphate opens calcium channels, and diacylglycerol activates protein kinase C.** Protein kinase C phosphorylates serine and threonine residues, the same residues the cyclic AMP kinase modifies, reached by a different route. The two products then separate by solubility: the inositol phosphate is water-soluble and diffuses off into the cytosol, while diacylglycerol is a lipid and stays in the membrane, where protein kinase C has to come and meet it. One cleavage, two destinations, two modes of action — an ion moved in one case and a covalent modification made in the other — out of a single binding event at the receptor.",
      cn: "**这一次切割产生两种物质，而且两者都传递信号：肌醇-1,4,5-三磷酸打开钙通道，二酰甘油激活蛋白激酶 C。**蛋白激酶 C 磷酸化的是丝氨酸与苏氨酸残基 —— 与环化 AMP 激酶所修饰的是同样的残基，只是经由另一条路线抵达。随后两个产物按溶解性分道：肌醇磷酸是水溶性的，扩散进胞质；二酰甘油是脂类，留在膜中，蛋白激酶 C 必须自己到膜上来与它会合。一次切割、两个去处、两种作用方式 —— 一个是移动离子，一个是做共价修饰 —— 全都出自受体上的一次结合事件。",
      src: "B §10.3, p.224"
    },
    {
      link_en: "the third mechanism has no separate messenger anywhere in it",
      link_cn: "第三种机制里，从头到尾没有任何独立的信使",
      en: "Insulin and a number of growth factors act by stimulating the tyrosine kinase activity of their own receptors, so here the receptor is itself the enzyme and there is no second messenger in the loop at all. **The receptor first phosphorylates its own tyrosine residues, and that increases its kinase activity towards target proteins, so amplification here comes from autophosphorylation.** Note the residue — tyrosine, against the serine and threonine of the two cascades above. The residue is what identifies the mechanism.",
      cn: "胰岛素与若干生长因子，是通过刺激其自身受体的酪氨酸激酶活性起作用的：这里受体本身就是酶，整个回路里根本没有第二信使。**受体先磷酸化自己的酪氨酸残基，而这会提高它对靶蛋白的激酶活性 —— 所以这里的放大来自自磷酸化。**请留意残基：是酪氨酸，与上面两条级联里的丝氨酸和苏氨酸相对。残基类型正是标识机制的东西。",
      src: "B §10.3, p.225"
    },
    {
      link_en: "the fourth differs in kind, because the hormone itself goes in",
      link_cn: "第四种在种类上就不同 —— 因为激素自己走了进去",
      recall_en: "the fourth of the four receptor types, the one where nothing is transduced across the membrane at all",
      recall_cn: "就是四类受体里的第四类 —— 那一类根本没有跨膜转导这回事",
      en: "Steroid hormones — estrogens, progesterone, glucocorticoids — and thyroid hormones penetrate into the cell instead of signalling from outside it. **A steroid hormone binds a receptor that is a protein capable of binding DNA, is carried by it into the nucleus, binds specific sites in the DNA there, and so activates certain parts of the gene.** The contrast with the other three is total: the receptor is a transcription factor and not an enzyme or a channel, and the output is new protein rather than modified protein, which is why this route starts slowly and lasts long.",
      cn: "类固醇激素 —— 雌激素、孕酮、糖皮质激素 —— 以及甲状腺激素，是穿透进入细胞的，而不是从细胞外面发信号。**类固醇激素结合的受体是一种能结合 DNA 的蛋白；受体把它带进细胞核，在那里结合 DNA 上的特定位点，从而激活基因的某些部分。**它与另外三种的对比是彻底的：受体是转录因子，不是酶也不是通道；输出的是新的蛋白，而不是被修饰过的蛋白 —— 这正是这条路起效慢、持续久的原因。",
      src: "B §10.3, p.225",
      see: [{ id: "L-28-3-1", en: "hormone response elements and the two kinds of nuclear receptor", cn: "激素响应元件与两型核受体" }]
    },
    {
      link_en: "and now a second four-part division, which is not the same four",
      link_cn: "接下来是第二个四分法 —— 而它不是刚才那四个",
      en: "Hormones are classified by chemical nature into four groups: steroid hormones; hormones derived from amino acids; peptide hormones and proteohormones; and icosanoids, which contain 20 carbon atoms, from the Greek eikosi meaning twenty. **The four chemical classes do not map one to one onto the four mechanisms: steroids go with the nuclear route, but peptide hormones are spread across the other three.** Two four-part divisions inside one chapter is exactly the pair that gets fused in memory, so they are worth separating now, before the catalogue starts.",
      cn: "激素按化学本性分为四组：类固醇激素；由氨基酸衍生的激素；肽类激素与蛋白类激素；以及二十烷酸类 —— 它们含 20 个碳原子，「eikosi」在希腊语中意为二十。**这四个化学类别与四种作用机制并不是一一对应的：类固醇确实走核内那条路，但肽类激素分散在另外三条路上。**一章之内出现两个四分法，正是记忆里最容易被粘在一起的那种搭配 —— 所以趁着目录还没开始，先把它们分开。",
      src: "B §10.3, p.225"
    },
    {
      link_en: "before the catalogue, one payoff of the first mechanism outside hormones altogether",
      link_cn: "在目录开始之前，先看第一种机制在激素之外的一次兑现",
      en: "Vision, olfaction and gustation in vertebrates run on the same three pieces of hardware the hormones use: a G protein-coupled receptor, a heterotrimeric G protein — a switch of three different subunits sitting on the inner face of the membrane, holding GTP when it is on — and a change in the membrane potential of a sensory neuron. **Rhodopsin is the receptor of a retinal rod cell, and a light-absorbing chromophore bound inside it changes shape on absorbing light and forces a conformational change on the protein around it.** Each excited rhodopsin molecule then switches on at least 500 molecules of transducin, the rod cell's own G protein. The effector enzymes are the ones already met — adenylyl cyclase and the phosphodiesterases — and the resulting change in second-messenger concentration either alters an enzyme's activity or alters the membrane's permeability to calcium, sodium and potassium.",
      cn: "脊椎动物的视觉、嗅觉和味觉，用的是和激素完全同一套三件硬件：一个 G 蛋白偶联受体；一个异三聚体 G 蛋白 —— 由三种不同亚基组成、趴在膜内侧面、处于「开」时手里握着 GTP 的开关；以及一个感觉神经元膜电位的改变。**视紫红质（rhodopsin）是视网膜杆细胞上的那个受体；嵌在它内部的吸光生色团吸收光后改变形状，并把这个改变强加给包在外面的蛋白。**随后每一个被激发的 rhodopsin 分子打开至少 500 个 transducin 分子 —— 那是杆细胞自己的 G 蛋白。被打开的效应酶正是前面见过的那几个：腺苷酸环化酶与磷酸二酯酶；而由此造成的第二信使浓度变化，要么改变某个酶的活性，要么改变膜对钙、钠、钾的通透性。",
      src: "A pp.429–432"
    },
    {
      link_en: "and switching off works here the way it works everywhere",
      link_cn: "而这里的关闭方式，和别处一模一样",
      recall_en: "desensitization was the fifth of the eight shared properties; this is what it looks like in the nose",
      recall_cn: "脱敏是八个共有性质里的第五个 —— 这是它在鼻子里的样子",
      en: "**The receptor is phosphorylated, a protein called arrestin then binds it and interrupts the receptor's contact with the G protein, and the chain breaks while the ligand is still bound.** That is why a smell fades within a minute although the odour molecules are still arriving. The economy is the point worth carrying: a G protein-coupled receptor supplies the specificity and its handover to the G protein supplies the gain, which are exactly the two jobs the same receptor does for a hormone.",
      cn: "**受体先被磷酸化，接着一个叫 arrestin（抑制蛋白）的蛋白结合上去、切断受体与 G 蛋白之间的接触 —— 配体还结合着，链条却已经断了。**这正是为什么一种气味在一分钟内就闻不到了，尽管气味分子还在源源不断地到来。要带走的是这套系统的经济性：G 蛋白偶联受体提供特异性，它交棒给 G 蛋白提供增益 —— 而这恰好就是同一个受体为激素做的那两件事。",
      src: "A p.432"
    },
    {
      link_en: "with the mechanisms in hand, the catalogue — chemical class one, five rows",
      link_cn: "机制拿在手上了，现在是目录 —— 化学分类之一，五行",
      en: "Five steroid hormones head the table of vertebrate hormones. Aldosterone, from the adrenal cortex, manages mineral substances and retains sodium and water. Cortisol, also from the adrenal cortex, answers stress and raises blood pressure and blood sugar. Progesterone, from the corpus luteum of the ovary, drives the secretory phase of the uterine mucosa, pregnancy and embryogenesis. Estradiol, abbreviated E2, from the ovarian follicles, is a sex hormone governing sexually reproductive functions. **Testosterone, from the interstitial cells of the testes, is the male sex hormone and an anabolic steroid, and cortisol is the peripherally effective hormone of the three-level circuit named above.**",
      cn: "脊椎动物激素表的开头是五种类固醇激素。醛固酮，来自肾上腺皮质：调控矿物质，潴留钠与水。皮质醇，同样来自肾上腺皮质：应对应激，升高血压与血糖。孕酮，来自卵巢的黄体：子宫黏膜的分泌期、妊娠、胚胎发生。雌二醇，缩写 E2，来自卵巢的卵泡：一种性激素，管性与生殖功能。**睾酮来自睾丸的间质组织细胞，是雄性性激素，也是合成代谢类固醇；而皮质醇那一行，正是上面那个三级回路里的外周有效激素。**",
      src: "B §10.3, p.225, Tab. 10.1"
    },
    {
      link_en: "chemical class two, four rows, and one gland turns up twice",
      link_cn: "化学分类之二，四行 —— 而有一个腺体出现了两次",
      en: "Thyroxin, abbreviated Thx, from the thyroid gland, increases basal metabolism and drives development. Adrenalin, from the adrenal medulla, answers short-term stress, raises the pulse and the blood glucose, and breaks glycogen down. Melatonin, from the epiphysis — the pineal gland — regulates daily rhythms. Serotonin is a neurotransmitter acting on mood, body temperature and sexuality, and its organ column is left blank, a real gap consistent with serotonin not being the product of one gland. **One adrenal gland thus supplies two chemically unrelated stress hormones out of two different tissues: cortisol, a steroid from the cortex, and adrenalin, an amino-acid derivative from the medulla.**",
      cn: "甲状腺素，缩写 Thx，来自甲状腺：提高基础代谢、驱动发育。肾上腺素，来自肾上腺髓质：应对短期应激，加快心率、升高血糖、分解糖原。褪黑素，来自松果体（epiphysis）：调节昼夜节律。5-羟色胺是神经递质，作用于情绪、体温与性欲；它的「器官」栏是空的 —— 这是原表里真实的空缺，与「5-羟色胺并非某一个腺体的产物」相符。**于是同一个肾上腺，用两种化学上毫不相关的应激激素、出自两种不同的组织：皮质来的类固醇皮质醇，与髓质来的氨基酸衍生物肾上腺素。**",
      src: "B §10.3, p.225, Tab. 10.1"
    },
    {
      link_en: "chemical class three is by far the largest, and its first eight rows contain two antagonistic pairs",
      link_cn: "化学分类之三是最大的一块，头八行里藏着两对拮抗激素",
      en: "Parathormone, from the parathyroid glands, mobilises calcium; thyrocalcitonin, from the thyroid, lowers the calcium and phosphate level and forms bone. Insulin, from the pancreas, lowers blood sugar; glucagon, from that same pancreas, raises it. **Those are two explicit antagonistic pairs, one governing calcium and one governing blood sugar, which is what lets the body correct in either direction instead of only one.** Relaxin, from the ovary, increases the motility of sperm; erythropoetin, from the kidneys, regulates the formation of erythrocytes — a reminder that the kidney is an endocrine organ in its own right. Oxytocin, from the neurohypophysis or posterior lobe, contracts the uterus and drives lactation; vasopressin, also called adiuretin and abbreviated ADH, from that same posterior lobe, brakes diuresis and retains water.",
      cn: "甲状旁腺素，来自甲状旁腺：动员钙。降钙素，来自甲状腺：降低钙与磷酸盐水平、形成骨。胰岛素，来自胰腺：降低血糖；胰高血糖素，来自同一个胰腺：升高血糖。**这就是两对明确的拮抗激素，一对管钙、一对管血糖 —— 正是它们让身体能朝两个方向纠正，而不是只能朝一个方向。**松弛素，来自卵巢：提高精子的活动性。促红细胞生成素，来自肾：调节红细胞的生成 —— 顺带提醒一句，肾本身也是一个内分泌器官。催产素，来自神经垂体（后叶）：子宫收缩、哺乳。血管加压素（又名 adiuretin，缩写 ADH），来自同一个后叶：抑制利尿、潴留水分。",
      src: "B §10.3, pp.225–226, Tab. 10.1"
    },
    {
      link_en: "and the remaining rows are almost all one kind of hormone",
      link_cn: "剩下的那些行，几乎全是同一种激素",
      en: "Melanotropin, MSH, from the hypophysis, secretes melanin from melanophores and darkens the skin. From the adenohypophysis or anterior lobe come somatotropin, STH, the growth hormone and an anabolic agent; lipotropin, LPH, driving lipolysis, melanin production and steroidogenesis; corticotropin, ACTH, stimulating the adrenal cortex; thyreotropin, TSH, stimulating the thyroid gland; follicle-stimulating hormone, FSH, stimulating the maturation of germ cells; lutropin or luteinising hormone, LH, developing and releasing the ovum and producing testosterone; and prolactin, stimulating the mammary gland. Chorionic gonadotropins, HCG, come from the placenta, an endocrine organ in its own right, and protect the corpus luteum and its production of progesterone. **Almost every anterior-lobe entry is a tropic hormone, meaning one whose target is another gland, and ACTH is precisely the glandotropic hormone of the three-level circuit.**",
      cn: "促黑素，MSH，来自垂体：使黑色素从黑素细胞中分泌、皮肤变黑。以下来自腺垂体（前叶）：生长激素 STH，即生长激素与合成代谢剂；促脂解素 LPH，负责脂解、黑色素生成与类固醇生成；促肾上腺皮质激素 ACTH，刺激肾上腺皮质；促甲状腺激素 TSH，刺激甲状腺；卵泡刺激素 FSH，刺激生殖细胞成熟；黄体生成素 LH，负责卵子的发育与释放、以及睾酮的生成；催乳素，刺激乳腺。绒毛膜促性腺激素 HCG 来自胎盘（胎盘本身就是一个内分泌器官），保护黄体及其孕酮的生成。**腺垂体那几行几乎全是促（tropic）激素 —— 即以另一个腺体为靶的激素；而 ACTH 正是那个三级回路里的促腺激素。**",
      src: "B §10.3, p.226, Tab. 10.1"
    },
    {
      link_en: "now the chemistry of class one, where three hormones turn out to be one molecule differently decorated",
      link_cn: "现在看分类一的化学 —— 三种激素原来是同一个分子的不同装饰",
      en: "The most important hormones of the adrenal cortex are the corticoids: aldosterone, corticosterone and cortisol. All three share one skeleton — a 4-en-3-one A ring and a C21 side chain carrying a CH2OH ketone — so they are variations on one molecule and not three unrelated ones. Corticosterone is the plain member; cortisol adds a hydroxyl at C17; aldosterone carries an aldehyde at C18, drawn as HC=O. **Decoration is the function here: the C18-aldehyde corticoid is the mineral-handling hormone and the C17-hydroxylated corticoid is the stress and blood-sugar hormone, just as the table divides them.**",
      cn: "肾上腺皮质最重要的激素是皮质类固醇：醛固酮、皮质酮、皮质醇。三者共有同一个骨架 —— 4-烯-3-酮的 A 环，以及带 CH2OH 酮基的 C21 侧链 —— 所以它们是同一个分子的变奏，而不是三个互不相干的分子。皮质酮最朴素；皮质醇在 C17 上多一个羟基；醛固酮在 C18 上带一个醛基，图中画作 HC=O。**这些修饰就是功能本身：带 C18 醛基的那个是管矿物质的激素，C17 羟基化的那个是管应激与血糖的激素 —— 与表里的划分完全一致。**",
      src: "B §10.3, pp.226–227"
    },
    {
      link_en: "and the sex hormones sit on the same skeleton, with one true outlier",
      link_cn: "性激素坐在同一个骨架上 —— 只有一个真正的异类",
      en: "Testosterone keeps the 4-en-3-one A ring with a hydroxyl at C17. Progesterone, the most important gestagen — that being the class of pregnancy-maintaining steroids — keeps that same A ring but carries an acetyl group at C17 instead. The most important estrogen is estradiol-3,17β. **The A ring of estradiol is aromatic, carrying a phenolic OH in place of the ketone, and its C19 angular methyl group has been lost, because aromatisation requires that removal.** That is why estrogens are weakly acidic and can be separated from every other steroid on that basis alone.",
      cn: "睾酮保留 4-烯-3-酮的 A 环，C17 上带一个羟基。孕酮是最重要的孕激素（gestagen，即维持妊娠的那一类类固醇），它保留同样的 A 环，但 C17 上带的是乙酰基而非羟基。最重要的雌激素是雌二醇-3,17β。**雌二醇的 A 环是芳香环，以酚羟基取代了酮基，而且它的 C19 角甲基已经失去 —— 因为芳构化必须先把它去掉。**这正是雌激素呈弱酸性、并可仅凭这一点与其他所有类固醇分离的原因。",
      src: "B §10.3, p.227"
    },
    {
      link_en: "the chemistry of class two starts from one amino acid and never branches",
      link_cn: "分类二的化学从一种氨基酸出发，而且一路不分叉",
      en: "Adrenaline and noradrenaline are hormones of the adrenal medulla, and their biosynthesis starts from tyrosine along a path of five compounds and four arrows: tyrosine to DOPA, DOPA to dopamine, dopamine to noradrenaline, noradrenaline to adrenaline. Read off the drawn structures, the four steps are hydroxylation of the ring to give the catechol, decarboxylation removing the COOH, hydroxylation of the side chain, and N-methylation. **The tyrosine path is linear, so dopamine, noradrenaline and adrenaline are each at once a product and the precursor of the next — one pathway yielding three active substances in sequence.**",
      cn: "肾上腺素与去甲肾上腺素是肾上腺髓质的激素，其生物合成从酪氨酸出发，沿着五个化合物、四支箭头的路走：酪氨酸→DOPA→多巴胺→去甲肾上腺素→肾上腺素。从所画的结构上读出来，这四步是：环的羟基化生成儿茶酚、脱羧去掉 COOH、侧链羟基化、以及 N-甲基化。**这条路是线性的，所以多巴胺、去甲肾上腺素、肾上腺素各自既是产物又是下一个的前体 —— 一条通路依次给出三种有生理活性的物质。**",
      src: "B §10.3, p.227"
    },
    {
      link_en: "the same class holds two more, and one of them is shipped inactive",
      link_cn: "同一分类里还有两个，其中一个是以无活性形式运出去的",
      en: "Melatonin is the hormone of the epiphysis and arises from tryptophan, its structure an indole bearing a methoxy group and an N-acetylated ethylamine side chain. Thyroxin, tetraiodothyronine, is derived from tyrosine, but by modification of that amino acid inside thyroglobulin — a protein — and by cleavage of that protein, which is how the thyroid stores its hormone extracellularly as colloid. **Thyroxin is a prohormone: the active hormone is 3,5,3′-triiodothyronine, the same structure carrying one iodine atom fewer, so the gland ships the inactive form and the periphery activates it.** One amino acid, tyrosine, therefore feeds hormones acting by two entirely different mechanisms — a surface cascade for adrenaline, a nuclear receptor for thyroxin — while tryptophan feeds melatonin.",
      cn: "褪黑素是松果体的激素，由色氨酸生成，结构是一个带甲氧基与 N-乙酰化乙胺侧链的吲哚。甲状腺素（四碘甲状腺原氨酸）由酪氨酸衍生，但方式是修饰已经装配在甲状腺球蛋白（thyroglobulin，一种蛋白）里的那个氨基酸，再把这个蛋白裂解开 —— 这正是甲状腺能以胶质形式在细胞外贮存激素的原因。**甲状腺素是一种激素原：活性激素是 3,5,3′-三碘甲状腺原氨酸，结构相同、只少一个碘原子；腺体运出的是无活性形式，外周再把它激活。**于是同一种氨基酸酪氨酸，喂养了两种作用机制完全不同的激素 —— 肾上腺素走表面级联，甲状腺素走核受体 —— 而色氨酸喂养的是褪黑素。",
      src: "B §10.3, p.227"
    },
    {
      link_en: "class three opens with a structural pair worth the whole chapter",
      link_cn: "分类三的开头是一对结构，抵得上整章的分量",
      en: "Oxytocin and vasopressin, both from the posterior lobe of the hypophysis, are nonapeptides closed into a ring: Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2 against Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH2. The ring is closed by the cystine present — two cysteine residues joined by a disulfide bridge — and the terminal glycine stands as an amide, an end-cap protecting the peptide from carboxypeptidases. **The two differ at exactly two positions, Ile against Phe and Leu against Lys, and yet one contracts the uterus and drives lactation while the other brakes diuresis and retains water.** That is the sharpest illustration in the chapter of specificity living in the receptor rather than in how different two ligands look.",
      cn: "催产素与血管加压素都来自垂体后叶，都是闭成环的九肽：Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2，对 Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Lys-Gly-NH2。环由其中的胱氨酸闭合 —— 也就是两个半胱氨酸残基之间的二硫桥 —— 而末端的甘氨酸以酰胺形式存在，这一封端保护该肽免受羧肽酶的作用。**两者只在两个位置上不同 —— Ile 对 Phe、Leu 对 Lys —— 可是一个引起子宫收缩与哺乳，另一个抑制利尿、保住水分。**这是全章里对「特异性在于受体，而不在于两个配体长得有多不像」这条道理最鲜明的例证。",
      src: "B §10.3, pp.227–228"
    },
    {
      link_en: "and the class turns out to have no inner boundary, only a ladder of sizes",
      link_cn: "而这一类内部并没有界线，只有一道由小到大的阶梯",
      en: "Corticotropin, ACTH, is a peptide of 39 amino acids with Mr 4 500. Insulin is a peptide of 51 amino acids with Mr 5 750, and its amino acid sequence was the very first ever determined, by Sanger in 1953. Glucagon is a peptide of 29 amino acid residues. Parathormone, at Mr 8 500, is already close to proteins. The protein hormones then run: somatotropin at Mr 21 500; thyreotropin in two subunits of Mr 10 800 and 13 000; folitropin, a glycoprotein, at Mr 34 000; lutropin, a glycoprotein, at Mr 23 000; prolactin at Mr 23 500; relaxin at Mr 12 000; erythropoetin, a glycoprotein, at Mr 34 000. **The peptide and protein hormones form one continuum from a nine-residue ring up to glycoproteins of 34 000 daltons, with no sharp line between the two, and parathormone marks the transition.** Relative molecular mass is the one measure used throughout to order the class, running from ACTH at 4 500 up to the glycoproteins at 34 000.",
      cn: "促肾上腺皮质激素 ACTH 是由 39 个氨基酸组成的肽，Mr = 4 500。胰岛素是由 51 个氨基酸组成的肽，Mr = 5 750；它的氨基酸序列是有史以来第一个被测定的（Sanger，1953 年）。胰高血糖素是由 29 个氨基酸残基组成的肽。甲状旁腺素的 Mr = 8 500，已经接近蛋白质。接下来是蛋白类激素：生长激素 Mr = 21 500；促甲状腺激素，两个亚基，Mr = 10 800 与 13 000；促卵泡素，糖蛋白，Mr = 34 000；促黄体素，糖蛋白，Mr = 23 000；催乳素 Mr = 23 500；松弛素 Mr = 12 000；促红细胞生成素，糖蛋白，Mr = 34 000。**这一类是一条连续谱：从九残基的环一直到 34 000 道尔顿的糖蛋白，「肽类」与「蛋白类」之间没有明确界线，而甲状旁腺素标出了那个过渡点。** 全程用来给这一类排序的那个尺度，就是相对分子质量 Mr：从 ACTH 的 4 500 一路排到 34 000 的糖蛋白。",
      src: "B §10.3, p.228"
    },
    {
      link_en: "class four is cut from a single fatty acid, which is why it is named by carbon count",
      link_cn: "分类四是从同一种脂肪酸上切下来的 —— 这正是它按碳数得名的原因",
      en: "Icosanoid hormones arise from arachidonate, and the main representatives are leukotrienes, prostaglandins, prostacyclins and thromboxanes. One arrow leads up from arachidonate to the leukotrienes and a two-way split leads down to the prostaglandins and thromboxanes. **A single twenty-carbon fatty acid gives the whole class by two divergent routes, which is why the class is defined by carbon count rather than by function.** The four representative structures are leukotriene B4, prostaglandin A2, prostacyclin I2 and thromboxane B2, and they split cleanly on structure: leukotriene B4 keeps the open chain of the parent fatty acid with conjugated double bonds and added hydroxyls, prostaglandin A2 has closed a five-membered carbocycle, prostacyclin I2 has that cyclopentane fused to an extra oxygen-containing ring, and thromboxane B2 carries an oxygen-containing six-membered ring instead.",
      cn: "二十烷酸类激素由花生四烯酸生成，主要代表是白三烯、前列腺素、前列环素与血栓素。一支箭头从花生四烯酸向上通往白三烯，一个两向分叉向下通往前列腺素与血栓素。**一种二十碳脂肪酸经两条发散的路线给出整个类别 —— 这正是这一类按碳原子数、而不是按功能来定义的原因。**四个代表结构是白三烯 B4、前列腺素 A2、前列环素 I2 与血栓素 B2，它们在结构上干净地一分为二：白三烯 B4 保留母体脂肪酸的开链，带共轭双键并增加了羟基；前列腺素 A2 闭合成一个五元碳环；前列环素 I2 在那个环戊烷上再并合一个含氧环；血栓素 B2 则代之以一个含氧的六元环。",
      src: "B §10.3, p.228"
    },
    {
      link_en: "one row in the table covers all four families, and the blank inside it says something",
      link_cn: "表里只有一行涵盖这四个家族，而那一行里的空格本身就在说话",
      recall_en: "arachidonate was the fatty acid labelled on phosphatidylinositol back in the phosphoinositide step",
      recall_cn: "花生四烯酸就是磷酸肌醇那一步里、标在磷脂酰肌醇上的那种脂肪酸",
      en: "All four icosanoid families share a single undivided row with no organ given, and collectively they regulate blood flow, regulate ion transport, and modulate synaptic transmission. The blank organ column reflects that they are made locally, essentially everywhere, rather than by a dedicated gland. **Arachidonate is the fatty acid labelled at one position of phosphatidylinositol, so the membrane lipid carrying the phosphoinositide signal is also the store this whole hormone class is cut from.**",
      cn: "二十烷酸类的四个家族共用一行、不加细分，而且没有给出器官；它们统一负责调节血流、调节离子转运，以及调制突触传递。器官栏留空，反映的是它们在各处就地生成，而不是出自某一个专门的腺体。**花生四烯酸正是磷脂酰肌醇某一位置上所标注的那种脂肪酸 —— 于是承载磷酸肌醇信号的那种膜脂，也正是整个这一类激素被切下来的储库。**",
      src: "B §10.3, pp.226, 228"
    },
    {
      link_en: "all of that is mechanism and catalogue; the question none of it answered is what the signal is for",
      link_cn: "以上全是机制与目录 —— 而始终没被回答的问题是：这个信号究竟为了什么",
      en: "One physiological problem uses four of these hormones at once. **Blood glucose has to be held near 4.5 mM minute by minute, and insulin, glucagon, epinephrine and cortisol answer that single demand on four different timescales.** Insulin says blood glucose is higher than it needs to be, and it moves GLUT4 glucose transporters that were already sitting in intracellular vesicles out to the plasma membrane, which is why it acts within minutes. Glucagon says blood glucose is too low, and reaches the liver and adipose tissue but not muscle, which carries no glucagon receptors at all. Epinephrine is anticipatory, released from the adrenal medulla before the work is done rather than after, and it does reach muscle.",
      cn: "有一个生理问题，一次动用了其中四种激素。**血糖必须分分秒秒被维持在 4.5 mM 左右，而胰岛素、胰高血糖素、肾上腺素与皮质醇，在四个不同的时间尺度上回应这同一个要求。**胰岛素传的话是「血糖比需要的高」，它把原本待在细胞内囊泡里的 GLUT4 葡萄糖转运体搬到质膜上 —— 这就是它能在几分钟内起效的原因。胰高血糖素传的话是「血糖太低」，它到得了肝脏和脂肪组织，却到不了肌肉，因为肌细胞根本没有胰高血糖素受体。肾上腺素是预支型的：神经信号在活儿干完之前、而不是之后，就把它从肾上腺髓质放出来 —— 而它到得了肌肉。",
      src: "A pp.859–866",
      see: [{ id: "L-23-5-1", en: "what happens when the insulin end of that system fails", cn: "这套系统在胰岛素那一端坏掉时会发生什么" }]
    },
    {
      link_en: "and the deepest thing in that system is not what insulin does but how the body decides to release it",
      link_cn: "而这套系统里最深的一点，不是胰岛素做了什么，而是身体怎么决定放出它",
      recall_en: "specificity lives in the receiving cell — here the receiving cell measures the signal by burning it",
      recall_cn: "特异性住在接收细胞里 —— 而这里的接收细胞，是靠「烧掉」信号来测量信号的",
      en: "The insulin-secreting beta cell of the pancreas has no glucose receptor: it measures glucose by metabolising it. Glucose enters through the GLUT2 transporter, is immediately phosphorylated by glucokinase and enters glycolysis; the higher the flux, the higher the ATP concentration in the cytosol; the raised ATP closes an ATP-gated potassium channel; closing that channel depolarises the membrane; depolarisation opens voltage-gated calcium channels; and the calcium coming in triggers exocytosis of insulin. **Closing a potassium channel is what depolarises the cell, because an open potassium channel was what held the membrane negative in the first place.** Sulfonylureas — the oral medicines used in type 2 diabetes mellitus — bind the SUR1 subunit of that channel and close it deliberately, doing by drug exactly what a rise in glucose would have done.",
      cn: "分泌胰岛素的胰腺 β 细胞没有葡萄糖受体：它是靠代谢葡萄糖来测量葡萄糖的。葡萄糖经 GLUT2 转运体进入，立刻被葡萄糖激酶磷酸化、进入糖酵解；通量越高，胞质里的 ATP 浓度越高；升高的 ATP 关闭一个 ATP 门控钾通道；通道一关，膜就去极化；去极化打开电压门控钙通道；进来的钙触发胰岛素的胞吐。**去极化是由钾通道的「关闭」造成的 —— 因为一开始把膜维持在负电位的，正是开着的那个钾通道。**磺脲类药物 —— 用于 2 型糖尿病的口服药 —— 结合这个通道的 SUR1 亚基、把它有意关上，用药物做的正是血糖升高本来会做的那件事。",
      src: "A pp.860–862",
      see: [{ id: "L-23-5-1", en: "the same channel as a drug target and as a disease gene", cn: "同一个通道，既是药物靶点又是致病基因" }]
    },
    {
      link_en: "and one metabolite shows what a second messenger is worth in two different organs",
      link_cn: "而有一个代谢物，展示了同一个第二信使在两个器官里各值多少",
      en: "In the liver glucagon breaks glycogen down and then does something neater: it lowers the concentration of fructose 2,6-bisphosphate, which is at once an activator of PFK-1 and an inhibitor of FBPase-1, so removing it switches glycolysis off and gluconeogenesis on in a single move. **Epinephrine raises fructose 2,6-bisphosphate in muscle and so turns glycolysis up, which is to say a second messenger means whatever the receiving cell is equipped to make it mean.** Every one of glucagon's actions here is carried out by cAMP-dependent protein phosphorylation, and in adipose tissue that same cAMP phosphorylates perilipin, the coat protein keeping lipases off the lipid droplet, so fatty acids are released and almost every tissue stops competing for glucose.",
      cn: "在肝脏里，胰高血糖素先把糖原分解掉，然后做了一件更漂亮的事：它降低果糖-2,6-二磷酸的浓度 —— 这个分子同时是 PFK-1 的激活剂和 FBPase-1 的抑制剂，所以把它撤走，等于在同一个动作里既关掉糖酵解、又打开糖异生。**肾上腺素在肌肉里提高的正是果糖-2,6-二磷酸，从而把糖酵解开大 —— 也就是说，一个第二信使的含义，取决于接收它的细胞装备了什么去解读它。**胰高血糖素在这里的每一个作用，都由 cAMP 依赖的蛋白磷酸化来执行；而在脂肪组织里，同样的 cAMP 磷酸化周脂素（那个把脂肪酶挡在脂滴外面的外壳蛋白），于是脂肪酸被释放出来，几乎每一种组织都不再来抢葡萄糖。",
      src: "A pp.862–863"
    },
    {
      link_en: "and the fourth of those four is slow, for the reason the nuclear mechanism already gave",
      link_cn: "而这四种里的第四种是慢的 —— 理由核内机制那一步已经给过了",
      recall_en: "the steroid route makes new protein instead of modifying protein that is already there",
      recall_cn: "类固醇那条路产出的是新蛋白，而不是修饰已经在场的蛋白",
      en: "Cortisol is released by anxiety, fear, pain, haemorrhage, infection, low blood glucose and starvation. **Cortisol changes the kinds and amounts of enzymes its target cells synthesise instead of regulating enzymes that already exist, and that one difference is why steroid hormones are slow.** Insulin, glucagon and epinephrine phosphorylate enzymes that are already present and act in seconds to minutes; cortisol has to have new enzymes transcribed and translated, and acts over hours. Leaving it switched on has a price: sustained release damages muscle and bone and impairs endocrine and immune function, overproduction gives Cushing disease, and underproduction gives Addison disease.",
      cn: "皮质醇由焦虑、恐惧、疼痛、失血、感染、低血糖和饥饿所释放。**皮质醇改变的是靶细胞合成哪些酶、合成多少，而不是去调节已经存在的酶 —— 仅这一点差别，就是类固醇激素为什么慢的原因。**胰岛素、胰高血糖素与肾上腺素磷酸化的是本来就在场的酶，作用以秒到分钟计；皮质醇必须先让新的酶被转录、再被翻译，作用以小时计。让它一直开着是有代价的：持续释放会损伤肌肉与骨骼、损害内分泌与免疫功能；产生过多是库欣病，产生不足是艾迪生病。",
      src: "A pp.865–866"
    },
    {
      link_en: "and starvation, the last item on that list, runs long enough that the brain has to change fuel",
      link_cn: "而那张清单上的最后一项——饥饿——一旦拖得够久，大脑就得换燃料",
      en: "The reason a brain burns ketone bodies and not fatty acids is a barrier rather than a preference: fatty acids do not cross the blood-brain barrier, while ketone bodies do and supplement glucose as an energy source for the brain during a long fast. **Over six weeks of starvation ketone bodies are almost unmeasurable at the start and rise sharply after two to four days, so the switch of fuel is a measurable time course and not a metaphor.** Acetone, a minor ketone body, is not metabolised at all and leaves in the breath, which is the bedside sign. The ending is worth stating plainly, because it is the counterweight to treating ketosis as pure pathology: when fat reserves are gone the degradation of essential proteins begins, and that leads to loss of heart and liver function and, in prolonged starvation, to death.",
      cn: "大脑烧酮体而不烧脂肪酸，原因是一道屏障，而不是什么偏好：脂肪酸过不了血脑屏障，酮体过得去，并在长时间禁食中作为大脑的能量来源补充葡萄糖。**在六周饥饿的进程里，酮体在起始时几乎测不出来，两到四天后急剧上升——所以换燃料这件事是一条可测量的时间曲线，不是一个比喻。** 丙酮是一种次要的酮体，它根本不被代谢，经呼吸排出，这就是床旁可闻的那个体征。结局值得平实地说出来，因为它正是「把酮症当作纯粹病理」这种看法的配重：脂肪储备耗尽之后，必需蛋白质的降解就开始了，而这会导致心脏和肝脏功能的丧失，在长期饥饿中导致死亡。",
      src: "A p.864 · A p.866, Fig. 23-28"
    },
    {
      link_en: "so what does the whole chapter come to?",
      link_cn: "那么整章加起来是什么？",
      recall_en: "the specificity claim from the third step, with every mechanism and every hormone now hung on it",
      recall_cn: "第三步那句关于特异性的话 —— 现在每一种机制、每一种激素都挂在它上面",
      en: "**A hormone carries no instruction of its own: what it does is decided by which receptor the receiving cell carries and which enzymes that receptor can reach.** Two nonapeptides differing at two positions do unrelated jobs, and one cyclic AMP signal means different things in different tissues, for that one reason. Four mechanisms of action, four chemical classes that do not line up with them, eighteen rows of a table, and the same blood carrying every one of those hormones past every cell in the body.",
      cn: "**激素本身不携带任何指令：它做什么，由接收它的细胞带着哪一种受体、以及那个受体够得到哪些酶来决定。**两个只差两个位置的九肽干着毫不相干的活，同一个环化 AMP 信号在不同组织里意味着不同的事 —— 都出于这同一个理由。四种作用机制，四个与之并不对齐的化学分类，一张十八行的表，以及同一份血液把其中每一种激素送过身体里的每一个细胞。",
      src: "B §10.3, pp.222–228 · A pp.408–411"
    }
  ]
};

/* ============================================= tissue-specific metabolism ==== */
window.BIOLITE_SPINE["key:tissue-specific-metabolism"] = {
  assumed: ["atp", "adp", "amp", "nadph", "nad", "glucose", "blood glucose", "glycogen",
            "glycolysis", "gluconeogenesis", "fermentation", "citric acid cycle",
            "oxidative phosphorylation", "respiratory chain", "acetyl-coa", "coenzyme a",
            "pyruvate", "lactate", "alanine", "amino acid", "protein", "enzyme",
            "isozyme", "km", "michaelis constant", "transamination", "deamination",
            "urea", "ammonia", "nitrogen", "fatty acid", "triacylglycerol",
            "phospholipid", "sterol", "cholesterol", "lipoprotein",
            "very-low-density lipoprotein", "chylomicron", "lipase", "lipid droplet",
            "glycerol", "glycerol phosphate", "ketone body", "ketone bodies",
            "acetoacetate", "beta-hydroxybutyrate", "acetone", "mitochondrion",
            "mitochondria", "cytosol", "plasma membrane", "membrane", "nucleus",
            "cell", "blood", "tissue", "organ", "hormone", "insulin", "glucagon",
            "epinephrine", "adrenaline", "camp", "cyclic amp", "phosphorylation",
            "phosphorylated", "kinase", "hexokinase", "glucokinase", "glut2",
            "glucose 6-phosphate", "glucose 1-phosphate", "glucose 6-phosphatase",
            "pep carboxykinase", "phosphoenolpyruvate", "pentose phosphate pathway",
            "ribose 5-phosphate", "nucleotide", "atp synthase", "proton",
            "proton gradient", "electron transfer", "liver", "hepatocyte", "muscle",
            "skeletal muscle", "heart", "brain", "neuron", "astrocyte", "kidney",
            "lung", "gut", "intestine", "portal vein", "lymphatic system",
            "adipose tissue", "adipocyte", "perilipin", "hormone-sensitive lipase",
            "uncoupling protein", "thermogenin", "irisin", "peptide hormone",
            "erythrocyte", "haemoglobin", "hemoglobin", "blood-brain barrier",
            "cori cycle", "phosphocreatine", "creatine", "creatine kinase",
            "creatinine", "nmr", "myocardial infarction", "action potential",
            "membrane potential", "sodium", "potassium", "ion", "atpase",
            "plasma protein", "diet", "fasting", "starvation", "meal", "metabolism",
            "basal metabolism", "oxidation", "oxygen", "carbon dioxide", "heat",
            "body mass", "glyoxylate cycle", "seed", "plant", "microorganism",
            "energy status", "fuel", "xenobiotic", "ubiquitin", "hypoglycaemia",
            "hypoglycemia", "coma", "convulsion", "vitamin", "glycine", "arginine",
            "methionine", "fat", "sugar", "saccharide", "carbohydrate", "starch"],
  nodeTitle_en: "Tissue-specific metabolism, and the one-way traffic between sugar and fat",
  nodeTitle_cn: "组织特异性代谢，以及糖与脂肪之间的单向交通",
  title_en: "The same pathways run at different settings by different organs — the liver deciding, the brain fed first, and one missing reaction that makes fat a dead end",
  title_cn: "同样的通路被不同器官开在不同档位上 —— 肝脏做决定，大脑优先吃饱，而缺失的一个反应让脂肪成了一条死路",
  terms: [
    { en: "extrahepatic", cn: "肝外的",
      def_en: "Literally outside the liver, and the standard collective name for every other tissue and organ. That such a word exists is itself evidence of the liver's centrality: an entire body is routinely named by not being one organ.",
      def_cn: "字面意思是「肝脏以外的」，是对身体其余所有组织与器官的标准统称。这个词的存在本身就是肝脏中心地位的证据：整个身体，习惯上是用「不是那一个器官」来命名的。" },
    { en: "glucokinase", cn: "葡萄糖激酶",
      def_en: "The liver's hexokinase isozyme, hexokinase IV. Its Km for glucose is 10 mM, far above the low-Km isozymes of other tissues, and it is not inhibited by its own product. Together those two properties mean the liver mops glucose up when blood glucose is high and barely touches it when blood glucose is low, which is what spares glucose for the brain.",
      def_cn: "肝脏的己糖激酶同工酶，即己糖激酶 IV。它对葡萄糖的 Km 是 10 mM，远高于其他组织那些低 Km 的同工酶，而且不被自己的产物抑制。这两点合起来，意味着血糖高时肝脏把葡萄糖兜住、血糖低时几乎不碰它 —— 这就是「把葡萄糖省给大脑」的实际内容。" },
    { en: "glucose-alanine cycle", cn: "葡萄糖–丙氨酸循环",
      def_en: "Between meals some muscle protein is degraded and the amino groups are transaminated onto pyruvate to make alanine, which travels to the liver; the liver strips the nitrogen off into urea and turns the pyruvate back into blood glucose. It is the nitrogen-carrying counterpart of the lactate route, and it also solves muscle's ammonia problem, since muscle cannot make urea.",
      def_cn: "两餐之间，一部分肌肉蛋白被降解，氨基经转氨作用交给丙酮酸生成丙氨酸，丙氨酸前往肝脏；肝脏把氮摘下来做成尿素，把丙酮酸变回血糖。它是乳酸那条路线的「带氮孪生版」，同时解决了肌肉的排氨问题 —— 因为肌肉自己不能合成尿素。" },
    { en: "uncoupling protein 1", cn: "解偶联蛋白 1",
      def_en: "Also called thermogenin, made by brown and beige adipocytes. It gives protons a route back into the mitochondrial matrix that bypasses ATP synthase, so the energy of the gradient is released as heat instead of being conserved as ATP. Electron transfer keeps running, arguably faster; phosphorylation does not happen.",
      def_cn: "又叫产热素，由棕色与米色脂肪细胞制造。它给质子提供一条绕开 ATP 合酶、返回线粒体基质的通路，于是梯度里的能量以热的形式放出，而不是被保存为 ATP。电子传递照常进行，甚至可以说更快；只是什么都没有被磷酸化。" },
    { en: "why fats cannot make sugars", cn: "脂肪为什么不能生成糖",
      def_en: "The animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis, so it cannot form saccharides from fats. The restriction is to animals and it is deliberate: plants and some microorganisms have the glyoxylate cycle, which does exactly this conversion, and that is how a germinating oilseed turns stored fat into sugar.",
      def_cn: "动物机体无法把乙酰辅酶 A 转变为丙酮酸（糖合成的起始化合物），因而也无法由脂肪生成糖。这一限定只针对动物，而且是有意为之：植物与某些微生物拥有乙醛酸循环，它恰恰完成这一转变 —— 萌发中的油料种子就是这样把贮存的脂肪变成糖的。" }
  ],
  steps: [
    {
      en: "Metabolism is usually organised by pathway and by regulation. A third axis is which organ, and it is the axis an oral question lands on: what is your brain running on right now, and why do a sprinter's legs and a marathon runner's legs burn different fuel? The clearest evidence of the liver's centrality is a piece of vocabulary. **Every other tissue and organ is collectively called extrahepatic, meaning outside the liver, so an entire body is named by not being one organ.** The portal vein runs straight from the digestive organs to the liver, so the liver has first access to everything absorbed from a meal. And the gut splits its output in two: most sugars and amino acids, with some rebuilt triacylglycerols, travel by blood capillaries to the liver, while the remaining triacylglycerols go to adipose tissue by the lymphatic system instead, bypassing the liver altogether.",
      cn: "代谢通常按通路和调控两条轴来讲。第三条轴是「哪个器官」—— 而口试的问题恰恰落在这条轴上：你的大脑此刻在烧什么？为什么短跑运动员的腿和马拉松运动员的腿烧的是不同的燃料？**肝脏居于中心地位，最清楚的证据是一个词 —— 其余所有组织和器官被统称为「肝外的（extrahepatic）」，意思就是「肝脏以外的」；于是整个身体，是用「不是那一个器官」来命名的。**门静脉从消化器官直通肝脏，所以一餐里吸收的一切，肝脏拥有优先取用权。而肠道把自己的输出一分为二：大部分糖和氨基酸、连同一部分重新组装好的三酰甘油，经血液毛细血管去肝脏；剩下的三酰甘油改走淋巴系统去脂肪组织，完全绕过肝脏。",
      src: "A p.848"
    },
    {
      link_en: "an organ that decides for everyone else has to be able to change its mind, and that is a measurable quantity",
      link_cn: "一个替所有人做决定的器官必须能改主意 —— 而这是可以量出来的",
      en: "What arrives at the liver depends on the diet and on how long ago you ate, and what the rest of the body wants depends on which organ is doing what. The liver's answer is to rebuild its own enzyme complement: on a protein-rich diet, hepatocytes make more of the enzymes of amino acid catabolism and of gluconeogenesis, and within hours of a switch to a diet high in carbohydrate those fall while the enzymes of carbohydrate metabolism and of fat synthesis rise. **Liver enzymes are made and destroyed at 5 to 10 times the turnover rate of enzymes in a tissue such as muscle, which is what lets this one organ change its mind.** No other tissue is that adaptable.",
      cn: "送到肝脏的是什么，取决于饮食和距上一餐多久；身体其余部分想要什么，取决于哪个器官在做什么。肝脏的应对方式是把自己的酶配置重建一遍：高蛋白饮食时，肝细胞多造氨基酸分解代谢与糖异生的酶；一旦换成高碳水饮食，几小时之内这些酶就下降，而糖代谢与脂肪合成的酶随之上升。**肝脏酶的合成与降解速率，是肌肉一类组织中酶周转速率的 5–10 倍 —— 于是那个能改主意的器官，正是能把自己的催化机器重建得最快的那一个。**",
      src: "A p.849"
    },
    {
      link_en: "so how does the liver decide whether to take a glucose molecule or leave it? By one enzyme's affinity",
      link_cn: "那么肝脏怎么决定一个葡萄糖分子是拿走还是放过？靠一个酶的亲和力",
      en: "The hepatocyte's glucose transporter, GLUT2, lets glucose diffuse in and out freely, so the concentration inside a liver cell is essentially the blood concentration; the liver controls uptake not at the door but at the first enzyme. That enzyme is glucokinase, also called hexokinase IV, and it differs from the hexokinases of other tissues in exactly two ways: its Km for glucose is 10 mM, far above the low-Km isozymes elsewhere, and it is not inhibited by its own product, glucose 6-phosphate. A high Km means it is nowhere near saturated at ordinary concentrations, so after a meal the liver keeps phosphorylating instead of maxing out; no product inhibition means it does not stop just as glucose 6-phosphate accumulates, which is exactly when the liver should be storing. **The high Km cuts the other way too: when blood glucose is low the liver barely phosphorylates any and so does not burn the sugar, which is why the brain is fed before the liver is.**",
      cn: "肝细胞的葡萄糖转运体 GLUT2 让葡萄糖自由进出，所以肝细胞内的浓度基本就等于血糖浓度；肝脏不在门口控制摄取，而在第一个酶那里控制。这个酶叫葡萄糖激酶，也叫己糖激酶 IV，它与其他组织的己糖激酶只差两点：它对葡萄糖的 Km 是 10 mM，远高于别处那些低 Km 的同工酶；而且它不被自己的产物葡萄糖-6-磷酸抑制。Km 高，意味着在通常浓度下它离饱和还远，所以饭后肝脏能一直磷酸化下去而不至于顶到头；没有产物抑制，意味着它不会恰好在葡萄糖-6-磷酸开始堆积时停手 —— 而那正是肝脏本该储存的时刻。**高 Km 还有反向的一面：血糖低时，肝脏几乎不去磷酸化葡萄糖，也就不把糖拿去糖酵解烧掉 —— 一个亲和力常数，就是「大脑先于肝脏吃饱」的原因。**",
      src: "A p.849"
    },
    {
      link_en: "once phosphorylated, that glucose stands at a junction with five exits",
      link_cn: "一旦被磷酸化，这个葡萄糖就站在一个五岔路口上",
      en: "Glucose 6-phosphate sits at the crossroads of carbohydrate metabolism in the liver, and the priority order matters more than the list. **First is export: a phosphatase strips the phosphate off and free glucose leaves for the blood, and this is the predominant route when glucose 6-phosphate is scarce.** Blood glucose has to be held around 4 to 5 mM to supply the brain, so the liver's first obligation is not to itself. Second is storage as liver glycogen. Third is oxidation through glycolysis to acetyl-CoA — and note the counterintuitive part, that a hepatocyte's preferred fuel for making ATP is fatty acids, so the liver largely does not burn the sugar it is handling. Fourth, that acetyl-CoA also builds fatty acids, triacylglycerols, phospholipids and cholesterol, much of it shipped out to other tissues as blood lipoproteins. Fifth is the pentose phosphate pathway, giving NADPH for those syntheses and ribose 5-phosphate for nucleotides — and the same NADPH is what the liver uses to detoxify drugs, food additives and preservatives, compounds that do not occur naturally and are called xenobiotics.",
      cn: "葡萄糖-6-磷酸位于肝脏糖代谢的十字路口上，而优先顺序比这份清单本身更重要。**第一条是输出：一个磷酸酶把磷酸切掉，游离葡萄糖离开进入血液；在葡萄糖-6-磷酸供应有限时这是占主导的一条路，因为血糖必须维持在 4–5 mM 左右来供养大脑。**第二条是存成肝糖原。第三条是经糖酵解氧化成乙酰辅酶 A —— 注意这里反直觉的地方：肝细胞制造 ATP 的首选燃料是脂肪酸，所以肝脏基本上并不烧它经手的那些糖。第四条，这些乙酰辅酶 A 也用来造脂肪酸、三酰甘油、磷脂与胆固醇，其中很大一部分作为血浆脂蛋白运给别的组织。第五条是磷酸戊糖途径，给出这些合成所需的 NADPH，以及供核苷酸用的核糖-5-磷酸 —— 而同样这份 NADPH，正是肝脏用来解毒药物、食品添加剂与防腐剂的东西；这些自然界本不存在的化合物叫外源性物质（xenobiotics）。",
      src: "A pp.849–850"
    },
    {
      link_en: "the amino acids arriving at the liver set up a second traffic between organs",
      link_cn: "抵达肝脏的氨基酸，建立起器官之间的第二条交通线",
      en: "Amino acids reaching the liver go into protein synthesis — the liver makes most of the plasma proteins — or on to other organs, or into nucleotides and hormones. What is left over is transaminated or deaminated to pyruvate and citric acid cycle intermediates, the released ammonia becomes urea for excretion, and the carbon goes to glucose by gluconeogenesis or to acetyl-CoA. **Between meals some muscle protein is degraded, its amino groups are transaminated onto pyruvate to make alanine, and alanine travels to the liver to become urea and blood glucose.** That is the glucose-alanine cycle, and it smooths out the swings in blood glucose between meals; it is also the nitrogen-carrying twin of the lactate route: muscle sends carbon as lactate and carbon-plus-nitrogen as alanine, getting glucose back both times, but only the alanine route also solves muscle's ammonia problem, because muscle cannot make urea.",
      cn: "到达肝脏的氨基酸，或者进入蛋白质合成 —— 大多数血浆蛋白就是肝脏造的 —— 或者转送给其他器官，或者变成核苷酸与激素。用不掉的那些被转氨或脱氨，成为丙酮酸和柠檬酸循环中间物；放出的氨变成尿素排掉；碳骨架经糖异生变成葡萄糖，或者变成乙酰辅酶 A。**两餐之间，一部分肌肉蛋白被降解，它的氨基通过转氨作用交给丙酮酸生成丙氨酸；丙氨酸前往肝脏，肝脏把氮摘下来做成尿素，把丙酮酸变回血糖。**这就是葡萄糖–丙氨酸循环，它是乳酸那条路线的带氮孪生版：肌肉把碳以乳酸送去、把碳加氮以丙氨酸送去，两次都换回葡萄糖；但只有丙氨酸这条路同时解决了肌肉的排氨问题，因为肌肉自己不能合成尿素。",
      src: "A p.850"
    },
    {
      link_en: "and the liver exports one more fuel, usually met only as a disease",
      link_cn: "肝脏还输出另一种燃料 —— 而它通常只在讲疾病时被提到",
      en: "Fatty acids are the liver's own main oxidative fuel most of the time, and acetyl-CoA the liver does not need is converted to acetoacetate and beta-hydroxybutyrate — the ketone bodies — which circulate to other tissues and are burned there in the citric acid cycle. **Fatty acids cannot cross the blood-brain barrier and ketone bodies can, so fat converted into a small water-soluble acid reaches a brain that fat itself never could.** The quantities show this is a designed route rather than an overflow: ketone bodies supply up to a third of the heart's energy, and 60 to 70% of the brain's during prolonged fasting. Hold both framings at once — the same molecules are a normal, quantitatively major fuel travelling between organs, and, when nothing restrains the flow that makes them, an acid load large enough to kill.",
      cn: "多数时候，脂肪酸就是肝脏自己的主要氧化燃料；肝脏用不掉的乙酰辅酶 A 被转成乙酰乙酸和 β-羟丁酸 —— 也就是酮体 —— 它们随血液前往其他组织，在那里进入柠檬酸循环被烧掉。**脂肪酸过不了血脑屏障，而酮体过得去 —— 于是脂肪一旦被转换成小分子水溶性酸，就能到达它本身永远到不了的大脑。**数量说明这是一条被设计出来的路线，而不是溢流：酮体可供应心脏多达三分之一的能量，在长时间禁食时供应大脑能量的 60–70%。两种理解要同时握住 —— 同样这些分子，既是器官之间一种正常的、数量上举足轻重的燃料；而当制造它们的那股流量失去约束时，它们又是一份足以致命的酸负荷。",
      src: "A pp.850–851",
      see: [{ id: "L-23-5-1", en: "the same ketone bodies as the acute danger of uncontrolled diabetes", cn: "同样这些酮体，作为未控制糖尿病的急性危险" }]
    },
    {
      link_en: "the tissue that stores what the liver makes, in numbers",
      link_cn: "储存肝脏所造之物的那个组织，用数字说话",
      en: "A white adipocyte is a large sphere 30 to 70 micrometres across, filled by a single lipid droplet that is about 65% of the cell's mass and squashes the nucleus and mitochondria into a thin layer against the plasma membrane. The droplet holds triacylglycerols and sterol esters and is wrapped in a phospholipid monolayer rather than a bilayer, since one face of it is lipid already. White adipose tissue is about 15% of the mass of a healthy young adult. **Adipose tissue can make fatty acids from glucose, but in humans much of the fatty acid synthesis happens in hepatocytes — the liver largely makes the fat and adipose largely stores it**, receiving it as very-low-density lipoproteins from the liver and as chylomicrons from the gut.",
      cn: "一个白色脂肪细胞是直径 30–70 微米的大球，被一个单一的脂滴填满；这个脂滴约占细胞质量的 65%，把细胞核和线粒体挤成贴着质膜的薄薄一层。脂滴里装的是三酰甘油和固醇酯，外面裹着一层磷脂单层而不是双层 —— 因为它朝内的那一面本来就是脂。白色脂肪组织约占一个健康年轻成人体重的 15%。**脂肪组织确实能由葡萄糖合成脂肪酸，但在人体内，很大一部分脂肪酸合成发生在肝细胞里 —— 肝脏主要负责造脂肪，脂肪组织主要负责存脂肪**，脂肪以极低密度脂蛋白的形式从肝脏来、以乳糜微粒的形式从肠道来。",
      src: "A p.851"
    },
    {
      link_en: "getting fat back out is not a tap being opened, it is a gate being unlocked",
      link_cn: "把脂肪放出来，不是拧开一个龙头，而是打开一道门",
      en: "When fuel demand rises, lipases inside the adipocyte hydrolyse the stored triacylglycerols and the free fatty acids travel to skeletal muscle, to the heart, and in starvation to the liver. **The lipid droplet is coated with a protein called perilipin, which physically denies the lipases access to what is inside, and epinephrine phosphorylates perilipin to open that door.** The phosphorylation is cAMP-dependent. Hormone-sensitive lipase is separately switched on by phosphorylation as well, and insulin counterbalances epinephrine so that lipase activity falls. The body's whole fat store is therefore locked and unlocked by two hormones acting on a coat protein.",
      cn: "燃料需求上升时，脂肪细胞内的脂肪酶把储存的三酰甘油水解掉，游离脂肪酸前往骨骼肌、心脏，饥饿时还前往肝脏。**脂滴表面裹着一个叫周脂素（perilipin）的蛋白，它在物理上不让脂肪酶碰到里面的东西；而肾上腺素触发周脂素的 cAMP 依赖性磷酸化 —— 这一步才是把门打开的动作。**激素敏感脂肪酶也另外被磷酸化激活；胰岛素则与肾上腺素反向抵消，使脂肪酶活性下降。于是全身的脂肪库，是由两种激素作用在一个外壳蛋白上来上锁和开锁的。",
      src: "A pp.851–852"
    },
    {
      link_en: "two things about adipose tissue look like design faults and are not",
      link_cn: "脂肪组织有两件事看着像设计缺陷，其实不是",
      en: "Up to 70% of the fatty acids the lipases release are re-esterified inside the same cell, rebuilding the triacylglycerols just taken apart; each turn costs ATP because the fatty acids have to be re-activated, so the net output is heat. Calling that futile misses the point: a cycle already running at 70% gives the tissue a large standing flux that can be redirected instantly by shifting the balance a few per cent either way, and the ATP is the price of that responsiveness. **The glycerol released by the adipocyte's own lipases cannot be reused, because adipocytes have no glycerol kinase, so the glycerol phosphate for a new triacylglycerol is made from pyruvate instead.** That route is called glyceroneogenesis and it uses cytosolic PEP carboxykinase — a gluconeogenic enzyme doing a job with nothing to do with making glucose. One absent enzyme dictates an entire detour.",
      cn: "脂肪酶释放出来的脂肪酸，多达 70% 会在同一个细胞里被重新酯化回去，把刚拆开的三酰甘油又装回来；每转一圈都要花 ATP，因为脂肪酸必须重新活化 —— 所以净产出是热。把这叫「无效循环」是没看懂重点：一个已经开在 70% 的循环，等于给这个组织一股随时待命的大流量，只要把平衡往任一边挪动几个百分点，流向就立刻改变；ATP 买的就是这份反应速度。**脂肪细胞自己的脂肪酶释放出来的甘油骨架无法再利用，因为脂肪细胞没有甘油激酶、没法给游离甘油加磷酸；于是重建三酰甘油所需的甘油磷酸，改由丙酮酸来造。**这条路线叫甘油异生，用的是胞质型 PEP 羧激酶 —— 一个糖异生的酶，干着一件与造葡萄糖毫无关系的活。少一个酶，就规定了一整条绕路。",
      src: "A p.852"
    },
    {
      link_en: "and one kind of fat tissue makes that heat on purpose",
      link_cn: "而有一种脂肪组织，是专门为了产热而存在的",
      en: "Brown adipocytes are smaller and polygonal, store their fat in several small droplets rather than one, and carry far more mitochondria and a richer blood supply — the cytochromes of those mitochondria plus the haemoglobin of the capillaries are what make the tissue brown. **Uncoupling protein 1, also called thermogenin, gives protons a route back into the mitochondrial matrix that bypasses ATP synthase, so the energy of the gradient comes out as heat.** Say it precisely: electron transfer still runs, arguably faster because the gradient never builds up to oppose it, but nothing is phosphorylated. A newborn carries 1 to 5% of its body mass as brown fat, deposited exactly where the heat protects what matters — over the vessels to the head, the major abdominal vessels, and the pancreas, adrenals and kidneys — because a newborn cannot shiver effectively. An adult keeps almost none, under 0.1% of body mass, but cold exposure or beta-adrenergic stimulation converts nearby white adipocytes into beige adipocytes, which have multiple droplets, are mitochondria-rich and make uncoupling protein 1; irisin, a peptide hormone released by exercising muscle, triggers the same conversion.",
      cn: "棕色脂肪细胞更小、呈多边形，脂肪存成好几个小脂滴而不是一个大的，线粒体多得多、血供也丰富得多 —— 使这个组织呈棕色的，正是这些线粒体里的细胞色素加上毛细血管里的血红蛋白。**解偶联蛋白 1（又叫产热素）给质子提供了一条绕开 ATP 合酶、回到线粒体基质的通路，于是质子梯度的能量以热的形式出来。**要说得精确：电子传递照常进行，甚至可以说更快，因为梯度从来没机会建立起来去对抗它 —— 只是什么都没有被磷酸化。新生儿身上有 1–5% 的体重是棕色脂肪，而且正好沉积在「热能保护要害」的位置：通向头部的血管、腹部大血管，以及胰腺、肾上腺和肾脏周围 —— 因为新生儿还不能有效地发抖产热。成年人几乎不剩，不到体重的 0.1%；但受冷或 β-肾上腺素能刺激，会把旁边的白色脂肪细胞转变成米色脂肪细胞：多个脂滴、富含线粒体、并且制造解偶联蛋白 1。运动中的肌肉释放的一种肽激素鸢尾素（irisin），也能触发同样的转变。",
      src: "A pp.852–853"
    },
    {
      link_en: "muscle is really two tissues, and it burns a different fuel at every intensity",
      link_cn: "肌肉其实是两种组织，而且每一个强度档位烧的燃料都不一样",
      en: "Slow-twitch or red muscle gives relatively low tension but resists fatigue, making its ATP by oxidative phosphorylation; it is packed with mitochondria and densely supplied with blood vessels. Fast-twitch or white muscle has fewer mitochondria and less blood supply but develops more tension and develops it faster, tiring sooner because it spends ATP faster than it can replace it. Then the fuel ladder: at rest, muscle burns free fatty acids from adipose tissue; in light activity it adds blood glucose; at maximum, blood flow cannot deliver oxygen fast enough, so the muscle breaks its own stored glycogen down to lactate by fermentation, which answers a sudden demand faster than oxidative phosphorylation can. Breaking glycogen down that way uses phosphorolysis — cleavage by phosphate rather than by water. **Each glucose unit taken from glycogen yields three ATP rather than two, because phosphorolysis releases glucose 1-phosphate directly and so spares the ATP the hexokinase step would have cost.** Two honest limits: muscle glycogen is only about 1% of the tissue's weight, and accumulating lactate lowers pH and makes the muscle less efficient. Afterwards the heavy breathing supplies extra oxygen for oxidative phosphorylation in the liver, whose ATP drives gluconeogenesis from that lactate, and the glucose returns to the muscle — the Cori cycle.",
      cn: "慢肌（红肌）产生的张力相对较小但极耐疲劳，靠氧化磷酸化制造 ATP，线粒体密集、血管丰富。快肌（白肌）线粒体较少、血供也差，但能产生更大的张力而且更快产生；它更早疲劳，因为它花 ATP 比补 ATP 快。接着是燃料阶梯：静息时，肌肉烧的是脂肪组织送来的游离脂肪酸；轻度活动时再加上血糖；全力活动时，血流根本来不及把氧送到，于是肌肉把自己储存的糖原发酵分解成乳酸 —— 发酵对突然出现的需求响应得比氧化磷酸化快。而这样分解糖原用的是磷酸解（phosphorolysis）—— 也就是用磷酸而不是用水来切开。**从糖原上取下的每一个葡萄糖单位产出的是三个 ATP 而不是两个，因为磷酸解直接放出葡萄糖-1-磷酸，省下了己糖激酶那一步本该花掉的 ATP。**两个必须如实说明的限制：肌糖原只占肌肉重量约 1%；而乳酸堆积会降低 pH、使肌肉效率下降。事后的大口喘气，供的是肝脏里氧化磷酸化所需的额外氧气；肝脏用这些 ATP 驱动糖异生把乳酸变回葡萄糖，葡萄糖再回到肌肉 —— 这就是 Cori 循环。",
      src: "A pp.853–855"
    },
    {
      link_en: "muscle also holds a third energy currency, and it ends up as a blood test",
      link_cn: "肌肉还持有第三种能量货币 —— 而它最后变成了一项血液检查",
      en: "Phosphocreatine sits in muscle at 10 to 30 mM, three to five times the ATP concentration at rest, and creatine kinase uses it to regenerate ATP from ADP the instant contraction starts, running the reaction backwards during recovery to refill the store. The evidence is unusually direct: phosphorus NMR of an exercising limb shows the ATP signal barely moving while the phosphocreatine signal falls and then refills, which is exactly what a buffer looks like — the buffered species holds constant and the reservoir absorbs the change. **Heart muscle has its own creatine kinase isozyme, Mb, which appears in the blood when a heart attack damages the myocardium and peaks 12 to 36 hours after the event.** It is absent from blood normally, rises within 2 hours, and returns to normal in 3 to 5 days, so one measurement both confirms the diagnosis and dates it. Creatine and phosphocreatine also break down spontaneously to creatinine, which healthy kidneys clear, so a blood creatinine above the normal 0.8 to 1.4 mg/dL indicates impaired kidney function. And one supplement finding worth repeating accurately: taking dietary creatine into muscle efficiently requires continuous exercise, and without exercise creatine supplementation is of little value. Plants contain no creatine, so a vegan's only source is synthesis from glycine, arginine and methionine.",
      cn: "磷酸肌酸在肌肉里的浓度是 10–30 mM，静息时是 ATP 浓度的三到五倍；收缩一开始，肌酸激酶就用它把 ADP 变回 ATP，恢复期再把反应倒着跑、把储备填满。证据异常直接：对正在运动的肢体做磷 NMR，全程 ATP 的信号几乎不动，而磷酸肌酸的信号先降后回升 —— 这正是一个缓冲体系该有的样子：被缓冲的那一方保持恒定，储库吸收全部变化。**心肌有自己的肌酸激酶同工酶 Mb，正常时不出现在血液里，心肌梗死损伤心肌时被释放出来：2 小时内升高，事件发生后 12–36 小时达峰，3–5 天回到正常。**所以一次测量既能确诊，又能给事件定时间。肌酸与磷酸肌酸还会自发降解成肌酐，健康的肾脏把它清除掉；所以血肌酐高于正常的 0.8–1.4 mg/dL，提示肾功能受损。还有一条关于补剂的结论值得原样转述：要让膳食肌酸高效进入肌肉，必须有持续的运动；没有运动，补肌酸意义不大。植物不含肌酸，所以纯素食者的唯一来源是由甘氨酸、精氨酸和甲硫氨酸从头合成。",
      src: "A pp.854–857"
    },
    {
      link_en: "heart muscle is built the opposite way from skeletal muscle, and its commonest catastrophe follows from that",
      link_cn: "心肌的构造与骨骼肌正相反 —— 而它最常见的灾难正由此推出",
      recall_en: "skeletal muscle works in bursts and can go anaerobic when pushed",
      recall_cn: "骨骼肌是间歇工作的，被逼急了可以转无氧",
      en: "Heart muscle contracts continuously in a regular rhythm and its metabolism is completely aerobic at all times; mitochondria make up almost half the volume of its cells. It burns mainly free fatty acids plus some glucose and ketone bodies taken from the blood, all oxidised aerobically, and it holds almost nothing in reserve: no large stores of lipid or glycogen, and enough phosphocreatine for a few seconds of contraction. **An organ that is obligately aerobic, carries seconds of reserve and cannot ferment has no way to survive an interruption of its oxygen supply, so the muscle downstream of a blocked vessel dies.** That is a myocardial infarction, and the Mb isozyme appearing in blood afterwards is released by exactly this cell death. What the design is sustaining makes it intelligible: steady aerobic metabolism lets a human heart pump nearly 6 litres a minute, about 350 litres an hour, on the order of 200 million litres over 70 years.",
      cn: "心肌以规律的节奏连续收缩，其代谢在任何时候都是完全需氧的；线粒体占据了心肌细胞将近一半的体积。它主要烧游离脂肪酸，外加从血里取来的一些葡萄糖和酮体，全部需氧氧化；而它几乎不留任何储备：没有大量的脂质或糖原储存，磷酸肌酸也只够收缩几秒钟。**一个强制需氧、只带着几秒钟储备、又无法切换到发酵的器官，根本没有办法熬过供氧中断 —— 所以血管一旦被堵住，下游的心肌就死掉。**这就是心肌梗死；而事后出现在血里的 Mb 同工酶，正是由这场细胞死亡释放出来的。看看这套设计在支撑什么，就明白它为何如此：稳定的需氧代谢让人的心脏每分钟泵出将近 6 升血，每小时约 350 升，70 年下来在 2 亿升的量级上。",
      src: "A p.855"
    },
    {
      link_en: "and the organ all of this has been feeding",
      link_cn: "以上这一切一直在供养的那个器官",
      en: "Neurons of the adult mammalian brain normally use only glucose as fuel, while astrocytes, the other major brain cell type, can oxidise fatty acids. The brain is about 2% of body mass and accounts for almost 20% of the body's resting oxygen consumption, with over 90% of neuronal ATP coming from oxidative phosphorylation, and it keeps very little glycogen, so it depends on incoming blood glucose continuously. That enormous ATP bill is spent on one pump: the electrogenic Na+/K+ ATPase, which moves two K+ in and three Na+ out per cycle and is called electrogenic exactly because those numbers differ, so net charge crosses every turn. The potential it maintains is what an action potential discharges as it sweeps along a neuron. **Neurons cannot use fatty acids from the blood at all, but they can get up to 60% of their energy from oxidising beta-hydroxybutyrate, so the brain can run on body fat after all.** That is what spares muscle protein, until severe starvation makes muscle the brain's last source of glucose by way of gluconeogenesis. The order of sacrifice is glycogen, then fat as ketone bodies, then the body's own muscle.",
      cn: "成年哺乳动物脑中的神经元通常只用葡萄糖作燃料；脑中另一大类细胞星形胶质细胞则能氧化脂肪酸。大脑约占体重的 2%，却占去全身静息耗氧量的将近 20%，神经元 ATP 的 90% 以上来自氧化磷酸化；它几乎不存糖原，所以持续依赖血液送来的葡萄糖。这笔巨额 ATP 账单花在一个泵上：生电性的 Na⁺/K⁺-ATP 酶，每个循环把两个 K⁺ 泵进来、三个 Na⁺ 泵出去 —— 它之所以「生电」，恰恰因为这两个数不相等，每转一圈就净搬走一份电荷。它维持的跨膜电位，正是动作电位沿神经元扫过时释放掉的东西。**神经元完全不能利用血中的脂肪酸，但它们可以从氧化 β-羟丁酸中获得多达 60% 的能量 —— 这让大脑得以靠身体的脂肪运转，而脂肪本来是它碰都碰不到的，同时也省下了肌肉蛋白质。**牺牲的顺序是：先糖原，再以酮体形式动用脂肪，最后才是身体自己的肌肉。",
      src: "A pp.855–856"
    },
    {
      link_en: "one tissue is left, the one that connects all the others",
      link_cn: "还剩一种组织 —— 就是把其余所有组织连起来的那一种",
      en: "Blood mediates every metabolic interaction between tissues: nutrients from gut to liver and from liver and adipose to everywhere else, waste from extrahepatic tissues to liver and kidney, oxygen from lung to tissue and carbon dioxide back, and hormonal signals — in that last role the circulatory system resembles the nervous system, both integrating the activities of separate organs. An adult has 5 to 6 litres of it, almost half occupied by cells, and more than 70% of the dissolved solids are plasma proteins. The cleanest case of structure dictating metabolism is the red cell: an erythrocyte loses its nucleus and its mitochondria as it differentiates, so it relies on glycolysis alone for ATP — the cell that carries oxygen around the body cannot use any of it — and its lactate goes to the liver like the muscle's. **Blood glucose is held at about 4.5 mM, and at 70 mg per 100 mL a person is uncomfortable and mentally confused, while 40 and below is severe hypoglycaemia.** Falls between those bring coma and convulsions, and extreme hypoglycaemia kills — which is why holding that one number steady gets a whole regulatory system to itself.",
      cn: "血液居间促成组织之间的每一次代谢往来：营养物从肠道到肝脏、从肝脏和脂肪组织到其他各处；废物从肝外组织送到肝脏和肾脏；氧气从肺到组织、二氧化碳反向运回；还有激素信号 —— 在最后这项角色上，循环系统与神经系统相似，两者都在整合不同器官的活动。一个成年人有 5–6 升血，其中将近一半的体积被细胞占据，而溶解的固形物中 70% 以上是血浆蛋白。「结构决定代谢」最干净的例子是红细胞：红细胞在分化过程中丢掉了细胞核和线粒体，所以只能靠糖酵解获得 ATP —— 这个在全身运送氧气的细胞，自己一点氧都用不了 —— 它产生的乳酸和肌肉的一样送去肝脏。**血糖被维持在约 4.5 mM；降到每 100 mL 70 mg 时，人会感到不适、思维混乱，继续下降会昏迷、抽搐，40 以下是严重低血糖，而极度低血糖会致死。**",
      src: "A pp.857–858",
      see: [{ id: "L-23-3-1", en: "the four-hormone system that holds that one number steady", cn: "把那一个数字稳住的四激素系统" }]
    },
    {
      link_en: "one relation between two of those fuels has been assumed all along, and it is worth stating on its own",
      link_cn: "上面一直默认了两种燃料之间的一个关系 —— 这个关系值得单独说清楚",
      en: "Both saccharides and lipids are degraded in the organism to acetyl-CoA, and that shared destination is the basis of every connection between the two. What happens next is decided by the cell's energy status: when the cell needs energy, acetyl-CoA is oxidised to carbon dioxide and water by the citrate cycle and the respiratory chain; when the energy demands of the cell are low, acetyl-CoA is used above all for the synthesis of fatty acids and fats. **In the case of an excess supply of either saccharides or fats, the nutrients are converted into fats and stored, because once the cell has enough energy, fat is the only direction acetyl-CoA can go.**",
      cn: "糖类与脂质在机体中都被降解为乙酰辅酶 A，而这个共同的去处，是二者之间一切联系的基础。接下来发生什么，由细胞的能量状态决定：细胞需要能量时，乙酰辅酶 A 经柠檬酸循环与呼吸链被氧化为二氧化碳和水；细胞的能量需求低时，乙酰辅酶 A 主要被用于合成脂肪酸与脂肪。**无论是糖类还是脂肪供应过量，养分都会被转变为脂肪并贮存起来 —— 因为一旦能量够了，脂肪就是乙酰辅酶 A 唯一能去的方向。**",
      src: "B §10.1.3, p.220"
    },
    {
      link_en: "and the traffic does not run both ways, which is one missing reaction",
      link_cn: "而这条路不是双向的 —— 差的只是一个反应",
      recall_en: "gluconeogenesis in the liver ran on lactate and on alanine, both of which reach pyruvate; fat does not",
      recall_cn: "肝脏的糖异生跑的是乳酸和丙氨酸 —— 两者都能到达丙酮酸；脂肪不能",
      en: "**The animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis, and therefore cannot form saccharides from fats.** The restriction to animals is deliberate and correct: plants and some microorganisms have the glyoxylate cycle, which does exactly this conversion, and that is how a germinating oilseed turns stored fat into sugar. One partial exception is worth keeping in view — the glycerol half of a fat does reach sugar metabolism; what cannot become sugar in an animal is the acyl carbon, which is the great majority of a fat's mass. Read the two steps together and the asymmetry is the whole of it: sugar becomes fat freely, fat becomes sugar not at all, and every fasting programme in this chain exists because of that.",
      cn: "**动物机体无法把乙酰辅酶 A 转变为丙酮酸（糖合成的起始化合物），因而也无法由脂肪生成糖。**限定在「动物」上是有意为之、而且正确：植物与某些微生物拥有乙醛酸循环，它恰恰完成这一转变 —— 萌发中的油料种子就是这样把贮存的脂肪变成糖的。有一个局部例外值得留意：脂肪中甘油的那一半确实能进入糖代谢；在动物体内不能变成糖的是酰基上的碳，也就是脂肪质量的绝大部分。把这两步合起来读，全部要点就是这个不对称：糖可以随意变成脂肪，脂肪一点也变不回糖 —— 而本链条里所有那些禁食程序之所以存在，正是因为这一条。",
      src: "B §10.1.3, p.220",
      see: [{ id: "10-8", en: "where the glycerol half of a fat enters sugar metabolism", cn: "脂肪里甘油那一半从哪里进入糖代谢" },
            { id: "10-5", en: "the overview diagram whose missing arrow encodes this same claim", cn: "那张总览图 —— 它缺失的箭头编码的正是同一个论断" }]
    }
  ]
};
