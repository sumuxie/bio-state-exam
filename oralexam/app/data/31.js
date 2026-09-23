/* 卡 31 · Explain the role of vitamins and minerals in metabolism.
   题库 #31（S3 Biochemistry 19）· gap：她说没学过
   出处 Biochemie OCR：维生素的定义与 table 3.1 在 p043（§3.2.1 Coenzymes），
   各辅酶的结构与功能 p044–p053，金属离子在酶里的角色 p043 与 p037，
   生源元素三档 p011、体液离子与 Na:K:Ca p012，
   脂溶性四个维生素在脂类章的萜类一节 p183–p187，
   丙酮酸氧化脱羧的五个辅因子 p168–p169，生物素在脂肪酸合成 p188，
   抗坏血酸 p152–p153，维生素 K 与 γ-羧化 p112。
   table 3.1 的正文 OCR 出来是空的，已回 300 dpi 原图逐行读出，见速背 07。
   p045 的黄素加氢位置（N1 / N10）与同页自己的结构式打架，见速背 09。*/

window.CARDS.push({
id:'31', n:31, w:1,
q:'Explain the role of vitamins and minerals in metabolism.',
qcn:'维生素与矿物质在代谢中的作用',
sub:'主干说完约 90 秒 · <b>这题她没学过，这张卡是来教的</b> · 骨架只有一句：维生素是辅酶的前体，矿物质是酶的金属中心和电荷的载体',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'题面四个实词一个都不能漏：<b>vitamins · minerals · role · metabolism</b>。而且这题问的是<b>「作用」</b>，所以脊梁是机制，不是名字表。先把机制那一句说出来，再举名字——顺序反了，他会以为你只会背表。'},
 {n:'01', t:'定义 · 维生素',
  ez:'“This textbook defines a vitamin in one sentence. It is an organic substance. It is indispensable for the vital functions of the cell. And the organism has to be supplied with it in food. Two words carry the weight. Organic means a vitamin is a molecule. It is not an element. And the criterion is the diet. It is not the chemistry.”',
  ezcn:'<b>书对维生素的定义只有一句：一种对细胞生命活动不可缺少、而机体必须从食物中获得的有机物质。</b><b>两个词承重：「有机」意味着维生素是一个分子，不是一个元素；而判据是「食物」，不是化学结构。</b>',
  big:'书 p043 的原话：<b>细胞生命功能不可缺少的有机物，必须由食物供给组织</b>。判据是<b>「必须从食物来」</b>，不是「合不出来」',
  en:'“This textbook defines a vitamin as an organic substance indispensable for the vital functions of the cell that the organism has to be supplied with in its food. Two words in that definition carry the weight. It is organic, so a vitamin is a molecule and not an element. And the criterion is the diet, not the chemistry.”',
  note:'书 p043 自己的定义句，英译：<i>Vitamins are organic substances indispensable for the vital functions of cells, which have to be supplied to the organism in its food.</i> <b>「必须由食物供给」跟「合不出来」不是一回事</b>，这个区分卡 18 也有：维生素 D 是身体自己从一个甾体前体做的（书 <span class="pg">p186</span>：紫外线打开 B 环），烟酸在人体里可以从色氨酸来（<b>这一条是通用知识，全书 0 命中</b>）。所以英文别说 “cannot make”，说 “has to be supplied with the food”。<span class="pg">p043</span>',
  warn:'<b>「维生素供给能量」是错的，而且是最常被顺口说出来的错。</b>维生素不被氧化放能，它们的量也太小。要先把这一句否掉，再说它们是什么。'},
 {n:'02', t:'定义 · 矿物质',
  ez:'“A mineral here is an inorganic chemical element. The organism needs it. It is taken in as a salt. And it works as an ion. This textbook does not use the word mineral at all. It sorts the elements by mass instead. The macrobiogenic ones come first. Those are hydrogen, oxygen, carbon, nitrogen and phosphorus. They are around one per cent and above. Then come calcium, magnesium, sulfur, sodium, potassium, iron and chlorine. Those are five hundredths to one per cent. Then copper, zinc, cobalt, manganese, iodine and molybdenum.”',
  ezcn:'<b>在代谢的语境里，矿物质 ＝ 机体需要的无机化学元素，以盐的形式摄入，以离子的形式起作用。</b>⚠ <b>这本书根本不用 mineral 这个词</b>，<b>它是按占体重的比例给元素分级的</b>：<b>常量元素（约 1% 以上）：H、O、C、N、P</b>；<b>0.05%–1%：Ca、Mg、S、Na、K、Fe、Cl</b>；<b>再往下：Cu、Zn、Co、Mn、I、Mo</b>。',
  big:'<b>书里没有「矿物质」这个词</b>，用的是<b>生源元素</b>，按占体重的比例分三档（<span class="pg">p011</span>）。口试上说「生物需要的<b>无机元素</b>」最稳',
  en:'“A mineral, in a metabolic context, is an inorganic chemical element that the organism needs. It is taken in as a salt and it works as an ion. This textbook does not use the word mineral at all. It sorts the elements by how much of the body mass they make up. The macrobiogenic ones are hydrogen, oxygen, carbon, nitrogen and phosphorus, at around one per cent and above. Then calcium, magnesium, sulfur, sodium, potassium, iron and chlorine, at five hundredths to one per cent. Then copper, zinc, cobalt, manganese, iodine and molybdenum.”',
  note:'三档的名字和元素清单全在 <span class="pg">p011</span>：<b>macrobiogenic</b> H O C N P（约 1% 以上）· <b>oligobiogenic</b> Ca Mg S Na K Fe Cl（0,05–1%）· <b>microbiogenic</b> Cu Zn Co Mn I Mo。还有一档 <b>variable / trace elements</b>（B Si V Br Li As Se Ti Al），只在某些物种里才有可观的量。<b>百分数是书给的，直接报</b>。<br><b>注意 H O C N P 这一档也在清单里</b>——所以严格说，「矿物质」这个日常词并不等于书的任何一档。被追问时就说这件事本身：<b>分类是人划的</b>。',
  good:'<b>这一档划分能直接答一个便装问题</b>：为什么血浆的离子组成像海水。书 <span class="pg">p012</span> 自己点了这件事，见速背 16。'},
 {n:'03', t:'一句话机制（role ＋ metabolism 在这里被交代掉）',
  ez:'“Metabolism is the whole set of chemical conversions in the cell. It has breakdown routes that release energy. It has building routes that make new molecules. Nearly every step is catalysed by an enzyme. So here is the role in one sentence. Vitamins and minerals are neither fuel nor building material. They are what the enzymes need in order to work. Most water soluble vitamins are precursors of coenzymes. And many minerals are the metal centres of enzymes. Others are carriers of charge.”',
  ezcn:'<b>代谢 ＝ 活细胞里全部化学转化的总和</b>：<b>放能的分解路线 ＋ 造新分子的合成路线</b>，<b>而几乎每一步都由一个酶催化</b>。<b>所以它们的作用一句话说完：维生素和矿物质既不是燃料也不是建材——它们是那些酶得以工作所需要的东西。</b><b>大多数水溶性维生素是辅酶的前体；很多矿物质是酶的金属中心，或者是电荷的携带者。</b>',
  big:'<b>它们不是燃料，也不是砖头。</b>大多数<b>水溶性维生素是辅酶的前体</b>；很多<b>矿物质是酶的金属中心，或者是体液里的电荷载体</b>。这一句就是整题的答案',
  en:'“Metabolism is the whole set of chemical conversions running inside the living cell, the breakdown routes that release energy and the building routes that make new molecules. Nearly every step is catalysed by an enzyme. So here is their role in one sentence. Vitamins and minerals are neither fuel nor building material. They are what the enzymes need in order to work at all. Most water-soluble vitamins are the precursors of coenzymes, and many minerals are the metal centres of enzymes or the carriers of charge.”',
  note:'<b>这一格是整张卡的脊梁</b>，后面每一条都是它的注脚。书 p043 对辅酶的功能定义要背下来：<i>Coenzymes usually function as intermediate carriers of functional groups, atoms or electrons</i> —— <b>基团、原子或电子的中间搬运工</b>。英文：“The textbook says a coenzyme is an intermediate carrier of the functional group, the atoms or the electrons that the reaction moves.”<br>所以链条是<b>单向</b>的：<b>食物里的维生素 → 细胞把它改造成辅酶 → 辅酶搬那个基团</b>。这条链说清楚了，「role」就答完了。<span class="pg">p043</span>'},

 {g:'账', gn:'投入 / 产出 / 总结三行，缺一不可。<b>这题的账不是按分子记，是按「一步反应里有几个辅因子、几个来自维生素、哪些被消耗」记。</b>用书 p168 的丙酮酸氧化脱羧当这张账——一步反应里塞了五个辅因子，四个来自维生素，是全书最省力的例子。'},
 {n:'04', t:'投入',
  big:'1 <b>pyruvate</b> · 1 <b>NAD⁺</b> · 1 <b>CoA-SH</b>。另外<b>三个不被消耗的辅因子</b>挂在酶上：<b>TPP · lipoic acid · FAD</b>',
  en:'“Take the one reaction that shows the whole answer at once. The textbook prints it on page one hundred and sixty-eight. In go one pyruvate, one NAD-plus and one coenzyme A. Those three are the things consumed. Three further cofactors sit on the multienzyme complex and are not consumed. They are thiamine diphosphate, lipoic acid and FAD.”',
  note:'书 <span class="pg">p168</span> 自己那一句，英译：<i>The cofactors taking part in this process are thiamine diphosphate, lipoic acid and coenzyme A. FAD and finally NAD then participate in the regeneration of the lipoic acid.</i> 三个酶的名字书也给了：<b>pyruvate dehydrogenase · dihydrolipoyl transacetylase · dihydrolipoyl dehydrogenase</b>。'},
 {n:'05', t:'产出',
  big:'1 <b>acetyl-CoA</b> · 1 <b>CO₂</b> · 1 <b>NADH ＋ H⁺</b>',
  en:'“Out come one acetyl-CoA, one carbon dioxide and one NADH with a free proton. The acetyl-CoA is what enters the citric acid cycle. The NADH goes to the respiratory chain, where the textbook says it is regenerated and yields about three ATP.”',
  note:'书 <span class="pg">p168</span> 的式子：<code>pyruvate + NAD⁺ + CoA = acetyl-CoA + CO₂ + NADH + H⁺</code>。三个 ATP 在 <span class="pg">p169</span>。<b>这条直接接卡 24（柠檬酸循环）和卡 25（呼吸链）</b>——他多半会顺着走过去。'},
 {n:'06', t:'总结（净账）',
  big:'<b>一步反应，五个辅因子，四个来自维生素</b>：B1 → TPP · 泛酸 → CoA · B2 → FAD · 烟酸 → NAD⁺。<b>只有底物被消耗</b>，五个辅因子都回到原处',
  en:'“Now the net of it, and this is the answer to the question. That single step of central metabolism needs five cofactors, and four of them are made from vitamins the organism has to eat. Thiamine becomes thiamine diphosphate, pantothenic acid becomes coenzyme A, riboflavin becomes FAD, and nicotinic acid becomes NAD-plus. The fifth, lipoic acid, is not a vitamin. Only the substrate is used up. Every one of the cofactors is handed a group, passes it on, and comes back to where it started.”',
  note:'<b>收尾那句被追问时再给</b>：“That is why a vitamin is needed in a trace amount while a nutrient is needed in bulk.”<br><b>这是这张卡最值钱的一格</b>：一句话里同时答掉「维生素干什么」「为什么只要一点点」「辅酶和维生素差在哪」。<b>每天要多少毫克，书里一个数都没有，别报。</b><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>（书 <span class="pg">p168</span> 原样印的）：<code>pyruvate + NAD⁺ + CoA → acetyl-CoA + CO₂ + NADH + H⁺</code><br><b>每个符号是什么</b>：<b>pyruvate</b> 丙酮酸，糖酵解交过来的三碳 α-酮酸 · <b>NAD⁺</b> 烟酰胺腺嘌呤二核苷酸的氧化型 · <b>CoA</b> 辅酶 A，常写成 CoA-SH，因为干活的是末端那个<b>游离巯基</b> · <b>acetyl-CoA</b> 乙酰基挂在那个巯基上形成的<b>硫酯</b> · <b>NADH</b> 还原型。<br><br><b>四步推导</b>（书 p168–p169 的机制。他问「这五个辅因子分别干什么」就照这个说）：<br>① <b>脱羧</b>：丙酮酸的羧基以 CO₂ 走掉，剩下的两碳片段挂到 <b>TPP</b> 噻唑环的 <b>C-2</b> 上。书叫它<b>「活性乙醛」</b>。<b>三碳变两碳，这一步只有 TPP 在场。</b><br>② <b>氧化</b>：两碳片段交给<b>硫辛酸</b>，二硫环打开，醛变成<b>乙酰基加一个 H</b>。书自己那一句，英译：<i>That is the actual dehydrogenation (oxidation) step.</i> <b>真正的氧化发生在这一步，不在最后。</b><br>③ <b>换手</b>：乙酰基从二氢硫辛酸转到 <b>CoA</b> 的 SH 上，生成硫酯。书 p169 特意解释了为什么能这样换手：<b>醛氧化放出的 Gibbs 能没有跑掉，存在这根高能硫酯键里</b>。<br>④ <b>把还原当量送出去</b>：二氢硫辛酸被一个<b>黄素蛋白（FAD）</b>脱氢，氢再交给 <b>NAD⁺</b>。书 p169 加了一句关键的：这个黄素蛋白的氧化还原电位<b>比一般黄素蛋白负得多</b>，所以它推得动 NAD⁺。<br><br><b>数一下氢和电子</b>：丙酮酸的 C-2 从<b>醛的氧化态</b>升到<b>酸的氧化态</b>，交出 <b>2 个电子 ＋ 2 个质子</b>，也就是通常说的「两个氢」。这两个氢<b>先落在硫辛酸上，再到 FAD，最后到 NAD⁺</b>。而书 <span class="pg">p044</span> 把最后一步印成 <code>NAD⁺ + 2H ⇌ NADH + H⁺</code>——<b>NADH 只带走 2 个电子 ＋ 1 个质子（一个氢负离子），另一个质子留在溶液里</b>。这就是为什么写 NADH 后面总跟一个 H⁺。<br><br><b>=== 一句话理解 ===</b><br><b>五个辅因子是一条接力跑道，被传的东西只有两样：一个两碳的乙酰基，和两个氢。</b>TPP 接住两碳片段，硫辛酸在接手的同时把它氧化，CoA 把成品拿走，FAD 和 NAD⁺ 把氢运出去。<b>每一棒跑完都回到起跑线</b>——这就是「催化量」三个字的物理意义。<br>反过来看更有力：<b>缺掉这五个里的任何一个，糖就进不了柠檬酸循环。</b>一个每天几毫克的分子，卡住的是整条主干道。<b>「维生素在代谢中的作用」这句话，说到这儿就说完了。</b>'},

 {g:'水溶性维生素 → 辅酶', gn:'<b>🪄 邪修记法</b>（按书表的顺序）：中文首字「<b>烟 核 硫 · 泛 生 吡</b>」＝ 烟酸 → NAD/NADP 搬氢 · 核黄素 B₂ → FMN/FAD 搬氢 · 硫胺素 B₁ → TPP 搬醛 · 泛酸 → CoA 搬酰基 · 生物素 → 搬 CO₂ · 吡哆醇 B₆ → PLP 搬氨基。英文只用简单词：“<b>No Rat Takes Pills Before Play</b>” ＝ <b>N</b>iacin · <b>R</b>iboflavin · <b>T</b>hiamine · <b>P</b>antothenate · <b>B</b>iotin · <b>P</b>yridoxine。<br>书的 <b>Table 3.1</b> 就是这一组的骨架：<b>辅酶 · 搬什么 · 来自哪个维生素</b>，三列。每一行只要三件事：<b>叫什么 · 搬什么基团 · 在哪个反应里见过</b>。结构式不用背（她有专门的 app）。'},
 {n:'07', t:'书的表，原样',
  big:'<b>Table 3.1（p043）</b>——这张表是这道题的地图。<b>注意有两行 vitamin 那一栏是空的</b>（辅酶 Q 和硫辛酰胺，不是最后两行），那个空格本身就是一道题',
  en:'“The textbook has one table for this, table three point one on page forty-three. It has three columns: the coenzyme, the group it transfers, and the vitamin behind it. Ten coenzymes are listed, and two of them have an empty vitamin column.”',
  tbl:{head:['coenzyme','group transferred','vitamin'],
       rows:[['NAD⁺','H⁺, e⁻','nicotinic acid'],
             ['NADP⁺','H⁺, e⁻','nicotinic acid'],
             ['FMN','H⁺, e⁻','riboflavin (B₂)'],
             ['FAD','H⁺, e⁻','riboflavin (B₂)'],
             ['Coenzyme Q','H⁺, e⁻','—（空）'],
             ['TPP','aldehyde','thiamine'],
             ['Coenzyme A','acyl','pantothenic acid'],
             ['Lipoamide','acyl, H','—（空）'],
             ['Biotin','CO₂','biotin (H)'],
             ['Pyridoxal phosphate','–NH₂','pyridoxine (B₆)']]},
  note:'<b>这张表的正文 OCR 出来是空的，上面十行是回 300 dpi 原图一行一行读出来的。</b>书自己在表下注了一句，英译：<i>The abbreviations are explained in the text that follows.</i>（缩写在后文解释）。<br><b>两个要注意的地方</b>：① <b>同一页上书印了两个不同的名字</b>：这张表的 vitamin 栏里印的名字是 <b>nicotinic acid（烟酸）</b>，而同页正文讲到辅酶时，把辅酶里带的那个环叫作 <b>nicotinamide（烟酰胺）</b>——<b>书自己印的这两个名字指的不是同一个分子，这就是「维生素和它变成的东西不是一回事」的书面证据，而且这张表第一行就在演示</b>。② <b>Coenzyme Q 和 Lipoamide 两行的 vitamin 栏是空的</b>，见速背 19。<span class="pg">p043</span>'},
 {n:'08', t:'NAD⁺ / NADP⁺ · 搬氢和电子',
  big:'两个<b>二核苷酸</b>，一头腺嘌呤一头<b>烟酰胺</b>，糖都是 D-核糖。<b>氢加在吡啶环的 C-4 上</b>。NADP 多一个磷酸，在腺苷部分的 <b>2′ 位</b>',
  en:'“The nicotinamide coenzymes are NAD-plus and NADP-plus. Both are dinucleotides. One base is adenine, the other is nicotinamide, and the sugar is always D-ribose. NADP-plus differs by one further phosphate, on the two-prime position of the adenosine part. Their function is to bind hydrogen reversibly, onto carbon four of the pyridine ring, which then loses its aromatic character and its positive charge. NADPH is the reducing equivalent for biosynthesis, while NAD-plus works in the breakdown routes and in the reactions that make ATP.”',
  note:'全在 <span class="pg">p044</span>。<b>C-4 和 2′ 位这两个位置是书给的具体量，按 LOGIC §11 该报就报</b>（2′ 的撇号约定见卡 03：指糖环上的碳，撇是为了跟碱基编号分开）。<br><b>「NADPH 管合成、NADH 管分解」这一条要说出来</b>——它解释了细胞为什么要养两套几乎一样的分子：<b>一个磷酸的差别被酶用来分辨两条相反方向的路</b>。',
  good:'<b>340 nm 是这题里最容易加分的一个数，而且是书给的。</b>“The reduced forms absorb at three hundred and forty nanometres and the oxidised forms do not. That difference is used to measure the coenzyme and, more importantly, to follow the enzyme reactions they take part in.” 书 <span class="pg">p044</span> 有吸收光谱图。<b>这一句同时答了「怎么知道反应在跑」</b>，属于⑤那一格。'},
 {n:'09', t:'FMN / FAD · 黄素',
  big:'底子是 <b>riboflavin（B₂）</b>。<b>FMN</b> ＝ 核黄素-5′-磷酸；<b>FAD</b> ＝ FMN 加 AMP，焦磷酸键连。氧化还原发生在<b>异咯嗪环</b>上，<b>一次进两个氢</b>',
  en:'“The flavin coenzymes are FMN and FAD, and both are built on riboflavin, which this book calls vitamin B-two. FMN is riboflavin five-prime-phosphate. FAD is FMN joined to adenosine monophosphate through a pyrophosphate bond. The redox part is the isoalloxazine ring, the three fused rings of the flavin, and it takes two hydrogens at once. The textbook draws the reaction as plus two H and minus two H. The oxidised flavin is yellow because of its conjugated double bonds, and the reduced form is colourless. That colour change is how flavoprotein reactions are followed by optical methods.”',
  note:'<span class="pg">p045</span>。书说黄素<b>构成黄素蛋白的 prosthetic group</b>（紧密结合、不离开酶），这跟 NAD⁺ 的「来去自由、动力学上像底物」正好是一对反例——<b>辅基与辅酶的区别，用这两个分子讲最省事</b>（卡 18 有完整版）。<br><b>「两个氢一起进」跟 NAD 的「一个氢负离子 ＋ 一个游离质子」是两种不同的搬法</b>，这一条差别在呼吸链里是承重的：卡 25 里「带质子的载体和只带电子的载体交替」那条机制，靠的就是黄素能带质子。',
  warn:'<b>⚠ 书自己跟自己打架，而且这是全书第二例（第一例是 α-helix 的 n+3）。</b>p045 正文印的是 <i>the hydrogen binds to N¹ and N¹⁰</i>（氢加在 N-1 和 N-10）。<b>已回 320 dpi 原图确认，书上印的就是 N¹⁰，不是 OCR 错。</b>但<b>同一页书自己画的结构式反着说</b>：FMN 的图里，<b>核糖醇链就挂在那个氮上</b>（那正是 N-10），它已经有三根键，<b>没有空位再接氢</b>；而同页的氧化／还原对照图上，多出来的两个 H 画在<b>另外两个氮</b>上。通用写法是 <b>N-1 和 N-5</b>。<br><b>考场说法（先给模糊但正确的，被逼问再给数）</b>：“The hydrogen adds across two ring nitrogens of the isoalloxazine system.” 被追问：“The textbook prints N-one and N-ten, but its own structure on the same page puts the ribityl chain on N-ten, so that nitrogen has no free valence. The generally accepted positions are N-one and N-five.” <b>用书的一半打书的另一半，比引外部教材稳。</b>（这一条该进 <code>book/BOOK_ERRATA.md</code>，本窗口只允许新建这一个文件，没有写进去。）'},
 {n:'10', t:'Coenzyme A · 搬酰基',
  big:'来自<b>泛酸（pantothenic acid）</b>。干活的是末端<b>游离 SH</b>，接上酰基就是<b>硫酯</b>——书说硫酯<b>一般是非常活泼的化合物</b>，acetyl-CoA 是<b>高能化合物</b>',
  en:'“Coenzyme A carries acyl groups. The textbook lists where: the oxidation of fatty acids, the oxidation of pyruvate, the synthesis of fatty acids, and biological acetylations. It is built from adenosine three-prime five-prime-diphosphate, pantoic acid, beta-alanine and cysteamine. Pantoic acid joined to beta-alanine is pantothenic acid, and that is the vitamin. The acyl group sits on the free SH of the cysteamine end as a thioester, and the textbook calls a thioester a very reactive compound.”',
  note:'<span class="pg">p050</span>。<b>「为什么偏偏是硫酯」值得顺手答掉</b>：硫的孤对电子跟羰基的共轭比氧差得多，所以硫酯没有普通酯那种共轭稳定化，<b>酰基随时可以被交出去</b>。这是台面化学，可以答（见 LOGIC §5）。书给的是「非常活泼」和「高能」两个说法，<b>原因是通用的</b>。<br><b>同一个磷酸泛酰巯基乙胺还在另一个地方出现</b>：书 <span class="pg">p188</span> 说脂肪酸合成的 <b>ACP</b> 上那个 SH 就是 phosphopantetheine 的，跟 CoA 里的是同一段。<b>说出这一句，脂肪酸合成那道题就接上了。</b>'},
 {n:'11', t:'TPP · 搬醛',
  big:'来自 <b>thiamine（B₁）</b>。书给两类反应：<b>2-氧代酸的脱羧</b>（裂合酶）和<b>转酮醇酶反应</b>（转移酶）。醛基挂在<b>噻唑环的 C-2</b> 上，反应常常还要 <b>Mg²⁺</b>',
  en:'“Thiamine diphosphate comes from thiamine, vitamin B-one. The textbook gives it two classes of reaction. One is the decarboxylation of two-oxo acids, which are lyase reactions. The other is the transketolase reaction, which transfers acetaldehyde or glycolaldehyde. The transferred aldehyde group binds to carbon two of the thiazole ring. Those reactions often need magnesium ions as well.”',
  note:'<span class="pg">p050</span>。<b>Mg²⁺ 那半句要说</b>——它是全卡唯一一处「维生素和矿物质在同一个活性中心里协作」的书面证据，正好把题面两半缝在一起。<br>书还说清了 thiamine 的结构：<b>一个取代嘧啶用亚甲基桥连一个取代噻唑</b>，活性形式再带一个焦磷酸（二磷酸）基团。书顺带更正了自己的用词：<b>TPP 这个缩写里的 P 来自 pyrophosphate，而书说更正确的名字是 thiamine diphosphate</b>，即该叫二磷酸。'},
 {n:'12', t:'Biotin · 搬 CO₂',
  big:'<b>活性 CO₂ 的载体</b>，羧化酶的辅酶。书给两个去处：<b>acetyl-CoA → malonyl-CoA</b>（脂肪酸合成）和<b>丙酮酸 → 草酰乙酸</b>（糖异生）。<b>把 CO₂ 接到辅酶上要花一个 ATP</b>',
  en:'“Biotin carries carbon dioxide. It is the coenzyme of the carboxylases. The textbook gives the carboxylation of acetyl-CoA to malonyl-CoA in fatty acid synthesis, and it draws the carboxylation of pyruvate to oxaloacetate in gluconeogenesis. Attaching the carbon dioxide to the coenzyme costs one ATP. In the enzyme, biotin is held to a lysine residue by an isopeptide bond, which uses the side-chain amino group and not the backbone. So it is a prosthetic group rather than a coenzyme that comes and goes.”',
  note:'<span class="pg">p049</span> <span class="pg">p169</span> <span class="pg">p188</span>。书 p188 把那个反应式整个印出来了：<code>CO₂ + acetyl-CoA + ATP → ⁻OOC-CH₂-CO-SCoA + ADP + Pᵢ</code>，酶是 <b>acetyl-CoA carboxylase</b>，条件写着 <b>Mn²⁺ 和 biotin</b>。p169 的糖异生图上，丙酮酸到草酰乙酸那一箭头下面写的也是 <b>biotin</b>。<br><b>「异肽键」就地交代</b>：肽键连的是 α 羧基和 α 氨基；异肽键连的是<b>侧链</b>上的那一个，这里是赖氨酸的 ε-氨基。',
  good:'<b>生蛋清那条书里有，是这题最好用的便装入口。</b>书 p049 原话：生物素结合到蛋清里一个特定的蛋白 <b>avidin</b> 上就被灭活，<b>食物里大量生蛋清可以引起生物素缺乏</b>。英文：“Biotin binds to avidin, a protein of egg white, and is inactivated by it. The textbook says large amounts of raw egg white in the diet can bring on a biotin deficiency.” <b>这也是实验室里 biotin–streptavidin 那一套的同一个化学</b>。'},
 {n:'13', t:'Pyridoxal phosphate · 搬氨基',
  big:'来自 <b>pyridoxine（B₆）</b>，是个<b>吡啶衍生物</b>。转氨反应里底物氨基酸跟辅酶先形成 <b>Schiff 碱</b>。书特意说它是「<b>一个辅酶服务好几类反应</b>」的例子',
  en:'“Pyridoxal phosphate comes from pyridoxine, vitamin B-six. It is a pyridine derivative, and both pyridoxal phosphate and pyridoxamine phosphate are biologically active. It transfers amino groups. The substrate amino acid forms a Schiff base with the coenzyme, and that intermediate is what lets the chemistry happen. The textbook also gives it decarboxylations and other lyase reactions. It calls pyridoxal phosphate its example of a coenzyme that can work in several types of reaction.”',
  note:'<span class="pg">p053</span>。<b>Schiff base 就地交代</b>：醛和伯胺缩合脱一分子水生成的 <b>C=N</b>，也叫醛亚胺——正是辅酶那个醛基和氨基酸的氨基。<br><b>这一格直接通向氨基酸代谢（卡 aa）</b>：转氨是氨基酸分解的第一步，产物 α-酮酸再走氧化脱羧进循环（书 <span class="pg">p169</span> 点名 alanin valin isoleucin leucin）。<b>他要往氨基酸那边走，就从这儿走。</b>'},
 {n:'14', t:'表外还有一批，正文里',
  big:'<b>书的表不全，正文补了六七个。</b>说出这句话本身就是分：<b>tetrahydrofolate · S-adenosylmethionine · 辅酶 B₁₂ · biopterin · ATP · UDP · CDP</b>',
  en:'“The table is not the whole list, and the running text adds several more. Tetrahydrofolate carries hydroxymethyl and formyl groups and comes from folic acid. S-adenosylmethionine is the main donor of methyl groups. Coenzyme B-twelve swaps a hydrogen and a group on the neighbouring carbon, and it carries a cobalt ion held by four coordination bonds in a corrin ring. Biopterin serves some monooxygenases. The textbook also treats ATP itself as a coenzyme, together with UDP for transferring sugars and CDP for building phospholipids.”',
  note:'tetrahydrofolic acid <span class="pg">p048</span> <span class="pg">p049</span>；adenosylmethionine <span class="pg">p048</span>；biopterin <span class="pg">p047</span>；B₁₂ <span class="pg">p053</span>；ATP <span class="pg">p051</span>；UDP、CDP <span class="pg">p052</span>。<br><b>ATP 那一条在这道题里特别有用</b>：书专门开了一小节叫 <i>d) ATP as a coenzyme</i>——<b>一个「辅酶」完全不来自维生素，而它的磷酸来自一个矿物质（磷）</b>。题面的两半在这里第二次碰头。<br><b>B₁₂ 是「矿物质住在维生素里」的例子</b>：钴是 microbiogenic 那一档的元素（p011），而它的位置在 corrin 环中央——书说这个环<b>像血红蛋白里的卟啉，只是有两个吡咯环直接相连、没有次甲基桥</b>。B₁₂ 的结构 <b>1957 年才弄清</b>，这个年份是书给的。',
  warn:'<b>抗坏血酸（维生素 C）在书里根本不在辅酶这一章</b>，它在糖化学那一章的「糖酸」一节（<span class="pg">p152</span> <span class="pg">p153</span>），书只说它<b>作为抗坏血病的维生素被分离出来</b>、是个内酯、含<b>烯二醇</b>结构因而<b>强还原性</b>，脱氢就变脱氢抗坏血酸。<b>它的代谢角色要到 p112 才出现</b>——胶原的脯氨酸和赖氨酸羟化，需要氧、2-氧代戊二酸、<b>L-抗坏血酸和 Fe²⁺</b>。见速背 19 下面的便装问题。'},

 {g:'脂溶性的四个 · 书把它们放在另一章', gn:'<b>这一组的关键不是名字，是「书为什么把它们分开放」。</b>A D E K 不在辅酶那一章，在<b>脂类章的萜类一节</b>——因为按<b>生物合成来源</b>它们是异戊二烯聚合物。说出这句话，等于说出了水溶性／脂溶性这条分界的真正依据。'},
 {n:'15', t:'A · D · E · K',
  big:'<b>书从不说「脂溶性维生素」这四个字</b>，但它把 A D E K 全放进 <b>terpenes（isoprenoids）</b> 一节，并且说 <b>phytol 是维生素 K 亲脂性的原因</b>。分类的依据在这里，不在溶解度表上',
  en:'“The fat-soluble vitamins are A, D, E and K, and this textbook does not group them with the coenzymes at all. It puts them in the lipid chapter, among the terpenes, which are the compounds built up from isoprene units. That is where they come from biochemically. Vitamin K and vitamin E carry a hydrophobic chain derived from phytol, and the book says phytol is what gives vitamin K its lipophilic character. Vitamin A is retinol, and its precursor is the tetraterpene carotene. Vitamin D comes from a steroid precursor when ultraviolet light opens ring B.”',
  note:'<span class="pg">p183</span> <span class="pg">p184</span> <span class="pg">p185</span> <span class="pg">p186</span>。书给的具体数：<b>vitamin K₁ 是 phylloquinone，n = 4；K₂ 是 menaquinone，n = 8</b>；这一族异戊二烯单元<b>通常 4–10 个</b>。胆固醇是维生素 D 的前体（p185），而 <b>7-脱氢胆固醇经紫外线开 B 环得到 cholecalciferol ＝ 维生素 D₃</b>（p186）。<b>「在皮肤里」这半句书没说，是通用知识。</b><br><b>「水溶性／脂溶性」这个分类本身书里没有</b>——但 p183 上书印的那个词是 <i>lipophilic</i>（亲脂的），用来形容维生素 K。<b>老实说出这件事比装作书有更稳</b>：“This textbook never names the two classes. It separates them by putting them in two different chapters, and it says the phytol tail is what makes vitamin K lipophilic.”',
  good:'<b>为什么这条分界要紧（这正是「role」的第二层）</b>：“A water-soluble vitamin in excess is simply excreted, while a fat-soluble one dissolves in the body fat and stays. So the fat-soluble ones can be stored, and they can also build up to a harmful level. This book gives the storage half. It says carotenoids eaten by animals are laid down in fat and nerve tissue as a store of provitamin A. The toxicity half is general knowledge and is not in this book.”<br><b>各自的角色，一句一个</b>：K 是 γ-羧化酶的必需条件，见卡 13 和书 <span class="pg">p112</span>；A 是视觉的——书说类胡萝卜素<b>吸收光子后 cis 变 trans</b>，而这个吸热的转变<b>对感光器官的光接收非常重要</b>（p187）；E 和类胡萝卜素是<b>抗氧化剂</b>，书原话说类胡萝卜素能结合<b>活性氧形式</b>（单线态氧、超氧阴离子自由基、氢过氧自由基）；D 走的是钙——<b>这一条书里没有，是通用知识</b>。'},

 {g:'矿物质 · 两类活儿', gn:'把催化的金属和体液里的电解质分开说，然后<b>只挑铁做走读</b>。理由：呼吸链那张卡（#25）已经把血红素和铁硫中心讲透了，<b>从已有的卡里借一个例子，比再开一个新例子省力得多</b>。'},
 {n:'16', t:'催化金属 vs 电解质',
  big:'<b>催化的</b>：书逐个点名哪个金属在哪个酶里（<span class="pg">p043</span>）。<b>电解质</b>：体液里的 Na⁺ K⁺ Mg²⁺ Ca²⁺ 和氯、磷酸根（<span class="pg">p012</span>）——它们带电荷，不做化学',
  en:'“The minerals divide into two jobs. Some are catalytic, and the textbook lists which metal sits in which enzyme. Zinc in alcohol dehydrogenase, magnesium in a phosphatase, manganese in hexokinase. Iron in the cytochromes, copper in tyrosinase, potassium in pyruvate kinase, sodium in the ATPase. An enzyme with a metal ion as its cofactor is called a metalloenzyme. The others are electrolytes, meaning ions dissolved in the body fluids that carry charge rather than do chemistry.”',
  note:'<span class="pg">p043</span>（已回 300 dpi 原图逐字核过）与 <span class="pg">p012</span>。<b>电解质那一栏的名单，被追问再给</b>：“The chief cations are sodium, potassium, magnesium and calcium. The chief anions are chloride and the oxygen-containing anions, above all phosphate.”<b>书还给了金属离子在酶里的三种角色，这是「role」那个词在矿物质这一半的正面回答</b>：<i>as part of the active centre, as bridges for binding the substrate to the enzyme, or as an element stabilising the spatial structure</i> —— <b>① 活性中心的一部分 ② 把底物拴到酶上的桥 ③ 稳定酶的空间结构</b>。英文：“The textbook gives metal ions three roles in an enzyme. They can be part of the active centre. They can bridge the substrate onto the enzyme. Or they can stabilise the spatial structure of the molecule.”<br><b>⚠ 书写的是 Mn²⁺（hexokinase）</b>，通用写法里己糖激酶用的是 <b>Mg-ATP</b>。按书报，被追问就说通用写法不同。书另一处（<span class="pg">p037</span>）还给了 <b>carboxypeptidase – Zn²⁺</b> 和 <b>xanthine oxidase – 钼</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>书给的比例</b>（<span class="pg">p012</span>）：细胞外液里主要阳离子的<b>原子比</b> <code>Na : K : Ca ≈ 100 : 2 : 2</code>，而且书说这个比例在不同生物里<b>出奇地恒定</b>，并且<b>接近海水的组成</b>。<br><b>符号</b>：这是<b>原子数之比</b>，不是浓度的绝对值，也不是质量比。<br><b>三步读它</b>：<br>① 归一到 Na：<code>K / Na = 2 / 100 = 0,02</code>，<code>Ca / Na = 0,02</code>。<b>钾和钙各只有钠的 1/50。</b><br>② 反过来：<code>Na / K = 50</code>。<b>细胞外每有五十个钠，才有一个钾。</b><br>③ 而细胞<b>内</b>正好相反，钾多钠少——<b>这一半书里没有，是通用知识</b>，别报具体数，报判据：「梯度的方向是反的，维持它要花 ATP」。<br><br><b>=== 一句话理解 ===</b><br><b>100 : 2 : 2 不是一个生理常数，是一份化石。</b>书自己把结论说出来了：这暗示<b>海洋环境在生命起源或早期演化里起过重要作用</b>。细胞没有重新发明自己的外环境，它<b>把一小滩海水包了起来带走</b>，然后花能量在膜两侧维持一个反过来的内环境。<br>所以「电解质在代谢中的作用」可以答成一句话：<b>它们本身不参加反应，它们定义了反应发生在什么介质里</b>——离子强度、pH 缓冲、膜两侧的电位差，以及 ATP 花在维持这些差上的那一份。'},
 {n:'17', t:'铁 —— 拿它当走读的例子',
  big:'同一个元素，<b>两种完全不同的装法</b>：<b>血红素</b>里被卟啉的四个氮箍住；<b>铁硫蛋白</b>里被半胱氨酸的 SH 和游离硫离子抓住。<b>干的是同一件事</b>：Fe²⁺ ⇌ Fe³⁺ 来回换价',
  en:'“Iron is the example to give, because the same atom appears in two quite different housings. In haem it sits at the centre of a flat conjugated ring of four pyrrole units joined by four methine bridges. Four of its bonds go to the four pyrrole nitrogens and two more are free, perpendicular to the plane. In the iron-sulfur proteins there is no ring at all. The iron is held by the SH groups of cysteines and by free sulfide ions. Either way it does the same thing. It passes electrons by changing between iron two-plus and iron three-plus.”',
  note:'<span class="pg">p046</span>。书还给了三样可以接着说的：① 各个细胞色素的差别<b>只在吡咯环上的取代基</b>，正是这些取代基给了它们<b>不同的电化学电位</b>；② 高等动物的线粒体里至少鉴定出 <b>五种细胞色素 b c₁ c a a₃</b>，其中 cyt b 还有多种形式；③ 铁硫簇有三种几何：<b>Fe-S 线型</b>（只有半胱氨酸的 SH）、<b>Fe₂S₂ 平面</b>、<b>Fe₄S₄ 立体</b>，后两种还要游离硫离子参加。例子书给的是 <b>ferredoxin</b>，并说铁硫蛋白<b>存在于一切生物体中</b>。<br><b>血红素是共价或配位共价键结合的，所以是 prosthetic group</b>——书原话。<b>这一格整格接卡 25</b>。',
  good:'<b>「为什么偏偏是铁」可以答，而且不必滑进配位场理论</b>：“Because iron has two stable oxidation states, and the protein can tune the potential between them by changing what surrounds the iron. Haem and an iron-sulfur cluster are two different surroundings for the same atom, and they sit at different points on the potential scale. Below that we are in coordination chemistry rather than biochemistry.” <b>台面上的说法到「换什么配体就换电位」为止</b>，再往下按 LOGIC §5 停。'},
 {n:'18', t:'被忘掉的两个元素：硫和磷',
  big:'<b>硫</b>在 CoA 的 SH、硫辛酸的二硫环、铁硫中心、蛋氨酸与 SAM、谷胱甘肽里；<b>磷</b>是书归到最高一档的元素，它是 ATP、TPP、PLP、NADP 上的那个磷酸',
  en:'“Two elements are easy to forget, and both are in the textbook’s own lists. Sulfur is in the free thiol of coenzyme A, in the disulfide ring of lipoic acid, in the iron-sulfur centres, in methionine and in its adenosyl form, and in glutathione. Phosphorus is the element the book counts as macrobiogenic. It is the phosphate of ATP, the phosphate on thiamine diphosphate and on pyridoxal phosphate, and the extra phosphate that tells NADP apart from NAD.”',
  note:'硫：<span class="pg">p046</span> <span class="pg">p047</span> <span class="pg">p048</span> <span class="pg">p050</span>；磷：<span class="pg">p011</span> <span class="pg">p044</span> <span class="pg">p050</span> <span class="pg">p051</span>。<br><b>为什么值得单开一格</b>：老师问「minerals」时，多半期待听到钙铁锌。<b>你答硫和磷，等于在说「我知道分类是按元素不是按金属」</b>——而这正是书的分法（p011 的三档里 S 和 P 都在）。<br><b>谷胱甘肽顺手交代</b>：书 <span class="pg">p047</span> 说它是甘氨酸、半胱氨酸和谷氨酸组成的三肽，谷氨酸<b>反常地用 γ-羧基</b>相连，靠半胱氨酸的游离 SH 作氧化还原系统：<code>2 G-SH ⇌ G-S-S-G + 2e⁻ + 2H⁺</code>。<b>书自己加了一句限定词：它「大概并不具有辅酶的地位」</b>（<i>probably does not have the standing of a coenzyme</i>）——<b>跟着书加这个限定词，别把它说成辅酶。</b>'},

 {g:'陷阱', gn:'这一条几乎一定会被问，而且是一句话说错就掉分的那种。'},
 {n:'19', t:'辅酶不是维生素',
  big:'<b>维生素是原料，辅酶是成品。</b>证据不用外借——<b>书自己的表里，Coenzyme Q 和 Lipoamide 那两行 vitamin 栏是空的</b>',
  en:'“A coenzyme is not a vitamin. The vitamin is what comes in from the diet, and the coenzyme is what the cell builds out of it. The textbook makes the point in its own table without ever saying it. Ten coenzymes are listed, and two of them have an empty vitamin column: coenzyme Q and lipoamide. A coenzyme the organism can build for itself has no vitamin standing behind it. The first row shows the same thing from the other side. The vitamin is nicotinic acid, while the part the coenzyme carries is nicotinamide.”',
  note:'<b>这是这张卡的核心陷阱，考官一定会让你说出区别。</b>三句话的层次要清楚：① 维生素是<b>营养学</b>的范畴，判据是「必须从食物来」；② 辅酶是<b>酶学</b>的范畴，判据是「酶的非蛋白有机部分，搬基团」；③ <b>两者的关系是前体和产物</b>，而且不是一一对应——烟酸一个维生素对应 NAD 和 NADP 两个辅酶，核黄素一个对应 FMN 和 FAD 两个。<br><b>Q 和硫辛酸人体能自己做，所以不是维生素</b>——<b>这半句书里没有，是通用知识</b>；书只留了两个空格。但书给了 Q 的来路：<span class="pg">p183</span> 说 <b>辅酶 Q 的疏水链跟维生素 K₂、维生素 E 一样，生化上出自 phytol</b>，那是异戊二烯的路线。',
  warn:'<b>反过来也别说错</b>：不是所有维生素都变成辅酶。<b>A 和 D 就不是辅酶</b>——A 走视觉的顺反异构，D 走激素的路。所以准确的说法是 “<b>most of the water-soluble vitamins</b> are precursors of coenzymes”，不是 “vitamins are coenzymes”。<b>「most」这个限定词是这句话的保险。</b>'}
],
end:'<b>一句话记住整张卡：维生素被吃进来变成辅酶，辅酶搬基团和电子；矿物质要么坐在酶的活性中心里换价，要么在体液里带电荷。两样都不是燃料。</b><br><b>纸上怎么画（他说「画给我看」时用这张）</b>：画一条横线当接力跑道，左端写 pyruvate，右端写 acetyl-CoA。跑道上按顺序摆四个圈：<b>TPP → 硫辛酸 → CoA → FAD → NAD⁺</b>。第一个圈上方画一个箭头出去写 <b>CO₂</b>，最后一个圈上方画一个箭头出去写 <b>NADH</b>。然后在每个圈下面写它来自哪个维生素：<b>B₁ · （没有）· 泛酸 · B₂ · 烟酸</b>。<b>这一张图同时是账、是机制、是「辅酶不是维生素」的证据</b>——第二个圈下面那个空格，就是书表里那两个空格。',

