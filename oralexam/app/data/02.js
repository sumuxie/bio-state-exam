/* 卡 02 · What is the dissociation constant (Kd) and how is it defined?
   题库 #4（S1 Biochemistry 4 ＋ S2 Biochemistry 8）· 导师写过两遍
   出处 Biochemie OCR p054–p062。书里没有「dissociation constant」这个词条（按书里的原词搜过，全书 0 命中），
   全书唯一明确定义成解离常数的是 p060 的 Ki。
   兼任大本营卡：别的卡的「留口子」都可以落到这里。 */

window.CARDS.push({
id:'02', n:4, merged:[20,21], w:3,
q:'What is the dissociation constant (Kd) and how is it defined?',
qcn:'什么是解离常数，它是怎么定义的',
sub:'主干说完约 75 秒 · 兼大本营卡 · 导师写过两遍',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'这题的定义就是整道题。定义说准了，后面全是它的推论。'},
 {n:'01', t:'定义',
  ez:'“A dissociation constant is an equilibrium constant. It describes a complex breaking apart. It breaks into two free partners. A protein and its ligand is one example. The complex breaks apart. It also forms again. At equilibrium these two rates are the same. Then the concentrations stop changing. K d is the ratio of those concentrations.”',
  ezcn:'<b>解离常数是一个平衡常数</b>，<b>描述的是一个复合物拆成两个游离组分</b>（比如一个蛋白和它的配体）。<b>复合物在拆，也在重新形成；平衡时这两个速率相等，浓度就不再变了</b>——<b>K<sub>d</sub> 就是那几个浓度的比值。</b>',
  big:'Kd 是<b>解离反应的平衡常数</b>：复合物拆成两个游离组分',
  en:'“A dissociation constant is an <b>equilibrium constant</b>. It describes a complex breaking apart into two free partners. For example, a protein and its ligand. The complex breaks apart. It also forms again. At equilibrium these two rates are the same. Then the concentrations stop changing. K d is the ratio of those concentrations.”',
  note:'<b>「平衡常数」这四个字把整题的性质定死了</b>：平衡常数属于热力学，不属于动力学。后面 Km 那个陷阱就是靠这句话挡住的。'},
 {n:'02', t:'式子',
  ez:'“It is the concentration of free protein. Times the concentration of free ligand. Divided by the concentration of the complex. The textbook writes exactly this form. It writes it for the inhibition constant. K i equals free enzyme times free inhibitor. That is over the enzyme inhibitor complex.”',
  ezcn:'<b>游离蛋白的浓度 × 游离配体的浓度 ÷ 复合物的浓度。</b><b>书里正是用这个形式写抑制常数的：K<sub>i</sub> ＝ [E][I] / [EI]。</b>',
  big:'游离的两个，除以复合物：<b>Kd = [P][L] / [PL]</b>',
  en:'“The concentration of free protein times the concentration of free ligand, divided by the concentration of the complex. The textbook writes exactly this form for the inhibition constant: <b>K i equals free enzyme times free inhibitor over the enzyme–inhibitor complex</b>.”',
  note:'<b>用书自己的写法开口。</b>全书唯一明确定义成解离常数的就是 p060 的 Ki = [E][I]/[EI]——老师能对上他书里的东西。<span class="pg">p060</span>'},
 {n:'03', t:'量纲',
  ez:'“It is a ratio. Two concentrations sit over one concentration. So it has units of concentration. That means it can be compared directly. It can be compared with a concentration.”',
  ezcn:'<b>它是一个比值：两个浓度除以一个浓度</b>——<b>所以它的单位是浓度</b>，<b>于是它可以直接跟一个浓度相比较。</b>',
  big:'分子分母差一个浓度，所以<b>它的单位是浓度</b>',
  en:'“Because it is a ratio of two concentrations over one concentration, it has <b>units of concentration</b> — so it can be compared directly with a concentration.”',
  note:'这一句是下一点的前提。<b>先给量纲，再给「半数占据」的读法</b>，顺序反了就成了背结论。'},

 {g:'三个推论', gn:'定义给完，这三条是自动跟出来的，不是另外要背的东西。'},
 {n:'04', t:'数值的意思',
  big:'它等于<b>半数结合位点被占据时的游离配体浓度</b>',
  en:'“Numerically it is the free-ligand concentration at which <b>half the binding sites are occupied</b>.”',
  note:'为什么成立：把 [L] = Kd 代回质量作用式，[PL] 就等于 [P]，正好一半。<b>这不是巧合，是定义直接推出来的</b>——所以能从结合曲线上直接读中点。'},
 {n:'05', t:'方向是反的',
  big:'<b>Kd 越小，结合越紧</b>',
  en:'“The direction is inverted: a <b>small</b> K d means <b>tight</b> binding, because a small number means the complex does not come apart easily.”',
  note:'<b>被问急了最容易说反。</b>记法：Kd 是「<b>拆开</b>」的常数，拆得越难，数越小。倒数是 Ka，association constant：“Its reciprocal is the association constant, K a. K a is one over K d, and it runs the intuitive way: larger means tighter.”'},
 {n:'06', t:'也能从速率读',
  big:'<b>Kd = k<sub>off</sub> / k<sub>on</sub></b>——同一个数，两条路到达',
  en:'“It has a kinetic reading as well: K d equals the off-rate divided by the on-rate. The same number can be reached from equilibrium or from the two rate constants.”',
  note:'<b>注意措辞</b>：kon 和 koff 各自是动力学量，<b>它们的比值才是热力学量</b>：“k on and k off are each kinetic quantities. Their ratio is an equilibrium constant, so K d itself is thermodynamic.” 两个 Kd 相同的结合，kon 和 koff 可以差几个数量级，生物学后果完全不同。<b>可是这句话里那两个字母本身还没交代过</b>——下一格第 7、8 点把它们定死，不定死，这一条就只是两个符号在换位置。'},

 {g:'两个速率常数', gn:'第 6 点里那两个字母，一直没人告诉你它们是什么。这一格就是把它们各自定死，顺便给出最容易记住的那条对比。'},
 {n:'07', t:'k<sub>off</sub> 是什么',
  big:'<b>已经结合好的复合物自己散开</b>的速率常数：一级，单位 <b>1/s</b>',
  en:'“k off is the rate constant for an existing complex coming apart. It is a first-order rate constant, with units of reciprocal seconds. Read it as a probability per unit time, in the same sense as a radioactive decay constant. Each complex has a fixed chance per second of letting go. That chance does not depend on anything else in the solution. Its reciprocal is the lifetime of the complex. That lifetime is called the residence time.”',
  note:'<b>值得带上考场的直觉只有一条：k<sub>off</sub> 的倒数就是这个复合物能活多久。</b>叫 residence time（停留时间）。<br>「一级」的意思是这一步<b>只需要一个东西在场</b>——那个复合物自己。所以它的速度只跟「现在有多少复合物」成正比：<code>v<sub>off</sub> = k<sub>off</sub>[PL]</code>。<br>「概率」那个说法不是比喻：k<sub>off</sub> = 0.001 s⁻¹ 就是「每个复合物每秒有千分之一的机会松手」，跟放射性衰变常数是同一类的量，<b>跟旁边还有多少游离配体一点关系都没有</b>。<br>（<b>书上没有这一格</b>，是通用动力学；被追出处就说 “that is the general kinetic definition”。）'},
 {n:'08', t:'k<sub>on</sub> 是什么',
  big:'<b>游离的蛋白和游离的配体撞上并结合</b>的速率常数：二级，单位 <b>1/(M·s)</b>',
  en:'“k on is the rate constant for a free protein and a free ligand finding each other and binding. It is a second-order rate constant, with units of reciprocal molar reciprocal seconds. There is a concentration in those units because two separate things have to meet. The off-rate constant has no concentration in its units, because only one thing has to happen. That contrast is the cleanest way to hold the two apart.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>K<sub>d</sub> = k<sub>off</sub> / k<sub>on</sub></code><br>k<sub>on</sub> 是结合的速率常数，单位 <code>M⁻¹s⁻¹</code> · k<sub>off</sub> 是散开的速率常数，单位 <code>s⁻¹</code> · K<sub>d</sub> 是两者的比，单位 <code>M</code>。<br><br><b>三步推导</b>（他问「平衡和速率这两条路为什么给出同一个数」就照这个说）：<br>① 结合的速度正比于两个游离物撞在一起的机会：<code>v<sub>on</sub> = k<sub>on</sub>[P][L]</code>。<b>要两个东西同时在场，所以式子里有两个浓度</b>——这就是 k<sub>on</sub> 单位里那个 M⁻¹ 的来历。<br>② 散开的速度只取决于现在有多少复合物：<code>v<sub>off</sub> = k<sub>off</sub>[PL]</code>。<b>只要一个东西在场，所以式子里只有一个浓度</b>，单位里就没有 M。<br>③ 平衡的定义就是这两个速度相等：<code>k<sub>on</sub>[P][L] = k<sub>off</sub>[PL]</code>。两边整理 → <code>[P][L]/[PL] = k<sub>off</sub>/k<sub>on</sub></code>，左边正是第 2 点那个 K<sub>d</sub>。<br>单位也自动对上：<code>s⁻¹ ÷ M⁻¹s⁻¹ = M</code>，正好是第 3 点说的「Kd 的单位是浓度」。<br><br><b>=== 一句话理解 ===</b><br><b>k<sub>off</sub> 的倒数是「抓住之后能拿多久」，k<sub>on</sub>[L] 的倒数是「放开之后要等多久才等到下一个」。K<sub>d</sub> 就是这两段时间的比。</b><br>所以同一个 Kd 可以有两种完全不同的活法：<b>快结合、快松手</b>，和<b>慢慢才结合上、但一抓就是几个小时</b>。识别表里「两个抗体 Kd 一样，是同一个东西吗」问的就是这件事，第 6 点那句「差几个数量级」到这里才有内容。<br>（<b>书上没有这一格</b>，是通用动力学；被追出处就说 “that is the general kinetic definition”。）'},

 {g:'再深一层', gn:'时间不够可以砍这一格，但它是 ④ 的落点。'},
 {n:'09', t:'它其实是自由能',
  big:'ΔG°(结合) = RT ln Kd —— <b>一个数就是一个自由能</b>；书 p018 写 ΔG° = −RT ln K，差的是方向',
  en:'“Because it is an equilibrium constant, it is a free energy in disguise. The standard Gibbs free energy of <b>binding</b> equals R T times the natural log of K d. The textbook’s form is delta G equals <b>minus</b> R T ln K — the sign flips because K d describes the reverse direction, coming apart. Every <b>tenfold</b> tightening is about <b>5.7 kilojoules per mole</b> at 25 degrees — 298 kelvin.”',
  note:'标准结合吉布斯自由能等于 R T 乘以 K d 的自然对数。<br>✔ 已算：RT ln10 在 298.15 K = <b>5.71 kJ/mol</b>。<b>书里没有这个数</b>，它来自热力学定义。被追问出处就说 “that is just R T ln ten”。<br><b>方向必须说。</b>书 p018 印的是 −ΔG° = RT ln K，即 ΔG° = −RT ln K。Kd 是<b>解离</b>的 K，所以 ΔG°(解离) = −RT ln Kd，ΔG°(结合) = +RT ln Kd。只说 “delta G equals RT ln Kd” 不说哪个方向，他拿 p018 一对就是「你符号错了」。<br>「standard」被问：“Standard means all components at unit activity. The biochemical standard state, marked with a prime, fixes hydrogen-ion activity at pH 7 instead.”（p018）'},

 {g:'收尾', gn:'一句停住。这题有两条停止线，第二条更适合你——而第二条后面那两格，是它在实验台上的正面说法。伸出去那句在最后一格。'},
 {n:'10', t:'落点一 · 热力学',
  big:'再往下 Kd 只是<b>浓度尺度上的一个自由能差</b>',
  en:'“Below that, K d is just a free-energy difference on a concentration scale, and how that free energy splits into enthalpy and entropy is <b>calorimetry rather than biochemistry</b>.”',
  note:'标准停止句，落在热力学这块地基上。'},
 {n:'11', t:'落点二 · 测量限制',
  big:'一个 Kd <b>只和它背后那个平衡一样可靠</b>',
  en:'“There is also a practical floor: a K d is no better than the equilibrium behind it. <b>Below roughly the concentration of your own binding sites</b>, a titration stops reporting affinity and starts reporting how much protein you put in.”',
  note:'<b>这条比上一条更适合你</b>，因为说完可以顺势转进主场。它落在「测量方法的限制」那块地基上。<br><b>但它只说了失效，没说怎么不失效。</b>下面两格就是它的正面说法：既然低于自己的位点浓度就不再报亲和力，那蛋白到底该加多少——这正是他顺着你的实验最可能问下来的那一句。'},

 {g:'落点二的台面做法', gn:'停止线说「低于自己的位点浓度，滴定就不再报亲和力」。这两格把它翻成正面：蛋白该加多少、配体滴多宽、读不出来的时候报什么。你实验里真的会狂加蛋白和配体，所以这一格不是理论。'},
 {n:'12', t:'蛋白必须远低于 Kd',
  big:'蛋白远高于 Kd 时，中点报的是<b>蛋白浓度和化学计量，不是亲和力</b>',
  en:'“A binding titration reports K d only when the protein sits well below K d. Once the protein is far above K d, nearly every ligand molecule you add is captured at once. That goes on until the protein is saturated. The curve then straightens into two lines meeting at a corner. What the midpoint reports there is the protein concentration and the stoichiometry, not the affinity. The reason is in the definition itself. The occupancy expression uses the free ligand concentration, while the experiment plots the total ligand you added. Putting one in place of the other is only legal when the bound fraction is negligible against the total. That is exactly the condition that the protein sits below K d. The failure has a name. It is called ligand depletion.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>占据率</b>：<code>θ = [L]<sub>游离</sub> / (K<sub>d</sub> + [L]<sub>游离</sub>)</code>。θ 是被占住的位点比例，0 到 1 · [L]<sub>游离</sub> 是<b>没结合上的</b>那部分配体。<br><b>可是实验横轴画的是</b>：<code>[L]<sub>总</sub> = [L]<sub>游离</sub> + [PL]</code>——你移液枪加进去的那个数。<b>整张卡的中点读法建立在拿后者当前者用，这一步不是永远合法的。</b><br><br><b>四步看清它什么时候失效</b>（他问「你怎么定浓度」就照这个说）：<br>① 想用 [L]<sub>总</sub> 代替 [L]<sub>游离</sub>，条件是被结合掉的那部分可以忽略：<code>[PL] ≪ [L]<sub>总</sub></code>。<br>② 半占据那一点上 <code>[PL] = [P]<sub>总</sub>/2</code>，而同一点上 <code>[L]<sub>游离</sub> = K<sub>d</sub></code>。代进去，条件就变成 <code>[P]<sub>总</sub> ≪ 2K<sub>d</sub></code>。<b>「蛋白要远低于 Kd」这句话是这么来的，不是一条经验规矩。</b><br>③ 违反了会怎样：中点整体往右挪，<code>中点 ≈ K<sub>d</sub> + [P]<sub>总</sub>/2</code>。蛋白一旦远大于 Kd，右边第二项主导，<b>你读出来的中点就是自己加的蛋白量的一半，跟亲和力没关系了</b>。曲线也不再是双曲线，而是两条直线拐一个角。<br>④ <b>那该怎么定</b>：先从文献或预实验<b>猜一个 Kd</b> → 蛋白<b>定在它的十分之一或更低</b> → 配体<b>从 0.1×Kd 滴到 10×Kd</b>。这个跨度对应占据率 <code>0.1/1.1 ≈ 9%</code> 到 <code>10/11 ≈ 91%</code>，曲线的平台和起步都看得见，拟合才有东西可拟。<br><br><b>=== 一句话理解 ===</b><br><b>你自己加进去的位点浓度，就是这台实验的地板：你能报的最紧的 Kd，不会紧过它。</b>所以如果把蛋白压到十分之一 Kd 之后信号就弱到读不出来，<b>挡住你的已经不是这个分子的亲和力，而是这个方法的检测下限</b>。这时候诚实的做法是<b>报一个界</b>——“The K d is at or below one nanomolar, and that is the limit of the method rather than the molecule.”——而不是硬报一个数。<br>（<b>书上没有这一格</b>，书里连 dissociation constant 这个词条都没有；被追出处就说 “that is general biophysics rather than the textbook”。）'},
 {n:'13', t:'ITC 的 c 值',
  big:'同一条规矩的定量形式：<b>c = n · [P] / K<sub>d</sub></b>，可用区间大约 <b>1 到 1000</b>',
  en:'“Isothermal titration calorimetry puts the same rule into a single number, the c value. It is the protein concentration times the stoichiometry, divided by K d. A usable window runs roughly from one to one thousand, and a comfortable one from ten to one hundred. If the c value is too small, the curve has almost no curvature, and a fit cannot find K d. If it is too large, the curve is a square corner, and the corner reports the stoichiometry rather than the affinity.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>c = n · [P]<sub>总</sub> / K<sub>d</sub></code>。c 是个<b>没有单位</b>的数 · [P]<sub>总</sub> 是池子里的蛋白浓度 · n 是化学计量，一个蛋白身上有几个位点 · K<sub>d</sub> 是你要测的那个数。<br><br><b>四步</b>：<br>① c 就是「蛋白浓度是 Kd 的多少倍」。<b>它和上一点那条「蛋白要远低于 Kd」是同一件事，只是写成了一个比值</b>，所以这一格不是新知识，是上一格的刻度。<br>② <b>c 太小（小于 1）</b>：蛋白比 Kd 还稀，每一滴配体大部分留在游离态，曲线几乎是一条斜直线。<b>没有拐弯就没有 Kd 可拟合</b>。<br>③ <b>c 太大（大于 1000）</b>：每一滴配体一进去就被吃光，直到位点用完，曲线是一个<b>直角</b>。直角的位置只告诉你 n 和蛋白浓度。<br>④ 所以实践区间是 <code>1 ≤ c ≤ 1000</code>，舒服的是 <code>10 ≤ c ≤ 100</code>：既有拐弯可以拟合，热信号又够大。要调的旋钮就是蛋白浓度，因为 Kd 不归你管、n 也不归你管。<br><br><b>=== 一句话理解 ===</b><br><b>c 值就是把「曲线拐得够不够」变成一个数。拐弯是 Kd 的唯一来源，直线和直角都没有拐弯，所以两头都测不出亲和力。</b><br>⚠ <b>这就是那个陷阱，而且它就长在你的答案里</b>：你一说「我实验里蛋白和配体都加得很足」，他下一句几乎一定是 “Then what did you actually measure?”。<b>诚实的答案是化学计量和蛋白浓度，不是亲和力。</b>先自己说出来，别等他指出来——自己说是懂行，被指出来是错。<br>（<b>书上没有 ITC</b>，是通用生物物理；被追出处就说 “that is general biophysics rather than the textbook”。）'},

 {g:'留口子', gn:'主动给他一个抓手。三个词全在你的地盘，他追哪一个都答得住。'},
 {n:'14', t:'留口子',
  big:'这就是<b>你自己在测的那个数</b>',
  en:'“And this is the number I actually measure. I work with <b>yeast display</b>: you titrate labelled antigen against cells and read the midpoint by <b>flow cytometry</b>. What decides whether the number means anything is whether the titration really reached equilibrium. At low concentrations that can take hours. The approach to equilibrium runs at k on times the ligand concentration plus k off, and at low ligand that is essentially k off alone. For a nanomolar binder that is of the order of one per hour. And if you read too early you report a K d that is too weak.”',
  note:'<b>三个口子全在你的地盘</b>：yeast display、flow cytometry、平衡时间。他追哪一个都答得住。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>k<sub>obs</sub> = k<sub>on</sub> · [L] + k<sub>off</sub></code><br>k<sub>obs</sub> 是<b>观测到的趋近平衡的速率</b>，单位 <code>s⁻¹</code>。<b>注意它不是「结合有多快」，是「信号还要多久才不再变」</b> · [L] 是游离配体浓度 · k<sub>on</sub>、k<sub>off</sub> 就是第 7、8 点那两个。<br><br><b>三步</b>：<br>① 复合物一边在生成、一边在散开：<code>d[PL]/dt = k<sub>on</sub>[P][L] − k<sub>off</sub>[PL]</code>。<br>② 配体大大过量时 [L] 可以当常数，这条式子就是一个单指数趋近，<b>指数上的那个数就是 k<sub>on</sub>[L] + k<sub>off</sub></b>。<br>③ <b>把 k<sub>obs</sub> 对 [L] 作图是一条直线：斜率就是 k<sub>on</sub>，截距就是 k<sub>off</sub>。</b>一次实验两个常数都拿到，K<sub>d</sub> 是它们的比。<b>表面等离子共振（SPR）报出来的那两个数就是这么来的。</b><br><br><b>=== 一句话理解 ===</b><br><b>[L] 很低的时候，k<sub>on</sub>[L] 这一项几乎没有，剩下 k<sub>off</sub> 一个人撑着——所以越稀的那几个滴定点，越慢到平衡。</b>等待时间被 k<sub>off</sub> 一个人卡死，跟你加了多少配体无关。nanomolar 的结合子 k<sub>off</sub> 大约是每小时一次的量级，<code>1/k<sub>obs</sub></code> 就是小时级。<b>读早了，弱的那几个点还没长满，中点就偏右，报出来的 Kd 偏弱。</b>这正是上面那句英文的算式版本。<br>（<b>书上没有这一格</b>，书里连 dissociation constant 这个词条都没有；被追出处就说 “that is general biophysics rather than the textbook”。）',
  good:'<b>他问「你怎么知道到平衡了」，顺势给这一层：</b>“The approach to equilibrium follows a single exponential. Its observed rate is k on times the free ligand concentration, plus k off. So if you plot that observed rate against ligand concentration, the slope is k on and the intercept is k off. One experiment then gives both rate constants, and K d is their ratio. That is how a surface plasmon resonance experiment reports both numbers.”'}
],
end:'<b>这十四点里，前六点是要背出口的；7–8 把 kon 和 koff 定死，是第 6 点的地基；9–14 是被追问和收尾用的，其中 12–13 是落点二的实操版，也是他最可能顺着你的实验挖的地方。</b>整题的胜负手在第 1 点——说出「平衡常数」这四个字，Km 那个陷阱就自动挡掉了。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：解离反应的<b>平衡常数</b>',
 '“The equilibrium constant of the dissociation reaction. The complex breaks apart. It also forms again. At equilibrium these two rates are the same, and K d is the ratio of the concentrations.”',
 '<b>「平衡常数」四个字把性质定死了</b>：属于热力学，不属于动力学。Km 那个陷阱靠这句挡。'],
