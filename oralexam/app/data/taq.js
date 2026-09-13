/* 卡 taq · Describe the activities of Taq and Kapa polymerases and why is that important for us.
   题库 #5（S1 Biochemistry 5）＋ #10（S2 Biochemistry 4：Describe the activities of Taq and Kapa polymerases.）
   导师写过两遍 · w3 · 书本投入 bw 0 · gap 'ok'（她的日常工作）

   ⛔ 出处规矩：这张卡里没有一句可以说成「书上说」。229 页全文 grep 的结果：
      Taq = 0 · Thermus aquaticus = 0 · termostabilní = 0 · TaqMan = 0 · hot start = 0 ·
      restrikce / klonování / sekvenování / hybridizace / knihovna = 全 0 ·
      DNA 的热变性 = 0（denaturace 只有 p035 讲蛋白质、p058–p059 讲酶的热失活）·
      Kapa 的唯一命中是 p178 的捷克词 kapalné（液态的），跟酶无关 ·
      PCR 只有一处：p009 年表 “1983-5 | Objev polymerasové řetězové reakce (PCR)”，无人名。
   书能给的只有邻居，都带页码，而且每次都要说清「书讲的是酶，不是这个用法」：
      p077 四种 dNTP ＋ templát（matrice）＋ RNA 当 startér (primer) ·
      p078 只能接游离 3′-OH · 亲核进攻 · 放出 PPi · 必须有镁离子 · 3′→5′ exonuclease ＝「第二个纠错者」·
      p079–p080 pol I 的三种活性（这就是描述 Taq / Kapa 的全部词汇表）· Klenow ·
      p059 大多数酶 55–60 °C 失活，但有些来自嗜热菌的酶 85 °C 仍有活性 ← 全书唯一能接「耐热」的句子 ·
      p035 denaturace 的定义：天然构象被破坏、链展开、失去生物功能，热变性通常不可逆 ·
      p073 A–T 两个氢键、G–C 三个氢键 ＋ 碱基堆积 ← GC-rich 难扩增和 Tm 的理由 ·
      p085 反转录酶（RNA 指导的 DNA polymerase，见于某些 RNA 病毒）·
      p087 Obr. 4.27b 是 T. thermophilus 的 16S rRNA ← 全书唯一出现 Thermus 这个属的地方，讲的是核糖体。
   卡 16 已经定义过、这里只引用不重复：primer · template · 5′→3′ · exonuclease · 校对 · Okazaki · 复制叉。
   标记约定：英文里出现 “generally” ＝ 通用分子生物学；“in the lab / in my hands / for us” ＝ 她的实验室实践。 */

