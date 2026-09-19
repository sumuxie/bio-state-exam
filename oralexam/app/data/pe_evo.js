/* 横向卡 · 第二科（Protein Engineering & Synthetic Biology）第三张
   定向进化 —— 造一堆变体，再把好的那个找出来。
   出处是她自己的课堂笔记 pesbexplain/data/ch4.js（第 9 讲，18 个节点，从讲义幻灯片转录）。
   用到的节点：4-1 决策树 · 4-2 饱和突变与密码子空间 · 4-3 易错 PCR 与突变株 ·
   4-4 基因重排 · 4-5 蛋白宇宙有多少种折叠 · 4-6 二元图案与组合序列空间 ·
   4-7 文库大小的物理天花板 · 4-8 覆盖度 · 4-9 文库从来不是无偏的 · 4-10 筛选 vs 选择 ·
   4-11 基因型–表型连接 · 4-12 细菌体内选择 · 4-13 噬菌体展示 · 4-14 SELEX 与适体 ·
   4-15 核糖体展示 · 4-16 mRNA 展示 · 4-17 液滴区室化 · 4-18 方法对比。
   笔记自己分两层：points ＝ 幻灯片上有的；beyondPoints ＝ 笔记标明「课上没讲」的延伸。
   卡上凡是来自 beyondPoints 或通用知识的，都当场标了「讲义没讲」或「通用」。
   ⚠ de novo design 这一条是 2026 年考场上真被问到、当时没答上来的（速背 17 点、追问第一组）。
   接卡 land（适应度地形，这张卡底下的那张图）、x-trans（核糖体、遗传密码、释放因子）、
   pe-expr / pe-pur（把赢家重新做出来、捞出来）、02（选择实际在排序的那个 Kd）、
   taq（易错 PCR 滥用的那个聚合酶）。
   页码用 <span class="pg"> 标讲次和幻灯片号，例如 L9B s.5。 */