['<b>式子</b>：Kd = [P][L] / [PL]；书自己的写法是 Ki = [E][I]/[EI]',
 '“Free protein times free ligand over the complex. The textbook writes this form for K i.”',
 '全书唯一明确定义成解离常数的就是 p060 的 Ki。用书的写法，老师能对上。'],
['<b>量纲</b>：单位是<b>浓度</b>',
 '“It has units of concentration, so it can be compared with a concentration.”',
 '这是「半数占据」那条读法的前提。'],
['<b>数值</b>：<b>半数位点被占据</b>时的游离配体浓度',
 '“Numerically it is the free-ligand concentration at which half the binding sites are occupied.”',
 '把 [L] = Kd 代回质量作用式，[PL] = [P]。不是巧合，是定义推出来的。'],
['<b>方向</b>：Kd 越小结合越紧',
 '“A small K d means tight binding.”',
 '<b>最容易说反。</b>记法：它是「拆开」的常数，拆得越难数越小。倒数是 Ka。'],
['<b>速率读法</b>：Kd = k<sub>off</sub> / k<sub>on</sub>',
 '“K d equals the off-rate divided by the on-rate.”',
 '两个速率常数各自是动力学量，<b>比值才是热力学量</b>。'],
['<b>自由能</b>：ΔG°(结合) = RT ln Kd；书 p018 写 ΔG° = −RT ln K，差的是方向。每十倍约 <b>5.7 kJ/mol</b>',
 '“Every tenfold improvement is about 5.7 kilojoules per mole at 25 degrees, 298 kelvin.”',
 'RT ln10 在 298 K = 5.71。书里没有这个数，它来自热力学定义。'],
