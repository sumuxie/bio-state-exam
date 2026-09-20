/* 卡 17 · What is the role of enzymes in biochemical reactions?
   题库 #17（S3 Biochemistry 4）
   出处 Biochemie OCR p016（多数生化反应只在催化剂存在下进行；E. coli 上千个反应；in vitro）、p017–p018（G 是状态函数、不给速率信息；ΔG° = −RT ln K）、
        p009（年表）、p039–p040（table 2.2：酶是最大最重要的一组，>3000 种）、p041–p043（§3 定义、Sumner 1926、六大类、催化 RNA）、
        p054（§3.3 催化剂定义、活化能、三条路、thermolabile、figure 3.1、两步机制）、p058–p059（温度）、
        p061–p062（专一性、10¹⁴、稀溶液低温中性 pH、邻近效应、§3.7 调控）、p063（反馈抑制）、p116（papain）、p155–p156、p173（α/β、纤维素酶）。
   已回 300 dpi 原图核：p061 urease **10¹⁴ times**（OCR 把指数吃掉了）；p054 figure 3.1 已看图。 */

window.CARDS.push({
id:'17', n:17, w:1,
q:'What is the role of enzymes in biochemical reactions?',
qcn:'酶在生化反应中起什么作用',
sub:'主干说完约 90 秒 · 三个动词：加速 · 选择 · 可调',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'这题的最短问法是 “What do enzymes do?”。答案从「酶是什么」起步，第二句就说「催化剂是什么」——书里这两个定义各有一处，p041 和 p054。'},
 {n:'01', t:'定义 · 酶',
  ez:'“An enzyme is a protein. It is specialised for one job. That job is catalysing the reactions inside living organisms. So an enzyme is a biological catalyst. Two things characterise an enzyme. The first one is very high specificity. This means it acts on one substrate. It also runs one reaction. The second one is very high catalytic efficiency. This means the reaction runs enormously faster with it. I should add one qualification. For a long time every known enzyme was a protein. But some RNA molecules also catalyse.”',
  ezcn:'酶是<b>专门催化生物体内反应的蛋白质</b>，也就是<b>生物催化剂</b>。两个特点：<b>专一性极高</b>（只认一个底物、只跑一个反应）和<b>催化效率极高</b>（有它比没它快得离谱）。补一句限定：很长时间里已知的酶全是蛋白质，<b>但有些 RNA 也能催化</b>。',
  big:'酶是<b>专门催化生物体内反应的蛋白质</b>——生物催化剂；两个特点：<b>专一性高</b>、<b>催化效率高</b>',
  en:'“An enzyme is a protein specialised for catalysing the reactions that take place in living organisms — a biological catalyst. Two things characterise it: very high <b>specificity</b>, meaning it acts on one substrate and runs one reaction, and very high <b>catalytic efficiency</b>, meaning the reaction runs enormously faster with it than without it. One qualification: until recently every known enzyme was a protein, but some RNAs also turn out to catalyse.”',
  note:'书给了<b>两个定义</b>：p041 从结构说（英译：<i>proteins specialised for catalysing reactions</i>），p054 从功能说（英译：<i>catalysts of the chemical reactions taking place in organisms</i>）。合起来才是全定义：<b>是蛋白质，干的是催化</b>。RNA 那个限定书在 p042–p043 自己写了（写书时只有一例）；年表 p009：<b>1985 Cech</b>。<span class="pg">p041 p054 p042 p009</span>'},
 {n:'02', t:'定义 · 催化剂',
  ez:'“A catalyst speeds up a reaction. It does this by joining the reactants for a short time. The reaction then runs by a different mechanism. That mechanism has a lower activation energy. The catalyst comes out unchanged. So one molecule of catalyst works over and over. In a living organism the catalyst is an enzyme.”',
  ezcn:'催化剂是<b>暂时跟反应物结合</b>，让反应改走另一条<b>活化能更低</b>的路，自己原样出来的东西。<b>所以一个催化剂分子能反复用</b>。在生物体里，这个催化剂就是酶。',
  big:'催化剂是<b>暂时和反应物结合</b>、让反应<b>走另一条活化能更低的机制</b>、自己<b>原样回来</b>的物质',
  en:'“A catalyst is a substance that speeds up a reaction by <b>joining the reactants transiently</b>, so that the reaction runs by a <b>different mechanism with a lower activation energy</b>. And it comes out of it unchanged, so one molecule of catalyst serves over and over. In organisms the catalyst is the enzyme.”',
  note:'p054 原话的英译：<i>it joins transiently with the reactants, so that the reaction runs by a different mechanism with a lower activation energy</i>。「原样回来」在同页两步机制里：复合物 EA 散开成<b>原来的 E</b>（书上印的就是这个说法，英译 <i>the original E</i>）和产物。<span class="pg">p054</span>'},
 {n:'03', t:'作用一句话',
  ez:'“Enzymes do three things at the same time. First, they make the reactions of metabolism run at a useful rate. Second, they make only the wanted reactions run. This works because each enzyme is specific. Third, they do all this under mild conditions. A cell can survive those conditions. The textbook puts it this way. Thanks to enzymes most reactions in the cell run in dilute solution. They run at low temperature. They run at neutral pH.”',
  ezcn:'酶同时干三件事：<b>让代谢反应以有用的速度发生</b> · <b>只让该发生的发生</b>（因为每个酶都专一） · <b>而且是在细胞活得下去的条件下</b>。书的原话：多亏有酶，细胞里大多数反应能在<b>稀溶液、低温、中性 pH</b> 下跑。',
  big:'作用 = <b>让代谢反应以有用的速度发生</b>，<b>只让该发生的发生</b>，而且在<b>细胞能活的条件</b>下：稀溶液、低温、中性 pH',
  en:'“So the role of enzymes is three things at once. They make the reactions of metabolism run at a <b>useful rate</b>. They make <b>only the wanted ones</b> run, because each enzyme is specific. And they do it under conditions a cell can survive. The textbook’s phrase is that thanks to enzymes most reactions in the cell run in <b>dilute solution, at low temperature and at neutral pH</b>.”',
  note:'<b>这一句是整题的答案，其余全是它的展开。</b>三个动词各有出处：速度 p054、选择 p061（否则细胞很快被不想要的产物淹没）、条件 p061。第 1 章 p016 的总括：“Most biochemical reactions run only in the presence of catalysts, and those are almost all enzymes.”<span class="pg">p016 p054 p061</span>'},

 {g:'催化在物理上是什么', gn:'这一组回答「催化到底做了什么」。五个点，一张要会画的图。'},
 {n:'04', t:'活化能',
  big:'反应物要变成产物，得先<b>翻过一道能量坎</b>；翻坎需要的能量叫<b>活化能</b>',
  en:'“For a substance A to become product X, the molecules of A must first get over an <b>energy barrier</b>. They have to be supplied with the <b>activation energy</b>. It is the energy needed to reach the top of the barrier — the <b>transition state</b>. That is the arrangement of the atoms in which the old bonds are half broken and the new ones half formed. That term is general, and the textbook only names the barrier.”',
  note:'p054 原话的英译：<i>they must … overcome an energy barrier, they must be supplied with what is called the activation energy</i>。「过渡态」<b>书里没有</b>（全书 grep 无），书只叫它「能量坎」。承重名词交代了：不懂活化能，「降低活化能」是空话。<span class="pg">p054</span>'},
 {n:'05', t:'三条加速的路',
  big:'加速反应有三条路：<b>加热</b> · <b>催化</b> · <b>光</b>——生物只能走中间那条，因为<b>生物是热不稳定的</b>',
  en:'“There are three ways to make a reaction go faster. <b>Heat</b> the system: the molecules gain energy and more of them can get over the barrier. Organisms cannot use that route, because they are mostly <b>thermolabile</b> — built of proteins and membranes that heat destroys. The second way is <b>catalysis</b>. The third is <b>light</b>: exciting the reactant molecules with radiation — but then the reaction usually runs along a different reaction coordinate altogether.”',
  note:'三条路全是 p054 的，顺序也是书的。<b>“thermolabile” 这个词要说出口</b>——书给的、一个词就够的理由。「热坏的是蛋白质和膜」是我加的解释（变性见卡 01）。光那条路书没给例子。<span class="pg">p054</span>'},
 {n:'06', t:'两步机制',
  big:'最简单的酶反应也分<b>两步</b>：E + A ⇌ EA（<b>快、可逆、弱相互作用</b>）→ E + X（<b>慢、不可逆</b>）',
  en:'“Even the simplest enzyme reaction runs in two steps. First the substrate joins the enzyme into the <b>enzyme–substrate complex</b>. That step is fast and reversible, and the two are held together by weak, non-covalent interactions. Then the actual chemical change happens: the complex breaks down into the <b>original enzyme</b> and the product — slower, and irreversible.”',
  note:'p054 §3.3.1 原话。<b>「原来的酶」是「酶不被消耗」的书内出处。</b>这两步是卡 02 的 Km 来源（k₁、k₋₁、k₂），也是你主场的分界线：<b>第一步是结合，第二步才是催化</b>。<span class="pg">p054</span>'},
 {n:'07', t:'图 · 他可能让你画',
  big:'<b>figure 3.1 能量图</b>：两条曲线，<b>同一个起点和终点</b>，只有<b>坎的高度</b>不同',
  en:'“On an energy diagram the uncatalysed reaction is one big hump between reactant A and product P. The catalysed one is a lower path with two small humps and a dip between them. The dip is the transient complex of A with the catalyst. Both curves start at A and end at P at the same heights. So the energy difference between reactant and product is the same, and only the barrier changes.”',
  note:'<b>画的顺序</b>（照 p054 figure 3.1，已看原图）：① 横轴 reaction coordinate，纵轴 energy。② 左边点 A（反应物），右边点 P（产物），<b>P 比 A 低</b>。③ 曲线 2（不催化，实线）：A 到 P 一个大鼓包，顶到 A 的高度差标 <b>E₀</b>（回原图核过，书上给这个大包印的是 E₀）。④ 曲线 1（催化，虚线）：从 A 先一个小鼓包（标 <b>E₁</b>），然后<b>掉进一个比 A 还低的坑</b>，坑底标 <b>AK</b>（A 与催化剂 K 的复合物），再一个小鼓包，然后下到 P。⑤ 图例：A · AK · P · <b>E₀、E₁、E₂ 三个活化能</b>（书的图注列了三个：E₀ 是不催化那个大包，E₁ 和 E₂ 是催化那条路上的两个小包）。<br>他问坑为什么比 A 低：“The well below A means the complex is more stable than free A, so binding is downhill. The two small humps are the two steps of the textbook’s mechanism: binding, then the chemical step.”<span class="pg">p054</span>'},
 {n:'08', t:'速率变，平衡不变',
  big:'催化剂改的是<b>速率</b>，不是<b>平衡</b>——热力学没动，动力学动了',
  en:'“A catalyst changes how fast equilibrium is reached, not where it lies. The grounds are in the textbook’s first chapter. Gibbs energy is a state function, so its change does not depend on the path taken, and it gives <b>no information about rate</b>. Rate is decided by the mechanism. A catalyst changes only the mechanism, the path. So the free-energy change and the equilibrium constant are untouched, and both directions are accelerated equally. The energy diagram shows it: the two curves share their start and end points.”',
  note:'⚠ <b>书没有把「催化剂不改变平衡」写成一句话</b>——这是 p017（英译：<i>Gibbs energy … gives no information about rate … what decides is the specific mechanism</i>）加 p054（催化剂换机制）接出来的。说 “it follows from”，不说 “the textbook says”。<b>「正反两个方向一样加速」是通用推论</b>，书里没有。ΔG° = −RT ln K 在 p018。<span class="pg">p017 p018 p054</span><br><br><b>=== 这一条上有两个式子，各说各的 ===</b><br><code>ΔG°′ = −RT ln K</code>（热力学，书 p018）里<b>只有起点和终点</b>，一个字都没提坎有多高。<br><code>k = A·e^(−Ea/RT)</code>（动力学，Arrhenius，<b>书里没有这个式子</b>）里<b>只有坎，没有终点</b>。<br><b>两个式子除了 R 和 T 没有任何共用的量——这就是「催化剂改速率不改平衡」最干净的说法：催化剂动的是 Ea，而 Ea 压根不出现在第一个式子里。</b><br>两条的完整算法在追问「Why does a lower barrier make the reaction faster?」和「Why does a catalyst accelerate both directions equally?」里。'},
 {n:'09', t:'效率',
  big:'有多快：<b>urease 把尿素水解加速 10¹⁴ 倍</b>（相对于 H⁺ 催化）——所以细胞里的反应能在<b>稀溶液、低温、中性 pH</b> 下进行',
  en:'“How efficient: the textbook’s example is urease, which speeds up the hydrolysis of urea <b>ten to the fourteenth</b> times compared with catalysis by hydrogen ions. That is what the efficiency is for. Because of enzymes, most reactions in the cell run in dilute solution, at low temperature and at neutral pH. Without a catalyst they would practically not run under those conditions at all.”',
  note:'<b>10¹⁴ 已回 300 dpi 原图核过</b>（OCR 出来只剩「10 times」，指数被吃掉了；卡 18 写时还标着待核，现在是书的数）。书的比较对象是<b>氢离子催化</b>，不是不催化的水解——Lehninger 的 10¹⁴ 是对不催化说的。按书说。<b>后半句比数字重要</b>：效率的意义是快到能在细胞的条件下用。<span class="pg">p061</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>10¹⁴ 是什么的比</b>：是两个<b>速率常数</b>之比，<code>k(urease) ÷ k(H⁺) = 10¹⁴</code>。不是产率之比，也不是平衡之比——<b>平衡那边酶一点没动。</b><br><br><b>把它翻成「坎矮了多少」</b>（用 <code>k = A·e^(−Ea/RT)</code>）：<br>① 两个 k 相除，A 约掉 → <code>k₂ ÷ k₁ = e^(ΔEa/RT)</code>。<br>② 取常用对数 → <code>ΔEa = RT·ln10·log(k₂ ÷ k₁) = 5.71 × 14 ≈ 80 kJ/mol</code>（25 °C）。<br><b>所以「加速 10¹⁴ 倍」＝「把那道坎削掉约 80 kJ/mol」。</b><br><br><b>=== 一句话理解 ===</b><br>两个画面，挑一个说：<br>① <b>时间</b>：酶一秒钟干完的事，H⁺ 催化要 <code>10¹⁴ 秒 ≈ 320 万年</code>。「加速」这个词平时太温和了，它真正的意思是<b>把三百万年压成一秒</b>。<br>② <b>代价</b>：削掉的那 80 kJ/mol，<b>连一根共价键的四分之一都不到，大约就是四五个氢键的量</b>（横向卡 x-bonds 的尺子：氢键典型 20 kJ/mol）。<b>酶没有砸开任何东西，它只是多伸出几只手，把半路上那个状态多扶了几下。</b>——这一句同时把「催化剂凭什么做到」也答了。<br>⚠ 80 kJ/mol、320 万年、氢键 20 kJ/mol <b>都不是书里的</b>，是从书给的 10¹⁴ 用 Arrhenius 算出来的；书只给 10¹⁴（p061）。被追问就说这是 Arrhenius 关系、属于物理化学，然后接停止句。'},

 {g:'酶跟普通催化剂差在哪', gn:'「biochemical」这个限定词就是这一组。铂、H⁺ 也是催化剂；酶多出来的是三样：专一、温和、可调。'},
 {n:'10', t:'专一性',
  big:'<b>底物专一性</b>（只认一种底物）＋ <b>作用专一性</b>（只跑一种反应）；否则<b>细胞很快被不想要的产物淹没</b>',
  en:'“Specificity has two sides. <b>Substrate specificity</b> means the enzyme converts only a particular substrate. <b>Specificity of action</b> means it converts it by only one reaction. The textbook gives the reason the cell needs it: if it were not so, the cell would very quickly be flooded with unwanted products. The degree varies. Some enzymes are practically absolute and will not touch a molecule very similar to the substrate. Others attack a whole class sharing one structural feature, and most are stereospecific.”',
  note:'p061 原话。<b>「酶 vs 化学催化剂」的第一个差别</b>：H⁺ 催化一切能水解的键，urease 只水解尿素。专一性从哪来是卡 18 活性中心那一段。<span class="pg">p061</span>'},
 {n:'11', t:'酶的清单就是细胞的化学',
  big:'细胞里<b>上千个反应</b>要协调；37 °C 下<b>没有酶的反应等于不发生</b>——所以<b>细胞做哪些酶，就决定了哪些反应发生</b>',
  en:'“Even a bacterium like E. coli needs more than a thousand chemical reactions running in a coordinated way — the textbook’s number. At body temperature and neutral pH the uncatalysed versions are so slow that, in effect, a reaction happens only if the cell has an enzyme for it. So the set of enzymes a cell makes decides which of all the thermodynamically possible reactions actually take place. That last sentence is my inference from the textbook’s two facts, not its wording.”',
  note:'「上千个反应」p016。「没有酶等于不发生」是从 p054 和 p061 推出来的，<b>书没有这句</b>，说成 “in effect”。<span class="pg">p016</span>'},
 {n:'12', t:'可调控',
  big:'酶<b>能被调</b>：pH、底物和辅酶浓度、抑制剂和激活剂；调节酶分<b>别构</b>和<b>共价修饰</b>两种；典型是<b>反馈抑制</b>',
  en:'“The third difference from a chemical catalyst is that an enzyme can be <b>regulated</b>. The textbook lists what the cell can use: pH, the concentration of substrate or coenzyme, the presence of an inhibitor or an activator. On top of that there are regulatory enzymes. <b>Allosteric</b> ones are modulated by a metabolite binding at a separate site. <b>Covalently modulated</b> ones are switched by another enzyme. And the classic pattern is feedback inhibition: the end product of a pathway inhibits its first enzyme. A platinum surface cannot be switched off by its own product.”',
  note:'p062 §3.7 和 p063 反馈抑制。<b>这一条把「作用」从化学升到生物学</b>：酶不只是加速器，是<b>开关</b>。铂那半句是我的对比。展开在卡 19 和 #32。<span class="pg">p062 p063</span>'},
 {n:'13', t:'温度',
  big:'速率<b>每升 10 °C 约翻一倍</b>；过了临界温度<b>变性占上风</b>——多数酶 <b>55–60 °C</b> 失活，嗜热菌的酶 <b>85 °C</b> 还活着',
  en:'“Temperature works on an enzyme reaction the way it works on any reaction: the rate roughly doubles for every ten degrees. That holds until a critical temperature, above which thermal denaturation of the protein wins and the rate falls. Most enzymes are inactivated around 55 to 60 degrees. Some, mostly from thermophilic bacteria, are still active at 85. So the temperature optimum is the result of two opposing processes, and its value depends on how the experiment is set up.”',
  note:'p058–p059 原话。<b>thermolabile 那个词的兑现</b>：生物不能用加热，因为催化剂本身是蛋白质。85 °C 那半句直接接 Taq（#5）。<span class="pg">p058 p059</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>速率倍数 = 2^(ΔT ÷ 10)</code>。这就是书 p058 那句「温度升 10 °C 速率约翻一倍」的写法（Q₁₀ = 2）。指数上的 ΔT ÷ 10 就是「差了几个十度」。<br><b>它不是一条独立的定律，是 Arrhenius 在生化这段温度上的近似</b>：<br>① <code>k = A·e^(−Ea/RT)</code>，25 °C 升到 35 °C → <code>k₂ ÷ k₁ = e^[(Ea ÷ R)(1 ÷ 298 − 1 ÷ 308)]</code>。<br>② 要让这个比值正好等于 2，需要 <code>Ea ≈ 53 kJ/mol</code>。<br>③ <b>而 50 kJ/mol 上下正是常见酶反应那道坎的量级</b>——所以「每 10 度翻一倍」才会到处都差不多成立。<b>Q₁₀ = 2 是结果，不是原因。</b><br><br><b>拿这张卡上的两个场景直接代</b>：<br>· <b>冰箱</b>：20 → 4 °C，<code>2^(16 ÷ 10) = 2^1.6 ≈ 3.0</code>，慢到三分之一。<b>冰箱不是把酶关掉，只是把钟调慢三倍</b>：本来三天坏变九天坏，<b>数量级一个都没换</b>，所以冷藏只能拖不能保。<br>· <b>发烧</b>：37 → 40 °C，<code>2^0.3 ≈ 1.23</code>，快两成；就算到 42 °C 也只有 <code>2^0.5 ≈ 1.41</code>。而失活要 55–60 °C，还差十五到二十度。<b>两件事根本不在一个量级上。</b><br><br><b>=== 一句话理解 ===</b><br><b>升温不是给反应「加油」，是让够得着坎顶的那一小撮分子变多。</b>升 10 度，分子的平均能量只涨了 <code>10 ÷ 298 ≈ 3%</code>，速率却翻倍——<b>因为起作用的不是平均值，是尾巴：e^(−Ea/RT) 那条指数尾巴对温度极其敏感。</b>所以「坎降一点速率涨很多」和「温度升一点速率涨很多」<b>是同一个指数的两种读法</b>。<br><b>那为什么还会有一个最适温度</b>：同一个温度在做两件相反的事——速率按 <code>2^(ΔT ÷ 10)</code> 缓缓往上，<b>变性</b>却是个陡得多的台阶。<b>最适温度就是这两条线交叉的地方，所以它不是酶的固定常数，测得久一点它就低一点</b>——书 p058–p059 说「取决于实验怎么做」正是这个意思。<br>⚠ 「Q₁₀ = 2 对应 Ea ≈ 53 kJ/mol」和上面几个倍数都是算的，<b>书里没有</b>；书只给「约翻一倍」这条规则和 55–60 °C、85 °C 两个实测温度（<b>那两个是量出来的，没有公式可推</b>）。'},

 {g:'归类与历史', gn:'眼熟即可。六大类的细节在卡 18，这里只留一句正面定义。'},
 {n:'14', t:'六大类',
  big:'按<b>催化的反应类型</b>分六大类：oxidoreductases · transferases · hydrolases · lyases · isomerases · ligases；每个酶有<b>系统名、常用名、EC 号</b>',
  en:'“Enzymes are classified into six main classes by the reaction they catalyse: oxidoreductases, transferases, hydrolases, lyases, isomerases and ligases. Each enzyme has a systematic name describing the reaction, a recommended name for everyday use, and a code number. Lactate dehydrogenase is E.C. 1.1.1.27, systematic name L-lactate:NAD⁺ oxidoreductase.”',
  note:'p041–p042。<b>每类一句、synthase 与 synthetase、EC 四个数字，都在卡 18 的追问里</b>，这里不重复。<span class="pg">p041 p042</span>'},
 {n:'15', t:'在蛋白质功能表里的位置',
  big:'在书的<b>蛋白质功能表</b>里，酶是<b>最大、最重要的一组</b>；已知<b>超过 3000 种</b>；第二大组是结构蛋白',
  en:'“In the textbook’s table of protein functions, enzymes are the largest and most important group. More than three thousand different enzymes are known. The second main group are the structural proteins. The table’s own examples: ribonuclease hydrolyses RNA, trypsin hydrolyses the peptide bond, cytochrome c transfers electrons, snake-venom enzymes hydrolyse phospholipids.”',
  note:'table 2.2 p039–p040。<b>这一条是题库标的书页出处</b>（p039–p042），也是 #29 的一行。<span class="pg">p039 p040</span>'},
 {n:'16', t:'怎么发现的',
  big:'<b>1833 Payen</b> 第一个酶（amylase）· <b>1893 Ostwald</b> 酶是催化剂 · <b>1897 Buchner</b> 无细胞发酵 · <b>1926 Sumner</b> 结晶 urease · 30 年代 trypsin、pepsin、chymotrypsin · <b>1985 Cech</b> RNA 有酶活性',
  en:'“The textbook’s timeline: the first enzyme isolated was amylase, Payen, 1833. Ostwald proved in 1893 that enzymes are catalysts. Buchner proved in 1897 that fermentation is a chemical process — it runs in a yeast extract with no living cell. Harden and Young found the first coenzyme, NAD, in 1905. The first enzyme obtained as crystals was urease, Sumner, 1926, and that settled that an enzyme is a protein. In the thirties trypsin, pepsin and chymotrypsin followed. In 1985 Cech found enzymatic activity in RNA.”',
  note:'年份全在 p009 table 1.1，Sumner p041 又写了一遍。<b>「结晶 ＝ 证明是蛋白质」和「无细胞」是通用史实</b>，书只写「第一个结晶态的酶」「证明发酵是化学过程」。<span class="pg">p009 p041</span>'},

 {g:'收尾', gn:'一句停住，一句伸出去。'},
 {n:'17', t:'停止句',
  big:'再往下，<b>坎的高度怎么变成速率常数</b>是物理化学',
  en:'“The next question down is how a given barrier height turns into a rate constant, through collision frequency and the fraction of molecules with enough energy. Below that we are in physical chemistry rather than biochemistry.”',
  note:'落在<b>动力学</b>这块地基上。「动力学是什么」那句定义在卡 02 的追问里，32 张卡共用。'},
 {n:'18', t:'留口子',
  big:'酶是蛋白质，所以<b>能被突变和筛选</b>——<b>做酶工程就是在改那道坎的高度</b>；而我在 yeast display 上量的<b>只是第一步</b>',
  en:'“Where this meets my own work: because an enzyme is a protein, it can be mutated and selected. That is directed evolution, and what selection acts on is the height of the barrier. The textbook’s two-step mechanism says binding and the chemical step are separable, so they can be improved separately. With yeast display I measure only the first step — binding, as a dissociation constant, with no turnover involved. Binding is necessary for catalysis but it is not the same thing.”',
  note:'<b>口子落在两处</b>：directed evolution（#7）和 Kd（卡 02）。他追「第二步怎么测」，答活性测定——p058，在卡 18 的追问里。'}
],
end:'<b>这题的骨架是三个动词：加速、选择、可调。</b>加速是化学（p054），选择和可调是生物学（p061、p062）。「biochemical」这个限定词问的正是后两个——只答「降低活化能」等于只答了化学那一半。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：专门催化生物体内反应的蛋白质——生物催化剂；<b>专一 ＋ 高效</b>；RNA 例外主动说',
 '“A protein specialised for catalysing the reactions of living organisms — a biological catalyst. Very high specificity and very high catalytic efficiency.”',
 '书有两个定义：p041 从结构说，p054 从功能说。'],