window.CARDS.push({
id:'taq', n:5, merged:[10], w:3,
q:'Describe the activities of Taq and Kapa polymerases and why is that important for us.',
qcn:'描述 Taq 与 Kapa 聚合酶的活性，以及它们对我们为什么重要',
sub:'主干说完约 90 秒 · 导师写过两遍 · 书里 0 命中：每一句都要标 general 或 lab · 轴是一句话：Taq 缺的那个 3′→5′ exonuclease',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 这道题书里一个字都没有，所以<b>第一句先划出处，第二句才给定义</b>。题面的五个实词——activities、Taq、Kapa、polymerases、以及 “why is that important for us”——这一组里全部交代掉；important 那一问的正面答案是第 12 点那一句判据。口试他多半只念 “What is Taq polymerase?”，其余的是他准备挖的方向。'},
 {n:'01', t:'先划出处',
  big:'全书 <b>0 命中</b>：Taq、Thermus、termostabilní、TaqMan 都没有；PCR 只有 <b>p009 年表一行</b>，而且<b>没有人名</b>。所以这张卡全部是<b>通用分子生物学</b>或<b>我自己的实验室实践</b>',
  en:'“One thing before I answer: this is not textbook material. In this book the polymerase chain reaction appears once, in the chronological table, as the discovery of the polymerase chain reaction in 1983 to 1985, with no name attached — and neither Taq nor Thermus aquaticus appears anywhere. So everything I say here is either general molecular biology or my own laboratory practice, and I will say which as I go. What the textbook does give me is the vocabulary: the three enzyme activities it lists for E. coli DNA polymerase I.”',
  note:'<b>这一句是整张卡的保险。</b>书外题最危险的失分不是答错，是<b>把实验室的东西说成「书上说」</b>——他翻得到。先说清楚，后面每一句都安全，而且「我知道这本书里有什么、没有什么」本身就是加分。<span class="pg">p009</span>'},
 {n:'02', t:'定义 · PCR',
  big:'PCR 是一个<b>体外</b>方法：靠<b>循环改变温度</b>，把<b>由两条引物划定</b>的那一段 DNA <b>指数</b>地复制出来',
  en:'“PCR — the polymerase chain reaction — is generally defined as an in-vitro method that copies one defined stretch of DNA exponentially. <b>Defined</b> means bounded by two primers: short synthetic single-stranded pieces of DNA, one matching each strand, whose positions fix the two ends of the product. <b>Exponentially</b> means the amount doubles every cycle, because every product made becomes a template in the next one. A cycle is three temperatures — denaturation, annealing, extension — and besides the primers it needs a thermostable DNA polymerase, the four dNTPs and magnesium ions. No cell, no helicase, no primase, no ligase.”',
  note:'<b>定义先说它是什么</b>（一个体外方法），<b>再说判据</b>（两条引物划定、指数）。defined 和 exponentially 两个词承重，所以在同一句里交代掉，不留给他问。四种 dNTP、模板、镁三样在书里都有——但书讲的是<b>细胞里的复制</b>（<span class="pg">p077 p078</span>），不是这个方法。'},
 {n:'03', t:'一圈三个温度',
  big:'<b>~95 °C 变性</b>（热把双链拆开）→ <b>50–65 °C 退火</b>（两条引物各自配上去）→ <b>~72 °C 延伸</b>（聚合酶从引物的 3′-OH 往下接）',
  tbl:{head:['这一步','温度','发生了什么','为什么非要这个温度'],
       rows:[['denaturation 变性','约 95 °C','碱基之间的氢键被热打断，双螺旋变成两条单链','<b>热干的是细胞里 helicase 的活</b>。低了拆不开，GC 多的地方更拆不开——书 p073：A–T 两个氢键，G–C 三个'],
             ['annealing 退火','约 50–65 °C，由引物决定','两条引物分别配到自己那条单链上','太高：引物贴不住，什么都不长。太低：引物贴到只配了一半的地方，长出杂带'],
             ['extension 延伸','约 72 °C','聚合酶从每条引物的 3′-OH 接 dNTP，5′→3′','这一类嗜热酶活性最高的温度；给多少时间由产物长度定']]},
  en:'“Each cycle is three temperatures, and each is set by what has to happen at it. At around ninety-five degrees heat breaks the hydrogen bonds between the paired bases and the duplex comes apart — heat does here what a helicase does in the cell. At roughly fifty to sixty-five degrees, a value I take from the primers, each primer pairs with its complementary sequence: too high and it does not stay on, too low and it pairs at partly matched sites and gives extra products. At about seventy-two degrees the polymerase extends each primer from its free 3′-hydroxyl, 5′→3′ — the reaction the textbook describes on p078. Generally thirty to thirty-five cycles.”',
  note:'<b>三个温度必须各配一句「为什么是它」</b>，只报数字他一定接着问。95 那一格顺手把「PCR 不需要 helicase」这个陷阱挡掉了。<span class="pg">p073 p078</span>'},
 {n:'04', t:'thermostable 是什么',
  big:'<b>thermostable ＝ 反复过 95 °C 之后还保着自己的折叠、还有活性。</b>必须耐热，因为每一圈都要 95 °C，而酶不可能每圈换一次',
  en:'“Thermostable means the enzyme keeps its folded, active conformation through repeated steps at ninety-five degrees. That matters because the temperature that melts the DNA is the temperature that denatures an ordinary protein — the textbook defines denaturation on p035: the native conformation is disturbed, the chain unfolds, biological function is lost, and heat denaturation is usually irreversible. So a mesophilic polymerase would have to be added again every cycle. The book does not discuss PCR, but it says the neighbouring thing on p059: most enzymes are inactivated around fifty-five to sixty degrees, while enzymes from thermophilic bacteria are still active at eighty-five.”',
  note:'<b>p059 是全书唯一能接上「耐热」这个概念的句子</b>，而且它自己就把「嗜热菌」说出来了——用它，但说清楚：<b>书说的是酶的温度上限，不是 Taq，也不是 PCR</b>。⚠ 别顺嘴说「书上讲 Taq」。<span class="pg">p035 p058 p059</span>'},
 {n:'05', t:'activities 指的是什么',
  big:'题面的 <b>activities</b> ＝ <b>同一条多肽上有几种酶活性</b>。书 p079–p080 给 pol I 列的<b>三种</b>，正是描述 Taq 和 Kapa 的全部词汇表',
  tbl:{head:['活性','干什么','书上的落点'],
       rows:[['<b>polymerase 5′→3′</b>','把 dNTP 接到已配对链的游离 3′-OH 上，一次一个，按模板配对挑','p078'],
             ['<b>3′→5′ exonuclease</b>','从 3′ 端往回拆，把刚接错的那个拆掉 ＝ <b>proofreading 校对</b>；书叫它「第二个纠错者」，第一个是碱基配对本身（p073）','p078'],
             ['<b>5′→3′ exonuclease</b>','从缺口处往前切、一次一段（≤10 nt）；细胞里用来拆 RNA primer，也切 UV 造成的嘧啶二聚体','p079–p080']]},
  en:'“<b>Activities</b>, in this question, means how many separate enzyme activities sit on one polypeptide — and the textbook already gives me the list. For E. coli polymerase I it names three, in three different active sites: the 5′→3′ polymerase that adds nucleotides to a free 3′-hydroxyl; a 3′→5′ exonuclease that takes a nucleotide back off the 3′ end, which is proofreading — the book calls it the second corrector of base-pairing errors, the first being base pairing itself; and a 5′→3′ exonuclease that cuts from a nick forwards. Describing Taq and KAPA is saying which of those three each one has — and the important one for us is the second.”',
  note:'<b>这是这张卡跟书唯一真正的接口</b>，也是卡 16 第 05 点那张表。<b>先把三种活性摆出来再报两个酶的名字</b>，否则「有 exonuclease」这句话他听不出你在说哪一个。<span class="pg">p073 p078 p079 p080</span>'},

 {g:'Taq', gn:'三样按顺序说：从哪来 · 有哪两种活性 · <b>缺哪一种</b>。缺的那一种（3′→5′ 校对）决定了它后面所有的性格——错误率、A 突出端、能跑 TaqMan、是做突变库的首选。'},
 {n:'06', t:'Taq 是什么',
  big:'<b>Taq ＝ Thermus aquaticus 的 DNA polymerase</b>，温泉里的细菌，最适生长就在 70 °C 上下。它<b>有</b> polymerase 5′→3′、<b>有</b> 5′→3′ exonuclease、<b>没有</b> 3′→5′ 校对',
  en:'“Taq polymerase is, generally, the thermostable DNA polymerase of <b>Thermus aquaticus</b> — a bacterium that lives in hot springs and grows best at around seventy degrees; the name is just the first letters of the genus and the species. In the textbook’s three-activity vocabulary it has two of the three: the 5′→3′ polymerase and a 5′→3′ exonuclease, like polymerase I. What it does not have is the 3′→5′ exonuclease, so it cannot proofread. Almost everything else about the enzyme follows from that one absence.”',
  note:'⚠ 全部 general。<b>书里唯一出现 Thermus 这个属的地方是 <span class="pg">p087</span> 的 Obr. 4.27b——T. thermophilus 的 16S rRNA 结构图</b>，讲的是核糖体不是聚合酶。顺势可以给一句（要说明是我接的，不是书接的）：“Structural biology uses these organisms for the same reason PCR does — their macromolecules survive heat.”'},
 {n:'07', t:'错误率',
  big:'没有校对 ＝ 错得多。量级是<b>每个碱基每次倍增 10⁻⁴ 到 10⁻⁵</b>——<b>报量级，不报精确数</b>',
  en:'“Because it cannot proofread, Taq’s error rate is high: generally of the order of one wrong base in ten thousand to one in a hundred thousand, per base per duplication. I give that as an order of magnitude deliberately — published values differ severalfold between assays and between buffers, so a single precise number is one I could not defend. For comparison, the textbook gives no figure at all for replication in the cell; generally, base pairing on its own is about the same order, and it is proofreading and then mismatch repair that take a bacterium down to roughly one error in a billion bases.”',
  warn:'⚠ 三个数字全是通用量级，不是书里的。<b>只说量级，并且说明为什么只说量级</b>——编一个精确值是这场考试里最危险的动作之一（LOGIC §11）。',
  note:'<b>他问「多少？」的标准处理</b>：给量级 ＋ 说清这是量级 ＋ 说清为什么没有单一值（测法不同、缓冲液不同）。最后一句顺手把它接回卡 16 的三级纠错，显示你知道细胞里是怎么做到的。'},
 {n:'08', t:'3′ 的 A 突出端',
  big:'Taq 做完还会<b>多加一个模板上没有的 A</b> 在产物的 3′ 端（<b>template-independent addition</b>）→ <b>TA cloning</b> 用的就是它',
  en:'“Taq also does something the template never asked for: at the end of synthesis it adds a single extra adenine to the 3′ end of the product — <b>template-independent addition</b>, generally called the 3′-A overhang. That is not an error, it is a property of the enzyme, and it is useful: a vector carrying a single 3′ thymine pairs with that adenine directly, so in the lab the product is ligated in without any restriction enzyme — TA cloning. It works only with a non-proofreading polymerase: a 3′→5′ exonuclease removes an unpaired 3′ adenine straight off.”',
  note:'<b>这一条最能显出你真的用过这两个酶</b>，而且它把两个酶的差别变成了一个看得见的操作后果：<b>Taq 的产物带 A 尾，Kapa 的产物是平的</b>。'},
 {n:'09', t:'Taq 什么时候是对的工具',
  big:'快、便宜、耐脏。<b>只需要知道「这条带在不在」的时候，Taq 就够</b>：菌落 PCR、基因分型与诊断、以及 <b>TaqMan 探针</b>——探针靠的正是它的 5′→3′ exonuclease',
  en:'“Taq is fast, cheap and robust, so it is the right enzyme whenever the question is only whether a band is there: colony PCR to see which colonies took up my insert, genotyping, diagnostics. And the activity it shares with polymerase I — the 5′→3′ exonuclease — is what makes hydrolysis probes work. A TaqMan probe binds inside the amplified region carrying a fluorophore and a quencher, so it is dark while intact; the advancing polymerase digests it with that exonuclease, the fluorophore is released, and fluorescence counts specific product. A proofreading enzyme cannot run that chemistry — it has no 5′→3′ exonuclease.”',
  note:'<b>这是全卡最漂亮的一条</b>：书 p079–p080 给 pol I 列的第三种活性，在她的日常里是一个商品。也是「COVID 检测怎么工作」那道便装题的一半答案。<span class="pg">p079 p080</span>'},

 {g:'Kapa', gn:'同样三样：属于哪一类酶 · 多了哪一种活性 · <b>代价是什么</b>。最后那一格（慢、啃引物、要 hot start）是内行话，也是他最可能追的。'},
 {n:'10', t:'Kapa 是什么',
  big:'<b>KAPA HiFi</b> 是<b>古菌来源的 B 家族</b>工程化聚合酶：<b>有 3′→5′ 校对</b>、错误率比 Taq 低<b>一到两个数量级</b>、产物是<b>平末端</b>、扛 GC-rich 和常见抑制物',
  en:'“KAPA HiFi is, generally, an engineered <b>B-family</b> polymerase — the family whose natural members come from archaea, and the family that matches the textbook’s polymerase II by activity: polymerase plus the 3′→5′ proofreading exonuclease, without the 5′→3′ one. Three consequences. It proofreads, so its error rate is one to two orders of magnitude below Taq’s. It has no template-independent addition, so its products are <b>blunt</b>. And it was <b>engineered</b> rather than isolated — an archaeal polymerase improved by directed evolution — which is why it copes with GC-rich templates and with inhibitors such as blood or soil components. Directed evolution is my own field, so that is the part I can take furthest.”',
  note:'⚠ 全部 general：B family、古菌来源、一到两个数量级、定向进化改造出来的。<b>「engineered by directed evolution」这半句是这张卡通向主场的门</b>，故意留的（LOGIC §4：只留接得住的口子）。具体厂商的定量指标不背，被追问就说 “that is a manufacturer’s figure I would look up”。'},
 {n:'11', t:'校对的代价',
  big:'校对不是白来的：<b>慢一点</b>，而且那个 3′→5′ exonuclease <b>会啃掉引物和任何单链的 3′ 端</b>——在冰上配反应时它已经在啃了，所以必须 <b>hot start</b>',
  en:'“Proofreading costs two things. It is slower, because the enzyme pauses to check, and sometimes removes and replaces a nucleotide before going on. And the same 3′→5′ exonuclease that corrects the growing chain attacks the 3′ end of anything single-stranded — including my primers. While I pipette on ice it is already shortening them, and a primer that has lost its 3′ end cannot prime. So a high-fidelity reaction is set up as a <b>hot start</b>: the polymerase is held inactive — by an antibody, an aptamer, or a chemical modification released by heat — until the first ninety-five-degree step.”',
  note:'<b>这一条是内行话</b>，而且它把 hot start 从「一个试剂名字」变成了「一个必然的后果」。同时挡住一个陷阱：hot start 不只是为了防引物二聚体，对校对酶来说是为了<b>保住引物本身</b>。'},
 {n:'12', t:'一句判据',
  big:'<b>产物会被「读」或被「表达」→ 用有校对的；只要知道「有没有这条带」→ Taq 就够。</b>这一句就是题面 “why is that important for us” 的正面答案',
  en:'“The rule I actually use is one sentence: <b>if the product will be read or expressed, I use a proofreading enzyme; if I only need to know whether a band is there, Taq is enough.</b> <b>Read</b> means sequenced, or counted as a variant in a library, where a polymerase error cannot be told from a real difference. <b>Expressed</b> means cloned and translated, where one wrong base changes an amino acid or makes a stop codon. So cloning, library construction, sequencing templates, anything that will be expressed — the proofreading enzyme; colony screens, genotyping, presence-or-absence diagnostics — Taq.”',
  note:'<b>这一句要背到是声音。</b>卷面多出来的 “and why is that important for us” 就是在要这一句——他要的不是两个酶的性质清单，是<b>一条能用的判据</b>。'},

 {g:'数字与理由', gn:'卡上凡是给了结论没给理由的地方，他都会插刀。这一组把「保真度什么时候要紧」「退火温度从哪来」「怎么画」三件事补上。'},
 {n:'13', t:'错误是乘起来的',
  big:'一条产物完好的概率 ≈ <b>(1 − e)<sup>L × d</sup></b>（e 每碱基错误率、L 产物长度、d 倍增次数）→ <b>产物越长、循环越多，保真度越要紧</b>；而且<b>早期循环里的错误会被放大</b>',
  en:'“Why fidelity matters more in some reactions than in others is arithmetic. Each base copied has some chance of being wrong, and a molecule must survive every base and every doubling — so the fraction of perfect product falls roughly as one minus the error rate, raised to the length times the number of duplications. Two consequences. A whole gene of a couple of thousand bases accumulates errors far faster than a two-hundred-base fragment, so the long one gets the proofreading enzyme. And an error made in the first cycles is copied into everything descended from that molecule, so early errors end up everywhere while late ones stay rare.”',
  note:'<b>不要报具体百分比</b>——形状和量级就够；他真要数，你当场按这个式子算给他看，那比背一个数字有力。<b>「早期错误被放大」是这一格里最值钱的一条</b>，它同时解释了为什么做库时要多循环、做克隆时要少循环。'},
 {n:'14', t:'退火温度从哪来',
  big:'<b>退火温度是从引物算出来的，不是挑的</b>：引物的 <b>Tm</b>（一半引物配在模板上的温度）由<b>长度和 GC 含量</b>定；退火一般设在两条引物里较低的那个 Tm 下面几度',
  en:'“The annealing temperature comes from the primers. Each has a melting temperature — generally, the temperature at which half of it is paired with its complement — rising with length and with GC content, because a G–C pair is held by three hydrogen bonds and an A–T pair by two; those numbers are in the textbook, on p073. In the lab I match the two primers and set annealing a few degrees below the lower one: raise it and the reaction becomes more specific and may fail, lower it and I get extra bands. The same fact is why a GC-rich template is hard — more heat to melt, and stable secondary structure.”',
  note:'<b>氢键的数是书里的</b>（<span class="pg">p073</span>），<b>Tm、退火温度、引物设计是通用和实验室的</b>。这条同时给了「为什么 GC-rich 难做」的理由，不用另外记。引物设计的 3′/5′ 规则在卡 16 的桥那一格，别重复。'},
 {n:'15', t:'画 · 一个循环与扩增曲线',
  big:'他可能让你画两样：<b>一个 PCR 循环</b>（温度对时间）和 <b>qPCR 的扩增曲线</b>。两样都按步骤画，<b>不要画成示意云</b>',
  en:'“If I draw one cycle: temperature against time, a square wave going ninety-five, then fifty-five, then seventy-two, with the DNA drawn under each step. At ninety-five the duplex splits into two single lines. At fifty-five two short arrows sit down, one on each line, pointing towards each other. At seventy-two each short arrow grows into a long one. Then I write times two at the end of the cycle — after n cycles, two to the n — and from the third cycle onwards I draw the short product whose two ends are both defined by primers, because that is the molecule that actually accumulates. If instead he wants the amplification curve: fluorescence against cycle number, with four parts — a flat baseline while the signal is still in the noise, an exponential rise, a plateau where primers, nucleotides and enzyme activity run out, and a horizontal threshold line drawn across the exponential part; where the curve crosses it is the quantification cycle, and more starting template means a smaller one.”',
  note:'<b>画一个循环的顺序</b>：① 横轴时间、纵轴温度，画一条 95 → 55 → 72 的方波，每段标温度和秒数 ② 方波下面对应画三幅小图：95 ＝ 一对分开的单链；55 ＝ 两条短箭头分别贴在两条单链上、箭头朝内；72 ＝ 两条箭头各自伸长 ③ 循环末尾写 <b>×2</b>，右边写 <b>2ⁿ</b> ④ 从第三圈起画出那条<b>两端都由引物划定的短产物</b>——它才是最后堆起来的东西，前两圈的长产物只是少数。<br><b>画 qPCR 扩增曲线的顺序</b>：① 横轴循环数 1–40，纵轴荧光 ② 先画一段贴着底的<b>基线</b>（前十几圈信号埋在噪声里）③ 再画<b>指数段</b>陡升 ④ 最后<b>平台</b>压平（dNTP、引物和酶耗尽，产物互相复配）⑤ 在指数段下缘画一条水平的<b>阈值线</b>，交点向下引虚线到横轴，标 <b>Cq</b> ⑥ 说一句：<b>起始模板越多，Cq 越小</b>。'},

 {g:'相邻与主场', gn:'他从这张卡能走的三个方向：RNA 模板（RT-PCR）· 定量（qPCR）· <b>故意制造错误（error-prone PCR）</b>。第三个是她的主场，也是把这道题两半接起来的那一句。'},
 {n:'16', t:'RNA 模板 · RT-PCR',
  big:'模板是 RNA 时先用<b>反转录酶</b>（RNA 指导的 DNA polymerase）做成 <b>cDNA</b>，再 PCR ＝ <b>RT-PCR</b>。<b>这个酶书里有</b>（p085 中心法则图注：见于某些 RNA 病毒），<b>这个方法书里没有</b>',
  en:'“If my template is RNA, no DNA polymerase can copy it, so the first step is a <b>reverse transcriptase</b> — an RNA-directed DNA polymerase, which the textbook does name, on p085, in the caption of the central-dogma figure, as an enzyme found in some RNA viruses. It makes a DNA copy of the RNA, complementary DNA, and that cDNA is then amplified by ordinary PCR. The method, RT-PCR, is not in the book. Generally, reverse transcriptases do not proofread either, and they are not thermostable in the same way, so that first step is done at a lower temperature and its own errors are part of any sequence reported from RNA.”',
  note:'<b>先给书有的（酶，带页码），再给书没有的（方法）。</b>注意别把 RT-PCR 和 real-time PCR 混成一个缩写——这是一个真会被抓的口误：<b>RT ＝ reverse transcription，qPCR ＝ quantitative</b>。<span class="pg">p085</span>'},
 {n:'17', t:'定量 · SYBR 与 TaqMan',
  big:'<b>qPCR ＝ 每一圈都测荧光</b>，用越过阈值的圈数 <b>Cq</b> 反推起始模板量。两种读法：<b>SYBR Green</b> 认<b>任何</b>双链（便宜，杂带和引物二聚体也算）；<b>TaqMan 探针</b>认<b>一段特定序列</b>（专一，靠 Taq 的 5′→3′ exonuclease 把探针切开）',
  en:'“Quantitative PCR measures the product in every cycle instead of only at the end, and the cycle at which the signal crosses a threshold says how much template there was to start with. Two chemistries, differing in what they recognise. SYBR Green is a dye that fluoresces when bound to <b>any</b> double-stranded DNA: cheap, but it reports primer dimers and unwanted products too, so the run ends with a melting curve. A TaqMan probe recognises <b>one sequence</b> inside the amplicon and is destroyed by the polymerase’s 5′→3′ exonuclease as it passes, separating fluorophore from quencher — specific, and the reason that assay needs Taq.”',
  note:'<b>比较题的形状</b>：先给轴（认什么——任何双链 vs 一段序列），再填两边。这一条也是「COVID 检测怎么工作」的答案主体。全部通用。'},
 {n:'18', t:'把两半接起来的那一句',
  big:'做突变库的时候，<b>我要的就是错误</b>——所以<b>故意用没有校对的 Taq</b>，再把它推得更不准：<b>Mn²⁺ 顶掉一部分 Mg²⁺ · 四种 dNTP 配不平 · 多加循环</b>',
  en:'“And here the two halves of the answer meet. In directed evolution I need a library of variants, so errors are the product, not the problem — and I choose Taq <b>precisely because</b> it has no proofreading. Then I push it further: manganese in place of some of the magnesium, so mispairs are accepted; unbalanced dNTP concentrations, so at some positions the wrong nucleotide is the one available; and more cycles, since errors multiply with duplications. That is error-prone PCR. A proofreading enzyme would undo exactly what I am doing — so Taq is not the weaker enzyme. It is the right enzyme twice: when accuracy does not matter, and when inaccuracy is the point.”',
  note:'<b>这是全卡的落点，也是唯一一句能让他记住你是谁的话。</b>镁那一条接得上书：<span class="pg">p078</span> 明写 polymerase I 必须有镁离子；<b>用锰顶替是通用的错配 PCR 配方，不是书里的</b>。'},
 {n:'19', t:'留口子 · 库要多少错',
  big:'库的错误率是<b>调出来的</b>，不是越高越好：一轮里我要的是<b>每个基因几个碱基替换</b>（量级，折算大约一两个氨基酸改变）',
  en:'“How error-prone is a matter of tuning, not of maximum. In my hands the target for one round is on the order of a few base substitutions per gene — enough that most members carry one or two amino-acid changes, few enough that most of the library still folds. Push it higher and nearly every variant is dead, so the selection reports folding rather than function; push it lower and the library is mostly the parent. Then everything downstream is done with the proofreading enzyme, so that what I read back is the diversity I built and not errors added during the read-out.”',
  warn:'⚠ 只说量级（“a few”, “one or two amino-acid changes”）。具体每轮几个碱基、库多大，是她的项目数据——<b>那一层留给 mywork 的窗口</b>，考场上按需要报，不写进这张卡。',
  note:'<b>三个口子全在她的地盘</b>：库的大小、每轮的错误数、选择读出来的是什么（题 #7 fitness landscape）。他追哪一个都答得住——这正是 LOGIC §4 说的「故意留」。'}
],
end:'<b>顺序：先划出处 → PCR 是什么 → 三个温度 → 耐热是什么 → 三种活性 → Taq 有哪两种 → Kapa 多哪一种 → 一句判据 → 我为什么反过来要错误。</b><br>全卡的轴是一句话：<b>Taq 缺的那个 3′→5′ exonuclease</b>，决定了它的错误率、它的 3′-A 突出端、它能跑 TaqMan 探针、以及它是做突变库的首选。<b>Kapa 多的就是那一个活性</b>，其余（平末端、扛 GC、扛抑制物、慢、要 hot start）全是它的后果。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>先划出处</b>：书里 Taq / Thermus / termostabilní 全 0，PCR 只有 p009 年表一行、没有人名',
 '“This is not textbook material — the book mentions the polymerase chain reaction once, in its chronological table, and never mentions Taq. So everything here is general molecular biology or my own laboratory practice.”',
 '<b>书外题的第一句永远是出处。</b>把实验室的东西说成「书上说」，他翻得到。'],
