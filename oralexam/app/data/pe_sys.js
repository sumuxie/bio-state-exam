/* 横向卡 · 第二科（Protein Engineering & Synthetic Biology）第三张
   六种表达系统摆在一起，以及怎么在它们之间选。
   出处不是捷克生化书，是她自己的课堂笔记 pesbexplain/data/ch2.js，
   节点 2-1（六个系统横向对比）、2-2（无细胞预告）、2-3（怎么选：问卷与决策链）、
   2-4（E. coli 为什么四十年后还是默认）、2-15（酵母质粒）、2-16（酵母的实际做法与两个缺点）、
   2-17（昆虫细胞与杆状病毒生物学）、2-18（BEVS 与 Bac-to-bac）、2-19（S2 稳定细胞系）、
   2-20（哺乳动物细胞系与培养）、2-21（哺乳动物转染与质粒）、2-22（Tet-On 与 Tet-Off）、
   2-23（BacMam，瞬时与稳定）、2-24（基因组整合：PiggyBac 与慢病毒）、2-25（N-糖基化），
   外加 pesbexplain/data/ch6.js 的案例主线 6-1（EPO：宿主决定这个蛋白到底能不能工作）。
   那个文件自己区分两层：points = 幻灯片上有的；beyondPoints = 讲义没放的延伸。
   卡上凡是来自 beyondPoints 或通用知识的，都标了「讲义没讲」或「通用」。
   <span class="pg"> 里是讲次和幻灯片号，例如 L3 s.25–26。
   ⚠ 这张卡不碰 E. coli 内部。启动子、菌株、IPTG、包涵体、复性、周质、裂解全在卡 pe-expr 上，
   这里只把 E. coli 当曲线的左端来用，细节一律交回去。
   接卡 pe-expr（E. coli 里面的一切）、pe-pur（选完宿主之后怎么纯化）、13（糖基化这种翻译后修饰）、
   x-mem（分泌路线与区室）、14（转染与转导这两个词）、12（可诱导控制，Tet 在模仿什么）。 */