['<b>催化剂</b>：暂时结合反应物，让反应<b>走另一条活化能更低的机制</b>，自己原样回来',
 '“Joins the reactants transiently so the reaction runs by a different mechanism with a lower activation energy, and comes out unchanged.”',
 'p054 原话。「原样回来」的出处是同页的「原来的 E」。'],
['<b>作用一句话</b>：有用的速度 · 只让该发生的发生 · 在稀溶液、低温、中性 pH 下',
 '“A useful rate, only the wanted reactions, and under conditions a cell can survive — dilute solution, low temperature, neutral pH.”',
 '<b>整题的答案。</b>三个动词：加速、选择、可调。'],
['<b>活化能</b>：翻过能量坎需要的能量；<b>三条路</b>：加热 · 催化 · 光；生物<b>热不稳定</b>',
 '“The energy the reactant molecules must be supplied with to get over the barrier. Heat, catalysis or light — organisms cannot use heat because they are mostly thermolabile.”',
 '“thermolabile” 要说出口，一个词就是理由。「过渡态」书里没有。'],
['<b>两步机制</b>：E + A ⇌ EA 快、可逆、弱相互作用 → E + X 慢、不可逆；图上是两个小鼓包夹一个坑',
 '“Binding is fast and reversible through weak interactions. The chemical step is slower and irreversible, and gives back the original enzyme.”',
 '第一步是结合，第二步才是催化。画图的顺序在速背第 7 点。'],
