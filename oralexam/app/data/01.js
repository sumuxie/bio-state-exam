/* 卡 01 · Describe the levels of protein structure.
   题库 #11（并入 #30）· weight 2
   出处 Biochemie OCR p026–p035、p009、p109 */

window.CARDS.push({
id:'01', n:11, merged:[30], w:2,
q:'Describe the levels of protein structure.',
qcn:'描述蛋白质的各级结构',
sub:'主干说完约 90 秒',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'前两点决定老师觉不觉得你只是背过。'},
 {n:'01', t:'定义',
  big:'结构说的是 <b>conformation</b>：多肽链<b>所有原子的空间排布</b>——只靠转动就能变、不断共价键的那种',
  en:'“Protein structure means the <b>conformation</b> — the spatial arrangement of the atoms of the polypeptide chain, or chains. A conformation is what can change by rotation about bonds, without breaking a covalent one. The only level that is not a conformation is the primary, the covalent chain itself.”',
  note:'conformation 特指<b>不打断任何共价键、只靠转动就能改变</b>的排布。说出这个词，等于一句话交代了「骨架不变，变的是摆放」。'},
 {n:'02', t:'边界',
  big:'超过 <b>100 个残基</b>才叫 protein',
  en:'“By the textbook’s convention a protein is a polypeptide of more than a hundred residues. Up to ten we say oligopeptide, in between polypeptide. It is a convention — the textbook’s own first sequenced protein, insulin, is shorter.”',
  note:'书 p026 给的门槛。中间那段叫 polypeptide。<b>给出一个数字，等于告诉老师你知道这个词是有定义的</b>，不是随口叫的。'},

 {g:'骨架', gn:'这两点说了，后面四级就不是四个要背的名字。'},
 {n:'03', t:'为什么要分级',
  big:'不是因为分子有层，是<b>按尺度</b>分：链 → 邻近残基 → 整条链 → 多条链；唯一的硬线是<b>共价 vs 非共价</b>',
  en:'“We describe it in levels of <b>scale</b>, not because the molecule has layers: the covalent chain first, then what neighbouring residues do, then how the whole chain folds, then how chains pack. The one hard physical line is <b>covalent versus non-covalent</b>. Primary is the only covalent level. Everything above it is held by non-covalent interactions, plus disulfide bridges where there are any.”',
  note:'<b>原来这里说「因为固定每一级的力不同」——审过书，站不住。</b>书 p033 引入四级时没给任何理由；p032 那一节讲的是力，但没有按级分配；p034 给球蛋白的是一张不分级的清单（二硫键、离子对、氢键、van der Waals、疏水效应）。三级和四级靠的是同一套力，「力不同」在那里就是假的；你自己在追问里又说「二级三级的分界不是靠力的种类」，两句会打架。<b>「尺度」＋「共价 vs 非共价这一条硬线」既是真的，也够当骨架。</b>'},
 {n:'04', t:'第二条判据',
  big:'三条分界线：一级靠<b>共价</b>、四级靠<b>链数</b>；二级 vs 三级靠残基在<b>序列上离得近还是远</b>',
  en:'“Primary is set off by being covalent. Quaternary is set off by needing more than one chain. Between secondary and tertiary the textbook draws the line by <b>distance along the sequence</b> — neighbours in the chain versus residues far apart. The textbook says itself that this line is in some cases hard to define.”',
  note:'原来说「两条判据分开四级」——序列距离其实只分二级和三级（p033），分不开一级和二级（同一批残基），也分不开三级和四级（不同链之间没有序列距离）。<b>三条线各是各的</b>：共价 / 序列距离 / 链数。书自己承认序列距离这条线有时很难划（p033）——主动说出来比被问出来好。'},

 {g:'四级', gn:'每一级问同样两件事：残基在序列上离多远，靠什么固定。'},
 {n:'05', t:'Primary',
  big:'<b>由肽键连接的、精确的氨基酸顺序</b>，加上<b>二硫键的位置</b>——唯一的<b>共价</b>级',
  en:'“Primary structure is the covalent level: the <b>exact order of the amino-acid residues, joined by peptide bonds</b>. It also includes the positions of the disulfide bridges. The textbook counts them here, and so does Lehninger, because they are covalent too.”',
  note:'<b>不要只说 “the sequence”。</b>那是一个没交代的名词，他会接一句「你说的 sequence 是什么意思」。<b>把「精确顺序」和「由肽键连接」一起说出来，这一刀就堵住了</b>——而且顺带把肽键摆上了桌面，那是你想接的方向（段 3 就从它开始）。',
  warn:'<b>别说 “in this textbook”</b>——Lehninger 的一级结构定义也是「全部共价键（主要是肽键和二硫键）」，这本书不特殊。有些课把二硫键算进三级，说的是它<b>稳定</b>什么，不是它<b>登记</b>在哪级。<b>登记在一级，干的是三级的活</b>（p032：稳定已经形成的结构）——两件事分开说，追问里有整条。'},
 {n:'06', t:'Secondary',
  big:'<b>主链局部的规则重复构象</b>，靠主链自己的氢键；残基在序列上挨得近',
  en:'“Secondary structure is the regular, locally repeating conformation of the <b>main chain</b> — the repeating nitrogen, alpha-carbon, carbonyl-carbon backbone, not the side chains. It is held by hydrogen bonds between its own C=O and N-H groups. Its residues are neighbours in the sequence. That is how the textbook separates it from tertiary. The periodic ones are the α-helix, the β-structure and, in this textbook, the collagen helix.”',
  note:'<b>关键词是「主链」</b>——侧链之间的相互作用是三级的事，这是最容易被一句话抓住的点。书叫 <b>β-structure</b> 不叫 β-sheet，跟着书叫。<br><b>「序列上挨得近」是书跟三级划界的判据，不是二级本身是什么</b>——跟三级那次同一种错。书自己的 β-structure（两条不同链之间的主链氢键，p030）和胶原（链间氢键，p031）都打破这个判据。胶原螺旋算二级是这本书的说法；Lehninger 里单链胶原螺旋是二级，三链超螺旋另算。'},
 {n:'07', t:'Tertiary',
  big:'<b>一整条链折成的三维形状</b>，让序列上<b>隔得远</b>的残基碰到一起；靠<b>侧链</b>为主：疏水核心 ＋ 离子对/氢键，有二硫键就加上',
  en:'“Tertiary structure is the <b>overall fold of one whole chain</b> — how its secondary elements pack together, so that residues <b>far apart in the sequence</b> come into contact. It is held mostly by the <b>side chains</b>: the nonpolar ones packed inside as a <b>hydrophobic core</b>, the polar ones in ion pairs and hydrogen bonds, plus van der Waals contacts. Disulfide bridges hold it too, if the protein has any.”',
  note:'书 p033 只给了一句：「序列上离得远的残基的空间排布」——那是它<b>跟二级的分界判据</b>，不是三级本身是什么。<b>三级本身是一整条链的折叠</b>，先说这个，再把「远」当判据补上。<br>力在 p034，书自己列了五样：<b>二硫键、离子对、氢键、van der Waals、疏水效应</b>。所以<b>别说 “non-covalent”</b>——他一句「那二硫键呢」就把你逼回去。<b>疏水核心必须进定义</b>：非极性侧链朝里、极性朝外（p033），这是三级折叠的组织原则，不是收尾才提的东西。<br><b>例子：肌红蛋白</b>——一条链，α-helix 为主（p034），1957 年 Kendrew 解出的第一个蛋白质三维结构（p009）。<b>⚠ 血红蛋白不是三级的例子，是四级的</b>；它每条链的折叠像肌红蛋白。'},
 {n:'08', t:'Quaternary',
  big:'<b>只有多于一条链时才存在</b>：亚基怎么排、接触面什么性质',
  en:'“Quaternary structure exists <b>only if</b> the protein is built of more than one chain. Each chain is a subunit. This level describes how the subunits are arranged, and what their contacts are like.”',
  note:'<b>例子：血红蛋白</b>——四条链，两 α 两 β。书 p027 讲镰刀型贫血时说的是「血红蛋白 <b>β 链</b>第 6 位」，一说 β 链就等于承认有不止一条链。<b>书自己的例子是抗体</b>（p033）：抗原结合位点由两种链各出一部分拼成——所以<b>亚基的接触面常常就是活性所在</b>。',
  warn:'「只有多于一条链才存在」这半句必须说。老师拿一个<b>单链</b>蛋白问你它的四级结构时，正确答案是<b>「它没有」</b>（p033），不是硬编一个。'},
 {n:'09', t:'后来补的两级',
  big:'<b>supersecondary</b>（βαβ）和 <b>domain</b>（100–400 残基）',
  en:'“Later work added two more levels. <b>Supersecondary</b> structure means clusters such as the βαβ motif. A <b>domain</b> is a compact globular region of a hundred to four hundred residues.”',
  note:'书 p033 明说是「later studies」（书上那句话的英译）的结果。说出来显示你知道这个分级<b>是人定的、而且在变</b>。<b>时间不够先砍这一点。</b>'},

 {g:'收尾', gn:'一句停住，一句伸出去。这两点决定他接下来往哪问。'},
 {n:'10', t:'落点',
  big:'疏水效应是<b>水的熵</b>，不是侧链互相吸引',
  en:'“Ultimately this is the <b>hydrophobic effect</b>, an <b>entropy term of the water</b>, not an attraction between the side chains. Below that we are in physical chemistry rather than biochemistry.”',
  note:'非极性基团靠拢，是因为它们周围<b>那层排列整齐的水被拆掉了</b>，水的熵升高（p032–033）。<b>说完这句就停</b>——它既是答案也是体面的收手。'},
 {n:'11', t:'留口子',
  big:'主动把话引到<b>四级结构和抗体</b>，落到你的主场',
  en:'“The level I actually work at is the quaternary one — in antibodies the antigen-binding site is formed by parts of chains from <b>both</b> types of subunit. That is where I work experimentally, with <b>yeast display</b> and <b>dissociation constants</b>.”',
  note:'抗体那句<b>是书自己举的例子</b>（p033），所以不算跑题。故意留下的两个词都落在你的主场——<b>你不给抓手，他就自己去挑一个深坑</b>。'}
],
end:'<b>会说这十一点，主干就成立。</b>硬事实、陷阱、发现史在<b>追问</b>那边，不用背，眼熟即可。现在切到演练，出声说一遍——看得懂不等于说得出。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：conformation，多肽链所有原子的空间排布——只靠转动就能变的那种',
 '“Protein structure means the conformation — the spatial arrangement of the atoms of the chain, or chains: what can change by rotation without breaking a covalent bond.”',
 'conformation 特指<b>不打断任何共价键、只靠转动就能改变</b>的排布。老师要听的正是这个边界。'],
