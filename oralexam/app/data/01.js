/* 卡 01 · Describe the levels of protein structure.
   题库 #11（并入 #30）· weight 2
   出处 Biochemie OCR p026–p035、p009、p109 */

window.CARDS.push({
id:'01', n:11, merged:[29,30], w:2,
q:'Describe the levels of protein structure.',
qcn:'描述蛋白质的各级结构',
sub:'主干说完约 90 秒',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'前两点决定老师觉不觉得你只是背过。'},
 {n:'01', t:'定义',
  ez:'“Protein structure means the conformation. A conformation is a spatial arrangement. It is the arrangement of the atoms of the chain. It may be one chain or several. A conformation can change by rotation about bonds. It changes without breaking a covalent bond. One level is not a conformation. That is the primary level. The primary level is the covalent chain itself.”',
  ezcn:'<b>蛋白质的「结构」说的是构象 conformation ＝ 多肽链所有原子的空间排布</b>（<b>一条链或者几条链</b>）。<b>构象是靠转动键就能改变的那种排布，不需要断任何共价键。</b><b>只有一层不是构象：一级结构——那就是共价的链本身。</b>',
  big:'结构说的是 <b>conformation</b>：多肽链<b>所有原子的空间排布</b>——只靠转动就能变、不断共价键的那种',
  en:'“Protein structure means the <b>conformation</b> — the spatial arrangement of the atoms of the polypeptide chain, or chains. A conformation is what can change by rotation about bonds, without breaking a covalent one. The only level that is not a conformation is the primary, the covalent chain itself.”',
  note:'conformation 特指<b>不打断任何共价键、只靠转动就能改变</b>的排布。说出这个词，等于一句话交代了「骨架不变，变的是摆放」。'},
 {n:'02', t:'边界',
  ez:'“The textbook uses a convention. A protein is a polypeptide of more than a hundred residues. Up to ten residues we say oligopeptide. In between we say polypeptide. But it is only a convention. The textbook’s own first sequenced protein was insulin. And insulin is shorter than that.”',
  ezcn:'<b>书用的是一个约定：超过一百个残基才叫蛋白质</b>；<b>十个以内叫寡肽，中间的叫多肽</b>。⚠ <b>但这只是个约定——书自己举的第一条被测序的蛋白是胰岛素，而胰岛素比这短。</b>',
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
  big:'<b>主链局部的规则重复构象</b>（构象 ＝ 这段链实际摆成的形状；<b>不算侧链</b>，侧链就是挂在主链上的 R 基），靠主链自己的氢键；残基在序列上挨得近',
  en:'“Secondary structure is the regular, locally repeating conformation of the <b>main chain</b>, meaning the shape that stretch of chain settles into. The main chain is the repeating nitrogen, alpha-carbon, carbonyl-carbon backbone, and not the <b>side chains</b>, the R groups that hang off it. It is held by hydrogen bonds between its own C=O and N-H groups. Its residues are neighbours in the sequence. That is how the textbook separates it from tertiary. The periodic ones are the α-helix, the β-structure and, in this textbook, the collagen helix.”',
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
  en:'“Ultimately this is the <b>hydrophobic effect</b>, an <b>entropy term of the water</b>, not an attraction between the <b>side chains</b>, the R groups of the residues. Below that we are in physical chemistry rather than biochemistry.”',
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
  src:'img/p026_obr24_pentapeptide.jpg',
  t:'一级结构 —— 五个框子，框里是主链，框外是侧链（书 Obr. 2.4）',
  cap:'<b>这张是「画」，而且它一笔就把「主链 / 侧链」分开了</b>——而主链正是二级结构那一格的承重词。'
    + '书把每一个残基的 <b>N–C–C</b> 圈进一个方框，<b>框里那三个原子就是主链</b>，'
    + '<b>R₁…R₅ 掛在框外</b>；框与框之间那根短线就是<b>肽键</b>。'
    + '<br><br><b>画的顺序（五步）</b>：'
    + '<br>① 横着画 <b>五个开口的方框</b>，两两之间用一根短横线连起来。'
    + '<br>② 每个框里从左到右写 <b>N – C – C</b>（中间那个就是 α-碳）。'
    + '<br>③ 中间那个碳的<b>上面写 H、下面写 R</b>（标 R₁…R₅）；右边那个碳<b>上面双键接 O</b>；N <b>下面接 H</b>。'
    + '<br>④ 最左边写 <b>H₃N–</b>，最右边写 <b>–COO⁻</b>。'
    + '<br>⑤ 两头各标一个名字：左 <b>N 端</b>，右 <b>C 端</b>。图上那两行捷克语就是这两个词。'
    + '<br><br><b>边画边说的三句</b>：“The repeating part inside the boxes is the <b>main chain</b>, the nitrogen, alpha-carbon and carbonyl-carbon of every residue. '
    + 'Everything that varies, R one to R five, hangs <b>outside</b> it. Secondary structure is hydrogen bonding of the part inside the boxes, not of the part outside.”'
    + '<br>“The chain has two different ends, so it has a direction: a free amino group at one end, a free carboxyl at the other. By convention the sequence is written from the <b>N-terminal</b> to the <b>C-terminal</b> residue.”'
    + '<br>“A peptide chain is <b>unbranched</b>. Two residues make a dipeptide, up to ten an oligopeptide, more a polypeptide, and above about a hundred the textbook calls it a protein.”'
    + '<br><br>⚠ 图上两行捷克语是 <b>N-端氨基酸</b> 和 <b>C-端氨基酸</b>，就是两端的名字，不用管它怎么拼。',
  src2:'Biochemie, Obr. 2.4, p026 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p027_obr25_peptide_bond_dimensions.jpg',
  t:'肽键的键长和键角 —— 那个阴影四边形就是“酰胺平面”（书 Obr. 2.5）',
  cap:'<b>这张是「认」，而且它是你在「肽键为什么是平的」这一刀上的证据。</b>'
    + '中间那块<b>阴影的四边形</b>就是书说的酰胺平面（图上右下那个捷克语标注指的就是它）；'
    + '中间那根指向 <b>C–N</b> 的线上那个捷克语标注指的就是<b>肽键本身</b>。'
    + '<br><br><b>一眼要看出来的三个数</b>：羰基 <b>C＝O 是 1.24</b>、<b>C–N 是 1.33</b>、'
    + 'Cα–N 是 <b>1.46</b>（单位是 Å，图注里写了 Å = 10⁻¹⁰ m）。'
    + '<b>关键就是中间那个</b>：1.33 夹在单键 C–N（1.49）和双键 C＝N（1.27）<b>中间</b>——'
    + '这就是「部分双键」四个字的全部证据，不用提轨道。'
    + '<br><br><b>看到图要说的那一段</b>：“The six atoms of the peptide bond lie in <b>one plane</b>. '
    + 'The carbon-nitrogen bond is <b>1.33 Å</b>, between a single bond at 1.49 and a double bond at 1.27, '
    + 'so it has <b>partial double-bond character</b> and cannot rotate freely. That is why <b>cis-trans isomers</b> exist, '
    + 'and in globular proteins it is almost always the <b>trans</b> one. The cis form occurs practically only before a <b>proline</b>.”'
    + '<br><br>⚠ <b>一处书自己对不上的小数</b>：图上印的 C–N 是 <b>1.33</b>，同页正文写的是 <b>1.32 Å（0.132 nm）</b>。'
    + '他要数就说 “about 1.32 to 1.33 Å”，两个都是这本书的。'
    + '<br>图里两个捷克语标注就是<b>肽键</b>和<b>酰胺平面</b>，它们长在图正中间，裁不掉也不用裁——图看得清就行。',
  src2:'Biochemie, Obr. 2.5, p027 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p028_obr26_amide_planes_rotation.jpg',
  t:'一条链 ＝ 一串硬平面 ＋ 两个能转的键（书 Obr. 2.6）',
  cap:'<b>这张把上一张接成一条链，而且它是「为什么只有那几种二级结构」的回答。</b>'
    + '一排<b>阴影的平行四边形</b>就是一个接一个的酰胺平面；它们<b>只在 α-碳上铰接</b>，'
    + '那两根键上画着<b>弯曲的旋转箭头</b>和 φ、ψ 两个希腊字母。两端的箭头标着 <b>N 端</b> 和 <b>C 端</b>。'
    + '<br><br><b>画的顺序（四步，黑板上三十秒）</b>：'
    + '<br>① 横着画 <b>三到四个阴影的四边形</b>，一上一下错开。'
    + '<br>② 每两个四边形<b>只用一个点相连</b>，那个点标 <b>Cα</b>。'
    + '<br>③ 在 Cα 两边的两根键上各画一个<b>弯箭头</b>，左边标 <b>φ</b>（N–Cα），右边标 <b>ψ</b>（Cα–C）。'
    + '<br>④ 左端写 <b>N</b>、右端写 <b>C</b>，各加一个箭头。'
    + '<br><br><b>边画边说的两句</b>：“The backbone is a series of <b>rigid planes</b> separated by the substituted methylene groups, the alpha-carbons.”'
    + '<br>“The two bonds at each alpha-carbon, <b>phi</b> and <b>psi</b>, are ordinary single bonds and <b>can rotate</b>. '
    + 'So the only freedom the chain has is at the alpha-carbons, and that is why there are only a few regular conformations: '
    + 'the <b>alpha-helix</b>, the <b>beta-structure</b> and, in this textbook, the <b>collagen helix</b>. '
    + 'Pauling and Corey proposed the first two in <b>1951</b>, from bond lengths and angles alone.”'
    + '<br><br>这两句把段 3 和速背 06 接起来：<b>平面是约束，φ/ψ 是自由度，二级结构就是这个自由度只有几个解。</b>',
  src2:'Biochemie, Obr. 2.6, p028 · 250 dpi 原图裁切，未修改'},

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
  src2:'Biochemie, figure 2.8, p029 · 300 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p030_obr210_beta_parallel.jpg',
  t:'平行 β-structure —— 三支箭头同一个方向（书 Obr. 2.10）',
  cap:'<b>这一张和下一张要一起看，差别就在右边那三支箭头。</b>这张三支<b>全朝右</b>，所以是<b>平行</b>。'
    + '请注意上半部是俯视，下半部是<b>从侧面看同一东西</b>——一条折线，这就是书叫它「折叠纸」的理由。'
    + '<br><br><b>画的顺序（四步，不用画原子）</b>：'
    + '<br>① 画<b>三条水平的长箭头</b>，上中下排好，<b>三个箭头尖全指右</b>。'
    + '<br>② 相邻两条之间拉<b>几根竖虚线</b>，标上 <b>C＝O … H–N</b>——这是主链氢键。'
    + '<br>③ 在每条链上交替向上向下标几个 <b>R</b>——侧链交替地朝两面突出。'
    + '<br>④ 另起一行画侧面视图：一条<b>来回折的锐角线</b>。'
    + '<br><br><b>边画边说的两句</b>：“In the beta-structure the main chain is almost <b>fully extended</b>, and it is held by hydrogen bonds between the <b>C=O and N-H groups of two different chains</b>, not within one chain as in the helix.”'
    + '<br>“If the neighbouring chains run in the <b>same direction</b> it is the <b>parallel</b> beta-structure.”'
    + '<br><br><b>这张图还是你在「二级跟三级怎么分」上的反例</b>：两条配对的链在序列上可以离得很远，'
    + '按「序列上挨得近」这条判据它该算三级，可它靠的是<b>主链</b>氢键、有规则重复，所以是二级。'
    + '他要你给“多远”的数字时，<b>把这张图拿出来比给一个编的数字稳得多</b>。',
  src2:'Biochemie, Obr. 2.10, p030 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p030_obr211_beta_antiparallel.jpg',
  t:'反平行 β-structure —— 中间那支箭头反了（书 Obr. 2.11）',
  cap:'<b>跟上一张只差一件事，而那件事就是考点。</b>右边三支箭头是'
    + '<b>右 · 左 · 右</b>——相邻两条链<b>方向相反</b>，所以是<b>反平行</b>。'
    + '<b>考场上就看这三支箭头，别看原子。</b>'
    + '<br><br><b>画的顺序</b>：跟上一张<b>一模一样</b>，只把第② 步的中间那条箭头<b>调过来指左</b>。'
    + '其余四步不变。<b>两张一起画，左边一个右边一个，箭头一比就说完了。</b>'
    + '<br><br><b>边画边说的两句</b>：“If the neighbouring chains run in <b>opposite</b> directions it is the <b>antiparallel</b> beta-structure. '
    + 'The textbook gives exactly these two.”'
    + '<br>“A <b>beta-turn</b> lets one single chain fold back on itself, and the two flat pieces on either side of the turn then pair up <b>antiparallel</b>. '
    + 'If the connecting piece is longer, the two can also pair up parallel.”'
    + '<br><br><b>两个书上的例子，一句带过</b>：<b>fibroin</b>（丝）是<b>反平行</b>的，而且它的小残基（glycine、alanine、serine）'
    + '特别多，因为两张图里那些 R 得有地方放（p034）；'
    + '<b>头发的 keratin</b> 本来是 α-螺旋，<b>泖湿加热拉开就变成 β</b>，能拉到两倍长——'
    + '这就是「烫头发为什么有用」那一类听起来不像生化题的生化题。',
  src2:'Biochemie, Obr. 2.11, p030 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p033_obr215_supersecondary.jpg',
  t:'超二级结构的三个样子：βαβ · αα · β-meander（书 Obr. 2.15）',
  cap:'<b>速背 09 那一点里的 βαβ，就是图里的 (a)。</b>这张好画到不像话，而且图注里书自己把符号交代了：'
    + '<b>箭头 ＝ β-structure，螺旋线 ＝ α-helix</b>。'
    + '<br><br><b>画的顺序（他说 supersecondary 你就画 (a)，三笔）</b>：'
    + '<br>① 画一支<b>向上的粗箭头</b>。'
    + '<br>② 右边隔一点再画<b>一支向上的粗箭头</b>（两支<b>同向</b>，所以是平行 β）。'
    + '<br>③ 两支之间<b>画一根斜着的弹簧线</b>，两头分别接到两支箭头的尾巴和头。完了。'
    + '<br><br><b>边画边说的两句</b>：“Supersecondary structure means <b>clusters</b> of secondary-structure elements that recur in many proteins. '
    + 'The commonest is the <b>beta-alpha-beta</b> unit: two stretches of beta-structure separated by a stretch in the alpha-helical conformation.”'
    + '<br>“The textbook also shows an <b>alpha-alpha</b> unit and a <b>beta-meander</b>, which is three or more strands connected by short turns, all antiparallel.”'
    + '<br><br><b>这一点的价值不在名字，在它证明了什么。</b>书先给四级，然后说「后来的研究」又加了'
    + '<b>超二级</b>和<b>结构域</b>。一个会被后人加两层的分类，是描述工具，不是自然事实。'
    + '他问「二级和三级的界线在哪里」时，这张图就是那句 “the categories are a description we impose rather than something the molecule has” 的书证。',
  src2:'Biochemie, Obr. 2.15, p033 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p035_obr216_cytochrome_p450_fold.jpg',
  t:'三级结构画出来是什么样 —— 圆柱 ＝ 螺旋，扁箭头 ＝ β（书 Obr. 2.16）',
  cap:'<b>这张是「认」。全书只有这一张把一条链折完之后的样子画出来了。</b>'
    + '他把这类图摄过来问「这是什么」，答案是三级结构，不是四级——<b>从头到尾只有一根线，就是一条链。</b>'
    + '<br><br><b>书自己把画法的约定写在图上方那段里，三条</b>：'
    + '<br>① <b>圆柱（或盘着的纽带）＝ α-helix</b>——图里标着 A、B、D、E、I、J、K、L 的那些。'
    + '<br>② <b>扁箭头＝ β-structure 的一支</b>，而且<b>箭头从 N 端指出去</b>——所以箭头同时告诉你方向，'
    + '拿它就能当场说出哪几支是平行、哪几支是反平行。'
    + '<br>③ 中间那个<b>打斜线的圆盘是血红素（heme）</b>，图注里书明说了。'
    + '<br><br><b>看到图要说的那一段</b>：“This is a <b>ribbon scheme</b> of a tertiary structure — <b>one</b> chain, folded. '
    + 'Cylinders are <b>alpha-helices</b>, flat arrows are strands of <b>beta-structure</b> pointing away from the N-terminus, '
    + 'and the rest is irregular chain, the <b>random coil</b> regions between them. '
    + 'The hatched disc in the middle is the <b>heme</b>, so this is cytochrome P450.”'
    + '<br><br>⚠ <b>三级的例子说书上的那个</b>：肌红蛋白（myoglobin）一条链、以 α-helix 为主（p034），'
    + '1957 年 Kendrew 解出的第一个蛋白质三维结构（p009）。<b>血红蛋白是四级的例子，不是三级的。</b>'
    + '<b>chymotrypsin 几乎没有 α-helix</b>（p034）——他问「是不是每个蛋白都有螺旋」时就拿这个答。',
  src2:'Biochemie, Obr. 2.16, p035 · 250 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'Protein structure.',
  ez:'“There are four levels. Primary is the covalent level. It is the exact order of residues. Peptide bonds join them. It also includes the disulfide positions. Secondary is the regular local conformation of the main chain. Main chain hydrogen bonds hold it. Tertiary is the overall fold of one whole chain. It brings distant residues into contact. Side chain interactions hold it. So does the hydrophobic core. Quaternary exists only with more than one chain.”',
  ezcn:'<b>四层。</b><b>一级 ＝ 共价那一层</b>：<b>残基由肽键连起来的确切顺序，外加二硫键的位置</b>。<b>二级 ＝ 主链局部的规则构象</b>，<b>靠主链自己的氢键维系</b>。<b>三级 ＝ 一整条链的整体折叠</b>，<b>把序列上离得远的残基拉到一起</b>，<b>靠侧链之间的作用和疏水核心维系</b>。<b>四级 ＝ 只有不止一条链时才存在。</b>',
 mean:'他也可能只念题目，或说 #30 那句 “What are the different levels of protein structure?”。题库 #30，跟本题同一道。<b>整段照说。</b>',
 say:'“Four levels. Primary is the covalent level — the exact order of residues joined by peptide bonds, and the disulfide positions. Secondary is the regular local conformation of the main chain, held by main-chain hydrogen bonds. Tertiary is the overall fold of one whole chain, bringing residues far apart in the sequence into contact, held mostly by side-chain interactions and the hydrophobic core. And quaternary exists only if there is more than one chain.”'},