window.CARDS.push({
id:'pe-evo', cross:1, w:0,
q:'定向进化 —— 造一堆变体，再把好的那个找出来',
qcn:'横向卡 · 第二科第三张 · 脊梁：蛋白和编码它的基因必须物理连在一起，不然赢家捞不回来',
sub:'跨题共用 · 出处是她自己的 PESB 课堂笔记（第 9 讲）· 接卡 land、x-trans、pe-expr、pe-pur、02、taq',

cram:[
 {g:'开口 · 两条轴先摆出来', gn:'这张卡不是六种技术的清单。它是<b>两条能把任何一种技术安放进去的轴</b>，技术只是填进去的例子。'},
 {n:'01', t:'这是一件什么工作',
  big:'两个动作反复跑：<b>造多样性</b> → <b>把好的那个找出来</b> → <b>再造一次</b>',
  en:'“Directed evolution is a series of rounds of screens or selections, separated by further diversification. That sentence is the definition from the lecture and two words in it carry the weight. Series means that one round does not count. Separated by diversification means each round starts from the winners of the round before.”',
  note:'<b>定义是幻灯片的原话，可以直接引。</b><span class="pg">L9B s.2–4</span><br><b>为什么必须反复</b>：每一轮只能走一小步（易错 PCR 的目标是每个基因 1–5 个突变，见第 15 点）。想走远只能多走几轮，<b>每轮都从上一轮的赢家出发</b>——这正是自然选择的逻辑：小步、留优、重复。<br><b>接卡 land</b>：那张卡把这四个动作画在适应度地形上（造库 → 选 → 取赢家 → 重复），这张卡讲的是<b>这四个动作在实验台上怎么实现</b>。'},
 {n:'02', t:'整张卡的脊梁',
  big:'<b>蛋白和编码它的基因必须物理连在一起</b>，不然赢家捞不回来。所有展示方法只差<b>「靠什么连」</b>',
  en:'“It is necessary to have a linkage between the phenotype exhibited by the protein and the gene that encodes it. The reason is that a protein cannot be amplified and it cannot be sequenced. Suppose I find one superb binder among ten to the thirteen molecules. Without its gene I can neither read it nor make more of it.”',
  note:'<b>四种连法，就是四族技术</b>：<b>区室</b>（细胞、噬菌体颗粒、油包水液滴）· <b>非共价</b>（核糖体展示的三元复合物）· <b>共价</b>（mRNA 展示，嘌呤霉素焊上去）· 外加一个<b>根本不需要连</b>的（SELEX，核酸自己就是表型）。<span class="pg">L9B s.5</span>，Leemhuis et al., Curr Opin Struct Biol 2005。<br><b>判据一句话</b>：碰到一个没见过的展示方法，<b>只问「是什么东西把这两样摁在一起」</b>，就能把它摆进这张表。<br>⚠ 「为什么需要连接」那段推理（蛋白不能扩增也不能测序）<b>在 beyondPoints</b>，幻灯片上只有「必须有连接」这句结论。'},
 {n:'03', t:'第二条轴 · 筛选还是选择',
  big:'<b>一个一个看</b>，还是<b>让它自己活下来</b>。这一条决定了你<b>能用多大的库</b>',
  en:'“A screen is a growth condition where both mutant and wild type can grow but can be distinguished phenotypically. A selection allows selective propagation, so phenotypes that pass the pressure are preserved and the others are purged. In a screen I test every variant. In a selection I test nothing.”',
  note:'两条定义都是幻灯片原话。<span class="pg">L9B s.2–4</span><br><b>筛选的上限是探测能力</b>：96 孔板一天几千个，FACS 一天 10⁷–10⁸，<b>而 FACS 也是一个一个过探测器的</b>。<b>选择的上限是分子数</b>，体外可以到 <b>10¹⁴</b>。<br><b>筛选换来的是灵活</b>：任何能测的东西都能筛、拿到的是定量数据、而且可以<b>故意挑第二名</b>。<b>选择难在设计</b>——你得把「我想要的功能」翻译成「活得下来」，但它可以在<b>苛刻的非生理条件</b>下跑。<br>（吞吐量那一段的理由在 beyondPoints；幻灯片只说「选择能搜索多得多的变体」。）',
  warn:'⚠ <b>把这两个词叫反，等于告诉他你没算过天花板。</b>这两件事差的不是一点，是<b>几个数量级</b>。说「我做了个 selection」而实际在一个一个看板子，他下一句就是 “How many did you actually test?”。'},

 {g:'四种连法 · 按「靠什么把它们摁在一起」排', gn:'不按名字背，按<b>连接方式</b>背。每一条都给三样：<b>怎么连 · 上限多大 · 最适合选什么</b>。'},
 {n:'04', t:'体内 · 细胞和噬菌体颗粒本身就是区室',
  big:'细菌：基因在<b>细胞里的质粒</b>上。噬菌体：<b>蛋白在颗粒外面，编码它的 DNA 在颗粒里面</b>',
  en:'“In bacteria the gene sits on a plasmid inside the cell, so the cell itself is the compartment. Phage display was the first display method and it was described in nineteen eighty-five. You splice the gene library into a gene encoding a phage capsid structural protein. The protein is then shown outside the particle and its DNA is packaged inside.”',
  note:'<b>一个噬菌体颗粒就是一个拆不开的基因型–表型包裹</b>，这是所有连接方案里最直观的一个。George Smith 因此分享 <b>2018 年诺贝尔化学奖</b>。<span class="pg">L9B s.8–9</span><br><b>选择循环叫 biopanning</b>：加到固定了靶标的板上 → 洗掉不结合的 → 洗脱结合的 → <b>感染大肠杆菌扩增</b> → 重复 <b>3–5 轮</b>，每轮加大洗涤强度。<b>噬菌体是活的，所以选出来的东西自己会扩增</b>——这是体内展示相对体外展示的天然优势。（biopanning 和扩增这一条在 beyondPoints。）<br><b>细菌体内选择的头号例子</b>：<b>Knopp 等 2021</b>（PLoS Genetics），从 <b>一亿条随机生成的 DNA 序列</b>里选出让大肠杆菌抗<b>黏菌素（colistin，最后一线抗生素）</b>的变体，支持「非编码 DNA 可以充当从头生成新基因的原料」。<span class="pg">L9B s.6–7</span>',
  warn:'⚠ <b>幻灯片自己附了一条限定，一定要跟着说</b>：这些随机肽<b>多半自己没有酶活性</b>，它们是<b>通过干扰细菌的调控网络</b>（改变膜电位、扰动信号通路）间接产生抗性的。<b>所以正确的读法是「随机序列能产生有用的表型」，不是「随机序列能产生一个像样的酶」。</b>主动说出这条限定，比被他挑出来好。'},
 {n:'05', t:'⚠ 要高亲和力就必须单价展示',
  big:'M13 的 <b>pVIII 约 2700 拷贝</b>（多价），<b>pIII 只有 3–5 拷贝</b>（可以单价）。<b>多价会选出靠数量取胜的弱结合子</b>',
  en:'“In M13 there are two coat proteins to choose between. The major coat protein pVIII is present at about two thousand seven hundred copies, so display is multivalent and it suits short peptides. The minor coat protein pIII is present at three to five copies, so display can be monovalent and it can carry larger fragments such as scFv or Fab. For high affinity I want monovalent pIII.”',
  note:'<b>理由是亲和力和亲合力的区别</b>：展示了上千个拷贝的时候，<b>许多个各自很弱的结合位点合起来看上去像一个很紧的结合</b>，这叫<b>亲合力效应（avidity）</b>。结果是你选出来的克隆<b>单个分子其实很弱，只是靠数量赢的</b>。<b>单价展示把这个假象去掉，让选择压力落在真正的单分子亲和力上</b>——所以治疗性抗体的筛选几乎都用单价 pIII 系统。（这一段在 beyondPoints。）<br><b>接卡 02</b>：这里说的「单分子亲和力」就是那张卡上的 <b>K<sub>d</sub></b>；而「许多弱位点合起来像很紧」正是那张卡上「两个抗体 K<sub>d</sub> 一样是不是同一个东西」换了个场合。',
  good:'<b>一句很加分的收尾</b>：<b>你的选择在排序的那个量，必须和你最后要报的那个量是同一个量。</b>用多价展示去选、然后报一个单分子 K<sub>d</sub>，这两件事对不上。'},
 {n:'06', t:'核糖体展示 · 非共价',
  big:'<b>省掉终止密码子</b>，核糖体读到信使末端就停在那儿不撒手，拿着 <b>mRNA ＋ 核糖体 ＋ 新肽链</b>的三元复合物',
  en:'“The linkage is secured by omitting the stop codon. With no stop codon no release factor binds, so the ribosome reaches the end of the message and simply stalls. What it holds is a ternary complex of the mRNA, the ribosome and the new peptide. High magnesium and low temperature stabilise it further.”',
  note:'<b>那条最容易被问的细节</b>：核糖体的<b>出口通道</b>有 <b>30–40 个氨基酸</b>长，所以要在 C 端接一段<b>约 100 个氨基酸的无结构间隔肽</b>，把目标蛋白推出通道。不接，蛋白还埋在隧道里，<b>折不起来，更谈不上结合</b>。<br><b>怎么把 mRNA 拿回来</b>：加 <b>EDTA 螯合走镁</b>，复合物就散了，mRNA 被温和释放，再 RT-PCR 做成 cDNA 进下一轮。<b>漂亮在于它就是把维系复合物的那个条件反过来用</b>，不需要任何变性条件，核酸毫发无损。（<b>同一个 EDTA 螯合，在纯化那张卡上是毁掉镍柱的东西</b>——化学一样，用途相反。接卡 <b>pe-pur</b>。）<br>例子：Takahashi et al., FEBS Lett 2002，<b>麦胚无细胞体系</b>表达文库，用固定在琼脂糖珠上的<b>甲氨蝶呤</b>（methotrexate，底物类似物）选二氢叶酸还原酶（DHFR），三轮之后扩增、表达、测活性。<span class="pg">L9B s.12–14</span>',
  warn:'⚠ <b>三条缺点同一个根子：连接是非共价的。</b>① 核糖体<b>很笨重</b>（2.7 MDa），可能挡住结合界面或者非特异地粘住靶标；② 选择<b>只能在低温高盐下做</b>，条件被锁死；③ <b>复合物没法纯化</b>，一动就散。<b>mRNA 展示修的正是这三条。</b>（2.7 MDa 和「三条同源」在 beyondPoints。）',
  good:'<b>「省掉终止密码子」接卡 x-trans</b>：终止密码子本身不编码氨基酸，是<b>释放因子</b>认出它、让肽链水解下来。没有终止密码子就没有释放因子上来，链就下不来。<br>⚠ <b>顺带一条通用知识</b>：NNK 唯一保留的那个终止密码子 <b>TAG 就是 amber</b>，而 amber 抑制型菌株会把它读成一个氨基酸——非天然氨基酸就是从这个口子塞进去的。<b>这一条笔记里没有，说的时候别挂到讲义上。</b>'},
 {n:'07', t:'mRNA 展示 · 共价',
  big:'<b>嘌呤霉素冒充氨酰-tRNA 混进核糖体</b>，接上肽链之后拆不下来。而它就挂在<b>这条 mRNA 自己的 3′ 端</b>',
  en:'“The covalent fusion is formed during translation, and the deck says frankly that the precise mechanism is unknown. Puromycin is an antibiotic and a ribosomal inhibitor. It mimics the aminoacyl end of a tRNA, so the ribosome admits it and joins the growing chain to it. The puromycin is carried on the three prime end of the mRNA. That message again lacks a stop codon.”',
  note:'<b>为什么这个键拆不掉</b>：正常的氨酰-tRNA 用<b>酯键</b>挂着氨基酸，酯键可以水解、可以往下传；<b>嘌呤霉素用的是酰胺键（C–N）</b>，不能水解也不能往下传，<b>所以链就停在那里，而且永久地连着</b>。<b>这正是嘌呤霉素当抗生素的机制（提前终止肽链），mRNA 展示把这个毒性机制直接拿来当工具。</b>（这一整段在 beyondPoints。）<br><b>巧在放哪里</b>：核糖体一路读到信使末端，没有终止密码子所以没人来终止，<b>那颗就在 3′ 端上的嘌呤霉素被拉进 A 位</b>，于是这条 mRNA 编码的蛋白被焊在这条 mRNA 上。<b>一个分子同时带着基因型和表型。</b><br><b>cDNA display</b>：连好之后<b>反转录成 cDNA</b>。DNA 比 RNA 稳定得多（不怕 RNase、不怕碱），所以选择条件可以更狠。幻灯片的诚实话：<b>它确实很费事，但富集情况在整个选择过程里是被持续监测的。</b><span class="pg">L9B s.15–17</span>',
  good:'<b>这一节最值钱的一句</b>，它回答「定向进化到底比理性设计强在哪」：Giacobelli et al., Mol Biol Evol 2022 体外进化核糖体蛋白 <b>L11 的 C 端结构域</b>结合 <b>5S rRNA</b>，发现原来的 <b>Arg–RNA</b> 相互作用可以换成<b>由金属离子搭桥的 Glu–RNA</b> 相互作用。直觉上蛋白靠<b>正电</b>（Arg、Lys）去中和 RNA 的磷酸骨架，而这里找到的是<b>一个带负电的残基</b>。<b>理性设计永远不会提出这个方案，因为它被我们现有的理论挡住了；进化不受这个约束。</b>（这段在 beyondPoints。）'},
 {n:'08', t:'SELEX · 根本不需要连接',
  big:'<b>对一条适体来说，基因型和表型是同一个分子。</b>所以没有什么需要连——这一条反过来解释了另外三种技术为什么存在',
  en:'“SELEX stands for Systematic Evolution of Ligands by EXponential enrichment. The slide says that no linkage is required here, because RNA can be sequenced. For an aptamer the genotype and the phenotype are the same molecule. The RNA folds into a shape that binds the target, and that same molecule can be reverse transcribed and amplified.”',
  note:'谁做的：<b>Larry Gold、Jack Szostak、Gerald Joyce，1990 年代</b>，RNA 的体外进化。幻灯片说它是<b>蛋白展示选择技术的灵感来源</b>。<span class="pg">L9B s.10–11</span><br><b>适体（aptamer）</b>：短的合成<b>单链</b>寡核苷酸，能结合<b>小分子、金属离子、蛋白</b>。例子是对 <b>GTP</b> 的高亲和力 RNA 适体（Carothers et al., RNA 2006）。相对抗体的优势：<b>免疫原性低、更便宜、更稳定、生成周期更短</b>。<br>循环特别干净：<b>结合 → 洗脱 → RT-PCR 扩增 → 体外转录 → 下一轮</b>，所以它比蛋白展示技术早得多。<br><b>把这一条反过来用</b>：蛋白<b>没有</b>这个性质，它不能自己扩增，所以必须人为绑一段核酸上去。<b>SELEX 是灵感，展示技术是给蛋白补上 RNA 本来就有的那个能力。</b>（这句在 beyondPoints。）'},
 {n:'09', t:'液滴区室化 · 唯一能选催化剂的那个',
  big:'⚠ <b>展示方法选的是结合，不是催化。</b>拿「谁抓得最紧谁留下」去选酶，会<b>挑出产物抑制最严重的那些</b>',
  en:'“In vitro compartmentalisation achieves the linkage by compartmentalisation, and unlike the display methods it is great for selection of catalysts. Each droplet is in effect a cell-like compartment performing only the one reaction to be selected. The emulsion is about two micrometres, made with oil, detergents and emulsifier. If it is done properly there is on average only one library member per droplet.”',
  note:'<b>为什么展示方法选不出酶</b>：噬菌体、核糖体、mRNA 展示的逻辑都是同一条——<b>抓得住就留下</b>。这对结合子（抗体、适体、亲和配体）完全正确，<b>但对酶正好反了</b>：酶的价值在<b>周转</b>，催化完一个就放掉去催化下一个，<b>高效的酶恰恰不抓着自己的产物</b>。（这一整段在 beyondPoints；幻灯片只写了「不像展示方法，它很适合选催化剂」这一句。）<br><b>液滴怎么解决</b>：把<b>一个基因、它表达出来的蛋白、底物</b>一起关进一个油包水液滴。<b>产物跑不出去所以会累积</b>，液滴按产物量变色或发荧光，<b>按荧光强度或吸光度分选液滴</b>，再把里面的基因回收扩增。<b>量到的是一个酶在给定时间里做出了多少产物，也就是真的催化效率。</b><br>用途全是酶：<b>水解酶、氧化还原酶、醛缩酶、转移酶、异构酶</b>。<span class="pg">L9B s.18–19</span>',
  warn:'⚠ <b>一个液滴里只能有一个成员，这不是可选项。</b>两个基因在同一个液滴里，你就分不清信号是谁做的，<b>基因型–表型连接当场断掉</b>。占据率靠稀释按<b>泊松分布</b>控制。'},

 {g:'算术 · 这一节的三个数都要会算', gn:'这一讲的论证是靠数撑起来的：<b>库能做多大 · 要筛多少个 · 序列空间跑得有多快</b>。<b>三条都给了式子和推导，背之前先看懂。</b>'},
 {n:'10', t:'文库的物理天花板',
  big:'<b>合成 10¹⁸ → 进细胞只剩 10⁶–10⁸ → 体外展示回到 10¹³。</b>中间那个悬崖，整个是「细胞」两个字',
  en:'“Oligo synthesis at a five micromole scale gives about ten to the eighteen molecules, so the chemistry is never the limit. Subcloning into cells drops that to ten to the six up to ten to the eight. In vitro display bypasses the cell and reaches ten to the thirteen. The cliff in the middle is the cell.”',
  note:'三个数都在幻灯片上，可以放心报。<span class="pg">L9A s.25–26</span>幻灯片对任何文库都问同样四个问题：<b>做得出来吗？怎么质检？筛得动吗？要筛多少个才算覆盖？</b><br><br><b>=== 公式和推导（背之前先看懂这一段）===</b><br><b>式子</b>：能饱和突变几个位点，由 <code>D<sup>k</sup> ≤ N</code> 定。<br><b>D</b> 是每个位点的简并度（NNN 是 64，NNK 是 32）· <b>k</b> 是随机化的位点数 · <b>N</b> 是你实际拿得到的独立克隆数。<br><br><b>四步</b>：<br>① <b>合成从来不是瓶颈</b>：10¹⁸ 比任何文库都大。<br>② 从 10¹⁸ 掉到 10⁸，<b>整整十个数量级，全部被「DNA 必须进活细胞」这一步吃掉</b>。就算大规模电转，最好也就 10⁹–10¹⁰，日常 10⁸ 已经很好。（这一句在 beyondPoints。）<br>③ 把 <code>N = 10⁹</code> 代进 <code>32<sup>k</sup> ≤ N</code>：<code>32⁵ ≈ 3.4×10⁷</code> <b>轻松</b>；<code>32⁶ ≈ 1.1×10⁹</code> <b>勉强</b>；<code>32⁷ ≈ 3.4×10¹⁰</code> <b>超了</b>。<br>④ 所以 NNK 饱和突变的<b>实际上限是 5–6 个位点</b>。幻灯片那个例子里「活性口袋有 7 个残基」之所以是个问题，就在这里。（这一步的反推在 beyondPoints。）<br><br><b>=== 一句话理解 ===</b><br><b>挡住你的不是化学，是细胞壁。</b>十个数量级的落差只有一个原因：你得把 DNA 塞进一个活的东西里面。<b>体外展示的全部意义就是把这一步删掉</b>，天花板立刻从 10⁸ 跳回 10¹³，五到六个数量级。<b>第 9-B 讲之所以存在，就是因为这一条。</b>',
  warn:'⚠ <b>别把「体外」和「库大」画等号</b>——方法对比表自己就有反例：<b>液滴是体外的，上限只有 10⁹–10¹⁰，比噬菌体展示还低</b>。它换来的不是大小，是<b>能选催化</b>。'},
 {n:'11', t:'覆盖度 · 要筛的比库里有的多',
  big:'<b>文库 4096 个成员，要筛 12269 个克隆</b>，正好三倍。因为抓完是放回去的',
  en:'“I have to screen more clones than the library has members. Sampling is random and with replacement, so some variants come up twice while others never come up at all. For ninety-five per cent coverage I need three times the library size. The lecture also says plainly that you should beware you might not be searching the whole library.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段）===</b><br><b>幻灯片给了两条式子，其实是同一条</b>：<br><code>N = ln(1 − P) / ln(1 − 1/n)</code> 和 <code>L = −V · ln(1 − F)</code><br><b>N（或 L）</b>是你要筛的克隆数 · <b>n（或 V）</b>是文库里有多少种变体 · <b>P（或 F）</b>是你要求的覆盖概率。<br><br><b>四步推导</b>（他问「这个三倍是哪来的」就照这个说）：<br>① 每挑一个克隆，都是从池子里<b>随机抓一个，而且抓完放回去</b>。所以某个特定变体<b>这一次没被抓到</b>的概率是 <code>1 − 1/n</code>。<br>② 抓 N 次都没抓到它的概率是 <code>(1 − 1/n)<sup>N</sup></code>。<br>③ 要求它<b>至少被抓到一次</b>的概率不低于 P，就是 <code>(1 − 1/n)<sup>N</sup> ≤ 1 − P</code>。两边取对数（对数是负的，不等号翻向）→ <code>N ≥ ln(1 − P) / ln(1 − 1/n)</code>。<br>④ 代数：<code>n = 4096</code>、<code>P = 0.95</code> → <code>N = ln(0.05) / ln(1 − 1/4096) = 12269</code>。<b>这就是幻灯片上那个算例。</b><br><b>两条式子为什么一样</b>：n 很大时 <code>ln(1 − 1/n) ≈ −1/n</code>，代进去就得到 <code>N ≈ −n·ln(1 − P)</code>，正是第二条。<br><b>倍数表（跟文库多大无关）</b>：1 倍 → 63% · <b>3 倍 → 95%</b> · 4.6 倍 → 99% · 6.9 倍 → 99.9%。<br><br><b>=== 一句话理解 ===</b><br><b>这是集邮问题：你要集齐一套卡，买的包数一定远多于卡的种类，因为你会一直抽到重复的。</b><br>所以「我做了 10⁶ 个克隆」这句话<b>不等于</b>「我有 10⁶ 种变体」。<b>报克隆数不报覆盖度，是这一节最典型的失分。</b><br>（倍数表和集邮的说法在 beyondPoints；公式和那个算例都在幻灯片上。<span class="pg">L9A s.8, s.27</span>）',
  good:'<b>狠的推论，说出来很加分</b>：前面那个 7 位点 NNK 文库有 <b>3.4×10¹⁰</b> 种变体，95% 覆盖要筛 <b>10¹¹</b> 个克隆，<b>体内方法一个都做不到</b>。三条出路：<b>缩小文库 · 改用体外展示 · 或者承认你只搜了一部分</b>。幻灯片自己写的就是最后这一条。'},
 {n:'12', t:'序列空间跑得比文库快',
  big:'7 个位点全随机（NNN）要 <b>64⁷ ≈ 4.4×10¹²</b> 次转化，做不到。而其中 <b>99.97% 是同义冗余</b>',
  en:'“To fully randomise seven codons as NNN requires sixty-four to the seventh, about four times ten to the twelve transformations. That is impossible. But seven positions give only twenty to the seventh distinct proteins, which is about one point three times ten to the nine. So most of those transformations are duplicates at the protein level.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段）===</b><br><b>式子</b>：DNA 层面是 <code>D<sup>k</sup></code>，蛋白层面是 <code>20<sup>k</sup></code>。<br><b>D</b> 是简并密码子的简并度 · <b>k</b> 是随机化的位点数 · <b>20</b> 是氨基酸种类数。<br><br><b>四步</b>：<br>① 7 个位点用 <b>NNN</b>：DNA 层面 <code>64⁷ = 4.4×10¹²</code>。幻灯片的原话是「至少需要 4×10¹² 次转化，做不到」。<br>② 同样 7 个位点，<b>蛋白层面只有</b> <code>20⁷ = 1.3×10⁹</code>。<br>③ 两者相除：<code>4.4×10¹² ÷ 1.3×10⁹ ≈ 3400</code>。<b>平均 3400 条 DNA 序列编码同一条蛋白</b>，也就是 <b>99.97% 的转化在重复制造你已经有的蛋白</b>。<br>④ <b>NNK</b> 把第三位限成 <b>G 或 T</b>，简并度 <code>4×4×2 = 32</code>，<b>仍然编码全部 20 种氨基酸</b>；<code>32⁷ = 3.4×10¹⁰</code>，比 NNN 少 <code>(64/32)⁷ = 2⁷ = 128</code> 倍。<br><br><b>=== 一句话理解 ===</b><br><b>NNN 换成 NNK 省下的这 128 倍是白捡的：你扔掉的全是同义词，一个氨基酸都没少。</b><br>还白送一条：<b>终止密码子从 3 个（TAA、TAG、TGA）减到 1 个（TAG）</b>。每一个带终止密码子的成员都是一个<b>截短的废品</b>，占着你的文库容量和筛选工作量。<b>所以 NNK 是行业默认——它没有任何代价。</b>（3400 这个比值和 128 倍在 beyondPoints；4×10¹²、64、32、20 种、1 个终止密码子都在幻灯片上。<span class="pg">L9A s.4–9</span>）',
  good:'<b>还有两条压缩路径，三条其实是同一个动作</b>：② <b>按化学性质限字母表</b>——<b>VAN</b> 给 6 个极性残基（Lys、Asn、Gln、His、Glu、Asp），<b>NTN</b> 给 5 个非极性残基（Met、Leu、Ile、Val、Phe），<b>两个都不含终止密码子</b>；③ <b>少随机化几个位点</b>，用结构挑出真正接触底物的那三四个。<br><b>三条都是同一件事：用你已有的知识换文库大小。</b>这正好回到决策树那条轴（第 14 点）。'},
 {n:'13', t:'⚠ 文库从来不是无偏的',
  big:'<b>你做了多少个克隆，不等于你有多少种变体。</b>而且在你开始筛之前，这个库已经被筛过一遍了',
  en:'“You expect that the library is unbiased and that is usually not true, starting from the synthesis. Different companies have different nucleobase bias, and more bias is introduced during PCR and cloning. Two methods of quality control exist. Sanger sequencing of individual colonies gives tens of clones, and next generation sequencing of the pool gives up to twenty million reads.”',
  note:'<b>三个偏倚的来源</b>（这一层在 beyondPoints；幻灯片只说「偏倚存在，而且从合成就开始」）：<br>① <b>合成</b>：固相合成一次加一个碱基，要简并的那一步就<b>同时投进几种保护过的核苷酸让它们随机竞争</b>。四种核苷酸的<b>偶联效率天生不同</b>，所以<b>投 25% 不等于掺进去 25%</b>，而且不同厂家的偏倚模式不一样。（这也顺带解释了掺杂密码子为什么可行——你控制的就是投料比。）<br>② <b>PCR</b>：GC 富集的序列和会形成二级结构的序列扩增得差，池子就富集了「好扩的那些」。<br>③ <b>克隆与转化</b>：连接和转化效率都依赖序列；<b>更要命的是，对宿主有毒的变体在转化这一步直接消失了</b>。<b>也就是说，在你开始筛之前这个文库已经被筛过一遍，而被拿掉的恰恰是生物学效应最强的那些。</b><span class="pg">L9A s.10, s.28</span>',
  warn:'⚠ <b>NGS 在这里不是用来把成员一个个数出来的</b>——文库通常远大于两千万条读数。它是用来估计<b>偏倚有多大、错误率多高、真实的异质性有多少</b>。<b>知道自己的库有多歪，胜过假装它是均匀的。</b>'},

 {g:'怎么造那一堆变体', gn:'这一幕只有一条轴：<b>你已经知道多少。</b>知道得越多，库越小越精确；知道得越少，库越大越粗放。'},
 {n:'14', t:'决策树 · 两个问题定四类方法',
  big:'<b>有没有起始序列？知不知道该改哪里？</b>四种组合正好对应四类方法。而真正的轴只有一条：<b>你已经知道多少</b>',
  en:'“Before naming a method I would ask two questions, because their four combinations give the four classes of approach. Do I have a starting sequence, and do I know where I want to mutate? If I know exactly which residues, that is site-directed mutagenesis. If I know the positions but not the amino acids, that is saturation mutagenesis with degenerate oligonucleotides. If I want mutations but do not know where, that is error-prone PCR or a mutator strain.”',
  note:'还有两支：<b>想把已有的多样性重新组合</b> → 基因重排；<b>根本没有起始序列</b> → 随机文库或组合文库。<br><b>那张决策树在 30 页的讲义里出现了五次</b>（第 3、11、16、21、29 页），每讲完一类方法就回到它一次。<b>重复五次就是在说：这张图是这一讲的骨架。</b><span class="pg">L9A s.2–3, s.11, s.16, s.21, s.29</span><br><b>真正的轴</b>：知道得越多 → 越靠近定点突变（精确、库小、好筛）；知道得越少 → 越靠近随机文库（粗放、库巨大、筛起来是场硬仗）。<b>所以这不是四个并列选项，是一条从「精确小库」到「粗糙大库」的连续谱，而你的位置由你的无知程度决定。</b>（这条轴在 beyondPoints。）',
  good:'<b>被问「怎么给这个酶引入多样性」时，先把这两个问题问出来，再给方法。</b>这比直接报一个方法名好得多——它说明你知道<b>方法是从需求推出来的</b>，不是背下来的。'},
 {n:'15', t:'易错 PCR · 为什么目标是每个基因 1–5 个突变',
  big:'<b>太少，库里大半是野生型；太多，几乎每个变体都是死的。</b>1–5 个是这两种失败方式之间的经验最优',
  en:'“Error-prone PCR is for when you want mutations but do not know where. You amplify the target region under error-prone conditions while the rest of the vector is amplified normally. It suits properties that are not localised, and stability is the standard example. The mutator strain E. coli XL-1-Red does the same thing far more cheaply.”',
  note:'<b>怎么把一个 PCR 做成易错的</b>（幻灯片根本没讲这一步，整段在 beyondPoints）：前提是用<b>没有校对活性的聚合酶</b>——<b>Taq，绝不能用 Pfu 或 Phusion</b>，因为没有 3′→5′ 外切酶活性就没有纠错。<b>有校对的酶会把你做的其他一切都撤销掉。</b>然后四个旋钮：<b>不平衡的 dNTP</b>（让某一种核苷酸优先被掺错）· <b>加锰离子</b>（部分替代镁，大幅降低碱基配对的保真度）· <b>提高镁</b>（稳住错配的引物–模板对）· <b>多跑几个循环</b>（错误是累乘的）。<b>聚合酶那一格接卡 taq。</b><br><b>为什么是 1–5 个</b>：少了，大半个文库是野生型，白白占着筛选容量；多了，几乎每个变体都失活，因为<b>绝大多数随机突变是有害的</b>，好的那几个淹死在一堆死的里面。<b>这也正是定向进化为什么要走很多小步，而不是一次猛突变。</b>（这段也在 beyondPoints。）<br><b>XL-1-Red 的基因型</b>：缺三条修复途径——<b>mutS</b>（错配修复）、<b>mutD</b>（Pol III 的校对 ε 亚基）、<b>mutT</b>（清理氧化核苷酸，去掉 8-oxo-dGTP）。用法：质粒转进去、传几代、再把 DNA 提出来。商品化试剂盒例如 Agilent GeneMorph II。<span class="pg">L9A s.12–15</span>',
  warn:'⚠ <b>突变株的代价是无差别地突变整个质粒</b>，包括<b>抗性基因、复制起点、启动子</b>。抗性基因坏了那个克隆就死了；<b>启动子坏了更糟——你会把一个其实没表达的变体判成「无活性」。</b>（这一条在 beyondPoints。<b>表达那一半接卡 pe-expr。</b>）',
  good:'<b>选哪种方法有一条干净的判据</b>：<b>易错 PCR 适合非局部的性质</b>——热稳定性是整条蛋白的集体性质，有益突变可能出现在表面、界面或环上，<b>事先无从知道在哪</b>；<b>饱和突变适合局部的性质</b>——底物特异性高度局部，直接打活性口袋效率高得多。'},
 {n:'16', t:'基因重排 · 每一块砖都是好砖',
  big:'把<b>同源基因</b>用 DNase I 随机打碎，再跑一个<b>没有引物的 PCR</b>：片段互为引物，延伸时在亲本之间跳，于是得到<b>嵌合体</b>',
  en:'“Gene shuffling recombines homologous DNA sequences during in vitro molecular evolution, and it is nicknamed sexual PCR. You cut a set of homologous genes into fragments with DNase one. Then you run a PCR with no primers, so the fragments prime each other through their shared homology. Extension jumps between parents and generates recombinant chimeras.”',
  note:'最后用<b>外侧引物</b>把全长扩回来。机制出自 <b>Stemmer 1994</b>（这段在 beyondPoints；幻灯片上有的是「重组同源 DNA 序列」这一句、诺奖、那句引语和 P450 的例子）。<b>拿来打碎的可以是不同物种的直系同源基因，也可以是你上一轮筛出来的那一批好突变体。</b><br><b>为什么它比随机突变强</b>：易错 PCR 每次走一小步，而<b>大多数小步是有害的</b>；基因重排重新组合的是<b>进化（或者你上一轮选择）已经验证过有益的突变</b>。<b>每一块砖都是好砖，你只是在改怎么叠。</b><br><b>为什么「有性」这个比喻是准确的而不是修辞</b>：有性生殖的核心优势正是<b>重组</b>——把不同个体身上的有益等位基因凑到一起，同时把有害突变甩掉。<b>重排对基因做的是同一件事，只不过在试管里。</b><span class="pg">L9A s.17–20</span>',
  good:'<b>Frances H. Arnold，2018 年诺贝尔化学奖，得奖理由就是「酶的定向进化」。</b>幻灯片引了她一句话：<i>Science, like all human endeavors, is evolutionary. We build by adding to and recombining what is already there.</i> 案例是<b>细胞色素 P450 家族</b>（含血红素的氧化还原酶，能羟化很广的一批底物，用在精细化学品合成和人类药物代谢产物的生产上）。<br><b>她的洞见一句话</b>：<b>与其我们自己设计（我们其实设计不好），不如让进化替我们设计。</b>这句话同时是这整张卡的地基，也是 why 三层的落点。'},

 {g:'从零开始的那一支 ＋ 收尾', gn:'⚠ <b>de novo design 是考场上真问过、当时没答上来的那个词。</b>它在讲义里不是一个标题，是折叠数那条推理链的结论——<b>但它必须能独立回答。</b>'},
 {n:'17', t:'⚠ 实测 · de novo design',
  big:'<b>定向进化从一个已经能用的东西出发去改它；de novo design 从零出发，照着指定的结构造一条序列</b>。共同点：<b>两者都是去够进化没去过的那片序列空间</b>',
  en:'“De novo design means building a sequence from scratch so that it folds into a structure I specified. Directed evolution starts from something that already works and improves it. De novo design starts from nothing. It is possible because nature has explored very little of protein space. About two thousand folds are known, against more than three hundred and fifty million sequences in UniProt.”',
  note:'<b>那条推理链要能一口气说完，它才是这个词可回答的原因</b>：<br>① <b>结构比序列保守得多</b>——两条只有 <b>15%</b> 同一性的序列还能折成几乎一样的形状，所以<b>折叠空间高度简并</b>。<br>② UniProt 有<b>三亿五千万条以上</b>的独特序列、AlphaFold 数据库有约 <b>2.15 亿</b>个结构，而被表征过的折叠只有 <b>1000–2000 种</b>。（估计出自 1990 年代的 Chothia 等人，SCOP 和 CATH 的统计一直支持这个数，而且<b>新折叠的发现速度明显在变慢</b>。）<br>③ 所以<b>天然蛋白只是进化碰巧走过的那条路，不是所有可能的蛋白</b>。进化受两条约束：<b>只能从已有的东西一步一步改</b>（路径依赖），而且<b>每一个中间态都必须活得下来</b>（可进化性）。<br>④ <b>结论那一句就是答案</b>：<b>自然界没有的折叠，不等于不可能的折叠，它只是进化没走到的地方。</b>这就是 <b>de novo design 和随机组合文库在理论上站得住的理由</b>。<br>⑤ 前沿：<b>深度学习正在照亮「暗蛋白空间」</b>（Nature 2023, 622:646–653）。Hecht 那篇的标题本身就是这个问题：<i>Are natural proteins special? Can we do that?</i>（Curr Opin Struct Biol 2018）<span class="pg">L9A s.21–22</span>',
  good:'<b>顺势给一个课上真有的例子，比空谈概念强得多</b>：<b>二元图案（binary patterning）</b>就是 de novo 的实做版。只规定每个位置<b>是极性还是非极性</b>，具体是哪个氨基酸交给简并密码子——极性用 <b>VAN</b>（Lys、His、Glu、Gln、Asp、Asn），非极性用 <b>NTN</b>（Met、Leu、Ile、Val、Phe），<b>两个都不含终止密码子</b>。<br><b>为什么够用</b>：折叠的首要驱动力是<b>疏水效应</b>（疏水的埋进去、亲水的朝外），而 α 螺旋每 <b>3.6</b> 个残基转一圈，所以只要极性按这个周期交替，就自动得到一个<b>两亲螺旋</b>，四条这样的螺旋叠成一个<b>四螺旋束</b>。Fisher et al., PLOS ONE 2011，用<b>回补大肠杆菌营养缺陷型</b>来选。<span class="pg">L9A s.23–24</span>（为什么二元图案行得通，这一段在 beyondPoints。）',
  warn:'⚠ <b>这个例子里那个数字一定要跟着说</b>：<b>理论文库 5×10⁵²，亚克隆之后实际只剩 1.5×10⁶</b>——<b>差 46 个数量级</b>。它是「<b>设计空间</b>」和「<b>能做出来的文库</b>」是两个完全不同的量这件事最狠的一个例证，也正好接回第 10 点那三个天花板。'},
 {n:'18', t:'六种方法一张表 ＋ 三条原则',
  big:'四条轴看：<b>体内还是体外 · 靠什么连 · 文库上限 · 最适合选什么</b>',
  en:'“I would compare them on four axes. Where they run, how the genotype and phenotype are linked, how large a library they support, and what they are best at selecting. Three principles carry most of it. In vitro beats in vivo on size, covalent beats non-covalent on conditions, and display suits binders while droplets suit catalysts.”',
  note:'<b>三条原则各管一件事，不要互相顶替</b>：<br>① <b>体外胜在大小</b>，因为它绕开了转化瓶颈——从 10⁸ 跳到 10¹³ 以上，<b>这一条推动了全部体外方法的出现</b>。<br>② <b>共价胜在条件</b>，因为共价融合扛得住会让三元复合物散架的条件，所以可以在生理温度、异常 pH 或者有去污剂的情况下选。<b>你是用操作复杂度买来条件自由度的。</b><br>③ <b>结合子用展示，酶用液滴</b>，因为<b>催化不是结合</b>。<b>这一条最可能被考，因为它是概念性的，不是事实性的。</b>（三条原则在 beyondPoints。）<span class="pg">L9B s.20–21</span><br><b>接回她自己的课</b>：无细胞那一讲里用 flexizyme 做的<b>环肽文库</b>，就是用这里的方法选的——<b>RaPID 系统就是 flexizyme 化学 ＋ mRNA 展示</b>。两讲是设计好要在这里碰头的。',
  tbl:{head:['方法','体内 / 体外','靠什么连','文库上限','最适合选什么'],
       rows:[['细菌体内选择','体内','细胞这个区室','约 10⁸','能跟存活挂钩的性状（抗性、回补）'],
             ['噬菌体展示','体内','病毒颗粒','10¹⁰–10¹¹','结合子（抗体、多肽）'],
             ['SELEX','体外','<b>不需要</b>（核酸自己就是表型）','10¹⁴–10¹⁵','核酸适体'],
             ['核糖体展示','体外','非共价三元复合物','10¹²–10¹³','结合子，只能温和条件'],
             ['mRNA 展示','体外','共价（嘌呤霉素）','10¹³–10¹⁴','结合子，苛刻条件也行'],
             ['液滴 IVC','体外','人工区室','10⁹–10¹⁰','<b>催化剂</b>']]},
  good:'幻灯片的收尾句可以直接引，而且它很适合当这道题的句号：<i>Think and be creative, you can always come up with something new and better.</i>'}
],

end:'<b>这张卡的用法：</b>被问到定向进化、展示技术、文库、筛选里的任何一件事，先摆<b>两条轴</b>——<b>蛋白和编码它的基因必须连在一起</b>，以及<b>一个一个看还是让它自己活下来</b>。<br>然后<b>只讲他问的那一块，不要六种方法一起倒</b>。<br><b>五个陷阱随时准备好</b>：<b>screen 和 selection 差几个数量级 · 克隆数不等于变体数 · 95% 覆盖要筛三倍 · 展示选的是结合不是催化 · 体外不等于库大（液滴就是反例）</b>。<br>⚠ 被问 <b>de novo design</b>（考场上真问过）就走那条链：<b>结构比序列保守 → 折叠只有一两千种 → 天然蛋白只是进化走过的那条路 → 自然界没有的折叠不等于不可能的折叠</b>。',

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先给讲义原话的定义，再把整个答案的形状摆出来',
  p:['“Directed evolution is a series of rounds of screens or selections, separated by further diversification. Series means that one round does not count. Each round starts from the winners of the round before, because each round can only take a small step.”',
     '“The answer has two axes. The first is the link between genotype and phenotype. The protein and the gene encoding it must stay physically attached, or I cannot recover the winner. The second axis is whether I look at variants one at a time or make them survive. That is the difference between a screen and a selection, and it decides how large a library I can use at all.”'],
  note:'<b>定义是幻灯片的原话</b>，可以直接引，不必改写。<b>「一系列」和「中间隔开」这两个词是承重的</b>：不交代它们，单轮筛选也会被叫成定向进化，而迭代正是这个词的全部内容。<br><b>「两条轴」这个形状是给他的地图</b>——他听完就知道可以往哪一条挖，而两条你都备好了。'},
 {tag:'段 2 · general', h:'第一条轴：为什么必须连，以及四种连法',
  p:['“It is necessary to have a linkage between the phenotype exhibited by the protein and the gene that encodes it. The reason is that a protein cannot be amplified and it cannot be sequenced. Suppose I find one superb binder among ten to the thirteen molecules. Without its gene I can neither read it nor make more of it.”',
     '“Every display method is a different answer to that one question. In bacteria and in phage the answer is a compartment, because the cell or the virus particle holds both. Ribosome display uses a non-covalent link. The ribosome stalls on its own message and holds the new chain as well. mRNA display uses a covalent link made by puromycin. A droplet is an artificial compartment that works like a cell.”',
     '“So a method I have never met can still be placed. I only have to ask what is holding the two together.”'],
  note:'<b>第三句是这一段最值钱的东西</b>：它把一张技术清单变成一条可以推的判据。<b>说出来他就知道你不是在背六个名字。</b><br>⚠ 「为什么需要连接」那段推理在笔记的 beyond 那一层，幻灯片上只有「必须有连接」这句结论。被问出处就这样说。'},
 {tag:'段 3 · 稍展开', h:'第二条轴：筛选和选择，以及三个撑着它的数',
  p:['“A screen is a growth condition where both mutant and wild type can grow but can be distinguished phenotypically. A selection allows selective propagation, so phenotypes that pass the pressure are preserved and the rest are purged. In a screen I test every variant. In a selection I test nothing, because the experiment removes the failures for me.”',
     '“That difference decides the size of library I can use. Subcloning into cells gives ten to the six up to ten to the eight, because the DNA has to enter a living cell. In vitro display bypasses the cell and reaches ten to the thirteen. Oligo synthesis gives ten to the eighteen, so the chemistry was never the limit.”',
     '“And I have to screen more clones than the library has members. Sampling is random and with replacement, so some variants come up twice while others never come up at all. For ninety-five per cent coverage I need three times the library size.”'],
  note:'<b>三句各带一个数，而三个数是连着的</b>：筛选受探测能力限制 → 所以库不能太大 → 而库再小也要多筛三倍。<b>能把这三句连起来说，比分别报三个数值钱得多。</b><br>⚠ <b>别把「体外」说成「更好」</b>：液滴也是体外，上限只有 10⁹–10¹⁰。体外买到的是<b>大小</b>，液滴买到的是<b>能选催化</b>，两件事不能混。'},
 {tag:'段 4 · 留口子', h:'落到她自己每周在做的那一步：yeast display 选完之后',
  p:['“The place this touches my own work is yeast display. Each cell carries one variant on its surface, so the cell is the compartment and the plasmid inside it is the genotype. I titrate labelled antigen against the cells and sort them on how much they bind.”',
     '“So what my selection is actually sorting on is a dissociation constant. And the winner still has to be made again as soluble protein in E. coli before I can measure that constant properly. Display tells me which variant binds. It does not give me protein in a tube.”'],
  note:'<b>三个口子全在主场</b>：<b>K<sub>d</sub></b> 接卡 <b>02</b>；<b>把赢家重新做出来</b>接卡 <b>pe-expr</b>；<b>捞出来</b>接卡 <b>pe-pur</b>；<b>那张图</b>接卡 <b>land</b>。<br><b>「display 选出来的东西还得重新做一遍蛋白」这一句本身就很好</b>——它说明她知道<b>筛选和生产是两件事</b>，而这正是这一科想听到的。<br>⚠ 顺手可以自评一句：<b>酵母展示按细胞一个一个过探测器，所以严格说它是一个跑在选择那种吞吐量上的筛选。</b>能主动说出这一句，就等于告诉他你分得清那两个词。'}
],

