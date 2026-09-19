/* 卡 24 · What are the main steps of the citric acid cycle?
   题库 #24（S3 Biochemistry 12）
   出处 Biochemie OCR p134–p141（§6.2.2），呼吸链在 p141–p146（§6.2.4）
   Ruojin 2026-09-12 点名要全覆盖：「creb 这么重要还是全部涵盖吧，也就 10 步还能接受」。 */

window.CARDS.push({
id:'24', n:24, w:1,
q:'What are the main steps of the citric acid cycle?',
qcn:'柠檬酸循环的主要步骤',
sub:'主干说完约 90 秒 · 八步全在这里 · 代谢的枢纽，别的代谢题都从这儿接',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'不要一上来就背八步。先说它是什么、在哪儿、进来的是什么，这三句决定他还挖不挖。'},
 {n:'01', t:'归类',
  big:'线粒体基质里的一圈 <b>8 步酶反应</b>，把 acetyl-CoA 的乙酰基<b>彻底氧化成 2 CO₂</b>，氢交给 NAD⁺/FAD；oxaloacetate 开环也闭环。它是<b>分解</b>代谢的<b>共同终点</b>',
  en:'“The citric acid cycle, also called the tricarboxylic acid cycle, is a closed sequence of eight enzyme-catalysed reactions in the mitochondrial matrix. Those eight are the main steps the question asks for. The cycle <b>oxidises the acetyl group of acetyl-CoA completely to two CO₂</b>, putting the hydrogen onto NAD⁺ and FAD. Acetyl-CoA enters by condensing with oxaloacetate, and oxaloacetate is regenerated in the last step — recycled, not consumed. It is where the <b>catabolic</b> pathways converge — the breakdown routes, the ones that take a nutrient apart and release energy. Carbohydrate arrives as pyruvate, from glycolysis or from transamination of alanine, and that pyruvate is oxidatively decarboxylated to acetyl-CoA. Fatty acids arrive as acetyl-CoA from β-oxidation. Amino acids enter at several points — most as acetyl-CoA, the rest as 2-oxoglutarate, succinyl-CoA, fumarate or oxaloacetate.”',
  note:'<b>先说它是什么（一圈反应、在哪、干什么），再说「汇合」</b>——「汇合」是它在代谢图上的位置，不是定义。书 p136 的原话：乙酰基两个碳的彻底氧化由定位在基质里的一串反应完成，oxaloacetate 是关键化合物，p139「这一步闭合循环」。八步是 Lehninger 的数法（书把 aconitase 的脱水和加水分开数）。<br><b>「氨基酸都以 acetyl-CoA 进来」是错的</b>：p126 说氨基酸的分解产物在<b>不同位置</b>接入循环，acetyl-CoA 只是最重要的入口；p127 Arg/His/Glu/Gln/Pro 经 2-oxoglutarate，p128 Met/Ile/Val 经 succinyl-CoA，p129 Asp/Asn 经 oxaloacetate，p221 Tyr/Asp 经 fumarate。书 p136 列的三个入口（丙酮酸氧化脱羧、alanine 转氨、β-氧化）只是 acetyl-CoA 这一个门。英文：“Arginine, histidine, glutamate, glutamine and proline enter as 2-oxoglutarate. Methionine, isoleucine and valine enter as succinyl-CoA. Aspartate and asparagine enter as oxaloacetate. Tyrosine and phenylalanine give fumarate together with acetoacetate.” 为什么绕一圈：“Because oxaloacetate is regenerated it behaves like a catalyst: a small amount can process an unlimited number of acetyl groups.”<span class="pg">p126 p136 p139</span>'},
 {g:'账', gn:'投入、产出、总结三行。只说产出是半张账——他一句「那消耗了什么」就能把你问停。'},
 {n:'02', t:'投入',
  big:'1 <b>acetyl-CoA</b> · 3 <b>NAD⁺</b> · 1 <b>FAD</b> · 1 <b>GDP ＋ Pᵢ</b> · 2 <b>H₂O</b>',
  en:'“Per turn it consumes one acetyl-CoA, three NAD-plus, one FAD, one GDP with inorganic phosphate, and two molecules of water.”',
  note:'<b>两个水常被忘掉。</b>一个在第 1 步（citryl-CoA 中间体水解放出 citrate＋CoA，Lehninger），一个在第 7 步加到 fumarate 上。aconitase 那步先脱一个水再加一个水，净零——书 p138 图上就是 −H₂O / +H₂O。英文：“One water goes in at the first step: citrate synthase hydrolyses the citryl-CoA intermediate to release citrate and CoA. The other goes in at the seventh step, added across the double bond of fumarate by fumarate hydratase. Aconitase removes one and puts one back, so it is net zero.”<br><b>注意 oxaloacetate 不算投入</b>——它在第 1 步被消耗、第 8 步被再生，是<b>被回收的</b>，不是原料。这一点他很可能追。'},
 {n:'03', t:'产出',
  big:'2 <b>CO₂</b> · 3 <b>NADH</b> · 1 <b>FADH₂</b> · 1 <b>GTP</b> · <b>CoA-SH</b>',
  en:'“And it produces two CO₂, three NADH, one FADH₂, one GTP, and the coenzyme A is released.”',
  note:'书给的总反应式：Acetyl-CoA + 3 NAD⁺ + FAD + GDP + Pᵢ + 2 H₂O → 2 CO₂ + 3 NADH + 3 H⁺ + FADH₂ + GTP + CoA。<span class="pg">p139</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>acetyl-CoA + 3 NAD⁺ + FAD + GDP + Pᵢ + 2 H₂O → 2 CO₂ + 3 NADH + 3 H⁺ + FADH₂ + GTP + CoA-SH</code><br>式子里有三个数最容易被追：<b>左边 2 个水</b>、<b>右边 3 个 H⁺</b>、<b>2 个 CO₂</b>。<br><br><b>四步配平</b>（他问「为什么右边多出三个质子」就照这个说）：<br>① <b>2 个 H₂O 在左边</b>：一个用在第 1 步（citrate synthase 把 citryl-CoA 中间体水解开），一个用在第 7 步（fumarate 加水成 malate）。第 2 步 aconitase 先脱一个水再加一个水，净零，所以不出现在总式里。<br>② <b>3 个 H⁺ 在右边</b>：脱氢一次拿走的是<b>两个氢</b>（＝2 个电子 ＋ 2 个质子），而 NAD⁺ 只收走其中<b>一个氢负离子</b>（H⁻ ＝ 2 个电子 ＋ 1 个质子），剩下那个质子被丢进溶液。三次 NAD⁺ 脱氢丢三个，所以写成 <code>3 NADH + 3 H⁺</code>。<br>③ FADH₂ 旁边<b>没有</b> H⁺：FAD 把两个氢<b>全收</b>了（<code>FAD + 2 H → FADH₂</code>），没有找零。<br>④ <b>2 个 CO₂</b>：第 3 步和第 4 步各放一个，到第 5 步之前就放完了。<br><br><br><b>=== 一句话理解 ===</b><br>右边那三个 H⁺ 不是多余的符号，它是 <b>NAD⁺ 和 FAD 收氢方式不同</b>留下的痕迹：<b>NAD⁺ 只收一个氢、找零一个质子；FAD 两个都收、不找零。</b><br>记住这一条，<code>NADH + H⁺</code> 和 <code>FADH₂</code> 这两种写法你就再也不会混。而那些被丢出来的质子并没有白丢——它们汇进基质的质子池，正是呼吸链要泵到膜外去的那些。'},
 {n:'04', t:'总结（净账）',
  big:'两个碳<b>全部</b>变成 CO₂；能量<b>没有变成 ATP</b>，变成了<b>还原力</b>',
  en:'“So the net result is this: two carbons enter as the acetyl group and two leave as CO₂, so no net carbon remains. And the energy is not captured as ATP. It is captured as <b>reducing power</b>, the reduced coenzymes NADH and FADH₂. Only one high-energy phosphate is made directly, and that is the GTP.”',
  note:'<b>这一行是这题最容易被问、也最容易答错的地方。</b><br>⚠ 他要是追「出去的就是那两个乙酰碳吗」——不是同一圈：这一圈放出的两个 CO₂ 来自 oxaloacetate 那一半（Lehninger），乙酰碳在后面几圈才出去；但净账是二进二出。书 p220 直接写了「动物不能把 acetyl-CoA 变回丙酮酸，所以不能用脂造糖」。<br>折算成 ATP 约 <b>12 个</b>（3 NADH ×3 ＋ 1 FADH₂ ×2 ＋ 1 GTP），<b>但那 12 个是呼吸链兑出来的，不是循环产的</b>。<br><b>「两个碳全出去了」这半句还顺带回答了「为什么脂肪不能变成糖」。</b><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子（碳的账）</b>：<code>2 C（乙酰基）+ 4 C（oxaloacetate）= 6 C（citrate）</code> → <code>−CO₂ → 5 C</code> → <code>−CO₂ → 4 C</code> → 回到 oxaloacetate<br><br><b>四步数碳</b>（他问「凭什么说二进二出」就照这个数）：<br>① 进：乙酰基<b>两个碳</b>挂到<b>四碳</b>的 oxaloacetate 上，第 1 步得到<b>六碳</b>的 citrate。<br>② 第 3 步放第一个 CO₂：<b>6 → 5</b>（2-oxoglutarate 是五碳）。<br>③ 第 4 步放第二个 CO₂：<b>5 → 4</b>（succinyl-CoA 是四碳）。<br>④ 第 5–8 步<b>一个碳都不动</b>（succinate、fumarate、malate、oxaloacetate 全是四碳），只是把氢一步步取走。收支：<b>进 2 出 2，循环自己的碳数一分未变。</b><br><br><br><b>=== 一句话理解 ===</b><br>oxaloacetate 是账本上的<b>本金</b>，乙酰基那两个碳是<b>流水</b>：一圈下来本金分文不动，流水全变成 CO₂ 飘走。<br>所以「循环能不能留下碳去造葡萄糖」这个问题，答案在<b>算术</b>里而不在酶里——<b>转一万圈也拿不出一个净碳。</b>这正是「脂肪不能变成糖」的全部依据，也是 glyoxylate 循环要造糖就<b>必须跳过那两次脱羧</b>的原因。<br>⚠ <b>数目对得上，身份对不上</b>：同一圈里放出的两个 CO₂ 实际来自 oxaloacetate 那一半的碳（上面那条 Lehninger 的提醒）。净账看<b>数目</b>，同位素看<b>身份</b>，两者不矛盾。'},
 {n:'05', t:'地点',
  big:'在<b>线粒体基质</b>（matrix）里；只有 succinate dehydrogenase 一个酶嵌在内膜上',
  en:'“The cycle runs in the <b>matrix</b>, the inner space of the mitochondrion — with one enzyme, succinate dehydrogenase, built into the inner membrane.”',
  note:'<b>这一句必须跟下一张卡分清</b>：循环在<b>基质</b>，呼吸链在<b>内膜</b>。书 p136 明写它<b>定位在基质里</b>（located in the matrix）。<b>只有一个例外</b>：succinate dehydrogenase 在内膜上，见第 6 步那一格。'},
 {n:'06', t:'兑换率',
  big:'还原力换 ATP 的价钱：约 <b>3 ATP / NADH</b>、<b>2 ATP / FADH₂</b>',
  en:'“The respiratory chain converts them at roughly three ATP per NADH and two per FADH₂. It is three because NADH enters at complex I and six protons are pumped. It is two because succinate enters at complex II, bypasses complex I, and only four protons are pumped.”',
  note:'<b>这个价钱是下面那笔总账的依据。</b>书直接给了这两个比例。<span class="pg">p139</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>每 NADH 泵出 6 H⁺ ≈ 3 ATP</code> · <code>每 FADH₂ 泵出 4 H⁺ ≈ 2 ATP</code>（质子数 p145，换算 p146）<br><br><b>四步推导</b>（他问「凭什么是 3 和 2」就照这个说）：<br>① NADH 从<b>复合物 I</b> 上车，走 <b>I → III → IV</b> 三站。书 p145：两个电子从 NADH 送到氧，同时有 <b>6 个质子</b>被搬到膜外。<br>② FADH₂ 是 succinate 交出来的，从<b>复合物 II</b> 上车，而 <b>II 不泵质子</b>，所以只剩 III 和 IV 两站——p145：这条路只有 <b>4 个质子</b>。<br>③ 书 p146 把质子换成 ATP：<b>6 个 ≈ 3 ATP，4 个 ≈ 2 ATP</b>。<br>④ 于是 <code>3 : 2 = 6 : 4</code>。<b>这个比例不是「NADH 比 FADH₂ 更有能量」，它就是质子数的比例本身。</b><br><br><br><b>=== 一句话理解 ===</b><br>ATP 从来不是从 NADH 身上数出来的，是<b>从质子身上数出来的</b>：还原辅酶只负责把质子搬到膜外，ATP 是拿质子买回来的。<br><b>FADH₂ 少一个 ATP，只因为它少走了一站（复合物 I），不是因为它「低一等」。</b>换句话说，<b>价钱由上车的站台决定，不由乘客决定</b>——所以同一个 FADH₂ 换到脂肪酸氧化那边，也还是两个。<br><br><b>=== 公式和推导 · 书的 3 和 2 对现代的 2.5 和 1.5 ===</b><br><b>式子</b>：<code>一个还原辅酶值几个 ATP ＝ 它泵出的质子数 ÷ 造一个 ATP 花掉的质子数</code><br>这是一个<b>汇率</b>：分子、分母各是一次独立的点数。<br><br><b>两套数各自怎么来的</b>：<br>① <b>书（经典）</b>：分子 <code>6</code>（复合物 I 泵 2 ＋ III 泵 4 ＋ <b>IV 不泵</b>）；分母书没明写，但由「6 个 ≈ 3 ATP」反推出来约 <b>2 个质子一个 ATP</b>。<code>6 ÷ 2 = 3</code>，FADH₂ <code>4 ÷ 2 = 2</code>。<br>② <b>现代（general，书里 0 命中）</b>：分子 <code>10</code>（I 泵 4 ＋ III 泵 4 ＋ <b>IV 也泵 2</b>），分母 <code>4</code>（3 个用来转动合酶 ＋ 1 个用来把 Pᵢ 运进基质）。<code>10 ÷ 4 = 2,5</code>，FADH₂ <code>6 ÷ 4 = 1,5</code>。<br>③ 一个乙酰基于是从 <code>3×3 + 2 + 1 = 12</code> 变成 <code>3×2,5 + 1,5 + 1 = 10</code>。<br><br><br><b>=== 一句话理解 ===</b><br><b>两套数不是两个互相打架的事实，是同一台机器被点了两次数。</b>化学一点没变，变的只有分子（复合物 IV 到底泵不泵）和分母（一个 ATP 要还回去几个质子）。<br>而且这个数<b>本来就不该是整数</b>：泵和合酶是两个各走各的计数器，中间只隔着一池子质子——问「一个 NADH 到底几个 ATP」，就像问「一百块钱到底是几件衣服」。<b>考场上的答法：先给书的 3 和 2，被追问再给 2.5 和 1.5，并说明差别只在这两次点数。</b>'},

 {g:'八步', gn:'每步只记「谁变成谁 ＋ 那个酶」。中间产物的结构式不用背。'},
 {n:'07', t:'第 1 步 · 缩合',
  big:'<b>oxaloacetate ＋ acetyl-CoA → citrate</b>，酶是 <b>citrate synthase</b>',
  en:'“Acetyl-CoA condenses with oxaloacetate to give citrate. The enzyme is <b>citrate synthase</b>, and it is a <b>regulatory</b> enzyme — strongly inhibited by ATP, and in some organisms by NADH.”',
  note:'<b>为什么 acetyl-CoA 能做这个反应</b>：它是<b>硫酯</b>，硫酯没有普通 O-酯那样的中介效应，所以羰基结构被固定住，甲基能参加<b>羟醛缩合</b>。<b>这一句把「化学键」那张横向卡接进来了。</b><span class="pg">p136</span>'},
 {n:'08', t:'第 2 步 · 异构',
  big:'<b>citrate → isocitrate</b>，中间经 <b>cis-aconitate</b>，酶是 <b>aconitate hydratase</b>',
  en:'“Citrate has a <b>tertiary</b> alcohol, which cannot be oxidised. So it is first isomerised to isocitrate, whose <b>secondary</b> alcohol can be dehydrogenated. The enzyme is aconitate hydratase — it dehydrates to cis-aconitate and adds water back the other way.”',
  note:'<b>这一步的「为什么」书直接给了</b>：叔醇不能再氧化，仲醇可以。<b>整个第 2 步存在的唯一理由就是把 OH 挪到能被脱氢的位置。</b>记这个比记名字有用。<span class="pg">p138</span>'},
 {n:'09', t:'第 3 步 · 第一次氧化脱羧',
  big:'<b>isocitrate → 2-oxoglutarate</b>，酶是 <b>isocitrate dehydrogenase</b>（NAD⁺），放 <b>第一个 CO₂</b> ＋ 第一个 <b>NADH</b>',
  en:'“Isocitrate dehydrogenase, NAD⁺-dependent, oxidises isocitrate to oxalosuccinate. Oxalosuccinate then decarboxylates to 2-oxoglutarate — first CO₂, first NADH.”',
  note:'<b>为什么会自动脱羧</b>：oxalosuccinate 的一个羧基处在羰基的 β 位，这类 <b>β-酮酸会自发脱羧</b>，是放能反应。<b>书说 β-酮酸分解和 2-酮酸的氧化脱羧是生化系统里 CO₂ 的两大来源。</b><span class="pg">p138</span>'},
 {n:'10', t:'第 4 步 · 第二次氧化脱羧',
  big:'<b>2-oxoglutarate → succinyl-CoA</b>，放<b>第二个 CO₂</b> ＋ 第二个 <b>NADH</b>',
  en:'“2-oxoglutarate undergoes the same oxidative decarboxylation as pyruvate, because it is a <b>homologue of pyruvate</b>. It is pyruvate with a CH₂–COO⁻ on its methyl, so its 2-oxo-acid end reacts the same way. The carboxyl next to the keto group leaves as CO₂, while the rest is dehydrogenated and ends up as an acyl-CoA thioester, with NAD⁺ reduced. The 2-oxoglutarate dehydrogenase complex does it, with the same five cofactors as the pyruvate dehydrogenase complex. Thiamine diphosphate takes up the fragment after the CO₂ leaves, lipoic acid oxidises it and carries the succinyl group, and coenzyme A receives it as a thioester. FAD and then NAD⁺ reoxidise the lipoate. It gives succinyl-CoA, the second CO₂ and the second NADH.”',
  note:'<b>「它是丙酮酸的同系物」这句话省掉了一整个机制。</b>丙酮酸脱氢那套（thiamine diphosphate 等）原样搬过来。<b>到这里两个碳已经全部作为 CO₂ 出去了。</b><span class="pg">p138</span>'},
 {n:'11', t:'第 5 步 · 底物水平磷酸化',
  big:'<b>succinyl-CoA → succinate</b>，同时造出 <b>GTP</b>，酶是 <b>succinyl-CoA synthetase</b>',
  en:'“Succinyl-CoA is a <b>macroergic</b> compound, so it does not just hydrolyse — the energy is captured. It reacts with GDP and inorganic phosphate to give succinate and GTP, and the terminal phosphate of GTP can be passed to ADP by nucleoside diphosphate kinase, so it counts as one ATP.”',
  note:'<b>这是整个循环里唯一直接造出高能磷酸的一步</b>，叫<b>底物水平磷酸化</b>。它之所以可能，是因为硫酯键是高能的——<b>又一次接回「化学键」那张卡</b>。<span class="pg">p139</span>'},
 {n:'12', t:'第 6 步 · 唯一在膜上的一步',
  big:'<b>succinate → fumarate</b>，酶是 <b>succinate dehydrogenase</b>，产 <b>FADH₂</b>',
  en:'“Succinate is oxidised to fumarate by succinate dehydrogenase. That enzyme carries a <b>covalently bound FAD</b> and is built into the inner membrane, and the textbook identifies it as complex II of the respiratory chain. This is the one step that gives FADH₂ rather than NADH.”',
  note:'<b>两件事要记住</b>：① FAD 是<b>共价</b>结合的，不是自由辅酶；② <b>这个酶坐在线粒体内膜上</b>，是循环里唯一不在基质里的一步，也正因如此它同时是呼吸链的复合物 II。<br>「它就是复合物 II」<b>书 p143 直接说了</b>（<i>It is the succinate dehydrogenase known from the citrate cycle</i>，书上那句话的英译；复合物 II = 琥珀酸:泛醌氧化还原酶，含 FAD 和两个 FeS），p141 说这些复合物是内膜的整合成分。英文：“Complex II is succinate:ubiquinone oxidoreductase, a flavoprotein with FAD and two iron–sulfur centres. It passes the electrons from succinate to ubiquinone, bypassing complex I, and that is why succinate is worth only two ATP.”<span class="pg">p139 p143</span>'},
 {n:'13', t:'第 7 步 · 加水',
  big:'<b>fumarate → L-malate</b>，酶是 <b>fumarate hydratase</b>（fumarase）',
  en:'“Fumarate is formed as the <b>trans</b> isomer, and fumarate hydratase adds water across the double bond to give L-malate. It is the same kind of hydration as in the aconitase step, where water adds to cis-aconitate.”',
  note:'<b>书自己点了这个类比</b>（跟 aconitate hydratase 那一步同类）。反式这个细节值得说，因为酶只接受反式：“Fumarate hydratase is stereospecific: it hydrates only the trans isomer, fumarate, and not the cis isomer, maleate. It gives only L-malate.”<span class="pg">p139</span>'},
 {n:'14', t:'第 8 步 · 闭环',
  big:'<b>L-malate → oxaloacetate</b>，酶是 <b>malate dehydrogenase</b>，产<b>第三个 NADH</b>',
  en:'“Malate dehydrogenase produces the third NADH and regenerates oxaloacetate, which closes the cycle.”',
  note:'<b>书顺带补了一句很好用的</b>：oxaloacetate 跟 oxalosuccinate 一样是 β-酮酸，<b>但它稳定得多</b>——所以它不会像第 3 步那个中间体一样自己脱羧掉。<span class="pg">p139</span>'},

 {g:'能量账', gn:'他很可能追这个，而且书把数字都给齐了。'},
 {n:'15', t:'一个乙酰基',
  big:'<b>12 ATP</b>：3 NADH ×3 ＋ 1 FADH₂ ×2 ＋ 1 GTP',
  en:'“Per acetyl group, the cycle together with the respiratory chain yields about twelve ATP: three NADH at roughly three each, one FADH₂ at two, plus the one GTP the cycle makes itself. Those are the textbook’s classical yields. Modern textbooks use 2.5 and 1.5, giving ten.”',
  note:'书给的总式：CH₃CO-S-CoA + 2 O₂ + 12 ADP + 12 Pᵢ → 2 CO₂ + CoA-SH + <b>12 ATP</b> + 13 H₂O。<b>「连呼吸链一起」这半句必须说</b>，不然跟下面「循环本身只产一个 GTP」自相矛盾。<br><b>他要是问「为什么现代教材说 10、30–32」</b>：差别只在每个 ATP 假设泵几个质子，葡萄糖总数上还差在胞质 NADH 用哪条穿梭进线粒体。书用 3 和 2（p139、p146），Lehninger 用 2.5 和 1.5。英文：“Because the yield depends on how many protons are pumped per NADH and how many the ATP synthase needs per ATP. The textbook takes six protons per NADH as about three ATP and four per FADH₂ as about two. Modern measurements give about 2.5 and 1.5, so ten per acetyl group. For a whole glucose there is a second difference: the two NADH from glycolysis are made in the cytosol and must enter the mitochondrion through a shuttle. The glycerol-3-phosphate shuttle hands them to FAD, worth 1.5 each. The malate–aspartate shuttle hands them to NAD⁺, worth 2.5. That is why the modern total is quoted as 30 to 32.”<span class="pg">p139</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>12 ATP = 3 NADH × 3 + 1 FADH₂ × 2 + 1 GTP = 9 + 2 + 1</code><br><br><b>四步推导</b>（他问「12 是怎么凑出来的」就照这个说）：<br>① 循环<b>自己</b>只做出一个高能磷酸：第 5 步 succinyl-CoA synthetase 的那个 <b>GTP</b>，可以一比一换成 ATP。<br>② 其余全是还原力：<b>3 个 NADH</b>（第 3、4、8 步）＋ <b>1 个 FADH₂</b>（第 6 步）。<br>③ 按 p139 的兑换率换算：<code>3 × 3 = 9</code>、<code>1 × 2 = 2</code>。<br>④ <code>9 + 2 + 1 = 12</code>，正是书 p139 那条总式里的 <code>12 ADP + 12 Pᵢ → 12 ATP</code>。<br><br><br><b>=== 一句话理解 ===</b><br><b>12 个里有 11 个不是循环造的。</b>循环干的只有两件事：放两个 CO₂，和开出四张欠条（3 NADH ＋ 1 FADH₂）。兑现欠条的是内膜，兑出 <code>9 + 2 = 11</code> 个；第 12 个才是循环自己手里那个 GTP。<br>所以「柠檬酸循环产多少 ATP」这个问题问得就不对——<b>先把 12 拆成 1 ＋ 11，再说那 11 个是在另一张卡上造的</b>，这才是答对了题。<br><br><b>=== 公式和推导 · 那 13 个水是怎么来的 ===</b><br><b>式子</b>：<code>CH₃CO-S-CoA + 2 O₂ + 12 ADP + 12 Pᵢ → 2 CO₂ + CoA-SH + 12 ATP + 13 H₂O</code><br><br><b>三步配平</b>：<br>① <b>12 个水来自磷酸化</b>：每做一个 ATP 就是一次 <code>ADP + Pᵢ → ATP + H₂O</code>，做 12 个就放 12 个水。<br>② <b>1 个水来自乙酰基本身被烧掉</b>：<code>CH₃CO-S-CoA + 2 O₂ → 2 CO₂ + CoA-SH + H₂O</code>——乙酰基的三个氢，一个还给 CoA-SH，剩下两个跟氧结合成一个水（氧原子也对得上：1 ＋ 4 = 4 ＋ 1）。<br>③ <code>12 + 1 = 13</code>。循环第 1 步和第 7 步用掉的那两个水，已经在第 ② 条的净账里抵掉了，所以总式左边看不到水。<br><br><br><b>=== 一句话理解 ===</b><br>这 13 个水里<b>只有 1 个是「呼吸」意义上的水</b>——氧变成的那个，也就是所谓<b>代谢水</b>；另外 12 个全是造 ATP 时挤出来的副产品。<br><b>会拆这个 13，等于当场证明你在读式子而不是背式子。</b>他要是问「那氧到哪儿去了」，你指得出正是那一个水。'},
 {n:'16', t:'一分子葡萄糖',
  big:'有氧共 <b>38 ATP</b>：糖酵解 8 ＋ 丙酮酸氧化脱羧 6 ＋ 柠檬酸循环 <b>24</b>',
  en:'“For one mole of glucose aerobically: eight from glycolysis, six from the oxidative decarboxylation of pyruvate, and twenty-four from the cycle — thirty-eight in total. Anaerobically, lactate fermentation gives only two.”',
  note:'<b>2 对 38 这个对比是书自己做的</b>，而且它给了一个进化上的结论：<b>好氧降解是演化上更高级的</b>。这一句是现成的 ④。<span class="pg">p136 p139</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>38 = 8（糖酵解）+ 6（丙酮酸氧化脱羧）+ 24（柠檬酸循环）</code>——书 p139 原话就是这三项。<br><br><b>四步推导</b>（他问「38 怎么拆」就照这个说）：<br>① <b>糖酵解 8</b>：底物水平磷酸化<b>净 2 个</b>（做出 4 个，前面先投进去 2 个），加上 <b>2 个 NADH × 3 = 6</b>，合起来 8。<br>② <b>氧化脱羧 6</b>：一个葡萄糖劈成<b>两个</b>丙酮酸，每个变成 acetyl-CoA 时产 1 个 NADH：<code>2 × 3 = 6</code>。<br>③ <b>循环 24</b>：两个乙酰基各转一圈，<code>2 × 12 = 24</code>。<br>④ <code>8 + 6 + 24 = 38</code>。无氧只有 <b>2</b>：就是第 ① 条里那个净 2，因为那 2 个 NADH 必须拿去把丙酮酸还原成乳酸才能把 NAD⁺ 换回来，一个也兑不成 ATP。<br><br><br><b>=== 一句话理解 ===</b><br>38 个里<b>只有 4 个是亲手做出来的</b>（糖酵解净 2 ＋ 两圈的 2 个 GTP），另外 <b>34 个全是拿质子在内膜上兑的</b>。<br>书 p140 顺手把效率也算了：<code>38 × 30,5 ≈ 1159 kJ/mol</code>，而葡萄糖全烧是 <code>−2 870 kJ/mol</code>，<code>1159 ÷ 2870 ≈ 40%</code>。<b>剩下六成变成热。</b><b>分步氧化的全部意义就在这里——把四成收进了口袋，而不是一次烧成热。</b>无氧那条路只拿到 <code>2 ÷ 38 ≈ 1/19</code>，这就是书说「好氧是演化上更高级」时手里握着的数。'},

 {g:'收尾', gn:'一句停住，一句伸出去。'},
 {n:'17', t:'落点',
  big:'循环不产能，<b>它把能量搬进了辅酶的还原态</b>——真正兑现在内膜上',
  en:'“So the cycle is not where the energy becomes ATP. It captures the energy in the reduced coenzymes. In the <b>inner membrane</b> the respiratory chain turns that into a proton gradient, and ATP synthase, complex V, turns the gradient into ATP. Below that we are asking how a membrane converts a proton gradient into chemical work, which is bioenergetics rather than the cycle itself.”',
  note:'落在<b>热力学</b>那块地基上，而且顺手把 #25 #26 划成了另一个话题——<b>这是体面的收手，不是回避。</b>'},
 {n:'18', t:'留口子',
  big:'它<b>不只是分解</b>：中间产物同时是<b>合成</b>的原料',
  en:'“One thing worth adding: the cycle is not purely catabolic. 2-oxoglutarate and oxaloacetate are the carbon skeletons for glutamate and aspartate. Succinyl-CoA is a precursor of porphyrins, and the textbook has a whole section on that. So it is also a supply depot. Draining any intermediate lowers oxaloacetate, so the cell has replenishing, anaplerotic, reactions. The most important is pyruvate carboxylase, which makes oxaloacetate from pyruvate and CO₂ at the cost of one ATP, with biotin as cofactor.”',
  note:'<b>「amphibolic（两性代谢）」这个概念不用说出这个词</b>，说出现象就够；他说了你要听得懂：“Amphibolic means serving both catabolism and anabolism — the cycle oxidises acetyl-CoA and at the same time supplies carbon skeletons for glutamate, aspartate and porphyrins.”<br>口子留在 <b>succinyl-CoA → 卟啉</b>（书 §6.3，p146）和 <b>氨基酸碳骨架</b>（#32 代谢调控）。'}
],
end:'<b>八步里真正要背的是「谁变成谁 ＋ 酶名」，不是结构式。</b>四个「为什么」（叔醇不能氧化、β-酮酸自发脱羧、硫酯是高能的、FAD 共价结合）比八个名字更值钱，因为它们是他追问时的落点。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：基质里一圈 8 步反应，把乙酰基氧化成 2 CO₂，氢给 NAD⁺/FAD，oxaloacetate 回收；分解代谢的<b>共同终点</b>',
 '“A closed sequence of eight reactions in the matrix that oxidises the acetyl group of acetyl-CoA to two CO₂, hydrogen onto NAD⁺ and FAD, oxaloacetate recycled. It is where the catabolic pathways converge.”',
 '糖和脂以 acetyl-CoA 进；氨基酸在<b>不同位置</b>进（p126–p129）——别说「都以 acetyl-CoA」。'],
