/* 横向卡 · 第二科（Protein Engineering & Synthetic Biology）第三张
   无细胞蛋白合成，以及改写遗传密码 —— 把翻译机器搬进管子，然后改它的规矩。
   出处不是捷克生化书，是她自己的课堂笔记 pesbexplain/data/ch3.js，
   十四个节点全部用到：3-1 自顶向下与自底向上 · 3-2 核糖体 · 3-3 合成酶与双筛 ·
   3-4 能量再生 · 3-5 粗提物 · 3-6 PURE · 3-7 模板 · 3-8 策略图 · 3-9 正交对 ·
   3-10 琥珀抑制 · 3-11 四联体与正交核糖体 · 3-12 密码子压缩 · 3-13 flexizyme ·
   3-14 有什么用。那个文件自己区分两层：points ＝ 幻灯片上有的；
   beyondPoints ＝ 讲义没放的延伸。卡上凡是来自 beyondPoints 或通用知识的，
   都标了「讲义没讲」或「通用」。页码位置用 <span class="pg"> 标的是讲次，例如 L8 s.44。

   ⚠ 这张卡存在的理由是 2026-09-01 那一次实测：老师反复问 flexizyme，她完全不知道；
   她的作业用的是琥珀抑制，老师说那条路太复杂、想把她引到 flexizyme 上，
   而她答的是 T4 连接酶和酶切。那是另一场对话的答案。记在点 15 和追问第一组。

   接卡 x-trans（核糖体、遗传密码、终止密码子）、x-cur（充上料的 tRNA 搬的是什么）、
   aa（氨基酸是什么，因而非天然单体不是什么）、pe-expr（活细胞那条路）、
   pe-evo（重编程是拿来干嘛的）。 */