['<b>Km 不是 Kd</b>（书自己前后打架）',
 '“K m is k minus one plus k two over k one. A dissociation constant is k minus one over k one. They coincide only in the rapid-equilibrium case.”',
 '书 p055 把式子印出来了，p056 却说它「表达亲和力」。<b>可以引用这本书反驳这本书。</b>'],
['<b>停止线</b>：低于自己的位点浓度，滴定就不再报亲和力',
 '“Below roughly the concentration of your own binding sites, a titration stops reporting affinity.”',
 '落在「测量限制」那块地基上，而且能顺势转进主场。'],
['<b>留口子</b>：yeast display 滴定、流式读中点、平衡时间',
 '“This is the number I actually measure — yeast display, flow cytometry, and whether the titration really reached equilibrium.”',
 '三个词都在你的地盘。故意留的。']
],

segs:[
 {tag:'段 1 · 定义', h:'先说它是什么类的常数',
  p:['“A dissociation constant is an equilibrium constant. It describes a complex breaking apart into two free partners. For example, a protein and its ligand. The complex breaks apart. It also forms again. At equilibrium these two rates are the same. Then the concentrations stop changing. K d is the ratio of those concentrations. So it is the concentration of free protein times the concentration of free ligand, divided by the concentration of the complex.”',
     '“The textbook defines the inhibition constant K i in exactly this form. K i equals free enzyme times free inhibitor over the enzyme-inhibitor complex.”',
     '“And because it is a ratio of concentrations over a concentration, it has units of concentration.”'],
  note:'<b>开口就说「平衡常数」。</b>那四个字把整题定死在热力学这一侧，后面 Km 那个陷阱就不用临时挡。书自己的 Ki 写法在 <span class="pg">p060</span>。'},
 {tag:'段 2 · general', h:'三个推论，都是定义自动跟出来的',
  p:['“Three things follow from that.”',
     '“First, since it has units of concentration, it can be compared with a concentration, and numerically it is the free-ligand concentration at which half the binding sites are occupied.”',
     '“Second, the direction is inverted: a small K d means tight binding, because a small number means the complex does not fall apart easily.”',
     '“Third, it has a kinetic reading as well — K d equals the off-rate divided by the on-rate. The same number can be reached from equilibrium or from the two rate constants.”'],
  note:'<b>说「三个推论」而不是「三个特点」</b>——前者显示你知道它们不是独立要背的事实，是同一个定义的三个面。'},
 {tag:'段 3 · 稍展开', h:'挑「半数占据」推给他看',
  p:['“The half-occupancy reading is worth doing explicitly, because it is what makes K d usable at the bench. Put the free ligand concentration equal to K d in the mass-action expression. The concentration of complex then comes out equal to the concentration of free protein, so exactly half the protein is bound.”',
     '“That is why you can read K d straight off a binding curve as the midpoint. That holds provided the protein is dilute compared with K d, so that the free ligand is essentially what you added.”'],
  note:'〔可裁〕再一层：“And because it is an equilibrium constant, it is a free energy in disguise. Delta G equals R T ln K d, so every tenfold improvement is about 5.7 kilojoules per mole.”'},
 {tag:'段 4 · 留口子', h:'转进主场，并且自带一个停止线',
  p:['“And this is the number I actually measure. I work with yeast display, where you titrate labelled antigen against cells and read the midpoint by flow cytometry.”',
     '“The part that decides whether the number means anything is whether the titration really reached equilibrium. At low concentrations that can take hours. If you read too early you report a K d that is too weak. Below roughly the concentration of your own binding sites, a titration stops reporting affinity altogether and starts reporting how much protein you put in.”'],
  note:'<b>这一段同时是留口子和停止线。</b>三个没交代的词（yeast display、flow cytometry、平衡）全在你的地盘，他追哪个都行。'}
],