why:{
 rungs:[
  ['为什么一定要把蛋白和它的基因绑在一起？','因为<b>功能在蛋白身上，而蛋白既不能扩增也不能测序</b>。十万亿个分子里挑出一个好的，<b>拿不到它的基因就等于什么都没挑到</b>——你既读不出它是什么，也做不出第二份。'],
  ['那为什么不能干脆把那个好蛋白测序了事？','因为<b>量太少</b>。一轮选择结束时你手里可能只有几个分子，而<b>核酸可以用 PCR 从几个分子扩到几微克，蛋白没有任何对应的操作</b>。<b>所以中心法则的方向决定了工程的方向：能复制的那一半必须被带着走。</b>（SELEX 之所以不需要连接，正是因为那里两半本来就是同一个分子。）'],
  ['那为什么非得「造一堆再挑」，不能直接设计出来？','因为<b>我们对蛋白的理解还不够</b>。Arnold 的洞见就是这一句：与其我们自己设计（我们其实设计不好），不如让进化替我们设计。<b>而进化本身也受两条约束</b>：只能从已有的东西一步一步改（路径依赖），而且每一个中间态都必须活得下来。<b>这两条约束同时解释了为什么自然界只有一两千种折叠，以及为什么 de novo design 有意义。</b>']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that we are asking why evolution reached the sequences it did and not others, and that is evolutionary theory rather than protein engineering.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is directed evolution?',
 mean:'<b>最短的问法，也是最可能的那一个。</b>先给讲义原话的定义，再给两条轴，然后<b>停下来等他挑一条</b>。',
 say:'“Directed evolution is a series of rounds of screens or selections, separated by further diversification. One round does not count, because each round can only take a small step. Two things make it work. The protein and the gene encoding it must stay physically attached, and the good variant has to be either looked at or made to survive.”',
 tail:'<b>说完就停。</b>这是八分答案。他接下来挑哪条轴，你就只讲那一条——<b>六种方法一起倒，等于自己把终点往前搬。</b>'},

{q:'What is the difference between a screen and a selection?',
 mean:'<b>这是这张卡的第一个陷阱。</b>他要的不是两个定义，是<b>那几个数量级的落差</b>。',
 say:'“A screen is a growth condition where both mutant and wild type can grow but can be distinguished phenotypically. A selection allows selective propagation, so the phenotypes that pass the pressure are preserved and the others are purged. In a screen I test every variant, so I am limited by detection. In a selection I test nothing, so I am limited only by the number of molecules I can handle.”',
 tail:'<b>数量级要跟着给</b>：筛选的上限是<b>探测速度</b>——96 孔板一天几千个，FACS 一天 10⁷–10⁸，<b>而 FACS 也是一个一个过探测器的</b>。选择的上限是<b>分子数</b>，体外可以到 <b>10¹⁴</b>。<br><b>筛选换来的是</b>：任何能测的东西都能筛、拿到的是定量数据、<b>可以故意挑第二名</b>。<b>选择难在设计</b>：你得把「我想要的功能」翻译成「活得下来」。'},

{q:'Why do display technologies exist at all?',
 mean:'这是整张卡的脊梁。答案从<b>中心法则</b>起步，不从技术名字起步。',
 say:'“Because the function lives in the protein, and a protein cannot be amplified and cannot be sequenced. Suppose I find one superb binder among ten to the thirteen molecules. Without its gene I can neither read it nor make more of it. So the protein has to be tied physically to the nucleic acid encoding it. Then picking the protein also hands me the gene, and I can amplify it and sequence it.”',
 tail:'<b>顺手给四种连法</b>：病毒颗粒 · 停在自己信使上的核糖体 · 和信使之间的共价键 · 当人工细胞用的液滴。<br><b>再加一句判据</b>：碰到没见过的方法，只问「<b>是什么东西把这两样摁在一起</b>」。'},

{q:'How large a library can you actually make?',
 mean:'他要的是<b>三个数外加中间那个悬崖</b>，不是一个数。',
 say:'“Oligo synthesis at a five micromole scale gives about ten to the eighteen molecules, so the chemistry is never the limit. Subcloning into cells drops that to ten to the six up to ten to the eight. In vitro display bypasses the cell and reaches ten to the thirteen. The cliff in the middle is the cell.”',
 tail:'<b>那十个数量级只有一个原因：DNA 必须进活细胞。</b>就算大规模电转也就 10⁹–10¹⁰。<b>体外展示的全部意义就是把这一步删掉。</b><br>⚠ 但<b>别把「体外」和「库大」画等号</b>：液滴是体外的，上限只有 10⁹–10¹⁰，比噬菌体展示还低。'},

{q:'Your library has 4,096 members. How many clones do you screen?',
 mean:'考的是<b>覆盖度</b>。答「4096」就是没算过。',
 say:'“Not four thousand and ninety-six, and that is the point of the question. For a ninety-five per cent chance that any given member has appeared, I need twelve thousand two hundred and sixty-nine clones. That is three times the library size. Sampling is random and with replacement, so some variants come up twice while others never come up at all.”',
 tail:'公式和推导在速背第 11 点。<b>倍数跟文库多大无关</b>：1 倍 → 63% · 3 倍 → 95% · 4.6 倍 → 99% · 6.9 倍 → 99.9%。<br><b>狠的推论</b>：7 位点 NNK 文库有 3.4×10¹⁰ 种变体，95% 覆盖要筛 10¹¹ 个克隆，<b>体内方法一个都做不到</b>。三条出路：缩小文库、改用体外展示、<b>或者承认你只搜了一部分</b>——幻灯片自己写的就是最后这条。'},

{q:'You want to evolve a better enzyme. Would you use phage display?',
 mean:'⚠ <b>这是最可能被考的一条，因为它是概念性的不是事实性的</b>：<b>催化不是结合。</b>',
 say:'“No, because display selects for binding rather than for catalysis. An enzyme is valuable because it turns over. It converts one substrate molecule, releases the product and moves on. So a rule of whoever binds tightest survives would pick out the enzymes with the worst product inhibition. I would use droplet compartmentalisation instead.”',
 tail:'<b>液滴怎么做</b>：油包水乳液，直径约 <b>2 µm</b>，用油、去污剂和乳化剂，靠稀释让平均<b>一个液滴一个成员</b>。<b>产物跑不出去所以会累积</b>，液滴按<b>荧光强度或吸光度</b>分选，再回收里面的基因。<b>量到的是一个酶在给定时间里做出多少产物，也就是真的催化效率。</b><br>用途全是酶：水解酶、氧化还原酶、醛缩酶、转移酶、异构酶。'},

{q:'Explain ribosome display and how you get the mRNA back.',
 mean:'考两样：<b>为什么省掉终止密码子能把它们摁在一起</b>，和 <b>EDTA 那一步为什么漂亮</b>。',
 say:'“You omit the stop codon, so no release factor binds and the ribosome stalls at the end of the message. It then holds a ternary complex of the mRNA, the ribosome and the new peptide. High magnesium and low temperature stabilise it. To recover the message I add EDTA. That chelates the magnesium away and the complex falls apart gently.”',
 tail:'<b>那条最容易被问的细节</b>：出口通道长 <b>30–40</b> 个氨基酸，所以要接一段<b>约 100 个氨基酸的无结构 C 端间隔肽</b>，不接的话蛋白还埋在隧道里，折不起来也结合不了。<br><b>EDTA 漂亮在哪</b>：它就是把维系复合物的那个条件反过来用，<b>不需要变性条件，核酸毫发无损</b>。同一个 EDTA 螯合在纯化卡上是<b>毁镍柱</b>的东西——化学一样，用途相反。接卡 <b>pe-pur</b>。'},

{q:'What is puromycin doing in mRNA display?',
 mean:'考的是<b>酰胺键不是酯键</b>，以及<b>它挂在信使的 3′ 端上</b>这一手。',
 say:'“Puromycin mimics the aminoacyl end of a tRNA, so the ribosome admits it and joins the growing chain to it. But the bond on puromycin is an amide rather than an ester. An amide cannot be hydrolysed or passed on, so the chain stops there and stays attached. The puromycin is carried on the three prime end of the mRNA itself.”',
 tail:'<b>所以每条蛋白被焊在自己那条信使上</b>，一个分子同时带着基因型和表型。<br><b>这正是嘌呤霉素当抗生素的机制</b>（提前终止肽链），mRNA 展示把毒性机制直接拿来当工具。<br>⚠ <b>幻灯片自己承认融合形成的确切机制未知</b>，这句可以照说，比硬编一个机制稳得多。'},

{q:'What is de novo protein design, and how is it different from directed evolution?',
 mean:'⚠ <b>实测：考场上真问过这个词，当时没答上来。</b>他要三件事：<b>它是什么 · 为什么可能 · 跟定向进化差在哪</b>。',
 say:'“De novo design means building a sequence from scratch so that it folds into a structure I specified. Directed evolution starts from something that already works and improves it. De novo design starts from nothing. It is possible because nature has explored very little of protein space. About two thousand folds are known, against more than three hundred and fifty million sequences in UniProt.”',
 tail:'<b>被追问「为什么可以从零开始」就走那条链</b>：结构比序列保守得多（15% 同一性还能折成同一个形状）→ 所以几亿条序列只对应 <b>1000–2000 种折叠</b> → <b>天然蛋白只是进化碰巧走过的那条路，不是所有可能的蛋白</b>（受<b>路径依赖</b>和<b>每个中间态都得活得下来</b>两条约束）→ <b>自然界没有的折叠不等于不可能的折叠，只是进化没走到</b>。<b>这就是 de novo 设计和随机组合文库在理论上站得住的理由。</b><br><b>共同点一句话</b>：两者都是去够<b>进化没去过的那片序列空间</b>，只是一个从已有的东西往外走，一个直接落进去。'},

{q:'Why did a Nobel Prize go to someone who let bacteria do the designing?', odd:1,
 mean:'问的是 <b>Frances Arnold 2018</b>，而真正的答案是那个洞见，不是那个奖。',
 say:'“Frances Arnold received the twenty eighteen Nobel Prize in Chemistry for the directed evolution of enzymes. Her central insight was that we do not understand proteins well enough to design them rationally. So it is better to let evolution do the designing for us. The slide quotes her saying that science is evolutionary and we build by recombining what is already there.”',
 tail:'她那条具体的技术是<b>基因重排</b>：DNase I 打碎同源基因 → <b>无引物 PCR</b>，片段互为引物 → 延伸在亲本之间跳 → 嵌合体 → 外侧引物扩回全长。案例是<b>细胞色素 P450 家族</b>。<br><b>为什么比随机突变强</b>：重排组合的是<b>已经被验证过有益的突变</b>。<b>每块砖都是好砖，你只是在改怎么叠。</b>'},

{q:'Why does a virus end up in a test tube full of antibodies?', odd:1,
 mean:'入口不像生化题，问的是<b>噬菌体展示</b>，而答案是那个「一个颗粒就是一个拆不开的包裹」。',
 say:'“That is phage display, the first display method, described in nineteen eighty-five. You splice the gene library into a gene encoding a phage capsid structural protein. The fusion protein is then shown on the outside of the particle and its DNA is packaged inside. One particle is therefore one genotype and phenotype package that cannot be taken apart.”',
 tail:'循环叫 <b>biopanning</b>：结合固定的靶标 → 洗 → 洗脱 → <b>感染大肠杆菌扩增</b> → 重复 <b>3–5</b> 轮，每轮加大洗涤强度。<b>噬菌体是活的，所以选出来的东西自己会扩增。</b><br>⚠ 要高亲和力就用<b>单价 pIII</b>（3–5 拷贝），不要 <b>pVIII</b>（约 2700 拷贝）——否则<b>亲合力效应</b>会让你选出一堆靠数量取胜的弱结合子。'},

{q:'Why would you deliberately use a bad copying enzyme?', odd:1,
 mean:'问的是<b>易错 PCR</b>，而承重的那句是<b>「有校对活性的酶会把你做的一切撤销掉」</b>。',
 say:'“Because I want mutations and I do not know where they should be. The precondition is a polymerase with no proofreading. That means Taq, and never Pfu or Phusion. Without a three prime to five prime exonuclease there is no error correction. A proofreading enzyme would simply undo everything else I did to the reaction.”',
 tail:'其他四个旋钮：<b>不平衡的 dNTP · 加锰（部分替代镁，大幅降低配对保真度）· 提高镁（稳住错配的引物–模板对）· 多跑几个循环（错误累乘）</b>。<b>这一整段幻灯片没讲，在笔记的 beyond 那一层。</b><br>目标是<b>每个基因 1–5 个突变</b>：少了大半是野生型，多了几乎全是死的。<b>聚合酶那一格接卡 taq。</b>'},

{q:'Why do people put enzymes into tiny drops of water in oil?', odd:1,
 mean:'问的是<b>液滴区室化</b>，而真正的考点是<b>催化不是结合</b>。',
 say:'“Because display methods select for binding and an enzyme is not valued for binding. An efficient enzyme releases its product and moves on to the next substrate. Inside a droplet the product cannot escape, so it accumulates and the droplet becomes fluorescent in proportion to turnover. Sorting droplets by fluorescence therefore measures catalysis directly.”',
 tail:'液滴直径约 <b>2 µm</b>，用油、去污剂和乳化剂做。<b>一个液滴平均只能有一个成员</b>，靠稀释按<b>泊松分布</b>控制——两个基因在一个液滴里，你就分不清信号是谁做的，<b>连接当场断掉</b>。'},

{q:'Why can RNA be evolved more easily than a protein?', odd:1,
 mean:'问的是 <b>SELEX</b>，答案一句话：<b>基因型和表型是同一个分子。</b>',
 say:'“Because for an aptamer the genotype and the phenotype are the same molecule. The RNA folds into a shape that binds the target, and that same molecule can be reverse transcribed and amplified. So no linkage is required at all. A protein has no such property, and that is the reason every display technology exists.”',
 tail:'循环干净得多：<b>结合 → 洗脱 → RT-PCR → 体外转录 → 下一轮</b>。所以 SELEX 比蛋白展示技术早得多，<b>幻灯片说它是那些技术的灵感来源</b>。<br>适体相对抗体：<b>免疫原性低、更便宜、更稳定、生成周期更短</b>。Gold、Szostak、Joyce，1990 年代。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'⚠ 实测 · 考场上真被问过的', gn:'这一组不是猜的。<b>de novo design 是真问过、当时没答上来的那个词</b>，所以它要能独立站住，而不是挂在折叠数那句话的末尾。', items:[
{r:'实测', q:'What is de novo design?',
 en:'“De novo design means building a protein sequence from scratch, so that it folds into a structure I specified in advance. It does not start from any natural protein. That is what separates it from directed evolution, which starts from something that already works and improves it step by step.”',
 cn:'<b>定义先说它是什么（从零造一条序列去满足一个指定的结构），再说它不是什么（不从任何天然蛋白出发）。</b>顺序反了就像在背要点。<br>⚠ <b>这个词在讲义里不是一个标题</b>，它是「蛋白宇宙有多少种折叠」那一节推理链的结论。<span class="pg">L9A s.21–22</span>所以答的时候要把链给全，见下一条。<br><b>两者的共同点也要说出来</b>：<b>它们都是去够进化没去过的那片序列空间</b>，只是一个从已有的东西往外走，一个直接落进去。'},
{r:'实测', q:'Why is de novo design possible at all?',
 en:'“Because nature has explored very little of protein space. There are more than three hundred and fifty million unique sequences in UniProt, but only about one to two thousand characterised folds. Structure is far more conserved than sequence, so two proteins at fifteen per cent identity can fold almost the same way. Natural proteins are the path evolution happened to take rather than the set of all possible proteins.”',
 cn:'<b>四步链，一口气说完</b>：① 结构比序列保守得多 → ② 几亿条序列只对应 <b>1000–2000 种折叠</b>（AlphaFold 数据库约 2.15 亿个结构，折叠还是那么几种）→ ③ 进化受两条约束：<b>只能从已有的东西一步步改</b>（路径依赖）、<b>每个中间态都得活得下来</b>（可进化性）→ ④ <b>所以自然界没有的折叠不等于不可能的折叠，它只是进化没走到的地方。</b><br><b>最后这一句就是答案本身</b>，也是随机组合文库和 de novo 设计共同的理论依据。<br>出处：Hecht et al., Curr Opin Struct Biol 2018，标题就是 <i>Are natural proteins special? Can we do that?</i>；前沿是 Nature 2023, 622:646–653，<b>深度学习照亮「暗蛋白空间」</b>。<br>⚠ 折叠数的估计来自 1990 年代 Chothia 等人、SCOP 和 CATH 的统计，<b>这半句在 beyondPoints</b>；幻灯片上的是「约 2000 种」和 Hecht 那句话。'},
{r:'实测', q:'Can you give an example of a de novo library that actually worked?',
 en:'“Binary patterning, from Fisher and colleagues in PLOS ONE in two thousand and eleven. You specify only whether each position is polar or nonpolar and let a degenerate codon choose the residue. Polar positions use VAN and nonpolar positions use NTN, and neither codon contains a stop. They designed a four helix bundle that way and selected it by functional rescue of E. coli auxotrophs.”',
 cn:'<b>为什么只规定极性就够</b>：折叠的首要驱动力是<b>疏水效应</b>——疏水残基埋进去、亲水残基朝外。所以<b>决定折叠的主要不是每个位置具体是哪个氨基酸，而是极性和非极性沿着链的图案</b>。α 螺旋每 <b>3.6</b> 个残基转一圈，只要极性按这个周期交替就自动得到<b>两亲螺旋</b>，四条这样的螺旋叠成一个束。（这段在 beyondPoints。）<br>⚠ <b>那个数字一定要跟着给</b>：<b>理论文库 5×10⁵²，亚克隆之后实际只有 1.5×10⁶，差 46 个数量级。</b>它是「设计空间」和「能做出来的文库」是两个完全不同的量这件事最狠的例证。<br>另一个例子：Cho 和 Szostak 从<b>没有催化活性的锌指骨架</b>出发，用 <b>mRNA 展示</b>选出了一个 <b>RNA 连接酶</b>（片段文库 3×10¹² 和 5×10¹¹）。<span class="pg">L9A s.23–24</span>'}
]},