['<b>边界</b>：&gt;100 残基才叫 protein，≤10 叫 oligopeptide',
 '“By convention a protein is more than a hundred residues. Up to ten we say oligopeptide. Insulin, the book’s first sequenced protein, is shorter.”',
 '书 p026。给出一个数字，等于告诉老师你知道这个词是有定义的。'],
['<b>为什么分级</b>：按尺度分；唯一的硬线是共价 vs 非共价',
 '“…levels of scale, not because the molecule has layers. The one hard physical line is covalent versus non-covalent.”',
 '<b>整道题的骨架。</b>「每级的力不同」站不住（三级四级同一套力，p034 一张不分级的清单）。'],
['<b>三条分界线</b>：共价（一级）· 序列距离（二级 vs 三级）· 链数（四级）',
 '“Primary is set off by being covalent, quaternary by needing more than one chain. Between secondary and tertiary the textbook draws the line by distance along the sequence.”',
 '<b>二级和三级的真正分界，不是靠力的种类。</b>书自己说这条界线有时很难划（p033）。'],
['<b>Primary</b> — <b>由肽键连接的精确氨基酸顺序</b> ＋ 二硫键位置（书和 Lehninger 都这么算）',
 '“The covalent level: the exact order of the amino-acid residues, joined by peptide bonds — and the positions of the disulfide bridges, because they are covalent too.”',
 '<b>别只说 “the sequence”</b>，那是个没交代的名词。说全了顺带把肽键摆上桌面。二硫键登记在一级、稳定的是三级——两件事。'],
['<b>Secondary</b> — <b>主链局部的规则重复构象</b>，靠主链自己的氢键：α-helix / β-structure / collagen helix',
 '“…the regular, locally repeating conformation of the main chain, held by its own hydrogen bonds.”',
 '<b>关键词是主链。</b>侧链是三级的事。书叫 β-structure 不叫 β-sheet。'],
['<b>Tertiary</b> — <b>一整条链的折叠</b>，让序列上远的残基碰到一起；靠<b>侧链</b>：疏水核心 ＋ 离子对/氢键，有二硫键就加上',
 '“…the overall fold of one whole chain, held mostly by the side chains: a hydrophobic core, ion pairs and hydrogen bonds. Disulfide bridges hold it too, if the protein has any.”',
 '<b>别说 non-covalent</b>——p034 把二硫键列在固定折叠的力里。「远」是跟二级的分界判据，不是三级本身。'],
['<b>Quaternary</b> — <b>只有多于一条链才存在</b>',
 '“Quaternary structure exists only if the protein is built of more than one chain.”',
 '单链蛋白再大也没有四级（p033）。老师拿单链问你，答「它没有」。例子：血红蛋白（两 α 两 β）、抗体（书 p033）。<b>三级的例子是肌红蛋白——别换。</b>'],
['<b>后补两级</b> — supersecondary（βαβ）、domain（100–400）',
 '“Later work added two more levels: supersecondary structure and domains.”',
 '书 p033 说是后来的研究加的。时间不够可以砍。'],
['<b>落点</b> — hydrophobic effect，是<b>水的熵</b>',
 '“…the hydrophobic effect, an entropy term of the water, not an attraction between the side chains.”',
 '<b>不是</b>非极性基团互相吸引，是周围那层有序水被拆掉（p032–033）。说完就停。']
],