{q:'What holds a protein together?',
  ez:'“It depends which level you mean. And that is the point of the levels. The forces that fix each one are different. The covalent ones are two. They are the peptide bonds and the disulfide bridges. Secondary structure is held by main chain hydrogen bonds. Tertiary and quaternary are held by side chain interactions. Those are ion pairs, hydrogen bonds and van der Waals contacts. And disulfide bridges lock a fold. They lock a fold that has already formed.”',
  ezcn:'<b>看你说的是哪一层——而这正是分层的意义：固定每一层的力是不同的。</b><b>共价的有两样：肽键和二硫键。</b><b>二级结构靠主链氢键。</b><b>三级和四级主要靠侧链之间的作用：离子对、氢键、范德华接触。</b><b>而二硫键锁住的是一个已经折好的结构。</b>',
 mean:'入口是<b>力</b>那一列，不是四级的名字。先给判据，再按级给力。',
 say:'“It depends which level you mean, and that is the point of the levels — the forces that fix each one are different. The covalent ones are the peptide bonds and the disulfide bridges. Secondary structure is held by hydrogen bonds of the main chain. Tertiary and quaternary are held mostly by side-chain interactions: ion pairs, hydrogen bonds and van der Waals contacts, with the disulfide bridges locking a fold that has already formed. And underneath all of it is the hydrophobic effect.”'},

{q:'Why do we talk about levels at all?',
  ez:'“Not because the molecule has layers. The levels are levels of scale. First the covalent chain. Then what neighbouring residues do. Then how the whole chain folds. Then how chains pack. One hard physical line runs through them. It is covalent against non covalent. Primary is the only covalent level. The textbook has a separate section on the forces. It lists them without dividing them by level.”',
  ezcn:'<b>不是因为分子真的有层。</b><b>这些「层」是尺度的层次</b>：<b>先是共价的链 → 再是相邻残基之间发生了什么 → 再是整条链怎么折 → 再是链之间怎么堆</b>。<b>其中只有一条硬的物理界线：共价 vs 非共价——一级是唯一共价的那一层。</b>⚠ <b>书有单独一节讲这些力，而且它列举的时候并不按层分。</b>',
 mean:'他直接问骨架那一句。<b>这题只答那一句就满分</b>，不用把四级背一遍。',
 say:'“Not because the molecule has layers. The levels are levels of scale: the covalent chain, then what neighbouring residues do, then how the whole chain folds, then how chains pack. The one hard physical line is covalent versus non-covalent: primary is the only covalent level. The textbook has a separate section on the forces that determine protein structure, and it lists them without dividing them by level.”'},

{q:'What is the difference between secondary and tertiary structure?',
  ez:'“The line is not drawn by the kind of force. It is drawn by distance along the sequence. Secondary structure is the regular local conformation of the main chain. Those residues lie close together in the chain. Main chain hydrogen bonds hold them. Tertiary is the fold of the whole chain. It brings residues far apart in the chain together. Side chain interactions hold it. So does the hydrophobic core.”',
  ezcn:'<b>这条线不是按「哪种力」画的，是按「在序列上隔多远」画的。</b><b>二级结构是主链局部的规则构象——那些残基在链上挨得近，靠主链氢键维系</b>。<b>三级是整条链的折叠——它把链上离得远的残基拉到一起，靠侧链作用和疏水核心维系。</b>',
 mean:'不是问两个定义，是问<b>分界依据</b>。答定义就漏了他要的东西。',
 say:'“The line is not drawn by the kind of force — it is drawn by <b>distance along the sequence</b>. Secondary structure is the regular local conformation of the main chain — residues that lie close together in the chain, held by main-chain hydrogen bonds. Tertiary is the fold of the whole chain, which brings residues far apart in the chain together, held mostly by side-chain interactions and the hydrophobic core. The textbook itself says the boundary is in some cases hard to define.”'},

{q:'Can you quantify that? How many residues?',
  ez:'“There is no fixed number. The textbook says so itself. The boundary is in some cases difficult to define. The criterion is not a distance. Secondary structure is what can form locally. It forms as the chain emerges. Tertiary needs something else. It needs residues that only meet after the chain folds back. The beta structure is the clearest illustration. Two strands far apart in sequence still count as secondary.”',
  ezcn:'<b>没有固定的数字，书自己说了：这条边界在有些情况下难以界定。</b><b>判据不是距离</b>：<b>二级结构是链一边出来一边就能就地形成的东西</b>；<b>三级需要「整条链折回来之后才碰得到」的残基</b>。<b>最清楚的例子是 β 结构：两条在序列上离得很远的链，仍然算二级结构。</b>',
 mean:'<b>他在要一个不存在的数字。</b>不要编。改成给判据，并引用书自己承认的模糊。',
 say:'“There is no fixed number — the textbook itself says the boundary between secondary and tertiary structure is in some cases difficult to define. The criterion is not a distance: secondary structure is what can form locally as the chain emerges. Tertiary needs residues that only meet after the whole chain folds back. The clearest illustration is the β-structure, where two strands far apart in sequence still count as secondary because they are held by main-chain hydrogen bonds.”'},

{q:'Is haemoglobin an example of tertiary structure?',
  ez:'“No. Haemoglobin is the standard example of quaternary structure. It has four chains. Two are alpha and two are beta. The textbook speaks of the beta chain in the sickle cell example. A beta chain implies an alpha chain. The tertiary example is myoglobin. It is a single chain. It is mostly alpha helix folded around a heme. It was the first protein structure ever solved. Kendrew solved it in nineteen fifty seven. Each chain of haemoglobin has a myoglobin like fold.”',
  ezcn:'<b>不是。血红蛋白是四级结构的标准例子</b>：<b>四条链，两条 α 两条 β</b>（<b>书在镰状细胞那个例子里说「β 链」，有 β 链就意味着有 α 链</b>）。<b>三级结构的例子是肌红蛋白：单链，大部分 α 螺旋，裹着一个血红素，是第一个被解出来的蛋白结构</b>（Kendrew，1957）。<b>血红蛋白的每一条链，折叠都像一个肌红蛋白。</b>',
 mean:'<b>陷阱：血红蛋白是四级的标准例子，不是三级。</b>三级的标准例子是肌红蛋白。两个名字换一下，就是 PESB 那种失分。',
 say:'“No — haemoglobin is the standard example of <b>quaternary</b> structure: four chains, two α and two β. The textbook itself speaks of the β-chain of haemoglobin in the sickle-cell example, and a β-chain implies there is an α-chain. The tertiary example is <b>myoglobin</b> — a single chain, mostly α-helix folded around a heme, the first protein structure ever solved, Kendrew 1957. Each chain of haemoglobin has a myoglobin-like fold. The way the four chains are arranged is the quaternary level.”'},

{q:'Describe the structure and function of proteins.',
  ez:'“Structurally we describe them at four levels. They run from the sequence up to the assembly of chains. For function the textbook starts from the overall shape. It divides proteins into two types. Fibrillar proteins are extended. They are cross linked into fibres. They build biological structures. They also carry mechanical load. Globular proteins are folded into a compact globule. They do everything else.”',
  ezcn:'<b>结构上我们分四层来描述，从序列一直到几条链的装配。</b><b>功能这一面，书是从整体形状起手的：它把蛋白分成两型。</b><b>纤维状蛋白</b>是<b>伸展的、交联成纤维</b>的，<b>负责搭建生物结构、承受机械负荷</b>；<b>球状蛋白</b>折成<b>紧凑的球</b>，<b>其余的事全是它们干的。</b>',
 mean:'题库 #29。<b>同一批材料，但功能那半必须是实的</b>——他问 structure and function，想听的是蛋白质<b>到底干哪些事</b>，不是「功能取决于构象」这一句话。',
 say:'“Structurally we describe them at four levels, from the sequence up to the assembly of several chains. For function the textbook starts from the overall shape. It divides proteins into two types. <b>Fibrillar</b> proteins are extended and cross-linked into fibres, and they build biological structures and carry mechanical load. <b>Globular</b> proteins are folded into a compact globule, and they do everything else. Then the jobs themselves. <b>Catalysis</b>, which is the enzymes. <b>Transport</b>, and the textbook names transferrin for iron and the haemoproteins for oxygen. <b>Storage</b>, and it names the phosphoproteins, which hold a reserve of phosphate. And <b>defence</b>, because a foreign protein is what an immune system raises antibodies against. All of it rests on the conformation. A randomly arranged chain has essentially no biological activity. That is why denaturation destroys the function without breaking a single covalent bond of the backbone.”',tail:'<b>功能那几条全部是书上的，就在这张卡的页范围里，被追问出处直接报页：</b><br>纤维状／球状两分法和「机械功能」 <span class="pg">p034 §2.2.4</span><br>转铁蛋白＝运输铁 · 磷蛋白＝贮存磷酸 <span class="pg">p036</span><br>金属是催化功能所必需（羧肽酶 Zn、丙酮酸脱羧酶 Mn、黄嘌呤氧化酶 Mo）·血红素蛋白＝氧的载体、细胞色素、血红素酶 <span class="pg">p037</span><br>异种蛋白引起抗体生成 <span class="pg">p039</span><br><br>⚠ <b>这一行原来写着「每一级靠的力不同」，那是旧说法。</b>书 p034 给的是一张<b>不分层</b>的力清单，2026-09-12 审定义时全卡都改了，只有这一行漏掉，现在一并改掉。<br><b>说不完就停在「运输」那一条</b>——四类里前两类最像他要的，后两类是加分。'},

{q:'Why does a protein fold at all?',
  ez:'“Because of water. In water the nonpolar side chains come together. So the molecule takes the structure with the smallest surface. It also gets a nonpolar core. They do not come together because they attract each other. They come together for another reason. The ordered water shell around them is released. So the hydrophobic effect is an entropy term. It is an entropy term of the water.”',
  ezcn:'因为<b>水</b>。<b>在水里非极性侧链会聚到一起，于是分子取「表面积最小」的结构，并且有了一个非极性的核</b>。⚠ <b>它们聚到一起不是因为互相吸引</b>，<b>而是因为它们周围那层有序的水被释放了</b>——<b>所以疏水效应是水的熵项。</b>',
 mean:'④ 的三层，落到疏水效应。',
 say:'“Because in water the nonpolar side chains come together, so the molecule takes the structure with the smallest surface and a nonpolar core. And they come together not because they attract each other, but because the ordered water shell around them is released. The hydrophobic effect is an entropy term of the water.”'},

{q:'Which level survives if you heat a protein?',
  ez:'“The covalent level survives. The sequence is untouched. The disulfide positions are untouched too. What is lost is the spatial arrangement. The protein goes to a random coil. It loses its biological activity. And its physical properties change.”',
  ezcn:'<b>共价那一层活下来：序列没动，二硫键的位置也没动。</b><b>丢掉的是空间排布——蛋白变成无规卷曲，失去生物活性，物理性质也变了。</b>',
 mean:'问的是<b>变性</b>。一级不掉，空间排布掉。',
 say:'“The covalent level survives — the sequence and the disulfide positions are untouched. What is lost is the spatial arrangement: the protein goes to a random coil, loses its biological activity and changes its physical properties.”'},

{q:'What happens when you boil an egg?',
  ez:'“That is heat denaturation. Any denaturant has the same first effect. The chain unfolds. Unfolding exposes the nonpolar residues. Those residues were inside the globule. In a concentrated solution the next step follows. Those newly exposed side chains interact with each other. The protein aggregates. And it comes out of solution. The textbook calls that coagulation. That is why it is irreversible.”',
  ezcn:'<b>那是热变性。</b><b>任何变性剂的第一个效果都一样：链摊开，把本来埋在球内部的非极性残基露出来。</b><b>在浓溶液里接着发生第二步：这些新露出来的侧链彼此作用，蛋白聚集，从溶液里出来</b>——<b>书管这个叫凝固（coagulation），这就是它不可逆的原因。</b>', odd:1,
 mean:'<b>这就是变性题</b>，只是穿了便装。',
 say:'“That is heat denaturation. The first effect of any denaturant is that the chain unfolds, which exposes the nonpolar residues that were inside the globule. In a concentrated solution those newly exposed side chains then interact with each other, the protein aggregates, and it comes out of solution. The textbook calls that <b>coagulation</b>. That is why it is irreversible.”',
 tail:'追问「那什么时候可逆」：<b>很稀的溶液</b>里小心加变性剂，再慢慢除去，蛋白会回到天然形态（p035）。这一条同时是「序列决定结构」的实验证据。'},

