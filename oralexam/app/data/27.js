/* 卡 27 · Explain the process of photosynthesis. —— 题库 #27（S3 Biochemistry 15）。邻居 #28 只碰一下。

   出处 §9.1：p202（定义、通式 H₂D + A、thylakos、chloroplast、stroma 固定 CO₂、自养的五条专属代谢）·
   p203（Obr. 9.1 叶绿体、两条总式与 ΔG°′ = +2867、氧来自水、四个学科的时间尺度）· p204（Obr. 9.2 色素结构）·
   p205（三类色素、porfyrin ＋ fytol、只有 chl a 是能量转换器、415–440 与 640–700 nm、红的补色是绿、辅助色素）·
   p206（Obr. 9.4、类囊体膜与内膜同类、plastocyanin 四参数、OEC、一个／两个光系统）· p207（Obr. 9.5、RC、
   P + hν → P*、P₈₇₀/P₆₈₀/P₇₀₀、天线 ≈ 200:1）· p208（循环流只产 ATP、Z 图、820 与 −320 mV、PS II／PS I 的定义、
   内表面光解／外表面还原 NADP⁺、表观 vs 真实质子转移、梯度方向相反）· p209（合酶朝外、取向的进化解释、
   NADPH ＋ ATP 是第一批稳定产物、「暗反应」这名字不合适、总式的两个误读、Calvin/Benson/Bassham、RubisCO）·
   p210（八个活性位点、第一稳定产物 3-PG ＝ C-3、还原段是糖酵解倒着走、再生回 Ru5P）· p211（Obr. 9.6 酶名、
   净产物 F6P）· p212（F6P → G6P → 葡萄糖／纤维素／糖酵解；§9.2 光呼吸三酶、竞争同一底物、保护、Gly/Ser、三区室）。
   旁证：p019（约 25–30 亿年前、氧最初是毒）· p045（plastochinon ＝ 植物的辅酶 Q）· p046（Fe-S／血红素）·
   p135（葡萄糖有氧 −2870）· p183（fytol）· p186–p187（类胡萝卜素：四萜、β-胡萝卜素、zeaxanthin、结合活性氧）·
   p216（§9.4 光合供 Fd）· p219–p220（NADPH 不进呼吸链，只做合成）。

   回 400 dpi 核过八处：p202 通式；p203 的 12 H₂O + 6 CO₂ 式与 +2 867；p203 时间尺度 10⁻¹⁵–10⁻⁸ 与 10⁻¹⁰–10⁻²；
   p204 Obr. 9.2 中心是 Mg、圈出的 chl b 差别在第 II 环的 –CHO、fytol 尾；p205 的 640–700 nm 与「红的补色是绿」；
   p206 的 plastocyanin（Mr 1–2·10⁴、~597 nm、370 mV、Cu²⁺、蓝）；p207 Obr. 9.5 全图与图注（P₆₈₀ P₇₀₀ Pheo
   Q_A Q_B OEC PC Fd CF₀ CF₁ Fd–NADP⁺ reduktasa ＋ FAD、3 H⁺/ATP、2 H₂O → 4 H⁺ + O₂）；p208 的 E°′ O₂/H₂O
   = 820 mV（OCR 读成 520，是 OCR 错，书没错，不进勘误——书自己 Tab. 6.2 印的是 +0,82 V）。

   两条观察，只报告不改文档：① grep「granum」全书 0 命中，但 Obr. 9.1 标注里有 granum · stroma · stromální
   thylakoidy · lumen——图承载了正文没有的锚点。② §9 正文**有加粗**（Thylakoidní membrány、chloroplasty），
   跟 LOGIC.md §7「全书一个加粗都没有」不一致。

   全书 grep 0 命中，卡上全部标 general：Mitchell / chemiosmot · mangan（OEC 的锰簇）· Ruben / Kamen（¹⁸O）·
   Hill（p229 只有 McGraw-Hill）· 8 个光子 · 3 ATP ＋ 2 NADPH / CO₂ 与 18 ＋ 12 / 己糖 · antokyan · LHC ·
   「最丰富的蛋白」这个最高级（书写的是「之一」）· rubisco 速率与选择性的权衡。

   她没学过这一章，所以这张卡是教，不是提醒。镜像卡是 25，账的样式照卡 24。 */