['<b>地点</b>：线粒体<b>基质</b>（呼吸链才在内膜）',
 '“The cycle runs in the matrix, the inner space of the mitochondrion.”',
 '只有一个例外：succinate dehydrogenase 在内膜上。'],
['<b>产物</b>：2 CO₂ ＋ <b>3 NADH ＋ 1 FADH₂ ＋ 1 GTP</b>',
 '“Two CO₂, three NADH, one FADH₂ and one GTP per acetyl group.”',
 '这三个数是硬事实，书 p139 给了总反应式。'],
['<b>意义</b>：循环<b>几乎不产 ATP</b>，产的是还原力',
 '“The cycle itself makes almost no ATP — what it produces is reducing power.”',
 '<b>最容易答错的一点。</b>兑换率约 3 ATP/NADH、2 ATP/FADH₂。'],
['<b>1</b> oxaloacetate ＋ acetyl-CoA → citrate · <b>citrate synthase</b>（调节酶，ATP 抑制）',
 '“Citrate synthase — a regulatory enzyme, strongly inhibited by ATP.”',
 'acetyl-CoA 是硫酯，羰基被固定，所以能做羟醛缩合。'],
['<b>2</b> citrate → isocitrate（经 cis-aconitate）· <b>aconitate hydratase</b>',
 '“Citrate has a tertiary alcohol, which cannot be oxidised. Isocitrate has a secondary one, which can.”',
 '<b>这一步存在的唯一理由</b>就是把 OH 挪到能脱氢的位置。'],