['<b>速率变，平衡不变</b>：G 是状态函数，不给速率信息；催化剂只改路径',
 '“A catalyst changes how fast equilibrium is reached, not where it lies — Gibbs energy is a state function and says nothing about rate.”',
 '书没有这一句本身，是 p017 ＋ p054 接出来的。说 “it follows”。'],
['<b>效率</b>：urease 10¹⁴ 倍（vs H⁺ 催化）→ 稀溶液、低温、中性 pH',
 '“Urease speeds urea hydrolysis ten to the fourteenth times over hydrogen-ion catalysis.”',
 '已回原图核。比较对象是 H⁺ 催化，按书说。'],
['<b>专一性</b>：底物专一 ＋ 作用专一；否则细胞被不想要的产物淹没',
 '“Substrate specificity and specificity of action — otherwise the cell would very quickly be flooded with unwanted products.”',
 '酶 vs 化学催化剂的第一个差别。'],
['<b>可调控</b>：pH、浓度、抑制剂/激活剂；别构 ＋ 共价修饰；反馈抑制',
 '“An enzyme can be regulated — allosteric and covalently modulated enzymes, feedback inhibition. A platinum surface cannot be switched off.”',
 '把「作用」从化学升到生物学：酶是开关。'],
['<b>温度</b>：每 10 °C 约两倍；55–60 °C 失活；嗜热菌 85 °C',
 '“Roughly doubles per ten degrees until denaturation wins. Most enzymes go at 55 to 60, thermophilic ones still work at 85.”',
 'thermolabile 的兑现；85 那半句接 Taq。'],
['<b>六大类</b>＋ 三种名字；<b>Sumner 1926</b> urease；<b>留口子</b>：酶工程 ＝ 改坎的高度，我量的只是第一步',
 '“Six classes by the reaction catalysed. The first crystalline enzyme was urease, Sumner, 1926. Directed evolution selects on the barrier height. With yeast display I measure only the binding step.”',
 '细节在卡 18；口子落在 #7 和卡 02。']
],

segs:[
 {tag:'段 1 · 定义', h:'两个定义，先「是什么」再「干什么」',
  p:['“An enzyme is a protein specialised for catalysing the reactions that take place in living organisms — a biological catalyst. Two properties define it: very high <b>specificity</b> and very high <b>catalytic efficiency</b>. One qualification: until recently every known enzyme was a protein, but some RNAs also catalyse.”',
     '“A catalyst is a substance that speeds up a reaction by joining the reactants <b>transiently</b>, so that the reaction runs by a different mechanism with a <b>lower activation energy</b>. And it comes out unchanged. The activation energy is the energy the reactant molecules must be supplied with to get over the barrier between reactant and product.”'],
  note:'<b>两个定义两处出处</b>（p041、p054），主动把 RNA 的限定说了。「活化能」在第一屏就交代，因为它承重。'},
 {tag:'段 2 · general', h:'催化做了什么：三条路、两步、一张图、一句热力学',
  p:['“So what does catalysis do. There are three ways to make a reaction go faster: heat, catalysis, or light. Organisms cannot use heat, because they are mostly <b>thermolabile</b>. Light usually sends the reaction along a different coordinate. That leaves catalysis.”',
     '“The enzyme joins the substrate transiently into the <b>enzyme–substrate complex</b>, formed fast and reversibly through weak interactions. Then the complex breaks down into the original enzyme and the product, the slower step. On the energy diagram that is a lower path with a dip in the middle, and the same start and end points as the uncatalysed reaction.”',
     '“That is the point to make out loud: a catalyst changes the <b>rate</b>, not the <b>equilibrium</b>. Gibbs energy is a state function and says nothing about rate. The catalyst changes only the path.”'],
  note:'<b>「速率不是平衡」这句要自己说出来</b>，别等他问。它是全卡最容易被追的地方，而书 p017 已经把地基给了。'},
 {tag:'段 3 · 稍展开', h:'酶跟铂、跟 H⁺ 差在哪——「biochemical」那一半',
  p:['“What makes an enzyme different from hydrogen ions or a platinum surface is three things, and they are the biological half of the answer.”',
     '“First, <b>specificity</b>: substrate specificity and specificity of action — otherwise, the textbook says, the cell would very quickly be flooded with unwanted products.”',
     '“Second, <b>efficiency under mild conditions</b>: urease accelerates urea hydrolysis ten to the fourteenth times over hydrogen-ion catalysis, and because of that most reactions in the cell run in dilute solution, at low temperature and at neutral pH.”',
     '“Third, <b>regulation</b>: pH, substrate and coenzyme concentration, inhibitors and activators, and the regulatory enzymes, allosteric and covalently modulated. The classic pattern is feedback inhibition.”',
     '“So the role of enzymes is to make the reactions of metabolism run at a useful rate, only the wanted ones, and under control. They are classified into six classes by the reaction they catalyse — oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases.”'],
  note:'<b>三个差别对应三个动词。</b>六大类一句带过就够——他要细节，卡 18 有。'},
 {tag:'段 4 · 留口子', h:'酶是蛋白质，所以能被工程；而我量的只是第一步',
  p:['“Where this meets my own work: because an enzyme is a protein, it can be mutated and selected. That is directed evolution, and what selection acts on is the height of the barrier. The textbook’s two-step mechanism says binding and the chemical step are separable, so they can be improved separately.”',
     '“With yeast display I measure only the first step — binding, as a dissociation constant, with no turnover involved. Binding is necessary for catalysis but it is not the same thing: a molecule that binds and is not converted is an inhibitor.”'],
  note:'<b>两个口子都在你的地盘</b>：directed evolution（#7）和 Kd（卡 02）。他追「第二步怎么量」，答活性测定（p058，卡 18 追问里有）。'}
],