window.CARDS.push({
id:'27', n:27, w:1,
q:'Explain the process of photosynthesis.',
qcn:'解释光合作用的过程',
sub:'主干说完约 90 秒 · §9.1（p202–p212）· 卡 25 的镜像：同一台合酶、同一个梯度，只是光把电子推上坡',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'题面只有两个实词。<b>photosynthesis</b> 先给定义再拆两半；<b>process</b> 是他要的形状——按<b>顺序</b>走完一条路，不是报一串名词。他嘴里多半只有 “What is photosynthesis?”，剩下的结构要你自己接。<b>这一章她没学过，所以前三点是学，不是提醒。</b>'},
 {n:'01', t:'定义 · 什么是光合作用',
  big:'把<b>光能变成化学能</b>：光同时驱动<b>水的氧化</b>和 <b>CO₂ 的还原</b>，产物是糖和 O₂。<b>氧来自水，不是 CO₂</b>',
  en:'“<b>Photosynthesis is the biological conversion of radiant energy into chemical energy</b> — this textbook’s own definition. Light drives two things at once: the <b>oxidation of a donor</b> and the <b>reduction of carbon dioxide</b> to carbohydrate. The book’s general form is <b>H₂D plus A, over the pigments, giving H₂A plus D</b> — H₂D the donor of electrons and protons, A the acceptor, which it says is carbon dioxide in every photosynthesising organism. In green plants the donor is <b>water</b>, which is why oxygen comes off.”',
  good:'顺势可加：“Some bacteria use hydrogen sulfide as the donor instead and deposit <b>sulfur</b> — the book prints that equation too.”',
  note:'<b>先说它是什么，别一上来就 “light and dark reactions”</b>——那是分类不是定义。通式已回 400 dpi 核过。<b>通式这一句最值钱</b>：它把植物、蓝细菌、硫细菌装进一个框，还顺带解释了氧为什么来自水——<b>水站的是 H₂D 的位置，被氧化的那一边</b>。<span class="pg">p202</span>'},
 {n:'02', t:'总式 ＋ 氧来自水',
  big:'每个碳：<b>2 H₂O ＋ CO₂ → (CH₂O) ＋ O₂ ＋ H₂O</b>；一分子己糖：<b>12 H₂O ＋ 6 CO₂ → C₆H₁₂O₆ ＋ 6 O₂ ＋ 6 H₂O</b>，<b>ΔG°′ = +2867 kJ/mol</b>',
  en:'“Per carbon, <b>two waters plus CO₂ give one carbohydrate unit, one oxygen and one water</b>; for a hexose, <b>twelve waters and six CO₂ give glucose, six oxygens and six waters, at plus 2867 kilojoules per mole</b>. The textbook writes twelve rather than six on purpose — its words are that the factors are given <b>to stress that the oxygen released comes from water and not from carbon dioxide</b>.”',
  warn:'<b>正号。</b>+2867 是<b>吸能</b>的——这就是为什么非要有光。说成 −2867 等于把光合说成了呼吸。',
  good:'顺势接镜像：“The same book gives the complete oxidation of glucose as <b>minus 2870</b> — one energy read in opposite directions.”（−2870 见 <span class="pg">p135</span>）',
  note:'两条式子和 ΔG°′ <b>已回 400 dpi 逐字核过</b>。<b>「氧来自水」是这题最常考的一句</b>，而书把它写成了写式子的<b>理由</b>，不是脚注——引用书的动机比引用结论有力。<span class="pg">p203</span>'},
 {n:'03', t:'两半 ＋ 在哪儿跑（含「暗」这个陷阱）',
  big:'<b>光反应</b>在<b>类囊体膜</b>上，出 <b>ATP ＋ NADPH ＋ O₂</b>；<b>固定 CO₂</b>在<b>基质</b>里，把这两样花掉。「dark」= <b>不直接需要光</b>，<b>不是夜里</b>——书自己说这名字不合适',
  en:'“Two halves in two places. The <b>light reactions</b> run in the <b>thylakoid membrane</b> — thylakos is Greek for a sac, and thylakoids are closed flattened vesicles stacked in the chloroplast — and give <b>ATP and NADPH</b>, with oxygen released as water is split. The <b>fixation of CO₂</b> runs in the <b>stroma</b> outside them and spends those. This textbook objects to the name <b>dark reactions</b>: it says the term is <b>not appropriate, because it suggests the conversion does not occur in the light</b>. Dark means <b>not directly requiring light</b>, not at night.”',
  note:'<b>Obr. 9.1 的标注（400 dpi 核过）</b>：外膜 · 内膜 · 膜间隙 · <b>granum</b>（一摞类囊体）· <b>stromální thylakoidy</b> · <b>stroma</b> · <b>lumen ＝ 类囊体内腔</b>。⚠ <b>全书正文 grep「granum」0 命中，这词只在图上</b>，所以说 “the textbook labels the grana in its diagram of a maize chloroplast”。<br><b>他可能让你画叶绿体。五步，边画边说</b>：① 椭圆，外面<b>两条</b>贴着的线 ＝ 外膜 ＋ 内膜，缝里写 <b>intermembrane space</b>；② 内部空白写 <b>stroma</b>（rubisco 和 Calvin 在这儿）；③ 里面画两摞压扁的饼，标 <b>granum</b>，一片 ＝ 一个 <b>thylakoid</b>；④ 长条连起两摞，标 <b>stroma thylakoid</b>；⑤ 在一片里面写 <b>lumen</b>，箭头<b>向内</b>写 <b>H⁺</b>。<b>画完这五步，「光反应在哪、暗反应在哪、质子往哪去」一起答完了。</b><span class="pg">p202 p203 p209</span>'},

 {g:'账', gn:'投入 / 产出 / 总结三行，缺一不可。只报产出是半张账——他一句「那消耗了什么」就能把你问停。<b>这张账分两侧记：光反应造账，固定 CO₂ 花账。</b>'},
 {n:'04', t:'投入',
  big:'<b>光反应</b>：2 <b>H₂O</b> ＋ <b>光子</b> ＋ ADP ＋ Pᵢ ＋ NADP⁺ · <b>Calvin（每个 CO₂）</b>：1 <b>CO₂</b> ＋ 1 <b>RuBP</b>（被回收）＋ <b>3 ATP</b> ＋ <b>2 NADPH</b>',
  en:'“In go, on the light side, <b>water, photons, ADP with phosphate, and NADP-plus</b>; the figure writes the water step as <b>two H₂O giving four protons and one O₂</b>. On the Calvin side, per CO₂ fixed: <b>one CO₂, one ribulose-1,5-bisphosphate, three ATP and two NADPH</b>. The three and the two are the standard figures — <b>this textbook prints no ATP or NADPH count anywhere</b>.”',
  warn:'<b>3 ATP ＋ 2 NADPH 是通用数，书里没有</b>，报的时候带一句 “those are the standard numbers, not this book’s”。书<b>确实印了</b>的只有图上那几个：2 H₂O → 4 H⁺ ＋ O₂、<b>3 个质子换 1 个 ATP</b>、2 NADP⁺ ＋ 2 H⁺ → 2 NADPH。',
  note:'<b>RuBP 不算净投入</b>——第 1 步被消耗、再生段被造回来，跟柠檬酸循环里的 oxaloacetate 一样是<b>被回收的</b>。这点他很可能追，跟卡 <b>24</b> 同一招。<span class="pg">p207 p209 p210</span>'},
 {n:'05', t:'产出',
  big:'<b>光反应</b>：<b>ATP ＋ NADPH</b>（书叫它们「第一批稳定产物」）＋ <b>O₂</b> · <b>Calvin（每个 CO₂）</b>：2 × <b>3-phosphoglycerate</b> → 2 GAP，净出<b>一个碳</b>；ADP、Pᵢ、NADP⁺ 还回去',
  en:'“Out come, on the light side, <b>ATP and NADPH</b> — the book’s phrase is that the thylakoid processes give <b>NADPH and ATP as the first stable products, in which the energy of the photons is stored as chemical energy</b> — plus <b>oxygen</b>. On the Calvin side each CO₂ gives <b>two 3-phosphoglycerates</b>, reduced to two triose phosphates, and the ADP, phosphate and NADP-plus go back to the membrane.”',
  note:'<b>「第一批稳定产物」很好用</b>：它把光反应的产出说成<b>能量的储存形式</b>，不是一堆分子。书给的循环净产物是<b>一个 F6P</b>，再走 G6P → 葡萄糖／纤维素／糖酵解。<span class="pg">p209 p211 p212</span>'},
 {n:'06', t:'总结（净账）',
  big:'<b>光反应造账，暗反应花账。</b>每固定 1 个 CO₂ 花 <b>3 ATP ＋ 2 NADPH</b>（通用数）；<b>六圈</b>才净出一个己糖 → <b>18 ATP ＋ 12 NADPH</b>。<b>碳全部来自 CO₂，氧和还原力全部来自水</b>',
  en:'“The net: the light reactions make <b>ATP and NADPH and nothing else that lasts</b>; the Calvin cycle consumes them and fixes carbon. Three ATP and two NADPH per CO₂, so <b>six turns</b> for one hexose — eighteen and twelve, standard figures rather than this book’s. In one line: <b>every carbon in the sugar comes from CO₂, and every oxygen molecule released comes from water, as does the reducing power.</b>”',
  warn:'书自己警告了总式的<b>两个误读</b>（值钱）：① 六个 CO₂ 的碳<b>不是</b>都进同一个糖分子；② 固定 CO₂ <b>不只是</b>为了造己糖。英文：“The book warns the summary equation invites two wrong readings: that the six carbons end up in one sugar, and that hexose is the point. Most of the fixed carbon goes into the central pathways — it names the citric acid cycle — as skeletons for amino acids, fatty acids, nucleotides and pigments.”',
  note:'<b>这一格最容易只答一半。</b>「六圈」那句能挡住 “how many turns for one glucose”。<span class="pg">p203 p209</span>'},

 {g:'色素', gn:'三类，书自己编了号。<b>每类只记三件事：结构的核心、在光合里干什么、书给的例子。</b>结构式不用背，但<b>卟啉环 ＋ 中心的镁 ＋ 植醇尾</b>三个词必须能说出口。'},
 {n:'07', t:'叶绿素的结构',
  big:'一个<b>卟啉</b>（四个吡咯环用<b>甲川桥</b>连成的大环，共轭双键很多），中心是 <b>Mg²⁺</b>，外加一条 <b>C₂₀ 的植醇（phytol）尾</b>。<b>卟啉负责光化学，尾巴负责插在膜里</b>',
  en:'“The textbook’s first class of photosynthetic pigment, and it says chlorophylls are <b>porphyrins — molecules similar to heme, as in haemoglobin and the cytochromes</b>. A porphyrin is <b>four pyrrole rings joined by methine bridges, with a rich system of conjugated double bonds</b>, and that conjugation is what absorbs visible light. At the centre sits <b>magnesium</b> where heme has iron. Besides the porphyrin, which it says is <b>always responsible for the photochemical properties</b>, the molecule carries the <b>twenty-carbon phytyl tail</b> that anchors it in the membrane.”',
  good:'他要证据：“The book’s own evidence for the magnesium is in the legend of figure 9.5, where it defines <b>pheophytin as chlorophyll without the Mg ion</b> — and pheophytin is a real carrier in photosystem II.”',
  note:'<b>正文没写 Mg，图上写了。</b>Obr. 9.2（400 dpi 核过）中心就是 <b>Mg</b>，四环标 I–IV，引出 <b>fytol</b>。<b>接回三张卡</b>：卟啉抱铁的<b>配位键</b>在横向卡「化学键」（p037）；<b>phytol 是二萜醇</b>在卡 <b>23</b>（p183 明说是叶绿素 a、b 的组成部分）；<b>四吡咯 ＋ 甲川桥</b>在卡 <b>25</b> 的细胞色素格（p046）。<b>一句 “same ring as heme, different metal” 就把三张卡连起来。</b><span class="pg">p046 p183 p204 p205</span>'},
 {n:'08', t:'chlorophyll a 与 b · 为什么植物是绿的',
  big:'<b>只有 a 真正做能量转换</b>，b 是把能量递给它。差别在<b>第 II 环一个基团</b>：a 是 <b>–CH₃</b>，b 是 <b>–CHO</b>。绿色是<b>剩下来的</b>：叶绿素吃掉<b>蓝 415–440</b> 和<b>红 640–700 nm</b>，中间<b>没被吸走</b>的就是绿',
  en:'“<b>Chlorophyll a</b> is universal in oxygenic photosynthesis, and the book says this led to the correct view that <b>only chlorophyll a is the actual transformer of energy</b>. <b>Chlorophyll b is accessory</b> — it absorbs and passes the energy on — and they differ at <b>one substituent on ring two: methyl in a, formyl in b</b>. Chlorophyll absorbs in the blue, <b>415 to 440 nanometres</b>, and the red, <b>640 to 700</b>; the book’s sentence is that <b>the complementary colour of red is green, and that is why the plant world is green</b>.”',
  warn:'<b>书有一处自己跟自己拉扯。</b>p205 说绿是红的补色；Obr. 9.4 的图注却说这些色素<b>「实际上覆盖了可见区的整个太阳光谱」</b>。怎么同时成立：填补 500–600 nm 的是 <b>fykoerythrin 和 fykocyanin</b>，而书自己说<b>那是蓝细菌和红藻的色素</b>。英文：“The figure says the pigments cover almost the whole visible spectrum, but the ones filling the green gap are the phycobilins of cyanobacteria and red algae — a higher plant has only chlorophylls and carotenoids, so the gap stays open and the leaf looks green.”',
  good:'书还有一条几乎没人知道的，可以顺势给：“The textbook adds that the <b>blue band is not significant for photosynthesis</b>: it excites the electron into the <b>second singlet state</b>, whose lifetime is too short to start the redox reactions — only the red band, the <b>first singlet state</b>, is useful. The general account is that the molecule relaxes down to the first singlet within femtoseconds, so blue light <b>is</b> used, but a blue photon ends up worth no more than a red one. I would give the book’s version first.”',
  note:'a/b 的取代基差别取自 <b>Obr. 9.2 圈出来的那块</b>（400 dpi 核过），正文没写。<b>第二单重态那条先给书的，被追问再给通用那层并标 general。</b><span class="pg">p204 p205 p206</span>'},
 {n:'09', t:'类胡萝卜素：辅助 ＋ 保护',
  big:'第三类色素，<b>四萜（isoprenoid）</b>，靠 <b>3–11 个共轭双键</b>显色。两个作用：<b>①</b> 补上叶绿素吸不到的那段光，把能量递进反应中心；<b>②</b> <b>结合活性氧</b>当抗氧化剂——「保护色素」的出处在这里',
  en:'“<b>Carotenoids</b> are the book’s third class, <b>isoprenoids related to the steroids</b>, coloured by <b>three to eleven conjugated double bonds</b>. In the thylakoid they are <b>accessory</b>: the book says the non-chlorophyll pigments <b>capture quanta of the incident radiation and transfer the energy onto chlorophyll a in the reaction centre</b>, which <b>extends the spectrum of photosynthetically effective radiation</b>. Their second job is protective — it says they <b>bind the active forms of oxygen — singlet oxygen, the superoxide anion radical and the hydroperoxide radical — and so act as antioxidants</b>. The commonest is <b>β-carotene</b>; the oxidised derivatives are the <b>xanthophylls</b>, and it names <b>zeaxanthin</b> as the typical yellow pigment of the leaves of higher plants.”',
  good:'第三类他也可能问：“The middle class is the <b>phycobilins</b> — open-chain tetrapyrroles, like the bile pigments — and the book says they occur in cyanobacteria and red algae, where they extend the useful light into the blue and the red.”',
  note:'两个作用分在两章：<b>辅助</b> <span class="pg">p205 p206</span>（§9.1.1），<b>抗氧化</b> <span class="pg">p187</span>（脂那一章，书在那里自己回指 kap. 9.1.1）。<b>「protective pigment」英文教材到处都是，但它在这本书里的出处在脂那一章</b>——指得出来就说明你读的是这本书。<span class="pg">p186 p187 p205</span>'},

 {g:'光反应 · 按顺序走一遍', gn:'<b>题面要的是 process，所以这一组必须按顺序说，而且每个载体点名</b>——不许出现「the carrier」「the complex」。一条线：<b>水 → PS II → 质体醌 → cyt b₆f → 质体蓝素 → PS I → 铁氧还蛋白 → NADP⁺</b>。'},
 {n:'10', t:'光捕获：天线与反应中心',
  big:'绝大多数叶绿素<b>不做化学</b>，只做<b>天线</b>：吸光、把<b>能量</b>（不是电子）递进去。<b>总叶绿素 : 反应中心的叶绿素 ≈ 200 : 1</b>。被氧化的只有中心那几个',
  en:'“Light is not absorbed where the chemistry happens. The book gives <b>total chlorophyll to chlorophyll in the reaction centre as about two hundred to one</b>; that antenna chlorophyll is <b>not oxidised</b> and only passes the energy inward, with <b>no charge separation</b>. The <b>reaction centre</b> is a few chlorophylls bound to protein which can be photo-oxidised <b>because of their microenvironment in the pigment-protein complex</b>. Only <b>P plus a photon giving P-star</b> is, in the book’s words, <b>strictly dependent on light</b>.”',
  good:'他问「为什么要天线」：“Because one chlorophyll absorbs a photon only rarely and the centre is expensive. Two hundred cheap collectors keep one centre busy — and the book adds that the <b>quantum yield</b> — the fraction of absorbed photons that actually end in a chemical event — is high, so this route is <b>strongly preferred over fluorescence or conversion into heat</b>.”',
  note:'比值 ≈ 200 和 P + hν → P* <b>已回 400 dpi 核过</b>。激发的中心把电子交给<b>初级受体 A₀</b>。<b>「只有这一步直接依赖光」是全卡的枢纽句</b>——它同时解释了为什么其余全部（包括固定 CO₂）都叫「不直接需要光」。<span class="pg">p207 p208</span>'},
 {n:'11', t:'光系统 II · P680 · 水的光解',
  big:'<b>PS II ＝ 把水光氧化、把电子交给质体醌的那个光系统</b>（书的定义）。中心色素 <b>P680</b>。补电子的来源是<b>水</b>：<b>2 H₂O → 4 H⁺ ＋ O₂ ＋ 4 e⁻</b>，干这事的是 <b>OEC，oxygen-evolving complex</b>，在<b>类囊体内表面</b>',
  en:'“The book defines it by what it does: <b>photosystem II photo-oxidises water and passes the electrons to plastoquinone</b>. Its pigment is <b>P680</b> — P for pigment, the number the wavelength of its absorption maximum. Once P680 has given its electron away it is a strong enough oxidant to take one <b>from water</b>: the book says <b>photolysis takes place at the inner surface of the thylakoid</b>, and its figure writes <b>two waters giving four protons and one oxygen</b>, into the lumen. The catalyst is the <b>oxygen-evolving complex</b>, which it calls a specific set of non-pigmented proteins.”',
  warn:'⚠ <b>OEC 的锰簇书里一个字都没有</b>（grep「mangan」0 命中）。要说就明说 general：“The cluster is four manganese ions with a calcium, cycling through five oxidation states — general knowledge; this book only calls it a set of non-pigmented proteins.”',
  note:'PS II 内部的顺序：P680 → <b>pheophytin</b>（＝去掉 Mg 的叶绿素）→ 结合态的 <b>Q_A、Q_B</b>。P680/P700/P870、Pheo、OEC <b>全部已回 400 dpi 从 Obr. 9.5 核过</b>（OCR 把下标吃了，grep 0 命中，<b>是 OCR 的错不是书的错，不进勘误</b>）。<b>质子进内腔，所以光解本身就在给梯度充电</b>——这是「表观质子转移」的一半，见点 14。<span class="pg">p206 p207 p208</span>'},
 {n:'12', t:'从质体醌到 NADPH：每个载体点名',
  big:'<b>PQ（质体醌）</b>→ <b>cyt b₆f</b> → <b>PC（质体蓝素）</b>→ <b>PS I / P700</b> → <b>A₀ → A₁ → FeS</b> → <b>Fd（铁氧还蛋白）</b>→ <b>FNR（Fd–NADP⁺ 还原酶，带 FAD）</b>→ <b>NADPH</b>',
  en:'“From photosystem II the electron goes to <b>plastoquinone</b>, a lipid-soluble quinone carrying two electrons with two protons inside the membrane — the book calls it the plant counterpart of coenzyme Q. It delivers them to the <b>cytochrome b6f complex</b>. Then <b>plastocyanin</b>, a small copper protein, carries one electron at a time along the <b>inner</b> face to <b>photosystem I</b>, where a second photon re-excites <b>P700</b>. Through <b>A-zero, A-one</b> and an iron–sulfur centre the electron reaches <b>ferredoxin</b>, and <b>ferredoxin–NADP reductase</b>, a flavoprotein with FAD, makes <b>NADPH</b> on the outer side.”',
  good:'他问 “Why plastocyanin and not a cytochrome?”：“The book gives it parameters rather than a reason — ten to twenty kilodaltons, a maximum near <b>597 nanometres</b>, a potential at pH 7 of <b>370 millivolts</b>, containing <b>Cu²⁺</b>, and blue. Functionally it is what cytochrome c is in the mitochondrion, only with copper instead of iron.”',
  note:'<b>书自己把这条链跟呼吸链并排写了</b>（<span class="pg">p206</span>）：类囊体膜的载体<b>跟内膜同类</b>——醌、细胞色素、Fe-S 蛋白、黄素蛋白，外加 NADP；<b>plastocyanin 和 OEC 是植物独有的两样</b>。plastocyanin 四参数<b>400 dpi 核过</b>；<b>Fd–NADP⁺ reduktasa ＋ FAD 印在 Obr. 9.5 上</b>，正文没有。<b>NADP⁺ 在膜外侧被还原，正好是它要被用掉的那一侧。</b><span class="pg">p045 p046 p206 p207 p208</span>'},
 {n:'13', t:'Z 图 —— 怎么画，两端的电位',
  big:'<b>两次光反应串联</b>：电子从 <b>H₂O（+820 mV）</b>被推到 <b>NADP⁺（−320 mV）</b>——<b>整个是上坡，1,14 V</b>，靠两个光子分两段推。横过来像个 <b>Z</b>',
  en:'“Plot redox potential, oxidants below and reductants above: <b>the oxygen–water couple at plus 820 millivolts, NADP-plus over NADPH at minus 320</b>. Electrons have to go from the first to the second, <b>uphill by 1.14 volts</b>, which cannot happen on its own — and that is what the photons are for. The two <b>vertical</b> jumps are the photochemical steps, which the book calls <b>endergonic</b>; the <b>downhill</b> runs between them are the carrier chains, drawn dashed and called <b>exergonic</b>. Two up-strokes with a fall between look like a letter Z on its side.”',
  note:'<b>他可能让你画 Z 图。六步，边画边说</b>：① 一条<b>竖轴</b>，下端 <b>oxidants / +</b>，上端 <b>reductants / −</b>，轴名 <b>E°′</b>；② 左下角一个点，标 <b>H₂O, +820 mV</b>；③ 从它<b>向上</b>一根竖箭头，旁写 <b>hν</b>，落点 <b>P680*</b>（＝ <b>PS II</b>）；④ 一条<b>向下向右的虚线</b>，途中标 <b>PQ → cyt b₆f → PC</b>，落到中间高度标 <b>P700</b>；⑤ 再一根<b>向上</b>的箭头写 <b>hν</b>，落点 <b>P700*</b>（＝ <b>PS I</b>）；⑥ 再一条<b>向下向右</b>的虚线，标 <b>A₀ → A₁ → FeS → Fd → FNR</b>，终点 <b>NADP⁺, −320 mV</b>。<b>画完把笔放下说</b>：“the two vertical arrows are the two photons; everything else runs downhill.”<br>820 和 −320 mV <b>已回 400 dpi 核过</b>（OCR 把 820 读成 520）；820 跟书自己 Tab. 6.2 的 <b>+0,82 V</b> 对得上（<span class="pg">p135</span>），所以<b>书内部自洽</b>。1,14 V 跟卡 <b>25</b> 呼吸链走的<b>是同一段电位，方向相反</b>。<span class="pg">p135 p207 p208</span>'},
 {n:'14', t:'质子梯度：方向、怎么形成、ATP 合酶',
  big:'质子<b>从基质往类囊体内腔里进</b>（跟线粒体<b>正好相反</b>）。两个来源：<b>光解</b>在内腔放质子，<b>质体醌</b>真的把质子背过膜。合酶 <b>CF₀CF₁</b> 的头<b>朝基质</b>，质子<b>从里往外</b>流过它 → ATP。书的图上：<b>3 个质子换 1 个 ATP</b>',
  en:'“The book separates two ways electrons move protons. The transfer is <b>apparent</b> when protons are released on one side and consumed on the other — released inside by the <b>photolysis of water</b>, consumed outside by the <b>reduction of NADP-plus</b>. It is <b>real</b> when they are carried across, and it says the <b>hydrophobic plastoquinones with the cytochrome b6f complex</b> do that. <b>ATP synthase</b> — <b>CF-zero</b> in the membrane, <b>CF-one</b> a head on the <b>stroma</b> side — lets them back out and makes ATP, <b>three protons per ATP</b> on its figure.”',
  warn:'<b>方向是这题最容易说反的一句。</b>线粒体：质子被泵<b>出</b>基质，合酶头<b>朝基质</b>，质子<b>回到</b>基质。类囊体：质子被搬<b>进</b>内腔，合酶头<b>朝基质（膜外）</b>，质子<b>从内腔往外</b>流。<b>书把这句写死了</b>：<i>Obrácená je však orientace thylakoidních membrán</i>。',
  good:'他问 “Why are they the other way round?”：“The book answers this one — the explanation <b>lies in the evolution of the membranes and the different ways they pinched off and closed on themselves</b>. So it is about how the organelle was formed, not about the chemistry.”',
  note:'书还说合酶的<b>组成和功能跟线粒体那台是类似的</b>（CF₀CF₁ 对 F₀F₁）——<b>这一格就是卡 25 的镜像格，两张一起背。</b>3 H⁺/ATP 是 Obr. 9.5 印的（400 dpi 核过）；图上还标了 <b>8 H⁺ ＋ 4 QH₂</b> 在 cyt b₆f 那段，但跟同图的 <b>2 H₂O → 4 H⁺ ＋ O₂</b> 不在同一个计量尺度上（四个电子只够还原两个质体醌），<b>所以被追数字只引 3 H⁺/ATP 和 2 H₂O → O₂，别引 8 和 4</b>。<span class="pg">p208 p209</span>'},
 {n:'15', t:'环式光合磷酸化',
  big:'电子<b>不去 NADP⁺，绕回反应中心</b>：<b>Fd → 质体醌 → cyt b₆f → PC → P700</b>。<b>只有 PS I 参加</b>，<b>不放氧、不产 NADPH</b>，书的原话是<b>「唯一的结果是产生 ATP」</b>',
  en:'“If the electrons <b>return to the reaction centre</b> instead of going on to NADP-plus, the book calls it <b>cyclic electron flow</b>, or <b>cyclic photophosphorylation</b>, and says <b>its only result is the formation of ATP</b>. It runs between <b>ferredoxin and the plastoquinones</b>, and <b>photosystem I is the one that takes part</b> — so no water is split, no oxygen evolved, no NADPH made. The linear route, two photosystems in series, is the <b>non-cyclic</b> one.”',
  warn:'<b>「为什么要有环式」书里没写</b>，只写了「唯一的结果是 ATP」。理由要标 general：“Fixing CO₂ needs more ATP per NADPH than linear flow delivers, and the cycle makes up the difference — general, the book gives the mechanism without the purpose.”',
  note:'<b>形状很简单</b>：非环式 ＝ 两个光系统串联 ＝ ATP ＋ NADPH ＋ O₂；环式 ＝ 只有 PS I ＋ 绕回去 ＝ 只有 ATP。<span class="pg">p208</span>'},

 {g:'固定 CO₂ · Calvin 循环', gn:'第二半。<b>三个阶段：羧化 → 还原 → 再生。</b>每阶段只记「谁变成谁 ＋ 那个酶 ＋ 花掉什么」，中间十几个磷酸糖不用背——<b>书自己说再生段走的就是戊糖循环那几类反应</b>。'},
 {n:'16', t:'第一步 ＋ rubisco 的全名',
  big:'<b>CO₂ ＋ RuBP（五碳）→ 两个 3-phosphoglycerate（三碳）</b>。酶是 <b>ribulose-1,5-bisphosphate carboxylase/oxygenase，RubisCO</b>。<b>第一个稳定产物是三碳的 3-PG——C-3 植物就是这么得名的</b>',
  en:'“The first reaction is the capture of inorganic CO₂ into <b>ribulose-1,5-bisphosphate</b>, a five-carbon sugar with a phosphate at each end. Chemically a <b>carboxylation</b>, catalysed by <b>ribulose-1,5-bisphosphate carboxylase/oxygenase</b>. The book’s mechanism: each active site turns RuBP into an <b>enediolate ion</b>, reactive enough to bind CO₂, and the <b>six-carbon intermediate hydrolyses at once into two 3-phosphoglycerates</b>. So the <b>first stable product is a three-carbon acid</b> — which is why these are <b>C-3 plants</b>.”',
  warn:'<b>全名要能一口气说出来</b>，而且要说清 <b>/oxygenase</b> 那半截<b>哪儿来的</b>：书在光呼吸那节才解释——<i>除羧化酶活性外还有加氧酶活性，酶的全名由此而来</i>。<b>先说全名，再说「后半个名字要等讲到光呼吸才有意义」，这是一个漂亮的自留口子。</b>',
  good:'他问酶本身：“It is <b>soluble, in the stroma</b>, with <b>small and large subunits</b> — the book describes the functional enzyme as a dimer of units of four small and four large, so eight and eight, with <b>eight active sites</b> — and it calls it <b>one of the most widespread macromolecular proteins on Earth</b>.”',
  note:'<b>「最丰富的蛋白」要小心</b>：书写的是「<b>之一</b>」。通用说法直接说「地球上最丰富的蛋白」——<b>用书的措辞，被追问再说 “it is usually quoted as the single most abundant protein on Earth, which is general rather than this book”。</b><span class="pg">p209 p210 p212</span>'},
 {n:'17', t:'三个阶段 ＋ 怎么画这个环',
  big:'<b>① 羧化</b>：CO₂ ＋ RuBP → 2 × 3-PG。<b>② 还原</b>：3-PG →(ATP)→ 1,3-BPG →(NADPH)→ <b>GAP</b>，<b>就是糖酵解那两步倒着走</b>。<b>③ 再生</b>：三碳糖重排回 Ru5P，再<b>花一个 ATP</b> 磷酸化成 RuBP。<b>净产物书说是一个 F6P</b>',
  en:'“Three phases. <b>Carboxylation</b>, which I have just described. <b>Reduction</b>: 3-phosphoglycerate is converted in two steps, <b>spending ATP and NADPH</b>, to <b>glyceraldehyde-3-phosphate</b> — and the book points out that both enzymes are <b>known from glycolysis, where the same steps run the other way</b>. <b>Regeneration</b>: the triose phosphates are rearranged by <b>isomerisation, epimerisation, dephosphorylation and phosphorylation</b> — the reactions of the <b>pentose phosphate pathway</b> — always ending at <b>ribulose-5-phosphate</b>, which an ATP-dependent kinase turns back into the acceptor.”',
  good:'他问哪些酶：“The book’s scheme names them: ribulose-5-phosphate kinase, ribulose-bisphosphate carboxylase, phosphoglycerate kinase, glyceraldehyde-phosphate dehydrogenase, triose-phosphate isomerase, aldolase, fructose-bisphosphatase, transketolase, sedoheptulose-1,7-bisphosphatase, ribose-phosphate isomerase and phosphopentose epimerase.”',
  note:'<b>他可能让你画这个环。五步，边画边说，不要画十二个中间产物</b>：① 一个圆，<b>右上</b>写 <b>RuBP (5C)</b>；② 一支箭从外面进来标 <b>CO₂</b>、箭上写 <b>rubisco</b>，落点 <b>2 × 3-PG (3C)</b>；③ 沿圆往下，箭上依次 <b>ATP</b>、<b>NADPH</b>，落点 <b>GAP (3C)</b>；④ 从 GAP 引一支箭<b>出圆</b>，写 <b>F6P → glucose / starch / cellulose</b>——<b>唯一离开循环的那条支</b>；⑤ 左半边一条箭从 GAP 绕回 RuBP，中间写 <b>rearrangement (pentose phosphate reactions)</b>，箭上写 <b>ATP</b>。<b>画完说</b>：“three carbons in as CO₂, three out as triose; everything else on the circle is bookkeeping to get the acceptor back.”<br><b>「还原段就是糖酵解倒着走」是书自己说的</b>，全卡最省事的一条——她糖酵解学得好，这里直接借力。<span class="pg">p210 p211 p212</span>'},
 {n:'18', t:'光呼吸 —— rubisco 名字的后半截（桥到卡 28）',
  big:'rubisco 也能把 <b>O₂</b> 接到 RuBP 上：<b>RuBP ＋ O₂ → 3-PG ＋ phosphoglycolate</b>，白白浪费一个碳。它<b>跟 Calvin 循环抢同一个底物</b>。书说它<b>可能是保护</b>（CO₂ 不够时防光氧化），也是<b>植物合成甘氨酸和丝氨酸的路</b>',
  en:'“The oxygenase half of the name is <b>photorespiration</b>. The book says most plants, while illuminated, also <b>consume</b> oxygen, by three enzymes: <b>RubisCO, phosphoglycolate phosphatase and glycolate oxygenase</b>. RubisCO oxygenates RuBP, which breaks into <b>3-phosphoglycerate and phosphoglycolate</b>; that becomes <b>glycolate</b> and then <b>glyoxylate</b>. It is honest that <b>the reasons are not entirely clear</b> and that the sequence <b>seems useless and competes with the Calvin cycle for the same substrate</b>, but offers two functions: <b>protection against photo-oxidation when CO₂ is short</b>, and a <b>route to glycine and serine</b>. It runs across three compartments — <b>chloroplast, peroxisome and mitochondrion</b>.”',
  good:'<b>桥到 #28，一句就够</b>：“This is the pressure the C-4 and CAM plants are built against: they fix CO₂ first with <b>PEP carboxylase</b>, which the book says works at a <b>lower Km for CO₂</b> than RubisCO needs, and its phrase is that the C-4 mechanism <b>concentrates CO₂</b>.”',
  note:'书还说光呼吸跨<b>三个区室</b>：叶绿体、过氧化物酶体、线粒体。<b>竞争性这点值钱</b>：同一个活性位点、同一个底物 RuBP，O₂ 和 CO₂ 抢——<b>正好是卡 19（酶抑制类型）里「竞争性」的真实例子</b>。C-4 在 <span class="pg">p212</span>（Hatch 和 Slack，1970），<b>属于卡 28，这里只碰一下</b>。<span class="pg">p212</span>'},

 {g:'对照与陷阱', gn:'<b>这两格决定他觉得你是背过还是懂了。</b>对照那格他几乎一定会问，因为它是检验「分不分得清两台机器」的最短路径。'},
 {n:'19', t:'光合 vs 呼吸：镜像，但不是逆反应',
  big:'总式看上去正好相反（<b>+2867</b> vs <b>−2870</b>），但<b>不是同一条路倒着走</b>：区室不同、载体不同（<b>NADPH</b> vs <b>NADH</b>）、梯度方向不同、驱动力不同（<b>光子</b> vs <b>电位落差</b>）',
  en:'“They look like each other’s reverse and are not the same reaction run backwards. <b>Compartment</b>: chloroplast, thylakoid membrane and stroma, against mitochondrion, inner membrane and matrix. <b>Carrier</b>: photosynthesis reduces <b>NADP-plus</b>, respiration oxidises <b>NADH</b>, and this book says the NADPH is <b>not oxidised in the respiratory chain but used for synthetic reactions</b>. <b>Gradient</b>: protons go <b>into</b> the thylakoid and <b>out of</b> the matrix. <b>Driving force</b>: in the chain electrons fall on their own; here two photons push them uphill.”',
  good:'顺势收两句：“What is genuinely the same is the design — carriers in a membrane, a proton gradient, and an ATP synthase the book calls analogous in composition and function. And a plant runs <b>both</b> machines at once: chloroplasts making sugar, mitochondria burning it — which is what it does at night, the same as we do.”',
  note:'<b>「一个磷酸就把两条路分开了」</b>——NADPH 和 NADH 只差核糖上一个磷酸。这句在卡 <b>25</b> 的陷阱格里已经有了。<b>「植物晚上做什么」＝ 呼吸</b>，这条几乎一定会被追。<span class="pg">p206 p208 p219 p220</span>'},
 {n:'20', t:'五条陷阱',
  big:'① 氧来自<b>水</b>，不是 CO₂ · ② 暗反应<b>不是夜里</b>跑的 · ③ 光反应<b>不固定碳</b> · ④ 叶绿素<b>不被消耗</b>，是催化剂不是底物 · ⑤ ATP 合酶跟线粒体里的<b>是同一台机器</b>，只是装反了',
  en:'“Five easy things to say wrong. <b>One</b>: the oxygen comes from <b>water</b> — the book writes twelve waters rather than six precisely to make that point. <b>Two</b>: the dark reactions are not nocturnal; the book itself calls the name inappropriate. <b>Three</b>: the light reactions fix <b>no carbon at all</b> — their products are ATP, NADPH and oxygen, and carbon enters only at rubisco. <b>Four</b>: chlorophyll is <b>not consumed</b>; it gives up an electron and gets one straight back, so it turns over like a catalyst. <b>Five</b>: the ATP synthase is the <b>same machine</b> as the mitochondrial one, only mounted the other way round.”',
  warn:'<b>第三条最常掉分。</b>说 “the light reactions produce sugar” 就等于承认没分清两半。<b>光反应产 ATP、NADPH、O₂；糖只在基质里出现。</b>',
  good:'第六条，顺势可加（general）：“And the oxygen is not for the plant’s benefit — the book’s evolution chapter says that when photosynthesis switched from hydrogen sulfide to water, the oxygen released into a reducing atmosphere <b>acted at first as a dangerous poison</b>, and only organisms that learned to pass electrons onto it survived.”（<span class="pg">p019</span>，约 25–30 亿年前）'}
],
end:'<b>一句话记住整张卡：光只干一件事——把电子从水里拽出来推到 NADP⁺ 上，顺路造一个质子梯度换成 ATP；然后基质里的 rubisco 拿这两样把 CO₂ 接到一个五碳糖上。</b>产氧的是<b>水的光解</b>，固碳的是 <b>Calvin 循环</b>，两者<b>只通过 ATP 和 NADPH 连着</b>——跟呼吸链和合酶只通过质子梯度连着，是同一种设计。被问数字先给书的：<b>12 H₂O ＋ 6 CO₂ → C₆H₁₂O₆ ＋ 6 O₂ ＋ 6 H₂O，ΔG°′ = +2867 kJ/mol</b>。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：把<b>光能变成化学能</b>；光同时驱动<b>水的氧化</b>和 <b>CO₂ 的还原</b>',
 '“The biological conversion of radiant energy into chemical energy — light drives the oxidation of a donor, in green plants water, and the reduction of carbon dioxide to carbohydrate.”',
 '书 §9.1 的原话。通式 H₂D + A → H₂A + D，<b>A 永远是 CO₂</b>。<span class="pg">p202</span>'],