['<b>3</b> isocitrate → 2-oxoglutarate · <b>第一个 CO₂ ＋ NADH</b>',
 '“Oxidised to oxalosuccinate, which decarboxylates spontaneously because it is a β-keto acid.”',
 'β-酮酸自发脱羧，是放能的。书说这是生化里 CO₂ 的两大来源之一。'],
['<b>4</b> 2-oxoglutarate → succinyl-CoA · <b>第二个 CO₂ ＋ NADH</b>',
 '“The same mechanism as pyruvate, because 2-oxoglutarate is a homologue of pyruvate.”',
 '到这里两个碳已经全部作为 CO₂ 出去了。'],
['<b>5</b> succinyl-CoA → succinate ＋ <b>GTP</b> · <b>succinyl-CoA synthetase</b>',
 '“Succinyl-CoA is macroergic, so the energy is captured as GTP rather than lost as heat.”',
 '<b>唯一的底物水平磷酸化。</b>GTP 的末端磷酸可以转给 ADP。'],
['<b>6</b> succinate → fumarate · <b>succinate dehydrogenase</b>，产 <b>FADH₂</b>',
 '“It carries a covalently bound FAD, and it is the one step located in the inner membrane.”',
 '循环里唯一不在基质、也是唯一产 FADH₂ 的一步。'],