why:{
 rungs:[
  ['为什么细胞非要有酶？','因为在体温和中性 pH 下，代谢反应<b>不催化就慢到等于不发生</b>；而加热这条路生物走不了——<b>生物是热不稳定的</b>（<span class="pg">p054</span>）。第 1 章直接说：多数生化反应只在催化剂存在下进行（<span class="pg">p016</span>）。'],
  ['那催化剂为什么能加速？','因为它<b>暂时和反应物结合</b>，反应<b>走另一条机制</b>，坎更矮（<span class="pg">p054</span>）。同一个温度下，能翻过矮坎的分子比能翻过高坎的多得多——所以快。'],
  ['为什么快了却不改变反应停在哪？','因为 <b>Gibbs 能是状态函数</b>，它的变化不取决于走哪条路，而且它<b>不给任何速率信息</b>（<span class="pg">p017</span>）。催化剂只换了路，起点终点没动——所以 ΔG 和 K 不变，正反两个方向一样加速。']
 ],
 stop:{lbl:'停 · 落在动力学（坎的高度怎么变成速率常数）',
  say:'“The next question down is how a given barrier height turns into a rate constant, through collision frequency and the fraction of molecules with enough energy. Below that we are in physical chemistry rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is an enzyme?',
  ez:'“It is a protein specialised for one job. That job is catalysing the reactions in living organisms. Functionally it is a catalyst. It catalyses the chemical reactions of organisms. Two properties define it. Very high specificity. And very high catalytic efficiency. One qualification is needed. Until recently all known enzymes were proteins. But some R N As also catalyse.”',
  ezcn:'<b>酶 ＝ 专门用来催化生物体内反应的蛋白质；功能上说，它是生物体化学反应的催化剂。</b><b>两个性质定义它：专一性极高、催化效率极高。</b>⚠ <b>要补一个限定：直到不久前所有已知的酶都是蛋白质，但有些 RNA 也能催化。</b>',
 mean:'正面定义，两处出处合成一句。<b>先「是什么」，再两个特点，再限定词。</b>',
 say:'“A protein specialised for catalysing the reactions that take place in living organisms — functionally, a catalyst of the chemical reactions of organisms. Two properties define it: very high specificity and very high catalytic efficiency. One qualification: until recently all known enzymes were proteins, but some RNAs also catalyse.”'},

{q:'What do enzymes do?',
  ez:'“Enzymes catalyse the reactions of living organisms. They are proteins. They join the reactants transiently. They take the reaction through a different mechanism. That mechanism has a lower activation energy. And they come out unchanged. Their role is three things. They make metabolism run at a useful rate. Each one is specific. So only the wanted reactions run. And they work under mild conditions.”',
  ezcn:'<b>酶催化生物体内的反应。</b><b>它们是蛋白质：暂时跟反应物结合，让反应改走一条活化能更低的机制，自己原样出来。</b><b>它们的作用是三件事：让代谢以有用的速度进行 · 因为各自专一，所以只让该发生的反应发生 · 而且这一切是在温和条件下完成的。</b>',
 mean:'<b>他真正会说的短句。</b>答案自带结构：是什么 → 催化剂做什么 → 三个动词 → 为什么是生物学。',
 say:'“Enzymes catalyse the reactions of living organisms. They are proteins that join the reactants transiently and take the reaction through a different mechanism with a lower activation energy, and they come out unchanged. Their role is three things. They make the reactions of metabolism run at a useful rate. Because each is specific, they make only the wanted reactions run. And they do it under conditions a cell can survive — dilute solution, low temperature, neutral pH. They can also be regulated, so all of it happens under control.”'},

{q:'What is a catalyst?',
  ez:'“It is a substance that speeds up a reaction. It joins the reactants transiently. So the reaction runs by a different mechanism. That mechanism has a lower activation energy. It is returned unchanged at the end. So it is not used up. It changes the rate. It does not change the equilibrium. In organisms the catalysts are the enzymes.”',
  ezcn:'<b>催化剂 ＝ 通过暂时跟反应物结合来加速反应的物质</b>：<b>反应因此改走一条活化能更低的机制，而它最后原样归还，不被消耗。</b><b>它改变速率，不改变平衡。</b><b>在生物体里，催化剂就是酶。</b>',
 mean:'<b>全卡最承重的名词。</b>一句：做什么、怎么做、自己怎么样。',
 say:'“A substance that speeds up a chemical reaction by joining the reactants transiently, so that the reaction runs by a different mechanism with a lower activation energy. It is returned unchanged at the end, so it is not used up. It changes the rate, not the equilibrium. In organisms the catalysts are the enzymes.”'},

{q:'What is the role of enzymes in biochemical reactions?',
  ez:'“Enzymes have three roles in biochemical reactions. First rate. They make metabolism fast enough to be useful. That holds at body temperature. Urease is the textbook’s example. It speeds its reaction by ten to the fourteenth. Second selection. Each enzyme is specific for one substrate. It is specific for one reaction. So only the wanted reactions run. Third conditions. They work in dilute solution. They work at low temperature and neutral p H.”',
  ezcn:'<b>三个作用。</b><b>① 速率</b>：<b>让代谢在体温下快到有用（书的例子是脲酶，把反应加快 10¹⁴ 倍）</b>。<b>② 选择</b>：<b>每个酶只认一个底物、只跑一个反应，所以只有该发生的反应发生</b>。<b>③ 条件</b>：<b>它们在稀溶液、低温、中性 pH 下工作。</b>',
 mean:'卷面原题。<b>「role」这个词要三个动词答</b>，不是一个；「biochemical」要答酶比普通催化剂多出来的东西。',
 say:'“Three roles. Rate: they make the reactions of metabolism run fast enough to be useful at body temperature. Urease, the textbook’s example, speeds its reaction by a factor of ten to the fourteenth. Selection: each enzyme is specific for one substrate and one reaction, so only the wanted reactions run — otherwise the cell would be flooded with unwanted products. Control: an enzyme can be regulated — by pH, by substrate and coenzyme concentration, by inhibitors and activators, and by feedback from the pathway’s own end product. A chemical catalyst gives you only the first.”'},

{q:'Is an enzyme different from an ordinary chemical catalyst?',
  ez:'“In what it does to the barrier, no. Both lower the activation energy. Both do it by offering a different mechanism. And neither changes the equilibrium. In three other things, yes. An enzyme is specific. It takes one substrate and one reaction. Hydrogen ions catalyse every hydrolysable bond. An enzyme works in dilute solution. It works at low temperature and neutral p H. And an enzyme can be regulated.”',
  ezcn:'<b>在「对能垒做了什么」这件事上没有区别</b>：<b>两者都靠提供另一条机制来降低活化能，而且都不改变平衡</b>。<b>在另外三件事上有区别</b>：<b>酶是专一的（一个底物、一个反应），而氢离子会催化每一根可水解的键</b>；<b>酶在稀溶液、低温、中性 pH 下工作</b>；<b>而且酶可以被调控。</b>',
 mean:'<b>「biochemical」这个限定词的正面问法。</b>先说相同，再说三个不同。',
 say:'“In what it does to the barrier, no — both lower the activation energy by offering a different mechanism, and neither changes the equilibrium. In three other things, yes. An enzyme is specific — one substrate, one reaction. Hydrogen ions, by contrast, catalyse every hydrolysable bond. It works in dilute solution at low temperature and neutral pH, where a chemical catalyst usually needs heat or strong acid. And it can be regulated, switched down by its own pathway’s product. No platinum surface can do that.”'},

{q:'Do enzymes provide the energy for a reaction?',
  ez:'“No. An enzyme lowers the barrier. It does not supply energy. The molecules carry themselves over the barrier. Their own thermal energy does it. The energy balance is set elsewhere. Gibbs energy sets it, from reactant to product. And no catalyst can touch that. So an enzyme makes a slow downhill reaction fast. It cannot make an uphill one go. The cell handles that by coupling to A T P.”',
  ezcn:'<b>不提供。酶压低能垒，不提供能量。</b><b>把分子送过能垒的是它们自己的热运动能量。</b><b>反应从反应物到产物的能量账由吉布斯自由能定，任何催化剂都动不了它。</b><b>所以酶能让一个「下坡但很慢」的反应变快，却不能让一个上坡的反应走起来——那件事细胞靠跟 ATP 偶联来解决。</b>',
 mean:'<b>陷阱。</b>答「是」就错了。而且它连着第二个陷阱：「不会发生」有两个意思——太慢，和热力学禁止。',
 say:'“No. An enzyme lowers the barrier. It does not supply energy. The energy that carries molecules over the barrier is their own thermal energy. The energy balance of the reaction, reactant to product, is set by Gibbs energy, and no catalyst can touch that. So an enzyme makes a slow downhill reaction fast. It cannot make an uphill one go. The cell handles uphill steps by coupling them to a downhill one — usually the hydrolysis of ATP. The enzyme that physically couples the two is a ligase in the textbook’s classification, the class that makes a bond at the cost of ATP.”',
 tail:'耦合在 p017（吸能反应能进行，只要同时有放能反应且总 ΔG < 0）；ligases「成键并同时水解 ATP」在 p042。<span class="pg">p017 p042</span>'},

{q:'Why does meat tenderiser work?',
  ez:'“Because it is a protease. It is papain, from papaya. The textbook lists it among the cysteine proteases. A protease hydrolyses peptide bonds. Those are the bonds between amino acids. They are in the meat’s proteins. Collagen matters most there. Collagen is the connective tissue protein. The enzyme does at room temperature what your own proteases do. Trypsin and pepsin do it in the gut.”',
  ezcn:'因为<b>它是一个蛋白酶</b>——<b>木瓜蛋白酶 papain，书把它列在半胱氨酸蛋白酶里</b>。<b>蛋白酶水解肽键，也就是肉里蛋白质中氨基酸之间的键，尤其是结缔组织蛋白胶原。</b><b>它在室温、稀溶液、接近中性的条件下，做的正是你自己的胰蛋白酶和胃蛋白酶在肠胃里做的事。</b>', odd:1,
 mean:'问的是<b>水解酶的作用</b>——蛋白酶在厨房条件下切肽键。',
 say:'“Because it is a protease — papain from papaya, listed in the textbook among the cysteine proteases. A protease hydrolyses peptide bonds, the bonds between the amino acids in the meat’s proteins, especially the connective-tissue protein collagen. It does at room temperature, in a dilute, near-neutral solution, what your own trypsin and pepsin do in the gut. That is the point about efficiency: without an enzyme, peptide-bond hydrolysis under those conditions is practically nil.”',
 tail:'papain p116（table 5.1：papaya，pH 8，切 Lys、Phe 之后）；collagen 是结缔组织成分 p040。<b>「嫩不嫩主要看 collagen」是通用说法，书里没有。</b><span class="pg">p116 p040</span>'},

{q:'Why does hydrogen peroxide fizz on a cut?',
  ez:'“Because blood and tissue contain catalase. The textbook does not discuss that enzyme. It decomposes hydrogen peroxide. The products are water and oxygen. The fizz is oxygen gas. Hydrogen peroxide is thermodynamically unstable. But on its own it decomposes slowly. The enzyme lowers the barrier. So it goes in seconds instead.”',
  ezcn:'因为<b>血液和组织里有过氧化氢酶</b>（⚠ <b>这个酶书上没讲</b>）。<b>它把过氧化氢分解成水和氧气——冒的泡就是氧气。</b><b>过氧化氢在热力学上本来就不稳定，但它自己分解得很慢；酶把能垒压低，于是几秒钟就完成了。</b>', odd:1,
 mean:'问的是<b>催化剂让一个本来就下坡的反应跑起来</b>。',
 say:'“Because blood and tissue contain catalase, an enzyme the textbook does not discuss. It decomposes hydrogen peroxide into water and oxygen, and the fizz is oxygen gas. Hydrogen peroxide is thermodynamically unstable, but on its own it decomposes slowly. The enzyme lowers the barrier so it goes in seconds. A catalyst accelerating a reaction that was always downhill — the textbook’s definition in one bottle.”',
 tail:'⚠ catalase <b>书里没有</b>（全书 grep 无）；说的时候标 “not in the textbook”。'},

{q:'Why can we digest starch but not cellulose?',
  ez:'“Because we have no enzyme for it. Starch and cellulose are both chains of glucose. The difference is the geometry of the link. Starch uses alpha. Cellulose uses beta. The textbook gives the two disaccharides. Maltose is the alpha one. Cellobiose is the beta isomer. And our amylases are specific for the alpha link. The textbook says cellulases occur mainly in microorganisms.”',
  ezcn:'因为<b>我们没有对应的酶</b>。<b>淀粉和纤维素都是葡萄糖的链，差别在连接的几何构型：淀粉是 α，纤维素是 β。</b><b>书给了那两个二糖：麦芽糖是 α 型，纤维二糖是 β 型异构体。</b><b>而我们的淀粉酶只认 α 键；书说纤维素酶主要存在于微生物里。</b>', odd:1,
 mean:'问的是<b>专一性</b>——同一个单体，一个键的立体化学不同，就没有酶。',
 say:'“Because we have no enzyme for it. Starch and cellulose are both chains of glucose. The difference is the geometry of the link: alpha in starch, beta in cellulose. The textbook’s maltose is 4-O-alpha-D-glucopyranosyl-D-glucose, and cellobiose is the 4-O-beta isomer. And our amylases are specific for the alpha link. The textbook says cellulases occur mainly in microorganisms and rarely in animals, and that when cellulose is digested as food it is practically always by microflora, the rumen being its example. That is specificity in one sentence: same monomer, one bond geometry different, no enzyme, no reaction at 37 degrees.”',
 tail:'<span class="pg">p155 p156 p173</span>'},

{q:'Why do we keep food in the fridge?',
  ez:'“Because cooling slows every reaction. Enzyme reactions are included. The textbook gives the rule. The rate roughly doubles per ten degrees. So room temperature to four degrees is about a threefold slowing. Two sets of enzymes are being slowed. Those of the food itself. And those of the microbes on it. Cold does not denature. It is reversible.”',
  ezcn:'因为<b>降温让所有反应都变慢，酶反应也不例外</b>。<b>书的通则是：温度每升十度速率大约翻倍——所以从室温降到 4 ℃ 大约慢三倍。</b><b>被放慢的是两套酶：食物自己的，和上面那些微生物的。</b>⚠ <b>冷不会让酶变性，它是可逆的。</b>', odd:1,
 mean:'问的是<b>温度对酶反应速率的影响</b>，而且是可逆的那一侧。',
 say:'“Because cooling slows every reaction, enzyme reactions included. The textbook’s rule is that the rate roughly doubles per ten degrees, so from room temperature to four degrees is about a threefold slowing. The enzymes being slowed are those of the food itself and of the microbes on it. Cold does not denature. It is reversible, which is why spoiling resumes when the food warms up. Freezing takes the same principle further.”',
 tail:'每 10 °C 两倍在 <span class="pg">p058</span>；「三倍」是按书的规则算的（20 → 4 °C 差 16 度，2^1.6 ≈ 3），不是书的数。'},

{q:'Does a fever cook your enzymes?',
  ez:'“Not at the temperatures a fever reaches. The textbook gives two numbers. The rate rises about twofold per ten degrees. And most enzymes are inactivated around fifty five to sixty. A fever of thirty nine or forty is a few degrees above normal. So enzyme rates change by tens of per cent. And nothing is anywhere near denaturing. So on the textbook’s numbers the answer is no.”',
  ezcn:'<b>发烧到的温度不会。</b><b>书给了两个数：速率每十度约翻一倍，而大多数酶在 55–60 ℃ 才失活。</b><b>39–40 度只比正常高几度，所以酶的速率变化是几十个百分点的量级，离变性差得很远。</b><b>按书上的数字，答案是不会。</b>', odd:1,
 mean:'<b>用书的数字打一个常见说法。</b>',
 say:'“Not at the temperatures a fever reaches. The textbook gives two numbers: the rate rises about twofold per ten degrees, and most enzymes are inactivated around 55 to 60 degrees. A fever of 39 or 40 is a few degrees above 37, so enzyme rates change by tens of percent and nothing is anywhere near denaturing. So on the textbook’s numbers, no — what a fever does for or against you is physiology, and not in the book.”',
 tail:'<span class="pg">p058 p059</span>'},

{q:'Why do washing powders contain enzymes?',
  ez:'“Because the stains are biological polymers. They are protein, fat and starch. The enzymes in the powder match them. They are proteases, lipases and amylases. They hydrolyse the stains at thirty or forty degrees. They do it in dilute solution. That is exactly the property the textbook attributes to enzymes. Reactions run in dilute solution at low temperature.”',
  ezcn:'因为<b>污渍就是生物聚合物：蛋白、脂肪、淀粉</b>。<b>洗衣粉里的酶跟它们一一对应：蛋白酶、脂肪酶、淀粉酶</b>；<b>它们在三四十度、稀溶液里就把这些污渍水解掉</b>。<b>这正是书赋予酶的那个性质：反应能在稀溶液、低温下进行。</b>', odd:1,
 mean:'问的是 p061 那句话本身：<b>稀溶液、低温、中性 pH</b>。',
 say:'“Because the stains are biological polymers: protein, fat, starch. The enzymes in the powder are proteases, lipases and amylases, and they hydrolyse the stains at thirty or forty degrees in dilute solution. Detergents themselves are not in the textbook. That is exactly the property the textbook attributes to enzymes: reactions in dilute solution, at low temperature, at neutral pH. Without an enzyme you would need boiling and strong acid or base — the heating route organisms cannot use, and your clothes would not like it either.”'},

{q:'Does an enzyme need a living cell to work?',
  ez:'“No. Buchner showed that in eighteen ninety seven. Fermentation is a chemical process. A yeast extract with no living cells converts sugar to alcohol. The textbook’s timeline calls it proof of the chemical nature of fermentation. That is what makes enzymes biochemistry. They can be taken out of the cell. They can be studied in a test tube.”',
  ezcn:'<b>不需要。</b><b>Buchner 在 1897 年证明了发酵是一个化学过程：不含活细胞的酵母提取液照样把糖变成酒精。</b><b>书的年表里把它记作「证明发酵的化学本质」。</b><b>这正是酶属于生物化学而不是生物学的原因：它们可以被拿出细胞，在试管里研究。</b>', odd:1,
 mean:'问的是 <b>Buchner 1897</b>，也是「生化为什么能在试管里做」。',
 say:'“No. Buchner showed in 1897 that fermentation is a chemical process — a yeast extract with no living cells converts sugar to alcohol. The textbook’s timeline entry is ‘proof of the chemical nature of fermentation’. That is what makes enzymes biochemistry rather than biology: they can be taken out of the cell and studied in a test tube. That is in vitro, the reductionist approach the textbook describes in its first chapter.”',
 tail:'年表 <span class="pg">p009</span>；in vitro 与还原论 <span class="pg">p016</span>。「无细胞提取液」是对年表那一行的通用解释。'}
],

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p054_obr31_activation_energy.jpg',
  t:'能量图 —— 速背第 7 点说的就是这一张（书 Obr. 3.1）',
  cap:'<b>这是这道题唯一的一张图，也是整道题的论证变成看得见的那一刻。</b>'
    + '书的图注把字母全交代了：<b>A</b> 是起始物、<b>AK</b> 是 A 跟催化剂 K 的复合物、<b>P</b> 是产物、<b>E₀ E₁ E₂</b> 都是活化能；'
    + '曲线 <b>2</b> 是<b>不催化</b>的，曲线 <b>1</b> 是<b>催化</b>的。'
    + '<br><br><b>画的顺序（六步）</b>:'
    + '<br>① 两条轴：纵轴那个词就是<b>能量</b>，横轴那行字就是<b>反应进程</b>。说的时候说 energy 和 reaction coordinate。'
    + '<br>② 左边一条水平线标 <b>A</b>，右边一条<b>更低</b>的水平线标 <b>P</b>。'
    + '<br>③ 曲线 <b>2</b>（不催化，实线）：从 A 起一个<b>又高又宽的鼓包</b>再落到 P；从 A 的高度到包顶画一根竖箭头，标 <b>E₀</b>。'
    + '<br>④ 曲线 <b>1</b>（催化，虚线）：从 A 起一个<b>小鼓包</b>（竖箭头标 <b>E₁</b>），然后<b>掉进一个比 A 还低的坑</b>，坑底标 <b>AK</b>。'
    + '<br>⑤ 从坑里再起<b>第二个小鼓包</b>（竖箭头标 <b>E₂</b>），然后下到 P。'
    + '<br>⑥ 最后检查一遍：<b>两条曲线的起点和终点完全重合</b>。这一点是整张图的结论，画的时候一定要画准。'
    + '<br><br><b>边画边说的三句</b>：“The uncatalysed reaction is <b>one big hump</b> between reactant A and product P. The catalysed one is a lower path with <b>two small humps and a dip</b> between them, and the dip is the transient complex of A with the catalyst.”'
    + '<br>“Both curves start at A and end at P at the <b>same heights</b>. So the energy difference between reactant and product is unchanged and only the <b>barrier</b> changes. A catalyst changes how fast equilibrium is reached, not where it lies.”'
    + '<br>“The well below A means the complex is <b>more stable than free A</b>, so binding is downhill. The two small humps are the two steps of the textbook’s mechanism: <b>binding</b> first, then the <b>chemical step</b>.”'
    + '<br><br>⚠ <b>标号按书上的来（回原图核过）</b>：书把不催化那个大包标成 <b>E₀</b>，<b>E₁ 和 E₂ 是催化那条路上的两个小包</b>，图注里三个字母都列了。'
    + '速背第 7 点原来写的是「大包标 E₂」，<b>按原图改成 E₀</b>；⑤ 那一行原来只提了两个活化能，书上是三个。',
  src2:'Biochemie, Obr. 3.1, p054 · 280 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p059_two_step_mechanism.jpg',
  t:'两步机制 —— 速背第 6 点，书把三个速率常数印出来了（书 p059）',
  cap:'<b>这张是「认」，它就是上一张图里「两个小鼓包夹一个坑」的代数写法。</b>'
    + '<br><b>第一步</b> <code>E + A ⇌ EA</code>：结合。<b>快、可逆</b>，靠弱相互作用，正反两个方向各有一个速率常数 <b>k₁</b> 和 <b>k₋₁</b>。'
    + '<br><b>第二步</b> <code>EA → E + X</code>：催化。<b>慢、不可逆</b>，速率常数 <b>k₂</b>，酶原样出来。'
    + '<br><br><b>看到图要说的那一段</b>：“Even the simplest enzyme reaction runs in <b>two steps</b>. First the substrate binds to the enzyme and gives the enzyme-substrate complex, and that step is <b>fast and reversible</b>, held together by weak interactions. Then the chemical change happens and the complex breaks up into free enzyme and product, and that step is <b>slower and irreversible</b>. The enzyme comes out unchanged, which is exactly what makes it a catalyst.”'
    + '<br><br><b>两个小鼓包正好对上两步</b>：第一个包是结合，坑底是 EA，第二个包是化学那一步。<b>图和式子说的是同一件事</b>，一起给他，比只说一句有力。'
    + '<br>三个常数怎么组合成 K<sub>m</sub>，在卡 <b>02</b>。⚠ 这张反应式在书上还往下挂着 EI 和 EAI 两支（被裁掉了），那是卡 <b>19</b> 的内容。',
  src2:'Biochemie, p059（§3.5 开头那张反应式；两步机制的正文在 p054）· 300 dpi 原图裁切，未修改'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这题的词都是最基本的，所以最容易被当成「不用解释」——正是要查的地方。', items:[
{r:'高', q:'What is catalysis?',
    ez:'“Catalysis is the acceleration of a reaction. A substance does the accelerating. That substance takes part in the reaction. It takes part only transiently. Then it is regenerated. The catalyst joins the reactants. The reaction then runs by a different mechanism. That mechanism has a lower activation energy. The catalyst comes out unchanged. The textbook lists three ways to speed a reaction. The others are heat and light. Catalysis is the only one organisms can use.”',
    ezcn:'<b>催化 ＝ 一个物质让反应变快</b>，它<b>参与反应但只是暂时的</b>，<b>最后又被还原出来</b>。<b>催化剂跟反应物结合，反应改走另一条机制，那条机制的活化能更低，催化剂原样出来。</b>书说加速反应有三条路：<b>加热、光照、催化</b>——<b>只有催化是生物体用得起的那条。</b>',
 en:'“Catalysis is the acceleration of a reaction by a substance that takes part in it transiently and is regenerated. The catalyst joins the reactants, the reaction runs by a different mechanism with a lower activation energy, and the catalyst comes out unchanged. It is one of the textbook’s three ways of speeding a reaction, next to heat and light, and the only one organisms can use.”',
 cn:'p054。'},
{r:'高', q:'What is activation energy?',
    ez:'“It is the energy the reactant molecules must be supplied with. They need it to get over the barrier. The barrier stands between reactant and product. Those are the textbook’s words. On the energy diagram it is the height of the hump. The hump is measured above the starting level. The horizontal axis is the reaction coordinate. It tracks how far old bonds have stretched. It also tracks how far new ones have formed. Heat supplies the activation energy. It raises the molecules’ energy. A catalyst lowers the barrier instead. It offers a different path.”',
    ezcn:'<b>活化能 ＝ 反应物分子必须被供给的那份能量</b>，<b>用来翻过反应物和产物之间的那道坎</b>（书的原话）。<b>在能量图上它就是那个鼓包的高度</b>，从起点算起。横轴叫<b>反应坐标</b>，记的是<b>旧键拉伸了多少、新键形成了多少</b>。<b>加热是从下面把分子能量抬上去；催化剂是从上面把坎压下来——它给出另一条路。</b>',
 en:'“The energy the reactant molecules must be supplied with to get over the barrier between reactant and product — the textbook’s words. On the energy diagram it is the height of the hump above the starting level. The horizontal axis, the reaction coordinate, tracks how far the old bonds have stretched and the new ones formed. Heat supplies the activation energy by raising the molecules’ energy. A catalyst lowers it by offering a different path.”',
 cn:'p054 figure 3.1：E₂ 不催化，E₁ 催化。「reaction coordinate」书在光那条路里用了：光激发后反应通常走<b>另一条反应坐标</b>——另一条路，不只是同一条路上矮一点的坎。<br><br><b>活化能定量上是什么</b>：<b>它不是一个能量差，是一个门槛。</b>同一温度下，能量够得着它的分子只占 <code>e^(−Ea/RT)</code>；25 °C 时 <code>RT = 2.48 kJ/mol</code>，<code>RT·ln10 = 5.71 kJ/mol</code>——<b>Ea 每高 5.71 kJ/mol，够格的分子就少一个数量级。</b>整段算法（为什么降低它是乘不是加、urease 的 10¹⁴ 对应 80 kJ/mol）在追问「Why does a lower barrier make the reaction faster?」那一条里。'},
{r:'高', q:'What is the transition state?',
    ez:'“It is the highest energy arrangement on the path. The path runs from reactant to product. At that point old bonds are half broken. New bonds are half formed. The energy needed to reach it is the activation energy. The term itself is general. The textbook speaks only of the energy barrier. Lehninger puts it another way. An enzyme’s active site is complementary to the transition state. It binds that state more tightly than the substrate. The textbook’s way is simpler. The reaction runs by a different mechanism.”',
    ezcn:'<b>过渡态 ＝ 从反应物走到产物这条路上能量最高的那个排布</b>：<b>旧键断了一半，新键成了一半</b>。<b>走到它需要的能量就是活化能。</b>⚠ <b>这个词是通用说法，捷克书只说「能垒」。</b>Lehninger 的说法是：<b>酶的活性中心跟过渡态互补，抓过渡态比抓底物更紧</b>；捷克书的说法更简单：<b>反应改走了另一条机制</b>。',
 en:'“The highest-energy arrangement along the path from reactant to product — old bonds half broken, new bonds half formed. The energy needed to reach it is the activation energy. The term is general. The textbook speaks only of the energy barrier. Lehninger’s way of saying what an enzyme does is that its active site is complementary to the transition state and binds it more tightly than the substrate. The textbook’s way is that the reaction runs by a different mechanism.”',
 cn:'<b>书里没有这个词</b>。书和 Lehninger 的说法不矛盾，是同一件事的两种描述——说的时候把两种都点名。'},
{r:'高', q:'What is a substrate? And a product?',
    ez:'“The substrate is the reactant the enzyme acts on. It is the molecule that binds the enzyme. It is the one that gets converted. The textbook writes it as A. The product is what comes out. The textbook writes it as X. Between them sits the enzyme substrate complex. The textbook writes that as E A. It breaks down into the product and the original enzyme.”',
    ezcn:'<b>底物 ＝ 酶作用的那个反应物</b>，也就是<b>结合到酶上、被转化的那个分子</b>（书里记作 <b>A</b>）。<b>产物 ＝ 出来的那个</b>（记作 <b>X</b>）。<b>中间是酶–底物复合物 EA</b>，<b>它分解成产物和原来的酶。</b>',
 en:'“The substrate is the reactant the enzyme acts on — the molecule that binds the enzyme and is converted. The textbook writes it A. The product is what comes out — the textbook writes it X. Between them sits the enzyme–substrate complex, EA. It breaks down into product and the original enzyme.”',
 cn:'p054 §3.3.1 用的字母是 A 和 X，不是 S 和 P——他用哪套都要认得出来。'},
{r:'高', q:'What is the difference between the rate of a reaction and its equilibrium?',
    ez:'“Equilibrium is where the reaction ends up. It is the ratio of product to reactant that stops changing. It stops changing when forward and reverse rates are equal. The Gibbs energy change sets it. Delta G naught equals minus R T ln K. So equilibrium belongs to thermodynamics. Rate is how fast the reaction gets there. The mechanism and the barrier set it. So rate belongs to kinetics. The textbook is explicit. Gibbs energy gives no information about rate. An enzyme changes only the rate.”',
    ezcn:'<b>平衡是反应最后停在哪儿</b>：<b>产物和反应物的比例不再变，因为正逆反应速率相等了</b>。<b>它由吉布斯自由能变决定</b>（<b>ΔG° ＝ −RT ln K</b>），<b>属于热力学</b>。<b>速率是多快走到那儿</b>，<b>由机制和能垒决定，属于动力学</b>。<b>书说得很明确：吉布斯自由能不提供任何关于速率的信息。酶只改变速率。</b>',
 en:'“Equilibrium is where the reaction ends up — the ratio of product to reactant that stops changing once the forward and the reverse rate are equal. It is set by the Gibbs-energy change, delta G naught equals minus R T ln K, and it belongs to thermodynamics. Rate is how fast it gets there — set by the mechanism and the barrier, and belonging to kinetics. The textbook says Gibbs energy gives no information about rate. An enzyme changes only the rate.”',
 cn:'p017、p018。<b>「热力学 / 动力学」两块地基的分界线，32 张卡共用</b>；完整版在卡 02 的追问里。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG°′ = −RT ln K</code>。R = 8.314 J·mol⁻¹·K⁻¹ · T 是绝对温度 · K 是平衡常数 · 撇 ＝ 生化标准态（pH 7）。<br><b>三步推导</b>（他问「这式子哪来的」就照这个说）：<br>① 每个组分的化学势 <code>μ = μ° + RT ln a</code>，a 是活度，稀溶液里当浓度用（书 p017–p018 的起点）。<br>② 平衡时整个体系 <code>ΔG = 0</code>，把各组分的 μ 按化学计量代进去。<br>③ 整理出来，常数项就是 ΔG°′，对数里剩下的那个浓度比就是 K → <code>ΔG°′ = −RT ln K</code>（书 p018 印成 −ΔG°′ = RT ln K，同一件事）。换成十进制好用：<code>ΔG°′ = −5.71·log K</code>（25 °C），<b>K 每差十倍，ΔG°′ 差 5.71 kJ/mol</b>。<br><br><b>=== 一句话理解 ===</b><br><b>把这个式子从头看到尾，里面只有 K、R、T——没有时间，没有路径，没有任何一个跟「多快」有关的量。</b>书说「Gibbs 能不给任何速率信息」不是一句提醒，是<b>这个式子里根本就没有那一栏</b>。<br>对着动力学那边看：<code>k = A·e^(−Ea/RT)</code> 里有 Ea（坎），<b>却没有 ΔG°′（终点）</b>。<b>两个式子共用的只有 R 和 T，再没有别的。</b>酶动的是 Ea，而 Ea 不在第一个式子里——<b>「改速率不改平衡」就是这一句，不用再绕。</b><br>⚠ Arrhenius 那个式子<b>书里没有</b>，是通用的；书只在 p017 写了「决定速率的是具体机制」。'},
{r:'高', q:'What is specificity?',
    ez:'“Specificity means the enzyme discriminates. It converts only a particular substrate. That is substrate specificity. And it converts that substrate by only one reaction. That is specificity of action. Both come from the active site. The active site is a few side chains. The tertiary structure arranges them. They are arranged so that only one substrate fits.”',
    ezcn:'<b>专一性 ＝ 酶会挑。</b>它<b>只转化某一个底物</b>（<b>底物专一性</b>），而且<b>只用一个反应去转化它</b>（<b>作用专一性</b>）。<b>两者都来自活性中心</b>——<b>三级结构把几个侧链摆成一个只有那一个底物塞得进去的形状。</b>',
 en:'“Specificity means the enzyme discriminates. It converts only a particular substrate, which is substrate specificity, and it converts it by only one reaction, which is specificity of action. It comes from the active site, a few side chains arranged in the tertiary structure so that only one substrate fits. The full story is card 18.”',
 cn:'p061。'},
{r:'中', q:'What does thermolabile mean?',
  ez:'“Thermolabile means destroyed by heat. The textbook uses it for a reason. Organisms cannot speed their reactions by heating. They are mostly thermolabile. Their catalysts are proteins. Above a critical temperature denaturation wins. It wins over the rate increase. Most enzymes are inactivated around fifty five to sixty degrees. Denaturation means the fold comes apart. The chain itself stays intact.”',
  ezcn:'<b>热不稳定 ＝ 被热破坏。</b><b>书用这个词是为了解释一件事：生物体不能靠加热来加快自己的反应，因为它们大多是热不稳定的——它们的催化剂是蛋白质，超过某个临界温度，蛋白的热变性就压过了速率的增加。</b><b>大多数酶在 55–60 ℃ 附近失活。</b><b>变性的意思是折叠散开而链本身完好：维持三级结构的那些弱相互作用断了，活性中心也跟着没了。</b>',
 en:'“Destroyed by heat. The textbook’s reason organisms cannot speed their reactions by heating is that they are mostly thermolabile. Their catalysts are proteins, and above a critical temperature thermal denaturation of the protein wins over the rate increase. Most enzymes are inactivated around 55 to 60 degrees. Denaturation means the fold comes apart while the chain stays intact — the weak interactions that hold the tertiary structure break, and with them the active site.”',
 cn:'p054、p058–p059。变性的定义在卡 01。'},
{r:'中', q:'What is molecular activity — the turnover number?',
  ez:'“It is the number of substrate molecules one enzyme molecule converts. It is counted per unit time. The textbook uses it as the measure of catalytic capacity. It defines it per minute. The general k cat is per second instead. It comes from V max. The molar mass of the enzyme is needed too.”',
  ezcn:'<b>分子活性（转换数）＝ 一个酶分子在单位时间里转化多少个底物分子，书拿它当酶催化能力的度量。</b>⚠ <b>书按「每分钟」定义，通用的 kcat 是「每秒」。</b><b>它由 Vmax 和酶的摩尔质量算出来。</b>',
 en:'“The number of substrate molecules one enzyme molecule converts per unit time — the textbook’s measure of an enzyme’s catalytic capacity, defined per minute. The general k cat is per second. It comes from V max and the molar mass of the enzyme.”',
 cn:'p058。报数之前先说清按分钟还是按秒——卡 02 也有这条。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>三个量别混</b>（前两个量的是<b>酶有多少</b>，第三个量的是<b>一个酶分子有多能干</b>）：<br><code>1 U ＝ 每分钟转化 1 μmol 底物所需的酶量</code>（书 p058：标准条件 ＝ 该酶的最适 pH、25 °C）<br><code>1 katal ＝ 每秒转化 1 mol 底物所需的酶量</code>（SI 单位，书 p058）<br><code>MA 分子活性（旧名 turnover number）＝ 一个酶分子每分钟转化的底物分子数</code>（书 p058）<br><br><b>6×10⁷ 是怎么来的</b>（书 p058 直接写了 <code>1 kat = 6×10⁷ U</code>，但它其实只是两次单位换算）：<br>① 摩尔换微摩尔：<code>1 mol = 10⁶ μmol</code>。<br>② 秒换分钟：<code>每秒 ＝ 60 × 每分钟</code>。<br>③ <code>10⁶ × 60 = 6×10⁷</code>。<b>这个数里没有一点生物学，纯粹是单位。</b><br><b>同理 MA 和 k<sub>cat</sub> 之间也只差一个 60</b>：<code>MA（每分钟）= 60 × k<sub>cat</sub>（每秒）</code>。<b>书按分钟，通用文献按秒——报数之前先说按哪个，不然差 60 倍。</b><br><b>MA 怎么从 V<sub>max</sub> 算</b>（书只说「可由 V<sub>max</sub> 和酶的分子量求出」，没写式子）：<code>k<sub>cat</sub> = V<sub>max</sub> ÷ [E]ₜ</code>，而 <code>[E]ₜ = 酶的质量浓度 ÷ 摩尔质量</code>。<b>分子量就是在这一步用掉的</b>——它把「几毫克蛋白」换成「几摩尔分子」。<br><br><b>=== 一句话理解 ===</b><br><b>U 和 katal 回答「这管液体里有多少干活的能力」，MA 和 k<sub>cat</sub> 回答「一个分子一分钟干几件事」。</b>前者不需要知道有几个酶分子（所以纯不纯、分子量知不知道都能报），后者非知道不可——<b>这正是书为什么说「量酶通常用活性而不用克或摩尔」：多数时候你根本不知道有多少分子。</b><br>而 MA 本身就是「酶不被消耗」这句话的<b>数字形式</b>：它能大到每分钟成千上万，唯一的原因是<b>同一个分子被反复用</b>。<b>如果酶是消耗品，MA 最大只能是 1。</b>'},
{r:'中', q:'What is a biochemical reaction — is it different from a chemical one?',
  ez:'“Not in its laws. The thermodynamics is the same. So is the kinetics. What differs is the conditions. And the catalyst. A biochemical reaction runs in water. It runs in dilute solution. It runs at low temperature. And it runs near neutral p H. Almost always an enzyme is present. The textbook says most biochemical reactions run only with catalysts. Nearly all of those are enzymes.”',
  ezcn:'<b>在规律上没有区别——同样的热力学、同样的动力学。</b><b>不同的是条件和催化剂：生化反应在水里、在稀溶液里、在低温和接近中性的 pH 下进行，而且几乎总有一个酶在场。</b><b>书说大多数生化反应只有在催化剂存在时才进行，而这些催化剂几乎全是酶。</b>',
 en:'“Not in its laws — the same thermodynamics and the same kinetics. What is different is the conditions and the catalyst. A biochemical reaction runs in water, in dilute solution, at low temperature and near-neutral pH, and almost always in the presence of an enzyme. The textbook says most biochemical reactions run only in the presence of catalysts, nearly all of them enzymes.”',
 cn:'p016、p061。「biochemical」这个限定词的正面定义。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方。', items:[
{r:'高', q:'Why does a lower barrier make the reaction faster?',
    ez:'“Because only some molecules can react at a given temperature. They must have energy above the barrier. That fraction falls off steeply as the barrier rises. The textbook says it for heat. Raising the temperature raises the molecules’ energy. It raises their ability to get over the barrier. Lowering the barrier does the same thing from the other side. And it does it at constant temperature. How steeply the fraction falls is physical chemistry. It is exponential.”',
    ezcn:'因为<b>在某个温度下，只有能量高过那道坎的那部分分子才能反应</b>，<b>而这个比例随着坎变高急剧下降</b>。书是从加热那边说的：<b>升温提高分子的能量，也提高它们翻过能垒的能力</b>。<b>把坎压低是从另一边做同一件事，而且不用升温。</b>（比例下降有多陡是指数关系，那是物理化学。）',
 en:'“Because at a given temperature only the fraction of molecules with energy above the barrier can react, and that fraction falls off steeply with barrier height. The textbook says it for heat: raising the temperature raises the molecules’ energy and their ability to get over the barrier. Lowering the barrier does the same thing from the other side, at constant temperature. How steeply it falls off, the exponential, is physical chemistry.”',
 cn:'书只给了加热那一半（p054）；「指数」是通用。停止句就在句尾。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>k = A·e^(−Ea/RT)</code>（Arrhenius）。k 是速率常数 · Ea 是活化能 · A 是碰撞频率和方向合适的那一部分 · <code>e^(−Ea/RT)</code> 是<b>能量够得着坎顶的分子占多大比例</b>（Boltzmann 因子）。<br><b>三步说清「为什么是乘不是加」</b>：<br>① 能反应的只有能量高过 Ea 的那一撮，这个比例是 <code>e^(−Ea/RT)</code>——<b>Ea 待在指数的位置上。</b><br>② 坎降低 ΔEa 之后，新旧速率之比 <code>k₂ ÷ k₁ = e^(ΔEa/RT)</code>。<b>A 和 Ea 的绝对值全约掉了，只剩下「降了多少」。</b><br>③ 所以降低活化能对速率的作用是<b>乘一个倍数</b>，而且这个倍数<b>只取决于降了多少，跟原来那道坎多高完全无关</b>。<br><br><b>把 25 °C 的数代进去（这是全卡最该记住的一个数）</b>：<code>RT = 2.48 kJ/mol</code>，<code>RT·ln10 = 5.71 kJ/mol</code> → <b>坎每矮 5.71 kJ/mol，速率就乘 10。</b><b>这跟卡 02 里「Kd 每差十倍对应 5.71 kJ/mol」是同一个数</b>——一个用在平衡上，一个用在坎上，来源都是 RT ln 10。<br><br><b>=== 一句话理解 ===</b><br><b>酶不是把分子推过去的，它是换了一道矮门，让本来就够高的分子从「万里挑一」变成「随便挑」。</b>所以它的效果必然是乘法：<b>它改的不是每个分子的能量，是「够格的分子占几成」，而这个占比是指数里的东西。</b><br>拿这张卡自己的数验一遍：urease 加速 10¹⁴ 倍 → <code>14 × 5.71 ≈ 80 kJ/mol</code>。<b>削掉 80 kJ/mol 只需要几个氢键的量级，换来的却是十四个数量级——「一点点结合能换十四个数量级」这件事，全在「指数」这两个字上。</b><br>⚠ Arrhenius 式子、5.71、80 kJ/mol <b>都不是书的</b>；书只写了加热那一半（p054：升温提高分子能量和翻坎的能力）。被追问就说这是 Arrhenius 关系、属于物理化学，然后接停止句。'},
{r:'高', q:'Why does a catalyst accelerate both directions equally?',
    ez:'“Because both directions cross the same barrier. They cross it from opposite sides. Lower the hump and both descents get easier. They get easier by the same amount. So the ratio of the two rates does not move. And that ratio is the equilibrium constant. This is the kinetic way of saying what Gibbs energy says. The endpoints are fixed. Only the path changed.”',
    ezcn:'因为<b>正反两个方向翻的是同一道坎，只是从两边翻</b>。<b>把鼓包压低，两边都变容易，而且变容易的幅度一样</b>，<b>所以两个速率的比值不动——而那个比值就是平衡常数</b>。<b>这是用动力学说出热力学那句话：终点不变，只是路变了。</b>',
 en:'“Because forward and reverse reaction cross the same barrier from opposite sides. Lower the hump and both descents get easier by the same amount. So the ratio of the two rates does not move, and that ratio is the equilibrium constant. That is the kinetic way of saying what Gibbs energy says thermodynamically: the endpoints are fixed, only the path changed.”',
 cn:'<b>通用推论，书里没有。</b>但它是 p017（G 是状态函数）的动力学版本，两个说法互相支撑。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：平衡时正逆速率相等 → <code>k₊[A] = k₋[X]</code> → <code>K = [X] ÷ [A] = k₊ ÷ k₋</code>。<b>平衡常数就是两个速率常数的比。</b>这一步把热力学和动力学接在了一起。<br><b>三步推导</b>：<br>① 正向 <code>k₊ = A·e^(−Ea₊/RT)</code>，逆向 <code>k₋ = A·e^(−Ea₋/RT)</code>；<code>Ea₊ − Ea₋</code> 就是反应物和产物的能量差（严格说是焓差，追到这一层已经出生化了）。<br>② 催化剂把<b>坎顶</b>降了 ΔEa。<b>坎顶只有一个，所以两边同时矮了同样多</b>：<code>k₊ → k₊·e^(ΔEa/RT)</code>，<code>k₋ → k₋·e^(ΔEa/RT)</code>。<br>③ 相除：<code>K = k₊ ÷ k₋</code>，<b>那个 e^(ΔEa/RT) 上下约掉了</b>——K 一动不动。<br><br><b>=== 一句话理解 ===</b><br><b>坎顶是一个点，不是两个。</b>你没办法只给一边挖矮——从左边看矮了多少，从右边看就矮了同样多。<b>所以「正反两个方向一样加速」不是巧合，是几何上根本没有别的可能。</b><br>这也就是热力学那句话的动力学版本：<b>ΔG 说「两头没动」，Arrhenius 说「中间那个点矮了，但对两边是同一个降幅」——说的是同一张图。</b>他要是还追，就指速背第 7 点那张能量图：<b>两条曲线起点终点重合，只有中间的包矮了。</b>'},
{r:'高', q:'Why must the enzyme come out unchanged?',
    ez:'“Because otherwise it would be a reagent. A reagent is used up, one molecule per reaction. Then the cell would need as much enzyme as substrate. The textbook’s mechanism avoids that. The complex breaks down into the original enzyme and the product. That regeneration is the whole point. It lets one enzyme molecule turn over thousands of substrate molecules. That number is the molecular activity. Enzymes do wear out. But they wear out by denaturation. They do not wear out from the reaction itself.”',
    ezcn:'因为<b>不然它就是试剂而不是催化剂</b>——<b>一个分子用一次就没了，那细胞需要的酶就得跟底物一样多</b>。<b>书的机制里，复合物分解成产物和原来的酶</b>，<b>这个「还原出来」才是关键</b>：<b>一个酶分子因此能转化成千上万个底物分子</b>，这个数叫<b>分子活性</b>。<b>酶确实会坏，但是坏在变性上，不是坏在它催化的那个反应上。</b>',
 en:'“Because otherwise it would be a reagent, not a catalyst — used up one molecule per reaction, so the cell would need as much enzyme as substrate. The textbook’s mechanism has the complex breaking down into the original enzyme and the product. That regeneration is what lets one enzyme molecule turn over thousands of substrate molecules — the molecular activity. Enzymes do wear out, but by denaturation, not by the reaction they catalyse.”',
 cn:'p054 的「the original E」；「磨损靠变性」是通用。<br><b>「反复用」是多反复，有个数</b>：分子活性 MA ＝ 一个酶分子每分钟转化的底物分子数（书 p058）。<b>如果酶真是消耗品，MA 恒等于 1</b>；实测的 MA 动辄成千上万，<b>这个数本身就是「它没被消耗」的直接证据</b>。所以「催化剂不被消耗」不是定义上的规定，是<b>一个量得出来的数</b>——怎么量在追问「What is molecular activity」那一条里。'},
{r:'高', q:'Why does the cell need specificity — why not just make more of everything?',
    ez:'“Because a non specific catalyst would run every reaction its substrates could undergo. The textbook says what follows. The cell would very quickly be flooded with unwanted products. Specificity turns a bag of a thousand reactions into pathways. Each step feeds the next one and nothing else. Feedback regulation then stops a pathway making more than is needed. The textbook says that minimises the demand. It minimises the demand for carbon, nitrogen and energy.”',
    ezcn:'因为<b>一个不专一的催化剂会把它底物能走的每个反应都跑一遍</b>，<b>书接着说后果：细胞很快会被不想要的产物淹没</b>。<b>专一性把「一千个反应的口袋」变成一条条通路</b>——<b>每一步只喂给下一步，不喂给别人</b>。<b>再加上反馈调节，通路就不会做得比需要的多</b>。<b>书说这样把对碳、氮和能量的需求降到最低。</b>',
 en:'“Because a non-specific catalyst would run every reaction its substrates could undergo, and the textbook says what follows: the cell would very quickly be flooded with unwanted products. Specificity is what turns a bag of a thousand reactions into pathways, each step feeding the next and nothing else. Feedback regulation then keeps a pathway from making more than is needed. The textbook says that minimises the demand for carbon, nitrogen and energy.”',
 cn:'p061（淹没）、p063（反馈抑制节省 C、N、能量）。'},
{r:'中', q:'Why is dilute solution the point — why not just concentrate the reactants?',
  ez:'“Because a cell is a dilute solution of thousands of things. It cannot concentrate each pair separately. The enzyme does it locally instead. The textbook puts it well. An enzyme reaction is not really a reaction in solution. It happens in the confined space of the active site. There the substrates are concentrated. They are also correctly oriented. The proximity effect is the textbook’s name for it.”',
  ezcn:'因为<b>细胞是几千种东西的稀溶液，它没法把每一对反应物单独浓缩起来——酶是在局部替它做这件事</b>。<b>书说得好：酶反应其实不是一个「在溶液里发生」的反应，它发生在活性中心那个受限的小空间里，底物在那里既被浓缩、又被摆正了取向。</b><b>书给这个现象的名字是邻近效应。</b>',
 en:'“Because a cell is a dilute solution of thousands of different things and cannot concentrate each pair separately. The enzyme does it locally. The textbook says an enzyme reaction is not really a reaction in solution. It happens in the confined space of the active site, where the substrates are not only concentrated but correctly oriented. The proximity effect is the textbook’s name for it.”',
 cn:'p061–p062。'}
]},