{q:'Why is hair not the same thing as silk?',
  ez:'“Because they are built on different secondary structures. Keratin is alpha helical. Two pairs of parallel helices twist together. They form a left handed four strand cable. That cable is the protofibril. Silk fibroin is antiparallel beta. It is rich in three residues. Those are glycine, alanine and serine. They are the three smallest side chains. That is what lets the sheets stack.”',
  ezcn:'因为<b>它们建立在不同的二级结构上</b>。<b>角蛋白是 α 螺旋的：两对平行螺旋拧成一根左手四股缆绳，也就是原纤维</b>。<b>丝心蛋白是反平行 β 的，而且富含甘氨酸、丙氨酸、丝氨酸——三个最小的侧链</b>。<b>正是这一点让 β 折叠片能一层层叠起来。</b>', odd:1,
 mean:'<b>问的是纤维状蛋白的两种二级结构。</b>',
 say:'“Because they are built on different secondary structures. Keratin is α-helical — two pairs of parallel helices twisted into a <b>left-handed</b> four-strand cable, the protofibril. Silk fibroin is <b>antiparallel β</b>, and it is rich in glycine, alanine and serine — the three smallest side chains. That is what lets the sheets stack.”'},

{q:'Why do you need vitamin C?',
  ez:'“Because collagen contains two modified residues. They are hydroxyproline and hydroxylysine. They are made after translation. Specific hydroxylases in the E R make them. Those enzymes need several things. They need oxygen and two oxoglutarate. They need metal ions. And they need ascorbate. Without ascorbate the hydroxylation does not finish. The collagen is then not stable.”',
  ezcn:'因为<b>胶原里含两种修饰过的残基：羟脯氨酸和羟赖氨酸</b>，<b>它们是翻译之后由内质网里专门的羟化酶做出来的</b>。<b>那些酶需要氧、α-酮戊二酸、金属离子——以及抗坏血酸</b>。<b>没有抗坏血酸，羟化做不完，胶原就不稳定。</b>', odd:1,
 mean:'<b>问的是 collagen 的羟化。</b>入口完全不像生化题。',
 say:'“Because collagen contains hydroxyproline and hydroxylysine, and those are made after translation by specific hydroxylases in the ER. Those enzymes need oxygen, 2-oxoglutarate, metal ions — and <b>ascorbate</b>. Without it the hydroxylation does not finish and the collagen is not stable.”',
 tail:'⚠ 「坏血病」这个病名<b>书里没有</b>，辅因子清单有（p112）。要说病名就说 “that is the biochemistry behind scurvy”，别说成书上写的。'},

{q:'Why is a scar different from normal skin?',
  ez:'“Both are made of collagen. What differs is how the fibres are laid down. Normal skin has a loose basket weave. The fibres run in many directions. Elastin sits between them. Hair follicles and glands sit within. A scar is repair tissue. Fibroblasts lay it down fast. Its collagen is in dense bundles. They all run in parallel. There is little elastin. And there are no appendages. So it is stiffer and less elastic.”',
  ezcn:'<b>两者都是胶原做的，差别在纤维是怎么铺的。</b><b>正常皮肤是松散的编篮状，纤维朝各个方向走，中间夹着弹性蛋白，里面还有毛囊和腺体。</b><b>疤是成纤维细胞快速铺出来的修复组织：胶原成致密的束、全都平行排列，弹性蛋白很少，没有附属器。</b><b>所以它更硬、弹性更差。</b>', odd:1,
 mean:'<b>先答问题本身</b>（组织层面纤维怎么排），再往分子走。前半是通用组织学，书里没有；后半是书 p031。',
 say:'“Both are made of collagen. What differs is how the fibres are laid down. In normal skin the collagen fibres form a loose <b>basket-weave</b> running in many directions, with elastin between them and hair follicles and glands within. A scar is repair tissue laid down fast by fibroblasts: dense bundles of collagen all running in <b>parallel</b>, little elastin, no appendages. So it is stiffer, less elastic, and looks and feels different. The molecule is the same. The arrangement above the molecule is not. If you want the molecule, collagen has two levels of helix. Each chain is itself a helix whose peptide planes are not parallel to the axis, so it cannot hydrogen-bond within itself. Three such chains then wind round a common axis like a rope, into a <b>right-handed</b> superhelix of 3.3 residues per turn in the textbook. It is held by <b>intermolecular</b> hydrogen bonds between the chains.”'},

{q:'What is the difference between a peptide and a protein?',
  ez:'“It is a convention about length. Up to ten residues we say oligopeptide. Above that we say polypeptide. A chain of more than a hundred residues is called a protein.”',
  ezcn:'<b>这是一个关于长度的约定。</b><b>十个残基以内叫寡肽，再往上叫多肽，超过一百个残基的链才叫蛋白质。</b>', odd:1,
 mean:'<b>只问边界那一条</b>，别把四级背一遍。',
 say:'“It is a convention about length. Up to ten residues we say oligopeptide, above that polypeptide, and a chain of more than a hundred residues is called a protein.”'},

{q:'Why does blood clot?',
  ez:'“It is the textbook’s own example of one thing. A globular protein turns fibrillar. Fibrinogen is converted to fibrin during clotting. Proteins are divided by overall shape. They are fibrillar or globular. And that division is not permanent.”',
  ezcn:'<b>这正是书自己举的「球状蛋白变成纤维状蛋白」的例子：凝血过程中纤维蛋白原变成纤维蛋白。</b><b>蛋白按整体形状分成纤维状和球状——而这个划分不是永久的。</b>', odd:1,
 mean:'书自己给的「球状变纤维状」的例子。',
 say:'“It is the textbook’s own example of a globular protein turning fibrillar: fibrinogen is converted to fibrin during clotting. Proteins are divided by overall shape into fibrillar and globular, and that division is not permanent.”'},

{q:'How would you destroy a protein’s function without cutting the chain?',
  ez:'“Denature it. The textbook lists physical causes first. Heat is one. Just foaming the solution is another. Then it lists chemical ones. Strong acids and bases. Organic solvents and detergents. Urea and guanidine. None of them touch the peptide bonds. They only unfold the chain.”',
  ezcn:'<b>让它变性。</b><b>书先列物理因素：加热，甚至只是把溶液打出泡</b>。<b>再列化学的：强酸强碱、有机溶剂、去污剂、尿素、胍</b>。<b>它们一个都不碰肽键——它们只是把链摊开。</b>',
 mean:'变性。顺带把书给的手段列出来。',
 say:'“Denature it. The textbook lists physical causes: heat, or just foaming the solution. Then it lists chemical ones: strong acids and bases, organic solvents, detergents, urea and guanidine. None of them touch the peptide bonds. They only unfold the chain.”'},

