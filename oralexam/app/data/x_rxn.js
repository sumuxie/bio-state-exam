/* 横向卡 · 反应类型的名字
   不对应某一道题，跨很多题共用。她自己说的毛病：反应名字「乱不清」。
   出处 Biochemie OCR p041–p042（六大类 ＋ EC 号的读法）、p063、p113–p114、p119–p123、
   p134、p136–p139、p148–p151、p159–p162、p164–p165、p173–p174、p195–p196。
   书的勘误第 6 条（p196 thiolase 印成 ketokinase）用在速背第 13 点和追问里。 */

window.CARDS.push({
id:'x-rxn', cross:1, w:0,
q:'反应类型的名字到底有几族，怎么才不乱',
qcn:'横向卡 · 先问分子身上变了什么，再报名字；EC 六大类是另一个问题',
sub:'跨题共用 · 卡 06、23、24、25、27、31、32、gly、aa 都要用到',

cram:[
 {g:'先分清两个不同的问题', gn:'乱，多半是因为把这两个问题混成了一个。x_bonds 那张卡也是这个毛病，处理方式一样。'},
 {n:'01', t:'第一个问题',
  big:'日常的名字回答的是 —— <b>分子身上发生了什么</b>',
  en:'“Almost every everyday reaction name says what happened to the molecule. Isomerisation, the same atoms rearranged. Transamination, an amino group moved. Decarboxylation, one carbon lost as carbon dioxide. Hydrolysis, water broke a bond. If I know what changed, the family follows, and I can place a name I have never heard.”',
  note:'<b>这一条是整张卡的用法。</b>考场上他报一个名字，你不需要背过它，你需要能说出<b>它属于哪一族</b>。<br>名字几乎全是按「变了什么」起的：<b>iso-</b> 是同一堆原子换摆法，<b>trans-</b> 是有东西从一个分子搬到另一个分子，<b>de-</b> 是拿掉（decarboxylation 拿掉 CO₂、dehydration 拿掉水、dehydrogenation 拿掉氢），<b>-lysis</b> 是有人来砍这一刀。'},
 {n:'02', t:'第二个问题',
  big:'EC 六大类回答的是 —— <b>这个酶属于哪一类</b>',
  en:'“The official classification is of enzymes rather than of reactions. The textbook divides enzymes into six main classes by the reaction they catalyse. Oxidoreductases, transferases, hydrolases, lyases, isomerases and ligases. Each enzyme gets a systematic name describing the reaction, a recommended everyday name, and a code number.”',
  tbl:{head:['EC 类','书给的定义（p041–p042）','对应的日常名字','书自己给的例子和编号'],
   rows:[
    ['<b>1 · Oxidoreductases</b>','催化氧化还原反应：电子转移、氢转移、或与氧反应','oxidation · reduction · <b>dehydrogenation</b>','lactate dehydrogenase <b>E.C.1.1.1.27</b> <span class="pg">p041</span> · glutamate dehydrogenase E.C.1.4.1.2 <span class="pg">p119</span>'],
    ['<b>2 · Transferases</b>','催化<b>基团的转移</b>','<b>transamination</b> · <b>phosphorylation</b> · 甲基化 · 酰基转移','aminotransferases <b>E.C.2.6.1</b> <span class="pg">p120</span> · hexokinase ＝ ATP:hexose phosphotransferase <span class="pg">p042</span>'],
    ['<b>3 · Hydrolases</b>','催化水解反应；亚类<b>按被水解的键</b>分','<b>hydrolysis</b>','arginase E.C.3.5.3.1，水解切下尿素 <span class="pg">p123</span>'],
    ['<b>4 · Lyases（Synthases）</b>','<b>非水解、非氧化</b>地断键，常生成一个双键；反过来是加到双键上','<b>decarboxylation</b> · <b>dehydration</b> · <b>hydration</b> · aldol cleavage','oxalate carboxy-lyase <span class="pg">p042</span> · serine dehydratase E.C.4.2.1.13 <span class="pg">p119</span>'],
    ['<b>5 · Isomerases</b>','催化异构化','<b>isomerisation</b> · <b>epimerisation</b> · cis-trans','fumarate cis-trans isomerase <span class="pg">p042</span>'],
    ['<b>6 · Ligases（Synthetases）</b>','在<b>水解高能化合物</b>（多半是 ATP）的同时生成一个键','要花 ATP 的缩合','carbamoyl phosphate synthetase E.C.6.3.4.16 · argininosuccinate synthetase E.C.6.3.4.5 <span class="pg">p123</span>'],
   ]},
  note:'<b>六个类的完整说法在卡 18</b>（「What are the six classes of enzyme?」），卡 17 的开口段也有一句。这里只要能说出<b>两套分类回答的是两个不同的问题</b>就够。<br>上面每一行的 EC 号都是<b>书自己印出来的</b>，全书只出现过九个 EC 号，六个类正好各有一个例子。<b>被追问「你怎么知道这类是几号」，报书上的酶名，比报类号稳。</b>',
  warn:'⚠ <b>两套分类不是一一对应的。</b>同一个日常名字可以落在不同的 EC 类里：<b>hydration 和 dehydration 归 lyases 不归 hydrolases</b>（书自己把 serine dehydratase 编成 4.2.1.13）；而<b>硫解不是水解</b>，按书给 transferases 的定义它是转移酶。<b>先答日常名字，他追问再给类。</b>'},

 {g:'认一个没听过的名字：按这四句问', gn:'这一组是这张卡的用法。名字没听过也能把它放进对的家族，然后照那一族的话往下说。'},
 {n:'03', t:'判断顺序',
  big:'数碳 → 数氢 → 谁搬家 → 一个变两个吗 → 都没有就是重排',
  en:'“I place a reaction name I do not know by asking four questions in order. Did a carbon-carbon bond break or form. Did the oxidation state change. Did a group move from one molecule to another. Did one molecule become two. If all four answers are no, the same atoms have simply been rearranged, and the name is a kind of isomerisation.”',
  tbl:{head:['依次问这一句','答「是」→ 属于','这一族的名字'],
   rows:[
    ['① <b>C–C 键</b>断了或者接上了吗？','<b>家族 D</b> · 碳链变长变短','decarboxylation · carboxylation · aldol cleavage · thiolytic cleavage · condensation'],
    ['② <b>氧化态</b>变了吗？（最省事的判据：<b>氢走了没有</b>）','<b>家族 B</b> · 氧化还原','oxidation · reduction · dehydrogenation'],
    ['③ 有没有一个<b>基团从这个分子跑到另一个分子上</b>？','<b>家族 C</b> · 基团转移','transamination · phosphorylation · transketolase · transaldolase · 甲基化'],
    ['④ <b>一个分子变成两个</b>了吗（或者两个并成一个）？','<b>家族 E</b> · 水进水出，以及谁来砍','hydrolysis · condensation · hydration · dehydration · phosphorolysis · thiolysis'],
    ['四句都答「否」','<b>家族 A</b> · 同一堆原子换个摆法','isomerisation · epimerisation · mutarotation · cis-trans isomerisation'],
   ]},
  warn:'⚠ <b>这个四问的顺序是这张卡自己排的，书里没有。</b>被追问就说它是一个记忆顺序，不是书上的分类。<br>顺序不能反着问：很多名字<b>同时踩两个家族</b>（oxidative decarboxylation 同时是 B 和 D），<b>先问到的那个就是主家族</b>，另一半放到第 16 点的复合名字里说。'},

 {g:'家族 A · 同一堆原子，换个摆法', gn:'书 p159 §7.6 给了这一族最好的判据，书自己的那一句是 <i>the number of carbon atoms does not change in these reactions</i>——这类反应里<b>碳原子的数目不变</b>。'},
 {n:'04', t:'isomerisation 对 epimerisation',
  big:'<b>isomerisation</b> 挪的是<b>羰基</b>的位置；<b>epimerisation</b> 翻的是<b>一个碳上的立体排布</b>',
  en:'“The textbook puts these two side by side in section 7.6.1. Epimerisation is a change of the steric arrangement at one of the carbon atoms, the position of the hydroxyl. Its examples are glucose to galactose, with a uridine diphosphate coenzyme, and ribulose-5-phosphate to xylulose-5-phosphate. Isomerisation is the shift of the carbonyl group to the neighbouring carbon, an aldose becoming a ketose. Its examples are glucose to fructose, and glyceraldehyde-3-phosphate to dihydroxyacetone phosphate. In neither does the number of carbon atoms change.”',
  note:'<b>反应式</b>：<code>isomerisation　醛糖 ⇌ 酮糖，羰基从 C-1 挪到 C-2　　glucose ⇌ fructose</code><br><code>epimerisation　一个碳上的 OH 从右翻到左，羰基不动　　glucose ⇌ galactose（C-4）</code><br>书 <span class="pg">p160 §7.6.1</span> 的节标题把两个词并排印在一起，那一节的标题是 <i>Epimerisation and isomerisation</i>。<b>这一节是老师问「glucose 怎么变 galactose」时脑子里的那一页</b>（答 <b>epimerization at C-4</b>，UDP-glucose-4-epimerase，p172）。<br><b>她已经有的例子</b>：卡 <b>gly</b> 的 hexose phosphate isomerase（平衡时 30% 果糖）和 triose phosphate isomerase（平衡时 96% DHAP），都在 <span class="pg">p164</span>，卡 <b>32</b> 引了这两个比例 · 卡 <b>06</b> 的 UDP-glucose-4-epimerase。',
  warn:'⚠ <b>书没有给 isomerisation 的一般定义。</b>p160 那句「羰基挪到相邻的碳上」只管糖；p042 那句「isomerases 催化 isomerisation」是循环定义。<b>一般定义（同一个分子式、原子排布不同）是通用知识</b>，被追问出处要把这两半分开说。'},
 {n:'05', t:'五个词，当成一道数数题',
  big:'不是背五个定义，是数 —— <b>差在几个不对称碳上</b>',
  en:'“Five words, and the way to keep them straight is to count. Two molecules with the same formula and a different arrangement are isomers. If they differ only in the arrangement in space they are stereoisomers, and a molecule with n asymmetric carbons has two to the n of them. Differ at every asymmetric carbon and they are enantiomers, mirror images. Differ at exactly one and they are epimers, which is the textbook’s own definition. And if that one carbon is the anomeric carbon made by ring closure, they are anomers.”',
  note:'<b>全部的数（16 个醛己糖 · 8 对对映体 · 正好 4 个 epimer · α 和 β 两个 anomer）在卡 06 已经算完了</b>，连推导带一句话理解都在那儿。这里只给<b>判断顺序</b>：先问差在几个碳上（<b>一个 ＝ epimer，全部 ＝ enantiomer</b>），再问那一个碳是不是 <b>C-1</b>（<b>是 ＝ anomer</b>）。<span class="pg">p148 p149 p150</span>',
  warn:'⚠ <b>enantiomer 这个词全书 0 命中</b>，stereoisomer 也只在 p148、p149 出现过。书给的是 <b>epimers 的定义</b>（p149：只在一个不对称碳上构型不同的单糖）、<b>anomers 的定义</b>（p150）和 <b>2ⁿ 这个数</b>（p148）。<b>对映体那一句要标明是通用知识。</b>',
  good:'一句话把三个词串起来，说得出就不用解释三遍：“Anomers are epimers at carbon one, and unlike other epimers they interconvert in solution, because the ring can open.”'},
 {n:'06', t:'同族的另两个名字',
  big:'<b>mutarotation</b> 是 α ⇌ β 自己在变；<b>cis-trans isomerisation</b> 是取代基挪到双键的另一边',
  en:'“Two more names in the same family. Mutarotation is the change of optical rotation with time when one pure anomer dissolves, because the α and β forms interconvert through the open chain. The textbook gives plus 112 degrees and plus 18.4 for the two anomers of D-glucose, both drifting to plus 52.7. Cis-trans isomerisation moves a substituent to the other side of a double bond. The textbook’s enzyme example is fumarate cis-trans isomerase, and β-oxidation needs one because natural unsaturated fatty acids are cis while those enzymes require trans.”',
  note:'三个旋光度是书 <span class="pg">p151</span> 的：α 是 ＋112°，β 是 ＋18,4°，两边都漂到 ＋52,7°。fumarate ⇌ maleate 是书给 isomerases 的那个例子 <span class="pg">p042</span>。<br><b>同一个家族横跨三章</b>：糖里是变旋（卡 06）· 脂里是 β-氧化前面那一步，天然不饱和脂肪酸是 cis，酶只认 trans，所以要 <i>cis-trans isomerase</i> 和 <i>epimerase</i>（<span class="pg">p195</span>，卡 23）· 蛋白里是 peptidylprolyl-cis,trans-isomerase（<span class="pg">p109</span>，卡 01、卡 13）。<b>说得出这三处是同一族，比多记一个名字值钱。</b>'},

 {g:'家族 B · 氧化态变了', gn:'书 p134 §6.2.1 给了一个不用数氧化数的判据，这一族全靠那一句。'},
 {n:'07', t:'不数氧化数怎么判断',
  big:'<b>氢走了就是氧化</b>，而且氢总有一个去处：NAD⁺ 或 FAD',
  en:'“The textbook’s definition is on page 134. Oxidation is the giving up of electrons and reduction is the taking of them. Then it adds the sentence I actually use. In organic compounds oxidation often means dehydrogenation, the loss of one or more hydrogen atoms, a proton and an electron together. Its example is ethanol going to acetaldehyde. And released electrons cannot exist on their own, so an oxidation is always coupled to the reduction of something else.”',
  note:'<b>反应式</b>（书 p134 自己写的两行）：<code>Red ⇌ Ox ＋ n e⁻</code>　<code>CH₃CH₂OH ⇌ CH₃CHO ＋ 2[H]</code>，那两个 [H] 落在 NAD⁺ 上。<br>考场上的用法就一句：<b>看氢往哪儿走。</b>氢离开底物、落在 NAD⁺ 或 FAD 上 → 底物被氧化；氢从 NADH 或 NADPH 过来 → 底物被还原。<b>一个氧化数都不用数。</b><br>书还给了热力学那一半：氧化<b>放能</b>，产物 Gibbs 能更低、熵更高；还原<b>吸能</b>。<b>这一条接卡 25 和卡 27</b> —— 呼吸链是把氢一路交出去交给氧，光合作用是把氢塞回二氧化碳上。',
  good:'顺势能给的一句：“So the whole of catabolism is one long dehydrogenation, and the respiratory chain is where that hydrogen is finally handed to oxygen.”'},
 {n:'08', t:'非要数的时候怎么数',
  big:'只数<b>那一个碳</b>：连着几个 O/N/S 算加，连着几个 H 算减',
  en:'“If I am pushed to count, I count on one carbon only. Every bond to oxygen or nitrogen or sulfur counts plus one, every bond to hydrogen counts minus one, and a bond to another carbon counts zero. That gives a ladder: methane at minus four, methanol at minus two, formaldehyde at zero, formic acid at plus two, carbon dioxide at plus four. So an alcohol going to an aldehyde is an oxidation by two, and I can read any step off that ladder.”',
  note:'<b>拿书里的反应对一遍这把梯子，三个都对得上</b>：glucose-6-phosphate → 6-phosphogluconolactone（C-1 从醛升到酯，NADP⁺ 收氢，<span class="pg">p160</span>）· succinate → fumarate（脱两个氢给 FAD，<span class="pg">p139</span>，卡 24）· L-malate → oxaloacetate（羟基升成酮，脱氢给 NAD⁺，卡 24）。<b>三个都是「氢走了」，梯子只是把它读成一个数。</b>',
  warn:'⚠ <b>这把梯子书里没有</b>，是通用有机化学。书只给到「在有机化合物里氧化常常就是脱氢」那一句，加上 ethanol → acetaldehyde 那个例子（<span class="pg">p134</span>）。<b>被追问出处，把哪一半是书的说清楚。</b>'},

 {g:'家族 C · 一个基团从这个分子搬到那个分子', gn:'书给 transferases 的定义只有一句：催化基团的转移（p041）。这一族的名字要么 trans- 开头，要么直接拿被搬的东西命名。'},
 {n:'09', t:'transamination',
  big:'搬走的是 <b>–NH₂</b>，留下的是<b>碳骨架</b>；辅酶是 <b>PLP</b>',
  en:'“Transamination is the transfer of the amino group of an amino acid onto the oxo group of a 2-oxoacid. The textbook names three usual acceptors: pyruvate, 2-oxoglutarate and oxaloacetate. So the amino group and the oxo group swap places, and neither carbon skeleton moves. The enzymes are the aminotransferases, E.C. 2.6.1, and the coenzyme is pyridoxal phosphate from vitamin B-six. The amino acid forms a Schiff base with it, the carbon-nitrogen double bond an aldehyde makes with a primary amine.”',
  note:'<b>反应式</b>（书 <span class="pg">p120</span> 印的那一行）：<code>R₁–CH(NH₂)–COOH ＋ R₂–CO–COOH ⇌ R₁–CO–COOH ＋ R₂–CH(NH₂)–COOH</code><br>书给的两个最常用的具体式子：<code>α-氨基酸 ＋ pyruvate ⇌ 2-氧代酸 ＋ alanine</code>　<code>α-氨基酸 ＋ 2-oxoglutarate ⇌ 2-氧代酸 ＋ glutamate</code><br><b>这一格是「什么在动、什么不动」的标准例子</b>：氨基和酮基对调，两条碳链一个原子都没挪。书还写了目的：把各个氨基酸的氨基<b>汇集到一种氨基酸上</b>，通常是谷氨酸，再在下一步被氧化脱氨。<br><b>她已经有的例子</b>：卡 <b>aa</b>（alanine aminotransferase，以及汇到 glutamate 再进尿素）· 卡 <b>24</b> 和卡 <b>28</b> 的 oxaloacetate ⇌ aspartate · 卡 <b>31</b> 的 PLP 那一格 · 卡 <b>18</b> 的 Schiff 碱那一句。',
  warn:'⚠ <b>transamination 在她已有的卡上出现过十来次，从头到尾没有人定义过它</b>（卡 18、24、28、aa 都用了）。<b>这一格就是补这个定义的地方。</b><br>别说成「氨基被去掉」：<b>去掉是 deamination，对调才是 transamination</b>。氧化脱氨是<b>另一个反应</b>，它真的放出氨，酶是 glutamate dehydrogenase，E.C. 1.4.1.2（<span class="pg">p119</span>）。'},
 {n:'10', t:'phosphorylation 的三个收件人',
  big:'化学是同一个（<b>从 ATP 上搬一个磷酸</b>）；<b>搬给谁</b>决定它是哪件事',
  en:'“Phosphorylation always means the same chemistry, a phosphate group transferred, usually from ATP, so it is a transferase reaction. What differs is who receives it. On a small metabolite it is metabolic: hexokinase makes glucose-6-phosphate, and the charge traps the sugar inside the cell. On ADP it is energy capture, at substrate level or in the respiratory chain. On the hydroxyl of a serine, threonine or tyrosine it is covalent modification, and the textbook calls that a mechanism for controlling the biological activity of proteins.”',
  tbl:{head:['磷酸给了谁','这是在干什么','出处 / 在哪张卡'],
   rows:[
    ['一个小分子代谢物<br><b>glucose → glucose-6-phosphate</b>','<b>代谢</b>：把糖锁在细胞里，并且把它的能量抬上去，后面的步骤才走得动','hexokinase <span class="pg">p042</span> · 卡 <b>gly</b> · 卡 <b>06</b>'],
    ['<b>ADP → ATP</b>','<b>产能</b>：底物水平磷酸化，以及呼吸链上的氧化磷酸化','<span class="pg">p141</span> · 卡 <b>gly</b> · 卡 <b>25</b>'],
    ['蛋白质侧链的 <b>–OH</b>（Ser、Thr、Tyr）','<b>调控</b>：共价修饰，改构象因而改活性；磷酸酶再把它水解下来','<span class="pg">p113 p114</span> · <span class="pg">p063 §3.7.2</span> · 卡 <b>32</b> · 卡 <b>13</b> · 卡 <b>08</b>'],
   ]},
  note:'<b>反应式</b>：<code>代谢　hexose ＋ ATP → hexose-(P) ＋ ADP</code>（书 <span class="pg">p042</span> 给 transferases 的例子就是这一行）<br><code>调控　protein–Ser–OH ＋ ATP →(kinase) protein–Ser–O–PO₃²⁻ ＋ ADP　　拆回去是 ＋H₂O →(phosphatase)</code><br>书 <span class="pg">p113</span>：<b>非常重要的一种修饰，是用磷酸化改变氨基酸侧链的电荷</b>。<span class="pg">p114</span>：Ser、Thr 的羟基和 Tyr 的酚羟基被磷酸化生成<b>磷酸酯</b>，Lys、Arg、His 上少见得多；磷酸化<b>改变构象</b>，有的蛋白磷酸化后活性更高，有的反过来要<b>水解掉磷酸</b>才高。<br><b>最完整的例子在 <span class="pg">p063 §3.7.2</span></b>：glycogen phosphorylase <b>a 是活性形式，b 几乎无活性</b>，靠活性中心里<b>一个丝氨酸羟基的可逆磷酸化</b>互变，拆磷酸的是专门的磷酸酶。',
  warn:'⚠ <b>这两件事她最容易混。</b>判断只要一句：<b>磷酸落在小分子上是代谢，落在蛋白侧链上是调控。</b><br>还有一个常说反的：卡 32 里<b>同一个 protein kinase 磷酸化两个酶，一个被激活一个被失活</b>。所以<b>「磷酸化 ＝ 打开」是错的</b>，磷酸化只是换了一个构象，是开是关看那个蛋白自己。'},
 {n:'11', t:'别的 transfer',
  big:'名字里带 <b>trans-</b> 的都在这一族，而且是拿<b>被搬的东西</b>命名的',
  en:'“The rest of this family is named after what moves. Transketolase moves a two-carbon fragment, which the textbook calls active glycolaldehyde, and its coenzyme is thiamine diphosphate. Transaldolase moves a three-carbon dihydroxyacetone residue and has no coenzyme at all. A carbamoyl transferase moves a carbamoyl group in the urea cycle. Methylation and glycosylation and acyl transfer are the same idea, and acetyl-CoA is the standard acyl donor.”',
  note:'书 §7.6.3 的节标题就叫「<b>三碳或二碳碎片的转移</b>」<span class="pg">p161 p162</span>，而且给了两条规律：碎片<b>总是来自酮糖</b>，接受的<b>总是醛糖</b>，<b>碳原子的总数不变</b>（<span class="pg">p159</span>）。ornithine carbamoyltransferase E.C.2.1.3.3 在 <span class="pg">p123</span>。<br>⚠ <b>transketolase 和 transaldolase 同时踩两个家族</b>：它们搬的是一整段碳链，所以既是基团转移（C），也真的把 C–C 键断了又接上（D）。卡 <b>27</b> 的 Calvin 循环和卡 <b>06</b> 的磷酸戊糖路都用到它们。'},

 {g:'家族 D · 碳链变长或者变短', gn:'判据最硬的一族：C–C 键真的断了或者接上了。书 p042 把这一族的大半交给 lyases —— 非水解、非氧化地断键。'},
 {n:'12', t:'decarboxylation 和 carboxylation',
  big:'一个碳以 <b>CO₂</b> 的形式走掉，或者接上来',
  en:'“Decarboxylation removes one carbon as carbon dioxide, so the chain gets one carbon shorter. The textbook’s own example of a lyase is oxalate carboxy-lyase, an oxalate decarboxylase. Two kinds keep coming back. A β-oxoacid decarboxylates easily on its own, and an oxidative decarboxylation of a 2-oxoacid takes hydrogen off at the same time. Carboxylation is the reverse, and its coenzyme is biotin, the carrier of carbon dioxide.”',
  note:'<b>反应式</b>：<code>(COOH)₂ → HCOOH ＋ CO₂</code>（书 <span class="pg">p042</span> 给 lyases 的那个例子）<br><code>氧化脱羧　R–CO–COOH ＋ NAD⁺ ＋ CoASH → R–CO–SCoA ＋ CO₂ ＋ NADH</code>　<code>羧化　acetyl-CoA ＋ CO₂ ＋ ATP →(biotin) malonyl-CoA</code><br>书 <span class="pg">p159</span> 把脱羧放在「<b>氧化性地拆掉一个碳原子</b>」这一条下面，还给了顺序：<b>先脱氢成 β-氧代酸，再脱羧</b>，己糖因此变戊糖。<br><b>她已经有的例子</b>：卡 <b>24</b>「β-酮酸的脱羧和 2-氧代酸的氧化脱羧是生化里 CO₂ 的两个主要来源」· 卡 <b>gly</b> 和卡 <b>25</b> 的丙酮酸氧化脱羧 · 卡 <b>06</b> 的磷酸戊糖路 · 卡 <b>31</b> 的 biotin · 卡 <b>23</b> 脂肪酸合成第一步（<span class="pg">p188</span>）。'},
 {n:'13', t:'aldol cleavage 和 thiolytic cleavage',
  big:'两把不同的刀砍同一种 C–C 键：一把是<b>分子自己的碳</b>，一把是 <b>CoA 的巯基</b>',
  en:'“Both split a carbon-carbon bond next to a carbonyl. An aldol cleavage is the reverse of an aldol condensation, and the textbook’s case is aldolase splitting fructose-1,6-bisphosphate into the two triose phosphates. Thiolytic cleavage is the fourth step of β-oxidation, where coenzyme A comes in and a two-carbon piece leaves as acetyl-CoA. The textbook’s figure on page 196 labels that enzyme β-ketokinase, and that name cannot be right. A kinase transfers a phosphate and there is no phosphate in the step, so the enzyme is generally called a thiolase.”',
  note:'<b>反应式</b>：<code>aldol cleavage　fructose-1,6-bisphosphate ⇌ dihydroxyacetone phosphate ＋ glyceraldehyde-3-phosphate</code><br><code>thiolytic cleavage　R–CO–CH₂–CO–SCoA ＋ CoASH → R–CO–SCoA ＋ CH₃CO–SCoA</code><br>aldolase 劈 fructose-1,6-bisphosphate 在 <span class="pg">p161</span>（卡 <b>gly</b>）· 柠檬酸合成那一步书自己叫 <i>aldol condensation</i>，<span class="pg">p136</span>（卡 <b>24</b>）· threonine aldolase 靠 PLP 把苏氨酸劈成甘氨酸和乙醛，<span class="pg">p122</span>（卡 <b>aa</b>）。<br><b>卡 23 的 β-氧化四步（脱氢 · 水合 · 脱氢 · 硫解）是这张卡最好的演示</b>：一个循环里踩了三个家族。',
  warn:'⚠ <b>这是勘误第 6 条。</b>书 <span class="pg">p196</span> 那张 β-氧化四步图，第四步那一行印着的名字是 <i>D. Thiolytic cleavage</i>（书上那一页给这一步印的就是这个名字），进来的是 <b>CoASH</b>，出去的是 acyl-CoA ＋ acetyl-CoA，<b>但同一行酶名那一栏印的是 β-ketokinase</b>。已回 280 dpi 原图确认，不是 OCR 错。<br><b>用书的一半打书的另一半</b>：不要说「别的教材叫 thiolase」，要说「你这本书<b>同一行</b>把这一步的名字印成 thiolytic cleavage —— 砍键的是 CoA 的硫，进来的是 CoASH；而 kinase 搬的是磷酸，这一步一个磷酸都没有」。<br>⚠ <b>硫解也不是水解</b>，它按书自己给类二的定义算转移酶 —— 这一条在追问里单独有一格。'},

 {g:'家族 E · 水进水出，以及「谁来砍这一刀」', gn:'四个名字里三个跟水有关，但只有一个是「水把键砍断」。这一格就是把它们分开。'},
 {n:'14', t:'四个一次分清',
  big:'关键只有一句：<b>只有 hydrolysis 是一个分子变成两个</b>',
  en:'“Three of these four put water in or take it out, and only one of them breaks a bond by doing so. Hydrolysis breaks a bond with water, and one molecule becomes two. Condensation is its reverse: two molecules become one and a water leaves. Hydration adds water across a double bond, so nothing breaks and one molecule stays one. Dehydration takes a water out and leaves a double bond behind, and again one molecule stays one. So the question that separates them is how many molecules I have at the end.”',
  tbl:{head:['名字','水在干什么','分子数','例子 / 在哪张卡'],
   rows:[
    ['<b>hydrolysis</b> 水解','水<b>砍断</b>一个键，H 和 OH 分给断口两边','<b>1 → 2</b>','肽酶切肽键（卡 <b>08</b>）· arginase 放出尿素 <span class="pg">p123</span>'],
    ['<b>condensation</b> 缩合','两个分子接成一个，<b>吐出</b>一分子水','<b>2 → 1</b>','肽键的生成（卡 <b>01</b>）· 柠檬酸合成的 aldol condensation <span class="pg">p136</span>（卡 <b>24</b>）'],
    ['<b>hydration</b> 水合','一整个水<b>加到双键上</b>，什么键都没断','<b>1 → 1</b>','fumarate ＋ H₂O → L-malate，酶叫 fumarate hydratase <span class="pg">p139</span>（卡 <b>24</b>）· β-氧化第二步（卡 <b>23</b>）'],
    ['<b>dehydration</b> 脱水','脱掉一分子水，<b>留下一个双键</b>','<b>1 → 1</b>','enolase 把 2-phosphoglycerate 变成 PEP（卡 <b>gly</b>）· serine dehydratase E.C.4.2.1.13 <span class="pg">p119</span>'],
   ]},
  note:'<b>反应式</b>：<code>hydrolysis　A–B ＋ H₂O → A–H ＋ B–OH</code>　<code>condensation　A–H ＋ B–OH → A–B ＋ H₂O</code><br><code>hydration　C＝C ＋ H₂O → HC–COH</code>　<code>dehydration　HC–COH → C＝C ＋ H₂O</code><br><b>最漂亮的一个例子是 aconitase。</b>书 <span class="pg">p138</span> 说 citrate → isocitrate 这一步是「一个<b>包含脱水、以及随后把水加到 cis-aconitate 的 α,β-双键上</b>的 isomerisation」。<b>脱水 ＋ 水合 ＝ 净水没变 ＝ 分子式没变 ＝ 这是一个异构化。</b>一句话把家族 A 和家族 E 缝在一起，卡 <b>24</b> 已经有这一条。',
  warn:'⚠ <b>别把 hydration 说成 hydrolysis。</b>两个词长得像，但一个不断键、一个断键。<b>书自己的酶名帮得上忙</b>：延胡索酸那一步的酶叫 <b>fumarate hydratase</b>，不叫 hydrolase；而书把脱水酶编成 4.2.1.13，是 <b>lyase</b>，也不在水解酶那一类里。'},
 {n:'15', t:'-lysis 这个后缀',
  big:'后缀说的不是断了哪种键，是<b>哪个基团来进攻</b>',
  en:'“The ending -lysis names the attacker rather than the bond. Hydrolysis, water attacks. Phosphorolysis, phosphate attacks. Thiolysis, the thiol of coenzyme A attacks. The textbook makes the contrast itself. Starch and glycogen are broken down not by hydrolysis but by phosphorolysis, and phosphorylase hands the terminal glucose to phosphoric acid, so the product is glucose-1-phosphate.”',
  note:'<b>通式</b>：<code>A–B ＋ X–H → A–X ＋ B–H</code>，<b>X 是谁，反应就叫什么解</b>：<code>X ＝ OH（水）→ hydrolysis</code>　<code>X ＝ 磷酸 → phosphorolysis</code>　<code>X ＝ CoA 的 S → thiolysis</code><br>书 <span class="pg">p173 §7.11.2</span> 原话：细胞里拆多糖跟消化道里不一样，<b>不是水解，是磷酸解</b>；从非还原端拆下一个葡萄糖残基交给磷酸，生成 <b>glucose-1-phosphate</b>，酶叫 <i>phosphorylase</i>。<span class="pg">p174</span> 说这么做<b>省下了葡萄糖进糖酵解前的第一次磷酸化</b>。<br><b>卡 gly 里还有第三个</b>：GAPDH 那一步，磷酸砍断酶上的硫酯，生成 1,3-bisphosphoglycerate（<span class="pg">p165</span>）。'},

 {g:'复合名字', gn:'考场上出现的多半不是一个单名字，是两个叠在一起。'},
 {n:'16', t:'复合名字怎么拆',
  big:'说得出<b>是哪两族叠的</b>，这道题就答完了',
  en:'“Many names carry two families at once, and reading them apart is usually the whole answer. Oxidative decarboxylation is a redox step plus a carbon lost as carbon dioxide. Oxidative deamination is a redox step plus an amino group released as ammonia. Aldol condensation is a carbon-carbon bond made plus a water leaving. Thiolytic cleavage is a carbon-carbon bond broken plus the name of whatever attacked it.”',
  note:'拆开说的好处是<b>每一半都接得住下一刀</b>：他追「哪一步是氧化」，你指得出氢落在哪；他追「那个碳去哪了」，你答 CO₂。<br><b>她已经有的例子</b>：丙酮酸的氧化脱羧（卡 <b>gly</b>、卡 <b>25</b>、卡 <b>31</b>）· 谷氨酸的氧化脱氨（卡 <b>aa</b>，glutamate dehydrogenase E.C.1.4.1.2，<span class="pg">p119</span>）· 柠檬酸合成的 aldol condensation（卡 <b>24</b>）· β-氧化第四步的硫解（卡 <b>23</b>）。'}
],

end:'<b>这张卡的用法：</b>他报一个反应名字，先别急着说它是什么。<b>按四句过一遍</b> —— C–C 键动了吗 · 氧化态变了吗 · 有基团搬家吗 · 一个变两个吗 —— 落在哪一族就先说那一族，再报名字，再给一个例子。<b>EC 六大类是另一个问题</b>，等他问「这个酶属于哪一类」的时候再给。',

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说清楚这里有两套名字，回答的是两个问题',
  p:['“A reaction type is a name for what happens to a molecule, and biochemistry sorts these names in two different ways. The everyday names say what changed. Isomerisation, the same atoms rearranged. Transamination, an amino group moved. Decarboxylation, a carbon lost as carbon dioxide. Hydrolysis, a bond broken by water.”',
     '“The official classification is of the enzymes rather than of the reactions. The textbook divides enzymes into six main classes by the reaction they catalyse: oxidoreductases, transferases, hydrolases, lyases, isomerases and ligases. Each enzyme gets a systematic name, a recommended everyday name, and a code number.”'],
  note:'两套分类分开说，是这张卡的骨架。六大类和 EC 号的读法在书 <span class="pg">p041–p042</span>，完整版本在卡 <b>18</b>。<b>先给日常名字那一套</b>，因为他嘴里问的多半是「这是什么反应」，不是「这个酶是几类」。'},
 {tag:'段 2 · general', h:'四句问下来，五个家族',
  p:['“I sort the everyday names by what actually changes, and I ask four questions in order. Did a carbon-carbon bond break or form. Did the oxidation state change. Did a group move from one molecule to another. Did one molecule become two.”',
     '“That gives five families. Carbon-carbon: decarboxylation, carboxylation, aldol cleavage, thiolytic cleavage. Redox: oxidation, reduction, dehydrogenation. Group transfer: transamination, phosphorylation, transketolase. Water: hydrolysis, condensation, hydration, dehydration. And if all four answers are no, the atoms have only been rearranged, and that is isomerisation or epimerisation.”'],
  note:'⚠ 这四句<b>是这张卡排的记忆顺序，书里没有</b>。书给的支持是 <span class="pg">p159 §7.6</span>：糖的互变按「碳数变不变」分成三条，<b>书自己就是按分子身上发生了什么来排的</b>。'},
 {tag:'段 3 · 稍展开', h:'挑两处最容易乱的，一处在糖化学，一处在调控',
  p:['“Take isomerisation against epimerisation, because the textbook puts them side by side. Epimerisation changes the steric arrangement at one carbon, glucose to galactose. Isomerisation shifts the carbonyl to the neighbouring carbon, glucose to fructose. Neither changes the number of carbon atoms.”',
     '“And take phosphorylation, because one word covers two different jobs. On a small metabolite it is metabolic, hexokinase trapping glucose as glucose-6-phosphate. On the hydroxyl of a serine or a threonine or a tyrosine it is a covalent switch, and a phosphatase takes it off again.”'],
  note:'第一处是 <span class="pg">p160 §7.6.1</span>，也是老师问 glucose → galactose 时的那一页。第二处横跨两章：代谢那一半在 <span class="pg">p042</span> 和糖酵解，调控那一半在 <span class="pg">p113–p114</span> 和 <span class="pg">p063 §3.7.2</span>。'},
 {tag:'段 4 · 留口子', h:'落到她每周都在用的两类酶',
  p:['“Two of these six classes are the ones I use every week. A polymerase is a transferase: it moves a nucleotidyl group from a triphosphate onto a 3-prime hydroxyl, and the pyrophosphate it releases is what drives the reaction. That is Taq or Kapa in a PCR.”',
     '“And a ligase joins two molecules at the cost of hydrolysing ATP, which is class six and the reason T4 ligase needs ATP in the buffer. So the classification is not bookkeeping for me. It tells me what has to be in the tube.”'],
  note:'两个口子都在主场：polymerase 接卡 <b>taq</b>（Taq / Kapa），ligase 接卡 <b>16</b>（DNA 复制）。<b>卡 16 里那条差别可以顺势给</b>：大肠杆菌的连接酶用 NAD⁺，真核和 T4 的用 ATP —— 书 p042 把 ligases 定义成「在水解高能化合物的同时成键」，<b>NAD⁺ 也是高能化合物，所以两者都在类六里，不矛盾</b>。'}
],

