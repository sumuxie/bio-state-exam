/* 卡 25 · Describe the electron transport chain and its role in cellular respiration.
   题库 #25（S3 Biochemistry 13）· 并入 #26 What is oxidative phosphorylation?（S3 Biochemistry 14）
   —— 两道题在书里是同一节：§6.2.4，节标题译过来是「Respiratory chain and aerobic phosphorylation」。

   出处：p141–p146（§6.2.4、figure 6.6–6.11）· p134–p136（table 6.2、ΔG°′ = −nFΔE°′、30 kJ 量子、2 vs 38）·
   p139–p140（38 的拆分、3 ATP/NADH）· p045–p046（FMN/FAD、辅酶 Q、血红素、FeS）· p197（只有内膜产 ATP）·
   p206–p208（光合是镜像）· p219（NADPH 不进呼吸链）· p220（循环是最大供应者）· p222（限速的是 ADP）。

   回 300 dpi 原图核过四处：table 6.2 的 −0,32 / −0,20 / 0,00 / +0,10 / +0,26 / +0,82（p135）；
   p144 印的是「Complex IV」不是 V（OCR 读错，书没错，不进勘误）；figure 6.11 的亚基 F₀ F₁ α β γ δ ε a b₂（p145）；
   p146 的 ADP + Pi → ATP + H₂O（ΔG°′ = +30,5）、6 个质子 ≈ 3 ATP / 4 个 ≈ 2 ATP、
   以及整式 NADH + H⁺ + ½ O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O。

   全书 grep 0 命中（每个词都按书里的原词搜过，这里列的是英文），卡上全部标 general：chemiosmot · Mitchell · uncoupler/uncoupling · rotenone · antimycin ·
   cyanide · oligomycin · dinitrophenol · Crabtree · 穿梭 · 2.5/1.5 · 「复合物 IV 泵质子」（书说它不泵）。

   她没学过这一章，所以这张卡是教，不是提醒。接卡 24（循环把还原力交到这里）和卡 gly（38 的另一半）。 */