{g:'定义类', gn:'这张卡的英文句里用到的词，他会一个个拎出来问。<b>这一科是新的，所以定义链要给得比生化那边更满。</b>', items:[
{r:'高', q:'What do you mean by the genotype to phenotype link?',
 en:'“It is any physical arrangement that keeps a protein together with the nucleic acid encoding it, so that selecting the protein also recovers its gene. Here the phenotype is the functional trait, which is binding or catalytic activity. The genotype is the nucleic acid that can be replicated. The words come from phainein, to show, and genos, origin.”',
 cn:'<b>幻灯片自己给了这两个词的词源</b>，可以直接用，而且它正好把两者的分工说清楚了：<b>表型是「显出来的那一面」，基因型是「能被复制的那一面」。</b><span class="pg">L9B s.2–5</span><br>四种连法：<b>区室（细胞、噬菌体颗粒、液滴）· 非共价（核糖体三元复合物）· 共价（嘌呤霉素）· 不需要（SELEX）</b>。'},
{r:'高', q:'What is a library, and what is library coverage?',
 en:'“A library is the collection of variants you made. Coverage is a different thing. It is the probability that any given variant is actually present in the sample of clones you screened. Ninety-five per cent coverage requires screening about three times the library size, because sampling is random and with replacement.”',
 cn:'<b>这一对必须分开讲</b>，因为混起来正是这一节的典型失分：<b>「我做了 10⁶ 个克隆」不等于「我有 10⁶ 种变体」。</b><span class="pg">L9A s.8, s.27</span><br>推导在速背第 11 点。倍数表：1 倍 → 63% · 3 倍 → 95% · 4.6 倍 → 99% · 6.9 倍 → 99.9%。<b>倍数跟文库多大无关</b>，所以可以当口诀用。'},
{r:'高', q:'What is phage display?',
 en:'“Phage display is the first display method, described in nineteen eighty-five, and George Smith shared the twenty eighteen Nobel Prize in Chemistry for it. Bacteriophages are viruses that infect prokaryotic cells. You splice the gene library into a gene encoding a phage capsid structural protein. The protein is then displayed on the outside of the particle while the DNA encoding it is packaged inside.”',
 cn:'<b>定义先说它是什么（第一种展示方法），再说怎么做到的（把文库接进外壳蛋白基因），最后才说为什么这解决了问题（一个颗粒就是一个拆不开的包裹）。</b><span class="pg">L9B s.8–9</span><br><b>biopanning 这个词他很可能追</b>：结合固定的靶标 → 洗 → 洗脱 → 感染大肠杆菌扩增 → 重复 3–5 轮，每轮加大洗涤强度。（biopanning 这一段在 beyondPoints。）'},
{r:'高', q:'What is puromycin?',
 en:'“Puromycin is an antibiotic and a ribosomal inhibitor that mimics the aminoacyl end of a transfer RNA. The ribosome therefore admits it and the peptidyl transferase centre joins the growing chain to it. The bond it makes is an amide rather than an ester, so it cannot be hydrolysed or passed on. The chain terminates there and stays covalently attached.”',
 cn:'<b>酰胺对酯，这一对是这条答案的全部。</b>正常的氨酰-tRNA 用<b>酯键</b>挂氨基酸，可水解可传递；嘌呤霉素用<b>酰胺键</b>，两样都不行。<b>所以它作为抗生素的机制（提前终止）和它作为工具的机制是同一件事。</b>（酰胺对酯这一段在 beyondPoints；幻灯片上有的是「它模仿 tRNA 的氨酰端、共价接到新肽链的 C 端」。）<span class="pg">L9B s.15–17</span>'},
{r:'高', q:'What is a degenerate codon, and what does NNK mean?',
 en:'“A degenerate codon is a position in a synthesised oligonucleotide that is a mixture rather than a single base. NNN has a degeneracy of sixty-four, encodes all twenty amino acids and contains three stop codons. NNK restricts the third base to G or T, so the degeneracy is thirty-two. It still encodes all twenty amino acids and it contains only one stop codon.”',
 cn:'<b>怎么做出来的也要能答</b>：标准固相合成一次加一个碱基，<b>要简并的那一步就同时投进几种保护过的核苷酸</b>，它们随机竞争接到正在长的链上，所以一次合成就得到一堆序列的混合物。<span class="pg">L9A s.4–9, s.10</span><br><b>为什么 NNK 是行业默认</b>：省下的 128 倍<b>全部来自同义冗余，蛋白多样性一点没损失</b>，而且终止密码子从 3 个减到 1 个。<b>它没有任何代价。</b>（128 倍这个说法在 beyondPoints。）'},
{r:'中', q:'What is an aptamer?',
 en:'“An aptamer is a short synthetic single stranded oligonucleotide that folds into a three dimensional shape and binds a target. The targets range from small molecules and metal ions to proteins. Aptamers are made by SELEX, which is the in vitro evolution of RNA. Compared with antibodies they have low immunogenicity, lower cost, higher stability and a shorter generation time.”',
 cn:'<span class="pg">L9B s.10–11</span>。例子是对 <b>GTP</b> 的高亲和力 RNA 适体（Carothers et al., RNA 2006）。<br><b>最值钱的那一句要主动给</b>：<b>对适体来说基因型和表型是同一个分子，所以根本不需要连接。</b>这一条反过来就解释了另外三种技术为什么存在。'},
{r:'中', q:'What is in vitro compartmentalisation?',
 en:'“It is a method that makes the genotype to phenotype link by compartmentalisation, using water in oil droplets of about two micrometres. Each droplet is in effect a cell-like compartment that performs only the one reaction being selected. The dilution is arranged so that on average only one library member sits in each droplet. Unlike the display methods it is great for selection of catalysts.”',
 cn:'<span class="pg">L9B s.18–19</span>。<b>最后那一句是幻灯片的原话</b>，可以直接引，而且它就是这条定义的重点。<br>用途全是酶：<b>水解酶、氧化还原酶、醛缩酶、转移酶、异构酶</b>。检测：<b>荧光强度或吸光度</b>。占据率按<b>泊松分布</b>靠稀释控制。'},
{r:'中', q:'What is a mutator strain?',
 en:'“A mutator strain is a bacterial strain deficient in DNA repair, so plasmids propagated in it accumulate random mutations. E. coli XL-1-Red lacks three primary repair pathways. mutS is mismatch repair, mutD is the proofreading epsilon subunit of DNA polymerase three, and mutT sanitises oxidised nucleotides by removing 8-oxo-dGTP. You transform the plasmid in, propagate for several generations and prep the DNA back out.”',
 cn:'<span class="pg">L9A s.12–15</span>。<b>三个基因各管什么要能分开说</b>，因为他多半会追「那 mutT 是干什么的」。<br>卖点是<b>非常简单又便宜</b>；代价是<b>无差别地突变整个质粒</b>，抗性基因、复制起点和启动子都会被改到。<b>启动子被改坏最阴险——你会把一个其实没表达的变体判成「无活性」。</b>（这条代价在 beyondPoints。）'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个东西挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'高', q:'Ribosome display and mRNA display both attach a protein to its own message. What is the difference?',
 en:'“The linkage. Ribosome display is non-covalent, so the complex is fragile and selections are restricted to low temperature and high magnesium. It cannot be purified, and it drags a two point seven megadalton ribosome along beside the protein. mRNA display is covalent through puromycin, so it survives almost any condition and it can be purified. The cost is that it is laborious.”',
 cn:'<b>判据一句话：连接是非共价的还是共价的。</b>核糖体展示那三条缺点<b>全部是同一个根子</b>，说出这一句比分别背三条值钱。<br>规模上也差一档：<b>核糖体展示 10¹²–10¹³，mRNA 展示 10¹³–10¹⁴</b>。<b>一句话总结：mRNA 展示是用操作复杂度买来条件自由度和稳定性。</b>（这句在 beyondPoints。）<span class="pg">L9B s.12–17</span>'},
{r:'高', q:'You sort cells by FACS. Is that a screen or a selection?',
 en:'“It is a screen, and the reason is the definition rather than the throughput. In a selection the experiment itself removes the failures, so nothing is measured one at a time. Fluorescence activated cell sorting still passes cells one by one past a detector and measures each one. It is therefore a screen running at the throughput of a selection, at roughly ten to the seven or eight cells a day.”',
 cn:'<b>这一条是这张卡最容易被抓的地方</b>，而且它就长在她自己的工作里——<b>酵母展示加流式分选正是这个情况</b>。<b>主动说出来是懂行，被指出来是错。</b><br>判据：<b>看它有没有「一个一个量」这一步</b>，不看它快不快。（吞吐量那一段在 beyondPoints；幻灯片给的是两条定义和「选择能搜索多得多的变体」。）<b>接卡 02 和 land。</b>'},
{r:'高', q:'Error-prone PCR and gene shuffling both create diversity. When would you use which?',
 en:'“Error-prone PCR introduces new random point mutations, and most random mutations are harmful, so each round takes one small and risky step. Gene shuffling recombines diversity that already exists, either homologues from different species or the winners of your previous round. Every mutation it recombines has already been validated as beneficial. So shuffling changes how good bricks are stacked rather than making new bricks.”',
 cn:'<b>判据一句话：造新的，还是重排已有的。</b><span class="pg">L9A s.12–20</span><br>还有一条实际差别：<b>易错 PCR 只要一条起始序列</b>，<b>基因重排需要一组同源序列</b>——没有同源性，无引物 PCR 里的片段就互相引不上。<br><b>再补一条判据</b>：改<b>非局部</b>的性质（热稳定性）用易错 PCR；改<b>局部</b>的性质（底物特异性）用饱和突变；<b>把已经选出来的好东西组合起来</b>用重排。'},
{r:'高', q:'Affinity and avidity. Does the distinction matter in a display selection?',
 en:'“It decides what you actually select. Affinity is the strength of one binding site binding one target. Avidity is the apparent strength when many weak sites act together. On pVIII a phage shows about two thousand seven hundred copies, so avidity dominates and you select clones that win by numbers. Monovalent pIII display removes that, so the pressure falls on genuine single molecule affinity.”',
 cn:'<b>这条把展示技术和卡 02 接在一起</b>：单分子亲和力的那个数就是 <b>K<sub>d</sub></b>。<b>说出「我的选择在排序的那个量，必须和我最后要报的那个量是同一个量」这句话，本身就是 researcher 的标志。</b><br>所以治疗性抗体的筛选几乎都用<b>单价 pIII</b>。（亲合力这一段在 beyondPoints；幻灯片上有的是 pIII 和 pVIII 的拷贝数和适用片段大小。）'},
{r:'中', q:'Site-directed and saturation mutagenesis sound like the same technique.',
 en:'“They differ in how much you already know. Site-directed mutagenesis puts a defined substitution at a position you chose, so you know both the position and the residue. Saturation mutagenesis randomises chosen positions to all twenty amino acids using degenerate oligonucleotides, so you know the position but not the residue. The first gives you one variant and the second gives you a library.”',
 cn:'<b>判据一句话：你知不知道该放什么进去。</b><span class="pg">L9A s.4–9</span><br><b>而这正是那张决策树的第二个问题</b>，所以答完顺手把整条轴给出来：<b>知道得越多，库越小越精确；知道得越少，库越大越粗放。</b>'}
]},

