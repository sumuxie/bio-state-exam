/* 横向卡 · 从基因到蛋白 —— 同一条信息被抄两遍，两遍由完全不同的机器读
   不对应任何一道考题。三十道题里没有「转录」「翻译」「核糖体」「遗传密码」，
   所以这块材料只会以**追问**出现：#12 操纵子从一边走进来，#13 翻译后修饰从另一边走进来。
   出处 Biochemie OCR p085–p091（§4.1.4 DNA 被转录成 RNA：中心法则、五种 RNA、tRNA 三叶草、
   RNA 聚合酶、启动子、终止子、转录后加工）、p092–p101（§4.2 DNA、RNA 与蛋白质合成：
   两个关键问题、遗传密码表、核糖体、活化、起始、延长、终止）、p102（去甲酰基 ＋ 真核差别）、
   p106（帽子、内含子、hnRNA）、p131（12 与 30–60 kJ/mol 的门槛，用来算一个残基的成本）。
   图三张全部来自书：Obr. 4.35（p093）· Obr. 4.28a（p088）· Obr. 4.42（p099）。
   卡 03 已定义、这里不重复：polynucleotide、碱基配对、反平行、撇号约定、S 值不可加、
   五种 RNA 各自干什么、hnRNA 与内含子。卡 16 已定义：DNA 聚合酶、引物、5′→3′、校对。
   卡 12 已定义：σ 因子、全酶 α₂ββ′σ、启动子/操纵基因、终止子发夹、衰减。
   本卡欠的、别处没人解释过的词（terms.py 查过）：degeneracy · reading frame ·
   peptidyl transferase · Shine-Dalgarno · polysome · elongation factor · release factor ·
   codogenic · aminoacyl adenylate · rho factor · formylmethionine · ribozyme。 */