why:{
 rungs:[
  ['为什么反应类型只有这么几族？','因为一个分子身上<b>能变的东西就那么几样</b>：<b>连接关系</b>（C–C 断没断）· <b>空间排布</b> · <b>氧化态</b> · <b>原子的归属</b>（哪个基团长在谁身上）。家族的数目等于「能变的东西」的数目，不是谁随便定的。'],
  ['那为什么官方分的是酶，不是反应？','因为目的是给每个酶一个<b>唯一的编号</b>（<span class="pg">p041</span>）。编号得挂在一个具体的催化剂上：同一个反应可以有好几种叫法，<b>一个酶却只有一个 EC 号</b>。'],
  ['为什么要留着两套名字？','因为它们回答两个不同的问题：日常名字答<b>分子身上发生了什么</b>，EC 类答<b>这个酶归哪一类</b>。<b>而且两套都是人划的，不是分子自带的</b> —— 书自己就承认 lyases 又叫 synthases、ligases 又叫 synthetases，同一类两个名字。']
 ],
 stop:{lbl:'停 · 落在「分类是人划的」',
  say:'“Below that we are asking why the categories are drawn where they are, and they are a description we impose rather than something the molecule has. The textbook shows it itself, by giving two names to the same class.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is isomerisation?',
 mean:'最短的问法。<b>先给一般定义，再给书在糖化学里的那个窄义，再说它跟 epimerisation 差在哪。</b>',
 say:'“Isomerisation is a reaction that rearranges the atoms of a molecule without changing which atoms are there, so the molecular formula is the same before and after. In the sugar chapter the textbook gives it a narrower sense: the carbonyl group shifts to the neighbouring carbon, so an aldose becomes a ketose. Glucose to fructose is its example. Epimerisation is the neighbour, a change of the steric arrangement at one carbon, and glucose to galactose is that one. In neither does the number of carbon atoms change.”',
 tail:'⚠ <b>第一句是通用定义，书没有给。</b>书给的是第二句那个糖化学的窄义（p160）。被追问出处，两半要分开说。'},

{q:'What is transamination?',
 mean:'她的卡上用了十来次<b>从没定义过</b>的那个词。答案要说清<b>什么在动、什么不动</b>。',
 say:'“Transamination is the transfer of the amino group of an amino acid onto the oxo group of a 2-oxoacid. The textbook names three usual acceptors: pyruvate, 2-oxoglutarate and oxaloacetate. So the amino group and the oxo group swap, and neither carbon skeleton moves. The enzymes are the aminotransferases, E.C. 2.6.1, and the coenzyme is pyridoxal phosphate from vitamin B-six. The point of it, the textbook says, is to collect the amino groups of all the amino acids onto one of them, usually glutamate.”'},

{q:'How do you know a reaction is an oxidation?',
 mean:'他要的是<b>判据</b>，不是定义。给书 p134 那一句，不要开始数氧化数。',
 say:'“I look at where the hydrogen goes. The textbook says that in organic compounds oxidation often means dehydrogenation, the loss of one or more hydrogen atoms, a proton and an electron together. So if hydrogen leaves the substrate and lands on NAD-plus or on FAD, the substrate was oxidised. If hydrogen arrives from NADH or NADPH, it was reduced. And because free electrons cannot exist alone, every oxidation is coupled to a reduction of something else.”',
 tail:'他要是接着问「那怎么算氧化数」，再给那把梯子：<b>连 O、N、S 加一，连 H 减一，连 C 算零</b>。梯子是通用的，不是书上的。'},

{q:'What is the difference between hydrolysis and hydration?',
 mean:'两个词差两个字母。答案的关键是<b>分子数</b>，不是水。',
 say:'“Hydrolysis uses water to break a bond, so one molecule becomes two. Hydration adds a whole water across a double bond, so nothing breaks and one molecule stays one. The textbook’s own enzyme names keep them apart. Fumarate hydratase adds water to fumarate and gives L-malate, and the textbook classes such enzymes as lyases. Arginase hydrolyses urea off arginine, and that one is a hydrolase.”'},

{q:'What kind of reaction is the fourth step of β-oxidation?',
 mean:'问的是<b>硫解</b>——书 p196 给这一步印的名字是 thiolytic cleavage，而且这里藏着书的一个印刷错。',
 say:'“It is a thiolytic cleavage. Coenzyme A comes in, its thiol attacks the carbon-carbon bond next to the keto group, and a two-carbon acetyl-CoA leaves. The textbook prints the enzyme name as β-ketokinase, and that cannot be right. A kinase transfers a phosphate and there is no phosphate here, so the enzyme is generally called a thiolase.”',
 tail:'⚠ <b>勘误第 6 条。</b>已回 280 dpi 原图确认书上那一栏印的酶名就是 ketokinase。<b>说的时候指书自己的图</b>：同一行把这一步的名字印成 thiolytic cleavage，砍键的是 CoA 的硫，进来的是 CoASH，一个磷酸都没有。'},

{q:'What are the six classes of enzyme, and where do these everyday names sit?',
 mean:'两套分类的关系，一次说清。<b>完整的六类在卡 18</b>，这里给关系。',
 say:'“The textbook divides enzymes into six main classes by the reaction they catalyse. Oxidoreductases move electrons or hydrogen. Transferases move a group from a donor to an acceptor. Hydrolases split bonds with water. Lyases split bonds without water and without oxidation, often making a double bond, or add across one. Isomerases rearrange within one molecule. Ligases join two molecules and pay by hydrolysing ATP. That classification names enzymes, while the everyday names name reactions, so they are two answers to two different questions.”'},

{q:'Isomer, epimer, anomer, enantiomer — how do you keep them apart?',
 mean:'<b>当成一道数数题</b>，不是四个定义。数完的部分在卡 06。',
 say:'“I count how many asymmetric carbons they differ at. Differ at every one and they are enantiomers, mirror images. Differ at exactly one and they are epimers, which is the textbook’s definition. And if that one carbon is the anomeric carbon, the one made by ring closure, they are anomers. So anomers are a special case of epimers, and unlike the others they interconvert in solution, because the ring can open.”',
 tail:'16 个醛己糖、8 对对映体、葡萄糖正好 4 个 epimer —— <b>这些数在卡 06 已经算完了</b>，别在这里重算。⚠ enantiomer 这个词全书 0 命中。'},

{q:'Why does alcohol turn into the thing that makes you feel worse?', odd:1,
 mean:'问的是<b>氧化 / 脱氢</b>，而且这正好是书两处都用的那个例子。',
 say:'“That is an oxidation, and it is the textbook’s own example twice over. Alcohol dehydrogenase takes two hydrogens off ethanol and hands them to NAD-plus, giving acetaldehyde. The textbook writes that reaction on page 134 as its example of dehydrogenation, and on page 41 it gives the systematic name, ethanol:NAD-plus oxidoreductase. So it is class one.”'},

{q:'Why does bread taste sweet if you chew it for a while?', odd:1,
 mean:'问的是<b>水解</b>。答案里要出现「<b>一个分子变成两个</b>」这个判据。',
 say:'“Because of hydrolysis. Starch is a chain of glucose units held together by glycosidic bonds. The amylase in saliva uses water to break those bonds, so shorter sugars and free glucose appear, and those taste sweet. An enzyme that splits bonds with water is a hydrolase, the textbook’s third class, and its subclasses are set by the type of bond hydrolysed.”'},

{q:'Why does the muscle get sugar out of glycogen without spending ATP?', odd:1,
 mean:'问的是 <b>phosphorolysis</b>，也就是「谁来砍这一刀」那一格。',
 say:'“Because the bond is not broken by water but by phosphate. The textbook has a short section on exactly this: starch and glycogen are broken down by phosphorolysis rather than hydrolysis. Phosphorylase takes the glucose residue off the non-reducing end and hands it to phosphoric acid, so the product is glucose-1-phosphate. It already carries its phosphate, so the first phosphorylation of glycolysis is saved.”'},

{q:'Why do people call vitamin B6 the protein vitamin?', odd:1,
 mean:'问的是 <b>transamination</b> 和 <b>PLP</b>。维生素那一半在卡 31。',
 say:'“Because its coenzyme carries amino groups. Pyridoxine is vitamin B-six, and the cell turns it into pyridoxal phosphate. That coenzyme is what makes transamination possible, and transamination is how the amino group of one amino acid is handed to a 2-oxoacid. The textbook’s coenzyme table lists pyridoxal phosphate against the amino group, and the same coenzyme also serves decarboxylations.”'},

{q:'Why does a cut apple go brown?', odd:1,
 mean:'问的是<b>氧化</b>。<b>书里没有这个例子</b>，所以只答家族，别编酶名。',
 say:'“It is an oxidation. Cutting the fruit lets air reach compounds that were inside the cells, an enzyme uses that oxygen to oxidise them, and the oxidised products are coloured. The family is clear even without a name for the enzyme: one that reacts a substrate with oxygen is an oxidoreductase, the textbook’s first class.”',
 tail:'⚠ <b>这本书没有这个例子，酶名不要编。</b>能说的是书给 oxidoreductases 的定义里有「与氧反应」这一条（p041）。他要名字就说这是书外的。'}
],