segs:[
 {tag:'段 1 · 定义', h:'先划边界，再进内容',
  p:['“Protein structure means the conformation — the spatial arrangement of the atoms of the chain, or chains. A conformation is what can change by rotation about bonds, without breaking a covalent one. Two boundaries come before the levels.',
     'First, what counts as a protein. By the textbook’s convention it is a polypeptide of more than a hundred residues. Up to ten we say oligopeptide. It is a convention — insulin is shorter.',
     'Second, we describe it in levels of scale, not because the molecule has layers. The order is the covalent chain, then what neighbouring residues do, then how the whole chain folds, then how chains pack. The one hard physical line is covalent versus non-covalent.”'],
  note:'<b>最后那句是整题的骨架。</b>说出来之后后面全是它的展开。'},
 {tag:'段 2 · general', h:'先把全貌铺平',
  p:['“Four levels. Primary is set off by being covalent, quaternary by needing more than one chain. Between secondary and tertiary the line is distance along the sequence.',
     '<b>Primary</b> is the covalent level. It is the exact order of the amino-acid residues, joined by peptide bonds. The disulfide positions belong here too, because they are covalent.',
     '<b>Secondary</b> is the regular, locally repeating conformation of the main chain, held by its own hydrogen bonds. The periodic ones are the α-helix, the β-structure and the collagen helix.',
     '<b>Tertiary</b> is the overall fold of one whole chain. It brings residues far apart in the sequence into contact. It is held mostly by the side chains: a hydrophobic core, ion pairs, hydrogen bonds and van der Waals contacts. Disulfide bridges hold it too, if there are any.',
     '<b>Quaternary</b> exists only if there is more than one chain.”'],
  note:'<b>杀手锏</b>：secondary 和 tertiary 的分界不是靠力的种类，是靠<b>序列距离</b>。书自己说这条界线有时候很难划（p033）。'},
 {tag:'段 3 · 稍展开', h:'只挑一处往细里说',
  p:['“Take the secondary level. It comes down to what can and cannot rotate. The peptide C-N bond is 1.32 Å, between a single bond at 1.49 and a double at 1.27, because the nitrogen lone pair is delocalised into the carbonyl. So the amide is planar, and free rotation is left only at the two bonds at the α-carbon.',
     'The periodic structures are then just the ways of hydrogen-bonding such a chain. The α-helix: 3.6 residues per turn, right-handed, taking every amino acid except proline. The β-structure: nearly extended, parallel or antiparallel.”'],
  note:'先讲肽键刚性再讲二级结构，<b>「为什么只有这几种二级结构」就顺带答了</b>。<br>⚠ α-helix 氢键：书正文印 n+3，同页图画的是 n+4，通用写法也是 n+4，而且 3.6 残基/圈只跟 n+4 自洽。<b>先说 “about one full turn further along the chain”，被逼问再给 n+4。</b>',
  fig:{src:'img/p029_obr28_alphahelix_hbond.jpg',
       cap:'<b>Figure 2.8（书 p029 原图）。</b>括号从 <b>R₁ 后面那个 O</b>（第 1 个残基的羰基氧）连到 <b>R₅ 前面那个 H</b>（第 5 个残基的酰胺氢）。数一下就是 <b>n → n+4</b>，而同一页正文印的是 n+3。<b>被质疑时把这张图指给他看。</b>'}},
 {tag:'段 4 · 留口子', h:'主动给他一个抓手',
  p:['“And the level I actually work at is the quaternary one. In antibodies the antigen-binding site is formed by parts of chains from both types of subunit — that is the textbook’s own example. It is also where I work experimentally: I measure how a binding surface tolerates change, using yeast display and dissociation constants.”'],
  note:'<b>这不是漏洞，是钓饵。</b>yeast display 和 dissociation constant 故意不交代。<b>你不给抓手，他就自己去挑一个深坑。</b>'}
],