['<b>PCR 的定义</b>：体外方法，<b>循环温度</b>，把<b>两条引物划定</b>的那一段 DNA <b>指数</b>复制出来',
 '“An in-vitro method that copies one defined stretch of DNA exponentially — defined by two primers that fix its two ends, exponential because every product becomes a template in the next cycle.”',
 '定义先说它是什么，再说判据。defined 和 exponentially 承重，同句交代。'],
['<b>三个温度</b>：95 变性（热干 helicase 的活）· 50–65 退火（引物）· 72 延伸（接 3′-OH）',
 '“Ninety-five to break the hydrogen bonds, fifty to sixty-five for the primers to pair, seventy-two for the polymerase to extend each primer from its 3′-hydroxyl.”',
 '每个温度都要配一句「为什么是它」，只报数他一定接着问。'],
['<b>thermostable</b>：反复 95 °C 后还保着折叠、还有活性；书 p059 说大多数酶 55–60 °C 失活、嗜热菌的酶 85 °C 还活',
 '“It keeps its folded, active conformation through repeated ninety-five-degree steps — the book says on p059 that most enzymes are inactivated around fifty-five to sixty, while enzymes from thermophilic bacteria are active at eighty-five.”',
 '<b>p059 是全书唯一能接「耐热」的句子。</b>但它说的是酶的上限，不是 Taq。'],