why:{
 rungs:[
  ['为什么一个数字就能描述一个结合？','因为在平衡态体系只有一个自由度：给定游离配体浓度，占据率就定了。<b>整条结合曲线由一个参数决定。</b>“At equilibrium the system has only one degree of freedom: fix the free ligand concentration and the occupancy is fixed. The whole binding curve is set by one parameter, and K d is that parameter.”'],
  ['为什么半数占据的位置正好是 Kd？','把 [L] = Kd 代回质量作用式，[PL] = [P]。<b>这不是巧合，是定义直接推出来的。</b>'],
  ['那 Kd 本身由什么决定？','由结合前后的<b>自由能差</b>：ΔG°(结合) = RT ln Kd（书 p018 的 ΔG° = −RT ln K 说的是解离方向）。所以 Kd 不是界面的几何性质，<b>是一个能量</b>。“So K d is not a geometric property of the interface. It is an energy.”']
 ],
 stop:{lbl:'停 · 落在热力学（另有一条落在测量限制，见速背第 11 点）',
  say:'“Below that, K d is just a free-energy difference on a concentration scale, and how that free energy splits into enthalpy and entropy is calorimetry rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is Kd?',
  ez:'“It is an equilibrium constant. It belongs to the dissociation reaction. So it is free protein times free ligand. That is divided by the complex. It is a ratio of concentrations over a concentration. So it has units of concentration. And its value has a direct meaning. It is the free ligand concentration at half occupancy. Half the binding sites are occupied there.”',
  ezcn:'<b>Kd 是解离反应的平衡常数：游离蛋白 × 游离配体 ÷ 复合物。</b><b>因为它是「浓度 × 浓度 ÷ 浓度」，所以量纲是浓度；而它的数值就是「半数结合位点被占据时的游离配体浓度」。</b><b>四步一次给完：是哪一类常数 · 式子 · 量纲 · 数值的意思。</b>',
 mean:'<b>他真正会说出口的那句，就这么短。</b>所以答案要自带结构：是什么类的常数 → 式子 → 量纲 → 数值的意思。四步一次给完，别等他一层层问。',
 say:'“It is the equilibrium constant of the dissociation reaction — free protein times free ligand over the complex. Because it is a ratio of concentrations over a concentration, it has units of concentration, and numerically it is the free-ligand concentration at which half the binding sites are occupied.”'},

{q:'What does affinity mean?',
  ez:'“Affinity is the strength of binding. It is how strongly one partner holds the other. Put another way it is where the equilibrium lies. The textbook’s phrase is the strength of the interaction. K d is the number that measures it. But it runs the other way. A lower K d means higher affinity. That inversion is worth saying out loud. The word and the number run in opposite directions.”',
  ezcn:'<b>亲和力 ＝ 结合的强度：一方把另一方抓得多牢，或者说平衡偏向复合物多远。</b><b>书用的词是 the strength of the interaction。</b><b>Kd 就是衡量它的那个数，但方向是反的：Kd 越小，亲和力越高。</b>⚠ <b>这个反向一定要说出口，因为词和数是反着走的。</b>',
 mean:'他在问同一件事，只是用了那个更含糊的词。<b>把含糊的词换成能测的量，就是答案。</b>',
 say:'“Affinity is the <b>strength of binding</b>. It is how strongly one partner holds the other, or equivalently how far the equilibrium lies toward the complex. The textbook’s phrase is ‘the strength of the interaction’. K d is the number that measures it, and it runs the other way: a <b>lower</b> K d means higher affinity. That inversion is worth saying out loud, because the word and the number run in opposite directions.”'},

{q:'Which binds more tightly — a Kd of one nanomolar or one micromolar?',
  ez:'“One nanomolar binds more tightly. K d is the constant for coming apart. So the smaller number is the tighter complex. Here it is a thousand times tighter.”',
  ezcn:'<b>1 nM 的那个更牢。</b><b>Kd 是「散开」的常数，所以数越小复合物越紧——这里紧一千倍。</b><b>一句话答完，别多解释。</b>',
 mean:'<b>纯粹测你会不会说反。</b>一句话答完，别解释太多。',
 say:'“One nanomolar. K d is the constant for coming apart, so the smaller number is the tighter complex — a thousand times tighter here.”'},

{q:'Is Km the same as Kd?',
  ez:'“Not in general. K m is k minus one plus k two, over k one. That is substrate falling off, plus the catalytic step, over binding. A true dissociation constant is k minus one over k one. The two coincide under one condition. The catalytic step must be negligible. It must be small next to the substrate falling off. The textbook does read K m as an affinity. And by its own description that is fair. It calls the binding step fast and reversible.”',
  ezcn:'<b>一般来说不是。</b><b>Km ＝ (k₋₁ ＋ k₂) / k₁——「底物掉下来 ＋ 催化步」除以「结合」；而真正的解离常数是 k₋₁ / k₁。</b><b>两者只有在催化步相对于底物掉落可以忽略时才重合。</b><b>书确实把 Km 当亲和力读，而按它自己对机制的描述这也说得过去：它说结合这一步「快而可逆」、催化步更慢，也就是底物掉下来的次数远多于被转化的次数。</b><b>永远成立的是书的另一句：Km 是稳态下半最大速率时的底物浓度，而 Kd 是平衡时半数占据的游离配体浓度。</b><b>这本书里唯一干净的解离常数是 Ki。</b>',
 mean:'<b>这题的核心陷阱，而且书自己前后打架。</b>先给书的读法，再给成立条件，最后指出书自己在别处给了干净的定义。',
 say:'“Not in general. K m is k minus one plus k two, over k one. That is <b>substrate falling off, plus the catalytic step, over binding</b>. A true dissociation constant is k minus one over k one. The two coincide only when the catalytic step is negligible next to the substrate falling off. The textbook does read K m as an affinity, and by its own description of the mechanism that is fair. It says binding of substrate to enzyme is <b>fast and reversible</b> and the catalytic step slower. So the substrate falls off far more often than it is turned over. What is always true is the book’s other sentence: K m is the substrate concentration at half-maximal rate in the <b>steady state</b>, whereas K d is the free-ligand concentration at half occupancy at <b>equilibrium</b>. The clean dissociation constant in this book is K i, free enzyme times free inhibitor over the complex.”',
 tail:'书 <span class="pg">p055</span> 把 Km = (k₋₁+k₂)/k₁ 的式子<b>印出来了</b>（已回原图确认），<span class="pg">p056</span> 却说它「expresses affinity」（书上那句话的英译）。<b>你是在引用这本书反驳这本书，那是最安全的位置</b>——不是「别的教材说」，是「你这本书第 55 页印的式子说」。<br><b>p054 帮你一把</b>：书自己写第一步「快而可逆」、第二步「更慢、不可逆」（<i>This step is fast and reversible … This reaction is slower</i>），那正是 k₂ 可忽略的条件——所以「书为什么敢把 Km 叫亲和力」有书内的解释，比单纯「书打架」稳。<b>⚠ 别顺嘴报 kcat 的数：书 p058 的 turnover number 按「每分钟」定义</b>，通用是每秒。'},

{q:'How would you measure it?',
  ez:'“I titrate one partner against a fixed amount of the other. Then I read the midpoint of the binding curve. That is the free concentration at half the maximal signal. I use yeast display and flow cytometry. So each cell reports its own binding. One thing decides whether the number is real. Did the titration reach equilibrium. At low concentrations that takes hours. Reading early makes the K d look weaker than it is.”',
  ezcn:'<b>把一方对固定量的另一方做滴定，然后读结合曲线的中点——也就是信号达到最大值一半时的游离浓度。</b><b>我用酵母展示加流式，所以每个细胞报告它自己的结合。</b><b>决定这个数是不是真的，只有一件事：滴定有没有达到平衡。</b><b>低浓度下那要几个小时；读早了，Kd 看起来会比实际弱。</b>',
 mean:'<b>你的主场。</b>方法 ＋ 那个决定数字是否有意义的条件。',
 say:'“Titrate one partner against a fixed amount of the other and read the midpoint of the binding curve — the free concentration at half the maximal signal. I use yeast display and flow cytometry, so each cell reports its own binding. The thing that decides whether the number is real is whether the titration reached equilibrium. At low concentrations that takes hours, and reading early makes the K d look weaker than it is.”'},

{q:'Why does a titration stop working if you go low enough?',
  ez:'“Because the free ligand stops being what you pipetted. That happens once the K d is at or below the site concentration. Most of the ligand is then bound. And half occupancy is defined by the free concentration. So the midpoint drifts upward. It moves to roughly K d plus half your site concentration. At that point it no longer reports affinity. So I keep the sites well below K d. Or I fit the depletion explicitly.”',
  ezcn:'因为<b>到某个点之后，游离配体就不再等于你加进去的那个量了</b>：<b>当你要测的 Kd 已经低到跟管子里结合位点的浓度相当或更低时，配体大部分都被结合掉了。</b><b>而「半数占据」是由游离浓度定义的，所以曲线中点会漂到大约「Kd ＋ 一半的位点浓度」，不再报告亲和力。</b><b>对策：把位点浓度压到远低于 Kd，或者把这种耗竭明确地拟合进去。</b>', odd:1,
 mean:'问的是<b>浓度下限</b>，也就是「半数占据 ≠ 半数蛋白被用掉」那条陷阱。',
 say:'“Because once the K d you are measuring is at or below the concentration of binding sites in the tube, the free ligand is no longer what you pipetted. Most of it is bound. Half-occupancy is defined by the <b>free</b> concentration, so the midpoint drifts to roughly <b>K d plus half your site concentration</b> and stops reporting affinity. So you keep the sites well below K d, or fit the depletion explicitly.”'},

{q:'Why do some drugs work at much lower doses than others?',
  ez:'“Largely because of the dissociation constant. That is the constant of the drug for its target. A drug with a nanomolar K d occupies half its sites easily. It does so at a nanomolar free concentration. One with a micromolar K d needs a thousand times more. It is the same number. It is just read as a dose.”',
  ezcn:'<b>很大程度上是因为药物对靶点的解离常数。</b><b>Kd 在纳摩尔级的药，在纳摩尔级的游离浓度下就占据了一半靶点；Kd 在微摩尔级的要多一千倍。</b><b>同一个数，只是当成剂量来读。</b>⚠ <b>说 largely 不要说 because</b>——<b>真实药效还牵涉吸收、代谢和靶点丰度，而那些是药理学不是生化。</b>', odd:1,
 mean:'<b>听起来是药理题，其实就是 Kd。</b>',
 say:'“Largely because of the dissociation constant of the drug for its target. A drug with a nanomolar K d occupies half its target sites at a nanomolar free concentration. One with a micromolar K d needs a thousand times more. It is the same number, read as a dose.”',
 tail:'⚠ 真实药效还牵涉吸收、代谢、靶点丰度：“Largely — dose also depends on absorption, metabolism and how much target there is, but those are pharmacology rather than biochemistry.”<b>说 "largely" 不要说 "because"</b>，否则他会顺着药代动力学问下去，那不是生化。'},

{q:'Two antibodies have the same Kd. Are they the same?',
  ez:'“Not necessarily. K d is a ratio. It is the off rate over the on rate. So two binders can share a K d. And they can still differ by orders of magnitude. They differ in both rates. One may take hours to come off. It then takes hours to go on as well. The other takes seconds either way. Biologically those two behave very differently.”',
  ezcn:'<b>不一定。</b><b>Kd 是解离速率除以结合速率的比值，所以两个结合物可以有同一个 Kd，而两个速率各自差几个数量级：一个可能要几个小时才掉下来、也要几个小时才结合上去；另一个是几秒对几秒。</b><b>它们在生物学上的表现非常不一样。</b><b>这一条很能显出你真的用过这个数，而不是背过它的定义。</b>', odd:1,
 mean:'问的是<b>热力学量和动力学量的区别</b>——速记第 6 点。',
 say:'“Not necessarily. K d is the ratio of the off-rate to the on-rate, so two binders can share a K d and still differ by orders of magnitude in both rates. One may take hours to come off and hours to go on. The other takes seconds and seconds. Biologically those behave very differently.”',
 tail:'<b>这一条很能显出你真的用过这个数</b>，而不是背过它的定义。'},

{q:'What is the significance of the Michaelis-Menten equation?',
  ez:'“Its significance is coverage. One equation with two constants describes a whole dependence. It is the dependence of the initial rate on substrate concentration. The initial rate is measured before product accumulates. The equation also gives both constants a meaning. The rate equals V max times substrate. That is over K m plus substrate. The curve is a hyperbola. K m is the substrate concentration at half maximal rate. V max is the rate when the enzyme is saturated.”',
  ezcn:'<b>它的意义在于覆盖：一个只有两个常数的方程，描述了酶的初速率对底物浓度的整条依赖关系（初速率 ＝ 在产物累积之前测到的速率），而且给了这两个常数各自的含义。</b><b>v ＝ Vmax·[S] / (Km ＋ [S])，曲线是一条双曲线；Km 是半最大速率时的底物浓度（推导里它是 (k₋₁＋k₂)/k₁），Vmax 是每个酶分子都处在复合物里、也就是酶被饱和时的速率。</b><b>它同时覆盖两端：低底物时是一级，饱和时是零级；饱和时速率正比于酶量——这就是测酶活要在饱和底物下做、以及抑制剂按「对 Km 和 Vmax 做了什么」分类的原因。</b><b>它来自稳态假设：酶–底物复合物先积累，然后因为生成和分解速度相同而保持恒定。</b>',
 mean:'题库 #21。<b>它整个落在这张卡的页范围里</b>，所以顺手就答了。',
 say:'“Its significance is that one equation with two constants describes the whole dependence of an enzyme’s <b>initial rate</b> on substrate concentration. The initial rate is the rate measured before product accumulates. The equation also gives both constants a meaning. The rate v equals V max times substrate concentration, over K m plus substrate concentration. That curve is a hyperbola. K m is the substrate concentration at half-maximal rate. In the derivation it is k minus one plus k two, over k one, the rate constants left in the denominator. V max is the rate when every enzyme molecule is in the complex. The enzyme is then <b>saturated</b>. It covers both limits: first order at low substrate, zero order at saturation. At saturation the rate is proportional to enzyme. That is why activity is assayed at saturating substrate, and why inhibitors are classified by what they do to K m and V max. It comes from the steady-state assumption: the enzyme-substrate complex builds up and then stays constant, because it forms and breaks down at the same rate.”',
 tail:'书的两步机制在 <span class="pg">p054</span>：E + A ⇌ EA <b>快且可逆</b>，EA → E + X <b>慢且不可逆</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br> <b>式子</b>：<code>v = V<sub>max</sub> · [S] / (K<sub>m</sub> + [S])</code><br> v 是初速度 · [S] 是底物浓度 · V<sub>max</sub> 是底物多到把酶占满时的速度 · K<sub>m</sub> 是半速时的底物浓度。<br><br> <b>四步推导</b>（他问「这式子哪来的」就照这个说）：<br> ① 机制：<code>E + S ⇌ ES → E + P</code>。三个速率常数：<b>k₁</b> 结合、<b>k₋₁</b> 掉下来、<b>k₂</b> 出产物。<br> ② <b>稳态假设</b>：ES 生成得多快就消失得多快 → <code>k₁[E][S] = (k₋₁ + k₂)[ES]</code><br> ③ 酶总量守恒：<code>[E] = [E]ₜ − [ES]</code>，代进去整理 → <code>[ES] = [E]ₜ[S] / ( (k₋₁+k₂)/k₁ + [S] )</code>。<b>分母里那个常数组合，就是 K<sub>m</sub>。</b><br> ④ 速度只由 ES 决定：<code>v = k₂[ES]</code>，而酶全在复合物里时 <code>V<sub>max</sub> = k₂[E]ₜ</code> → <code>v = V<sub>max</sub>[S] / (K<sub>m</sub> + [S])</code><br><br> <b>=== 一句话理解 ===</b><br> 两边同除 V<sub>max</sub>：<code>v / V<sub>max</sub> = [S] / (K<sub>m</sub> + [S])</code>。 <b>右边就是「有多大比例的酶身上挂着底物」。</b><br> 所以这条方程从头到尾只说一件事：<b>速度 ＝ 最高速度 × 被占住的酶的比例。</b><br><br> <b>而右边那个式子，跟这张卡开头的占据率曲线一模一样</b>——把 K<sub>m</sub> 换成 K<sub>d</sub>、[S] 换成游离配体，就是「半数占据」那条。 <b>Michaelis-Menten 曲线本质上是一条结合饱和曲线，只是纵轴从「占了多少」换成了「跑多快」。</b> K<sub>m</sub> 之于底物，就像 K<sub>d</sub> 之于配体：<b>都是「一半被占住」时的浓度</b>。<br><br> <b>为什么是双曲线不是直线</b>：酶的数量是固定的，一个酶一次只抓一个底物。 底物少的时候，加一倍底物就多一倍碰撞，速度跟着翻倍（一级）； 底物多到没有空酶了，再加也没用，速度顶在 V<sub>max</sub>（零级）。曲线就是这两段之间的过渡。<br><br> ⚠ <b>K<sub>m</sub> 不是 K<sub>d</sub></b>：K<sub>m</sub> = (k₋₁+k₂)/k₁ 里多了一个 k₂。 只有 k₂ ≪ k₋₁（底物掉下来比被转化快得多）时两者才相等。这就是同卡那条陷阱。'},

{q:'What is inhibition constant Ki?',
  ez:'“The textbook defines it as a dissociation constant. It is the constant of the enzyme inhibitor complex. So it is free enzyme times free inhibitor. That is over E I. For uncompetitive inhibition there is a second one. It is called K i prime. That one belongs to the enzyme substrate inhibitor complex.”',
  ezcn:'<b>书把 Ki 定义为酶–抑制剂复合物的解离常数：游离酶 × 游离抑制剂 ÷ EI。</b><b>反竞争性抑制里还有第二个，Ki′，对应的是酶–底物–抑制剂复合物。</b>⚠ <b>别把两个 Ki 混了。</b><b>书给的竞争性抑制经典例子是丙二酸抑制琥珀酸脱氢酶：像到能结合，但不能被脱氢；图上的表现是 Vmax 不变、Km 升高。</b>',
 mean:'<b>书里唯一明确叫「解离常数」的东西。</b>而且有两个 Ki，别混。',
 say:'“The textbook defines it as the dissociation constant of the enzyme-inhibitor complex: free enzyme times free inhibitor over E I. For uncompetitive inhibition there is a second one, K i prime, for the enzyme-substrate-inhibitor complex.”',
 tail:'竞争性抑制的经典例子书给了：<b>malonate 抑制 succinate dehydrogenase</b>——像底物到能结合，但不能被脱氢。图上的表现是 <b>Vmax 不变、Km 升高</b>。英文：“The textbook’s classic competitive example is malonate inhibiting succinate dehydrogenase. It is similar enough to bind, but it cannot be dehydrogenated. On the plot V max is unchanged and K m rises.”<span class="pg">p060</span>'}
],

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p056_obr32_saturation_curve.jpg',
  t:'饱和曲线 —— 这道题最可能被要求现场画的一张（书 Obr. 3.2）',
  cap:'<b>这张是「画」，而且它是这道题的主图</b>——考官画两条轴，让你把曲线填上去，这是这类题最常见的问法。'
    + '<br><b>先记住书用的字母</b>：横轴印的是 <b>[A]</b> 不是 [S]（这本书用 A 表示底物），纵轴是 <b>v</b>，平台标的是 <b>V<sub>lim</sub></b> 不是 V<sub>max</sub>。<b>照书的字母画，他认得出来。</b>'
    + '<br><br><b>画的顺序（五步）</b>:'
    + '<br>① 两条轴：纵轴 <b>v</b>（初速度），横轴 <b>[A]</b>（底物浓度）。'
    + '<br>② 从<b>原点</b>起笔，先陡后缓，向右<b>趋平</b>但永远碰不到顶——这是一条<b>直角双曲线</b>。'
    + '<br>③ 在顶上画一条<b>水平虚线</b>，标 <b>V<sub>lim</sub></b>。'
    + '<br>④ 在一半高度再画一条水平虚线，标 <b>V<sub>lim</sub>/2</b>；它跟曲线相交那一点<b>向下引一条竖虚线</b>落到横轴。'
    + '<br>⑤ 竖虚线的落点标 <b>K<sub>m</sub></b>。<b>这一步就是整张图的意思</b>，别的都是陪衬。'
    + '<br><br><b>边画边说的三句</b>：“Plot the initial velocity against the substrate concentration and you get a <b>rectangular hyperbola</b>. It rises steeply and then flattens onto a plateau.”'
    + '<br>“The plateau is <b>V max</b>, the rate at which the substrate has saturated the enzyme, so essentially every enzyme molecule is in the enzyme-substrate complex and adding more substrate changes nothing.”'
    + '<br>“The substrate concentration that gives exactly <b>half</b> that rate is the <b>Michaelis constant</b>. So K m has the dimension of a concentration, and the lower it is, the better that substrate is for that enzyme.”'
    + '<br><br><b>这张图跟 K<sub>d</sub> 是同一个形状</b>：半饱和点落在 [A] = K<sub>m</sub>，占据率曲线的半占据点落在 [L] = K<sub>d</sub>。'
    + '<b>两条曲线长得一样，因为它们问的是同一句话——要多浓才够占住一半。</b>'
    + '<br>⚠ 图下面那行捷克图注的意思是「底物浓度对酶反应速率的影响」，不用管它怎么拼，<b>看得清就行</b>。',
  src2:'Biochemie, Obr. 3.2, p056 · 300 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p056_obr33_lineweaver_burk.jpg',
  t:'Lineweaver–Burk 双倒数图 —— 把双曲线拉直（书 Obr. 3.3）',
  cap:'<b>这张也是「画」。</b>他常常先让你画上一张，再追一句「那你怎么从实验数据把 K<sub>m</sub> 和 V<sub>max</sub> 读出来」——答案就是这张。'
    + '<br><br><b>画的顺序（五步）</b>:'
    + '<br>① 两条轴：纵轴 <b>1/v</b>，横轴 <b>1/[A]</b>。<b>画成十字，横轴要留出负的那一半</b>，因为直线要往左延伸过去。'
    + '<br>② 画一条<b>向右上的直线</b>，在右半边落几个<b>空心圆点</b>——书上画的就是实验点。'
    + '<br>③ 直线往左<b>用虚线延长</b>，穿过纵轴，交到横轴<b>负</b>的那一侧。'
    + '<br>④ 纵轴截距标 <b>1/V<sub>lim</sub></b>，横轴截距标 <b>−1/K<sub>m</sub></b>。'
    + '<br>⑤ 斜率标 <b>K<sub>m</sub>/V<sub>lim</sub></b>。'
    + '<br><br><b>边画边说的两句</b>：“Take reciprocals of both sides of the Michaelis-Menten equation and the hyperbola becomes a <b>straight line</b>: one over v against one over substrate. The intercept on the vertical axis is <b>one over V max</b>, the intercept on the horizontal axis is <b>minus one over K m</b>, and the slope is <b>K m over V max</b>.”'
    + '<br>“The textbook’s reason for using it is practical rather than theoretical. Reading V max off the saturation curve needs measurements at very high substrate concentration, and the textbook says those are <b>inaccurate and expensive in material</b>. The straight line gets both constants out of the range you can actually measure.”'
    + '<br><br><b>这张图还是下一道题的工具</b>：三种可逆抑制在这张图上各有一个样子，见下面第四张，完整的说法在卡 <b>19</b>。'
    + '<br>⚠ 图下面那行捷克图注的意思是「按 Lineweaver 和 Burk 测定酶的动力学常数」——<b>两个人名本来就是拉丁字母，直接念</b>。',
  src2:'Biochemie, Obr. 3.3, p056 · 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p059_two_step_mechanism.jpg',
  t:'两步机制 —— 速背第 6 点里那三个速率常数，书自己印出来了（书 p059）',
  cap:'<b>这张是「认」，而且它是你在 K<sub>m</sub> 那一刀上的护身符。</b>书把<b>三个速率常数</b>印在同一行：结合 <b>k₁</b>、散开 <b>k₋₁</b>、催化 <b>k₂</b>。'
    + '<br><b>第一步</b> <code>E + A ⇌ EA</code> 是结合，<b>快、可逆</b>，靠弱相互作用；<b>第二步</b> <code>EA → E + X</code> 是化学变化，<b>慢、不可逆</b>，酶原样出来。'
    + '<br><br><b>为什么要它</b>：<span class="pg">p055</span> 把式子印出来了，<code>K<sub>m</sub> = (k₋₁ + k₂)/k₁</code>；可是 <span class="pg">p056</span> 又说 K<sub>m</sub>「表达亲和力」。'
    + '<b>这两句不能同时全对</b>——亲和力是 k₋₁/k₁，而式子的分子上多一个 k₂。'
    + '<br><b>要说的那一句</b>：“K m equals the dissociation constant of the enzyme-substrate complex <b>only when</b> the catalytic step is much slower than the complex falling apart, that is when k two is much smaller than k minus one. Otherwise K m is <b>larger</b> than the true dissociation constant, and it stays a kinetic quantity rather than a binding one.”'
    + '<br><b>这就是「用书的一半打书的另一半」</b>：不是「别的教材说」，是<b>「你这本书第 55 页印的式子说」</b>，那是最安全的位置。'
    + '<br><br>⚠ 这张反应式在书上还往下挂着两支（被裁掉了），落到 EI 和 EAI——那是抑制那道题的内容，见卡 <b>19</b>。',
  src2:'Biochemie, p059（§3.5 开头那张反应式；两步机制的正文在 p054）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p061_obr36_reversible_inhibition.jpg',
  t:'三种可逆抑制在双倒数图上各是什么样子（书 Obr. 3.6）',
  cap:'<b>这张是「认」。</b>卡上那句「malonate 抑制 succinate dehydrogenase，图上 V<sub>max</sub> 不变、K<sub>m</sub> 升高」，指的就是<b>中间</b>那一张。'
    + '<br>三张小图的标题从左到右是<b>非竞争性 · 竞争性 · 反竞争性</b>；每张右上角那个 <b>[I]</b> 加一根弯箭头，意思是「抑制剂浓度沿箭头方向越来越大」。'
    + '<br><br><b>三张图各只看一个地方</b>:'
    + '<br>· <b>竞争性（中）</b>：几条线<b>交在纵轴上同一点</b> → 1/V<sub>lim</sub> 没动 → <b>V<sub>max</sub> 不变</b>；横轴截距往右挪 → <b>K<sub>m</sub> 变大</b>。'
    + '<br>· <b>非竞争性（左）</b>：几条线<b>交在横轴上同一点</b> → −1/K<sub>m</sub> 没动 → <b>K<sub>m</sub> 不变</b>；纵轴截距往上挪 → <b>V<sub>max</sub> 降</b>。'
    + '<br>· <b>反竞争性（右）</b>：几条线<b>互相平行</b> → 斜率没动 → <b>V<sub>max</sub> 和 K<sub>m</sub> 一起降</b>。'
    + '<br><br><b>一句话记法</b>：交点在哪一条轴上，那条轴对应的常数就没变。三类怎么定义、Ki 是什么，全在卡 <b>19</b>，这里只认图。',
  src2:'Biochemie, Obr. 3.6, p061 · 300 dpi 原图裁切，未修改'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认你知道这些词。而这题的每个词都很容易被追。', items:[
{r:'实测', q:'What is the Michaelis constant?',
    ez:'“K m is a substrate concentration. At that concentration the initial rate is half of V max. It comes out of the steady state derivation. It equals k minus one plus k two, over k one. Those are the rate constants in the denominator. The denominator belongs to the Michaelis Menten equation. K m has units of concentration. It characterises one enzyme and substrate pair. The textbook reads it as an affinity. That reading is only exact in one case. The catalytic step has to be negligible.”',
    ezcn:'<b>K<sub>m</sub> 是一个底物浓度</b>：在这个浓度下<b>初速度等于 V<sub>max</sub> 的一半</b>。它从稳态推导里出来，等于 <b>(k₋₁ ＋ k₂) / k₁</b>，也就是米氏方程分母里那组速率常数。<b>单位是浓度</b>，描述的是<b>一对酶和底物</b>。书把它读成亲和力，<b>但那个读法只有在催化那一步可以忽略时才准确</b>。',
 en:'“K m is the <b>substrate concentration at which the initial rate is half of V max</b>. It comes out of the steady-state derivation as k minus one plus k two, over k one. That is the ratio of rate constants in the denominator of the Michaelis-Menten equation. It has units of concentration and characterises one enzyme-substrate pair. The textbook reads it as the affinity of enzyme for substrate, and it is a true dissociation constant only when the catalytic step is negligible.”',
 cn:'p055 印了式子，p056 给了「半饱和的底物浓度」和「有浓度的量纲」。正面定义放前面，Km 对 Kd 的陷阱在同一个答案题那条。'},
{r:'高', q:'What is a steady state, and how is it different from equilibrium?',
    ez:'“A steady state is when a concentration stops changing. It stops because formation and removal happen at the same rate. But material still flows through. Here the concentration is the enzyme substrate complex. It is formed and broken down to product at the same rate. Equilibrium is a special case. There every single step is balanced. And nothing flows at all. The textbook says living matter is mostly in a stationary state. That state only looks like equilibrium.”',
    ezcn:'<b>稳态 ＝ 某个浓度不再变，因为生成和消失一样快，但物质仍然在流过。</b>这里说的是<b>酶–底物复合物</b>：<b>生成的速率和分解成产物的速率相等</b>。<b>平衡是特例</b>：<b>每一步本身都平衡了，什么都不流</b>。书说：<b>活的物质大多处在一个只是看起来像平衡的稳定态里。</b>',
 en:'“A steady state is when a concentration stops changing because it is <b>formed and removed at the same rate</b>, while material still flows through. Here it is the enzyme-substrate complex, formed and broken down to product at the same rate. Equilibrium is the special case where every step is itself balanced and nothing flows. The textbook says living matter is mostly in a stationary state that only looks like equilibrium.”',
 cn:'p055 稳态假设的原话；p018 「生命物质多处于看起来像平衡的稳态，平衡是它的特例」。Km 是稳态量、Kd 是平衡量，这条是那句话的地基。'},
{r:'高', q:'What is activation energy?',
    ez:'“It is the energy barrier the reactant molecules must overcome. They must overcome it to become product. The textbook says it plainly. A has to become X. The molecules of A must be supplied first. They are supplied with the activation energy. Heat can supply it. A catalyst lowers it instead. It lowers it by taking the reaction through a different mechanism.”',
    ezcn:'<b>活化能 ＝ 反应物分子要变成产物必须翻过去的那道能垒。</b>书的说法：<b>A 要变成 X，A 的分子必须被供给活化能</b>。<b>加热可以供给它；催化剂则是把它压低</b>——<b>办法是让反应改走另一条机制。</b>',
 en:'“The energy barrier the reactant molecules must overcome to be converted into product. The textbook says that for A to become X, the molecules of A must be supplied with the activation energy. Heat can supply it. A catalyst lowers it by taking the reaction through a different mechanism.”',
 cn:'p054，figure 3.1。'},
{r:'中', q:'What do first order and zero order mean here?',
 en:'“First order in substrate means the rate is directly proportional to substrate concentration — the low-substrate limit, substrate far below K m. Zero order means the rate no longer depends on substrate at all. At saturation, substrate far above K m, v equals V max and is proportional to enzyme alone. That is why activity is measured there.”',
 cn:'p055–p056 两个极限；p058 活性测定要在饱和底物下。'},
{r:'中', q:'What is a rate constant?',
 en:'“The proportionality constant between a rate and the concentrations it depends on. For a one-body step, v equals k times the concentration. For a binding step, it is k times the product of two concentrations. It is what a catalyst changes. An equilibrium constant is a ratio of rate constants.”',
 cn:'通用。'},
{r:'中', q:'What is the turnover number?',
 en:'“Molecular activity, formerly the turnover number: the number of substrate molecules converted by one enzyme molecule per unit time. The textbook defines it <b>per minute</b>, and the general k cat is per second. It is obtained from V max and the molar mass of the enzyme.”',
 cn:'p058。报数之前先说清按分钟还是按秒。'},
{r:'中', q:'What is a ligand?',
 en:'“Any molecule that binds specifically and reversibly to a protein: a substrate, an inhibitor, an antigen, a hormone. The protein is the binder or receptor.”',
 cn:'通用。'},
{r:'中', q:'What are enthalpy and entropy, then?',
 en:'“Enthalpy H is the heat content — for reactions in solution practically the internal energy, the heat of the reaction. Entropy S is the disorder term. The second law says spontaneous processes raise the total entropy of system plus surroundings. Gibbs energy G equals H minus T S combines them, and calorimetry measures the heat directly, so the two can be separated.”',
 cn:'p017 有 H、S、G 三句；calorimetry 是通用。这是停止句之后被追一步的答案，说完就停。'},
{r:'高', q:'What is an equilibrium constant?',
    ez:'“For a reaction at equilibrium it is a ratio. It is the product concentrations over the reactant concentrations. Each one is raised to its stoichiometric coefficient. It is the ratio that stops changing. It stops when forward and reverse rates are equal. It is the same number whatever amounts you start from. It says where equilibrium sits. It does not say how fast it is reached. The textbook writes it as delta G equals minus R T ln K.”',
    ezcn:'<b>平衡常数 ＝ 平衡时，产物浓度除以反应物浓度，各自按化学计量数取幂。</b><b>它是正逆速率相等之后不再变的那个比值</b>，<b>而且无论你从多少量开始，它都是同一个数</b>。<b>它说的是平衡停在哪儿，不说多快到达。</b>书写成 <b>ΔG° ＝ −RT ln K</b>。',
 en:'“For a reaction at equilibrium: the <b>product concentrations over the reactant concentrations</b>, each raised to its stoichiometric coefficient. It is the ratio that stops changing once the forward and the reverse rate are equal. It is the same number whatever amounts you start from. It says where equilibrium sits, not how fast it is reached. The textbook writes it as delta G equals minus R T ln K.”',
 cn:'<b>「产物比反应物」这半句不能省</b>——任何两个浓度的比在平衡时都不变，让 K 成为「常数」的是产物/反应物带幂次、与起始量无关。书 p018 就是这么定义的（K 是对数的宗量）。<b>最后半句是关键</b>：它把平衡常数和速率彻底分开，正好预防了 Km 那个混淆（p017：Gibbs 能不给速率信息）。'},
{r:'高', q:'What is kinetics, then?',
    ez:'“Kinetics is about rates. It asks how fast a reaction goes. It also asks what the rate depends on. It is the complement of thermodynamics. Thermodynamics says whether a reaction can go. It also says how far. Kinetics says how fast it gets there. An enzyme changes only the second one.”',
    ezcn:'<b>动力学讲的是速率</b>：<b>反应跑多快，速率取决于什么</b>。<b>它是热力学的另一半</b>：<b>热力学说「能不能走、走多远」，动力学说「多快走到」</b>。<b>酶只改后面那一个。</b>',
 en:'“Kinetics is about <b>rates</b>: how fast a reaction goes and what the rate depends on. It is the complement of thermodynamics — thermodynamics says whether a reaction can go and how far, kinetics says how fast it gets there. <b>An enzyme changes only the second one.</b>”',
 cn:'<b>这是「动力学」这块地基的定义，32 张卡共用。</b>书用<b>反应级数</b>给它下操作定义：底物低时速率正比于 [S]（一级，<span class="pg">p056</span>），底物饱和时速率与 [S] 无关只正比于 [E]（零级，<span class="pg">p058</span>）。书还顺带给了实用推论：<b>测酶活性要在饱和底物浓度下做</b>。',
 good:'<b>停止句：</b>“Below that, rate constants come from collision frequency and activation energy — physical chemistry rather than biochemistry.”'},
{r:'中', q:'What is mass action?',
 en:'“The rule that each direction of a reaction runs at a rate proportional to the product of the concentrations of what reacts in it. Set the two directions equal and you get the equilibrium form: product concentrations over reactant concentrations is a constant. That is the expression I put [L] = K d into.”',
 cn:'「半数占据」那条推导全靠它。被追问就直接把 [L] = Kd 代进去演一遍。'},
{r:'高', q:'What is k off?',
    ez:'“It is the rate constant for an existing complex coming apart. It is first order. Its units are reciprocal seconds. Read it as a probability per unit time. It is like a radioactive decay constant in that sense. Each complex has a fixed chance per second of letting go. Nothing else in the solution changes that chance. Its reciprocal is the lifetime of the complex. That lifetime is called the residence time.”',
    ezcn:'<b>k<sub>off</sub> 是「已经形成的复合物散开」的速率常数</b>，<b>一级反应，单位是 s⁻¹</b>。<b>读法是「单位时间里的概率」</b>，<b>跟放射性衰变常数是同一个意思</b>：<b>每个复合物每秒有一个固定的概率松手，跟溶液里还有什么无关</b>。<b>它的倒数是复合物的寿命，叫驻留时间 residence time。</b>',
 en:'“k off is the rate constant for an existing complex coming apart. It is first order, with units of reciprocal seconds. Read it as a probability per unit time, in the same sense as a radioactive decay constant. Each complex has a fixed chance per second of letting go, whatever else is in the solution. Its reciprocal is the lifetime of the complex. That lifetime is called the residence time.”',
 cn:'<b>速背第 7 点。</b>「一级」＝ 这一步只要一个东西在场，所以速度只正比于复合物的量：<code>v<sub>off</sub> = k<sub>off</sub>[PL]</code>。⚠ <b>书上没有</b>，通用动力学。'},
{r:'高', q:'What is k on?',
    ez:'“It is the rate constant for binding. A free protein and a free ligand must find each other. It is second order. Its units are reciprocal molar reciprocal seconds. There is a concentration in those units for a reason. Two separate things have to meet. The off rate constant has no concentration in its units. Only one thing has to happen there. K d is the ratio of the two. It is k off over k on.”',
    ezcn:'<b>k<sub>on</sub> 是结合的速率常数</b>：<b>游离的蛋白和游离的配体要碰到一起</b>。<b>二级反应，单位是 M⁻¹s⁻¹</b>。<b>单位里有浓度是有原因的：两样东西必须相遇</b>；<b>k<sub>off</sub> 单位里没有浓度，因为那里只需要一件事发生</b>。<b>K<sub>d</sub> 就是两者的比值：k<sub>off</sub> / k<sub>on</sub>。</b>',
 en:'“k on is the rate constant for a free protein and a free ligand finding each other and binding. It is second order, with units of reciprocal molar reciprocal seconds. There is a concentration in those units because two separate things have to meet. The off-rate constant has no concentration in its units, because only one thing has to happen. K d is the ratio of the two, k off over k on.”',
 cn:'<b>速背第 8 点。</b>单位里有没有浓度，就是「要几个东西碰到一起」的直接后果。⚠ <b>书上没有</b>，通用动力学。'},
{r:'中', q:'What is residence time?',
 en:'“It is how long a complex lasts once it has formed. It is one over k off. A binder with an off-rate of one per hour has a residence time of about an hour. Two binders can share a K d and still have residence times that differ by orders of magnitude.”',
 cn:'<b>k<sub>off</sub> 唯一值得带上考场的直觉。</b>它也是「两个抗体 Kd 一样是不是同一个东西」那条的正面答案。⚠ <b>书上没有</b>，通用。'},
{r:'高', q:'What is ligand depletion?',
    ez:'“It is what happens when too much of the added ligand ends up bound. The free concentration is then no longer what you pipetted. Occupancy is defined by the free ligand. So the fitted K d comes out wrong. It happens when the binding sites are not well below K d. The cure is to lower the protein. Or to fit the depletion explicitly.”',
    ezcn:'<b>配体耗竭 ＝ 加进去的配体被结合掉太多，游离浓度已经不是你移液器里那个数了。</b><b>而占据率是按游离配体定义的，所以拟合出来的 K<sub>d</sub> 就错了</b>。<b>它发生在结合位点浓度没有远低于 K<sub>d</sub> 的时候</b>。<b>解法：把蛋白浓度降下来，或者在拟合里把耗竭显式算进去。</b>',
 en:'“It is what happens when enough of the added ligand ends up bound that the free concentration is no longer what you pipetted. Occupancy is defined by the free ligand, so the fitted K d comes out wrong. It happens when the binding sites are not well below K d. The cure is to lower the protein, or to fit the depletion explicitly.”',
 cn:'<b>这是「半数占据 ≠ 半数蛋白被用掉」那个陷阱的正式名字</b>，也是速背第 12 点那条推导的名字。有名字就说名字，比描述现象稳。⚠ <b>书上没有</b>，通用。'},
{r:'中', q:'What is the c value in isothermal titration calorimetry?',
 en:'“It is the protein concentration times the stoichiometry, divided by K d. It says whether the titration curve will bend enough to be fitted. Roughly one to one thousand is usable, and ten to one hundred is comfortable. Too small and the curve is nearly a straight line. Too large and it is a square corner, which reports stoichiometry rather than affinity.”',
 cn:'<b>速背第 13 点。</b>它就是「蛋白要远低于 Kd」写成比值。⚠ <b>书上没有 ITC</b>，通用生物物理。'},
{r:'中', q:'What is surface plasmon resonance?',
 en:'“It is a label-free method that watches binding in real time. One partner is immobilised on a sensor surface, and the other flows over it. The instrument reads how much mass is bound at the surface as that changes. Because you see the whole time course, you get k on and k off directly, and K d as their ratio.”',
 cn:'<b>说了 SPR 就会被追怎么拿到两个常数</b>，答案是速背第 14 点那条 <code>k<sub>obs</sub> = k<sub>on</sub>[L] + k<sub>off</sub></code>：对 [L] 作图，斜率 k<sub>on</sub>、截距 k<sub>off</sub>。⚠ <b>书上没有</b>，通用生物物理。'},
{r:'中', q:'What is occupancy?',
 en:'“The fraction of binding sites that are filled at a given free-ligand concentration. K d is the concentration at which that fraction is one half.”'}
],
 cn:'占据率 = 结合位点里被配体占着的比例，0 到 1。半数占据时游离配体浓度 = Kd——这是「Kd 是浓度」那句的读法。书 p056 对应的词是「饱和」（书上印的就是 <i>saturated</i>）：Km 是半饱和的底物浓度。'},