window.CARDS.push({
id:'25', n:25, merged:[26], w:1,
q:'Describe the electron transport chain and its role in cellular respiration. What is oxidative phosphorylation?',
qcn:'描述电子传递链及其在细胞呼吸中的作用 ＋ 什么是氧化磷酸化',
sub:'主干说完约 90 秒 · 两道题一段书（§6.2.4）· 卡 24 交出来的还原力在这里兑成 ATP',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'两道题是一台机器的两半：链是<b>泵</b>，合酶是<b>涡轮</b>，中间只有一个质子梯度。开口三句要把题面上每个词交代掉——electron、transport、chain、role、cellular respiration、oxidative、phosphorylation。'},
 {n:'01', t:'定义 · 呼吸链',
  ez:'“The respiratory chain is also called the electron transport chain. It is a series of electron carriers. They are built into the inner mitochondrial membrane. That membrane encloses the matrix. There are four complexes. Two mobile carriers sit between them. The chain passes electrons down to oxygen. Those electrons come from N A D H and F A D H two. And it uses the energy to pump protons. It pumps them out of the matrix.”',
  ezcn:'<b>呼吸链（也叫电子传递链）＝ 装在线粒体内膜上的一串电子载体</b>（<b>内膜就是包着基质的那层膜</b>）：<b>四个复合体，中间夹着两个可移动的载体</b>。<b>它把 NADH 和 FADH₂ 的电子一路传到氧，并用这一路放出的能量把质子从基质里泵出去。</b>',
  big:'内膜上的一串<b>电子载体</b>：<b>四个复合物 ＋ 两个流动载体</b>，把 NADH 和 FADH₂ 的电子一站站送到<b>氧</b>，并用放出的能量把<b>质子泵出基质</b>',
  en:'“The <b>respiratory chain</b> is also called the electron transport chain. It is a series of electron carriers built into the <b>inner mitochondrial membrane</b>, the membrane that encloses the matrix: four complexes with two mobile carriers between them. It passes the electrons of NADH and FADH₂ down to oxygen and uses the energy to pump protons out of the matrix.”',
  note:'<b>先说它是什么，不要一上来就背名字。</b>p141：五个多酶脂蛋白复合物能从内膜分离出来，是内膜的<b>整合成分</b>；电子从<b>低电位</b>向<b>电位升高</b>的方向传。还原辅酶的四个来源书自己列了：循环的四步脱氢、丙酮酸氧化脱羧、β-氧化、有氧糖酵解的 G3P 脱氢。<span class="pg">p141</span>'},
 {n:'02', t:'定义 · 氧化磷酸化',
  ez:'“Oxidative phosphorylation is the synthesis of A T P. It is made from A D P and inorganic phosphate. The proton gradient drives it. The protons flow back into the matrix. They flow through A T P synthase. It is called oxidative for one reason. The energy comes from oxidising N A D H and F A D H two. It is called phosphorylation for another. That energy is spent putting a phosphate onto A D P.”',
  ezcn:'<b>氧化磷酸化 ＝ 由 ADP 和无机磷酸合成 ATP</b>，<b>驱动力是质子梯度——质子经 ATP 合酶流回基质</b>。<b>叫「氧化」是因为能量来自氧化 NADH 和 FADH₂；叫「磷酸化」是因为那份能量被花在「给 ADP 接一个磷酸」上。</b>',
  big:'用那个<b>质子梯度</b>把 <b>ADP ＋ Pᵢ</b> 合成 ATP——质子经 <b>ATP 合酶</b>顺梯度流回基质。书叫它<b>需氧磷酸化</b>',
  en:'“<b>Oxidative phosphorylation</b> is the synthesis of ATP from ADP and inorganic phosphate, driven by that proton gradient as the protons flow back into the matrix through ATP synthase. <b>Oxidative</b> because the energy comes from oxidising NADH and FADH₂. <b>Phosphorylation</b> because it is spent putting a phosphate onto ADP.”',
  note:'书的叫法是 <i>aerobic phosphorylation</i>；p145 的小标题译过来就是「Mechanism of aerobic phosphorylation」。<b>这个反应本身耗能</b>：ADP + Pᵢ → ATP + H₂O，ΔG°′ = <b>+30,5 kJ/mol</b>——正号，所以必须被推着走。跟横向卡「化学键」上 ATP 水解 −30,5 是同一个数的两面。<span class="pg">p145 p146</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ADP + Pᵢ → ATP + H₂O</code>，<code>ΔG°′ = +30,5 kJ/mol</code>（书 p146）<br>ΔG°′ 是<b>标准条件</b>下的 Gibbs 能变：各物质 1 mol/L、<b>pH 7</b>、25 °C。右上角那一撇（′）就是「按 pH 7 报的」。<b>正号 ＝ 这个方向不会自己走。</b><br><br><b>三步看懂这个数</b>：<br>① <b>同一个数的两面</b>：合成要往里塞 <code>+30,5</code>，水解就放出 <code>−30,5</code>。所以「ATP 是高能化合物」说的<b>不是</b>它的键特别结实，恰恰相反——是它<b>拆开时放得多</b>。<br>② <b>它必须被推着走</b>：推力来自质子顺梯度回流。合酶把「质子下坡」和「ATP 上坡」<b>机械地</b>串在同一根轴上，一边下坡带着另一边上坡。<br>③ <b>细胞里的实际值更负</b>（约 −50 kJ/mol），因为真实的 ADP 和 Pᵢ 浓度远低于标准态的 1 mol/L。这是<b>通用</b>知识，书里没有，被追问再给。<br><br><br><b>=== 一句话理解 ===</b><br>30 kJ 这个数在这本书里出现了两次，说的是同一件事：<b>p135 说机体只能按约 30 kJ 一份地收能量，p146 说一个 ATP 正好值 30,5 kJ。</b><br>换句话说，<b>ATP 不是「能量」，它是「面额」</b>。整个代谢被切成那么多小步，就是因为收款只能按这个面额收——<b>面额太大收不进来（一次烧完只收得下一份），太小又推不动反应。</b>'},
 {n:'03', t:'两者的关系',
  ez:'“The two halves are coupled only through the gradient. The chain is the pump. A T P synthase is the turbine. And no chemical intermediate passes between them. That idea is called chemiosmosis. The textbook says something close to it. Building the enzymes into a membrane gives the reaction a direction. It gives it a direction in space.”',
  ezcn:'<b>这两半只通过那个梯度偶联</b>：<b>呼吸链是泵，ATP 合酶是涡轮，两者之间没有任何化学中间物传递</b>。<b>这个思想叫化学渗透</b>。<b>书说的是同一件事的另一种说法：把酶系统装进膜里，就给了这个反应一个空间上的方向。</b>',
  big:'链是<b>泵</b>，合酶是<b>涡轮</b>；两者之间<b>没有任何化学中间体</b>，唯一的连接是膜两侧的<b>质子差</b>',
  en:'“The two halves are coupled only through the gradient: the chain is the <b>pump</b>, ATP synthase the <b>turbine</b>, and no chemical intermediate passes between them. That is chemiosmosis — and the textbook’s own words are that building the enzymes into a membrane gives the reaction a <b>direction in space</b>.”',
  warn:'「chemiosmotic」和 Mitchell 这个名字<b>书里都没有</b>（grep 0 命中），<b>「中间没有化学中间体」这半句也是通用推论</b>——书只说了「化学能与渗透功的互换<b>是两套能量传输系统之间的连接环节</b>」。先给书的说法，再说 “the usual name for it is…”。',
  good:'他问 “Who worked that out?”：“Peter Mitchell proposed it in 1961 and received the Nobel Prize in 1978. That is general knowledge. This textbook gives the principle without the name.”',
  note:'p141 原话：装进生物膜的酶系统，<b>除了速率还决定反应在三维空间里的方向</b>（矢量性）；这使化学能（ΔG）与渗透功（把 H⁺ 逆梯度搬运）可以互换，<b>它是氧化还原系统与磷酸化系统之间的连接环节</b>。<span class="pg">p141</span>'},

 {g:'账', gn:'投入 / 产出 / 总结三行，缺一不可。只报产出是半张账——他一句「那消耗了什么」就能把你问停。'},
 {n:'04', t:'投入',
  big:'1 <b>NADH ＋ H⁺</b>（或 1 FADH₂）· <b>½ O₂</b> · <b>3 ADP ＋ 3 Pᵢ</b>（FADH₂ 那条是 2 ADP ＋ 2 Pᵢ）',
  en:'“Per NADH it takes in one NADH with a proton, half a molecule of oxygen, and three ADP with three inorganic phosphates. For FADH₂ it is the same but two ADP and two phosphates.”',
  note:'书 p146 给了整式：<b>NADH + H⁺ + ½ O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O</b>。<b>氧要算进投入</b>——这一格最容易漏，而他恰好会问「那氧在哪里」。<span class="pg">p146</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子（书 p146）</b>：<code>NADH + H⁺ + ½ O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O</code><br><br><b>三步配平</b>（他问「为什么是半个氧、为什么是四个水」就照这个说）：<br>① <b>½ O₂</b>：一个 NADH 一次只交得出<b>两个</b>电子，而一个 O₂ 要吃<b>四个</b>才能变成两个水。所以一个 NADH 只配得起<b>半个</b> O₂——<code>½ O₂ + 2 e⁻ + 2 H⁺ → H₂O</code>。<br>② <b>4 个水 ＝ 3 ＋ 1</b>：<b>3 个</b>来自磷酸化（<code>ADP + Pᵢ → ATP + H₂O</code>，做三个 ATP 就放三个水），<b>1 个</b>来自氧被还原，就是第 ① 条那个式子。<br>③ 左边那个单独的 <b>H⁺</b> 不是凑数的：当初脱氢时 NAD⁺ 只收走一个氢负离子，把一个质子丢在溶液里；现在要氧化回 NAD⁺，得<b>把它领回来</b>。所以书写的是 <code>NADH + H⁺</code>，不是 NADH。<br><br><br><b>=== 一句话理解 ===</b><br>「<b>½ O₂</b>」不是化学上的怪写法，是<b>记账上的必然</b>：氧的胃口是四个电子，NADH 一次只掏得出两个——「半个氧」就是「两个电子的份」。<br>而这四个水里<b>只有一个是「呼吸」意义上的水</b>（氧变的那个，所谓代谢水），另外三个是造 ATP 时挤出来的副产品。<b>能把 4 拆成 3 ＋ 1，就证明你在读式子而不是背式子。</b>'},
 {n:'05', t:'产出',
  big:'<b>NAD⁺</b>（或 FAD）· <b>H₂O</b> · <b>3 ATP</b>（或 2）',
  en:'“Out come NAD-plus, water and three ATP. NAD-plus is the oxidised coenzyme that glycolysis and the cycle need back. The textbook’s equation has four waters: three from the phosphorylation and one from the reduction of the oxygen.”',
  note:'<b>四个水证明你在读式子而不是背式子。</b><b>再生 NAD⁺ 是呼吸链的第二个作用</b>，也是「没有氧为什么全停」的答案。'},
 {n:'06', t:'总结（净账）',
  big:'每个 NADH：2 个电子走完全程 → 泵 <b>6 个质子</b> → 约 <b>3 ATP</b>；每个 FADH₂：<b>4 个质子</b> → 约 <b>2 ATP</b>。葡萄糖那 38 个 ATP 里，<b>34 个</b>在这里造',
  en:'“Net: two electrons from NADH cross the whole chain, six protons are pumped out, and the textbook converts that to about three ATP. FADH₂ gives four protons and about two. Modern textbooks count ten protons and 2.5 ATP per NADH, 1.5 per FADH₂ — general, not this book.”',
  note:'6 和 4 个质子 p145；「6 个 ≈ 3 ATP、4 个 ≈ 2」p146；3 和 2 的比例 p139 又说了一遍。<br><b>34 是拿书的数算的，书没印</b>：38 = 糖酵解 8 ＋ 丙酮酸氧化脱羧 6 ＋ 循环 24，其中底物水平磷酸化只有 4 个（糖酵解 2 ＋ 两个 GTP）。英文：“Thirty-four of the thirty-eight are made here. Only four come from substrate-level phosphorylation.”<span class="pg">p139 p145 p146</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>6 H⁺ ≈ 3 ATP</code>（NADH 这条路）· <code>4 H⁺ ≈ 2 ATP</code>（FADH₂ 这条路）· <code>34 = 38 − 4</code><br><br><b>四步推导</b>：<br>① <b>6 是三站加出来的</b>：复合物 <b>I 泵 2</b> ＋ <b>III 泵 4</b>（每传一个电子泵 2 个，两个电子就是 4）＋ <b>IV 泵 0</b>（书说它不泵）＝ <code>2 + 4 + 0 = 6</code>。<br>② <b>4 是少了第一站</b>：FADH₂ 从复合物 <b>II</b> 进来，II 不泵，<code>0 + 4 + 0 = 4</code>。<b>「绕过复合物 I」就是 FADH₂ 只值两个 ATP 的全部原因。</b><br>③ <b>质子换 ATP</b>：书 p146 只给结果（6 个 ≈ 3 ATP、4 个 ≈ 2 ATP），由此反推出来的单价是<b>每个 ATP 约 2 个质子</b>。现代值是每个 ATP 约 4 个质子、而且认为 IV 也泵——见追问里「为什么是<b>约</b>三个」那条。<br>④ <b>34 书没印，是拿书的数算的</b>：一分子葡萄糖 <code>38 = 8 + 6 + 24</code>，其中底物水平磷酸化只有 <b>4 个</b>（糖酵解净 2 ＋ 两圈的 2 个 GTP），<code>38 − 4 = 34</code> 全部出自这张膜。<br><br><br><b>=== 一句话理解 ===</b><br><b>这条链根本不数 NADH，它只数质子。</b>「一个 NADH 值三个 ATP」是一句<b>汇率</b>，中间隔着质子这一道换汇——<b>那个 3 不是三次反应，是六个质子分三次被放回来。</b><br>而 <code>34 ÷ 38 ≈ 九成</code> 这个比例，本身就是这张卡存在的理由：<b>一分子葡萄糖九成的 ATP 不是在任何一条代谢通路里做出来的，是在这张膜上拿质子换来的。</b>'},
 {n:'07', t:'地点 ＋ 调控',
  big:'地点：<b>线粒体内膜</b>（循环在<b>基质</b>，链在<b>膜上</b>）。限速的不是氧，是 <b>ADP 够不够</b>',
  en:'“It runs in the <b>inner mitochondrial membrane</b>, beside the matrix where the citric acid cycle runs. What limits the rate is the supply of <b>ADP</b>: the textbook gives phosphorylation in the respiratory chain as its example of regulation by a limiting metabolite.”',
  note:'p222 原话：「限制因素是 ADP 是否充足」。p197 另一句好用的：<b>「只有线粒体内膜负责 ATP 的生产」</b>。后半句（没有 ADP → 质子回不去 → 梯度顶住 → 传递变慢）是<b>通用</b>推论。<span class="pg">p197 p222</span>'},

 {g:'四个复合物 ＋ 两个流动载体', gn:'每个只记四件事：<b>书给的名字（都是氧化还原酶）· 进来什么出去什么 · 辅基 · 泵不泵</b>。结构不用背。'},
 {n:'08', t:'复合物 I',
  big:'<b>NADH:ubiquinone oxidoreductase</b> · NADH → 泛醌 · 辅基 <b>FMN ＋ 若干 FeS</b> · <b>泵 2 个质子</b>',
  en:'“Complex I is <b>NADH:ubiquinone oxidoreductase</b>. Its core is the flavoprotein NADH dehydrogenase. Its prosthetic groups are <b>FMN</b> and several <b>iron-sulfur centres</b>, non-heme iron held by cysteine sulfurs. A prosthetic group is a cofactor bound permanently to the protein. The complex dehydrogenates NADH on the matrix side, passes the electrons to ubiquinone, and two protons appear outside.”',
  note:'书的式子：NADH + H⁺ + 2 QH· → NAD⁺ + 2 QH₂（把<b>半醌</b>还原成 <b>ubiquinol</b>）。p142：FMNH₂ 把电子交给膜<b>外侧</b>的 Fe₂S₂ 蛋白，<b>质子就在那里被放进膜间隙</b>；电子再传给<b>基质侧</b>的 Fe₄S₄。<span class="pg">p141 p142 p046</span>'},
 {n:'09', t:'复合物 II',
  big:'<b>succinate:ubiquinone oxidoreductase</b>，<b>就是循环里的 succinate dehydrogenase</b> · 辅基 <b>FAD ＋ 两个 FeS</b> · <b>不泵</b>',
  en:'“Complex II is <b>succinate:ubiquinone oxidoreductase</b> — a flavoprotein with FAD and two iron-sulfur groups. The textbook points out that it is simply succinate dehydrogenase, the one cycle enzyme sitting in the membrane. It feeds electrons straight into ubiquinone, bypassing complex I, and pumps nothing.”',
  note:'<b>这一格就是卡 24 的第 6 步</b>（FAD 是<b>共价</b>结合的，p139）。p143 原话：<i>It is the succinate dehydrogenase known from the citrate cycle.</i><b>「绕过复合物 I」就是 FADH₂ 只值 2 个 ATP 的全部原因。</b><span class="pg">p139 p143</span>'},
 {n:'10', t:'为什么 II 不泵',
  big:'落差不够：succinate/fumarate <b>+0,03 V</b> → 泛醌 <b>+0,10 V</b>，只有 <b>0,07 V</b>；而 NADH → 泛醌是 <b>0,42 V</b>',
  en:'“Because that step releases too little energy. Succinate to ubiquinone is a drop of 0.07 volts, NADH to ubiquinone 0.42. Through the textbook’s own equation, ΔG equals minus n F ΔE, that is about 14 kJ per mole against 81. And the book says energy is captured in quanta of about 30.”',
  note:'电位在 <b>Table 6.2</b>，式子和 30 kJ 的量子在 p135–p136。<b>换算是我们做的，书只给了结果</b>：走 II 那条路<b>只有 4 个质子</b>（p145）。报的时候说「按你这本书的表和式子算」（F = 96,5 kJ·V⁻¹·mol⁻¹，n = 2）。<b>「FADH₂ 少一个 ATP」人人会背，「为什么」很少有人答得出。</b><span class="pg">p135 p145</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG°′ = −nFΔE°′</code>（书 p135）。<b>n</b> ＝ 电子数 ＝ 2 · <b>F</b> ＝ 法拉第常数 <code>≈ 96,5 kJ·V⁻¹·mol⁻¹</code> · <b>ΔE°′</b> ＝ 两端的电位差。<br><br><b>四步推导</b>（书只给了结论，换算是我们做的）：<br>① 查 table 6.2：succinate/fumarate <b>+0,03 V</b>、泛醌 <b>+0,10 V</b>、NADH <b>−0,32 V</b>。<br>② 算落差：走 II 是 <code>0,10 − 0,03 = 0,07 V</code>；走 I 是 <code>0,10 − (−0,32) = 0,42 V</code>。<b>差了六倍。</b><br>③ 换成能量：<code>−2 × 96,5 × 0,07 ≈ −14 kJ/mol</code>，对 <code>−2 × 96,5 × 0,42 ≈ −81 kJ/mol</code>。<br>④ 对照书 p135–p136 的「量子」：细胞收能量的最小份额约 <b>30 kJ/mol</b>。<b>81 买得起两三份，14 连一份都不够。</b><br><br><br><b>=== 一句话理解 ===</b><br>泵质子是要<b>付钱</b>的——把质子逆着梯度推到膜外，本身就是上坡。<b>复合物 II 那一站的落差连一份都买不起，所以它不是「不会泵」，是「付不起」。</b><br>换个说法：<b>succinate 本来就站得比 NADH 低</b>——它的电位 +0,03 V，几乎跟泛醌（+0,10）一样高，从它身上根本榨不出第一站那段落差。<b>FADH₂ 少一个 ATP，在电位表上早就写好了。</b>'},
 {n:'11', t:'复合物 III',
  big:'<b>ubiquinol:cytochrome c oxidoreductase</b> · QH₂ → cyt c · 辅基 <b>两个 b 型细胞色素 ＋ cyt c₁ ＋ 一个 FeS</b> · <b>每传一个电子泵 2 个质子，一对 4 个</b>',
  en:'“Complex III is <b>ubiquinol:cytochrome c oxidoreductase</b>. It carries two b-type cytochromes, plus cytochrome c₁ and an iron-sulfur protein. The b-type cytochromes are <b>hemes</b>, iron held in a porphyrin ring. The two differ in redox potential because they sit on different polypeptides. Every electron passed on sends two protons outside.”',
  note:'式子：2 QH₂ + 2 cyt c(Fe³⁺) → 2 cyt c(Fe²⁺) + 2 QH· + 2 H⁺。<b>书画的那个环</b>：QH₂ 在<b>胞质侧</b>被 b 氧化成半醌、放一个质子，半醌再被 <b>c₁</b> 氧化成 Q、再放一个；b_T→b_K 把一个电子带回<b>基质侧</b>，在那里把 Q 还原成半醌、<b>拿走一个质子</b>。书点了用处：<b>让两电子载体（ubiquinol）跟单电子载体（cyt c）对得上</b>。<span class="pg">p143 p144</span>'},
 {n:'12', t:'复合物 IV',
  big:'<b>ferrocytochrome c:oxygen oxidoreductase</b>，即 <b>cytochrome oxidase</b> · cyt c → O₂ · 辅基 <b>细胞色素 a、a₃ ＋ 铜离子</b> · <b>书说它不泵</b>，但它<b>造水</b>',
  en:'“Complex IV is cytochrome oxidase, <b>ferrocytochrome c:oxygen oxidoreductase</b> — seven proteins whose working parts are cytochromes a and a₃ and copper ions. It takes electrons from cytochrome c and reduces oxygen to oxide ions, which take up protons from the matrix to give water. This textbook says it does <b>not</b> pump protons.”',
  warn:'<b>现代教科书说复合物 IV 是泵的</b>（每对电子 2 个），所以每个 NADH 是 <b>10</b> 个质子而不是 6 个。<b>先给书的（6 个、约 3 ATP），被追问再给现代值。</b>标 general。',
  note:'书自己承认：<b>「这个复合物的机制在所有线粒体氧化还原系统里是最不清楚的」</b>——被追细节时很好用。式子 ½ O₂ + 2 e⁻ + 2 H⁺ → H₂O；书说它虽不泵，但<b>消耗基质里的质子，因而提高基质 pH</b>。<span class="pg">p144</span>'},
 {n:'13', t:'两个流动载体',
  big:'<b>ubiquinone（辅酶 Q）</b>：脂溶性小分子，<b>溶在膜里</b>移动，带 <b>2 电子 ＋ 2 质子</b>；<b>cytochrome c</b>：小蛋白，在<b>膜的外表面</b>滑动，一次带 <b>1 个电子</b>',
  en:'“Between the complexes sit two mobile carriers. <b>Ubiquinone</b>, coenzyme Q, is a small lipid-soluble quinone, not a protein. It is mobile inside the membrane because it is hydrophobic, and it carries two electrons with two protons. <b>Cytochrome c</b> is a small protein with a heme that slides along the outer face carrying one electron at a time.”',
  note:'p045：辅酶 Q 是<b>黄素蛋白和细胞色素之间的中介</b>（植物里对应 plastoquinone）。p144：cyt c 在膜表面<b>「滑动」</b>。p046：线粒体里至少五种细胞色素 <b>b、c₁、c、a、a₃</b>，靠吡咯环取代基不同而电位不同。<span class="pg">p045 p046 p142 p144</span>'},
 {n:'14', t:'质子是怎么被搬出去的',
  big:'两类载体<b>交替</b>：NAD⁺ / FMN / Q 带「<b>电子 ＋ 质子</b>」，FeS 和细胞色素<b>只带电子</b>——质子在膜外被甩下，电子继续往里走',
  en:'“How can moving electrons move protons? The textbook’s answer is the <b>alternation</b>: NAD-plus, FMN and quinone carry electrons together with protons, while iron–sulfur centres and cytochromes carry <b>electrons only</b>. Each carrier has a fixed place in the membrane, so protons are taken up inside and released outside.”',
  note:'p142 说这两条特征在链里<b>反复出现</b>，并把结果叫作 2 个质子的<b>表观</b>（apparent）矢量转移。<b>这是全卡最值钱的机制句——「泵」这个词本身什么也没解释，这一句才解释。</b><span class="pg">p142</span>'},
 {n:'15', t:'怎么在纸上画这条链',
  big:'他可能让你<b>画</b>。六步，照这个顺序，<b>边画边说</b>',
  en:'“I can draw it. The membrane is two lines, with the four complexes as boxes in it. Ubiquinone goes inside the membrane and cytochrome c on its outer face. The electrons run from NADH and succinate down to oxygen. The protons come out at complexes one and three and go back in through ATP synthase.”',
  note:'① 两条平行横线 = <b>内膜</b>；一侧写 <b>matrix (M)</b>，另一侧写 <b>intermembrane space (C)</b>（书 figure 6.9 把 M 画在<b>上</b>面）。<br>② 膜里画四个方框 <b>I · II · III · IV</b>；再画第五个带柄带球的 <b>V</b>，球（<b>F₁</b>）伸进基质侧。<br>③ I 与 III 之间、II 与 III 之间的<b>膜里</b>画小圈 <b>Q</b>；III 与 IV 之间的<b>膜外表面</b>画小圈 <b>c</b>。<br>④ 电子箭头：NADH→I→Q，succinate→II→Q，Q→III→c→IV→½ O₂→H₂O。<br>⑤ 质子箭头<b>向外</b>：I 标 <b>2 H⁺</b>，III 标 <b>4 H⁺</b>，IV <b>不标</b>；V 上箭头<b>向内</b>，标 <b>6 H⁺ → 3 ATP</b>。<br>⑥ 底下写电位：<b>−0,32 → +0,10 → +0,26 → +0,82</b>。<br><b>这六步本身就是逐字稿</b>：手和嘴一起走，比干说稳。'},

 {g:'动力：电位差', gn:'他问「什么推着电子往前走」时，答案是一张表加一个式子，两样书里都有。'},
 {n:'16', t:'redox potential 是什么',
  big:'一对氧化还原物质<b>抓不抓得住电子</b>的量度，单位<b>伏特</b>；<b>越负越愿意给电子</b>。电子自发地从<b>负</b>流向<b>正</b>',
  en:'“A <b>redox potential</b> is a measure, in volts, of how strongly a redox pair holds its electrons, referred to a standard electrode at pH 7. The textbook’s sentence: electrons pass spontaneously from the more negative system, the reductant, to the one with the higher potential. That is the direction of the whole chain.”',
  tbl:{head:['系统（还原形 → 氧化形）','E°′ (V)'], rows:[['NADH + H⁺ → NAD⁺','<b>−0,32</b>'],['FADH₂ → FAD','−0,20'],['succinate → fumarate','+0,03'],['cytochrome b (Fe²⁺→Fe³⁺)','0,00'],['dihydroubiquinone → ubiquinone','+0,10'],['cytochrome c (Fe²⁺→Fe³⁺)','+0,26'],['H₂O → ½ O₂','<b>+0,82</b>']]},
  note:'整张表抄自 <b>Table 6.2</b>（p135），<b>已回 300 dpi 逐行核过</b>；书还说生物系统里氢电极 E°′ = <b>−420 mV</b>。<br>⚠ <b>表里 cytochrome b 是 0,00，比泛醌的 +0,10 还低</b>，看上去那一步是上坡。<b>书自己解释了</b>：复合物 III 里有<b>两个</b> b 型细胞色素，结合在不同多肽上所以电位不同，<b>只有其中一个能被 ubiquinol 还原</b>。用书的一半回答书的另一半。<span class="pg">p135 p143</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：Nernst-Peters 关系（书 p134 引的就是它）<code>E = E°′ + (0,059 / n) · log([Ox] / [Red])</code>（25 °C）<br>E°′ 是<b>标准</b>电位：氧化型和还原型浓度相等、<b>pH 7</b> 时的那个值。整张 table 6.2 报的都是 E°′。<br><br><b>三步推导</b>（书那句「生物系统里氢电极 E°′ ＝ −420 mV」是怎么来的）：<br>① 氢电极按<b>约定</b>定成 <b>0 V</b>，但那是 <code>[H⁺] = 1 mol/L</code> 的条件，也就是 <b>pH 0</b>。<br>② 它的反应是 <code>2 H⁺ + 2 e⁻ → H₂</code>，式子里的 [Ox] 就是 [H⁺]。所以 pH 每升高一个单位，电位降 <code>0,059 V</code>。<br>③ 从 pH 0 走到 pH 7：<code>−0,059 × 7 ≈ −0,41 V</code>。书报的正是 <b>−420 mV</b>。<br><br><br><b>=== 一句话理解 ===</b><br><b>−420 mV 不是另一个常数，是同一个氢电极换到 pH 7 重新报的价。</b>生物电位右上角那一撇（E°′ 的 ′）就是这个意思——<b>按细胞里的 pH 标过价的</b>。<br>再往上一层：<b>电位像海拔。</b>单点的海拔要先有人把某个面定成 0 米（氢电极就是那个人为定的海平面），<b>而能量只认落差</b>。<b>所以式子里永远是 ΔE，不是 E</b>——这正是书说「E 轴有约定的原点，ΔG 轴没有原点，只能把 ΔG 配给 E 的差」那句话的内容。'},
 {n:'17', t:'ΔG 与 30 kJ 的量子',
  big:'<b>ΔG°′ = −nFΔE°′</b>（书 p135）。全程 <b>1,14 V</b>、2 个电子 ≈ <b>−220 kJ/mol</b>；而细胞只能按约 <b>30 kJ/mol</b> 一份地收（＝一个 ATP）',
  en:'“The textbook gives the bridge: ΔG standard equals minus n F ΔE standard. Across the chain ΔE is 1.14 volts for two electrons, roughly minus 220 kJ per mole. But the cell captures energy only in quanta of about 30 kJ, the amount in one ATP. So the fall is taken in steps, each sized to move protons.”',
  note:'1,14 = 0,82 −（−0,32）。<b>−220 是拿书的表和式子算的，书没印</b>——报的时候带一句「按你这本书算下来大约」。三个 ATP ≈ 91 kJ，约 <b>40%</b>，跟书给的「38 ATP ≈ 1159 kJ ≈ 总能量的 40%」一致。<span class="pg">p135 p136 p140</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG°′ = −n F ΔE°′</code>（书 p135）<br><b>n</b> ＝ 转移的电子数（这里是 2）· <b>F</b> ＝ 法拉第常数，一摩尔电子带的电量，<code>96 485 C/mol ≈ 96,5 kJ·V⁻¹·mol⁻¹</code> · <b>ΔE°′</b> ＝ 终点电位 − 起点电位。<br><br><b>四步推导</b>（−220 是这么算出来的）：<br>① 起点 NADH <b>−0,32 V</b>，终点氧 <b>+0,82 V</b>（table 6.2）：<code>ΔE°′ = 0,82 − (−0,32) = 1,14 V</code>。<br>② 一个 NADH 交出两个电子，<code>n = 2</code>。<br>③ <code>ΔG°′ = −2 × 96,5 × 1,14 ≈ −220 kJ/mol</code>。<br>④ 而收进来的是 3 个 ATP：<code>3 × 30,5 ≈ 91 kJ</code>，<code>91 ÷ 220 ≈ 40%</code>——跟书 p140 在整分子葡萄糖上算的 <code>1159 ÷ 2870 ≈ 40%</code> 对得上（那个 <code>1159 = 38 × 30,5</code>）。<br><br><br><b>=== 一句话理解 ===</b><br>这个式子其实就是中学的「<b>电压 × 电量 ＝ 功</b>」换成了生化的写法：<b>ΔE 是电压降，nF 是这一摩尔电子所带的电量，乘起来就是这段落差能做多少功。</b>负号只是约定——电子自发往电位高的一端走时，ΔG 必须是负的。<br>所以<b>整条呼吸链是一段 1,14 V 的落差，而 ATP 是一格一格的台阶</b>，每格约 30 kJ。<b>那个 40%，就是台阶接住了多少、多少漏成了热。</b><br>⚠ <code>−220</code> 和 <code>40%</code> 都是拿书的表和书的式子<b>算的，书上没有印这两个数</b>——报的时候带一句「按你这本书的数算下来大约」。'},

 {g:'ATP 合酶 · 复合物 V', gn:'链之外的另一半。<b>这一格答得好，#26 就完整了。</b>'},
 {n:'18', t:'结构',
  big:'<b>F₀</b> 在膜里 = <b>质子通道</b>；<b>F₁</b> 在基质一侧 = <b>催化头</b>。亚基（书 figure 6.11）：<b>α β γ δ ε ＋ a、b₂</b>',
  en:'“ATP synthase is complex V. The textbook stresses that unlike the others it is <b>not</b> an oxidoreductase but a phosphorylating enzyme. An oxidoreductase is an enzyme that moves electrons from one molecule to another. It also stresses that here the protons move <b>with</b> the gradient, back into the matrix. Two parts: <b>F₀</b>, the proton channel in the membrane, and <b>F₁</b>, the catalytic head on the matrix side.”',
  note:'Figure 6.11（p145）<b>已回 300 dpi 核过</b>：F₁ 画成三个 α 三个 β，γ 和 ε 在中轴，δ 连着侧柄 b₂，a 嵌在膜里，<b>γ 旁边有旋转箭头和 H⁺</b>。图注列的亚基是 F₀、F₁、α、β、γ、δ、ε、a、b₂；α₃β₃ 这个化学计量是通用写法。<span class="pg">p145 p146</span>'},
 {n:'19', t:'机制（最反直觉的一条）',
  big:'质子<b>不是用来成键的</b>——ATP 在 F₁ 的活性位点上<b>自己就形成了</b>；质子穿过 F₀ 改变构象，<b>把做好的 ATP 松开</b>',
  en:'“The textbook’s own account: the active site in <b>F₁</b> forms the bond between ADP and phosphate, but the ATP stays bound there. Protons passing through <b>F₀</b> change the conformation of the site, so the ATP can be released and the cycle repeats. The energy is spent on <b>letting the product go</b>, not on making the bond.”',
  good:'顺势加一句通用的：“That is the binding-change mechanism, Boyer’s, and the conformational change is driven by rotation. The proton flow turns the ring in F₀ and the gamma subunit inside the head.”',
  note:'p146 原话就是这个意思。<b>这一条最容易加分</b>——几乎所有人都以为能量花在「合成」上，书说的正相反。<span class="pg">p146</span>'},

 {g:'证据与陷阱', gn:'这一组书里<b>一个字都没有</b>，全部 general。但它是「怎么发现的」那一格，答得出就不是背书的人。'},
 {n:'20', t:'解偶联剂 ＋ 抑制剂',
  big:'<b>解偶联</b>：2,4-二硝基苯酚把质子直接漏回基质 → 链跑得更快、<b>ATP 不产、能量变成热</b>。<b>抑制剂</b>定出了顺序：rotenone I · antimycin III · 氰化物/CO IV · oligomycin 合酶',
  en:'“Two classical pieces of evidence, general rather than from this textbook. <b>Uncouplers</b> such as 2,4-dinitrophenol carry protons back across the membrane, so the chain runs faster, no ATP is made and the energy leaves as heat. <b>Inhibitors</b> fixed the order: rotenone at complex I, antimycin at III, cyanide at IV, oligomycin at the synthase.”',
  warn:'全书 grep（按书里的原词搜的）：uncoupler / uncoupling / rotenone / antimycin / cyanide / oligomycin / dinitrophenol <b>全部 0 命中</b>。说的时候带一句 “this is general, not from the textbook”。',
  note:'<b>为什么这两样构成证据</b>（这才是他要的）：oligomycin 只挡合酶，<b>却把电子传递也挡住了</b> → 两者耦合；再加解偶联剂，传递<b>又跑起来</b>但不产 ATP → 耦合的介质是<b>梯度</b>。英文：“Oligomycin blocks only the synthase, yet electron transport stops as well. Add an uncoupler and it restarts without ATP. So what couples them is the gradient.”<br>定顺序的做法：挡住一处，<b>上游停在还原态、下游停在氧化态</b>，而细胞色素<b>有颜色</b>，分光光度计看得见。棕色脂肪用 thermogenin 做同一件事（general）。'}
],
end:'<b>一句话记住整张卡：链只做一件事——把电子的落差换成膜外的质子；合酶只做一件事——把质子放回来换 ATP。</b>中间没有任何化学中间体，这正是解偶联剂能把两者拆开的原因。被问数字先给书的：每个 NADH <b>6 个质子 ≈ 3 ATP</b>，每个 FADH₂ <b>4 个 ≈ 2 ATP</b>。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义 · 链</b>：内膜上<b>四个复合物 ＋ 两个流动载体</b>，把电子从 NADH/FADH₂ 送到氧，同时把质子泵出基质',
 '“A series of electron carriers in the inner mitochondrial membrane: four complexes with two mobile carriers. It passes electrons from NADH and FADH₂ to oxygen and pumps protons out of the matrix.”',
 '<b>先说它是什么，再说名字。</b><span class="pg">p141</span>'],