['<b>三种活性</b>（书 p079–p080 给 pol I 的）：polymerase 5′→3′ · 3′→5′ exo ＝ 校对 · 5′→3′ exo',
 '“The book lists three activities for polymerase I — the 5′→3′ polymerase, the 3′→5′ exonuclease that proofreads, and the 5′→3′ exonuclease — and describing Taq and KAPA is saying which of the three each one has.”',
 '<b>先摆三种活性再报酶名</b>，否则「有 exonuclease」他听不出你指哪一个。'],
['<b>Taq</b>：Thermus aquaticus（温泉菌）· 有 polymerase ＋ 5′→3′ exo · <b>没有</b> 3′→5′ 校对 · 错误率量级 10⁻⁴–10⁻⁵',
 '“From Thermus aquaticus, a hot-spring bacterium: polymerase plus a 5′→3′ exonuclease, but no 3′→5′ proofreading — so generally of the order of one error in ten thousand to a hundred thousand bases per duplication.”',
 '<b>报量级并说明这是量级</b>，不要编精确值。'],
['<b>Taq 的两个后果</b>：产物 3′ 多一个<b>模板上没有的 A</b>（→ TA cloning）· 5′→3′ exo 让 <b>TaqMan 探针</b>能用',
 '“It adds one untemplated adenine to the 3′ end, which is what TA cloning uses; and its 5′→3′ exonuclease is what digests a TaqMan probe and releases the fluorophore.”',
 '两条都是「活性 → 用途」，最能显出你真的用过它。'],
['<b>Kapa</b>：古菌 <b>B 家族</b>工程酶 · <b>有 3′→5′ 校对</b> · 错误率低<b>一到两个数量级</b> · <b>平末端</b> · 扛 GC 和抑制物（<b>定向进化改出来的</b>）',
 '“KAPA HiFi is an engineered B-family polymerase from the archaeal enzymes: it does proofread, so its error rate is one to two orders of magnitude lower; its products are blunt; and it was improved by directed evolution to handle GC-rich templates and inhibitors.”',
 '<b>「engineered by directed evolution」是通向主场的门</b>，故意留的。'],
['<b>代价</b>：慢；3′→5′ exo <b>会啃引物的 3′ 端</b> → 必须 <b>hot start</b>',
 '“Proofreading is slower, and the same exonuclease chews back the 3′ ends of single-stranded DNA, including my primers — which is why a high-fidelity reaction is always a hot start.”',
 '内行话。它把 hot start 从一个试剂名字变成一个必然后果。'],
['<b>判据一句</b>：产物会被<b>读</b>或被<b>表达</b> → 校对酶；只要知道<b>带在不在</b> → Taq',
 '“If the product will be read or expressed, I use a proofreading enzyme; if I only need to know whether a band is there, Taq is enough.”',
 '<b>这一句就是 “why is that important for us” 的答案。</b>背到是声音。'],
['<b>落点</b>：做突变库时<b>故意</b>用 Taq——它没有校对正是我要的；再加 Mn²⁺、不平衡 dNTP、多循环',
 '“In directed evolution I choose Taq precisely because it cannot proofread, and then push it with manganese and unbalanced dNTPs — so Taq is the right enzyme twice: when accuracy does not matter, and when inaccuracy is the point.”',
 '<b>全卡的落点</b>，把两个酶接成一个故事，而且落在她的主场。']
],

segs:[
 {tag:'段 1 · 定义', h:'先划出处，再给 PCR 和两个酶的定义',
  p:['“One thing first: this is not textbook material. The polymerase chain reaction appears in this book once, in the chronological table — the discovery of PCR, 1983 to 1985, with no name — and Taq and Thermus aquaticus do not appear at all. So what I say is general molecular biology or my own laboratory practice, and I will mark which.',
     'PCR is an in-vitro method that copies one defined stretch of DNA exponentially. Defined means bounded by two primers — short synthetic single-stranded DNA molecules, one for each strand, whose positions fix the ends of the product. Exponentially means the amount doubles every cycle, because every product becomes a template in the next. Besides the primers it needs a thermostable DNA polymerase, the four dNTPs and magnesium.',
     'Taq and KAPA are the two polymerases I actually use, and the question is about their activities — which enzyme activities each of them carries. That is important for us because the choice between them decides whether the sequence I get out is the sequence that went in.”'],
  note:'<b>出处 → 定义 → 题面的两个名字。</b>三句之后才准谈活性。这三句已经把 in vitro、primer、exponential、thermostable 四个承重词放上台面，后面每一条都有地方挂。'},
 {tag:'段 2 · general', h:'三种活性，然后两个酶各有哪几种',
  p:['“The vocabulary comes from the textbook itself. For E. coli DNA polymerase I it lists three activities on one chain, in three different active sites: the 5′→3′ polymerase, which adds a nucleotide to a free 3′-hydroxyl; a 3′→5′ exonuclease, which takes a wrongly paired nucleotide back off the 3′ end — that is proofreading, and the book calls it the second corrector of base-pairing errors, the first being base pairing itself; and a 5′→3′ exonuclease, which cuts forward from a nick.',
     'Taq, generally, is the polymerase of Thermus aquaticus, a hot-spring bacterium. It has the polymerase and the 5′→3′ exonuclease, and it lacks the 3′→5′ proofreading exonuclease — so its error rate is of the order of one base in ten thousand to a hundred thousand per duplication, and it leaves one untemplated adenine on the 3′ end of the product.',
     'KAPA HiFi is an engineered B-family polymerase, the archaeal family, and it does have the 3′→5′ proofreading exonuclease. Its error rate is one to two orders of magnitude lower, its products are blunt, and because it was improved by directed evolution it copes with GC-rich templates and with common inhibitors.”'],
  note:'<b>每个酶后面紧跟「有哪些活性」和「后果是什么」。</b>只报名字，他下一句就是「那 activities 到底指什么」——而题面里就写着这个词。'},
 {tag:'段 3 · 稍展开', h:'那条判据，以及它背后的算术',
  p:['“So the rule I use is one sentence: if the product will be read or expressed, I use a proofreading enzyme; if I only need to know whether a band is there, Taq is enough. Colony screens and diagnostics, Taq — it is fast, cheap and robust. Cloning, library preparation, sequencing templates, anything that will be translated into protein, the proofreading enzyme.',
     'The arithmetic behind that: a molecule has to survive every base and every doubling, so the fraction of perfect product falls roughly as one minus the error rate raised to the length times the number of duplications. A two-thousand-base gene through thirty cycles is a very different case from a two-hundred-base diagnostic fragment, and an error made early is copied into everything descended from it.',
     'The proofreading enzyme is not free, though. It is slower, and the same 3′→5′ exonuclease chews back the 3′ ends of single-stranded DNA, including my primers while I set the reaction up — which is why a high-fidelity reaction is always a hot start.”'],
  note:'〔可裁〕时间够就加一句退火温度：“The annealing temperature comes from the primers — their melting temperature rises with length and GC content, because a G–C pair has three hydrogen bonds and an A–T pair two, which the textbook gives on p073.”'},
 {tag:'段 4 · 留口子', h:'转进主场：我反过来要的就是错误',
  p:['“And for us there is a second answer, because in directed evolution errors are the product. When I build a library of variants I choose Taq precisely because it cannot proofread, and then I push it further — manganese in place of some of the magnesium, unbalanced dNTPs, more cycles. That is error-prone PCR.',
     'What I tune is how error-prone: on the order of a few base substitutions per gene per round, so that most members carry one or two amino-acid changes and most of the library still folds. Higher, and the selection reports folding rather than function.',
     'Then everything downstream — amplifying the library, preparing it for sequencing — is done with the proofreading enzyme, so that what I read back is the diversity I built and not errors added during the read-out. So Taq is not the weaker enzyme. It is the right enzyme twice: when accuracy does not matter, and when inaccuracy is the point.”'],
  note:'<b>这一段是全卡的落点。</b>三个没交代的词（error-prone PCR、library、selection）全在她的地盘，他追哪一个都行——题 #7 fitness landscape 就在这条线上。⚠ 具体项目数据不在这张卡上，按需要现场报。'}
],

