/* 卡 02 · What is the dissociation constant (Kd) and how is it defined?
   题库 #4（S1 Biochemistry 4 ＋ S2 Biochemistry 8）· 导师写过两遍
   出处 Biochemie OCR p054–p062。书里没有「disociační konstanta」词条，
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
  big:'Kd 是<b>解离反应的平衡常数</b>：复合物拆成两个游离组分',
  en:'“A dissociation constant is an <b>equilibrium constant</b>. It describes a complex breaking apart into two free partners. For example, a protein and its ligand. The complex breaks apart. It also forms again. At equilibrium these two rates are the same. Then the concentrations stop changing. K d is the ratio of those concentrations.”',
  note:'<b>「平衡常数」这四个字把整题的性质定死了</b>：平衡常数属于热力学，不属于动力学。后面 Km 那个陷阱就是靠这句话挡住的。'},
 {n:'02', t:'式子',
  big:'游离的两个，除以复合物：<b>Kd = [P][L] / [PL]</b>',
  en:'“The concentration of free protein times the concentration of free ligand, divided by the concentration of the complex. The textbook writes exactly this form for the inhibition constant: <b>K i equals free enzyme times free inhibitor over the enzyme–inhibitor complex</b>.”',
  note:'<b>用书自己的写法开口。</b>全书唯一明确定义成解离常数的就是 p060 的 Ki = [E][I]/[EI]——老师能对上他书里的东西。<span class="pg">p060</span>'},
 {n:'03', t:'量纲',
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
  note:'<b>注意措辞</b>：kon 和 koff 各自是动力学量，<b>它们的比值才是热力学量</b>：“k on and k off are each kinetic quantities. Their ratio is an equilibrium constant, so K d itself is thermodynamic.” 两个 Kd 相同的结合，kon 和 koff 可以差几个数量级，生物学后果完全不同。'},

 {g:'再深一层', gn:'时间不够可以砍这一格，但它是 ④ 的落点。'},
 {n:'07', t:'它其实是自由能',
  big:'ΔG°(结合) = RT ln Kd —— <b>一个数就是一个自由能</b>；书 p018 写 ΔG° = −RT ln K，差的是方向',
  en:'“Because it is an equilibrium constant, it is a free energy in disguise: the standard free energy of <b>binding</b> equals R T times the natural log of K d. The textbook’s form is delta G equals <b>minus</b> R T ln K — the sign flips because K d describes the reverse direction, coming apart. Every <b>tenfold</b> tightening is about <b>5.7 kilojoules per mole</b> at 25 degrees — 298 kelvin.”',
  note:'✔ 已算：RT ln10 在 298.15 K = <b>5.71 kJ/mol</b>。<b>书里没有这个数</b>，它来自热力学定义。被追问出处就说 “that is just R T ln ten”。<br><b>方向必须说。</b>书 p018 印的是 −ΔG° = RT ln K，即 ΔG° = −RT ln K。Kd 是<b>解离</b>的 K，所以 ΔG°(解离) = −RT ln Kd，ΔG°(结合) = +RT ln Kd。只说 “delta G equals RT ln Kd” 不说哪个方向，他拿 p018 一对就是「你符号错了」。<br>「standard」被问：“Standard means all components at unit activity. The biochemical standard state, marked with a prime, fixes hydrogen-ion activity at pH 7 instead.”（p018）'},

 {g:'收尾', gn:'一句停住，一句伸出去。这题有两条停止线，第二条更适合你。'},
 {n:'08', t:'落点一 · 热力学',
  big:'再往下 Kd 只是<b>浓度尺度上的一个自由能差</b>',
  en:'“Below that, K d is just a free-energy difference on a concentration scale, and how that free energy splits into enthalpy and entropy is <b>calorimetry rather than biochemistry</b>.”',
  note:'标准停止句，落在热力学这块地基上。'},
 {n:'09', t:'落点二 · 测量限制',
  big:'一个 Kd <b>只和它背后那个平衡一样可靠</b>',
  en:'“There is also a practical floor: a K d is no better than the equilibrium behind it. <b>Below roughly the concentration of your own binding sites</b>, a titration stops reporting affinity and starts reporting how much protein you put in.”',
  note:'<b>这条比上一条更适合你</b>，因为说完可以顺势转进主场。它落在「测量方法的限制」那块地基上。'},
 {n:'10', t:'留口子',
  big:'这就是<b>你自己在测的那个数</b>',
  en:'“And this is the number I actually measure. I work with <b>yeast display</b>: you titrate labelled antigen against cells and read the midpoint by <b>flow cytometry</b>. What decides whether the number means anything is whether the titration really reached equilibrium. At low concentrations that can take hours. The approach to equilibrium runs at k on times the ligand concentration plus k off, and at low ligand that is essentially k off alone. For a nanomolar binder that is of the order of one per hour. And if you read too early you report a K d that is too weak.”',
  note:'<b>三个口子全在你的地盘</b>：yeast display、flow cytometry、平衡时间。他追哪一个都答得住。'}
],
end:'<b>这十点里，前六点是要背出口的，7–10 是被追问和收尾用的。</b>整题的胜负手在第 1 点——说出「平衡常数」这四个字，Km 那个陷阱就自动挡掉了。',

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
 stop:{lbl:'停 · 落在热力学（另有一条落在测量限制，见速背第 9 点）',
  say:'“Below that, K d is just a free-energy difference on a concentration scale, and how that free energy splits into enthalpy and entropy is calorimetry rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is Kd?',
 mean:'<b>他真正会说出口的那句，就这么短。</b>所以答案要自带结构：是什么类的常数 → 式子 → 量纲 → 数值的意思。四步一次给完，别等他一层层问。',
 say:'“It is the equilibrium constant of the dissociation reaction — free protein times free ligand over the complex. Because it is a ratio of concentrations over a concentration, it has units of concentration, and numerically it is the free-ligand concentration at which half the binding sites are occupied.”'},

{q:'What does affinity mean?',
 mean:'他在问同一件事，只是用了那个更含糊的词。<b>把含糊的词换成能测的量，就是答案。</b>',
 say:'“Affinity is the <b>strength of binding</b>. It is how strongly one partner holds the other, or equivalently how far the equilibrium lies toward the complex. The textbook’s phrase is ‘the strength of the interaction’. K d is the number that measures it, and it runs the other way: a <b>lower</b> K d means higher affinity. That inversion is worth saying out loud, because the word and the number run in opposite directions.”'},

{q:'Which binds more tightly — a Kd of one nanomolar or one micromolar?',
 mean:'<b>纯粹测你会不会说反。</b>一句话答完，别解释太多。',
 say:'“One nanomolar. K d is the constant for coming apart, so the smaller number is the tighter complex — a thousand times tighter here.”'},

{q:'Is Km the same as Kd?',
 mean:'<b>这题的核心陷阱，而且书自己前后打架。</b>先给书的读法，再给成立条件，最后指出书自己在别处给了干净的定义。',
 say:'“Not in general. K m is k minus one plus k two, over k one. That is <b>substrate falling off, plus the catalytic step, over binding</b>. A true dissociation constant is k minus one over k one. The two coincide only when the catalytic step is negligible next to the substrate falling off. The textbook does read K m as an affinity, and by its own description of the mechanism that is fair. It says binding of substrate to enzyme is <b>fast and reversible</b> and the catalytic step slower. So the substrate falls off far more often than it is turned over. What is always true is the book’s other sentence: K m is the substrate concentration at half-maximal rate in the <b>steady state</b>, whereas K d is the free-ligand concentration at half occupancy at <b>equilibrium</b>. The clean dissociation constant in this book is K i, free enzyme times free inhibitor over the complex.”',
 tail:'书 <span class="pg">p055</span> 把 Km = (k₋₁+k₂)/k₁ 的式子<b>印出来了</b>（已回原图确认），<span class="pg">p056</span> 却说它「vyjadřuje afinitu」。<b>你是在引用这本书反驳这本书，那是最安全的位置</b>——不是「别的教材说」，是「你这本书第 55 页印的式子说」。<br><b>p054 帮你一把</b>：书自己写第一步「快而可逆」、第二步「更慢、不可逆」（<i>Tento krok je rychlý a reverzibilní … Tato reakce je pomalejší</i>），那正是 k₂ 可忽略的条件——所以「书为什么敢把 Km 叫亲和力」有书内的解释，比单纯「书打架」稳。<b>⚠ 别顺嘴报 kcat 的数：书 p058 的 turnover number 按「每分钟」定义</b>，通用是每秒。'},

{q:'How would you measure it?',
 mean:'<b>你的主场。</b>方法 ＋ 那个决定数字是否有意义的条件。',
 say:'“Titrate one partner against a fixed amount of the other and read the midpoint of the binding curve — the free concentration at half the maximal signal. I use yeast display and flow cytometry, so each cell reports its own binding. The thing that decides whether the number is real is whether the titration reached equilibrium. At low concentrations that takes hours, and reading early makes the K d look weaker than it is.”'},

{q:'Why does a titration stop working if you go low enough?', odd:1,
 mean:'问的是<b>浓度下限</b>，也就是「半数占据 ≠ 半数蛋白被用掉」那条陷阱。',
 say:'“Because once the K d you are measuring is at or below the concentration of binding sites in the tube, the free ligand is no longer what you pipetted. Most of it is bound. Half-occupancy is defined by the <b>free</b> concentration, so the midpoint drifts to roughly <b>K d plus half your site concentration</b> and stops reporting affinity. So you keep the sites well below K d, or fit the depletion explicitly.”'},

{q:'Why do some drugs work at much lower doses than others?', odd:1,
 mean:'<b>听起来是药理题，其实就是 Kd。</b>',
 say:'“Largely because of the dissociation constant of the drug for its target. A drug with a nanomolar K d occupies half its target sites at a nanomolar free concentration. One with a micromolar K d needs a thousand times more. It is the same number, read as a dose.”',
 tail:'⚠ 真实药效还牵涉吸收、代谢、靶点丰度：“Largely — dose also depends on absorption, metabolism and how much target there is, but those are pharmacology rather than biochemistry.”<b>说 "largely" 不要说 "because"</b>，否则他会顺着药代动力学问下去，那不是生化。'},

{q:'Two antibodies have the same Kd. Are they the same?', odd:1,
 mean:'问的是<b>热力学量和动力学量的区别</b>——速记第 6 点。',
 say:'“Not necessarily. K d is the ratio of the off-rate to the on-rate, so two binders can share a K d and still differ by orders of magnitude in both rates. One may take hours to come off and hours to go on. The other takes seconds and seconds. Biologically those behave very differently.”',
 tail:'<b>这一条很能显出你真的用过这个数</b>，而不是背过它的定义。'},

{q:'What is the significance of the Michaelis-Menten equation?',
 mean:'题库 #21。<b>它整个落在这张卡的页范围里</b>，所以顺手就答了。',
 say:'“Its significance is that one equation with two constants describes the whole dependence of an enzyme’s <b>initial rate</b> on substrate concentration. The initial rate is the rate measured before product accumulates. The equation also gives both constants a meaning. The rate v equals V max times substrate concentration, over K m plus substrate concentration. That curve is a hyperbola. K m is the substrate concentration at half-maximal rate. In the derivation it is k minus one plus k two, over k one, the rate constants left in the denominator. V max is the rate when every enzyme molecule is in the complex. The enzyme is then <b>saturated</b>. It covers both limits: first order at low substrate, zero order at saturation. At saturation the rate is proportional to enzyme. That is why activity is assayed at saturating substrate, and why inhibitors are classified by what they do to K m and V max. It comes from the steady-state assumption: the enzyme-substrate complex builds up and then stays constant, because it forms and breaks down at the same rate.”',
 tail:'书的两步机制在 <span class="pg">p054</span>：E + A ⇌ EA <b>快且可逆</b>，EA → E + X <b>慢且不可逆</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br> <b>式子</b>：<code>v = V<sub>max</sub> · [S] / (K<sub>m</sub> + [S])</code><br> v 是初速度 · [S] 是底物浓度 · V<sub>max</sub> 是底物多到把酶占满时的速度 · K<sub>m</sub> 是半速时的底物浓度。<br><br> <b>四步推导</b>（他问「这式子哪来的」就照这个说）：<br> ① 机制：<code>E + S ⇌ ES → E + P</code>。三个速率常数：<b>k₁</b> 结合、<b>k₋₁</b> 掉下来、<b>k₂</b> 出产物。<br> ② <b>稳态假设</b>：ES 生成得多快就消失得多快 → <code>k₁[E][S] = (k₋₁ + k₂)[ES]</code><br> ③ 酶总量守恒：<code>[E] = [E]ₜ − [ES]</code>，代进去整理 → <code>[ES] = [E]ₜ[S] / ( (k₋₁+k₂)/k₁ + [S] )</code>。<b>分母里那个常数组合，就是 K<sub>m</sub>。</b><br> ④ 速度只由 ES 决定：<code>v = k₂[ES]</code>，而酶全在复合物里时 <code>V<sub>max</sub> = k₂[E]ₜ</code> → <code>v = V<sub>max</sub>[S] / (K<sub>m</sub> + [S])</code><br><br> <b>=== 一句话理解 ===</b><br> 两边同除 V<sub>max</sub>：<code>v / V<sub>max</sub> = [S] / (K<sub>m</sub> + [S])</code>。 <b>右边就是「有多大比例的酶身上挂着底物」。</b><br> 所以这条方程从头到尾只说一件事：<b>速度 ＝ 最高速度 × 被占住的酶的比例。</b><br><br> <b>而右边那个式子，跟这张卡开头的占据率曲线一模一样</b>——把 K<sub>m</sub> 换成 K<sub>d</sub>、[S] 换成游离配体，就是「半数占据」那条。 <b>Michaelis-Menten 曲线本质上是一条结合饱和曲线，只是纵轴从「占了多少」换成了「跑多快」。</b> K<sub>m</sub> 之于底物，就像 K<sub>d</sub> 之于配体：<b>都是「一半被占住」时的浓度</b>。<br><br> <b>为什么是双曲线不是直线</b>：酶的数量是固定的，一个酶一次只抓一个底物。 底物少的时候，加一倍底物就多一倍碰撞，速度跟着翻倍（一级）； 底物多到没有空酶了，再加也没用，速度顶在 V<sub>max</sub>（零级）。曲线就是这两段之间的过渡。<br><br> ⚠ <b>K<sub>m</sub> 不是 K<sub>d</sub></b>：K<sub>m</sub> = (k₋₁+k₂)/k₁ 里多了一个 k₂。 只有 k₂ ≪ k₋₁（底物掉下来比被转化快得多）时两者才相等。这就是同卡那条陷阱。'},

{q:'What is inhibition constant Ki?',
 mean:'<b>书里唯一明确叫「解离常数」的东西。</b>而且有两个 Ki，别混。',
 say:'“The textbook defines it as the dissociation constant of the enzyme-inhibitor complex: free enzyme times free inhibitor over E I. For uncompetitive inhibition there is a second one, K i prime, for the enzyme-substrate-inhibitor complex.”',
 tail:'竞争性抑制的经典例子书给了：<b>malonate 抑制 succinate dehydrogenase</b>——像底物到能结合，但不能被脱氢。图上的表现是 <b>Vmax 不变、Km 升高</b>。英文：“The textbook’s classic competitive example is malonate inhibiting succinate dehydrogenase. It is similar enough to bind, but it cannot be dehydrogenated. On the plot V max is unchanged and K m rises.”<span class="pg">p060</span>'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认你知道这些词。而这题的每个词都很容易被追。', items:[
{r:'实测', q:'What is the Michaelis constant?',
 en:'“K m is the <b>substrate concentration at which the initial rate is half of V max</b>. It comes out of the steady-state derivation as k minus one plus k two, over k one. That is the ratio of rate constants in the denominator of the Michaelis-Menten equation. It has units of concentration and characterises one enzyme-substrate pair. The textbook reads it as the affinity of enzyme for substrate, and it is a true dissociation constant only when the catalytic step is negligible.”',
 cn:'p055 印了式子，p056 给了「半饱和的底物浓度」和「有浓度的量纲」。正面定义放前面，Km 对 Kd 的陷阱在同一个答案题那条。'},
{r:'高', q:'What is a steady state, and how is it different from equilibrium?',
 en:'“A steady state is when a concentration stops changing because it is <b>formed and removed at the same rate</b>, while material still flows through. Here it is the enzyme-substrate complex, formed and broken down to product at the same rate. Equilibrium is the special case where every step is itself balanced and nothing flows. The textbook says living matter is mostly in a stationary state that only looks like equilibrium.”',
 cn:'p055 稳态假设的原话；p018 「生命物质多处于看起来像平衡的稳态，平衡是它的特例」。Km 是稳态量、Kd 是平衡量，这条是那句话的地基。'},
{r:'高', q:'What is activation energy?',
 en:'“The energy barrier the reactant molecules must overcome to be converted into product. The textbook says that for A to become X, the molecules of A must be supplied with the activation energy. Heat can supply it. A catalyst lowers it by taking the reaction through a different mechanism.”',
 cn:'p054，Obr. 3.1。'},
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
 en:'“For a reaction at equilibrium: the <b>product concentrations over the reactant concentrations</b>, each raised to its stoichiometric coefficient. It is the ratio that stops changing once the forward and the reverse rate are equal. It is the same number whatever amounts you start from. It says where equilibrium sits, not how fast it is reached. The textbook writes it as delta G equals minus R T ln K.”',
 cn:'<b>「产物比反应物」这半句不能省</b>——任何两个浓度的比在平衡时都不变，让 K 成为「常数」的是产物/反应物带幂次、与起始量无关。书 p018 就是这么定义的（K 是对数的宗量）。<b>最后半句是关键</b>：它把平衡常数和速率彻底分开，正好预防了 Km 那个混淆（p017：Gibbs 能不给速率信息）。'},
{r:'高', q:'What is kinetics, then?',
 en:'“Kinetics is about <b>rates</b>: how fast a reaction goes and what the rate depends on. It is the complement of thermodynamics — thermodynamics says whether a reaction can go and how far, kinetics says how fast it gets there. <b>An enzyme changes only the second one.</b>”',
 cn:'<b>这是「动力学」这块地基的定义，32 张卡共用。</b>书用<b>反应级数</b>给它下操作定义：底物低时速率正比于 [S]（一级，<span class="pg">p056</span>），底物饱和时速率与 [S] 无关只正比于 [E]（零级，<span class="pg">p058</span>）。书还顺带给了实用推论：<b>测酶活性要在饱和底物浓度下做</b>。',
 good:'<b>停止句：</b>“Below that, rate constants come from collision frequency and activation energy — physical chemistry rather than biochemistry.”'},
{r:'中', q:'What is mass action?',
 en:'“The rule that each direction of a reaction runs at a rate proportional to the product of the concentrations of what reacts in it. Set the two directions equal and you get the equilibrium form: product concentrations over reactant concentrations is a constant. That is the expression I put [L] = K d into.”',
 cn:'「半数占据」那条推导全靠它。被追问就直接把 [L] = Kd 代进去演一遍。'},
{r:'中', q:'What is occupancy?',
 en:'“The fraction of binding sites that are filled at a given free-ligand concentration. K d is the concentration at which that fraction is one half.”'}
],
 cn:'占据率 = 结合位点里被配体占着的比例，0 到 1。半数占据时游离配体浓度 = Kd——这是「Kd 是浓度」那句的读法。书 p056 对应的词是「饱和」（<i>nasycen</i>）：Km 是半饱和的底物浓度。'},

{g:'为什么类', gn:'给了结论没给理由的地方。', items:[
{r:'高', q:'Why does an enzyme not change the equilibrium?',
 en:'“Because a catalyst lowers the activation barrier for both directions equally. It changes how fast equilibrium is reached, not where it lies. The textbook puts it as: the catalyst joins the reactants transiently so the reaction runs by a different mechanism with a lower activation energy.”',
 cn:'<b>这一条把 Kd 和酶两件事分清楚了</b>，也是「热力学 vs 动力学」最干净的一个例子。<span class="pg">p054</span>'},
{r:'高', q:'Why can’t organisms just heat things up to go faster?',
 en:'“Because they are mostly <b>thermolabile</b> — the textbook says so directly. Heating would speed the reaction and denature the enzyme, a protein, at the same time. That is why catalysis, not temperature, is the biological route.”',
 cn:'<b>书自己给的理由，一个词就够</b>：thermolabilní（<span class="pg">p054</span>）。书还列了第三条路——用光激发，但那时反应走的是另一条反应坐标：“The textbook lists a third route, exciting the reactants with light. But then the reaction usually runs along a different reaction coordinate.”'},
{r:'中', q:'Why use Lineweaver-Burk instead of reading the curve?',
 en:'“Because measuring rates at high substrate concentration is imprecise and expensive in material, so in practice the equation is linearised. You plot one over v against one over substrate concentration. That gives a straight line with slope K m over V max and intercept one over V max. The textbook says exactly that.”',
 cn:'<span class="pg">p056</span>。<b>这是一道方法题</b>，而方法题是这位老师的口味。'}
]},

{g:'陷阱', gn:'这题的陷阱密度是所有卡里最高的。', items:[
{r:'实测', q:'（陷阱）Km 当成亲和力',
 en:'“K m is only an affinity when catalysis is slow compared with the substrate falling back off.”',
 cn:'见识别表里那一条。<b>书自己前后矛盾，已记进 BOOK_ERRATA 第 5 条。</b>'},
{r:'高', q:'（陷阱）方向说反',
 en:'“Small K d, tight binding.”',
 cn:'记法：Kd 是「拆开」的常数。'},
{r:'高', q:'（陷阱）半数占据 ≠ 半数蛋白被用掉',
 en:'“Half-occupancy is defined by the free ligand concentration, not the amount you added.”',
 cn:'这是滴定浓度下限的由来，也是识别表里那道「为什么滴定会失效」。'},
{r:'中', q:'（陷阱）两个 Ki',
 en:'“K i is for the enzyme-inhibitor complex. K i prime is for the enzyme-substrate-inhibitor complex.”',
 cn:'书两个都给了（<span class="pg">p060</span>），而且说反竞争性抑制<b>在单底物反应里很罕见，在双底物反应里相当常见</b>。'}
]},

{g:'怎么发现的', gn:'⚠ 这一格书里几乎没有，说的时候注意出处。', items:[
{r:'中', q:'Where does the Michaelis-Menten treatment come from?',
 en:'“The textbook uses the <b>steady-state</b> treatment: after mixing, the concentration of the enzyme-substrate complex first rises and then stops changing. This happens because its rate of formation and its rate of breakdown become equal. The whole equation comes out of setting those two equal.”',
 cn:'<b>这是书能支撑的说法，不带人名，最安全。</b>',
 warn:'Michaelis 与 Menten 1913、Briggs 与 Haldane 1925 这些<b>书里没有</b>（p009 的年表是蛋白质的）。核过再主动说人名。'}
]},

{g:'桥', gn:'这张卡本身就是别的卡的终点，所以桥往外接。', items:[
{r:'高', q:'→ 酶动力学与抑制（#19 #20 #21）',
 en:'“Km, Vmax, Lineweaver-Burk and the inhibition constants are all in the same section of the book.”',
 cn:'<b>p054–p062 这九页装着四道题。</b>背这张卡等于顺手背了 #20 #21，而 #19 只差抑制类型那一张表。'},
{r:'高', q:'→ 你的工作',
 en:'“Yeast display, flow-cytometry titration, equilibrium time, and the concentration floor.”',
 cn:'段 4 已经伸出去了。<b>别的卡的「留口子」也都往这儿落</b>，所以这张必须刀枪不入。'}
]}
]
});