{g:'怎么发现的', gn:'书给了年表，人名年份可以直接用。', items:[
{r:'中', q:'How was it shown that an enzyme is a protein?',
  ez:'“By crystallising one. Sumner obtained urease as crystals in nineteen twenty six. The textbook calls it the first enzyme in the crystalline state. Crystals mean a pure defined substance. And that substance was protein. In the thirties three more followed. They were trypsin and pepsin and chymotrypsin. Ostwald had already shown enzymes are catalysts. Buchner had shown fermentation is chemical.”',
  ezcn:'<b>靠把一个酶结晶出来。</b><b>Sumner 1926 年得到了脲酶的晶体——书称之为第一个处于结晶状态的酶。</b><b>晶体意味着一种纯的、确定的物质，而那个物质是蛋白质。</b><b>1930 年代又有胰蛋白酶、胃蛋白酶、胰凝乳蛋白酶。</b><b>在那之前，Ostwald 1893 年已证明酶是催化剂，Buchner 1897 年已证明发酵是化学过程——那是一个可以从细胞里拿出来的催化剂。</b>',
 en:'“By crystallising one. Sumner obtained urease as crystals in 1926, the first enzyme in the crystalline state, the textbook says. Crystals mean a pure, defined substance, and the substance was protein. In the thirties trypsin, pepsin and chymotrypsin followed. Before that, Ostwald had shown in 1893 that enzymes are catalysts, and Buchner in 1897 that fermentation is a chemical process. That is a catalyst you can take out of the cell. The textbook adds that of the more than three thousand enzymes described since, far from all have been prepared pure.”',
 cn:'p041、p009。「结晶 ＝ 纯物质 ＝ 蛋白质」这个推理是通用史实，书只说「第一个结晶态的酶」。'},
{r:'中', q:'When was it found that RNA can be an enzyme?',
  ez:'“In nineteen eighty five, by Cech. The textbook’s timeline records it. It calls it the discovery of enzymatic activity in R N A. The enzyme chapter was written when only one case was known. So it says some other macromolecules may have catalytic ability. Today several ribozymes are standard. The peptidyl transferase of the ribosome is among them. The textbook also uses the idea for the origin of life.”',
  ezcn:'<b>1985 年，Cech——书的年表里记的是「发现 RNA 具有酶活性」。</b><b>酶那一章是在只知道一个例子的时候写的，所以它的措辞是「另一些大分子也可能有催化能力」。</b><b>今天好几种核酶都是标准内容，核糖体的肽基转移酶就是其中之一。</b><b>书在讲生命起源那一节也用了这个想法：最早能自我复制的分子，可能就是带有某种催化活性的 RNA。</b>',
 en:'“1985, Cech, in the textbook’s timeline — the discovery of enzymatic activity in RNA. The enzyme chapter, written when only one case was described, says some other macromolecules may have catalytic ability. Today several ribozymes are standard, the peptidyl transferase of the ribosome among them. The textbook also uses the idea in its origin-of-life section: the first self-reproducing molecules may have been RNAs with some catalytic activity.”',
 cn:'p009、p042–p043、p019。'}
]},