{g:'为什么类', gn:'给了结论没给理由的地方。', items:[
{r:'高', q:'Why does an enzyme not change the equilibrium?',
    ez:'“Because a catalyst lowers the barrier for both directions. It lowers it equally for both. So it changes how fast equilibrium is reached. It does not change where equilibrium lies. The textbook puts it this way. The catalyst joins the reactants transiently. The reaction then runs by a different mechanism. That mechanism has a lower activation energy.”',
    ezcn:'因为<b>催化剂把两个方向的能垒压低了同样多</b>。<b>所以它改变的是「多快到达平衡」，不是「平衡在哪儿」。</b>书的说法：<b>催化剂暂时跟反应物结合，反应于是改走一条活化能更低的机制。</b>',
 en:'“Because a catalyst lowers the activation barrier for both directions equally. It changes how fast equilibrium is reached, not where it lies. The textbook puts it as: the catalyst joins the reactants transiently so the reaction runs by a different mechanism with a lower activation energy.”',
 cn:'<b>这一条把 Kd 和酶两件事分清楚了</b>，也是「热力学 vs 动力学」最干净的一个例子。<span class="pg">p054</span>'},
{r:'高', q:'Why can’t organisms just heat things up to go faster?',
    ez:'“Because organisms are mostly thermolabile. The textbook says so directly. Heating would speed the reaction. But it would denature the enzyme at the same time. An enzyme is a protein. So catalysis is the biological route. Temperature is not.”',
    ezcn:'因为<b>生物体大多是不耐热的，书直接这么说</b>。<b>加热确实让反应变快，但同时会把酶变性掉</b>——<b>酶是蛋白质</b>。<b>所以生物走的是催化那条路，不是升温那条。</b>',
 en:'“Because they are mostly <b>thermolabile</b> — the textbook says so directly. Heating would speed the reaction and denature the enzyme, a protein, at the same time. That is why catalysis, not temperature, is the biological route.”',
 cn:'<b>书自己给的理由，一个词就够</b>：thermolabile，书上印的就是这个词（<span class="pg">p054</span>）。书还列了第三条路——用光激发，但那时反应走的是另一条反应坐标：“The textbook lists a third route, exciting the reactants with light. But then the reaction usually runs along a different reaction coordinate.”'},
{r:'中', q:'Why use Lineweaver-Burk instead of reading the curve?',
 en:'“Because measuring rates at high substrate concentration is imprecise and expensive in material, so in practice the equation is linearised. You plot one over v against one over substrate concentration. That gives a straight line with slope K m over V max and intercept one over V max. The textbook says exactly that.”',
 cn:'<span class="pg">p056</span>。<b>这是一道方法题</b>，而方法题是这位老师的口味。'},
{r:'高', q:'Why does k on carry a concentration in its units and k off not?',
    ez:'“Because binding needs two partners to meet. So its rate depends on two concentrations. Coming apart needs only the complex already there. So its rate depends on one concentration. The rate constant carries whatever units are left over. That is why k on is per molar per second. And that is why k off is simply per second.”',
    ezcn:'因为<b>结合需要两个伙伴相遇，所以速率取决于两个浓度</b>；<b>散开只需要已经存在的那个复合物，所以速率只取决于一个浓度</b>。<b>速率常数带的是剩下的那部分单位</b>——<b>所以 k<sub>on</sub> 是 M⁻¹s⁻¹，k<sub>off</sub> 就是 s⁻¹。</b>',
 en:'“Because binding needs two partners to meet, so its rate depends on two concentrations. Coming apart needs only the complex that is already there, so its rate depends on one concentration. The rate constant carries whatever units are left over. That is why k on is per molar per second and k off is simply per second.”',
 cn:'<b>这是分开这两个常数最干净的一刀</b>，比背单位可靠。顺下去就是 <code>s⁻¹ ÷ M⁻¹s⁻¹ = M</code>，正好接回「Kd 的单位是浓度」。'},
{r:'高', q:'Why do you keep the protein well below K d, and how do you choose the number?',
    ez:'“Because half occupancy is defined by the free ligand concentration. But the titration plots the total ligand added. Those two agree only when very little ligand is bound. In practice I start with a guess. I take a K d from the literature or from a pilot run. Then I set the protein at a tenth of that or lower. Then I titrate the ligand. I go from about a tenth of K d up to ten times K d. That span covers roughly a tenth to nine tenths of the sites. So the curve has both ends on it. Sometimes the signal is too weak at that protein concentration. Then the detection limit is the floor on the affinity I can report. In that case I report a bound rather than a number.”',
    ezcn:'因为<b>半数占据是按「游离配体浓度」定义的，而滴定曲线画的是「加进去的总配体」</b>——<b>两者只有在配体被结合掉极少时才一致</b>。<b>实操</b>：<b>先从文献或预实验猜一个 K<sub>d</sub></b> → <b>把蛋白设在它的十分之一或更低</b> → <b>配体从 0.1×K<sub>d</sub> 滴到 10×K<sub>d</sub></b>，<b>这个跨度覆盖大约 10% 到 90% 的位点，曲线两头都在图上</b>。<b>如果那个蛋白浓度下信号太弱，那么方法的检测限就是我能报的亲和力下限</b>——<b>这时候我报一个界，不报一个数。</b>',
 en:'“Because half-occupancy is defined by the free ligand concentration, while the titration plots the total ligand added. Those two agree only when very little of the ligand is bound. In practice I first guess a K d from the literature or from a pilot run. Then I set the protein at a tenth of that or lower. Then I titrate the ligand from about a tenth of K d up to ten times K d. That span covers roughly a tenth to nine tenths of the sites, so the curve has both ends on it. If the signal is too weak at that protein concentration, then the detection limit of the method is the floor on the affinity I can report. In that case I report a bound rather than a number.”',
 cn:'<b>这是他顺着你实验最可能问下来的那一句，推导在速背第 12 点。</b>ITC 的说法见第 13 点：<code>c = n[P]/K<sub>d</sub></code>，1–1000 可用、10–100 舒服。<b>「报一个界」这半句不要省</b>——报界是方法学素养，硬报一个数是可以被当场证伪的错误。⚠ <b>书上没有</b>，通用生物物理。'}
]},

