/* 横向卡 · 四大物质的代谢 —— 四种食物，一个漏斗，一台引擎
   不对应任何一道考题。三十道题里没有「脂肪 / 蛋白质 / 氨基酸怎么拆、怎么造」，
   所以这块材料只会以**追问**出现，从别的卡里走出来。
   出处 Biochemie OCR p115–p127（蛋白与氨基酸的分解、尿素循环、碳骨架的去向）、
   p130–p135（生物能学 ＋ 三种食物的完全燃烧）、p146（NADH ＝ 3 ATP）、
   p161–p163（两条到戊糖磷酸的路）、p169–p170（糖异生）、p172–p175（多糖的水解、磷酸解、合成）、
   p187–p193（脂的合成）、p193–p197（脂的分解、β-氧化四步）、p218–p220（三个阶段、四条进口、单向阀）。
   书的勘误第 6 条（p196 thiolase 印成 ketokinase）用在速背第 09 点和追问里。 */

window.CARDS.push({
id:'x-meta', cross:1, w:0,
q:'四大物质的代谢 —— 生成和分解，到底是一张什么形状的图',
qcn:'横向卡 · 四种食物 · 一个 acetyl-CoA · 一台共用的引擎 · 氮单独走',
sub:'跨题共用 · 没有对应的考题，只会以追问出现 · 接卡 gly、24、25、23、aa、06、32、x-rxn、x-bonds',

cram:[
 {g:'开口 · 这张卡为什么存在', gn:'这张卡<b>没有对应的考题</b>，所以「它为什么存在」这件事本身要能说出口——因为他一定是<b>顺着别的卡问过来的</b>。'},
 {n:'01', t:'三十道题里没有这一题',
  big:'题目问了糖酵解、循环、呼吸链、氧化磷酸化、光合、调控。<b>没有一道问脂肪、蛋白质、氨基酸怎么拆、怎么造</b>',
  en:'“None of the thirty written questions asks how fats or proteins or amino acids are broken down, or how they are built. So this subject can only reach me as a follow-up. It walks out of glycolysis, or out of the citric acid cycle, or out of the lipid question. What I need here is not another pathway. I need four sentences that hold the shape of all of it.”',
  note:'<b>这个缺口是她自己发现的</b>：「我发现脂质没写，四大物质的代谢好像没写」。她是对的。<br><br>三十道题里 <b>#2 糖酵解 · #24 柠檬酸循环 · #25 呼吸链 · #26 氧化磷酸化 · #27 光合 · #32 代谢调控</b> 全都在，而三道「物质」题——<b>#22 糖的结构和功能 · #23 脂的类型和作用 · #1 氨基酸的名字</b>——问的<b>都不是代谢</b>。<br><br>所以这张卡不是第 31 道题。<b>它是把那六张卡缝在一起的那根线</b>，而线头露在每一张卡的末尾。'},
 {n:'02', t:'书也是同一个形状',
  big:'哪一块书写了、哪一块书没写，<b>要一条条说清楚</b>：氨基酸的<b>合成全书没有</b>，糖异生只有一小段，其余都写了',
  en:'“The textbook has the same shape as the exam. Protein breakdown and amino acid breakdown get a whole chapter, pages 115 to 127. Lipid synthesis gets pages 187 to 193 and lipid breakdown gets pages 193 to 197. But amino acid synthesis is not in this book at all. And the book says itself on page 125 that a detailed description of how the individual amino acids are degraded goes beyond the scope of these notes.”',
  tbl:{head:['这一块','书写了没有','在哪'],
   rows:[
    ['糖怎么拆','<b>写了，很细</b>','第 7 章 · 糖酵解 · 戊糖磷酸 <span class="pg">p161–p163</span> · 多糖 <span class="pg">p172–p174</span>'],
    ['糖怎么造','<b>只有一小段</b>','糖异生 <span class="pg">p169–p170</span> ＋ <span class="pg">p219</span>；多糖合成 <span class="pg">p174–p175</span>'],
    ['脂怎么拆','<b>写了，四步都画了</b>','§8.4 <span class="pg">p193–p197</span>'],
    ['脂怎么造','<b>写了，六步 ＋ 总账</b>','§8.3 <span class="pg">p187–p193</span>'],
    ['蛋白和氨基酸怎么拆','<b>写了，全书最细的一章</b>','§5 <span class="pg">p115–p127</span>'],
    ['氨基酸怎么造','<b>全书没有</b>','只有 <span class="pg">p218</span> 一句「先成氧代酸，再变成氨基酸」'],
    ['四样怎么汇合','<b>只有三页</b>','§10.1 <span class="pg">p218–p220</span>——整本书唯一通读全局的地方']
   ]},
  note:'<b>「书里没有」这句话要敢说，但只能对氨基酸合成说。</b>已经 grep 过全书：氨基酸的生物合成只在 <span class="pg">p212</span> 和 <span class="pg">p216</span> 各被顺带提到一次，都是讲植物，<b>没有任何一条通路</b>。<br><br>⚠ <b>别跟着「脂质没写」的印象说书没写脂的代谢。</b>脂的合成和分解这本书写得相当全，各一整节。真正没写的是<b>氨基酸的合成</b>，和<b>把四样连起来看的那张图</b>——后者只有三页。'},

 {g:'一个漏斗 —— 四种食物，一个出口', gn:'<b>这一组就是这张卡。</b>说得出这个漏斗，「脂肪怎么烧」「氮去哪了」「饿了烧什么」「脂肪为什么变不成糖」就全都有答案了。书 <span class="pg">p218</span> 自己把它写成三个阶段。'},
 {n:'03', t:'书自己的三个阶段',
  big:'阶段一 <b>拆成建筑块</b> → 阶段二 <b>收敛成很少几个更小的中间体</b> → 阶段三 <b>烧成 CO₂ 和水</b>',
  en:'“The textbook sets it out in three phases, and that is the cleanest way to say the whole thing. In the first phase the big molecules are split into their building blocks. Polysaccharides give monosaccharides, lipids give fatty acids and glycerol, and proteins give amino acids. In the second phase those products are converted into a small number of still smaller intermediates. In the third phase those are oxidised to carbon dioxide and water.”',
  note:'这是 <span class="pg">p218</span> 的原话，顺序一个字没改；书还画了图 Obr. 6.2「分解与合成的三个阶段」在 <span class="pg">p133</span>。<br><br><b>第二阶段那半句「收敛成很少几个」就是漏斗本身</b>：进口是几百种分子，出口只剩一个。书在同一页点了名，说有几个代谢物特别关键：<b>acetyl-CoA · pyruvate · 2-oxoglutarate · NADH 和 NADPH · ATP</b>。'},
 {n:'04', t:'进口一 · 糖（甘油也走这条）',
  big:'糖 → <b>pyruvate</b> → 氧化脱羧 → <b>acetyl-CoA</b>。脂肪分子上的<b>甘油那一臂也从这里进</b>',
  en:'“Carbohydrate enters first. Sugars go through glycolysis to pyruvate, and pyruvate is oxidatively decarboxylated to acetyl-CoA. Glycerol comes in at the same door. The textbook says glycerol is oxidised to a triose, glyceraldehyde, and in the phosphorylated form it joins carbohydrate metabolism. So a fat is split at the start, and its glycerol arm follows the sugar route while its three fatty acid arms do not.”',
  note:'<span class="pg">p218</span>、<span class="pg">p220</span>。糖酵解全套在卡 <b>gly</b>，糖本身在卡 <b>06</b>。<br><br><b>甘油这条支线最常被忘掉，而它正是「脂肪能不能变成糖」那道题的唯一裂缝</b>：甘油可以，脂肪酸不行。留着它，点 15 那条单向阀才不会被一挑就破。'},
 {n:'05', t:'进口二 · 脂肪酸',
  big:'脂肪酸<b>从羧基端一次砍两个碳</b>，直接给 acetyl-CoA。砍之前要先花 ATP 把它活化成 acyl-CoA',
  en:'“Fatty acids enter by beta-oxidation. Beta-oxidation is the degradation of a fatty acid by taking two-carbon units off, as acetyl groups, from the carboxyl end of the molecule. The name says where the chemistry happens, on the beta carbon, the second one along from the carboxyl. Before any of it the free acid has to be activated. It is converted into a thioester with coenzyme A, and that costs ATP. In eukaryotes the whole process sits in the mitochondrial matrix, which the textbook says holds all four enzymes of one cycle.”',
  note:'<span class="pg">p194</span>、<span class="pg">p195</span>。四步的细节在卡 <b>23</b>。<br><br>⚠ <b>β-oxidation 这个词在整套卡里从来没有被正面定义过</b>（`terms.py` 查过），所以这里就地定义掉：<b>从羧基端一次拿掉两个碳、做成乙酰基</b>。<br><br>「β」指的是<b>从羧基数过去的第二个碳</b>，被氧化的就是它——<b>名字本身就是反应地点</b>，这跟卡 <b>x-rxn</b> 说的「名字按分子身上发生了什么起」是同一条。<br><br>活化那一步书给的酶名是 <b>thiokinase</b>，中间体是 acyl adenylate，产物是 <b>acyl-CoA ＋ AMP ＋ PPᵢ</b>（<span class="pg">p194</span> 的反应式）。<b>acyl-CoA 就是脂肪酸的羧基和辅酶 A 的巯基做成的硫酯</b>，硫酯为什么活泼在卡 <b>x-bonds</b>。'},
 {n:'06', t:'进口三 · 氨基酸的碳骨架',
  big:'氨基酸<b>先把氮摘掉</b>，剩下的碳骨架进 acetyl-CoA，或者进循环的某个中间体',
  en:'“Amino acids enter last, and they enter in two pieces. The nitrogen has to come off first. That is transamination onto a 2-oxo acid, or oxidative deamination, and the textbook calls it the primary requirement for degrading an amino acid. What is left is the carbon skeleton. The textbook then says plainly that these carbon skeletons give the same products as the metabolism of sugars or of fatty acids.”',
  note:'<span class="pg">p118</span>、<span class="pg">p125</span>。二十个氨基酸的名字在卡 <b>aa</b>，transamination 的定义在卡 <b>x-rxn</b>。<br><br><b>「先掉氮」是整块的门槛</b>：不先摘氮，后面什么都不能发生。这也是氨基酸跟另外两种食物<b>最根本的不同</b>——它是唯一一种<b>进漏斗之前要先拆成两半</b>的食物。<br><br>书按<b>碳骨架最后落在哪</b>把氨基酸分两类：<b>glucogenic</b>（生糖）＝ 终产物是 <b>pyruvate</b>，喂给饥饿的机体会走糖异生、生成糖原；<b>ketogenic</b>（生酮）＝ 一路拆到 <b>acetyl-CoA</b>，多到超过循环的处理能力就变成酮体。<b>书说纯生酮的只有 Leu 一个</b>，Ile、Phe、Trp、Tyr 两边都算（<span class="pg">p125</span>）。'},
 {n:'07', t:'氮不走漏斗，它自己有一条路',
  big:'氮先<b>集中到 glutamate</b> 上，脱下来变成氨，再<b>打包成尿素</b>排掉。这是四样里<b>唯一要花钱扔的垃圾</b>',
  en:'“The nitrogen leaves on a road of its own. Transamination collects the amino groups of all the amino acids onto one of them, usually glutamate. Glutamate is then oxidatively deaminated by glutamate dehydrogenase, and free ammonia comes off. Ammonia is toxic, so land animals convert it in the liver into urea. Fish let it diffuse straight out through the gills, and birds and reptiles make uric acid instead.”',
  note:'<span class="pg">p119</span>、<span class="pg">p120</span>、<span class="pg">p123</span>。<b>三类动物三种处理方式是书自己列的</b>，一句话给完很漂亮，而且顺带回答了「为什么鸟粪是白的」。<br><br>书给转氨的目的说得很直白：<b>把所有氨基酸的氨基攒到一个氨基酸身上</b>，通常是 glutamate，再由它在下一步被氧化脱氨（<span class="pg">p120</span>）。<b>所以「谁是氮的集合点」这个问题只有一个答案：glutamate。</b><br><br>尿素循环也叫<b>鸟氨酸循环</b>，四个酶，横跨线粒体基质和胞质两个区室——<b>书特意说它跟柠檬酸循环不一样，不待在一个细胞器里</b>（<span class="pg">p123</span>）。它的账在追问里。'},
 {n:'08', t:'汇合之后：同一台引擎',
  big:'acetyl-CoA 之后，<b>四样走的是完全同一条路</b>——柠檬酸循环 ＋ 呼吸链，也就是卡 <b>24</b> 和卡 <b>25</b>',
  en:'“From acetyl-CoA onwards all four foods take exactly the same road. The acetyl group condenses with oxaloacetate, the citric acid cycle oxidises both of its carbons to carbon dioxide, and the hydrogen is carried off on reduced coenzymes. The respiratory chain then reoxidises those coenzymes, and that is where the main part of the energy is actually converted. The textbook calls the cycle the chain’s most important supplier of reduced coenzyme.”',
  note:'<span class="pg">p220</span> §10.1.4 是书自己把这两件事连着讲的地方。<br><br><b>说到这里就该停，把话交给卡 24 和卡 25。</b>这正是横向卡的用法：它是<b>路口</b>，不是终点。<b>在路口上多讲一步，就等于替他挑了一个你不打算深入的方向。</b><br><br>书在同一页还提醒了反方向：<b>循环同时是合成的原料库</b>。2-oxoglutarate 和 oxaloacetate 靠转氨变成氨基酸，succinyl-CoA 跟 glycine 反应生成 δ-aminolevulate，再做成卟啉；fumarate 把循环和 Tyr、Asp 的代谢连起来（<span class="pg">p220</span>）。'},

 {g:'账 · 三笔', gn:'<b>只说产出是半张账</b>，他一句「那消耗了什么」就能把你问停。前两笔是 β-氧化，第三笔是三种食物按克比——<b>第三笔是这张卡上最值钱的一格</b>。'},
 {n:'09', t:'一轮 β-氧化的账',
  big:'一轮换来 <b>1 acetyl-CoA ＋ 1 FADH₂ ＋ 1 NADH</b>，链短两个碳。<b>这一轮本身不出 ATP</b>',
  en:'“Here is the account for one round. In go the acyl-CoA, one FAD, one NAD-plus, one water and one coenzyme A. Out come one acetyl-CoA, the same chain two carbons shorter, one FADH2 and one NADH. The textbook gives exactly that per two-carbon unit on page 220. No ATP is made in the round itself. The energy leaves as reducing power, and the chain gets shorter.”',
  tbl:{head:['','一轮 β-氧化'],
   rows:[
    ['<b>投入</b>','1 acyl-CoA（Cₙ）· 1 FAD · 1 NAD⁺ · 1 H₂O · 1 CoA-SH'],
    ['<b>产出</b>','1 acetyl-CoA · 1 acyl-CoA（Cₙ₋₂）· 1 FADH₂ · 1 NADH'],
    ['<b>总结</b>','链短两个碳；<b>这一轮不直接出 ATP</b>，能量全部变成还原力，留给呼吸链去兑']
   ]},
  note:'四步的顺序：<b>氧化 → 加水 → 氧化 → 硫解</b>（<span class="pg">p196</span>）。英文：“Dehydrogenation by FAD, hydration of the double bond, dehydrogenation by NAD-plus, and then thiolytic cleavage by coenzyme A.”<br><br><b>一个白拿的观察，背一次顶两次</b>：<b>前三步跟柠檬酸循环最后三步是同一套化学，连顺序都一样</b>——succinate 被 FAD 脱氢 → fumarate 加水 → malate 被 NAD⁺ 脱氢。β-氧化只是在后面多了一刀硫解，把两个碳真正切下来。<b>这一条书没有说，是自己看出来的</b>，但它是真的，可以直接跟卡 <b>24</b> 对过去。',
  warn:'⚠ <b>第四步的酶名书印错了。</b>书 <span class="pg">p196</span> 那一栏印的是 <b>β-ketokinase</b>，而<b>同一行</b>写着 thiolytic cleavage，进来的是 <b>CoASH</b>。<b>kinase 转移的是磷酸，这一步一个磷酸都没有</b>，所以这个酶叫 <b>thiolase</b>。（勘误第 6 条，已回 280 dpi 原图确认书上印的就是这样。）<br>考场说法：“The textbook’s own figure calls this step thiolytic cleavage and shows coenzyme A coming in, not phosphate. So the enzyme is a thiolase. The name printed beside it cannot be right, because a kinase transfers a phosphoryl group and there is none here.”'},
 {n:'10', t:'一整条脂肪酸的账',
  big:'18 个碳的硬脂酸：<b>8 轮，出 9 个 acetyl-CoA</b>、8 FADH₂、8 NADH。<b>轮数 = 碳数 ÷ 2 − 1</b>',
  en:'“For a whole chain the textbook writes the equation out. Stearic acid has eighteen carbons. Its acyl-CoA plus eight FAD, eight NAD-plus, eight waters and eight coenzyme A gives nine acetyl-CoA, eight FADH2 and eight NADH. It is eight rounds and not nine, because the last round cuts a four-carbon piece into two acetyl units at one stroke.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>书印的方程式</b>（<span class="pg">p195</span>，一个数没改）：<br><code>C₁₇H₃₅CO–CoA ＋ 8 FAD ＋ 8 NAD⁺ ＋ 8 H₂O ＋ 8 CoASH → 9 CH₃CO–CoA ＋ 8 FADH₂ ＋ 8 NADH ＋ 8 H⁺</code><br><b>每个符号</b>：C₁₇H₃₅CO–CoA 是硬脂酸活化后的 acyl-CoA（18 个碳）· FAD 和 NAD⁺ 是两次氧化的受氢体 · CoASH 是自由的辅酶 A，<b>每切一刀就要来一个</b> · CH₃CO–CoA 就是两碳的 acetyl-CoA。<br><br><b>三步推导（轮数和乙酰数为什么不一样）</b>：<br>① 18 个碳一共能切出 <code>18 ÷ 2 = 9</code> 个两碳的乙酰。<br>② 但<b>最后一轮是一刀出两个</b>：剩下的四碳 acetoacetyl-CoA 被硫解成两个 acetyl-CoA。<br>③ 所以 <code>轮数 = 碳数 ÷ 2 − 1 = 9 − 1 = 8</code>。每轮出 1 FADH₂ ＋ 1 NADH，<b>所以是 8 和 8，不是 9 和 9</b>。<br><br><b>这条规则能回头验书的另一半</b>：书 <span class="pg">p189</span> 说合成 16 个碳的棕榈酸要 <b>7 个循环</b>、由 <b>8 个乙酰单位</b>组成。<code>16 ÷ 2 − 1 = 7</code>。<b>拆和造两边用的是同一个数法，书的两处对得上。</b><br><br><b>换成 ATP（全部用书自己的兑换率）</b>：<span class="pg">p146</span> 写 <code>NADH ＋ H⁺ ＋ ½ O₂ ＋ 3 ADP ＋ 3 Pᵢ → NAD⁺ ＋ 3 ATP ＋ 4 H₂O</code>，即 <b>NADH ＝ 3 ATP</b>，同页 4 个质子那一档是 <b>FADH₂ ＝ 2 ATP</b>。<span class="pg">p220</span> 写循环一圈出 <b>3 NADH ＋ 1 FADH₂ ＋ 1 GTP</b>，所以一圈 <code>3×3 ＋ 2 ＋ 1 = 12</code>。<br><code>8 轮的还原力：8×2 ＋ 8×3 = 40</code> · <code>9 个乙酰进循环：9×12 = 108</code> · <code>活化：−2</code> · <b>合计约 146 ATP</b>。<br>⚠ 活化那一步<b>书写的是「消耗 1 ATP」</b>（<span class="pg">p220</span>），但它产的是 <b>AMP ＋ PPᵢ</b>，把 AMP 补回 ATP 还要再花一个，<b>按高能键算是 2</b>。这个算法<b>书自己在尿素循环那里用过</b>（<span class="pg">p124</span>：1 个 ATP 生成 AMP，再生要 2 个，所以一共算 4 个）。被追问就说这两处应该用同一个数法。<b>146 这个总数书里没有</b>，是拿书的三个兑换率算出来的。<br><br><b>=== 一句话理解 ===</b><br><b>脂肪酸不是「一个高能分子」，它是一串一模一样的两碳砖，细胞每次只搬一块。</b>所以这张账上<b>没有任何一步特别赚</b>，赚的全在<b>长度</b>：链越长，同一套四个酶就重复越多次，账就越大。<br>顺着就懂了细胞为什么把能量存成脂肪而不是糖：<b>存糖要多养一整套酶和一堆不同的中间体，存脂肪只要把同一块砖一直往上码</b>——而且拆的时候也只要那四个酶。'},
 {n:'11', t:'为什么一克脂肪比一克糖给得多',
  big:'每克：<b>脂肪 44 · 糖 16 · 丙氨酸 12</b>（kJ）。脂肪赢的不是「热量高」，是<b>它更还原，而且身上不挂氧</b>',
  en:'“The textbook prints the complete combustion of three foods on one page, so this comparison needs no outside number. Glucose gives minus 2870 kilojoules per mole. Palmitic acid gives minus 11340. Alanine gives minus 1046. Divide each by its molar mass and a gram of fat gives roughly two point eight times what a gram of sugar gives. Alanine comes out lowest of the three.”',
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>书在同一页印了三种食物的完全燃烧</b>（<span class="pg">p135</span>，ΔG°′，单位 kJ/mol，一个数没改）：<br><code>葡萄糖：C₆H₁₂O₆ ＋ 6 O₂ → 6 CO₂ ＋ 6 H₂O ⋯⋯⋯ −2870</code><br><code>棕榈酸：C₁₆H₃₂O₂ ＋ 23 O₂ → 16 CO₂ ＋ 16 H₂O ⋯ −11340</code><br><code>丙氨酸：C₃H₇O₂N ＋ 3 O₂ → 3 CO₂ ＋ 2 H₂O ＋ NH₃ ⋯ −1046</code><br><b>符号</b>：ΔG°′ 是生化标准态（pH 7）下的标准自由能变，<b>负号表示放能</b>；摩尔质量直接从分子式加出来。<br><br><b>三步推导</b>：<br>① <b>按摩尔除以摩尔质量，换成按克</b>：<code>葡萄糖 2870 ÷ 180 = 15.9</code> · <code>棕榈酸 11340 ÷ 256 = 44.2</code> · <code>丙氨酸 1046 ÷ 89 = 11.7</code>（kJ/g）。<br>② <b>比值</b>：<code>44.2 ÷ 15.9 ≈ 2.8</code>。一克脂肪给的大约是一克糖的<b>两倍八</b>，而<b>丙氨酸比糖还低</b>。<br>③ <b>再按氧算一遍，理由就自己冒出来了</b>：<code>2870 ÷ 6 = 478</code> · <code>11340 ÷ 23 = 493</code>（kJ 每摩尔 O₂）。<b>两个数几乎一样。</b><br><br><b>=== 一句话理解 ===</b><br><b>细胞烧掉每一个氧分子拿到的能量是固定的，大约 480 到 490 kJ。所以「哪种食物更值钱」这个问题，其实等于问「一克里面能配上几个氧」。</b><br>葡萄糖 6 个碳配 6 个氧，<b>一碳一氧</b>；棕榈酸 16 个碳配 23 个氧，<b>一个碳配一点四四个氧</b>。差别不在什么化学玄妙，在于<b>糖的每个碳身上已经挂着一个氧，等于已经烧掉一半了</b>，而脂肪酸整条链是 −CH₂−，一个氧都没挂。<b>再加上糖挂的那些羟基还要拉住水，同样重量里真正能烧的更少。</b><br>丙氨酸垫底还有第二个理由：<b>它的氮根本不能烧</b>，而且扔掉还要倒贴 ATP（尿素那笔账在追问里）。<br>⚠ <b>三个 ΔG°′ 是书 <span class="pg">p135</span> 的；除出来的 kJ/g、比值 2.8、每摩尔氧的 478 和 493，书里都没有</b>，是拿书的数算的。食品标签上「脂肪 9 大卡、糖 4 大卡」是通用数，<b>不是这本书的，别混着引</b>。'},

 {g:'合成是镜像，但不是倒放', gn:'她问的是「生成和分解」。<b>生成这一半只要三句</b>：为什么不能倒放、差别具体在哪、哪一条路这本书里根本没有。'},
 {n:'12', t:'不是倒放',
  big:'书自己写着：分解和合成<b>不是互为逆反应，走的是不同的路</b>。理由是<b>能量要求根本不同</b>',
  en:'“Catabolism and anabolism are not the reverse of one another. The textbook says so directly. Between a precursor and an end product the two run by different routes, and the reason is a fundamental difference in their energy requirements. Catabolic processes produce ATP and anabolic ones consume it. Keeping the routes apart has a second payoff. It lets the cell regulate the two directions independently.”',
  note:'<span class="pg">p218</span> 原话。<b>这三句是这一组的地基</b>，问到任何合成都先说它。<br><br>书还给了第二个分开的办法：<b>放进细胞的不同部位</b>。脂肪酸<b>分解在线粒体基质，合成在胞质</b>（<span class="pg">p220</span>）——同一种分子，两条路，两个房间，可以同时开工而互不干扰。<br><br><b>调控的通则在卡 32</b>，那张卡的开口就是「这是规则不是清单」。这一格给的是<b>那条规则最干净的一个实例</b>。'},
 {n:'13', t:'脂肪酸合成的三条差别（书自己列的）',
  big:'① 先把 acetyl 羧化成 <b>malonyl-CoA</b> · ② 还原剂是 <b>NADPH</b> 不是 NADH · ③ 在<b>胞质一个多酶复合体上</b>，中间体全程不松手',
  en:'“The textbook lists three differences and they are the three that matter. First, synthesis begins by activating the methyl group of acetyl, carboxylating it to malonyl-CoA. Malonyl-CoA is acetyl-CoA with one extra carboxyl group, made by acetyl-CoA carboxylase using ATP and the coenzyme biotin. Second, the hydrogen donor for synthesis is NADPH, while the oxidation produced NADH. Third, synthesis is kept separate from degradation. It runs on a multienzyme complex in the cytoplasm, all the intermediates stay bound to the enzymes, and only the finished sixteen and eighteen carbon acyl-CoA is released.”',
  note:'<span class="pg">p220</span>，三条是书自己排的顺序。多酶复合体的核心蛋白叫 <b>ACP</b>（acyl carrier protein，携酰基蛋白），身上有两个不同的巯基：一个来自链里的 <b>cysteine</b>，一个是<b>磷酸泛酰巯基乙胺</b>的一部分，而后者也是 CoA 分子的一块（<span class="pg">p188</span>）。<br><br><b>NADH 和 NADPH 的分工是一条通则，值得单独说出口</b>：<b>NADH 送去呼吸链换 ATP，NADPH 留着做还原性合成。</b>书在戊糖磷酸那一节就是这么讲的——那条路产的 NADPH <b>不在呼吸链里被氧化，而是用于合成反应</b>（<span class="pg">p161</span>、<span class="pg">p219</span>）。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>书画的总账</b>（<span class="pg">p190</span> 的框图，照抄）：<br><code>8 acetyl-SCoA ＋ 7 ATP ＋ 14 NADPH(H⁺) ＋ 7 个酶 ＋ ACP-SH → 棕榈酸 ＋ 7 ADP ＋ 7 Pᵢ</code><br><b>三个数各是怎么来的</b>：<br>① <b>8 个乙酰</b>：棕榈酸 16 个碳 ÷ 2 = 8。其中<b>只有第一个</b>是以 acetyl-CoA 的身份进去的，<b>其余 7 个都要先变成 malonyl-CoA</b>——这句是书 <span class="pg">p189</span> 自己点明的。<br>② <b>7 个 ATP</b>：一个 ATP 买一次羧化，7 个 malonyl 就是 7 个 ATP。<br>③ <b>14 个 NADPH</b>：每一轮有<b>两次还原</b>（β-酮酰基还原、烯酰基还原），<code>7 轮 × 2 = 14</code>。<br><br><b>=== 一句话理解 ===</b><br><b>那个羧基是租来的把手，不是加上去的碳。</b>羧化时装上一个 CO₂，缩合的时候同一个 CO₂ <b>当场又掉下来</b>（<span class="pg">p189</span> 的反应式里就写着放出 CO₂）。细胞花那一个 ATP，买的不是一个碳，是<b>让那个死气沉沉的甲基变得肯反应</b>。<br>所以「合成是分解的镜像」这句话只对一半：<b>拆的时候两碳砖是白掉下来的，造的时候每一块砖都要先交一次 ATP 的过路费。</b>这就是书那句「两条路的能量要求根本不同」的具体样子。'},
 {n:'14', t:'氨基酸的合成：这本书里没有',
  big:'<b>全书没有一条氨基酸合成通路。</b>能说的只有一句形状，加三个真实的出口',
  en:'“I should be straight about this one. This textbook gives no pathway for amino acid synthesis anywhere. What it does give is the shape, on page 218. In protein biosynthesis the first phase makes oxo acids, the second converts them into alpha amino acids, and the third builds the protein. Running a transamination backwards is exactly that second step. The book also gives one real route by name. Phenylalanine is hydroxylated to tyrosine, and it says that this is why phenylalanine is essential and tyrosine is not.”',
  note:'<span class="pg">p218</span>、<span class="pg">p127</span>。<b>这是全套材料里「书里没有」说得最硬的一条</b>——已经 grep 过全书。<br><br><b>被追问就给这三样，一样都不要编：</b><br>① <b>转氨本来就是可逆的</b>，反着跑就是把 2-oxo 酸变成氨基酸——书 <span class="pg">p120</span> 的方程式本身画的就是双箭头。<br>② <b>glutamate dehydrogenase 那一步书明写可以反着走</b>：<code>NH₃ ＋ 2-oxoglutarate ＋ NADPH ＋ H⁺ ⇌ Glu ＋ NADP⁺ ＋ H₂O</code>（<span class="pg">p123</span>）。<b>这就是氨重新变回氨基酸的入口</b>，而且书说大多数生物都用它回收氨。<br>③ <b>glycine 和 serine 互变</b>，酶是 <b>serine hydroxymethyltransferase</b>（<span class="pg">p126</span>）。<br><br>再往下追就说这本书没有，<b>不要自己补 Lehninger 的通路</b>。⚠ 同事问过「glycine 是怎么产生的」，卡住的就是这一处；能给的最好答案就是上面第三条加一句「这本书只给到这里」。'},
 {n:'15', t:'单向阀 —— 脂肪变不成糖',
  big:'<b>动物不能用脂肪酸造糖。</b>书给的理由只有一句：<b>动物不会把 acetyl-CoA 变回 pyruvate</b>',
  en:'“The funnel has one valve in it, and it explains a lot of everyday biology. Sugars and fats both come down to acetyl-CoA. When the cell needs little energy, acetyl-CoA is used mainly to make fatty acids and fat, so an excess of either sugar or fat ends up stored as fat. Going back is blocked. The textbook says the animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for sugar synthesis, and therefore cannot make sugars out of fats.”',
  note:'<span class="pg">p220</span> §10.1.3 原话。<b>这一条一句话回答三个不同的问题</b>：为什么吃糖会长胖、为什么减肥难、为什么饿的时候血糖靠的是蛋白质而不是脂肪。<br><br><b>但一定要留那条缝，不然他一挑就破</b>：<b>甘油那一臂可以变成糖</b>（点 04），奇数碳脂肪酸最后剩下的 <b>propionyl-CoA</b> 也可以——它被延长成 <b>succinyl-CoA</b>，直接接进循环（<span class="pg">p195</span>）。<b>propionyl-CoA 就是三个碳的酰基-CoA</b>，从奇数碳链切到最后剩的那一截来。<br><br><b>所以准确的说法是「脂肪酸的碳变不成糖」，不是「脂肪变不成糖」。</b>这个区别他多半会挑，主动给出来比被挑出来好。'}
],

end:'<b>这张卡的用法：</b>他从任何一张代谢卡追过来，先画那个漏斗——<b>四种食物 · 一个 acetyl-CoA · 一台引擎</b>，氮走自己的路变成尿素。<b>画完就把话交回给卡 24 和卡 25</b>，别在路口上多走一步。<br>合成那一半只要三句：<b>不是倒放 · 差别在还原剂和地点 · 氨基酸合成这本书里没有</b>。',

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说清这题为什么会出现，再给书自己的三个阶段',
  p:['“There is no written question on this, so let me say what it is first. Metabolism is the whole set of strictly coordinated enzyme reactions in a living cell. The degrading half is catabolism and the synthetic half is anabolism. What the written questions cover is the shared part, glycolysis and the citric acid cycle and the respiratory chain. What they leave out is how fats and proteins get into that shared part.”',
     '“The textbook sets the whole thing out in three phases. In the first phase the big molecules are split into their building blocks. Polysaccharides give monosaccharides, lipids give fatty acids and glycerol, and proteins give amino acids. In the second phase those are converted into a small number of still smaller intermediates. In the third phase those are oxidised to carbon dioxide and water.”'],
  note:'<b>先声明「没有这道题」，是这张卡的开口</b>——它告诉他你知道自己在答一个追问，而不是在背第 31 道题。<br>三个阶段是 <span class="pg">p218</span> 的原话，图在 <span class="pg">p133</span>。「收敛成很少几个」那半句就是漏斗本身。'},
 {tag:'段 2 · general', h:'四条进口一条一条报，外加氮那条支路',
  p:['“The second phase is a funnel with four entrances and one exit, and the exit is acetyl-CoA. Carbohydrate goes through glycolysis to pyruvate and then, by oxidative decarboxylation, to acetyl-CoA. Glycerol joins the same route, because the textbook says it is oxidised to a triose and phosphorylated into carbohydrate metabolism. Fatty acids are cut two carbons at a time from the carboxyl end, straight to acetyl-CoA, and that is beta-oxidation.”',
     '“Amino acids enter in two pieces. The nitrogen has to come off first, by transamination or by oxidative deamination, and the carbon skeleton that is left enters either as acetyl-CoA or as one of the cycle intermediates. The nitrogen itself does not go down the funnel at all. It is collected onto glutamate, released as ammonia, and in land animals packaged into urea in the liver.”'],
  note:'<b>四句就是这张卡的全部</b>。<span class="pg">p218</span>、<span class="pg">p220</span>、<span class="pg">p195</span>、<span class="pg">p118</span>、<span class="pg">p123</span>。<br><b>「氮不走漏斗」这一句必须说出口</b>，否则听起来像是四样东西都一样，而氨基酸恰恰是唯一要先拆成两半的。'},
 {tag:'段 3 · 稍展开', h:'挑脂肪酸，因为账最清楚，而且他多半会问「为什么脂肪更顶饱」',
  p:['“Take the fatty acids, because the account is clean. One round gives one acetyl-CoA, one FADH2 and one NADH, and the chain comes back two carbons shorter. Stearic acid has eighteen carbons, so eight rounds give nine acetyl-CoA. No ATP is made in the rounds themselves. All of the energy leaves as reducing power, and the respiratory chain converts it later.”',
     '“And the textbook lets me answer why fat is the better fuel without going outside the book. It prints the complete combustion of glucose at minus 2870 kilojoules per mole and of palmitic acid at minus 11340. Per gram that is sixteen against forty-four. Per mole of oxygen consumed the two are almost the same. So the difference is not the chemistry of burning. It is that a fatty acid chain carries no oxygen of its own, while every carbon of a sugar already has one.”'],
  note:'<span class="pg">p195</span>、<span class="pg">p220</span>、<span class="pg">p135</span>。<b>最后两句是这张卡上最有说服力的地方</b>：同一本书的同一页给了三个数，比值和理由都是自己算出来的。<br>⚠ 除出来的 kJ/g 和每摩尔氧的数<b>书里没有</b>，被追问出处要说清是从书的三个 ΔG°′ 算的。'},
 {tag:'段 4 · 留口子', h:'落到她每周都在做的一个决定：给酵母喂什么碳源',
  p:['“The place this touches my own work every week is the carbon source in the medium. I grow yeast for surface display, and which sugar I feed it is a metabolic decision rather than a detail. Glucose enters at the top of glycolysis. Glycerol enters lower down, as a triose phosphate. Galactose has to be converted first, by epimerisation at carbon four, and the textbook names that enzyme as UDP-glucose-4-epimerase.”',
     '“That is also why display is induced with galactose and not with glucose. Generally, glucose represses the promoter, so the cells are grown on a non-repressing carbon source first and then switched over. That part is not in this textbook. But the reason the switch works at all is on page 172, that galactose and glucose meet at glucose-1-phosphate.”'],
  note:'两个口子都在主场：<b>GAL 诱导</b>接卡 <b>12</b>（lac / trp 操纵子那张，IPTG 和 GAL1 都在上面），<b>C-4 差向异构</b>接卡 <b>06</b> 和卡 <b>x-rxn</b>——那正是同事问 glucose → galactose 时的那一页（<span class="pg">p172</span>）。<br>⚠ <b>葡萄糖阻遏这本书里没有</b>，说的时候要带 generally，别说「书上说」。'}
],

why:{
 rungs:[
  ['为什么四种食物只有一个出口？','因为真正要被氧化的<b>只有一件事</b>：碳氢键上的氢。先把所有食物都拆成<b>同一个两碳的乙酰基</b>，一套酶就够用了，不必为每种食物各养一整条氧化链。书自己的说法是第二阶段<b>收敛成很少几个更小的中间体</b>（<span class="pg">p218</span>）。'],
  ['那为什么合成不能就是分解倒着放？','书直接给了理由：<b>两条路的能量要求根本不同</b>——分解产 ATP，合成耗 ATP（<span class="pg">p218</span>）。分解路上有<b>放能很大的一步</b>，反着走就是要爬同样高的坡。所以细胞<b>绕道</b>：糖异生绕过 pyruvate kinase，改走 oxaloacetate（<span class="pg">p169</span>）。'],
  ['为什么非得绕，不能把产物堆浓一点推回去？','因为 ΔG°′ 很负的一步，<b>平衡常数大到实际上拉不回来</b>。卡 <b>x-bonds</b> 算过这笔：−30 kJ/mol 对应 K 约 2×10⁵。<b>这已经不是生化问题了，是热力学。</b>']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“Below that we are asking why a strongly exergonic step cannot simply be run backwards, and that is thermodynamics rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'How is fat oxidised?',
 mean:'最短的问法，也是最可能的那一个。<b>答案要自带结构</b>：先拆成两半、再说脂肪酸那一半怎么走、再落到共用的引擎。',
 say:'“A fat is first hydrolysed by lipases into glycerol and free fatty acids. The glycerol is oxidised to a triose and joins carbohydrate metabolism. Each fatty acid is activated to a thioester with coenzyme A, at the cost of ATP. It is then degraded by beta-oxidation, which takes two carbons off the carboxyl end at a time as acetyl groups. One round gives one acetyl-CoA, one FADH2 and one NADH. In eukaryotes it happens in the mitochondrial matrix. From acetyl-CoA on it is the citric acid cycle and the respiratory chain, the same as for any other food.”',
 tail:'三段式：<b>先分成甘油和脂肪酸</b>（这一刀最容易被漏）· <b>β-氧化的定义和一轮的产出</b> · <b>交回给卡 24 和卡 25</b>。<span class="pg">p193</span> <span class="pg">p194</span> <span class="pg">p220</span>'},

{q:'How is a fatty acid made?',
 mean:'他要的是<b>三条差别</b>，不是六个步骤的名字。书自己列了那三条。',
 say:'“It starts from acetyl-CoA, and the textbook says the process is formally similar to degradation but differs in three essential ways. First, it begins by carboxylating acetyl-CoA to malonyl-CoA, using ATP and the coenzyme biotin. Second, the hydrogen donor is NADPH, whereas oxidation produced NADH. Third, it is separated from degradation in the cell. Degradation is in the mitochondria. Synthesis runs on a multienzyme complex in the cytoplasm, where every intermediate stays bound and only the finished chain is released.”',
 tail:'<span class="pg">p220</span>。<b>被追问总账就给书 <span class="pg">p190</span> 的框图</b>：8 acetyl-CoA ＋ 7 ATP ＋ 14 NADPH → 棕榈酸。7 和 14 怎么来的在速背第 13 点。'},

{q:'How are amino acids broken down?',
 mean:'书把它写成<b>三个阶段</b>，照书的三段答，比自己组织安全得多。',
 say:'“The textbook divides it into three stages. First, a change at the alpha carbon: the amino group is removed, most often by transamination onto a 2-oxo acid, or by oxidative deamination. Second, detoxification of the ammonia, which in land animals means the urea cycle in the liver. Third, degradation of the carbon skeleton, which ends in the citric acid cycle. The first stage is almost the same for all amino acids. It is the second and third where they differ.”',
 tail:'<span class="pg">p118</span> 原话的三条。<b>「第一阶段几乎所有氨基酸都一样，差别在后面」这一句是加分的</b>，它说明你知道这题的结构而不只是名字。二十个名字在卡 <b>aa</b>。'},

{q:'Why does fat give more energy than sugar?',
 mean:'他要的是<b>理由</b>，不是「因为脂肪热量高」。<b>用书同一页上的三个数把它算给他看。</b>',
 say:'“Because a fatty acid chain is more reduced and carries no oxygen of its own. The textbook prints the complete combustion of both on one page. Glucose gives minus 2870 kilojoules per mole and palmitic acid minus 11340. Per gram that is about sixteen against about forty-four. But per mole of oxygen consumed they are almost identical, around 480 and 490. So the cell gets the same out of each oxygen. A fatty acid simply buys more oxygens per gram, because every carbon of a sugar already carries one.”',
 tail:'<span class="pg">p135</span>。⚠ <b>按克的数和按氧的数书里没有</b>，是从书的两个 ΔG°′ 算的，被问出处要说清。食品标签上的 9 和 4 是通用数，别说成书上的。'},

{q:'Where does the nitrogen of an amino acid go?',
 mean:'三步，一步都不能跳：<b>集中 → 放出氨 → 打包</b>。',
 say:'“It is collected, released and then packaged. Transamination moves the amino groups of the individual amino acids onto one of them, usually glutamate. Glutamate is then oxidatively deaminated by glutamate dehydrogenase, and free ammonia comes off. Ammonia is toxic, so it has to leave. Aquatic animals let it diffuse out through the gills. Land animals convert it in the liver to urea, by the urea cycle, which is also called the ornithine cycle. Birds and reptiles make uric acid instead, and it is excreted as a crystal suspension because it dissolves badly.”',
 tail:'<span class="pg">p120</span> <span class="pg">p123</span>。<b>三类动物是书自己列的</b>，给全比只说尿素强很多，而且尿酸那条顺带解释了鸟粪。'},

{q:'What does the body burn when it is starving?',
 mean:'他要的是<b>顺序</b>和<b>为什么是这个顺序</b>。答案的关键在于：<b>糖不能从脂肪来，只能从蛋白质来。</b>',
 say:'“Mostly fat, but not only fat. The textbook says that when acetyl-CoA floods the cell, as in diabetes or starvation or on a fat-rich diet, more is made than the citric acid cycle can take, and the excess becomes acetoacetate and acetone. Those are the ketone bodies. At the same time glucose still has to come from somewhere, and it cannot come from fatty acids. So it comes from the glucogenic amino acids. The textbook says giving those to a starving organism leads to gluconeogenesis and to glycogen formation, which means body protein is broken down too.”',
 tail:'<span class="pg">p195</span> <span class="pg">p125</span> <span class="pg">p220</span>。<b>「所以饿的时候也在拆肌肉」这句话是这道题的落点</b>，而它完全是从书的三处推出来的，不用外部知识。'},

{q:'Why can fat not be turned into glucose in animals?',
 mean:'书给的理由只有一句。<b>给完那一句，立刻自己补上两个例外</b>，否则他会拿例外来挑。',
 say:'“Because the step back is missing. The textbook says the animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for sugar synthesis, and therefore cannot make sugars from fats. Two qualifications belong with that. The glycerol of a fat can become glucose, because it enters as a triose phosphate. And a fatty acid with an odd number of carbons leaves propionyl-CoA at the end, which is extended to succinyl-CoA and joins the cycle. So the accurate statement is that the carbons of a fatty acid cannot become sugar.”',
 tail:'<span class="pg">p220</span> <span class="pg">p195</span>。<b>主动给出这两个例外是加分的</b>：它证明你知道那句话的边界在哪，而不是背下来一句口号。'},

{q:'Why does your breath smell of acetone if you eat no carbohydrate?', odd:1,
 mean:'问的是<b>酮体</b>，而这正好是书自己举的三个场景之一。',
 say:'“Because acetyl-CoA is being made faster than the citric acid cycle can use it. The textbook gives exactly these conditions: diabetes, starvation, or a diet rich in fat. The excess goes in the liver to beta-hydroxy-beta-methylglutaryl-CoA and then to acetoacetate, which can be reduced to beta-hydroxybutyrate or decarboxylated non-enzymatically to acetone. Those three are the ketone bodies. Acetone is volatile, so it is smelled on the breath, and if this goes on it acidifies the blood.”',
 tail:'<span class="pg">p195</span> <span class="pg">p197</span>。⚠ <b>acetone 那一步书特意写了是「非酶的」</b>——这个细节很好用，说明你读的是这本书。'},

{q:'Why do you get fat from eating too much bread?', odd:1,
 mean:'问的是<b>单向阀</b>，书 <span class="pg">p220</span> 一句话答完。',
 say:'“Because both sugars and fats come down to acetyl-CoA, and when the cell’s energy demand is low acetyl-CoA is used mainly for making fatty acids and fat. The textbook puts it directly: with an excess supply of either carbohydrate or fat, the nutrients are converted into fat and stored. The traffic is one-way, because the organism cannot turn acetyl-CoA back into pyruvate.”',
 tail:'<b>同一句话同时答了「为什么减肥难」</b>：存进去的路是通的，回来的路被堵着。'},

{q:'Why do you still need to eat protein if you eat enough of everything else?', odd:1,
 mean:'听起来像营养学，其实书 <span class="pg">p115</span> 第一段就写着答案，而且写得很硬。',
 say:'“Because protein is not only a fuel. The textbook says amino acids are, in the cells of heterotrophic organisms, the exclusive source of nitrogen, of sulfur, of aromatic rings and of branched aliphatic structures. It then says that proteins are therefore an essential component of food which cannot be replaced by an increased intake of any other type of nutrient. So what you cannot get elsewhere is not the energy. It is those four things.”',
 tail:'<span class="pg">p115</span> 开篇。<b>「四样东西」这个说法是书自己的</b>，比泛泛说「必需氨基酸」具体得多，而且书在 <span class="pg">p127</span> 只给了 Phe 和 Tyr 一个必需性的实例。'},

{q:'Why do birds not urinate?', odd:1,
 mean:'问的还是氮的处置，答案在书的同一句里。',
 say:'“Because they do not make urea. The textbook says that in egg-laying animals, birds and reptiles, embryonic development in a closed system led to a different way of eliminating ammonia. They convert it to uric acid, which dissolves badly and is excreted as a suspension of crystals rather than in solution. That is the white part of what a bird leaves behind.”',
 tail:'<span class="pg">p123</span>。<b>书给的理由是「蛋是个封闭系统」</b>，这是四块地基里的<b>进化</b>那一块，说出口很稳。'}
],

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p133_obr62_three_phases.jpg',
  t:'漏斗本身 —— 三个阶段，书自己画的（书 Obr. 6.2）',
  cap:'<b>这是这张卡的主图，速背第 3 点那三个阶段就是照着它说的。</b>'
    + '图分三层，左边一栏标着<b>阶段一、阶段二、阶段三</b>；进口在最上面一排三个框，<b>从左到右是脂肪 · 多糖 · 蛋白质</b>。'
    + '<br><br><b>画的顺序（五步）</b>:'
    + '<br>① 最上面横着画<b>三个框</b>：脂肪 · 多糖 · 蛋白质。每个框下面一根双箭头接到第二排：'
    + '<b>脂肪酸和甘油</b> · <b>己糖和戊糖</b> · <b>氨基酸</b>。<b>这一层就是阶段一——大分子拆成建筑块。</b>'
    + '<br>② 中间画一条竖线往下走：<b>甘油醛-3-磷酸 → 磷酸烯醇丙酮酸 → 丙酮酸 → acetyl-CoA</b>。<b>这是阶段二的主干。</b>'
    + '<br>③ 从左边的脂肪酸、右边的氨基酸各拉<b>几条斜线汇到同一个框</b>：<b>acetyl-CoA</b>。'
    + '<b>三条进口在这里并成一条，这一笔就是漏斗。</b>'
    + '<br>④ 下面画柠檬酸循环的环：<b>柠檬酸 → 异柠檬酸 → 2-氧代戊二酸 → 琥珀酸 → 延胡索酸 → 苹果酸 → 草酰乙酸</b>，回到 acetyl-CoA。'
    + '<br>⑤ 环的下面画两个出口框：<b>H₂O</b> 和 <b>CO₂</b>。<b>这是阶段三。</b>'
    + '<br><br><b>边画边说的三句</b>：“Degradation of the bulk nutrients runs in <b>three phases</b>. In the first, large molecules are cut into their building blocks: polysaccharides into monosaccharides, lipids into fatty acids and glycerol, proteins into amino acids.”'
    + '<br>“In the second phase those building blocks are converted into a <b>small number of still smaller intermediates</b>, and almost everything ends at <b>acetyl coenzyme A</b>. That is the neck of the funnel: a few hundred different molecules go in and essentially one comes out.”'
    + '<br>“In the third phase the products of the second are oxidised all the way to <b>carbon dioxide and water</b>, and that is the citrate cycle together with the respiratory chain.”'
    + '<br><br>⚠ <b>看一眼右边氨基酸那几条线</b>：有几条汇到 acetyl-CoA，<b>另外几条越过它一直往第三阶段走</b>。'
    + '<b>所以不能说「氨基酸都以 acetyl-CoA 进循环」</b>——这一条卡 <b>24</b> 上纠正过，而<b>书自己的图就是证据</b>。'
    + '<br>⚠ 最上面那三个框和左边那一栏是捷克文，意思就是上面写的；<b>框里的代谢物名字本来就是国际通用的拼法，直接念</b>。',
  src2:'Biochemie, Obr. 6.2, p133 · 280 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p219_obr101_acetylcoa_hub.jpg',
  t:'一个 acetyl-CoA，三进三出 —— 漏斗的浓缩版（书 Obr. 10.1）',
  cap:'<b>这张也是「画」，而且它只要十五秒</b>。上一张画的是<b>路</b>，这一张画的是<b>路口</b>；'
    + '他问「代谢地图长什么样」，<b>两张一起画，四十秒说完，然后就停</b>。'
    + '<br><br><b>画的顺序（四步）</b>:'
    + '<br>① 正中间画一个椭圆，里面写 <b>Acetyl-CoA</b>。'
    + '<br>② 上面一排三个词（书上那三个词从左到右就是<b>糖 · 脂 · 蛋白质</b>），各往下一根箭头到中间那一排：'
    + '<b>丙酮酸 · 脂肪酸 · 氨基酸</b>，再各一根斜箭头<b>指进</b>椭圆。'
    + '<br>③ 椭圆下面三根箭头<b>指出去</b>：左边<b>柠檬酸循环 ＋ 呼吸链</b>、中间<b>脂</b>、右边<b>异戊二烯类</b>。'
    + '<br>④ 画完点一句：<b>进来的三条全是分解；出去的三条里只有第一条是分解，另外两条是合成。</b>'
    + '<b>同一个分子，两个方向都从这里走。</b>'
    + '<br><br><b>边画边说的两句</b>：“Acetyl-CoA is the clearest example of a metabolic <b>pool</b>. It is produced by the degradation of <b>sugars, lipids and proteins</b> alike, and it is drawn off again for the synthesis of <b>fatty acids and lipids</b>, and of <b>isoprenoids and steroids</b>, or oxidised in the <b>citrate cycle</b>.”'
    + '<br>“The textbook’s point about a pool is that the <b>concentration can be low while the turnover is very fast</b>. On the same page it calculates that a human body makes about <b>seventy kilograms of ATP in twenty-four hours</b>, and the amount present at any moment is nothing like that.”'
    + '<br><br>⚠ 这张图的图注把 Acetyl 少印了一个字母（印成 Aceyl），<b>不用管</b>。',
  src2:'Biochemie, Obr. 10.1, p219 · 280 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p115_obr51_protein_aa_metabolism.jpg',
  t:'氮为什么不走漏斗 —— 它自己有一条路（书 Obr. 5.1）',
  cap:'<b>这张是「认」，它是速背第 7 点唯一的书证</b>，也是这张卡上<b>唯一一张把「碳走一条、氮走另一条」画出来的图</b>。'
    + '<br>图被一根竖条分成两半：<b>左边是体外，右边是体内</b>。'
    + '<b>左上角那个椭圆是食物里的蛋白</b>，一根箭头穿过竖条进到体内，落在正中间那个椭圆——<b>游离氨基酸池</b>。'
    + '<b>正上方那个椭圆是氨基酸的生物合成</b>，也往这个池子里加。'
    + '<br><b>池子有四个出口</b>：'
    + '<br>· 往右上 → <b>蛋白质合成</b>（用掉，不拆）。'
    + '<br>· 往右下 → <b>碳骨架</b> → 再往右下那个框 → <b>取得能量</b>。<b>这一条才是进漏斗的那一条。</b>'
    + '<br>· 往正下 → 中间那个框，里面竖着列了一串：<b>核苷酸 · 卟啉 · 胺类 · 黑色素 · 肌酐 · 激素等等</b>。'
    + '<br>· 往左下 → 小椭圆 <b>NH₃</b> → 方框 <b>尿素</b> → 穿过竖条 → <b>排出体外</b>。'
    + '<br><br><b>看到图要说的那一段</b>：“In a heterotroph the amino acid pool is the <b>only source</b> of nitrogen, of sulfur, of aromatic rings and of branched aliphatic structures, so it is drawn on for far more than energy. The <b>carbon skeleton</b> goes into the funnel and is oxidised in the citrate cycle. The <b>nitrogen leaves on its own route</b>: it is stripped off as <b>ammonia</b>, built into <b>urea</b>, and excreted.”'
    + '<br>“That is why proteins cannot be replaced in the diet by simply eating more of something else. Fat and carbohydrate can substitute for each other as fuel. <b>Nothing substitutes for the nitrogen.</b>”'
    + '<br><br><b>这张图顺手把氨基酸的另外两个去处也给了</b>：回去<b>合成蛋白</b>，或者去做那一串含氮的小分子。'
    + '<b>被问「氨基酸除了烧掉还能干什么」，指着中间那个框念就行。</b>'
    + '<br>⚠ 图里的框和椭圆是捷克文，意思就是上面写的位置对应的那几个词。',
  src2:'Biochemie, Obr. 5.1, p115 · 280 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p196_beta_oxidation_four_steps.jpg',
  t:'一轮 β-氧化的四步 —— 速背第 9 点那笔账的来源（书 p196）',
  cap:'<b>这张是「认」，它就是速背第 9 点「一轮的账」印在书上的样子。</b>'
    + '左边一栏是每一步的<b>反应类型</b>，右边一栏是酶名，中间是进出的辅酶。'
    + '<br><b>四步从上到下</b>：<b>脱氢</b>（氢交给 <b>FAD</b>）→ <b>加水</b>（加一个 <b>H₂O</b>，β 碳上出现 –OH）→ '
    + '<b>再脱氢</b>（氢交给 <b>NAD⁺</b>，–OH 变 =O）→ <b>硫解</b>（<b>CoASH</b> 进来，切下一个 <b>acetyl-CoA</b>）。'
    + '最下面那一栏标着「重复 A、B、C、D」，把一条十六碳的链一路切到底，<b>编号 1 到 9</b>。'
    + '<br><br><b>要说的那一句</b>：“One round of beta-oxidation is <b>oxidise, hydrate, oxidise again, then cut</b>. It yields <b>one FADH two, one NADH and one acetyl-CoA</b>, and it shortens the chain by <b>two carbons</b>. Palmitate has sixteen carbons, so it takes <b>seven</b> rounds to give <b>eight</b> acetyl-CoA: the last round produces two at once.”'
    + '<br><br>⚠ <b>勘误第 6 条。</b>最后一行的左栏写着<b>硫解</b>，右栏印的酶名却是 <b>β-ketokinase</b>。'
    + '<b>kinase 搬的是磷酸，而这一行进来的是 CoASH，一个磷酸都没有</b>，所以它应该叫 <b>thiolase</b>。已回 280 dpi 原图确认。'
    + '说的时候<b>指书自己的图</b>，不要说「别的教材说」。'
    + '<br>合成那一半的总账在下一张；<b>四个反应类型怎么分</b>在横向卡 <b>反应类型</b>，同一张图两边都用。',
  src2:'Biochemie, p196（§8.4 β-氧化的四步）· 280 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p190_palmitate_balance.jpg',
  t:'合成那一半的总账 —— 书自己的框图（书 p190）',
  cap:'<b>这张是「认」，它就是速背最后那一格说的「被追问总账就给书 p190 的框图」。</b>'
    + '<br>一根竖箭头从上到下：进口 <b>8× acetyl-SCoA</b>，出口 <b>棕榈酸</b>；'
    + '左边进来 <b>7× ATP</b>、出去 <b>7× ADP ＋ 7× P<sub>i</sub></b> 和 <b>8× HSCoA</b>；'
    + '右边进来 <b>14× NADPH</b>、出去 <b>14× NADP⁺</b>；中间那个方框写着<b>七个酶 ＋ ACP-SH</b>。'
    + '<br><br><b>看到图要说的那一段</b>：“Fatty acid synthesis is <b>not</b> beta-oxidation run backwards. The balance is <b>eight acetyl-CoA, seven ATP and fourteen NADPH</b> to one palmitate. Seven, because the chain is built in <b>seven</b> condensation steps, each one preceded by carboxylating an acetyl group to malonyl at the cost of one ATP. Fourteen, because each of those seven steps is reduced <b>twice</b>.”'
    + '<br>“The other two differences are just as sharp. The reductant is <b>NADPH</b>, not NADH, and the whole thing happens in the <b>cytosol</b> on a multienzyme complex whose core protein is <b>A C P</b>, the acyl carrier protein, while beta-oxidation happens in the <b>mitochondrial matrix</b>.”'
    + '<br><br><b>NADH 和 NADPH 的分工，一句通则</b>：<b>NADH 送去呼吸链换 ATP，NADPH 送去合成当还原剂。</b>'
    + '<b>这张图一眼就能看见——进来的全是 NADPH，一个 NADH 都没有。</b>'
    + '<br>⚠ 中间那个方框里的词是捷克文的「七个酶」，加号后面那个 <b>ACP-SH</b> 本来就是英文缩写。'
    + '<b>书里没有把 β-氧化和这一张并排画成对照图</b>，两张要自己摆在一起看。',
  src2:'Biochemie, p190（§8.4 脂肪酸生物合成的总反应）· 300 dpi 原图裁切，未修改'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这张卡自己用到的词，他会一个个拎出来问。<b>其中几个在整套卡里从来没有正面定义过</b>，所以必须在这里给。', items:[
{r:'高', q:'What is beta-oxidation?',
    ez:'“Beta oxidation is the degradation of a fatty acid. It removes two carbon units. Those leave as acetyl groups. They come off the carboxyl end. It is named after the beta carbon. That is the second one along from the carboxyl. It is the one that gets oxidised. One cycle shortens the chain by two carbons. It has four steps. Dehydrogenation by F A D. Hydration of the double bond. Dehydrogenation by N A D plus. And thiolytic cleavage by coenzyme A. In eukaryotes it sits in the mitochondrial matrix. The textbook says the matrix holds all four enzymes.”',
    ezcn:'<b>β-氧化 ＝ 从羧基端一次拿掉两个碳（以乙酰基的形式）来分解脂肪酸。</b><b>名字来自 β 碳</b>（<b>从羧基数过去第二个碳，就是被氧化的那一个</b>）。<b>一轮把链缩短两个碳，四步</b>：<b>FAD 脱氢 → 双键加水 → NAD⁺ 脱氢 → 辅酶 A 硫解</b>。<b>真核里它在线粒体基质，书说一轮所需的四个酶全在基质中。</b>',
 en:'“Beta-oxidation is the degradation of a fatty acid by removing two-carbon units, as acetyl groups, from the carboxyl end of the molecule. It is named after the beta carbon, the second one along from the carboxyl, which is the one that gets oxidised. One cycle shortens the chain by two carbons and has four steps: dehydrogenation by FAD, hydration of the double bond, dehydrogenation by NAD-plus, and thiolytic cleavage by coenzyme A. In eukaryotes it sits in the mitochondrial matrix, which the textbook says holds all four enzymes needed for one cycle.”',
 cn:'<b>这个词整套卡里没有人正面定义过</b>，但它在四张卡上出现，所以这一条必须背熟。<span class="pg">p195</span> <span class="pg">p196</span><br><b>四步的名字按 x-rxn 那张卡的家族报</b>：两次氧化 · 一次加水 · 一次硫解。<b>加水那一步是 hydration 不是 hydrolysis</b>——分子数没变，这是 x-rxn 上专门分过的一对。',
 good:'<b>白拿的加分</b>：前三步跟柠檬酸循环最后三步是同一套化学，顺序都一样（succinate → fumarate → malate → oxaloacetate）。“The first three steps are the same chemistry as the last three of the citric acid cycle, in the same order. Beta-oxidation then adds a thiolytic cleavage to take the two carbons off.” ⚠ <b>这个观察书里没有</b>，说的时候别挂到书上。'},
{r:'高', q:'Why does a fatty acid have to be activated first, and what does that cost?',
    ez:'“Because a free fatty acid cannot enter any pathway as it is. The textbook says free fatty acids must be activated. That holds for the anabolic and the catabolic routes alike. Activation means conversion into a thioester. The thioester is with coenzyme A. It happens in two steps. It goes through an acyl adenylate intermediate. The enzyme is a thiokinase. A T P goes in. A M P and pyrophosphate come out. The textbook counts that as one A T P. Strictly it is two high energy bonds. Regenerating A M P to A T P costs another one.”',
    ezcn:'因为<b>游离脂肪酸就那样是进不了任何代谢通路的</b>。书说：<b>无论合成还是分解路线，游离脂肪酸都必须被活化——办法是变成跟辅酶 A 的硫酯</b>。<b>分两步，经过一个酰基腺苷酸中间物，酶是硫激酶</b>；<b>ATP 进去，AMP ＋ 焦磷酸出来</b>。⚠ <b>书把它算作一个 ATP，严格说是两根高能键——因为把 AMP 再变回 ATP 还要花一根。</b>',
 en:'“Because a free fatty acid cannot enter any metabolic pathway as it is. The textbook says free fatty acids must be activated for both the anabolic and the catabolic routes, by conversion into a thioester with coenzyme A. It happens in two steps through an acyl adenylate intermediate, and the enzyme is a thiokinase. ATP goes in and AMP and pyrophosphate come out. The textbook counts that as one ATP. Strictly it is two high-energy bonds, because regenerating AMP to ATP costs another one.”',
 cn:'<span class="pg">p194</span>、<span class="pg">p220</span>。<b>硫酯为什么活泼在卡 x-bonds</b>：硫阻止了 O-酯的共振稳定，所以羰基一直保持活泼。<br><b>「书说 1、严格说 2」这个处理要给出理由，不然听起来像在跟书对着干</b>：书自己在尿素循环那里就是按 2 算的（<span class="pg">p124</span>：一个 ATP 变成 AMP，再生要 2 个，所以总账记 4）。<b>用书的一处解释书的另一处，永远比引外部教材稳。</b>'},
{r:'中', q:'What are glucogenic and ketogenic amino acids?',
 en:'“It is a classification by what the carbon skeleton finally becomes. Glucogenic amino acids end as pyruvate, and the textbook says that giving them to a starving organism leads to gluconeogenesis and to glycogen formation. Ketogenic ones are degraded all the way to acetyl-CoA, which under the same conditions exceeds the capacity of the citric acid cycle and gives ketone bodies. The textbook says leucine is the only purely ketogenic one, and that isoleucine, phenylalanine, tryptophan and tyrosine are both.”',
 cn:'<span class="pg">p125</span>。<b>判据是「终产物是 pyruvate 还是 acetyl-CoA」</b>，不是氨基酸的结构——说出这一句比背名单值钱。<br>⚠ <b>Lehninger 把 lysine 也算成纯生酮</b>，这本书没有。要说就标明是 Lehninger 的。名单在卡 <b>aa</b>。'},
{r:'中', q:'What is gluconeogenesis, and where does it differ from glycolysis?',
 en:'“Gluconeogenesis is the synthesis of glucose from non-sugar precursors, and the textbook describes it as a reversal of glycolysis with three places changed. The problem step is pyruvate kinase, because making pyruvate and ATP from phosphoenolpyruvate is practically irreversible. So the cell detours: pyruvate is carboxylated to oxaloacetate, which is then phosphorylated using GTP rather than ATP. At the end the two hexose phosphorylations are also irreversible, so fructose-1,6-bisphosphate and glucose-6-phosphate are hydrolysed by other enzymes instead. The textbook adds that muscle lacks the main enzymes, so lactate travels to the liver.”',
 cn:'<span class="pg">p169</span>、<span class="pg">p170</span>、<span class="pg">p219</span>。<b>这条是「合成不是倒放」最具体的证据</b>：整条路只有三处不同，而那三处正好是分解时放能最大的三步。<br>书还给了代价：<b>造一个三碳糖要三个高能磷酸</b>（<span class="pg">p170</span>）。'},
{r:'中', q:'What are ketone bodies?',
 en:'“They are what the liver makes when acetyl-CoA is produced faster than the citric acid cycle can use it. The textbook lists the conditions: diabetes, starvation, or a diet rich in fat. The excess goes to beta-hydroxy-beta-methylglutaryl-CoA, and part of that becomes acetoacetate. Acetoacetate can be reduced enzymatically to beta-hydroxybutyrate, or decarboxylated non-enzymatically to acetone. If these routes are abnormally active the products appear in the blood, the blood pH falls, and acetone is smelled on the breath.”',
 cn:'<span class="pg">p195</span>。书用的词直译是「酮性物质」，英文说 <b>ketone bodies</b>。<b>同一段还说这个状态持续下去会昏迷和死亡</b>——考场上给到「血 pH 下降」就够，不必往临床走。'},
{r:'中', q:'What is malonyl-CoA and what is ACP?',
 en:'“Malonyl-CoA is acetyl-CoA carrying one extra carboxyl group. It is made by acetyl-CoA carboxylase, which needs ATP and the coenzyme biotin. The textbook calls it the necessary activation of the methyl group of acetyl-CoA for condensation. ACP is the acyl carrier protein, the core of the multienzyme complex that builds the chain. It has two different sulfhydryl groups. One comes from a cysteine in its chain and the other is part of a phosphopantetheine arm, which is also a part of coenzyme A.”',
 cn:'<span class="pg">p188</span>。<b>那个 CO₂ 在缩合时又掉下来了</b>，所以它是租来的把手不是加上去的碳——理由在速背第 13 点的公式块里。<br>⚠ <b>malonyl-CoA 和 ACP 在整套卡里只有中文解释过</b>，所以这一条的英文要背下来。'},
{r:'中', q:'What is the urea cycle, and what does it cost?',
 en:'“It is how land animals get rid of ammonia, and it is also called the ornithine cycle. Carbamoyl phosphate is made first in the mitochondrial matrix, strongly endergonic. It reacts with ornithine to give citrulline, which moves out into the cytoplasm. There citrulline reacts with aspartate to give argininosuccinate, so aspartate donates the second nitrogen. A lyase then splits off fumarate and leaves arginine, and arginase hydrolyses urea off arginine and regenerates ornithine. The textbook stresses that unlike the citric acid cycle this one is not in a single organelle.”',
 cn:'<span class="pg">p123</span>、<span class="pg">p124</span>。四个酶 · 两个区室 · 两个氮的来源不同（<b>一个来自氨，一个来自 aspartate</b>）。<br><br><b>=== 公式和推导 ===</b><br><b>书印的总反应</b>（<span class="pg">p124</span>）：<code>2 NH₄⁺ ＋ HCO₃⁻ ＋ 3 ATP ＋ H₂O → 尿素 ＋ 2 ADP ＋ 4 Pᵢ ＋ AMP ＋ 2 H⁺</code><br><b>为什么书说 4 个 ATP，方程式里却只有 3 个</b>：① 合成 carbamoyl phosphate 花 <b>2 个 ATP</b>，各变成 ADP；② 合成 argininosuccinate 花 <b>1 个 ATP</b>，但它变成的是 <b>AMP</b>，把 AMP 补回 ATP 还要再花一个。<code>2 ＋ 1 ＋ 1 = 4 个高能键</code>，而分子数只有 3。<b>这笔账书自己写出来了，不用你推。</b><br><br><b>=== 一句话理解 ===</b><br><b>四种食物里，只有氮的垃圾要花钱扔。</b>碳烧完变成 CO₂，自己就扩散走了，一分钱不花；氮变成的氨有毒，必须先打包，每包付四个高能键。<b>所以「氮为什么不走那个漏斗」的真正答案不是化学，是毒性。</b>这也是氨基酸成为三种食物里唯一<b>要先拆成两半</b>的那一种的原因。'},
{r:'中', q:'What is a lipase, and how does a fat get taken apart in the first place?',
 en:'“A lipase is a hydrolase that breaks the ester bonds between the fatty acids and the glycerol. The textbook writes the reaction as triacylglycerol plus water giving free fatty acids and glycerol, and it puts the lipases in the cytoplasm. Triacylglycerols, it says, are the main storage substance in organisms. Complex lipids are taken apart by their own enzymes, the phospholipases, of which the textbook distinguishes four types by where on the molecule they cut.”',
 cn:'<span class="pg">p193</span>。<b>这一刀常被跳过去</b>，但它是三个阶段里的第一阶段，而且它解释了为什么脂肪有两条命运不同的臂：<b>甘油那一臂能变糖，脂肪酸那三臂不能</b>。脂的分类在卡 <b>23</b>。'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个东西挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'高', q:'Beta-oxidation and fatty acid synthesis look like the same four steps run backwards. Are they?',
    ez:'“No. The textbook gives three reasons. First, synthesis carboxylates acetyl coenzyme A. It makes malonyl coenzyme A. Degradation never does that. Second, synthesis reduces with N A D P H. Degradation oxidises onto N A D plus and F A D. Third, they are in different compartments. Degradation is in the mitochondrial matrix. Synthesis is on a multienzyme complex in the cytoplasm. There the intermediates never leave the enzymes. Behind all three is one general rule. Catabolic and anabolic routes are not reversible into each other. Their energy requirements differ fundamentally.”',
    ezcn:'<b>不是，书给了三条理由。</b><b>①</b> 合成先把<b>乙酰辅酶 A 羧化成丙二酰辅酶 A</b>，<b>分解从来不做这一步</b>。<b>②</b> 合成用 <b>NADPH 还原</b>，分解是<b>氧化到 NAD⁺ 和 FAD 上</b>。<b>③</b> 两者在<b>不同区室</b>：<b>分解在线粒体基质；合成在胞质的一个多酶复合体上，中间物从不离开酶</b>。<b>三条背后是同一条通则：分解与合成路线不能互相倒过来，因为它们的能量需求有根本差别。</b>',
 en:'“No, and the textbook says why in three points. Synthesis first carboxylates acetyl-CoA to malonyl-CoA, which degradation never does. Synthesis reduces with NADPH while degradation oxidises onto NAD-plus and FAD. And they are in different compartments, degradation in the mitochondrial matrix and synthesis on a multienzyme complex in the cytoplasm, where the intermediates never leave the enzymes. Behind all three is the general rule the textbook gives: catabolic and anabolic routes are not reversible into each other, because their energy requirements differ fundamentally.”',
 cn:'<span class="pg">p220</span>、<span class="pg">p218</span>。<b>判据一句话：看还原剂。NADPH 就是在造，NADH 和 FADH₂ 就是在拆。</b><br>还有一个能当场分开它们的数：<b>拆的时候两碳砖白掉下来，造的时候每块砖先付一个 ATP</b>（棕榈酸 7 个 ATP，<span class="pg">p190</span>）。'},
{r:'高', q:'Glycogen is broken down two different ways. What is the difference and why does it matter?',
    ez:'“It depends on where. In the digestive tract polysaccharides are hydrolysed. The amylases do it. The products are maltose and some free glucose. Inside the cell it is not hydrolysis. It is phosphorolysis. Phosphorylase takes the glucose residue off a non reducing end. It hands it to phosphoric acid. So the product is glucose one phosphate. The textbook says this is energetically favourable for the cell. It saves the first phosphorylation. That is the one before glucose enters glycolysis.”',
    ezcn:'<b>看在哪儿。</b><b>消化道里是水解</b>（<b>淀粉酶干的，产物是麦芽糖和一些游离葡萄糖</b>）。<b>细胞内部不是水解，是磷酸解</b>：<b>磷酸化酶从非还原端把葡萄糖残基取下来交给磷酸，产物是葡萄糖-1-磷酸</b>。<b>书说这对细胞在能量上有利：它省掉了葡萄糖进糖酵解之前的第一次磷酸化。</b>',
 en:'“It depends on where. In the digestive tract polysaccharides are hydrolysed, by the amylases, and the products are maltose and some free glucose. Inside the cell it is not hydrolysis but phosphorolysis. Phosphorylase takes the glucose residue off the non-reducing end and hands it to phosphoric acid, so the product is glucose-1-phosphate. The textbook says this is energetically favourable for the cell, because it saves the first phosphorylation before glucose enters glycolysis or the pentose phosphate route.”',
 cn:'<span class="pg">p172</span>、<span class="pg">p173</span>、<span class="pg">p174</span>。<b>判据是「谁来砍这一刀」</b>：水 = 水解，磷酸 = 磷酸解。这一对在卡 <b>x-rxn</b> 也有一条。<br><b>书还加了一句很诚实的话</b>：整条「葡萄糖 → 糖原 → 再拆开」的路其实<b>更费能量</b>，因为合成糖原要两次磷酸化，所以磷酸解<b>只保住了投入的不到一半</b>（<span class="pg">p174</span>）。'},
{r:'中', q:'NADH and NADPH differ by one phosphate. Why does the cell keep two of them?',
 en:'“Because they do two different jobs and the cell needs to control them separately. NADH carries the hydrogen from catabolic oxidations to the respiratory chain, where it is turned into ATP. NADPH is reducing power kept for synthesis. The textbook says it directly in the pentose phosphate section: the NADPH formed there is not oxidised in the respiratory chain but is used for synthetic reactions. And the fatty acid chapter says the hydrogen donor for synthesis is NADPH while the oxidation gave NADH.”',
 cn:'<span class="pg">p219</span>、<span class="pg">p220</span>、<span class="pg">p161</span>。<b>这是「一个磷酸买来一整套独立记账」的经典例子</b>，而且它正是「合成和分解要能被分开调控」那条通则在辅酶层面的实现。'},
{r:'中', q:'Why does the cell have two different routes to the pentose phosphates?',
 en:'“Because it does not always need the same two products. The oxidative route starts by dehydrogenating glucose-6-phosphate and makes both NADPH and ribose-5-phosphate. The non-oxidative route starts by moving a two-carbon fragment from fructose-6-phosphate onto glyceraldehyde-3-phosphate, and it makes pentoses without any NADPH. The textbook says the second one is used when much more ribose-5-phosphate is needed than NADPH. And because all its steps are reversible, it can also run the other way and turn three pentoses back into two hexoses and a triose.”',
 cn:'<span class="pg">p161</span>–<span class="pg">p163</span> §7.7，节标题就叫「两条到戊糖磷酸的路」，<b>所以这多半就是他的问法</b>。<br><b>这一条把漏斗补完整了</b>：糖除了往下走去烧，还有一条横着走的路——去<b>换还原力和核糖</b>。书说这条路产的 NADPH 正是脂肪酸和胆固醇合成要用的（<span class="pg">p163</span>）。'},
{r:'中', q:'Transamination and deamination sound alike. Which is which?',
 en:'“Transamination moves the amino group from an amino acid onto the oxo group of a 2-oxo acid, so the nitrogen changes owner but no ammonia appears. The usual acceptors the textbook names are pyruvate, 2-oxoglutarate and oxaloacetate. Deamination actually takes the nitrogen off as ammonia. The most important case is the oxidative deamination of glutamate by glutamate dehydrogenase. So the cell transaminates to collect the nitrogen onto glutamate, and deaminates once, on glutamate, to release it.”',
 cn:'<span class="pg">p120</span>、<span class="pg">p119</span>。<b>判据一句话：有没有氨跑出来。</b>转氨没有，脱氨有。<br><b>书自己解释了为什么必须两样都有</b>：光靠转氨，氨基会在氨基酸之间打转，永远出不去；<b>出路就是把转氨和 glutamate 的氧化脱氢配成一对</b>（<span class="pg">p121</span>）。这句话说出口很漂亮。反应类型的名字在卡 <b>x-rxn</b>。'}
]},