{q:'Why isn’t a protein just a floppy chain?',
  ez:'“Two things narrow it down. First the peptide bond is planar. It cannot rotate. So free rotation is left at two bonds only. Both sit at the alpha carbon. The conformational space is much smaller than it looks. Second, water selects. In water the nonpolar core selects one of those conformations.”',
  ezcn:'<b>有两件事把它收窄了。</b><b>① 肽键是平面的、不能旋转，所以只剩 α 碳两侧那两根键能自由转动——构象空间比看上去小得多。</b><b>② 水在挑：在水里，那个非极性的核从这些构象里挑出一个。</b>',
 mean:'两个理由：肽键刚性 ＋ 疏水核心。',
 say:'“Two things narrow it down. The peptide bond is planar and cannot rotate, so free rotation is left only at the two bonds at the α-carbon. The conformational space is much smaller than it looks. And in water the nonpolar core selects one of those conformations.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
 {g:'⚠ 结构是怎么测出来的 —— 四个方法各一句定义', gn:'⚠ <b>2026-09-23 审查补的。</b>这张卡原来有一句<b>点名</b>：「X 射线晶体学是经典路线，肌红蛋白就是这么解出来的；书还提了电子显微镜；书写完之后 NMR、冷冻电镜和从序列预测接管了一大块」——<b>四个方法点了名，一个都没说「它是什么」</b>。她那条规矩是<b>任何东西都先定义</b>，所以这里补上。', items:[
{r:'中', q:'You named X-ray, NMR and cryo-EM. What is each of them, in one sentence?',
    ez:'“X ray crystallography needs a crystal. X rays are shone on it. The crystal diffracts them. From the diffraction pattern we compute an electron density map. The model is built into that map. N M R works in solution. It measures interactions between nuclear spins. Those give distances between atoms. The distances give the fold. It suits small proteins. Cryo electron microscopy freezes the sample in thin ice. Many single particles are imaged. The images are averaged into a three dimensional map. It needs no crystal. Prediction from sequence uses no sample at all.”',
    ezcn:'<b>四句话，一个方法一句：</b><b>① <b>X 射线晶体学</b>：要先长出<b>晶体</b>，用 X 射线照它，晶体把射线<b>衍射</b>开；从衍射图算出<b>电子密度图</b>，再把模型搭进这张图里。</b><b>② <b>NMR</b>：在<b>溶液</b>里做，测的是<b>核自旋之间的相互作用</b>，由此得到<b>原子之间的距离</b>，距离再给出折叠方式；<b>适合小蛋白</b>。</b><b>③ <b>冷冻电镜</b>：把样品冻在<b>一层薄冰</b>里，拍<b>大量单颗粒</b>的电镜照片，再把这些照片<b>平均</b>成一张三维图；<b>不需要晶体</b>。</b><b>④ <b>从序列预测</b>：<b>根本不需要样品</b>。</b>⚠ <b>一句话概括四者的差别：<b>要不要晶体、在固体还是溶液里、要不要样品</b>。</b>',
 en:'“X-ray crystallography needs a crystal. X-rays are shone on it, the crystal diffracts them, an electron density map is computed from the diffraction pattern, and the model is built into that map. NMR works in solution and measures interactions between nuclear spins, which give distances between atoms, and the distances give the fold. It suits small proteins. Cryo-electron microscopy freezes the sample in a thin layer of ice, images many single particles and averages those images into a three-dimensional map, so it needs no crystal. Prediction from sequence uses no sample at all. The differences come down to three things. Whether a crystal is needed, whether the protein is solid or in solution, and whether there is a sample at all. The textbook names only X-ray and electron microscopy.”',
 cn:'⚠ <b>书只点了 X 射线和电子显微镜两个名字</b>，NMR、冷冻电镜和序列预测都是 general。<br><br>⚠ <b>补这一条的理由不是覆盖，是她自己的规矩</b>：这张卡原来只有一句点名，<b>四个方法一个都没有定义</b>，而她说过「<b>任何东西都先定义</b>」。<b>被他挑一个问「那 NMR 是干什么的」，点名是接不住的。</b><br><br><b>接口</b>：肌红蛋白是这张卡速背 07 三级结构的例子，<b>「它就是这么解出来的」这句话把方法和例子接在一起</b>。'},
 ]},
{g:'定义类', gn:'他默认你知道名词，所以专挑名词问。这一组最容易被打个措手不及。', items:[
{r:'中', q:'What is a domain?',
  ez:'“A domain is a compact globular region. It is a hundred to four hundred residues. A flexible segment joins it to the rest of the chain. It is not one of the classical four levels. Later work added it. Supersecondary structure was added at the same time. That means clusters of a few secondary structure elements. The beta alpha beta motif is one.”',
  ezcn:'<b>结构域 ＝ 一块紧实的球状区域，100–400 个残基，由一段柔性片段跟链的其余部分相连。</b><b>它不属于经典的四个层级，是后来的工作补进来的，同时补进来的还有「超二级结构」——几个二级结构元件的小簇，比如 βαβ 基序。</b>',
 en:'“A compact globular region of a hundred to four hundred residues, joined to the rest of the chain by a flexible segment. It is not one of the classical four levels. Later work added it, together with supersecondary structure. That means clusters of a few secondary-structure elements, such as the βαβ motif.”',
 cn:'后补的那一级。给尺寸，并说明它是后来加的。'},
{r:'实测', q:'What is a hydrogen bond?',
    ez:'“The textbook calls it a special case of electrostatic interaction. It happens between dipoles. One hydrogen is covalently bound to an electronegative atom. Another electronegative atom carries a lone pair. The hydrogen is attracted to that lone pair. The first atom is the donor. The second atom is the acceptor. A hydrogen bond is directional. A van der Waals contact is not. So a hydrogen bond can fix a geometry. It does not only hold things close.”',
    ezcn:'书把它叫做<b>偶极之间静电作用的一个特例</b>。一个氢<b>共价连在电负性原子上</b>，另一个电负性原子带着<b>孤对电子</b>，氢被那对电子吸引。<b>第一个原子是给体，第二个是受体。</b>它跟范德华接触的关键差别是<b>有方向性</b>——<b>所以它能固定一个几何形状，而不只是把东西拉近。</b>',
 en:'“The textbook calls it a special case of electrostatic interaction between dipoles. It is the attraction between a hydrogen covalently bound to an electronegative atom and a lone pair on another electronegative atom. That first atom, with its hydrogen, is the donor, and the second is the acceptor. Unlike van der Waals contacts it is <b>directional</b>, and that is why it can fix a geometry rather than just hold things close.”',
 cn:'在主链里，<b>供体是 N–H，受体是羰基的 O</b>。被继续追「谁能形成」：供体只能是 <b>N–H、O–H</b>（S–H 很弱），受体是 <b>O、N</b> 上的孤对。再追「为什么 C–H 不行」：<b>碳的电负性不够</b>，那个氢不带足够的正电。',
 warn:'<b>书只给了一句归类</b>（p032：偶极间静电作用的特例；p012 同样）；供体/受体和方向性是自己带的。同学转述的实测追问链正是「蛋白质靠什么维系 → 氢键 → <b>氢键是什么</b> → 谁能形成 → 为什么 X 和 Y 不能」。你的主干里「主链氢键」要说三次，所以这一刀几乎一定会来。',
 good:'<b>停止句：</b>“Below that it is electrostatics plus a little orbital overlap — physical chemistry rather than biochemistry.”'},
{r:'高', q:'What do you mean by “the sequence”?',
    ez:'“It is the exact order of the amino acid residues. They follow one another along the chain. Peptide bonds join them. By convention the sequence is written from the N-terminal residue. That residue has a free amino group. It is written to the C-terminal one. The chain is unbranched. So that order is a single well defined string.”',
    ezcn:'<b>序列 ＝ 氨基酸残基沿着链排列的确切顺序</b>，用<b>肽键</b>连起来。<b>习惯上从 N 端写到 C 端</b>（N 端是有游离氨基的那一头）。<b>链不分支，所以这个顺序是一串唯一确定的字符。</b>',
 en:'“The <b>exact order</b> in which the amino-acid residues follow one another along the chain, joined by <b>peptide bonds</b>. By convention it is written from the N-terminal residue, the one with a free amino group, to the C-terminal one. The chain is <b>unbranched</b>, so that order is a single well-defined string.”',
 cn:'<b>「精确顺序」「肽键」「有方向」「不分枝」——四件事。</b>只说 “the order of amino acids” 会漏掉后两件，而那两件正好是他下一刀会问的。<br><br>书 §2.1.4（<span class="pg">p026</span>）把这四件事写在同一段里，还顺带把链拆成<b>规律重复的主链</b>和<b>可变的侧链</b>——你主干里反复说的「主链氢键」就是靠这句话站住的。',
 good:'<b>如果他接着问「为什么要知道序列」，书 p026 列了理由，第一条最好用：</b>分析序列与三维结构的关系能揭示肽链在空间中排布的规则，<b>所以序列是 DNA 里的遗传信息和决定功能的三维结构之间的连接环节</b>。这一句同时是桥 2。'},

{r:'实测', q:'How far apart is “far apart”? Give me a number.',
    ez:'“There is no number. The textbook says so itself. It writes that the boundary is in some cases difficult to define. The line is drawn by a criterion. It is not drawn by a distance. Secondary structure forms locally. It forms as the chain emerges. It uses residues that are near each other in the sequence. Tertiary structure needs something else. It needs residues that only meet after the chain folds back.”',
    ezcn:'<b>没有数字，而且书自己说了</b>——它写「二级和三级结构的边界在有些情况下难以界定」。<b>这条线是靠判据画的，不是靠距离</b>：<b>二级结构是链一边出来一边就能就地形成的</b>，用的是序列上挨得近的残基；<b>三级结构要等整条链折回来之后才碰得到的那些残基</b>。',
 en:'“There is no number, and the textbook says so — it writes that the boundary between secondary and tertiary structure is <b>in some cases difficult to define</b>. The line is drawn by a <b>criterion</b>, not by a distance: secondary structure is what can form <b>locally, as the chain emerges</b>, from residues that are near each other in the sequence. Tertiary structure needs residues that only meet <b>once the whole chain has folded back on itself</b>.”',
 cn:'<b>他问一个数字，而这个边界没有数字。编一个就死定了。</b><br><br>能给的<b>操作性锚点</b>（都是书里的）：α-helix 的氢键跨<b>大约一整圈</b>，也就是三到四个残基；β-turn 是 <b>n → n+3</b>。所以「近」在实践中就是<b>一圈之内、几个残基</b>。「远」是指那些<b>只有等整条链折回来才碰得到</b>的残基，可能隔几十上百个。',
 good:'<b>他还追？分成两件事答——这是这道追问的完整版：</b><br><br><b>① 具体结构的数字是存在的，而且精确：</b><br>α-helix 氢键 <b>i → i+4</b>（每圈 3.6 残基，螺距 0.54 nm）· β-turn <b>n → n+3</b> · 3₁₀ helix i+3 · π-helix i+5。<b>这些可以直接报。</b><br><br><b>② 但「类别的边界」那个数不存在，而且不该存在。</b>因为 <b>β-structure 打破任何阈值</b>：两段配对的链可以隔一百个残基，仍然是二级结构——定义它的是主链氢键的规则重复，不是距离。<br><br><b>③ 为什么不该存在：这个分级是人划的，不是分子自带的。</b>书自己在证明这一点——它先给四级，然后说「later studies」（书上那句话的英译）又加了 supersecondary 和 domain。<b>一个会被后人加两层的分类，是描述工具，不是自然事实。</b><br><br>完整说法：<br>“The individual structures have exact numbers — the α-helix hydrogen bond spans <b>i to i+4</b>, a β-turn is <b>n to n+3</b>. What has no number is the boundary between the <b>categories</b>, because the categories are a description we impose rather than something the molecule has. The β-structure is the case that breaks any cutoff: two strands a hundred residues apart in the sequence are still secondary structure, because what defines it is regular main-chain hydrogen bonding, not proximity.”<br><br><b>这个答案比任何数字都强</b>：它给出了真实存在的数、说清了哪个数不存在、并说明了为什么不存在。最后那句 “a description we impose” 是 researcher 的标志。'},

{r:'高', q:'You put the disulfide bridges under primary structure. Then why do they hold the tertiary fold?',
    ez:'“Those are two different questions. The first one is which cysteines are joined. That is part of the covalent description of the chain. So the textbook lists disulfide positions with the primary structure. Lehninger does the same. The second question is what the bridge does. It locks a fold that has already formed. The textbook says it mainly stabilises an already formed structure. And the pairing is not automatic. The textbook says disulfide formation is not specific. Protein disulfide isomerase reshuffles the bridges in the E R. It reshuffles them until the native pairing is reached.”',
    ezcn:'<b>那是两个不同的问题。</b><b>「哪些半胱氨酸被连在一起」属于这条链的共价描述</b>，所以书把二硫键的位置列在<b>一级结构</b>里，Lehninger 也一样。<b>「这个桥干什么」是另一回事：它锁住一个已经折好的结构</b>——书的原话是<b>它主要是稳定已形成的结构</b>。<b>而且配对不是自动对的</b>：书说<b>二硫键的形成没有专一性</b>，<b>内质网里的蛋白二硫键异构酶会一直重排，直到配成天然的那一套。</b>',
 en:'“Because those are two different questions. <b>Which cysteines are joined</b> is part of the covalent description of the chain, so this textbook lists the disulfide positions with the primary structure. Lehninger does the same. <b>What the bridge does</b> is lock a fold that has already formed: the textbook says it contributes mainly to stabilising an already formed structure. And the pairing is not automatic. The textbook says disulfide formation is not specific, and protein disulfide isomerase in the ER reshuffles the bridges until the native pairing is reached.”',
 cn:'p033 把二硫键的<b>位置</b>算进一级；p032 说它「主要是稳定<b>已经形成</b>的结构」（<i>they contribute mainly to stabilising a structure that has already formed</i>）；p034 又把它列进固定球蛋白折叠的五样力里。<b>三处不矛盾：一处说它在哪一级登记，两处说它干什么。</b>把三处连起来说，比只说「别的教材算三级」稳得多。',
 good:'<b>他再追「那为什么胞质蛋白基本没有二硫键」</b>——那是卡 13 的地盘：胞质是还原环境，有足够游离巯基，S–S 会被拆回去，只有 ER 里留得住。<b>这是一个你想接的口子。</b>'},

{r:'高', q:'Give me an example for each level.',
    ez:'“Primary: insulin. It was the first sequence ever read, by Sanger in nineteen fifty three. The textbook’s example of why primary structure matters is sickle cell anaemia. Glutamate at position six of the beta chain becomes valine. Secondary: the alpha helix of keratin. Also the beta structure of silk fibroin, and the collagen helix. Tertiary: myoglobin. It is one chain, mostly alpha helix, folded around a heme. It was the first structure solved. Quaternary: haemoglobin, with two alpha and two beta chains. The textbook’s own example is an antibody.”',
    ezcn:'<b>一级</b>：胰岛素，<b>第一条被读出来的序列</b>（Sanger 1953）；书讲一级结构为什么要紧用的例子是<b>镰状细胞贫血</b>——<b>β 链第 6 位谷氨酸变成缬氨酸</b>。<b>二级</b>：角蛋白的 <b>α 螺旋</b>、丝心蛋白的 <b>β 结构</b>、<b>胶原螺旋</b>。<b>三级</b>：<b>肌红蛋白</b>——一条链，大部分 α 螺旋，裹着一个血红素，<b>第一个被解出来的结构</b>。<b>四级</b>：<b>血红蛋白</b>（两条 α 两条 β），书自己的例子是<b>抗体</b>。',
 en:'“Primary: insulin, the first sequence ever read, Sanger 1953. The textbook’s example of why it matters is sickle-cell anaemia, glutamate at position 6 of the β-chain of haemoglobin replaced by valine. Secondary: the α-helix of keratin, the β-structure of silk fibroin, the collagen helix. Tertiary: myoglobin — one chain, mostly α-helix folded around a heme, the first structure solved. Quaternary: haemoglobin, two α and two β chains. Or take the textbook’s own example, an antibody, where the antigen-binding site is made of parts of both chain types.”',
 cn:'全部在书里：insulin 与镰刀型贫血 p009、p027 · keratin / fibroin / collagen p034 · 肌红蛋白 p009、p034 · 抗体 p033。<b>血红蛋白一定放四级，别放三级。</b>书还有一个四级的好例子在后门区：<b>乳酸脱氢酶</b>四聚体，H 和 M 两种亚基拼出 H₄、H₃M、H₂M₂、HM₃、M₄ 五种同工酶，动力学性质不同，机体拿它调代谢（p064–p065）——这是任何酶题走出去会掉进的那一块。',
 good:'<b>他接着问「为什么四级值得单独算一级」</b>——下一条，有英文整句。'},

{r:'高', q:'Why does quaternary structure deserve a level of its own?',
    ez:'“Because the contacts between subunits are often where the activity is. The textbook’s example is the antibody. Its antigen binding site is built from parts of both kinds of chain. So that site exists on neither chain alone. Allosteric enzymes make the same point. The textbook says they are usually built of subunits. Their regulation works through the interfaces. So quaternary structure is not chains piled together. It is the level where activity can appear only at a contact surface.”',
    ezcn:'因为<b>活性常常就在亚基之间的接触面上</b>。书的例子是<b>抗体</b>：<b>抗原结合位点由两种链各出一部分拼成，所以它在任何一条链上都不存在</b>。<b>别构酶也是同一个道理</b>——书说它们<b>通常由亚基构成</b>，<b>调控就走界面</b>。<b>所以四级结构不是「几条链堆在一起」，而是「只有在接触面上才可能出现的那一层活性」。</b>',
 en:'“Because the <b>contacts between subunits are often where the activity is</b>. The textbook’s example is the antibody: the antigen-binding site is built from parts of chains belonging to both kinds of subunit, so it exists on neither chain alone. And allosteric enzymes are, as the textbook says, usually built of subunits — regulation works through the interfaces. So quaternary structure is not chains piled together. It is the level at which activity can appear only at a contact surface.”',
 cn:'p033：亚基的连接处或接触面常常对生物活性重要，抗体的抗原结合位点由两种亚基各出一部分拼成。p063：别构酶通常由亚基组成。'},

{r:'高', q:'What is the difference between conformation and configuration?',
    ez:'“A conformation can be changed by rotating bonds. A configuration can only be changed by breaking a bond and remaking it. Folding is conformational. The L configuration at every alpha carbon is untouched by it. There is one borderline case. It is the peptide bond itself. The bond has partial double bond character. So the textbook calls cis and trans configurations. And the cell has an enzyme to catalyse that rotation. It is peptidyl prolyl isomerase.”',
    ezcn:'<b>构象 conformation 靠转键就能改；构型 configuration 只能靠断键再接才能改。</b><b>折叠是构象层面的事</b>——<b>每个 α 碳上的 L 构型在折叠中毫发无损</b>。<b>有一个边界情形：肽键本身</b>。因为它<b>带部分双键性质</b>，<b>书把顺反叫做构型</b>；<b>而细胞居然有一个酶来催化这个旋转——肽酰脯氨酰异构酶。</b>',
 en:'“A conformation you can change by <b>rotating</b> bonds. A configuration you can only change by <b>breaking and remaking</b> one. Folding is conformational — the L configuration at every α-carbon is untouched. The one borderline case is the peptide bond itself: because of its partial double-bond character the textbook calls cis and trans <b>configurations</b>, and the cell has an enzyme, peptidyl-prolyl isomerase, to catalyse that rotation.”',
 cn:'这题是捷克这门课的口味：<b>它比一般生化更看重有机化学</b>。答完顺手给例子：D/L 氨基酸、cis/trans 肽键——两条各有英文整句，在下面。',
 warn:'书里<b>没有</b>把这两个词并排解释过。这条要自己带着。'},
{r:'实测', q:'What is denaturation?',
    ez:'“A native protein has one definite spatial arrangement. That is its characteristic conformation. Its biological activity depends on that conformation. Denaturation is the loss of it. Physical or chemical agents cause the loss. The protein passes to a less ordered form. That form is a random coil. It loses its biological function. Its physical properties change too. Every denaturant has the same first effect. The chain unfolds. Unfolding exposes the nonpolar residues. Those residues were inside the globule. So solvation drops. Solubility drops as well. Physical causes are heat and even foaming. Chemical causes are strong acids and bases. They also include organic solvents, detergents, urea and guanidine.”',
    ezcn:'天然蛋白有<b>一个确定的空间排布</b>，叫它的<b>特征构象</b>，<b>生物活性就依赖它</b>。<b>变性就是丢掉这个构象</b>：在物理或化学因素下变成更无序的<b>无规卷曲</b>，失去功能，物理性质也变。<b>所有变性剂的第一个效果都一样——链摊开，把本来埋在球内部的非极性残基露出来，于是溶剂化和溶解度都掉下去。</b>物理的：加热，甚至只是把溶液打出泡。化学的：强酸强碱、有机溶剂、去污剂、尿素、胍。',
 en:'“A native protein has a definite spatial arrangement, its characteristic conformation. Its biological activity depends on it. <b>Denaturation is the loss of that native conformation</b> under physical or chemical agents: the protein passes to a less ordered form, a random coil, loses its biological function and changes its physical properties. The first effect of every denaturant is that the chain <b>unfolds</b>, which exposes the nonpolar residues that were inside the globule, so solvation and solubility drop. Physical causes: heat, even just foaming the solution. Chemical: strong acids and bases, organic solvents, detergents, urea, guanidine.”',
 cn:'p035 整节。<b>「变性」= denaturation：构象丢了，共价键没动。</b>「变质」不是生化名词——那是食品腐败（微生物、氧化），别混。书还说变性有正面用处：变性蛋白更容易被水解酶消化（做熟食物的道理）、杀灭病原（热或化学灭菌）。'},

{r:'高', q:'Why is denaturation sometimes reversible and sometimes not?',
    ez:'“It depends on concentration. Add the denaturant carefully to a very dilute solution. Then the unfolding is reversible. Remove the agent slowly and the protein returns to its native form. In a more concentrated solution a second process starts. The newly exposed side chains interact with each other. The molecules aggregate. Solubility falls further. That part is irreversible. With heat the protein may come out of solution altogether. The textbook calls that coagulation. With detergents or urea there is no coagulation.”',
    ezcn:'<b>取决于浓度。</b><b>在很稀的溶液里小心地加变性剂，摊开是可逆的</b>——<b>慢慢把变性剂去掉，蛋白会回到天然形式</b>。<b>浓度一高就多出第二个过程</b>：<b>新露出来的侧链彼此作用，分子聚集，溶解度进一步下降，这一步不可逆</b>。<b>加热时蛋白可能整个从溶液里出来，书叫这个凝固 coagulation</b>；<b>用去污剂或尿素则不发生凝固</b>。',
 en:'“It depends on concentration. Add the denaturant carefully to a <b>very dilute</b> solution and the unfolding is reversible — remove the agent slowly and the protein returns to its native form. In a <b>more concentrated</b> solution a second process sets in: the newly exposed side chains interact with each other, the molecules aggregate and solubility falls further. That is irreversible. In some cases, heat denaturation for instance, the protein comes out of solution altogether. The textbook calls that <b>coagulation</b>. With other agents, detergents or urea, there is no coagulation.”',
 cn:'p035 原文一段。这一条同时是「为什么煮鸡蛋不可逆」的答案。'},

{r:'高', q:'What does denaturation actually destroy — which level goes first?',
    ez:'“The covalent level survives. The sequence is untouched. The disulfide positions are untouched too. What is lost is the spatial arrangement. The protein goes to a random coil. It loses its biological activity. And its physical properties change.”',
    ezcn:'<b>共价那一层活下来了</b>：<b>序列没动，二硫键的位置也没动</b>。<b>丢掉的是空间排布</b>——<b>蛋白变成无规卷曲，失去生物活性，物理性质也变了。</b>',
 en:'“The covalent level survives: the sequence and the disulfide positions are untouched. What is lost is the spatial arrangement — the protein goes to a random coil, loses its biological activity and changes its physical properties.”',
 cn:'书 p035 有整整一节。<b>书自己给了机制</b>：所有变性剂的第一作用是把肽链展开，于是原来埋在球内的<b>非极性残基被暴露出来</b>，溶剂化下降、溶解度下降。<br><br>「为什么有时候可逆有时候不可逆」单独一条在上面，有英文整句。<span class="pg">p035</span>'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方，就是他会插刀的地方。', items:[
{r:'实测', q:'Why does collagen need almost thirty percent glycine?',
    ez:'“Because of the kind of helix it forms. In that helix every third side chain points into the axis. Only one residue fits in that space. Its side chain is a single hydrogen. That residue is glycine.”',
    ezcn:'因为它形成的那种螺旋<b>每隔两个残基就有一个侧链指向轴心</b>，<b>那个位置只塞得下侧链是一个氢原子的残基</b>——也就是 <b>glycine</b>。',
 en:'“Because in that kind of helix <b>every third side chain points into the axis</b>. The only residue that fits there is the one whose side chain is a single hydrogen — glycine.”',
 cn:'<b>这本书把两半都给了，但没有连起来。</b>p031 同一段里既说「含近 30% glycine」，又说「三分之一的侧链朝向螺旋内部」。<b>连起来就是答案。</b><br><br>这种题正是老师喜欢的：材料都在书里，考的是你有没有把它读成一个机制而不是两个事实。',
 good:'<b>顺势给出的第二层：</b>4-hydroxyproline 和 proline 又占了另外 30%，所以 collagen 的一级结构几乎是「甘氨酸 + 脯氨酸」的重复。<span class="pg">p031</span>'},
{r:'高', q:'Why is proline the one amino acid an α-helix cannot take?',
    ez:'“There are two reasons. Its side chain closes back onto its own alpha amino nitrogen. That makes a five membered pyrrolidine ring. So proline is a secondary amine, an imino acid. That nitrogen has no N H left to donate a hydrogen bond. And the helix is held by exactly those bonds. The ring also locks one of the two rotatable backbone angles. So the chain cannot take the helical geometry.”',
    ezcn:'两个理由。<b>它的侧链绕回来接到自己的 α-氨基氮上</b>，<b>形成五元吡咯烷环</b>，<b>所以脯氨酸是仲胺，是亚氨基酸</b>——<b>那个氮没有 N–H 可以拿去给氢键了</b>，<b>而螺旋靠的正是这些氢键</b>。第二，<b>那个环还锁死了主链两个可旋转角度中的一个</b>，<b>链摆不出螺旋的几何。</b>',
 en:'“Two reasons. Its side chain closes back onto its own α-amino nitrogen, making a five-membered <b>pyrrolidine</b> ring. So proline is a secondary amine, an imino acid, and that nitrogen has <b>no N-H left to donate</b> a hydrogen bond. And the five-membered ring locks one of the two rotatable backbone angles, so the chain cannot take the helical geometry.”',
 cn:'卡上只写了「装不下 proline」这个结果。顺便把 proline 的另一面也准备好：<b>cis 肽键几乎只出现在 proline 旁</b>（p027）——英文整句在「What do cis and trans mean」那条。环的名字在「What is that ring called」。',
 warn:'这条的两个理由<b>不是书上的</b>，是通用解释。说的时候不要说「书上写」。'},
{r:'实测', q:'Why does the peptide bond have partial double-bond character?',
    ez:'“Because the lone pair on the nitrogen is delocalised. It moves into the carbonyl. So the electrons are shared over O, C and N. They do not sit on the nitrogen. The C to N bond is therefore a hybrid. It is between a single bond and a double bond. The measurement shows this. The C to N bond is one point three two angstrom. A single C to N is one point four nine. A double one is one point two seven. A bond with double bond character cannot rotate. So six atoms lie in one plane. Those are the two alpha carbons, C, O, N and H. This is why cis and trans forms exist. It is also why only two backbone bonds rotate freely. Both of them sit at the alpha carbon.”',
    ezcn:'因为<b>氮上那对孤对电子离域了</b>，跑进羰基里，所以电子是<b>在 O–C–N 三个原子上共享</b>，不待在氮上。<b>于是 C–N 是单键和双键之间的杂化</b>。数字作证：<b>C–N 是 1.32 Å</b>，单键 1.49，双键 1.27。<b>带双键性质的键不能转</b>，所以<b>酰胺的六个原子（两个 α 碳、C、O、N、H）在同一个平面上</b>。这就是为什么会有顺反两种形式，也是为什么主链上<b>只有 α 碳两侧那两根单键能自由旋转</b>。',
 en:'“Because the <b>lone pair on the nitrogen is delocalised into the carbonyl</b>. The electrons are shared over O-C-N rather than sitting on the nitrogen, so the C-N bond is a hybrid between a single and a double bond. The measurement says so: the C-N is <b>1.32 Å</b>, between a single C-N at 1.49 and a double at 1.27. And a bond with double-bond character <b>cannot rotate</b>. The six atoms of the amide, the two α-carbons, C, O, N and H, lie in one <b>plane</b>. That is why there are cis and trans forms at all, and why the only free rotations in the backbone are the two single bonds at the α-carbon.”',
 cn:'全在 p027–p028，书的原话是「羰基 π 电子和氮的自由电子对<b>部分离域</b>」（<i>partial delocalisation of the π electrons of the carbonyl and of the lone electron pair of the nitrogen</i>），然后「不能自由转动」→ cis/trans → 球蛋白里几乎全是 trans、cis 只在 proline 旁；p028：肽键原子共面，Cα–C 和 Cα–N 是单键可以转，所以主链是<b>一串刚性平面被 –CHR– 隔开</b>（figure 2.6）。<br><b>三件事按这个顺序说：原因（离域）→ 证据（键长）→ 后果（平面、不能转、cis/trans）。</b>只说「它是部分双键」而不说为什么，他下一句一定是 why。',
 good:'<b>这条有一个值得主动接的后果：</b>同一个离域让羰基 O 带部分负电、N–H 带部分正电，所以主链的 C=O 和 N–H 是<b>很强的一对氢键受体和给体</b>——二级结构靠主链氢键，根子就在这里。一句话把段 3 和「为什么主链氢键」接上。<br><b>停止线：</b>他要追「为什么孤对会离域」——「因为离域把电荷放到电负性更大的氧上，整体能量更低。再往下是轨道，物理化学。」<b>不要说 sp2、不要画轨道。</b>'},

{r:'实测', q:'What is that ring called?',
    ez:'“Proline has a pyrrolidine. That is a saturated five membered ring with one nitrogen. That nitrogen is the alpha amino group itself. Histidine has an imidazole. That is an aromatic five membered ring with two nitrogens. It is weakly basic. So it can take or give a proton near neutral pH. Tryptophan has an indole. That is a benzene fused to a pyrrole. Phenylalanine has a phenyl ring. That is plain benzene. Tyrosine has a phenol. That is benzene with a hydroxyl.”',
    ezcn:'<b>脯氨酸</b>是 <b>pyrrolidine</b>（饱和五元环，一个氮，<b>而那个氮就是它自己的 α-氨基</b>）；<b>组氨酸</b>是 <b>imidazole</b>（芳香五元环，两个氮，弱碱性，<b>所以在中性 pH 附近能接能放质子</b>）；<b>色氨酸</b>是 <b>indole</b>（苯环并上吡咯）；<b>苯丙氨酸</b>是 <b>phenyl</b>（光苯环）；<b>酪氨酸</b>是 <b>phenol</b>（苯环加一个羟基）。',
 en:'“Proline’s is a <b>pyrrolidine</b> — a saturated five-membered ring with one nitrogen, and that nitrogen is the α-amino group itself. Histidine’s is an <b>imidazole</b> — an aromatic five-membered ring with two nitrogens, weakly basic. That is why it can take or give a proton near neutral pH. Tryptophan’s is an <b>indole</b>, a benzene fused to a pyrrole. Phenylalanine carries a <b>phenyl</b> ring, plain benzene. Tyrosine carries a <b>phenol</b>, benzene with a hydroxyl.”',
 cn:'PESB 那次说 histidine「上面的 ring」，老师不满意——<b>环要叫名字</b>。书 p021 只说 histidine 含弱碱性的咪唑基、Phe 和 Trp 带芳香环、proline 没有自由氨基；名字本身是通用有机化学。'},

{r:'高', q:'What do cis and trans mean for a peptide bond?',
    ez:'“The C to N bond cannot rotate. So the two alpha carbons on either side are fixed. On opposite sides it is trans. On the same side it is cis. The textbook calls them configurations. They are distinct isomers. In globular proteins trans dominates almost completely. The cis form occurs practically only next to a proline. It is about six per cent of X to proline bonds. And the cell has an enzyme to interconvert them. It is a peptidyl prolyl cis trans isomerase.”',
    ezcn:'<b>C–N 键不能转，所以它两边的两个 α 碳位置是固定的</b>：<b>在两侧就是反式 trans，在同一侧就是顺式 cis</b>。<b>书把它们叫构型，是两个不同的异构体。</b><b>球蛋白里几乎全是反式</b>，<b>顺式实际上只出现在脯氨酸前面</b>，<b>大约占 X–Pro 键的 6%</b>。<b>细胞有专门的酶把两者互换——肽酰脯氨酰顺反异构酶。</b>',
 en:'“Because the C-N bond cannot rotate, the two α-carbons on either side of it are fixed. On <b>opposite</b> sides it is trans. On the <b>same</b> side it is cis. The textbook calls them configurations, and they are distinct isomers. In globular proteins trans dominates almost completely. The cis form occurs <b>practically only next to a proline</b>, about six percent of X-Pro bonds. And the cell has a peptidyl-prolyl cis-trans isomerase to interconvert them.”',
 cn:'p027 原话：不能自由转动 → 存在 cis-trans 异构体 → 球蛋白里绝对以 trans 为主，cis 实际上只出现在 proline 旁。p109：X-Pro 约 6% 是 cis，由脯氨酰顺反异构酶催化。'},

{r:'高', q:'What do D and L mean for an amino acid?',
    ez:'“They name the configuration at the alpha carbon. That means which way the four groups sit in space. We fix it by comparison with glyceraldehyde. L-serine is drawn from L-glyceraldehyde. In the Fischer projection its amino group is on the left. Every amino acid in proteins is L. Glycine is the exception. It has no asymmetric carbon at all. Threonine and isoleucine have two. D amino acids do exist. They are in bacterial cell walls and some peptide antibiotics. They are not in proteins.”',
    ezcn:'<b>D/L 说的是 α 碳的构型</b>，也就是<b>那四个基团在空间里怎么摆</b>。<b>参照物是甘油醛</b>：<b>L-丝氨酸对应 L-甘油醛，在 Fischer 投影里氨基在左边</b>。<b>蛋白质里的氨基酸全是 L</b>，<b>甘氨酸例外</b>（<b>它根本没有不对称碳</b>），<b>苏氨酸和异亮氨酸有两个</b>。<b>D 型确实存在</b>——细菌细胞壁、某些肽类抗生素——<b>但不在蛋白质里。</b>',
 en:'“They name the <b>configuration at the α-carbon</b>, meaning which way the four groups sit in space. We fix it by comparison with glyceraldehyde: L-serine is drawn from L-glyceraldehyde, in the Fischer projection with the amino group on the left. Every amino acid found in proteins is <b>L</b>, except glycine, which has no asymmetric carbon at all. Threonine and isoleucine have two. D-amino acids do exist, in bacterial cell walls and some peptide antibiotics, but not in proteins.”',
 cn:'p024：除 glycine 外都属于 L 构型系列，跟 L-serine 从 L-glyceraldehyde 推出来一样；Thr 和 Ile 有两个不对称碳。「D 型在细菌细胞壁和肽类抗生素里」是通用知识。'},

{r:'高', q:'Why is the peptide bond essentially always trans?',
    ez:'“Because of a clash. In the cis form the two alpha carbons sit on the same side. So the two side chains sit on the same side too. They collide. Proline is the exception. Its side chain loops back onto the nitrogen. So the two forms cost about the same.”',
    ezcn:'因为<b>会撞上</b>。<b>顺式时两个 α 碳在同一侧，于是两条侧链也在同一侧，彼此挤在一起</b>。<b>脯氨酸是例外</b>：<b>它的侧链绕回到氮上去了，所以两种形式的代价差不多。</b>',
 en:'“Because in the cis form the two α-carbons, and therefore the two side chains, sit on the <b>same side</b> of the C-N bond and clash. Proline is the exception because its side chain loops back onto the nitrogen, so the two forms cost about the same.”',
 cn:'卡上说了「几乎总是 trans」和「cis 几乎只在 proline 旁」，<b>但没说为什么</b>。这两句连起来就是一个完整回答，而且第二句正好解释了第一句的例外。<span class="pg">p027</span>'},
{r:'实测', q:'What is the hydrophobic effect?',
    ez:'“It is a tendency. Nonpolar substances and groups in water associate with each other. They avoid being solvated. Two drops of oil in water merge the same way. The groups meant here are hydrocarbons. They include the nonpolar parts of lipids. They also include the nonpolar side chains. It is not an attraction between them. Water has to form an ordered shell around a nonpolar surface. Then the surfaces meet. That shell is released. The water gains entropy. That gain is the effect. In a protein it shows in two ways. The molecule takes the shape with the smallest surface. And the nonpolar side chains gather into a nonpolar core.”',
    ezcn:'它是一种<b>倾向</b>：水里的非极性物质和基团<b>互相靠拢、躲开被溶剂化</b>，就像水里两滴油会并成一滴。<b>它不是它们之间的吸引力</b>——真正发生的是：水必须在每个非极性表面周围<b>排出一层有序的壳</b>，表面一凑到一起<b>那层壳就被释放，水赚到熵</b>。在蛋白里它表现为两件事：<b>分子取表面积最小的形状</b>，<b>非极性侧链聚成一个非极性的核</b>。',
 en:'“It is the tendency of nonpolar substances and groups in water to associate with each other and avoid being solvated, the way two drops of oil in water merge. The groups meant here are hydrocarbons, the nonpolar parts of lipids and the nonpolar side chains. It is <b>not an attraction between them</b>: it is the <b>entropy the water gains</b> when the ordered shell it has to form around a nonpolar surface is released. In a protein it shows in two ways: the molecule takes the shape with the <b>smallest surface</b>, and the nonpolar side chains gather into a <b>nonpolar core</b>.”',
 cn:'三句全是书的：定义和「两滴油」p012–p013 · 「不是亲和力，是水的结构变化」p013 · 两种表现 p033。<b>说完第三句就停</b>——再往下是水的熵，物理化学。<br><br><b>他从这里能往哪儿走（每条一句话，来源都在书里）：</b><br>① <b>「hydrophobic 到底什么意思」</b>——对水亲和力低的基团：烃、脂的非极性部分、非极性侧链（p012）。反面 <b>hydrophilic</b>：极性或带电，能被水溶剂化。<b>一个分子两头各占一种，书叫 amphipathic</b>（书 p181 印的名词就是 <i>amphipathy</i>）：磷脂的脂肪酸尾疏水、甘油–磷酸–头基亲水。「亲脂 lipophilic」书只在膜运输那里用（p200），意思跟 hydrophobic 实际重合；「恐脂」不是一个用的词。<br>② <b>「它是键吗」</b>——不是，是驱动力。见横向卡 bonds。<br>③ <b>「还在哪里起作用」</b>——膜：双层里尾对尾、头朝外，非极性中间层，厚 3.5–4 nm，头尾之间的作用力全是非共价（p198）；整合膜蛋白靠非极性侧链跟脂尾的疏水作用留在膜里（p199）。DNA 碱基堆叠主要靠疏水作用稳定（p073，卡 03）。信号肽中段是疏水氨基酸（p110，卡 13）。<br>④ <b>「为什么肥皂让蛋白变性」</b>——去污剂两亲，钻进非极性侧链之间，把撑着核心的疏水效应拆掉；p035 把去污剂、尿素、胍列成化学变性剂，跟加热不同，不凝固。见横向卡 bonds。',
 good:'<b>哪条接、哪条停：</b>②④ 在 bonds 卡上，③ 的碱基堆叠和信号肽各有卡，<b>都可以接</b>。③ 的膜那句说完就停——再往下是脂那道题（#23），还没做。<br><b>他要追「水为什么会有序」</b>：非极性表面不能跟水成氢键，水分子只好在它周围排成笼子来保住彼此的氢键；两个非极性面靠在一起，中间的笼子放掉，熵升高。这是八分答案的第二层，被逼才给。'},

{r:'中', q:'Why does a protein need a hydrophobic core at all?',
  ez:'“For a globular protein the core selects one conformation. It selects it in water. Take the core away and the chain is a random coil. That is what the textbook says a denatured protein becomes. Fibrillar proteins are the exception. Collagen is held differently. Hydrogen bonds between chains hold it. Glycine packing holds it too. There is no core.”',
  ezcn:'对<b>球状蛋白</b>来说，<b>疏水核心是「在水里挑出唯一一个构象」的那个东西——把它拿掉，链就是一团无规卷曲，而书说变性蛋白变成的正是这个。</b><b>纤维状蛋白是例外：胶原靠链与链之间的氢键和甘氨酸的紧密堆积维持，不靠核心。</b>',
 en:'“For a globular protein the core is what selects one conformation in water: take it away and the chain is a random coil. That is exactly what the textbook says a denatured protein becomes. Fibrillar proteins are the exception: collagen is held by hydrogen bonds between chains and glycine packing, not by a core.”',
 cn:'这条把 <b>④ 的落点</b>和 <b>denaturation 那一节</b>接在一起：p035 说变性后是 <i>a random or statistical coil</i>。<b>所以「有核心」和「有唯一构象」是同一件事的两种说法。</b>'}
]},

{g:'怎么发现的', gn:'plasmid 那一类。要像 researcher 答：他们当时手上只有什么，所以只能怎么推。', items:[
{r:'实测', q:'How did anyone know a protein has one definite three-dimensional structure at all?',
    ez:'“The first hint was crystallisation. Haemoglobin crystallised in eighteen sixty four. A molecule that crystallises must all be one shape. A mixture of random conformations does not form a lattice. The actual structure had to wait. Kendrew solved myoglobin in nineteen fifty seven. He used X-ray analysis.”',
    ezcn:'<b>第一个线索是能结晶</b>——1864 年血红蛋白结晶。<b>能结晶就说明所有分子形状一样</b>，一堆随机构象排不出晶格。<b>真正的结构要等到 1957 年</b>，Kendrew 用 X 射线解出肌红蛋白。',
 en:'“The first hint was crystallisation, in 1864 with haemoglobin. <b>A molecule that crystallises must all be the same shape</b> — a mixture of random conformations does not form a lattice. The actual structure had to wait until 1957, when Kendrew solved myoglobin by X-ray analysis.”',
 cn:'<b>「能结晶就说明形状唯一」这个论证是这题的分数所在。</b>它把一个 1864 年的现象变成一个推理，而不是一个年份。<br><br>年表全在 p009 的 table 1.1：1864 Hoppe-Seyler 结晶 hemoglobin · 1902 Fischer 证明多肽本质 · <b>1951 Pauling &amp; Corey 提出 α-helix 与 β-structure</b> · 1953 Sanger 第一个序列 · 1957 Kendrew 第一个结构。方法名在 p008。'},
{r:'高', q:'Why did Pauling get the α-helix right before anyone had a protein structure?',
    ez:'“He did not read it off a protein. He derived it from measurements. Those were bond lengths and angles from amino acids and small peptides. Then he asked one question. What regular structures could such a chain form. He proposed the alpha helix in nineteen fifty one. That was two years before the first protein sequence. It was six years before the first protein structure.”',
    ezcn:'<b>他不是从蛋白上读出来的，是推出来的。</b>他用的是<b>氨基酸和小肽上量出来的键长和键角</b>，然后问一个问题：<b>这样一条链能形成什么样的规则结构。</b><b>α 螺旋提出于 1951 年</b>——<b>比第一条蛋白序列早两年，比第一个蛋白结构早六年。</b>',
 en:'“He did not read it off a protein. He derived it from bond lengths and angles measured on amino acids and small peptides, and asked what regular structures such a chain could form. The α-helix was proposed in 1951 — two years before the first protein sequence and six years before the first protein structure.”',
 cn:'<b>这个动作可以搬到任何一题上</b>：不说「谁在哪年做了什么」，说「他们当时手上只有什么，所以只能怎么推」。这就是 researcher 和 technician 的区别。<span class="pg">p028 p009</span>'},
{r:'高', q:'How do we know the sequence determines the structure?',
    ez:'“The textbook gives the experiment without naming it. Unfold a protein carefully in a very dilute solution. Then remove the denaturant slowly. The protein goes back to its native form. Nothing but the sequence was there to tell it how.”',
    ezcn:'<b>书给了实验但没给名字</b>：<b>在很稀的溶液里小心地把蛋白摊开，再慢慢把变性剂去掉，蛋白会回到天然形式</b>。<b>那一刻在场的只有序列，没有别的东西能告诉它怎么折。</b>',
 en:'“The textbook gives the experiment without naming it: if you unfold a protein carefully in a very dilute solution and then remove the denaturant slowly, <b>the protein goes back to its native form</b>. Nothing but the sequence was there to tell it how.”',
 cn:'<b>这就是 Anfinsen 的实验，而书自己写了它</b>（p035），只是没提名字。<b>你可以完全用这本书回答一个通常要引外部文献的问题</b>——这在口试里是最稳的位置。',
 warn:'Anfinsen 这个名字和 ribonuclease 这个体系<b>书里没有</b>，是从记忆写的。核过再主动说出口。<b>而且这句话要跟下一条连着说</b>，只说这一句是不完整的。'},
{r:'中', q:'How is a protein structure actually determined today?',
  ez:'“X ray crystallography is the classical route. That is how myoglobin was solved. The textbook also names electron microscopy. Since it was written the field has changed. N M R took over part of it. So did cryo electron microscopy. And so did prediction from sequence.”',
  ezcn:'<b>经典路线是 X 射线晶体学——肌红蛋白就是这么解出来的；书还点了电子显微镜。</b>⚠ <b>书写成之后，NMR、冷冻电镜和从序列直接预测，已经接管了这个领域相当大的一部分。</b>',
 en:'“X-ray crystallography is the classical route — that is how myoglobin was solved. The textbook also names electron microscopy. Since it was written, NMR, cryo-electron microscopy and prediction from sequence have taken over a large part of the field.”',
 cn:'<b>书只给了两个名字</b>（p008），而且是 2009 年的书。<b>主动说「since it was written」是加分</b>：它显示你知道这本书的年代。<br><br>被追问 AlphaFold 就说它预测的是 folded state，不预测折叠路径——接得上题库 #7 的 folding landscape。'}
]},

{g:'相邻考点', gn:'书里紧挨着这道题的两整节，加上折叠机制。他从这道题走出去，多半走这几个方向。', items:[
{r:'高', q:'How else are proteins classified?',
    ez:'“Besides shape, there is a second split. Shape gives fibrillar and globular. The second split is simple and conjugated proteins. A simple protein yields only amino acids on hydrolysis. A conjugated one carries a non peptide component. That component is either covalently attached. Or it is held by non covalent interactions.”',
    ezcn:'<b>除了形状（纤维状／球状），还有第二种分法</b>：<b>简单蛋白</b>和<b>结合蛋白</b>。<b>简单蛋白水解只给氨基酸</b>；<b>结合蛋白还带一个非肽的组分</b>，<b>要么共价接着，要么靠非共价作用抓着。</b>',
 en:'“Besides shape, fibrillar or globular, they are split into <b>simple</b> and <b>conjugated</b> proteins. A simple protein yields only amino acids on hydrolysis. A conjugated one carries a non-peptide component, either covalently attached or held by non-covalent interactions.”',
 cn:'<b>这是书里紧接着结构分级的下一节（§2.2.5, p036），所以它是最自然的续问。</b>四大类：<b>glycoprotein、phosphoprotein、metalloprotein、hemoprotein</b>。',
 good:'<b>书里一句很好用的话：</b>“By current understanding the non-peptide component is a regular part of the <b>great majority</b> of proteins — so-called simple proteins are rather the exception.” 这句把分类说成了历史遗留的划分，而不是自然界的事实。<span class="pg">p036</span>'},
{r:'实测', q:'Glycoproteins — how is the sugar attached?',
    ez:'“There are two linkages. N glycosidic goes onto the amide nitrogen of asparagine. The serum glycoproteins are the typical case. O glycosidic goes onto the hydroxyl of serine or threonine. The blood group substances are the typical case. The mucins are another one.”',
    ezcn:'两种连法。<b>N-糖苷</b>：糖接在<b>天冬酰胺的酰胺氮</b>上，典型例子是血清糖蛋白。<b>O-糖苷</b>：糖接在<b>丝氨酸或苏氨酸的羟基</b>上，典型例子是血型物质和黏蛋白。',
 en:'“Two linkages. <b>N-glycosidic</b>, through the amide nitrogen of <b>asparagine</b> — the serum glycoproteins are the typical case. And <b>O-glycosidic</b>, through the hydroxyl of <b>serine or threonine</b> — the blood-group substances and the mucins.”',
 cn:'同学转述的实测问题里有一条就是「N-glycosylation 到底是怎么形成的」，<b>而且要机制不要现象</b>。<br><br>第三类是 <b>proteoglycan</b>（含 glycosaminoglycan，结缔组织成分）。<b>第四类直接接回你的主干</b>：collagen 上接的是 D-galactose 或含半乳糖和葡萄糖的二糖，<b>接在 hydroxyproline 或 hydroxylysine 上</b>——就是你卡上那两个 collagen 特有残基。<span class="pg">p036</span>',
 warn:'完整形成机制（dolichol 载体、寡糖基转移酶、在 ER 里发生）在<b>卡 13</b>，不在这一节。'},
{r:'高', q:'Give me an example of a metalloprotein.',
    ez:'“Ferritin stores iron. It can hold up to thirty per cent of its mass as iron. Transferrin carries iron in plasma. Caeruloplasmin carries copper. Some enzymes need only a trace of metal. Carboxypeptidase has zinc. Pyruvate decarboxylase has manganese. Xanthine oxidase has molybdenum.”',
    ezcn:'<b>铁蛋白 ferritin 储铁</b>，<b>含铁量可达自身质量的 30%</b>；<b>转铁蛋白</b>在血浆里运铁；<b>铜蓝蛋白</b>运铜。<b>有些酶只要一点点金属</b>：<b>羧肽酶带锌</b>、<b>丙酮酸脱羧酶带锰</b>、<b>黄嘌呤氧化酶带钼</b>。',
 en:'“Ferritin stores iron — it can hold up to <b>thirty percent of its mass</b> as iron. Transferrin carries iron in plasma, caeruloplasmin carries copper. And some enzymes need only a trace: carboxypeptidase has <b>zinc</b>, pyruvate decarboxylase <b>manganese</b>, xanthine oxidase <b>molybdenum</b>.”',
 cn:'书 p036–p037 把名字和数字都给齐了，<b>这是典型的 very specific 题弹药</b>。<br><br>结合金属的是哪些基团？书说是<b>羧基、咪唑基、巯基</b>——咪唑基就是 histidine 的侧链，<b>这正是 His-tag 靠的那个基团</b>。<br><br>还有 <b>FeS 蛋白</b>：Fe 与 –SH 和硫离子成的簇，在细菌和植物 <b>ferredoxin</b> 里，管氧化还原。<span class="pg">p036 p037</span>'},
{r:'中', q:'What is a hemoprotein?',
  ez:'“A hemoprotein is a conjugated protein. Its non peptide component is haem. Haem is iron held in a complex. A porphyrin holds it. The haemoproteins cover three groups. The oxygen carriers. The cytochromes. And the haem enzymes.”',
  ezcn:'<b>血红素蛋白 ＝ 非肽部分是血红素的那类结合蛋白；血红素 ＝ 被卟啉络合住的铁。</b><b>这一类包括三组：氧载体、细胞色素、以及血红素酶。</b>',
 en:'“A conjugated protein whose non-peptide component is <b>haem</b> — iron held in a complex with a <b>porphyrin</b>. The haemoproteins are the oxygen carriers, the cytochromes, and the haem enzymes.”',
 cn:'书把它跟其他金属蛋白分开写，理由很具体：<b>其他金属复合物在肽链被切断时就散了，而血红素不会</b>，因为铁是被卟啉抱住的。<span class="pg">p037</span>'},
{r:'高', q:'Does the sequence really fold the protein by itself?',
    ez:'“Not always. The textbook is careful here. Only some proteins go spontaneously to the lowest energy conformation. Those are mostly small ones and a few more complex ones. For a number of proteins the situation is different. The biologically active conformation is not the most favourable one energetically. So folding of the nascent chain is a directed process. Chaperones catalyse it.”',
    ezcn:'<b>不总是。</b>书在这里很小心：<b>只有一部分蛋白会自发走到能量最低的构象</b>，<b>大多是小的，加上少数复杂的</b>。<b>还有相当一批蛋白，它的生物活性构象并不是能量上最有利的那个</b>——<b>所以新生链的折叠是一个被引导的过程，由分子伴侣催化。</b>',
 en:'“Not always. The textbook says only some proteins go spontaneously to the conformation of lowest energy, mostly small ones and a few more complex. But the textbook says that for a number of proteins <b>the biologically active conformation is not the energetically most favourable one</b>. So folding of the nascent chain is a directed process, catalysed by <b>chaperones</b>.”',
 cn:'<b>这一条修正了上面那条 Anfinsen。</b>「序列决定结构」在试管里对，<b>在细胞里只对一部分蛋白</b>。两句连着说，比只说前一句高一个层次。<br><br>chaperone 和 chaperonin <b>进化上高度保守</b>，原核真核都有；它们<b>识别并稳定部分折叠的中间体</b>，也参与修复折错的链。书给的例子是 <b>GroEL / GroES</b> 和 <b>hsp70</b>。<br><br>书还直接点了后果：<b>多种严重神经疾病就是蛋白质折叠错误造成的</b>。<span class="pg">p109</span>'},
{r:'高', q:'You said cis peptide bonds occur next to proline — does the cell do anything about that?',
    ez:'“Yes. There is a whole enzyme family for it. They are the peptidyl prolyl cis trans isomerases. They catalyse rotation about that specific peptide bond. They are found from bacteria to mammals.”',
    ezcn:'<b>有，而且是一整个酶家族</b>：<b>肽酰脯氨酰顺反异构酶</b>，<b>专门催化那一根肽键的旋转</b>，<b>从细菌到哺乳动物都有。</b>',
 en:'“Yes. There is a whole enzyme family for it: the <b>peptidyl-prolyl cis,trans-isomerases</b>, which catalyse rotation about that specific peptide bond. They are found from bacteria to mammals.”',
 cn:'<b>这条把卡上已有的两个点接成了一条链</b>：肽键几乎总是 trans（p027）→ 例外是 proline 旁 → 而细胞专门派了一个酶系管这件事（p109）。<br><br>能把两章接起来，是这场考试里最划算的动作。<span class="pg">p109 p027</span>'},
{r:'中', q:'How do you determine the molecular mass of a protein?',
  ez:'“The classical methods are four. Ultracentrifugation is one. Gel or permeation chromatography is another. Those are the molecular sieves. Electromigration is the fourth. Ordinary methods do not work here. The relative molecular mass is too large. It runs from ten to the fourth to ten to the fifth. For viruses it reaches ten to the seventh.”',
  ezcn:'<b>经典方法有四种：超速离心 · 凝胶（渗透）层析 · 分子筛 · 电迁移。</b><b>普通方法在这里行不通，因为相对分子质量太大：从 10⁴ 到 10⁵，病毒可到 10⁷。</b>',
 en:'“The classical methods are <b>ultracentrifugation</b>, gel or permeation chromatography, the molecular sieves, and <b>electromigration</b>. Ordinary methods do not work because the relative molecular mass runs from ten to the fourth up to ten to the fifth, and for viruses up to ten to the seventh.”',
 cn:'书 §2.2.6（p037）整节讲这个。<b>方法题是这位老师的口味</b>（他会问「当年怎么发现要用 plasmid」那种题）。<br><br>顺带的一组性质：球状蛋白溶于盐水；溶液有胶体的部分性质（<b>Tyndall 效应、成胶、凝聚</b>），<b>但是均一分散系</b>，这点又像真溶液。<span class="pg">p037</span>'},
{r:'中', q:'How is the peptide bond formed, and which end do you write first?',
  ez:'“It is a condensation. The carboxyl of one amino acid joins the next one. It joins its alpha amino group. A molecule of water is lost. The chain is unbranched. And it has two different ends. So there is a convention. The sequence is written from the N terminal residue. It ends at the C terminal one.”',
  ezcn:'<b>肽键由缩合形成：前一个氨基酸的羧基接后一个的 α-氨基，脱掉一个水分子。</b><b>这条链不分支，而且两端不同，所以有个约定：序列从 N 端残基开始写，到 C 端结束。</b>',
 en:'“It is a condensation: the carboxyl of one amino acid joins the α-amino group of the next, with the loss of a molecule of water. The chain is <b>unbranched</b> and has two different ends, so by convention the sequence is written starting from the <b>N-terminal</b> residue and ending at the C-terminal one.”',
 cn:'书 §2.1.4（p026）。<b>这是一道看上去太简单、因而没人准备的题。</b><br><br>书还在同一处把链拆成两部分：<b>规律重复的主链</b> 和 <b>可变的侧链</b>。你主干里反复说的「主链氢键」就是靠这句话站住的。<span class="pg">p026</span>'}
]},

{g:'桥回主场', gn:'他顺着这些走，就走到你答得住的地方。', items:[
{r:'高', q:'Can a single residue change destroy a whole structure?',
    ez:'“The textbook’s own example is sickle cell haemoglobin. Glutamate becomes valine at position six of the beta chain. One charged surface residue becomes a hydrophobic one. That patch then makes the molecules stick to each other.”',
    ezcn:'书自己的例子是<b>镰状细胞血红蛋白</b>：<b>β 链第 6 位谷氨酸变成缬氨酸</b>。<b>一个带电的表面残基变成了疏水的</b>，<b>那一小块疏水补丁就让分子互相粘起来了。</b>',
 en:'“The textbook’s own example is sickle-cell haemoglobin: glutamate to valine at position six of the β chain. One charged surface residue becomes a hydrophobic one, and that patch makes the molecules stick to each other.”',
 cn:'<b>这是书内的例子（p027），但它直通你的工作</b>：一个残基改变整个分子的行为，正是 fitness landscape 和 directed evolution 在量的东西。<br><br>接法：“That is the same question I work on experimentally — how much substitution a binding surface tolerates before the fold or the binding is lost.”'},
{r:'中', q:'You mentioned dissociation constants — what is a Kd?',
  ez:'“It is the equilibrium constant of the dissociation reaction. So it is free protein times free ligand. That is over the complex. It has units of concentration. And numerically it means one thing. It is the free ligand concentration at half occupancy.”',
  ezcn:'<b>Kd ＝ 解离反应的平衡常数：游离蛋白 × 游离配体 ÷ 复合物。</b><b>量纲是浓度；数值上就是「半数位点被占据时的游离配体浓度」。</b>',
 en:'“The equilibrium constant of the dissociation reaction: free protein times free ligand over the complex. It has units of concentration, and numerically it is the free-ligand concentration at which half the sites are occupied.”',
 cn:'<b>这一刀是你自己在段 4 故意留的</b>，所以必须接得住。完整答案在卡 02。<br><br>一句话记住方向：<b>Kd 越小结合越紧</b>，因为它是「拆开」的常数。'}
]},
 {g:'结构通向功能的那座桥 · 协同性', gn:'⚠ <b>2026-09-23 补的一组。她说：「我老板还说我一定会被问到蛋白质相关」。</b>这张卡原来把<b>结构</b>讲透了，但 <b>#29 是「蛋白质的结构与<u>功能</u>」</b>，而 <code>cooperativ</code> 和 <code>sigmoid</code> 在这张卡上原本 <b>0 命中</b>。<b>从四级结构走到功能的那一步就是协同性</b> —— 接在速背 08 后面说。书上可核的在 <span class="pg">p063</span>，血红蛋白那一半标 general。', items:[
{r:'高', q:'What is cooperativity?',
    ez:'“Cooperativity means one binding event changes the affinity for the next. The textbook defines both directions. Positive cooperativity is the usual one. The first substrate bound raises the affinity for further molecules. Negative cooperativity is the opposite. The first one bound lowers the affinity for the rest. The consequence is a shape. The dependence of rate on substrate concentration is not hyperbolic. It is sigmoid. That S shape is the visible sign of cooperativity.”',
    ezcn:'<b>协同性 ＝ 结合一个分子之后，对下一个分子的亲和力发生了改变。</b><b>书把两个方向都定义了：<b>正协同</b>——第一个结合上的底物<b>提高</b>酶对后续分子的亲和力；<b>负协同</b>——第一个结合上的底物<b>降低</b>对其余分子的亲和力。</b>⚠ <b>后果是一个形状：速率对底物浓度的依赖<b>不是双曲线，而是 S 形</b>——那条 S 形曲线就是协同性看得见的标志。</b>',
 en:'“Cooperativity means that one binding event changes the affinity for the next one. The textbook defines both directions. Positive cooperativity is the usual case, where the first substrate bound raises the enzyme’s affinity for further molecules. Negative cooperativity is the opposite, where the first one bound lowers the affinity for the rest. The consequence is a shape. The dependence of the reaction rate on substrate concentration is not hyperbolic but sigmoid, and that S shape is the visible sign of cooperativity.”',
 cn:'<span class="pg">p063</span> §3.7，书的原话，图 3.7 画的就是变构酶的动力学行为（1 抑制、2 激活）。⚠ <b>这一节属于「书里没有题的七块」，原来只按「眼熟」处理</b>；2026-09-23 因为她老板说「一定会被问到蛋白质」而提上来。<b>接口</b>：卡 <b>32</b> 的「变构一词从哪来」（Monod、Wyman、Changeux 1965）是这一条的历史版。'},
{r:'高', q:'Why does cooperativity need quaternary structure?',
    ez:'“One chain has one binding site. One site cannot influence a second site. There is no second site on it. So a single chain gives a hyperbola. Several chains give several sites. Now one site can influence another. The influence travels through the interfaces between subunits. So it travels through the quaternary structure. That is why the textbook says one thing about allosteric enzymes. They are usually built of subunits. So the S shaped curve is a property of the assembly. It is not a property of any one chain.”',
    ezcn:'<b>一条链只有一个结合位点，而一个位点影响不了第二个位点——它身上没有第二个位点。所以单条链给出的是双曲线。</b><b>几条链就有几个位点，这时一个位点才可能影响另一个；而影响是<b>通过亚基之间的界面</b>传过去的，也就是通过<b>四级结构</b>。</b>⚠ <b>这正是书那句话的理由：<b>变构酶通常由亚基组成</b>。</b>⚠ <b>所以 S 形曲线是「这一整套组装体」的性质，不是任何单独一条链的性质</b>——跟这张卡速背 08 说四级结构时那句「它在任何一条链上都不存在」是同一句话。',
 en:'“One chain has one binding site, and one site cannot influence a second site because there is no second site on it, so a single chain gives a hyperbola. Several chains give several sites, and now one site can influence another. That influence travels through the interfaces between the subunits, which means it travels through the quaternary structure. This is exactly why the textbook says that allosteric enzymes are usually built of subunits. So the sigmoid curve is a property of the assembly and not of any single chain.”',
 cn:'<span class="pg">p063</span> 那一句「变构酶通常由亚基组成」是书上的；<b>「为什么一条链做不到」这一步是推理，说的时候可以直接讲，因为它是从书那句话推出来的</b>。⚠ <b>这一条是这张卡最划算的一条接口</b>：速背 08 讲四级结构时已经说过「这个性质在任何一条链上都不存在」——<b>协同性就是那句话最有名的例子</b>。'},
{r:'高', q:'Give me the classic example of cooperativity.',
    ez:'“The classic pair is myoglobin and haemoglobin. Myoglobin is one chain with one heme. Its oxygen binding curve is a hyperbola. Haemoglobin has four chains. They are two alpha and two beta. Its oxygen binding curve is sigmoid. Binding the first oxygen makes the next ones easier. That is positive cooperativity. The reason it matters is physiological. Haemoglobin has to load oxygen in the lung. It also has to unload it in the tissue. A hyperbola cannot do both well. A sigmoid curve can. Generally this is outside the textbook.”',
    ezcn:'<b>经典的一对是<b>肌红蛋白</b>和<b>血红蛋白</b>。</b><b>肌红蛋白是一条链、一个血红素，氧结合曲线是<b>双曲线</b>；血红蛋白有四条链（两 α 两 β），氧结合曲线是 <b>S 形</b>——结合第一个氧之后，后面几个变得更容易，这就是正协同。</b>⚠ <b>为什么这件事要紧，理由是生理上的：血红蛋白既要在肺里<b>装上</b>氧，又要在组织里<b>卸下</b>氧。双曲线两头都做不好，S 形曲线能。</b>⚠ <b>这一条整条标 general</b>——捷克书里有肌红蛋白和血红蛋白，但没有这条氧结合曲线的对比。',
 en:'“The classic pair is myoglobin and haemoglobin. Myoglobin is a single chain with one heme, and its oxygen binding curve is a hyperbola. Haemoglobin has four chains, two alpha and two beta, and its oxygen binding curve is sigmoid, because binding the first oxygen makes the next ones easier. That is positive cooperativity. The reason it matters is physiological. Haemoglobin has to load oxygen in the lung and unload it in the tissue, and a hyperbola cannot do both well while a sigmoid curve can. Generally this comparison is outside this textbook, which uses both proteins only as structural examples.”',
 cn:'⚠ <b>整条 general</b>：书里肌红蛋白出现在 3 页、血红蛋白 7 页，但<b>都是当结构的例子用的</b>，没有氧结合曲线的对比。<b>接口</b>：这张卡速背 07 的三级结构例子就是<b>肌红蛋白</b>，速背 08 的四级结构例子就是<b>血红蛋白</b> —— <b>说完结构直接接这一条，是从「结构」走到「功能」最短的一步</b>。'},
{r:'高', q:'What does the Hill coefficient tell you?',
    ez:'“The Hill coefficient is a number. It measures cooperativity. It comes from the slope of the binding curve. A value of one means no cooperativity. The curve is then a hyperbola. A value above one means positive cooperativity. A value below one means negative cooperativity. For haemoglobin the value is about two point eight. Haemoglobin has four binding sites. So the number is not a count of sites. It measures how strongly the sites influence each other.”',
    ezcn:'<b>Hill 系数是一个数，它量的是协同性的强弱</b>，来自结合曲线的斜率。<b>等于 1 ＝ 没有协同性</b>，曲线是双曲线；<b>大于 1 ＝ 正协同</b>；<b>小于 1 ＝ 负协同</b>。⚠ <b>血红蛋白的值约 2.8，而它有四个结合位点</b> —— <b>所以这个数不是「几个位点」，而是「这四个位点互相影响得有多强」</b>。',
 en:'“The Hill coefficient is a number that measures cooperativity, taken from the slope of the binding curve. A value of one means no cooperativity and the curve is a hyperbola. A value above one means positive cooperativity, and a value below one means negative cooperativity. For haemoglobin the value is about 2.8, although haemoglobin has four binding sites. So the coefficient is not a count of sites. It is a measure of how strongly the sites influence one another. Generally this is outside this textbook.”',
 cn:'⚠ <b>整条 general</b> —— 捷克书里没有 Hill 系数。<br><br>⚠ <b>别被这套卡上的「Hill」骗了</b>：整套卡里 <code>Hill</code> 出现 25 次，<b>全都不是这个 Hill</b> —— 是光合的 <b>Hill 反应</b>（离体叶绿体加人工电子受体照样放氧）、lac 操纵子的 <b>Müller-Hill</b>、还有出版社 <b>McGraw-Hill</b>。<b>考官说 Hill coefficient 的时候说的是这一条。</b><br><br><b>接口</b>：S 形曲线本身在上一条；为什么需要四级结构在上上条。'},
{r:'高', q:'What is the Bohr effect?',
    ez:'“The Bohr effect is a change in oxygen affinity. Protons and carbon dioxide cause it. A lower p H lowers the affinity of haemoglobin for oxygen. More carbon dioxide does the same. So haemoglobin releases more oxygen in an active tissue. An active tissue is acidic. It also makes carbon dioxide. In the lung the p H is higher. There haemoglobin binds oxygen again. The effect couples oxygen delivery to demand.”',
    ezcn:'<b>Bohr 效应 ＝ 质子和二氧化碳引起的氧亲和力改变。</b><b>pH 降低、或二氧化碳升高，血红蛋白对氧的亲和力就下降</b>，于是它在组织里<b>放掉更多氧</b>。⚠ <b>妙就妙在这是自动对准的</b>：正在剧烈代谢的组织<b>又酸又在产二氧化碳</b>，所以<b>最需要氧的地方恰好就是氧被卸下来的地方</b>；到了肺里 pH 高、二氧化碳低，血红蛋白又把氧装上。',
 en:'“The Bohr effect is the change in the oxygen affinity of haemoglobin caused by protons and carbon dioxide. A lower pH, or a higher carbon dioxide concentration, lowers the affinity, so haemoglobin releases more oxygen. An actively respiring tissue is acidic and produces carbon dioxide, so exactly the tissue that needs oxygen is the one that gets it. In the lung the pH is higher and the carbon dioxide is lower, so haemoglobin loads oxygen again. The effect couples oxygen delivery to demand. Generally this is outside this textbook.”',
 cn:'⚠ <b>整条 general</b>。<br><br><b>为什么值得记住这一条</b>：它是「<b>结构通向功能</b>」这座桥上最漂亮的一块 —— <b>一个纯化学的效应（质子浓度）直接变成一个生理上的调度</b>。<b>接口</b>：pH 和缓冲在卡 <b>x-ph</b>；二氧化碳在血里怎么运输是这一条的自然延伸，书没写，被追问就说 general。'},
{r:'中', q:'What does 2,3-bisphosphoglycerate do to haemoglobin?',
    ez:'“Two three bisphosphoglycerate is a small molecule in red blood cells. It binds in the central cavity of haemoglobin. It binds the deoxygenated form. So it holds haemoglobin in the low affinity state. So more oxygen is released in the tissue. Its level rises at high altitude. Its level also rises in anaemia. Foetal haemoglobin binds it weakly. So a foetus can take oxygen from the mother.”',
    ezcn:'<b>2,3-二磷酸甘油酸是红细胞里的一个小分子</b>，它结合在<b>血红蛋白四条链中间的那个腔</b>里，<b>而且只结合脱氧的那种构象</b> —— 所以它<b>把血红蛋白按在低亲和力状态上</b>，结果是<b>在组织里放掉更多氧</b>。⚠ <b>高原和贫血时它的浓度会升高</b>（这是身体的一种代偿）；⚠ <b>胎儿血红蛋白跟它结合得弱，所以胎儿能从母亲那里把氧抢过来</b>。',
 en:'“2,3-bisphosphoglycerate is a small molecule present in red blood cells. It binds in the central cavity between the four chains of haemoglobin, and it binds the deoxygenated conformation rather than the oxygenated one. So it holds haemoglobin in the low-affinity state and more oxygen is released in the tissue. Its concentration rises at high altitude and in anaemia, which is a compensation. Foetal haemoglobin binds it weakly, and that is why a foetus can take oxygen from the mother. Generally this is outside this textbook.”',
 cn:'⚠ <b>整条 general</b>。<br><br>⚠ <b>这一条把两张卡缝起来</b>：<b>2,3-BPG 在卡 gly 上出现 30 次，但全都是糖酵解的中间物</b>（1,3-BPG 到 3-PG 那一步旁边的支路），<b>整套卡上从来没有人说过它对血红蛋白干了什么</b>。考官从糖酵解走到血红蛋白，走的就是这一步。<br><br><b>接口</b>：糖酵解第 6–7 步在卡 <b>gly</b>；低亲和力状态就是 T 态，在协同模型那一条。'},
{r:'中', q:'Why is carbon monoxide poisonous?',
    ez:'“Carbon monoxide binds the same iron as oxygen. It binds about two hundred times more tightly. So it blocks the site. But a blocked subunit still talks to the others. It holds them in the high affinity state. So the oxygen that is carried is not released. The damage is therefore double. Less oxygen is carried. And what is carried is not given up. Carbon monoxide also blocks Complex four in the respiratory chain.”',
    ezcn:'<b>一氧化碳结合的是血红素上同一个铁，而且结合得牢大约两百倍</b>，所以它<b>把位点占住了</b>。⚠ <b>真正致命的是第二层</b>：<b>被占住的那个亚基照样会影响其余三个，把它们按在高亲和力状态上</b> —— <b>于是还能运走的那点氧，到了组织里也不肯放</b>。<b>所以伤害是双份的：运得少，而且运到了也不给。</b>⚠ <b>另外一氧化碳还在呼吸链上堵复合物 IV</b>（那一条在卡 25）。',
 en:'“Carbon monoxide binds the same heme iron as oxygen, and it binds roughly two hundred times more tightly, so it blocks the site. The more dangerous part is the second one. A blocked subunit still communicates with the other three and holds them in the high-affinity state, so the oxygen that is still carried is not released in the tissue. The damage is therefore double. Less oxygen is carried, and what is carried is not given up. Carbon monoxide also blocks Complex IV of the respiratory chain. Generally this is outside this textbook.”',
 cn:'⚠ <b>整条 general</b>。<br><br>⚠ <b>这一条也是一座桥</b>：<b>CO 在整套卡上只出现过 2 次，都在卡 25 当复合物 IV 的抑制剂</b>（跟氰化物并列），<b>从来没有接到血红蛋白上</b>。而考官问「一氧化碳为什么有毒」的时候，<b>两个答案都对，能一口气给出两个才是满分</b>。<br><br><b>接口</b>：呼吸链抑制剂在卡 <b>25</b>；协同性为什么会「把其余亚基按住」在本组第二条。'},
 ]},
 {g:'⚠ 血红蛋白之后他最可能问的那一步 · 血红素的降解', gn:'⚠ <b>2026-09-23 补的。她说：「我还是害怕有东西重点问我然后我回答不了，目前我能想到个血红蛋白」。</b>查过之后发现：<b>血红素的降解在全套卡上 0 命中</b>（`bilirubin` 只出现在卡 27，那是叶绿素卟啉的上下文），<b>而书 <span class="pg">p147</span> 把它写得很完整</b> —— 这正是「血红蛋白」最自然的下一问。两条全部有书页可核。', items:[
{r:'高', q:'What happens to haemoglobin when a red cell breaks down?',
    ez:'“The heme is degraded. Most of it comes from haemoglobin of broken erythrocytes. The products are bilin derivatives. They leave the body as bile pigments. Those pigments are linear tetrapyrroles. The two named ones are bilirubin and biliverdin. The reaction sequence has three parts. A methine bridge is oxidised. The iron atom is released. The porphyrin ring is opened. So a ring becomes a chain. Further reduction of bilirubin gives stercobilin. That one and urobilin colour urine and stool. The colour runs from yellow to brown.”',
    ezcn:'<b>血红素被降解掉，而其中大部分来自破碎红细胞里的血红蛋白。</b><b>产物是<b>胆色素衍生物（biliny）</b>，作为<b>胆汁色素</b>排出体外；它们是<b>线性四吡咯</b>，书点名的两个是 <b>bilirubin（胆红素）</b>和 <b>biliverdin（胆绿素）</b>。</b>⚠ <b>反应顺序三件事：<b>氧化甲炔桥 · 放出铁原子 · 打开卟啉环</b> —— 一句话说完就是「一个环被打成一条链」。</b><b>胆红素再还原生成 <b>sterkobilin</b>，它和 <b>urobilin</b> 一起把尿和粪染成黄到棕色。</b><b>书还说：化学上其余的卟啉衍生物也照同样的方式降解。</b>',
 en:'“The heme is degraded, and most of it comes from the haemoglobin of broken-down erythrocytes. The products are bilin derivatives, which leave the body as bile pigments, and those are linear tetrapyrroles, the two named ones being bilirubin and biliverdin. The reaction sequence has three parts. A methine bridge is oxidised, the iron atom is released, and the porphyrin ring is opened, so a ring becomes a chain. Further reduction of bilirubin gives stercobilin, and that together with urobilin colours urine and stool yellow to brown. The textbook adds that chemically the other porphyrin derivatives are degraded in the same way.”',
 cn:'<span class="pg">p147</span> §6.3「卟啉的降解」，全部是书上的。⚠ <b>2026-09-23 之前这一段在全套卡上 0 命中</b>——而她自己指出「我能想到个血红蛋白」，这就是那一问。<b>接口</b>：卡 <b>27</b> 有卟啉和叶绿素（同一族分子）；<b>「放出铁原子」</b>接卡 <b>31</b> 的铁。⚠ <b>黄疸不要主动往临床走</b>，书没写，说到「色素进血、尿和粪被染色」就停。'},
{r:'中', q:'Where does heme come from in the first place?',
    ez:'“It is built from two small molecules. They are glycine and succinyl coenzyme A. Together they give delta aminolevulate. Two of those condense into porphobilinogen. Four porphobilinogens build the porphyrin ring. Analogous routes lead to other molecules. Those are the cytochromes, the oxidases, the oxygenases and chlorophyll. So one route serves a whole family. The two starting molecules are worth noticing. Glycine is the smallest amino acid. Succinyl coenzyme A comes out of the citric acid cycle.”',
    ezcn:'<b>血红素是从两个小分子造起来的：<b>甘氨酸</b> ＋ <b>琥珀酰辅酶 A</b> → <b>δ-氨基乙酰丙酸</b>；两个 δ-氨基乙酰丙酸缩合成<b>胆色素原（porfobilinogen）</b>，四个胆色素原再搭出卟啉环。</b>⚠ <b>书明说：同样的路线还通向<b>细胞色素、氧化酶、加氧酶和叶绿素</b> —— 一条路服务一整族分子。</b>⚠ <b>两个起始分子值得单独点一句</b>：<b>甘氨酸是最小的氨基酸</b>（接卡 aa），<b>琥珀酰辅酶 A 直接出自柠檬酸循环</b>（接卡 24）——这是蛋白质、代谢、血红蛋白三块真正咬合的地方。',
 en:'“It is built from two small molecules, glycine and succinyl-CoA, which together give delta-aminolevulate. Two of those condense into porphobilinogen, and four porphobilinogens build the porphyrin ring. The textbook says that analogous routes lead to the cytochromes, the oxidases, the oxygenases and chlorophyll, so one route serves a whole family of molecules. The two starting molecules are worth pointing out. Glycine is the smallest amino acid, and succinyl-CoA comes straight out of the citric acid cycle.”',
 cn:'<span class="pg">p147</span> 同一页，合成那一半。⚠ <b>这一条是三张卡的交点</b>：<b>aa</b>（甘氨酸）· <b>24</b>（琥珀酰辅酶 A）· 本卡（血红蛋白）。被问「甘氨酸有什么用」或「琥珀酰辅酶 A 除了循环还干什么」，答这一条。'},
 ]},
 {g:'⚠ 开场白 · 「什么是生物化学」（不属于任何一道题）', gn:'⚠ <b>2026-09-23 补的。`STATUS.md` 早就记着：书 <span class="pg">p008–p020</span> 那 13 页「什么是生物化学」<b>真空着</b>，而<b>这是典型的开场白问题</b> —— 它不属于三十道题里的任何一道，所以谁也没做它。</b>⚠ <b>放在卡 01 上只是因为这是她最先看见的一张，不是因为它属于这道题。</b>两条都有书页可核。', items:[
{r:'高', q:'What is biochemistry?',
    ez:'“The textbook starts from chemistry. Chemistry is the science of qualitative changes of substances. So biochemistry studies those changes in living matter. The book then gives a fuller definition. It is the study of the substances that occur in organisms. It is the study of how those substances enter or are formed. It is the study of how they react with each other and with the surroundings. And it is the study of the methods that identify and measure them. So biochemistry sits in two families at once. It is a biological science because it studies living nature. It is a chemical one because it studies chemical change.”',
    ezcn:'<b>书是从化学出发定义它的：化学是研究物质<b>质的变化</b>的科学，那么<b>生物化学就是研究这些变化在活物质中如何进行</b>的学科。</b><b>书随后给了一个完整版的定义：<b>研究生物体内出现的物质 · 这些物质如何进入或在体内形成 · 它们如何彼此反应以及与环境反应 · 以及用来识别、表征和测定它们的方法</b>。</b>⚠ <b>所以生物化学同时属于两个家族：它研究活的自然，所以是<b>生物学科</b>；它研究化学变化，所以是<b>化学学科</b>。</b><b>两个「父母」：化学那边是<b>有机化学</b>，生物那边是<b>生理学</b>——所以早期它也被叫作「生理化学」。</b>',
 en:'“The textbook starts from chemistry. If chemistry is the science of the qualitative changes of substances, then the natural way to define biochemistry is as the discipline that studies such changes as they take place in living matter. The book then gives a fuller definition. It is the study of the substances occurring in organisms. It is the study of the processes by which those substances enter organisms or are formed in them. It is the study of the ways they react with each other and with the surroundings. And it is the study of the methods by which those substances and processes are identified, characterised and measured. So biochemistry belongs to two families at once. It is a biological science because it studies living nature, and a chemical one because it deals with chemical change. Its two parents are organic chemistry on the chemical side and physiology on the biological side, which is why it was at first also called physiological chemistry.”',
 cn:'<span class="pg">p008</span> §1.1，书自己的定义，逐句可核。⚠ <b>这一条不属于三十道题里的任何一道</b>，它是开场白。<b>历史那一句也在同一页</b>：生物化学直到 <b>19 世纪最后四分之一</b>才成为独立学科，是「大」化学学科里最后出现的一个，因为它得等分析方法先成熟（书举的例子是 <b>1883 年 Kjeldahl 测氮法</b>）；<b>1906 年</b>第一本名字里带「生物化学」的期刊 <i>Biochemische Zeitschrift</i> 创刊。'},
{r:'中', q:'What tells living matter apart from non-living matter, chemically?',
    ez:'“The textbook answers with carbon. In non-living nature carbon is mostly oxidised. It sits in carbonates or in carbon dioxide. In living matter carbon is formally reduced. It carries hydrogen and it is rich in energy. You can get that energy out by burning it in air. The products are water and carbon dioxide. That energy richness matters for life. So does the structural variety of those compounds. A second feature is chirality. The carbon compounds in living matter are chiral. The elements themselves are sorted by amount. The macrobiogenic ones are hydrogen, oxygen, carbon, nitrogen and phosphorus.”',
    ezcn:'⚠ <b>书的答案是<b>碳的氧化态</b>：非生命界里碳大多是<b>氧化</b>的（碳酸盐、CO₂），而活物质的特征是碳<b>形式上被还原</b>、带着氢、<b>富含能量</b>——把它在空气里烧掉生成水和 CO₂，这份能量就出来了。</b><b>这种「有机化合物的能量富集」，连同它们的<b>结构多样性</b>，对生命有根本意义。</b><b>第二个显著特征是<b>手性</b>。</b><b>元素按含量分四档：<b>大量生源元素</b> H O C N P（各约 1% 以上）· <b>寡生源元素</b> Ca Mg S Na K Fe Cl（0.05–1%）· <b>微量生源元素</b> Cu Zn Co Mn I Mo · <b>可变／痕量元素</b> B Si V Br Li As Se Ti Al。</b>',
 en:'“The textbook answers with carbon. In non-living nature carbon is mostly oxidised, sitting in carbonates or in carbon dioxide. In living matter carbon is formally reduced, carries hydrogen and is rich in energy. That energy can be released simply by burning it in air to water and carbon dioxide. That energy richness of organic compounds, together with their structural variety, is of fundamental importance for life. A second striking feature of the carbon compounds in living matter is their chirality. The elements themselves are traditionally sorted by how much of them there is. The macrobiogenic ones are hydrogen, oxygen, carbon, nitrogen and phosphorus, at about one per cent by mass and above. Then come the oligobiogenic ones, calcium, magnesium, sulfur, sodium, potassium, iron and chlorine, and the microbiogenic ones, copper, zinc, cobalt, manganese, iodine and molybdenum.”',
 cn:'<span class="pg">p011</span>，四档分类和碳那一段都是书上的。⚠ <b>「活的与非活的」那一节（<span class="pg">p010</span> §1.2）还给了两个很好用的边界例子</b>：<b>病毒</b>（生命表现非常有限，结构上接近晶体）和<b>地球本身</b>（Gaia 假说把它整体看作一个活的「超级有机体」）——被问「怎么定义活的」时，<b>先说「这个界线并不像看上去那么清楚」，再给这两个例子</b>。<b>接口</b>：手性接卡 <b>aa</b>（D/L）和卡 <b>06</b>；铁接卡 <b>31</b>。'},
 ]}
]
});