['<b>总式</b>：<b>12 H₂O ＋ 6 CO₂ → C₆H₁₂O₆ ＋ 6 O₂ ＋ 6 H₂O</b>，<b>ΔG°′ = +2867</b>；<b>氧来自水</b>',
 '“Twelve waters and six CO₂ give a hexose, six oxygens and six waters, at plus 2867 kilojoules per mole — written that way to stress that the oxygen comes from water, not from carbon dioxide.”',
 '<b>正号</b>——吸能，所以要光。镜像：葡萄糖完全氧化 <b>−2870</b>。<span class="pg">p135 p203</span>'],
['<b>两半 ＋ 地点</b>：光反应在<b>类囊体膜</b>（出 ATP ＋ NADPH ＋ O₂），固定 CO₂ 在<b>基质</b>（花掉它们）',
 '“The light reactions run in the thylakoid membrane and give ATP, NADPH and oxygen; the fixation of CO₂ runs in the stroma and spends them.”',
 '「dark」＝<b>不直接需要光</b>。<b>书自己说这名字不合适。</b><span class="pg">p209</span>'],
['<b>账</b>：每 CO₂ 花 <b>3 ATP ＋ 2 NADPH</b>（通用数）；<b>六圈</b>一个己糖 → <b>18 ATP ＋ 12 NADPH</b>',
 '“Three ATP and two NADPH per CO₂, so eighteen and twelve for one hexose — standard figures; this textbook prints no ATP count, only the overall equation.”',
 '<b>标 general。</b>书印的只有 3 H⁺/ATP 和 2 H₂O → 4 H⁺ ＋ O₂。'],