{g:'陷阱', gn:'这题的陷阱全是「一句听起来很对的话」。', items:[
{r:'高', q:'（陷阱）Enzymes supply the energy',
    ez:'“No. Enzymes lower the barrier. They do not supply energy. The energy balance is the Gibbs energy. No catalyst touches it. An uphill reaction can still run. But it runs only by coupling to A T P.”',
    ezcn:'<b>不对。酶压低能垒，不提供能量。</b><b>能量账是吉布斯自由能，任何催化剂都动不了它。</b>上坡的反应照样能跑，<b>但只能靠跟 ATP 偶联。</b>',
 en:'“No — they lower the barrier. The energy balance is Gibbs energy, and no catalyst touches it. An uphill reaction goes only by coupling to ATP.”',
 cn:'见识别表那一条。p017 耦合、p042 ligases。<br><br><b>=== 耦合的账，书 p131 有现成的一张表 ===</b>（单位 kJ/mol，都是 ΔG°′）<br><code>葡萄糖 ＋ Pi → 葡萄糖-6-磷酸 ＋ H₂O ⋯⋯ +13.8</code><br><code>ATP ＋ H₂O → ADP ＋ Pi ⋯⋯⋯⋯⋯⋯⋯⋯ −30.5</code><br><code>葡萄糖 ＋ ATP → 葡萄糖-6-磷酸 ＋ ADP ⋯ −16.7</code>（就是 hexokinase 那一步）<br><b>加法成立是因为 G 是状态函数</b>：一串反应的总 ΔG 等于各步之和（p017、p131）。<code>+13.8 + (−30.5) = −16.7</code>，相加时两边各消掉一个 Pi 和一个 H₂O。<br><b>一句话理解</b>：<b>酶没有出一分钱，出钱的是 ATP；酶只是把两个反应绑在同一个活性中心上，逼它们一起发生。</b>绑不上就没有耦合——所以书才要单列一类 ligase：<b>「成键，同时水解 ATP」，那个「同时」就是耦合的全部内容。</b><br>换成平衡常数看更清楚（<code>ΔG°′ = −5.71·log K</code>，25 °C）：不耦合时 <code>K ≈ 1/260</code>（260 个葡萄糖只有 1 个被磷酸化），耦合后 <code>K ≈ 840</code>。<b>ATP 买到的是二十万倍，而不是「把反应推过去」。</b>⚠ 这几个 K 是算的，<b>书里只有那三个 ΔG°′</b>。'},
{r:'高', q:'（陷阱）Enzymes shift the equilibrium',
    ez:'“No. The equilibrium constant is the same. The reaction just reaches it faster. Both directions are accelerated equally.”',
    ezcn:'<b>不对。平衡常数不变，只是更快到达。</b>因为<b>正反两个方向被加速的幅度一样。</b>',
 en:'“No — the same equilibrium constant, reached faster. Both directions are accelerated equally.”',
 cn:'p017：G 是状态函数，不给速率信息。'},
{r:'高', q:'（陷阱）Enzymes are consumed',
    ez:'“No. The complex breaks down into two things. One is the product. The other is the original enzyme. So one molecule turns over many.”',
    ezcn:'<b>不对。复合物分解成产物和原来的酶</b>，<b>所以一个酶分子能转化很多个底物。</b>',
 en:'“No — the complex breaks down into the original enzyme and the product. One molecule turns over many.”',
 cn:'p054 的「the original E」。'},
{r:'高', q:'（陷阱）Every enzyme is a protein',
    ez:'“Nearly every one is. But the textbook itself adds something. It says some other macromolecules have catalytic ability. And Cech’s discovery of catalytic R N A is in its timeline. That was in nineteen eighty five.”',
    ezcn:'<b>几乎都是，但书自己补了一句</b>：<b>还有别的大分子也有催化能力</b>，而且它的年表里<b>收了 Cech 1985 年发现催化性 RNA</b>。',
 en:'“Nearly — but the textbook itself says some other macromolecules have catalytic ability, and Cech’s 1985 discovery of catalytic RNA is in its timeline.”',
 cn:'p042–p043、p009。'},
{r:'中', q:'（陷阱）10¹⁴ over the uncatalysed reaction',
  ez:'“The textbook’s ten to the fourteenth is for urease. But the comparison is not what people assume. It is against catalysis by hydrogen ions. It is not against the uncatalysed hydrolysis.”',
  ezcn:'⚠ <b>书给脲酶的那个 10¹⁴，比的不是「没有催化的水解」，而是「氢离子催化」。</b>',
 en:'“The textbook’s ten to the fourteenth for urease is against catalysis by hydrogen ions, not against the uncatalysed hydrolysis.”',
 cn:'p061 原图核过。Lehninger 的同一个数是对不催化说的——按书说。'}
]},

