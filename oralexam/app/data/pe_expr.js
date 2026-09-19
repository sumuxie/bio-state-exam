/* 横向卡 · 第二科（Protein Engineering & Synthetic Biology）第一张
   在细菌里表达一个重组蛋白 —— 从载体里的基因到管子里的蛋白。
   出处不是捷克生化书，是她自己的课堂笔记 pesbexplain/data/ch2.js，
   节点 2-4、2-5、2-6、2-7、2-8、2-9、2-10、2-11、2-12、2-13、2-14、2-26、2-28。
   那个文件自己区分两层：points = 幻灯片上有的；beyondPoints = 讲义没放的延伸。
   卡上凡是来自 beyondPoints 或通用知识的，都标了「讲义没讲」或「通用」。
   接卡 14（转化和电穿孔）、12（lac 操纵子，IPTG 在模仿什么）、01（折叠与变性）、
   x-bonds（二硫键）、13（糖基化）、x-mem（区室，为什么还原性胞质要紧）。 */

window.CARDS.push({
id:'pe-expr', cross:1, w:0,
q:'在细菌里表达一个重组蛋白 —— 从载体里的基因到管子里的蛋白',
qcn:'横向卡 · 第二科第一张 · 一个麻烦换三个地方：蛋白被造出来比细胞折得快',
sub:'跨题共用 · 出处是她自己的 PESB 课堂笔记 · 接卡 14、12、01、13、x-bonds、x-mem',

cram:[
 {g:'开口 · 这张卡的骨架', gn:'这一科的第一张卡。<b>先把「这是一件什么工作」说清楚</b>，再给那条把所有技巧串起来的判据。'},
 {n:'01', t:'这是一件什么工作',
  big:'从<b>载体里的一个基因</b>，到<b>管子里的蛋白</b>。中间是<b>三幕</b>：诱导前选开关 · 诱导后一场赛跑 · 最后把它捞出来',
  en:'“Expressing a recombinant protein in bacteria means three things. A gene the bacterium does not own goes into a plasmid. The plasmid goes into the cell. The cell is then made to read it on command. Recombinant means the DNA was joined together outside the organism. Heterologous means the gene comes from a different species.”',
  note:'<b>先给定义，再给形状</b>。这两个词是承重的：不交代 recombinant 和 heterologous，后面「为什么真核蛋白会出问题」就没有立足点。<br><b>DNA 怎么进细胞那一步交回卡 14</b>——transformation、electroporation、transduction、transfection 四个词的区别在那张卡上，这里只给「什么时候非用电转不可」。'},
 {n:'02', t:'整张卡的脊梁',
  big:'表达里几乎每一个麻烦，都是<b>同一个麻烦换了个地方</b>：蛋白被造出来的速度，<b>快过细胞折叠它的速度</b>',
  en:'“Almost every problem in bacterial expression is one problem in a different place. The protein is being made faster than the cell can fold it. Folding is intramolecular, so one chain collapses on itself. Aggregation is intermolecular, so several chains have to meet. The rate of aggregation therefore rises with concentration far more steeply than the rate of folding does.”',
  note:'有了这一句，二十个小技巧就压成<b>三族</b>：<b>放慢合成 · 提高折叠能力 · 换个地方折</b>。<br>降温和减 IPTG 是<b>减少供给</b>；融合标签和共表达伴侣蛋白是<b>提高处理能力</b>；周质、氧化性胞质、柱上复性是<b>换地方</b>。<br>⚠ <b>幻灯片上没有这句话</b>。它是笔记「beyond the slides」那一层从节点 2-11 和 2-12 抽出来的说法。说的时候别说「老师讲过」，说「这是我自己把它们串起来的方式」。',
  warn:'<b>别把它当万能钥匙。</b>有两件事不归这条管：① <b>启动子渗漏把细胞毒死</b>——那发生在诱导之前，跟折叠速度无关；② <b>共转两个复制起点相同的质粒</b>——那是遗传学，不是折叠。被追问时主动把这两条划出去，比被他挑出来好。'},

 {g:'第一幕 · 诱导前，开关有两个轴', gn:'这一幕全部的内容是<b>选</b>：选启动子、选菌株、选怎么诱导。<b>启动子那一格是这一幕的骨架句。</b>'},
 {n:'03', t:'启动子的两个轴',
  big:'<b>强度</b>和<b>紧密性</b>是<b>两个独立的性质</b>，而且通常互相冲突。T7 最强，araBAD 最紧，lac 最漏',
  en:'“A promoter has two independent properties. Strength is how much you express after induction, and T7 wins that outright. Tightness is how little leaks before induction, and there araBAD wins while lac is the leakiest. These two usually conflict. Which one matters is decided by the protein, not by the promoter.”',
  note:'天然的三个：<b>lac</b>（LacI 阻遏，IPTG 或别乳糖诱导，中等强度，有渗漏）、<b>trp</b>（色氨酸阻遏，紧）、<b>araBAD</b>（阿拉伯糖诱导，非常紧，而且是渐变响应）。<br>合成的两类：<b>tac 和 trc</b>（trp 与 lac 的杂合体，比天然 lac 强，用在 pGEX、pMAL、pTRC 上）、<b>T7</b>（非常强，但要宿主供应 T7 RNA 聚合酶，这就是 pET 系统）。<span class="pg">L3 s.11</span><br>⚠ 幻灯片说的是「在表达强度和调控之间权衡」。<b>把它拆成两个独立的轴，是笔记的延伸，不是幻灯片的原话。</b>',
  tbl:{head:['启动子','诱导剂','强度','紧密性'], rows:[['lac','IPTG / 别乳糖','中','最漏'],['trp','吲哚丙烯酸 / 缺色氨酸','中','紧'],['araBAD','阿拉伯糖','中','最紧 · 渐变'],['tac / trc','IPTG','比 lac 强','中'],['T7','IPTG（经 lacUV5）','最强','漏']]}},
 {n:'04', t:'T7 是两级串联',
  big:'LacI 管的不是你的基因，是<b>「造不造 T7 聚合酶」这个开关</b>。两级串联，所以<b>又强又漏</b>',
  en:'“The T7 system has two layers. The host is a DE3 strain, a lambda lysogen carrying the T7 RNA polymerase gene under a lacUV5 promoter. The plasmid carries my gene under a T7 promoter with LacI repression. I add IPTG, the polymerase gets made, and the polymerase then transcribes my gene. So LacI controls the polymerase switch rather than my gene directly.”',
  note:'多这一级是为了买两样东西。<b>正交性</b>：T7 聚合酶只读 T7 启动子，而大肠杆菌自己的 RNA 聚合酶完全读不了 T7 启动子，所以这个酶的全部产出都对准你的基因。<b>放大</b>：T7 聚合酶约比宿主的酶<b>快 8 倍</b>，加上专用启动子，产物可以到细胞总蛋白的 <b>50%</b>。<span class="pg">L3 s.11–14</span><br>代价就是漏：<b>两级的系统，聚合酶的基础表达会被同一套机器放大。</b>所以才有 <b>pLysS / pLysE</b>——它们编码 T7 溶菌酶，是 T7 聚合酶的天然抑制剂。<br>⚠ 正交性、放大、8 倍、50% 这几条<b>在 beyondPoints 里</b>，不在幻灯片上。<b>lac 逻辑本身接卡 12。</b>'},
 {n:'05', t:'⚠ 陷阱 · 菌株里没有那个盒子，质粒什么都不出',
  big:'pET 质粒放进<b>没有 DE3 的菌株</b>，加多少 IPTG 都是零。<b>因为宿主根本不会造 T7 聚合酶</b>',
  en:'“A T7 plasmid only works in a host that supplies T7 RNA polymerase. The DE3 in a strain name is exactly that cassette, a lambda prophage carrying the polymerase gene under lacUV5. Put a pET plasmid into a strain without it and nothing is expressed at all. The plasmid is fine, the induction is fine, and the gel is empty.”',
  note:'<b>这是这张卡上最便宜的失分点</b>：知道 T7 很强、知道 pET、但没把「(DE3) 是什么意思」说出来。<span class="pg">L3 s.11–14</span><br>他的追问几乎一定是「那 DE3 三个字母到底指什么」。答：<b>λ 噬菌体的溶原状态，整合进基因组的那段原噬菌体里带着 T7 RNA 聚合酶基因，置于 lacUV5 启动子之下。</b><br>⚠ 「克隆用的菌株通常也没有 DE3，所以质粒要先在克隆株里扩，再转进表达株」这一句<b>是通用知识</b>，笔记里没有。要说就带 generally。'},
 {n:'06', t:'IPTG 为什么必须不可水解',
  big:'不是因为它更强，是因为它<b>不被代谢</b>——<b>浓度恒定，诱导强度才不漂移</b>',
  en:'“The natural inducer is allolactose, formed by spontaneous isomerisation of lactose, and it inactivates the LacI repressor allosterically. In practice we use IPTG, a non-hydrolysable lactose analogue, at fifty micromolar to one millimolar. The point of non-hydrolysability is stability. IPTG is not metabolised, so its concentration stays constant and the induction strength does not drift. Lactose would be consumed by beta-galactosidase and the induction would fade with it.”',
  note:'<span class="pg">L3 s.15</span>。<b>这条问出来的概率很高，因为它是「为什么用类似物」的标准答案。</b><br>⚠ 「不可水解是因为糖苷键上的氧换成了硫，β-半乳糖苷酶切不动」——<b>这半句是通用知识，笔记里只说了 non-hydrolysable，没说为什么</b>。要说就明说这是通用化学，不是课上讲的。<br><b>LacI、别乳糖、变构失活这三件事接卡 12。</b>'},
 {n:'07', t:'自诱导培养基自己诱导自己',
  big:'四样东西：<b>磷酸缓冲 · 葡萄糖 · 甘油 · 乳糖</b>。机制就是<b>分解代谢物阻遏替你移液</b>',
  en:'“An autoinduction medium is a complex base plus four things. Phosphate buffer holds the pH through a long unattended incubation. Glucose is consumed first and represses the lac operon, so the cells simply grow. Glycerol is a non-repressing carbon source, so growth continues after the glucose is gone. Lactose sits unused until the glucose runs out, and then it induces.”',
  note:'<b>关键的一句</b>：葡萄糖耗尽的时刻通常落在<b>对数期中后期</b>，恰好就是你本来会亲手加 IPTG 的那一刻。所以培养物在正确的密度上自己开启，过夜，没人看着。<span class="pg">L3 s.15</span><br>⚠ <b>不要给 OD 数字。</b>笔记定义这个时刻用的是<b>生长时期</b>，不是一个数。他要数就给判据：「葡萄糖耗尽的那一刻」，再补一句这正是手动诱导要挑的时刻。<br><b>分解代谢物阻遏的机制在 beyondPoints</b>，幻灯片只列了四种成分。'},
 {n:'08', t:'一个菌株治一个病',
  big:'菌株表<b>要倒着背</b>——他从<b>症状</b>问起，不从菌株名问起',
  en:'“The useful way to hold the strains is from the symptom backwards, because that is how you meet them. Degradation sends you to BL21, which lacks the Lon and OmpT proteases. Truncated product from a eukaryotic gene is codon bias, so Rosetta. Cytoplasmic disulfides need Origami or SHuffle. Insoluble at thirty-seven degrees means lower the temperature, or ArcticExpress. All-or-none induction means Tuner.”',
  note:'<span class="pg">L3 s.10</span>。<b>Lon 正是专门降解异常和未折叠蛋白的胞质蛋白酶</b>——也就是最会攻击一个过表达、部分未折叠的重组产物的那一个。这句话把 BL21 的基因型从「要记的事实」变成「推得出的选择」。<br><b>Tuner 值得单独讲一句</b>：正常菌株里 LacY 主动把 IPTG 泵进来，而输入 IPTG 又会诱导更多 LacY，这是正反馈，结果是全有全无。敲掉 lacY，IPTG 只能被动扩散进来，扩散量正比于外部浓度，<b>每个细胞看到的浓度一样，诱导才真正可调</b>。（这段机制在 beyondPoints。）',
  tbl:{head:['症状','菌株','改了什么'], rows:[['产物被降解','BL21(DE3)','缺 Lon 和 OmpT'],['表达差 · 有截短','Rosetta(DE3)','补稀有密码子的 tRNA'],['需要胞质二硫键','Origami / SHuffle','trxB 和 gor 突变'],['37 度不可溶','ArcticExpress(DE3)','耐冷伴侣蛋白 Cpn10 / Cpn60'],['诱导全有全无','Tuner(DE3)','缺 lacY'],['mRNA 不稳 · 产量低','BL21 Star(DE3)','RNase E 突变']]}},
 {n:'09', t:'什么时候非用电转不可',
  big:'化学转化 <b>10⁶–10⁹ cfu/µg</b>，电转 <b>&gt;10⁹</b>。差别只在<b>三种场合</b>才有意义',
  en:'“There are two methods and they differ by orders of magnitude. Chemical transformation by heat shock gives ten to the six up to ten to the nine colony forming units per microgram, and needs no equipment. Electroporation exceeds ten to the nine but needs desalted DNA. The difference only matters when the number of successful events is already small.”',
  note:'<b>三种场合</b>：① 直接转化一个<b>连接产物</b>，因为连接效率本来就低；② <b>大载体</b>，化学转化的效率在约 <b>10 kb</b> 以上断崖式下降；③ <b>共转两个以上质粒</b>，因为联合概率是各自效率的<b>乘积</b>。<span class="pg">L3 s.10</span><br><b>统一的判据一句话</b>：效率只在「能不能长出菌落」的临界点上才要紧。日常重转一个已有的质粒，化学转化完全够。<br><b>四个词的区别交回卡 14。</b>'},

 {g:'第二幕 · 诱导后，一场赛跑', gn:'这一幕只有一条线：<b>折叠 vs 聚集</b>。下面五点全部挂在点 02 上。'},
 {n:'10', t:'包涵体不是失败',
  big:'它是<b>胞质里错误折叠的重组蛋白的聚集体</b>。幻灯片自己写的：<b>不是失败</b>',
  en:'“Inclusion bodies are aggregates of misfolded recombinant protein in the cytoplasm, seen as dense white material in the pellet after lysis. They form when overproduction overwhelms the folding machinery, or when the protein aggregates through its own hydrophobic surfaces. The lecture insists they are not a failure. They can be high purity and stable starting material for refolding into active protein.”',
  note:'<b>三条好处，一条一条给</b>：① 聚集态的蛋白<b>没有活性</b>，所以抗菌肽、DNA 酶、蛋白酶这些本来会杀死宿主的产物做得出来；② 纯化变成<b>打碎、离心、留沉淀</b>，第一步基本免费；③ 之后可以在<b>变性条件</b>下纯化（例如 6 M 盐酸胍里跑 Ni-NTA），带过去的杂蛋白更少。<span class="pg">L3 s.16–18</span>',
  warn:'⚠ <b>但要主动把幻灯片没说的那一半补上，否则他一挑就破：</b>三条好处讲的全是「怎么把蛋白弄出来」，<b>没有一条解决「怎么让它重新折好」</b>，而复性的得率通常只有 <b>1–5%</b>。<br><b>所以准确的说法是：包涵体是纯化上的好消息、产量上的坏消息。</b>这也正是后面那些「一开始就避免包涵体」的手段存在的原因。（这条修正在 beyondPoints。）'},
 {n:'11', t:'五个手段，一个机制',
  big:'幻灯片的原话是<b>调整表达条件，不要放弃这个构建体</b>。五个手段分成两族：<b>减少供给</b> / <b>提高处理能力</b>',
  en:'“There are five levers. Lower the temperature, from thirty-seven degrees for four hours to thirty for four hours, or sixteen overnight, or twelve overnight in ArcticExpress cells. Lower the IPTG, between fifty micromolar and one millimolar. Add a folding-promoting fusion. Co-express chaperones. Change the expression system, but only as a last resort.”',
  note:'融合伴侣：<b>thioredoxin、MBP、HALO 标签</b>。伴侣蛋白：<b>DnaK/DnaJ/GrpE</b> 和 <b>GroEL/GroES</b>。<span class="pg">L3 s.21–22</span><br><b>为什么融合标签有用</b>：MBP 和 thioredoxin 本身极易溶、折叠很快，<b>融在 N 端就最先从核糖体出来、最先折好</b>，充当一个局部的成核点，把整个融合蛋白拉在可溶的那一边。<b>放 N 端不是习惯，是机制。</b>（beyondPoints。）<br>⚠ <b>T7 不适合做可调表达</b>，所以「减 IPTG」这一招在 pET 上要配 <b>Tuner</b> 才真的有效——幻灯片自己写了这条注意。'},
 {n:'12', t:'复性是一场关于浓度的架',
  big:'三条路看起来互不相干，其实是<b>同一件事</b>：<b>把有效浓度压低，让折叠赢过聚集</b>',
  en:'“Refolding has five steps. Overexpress, lyse and keep the pellet, solubilise, refold, then characterise. Solubilisation is six molar guanidinium chloride or eight molar urea with ten millimolar DTT at pH eight, ending near one milligram per millilitre. Then one of three routes. Dialysis removes the denaturant slowly but the concentration never changes. Rapid dilution drops it instantly at the cost of huge volumes. On-column refolding holds the molecules apart so they cannot meet at all.”',
  note:'包涵体先用约 <b>1 M 尿素</b>洗一次再离心。透析要压在 <b>0.1–1 mg/mL</b>，而且仍然容易聚集。添加剂：<b>GSH/GSSG 氧化还原对</b>让二硫键反复断开重组直到配对正确；<b>0.5 M 精氨酸</b>是化学伴侣，它不让蛋白解折叠，而是优先抑制聚集中间体之间的接触；甘油、PEG、离子、蔗糖做一般性稳定。<span class="pg">L3 s.19–20</span><br><b>柱上复性是三条里最漂亮的</b>：只有它让聚集在<b>物理上不可能</b>，而不只是不太可能——<b>这也是「一开始就该加 His 标签」的又一个理由</b>。（这句在 beyondPoints。）'},
 {n:'13', t:'二硫键 · 两条路绕开还原性胞质',
  big:'<b>胞质是还原性的，那里形不成二硫键。</b>要么<b>把还原系统敲掉</b>，要么<b>换个房间</b>',
  en:'“Many proteins need disulfide bonds for folding and stability, and the E. coli cytoplasm is reducing, so it will not form them. Two systems actively keep it that way, thioredoxin through trxB and glutathione through gor, and they exist to protect the cell’s own proteins from oxidative damage. So there are two routes. Remove the obstacle with an Origami or SHuffle strain. Or avoid the compartment and send the protein to the periplasm.”',
  note:'周质<b>天然就是氧化性的</b>，靠的是一套专用的 <b>Dsb 系统（DsbA、DsbB、DsbC）</b>，它既催化二硫键形成，也<b>校对错误配对</b>。它存在的原因是细菌自己那些含二硫键的蛋白（外膜蛋白、毒素）本来就在这个区室里折叠。<b>所以走周质是「借用」，不是「骗过」。</b>（Dsb 这段在 beyondPoints。）<br>分泌信号：<b>OmpA、pelB、phoA</b>，N 端一段肽，引导蛋白穿过内膜，随后被切掉。<span class="pg">L3 s.23</span><br><b>账</b>：代价是表达水平和产量都低（区室小、转运能力有限）；换来两样——<b>渗透压休克</b>就能温和释放，不必打碎整个细胞，而且周质里的蛋白种类远少于胞质，<b>纯化的起点干净得多</b>。<br><b>二硫键本身接卡 x-bonds，区室接卡 x-mem，糖基化接卡 13。</b>'},
 {n:'14', t:'⚠ 共表达 · 绝对不能共转同一个复制起点',
  big:'两个复制起点相同的质粒会<b>分家</b>。你以为在共表达，实际上是<b>两群细胞各表达一个</b>',
  en:'“Many proteins fold or function only when their partner is present, so co-expression is often the only route to an intact complex. There is one rule above the others. Never co-transform two plasmids that share an origin of replication. They compete for the same replication machinery and segregate randomly at division, so after a few generations most cells keep only one.”',
  note:'<b>这条的危险在于失败是沉默的</b>：选择压力照样通过，培养物看上去毫无异常，但你手里根本不是共表达。<b>所以这条规则必须事先知道，不能靠事后发现。</b>（这句在 beyondPoints。）<br><b>pDUET 就是针对这一点设计的</b>：pACYCDuet-1、pCDFDuet-1、pCOLADuet-1 的复制起点不同、抗性标记也不同，<b>两种选择压力同时施加，每个活下来的细胞都必须两种质粒都带</b>。每个质粒带两个 T7 表达盒，所以 <b>4 个质粒 × 2 个盒 = 8 个蛋白</b>。<span class="pg">L3 s.24</span><br>第三条路是<b>多顺反子</b>（IRES 或 2A 肽分隔）。⚠ 注意：<b>第二个目的基因表达更少</b>，因为那里的翻译起始效率低——<b>要等摩尔比就别选这条。</b>'},

 {g:'第三幕 · 把它捞出来', gn:'蛋白折好了还不算数。<b>裂解那一刻起，时间开始对你不利。</b>'},
 {n:'15', t:'裂解，和那管像糖浆的裂解液',
  big:'难度跟着<b>细胞壁</b>走。超声<b>同时做两件事</b>：打碎细胞，<b>也剪断 DNA</b>',
  en:'“How hard a cell is to break follows its wall. Mammalian and insect cells are easiest, bacteria are in between, and yeasts and plants are hardest. A French press suits under a hundred millilitres. High-pressure homogenisation is the same principle made continuous, above two hundred millilitres, and it is notably gentle to proteins. Sonication works at any scale but can denature the protein.”',
  note:'其他方法：<b>冻融</b>（三次，只对动物细胞）、<b>去污剂试剂盒</b>（B-PER，贵）、<b>酶解</b>（大肠杆菌用溶菌酶切肽聚糖；酵母用 Zymolyase、Lyticase、Glusulase）、<b>珠磨</b>（体积大、效率高、设备贵）。超声时间：哺乳动物细胞 <b>10 秒</b>，细菌和酵母 <b>5–20 分钟</b>。<span class="pg">L4 s.2–4</span><br><b>最好用的一条</b>：裂解液黏，罪魁是释放出来的<b>基因组 DNA</b>。黏度让离心分不开、上样时堵柱子。<b>超声把 DNA 剪短，黏度立刻下降</b>；不超声就加 <b>DNase I 或 Benzonase</b>。（这条在 beyondPoints。）',
  warn:'⚠ 超声的代价是<b>产热</b>和局部剧烈剪切，蛋白会变性。所以规范是<b>冰浴、短脉冲、间歇</b>——<b>开 10 秒、停 30 秒，绝不连续</b>。<b>高压均质被标为「对蛋白温和」正是因为它没有局部过热的问题。</b>'},
 {n:'16', t:'⚠ 蛋白酶抑制剂救不了无序蛋白',
  big:'幻灯片自己写着：<b>抑制不是 100%</b>。所以<b>快</b>和<b>冷</b>这两条，加了抑制剂也一样要做',
  en:'“Proteases start the moment you lyse, because lysis destroys the compartmentalisation that kept them away from your product. Four measures work together. Use fresh samples. Minimise the processing time. Work cold. Add protease inhibitors. The lecture is explicit that inhibition is not one hundred per cent, so inhibitors slow the rate rather than stopping the reaction.”',
  note:'<b>脆弱程度不均匀</b>：天然无序蛋白降解得最快。理由是结构性的——<b>蛋白酶必须把底物的一段以伸展构象送进活性位点口袋</b>。折叠良好的球状蛋白里，大部分切割位点<b>埋在内部或受构象限制</b>，酶根本够不着；<b>无序蛋白全长本来就是伸展的，每一个位点都是现成的底物。</b>（这段在 beyondPoints。）<span class="pg">L4 s.7</span><br><b>说完这句把线接回去</b>：这正是 BL21(DE3) 基因型的由来——它缺 Lon 和 OmpT，而 <b>Lon 恰恰是专门降解异常和未折叠蛋白的那一个</b>。<b>一个过表达、部分未折叠的重组产物，正好落在它的底物类别里。</b><br><b>折叠、变性、无序这三个词接卡 01。</b>'}
],

end:'<b>这张卡的用法：</b>被问到这一科的任何一个表达问题，先把<b>三幕</b>摆出来——<b>诱导前选开关 · 诱导后一场赛跑 · 最后把它捞出来</b>，再报那条脊梁：<b>蛋白被造得比细胞折得快</b>。<br>然后只讲他问的那一幕，<b>不要三幕一起倒</b>。四个陷阱随时准备好：<b>没有 DE3 就什么都不出 · 包涵体不是失败 · 抑制剂救不了无序蛋白 · 胞质是还原性的</b>。',

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说这是一件什么工作，再给整个答案的形状',
  p:['“Expressing a recombinant protein in bacteria means three things. A gene the bacterium does not own goes into a plasmid. The plasmid goes into the cell. The cell is then made to read it on command. Recombinant means the DNA was joined together outside the organism. Heterologous means the gene comes from a different species.”',
     '“The answer has three acts. Before induction I am choosing a promoter and a strain. After induction there is one race, between folding and aggregation. At the end I break the cells open and try to reach the first column before the proteases do. Almost every problem in the middle act is the same problem. The protein is being made faster than the cell can fold it.”'],
  note:'<b>两个承重词在第一段就交代掉</b>：recombinant 和 heterologous。不交代它们，后面「为什么真核蛋白在这里会出问题」就没有立足点。<br><b>「三幕」这个形状是给他的地图</b>——他听完就知道可以往哪一幕挖，而每一幕你都备好了。'},
 {tag:'段 2 · general', h:'第一幕：启动子的两个轴，T7 的两级，还有诱导',
  p:['“A promoter has two independent properties. Strength is how much you express after induction, and T7 wins that outright. Tightness is how little leaks before induction, and there araBAD wins while lac is the leakiest. These two usually conflict. For an ordinary target I want strength and the leakiness costs me nothing. For a toxic product the leakiness is fatal, because the cells are poisoned before I ever add inducer.”',
     '“T7 is the most used system and it has two layers. The host is a DE3 strain carrying the T7 polymerase gene under a lacUV5 promoter. My plasmid carries the gene under a T7 promoter with LacI repression. IPTG makes the polymerase, and the polymerase transcribes my gene. That indirection buys orthogonality and speed, and it costs leakiness. It also means a T7 plasmid makes nothing at all in a host without the cassette.”'],
  note:'<b>两个轴是这一幕的骨架句</b>，别只说「T7 很强」。<br>⚠ 毒性蛋白的答案要一次给全：<b>araBAD 最紧，或者干脆走无细胞体系</b>（那里没有活的东西可毒）。不给这句，他会追「那怎么办」。<br><b>最后一句就是陷阱题的预防针</b>，主动说比被问出来好。'},
 {tag:'段 3 · 稍展开', h:'第二幕：那场赛跑，以及三族对策',
  p:['“Folding is intramolecular, so one chain collapses on itself. Aggregation is intermolecular, so several chains have to meet. The rate of aggregation therefore rises with concentration far more steeply than folding does. Aggregation wins whenever unfolded chains pile up faster than the cell can fold them, and what I get is inclusion bodies.”',
     '“Every fix is one of three things. Slow the supply, by lowering the temperature or lowering the IPTG. Raise the capacity, with a solubility tag or with co-expressed chaperones. Or change the address. Send the protein to the periplasm, or use a strain whose cytoplasm has been made oxidising, or let it aggregate on purpose and refold it outside the cell.”'],
  note:'<b>三族的说法是这张卡最值钱的东西</b>，因为它把一张技巧清单变成一个可以推的判据。<br>⚠ 但要诚实：<b>这个分族是笔记 beyond 那一层和我自己的整理，不是幻灯片上的话。</b>被问出处就这样说。<br>「换地方」那一族要能立刻展开成三条：<b>周质（Dsb 系统）· Origami/SHuffle（trxB 和 gor）· 包涵体加复性</b>。'},
 {tag:'段 4 · 留口子', h:'落到她自己每周在做的那一步：display 选出来之后怎么办',
  p:['“The place this touches my own work is the step right after a yeast display selection. Display tells me which variant binds. It does not give me protein in a tube. To measure a dissociation constant I have to make the binder as soluble protein, and that is usually E. coli.”',
     '“So the choices on this card are the ones I actually make. My targets are small binding domains with disulfide bonds, so the cytoplasm is the wrong compartment for them. I would either use a SHuffle strain or add a pelB signal and let the periplasm do it. And I would lower the temperature before I changed anything else, because it is the cheapest lever on the list.”'],
  note:'<b>两个口子都在主场</b>：<b>Kd</b> 接卡 <b>02</b>；<b>周质和区室</b>接卡 <b>x-mem</b>；<b>二硫键</b>接卡 <b>x-bonds</b>。<br><b>「display 选出来的东西还得重新做一遍蛋白」这一句本身就很好</b>——它说明她知道筛选和生产是两件事，而这正是这一科想听到的。'}
],