/* ---------------- 演练第二屏：要点提示 ---------------- */
sib:[
['<b>定义 · 维生素</b>：细胞不可缺少的<b>有机物</b>，<b>必须由食物供给</b>（书 p043 的原定义）',
 '“An organic substance indispensable for the vital functions of the cell that the organism has to be supplied with in its food.”',
 '<b>判据是「从食物来」，不是「合不出来」。</b><span class="pg">p043</span>'],
['<b>定义 · 矿物质</b>：生物需要的<b>无机元素</b>；书按占体重比例分<b>三档</b>',
 '“An inorganic element the organism needs, taken in as a salt and working as an ion. The book sorts them by how much of the body mass they make up.”',
 '书不用「矿物质」这个词。<span class="pg">p011</span>'],
['<b>机制（整题的答案）</b>：<b>水溶性维生素 → 辅酶前体</b>；<b>矿物质 → 金属中心或电荷</b>',
 '“Most water-soluble vitamins are the precursors of coenzymes. Many minerals are the metal centres of enzymes, and the rest carry charge in the fluids.”',
 '<b>先说这一句，再举名字。</b>'],
['<b>辅酶是什么</b>：书说它是<b>基团、原子或电子的中间搬运工</b>',
 '“The textbook says a coenzyme is an intermediate carrier of the group, the atoms or the electrons that the reaction moves.”',
 '这一句把「role」落到实处。<span class="pg">p043</span>'],
['<b>账</b>：丙酮酸氧化脱羧一步里<b>五个辅因子，四个来自维生素</b>',
 '“One step of central metabolism needs thiamine diphosphate, lipoic acid, coenzyme A, FAD and NAD-plus. Four of the five come from vitamins the organism has to eat.”',
 '<b>只有底物被消耗，辅因子回到原处。</b><span class="pg">p168</span>'],
['<b>表</b>：Table 3.1 三列 —— <b>辅酶 · 搬什么 · 哪个维生素</b>',
 '“NAD and NADP take hydrogen and electrons from nicotinic acid. The flavins take hydrogen and electrons from riboflavin. TPP takes an aldehyde from thiamine. Coenzyme A takes an acyl from pantothenic acid. Pyridoxal phosphate takes an amino group from pyridoxine.”',
 '<b>两行的 vitamin 栏是空的</b>，那是陷阱题的证据。<span class="pg">p043</span>'],
['<b>脂溶性四个</b>：A D E K <b>不在辅酶那章</b>，在<b>脂类章的萜类一节</b>',
 '“The book puts A, D, E and K among the terpenes, because that is where they come from biochemically. It says phytol is what gives vitamin K its lipophilic character.”',
 '<b>分开放的依据是生源，不是溶解度表。</b><span class="pg">p183</span>'],
['<b>为什么分界要紧</b>：<b>能存起来，也能积起来</b>',
 '“A water-soluble vitamin in excess is excreted. A fat-soluble one dissolves in the body fat and stays, so it can be stored and it can also build up.”',
 '存的那一半书有（p187 类胡萝卜素存在脂肪和神经组织里），<b>毒性那一半是通用的</b>。'],
['<b>矿物质两类</b>：<b>催化的金属</b>（Zn Mg Mn Fe Cu K Na，书逐个点名）· <b>电解质</b>（体液里带电荷）',
 '“Some are catalytic. Zinc in alcohol dehydrogenase, iron in the cytochromes, copper in tyrosinase. The others are electrolytes, ions in the body fluids that carry charge rather than do chemistry.”',
 '金属的三种角色：<b>活性中心 · 底物的桥 · 稳定结构</b>。<span class="pg">p043</span>'],
['<b>铁是走读的例子</b>：<b>血红素</b>（四个吡咯氮箍住，两个位置空着）· <b>铁硫中心</b>（半胱氨酸的 SH 加游离硫离子）',
 '“Same atom, two quite different housings, and the same job. It passes electrons by changing between iron two-plus and iron three-plus.”',
 '<b>整格接卡 25。</b><span class="pg">p046</span>'],
['<b>陷阱</b>：<b>辅酶不是维生素</b>；维生素是原料，辅酶是成品',
 '“The vitamin comes in from the diet, and the coenzyme is what the cell builds out of it. The book shows it in its own table: two coenzymes have an empty vitamin column.”',
 '<b>这条一定会被问。</b>反过来也别说错：A 和 D 就不是辅酶。']
],

