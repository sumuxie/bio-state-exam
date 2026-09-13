/* 卡 25 · Describe the electron transport chain and its role in cellular respiration.
   题库 #25（S3 Biochemistry 13）· 并入 #26 What is oxidative phosphorylation?（S3 Biochemistry 14）
   —— 两道题在书里是同一节：§6.2.4「Respirační řetězec a aerobní fosforylace」。

   出处：p141–p146（§6.2.4、Obr. 6.6–6.11）· p134–p136（Tab. 6.2、ΔG°′ = −nFΔE°′、30 kJ 量子、2 vs 38）·
   p139–p140（38 的拆分、3 ATP/NADH）· p045–p046（FMN/FAD、辅酶 Q、血红素、FeS）· p197（只有内膜产 ATP）·
   p206–p208（光合是镜像）· p219（NADPH 不进呼吸链）· p220（循环是最大供应者）· p222（限速的是 ADP）。

   回 300 dpi 原图核过四处：Tab. 6.2 的 −0,32 / −0,20 / 0,00 / +0,10 / +0,26 / +0,82（p135）；
   p144 印的是「Komplex IV」不是 V（OCR 读错，书没错，不进勘误）；Obr. 6.11 的亚基 F₀ F₁ α β γ δ ε a b₂（p145）；
   p146 的 ADP + Pi → ATP + H₂O（ΔG°′ = +30,5）、6 个质子 ≈ 3 ATP / 4 个 ≈ 2 ATP、
   以及整式 NADH + H⁺ + ½ O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O。

   全书 grep 0 命中，卡上全部标 general：chemiosmot · Mitchell · rozpřah/odpřah · rotenon · antimycin ·
   kyanid · oligomycin · dinitrofenol · Crabtree · 穿梭 · 2.5/1.5 · 「复合物 IV 泵质子」（书说它不泵）。

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
  big:'内膜上的一串<b>电子载体</b>：<b>四个复合物 ＋ 两个流动载体</b>，把 NADH 和 FADH₂ 的电子一站站送到<b>氧</b>，并用放出的能量把<b>质子泵出基质</b>',
  en:'“The <b>respiratory chain</b> — the electron transport chain — is a series of electron carriers built into the <b>inner mitochondrial membrane</b>, the membrane that encloses the matrix: four complexes with two mobile carriers between them. It passes the electrons of NADH and FADH₂ down to oxygen and uses the energy to pump protons out of the matrix.”',
  note:'<b>先说它是什么，不要一上来就背名字。</b>p141：五个多酶脂蛋白复合物能从内膜分离出来，是内膜的<b>整合成分</b>；电子从<b>低电位</b>向<b>电位升高</b>的方向传。还原辅酶的四个来源书自己列了：循环的四步脱氢、丙酮酸氧化脱羧、β-氧化、有氧糖酵解的 G3P 脱氢。<span class="pg">p141</span>'},
 {n:'02', t:'定义 · 氧化磷酸化',
  big:'用那个<b>质子梯度</b>把 <b>ADP ＋ Pᵢ</b> 合成 ATP——质子经 <b>ATP 合酶</b>顺梯度流回基质。书叫它<b>需氧磷酸化</b>',
  en:'“<b>Oxidative phosphorylation</b> is the synthesis of ATP from ADP and inorganic phosphate, driven by that proton gradient as the protons flow back into the matrix through ATP synthase. <b>Oxidative</b> because the energy comes from oxidising NADH and FADH₂; <b>phosphorylation</b> because it is spent putting a phosphate onto ADP.”',
  note:'书的叫法是 <i>aerobní fosforylace</i>；p145 的小标题就是「Mechanismus aerobní fosforylace」。<b>这个反应本身耗能</b>：ADP + Pᵢ → ATP + H₂O，ΔG°′ = <b>+30,5 kJ/mol</b>——正号，所以必须被推着走。跟横向卡「化学键」上 ATP 水解 −30,5 是同一个数的两面。<span class="pg">p145 p146</span>'},
 {n:'03', t:'两者的关系',
  big:'链是<b>泵</b>，合酶是<b>涡轮</b>；两者之间<b>没有任何化学中间体</b>，唯一的连接是膜两侧的<b>质子差</b>',
  en:'“The two halves are coupled only through the gradient: the chain is the <b>pump</b>, ATP synthase the <b>turbine</b>, and no chemical intermediate passes between them. That is chemiosmosis — and the textbook’s own words are that building the enzymes into a membrane gives the reaction a <b>direction in space</b>.”',
  warn:'「chemiosmotic」和 Mitchell 这个名字<b>书里都没有</b>（grep 0 命中），<b>「中间没有化学中间体」这半句也是通用推论</b>——书只说了「化学能与渗透功的互换<b>是两套能量传输系统之间的连接环节</b>」。先给书的说法，再说 “the usual name for it is…”。',
  good:'他问 “Who worked that out?”：“Peter Mitchell proposed it in 1961 and received the Nobel Prize in 1978 — general knowledge; this textbook gives the principle without the name.”',
  note:'p141 原话：装进生物膜的酶系统，<b>除了速率还决定反应在三维空间里的方向</b>（矢量性）；这使化学能（ΔG）与渗透功（把 H⁺ 逆梯度搬运）可以互换，<b>它是氧化还原系统与磷酸化系统之间的连接环节</b>。<span class="pg">p141</span>'},

 {g:'账', gn:'投入 / 产出 / 总结三行，缺一不可。只报产出是半张账——他一句「那消耗了什么」就能把你问停。'},
 {n:'04', t:'投入',
  big:'1 <b>NADH ＋ H⁺</b>（或 1 FADH₂）· <b>½ O₂</b> · <b>3 ADP ＋ 3 Pᵢ</b>（FADH₂ 那条是 2 ADP ＋ 2 Pᵢ）',
  en:'“Per NADH it takes in one NADH with a proton, half a molecule of oxygen, and three ADP with three inorganic phosphates — for FADH₂ the same but two ADP and two phosphates.”',
  note:'书 p146 给了整式：<b>NADH + H⁺ + ½ O₂ + 3 ADP + 3 Pᵢ → NAD⁺ + 3 ATP + 4 H₂O</b>。<b>氧要算进投入</b>——这一格最容易漏，而他恰好会问「那氧在哪里」。<span class="pg">p146</span>'},
 {n:'05', t:'产出',
  big:'<b>NAD⁺</b>（或 FAD）· <b>H₂O</b> · <b>3 ATP</b>（或 2）',
  en:'“Out come NAD-plus — the oxidised coenzyme glycolysis and the cycle need back — water, and three ATP. The textbook’s equation has four waters: three from the phosphorylation and one from the reduction of the oxygen.”',
  note:'<b>四个水证明你在读式子而不是背式子。</b><b>再生 NAD⁺ 是呼吸链的第二个作用</b>，也是「没有氧为什么全停」的答案。'},
 {n:'06', t:'总结（净账）',
  big:'每个 NADH：2 个电子走完全程 → 泵 <b>6 个质子</b> → 约 <b>3 ATP</b>；每个 FADH₂：<b>4 个质子</b> → 约 <b>2 ATP</b>。葡萄糖那 38 个 ATP 里，<b>34 个</b>在这里造',
  en:'“Net: two electrons from NADH cross the whole chain, six protons are pumped out, and the textbook converts that to about three ATP; FADH₂ gives four protons and about two. Modern textbooks count ten protons and 2.5 ATP per NADH, 1.5 per FADH₂ — general, not this book.”',
  note:'6 和 4 个质子 p145；「6 个 ≈ 3 ATP、4 个 ≈ 2」p146；3 和 2 的比例 p139 又说了一遍。<br><b>34 是拿书的数算的，书没印</b>：38 = 糖酵解 8 ＋ 丙酮酸氧化脱羧 6 ＋ 循环 24，其中底物水平磷酸化只有 4 个（糖酵解 2 ＋ 两个 GTP）。英文：“Thirty-four of the thirty-eight are made here; only four come from substrate-level phosphorylation.”<span class="pg">p139 p145 p146</span>'},
 {n:'07', t:'地点 ＋ 调控',
  big:'地点：<b>线粒体内膜</b>（循环在<b>基质</b>，链在<b>膜上</b>）。限速的不是氧，是 <b>ADP 够不够</b>',
  en:'“It runs in the <b>inner mitochondrial membrane</b>, beside the matrix where the citric acid cycle runs. What limits the rate is the supply of <b>ADP</b>: the textbook gives phosphorylation in the respiratory chain as its example of regulation by a limiting metabolite.”',
  note:'p222 原话：「限制因素是 ADP 是否充足」。p197 另一句好用的：<b>「只有线粒体内膜负责 ATP 的生产」</b>。后半句（没有 ADP → 质子回不去 → 梯度顶住 → 传递变慢）是<b>通用</b>推论。<span class="pg">p197 p222</span>'},

 {g:'四个复合物 ＋ 两个流动载体', gn:'每个只记四件事：<b>书给的名字（都是氧化还原酶）· 进来什么出去什么 · 辅基 · 泵不泵</b>。结构不用背。'},
 {n:'08', t:'复合物 I',
  big:'<b>NADH:ubiquinone oxidoreductase</b> · NADH → 泛醌 · 辅基 <b>FMN ＋ 若干 FeS</b> · <b>泵 2 个质子</b>',
  en:'“Complex I is <b>NADH:ubiquinone oxidoreductase</b>. Its core is the flavoprotein NADH dehydrogenase, whose prosthetic groups — cofactors bound permanently to the protein — are <b>FMN</b> and several <b>iron–sulfur centres</b>, non-heme iron held by cysteine sulfurs. It dehydrogenates NADH on the matrix side, passes the electrons to ubiquinone, and two protons appear outside.”',
  note:'书的式子：NADH + H⁺ + 2 QH· → NAD⁺ + 2 QH₂（把<b>半醌</b>还原成 <b>ubiquinol</b>）。p142：FMNH₂ 把电子交给膜<b>外侧</b>的 Fe₂S₂ 蛋白，<b>质子就在那里被放进膜间隙</b>；电子再传给<b>基质侧</b>的 Fe₄S₄。<span class="pg">p141 p142 p046</span>'},
 {n:'09', t:'复合物 II',
  big:'<b>succinate:ubiquinone oxidoreductase</b>，<b>就是循环里的 succinate dehydrogenase</b> · 辅基 <b>FAD ＋ 两个 FeS</b> · <b>不泵</b>',
  en:'“Complex II is <b>succinate:ubiquinone oxidoreductase</b> — a flavoprotein with FAD and two iron–sulfur groups. The textbook points out that it is simply succinate dehydrogenase, the one cycle enzyme sitting in the membrane. It feeds electrons straight into ubiquinone, bypassing complex I, and pumps nothing.”',
  note:'<b>这一格就是卡 24 的第 6 步</b>（FAD 是<b>共价</b>结合的，p139）。p143 原话：<i>Je to sukcinátdehydrogenasa známá z citrátového cyklu.</i><b>「绕过复合物 I」就是 FADH₂ 只值 2 个 ATP 的全部原因。</b><span class="pg">p139 p143</span>'},
 {n:'10', t:'为什么 II 不泵',
  big:'落差不够：succinate/fumarate <b>+0,03 V</b> → 泛醌 <b>+0,10 V</b>，只有 <b>0,07 V</b>；而 NADH → 泛醌是 <b>0,42 V</b>',
  en:'“Because that step releases too little energy. Succinate to ubiquinone is a drop of 0.07 volts, NADH to ubiquinone 0.42. Through the textbook’s own equation, ΔG equals minus n F ΔE, that is about 14 kJ per mole against 81 — and the book says energy is captured in quanta of about 30.”',
  note:'电位在 <b>Tab. 6.2</b>，式子和 30 kJ 的量子在 p135–p136。<b>换算是我们做的，书只给了结果</b>：走 II 那条路<b>只有 4 个质子</b>（p145）。报的时候说「按你这本书的表和式子算」（F = 96,5 kJ·V⁻¹·mol⁻¹，n = 2）。<b>「FADH₂ 少一个 ATP」人人会背，「为什么」很少有人答得出。</b><span class="pg">p135 p145</span>'},
 {n:'11', t:'复合物 III',
  big:'<b>ubiquinol:cytochrome c oxidoreductase</b> · QH₂ → cyt c · 辅基 <b>两个 b 型细胞色素 ＋ cyt c₁ ＋ 一个 FeS</b> · <b>每传一个电子泵 2 个质子，一对 4 个</b>',
  en:'“Complex III is <b>ubiquinol:cytochrome c oxidoreductase</b>: two b-type cytochromes — hemes, iron held in a porphyrin ring — which differ in redox potential because they sit on different polypeptides, plus cytochrome c₁ and an iron–sulfur protein. Every electron passed on sends two protons outside.”',
  note:'式子：2 QH₂ + 2 cyt c(Fe³⁺) → 2 cyt c(Fe²⁺) + 2 QH· + 2 H⁺。<b>书画的那个环</b>：QH₂ 在<b>胞质侧</b>被 b 氧化成半醌、放一个质子，半醌再被 <b>c₁</b> 氧化成 Q、再放一个；b_T→b_K 把一个电子带回<b>基质侧</b>，在那里把 Q 还原成半醌、<b>拿走一个质子</b>。书点了用处：<b>让两电子载体（ubiquinol）跟单电子载体（cyt c）对得上</b>。<span class="pg">p143 p144</span>'},
 {n:'12', t:'复合物 IV',
  big:'<b>ferrocytochrome c:oxygen oxidoreductase</b>，即 <b>cytochrome oxidase</b> · cyt c → O₂ · 辅基 <b>细胞色素 a、a₃ ＋ 铜离子</b> · <b>书说它不泵</b>，但它<b>造水</b>',
  en:'“Complex IV is cytochrome oxidase, <b>ferrocytochrome c:oxygen oxidoreductase</b> — seven proteins whose working parts are cytochromes a and a₃ and copper ions. It takes electrons from cytochrome c and reduces oxygen to oxide ions, which take up protons from the matrix to give water. This textbook says it does <b>not</b> pump protons.”',
  warn:'<b>现代教科书说复合物 IV 是泵的</b>（每对电子 2 个），所以每个 NADH 是 <b>10</b> 个质子而不是 6 个。<b>先给书的（6 个、约 3 ATP），被追问再给现代值。</b>标 general。',
  note:'书自己承认：<b>「这个复合物的机制在所有线粒体氧化还原系统里是最不清楚的」</b>——被追细节时很好用。式子 ½ O₂ + 2 e⁻ + 2 H⁺ → H₂O；书说它虽不泵，但<b>消耗基质里的质子，因而提高基质 pH</b>。<span class="pg">p144</span>'},
 {n:'13', t:'两个流动载体',
  big:'<b>ubiquinone（辅酶 Q）</b>：脂溶性小分子，<b>溶在膜里</b>移动，带 <b>2 电子 ＋ 2 质子</b>；<b>cytochrome c</b>：小蛋白，在<b>膜的外表面</b>滑动，一次带 <b>1 个电子</b>',
  en:'“Between the complexes sit two mobile carriers. <b>Ubiquinone</b>, coenzyme Q, is a small lipid-soluble quinone — not a protein — mobile inside the membrane because it is hydrophobic, carrying two electrons with two protons. <b>Cytochrome c</b> is a small protein with a heme that slides along the outer face carrying one electron at a time.”',
  note:'p045：辅酶 Q 是<b>黄素蛋白和细胞色素之间的中介</b>（植物里对应 plastoquinone）。p144：cyt c 在膜表面<b>「滑动」</b>。p046：线粒体里至少五种细胞色素 <b>b、c₁、c、a、a₃</b>，靠吡咯环取代基不同而电位不同。<span class="pg">p045 p046 p142 p144</span>'},
 {n:'14', t:'质子是怎么被搬出去的',
  big:'两类载体<b>交替</b>：NAD⁺ / FMN / Q 带「<b>电子 ＋ 质子</b>」，FeS 和细胞色素<b>只带电子</b>——质子在膜外被甩下，电子继续往里走',
  en:'“How can moving electrons move protons? The textbook’s answer is the <b>alternation</b>: NAD-plus, FMN and quinone carry electrons together with protons, while iron–sulfur centres and cytochromes carry <b>electrons only</b>. Each carrier has a fixed place in the membrane, so protons are taken up inside and released outside.”',
  note:'p142 说这两条特征在链里<b>反复出现</b>，并把结果叫作 2 个质子的<b>表观</b>（zdánlivý）矢量转移。<b>这是全卡最值钱的机制句——「泵」这个词本身什么也没解释，这一句才解释。</b><span class="pg">p142</span>'},
 {n:'15', t:'怎么在纸上画这条链',
  big:'他可能让你<b>画</b>。六步，照这个顺序，<b>边画边说</b>',
  en:'“I can draw it: the membrane as two lines, the four complexes as boxes in it, ubiquinone inside the membrane and cytochrome c on its outer face, electrons running from NADH and succinate down to oxygen, protons coming out at complexes one and three and back in through ATP synthase.”',
  note:'① 两条平行横线 = <b>内膜</b>；一侧写 <b>matrix (M)</b>，另一侧写 <b>intermembrane space (C)</b>（书 Obr. 6.9 把 M 画在<b>上</b>面）。<br>② 膜里画四个方框 <b>I · II · III · IV</b>；再画第五个带柄带球的 <b>V</b>，球（<b>F₁</b>）伸进基质侧。<br>③ I 与 III 之间、II 与 III 之间的<b>膜里</b>画小圈 <b>Q</b>；III 与 IV 之间的<b>膜外表面</b>画小圈 <b>c</b>。<br>④ 电子箭头：NADH→I→Q，succinate→II→Q，Q→III→c→IV→½ O₂→H₂O。<br>⑤ 质子箭头<b>向外</b>：I 标 <b>2 H⁺</b>，III 标 <b>4 H⁺</b>，IV <b>不标</b>；V 上箭头<b>向内</b>，标 <b>6 H⁺ → 3 ATP</b>。<br>⑥ 底下写电位：<b>−0,32 → +0,10 → +0,26 → +0,82</b>。<br><b>这六步本身就是逐字稿</b>：手和嘴一起走，比干说稳。'},

 {g:'动力：电位差', gn:'他问「什么推着电子往前走」时，答案是一张表加一个式子，两样书里都有。'},
 {n:'16', t:'redox potential 是什么',
  big:'一对氧化还原物质<b>抓不抓得住电子</b>的量度，单位<b>伏特</b>；<b>越负越愿意给电子</b>。电子自发地从<b>负</b>流向<b>正</b>',
  en:'“A <b>redox potential</b> is a measure, in volts, of how strongly a redox pair holds its electrons, referred to a standard electrode at pH 7. The textbook’s sentence: electrons pass spontaneously from the more negative system, the reductant, to the one with the higher potential. That is the direction of the whole chain.”',
  tbl:{head:['系统（还原形 → 氧化形）','E°′ (V)'], rows:[['NADH + H⁺ → NAD⁺','<b>−0,32</b>'],['FADH₂ → FAD','−0,20'],['succinate → fumarate','+0,03'],['cytochrome b (Fe²⁺→Fe³⁺)','0,00'],['dihydroubiquinone → ubiquinone','+0,10'],['cytochrome c (Fe²⁺→Fe³⁺)','+0,26'],['H₂O → ½ O₂','<b>+0,82</b>']]},
  note:'整张表抄自 <b>Tab. 6.2</b>（p135），<b>已回 300 dpi 逐行核过</b>；书还说生物系统里氢电极 E°′ = <b>−420 mV</b>。<br>⚠ <b>表里 cytochrome b 是 0,00，比泛醌的 +0,10 还低</b>，看上去那一步是上坡。<b>书自己解释了</b>：复合物 III 里有<b>两个</b> b 型细胞色素，结合在不同多肽上所以电位不同，<b>只有其中一个能被 ubiquinol 还原</b>。用书的一半回答书的另一半。<span class="pg">p135 p143</span>'},
 {n:'17', t:'ΔG 与 30 kJ 的量子',
  big:'<b>ΔG°′ = −nFΔE°′</b>（书 p135）。全程 <b>1,14 V</b>、2 个电子 ≈ <b>−220 kJ/mol</b>；而细胞只能按约 <b>30 kJ/mol</b> 一份地收（＝一个 ATP）',
  en:'“The textbook gives the bridge: ΔG standard equals minus n F ΔE standard. Across the chain ΔE is 1.14 volts for two electrons, roughly minus 220 kJ per mole — but the cell captures energy only in quanta of about 30 kJ, the amount in one ATP. So the fall is taken in steps, each sized to move protons.”',
  note:'1,14 = 0,82 −（−0,32）。<b>−220 是拿书的表和式子算的，书没印</b>——报的时候带一句「按你这本书算下来大约」。三个 ATP ≈ 91 kJ，约 <b>40%</b>，跟书给的「38 ATP ≈ 1159 kJ ≈ 总能量的 40%」一致。<span class="pg">p135 p136 p140</span>'},

 {g:'ATP 合酶 · 复合物 V', gn:'链之外的另一半。<b>这一格答得好，#26 就完整了。</b>'},
 {n:'18', t:'结构',
  big:'<b>F₀</b> 在膜里 = <b>质子通道</b>；<b>F₁</b> 在基质一侧 = <b>催化头</b>。亚基（书 Obr. 6.11）：<b>α β γ δ ε ＋ a、b₂</b>',
  en:'“ATP synthase is complex V, and the textbook stresses that unlike the others it is <b>not</b> an oxidoreductase — an enzyme that moves electrons from one molecule to another — but a phosphorylating enzyme, and that here protons move <b>with</b> the gradient, back into the matrix. Two parts: <b>F₀</b>, the proton channel in the membrane, and <b>F₁</b>, the catalytic head on the matrix side.”',
  note:'Obr. 6.11（p145）<b>已回 300 dpi 核过</b>：F₁ 画成三个 α 三个 β，γ 和 ε 在中轴，δ 连着侧柄 b₂，a 嵌在膜里，<b>γ 旁边有旋转箭头和 H⁺</b>。图注列的亚基是 F₀、F₁、α、β、γ、δ、ε、a、b₂；α₃β₃ 这个化学计量是通用写法。<span class="pg">p145 p146</span>'},
 {n:'19', t:'机制（最反直觉的一条）',
  big:'质子<b>不是用来成键的</b>——ATP 在 F₁ 的活性位点上<b>自己就形成了</b>；质子穿过 F₀ 改变构象，<b>把做好的 ATP 松开</b>',
  en:'“The textbook’s own account: the active site in <b>F₁</b> forms the bond between ADP and phosphate, but the ATP stays bound there. Protons passing through <b>F₀</b> change the conformation of the site, so the ATP can be released and the cycle repeats. The energy is spent on <b>letting the product go</b>, not on making the bond.”',
  good:'顺势加一句通用的：“That is the binding-change mechanism, Boyer’s, and the conformational change is driven by rotation — the proton flow turns the ring in F₀ and the gamma subunit inside the head.”',
  note:'p146 原话就是这个意思。<b>这一条最容易加分</b>——几乎所有人都以为能量花在「合成」上，书说的正相反。<span class="pg">p146</span>'},

 {g:'证据与陷阱', gn:'这一组书里<b>一个字都没有</b>，全部 general。但它是「怎么发现的」那一格，答得出就不是背书的人。'},
 {n:'20', t:'解偶联剂 ＋ 抑制剂',
  big:'<b>解偶联</b>：2,4-二硝基苯酚把质子直接漏回基质 → 链跑得更快、<b>ATP 不产、能量变成热</b>。<b>抑制剂</b>定出了顺序：rotenone I · antimycin III · 氰化物/CO IV · oligomycin 合酶',
  en:'“Two classical pieces of evidence, general rather than from this textbook. <b>Uncouplers</b> such as 2,4-dinitrophenol carry protons back across the membrane, so the chain runs faster, no ATP is made and the energy leaves as heat. <b>Inhibitors</b> fixed the order: rotenone at complex I, antimycin at III, cyanide at IV, oligomycin at the synthase.”',
  warn:'全书 grep：rozpřah / odpřah / rotenon / antimycin / kyanid / oligomycin / dinitrofenol <b>全部 0 命中</b>。说的时候带一句 “this is general, not from the textbook”。',
  note:'<b>为什么这两样构成证据</b>（这才是他要的）：oligomycin 只挡合酶，<b>却把电子传递也挡住了</b> → 两者耦合；再加解偶联剂，传递<b>又跑起来</b>但不产 ATP → 耦合的介质是<b>梯度</b>。英文：“Oligomycin blocks only the synthase, yet electron transport stops as well; add an uncoupler and it restarts without ATP — so what couples them is the gradient.”<br>定顺序的做法：挡住一处，<b>上游停在还原态、下游停在氧化态</b>，而细胞色素<b>有颜色</b>，分光光度计看得见。棕色脂肪用 thermogenin 做同一件事（general）。'}
],
end:'<b>一句话记住整张卡：链只做一件事——把电子的落差换成膜外的质子；合酶只做一件事——把质子放回来换 ATP。</b>中间没有任何化学中间体，这正是解偶联剂能把两者拆开的原因。被问数字先给书的：每个 NADH <b>6 个质子 ≈ 3 ATP</b>，每个 FADH₂ <b>4 个 ≈ 2 ATP</b>。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义 · 链</b>：内膜上<b>四个复合物 ＋ 两个流动载体</b>，把电子从 NADH/FADH₂ 送到氧，同时把质子泵出基质',
 '“A series of electron carriers in the inner mitochondrial membrane — four complexes with two mobile carriers — that passes electrons from NADH and FADH₂ to oxygen and pumps protons out of the matrix.”',
 '<b>先说它是什么，再说名字。</b><span class="pg">p141</span>'],
['<b>定义 · 氧化磷酸化</b>：质子经 <b>ATP 合酶</b>流回基质，推动 <b>ADP ＋ Pᵢ → ATP</b>',
 '“The synthesis of ATP from ADP and phosphate, driven by the proton gradient flowing back through ATP synthase.”',
 '书叫它<b>需氧磷酸化</b>。'],
['<b>耦合</b>：链是泵，合酶是涡轮，<b>中间只有梯度</b>',
 '“The chain is the pump, the synthase the turbine, and the only link is the proton gradient — chemiosmosis.”',
 '书没有这个词，但 p141 把原理写全了。'],
['<b>账</b>：每 NADH <b>6 个质子 ≈ 3 ATP</b>；每 FADH₂ <b>4 个 ≈ 2 ATP</b>',
 '“Six protons per NADH, about three ATP; four per FADH₂, about two. The textbook’s equation gives NAD-plus, three ATP and four waters.”',
 '<b>四个水</b>：三个来自磷酸化，一个来自氧。'],
['<b>I ＋ II 都把电子交给泛醌</b>：I 是 NADH:ubiquinone oxidoreductase（FMN ＋ FeS，泵 <b>2 H⁺</b>），II 是 succinate:ubiquinone oxidoreductase ＝ <b>succinate dehydrogenase</b>（FAD ＋ 2 FeS，<b>不泵</b>）',
 '“Complex I is NADH:ubiquinone oxidoreductase, with FMN and iron–sulfur centres; complex II is succinate dehydrogenase itself, which bypasses complex I and pumps nothing.”',
 '<b>「绕过复合物 I」就是 FADH₂ 只值 2 个 ATP 的原因。</b>'],
['<b>III 交给 cyt c，IV 交给氧</b>：III 是 ubiquinol:cytochrome c oxidoreductase（两个 cyt b ＋ c₁ ＋ FeS，泵 <b>4 H⁺</b>），IV 是 <b>cytochrome oxidase</b>（cyt a、a₃ ＋ 铜，书说<b>不泵</b>，<b>造水</b>）',
 '“Complex III sends two protons out for every electron passed to cytochrome c; complex IV, cytochrome oxidase, reduces oxygen to water and, this textbook says, does not pump.”',
 '现代说法是 IV 也泵 2 个（general）。'],
['<b>两个流动载体</b>：<b>Q</b> 在膜里（2 电子 ＋ 2 质子）· <b>cyt c</b> 在膜外表面（1 个电子）',
 '“Ubiquinone is lipid-soluble and moves inside the membrane; cytochrome c slides along its outer face and carries one electron at a time.”',
 '「一个带两个、一个带一个」——<b>复合物 III 存在的理由。</b>'],
['<b>泵的机制</b>：带质子的载体和<b>只带电子</b>的载体<b>交替</b>',
 '“NAD-plus, FMN and quinone carry electrons with protons; iron–sulfur centres and cytochromes carry electrons only — that alternation makes the transfer vectorial.”',
 '书 p142 说这两条特征<b>反复出现</b>。'],
['<b>电位</b>：<b>−0,32 → +0,82</b>，<b>ΔG°′ = −nFΔE°′</b>',
 '“Electrons pass spontaneously from the more negative system to the more positive; across the chain that is 1.14 volts, about minus 220 kJ per mole.”',
 'Tab. 6.2 <span class="pg">p135</span>。−220 是<b>算出来的</b>。'],
['<b>ATP 合酶</b>：<b>F₀</b> 通道 ＋ <b>F₁</b> 催化头；质子改变构象<b>把 ATP 松开</b>',
 '“The bond forms by itself in F₁; the protons passing through F₀ change the conformation so the finished ATP can be released.”',
 '<b>最容易加分的一句。</b><span class="pg">p146</span>'],
['<b>地点与调控</b>：<b>内膜</b>（循环在基质）；限速的是 <b>ADP</b>',
 '“In the inner mitochondrial membrane, and the rate is set by the supply of ADP — the textbook’s own example of a limiting metabolite.”',
 '<span class="pg">p222</span>'],
['<b>陷阱</b>：氧只是<b>最后的电子受体</b>；链本身<b>不造 ATP</b>',
 '“Oxygen is not burned with the nutrient — it is the final electron acceptor and ends up as water. And the chain does not make ATP; it makes a gradient.”',
 '两条都几乎每次被问，都容易说错。']
],

segs:[
 {tag:'段 1 · 定义', h:'两个定义，一句关系',
  p:['“The <b>electron transport chain</b>, which this textbook calls the respiratory chain, is a series of electron carriers built into the inner mitochondrial membrane — the membrane that encloses the matrix, where the citric acid cycle runs. It is four multienzyme complexes, numbered one to four, with two mobile carriers between them. It takes the electrons that NADH and FADH₂ are carrying, passes them from one carrier to the next down to oxygen, and uses the energy released to pump protons out of the matrix.',
     'Its <b>role in cellular respiration</b> is the final one. Cellular respiration is the complete oxidation of a nutrient to carbon dioxide and water: the cycle has already taken the carbon away as CO₂, and this is where the hydrogen finally reaches the oxygen and becomes water. It also regenerates NAD-plus and FAD — without that, glycolysis and the cycle would stop.',
     '<b>Oxidative phosphorylation</b> is the other half: the synthesis of ATP from ADP and inorganic phosphate, driven by that proton gradient as the protons flow back into the matrix through ATP synthase. Oxidative because the energy comes from oxidising the reduced coenzymes; phosphorylation because it is spent putting a phosphate onto ADP. The textbook calls it aerobic phosphorylation and treats the two in one section.',
     'So the chain is the pump and the synthase is the turbine, and the only thing connecting them is the proton gradient across the membrane.”'],
  note:'<b>四句话把题面上每个词都交代掉了</b>：electron / transport / chain（第一句）、role / cellular respiration（第二句）、oxidative / phosphorylation（第三句）、耦合（第四句）。他嘴里多半只有 “What is the respiratory chain?”——<b>剩下的结构要你自己接上去</b>。'},
 {tag:'段 2 · general', h:'账、地点、调控 —— 三行说完',
  p:['“The account per NADH: in go one NADH with a proton, half a molecule of oxygen, and three ADP with three phosphates; out come NAD-plus, water and three ATP — the textbook writes four waters, three from the phosphorylation and one from the oxygen.',
     'The net of it: two electrons from NADH cross the whole chain and six protons are pumped out of the matrix, which the textbook converts to about three ATP. FADH₂ enters lower down, at complex two, so only four protons are pumped and it is worth about two. Modern textbooks count ten protons and 2.5 ATP per NADH, but I would give the textbook’s figures first.',
     'It all happens in the <b>inner mitochondrial membrane</b>, while the cycle runs in the matrix beside it — and of the thirty-eight ATP the textbook gives for one glucose, thirty-four are made here. What sets the rate is not oxygen but the supply of <b>ADP</b>: the textbook uses phosphorylation in the respiratory chain as its example of regulation by a limiting metabolite.”'],
  note:'<b>三行账 ＋ 地点 ＋ 调控，正好是代谢题的通用开口模板</b>（见 `DRILL.md`）。34/38 是拿书的数算的，说的时候加一句 “on the textbook’s own numbers”。'},
 {tag:'段 3 · 稍展开', h:'四个复合物走一遍，然后合酶',
  p:['“Complex one is <b>NADH:ubiquinone oxidoreductase</b> — a flavoprotein with FMN and several iron–sulfur centres. It dehydrogenates NADH on the matrix side, passes the electrons to ubiquinone, and two protons appear outside.',
     'Complex two is <b>succinate:ubiquinone oxidoreductase</b>, which is simply succinate dehydrogenase, the one enzyme of the cycle that sits in the membrane: FAD, two iron–sulfur groups, and no pumping — from succinate to ubiquinone is a drop of only 0.07 volts against 0.42 for NADH.',
     'Both feed <b>ubiquinone</b>, a lipid-soluble quinone that moves inside the membrane carrying two electrons and two protons. It hands them to complex three, <b>ubiquinol:cytochrome c oxidoreductase</b> — two b-type cytochromes, cytochrome c₁ and an iron–sulfur protein — where every electron passed on sends two protons out.',
     'From there a small mobile protein, <b>cytochrome c</b>, slides along the outer face of the membrane with one electron at a time to complex four, <b>cytochrome oxidase</b>, with cytochromes a and a₃ and copper. It reduces oxygen to oxide ions, which take protons from the matrix to make water; this textbook says complex four does not pump.',
     'What drives all of it is the <b>redox potential</b> — how strongly each pair holds its electrons. The textbook’s table runs from NADH at minus 0.32 volts to oxygen at plus 0.82, and electrons pass spontaneously from the more negative to the more positive.',
     'Then complex five, <b>ATP synthase</b>: F₀ is the proton channel in the membrane, F₁ the catalytic head in the matrix. The mechanism is worth stating carefully — the bond between ADP and phosphate is formed in the active site of F₁, but the ATP stays bound; the protons passing through F₀ change the conformation so the finished ATP is released. The energy is spent letting the product go, not making the bond.”'],
  note:'<b>时间不够就砍到三句</b>：一和二把电子交给泛醌，三交给细胞色素 c，四交给氧；质子 2 ＋ 4 出去，合酶放回来。<b>不要砍「为什么 II 不泵」和「合酶把 ATP 松开」</b>——那是他追问时的落点。'},
 {tag:'段 4 · 留口子', h:'诚实地接回主场：电位就是电子的 Kd',
  p:['“This chapter is a long way from what I work on, so let me connect it where the connection is real. A standard <b>redox potential</b> and a <b>dissociation constant</b> are the same kind of quantity: Kd is the equilibrium constant for a protein letting go of its ligand, and a redox potential is where equilibrium sits for a couple letting go of its electrons — a Kd for electrons, written in volts instead of molar. The textbook even puts the two axes side by side: ΔG standard equals minus n F ΔE standard, exactly as ΔG standard equals minus R T ln K for binding.',
     'Both say where equilibrium lies and neither says anything about rate — the distinction I have to make whenever I measure binding: the constant gives the direction, the protein decides the speed.',
     'And I meet this chain from the other end in practice: whether my yeast cultures respire or ferment changes how much protein I get per litre — with plenty of glucose they ferment even in air, the Crabtree effect. That part is general physiology rather than this textbook.”'],
  note:'<b>这一段是诚实的，不是硬接。</b>「电位是电子的 Kd」本身就是 researcher 的标志，而且<b>把口子留在卡 02（Kd）上</b>——他顺着走就走进你的主场。Crabtree 是<b>通用</b>知识，书里 0 命中；讲实验只讲方法学，不点具体病原体（见 `DRILL.md`）。'}
],

why:{
 rungs:[
  ['为什么不让 NADH 直接把电子交给氧，一步完事？','因为那一步的落差是 <b>1,14 V</b>，按书自己的式子 ΔG°′ = −nFΔE°′ 算，两个电子约 <b>−220 kJ/mol</b>；而<b>细胞只能以约 30 kJ/mol（一个 ATP）的份额捕获能量</b>（p135–p136）。一次放掉 220，等于七份里烧掉六份。所以落差必须切成台阶。'],
  ['那为什么台阶的产物是<b>质子梯度</b>，而不是某个高能中间体？','因为两边的货币不一样：氧化那边流通的是<b>电子</b>，磷酸化那边流通的是<b>磷酸基</b>，化学上对不上。膜把它们解耦——每个复合物把电子的落差换成「把质子搬到膜外」这件<b>渗透功</b>，合酶再把渗透功换回化学功。<b>书 p141 就是这么说的</b>：装进膜里的反应获得空间方向（矢量性），这使化学能与渗透功可以互换。'],
  ['那质子回流为什么就能造出 ATP？','因为 ADP + Pᵢ → ATP 的 ΔG°′ 是 <b>+30,5 kJ/mol</b>，本身走不动；质子顺梯度回流是放能的，合酶把两者<b>机械地</b>耦合起来。书说得更精确：<b>能量不是花在成键上</b>——键在 F₁ 的活性位点里自己就形成了，那份能量用来改变构象，<b>把做好的 ATP 松开</b>。']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“Below that we are asking how an electrochemical gradient becomes mechanical rotation and then binding energy inside a protein — that is bioenergetics and physical chemistry rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is the respiratory chain?',
 mean:'<b>他嘴里多半只有这一句。</b>卷面写了 “describe … and its role in cellular respiration”，口试却从最短的问法起步——<b>剩下的结构要你自己接</b>：是什么 → 在哪 → 把什么变成什么 → 在呼吸里的角色 → 然后才是名字。',
 say:'“It is the series of electron carriers built into the inner mitochondrial membrane — four complexes with two mobile carriers between them — that passes the electrons from NADH and FADH₂ down to oxygen and uses the energy to pump protons out of the matrix. Its role in cellular respiration is the last step: the hydrogen taken off the nutrients finally meets the oxygen and becomes water, the oxidised coenzymes are regenerated, and the gradient it builds is what ATP synthase turns into ATP. The four complexes are all oxidoreductases, and ubiquinone and cytochrome c move between them.”'},

{q:'What is oxidative phosphorylation?',
 mean:'<b>并进来的那道题（#26），会被单独问。</b>先给定义，再说它跟链的关系，最后才是数字。',
 say:'“It is the synthesis of ATP from ADP and inorganic phosphate, driven by the proton gradient the chain has built across the inner mitochondrial membrane. The protons flow back into the matrix through ATP synthase, and that flow drives the release of the ATP. Oxidative because the energy comes from oxidising NADH and FADH₂; phosphorylation because it is spent adding a phosphate to ADP. The textbook calls it aerobic phosphorylation, and converts six protons into about three ATP per NADH.”'},

{q:'What is its role in cellular respiration?',
 mean:'卷面上多出来的那半句，<b>他会单独问</b>。要答「它在整条路上的位置」，不是重复定义。',
 say:'“Cellular respiration is the complete oxidation of a nutrient to CO₂ and water. Glycolysis, the oxidative decarboxylation of pyruvate, the citric acid cycle and β-oxidation take the carbon off as CO₂ and park the hydrogen on NAD-plus and FAD. The chain is where that hydrogen finally reaches the oxygen. It does two things: it regenerates the oxidised coenzymes, without which all those pathways stop, and it turns the energy into a proton gradient — thirty-four of the thirty-eight ATP per glucose come from that gradient.”'},

{q:'Describe the electron transport — what is actually being transported?',
 mean:'卷面上的 “electron transport” 四个字。<b>他要的是：谁在动，动到哪。</b>',
 say:'“Electrons, and part of the way protons travel with them. NADH gives two electrons to complex one, which passes them to ubiquinone — a lipid-soluble quinone that carries two electrons with two protons inside the membrane. Ubiquinone takes them to complex three, which passes them one at a time to cytochrome c on the outer face, and cytochrome c takes them to complex four, which gives them to oxygen. The carriers alternate: some carry electrons with protons, the iron–sulfur centres and cytochromes carry electrons only — which is what leaves the protons outside.”'},

{q:'Which complexes pump protons, and how many?',
 mean:'<b>要数字的问法。</b>先给书的数，再说明现代值差在哪——不要只给一个数。',
 say:'“On this textbook’s account, complex one pumps two protons per pair of electrons, complex three four, complex four none — six per NADH. Succinate enters at complex two, which pumps nothing, so that route gives four. Six protons correspond to about three ATP, four to about two. Modern textbooks count complex four as a pump too, ten protons per NADH, which with about four protons per ATP gives 2.5 and 1.5 — that part is general, not from this book.”'},

{q:'How are the chain and the ATP synthesis coupled together?',
 mean:'<b>这是 #26 真正的考点</b>，也是「化学渗透」该出现的地方。顺带把区室说清：链在<b>内膜</b>，循环在<b>基质</b>，质子被泵进<b>膜间隙</b>。',
 say:'“Only through the proton gradient. The chain pumps protons out of the matrix into the intermembrane space and builds a transmembrane difference in proton concentration; ATP synthase lets them back in and uses the flow. No chemical intermediate passes between them — that is the chemiosmotic principle, and it is why an uncoupler, which simply leaks protons back, stops ATP synthesis while the chain runs faster than ever.”'},

{q:'Why does cyanide kill you so quickly?', odd:1,
 mean:'<b>听起来像毒理学题。</b>答案全在这张卡上——这种入口最容易把人问懵。',
 say:'“Because it blocks cytochrome oxidase, the last complex of the chain, so oxygen can no longer take the electrons. Everything upstream stays reduced, no protons are pumped, and oxidative phosphorylation stops — thirty-four of the thirty-eight ATP per glucose. Glycolysis keeps running, but two per glucose is nowhere near enough for brain and heart. The striking part is that the blood stays oxygenated: the oxygen is there, the cell cannot use it. Cyanide is general knowledge, not in this textbook.”',
 tail:'<b>卡 gly 也有这一条</b>，从糖酵解那一侧答。两边说的是同一件事：糖酵解不停，但它不够。'},

{q:'Why do we need to breathe oxygen at all?', odd:1,
 mean:'<b>最朴素的问法，最容易答得空。</b>要落在「最后的电子受体」上。',
 say:'“Because oxygen is the final electron acceptor. Every oxidation in metabolism hands a pair of electrons to a coenzyme, and the pool of coenzyme is small — the cell must unload them somewhere to get NAD-plus back. Oxygen is what the chain unloads them onto, because it sits at the positive end of the scale: plus 0.82 volts against minus 0.32 for NADH. Without it the carriers stay reduced, the coenzymes are not regenerated, and the cycle stops — not because oxygen reacts with the nutrient, but because nothing else can take the electrons.”'},

{q:'Why do you breathe faster when you run?', odd:1,
 mean:'<b>生理学入口，生化答案。</b>答在 ADP 上——书自己说限速的是 ADP。',
 say:'“Because the muscle is spending ATP, which means producing ADP — and ADP is what limits the chain. The textbook gives phosphorylation in the respiratory chain as its example of regulation by a limiting metabolite: with more ADP the synthase lets more protons through, the gradient falls, electron transport speeds up and more oxygen is consumed. So the demand for ATP pulls the oxygen in, rather than the oxygen pushing the ATP out.”',
 tail:'后半句（梯度落下去、传递加速）是<b>通用</b>推论；书只写了「限制因素是 ADP 够不够」。<span class="pg">p222</span>'},

{q:'Why is brown fat warm?', odd:1,
 mean:'<b>听起来像生理题，其实问的是耦合。</b>解偶联那一格的现成出口。',
 say:'“Because in brown fat the chain is deliberately uncoupled from ATP synthesis. A protein in the inner membrane, thermogenin, lets protons back into the matrix without passing through ATP synthase, so the gradient is spent as heat and the chain runs fast to keep rebuilding it. It is what 2,4-dinitrophenol does chemically — which is why it was lethal as a diet pill. General knowledge; this textbook has neither uncouplers nor brown fat.”'},

{q:'Why is the inner membrane of a mitochondrion folded?', odd:1,
 mean:'<b>形态学入口。</b>答面积和区室两件事，落回「膜是专门化的」。',
 say:'“Because the machinery is in the membrane, not in solution, so how much ATP a mitochondrion can make is limited by membrane area — folding multiplies the area without making the organelle bigger. The folds also enclose a small intermembrane space, so the protons pumped out raise the concentration there quickly. The textbook’s own remark is that membranes are specialised, and that only the inner mitochondrial membrane is responsible for producing ATP.”',
 tail:'「cristae」这个词书里 0 命中，所以用 folds 说，被问再给名字。<span class="pg">p197</span>'},

{q:'Cells die without oxygen, but glycolysis does not need oxygen — so why do they die?', odd:1,
 mean:'<b>这个入口专门用来把人问懵。</b>答案有两层：够不够，和 NAD⁺ 回不回得来。',
 say:'“Two reasons. First, arithmetic: glycolysis alone gives two ATP per glucose against the textbook’s thirty-eight, and brain and heart cannot run on that. Second, and more fundamental, glycolysis needs NAD-plus back. Without the chain the only way to regenerate it is to reduce pyruvate to lactate, or to ethanol in yeast — which works, but throws away most of the energy: minus 196.6 kJ per mole for glucose to lactate against minus 2870 for complete oxidation.”',
 tail:'数字见卡 <b>gly</b> 和书 <span class="pg">p135 p136</span>。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'逐字稿里没交代完的名词，他会一个一个拎出来问。', items:[
{r:'高', q:'What is a redox potential?',
 en:'“A number in volts saying how strongly a redox pair holds its electrons, measured against a standard electrode at pH 7. The more negative, the more readily that system gives electrons away — and electrons pass spontaneously from the more negative system to the more positive one.”',
 cn:'Tab. 6.2 <span class="pg">p135</span>，<b>已回 300 dpi 核过</b>，从 acetaldehyde 的 −0,60 排到氧的 +0,82。被追「跟 ΔG 什么关系」——同一页给了桥：ΔG°′ = −nFΔE°′；E 轴有约定原点（生物系统里氢电极 −420 mV），ΔG 轴没有，只能配给<b>电位差</b>。'},
{r:'高', q:'What is a prosthetic group, and which ones are in the chain?',
 en:'“A cofactor bound permanently to the protein, unlike a coenzyme that comes and goes. The chain has four kinds: <b>flavins</b> — FMN in complex one, FAD in two; <b>iron–sulfur centres</b>, non-heme iron held by cysteine sulfurs; <b>hemes</b>, iron in a porphyrin ring, in cytochromes b, c₁, c, a and a₃; and <b>copper</b> in complex four.”',
 cn:'全部在书里：黄素 <span class="pg">p045</span>、血红素与五种细胞色素 <span class="pg">p046</span>、FeS 的三种结构（线型、Fe₂S₂ 平面、Fe₄S₄ 立体）<span class="pg">p046</span>、铜 <span class="pg">p144</span>。<b>「辅基 vs 辅酶」本身就是一道小题</b>，顺手答掉。'},
{r:'中', q:'What is ubiquinone, and why must it be lipid-soluble?',
 en:'“Coenzyme Q — a small quinone, not a protein, carrying two electrons together with two protons. It must be lipid-soluble because its job is to move <b>inside</b> the membrane, from complex one or two across to complex three. The textbook calls it the intermediary between the flavoproteins and the cytochromes.”',
 cn:'<span class="pg">p045 p142</span>。书说它「因为疏水所以自由移动」，并在醌、半醌、氢醌三态之间循环。植物里对应的是 <b>plastoquinone</b>——<b>这一句直接接到光合那道题</b>（#27）。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方 —— 他插刀就插在这里。', items:[
{r:'高', q:'Why does complex II not pump protons?',
 en:'“Because that step releases too little energy. Succinate to ubiquinone is 0.07 volts; NADH into the same acceptor is 0.42. Through the textbook’s equation, ΔG equals minus n F ΔE, that is about 14 kJ per mole against 81 — and the book says energy is captured in quanta of about 30.”',
 cn:'电位、式子和 30 kJ 的量子都在 <span class="pg">p135</span>；<b>换算是我们做的，书只给了结果</b>（走 II 那条路只有 4 个质子，p145）。报的时候说「按你这本书的表和式子算」。'},
{r:'高', q:'How does passing an electron move a proton across the membrane?',
 en:'“Through the alternation of two kinds of carrier. NAD-plus, FMN and quinone carry electrons together with protons; iron–sulfur centres and cytochromes carry electrons only. So when a proton-carrying form is oxidised by an electron-only carrier on the outer side, the protons are left outside while the electrons travel on — and each carrier has a fixed place, so the transfer has a direction.”',
 cn:'<span class="pg">p142</span>。<b>书用的词是 zdánlivý（表观的）</b>：质子不是被一台泵抽过去的，是被交替的载体在两侧一取一放<b>搬</b>过去的。<b>「pump」这个词本身不解释任何事，这一句才解释。</b>'},
{r:'高', q:'Why is the yield “about” three ATP and not a whole number?',
 en:'“Because nothing in the mechanism requires a whole number. The chain pumps a certain number of protons, the synthase needs a certain number per ATP, and the two counts are independent — six protons and roughly three ATP is a ratio, not a stoichiometry. The textbook itself writes <b>approximately</b> three.”',
 cn:'书 p146 用的正是「přibližně 3 ATP」「asi 2 ATP」。现代值：约 10 个质子/NADH、约 4 个质子/ATP（3 个转动 ＋ 1 个把磷酸运进来）→ <b>2.5 和 1.5</b>，<b>书里 0 命中，标 general</b>。这条同时回答「为什么现代教材说 30–32」；另一半原因（胞质 NADH 要穿梭进来）见卡 <b>gly</b>。'},
{r:'中', q:'Why does everything stop when oxygen runs out?',
 en:'“Because the chain is a queue with one exit. With no oxygen to take the electrons, complex four stays reduced and so does everything upstream — no carrier can pass an electron to one that is already full. No electron flow means no gradient and no ATP; and NAD-plus is never regenerated, so the dehydrogenases have nothing to hand their hydrogen to.”',
 cn:'<b>这条把「氧是最后的电子受体」讲成了机制</b>，比重复定义有力。<b>停的直接原因是 NAD⁺ 不够，不是氧不够</b>——他要是追，就说这一句。'}
]},

{g:'怎么发现的', gn:'书里一个字都没有，全部 general —— 但正因为没有，说得出就特别显眼。', items:[
{r:'中', q:'Where does the chemiosmotic idea come from?',
 en:'“From Peter Mitchell, in 1961. Before that people were hunting for a chemical high-energy intermediate linking oxidation to ATP synthesis, and it was never found — because there is none: the intermediate is not a molecule but a gradient across a membrane. He was given the Nobel Prize in 1978.”',
 cn:'全书 grep：Mitchell 0、chemiosmot 0，<b>但原理写全了</b>（<span class="pg">p141</span>）。说的时候补一句 “general knowledge; the textbook states the principle without the name”。<b>「人们找了很久那个化学中间体，因为它根本不存在」是这道题最好的历史。</b>'},
{r:'中', q:'What is an uncoupler, and what does it prove?',
 en:'“A lipid-soluble weak acid such as 2,4-dinitrophenol that picks up a proton on one side of the membrane and releases it on the other, short-circuiting the gradient. The chain then runs faster than ever, no ATP is made, and the energy comes out as heat. It proves that the two halves are connected only by the gradient.”',
 cn:'general，书里 0 命中。<b>成对使用才有力</b>：oligomycin 只挡合酶却也挡住了电子传递（说明耦合），加解偶联剂电子传递又跑起来（说明耦合走的是梯度）。棕色脂肪用 thermogenin 做同一件事。'}
]},

{g:'陷阱', gn:'这几条几乎每次都会被问，而且都是一句话说错就掉分的那种。', items:[
{r:'高', q:'So the respiratory chain makes the ATP?',
 en:'“No — the chain makes a <b>gradient</b>; ATP synthase makes the ATP. The textbook is explicit: complex five, unlike all the others, is not an oxidoreductase but a phosphorylating enzyme, and it is the only one where protons move <b>with</b> the gradient. Anything that leaks protons back stops the ATP without stopping the chain.”',
 cn:'<span class="pg">p145 p146</span>。<b>这是这道题最常见的说错。</b>说 “the chain produces ATP” 就等于承认没分清两半。'},
{r:'高', q:'Which way do the protons go?',
 en:'“<b>Out</b> of the matrix, into the intermembrane space — the textbook calls it the cytosolic side — pumped against their gradient by complexes one and three. Then back <b>in</b> through ATP synthase, with the gradient, which levels the difference out again. In the chloroplast it is the other way round: protons are pumped into the thylakoid.”',
 cn:'<span class="pg">p142 p146</span>；类囊体方向相反见 <span class="pg">p208</span>（书自己把两者并排讲了）。<b>方向说反了，整台机器就反了。</b>'},
{r:'中', q:'Is oxygen a reactant that gets burned?',
 en:'“No. Oxygen never meets the nutrient. It sits at the end of the chain as the final electron acceptor: cytochrome oxidase gives it electrons, it becomes oxide ions, and those take up protons from the matrix to give water. The carbon left much earlier as CO₂ — so the CO₂ we breathe out and the O₂ we breathe in never meet.”',
 cn:'<b>最后半句是很好用的一击。</b>式子 ½ O₂ + 2 e⁻ + 2 H⁺ → H₂O（<span class="pg">p144</span>）。这里造的水就是所谓<b>代谢水</b>：葡萄糖氧化总式里那六个水几乎全部出自这一步（<b>这半句是通用说法</b>，书只给总式）。'},
{r:'中', q:'Does NADPH go into the respiratory chain too?',
 en:'“No — and the textbook says so directly: the NADPH from the pentose phosphate pathway is not oxidised in the respiratory chain but used for synthetic reactions. The two differ by one phosphate on the ribose, and the cell keeps them for different jobs — NADH for catabolism and the chain, NADPH for reductive biosynthesis.”',
 cn:'<span class="pg">p219</span>。<b>价值在于「一个磷酸就把两条路分开了」</b>——这类「结构上的小差别 = 功能上的大分工」正是他喜欢的。'}
]},

{g:'相邻考点', gn:'从这道题走出去，他多半走这三个方向。每个一句话就能接住。', items:[
{r:'高', q:'Where do the NADH and FADH₂ come from?',
 en:'“The textbook lists four sources: the four dehydrogenation steps of the citric acid cycle, the oxidative decarboxylation of pyruvate, the β-oxidation of fatty acids, and glyceraldehyde-3-phosphate dehydrogenation when glycolysis runs aerobically. The cycle is much the largest supplier, and it runs in the matrix right beside the membrane.”',
 cn:'四个来源是书列的（<span class="pg">p141</span>），「循环是最重要的供应者」在 <span class="pg">p220</span>。<b>有个坑</b>：糖酵解那两个 NADH 在<b>胞质</b>里，过不了内膜，只有电子靠穿梭进去（general，书里没有）。英文：“One catch: the glycolytic NADH is made in the cytosol and cannot cross the inner membrane — only its electrons cross, by a shuttle. That is general knowledge.”'},
{r:'中', q:'Is there anything like this in photosynthesis?',
 en:'“Yes — the textbook treats the thylakoid membrane as the closest analogue of the inner mitochondrial membrane, with the same kinds of carriers: quinones, cytochromes, iron–sulfur proteins, flavoproteins, and an ATP synthase of the same composition, CF₀ and CF₁. Two differences: light pushes the electrons uphill, and the protons are pumped <b>into</b> the thylakoid.”',
 cn:'<span class="pg">p206 p208</span>。<b>书自己把两者并排写了</b>，所以这是有出处的类比，不是你的发挥。接 #27 光合。'}
]},

{g:'桥回主场', gn:'段 4 那条桥，被追问时的第二层。<b>接住了就落在卡 02（Kd）上。</b>', items:[
{r:'中', q:'You measure binding constants — is a redox potential anything like that?',
 en:'“They are the same kind of quantity. A dissociation constant is the equilibrium constant for a protein letting go of its ligand; a standard redox potential is where equilibrium sits for a couple letting go of its electrons — a Kd for electrons, in volts rather than molar. Both fix the direction and neither says anything about the rate.”',
 cn:'<b>这是这张卡上最诚实的一座桥</b>：不是「我的课题也用呼吸链」，而是「这两个常数是同一件事」。顺势可加：“The textbook even puts the two axes side by side: ΔG standard equals minus n F ΔE standard, exactly as ΔG standard equals minus R T ln K.”（式子 <span class="pg">p135</span>，−RT ln K 那半句通用）。<b>接住之后就走进卡 02。</b>'},
{r:'中', q:'Does any of this matter in your own cultures?',
 en:'“Indirectly, and I would not overstate it. Whether the yeast respire or ferment decides how much protein I get per litre — with plenty of glucose they ferment even in air, the Crabtree effect, and the culture makes ethanol instead of using the chain. So two ATP against thirty is a practical difference, but it is physiology rather than something I measure.”',
 cn:'<b>诚实地短。</b>Crabtree 是通用知识，书里 0 命中。<b>不点具体病原体、不展开课题</b>——见 `DRILL.md` 的三条机制。'}
]}
]
});