['<b>定义 · 氧化磷酸化</b>：质子经 <b>ATP 合酶</b>流回基质，推动 <b>ADP ＋ Pᵢ → ATP</b>',
 '“The synthesis of ATP from ADP and phosphate, driven by the proton gradient flowing back through ATP synthase.”',
 '书叫它<b>需氧磷酸化</b>。'],
['<b>耦合</b>：链是泵，合酶是涡轮，<b>中间只有梯度</b>',
 '“The chain is the pump, the synthase the turbine, and the only link is the proton gradient — chemiosmosis.”',
 '书没有这个词，但 p141 把原理写全了。'],
['<b>账</b>：每 NADH <b>6 个质子 ≈ 3 ATP</b>；每 FADH₂ <b>4 个 ≈ 2 ATP</b>',
 '“Six protons per NADH, about three ATP. Four per FADH₂, about two. The textbook’s equation gives NAD-plus, three ATP and four waters.”',
 '<b>四个水</b>：三个来自磷酸化，一个来自氧。'],
['<b>I ＋ II 都把电子交给泛醌</b>：I 是 NADH:ubiquinone oxidoreductase（FMN ＋ FeS，泵 <b>2 H⁺</b>），II 是 succinate:ubiquinone oxidoreductase ＝ <b>succinate dehydrogenase</b>（FAD ＋ 2 FeS，<b>不泵</b>）',
 '“Complex I is NADH:ubiquinone oxidoreductase, with FMN and iron-sulfur centres. Complex II is succinate dehydrogenase itself, which bypasses complex I and pumps nothing.”',
 '<b>「绕过复合物 I」就是 FADH₂ 只值 2 个 ATP 的原因。</b>'],
['<b>III 交给 cyt c，IV 交给氧</b>：III 是 ubiquinol:cytochrome c oxidoreductase（两个 cyt b ＋ c₁ ＋ FeS，泵 <b>4 H⁺</b>），IV 是 <b>cytochrome oxidase</b>（cyt a、a₃ ＋ 铜，书说<b>不泵</b>，<b>造水</b>）',
 '“Complex III sends two protons out for every electron passed to cytochrome c. Complex IV, cytochrome oxidase, reduces oxygen to water and, this textbook says, does not pump.”',
 '现代说法是 IV 也泵 2 个（general）。'],
['<b>两个流动载体</b>：<b>Q</b> 在膜里（2 电子 ＋ 2 质子）· <b>cyt c</b> 在膜外表面（1 个电子）',
 '“Ubiquinone is lipid-soluble and moves inside the membrane. Cytochrome c slides along its outer face and carries one electron at a time.”',
 '「一个带两个、一个带一个」——<b>复合物 III 存在的理由。</b>'],
['<b>泵的机制</b>：带质子的载体和<b>只带电子</b>的载体<b>交替</b>',
 '“NAD-plus, FMN and quinone carry electrons with protons. Iron-sulfur centres and cytochromes carry electrons only. That alternation makes the transfer vectorial.”',
 '书 p142 说这两条特征<b>反复出现</b>。'],
['<b>电位</b>：<b>−0,32 → +0,82</b>，<b>ΔG°′ = −nFΔE°′</b>',
 '“Electrons pass spontaneously from the more negative system to the more positive. Across the chain that is 1.14 volts, about minus 220 kJ per mole.”',
 'table 6.2 <span class="pg">p135</span>。−220 是<b>算出来的</b>。'],
['<b>ATP 合酶</b>：<b>F₀</b> 通道 ＋ <b>F₁</b> 催化头；质子改变构象<b>把 ATP 松开</b>',
 '“The bond forms by itself in F₁. The protons passing through F₀ change the conformation so the finished ATP can be released.”',
 '<b>最容易加分的一句。</b><span class="pg">p146</span>'],
['<b>地点与调控</b>：<b>内膜</b>（循环在基质）；限速的是 <b>ADP</b>',
 '“In the inner mitochondrial membrane, and the rate is set by the supply of ADP — the textbook’s own example of a limiting metabolite.”',
 '<span class="pg">p222</span>'],
['<b>陷阱</b>：氧只是<b>最后的电子受体</b>；链本身<b>不造 ATP</b>',
 '“Oxygen is not burned with the nutrient — it is the final electron acceptor and ends up as water. And the chain does not make ATP. It makes a gradient.”',
 '两条都几乎每次被问，都容易说错。']
],