why:{
 rungs:[
  ['为什么 PCR 非要一个耐热的聚合酶？','因为<b>每一圈都要 95 °C</b> 把双链拆开，而蛋白质在那个温度会变性——书 <span class="pg">p035</span> 自己给了定义：天然构象被破坏、链展开、失去生物功能，热变性通常不可逆。所以普通聚合酶每一圈都得重新加。<b>书 <span class="pg">p059</span> 顺手给了这条路的出口</b>：大多数酶 55–60 °C 失活，但有些来自嗜热菌的酶 85 °C 仍有活性。“So PCR needs a polymerase from an organism that lives hot — generally Thermus aquaticus.”'],
  ['为什么没有校对就错得多？','因为准确性有<b>两道关</b>，Taq 只有第一道。第一道是<b>碱基配对本身</b>——书 <span class="pg">p073</span> 说氢键的特异性正是复制准确性的来源；第二道是 <b>3′→5′ exonuclease</b>，书 <span class="pg">p078</span> 叫它「第二个纠错者」，把刚接错的那个在链继续之前拆掉。少一道关，错误率就高<b>一到两个数量级</b>。“Taq has the first corrector but not the second — that is the whole difference.”'],
  ['那 10⁻⁴ 这个数是<b>怎么量出来的</b>？','<b>这一问就撞到地基了。</b>错误率不是从一条分子上读出来的，是<b>推出来的</b>：经典做法是扩增一个报告基因、克隆产物、数有多少菌落丢了报告基因的功能——但它只看得见「能把功能打坏」的那些突变；现在的做法是深度测序产物——但它分不开聚合酶的错和测序仪自己的错，两者<b>量级相同</b>。所以这些数字是<b>关于一群分子的统计量，而且带着方法本身的下限</b>。']
 ],
 stop:{lbl:'停 · 落在测量方法的限制',
  say:'“Below that the question stops being about the enzyme and becomes about how an error rate can be measured at all. It is never read off one molecule: classically it is inferred from a reporter gene — amplify it, clone it, count the colonies that lost its function, which only counts mutations that break the reporter; now it is inferred from deep sequencing, which sees everything but cannot separate the polymerase’s errors from the sequencer’s own, of the same order. So these are statistics about a population of molecules, with a floor set by the assay — and below that we are in sequencing statistics rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is Taq polymerase?',
 mean:'<b>他嘴里的最短问法，就这么短。</b>所以答案要自带结构：是什么 → 从哪来 → 有哪些活性 → 缺哪一个 → 后果 → 我拿它干什么。说到「所以我拿它做突变库」就停，让他挑方向。',
 say:'“Taq polymerase is the thermostable DNA polymerase of Thermus aquaticus, a bacterium from hot springs — thermostable meaning it keeps its folded, active conformation through the ninety-five-degree steps of PCR. In the textbook’s vocabulary for polymerase I it has two of the three activities: the 5′→3′ polymerase and a 5′→3′ exonuclease. It lacks the 3′→5′ exonuclease, so it cannot proofread — generally its error rate is of the order of one base in ten thousand to a hundred thousand per duplication, and it leaves one untemplated adenine on the 3′ end of its product. So it is the right enzyme when I only need to know whether a band is there, and also, in my own work, when I want mutations on purpose.”'},

{q:'Describe the activities of Taq and Kapa polymerases and why is that important for us.',
 mean:'<b>卷面题面（#5）。</b>多出来的 “and why is that important for us” 是他要挖的方向——他要的不是性质清单，是<b>一条能用的判据</b>。所以活性说完必须落到那一句。',
 say:'“Activities means which enzyme activities sit on one polypeptide, and the textbook’s list for polymerase I gives the three names: 5′→3′ polymerase, 3′→5′ exonuclease which is proofreading, and 5′→3′ exonuclease. Taq, from Thermus aquaticus, has the polymerase and the 5′→3′ exonuclease and no proofreading — high error rate, an untemplated 3′ adenine, fast and cheap, and that 5′→3′ exonuclease is what makes TaqMan probes work. KAPA HiFi is an engineered archaeal B-family enzyme that does proofread — error rate one to two orders of magnitude lower, blunt products, tolerant of GC-rich templates and inhibitors because it was improved by directed evolution. Why it matters for us is one sentence: if the product will be read or expressed, I use the proofreading enzyme; if I only need to know whether a band is there, Taq is enough. In directed evolution the choice inverts — I use Taq deliberately because it makes errors.”'},

{q:'Describe the activities of Taq and Kapa polymerases.',
 mean:'<b>另一张卷面的写法（#10）</b>，少了 “why is that important for us”。<b>少一个限定词，就意味着他自己会补那一问</b>——所以仍然要主动给判据，只是可以短一点。',
 say:'“Both are thermostable DNA polymerases used in PCR, and the clean way to describe them is by which activities each carries. Taq, from Thermus aquaticus: 5′→3′ polymerase plus a 5′→3′ exonuclease, no 3′→5′ exonuclease — so no proofreading, an error rate generally of the order of ten to the minus four to ten to the minus five per base per duplication, and a single untemplated adenine on the 3′ end. KAPA HiFi, an engineered B-family enzyme of the archaeal type: polymerase plus the 3′→5′ proofreading exonuclease, no 5′→3′ one — error rate one to two orders of magnitude lower, blunt ends, slower, and used as a hot start because that exonuclease attacks the 3′ ends of the primers. The difference that matters is one activity, and it decides whether I can trust the sequence.”'},

{q:'Which polymerase would you use, and why?',
 mean:'<b>这是这道题真正在问的东西</b>，而且他可能直接这样问。给判据，给两三个例子，然后给那个反例（做库时反过来），就停。',
 say:'“My rule is: if the product will be read or expressed, a proofreading enzyme; if I only need to know whether a band is there, Taq. So colony PCR to check which colonies carry my insert, or a diagnostic band — Taq, fast, cheap and robust, and an occasional error changes nothing. Cloning an insert, building or amplifying a library, preparing a sequencing template, anything that will be translated into protein — KAPA HiFi, because one wrong base can change an amino acid, and because a polymerase error in a library cannot be told from a real variant. The exception is when I want the errors: for an error-prone library I choose Taq precisely because it cannot proofread.”'},

{q:'What is PCR and what does each temperature do?',
 mean:'<b>定义 ＋ 三个温度各一句理由。</b>他要的是「你知不知道为什么是这三个温度」，不是那三个数字。',
 say:'“PCR is an in-vitro method that copies a stretch of DNA defined by two primers, exponentially, by cycling the temperature. At around ninety-five degrees heat breaks the hydrogen bonds between the paired bases and the duplex separates — which is why no helicase is needed. At about fifty to sixty-five degrees, taken from the primers’ melting temperatures, each primer pairs with its complementary sequence: higher and they do not stay on, lower and they pair at partly matched sites and give extra bands. At about seventy-two degrees the polymerase extends each primer from its free 3′-hydroxyl, 5′→3′, for a time set by the length of the product. Thirty to thirty-five cycles, each doubling what lies between the primers.”'},

{q:'What does proofreading mean for a PCR product?',
 mean:'先定义 proofreading（一句），<b>再回答「对产物意味着什么」</b>——这才是问的那个问题。',
 say:'“Proofreading is the removal of a wrongly paired nucleotide from the 3′ end of the growing chain by the polymerase’s own 3′→5′ exonuclease, before synthesis continues — the textbook calls it the second corrector of base-pairing errors. For a PCR product it is the difference between a population I can trust and one I cannot. Without it, errors accumulate with the length of the product and the number of duplications, and an error made early is copied into everything descended from it. With it the error rate is one to two orders of magnitude lower — which is what lets me sequence or express the product and attribute what I see to the template rather than the enzyme.”'},

{q:'What is the difference between Taq and a high-fidelity polymerase?',
 mean:'<b>比较题的形状</b>：先给轴（<b>有没有 3′→5′ exonuclease</b>），再让其余的差别从这个轴上长出来。别列平行清单。',
 say:'“One axis: whether the enzyme carries a 3′→5′ exonuclease. Taq does not, so it cannot proofread — high error rate; it has template-independent addition, so it leaves the 3′ adenine that TA cloning uses; and it has a 5′→3′ exonuclease instead, which digests a TaqMan probe. A high-fidelity enzyme — KAPA HiFi, Phusion, Q5 — does carry it: error rate one to two orders of magnitude lower, blunt products, slower, and it must be a hot start because that exonuclease chews the 3′ ends of the primers. Cost, robustness and GC tolerance follow from family and engineering, not from that one activity.”'},

{q:'How does a COVID test work?', odd:1,
 mean:'<b>便装题，答案整张卡上都有。</b>问的其实是 <b>RT-PCR ＋ TaqMan 探针</b>。先说它是什么方法，再拆成两步。',
 say:'“Generally, the laboratory test is an RT-qPCR. That virus has an RNA genome, and no DNA polymerase can copy RNA, so the first step is a reverse transcriptase — an RNA-directed DNA polymerase, which this textbook does name on p085 as an enzyme of some RNA viruses — making a DNA copy, cDNA. That cDNA is amplified with primers sitting in a sequence specific to the virus, and read in real time: a TaqMan probe binds inside the amplicon carrying a fluorophore and a quencher, the polymerase’s 5′→3′ exonuclease digests it as it passes, and the released fluorophore is counted each cycle. The cycle at which the signal crosses the threshold reports how much template was in the sample.”',
 tail:'⚠ 卡上不点具体病原体的名字以外的细节；说 “the virus in that case has an RNA genome” 就够。这条题的全部生化内容是 RT ＋ qPCR ＋ Taq 的 5′→3′ exonuclease。'},

{q:'How does a paternity test work?', odd:1,
 mean:'<b>便装题。</b>问的是 <b>PCR 扩增多态位点 ＋ 按长度分开</b>。答案落在「引物划定一段，长度因人而异」。',
 say:'“Generally, by amplifying short repeated stretches of DNA whose number of repeats differs between people — short tandem repeats. A pair of primers is placed on either side of such a repeat, so PCR copies a piece whose length depends on how many repeats that person carries, and each person has two, one from each parent. The products are separated by size, so each locus gives a pair of numbers. A dozen or so loci make the combination effectively individual, and every one of the child’s numbers has to be present in one of the parents. Taq is entirely adequate here, because what is read is the length of the product, not its sequence.”',
 tail:'<b>最后一句是这条题的分数</b>：它证明你懂那条判据——读的是长度不是序列，所以不需要校对。'},

{q:'Why does PCR need a bacterium from a hot spring?', odd:1,
 mean:'问的是 <b>thermostable</b>，以及「为什么每圈都要 95 °C」。答案落在蛋白质变性上，书 p035 和 p059 都能接。',
 say:'“Because every cycle has to go to about ninety-five degrees to separate the two strands, and an ordinary protein denatures there — the textbook defines denaturation on p035: the native conformation is disturbed, the chain unfolds, the protein loses its biological function, and heat denaturation is usually irreversible. Before thermostable enzymes, fresh polymerase had to be added by hand after every cycle. An organism that lives at seventy degrees has proteins that fold stably there, and the book itself notes on p059 that enzymes from thermophilic bacteria can be active at eighty-five. Thermus aquaticus was such an organism, and generally that is what turned PCR into a machine.”'},

{q:'How would you make a library of mutants?', odd:1,
 mean:'<b>她的主场，而且是这道题的落点。</b>答案：error-prone PCR，故意用 Taq。先说方法，再说怎么调，再说下游为什么换酶。',
 say:'“By error-prone PCR. I amplify the gene with Taq precisely because it has no proofreading, and then push the error rate further — manganese in place of some of the magnesium so mispairs are accepted, unbalanced dNTP concentrations so the wrong nucleotide is sometimes the available one, and more cycles, since errors multiply with duplications. The target is a few base substitutions per gene per round, so most members carry one or two amino-acid changes and most of the library still folds; higher than that and selection reports folding rather than function. The library is then cloned and amplified with a proofreading enzyme, so the diversity read out is the diversity I built.”',
 tail:'<b>这条和「为什么 Taq 不是差酶」是同一件事的两种问法。</b>说完可以停——他再追就是题 #7 fitness landscape。'},

{q:'Why does my PCR give a smear?', odd:1,
 mean:'<b>最像闲聊的一条，其实是把整张卡反过来考。</b>答法：先说 smear 是什么（很多长度不一的产物），再按 PCR 的三步各给一个原因，最后给判据。',
 say:'“A smear means many products of many lengths instead of one, so something is letting the polymerase start where I did not choose, or start too often. Generally I go through the cycle. Annealing too low, so primers pair at partly matched sites — I raise it. Too many cycles or too much template, so the reaction runs out of primers and products prime on each other. Too much magnesium, which stabilises mispaired primers. No hot start, so mispriming and primer dimers are extended at room temperature. Or a GC-rich template with secondary structure. The fix is to change one of those at a time — annealing temperature first, because it costs nothing.”',
 tail:'<b>这条题在考「你会不会 troubleshooting」</b>，那是方法题，正是这位老师的口味。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认这些词你都会，所以他问的方式是把词单拎出来。<b>每条先说它是什么</b>，再说它在这道题里起什么作用。', items:[
{r:'实测', q:'What is PCR?',
 en:'“PCR is an in-vitro method that copies one defined stretch of DNA exponentially by cycling the temperature. Two primers — short synthetic single-stranded DNA molecules, one matching each strand — define the two ends of the product; a thermostable DNA polymerase, the four dNTPs and magnesium do the copying; and the cycle is three temperatures: denaturation at about ninety-five, annealing at about fifty to sixty-five, extension at about seventy-two. Each cycle doubles the amount. Generally — the textbook mentions PCR only once, in its chronological table.”',
 cn:'<b>正面定义，先说它是什么（一个体外方法），再说判据。</b>出处一句放在最后，不要放在最前面把答案拖长。<span class="pg">p009</span>'},
{r:'高', q:'What is KAPA HiFi polymerase?',
 en:'“KAPA HiFi is, generally, an engineered high-fidelity DNA polymerase of the B family — the family whose natural members are archaeal, and the family that matches the textbook’s polymerase II by activity: the 5′→3′ polymerase plus the 3′→5′ proofreading exonuclease, without the 5′→3′ one. So it proofreads, which puts its error rate one to two orders of magnitude below Taq’s; its products are blunt, because it does not add an untemplated adenine; it is slower; and it has to be used as a hot start. It was improved by directed evolution for GC-rich templates and for inhibitor tolerance — that is why it is engineered rather than simply isolated.”',
 cn:'<b>Taq 的正面定义在「同一个答案，不同问法」第一行，KAPA 的在这里</b>，两个都要能单独答。⚠ 全部 general：B 家族、古菌来源、量级、定向进化改造。厂商的定量指标不背。'},
{r:'高', q:'What does thermostable mean?',
 en:'“Thermostable means the protein keeps its folded, active conformation at temperatures that would unfold an ordinary one — here, through repeated steps at ninety-five degrees. It is not a claim that the enzyme is indestructible: it still has a half-life at ninety-five, generally tens of minutes, which limits how many cycles a reaction can run. The textbook does not use the word, but it notes on p059 that enzymes from thermophilic bacteria are active at eighty-five while most enzymes are inactivated at fifty-five to sixty.”',
 cn:'<b>「不是永生」那半句必须带上</b>，否则下一刀就是「那它为什么不能一直跑」。<span class="pg">p059</span>'},
{r:'高', q:'What is an amplicon?',
 en:'“The amplicon is the piece of DNA that a given pair of primers produces — the stretch of template between the two primer binding sites, including the primers themselves, which become part of the product. Its length is fixed by where I put the primers, and that length is what I check on a gel and what sets the extension time. Generally, the word is also used for the whole population of those molecules.”',
 cn:'承重：<b>引物本身留在产物里</b>——这一条是「5′ 端可以挂尾巴」的前提（见桥回主场）。'},
{r:'高', q:'What is fidelity, and what is an error rate?',
 en:'“Fidelity is how faithfully a polymerase copies its template — how often the nucleotide it inserts is the one base pairing calls for. The error rate is the number that measures it: generally errors per base incorporated per duplication, so of the order of ten to the minus four to ten to the minus five for Taq, one to two orders of magnitude lower for a proofreading enzyme. It is a rate rather than a property, because it depends on the buffer, especially the magnesium, and on how it was assayed.”',
 cn:'<b>fidelity 是形容，error rate 是那个数。</b>他问「多少」时先分清他要的是哪一个——问 fidelity 给判据，问 error rate 给量级。'},
{r:'实测', q:'What is proofreading?',
 en:'“Proofreading is the removal of a wrongly paired nucleotide from the 3′ end of the growing chain by the polymerase’s own 3′→5′ exonuclease, before the chain is extended further. The textbook calls that activity the second corrector of base-pairing errors — the first corrector being the specificity of base pairing itself. Polymerases I, II and III in E. coli have it; KAPA HiFi has it; Taq does not.”',
 cn:'书的词是「第二个纠错者」（<span class="pg">p078</span>），第一个是 <span class="pg">p073</span> 那句「氢键的特异性是复制准确性的来源」。卡 16 同题。'},
{r:'高', q:'What is the difference between a 3′→5′ and a 5′→3′ exonuclease?',
 en:'“An exonuclease removes nucleotides from an end of a chain by hydrolysis, one at a time; the arrow says from which end and in which direction. The 3′→5′ one works back from the 3′ end — the end being extended — so it can take off the nucleotide just added: that is proofreading. The 5′→3′ one works forward from a nick — a break in one strand of a duplex, one missing phosphodiester bond — cutting inside the double-stranded region and removing a piece of up to ten nucleotides: in the cell that is primer removal and excision of pyrimidine dimers, in the lab it is what digests a TaqMan probe. Different activity, different job — and the trap is calling the wrong one proofreading.”',
 cn:'<b>这一条是这道题最容易被抓的地方。</b>Taq <b>有</b> 5′→3′ exonuclease，所以说「Taq 没有 exonuclease」是错的——它缺的是 <b>3′→5′</b> 那一个。<span class="pg">p078 p079 p080</span>'},
{r:'高', q:'What is processivity?',
 en:'“Processivity is how many nucleotides a polymerase adds before it lets go of the template. It is not speed: a fast enzyme that falls off often can be slower overall than a slower one that stays on. Generally it is not in the textbook; polymerase III is highly processive because a sliding clamp holds it on the DNA, polymerase I is not, which suits short gap-filling. For PCR it matters twice: extension time is set by processivity and product length together, and the engineered enzymes carry added DNA-binding domains precisely to raise it.”',
 cn:'卡 16 也有这一条，<b>这里加的是「不等于速度」和「工程酶加结合结构域」两句</b>，别重复卡 16 的内容。'},
{r:'高', q:'What is the annealing temperature — and what is Tm?',
 en:'“The annealing temperature is the temperature of the second step, at which the primers pair with the template, and it is derived from the primers rather than chosen freely. The melting temperature, Tm, is generally the temperature at which half of a duplex — here a primer with its complement — is separated; it rises with length and with GC content, because a G–C pair has three hydrogen bonds and an A–T pair two, which is in the textbook on p073. In the lab I match the two primers for Tm and set annealing a few degrees below the lower one.”',
 cn:'<b>氢键的数是书里的，Tm 和退火温度是通用的。</b>这一条也是「为什么 GC-rich 难扩增」的理由，不用另记。<span class="pg">p073</span>'},
{r:'中', q:'What is a hot start?',
 en:'“A hot start is a reaction in which the polymerase is kept inactive until the first high-temperature step — blocked by an antibody, an aptamer or a chemical modification that comes off on heating. It exists because at room temperature primers pair at partly matched sites and with each other, and the polymerase will extend those, giving mispriming and primer dimers. With a proofreading enzyme there is a second reason: its 3′→5′ exonuclease chews back the 3′ ends of the primers while the reaction is set up, and a primer without its 3′ end cannot prime.”',
 cn:'⚠ 全部通用与实验室。<b>第二个理由是这张卡独有的</b>，卡 16 上没有，也是他最可能觉得意外的一条。'},
{r:'中', q:'What are blunt and sticky ends?',
 en:'“A blunt end is a double-stranded end where both strands stop at the same position, nothing overhanging. A sticky, or cohesive, end has a short single-stranded overhang, which can base pair with a complementary overhang on another molecule and hold the two together while a ligase seals them. Generally they come from restriction enzymes cutting the two strands at staggered positions — or, here, from a polymerase: Taq leaves a one-base 3′ adenine, a proofreading enzyme leaves blunt product. Blunt ligation works but is less efficient, because nothing holds the two pieces together first.”',
 cn:'⚠ 书里 restrikce / klonování 全 0 命中，全部通用。<b>「什么按住它们」这句是 blunt 连接效率低的理由</b>，比说「blunt 比较难连」有用。'},
{r:'中', q:'What is TA cloning?',
 en:'“TA cloning is ligating a PCR product straight into a vector by using the single 3′ adenine that Taq leaves: the vector comes linearised with a single 3′ thymine on each end, the A and the T pair, and a ligase seals the nicks — no restriction enzyme and no end-preparation step. It works only with a non-proofreading polymerase: with a proofreading enzyme the product is blunt, and even an added adenine would be removed by the 3′→5′ exonuclease.”',
 cn:'⚠ 全部实验室。<b>最后半句把两个酶重新连起来</b>，而且是「活性 → 操作后果」的干净例子。'},
{r:'中', q:'What is template-independent addition?',
 en:'“Template-independent addition is a polymerase adding a nucleotide the template did not specify. Taq does it at the end of synthesis, putting a single adenine on the 3′ end — generally called the 3′-A overhang, and it is a property of the enzyme, not an error. The cell has enzymes that do this deliberately too: terminal transferase, and generally the polymerase that adds nucleotides at antibody gene junctions. The textbook’s picture of DNA polymerase is entirely template-directed, so this is an addition to it.”',
 cn:'<b>先说它是什么，再说 Taq 那一例。</b>「不是错误，是性质」这一句要说——否则他会以为你在说 Taq 的错误率。'},
{r:'中', q:'What is a primer here — is it the same as in the cell?',
 en:'“A primer is a short stretch of nucleotides paired to the template that offers a free 3′-hydroxyl for the polymerase to extend, because no DNA polymerase can start a chain. In the cell it is RNA, up to sixty nucleotides, made by primase, and it is later removed and replaced by DNA — the textbook’s account on p077 and p083. In PCR it is DNA, about twenty bases, chemically synthesised, and it is never removed: it becomes part of the product and defines its end. Same function, different chemistry, length and fate.”',
 cn:'<b>「PCR 的引物是 DNA 不是 RNA」是一个真会被抓的陷阱</b>，而且书讲的正是 RNA 那一种。先给共同点（都是给 3′-OH），再给三处差别。<span class="pg">p077 p083</span>'},
{r:'中', q:'What is error-prone PCR?',
 en:'“Error-prone PCR is a PCR run deliberately under conditions that raise the polymerase’s error rate, so the product is a population of variants rather than copies. In my hands: Taq, because it has no proofreading; manganese in place of some of the magnesium; unbalanced dNTP concentrations; and more cycles, because errors multiply with duplications. It is the standard way to build a library for directed evolution, and the rate is tuned rather than maximised — a few substitutions per gene per round.”',
 cn:'⚠ 全部实验室。<b>「tuned rather than maximised」是内行和外行的分界。</b>她的具体数字留给现场，不写死。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方。<b>书没有理由的先划出处再解释。</b>', items:[
{r:'高', q:'Why must the polymerase be thermostable?',
 en:'“Because every cycle has to reach about ninety-five degrees to separate the strands, and an ordinary enzyme denatures there — the textbook’s own definition on p035: the native conformation is disturbed, the chain unfolds, biological function is lost, and heat denaturation is usually irreversible. Without a thermostable enzyme, fresh polymerase would have to be added after every cycle, which is how the method was first done. A polymerase from an organism that lives at seventy degrees survives instead, so the reaction can be left in a machine.”',
 cn:'<b>用书自己的 denaturace 定义</b>（<span class="pg">p035</span>）来解释一个书里没有的方法——这是书外题最稳的接法。<span class="pg">p059</span>'},
{r:'高', q:'Why does each step need the temperature it needs?',
 en:'“Each temperature is set by a different physical event. Ninety-five is what it takes to break the hydrogen bonds holding the strands together, and GC-rich stretches need the most, three per pair against two. Fifty to sixty-five is the window where a twenty-base primer is stably paired but a partly matched one is not, so it sets the specificity of the whole reaction. Seventy-two is near the optimum of these thermophilic enzymes — the textbook’s point on p058 holds, that rate roughly doubles per ten degrees until thermal denaturation takes over, and for an enzyme from a hot spring that crossover is far higher.”',
 cn:'<b>三个温度三个理由，而且第三个能引书</b>（<span class="pg">p058</span> 的 Q10 与热失活）。这是这张卡里少数能真正靠书说话的地方。'},
{r:'高', q:'Why does Taq have no proofreading — is that a defect?',
 en:'“It is not a defect, it is which family the enzyme belongs to. Generally, Taq is an A-family polymerase, homologous to E. coli polymerase I, and its 3′→5′ exonuclease domain is not functional while the 5′→3′ one is; the proofreading enzymes used in PCR are B-family, the archaeal type. Whether that absence is a disadvantage depends on what I want: for a colony screen it costs nothing, and for building a mutant library it is the property I am paying for.”',
 cn:'⚠ A family / B family 是通用分类，书里没有——但<b>书里 pol I 与 pol II 的活性差别正好是这两个家族的原型</b>，所以可以用书的表说这件事，不用报家族名字。'},
{r:'高', q:'Why does fidelity matter more for a long product or many cycles?',
 en:'“Because errors multiply. A molecule has to survive every base and every doubling, so the fraction of perfect product goes roughly as one minus the error rate, raised to the length times the number of duplications — doubling the amplicon roughly doubles the exponent, and so does adding cycles. There is also an asymmetry in time: an error made early is copied into everything descended from that molecule, while a late one stays rare. That is why a whole gene through thirty cycles gets the proofreading enzyme, and why I use as few cycles as will give me enough material.”',
 cn:'<b>他要数字时按这个式子现场算，不要报一个记住的百分比。</b>「早期错误被放大」那半句是这条的分数。'},
{r:'高', q:'Why are proofreading polymerases slower and more sensitive to primer degradation?',
 en:'“Both come from the same activity. Slower, because the enzyme checks and sometimes removes and replaces a nucleotide before continuing, so each cycle needs more time per kilobase. More sensitive, because a 3′→5′ exonuclease attacks the 3′ end of any single-stranded DNA available, and in my tube that is the primers — and a primer shortened at its 3′ end no longer primes, since the polymerase extends only a matched 3′-hydroxyl. Hence the hot start, and hence fresh primers.”',
 cn:'<b>「同一个活性的两个后果」是这条的形状</b>，比列两条独立的缺点强。'},
{r:'中', q:'Why does magnesium matter — and manganese?',
 en:'“The textbook says magnesium ions are essential for DNA polymerase I, on p078, without saying why. Generally the metal does two things in the active site: it coordinates the negatively charged oxygens of the incoming dNTP’s triphosphate, and it makes the 3′-hydroxyl a better nucleophile. Because it positions and selects the nucleotide, its concentration changes fidelity — too much magnesium stabilises mispairs, so accuracy falls. Manganese substituted for part of it does the same far more strongly, which is why it is a standard ingredient of error-prone PCR: in my work that is a reagent, not a problem.”',
 cn:'<span class="pg">p078</span> ＋ 通用（two-metal-ion mechanism）＋ 实验室。<b>这一条把书的一句话直接接到她的配方上。</b>'},
{r:'中', q:'Why is KAPA better on GC-rich templates and with inhibitors?',
 en:'“Generally, because it was engineered for it. A GC-rich template is hard for two reasons that follow from the base pairing the textbook gives on p073: three hydrogen bonds per G–C pair rather than two, so more heat is needed to melt it, and strong stacking, so the single strand forms secondary structure that blocks the polymerase. Inhibitors — from blood, soil, plant extracts — bind the enzyme or the magnesium. Directed evolution fixes both without anyone knowing the mechanism: mutate, select the variants that still amplify, repeat. That is the same method I use on binding proteins.”',
 cn:'<b>最后一句是故意留的口子</b>——它把这道题接到 directed evolution，而那是她的主场。<span class="pg">p073</span>'}
]},

{g:'怎么发现的', gn:'⚠ 人名和年份<b>全部是通用知识</b>，书里只有 p009 年表的一行 “1983-5 Objev polymerasové řetězové reakce (PCR)”，<b>连人名都没有</b>。先给书的那一行，再给通用的故事。', items:[
{r:'中', q:'Who invented PCR?',
 en:'“Generally, Kary Mullis, in 1983, and the method was published and developed over the following two years — which matches this textbook’s chronological table, where the discovery of the polymerase chain reaction is dated 1983 to 1985, though the table gives no name. The idea is simple, and that is its point: if a polymerase copies a primed template, and heat rather than an enzyme separates the strands, the copying can be repeated — and a repeated doubling is exponential growth.”',
 cn:'<span class="pg">p009</span> 是书里唯一的落点，而且<b>正好支持 1983 这个年份</b>——先引书再给人名，最稳。',
 warn:'⚠ Mullis、1993 诺贝尔是通用知识，书里没有。核过再主动说年份，被问「谁」时给人名就够。'},
{r:'中', q:'Where did Taq come from?',
 en:'“Generally: from Thermus aquaticus, a bacterium isolated from the hot springs of Yellowstone in the 1960s by microbiologists asking how hot life can be, not looking for an enzyme. Its DNA polymerase was purified and described in the 1970s, again as basic microbiology, and only in the late 1980s was it put into PCR — which is what made the method automatic. I like the example because nobody designed the tool: the organism already existed, and the question that found it was about the limits of life.”',
 cn:'<b>跟大本营卡 x_plasmid 同一个论证形状</b>：不要答成「他们挑了 Taq」，要答成「Taq 本来就在那儿」——这是 researcher 和 technician 的分水岭。',
 warn:'⚠ Brock、Chien、Saiki 这些人名和确切年份书里全没有，本仓库也没核过。<b>只说年代（1960s / 1970s / late 1980s），不报人名和精确年份。</b>'},
{r:'中', q:'How is an error rate actually measured?',
 en:'“Never by reading one molecule. Classically by a forward-mutation assay: amplify a reporter gene, clone the product, count what fraction of colonies lost the reporter’s function — which counts only mutations that break it, so the number has to be corrected for how many positions could. Now, generally, by deep sequencing the product, which sees every substitution but cannot separate the polymerase’s errors from the sequencer’s own, of the same order. That is why I quote an order of magnitude rather than a value.”',
 cn:'<b>这就是这张卡的停止句所在的地基（测量方法的限制）。</b>说到这里就停，再往下是测序统计学不是生化。'}
]},

{g:'陷阱', gn:'七句最容易说错的话。<b>前两条是这张卡上最贵的</b>，因为它们会让一个懂的人听起来像不懂。', items:[
{r:'高', q:'「Taq 是差酶 / Taq 不好」',
 en:'“No — Taq is the right tool whenever fidelity does not matter, and it is also the right tool when I want mutations. For a colony screen or a diagnostic band an occasional substitution changes nothing, and speed and cost decide. For an error-prone library the absence of proofreading is the property I am buying. Calling it a bad enzyme would mean judging a tool without saying what for.”',
 cn:'<b>这一条几乎一定会被问</b>，因为他想看你会不会把工具和场景分开。答成「不好」就把这道题的全部结构丢了。'},
{r:'高', q:'「Taq 没有 exonuclease 活性」',
 en:'“That is not right, and the distinction matters. Taq does have a 5′→3′ exonuclease — the activity the textbook gives polymerase I for removing primers — and that is exactly what TaqMan probes depend on. What Taq lacks is the 3′→5′ exonuclease, the proofreading one. Two different activities, different directions, different jobs.”',
 cn:'<b>最容易说错的一句</b>，而且说错之后他会立刻追 TaqMan 是怎么工作的，那时就回不来了。<span class="pg">p078 p079</span>'},
{r:'高', q:'「校对是 5′→3′ exonuclease」',
 en:'“No — proofreading is the 3′→5′ exonuclease. It works back from the 3′ end, which is the end being extended, so it can remove the nucleotide just misincorporated. The 5′→3′ exonuclease travels forward from a nick and removes a stretch ahead of the polymerase; in the cell that is primer removal and the excision of pyrimidine dimers, not correction.”',
 cn:'方向记法：<b>校对拆的是刚接上去的那一个，所以必须从 3′ 端往回走。</b>'},
{r:'中', q:'「thermostable ＝ 这个酶不会坏」',
 en:'“Thermostable is about the folded state being stable at high temperature, not about the enzyme being indestructible. It still has a half-life at ninety-five degrees — generally tens of minutes — so denaturation steps are kept short, and a reaction with very many cycles loses activity towards the end. That is one of the reasons a PCR plateaus.”',
 cn:'<b>这一条顺手给了平台期的一个理由</b>（另外两个是引物耗尽、产物互相复配），画扩增曲线时用得上。'},
{r:'中', q:'「PCR 里也需要 helicase 和 ligase」',
 en:'“No. Heat separates the strands, so no helicase is needed; the primers are supplied ready-made, so no primase; they are never removed, so no 5′→3′ nuclease step and no ligase. That is the whole simplification: PCR is replication with the cell’s machinery replaced by temperature and two synthetic primers. The textbook’s replication needs all those enzymes because it happens at one temperature, inside a cell.”',
 cn:'<b>这一条是把卡 16 和这张卡放在一起的最好方式</b>：不是两套东西，是同一个反应去掉了细胞的部分。'},
{r:'中', q:'「PCR 的引物是 RNA」',
 en:'“In the cell, yes — the textbook says the primer is a short piece of RNA made by primase. In PCR they are synthetic DNA, about twenty bases, and they are not removed afterwards: they become the ends of the product. That is why I can hang a tail on a primer’s 5′ end — a restriction site, an overlap for assembly, a barcode — and find it in the product.”',
 cn:'<b>书讲的正好是另一种</b>，所以这个混淆很自然，也很容易被抓。<span class="pg">p077 p083</span>'},
{r:'中', q:'「错误率 10⁻⁴ 就是一万条产物里有一条是错的」',
 en:'“No — it is per base and per duplication, so it has to be multiplied by the length of the product and by the number of duplications. For a thousand-base product through the equivalent of twenty duplications, ten to the minus four per base per duplication means most molecules carry at least one change. That arithmetic is what decides which enzyme I use, and it is why the same error rate is irrelevant for a two-hundred-base diagnostic fragment and decisive for a gene I am going to express.”',
 cn:'<b>这一条是那个式子的口语版。</b>说错了比不知道更糟，因为它会让整条判据听起来是背的。'}
]},

{g:'相邻考点', gn:'这张卡自己没有书页，但它<b>四面都贴着有书页的题</b>。每条一句话就够，能接上就行。', items:[
{r:'高', q:'→ 卡 16 · DNA 复制',
 en:'“PCR is replication with the cell taken out: the same chemistry — a polymerase adding dNTPs to a free 3′-hydroxyl, 5′→3′, chosen by base pairing — but heat instead of helicase, synthetic DNA primers instead of primase, and no primer removal and no ligase. Everything I said about activities is the textbook’s own list for polymerase I, on p079 and p080.”',
 cn:'<b>这是这张卡最重要的一条邻居</b>，而且卡 16 的桥那一格就是往这张卡伸的。三种活性、3′-OH、校对、Klenow 都在那边定义过，<b>这里只引用不重复</b>。<span class="pg">p078 p079 p080</span>'},
{r:'高', q:'→ 卡 03 · DNA 的结构',
 en:'“Three properties of the double helix run this whole method. Complementarity is why a primer finds one place. The hydrogen bonds are what ninety-five degrees breaks, and their number per pair — two for A–T, three for G–C, on p073 — is why GC content sets melting temperature. And antiparallel strands are why two primers, one for each strand, point towards each other and bracket the product.”',
 cn:'<b>三条都在卡 03</b>。这一条也是回答「为什么 95 度」「为什么 GC-rich 难」的共同来源。<span class="pg">p073</span>'},
{r:'中', q:'→ 卡 12 · 启动子与表达，以及质粒和克隆',
 en:'“What I do with a high-fidelity product is usually clone it: into a plasmid, which carries its own origin of replication and a selectable marker, behind a promoter — the element card twelve describes for the lac operon — so the host transcribes and translates it. That is the chain in which one wrong base matters: a substitution in the amplicon becomes a substitution in the protein, or a stop codon.”',
 cn:'<b>「表达」这个词在判据里承重，所以要能接下去。</b>启动子和操纵子在卡 12；质粒本身书里 0 命中，材料在 `content/x_plasmid.md`（大本营卡）。'},
{r:'中', q:'→ Sanger 测序需要干净的模板',
 en:'“Generally — the method is not in the textbook, although its table credits Sanger with the first protein sequence in 1953. Sanger sequencing reads one population of molecules at a time and reports, at each position, whatever the majority says. So it needs a single clean product: a mixed PCR, a smear, or leftover primers give overlapping traces that cannot be read. One more reason the product I am going to sequence is made with a proofreading enzyme and checked on a gel first.”',
 cn:'⚠ sekvenování 全书 0 命中；<span class="pg">p009</span> 的 Sanger 说的是<b>胰岛素的氨基酸序列</b>，不是 DNA 测序——<b>别把这两件事混成一件</b>。'},
{r:'中', q:'→ 其他常用的校对酶',
 en:'“KAPA HiFi is not the only one — generally, Phusion and Q5 are the other two I would name, both engineered B-family enzymes with the same 3′→5′ proofreading activity and the same practical consequences: blunt products, hot start, lower error rate, sensitivity of primers to the exonuclease. Which one a laboratory uses is largely habit and buffer; the activity that matters is the same.”',
 cn:'<b>点出名字但不比较细节</b>——「largely habit」这半句防止他往产品参数上追，那不是生化。'}
]},

{g:'桥回主场', gn:'这一组是这道题的落点，也是 2–3 道「来自你自己的工作」的题里的一道。<b>全部实验室出处</b>，说的时候用通用说法，不点具体病原体。', items:[
{r:'实测', q:'Why is that important for us — in your own work?',
 en:'“Because in my work the two enzymes do opposite jobs, and choosing wrongly destroys the experiment either way. I work on directed evolution of a binding protein: I build a library of variants, select the ones that bind, and sequence to see which were enriched. The library is built by error-prone PCR with Taq, chosen precisely because it cannot proofread. Everything after that — amplifying the selected pool, preparing it for sequencing — uses the proofreading enzyme, because there a polymerase error cannot be told from a real variant and would read as enrichment that never happened. One enzyme makes the diversity; the other must not add any.”',
 cn:'<b>这是这道题的满分答案，而且它是一个故事不是一张清单。</b>用通用说法（a binding protein、a library of variants），具体项目留给 mywork 的窗口。'},
{r:'高', q:'How many mutations do you want per gene per round?',
 en:'“On the order of a few base substitutions per gene, so that most members carry one or two amino-acid changes. The reasoning: a library has a fixed size, and every extra mutation per member both multiplies the sequence space I am sampling and lowers the chance that the member still folds. Too high and almost everything is dead, so selection reports stability rather than binding; too low and most of the library is the parent. In practice the rate is set by the conditions and checked by sequencing a handful of clones before the selection.”',
 cn:'<b>「然后测几个克隆核一下」这半句最像真的做过。</b>⚠ 报量级，具体数字现场给。'},
{r:'高', q:'How do you design a primer for this?',
 en:'“By the same rule as the cell’s primer: the polymerase extends only a matched 3′-hydroxyl. So the 3′ end of my primer must pair exactly with the template — a mismatch there gives no extension, which is what allele-specific PCR exploits — while the 5′ end is free, because the polymerase never looks at it and the primer stays in the product. That is where I put a restriction site, an overlap for assembly, or a barcode. Length and GC content then set the melting temperature, and I match the two primers to each other.”',
 cn:'<b>卡 16 的桥那一格已经有这条</b>，这里保留是因为他从这张卡问过来时需要它；说法保持一致，别给两个版本。<span class="pg">p078</span>'},
{r:'中', q:'How do you know your library is what you think it is?',
 en:'“By sequencing a sample of it before selecting. Generally I check three things: that the mutations per clone are near the rate I aimed at, that they are spread along the gene rather than clustered, and that the parent sequence is not the majority — which would mean the template was carried through rather than amplified. And the read-out means something only because the amplification for sequencing used a proofreading enzyme; otherwise I would be measuring the polymerase.”',
 cn:'<b>这一条把 fidelity 从一个数字变成一个实验设计问题</b>，正是这位老师喜欢的方法题。'},
{r:'中', q:'→ 题 #7 · fitness landscape',
 en:'“The library is the sampling instrument for a fitness landscape — the map from sequence to function that directed evolution walks across. How error-prone I make the PCR decides how far each step moves on that map: a few substitutions per gene is a local step, and that is deliberate, because most large steps land on variants that do not fold.”',
 cn:'<b>题 #7 是另一道 w3 的书外题</b>，也是她的主场，卡还没做。这一句是两张卡之间的门，先埋在这里。'}
]}
]
});