{g:'相邻考点', gn:'这一片书装着六道题，走出去很近。', items:[
{r:'高', q:'→ Where does specificity come from? (卡 18)',
    ez:'“It comes from the active site. The active site is a few side chains. The tertiary structure arranges them. Only one substrate fits there. And only one bond is presented to the catalytic groups. The textbook adds the induced fit picture. Only the true substrate can force the enzyme into its catalytic conformation.”',
    ezcn:'<b>来自活性中心</b>——<b>三级结构把几个侧链摆好</b>，<b>只有一个底物塞得进去，而且只有一根键被送到催化基团面前</b>。<b>书的诱导契合还补了一句：只有真正的底物才能把酶逼进它的催化构象。</b>',
 en:'“From the active site — a few side chains arranged in the tertiary structure. Only one substrate fits, and only one bond is presented to the catalytic groups. The textbook’s induced-fit picture adds that only the true substrate can force the enzyme into its catalytic conformation.”',
 cn:'卡 18 的活性中心和诱导契合。'},
{r:'高', q:'→ What happens when something binds but is not converted? (卡 19)',
    ez:'“Then it is an inhibitor. The textbook says this on its induced fit page. Molecules that bind but cannot trigger the conformational change act as inhibitors. Its example is malonate on succinate dehydrogenase.”',
    ezcn:'<b>那它就是抑制剂。</b>书在讲诱导契合那一页说：<b>结合得上但触发不了构象变化的分子，起的是抑制剂的作用</b>——它举的例子是<b>丙二酸对琥珀酸脱氢酶</b>。',
 en:'“It is an inhibitor. The textbook says it on its induced-fit page: molecules that bind but cannot trigger the conformational change act as inhibitors — malonate on succinate dehydrogenase is its example.”',
 cn:'卡 19。'},
{r:'高', q:'→ Where do K m and V max come from? (卡 02)',
    ez:'“They come from the two step mechanism on this card. Binding is fast and reversible. The chemical step is slower. Apply the steady state to the complex. That gives v equals V max times substrate, over K m plus substrate. And K m equals k minus one plus k two, over k one. That is why K m is an affinity only in one case. The catalytic step has to be slow.”',
    ezcn:'<b>来自这张卡上的两步机制</b>：<b>结合快而可逆，化学步骤慢</b>。<b>对复合物用稳态假设</b>，得到 <b>v ＝ V<sub>max</sub>[S] / (K<sub>m</sub> ＋ [S])</b>，其中 <b>K<sub>m</sub> ＝ (k₋₁ ＋ k₂)/k₁</b>。<b>所以 K<sub>m</sub> 只有在催化那一步很慢时才等于亲和力。</b>',
 en:'“From the two-step mechanism on this card: binding fast and reversible, the chemical step slower. Steady state on the complex gives v equals V max times substrate over K m plus substrate, with K m equal to k minus one plus k two over k one. That is why K m is an affinity only when the catalytic step is slow.”',
 cn:'卡 02 装着 #4、#20、#21；Km ≠ Kd 那个陷阱也在那里（BOOK_ERRATA 第 5 条）。'},
{r:'中', q:'→ How is metabolism regulated? (#32)',
  ez:'“Largely through enzymes. Allosteric enzymes are one way. A metabolite modulates them at a separate site. Covalently modulated enzymes are another. Phosphorylation switches those. Feedback inhibition is the third. The end product inhibits the first enzyme of the pathway.”',
  ezcn:'<b>主要通过酶：别构酶（某个代谢物在一个单独的位点上调节它）· 共价调节酶（靠磷酸化开关）· 反馈抑制（终产物抑制这条途径的第一个酶）。</b>',
 en:'“Largely through enzymes: allosteric enzymes modulated by a metabolite at a separate site, covalently modulated enzymes switched by phosphorylation, and feedback inhibition of the first enzyme of a pathway by its end product.”',
 cn:'p062–p063。'}
]},