why:{
 rungs:[
  ['为什么过量表达会变成包涵体？','因为<b>折叠和聚集在动力学上竞争</b>。只要未折叠链积累的速度快过细胞折叠它们的速度，聚集就赢。幻灯片给的两个成因（折叠机器被压垮、疏水聚集）其实是同一场竞赛的两种输法。'],
  ['为什么浓度一高，聚集就赢？','因为<b>折叠是分子内的</b>——一条链自己卷起来，快慢跟旁边有几条链没关系；<b>聚集是分子间的</b>——必须有好几条链碰到一起。<b>所以聚集速率对浓度的依赖陡得多。</b>复性那三条路之所以是同一件事，根子就在这。'],
  ['那为什么不能就等它自己折好？','因为聚集是个<b>不可逆的坑</b>：链掉进去就出不来了，后面再给它多长时间也没用。<b>这就已经不是「哪个构象最稳」的问题，是「哪条路先走通」的问题</b>——从热力学换到了动力学。（卡 <b>01</b> 那句「活性构象未必是能量最低的构象」正好从另一头说同一件事。）']
 ],
 stop:{lbl:'停 · 落在动力学',
  say:'“Below that we are asking how a polypeptide chain searches its conformational space, and that is folding kinetics rather than protein production.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'How do you express a protein in E. coli?',
 mean:'<b>最短的问法，也是最可能的那一个。</b>答案要自带结构：先给定义，再给三幕，再给那条脊梁，然后<b>停下来等他挑一幕</b>。',
 say:'“A gene the bacterium does not own goes into a plasmid, the plasmid goes into the cell, and the cell is made to read it on command. There are three acts. Before induction I choose a promoter and a strain. After induction there is one race between folding and aggregation. At the end I break the cells and race the proteases to the first column.”',
 tail:'<b>说完就停。</b>这是八分答案。他接下来挑哪一幕，你就只讲那一幕——<b>三幕一起倒，等于自己把终点往前搬</b>。'},

{q:'Which promoter would you pick for a toxic protein?',
 mean:'他要的是<b>两个轴</b>，不是一个名字。<b>先说轴，再说选择。</b>',
 say:'“Strength and tightness are two independent properties and they usually conflict. For a toxic product tightness is what matters, because a leaky promoter poisons the cells before I ever add inducer. T7 is the strongest but it leaks, so either the culture never grows or what grows is escape mutants that have dropped the plasmid. So I would use araBAD, the tightest, or go cell-free, where toxicity has no meaning.”',
 tail:'<span class="pg">L3 s.11</span>。<b>escape mutants 那一句很值钱</b>——它说明你知道失败是怎么长出来的，不只是知道会失败。'},

{q:'Why does a pET plasmid need a DE3 strain?',
 mean:'考的是<b>正交性</b>：T7 启动子只有 T7 聚合酶读得了，而那个酶必须由宿主提供。',
 say:'“Because the T7 promoter can only be read by T7 RNA polymerase, and E. coli’s own polymerase cannot read it at all. The DE3 in a strain name is a lambda prophage carrying the polymerase gene under a lacUV5 promoter. Without that cassette the host never makes the polymerase, so the plasmid is transcribed by nothing and the gel is empty.”',
 tail:'<b>这是这张卡的第一个陷阱。</b>被追问「那 DE3 三个字母是什么」，答：<b>λ 原噬菌体，整合在基因组里，带着 T7 聚合酶基因，受 lacUV5 控制</b>。'},

{q:'What do you do if the protein is all in the pellet?',
 mean:'他要的是<b>五个手段</b>，但更要的是<b>它们为什么是一族</b>。',
 say:'“The instruction is to adjust the conditions rather than abandon the construct. Lower the temperature, from thirty-seven degrees to thirty, or sixteen overnight, or twelve in ArcticExpress cells. Lower the IPTG. Add a folding-promoting fusion such as MBP or thioredoxin. Co-express chaperones. Change the system only as a last resort. The first two reduce the supply of unfolded chains and the next two raise the capacity to handle them.”',
 tail:'<span class="pg">L3 s.21–22</span>。<b>最后一句是这条答案的分水岭</b>：它把清单变成机制。⚠ 「减 IPTG」在 pET 上要配 <b>Tuner</b>，幻灯片自己写了这条注意。'},

{q:'Your protein has disulfide bonds. Can you still use E. coli?',
 mean:'考的是<b>区室</b>。答案必须先说「胞质是还原性的」，再给两条路。',
 say:'“Yes, but not in the cytoplasm as it comes. The cytoplasm is reducing, and two systems keep it that way, thioredoxin through trxB and glutathione through gor. So there are two routes. Use an Origami or SHuffle strain, where both reductases are mutated and the cytoplasm becomes oxidising. Or add a secretion signal such as OmpA, pelB or phoA and send the protein to the periplasm, which is naturally oxidising.”',
 tail:'<b>顺势给周质那条的账</b>：产量低，但<b>渗透压休克</b>就能温和释放，而且周质里蛋白种类少得多，起点干净。周质有自己的 <b>Dsb 系统</b>，<b>既造二硫键也校对配对</b>。接卡 <b>x-mem</b> 和 <b>x-bonds</b>。'},

{q:'How would you make two proteins in the same cell?',
 mean:'他要的是<b>那条禁令</b>，不是三种策略的名字。',
 say:'“Three ways. Express them separately and mix the lysates before the first column. Co-transform two plasmids. Or put both genes on one polycistronic plasmid. The rule that matters is that I must never co-transform two plasmids sharing an origin of replication, because they compete for the same replication machinery and segregate randomly. The pDUET vectors exist for exactly this, with different origins and different markers.”',
 tail:'<b>失败是沉默的</b>：选择压力照样通过，培养物看上去正常，其实是两群细胞各做一个蛋白。多顺反子那条的注意是<b>第二个基因表达更少</b>，所以要等摩尔比就别用它。'},

{q:'How do you get the protein out of the cells?',
 mean:'考的是<b>体积和剪切力</b>两个判据，外加那管糖浆。',
 say:'“It depends on the volume and on how much shear the protein tolerates. A French press suits under a hundred millilitres. High-pressure homogenisation is the same principle made continuous, above two hundred millilitres, and it is gentle to proteins. Sonication works at any scale but generates heat and local shear, so I work on ice with ten seconds on and thirty off, never continuously.”',
 tail:'<b>再加一句黏度</b>：裂解液黏是因为释放出来的<b>基因组 DNA</b>，它让离心分不开也堵柱子。<b>超声顺带把它剪短了</b>；不超声就加 <b>DNase I 或 Benzonase</b>。'},

{q:'Why is human insulin made by bacteria?', odd:1,
 mean:'听起来像药学，其实问的是<b>这张卡的整条线</b>：快、便宜、产量高，而且胰岛素小到可以复性回来。',
 say:'“Because E. coli is fast and cheap and gives tens to hundreds of milligrams per litre, and insulin is small enough to be recovered. The catch is that insulin has disulfide bonds and the cytoplasm is reducing, so the bonds are the whole problem. Either the protein is made in the periplasm, or it is made as inclusion bodies and refolded with a glutathione redox pair so the disulfides can shuffle until they pair correctly.”',
 tail:'⚠ <b>真实工业流程的细节笔记里没有</b>，别编。停在「两条路都存在」就够，再往下就说这不是课上的内容。'},

{q:'Why can a bacterium not make an antibody?', odd:1,
 mean:'问的是<b>大肠杆菌的三个弱点</b>里最硬的那一个：<b>完全没有翻译后修饰</b>。',
 say:'“Because E. coli has no post-translational modification at all. There is no glycosylation, and disulfide pairing is inefficient because the cytoplasm is reducing. A full antibody needs both. Small antibody fragments are a different matter, and those are routinely made in the periplasm, where the Dsb system forms and proofreads the disulfide bonds.”',
 tail:'<b>三个弱点的排序要说出口</b>：没有修饰、真核蛋白错折成包涵体、密码子偏好。<b>只有第一个真正绕不过去</b>，另外两个都有成熟对策。糖基化接卡 <b>13</b>。'},

{q:'Why would you ever want your protein to be insoluble?', odd:1,
 mean:'问的是<b>包涵体那三条好处</b>。这是「不是失败」那一条的正面问法。',
 say:'“Because aggregated protein is inactive, so I can make things that would otherwise kill the host, such as antimicrobials and nucleases and proteases. Purification also becomes trivial. I break the cells, spin, and keep the pellet, and most of the soluble host proteome is already gone. I can then purify under denaturing conditions, which carries fewer contaminants through.”',
 tail:'⚠ <b>但一定要自己补上那半句</b>：三条好处讲的都是提取，<b>没有一条解决折叠</b>，而复性得率通常只有 <b>1–5%</b>。不补，他一挑就破。'},

{q:'Why is the lysate thick enough to block a column?', odd:1,
 mean:'听起来像操作问题，答案是<b>基因组 DNA</b>。',
 say:'“Because lysis releases the genomic DNA, and that is what makes the lysate viscous. The viscosity stops centrifugation separating properly and it clogs the column on loading. Sonication solves it as a side effect, because cavitation shears the DNA into short fragments. If I am not sonicating I add DNase I or Benzonase instead.”',
 tail:'<b>这条在实验室里问得最多，考场上也最容易显出「真做过」。</b>'},

{q:'Why would anyone add sugar and then go home for the night?', odd:1,
 mean:'问的是<b>自诱导培养基</b>，而机制是<b>分解代谢物阻遏</b>。',
 say:'“That is an autoinduction medium. It contains glucose, glycerol and lactose, plus phosphate buffer to hold the pH. Glucose is used first and represses the lac operon, so the cells just grow. When the glucose runs out, at mid to late log phase, the cells switch to lactose and that induces the system. Glycerol keeps the growth going after the glucose is gone.”',
 tail:'<b>最漂亮的一句</b>：葡萄糖耗尽的那一刻<b>恰好就是你本来会亲手加 IPTG 的那一刻</b>，所以培养物在正确的密度上自己开启。⚠ <b>别给 OD 数字</b>，笔记用的是生长时期，不是一个数。'},

{q:'Why does the culture stop growing before you even induce it?', odd:1,
 mean:'问的是<b>渗漏</b>。这是「紧密性」那个轴的实测版问法。',
 say:'“That is leakiness. Basal expression before induction, and with a toxic product it poisons the cells during growth. T7 is the worst case, because it is two-layered, so any basal polymerase is amplified by the same machinery. Either the culture never grows, or what grows is escape mutants that have lost or mutated the plasmid. The fixes are pLysS or pLysE, which supply T7 lysozyme, or a tighter promoter such as araBAD.”',
 tail:'<b>T7 溶菌酶是 T7 聚合酶的天然抑制剂</b>，这就是那两个质粒存在的理由。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这张卡的英文句里用到的词，他会一个个拎出来问。<b>这一科是新的，所以定义链要比生化那边给得更满。</b>', items:[
{r:'高', q:'What does recombinant mean, and what does heterologous mean?',
 en:'“Recombinant means the DNA molecule was put together outside the organism, from pieces that were not joined in nature. Heterologous expression means the gene being expressed comes from a different species than the host. A recombinant protein made in E. coli from a human gene is both. The two words answer different questions. One is about how the DNA was built, and the other is about where it is being read.”',
 cn:'<b>这两个词是这张卡的第一句话，所以必须能分开讲。</b>他很可能只问其中一个，答的时候<b>顺手把另一个也划清</b>，显得你知道区别在哪。<br>⚠ 这两条<b>是通用定义</b>，笔记里没有专门的一条。说的时候不要挂到讲义上。'},
{r:'高', q:'What is an inclusion body?',
 en:'“An inclusion body is an aggregate of misfolded recombinant protein formed in the cytoplasm of E. coli. In practice it is the dense white material in the pellet after lysis and centrifugation. It forms when overproduction overwhelms the cellular folding machinery, or when the protein aggregates through its own hydrophobic surfaces. The lecture is explicit that this is not a failure, because it can be high purity and stable starting material for refolding.”',
 cn:'<span class="pg">L3 s.16–18</span>。<b>定义先说它是什么（聚集体），再说怎么认它（白色沉淀），最后才说成因。</b>顺序反了就像在背要点。<br>⚠ <b>「不是失败」这句是幻灯片自己的话</b>，可以直接引；但<b>「代价是复性只有 1–5%」这条修正在 beyondPoints</b>，要自己补。'},
{r:'高', q:'What is a DE3 strain?',
 en:'“A DE3 strain is an E. coli strain carrying an integrated lambda prophage that encodes T7 RNA polymerase under the control of a lacUV5 promoter. The letters in the strain name mean exactly that cassette. Any T7-based expression plasmid needs it, because the host has to supply the polymerase. The lacUV5 promoter is a mutant lac promoter that is less sensitive to catabolite repression.”',
 cn:'<b>这一条是陷阱题的正面版</b>，一定要背熟。<span class="pg">L3 s.11–14</span><br>lysogen（溶原菌）这个词如果他追，答：<b>噬菌体基因组整合进宿主染色体、随宿主一起复制、不裂解细胞的那种状态。</b>'},
{r:'高', q:'What is IPTG, and why does it have to be non-hydrolysable?',
 en:'“IPTG is isopropyl thiogalactoside, a non-hydrolysable analogue of allolactose, used between fifty micromolar and one millimolar. Allolactose is the natural inducer, formed by spontaneous isomerisation of lactose, and it inactivates the LacI repressor allosterically. The reason for using a non-hydrolysable analogue is stability. IPTG is not metabolised, so its concentration stays constant and induction strength does not drift. Lactose is consumed by beta-galactosidase, so its concentration falls and the induction fades.”',
 cn:'<span class="pg">L3 s.15</span>。<b>「为什么用类似物」是标准追问</b>，答案是浓度恒定，不是效力更强。<br>⚠ <b>「硫取代了糖苷氧所以切不动」是通用化学，笔记里没有</b>。要说就明说是通用知识。<b>LacI 和别乳糖接卡 12。</b>'},
{r:'高', q:'What is leakiness, and what is tightness?',
 en:'“Leakiness is expression that happens before any inducer is added, which is also called basal expression. Tightness is the opposite property, how completely a promoter is repressed in the uninduced state. Leakiness is harmless for most targets and fatal for a toxic one, because the cells are poisoned during growth. Of the promoters we covered, araBAD is the tightest and lac is the leakiest.”',
 cn:'<b>这一对是这张卡第一幕的骨架</b>。<span class="pg">L3 s.11</span><br>⚠ <b>把强度和紧密性说成两个独立的轴，是笔记 beyond 那一层的说法</b>，幻灯片上写的是「在表达强度和调控之间权衡」。两种说法不矛盾，但出处不同。'},
{r:'中', q:'What is a solubility tag, and why is it put at the N-terminus?',
 en:'“A solubility tag is a highly soluble and fast-folding fusion partner, such as maltose-binding protein or thioredoxin or a HALO-tag. Placed at the N-terminus it emerges from the ribosome first and folds first, so it acts as a local nucleus that keeps the whole fusion in solution. The position is mechanistic rather than conventional. A partner that folded last could not do that job.”',
 cn:'<span class="pg">L3 s.21–22</span>。<b>「为什么放 N 端」这个追问很常见，而答案恰好是一句机制</b>，不是习惯。（这段在 beyondPoints。）<br>⚠ <b>标签之后要不要切掉、怎么切</b>，是纯化那半边的内容（笔记节点 2-41），这张卡上没有，别硬接。'},
{r:'中', q:'What is a chaperone, and what is a chaperonin?',
 en:'“A chaperone is a protein that helps another protein fold without being part of the final structure. A chaperonin is a folding machine that provides an enclosed chamber in which one substrate can fold while shielded from other chains. In E. coli the two systems that can be co-expressed are DnaK with DnaJ and GrpE, and GroEL with GroES. ArcticExpress cells carry cold-adapted chaperonins called Cpn10 and Cpn60.”',
 cn:'<span class="pg">L3 s.10</span> <span class="pg">L3 s.21–22</span>。<b>「腔室」这个词是两者的区别所在</b>：伴侣蛋白把底物关起来折，等于<b>把它的有效浓度降到一条链</b>——<b>这正好又是点 02 那条脊梁。</b>'},
{r:'中', q:'What is a chaotrope, and what does a chemical chaperone do differently?',
 en:'“A chaotrope is a substance such as guanidinium chloride or urea that disrupts the hydrogen-bonded network of water and thereby unfolds proteins. A chemical chaperone does the opposite job. Half-molar arginine is the example. It does not unfold the protein at all. It preferentially suppresses the contacts between aggregation intermediates, so folding is favoured over aggregation without the protein being denatured.”',
 cn:'<span class="pg">L3 s.19–20</span>。<b>这一对很容易被问，因为它们在同一段里出现，作用却相反。</b>判据一句话：<b>离液剂拆结构，化学伴侣拆的是分子之间的接触。</b>（精氨酸的机制在 beyondPoints。）<br><b>变性本身接卡 01。</b>'},
{r:'中', q:'What is the periplasm, and what is the Dsb system?',
 en:'“The periplasm is the compartment between the inner and the outer membrane of a Gram-negative bacterium. It is naturally oxidising and it holds far fewer protein species than the cytoplasm. The Dsb system is its dedicated disulfide machinery, DsbA and DsbB and DsbC, which both catalyses disulfide formation and proofreads incorrect pairings. It is there because the bacterium’s own outer membrane proteins and toxins fold in that compartment.”',
 cn:'<span class="pg">L3 s.23</span>。<b>「校对」那一半最容易漏</b>，但它正是周质比氧化性胞质更靠谱的原因。（Dsb 的细节在 beyondPoints。）<br><b>区室这个概念接卡 x-mem</b>，二硫键的化学接卡 <b>x-bonds</b>。'},
{r:'中', q:'What is plasmid incompatibility?',
 en:'“Two plasmids that share an origin of replication cannot be stably kept in the same cell. They compete for the same host replication machinery and they are distributed randomly at cell division, so after a few generations most cells retain only one of the two. The dangerous part is that the failure is silent. Selection still passes and the culture looks normal, but there is no co-expression at all.”',
 cn:'<span class="pg">L3 s.24</span>。<b>这条必须事先知道，不能靠事后发现</b>——这句话本身就值得说出口。（在 beyondPoints。）<br><b>pDUET 的设计正好是这条的反面</b>：起点不同 ＋ 标记不同 ＝ 两种选择压力同时施加。'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个东西挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'高', q:'Origami and the periplasmic route both give you disulfide bonds. What is the difference?',
 en:'“They attack the same obstacle from opposite sides. Origami and SHuffle carry mutations in trxB and gor, so the two reductases that keep the cytoplasm reducing are gone and the cytoplasm itself becomes oxidising. The periplasmic route leaves the cytoplasm alone and moves the protein out of it, using a signal peptide. One removes the obstacle and the other avoids it. The periplasm also proofreads, because of the Dsb system, and the mutant cytoplasm does not.”',
 cn:'<b>判据一句话：改房间，还是换房间。</b><span class="pg">L3 s.23</span><br>再加一条实际差别：<b>周质产量低但起点干净</b>（渗透压休克 ＋ 蛋白种类少），<b>氧化性胞质产量正常但没有校对</b>。'},
{r:'高', q:'Is an insoluble protein the same thing as an inclusion body?',
 en:'“Not quite. Inclusion bodies are a specific kind of insoluble material, an aggregate of misfolded recombinant protein dense enough to be seen as white material in the pellet. A protein can also end up in the pellet because it is membrane associated, or because it is stuck to nucleic acid, or because it precipitated in the buffer. The practical difference is what I do next. Inclusion bodies are washed and solubilised in a strong denaturant, and the others are not.”',
 cn:'⚠ <b>笔记没有直接分这一对，这是我把定义推出来的</b>，说的时候别挂到讲义上。<br><b>但这条值得准备</b>，因为「全在沉淀里」是实验室里最常见的描述，而它不等于包涵体。判据是<b>下一步做什么</b>，不是外观。'},
{r:'高', q:'You keep saying tightness and strength. Are they not the same thing measured twice?',
 en:'“No, and the clearest evidence is that the winners are different. T7 is the strongest promoter we covered and it is also one of the leakiest. araBAD is the tightest and it is not the strongest. If the two were one property, the same promoter would win both. They usually conflict, and which of them I care about is decided by whether the product is toxic.”',
 cn:'<b>这条是被质疑时的答案</b>，用的是「反例」而不是定义，比重复一遍定义有力得多。<br>⚠ <b>两个轴的说法是笔记的延伸</b>；幻灯片上的原话是「在表达强度和调控之间权衡」。'},
{r:'中', q:'Transformation, electroporation, transduction, transfection. Which one are we doing here?',
 en:'“Transformation, and electroporation is one way of doing it. Transformation is the uptake of naked DNA by a bacterium. Chemical transformation by heat shock gives ten to the six up to ten to the nine colony forming units per microgram. Electroporation exceeds ten to the nine but needs desalted DNA and an instrument. The choice only matters when the number of successful events is already small.”',
 cn:'<b>四个词的完整区分在卡 14</b>，这里只答本科用到的那两个，<b>然后主动把话交回去</b>。<span class="pg">L3 s.10</span><br>三种非用电转不可的场合：<b>连接产物 · 大于约 10 kb 的载体 · 共转两个以上质粒</b>。'},
{r:'中', q:'Lysozyme and sonication both break E. coli. When would you use which?',
 en:'“Lysozyme cleaves the peptidoglycan of the wall, so it is enzymatic and gentle, and it becomes expensive at large scale. Sonication uses cavitation, the violent implosion of bubbles, so it is mechanical and works at any scale. Sonication also shears the DNA, which drops the viscosity of the lysate, and that is a real advantage. Its cost is heat and local shear, so the protein can denature.”',
 cn:'<b>判据一句话：谁在切。</b>酶切的是<b>壁上的化学键</b>，超声用的是<b>物理剪切力</b>。<span class="pg">L4 s.2–4</span><br>⚠ 超声必须<b>冰浴 ＋ 开 10 秒停 30 秒</b>，绝不连续。（这条操作细节在 beyondPoints。）'},
{r:'中', q:'Tuner cells and less IPTG sound like the same fix. Are they?',
 en:'“They are the same intention and they do not work the same way. Lowering IPTG in an ordinary strain changes how many cells switch on, not how much each one expresses, because lac permease imports IPTG and importing it induces more permease. That positive feedback makes induction all or none. Tuner cells lack lac permease, so IPTG enters only by passive diffusion in proportion to the outside concentration. Every cell then sees the same level.”',
 cn:'<b>这条是这一科里最漂亮的机制之一</b>，而且它直接解释了「为什么 T7 不适合做可调表达」。（LacY 的正反馈在 beyondPoints。）<span class="pg">L3 s.10</span>'}
]},

{g:'为什么类', gn:'这一族的「为什么」几乎都落在同一处：<b>折叠和聚集在动力学上竞争</b>，再往下就是折叠动力学。', items:[
{r:'高', q:'Why is E. coli still the default host after forty years?',
 en:'“No single reason, but a set that compounds. It doubles in about twenty minutes, so a whole round of work takes two days. The media are cheap and the cultivation is simple. Scale-up from test tube to fermenter is predictable. The genetic toolbox is enormous. Yields run to tens or hundreds of milligrams per litre. And the organism is completely characterised, so when expression fails there is usually a known explanation and a known fix.”',
 cn:'<b>「累加起来的」这个说法本身就是答案的一部分</b>——没有哪一条特别突出。<span class="pg">L3 s.7–9</span><br><b>三个弱点也要能立刻报</b>：没有翻译后修饰、真核蛋白错折成包涵体、密码子偏好。<b>只有第一个绕不过去</b>，另外两个有成熟对策（Rosetta、密码子优化）。'},
{r:'高', q:'Why does lowering the temperature help solubility?',
 en:'“Because it acts on both sides of the race at once. It slows transcription and translation more than it slows folding, so fewer unfolded chains are present at any one moment. And it slows aggregation directly. The standard is thirty-seven degrees for four hours, and the alternatives are thirty for four hours, sixteen overnight, or twelve overnight in ArcticExpress cells with their cold-adapted chaperonins.”',
 cn:'<b>「同时作用于两边」是这条答案的关键</b>，只说「降温让一切变慢」是半个答案。（这条解释在 beyondPoints。）<span class="pg">L3 s.21–22</span>'},
{r:'高', q:'Why does on-column refolding work better than dialysis?',
 en:'“Because it is the only route that makes aggregation physically impossible rather than merely unlikely. The protein is immobilised on the resin, so the molecules are held apart and cannot meet, and then the denaturant is exchanged out slowly. Dialysis removes the denaturant slowly too, but the protein concentration never changes, so it has to be kept below one milligram per millilitre and it still aggregates readily.”',
 cn:'<span class="pg">L3 s.19–20</span>。<b>加一句很好的收尾</b>：这也是「一开始就该加 His 标签」的又一个理由。（这段在 beyondPoints。）<br>第三条路<b>快速稀释</b>：瞬间把浓度稀释几十倍，折叠获胜，代价是体积巨大、之后还要浓缩回来。'},
{r:'中', q:'Why is the E. coli cytoplasm reducing in the first place?',
 en:'“Because the cell keeps it that way on purpose. Two systems maintain it, thioredoxin through trxB and glutathione through gor, and the point is to protect the cell’s own proteins from oxidative damage. So the reducing cytoplasm is a protective mechanism rather than an accident. Knocking out both reductases is exactly what makes the Origami and SHuffle cytoplasm oxidising enough for disulfide bonds to form.”',
 cn:'<b>这条把「胞质是还原性的」从一个要记的事实变成一个能推的结论</b>，而且它直接解释了 Origami 的基因型。（在 beyondPoints。）<span class="pg">L3 s.23</span><br><b>为什么还原环境拆二硫键，接卡 x-bonds。</b>'},
{r:'中', q:'Why do protease inhibitors not save an intrinsically disordered protein?',
 en:'“Two reasons stacked. The lecture is explicit that inhibition is never one hundred per cent, so a cocktail slows the rate rather than stopping the reaction. And a disordered protein is the worst case for that residual rate. A protease has to feed a stretch of its substrate into the active site in an extended conformation. A folded protein buries or constrains most of its cleavage sites. A disordered one is already extended everywhere, so every site is a ready-made substrate.”',
 cn:'<b>这是这张卡的第三个陷阱</b>：以为加了抑制剂就安全了。<span class="pg">L4 s.7</span><br><b>正确的做法是四条一起上</b>：新鲜样品 · 缩短处理时间 · 全程低温 · 加抑制剂。<b>前三条不因为有第四条而免掉。</b>（无序蛋白那段机制在 beyondPoints。）<br><b>无序和折叠接卡 01。</b>'},
{r:'中', q:'Why does the T7 system leak so badly if LacI represses both layers?',
 en:'“Because the two layers are in series, so anything that leaks in the first one is amplified by the second. A small amount of basal T7 polymerase is enough, since that polymerase is about eight times faster than the host enzyme and it reads a dedicated promoter with no competition. That is why pLysS and pLysE plasmids exist. They encode T7 lysozyme, which is a natural inhibitor of T7 polymerase.”',
 cn:'<b>「串联所以被放大」是这条的全部</b>。<span class="pg">L3 s.11–14</span><br><b>同一个结构既是优点也是缺点</b>：正交性和放大让它最强，串联让它最漏。<b>能把这两句连在一起说，比分别背两条值钱。</b>（正交性和 8 倍在 beyondPoints。）'}
]},

{g:'他要数字怎么办', gn:'这张卡上有不少数。<b>先分清他问的是「具体量」还是「类别边界」</b>：前者报数，后者给判据加反例。<b>编一个不存在的数是这场考试里最危险的动作。</b>', items:[
{r:'高', q:'How much protein do you get, and how much survives refolding?',
 en:'“Yields from E. coli run to tens or hundreds of milligrams per litre of culture, and with the T7 system the product can reach fifty per cent of total cell protein. Refolding from inclusion bodies is the opposite story. It typically recovers only one to five per cent of the starting material. That gap is the honest reason people work so hard to keep the protein soluble in the first place.”',
 cn:'<b>这两个数都在幻灯片上</b>，可以放心报。<span class="pg">L3 s.7–9</span> <span class="pg">L3 s.16–20</span><br><b>把两个数放在一起说</b>，比分开报有力得多：它把「为什么有五个手段去避免包涵体」一句话解释完了。'},
{r:'高', q:'What are the actual numbers in the refolding protocol?',
 en:'“Solubilisation is six molar guanidinium chloride or eight molar urea, with ten millimolar DTT, at pH eight, with sonication and warming to sixty degrees, ending near one milligram per millilitre. The inclusion bodies are washed with about one molar urea first and spun again. Dialysis refolding runs between zero point one and one milligram per millilitre. Arginine is used at half molar as a chemical chaperone.”',
 cn:'<b>全部来自幻灯片</b>，一个都不是我加的。<span class="pg">L3 s.19–20</span><br>⚠ <b>他如果问「为什么是 6 M 不是 5 M」，那已经没有数了</b>，给判据：<b>足以让蛋白完全解折叠的浓度</b>，具体值按蛋白试。别编。'},
{r:'中', q:'What temperature and what IPTG concentration do you use?',
 en:'“The standard condition is thirty-seven degrees for four hours. The alternatives are thirty degrees for four hours, sixteen degrees overnight, or twelve degrees overnight in ArcticExpress cells. IPTG is used anywhere between fifty micromolar and one millimolar, and lowering it is one of the five levers for solubility. Which combination works is found by trying them, not by calculating.”',
 cn:'<span class="pg">L3 s.15</span> <span class="pg">L3 s.21–22</span>。<b>最后一句很重要</b>：这是一个要筛的条件，不是一个能算出来的值。这样回答比硬给一个「最佳值」稳。'},
{r:'中', q:'At what density do you induce?',
 en:'“The lecture defines that moment by growth phase rather than by a number. It is mid to late log phase, and the neat thing about autoinduction media is that glucose runs out at exactly that point, so the culture induces itself at the right density with nobody watching. The right answer for a new protein is that the moment is found by trying, because it is one more condition to screen.”',
 cn:'<b>这是「他问一个不存在的数字」的标准处理</b>：<b>先说这个边界不是由数字定义的，是由判据定义的，再给判据。</b><br>⚠ <b>笔记里没有 OD 数字，所以不要给。</b>通用实验室习惯确实有一个常用区间，但那不是这门课的内容——要说就明说是通用做法，而不是课上讲的。'},
{r:'中', q:'How efficient does transformation have to be?',
 en:'“Chemical transformation gives ten to the six up to ten to the nine colony forming units per microgram and electroporation exceeds ten to the nine. But the number by itself does not decide anything. Efficiency only matters when the count of successful events is already small. That means three cases. A ligation, a vector above roughly ten kilobases, or a co-transformation where the joint probability is a product of the two efficiencies.”',
 cn:'<b>这条演示了「报数之后立刻给判据」</b>：数是真的，但结论不是从数来的。<span class="pg">L3 s.10</span><br>⚠ 「约 10 kb」这个门槛<b>幻灯片说的是 roughly</b>，跟着说 roughly，别把它变成一个硬阈值。'},
{r:'中', q:'How long do you sonicate?',
 en:'“Mammalian cells need about ten seconds and bacteria or yeast need five to twenty minutes. But the total time is not the whole answer, because sonication generates heat and local shear and the protein can denature. So the sample sits in an ice bath and the sonication runs in pulses, ten seconds on and thirty seconds off, never continuously.”',
 cn:'<span class="pg">L4 s.2–4</span>。<b>总时间在幻灯片上，脉冲那条在 beyondPoints。</b><br><b>这条答完顺手给对比</b>：高压均质被标为「对蛋白温和」，正是因为它没有局部过热的问题，所以大规模纯化更偏好它。'}
]}
]
});