window.CARDS.push({
id:'x-trans', cross:1, w:0,
q:'从基因到蛋白 —— 细胞把同一条信息抄两遍，两遍由完全不同的机器读',
qcn:'横向卡 · 转录 ＋ 翻译 ＋ 核糖体 ＋ 遗传密码 · 书 p092–p101 十页',
sub:'跨题共用 · 没有对应的考题，只会以追问出现 · 接卡 03、12、13、08、16、aa、x-bonds',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口 · 这张卡为什么存在', gn:'这张卡<b>没有对应的考题</b>，所以「它为什么存在」本身要能说出口——因为他一定是<b>顺着别的卡问过来的</b>，而且左右两张卡都通向这里。'},
 {n:'01', t:'三十道题里没有这一题，可是它被两边夹着',
  big:'#12 问操纵子，那是<b>管转录开不开</b>；#13 问翻译后修饰，那是<b>翻译完之后的事</b>。<b>中间这一段，没有一道题问过</b>',
  en:'“None of the thirty written questions asks how a gene becomes a protein. So this can only reach me as a follow-up, and it reaches me from both sides. The operon question is about whether transcription is switched on. Post-translational modification is about what happens after this. The word post-translational already assumes I can say what translation is. What I need here is not two pathways in order. I need one sentence that holds both of them.”',
  note:'<b>这个缺口是数出来的，不是看出来的</b>：她全套卡的口语英文里，<b>translation 出现在 10 张卡上、ribosome 6 张、codon 6 张、transfer RNA 5 张</b>，而 <b>genetic code 只有 1 张、anticodon 只有 1 张</b>。<b>词到处都是，东西一个没有。</b><br><br>上游是卡 <b>03</b>（DNA 和 RNA 的区别，已经把转录的定义、启动子、终止子给了）和卡 <b>16</b>（复制，已经把 DNA 聚合酶和引物给了）。下游是卡 <b>13</b>、<b>08</b>。<b>这张卡是中间缺的那一节。</b>'},
 {n:'02', t:'书自己说这件事只有两个问题',
  big:'书原话：蛋白合成的关键是两件事——<b>遗传信息怎么传下去</b>，和<b>肽键的能量怎么来</b>。<b>这张卡就按这两问排</b>',
  en:'“The textbook says protein synthesis raises exactly two key questions. First, how the transfer of the genetic information is secured. Second, how the energetics of peptide bond formation is secured. I will answer in that order. The first question is the code and the adaptor. The second question is where the numbers are, because the cell pays four high-energy phosphate bonds for every residue.”',
  note:'<b>这两问是书自己列的</b>（<span class="pg">p092</span>），所以按它排最安全——<b>结构是书给的，不是我编的</b>。同页还给了两个定性事实：蛋白合成是<b>吸能</b>过程，而且<b>受严格调控</b>（调控那半句正好把话交回给卡 <b>12</b>）。<br><br>书列的参与细胞器：<b>细胞核、核仁、内质网，主要是核糖体</b>。'},

 {g:'轴 · 抄两遍，第二遍换了字母表', gn:'<b>这一组就是这张卡。</b>说得出这三句，转录、翻译、密码表、tRNA 全都挂在上面；说不出，后面就是两条流水账。'},
 {n:'03', t:'第一遍：同一种语言的誊抄',
  big:'转录是<b>把 DNA 的碱基顺序抄成 RNA 的碱基顺序</b>。<b>字母表没变</b>，靠的就是碱基互补，一个对一个',
  en:'“Transcription is the copying of the base sequence of DNA into the base sequence of RNA. That is the textbook’s own definition and its reason for the name. The mechanism is the same as for DNA synthesis, by the complementarity of the bases. So the first copy is made in the same language, base for base, and nothing has to be interpreted. Only one gene is copied, and only one of the two strands is read.”',
  note:'书 <span class="pg">p087</span> 的原话就是这两句：RNA 的合成机制与 DNA 类似（按碱基互补原则），但把 DNA 的碱基顺序<b>转抄</b>成 RNA 的碱基顺序，<b>所以这个过程叫转录</b>。<br><br><b>「字母表没变」是这一遍的全部性质</b>：A 对 U、G 对 C，一个碱基换一个碱基，没有任何一步需要「解释」。<b>这也是为什么转录出错的代价小</b>——一个基因有很多份拷贝，扔掉一份不要紧。'},
 {n:'04', t:'第二遍：字母表从四个变成二十个',
  big:'翻译要把<b>四个字母的语言</b>读成<b>二十个字母的语言</b>，<b>一次读三个字母</b>。这一遍不是誊抄，是解码',
  en:'“Translation reads that copy in a language with a different alphabet. There are four bases and twenty amino acids, so the reading has to go three letters at a time. A codon is a group of nucleotides in the messenger that determines the attachment of one amino acid to the growing chain. That is the textbook’s definition, and the important word in it is determines. A codon does not resemble its amino acid and does not bind it. It only specifies it.”',
  note:'<b>密码子的定义是书的原话</b>，而且那一句里<b>「密码子」「决定」「一个氨基酸」三处都是加粗</b>的（回 300 dpi 原图看过，<span class="pg">p093</span>）。<b>这本书正文极少加粗，加粗的地方就是锚点。</b><br><br>「determines / specifies，不是 binds」这个动词分得清不清，就是下一点的全部内容。'},
 {n:'05', t:'所以必须有一个适配器，而书自己把理由写成了一句话',
  big:'<b>氨基酸对密码子没有任何亲和力</b>。三个碱基和一条侧链之间没有共同化学。<b>tRNA 就是那个物理答案</b>',
  en:'“An amino acid has no affinity for a codon. Three bases and a side chain have no chemistry in common, so nothing would put leucine on its own triplet. The cell solves it with an adaptor. Transfer RNA carries an anticodon at one end and the amino acid at the other, so the recognition stays RNA against RNA. The textbook says it in one sentence. From the moment the aminoacyl-tRNA is formed, each amino acid is recognised by the anticodon of its transfer RNA, and not by its own chemical composition.”',
  note:'<b>这一句是全卡的地基</b>（<span class="pg">p096</span>），而且它是<b>书自己的话</b>，不是推论。卡 <b>03</b> 也引了同一句，两张卡说的是一件事。<br><br><b>它一次回答了三个问题</b>：①「为什么要有 tRNA」——因为氨基酸自己认不出密码子；②「为什么遗传密码是一张<b>表</b>而不是一套化学规律」——因为那张表实际上装在一组 aminoacyl-tRNA synthetase 里，是酶的特异性，不是碱基和侧链之间的亲和力；③「为什么可以给密码表加一行」——把一个正交的 synthetase/tRNA 对塞进去就行，这正是她实验室用非天然氨基酸的原理（卡 <b>aa</b>）。',
  good:'加分的一句：“The code is a table because it is implemented by a set of enzymes rather than by chemistry. That is also why it can be extended.”'},

 {g:'第一遍怎么做的 · 转录', gn:'三点：<b>酶</b>、<b>两头</b>、<b>读哪条链</b>。第三点是个陷阱，书自己的词听起来像反的。'},
 {n:'06', t:'RNA 聚合酶，和它跟 DNA 聚合酶的四条差别',
  big:'<b>DNA 依赖的 RNA 聚合酶</b>：底物是四种 <b>NTP</b>，模板是 DNA，方向 <b>5′→3′</b>。<b>四条不同</b>：底物 · <b>不要引物</b> · 只抄一条链 · 只抄一个基因',
  en:'“RNA is made by DNA-dependent RNA polymerase. Its substrates are the four ribonucleoside triphosphates, which the textbook names as ATP, GTP, CTP and UTP. Its template is DNA, and the textbook says the reaction is like the one DNA polymerase catalyses. Both build the chain five prime to three prime and both release pyrophosphate. Four things differ. It takes ribonucleotides rather than deoxyribonucleotides. It needs no primer, and the textbook says that in one line. It copies only one of the two strands. And it copies one gene rather than a whole chromosome.”',
  note:'<b>「不需要引物」是书的一句话</b>（<span class="pg">p088</span>，<i>a starter for RNA synthesis is not needed</i>），而它正是卡 <b>16</b> 那一整条轴的反面：DNA 聚合酶只能接已有的 3′-OH，所以非有引物不可；<b>RNA 聚合酶能从零起头</b>，所以细胞里的引物本身就是 RNA 做的。<b>这两句一起说，比单说任何一句都值钱。</b><br><br>书列的全酶四种功能（<span class="pg">p089</span>）：<b>结合模板 · 起始 · 延长 · 终止</b>。E. coli 全酶 <b>α₂ββ′σ</b>，起始后 σ 解离，核心酶继续延长——这一段在卡 <b>12</b>，别在这里重讲。<br>真核<b>三种</b>：<b>pol I</b> 在核仁做 rRNA 前体、<b>pol II</b> 做 mRNA 前体、<b>pol III</b> 主要做 tRNA 和 5S rRNA 的前体（<span class="pg">p089</span>）。',
  warn:'⚠ <b>校对这条书里没有。</b>书给了 DNA 聚合酶的 3′→5′ 外切核酸酶（卡 16），<b>但从没说 RNA 聚合酶有没有</b>。被问准确度就说：generally RNA 聚合酶的纠错能力弱得多，而这不要紧，<b>因为一个基因有很多份转录本，扔掉一份的代价远小于改错一份基因组</b>。说的时候带 generally。'},
 {n:'07', t:'转录单元的两头：启动子和终止子',
  big:'起点 <b>promoter</b>：聚合酶结合的那段 DNA，由 <b>σ</b> 认。终点 <b>terminator</b>：<b>富 G＋C 的回文 → 发夹</b>，后面跟<b>一串 U</b>',
  en:'“A transcription unit has two ends, and both are sequences in the DNA itself. The promoter is the sequence the polymerase binds in order to start, and the sigma factor is what recognises it. The terminator is where the chain stops. The textbook gives a strong terminator two features. First a region rich in G and C containing a palindrome, so the transcript folds back on itself into a hairpin. Second a run of A and T pairs just after it, so the RNA ends in several uridines. The hairpin is stable and the uridine tail pairs weakly with the template, so the transcript comes off by itself. Other terminators have neither, and those need a protein, the rho factor.”',
  note:'<span class="pg">p089</span>、<span class="pg">p090</span>。<b>两条特征要一起给</b>，只说发夹是半个答案：发夹让聚合酶停下来，<b>而 U 和 A 配对最弱，是它让杂合链真的松开</b>。<br><br>书还给了一个很好用的画面（<span class="pg">p090</span>）：被转录的那一段双螺旋只<b>解开大约一圈</b>，形成一个移动的<b>转录泡</b>，RNA 的 3′ 端和模板链配成一小段 <b>DNA–RNA 杂合双链</b>，泡走过之后 DNA 又绕回去。<b>所以转录不需要解旋酶</b>——这跟复制叉又是一条对照。<br><br>ρ 因子书说得很具体：它是<b>一个酶</b>，消耗 NTP，把 RNA–DNA 和 RNA–RNA 的双链解开。'},
 {n:'08', t:'⚠ 读哪条链 —— 书自己的词听起来像反的',
  big:'书给被读的那条链的名字，英译是 <b>codogenic strand</b>。<b>听起来像 coding，其实正是 template</b>。<b>书自己两页之后就管同一条叫 template</b>',
  en:'“Only one strand is copied, and the textbook has three names for the same strand. On page 88 it is the codogenic strand. On page 90 the same strand is the template strand. And the figure on page 89 labels it the antisense strand. That matters, because codogenic sounds like coding, and in ordinary usage the coding strand is the other one. The coding strand is the one whose sequence matches the messenger, with thymine where the RNA has uracil. So if the examiner says codogenic he means the template, and his own book proves it two pages later.”',
  note:'<b>这是这十页里最容易被抓的一条</b>，而处理方式是 LOGIC §14 那一招：<b>用书的一半打书的另一半</b>。三个出处都在书里，一个都不用外引：<br>① <span class="pg">p088</span> 正文：RNA 合成只在 DNA 的<b>一条</b>链上进行，那条链的名字英译是 <b>codogenic strand</b>。<br>② <span class="pg">p090</span> 正文：同一条链被叫成 <b>template strand</b>（模板链），它与 RNA 的 3′ 端形成杂合双链。<br>③ <span class="pg">p089</span> <b>Obr. 4.30</b> 的图内标签，印的是英文 <b>DNA antisense strand</b>。<br><br><b>三个名字，一条链。</b>而 <b>coding strand ＝ 另一条</b>，它的序列跟 mRNA 一样（T 换 U）——<b>所以基因序列写在纸上的时候，写的是没被读的那条。</b>',
  warn:'考场上<b>不要直接反驳他的用词</b>。先顺着说 “the strand the textbook calls codogenic”，<b>再补一句它就是 template</b>。两个名字都说出来，他问哪个都接得住。'},

 {g:'遗传密码是一张有性质的表，不是一份清单', gn:'他不会让你背密码表。<b>他会问这张表有什么性质</b>：为什么三位、简并、阅读框、起始终止、通不通用。<b>五条，每条都能当场算或当场证。</b>'},
 {n:'09', t:'为什么是三个碱基 —— 这是黑板上能算的',
  big:'<b>四个字母、两位不够二十个</b>：4¹＝4、4²＝16、<b>4³＝64</b>。<b>三是装得下二十的最小位数</b>，多出来的就是简并',
  en:'“The textbook does the arithmetic itself. Twenty amino acids cannot be coded by four single nucleotides, and they cannot be coded by pairs either. They can be coded only by triplets. With a triplet code there are sixty-four combinations, four to the power of three. And it follows from that, in the textbook’s own words, that some amino acids can be coded by several triplets. That surplus is degeneracy.”',
  note:'<span class="pg">p093</span>–<span class="pg">p094</span>。书连推理带结论都给了，<b>照着说就行，不必自己组织</b>。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>N = b<sup>n</sup></code><br>N 是能拼出来的词数 · b 是字母表大小（这里 b ＝ 4，A·G·C·U）· n 是一个词的位数。<b>每一位都能独立取四个值里的任何一个</b>，所以位数每加一位，词数乘以 4。<br><br><b>三步，他一问就在黑板上写</b>：<br>① <code>4¹ = 4</code>——连四个氨基酸都不够。<br>② <code>4² = 16 < 20</code>——<b>差四个</b>。书说的就是「也不能用双联体」。<br>③ <code>4³ = 64 ≥ 20</code>——够了，而且富余 44 个格子。<br>④ 反过来解：<code>n ≥ log₄20 = ln20 ÷ ln4 ≈ 3.00 ÷ 1.39 ≈ 2.16</code>，<b>位数必须是整数，所以往上取整就是 3</b>。<br><br><b>=== 一句话理解 ===</b><br><b>「三」不是生物选的，是取整逼出来的。</b>真正需要的是 2.16 位，而字母不能切一半，所以只能买三位——<b>多买的那 0.84 位没处退，就变成了简并。</b>换句话说，<b>简并不是密码表的设计，是取整的找零。</b><br>⚠ <code>log₄20 ≈ 2.16</code> 这个写法<b>书里没有</b>，是同一件事的另一种算法。书给的是 4³ ＝ 64 和「两位不够」。'},
 {n:'10', t:'简并，以及它藏在第三位',
  big:'书说有的氨基酸<b>六个</b>密码子，有的四个、三个、两个或<b>只有一个</b>。<b>数一遍书自己的表，加起来正好 61</b>',
  en:'“Degeneracy means several triplets for one amino acid. The textbook says some amino acids are coded by six different triplets, others by four, three, two, or only one. Counting its own table, sixty-one triplets code for something and three are stop. Leucine, serine and arginine have six each. Methionine and tryptophan have one each. And most of the degeneracy sits in the third base. In eight boxes of the table the first two bases already fix the amino acid and the third does not matter at all.”',
  tbl:{head:['几个密码子','哪些氨基酸','小计'],
   rows:[
    ['<b>6 个</b>','Leu · Ser · Arg','3 × 6 ＝ <b>18</b>'],
    ['<b>4 个</b>','Val · Pro · Thr · Ala · Gly','5 × 4 ＝ <b>20</b>'],
    ['<b>3 个</b>','Ile','1 × 3 ＝ <b>3</b>'],
    ['<b>2 个</b>','Phe · Tyr · Cys · His · Gln · Asn · Lys · Asp · Glu','9 × 2 ＝ <b>18</b>'],
    ['<b>1 个</b>','Met · Trp','2 × 1 ＝ <b>2</b>'],
    ['<b>合计</b>','<b>20 个氨基酸</b>','<b>61 个密码子</b>']
   ]},
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>账</b>：<code>64 个三联体 − 3 个终止（UAA · UAG · UGA） = 61 个编码的</code>；<code>61 ÷ 20 ≈ 3.05</code>，<b>平均每个氨基酸摊到三个</b>。<br><br><b>上面那张表是从书的 Tab. 4.3 一格一格数出来的</b>，两个验算都对得上：氨基酸数 <code>3 + 5 + 1 + 9 + 2 = 20</code> ✓，密码子数 <code>18 + 20 + 3 + 18 + 2 = 61</code> ✓。<b>两边同时对上，说明没数漏。</b>而书自己只说了「最多六个，还有四个、三个、两个、一个」——<b>这张表就是把那句话填满</b>。<br><br><b>第三位到底有多不重要，也是数出来的</b>：表里有<b>八个整格</b>（CUx ＝ Leu · GUx ＝ Val · CCx ＝ Pro · ACx ＝ Thr · GCx ＝ Ala · GGx ＝ Gly · UCx ＝ Ser · CGx ＝ Arg），<b>前两位一定，第三位取什么都一样</b>。<code>8 × 4 = 32 个密码子 = 整张表的一半</code>。<br><br><b>=== 一句话理解 ===</b><br><b>遗传密码实际上是一个「两位半」的码</b>：前两位承载几乎全部信息，第三位有一半的时候完全不带信息。<b>所以第三位上的一个点突变，多半什么都不改</b>——那 44 个多出来的格子没有被浪费掉，它们被当成<b>缓冲</b>用掉了。<br>顺着就懂了为什么同义突变叫 silent，而且为什么做定点突变时要改前两位：<b>想换氨基酸就动前两位，只想动序列不想动蛋白就动第三位。</b><br>⚠ 61、3.05、上面那张分布表、32 这个数<b>书里都没有</b>，全部是从书的 Tab. 4.3 数出来或算出来的。被问出处就这么说。'},
 {n:'11', t:'阅读框 —— 书给了它的定义，只是没给它名字',
  big:'书说：信息从<b>一个确定的起点</b>开始读，<b>朝一个方向</b>，<b>按同样大小的一组一组</b>走。<b>这三句就是 reading frame</b>',
  en:'“The textbook says the information on the DNA is always read from a certain starting point, in one direction, in groups of equal size, codon after codon. That is the reading frame, and the reading frame is the reason the start codon matters twice. Nothing in the messenger marks the boundaries between codons. A codon only means something relative to where the counting began. So the start codon does not only say where to begin. It also says which of the three possible frames is the real one.”',
  note:'<span class="pg">p093</span>。<b>书把阅读框描述完了，但没有给它名字</b>——terms.py 查过，reading frame 这个词在整套卡里从没被正面定义过，所以在这里给掉。<br><br><b>三个框</b>：同一条 mRNA 从第 1、第 2 或第 3 个核苷酸起读，得到三串完全不同的密码子。<b>没有任何标点把它们分开</b>，所以起点定的不是「从哪开始」，是「整条读出来是什么」。<br><br><b>翻译过程里还有第二个东西在守这个框</b>，而且书写了一句非常漂亮的话（<span class="pg">p099</span>）：移位之后，peptidyl-tRNA 继续保持密码子–反密码子配对<b>已经不是为了指定氨基酸</b>（那件事已经做完了），<b>而是为了让核糖体正好挪三个核苷酸、把阅读框守住</b>。<b>同一个配对，在两步里干了两件不同的事。</b>'},
 {n:'12', t:'起始、终止，和「通用」这个词',
  big:'<b>AUG</b> ＝ Met ＝ 起始密码子。<b>UAA · UAG · UGA</b> 不编码任何氨基酸，是终止密码子。书说密码<b>对所有生物通用</b>——<b>而书自己的表已经给了一个例外</b>',
  en:'“The codon AUG codes methionine and also serves as the initiation codon. The triplets UAA, UAG and UGA code no amino acid, and they are the termination codons. The textbook also calls them stop codons and nonsense codons. And it says the code for amino acids is universal for all organisms. But its own table already carries an exception. A footnote says UGA is read as selenocysteine when the messenger carries a SECIS element. So I would say nearly universal, and let the book’s own footnote be the reason.”',
  note:'<span class="pg">p094</span> 正文，<b>「起始密码子」和「终止密码子」两处都是加粗的</b>（回原图看过）。<span class="pg">p093</span> 是表和脚注。<br><br><b>「universal」这个词是书原样印的</b>（那一句英译：<i>the code for amino acids is universal for all organisms</i>，<span class="pg">p094</span>），所以别说「书说 nearly universal」。<b>正确的姿势是：引书的正文，再引书同一节的脚注，让这两条自己打架。</b>这跟 α-helix n+3 / n+4 是同一类处理。<br><br>⚠ 线粒体密码表跟核的不一样（几个密码子读法不同），<b>这一条书里完全没有</b>，说的时候带 generally，而且<b>不要主动提</b>——书的脚注已经够用了。第 21、22 个氨基酸怎么数在卡 <b>aa</b>。',
  warn:'⚠ <b>别把 AUG 说成「只在开头」。</b>书明说 AUG <b>同时</b>编码起始的 Met 和链内部的 Met 残基——<b>正因为这样，光靠密码子认不出起点</b>，才需要下一组里那个额外信号。'},

 {g:'第二遍怎么做的 · 核糖体与四个阶段', gn:'书把翻译分成<b>四步</b>：活化 · 起始 · 延长 · 终止。<b>一步一句，不要展开成流水账。</b>前面先把机器交代掉。'},
 {n:'13', t:'核糖体：两个亚基，三个位点',
  big:'核糖体 ＝ <b>rRNA ＋ 蛋白</b>的颗粒。<b>小亚基 30S/40S ＋ 大亚基 50S/60S</b>。tRNA 的位点：<b>A</b>（进来的）· <b>P</b>（拿着链的）· <b>E</b>（空了要走的）',
  en:'“A ribosome is a cell organelle built from ribosomal RNA and protein, so a ribonucleoprotein particle. It has two subunits: thirty S and fifty S in prokaryotes, forty S and sixty S in eukaryotes. An E. coli ribosome is about twenty nanometres across, around two thousand seven hundred kilodaltons, and seventy S. The textbook adds that its proteins are not only structural. Several of them are enzymes or factors that take part in the synthesis directly. There are at least two sites for transfer RNA. The A site, the aminoacyl site, is where the incoming aminoacyl-tRNA binds by codon and anticodon. The P site, the peptidyl site, holds the transfer RNA carrying the chain built so far. The textbook mentions a third, the E site, where the empty tRNA goes before it leaves.”',
  note:'<span class="pg">p094</span> 数字全在这一页，<span class="pg">p096</span> 给 A 和 P 的定义，<span class="pg">p099</span> 在方括号里提了一次 <b>E 位点</b>并说图上没画。<b>所以「三个位点」要这样说：书正面定义了两个，第三个书只提了一次。</b><br><br><b>S 不可加</b>：30S ＋ 50S ＝ 70S 而不是 80S，因为沉降系数同时取决于质量和<b>形状</b>（卡 <b>03</b> 已经讲过，这里一句带过就行）。<br><br><b>三个位点的名字都是按「上面放什么」起的</b>：A ＝ aminoacyl、P ＝ peptidyl、E ＝ exit。记住这个，就不会把 A 和 P 说反。',
  warn:'⚠ <b>核糖体的催化中心到底是蛋白还是 RNA，这本书跟今天的通说不一致</b>——书说 peptidyl transferase 是<b>大亚基里的一个蛋白</b>（<span class="pg">p099</span>）。generally，那个活性中心是 <b>23S rRNA</b>，也就是说核糖体是个 <b>ribozyme</b>。<b>考场说法：先说书的，再说 generally 那一条，并说明这是后来的结构工作定的。</b>'},
 {n:'14', t:'第一步 · 活化 —— 而这一步就是整个能量问题的答案',
  big:'游离氨基酸<b>造不出蛋白</b>，必须先被<b>抬到更高的能级</b>。<b>ATP → AMP ＋ PPᵢ</b>，氨基酸以<b>酯键</b>挂到 tRNA 的 <b>CCA</b> 末端上',
  en:'“Proteins cannot be built from free amino acids. Each amino acid has to be raised to a higher energy level first, and the textbook calls that activation. It happens in the cytosol. The enzymes are the aminoacyl-tRNA synthetases, one specific for each amino acid and for its transfer RNA. The reaction has two steps. First the carboxyl of the amino acid attacks ATP and gives an aminoacyl adenylate, releasing pyrophosphate. Then the aminoacyl group is handed to the transfer RNA. On the tRNA the amino acid is held by its own carboxyl, as an ester, on the two prime or the three prime hydroxyl of the terminal adenosine of the CCA end.”',
  note:'<span class="pg">p095</span>、<span class="pg">p096</span>。书还给了三条<b>硬事实</b>，都是很好的 specific 弹药：所有 synthetase 的分子量都在 <b>十万</b> 上下 · 都带<b>活性必需的 –SH 基</b> · 都要 <b>Mg²⁺</b> 当辅因子。<br><br><b>「抬到更高能级」这半句是整个能量问题的答案</b>：肽键不是由游离的羧基和氨基脱水做成的（那是吸能的），<b>而是由一个酯的氨解做成的</b>。酯已经是高能形式了，<b>账在核糖体看见它之前就付过了</b>。硫酯和酯为什么活泼在卡 <b>x-bonds</b>。<br><br>CCA 是所有 tRNA 共有的 3′ 末端（<span class="pg">p087</span>）——<b>所有 tRNA 那一头都一样，区别全在反密码子那一头</b>。'},
 {n:'15', t:'第二步 · 起始 —— 光靠 AUG 找不到起点',
  big:'AUG 同时编码起始的 Met 和链内的 Met，<b>所以起点必须靠一个额外信号</b>：<b>Shine-Dalgarno</b> 序列，在 AUG 前约 <b>10 个核苷酸</b>处，跟 <b>16S rRNA 的 3′ 端</b>配对',
  en:'“The codon AUG codes both the initiator methionine and every internal methionine, so the codon alone cannot mark the start. The textbook says the start has to be distinguished in a more effective way, by an additional signal. In E. coli that signal is the Shine-Dalgarno sequence in the leader of the messenger, centred about ten nucleotides before the AUG. Its figure caption says these leader sequences are complementary to a region at the three prime end of the sixteen S ribosomal RNA. So the ribosome finds the right AUG by base pairing, not by reading it. Initiation then runs in three steps. IF-3 binds the thirty S subunit and helps the old ribosome come apart. Then GTP, the messenger and IF-2 bind to the thirty S subunit at the P site, together with the initiator transfer RNA. That one carries methionine with a formyl group on its amino nitrogen, so it is formylmethionyl-tRNA. Then IF-3 leaves, the fifty S subunit joins, and the bound GTP is hydrolysed. The textbook calls that last step irreversible.”',
  note:'<span class="pg">p097</span>、<span class="pg">p098</span>。<b>起始因子 IF ＝ initiation factor</b>，书把 IF、EF、RF 统称「因子」，并特意说明它们是<b>有催化能力的蛋白，但不算进酶里</b>（<span class="pg">p095</span>）。<br><br>⚠ <b>书的正文在这里绕了一下，图注才是准的。</b>正文那句读起来像是说 Shine-Dalgarno 序列长在 16S rRNA 的 3′ 端上；但同一节的 <b>Obr. 4.40 图注</b>写得清楚：<b>各条 mRNA 的 Shine-Dalgarno 序列（也就是它们的前导序列）与 16S rRNA 3′ 端的一段互补</b>。<b>所以 SD 在 mRNA 上，跟它配对的那段在 16S rRNA 上。</b>这又是 LOGIC §16 那一条：<b>图注带着正文没有的锚点。</b><br><br>书还说了一句很值钱的话：<b>起始那个 formyl-Met-tRNA 的识别，是核糖体上唯一一处不严格由密码子–反密码子决定的 tRNA 结合</b>（<span class="pg">p097</span>）。<b>起点是个例外，其余全靠配对。</b>'},
 {n:'16', t:'第三步 · 延长 —— 三小步，两个 GTP',
  big:'① <b>进位</b>（EF-Tu·GTP 带 aminoacyl-tRNA 进 A 位）② <b>转肽</b>（P 位的链接到 A 位的氨基酸上）③ <b>移位</b>（EF-G·GTP，整体挪一个密码子）',
  en:'“Elongation is the addition of one amino acid, and the messenger moves on by exactly one codon. The textbook gives it three steps. First, binding. The aminoacyl-tRNA whose anticodon matches the codon in the A site binds there. On its own it binds very weakly, so it arrives as a ternary complex with elongation factor EF-Tu and GTP. When the codon meets the anticodon, the GTP is split and EF-Tu leaves as a binary complex with GDP. Second, transpeptidation. Peptidyl transferase takes the chain off the transfer RNA in the P site and joins it to the amino acid in the A site. A new peptide bond is made and the chain is one residue longer. The longer peptidyl-tRNA is now in the A site, and the free uncharged tRNA is in the P site. Third, translocation. The uncharged tRNA leaves, and the peptidyl-tRNA moves with the messenger from A to P. That needs elongation factor EF-G and a second GTP.”',
  note:'<span class="pg">p098</span>–<span class="pg">p100</span>。<b>三步的名字就是图 Obr. 4.42 上印的三个词</b>：<b>Decoding · Transpeptidation · Translocation</b>——图在图页里。<br><br><b>三条值钱的细节</b>：① 书说 <b>EF-Tu 是延长的限速因子</b>，EF-Ts 负责把 EF-Tu·GDP 再生成 EF-Tu·GTP。② <b>EF-G 和 EF-Tu 互相排斥</b>，不能同时结合——<b>所以三步必须严格轮流，不会撞车</b>。③ 真核里 EF-Tu 和 EF-Ts 由一个寡聚蛋白 <b>eEF-1</b> 顶替，EF-G 由 <b>eEF-2</b> 顶替（图注里的话）。<br><br>⚠ <b>Obr. 4.43 的图注把位点说反了</b>：它末尾写成把肽链移到「结合位点 P」，而<b>同一张图画的、以及 p099 正文写的</b>，都是新的 peptidyl-tRNA 留在 <b>A</b> 位、空 tRNA 在 <b>P</b> 位。<b>按正文和图本身说，别按那句图注。</b>'},
 {n:'17', t:'第四步 · 终止 —— 用一个水分子代替氨基酸',
  big:'终止密码子进 <b>A 位</b>，没有 tRNA 认它，A 位空着。<b>释放因子</b>让肽酰基转到<b>一个水分子</b>上，而不是转到氨基酸上',
  en:'“Termination starts when one of the stop codons appears in the A site. Those triplets code no amino acid, so elongation cannot go on and the A site stays empty. Release factors act there. RF-1 recognises UAA or UAG, RF-2 recognises UAA or UGA, and RF-3 binds GTP and helps the other two bind. The textbook says exactly what the release factor does. Binding to the stop codon makes the peptidyl group transfer onto a molecule of water instead of onto an aminoacyl-tRNA. So the chain is hydrolysed off its transfer RNA. Then the tRNA dissociates, the factor is released with hydrolysis of GTP, and a factor called RRF together with EF-G takes the inactive ribosome off the messenger and splits it into subunits again. Eukaryotes need only one release factor, eRF, which recognises all three stop codons.”',
  note:'<span class="pg">p100</span>、<span class="pg">p101</span> 图注。<b>「转到水上」这一句要说出口</b>——它一次解释了三件事：为什么终止不需要第 21 种 tRNA、为什么产物的 C 端是<b>游离羧基</b>、以及为什么这一步不可逆。<br><br>⚠ <b>不要说「终止密码子没有意义」。</b>它们有非常明确的意义，只是<b>被蛋白读，而不是被 RNA 读</b>——<b>整条通路里唯一一处由蛋白直接认碱基的地方就在这里。</b>（书还给了它们第三个叫法，英译 nonsense codons，但那只是历史叫法。）<br><br>链做完之后 N 端还挂着 <b>formylmethionine</b>；书说不同物种由水解酶把甲酰基、或甲酰甲硫氨酸、甚至开头几个氨基酸切掉（<span class="pg">p102</span>）。<b>这就是把话交给卡 13 和卡 08 的地方。</b>'},

 {g:'账 · 一个残基花多少，以及真核差在哪', gn:'<b>只说步骤是半个答案。</b>书自己把「肽键的能量怎么来」列成两个关键问题之一，所以这一格必须有。'},
 {n:'18', t:'一个残基 ＝ 四个高能磷酸键',
  big:'活化 <b>2</b>（ATP → AMP ＋ 2 Pᵢ）＋ 进位 <b>1</b>（EF-Tu 的 GTP）＋ 移位 <b>1</b>（EF-G 的 GTP）＝ <b>4</b>。另外每条链起始 1、终止 1',
  en:'“Four high-energy phosphate bonds per residue. Activation spends two, because the ATP goes to AMP and pyrophosphate, and pyrophosphatase then splits the pyrophosphate. Binding the aminoacyl-tRNA spends one GTP on EF-Tu. Translocation spends one GTP on EF-G. On top of that each chain costs one GTP at initiation and one at termination. At the textbook’s own figure of minus thirty point five kilojoules per mole, four bonds is about a hundred and twenty kilojoules for one peptide bond. The textbook puts an ordinary bond under twelve. So the cell pays roughly ten times what the bond itself is worth, and what it buys is accuracy.”',
  tbl:{head:['哪一步','花什么','几个高能磷酸键','出处'],
   rows:[
    ['<b>活化</b>','ATP → AMP ＋ PPᵢ，PPᵢ 再被水解成 2 Pᵢ','<b>2</b>','<span class="pg">p096</span> 反应式'],
    ['<b>进位</b>','EF-Tu·GTP → GDP ＋ Pᵢ','<b>1</b>','<span class="pg">p099</span>'],
    ['<b>移位</b>','EF-G·GTP → GDP ＋ Pᵢ','<b>1</b>','<span class="pg">p100</span>'],
    ['<b>每个残基小计</b>','','<b>4</b>','<b>书没印这个 4，是数出来的</b>'],
    ['每条链另加','起始 1 GTP ＋ 终止 1 GTP','＋2','<span class="pg">p097</span>、<span class="pg">p100</span>']
   ]},
  note:'<b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>成本 ＝ 每步消耗的高能磷酸键之和</code>。<b>高能磷酸键</b>指的是磷酸酐键，也就是 ATP 上 α–β 和 β–γ 之间那两个（卡 <b>x-bonds</b>）。<br><br><b>为什么活化算 2 而不是 1</b>（这是最常被算错的一处）：<br>① 活化不是 ATP → ADP，是 <code>ATP → AMP ＋ PPᵢ</code>——<b>一次切掉两个磷酸，也就是一次断掉两个酐键</b>。<br>② 切下来的 PPᵢ 又被<b>焦磷酸酶</b>水解成 2 Pᵢ（书 <span class="pg">p096</span> 的反应式上就画着 pyrophosphatase）。<b>这一步不是浪费，是把反应拉死</b>：产物被拆掉就回不来，整个活化变成不可逆。<br>③ 所以账上记 <b>2</b>。<b>凡是看见 ATP → AMP 的，一律记两个。</b><br><br><b>换成能量</b>（用书 <span class="pg">p131</span> 的数）：<code>4 × 30.5 ≈ 122 kJ/mol</code>。而书同页给普通键水解的门槛是<b>不到 12 kJ/mol</b>，肽键不是高能化合物，所以它就落在这一档。<code>122 ÷ 12 ≈ 10</code>。<br><br><b>=== 一句话理解 ===</b><br><b>细胞为一根只值十几千焦的键，付了一百二十千焦。多付的那十倍，买的不是键，是「没搞错」。</b><br>而钱花在哪里，顺序正好说明了一切：<b>造键本身几乎不花钱</b>——肽键是在活化那一步就付过账的酯的氨解，核糖体只是花掉一个已经绷紧的键。<b>真正烧钱的是两次 GTP，而那两次都不在化学上，都在「确认」上</b>：一次确认反密码子配对配对了（EF-Tu），一次确认整体正好挪了三个碱基（EF-G）。<b>翻译的成本结构，就是一台把绝大部分预算花在校对上的机器。</b><br>⚠ 「4」这个数、122 这个乘积、以及十倍这个比值，<b>书里一个都没有</b>；书给的是每一步各消耗什么。30.5 和「不到 12」是书 <span class="pg">p131</span> 的。'},
 {n:'19', t:'真核差在哪 —— 书自己列了五条',
  big:'<b>起始因子多得多</b>（eIF）· <b>没有 Shine-Dalgarno</b>，靠 <b>eIF-4F 认帽子</b>再让 40S 沿着 mRNA 走 · 起始是 <b>Met 不是 fMet</b> · 终止只要<b>一个</b> eRF · 核糖体可以<b>结在 ER 上</b>',
  en:'“Everything so far is the prokaryotic picture. The textbook says eukaryotes work similarly but lists the differences. Eukaryotic ribosomes use a much larger group of initiation factors. Eukaryotic messengers have no Shine-Dalgarno sequence, so instead the subunit eIF-4F interacts with the cap and the forty S subunit migrates along the messenger until it finds the start. The first residue is methionine rather than formylmethionine. Termination needs only one release factor. And the place is different. Prokaryotes have no endoplasmic reticulum, so they translate only on free ribosomes, while in eukaryotes the ribosomes are either free or bound to the rough endoplasmic reticulum.”',
  note:'<span class="pg">p102</span>——<b>这五条是书自己一口气列出来的</b>，照说就行。<br><br>最后一条正是卡 <b>08</b> 的入口：<b>结在 ER 上的那些核糖体，是被信号肽带过去的</b>。<br><br>另外两条真核差别在别处：mRNA 的 <b>5′ 帽子</b>（7-甲基鸟苷，<span class="pg">p106</span> 的 Obr. 4.50，书还分了 cap-0/1/2 三档）和<b>内含子的剪接</b>（<span class="pg">p086</span>、<span class="pg">p106</span>）——<b>内含子那一条在卡 03，不在这里重讲</b>。'}
],

end:'<b>这张卡的用法：</b>他从 #12 或者 #13 追过来，先把轴给他——<b>同一条信息抄两遍，第一遍同语言誊抄，第二遍换字母表所以必须解码，解码要一个适配器，适配器就是 tRNA</b>。<b>把书那句话说出来</b>：氨基酸从做成 aminoacyl-tRNA 的那一刻起，就是靠它 tRNA 的反密码子被认出来的，不是靠它自己的化学。<br>然后按书的两问收：<b>信息怎么传</b>（密码表的四条性质）· <b>能量怎么来</b>（一个残基四个高能磷酸键，而且钱花在校对上）。<b>说完就把话交回给卡 12 或卡 13，别在中间多走一步。</b>',

/* ---------------- 演练四段 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说清这题为什么会出现，再把轴一次给完',
  p:['“There is no written question on this, so let me say what it is first. Protein synthesis is the process by which a cell builds protein molecules out of individual amino acids. The textbook says it raises exactly two key questions. How the transfer of the genetic information is secured, and how the energetics of peptide bond formation is secured. Everything I say will sit under one of those two.”',
     '“The shape of the whole thing is this. The cell copies the same information twice, and the two copies are read by completely different machinery for completely different reasons. Transcription is the first copy. It is made in the same language, base for base, by the complementarity of the bases. Translation is the second reading, and there the alphabet changes. Four bases have to specify twenty amino acids, so the message is read three letters at a time.”'],
  note:'<b>先声明「没有这道题」，是这张卡的开口</b>——它告诉他你知道自己在答一个追问。<br>两个关键问题是 <span class="pg">p092</span> 的原话，「转录」的定义是 <span class="pg">p087</span> 的原话。<b>「抄两遍、第二遍换字母表」这一句说出去，后面所有内容都有地方挂。</b>'},
 {tag:'段 2 · general', h:'适配器先给，因为它是这题唯一真正需要解释的东西',
  p:['“The second reading needs something the first one does not. An amino acid has no affinity for a codon. Three bases and a side chain have no chemistry in common, so nothing would put leucine on its own triplet. The cell solves it with an adaptor. Transfer RNA carries an anticodon at one end and the amino acid at the other, so the recognition stays RNA against RNA at both steps. The textbook says it in one sentence. From the moment the aminoacyl-tRNA is formed, each amino acid is recognised by the anticodon of its transfer RNA, and not by its own chemical composition.”',
     '“That is why the genetic code is a table with properties rather than a chemistry. Sixty-four triplets, because four to the power of three is sixty-four. Sixty-one of them code and three are stop. Several triplets can code one amino acid, which is degeneracy. AUG is both methionine and the start. And the code is read from a fixed point, in one direction, in groups of equal size, which is the reading frame.”'],
  note:'<b>适配器排在密码表前面，不是后面。</b>先说清「为什么需要它」，密码表才不是一张要背的表，而是那组酶的特异性的记录。<span class="pg">p093</span> <span class="pg">p094</span> <span class="pg">p096</span>。'},
 {tag:'段 3 · 稍展开', h:'挑机器和账，因为这是他最可能往下挖的两处',
  p:['“On the machinery. A ribosome is a particle of ribosomal RNA and protein, a small subunit and a large one, thirty S and fifty S in bacteria. It has a site for the incoming aminoacyl-tRNA, the A site, and a site for the transfer RNA holding the chain, the P site. Elongation is three steps. EF-Tu with GTP delivers the aminoacyl-tRNA into the A site. Peptidyl transferase moves the chain from the P site onto it, making the new peptide bond. Then EF-G with GTP translocates everything by one codon.”',
     '“And on the energy, which is the textbook’s second question. Free amino acids cannot build a protein. Each one is first raised to a higher energy level by its own aminoacyl-tRNA synthetase, at the cost of ATP going to AMP and pyrophosphate. That is two high-energy phosphate bonds, and the amino acid ends up on the tRNA as an ester. So the peptide bond is paid for before the ribosome ever sees it. Adding the two GTPs, one residue costs four high-energy phosphate bonds, and both GTPs are spent on checking rather than on chemistry.”'],
  note:'<span class="pg">p094</span> <span class="pg">p096</span> <span class="pg">p099</span> <span class="pg">p100</span>。<b>最后一句是这张卡上最有说服力的地方</b>：成本结构本身就是答案——<b>造键几乎不花钱，钱花在两次确认上</b>。数怎么来的在速背第 18 点。'},
 {tag:'段 4 · 留口子', h:'落到她自己扩充过密码表这件事上',
  p:['“The place this touches my own work is that I have added a line to that table. An unnatural amino acid goes in through a reassigned stop codon, usually the amber codon UAG, with an orthogonal pair: a synthetase that charges only the new amino acid, onto a transfer RNA that reads only UAG. The one I used is a photo-crosslinker. And the reason that trick works at all is the sentence from page 96. The ribosome never checks what the amino acid is. It checks the anticodon.”',
     '“Two things follow that I would be happy to be asked about. First, the same book already shows nature doing it, in the footnote to its own codon table, where UGA is read as selenocysteine. Second, charging a transfer RNA does not have to be done by a protein at all. There are ribozymes that do it, which is also how the ribosome’s own peptidyl transferase now looks. The textbook still calls that one a protein of the large subunit.”'],
  note:'两个口子都在主场，而且两个都从<b>书自己那一句</b>长出来：<b>① amber suppression</b> 接卡 <b>aa</b>（pBpa、正交对、第 21 个氨基酸怎么数都在那里）；<b>② 核糖体是 ribozyme</b> 接她 PESB 那次答对过的 flexizyme——<b>那次她把 flexizyme 认 activated ester 这个最难的点说对了</b>（LOGIC §1）。<br>⚠ ribozyme 这一条<b>书里没有，而且跟书相反</b>：书说 peptidyl transferase 是大亚基里的蛋白。<b>说的时候先给书的，再说 generally。</b>'}
],

why:{
 rungs:[
  ['为什么需要一个适配器？','因为<b>氨基酸对密码子没有任何亲和力</b>。三个碱基和一条侧链之间没有共同化学，所以必须有个东西一头认碱基、一头拿氨基酸。书 <span class="pg">p096</span> 自己写了结论：做成 aminoacyl-tRNA 之后，氨基酸是靠它 tRNA 的<b>反密码子</b>被认出来的，<b>不是靠它自己的化学组成</b>。'],
  ['那为什么是三个碱基，不是两个？','<b>算术。</b>四个字母：<code>4² = 16 < 20</code>，不够；<code>4³ = 64 ≥ 20</code>，够了。<b>三是能装下二十的最小位数</b>（书 <span class="pg">p094</span> 就是这么推的）。多出来的 44 个格子没处退，<b>就变成了简并</b>。'],
  ['那为什么正好是二十个氨基酸，不是十六个或六十四个？','<b>密码表回答不了这个。</b>64 个格子装得下的远不止 20 个，所以这个数量<b>不是化学逼出来的</b>。到这里就是进化史了。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Why this particular code and this particular twenty were fixed is a question about evolutionary history rather than about biochemistry. The table tells me how many could be coded, not why there are twenty.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is translation?',
 mean:'<b>最短的问法，也是最可能的那一个。</b>答案要自带结构：定义 → 为什么需要适配器 → 在哪进行 → 四个阶段的名字。<b>四句，然后停。</b>',
 say:'“Translation is the step in which the base sequence of a messenger RNA is read into the order of amino acids in a polypeptide. It is read three bases at a time, and each group of three is a codon. It needs an adaptor, because an amino acid has no affinity for a codon: transfer RNA carries an anticodon at one end and the amino acid at the other. It happens on the ribosome, and the textbook divides it into four stages. Activation of the amino acids, initiation, elongation and termination.”',
 tail:'四段式：<b>定义</b>（书 <span class="pg">p092</span> 就是把 translation 译成「翻译／译读」的那一句）· <b>三个一组</b> · <b>适配器和为什么需要它</b> · <b>四个阶段的名字</b>。说完就停，<b>别自动往下讲延长的三小步</b>——那是他要问才给的。'},

{q:'What is transcription, and how does it differ from replication?',
 mean:'他要的是<b>一个定义 ＋ 四条差别</b>。差别一条一条报，不要混着说。',
 say:'“Transcription is the copying of the base sequence of DNA into the base sequence of RNA, which is the textbook’s own definition and its reason for the name. It is done by DNA-dependent RNA polymerase, from the four ribonucleoside triphosphates, and both enzymes build the chain five prime to three prime. Four things differ from replication. The substrates are ribonucleotides. It needs no primer, and the textbook says that in one line. Only one of the two strands is copied. And the product is a copy of one gene, not of the whole chromosome.”',
 tail:'<span class="pg">p087</span> <span class="pg">p088</span>。<b>「不需要引物」是这四条里最值钱的一条</b>，因为它跟卡 <b>16</b> 的整条轴正好咬合：DNA 聚合酶非有 3′-OH 不可，<b>而细胞里的引物本身就是 RNA</b>。'},

{q:'What is the genetic code?',
 mean:'他要的是<b>一张有性质的表</b>，不是让你背表。<b>五条性质，每条一句。</b>',
 say:'“The genetic code is the correspondence between the triplets of bases in a messenger RNA and the amino acids they specify. Five things about it. It is a triplet code, so there are sixty-four combinations, four to the power of three. It is degenerate: sixty-one triplets code for twenty amino acids, so most amino acids have more than one, and most of the difference is in the third base. It has a start, AUG, which also codes methionine. It has three stops, UAA, UAG and UGA, which code nothing. And it is read in a fixed frame, from a fixed point, in groups of equal size. The textbook says it is universal for all organisms, though its own table footnotes one exception.”',
 tail:'<span class="pg">p093</span> <span class="pg">p094</span>。<b>最后半句是加分的</b>：引书的正文，再引书自己的脚注。<b>数出来的分布表在速背第 10 点，别在口头上报一堆数。</b>'},

{q:'What is a codon, and what is an anticodon?',
 mean:'定义都在书上。<b>关键是那个动词</b>：codon <b>determines</b>，不是 binds。',
 say:'“A codon is a group of nucleotides in the messenger RNA that determines the attachment of one amino acid to the growing polypeptide chain. That is the textbook’s definition, and the word determines is the point: a codon specifies its amino acid, it does not bind it. An anticodon is the complementary triplet on the anticodon loop of a transfer RNA. Codons and anticodons pair by ordinary base pairing, so the whole recognition step is RNA against RNA.”',
 tail:'<span class="pg">p093</span>，两个词在书上都是加粗的。<b>被追问「写出 AGA 的反密码子」要小心方向</b>：密码子按 5′→3′ 写是 AGA，配对是反平行的，<b>反密码子按 5′→3′ 写是 UCU</b>，而书的 Obr. 4.35 是把它对齐印在下面的。'},

{q:'What is a ribosome and what does it do?',
 mean:'<b>先说它是什么做的</b>（rRNA ＋ 蛋白），再说两个亚基、三个位点、干什么。',
 say:'“A ribosome is a cell organelle made of ribosomal RNA and protein, so a ribonucleoprotein particle. It has a small subunit and a large one, thirty S and fifty S in prokaryotes, forty S and sixty S in eukaryotes. An E. coli ribosome is about twenty nanometres across and about two thousand seven hundred kilodaltons. It is where the messenger is read. It holds the messenger on the small subunit and has sites for two transfer RNAs at once: the A site for the incoming one and the P site for the one carrying the chain. The textbook adds that its proteins are not only structural, and that several of them are enzymes or factors in the synthesis itself.”',
 tail:'<span class="pg">p094</span> <span class="pg">p096</span>。<b>S 的定义在卡 03</b>，被问就说它是沉降系数，<b>而且不可加</b>，因为它同时取决于质量和形状。'},

{q:'Which strand of the DNA is transcribed?',
 mean:'⚠ <b>这是这十页里最容易被抓的一题。</b>先顺着他的词，再把两个名字都交出来。',
 say:'“Only one of the two, and the textbook has three names for it. It calls it the codogenic strand, it calls the same strand the template strand two pages later, and its figure labels it the antisense strand. The name is worth a warning, because codogenic sounds like coding, and in ordinary usage the coding strand is the other one. The coding strand is the one whose sequence matches the messenger, with thymine where the RNA has uracil. So the strand that is read is the one that does not look like the product.”',
 tail:'<span class="pg">p088</span> <span class="pg">p089</span> <span class="pg">p090</span>。<b>三个出处全在书里</b>，一个外部教材都不用引——这是 LOGIC §14「用书的一半打书的另一半」的标准用法。'},

{q:'Why does deleting one base from a gene do so much more damage than changing one base?', odd:1,
 mean:'问的是<b>阅读框</b>，而且是它最狠的那一面。',
 say:'“Because nothing in the messenger marks where one codon ends and the next begins. The reading is done from a fixed starting point, in one direction, in groups of three. Change one base and you change at most one amino acid, and because the code is degenerate you may change nothing. Delete one base and every codon after that point is read in a different frame, so the rest of the protein is a different protein, and usually a stop codon turns up early.”',
 tail:'<b>这条是阅读框的最好入口</b>，而且它顺带把简并也用上了。'},

{q:'Why do some antibiotics stop a bacterium without harming us?', odd:1,
 mean:'问的是<b>核糖体两套不一样</b>。答案就在书 <span class="pg">p094</span> 那两个数上。',
 say:'“Generally, because the two ribosomes are not the same. The textbook gives the numbers: the bacterial ribosome is seventy S, with thirty S and fifty S subunits, while the eukaryotic one is eighty S, with forty S and sixty S. Several antibiotics bind only the bacterial one and block one of the steps of elongation. The textbook does not discuss antibiotics, so that part is general knowledge, but the difference it does give is exactly the one they exploit.”',
 tail:'⚠ <b>抗生素这一条书里完全没有</b>，说的时候带 generally。<b>但两组数字是书上的</b>，所以先给数、再给结论，站得住。<b>别报具体药名</b>，除非他问。'},

{q:'Why does human insulin work when a bacterium makes it?', odd:1,
 mean:'问的是<b>密码通用</b>，而且这是她实验室每天都在用的那条性质。',
 say:'“Because the code is read the same way by both. The textbook says the code for amino acids is universal for all organisms, so the same triplets specify the same amino acids in a bacterium and in us. That is the whole basis of expressing a human gene in E. coli. What does not transfer is everything after translation. A bacterium has no endoplasmic reticulum, so it does not glycosylate, and the textbook notes it makes the initial residue formylmethionine rather than methionine.”',
 tail:'<b>最后两句把话交给卡 13</b>（糖基化）和速背第 19 点。<b>这一条是「通用」这个性质的实用证明</b>，比背「universal」这个形容词有用得多。'},

{q:'Why is making one protein so expensive?', odd:1,
 mean:'问的是<b>那张账</b>。四个高能磷酸键，而且要说清<b>钱花在哪</b>。',
 say:'“Four high-energy phosphate bonds for every residue. Activation spends two, because ATP goes to AMP and pyrophosphate and the pyrophosphate is then hydrolysed. Delivering the aminoacyl-tRNA spends one GTP on EF-Tu, and translocation spends another on EF-G. What is interesting is where the money goes. Making the bond itself is nearly free, because the amino acid is already an ester on the transfer RNA. Both GTPs are spent on checking: one that the anticodon matched, one that the ribosome moved by exactly three bases.”',
 tail:'<b>这一条是这张卡最像 researcher 的一段</b>：不是报一个数，是<b>读一张账的结构</b>。数的来处在速背第 18 点。'}
],

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p093_obr435_gene_to_protein.jpg',
  t:'从基因到肽链 —— 一张图把这题整个说完（书 Obr. 4.35）',
  cap:'<b>这张是「画」。</b>他一句 “show me how a gene becomes a protein” 就可以要求你在纸上画它，而这张图<b>只用九个碱基</b>就把两次抄写、密码子、反密码子、适配器全画完了。'
    + '<br><br><b>画的顺序（五步，照这个练）</b>：'
    + '<br>① 先写<b>两条 DNA</b>，上面一条标 5′ 左 3′ 右，下面一条反过来标 3′ 左 5′ 右。写九个碱基就够：上 <code>A-G-A-G-G-T-G-C-T</code>，下 <code>T-C-T-C-C-A-C-G-A</code>。'
    + '<br>② 往下画一支箭头，写 <b>mRNA</b>：<code>A-G-A-G-G-U-G-C-U</code>。'
    + '<br>③ 在 mRNA 底下按<b>三个一组</b>写三条 tRNA 的反密码子：<code>U-C-U</code> · <code>C-C-A</code> · <code>C-G-A</code>，每组底下画一个括号。'
    + '<br>④ 括号下面写三个氨基酸的<b>全名</b>：Arginine · Glycine · Alanine。'
    + '<br>⑤ 最后一支箭头，写 <b>Polypeptide</b>：<code>–Arg–Gly–Ala–</code>。'
    + '<br><br><b>画的时候要说的那两句</b>：“The messenger is a copy of the upper strand, with uracil for thymine. So the strand that was actually read is the lower one, the template.” 和 '
    + '“The codons are read three at a time, and each one is matched by the anticodon of a transfer RNA, which is what carries the amino acid in.”'
    + '<br><br>⚠ <b>这张图上藏着一个陷阱，正好可以当护身符</b>：mRNA 跟<b>上面</b>那条 DNA 一模一样（只是 U 换 T），'
    + '<b>所以被读的是下面那条</b>——也就是书先叫 codogenic、两页后又叫 template 的那一条。<b>被质疑读哪条链时，把这张图指给他。</b>'
    + '<br><br>⚠ 第二个陷阱：图上反密码子是<b>对齐印在密码子下面</b>的，所以从左往右读它是 3′→5′。'
    + '<b>他让你单独写出 AGA 的反密码子时，按 5′→3′ 写是 UCU。</b>',
  src2:'Biochemie, Obr. 4.35, p093 · 原图裁切，未修改'},
 {k:'画',
  src:'img/p088_obr428a_trna_cloverleaf.jpg',
  t:'tRNA 的三叶草 —— 适配器长什么样（书 Obr. 4.28a）',
  cap:'<b>这张是「画」。</b>tRNA 的三叶草是口试里最常被要求画的 RNA 结构，而且<b>它就是「为什么需要适配器」那句话的物理形式</b>：一头拿氨基酸，一头认密码子，中间隔着整个分子。'
    + '<br><br><b>画的顺序（六步）</b>：'
    + '<br>① 先画一个<b>十字</b>，四个方向各一条短的双链茎。'
    + '<br>② <b>上面那条茎</b>是 <b>acceptor stem</b>：左边标 <b>5′p</b>，右边那条链往上伸出去，写 <code>C-C-A</code>，最上面写 <b>3′ A–OH</b>。<b>氨基酸就挂在这个 OH 上。</b>'
    + '<br>③ <b>下面那条茎</b>顶着一个环，写 <b>anticodon arm</b>，环底下那三个碱基用大括号括起来，标 <b>Anticodon</b>。'
    + '<br>④ <b>左边</b>的环标 <b>D arm</b>，<b>右边</b>的环标 <b>TψC arm</b>。'
    + '<br>⑤ 右边茎和反密码子茎之间那个小突起，标 <b>variable arm</b>。'
    + '<br>⑥ 检查一件事：<b>acceptor 在最上、anticodon 在最下，两者隔得最远。</b>'
    + '<br><br><b>画完要说的一句</b>：“The two working ends are at opposite poles of the molecule. The amino acid is esterified to the CCA at the three prime end, and the anticodon is on the loop furthest from it. '
    + 'That is what an adaptor has to look like: the end that is recognised and the end that is carried are not the same end.”'
    + '<br><br><b>书给的硬事实</b>：tRNA 是最小的 RNA，<b>4S</b>；<b>所有 tRNA 的 3′ 端都是 CCA</b>；每种 tRNA 只运一种氨基酸；'
    + '细胞里的 tRNA 种类<b>至少</b>跟蛋白里的氨基酸种类一样多。<span class="pg">p087</span>',
  src2:'Biochemie, Obr. 4.28a, p088 · 原图裁切，未修改'},
 {k:'认',
  src:'img/p099_obr442_elongation_cycle.jpg',
  t:'延长循环的三步 —— 摆过来要认得出（书 Obr. 4.42）',
  cap:'<b>这张是「认」。</b>没人会让你在黑板上画整个延长循环，但他很可能把这张图摆过来问「这是什么，指给我看哪一步」。'
    + '<br><br><b>图上怎么看</b>：三个核糖体按顺时针排，箭头上印着三个词，那就是三步的名字——'
    + '<b>1 Decoding</b>（左上到右上）· <b>2 Transpeptidation</b>（右上到下）· <b>3 Translocation</b>（下回到左上）。'
    + '<br>· <b>左上</b>：<b>A site Empty</b>，P 位上是 <b>Peptidyl-tRNA</b>，链的末端标着 <b>fMet</b>，说明这条链还带着起始的甲酰甲硫氨酸。'
    + '<br>· <b>右上</b>：A 位进来一个 <b>Aminoacyl-tRNA</b>。上方那个圈是 <b>EF-Tu 的循环</b>：EF-Tu·GTP 带着它进来，配对之后放出 <b>GDP ＋ Pᵢ</b>，再由 <b>EF-Ts</b> 把 EF-Tu 换回 GTP。'
    + '<br>· <b>下方</b>：转肽之后，<b>P 位上是 Uncharged tRNA</b>，<b>A 位上是变长了的 Peptidyl-tRNA</b>。'
    + '<br>· <b>左下</b>：空 tRNA 被放掉，<b>EF-G</b> 花掉一个 <b>GTP</b> 完成移位，回到左上那一格。'
    + '<br><br><b>看到图要说的一句</b>：“One elongation cycle. EF-Tu with GTP delivers the aminoacyl-tRNA into the A site. Peptidyl transferase moves the chain onto it. EF-G with GTP translocates by one codon. Two GTPs per residue, and both of them are spent on checking rather than on making the bond.”'
    + '<br><br>⚠ <b>图上没画 E 位点</b>——书自己在正文的方括号里说了这件事。被问就照书说：空 tRNA 大概是先挪到 E 位，等下一次结合时才真正离开。',
  src2:'Biochemie, Obr. 4.42, p099 · 原图裁切，未修改'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这张卡自己用到的词，他会一个个拎出来问。<b>下面大半在整套卡里从来没被正面定义过</b>（terms.py 查过），所以必须在这里给掉。', items:[
{r:'高', q:'What is the reading frame?',
 en:'“The frame is which of the three possible ways of grouping the bases into triplets is the one actually read. The textbook says the information is read from a certain starting point, in one direction, in groups of equal size, codon after codon. Nothing in the messenger marks where one codon ends, so the starting point defines the grouping for the whole rest of the message. That is why the start codon does two jobs. It says where to begin, and it says which frame is real.”',
 cn:'<b>书把它描述完了，但没给名字</b>（<span class="pg">p093</span>）。<br><br>还有第二个东西在守这个框，而且是书自己写的（<span class="pg">p099</span>）：移位之后 peptidyl-tRNA 还保持着配对，<b>已经不是为了指定氨基酸</b>，<b>而是为了保证核糖体正好挪三个核苷酸</b>。<b>同一个配对，两步里干两件事</b>——这句说出来很加分。'},
{r:'高', q:'What is degeneracy?',
 en:'“Degeneracy means that one amino acid can be specified by several different triplets. It follows directly from the arithmetic: sixty-four triplets and twenty amino acids. The textbook says some amino acids are coded by six triplets and others by four, three, two, or only one. Most of the redundancy sits in the third base, so a change there often changes nothing.”',
 cn:'<span class="pg">p094</span>。<b>「简并 ≠ 含糊」</b>：一个氨基酸可以有几个密码子，<b>但一个密码子只对应一个氨基酸</b>。这个方向不能说反——说反了整个翻译就没有意义了。<br>数出来的分布和「一半的密码子第三位无关」那个 32，在速背第 10 点。'},
{r:'中', q:'What is peptidyl transferase?',
 en:'“It is the activity that makes the peptide bond. It takes the chain off the transfer RNA sitting in the P site and joins it to the amino group of the aminoacyl-tRNA in the A site. The textbook calls it an enzyme, a protein located in the larger ribosomal subunit. Generally, the catalytic centre is now taken to be the ribosomal RNA itself rather than a protein, which makes the ribosome a ribozyme.”',
 cn:'<span class="pg">p099</span>。<b>先说书的，再说 generally，并说清后者是后来的结构工作定的。</b>⚠ 别把书的说法当错的去纠正他——<b>他手里那本书就是这么写的</b>。<br><br>化学上它是<b>一个酯的氨解</b>：A 位氨基酸的 –NH₂ 亲核进攻 P 位那条 peptidyl-tRNA 的酯羰基。<b>所以肽键的能量不是这一步给的</b>，是活化那一步就付过的（速背第 18 点）。'},
{r:'中', q:'What is a ribozyme?',
 en:'“A ribozyme is an RNA molecule that acts as a catalyst. It is the exception to the rule that enzymes are proteins. Generally the ribosome’s own peptidyl transferase centre is one, and so is the RNA component that trims transfer RNA precursors. This textbook does not use the word.”',
 cn:'⚠ <b>ribozyme 这个词整本书没有</b>（grep 过），所以它<b>整条是书外的</b>，说的时候带 generally。<br><b>但这一条对她特别值钱</b>：flexizyme 就是一个人工 ribozyme，干的正是 aminoacyl-tRNA synthetase 的活——<b>给 tRNA 挂氨基酸</b>。PESB 那次她把 flexizyme 认 activated ester 这个点说对了，<b>所以这条口子是她接得住的</b>。'},
{r:'中', q:'What is the Shine-Dalgarno sequence?',
 en:'“It is the extra signal that tells a bacterial ribosome which AUG is the real start. AUG also codes every internal methionine, so the codon by itself is not enough. The Shine-Dalgarno sequence sits in the leader of the messenger, centred about ten nucleotides before the initiation codon, and it base-pairs with a region at the three prime end of the sixteen S ribosomal RNA. Eukaryotic messengers have no such sequence, and there the cap and the eIF-4F subunit do the job instead.”',
 cn:'<span class="pg">p097</span>、<span class="pg">p102</span>。<br><br>⚠ <b>书的正文在这里读起来像是把 SD 说成长在 16S rRNA 上的</b>；<b>Obr. 4.40 的图注才把两边分清楚</b>：各条 mRNA 的 SD 序列（它们的前导序列）<b>与 16S rRNA 3′ 端的一段互补</b>。<b>按图注说。</b>这又是「图注带着正文没有的锚点」那一条（LOGIC §16）。<br><br>顺带一句很值钱的：书说<b>起始的 formyl-Met-tRNA 是核糖体上唯一一处不严格由密码子–反密码子决定的 tRNA 结合</b>。'},
{r:'中', q:'What is a polysome?',
 en:'“A polysome is one messenger RNA with many ribosomes on it, all translating it at the same time. The textbook says the individual ribosomes are about five to fifteen nanometres apart, so the maximum density is about one ribosome per eighty nucleotides. They form because the initiation site is freed once one ribosome has moved on, and it is then available for the next one.”',
 cn:'<span class="pg">p095</span>。<b>两个数都是书上的。</b><br><br><b>把它翻成密码子更好记</b>：<code>80 ÷ 3 ≈ 27</code>，<b>也就是每隔大约二十七个密码子就坐着一个核糖体</b>。而一个核糖体本身直径 <b>20 nm</b>（<span class="pg">p094</span>），间距才 5–15 nm——<b>所以它们几乎是贴着排的，一条 mRNA 上是塞满的。</b><br>⚠ 27 这个换算书里没有，是从书的 80 算的。'},
{r:'中', q:'What are initiation, elongation and release factors?',
 en:'“They are proteins that take part in protein synthesis without being counted as enzymes. The textbook says that explicitly: they have catalytic ability but are not classed among the enzymes. Initiation factors, IF, get the small subunit and the initiator transfer RNA onto the messenger. Elongation factors, EF, do two jobs: EF-Tu delivers each aminoacyl-tRNA with GTP and EF-G drives translocation with GTP. Release factors, RF, read the stop codon and make the chain come off. In eukaryotes the names carry a small e in front.”',
 cn:'<span class="pg">p095</span> 那句「有催化能力但不算酶」是书自己的，<b>很好用</b>——他要是问「那它们算不算酶」，你有书上的答案。<br><br><b>三组因子的分工可以一句话记住</b>：<b>IF 管把机器装起来 · EF 管每一轮 · RF 管拆</b>。书里具体的：IF-1、IF-2、IF-3；EF-Tu、EF-Ts、EF-G；RF-1、RF-2、RF-3，外加 <b>RRF</b>（把核糖体从 mRNA 上放下来）。'},
{r:'中', q:'What is an aminoacyl adenylate, and what does the CCA end do?',
 en:'“The aminoacyl adenylate is the intermediate of activation. The carboxyl of the amino acid attacks ATP and displaces pyrophosphate, so the amino acid ends up joined to AMP as a mixed anhydride. That is the high-energy form. In the second step the aminoacyl group is handed to the transfer RNA. There the same carboxyl becomes an ester on the two prime or three prime hydroxyl of the terminal adenosine of the CCA end. Every transfer RNA ends in CCA, so that end is the same in all of them and the anticodon is what differs.”',
 cn:'<span class="pg">p096</span> 的反应式，<span class="pg">p087</span> 给 CCA。<br><br><b>这一条是「能量从哪来」的化学答案</b>：混合酐 → 酯 → 肽键，<b>一路往下走</b>，每一步产物都比上一步稳定一点。键的种类和为什么酯活泼在卡 <b>x-bonds</b>。<br>⚠ 发音：<b>aminoacyl</b>（a-MI-no-A-cyl）——PESB 那次说成了 acryl，卡 <b>aa</b> 也记了这一条。'},
{r:'中', q:'What is the rho factor, and what is formylmethionine?',
 en:'“Rho is a protein needed by the terminators that have no hairpin of their own. The textbook calls it an enzyme that unwinds RNA-DNA and RNA-RNA duplexes at the cost of nucleoside triphosphates. Formylmethionine is the first residue of a bacterial chain: the initiator methionine carries a formyl group on its amino nitrogen. The textbook says the finished chain still has it, and that hydrolytic enzymes then remove either the formyl group, or the whole formylmethionine, or even several of the first amino acids.”',
 cn:'<span class="pg">p090</span>、<span class="pg">p102</span>。<b>formylmethionyl-tRNA</b> ＝ 挂着甲酰甲硫氨酸的那条起始 tRNA，也就是 IF-2 带进 P 位的那一个（<span class="pg">p097</span>）。<br><br><b>甲酰基这一条是通向卡 13 和卡 08 的门</b>：<b>链一做完就开始被改</b>，而「切掉 N 端几个残基」正是最早的那种翻译后加工。真核不加甲酰基，起始就是普通的 Met（<span class="pg">p102</span>）。'}
]},

{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个名字挨得太近。<b>每一对都给一句能当场分开它们的判据。</b>', items:[
{r:'实测', q:'Transcription or translation — which is which?',
    ez:'“Transcription is the first copy. Translation is the second reading. The names already say it. Transcription writes the same language down again. It turns D N A bases into R N A bases. So nothing is interpreted. Translation goes into a different language. The alphabet changes from four letters to twenty. That is also why only the second one needs an adaptor.”',
    ezcn:'<b>转录是第一次抄，翻译是第二次读</b>，名字本身就说了。<b>转录是把同一种语言再写一遍</b>（DNA 碱基 → RNA 碱基），<b>没有任何东西被解释</b>。<b>翻译是换一种语言</b>，字母表从<b>四个变成二十个</b>。<b>所以只有第二步需要一个适配器（tRNA）。</b>',
 en:'“Transcription is the first copy and translation is the second reading. The names say it. Transcription writes the same language down again, DNA bases into RNA bases, so nothing is interpreted. Translation goes into a different language, because the alphabet changes from four letters to twenty. That is also why only the second one needs an adaptor.”',
 cn:'<b>判据一句话：换没换字母表。</b>没换 ＝ 转录；换了 ＝ 翻译。<br><b>这一对必须张口就来</b>，因为它是 #13 那道题的题面里就有的词（post-<b>translational</b>），而她的卡上这个词出现在 10 张卡里却一次没被定义过。'},
{r:'高', q:'Codogenic, template, antisense, coding — how many strands is that?',
 en:'“Two strands and four names. Codogenic, template and antisense are three names for the same strand, the one that is read, and all three are in this textbook. Coding strand is the other one, the one that is not read, whose sequence matches the messenger with thymine for uracil. The trap is that codogenic sounds like coding and means the opposite.”',
 cn:'<span class="pg">p088</span> codogenic · <span class="pg">p090</span> template · <span class="pg">p089</span> 的 Obr. 4.30 图内标签 antisense。<b>三个出处都在书里。</b><br><b>考场上先顺着他的词，再把两个名字都交出来</b>，不要上来就纠正。'},
{r:'高', q:'RNA polymerase or DNA polymerase — what is actually different?',
 en:'“Four things. The substrates are ribonucleoside triphosphates rather than deoxy ones. RNA polymerase needs no primer while DNA polymerase cannot start a chain at all. RNA polymerase copies only one of the two strands while replication copies both. And it copies one gene rather than the whole chromosome. What is the same is the direction, five prime to three prime, and the chemistry, since the textbook says the two reactions are alike.”',
 cn:'<span class="pg">p087</span>–<span class="pg">p090</span>；DNA 那一半在卡 <b>16</b>。<br><b>第二条最值钱</b>：细胞里的引物本身就是 RNA，<b>正因为只有 RNA 聚合酶能从零起头</b>。<b>这一句把两张卡缝在一起。</b>'},
{r:'高', q:'A site or P site — which holds what?',
 en:'“The names say it. A is the aminoacyl site, so it takes the incoming aminoacyl-tRNA, the one that has an amino acid and no chain. P is the peptidyl site, so it holds the peptidyl-tRNA, the one carrying everything built so far. The chain always moves from P to A, never the other way. And the textbook mentions a third, the E site, where the emptied transfer RNA goes before it leaves.”',
 cn:'<span class="pg">p096</span>、<span class="pg">p099</span>。<b>按名字记就不会反</b>：A ＝ aminoacyl、P ＝ peptidyl、E ＝ exit。<br>⚠ <b>Obr. 4.43 的图注把这一对说反了</b>（末尾写成移到 P 位）；<b>同一张图和 p099 正文都是：转肽之后长链在 A 位、空 tRNA 在 P 位</b>。按正文和图本身说。'},
{r:'中', q:'Degenerate or ambiguous — is the code either?',
 en:'“Degenerate, not ambiguous. Degenerate means one amino acid can have several codons. Ambiguous would mean one codon could give several amino acids, and that is exactly what the code is not. The direction only runs one way, and if it ran both ways the message would not mean anything.”',
 cn:'<b>这是「简并」这个词最容易被误解的地方。</b>说清方向，比说清定义更要紧。<br>⚠ 书自己表上的 UGA/selenocysteine 那条脚注看起来像个反例，<b>但它不是含糊</b>：读法由 mRNA 上有没有 SECIS 元件决定，<b>上下文一定，答案还是唯一的</b>。这句话会加分。'},
{r:'中', q:'Is AUG only at the start?',
 en:'“No. AUG codes methionine everywhere in the chain, and it also serves as the initiation codon. That is precisely the problem the ribosome has to solve, and the textbook says so: the start has to be distinguished in a more effective way than by the codon alone. In bacteria that is the Shine-Dalgarno sequence, and in eukaryotes it is the cap with eIF-4F and the migration of the forty S subunit.”',
 cn:'<span class="pg">p097</span>、<span class="pg">p102</span>。<b>这条问的其实是「起点怎么找」</b>，答完 AUG 就停会显得只知道一半。'}
]},

{g:'为什么类 · 以及他要数字怎么办', gn:'这一族的「为什么」大半落在同一处：<b>密码表只回答得了「最多能有多少」</b>。再往下就是进化史。', items:[
{r:'高', q:'Why does an amino acid need a transfer RNA at all?',
 en:'“Because an amino acid has no affinity for a codon. Three bases and a side chain have no chemistry in common, so there is nothing for the codon to grip. The cell puts an adaptor in between, with an anticodon at one end and the amino acid at the other, so the recognition step is RNA pairing with RNA. The textbook makes the consequence explicit. From the formation of the aminoacyl-tRNA onwards, each amino acid is recognised by the anticodon of its transfer RNA and not by its own chemical composition.”',
 cn:'<span class="pg">p096</span>。<b>这是全卡的地基</b>，也是 why 三层的第一层。<br><br><b>可以顺手做一个很漂亮的推论</b>：既然核糖体从不检查氨基酸本身，那么<b>只要把 synthetase 换掉，挂上去的东西可以不是天然氨基酸</b>——这正是她实验室走 amber 密码子那条路的全部理由（卡 <b>aa</b>）。'},
{r:'高', q:'Why three bases per codon, and not two?',
 en:'“Arithmetic. There are four bases. Four single nucleotides give four combinations and pairs give sixteen, and sixteen is fewer than twenty. Triplets give sixty-four, four to the power of three. So three is the smallest number of positions that can carry twenty different answers, and the textbook does that calculation itself. The forty-four spare combinations are the reason the code is degenerate.”',
 cn:'<span class="pg">p094</span>。<b>他要你算就在黑板上写三行</b>：4¹ ＝ 4、4² ＝ 16、4³ ＝ 64。<br><b>一句话理解</b>：真正需要的是 <code>log₄20 ≈ 2.16</code> 位，而位数必须取整，<b>所以只能买三位，多买的那 0.84 位退不掉，就变成了简并</b>。完整推导在速背第 9 点。'},
{r:'高', q:'How much energy does one peptide bond cost?',
 en:'“Four high-energy phosphate bonds per residue. Two at activation, because the ATP goes to AMP and pyrophosphate and the pyrophosphate is then hydrolysed. One GTP on EF-Tu when the aminoacyl-tRNA is delivered. One GTP on EF-G at translocation. Each chain costs one more GTP at initiation and one at termination. At the textbook’s minus thirty point five kilojoules per mole that is about a hundred and twenty kilojoules for one bond, against under twelve for an ordinary bond by the book’s own threshold.”',
 cn:'⚠ <b>「4」这个数书里没有</b>，是把书写的每一步加起来的；30.5 和「不到 12」是书 <span class="pg">p131</span> 的。<br><br><b>被追问「为什么要付这么多」，答案分两半</b>，而且第二半更值钱：<br>① <b>做键几乎不花钱</b>——氨基酸在 tRNA 上已经是酯，账在活化那一步付过了。<br>② <b>两个 GTP 全花在确认上</b>：EF-Tu 那个确认反密码子真的配上了，EF-G 那个确认整体正好挪了三个碱基。<b>翻译是一台把大部分预算花在校对上的机器。</b>完整的账在速背第 18 点。'},
{r:'中', q:'Why does the cell copy the information at all, instead of translating the DNA?',
 en:'“The textbook states the fact first: DNA is not the direct template for protein synthesis, the template is RNA. Generally, the copy buys three things. The original stays in the nucleus and is never handled. One gene can be copied many times, so the amount of protein is set by the number of copies. And the copy is disposable, so an error in it costs one protein rather than a permanent change. In eukaryotes the copy is also where the processing happens, the cap and the splicing.”',
 cn:'<span class="pg">p085</span> 第一句是书的。<b>三个好处书里没有</b>，说的时候带 generally。<br><b>第二条最好用</b>：它直接接到卡 <b>12</b>——<b>调控之所以能放在转录这一层，正是因为有这份可弃的拷贝。</b>'},
{r:'中', q:'How accurate is translation? Give me a number.',
 en:'“The textbook gives no error rate, so let me give the criterion instead. Accuracy comes from three places and each can be named. The synthetase has to charge the right amino acid onto the right transfer RNA. The codon and anticodon have to pair, and EF-Tu spends a GTP at exactly that moment. And after translocation the peptidyl-tRNA stays paired, which the textbook says is no longer to specify the amino acid but to keep the reading frame. Generally the error rate is far higher than in replication, and that is affordable, because a wrong protein is discarded while a wrong base in DNA is inherited.”',
 cn:'<b>这是 LOGIC §11 那条的标准演练</b>：他要数字，<b>先说这本书没有印，再给判据，不要编。</b><br>三个把关点全部是书上的，所以判据站得住：synthetase 的专一性（<span class="pg">p096</span>）· EF-Tu 那个 GTP（<span class="pg">p099</span>）· 移位后配对守框（<span class="pg">p099</span>）。<br>⚠ <b>「远高于复制」这半句带 generally</b>，别给具体数量级。'},
{r:'中', q:'Why is the code degenerate rather than having forty-four meaningless triplets?',
 en:'“Because the spare capacity is used as a buffer. With most of the redundancy in the third base, a large fraction of single base changes there produce the same amino acid, so the protein is unchanged. If the forty-four spares had been left meaningless, the same mutations would have stopped the chain instead. The textbook does not argue this, so it is general reasoning rather than the book.”',
 cn:'⚠ <b>整条是推理，书里没有</b>，带 generally。<b>但支撑它的那个数是数出来的</b>：表里八个整格、32 个密码子第三位完全无关，<b>正好是整张表的一半</b>（速背第 10 点）。<br><b>再往下追就是「为什么进化选了这张表」，那就是停止句的位置。</b>'}
]}
]
});