['<b>色素</b>：<b>卟啉 ＋ 中心 Mg ＋ 植醇尾</b>；<b>只有 chlorophyll a</b> 做能量转换，b 和类胡萝卜素是辅助',
 '“Chlorophyll is a porphyrin with magnesium at the centre and a twenty-carbon phytyl tail; the book says only chlorophyll a is the actual transformer of energy, and the rest are accessory pigments feeding it.”',
 '卟啉 ＝ 四吡咯 ＋ <b>甲川桥</b>，跟血红素同一个环，金属不同。<span class="pg">p205</span>'],
['<b>为什么绿 ＋ 天线</b>：吃掉<b>蓝 415–440</b> 和<b>红 640–700</b>，中间<b>没被吸走</b>的就是绿；<b>约 200 个叶绿素喂 1 个反应中心</b>',
 '“The green in between the blue and red bands is what is not absorbed, so it is reflected. And most of that chlorophyll is antenna — about two hundred molecules per reaction centre — which only passes energy inward, with no charge separation.”',
 '<b>「只有 P + hν → P* 这一步直接依赖光」</b>——全卡的枢纽句。<span class="pg">p205 p207</span>'],
['<b>顺序</b>：<b>H₂O → PS II(P680) → PQ → cyt b₆f → PC → PS I(P700) → Fd → FNR → NADPH</b>',
 '“Water to photosystem two at P680, then plastoquinone, the cytochrome b6f complex, plastocyanin, photosystem one at P700, ferredoxin, and ferredoxin–NADP reductase onto NADP-plus.”',
 '<b>每个载体都要点名</b>；书自己说这些载体跟线粒体内膜同类。<span class="pg">p206 p207 p208</span>'],
['<b>光解</b>：在<b>类囊体内表面</b>，<b>2 H₂O → 4 H⁺ ＋ O₂ ＋ 4 e⁻</b>，干这事的是 <b>OEC</b>',
 '“Photolysis of water happens at the inner surface of the thylakoid: two waters give four protons and one oxygen, catalysed by the oxygen-evolving complex.”',
 '<b>锰簇书里没有</b>，要说就标 general。<span class="pg">p206 p208</span>'],
['<b>梯度方向</b>：质子<b>进</b>类囊体内腔；合酶的头<b>朝基质</b>，质子<b>从里往外</b>流 → ATP',
 '“Protons are driven into the thylakoid and come back out through the synthase, whose knobs face the stroma — the opposite orientation from the mitochondrion, as the book says explicitly.”',
 '<b>说反就整台机器反了。</b>书给了理由：膜的进化和自我封闭方式。<span class="pg">p208 p209</span>'],
['<b>Calvin 第一步</b>：<b>CO₂ ＋ RuBP → 2 × 3-PG</b>，酶是 <b>ribulose-1,5-bisphosphate carboxylase/oxygenase</b>',
 '“Carbon dioxide is added to ribulose-1,5-bisphosphate by ribulose-1,5-bisphosphate carboxylase/oxygenase, and the six-carbon intermediate splits at once into two 3-phosphoglycerates — the first stable product, three carbons, hence C-3 plants.”',
 '全名一口气说完。<b>/oxygenase 那半截留到光呼吸再解释。</b><span class="pg">p209 p210</span>'],