['<b>7</b> fumarate → L-malate · <b>fumarate hydratase</b>',
 '“Fumarate forms as the trans isomer, and water adds across the double bond.”',
 '跟第 2 步同类的加水反应，书自己点了这个类比。'],
['<b>8</b> L-malate → oxaloacetate · <b>malate dehydrogenase</b>，<b>第三个 NADH</b>，闭环',
 '“Malate dehydrogenase gives the third NADH and regenerates oxaloacetate.”',
 'oxaloacetate 也是 β-酮酸，但比 oxalosuccinate 稳定得多。'],
['<b>能量账</b>：一个乙酰基 <b>12 ATP</b>；一分子葡萄糖有氧 <b>38</b>，无氧只有 <b>2</b>',
 '“Twelve per acetyl group. Thirty-eight per glucose aerobically, two anaerobically.”',
 '8（糖酵解）＋ 6（丙酮酸氧化脱羧）＋ 24（循环）。书说好氧降解是演化上更高级的。'],
['<b>留口子</b>：它<b>不只是分解</b>——中间产物是合成的原料',
 '“2-oxoglutarate and oxaloacetate are carbon skeletons for glutamate and aspartate. Succinyl-CoA is a precursor of porphyrins.”',
 '所以它不能被简单关掉。接 §6.3 卟啉和 #32 调控。']
],

segs:[
 {tag:'段 1 · 定义', h:'先说它是什么、在哪儿',
  p:['“The citric acid cycle, also called the tricarboxylic acid cycle, is a closed sequence of eight enzyme reactions in the mitochondrial matrix. Those eight are the main steps. The cycle oxidises the acetyl group of acetyl-CoA completely to two CO₂, putting the hydrogen onto NAD⁺ and FAD. Oxaloacetate opens the cycle and is regenerated at the end. It is where the <b>catabolic</b> pathways converge, the breakdown routes that take a nutrient apart and release energy. Carbohydrate and fat arrive as acetyl-CoA. Amino acids enter there too, or as 2-oxoglutarate, succinyl-CoA, fumarate or oxaloacetate.',
     'The cycle oxidises that acetyl group to two molecules of CO₂. It runs in the <b>matrix</b>, the inner space of the mitochondrion.”'],
  note:'<b>「汇合」是这题的骨架。</b>书列的三个入口：糖酵解来的丙酮酸经氧化脱羧、alanine 转氨、脂肪酸 β-氧化。'},
 {tag:'段 2 · general', h:'先说产物和意义，再说八步',
  p:['“Per acetyl group it gives two CO₂, three NADH, one FADH₂ and one GTP.',
     'The important point is that the cycle itself captures almost no ATP directly, just that one GTP. What it really produces is <b>reducing power</b>, and that is cashed in later in the inner membrane. The respiratory chain makes the proton gradient and ATP synthase makes the ATP, at roughly three ATP per NADH and two per FADH₂.”'],
  note:'<b>先给产物和意义，再给步骤。</b>直接背八步是 technician 的答法；先说「它产的是还原力不是 ATP」，他就知道你理解了它在代谢里的位置。'},
 {tag:'段 3 · 稍展开', h:'八步，每步只给「谁变成谁 ＋ 酶」',
  p:['“Acetyl-CoA condenses with oxaloacetate to citrate — <b>citrate synthase</b>, a regulatory enzyme inhibited by ATP.',
     'Citrate is isomerised to isocitrate through cis-aconitate by <b>aconitate hydratase</b>. The reason is chemical: citrate’s alcohol is tertiary and cannot be oxidised, isocitrate’s is secondary and can.',
     'Isocitrate dehydrogenase oxidises isocitrate, and the product decarboxylates to 2-oxoglutarate: first CO₂, first NADH. Then 2-oxoglutarate undergoes the same oxidative decarboxylation as pyruvate. The carboxyl next to the keto group leaves as CO₂, and the rest is dehydrogenated into an acyl-CoA thioester. That gives succinyl-CoA: second CO₂, second NADH.',
     'Succinyl-CoA is macroergic, so instead of simply hydrolysing it reacts with GDP and phosphate. That is <b>succinyl-CoA synthetase</b>, and it gives succinate and GTP.',
     'Then three steps take it back to the start. Succinate goes to fumarate by <b>succinate dehydrogenase</b> with its covalently bound FAD. Fumarate goes to malate by <b>fumarate hydratase</b>. Malate goes to oxaloacetate by <b>malate dehydrogenase</b>, and that gives the third NADH.”'],
  note:'<b>时间不够就砍到四句</b>：缩合、异构、两次氧化脱羧、然后三步回到 oxaloacetate。<b>四个「为什么」不要砍</b>，那是他追问时的落点。'},
 {tag:'段 4 · 留口子', h:'说出它不只是分解',
  p:['“One thing worth adding: the cycle is not purely catabolic. 2-oxoglutarate and oxaloacetate are the carbon skeletons that amino acids are built from and broken down to. Succinyl-CoA together with glycine is the starting point for porphyrin synthesis, and the textbook has a separate section on that. So the cycle is also a supply depot. Because draining any intermediate lowers oxaloacetate, the textbook adds the replenishing, anaplerotic, reactions, above all pyruvate carboxylase: oxaloacetate from pyruvate and CO₂, one ATP, biotin.”'],
  note:'口子留在 <b>succinyl-CoA ＋ glycine → δ-aminolevulinate → 卟啉</b>（书 §6.3，<span class="pg">p146</span>）和氨基酸碳骨架（#32）。<b>两个都在书里，追下去都答得住。</b>'}
],