segs:[
 {tag:'段 1 · 定义', h:'两个定义，一句关系',
  p:['“The <b>electron transport chain</b> is a series of electron carriers built into the inner mitochondrial membrane. This textbook calls it the respiratory chain. The inner membrane is the one that encloses the matrix, where the citric acid cycle runs. It is four multienzyme complexes, numbered one to four, with two mobile carriers between them. It takes the electrons that NADH and FADH₂ are carrying, passes them from one carrier to the next down to oxygen, and uses the energy released to pump protons out of the matrix.”',
     '“Its <b>role in cellular respiration</b> is the final one. Cellular respiration is the complete oxidation of a nutrient to carbon dioxide and water: the cycle has already taken the carbon away as CO₂, and this is where the hydrogen finally reaches the oxygen and becomes water. It also regenerates NAD-plus and FAD — without that, glycolysis and the cycle would stop.”',
     '“<b>Oxidative phosphorylation</b> is the other half: the synthesis of ATP from ADP and inorganic phosphate, driven by that proton gradient as the protons flow back into the matrix through ATP synthase. Oxidative because the energy comes from oxidising the reduced coenzymes. Phosphorylation because it is spent putting a phosphate onto ADP. The textbook calls it aerobic phosphorylation and treats the two in one section.”',
     '“So the chain is the pump and the synthase is the turbine, and the only thing connecting them is the proton gradient across the membrane.”'],
  note:'<b>四句话把题面上每个词都交代掉了</b>：electron / transport / chain（第一句）、role / cellular respiration（第二句）、oxidative / phosphorylation（第三句）、耦合（第四句）。他嘴里多半只有 “What is the respiratory chain?”——<b>剩下的结构要你自己接上去</b>。'},
 {tag:'段 2 · general', h:'账、地点、调控 —— 三行说完',
  p:['“Here is the account per NADH. In go one NADH with a proton, half a molecule of oxygen, and three ADP with three phosphates. Out come NAD-plus, water and three ATP. The textbook writes four waters, three from the phosphorylation and one from the oxygen.”',
     '“The net of it: two electrons from NADH cross the whole chain and six protons are pumped out of the matrix. The textbook converts that to about three ATP. FADH₂ enters lower down, at complex two, so only four protons are pumped and it is worth about two. Modern textbooks count ten protons and 2.5 ATP per NADH, but I would give the textbook’s figures first.”',
     '“It all happens in the <b>inner mitochondrial membrane</b>, while the cycle runs in the matrix beside it. And of the thirty-eight ATP the textbook gives for one glucose, thirty-four are made here. What sets the rate is not oxygen but the supply of <b>ADP</b>: the textbook uses phosphorylation in the respiratory chain as its example of regulation by a limiting metabolite.”'],
  note:'<b>三行账 ＋ 地点 ＋ 调控，正好是代谢题的通用开口模板</b>（见 `DRILL.md`）。34/38 是拿书的数算的，说的时候加一句 “on the textbook’s own numbers”。'},
 {tag:'段 3 · 稍展开', h:'四个复合物走一遍，然后合酶',
  p:['“Complex one is <b>NADH:ubiquinone oxidoreductase</b> — a flavoprotein with FMN and several iron-sulfur centres. It dehydrogenates NADH on the matrix side, passes the electrons to ubiquinone, and two protons appear outside.”',
     '“Complex two is <b>succinate:ubiquinone oxidoreductase</b>, which is simply succinate dehydrogenase, the one enzyme of the cycle that sits in the membrane. Its prosthetic groups are FAD and two iron-sulfur groups, and it does not pump. From succinate to ubiquinone is a drop of only 0.07 volts, against 0.42 for NADH.”',
     '“Both feed <b>ubiquinone</b>, a lipid-soluble quinone that moves inside the membrane carrying two electrons and two protons. It hands them to complex three, <b>ubiquinol:cytochrome c oxidoreductase</b>, which carries two b-type cytochromes, cytochrome c₁ and an iron-sulfur protein. There every electron passed on sends two protons out.”',
     '“From there a small mobile protein, <b>cytochrome c</b>, slides along the outer face of the membrane with one electron at a time to complex four, <b>cytochrome oxidase</b>, with cytochromes a and a₃ and copper. It reduces oxygen to oxide ions, which take protons from the matrix to make water. This textbook says complex four does not pump.”',
     '“What drives all of it is the <b>redox potential</b> — how strongly each pair holds its electrons. The textbook’s table runs from NADH at minus 0.32 volts to oxygen at plus 0.82, and electrons pass spontaneously from the more negative to the more positive.”',
     '“Then complex five, <b>ATP synthase</b>: F₀ is the proton channel in the membrane, F₁ the catalytic head in the matrix. The mechanism is worth stating carefully. The bond between ADP and phosphate is formed in the active site of F₁, but the ATP stays bound. The protons passing through F₀ change the conformation so the finished ATP is released. The energy is spent letting the product go, not making the bond.”'],
  note:'<b>时间不够就砍到三句</b>：一和二把电子交给泛醌，三交给细胞色素 c，四交给氧；质子 2 ＋ 4 出去，合酶放回来。<b>不要砍「为什么 II 不泵」和「合酶把 ATP 松开」</b>——那是他追问时的落点。'},
 {tag:'段 4 · 留口子', h:'诚实地接回主场：电位就是电子的 Kd',
  p:['“This chapter is a long way from what I work on, so let me connect it where the connection is real. A standard <b>redox potential</b> and a <b>dissociation constant</b> are the same kind of quantity. Kd is the equilibrium constant for a protein letting go of its ligand. A redox potential is where equilibrium sits for a couple letting go of its electrons — a Kd for electrons, written in volts instead of molar. The textbook even puts the two axes side by side: ΔG standard equals minus n F ΔE standard, exactly as ΔG standard equals minus R T ln K for binding.”',
     '“Both say where equilibrium lies and neither says anything about rate. That is the distinction I have to make whenever I measure binding: the constant gives the direction, the protein decides the speed.”',
     '“And I meet this chain from the other end in practice: whether my yeast cultures respire or ferment changes how much protein I get per litre. With plenty of glucose they ferment even in air, the Crabtree effect. That part is general physiology rather than this textbook.”'],
  note:'<b>这一段是诚实的，不是硬接。</b>「电位是电子的 Kd」本身就是 researcher 的标志，而且<b>把口子留在卡 02（Kd）上</b>——他顺着走就走进你的主场。Crabtree 是<b>通用</b>知识，书里 0 命中；讲实验只讲方法学，不点具体病原体（见 `DRILL.md`）。'}
],