{g:'为什么类', gn:'这一族的「为什么」几乎都落在同一处：<b>蛋白不能自我复制，而核酸可以</b>。再往下就是进化本身。', items:[
{r:'高', q:'Why can you not simply sequence the best protein and be done?',
 en:'“Because there is not enough of it and because proteins cannot be copied. At the end of a selection I may hold only a few molecules. A nucleic acid can be amplified from a few molecules to micrograms by PCR, and a protein has no equivalent operation at all. So the half of the pair that can be replicated has to be carried along.”',
 cn:'<b>这条是整张卡的地基</b>，也是 why 三层的第二层。<br><b>把它和 SELEX 连起来说最有力</b>：SELEX 之所以不需要连接，正是因为<b>那里两半本来就是同一个分子</b>。<b>所以展示技术是在给蛋白补上 RNA 本来就有的那个能力。</b>（这句在 beyondPoints。）'},
{r:'高', q:'Why does omitting the stop codon hold the complex together?',
 en:'“Because a stop codon is not read by a transfer RNA. It is recognised by a release factor, and the release factor is what makes the finished chain be hydrolysed off the ribosome. With no stop codon no release factor binds, so the ribosome runs to the end of the message and simply stalls. It keeps holding the message and the new chain at the same time.”',
 cn:'<b>这条接卡 x-trans</b>：终止密码子、释放因子、肽酰转移中心那一格在那张卡上，<b>两张卡同一句定义</b>，他从哪边问过来你都是同一个答案。<br><b>再给两个稳定条件的理由</b>：<b>镁</b>是把核糖体两个亚基摁在一起、并稳住 tRNA 位置的那个离子；<b>低温</b>单纯是让所有解离过程都变慢。（这两条在 beyondPoints。）'},
{r:'高', q:'Why is the target one to five mutations per gene?',
 en:'“Because both directions fail. Too few and most of the library is wild type, so screening capacity is wasted. Too many and nearly every variant is inactive, because most random mutations are deleterious, so the good ones drown in a sea of dead ones. One to five per gene per round is the empirical optimum between those two failure modes.”',
 cn:'<b>「两种失败方式之间的最优」这个说法本身就是答案的一半</b>，比报一个数字稳得多。<br><b>顺势接上整讲的结论</b>：<b>这也正是定向进化为什么要走很多小步、每轮都从上一轮的赢家出发，而不是一次猛突变。</b>这就是自然选择的逻辑。（这整段在 beyondPoints，幻灯片没给突变率的理由。）<b>接卡 land。</b>'},
{r:'中', q:'Why is only one library member allowed per droplet?',
 en:'“Because two genes in one droplet break the link. If both are expressed and the droplet fluoresces, I cannot tell which of the two enzymes produced the signal, so recovering the genes tells me nothing. Occupancy is therefore controlled by dilution according to the Poisson distribution, so that the average is one member per droplet.”',
 cn:'<b>这条演示了那个判据的用法</b>：<b>凡是让「蛋白和它的基因」对不上号的事情，就是这一整讲要防的事。</b>液滴里挤两个基因，和一个多价噬菌体上挂两千七百个拷贝，本质上是同一类问题——<b>信号不再属于某一个基因。</b>（泊松这一句在 beyondPoints。）'},
{r:'中', q:'Why did SELEX come before the protein display technologies?',
 en:'“Because it needed no linkage, so it had a much simpler problem to solve. For an aptamer the genotype and the phenotype are the same molecule, so the cycle is just bind, elute, amplify by reverse transcription PCR, transcribe in vitro and go round again. Proteins cannot do that, so every protein display method is an engineered workaround.”',
 cn:'<b>幻灯片自己说 SELEX 是那些技术的「灵感来源」</b>，这一条就是那句话的内容。<span class="pg">L9B s.10–11</span><br>人和年代：<b>Larry Gold、Jack Szostak、Gerald Joyce，1990 年代</b>。（「为什么更简单、所以更早」这个推理在 beyondPoints。）'}
]},