window.CARDS.push({
id:'pe-sys', cross:1, w:0,
q:'六种表达系统怎么选 —— 蛋白需要被做什么，宿主就由它定',
qcn:'横向卡 · 第二科第三张 · 那张表不是六个选项，是一条曲线；选的不是最好的，是被迫的',
sub:'跨题共用 · 出处是她自己的 PESB 课堂笔记 · 接卡 pe-expr、pe-pur、13、x-mem、14、12',

cram:[
 {g:'开口 · 这张卡的骨架', gn:'<b>六个系统排成一排念一遍，那是目录，不是答案。</b>课上那一节自己叫「怎么选」，所以这张卡讲的是<b>那个决定</b>，六个宿主只是决定的取值范围。'},
 {n:'01', t:'这是一个什么问题',
  big:'选表达系统 ＝ <b>选哪个生物替你造这个蛋白</b>。常用的一共<b>六个</b>',
  en:'“Choosing an expression system means choosing the organism that will build your protein for you. There are six in ordinary use. E. coli, yeast, insect cells with baculovirus, insect S2 cells, mammalian cells, and cell-free synthesis. A host is the living organism doing the work. A system is that host plus the vector and the promoter that go with it.”',
  note:'<b>先给定义，再给名单</b>。<b>host</b> 和 <b>system</b> 这两个词要分开：他问「which host」和问「which system」是同一个决定，但后者还包含载体和启动子。<span class="pg">L3 s.2–3</span><br><b>E. coli 内部的一切交回卡 pe-expr</b>——启动子的两个轴、T7 的两级、菌株表、IPTG、包涵体、复性、周质、裂解，都在那张卡上。这张卡只把 E. coli 当曲线的左端。'},
 {n:'02', t:'整张卡的脊梁',
  big:'选择是被<b>「这个蛋白翻译完之后还需要被做什么」</b>逼出来的，<b>不是被「什么便宜」挑出来的</b>',
  en:'“The choice is forced by what the protein needs done to it after translation. It is not forced by what is cheap. A protein that needs nothing can be made in the fastest and cheapest host. A protein that needs disulfide bonds, or glycans, or one particular kind of glycan, pushes you up a ladder. Every rung on that ladder costs time and money. So if I can say what the protein needs, I have already named the host.”',
  note:'笔记自己的话是：<b>选宿主本质上只归结为一个问题——这个蛋白到底需不需要那些修饰？</b><span class="pg">L3 s.2–3</span> <span class="pg">L3 s.4</span><br><b>说出这一句，六个宿主就从「要背的表」变成「决定的取值范围」。</b>后面每一格都挂在它上面。',
  warn:'⚠ <b>有一件事不归这条管</b>：无细胞体系。它<b>根本不在这条轴上</b>——最快（1 天）、能做毒性产物，却产量低、成本高。按曲线的逻辑「没有修饰」该配「又快又便宜又高产」，它偏偏不是。<b>主动把它划出去，比被他挑出来好。</b>（「跳出曲线」这个说法在 beyondPoints。）'},
 {n:'03', t:'那张表是一条曲线，不是六个选项',
  big:'从左往右：<b>修饰越来越完整，时间和成本越来越高，产量越来越低</b>。记方向，不记格子',
  en:'“The table of six systems is one curve rather than six independent options. Read it from left to right. Post-translational modification gets more complete and more human-like. Time and cost rise, and yield falls. E. coli takes two days and yeast seven to ten. Baculovirus takes about three weeks and stable S2 cells about four. Mammalian work runs from two days to six weeks. Cell-free takes one day. There is essentially no fast, cheap, fully modifying option.”',
  note:'<b>好处是格子可以自己推</b>：被问「昆虫细胞比酵母怎么样」，不用回忆表格，只要知道昆虫在酵母右边，答案就是「修饰更好一些，但更慢更贵」。<span class="pg">L3 s.2–3</span><br>⚠ <b>「把这张表读成一条曲线」是 beyondPoints 的说法</b>，幻灯片上是六列数字。说的时候说「这是我读这张表的方式」，别说「老师讲过」。',
  tbl:{head:['系统','时间','成本','产量','翻译后修饰','痛点'], rows:[
   ['E. coli','2 天','低','高','<b>完全没有</b>','不可溶 · 包涵体'],
   ['酵母','7–10 天','低','高','有，但糖型不对','难裂解'],
   ['杆状病毒 · 昆虫','约 3 周','中','较低','有','裂解性 · 产量偏低'],
   ['S2 · 昆虫','约 4 周','中','高','有','操作繁琐'],
   ['哺乳动物','2 天–6 周','高','不稳定','<b>完整、类人</b>','贵且慢'],
   ['无细胞','1 天','高','低','没有','批次差异大 · 跳出曲线']]}},

 {g:'决策链 · 五步，按「区分度」排而不是按「重要性」排', gn:'<b>这条链是这一科最值钱的一段。</b>幻灯片上有的是那份<b>问卷</b>；<b>把它排成有顺序的五步，是 beyondPoints</b>。说的时候要明说这一点。'},
 {n:'04', t:'第一步 · 需不需要翻译后修饰',
  big:'这一个问题就<b>砍掉半张表</b>。需要 → E. coli 当场出局；不需要 → 从 E. coli 开始，永远如此',
  en:'“The first question is whether the protein needs post-translational modification in order to function. If it does not, I start with E. coli, every time. If it does, E. coli is out immediately and I move into the eukaryotic camp. This one question is first because it is the one that removes half the table. Everything else is asked inside a camp that has already been chosen.”',
  note:'<b>「按区分度排序，不按重要性排序」这句话本身就值分。</b>先问「要多少量」是没用的：不管答案是微克还是吨，你都还不知道该用哪一类宿主。<span class="pg">L3 s.4</span><br>幻灯片上的<b>问卷</b>本身也要能报几条：<b>有没有人已经做过 · 天然在哪个生物里表达 · 胞内还是分泌还是膜结合 · 单结构域还是多结构域 · 有没有修饰、有没有二硫键 · 有没有酶活和毒性 · 要不要辅因子或伙伴 · 用途和量级</b>。数据库：UniProt、RCSB PDB、Proteopedia、Expasy。<br><b>翻译后修饰本身接卡 13</b>，分泌路线和区室接卡 <b>x-mem</b>。'},
 {n:'05', t:'⚠ 有阶梯的问题，和没有阶梯的问题',
  big:'不溶有一整条阶梯可以爬；<b>没有糖基化机器连第一级都没有</b>。第一步检验的正是这个区分',
  en:'“There is a difference between a problem with a ladder and a problem without one. Insoluble protein has a ladder. Lower the temperature, change the strain, add a fusion partner, or refold from inclusion bodies. Unformed disulfide bonds also have a ladder, and it stays inside E. coli. Missing glycosylation machinery has no ladder at all. E. coli has no glycosyltransferases and no endoplasmic reticulum, so the ability is absent rather than badly tuned.”',
  note:'笔记的原话：<b>能把这句话说出来，就是「懂规则」和「会背规则」的分界。</b>（在 6-1 的 beyondPoints。）<br><b>不溶那条阶梯的每一级都在卡 pe-expr 上</b>，这里只报名字，别展开。<br>⚠ <b>这正是最常见的错答</b>：把「有二硫键」当成「必须用真核系统」。正确答案是<b>留在 E. coli，换个位置或换个菌株</b>。'},
 {n:'06', t:'第二步 · 糖必须像人的吗',
  big:'<b>必须像人 → 哺乳动物</b>（生产 CHO，科研 HEK293）；<b>只是要折叠帮助 → 昆虫或酵母</b>',
  en:'“The second question is whether the glycans have to be human-like. A therapeutic protein needs human-like glycans, and that sends me to mammalian cells. CHO is the production line and HEK293 is the research line. A protein that only needs help folding does not need that. Insect cells or yeast will do, and they cost far less.”',
  note:'<span class="pg">L3 s.4</span> <span class="pg">L3 s.44</span>。<b>这一步是第一步的细分</b>：第一步把你推进真核阵营，第二步决定你在阵营里走多远。<br><b>两条线为什么分开</b>：HEK293 容易摄取 DNA、瞬时产量高，适合筛选和小批量；CHO 要的是稳定、可重复、被监管机构接受、能在生物反应器里连续跑几周。<b>科研问「多快拿到第一个样品」，生产问「能不能一直一样」。</b>（这条解释在 beyondPoints。）'},
 {n:'07', t:'第三到第五步 · 都在阵营内部问',
  big:'<b>二硫键 · 毒性 · 量级。</b>这三个改变的是「阵营里怎么做」，不改变「在哪个阵营」',
  en:'“The last three questions are asked inside the camp. Does it have disulfide bonds? In E. coli I send it to the periplasm or use an oxidising strain. Is it toxic to the host? I use a tightly repressed promoter, or I go cell-free. In a cell-free reaction there is no living cell to poison. How much do I need? Micrograms for an assay allow anything. Milligrams for structural work mean E. coli or insect cells. Grams or more mean E. coli or CHO, and by then the economics decide.”',
  note:'<b>三条的细节分工</b>：二硫键和紧密启动子在卡 <b>pe-expr</b>（周质、Origami/SHuffle、araBAD）；无细胞在点 13；量级那一条是这张卡自己的。<span class="pg">L3 s.4</span><br><b>「到那个量级经济性主导决策」这一句值得说出口</b>——它表明你知道工业和科研问的不是同一个问题。'},

 {g:'六个宿主 · 每个一句它凭什么存在', gn:'<b>不是背参数，是背「它在曲线上占哪个位置、它换来了什么」。</b>每一格都能立刻接回点 02。'},
 {n:'08', t:'E. coli · 曲线的左端',
  big:'四十年后还是默认，而且<b>没有哪一条特别突出</b>——是一堆优点<b>叠加</b>起来的',
  en:'“E. coli is still the default after forty years, and no single reason explains it. It doubles in about twenty minutes. The media are cheap at roughly three dollars a litre. Scale-up is predictable and the genetic toolbox is enormous. It is also the only practical route to isotope labelling, because labelling needs a minimal medium with one defined nitrogen source and one defined carbon source.”',
  note:'<span class="pg">L3 s.7–9</span>。<b>「累加起来的」这个说法本身就是答案的一部分。</b><br><b>同位素标记那一条值得单独说</b>：NMR 和中子散射要蛋白全身由 15N、13C 或 2H 构成，做法是用 M9 极简培养基，唯一氮源换成 15NH4Cl、唯一碳源换成 13C-葡萄糖，<b>细菌别无选择</b>。哺乳动物细胞做不了——血清成分复杂、细胞不能只靠单一碳氮源活着、标记试剂在那个规模上贵到不现实。<b>所以「这个项目需要标记样品」本身就是一个选 E. coli 的硬理由。</b>（这段在 beyondPoints。）<br><b>三个弱点</b>：没有翻译后修饰、真核蛋白错折成包涵体、密码子偏好。<b>展开全在卡 pe-expr。</b>'},
 {n:'09', t:'酵母 · 质粒的取舍，和两个真正的缺点',
  big:'<b>稳定性和拷贝数互相牵制</b>，你不能两样都要。2µ 质粒是那个例外',
  en:'“Yeast is a eukaryote, so it performs most modifications, and it is still cheap and easy to culture. The plasmids are the interesting part, because stability and copy number pull against each other. An integrating plasmid has no origin at all and sits at one copy, very stable. A replicating plasmid carries an ARS and reaches twenty to fifty copies, but it segregates randomly and is unstable. A centromere plasmid carries CEN as well and segregates accurately, and that holds it to one copy. The two-micron plasmid is the exception, because it brings its own partitioning system.”',
  note:'<b>机制一句话</b>：<b>ARS 是复制起点</b>，让质粒能自我复制，但分裂时拷贝是<b>随机分配</b>的，很容易全跑进一个子细胞；<b>CEN 是着丝粒</b>，让纺锤体像拉染色体一样把质粒拉开，分配准了，<b>但正因为它表现得像染色体，拷贝数被压到 1</b>。<span class="pg">L3 s.25–26</span>（这段机制在 beyondPoints。）<br><b>实际操作</b>：电转或原生质球转化；Zeocin 抗性，或者<b>营养缺陷型标记</b>（Leu、His、Trp、Ura、Ade）；诱导型启动子 <b>AOX1</b>（甲醇诱导，来自 Pichia），组成型 <b>pGAP</b> 和 <b>pLAC4</b>；30 度，普通摇床，发酵罐里 <b>OD600 能到 300</b>。<span class="pg">L3 s.27–28</span>',
  tbl:{head:['质粒','带什么','拷贝数','稳定性','用在哪'], rows:[
   ['YIp 整合型','没有复制起点','1','<b>非常稳定</b>','长期表达'],
   ['YEp 复制型','ARS','20–50','<b>不稳定</b>','高但短暂的表达'],
   ['YCp 着丝粒型','CEN ＋ ARS','1','稳定','均衡表达'],
   ['2µ 附加体','天然质粒 ＋ 自带分配系统','50 以上','稳定','<b>两样都要的例外</b>']]},
  warn:'⚠ <b>酵母的两个缺点都要能说</b>：① <b>糖型不对</b>——高甘露糖型，在人体内有免疫原性，而且同一批里分子之间不均一；② <b>难裂解</b>——细胞壁太硬，和植物一起排在最难破的那一档，<b>所以 Pichia 的标准策略是分泌表达</b>，直接绕开破碎。'},
 {n:'10', t:'昆虫 · 杆状病毒，和那个借来的启动子',
  big:'你借的是 <b>polyhedrin 启动子</b>——一个为病毒在野外生存而进化出来的最强启动子，<b>而它的产物在实验室里没用</b>',
  en:'“Insect cells sit between yeast and mammalian cells. They fold complex proteins and carry out many modifications at moderate cost. The baculovirus route uses a circular double-stranded DNA virus of a hundred and twenty kilobase pairs. It infects over six hundred species, mostly larvae, and it does not replicate in vertebrates. That last point is the safety argument. My gene goes under the polyhedrin promoter, one of the strongest promoters known.”',
  note:'<b>为什么它这么强，而且删掉它不花钱</b>：野外的病毒把自己包进多角体蛋白晶体里才能在宿主之外存活，所以这个蛋白在<b>极晚期</b>以极高水平表达、成为被感染细胞的主要产物，它的启动子一直在被选择压力推向尽可能强。<b>而在细胞培养里病毒根本不需要在土壤中存活</b>，所以多角体蛋白完全多余——删掉它、把你的基因放进去，<b>病毒的复制能力毫发无损</b>。（这段在 beyondPoints。）<span class="pg">L3 s.29–31</span><br>细胞系：<b>Sf9 / Sf21</b>（草地贪夜蛾，6×10⁶/mL，皮实，标准系统）、<b>Hi5</b>（粉纹夜蛾，2×10⁶/mL，分泌产量往往更高）、<b>S2</b>（果蝇，30×10⁶/mL）。<b>半贴壁</b>，容易转悬浮；24–27 度，培养基略酸 pH 6.7。<br>流程 <b>Bac-to-bac</b>：克隆进 Tn7 位点之间 → 转化 DH10Bac（辅助质粒供转座酶）→ <b>杆粒</b>（在大肠杆菌里用 F 质粒起点维持的病毒基因组）→ <b>蓝白斑筛选 4 天</b> → 分离约 30 kbp 的大 DNA，要轻柔 → 脂质体转染 Sf9 → <b>4–7 天收 P1</b> → 扩增 P2、P3 → 优化 <b>MOI 1:1 到 10:1</b>。<span class="pg">L3 s.32–33</span>',
  warn:'⚠ <b>代次效应（passage effect）。</b>幻灯片自己写了「有些杆状病毒会丢失你的目标蛋白，P3 以后尤其明显」。<b>原因是你的基因对病毒是纯负担</b>——多两千个碱基要复制，对病毒繁殖零贡献，所以<b>丢掉插入片段的病毒复制更快、最终占领群体</b>。<b>典型症状是滴度很高而表达在掉</b>，不知道就会一头雾水。三条对策：<b>用 P1 或 P2 做表达 · 大量制备低代数病毒冻成种子库 · 必要时噬斑纯化单克隆</b>。（原因、名字和对策在 beyondPoints。）'},
 {n:'11', t:'S2 · 用一个稳定细胞系代替一个病毒',
  big:'前期花<b>三周</b>换后期的<b>可靠</b>。<b>建好之后就一直在表达，不用反复制备病毒</b>',
  en:'“Schneider S2 cells give a stable cell line instead of a virus. You co-transfect the expression vector with a separate selection vector at about ten to one, and you select for about three weeks while the DNA integrates in multiple copies. After that the line simply keeps expressing. The trade is time at the start against reliability later. It pays off when you will make the same protein many times over months.”',
  note:'启动子两个：组成型 <b>pAc</b>，诱导型 <b>金属硫蛋白启动子</b>（<b>铜离子</b>诱导）。筛选载体给的是<b>潮霉素或杀稻瘟菌素</b>抗性。<span class="pg">L3 s.33</span><br><b>它主要适合分泌型蛋白</b>，理由很顺：稳定细胞系持续表达，天然配「从培养基里反复收获而不毁掉培养物」。<br>⚠ <b>「时间换可靠」这个说法在 beyondPoints</b>，幻灯片上写的是「得到一个稳定的细胞群，不需要反复制备杆状病毒」。<b>两种说法不矛盾，但出处不同。</b>'},
 {n:'12', t:'哺乳动物 · 唯一给完整人源产物的',
  big:'<b>正确折叠 ＋ 正确二硫键配对 ＋ 复杂型糖基化</b>。代价是<b>结构性的</b>，不是偶然的',
  en:'“Mammalian cells are the only system giving a fully human-like product, with correct folding, correct disulfide pairing and complex glycosylation. HEK293 takes up DNA readily and gives high transient yield, so it is the research host. CHO is the industry standard, and nearly all approved therapeutic antibodies come from it. Serum-free medium runs a hundred to two hundred dollars a litre against three for E. coli. The cells also need thirty-seven degrees and five per cent carbon dioxide.”',
  note:'其他细胞系：<b>HeLa</b>（人）和 <b>COS</b>（猴），宿主范围广、和 BacMam 兼容。培养形式：摇瓶、转瓶、<b>波浪袋</b>、生物反应器、滚瓶、微载体；<b>悬浮驯化</b>是放大可行的前提。<span class="pg">L3 s.35–36</span><br><b>怎么把 DNA 送进去</b>：小规模用<b>脂质体转染</b>（Lipofectamine、JetPrime、FuGENE），另有电转、核转染、磷酸钙、基因枪、病毒；<b>大规模用线性 PEI</b>——它便宜到可以按升用，<b>这才是大规模瞬时表达在经济上可行的原因</b>。启动子：组成型 <b>CMV</b> 和 <b>EF1α</b>，诱导型 <b>TET</b> 和 <b>cumate</b>。筛选抗生素：<b>G418、潮霉素、杀稻瘟菌素、Zeocin</b>。<span class="pg">L3 s.37–38</span><br><b>转染和转导这两个词的完整区分在卡 14。</b>',
  warn:'⚠ <b>杀伤曲线（kill curve）不能跳。</b>不同细胞系对同一种抗生素敏感度差别极大——<b>G418 从 100 到 1000 µg/mL 都有</b>，所以工作浓度<b>必须在你自己的未转染细胞上测</b>，不能照抄方案。做法：一系列浓度，找出能在 <b>7–10 天内 100% 杀死</b>的最低那个。<b>太低，未转染细胞活下来，你的「稳定细胞系」里混着假阳性；太高，成功转染的细胞也一起死。</b>（这条在 beyondPoints。）'},
 {n:'13', t:'无细胞 · 唯一跳出曲线的那个',
  big:'<b>所有优点都是同一条优点：没有活细胞。</b>说出这一句，那张清单可以当场推出来',
  en:'“Cell-free synthesis steps off the curve rather than sitting on it. It is the fastest of all at one day, and it is the only system that can make a product toxic to a living cell. There is no cell to poison. A linear PCR product works directly as template, because nothing has to be transformed. The costs are low yield, high price and unsolved scale-up, so it is a special-purpose tool rather than a general host.”',
  note:'做法：培养并裂解细胞、制备<b>粗提取物</b>、加底物盐和能量来源、加模板。<b>粗提取物是整锅端过来的翻译机器</b>——核糖体、tRNA、氨酰-tRNA 合成酶、起始和延伸因子。为什么不逐个纯化了再拼？贵，而且<b>你不确定自己漏了什么</b>。<span class="pg">L3 s.5–6</span><br><b>线性 DNA 那一条省掉的不是一步，是一整条链</b>：PCR → 克隆 → 转化 → 铺板过夜 → 挑菌落 → 培养过夜 → miniprep → 测序。<b>对「一次试几十个变体」是质变，不是省几天。</b>（这两段在 beyondPoints。）<br><b>正式内容在第 7–8 讲</b>，这里只是预告。<b>判据一句话</b>：问「我要多快多便宜地拿到这个蛋白」，答案在曲线上；问「这个东西根本做不出来」，才轮到无细胞。'},

 {g:'⚠ 四个陷阱 · 每一个都有人当场栽过', gn:'这一组是这张卡的防守面。<b>每一条都主动说出来，比被他挑出来好。</b>'},
 {n:'14', t:'⚠ 陷阱一 · 「它会糖基化」不是一个答案',
  big:'<b>酵母、昆虫、哺乳动物的糖不是同一种糖。</b>「它是真核生物所以糖基化解决了」是标准错答',
  en:'“Saying that a host glycosylates is not an answer, because the glycans are not the same glycans. Yeast builds high-mannose structures, sometimes dozens of mannose residues in a chain. Those are immunogenic in humans and they vary between molecules within one batch. Insect cells modify, but not with fully human glycans either. Only mammalian cells give the human complex type. So the right question is not whether a host glycosylates. It is whether it installs the glycan my protein actually needs.”',
  note:'<b>两个后果要分开说</b>：<b>免疫原性</b>（糖链被当成异物，引发抗体和快速清除）和<b>异质性</b>（同一批里糖型就不一致，药品质量控制过不去）。<span class="pg">L3 s.27–28</span> <span class="pg">L3 s.44</span>（这一对在 beyondPoints。）<br><b>解法两条</b>：用<b>糖工程改造株</b>（敲掉酵母自己的甘露糖转移酶，装上人的糖基转移酶），或者直接上 <b>CHO</b>。<br><b>共有序列</b>：<b>Asn-X-Ser/Thr</b>，<b>X 可以是除脯氨酸以外的任何残基</b>。⚠ 背的时候最容易漏掉脯氨酸那个例外，而它恰恰是常考点（在 beyondPoints）。<b>而且有这个序列只说明该位点「可以」被糖基化，不等于一定被糖基化</b>——还取决于折叠过程中酶够不够得着。<b>糖基化本身接卡 13。</b>'},
 {n:'15', t:'⚠ 陷阱二 · 瞬时和稳定回答的是两个不同的问题',
  big:'决定性的问题是<b>「这个蛋白你要做多少次」</b>，不是「这一次要多少」',
  en:'“Transient and stable expression answer different questions. Transient gives material in under a week, needs a lot of DNA, works below three litres, and the batch variation can be large. Stable takes weeks to build, then needs little DNA, runs from a tenth of a litre up to ten thousand, and varies hardly at all. So the deciding question is how many times I will make this protein. It is not how much I need on one occasion.”',
  note:'<span class="pg">L3 s.40–41</span>。<b>成本落在哪里</b>：瞬时前期不花钱，每一次运行都付代价（大量 DNA ＋ 批次差异）；稳定前期花几周，之后在任何规模上都便宜且可重复。（这个说法在 beyondPoints。）<br><b>怎么做到稳定</b>：把构建体整合进基因组。两条路——<b>PiggyBac</b> 是转座子，转座酶识别<b>反向末端重复（ITR）</b>、插在染色体的 <b>TTAA</b> 位点，一次转染可以导入多个载体，插入片段最大 <b>100 kb</b>；<b>慢病毒</b>基于 HIV，RNA 逆转录成 DNA 再整合。<span class="pg">L3 s.42–43</span>',
  good:'加分的一句：<b>慢病毒能转导不分裂的细胞，而普通逆转录病毒不能。</b>像 MLV 那样的 γ-逆转录病毒必须等有丝分裂、核膜解体，前病毒 DNA 才接触得到染色质；<b>慢病毒的前整合复合物自带核定位信号</b>，能走核孔进入完整的细胞核。<b>这就是它能做神经元、肝细胞、静息淋巴细胞，也是它成为基因治疗主力的原因。</b>代价不是假想的：整合是随机的，落在原癌基因旁边加上 LTR 的残余启动子活性就可能致癌，早年 X-SCID 试验出过白血病病例——<b>所以要 BSL-2，所以现代载体都做了自失活 LTR</b>。（这段在 beyondPoints。）'},
 {n:'16', t:'⚠ 陷阱三 · Tet-On 和 Tet-Off 的名字说的是「药干了什么」',
  big:'搞反了，<b>整个实验就倒过来了</b>。名字描述的是<b>加药之后的结果</b>，不是不加药时的状态',
  en:'“The names say what the drug does. Tet-On means that adding tetracycline turns expression on. Tet-Off means that adding tetracycline turns expression off. There is only one mechanistic difference between them. Wild-type TetR binds the DNA and falls off when the drug binds it. The reverse TetR in a Tet-On system binds the DNA only when the drug is already bound. Both are fused to the VP16 activation domain, so binding the DNA means switching transcription on in either case.”',
  note:'元件：<b>七个 tetO 串联组成 TRE</b>（来自大肠杆菌）；<b>tTA</b> ＝ TetR ＋ VP16（Tet-Off）；<b>rtTA</b> ＝ 随机突变得到的反向 TetR ＋ VP16（Tet-On）。要凑齐三样：<b>目的基因上游带 TRE 的质粒 · 表达 tTA 或 rtTA 的细胞系或质粒 · 四环素（实际常用强力霉素）</b>。<span class="pg">L3 s.39</span><br><b>为什么 Tet-On 更常用</b>：Tet-On 只在你想表达的时候加药；<b>Tet-Off 要全程加药才能维持关闭</b>，诱导时还得把药彻底洗干净，既慢又贵。（名字的读法、唯一的机制差别、为什么 Tet-On 更常用，三条都在 beyondPoints。）<br><b>可诱导控制这件事本身接卡 12</b>——Tet 在模仿的正是 lac 那套阻遏物加诱导物的逻辑，只是换了个方向、还挂了个激活域。'},
 {n:'17', t:'⚠ 陷阱四 · 跑胶看到的是纯度，不是活性',
  big:'<b>EPO 是这张卡最强的一个论据。</b>序列全对、可溶、全长、胶上又纯又漂亮，<b>活性是零</b>',
  en:'“Erythropoietin is the strongest single argument on this card. It is a hundred and sixty-five amino acids and heavily glycosylated, and the glycosylation is required for activity rather than decorative. The sugar is not written in the gene. The host installs it after translation at an asparagine, any residue, serine or threonine site. So the product is the sequence times the host. E. coli would give the right sequence, full length, soluble and clean on a gel, with no activity at all.”',
  note:'<b>整条因果链一口气说完</b>：糖基化是活性必需 → 糖由宿主挂 → 所以宿主决定成败 → 而「真核」这个答案还不够精确（酵母的高甘露糖型不行）。<span class="pg">案例 6-1</span><br><b>工程师只有两根杠杆，EPO 是全课唯一把两根都演示了一遍的案例</b>：<b>改序列</b>——Darbepoetin 的 5 个突变本身什么也不干，不参与折叠也不碰受体，唯一的作用是<b>多拼出 2 个 Asn-X-Ser/Thr 信号</b>，让宿主自己多挂两条糖，体内半衰期约为天然 EPO 的 <b>3 倍</b>；<b>改宿主</b>——蛋白一个字母不改，换成 CHO 或人源化糖基转移酶菌株。<br><b>糖为什么能换来半衰期</b>：N-糖链体积大，末端<b>唾液酸</b>还带负电，流体力学半径变大、肾小球滤过变慢，同时把蛋白从肝脏的<b>去唾液酸糖蛋白受体</b>面前遮起来。<b>Mircera 用 PEG 达到同一个物理目标</b>，手段是化学的。⚠ <b>但化学替代不了前半份工（活性）</b>，所以宿主这个决定从来没得商量。',
  warn:'⚠ <b>这一格里唯一一句要小心的</b>：「跑胶报告的是纯度，一个化学量；你要知道的是它管不管用，一个功能量」——这是笔记 6-1 的 beyondPoints，不是幻灯片。<b>但它是这张卡最值得说的一句</b>，因为它说明你知道「检测不到」和「不存在」是两回事。<b>胶和浓度那一套在卡 pe-pur。</b>'}
],

end:'<b>这张卡的用法：</b>被问到「你怎么选表达系统」，先说那条脊梁——<b>选择是被「翻译完之后还需要被做什么」逼出来的，不是被「什么便宜」挑出来的</b>；再把表读成<b>一条曲线</b>（左到右：修饰变好，时间成本变差，产量变差）；再走<b>决策链五步</b>，第一步是糖基化。<br>然后<b>停下来等他挑一个宿主</b>，只讲那一个。<b>四个陷阱随时准备好</b>：<b>「它会糖基化」不是答案 · 瞬时和稳定回答两个问题 · Tet 的名字说的是药干了什么 · 酵母质粒稳定性和拷贝数不能两全</b>。<b>E. coli 内部的一切交回卡 pe-expr，选完之后怎么纯化交回卡 pe-pur。</b>',

sib:[
['<b>脊梁</b>：选择由「翻译后还需要被做什么」决定，不由「什么便宜」决定',
 '“The choice is forced by what the protein needs done to it after translation. It is not forced by what is cheap. If I can say what the protein needs, I have already named the host.”',
 '<b>整张卡的骨架。</b>先给这一句，他后面无论问哪个宿主，你都已经有位置放它了。'],
['<b>那张表是一条曲线</b>：左到右修饰变好，时间成本变差，产量变差',
 '“The six systems are one trade-off curve rather than six independent options. Left to right the modification gets more complete and everything else gets worse.”',
 '好处是<b>格子可以推</b>：只要知道昆虫在酵母右边，就知道「修饰更好，但更慢更贵」。⚠ 这个读法是笔记的延伸，不是幻灯片的话。'],
['<b>决策链第一步永远是糖基化</b>：需要 → E. coli 出局；不需要 → 从 E. coli 开始',
 '“The first question is whether the protein needs post-translational modification to function. That one question is first because it removes half the table.”',
 '<b>按区分度排序，不按重要性排序。</b>先问「要多少量」是没用的。'],
['⚠ <b>有阶梯的问题和没阶梯的问题</b>：不溶能爬，没有糖基化机器连第一级都没有',
 '“Insolubility has a ladder and disulfide bonds have a ladder. Missing glycosylation machinery has none, because the enzymes and the compartments are simply absent.”',
 '<b>说出这一句，就是「懂规则」和「会背规则」的分界。</b>把「有二硫键」当成「必须用真核」是常见错答。'],
['⚠ <b>「它会糖基化」不是答案</b>：酵母高甘露糖 · 昆虫也不是人的 · 只有哺乳动物给复杂型',
 '“Saying that a host glycosylates is not an answer, because the glycans are not the same glycans. Only mammalian cells give the human complex type.”',
 '两个后果：<b>免疫原性</b>和<b>批内异质性</b>。解法是糖工程改造株，或者直接上 CHO。'],
['<b>数字三组</b>：2 天 / 7–10 天 / 约 3 周 / 约 4 周 / 2 天–6 周 / 1 天；培养基 $3 / $40 / $100–200',
 '“E. coli two days, yeast seven to ten, baculovirus about three weeks, stable S2 about four, mammalian two days to six weeks, and cell-free one day.”',
 '<b>这两组数都在幻灯片上，可以放心报。</b>报完立刻给判据：数字是曲线的具体形式，结论不是从数字来的。'],
['⚠ <b>瞬时 vs 稳定</b>：决定性的问题是「你要做多少次」，不是「这一次要多少」',
 '“Transient gives material in under a week but varies a lot. Stable takes weeks to build and then runs cheaply and reproducibly at any scale.”',
 '瞬时前期不花钱、每次付代价；稳定前期花几周、之后一直便宜。<b>成本落在哪里，决定你选哪个。</b>'],
['⚠ <b>Tet 的名字说的是药干了什么</b>：Tet-On ＝ 加药就开；Tet-Off ＝ 加药就关',
 '“The name describes what adding the drug does. Wild-type TetR lets go of the DNA when the drug binds, and the reverse TetR binds the DNA only when the drug is already bound.”',
 '<b>搞反了整个实验就倒过来。</b>Tet-On 更常用，因为 Tet-Off 要全程加药维持关闭。'],
['⚠ <b>酵母质粒</b>：ARS 给拷贝数、CEN 给稳定，<b>你不能两样都要</b>；2µ 是例外',
 '“An ARS lets the plasmid copy itself but the copies are handed out at random. A CEN makes segregation accurate, and behaving like a chromosome holds the copy number at one.”',
 '<b>YEp 20–50 拷贝但不稳 · YCp 1 拷贝但稳 · YIp 整合最稳 · 2µ 自带分配系统所以两样都有。</b>'],
['<b>EPO</b>：糖不是基因编码的，宿主挂上去的 → <b>产物 ＝ 序列 × 宿主</b>',
 '“The sugar is not written in the gene. The host installs it after translation. So the product is the sequence times the host, and E. coli would give a pure, full-length, useless protein.”',
 '<b>这张卡最强的一个论据。</b>跑胶报告纯度，你要的是功能——缺的那一块在胶上根本看不见。']
],

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说这是在选什么，再给整个答案的形状',
  p:['“Choosing an expression system means choosing the organism that will build the protein for me. There are six in ordinary use. E. coli, yeast, insect cells with baculovirus, insect S2 cells, mammalian cells, and cell-free synthesis. A host is the organism. A system is that host together with the vector and the promoter that go with it.”',
     '“The answer has two halves. First, the six are not six independent options. They are one trade-off curve. Second, the choice along that curve is forced by what the protein needs done to it after translation, and not by what is cheap. If I can say what my protein needs, I have already named the host.”'],
  note:'<b>两个承重词在第一段就交代掉</b>：<b>host</b> 和 <b>system</b>。不分开，后面「载体和启动子也跟着宿主一起变」就没有立足点。<br><b>「两个半」这个形状是给他的地图</b>——他听完就知道可以往曲线挖，也可以往那条决定挖，而两边你都备好了。<br>⚠ <b>六个名字要一口气报完再停。</b>报完就停，不要顺势开始讲 E. coli。'},
 {tag:'段 2 · general', h:'把表读成一条曲线，顺手把数字和那个例外一起给掉',
  p:['“Read the table from left to right. Post-translational modification gets more complete and more human-like. Time and cost rise and yield falls. E. coli is two days and about three dollars a litre of medium. Yeast is seven to ten days and similarly cheap. Baculovirus is about three weeks and stable S2 cells about four. Mammalian work runs from two days to six weeks. Its medium costs a hundred to two hundred dollars a litre.”',
     '“There is essentially no fast, cheap, fully modifying option, and the reason is physical rather than a failure to optimise. Modification is done by a pipeline of enzymes in the endoplasmic reticulum and the Golgi. A cell that owns that pipeline is a complex, slow, expensive cell. You are not buying the modification. You are buying the machine that performs it. Cell-free synthesis is the one system off the curve, fastest of all at a day, able to make toxic products, and low in yield.”'],
  note:'<b>这一段的任务是把六列数字压成一句方向。</b>报完数字立刻给判据：<b>数字是这条曲线的具体形式，结论不是从数字来的。</b><span class="pg">L3 s.2–3</span><br>⚠ <b>「读成一条曲线」和「无细胞跳出曲线」两句都在 beyondPoints</b>，幻灯片上是一张表。被问出处就说这是我读这张表的方式。<br><b>「你买的不是修饰，是那台能做修饰的机器」这一句最值钱</b>，因为它把一条经验规律变成一条能推的理由。'},
 {tag:'段 3 · 稍展开', h:'决策链五步，落点是「有阶梯」和「没阶梯」的区分',
  p:['“The chain has five questions and they are ordered by how much each one removes. First, does the protein need post-translational modification in order to work? If not, I start with E. coli, every time. If so, E. coli is out at once. That one question removes half the table, which is why it comes first.”',
     '“Second, do the glycans have to be human-like? A therapeutic needs that and goes to mammalian cells. A protein that only needs folding help can stop at insect cells or yeast. Third, does it have disulfide bonds? That one stays inside E. coli, in the periplasm or in an oxidising strain. Fourth, is it toxic? Use a tight promoter or go cell-free. Fifth, how much do I need? Micrograms allow anything, milligrams mean E. coli or insect cells, and grams mean E. coli or CHO.”',
     '“The distinction underneath the whole chain is between a problem with a ladder and a problem without one. Insolubility has a ladder and disulfide bonds have a ladder. Missing glycosylation machinery has none, because the enzymes and the compartments are simply absent. Saying that out loud is the difference between knowing the rule and understanding it.”'],
  note:'<b>这一段是这张卡存在的理由。</b>课上那一节的标题就叫「怎么选」，所以答案必须是<b>一个决定</b>，不是一张表。<span class="pg">L3 s.4</span><br>⚠ <b>问卷在幻灯片上，把它排成有顺序的五步在 beyondPoints。</b>说的时候要明说这一点，别把自己的整理挂到讲义上。<br><b>第三到第五步的细节全部交回卡 pe-expr</b>——周质、Origami/SHuffle、araBAD 都在那张卡上。这里只报名字，报完就停。'},
 {tag:'段 4 · 留口子', h:'EPO 先把话钉死，再落到她自己每周在做的那一步',
  p:['“Erythropoietin is the case that makes this concrete. It is a hundred and sixty-five amino acids, heavily glycosylated, and the glycosylation is what the activity depends on. The sugar is not encoded in the gene. The host attaches it after translation. So the product is the sequence multiplied by the host, and E. coli-made erythropoietin would be pure and full length and useless.”',
     '“That also tells you the only two levers an engineer has over a modification the host installs. Change the sequence so the host adds more sugar, which is what Darbepoetin does with five mutations creating two extra sites. Or change the host, which is CHO or a strain carrying humanised glycosyltransferases. The protein itself is untouched in the second case.”',
     '“The same question turns up in my own work in a smaller form. I select binders by yeast display, so the molecule I select is built by yeast. Then I measure a dissociation constant on protein I made in E. coli. Those are two different factories. So the first thing I check is whether my binder carries a glycosylation site at all. If it does, the two copies are not the same molecule, and the number I measured belongs to the wrong one.”'],
  note:'<b>三个口子都在主场</b>：<b>Kd</b> 接卡 <b>02</b>；<b>yeast display 和筛选</b>接卡 <b>land</b>；<b>E. coli 那一步</b>接卡 <b>pe-expr</b>。<br><b>EPO 那两段是课上的内容</b>（案例 6-1，糖链、Darbepoetin、人源化菌株都在笔记里）。<br>⚠ <b>第三段是把课上的规则套到她自己的实验上，课上没有这个例子，笔记里也没有</b>。说的时候用 “in my own work” 起头，别说成老师讲过的。<b>「展示的宿主和生产的宿主不是同一个」这件事本身是通用逻辑</b>，不是讲义的话。<br><b>这一段最值钱的是最后一句</b>：它说明她知道<b>筛选和生产是两件事</b>，而且知道这件事会影响她测出来的那个数——这正是这一科想听到的。'}
],