why:{
 rungs:[
  ['为什么不让 NADH 直接把电子交给氧，一步完事？','因为那一步的落差是 <b>1,14 V</b>，按书自己的式子 ΔG°′ = −nFΔE°′ 算，两个电子约 <b>−220 kJ/mol</b>；而<b>细胞只能以约 30 kJ/mol（一个 ATP）的份额捕获能量</b>（p135–p136）。一次放掉 220，等于七份里烧掉六份。所以落差必须切成台阶。'],
  ['那为什么台阶的产物是<b>质子梯度</b>，而不是某个高能中间体？','因为两边的货币不一样：氧化那边流通的是<b>电子</b>，磷酸化那边流通的是<b>磷酸基</b>，化学上对不上。膜把它们解耦——每个复合物把电子的落差换成「把质子搬到膜外」这件<b>渗透功</b>，合酶再把渗透功换回化学功。<b>书 p141 就是这么说的</b>：装进膜里的反应获得空间方向（矢量性），这使化学能与渗透功可以互换。'],
  ['那质子回流为什么就能造出 ATP？','因为 ADP + Pᵢ → ATP 的 ΔG°′ 是 <b>+30,5 kJ/mol</b>，本身走不动；质子顺梯度回流是放能的，合酶把两者<b>机械地</b>耦合起来。书说得更精确：<b>能量不是花在成键上</b>——键在 F₁ 的活性位点里自己就形成了，那份能量用来改变构象，<b>把做好的 ATP 松开</b>。']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“Below that we are asking how an electrochemical gradient becomes mechanical rotation and then binding energy inside a protein. That is bioenergetics and physical chemistry rather than biochemistry.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p145_obr610_chain_complexes_and_atp.jpg',
  t:'整条链 ＋ ATP 合酶，一张图 —— 速背 15 那六步画的就是它（书 Obr. 6.10）',
  cap:'<b>这张是「画」，而且它是这道题最该被临摹的一张。</b>两条横线是<b>内膜</b>，上面标 <b>M ＝ 基质</b>，下面标 <b>C ＝ 胞质侧（膜间隙）</b>。膜里从左到右嵌着五个框：<b>II · III · I · IV · V</b>，最后那个带一个伸进基质的大头 <b>F₁</b> 和一个埋在膜里的 <b>F₀</b>。'
    + '<br><br><b>⚠ 一眼会看错的地方</b>：<b>书画的顺序是 II · III · I · IV，不是 I · II · III · IV</b>。<b>它是按「谁把电子交给泛醌」排的，不是按编号排的</b>。你自己画的时候<b>可以按编号排</b>，只要 I 和 II 都指向同一个 Q 就不算错；但<b>他把书摊开问你「这是哪个」，你要认得出左起第一个是 II</b>。'
    + '<br><br><b>画的顺序（六步，照这个练）</b>：'
    + '<br>① <b>两条平行横线</b>就是内膜。上面写 <b>M（matrix）</b>，下面写 <b>C（intermembrane space）</b>。<b>先定上下，后面所有箭头的方向都由它决定。</b>'
    + '<br>② 膜里画四个方框，标 <b>I · II · III · IV</b>；右边再画第五个，<b>柄在膜里标 F₀，球在基质侧标 F₁</b>，整体标 <b>V</b>。'
    + '<br>③ <b>膜里</b>画两个小圈标 <b>Q</b>（一个在 II 和 III 之间，一个在 I 和 III 之间）；<b>膜的 C 侧表面</b>画两个小圈标 <b>c</b>。<b>Q 在膜里、c 在膜外表面，这个位置差别是要点，不是画风。</b>'
    + '<br>④ 电子箭头：<b>NADH → I → Q</b>，<b>succinate → II → Q</b>，<b>Q → III → c → IV → ½ O₂ → H₂O</b>。'
    + '<br>⑤ 质子箭头<b>朝下（朝 C）</b>：<b>I 标 2 H⁺</b>，<b>III 标 4 H⁺</b>，<b>IV 什么都不标</b>。合酶那根箭头<b>朝上（回基质）</b>，标 <b>6 H⁺ → 3 ATP</b>；旁边加一行小字 <b>4 H⁺ → 2 ATP</b>，那是走 II 的路。'
    + '<br>⑥ 底下写一排电位：<b>−0,32 → +0,10 → +0,26 → +0,82</b>。'
    + '<br><br><b>边画边说的三句</b>：“The chain does one thing. It turns the <b>fall in redox potential</b> into <b>protons on the other side of the membrane</b>.”'
    + '<br>“NADH enters at <b>complex I</b> and succinate at <b>complex II</b>. Complex II pumps nothing, so succinate is worth <b>four</b> protons instead of six.”'
    + '<br>“ATP synthase is <b>complex V</b>. It is not an oxidoreductase. The protons run back <b>down</b> the gradient through it, and that is where ATP is made.”'
    + '<br><br><b>图上那两行数字就是书的兑换率</b>：<b>6 H⁺（nebo 4 H⁺）</b> 对着 <b>3 ADP ＋ 3 P（nebo 2 ADP ＋ 2 P）</b>，<b>nebo 是捷克语的「或者」</b>。这一行就是 <b>3 ATP / NADH</b> 和 <b>2 ATP / FADH₂</b> 的出处。',
  src2:'Biochemie, Obr. 6.10, p145 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'认',
  src:'img/p144_obr69_complexes_i_to_iv.jpg',
  t:'四个复合物在干什么 —— 质子数就标在下缘（书 Obr. 6.9）',
  cap:'<b>这张是「认」，它是上一张的放大版，而且它把质子数标出来了。</b>还是 <b>M 在上、C 在下</b>，复合物还是 <b>II · III · I · IV</b> 的排法。'
    + '<br><br><b>三处要盯住的</b>：'
    + '<br>① <b>下缘三根朝外的箭头</b>：<b>4 H⁺ · 4 H⁺ · 2 H⁺</b>。<b>2 H⁺ 那根是复合物 I 的，两根 4 H⁺ 都是复合物 III 的</b>——一根给从 I 来的电子，一根给从 II 来的。<b>所以一个 NADH 是 2 ＋ 4 ＝ 6，一个 FADH₂ 是 0 ＋ 4 ＝ 4。</b>这两个数就是 3 ATP 和 2 ATP 的全部来源。'
    + '<br>② <b>复合物 IV 底下一根箭头都没有</b>。<b>这本书说它不泵</b>，现代教材说它泵 2 个。<b>先给书的，被追问再给现代的。</b>'
    + '<br>③ 左上角进来的是 <b>succinate / fumarate</b> 那一对（图上是捷克语的结构式，不用管怎么拼），右上角进来的是 <b>NAD⁺ / NADH＋H⁺</b> 和 <b>O₂</b>。<b>两个入口一个出口，图上一眼看得见。</b>'
    + '<br><br><b>摆到面前时说的两句</b>：“Left to right the textbook draws complex <b>two</b>, three, one and four. It orders them by <b>where the electrons enter ubiquinone</b>, not by number.”'
    + '<br>“The protons leave on the <b>C side</b>. Two at complex one, four at complex three, and this textbook draws <b>none</b> at complex four.”'
    + '<br><br>⚠ 图里那两个画在膜外表面的小圈都写着 <b>c</b>，里面是 <b>4Fe²⁺ / 4Fe³⁺</b>——那是 <b>cytochrome c</b>，中间那根粗的双向箭头画的就是它<b>在膜表面滑来滑去</b>。<b>「它是怎么在两个复合物之间传电子的」，答案就是这根箭头。</b>',
  src2:'Biochemie, Obr. 6.9, p144 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'认',
  src:'img/p142_obr66_respiratory_chain_membrane.jpg',
  t:'全套零件摆在真的内膜上 —— 连运输蛋白一起（书 Obr. 6.6）',
  cap:'<b>这张是「认」，它是全书关于这道题信息最密的一张。</b>画的是一段折叠的内膜（那些褶子就是 <b>cristae</b>），<b>M 在里、C 在外</b>，图注原话译过来是「<b>M 是基质侧，C 是胞质侧，有时也叫膜间隙</b>」。'
    + '<br><br><b>从右往左认零件</b>：<b>NADH＋H⁺ / NAD⁺ → FMNH₂ → Fe–S → Fe–S → QH· / Q</b>；两个 <b>b</b>；<b>QH₂ 和 QH·</b>；<b>c₁</b> 和 <b>c</b>；<b>a</b>、<b>a₃</b> 和 <b>Cu</b>；最后 <b>½ O₂ ＋ 2 H⁺ → H₂O</b>。右缘三根 <b>2 H⁺</b> 箭头指向 C。左下那个带六个球的大蘑菇是 <b>F₁</b>，柄是 <b>F₀</b>，箭头写着 <b>ADP ＋ Pᵢ → ATP</b>，下面一根 <b>2 H⁺</b> 箭头<b>朝里</b>。'
    + '<br><br><b>左上角那一排是这张图独有的东西</b>：四个嵌在膜里的<b>运输蛋白</b>，标着 <b>malát · Pᵢ · ADP</b> 进、<b>Pᵢ · OH⁻ · ATP</b> 出。<b>ATP 和 ADP 是对着换的，Pᵢ 是跟 OH⁻ 对着换的。</b>'
    + '<br><br><b>摆到面前时说的两句</b>：“The chain and the synthase are in the same membrane, and so are the <b>transporters</b>. ATP leaves the matrix only in exchange for ADP coming in.”'
    + '<br>“That exchange is why the modern count needs <b>four</b> protons per ATP rather than three. One of them pays for bringing the phosphate in.”'
    + '<br><br>⚠ <b>malát 出现在这张图上不是意外</b>：那是<b>苹果酸-天冬氨酸穿梭</b>的入口，胞质里的 NADH 就是这么把氢送进基质的。<b>他问「糖酵解的 NADH 怎么进来」，你指着这张图的左上角回答。</b>',
  src2:'Biochemie, Obr. 6.6, p142 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'画',
  src:'img/p145_obr611_atp_synthase.jpg',
  t:'ATP 合酶的零件表 —— 速背 18 那几个希腊字母长这样（书 Obr. 6.11）',
  cap:'<b>这张是「画」，而且它是把「F₀ 和 F₁」从两个名字变成一台机器的那一张。</b>膜里那一段是 <b>F₀</b>，伸进基质的大头是 <b>F₁</b>。'
    + '<br><br><b>图上标到的零件</b>：<b>F₁</b> 那个头由 <b>α</b> 和 <b>β</b> 交替围成，中轴是 <b>γ</b> 和 <b>ε</b>，顶上连着 <b>δ</b>；<b>δ</b> 往下接一根<b>侧柄 b₂</b>；膜里那块是 <b>a</b>。<b>γ 旁边画着一个旋转箭头和一个 H⁺</b>——<b>那个箭头就是这张图最值钱的一笔。</b>'
    + '<br><br><b>画的顺序（五步）</b>：'
    + '<br>① 先画膜（两条线），膜里画一个方块标 <b>a</b>，那是<b>质子通道</b>的一半。'
    + '<br>② 膜上方画一个<b>大圆头</b>，里面画<b>三对交替的瓣</b>，标 <b>α</b> 和 <b>β</b>——<b>催化位点在 β 上</b>。'
    + '<br>③ 从膜里穿过圆头中心画一根<b>轴</b>，标 <b>γ</b>，轴底标 <b>ε</b>。'
    + '<br>④ 旁边画一根<b>细长的侧柄</b>连到头顶，柄标 <b>b₂</b>，顶标 <b>δ</b>。<b>侧柄的作用是「按住不让头跟着转」</b>，这一句是通用的，不是书上的。'
    + '<br>⑤ 在 γ 旁边画一个<b>弯的旋转箭头</b>，在膜里画一根 <b>H⁺</b> 箭头<b>朝基质</b>。'
    + '<br><br><b>边画边说的三句</b>：“Complex <b>five</b>. Unlike the other four it is <b>not</b> an oxidoreductase. It is a phosphorylating enzyme.”'
    + '<br>“<b>F₀</b> is the proton channel in the membrane. <b>F₁</b> is the catalytic head on the matrix side. Here the protons move <b>with</b> the gradient.”'
    + '<br>“And this is the part people get backwards. The active site in F₁ <b>forms the bond by itself</b>. The proton flow changes its shape so the finished ATP can be <b>released</b>.”'
    + '<br><br>⚠ <b>α₃β₃ 这个写法是通用的，书只画不写</b>。书列的亚基就是图上这几个：<b>F₀ · F₁ · α · β · γ · δ · ε · a · b₂</b>。<b>他要化学计量就说 generally，别装成书上的。</b>',
  src2:'Biochemie, Obr. 6.11, p145 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'认',
  src:'img/p143_obr67_complex_i.jpg',
  t:'复合物 I 的内部 —— 两个电子和两个质子（书 Obr. 6.7）',
  cap:'<b>这张是「认」，图注原话译过来是「复合物 I 在内膜里的功能，两个电子和两个质子的传递示意」。</b>还是 <b>M 在上、C 在下</b>。'
    + '<br><br><b>图上走一遍</b>：顶上 <b>NADH＋H⁺ → NAD⁺</b>，交给标着 <b>FP</b> 的黄素蛋白，里面 <b>FMN → FMNH₂</b>；接着两个大圈是两个铁硫中心，标 <b>Fe₄S₄</b> 和 <b>Fe₂S₂</b>，圈里写着 <b>Fe³⁺ ⇄ Fe²⁺</b>；最右边 <b>2 QH· → 2 QH₂</b>；<b>底下一根箭头写 2 H⁺，指向 C。</b>'
    + '<br><br><b>看图要说的两句</b>：“Complex I is <b>NADH:ubiquinone oxidoreductase</b>. Its prosthetic groups are <b>FMN</b> and several <b>iron-sulfur centres</b>.”'
    + '<br>“The flavin carries <b>electrons together with protons</b>. The iron-sulfur centres carry <b>electrons only</b>. That is why the protons are left on the outside.”'
    + '<br><br>⚠ <b>别去背两个 FeS 的先后。</b>图上画的顺序跟正文读起来的顺序<b>对不太上</b>，而这本书在别处也有这类自相矛盾（见 <code>book/BOOK_ERRATA.md</code> 的做法）。<b>安全的答法是只说「有几个铁硫中心，质子在电子交给铁硫时被放到膜外」，不排先后。</b>他要是追，就把图指给他，说书自己在这里画得比写得清楚。<span class="pg">p141 p142 p143</span>',
  src2:'Biochemie, Obr. 6.7, p143 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'认',
  src:'img/p143_obr68_complex_iii.jpg',
  t:'复合物 III 的那个环 —— 两电子载体怎么接上单电子载体（书 Obr. 6.8）',
  cap:'<b>这张是「认」，图注末尾自己说了「为简单起见只画了一个电子的传递」。</b>还是 <b>M 在上、C 在下</b>。'
    + '<br><br><b>图上认三样东西就够</b>：'
    + '<br>① <b>上下叠着的两个大椭圆，标 b_K 和 b_T</b>——<b>那就是「两个 b 型细胞色素」</b>，书说它们<b>长在不同的多肽上，所以电位不同</b>。'
    + '<br>② 左边进来的 <b>QH₂</b>，中间的 <b>·QH</b>（<b>半醌</b>），右边的 <b>Q</b>。<b>同一个醌的三种状态都画出来了</b>：拿两个氢的、拿一个的、一个都不拿的。'
    + '<br>③ 右下角两个圈 <b>c₁</b> 和 <b>c</b>，在<b>膜的 C 侧</b>。图上一共四处 <b>H⁺</b> 标注。'
    + '<br><br><b>看图要说的两句</b>：“Ubiquinol carries <b>two</b> electrons. Cytochrome c takes <b>one</b>. The textbook says this cycle is what matches the two to each other.”'
    + '<br>“The quinone is oxidised in two one-electron steps through the <b>semiquinone</b>. A proton is let go at each step, and one electron goes back through the two b cytochromes.”'
    + '<br><br>⚠ <b>左边那个 「I,II→1e⁻」 的标注是说「电子来自复合物 I 或 II」</b>——<b>这就是两条路在这里合流的那一点</b>，也是为什么 III 的 4 个质子两条路都算得上。<b>指着这一处回答「succinate 的电子后来去哪了」。</b>',
  src2:'Biochemie, Obr. 6.8, p143 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'认',
  src:'img/p138_obr64_mitochondrion_with_caption.jpg',
  t:'链住在哪儿 —— 线粒体剖面（书 Obr. 6.4）',
  cap:'<b>这张是「认」，它是「地点」那一格的图。</b>图上四个捷克语缩写，图注里逐个解释过：<b>Mb1 ＝ 外膜 · Mb2 ＝ 内膜 · MMP ＝ 膜间隙 · Mx ＝ 基质</b>。内膜往里折的那些褶子是 <b>cristae</b>。'
    + '<br><br><b>看到图要说的三句</b>：“The chain and the synthase are in the <b>inner</b> membrane. The citric acid cycle runs in the <b>matrix</b> just inside it.”'
    + '<br>“It has to be the inner one. The <b>outer</b> membrane is freely permeable to small ions, so no proton gradient could be held across it.”'
    + '<br>“The folds, the <b>cristae</b>, are what give the inner membrane its area. More area means more chains and more synthase per mitochondrion.”'
    + '<br><br>⚠ <b>C 这个字母在这一章会让人误会。</b>书画链的那几张图上，<b>C 指的是胞质那一侧，也就是膜间隙</b>，不是整个细胞质。<b>质子被泵到的是 MMP 那条缝，不是细胞质。</b>',
  src2:'Biochemie, Obr. 6.4, p138 · 300 dpi 原图裁切，未修改（图注捷克语保留）'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is the respiratory chain?',
  ez:'“It is a series of electron carriers. They are built into the inner mitochondrial membrane. There are four complexes. Two mobile carriers move between them. It passes electrons from N A D H and F A D H two down to oxygen. And it uses the energy to pump protons out of the matrix. Its role is the last step of respiration. The hydrogen taken off the nutrients finally meets the oxygen. It becomes water. The oxidised coenzymes are regenerated at the same time.”',
  ezcn:'<b>呼吸链 ＝ 镶在线粒体内膜上的一串电子载体：四个复合物，中间两个可移动载体。</b><b>它把 NADH 和 FADH₂ 上的电子一路传到氧，并用这个过程的能量把质子泵出基质。</b><b>它在细胞呼吸里的角色是最后一步：从营养物上取下来的氢终于遇到氧、变成水；同时把氧化型辅酶再生出来，而它建起的梯度就是 ATP 合酶用来造 ATP 的东西。</b><b>四个复合物都是氧化还原酶，泛醌和细胞色素 c 在它们之间穿梭。</b>',
 mean:'<b>他嘴里多半只有这一句。</b>卷面写了 “describe … and its role in cellular respiration”，口试却从最短的问法起步——<b>剩下的结构要你自己接</b>：是什么 → 在哪 → 把什么变成什么 → 在呼吸里的角色 → 然后才是名字。',
 say:'“It is the series of electron carriers built into the inner mitochondrial membrane: four complexes with two mobile carriers between them. It passes the electrons from NADH and FADH₂ down to oxygen and uses the energy to pump protons out of the matrix. Its role in cellular respiration is the last step. The hydrogen taken off the nutrients finally meets the oxygen and becomes water. The oxidised coenzymes are regenerated, and the gradient it builds is what ATP synthase turns into ATP. The four complexes are all oxidoreductases, and ubiquinone and cytochrome c move between them.”'},

{q:'What is oxidative phosphorylation?',
  ez:'“It is the synthesis of A T P from A D P and inorganic phosphate. The proton gradient drives it. The chain built that gradient across the inner membrane. The protons flow back into the matrix through A T P synthase. That flow drives the release of the A T P. It is called oxidative for one reason. The energy comes from oxidising N A D H and F A D H two. It is called phosphorylation for another. The energy is spent adding a phosphate to A D P.”',
  ezcn:'<b>氧化磷酸化 ＝ 由 ADP 和无机磷酸合成 ATP，驱动力是呼吸链在内膜两侧建起的质子梯度。</b><b>质子经 ATP 合酶流回基质，这股流驱动 ATP 的释放。</b><b>「氧化」是因为能量来自氧化 NADH 和 FADH₂；「磷酸化」是因为这些能量花在给 ADP 接上一个磷酸。</b><b>书管它叫需氧磷酸化，并把六个质子折算成每个 NADH 约三个 ATP。</b>',
 mean:'<b>并进来的那道题（#26），会被单独问。</b>先给定义，再说它跟链的关系，最后才是数字。',
 say:'“It is the synthesis of ATP from ADP and inorganic phosphate, driven by the proton gradient the chain has built across the inner mitochondrial membrane. The protons flow back into the matrix through ATP synthase, and that flow drives the release of the ATP. Oxidative because the energy comes from oxidising NADH and FADH₂. Phosphorylation because it is spent adding a phosphate to ADP. The textbook calls it aerobic phosphorylation, and converts six protons into about three ATP per NADH.”'},

{q:'What is its role in cellular respiration?',
  ez:'“Cellular respiration is the complete oxidation of a nutrient. The products are carbon dioxide and water. Glycolysis takes some carbon off as carbon dioxide. So do the decarboxylation of pyruvate and the citric acid cycle. Beta oxidation does the same. They all park the hydrogen on N A D plus and F A D. The chain is where that hydrogen finally reaches the oxygen. It does two things. It regenerates the oxidised coenzymes. And it turns the energy into a proton gradient.”',
  ezcn:'<b>细胞呼吸 ＝ 把一个营养物完全氧化成 CO₂ 和水。</b><b>糖酵解、丙酮酸氧化脱羧、柠檬酸循环、β-氧化负责把碳以 CO₂ 的形式取走，并把氢寄存在 NAD⁺ 和 FAD 上。</b><b>呼吸链是那些氢最终遇到氧的地方，它做两件事：把氧化型辅酶再生出来（没有它，上面那些途径全停），以及把能量变成质子梯度。</b><b>每分子葡萄糖 38 个 ATP 里，有 34 个来自那个梯度。</b>',
 mean:'卷面上多出来的那半句，<b>他会单独问</b>。要答「它在整条路上的位置」，不是重复定义。',
 say:'“Cellular respiration is the complete oxidation of a nutrient to CO₂ and water. Glycolysis, the oxidative decarboxylation of pyruvate, the citric acid cycle and β-oxidation take the carbon off as CO₂ and park the hydrogen on NAD-plus and FAD. The chain is where that hydrogen finally reaches the oxygen. It does two things. It regenerates the oxidised coenzymes, without which all those pathways stop, and it turns the energy into a proton gradient. Thirty-four of the thirty-eight ATP per glucose come from that gradient.”'},

{q:'Describe the electron transport — what is actually being transported?',
  ez:'“Electrons are transported. And part of the way protons travel with them. N A D H gives two electrons to complex one. Complex one passes them to ubiquinone. Ubiquinone is a lipid soluble quinone. It carries two electrons with two protons inside the membrane. It takes them to complex three. Complex three passes them one at a time to cytochrome c. Cytochrome c sits on the outer face. It takes them to complex four. Complex four gives them to oxygen.”',
  ezcn:'<b>被运输的是电子，而且有一段路上质子跟着一起走。</b><b>NADH 把两个电子交给复合物 I，复合物 I 传给泛醌；泛醌是脂溶性的醌，在膜内部带着两个电子和两个质子移动，把它们送到复合物 III；复合物 III 一次一个地传给外表面的细胞色素 c；细胞色素 c 送到复合物 IV，复合物 IV 交给氧。</b><b>载体是交替的：有些带着质子一起搬电子，而铁硫中心和细胞色素只搬电子——正是这一点把质子留在了外面。</b>',
 mean:'卷面上的 “electron transport” 四个字。<b>他要的是：谁在动，动到哪。</b>',
 say:'“Electrons, and part of the way protons travel with them. NADH gives two electrons to complex one, which passes them to ubiquinone. Ubiquinone is a lipid-soluble quinone that carries two electrons with two protons inside the membrane. Ubiquinone takes them to complex three, which passes them one at a time to cytochrome c on the outer face. Cytochrome c takes them to complex four, which gives them to oxygen. The carriers alternate: some carry electrons with protons, the iron-sulfur centres and cytochromes carry electrons only — which is what leaves the protons outside.”'},

{q:'Which complexes pump protons, and how many?',
  ez:'“On this textbook’s account complex one pumps two protons. That is per pair of electrons. Complex three pumps four. Complex four pumps none. So it is six per N A D H. Succinate enters at complex two. Complex two pumps nothing. So that route gives four. Six protons correspond to about three A T P. Four correspond to about two. Modern textbooks count complex four as a pump too. That part is general and not from this book.”',
  ezcn:'<b>按这本书的算法：复合物 I 每对电子泵 2 个质子，复合物 III 泵 4 个，复合物 IV 不泵——每个 NADH 共 6 个。</b><b>琥珀酸从复合物 II 进来，复合物 II 不泵，所以那条路只有 4 个。</b><b>6 个质子对应约 3 个 ATP，4 个对应约 2 个。</b>⚠ <b>现代教材把复合物 IV 也算作泵，每个 NADH 10 个质子，按每个 ATP 约 4 个质子算就是 2.5 和 1.5——这一段是通用的，不是这本书的，报的时候要分开说。</b>',
 mean:'<b>要数字的问法。</b>先给书的数，再说明现代值差在哪——不要只给一个数。',
 say:'“On this textbook’s account, complex one pumps two protons per pair of electrons, complex three four, complex four none — six per NADH. Succinate enters at complex two, which pumps nothing, so that route gives four. Six protons correspond to about three ATP, four to about two. Modern textbooks count complex four as a pump too, ten protons per NADH, which with about four protons per ATP gives 2.5 and 1.5. That part is general, not from this book.”'},

{q:'How are the chain and the ATP synthesis coupled together?',
  ez:'“Only through the proton gradient. The chain pumps protons out of the matrix. They go into the intermembrane space. So a difference in proton concentration builds across the membrane. A T P synthase lets them back in. And it uses that flow. No chemical intermediate passes between the two. That is the chemiosmotic principle. An uncoupler shows it well. It simply leaks protons back. So A T P synthesis stops. And the chain runs faster than ever.”',
  ezcn:'<b>只通过质子梯度耦合。</b><b>呼吸链把质子从基质泵进膜间隙，于是膜两侧建立起质子浓度差；ATP 合酶让它们流回来，并利用这股流。</b><b>两者之间没有任何化学中间物传递——这就是化学渗透原理。</b><b>解偶联剂正好说明这一点：它只是让质子漏回去，于是 ATP 合成停了，而呼吸链跑得比任何时候都快。</b><b>区室要说清：链在内膜、循环在基质、质子被泵进膜间隙。</b>',
 mean:'<b>这是 #26 真正的考点</b>，也是「化学渗透」该出现的地方。顺带把区室说清：链在<b>内膜</b>，循环在<b>基质</b>，质子被泵进<b>膜间隙</b>。',
 say:'“Only through the proton gradient. The chain pumps protons out of the matrix into the intermembrane space and builds a transmembrane difference in proton concentration. ATP synthase lets them back in and uses the flow. No chemical intermediate passes between them. That is the chemiosmotic principle. It is also why an uncoupler, which simply leaks protons back, stops ATP synthesis while the chain runs faster than ever.”'},

{q:'Why does cyanide kill you so quickly?',
  ez:'“Because it blocks cytochrome oxidase. That is the last complex of the chain. So oxygen can no longer take the electrons. Everything upstream stays reduced. No protons are pumped. And oxidative phosphorylation stops. That is thirty four of the thirty eight A T P per glucose. Glycolysis keeps running. But two per glucose is nowhere near enough. Brain and heart cannot live on that. The striking part is the blood. It stays oxygenated.”',
  ezcn:'因为<b>它阻断细胞色素氧化酶——呼吸链的最后一个复合物，于是氧再也接不走电子</b>。<b>上游全都停在还原态，质子不再被泵，氧化磷酸化停摆：每分子葡萄糖 38 个 ATP 里没了 34 个。</b><b>糖酵解照样跑，但每分子葡萄糖两个 ATP 对大脑和心脏差得太远。</b><b>最触目的一点是血还是含氧的——氧就在那里，细胞用不了。</b>⚠ <b>氰化物是通用知识，这本书里没有。</b>', odd:1,
 mean:'<b>听起来像毒理学题。</b>答案全在这张卡上——这种入口最容易把人问懵。',
 say:'“Because it blocks cytochrome oxidase, the last complex of the chain, so oxygen can no longer take the electrons. Everything upstream stays reduced, no protons are pumped, and oxidative phosphorylation stops — thirty-four of the thirty-eight ATP per glucose. Glycolysis keeps running, but two per glucose is nowhere near enough for brain and heart. The striking part is that the blood stays oxygenated: the oxygen is there, the cell cannot use it. Cyanide is general knowledge, not in this textbook.”',
 tail:'<b>卡 gly 也有这一条</b>，从糖酵解那一侧答。两边说的是同一件事：糖酵解不停，但它不够。'},

{q:'Why do we need to breathe oxygen at all?',
  ez:'“Because oxygen is the final electron acceptor. Every oxidation in metabolism hands two electrons to a coenzyme. And the pool of coenzyme is small. So the cell must unload them somewhere. That is how it gets N A D plus back. The chain unloads them onto oxygen. Oxygen sits at the positive end of the scale. It is plus zero point eight two volts. N A D H is minus zero point three two. Without oxygen the carriers stay reduced.”',
  ezcn:'因为<b>氧是最终电子受体</b>。<b>代谢里每一次氧化都把一对电子交给某个辅酶，而辅酶的池子很小，细胞必须把它们卸到某个地方，才能把 NAD⁺ 拿回来。</b><b>呼吸链卸给的就是氧，因为氧坐在电位标尺的正端：＋0.82 V，而 NADH 是 −0.32 V。</b><b>没有氧，载体一直是还原态，辅酶再生不出来，整个循环停下——不是因为氧跟营养物反应，而是因为没有别的东西接得走电子。</b>', odd:1,
 mean:'<b>最朴素的问法，最容易答得空。</b>要落在「最后的电子受体」上。',
 say:'“Because oxygen is the final electron acceptor. Every oxidation in metabolism hands a pair of electrons to a coenzyme, and the pool of coenzyme is small. The cell must unload them somewhere to get NAD-plus back. Oxygen is what the chain unloads them onto, because it sits at the positive end of the scale: plus 0.82 volts against minus 0.32 for NADH. Without it the carriers stay reduced, the coenzymes are not regenerated, and the cycle stops. Not because oxygen reacts with the nutrient, but because nothing else can take the electrons.”'},

{q:'Why do you breathe faster when you run?',
  ez:'“Because the muscle is spending A T P. Spending A T P means producing A D P. And A D P is what limits the chain. The textbook uses this as its example. It is regulation by a limiting metabolite. With more A D P the synthase lets more protons through. So the gradient falls. Electron transport then speeds up. And more oxygen is consumed. So the demand for A T P pulls the oxygen in.”',
  ezcn:'因为<b>肌肉在花 ATP，而花 ATP 就等于在生产 ADP——限制呼吸链的正是 ADP</b>。<b>书把「呼吸链的磷酸化」当作「限制性代谢物调节」的例子。</b><b>ADP 一多，合酶放更多质子过去，梯度落下来，电子传递随之加快，耗氧增加。</b><b>所以是「对 ATP 的需求把氧拉进来」，不是「氧把 ATP 推出去」。</b>⚠ <b>后半句（梯度落下去、传递加速）是通用推论，书只写了「限制因素是 ADP 够不够」。</b>', odd:1,
 mean:'<b>生理学入口，生化答案。</b>答在 ADP 上——书自己说限速的是 ADP。',
 say:'“Because the muscle is spending ATP, which means producing ADP. And ADP is what limits the chain. The textbook gives phosphorylation in the respiratory chain as its example of regulation by a limiting metabolite: with more ADP the synthase lets more protons through, the gradient falls, electron transport speeds up and more oxygen is consumed. So the demand for ATP pulls the oxygen in, rather than the oxygen pushing the ATP out.”',
 tail:'后半句（梯度落下去、传递加速）是<b>通用</b>推论；书只写了「限制因素是 ADP 够不够」。<span class="pg">p222</span>'},

{q:'Why is brown fat warm?',
  ez:'“Because in brown fat the chain is deliberately uncoupled. It is uncoupled from A T P synthesis. A protein in the inner membrane does it. That protein is thermogenin. It lets protons back into the matrix. They do not pass through A T P synthase. So the gradient is spent as heat. And the chain runs fast to keep rebuilding it. Two four dinitrophenol does the same thing chemically. That is why it was lethal as a diet pill.”',
  ezcn:'因为<b>棕色脂肪里，呼吸链是被故意跟 ATP 合成解偶联的</b>。<b>内膜上的一个蛋白——解偶联蛋白（thermogenin）——让质子绕过 ATP 合酶直接回到基质，于是梯度被当作热花掉，而呼吸链为了不断重建它就跑得飞快。</b><b>2,4-二硝基苯酚在化学上做的是同一件事，这也是它当减肥药会致命的原因。</b>⚠ <b>通用知识：这本书既没有解偶联剂也没有棕色脂肪。</b>', odd:1,
 mean:'<b>听起来像生理题，其实问的是耦合。</b>解偶联那一格的现成出口。',
 say:'“Because in brown fat the chain is deliberately uncoupled from ATP synthesis. A protein in the inner membrane, thermogenin, lets protons back into the matrix without passing through ATP synthase, so the gradient is spent as heat and the chain runs fast to keep rebuilding it. It is what 2,4-dinitrophenol does chemically — which is why it was lethal as a diet pill. That is general knowledge. This textbook has neither uncouplers nor brown fat.”'},

{q:'Why is the inner membrane of a mitochondrion folded?',
  ez:'“Because the machinery is in the membrane. It is not in solution. So membrane area limits how much A T P one mitochondrion can make. Folding multiplies that area. And the organelle does not get bigger. The folds also enclose a small intermembrane space. So the protons pumped out raise the concentration there quickly. The textbook makes a related remark. Membranes are specialised. Only the inner mitochondrial membrane produces A T P.”',
  ezcn:'因为<b>机器长在膜上，不在溶液里</b>——<b>所以一个线粒体能造多少 ATP 受膜面积限制，而折叠在不把细胞器变大的前提下把面积翻了上去。</b><b>这些褶皱还围出一个很小的膜间隙，于是泵出去的质子能很快把那里的浓度提上来。</b><b>书自己的相关说法是：各种膜是特化的，只有线粒体内膜负责生产 ATP。</b>⚠ <b>cristae 这个词书里 0 命中，说的时候用 folds，被追问再给名字。</b>', odd:1,
 mean:'<b>形态学入口。</b>答面积和区室两件事，落回「膜是专门化的」。',
 say:'“Because the machinery is in the membrane, not in solution. So how much ATP a mitochondrion can make is limited by membrane area, and folding multiplies the area without making the organelle bigger. The folds also enclose a small intermembrane space, so the protons pumped out raise the concentration there quickly. The textbook’s own remark is that membranes are specialised, and that only the inner mitochondrial membrane is responsible for producing ATP.”',
 tail:'「cristae」这个词书里 0 命中，所以用 folds 说，被问再给名字。<span class="pg">p197</span>'},

{q:'Cells die without oxygen, but glycolysis does not need oxygen — so why do they die?',
  ez:'“There are two reasons. The first is arithmetic. Glycolysis alone gives two A T P per glucose. The textbook’s total is thirty eight. Brain and heart cannot run on two. The second reason is more fundamental. Glycolysis needs N A D plus back. Without the chain there is only one way to regenerate it. Pyruvate must be reduced to lactate. In yeast it goes to ethanol. That works. But it throws away most of the energy.”',
  ezcn:'<b>两个理由。</b><b>① 算术：单靠糖酵解每分子葡萄糖只有 2 个 ATP，而书给的总数是 38——大脑和心脏靠 2 个活不了。</b><b>② 更根本的：糖酵解需要把 NAD⁺ 拿回来。</b><b>没有呼吸链，唯一的再生办法是把丙酮酸还原成乳酸（酵母里是乙醇）。</b><b>这办法管用，但它把大部分能量扔掉了：葡萄糖 → 乳酸是 −196.6 kJ/mol，完全氧化是 −2870。</b>', odd:1,
 mean:'<b>这个入口专门用来把人问懵。</b>答案有两层：够不够，和 NAD⁺ 回不回得来。',
 say:'“Two reasons. First, arithmetic: glycolysis alone gives two ATP per glucose against the textbook’s thirty-eight, and brain and heart cannot run on that. Second, and more fundamental, glycolysis needs NAD-plus back. Without the chain the only way to regenerate it is to reduce pyruvate to lactate, or to ethanol in yeast. That works, but it throws away most of the energy: minus 196.6 kJ per mole for glucose to lactate against minus 2870 for complete oxidation.”',
 tail:'数字见卡 <b>gly</b> 和书 <span class="pg">p135 p136</span>。'}
],