{g:'陷阱', gn:'这题的陷阱密度是所有卡里最高的。', items:[
{r:'实测', q:'（陷阱）Km 当成亲和力',
    ez:'“K m is only an affinity in one case. Catalysis has to be slow. It has to be slow compared with the substrate falling back off.”',
    ezcn:'<b>只有一种情况下 K<sub>m</sub> 才算亲和力</b>：催化这一步<b>比底物掉下来慢得多</b>。否则 K<sub>m</sub> 里混了催化速率，不是纯粹的结合。',
 en:'“K m is only an affinity when catalysis is slow compared with the substrate falling back off.”',
 cn:'见识别表里那一条。<b>书自己前后矛盾，已记进 BOOK_ERRATA 第 5 条。</b>'},
{r:'高', q:'（陷阱）方向说反',
    ez:'“Small K d means tight binding. A large K d means weak binding.”',
    ezcn:'<b>K<sub>d</sub> 小 ＝ 结合紧；K<sub>d</sub> 大 ＝ 结合弱。</b>⚠ 这条说反是最常见的失分。',
 en:'“Small K d, tight binding.”',
 cn:'记法：Kd 是「拆开」的常数。'},
{r:'高', q:'（陷阱）半数占据 ≠ 半数蛋白被用掉',
    ez:'“Half occupancy is defined by the free ligand concentration. It is not defined by the amount you added.”',
    ezcn:'<b>半数占据是按「游离配体浓度」定义的，不是按「你加了多少」。</b>',
 en:'“Half-occupancy is defined by the free ligand concentration, not the amount you added.”',
 cn:'这是滴定浓度下限的由来，也是识别表里那道「为什么滴定会失效」。'},
{r:'中', q:'（陷阱）两个 Ki',
 en:'“K i is for the enzyme-inhibitor complex. K i prime is for the enzyme-substrate-inhibitor complex.”',
 cn:'书两个都给了（<span class="pg">p060</span>），而且说反竞争性抑制<b>在单底物反应里很罕见，在双底物反应里相当常见</b>。'},
{r:'高', q:'（陷阱）狂加蛋白和配体 —— 那测到的是化学计量，不是亲和力',
    ez:'“Suppose I load protein far above K d. Then the titration reports how much protein I put in. It reports the stoichiometry. It does not report the affinity.”',
    ezcn:'<b>如果蛋白浓度远高于 K<sub>d</sub>，滴定报告的是「我放了多少蛋白」</b>——<b>那是化学计量，不是亲和力。</b>',
 en:'“If I load protein far above K d, the titration reports how much protein I put in. It reports the stoichiometry rather than the affinity.”',
 cn:'⚠ <b>这一条就长在你自己的实验动作里</b>：加得多信号好看，而那恰好是把亲和力洗掉的做法。他问 “How much protein do you use?” 之后，下一句多半是 “Then what did you actually measure?”。<b>先自己把这句说出来，比被他指出来好——自己说是懂行，被指出来是错。</b>正面做法见速背第 12、13 点。'}
]},