['<b>三阶段</b>：<b>羧化 → 还原（ATP ＋ NADPH，糖酵解倒着走）→ 再生（戊糖那套 ＋ 1 个 ATP）</b>',
 '“Carboxylation, then reduction to glyceraldehyde-3-phosphate by the two glycolytic enzymes running backwards, then regeneration of ribulose-1,5-bisphosphate through the pentose phosphate reactions and one more ATP.”',
 '书说净产物是<b>一个 F6P</b>，再走 G6P → 葡萄糖／纤维素／糖酵解。<span class="pg">p210 p211</span>'],
['<b>光呼吸</b>：rubisco 接 <b>O₂</b>，<b>抢同一个底物 RuBP</b>；书说<b>可能是保护</b>，也是 <b>glycine／serine</b> 的来路',
 '“RubisCO also oxygenates ribulose-1,5-bisphosphate, giving 3-phosphoglycerate and phosphoglycolate; it competes with the Calvin cycle for the same substrate, and the book says it probably protects the apparatus from photo-oxidation when CO₂ is short.”',
 '<b>这是通往 #28（C-4 / CAM）的桥。</b><span class="pg">p212</span>'],
['<b>陷阱</b>：氧来自<b>水</b> · 暗反应<b>不是夜里</b> · 光反应<b>不固碳</b> · 叶绿素<b>不被消耗</b> · 合酶跟线粒体<b>同一台</b>',
 '“The oxygen comes from water; the dark reactions are not nocturnal; the light reactions fix no carbon at all; chlorophyll is not consumed but turns over like a catalyst; and the ATP synthase is the same machine as the mitochondrial one, mounted the other way round.”',
 '五条几乎每次都被问，<b>都是一句话说错就掉分的那种</b>。']
],

segs:[
 {tag:'段 1 · 定义', h:'先定义，再总式，再拆成两半 —— 三句就把题面交代完',
  p:['“<b>Photosynthesis is the biological conversion of radiant energy into chemical energy</b> — that is this textbook’s own definition. Light drives two things at the same time: the <b>oxidation of a donor</b> and the <b>reduction of carbon dioxide</b> to carbohydrate. The book writes the general form as H₂D plus A, over the pigments, giving H₂A plus D, where H₂D is the donor of electrons and protons and A the acceptor — and for every photosynthesising organism the acceptor is carbon dioxide. In green plants the donor is <b>water</b>, which is why oxygen is released.',
     'The overall equation in its own form: <b>twelve waters plus six CO₂ give one hexose, six oxygen molecules and six waters</b>, at <b>plus 2867 kilojoules per mole</b>. The plus sign is the whole point — the reaction is endergonic, and the light is what pays for it. It writes twelve waters rather than six deliberately, <b>to stress that the six oxygen molecules come from water and not from carbon dioxide</b>.',
     'The <b>process</b> then divides into two halves in two places. The <b>light reactions</b> run in the <b>thylakoid membrane</b> inside the chloroplast, and their first stable products are <b>ATP and NADPH</b>, with oxygen released as water is split. The <b>fixation and reduction of CO₂</b> runs in the <b>stroma</b> outside the thylakoids and spends exactly those two. They are often called the dark reactions, and this textbook says that name is <b>not appropriate, because it suggests the conversion does not happen in the light</b> — it means not directly requiring light, and it runs for as long as ATP and NADPH are available.”'],
  note:'<b>三句话把题面上两个实词都交代完了</b>：<b>photosynthesis</b>（第一句定义、第二句式子）、<b>process</b>（第三句给形状——两半、两个地点、什么进什么出）。他嘴里多半只有 “What is photosynthesis?”，<b>剩下的结构要你自己接上去</b>。<br><b>「暗反应不是夜里」放段 1 而不是陷阱格</b>，因为它几乎必被追，抢先说出来显得你读过书。'},
 {tag:'段 2 · general', h:'账、地点、意义 —— 三行说完，别展开',
  p:['“The account, per carbon dioxide fixed: in go <b>one CO₂, one ribulose-1,5-bisphosphate, three ATP and two NADPH</b>; out come <b>two three-carbon phosphoglycerates</b>, reduced to two triose phosphates, with the ADP, phosphate and NADP-plus handed back to the membrane. The acceptor is <b>regenerated rather than consumed</b>, so it behaves like a catalyst. I should flag that the three and the two are standard counts — <b>this textbook prints no ATP or NADPH figures</b>; what it prints is three protons per ATP at the synthase and two waters per oxygen at the other end.',
     'The net of it: the light reactions make <b>ATP and NADPH and nothing else that lasts</b>, and the Calvin cycle spends them on carbon — six turns, eighteen ATP and twelve NADPH for one hexose, and the book gives the net yield of the cycle as <b>one fructose-6-phosphate</b>. Its own warning is worth repeating: <b>the six carbons do not all end up in the same sugar</b>, and hexose is not the point — most of the fixed carbon goes into the central pathways, it names the citric acid cycle, as skeletons for amino acids, fatty acids, nucleotides and pigments.',
     'So: <b>where</b> — thylakoid membrane for the light half, stroma for the carbon half, both inside the chloroplast. <b>Why it matters</b> — this is the step that puts solar energy into the biosphere, and every carbon in the sugar comes from CO₂ while every oxygen molecule released comes from water.”'],
  note:'<b>三行账 ＋ 地点 ＋ 意义，正是代谢题的通用开口模板</b>（见 `DRILL.md`）。<br><b>「书没印 ATP 数」这句必须说</b>——一旦被追「书上第几页」，含糊就变成可以当场证伪的错误；说出来反而显得读得细。'},
 {tag:'段 3 · 稍展开', h:'光反应按顺序走一遍，然后 Calvin 三阶段',
  p:['“Light is absorbed mostly by <b>antenna</b> chlorophyll — about two hundred molecules per reaction centre — which is never oxidised and only passes the energy inward. In the <b>reaction centre</b> one chlorophyll can actually give up an electron, and the book says that is the <b>only step strictly dependent on light</b>.',
     '<b>Photosystem II</b> is defined by the textbook as the one that <b>photo-oxidises water and passes the electrons to plastoquinone</b>. Its pigment is <b>P680</b>, named for its absorption maximum; the electron goes to <b>pheophytin</b> — chlorophyll without its magnesium — and on to the bound quinones. The hole left in P680 is filled from <b>water</b>: at the <b>inner</b> surface of the thylakoid the <b>oxygen-evolving complex</b> splits two waters into four protons, four electrons and one oxygen, and the protons stay inside.',
     '<b>Plastoquinone</b>, a lipid-soluble quinone and the plant counterpart of coenzyme Q, carries two electrons with two protons across inside the membrane to the <b>cytochrome b6f complex</b> — this is where protons are <b>really</b> carried over rather than just released on one side. Then the blue copper protein <b>plastocyanin</b> takes one electron at a time along the inner face to <b>photosystem I</b>, a second photon re-excites <b>P700</b>, and the electron goes through <b>A-zero, A-one</b> and an iron–sulfur centre to <b>ferredoxin</b>; <b>ferredoxin–NADP reductase</b>, a flavoprotein with FAD, makes <b>NADPH</b> on the stroma side. Drawn against redox potential, the two photon jumps and the two downhill runs make the letter <b>Z</b>: from the oxygen–water couple at <b>plus 820 millivolts</b> to NADP-plus at <b>minus 320</b>, uphill all the way.',
     'Meanwhile protons accumulate <b>inside</b> the thylakoid, and <b>ATP synthase</b> — CF-zero in the membrane, CF-one as a head on the <b>stroma</b> side — lets them out and makes ATP; the book says it is analogous to the mitochondrial one but the membrane is oriented the other way round. If electrons return from ferredoxin to the plastoquinones instead, that is <b>cyclic photophosphorylation</b>, only photosystem one takes part, and the book says <b>its only result is ATP</b>.',
     'Then the stroma. <b>Carboxylation</b>: <b>rubisco</b> adds CO₂ to ribulose-1,5-bisphosphate and the six-carbon intermediate splits at once into <b>two 3-phosphoglycerates</b> — the first stable product, three carbons, hence C-3 plants. <b>Reduction</b>: two steps spending ATP and NADPH to <b>glyceraldehyde-3-phosphate</b>, both enzymes borrowed from glycolysis running backwards. <b>Regeneration</b>: the triose phosphates are rearranged by pentose phosphate reactions back to <b>ribulose-5-phosphate</b>, and one ATP closes the cycle.”'],
  note:'<b>时间不够就砍到四句</b>：水 → PS II → 质体醌 → cyt b₆f → 质体蓝素 → PS I → 铁氧还蛋白 → NADPH；质子进内腔，合酶放出来；rubisco 把 CO₂ 接到 RuBP 上出两个 3-PG；ATP 和 NADPH 还原成三碳糖，剩下都是再生。<br><b>不要砍「书自己定义 PS II 是干什么的」和「只有一步依赖光」</b>——那是他追问时的落点。'},
 {tag:'段 4 · 留口子', h:'诚实地接回主场：rubisco 是蛋白质工程改了几十年没改动的那个靶',
  p:['“This chapter is a long way from what I work on, so let me connect it where the connection is real — and it is, because <b>rubisco is the classic hard target of protein engineering</b>. The textbook gives the reason in passing: it calls it <b>one of the most widespread macromolecular proteins on Earth</b>, and says the enzyme has <b>two activities in the same active site</b>, carboxylase and oxygenase. A plant makes so much of it precisely because each copy works slowly and wastes some of its turnovers on oxygen.',
     'That makes it the obvious thing to improve, and it has resisted for decades. The reason is a <b>trade-off</b>: across natural rubiscos, the variants that discriminate better between CO₂ and O₂ tend to be the slower ones — so a screen for specificity hands back a slow enzyme, and one for rate hands back a wasteful one. That trade-off is <b>general knowledge and not in this textbook</b>, which gives only the two activities and the competition for the same substrate.',
     'That shape is familiar. I do <b>directed evolution</b> — libraries of protein variants selected by <b>yeast display</b>, where each cell shows one variant on its surface and is sorted on how tightly it binds. What you learn quickly is that <b>you get what you select for, including what you did not mean to select for</b>: if the readout reports only on affinity, you can gain affinity and lose expression or stability. Rubisco is the textbook case of a protein where the property you want and the property you can measure pull in opposite directions — and the answer in the lab is the same one people use here: <b>put both axes into the selection, or you just walk along the trade-off instead of off it</b>.”'],
  note:'<b>这一段是诚实的，不是硬接。</b>她做定向进化和酵母展示，跟植物生化八竿子打不着——所以桥不能架在「我也研究光合」上，只能架在<b>「这是一个我认得的蛋白质工程问题」</b>上，而且要短。<br><b>两处必须标 general</b>：速率 vs 选择性的权衡；「最丰富的蛋白」这个最高级（书写的是「之一」）。<b>不点具体病原体、不展开课题</b>（见 `DRILL.md`）。口子落在<b>横向卡 fitness landscape（#7）</b>上。'}
],