{g:'他要数字怎么办', gn:'这张卡上数很多，而且大多是硬的。<b>先分清他问的是「具体量」还是「类别边界」</b>：前者报数，后者给判据。<b>编一个不存在的数是这场考试里最危险的动作。</b>', items:[
{r:'高', q:'Give me the library ceilings.',
 en:'“Oligo synthesis at a five micromole scale gives about ten to the eighteen molecules. Subcloning into cells gives ten to the six up to ten to the eight. Plates and colony picking are lower still. In vitro display reaches up to ten to the thirteen. By method the order runs from bacteria at ten to the eight, to phage at ten to the ten or eleven. Ribosome display reaches ten to the twelve or thirteen. Then mRNA display reaches ten to the thirteen or fourteen, and SELEX reaches ten to the fourteen or fifteen. Droplets sit lower, at ten to the nine or ten.”',
 cn:'<b>这些数全在幻灯片上，可以放心报。</b><span class="pg">L9A s.25–26</span> <span class="pg">L9B s.20–21</span><br><b>报完立刻给结构</b>，不然只是一串数：<b>从 10¹⁸ 掉到 10⁸ 那十个数量级，整个是「DNA 必须进活细胞」这一步吃掉的。</b><br>⚠ <b>别把「体外」和「库大」画等号</b>：液滴是体外的，只有 10⁹–10¹⁰。'},
{r:'高', q:'How many clones do you have to screen?',
 en:'“It depends on the coverage you want, and the multiplier is independent of library size. One times the library gives sixty-three per cent coverage, three times gives ninety-five, four point six times gives ninety-nine, and six point nine times gives ninety-nine point nine. The deck works one example. Four thousand and ninety-six variants at ninety-five per cent needs twelve thousand two hundred and sixty-nine clones.”',
 cn:'<b>公式和推导在速背第 11 点</b>，被追问就把四步说出来。<span class="pg">L9A s.8, s.27</span><br>⚠ <b>幻灯片上只有那一个算例和公式</b>；<b>倍数表（63 / 95 / 99 / 99.9）在 beyondPoints</b>，要说就说这是从同一条公式算出来的，别说幻灯片上有。'},
{r:'高', q:'How many protein folds are there?',
 en:'“About two thousand characterised folds. The deck asks it as a quiz question and that is the answer. Set against it there are more than three hundred and fifty million unique sequences in UniProt and about two hundred and fifteen million structures in the AlphaFold database. Structure is far more conserved than sequence, so fold space is highly degenerate.”',
 cn:'<b>「约 2000 种」是幻灯片上的答案</b>，可以直接报。<span class="pg">L9A s.21–22</span><br>⚠ <b>1000–2000 这个区间、UniProt 和 AlphaFold 的两个数、Chothia 和 SCOP/CATH 的出处，都在 beyondPoints</b>，要说就带 generally。<br><b>报完这个数要立刻接上那条推理链</b>（见第一组），不然它只是一个孤立的数字。'},
{r:'中', q:'How many rounds of selection do you do?',
 en:'“The lecture gives numbers only where it has them. Phage display biopanning is typically three to five rounds with increasing wash stringency, and the ribosome display example recovered improved genes after three rounds. There is no general number for how many rounds a project needs. The criterion is enrichment. You monitor it across the rounds and you stop when it stops increasing.”',
 cn:'<b>这是「他问一个不存在的数字」的标准处理</b>：<b>先说这个量不是由一个数定义的，是由判据定义的，再给判据。</b><br>笔记里有数的只有两处——噬菌体 biopanning <b>3–5 轮</b>、核糖体展示那个 DHFR 例子<b>三轮</b>。<b>「一般要几轮」笔记没有给，所以不要给。</b><br>判据有出处：mRNA 展示那一节明写<b>「特异序列的富集在整个选择过程中被持续监测」</b>。<span class="pg">L9B s.15–17</span>'},
{r:'中', q:'How big is a droplet, and how big is the spacer in ribosome display?',
 en:'“Droplets are about two micrometres in diameter, made from oil, detergents and emulsifier. The unstructured C terminal spacer in ribosome display is about one hundred amino acids. That length is set by the ribosomal exit channel, which is roughly thirty to forty residues long. The spacer has to push the target protein out beyond the channel so that it can fold and bind.”',
 cn:'<b>液滴的 2 µm 和间隔肽的约 100 个氨基酸都在幻灯片上。</b><span class="pg">L9B s.12–14</span> <span class="pg">L9B s.18–19</span><br>⚠ <b>出口通道 30–40 个残基这个数在 beyondPoints</b>，要说就明说这是延伸，不是幻灯片上的。<br><b>但那个理由一定要给</b>：不给，「100 个氨基酸」就是一个要背的数字；给了，它就是一个推得出的长度。'},
{r:'中', q:'How many positions can you actually saturate?',
 en:'“About five or six with NNK, and the arithmetic gives it directly. Thirty-two to the fifth is three point four times ten to the seven, which is comfortable. Thirty-two to the sixth is about ten to the nine, which is marginal. Thirty-two to the seventh is three point four times ten to the ten, which is beyond any transformation efficiency. That is why the seven residue example in the deck is posed as a problem.”',
 cn:'<b>这条演示了「报数之后立刻给判据」</b>：数是算出来的，不是背下来的。<b>算给他看比报一个上限稳得多。</b><br>⚠ <b>「5–6 个位点」这个结论在 beyondPoints</b>，幻灯片上有的是 64、32、4×10¹² 和那个七残基的例子。<b>所以说的时候是「按这几个数反推出来的」，不是「老师讲过」。</b><br><b>三条出路</b>：去同义冗余（NNN → NNK）· 按化学限字母表（VAN / NTN）· 少随机化几个位点。<b>三条都是用知识换库的大小。</b>'}
]}
]
});