/* ---------------- 演练：四段逐字稿 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'四句话，把题面四个词全部交代掉',
  p:['“A <b>vitamin</b>, in this textbook’s definition, is an organic substance indispensable for the vital functions of the cell that the organism has to be supplied with in its food. Two words there carry the weight. It is organic, so a vitamin is a molecule and not an element. And the criterion is the diet rather than the chemistry.”',
     '“A <b>mineral</b>, in this context, is an inorganic chemical element that the organism needs. It is taken in as a salt and it works as an ion. This textbook does not use the word mineral. It sorts the elements by how much of the body mass they make up. At the top are hydrogen, oxygen, carbon, nitrogen and phosphorus. Below them come calcium, magnesium, sulfur, sodium, potassium, iron and chlorine. Then copper, zinc, cobalt, manganese, iodine and molybdenum.”',
     '“<b>Metabolism</b> is the whole set of chemical conversions running inside the living cell. It is the breakdown routes that take a nutrient apart and release energy, together with the building routes that put new molecules together. Nearly every step of it is catalysed by an enzyme.”',
     '“So here is their <b>role</b>, in one sentence, before any names. Neither vitamins nor minerals are fuel, and neither is building material. They are what the enzymes need in order to work at all. Most of the water-soluble vitamins are the precursors of <b>coenzymes</b>, and a coenzyme is the non-protein organic part an enzyme needs. Many of the minerals are the metal centres of enzymes, and the rest carry charge in the body fluids.”'],
  note:'<b>四句话把题面上每个实词都交代掉了</b>：vitamin（第一句）· mineral（第二句）· metabolism（第三句）· role（第四句）。<br><b>他嘴里多半只有 “What is a vitamin?”</b>——卷面上多出来的 “and minerals”、“the role of”、“in metabolism” 三个限定词，<b>是他准备挖的三个方向</b>，不是你要背的题干。所以开口就要自带这个结构。<br><b>第四句是整题的脊梁</b>，说完它之后，后面所有名字都只是例子。<b>别把名字放在机制前面。</b>'},
 {tag:'段 2 · general', h:'一条反应就把机制演完 —— 投入、产出、净账',
  p:['“The quickest way to show what that means is one reaction, and this textbook prints it on page one hundred and sixty-eight. It is the oxidative decarboxylation of pyruvate, the step that connects glycolysis to the citric acid cycle. Pyruvate plus NAD-plus plus coenzyme A gives acetyl-CoA plus carbon dioxide plus NADH and a free proton.”',
     '“In go three things that are consumed: one pyruvate, one NAD-plus and one coenzyme A. Out come one acetyl-CoA, one carbon dioxide and one NADH. But the reaction needs more than that. The textbook lists the cofactors of the complex. Thiamine diphosphate, lipoic acid and coenzyme A do the work, and FAD and NAD-plus then regenerate the lipoic acid.”',
     '“That is five cofactors in one step, and four of them are made from vitamins. Thiamine is vitamin B-one. Coenzyme A is built on pantothenic acid. FAD comes from riboflavin. NAD-plus comes from nicotinic acid. The fifth, lipoic acid, is not a vitamin, and I will come back to why that matters.”',
     '“And the net of it is this. Only the substrate is used up. Every one of those cofactors is handed a group, passes it on, and comes back to where it started. That is what makes them catalytic rather than nutritive, and it is why a vitamin is needed in a trace amount while a nutrient is needed in bulk.”'],
  note:'<b>代谢题一定要有账，而且要三行齐</b>：投入 / 产出 / <b>总结</b>。只报产出是半张账——他一句「那消耗了什么」就能把你问停。<br><b>这一段的设计</b>：用一条反应同时答掉四件事——维生素干什么、为什么只要一点点、辅酶和维生素差在哪、代谢的哪个位置。<b>而且这条反应是卡 24 和卡 25 的入口</b>，他顺着走过去你正好接得住。'},
 {tag:'段 3 · 稍展开', h:'水溶性一遍 · 脂溶性另一章 · 矿物质两类 · 铁做例子',
  p:['“The textbook has one table for the coenzymes, table three point one. Three columns: the coenzyme, the group it transfers, and the vitamin behind it. NAD-plus and NADP-plus carry hydrogen and electrons, from nicotinic acid, and I met them in the citric acid cycle and the respiratory chain. FMN and FAD carry hydrogen and electrons, from riboflavin. Thiamine diphosphate carries an aldehyde, and that is the pyruvate step I just described. Coenzyme A carries acyl groups, in the cycle and in fatty acid oxidation and synthesis. Biotin carries carbon dioxide, so it is the coenzyme of the carboxylases. Pyridoxal phosphate carries amino groups, so it is the coenzyme of amino acid metabolism.”',
     '“The table is not the whole list. The running text adds tetrahydrofolate for one-carbon groups, S-adenosylmethionine for methyl groups, coenzyme B-twelve with its cobalt, and biopterin. It also adds ATP itself, which the book treats as a coenzyme in its own right.”',
     '“The fat-soluble vitamins are handled quite differently, and that is worth saying out loud. A, D, E and K are not in the enzyme chapter at all. They are in the lipid chapter, among the terpenes, the compounds built up from isoprene units, because biochemically they are isoprenoid. The book says the phytol tail is what gives vitamin K its lipophilic character. The difference matters in practice. A water-soluble vitamin in excess is excreted, while a fat-soluble one dissolves in the body fat and stays, so it can be stored and it can also build up.”',
     '“On the mineral side the same split into two jobs. Some metals are catalytic, and the textbook names them one by one: zinc in alcohol dehydrogenase, magnesium in a phosphatase, iron in the cytochromes, copper in tyrosinase, potassium in pyruvate kinase, sodium in the ATPase. It also says what a metal ion does inside an enzyme. It can be part of the active centre, it can bridge the substrate onto the enzyme, or it can stabilise the spatial structure. The others are electrolytes, ions in the body fluids that carry charge rather than do chemistry.”',
     '“Iron is the example I would give, because the same atom appears in two quite different housings. In haem it sits at the centre of a flat ring of four pyrrole units joined by methine bridges, with four bonds to the four nitrogens and two more free above and below the plane. In the iron-sulfur proteins there is no ring. The iron is held by the SH groups of cysteines and by free sulfide ions. Either way it does one thing. It passes electrons by changing between iron two-plus and iron three-plus.”'],
  note:'<b>顺序是有讲究的</b>：先走表（因为表就是他脑子里的地图），再说表外还有，再把脂溶性分出去，最后矿物质。<b>矿物质放在后面不是因为次要，是因为它的两类分法要借前面「催化」这个词。</b><br><b>每个辅酶都挂到一张已有的卡上</b>：NAD/FAD → 卡 24、25；CoA → 卡 24 和脂肪酸；TPP → 丙酮酸那一步；biotin → 羧化；PLP → 氨基酸。<b>这样他往哪儿挖，你都落在已经背过的卡上。</b>'},
 {tag:'段 4 · 留口子', h:'主动给他一个抓手，而且落在她的主场：配位、竞争洗脱、Kd',
  p:['“There is one part of this I meet every week, and it is the metal half rather than the vitamin half. A metal ion held by the side chains of a protein is exactly the chemistry I use to purify protein.”',
     '“On an immobilised metal column the histidines of a His-tag take two of the coordination positions on a nickel ion, in the same way the four pyrrole nitrogens take four positions around the iron of a haem. I elute with imidazole, which competes for those same positions. I strip the column with EDTA, which takes the metal away altogether.”',
     '“That gives a good picture of what a metalloenzyme is. A metalloenzyme stripped of its metal is the same thing as a stripped column. The protein is still there, folded, and it does nothing. The textbook says the same thing from the other direction: the cofactors are thermally stable while the protein part is not.”',
     '“And the strength of that coordination is a dissociation constant like any other. That is the number I measure when I characterise a binder, so this question runs straight into the one thing I can talk about all afternoon.”'],
  note:'<b>段 4 必须落在主场，这一段落在 Kd 和纯化上</b>——两样她都答得住（见 LOGIC §4 的 IMAC 复盘）。<br><b>为什么这条桥是安全的</b>：配位键、咪唑竞争洗脱、EDTA 剥金属，全部是「台面上能看见或能量到」的化学，按 LOGIC §5 该答；再往下（哪个空轨道、八面体、d 电子数）才是停止线。<b>他顺着走，你走到卡 02（Kd）；他往下钻，你有一句现成的停止句。</b><br><b>最后那句「热稳定」是书给的</b>（p043：<i>the cofactors of enzymes are thermally stable, while the protein part of the enzyme molecule is not</i>），而且它同时是⑤那一格的钥匙——见追问「怎么证明一个酶需要辅酶」。'}
],

/* ---------------- why 三层 ---------------- */
why:{
 rungs:[
  ['为什么酶非要一个辅酶不可？蛋白质自己不能干吗？','因为<b>二十种侧链提供的化学太窄</b>：酸、碱、亲核基团、一个巯基，再加几个能配位金属的氮和氧。<b>没有任何一条侧链能握住一个氢负离子、一个酰基或者一个二氧化碳。</b>书 <span class="pg">p043</span> 把辅酶的功能定义成「基团、原子或电子的<b>中间搬运工</b>」——被搬的正好是蛋白质自己抓不住的那几样东西。<b>辅酶是蛋白质用氨基酸造不出来的那件工具。</b>'],
  ['那这些工具为什么要从食物拿，不自己合成？','因为<b>合成通路本身是可以丢的</b>。这些分子并不难做——植物和大量细菌都在做，书里的叶酸、核黄素、B₁₂ 都有生物合成的来路。<b>动物丢掉的是通路，不是能力。</b>一条通路如果食物长期稳定地把产物送上门，维持它的基因就不再受选择压力，慢慢就坏掉了。<b>所以「维生素」这份清单不是化学清单，是一份历史记录——记的是某个祖先的食谱里稳定有什么。</b>'],
  ['那丢了为什么没被淘汰？','因为在丢的那个环境里<b>它一点代价都没有</b>：产物照样有，还省下了造它的酶。<b>代价是后来才出现的</b>——换了食谱、上了船、只吃精米，缺口才变成病。<b>维生素缺乏症是环境变了以后，一笔早就签好的账被追讨。</b>再往下就是「哪一支在什么时候丢了哪条通路」。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that we are asking which lineage lost which biosynthetic pathway and when. That is evolutionary biology rather than biochemistry.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'认',
  src:'img/p043_tab31_coenzymes.jpg',
  t:'Table 3.1 —— 这道题的地图（书 p043）',
  cap:'<b>这张是「认」，而且它是这张卡最值钱的一张。</b>他摆出来问「这是什么」，答：“This is the textbook’s table of coenzymes, the group each one transfers, and the vitamin behind it.”'
    + '<br><b>三列</b>：左列是<b>辅酶</b>，中列是<b>搬的基团</b>，右列是<b>维生素</b>。十行。'
    + '<br><br>⚠⚠ <b>这张表是拿来看「分组」的，不是拿来看结构的。</b>哪个维生素变成哪个辅酶、那个辅酶搬什么——<b>这三件事连起来就是这道题</b>。<b>化合物的结构式她另有专门的 app，这里一个都不用背。</b>'
    + '<br><br><b>十行一眼分成四组（这就是「分组」的意思）</b>：'
    + '<br>① <b>搬氢和电子的五个</b>：NAD⁺ · NADP⁺ · FMN · FAD · Coenzyme Q。中列全写着 H⁺, e⁻。'
    + '<br>② <b>搬醛的一个</b>：TPP。'
    + '<br>③ <b>搬酰基的两个</b>：Coenzyme A 和 Lipoamide（后者中列写的是 acyl, H，两样都搬）。'
    + '<br>④ <b>各搬一样的两个</b>：Biotin 搬 CO₂，Pyridoxal phosphate 搬 –NH₂。'
    + '<br><br><b>右列有两个空格，那两个空格本身就是一道题</b>：<b>Coenzyme Q</b> 和 <b>Lipoamide</b> 的维生素栏是空的。'
    + '<br><b>被问就答</b>：“Two of them have no vitamin. Coenzyme Q and lipoamide are made by the body itself, so they are not dietary requirements. That is exactly the line between a vitamin and a coenzyme. A vitamin is what we cannot make.”'
    + '<br>⚠ <b>速背 07 的中文写着「最后两行 vitamin 那一栏是空的」，看图就知道不是最后两行</b>——空的是<b>第 5 行（Coenzyme Q）和第 8 行（Lipoamide）</b>。速背里的 <code>tbl</code> 十行本身是对的，只有那句话的位置说法要按图改。'
    + '<br>⚠ 右列的维生素名印的是捷克拼法，但 <b>riboflavin · thiamine · biotin · pyridoxine</b> 几乎一样；写作「烟酸」和「泛酸」的那两行是 <b>nicotinic acid</b> 和 <b>pantothenic acid</b>，它们后面都跟着一个意思是「酸」的词。',
  src2:'Biochemie, Tab. 3.1, p043 · 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p044_nad_hydride.jpg',
  t:'NAD⁺ 收氢那一步 —— 书自己画的（书 p044）',
  cap:'<b>这张是「认」。</b>它只画一件事：<b>氢加在吡啶环的 C-4 上</b>。'
    + '<br>左边是氧化型，环里的氮带<b>正电</b>；右边是还原型，<b>C-4 上多了一个 H</b>，正电没了。下面那一行 <code>NAD⁺ ＋ 2H ⇌ NADH ＋ H⁺</code> 是书印的配平式。'
    + '<br>两边底下的 <b>Rib–P–P–Ado</b> 是同一条尾巴：核糖、两个磷酸、腺苷——<b>这就是「二核苷酸」四个字的全部内容</b>。'
    + '<br><br><b>看到图要说的那一段</b>：“The nicotinamide coenzymes are dinucleotides. One base is nicotinamide, the other adenine. The hydrogen is added to carbon four of the pyridine ring, which then loses its positive charge and its aromatic character. NADP differs only by one extra phosphate on the two-prime position of the adenosine.”'
    + '<br><br><b>这一格把两件事接在一起</b>：维生素那一栏写的是<b>烟酸</b>，而图上被改造的正是<b>烟酰胺</b>那个环——<b>吃进去的是维生素，干活的是这个环</b>。',
  src2:'Biochemie, p044 · 原图裁切，未修改（与卡 x-cur 共用同一张图）'},

 {k:'认',
  src:'img/p045_fad_oxidised_reduced.jpg',
  t:'FAD 的氧化型和还原型 —— 她在 N-1 / N-10 上的护身符（书 p045）',
  cap:'<b>这张是「认」，而且它的主要用途是当证据</b>（LOGIC §16：图可以当护身符）。'
    + '<br><b>左边是氧化型，右边是还原型，中间写着 ＋2H / −2H。</b>'
    + '<br><br><b>要在图上数出来的那件事</b>：左边三个环里，<b>那个连着长链的氮已经有三根键了</b>——链就挂在它身上，<b>它没有空位再接一个氢</b>。而右边还原型上多出来的两个 <b>H</b>，画在<b>另外两个氮</b>上。'
    + '<br><br>⚠ <b>书正文 <span class="pg">p045</span> 印的是氢加在 N¹ 和 N¹⁰</b>（已回 320 dpi 确认不是 OCR 错），<b>可这张图自己反着说</b>：带链的那个氮就是 N-10。通用写法是 <b>N-1 和 N-5</b>。'
    + '<br><b>考场说法（先给模糊但正确的）</b>：“The hydrogen adds across two ring nitrogens of the isoalloxazine system.”'
    + '<br><b>被逼问再给这一层，并且把图指给他</b>：“The textbook prints N-one and N-ten, but its own structure on the same page puts the ribityl chain on N-ten, so that nitrogen has no free valence. The generally accepted positions are N-one and N-five.”'
    + '<br><b>这是「用这本书的一半打这本书的另一半」</b>——比引外部教材稳得多。'
    + '<br><br>图下那行字是「黄素腺嘌呤二核苷酸（氧化型和还原型）」，也就是图注本身。右半那个腺嘌呤加核糖，就是名字里「二核苷酸」的另一半。',
  src2:'Biochemie, p045 · 300 dpi 原图裁切，未修改（图注在框内下方）'},

 {k:'认',
  src:'img/p046_haem_iron.jpg',
  t:'血红素 —— 铁坐在哪里（书 p046）',
  cap:'<b>这张是「认」，而且要数的是数量，不是结构。</b>结构式她另有 app，这里只数四件事。'
    + '<br><br><b>四个数，看图一眼数得出来</b>：'
    + '<br>① <b>四个五元环</b>（吡咯核）围成一圈。'
    + '<br>② <b>四座桥连着它们</b>，图上写成 <b>HC＝</b> 和 <b>＝CH</b>，就是次甲基桥。'
    + '<br>③ 正中间写着 <b>Fe</b>，上面那个小 <b>(II)</b> 是它的价态；<b>四根虚线连到四个氮</b>。'
    + '<br>④ 底下那三个字母就是这个基团的名字（<b>haem</b>）；左边和下面伸出来的两条 <b>HOOC</b> 是丙酸侧链。'
    + '<br><br><b>看到图要说的那一段</b>：“A haem is four pyrrole rings joined by four methine bridges into one flat conjugated ring. The iron sits in the middle, held by the four ring nitrogens. It still has two more coordination positions, perpendicular to the plane, and those are what bind the protein on one side and oxygen or a substrate on the other. Electron transfer is the iron changing between Fe two-plus and Fe three-plus.”'
    + '<br><br><b>这一格是「矿物质」那半张卡的落点</b>：铁不是燃料，是<b>换价的中心</b>。书还说不同细胞色素的差别只在<b>吡咯环上挂什么取代基</b>，那一点点差别给了它们<b>不同的电化学电位</b>——所以呼吸链才排得出顺序（接卡 25）。'
    + '<br>⚠ <b>配位化学到这里停。</b>「两个垂直的配位位置」能在实验台上看见（一氧化碳抢的就是那一个），<b>再往下的空轨道、八面体、d 电子数是停止线</b>（LOGIC §5）。',
  src2:'Biochemie, p046 · 400 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p183_terpene_family_tree.jpg',
  t:'萜类的家谱 —— A · D · E · K 住在这棵树上（书 p183）',
  cap:'<b>这张是「认」，而且它是这张卡最反直觉的一格</b>：<b>书从不说「脂溶性维生素」四个字</b>，它把 A D E K 放进了脂类那一章的萜类小节。<b>分类的依据在这棵树上，不在溶解度表上。</b>'
    + '<br><br><b>树怎么读（从上往下，每一层加五个碳）</b>：'
    + '<br>① 最上面两个 <b>C₅</b>：<b>IPP</b> 和 <b>DMAPP</b>，它们互为异构体，箭头是双向的。这一层叫<b>半萜</b>。'
    + '<br>② 两个 C₅ 并起来 → <b>geranyl-PP，C₁₀</b> → <b>单萜</b>。'
    + '<br>③ 再加一个 IPP → <b>farnesyl-PP，C₁₅</b> → <b>倍半萜</b>。'
    + '<br>④ 再加一个 IPP → <b>digeranyl-PP，C₂₀</b> → <b>二萜</b>；同一层往右两个 C₁₅ 并起来 → <b>squalene，C₃₀</b> → <b>三萜</b>（<b>甾体就从这儿来</b>）。'
    + '<br>⑤ 两个 C₂₀ 并起来 → <b>phytoene，C₄₀</b> → <b>四萜</b>（<b>胡萝卜素就在这一层</b>）。'
    + '<br>右边那一列方框里写的就是这六个类名，<b>它们的拼法跟英文几乎一样，一眼认得出</b>。'
    + '<br><br><b>看到图要说的那一段</b>：“The textbook does not group A, D, E and K by solubility. It puts them in the lipid chapter, among the terpenes, which are built from five-carbon isoprene units. Vitamin A is retinol, and its precursor is the tetraterpene carotene, at the bottom of this scheme. Vitamin D comes from a steroid, which comes from squalene on the right. Vitamin K and vitamin E carry a chain derived from phytol.”'
    + '<br><br><b>为什么这棵树值得记</b>：它把<b>三个看起来无关的东西接成一条线</b>——胆固醇、胡萝卜素、维生素 K 的尾巴。<b>他从「脂溶性维生素」走出去，多半就走到这棵树上。</b>'
    + '<br>⚠ <b>书里没有任何每日需要量</b>，这张图上也没有。被问剂量就说这本书不给数（LOGIC §11：不编不存在的数）。',
  src2:'Biochemie, p183 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p183_phytol_vitamin_k.jpg',
  t:'植醇和维生素 K —— 那条尾巴就是「脂溶」的全部理由（书 p183）',
  cap:'<b>这张是「认」，它把上一张的结论落到一个具体分子上。</b>'
    + '<br><b>上面那条长链下面标的就是植醇（<b>phytol</b>）</b>，一条带四个甲基分支的二十碳链，右端一个 <b>CH₂OH</b>。'
    + '<br><b>下面是维生素 K 的骨架</b>：左边一个苯环并着一个含两个 <b>O</b> 的六元环（那是醌），环上一个 <b>CH₃</b>，再挂一条重复的支链 <b>(CH₂CH＝C(CH₃)CH₂)ₙ–H</b>。'
    + '<br><b>右边两行标注给的是同一个骨架的两个成员</b>：<b>vitamin K₁</b>（叶绿醌，<b>n＝4</b>）和 <b>vitamin K₂</b>（甲萘醌，<b>n＝8</b>）——<b>差别只有 n</b>。'
    + '<br><br><b>看到图要说的那一段</b>：“The head of vitamin K is a quinone, and the tail is an isoprenoid chain derived from phytol. The textbook says the phytol chain is what gives vitamin K its lipophilic character. K-one and K-two are the same molecule with a different number of isoprene units, four and eight.”'
    + '<br><br><b>这一格的价值在于它给了一个能说出口的因果</b>：<b>不是「K 是脂溶性的，所以它在脂类章」，是「K 挂着一条植醇来的疏水尾巴，所以它是脂溶性的」</b>。书自己那句话就是这个意思。'
    + '<br><b>同一条尾巴还出现在两处</b>：维生素 <b>E</b> 上，和<b>辅酶 Q</b> 上——<b>所以呼吸链那张卡里 Q 为什么泡在膜里，答案也在这张图上</b>（接卡 25）。'
    + '<br>⚠ <b>n＝4 和 n＝8 这两个数是图上印的</b>，可以报。<b>别把它读成「维生素 K 有两种」</b>——书写的是一个通式加两个命名的成员。',
  src2:'Biochemie, p183, 植醇与维生素 K 结构 · 350 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is a vitamin?',
  ez:'“It is an organic substance indispensable for the vital functions of the cell. And the organism has to be supplied with it in the food. That is this textbook’s definition. The criterion in it is the diet. It is not the chemistry. Their role is not to be fuel. It is not to be building material either. Most water soluble ones are precursors of coenzymes. A coenzyme is the intermediate carrier of a group. It carries the atoms or electrons a reaction must move.”',
  ezcn:'<b>维生素 ＝ 对细胞生命活动不可缺少、而机体必须由食物供给的有机物。</b><b>这是书的定义，而里面的判据是膳食，不是化学。</b><b>它们在代谢里的角色既不是燃料也不是建材：大多数水溶性维生素是辅酶的前体，而辅酶是「某个反应要搬的基团、原子或电子」的中间载体。</b><b>烟酸 → NAD，核黄素 → FAD，硫胺素 → TPP，泛酸 → 辅酶 A，吡哆醇 → 磷酸吡哆醛。</b><b>脂溶性的 A · D · E · K 是另一回事，这本书把它们放在脂质那一章。</b>',
 mean:'<b>他嘴里多半只有这一句。</b>卷面写的是 “explain the role of vitamins and minerals in metabolism”，但口试从最短的问法起步——<b>剩下的结构要你自己接上去</b>：定义 → 机制那一句 → 挑几个 → 分别对应哪种反应。',
 say:'“An organic substance indispensable for the vital functions of the cell that the organism has to be supplied with in its food. That is this textbook’s definition, and the criterion in it is the diet rather than the chemistry. Their role in metabolism is not to be fuel and not to be building material. Most of the water-soluble ones are the precursors of coenzymes, and a coenzyme is the intermediate carrier of the group, the atoms or the electrons that a reaction has to move. Nicotinic acid becomes NAD, riboflavin becomes FAD, thiamine becomes thiamine diphosphate, pantothenic acid becomes coenzyme A, and pyridoxine becomes pyridoxal phosphate. The fat-soluble ones, A, D, E and K, are a separate story, and this book puts them in the lipid chapter.”'},

{q:'And the minerals — what do they do?',
  ez:'“They do two jobs. Some are catalytic. A metal ion is the cofactor of the enzyme. The textbook names which metal sits in which enzyme. Zinc is in alcohol dehydrogenase. Iron is in the cytochromes. Copper is in tyrosinase. It also gives three roles for such an ion. It can be part of the active centre. It can bridge the substrate onto the enzyme. Or it can stabilise the spatial structure. The others are electrolytes. Those carry charge rather than do chemistry.”',
  ezcn:'<b>两件事。</b><b>① 催化：金属离子作为酶的辅因子——书点名了哪个金属在哪个酶里：锌在醇脱氢酶、铁在细胞色素、铜在酪氨酸酶、钾在丙酮酸激酶、钠在 ATP 酶；它还给了离子的三种角色：作为活性中心的一部分 · 把底物桥接到酶上 · 稳定空间结构。</b><b>② 电解质：溶在体液里的离子，负责带电荷而不是做化学。</b><b>还有两个容易忘的元素：硫（在辅酶 A 和铁硫中心里）和磷（ATP 里的磷酸）。</b>',
 mean:'卷面上多出来的那一半，<b>他会单独问</b>。要给两类，不要背元素表。',
 say:'“Two jobs. Some are catalytic: a metal ion is the cofactor of the enzyme, and the textbook names which metal sits in which enzyme. Zinc in alcohol dehydrogenase, iron in the cytochromes, copper in tyrosinase, potassium in pyruvate kinase, sodium in the ATPase. It also gives three roles for the ion. It can be part of the active centre, it can bridge the substrate onto the enzyme, or it can stabilise the spatial structure. The others are electrolytes, ions dissolved in the body fluids that carry charge rather than do chemistry. And two elements are easy to forget: sulfur, which is in coenzyme A and in the iron-sulfur centres, and phosphorus, which is the phosphate of ATP.”'},

{q:'What exactly do you mean by their role in metabolism?',
  ez:'“Metabolism is the set of chemical conversions in the cell. Nearly every step is catalysed by an enzyme. Vitamins and minerals are not what is converted. They are part of the machinery that converts. The vitamin comes in from the diet. The cell builds a coenzyme out of it. The coenzyme then carries the group the reaction moves. The mineral may sit in the active centre and change valency. Or it holds the fold together. The clearest demonstration is the oxidative decarboxylation of pyruvate.”',
  ezcn:'<b>代谢是细胞里那一整套化学转化，而几乎每一步都由酶催化。</b><b>维生素和矿物质不是「被转化的东西」，它们是「做转化的那套机器」的一部分：维生素从食物进来，细胞用它造出辅酶，辅酶再去搬那个反应要搬的基团；矿物质要么坐在活性中心里改变价态，要么把折叠撑住，要么在体液里带电荷。</b><b>最干净的示范是丙酮酸的氧化脱羧：一步反应需要五个辅因子，其中四个来自维生素，而五个没有一个被消耗掉。</b>',
 mean:'「role」这个词他会单独拎出来。<b>要答「在机制里的位置」，不是重复定义。</b>',
 say:'“Metabolism is the set of chemical conversions in the cell, and nearly every step is catalysed by an enzyme. Vitamins and minerals are not what is converted. They are part of the machinery that does the converting. The vitamin comes in from the diet, the cell builds a coenzyme out of it, and the coenzyme carries the group the reaction moves. The mineral either sits in the active centre and changes valency, or it holds the fold together, or it carries charge in the fluid. The cleanest demonstration is the oxidative decarboxylation of pyruvate. One step needs five cofactors and four of them come from vitamins, yet not one of the five is consumed.”'},

{q:'Name the coenzymes and say which vitamin each one comes from.',
  ez:'“N A D plus and N A D P plus carry hydrogen and electrons. Their vitamin is nicotinic acid. F M N and F A D carry hydrogen and electrons too. Their vitamin is riboflavin. Thiamine diphosphate carries an aldehyde. It comes from thiamine. Coenzyme A carries an acyl group. It comes from pantothenic acid. Biotin carries carbon dioxide. Pyridoxal phosphate carries an amino group. It comes from pyridoxine. The table also lists two with no vitamin at all.”',
  ezcn:'<b>照书那张表逐行背：NAD⁺ 和 NADP⁺ 搬氢和电子，来自烟酸；FMN 和 FAD 搬氢和电子，来自核黄素；焦磷酸硫胺素搬醛基，来自硫胺素；辅酶 A 搬酰基，来自泛酸；生物素搬 CO₂；磷酸吡哆醛搬氨基，来自吡哆醇。</b><b>表里还列了辅酶 Q 和硫辛酰胺，而它们的维生素那一栏是空的——那个空白本身就是要点。</b><b>表外正文还补了四氢叶酸（来自叶酸）· S-腺苷甲硫氨酸 · 辅酶 B12 · ATP。</b>',
 mean:'<b>这是书的 Table 3.1 逐行背</b>。他问得出这句，说明他脑子里就是这张表。',
 say:'“NAD-plus and NADP-plus carry hydrogen and electrons, and the vitamin is nicotinic acid. FMN and FAD carry hydrogen and electrons, and the vitamin is riboflavin. Thiamine diphosphate carries an aldehyde, from thiamine. Coenzyme A carries an acyl group, from pantothenic acid. Biotin carries carbon dioxide. Pyridoxal phosphate carries an amino group, from pyridoxine. The table also lists coenzyme Q and lipoamide with no vitamin at all, and that blank is the point. Outside the table the text adds tetrahydrofolate from folic acid, S-adenosylmethionine, coenzyme B-twelve and ATP.”'},

{q:'What is the difference between a vitamin and a coenzyme?',
  ez:'“The vitamin is the raw material. The coenzyme is the finished tool. A vitamin is defined by nutrition. It has to come in with the food. A coenzyme is defined by enzymology. It is the non protein organic part that carries a group. The cell converts one into the other. And the mapping is not one to one. Nicotinic acid gives both N A D and N A D P. Riboflavin gives both F M N and F A D. Some coenzymes have no vitamin behind them at all.”',
  ezcn:'<b>维生素是原料，辅酶是做好的工具。</b><b>维生素由营养学定义——它必须随食物进来；辅酶由酶学定义——它是替酶搬运某个基团的那个非蛋白有机部分。</b><b>细胞把前者变成后者，而且不是一一对应：烟酸给出 NAD 和 NADP 两个，核黄素给出 FMN 和 FAD 两个；还有些辅酶背后根本没有维生素，所以辅酶 Q 和硫辛酰胺那一栏是空的。</b>',
 mean:'<b>这张卡的核心陷阱，几乎一定会被问。</b>答得利落等于把整题钉死。',
 say:'“The vitamin is the raw material and the coenzyme is the finished tool. A vitamin is defined by nutrition, by the fact that it has to come in with the food. A coenzyme is defined by enzymology, as the non-protein organic part that carries a group for the enzyme. The cell converts the one into the other, and the mapping is not one to one. Nicotinic acid gives both NAD and NADP. Riboflavin gives both FMN and FAD. And some coenzymes have no vitamin behind them at all, which is why the vitamin column is empty for coenzyme Q and for lipoamide.”'},

{q:'Which vitamins are fat-soluble, and why does that matter?',
  ez:'“They are A and D and E and K. This textbook never names the class. But it separates them all the same. It puts them in the lipid chapter among the terpenes. Biochemically they are isoprenoid. It says the phytol tail gives vitamin K its lipophilic character. Why it matters is storage. A water soluble vitamin in excess is excreted. A fat soluble one dissolves in the body fat and stays. The book gives the storage half directly.”',
  ezcn:'<b>A · D · E · K。</b><b>这本书从来没给这一类起名字，但它照样把它们分开了：放在脂质那一章的萜类里，因为它们在生化上是类异戊二烯的；书还说正是植醇尾巴赋予维生素 K 亲脂的性质。</b><b>为什么重要？在于储存：水溶性的多了就排掉，脂溶性的溶在体脂里留下来。</b><b>书直接给了储存那一半：动物吃进去的类胡萝卜素会沉积在脂肪和神经组织里，作为维生素 A 原的储备。</b>⚠ <b>「会蓄积到有害水平」是通用知识，不是这本书说的。</b>',
 mean:'这是脂溶性那一格。<b>要给「为什么分开」，不是只给四个字母。</b>',
 say:'“A, D, E and K. This textbook never names the class, but it separates them all the same. It puts them in the lipid chapter among the terpenes, because biochemically they are isoprenoid, and it says the phytol tail is what gives vitamin K its lipophilic character. Why it matters is storage. A water-soluble vitamin in excess is excreted, while a fat-soluble one dissolves in the body fat and stays. The book gives the storage half directly. Carotenoids eaten by animals are laid down in fat and nerve tissue as a reserve of provitamin A. That they can also build up to a harmful level is general knowledge rather than something this book says.”'},

{q:'Why do we need vitamin C?',
  ez:'“Because collagen cannot be finished without it. After translation three hydroxylases act on collagen. They sit in the cisternae of the endoplasmic reticulum. They hydroxylate proline and lysine residues. This textbook says the reaction needs four things. Oxygen. Two oxoglutarate. L ascorbic acid. And iron two plus ions. Without the hydroxyproline the triple helix is unstable. And that is scurvy. Chemically ascorbic acid is a sugar acid. It is strongly reducing.”',
  ezcn:'因为<b>没有它，胶原做不完</b>。<b>翻译之后，内质网腔里三个特异的羟化酶把胶原上的脯氨酸和赖氨酸残基羟化，而书说这个反应需要四样：氧气 · 2-氧代戊二酸 · L-抗坏血酸 · Fe²⁺。</b><b>没有羟脯氨酸，胶原三螺旋就不稳定——那就是坏血病。</b><b>化学上抗坏血酸是一个糖酸，一个带烯二醇基的内酯；像所有烯二醇一样还原性很强，交出氢就变成脱氢抗坏血酸。</b>⚠ <b>「它在那里的作用是让羟化酶的铁保持还原态」是通用解释，书只说这四样都必需。</b>', odd:1,
 mean:'<b>听起来完全不像生化题，答案却整段在书里。</b>LOGIC §9 点名要有这一条。注意书把抗坏血酸放在糖那一章，不在辅酶那一章。',
 say:'“Because collagen cannot be finished without it. After translation, three specific hydroxylases in the cisternae of the endoplasmic reticulum hydroxylate proline and lysine residues of collagen, and this textbook says the reaction needs oxygen, two-oxoglutarate, L-ascorbic acid and iron two-plus ions. Without the hydroxyproline the collagen triple helix is unstable, and that is scurvy. Chemically ascorbic acid is a sugar acid, a lactone with an endiol group, and like all endiols it is strongly reducing. It gives up hydrogen and becomes dehydroascorbic acid. So its job there is to keep the iron of the hydroxylase in the reduced state.”',
 tail:'羟化反应与四个必需成分在 <span class="pg">p112</span>，抗坏血酸的化学与「抗坏血病维生素」这个名字在 <span class="pg">p152</span> <span class="pg">p153</span>。<b>「保持铁处于还原态」这一句是通用的解释，书只说这四样都必需。</b>此题同时是卡 13（翻译后修饰）和卡 01（胶原）的入口。'},

{q:'Why can eating a lot of raw egg white make you ill?',
  ez:'“Because egg white contains avidin. Avidin is a protein that binds biotin. It inactivates it. This textbook says so directly. Large amounts of raw egg white can bring on a biotin deficiency. Biotin is the coenzyme that carries carbon dioxide. So what is really blocked is carboxylation. Acetyl Co A to malonyl Co A is one example. Pyruvate to oxaloacetate is another. It is also the same binding I use in the laboratory.”',
  ezcn:'因为<b>蛋清里有抗生物素蛋白（avidin），它结合生物素并使之失活</b>。<b>书直接说：膳食里大量生吃蛋清可以在机体内引起生物素缺乏。</b><b>生物素是搬 CO₂ 的那个辅酶，所以真正被卡住的是羧化反应——脂肪酸合成里乙酰-CoA → 丙二酰-CoA，糖异生里丙酮酸 → 草酰乙酸。</b><b>而这也正是我在实验室里用的那个结合：生物素和链霉亲和素是最牢的非共价配对之一。</b>', odd:1,
 mean:'<b>书里有，而且是一句完整的话。</b>入口越不像生化题，越容易把人问懵，而答案就在卡上。',
 say:'“Because egg white contains avidin, a protein that binds biotin and inactivates it. This textbook says large amounts of raw egg white in the diet can bring on a biotin deficiency in the organism. Biotin is the coenzyme that carries carbon dioxide, so what is really being blocked is carboxylation. Acetyl-CoA to malonyl-CoA in fatty acid synthesis, and pyruvate to oxaloacetate in gluconeogenesis. It is also the same binding I use in the laboratory, since biotin and streptavidin are one of the tightest non-covalent pairs there is.”',
 tail:'<span class="pg">p049</span>。<b>最后一句是她的主场</b>，顺手接回去。'},

{q:'Why is blood plasma so like seawater?',
  ez:'“Because the composition was fixed early. And then it was kept. This textbook points out one thing. The total amount of ions differs a lot between organisms. But the proportion of the main cations is remarkably constant. That is in the extracellular fluid. And it is close to that of seawater. It gives the atomic ratio of sodium to potassium to calcium. It is roughly one hundred to two to two. The book draws the conclusion itself. The sea played an important part at the origin of life.”',
  ezcn:'因为<b>这个组成是很早就定下来、然后一直保着的</b>。<b>书指出：各生物体内离子的总量差别很大，但细胞外液里主要阳离子的比例却惊人地恒定，而且接近海水——它给的原子比是 Na : K : Ca 约 100 : 2 : 2。</b><b>书自己下的结论是：这暗示海洋在生命起源或其早期阶段起过重要作用。</b><b>细胞没有重新发明自己的环境，它只是圈住了一小片海水，然后花能量维持里面跟外面不一样。</b>⚠ <b>「细胞内的比例是反的、维持它要花 ATP」是通用知识，别报数。</b>', odd:1,
 mean:'书 <span class="pg">p012</span> 自己把这个观察和它的结论都写出来了。<b>这类问题答得出，听起来就不像在背书。</b>',
 say:'“Because the composition was fixed early and then kept. This textbook points out that although the total amount of ions differs a lot between organisms, the proportion of the main cations in the extracellular fluid is remarkably constant, and close to that of seawater. It gives the atomic ratio of sodium to potassium to calcium as roughly one hundred to two to two. The book says this suggests the sea played an important part at the origin of life or in its early stages. The cell did not reinvent its surroundings. It enclosed a little seawater and then spent energy keeping the inside different.”',
 tail:'比例、恒定性和海水那句结论全是书的（p012）。<b>「细胞内的比例是反的、维持它要花 ATP」是通用知识，别报数。</b>'},

{q:'Why does boiling an extract sometimes destroy an activity that you can bring back?',
  ez:'“Because the two halves behave differently in heat. This textbook states it plainly. The cofactors of enzymes are thermally stable. The protein part is not. So boiling an extract destroys the protein. The small cofactor survives. Now add that boiled extract back. Add it to a dialysed extract that lost its small molecules. The activity returns. That is how the first coenzyme was found. The old name for it was cozymase.”',
  ezcn:'因为<b>酶的两半对热的反应不一样</b>：<b>书明说辅因子是热稳定的，而蛋白那一半不是。</b><b>所以把提取液煮沸，蛋白被毁掉，小分子辅因子活下来；再把煮过的提取液加回到一份已经透析、丢掉了小分子的提取液里，活性就回来了。</b><b>第一个辅酶就是这么被发现的（Harden 和 Young，1905 年），它当年的名字叫 cozymase。</b><b>同一套逻辑给出了现代的词：蛋白 ＋ 辅因子 ＝ 全酶，只有蛋白 ＝ 脱辅酶蛋白。</b>', odd:1,
 mean:'<b>这是⑤「当年怎么搞清楚的」那一格，而且书给了前提。</b>他问不出这句，你也可以自己把它端上去当段 4 的备用抓手。',
 say:'“Because the two halves of the enzyme behave differently in heat. This textbook states it plainly: the cofactors of enzymes are thermally stable while the protein part is not. So if you boil an extract the protein is destroyed and the small cofactor survives. Add the boiled extract back to a dialysed extract that has lost its small molecules, and the activity returns. That is how the first coenzyme was found, by Harden and Young in nineteen hundred and five, and it is why the old name for it was cozymase. The same logic gives the modern words. Protein plus cofactor is the holoenzyme, protein alone is the apoenzyme.”',
 tail:'热稳定性、holoenzyme、apoenzyme 全在 <span class="pg">p043</span>；Harden 与 Young 的年份在卡 17。<b>透析和煮沸这两步操作是通用的实验逻辑，书只给了前提。</b>'},

{q:'Vitamins are organic and minerals are not — so why are they in the same exam question?',
  ez:'“Because the question is not about what they are made of. It is about where they sit in a reaction. Both of them are cofactors. The textbook says so in one sentence. Some enzymes are the polypeptide alone. In others the active form contains a non protein component. That component is the cofactor. It can be a metal ion. Or it can be an organic molecule. That kind is a coenzyme. So the enzyme treats them the same way.”',
  ezcn:'因为<b>这道题问的不是它们由什么构成，而是它们在一个反应里坐在哪个位置——两者都是辅因子</b>。<b>书用一句话说完了：有些酶就是那条多肽本身，另一些的活性形式还含有一个非蛋白组分，也就是辅因子；辅因子可以是金属离子，也可以是有机分子（那就是辅酶），有些酶两样都有。</b><b>所以维生素和矿物质放在一起，是因为酶对它们的态度一样：需要它们 · 不被它们改变 · 没有它们就不工作。</b>', odd:1,
 mean:'<b>这个问法听起来像在挑刺，其实是在给你机会说出那句最像研究者的话。</b>',
 say:'“Because the question is not about what they are made of. It is about where they sit in a reaction. Both of them are cofactors. The textbook says so in one sentence. Some enzymes are the polypeptide alone. In others the active form also contains a non-protein component, the cofactor. A cofactor can be a metal ion, or an organic molecule, which is a coenzyme. Some enzymes have both. So vitamins and minerals belong together because the enzyme treats them the same way. It needs them, it is not changed by them, and it cannot work without them.”',
 tail:'<span class="pg">p043</span>。<b>这一条是整题的分类依据</b>，也是卡 18 的第三格。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'逐字稿里没交代完的名词，他会一个一个拎出来问。', items:[
{r:'高', q:'What is a coenzyme?',
    ez:'“A coenzyme is the non protein organic component. Some enzymes need it in their active form. The textbook states its function. It is an intermediate carrier. It carries the functional group, the atoms or the electrons. Those are transferred in the reaction the enzyme catalyses. Most coenzymes correspond in structure to vitamins. Or to derivatives of vitamins.”',
    ezcn:'<b>辅酶 ＝ 某些酶在活性形式下需要的那个非蛋白的有机组分。</b>书给了它的功能：<b>它是一个中间载体，搬运这个酶所催化的反应里被转移的基团、原子或电子</b>。<b>大多数辅酶在结构上对应某个维生素，或者维生素的衍生物。</b>',
 en:'“The non-protein organic component that some enzymes need in their active form. The textbook says its function is to be an intermediate carrier of the functional group, the atoms or the electrons transferred in the reaction the enzyme catalyses. Most coenzymes are molecules corresponding in structure to vitamins or to their derivatives.”',
 cn:'<span class="pg">p043</span> 的原句，几乎逐字。<b>最后那半句是这道题的引信</b>：「多数辅酶在结构上对应维生素或其衍生物」——<b>「多数」是书自己加的限定词，跟着加，别说成「都」</b>。完整的辅因子分层在卡 18。'},
{r:'高', q:'Cofactor, coenzyme, prosthetic group — how do the three relate?',
    ez:'“Cofactor is the umbrella term. It is the non protein part an enzyme needs. It can be a metal ion. It can also be an organic molecule. An organic cofactor is a coenzyme. A coenzyme bound very tightly is a prosthetic group. A loosely bound one comes and goes. Kinetically it behaves as a substrate. Protein plus cofactor is the holoenzyme. The protein alone is the apoenzyme.”',
    ezcn:'<b>辅因子 cofactor 是总称</b>：<b>酶需要的那个非蛋白部分，可以是金属离子，也可以是有机分子</b>。<b>有机的辅因子就叫辅酶 coenzyme</b>。<b>结合得非常紧的辅酶叫辅基 prosthetic group</b>；<b>结合松的来来去去，动力学上表现得像底物</b>。<b>蛋白 ＋ 辅因子 ＝ 全酶 holoenzyme；光是蛋白 ＝ 脱辅酶 apoenzyme。</b>',
 en:'“Cofactor is the umbrella term. It is the non-protein part an enzyme needs, and it can be a metal ion or an organic molecule. An organic cofactor is a coenzyme. A coenzyme bound very tightly is called a prosthetic group. A loosely bound one comes and goes, and kinetically it behaves as a substrate. Protein plus cofactor is the holoenzyme, and the protein alone is the apoenzyme.”',
 cn:'全在 <span class="pg">p043</span>，卡 18 有完整版。<b>这道题里最好的一对例子就在手边</b>：黄素是黄素蛋白的<b>辅基</b>（p045），生物素靠异肽键挂在赖氨酸上也是<b>辅基</b>（p049），硫辛酸靠酰胺键挂在蛋白上（p047）；而 <b>NAD⁺ 来去自由，动力学上像第二个底物</b>。<b>这个区分正好解释了那张账</b>：五个辅因子里三个不离开复合物，两个（CoA 和 NAD⁺）进进出出。'},
{r:'中', q:'What do you mean by a mineral? Is that a chemical term?',
  ez:'“It is a dietary word rather than a chemical one. I would say so up front. Here it means an inorganic element the organism needs. It is taken in as a salt. And it works as an ion. This textbook does not use the word at all. It classes the elements by how much of the body mass they make up. Those classes are macrobiogenic and oligobiogenic and microbiogenic. Trace elements make a further group.”',
  ezcn:'⚠ <b>「矿物质」是一个营养学的词，不是化学术语——这一点我会先讲明。</b><b>在这里它指的是机体需要的无机元素：以盐的形式摄入，以离子的形式起作用。</b><b>这本书根本不用这个词；它按元素占体重的比例分类：常量生物元素 · 少量生物元素 · 微量生物元素，再加上一组痕量元素。</b>',
 en:'“It is a dietary word rather than a chemical one, and I would say so. Here it means an inorganic chemical element the organism needs, taken in as a salt and working as an ion. This textbook does not use the word at all. It classes the elements by how much of the body mass they make up, into macrobiogenic, oligobiogenic and microbiogenic, with a further group of trace elements.”',
 cn:'<span class="pg">p011</span>。<b>被逼问就给那个反例</b>：“Carbon, nitrogen and oxygen are in those lists too, so the everyday word mineral does not map onto any one of the book’s bands.” <b>这是 LOGIC §11 那条规矩的一个实例</b>：他要一个边界，而边界是人划的。<b>先说这个词是营养学的，再给书的分档，最后给反例（C N O 也在里面）。</b>比硬给一个定义稳得多。'},
{r:'中', q:'What is a metalloenzyme?',
  ez:'“It is an enzyme that contains metal ions as its cofactors. That is the textbook’s own term. It gives the common ones. Zinc is in alcohol dehydrogenase. Magnesium is in a phosphatase. Manganese is in hexokinase. Iron is in the cytochromes. Copper is in tyrosinase. Potassium is in pyruvate kinase. Sodium is in the A T Pase. Elsewhere it adds two more. Zinc in carboxypeptidase and molybdenum in xanthine oxidase.”',
  ezcn:'<b>金属酶 ＝ 以金属离子作为辅因子的酶（这是书自己的术语）。</b><b>书给了常见的几个：锌在醇脱氢酶、镁在某个磷酸酶、锰在己糖激酶、Fe²⁺／Fe³⁺ 在细胞色素、铜在酪氨酸酶、钾在丙酮酸激酶、钠在 ATP 酶。</b><b>它在别处还补了两个：锌在羧肽酶、钼在黄嘌呤氧化酶。</b>',
 en:'“An enzyme that contains metal ions as its cofactors. That is the textbook’s own term. It gives the common ones: zinc in alcohol dehydrogenase, magnesium in a phosphatase, manganese in hexokinase, iron two-plus and three-plus in the cytochromes, copper in tyrosinase, potassium in pyruvate kinase and sodium in the ATPase. Elsewhere it adds zinc in carboxypeptidase and molybdenum in xanthine oxidase.”',
 cn:'<span class="pg">p043</span>（已回 300 dpi 核过）与 <span class="pg">p037</span>。<b>⚠ 书写 hexokinase 是 Mn²⁺</b>，通用写法是 <b>Mg-ATP</b>。按书报，被追问说明差别：“The book prints manganese for hexokinase. The generally taught cofactor there is magnesium, as the Mg-ATP complex.”'}
]},
{g:'为什么类', gn:'卡上给了结论没给理由的地方 —— 他插刀就插在这里。', items:[
{r:'高', q:'Why does an enzyme need a coenzyme at all? Why can the protein not do it alone?',
    ez:'“Because the twenty side chains offer a narrow set of chemistry. They give acids and bases. They give nucleophiles. They give one thiol. And they give nitrogens and oxygens that can hold a metal. Not one of them can hold a hydride. None can hold an acyl group. None can hold a molecule of carbon dioxide. Those are exactly what the coenzymes carry. So a coenzyme is a tool. It is a tool the protein cannot build out of amino acids.”',
    ezcn:'因为<b>那二十种侧链提供的化学是很窄的一套</b>：<b>酸、碱、亲核试剂、一个巯基，以及几个能抓金属的氮和氧</b>。<b>它们里面没有任何一个能抓住一个氢负离子、一个酰基、或者一个 CO₂ 分子</b>——<b>而那正是辅酶搬运的东西</b>。<b>所以辅酶是一件蛋白用氨基酸造不出来的工具。</b>',
 en:'“Because the twenty side chains offer a narrow set of chemistry. Acids, bases, nucleophiles, one thiol, and some nitrogens and oxygens that can hold a metal. Not one of them can hold a hydride, or an acyl group, or a molecule of carbon dioxide. Those are exactly the things the coenzymes carry. So a coenzyme is a tool the protein cannot build out of amino acids.”',
 cn:'<b>这是 why 三层的第一层，也是这题最容易被追到的地方。</b>书没有正面说这句话，它是从 p043 那句「辅酶是基团、原子或电子的中间搬运工」推出来的，<b>推的过程要说出来，别说成「书说的」</b>。<br><b>反过来还有一个漂亮的印证</b>：能用侧链干的事，酶就真的不用辅酶——书 <span class="pg">p043</span> 开头就说「有些酶的分子只由多肽链构成」。<b>是哪一类书没说</b>，通用上那多半是水解酶，靠的正是酸碱催化和亲核进攻。<b>而需要辅酶的，几乎都是氧化还原和基团转移。</b>'},
{r:'高', q:'Why is only a trace of a vitamin needed?',
    ez:'“Because it is catalytic and not consumed. Take the pyruvate step. The coenzyme is handed a group. It passes that group on. Then it comes back to where it started. So one molecule can turn over many substrate molecules. There is no limit in principle. A nutrient is different. It is taken apart. Its atoms end up in carbon dioxide, water or new tissue. A cofactor does not.”',
    ezcn:'因为<b>它是催化性的，不被消耗</b>。<b>以丙酮酸那一步为例：辅酶接过一个基团，再把它传出去，然后回到出发时的状态</b>——<b>所以一个分子可以周转掉无数个底物分子</b>。<b>营养物则不同：它被拆掉，原子最后进了 CO₂、水或者新组织；辅因子不会。</b>',
 en:'“Because it is catalytic and not consumed. In the pyruvate step the coenzyme is handed a group, passes it on, and comes back to where it started. One molecule can therefore turn over an unlimited number of substrate molecules. A nutrient is taken apart and its atoms end up in carbon dioxide, water or new tissue. A cofactor is not.”',
 cn:'<b>「催化量」这三个字的物理内容就是这一段。</b>被追问「那需要多少」时的第二层：“The amount you need is set by how many enzyme molecules there are and how fast the cofactor is degraded, not by how much substrate goes through.”——<b>这一句是通用推理，书里没有</b>。<b>他要每天多少毫克，别编。</b>照 LOGIC §11 答：「这个量不是由一个生化常数定的，是由测量约定定的——不同机构给的推荐量不一样，因为终点指标选得不一样。」'},
{r:'高', q:'Why are the fat-soluble ones treated so differently?',
    ez:'“There are two reasons. The book gives the first one. Biochemically they are isoprenoid. So the book files them with the terpenes. That is in the lipid chapter, not with the coenzymes. The second reason is physical. The hydrophobic chain changes what happens to a surplus. A fat soluble vitamin dissolves in the body fat. And it stays there. So it is storable. It can also accumulate. Their jobs differ too. A, D, E and K are not coenzymes at all.”',
    ezcn:'<b>两个理由。</b><b>书给的那个</b>：<b>它们在生物化学上是类异戊二烯的，所以书把它们归进脂质那一章的萜类里，而不是放在辅酶里</b>。<b>第二个是物理上的</b>：<b>疏水链改变了「多出来的那部分」的去向</b>——<b>脂溶性维生素溶进体脂就留下了，所以既能储存，也会蓄积</b>。<b>而且它们的职能也不同：A、D、E、K 根本不是辅酶。</b>',
 en:'“Two reasons, and the book gives the first. Biochemically they are isoprenoid, so the book files them with the terpenes in the lipid chapter rather than with the coenzymes. And physically the hydrophobic chain changes what happens to a surplus. A fat-soluble vitamin dissolves in the body fat and stays, which makes it storable and also makes it accumulate. Their jobs are different too, because A, D, E and K are not coenzymes at all.”',
 cn:'<span class="pg">p183</span>–<span class="pg">p187</span>；维生素 K 与 γ-羧化在 <span class="pg">p112</span>（卡 13 有）。<b>⚠「在尿里排掉」和「积累到有害」这两句书里没有，是通用知识</b>，说的时候标出来。书给的是存储那一半：类胡萝卜素被动物吃下去<b>大部分原样排出</b>，一部分<b>存在脂肪和神经组织里当前维生素 A 的储备</b>（p187）。<br><b>三个的角色各一句，被追问再给</b>：“Vitamin A works through the cis to trans change of a conjugated chain when it absorbs light. Vitamin K is required by one specific carboxylase. Vitamin E works as an antioxidant.”<br><b>抗氧化那一条书给得很具体</b>：类胡萝卜素能结合<b>活性氧形式</b>——单线态氧、超氧阴离子自由基、氢过氧自由基（p187）。'},
{r:'中', q:'Why iron? Why not some other metal?',
  ez:'“Because iron has two stable oxidation states. They are close in energy. So moving between them is cheap. And because the protein can tune where that couple sits. The textbook makes that point itself. The individual cytochromes differ only in the substituents. Those sit on the pyrrole rings. And that is what gives them different electrochemical potentials. Below that we are in coordination chemistry.”',
  ezcn:'因为<b>铁有两个稳定的氧化态，而且能量上靠得近，所以在两者之间来回很便宜；而且蛋白可以调这对电对落在哪里。</b><b>书自己就说了：各个细胞色素之间的差别只在吡咯环上的取代基，而正是那些取代基给了它们不同的电化学电位。</b>⚠ <b>再往下就是配位化学，不是生物化学了。</b>',
 en:'“Because iron has two stable oxidation states that are close in energy, so moving between them is cheap. And because the protein can tune where that couple sits. The textbook makes the point itself. The individual cytochromes differ only in the substituents on the pyrrole rings, and that is what gives them different electrochemical potentials. Below that we are in coordination chemistry rather than biochemistry.”',
 cn:'<span class="pg">p046</span>。再给一句就够：“Haem and an iron-sulfur cluster are two different surroundings for the same atom, and they sit at different points on the scale.”<br><b>「换配体就换电位」这一句是能答的台面化学</b>（LOGIC §5）；再往下问哪个轨道、什么场强，就用停止句。<b>电位这条线直接走进卡 25 的 Table 6.2。</b>'}
]},
{g:'怎么发现的', gn:'这一组书里只给前提，结论要自己接。<b>但正因为书里没有，说得出就特别显眼。</b>', items:[
{r:'中', q:'How would you show that an enzyme needs a coenzyme?',
  ez:'“Split the extract by size and by heat. First dialyse it. The small molecules leave and the protein stays. So the activity is lost. Then boil a second portion. The protein is destroyed. The cofactor survives. This textbook says cofactors are thermally stable. It says the protein part is not. Now add the boiled portion back. Add it to the dialysed one. The activity returns.”',
  ezcn:'<b>把提取液按「大小」和「耐热」各切一刀。</b><b>先透析：小分子跑掉、蛋白留下，活性没了。</b><b>再把另一份煮沸：蛋白被毁掉、辅因子活下来（书说辅因子是热稳定的，蛋白那一半不是）。</b><b>最后把煮过的那份加回到透析过的那份里——活性回来了。</b>',
 en:'“Split the extract by size and by heat. Dialyse it, and the small molecules leave while the protein stays, so the activity is lost. Then boil a second portion. The protein is destroyed but the cofactor survives, because this textbook says cofactors are thermally stable while the protein part is not. Add the boiled portion back to the dialysed one and the activity returns.”',
 cn:'<b>热稳定性那句是书给的前提</b>（<span class="pg">p043</span>），透析与煮沸回加是通用的实验设计。年份见卡 17，被追问就说：“That is the experiment that found the first coenzyme, Harden and Young in nineteen hundred and five, and the old name cozymase comes from it.”<b>这一条是这道题的⑤格，答得出就不像只背过表的人。</b><br>顺手还能接一句现代版：“The same logic is why an apoenzyme can be reconstituted by adding the cofactor back, and why EDTA inactivates a metalloenzyme reversibly.”'},
{r:'中', q:'How do you follow a reaction that uses NAD?',
  ez:'“By absorbance at three hundred and forty nanometres. The textbook gives the spectra. N A D H and N A D P H have a marked maximum there. The oxidised forms do not. So one wavelength lets you watch the reaction in real time. For the flavins you use colour instead. Oxidised flavin is yellow. The reduced form is colourless.”',
  ezcn:'<b>看 340 nm 处的吸光度。</b><b>书给了光谱：NADH 和 NADPH 在那里有明显的吸收峰，而氧化型没有——所以同一个波长就能实时跟踪这个酶反应。</b><b>黄素则是看颜色：氧化型是黄色的，还原型无色。</b>',
 en:'“By absorbance at three hundred and forty nanometres. The textbook gives the spectra. NADH and NADPH have a marked absorption maximum there and the oxidised forms do not. So the same wavelength lets you watch the enzyme reaction in real time. For the flavins you use colour instead. Oxidised flavin is yellow and the reduced form is colourless.”',
 cn:'<span class="pg">p044</span>（NAD 的光谱图）与 <span class="pg">p045</span>（黄素的颜色）。<b>340 nm 是书给的数，报</b>。<b>这一条同时是「测量方法的限制」那块地基的入口</b>：能测的是辅酶的氧化态，测不到的是它在酶上的哪一步。'}
]},
{g:'陷阱', gn:'这几条几乎每次都会被问，而且都是一句话说错就掉分的那种。', items:[
{r:'实测', q:'So a coenzyme is a vitamin?',
    ez:'“No. The vitamin is the raw material. The coenzyme is the finished tool. Nicotinic acid is the vitamin. The cell builds N A D plus out of it. They are not even the same molecule. The vitamin is nicotinic acid. The part the coenzyme carries is nicotinamide. The mapping is also not one to one. Nicotinic acid gives N A D. It gives N A D P as well.”',
    ezcn:'<b>不是。维生素是原料，辅酶是做好的工具。</b>烟酸是维生素，细胞拿它造出 <b>NAD⁺</b>。<b>两者连分子都不是同一个</b>：维生素是<b>烟酸</b>，辅酶上搬东西的那部分是<b>烟酰胺</b>。<b>而且不是一对一</b>——烟酸同时给出 <b>NAD</b> 和 <b>NADP</b>。',
 en:'“No. The vitamin is the raw material and the coenzyme is the finished tool. Nicotinic acid is the vitamin, and the cell builds NAD-plus out of it. They are not even the same molecule. The vitamin is nicotinic acid and the part the coenzyme carries is nicotinamide. And the mapping is not one to one. Nicotinic acid gives both NAD and NADP.”',
 cn:'<b>这是这张卡的头号陷阱。</b>证据不用外借：书自己的 Table 3.1 里 <b>Coenzyme Q 和 Lipoamide 两行的 vitamin 栏是空的</b>（<span class="pg">p043</span>，已回原图核过）。<b>「人体自己能做这两个」是通用知识，书只留了空格</b>，说的时候分清楚。<br>反方向也别说错：<b>不是所有维生素都变辅酶</b>——A 和 D 都不是。所以准确说法是 “most of the water-soluble vitamins are precursors of coenzymes”。'},
{r:'高', q:'Are minerals a source of energy?',
    ez:'“No. Neither minerals nor vitamins are oxidised for energy. In a heterotroph energy comes from oxidising carbon and hydrogen. And it ends up in A T P. A mineral does something else. It sits in an enzyme and changes valency. Or it holds charge in a fluid. Iron in a cytochrome does pass electrons. But it ends every cycle in the state it started in.”',
    ezcn:'<b>不是。矿物质和维生素都不是被氧化来产能的。</b><b>异养生物的能量来自氧化碳和氢，最后落在 ATP 上</b>。<b>矿物质干的是别的事：要么坐在酶里改变价态，要么在体液里维持电荷</b>。<b>细胞色素里的铁确实传电子，但它每一个循环结束时都回到出发时的状态。</b>',
 en:'“No. Neither minerals nor vitamins are oxidised for energy. Energy in a heterotroph comes from oxidising carbon and hydrogen, and it ends up in ATP. A mineral either sits in an enzyme and changes valency, or it holds charge in a fluid. Iron in a cytochrome does pass electrons, but it ends every cycle in the state it started in.”',
 cn:'<b>「维生素供给能量」这句话会被顺口说出来，说了就掉分。</b>先否掉，再说它们是什么。<b>铁那半句是主动堵一个反问</b>——他很可能接一句「可是铁在呼吸链里参与了能量转换啊」。'},
{r:'高', q:'Is coenzyme Q a vitamin?',
    ez:'“Not in this book’s own table. Coenzyme Q is listed among the coenzymes. It transfers hydrogen and electrons. But its vitamin column is left empty. Lipoamide’s column is empty too. The book does give coenzyme Q an origin. It says several hydrophobic chains come from phytol. Those are vitamin K two, vitamin E and coenzyme Q. So it is a coenzyme with no vitamin behind it.”',
    ezcn:'<b>在这本书自己的表里不是。</b><b>辅酶 Q 被列在辅酶里（传递氢和电子），但它的「维生素」那一栏是空的</b>，<b>硫辛酰胺那一栏也是空的</b>。<b>书倒是给了辅酶 Q 一个来源</b>：<b>它说维生素 K₂、维生素 E 和辅酶 Q 的疏水链在生物化学上都来自植物醇</b>。<b>所以它是一个「背后没有维生素」的辅酶。</b>',
 en:'“Not in this book’s own table. Coenzyme Q is listed among the coenzymes, transferring hydrogen and electrons, but its vitamin column is left empty, and so is lipoamide’s. The book does give coenzyme Q an origin. It says the hydrophobic chains of vitamin K-two, vitamin E and coenzyme Q all come biochemically from phytol. So it is a coenzyme with no vitamin behind it.”',
 cn:'<span class="pg">p043</span>（空格）与 <span class="pg">p183</span>（phytol 来源）。<b>「人自己能合成 Q，所以它不是维生素」这句推论要标成自己的推论</b>，书只给了空格和来源。<b>Q 在呼吸链里的位置见卡 25</b>：书 p045 说它在<b>黄素蛋白和细胞色素之间当中间人</b>。'},
{r:'高', q:'Where exactly does the hydrogen go on a flavin?',
    ez:'“The redox part is the isoalloxazine ring. That is the three fused rings of the flavin. It takes two hydrogens at once. I would give the positions carefully. This textbook contradicts itself here. The text prints N one and N ten. But its own structural formula is on the same page. That formula puts the ribityl chain on N ten. So that nitrogen has no free valence. The generally accepted positions are N one and N five.”',
    ezcn:'<b>氧化还原发生在异咯嗪环上</b>（<b>黄素那三个并合的环</b>），<b>一次接两个氢</b>。⚠ <b>位置我会说得小心，因为这本书在这里自相矛盾</b>：<b>正文印的是 N-1 和 N-10，但同一页上它自己的结构式把核糖醇链画在 N-10 上——那个氮根本没有空价</b>。<b>通行接受的位置是 N-1 和 N-5。</b>',
 en:'“The redox part is the isoalloxazine ring, the three fused rings of the flavin, and it takes two hydrogens at once. I would give the position carefully, because this textbook contradicts itself here. The text prints N-one and N-ten. But its own structural formula on the same page puts the ribityl chain on N-ten, so that nitrogen has no free valence. The generally accepted positions are N-one and N-five.”',
 cn:'<span class="pg">p045</span>，<b>已回 320 dpi 原图确认：书上印的就是 N¹ 和 N¹⁰，不是 OCR 错</b>。这是<b>全书第二例内部矛盾</b>（第一例是 p029 的 α-helix n+3／n+4）。处理方式一样：<b>用书的一半打书的另一半，别说「别的教材说」</b>。<br><b>考场策略</b>：先给模糊但正确的「加在异咯嗪环的两个氮上」，被逼问数字再摊开这段。<b>这条该记进 <code>book/BOOK_ERRATA.md</code>，本窗口只新建了这一个文件，没有写进去。</b>'},
{r:'中', q:'Does NAD take both hydrogens?',
  ez:'“No, and the textbook’s own equation shows it. It prints N A D plus plus two H. That gives N A D H plus H plus. Two hydrogens leave the substrate. That is two electrons and two protons. N A D H takes two electrons and one proton. That is a hydride. It goes onto carbon four of the pyridine ring. The other proton goes into solution. A flavin is different. It takes both hydrogens.”',
  ezcn:'⚠ <b>不是，书自己的方程就写着：NAD⁺ ＋ 2H → NADH ＋ H⁺。</b><b>底物交出两个氢 ＝ 两个电子 ＋ 两个质子；NADH 拿走的是两个电子加一个质子（一个氢负离子），接在吡啶环的 C-4 上，另一个质子进溶液。</b><b>黄素不一样：它两个氢都拿。</b>',
 en:'“No, and the textbook’s own equation shows it. It prints NAD-plus plus two H gives NADH plus H-plus. Two hydrogens leave the substrate, which is two electrons and two protons. NADH takes two electrons and one proton, a hydride, onto carbon four of the pyridine ring. The other proton goes into solution. A flavin is different. It takes both hydrogens.”',
 cn:'<span class="pg">p044</span>（式子与 C-4）、<span class="pg">p045</span>（黄素的 +2H）。<b>这个区别在呼吸链里是承重的</b>：卡 25 那条「带质子的载体和只带电子的载体交替，才使质子转运有方向」，靠的就是黄素和醌能带质子而铁硫中心和细胞色素只带电子。'}
]},
{g:'相邻考点', gn:'从这道题走出去，他多半走这三个方向。每个一句话就能接住。', items:[
{r:'高', q:'Which of these show up in the citric acid cycle and the respiratory chain?',
    ez:'“Nearly all of them. The cycle needs coenzyme A. That brings the acetyl group in. It needs three N A D plus and one F A D. Those take the hydrogen out. It needs thiamine diphosphate with lipoic acid. Those do the oxidative decarboxylation of two oxoglutarate. The chain then needs more. It needs flavins and iron sulfur centres. It needs iron in the cytochromes. It needs copper in complex four. And it needs coenzyme Q. So one vitamin deficiency can stop the whole of aerobic metabolism.”',
    ezcn:'<b>几乎全都出现。</b><b>循环需要辅酶 A（把乙酰基带进来）、三个 NAD⁺ 和一个 FAD（把氢取出去）、硫胺素二磷酸配硫辛酸（做 α-酮戊二酸的氧化脱羧）</b>。<b>呼吸链还要：黄素、铁硫中心、细胞色素里的铁、复合体 Ⅳ 里的铜、以及辅酶 Q</b>。<b>所以一种维生素缺乏就能把整个有氧代谢停掉。</b>',
 en:'“Nearly all of them. The cycle needs coenzyme A to bring the acetyl group in, and three NAD-plus and one FAD to take the hydrogen out. It needs thiamine diphosphate with lipoic acid for the oxidative decarboxylation of two-oxoglutarate. The chain then needs flavins, iron-sulfur centres, iron in the cytochromes, copper in complex four, and coenzyme Q. So one vitamin deficiency can stop the whole of aerobic metabolism.”',
 cn:'卡 24 与卡 25。<b>2-氧代戊二酸走同一个机制是书说的</b>（<span class="pg">p138</span> <span class="pg">p169</span>）：<i>The oxidative decarboxylation of 2-oxoglutaric acid takes place by the mechanism of oxidative decarboxylation</i>。<b>说出「同一个机制」比再背一遍五个辅因子有用。</b>'},
{r:'中', q:'Where does biotin appear in fatty acid metabolism?',
  ez:'“At the committed step. Fatty acid synthesis starts by making malonyl Co A. It makes it from acetyl Co A. The reaction is a carboxylation. It depends on A T P. The enzyme is acetyl Co A carboxylase. And that enzyme requires biotin. The book prints the equation with manganese and biotin under the arrow. The same phosphopantetheine arm appears again. It is one of the two S H groups of the acyl carrier protein.”',
  ezcn:'<b>在那个「承诺步骤」上。</b><b>脂肪酸合成的第一步是把乙酰-CoA 变成丙二酰-CoA：一次羧化，依赖 ATP，酶是乙酰-CoA 羧化酶，而这个酶需要生物素。</b><b>书把方程印出来，箭头下面标着锰和生物素。</b><b>另外，辅酶 A 里携带酰基的那条磷酸泛酰巯基乙胺臂，也正是酰基载体蛋白两个 —SH 中的一个。</b>',
 en:'“At the committed step. Fatty acid synthesis starts by converting acetyl-CoA to malonyl-CoA. The reaction is a carboxylation, it depends on ATP, and the enzyme is acetyl-CoA carboxylase, which requires biotin. The book prints the equation with manganese and biotin under the arrow. And the same phosphopantetheine arm that carries the acyl group in coenzyme A is also one of the two SH groups of the acyl carrier protein.”',
 cn:'<span class="pg">p188</span>。<b>最后那一句是分</b>：书自己把 ACP 的那个巯基指回 CoA（<i>also a part of the CoA molecule — see chapter 3.2.1</i>）——<b>第三章和第八章被书自己缝在了一起，跟着缝。</b>'},
{r:'中', q:'You mentioned vitamin K. Where does it act?',
  ez:'“In a post translational modification. The textbook describes a carboxylase. It sits on the inner wall of the E R membrane. It carboxylates glutamate residues. They become gamma carboxyglutamyl groups. And the textbook says that carboxylase depends on vitamin K. It was first found on the plasma glycoproteins of blood clotting. So vitamin K does not become a coenzyme. It is the requirement of one specific enzyme.”',
  ezcn:'<b>作用在一个翻译后修饰上。</b><b>书描述了内质网膜内侧壁上的一个羧化酶：它把谷氨酸残基羧化成 γ-羧基谷氨酰基，而这个羧化酶依赖维生素 K；它最早是在参与血液凝固的血浆糖蛋白上被发现的。</b>⚠ <b>所以维生素 K 并不变成辅酶——它是某一个特定酶的需求。</b>',
 en:'“In a post-translational modification. The textbook describes a carboxylase on the inner wall of the ER membrane that carboxylates glutamate residues to gamma-carboxyglutamyl groups, and it says the carboxylase depends on vitamin K. It was first found on the plasma glycoproteins involved in blood clotting. So vitamin K does not become a coenzyme. It is the requirement of one specific enzyme.”',
 cn:'<span class="pg">p112</span>，卡 13 的第四种修饰。<b>「为什么抗凝药跟维生素 K 有关」是通用知识，书里 0 命中</b>，被问到就标出来。'}
]},
{g:'桥回主场', gn:'段 4 那条桥，被追问时的第二层。<b>接住了就落在卡 02（Kd）上。</b>', items:[
{r:'高', q:'You purify proteins — is a His-tag on a nickel column the same chemistry as a metalloenzyme?',
    ez:'“It is the same kind of bond, yes. The histidines of the tag donate a lone pair. They donate it to the immobilised nickel. So they take coordination positions on it. Four pyrrole nitrogens do the same around the iron of a haem. I elute with imidazole. Imidazole competes for the same positions. I strip the column with E D T A. That chelates the metal away. The difference is what the metal is for. On my column it is only a handle.”',
    ezcn:'<b>是同一类键。</b><b>标签上的组氨酸把孤对电子给固定在柱子上的镍，占据它的配位位置</b>——<b>血红素里四个吡咯氮围着铁占的也是配位位置</b>。<b>我用咪唑洗脱，因为咪唑争的是同样的配位位置；我用 EDTA 剥柱，因为它把金属螯合走</b>。<b>差别在于金属是干什么用的：在我的柱子上它只是一个把手。</b>',
 en:'“It is the same kind of bond, yes. The histidines of the tag donate a lone pair to the immobilised nickel and take coordination positions on it, the way the four pyrrole nitrogens take four positions around the iron of a haem. I elute with imidazole, which competes for the same positions. I strip the column with EDTA, which chelates the metal away. The difference is what the metal is for. On my column it is only a handle.”',
 cn:'<b>这是她的实测主场</b>（LOGIC §4：IMAC 那一串追问她全接住了）。<b>chelate 在别的卡上没有正面定义，所以就地交代</b>：一个分子用两个以上的原子同时抓住一个金属离子，像钳子。EDTA 有六个抓手，所以它能把金属整个拿走。被追问「那酶里的金属呢」就接书的三条：“In a metalloenzyme it is either part of the active centre, or a bridge to the substrate, or something that holds the fold together.” <b>再往下（八面体、d 电子、场强）是停止线。</b>'},
{r:'中', q:'Is the strength of a metal-protein bond a dissociation constant like the ones you measure?',
  ez:'“Yes, and that is the honest way to say it. A coordination bond is a binding equilibrium. So it has a dissociation constant like any other. Free metal times free protein over the complex. That is why imidazole works as a competitor. And why E D T A works as a sink. Measuring that kind of constant is what I do.”',
  ezcn:'<b>是，而且这么说才诚实。</b><b>配位键就是一个结合平衡，所以它跟别的一样有解离常数：游离金属 × 游离蛋白 ÷ 复合物。</b><b>这也正是咪唑能当竞争剂、EDTA 能当「汇」的原因。</b><b>而测这一类常数，就是我做的事。</b>',
 en:'“Yes, and that is the honest way to say it. A coordination bond is a binding equilibrium, so it has a dissociation constant like any other. Free metal times free protein over the complex. It is why imidazole works as a competitor and why EDTA works as a sink. Measuring that kind of constant is what I do.”',
 cn:'<b>落到卡 02。</b>Kd 的定义、单位、半数占据那条曲线全在那张卡上，<b>这里只给一句，别展开</b>——按 LOGIC §12，答八分就停。<b>被追问再给第二层：竞争洗脱是把 Kd 表观值抬高，EDTA 是把游离金属浓度压低，两者作用在同一个式子的不同项上。</b>'},
{r:'中', q:'Do vitamins or trace metals matter in your own cultures?',
  ez:'“Yes, in a practical way. A defined medium has to supply them. It supplies the vitamins and trace metals the cells cannot make. That is exactly the list this question is about. The medium may be short of one. Then the culture grows badly. And the expression drops. But I would not overstate it. I buy the medium already defined.”',
  ezcn:'<b>有，而且是很实际的那种。</b><b>一份成分确定的培养基必须提供细胞自己造不出来的那些维生素和痕量金属——也就是这道题讲的那份清单。</b><b>缺了其中一个，培养物长得差，表达也掉。</b>⚠ <b>但我不会说得过头：培养基我是买现成配好的。</b>',
 en:'“Yes, in a practical way. A defined medium has to supply the vitamins and the trace metals the cells cannot make, and that is exactly the list this question is about. If the medium is short of one of them the culture grows badly and the expression drops. But I would not overstate it. I buy the medium already defined.”',
 cn:'<b>诚实地短。</b>培养基的具体配方书里 0 命中，<b>别报任何一个组分的浓度</b>。<b>不点具体课题、不展开</b>——见 `DRILL.md` 的三条机制。'}
]}
]
});