window.CARDS.push({
id:'pe-cfps', cross:1,
q:'无细胞蛋白合成，以及改写遗传密码 —— 把翻译搬进管子，然后改它的规矩',
qcn:'横向卡 · 第二科第三张 · 两半合成一件事：先能在管子里复现翻译，才谈得上改写密码',
sub:'跨题共用 · 出处是她自己的 PESB 课堂笔记 ch3 · 接卡 x-trans、x-cur、aa、pe-expr、pe-evo',

cram:[
 {g:'开口 · 这张卡的骨架', gn:'这张卡有<b>两半</b>，而且第二半<b>依赖</b>第一半。<b>先把两半各是什么说清楚，再把铰链说出来</b>——那句铰链是整张卡最值钱的东西。'},
 {n:'01', t:'这是一件什么工作',
  big:'上半场：<b>翻译搬出细胞</b>。下半场：<b>搬出来之后改它的规矩</b>。<b>第二件事需要第一件事</b>',
  en:'“Cell-free protein synthesis means running translation in a reaction mixture instead of inside a living cell. It is also called in vitro translation. Once the translation machinery is in a tube it becomes a recipe you can edit. That is what makes genetic code reprogramming possible, and it is why these two subjects are taught together.”',
  note:'笔记自己用两个词把两讲分开：第 7 讲是 <b>mastering the central dogma</b>（完整复现），第 8 讲是 <b>manipulating the central dogma</b>（改写规则）。<b>顺序不是随意的</b>：先能把机器拆开又装回去、每个零件都在你手上，才谈得上换掉其中一个。<span class="pg">L8 s.31</span><br><b>承重词</b>：<b>translation</b> ＝ 核糖体按 mRNA 上三个碱基一组的密码子，把氨基酸一个个接成链；<b>genetic code</b> ＝ 密码子和氨基酸之间那张对应表。不交代这两个，「改写密码」听上去像口号。<b>两个词的完整版在卡 x-trans。</b>'},
 {n:'02', t:'整张卡的铰链',
  big:'重编程要的是<b>减法</b>：某个天然合成酶必须<b>不在场</b>。<b>而一锅裂解物里你拿不掉任何一样东西</b>',
  en:'“The hinge between the two halves is a single requirement. To make a codon mean something new, you need one natural synthetase to be absent. Otherwise it keeps loading its own amino acid onto its own tRNA and wins by sheer numbers. You cannot take one protein out of a crude lysate. In a reconstituted system you simply do not add it, so leaving it out is the same as removing it.”',
  note:'<b>这一句把两半锁在一起</b>，所以它是这张卡的脊梁，不是一个细节。<br>粗提物能做的只有<b>加</b>：你想往里补什么都行。<b>但精确地减掉一样，它做不到</b>——那是一锅几千种蛋白的混合物，20 种天然合成酶全都在里面。<br><b>而重构体系是一样一样加进去的，所以「不加」就等于「没有」。</b><span class="pg">L7 s.2–6</span><br>⚠ 笔记的原话是重编程<b>几乎必须</b>用 PURE。<b>跟着说 almost，别说 only</b>——那是一个「只有」句式，是邀请函。',
  good:'顺势能给的一句：<b>这才是自底向上真正不可替代的优势。</b>成分明确、批次一致这些都是方便，<b>「能做减法」是别处买不到的。</b>'},
 {n:'03', t:'三件套 · 老师重复了三次的那张图',
  big:'不管哪种体系，反应只有三个关键组分：<b>核糖体 · 氨基酸连同它们的 tRNA 和合成酶 · 能量再生</b>',
  en:'“Whichever way the system is built, the reaction has three key components. One is the ribosome. Two is the amino acids together with their tRNAs and the synthetases that charge them. Three is energy regeneration. The lecturer returned to that slide three times in one lecture, so it is the spine of the whole subject.”',
  note:'<b>这张图在一讲里出现了三次</b>（第 6、17、43 页）。笔记把这一条当作「老师在说这是骨架」的一手信号。<span class="pg">L7 s.6</span><br><b>而下半场攻击的正好是第二个组分</b>：改写密码，改的就是 tRNA 和合成酶的行为。<b>第一和第三个组分只是让反应跑起来。</b><br><b>报这三样的时候按顺序报，别漏第三样</b>——能量再生最容易被当成背景，而它恰恰是一个很好的追问入口。'},

 {g:'上半场 · 管子里的翻译', gn:'四点。<b>两种哲学 · 各自的账 · 能量为什么要再生 · 模板可以多简单。</b>最后一点末尾那个 TAG 是下半场的引线。'},
 {n:'04', t:'两种哲学',
  big:'<b>自顶向下</b>＝裂开细胞做减法；<b>自底向上</b>＝从纯化的零件做加法。判据只有一句：<b>你在减还是在加</b>',
  en:'“There are two philosophies for building a cell-free system. Top-down means a crude extract. You lyse cells, use what is already there, and try to remove what you do not want. Bottom-up means a reconstituted system, the PURE system, built by purifying every component separately and mixing them. The test is simple. Are you subtracting or are you adding?”',
  note:'PURE ＝ <b>Protein synthesis Using Recombinant Elements</b>，Shimizu 等人 2001 年的工作，把翻译所需的每个组分单独重组表达纯化再混起来。<span class="pg">L7 s.2–6</span><br>粗提物的来源不止一种：<b>E. coli S30</b>（主力，便宜、产量高、没有翻译后修饰）、<b>麦胚</b>（真核，本底核酸酶活性低）、<b>兔网织红细胞裂解液</b>（放射性标记的经典）、<b>昆虫 / HeLa / CHO</b>（能做真核修饰）。<span class="pg">L7 s.14</span><br><b>S30 这个名字值得会拆</b>：S ＝ supernatant，30 ＝ 30000 × g 离心。裂解后离心，碎片和膜沉下去，上清里留着核糖体、翻译因子、tRNA 和合成酶。'},
 {n:'05', t:'两边各自的账',
  big:'粗提物<b>便宜、好放大</b>，但<b>你不知道里面还有什么</b>。PURE <b>成分全知、批次一致</b>，但<b>极贵</b>',
  en:'“Crude extract is cheaper and easier to scale up, because all you did was lyse some bacteria. The cost is that you do not fully know what is in it. Residual nucleases degrade your messenger RNA and proteases degrade your product. Unknown proteins may interfere, and every batch differs. PURE is the opposite bargain. Composition is fully known, batches are consistent, and there are no nucleases or proteases, but it is extremely expensive.”',
  note:'<b>四条坏处里最讨厌的是第四条</b>：批次差异让实验不可重复，<b>而你查不出原因</b>。这批做得好、下批做不出来，中间你什么都没改——你会去怀疑模板、怀疑操作、怀疑自己，而真正的变量在提取物里。<b>「批次一致性」这条优点，说的就是把这个变量消掉。</b>（这条在 beyondPoints。）<br><b>PURE 还有一手很漂亮</b>：原始体系的组分<b>全部带 His 标签</b>，所以反应完把整锅过一次镍柱，<b>整套翻译机器被抓在柱上，不带标签的产物直接流穿出来</b>。一步拿到接近纯的蛋白。<span class="pg">L7 s.17</span><br>⚠ 反过来也成立：<b>如果你自己的产物要用 His 标签纯化，就得用不带标签的 PURE 版本</b>，否则柱子被机器占满。<b>纯化那一侧接卡 pe-pur。</b>',
  good:'成分明确还买来一件事：<b>你能定位到具体哪一步卡住，然后补上那一个。</b>折叠不行就加伴侣蛋白，二硫键配不对就加异构酶，连续脯氨酸卡住核糖体就加 <b>EF-P</b>，膜蛋白就加乳化体系。<b>在活细胞里你只看得到「表达量低」四个字。</b>'},
 {n:'06', t:'能量再生 · 问题在废物，不在燃料',
  big:'不是 ATP 不够，是<b>用完的废物出不去</b>：每水解一个 ATP 放一个无机磷酸，<b>磷酸螯合镁</b>，镁一少核糖体就散架',
  en:'“Energy regeneration is the third component, and the reason for it is counter-intuitive. The problem is not the fuel but the waste. Every ATP hydrolysed releases inorganic phosphate, phosphate chelates magnesium, and the ribosome needs magnesium to hold its two subunits together. In a living cell phosphate is metabolised away, but a tube has no scavenger. Regeneration keeps ATP high and phosphate low at the same time.”',
  note:'幻灯片标题本身就写着目的：<b>回收无机磷酸</b>。做法是用一个带高能磷酸键的化合物——<b>磷酸肌酸配肌酸激酶</b>，或<b>PEP 配丙酮酸激酶</b>。<span class="pg">L7 s.15–16</span><br><b>更便宜的一条是用一整套糖酵解</b>：磷酸肌酸和 PEP 是按化学计量消耗的，你想产多少 ATP 就得加多少，而糖便宜。<b>而且粗提物里本来就带着全套糖酵解酶</b>。代价是有机酸副产物让 pH 往下漂，需要更强的缓冲。<br>⚠ <b>这条路只对粗提物成立</b>：PURE 里没有糖酵解酶，你要用就得把那十几个酶一个个纯化了加进去。<b>ATP、NADH 这些载体本身接卡 x-cur。</b>',
  warn:'⚠ 另外两条独立的理由也要能说，别只给磷酸那一条：<b>产物抑制</b>（ADP、AMP 和磷酸堆起来改变质量作用比，直接抑制需要 ATP 的酶）；<b>离子强度</b>（ATP 是高电荷分子、以盐的形式加入，一次加够整个反应的量，光离子强度就能破坏核糖体）。<b>三条互相独立，堵住任何一条都不够。</b>'},
 {n:'07', t:'模板可以多简单 —— 以及末尾那个 TAG',
  big:'<b>T7 启动子 · 核糖体结合位点 · ATG · 基因 · 终止密码子</b>，外加一个<b>可选的 TAG</b>。那个 TAG 是给琥珀抑制留的槽',
  en:'“The minimal template is a T7 promoter, a ribosome binding site, a start codon, the gene, a stop codon, and an optional TAG. A linear PCR product works directly, because the exonucleases that destroy linear DNA inside a cell are simply absent here. That removes cloning, transformation and plasmid preparation from the route. And the optional TAG at the end is not decoration. It is the slot reserved for amber suppression.”',
  note:'<b>不需要复制起点，也不需要抗性标记</b>——管子里没有东西需要复制，也没有东西需要被选择。<span class="pg">L7 s.18</span><br>细胞里线性 DNA 活不了，是因为 <b>RecBCD</b> 这类外切核酸酶会迅速把它降解掉。<b>管子里没有它们，所以整条「克隆 → 转化 → 挑菌落 → 提质粒」的链子一起消失。</b>设计引物、跑 PCR、加进反应，几小时就有蛋白。<br><b>顺手的一句</b>：PCR 是天然可并行的，所以上千个 PCR 直接对应上千个反应孔。<b>这就是无细胞体系成为文库平台的原因。</b>',
  good:'环状、线性 DNA 都行，<b>mRNA 也可以直接用</b>，但纯度很关键。<b>活细胞那条路的全部细节在卡 pe-expr</b>——那里 DE3 菌株、IPTG、包涵体那一整套都还在，这里一条都不需要。'},

 {g:'下半场 · 改写密码', gn:'五点。<b>先把策略图摆出来，再把它拆成两个独立的问题</b>——那两个问题就是 2026-09-01 那次答错的根子。'},
 {n:'08', t:'策略图 · 两个轴',
  big:'<b>体内还是体外</b> × <b>装一种还是多种</b>。体内一种＝<b>正交对 ＋ 琥珀密码子</b>；体内多种＝<b>四联体或密码子压缩</b>；体外＝<b>flexizyme</b>',
  en:'“The lecture lays the whole of reprogramming out as a map with two axes. One axis is in vivo against in vitro. The other is one non-canonical amino acid against more than one. In a cell with one, the route is an orthogonal synthetase and tRNA pair plus the amber codon. In a cell with several, it is quadruplet codons or codon compression. In a tube, either way, it is a flexizyme.”',
  note:'<b>这张图在第 8 讲里出现了四次</b>（第 31、37、42、48 页），最后一次最全。<b>重复四次本身就是在说这是骨架。</b><span class="pg">L8 s.31</span><br><b>体内一种那一格是最成熟的路线</b>，图上其他所有方案存在的理由，都是因为它有局限。<br><b>体外那一列为什么只有一个条目</b>：在管子里你可以直接把氨基酸装到 tRNA 上，<b>完全绕开合成酶的特异性</b>，所以不需要区分一种还是多种。',
  tbl:{head:['','装一种 ncAA','装多种 ncAA'], rows:[['体内（in vivo）','正交 aaRS/tRNA 对 ＋ 琥珀密码子','四联体密码子 · 密码子压缩'],['体外（in vitro）','flexizyme','flexizyme ＋ 合成核苷酸']]}},
 {n:'09', t:'⚠ 两个独立的问题 —— 别把它们混成一个',
  big:'这一讲其实只有两个问题：<b>怎么把单体装到 tRNA 上</b>，和<b>用哪个密码子指定它</b>。<b>先说自己在答哪一个</b>',
  en:'“It helps to split the subject into two independent questions. The first is how the monomer gets onto the tRNA. The second is which codon points to it. Orthogonal pairs and flexizymes answer the first question. Amber suppression, quadruplet codons and codon compression answer the second. Saying which question I am answering is half the answer.”',
  note:'<b>这一点是这张卡的防撞杆。</b>2026-09-01 那次失分的形状就是「答进了另一个问题」——他问的是第一问，答出去的是分子克隆。<br><b>把两个问题的名字先说出口，代价是一秒钟，收益是他知道你在答哪一个。</b>而且万一答偏了，你还有退路：「那是第二问的答案，第一问是这样的……」<br><b>同一条推理在卡 pe-pur 上也有一份</b>（结合 / 洗脱 / 移除三层），那次也是实测丢分。<b>两次是同一个毛病。</b>'},
 {n:'10', t:'正交是四条，不是一句',
  big:'<b>正交＝互不干扰</b>，拆成<b>四条同时成立</b>。三条靠<b>进化距离白送</b>，只有「只认 ncAA」那一条<b>必须自己进化出来</b>',
  en:'“Orthogonal means mutually non-interfering, and it breaks into four conditions that must all hold at once. The foreign synthetase must charge only the foreign tRNA. The foreign tRNA must be charged only by the foreign synthetase. The foreign synthetase must accept the non-canonical amino acid and refuse the natural twenty. And the foreign tRNA must read a codon that is genuinely free. Importing the pair from an archaeon gives three of those for nothing.”',
  note:'<b>为什么进化距离白送</b>：合成酶识别自己 tRNA 靠的是一组叫<b>识别元件</b>的特征，而这些元件在近缘物种之间高度保守。<b>从大肠杆菌拿一对改一改再放回大肠杆菌，必然串味。</b>古菌的系统跟细菌已经分开演化了几十亿年，<b>「互不认识」是天然状态。</b><span class="pg">L8 s.32–33</span><br>两对主力：古菌 <b>Methanocaldococcus jannaschii</b> 的 <b>Tyr-RS</b> 配自己的 tRNA，用在大肠杆菌里；<b>大肠杆菌的 Leu-RS</b> 配自己的 tRNA，反过来用在真核细胞里。还有 <b>PylRS</b>。',
  warn:'⚠ <b>第三条为什么白送不了</b>：它要求的是一件进化从来没做过的事——<b>偏爱一个自然界不存在的氨基酸</b>。只能建库去筛，那是定向进化，接卡 <b>pe-evo</b>。<br>⚠ 而且常常还要<b>把编辑域删掉</b>：合成酶的编辑域判据是「比正确的那个小就销毁」，<b>它会尽职地把你的 ncAA 当成错误水解掉</b>。<b>你要主动破坏一套进化了几十亿年的质控系统。</b>'},
 {n:'11', t:'琥珀抑制的核心是一场竞争',
  big:'核糖体走到 TAG，<b>RF1 想终止，你的 tRNA 想装</b>。谁赢是概率——所以效率是 <b>10–100%</b> 的一个范围，不是一个数',
  en:'“Amber is the stop codon TAG, and it is chosen because it is the least used codon in E. coli. The cell survives the reassignment, though the slide is honest that fitness drops substantially. What limits the efficiency is a race at that codon. Release factor one recognises TAG and cuts the chain, while the orthogonal tRNA installs the monomer and lets translation continue. Efficiency therefore runs from ten to a hundred per cent.”',
  note:'影响胜率的四个因素：<b>序列上下文 · 你的 tRNA 解码效率 · 肽键形成的难易 · 跟 RF1 的竞争</b>。<span class="pg">L8 s.34–36</span><br><b>很实用的一条</b>：同一套系统换一个插入位点，效率可能大幅变化，因为上下文变了。<b>位点是要试的，不是算出来的。</b><br><b>一个很聪明的实操技巧</b>：把 <b>His 标签放在 C 端</b>，这样所有截短产物都不带标签，一步亲和纯化就滤掉了。<b>解决不了竞争，就在下游把输家扔掉。</b>（这条在 beyondPoints。）',
  good:'加分的一句：<b>自然界已经这么干过了。</b>TGA 在有 SECIS 元件时编码硒代半胱氨酸（第 21 种），<b>TAG 在某些古菌里编码吡咯赖氨酸</b>（第 22 种）。<b>所以 PylRS 不是从零开始，是接手了一套已经在运行的方案。</b>',
  warn:'⚠ 对付 RF1 的三条路要能一起报，而且要说清激进程度：<b>改造它</b>（用识别 TAG 很差的突变体，治标）；<b>删掉它</b>（治本，但 RF1 是必需基因，<b>必须先把基因组里每一个天然 TAG 换成 TAA</b>，这就逼出了全基因组重编码）；<b>绕开它</b>（正交核糖体，只读你的 mRNA）。<b>Syn61 就是被第二条逼出来的。</b>'},
 {n:'12', t:'装第二个为什么那么难 —— 空位从哪来',
  big:'不是化学难，是<b>没有密码子了</b>。<b>64 个全部有主</b>，琥珀只有一个。两条路：<b>造新的</b>或<b>腾旧的</b>',
  en:'“Installing a second non-canonical amino acid is hard for one reason only. There is no codon left. Sixty-four codons exist, sixty-one encode amino acids and three are stops, and you have already spent the amber one. So you either make new codons or free old ones. Quadruplet codons expand a codon to four bases and create two hundred and fifty-six new ones. Codon compression replaces chosen codons across a whole genome so that they fall out of use.”',
  note:'<b>四联体的代价</b>：天然核糖体解不了它们，<b>它会移码</b>，因为解码中心被打磨成严格三个碱基一步。所以要配一个<b>正交核糖体 ribo-Q</b>——改掉 16S rRNA 的反 SD 序列，让它只读带特殊结合位点的 mRNA。<b>于是一个细胞里两套核糖体各干各的，宿主的翻译不受影响。</b><span class="pg">L8 s.38–41</span><br><b>压缩的代价</b>：Syn61 重新合成了整个基因组，重编码 <b>18214</b> 个密码子，倍增慢 <b>1.6 倍</b>；Syn57 做了十万处以上改动、腾出 <b>7</b> 个密码子，慢 <b>4 倍</b>。<b>腾得越多细胞越弱，这是这个领域的中心张力。</b><span class="pg">L8 s.42–43</span>',
  good:'白送的一件事：<b>删掉 tRNA 之后得到一道遗传防火墙。</b>进来的噬菌体基因组用的是完整的标准密码，遇到那个再也读不了的密码子就停住。<b>反过来也成立</b>：这个菌株的基因漏出去，别的生物也读不对。<b>一个改动同时解决功能和生物安全两个问题。</b><br>⚠ 幻灯片把抗病毒归给了 Syn61，<b>严格说那属于后续菌株 Syn61Δ3</b>——删掉了两个不再使用的丝氨酸 tRNA 和 RF1 的那一株。（这条更正在 beyondPoints。）'},

 {g:'⚠ 实测 · 2026-09-01 丢掉的那一问', gn:'<b>这一组是这张卡存在的理由。</b>上一次口试他反复往 flexizyme 上引，而答出去的是另一场对话的答案。<b>三点：它是什么 · 它跟正交对的对照 · 那次到底错在哪。</b>'},
 {n:'13', t:'Flexizyme · 「柔」是双向的',
  big:'它是一个<b>给 tRNA 装货的核酶</b>。<b>不看氨基酸的侧链</b>（只看一个活化基团），<b>也不看 tRNA 的主体</b>（只看人人都有的 3′-CCA）',
  en:'“A flexizyme is an artificial ribozyme that charges a tRNA, and the name stands for flexible tRNA acylation ribozyme. Its flexibility runs in two directions. It does not read the side chain of the amino acid at all. It reads an activating group on the substrate, such as a cyanomethyl ester. And it does not read the body of the tRNA either. It reads only the three-prime CCA, which every tRNA carries.”',
  note:'<b>两个方向合起来 ＝ 任意（活化的）底物 × 任意 tRNA。</b>这就是 flexible 的双重含义。<span class="pg">L8 s.44–46</span><br>所以它接受的东西<b>远远超出 α-L-氨基酸</b>：<b>N-甲基氨基酸 · D-氨基酸 · β-氨基酸 · 羟基酸</b>，以及用它们造出来的环肽。<b>而这些根本就不是 α-L-氨基酸。</b>（「氨基酸是什么」在卡 <b>aa</b>，所以「非天然单体不是什么」也从那里起步。）<br>机制上很朴素：<b>flexizyme 自己的 GGU 末端跟 tRNA 的 CCA 末端互补配对</b>，就这么简单。来自 Hiroaki Suga 实验室。',
  good:'顺势给那句最漂亮的理由：“A natural synthetase is strict because evolution trained it to reject anything outside the standard twenty. A flexizyme has no such history, so it is not strict at all.” <b>它的宽容不是设计出来的优点，是没有被训练过的结果。</b>'},
 {n:'14', t:'⚠⚠ 两条路的对照 —— 这一点是整张卡的落点',
  big:'要装一个非天然单体只有两条路。<b>重路</b>：给每个新单体进化一对正交合成酶和 tRNA。<b>捷径</b>：用 flexizyme，<b>合成酶这个问题根本不问</b>',
  en:'“There are two ways to get a non-natural monomer onto a tRNA, and the difference between them is the whole point. The heavy route is to evolve an orthogonal synthetase and tRNA pair. That is a separate engineering project for every new monomer, because the binding pocket has to be evolved again each time. The shortcut is a flexizyme. It charges the tRNA directly, so the synthetase question never comes up at all.”',
  note:'<b>说的时候一定要把「重」和「轻」这两个词说出口</b>，因为老师想听到的正是这个对照。<b>重路的重在哪</b>：每换一个单体，就要重新建一个结合口袋的突变库、重新筛，而且多半还要把编辑域删掉。<b>捷径的轻在哪</b>：把氨基酸做成活化酯就行，核酶不问它是什么。<br><b>再往上一层，这两条路其实是同一个思路的两种做法</b>：正交对是<b>把限制拆掉</b>（删编辑域、改口袋），flexizyme 是<b>从头就不设限制</b>。<b>能把这句说出来，比背两个定义值钱得多。</b>',
  warn:'⚠ <b>代价必须同时说出来</b>，否则听上去像 flexizyme 全面更好：<b>它只能在体外用</b>。充电那一步必须先在管子里做完——活化酯是化学合成的、不稳定的分子，进不了细胞，而细胞里 20 种天然合成酶还会来抢那条 tRNA。<b>所以策略图上它只出现在体外那一行，这不是偶然的限制，是它的工作方式决定的。</b>'},
 {n:'15', t:'⚠ 那次实测到底错在哪',
  big:'<b>2026-09-01</b>：他反复问 flexizyme。作业用的是<b>琥珀抑制</b>，他说那条路太复杂、想把人引到 flexizyme，<b>而答出去的是 T4 连接酶和酶切</b>',
  en:'“I think I have drifted into cloning. The question is how the monomer gets onto the tRNA, and the answer there is a flexizyme.”',
  note:'<b>失败的名字要叫得准：答进了另一场对话。</b>T4 连接酶和限制性内切酶回答的是「怎么把一段 DNA 拼进载体」，那是<b>构建模板</b>那一侧的事；他问的是<b>怎么把单体装到 tRNA 上</b>。<b>两个答案都可以是对的句子，但后一个不回答被问的那个问题。</b>整条推理在 LOGIC 第 9 条。<br><b>「太复杂」那句是提示，不是批评。</b>他说琥珀抑制太复杂，是在说「有一条更短的路，你说得出来吗」。<b>听见有人说你的方案复杂，先问一句他心里那条短路是什么。</b>',
  warn:'⚠ <b>触发词</b>：flexizyme · ribozyme that charges tRNA · acylation · how does the amino acid get onto the tRNA · a simpler route than amber —— <b>全部落在「怎么装」这一问上</b>。<br>⚠ <b>中途发现自己答偏了怎么办</b>：上面那句就是回收线。<b>说出来不丢分，接着往错的方向说才丢分。</b>另一个版本更安全，直接把问题分层反问回去：“Do you mean how the monomer is attached to the tRNA, or how the template is built? Those are two different steps.”'}
],

end:'<b>这张卡的用法</b>：被问到无细胞或者改写密码，先把<b>两半</b>摆出来——<b>翻译搬出细胞 · 搬出来之后改规矩</b>，再报那句铰链：<b>重编程要的是减法，而一锅裂解物里你拿不掉任何一样东西</b>。<br>然后<b>只讲他问的那一半</b>。下半场一开口先把<b>两个问题</b>分开：<b>怎么装到 tRNA 上 · 用哪个密码子指定它</b>。<br>随时准备好那条对照：<b>重路是给每个新单体进化一对正交合成酶和 tRNA，捷径是 flexizyme，它根本不问合成酶。</b>',

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说无细胞是什么，再给两种哲学，最后给三件套',
  p:['“Cell-free protein synthesis means running translation in a reaction mixture instead of inside a living cell. It is also called in vitro translation. You grow and lyse cells, prepare the extract, add substrates and salts and an energy source, add the template, and let it produce.”',
     '“There are two philosophies for building one. Top-down means a crude extract. You lyse cells, use what is already there, and remove what you do not want. Bottom-up means a reconstituted system, the PURE system, where every component is purified separately and then mixed. The test is whether you are subtracting or adding.”',
     '“Whichever way it is built, the reaction has three key components. One is the ribosome. Two is the amino acids with their tRNAs and the synthetases that charge them. Three is energy regeneration. The lecturer came back to that slide three times in one lecture.”'],
  note:'<b>三件套要报满</b>，特别是第三样。能量再生听上去像背景，其实是一个很好的追问入口，而且你备好了答案（<b>问题在废物不在燃料</b>）。<br><b>「你在减还是在加」这句判据比两个名字值钱</b>——它让你能把一个没听过的体系当场归位。'},
 {tag:'段 2 · general', h:'把铰链说出来，然后摆策略图',
  p:['“The reason these two subjects are taught together is one requirement. To make a codon mean something new, you need one natural synthetase to be absent. Otherwise it keeps loading its own amino acid onto its own tRNA and wins by sheer numbers. You cannot take one protein out of a crude lysate. In a reconstituted system you just do not add it, so leaving it out is the same as removing it.”',
     '“The lecture then lays the whole of reprogramming out as a map with two axes. One axis is in vivo against in vitro. The other is one non-canonical amino acid against more than one. In a cell with one, the route is an orthogonal pair plus the amber codon. In a cell with several, it is quadruplet codons or codon compression. In a tube, either way, it is a flexizyme.”'],
  note:'<b>这一屏是整张卡的重心。</b>铰链那一句说完，他基本就知道你不是在背两块互不相干的内容。<br>⚠ 跟着笔记说 <b>almost requires</b>，别说 only——「只有」是邀请函（LOGIC 第 18 条）。<br><b>策略图摆完就停</b>，让他挑一格。他挑哪一格，你就只讲那一格。'},
 {tag:'段 3 · 稍展开', h:'把下半场拆成两个问题，然后给那条对照',
  p:['“It helps to split the subject into two independent questions. The first is how the monomer gets onto the tRNA. The second is which codon points to it. Orthogonal pairs and flexizymes answer the first. Amber suppression, quadruplet codons and codon compression answer the second. Saying which question I am answering is half the answer.”',
     '“For the first question there are two routes and they differ in cost. The heavy route is to evolve an orthogonal synthetase and tRNA pair. Orthogonal means the imported pair and the host system do not touch each other, and that has to be engineered again for every new monomer. The shortcut is a flexizyme, which charges the tRNA directly and never asks a synthetase anything. The price of the shortcut is that it only works in a tube.”',
     '“For the second question the usual answer is the amber codon, TAG. It is the least used codon in E. coli, so reassigning it disturbs the fewest native genes. What limits the efficiency is a race at that codon. Release factor one recognises TAG and cuts the chain, while the orthogonal tRNA installs the monomer and continues.”'],
  note:'<b>第一屏那句「先说自己在答哪一问」就是 2026-09-01 的补丁。</b>它值一秒钟，买的是他知道你在答哪一个。<br><b>第二屏是这张卡的落点</b>：<b>重路 vs 捷径</b>。说的时候把 heavy 和 shortcut 两个词说出口。<br>⚠ 第三屏说完<b>别急着往 Syn61 跑</b>，那是第二问下面一层。等他问。'},
 {tag:'段 4 · 留口子', h:'落到她自己每周在做的那一步：建库和筛',
  p:['“The place this touches my own work is the synthetase pocket. Making an orthogonal synthetase accept a non-natural monomer and refuse the natural twenty is a directed evolution problem. You build a library of pocket mutants and you select. That is the same kind of experiment as a display selection, and it ends the same way. You still have to make the winner as soluble protein and measure a constant.”',
     '“The other end of it is the flexizyme route. Flexizymes are used to build cyclic peptide libraries carrying N-methyl and D-amino acids, and those libraries are then selected by display. So the two halves of my own field meet here. Reprogramming the code builds molecules that nature does not build, and display picks the useful one out of an enormous number.”'],
  note:'<b>两个口子都在主场</b>：<b>定向进化和建库</b>接卡 <b>pe-evo</b>；<b>把赢家做成可溶蛋白</b>接卡 <b>pe-expr</b>；<b>测常数</b>接卡 <b>02</b>。<br><b>「造出自然界没有的分子」加「从天文数字里挑出有用的那个」这两句连起来说</b>，是这一科最想听到的一句话——它说明你知道这两件事是互补的，不是两个技术名词。'}
],

