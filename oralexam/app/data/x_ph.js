/* 横向卡 · pH
   不对应某一道题。她自己报的弱点：「乱不清」。
   出处 Biochemie OCR p018、p023–p024、p035、p038–p039、p058–p059、p061、
   p074、p091、p116、p132、p134–p135、p195、p208
   ⚠ 书从头到尾没有定义过 pH，也没有任何一节讲缓冲液。凡是书没印的，本卡都标了「通用知识」。 */

window.CARDS.push({
id:'x-ph', cross:1, w:0,
q:'pH 到底是什么 —— 一次定义清楚，别再在五张卡上各解释一遍',
qcn:'横向卡 · 一个刻度 ＋ 一个常数 ＋ 一条式子 ＋ 四个后果',
sub:'跨题共用 · 卡 aa、02、17、18、19、25、x-bonds 都在用它，但没有一张拥有它',

cram:[
 {g:'先说清这张卡为什么存在', gn:'它不回答任何一道题。但已经有五处在用它，而且每处都只是路过时顺手解释了一遍。'},
 {n:'01', t:'这张卡的位置',
  ez:'“Almost every acid base statement comes out of one fact. Take any group with a p K a. Now set the p H equal to that p K a. The group is then half dissociated. Four things are readings of that same fact. The titration curve. The buffer. The isoelectric point. And the p H optimum of an enzyme. So I would define p H and p K a first. Then I would read all four off them.”',
  ezcn:'<b>生物化学里几乎每一句关于酸碱的话，都出自同一个事实：当 pH 等于某个基团的 pK<sub>a</sub> 时，那个基团正好解离一半。</b><b>滴定曲线、缓冲液、等电点、酶的最适 pH——这四样都是同一个事实的四种读法。</b><b>所以我宁可先把 pH 和 pK<sub>a</sub> 定义清楚，再把那四样从它们身上读出来。</b>',
  big:'pH 在别的卡上一直是<b>承重的</b>，却从来不是<b>主角</b>——所以它在哪儿都没被正面定义过',
  en:'“Almost every acid-base statement in biochemistry comes out of one fact. A group is half dissociated when the pH equals its pKa. The titration curve, the buffer, the isoelectric point and the pH optimum of an enzyme are four readings of that same fact. So I would rather define pH and pKa first and then read all four off them.”',
  note:'<b>它现在住在哪几张卡上，各占哪一块：</b><br>· <b>氨基酸卡 <code>aa</code></b>：pK<sub>a</sub>、甘氨酸滴定曲线、pI、「pH 7 上为什么偏偏是组氨酸」。<br>· <b>酶卡 <code>17</code> <code>18</code> <code>19</code></b>：pH 最适、活性中心那几个基团的解离状态。<br>· <b>K<sub>d</sub> 卡 <code>02</code></b>：半饱和——跟半解离是同一个形状。<br>· <b>呼吸链卡 <code>25</code></b>：质子梯度，还有一个由 pH 差换算出来的电位。<br>· <b>键卡 <code>x-bonds</code></b>：磷酸基团在 pH 7 带几个负电荷。<br><br><b>五处各自解释一遍，就是五个说法。</b>这张卡把它定义一次，那五处都有地方可以指回来。<br>⚠ <b>她自己报的弱点原话是「乱不清」。</b>乱不清的原因多半不是不知道，是<b>同一件事在五个地方用五种口径出现</b>。',
  warn:'<b>出处先说清：这本书从头到尾没有定义过 pH，也没有任何一节讲缓冲液</b>（<i>buffer</i> 这个词的捷克语形式，全书零命中）。书只是到处在用它。所以下面凡是标<b>「通用知识」</b>的地方，被问出处就直说「这是标准定义，不是这本书上的」。<b>书真正印出来的数，我都标了页码。</b>'},

 {g:'第一件事 · pH 是什么', gn:'先把刻度立起来。没有这一格，后面每一格都是背的。'},
 {n:'02', t:'pH 的定义',
  big:'pH 就是 <b>[H⁺] 换了个写法</b>：取以十为底的对数，再加个负号',
  en:'“pH is a way of writing the concentration of hydrogen ions. It is the negative logarithm, to base ten, of that concentration in moles per litre. The minus sign is there because the concentration is always a small number, so its logarithm is always negative. One pH unit is a factor of ten in hydrogen ion concentration. The scale runs backwards. More acid means more hydrogen ions and therefore a smaller pH.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>pH = −log₁₀[H⁺]</code>。[H⁺] 是氢离子的浓度，单位 mol/L；log₁₀ 是<b>以十为底的对数</b>，问的是「这个数是十的几次方」。<br><br><b>三步把这个定义拆开</b>（他问「为什么要写成这样」就照这个说）：<br>① <b>为什么取对数</b>：细胞里关心的 [H⁺] 从 <code>1 M</code>（强酸）到 <code>10⁻¹⁴ M</code>（强碱），<b>跨十四个数量级</b>。这种尺子没法画在一张纸上，取对数就把它压成 0 到 14。<br>② <b>为什么加负号</b>：<code>log(10⁻⁷) = −7</code>，一律是负的。前面补个负号，刻度就全变成正数。<br>③ <b>为什么一个单位是十倍</b>：因为对数走一格就是十倍。<code>pH 6 → pH 5</code>，[H⁺] 从 10⁻⁶ 变 10⁻⁵，<b>多了十倍</b>。<br><br><b>=== 一句话理解 ===</b><br><b>pH 不是一个新的物理量，它是氢离子浓度的「位数」。</b>你读 pH 5，读到的其实是「小数点后第五位才出现有效数字」。<br>顺着这一条，两个常被混的说法就自动分开了：<b>pH 差 1 是十倍，pH 差 3 是一千倍</b>，不是「多一点」；而<b>从 pH 7 到 pH 6，绝对增量只有 0.0000009 mol/L</b>，小得可以忽略。<b>同一个变化，用倍数看是巨变，用绝对量看是微不足道——这就是为什么细胞既要缓冲它，又能用它当开关。</b><br>（这一整格<b>书上没有</b>，是通用定义。）'},
 {n:'03', t:'水自己会解离 · 为什么中性是七',
  big:'中性 ＝ 7 <b>不是人挑的中点</b>，是水在 25 °C 的解离常数算出来的',
  en:'“Water itself dissociates a little into a hydrogen ion and a hydroxide, the water molecule minus that proton. The product of those two concentrations is a constant, ten to the minus fourteen at twenty-five degrees. In pure water the two ions are made in equal numbers, so each one is ten to the minus seven molar. That gives pH seven. So neutral is seven because of a measured property of water, not because someone picked the middle of the scale.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>K<sub>w</sub> = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴</code>（25 °C）。K<sub>w</sub> 叫<b>水的离子积</b>。<br><br><b>四步</b>：<br>① 水会自己拆一点点：<code>H₂O ⇌ H⁺ + OH⁻</code>。<br>② 写平衡常数时，水本身浓度太大、几乎不变（约 55 M），按惯例并进常数里 → 剩下 <code>K<sub>w</sub> = [H⁺][OH⁻]</code>。<br>③ <b>纯水里这两个离子是成对生出来的，所以一样多</b>：<code>[H⁺]² = 10⁻¹⁴</code> → <code>[H⁺] = 10⁻⁷ M</code>。<br>④ 取负对数 → <code>pH = 7</code>。同时 <code>pH + pOH = 14</code>，因为两个浓度相乘是定值。<br><br><b>=== 一句话理解 ===</b><br><b>「中性」的定义是 [H⁺] 等于 [OH⁻]，不是「pH 等于 7」。</b>7 只是这个定义在 25 °C 算出来的那个数。<br><b>所以温度一变，中性点就不是 7 了</b>：水的解离是吸热的，温度升高 K<sub>w</sub> 变大，37 °C 时中性点约在 <b>6.8</b>（通用数）。这也顺手解释了一件容易混的事——<b>体温下的血液标到 7.4，离中性并没有 0.4 那么远，而是更接近 0.6</b>。<br>还有一条推论：<b>只要 K<sub>w</sub> 是常数，你就不能单独调 [H⁺]</b>，加酸必然同时压低 [OH⁻]。<b>pH 这把尺子之所以一个数就够用，根子在这。</b>（<b>书上没有</b>，通用知识。）'},
 {n:'04', t:'书给的那个范围',
  big:'书印出来的唯一一个「细胞里的 pH」：<b>生理 pH ＝ 7,0–7,4</b>',
  en:'“The textbook prints the physiological range as seven point zero to seven point four. It uses that range to make a naming point. At that pH most amino acids and other organic acids in the body are dissociated, so the textbook says it will call them by the names of their anions from then on. That is why the book says aspartate rather than aspartic acid.”',
  note:'书 p116 的原话是：<i>「Because of the value of the physiological pH, seven point zero to seven point four, most amino acids and other organic acids and their derivatives in the organism are <b>dissociated into anions</b> (see §2.1.2).」</i> —— <b>400 dpi 原图核过，括号里的数字就是书上印的。</b><br><br><b>这句话是全书讲 pH 最关键的一句</b>，因为它把命名法挂在了 pH 上：succinate 而不是 succinic acid、pyruvate 而不是 pyruvic acid、glutamate 而不是 glutamic acid。<b>他要是问「为什么书里全用 -ate 结尾」，答案就是这一句。</b><span class="pg">p116</span>',
  warn:'⚠ <b>这里书自己有点绕。</b>p116 说在生理 pH 下氨基酸「解离成阴离子」，却引 §2.1.2；而 §2.1.2（p023）说的是两个基团都解离、中间那一形态<b>净电荷为零</b>（两性离子）。<br><b>两句都对，说的不是一件事</b>：p116 讲的是<b>羧基那一个基团</b>解离了（所以按阴离子命名），p023 讲的是<b>整个分子</b>的净电荷。被追问就这么分开答，不要把「氨基酸在生理 pH 下是阴离子」当成整分子的结论。'},

 {g:'第二件事 · pKa，所有后面的支点', gn:'这一格只有一句话要背死：pH 等于 pKa 时，那个基团正好一半解离。'},
 {n:'05', t:'pKa 是什么',
  big:'pK<sub>a</sub> ＝ 那个基团<b>正好半解离</b>时的 pH。<b>pK<sub>a</sub> 越小，酸越强</b>',
  en:'“A pKa is the negative logarithm of the acid dissociation constant of one particular group. In plain terms it is the pH at which that group is exactly half dissociated. Below its pKa the group mostly keeps its proton. Above its pKa the group has mostly let the proton go. A smaller pKa means a stronger acid, because that group lets go earlier.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>K<sub>a</sub> = [A⁻][H⁺] / [HA]</code>，<code>pK<sub>a</sub> = −log K<sub>a</sub></code>。<br>HA 是<b>还带着质子</b>的那一半（–COOH、–NH₃⁺、咪唑–H⁺），A⁻ 是<b>已经放掉质子</b>的那一半（–COO⁻、–NH₂、咪唑）。<br><br><b>三步推导（他问「为什么半解离那一点正好落在 pK<sub>a</sub>」就照这个说，就三行）</b>：<br>① 解离反应 <code>HA ⇌ A⁻ + H⁺</code>，平衡常数就是上面那个 K<sub>a</sub>。<br>② 把 [H⁺] 解到左边：<code>[H⁺] = K<sub>a</sub> · [HA] / [A⁻]</code>。<br>③ 恰好一半解离时 <code>[HA] = [A⁻]</code>，比值等于 1 → <code>[H⁺] = K<sub>a</sub></code>，两边取负对数 → <code>pH = pK<sub>a</sub></code>。<br><br><b>=== 一句话理解 ===</b><br><b>pK<sub>a</sub> 不是「这个基团有多酸」的形容词，是一个 pH 坐标：它标出这个基团在 pH 轴上「换挡」的位置。</b><br>左边它带着质子，右边它放了质子，<b>换挡点就是 pK<sub>a</sub></b>。所以判断一个基团在某个 pH 下什么状态，只要做一次减法：<b>pH 比 pK<sub>a</sub> 大就是放了，小就是没放，差一个单位是 10:1，差两个是 100:1。</b><br><b>「pK<sub>a</sub> 越小酸越强」也就不用死记了</b>：小 pK<sub>a</sub> ＝ 换挡点靠左 ＝ 溶液还很酸的时候它就已经交出质子了 ＝ 它抓质子抓得松 ＝ 它是强酸。<br>（<b>书用了 pK 这个符号却从没解释过</b>，见 p023 图和正文；定义是通用的。）'},
 {n:'06', t:'半解离 ＝ 半占据',
  big:'pK<sub>a</sub> 就是<b>质子的 K<sub>d</sub></b>——只是换到了对数刻度上',
  en:'“Half dissociated and half occupied are the same question asked twice. A dissociation constant is the free ligand concentration at which half the binding sites are occupied. An acid dissociation constant is the hydrogen ion concentration at which half the groups still hold their proton. The Michaelis constant is the substrate concentration at half the maximum rate. All three ask one thing. How much do you need to fill half of them.”',
  note:'<b>这条已经在氨基酸卡 <code>aa</code> 上说过一次，这里用同一个说法，别换词。</b><br><br>三个常数问的是同一句话：<b>要多浓才够占住一半。</b><code>K<sub>d</sub></code> 问配体、<code>K<sub>a</sub></code> 问质子、<code>K<sub>m</sub></code> 问底物（后两个见卡 <b>02</b>）。<b>所以滴定曲线上那个半解离点，跟卡 02 开头那条占据率曲线的半饱和点，是同一个点，只是横轴一个取了对数一个没取。</b><br><br><b>唯一的区别值得说出口</b>：K<sub>d</sub> 报浓度，pK<sub>a</sub> 报对数。<b>因为实验里配体浓度只扫三四个数量级，而质子浓度要跨十四个——刻度是由量程决定的，不是由化学决定的。</b>',
  good:'<b>加分说法：</b>“A pKa is a dissociation constant on a logarithmic scale, because hydrogen ion concentration spans fourteen orders of magnitude and a ligand concentration does not.”'},

 {g:'第三件事 · 一条式子读完滴定曲线和缓冲', gn:'Henderson–Hasselbalch。式子本身只是上一格第二步取个对数，但它一次解释了曲线为什么平、为什么陡、缓冲区在哪。'},
 {n:'07', t:'Henderson–Hasselbalch ＋ 曲线的形状',
  big:'<code>pH = pK<sub>a</sub> + log([A⁻]/[HA])</code>；曲线<b>在 pK<sub>a</sub> 附近平，离开就陡</b>',
  en:'“The Henderson-Hasselbalch relation says that pH equals the pKa plus the logarithm of the ratio of the dissociated form to the undissociated form. It is only the definition of the acid dissociation constant with a logarithm taken. It is how you read a titration curve. Where the ratio is one, the pH equals the pKa. One unit above the pKa the group is about ninety per cent dissociated, and one unit below it is about ten per cent.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>pH = pK<sub>a</sub> + log([A⁻] / [HA])</code>。<br><br><b>两步推导</b>：<br>① 从上一格第 ② 步 <code>[H⁺] = K<sub>a</sub> · [HA]/[A⁻]</code> 出发。<br>② 两边取负对数，<code>−log([HA]/[A⁻]) = +log([A⁻]/[HA])</code> → 直接就是上面那条。<b>它不是一条新定律，是 K<sub>a</sub> 的定义换了个写法。</b><br><br><b>把 log 里那个比值代三个数进去，滴定曲线就读完了</b>：<br><code>比值 = 1</code> → <code>log 1 = 0</code> → <b>pH = pK<sub>a</sub></b>，半当量点。<br><code>比值 = 10</code> → <code>pH = pK<sub>a</sub> + 1</code>，<b>91% 已解离</b>。<br><code>比值 = 1/10</code> → <code>pH = pK<sub>a</sub> − 1</code>，<b>9% 已解离</b>。<br><br><b>=== 曲线为什么平、为什么陡 ===</b><br>纵轴是 pH，横轴是<b>加进去的碱</b>。<br>· <b>在 pK<sub>a</sub> 附近</b>：HA 和 A⁻ 两种形态都大量存在。加进去的 OH⁻ 被 HA <b>当场吃掉</b>变成 A⁻，没留在溶液里 → <b>pH 几乎不动 → 平</b>。而且比值从 1 变到 2 只让 pH 挪 0.3，<b>因为 log 在 1 附近走得很慢</b>。<br>· <b>离 pK<sub>a</sub> 远</b>：少数那一方已经快耗尽了，没东西接住新加的碱，它直接留在溶液里 → <b>pH 一窜就是一大截 → 陡</b>。这里比值从 100 变到 1000，log 走了整整一格。<br>· 所以<b>最平的那一点数学上就在半当量点</b>，最陡的那一点在<b>当量点</b>（这一形态刚好全部转换完）。<br><br><b>=== 一句话理解 ===</b><br><b>平的那一段不是曲线画得懒，那一段就是缓冲本身。</b>缓冲不是某类分子的额外本领，而是「<b>解离到一半的时候最难被推动</b>」这件事。<br>所以两件事是同一件事的两个名字：<b>缓冲区必然长在 pK<sub>a</sub> 上，宽度必然是 pK<sub>a</sub> ± 1</b>；<b>而两段缓冲区之间那个最陡的地方，就是等当量点，对氨基酸来说正是 pI</b>。<br>（<b>书里没有 Henderson–Hasselbalch 这个名字，也没有这条式子</b>，是通用知识。但书画了滴定曲线，见下一点。）'},
 {n:'08', t:'书自己的滴定曲线（三个数，原图核过）',
  big:'书的 figure 2.1（甘氨酸滴定曲线）：<b>pK<sub>A1</sub> = 2,4 · pK<sub>A2</sub> = 9,8 · pI = 6,1</b>',
  en:'“The textbook shows the titration curve of glycine. Two inflection points mark the two pKa values, two point four for the carboxyl and nine point eight for the amino group. The pH at half the titrant consumption is the isoelectric point, and the figure prints it as six point one. Those three numbers agree with the textbook’s own formula, because the average of two point four and nine point eight is six point one.”',
  note:'<b>⚠ 这三个数是新查出来的。</b>OCR 读不出图上的标注，所以卡 <code>aa</code> 上把它们标成「数字待核 · 通用值 2.3 / 9.6 / 6.0」。<b>回 400 dpi 原图看过了，书上印的是 2,4 / 9,8 / 6,1</b>，三个数还互相自洽：<code>(2,4 + 9,8) ÷ 2 = 6,1</code>。<br><b>考场上报书上的数</b>，因为老师脑子里是这本书。被问「别的书写 2.3 和 9.6」就说两套数在实验误差范围内，而<b>这本书的三个数自洽</b>。<span class="pg">p023</span><br><br><b>图上还有两条正文没有的信息</b>（LOGIC §16：图注带正文没有的锚点）：<br>① 横轴标的是 <b><i>「OH⁻ consumed, mmol」</i></b>（消耗掉的 OH⁻，0 到 2）——<b>所以这是用碱去滴一个已经完全质子化的甘氨酸</b>，不是相反方向。<br>② <b>pI 那条虚线正好在横轴 1 mmol 处穿过曲线</b>，也就是第一个质子刚放完、第二个还一个没放的那一点。<b>这就是「半当量」这三个字的字面意思。</b>',
  warn:'p023 正文把 –NH₃⁺ 叫成 <i>「quaternary ammonium group」</i>（<b>季铵基</b>，书上用的是这个词的捷克语形式）。<b>这是书的笔误，它是伯铵</b>（季铵没有质子可放，根本不会有 pK<sub>a</sub>）。<b>别跟着说 quaternary。</b>说 “the protonated amino group” 最稳。'},

 {g:'第四件事 · 缓冲', gn:'⚠ 整本书没有任何一节讲缓冲液。这一格全是通用知识，说的时候要标明。'},
 {n:'09', t:'什么算缓冲 · 缓冲区为什么是 ±1',
  big:'一个<b>弱酸</b> ＋ 它<b>自己的共轭碱</b>，两边量差不多。管用的范围 <b>pK<sub>a</sub> ± 1</b>',
  en:'“A buffer is a solution that resists a change in pH. It is a weak acid together with its own conjugate base, in comparable amounts. The conjugate base is simply what is left of that acid once it has given its proton away. Added acid is taken up by the base form, and added base is taken up by the acid form. A buffer works over roughly one pH unit either side of its pKa, which is exactly the flat part of the titration curve.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>缓冲区</b> <code>= pK<sub>a</sub> ± 1</code>，对应比值 <code>[A⁻]/[HA]</code> 从 <code>1:10</code> 到 <code>10:1</code>。<br><br><b>三步（他问「为什么偏偏是一个单位」就照这个说）</b>：<br>① 要缓冲，两种形态都得有<b>相当的量</b>——吃酸靠 A⁻，吃碱靠 HA，缺哪一边就朝那一边失灵。<br>② 令<b>少数那一方至少还占 10%</b>（比值 10:1）。代进 Henderson–Hasselbalch：<code>log 10 = 1</code> → <code>pH = pK<sub>a</sub> ± 1</code>。<br>③ 所以一个缓冲液能管的宽度<b>只有两个 pH 单位</b>，中心在它自己的 pK<sub>a</sub>。再远，少数那一方掉到 10% 以下，等于没有。<br><br><b>位置和容量是两件事，别混</b>：<br>· <b>位置</b>由 <b>pK<sub>a</sub></b> 定 —— 这个缓冲液管哪一段 pH。<br>· <b>容量</b>由<b>浓度</b>定 —— 它能吃掉多少酸。<code>0,1 M</code> 的缓冲液能吃的量是 <code>0,01 M</code> 的<b>十倍</b>，虽然两者管的是同一段 pH。<br><br><b>=== 一句话理解 ===</b><br><b>选缓冲液只有一条规矩：挑一个 pK<sub>a</sub> 离你要的 pH 最近的。</b>差一个单位还能用，差两个单位基本等于加了盐水。<br><b>而「缓冲」这两个字的物理意思是：你加进去的碱没有留在溶液里，被换成了一个不带走质子的东西。</b>它不是把酸变没了，是把酸<b>存起来</b>——所以缓冲液是会用完的，这就是「容量」。<br>（<b>整本书零处讲缓冲</b>，全是通用知识。被问出处就直说。）',
  warn:'<b>别编数。</b>书<b>没有</b>血液 pH 7,4 这个数（它印的是<b>生理 pH 7,0–7,4</b>，p116），<b>没有</b>碳酸氢盐/磷酸盐缓冲系统这一节，<b>没有</b>任何缓冲容量的数字。他问「血里的缓冲系统是什么」，答通用知识并标明：“That is general knowledge rather than this textbook — the main extracellular buffer is the carbon dioxide and bicarbonate pair, with phosphate and protein inside the cell.”'},

 {g:'第五件事 · pI', gn:'书正面讲了这一格，而且给了式子和三个数。这是全卡出处最硬的一格。'},
 {n:'10', t:'pI ＝ 净电荷零的那个 pH',
  big:'<code>pI = (pK₁ + pK₂)/2</code>，<b>夹住净电荷零那一形态的两个</b> pK。<b>净电荷零 ≠ 不带电</b>',
  en:'“The isoelectric point is the pH at which the molecule carries no net charge and does not move in an electric field. For a simple amino acid it is the average of the two pKa values that flank the uncharged form. No net charge does not mean no charge. Glycine at its isoelectric point still carries a positive ammonium and a negative carboxylate. It is highly polar and dissolves well. It simply does not move in a field.”',
  note:'书 p024 直接印了 <code>pI = (pK₁ + pK₂)/2</code>，p023 定义为「滴定剂消耗到一半时的 pH」。<span class="pg">p023 p024</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>四步（他问「为什么是平均」就照这个说）</b>：<br>① 甘氨酸有两个可解离基团，按 pH 从低到高三种形态：<code>⁺H₃N–CH₂–COOH（+1） ⇌ ⁺H₃N–CH₂–COO⁻（0） ⇌ H₂N–CH₂–COO⁻（−1）</code>。<br>② <b>净电荷为零，要求 +1 那一形态和 −1 那一形态一样多</b>（互相抵消）。中间那个 0 形态有多少，对净电荷没有影响。<br>③ 用 Henderson–Hasselbalch 分别写出这两个形态相对中间形态的浓度，令两者相等。<br>④ 两条式子相加除以二，<b>中间形态正好被消掉</b> → <code>pH = (pK₁ + pK₂)/2</code>。<br><b>代书上的数验一遍</b>：<code>(2,4 + 9,8) ÷ 2 = 6,1</code>，正是图上印的 pI。<b>书的三个数自洽。</b><br><br><b>不是「所有 pK 的平均」</b>，是<b>夹住零的那两个</b>。带可解离侧链的要先排电荷序列：Asp 的零落在两个羧基之间（pI ≈ 3），Lys 的零落在两个氨基之间（pI ≈ 9.7）。<b>这两个例子的算法在卡 <code>aa</code> 里有完整三步，这里不重复。</b>（侧链 pK 是通用值，书只给了原理。）<br><br><b>=== 一句话理解 ===</b><br><b>pI 是「带正电的那一份和带负电的那一份正好一样多」的 pH，所以它当然落在两个 pK 的正中间。</b><br>而「净电荷零」这四个字在小分子和大分子上后果相反，<b>这一点最容易乱</b>：<br>· <b>小分子看「不动」</b>：甘氨酸在 pI 上两头都带电，极性极大、溶得很好，只是在电场里不走。<br>· <b>蛋白看「聚起来」</b>：分子之间<b>没有静电排斥了</b>，于是靠在一起、<b>溶解度最低</b>（书 p038 明写）。<br><b>同一个零，一个是「静止」，一个是「析出」。</b>'},
 {n:'11', t:'pI 的两个后果（书自己给的）',
  big:'① <b>在 pI 上溶解度最低</b>；② <b>pH > pI 带负电跑向阳极，pH < pI 带正电跑向阴极</b>',
  en:'“The textbook draws two consequences for proteins. Solubility is lowest at the isoelectric point, because without net charge there is no repulsion between neighbouring molecules. Above its isoelectric point a protein is negative and migrates to the anode, the positive electrode. Below its isoelectric point the protein is positive and migrates to the cathode, the negative one. The textbook adds that the net charge comes mainly from the ionisable side chains, and that the terminal amino and carboxyl groups contribute very little.”',
  note:'p038：球蛋白的溶解度取决于 <b>pH、离子强度、溶剂的介电性质、温度</b>；<b>在 pH ＝ pI 时溶解度最低</b>。p038–p039：净电荷由<b>可解离侧链的数目</b>决定，末端氨基和羧基的贡献很小；pI 还<b>取决于溶液里有哪些离子</b>。<span class="pg">p038 p039</span><br><br><b>「末端贡献很小」这一句很有用</b>：一条 300 残基的链只有一个 α-氨基和一个 α-羧基，却可能有几十个 Asp/Glu/Lys/Arg。<b>所以蛋白的 pI 几乎完全由侧链清单决定，跟链有多长无关</b>，这也是能拿序列算理论 pI 的原因。<b>她台面上的离子交换柱、等电聚焦、二维电泳第一维，用的都是这两条。</b>'},

 {g:'第六件事 · pH 对蛋白和对酶', gn:'这是考场上最可能被问到的一格，而书 §3.4 有正面的一段。'},
 {n:'12', t:'生理范围内只有一个侧链在换电荷',
  big:'Asp/Glu 一直是负的，Lys/Arg 一直是正的。<b>只有 histidine 的 pK<sub>a</sub> 落在 pH 7 附近</b>',
  en:'“Over the physiological range only one side chain changes its charge. The two carboxyls of aspartate and glutamate have pKa values near four, so at pH seven they are fully negative and they stay that way. Lysine and arginine are far above pH seven, so they are fully positive and they stay that way. Histidine has a pKa near six. That is close enough to seven that both forms are present at once. That is why histidine is the proton shuttle of active sites.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：把 Henderson–Hasselbalch 反解成「已解离的比例」：<code>已解离 / 总量 = 1 / (1 + 10^(pK<sub>a</sub> − pH))</code>。<br><b>省事的用法是只看差值</b>：<code>pH − pK<sub>a</sub></code> 每多 1，解离型就多十倍。<br><br><b>在 pH 7 上逐个代进去</b>（除了两个书上的数，pK<sub>a</sub> <b>全是通用值</b>）：<br><table><tr><td>α-COOH <b>2,4</b>（书 p023）</td><td>差 +4.6</td><td>≈ 40000 : 1</td><td><b>全放完，不变</b></td></tr><tr><td>Asp ≈ 3.9 · Glu ≈ 4.3</td><td>差 +2.7 以上</td><td>&gt; 500 : 1</td><td><b>全带负电，不变</b></td></tr><tr><td><b>His ≈ 6</b></td><td>差 <b>+1</b></td><td><b>10 : 1</b></td><td><b>两种形态都在 —— 只有它在变</b></td></tr><tr><td>Cys ≈ 8.4</td><td>差 −1.4</td><td>≈ 1 : 25</td><td>约 4% 是硫醇盐，够反应</td></tr><tr><td>Tyr ≈ 10</td><td>差 −3</td><td>1 : 1000</td><td>基本不解离</td></tr><tr><td>α-NH₃⁺ <b>9,8</b>（书 p023）· Lys ≈ 10.5 · Arg ≈ 12.5</td><td>差 −2.8 以下</td><td>&lt; 1 : 600</td><td><b>全带正电，不变</b></td></tr></table><br><b>=== 一句话理解 ===</b><br><b>生理 pH 7,0–7,4（书 p116）落在一段很空的区间里</b>：两头基团的 pK<sub>a</sub> 都离得老远，<b>中间只有组氨酸的 pK<sub>a</sub> 站在那儿</b>。<br>所以「细胞里 pH 变一点会怎样」这个问题，<b>答案几乎永远是「组氨酸」</b>。这同时解释了三件本来看着不相干的事：<b>为什么活性中心的酸碱催化基本都用 His、为什么 His-tag 用 His、为什么细胞能拿 pH 当调控手段还调得动</b>——它拨的就是这一个开关，而别的开关都焊死了。<br><b>而这也正是「pH 影响蛋白」最容易被答歪的地方</b>：不是所有基团都在随 pH 变，<b>在生理范围里绝大多数都是死的。</b>',
  good:'<b>加分说法：</b>“In the physiological range almost every ionisable group is already locked in one form. Histidine is the exception, and that is the whole reason it is the catalytic acid and base of so many active sites.”'},
 {n:'13', t:'pH 最适 —— 书 §3.4 的原话',
  big:'<b>曲线有一个极大值，那个 pH 叫 pH optimum</b>。根源是<b>活性中心的酸碱性质</b>',
  en:'“The textbook says the activity of most enzymes depends on the hydrogen ion concentration, and that the dependence has the shape of a curve with a maximum. The pH at the highest activity is called the pH optimum. The textbook puts the cause in the acid-base character of the enzyme molecule, and especially of the part called the active site. It adds that pH can also affect the dissociation of the substrate. And it says the optimum need not be the pH at which the enzyme has to work in the organism. The textbook then calls the effect of pH one of the cell’s tools for regulating enzyme activity and metabolism.”',
  note:'p058 §3.4 原文照抄了上面每一句。<b>这一节还有一个容易漏的第三层</b>：书把 pH 效应列成<b>调控手段</b>，跟底物浓度、抑制剂、激活剂并排（p058、p062 §3.7）。<span class="pg">p058 p062</span><br><br><b>=== 公式和推导（钟形曲线是怎么来的） ===</b><br><b>模型</b>：<code>活性 ∝ 1 / (1 + 10^(pK₁ − pH) + 10^(pH − pK₂))</code>。pK₁ 是那个<b>必须已经解离</b>的基团，pK₂ 是那个<b>必须还带着质子</b>的基团。<br><br><b>四步</b>：<br>① 假设活性中心要<b>两个</b>基团同时到位：一个当碱（必须解离，比如 Asp 的羧基），一个当酸（必须质子化，比如 His–H⁺）。<br>② <b>pH 太低</b>：那个该解离的被质子占住了 → 没活性。<br>③ <b>pH 太高</b>：那个该带质子的把质子丢了 → 没活性。<br>④ 两个条件同时满足的只有中间一段 → <b>必然是个峰</b>，峰大约落在两个 pK 的中点，<b>半高宽约等于两个 pK 之差</b>。<br><br><b>=== 一句话理解 ===</b><br><b>pH 最适不是酶「喜欢」某个 pH，是两条方向相反的解离曲线相乘之后剩下的那一块。</b><br>所以它必然是钟形，而<b>峰的位置由活性中心那两个基团的 pK<sub>a</sub> 决定，不由细胞的 pH 决定</b>——<b>这正是书那句「pH 最适不一定等于它在体内工作的 pH」背后的机制</b>，而书只给了结论没给机制。<br>⚠ <b>这个两-pK 模型是通用的</b>；书只说了「曲线有极大值」和「根源是活性中心的酸碱性质」。被追问就说这是标准的双解离模型，不是这本书上的。'},
 {n:'14', t:'书自己印的 pH 最适（一张表 ＋ 两个磷酸酶）',
  big:'书的 table 5.1 把 pH 最适<b>当成酶的一项基本性质</b>列出来，跟出处和专一性并排',
  en:'“The textbook prints real optima in its table of proteolytic enzymes. Proteolytic means the enzyme cuts a peptide bond. Pepsin in the stomach works at one point five to two point five. Trypsin in the small intestine works at seven point five to eight point five. Alpha-chymotrypsin is given as seven point eight, cathepsin B as five to six, and papain as eight. Elsewhere the textbook gives alkaline phosphatase an optimum of seven to eight and acid phosphatase an optimum of five. Those two are named after their optimum rather than after their substrate.”',
  tbl:{head:['酶','书写的出处','pH 最适','页'],
   rows:[
    ['<b>pepsin</b>（胃蛋白酶）','stomach（胃）','<b>1,5–2,5</b>','p116 table 5.1'],
    ['<b>trypsin</b>（胰蛋白酶）','small intestine（小肠）','<b>7,5–8,5</b>','p116 table 5.1'],
    ['<b>α-chymotrypsin</b>（α-胰凝乳蛋白酶）','small intestine（小肠）','<b>7,8</b>','p116 table 5.1'],
    ['<b>cathepsin B</b>（组织蛋白酶 B；书归在半胱氨酸蛋白酶、溶酶体那一类）','stomach, intracellular（胃，细胞内）','<b>5–6</b>','p116 table 5.1'],
    ['<b>papain</b>（木瓜蛋白酶）','papaya（木瓜，植物）','<b>8</b>','p116 table 5.1'],
    ['<b>碱性磷酸酶</b>','—','<b>7–8</b>','p091'],
    ['<b>酸性磷酸酶</b>','—','<b>5</b>','p091']
   ]},
  note:'<b>整张表 400 dpi 原图核过</b>，列头就写着 <i>「pH optimum」</i>（书上这一栏就叫 pH 最适）。<span class="pg">p091 p116</span><br><br><b>p059 顶上还有一张没有编号的图</b>：两条钟形曲线，纵轴标的是<i>「relative activity」</i>（相对活性）、横轴是 pH，一条标 <b>Trypsin</b>（横轴 6·8·10，峰在 7 上下），一条标 <b>Pepsin</b>（横轴 2·4·6，峰在 2 上下）。<b>他把这张图摆过来问「这是什么」，答「pH-活性曲线，峰就是 pH 最适」。</b><br><br><b>这张表最值钱的用法，是拿来对付「pH 最适等于工作环境吗」那一刀</b>：<b>pepsin 对上了</b>（胃里就是强酸），<b>papain 对不上</b>（木瓜的酶，最适 8），<b>cathepsin B 也对不上</b>（书写它在胃、细胞内，最适 5–6，那是溶酶体的酸度）。<b>用书的表证书的话，比背结论稳。</b>',
  warn:'⚠ <b>p058 同一页上「标准条件」出现了两种口径，别混。</b><br>· <b>酶活力单位 U</b>：一个 U 是每分钟转化 1 µmol 底物的酶量，条件是「<b>该酶自己的 pH 最适</b>＋ 25 °C」（p058 §3.3.3）。<b>每个酶各测各的 pH。</b><br>· <b>热力学标准态</b>：一律 <b>pH 7</b>，加一撇（p018）。<br><b>前者是「让这个酶跑最快」，后者是「让所有数可以互相比」。目的不同，所以数不同。</b>'},
 {n:'15', t:'换电荷 vs 变性 —— 两件事',
  big:'小幅改 pH 只是<b>换了哪些基团带电</b>，<b>可逆</b>；大幅改 pH 是<b>变性</b>，可能不可逆',
  en:'“There are two different things a change of pH can do to a protein, and they should not be mixed. A moderate change only changes which groups carry a charge, and that is fully reversible. Put the pH back and the activity comes back. A large change denatures the protein. The textbook lists strong acids and strong bases among the chemical denaturants, alongside organic solvents, detergents, urea and guanidine. Denaturation unfolds the chain and exposes the nonpolar residues that were inside. In concentrated solution the exposed chains aggregate and the denaturation becomes irreversible.”',
  note:'p035 讲变性：<b>所有变性剂的首要作用都是把肽链展开</b>；稀溶液里小心加可以<b>可逆</b>，浓溶液里新暴露的侧链互相作用、聚集，就<b>不可逆</b>。化学变性剂书列了：<b>强酸和强碱</b>、有机溶剂、去垢剂、尿素、胍。<span class="pg">p035</span><br><br><b>中间还有第三层，最容易被漏</b>：pH 一动，<b>离子对（盐桥）先没</b>。横向卡 <code>x-bonds</code> 第 12 点写了——离子对要求两边同时带电，把 pH 拉到任何一边失去电荷，这个键就直接不存在了。<b>所以「改 pH 破坏蛋白」这条路是：先丢盐桥 → 局部松动 → 展开 → 聚集。</b><br><b>三层各自的英文都在卡上，按被问的深度给。</b>'},

 {g:'书里其他带 pH 的地方', gn:'这一格是「他从别的题走进 pH」的入口。每一条都能直接接回原来那张卡。'},
 {n:'16', t:'生化的标准态就是 pH 7 —— 那一撇',
  big:'化学的标准态所有活度取 1；<b>生化改成「氢离子活度按 pH 7」</b>，写作 ΔG°′、K′、E°′',
  en:'“In thermodynamics the standard state normally has unit activity for every component. The textbook says that choice is unsuitable for biochemistry, because of the physiological value of the hydrogen ion activity. So biochemistry takes a standard state where the hydrogen ion activity corresponds to pH seven and the other activities are unity. The textbook says the convention is to mark that with a prime. So a prime on delta G or on a standard redox potential means the number is quoted at pH seven.”',
  note:'p018 原文就是这个意思。<b>这一条解释了全书所有带撇的符号</b>：ΔG°′、K′、E°′。<span class="pg">p018</span><br><br><b>最好的例子在卡 <code>25</code></b>：书 p135 说氢电极的 E° 按约定是 0 mV，<b>但在生物系统里 E°′ = −420 mV</b>。<b>那不是另一个常数，是同一个电极改按 pH 7 报价。</b>换算是 <code>−0,059 × 7 ≈ −0,41 V</code>（Nernst 式在 p134）。<b>卡 25 有完整推导，这里只要能指过去。</b><span class="pg">p134 p135</span>'},
 {n:'17', t:'pH 差本身就是能量',
  big:'膜两边的 pH 差<b>是一个能量储备</b>，ATP 合成酶直接花它',
  en:'“A difference in pH across a membrane is itself a store of energy. The textbook says the movement of electrons in the thylakoid is accompanied by a movement of protons. The Gibbs energy of the resulting pH difference is then used either directly, for active transport, or by ATP synthase. In the mitochondrion the textbook notes that cytochrome oxidase raises the pH of the matrix, by protonating oxide ions in the final reaction that makes water.”',
  note:'p208 讲类囊体：照光时腔内 H⁺ 上升、膜外 H⁺ 下降，生成跨膜 H⁺ 浓度差；<b>ΔpH 的 Gibbs 能</b>被直接用或被 ATP 合成酶用。p144 讲细胞色素氧化酶：<b>它不跨膜泵质子</b>，但通过在终反应里质子化氧离子<b>消耗基质里的质子，因而提高基质 pH</b>。<span class="pg">p144 p208</span><br><br><b>「一个 pH 单位值多少能量」的完整推导在追问「How much energy is there in one unit of pH difference」那一条</b>：<code>一个 pH 单位 ＝ 5,7 kJ/mol ＝ 59 mV</code>。<b>所以质子梯度不是比喻，是真的把 pH 差当电池用。</b>'},
 {n:'18', t:'pH 7 上「全解离」的那几个',
  big:'磷酸基团在 pH 7 <b>完全离子化</b>；ATP 有<b>四个</b>可解离质子，ADP <b>三个</b>',
  en:'“The textbook says the phosphate groups of DNA are fully ionised at pH seven, and that this is what lets them form ionic bonds with magnesium or manganese. It also says that at pH seven ATP has four dissociable protons and ADP has three. That accumulation of negative charge on the phosphate oxygens is the textbook’s explanation for why ATP is a macroergic compound.”',
  note:'p074（DNA 磷酸全解离 → 跟 Mg²⁺、Mn²⁺ 成离子键）、p132（ATP 四个、ADP 三个可解离质子 → 负电荷堆积 → 不稳定）。<span class="pg">p074 p132</span><br><br><b>这两条都在横向卡 <code>x-bonds</code> 上用着</b>（第 6 点磷酸二酯键「每个核苷酸净 −1」、第 15 点高能化合物）。<b>那两处解释「为什么在 pH 7 一定是解离的」用的正是本卡第 5 点那个减法</b>：磷酸二酯剩下那个羟基 pK<sub>a</sub> ≈ 1（通用数），<code>pH − pK<sub>a</sub> = 6</code> → <code>10⁶ : 1</code>，<b>一百万比一，所以书才敢直接说「完全解离」。</b>'}
],

end:'<b>这张卡的用法：</b>碰到任何跟酸、碱、电荷、缓冲、pH 最适有关的问题，先回到<b>一件事</b>——<b>pH 等于 pK<sub>a</sub> 的时候，那个基团正好一半解离</b>。滴定曲线的平段、缓冲区、pI、酶的钟形曲线，全是这一件事的不同读法。<b>剩下的只是代数。</b><br><b>而在 pH 7 附近，能动的侧链只有一个：histidine。</b>',

/* ---------------- 演练 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先给 pH，再给 pKa。两句话，不要先讲缓冲',
  p:['“pH is a way of writing the concentration of hydrogen ions. It is the negative logarithm, to base ten, of that concentration in moles per litre. One pH unit is a factor of ten. The scale runs backwards, so more acid means a smaller pH. Neutral is seven because water itself dissociates into a hydrogen ion and a hydroxide, the water molecule minus that proton. At twenty-five degrees the product of those two concentrations is ten to the minus fourteen.”',
     '“The number that actually does the work is the pKa. A pKa belongs to one particular ionisable group, and it is the pH at which that group is exactly half dissociated. Below its pKa the group keeps its proton. Above it the group has let the proton go. A smaller pKa means a stronger acid.”'],
  note:'<b>两个定义，一个是刻度，一个是坐标。</b>刻度那一半是通用知识（书没定义过 pH）；pK 这个符号书用了但没解释（p023）。<b>说完这两句就停，等他挑一个词往下问。</b>'},
 {tag:'段 2 · general', h:'一条式子，四个后果。这是全卡的骨架',
  p:['“From that one fact everything else follows by algebra. Taking logarithms of the dissociation constant gives the Henderson-Hasselbalch relation. The pH equals the pKa plus the logarithm of the ratio of the dissociated form to the undissociated form. Put the ratio at one and the pH equals the pKa. Put it at ten and you are one unit above.”',
     '“That single relation gives four things. It gives the titration curve, flat near the pKa and steep away from it. It gives the buffer, which is that flat region, roughly one pH unit either side. It gives the isoelectric point, the pH of zero net charge, which for a simple amino acid is the average of the two flanking pKa values. And it gives the pH dependence of an enzyme.”'],
  note:'<b>「四个后果」是这张卡自己许诺的数，后面必须真的给出四个</b>（LOGIC §18 最后一行）：滴定曲线 · 缓冲 · pI · 酶。书给的那一条是 <code>pI = (pK₁+pK₂)/2</code>（p024）；Henderson–Hasselbalch <b>书里没有</b>。'},
 {tag:'段 3 · 稍展开', h:'挑「pH 对蛋白和酶做什么」，因为那是考场上真会问的',
  p:['“On a protein the useful observation is that most ionisable groups do not change at all over the physiological range. Aspartate and glutamate have pKa values near four, so they are fully negative at pH seven. Lysine and arginine are far above it, so they are fully positive. Histidine has a pKa near six, so both of its forms are present at once. That is why histidine, and not lysine, is the catalytic acid and base of so many active sites.”',
     '“On an enzyme the textbook says activity against pH is a curve with a maximum, and it calls that pH the pH optimum. It puts the cause in the acid-base character of the molecule, and especially of the active site. It also says the optimum need not be the pH at which the enzyme works in the organism. Its own table proves that. Pepsin has an optimum of one point five to two point five and works in the stomach, while papain has an optimum of eight and comes from a papaya.”'],
  note:'第二段最后一句是<b>用书的表打书的话</b>——p116 table 5.1 对 p058 §3.4。<b>这比背结论稳得多。</b>'},
 {tag:'段 4 · 留口子', h:'落到她的主场：柱子、缓冲液、K d',
  p:['“The place I meet this every week is a nickel column. The imidazole of histidine coordinates the nickel through the lone pair on a ring nitrogen. Drop the pH to four or five and that nitrogen picks up a proton, the lone pair is gone, and the protein comes off the column. So the elution is a pKa argument, not a chemistry I have to guess at.”',
     '“And the constant I measure is a dissociation constant, which is the same shape of number as a pKa. One asks what free ligand concentration fills half the sites. The other asks what hydrogen ion concentration fills half the groups. The only difference is that hydrogen ion concentration spans fourteen orders of magnitude, so we put it on a logarithmic scale and a ligand concentration we do not.”'],
  note:'两个口子都在主场：His-tag 的洗脱（卡 <code>x-bonds</code>、<code>aa</code> 都有），K<sub>d</sub> 与 pK<sub>a</sub> 同形（卡 <code>02</code>）。<b>后一句还顺手回答了「为什么 pH 要取对数」，等于把他往一个我们准备好的坑里引。</b>'}
],

why:{
 rungs:[
  ['为什么这把尺子要取对数？','因为生物相关的 [H⁺] 从 <code>1 M</code> 到 <code>10⁻¹⁴ M</code>，<b>跨十四个数量级</b>。对数把它压成 0–14，代价是「一格 ＝ 十倍」这个直觉必须自己补上。'],
  ['为什么 pH 等于 pK<sub>a</sub> 时正好一半？','因为 <code>K<sub>a</sub> = [A⁻][H⁺]/[HA]</code>，两种形态一样多时 <code>[HA]/[A⁻] = 1</code>，于是 <code>[H⁺] = K<sub>a</sub></code>。<b>这是定义的直接后果，不是实验规律。</b>'],
  ['为什么酶有一个 pH 最适？','因为活性中心要<b>两个方向相反的解离状态同时成立</b>：一个基团必须已经放掉质子，另一个必须还带着。两条相反的曲线相乘，中间剩下一个峰。'],
  ['那为什么水在 25 °C 的 K<sub>w</sub> 正好是 10⁻¹⁴？','<b>这里就到底了。</b>它是一个测出来的平衡常数，背后是水分子之间氢键网络的能量学。']
 ],
 stop:{lbl:'停 · 落在物理化学',
  say:'“Below that it is physical chemistry rather than biochemistry — why water autoionises at all, and what an activity coefficient is.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is pH?',
  ez:'“p H is the negative logarithm of the hydrogen ion concentration. The base is ten. The concentration is in moles per litre. One p H unit is a factor of ten. And the scale runs backwards. So more acid means a smaller p H. Neutral is seven because of water itself. Water dissociates into a hydrogen ion and a hydroxide. At twenty five degrees the product of those two concentrations is fixed. It is ten to the minus fourteen.”',
  ezcn:'<b>pH ＝ 氢离子浓度（mol/L）以 10 为底的负对数。</b><b>一个 pH 单位就是十倍，而且刻度是反着走的——越酸，pH 越小。</b><b>中性是 7，是因为水自己也解离成一个氢离子和一个氢氧根（就是少了那个质子的水分子）；25 ℃ 时这两个浓度的乘积是 10⁻¹⁴。</b>⚠ <b>书从来没有定义过 pH，这一条整条是通用知识，被问出处就说这是标准定义。</b>',
 mean:'<b>最短的问法。</b>答案要自带结构：定义 → 刻度怎么走 → 为什么中性是七。<b>说完就停。</b>',
 say:'“pH is the negative logarithm, to base ten, of the hydrogen ion concentration in moles per litre. One pH unit is a factor of ten, and the scale runs backwards, so more acid means a smaller pH. Neutral is seven because water itself dissociates into a hydrogen ion and a hydroxide, the water molecule minus that proton. At twenty-five degrees the product of those two concentrations is ten to the minus fourteen.”',
 tail:'⚠ <b>书从来没有定义过 pH</b>，所以这一条整条是通用知识。被问出处就说是标准定义。'},

{q:'What is a pKa?',
  ez:'“The p K a of a group is a p H value. It is the p H at which that group is exactly half dissociated. Numerically it is a negative logarithm. It is the negative logarithm of the acid dissociation constant. Below its p K a the group mostly keeps its proton. Above it the group has mostly let it go. And a smaller p K a means a stronger acid.”',
  ezcn:'<b>一个基团的 pKa 是一个 pH 值：在那个 pH 下，这个基团恰好解离了一半。</b><b>数值上它是酸解离常数的负对数。</b><b>低于它的 pKa，这个基团大部分还带着质子；高于它，大部分已经把质子放掉了。</b><b>pKa 越小，酸性越强。</b>',
 mean:'正面定义 ＋ 那一句让后面全部成立的话。',
 say:'“The pKa of a group is the pH at which that group is exactly half dissociated. Numerically it is the negative logarithm of its acid dissociation constant. Below its pKa the group mostly keeps its proton, and above it the group has mostly let it go. A smaller pKa means a stronger acid.”'},

{q:'What is a buffer?',
  ez:'“A buffer is a solution that resists a change in p H. It is made of two things. A weak acid. And its own conjugate base. They are present in comparable amounts. Added acid is taken up by the base form. Added base is taken up by the acid form. It works over about one p H unit either side of the p K a. That is the flat part of the titration curve.”',
  ezcn:'<b>缓冲液 ＝ 抵抗 pH 变化的溶液：一个弱酸和它自己的共轭碱，两者量相当。</b><b>加进来的酸被碱式吃掉，加进来的碱被酸式吃掉。</b><b>有效范围大约是 pKa 上下各一个 pH 单位，也就是滴定曲线上平的那一段。</b>⚠ <b>这本书没有任何一节讲缓冲，说的时候标明是通用知识，别硬编书上的缓冲系统或数字。</b>',
 mean:'组成 ＋ 机制 ＋ 范围。三句。',
 say:'“A buffer is a solution that resists a change in pH. It is a weak acid together with its own conjugate base, in comparable amounts. Added acid is taken up by the base form and added base is taken up by the acid form. It works over roughly one pH unit either side of the pKa, which is the flat part of the titration curve.”',
 tail:'⚠ <b>这本书没有任何一节讲缓冲。</b>说的时候标明是通用知识，别硬编书上的缓冲系统或数字。'},

{q:'What is the isoelectric point?',
  ez:'“The isoelectric point is a p H value. At that p H the molecule carries no net charge. So it does not move in an electric field. For a simple amino acid the textbook gives a rule. It is the average of the two p K a values. For glycine it prints two point four and nine point eight. The isoelectric point is then six point one. No net charge does not mean no charge. A protein is least soluble at that p H.”',
  ezcn:'<b>等电点 ＝ 分子净电荷为零的那个 pH，在那里它在电场中不移动。</b><b>对简单氨基酸，书给的算法是两个 pKa 的平均值：甘氨酸印的是 2.4 和 9.8，等电点 6.1。</b>⚠ <b>「净电荷为零」不等于「不带电」。</b><b>书还补了一条后果：蛋白在等电点处溶解度最低，因为相邻分子之间已经没有排斥了。</b>',
 mean:'定义 ＋ 怎么算 ＋ 两个后果。<b>「零净电荷不等于不带电」这一句一定要说。</b>',
 say:'“The isoelectric point is the pH at which the molecule carries no net charge and does not move in an electric field. For a simple amino acid the textbook gives it as the average of the two pKa values. For glycine the figure prints two point four and nine point eight, and an isoelectric point of six point one. No net charge does not mean no charge. The textbook adds that a protein is least soluble at its isoelectric point, because there is no repulsion left between neighbouring molecules.”'},

{q:'Why does an enzyme have a pH optimum?',
  ez:'“Because the active site needs two groups at once. They must be in opposite states of protonation. One has to have given its proton away. The other has to still hold it. Too acid and the first one is blocked. Too alkaline and the second one has lost its proton. Only the middle satisfies both. So the curve has a maximum. The textbook puts it as the acid base character of the molecule. It means especially the active site.”',
  ezcn:'因为<b>活性中心同时需要两个基团处在相反的质子化状态：一个必须已经把质子放掉，另一个必须还拿着</b>。<b>太酸，第一个被堵住；太碱，第二个失去了质子——只有中间那一段两个条件都满足，所以曲线有一个最高点。</b><b>书的说法是：氢离子影响的是分子、尤其是活性中心的酸碱特性。</b>',
 mean:'他要的是<b>机制</b>，不是「因为酶喜欢那个 pH」。',
 say:'“Because the active site needs two groups in opposite states of protonation at the same time. One has to have given its proton away and the other has to still hold it. Too acid and the first one is blocked. Too alkaline and the second one has lost its proton. Only the middle satisfies both, so the curve has a maximum. The textbook puts it as the acid-base character of the molecule, especially of the active site.”'},

{q:'What does a change of pH do to a protein?',
  ez:'“It does two different things. It depends on how far you go. A moderate change only alters which groups carry a charge. So the salt bridges holding the fold together come and go. That is reversible. A large change denatures the protein. The textbook lists strong acids and bases among its chemical denaturants. Denaturation unfolds the chain. In a concentrated solution the exposed chains aggregate. Then it becomes irreversible.”',
  ezcn:'<b>两件不同的事，看你走多远。</b><b>幅度不大时，它只改变哪些基团带电，于是维持折叠的那些盐桥时有时无——这是可逆的。</b><b>幅度大时它让蛋白变性，书把强酸和强碱列在化学变性剂里；变性让链展开，而在浓溶液里暴露出来的链会聚集，于是变成不可逆的。</b>',
 mean:'<b>两件事，分开答。</b>小幅可逆，大幅变性。',
 say:'“Two different things, depending on how far you go. A moderate change only alters which groups carry a charge, so the salt bridges holding the fold together come and go. That is reversible. A large change denatures it, and the textbook lists strong acids and bases among its chemical denaturants. Denaturation unfolds the chain, and in a concentrated solution the exposed chains aggregate and it becomes irreversible.”'},

{q:'Why do you keep a protein in buffer and not in water?',
  ez:'“Because a protein carries dozens of ionisable groups. Its fold depends on the p H. So do its charge and its activity. Water has no buffering at all. So dissolved carbon dioxide will move the p H. The protein itself will move it too. A buffer holds it steady. But one condition applies. The buffer’s p K a must be within about a unit of the p H you want.”',
  ezcn:'因为<b>一个蛋白身上有几十个可电离基团，而它的折叠、电荷和活性全都取决于 pH</b>。<b>纯水完全没有缓冲能力，溶进去的 CO₂ 会把 pH 拉走，蛋白自己也会。</b><b>缓冲液把它按住——前提是这个缓冲液的 pKa 离你想要的 pH 大约一个单位以内。</b>', odd:1,
 mean:'问的是<b>缓冲的意义</b>，而且答案在她自己的台面上。',
 say:'“Because a protein carries dozens of ionisable groups, and its fold, its charge and its activity all depend on the pH. Water has no buffering at all, so dissolved carbon dioxide or the protein itself will move the pH. A buffer holds it, provided the buffer’s pKa is within about a unit of the pH you want.”'},

{q:'Why can you smell acetone on the breath of an untreated diabetic?',
  ez:'“Because fatty acid breakdown is running abnormally hard. So ketone bodies appear in the blood. Ketone bodies are small acidic products. The liver makes them when acetyl groups pile up. They pile up faster than they can be burned. One of them is acetoacetate. It is an acid. It loses carbon dioxide without any enzyme. The product is acetone. And acetone is volatile enough to come out in the breath.”',
  ezcn:'因为<b>脂肪酸的分解跑得异常猛，于是酮体出现在血里</b>。<b>酮体是肝脏在乙酰基堆积得比烧掉还快时做出来的一些小的酸性产物，其中一个是乙酰乙酸——它是酸，不需要任何酶就会脱掉 CO₂，变成丙酮，而丙酮挥发性足够高，会从呼气里出来。</b><b>书说这件事的后果是血 pH 下降，并给了两个名字：acidosis（酸中毒）和 ketosis（酮症）；书还说这种状态持续下去会导致昏迷和死亡。</b>', odd:1,
 mean:'听起来是临床题，<b>答案在书里，而且落在 pH 上</b>。',
 say:'“Because fatty acid breakdown is running abnormally hard, so ketone bodies appear in the blood. Ketone bodies are the small acidic products the liver makes when acetyl groups pile up faster than they can be burned. One of them is acetoacetate, an acid that loses carbon dioxide without any enzyme and becomes acetone. Acetone is volatile enough to come out in the breath. The textbook says the consequence is a fall in blood pH, and it names the condition acidosis and ketosis.”',
 tail:'书 p195 有这一整条，原话是<i>「the consequence is a fall in blood pH, and acetone can be smelled on the breath」</i>（呼气里闻得到丙酮）。书给这个状态的两个名字是 <b>acidosis</b> ＝ 酸中毒（血 pH 下降）和 <b>ketosis</b> ＝ 酮症（酮体堆积）；书说这种状态持续下去会导致昏迷和死亡。<span class="pg">p195</span>'},

{q:'Why does the stomach need a different protease from the gut?',
  ez:'“Because each enzyme has a p H optimum. And the two compartments are at very different p H. The textbook’s table gives pepsin an optimum. It is one point five to two point five. Pepsin works in the stomach. The same table gives trypsin seven point five to eight point five. Trypsin works in the small intestine. An enzyme is essentially inactive far from its own optimum.”',
  ezcn:'因为<b>每个酶都有自己的 pH 最适值，而这两个区室的 pH 差得极远</b>。<b>书那张表给胃蛋白酶的最适是 1.5–2.5，它在胃里工作；给胰蛋白酶的是 7.5–8.5，它在小肠里工作。</b><b>离自己的最适值够远，一个酶基本上就没有活性了。</b>', odd:1,
 mean:'问的是 <b>pH 最适</b>，而书的表正好给了两个数。',
 say:'“Because each enzyme has a pH optimum, and the two compartments are at very different pH. The textbook’s table gives pepsin an optimum of one point five to two point five, and it works in the stomach. It gives trypsin seven point five to eight point five, and it works in the small intestine. An enzyme is essentially inactive well away from its own optimum.”'},

{q:'Why does milk curdle when it goes sour?',
  ez:'“Because bacteria in the milk make lactic acid. So the p H falls. It falls toward the isoelectric point of casein. Casein is the main protein of milk. The textbook gives the rule here. A protein is least soluble at its isoelectric point. Without a net charge there is no repulsion left. There is none between neighbouring molecules. So the casein comes out of solution.”',
  ezcn:'因为<b>奶里的细菌产生乳酸，pH 于是往酪蛋白（奶里主要的蛋白）的等电点掉</b>。<b>书给的通则是：蛋白在等电点处溶解度最低，因为净电荷为零之后，相邻分子之间就没有排斥了——所以酪蛋白从溶液里出来。</b>⚠ <b>酪蛋白 pI 的具体数书里没有，别报，只报书给的判据。</b>', odd:1,
 mean:'问的是 <b>pI</b>。这是最不像生化题、而答案完全在书上的一条。',
 say:'“Because bacteria in the milk make lactic acid, so the pH falls toward the isoelectric point of casein, the main protein of milk. The textbook’s own rule is that a protein is least soluble at its isoelectric point, because without a net charge there is no repulsion between neighbouring molecules. So the casein comes out of solution.”',
 tail:'⚠ 酪蛋白 pI 的具体数<b>书里没有</b>，别报。只报书给的判据（p038）。'},

{q:'Why does a His-tag column let go when you drop the pH?',
  ez:'“Because the imidazole of histidine coordinates the nickel. It does so through a lone pair. That lone pair is on a ring nitrogen. Its p K a is near six. So dropping the p H to four or five protonates that nitrogen. The proton then takes the lone pair. It can no longer be donated to the metal. So the protein comes off.”',
  ezcn:'因为<b>组氨酸的咪唑是靠环上一个氮的孤对电子去配位镍的</b>。<b>那个氮的 pKa 在 6 附近，所以把 pH 降到 4–5 就让它质子化：孤对电子被质子占走，再也给不了金属，蛋白就下来了。</b>', odd:1,
 mean:'问的是<b>咪唑的 pK<sub>a</sub></b>，而且这是她的台面。',
 say:'“Because the imidazole of histidine coordinates the nickel through the lone pair on a ring nitrogen. Its pKa is near six, so dropping the pH to four or five protonates that nitrogen. The lone pair is then taken by the proton and cannot be donated to the metal, so the protein comes off.”'}
],

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p023_obr21_glycine_titration.jpg',
  t:'甘氨酸滴定曲线 —— 这张卡的主图，三个数都印在图里（书 Obr. 2.1）',
  cap:'<b>这是这张卡上最值钱的一张</b>：pK<sub>a</sub>、缓冲、pI 三件事全落在这一条线上，'
    + '而且<b>速背第 8 点那三个数就写在图上</b>——<b>pK<sub>A1</sub> = 2,4</b>、<b>pI = 6,1</b>、<b>pK<sub>A2</sub> = 9,8</b>。'
    + '<br><br><b>画的顺序（六步）</b>:'
    + '<br>① 纵轴 <b>pH，从 0 到 14</b>；横轴是<b>加进去的 OH⁻</b>，从 <b>0 到 2</b>（单位 mmol）。<b>横轴只走到 2，是因为甘氨酸有两个可解离的基团。</b>'
    + '<br>② 从左下角起笔，画一条<b>两级台阶</b>的线：陡 → 平 → 陡 → 平 → 陡。'
    + '<br>③ 第一个平段的中点在 <b>pH 2,4</b>，拉一条水平虚线，标 <b>pK<sub>A1</sub></b>（那是 –COOH）。'
    + '<br>④ 第二个平段的中点在 <b>pH 9,8</b>，再拉一条水平虚线，标 <b>pK<sub>A2</sub></b>（那是 –NH₃⁺）。'
    + '<br>⑤ 两个平段之间那一段<b>最陡</b>的地方，横轴正好在 <b>1 mmol</b>，拉一条点线标 <b>pI = 6,1</b>。'
    + '<b>那一点就是第一个当量点</b>：一个可解离基团正好被中和完。'
    + '<br>⑥ 画完自己验一遍：<code>(2,4 + 9,8) ÷ 2 = 6,1</code>。<b>三个数互相自洽，这件事本身就是答案的一部分。</b>'
    + '<br><br><b>边画边说的三句</b>：“A titration curve plots the pH against the amount of base added. Glycine has <b>two</b> dissociable groups, the carboxyl and the amino group, so the curve has <b>two flat regions</b> and the axis runs to <b>two</b> equivalents.”'
    + '<br>“Each flat region is centred on a <b>pKa</b>. At that pH the group is exactly <b>half dissociated</b>, so half the molecules still carry the proton and half have given it up. That is what a pKa is, and it is also why a buffer works best there: adding acid or base moves the <b>ratio</b> of the two forms, not the pH.”'
    + '<br>“Between the two flat regions the curve is <b>steep</b>. The pH in the middle of that steep part is the <b>isoelectric point</b>. There the net charge is zero. For a molecule with two dissociable groups it is simply the <b>average</b> of the two pKa values.”'
    + '<br><br>⚠ <b>书用逗号当小数点</b>，2,4 就是 2.4。<b>考场上报书上的数</b>，因为老师脑子里是这本书；'
    + '被问「别的书写 2.3 和 9.6」就说两套在实验误差范围内，<b>而这本书的三个数自洽</b>。'
    + '<br>⚠ 图注那行捷克语就是「甘氨酸的滴定曲线」，横轴那行是「消耗掉的 OH⁻，mmol」。'
    + '氨基酸卡 <code>aa</code> 上用的是同一张图，<b>两处的说法要一样，别换词</b>。',
  src2:'Biochemie, Obr. 2.1, p023 · 原图裁切，未修改'},

 {k:'认',
  src:'img/p059_ph_optimum_trypsin_pepsin.jpg',
  t:'酶的钟形曲线 —— 速背第 13、14 点的书证（书 p059 顶上，这张没印图号）',
  cap:'<b>这张是「认」。</b>纵轴是<b>相对活性</b>，横轴是 <b>pH</b>。'
    + '左边那条标着 <b>Trypsin</b>，横轴刻度 6·8·10，<b>峰在 8 上下</b>；右边那条标着 <b>Pepsin</b>，横轴刻度 2·4·6，<b>峰在 2 上下</b>。'
    + '<b>两条摆在一起就把这一格说完了</b>：最适 pH 是每个酶自己的数，不是一个通用值。'
    + '<br><br><b>看到图要说的那一段</b>：“Most enzymes show a <b>maximum</b> in activity against pH, and the pH at that maximum is called the <b>pH optimum</b>. The reason the textbook gives is the <b>acid-base character</b> of the enzyme molecule, above all of the part called the <b>active centre</b>. The dissociation of the substrate can depend on pH as well.”'
    + '<br>“Pepsin works in the stomach and peaks near <b>two</b>. Trypsin works in the small intestine and peaks near <b>eight</b>. The textbook also says the pH optimum <b>need not equal</b> the pH at which the enzyme actually has to work in the organism, and that pH is one of the tools the cell uses to <b>regulate</b> enzyme activity.”'
    + '<br><br><b>这张图跟上一张是同一件事的两种读法</b>：滴定曲线上的平段是「一个基团半解离」，'
    + '钟形曲线的峰是「<b>两个</b>基团各停在相反的解离状态上」——一个必须已经放掉质子，另一个必须还带着。'
    + '<b>两条相反的曲线相乘，中间剩下一个峰。</b>这个双解离模型书里没有，说的时候标明是通用的。'
    + '<br>⚠ <b>这张图书上没有编号</b>，就在 p059 正文上方；右边那条的横轴标注扫得有点糊，是 <b>pH</b>。'
    + '⚠ 书另有一张表列了几个酶的最适 pH（速背第 14 点），那是表不是图。',
  src2:'Biochemie, p059 顶部（§3.4 的图，书上未编号）· 300 dpi 原图裁切，未修改'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这张卡的英文句里全是数学词。他会挑一个单独问，而她不能停在「就是那个意思」。', items:[
{r:'高', q:'What does a negative logarithm of a concentration actually mean?',
    ez:'“A logarithm to base ten asks one question. What power of ten is this number. Take the concentration ten to the minus seven. Its logarithm is minus seven. Biological hydrogen ion concentrations are all small numbers. So their logarithms are all negative. The minus sign in front flips them. It turns the scale into positive numbers. They run between zero and fourteen. The practical consequence matters. One unit is a factor of ten. It is not a small step.”',
    ezcn:'<b>以 10 为底的对数问的是一个问题：这个数是 10 的几次方。</b><b>浓度 10⁻⁷ 的对数就是 −7</b>。<b>生物体里的氢离子浓度都是很小的数，所以它们的对数都是负的</b>——<b>前面那个负号把尺度翻成 0 到 14 之间的正数</b>。<b>实际后果要记住：一个单位是十倍，不是一小步。</b>',
 en:'“A logarithm to base ten asks what power of ten a number is. The concentration ten to the minus seven has a logarithm of minus seven. Biological hydrogen ion concentrations are all small numbers, so their logarithms are all negative, and the minus sign in front turns the scale into positive numbers between zero and fourteen. The practical consequence is that one unit is a factor of ten, not a small step.”',
 cn:'<b>这一条是她自己说的弱点的核心。</b>不是不会算，是「一个单位是十倍」这件事没有变成直觉。<br><br><b>拿三个数把它钉死</b>：<code>pH 7 → [H⁺] = 10⁻⁷ M</code> · <code>pH 4 → 10⁻⁴ M</code>，<b>差三个单位就是一千倍</b> · <code>pH 1 → 0,1 M</code>，胃液就在这一带。<br><b>而绝对量小得离谱</b>：pH 7 的水里，<b>每五亿多个水分子才有一个是解离的</b>（55 M ÷ 10⁻⁷ M ≈ 5,5×10⁸）。<br><br><b>=== 一句话理解 ===</b><b>pH 读的是「位数」，不是「量」。</b>所以同一个 pH 变化，<b>用倍数看是天翻地覆，用摩尔数看几乎什么都没发生</b>——这正是它既需要被缓冲、又能当调控开关的原因。<b>整条通用知识。</b>'},
{r:'高', q:'What is a conjugate acid-base pair?',
    ez:'“It is an acid, plus what is left of it. What is left after it gives its proton away. Acetic acid and acetate are a pair. An ammonium group and the free amine are a pair. They are the two forms on the two sides of one p K a. And a buffer is simply a solution. It is a solution holding both of them at once.”',
    ezcn:'<b>共轭酸碱对 ＝ 一个酸，和它把质子给出去之后剩下的那个。</b><b>乙酸和乙酸根是一对；铵基和游离的胺是一对。</b><b>它们就是某一个 pK<sub>a</sub> 两侧的那两种形式</b>——<b>而缓冲液不过就是「同时含有这两种形式」的溶液。</b>',
 en:'“An acid and what is left of it after it has given its proton away. Acetic acid and acetate are a pair. The ammonium group and the free amine are a pair. They are the two forms that appear on the two sides of one pKa, and a buffer is simply a solution that holds both of them at once.”',
 cn:'<b>这个词全套卡里没人解释过</b>（<code>terms.py</code> 查过），而缓冲那一格离不开它，所以必须就地交代。<br><b>说的时候最好带一个例子</b>：氨基酸的 –COOH 和 –COO⁻ 是一对，–NH₃⁺ 和 –NH₂ 是另一对。<b>「共轭」的意思只是「差一个质子的同一个东西」，不是别的。</b>（通用知识。）'},
{r:'中', q:'What is a titration, and what is the equivalence point?',
  ez:'“A titration is adding a measured amount of base. Or of acid. You record the p H as you go. The equivalence point is a particular place on that curve. You have added exactly enough there. It converts one form completely into the other. On the curve it is the steepest point. Nothing is left to take up what you add next. Half way to it is the half equivalence point. There the p H equals the p K a.”',
  ezcn:'<b>滴定 ＝ 一点一点加进量好的碱（或酸），同时记录 pH。</b><b>当量点 ＝ 加到恰好把一种形式完全转成另一种形式的那个位置；在曲线上它是最陡的那一点，因为已经没有东西能接住你再加进去的了。</b><b>走到它一半的地方叫半当量点，那里 pH 等于 pKa。</b>',
 en:'“A titration is adding a measured amount of base, or acid, and recording the pH as you go. The equivalence point is where you have added exactly enough to convert one form completely into the other. On the curve it is the steepest point, because nothing is left to take up what you add next. Half way to it is the half-equivalence point, and there the pH equals the pKa.”',
 cn:'<b>这个词也没人解释过。</b>书画了滴定曲线却没说滴定是什么（p023）。<br><b>图上有一条可以直接引的证据</b>：书的 figure 2.1 横轴标的是 <i>「OH⁻ consumed, mmol」</i>（消耗掉的 OH⁻，从 0 到 2）。<b>甘氨酸两个可解离基团 → 两个当量 → 横轴走到 2。</b>而 pI 那条虚线恰好在 1 mmol 处穿过曲线，<b>那就是第一个当量点。</b><span class="pg">p023</span>'},
{r:'中', q:'What does amphoteric mean, and what is a zwitterion?',
  ez:'“Amphoteric means one molecule can act two ways. It can act as an acid. It can also act as a base. It carries an ionisable acidic group. And it carries an ionisable basic one. Every amino acid is amphoteric. A zwitterion is the form in between. It lies between the two p K a values. The carboxyl is dissociated there. The amino group is protonated. So it carries both charges and no net charge.”',
  ezcn:'<b>两性（amphoteric）＝ 同一个分子既能当酸又能当碱，因为它同时带着一个可电离的酸性基团和一个可电离的碱性基团——每个氨基酸都是两性的。</b><b>两性离子（zwitterion）＝ 它在两个 pKa 之间时的那个形式：羧基已解离、氨基已质子化，同时带一正一负，净电荷为零。</b>',
 en:'“Amphoteric means the same molecule can act as an acid or as a base, because it carries both an ionisable acidic group and an ionisable basic one. Every amino acid is amphoteric. A zwitterion is the form it takes in between its two pKa values, with the carboxyl dissociated and the amino group protonated. It carries a positive and a negative charge at once and no net charge.”',
 cn:'<b>zwitterion 卡 <code>aa</code> 已有正面定义</b>，用同一个说法。<b>amphoteric 全套卡里没人解释过</b>，所以就地给。书用的是<i>「dipolar / amphoteric in character」</i>那一类描述，没有用 amphoteric 这个词本身，所以这是通用词汇。'},
{r:'中', q:'What is the buffering range, and is that the same as buffer capacity?',
  ez:'“No, they are two different things. The range is where the buffer works at all. The p K a sets it. It is about one unit either side. The capacity is how much it can absorb. That is acid or base, before it stops working. The concentration sets that. A tenth molar buffer has ten times the capacity. A hundredth molar one has less. The range is the same for both.”',
  ezcn:'<b>不是同一回事。</b><b>缓冲范围 ＝ 缓冲液还起作用的那一段，由 pKa 决定，大约上下各一个 pH 单位。</b><b>缓冲容量 ＝ 它在失效之前能吸收多少酸或碱，由浓度决定：0.1 M 的缓冲液容量是 0.01 M 的十倍，而范围完全一样。</b>',
 en:'“No, they are two different things. The range is where the buffer works at all, and it is set by the pKa, about one unit either side. The capacity is how much acid or base it can absorb before it stops working, and that is set by the concentration. A tenth molar buffer has ten times the capacity of a hundredth molar one, over exactly the same range.”',
 cn:'<b>「位置由 pK<sub>a</sub> 定，容量由浓度定」——这两句分开说，就不会乱。</b><br>实验室里这正好对应两个选择：<b>选哪种缓冲液</b>（看 pK<sub>a</sub> 离目标 pH 多远）和<b>配多浓</b>（看要中和多少酸）。<b>整条通用知识；书里零处讲缓冲。</b>'}
]},

{g:'最容易混的几对', gn:'她说的「乱不清」，八成落在这几对上。每一对都是「两个名字挨得太近」。', items:[
{r:'实测', q:'What is the difference between pH and pKa?',
    ez:'“pH is a property of the solution. pKa is a property of one group. That group sits on one particular molecule. Both are read off the same scale. That is why people confuse them. The important case is when they are equal. Now set the p H equal to the p K a. That group is then exactly half dissociated.”',
    ezcn:'<b>pH 是溶液的性质，pKa 是某个分子上某一个基团的性质。</b>两者读的是同一把尺子，所以容易混。<b>要紧的是它们相等的那一刻：pH ＝ pKa 时，那个基团正好解离一半。</b>',
 en:'“pH is a property of the solution. pKa is a property of one particular group on one particular molecule. They have the same units, in the sense that both are read off the same scale, and that is why they get confused. The whole point is what happens when they are equal. When the pH equals the pKa, that group is exactly half dissociated.”',
 cn:'<b>这是这张卡存在的理由那一条。</b>两个词长得像、刻度一样、都是对数，但<b>一个说的是溶液，一个说的是分子上的一个基团</b>。<br><b>拿一句话把它们的关系钉住</b>：<b>pH 是外面的环境，pK<sub>a</sub> 是这个基团的门槛；比较这两个数就知道它现在什么状态。</b><br>被追问就做减法：<code>pH − pK<sub>a</sub></code> 是正的就是已经解离了，是负的就是还带着质子，差多少个单位就是差几个十倍。'},
{r:'高', q:'Is the isoelectric point the same kind of number as a pKa?',
    ez:'“No. A p K a belongs to one group. An isoelectric point belongs to the whole molecule. And it is derived from the p K a values. It is not measured as one of them. For a simple amino acid it is an average. It is the average of the two p K a values flanking the uncharged form. But it is not always the outer two. For aspartate it is the average of the two carboxyl values. The amino group never enters it.”',
    ezcn:'<b>不是同一类数。</b><b>pK<sub>a</sub> 属于某一个基团；等电点属于整个分子，而且它是从那些 pK<sub>a</sub> 推算出来的，不是直接测出来的某一个 pK<sub>a</sub></b>。<b>对一个简单氨基酸，它是「夹住不带电形式的那两个 pK<sub>a</sub>」的平均</b>。⚠ <b>但不总是取最外面那两个：天冬氨酸取的是两个羧基的平均，氨基根本不参与。</b>',
 en:'“No. A pKa belongs to one group. An isoelectric point belongs to the whole molecule, and it is derived from the pKa values rather than measured as one of them. For a simple amino acid it is the average of the two pKa values that flank the uncharged form. And it is not always the average of the outer two. For aspartate it is the average of the two carboxyl values, and the amino group never enters it.”',
 cn:'<b>「pI 是所有 pK 的平均」是最常见的错。</b>正确的做法是先排电荷序列、找到净电荷为零那一形态，再平均<b>夹住它</b>的那两个。<br><b>卡 <code>aa</code> 里有 Gly、Asp、Lys 三个完整算例，这里只给判据不重复算。</b><br>书 p024 只印了 <code>pI = (pK₁ + pK₂)/2</code> 这一条，它讲的是甘氨酸那种两个基团的情形。<span class="pg">p024</span>'},
{r:'高', q:'Does an enzyme’s pH optimum tell you the pH of the compartment where it works?',
    ez:'“Not necessarily. The textbook says so explicitly. The optimum is set by the p K a values in the active site. Those are the groups doing the chemistry. Sometimes the two agree. Pepsin has an optimum of one point five to two point five. And it works in the stomach. Sometimes they do not agree. Papain has an optimum of eight. And it comes from a papaya. Cathepsin B has an optimum of five to six.”',
    ezcn:'<b>不一定，而且书明确说了这一点。</b><b>最适 pH 是由活性中心里那些基团的 pK<sub>a</sub> 决定的</b>。<b>有时候两者确实吻合</b>（<b>胃蛋白酶最适 1.5–2.5，而它就在胃里工作</b>）；<b>有时候不吻合</b>（<b>木瓜蛋白酶最适 8，可它来自木瓜；组织蛋白酶 B 最适 5–6</b>）。',
 en:'“Not necessarily, and the textbook says so explicitly. The optimum is set by the pKa values of the groups in the active site. Sometimes the two agree. Pepsin has an optimum of one point five to two point five and works in the stomach. Sometimes they do not. Papain has an optimum of eight and comes from a papaya, and cathepsin B has an optimum of five to six.”',
 cn:'<b>用书的表打书的话</b>：结论在 p058 §3.4，反例在 p116 的 table 5.1。<b>这是 LOGIC §14 那条打法的一个干净例子。</b><br>⚠ 别把这条说反了：书说的是<b>「不一定相同」</b>，不是「一定不同」。<b>pepsin 那一行就是相同的那种。</b><span class="pg">p058 p116</span>'},
{r:'实测', q:'Is changing the pH the same thing as denaturing the protein?',
    ez:'“No. The difference is how far you go. A moderate change only changes which groups carry a charge. Salt bridges appear and disappear. Activity goes up or down. Put the pH back and the activity comes back. A large change unfolds the chain. That is denaturation. The textbook lists strong acids and strong bases as chemical denaturants. It lists them next to organic solvents, detergents, urea and guanidine.”',
    ezcn:'<b>不是同一件事，差别在走多远。</b>小幅改变只是<b>换掉哪些基团带电</b>——盐桥出现又消失、活性上下动，<b>pH 调回去活性就回来</b>。大幅改变会<b>把链摊开，那才是变性</b>。书把强酸强碱列在化学变性剂里，跟有机溶剂、去污剂、尿素、胍并列。',
 en:'“No, and the difference is how far you go. A moderate change only changes which groups carry a charge. Salt bridges appear and disappear, activity goes up or down, and putting the pH back puts the activity back. A large change unfolds the chain, and that is denaturation. The textbook lists strong acids and strong bases among the chemical denaturants, next to organic solvents, detergents, urea and guanidine.”',
 cn:'<b>三层，按被问的深度给</b>：① 换电荷（可逆）→ ② 盐桥丢了、局部松动 → ③ 展开、暴露疏水核、聚集、不可逆（p035）。<br><b>中间那一层最值钱</b>，因为它把「pH」和「非共价键」接上了：离子对要求两边同时带电，横向卡 <code>x-bonds</code> 第 12 点。<span class="pg">p035</span>'},
{r:'中', q:'Is a pKa a rate or an equilibrium?',
  ez:'“An equilibrium. It comes from the acid dissociation constant. That is an equilibrium constant. So it says nothing about how fast the proton moves. Proton transfer is in fact very fast. It is among the fastest reactions there are. So the equilibrium description is usually the useful one.”',
  ezcn:'<b>是平衡，不是速率。</b><b>它来自酸解离常数，而那是一个平衡常数，所以它完全不说质子移动得多快。</b><b>实际上质子转移是最快的那一类反应之一——所以用平衡来描述通常就够用了。</b>',
 en:'“An equilibrium. It comes from the acid dissociation constant, which is an equilibrium constant, so it says nothing about how fast the proton moves. Proton transfer is in fact among the fastest reactions there are, so the equilibrium description is usually the useful one.”',
 cn:'<b>跟卡 02 那条「K<sub>d</sub> 属于热力学不属于动力学」是同一个区分</b>，用同一个说法。<b>被追到底就落在热力学这块地基上，说停止句。</b>（速率那一句是通用知识。）'}
]},

{g:'为什么类', gn:'追到第三层必然落在两块地基上：热力学（平衡常数），和测量方法的限制（为什么要用对数刻度）。', items:[
{r:'高', q:'Why is the titration curve flat near the pKa and steep away from it?',
    ez:'“Because near the p K a both forms are present in quantity. Base that you add is taken up. The acid form takes it up and is converted. So the base does not stay in solution. And the p H barely moves. Away from the p K a it is different. One of the two forms is nearly exhausted. So there is nothing left to take up what you add. It goes straight into the solution. The flattest point is the half equivalence point. And there the p H equals the p K a.”',
    ezcn:'因为<b>在 pK<sub>a</sub> 附近两种形式都大量存在</b>：<b>你加进去的碱被酸式那一份吃掉并转化了，所以它不留在溶液里，pH 几乎不动</b>。<b>离 pK<sub>a</sub> 远了就不同：两种形式里有一种快用光了，没有东西再去吃掉你加进去的，它就直接进了溶液</b>。<b>最平的那一点是半当量点，而那里 pH ＝ pK<sub>a</sub>。</b>',
 en:'“Because near the pKa both forms are present in quantity. Base that you add is taken up by the acid form and converted, so it does not stay in solution and the pH barely moves. Away from the pKa one of the two forms is nearly exhausted, so there is nothing left to take up what you add and it goes straight into the solution. The flattest point is the half-equivalence point, and there the pH equals the pKa.”',
 cn:'<b>这一条的完整推导在速背第 7 点</b>（Henderson–Hasselbalch 那一格），包括「为什么 log 在 1 附近走得慢」。<br><b>一句话理解</b>：<b>平的那一段就是缓冲本身。</b>缓冲不是某类分子的本领，是「解离到一半时最难被推动」这件事——<b>所以缓冲区必然长在 pK<sub>a</sub> 上，不可能长在别处。</b>'},
{r:'高', q:'Why is histidine the side chain that matters at pH seven?',
    ez:'“Because catalysis needs a group that does two things. It must take a proton and also give one. It must do both at the working p H. That needs a p K a near that p H. The imidazole of histidine sits near six. Aspartate and glutamate are near four. So at p H seven they are permanently negative. Lysine and arginine are far above. So they are permanently positive. Those are useful as fixed charges. They are useless as a shuttle.”',
    ezcn:'因为<b>催化需要一个在工作 pH 下既能接质子又能放质子的基团，而那要求它的 pK<sub>a</sub> 就在那个 pH 附近</b>。<b>组氨酸的咪唑在 6 左右</b>；<b>天冬氨酸和谷氨酸在 4 左右，所以在 pH 7 下永远带负电</b>；<b>赖氨酸和精氨酸远在上面，所以永远带正电</b>。<b>那些当固定电荷有用，当「质子的摆渡工」没用。</b>',
 en:'“Because catalysis needs a group that can both take and give a proton at the working pH, and that needs a pKa near that pH. The imidazole of histidine sits near six. Aspartate and glutamate are near four, so at pH seven they are permanently negative. Lysine and arginine are far above, so they are permanently positive. Those are useful as fixed charges but useless as a shuttle.”',
 cn:'<b>完整的换算表在速背第 12 点</b>；卡 <code>aa</code> 也有同一条的另一个算法，两处说法一致。<br><b>这条的加分在最后半句</b>：Lys 和 Arg 不是「不够碱」，是<b>碱得回不来</b>——抓住质子就不放，只能当固定的正电荷用。<br>⚠ 侧链的 pK<sub>a</sub> 值<b>书里全没有</b>（书只说 histidine 的咪唑「弱碱性」，p021）。报数时标明是通用值。<span class="pg">p021</span>'},
{r:'高', q:'Why is the pH-activity curve of an enzyme bell-shaped?',
    ez:'“Because two opposite requirements must hold at once. One group in the active site must have given its proton away. Another must still be holding one. Acid conditions satisfy the second. They block the first. Alkaline conditions do the opposite. Multiply the two curves together. What is left is a peak. It sits roughly midway between the two p K a values.”',
    ezcn:'因为<b>两个相反的要求必须同时成立</b>：<b>活性中心里一个基团必须已经把质子给出去了，另一个必须还攥着一个</b>。<b>酸性条件满足后者、卡住前者；碱性条件正好相反</b>。<b>把这两条曲线乘起来，剩下的就是一个峰——大致落在两个 pK<sub>a</sub> 的中间。</b>',
 en:'“Because two opposite requirements have to hold at the same time. One group in the active site has to have given its proton away, and another has to still be holding one. Acid conditions satisfy the second and block the first. Alkaline conditions do the opposite. Multiplying the two curves leaves a peak, roughly midway between the two pKa values.”',
 cn:'<b>书只给了结论</b>（p058：曲线有极大值，根源是活性中心的酸碱性质），<b>没有给机制</b>。上面这个双解离模型是通用的，说的时候标明。<br><b>而机制一给，书那句「pH 最适不一定等于体内 pH」就自动被解释了</b>：峰的位置由活性中心那两个基团的 pK<sub>a</sub> 定，跟细胞的 pH 没有任何必然联系。<span class="pg">p058</span>',
 good:'<b>停止句：</b>“How far the pKa of a given side chain is shifted by the microenvironment of the active site is physical chemistry rather than biochemistry.”'},
{r:'中', q:'Why is a protein least soluble at its isoelectric point?',
  ez:'“Because solubility depends on several things. It depends on p H and on ionic strength. It depends on the dielectric properties of the solvent. And it depends on temperature. At the isoelectric point the molecules carry no net charge. So there is no electrostatic repulsion between neighbours. Nothing keeps them apart. The textbook gives exactly that reason.”',
  ezcn:'因为<b>球状蛋白的溶解度取决于 pH、离子强度、溶剂的介电性质和温度</b>；<b>而在等电点上，分子不带净电荷，相邻分子之间就没有了静电排斥，没有东西把它们撑开。</b><b>书给的正是这个理由。</b>',
 en:'“Because solubility of a globular protein depends on pH, on ionic strength, on the dielectric properties of the solvent and on temperature. At the isoelectric point the molecules carry no net charge, so there is no electrostatic repulsion between neighbours and nothing keeps them apart. The textbook gives exactly that reason.”',
 cn:'p038 原文就是这几条：pH、<b>离子强度</b>、<b>溶剂的介电性质</b>（<i>dielectric properties</i>，即溶剂极性有多强；介电常数越大，越能把两个电荷屏蔽开）、温度。<b>这条也是「乱不清」的一个典型来源</b>：小分子在 pI 上是「不动」，大分子在 pI 上是「析出」，<b>同一个零净电荷，两种后果</b>。<br><b>它还接着书的另一条：盐析和盐溶</b>（p038，书用的英文对照词就是 <i>salting in</i> / <i>salting out</i>）——那是靠<b>离子强度</b>，不是靠 pH。<b>两条别混：一条调 pH，一条调盐。</b><span class="pg">p038</span>'},
{r:'中', q:'How much energy is there in one unit of pH difference?',
  ez:'“About five point seven kilojoules per mole of protons. That is at twenty five degrees. Read as a potential it is about fifty nine millivolts. That is why a proton gradient is a real energy store. The textbook makes the same point. The Gibbs energy of the p H difference across the thylakoid membrane is used. It is used directly or by A T P synthase.”',
  ezcn:'<b>25 ℃ 时，每摩尔质子约 5.7 kJ；换成电位读大约 59 mV。</b><b>这就是质子梯度确实是一份能量储备的原因。</b><b>书说的是同一件事：跨类囊体膜的 pH 差所含的吉布斯能，要么被直接利用，要么经 ATP 合酶利用。</b>',
 en:'“About five point seven kilojoules per mole of protons at twenty-five degrees, or about fifty nine millivolts if you prefer to read it as a potential. That is why a proton gradient is a real energy store. The textbook says the Gibbs energy of the pH difference across the thylakoid membrane is used either directly or by ATP synthase.”',
 cn:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG = 2,303 · R · T · ΔpH</code>（每摩尔质子，只算浓度那一半；R = 8,314 J·mol⁻¹·K⁻¹）。<br>① 搬运一摩尔质子跨过浓度差，做的功是 <code>RT · ln(浓度比)</code>。<br>② 一个 pH 单位就是十倍浓度：<code>ln 10 = 2,303</code> → <code>2,303 × 8,314 × 298 ≈ 5710 J/mol</code>。<br>③ 换成电位，除以法拉第常数：<code>5710 ÷ 96485 ≈ 0,059 V = 59 mV</code>。<b>这正是卡 25 里那个 Nernst 系数。</b><br><br><b>=== 一句话理解 ===</b><br><b>一个 pH 单位 ＝ 5,7 kJ/mol ＝ 59 mV。三个说法，同一件事，只是换了尺子。</b><br>所以两件看着不相干的事其实是一件：<b>呼吸链靠 pH 差储能</b>（p208、卡 25），和<b>氢电极从 pH 0 挪到 pH 7 电位掉 0,41 V</b>（<code>0,059 × 7</code>，p135）。<b>同一个 59 mV，一边解释 ATP 怎么造出来，一边解释生化为什么要给符号加一撇。</b><br>⚠ 这个换算是<b>热力学定义</b>，书只印了 Nernst 式（p134）和 −420 mV 这个结果（p135）。<span class="pg">p134 p135 p208</span>'}
]}
]
});