{g:'为什么类', gn:'这一族的「为什么」几乎都落在同一处：<b>两条路的能量要求不同</b>，再往下就是热力学。', items:[
{r:'高', q:'Why do all three foods converge on one molecule?',
    ez:'“Because there is really only one thing to oxidise. That is the hydrogen on carbon hydrogen bonds. Suppose everything is first cut down to the same two carbon acetyl group. Then one set of enzymes can do the oxidation for all of it. The textbook describes the second phase that way. It converts the products into a small number of smaller intermediates. It then names the key ones. Acetyl coenzyme A, pyruvate, two oxoglutarate, the reduced nicotinamide coenzymes and A T P. Convergence is what makes one citric acid cycle enough. One respiratory chain is then enough too.”',
    ezcn:'因为<b>真正要氧化的东西其实只有一样：碳氢键上的氢</b>。<b>如果先把一切都切成同一个二碳的乙酰基，那么一套酶就能替所有东西做这个氧化</b>。<b>书把第二阶段描述成「把产物转化成为数不多的、更小的中间物」</b>，<b>并点了名：乙酰辅酶 A、丙酮酸、α-酮戊二酸、还原型烟酰胺辅酶、ATP</b>。<b>正是这个汇聚，让「一个柠檬酸循环 ＋ 一条呼吸链」就够用了。</b>',
 en:'“Because there is really only one thing to oxidise, the hydrogen on carbon-hydrogen bonds. If everything is first cut down to the same two-carbon acetyl group, one set of enzymes can do the oxidation for all of it. The textbook describes it as the second phase converting the products into a small number of still smaller intermediates. It then names the key ones: acetyl-CoA, pyruvate, 2-oxoglutarate, the reduced nicotinamide coenzymes and ATP. Convergence is what makes a single citric acid cycle and a single respiratory chain enough.”',
 cn:'<span class="pg">p218</span>。<b>这条是这张卡的 why 第一层</b>，也是「为什么值得把四样放在一张卡上」的答案。<br>加一句更硬的：<b>汇合省的不是能量，是酶。</b>细胞不必为每种食物各养一条完整的氧化链，只要养一条，前面接四个不同的接口。'},
{r:'高', q:'Why is anabolism not simply catabolism run backwards?',
    ez:'“Because the two have fundamentally different energy requirements. The textbook says they are not reversible into each other. That holds between a precursor and an end product. They run by different routes. Catabolic processes produce A T P. Anabolic ones consume it. Now take a step that released a lot of energy going down. You would have to climb it going up. So the cell bypasses it. It uses a different enzyme and a different reaction. Keeping them apart has a second benefit. The two directions can be regulated independently. And they are often in different compartments too.”',
    ezcn:'因为<b>两者的能量需求有根本差别</b>。书说：<b>在一个前体和一个终产物之间，分解与合成过程不能互相倒过来，它们走不同的路线</b>——<b>分解产生 ATP，合成消耗 ATP</b>。<b>下坡时放出大量能量的那一步，上坡时你就得爬它</b>，<b>所以细胞用另一个酶、另一个反应把它绕过去</b>。<b>分开还有第二个好处：两个方向可以被独立调控，而且它们常常还在不同的区室里。</b>',
 en:'“Because the two have fundamentally different energy requirements. The textbook says that catabolic and anabolic processes between a precursor and an end product are not reversible into each other and run by different routes. Catabolic processes produce ATP and anabolic ones consume it. A step that released a lot of energy going down is a step you would have to climb going up, so the cell bypasses it with a different enzyme and a different reaction. Keeping them apart also means the two directions can be regulated independently, and they are often in different compartments as well.”',
 cn:'<span class="pg">p218</span>、<span class="pg">p220</span>。<b>两个现成的实例，一个都别少</b>：糖异生绕过 pyruvate kinase，改走 oxaloacetate ＋ GTP（<span class="pg">p169</span>）；脂肪酸分解在线粒体、合成在胞质（<span class="pg">p220</span>）。<br>⚠ <b>再往下问「为什么不能靠浓度推回去」就落到热力学了</b>，给停止句。'},
{r:'中', q:'Why does the nitrogen have to leave separately, and why does that cost ATP?',
 en:'“Because its waste product is poisonous, while the carbon’s waste product is not. Carbon leaves as carbon dioxide, which simply diffuses away. Nitrogen leaves as ammonia, which the textbook calls considerably toxic, so it has to be packaged before it can be excreted. The urea cycle is strongly endergonic, and the textbook counts four moles of ATP per mole of urea. Two go into carbamoyl phosphate. One goes into argininosuccinate, and because that one leaves AMP it takes two more to regenerate. So the separation is not a matter of chemistry. It is a matter of toxicity.”',
 cn:'<span class="pg">p123</span>、<span class="pg">p124</span>。<b>这一条是这张卡最好用的一句「为什么」</b>：它把「氮为什么不走漏斗」从一个要记的事实，变成一个能推出来的结论。<br>完整的账在定义类那一条的公式块里。'},
{r:'中', q:'Why is the citric acid cycle also a source of building blocks, not only a furnace?',
 en:'“Because its intermediates are the starting points of several syntheses, and the textbook names them. 2-oxoglutarate and oxaloacetate are converted by transamination into amino acids. Succinyl-CoA reacts with glycine to give delta-aminolevulate, from which the porphyrins are made. And fumarate is the point where the cycle is connected to the metabolism of tyrosine and aspartate. So the same cycle is both the end of catabolism and a supply depot for anabolism, which is why anything drawn out of it has to be replenished.”',
 cn:'<span class="pg">p220</span>。<b>这叫 amphibolic（两栖的）</b>，书没有用这个词，要用就说 generally。<br>⚠ <b>「抽走了要补回来」那一句指的是 anaplerotic 回补反应</b>，书在 <span class="pg">p140</span> 讲了 pyruvate carboxylase；细节在卡 <b>24</b>，这里点到为止。'},
{r:'中', q:'Why store energy as fat rather than as glycogen?',
 en:'“Two reasons, and the textbook supplies the numbers for the first. Per gram, complete oxidation of palmitic acid gives roughly two point eight times what glucose gives, because the fatty acid chain is more reduced and carries no oxygen of its own. The second reason is that a fatty acid is a repeat of one identical two-carbon unit, so the same four enzymes run again and again. The textbook calls triacylglycerols the main storage substance in organisms, and it says glycogen storage costs two phosphorylations per glucose put in.”',
 cn:'<span class="pg">p135</span>、<span class="pg">p193</span>、<span class="pg">p174</span>。<b>第二条理由书没有直接说，是从它的三处凑出来的</b>，说的时候把三个页码分开给，别说成一句书上的话。<br>⚠ 通用教材还会加第三条：脂肪是<b>无水</b>存的，糖原要带着水。<b>这本书没有这条</b>，要说就标明是通用知识。'}
]}
]
});