why:{
 rungs:[
  ['为什么改写遗传密码几乎只能在重构体系里做？','因为它要的是<b>减法</b>。要让某个密码子改指一个新单体，原来负责那个密码子的<b>天然合成酶必须不在场</b>，否则它照旧把天然氨基酸装上去，而且数量占优。<b>重构体系是一样一样加进去的，所以「不加」就等于「没有」。</b>'],
  ['为什么粗提物做不到减法？','因为那是一锅<b>几千种蛋白的混合物</b>，20 种天然合成酶全都在里面。你可以往里加任何东西，<b>但你没有办法把其中一种单独挑出来扔掉</b>。「不知道里面有什么」在别处只是不方便，<b>在这里是致命的</b>。'],
  ['那为什么不干脆把那个天然合成酶改成接受新单体？','可以，<b>那正是重路</b>。但合成酶的严格性是<b>进化专门打磨出来的</b>——催化位点排除比正确氨基酸大的，编辑位点放进并销毁比它小的，两道筛串起来给出大约万分之一的错误率。<b>而你想装的东西，在这套机制眼里就是一个错误。</b>所以你要么把质控拆掉再重建，要么用核酶绕过它。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that we are asking why evolution optimised translation for accuracy in the first place, and that is molecular evolution rather than protein engineering.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is cell-free protein synthesis?',
 mean:'<b>最短的问法。</b>答案要自带结构：<b>定义 → 两种哲学 → 三件套 → 它通向哪里</b>，然后停下来等他挑。',
 say:'“It means running translation in a reaction mixture instead of inside a living cell, and it is also called in vitro translation. There are two philosophies. Top-down is a crude extract, where you lyse cells and remove what you do not want. Bottom-up is a reconstituted system, where every component is purified separately and mixed. Either way the reaction has three key components, the ribosome, the amino acids with their tRNAs and synthetases, and energy regeneration.”',
 tail:'<b>说完就停，这是八分答案。</b>如果想给他一个抓手，再加一句：<b>“And it is the platform that genetic code reprogramming is built on.”</b>——他多半会顺着这条走，而那正是你准备最足的地方。'},

{q:'What is a flexizyme, and why would you use one?',
 mean:'⚠ <b>实测题，而且是 2026-09-01 丢得最难看的一处。</b>他反复问的就是这个。答案两句就够：<b>它是什么 · 它的柔是双向的</b>。',
 say:'“A flexizyme is an artificial ribozyme that charges a tRNA, and the name stands for flexible tRNA acylation ribozyme. Its flexibility runs in two directions. It does not read the side chain of the amino acid, only an activating group such as a cyanomethyl ester. And it does not read the body of the tRNA, only the three-prime CCA that every tRNA carries. So almost any activated substrate can be put onto almost any tRNA.”',
 tail:'<b>然后马上给对照</b>：<b>“The alternative is to evolve an orthogonal synthetase for every new monomer, which is a project each time. The flexizyme skips the synthetase question altogether.”</b> 这一句就是他当时想引出来的东西。'},

{q:'Your assignment used amber suppression. Is there not a simpler route?',
 mean:'⚠ <b>2026-09-01 的原话形状。</b>「太复杂」是<b>提示</b>，不是批评——他在说「有一条更短的路」。<b>短路就是 flexizyme。</b>',
 say:'“Yes. Amber suppression needs an orthogonal synthetase and tRNA pair, and the synthetase has to be evolved to accept my monomer and refuse the natural twenty. In a tube I can skip that entirely. A flexizyme charges the tRNA directly, because it reads an activating group rather than a side chain. The cost is that the charging has to be done in a tube first, so the route is in vitro only.”',
 tail:'<b>上一次答的是 T4 ligase 和限制性酶切</b>，那回答的是「怎么把基因拼进载体」。<b>两个答案都可以是对的句子，但后一个不回答被问的那个问题。</b>'},

{q:'How would you put a non-canonical amino acid into a protein?',
 mean:'他要的是<b>结构</b>，不是技术名词清单。<b>先把两个独立的问题分开</b>，再给两个轴。',
 say:'“There are two independent questions. The first is how the monomer gets onto the tRNA. The second is which codon will point to it. For the first, in a cell you use an orthogonal synthetase and tRNA pair, and in a tube you use a flexizyme. For the second, with one monomer you take the amber codon, and with several you need quadruplet codons or codon compression, because there is no codon left otherwise.”',
 tail:'<b>这个框架比罗列名字清楚得多</b>，也更像你真的理解了这件事。笔记自己就是这么组织第 8 讲的。'},

{q:'Why does genetic code reprogramming need a reconstituted system?',
 mean:'考的就是<b>铰链</b>。答案是「<b>减法</b>」，不是「PURE 更干净」。',
 say:'“Because reprogramming needs something to be absent rather than present. If a codon is to mean a new monomer, the natural synthetase for that codon must not be in the tube, or it will keep loading its own amino acid. You cannot remove one protein from a crude lysate, which contains thousands of them. In a reconstituted system you simply leave it out, and leaving it out is the same as removing it.”',
 tail:'⚠ 跟着笔记说 <b>almost requires</b>。他要是问「那粗提物一点都不行吗」，答：<b>粗提物能加任何东西，只是不能干净地减掉一样，而重编程恰恰是一件减法优先的事。</b>'},

{q:'What does the word orthogonal mean in this context?',
 mean:'笔记说这是<b>这一讲最重要的一个词</b>。他要的是<b>四条</b>，不是「互不干扰」四个字。',
 say:'“It means mutually non-interfering, and it breaks into four conditions that must all hold. The foreign synthetase charges only the foreign tRNA. The foreign tRNA is charged only by the foreign synthetase. The foreign synthetase accepts only the non-canonical amino acid. And the foreign tRNA reads a codon that is genuinely free. Three of those come almost for free if the pair is imported from an archaeon.”',
 tail:'<b>四条里三条是「别碰宿主的东西」，一条是「别让宿主的东西碰你」。</b>记住这个结构就不用死背。<b>第四条把话接到琥珀密码子上，正好是你想去的方向。</b>'},

{q:'Why is the amber codon the one that gets reassigned?',
 mean:'三条理由，<b>第三条最漂亮</b>：自然界已经这么干过了。',
 say:'“Three reasons. It is the least used codon in E. coli, so reassigning it disturbs the fewest native genes. The cell survives the reassignment, although the slide is honest that fitness drops substantially. And nature has already done it. Pyrrolysine, the twenty-second amino acid, is encoded by TAG in some archaea, so an orthogonal amber-decoding system already exists and can be borrowed.”',
 tail:'<b>「有没有哪个生物已经解决了这道题」是这一科反复出现的思路。</b>PylRS 就是那个现成的方案。'},

{q:'Why can a tube make a protein that would kill a cell?', odd:1,
 mean:'听起来像常识题，问的其实是<b>无细胞体系为什么存在</b>。',
 say:'“Because there is no cell to poison. Toxicity only has a meaning if something alive is being harmed, and a reaction mixture is not alive. The same reasoning covers proteins that aggregate or that are cut up by proteases, because I control what proteases are in the tube. That is why cell-free systems are used for toxic targets, for aggregating targets and for libraries run in parallel.”',
 tail:'<b>活细胞那条路上的对应答案在卡 pe-expr</b>：毒性蛋白要挑最紧的启动子。<b>这里连启动子都不用挑。</b>'},

{q:'Why do peptide drugs almost never work as a pill?', odd:1,
 mean:'问的是<b>环肽</b>，而答案正好是 flexizyme 那条路的用途。',
 say:'“Because an ordinary linear peptide has two problems. Proteases degrade it very quickly, and it cannot cross a membrane. N-methylation and cyclisation fix both. Methylating the backbone nitrogen hides it from proteases and removes hydrogen bond donors, and closing the ring removes the free ends that exopeptidases need. Cyclosporine is the natural example. The catch is that N-methyl and D-amino acids are not among the twenty, so a ribosome cannot install them.”',
 tail:'<b>收尾那一句就是桥</b>：<b>“And that is exactly what a flexizyme can do.”</b> 商业化的例子是用 flexizyme 造环肽文库、再用展示技术筛，接卡 <b>pe-evo</b>。'},

{q:'Why would anyone build a bacterium that cannot catch a virus?', odd:1,
 mean:'问的是<b>密码子压缩</b>的副产品：遗传防火墙。',
 say:'“It is a side effect of freeing codons. You replace certain codons genome-wide with synonyms, and then you delete the tRNAs that used to read them. An incoming phage genome is written in the full standard code, so it hits a codon that nothing can read and the ribosome stalls. The bacterium is immune not by fighting the phage but by speaking a different language.”',
 tail:'<b>反过来也成立，而且这句更值钱</b>：这个菌株的基因漏到自然界，别的生物也读不对，所以水平基因转移被阻断。<b>一个改动同时解决功能和生物安全。</b>⚠ 严格说抗病毒属于 <b>Syn61Δ3</b>，不是 Syn61。'},

{q:'Why does a reaction in a tube run down even with plenty of ATP?', odd:1,
 mean:'听起来像操作问题，答案是<b>磷酸螯合镁</b>。',
 say:'“Because the problem is the waste rather than the fuel. Every ATP hydrolysed releases inorganic phosphate, phosphate chelates magnesium, and the ribosome needs magnesium to hold its subunits together. In a living cell the phosphate is metabolised away and ions are pumped out, but a tube has no scavenger. So an energy regeneration system is used, which keeps ATP high and phosphate low at the same time.”',
 tail:'<b>这一条在实验室里问得最多。</b>加一句就更完整：<b>产物抑制和离子强度是另外两条独立的理由</b>，所以「一次多加点 ATP」三条路全堵。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'⚠ 实测 · 2026-09-01 那一串', gn:'<b>这一组是这张卡存在的理由。</b>上一次他反复往 flexizyme 上引，而答出去的是分子克隆的答案。<b>每一条都先默问一句：他问的是「怎么装」还是「用哪个密码子」。</b>', items:[
{r:'实测', q:'What is a flexizyme?',
 en:'“A flexizyme is an artificial ribozyme that charges a tRNA, and the name stands for flexible tRNA acylation ribozyme. It is flexible in two directions. It does not read the side chain of the amino acid, only an activating group on the substrate. And it does not read the body of the tRNA, only the three-prime CCA that every tRNA has.”',
 cn:'<b>2026-09-01 实测，完全答不上的一处。</b>他问了不止一次，说明这是他心里的重点。<span class="pg">L8 s.44–46</span><br><b>两个方向合起来就是 flexible 的双重含义</b>：任意活化底物 × 任意 tRNA。机制上朴素得可以一句话说完：<b>它自己的 GGU 末端跟 tRNA 的 CCA 末端互补配对。</b>来自 Hiroaki Suga 实验室。',
 warn:'⚠ <b>说完立刻给对照，别等他问</b>：“The alternative is to evolve an orthogonal synthetase for every new monomer. The flexizyme skips the synthetase question altogether.” <b>那就是他当时想引出来的那句话。</b>'},
{r:'实测', q:'You wrote that you would use amber suppression. Is that not too complicated?',
 en:'“It is the heavier route, yes. Amber suppression needs an orthogonal synthetase and tRNA pair, and the synthetase has to be evolved to accept my monomer and refuse the natural twenty. In a tube there is a shorter way. A flexizyme charges the tRNA directly, so no synthetase has to be persuaded of anything. The cost is that the charging happens in a tube, so that route is in vitro only.”',
 cn:'<b>2026-09-01 的原话形状。</b>「太复杂」不是在批评作业，<b>是在提示有一条更短的路</b>。<b>听见有人说你的方案复杂，先问一句他心里那条短路是什么。</b><br>⚠ 那次答的是 <b>T4 ligase 和限制性酶切</b>。那回答的是「怎么把一段 DNA 拼进载体」，属于<b>构建模板</b>那一侧，<b>跟「怎么把单体装到 tRNA 上」不是同一件事</b>。整条推理在 LOGIC 第 9 条。',
 warn:'⚠ <b>中途发现答偏了的回收线</b>：“I think I have drifted into cloning. The question is how the monomer gets onto the tRNA, and the answer there is a flexizyme.” <b>说出来不丢分，接着往错的方向说才丢分。</b>另一个更安全的版本是直接反问分层：“Do you mean how the monomer is attached to the tRNA, or how the template is built?”'},
{r:'高', q:'Why does a flexizyme accept substrates that a synthetase never would?',
 en:'“Because a natural synthetase is strict on purpose. Evolution shaped it to reject anything outside the standard twenty, using a catalytic site that excludes larger amino acids and an editing site that destroys smaller ones. A flexizyme has no such history. It was never under that selection pressure, so its tolerance is not a designed advantage but the absence of training.”',
 cn:'<b>这是笔记里最好的一个洞见</b>，而且它直接解释了整个技术：<b>天然酶的「做不到」不是能力不足，是被进化专门训练出来的拒绝。</b>而你想装的东西，在它眼里就是「错」。<b>所以它的精确性正是你的障碍。</b><br>顺手接一条更长的线：<b>核糖体的催化核心本来就是 RNA</b>，所以用 RNA 给 tRNA 上料<b>不是一个聪明的外挂，是回到翻译这台机器本来的化学</b>。（这条在 beyondPoints。）'},
{r:'高', q:'Why can a flexizyme not be used inside a living cell?',
 en:'“Because the charging has to happen first and separately. You charge the tRNA with the flexizyme in a tube, then add the charged tRNA to the reaction. The activated ester is a synthetic and unstable molecule, so getting it into a cell is a problem in itself. And inside a cell the twenty natural synthetases are still working, so nothing stops them acting on that tRNA.”',
 cn:'<b>这不是一个偶然的限制，是它的工作方式决定的</b>——所以策略图上它只出现在体外那一行。<span class="pg">L8 s.44–46</span><br><b>反过来这也解释了体外那一列为什么不分「一种还是多种」</b>：你可以在管子里分别充好三条不同的 tRNA 再一起加进去，<b>因为充电已经在管外完成了，没有任何酶会来抢。</b>'}
]},

{g:'定义类', gn:'这张卡的英文句里用到的词，他会一个个拎出来问。<b>这一科是新的，所以定义链要给得满一点。</b>', items:[
{r:'高', q:'What is the PURE system?',
 en:'“PURE stands for protein synthesis using recombinant elements. It is a cell-free translation system reconstituted from separately purified components, first described by Shimizu and colleagues in 2001. Every part of the transcription and translation machinery is expressed and purified on its own and then mixed, so the reaction contains only what was deliberately added. That is what makes it defined, customisable and consistent between batches.”',
 cn:'<span class="pg">L7 s.17</span>。<b>定义先说它是什么（重构的体系），再说怎么造（逐个纯化再混），最后才说好处。</b>顺序反了就像在背要点。<br><b>原始体系的组分全部带 His 标签</b>，所以反应完过一次镍柱就能把整套机器抓下来、产物流穿出来。<b>不带标签的版本存在，是给「产物自己要用 His 标签」的场合。</b>'},
{r:'高', q:'What is a ribozyme, and is the ribosome one?',
 en:'“A ribozyme is RNA that catalyses a reaction, rather than protein doing it. And yes, the ribosome is one. Its catalytic core, the peptidyl transferase centre, is pure RNA, so the peptide bond is made by RNA rather than by any protein. That is the strongest single piece of evidence for an RNA world, and it is also the reason an artificial ribozyme can be built to charge tRNA.”',
 cn:'<span class="pg">L7 s.7–12</span>。<b>这一条是 flexizyme 的思想来源</b>，所以值得先于 flexizyme 准备好。<br><b>核糖体本身的结构和翻译的全过程在卡 x-trans</b>，这里只给「催化核心是 RNA」这一条，因为下半场要用它。'},
{r:'高', q:'What is a non-canonical amino acid?',
 en:'“It is any amino acid outside the standard twenty. The lecture uses the abbreviation ncAA, and almost two hundred of them have been put into proteins by reprogramming the code. Some are not really amino acids in the strict sense at all. D-amino acids, beta-amino acids and hydroxy acids are all used, and none of them is an alpha-L-amino acid.”',
 cn:'<b>「那二十种是什么」在卡 aa</b>，所以「非天然」这个词要从那里起步：<b>α 碳、氨基、羧基、侧链，L 构型</b>。说清楚这四件事，「非天然」才有边界。<br>⚠ <b>近 200 种这个数在幻灯片上</b>，可以放心报。<span class="pg">L8 s.30</span>'},
{r:'高', q:'What is an activated ester, and why does it matter here?',
 en:'“It is the substrate with a reactive leaving group attached, a cyanomethyl ester or a dinitrobenzyl ester. It matters because that group is what the flexizyme recognises. The enzyme does not look at the side chain at all, so anything that can be converted into such an ester becomes a substrate. That single fact is where the substrate generality comes from.”',
 cn:'<span class="pg">L8 s.44–46</span>。⚠ 笔记自己说 <b>DCCA、氰甲酯、二硝基苄酯这些化学细节不用背</b>——但「它认的是一个活化基团，不是侧链」这一条必须能讲。<br><b>2026-09-01 她其实说对了这一点</b>（flexizyme 认 activated ester），见 LOGIC 第 1 条。<b>所以失分不在这里，在「flexizyme 是什么、什么时候该提它」。</b>'},
{r:'中', q:'What does S30 mean?',
 en:'“It is the supernatant after centrifugation at thirty thousand times gravity. S is for supernatant and the number is the force. You lyse the E. coli and spin, so debris, membranes and intact cells go into the pellet, while the supernatant keeps the soluble machinery, meaning ribosomes, translation factors, tRNA and the synthetases. S12 is the same idea at a lower force, which keeps more components but is cruder.”',
 cn:'<span class="pg">L7 s.14</span>。<b>这套命名法在任何一篇无细胞文献的方法部分都会碰到，认得出就够。</b><br><b>数字越小留下的越多也越杂</b>——所以这个数字本身就标着提取物有多粗。'},
{r:'中', q:'What is the amber codon, and where does the name come from?',
 en:'“Amber is the stop codon TAG. It is the least used codon in E. coli, which is why it is the standard target for reassignment. The name has nothing to do with chemistry. The amber mutation was named after a student called Harris Bernstein, and his surname means amber in German. Once one stop codon had a colour name the other two followed, as ochre and opal.”',
 cn:'<b>名字的来历是个玩笑</b>，笔记标明当趣闻就行。<span class="pg">L8 s.34–36</span><br><b>但「三个终止密码子分别叫什么」值得记</b>：<b>TAA 赭石 · TAG 琥珀 · TGA 蛋白石</b>。<b>终止密码子本身接卡 x-trans。</b>'},
{r:'中', q:'What is an orthogonal ribosome?',
 en:'“It is a second population of ribosomes in the same cell that translates only your own messages. The anti-Shine-Dalgarno sequence of its RNA is changed, so it recognises only a matching orthogonal ribosome binding site. Natural ribosomes then keep translating host messages normally and the cell survives, while the orthogonal ones can be engineered to do things a normal ribosome cannot, such as reading four-base codons.”',
 cn:'<span class="pg">L8 s.38–41</span>。<b>这是把「正交」的思想从分子对推到整台机器</b>：分子对 → 密码子 → 整台核糖体，三层隔离。<br><b>名字叫 ribo-Q</b>，它同时解读四联体密码子和琥珀密码子。<b>SD 序列和核糖体结合位点本身接卡 x-trans。</b>'},
{r:'中', q:'What is codon compression?',
 en:'“It is freeing a codon in two steps. First you replace every instance of a chosen codon across the whole genome with a synonym, so it falls out of use. Then you delete the tRNA that used to read it, so the codon becomes genuinely meaningless and can be reassigned. Only the second step actually frees it, and it is also the step that makes the organism resistant to phage.”',
 cn:'<b>两步的分工要说清楚</b>：第一步是<b>「不用了」</b>，第二步是<b>「读不懂了」</b>。<span class="pg">L8 s.42–43</span><br><b>Syn61</b> 重新合成了整个基因组，重编码 <b>18214</b> 个密码子，倍增慢 <b>1.6 倍</b>；<b>Syn57</b> 做了十万处以上改动、腾出 <b>7</b> 个密码子，慢 <b>4 倍</b>。⚠ 抗病毒严格说属于 <b>Syn61Δ3</b>，那一株把两个不再使用的丝氨酸 tRNA 和 RF1 都删了。'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个东西挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'实测', q:'An orthogonal pair and a flexizyme both put a monomer on a tRNA. What is the difference?',
 en:'“They answer the same question at very different cost. The orthogonal pair is the heavy route. You evolve a synthetase that accepts your monomer and refuses the natural twenty, and that is a separate engineering project for every new monomer. The flexizyme is the shortcut. It charges the tRNA directly and never asks a synthetase anything, but it only works in a tube.”',
 cn:'<b>这一条是整张卡的落点，也是 2026-09-01 他想听到的那句对照。</b><br><b>判据一句话：重路是改造一个酶，捷径是绕过整个酶。</b>再往上一层：正交对是<b>把限制拆掉</b>（删编辑域、改口袋），flexizyme 是<b>从头就不设限制</b>。<b>两种做法，同一个思路。</b>',
 good:'加分的一句：<b>在管子里正交对并没有失效，只是变得多余</b>——一旦能用化学方法给 tRNA 充电，你就不再需要一个肯接受 ncAA 的合成酶。<b>真正只能待在图上一边的是 flexizyme，它没办法在体内用。</b>'},
{r:'高', q:'Amber suppression and codon compression sound like the same trick. Are they?',
 en:'“No, and they answer different halves of the problem. Amber suppression takes a codon that is already rare and reassigns it, so it costs you almost nothing and gives you exactly one free codon. Codon compression rewrites a genome so that a sense codon stops being used at all, and then deletes the tRNA for it. The first is borrowing a codon. The second is manufacturing one.”',
 cn:'<b>判据一句话：借一个，还是造一个。</b><br><b>而且两者有因果关系，不只是并列</b>：想删掉 RF1，就必须先把基因组里每一个天然 TAG 换成 TAA，<b>而那就是全基因组重编码</b>。<b>Syn61 是被「想删 RF1」这个需求逼出来的。</b>能把这条因果链说出来，比分别背两个技术值钱。'},
{r:'高', q:'Is a quadruplet codon just a longer codon?',
 en:'“It is a longer codon, but the consequence is much bigger than that. Four bases give two hundred and fifty-six possible codons, none of which conflicts with the existing sixty-four. The catch is that a natural ribosome cannot read them. Its decoding centre has been optimised to move in strict three-base steps, so a four-base anticodon simply shifts the frame and everything downstream is misread.”',
 cn:'<b>「所以你还得换一台核糖体」这句是这条的重点</b>，只说 256 个新密码子是半个答案。<span class="pg">L8 s.38–41</span><br><b>解法是 ribo-Q</b>：改掉反 SD 序列，让它只读你的 mRNA。<b>于是一个细胞里两套核糖体各干各的。</b>已经实现的最多是<b>两个四联体加一个琥珀，装三种 ncAA</b>。'},
{r:'高', q:'You keep saying the ribosome does not check the amino acid. Is that really true?',
 en:'“Yes, and it is the reason the whole field exists. The ribosome checks that the anticodon pairs with the codon, and nothing more. Give it a tRNA whose anticodon is correct but which carries a completely wrong amino acid, and it will install that amino acid without complaint. So the genetic code is not a dictionary written somewhere. It is the sum of what the synthetases do.”',
 cn:'<b>这一条是理解整个下半场的逻辑起点</b>，值得停下来想清楚。<b>密码表写在 aaRS 的行为里——改它就是改密码。</b><br><b>四条路全部是在动同一步</b>：加一对新的、空出一个密码子、换掉核糖体、或者干脆跳过合成酶。<b>核糖体怎么读密码子接卡 x-trans；充上料的 tRNA 搬的是什么接卡 x-cur。</b>'},
{r:'中', q:'Crude extract and PURE both make protein. When does the choice actually matter?',
 en:'“For ordinary production it barely matters, and you pick crude extract because it is cheaper and scales. The choice becomes real in two cases. If you need reproducibility between batches, the undefined content of a lysate is the variable you cannot see or measure. And if you are reprogramming the code, you need a synthetase to be absent, which a lysate cannot give you at all.”',
 cn:'<b>判据一句话：要产量和成本就粗提物，要干净和可控就 PURE。</b><span class="pg">L7 s.2–6</span><br><b>第二种情况是硬的，第一种是花钱买的。</b>批次差异的坏处不在它让结果变差，<b>在它让你查不出原因</b>——这批好下批不好，中间你什么都没改。'},
{r:'中', q:'Is the editing domain a help or a problem?',
 en:'“Both, depending on what you want. In nature it is what gives translation its accuracy. The catalytic site excludes amino acids larger than the correct one, and the editing site admits the smaller ones and destroys them, and the two together give roughly one error in ten thousand. For engineering it is a problem, because a non-canonical amino acid looks to it exactly like the kind of error it exists to remove.”',
 cn:'<b>这条演示了一个反复出现的模式</b>：<b>宿主的质控系统在尽职地按规矩办事，而你的目标恰好被它判定为不合规。</b>同一个模式在卡 <b>pe-expr</b> 上出现过两次（敲掉 Lon 蛋白酶、敲掉 trxB 和 gor）。<br><b>看到「为什么要敲掉一个看起来有用的东西」，先问一句：它在保护什么？</b>'}
]},

{g:'为什么类', gn:'这一族的「为什么」几乎都落在同一处：<b>进化把翻译优化成了拒绝一切非标准的东西</b>，再往下就是分子进化。', items:[
{r:'高', q:'Why is suppression efficiency a range rather than a number?',
 en:'“Because it is not the yield of one reaction. It is the win rate of a race. When the ribosome reaches TAG, release factor one and your orthogonal tRNA are competing for the same position, and which arrives first is probabilistic. Four things shift the odds, namely the sequence context around the codon, how well your tRNA decodes it, how readily the peptide bond forms, and the competition itself.”',
 cn:'<span class="pg">L8 s.34–36</span>。<b>实用推论</b>：同一套系统换一个插入位点，效率可能大幅变化，<b>所以位点是要试的，不是算出来的</b>。<br><b>解决不了竞争就在下游处理</b>：把 <b>His 标签放 C 端</b>，所有截短产物都不带标签，一步亲和纯化滤掉。<b>纯化那一侧接卡 pe-pur。</b>'},
{r:'高', q:'Why does deleting release factor one force you to rewrite a whole genome?',
 en:'“Because release factor one stays an essential gene while native genes still end in TAG. It is the only thing that terminates them, so deleting it is lethal. To make the deletion survivable you first have to change every native TAG in the genome to TAA, and that is whole-genome recoding. Syn61 was built for exactly this reason, so it is not a separate demonstration project.”',
 cn:'<b>这条因果链要能一口气说完</b>：想删 RF1 → 必须先清空所有天然 TAG → 所以要重写整个基因组。<b>看清这条，Syn61 就不再是一个孤立的技术展示。</b><span class="pg">L8 s.34–36</span><br><b>三条对策是同一个思路的三个激进程度</b>：削弱它、消灭它、绕开它。<b>这个三段结构在工程问题里到处都是。</b>'},
{r:'高', q:'Why do orthogonal pairs have to come from a distant organism?',
 en:'“Because orthogonality is really non-recognition, and evolutionary distance supplies it for free. A synthetase recognises its own tRNA through identity elements, and those are highly conserved between related species. So a pair taken from E. coli and put back into E. coli would cross-react with the host machinery. Archaeal systems diverged from bacterial ones over billions of years, so they do not recognise each other.”',
 cn:'<b>一句话的选材原则：要找互不干扰的零件，去演化树上离得最远的地方找。</b><span class="pg">L8 s.32–33</span><br><b>反过来用也成立</b>：在真核细胞里就拿大肠杆菌的 Leu-RS 和它的 tRNA——对真核宿主来说，细菌系统同样是「进化上遥远」的。'},
{r:'中', q:'Why does the lecture say mastering becomes manipulating?',
 en:'“Because the two lectures are one argument in two steps. The first is reproducing translation outside a cell without changing any rule, which is mastering it. The second is changing what a codon means, which is manipulating it. The second depends on the first, because you can only replace a component once you can take the machine apart and put it back together.”',
 cn:'<b>这句可以当整块内容的开场白</b>，因为它把两半锁在一起。<span class="pg">L8 s.31</span><br><b>「先复现、再改写」是整门工程学科的通用模式</b>：先能克隆并原样表达，才谈得上定点突变；先能合成一个基因组并让细胞活下来，才谈得上精简它。'},
{r:'中', q:'Why does freeing more codons make the cell weaker?',
 en:'“Because synonymous only means synonymous at the level of the amino acid. The same stretch of sequence also carries messenger RNA secondary structure, internal regulatory elements and ribosome binding. It also sets how fast translation runs, and that affects folding on the ribosome. Every substitution can disturb one of those. The trend is clear in the numbers, a one point six fold cost for three codons and a fourfold cost for seven.”',
 cn:'<b>这是这个领域的中心张力</b>：你想腾出更多密码子来编码更多 ncAA，<b>但腾得越多细胞越虚弱</b>。57 个密码子目前在极限附近。<span class="pg">L8 s.42–43</span><br><b>顺手一句</b>：十万次这样的改动累积起来细胞还能活，本身已经很了不起。'},
{r:'中', q:'Why does the PURE system let you fix a problem that a cell cannot?',
 en:'“Because a defined composition lets you locate the failing step. In a living cell you observe low expression and have nowhere to start. In a reconstituted reaction you can tell which step is stalling and add the missing factor. Consecutive prolines stall the ribosome, so you add elongation factor P. Disulfides mispair, so you add an isomerase. The protein aggregates, so you add a chaperone.”',
 cn:'<b>这就是「可控性」的实际含义</b>，不是一个形容词。<span class="pg">L7 s.17</span><br><b>脯氨酸那一条值得单记</b>：它是二十种里唯一的仲胺，氮锁在环里，<b>既是很差的肽基供体也是很差的受体</b>，连着两三个就把核糖体卡住。<b>EF-P 结合在 E 位和 P 位之间，把 P 位的 tRNA 摆正。</b>'}
]},

{g:'他要数字怎么办', gn:'这张卡上的数全部来自讲义，可以放心报。<b>但先分清他问的是「具体量」还是「类别边界」</b>：前者报数，后者给判据加反例。<b>编一个不存在的数是这场考试里最危险的动作。</b>', items:[
{r:'高', q:'How many codons are there, and how many can you free?',
 en:'“There are sixty-four codons. Sixty-one encode amino acids and three are stop codons. Only one of those three can realistically be taken, which is why a single non-canonical amino acid is easy and a second one is hard. Beyond that you either create new codons, and four bases give two hundred and fifty-six of them, or you free existing ones by recoding a genome.”',
 cn:'<b>这几个数都在幻灯片上。</b><span class="pg">L8 s.31</span> <span class="pg">L8 s.38–41</span><br>⚠ 他要是问「那为什么不能把三个终止密码子都征用」，<b>别编数，给判据</b>：总得留下能让翻译停下来的办法，<b>而且用得越多的密码子，征用它破坏越大</b>。TAA 是用得最多的那个。'},
{r:'高', q:'How efficient is amber suppression, and how long does the flexizyme route take?',
 en:'“Suppression efficiency runs from ten to a hundred per cent, and the range is real rather than sloppy, because it is the win rate of a competition. The flexizyme procedure takes about a week for the whole sequence of steps. Both numbers are on the slides. What decides the suppression figure in any given experiment is the insertion site, so it is found by trying rather than by calculating.”',
 cn:'<b>两个数都在幻灯片上，放心报。</b><span class="pg">L8 s.34–36</span> <span class="pg">L8 s.44–46</span><br><b>先报数再给判据</b>，这是这一条的形状：数是真的，但结论不是从数来的。'},
{r:'中', q:'How many non-canonical amino acids have actually been incorporated?',
 en:'“Almost two hundred have been put into proteins this way, and that number is on the slides. The frontier is not the count but the number at once. Work from the Chin group reported triply orthogonal pyrrolysyl pairs in twenty twenty and quintuply orthogonal pairs in twenty twenty-three, so several distinct monomers can now be installed in the same protein.”',
 cn:'<b>近 200 这个数在幻灯片上</b>，可以报。<span class="pg">L8 s.30</span><br>⚠ <b>那两篇前沿工作的作者和年份笔记说不用背</b>，所以要说就说得松一点，别把年份当硬事实。<b>「从一种到多种」这个方向本身比具体数字值钱。</b>'},
{r:'中', q:'How accurate is a natural synthetase, and why does that number matter here?',
 en:'“About one error in ten thousand. The reason it matters is that the accuracy comes from two sieves in series, each contributing roughly one in a hundred. The catalytic site excludes anything larger than the correct amino acid, and a separate editing site admits the smaller ones and hydrolyses them. That second sieve is the one you have to remove when you want it to accept something new.”',
 cn:'<span class="pg">L7 s.13</span>。<b>这条数字之所以值得记，是因为它解释了「为什么要删编辑域」。</b><br>顺手的一个对照：Ile 和 Val 只差一个亚甲基，<b>单靠结合亲和力错误率会是大约五分之一</b>，而实测是万分之一。<b>差了三个数量级，那个缺口就是双筛要填的坑。</b>'}
]}
]
});