{g:'桥回主场', gn:'三个桥，每一个都是书搭的。', items:[
{r:'高', q:'You do directed evolution on proteins — what is actually being selected?',
    ez:'“In an enzyme the selected property is the barrier. Its height is what changes. A variant that stabilises the transition state a little more runs faster. Its k cat over K m is higher. That is what the selection reads. The textbook’s two step mechanism says something useful here. The binding step and the chemical step are separable. In practice they are. You can improve one and leave the other. In my own work the readout is binding rather than turnover. I use yeast display and a dissociation constant.”',
    ezcn:'<b>对酶来说，被选的是那道坎的高度。</b><b>一个变体只要把过渡态稳定得多一点点，它就跑得更快</b>——<b>k<sub>cat</sub>/K<sub>m</sub> 更高，这就是选择读到的东西</b>。<b>书的两步机制在这儿很有用：结合那一步和化学那一步是可以分开的</b>，实际上也确实能<b>只改进一个、不动另一个</b>。<b>我自己的工作读的是结合而不是周转</b>——<b>酵母展示，读一个 K<sub>d</sub>。</b>',
 en:'“For an enzyme, the height of the barrier. A variant that stabilises the transition state a little more runs faster — a higher k cat over K m. That is what the selection reads. The textbook’s two-step mechanism says the binding step and the chemical step are separable, and in practice they are: you can improve one and leave the other. In my own work the readout is binding rather than turnover — yeast display and a dissociation constant.”',
 cn:'#7（fitness landscape）和卡 02。<b>「一个变体 ＝ 一个坎的高度」这句把她的工作接到这题的物理上。</b><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>k<sub>cat</sub> ÷ K<sub>m</sub></code>，单位 <code>M⁻¹s⁻¹</code>。<b>它不是两个数凑出来的指标，它本身就是一个速率常数。</b><br><b>两步推导</b>（他问「为什么偏偏是这个比」就照这个说）：<br>① 把 <code>v = k<sub>cat</sub>[E]ₜ[S] ÷ (K<sub>m</sub> + [S])</code> 放到<b>底物很稀</b>的情形（细胞里通常就是这样，[S] 远小于 K<sub>m</sub>），分母里的 [S] 可以扔掉。<br>② 剩下 <code>v = (k<sub>cat</sub> ÷ K<sub>m</sub>)·[E]ₜ·[S]</code>——<b>这就是一个标准的二级反应速率式</b>：一个游离的酶碰上一个游离的底物，一路到产物。<br><b>所以这个比是「自由酶 ＋ 自由底物 → 产物」整件事的速率常数，把结合和化学两步一起算了进去</b>，文献里也叫 specificity constant。<br><br><b>=== 一句话理解 ===</b><br><b>筛选读到的一定是 k<sub>cat</sub> ÷ K<sub>m</sub>，因为细胞里底物是稀的，而稀的时候酶的表现只由这一个数决定。</b>单看 k<sub>cat</sub> 大没用（底物根本占不满它），单看 K<sub>m</sub> 小也没用（抓得牢却不干活）——<b>只有这个比值是两步合起来的成绩。</b><br>它还有个天花板：酶再好也快不过「两个分子在水里撞上」，<b>扩散极限约 10⁸–10⁹ M⁻¹s⁻¹</b>（通用数，书里没有）。<b>已经顶到这个数的酶叫 catalytically perfect——对它再做定向进化，能改的只剩稳定性和专一性，速度是改不动了。</b>这一条很适合主动留给他，因为顺下去就是你的主场（yeast display 读的是结合，不是 turnover）。<br>⚠ k<sub>cat</sub> ÷ K<sub>m</sub>、specificity constant、扩散极限<b>都不在这本书里</b>；书只有 Michaelis-Menten 和 K<sub>m</sub>（展开在卡 02）。'},
{r:'高', q:'You measure a K d — what does it tell you about catalysis?',
    ez:'“It tells me about the first step only. K d is an equilibrium constant. It is the constant for the ligand coming off. So it says how tightly the complex forms. It says nothing about whether the chemistry then happens. Binding is necessary. Binding is not sufficient. The textbook’s own example of that is an inhibitor. An inhibitor binds and is not converted.”',
    ezcn:'<b>它只说第一步。</b><b>K<sub>d</sub> 是配体解离的平衡常数</b>，<b>说的是复合物形成得有多紧，完全不说化学反应到底发不发生</b>。<b>结合是必要条件，不是充分条件</b>——<b>书自己举的例子就是抑制剂：结合得上，但不被转化。</b>',
 en:'“Only about the first step. K d is the equilibrium constant of the substrate, or ligand, coming off. So it says how tightly the complex forms, and nothing about whether the chemistry then happens. Binding is necessary and not sufficient: the textbook’s own example of that is an inhibitor, which binds and is not converted.”',
 cn:'卡 02、卡 19。'},
{r:'中', q:'Why does PCR need a polymerase from a thermophile?',
  ez:'“Because the enzyme has to survive the strand separation step. That step runs near boiling. Most enzymes are inactivated around fifty five to sixty degrees. That is the textbook’s number. Enzymes from thermophilic bacteria are different. They are still active at eighty five. Taq polymerase is one of those. So this is the thermolabile point turned into a tool.”',
  ezcn:'因为<b>这个酶必须熬过「分开两条链」那一步，而那一步接近沸腾</b>。<b>书给的数是：大多数酶在 55–60 ℃ 失活，而嗜热菌的酶在 85 ℃ 仍有活性——Taq 聚合酶就是其中之一。</b><b>这等于把「热不稳定」那个要点反过来变成了一个工具。</b>',
 en:'“Because the enzyme has to survive the strand-separation step near boiling. Most enzymes are inactivated around 55 to 60 degrees, the textbook’s number, while enzymes from thermophilic bacteria are still active at 85. Taq polymerase is one of those. That is the thermolabile point turned into a tool.”',
 cn:'p059；接 #5（Taq/Kapa，导师写过两遍）。<b>「生物热不稳定」那一条的实验室版本。</b>'}
]}
]
});