{g:'怎么发现的', gn:'⚠ 这一格书里几乎没有，说的时候注意出处。', items:[
{r:'中', q:'Where does the Michaelis-Menten treatment come from?',
 en:'“The textbook uses the <b>steady-state</b> treatment: after mixing, the concentration of the enzyme-substrate complex first rises and then stops changing. This happens because its rate of formation and its rate of breakdown become equal. The whole equation comes out of setting those two equal.”',
 cn:'<b>这是书能支撑的说法，不带人名，最安全。</b>',
 warn:'Michaelis 与 Menten 1913、Briggs 与 Haldane 1925 这些<b>书里没有</b>（p009 的年表是蛋白质的）。核过再主动说人名。'}
]},

{g:'桥', gn:'这张卡本身就是别的卡的终点，所以桥往外接。', items:[
{r:'高', q:'→ 酶动力学与抑制（#19 #20 #21）',
    ez:'“K m, V max, the Lineweaver Burk plot and the inhibition constants are all related. They sit in the same section of the book.”',
    ezcn:'<b>K<sub>m</sub>、V<sub>max</sub>、Lineweaver-Burk 作图和各种抑制常数，在书里是同一节的内容</b>，接卡 <b>19</b>。',
 en:'“Km, Vmax, Lineweaver-Burk and the inhibition constants are all in the same section of the book.”',
 cn:'<b>p054–p062 这九页装着四道题。</b>背这张卡等于顺手背了 #20 #21，而 #19 只差抑制类型那一张表。'},
{r:'高', q:'→ 你的工作',
    ez:'“In my own work this is a yeast display titration. I read it by flow cytometry. Two things decide whether the number is real. One is whether equilibrium was reached. The other is the concentration floor set by detection.”',
    ezcn:'<b>在我自己的工作里这就是酵母展示的滴定</b>，<b>用流式读出</b>。<b>决定这个数真不真的有两件事：有没有到平衡，以及检测灵敏度定下的浓度下限。</b>',
 en:'“Yeast display, flow-cytometry titration, equilibrium time, and the concentration floor.”',
 cn:'段 4 已经伸出去了。<b>别的卡的「留口子」也都往这儿落</b>，所以这张必须刀枪不入。'}
]}
]
});