why:{
 rungs:[
  ['为什么非要有<b>两个</b>光系统？一个不行吗？','因为要爬的坡太高。书自己给了两端：<b>H₂O/O₂ 是 +820 mV，NADP⁺/NADPH 是 −320 mV</b>（<span class="pg">p208</span>，400 dpi 核过），也就是要把电子<b>逆着 1,14 V 往上推</b>。一个可见光光子不够一次推完，所以书把它画成 <b>Z</b>：<b>两次光反应串联</b>，中间让电子先沿载体链滑下一段再第二次被推上去。英文：“Because the whole span from water to NADP-plus is 1.14 volts uphill and one visible photon will not do it in a single step — so the textbook draws two photoreactions in series, with a downhill run between them.”'],
  ['那为什么中间要先<b>滑下来</b>一段？直接推两次不行吗？','因为那段下坡<b>不是浪费，是在挣 ATP</b>。它落在<b>质体醌和 cyt b₆f</b> 上，把电子的落差换成<b>把质子搬进类囊体内腔</b>这件渗透功。书的说法跟呼吸链那章同一套：电子传递<b>伴随</b>质子转移，一部分是<b>表观</b>的（一侧消耗、另一侧放出），一部分是<b>真实</b>的（疏水的质体醌真的把质子背过膜）。<b>如果两次推举之间没有落差，就只有 NADPH 没有 ATP——而固定 CO₂ 两样都要。</b>英文：“Because that fall is where the protons are moved: without it you would have NADPH and no ATP, and fixing CO₂ needs both.”'],
  ['那为什么能量要先存成 <b>ATP 和 NADPH</b>，不直接用光去还原 CO₂？','因为<b>两套过程的时间尺度差了十几个数量级，对不上</b>。书自己分开列了：光的吸收和能量传到反应中心是 <b>10⁻¹⁵ 到 10⁻⁸ 秒，而且跟温度无关</b>；类囊体膜上的生化过程是 <b>10⁻¹⁰ 到 10⁻² 秒</b>；固定 CO₂ 是一串酶反应，<b>依赖温度、慢得多</b>（<span class="pg">p203</span>，400 dpi 核过）。一个飞秒级、不可储存的激发态没法直接驱动秒级的酶促通路，中间必须有一种<b>可储存、可扩散、化学上稳定</b>的货币——这正是书把 NADPH 和 ATP 叫作「<b>第一批稳定产物</b>」的意思。']
 ],
 stop:{lbl:'停 · 落在热力学（一半落在测量的限制）',
  say:'“Below that we are asking how a photon becomes a separated charge across a membrane in a few picoseconds, and that is photophysics and physical chemistry rather than biochemistry. The textbook draws the line in the same place — it says the primary events belong to the <b>physics</b> of photosynthesis, and that biochemistry starts where the redox reactions start.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is photosynthesis?',
 mean:'<b>他嘴里多半只有这一句。</b>卷面写的是 “Explain the <b>process</b> of photosynthesis”，口试却从最短的问法起步——<b>剩下的结构要你自己接</b>：是什么 → 总式 → 两半 → 在哪儿 → 然后才是载体的名字。<b>别一上来就 “light and dark reactions”</b>，那是分类不是定义。',
 say:'“It is the biological conversion of <b>radiant energy into chemical energy</b> — light drives the oxidation of a donor and the reduction of carbon dioxide to carbohydrate. In green plants the donor is <b>water</b>, so oxygen is released; the textbook writes twelve waters plus six CO₂ giving a hexose, six oxygens and six waters at plus 2867 kilojoules per mole, and writes twelve deliberately, to stress that <b>the oxygen comes from water and not from CO₂</b>. It has two halves: the <b>light reactions</b> in the thylakoid membrane, giving ATP, NADPH and oxygen, and the <b>fixation of CO₂</b> in the stroma, which spends them — the Calvin cycle, beginning at rubisco.”'},

{q:'Explain the process — what happens, in what order?',
 mean:'卷面上的 <b>process</b> 这个词。<b>他要的是顺序，不是名词表。</b>按一条线走，每个载体点名，走到糖为止。',
 say:'“Light is absorbed by <b>antenna</b> pigments and funnelled into a <b>reaction centre</b>, where one chlorophyll gives up an electron. In <b>photosystem two</b>, at P680, it goes to <b>pheophytin</b> and on to <b>plastoquinone</b>, and the hole is filled by <b>splitting water</b> — that is where the oxygen comes off. Plastoquinone carries the electrons to the <b>cytochrome b6f complex</b>, moving protons into the thylakoid; <b>plastocyanin</b> takes them to <b>photosystem one</b>, where a second photon re-excites P700; then <b>ferredoxin</b> and <b>ferredoxin–NADP reductase</b> make <b>NADPH</b>. The protons flow back out through <b>ATP synthase</b> and make <b>ATP</b>. Then in the stroma <b>rubisco</b> adds CO₂ to ribulose-1,5-bisphosphate, ATP and NADPH reduce the product to <b>triose phosphate</b>, and most of it is rearranged back into the acceptor.”'},

{q:'What are the light reactions and what do they produce?',
 mean:'<b>把两半拆开问的第一半。</b>要答「产什么」，而且要把 <b>O₂ 是副产物</b>、<b>不固定碳</b> 两件事说进去。',
 say:'“They are the reactions in the <b>thylakoid membrane</b> in which absorbed light drives electrons from water to NADP-plus, through two photosystems in series. Their products are what the textbook calls the <b>first stable products</b>: <b>NADPH</b>, made by ferredoxin–NADP reductase on the stroma side, and <b>ATP</b>, made by ATP synthase from the proton gradient — plus <b>oxygen</b>, a by-product of taking the electrons off water. They fix <b>no carbon at all</b>; carbon enters only in the stroma, at rubisco.”'},

{q:'What are the dark reactions, and when do they happen?',
 mean:'<b>陷阱题的礼貌版本。</b>“when” 就是在钓你说「晚上」。答案要引书自己的反对。',
 say:'“They are the <b>fixation and reduction of CO₂</b> in the stroma — the Calvin cycle. And they happen <b>in the light</b>, like everything else. This textbook explicitly objects to the name: its words are that the term is <b>not appropriate, because it suggests the conversion does not occur in the light</b>. It adds that even ‘light-independent’ is unsatisfactory, because the sequence runs <b>only for as long as there is enough NADPH and ATP</b> — and those come from the light reactions. So dark means <b>not directly requiring photons</b>, not nocturnal.”'},

{q:'What is the Calvin cycle?',
 mean:'<b>这是一道可以单独出的题。</b>定义 → 三阶段 → 第一个产物 → 净产物，四层，别只说 “it fixes CO₂”。',
 say:'“It is the cycle of enzyme reactions in the <b>stroma</b> that fixes CO₂ and reduces it to carbohydrate, using the ATP and NADPH from the light reactions. Three phases: <b>carboxylation</b>, in which <b>rubisco</b> adds CO₂ to ribulose-1,5-bisphosphate and the six-carbon intermediate splits into two <b>3-phosphoglycerates</b> — the first stable product, three carbons, which is why these are C-3 plants; <b>reduction</b> of those to glyceraldehyde-3-phosphate, spending ATP and NADPH; and <b>regeneration</b> of the acceptor through the pentose phosphate reactions plus one ATP. The book gives the net yield as one <b>fructose-6-phosphate</b>, and says the reactions were described by <b>Calvin, Nobel Prize 1961, with Benson and Bassham</b>.”'},

{q:'Where in the cell does each half happen?',
 mean:'<b>区室题。</b>她自己说过区室最容易乱，所以这行要能不假思索地给出三个名字：<b>类囊体膜 · 内腔 · 基质</b>。',
 say:'“Both halves are in the <b>chloroplast</b>, in different parts of it. The light reactions are in the <b>thylakoid membrane</b> — the photosystems, the cytochrome b6f complex and the ATP synthase are all integral to it — with water split at the <b>inner</b> surface, into the thylakoid <b>lumen</b>, and NADP-plus reduced at the <b>outer</b> surface. The fixation of CO₂ is in the <b>stroma</b>, outside the thylakoids, where rubisco sits. The textbook’s diagram of a maize chloroplast labels the outer and inner membranes, the intermembrane space, the <b>grana</b> — stacks of thylakoids — the stroma thylakoids joining them, the stroma, and the thylakoid lumen.”'},

{q:'Is photosynthesis just respiration run backwards?',
 mean:'<b>他把两张卡放在一起考的问法。</b>答 “no” 之后必须立刻给<b>四条差别</b>，否则就成了空话。',
 say:'“No — it looks like it on paper and it is not the same path reversed. <b>Compartment</b>: chloroplast, thylakoid membrane and stroma, against mitochondrion, inner membrane and matrix. <b>Carrier</b>: photosynthesis reduces <b>NADP-plus</b>, respiration oxidises <b>NADH</b> — this textbook says explicitly that NADPH is not oxidised in the respiratory chain but used for synthetic reactions. <b>Gradient</b>: protons are driven <b>into</b> the thylakoid and out of the matrix, and the book says the thylakoid membrane is oriented the opposite way. <b>Driving force</b>: in respiration electrons fall from minus 0.32 to plus 0.82 volts on their own; here two photons push them uphill.”'},

{q:'Why are plants green?', odd:1,
 mean:'<b>听起来像小孩问的问题</b>，答案却是吸收光谱。关键是答「<b>剩下的</b>」而不是「吸收的」。',
 say:'“Because green is the part of the light they <b>do not</b> use. Chlorophyll absorbs in the blue, about 415 to 440 nanometres, and in the red, 640 to 700; the band in between is reflected and transmitted, and that is what reaches your eye. The textbook puts it as complementary colours — the complementary colour of red is green, and that is why the plant world is green. Its own figure shows a higher plant’s pigments, the chlorophylls and carotenoids, leaving that middle band open; the pigments that would fill it, the <b>phycobilins</b>, belong to cyanobacteria and red algae.”',
 tail:'<b>他要是追「那绿光完全没用吗」</b>：“Not completely — a leaf is thick, and green light not absorbed on the first pass can be absorbed deeper in. That is general, not from this textbook.”'},

{q:'Why do leaves turn yellow and red in autumn?', odd:1,
 mean:'<b>入口像园艺题，答案在色素那一格。</b>要分清「显出来的」和「新造的」两种颜色——这一分，就不是背书的人。',
 say:'“Because the chlorophyll is broken down first and the other pigments become visible. The yellows are the <b>carotenoids</b> that were there all along as accessory and protective pigments — the textbook names <b>zeaxanthin as the typical yellow pigment of the leaves of higher plants</b> — and they show once the green is gone. The reds are different: <b>anthocyanins, newly made</b> in the leaf in autumn, and that part is general knowledge, not in this book. It is a good illustration that chlorophyll <b>is</b> turned over and degraded, even though the photochemistry itself does not consume it.”'},

{q:'Where does the oxygen we breathe come from?', odd:1,
 mean:'<b>最朴素的入口，也是这道题最硬的一句。</b>答案落在「水」上，并给出书为什么那样写式子。',
 say:'“From <b>water</b>, not from carbon dioxide. It is released when photosystem two fills the electron hole in P680 by <b>photolysing water</b> at the inner surface of the thylakoid: two waters give four protons, four electrons and one oxygen. This textbook makes the point by how it writes the equation — twelve waters and six CO₂ rather than six and six — saying the factors are there <b>to stress that the released oxygen comes from water and not from carbon dioxide</b>. The classical proof is the <b>oxygen-18 labelling experiment</b>: label the water and the heavy oxygen comes out as O₂; label the CO₂ and it does not. That experiment is general knowledge — this book states the conclusion without it.”'},

{q:'Why does a plant need light but my yeast culture does not?', odd:1,
 mean:'<b>从她自己的台面进来的问题。</b>答案是自养 vs 异养，而且要落在「电子从哪儿来」上，不是「食物」上。',
 say:'“Because of where the electrons come from. Yeast is <b>heterotrophic</b>: I give it glucose, which is already reduced, and it takes electrons off that. A plant is <b>autotrophic</b> — the textbook’s definition is that it covers its whole energy requirement from solar energy and builds its own substance from CO₂, water and minerals. Its only electron donor is <b>water</b>, and water holds its electrons very tightly: plus 820 millivolts against minus 320 for NADP-plus. Nothing in a cell can pull an electron off water spontaneously, so the energy has to come from outside. Yeast never needs that, because the glucose I feed it has already had the work done on it — by a plant.”',
 tail:'<b>顺势能接回主场</b>：她的酵母培养里那点碳，来源就是某个叶绿体的基质。'},

{q:'Why is a greenhouse warm, and does the warmth help the plant?', odd:1,
 mean:'<b>入口像物理题，其实在问「光反应和暗反应哪个依赖温度」。</b>答对了同时把「暗反应」的名字讲清楚了。',
 say:'“The warmth of a greenhouse is a physical effect, not a photosynthetic one — glass lets visible light in and holds the warmed air. But it does help, and the interesting part is <b>which half</b> it helps. The textbook separates them by their physics: the <b>primary events</b>, absorption and energy transfer to the reaction centre, take ten to the minus fifteen up to ten to the minus eight seconds and are <b>independent of temperature</b>; the <b>fixation of CO₂</b> is a chain of enzyme reactions and speeds up with temperature until the enzymes suffer. So warmth accelerates the dark reactions and does nothing for the photochemistry — which is the cleanest way to see what <b>dark</b> really means in that name.”',
 tail:'<b>他要是追「那为什么太热了反而不好」</b>：“Because rubisco’s oxygenase side wins as it warms — photorespiration rises faster than carboxylation, and the stomata, the adjustable pores in the leaf surface, close to save water, which lowers CO₂ inside the leaf. That is the pressure the C-4 plants are built against. General, and the neighbouring question.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'逐字稿里没交代完的名词，他会一个一个拎出来问。<b>这一章她没学过，所以这一组要当第一遍学的材料读。</b>', items:[
{r:'高', q:'What is a thylakoid, and what is a granum?',
 en:'“A <b>thylakoid</b> is a closed flattened sac inside the chloroplast — the textbook gives the Greek, <b>thylakos, a sac</b> — and says that, as with the inner mitochondrial membrane, one can distinguish an inner and an outer space. Its membrane carries the light apparatus, and its inner space, the <b>lumen</b>, is where protons accumulate. A <b>granum</b> is a <b>stack</b> of thylakoids, joined to other stacks by <b>stroma thylakoids</b>. Everything outside them is the <b>stroma</b>, where CO₂ is fixed.”',
 cn:'<b>「granum」全书正文 grep 0 命中，但 Obr. 9.1（<span class="pg">p203</span>）的标注上有</b>——400 dpi 核过：vnější／vnitřní membrána · mezimembránový prostor · <b>granum</b> · stromální thylakoidy · stroma · lumen。<b>说的时候直接说 “the textbook labels the grana in its micrograph of a maize chloroplast”</b>——指图比背词有力。⚠ <b>「PS II 在基粒里、PS I 在基质类囊体上」书里没有，要说就标 general。</b>'},
{r:'高', q:'What exactly is a reaction centre, and what is an antenna?',
 en:'“The <b>reaction centre</b> is a few chlorophylls bound to protein that can actually be <b>photo-oxidised</b>, and the textbook says they can do it <b>because of their microenvironment in the pigment-protein complex</b>, not because they are chemically different. The <b>antenna</b> is all the other chlorophyll, about two hundred per centre; it absorbs light and passes the <b>energy</b> inward, and the book stresses that <b>no charge separation occurs</b> in that transfer. The centre with its nearest acceptors, donors and light-harvesting pigments is what it calls a <b>photosystem</b>.”',
 cn:'比值和「微环境」两句<b>400 dpi 核过</b>（<span class="pg">p207</span>）。<b>「传能量不传电子」是关键区分</b>——天线里没有电荷分离，所以天线色素<b>不被氧化</b>，这也是「叶绿素不被消耗」那条陷阱的一半理由。'},
{r:'高', q:'What is P680, and why that number?',
 en:'“<b>P</b> is for pigment and the number is the <b>wavelength in nanometres of its absorption maximum</b>. The textbook explains the convention: oxidising P changes its absorption spectrum, so the chlorophylls of different reaction centres are named by that wavelength — <b>P870 in bacteria, P680 and P700 in oxygenic photosynthesis</b>. P680 belongs to photosystem two, P700 to photosystem one.”',
 cn:'下标<b>400 dpi 从 Obr. 9.5 图注和正文核过</b>（OCR 全吃了，grep「P700」0 命中——<b>OCR 的错，不是书的错，不进勘误</b>）。<b>「名字怎么来的」这类小题他很喜欢问</b>，答得出就说明不是硬背。<span class="pg">p207</span>'},
{r:'中', q:'What is plastoquinone, and what is plastocyanin? They sound alike.',
 en:'“Different molecules, different jobs. <b>Plastoquinone</b> is a small <b>lipid-soluble quinone</b>, not a protein; it moves <b>inside</b> the membrane carrying <b>two electrons with two protons</b>, which makes it the real proton carrier across the thylakoid membrane, and the book calls it the plant counterpart of <b>coenzyme Q</b>. <b>Plastocyanin</b> is a small <b>copper protein</b> — ten to twenty kilodaltons, a maximum near <b>597 nanometres</b>, <b>370 millivolts</b> at pH 7, blue — sliding along the inner face with <b>one</b> electron at a time.”',
 cn:'四个参数<b>400 dpi 核过</b>（<span class="pg">p206</span>）；辅酶 Q 的对应在 <span class="pg">p045</span>。<b>「一个带两个电子、一个带一个」跟卡 25 是同一个结构</b>——两电子载体和单电子载体之间必须有个复合物对上，这里是 <b>cyt b₆f</b>，线粒体里是复合物 III。'},
{r:'中', q:'What is ferredoxin?',
 en:'“A small <b>iron–sulfur protein</b>. The textbook defines the class on its coenzyme pages: the iron is bound to the protein by the <b>-SH groups of cysteine and by free sulfide ions</b>, not by a porphyrin — so it is <b>non-heme</b> iron — and it carries electrons by cycling between Fe²⁺ and Fe³⁺. It names ferredoxin as its example and says these proteins work as electron carriers <b>in respiration and in photosynthesis</b>. In the chloroplast it sits on the <b>stroma</b> side.”',
 cn:'<span class="pg">p046</span>。<b>顺手多一条</b>：书 §9.4（<span class="pg">p216</span>）说还原亚硝酸盐也要光合来的<b>还原型铁氧还蛋白</b>——所以 Fd 不只是通往 NADPH 的一站，它是叶绿体的<b>还原力分配点</b>。'},
{r:'高', q:'What is the Z scheme?',
 en:'“It is the textbook’s way of drawing <b>linear electron flow</b> — the diagram, not a mechanism. You plot the carriers against <b>redox potential</b>, the measure in volts of how strongly a pair holds its electrons, with oxidants at the bottom and reductants at the top. Water sits low, at <b>plus 820 millivolts</b>, NADP-plus high, at <b>minus 320</b>. The two <b>vertical</b> strokes are the two photochemical steps, which the book calls <b>endergonic</b>; the falls between them are the carrier chains, <b>exergonic</b> and drawn dashed. Two rises with a fall between make a letter Z lying on its side.”',
 cn:'<b>要点是先说它是一张图，不是一个机制</b>——很多人答成「电子传递链」。书说同一张图也可以画在 <b>ΔG</b> 的刻度上而不是电位的刻度上（<span class="pg">p208</span>）。两个电位<b>400 dpi 核过</b>。<b>怎么画那六步在速背点 13。</b>'},
{r:'中', q:'What does “photolysis” mean here?',
 en:'“Splitting by light — here the <b>light-driven splitting of water</b>. The textbook lists it as part of the biochemistry of photosynthesis, the complex of processes connected with the transfer of electrons and protons, <b>including the photolysis of water</b>. Strictly the photon does not break the bond: it oxidises P680, and P680-plus is then a strong enough oxidant to take electrons from water, which falls apart into protons and oxygen.”',
 cn:'<b>「不是光子直接劈开水」这一层值钱</b>，因为 photolysis 这个词本身在误导。书没明说这层，<b>但它是书自己那套顺序的必然推论</b>（P 先被氧化，空位再由次级供体填上，<span class="pg">p208</span>）。说的时候带一句 “that follows from the book’s own order of events”。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方 —— 他插刀就插在这里。', items:[
{r:'高', q:'Why are two photosystems needed?',
 en:'“Because the electron has a long way uphill and one photon will not pay for it. The textbook gives both ends: the oxygen–water couple at <b>plus 820 millivolts</b>, NADP-plus over NADPH at <b>minus 320</b>. That is 1.14 volts <b>against</b> the spontaneous direction, which is why the scheme is a Z — two photon-driven jumps in series with a downhill run between them. And the downhill run is not wasted: it is where the protons are moved and the ATP comes from.”',
 cn:'两个电位<b>400 dpi 核过</b>，跟书自己 Tab. 6.2 的 <b>+0,82 V</b> 一致（<span class="pg">p135</span>）——<b>书内部自洽</b>，不是我们算的。1,14 V 是相减，<b>说的时候带一句「按你这本书的两个数算下来」</b>。「下坡是挣 ATP 的」是通用推论。'},
{r:'高', q:'Why make NADPH and ATP at all, instead of using the light directly on CO₂?',
 en:'“Because the two halves work on time scales that cannot be coupled. The textbook separates them: absorption and energy transfer take <b>ten to the minus fifteen to ten to the minus eight seconds and are independent of temperature</b>, while fixing CO₂ is a chain of enzyme reactions, far slower and temperature-dependent. A femtosecond excited state cannot drive an enzyme chain, so the energy must be parked in something <b>stable, diffusible and chemical</b> — which is how the book describes NADPH and ATP: the <b>first stable products</b>.”',
 cn:'时间尺度<b>400 dpi 核过</b>（<span class="pg">p203</span>）。<b>这是全卡最好的一条 why</b>：三层全在书里，不用借外部权威，而且一句话同时解释了「为什么分两半」和「为什么叫暗反应」。'},
{r:'高', q:'Why is the proton gradient the other way round from the mitochondrion?',
 en:'“Because the membrane itself is oriented the other way round, and the textbook says so in those words: <b>the orientation of thylakoid membranes is reversed</b>. In the mitochondrion protons are pumped <b>out</b> of the matrix and the synthase head faces the matrix; in the chloroplast they are driven <b>into</b> the thylakoid lumen and the knobs protrude on the <b>outer</b> surface, letting protons out into the stroma. The book even offers a reason: the explanation <b>lies in the evolution of the membranes and their different pinching off and self-closing</b>.”',
 good:'<b>一个记法，被问的时候直接说出来</b>（通用，不是书说的）：“One way to keep it straight: in both organelles the ATP is made in the <b>soluble phase where it will be used</b> — the matrix, the stroma — so the protons always have to be moved to the <b>other</b> side first. The topology follows from where the ATP is needed.”',
 cn:'<span class="pg">p208 p209</span>。<b>最容易说反、也是他很爱问的地方</b>——说反了说明你在背图不是懂图。'},
{r:'中', q:'Why does the cell keep NADPH and NADH apart at all?',
 en:'“Because it uses them for opposite jobs. This textbook states both halves: the NADPH from the pentose phosphate pathway <b>is not oxidised in the respiratory chain but is used for synthetic reactions</b>, and, comparing fatty-acid synthesis with degradation, <b>the hydrogen donor for synthesis is NADPH whereas oxidation produces NADH</b>. The two differ by a single phosphate on the ribose, and that one group is enough for enzymes to tell them apart.”',
 good:'顺势收一句（通用推论，不是书说的）：“So the cell can hold its NADH pool mostly <b>oxidised</b>, to keep catabolism running, and its NADPH pool mostly <b>reduced</b>, to keep biosynthesis running — two opposite settings that would be impossible with one coenzyme.”',
 cn:'<span class="pg">p219 p220</span>。<b>「一个磷酸就把两条路分开了」在卡 25 里已经有了</b>，两边说的是同一件事，背一次用两次。'},
{r:'中', q:'Why does the antenna need to be so large?',
 en:'“Because photons reach any one chlorophyll rarely, while the reaction centre is expensive and should never be idle. About two hundred antenna molecules feed one centre. The textbook adds the other half of the argument from the centre’s side: the <b>quantum yield of the charge separation is high</b> — the fraction of absorbed photons that end in a separated charge — meaning this route of de-excitation is <b>strongly preferred over fluorescence or conversion into heat</b> — so almost all the delivered energy is used.”',
 cn:'<span class="pg">p207</span>。<b>「昂贵的中心 ＋ 便宜的天线」是通用说法</b>，书只给了比值和量子产率高这两件事实。<b>反过来还能接</b>：天线太大也危险——光太强时多余的激发能生成活性氧，这正是类胡萝卜素要当抗氧化剂的原因（<span class="pg">p187</span>）。'}
]},

{g:'怎么发现的', gn:'<b>Calvin 那条书自己给了，氧来自水那条书只给结论。</b>两条一起说，一条有出处一条标 general，反而显得你分得清。', items:[
{r:'中', q:'How do we know the oxygen comes from water and not from CO₂?',
 en:'“By <b>labelling the oxygen</b>. Grow the cells with water enriched in <b>oxygen-18</b> and ordinary CO₂, and the O₂ that comes off is heavy; do it the other way round and it is not. So the oxygen traces back to water. That experiment is <b>general knowledge — this textbook states the conclusion but not the experiment</b>; what it does is write the equation with twelve waters instead of six, saying the factors are there to stress that the released oxygen comes from water.”',
 cn:'全书 grep：<b>izotop 0 · 18O 0 · Ruben 0 · Kamen 0 · Hill 0</b>（p229 那个是 McGraw-Hill）。<b>明确标 general。</b><br><b>第二条证据也值得会</b>（同样 general）：<b>Hill 反应</b>——离体叶绿体在没有 CO₂ 的情况下，只要给一个人工电子受体就照样放氧。英文：“And the Hill reaction: isolated chloroplasts evolve oxygen with an artificial electron acceptor and no CO₂ present at all — so oxygen release cannot depend on CO₂.”'},
{r:'中', q:'Who worked out the Calvin cycle, and how?',
 en:'“The textbook names them: CO₂ fixation was described by <b>M. Calvin, Nobel Prize 1961, with A. A. Benson and J. A. Bassham</b>. The method is general rather than from this book: they fed illuminated algae <b>carbon-14 dioxide</b> for a few seconds, killed them, separated the soluble compounds by <b>two-dimensional paper chromatography</b> and looked for radioactive spots. The shorter the exposure, the fewer the labelled compounds — and at the shortest times the label was essentially all in <b>3-phosphoglycerate</b>.”',
 cn:'人名和 1961 <b>书上有</b>（<span class="pg">p209</span>；Benson 在 OCR 里断行成 “Ben-sonem” 所以 grep 不到，<b>原文有</b>）。<b>¹⁴C、二维纸层析全部 general</b>。<b>这条的价值不在历史</b>：「<b>缩短标记时间，看谁先亮</b>」本身就是做通路的通用方法，说得出这层比记人名值钱。'},
{r:'中', q:'Where does the chemiosmotic idea come from?',
 en:'“From <b>Peter Mitchell</b>, in 1961 — the same principle for the mitochondrion and the chloroplast: what links electron transport to ATP synthesis is not a chemical intermediate but a <b>proton gradient across a membrane</b>. Nobel Prize 1978. That is general knowledge; this textbook gives the principle without the name and applies it to both membranes, saying the thylakoid ATP synthase is analogous to the mitochondrial one and the difference is the orientation.”',
 cn:'全书 grep：<b>Mitchell 0 · chemiosmot 0</b>，跟卡 <b>25</b> 一样（那张卡上已有这条），<b>背一次用两次</b>。酸碱跳变那个实验书里也没有，<b>标 general</b>。',
 good:'<b>叶绿体这侧有一个更干净的实验</b>（也是 general）：“Isolated thylakoids were soaked in an acid buffer until the lumen was acidic, then moved suddenly into an alkaline one — and <b>they made ATP in complete darkness</b>, on an artificial pH difference alone. That is the cleanest demonstration, because it takes the light away entirely.”'}
]},

{g:'陷阱', gn:'这几条几乎每次都会被问，而且都是一句话说错就掉分的那种。', items:[
{r:'高', q:'So the oxygen comes from the carbon dioxide?',
 en:'“No — it comes from <b>water</b>. Photosystem two fills the electron hole in P680 by oxidising water at the inner surface of the thylakoid, and the oxygen is what is left once the electrons and protons are taken off. The carbon dioxide goes the other way entirely: it is <b>reduced</b>, in the stroma, and both its oxygens end up in the sugar and in water. This textbook writes the equation with twelve waters rather than six <b>precisely to make this point</b>.”',
 cn:'<span class="pg">p203</span>。<b>这是这道题被问得最多的一句。</b>说错了不只是一个事实错——它说明你把两半接反了。<b>自检</b>：CO₂ 是<b>受体</b>（通式里的 A），水是<b>供体</b>（H₂D）；供体被氧化，所以氧从供体来。'},
{r:'高', q:'Do the dark reactions happen at night?',
 en:'“No, and the textbook says the name is a bad one. Its words: the term <b>dark phase is not appropriate, because it suggests that this conversion does not occur in the light</b>. Nor is ‘light-independent’ much better, because the sequence runs <b>only for as long as there is enough NADPH and ATP</b> — and those come from the light reactions, so in practice the cycle runs in daylight, right alongside them.”',
 cn:'<span class="pg">p209</span>。<b>引用书自己反对这个名字，比自己反对有力得多。</b>顺带能挡住「那植物晚上做什么」——<b>呼吸</b>，它有线粒体，跟你一样。'},
{r:'高', q:'So the light reactions make the sugar?',
 en:'“No — the light reactions make <b>ATP, NADPH and oxygen</b>, and not one carbon atom. The textbook calls NADPH and ATP the <b>first stable products</b> of the thylakoid processes and then says those two are <b>used above all in the fixation and reduction of CO₂</b>, a separate set of enzyme reactions in the stroma. Carbon enters at exactly one place: <b>rubisco</b>, adding CO₂ to ribulose-1,5-bisphosphate.”',
 cn:'<span class="pg">p209</span>。<b>跟卡 25 那条「链不造 ATP，合酶才造」是同一种错法</b>：把一台机器的两半混成一件事。<b>两张卡的这条要一起记。</b>'},
{r:'中', q:'Is chlorophyll used up?',
 en:'“No — it is a <b>catalyst, not a substrate</b>. The reaction-centre chlorophyll gives up an electron and gets one back almost at once, from water by way of the oxygen-evolving complex, or from plastocyanin in photosystem one; the antenna chlorophyll is <b>never oxidised at all</b>. So the molecule goes round a cycle. It <b>is</b> degraded and replaced over time, which is why leaves go yellow in autumn — but that is turnover, not consumption by the reaction.”',
 cn:'书没直接写「叶绿素不被消耗」，<b>但写全了理由</b>：天线色素 <i>se neoxidují</i>（<span class="pg">p207</span>），反应中心的空位由次级供体填上（<span class="pg">p208</span>）。<b>用书的两句话推，比下一个断言稳。</b>秋天那半句是 general。'},
{r:'中', q:'Is the chloroplast ATP synthase a different enzyme from the mitochondrial one?',
 en:'“No — the textbook says its <b>composition and function are again analogous</b> to the ATP synthase of the inner mitochondrial membrane, and its figure names the parts <b>CF-zero and CF-one</b> against F-zero and F-one, the C for chloroplast. The mechanism is the same. What differs is the <b>orientation</b> — the knobs face the stroma and protons come <b>out</b> of the thylakoid, whereas in the mitochondrion the knobs face the matrix and protons go <b>in</b>.”',
 cn:'<span class="pg">p208 p209</span>。<b>「同一台机器装反了」最省事</b>，而且它让卡 <b>25</b> 合酶那两格（结构、把 ATP 松开的机制）在这道题上原样可用——<b>不用再背一遍</b>。'}
]},

{g:'相邻考点', gn:'从这道题走出去，他多半走这四个方向。每个一句话就能接住，不要展开。', items:[
{r:'高', q:'What are C-3, C-4 and CAM plants?',
 en:'“<b>C-3</b> plants fix CO₂ by the Calvin cycle and are named after the <b>first stable product, three-carbon 3-phosphoglycerate</b>. <b>C-4</b> plants, found by <b>Hatch and Slack in 1970</b>, fix it first onto <b>phosphoenolpyruvate</b> with <b>PEP carboxylase</b>, giving four-carbon <b>oxaloacetate</b>; that is carried to the <b>bundle-sheath cells</b>, the inner layer wrapped round the vein, and decarboxylated there, and rubisco fixes the released CO₂ in an ordinary Calvin cycle. <b>CAM</b> plants do the same thing separated in <b>time</b> rather than in space — fixing at night, releasing by day. The point is that <b>PEP carboxylase works at a lower Km for CO₂ than rubisco needs</b> — the book’s phrase is that the mechanism <b>concentrates CO₂</b>. That is the next question on the list, so I will leave it there unless you want it.”',
 cn:'<span class="pg">p212 p213 p214</span> —— <b>这是题库 #28，另一张卡，这里只碰一下。</b>CAM 那一半（在<b>时间</b>上分开而不是空间上）在 <span class="pg">p215</span> 附近，<b>这张卡不承诺细节</b>。<b>最后半句「除非你想听」是故意留的口子</b>：落在一道你知道边界的题上，不是深坑。'},
{r:'高', q:'How does this compare with the respiratory chain?',
 en:'“The textbook draws the comparison itself. It says the thylakoid membrane is <b>closest, structurally and functionally, to the inner mitochondrial membrane, the seat of the respiratory chain</b>, and that the carriers are analogous: <b>quinones, cytochromes, iron–sulfur proteins, flavoproteins</b>, and a nicotinamide coenzyme. Plants have two extras: <b>plastocyanin</b> and the oxygen-evolving complex. Three real differences: <b>light pushes the electrons uphill</b>; the product is <b>NADPH</b> for biosynthesis rather than NADH; and the protons go <b>into</b> the closed compartment instead of out of it.”',
 cn:'<span class="pg">p206 p208</span>。<b>书自己把两者并排写了，所以这是有出处的类比，不是你的发挥</b>——卡 <b>25</b> 的相邻考点格也有这条。<b>接住之后就走进卡 25</b>，那张卡她已经背过。'},
{r:'中', q:'What happens to the fructose-6-phosphate afterwards?',
 en:'“The textbook takes it to <b>glucose-6-phosphate</b> and then three ways: on to <b>glucose</b>, on to <b>cellulose</b>, or into the <b>general metabolic pathways — it names glycolysis</b>. And it warns against thinking hexose is the point: the larger part of the fixed carbon goes into the <b>central metabolic pathways, naming the citric acid cycle</b>, as a source of energy and of carbon for other sugars, amino acids, proteins, fatty acids, lipids, nucleotides, pigments and secondary plant metabolites.”',
 cn:'<span class="pg">p209 p211 p212</span>。<b>这条把光合接回她背过的糖那一块</b>（卡 <b>06</b> 的葡萄糖、卡 <b>gly</b> 的糖酵解）：<b>Calvin 循环吐出来的那个 F6P，就是糖酵解第二步的产物</b>——同一个分子，两条路在这里对接。'},
{r:'中', q:'Does photosynthesis do anything besides making sugar?',
 en:'“Yes, and the textbook is explicit. Its opening list of the metabolisms specific to autotrophs has five items, of which photosynthesis proper is only the first: <b>assimilation of atmospheric nitrogen; reduction of nitrates, nitrites and sulfates with the biosynthesis of cysteine; biosynthesis of aromatic amino acids; and secondary plant metabolites</b>. And it shows the link: reducing nitrite in a leaf needs a strong reductant of low redox potential, and it says the source of the reduced <b>ferredoxin</b> is <b>photosynthesis</b>.”',
 cn:'<span class="pg">p202 p215 p216</span>（§9.4）。<b>这条把这道题从「一条通路」升成「自养生物的能量入口」</b>，而且全部有出处。<b>但不要往氮代谢里走</b>，那是另一节，说完这句就停。'}
]},

{g:'桥回主场', gn:'段 4 那条桥，被追问时的第二层。<b>接住了就落在定向进化和酵母展示上——她的日常工作。</b>', items:[
{r:'中', q:'You engineer proteins — would you try to improve rubisco?',
 en:'“It is the classic target that looks obvious and has resisted for decades, so I would be careful about promising anything. The property you want and the property you can select for are coupled: across natural rubiscos, the variants that <b>discriminate better between CO₂ and O₂ tend to be the slower ones</b>. So a screen for specificity hands back a slow enzyme, and one for rate a wasteful one. That trade-off is general knowledge, not this textbook. The real design question is the one I face anyway: <b>what does my selection report on</b>.”',
 cn:'<b>这是这张卡上最诚实的一座桥</b>：不是「我也做光合」，而是「这是我认得的那类问题」。<b>两个 general 必须标</b>：权衡本身；「最丰富的蛋白」这个最高级（书写的是「之一」）。<br><b>还有一个真实的技术障碍可以加</b>（也是 general）：rubisco 的大亚基由<b>叶绿体基因组</b>编码，折叠还要专门的伴侣蛋白，所以它<b>很难在大肠杆菌或酵母里做常规文库筛选</b>——这句能解释「为什么试了这么多年还没成」，而且正好落在她的方法学上。'},
{r:'中', q:'Two hundred antenna molecules per reaction centre — is that anything like what you do?',
 en:'“It is the same accounting problem. The antenna exists because the expensive part must never be idle, so the cell surrounds it with cheap collectors. In <b>yeast display</b> I meet it from the other side: each cell shows many copies of one variant, the copy number sets the signal, and what I want to measure is a property of <b>one</b> molecule. If copy number varies I select for expression rather than binding, so I normalise against it. Same lesson: <b>know which quantity you amplified</b>.”',
 cn:'<b>诚实地短。</b>不点具体病原体、不展开课题（见 `DRILL.md` 的三条机制）。<b>这条桥落在卡 02（Kd）和横向卡 fitness landscape 上</b>——「我测的到底是哪一个量」正是那两张卡的核心。'}
]}
]
});