/* ---------------- 图 ---------------- */
figs:[
 {k:'认',
  src:'img/p196_beta_oxidation_four_steps.jpg',
  t:'一张图里四个反应类型的名字 —— β-氧化的 A·B·C·D（书 p196）',
  cap:'<b>这张是「认」，而且它是这张卡最值钱的一张</b>：书把每一步的<b>反应类型</b>直接印在左边那一栏，一行一个名字，'
    + '右边那一栏是酶名，中间是进出的辅酶。<b>四个名字竖着排下来，正好就是这张卡的判断顺序。</b>'
    + '<br><br><b>四行分别是</b>（左栏的捷克词按顺序就是这四个意思）:'
    + '<br>· <b>A ＝ 脱氢</b>：酶是 <b>acyl-CoA dehydrogenase</b>，拿走两个氢交给 <b>FAD</b>（出去的是 FADH₂），在 α 和 β 两个碳之间造出一个双键。<b>氧化数变了 → 氧化还原类。</b>'
    + '<br>· <b>B ＝ 加水</b>：酶是 <b>enoyl-CoA hydratase</b>，把一个 <b>H₂O</b> 加到那个双键上，β 碳上出现 <b>–OH</b>。<b>没有氧化还原，只是加了一个水。</b>'
    + '<br>· <b>C ＝ 再脱氢</b>：酶是 <b>β-hydroxyacyl-CoA dehydrogenase</b>，这次的收件人换成 <b>NAD⁺</b>（出去的是 NADH），–OH 变成 <b>=O</b>。'
    + '<br>· <b>D ＝ 硫解</b>：进来的是 <b>CoASH</b>，出去的是<b>短了两个碳</b>的 acyl-CoA <b>加一个</b> acetyl-CoA。<b>砍键的是硫，不是水。</b>'
    + '<br><br><b>四步连起来要说的一句</b>：“One round of beta-oxidation is <b>oxidise, hydrate, oxidise again, then cut</b>. The first oxidation hands its hydrogens to <b>FAD</b> and the second to <b>NAD plus</b>. The cut is made by the <b>sulfur of coenzyme A</b>. That is why the step is called thiolytic rather than hydrolytic. Each round shortens the chain by <b>two carbons</b> and releases one acetyl-CoA.”'
    + '<br><br>⚠ <b>勘误第 6 条，这一条值得当面用。</b>同一行的左栏写着<b>硫解</b>，右栏印的酶名却是 <b>β-ketokinase</b>。'
    + '<b>kinase 转移的是磷酸，而这一步进来的是 CoASH，整行一个磷酸都没有</b>，所以这个酶应该叫 <b>thiolase</b>。已回 280 dpi 原图确认，不是 OCR 读错。'
    + '<br><b>说的时候指书自己的图</b>：“The textbook’s own figure names this step <b>thiolytic cleavage</b>, and the reagent coming in is <b>coenzyme A</b>, with no phosphate anywhere in the row. A kinase transfers a phosphate, so the enzyme named in the same row cannot be a kinase. It is a <b>thiolase</b>.”'
    + '<br>⚠ 左栏那四个名字书上印的是捷克文，<b>意思就是上面那四个</b>；这里给的是英文说法，考场上说英文。',
  src2:'Biochemie, p196（§8.4 β-氧化的四步）· 280 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p120_transamination_general.jpg',
  t:'transamination 的通式 —— 书把它直接印出来了（书 p120）',
  cap:'<b>这张是「画」，而且它是速背第 9 点最干净的一张。</b>四个分子写成一行，<b>什么都没多</b>。'
    + '<br><br><b>画的顺序（五步）</b>:'
    + '<br>① 左边写一个氨基酸：<code>R₁–CH(NH₂)–COOH</code>。<b>NH₂ 写在 CH 下面</b>，跟书一样。'
    + '<br>② 加号，再写一个 2-酮酸：<code>R₂–C(=O)–COOH</code>。<b>=O 写在 C 下面。</b>'
    + '<br>③ 中间一根<b>单箭头</b>。'
    + '<br>④ 右边把两个基团<b>换过来</b>：<code>R₁–C(=O)–COOH</code> ＋ <code>R₂–CH(NH₂)–COOH</code>。'
    + '<br>⑤ 画完指着说：<b>变的只有 –NH₂ 和 =O 这一对，两条碳骨架一个碳都没动。</b>'
    + '<br><br><b>边画边说的两句</b>：“Transamination moves an <b>amino group</b> from an amino acid onto the <b>oxo group</b> of a two-oxo acid. Nothing is oxidised and nothing is cut: the two carbon skeletons stay whole and simply <b>trade</b> the amino group for the keto oxygen. The products are a new two-oxo acid and a new amino acid.”'
    + '<br>“The acceptor is almost always <b>pyruvate, two-oxoglutarate or oxaloacetate</b>. The enzymes are the <b>aminotransferases</b>, E C two point six point one, and the coenzyme is <b>pyridoxal phosphate</b>, which forms a <b>Schiff base</b> with the amino acid. The purpose of the whole set of reactions is to <b>collect</b> the amino groups of all the different amino acids onto one of them, usually glutamate.”'
    + '<br><br><b>为什么它在这张卡上很要紧</b>：transamination 是「基团搬家」那一族<b>最干净的例子</b>——'
    + '<b>没有氧化还原，也没有断碳链</b>，所以它既不是 oxidation，也不是任何一种 -lysis。'
    + '拿它当标尺，下面那张氧化脱氨一比就清楚了。',
  src2:'Biochemie, p120（§5.2.1 转氨那一节的通式）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p119_oxidative_deamination.jpg',
  t:'oxidative deamination 的通式 —— 先氧化，再自己水解（书 p119）',
  cap:'<b>这张是「认」，它是上一张的对照组</b>：名字里都有「氨」，做的事完全不同。'
    + '<br>三步写在一行：左边是氨基酸 <code>R–CH(NH₂)–COOH</code>；<b>−2H</b> 那根箭头之后变成中间那个<b>亚胺</b> <code>R–C(=NH)–COOH</code>；'
    + '再加 <b>H₂O</b>，右边就是 <b>2-酮酸</b> <code>R–CO–COOH</code> 加一个 <b>NH₃</b>。'
    + '<br><br><b>看到图要说的那一段</b>：“<b>Oxidative deamination</b> is two things under one arrow. First the carbon that carries the amino group is <b>oxidised</b>. The single bond from that carbon to nitrogen becomes an <b>imine</b>, a C double bond N H. Then the imine <b>hydrolyses spontaneously</b>: water comes in, ammonia leaves, and what is left is a <b>two-oxo acid</b>. The enzymes are dehydrogenases with NAD plus or NADP plus as coenzyme, and by far the most important one is <b>glutamate dehydrogenase</b> acting on glutamate.”'
    + '<br><br><b>跟上一张的区别就是这张卡要你分清的那一刀</b>：'
    + '<b>转氨不放氨</b>，只是把氨基搬到另一条碳骨架上，氮还在体系里；'
    + '<b>氧化脱氨真的把氮放出来</b>，变成 NH₃，接下来才进尿素那条路。'
    + '<b>一个是搬家，一个是出门。</b>'
    + '<br>⚠ 书还给了另一种脱氨：serine 和 threonine 靠<b>脱水</b>脱氨（因为 β 碳上有羟基），那一条<b>不是氧化</b>。'
    + '<b>所以「deamination」这个词底下至少有两类，不能一见到就答氧化。</b><span class="pg">p119</span>',
  src2:'Biochemie, p119（§5.2.1 氧化脱氨的通式）· 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p172_c4_epimerisation.jpg',
  t:'epimerisation 长什么样 —— 只有 C-4 上那一个 OH 翻过来（书 p172）',
  cap:'<b>这张是「认」，而且它就是速背第 4 点那个例子的书证。</b>'
    + '左边是 <b>UDP-葡萄糖</b>，右边是 <b>UDP-半乳糖</b>，中间那个酶名印得清清楚楚：<b>4-epimerase</b>（书上用的是它的捷克拼法，词是同一个）。'
    + '<br><b>整张图只有一个地方不一样</b>：环上<b>第 4 个碳</b>的 –OH，左边朝下、右边朝上。<b>别的原子一个都没动</b>，两边还拖着同一条尾巴（两个磷酸—核糖—尿嘧啶，也就是 UDP）。'
    + '<br><br><b>看到图要说的那一段</b>：“<b>Epimerisation</b> inverts the configuration at <b>one</b> chiral carbon and leaves every other centre alone. Here the hydroxyl on <b>carbon four</b> flips over, and glucose becomes galactose. The enzyme is <b>U D P glucose four-epimerase</b>, and the coenzyme, uridine diphosphate, is the tail you can see on both sides.”'
    + '<br>“That is what separates it from <b>isomerisation</b>, where the <b>carbonyl group moves</b> to the neighbouring carbon, for example glucose to fructose, or glyceraldehyde three-phosphate to dihydroxyacetone phosphate. Epimerisation changes a <b>configuration</b>. Isomerisation changes <b>where the carbonyl sits</b>.”'
    + '<br><br>书正文在同一页还给了一个数：平衡时<b>葡萄糖比半乳糖是 1 : 3</b>（书上就这么印的）。'
    + '<br>⚠ <b>书里没有给「epimerisation 对 isomerisation」画一张对照图。</b>'
    + '§7.6.1（<span class="pg">p160</span>）只有三行字，两个例子都在那三行里，<b>没有配图</b>。'
    + '这一张是全书最接近的一张，<b>另外那一半要靠嘴说</b>——说完这张就把 glucose ⇌ fructose 补一句。',
  src2:'Biochemie, p172（§7.10 末尾，UDP-葡萄糖的 C-4 差向异构）· 300 dpi 原图裁切，未修改'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这张卡自己用到的词，他会一个个拎出来问。<b>这张卡欠这些解释，所以每个都得在这里给。</b>', items:[
{r:'高', q:'What is an isomer?',
    ez:'“Two compounds are isomers when two things hold. They have the same molecular formula. And they have a different arrangement of the atoms. Suppose the difference is only in space. Then they are stereoisomers. A molecule with n asymmetric carbons has two to the n of those. That assumes no plane of symmetry. The textbook gives that counting rule. It also defines epimers and anomers. But it never defines isomer itself.”',
    ezcn:'<b>两个化合物互为异构体，要同时满足两条：分子式相同，原子排列不同。</b><b>如果差别只在空间排列上，它们是立体异构体</b>；<b>一个有 n 个不对称碳、又没有对称面的分子，有 2ⁿ 个立体异构体</b>。⚠ <b>书给了这条计数规则，也定义了差向异构体和异头物，却从来没有定义过「异构体」本身。</b>',
 en:'“Two compounds are isomers when they have the same molecular formula and a different arrangement of the atoms. If the difference is only in the arrangement in space they are stereoisomers, and a molecule with n asymmetric carbons and no plane of symmetry has two to the n of those. The textbook gives that counting rule and it defines epimers and anomers, but it never defines isomer itself.”',
 cn:'<b>数目和 epimer、anomer 的定义是书的</b><span class="pg">p148 p149 p150</span>；<b>isomer 本身的定义是通用的。</b>把这两半分开说，比含糊地说「书上说」安全。',
 warn:'⚠ 全书<b>没有 enantiomer 这个词</b>，stereoisomer 也只出现在 p148 和 p149。'},
{r:'中', q:'What is an asymmetric carbon?',
 en:'“A carbon with four different groups on it. Its mirror image cannot be laid on top of it, so two arrangements exist, and that is what makes a stereoisomer possible. Glucose has four of them in the open chain, carbons two to five, and ring closure creates a fifth one at carbon one.”',
 cn:'「四个取代基各不相同」这个判据是通用有机化学；<b>数目是书的</b>（p148、p150）。完整的一格在卡 <b>06</b>。'},
{r:'中', q:'What is a 2-oxoacid, and what is a β-oxoacid?',
 en:'“A 2-oxoacid is a carboxylic acid with a keto group on the carbon next to the carboxyl, and the textbook’s examples are pyruvate, 2-oxoglutarate and oxaloacetate. A β-oxoacid carries the keto group one carbon further along. That matters because a β-oxoacid decarboxylates easily. So a pathway about to lose a carbon makes one first, by oxidising a hydroxyl one carbon along.”',
 cn:'三个 2-氧代酸是书 <span class="pg">p120</span> 给 transamination 的受体名单。β-氧代酸容易脱羧、所以「先氧化再脱羧」这个顺序，书在 <span class="pg">p159</span> 讲己糖变戊糖时写得最清楚。卡 <b>24</b> 里 oxalosuccinate 和 oxaloacetate 都是 β-氧代酸。'},
{r:'中', q:'What is a Schiff base?',
 en:'“A Schiff base, also called an aldimine, is the carbon-nitrogen double bond formed when an aldehyde condenses with a primary amine and loses water. Pyridoxal phosphate carries an aldehyde, so it forms one with the amino group of the substrate amino acid, and that intermediate is what lets transamination happen.”',
 cn:'书 <span class="pg">p120</span> 只写了「<b>PLP 与氨基酸形成 Schiff 碱</b>」这一句加一张图（figure 5.3），<b>没有给 Schiff 碱的定义</b>。定义那一句在卡 <b>18</b>，是通用知识。'},
{r:'中', q:'What is a coenzyme, since three of these families need one?',
 en:'“The textbook defines a coenzyme as the intermediate carrier of the group, the atoms or the electrons that the reaction moves. Its table 3.1 lines them up against the group each one carries. Pyridoxal phosphate carries amino groups and thiamine diphosphate carries an aldehyde. Biotin carries carbon dioxide, coenzyme A carries acyl groups, and NAD and FAD carry hydrogen and electrons.”',
 cn:'<b>这个定义直接告诉你辅酶属于哪个家族</b>：它搬东西，所以它服务的是<b>基团转移</b>那一族，或者<b>氧化还原</b>那一族。表 3.1 的完整一格在卡 <b>31</b>。<span class="pg">p043</span>'},
{r:'中', q:'What does macroergic mean, since a ligase needs one?',
 en:'“It is the textbook’s term for a compound in an energetically unstable state, held there by a single bond. Hydrolysing that bond gives 30 to 60 kJ per mole, against under 12 for an ordinary bond, and ATP is the standard example. A ligase makes a new bond and pays for it by hydrolysing one of these, most often ATP. That is why class six is also called the synthetases.”',
 cn:'门槛的两个数在书 <span class="pg">p131</span>（书上写的是 <i>per one bond</i>，按每个键算）。完整的一格、连同把这两个数换算成平衡常数的推导，在横向卡 <b>x_bonds</b> 的第 2 点。'},
{r:'中', q:'What is a thiol, an acyl group and a thioester?',
 en:'“A thiol is an SH group, the sulfur version of an alcohol. An acyl group is what is left of a carboxylic acid when the OH is taken away, so the acetyl of acetyl-CoA is one. A thioester is the bond between an acyl group and a thiol, and coenzyme A carries acyl groups that way. The textbook calls thioesters very reactive, which is why coenzyme A is the standard acyl donor.”',
 cn:'键本身在横向卡 <b>x_bonds</b> 的第 8 点，那里有书给的理由（<span class="pg">p132 p136</span>：硫原子挡住了 O-酯常见的共振，所以羰基还是活泼的）。<b>这三个词是「硫解」那一格听得懂的前提。</b>'},
{r:'中', q:'What do you mean by the attacker, when you say -lysis names it?',
 en:'“I mean the group that arrives and takes over one half of the bond that breaks. In hydrolysis it is water, and the two fragments end up carrying H and OH. In phosphorolysis it is phosphate, so one fragment leaves as a phosphate ester. In thiolysis it is the thiol of coenzyme A, so one fragment leaves as a thioester. The name of the reaction is the name of that group.”',
 cn:'⚠ <b>「进攻」这个说法是机理层面的通用讲法，书没有这么写。</b>书写的是结果：磷酸解时残基「<b>被转移到磷酸上</b>」（<span class="pg">p173</span>）。被追问就按书的说法退一步，说成「哪个分子接走了断下来的那一半」。'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个名字挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'高', q:'Glucose to fructose — isomerisation or epimerisation?',
    ez:'“Isomerisation. The carbonyl moves from carbon one to carbon two. So an aldose becomes a ketose. That is the textbook’s own example of isomerisation. Epimerisation is different. It changes the configuration at one carbon. And it does not move the carbonyl. The textbook’s example of that is glucose to galactose. Both kinds keep the number of carbon atoms the same.”',
    ezcn:'<b>是异构化。</b><b>羰基从 C1 挪到 C2，于是醛糖变成酮糖</b>——<b>这正是书自己举的异构化例子</b>。<b>差向异构化不一样：它改变某一个碳上的构型，但不挪动羰基</b>（<b>书举的例子是葡萄糖→半乳糖</b>）。<b>两种都不改变碳原子的数目。</b>',
 en:'“Isomerisation. The carbonyl moves from carbon one to carbon two, so an aldose becomes a ketose, and that is the textbook’s own example of isomerisation. Epimerisation would change the configuration at one carbon without moving the carbonyl, and the textbook’s example of that is glucose to galactose. Both keep the number of carbon atoms the same.”',
 cn:'<b>判据一句话：羰基挪了没有。</b>挪了是 isomerisation，没挪只是某个碳翻了个身就是 epimerisation。<span class="pg">p160</span><br>同事真的问过的那道题是反过来的方向：<b>glucose → galactose 答 epimerization at C-4</b>，酶是 UDP-glucose-4-epimerase（<span class="pg">p172</span>，卡 <b>06</b>）。'},
{r:'高', q:'Transamination or deamination?',
    ez:'“They are not the same reaction. In transamination the amino group is handed over. It goes to a two oxo acid. So no ammonia is released. And a new amino acid appears. In oxidative deamination the amino group leaves. It leaves as free ammonia. The textbook’s enzyme is glutamate dehydrogenase. It uses a nicotinamide coenzyme. The cell puts them in that order on purpose. Transaminations collect the amino groups onto glutamate. Then glutamate alone is deaminated.”',
    ezcn:'<b>不是同一个反应。</b><b>转氨作用：氨基被交给一个 α-酮酸，所以不放出氨，而且出现一个新的氨基酸</b>。<b>氧化脱氨：氨基以游离氨的形式离开</b>（<b>书里的酶是谷氨酸脱氢酶，用烟酰胺辅酶</b>）。<b>细胞把两者排成这个顺序是有意的：先靠转氨把各处的氨基都收集到谷氨酸上，然后只对谷氨酸做脱氨。</b>',
 en:'“They are not the same reaction. In transamination the amino group is handed to a 2-oxoacid, so no ammonia is released and a new amino acid appears. In oxidative deamination the amino group leaves as free ammonia, and the textbook’s enzyme is glutamate dehydrogenase, E.C. 1.4.1.2, with a nicotinamide coenzyme. The cell puts them in that order on purpose: transaminations collect the amino groups onto glutamate, and then glutamate alone is deaminated.”',
 cn:'<b>判据一句话：有没有放出氨。</b>没放出就是对调，是 transamination；放出了才是 deamination。<span class="pg">p119 p120</span><br><b>最后那句「先汇集再脱氨」是书自己的话</b>，说出来比只分辨两个词有力得多 —— 它顺手把卡 <b>aa</b> 的尿素那一段接上了。'},
{r:'高', q:'Kinase, phosphorylase or phosphatase?',
    ez:'“Three names with phosphate in them. And three different reactions. A kinase moves a phosphate from A T P onto something. So it is a transferase. A phosphatase hydrolyses a phosphate off. So it is a hydrolase. A phosphorylase does neither. It uses inorganic phosphate to break a bond. Glycogen phosphorylase releases glucose one phosphate that way. The textbook says starch and glycogen are broken down by phosphorolysis. They are not broken down by hydrolysis.”',
    ezcn:'<b>三个名字里都有「磷酸」，但是三个不同的反应。</b><b>激酶 kinase ＝ 把磷酸从 ATP 搬到某样东西上（转移酶）</b>；<b>磷酸酶 phosphatase ＝ 用水解把磷酸拿掉（水解酶）</b>；<b>磷酸化酶 phosphorylase ＝ 两者都不是——它用无机磷酸去断一根键</b>（<b>糖原磷酸化酶就是这样放出葡萄糖-1-磷酸的</b>）。<b>书说淀粉和糖原是靠磷酸解分解的，不是靠水解。</b>',
 en:'“Three names with phosphate in them and three different reactions. A kinase moves a phosphate from ATP onto something, so it is a transferase. A phosphatase hydrolyses a phosphate off, so it is a hydrolase. A phosphorylase does neither: it uses inorganic phosphate to break a bond, and glycogen phosphorylase releases glucose-1-phosphate that way. The textbook says starch and glycogen are broken down by phosphorolysis rather than by hydrolysis.”',
 cn:'<span class="pg">p042 p063 p173</span>。<b>判据：磷酸是被搬走的、被拆下来的、还是拿来砍键的。</b>',
 warn:'⚠ <b>最刁的一点在这里</b>：做磷酸解的那个酶，自己是被磷酸化开关的。书 <span class="pg">p063 §3.7.2</span>：<b>glycogen phosphorylase a 是活性形式，b 几乎无活性</b>，靠活性中心里一个丝氨酸羟基的<b>可逆磷酸化</b>互变，拆磷酸的是专门的磷酸酶。<b>一个名字里带 phosphoryl（酶名 phosphorylase）、一个动作叫 phosphorolysis、一个开关叫 phosphorylation —— 三件不同的事挤在同一个酶身上。</b>'},
{r:'中', q:'Dehydrogenation or dehydration?',
 en:'“Dehydrogenation removes hydrogen and it is an oxidation, so an acceptor has to take that hydrogen, usually NAD-plus or FAD. Dehydration removes a whole water molecule and it is not an oxidation at all, because the hydrogen and the oxygen leave together. The textbook has both in one place. In β-oxidation the first and third steps are dehydrogenations, with FAD and with NAD-plus, and the second step is a hydration.”',
 cn:'<b>判据：有没有一个氢受体。</b>有 NAD⁺ 或 FAD 在方程里，就是脱氢；水整个走掉、没有受体，就是脱水。β-氧化四步在 <span class="pg">p196</span>（卡 <b>23</b>），<b>四步里三个家族都到齐了</b>。'},
{r:'中', q:'Synthase or synthetase?',
 en:'“The textbook puts both words in brackets in its own list. Lyases are also called synthases, and ligases are also called synthetases. So a synthase makes a bond without ATP, by running a lyase backwards onto a double bond. A synthetase makes a bond and pays with ATP. If I hear the longer word, I should be expecting ATP in the equation.”',
 cn:'书 <span class="pg">p042</span> 的标题就写着 <i>4. Lyases (Synthases)</i> 和 <i>6. Ligases (Synthetases)</i>。<b>这一对是「同一类两个名字」最好的证据</b>，也是 why 第三层那句「分类是人划的」的书证。<br>书里的例子对得上：malate synthase 不花 ATP（<span class="pg">p140</span>，卡 <b>24</b>）· carbamoyl phosphate synthetase 花 ATP（E.C.6.3.4.16，<span class="pg">p123</span>）。'},
{r:'中', q:'Hydrolysis or thiolysis — is the fourth step of β-oxidation a hydrolase reaction?',
 en:'“No. Nothing is broken by water there. Coenzyme A comes in and the acyl group ends up on its sulfur as a thioester, so by the textbook’s own definition of class two, a transfer of a group, that enzyme is a transferase. The textbook does not give this step a class itself, so that is a conclusion from its definitions rather than something it prints.”',
 cn:'⚠ <b>这一条要标清楚是推出来的。</b>书给了这一步的名字（p196 印的是 <i>thiolytic cleavage</i>）和它自己的六类定义（p041），<b>但没有把这一步归过类</b>。说的时候用「by the textbook’s own definition」，不要说「the textbook says」。'}
]},