why:{
 rungs:[
  ['为什么一条链会有一个确定的构象？','功能完全取决于构象；随机或伸展的肽链基本没有活性（p027）。肽键的刚性平面把构象空间压得很小。'],
  ['为什么偏偏是那一个？','水里非极性侧链会靠拢，分子取<b>表面积最小</b>且有<b>非极性核心</b>的那个结构（p033）。'],
  ['为什么非极性基团会靠拢？','不是它们互相吸引，是水的事：拆掉周围那层有序水，水的熵升高。这就是 hydrophobic effect。']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“Ultimately this is the hydrophobic effect, an entropy term of the water, not an attraction between side chains. Below that we are in physical chemistry rather than biochemistry.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p029_obr28_alphahelix_hbond.jpg',
  t:'α-helix 的氢键怎么连',
  cap:'<b>要会画的就是这个：</b>一条伸展的主链，把 <b>CO</b> 和<b>一整圈之后</b>的 <b>NH</b> 用虚线连起来。'
    + '画的时候<b>先把主链的 N–Cα–C 重复写出来</b>，再标 R₁…R₅，最后连括号。'
    + '<br><br><b>这张图同时是你的护身符。</b>括号从 <b>R₁ 后面那个 O</b>（第 1 个残基的羰基氧）'
    + '连到 <b>R₅ 前面那个 H</b>（第 5 个残基的酰胺氢）——数一下就是 <b>n → n+4</b>，'
    + '而同一页正文印的是 <b>n+3</b>。'
    + '<br><br>考场上先说 “about one full turn further along the chain”；被逼问再给 n+4，'
    + '补一句 “3.6 residues per turn only works out with n+4”。<b>被质疑就把这张图指给他看。</b>',
  src2:'Biochemie, figure 2.8, p029 · 300 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'Protein structure.',
 mean:'他也可能只念题目，或说 #30 那句 “What are the different levels of protein structure?”。题库 #30，跟本题同一道。<b>整段照说。</b>',
 say:'“Four levels. Primary is the covalent level — the exact order of residues joined by peptide bonds, and the disulfide positions. Secondary is the regular local conformation of the main chain, held by main-chain hydrogen bonds. Tertiary is the overall fold of one whole chain, bringing residues far apart in the sequence into contact, held mostly by side-chain interactions and the hydrophobic core. And quaternary exists only if there is more than one chain.”'},

{q:'What holds a protein together?',
 mean:'入口是<b>力</b>那一列，不是四级的名字。先给判据，再按级给力。',
 say:'“It depends which level you mean, and that is the point of the levels — the forces that fix each one are different. The covalent ones are the peptide bonds and the disulfide bridges. Secondary structure is held by hydrogen bonds of the main chain. Tertiary and quaternary are held mostly by side-chain interactions: ion pairs, hydrogen bonds and van der Waals contacts, with the disulfide bridges locking a fold that has already formed. And underneath all of it is the hydrophobic effect.”'},

{q:'Why do we talk about levels at all?',
 mean:'他直接问骨架那一句。<b>这题只答那一句就满分</b>，不用把四级背一遍。',
 say:'“Not because the molecule has layers. The levels are levels of scale: the covalent chain, then what neighbouring residues do, then how the whole chain folds, then how chains pack. The one hard physical line is covalent versus non-covalent: primary is the only covalent level. The textbook has a separate section on the forces that determine protein structure, and it lists them without dividing them by level.”'},

{q:'What is the difference between secondary and tertiary structure?',
 mean:'不是问两个定义，是问<b>分界依据</b>。答定义就漏了他要的东西。',
 say:'“The line is not drawn by the kind of force — it is drawn by <b>distance along the sequence</b>. Secondary structure is the regular local conformation of the main chain — residues that lie close together in the chain, held by main-chain hydrogen bonds. Tertiary is the fold of the whole chain, which brings residues far apart in the chain together, held mostly by side-chain interactions and the hydrophobic core. The textbook itself says the boundary is in some cases hard to define.”'},

{q:'Can you quantify that? How many residues?',
 mean:'<b>他在要一个不存在的数字。</b>不要编。改成给判据，并引用书自己承认的模糊。',
 say:'“There is no fixed number — the textbook itself says the boundary between secondary and tertiary structure is in some cases difficult to define. The criterion is not a distance: secondary structure is what can form locally as the chain emerges. Tertiary needs residues that only meet after the whole chain folds back. The clearest illustration is the β-structure, where two strands far apart in sequence still count as secondary because they are held by main-chain hydrogen bonds.”'},

{q:'Is haemoglobin an example of tertiary structure?',
 mean:'<b>陷阱：血红蛋白是四级的标准例子，不是三级。</b>三级的标准例子是肌红蛋白。两个名字换一下，就是 PESB 那种失分。',
 say:'“No — haemoglobin is the standard example of <b>quaternary</b> structure: four chains, two α and two β. The textbook itself speaks of the β-chain of haemoglobin in the sickle-cell example, and a β-chain implies there is an α-chain. The tertiary example is <b>myoglobin</b> — a single chain, mostly α-helix folded around a heme, the first protein structure ever solved, Kendrew 1957. Each chain of haemoglobin has a myoglobin-like fold. The way the four chains are arranged is the quaternary level.”'},

{q:'Describe the structure and function of proteins.',
 mean:'题库 #29。<b>同一批材料，但结尾必须转到功能。</b>',
 say:'“Structurally we describe them at several levels, because the forces that fix each level are different. Functionally the point is that the function follows entirely from the conformation — a randomly arranged or extended chain has essentially no biological activity. That is why denaturation destroys function without touching a single covalent bond of the backbone.”'},

{q:'Why does a protein fold at all?',
 mean:'④ 的三层，落到疏水效应。',
 say:'“Because in water the nonpolar side chains come together, so the molecule takes the structure with the smallest surface and a nonpolar core. And they come together not because they attract each other, but because the ordered water shell around them is released. The hydrophobic effect is an entropy term of the water.”'},

{q:'Which level survives if you heat a protein?',
 mean:'问的是<b>变性</b>。一级不掉，空间排布掉。',
 say:'“The covalent level survives — the sequence and the disulfide positions are untouched. What is lost is the spatial arrangement: the protein goes to a random coil, loses its biological activity and changes its physical properties.”'},

{q:'What happens when you boil an egg?', odd:1,
 mean:'<b>这就是变性题</b>，只是穿了便装。',
 say:'“That is heat denaturation. The first effect of any denaturant is that the chain unfolds, which exposes the nonpolar residues that were inside the globule. In a concentrated solution those newly exposed side chains then interact with each other, the protein aggregates, and it comes out of solution. The textbook calls that <b>coagulation</b>. That is why it is irreversible.”',
 tail:'追问「那什么时候可逆」：<b>很稀的溶液</b>里小心加变性剂，再慢慢除去，蛋白会回到天然形态（p035）。这一条同时是「序列决定结构」的实验证据。'},

{q:'Why is hair not the same thing as silk?', odd:1,
 mean:'<b>问的是纤维状蛋白的两种二级结构。</b>',
 say:'“Because they are built on different secondary structures. Keratin is α-helical — two pairs of parallel helices twisted into a <b>left-handed</b> four-strand cable, the protofibril. Silk fibroin is <b>antiparallel β</b>, and it is rich in glycine, alanine and serine — the three smallest side chains. That is what lets the sheets stack.”'},

{q:'Why do you need vitamin C?', odd:1,
 mean:'<b>问的是 collagen 的羟化。</b>入口完全不像生化题。',
 say:'“Because collagen contains hydroxyproline and hydroxylysine, and those are made after translation by specific hydroxylases in the ER. Those enzymes need oxygen, 2-oxoglutarate, metal ions — and <b>ascorbate</b>. Without it the hydroxylation does not finish and the collagen is not stable.”',
 tail:'⚠ 「坏血病」这个病名<b>书里没有</b>，辅因子清单有（p112）。要说病名就说 “that is the biochemistry behind scurvy”，别说成书上写的。'},

{q:'Why is a scar different from normal skin?', odd:1,
 mean:'<b>先答问题本身</b>（组织层面纤维怎么排），再往分子走。前半是通用组织学，书里没有；后半是书 p031。',
 say:'“Both are made of collagen. What differs is how the fibres are laid down. In normal skin the collagen fibres form a loose <b>basket-weave</b> running in many directions, with elastin between them and hair follicles and glands within. A scar is repair tissue laid down fast by fibroblasts: dense bundles of collagen all running in <b>parallel</b>, little elastin, no appendages. So it is stiffer, less elastic, and looks and feels different. The molecule is the same. The arrangement above the molecule is not. If you want the molecule, collagen has two levels of helix. Each chain is itself a helix whose peptide planes are not parallel to the axis, so it cannot hydrogen-bond within itself. Three such chains then wind round a common axis like a rope, into a <b>right-handed</b> superhelix of 3.3 residues per turn in the textbook. It is held by <b>intermolecular</b> hydrogen bonds between the chains.”'},

{q:'What is the difference between a peptide and a protein?', odd:1,
 mean:'<b>只问边界那一条</b>，别把四级背一遍。',
 say:'“It is a convention about length. Up to ten residues we say oligopeptide, above that polypeptide, and a chain of more than a hundred residues is called a protein.”'},

{q:'Why does blood clot?', odd:1,
 mean:'书自己给的「球状变纤维状」的例子。',
 say:'“It is the textbook’s own example of a globular protein turning fibrillar: fibrinogen is converted to fibrin during clotting. Proteins are divided by overall shape into fibrillar and globular, and that division is not permanent.”'},

{q:'How would you destroy a protein’s function without cutting the chain?',
 mean:'变性。顺带把书给的手段列出来。',
 say:'“Denature it. The textbook lists physical causes: heat, or just foaming the solution. Then it lists chemical ones: strong acids and bases, organic solvents, detergents, urea and guanidine. None of them touch the peptide bonds. They only unfold the chain.”'},

{q:'Why isn’t a protein just a floppy chain?',
 mean:'两个理由：肽键刚性 ＋ 疏水核心。',
 say:'“Two things narrow it down. The peptide bond is planar and cannot rotate, so free rotation is left only at the two bonds at the α-carbon. The conformational space is much smaller than it looks. And in water the nonpolar core selects one of those conformations.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认你知道名词，所以专挑名词问。这一组最容易被打个措手不及。', items:[
{r:'中', q:'What is a domain?',
 en:'“A compact globular region of a hundred to four hundred residues, joined to the rest of the chain by a flexible segment. It is not one of the classical four levels. Later work added it, together with supersecondary structure. That means clusters of a few secondary-structure elements, such as the βαβ motif.”',
 cn:'后补的那一级。给尺寸，并说明它是后来加的。'},
{r:'实测', q:'What is a hydrogen bond?',
 en:'“The textbook calls it a special case of electrostatic interaction between dipoles. It is the attraction between a hydrogen covalently bound to an electronegative atom and a lone pair on another electronegative atom. That first atom, with its hydrogen, is the donor, and the second is the acceptor. Unlike van der Waals contacts it is <b>directional</b>, and that is why it can fix a geometry rather than just hold things close.”',
 cn:'在主链里，<b>供体是 N–H，受体是羰基的 O</b>。被继续追「谁能形成」：供体只能是 <b>N–H、O–H</b>（S–H 很弱），受体是 <b>O、N</b> 上的孤对。再追「为什么 C–H 不行」：<b>碳的电负性不够</b>，那个氢不带足够的正电。',
 warn:'<b>书只给了一句归类</b>（p032：偶极间静电作用的特例；p012 同样）；供体/受体和方向性是自己带的。同学转述的实测追问链正是「蛋白质靠什么维系 → 氢键 → <b>氢键是什么</b> → 谁能形成 → 为什么 X 和 Y 不能」。你的主干里「主链氢键」要说三次，所以这一刀几乎一定会来。',
 good:'<b>停止句：</b>“Below that it is electrostatics plus a little orbital overlap — physical chemistry rather than biochemistry.”'},
{r:'高', q:'What do you mean by “the sequence”?',
 en:'“The <b>exact order</b> in which the amino-acid residues follow one another along the chain, joined by <b>peptide bonds</b>. By convention it is written from the N-terminal residue, the one with a free amino group, to the C-terminal one. The chain is <b>unbranched</b>, so that order is a single well-defined string.”',
 cn:'<b>「精确顺序」「肽键」「有方向」「不分枝」——四件事。</b>只说 “the order of amino acids” 会漏掉后两件，而那两件正好是他下一刀会问的。<br><br>书 §2.1.4（<span class="pg">p026</span>）把这四件事写在同一段里，还顺带把链拆成<b>规律重复的主链</b>和<b>可变的侧链</b>——你主干里反复说的「主链氢键」就是靠这句话站住的。',
 good:'<b>如果他接着问「为什么要知道序列」，书 p026 列了理由，第一条最好用：</b>分析序列与三维结构的关系能揭示肽链在空间中排布的规则，<b>所以序列是 DNA 里的遗传信息和决定功能的三维结构之间的连接环节</b>。这一句同时是桥 2。'},

{r:'实测', q:'How far apart is “far apart”? Give me a number.',
 en:'“There is no number, and the textbook says so — it writes that the boundary between secondary and tertiary structure is <b>in some cases difficult to define</b>. The line is drawn by a <b>criterion</b>, not by a distance: secondary structure is what can form <b>locally, as the chain emerges</b>, from residues that are near each other in the sequence. Tertiary structure needs residues that only meet <b>once the whole chain has folded back on itself</b>.”',
 cn:'<b>他问一个数字，而这个边界没有数字。编一个就死定了。</b><br><br>能给的<b>操作性锚点</b>（都是书里的）：α-helix 的氢键跨<b>大约一整圈</b>，也就是三到四个残基；β-turn 是 <b>n → n+3</b>。所以「近」在实践中就是<b>一圈之内、几个残基</b>。「远」是指那些<b>只有等整条链折回来才碰得到</b>的残基，可能隔几十上百个。',
 good:'<b>他还追？分成两件事答——这是这道追问的完整版：</b><br><br><b>① 具体结构的数字是存在的，而且精确：</b><br>α-helix 氢键 <b>i → i+4</b>（每圈 3.6 残基，螺距 0.54 nm）· β-turn <b>n → n+3</b> · 3₁₀ helix i+3 · π-helix i+5。<b>这些可以直接报。</b><br><br><b>② 但「类别的边界」那个数不存在，而且不该存在。</b>因为 <b>β-structure 打破任何阈值</b>：两段配对的链可以隔一百个残基，仍然是二级结构——定义它的是主链氢键的规则重复，不是距离。<br><br><b>③ 为什么不该存在：这个分级是人划的，不是分子自带的。</b>书自己在证明这一点——它先给四级，然后说「later studies」（书上那句话的英译）又加了 supersecondary 和 domain。<b>一个会被后人加两层的分类，是描述工具，不是自然事实。</b><br><br>完整说法：<br>“The individual structures have exact numbers — the α-helix hydrogen bond spans <b>i to i+4</b>, a β-turn is <b>n to n+3</b>. What has no number is the boundary between the <b>categories</b>, because the categories are a description we impose rather than something the molecule has. The β-structure is the case that breaks any cutoff: two strands a hundred residues apart in the sequence are still secondary structure, because what defines it is regular main-chain hydrogen bonding, not proximity.”<br><br><b>这个答案比任何数字都强</b>：它给出了真实存在的数、说清了哪个数不存在、并说明了为什么不存在。最后那句 “a description we impose” 是 researcher 的标志。'},

{r:'高', q:'You put the disulfide bridges under primary structure. Then why do they hold the tertiary fold?',
 en:'“Because those are two different questions. <b>Which cysteines are joined</b> is part of the covalent description of the chain, so this textbook lists the disulfide positions with the primary structure. Lehninger does the same. <b>What the bridge does</b> is lock a fold that has already formed: the textbook says it contributes mainly to stabilising an already formed structure. And the pairing is not automatic. The textbook says disulfide formation is not specific, and protein disulfide isomerase in the ER reshuffles the bridges until the native pairing is reached.”',
 cn:'p033 把二硫键的<b>位置</b>算进一级；p032 说它「主要是稳定<b>已经形成</b>的结构」（<i>they contribute mainly to stabilising a structure that has already formed</i>）；p034 又把它列进固定球蛋白折叠的五样力里。<b>三处不矛盾：一处说它在哪一级登记，两处说它干什么。</b>把三处连起来说，比只说「别的教材算三级」稳得多。',
 good:'<b>他再追「那为什么胞质蛋白基本没有二硫键」</b>——那是卡 13 的地盘：胞质是还原环境，有足够游离巯基，S–S 会被拆回去，只有 ER 里留得住。<b>这是一个你想接的口子。</b>'},

{r:'高', q:'Give me an example for each level.',
 en:'“Primary: insulin, the first sequence ever read, Sanger 1953. The textbook’s example of why it matters is sickle-cell anaemia, glutamate at position 6 of the β-chain of haemoglobin replaced by valine. Secondary: the α-helix of keratin, the β-structure of silk fibroin, the collagen helix. Tertiary: myoglobin — one chain, mostly α-helix folded around a heme, the first structure solved. Quaternary: haemoglobin, two α and two β chains. Or take the textbook’s own example, an antibody, where the antigen-binding site is made of parts of both chain types.”',
 cn:'全部在书里：insulin 与镰刀型贫血 p009、p027 · keratin / fibroin / collagen p034 · 肌红蛋白 p009、p034 · 抗体 p033。<b>血红蛋白一定放四级，别放三级。</b>书还有一个四级的好例子在后门区：<b>乳酸脱氢酶</b>四聚体，H 和 M 两种亚基拼出 H₄、H₃M、H₂M₂、HM₃、M₄ 五种同工酶，动力学性质不同，机体拿它调代谢（p064–p065）——这是任何酶题走出去会掉进的那一块。',
 good:'<b>他接着问「为什么四级值得单独算一级」</b>——下一条，有英文整句。'},

{r:'高', q:'Why does quaternary structure deserve a level of its own?',
 en:'“Because the <b>contacts between subunits are often where the activity is</b>. The textbook’s example is the antibody: the antigen-binding site is built from parts of chains belonging to both kinds of subunit, so it exists on neither chain alone. And allosteric enzymes are, as the textbook says, usually built of subunits — regulation works through the interfaces. So quaternary structure is not chains piled together. It is the level at which activity can appear only at a contact surface.”',
 cn:'p033：亚基的连接处或接触面常常对生物活性重要，抗体的抗原结合位点由两种亚基各出一部分拼成。p063：别构酶通常由亚基组成。'},

{r:'高', q:'What is the difference between conformation and configuration?',
 en:'“A conformation you can change by <b>rotating</b> bonds. A configuration you can only change by <b>breaking and remaking</b> one. Folding is conformational — the L configuration at every α-carbon is untouched. The one borderline case is the peptide bond itself: because of its partial double-bond character the textbook calls cis and trans <b>configurations</b>, and the cell has an enzyme, peptidyl-prolyl isomerase, to catalyse that rotation.”',
 cn:'这题是捷克这门课的口味：<b>它比一般生化更看重有机化学</b>。答完顺手给例子：D/L 氨基酸、cis/trans 肽键——两条各有英文整句，在下面。',
 warn:'书里<b>没有</b>把这两个词并排解释过。这条要自己带着。'},
{r:'实测', q:'What is denaturation?',
 en:'“A native protein has a definite spatial arrangement, its characteristic conformation. Its biological activity depends on it. <b>Denaturation is the loss of that native conformation</b> under physical or chemical agents: the protein passes to a less ordered form, a random coil, loses its biological function and changes its physical properties. The first effect of every denaturant is that the chain <b>unfolds</b>, which exposes the nonpolar residues that were inside the globule, so solvation and solubility drop. Physical causes: heat, even just foaming the solution. Chemical: strong acids and bases, organic solvents, detergents, urea, guanidine.”',
 cn:'p035 整节。<b>「变性」= denaturation：构象丢了，共价键没动。</b>「变质」不是生化名词——那是食品腐败（微生物、氧化），别混。书还说变性有正面用处：变性蛋白更容易被水解酶消化（做熟食物的道理）、杀灭病原（热或化学灭菌）。'},

{r:'高', q:'Why is denaturation sometimes reversible and sometimes not?',
 en:'“It depends on concentration. Add the denaturant carefully to a <b>very dilute</b> solution and the unfolding is reversible — remove the agent slowly and the protein returns to its native form. In a <b>more concentrated</b> solution a second process sets in: the newly exposed side chains interact with each other, the molecules aggregate and solubility falls further. That is irreversible. In some cases, heat denaturation for instance, the protein comes out of solution altogether. The textbook calls that <b>coagulation</b>. With other agents, detergents or urea, there is no coagulation.”',
 cn:'p035 原文一段。这一条同时是「为什么煮鸡蛋不可逆」的答案。'},

{r:'高', q:'What does denaturation actually destroy — which level goes first?',
 en:'“The covalent level survives: the sequence and the disulfide positions are untouched. What is lost is the spatial arrangement — the protein goes to a random coil, loses its biological activity and changes its physical properties.”',
 cn:'书 p035 有整整一节。<b>书自己给了机制</b>：所有变性剂的第一作用是把肽链展开，于是原来埋在球内的<b>非极性残基被暴露出来</b>，溶剂化下降、溶解度下降。<br><br>「为什么有时候可逆有时候不可逆」单独一条在上面，有英文整句。<span class="pg">p035</span>'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方，就是他会插刀的地方。', items:[
{r:'实测', q:'Why does collagen need almost thirty percent glycine?',
 en:'“Because in that kind of helix <b>every third side chain points into the axis</b>. The only residue that fits there is the one whose side chain is a single hydrogen — glycine.”',
 cn:'<b>这本书把两半都给了，但没有连起来。</b>p031 同一段里既说「含近 30% glycine」，又说「三分之一的侧链朝向螺旋内部」。<b>连起来就是答案。</b><br><br>这种题正是老师喜欢的：材料都在书里，考的是你有没有把它读成一个机制而不是两个事实。',
 good:'<b>顺势给出的第二层：</b>4-hydroxyproline 和 proline 又占了另外 30%，所以 collagen 的一级结构几乎是「甘氨酸 + 脯氨酸」的重复。<span class="pg">p031</span>'},
{r:'高', q:'Why is proline the one amino acid an α-helix cannot take?',
 en:'“Two reasons. Its side chain closes back onto its own α-amino nitrogen, making a five-membered <b>pyrrolidine</b> ring. So proline is a secondary amine, an imino acid, and that nitrogen has <b>no N-H left to donate</b> a hydrogen bond. And the five-membered ring locks one of the two rotatable backbone angles, so the chain cannot take the helical geometry.”',
 cn:'卡上只写了「装不下 proline」这个结果。顺便把 proline 的另一面也准备好：<b>cis 肽键几乎只出现在 proline 旁</b>（p027）——英文整句在「What do cis and trans mean」那条。环的名字在「What is that ring called」。',
 warn:'这条的两个理由<b>不是书上的</b>，是通用解释。说的时候不要说「书上写」。'},
{r:'实测', q:'Why does the peptide bond have partial double-bond character?',
 en:'“Because the <b>lone pair on the nitrogen is delocalised into the carbonyl</b>. The electrons are shared over O-C-N rather than sitting on the nitrogen, so the C-N bond is a hybrid between a single and a double bond. The measurement says so: the C-N is <b>1.32 Å</b>, between a single C-N at 1.49 and a double at 1.27. And a bond with double-bond character <b>cannot rotate</b>. The six atoms of the amide, the two α-carbons, C, O, N and H, lie in one <b>plane</b>. That is why there are cis and trans forms at all, and why the only free rotations in the backbone are the two single bonds at the α-carbon.”',
 cn:'全在 p027–p028，书的原话是「羰基 π 电子和氮的自由电子对<b>部分离域</b>」（<i>partial delocalisation of the π electrons of the carbonyl and of the lone electron pair of the nitrogen</i>），然后「不能自由转动」→ cis/trans → 球蛋白里几乎全是 trans、cis 只在 proline 旁；p028：肽键原子共面，Cα–C 和 Cα–N 是单键可以转，所以主链是<b>一串刚性平面被 –CHR– 隔开</b>（figure 2.6）。<br><b>三件事按这个顺序说：原因（离域）→ 证据（键长）→ 后果（平面、不能转、cis/trans）。</b>只说「它是部分双键」而不说为什么，他下一句一定是 why。',
 good:'<b>这条有一个值得主动接的后果：</b>同一个离域让羰基 O 带部分负电、N–H 带部分正电，所以主链的 C=O 和 N–H 是<b>很强的一对氢键受体和给体</b>——二级结构靠主链氢键，根子就在这里。一句话把段 3 和「为什么主链氢键」接上。<br><b>停止线：</b>他要追「为什么孤对会离域」——「因为离域把电荷放到电负性更大的氧上，整体能量更低。再往下是轨道，物理化学。」<b>不要说 sp2、不要画轨道。</b>'},

{r:'实测', q:'What is that ring called?',
 en:'“Proline’s is a <b>pyrrolidine</b> — a saturated five-membered ring with one nitrogen, and that nitrogen is the α-amino group itself. Histidine’s is an <b>imidazole</b> — an aromatic five-membered ring with two nitrogens, weakly basic. That is why it can take or give a proton near neutral pH. Tryptophan’s is an <b>indole</b>, a benzene fused to a pyrrole. Phenylalanine carries a <b>phenyl</b> ring, plain benzene. Tyrosine carries a <b>phenol</b>, benzene with a hydroxyl.”',
 cn:'PESB 那次说 histidine「上面的 ring」，老师不满意——<b>环要叫名字</b>。书 p021 只说 histidine 含弱碱性的咪唑基、Phe 和 Trp 带芳香环、proline 没有自由氨基；名字本身是通用有机化学。'},

{r:'高', q:'What do cis and trans mean for a peptide bond?',
 en:'“Because the C-N bond cannot rotate, the two α-carbons on either side of it are fixed. On <b>opposite</b> sides it is trans. On the <b>same</b> side it is cis. The textbook calls them configurations, and they are distinct isomers. In globular proteins trans dominates almost completely. The cis form occurs <b>practically only next to a proline</b>, about six percent of X-Pro bonds. And the cell has a peptidyl-prolyl cis-trans isomerase to interconvert them.”',
 cn:'p027 原话：不能自由转动 → 存在 cis-trans 异构体 → 球蛋白里绝对以 trans 为主，cis 实际上只出现在 proline 旁。p109：X-Pro 约 6% 是 cis，由脯氨酰顺反异构酶催化。'},

{r:'高', q:'What do D and L mean for an amino acid?',
 en:'“They name the <b>configuration at the α-carbon</b>, meaning which way the four groups sit in space. We fix it by comparison with glyceraldehyde: L-serine is drawn from L-glyceraldehyde, in the Fischer projection with the amino group on the left. Every amino acid found in proteins is <b>L</b>, except glycine, which has no asymmetric carbon at all. Threonine and isoleucine have two. D-amino acids do exist, in bacterial cell walls and some peptide antibiotics, but not in proteins.”',
 cn:'p024：除 glycine 外都属于 L 构型系列，跟 L-serine 从 L-glyceraldehyde 推出来一样；Thr 和 Ile 有两个不对称碳。「D 型在细菌细胞壁和肽类抗生素里」是通用知识。'},

{r:'高', q:'Why is the peptide bond essentially always trans?',
 en:'“Because in the cis form the two α-carbons, and therefore the two side chains, sit on the <b>same side</b> of the C-N bond and clash. Proline is the exception because its side chain loops back onto the nitrogen, so the two forms cost about the same.”',
 cn:'卡上说了「几乎总是 trans」和「cis 几乎只在 proline 旁」，<b>但没说为什么</b>。这两句连起来就是一个完整回答，而且第二句正好解释了第一句的例外。<span class="pg">p027</span>'},
{r:'实测', q:'What is the hydrophobic effect?',
 en:'“It is the tendency of nonpolar substances and groups in water to associate with each other and avoid being solvated, the way two drops of oil in water merge. The groups meant here are hydrocarbons, the nonpolar parts of lipids and the nonpolar side chains. It is <b>not an attraction between them</b>: it is the <b>entropy the water gains</b> when the ordered shell it has to form around a nonpolar surface is released. In a protein it shows in two ways: the molecule takes the shape with the <b>smallest surface</b>, and the nonpolar side chains gather into a <b>nonpolar core</b>.”',
 cn:'三句全是书的：定义和「两滴油」p012–p013 · 「不是亲和力，是水的结构变化」p013 · 两种表现 p033。<b>说完第三句就停</b>——再往下是水的熵，物理化学。<br><br><b>他从这里能往哪儿走（每条一句话，来源都在书里）：</b><br>① <b>「hydrophobic 到底什么意思」</b>——对水亲和力低的基团：烃、脂的非极性部分、非极性侧链（p012）。反面 <b>hydrophilic</b>：极性或带电，能被水溶剂化。<b>一个分子两头各占一种，书叫 amphipathic</b>（书 p181 印的名词就是 <i>amphipathy</i>）：磷脂的脂肪酸尾疏水、甘油–磷酸–头基亲水。「亲脂 lipophilic」书只在膜运输那里用（p200），意思跟 hydrophobic 实际重合；「恐脂」不是一个用的词。<br>② <b>「它是键吗」</b>——不是，是驱动力。见横向卡 bonds。<br>③ <b>「还在哪里起作用」</b>——膜：双层里尾对尾、头朝外，非极性中间层，厚 3.5–4 nm，头尾之间的作用力全是非共价（p198）；整合膜蛋白靠非极性侧链跟脂尾的疏水作用留在膜里（p199）。DNA 碱基堆叠主要靠疏水作用稳定（p073，卡 03）。信号肽中段是疏水氨基酸（p110，卡 13）。<br>④ <b>「为什么肥皂让蛋白变性」</b>——去污剂两亲，钻进非极性侧链之间，把撑着核心的疏水效应拆掉；p035 把去污剂、尿素、胍列成化学变性剂，跟加热不同，不凝固。见横向卡 bonds。',
 good:'<b>哪条接、哪条停：</b>②④ 在 bonds 卡上，③ 的碱基堆叠和信号肽各有卡，<b>都可以接</b>。③ 的膜那句说完就停——再往下是脂那道题（#23），还没做。<br><b>他要追「水为什么会有序」</b>：非极性表面不能跟水成氢键，水分子只好在它周围排成笼子来保住彼此的氢键；两个非极性面靠在一起，中间的笼子放掉，熵升高。这是八分答案的第二层，被逼才给。'},

{r:'中', q:'Why does a protein need a hydrophobic core at all?',
 en:'“For a globular protein the core is what selects one conformation in water: take it away and the chain is a random coil. That is exactly what the textbook says a denatured protein becomes. Fibrillar proteins are the exception: collagen is held by hydrogen bonds between chains and glycine packing, not by a core.”',
 cn:'这条把 <b>④ 的落点</b>和 <b>denaturation 那一节</b>接在一起：p035 说变性后是 <i>a random or statistical coil</i>。<b>所以「有核心」和「有唯一构象」是同一件事的两种说法。</b>'}
]},

{g:'怎么发现的', gn:'plasmid 那一类。要像 researcher 答：他们当时手上只有什么，所以只能怎么推。', items:[
{r:'实测', q:'How did anyone know a protein has one definite three-dimensional structure at all?',
 en:'“The first hint was crystallisation, in 1864 with haemoglobin. <b>A molecule that crystallises must all be the same shape</b> — a mixture of random conformations does not form a lattice. The actual structure had to wait until 1957, when Kendrew solved myoglobin by X-ray analysis.”',
 cn:'<b>「能结晶就说明形状唯一」这个论证是这题的分数所在。</b>它把一个 1864 年的现象变成一个推理，而不是一个年份。<br><br>年表全在 p009 的 table 1.1：1864 Hoppe-Seyler 结晶 hemoglobin · 1902 Fischer 证明多肽本质 · <b>1951 Pauling &amp; Corey 提出 α-helix 与 β-structure</b> · 1953 Sanger 第一个序列 · 1957 Kendrew 第一个结构。方法名在 p008。'},
{r:'高', q:'Why did Pauling get the α-helix right before anyone had a protein structure?',
 en:'“He did not read it off a protein. He derived it from bond lengths and angles measured on amino acids and small peptides, and asked what regular structures such a chain could form. The α-helix was proposed in 1951 — two years before the first protein sequence and six years before the first protein structure.”',
 cn:'<b>这个动作可以搬到任何一题上</b>：不说「谁在哪年做了什么」，说「他们当时手上只有什么，所以只能怎么推」。这就是 researcher 和 technician 的区别。<span class="pg">p028 p009</span>'},
{r:'高', q:'How do we know the sequence determines the structure?',
 en:'“The textbook gives the experiment without naming it: if you unfold a protein carefully in a very dilute solution and then remove the denaturant slowly, <b>the protein goes back to its native form</b>. Nothing but the sequence was there to tell it how.”',
 cn:'<b>这就是 Anfinsen 的实验，而书自己写了它</b>（p035），只是没提名字。<b>你可以完全用这本书回答一个通常要引外部文献的问题</b>——这在口试里是最稳的位置。',
 warn:'Anfinsen 这个名字和 ribonuclease 这个体系<b>书里没有</b>，是从记忆写的。核过再主动说出口。<b>而且这句话要跟下一条连着说</b>，只说这一句是不完整的。'},
{r:'中', q:'How is a protein structure actually determined today?',
 en:'“X-ray crystallography is the classical route — that is how myoglobin was solved. The textbook also names electron microscopy. Since it was written, NMR, cryo-electron microscopy and prediction from sequence have taken over a large part of the field.”',
 cn:'<b>书只给了两个名字</b>（p008），而且是 2009 年的书。<b>主动说「since it was written」是加分</b>：它显示你知道这本书的年代。<br><br>被追问 AlphaFold 就说它预测的是 folded state，不预测折叠路径——接得上题库 #7 的 folding landscape。'}
]},

{g:'相邻考点', gn:'书里紧挨着这道题的两整节，加上折叠机制。他从这道题走出去，多半走这几个方向。', items:[
{r:'高', q:'How else are proteins classified?',
 en:'“Besides shape, fibrillar or globular, they are split into <b>simple</b> and <b>conjugated</b> proteins. A simple protein yields only amino acids on hydrolysis. A conjugated one carries a non-peptide component, either covalently attached or held by non-covalent interactions.”',
 cn:'<b>这是书里紧接着结构分级的下一节（§2.2.5, p036），所以它是最自然的续问。</b>四大类：<b>glycoprotein、phosphoprotein、metalloprotein、hemoprotein</b>。',
 good:'<b>书里一句很好用的话：</b>“By current understanding the non-peptide component is a regular part of the <b>great majority</b> of proteins — so-called simple proteins are rather the exception.” 这句把分类说成了历史遗留的划分，而不是自然界的事实。<span class="pg">p036</span>'},
{r:'实测', q:'Glycoproteins — how is the sugar attached?',
 en:'“Two linkages. <b>N-glycosidic</b>, through the amide nitrogen of <b>asparagine</b> — the serum glycoproteins are the typical case. And <b>O-glycosidic</b>, through the hydroxyl of <b>serine or threonine</b> — the blood-group substances and the mucins.”',
 cn:'同学转述的实测问题里有一条就是「N-glycosylation 到底是怎么形成的」，<b>而且要机制不要现象</b>。<br><br>第三类是 <b>proteoglycan</b>（含 glycosaminoglycan，结缔组织成分）。<b>第四类直接接回你的主干</b>：collagen 上接的是 D-galactose 或含半乳糖和葡萄糖的二糖，<b>接在 hydroxyproline 或 hydroxylysine 上</b>——就是你卡上那两个 collagen 特有残基。<span class="pg">p036</span>',
 warn:'完整形成机制（dolichol 载体、寡糖基转移酶、在 ER 里发生）在<b>卡 13</b>，不在这一节。'},
{r:'高', q:'Give me an example of a metalloprotein.',
 en:'“Ferritin stores iron — it can hold up to <b>thirty percent of its mass</b> as iron. Transferrin carries iron in plasma, caeruloplasmin carries copper. And some enzymes need only a trace: carboxypeptidase has <b>zinc</b>, pyruvate decarboxylase <b>manganese</b>, xanthine oxidase <b>molybdenum</b>.”',
 cn:'书 p036–p037 把名字和数字都给齐了，<b>这是典型的 very specific 题弹药</b>。<br><br>结合金属的是哪些基团？书说是<b>羧基、咪唑基、巯基</b>——咪唑基就是 histidine 的侧链，<b>这正是 His-tag 靠的那个基团</b>。<br><br>还有 <b>FeS 蛋白</b>：Fe 与 –SH 和硫离子成的簇，在细菌和植物 <b>ferredoxin</b> 里，管氧化还原。<span class="pg">p036 p037</span>'},
{r:'中', q:'What is a hemoprotein?',
 en:'“A conjugated protein whose non-peptide component is <b>haem</b> — iron held in a complex with a <b>porphyrin</b>. The haemoproteins are the oxygen carriers, the cytochromes, and the haem enzymes.”',
 cn:'书把它跟其他金属蛋白分开写，理由很具体：<b>其他金属复合物在肽链被切断时就散了，而血红素不会</b>，因为铁是被卟啉抱住的。<span class="pg">p037</span>'},
{r:'高', q:'Does the sequence really fold the protein by itself?',
 en:'“Not always. The textbook says only some proteins go spontaneously to the conformation of lowest energy, mostly small ones and a few more complex. But the textbook says that for a number of proteins <b>the biologically active conformation is not the energetically most favourable one</b>. So folding of the nascent chain is a directed process, catalysed by <b>chaperones</b>.”',
 cn:'<b>这一条修正了上面那条 Anfinsen。</b>「序列决定结构」在试管里对，<b>在细胞里只对一部分蛋白</b>。两句连着说，比只说前一句高一个层次。<br><br>chaperone 和 chaperonin <b>进化上高度保守</b>，原核真核都有；它们<b>识别并稳定部分折叠的中间体</b>，也参与修复折错的链。书给的例子是 <b>GroEL / GroES</b> 和 <b>hsp70</b>。<br><br>书还直接点了后果：<b>多种严重神经疾病就是蛋白质折叠错误造成的</b>。<span class="pg">p109</span>'},
{r:'高', q:'You said cis peptide bonds occur next to proline — does the cell do anything about that?',
 en:'“Yes. There is a whole enzyme family for it: the <b>peptidyl-prolyl cis,trans-isomerases</b>, which catalyse rotation about that specific peptide bond. They are found from bacteria to mammals.”',
 cn:'<b>这条把卡上已有的两个点接成了一条链</b>：肽键几乎总是 trans（p027）→ 例外是 proline 旁 → 而细胞专门派了一个酶系管这件事（p109）。<br><br>能把两章接起来，是这场考试里最划算的动作。<span class="pg">p109 p027</span>'},
{r:'中', q:'How do you determine the molecular mass of a protein?',
 en:'“The classical methods are <b>ultracentrifugation</b>, gel or permeation chromatography, the molecular sieves, and <b>electromigration</b>. Ordinary methods do not work because the relative molecular mass runs from ten to the fourth up to ten to the fifth, and for viruses up to ten to the seventh.”',
 cn:'书 §2.2.6（p037）整节讲这个。<b>方法题是这位老师的口味</b>（他会问「当年怎么发现要用 plasmid」那种题）。<br><br>顺带的一组性质：球状蛋白溶于盐水；溶液有胶体的部分性质（<b>Tyndall 效应、成胶、凝聚</b>），<b>但是均一分散系</b>，这点又像真溶液。<span class="pg">p037</span>'},
{r:'中', q:'How is the peptide bond formed, and which end do you write first?',
 en:'“It is a condensation: the carboxyl of one amino acid joins the α-amino group of the next, with the loss of a molecule of water. The chain is <b>unbranched</b> and has two different ends, so by convention the sequence is written starting from the <b>N-terminal</b> residue and ending at the C-terminal one.”',
 cn:'书 §2.1.4（p026）。<b>这是一道看上去太简单、因而没人准备的题。</b><br><br>书还在同一处把链拆成两部分：<b>规律重复的主链</b> 和 <b>可变的侧链</b>。你主干里反复说的「主链氢键」就是靠这句话站住的。<span class="pg">p026</span>'}
]},

{g:'桥回主场', gn:'他顺着这些走，就走到你答得住的地方。', items:[
{r:'高', q:'Can a single residue change destroy a whole structure?',
 en:'“The textbook’s own example is sickle-cell haemoglobin: glutamate to valine at position six of the β chain. One charged surface residue becomes a hydrophobic one, and that patch makes the molecules stick to each other.”',
 cn:'<b>这是书内的例子（p027），但它直通你的工作</b>：一个残基改变整个分子的行为，正是 fitness landscape 和 directed evolution 在量的东西。<br><br>接法：“That is the same question I work on experimentally — how much substitution a binding surface tolerates before the fold or the binding is lost.”'},
{r:'中', q:'You mentioned dissociation constants — what is a Kd?',
 en:'“The equilibrium constant of the dissociation reaction: free protein times free ligand over the complex. It has units of concentration, and numerically it is the free-ligand concentration at which half the sites are occupied.”',
 cn:'<b>这一刀是你自己在段 4 故意留的</b>，所以必须接得住。完整答案在卡 02。<br><br>一句话记住方向：<b>Kd 越小结合越紧</b>，因为它是「拆开」的常数。'}
]}
]
});