why:{
 rungs:[
  ['为什么要绕一个圈，不直接把乙酰基烧掉？','因为<b>oxaloacetate 是被回收的</b>——它在第 1 步被消耗，在第 8 步被再生。一个循环催化剂只要很少量就能持续处理大量乙酰基。'],
  ['为什么中间要插一步异构化（citrate → isocitrate）？','因为 citrate 的羟基在<b>叔碳</b>上，<b>不能被氧化</b>。异构化把羟基挪到仲碳，才能脱氢。<b>这一步不产能、不放碳，它唯一的作用就是让下一步成为可能。</b>'],
  ['那为什么整套要产 NADH 而不是直接产 ATP？','因为把能量先存成<b>还原态辅酶</b>，可以在内膜上一次性、按可控的比例兑换成 ATP。<b>循环负责取电子，内膜负责换钱。</b>']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“Below that we are asking how a membrane turns a proton gradient into chemical work. That is bioenergetics rather than the cycle itself, and it belongs to the respiratory chain.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p137_obr63_citrate_cycle.jpg',
  t:'整个循环一张图 —— 这道题最可能被要求画的就是它（书 Obr. 6.3）',
  cap:'<b>这张是「画」，而且它就是这道题本身。</b>圈是<b>顺时针</b>的：<b>左上 oxalacetát</b>，乙酰基从<b>上面斜着接进来</b>，右边一路往下放掉两个 CO₂，底下折回左边再爬上来。'
    + '<br><br><b>⚠ 先把编号说清楚。</b>图上的圈码是 <b>①–⑨ 九个</b>，卡上是<b>八步</b>。差别只有一处：<b>书把 aconitase 的脱水和加水当成两根箭头分开数（② 和 ③）</b>。所以<b>从 ④ 起，图上的号比卡上的步号大 1</b>——卡第 3 步 ＝ 图 ④，卡第 8 步 ＝ 图 ⑨。<b>他按图问、你按卡答不会错，但你得知道这一层。</b>'
    + '<br><br><b>画的顺序（七步，照这个练）</b>：'
    + '<br>① <b>先画一个大圆圈</b>，标上顺时针方向，在圈上点出<b>八个位置</b>。<b>先把圈画对，再写名字</b>——名字写歪了还能改，圈画反了整张就废了。'
    + '<br>② <b>左上写 oxalacetát</b>，它既是起点也是终点。从圈外<b>斜着引一根箭头进来</b>，箭尾写 <b>acetyl-CoA</b>，箭头标 <b>①</b>，旁边写 <b>CoA-SH</b> 出来。'
    + '<br>③ 顺时针依次写 <b>citrát（六碳）→ cis-akonitát → isocitrát</b>。中间那两根箭头就是 aconitase 的 <b>−H₂O</b> 和 <b>＋H₂O</b>，净零。'
    + '<br>④ 接着写 <b>2-oxoglutarát（五碳）</b>，在箭头旁往圈外画一根短箭头，写 <b>CO₂ ＋ NADH</b>。<b>第一次氧化脱羧。</b>'
    + '<br>⑤ 再写 <b>sukcinyl-CoA（四碳）</b>，同样往外画 <b>CO₂ ＋ NADH</b>。<b>两个碳到这里全部出去了</b>，后面一个碳都不动。'
    + '<br>⑥ 底下写 <b>sukcinát</b>，往外画 <b>GTP</b>（<b>书这根箭头上标的是 GTP 不是 ATP</b>）；左下写 <b>fumarát</b>，往外画 <b>FADH₂</b>；左边写 <b>malát</b>。'
    + '<br>⑦ 最后一根箭头回到 oxalacetát，往外画第三个 <b>NADH</b>。<b>圈合上了。</b>'
    + '<br><br><b>边画边说的四句</b>：“The four-carbon <b>oxaloacetate</b> condenses with the two-carbon acetyl group to give the six-carbon <b>citrate</b>.”'
    + '<br>“Citrate carries a <b>tertiary</b> alcohol, which cannot be oxidised, so aconitase moves the hydroxyl and gives <b>isocitrate</b>, a <b>secondary</b> one.”'
    + '<br>“Then two <b>oxidative decarboxylations</b> in a row, six carbons to five and five to four. <b>Both CO₂ of the whole turn leave here</b>, and each of them gives an NADH.”'
    + '<br>“The rest of the turn moves no carbon at all. It only takes hydrogen off: one <b>GTP</b> at succinyl-CoA synthetase, one <b>FADH₂</b>, then water adds, then the third <b>NADH</b> — and oxaloacetate is back.”'
    + '<br><br><b>收笔前数一遍圈外挂的东西</b>：<b>2 CO₂ · 3 NADH · 1 FADH₂ · 1 GTP</b>。<b>这四样数对了，账那三行就不用另背——画出来就等于算出来了。</b>',
  src2:'Biochemie, Obr. 6.3, p137 · 300 dpi 原图裁切，未修改（图内捷克语中间物名保留）'},

 {k:'认',
  src:'img/p136_tab63_cycle_enzymes.jpg',
  t:'九个反应的酶名和辅因子 —— 上面那张图的图例（书 Tab. 6.3）',
  cap:'<b>这张是「认」，它是上一张图的图例。</b>三栏的表头是 <b>Reakce ＝ 反应号 · Enzymy ＝ 酶 · Kofaktory ＝ 辅因子</b>，每个酶后面的括号里是 <b>EC 号</b>。'
    + '<br><br><b>一眼要看出来的三件事</b>：'
    + '<br>① <b>第 2 行和第 3 行都是 akonitasa</b>。<b>这就是「书数九步、卡数八步」的全部原因</b>——一个酶占了两行。'
    + '<br>② <b>第 5 行书印的名字是带引号的：『2-oxoglutarátoxidasa』</b>。你嘴里说的是 <b>2-oxoglutarate dehydrogenase complex</b>，指的是同一个东西；<b>那对引号是书自己打的，说明它也知道那不是正式名</b>。那一行的辅因子栏是全表最长的：<b>TDP · CoA · FAD · NAD⁺ · 硫辛酸 · Mg²⁺</b>——正好是丙酮酸脱氢酶那一整套。'
    + '<br>③ <b>第 8 行 fumarasa 的辅因子栏写着 žádné，意思是「没有」</b>。<b>全表唯一一个不需要辅因子的酶</b>，他问「哪一步不用辅因子」你指得出来。'
    + '<br><br><b>摆到面前时说的两句</b>：“The textbook counts <b>nine</b> reactions because it lists <b>aconitase twice</b>, once for the dehydration and once for the rehydration. Counted as enzymes there are <b>eight</b>.”'
    + '<br>“Two of them need <b>iron</b>: aconitase as Fe²⁺, and succinate dehydrogenase with FAD together with iron. <b>Only fumarase needs no cofactor at all.</b>”'
    + '<br><br>⚠ <b>EC 号不用背，但第一位数字值得看一眼</b>：<b>1</b> 开头是氧化还原酶（isocitrate · succinate · malate 三个脱氢酶），<b>4</b> 开头是裂合酶（citrate synthase · aconitase · fumarase），<b>6</b> 开头是连接酶（succinyl-CoA synthetase）。<b>他问「这几个酶各属哪一类」，答案就印在括号里。</b>',
  src2:'Biochemie, Tab. 6.3, p136 · 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p138_obr64_mitochondrion_with_caption.jpg',
  t:'循环在哪儿跑 —— 线粒体剖面（书 Obr. 6.4）',
  cap:'<b>这张是「认」，它一张图就把这道题和下一道题分开了。</b>图上四个捷克语缩写，图注里逐个解释过：<b>Mb1 ＝ 外膜 · Mb2 ＝ 内膜 · MMP ＝ 膜间隙 · Mx ＝ 基质</b>。内膜往里折出来的那些褶子是 <b>cristae</b>。'
    + '<br><br><b>看到图要说的两句</b>：“The cycle runs in the <b>matrix</b>, the inner compartment. <b>One</b> of its enzymes, succinate dehydrogenase, sits in the <b>inner membrane</b> instead — and that same enzyme is complex II of the respiratory chain.”'
    + '<br>“The <b>respiratory chain</b> is in that same inner membrane, so the NADH made in the matrix is handed over across almost no distance. The folds, the <b>cristae</b>, are what give that membrane its area.”'
    + '<br><br><b>指着图能顺手答掉两个常问的</b>：<b>「为什么是内膜不是外膜」</b>——外膜是通透的，撑不住质子梯度；<b>「NADH 怎么过膜」</b>——循环的 NADH 就产在基质里，<b>根本不过膜</b>，要过膜的是<b>糖酵解</b>那两个胞质 NADH，那才需要穿梭系统。<b>这两件事最容易被混成一件。</b>',
  src2:'Biochemie, Obr. 6.4, p138 · 300 dpi 原图裁切，未修改（图注捷克语保留）'},

 {k:'认',
  src:'img/p138_aconitase_citrate_isocitrate.jpg',
  t:'第 2 步 · 为什么要多绕这一下（书 p138 正文图式）',
  cap:'<b>这张是「认」，它把第 2 步存在的唯一理由画出来了。</b>三个结构从左到右是 <b>citrát → cis-akonitát → isocitrát</b>，两根箭头上分别写着 <b>−H₂O</b> 和 <b>＋H₂O</b>。'
    + '<br><br><b>一眼要盯住的就是那个 OH 搬了家</b>：左边 citrát 的 OH 长在<b>同时连着三个碳</b>的那个碳上（<b>叔醇</b>），右边 isocitrát 的 OH 搬到了旁边、只连着两个碳的碳上（<b>仲醇</b>）。中间的 cis-akonitát 没有 OH，只有一根双键。'
    + '<br><br><b>看图要说的那两句</b>：“A <b>tertiary</b> alcohol cannot be dehydrogenated, because the carbon carrying the hydroxyl has <b>no hydrogen left</b> to remove. So aconitase takes the water out and puts it back on the other carbon, giving a <b>secondary</b> alcohol, which can.”'
    + '<br>“It is one enzyme doing both halves, so the water is <b>net zero</b> — it does not appear in the overall equation of the cycle.”'
    + '<br><br>⚠ <b>这一步是全循环最容易被问「为什么」的地方</b>，而理由不是生物学的，是有机化学的一条小规则：<b>要脱氢，那个碳上得先有氢。</b>说出这一句，比说出 aconitase 这个名字值钱得多。',
  src2:'Biochemie, p138 正文图式（无图号）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p138_isocitrate_dehydrogenase.jpg',
  t:'第 3 步 · 第一个 CO₂ 是怎么掉下来的（书 p138 正文图式）',
  cap:'<b>这张是「认」，而且它画出了一个卡上只用文字提过的中间物。</b>从左到右：<b>isocitrát</b>，先被 <b>NAD⁺</b> 脱氢变成 <b>oxalsukcinát</b>，然后<b>自己掉一个 CO₂</b>，成为 <b>2-oxoglutarát</b>。箭头上标着 <b>NAD⁺ → NADH</b> 和 <b>CO₂</b>。'
    + '<br><br><b>要看出来的一件事</b>：中间那个 oxalsukcinát，<b>被脱掉氢的那个碳已经变成羰基</b>，而<b>羧基就挂在它的 β 位上</b>——这正是书说的 <b>β-酮酸</b>。β-酮酸会<b>自发</b>脱羧，不用再推。'
    + '<br><br><b>看图要说的那两句</b>：“Oxidation comes first, decarboxylation second. The dehydrogenation makes a <b>keto group</b>, and a carboxyl <b>beta</b> to a keto group leaves as CO₂ spontaneously — it is an exergonic step.”'
    + '<br>“The textbook says the two general sources of CO₂ in biochemical systems are exactly this: <b>decomposition of beta-keto acids</b>, and <b>oxidative decarboxylation of 2-oxo acids</b>. The cycle uses one of each.”'
    + '<br><br>⚠ <b>oxalsukcinát 很少有人说得出来</b>，而它就印在这里。<b>顺手提一句它跟 oxalacetát 的关系</b>：两个都是 β-酮酸，但书说 <b>oxalacetát 稳定得多</b>，所以第 8 步的产物不会自己脱羧掉。<b>同一条化学规则，一次用上、一次用不上——这是书自己埋的对照。</b>',
  src2:'Biochemie, p138 正文图式（无图号）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p138_oxoglutarate_dehydrogenase.jpg',
  t:'第 4 步 · 第二个 CO₂，跟丙酮酸一模一样（书 p138 正文图式）',
  cap:'<b>这张是「认」。</b>左边 <b>2-oxoglutarát</b>，右边 <b>sukcinyl-CoA</b>，箭头上挂着四样：<b>NAD⁺ · CoA-SH</b> 进去，<b>CO₂ · NADH</b> 出来。'
    + '<br><br><b>要看出来的一件事，也是这一步全部的省力处</b>：把 2-oxoglutarát <b>左边那一截 CH₂–COO⁻ 遮住</b>，剩下的就是 <b>pyruvát</b>。书的原话就是它是<b>丙酮酸的同系物</b>——<b>所以丙酮酸脱氢酶那一整套机制原样搬过来，一个字都不用另背</b>。'
    + '<br><br><b>看图要说的那两句</b>：“2-oxoglutarate is a <b>homologue of pyruvate</b>: pyruvate with a CH₂–COO⁻ on the methyl. Its 2-oxo-acid end reacts in exactly the same way.”'
    + '<br>“So the same complex chemistry applies: <b>thiamine diphosphate</b> takes up the fragment after CO₂ leaves, <b>lipoic acid</b> oxidises it and carries the succinyl group, <b>coenzyme A</b> receives it as a <b>thioester</b>, and <b>FAD</b> then <b>NAD⁺</b> reoxidise the lipoate.”'
    + '<br><br><b>两个碳到这里全部出去了。</b>后面四步一个碳都不动，只是把氢一步步取走——<b>这句话说出来，「二进二出」那笔账就闭合了</b>。'
    + '<br>⚠ <b>机制的图在这张卡的丙酮酸脱氢那一张上</b>（书 p168），两张对着看一次就够，<b>不要分别背两遍</b>。',
  src2:'Biochemie, p138 正文图式（无图号）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p139_succinate_dehydrogenase_fad.jpg',
  t:'第 6 步 · 唯一在膜上的一步，也是唯一给 FADH₂ 的一步（书 p139 正文图式）',
  cap:'<b>这张是「认」。</b>左边 <b>sukcinát</b>（两个 CH₂ 夹在两个 COO⁻ 中间，完全对称），右边 <b>fumarát</b>（中间那根<b>双键</b>，两个 COO⁻ 分在两头 ＝ <b>反式</b>），箭头上是 <b>FAD → FADH₂</b>。'
    + '<br><br><b>看图要说的那三句</b>：“Succinate is oxidised to fumarate by <b>succinate dehydrogenase</b>. The FAD on that enzyme is <b>covalently bound</b>, not a free coenzyme.”'
    + '<br>“The enzyme is built into the <b>inner membrane</b>, so this is the only step of the cycle that is not in the matrix. The textbook identifies it as <b>complex II</b> of the respiratory chain.”'
    + '<br>“That is also why this step alone gives <b>FADH₂</b> rather than NADH, and why it is worth only <b>two</b> ATP instead of three: the electrons enter at complex II and <b>bypass complex I</b>.”'
    + '<br><br>⚠ <b>产物一定是反式的 fumarát，不是顺式的 maleát</b>——下一步的 fumarase 只认反式。<b>图上双键两边的 COO⁻ 画在对角，就是这个信息。</b>',
  src2:'Biochemie, p139 正文图式（无图号）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p139_malate_dehydrogenase_closes_cycle.jpg',
  t:'第 8 步 · 闭环的那一根箭头（书 p139 正文图式）',
  cap:'<b>这张是「认」，它是循环合上的那一笔。</b>左边 <b>L-malát</b>（那个 <b>HO–CH</b> 就是要被脱氢的地方），右边 <b>oxalacetát</b>（同一个碳变成了 <b>O＝C</b>），箭头是<b>双向的</b>，上面挂 <b>NAD⁺ → NADH ＋ H⁺</b>。'
    + '<br><br><b>看图要说的那两句</b>：“Malate dehydrogenase makes the <b>third NADH</b> and regenerates <b>oxaloacetate</b>, which closes the cycle. Because oxaloacetate is regenerated it behaves like a <b>catalyst</b> — a small amount can process an unlimited number of acetyl groups.”'
    + '<br>“The textbook adds that oxaloacetate is a <b>beta-keto acid</b> just like oxalosuccinate in the third step, <b>but a much more stable one</b>, so it does not decarboxylate by itself.”'
    + '<br><br>⚠ <b>注意那根箭头是双向的。</b>这一步的平衡其实偏向 malát，是靠<b>下一圈立刻把 oxalacetát 用掉</b>才往前走的——<b>他问「这一步不是不利吗」，答案是「产物被消耗，所以被拉过去」</b>，跟糖酵解第 5 步用的是同一句话。',
  src2:'Biochemie, p139 正文图式（无图号）· 300 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p168_pyruvate_dehydrogenase_complex.jpg',
  t:'进门那一步 —— 丙酮酸怎么变成 acetyl-CoA（书 p168 图式 I）',
  cap:'<b>这张是「画」，而且它不在这道题的页码里，却是这道题的门。</b>循环本身不认丙酮酸，只认 <b>acetyl-CoA</b>；把前者变成后者的就是这一张。<b>第 4 步（2-oxoglutarát）走的是一模一样的化学</b>，所以这张图<b>一张管两处</b>。'
    + '<br><br><b>图上从左到右的五个站</b>：<b>pyruvát</b> 先掉 <b>CO₂</b>；剩下的两碳片挂到 <b>thiaminpyrofosfát（TPP）</b> 上成为 <b>hydroxyethyl-TPP</b>；交给 <b>lipoová kys.（硫辛酸）</b>那个 <b>S–S</b>，被氧化成<b>乙酰基</b>挂在硫上；<b>CoASH</b> 来接走，出去的是 <b>CH₃C–S-CoA</b>；最后 <b>[FAD]</b> 和 <b>NAD⁺</b> 把还原掉的硫辛酸重新氧化回 S–S，放出 <b>NADH ＋ H⁺</b>。底下那三个方括号标的就是三个酶：<b>pyruvátdehydrogenasa · dihydrolipoyl-transacetylasa · dihydrolipoyl-dehydrogenasa</b>。'
    + '<br><br><b>画的顺序（五步，照这个练）</b>：'
    + '<br>① 左边写 <b>pyruvát</b>，往下画一根箭头写 <b>CO₂</b>。'
    + '<br>② 往右画一个大圈，圈上写 <b>TPP</b>，圈下写 <b>hydroxyethyl-TPP</b>。'
    + '<br>③ 再往右画第二个圈，中间画一个 <b>S–S</b> 的五元环挂在 <b>Protein</b> 上——那是<b>硫辛酸</b>，它被拴在蛋白上，像一条<b>摆臂</b>在三个活性位点之间递东西。'
    + '<br>④ 从乙酰基那里往上引一根箭头写 <b>CoASH</b> 进、<b>acetyl-CoA</b> 出。'
    + '<br>⑤ 最右边画第三个圈，标 <b>FAD</b> 和 <b>NAD⁺ → NADH</b>。'
    + '<br><br><b>边画边说的三句</b>：“<b>Oxidative decarboxylation</b> of pyruvate. One carbon leaves as CO₂ and the two-carbon fragment is oxidised, so the step gives both <b>CO₂ and NADH</b>, and the product is a <b>thioester</b>, acetyl-CoA.”'
    + '<br>“Five cofactors, and the order matters: <b>thiamine diphosphate</b> picks the fragment up, <b>lipoic acid</b> oxidises it and carries it, <b>coenzyme A</b> takes it away, then <b>FAD</b> and <b>NAD⁺</b> put the lipoate back the way it was.”'
    + '<br>“The <b>2-oxoglutarate dehydrogenase complex</b> in the cycle itself does exactly the same thing with the same five cofactors — that is step four.”'
    + '<br><br>⚠ <b>这一步不属于循环</b>。账上它算在「一分子葡萄糖 38 ATP」里的那个 <b>6</b>（两个丙酮酸各一个 NADH），<b>不算在循环的 24 里</b>。<b>他问「循环从哪儿开始」，答案是 acetyl-CoA，不是丙酮酸。</b>',
  src2:'Biochemie, p168 图式 (I)（无图号）· 300 dpi 原图裁切，未修改（图上捷克语酶名保留）'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'The citric acid cycle.',
 mean:'他也可能说 “Tell me about the citric acid cycle.”。<b>他真正会说的那句，比卷面短得多。</b>所以答案要自带结构：是什么 → 在哪 → 产什么 → 意义，然后才是步骤。<b>不要一上来就背八步。</b>',
 say:'“It is the closed sequence of eight reactions in the mitochondrial matrix that oxidises the acetyl group of acetyl-CoA to two CO₂ and hands the hydrogen to NAD⁺ and FAD. It is where the catabolic pathways converge — sugar and fat arrive as acetyl-CoA, amino acids there, or as 2-oxoglutarate, succinyl-CoA, fumarate or oxaloacetate. Per acetyl group it gives three NADH, one FADH₂ and one GTP — so what it really produces is reducing power, not ATP. The ATP comes later, in the respiratory chain.”'},

{q:'How much ATP does the citric acid cycle produce?',
 mean:'<b>陷阱问法。</b>直接报数字就上钩了——先纠正前提。',
 say:'“Directly, one GTP per turn — that is all. Of the twelve usually quoted per acetyl group, eleven are made by the respiratory chain from the three NADH and one FADH₂ the cycle hands it. The twelfth is that GTP.”'},

{q:'Which step is regulated?',
 mean:'书只点了一个调节酶，报它，并给抑制剂。',
 say:'“The textbook singles out citrate synthase, the first step, strongly inhibited by ATP and in some organisms by NADH. That makes sense: both are the products the cycle exists to make. The standard account adds isocitrate dehydrogenase and the 2-oxoglutarate dehydrogenase complex. All three are inhibited by ATP and NADH and activated by ADP, so the cycle slows when the cell is energy-rich.”'},

{q:'Why do you get more energy from fat than from sugar?', odd:1,
 mean:'<b>听起来是营养学题。</b>答案是脂肪酸 β-氧化产出更多 acetyl-CoA 进入同一个循环，加上脂更还原。',
 say:'“Because fat is more <b>reduced</b>. A fatty acid is a chain of CH₂ groups with no oxygen, while every carbon of glucose already carries an oxygen. So per carbon, fat has more hydrogen to hand to NAD⁺ and FAD, and more electrons for the respiratory chain. The textbook’s figures: glucose −2 870 kJ per mole, palmitic acid −11 340 — about one and a half times more per carbon. Both are burned in the same cycle. In β-oxidation the fat is simply delivered as acetyl-CoA. That is the mitochondrial breakdown of an activated fatty acid, acyl-CoA: it oxidises the β-carbon and cuts off two carbons at a time as acetyl-CoA, with one FADH₂ and one NADH per cut.”',
 tail:'「更还原」这层书没有直接说，但 p135 给了数字（葡萄糖 −2 870、棕榈酸 −11 340 kJ/mol），按碳算约 1.5 倍——拿数字说比拿理论说稳。β-氧化 p220。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>每个碳能放多少能量 = ΔG°′ ÷ 碳数</code><br><br><b>三步推导</b>（「1.5 倍」是这么来的，书只给了前两个数）：<br>① 葡萄糖是六碳：<code>−2 870 ÷ 6 ≈ −478 kJ/mol 每碳</code>。<br>② 棕榈酸是十六碳：<code>−11 340 ÷ 16 ≈ −709 kJ/mol 每碳</code>。<br>③ <code>709 ÷ 478 ≈ 1,5</code>。所以是「<b>每个碳</b>多一半」，不是「总量多四倍」——总量的差只是因为棕榈酸的链更长。<b>不按碳归一化就没法比，这一步是这条答案的全部要害。</b><br><br><br><b>=== 一句话理解 ===</b><br>一个碳能放多少能量，看的是<b>它身上还挂着几个氢</b>：氢是电子的运输工具，而分子唯一能交给 NAD⁺ 和 FAD 的就是氢。<br>糖的<b>每一个碳都已经挂着一个氧</b>（等于半路上已经被氧化过一次），脂肪酸的碳是光秃秃的 CH₂，<b>所以糖的每个碳只剩下大约三分之二的路可走</b>。<br><b>「脂肪能量高」不是密度上的比喻，是每个碳的氧化态之差</b>——这样说比报营养学那种「每克多少千卡」稳得多。'},

{q:'Why can’t you turn fat into sugar?', odd:1,
 mean:'<b>问的是乙酰基的两个碳全变成 CO₂ 出去了。</b>而且书给了唯一的例外。',
 say:'“Because two carbons enter as the acetyl group and two leave as CO₂, so there is no net carbon left to build glucose from. The textbook says it directly: the animal cannot turn acetyl-CoA back into pyruvate, so it cannot make sugar from fat. The exception the textbook gives is the <b>glyoxylate cycle</b>. Bacteria and germinating oil seeds use it to bypass the two decarboxylations, which is exactly why they can grow on acetate.”',
 tail:'<b>这一条非常好用</b>：一个「不能」加一个书里的例外，正是 researcher 的答法。<span class="pg">p140 p141</span>'},

{q:'Why does the cycle keep running even when the cell has plenty of ATP?', odd:1,
 mean:'问的是<b>它不只是分解</b>——留口子那一格。',
 say:'“It slows, but it does not stop. It slows because citrate synthase is inhibited by ATP. It does not stop because the cycle is also a supply depot. 2-oxoglutarate and oxaloacetate are the carbon skeletons for glutamate and aspartate, and succinyl-CoA is the precursor of porphyrins. Those are needed whether or not the cell needs ATP. Draining them lowers oxaloacetate, so anaplerotic reactions, above all pyruvate carboxylase, refill it.”'},

{q:'What is acetyl-CoA and why is it special?',
 mean:'接<b>化学键</b>那张横向卡。',
 say:'“It is a <b>thioester</b> — the acetyl group is bound to the free SH of coenzyme A. The textbook calls thioesters generally very reactive and acetyl-CoA a macroergic compound. That reactivity is what lets its methyl group do the aldol condensation with oxaloacetate in the first step.”'},

{q:'Which steps produce CO₂?',
 mean:'两步，而且书给了它们的共同机制。',
 say:'“Two: isocitrate to 2-oxoglutarate, and 2-oxoglutarate to succinyl-CoA. The textbook notes that the decarboxylation of <b>beta-keto acids</b> and the oxidative decarboxylation of <b>2-oxo acids</b> are the two main sources of CO₂ in biochemical systems. And the cycle uses one of each. A 2-oxo acid, also called an α-keto acid, has its keto group on the carbon next to the carboxyl: pyruvate, 2-oxoglutarate. A β-keto acid, or 3-oxo acid, has it one carbon further along: oxalosuccinate, oxaloacetate. The first is decarboxylated oxidatively by a dehydrogenase complex. The second decarboxylates spontaneously.”'},

{q:'Which step gives FADH₂ rather than NADH?',
 mean:'一步，而且它有两个特别之处。',
 say:'“Succinate to fumarate, by succinate dehydrogenase. Two things are unusual about it: the FAD is <b>covalently</b> bound rather than a free coenzyme, and the enzyme sits in the inner membrane rather than in the matrix.”'},

{q:'What is substrate-level phosphorylation?',
 mean:'循环里只有一处，正好当例子。',
 say:'“Substrate-level phosphorylation is the formation of ATP or GTP by transferring a phosphoryl group from a high-energy substrate intermediate directly onto ADP or GDP. A soluble enzyme does it — no membrane, no proton gradient. The textbook’s example is 1,3-bisphosphoglycerate in glycolysis. In this cycle it happens once. Succinyl-CoA is macroergic, a thioester with about 30 kJ per mole of hydrolysis energy. So instead of just hydrolysing, it reacts with GDP and inorganic phosphate to give GTP, and that phosphate can be handed on to ADP.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他会单独拎出来问的名词。', items:[
{r:'中', q:'Where does it happen?',
 en:'“In the matrix, the inner space of the mitochondrion. There is one exception: succinate dehydrogenase sits in the inner membrane, and it is complex II of the chain. That is also why that step feeds its electrons straight to ubiquinone.”',
 cn:'一个词的答案，但<b>那个例外值得主动说</b>。'},
{r:'中', q:'What are NAD⁺ and FAD — and what is NADH?',
 en:'“NAD⁺ and FAD are the coenzymes of the dehydrogenases in their oxidised form. They accept the hydrogen that a dehydrogenase strips from its substrate — two electrons with protons. NAD⁺ takes a hydride and becomes NADH. FAD takes two hydrogens and becomes FADH₂. The reduced forms carry that energy to the respiratory chain, which reoxidises them and makes the ATP. NAD⁺ is loosely bound and moves between enzymes. The FAD of succinate dehydrogenase is covalently bound, a prosthetic group.”',
 cn:'<b>这张卡用得最多的名词，之前没正面定义。</b>'},
{r:'中', q:'What is oxaloacetate?',
 en:'“The four-carbon 2-oxo dicarboxylic acid that accepts the acetyl group in the first step and is regenerated in the last. The textbook calls it the key compound of the cycle, and because it comes back it is a carrier, not a reactant. It is also a β-keto acid, but a stable one, and by transamination it is the carbon skeleton of aspartate.”',
 cn:'书叫它「循环的关键化合物」（p136）。'},
]},
{g:'为什么类', gn:'四个「为什么」，全部有书作根据。这一组比八个酶名值钱。', items:[
{r:'高', q:'What is oxidative decarboxylation?',
 en:'“The conversion of a 2-oxo acid into the acyl-CoA one carbon shorter. The carboxyl next to the keto group leaves as CO₂, while the remaining carbonyl carbon is oxidised to an acyl group and captured as a thioester on coenzyme A, with NAD⁺ reduced. A multienzyme complex does it, with thiamine diphosphate, lipoate, coenzyme A, FAD and NAD⁺. Pyruvate to acetyl-CoA and 2-oxoglutarate to succinyl-CoA are the two cases in this topic.”',
 cn:'p168–p169，p138。'},
{r:'高', q:'Are the two CO₂ released the two acetyl carbons?',
 en:'“Not in the same turn. Both CO₂ released in one turn come from the oxaloacetate half of citrate. The two acetyl carbons stay in the four-carbon acids and leave as CO₂ only in later turns — succinate is symmetrical, so they get scrambled. The net balance is still two carbons in as acetyl, two out as CO₂.”',
 cn:'Lehninger；书只给净式（p139）。'},
{r:'高', q:'Why does citrate have to be isomerised first?',
 en:'“Because citrate carries a <b>tertiary</b> alcohol, and a tertiary alcohol cannot be oxidised further. Its OH sits on a carbon bonded to three other carbons, so that carbon carries no hydrogen. Dehydrogenation means removing the hydrogen on that carbon together with the hydrogen of the OH, and there is nothing to take. Isocitrate carries a <b>secondary</b> one, whose carbon has one hydrogen, so it can be dehydrogenated to a ketone. The isomerisation produces no energy and releases no carbon — its only job is to make the next step possible.”',
 cn:'<b>书直接给了这个理由</b>（<span class="pg">p138</span>）。这是全循环里最容易被问、也最容易答不上的一步——因为它看起来「多余」。'},
{r:'高', q:'Why does oxalosuccinate decarboxylate on its own?',
 en:'“Because one of its carboxyls sits in the <b>beta</b> position relative to the carbonyl. Beta-keto acids decarboxylate spontaneously, and it is an exergonic reaction — it releases Gibbs energy, so it runs on its own.”',
 cn:'书还顺带给了一个很好用的普遍结论：<b>β-酮酸分解 ＋ 2-酮酸的氧化脱羧，是生化系统里 CO₂ 的两大来源</b>。<br>被继续追「那 oxaloacetate 也是 β-酮酸，为什么它不脱羧」——<b>书自己回答了：它稳定得多。</b>“Oxaloacetate is also a β-keto acid, but it is much more stable, so it does not decarboxylate on its own the way oxalosuccinate does. That is why it survives to accept the next acetyl group.”<span class="pg">p138 p139</span>'},
{r:'高', q:'Why does acetyl-CoA react at all — what makes its methyl group reactive?',
 en:'“Because the thioester bond blocks the resonance, the mesomerism, that stabilises an ordinary O-ester: sulfur’s lone pair does not delocalise into the carbonyl. That leaves a real carbonyl, and with the carbonyl fixed the methyl group can act as the nucleophile in the condensation with oxaloacetate. That condensation is exactly the first step of the cycle. The textbook calls it an <b>aldol condensation</b>: the α-carbon of one carbonyl compound joining the carbonyl carbon of another, giving a β-hydroxy carbonyl, here citryl-CoA. Lehninger calls it a Claisen-type condensation, because the nucleophile is a thioester enolate.”',
 cn:'<b>这一条把「化学键」那张横向卡接了进来</b>，而且它解释了为什么细胞非要用硫酯不用普通酯。<span class="pg">p136</span>'},
{r:'中', q:'Why store the energy as NADH instead of making ATP directly?',
 en:'“Because the cell can only capture energy in packets of about 30 kJ per mole — one ATP. Oxidising NADH with oxygen releases far more than one packet, so the electrons are parked on NADH and let down the respiratory chain stepwise, each step matched to proton pumping and, through the gradient, to ATP.”',
 cn:'书 p134–p135 给了根据：能量的生成和消耗都是「量子化」的，机体只能以约 30 kJ/mol 的份额（一个 ATP）捕获能量。比原来那句「在膜上统一结算」有书可依。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG°′ = −nFΔE°′</code>（书 p135）· <code>一个 ATP ≈ 30 kJ/mol</code>（书 p135–p136 说的那个「量子」）<br>n 是转移的电子数 · F 是法拉第常数，一摩尔电子带的电量 <code>≈ 96,5 kJ·V⁻¹·mol⁻¹</code> · ΔE°′ 是两端的电位差。<br><br><b>三步推导</b>（一次烧完到底浪费多少）：<br>① NADH 那一端的电位是 <b>−0,32 V</b>，氧那一端是 <b>+0,82 V</b>（书 table 6.2，p135）：<code>ΔE°′ = 0,82 − (−0,32) = 1,14 V</code>。<br>② 一个 NADH 交出<b>两个</b>电子，n = 2：<code>ΔG°′ = −2 × 96,5 × 1,14 ≈ −220 kJ/mol</code>。<br>③ 而细胞一次只装得下约 <b>30 kJ</b>（一个 ATP）：<code>220 ÷ 30 ≈ 7</code> 份。按书的 3 个 ATP 算，实收 <code>3 × 30,5 ≈ 91 kJ</code>，约 <b>40%</b>。<br><br><br><b>=== 一句话理解 ===</b><br>一步烧完，等于拿一个 <b>30 毫升的杯子</b>去接 <b>220 毫升</b>的水：接住 30，洒掉 190。<br><b>把落差切成一串台阶，不是为了慢，是为了让每一级的落差正好装得进一个杯子。</b>NADH 的作用就是先把电子<b>停在半路</b>（−0,32 V 这个高度），等膜上有台阶了再一级一级放下去。<br>这也顺带解释了为什么全代谢里<b>没有任何一步是「NADH → ATP」</b>：两边的货币不一样（这边流通电子，那边流通磷酸基），中间必须换一次汇，而那个汇就是质子梯度。<br>⚠ <code>−220</code> 和 <code>40%</code> 是拿书的表和书的式子<b>算出来的，书没有印</b>——报的时候带一句「按你这本书的数算下来大约」。'}
]},

{g:'相邻考点', gn:'第 6 章紧挨着的内容，他从这题走出去多半走这几个方向。', items:[
{r:'高', q:'What is the glyoxylate cycle?',
 en:'“A modification of the citric acid cycle in some microorganisms and plants that skips the two decarboxylations, so acetyl-CoA is not degraded but used to build a four-carbon dicarboxylic acid. Two extra enzymes do it: isocitrate lyase splits isocitrate into succinate and glyoxylate, and malate synthase joins glyoxylate with a second acetyl-CoA to give malate. Net, two acetyl-CoA give one oxaloacetate plus two NADH and one FADH₂ — about eight ATP. It is why many bacteria can grow on acetate, and how germinating oil seeds turn stored fat into the sugar they need.”',
 cn:'<b>书单独给了它一节</b>（§6.2.3，<span class="pg">p140 p141</span>）。它是「为什么动物不能把脂肪变成糖」那道题的正解，<b>一个「不能」加一个书里的例外</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子（书 p140 的总式）</b>：<code>2 acetyl-CoA + 2 NAD⁺ + FAD + 3 H₂O → oxaloacetate + 2 NADH + H⁺ + FADH₂ + 2 CoA-SH</code><br><br><b>四步推导</b>（那「约八个 ATP」是这么算的）：<br>① 关键改动：<b>isocitrate lyase</b> 把 isocitrate 直接劈成 succinate ＋ glyoxylate，<b>绕过第 3、4 步那两次氧化脱羧</b>——所以<b>一个 CO₂ 都不放</b>，四个碳全留下。<br>② 还原力因此也少：一圈只剩 <b>2 个 NADH ＋ 1 个 FADH₂</b>（少的正是那两次脱羧带来的 NADH）。<br>③ 按书 p139 的兑换率换算：<code>2 × 3 + 1 × 2 = 8</code>。<br>④ ⚠ <b>「8」这个数书没有印</b>，是拿书的总式加书的兑换率算出来的——报的时候带一句「按这本书的数算下来大约八个」。<br><br><br><b>=== 一句话理解 ===</b><br>两个乙酰基走柠檬酸循环能拿 <b>24 个 ATP</b>（<code>2 × 12</code>），走 glyoxylate 只拿 <b>8</b>。<b>差的那 16 个，就是「不烧碳」的价钱</b>——换来的是一个完整的四碳 oxaloacetate，可以拿去造糖。<br>所以两条路的关系一句话说得完：<b>同一个圈，一个把碳当燃料，一个把碳当建材。放弃那两个 CO₂，就等于放弃那 16 个 ATP。</b>'},
{r:'高', q:'What happens to the NADH afterwards?',
 en:'“It goes into the respiratory chain, the series of electron carriers in the <b>inner mitochondrial membrane</b>, complexes I to IV with ubiquinone and cytochrome c between them. That is a different compartment from the cycle itself. NADH is oxidised by complex I, NADH:ubiquinone oxidoreductase. The electrons go to ubiquinone, complex III, cytochrome c and complex IV, from lower to higher redox potential, and finally to oxygen. Redox potential is the measure of how strongly a redox pair holds its electrons: NADH/NAD⁺ sits at about −0.32 volts, oxygen at +0.82. Protons are pumped into the intermembrane space, and ATP synthase makes ATP by letting them back.”',
 cn:'书 §6.2.4 从 <span class="pg">p141</span> 开始。<b>循环在基质、呼吸链在内膜</b>——这个区室的区别是两道题的分界线（#25 #26）。'},
{r:'中', q:'Where does succinyl-CoA go if not round the cycle?',
 en:'“Into porphyrin synthesis. Succinyl-CoA and glycine give delta-aminolevulinate. The enzyme that does it, delta-aminolevulinate synthase, is the <b>key regulatory point</b> of porphyrin synthesis.”',
 cn:'书 §6.3（<span class="pg">p146</span>）。<b>这条同时接卡 01 的血红素、和 glycine 的去向。</b>'},
{r:'中', q:'Why is aerobic metabolism worth the trouble?',
 en:'“Because it yields nineteen times more ATP per glucose: two by lactate fermentation, theoretically thirty-eight aerobically. The textbook adds that aerobic degradation of carbohydrates is <b>evolutionarily the later, higher form</b>.”',
 cn:'<b>书自己下了这个进化结论</b>，所以你可以直接引用而不用担心越界。<span class="pg">p136</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>38 ÷ 2 = 19</code>。<b>「19 倍」不是书印的词</b>，是把书 p136 那两个数（每摩尔葡萄糖：无氧 2 摩尔 ATP、有氧理论上 38 摩尔）相除得来的。<br><br><b>两步推导</b>：<br>① 无氧（乳酸发酵）：只有糖酵解的<b>净 2 个</b>底物水平磷酸化。那 2 个 NADH 必须拿去把丙酮酸还原成乳酸，才能把 NAD⁺ 还回来让糖酵解继续——<b>一个也兑不成 ATP</b>。<br>② 有氧：同一分子葡萄糖，<code>8 + 6 + 24 = 38</code>。<code>38 ÷ 2 = 19</code>。<br><br><br><b>=== 一句话理解 ===</b><br>差的这 19 倍<b>全部来自氧</b>——而且不是氧「提供」了能量，是氧<b>把电子收走了</b>，链才腾得出手继续泵质子。<br><b>没有最终受体，还原辅酶就堆在那里，那 36 个 ATP 一个也收不上来。</b>报数字时照书说「<b>理论上</b> 38」，因为那是理论最大值；现代教材算 30–32，差在哪儿见上面「兑换率」那一格。'}
]},

{g:'硬事实', gn:'不背，眼熟即可。specific 题的弹药。', items:[
{r:'中', q:'名字全表（八步的酶）',
 en:'“Citrate synthase · aconitate hydratase · isocitrate dehydrogenase · the 2-oxoglutarate dehydrogenase complex · succinyl-CoA synthetase · succinate dehydrogenase · fumarate hydratase · malate dehydrogenase.”',
 cn:'书还有一张 <b>Table 6.3「柠檬酸循环的酶及其辅因子」</b>（<span class="pg">p136</span>），OCR 出来碎了。<b>⚠ 待办：回 300 dpi 原图抄这张表。</b><br>另外 isocitrate dehydrogenase 这个名字 OCR 没直接给出，是从反应推的——<b>也要回原图核。</b>辅因子被问（原图核对前按通用说）：“The cofactors are these. Isocitrate dehydrogenase and malate dehydrogenase use NAD⁺. The 2-oxoglutarate dehydrogenase complex uses thiamine diphosphate, lipoic acid, coenzyme A, FAD and NAD⁺. Succinate dehydrogenase has covalently bound FAD and iron–sulfur centres. Succinyl-CoA synthetase needs GDP and phosphate. Aconitase carries an iron–sulfur cluster. Citrate synthase and fumarase need no cofactor.”'},
{r:'中', q:'中间产物按顺序',
 en:'“Citrate · cis-aconitate · isocitrate · oxalosuccinate · 2-oxoglutarate · succinyl-CoA · succinate · fumarate · L-malate · oxaloacetate.”',
 cn:'<b>十个名字。</b>其中 cis-aconitate 和 oxalosuccinate 是<b>不稳定的中间体</b>，通常不算在「八步」里——所以说「八步」和说「十个中间产物」都对：“Two of the ten are unstable intermediates that stay on the enzyme: cis-aconitate and oxalosuccinate. They are not counted as separate steps, so there are eight steps and ten named compounds. The textbook counts the aconitase dehydration and hydration separately, which is why it calls the hydration of cis-aconitate the third reaction.”'}
]}
]
});