/* ---------------- 追问 ---------------- */
ask:[
 {g:'⚠ 线粒体自己的那套东西', gn:'⚠ <b>2026-09-23 审查补的。</b><code>mitochondrial D N A</code>／<code>endosymbio</code>／<code>maternal</code> 在<b>全书和全套卡上都是 0 命中</b>。<b>而「线粒体为什么有自己的 DNA」是呼吸链这道题最经典的一条外延</b> —— 他讲完复合物，往外走一步就是这里。', items:[
{r:'中', q:'Why does a mitochondrion have its own DNA?',
    ez:'“Because it used to be a free living bacterium. That is the endosymbiotic theory. An early cell took in an aerobic bacterium. The bacterium stayed and kept its own genome. Most of its genes moved to the nucleus over time. A few stayed behind. The human mitochondrial genome is circular. It carries thirty seven genes. Thirteen of them are subunits of the respiratory chain. The rest are transfer R N As and ribosomal R N As. The evidence is in the machinery. Mitochondrial ribosomes are bacterial in type. The genome is inherited from the mother alone.”',
    ezcn:'<b>因为它原本是一个独立生活的细菌——这就是<b>内共生学说</b>。</b><b>早期的细胞吞下了一个好氧细菌，这个细菌留了下来，<b>带着自己的基因组</b>；后来它的大部分基因搬进了细胞核，<b>只剩少数留在原地</b>。</b><b>人的线粒体基因组是<b>环状</b>的，带 <b>37 个基因</b>：其中 <b>13 个是呼吸链的亚基</b>，其余是 tRNA 和 rRNA。</b>⚠ <b>证据就在机器本身：<b>线粒体的核糖体是细菌型的</b>；而且<b>这套基因组只从母亲那里传下来</b>。</b>',
 en:'“Because it was once a free-living bacterium, which is the endosymbiotic theory. An early cell took in an aerobic bacterium, the bacterium stayed and kept its own genome, and over time most of its genes moved to the nucleus while a few stayed behind. The human mitochondrial genome is circular and carries thirty-seven genes, of which thirteen are subunits of the respiratory chain and the rest are transfer RNAs and ribosomal RNAs. The evidence is in the machinery, because mitochondrial ribosomes are bacterial in type, and the genome is inherited from the mother alone. None of this is in the textbook.”',
 cn:'⚠ <b>整条 general</b>：<code>mitochondrial DNA</code>、<code>endosymbio</code>、<code>maternal</code> 在书上和卡上<b>都是 0 命中</b>。<br><br><b>为什么值得记</b>：这一条把这张卡的<b>十三个亚基</b>变成一件有来历的事 —— <b>呼吸链是唯一一套由两个基因组共同编码的复合物</b>，大部分亚基来自细胞核，十三个来自线粒体自己。<br><br>⚠ <b>留一个口子，不要多讲</b>：线粒体基因的突变会引起疾病（如 LHON、MELAS），而且因为母系遗传，家系图看起来跟孟德尔遗传不一样。<b>说到这里停</b>，那是遗传学不是生化。'},
 ]},
{g:'定义类', gn:'逐字稿里没交代完的名词，他会一个一个拎出来问。', items:[
{r:'高', q:'What is a redox potential?',
    ez:'“It is a number in volts. It says how strongly a redox pair holds its electrons. It is measured against a standard electrode at p H seven. A value can be very negative. Then that system gives electrons away readily. And electrons pass spontaneously in one direction. They pass from the more negative system to the more positive one.”',
    ezcn:'<b>氧化还原电位 ＝ 一个以伏特为单位的数，说的是某一对氧化还原物质抓电子抓得有多紧</b>（<b>在 pH 7 下对标准电极测的</b>）。<b>值越负，那个体系越容易把电子给出去</b>；<b>而电子自发的流向是：从更负的体系流向更正的体系。</b>',
 en:'“A number in volts saying how strongly a redox pair holds its electrons, measured against a standard electrode at pH 7. The more negative, the more readily that system gives electrons away — and electrons pass spontaneously from the more negative system to the more positive one.”',
 cn:'Table 6.2 <span class="pg">p135</span>，<b>已回 300 dpi 核过</b>，从 acetaldehyde 的 −0,60 排到氧的 +0,82。被追「跟 ΔG 什么关系」——同一页给了桥：ΔG°′ = −nFΔE°′；E 轴有约定原点（生物系统里氢电极 −420 mV），ΔG 轴没有，只能配给<b>电位差</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG°′ = −nFΔE°′</code>（书 p135）——它只能配给<b>差</b>，配给单个 E 没有意义。<br><br><b>两步看懂为什么</b>：<br>① E 轴的原点是<b>人为约定</b>的：氢电极被定成 0 V（那是 pH 0），换到 pH 7 它自己就成了 <b>−420 mV</b>。<b>原点换一个，表上每个数都跟着变。</b><br>② 而 ΔE 是<b>两个数相减</b>：原点在相减时被消掉了。所以海平面定在哪儿，落差都不变，能量也不变。<br><br><br><b>=== 一句话理解 ===</b><br><b>电位像海拔</b>：说「这里 800 米」之前得先有人定一个海平面，而<b>「从 800 米降到 200 米能做多少功」不需要海平面</b>。能量只认落差，所以式子里永远是 ΔE。<br>再往前一步：<code>ΔG°′ = −nFΔE°′</code> 和 <code>ΔG°′ = −RT ln K</code>（通用）是同一个 ΔG 的两种量法，一种量<b>电位差</b>，一种量<b>平衡位置</b>。<b>所以标准电位就是电子的 K<sub>d</sub></b>——这一句直接走进卡 02。'},
{r:'高', q:'What is a prosthetic group, and which ones are in the chain?',
    ez:'“A prosthetic group is a cofactor bound permanently to the protein. A coenzyme is different. A coenzyme comes and goes. The chain has four kinds. First, flavins. F M N is in complex one. F A D is in complex two. Second, iron sulfur centres. That is non heme iron held by cysteine sulfurs. Third, hemes. That is iron in a porphyrin ring. They are in cytochromes b, c one, c, a and a three. And fourth, copper in complex four.”',
    ezcn:'<b>辅基 ＝ 永久结合在蛋白上的辅因子</b>（<b>辅酶则是来来去去的</b>）。<b>呼吸链里有四类</b>：<b>黄素</b>（<b>复合体 Ⅰ 里是 FMN，Ⅱ 里是 FAD</b>）· <b>铁硫中心</b>（<b>非血红素铁，由半胱氨酸的硫抓着</b>）· <b>血红素</b>（<b>卟啉环里的铁，在细胞色素 b、c₁、c、a、a₃ 里</b>）· <b>复合体 Ⅳ 里的铜</b>。',
 en:'“A cofactor bound permanently to the protein, unlike a coenzyme that comes and goes. The chain has four kinds. <b>Flavins</b>: FMN in complex one, FAD in two. <b>Iron-sulfur centres</b>, non-heme iron held by cysteine sulfurs. <b>Hemes</b>, iron in a porphyrin ring, in cytochromes b, c₁, c, a and a₃. And <b>copper</b> in complex four.”',
 cn:'全部在书里：黄素 <span class="pg">p045</span>、血红素与五种细胞色素 <span class="pg">p046</span>、FeS 的三种结构（线型、Fe₂S₂ 平面、Fe₄S₄ 立体）<span class="pg">p046</span>、铜 <span class="pg">p144</span>。<b>「辅基 vs 辅酶」本身就是一道小题</b>，顺手答掉。'},
{r:'中', q:'What is ubiquinone, and why must it be lipid-soluble?',
  ez:'“It is coenzyme Q. It is a small quinone, not a protein. It carries two electrons together with two protons. It must be lipid soluble because of its job. Its job is to move inside the membrane. It goes from complex one or two across to complex three. The textbook calls it the intermediary. It sits between the flavoproteins and the cytochromes.”',
  ezcn:'<b>泛醌就是辅酶 Q：一个小的醌，不是蛋白，一次带两个电子连同两个质子。</b><b>它必须脂溶，是因为它的活儿就是在膜内部移动——从复合物 I 或 II 横过去到复合物 III。</b><b>书称它是黄素蛋白和细胞色素之间的中介。</b>',
 en:'“Coenzyme Q — a small quinone, not a protein, carrying two electrons together with two protons. It must be lipid-soluble because its job is to move <b>inside</b> the membrane, from complex one or two across to complex three. The textbook calls it the intermediary between the flavoproteins and the cytochromes.”',
 cn:'<span class="pg">p045 p142</span>。书说它「因为疏水所以自由移动」，并在醌、半醌、氢醌三态之间循环。植物里对应的是 <b>plastoquinone</b>——<b>这一句直接接到光合那道题</b>（#27）。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方 —— 他插刀就插在这里。', items:[
{r:'高', q:'Why does complex II not pump protons?',
    ez:'“Because that step releases too little energy. Succinate to ubiquinone is zero point zero seven volts. N A D H into the same acceptor is zero point four two. Use the textbook’s equation. Delta G equals minus n F delta E. That gives about fourteen kilojoules per mole against eighty one. And the book says energy is captured in quanta. Those quanta are about thirty kilojoules.”',
    ezcn:'因为<b>那一步放出的能量太少</b>。<b>琥珀酸到泛醌只有 0.07 V，而 NADH 到同一个受体是 0.42 V</b>。<b>用书的公式 ΔG ＝ −nFΔE 算，大约是 14 kJ/mol 对 81 kJ/mol</b>——<b>而书说能量是以大约 30 kJ 一份的「量子」被捕获的。</b>',
 en:'“Because that step releases too little energy. Succinate to ubiquinone is 0.07 volts. NADH into the same acceptor is 0.42. Through the textbook’s equation, ΔG equals minus n F ΔE, that is about 14 kJ per mole against 81. And the book says energy is captured in quanta of about 30.”',
 cn:'电位、式子和 30 kJ 的量子都在 <span class="pg">p135</span>；<b>换算是我们做的，书只给了结果</b>（走 II 那条路只有 4 个质子，p145）。报的时候说「按你这本书的表和式子算」。'},
{r:'高', q:'How does passing an electron move a proton across the membrane?',
    ez:'“Through the alternation of two kinds of carrier. N A D plus, F M N and quinone carry electrons together with protons. Iron sulfur centres and cytochromes carry electrons only. So take a proton carrying form. It is oxidised by an electron only carrier. That happens on the outer side. Then the protons are left outside. And the electrons travel on. Each carrier also has a fixed place. So the transfer has a direction.”',
    ezcn:'<b>靠两类载体交替出现。</b><b>NAD⁺、FMN、醌是「连着质子一起搬电子」的；铁硫中心和细胞色素只搬电子</b>。<b>所以当一个带着质子的形式在外侧被一个「只搬电子」的载体氧化时，质子就被留在外面，电子自己往下走</b>。<b>而且每个载体的位置是固定的，所以整个传递是有方向的。</b>',
 en:'“Through the alternation of two kinds of carrier. NAD-plus, FMN and quinone carry electrons together with protons. Iron-sulfur centres and cytochromes carry electrons only. So when a proton-carrying form is oxidised by an electron-only carrier on the outer side, the protons are left outside while the electrons travel on. And each carrier has a fixed place, so the transfer has a direction.”',
 cn:'<span class="pg">p142</span>。<b>书用的词是「表观的」（apparent），那一页印的就是这个词</b>：质子不是被一台泵抽过去的，是被交替的载体在两侧一取一放<b>搬</b>过去的。<b>「pump」这个词本身不解释任何事，这一句才解释。</b>'},
{r:'高', q:'Why is the yield “about” three ATP and not a whole number?',
    ez:'“Because nothing in the mechanism requires a whole number. The chain pumps a certain number of protons. The synthase needs a certain number per A T P. And the two counts are independent. Six protons and roughly three A T P is a ratio. It is not a stoichiometry. The textbook itself writes approximately three.”',
    ezcn:'因为<b>机制里没有任何东西要求它是整数</b>。<b>呼吸链泵出去的质子数是一个数，ATP 合酶每做一个 ATP 需要的质子数是另一个数，两者互相独立</b>。<b>「六个质子、大约三个 ATP」是一个比值，不是化学计量</b>。<b>书自己写的就是「约三个」。</b>',
 en:'“Because nothing in the mechanism requires a whole number. The chain pumps a certain number of protons, the synthase needs a certain number per ATP, and the two counts are independent. Six protons and roughly three ATP is a ratio, not a stoichiometry. The textbook itself writes <b>approximately</b> three.”',
 cn:'书 p146 印的正是「approximately 3 ATP」「about 2 ATP」。现代值：约 10 个质子/NADH、约 4 个质子/ATP（3 个转动 ＋ 1 个把磷酸运进来）→ <b>2.5 和 1.5</b>，<b>书里 0 命中，标 general</b>。这条同时回答「为什么现代教材说 30–32」；另一半原因（胞质 NADH 要穿梭进来）见卡 <b>gly</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>一个还原辅酶值几个 ATP ＝ 泵出去的质子数 ÷ 造一个 ATP 花掉的质子数</code><br><b>这是个汇率，不是化学计量。</b>分子和分母是两次互不相干的点数，它们<b>没有任何理由</b>正好整除。<br><br><b>两套数各自怎么来的</b>：<br>① <b>书（经典）</b>：分子 <code>6</code>（I 泵 2 ＋ III 泵 4 ＋ IV 不泵），结果是 3 个 ATP，反推出单价约 <b>2 个质子一个 ATP</b>；FADH₂ <code>4 ÷ 2 = 2</code>。<br>② <b>现代（general，书里 0 命中）</b>：分子 <code>10</code>（I 泵 4 ＋ III 泵 4 ＋ <b>IV 也泵 2</b>），分母 <code>4</code>——其中 <b>3 个用来转合酶</b>（F₁ 上有三个 β 催化位点，中轴转一整圈松出三个 ATP），<b>1 个用来把 Pᵢ 连着质子一起运进基质</b>。<br>③ 于是 <code>10 ÷ 4 = 2,5</code>，FADH₂ <code>6 ÷ 4 = 1,5</code>；一分子葡萄糖从 38 掉到 <b>30–32</b>。<br><br><br><b>=== 一句话理解 ===</b><br><b>2,5 不是「两个半 ATP」这种怪东西，它是个汇率：十份收入除以四份单价。</b>链和合酶之间没有任何化学键把两边锁成整数比，中间只隔着<b>一池子质子</b>——泵的那头不知道取的那头一次要舀几个。<br>所以问「一个 NADH 到底几个 ATP」，就像问「<b>一百块钱到底是几件衣服</b>」：答案取决于衣服的单价，不取决于这一百块。<b>书自己用的词就是「approximately（大约）」——那不是含糊，那是诚实。</b>'},
{r:'中', q:'Why does everything stop when oxygen runs out?',
  ez:'“Because the chain is a queue with one exit. No oxygen means nothing takes the electrons. So complex four stays reduced. And so does everything upstream. No carrier can pass an electron to a full one. No electron flow means no gradient. No gradient means no A T P. And N A D plus is never regenerated. So the dehydrogenases have nowhere to put their hydrogen.”',
  ezcn:'因为<b>这条链是一个只有一个出口的队列</b>。<b>没有氧，就没人接走电子：复合物 IV 一直是还原态，它上游的一切也是；而没有哪个载体能把电子递给一个已经满了的载体。</b><b>没有电子流就没有梯度，没有梯度就没有 ATP；而且 NAD⁺ 永远再生不出来，脱氢酶手上的氢没地方放。</b>',
 en:'“Because the chain is a queue with one exit. With no oxygen to take the electrons, complex four stays reduced and so does everything upstream. No carrier can pass an electron to one that is already full. No electron flow means no gradient and no ATP. And NAD-plus is never regenerated, so the dehydrogenases have nothing to hand their hydrogen to.”',
 cn:'<b>这条把「氧是最后的电子受体」讲成了机制</b>，比重复定义有力。<b>停的直接原因是 NAD⁺ 不够，不是氧不够</b>——他要是追，就说这一句。'}
]},

{g:'怎么发现的', gn:'书里一个字都没有，全部 general —— 但正因为没有，说得出就特别显眼。', items:[
{r:'中', q:'Where does the chemiosmotic idea come from?',
  ez:'“It comes from Peter Mitchell, in nineteen sixty one. Before that people hunted for a chemical intermediate. It was supposed to be a high energy one. It would link oxidation to A T P synthesis. It was never found. The reason is that there is none. The intermediate is not a molecule. It is a gradient across a membrane. He was given the Nobel Prize in nineteen seventy eight.”',
  ezcn:'<b>来自 Peter Mitchell，1961 年。</b><b>在那之前人们一直在找一个把氧化和 ATP 合成连起来的「高能化学中间物」，始终没找到——因为根本没有：那个中间物不是一个分子，是跨膜的一个梯度。</b><b>他 1978 年获诺贝尔奖。</b>',
 en:'“From Peter Mitchell, in 1961. Before that people were hunting for a chemical high-energy intermediate linking oxidation to ATP synthesis, and it was never found. Because there is none: the intermediate is not a molecule but a gradient across a membrane. He was given the Nobel Prize in 1978.”',
 cn:'全书 grep：Mitchell 0、chemiosmot 0，<b>但原理写全了</b>（<span class="pg">p141</span>）。说的时候补一句 “general knowledge, and the textbook states the principle without the name”。<b>「人们找了很久那个化学中间体，因为它根本不存在」是这道题最好的历史。</b>'},
{r:'中', q:'What is an uncoupler, and what does it prove?',
  ez:'“An uncoupler is a lipid soluble weak acid. Two four dinitrophenol is the example. It picks up a proton on one side of the membrane. It releases it on the other. So it short circuits the gradient. The chain then runs faster than ever. No A T P is made. And the energy comes out as heat. It proves one thing. The two halves are connected only by the gradient.”',
  ezcn:'<b>解偶联剂 ＝ 一种脂溶性的弱酸（例子是 2,4-二硝基苯酚）：在膜的一侧接一个质子，到另一侧把它放掉，于是把梯度短路了。</b><b>结果是呼吸链跑得比任何时候都快、一个 ATP 也不产、能量全以热的形式出来。</b><b>它证明的正是那一点：两半之间唯一的连接就是那个梯度。</b>',
 en:'“A lipid-soluble weak acid such as 2,4-dinitrophenol that picks up a proton on one side of the membrane and releases it on the other, short-circuiting the gradient. The chain then runs faster than ever, no ATP is made, and the energy comes out as heat. It proves that the two halves are connected only by the gradient.”',
 cn:'general，书里 0 命中。<b>成对使用才有力</b>：oligomycin 只挡合酶却也挡住了电子传递（说明耦合），加解偶联剂电子传递又跑起来（说明耦合走的是梯度）。棕色脂肪用 thermogenin 做同一件事。'}
]},

{g:'陷阱', gn:'这几条几乎每次都会被问，而且都是一句话说错就掉分的那种。', items:[
{r:'高', q:'So the respiratory chain makes the ATP?',
    ez:'“No. The chain makes a gradient. A T P synthase makes the A T P. The textbook is explicit. Complex five is unlike all the others. It is not an oxidoreductase. It is a phosphorylating enzyme. And it is the only one where protons move with the gradient. So anything that leaks protons back stops the A T P. It does not stop the chain.”',
    ezcn:'<b>不是。呼吸链造的是梯度，造 ATP 的是 ATP 合酶。</b>书说得很明确：<b>复合体 Ⅴ 跟其余所有的都不同——它不是氧化还原酶，是磷酸化酶，而且它是唯一一个「质子顺着梯度走」的地方</b>。<b>所以任何让质子漏回去的东西都会停掉 ATP，却不会停掉呼吸链。</b>',
 en:'“No. The chain makes a <b>gradient</b>. ATP synthase makes the ATP. The textbook is explicit: complex five, unlike all the others, is not an oxidoreductase but a phosphorylating enzyme, and it is the only one where protons move <b>with</b> the gradient. Anything that leaks protons back stops the ATP without stopping the chain.”',
 cn:'<span class="pg">p145 p146</span>。<b>这是这道题最常见的说错。</b>说 “the chain produces ATP” 就等于承认没分清两半。'},
{r:'高', q:'Which way do the protons go?',
    ez:'“Out of the matrix. They go into the intermembrane space. Complexes one and three pump them against their gradient. The textbook calls the intermembrane space the cytosolic side. Then they come back in. They come back through A T P synthase, with the gradient. That levels the difference out again. In the chloroplast it is the other way round. There protons are pumped into the thylakoid.”',
    ezcn:'<b>从基质里泵出去，泵进膜间隙</b>（<b>由复合体 Ⅰ 和 Ⅲ 逆着梯度泵，书把膜间隙叫做「胞质侧」</b>）；<b>然后顺着梯度经 ATP 合酶回来，把这个差值重新抹平</b>。<b>叶绿体里是反过来的：质子被泵进类囊体腔。</b>',
 en:'“<b>Out</b> of the matrix, into the intermembrane space, pumped against their gradient by complexes one and three. The textbook calls the intermembrane space the cytosolic side. Then back <b>in</b> through ATP synthase, with the gradient, which levels the difference out again. In the chloroplast it is the other way round: protons are pumped into the thylakoid.”',
 cn:'<span class="pg">p142 p146</span>；类囊体方向相反见 <span class="pg">p208</span>（书自己把两者并排讲了）。<b>方向说反了，整台机器就反了。</b>'},
{r:'中', q:'Is oxygen a reactant that gets burned?',
  ez:'“No. Oxygen never meets the nutrient. It sits at the end of the chain. It is the final electron acceptor there. Cytochrome oxidase gives it electrons. It becomes oxide ions. Those take up protons from the matrix. That gives water. The carbon left much earlier. It left as carbon dioxide. So the carbon dioxide we breathe out never meets the oxygen we breathe in.”',
  ezcn:'⚠ <b>不是。氧从来没有跟营养物见过面。</b><b>它坐在链的末端当最终电子受体：细胞色素氧化酶把电子交给它，它变成氧离子，再从基质里拿走质子生成水。</b><b>而碳早在很久以前就以 CO₂ 的形式离开了——所以我们呼出的 CO₂ 和吸进的 O₂ 从来没有相遇。</b>',
 en:'“No. Oxygen never meets the nutrient. It sits at the end of the chain as the final electron acceptor: cytochrome oxidase gives it electrons, it becomes oxide ions, and those take up protons from the matrix to give water. The carbon left much earlier as CO₂ — so the CO₂ we breathe out and the O₂ we breathe in never meet.”',
 cn:'<b>最后半句是很好用的一击。</b>式子 ½ O₂ + 2 e⁻ + 2 H⁺ → H₂O（<span class="pg">p144</span>）。这里造的水就是所谓<b>代谢水</b>：葡萄糖氧化总式里那六个水几乎全部出自这一步（<b>这半句是通用说法</b>，书只给总式）。'},
{r:'中', q:'Does NADPH go into the respiratory chain too?',
  ez:'“No, and the textbook says so directly. The N A D P H from the pentose phosphate pathway is not oxidised there. It is used for synthetic reactions instead. The two differ by one phosphate. That phosphate sits on the ribose. And the cell keeps them for different jobs. N A D H serves catabolism and the chain. N A D P H serves reductive biosynthesis.”',
  ezcn:'⚠ <b>不进，书直说了：戊糖磷酸途径来的 NADPH「不在呼吸链里被氧化，而是用于合成反应」。</b><b>两者只差核糖上的一个磷酸，而细胞把它们留给不同的活：NADH 服务分解代谢和呼吸链，NADPH 服务还原性的生物合成。</b>',
 en:'“No — and the textbook says so directly: the NADPH from the pentose phosphate pathway is not oxidised in the respiratory chain but used for synthetic reactions. The two differ by one phosphate on the ribose, and the cell keeps them for different jobs — NADH for catabolism and the chain, NADPH for reductive biosynthesis.”',
 cn:'<span class="pg">p219</span>。<b>价值在于「一个磷酸就把两条路分开了」</b>——这类「结构上的小差别 = 功能上的大分工」正是他喜欢的。'}
]},

{g:'相邻考点', gn:'从这道题走出去，他多半走这三个方向。每个一句话就能接住。', items:[
{r:'高', q:'Where do the NADH and FADH₂ come from?',
    ez:'“The textbook lists four sources. First, the four dehydrogenation steps of the citric acid cycle. Second, the oxidative decarboxylation of pyruvate. Third, the beta oxidation of fatty acids. Fourth, glyceraldehyde three phosphate dehydrogenation. That fourth one happens when glycolysis runs aerobically. The cycle is much the largest supplier. And it runs in the matrix. It runs right beside the membrane.”',
    ezcn:'书列了四个来源：<b>① 柠檬酸循环的四个脱氢步骤</b>；<b>② 丙酮酸的氧化脱羧</b>；<b>③ 脂肪酸的 β-氧化</b>；<b>④ 有氧糖酵解时甘油醛-3-磷酸的脱氢</b>。<b>循环是最大的那个供应者，而且它就在基质里跑，紧挨着那层膜。</b>',
 en:'“The textbook lists four sources: the four dehydrogenation steps of the citric acid cycle, the oxidative decarboxylation of pyruvate, the β-oxidation of fatty acids, and glyceraldehyde-3-phosphate dehydrogenation when glycolysis runs aerobically. The cycle is much the largest supplier, and it runs in the matrix right beside the membrane.”',
 cn:'四个来源是书列的（<span class="pg">p141</span>），「循环是最重要的供应者」在 <span class="pg">p220</span>。<b>有个坑</b>：糖酵解那两个 NADH 在<b>胞质</b>里，过不了内膜，只有电子靠穿梭进去（general，书里没有）。英文：“One catch: the glycolytic NADH is made in the cytosol and cannot cross the inner membrane — only its electrons cross, by a shuttle. That is general knowledge.”'},
{r:'中', q:'Is there anything like this in photosynthesis?',
  ez:'“Yes. The textbook treats the thylakoid membrane as the closest analogue. The comparison is with the inner mitochondrial membrane. The carriers are of the same kinds. Quinones and cytochromes and iron sulfur proteins and flavoproteins. The A T P synthase has the same composition too. Its parts are C F zero and C F one. Two things differ. Light pushes the electrons uphill. And the protons are pumped into the thylakoid.”',
  ezcn:'<b>有。</b><b>书把类囊体膜当作线粒体内膜最接近的类比：载体是同样的那几类（醌、细胞色素、铁硫蛋白、黄素蛋白），ATP 合酶的组成也一样（CF₀ 和 CF₁）。</b><b>两处不同：光把电子往上推；而质子是被泵「进」类囊体的。</b>',
 en:'“Yes. The textbook treats the thylakoid membrane as the closest analogue of the inner mitochondrial membrane. The carriers are of the same kinds: quinones, cytochromes, iron-sulfur proteins, flavoproteins, and an ATP synthase of the same composition, CF₀ and CF₁. Two differences: light pushes the electrons uphill, and the protons are pumped <b>into</b> the thylakoid.”',
 cn:'<span class="pg">p206 p208</span>。<b>书自己把两者并排写了</b>，所以这是有出处的类比，不是你的发挥。接 #27 光合。'}
]},

{g:'桥回主场', gn:'段 4 那条桥，被追问时的第二层。<b>接住了就落在卡 02（Kd）上。</b>', items:[
{r:'中', q:'You measure binding constants — is a redox potential anything like that?',
  ez:'“They are the same kind of quantity. A dissociation constant is an equilibrium constant. It describes a protein letting go of its ligand. A standard redox potential is the same idea. It says where equilibrium sits for a couple letting go of its electrons. So it is a K d for electrons. It is in volts rather than molar. Both fix the direction. Neither says anything about the rate.”',
  ezcn:'<b>它们是同一类量。</b><b>解离常数是「蛋白放开它的配体」这个反应的平衡常数；标准氧化还原电位说的是「某个电对放开它的电子」时平衡落在哪里——等于是电子的 Kd，只不过单位是伏特而不是摩尔。</b><b>两者都只定方向，都不说速率。</b>',
 en:'“They are the same kind of quantity. A dissociation constant is the equilibrium constant for a protein letting go of its ligand. A standard redox potential is where equilibrium sits for a couple letting go of its electrons — a Kd for electrons, in volts rather than molar. Both fix the direction and neither says anything about the rate.”',
 cn:'<b>这是这张卡上最诚实的一座桥</b>：不是「我的课题也用呼吸链」，而是「这两个常数是同一件事」。顺势可加：“The textbook even puts the two axes side by side: ΔG standard equals minus n F ΔE standard, exactly as ΔG standard equals minus R T ln K.”（式子 <span class="pg">p135</span>，−RT ln K 那半句通用）。<b>接住之后就走进卡 02。</b><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>两条式子并排</b>：<code>ΔG°′ = −R T ln K</code>（通用）和 <code>ΔG°′ = −n F ΔE°′</code>（书 p135）。<br>左边：<b>K</b> 是平衡常数，<b>R</b> 是气体常数，<b>T</b> 是绝对温度——<code>R T</code> 只是把「差多少倍」换算成「差多少 kJ」的<b>牌价</b>（37 °C 时 <code>RT ≈ 2,6 kJ/mol</code>，所以平衡每差十倍，ΔG°′ 差 <code>2,6 × ln10 ≈ 5,9 kJ/mol</code>）。<br>右边：<code>n F</code> 是把「差多少伏」换算成「差多少 kJ」的牌价。<br><br><br><b>=== 一句话理解 ===</b><br><b>两条式子做的是同一件事：把一个「平衡停在哪儿」的测量值，换算成一个能量。</b>左边量的是分子抓不抓得住<b>配体</b>（K<sub>d</sub>），右边量的是分子抓不抓得住<b>电子</b>（E°′）。<br>所以「标准电位是电子的 K<sub>d</sub>」不是比喻——<b>它们是同一类量，只是换汇的牌价一个用 RT、一个用 nF。</b>而且两者都<b>只说方向、不说速度</b>，这正是你在卡 02 上反复要划的那条线。'},
{r:'中', q:'Does any of this matter in your own cultures?',
  ez:'“Indirectly, and I would not overstate it. Whether the yeast respire or ferment matters. It decides how much protein I get per litre. With plenty of glucose they ferment even in air. That is the Crabtree effect. The culture then makes ethanol. It does not use the chain. So two A T P against thirty is a practical difference. But it is physiology rather than something I measure.”',
  ezcn:'<b>间接有关，而我不会说得过头。</b><b>酵母是呼吸还是发酵，决定了我每升能拿到多少蛋白：葡萄糖充足时它们即使有氧也发酵（Crabtree 效应），培养物去造乙醇而不用呼吸链。</b><b>所以「2 个 ATP 对 30 个」是一个实际的差别——但那是生理学，不是我测的东西。</b>',
 en:'“Indirectly, and I would not overstate it. Whether the yeast respire or ferment decides how much protein I get per litre. With plenty of glucose they ferment even in air, the Crabtree effect, and the culture makes ethanol instead of using the chain. So two ATP against thirty is a practical difference, but it is physiology rather than something I measure.”',
 cn:'<b>诚实地短。</b>Crabtree 是通用知识，书里 0 命中。<b>不点具体病原体、不展开课题</b>——见 `DRILL.md` 的三条机制。'}
]}
]
});