why:{
 rungs:[
  ['为什么宿主能决定一个蛋白到底管不管用？','因为<b>修饰不是基因编码的</b>。基因只编码那串氨基酸，糖是蛋白造完之后由细胞的酶挂上去的。所以<b>产物 ＝ 序列 × 宿主</b>——换一个宿主，同一个基因出来的产物就不是同一个分子。EPO 是全课唯一把这件事两头都演示过的例子。'],
  ['那为什么不干脆给 E. coli 装上那套机器？','因为<b>糖基化不是一个反应，是内质网和高尔基体里一整套按顺序走的酶流水线</b>。有这条流水线的细胞，本身就是结构复杂、代谢负担重、长得慢的真核细胞。<b>你买的不是「修饰」这个功能，是那台能做修饰的机器，而这条曲线就是那台机器的运行成本。</b><br>⚠ 但要补一句诚实的：<b>确实有人在往便宜的细胞上装糖基化通路</b>，那正是绕开曲线的正经研究方向。笔记明说这是「方向」，<b>不是已经做成的事</b>。'],
  ['那为什么每个宿主挂上去的糖还不一样？','因为<b>那套酶不是为你的蛋白进化出来的</b>，是为那个生物自己的蛋白进化出来的。酵母的甘露糖转移酶做的是酵母要的高甘露糖型，昆虫的做昆虫的，人的做人的复杂型。<b>所以「它是真核生物」推不出「它挂的是人的糖」</b>——这一步推理里藏着一个物种，而不是一个门类。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that we are asking why glycan structures diverged between lineages in the first place, and that is comparative evolution rather than protein production.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'How do you choose an expression system?',
 mean:'<b>最短的问法，也是最可能的那一个。</b>答案要自带结构：先给那条判据，再走五步，然后<b>停下来等他挑一个宿主</b>。',
 say:'“I ask what the protein needs done to it after translation, because that decides the host and cost does not. The first question is whether it needs post-translational modification. If it does not, I use E. coli, every time. If it does, I ask whether the glycans have to be human-like. Human-like means mammalian cells, and folding help alone means insect cells or yeast. After that I ask about disulfide bonds, toxicity and scale, and those are answered inside the camp I have already chosen.”',
 tail:'<b>说完就停。</b>这是八分答案。<b>不要顺势把六个宿主全倒一遍</b>——他接下来挑哪一个，你就只讲那一个。'},

{q:'Compare the major expression systems for me.',
 mean:'他要的是<b>一条曲线</b>，不是六段并列的介绍。<b>先说方向，再给数字。</b>',
 say:'“There are six, and they read as one trade-off curve rather than six independent options. From E. coli through yeast and insect cells to mammalian cells, the modifications get more complete and more human-like, while time and cost rise and yield falls. E. coli is two days, yeast seven to ten, baculovirus about three weeks, stable S2 about four, and mammalian anywhere from two days to six weeks. Medium costs about three dollars a litre for E. coli and a hundred to two hundred for mammalian cells. Cell-free sits off the curve at one day, and it is the only one that tolerates a toxic product.”',
 tail:'<span class="pg">L3 s.2–3</span>。<b>「读成一条曲线」是笔记的延伸</b>，幻灯片上是一张表。<b>但报完之后一定要补那一句</b>：所以我只需要知道我的蛋白落在轴的哪个位置。'},

{q:'Your protein has disulfide bonds. Does that force you out of E. coli?',
 mean:'⚠ <b>这是决策链上最常被答错的一处。</b>他在试你知不知道「有阶梯」和「没阶梯」的区别。',
 say:'“No, and this is the place people get the chain wrong. Disulfide bonds are a post-translational modification, but they have a fix that stays inside E. coli. The cytoplasm is reducing, so I either send the protein to the periplasm with a signal peptide, or I use a strain whose cytoplasm has been made oxidising. Glycosylation is the one with no fix at all, and that is why the chain asks about it first and separately.”',
 tail:'<b>两条路的细节在卡 pe-expr</b>（Origami/SHuffle 的 trxB 和 gor、周质的 Dsb 系统、OmpA/pelB/phoA 信号肽）。<b>这里答完判据就把话交回去</b>，别在这张卡上展开。'},

{q:'Why is wild-type yeast not good enough for a therapeutic glycoprotein?',
 mean:'考的是<b>「有糖链」不等于「有对的糖链」</b>。这是「它是真核生物所以解决了」那个错答的正面版。',
 say:'“Because having glycans is not the same thing as having the right glycans. Yeast does perform N-glycosylation, but it builds high-mannose structures, sometimes dozens of mannose residues in one chain. Those are immunogenic in humans, so the drug provokes antibodies and is cleared quickly. They are also heterogeneous within a single batch, which makes pharmaceutical quality control very hard. The routes out are a glycoengineered yeast carrying human glycosyltransferases, or CHO cells.”',
 tail:'<b>两个后果要分开报</b>：免疫原性是身体的问题，异质性是药厂的问题。<b>能把这两条分开，说明你知道为什么治疗性蛋白很少用野生型酵母。</b>（这一对在 beyondPoints。）'},

{q:'When would you use insect cells rather than mammalian cells?',
 mean:'他要的是<b>决策链第二步</b>：区分「需要类人糖链」和「只是需要折叠帮助」。',
 say:'“When the protein needs eukaryotic folding and modification, but not specifically human glycans. Insect cells sit between yeast and mammalian cells at moderate cost. Baculovirus gives high yield for complex proteins and takes about three weeks. Stable S2 cells take about four weeks to select, but then the line simply keeps expressing with no virus to regenerate. If the product is a therapeutic and the glycans have to be human-like, insect cells do not solve it.”',
 tail:'<b>最后一句是主动交底</b>，比被他挑出来好。<b>昆虫细胞的修饰也不是人的修饰</b>——这一条和酵母那一条是同一个陷阱的两个面。'},

{q:'Transient or stable expression, and how do you decide?',
 mean:'他要的是<b>那个判据</b>，不是两张参数表。<b>先说它们回答的是不同的问题。</b>',
 say:'“They answer different questions, so I decide by how many times I will make this protein. Transient gives material in under a week, needs a lot of DNA, works below three litres, and the batch variation can be large. Stable takes weeks to establish, then needs little DNA, scales from a tenth of a litre to ten thousand, and varies very little. So transient suits testing and screening, and stable suits production.”',
 tail:'<span class="pg">L3 s.40–41</span>。<b>顺手能给的一句</b>：瞬时前期不花成本、每一次运行都付代价；稳定前期花几周、之后一直便宜且可重复。<b>成本落在哪里，就是这个决定的全部。</b>（这个说法在 beyondPoints。）'},

{q:'What is the difference between Tet-On and Tet-Off?',
 mean:'考的是<b>名字的读法</b>。搞反了整个实验就倒过来，所以这一条必须能一口气说对。',
 say:'“The name describes what adding the drug does. Tet-On means that adding tetracycline switches expression on. Tet-Off means that adding it switches expression off. Underneath there is one difference. Wild-type TetR binds the response element and lets go when the drug binds. The reverse TetR used in Tet-On binds the element only when the drug is already bound. Both are fused to VP16, so DNA binding activates transcription in both systems.”',
 tail:'<b>追问几乎一定是「那为什么 Tet-On 更常用」</b>：因为 Tet-On 只在你想表达的时候加药，而 <b>Tet-Off 要全程加药才能维持关闭</b>，诱导时还得彻底洗掉，既慢又贵。<b>可诱导控制这件事接卡 12。</b>'},

{q:'Why does the same gene give a different drug in two different factories?', odd:1,
 mean:'听起来像制药，其实问的是<b>这张卡的脊梁</b>：修饰不是基因编码的。',
 say:'“Because the sugar is not written in the gene. The host attaches it after translation, at an asparagine, any residue, serine or threonine site. So the product is the sequence multiplied by the host. Erythropoietin from E. coli has the right sequence and no activity. The same gene in CHO cells gives a working drug. That is also why an engineer has only two levers, the sequence and the host.”',
 tail:'<b>两根杠杆要能立刻举例</b>：改序列是 <b>Darbepoetin</b>（5 个突变造出 2 个新位点，半衰期约 3 倍）；改宿主是 <b>CHO</b> 或人源化糖基转移酶菌株。<b>翻译后修饰本身接卡 13。</b>'},

{q:'Why would anyone pay two hundred dollars for a litre of culture medium?', odd:1,
 mean:'听起来像采购问题，答案是<b>哺乳动物无血清培养基</b>，而它解释了决策链为什么那样排。',
 say:'“Because that is what serum-free mammalian medium costs, against about three dollars for E. coli. You are paying for the only cells that install fully human-like glycosylation. The cells also need thirty-seven degrees and five per cent carbon dioxide and a long timeline. That cost is exactly why the decision chain asks about modification first. You only pay it if you have to.”',
 tail:'<b>昆虫细胞居中，约 40 美元一升。</b>三个数都在幻灯片上，可以放心报。<b>报完立刻接回判据</b>：成本是结构性的，不是偶然的。'},

{q:'Your virus titre keeps going up and your protein keeps going down. What is happening?', odd:1,
 mean:'听起来像故障排查，问的是<b>代次效应</b>，而这是一个纯进化论的答案。',
 say:'“That is the passage effect in a baculovirus culture. My gene is pure burden to the virus, because it has two extra kilobases to copy and it contributes nothing to viral replication. So any virus that drops the insert replicates faster and takes over the population. The lecture warns about this from passage three onwards. The fixes are to express from passage one or two, to freeze a low passage seed bank, and to plaque-purify a single clone.”',
 tail:'<b>「症状是滴度高而表达在掉」这一句一定要说出来</b>，它是这条答案里最像做过实验的部分。⚠ <b>幻灯片只写了「会丢失，P3 以后尤其明显」</b>，原因、名字和三条对策都在 beyondPoints。'},

{q:'Why does a caterpillar virus make such a good promoter?', odd:1,
 mean:'听起来像昆虫学，问的是 <b>polyhedrin 为什么强、而且删掉它不花钱</b>。',
 say:'“Because polyhedrin evolved to be made in enormous amounts. In the wild the virus packages itself inside polyhedrin crystals so it survives outside a host, so that promoter has been under selection to be extremely strong. In cell culture the virus never needs to survive in soil, so polyhedrin is dispensable. The standard trick is to delete it and put my gene under its promoter. I inherit one of the strongest promoters in biology and the virus loses nothing it needs in culture.”',
 tail:'<b>这条答案的漂亮之处是它同时解释了「为什么强」和「为什么能拿走」</b>，而这两件事在幻灯片上是分开的。（整段在 beyondPoints。）另一个极晚期启动子是 <b>p10</b>。'},

{q:'Why can a yeast plasmid be abundant or reliable but not both?', odd:1,
 mean:'听起来像遗传学，问的是<b>酵母质粒那张表背后的机制</b>。',
 say:'“Because copy number and stability come from different parts. An ARS is an origin, so the plasmid copies itself, but the copies are handed out at random when the cell divides. That gives twenty to fifty copies and poor stability. A CEN is a centromere, so the spindle pulls the plasmid apart like a chromosome and segregation becomes accurate. Behaving like a chromosome holds the copy number at one. The two-micron plasmid is the exception, because it is a natural yeast plasmid and brings its own partitioning system.”',
 tail:'<b>四行表要能倒着背</b>：YIp 无起点、1 拷贝、最稳；YEp 带 ARS、20–50、不稳；YCp 带 CEN、1 拷贝、稳；2µ 天然质粒、50 以上、稳。<span class="pg">L3 s.25–26</span>（机制在 beyondPoints。）'},

{q:'Everything in the dish died during the selection. What did you skip?', odd:1,
 mean:'听起来像操作事故，答案是<b>杀伤曲线</b>——而它是一条「不能照抄方案」的规矩。',
 say:'“The kill curve. Cell lines differ enormously in how much antibiotic they tolerate, and G418 is used anywhere from a hundred to a thousand micrograms per millilitre. So the working concentration has to be measured on my own untransfected cells. I look for the lowest concentration that kills everything within seven to ten days. Too high and I kill the transfected cells too, and too low and untransfected cells survive and contaminate the line.”',
 tail:'<b>两头各有一种失败，要一起说</b>：太高杀掉阳性，太低混进假阳性。<b>「浓度必须测，不能抄」这句话本身就是答案的一部分。</b>（这条在 beyondPoints。）'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这张卡的英文句里用到的词，他会一个个拎出来问。<b>这一科是新的，所以定义链要比生化那边给得更满。</b>', items:[
{r:'高', q:'What is an expression system, and what is a host?',
 en:'“A host is the living organism that builds the protein. An expression system is that host together with the vector, the promoter and the delivery method that go with it. The distinction matters because the two are chosen together. Once I choose mammalian cells I am also choosing a CMV or an EF1-alpha promoter, a lipid or a polymer to deliver the DNA, and a serum-free medium. The host constrains everything else on the list.”',
 cn:'<b>这两个词是这张卡的第一句话，所以必须能分开讲。</b>他很可能只问其中一个，答的时候<b>顺手把另一个也划清</b>。<br>⚠ 这两条<b>是通用定义</b>，笔记里没有专门的一条。说的时候不要挂到讲义上。'},
{r:'高', q:'What is a post-translational modification, and why does it decide the host?',
 en:'“A post-translational modification is a chemical change made to a protein after it has been translated. Glycosylation, phosphorylation and disulfide formation are the examples that matter here. It decides the host because the modification is not encoded in the gene. It is installed by the enzymes the host happens to own. So the same sequence gives a different molecule in a different host, and the host is a functional requirement rather than a convenience.”',
 cn:'<b>这一条是整张卡的地基</b>，一定要背熟。<span class="pg">L3 s.4</span> <span class="pg">案例 6-1</span><br><b>翻译后修饰的完整一张卡是 13</b>，那里有 N-糖基化和 O-糖基化的区分、以及它们分别对应哪类蛋白。<b>这里只答「它为什么决定宿主」，答完把话交回去。</b>'},
{r:'高', q:'What is the N-glycosylation consensus sequence?',
 en:'“Asparagine, then any residue, then serine or threonine. The one exception is that the middle residue may not be proline, because a proline there rigidifies the backbone into a conformation the glycosyltransferase cannot use. And a consensus site tells you where glycosylation can happen, not where it does. Whether a given site is actually modified also depends on whether the enzyme can reach it during folding.”',
 cn:'⚠ <b>脯氨酸那个例外是常考点，而凭记忆背共有序列时最容易漏掉它。</b>（在 beyondPoints。）<span class="pg">L3 s.44</span><br><b>第二句同样要紧</b>：有位点不等于挂了糖。<b>这也正好解释了为什么即使序列相同，不同宿主的糖型还是不一样。</b>'},
{r:'高', q:'What is a high-mannose glycan?',
 en:'“It is an N-linked sugar made of a long chain of mannose residues, sometimes dozens of them. It is the characteristic yeast product and it is unlike the human complex type. Two things follow. It is immunogenic in humans, so it provokes antibodies and rapid clearance. And it is heterogeneous between molecules within one batch, which makes pharmaceutical quality control difficult.”',
 cn:'<span class="pg">L3 s.27–28</span>。<b>这一条是「酵母不是逃生口」那个陷阱的核心。</b>（两个后果在 beyondPoints。）<br><b>对应的解法也要能报</b>：糖工程改造株——敲掉酵母自己的甘露糖转移酶，装上人的糖基转移酶。'},
{r:'高', q:'What is transient expression, and what is stable expression?',
 en:'“Transient expression comes from DNA that has not integrated, so it is short-lived. It gives material in under a week, needs a lot of DNA, works below three litres, and the batch variation can be large. Stable expression comes from DNA integrated into the genome. It takes weeks to establish, then needs little DNA, runs from a tenth of a litre to ten thousand, and varies hardly at all.”',
 cn:'<span class="pg">L3 s.40–41</span>。<b>判据一句话：DNA 有没有整合进基因组。</b>其余的每一条参数都是这一条的后果。<br><b>顺手给那个决定性问题</b>：你要做多少<b>次</b>，不是这一次要多少。'},
{r:'中', q:'What is a bacmid, and what is the multiplicity of infection?',
 en:'“A bacmid is a baculovirus genome kept as a plasmid inside E. coli, using an origin taken from the F plasmid. That lets you engineer it by bacterial genetics before transfecting it into insect cells. The multiplicity of infection is the number of virus particles applied per cell, and in this system it is optimised between one to one and ten to one.”',
 cn:'<span class="pg">L3 s.32–33</span>。<b>杆粒是 Bac-to-bac 流程的关键一步</b>：你在细菌里做完所有构建，再把一个约 <b>30 kbp</b> 的大 DNA 转进昆虫细胞。<b>这么大的 DNA 操作要轻柔</b>，幻灯片自己提了这一句。'},
{r:'中', q:'What is a kill curve, and why can you not take the number from a protocol?',
 en:'“A kill curve is a titration on untransfected cells to find the lowest antibiotic concentration that kills all of them within seven to ten days. You cannot take the number from a protocol because sensitivity varies enormously between cell lines. G418 is used anywhere from a hundred to a thousand micrograms per millilitre. Too low and untransfected cells survive into the line. Too high and the transfected cells die as well.”',
 cn:'<span class="pg">L3 s.37–38</span>（整条在 beyondPoints）。<b>这一条是「必须测，不能抄」的标准例子</b>，而这类回答在口试上比背一个数字稳。<br><b>顺手能给的一句</b>：所谓「稳定细胞系」如果浓度选低了，里面混着一群从来没被转染过的细胞。'},
{r:'中', q:'What is an auxotrophic marker?',
 en:'“It is a selection method that needs no antibiotic. The host strain is missing a biosynthetic gene, so it cannot make some essential nutrient. The plasmid carries that gene back. You then grow the yeast on medium lacking the nutrient, and only cells carrying the plasmid survive. The usual choices are the amino acids leucine, histidine and tryptophan, or the bases uracil and adenine.”',
 cn:'<span class="pg">L3 s.27–28</span>。<b>酵母那一格里最容易被单独拎出来问的一个词。</b><br><b>另外两种转化方式也要能报</b>：电转，或者<b>原生质球转化</b>（细胞壁被酶解掉的酵母细胞）。抗生素筛选通常用 <b>Zeocin</b>。'},
{r:'中', q:'What is cell-free protein synthesis, and why is it off the curve?',
 en:'“It is transcription and translation carried out in vitro in a crude cell extract, with substrates, salts, an energy source and a template added. It is off the curve because its position is strange. It is the fastest system of all at one day, yet the yield is low and the cost is high. Every advantage it has follows from there being no living cell, and that is why it is a special-purpose tool rather than a general host.”',
 cn:'<span class="pg">L3 s.5–6</span>。<b>「所有优点都是同一条优点」这句话是这一节的全部</b>——能说出来就不用背那张清单，可以当场推。（在 beyondPoints。）<br><b>判据一句话</b>：问「多快多便宜」，答案在曲线上；问「这东西根本做不出来」，才轮到无细胞。<b>正式内容在第 7–8 讲。</b>'},
{r:'中', q:'What is BacMam?',
 en:'“A baculovirus engineered to carry a mammalian promoter instead of a viral insect one, so it delivers genes into mammalian cells. It cannot replicate in them, which is the safety argument. It transduces many cell types, it tolerates inserts above fifteen kilobases, and the toxicity is low. The cost is that you still have to generate the baculovirus first, which means insect cells and a longer procedure.”',
 cn:'<span class="pg">L3 s.40–41</span>。<b>它把杆状病毒的常见反对意见反过来了</b>：普通杆状病毒表达在昆虫细胞里造蛋白，所以得到昆虫糖型；<b>BacMam 只把病毒当递送工具</b>，蛋白由哺乳动物的机器造，带哺乳动物的修饰。<b>保留了病毒的效率和载货能力，不继承昆虫细胞的生化。</b>（这个说法在 beyondPoints。）'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个东西挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'实测', q:'Yeast, insect and mammalian cells all glycosylate. Is that the same thing?',
    ez:'“No, and treating it as the same thing is the standard error. Yeast builds high mannose structures. Those are immunogenic in humans. They also vary within one batch. Insect cells do modify the protein. But they do not build human glycans either. Only mammalian cells give the human complex type. So the question is never whether a host glycosylates. The question is whether it installs the glycan the protein needs.”',
    ezcn:'<b>不是同一件事，把它们当成同一件事是标准错误。</b>酵母做的是<b>高甘露糖型</b>，对人有免疫原性，而且同一批之间还不均一；昆虫细胞确实会修饰，<b>但也不是人的糖型</b>；<b>只有哺乳动物细胞给出人的复杂型</b>。<b>所以问题从来不是「这个宿主糖基化吗」，是「它装的是不是这个蛋白需要的那种糖」。</b>',
 en:'“No, and treating it as the same thing is the standard error. Yeast builds high-mannose structures, immunogenic in humans and heterogeneous within a batch. Insect cells modify, but not with fully human glycans either. Only mammalian cells give the human complex type. So the question is never whether a host glycosylates. It is whether it installs the glycan the protein actually needs.”',
 cn:'<b>判据一句话：有糖链不等于有对的糖链。</b><span class="pg">L3 s.27–28</span> <span class="pg">L3 s.44</span><br><b>这是这张卡上最容易丢分的一处</b>，因为「真核生物 → 会糖基化 → 问题解决」这条推理听起来毫无破绽。<b>破绽在于它推理的是门类，而糖型取决于物种。</b>'},
{r:'高', q:'Glycosylation and disulfide bonds are both modifications. Why does the chain ask about them separately?',
 en:'“Because the fixes are in different places. Glycosylation is a capability E. coli does not have at all, so the only answer is to change the host. Disulfide bonds are an environment problem rather than a capability problem. E. coli can form them, but the cytoplasm is reducing. So you change the environment instead, either by sending the protein to the periplasm or by using a strain with an oxidising cytoplasm.”',
 cn:'<b>判据一句话：换宿主，还是换房间。</b><span class="pg">L3 s.4</span><br>⚠ <b>把「有二硫键」当成「必须用真核系统」是一个常见的错误答案</b>，笔记专门点了这一条。<b>正确答案是留在 E. coli。</b>两条路的细节在卡 <b>pe-expr</b>。'},
{r:'高', q:'Tet-On and Tet-Off. Which way round are they?',
 en:'“The name says what adding the drug does. Tet-On means adding tetracycline switches expression on. Tet-Off means adding tetracycline switches it off. The name is about the consequence of adding the drug, not about the resting state. Mechanically there is one difference. Wild-type TetR binds DNA and falls off when the drug binds, and the reverse TetR binds DNA only when the drug is bound.”',
 cn:'<b>搞反了，整个实验就倒过来了。</b><span class="pg">L3 s.39</span>（名字的读法和唯一的机制差别都在 beyondPoints。）<br><b>两者都融合了 VP16</b>，所以「结合 DNA」在两个系统里都等于「激活转录」——<b>差别只在什么时候结合得上</b>。'},
{r:'高', q:'Baculovirus in Sf9 cells and a stable S2 line. When would you pick which?',
 en:'“Baculovirus gets you protein sooner but degrades with passage, so each campaign starts by regenerating or re-titring virus. A stable S2 line costs about three weeks once and then keeps expressing with no virus at all. So the trade is time at the start against reliability later. If I will make this protein repeatedly over months, S2 wins. If I need it once, baculovirus wins.”',
 cn:'<b>判据一句话：你要做一次，还是要做很多次。</b><span class="pg">L3 s.32–33</span> <span class="pg">L3 s.33</span>（这个说法在 beyondPoints。）<br><b>再加一条实际差别</b>：S2 主要适合<b>分泌型</b>蛋白，因为稳定细胞系持续表达，天然配「反复从培养基里收而不毁掉培养物」。'},
{r:'中', q:'YEp and YCp both replicate in yeast. What is the real difference?',
 en:'“What they carry, and therefore how the copies are distributed at division. YEp carries an ARS, which is an origin, so it replicates to twenty or fifty copies. But the copies are handed out at random, so it is unstable. YCp carries a CEN as well, which is a centromere, so the spindle segregates it accurately like a chromosome. That accuracy is exactly why it is held at one copy.”',
 cn:'<b>判据一句话：ARS 管复制，CEN 管分配。</b><span class="pg">L3 s.25–26</span>（机制在 beyondPoints。）<br><b>再补那个例外</b>：<b>2µ 质粒两样都有</b>，因为它是天然的酵母质粒，自带一套分配系统。<b>所以「不能两全」是原则，不是定律。</b>'},
{r:'中', q:'BacMam and ordinary baculovirus expression. What actually differs?',
 en:'“What the virus is being used for. In ordinary baculovirus expression the protein is made inside the insect cell, so you get insect glycosylation. In BacMam the virus is only a delivery vehicle into mammalian cells, and the protein is then made by mammalian machinery with mammalian modifications. The methodology of making the virus is identical in both. What changes is the promoter and the cell the protein is finally built in.”',
 cn:'<b>判据一句话：病毒是工厂，还是只是快递。</b><span class="pg">L3 s.40–41</span>（这个说法在 beyondPoints。）<br><b>BacMam 的代价</b>：流程更长（必须先做出杆状病毒）、大规模时要大量病毒、而且你仍然需要昆虫细胞。'},
{r:'中', q:'Transfection, transduction, transformation. Which one are we doing here?',
 en:'“Transfection for the chemical and physical routes into a eukaryotic cell, and transduction when a virus does the delivering. Lipofection, electroporation, calcium phosphate and linear polyethyleneimine are all transfection. Lentivirus and BacMam are transduction. Transformation is the word used for a bacterium taking up naked DNA, and yeast is done by electroporation or as spheroplasts.”',
 cn:'<b>四个词的完整区分在卡 14</b>，这里只答本科用到的那几个，<b>然后主动把话交回去</b>。<span class="pg">L3 s.37–38</span><br><b>规模那一条值得加</b>：小规模用脂质体，<b>大规模用线性 PEI</b>，因为它便宜到可以按升用。'}
]},

{g:'为什么类', gn:'这一族的「为什么」几乎都落在同一处：<b>修饰是宿主装上去的，而那套机器有它自己的进化来历</b>。再往下就是比较进化。', items:[
{r:'高', q:'Why is the modification question first in the chain, rather than how much you need?',
 en:'“Because the chain is ordered by how much each question removes, not by how important it sounds. The modification question removes half the table in one step. It sends you into either the cheap prokaryotic camp or the expensive eukaryotic one. Everything else, including scale, only adjusts what you do inside a camp that has already been chosen. Asking about scale first tells you nothing, because micrograms and tonnes can both be made in either camp.”',
 cn:'<b>「按区分度排序，不按重要性排序」这一句本身就是答案</b>，说出来比走一遍五步更显得你懂了。<span class="pg">L3 s.4</span><br>⚠ <b>问卷在幻灯片上，排成五步的链在 beyondPoints。</b>被问出处就明说。'},
{r:'高', q:'Why is there no fast, cheap, fully modifying system?',
 en:'“Because modification is done by a pipeline of enzymes inside the endoplasmic reticulum and the Golgi, and a cell that owns that pipeline is a complex, slow, expensive cell. You are not buying the modification. You are buying the machine that performs it, and the curve is that machine running cost. So the trade-off is physical rather than a failure to optimise. The research direction that actually escapes it is the opposite one, installing modification pathways into cheap cells.”',
 cn:'<b>这条把一张经验表变成一个能推的理由</b>，是这张卡上最值钱的「为什么」。（整段在 beyondPoints。）<br>⚠ <b>最后一句要说准</b>：笔记说那是<b>研究方向</b>，不是已经做成的事。<b>别说成「现在已经可以在 E. coli 里做人源糖基化了」。</b>'},
{r:'高', q:'Why is E. coli the only practical host for isotope labelling?',
 en:'“Because labelling requires the protein to be built throughout from the heavy isotope, and that means growing in a minimal medium whose only nitrogen source and only carbon source are labelled. E. coli grows fine on M9 with one nitrogen source and one carbon source, so it has no alternative but to build with what you give it. Mammalian cells cannot live on that, the serum is complex, and labelled reagents at that scale are unrealistic.”',
 cn:'<span class="pg">L3 s.7–9</span>（整段在 beyondPoints）。<b>结论一句话</b>：「这个项目需要标记样品」本身就是一个选 E. coli 的硬理由，不需要再比较别的。<br><b>用途</b>：NMR 和中子散射。常用的是 <b>15NH4Cl</b> 做唯一氮源、<b>13C-葡萄糖</b>做唯一碳源。'},
{r:'中', q:'Why is CHO used for production and HEK293 for research?',
 en:'“Because they are chosen against different criteria. HEK293 takes up DNA readily and gives a high transient yield quickly, which is what screening and small batches need. CHO is chosen because at scale what matters is a stable, reproducible, regulator-accepted line that runs for weeks in a bioreactor. Nearly all approved therapeutic antibodies are made in CHO. Research asks how fast the first sample arrives, and production asks whether every batch is the same.”',
 cn:'<b>最后那一句是这条答案的分水岭</b>，它把两个名字变成两个判据。（在 beyondPoints。）<span class="pg">L3 s.35–36</span><br><b>另外两个细胞系</b>：<b>HeLa</b> 和 <b>COS</b>，宿主范围广、和 BacMam 兼容，用于特定研究用途。'},
{r:'中', q:'Why does lentivirus work on cells that are not dividing?',
 en:'“Because its pre-integration complex carries nuclear localisation signals, so it travels through nuclear pores into an intact nucleus. An ordinary gamma-retrovirus such as MLV has to wait for mitosis and the breakdown of the nuclear envelope before its DNA can reach the chromatin. That is why lentivirus can transduce neurons, hepatocytes and resting lymphocytes, and why it became the mainstay of gene therapy.”',
 cn:'<b>这条把「慢病毒更好用」从一个事实变成一个机制。</b>（整段在 beyondPoints。）<span class="pg">L3 s.42–43</span><br>⚠ <b>代价也要主动说</b>：整合是随机的，落在原癌基因旁边加上 LTR 残余启动子活性就可能致癌，早年 X-SCID 试验出过白血病病例。<b>所以要 BSL-2，所以现代载体做自失活 LTR。</b>'},
{r:'中', q:'Why do later baculovirus passages lose the insert?',
 en:'“Because your gene is pure burden to the virus. It adds about two kilobases to copy and it contributes nothing to viral replication. So in repeated amplification any particle that happens to drop the insert replicates faster and comes to dominate the population. The symptom is a high titre with falling expression, which is confusing unless you expect it. The lecture flags it from passage three onwards.”',
 cn:'<b>这是一个纯选择压力的答案</b>，而它正好是她自己那门课的主题之一。<span class="pg">L3 s.32–33</span>（原因和症状在 beyondPoints。）<br><b>三条对策</b>：<b>用 P1 或 P2 表达 · 冻一个低代数种子库 · 必要时噬斑纯化单克隆</b>。<b>而稳定 S2 细胞系根本没有这个问题</b>，这正是它的卖点。'},
{r:'中', q:'Why is Tet-On the more common choice?',
 en:'“Because with Tet-On you add the drug only when you want expression. Tet-Off needs the drug present continuously just to hold the system off, and inducing means washing it out completely. That is slow and expensive and hard to do cleanly. The two systems are otherwise the same architecture, seven tet operators forming the response element and a regulator fused to VP16.”',
 cn:'<span class="pg">L3 s.39</span>（在 beyondPoints）。<b>这条答案的形状很有用</b>：两个系统在原理上对称，在使用成本上完全不对称。<br><b>实际用的是强力霉素</b>，不是四环素本身。'}
]},

{g:'他要数字怎么办', gn:'这张卡上数字很多，<b>而且全部在幻灯片上，可以放心报</b>。但每报一组都要跟一句判据：<b>数字是曲线的具体形式，结论不是从数字来的。</b>', items:[
{r:'高', q:'How long does each system take?',
 en:'“E. coli two days, yeast seven to ten days, baculovirus about three weeks, stable S2 cells about four weeks, mammalian anywhere from two days to six weeks depending on transient or stable, and cell-free one day. But the sentence the lecture repeats most is the one worth respecting. Plan in advance, because expression experiments can take many months, and every protein has its own personality.”',
 cn:'<span class="pg">L3 s.2–3</span>。<b>最后那两句不是玩笑，是老实话</b>，而且它们是整讲的免责声明：<b>决策链帮你选一个好的起点，它不保证终点。</b><br><b>哺乳动物那个「2 天到 6 周」的跨度要解释一句</b>：跨度来自瞬时还是稳定，不是测不准。'},
{r:'高', q:'What does the medium cost?',
 en:'“About three dollars a litre for E. coli, about forty for insect cells, and a hundred to two hundred for mammalian serum-free medium. That is roughly thirty to seventy times, and it compounds with the longer timeline and the incubators and the carbon dioxide. The number is worth quoting because it is the concrete form of the sentence that mammalian systems are expensive.”',
 cn:'<b>三个数都在幻灯片上。</b><span class="pg">L3 s.2–3</span><br><b>报完立刻接回判据</b>：这个成本正是决策链把糖基化放在第一位的原因——<b>只有在必须的时候才付它</b>。（「结构性的成本」这个说法在 beyondPoints。）'},
{r:'中', q:'What densities do the insect cell lines reach?',
 en:'“Sf9 and Sf21 reach six million per millilitre, Hi5 two million, and Schneider S2 thirty million, which is much higher than the others. Insect cells are semi-adherent, so they attach only weakly to plastic and transfer easily into suspension. They are grown at twenty-four to twenty-seven degrees in slightly acidic medium, around pH 6.7, and serum-free media are available.”',
 cn:'<span class="pg">L3 s.29–31</span>。<b>三个密度的用处是排序，不是数值本身</b>：S2 高一个量级，这也是它适合做稳定生产的一个理由。<br><b>Hi5 的特点是分泌产量往往更高</b>，虽然密度最低。<b>Sf9 是皮实的标准系统。</b>'},
{r:'中', q:'What copy numbers do the yeast plasmids have?',
 en:'“An integrating plasmid is one copy and very stable. A replicating plasmid carrying an ARS is twenty to fifty copies and unstable. A centromere plasmid carrying CEN is one copy and stable. The two-micron plasmid is fifty or more and still stable. Yeast also grows to very high density, an OD600 of three hundred in a fermenter, which is an order of magnitude beyond E. coli.”',
 cn:'<span class="pg">L3 s.25–26</span> <span class="pg">L3 s.27–28</span>。<b>四行都要能倒着背</b>，因为他多半从「我要高拷贝又稳定」这种需求问起。<br>⚠ <b>OD600 300 是发酵罐里的数</b>，不是摇瓶。报的时候带上「in a fermenter」。'},
{r:'中', q:'How big an insert can each delivery method carry?',
 en:'“PiggyBac carries up to a hundred kilobases. BacMam accepts inserts above fifteen kilobases. A recombinant bacmid is about thirty kilobase pairs in total, and the baculovirus genome itself is a hundred and twenty. These are the numbers that decide whether a large construct or a whole multi-subunit cassette can be delivered at all.”',
 cn:'<span class="pg">L3 s.42–43</span> <span class="pg">L3 s.40–41</span> <span class="pg">L3 s.29–33</span>。<b>最后一句是判据</b>：这几个数不是用来比大小的，是用来回答「我这个构建体装得下吗」。<br>⚠ <b>杆粒约 30 kbp 那个数指的是分离出来的重组杆粒</b>，操作要轻柔，幻灯片自己提了。'},
{r:'中', q:'How much protein do you need, and what does that change?',
 en:'“Micrograms to milligrams for an assay allow essentially any system. Milligrams for structural biology point to E. coli or insect cells. Grams to tonnes commercially point to E. coli or CHO, and at that scale the economics dominate the decision rather than the biology. That is the fifth question in the chain, and it is asked last because it does not change which camp you are in.”',
 cn:'<b>最后一句是这条答案的分水岭</b>：量级调整的是阵营内部的做法。<span class="pg">L3 s.4</span><br>⚠ <b>E. coli 的产量数（每升几十到几百毫克）在卡 pe-expr 上</b>，这里报的是「需要多少」，不是「能给多少」。<b>两个问题别混。</b>'}
]}
]
});