{g:'为什么类', gn:'这一族的「为什么」多半落在同一处：某个键好不好断，以及断完回不回得来。', items:[
{r:'中', q:'Why does the cell need an epimerase, when anomers change on their own?',
 en:'“Because the two cases are not the same kind of change. The α and β forms differ at the anomeric carbon, and the ring can open to the free aldehyde and close the other way, so they interconvert by themselves. That is mutarotation. Any other asymmetric carbon can only be inverted by breaking a covalent bond, so the cell needs an enzyme. For glucose to galactose the textbook says the coenzyme is uridine diphosphate.”',
 cn:'<b>这一条把家族 A 里两个看起来一样的现象分开了</b>：一个是自发的平衡，一个要花一个酶和一个活化的糖。<span class="pg">p151 p160 p172</span><br>卡 <b>06</b> 里那句「anomer 能自己变回去，别的 epimer 不能」就是这一条的短版。'},
{r:'中', q:'Why is a decarboxylation so often coupled to an oxidation?',
 en:'“Because a plain carbon-carbon bond is hard to break, and a keto group on the next carbon makes it easy. So the pathway first oxidises a hydroxyl into that keto group. That makes a β-oxoacid, and the carbon then comes off as carbon dioxide almost by itself. The textbook uses exactly that order when it shortens a hexose to a pentose, and the same order appears at the isocitrate step of the citric acid cycle.”',
 cn:'书 <span class="pg">p159</span> 的原话顺序就是「先脱氢成 β-氧代酸，然后脱羧」。<b>卡 24 里 isocitrate 那一步是同一个顺序的第二个例子</b>：先氧化成 oxalosuccinate，再脱羧成 2-oxoglutarate。<b>说得出「这是同一个套路」，比分别背两条通路值钱。</b>'},
{r:'中', q:'Why is phosphorylation the cell’s favourite switch?',
 en:'“Because it is reversible, it is fast, and it changes the charge. The textbook says the important thing about it is the change of charge on the side chain, and a change of charge changes the conformation. A kinase puts the group on and a phosphatase hydrolyses it off, so the switch can be thrown both ways. And the cell already has ATP everywhere, so the donor costs nothing to arrange.”',
 cn:'<span class="pg">p113</span>。<b>「可逆」这一条是关键</b>，因为卡 <b>08</b> 那道题的对照就在这里：propeptide 被切掉是<b>水解</b>，水解掉的肽段扩散走了，所以那是<b>一次性</b>开关，磷酸化不是。<b>一句话就能把两张卡接起来。</b>',
 good:'加分的一句：“One cycle of that switch costs the cell one ATP, so regulation is not free.” 这一句在卡 <b>32</b>。'},
{r:'中', q:'What do the four numbers of an EC code mean?',
 en:'“The textbook takes lactate dehydrogenase as its example, E.C. 1.1.1.27. The first number is the main class, one for oxidoreductase. The second is the subclass, here the oxidation of a primary alcohol group. The third is the type of hydrogen acceptor, here a nicotinamide coenzyme. The fourth is the serial number of that particular enzyme. Its systematic name is L-lactate:NAD-plus oxidoreductase and its everyday name is lactate dehydrogenase.”',
 cn:'<span class="pg">p041</span>，一字不改。<b>全书只印出过九个 EC 号</b>，六个类正好各有一个例子，速背第 2 点那张表把它们排齐了。<b>他要是拿一个书上没有的 EC 号来问，答判据不要编号</b>：第一位是大类，剩下三位要查表。'}
]}
]
});
