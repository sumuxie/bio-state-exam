/* 卡 16 · Explain the process of DNA replication.
   题库 #16（S3 Biochemistry 3）· 单卷题 · 书本投入 45
   出处 Biochemie OCR p076–p085（§4.1.2.1、§4.1.3）、p073（配对特异性＝复制准确性）、
        p088（转录不需要 primer，相邻）、p009（年表：1953 Watson–Crick、1983–5 PCR）
   书里 0 命中（按书里的原词搜的），全部标 general 或实验室：topoisomerase / gyrase · telomere · Meselson–Stahl ·
   Kornberg（DNA pol I；书里的 Kornberg 是 2001 年 RNA polymerase 结构那位）· Okazaki 人名 ·
   错误率数字 · α-磷酸这个叫法 · 真核 pol α/δ/ε · Taq / Kapa。
   卡 03 已定义、这里不重复：antiparallel、complementary、base pairing、phosphodiester bond、撇号约定。 */

window.CARDS.push({
id:'16', n:16, w:1,
q:'Explain the process of DNA replication.',
qcn:'解释 DNA 复制的过程',
sub:'主干说完约 90 秒 · 「process」＝他要顺序 · 全卡的轴是一句话：polymerase 只能接 3′-OH',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'先说它是什么，再说半保留，再说需要什么。三句之后才准报酶名。'},
 {n:'01', t:'定义',
  ez:'“D N A replication is the biosynthesis of D N A. The textbook calls it reduplication. From one double helix the cell makes two. The two are identical. The process is a sequence of steps. They happen at the replication fork. Unwinding, priming, synthesis, joining. It is synthesis on a template. The template is an existing strand of D N A. Base pairing fixes the order of the new strand. Opposite adenine only thymine fits. Opposite guanine only cytosine fits. The textbook puts it in one sentence. The complementary nature of the two strands determines the base order. Every new strand keeps the order the original prescribed.”',
  ezcn:'<b>DNA 复制 ＝ DNA 的生物合成</b>（<b>书用的词是 reduplication</b>）：<b>从一个双螺旋，细胞造出两个一模一样的</b>。<b>整个过程是复制叉上的一串步骤：解开 → 引发 → 合成 → 连接</b>。<b>它是在模板上进行的合成</b>（<b>模板是一条已有的 DNA 链</b>），<b>新链上核苷酸的顺序由碱基配对定死</b>：<b>腺嘌呤对面只能是胸腺嘧啶，鸟嘌呤对面只能是胞嘧啶</b>。<b>书的原话：两条链的互补性质决定了每一条新链都保持原分子所规定的碱基顺序。</b>',
  big:'复制是 DNA 的<b>生物合成</b>：从一个双螺旋做出两个一样的；在<b>模板</b>上做，新链的核苷酸顺序由模板的碱基顺序决定（互补）',
  en:'“DNA replication is the biosynthesis of DNA — the textbook calls it reduplication: from one double helix the cell makes two identical ones. The process is a sequence of steps at the replication fork — unwinding, priming, synthesis, joining. It is synthesis on a template, an existing strand of DNA. The order of nucleotides in the new strand is fixed by the order of bases in that template through base pairing: opposite adenine only thymine fits, opposite guanine only cytosine. The textbook’s sentence: the complementary nature of the two strands determines that every new strand keeps the base order the original molecule prescribed.”',
  note:'书 §4.1.3 的节标题就是一句 researcher 式的话：「DNA 的结构和生物合成解释了遗传的原理」。定义先说它<b>是什么</b>，再说判据（模板、互补）。<b>base pairing、antiparallel、complementary 的定义在卡 03</b>，不重复。<span class="pg">p076</span>'},
 {n:'02', t:'半保留',
  ez:'“Replication is semiconservative. Each of the two daughter helices keeps one parental strand. It also gets one newly made strand. So the parental helix is not kept whole. And it is not broken up either. It is split between the two products. The textbook says this directly. Its electron micrograph supports it. It shows a replication eye in Drosophila D N A. And it is consistent with the semiconservative model.”',
  ezcn:'<b>复制是半保留的</b>：<b>两个子代双螺旋各保留一条亲本链，各得到一条新造的链</b>。<b>所以亲本的那个螺旋既没有被整个保留，也没有被拆散——它被分给了两个产物</b>。<b>书直接这么说了，而且它那张果蝇 DNA 复制眼的电镜图跟半保留模型一致。</b>',
  big:'<b>Semiconservative</b>：每条新双螺旋里，一条链是旧的，一条链是新合成的',
  en:'“Replication is semiconservative: each of the two daughter double helices keeps one parental strand and gets one newly made strand. The parental helix is neither kept whole nor broken up. It is split between the two products. The textbook says so directly, and its electron micrograph of a replication eye in Drosophila DNA is consistent with the semiconservative model.”',
  note:'p082 那句话说复制「proceeds semiconservatively」（书上原话的英译）；p078 figure 4.15。<b>Meselson–Stahl 1958 书里没有</b>（全书 0 命中），要说就带 “generally”。<span class="pg">p078 p082</span>'},
 {n:'03', t:'需要什么',
  ez:'“Besides the enzymes, the synthesis needs several substrates. It needs all four deoxyribonucleotides. They come as triphosphates. That is d A T P, d G T P, d C T P and d T T P. It needs D N A as the template. And it needs a short piece of R N A. That piece serves as the starter. It is called the primer. D N A polymerase also needs magnesium ions.”',
  ezcn:'<b>除了那些酶，合成还需要几样底物</b>：<b>四种脱氧核糖核苷酸，都以三磷酸形式</b>（<b>dATP、dGTP、dCTP、dTTP</b>）；<b>作为模板的 DNA</b>；<b>以及一小段 RNA 当起始物，也就是引物</b>。<b>DNA 聚合酶还需要镁离子。</b>',
  big:'底物：<b>四种 dNTP</b> ＋ <b>模板 DNA</b> ＋ 一小段 <b>RNA primer</b>；polymerase 还要 <b>Mg²⁺</b>',
  en:'“Besides the enzymes, the synthesis needs several substrates. All four deoxyribonucleotides as triphosphates: dATP, dGTP, dCTP and dTTP. DNA as the template. And a short piece of RNA that serves as the starter, the primer. DNA polymerase also needs magnesium ions.”',
  note:'p077 原话，这就是「账」的投入行。<span class="pg">p077 p078</span>'},

 {g:'演员表', gn:'每个酶三样：名字 · 干什么 · 方向。「the enzyme」不许出现，每个都点名。'},
 {n:'04', t:'polymerase 的化学',
  big:'DNA polymerase 只能把 dNTP 接到已有链的<b>游离 3′-OH</b> 上 → 合成只能 <b>5′→3′</b>，而且<b>不能起头</b>；反应靠放出并水解<b>焦磷酸</b>推动',
  en:'“DNA polymerase adds a deoxyribonucleotide to the free 3′-hydroxyl at the 3′ end of a growing chain, so the new strand grows only 5′→3′. Five-prime and three-prime are the two sugar carbons that carry the phosphates, so the direction means new units go on at the sugar’s carbon three. The chemistry, in the textbook: the 3′-OH makes a nucleophilic attack on the phosphorus atom of the incoming dNTP — generally, its innermost, alpha phosphate. A phosphodiester bond forms, pyrophosphate is released, and pyrophosphatase hydrolyses it to two phosphates. That release and hydrolysis drives the reaction. And a polymerase cannot start a chain: there must already be a stretch paired with the template and carrying a free 3′-OH. That is the whole reason a primer exists.”',
  note:'p078 给了亲核进攻和 pyrophosphatase 两步；<b>「α-磷酸」书没说</b>，只说「dNTP 的磷原子」，所以带 generally。<b>5′ 和 3′ 是承重名词</b>，同一句里交代了。书说活性中心同时固定三样：模板、新链的 3′-OH 端、进来的 dNTP。<span class="pg">p078</span>'},
 {n:'05', t:'三个 polymerase',
  big:'E. coli 三个 DNA polymerase：<b>I</b> 三种活性；<b>II</b> 和 <b>III</b> 只有 polymerase ＋ 3′→5′ exonuclease；<b>III 是复制酶</b>，I 拆 primer 补缺口',
  tbl:{head:['','polymerase 5′→3′','3′→5′ exo（校对）','5′→3′ exo（拆 primer）','体内干什么'],
       rows:[['pol I','✓','✓','✓','拆 RNA primer、填缺口、修复'],
             ['pol II','✓','✓','—','书：体内功能不明'],
             ['pol III','✓','✓','—','复制酶：合成绝大部分新 DNA']]},
  en:'“E. coli has three DNA polymerases. Polymerase I has three activities on one chain, in three different active sites — polymerase, 3′→5′ exonuclease and 5′→3′ exonuclease. Polymerases II and III have the polymerase and the 3′→5′ exonuclease but not the 5′→3′ one. The in-vivo function the textbook knows is polymerase III’s: it is the replicase and makes most of the new DNA. Polymerase I removes the primers and fills the gaps they leave.”',
  note:'p079–p080。<b>全卡最值钱的 specific 弹药</b>，也正是描述 Taq 和 Kapa 的词汇表（见 17）。数字：蛋白酶把 pol I 切成<b>小片段</b>（36 000，含 5′→3′ 核酸酶）和<b>大片段 Klenow</b>（67 000，polymerase ＋ 3′→5′ exo）。<span class="pg">p079 p080</span>'},
 {n:'06', t:'校对',
  big:'<b>3′→5′ exonuclease ＝ 校对</b>：从 3′-OH 端往回拆，配错的就拆掉；书叫它「<b>第二个纠错者</b>」——第一个是碱基配对本身',
  en:'“An exonuclease takes nucleotides off from an end of a chain, one at a time, by hydrolysis. The 3′→5′ exonuclease of polymerases I and III works from the 3′-OH end backwards, and the textbook calls it a second corrector of base-pairing errors. That is proofreading: a mispaired nucleotide is removed before the chain goes on. The first corrector is base pairing itself: the textbook says the specificity of the hydrogen bonding is what is responsible for the accuracy of replication.”',
  note:'p078 把它叫「the second proofreader」（书上印的那个词的英译）；第一个纠错者是 p073 那句。<b>错误率的数字书里没有</b>——被问就说 generally（见追问）。<span class="pg">p073 p078</span>'},
 {n:'07', t:'5′→3′ 核酸酶',
  big:'pol I 的 <b>5′→3′ 核酸酶</b>从缺口处往下切、一次一段（≤10 nt）：<b>拆 primer</b>、切 UV 造成的<b>嘧啶二聚体</b>；配上聚合活性就是「缺口平移」',
  en:'“A nick is a break in one strand. Polymerase I’s 5′→3′ nuclease is different in kind: it cuts inside the chain, in a double-stranded region, starting at a nick, and removes a piece of up to ten nucleotides. It matters for two reasons: it is how the RNA primer is removed, and it repairs some damage. It excises the pyrimidine dimers that UV light makes, and polymerase I fills the gap. Nuclease and polymerase together move a nick along the strand towards its 3′ end — nick translation.”',
  note:'p079–p080，figure 4.17、4.18。也是「修复」在这本书里的唯一落点（书里没有 repair 那个术语词，0 命中；p079 用的是日常说法「修正」）。<span class="pg">p079 p080</span>'},
 {n:'08', t:'helicase 与 SSB',
  big:'解链是 <b>helicase</b>（DnaB）的活，靠水解 <b>ATP</b>；<b>SSB</b> 抓住分开的单链不让它们重新配对',
  en:'“Unwinding the double helix is done by the helicase, with unwinding proteins, and the energy comes from hydrolysing ATP. In E. coli that helicase is the DnaB protein. It separates the strands moving along the lagging-strand template, and the Rep protein moves along the leading one. Behind the helicase the single strands are held apart by single-strand-binding protein, SSB, which stops them pairing back before they are copied.”',
  note:'p080、p085。<b>拆链的不是 polymerase</b>——陷阱之一；书 p080 末尾说 pol I「在解链上也有一定作用」，见陷阱。⚠ OCR 把 SSB 印成 SBB。<span class="pg">p080 p085</span>'},
 {n:'09', t:'primer 与 primase',
  big:'因为 polymerase 要 3′-OH，所以先由 <b>primase</b> 在解开处合成一段 <b>RNA</b>（≤60 nt）当 primer',
  en:'“Because every DNA polymerase needs a free 3′-OH, a short piece of RNA is made at the melted site to serve as the primer. In the textbook it is up to sixty nucleotides long. An RNA polymerase can start a chain. A DNA polymerase cannot. In E. coli the textbook names two enzymes for it, the transcribing RNA polymerase and a much smaller primase, and assumes both take part. On the lagging strand the primase works inside a protein assembly called the primosome.”',
  note:'p083、p085。<b>为什么是 RNA 而不是 DNA</b> 书没说，见 why 第二级。<span class="pg">p083 p085</span>'},
 {n:'10', t:'ligase',
  big:'<b>DNA ligase</b> 把一条链的 <b>3′-OH</b> 和另一条链的 <b>5′-磷酸</b>连成磷酸二酯键；吸能，E. coli 用 <b>NAD⁺</b>，真核用 <b>ATP</b>；只能接双链里的缺口',
  en:'“DNA ligase makes a phosphodiester bond between the 3′-OH of one DNA chain and the 5′-phosphate of another. The reaction is endergonic, and the energy comes from splitting ATP or, in E. coli, NAD⁺. The ligase first takes an AMP onto the amino group of a lysine and passes it to the 5′-phosphate of the DNA. Then the 3′-OH attacks that activated phosphate and AMP leaves. Ligase cannot join two single-stranded molecules: part of the DNA must be double-stranded. What it does is seal nicks in a duplex.”',
  note:'p081–p082，figure 4.20。<b>陷阱：ligase 不是在合成时连核苷酸的，那是 polymerase</b>；ligase 只封缺口。<span class="pg">p081 p082</span>'},

 {g:'复制叉上的顺序', gn:'题面的「process」要的就是这一组。「两条母链都是模板」＋「polymerase 只走 5′→3′」两句一碰，半不连续就自己推出来。'},
 {n:'11', t:'起点与叉',
  big:'从<b>固定位点</b>起始；E. coli 环状染色体从<b>一个</b>起点<b>双向</b>复制，像希腊字母 <b>θ</b>；解开又同时合成的地方叫<b>复制叉</b>',
  en:'“Replication starts at a specific site in the molecule — generally called the origin. The E. coli chromosome is a closed circle and replicates bidirectionally from a single origin, so the replicating molecule looks like the Greek letter theta. The textbook shows Cairns’s autoradiogram, made by incorporating tritiated thymidine. Only part of the helix is unwound at a time. The place where it is being unwound and copied at the same moment is the replication fork, and two forks make the replication eye, or bubble.”',
  note:'p082、p085、p077。「origin」这个词书没用（0 命中），书说的是「a certain site」（书上那个说法的英译）——带 generally。<span class="pg">p077 p082 p085</span>'},
 {n:'12', t:'半不连续',
  big:'两条母链<b>都当模板</b>；但 polymerase 只走 5′→3′，两条模板又<b>反平行</b>，所以一条新链连续（<b>leading</b>），另一条只能倒着分段做（<b>lagging</b>）',
  en:'“At the fork both parental strands serve as templates. But every known DNA polymerase extends only 5′→3′, and the two parental strands are antiparallel. So on one template the new chain grows continuously in the direction the fork moves: the leading strand. On the other template the new chain must also be made 5′→3′, and that direction is away from the fork. So it is made in pieces: the lagging strand, built as Okazaki fragments. The textbook’s word is semidiscontinuous replication.”',
  note:'p082–p083。<b>反平行的定义在卡 03</b>。<span class="pg">p082 p083</span>'},
 {n:'13', t:'Okazaki 循环',
  big:'每段四步：primase 做 RNA primer → <b>pol III</b> 接 <b>1000–2000 nt</b> → <b>pol I</b> 拆 primer 并补 DNA → <b>ligase</b> 封口',
  en:'“Each Okazaki fragment takes four steps. Primase lays down an RNA primer. Polymerase III extends it into a stretch of about one to two thousand nucleotides in E. coli. Polymerase I removes the RNA primer with its 5′→3′ nuclease and fills the gap with DNA. DNA ligase joins the fragment to the one before it. Then the helix opens further and the cycle runs again. Both strands are made on one complex, the replisome, with the lagging template looped around it so its polymerase can still travel with the fork. The textbook says the replisome is probably two polymerase III holoenzymes.”',
  note:'<b>🪄 邪修记法</b>：「<b>引 · 三 · 一 · 连</b>」＝ primase 做引物 → pol <b>Ⅲ</b> → pol <b>Ⅰ</b> → ligase 连上。Ⅲ 先 Ⅰ 后：大的干活，小的收拾。<br>p083–p085，figure 4.25。⚠ p081 也给了一个 Okazaki 长度，指数被 OCR 吃了（「10ⁿ」）——报 p083 的 1000–2000。真核片段短得多（generally 100–200 nt），书没给。「trombone model」是通用叫法。<span class="pg">p081 p083 p084 p085</span>'},
 {n:'14', t:'画复制叉',
  big:'他让画：一个<b>横躺的 Y</b>，先标两臂的 5′/3′，再画箭头',
  en:'“If I draw it: a Y lying on its side — the stem is the parental duplex, the arms are the separated templates, the fork moves left. On the upper arm the new strand runs continuously towards the fork — leading. On the lower arm short arrows point away from the fork — Okazaki fragments, each starting from a small RNA primer, ligase between them.”',
  note:'<b>画的顺序</b>（书 figure 4.22）：① 横躺的 Y，叉尖朝左 ② 上臂从叉尖往右标 <b>5′→3′</b>（叉端是 5′），下臂从叉尖往右标 <b>3′→5′</b>（叉端是 3′）——反平行 ③ 上臂下面一条长箭头<b>指向叉</b>，箭头尖标 3′，写 leading ④ 下臂上面三段短箭头<b>背离叉</b>，每段左端一小段波浪线＝RNA primer，写 lagging / Okazaki ⑤ 叉尖画 helicase，裸露单链上几个小圆＝SSB ⑥ 两段之间标 ligase。<span class="pg">p083</span>'},

 {g:'账与边界', gn:'合成类的题也要三行账。然后是原核/真核的边界——书只给了两句。'},
 {n:'15', t:'账',
  big:'每接一个核苷酸花掉 <b>两个高能磷酸键</b>；产物是两条各一半旧一半新的双螺旋；<b>合成代谢，耗能，不产 ATP</b>',
  tbl:{head:['','什么'],
       rows:[['投入','n dNTP（每接一个放一个 PPᵢ）· ATP：helicase 每步、真核 ligase 每个缺口 · NAD⁺：E. coli ligase 每个缺口 · NTP：做 primer（之后扔掉）'],
             ['产出','两条双螺旋，各一半旧一半新 · n PPᵢ → 2n Pᵢ（pyrophosphatase）· AMP（每次 ligase）· 拆下来的 primer 核糖核苷酸'],
             ['总结','每个核苷酸两个高能键：一个在成键时放出 PPᵢ，一个在 PPᵢ 被水解时——所以事实上不可逆。合成代谢，耗能，不产 ATP']]},
  en:'“On the balance sheet, four things go in. The four dNTPs, one per nucleotide. ATP for the helicase at every step and for ligase in eukaryotes. NAD⁺ for ligase in E. coli. And ribonucleotides for primers that are thrown away. Out come two double helices, each half old and half new, one pyrophosphate per nucleotide, and one AMP per ligation. Pyrophosphatase splits each pyrophosphate to two phosphates. Net: every nucleotide costs two high-energy phosphate bonds, which is why the reaction is effectively irreversible. Replication is anabolic — it consumes energy and makes none.”',
  note:'三行缺一不可。「两个高能键 → 不可逆」是从 p078 的两步<b>推出来的</b>，书没明写「不可逆」——说成 “which is why”。<span class="pg">p077 p078 p081</span>'},
 {n:'16', t:'原核 vs 真核',
  big:'书只说「真核<b>复杂得多</b>」＋ ligase 用 ATP 不用 NAD⁺；多个起点、pol α/δ/ε、端粒——<b>全部 general</b>',
  en:'“The textbook keeps the E. coli picture and says only that replication is much more complex, especially in eukaryotes, and that eukaryotic ligases use ATP where E. coli’s uses NAD⁺. Generally, and not from the book: a eukaryotic chromosome is linear, with many origins working at once. The polymerases are named by Greek letters. Alpha carries the primase, delta makes the lagging strand, epsilon the leading. And the linear ends, the telomeres, cannot be finished by this machinery, because the last primer leaves a gap. Telomerase, a reverse transcriptase with its own RNA template, extends them.”',
  note:'p083、p081。<b>希腊字母那套和端粒全是通用知识</b>（telomer 0 命中）。<span class="pg">p081 p083</span>'},

 {g:'收尾', gn:'一句停住，一句伸出去。停在「为什么只能 5′→3′」，伸到 Taq / Kapa。'},
 {n:'17', t:'落点',
  big:'为什么所有 polymerase 都只能 5′→3′：成键的能量在<b>进来的 dNTP</b> 上；反过来长，活化端就得放在链上，校对一拆就没了',
  en:'“Why every polymerase runs 5′→3′ the textbook does not say. Generally, the answer is where the energy sits. The bond is paid for by the triphosphate of the incoming nucleotide. If chains grew 3′→5′ the activated triphosphate would have to sit on the growing chain’s 5′ end. And the moment proofreading removed a wrong nucleotide, the chain would lose its activated end and stop. Growing on the 3′-OH means the energy always arrives with the next monomer, so a chain can be corrected and still go on.”',
  note:'Lehninger 的论证，<b>不是书的</b>。停止句在 why 那一屏，落在进化。'},
 {n:'18', t:'留口子',
  big:'书上 pol I 的三种活性，正是我描述 Taq 和 Kapa 的词汇表：<b>Taq</b> ＝ polymerase ＋ 5′→3′ exo，<b>没有</b> 3′→5′ 校对；<b>KAPA HiFi</b> ＝ polymerase ＋ 3′→5′ 校对',
  en:'“The three activities the textbook lists for polymerase I are exactly the vocabulary I use for the enzymes in my own work. Taq polymerase comes from the thermophile Thermus aquaticus, so it survives the 95-degree steps of PCR. It has the polymerase and the 5′→3′ exonuclease, like polymerase I, but no 3′→5′ exonuclease. No proofreading, so it makes errors, and it leaves one untemplated adenine on the 3′ end of its product. KAPA HiFi is an engineered polymerase with the 3′→5′ proofreading exonuclease, so its error rate is far lower and its products are blunt. In directed evolution that difference is a tool. Taq under mutagenic conditions builds a library of variants. KAPA HiFi amplifies a library or a sequencing sample without adding mutations. All of that is laboratory knowledge, not the textbook’s.”',
  note:'这就是题 #5/#10。<b>全部标实验室出处。</b>数字（Taq 约 10⁻⁴–10⁻⁵ 错误/碱基/倍增，Kapa 比 Taq 低约两个数量级）⚠ 待核，核之前只说 “far lower”。'}
],
end:'<b>顺序不能乱：定义 → 半保留 → 需要什么 → 演员表（每个带方向）→ 叉上的顺序 → 账。</b>「polymerase 只能接 3′-OH」是全卡的轴——primer、leading/lagging、Okazaki、校对、PCR 引物设计，全从它推出来。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：DNA 的生物合成，在<b>模板</b>上做，新链顺序由模板碱基顺序决定；<b>半保留</b>',
 '“The biosynthesis of DNA on a template — the order of bases in the template sets the new strand. Semiconservative: each daughter helix keeps one parental strand.”',
 '先说它是什么，再说判据。Meselson–Stahl 书里没有。'],
['<b>需要什么</b>：4 dNTP · 模板 · RNA primer · Mg²⁺',
 '“Four dNTPs, a template, a short RNA primer, and magnesium ions.”',
 'p077。账的投入行。'],
['<b>polymerase</b> 只接<b>游离 3′-OH</b> → <b>5′→3′</b>，<b>不能起头</b>；3′-OH 进攻 dNTP 的磷，放出 PPᵢ 再水解',
 '“Adds to the free 3′-OH, so 5′→3′, and cannot start a chain. Pyrophosphate leaves and is hydrolysed, which drives it.”',
 '全卡的轴。p078。'],
['<b>三个 pol</b>：III 复制酶；I 拆 primer 补缺口，独有 5′→3′ exo；<b>3′→5′ exo ＝ 校对</b>，「第二个纠错者」',
 '“Polymerase III is the replicase. Polymerase I removes primers and fills gaps. The 3′→5′ exonuclease proofreads — the second corrector after base pairing.”',
 'p078–p080 ＋ p073。这张表也是 Taq/Kapa 的词汇表。'],
['<b>helicase</b>（DnaB）解链，水解 ATP；<b>SSB</b> 防复配',
 '“Helicase unwinds with ATP. SSB keeps the single strands from pairing back.”',
 '解链的不是 polymerase。p080。'],
['<b>primer</b> 是 RNA，≤60 nt，<b>primase</b> 做的',
 '“A short RNA, up to sixty nucleotides, made by primase — an RNA polymerase can start a chain, a DNA polymerase cannot.”',
 'p083。'],
['<b>起点与叉</b>：固定位点；E. coli 单起点<b>双向</b>，θ；叉＝解开又同时合成的地方',
 '“From a single origin, bidirectionally — the theta structure. The fork is where unwinding and synthesis happen together.”',
 'p082、p085。origin 这个词书没用。'],
['<b>leading 连续、lagging 分段</b>（Okazaki 1000–2000 nt）：反平行 ＋ 只能 5′→3′',
 '“Leading continuous, lagging in Okazaki fragments — because the templates are antiparallel and synthesis is only 5′→3′.”',
 '两句一碰就推出来。p082–p083。'],
['<b>Okazaki 循环</b>：primer → pol III → pol I 拆补 → <b>ligase</b>（3′-OH ＋ 5′-磷酸；NAD⁺ / ATP；只封双链缺口）',
 '“Primase, polymerase III, polymerase I, then ligase — which joins a 3′-OH to a 5′-phosphate, paid for by NAD⁺ or ATP, only in a duplex.”',
 'p083、p081。题面要的 process 就是这四步。'],
['<b>账</b>：每个核苷酸两个高能键；产 PPᵢ；合成代谢不产 ATP。<b>落点</b>：Taq 无校对，KAPA HiFi 有',
 '“Two high-energy bonds per nucleotide — anabolic. Taq has no 3′→5′ exonuclease. KAPA HiFi has one.”',
 '三行账缺一不可；桥是题 #5/#10，实验室出处。']
],

segs:[
 {tag:'段 1 · 定义', h:'它是什么，半保留，需要什么',
  p:['“DNA replication is the biosynthesis of DNA — from one double helix the cell makes two identical ones. It is synthesis on a template: the order of nucleotides in the new strand is fixed by the order of bases in the template through base pairing. The textbook’s phrase is that the complementary nature of the two strands determines the base order of the new strand. The process itself is a sequence of steps at the replication fork: unwinding, priming, synthesis, joining. That is what I will describe.',
     'It is semiconservative. Each daughter helix keeps one parental strand and gets one new one.',
     'Besides the enzymes it needs the four deoxyribonucleoside triphosphates, DNA as template, a short RNA primer, and magnesium ions.”'],
  note:'<b>三句之后才准报酶名。</b>这三句已经把「模板」「互补」「半保留」「primer」四个承重词放到了台面上，后面每个酶都有地方挂。'},
 {tag:'段 2 · general', h:'演员表：每个酶带方向',
  p:['“The central enzyme is DNA polymerase. It adds a deoxyribonucleotide to the free 3′-hydroxyl of a growing chain: the 3′-OH attacks the phosphorus of the incoming dNTP, a phosphodiester bond forms, pyrophosphate leaves and is hydrolysed. So synthesis is always 5′→3′, and it cannot start a chain: it needs a paired stretch with a free 3′-OH. E. coli has three. Polymerase III is the replicase. Polymerase I removes primers and fills gaps and alone has a 5′→3′ exonuclease. Polymerases I and III both proofread with a 3′→5′ exonuclease — the textbook’s second corrector after base pairing itself.',
     'Around it are four more. Helicase, DnaB, separates the strands using ATP. Single-strand-binding protein keeps them apart. Primase makes the RNA primer, up to sixty nucleotides. And DNA ligase seals nicks, joining a 3′-OH to a 5′-phosphate at the cost of NAD⁺ in E. coli or ATP in eukaryotes.”'],
  note:'<b>每个名字后面紧跟它干什么和方向。</b>只报名字，他下一句就是「那 ligase 到底接的是什么」。'},
 {tag:'段 3 · 稍展开', h:'叉上的顺序——题面的 process',
  p:['“It starts at a specific site — in E. coli a single origin on the circular chromosome, running both ways, giving the theta structure. Where the helix is being unwound and copied at the same time is the replication fork.',
     'At the fork both parental strands are templates. Every polymerase extends only 5′→3′, and the two templates are antiparallel. So one new strand grows continuously towards the fork: the leading strand. The other is made in pieces pointing away from the fork: the lagging strand, built as Okazaki fragments, one to two thousand nucleotides each in E. coli.',
     'Each fragment goes through four steps. Primase lays an RNA primer. Polymerase III extends it. Polymerase I removes the primer with its 5′→3′ nuclease and fills in DNA. Ligase seals the nick. Both strands are made on one complex, the replisome, with the lagging template looped around it.”'],
  note:'〔可裁〕时间够就加账：“Every nucleotide costs two high-energy bonds: one when pyrophosphate leaves, one when pyrophosphatase splits it. So the reaction is effectively irreversible.”'},
 {tag:'段 4 · 留口子', h:'把书的三种活性接到自己手里的酶',
  p:['“The three activities the textbook gives polymerase I are exactly how I describe the enzymes I use. Taq polymerase is thermostable, has the polymerase and the 5′→3′ exonuclease, but no 3′→5′ proofreading. So it makes errors and leaves an untemplated adenine at the 3′ end. KAPA HiFi has the 3′→5′ proofreading activity, so its error rate is far lower. For directed evolution that is a choice I make on purpose: Taq under mutagenic conditions to build a library of variants, KAPA HiFi to amplify a library or a sequencing sample without adding mutations. And primer design in PCR follows the same rule as the primer here. The polymerase only extends a matched 3′-OH, so the 3′ end of a primer must pair exactly. The 5′ end can carry whatever tail I need.”'],
  note:'<b>这个口子是书自己搭的</b>：p079–p080 那张三活性表就是 Taq/Kapa 的语言。他追下去是题 #5，正是她的主场。<b>全部说成实验室知识</b>。'}
],

why:{
 rungs:[
  ['为什么新链的顺序不会错？','两个纠错者。第一个是<b>碱基配对本身</b>——书 p073 说氢键的特异性正是复制准确性的来源；第二个是 <b>3′→5′ exonuclease</b>，书 p078 叫它「the second proofreader」（书上印的那个词的英译），配错的核苷酸在链继续之前被拆掉。'],
  ['为什么需要 primer，而且为什么是 RNA？','需要 primer 是因为 DNA polymerase <b>不能起头</b>（p078）；能起头的是 RNA polymerase 类的酶，所以由 primase 做成 RNA（p083）。<b>为什么偏要 RNA</b> 书没说，generally：起头那几个核苷酸是在没有校对的情况下放上去的，做成 RNA 等于贴了「临时」标签——pol I 把它拆掉，换成校对过的 DNA。'],
  ['那为什么所有 polymerase 都只能 5′→3′？','书只说「所有已知的 DNA polymerase 都只能 5′→3′」（p082）。generally：能量在<b>进来的 dNTP</b> 的三磷酸上。反过来长，活化的三磷酸就得放在链的 5′ 端，校对一拆掉错的核苷酸，链就丢了活化端、停了。长在 3′-OH 上，能量永远跟下一个单体一起来，链可以被纠错并继续。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that we are making a statement about common ancestry rather than mechanism: the arrangement that could be proofread is the one that survived. That is why every polymerase we know shares this one chemistry. The energetics of the pyrophosphate step itself is physical chemistry rather than biochemistry.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p083_obr422_leading_lagging.jpg',
  t:'复制叉 —— 速背 14 说的就是这张（书 Obr. 4.22）',
  cap:'<b>这是这张卡上最要紧的一张，而且图里的标注本来就是英文的：'
    + 'Leading strand · Lagging strand · Parental strands · Motion of replication fork。</b>'
    + '他说 “draw a replication fork”，要的就是这个横着的 Y。'
    + '<br><br><b>画的顺序（六步，就是这张图的骨架）</b>：'
    + '<br>① <b>横着的 Y</b>，叉尖朝右（图上未解开的双螺旋在右边），左边分成上下两臂。'
    + '<br>② <b>四个端先标好 5′/3′</b>：上臂模板左端 3′、新链左端 5′；下臂新链左端 3′、底下 5′。'
    + '<b>先标方向再画箭头，否则必错。</b>'
    + '<br>③ 上臂画<b>一根长箭头指向叉</b>，箭头尖标 3′，旁边写 <b>Leading strand</b>。'
    + '<br>④ 下臂画<b>三段短箭头，全部背离叉</b>，旁边写 <b>Lagging strand</b>。'
    + '<br>⑤ 最上面画<b>一根指向叉的长箭头</b>，写 <b>Motion of replication fork</b>。'
    + '<br>⑥ 右边画两三圈<b>还没解开的双螺旋</b>，写 <b>Parental strands</b>。'
    + '<br><br><b>边画边说的三句</b>：“Every known DNA polymerase can only extend a chain in the <b>five-prime to three-prime</b> direction. '
    + 'The two template strands are <b>antiparallel</b>. Those two facts together force everything else on this figure.”'
    + '<br>“On one template the new chain grows in the same direction as the fork moves, so it is made <b>continuously</b>. That is the <b>leading</b> strand.”'
    + '<br>“On the other template the polymerase would have to run <b>backwards</b>, so it is made in short pieces, each started again behind the fork. '
    + 'That is the <b>lagging</b> strand, and the pieces are <b>Okazaki fragments</b>. The textbook calls the whole thing <b>semidiscontinuous</b> replication.”'
    + '<br><br>⚠ <b>说“discontinuous”是错的，书印的是 semidiscontinuous</b>——因为只有一半不连续。这个词本身就是一个错点。',
  src2:'Biochemie, Obr. 4.22, p083 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p080_obr419_fork_helicase_ssb.jpg',
  t:'叉尖上都有谁 —— helicase（DnaB）和 SSB（书 Obr. 4.19）',
  cap:'<b>这张是上一张的叉尖特写，而且标注也是英文：'
    + 'DnaB protein · SSB · Fork movement · Leading / Lagging strand。</b>'
    + '左边那个套在双螺旋上、带两个旋转箭头的圈，画的就是<b>解旋这个动作</b>。'
    + '两条被拆开的单链上那一串小黑点就是 <b>SSB</b>。'
    + '<br><br><b>画的顺序（三笔，直接加在上一张的叉尖上）</b>：'
    + '<br>① 在叉尖上画一个<b>圈或一团小球</b>，标 <b>helicase（DnaB）</b>，旁边加一个<b>旋转箭头</b>。'
    + '<br>② 两条裸露的单链上画<b>一串小圆</b>，标 <b>SSB</b>。'
    + '<br>③ 叉尖旁边画一根箭头，写 <b>fork movement</b>。'
    + '<br><br><b>边画边说的两句</b>：“<b>Helicase</b> separates the two strands, and the textbook names the <b>DnaB</b> protein. '
    + 'It moves along the <b>lagging-strand</b> template, and the energy comes from <b>ATP hydrolysis</b>.”'
    + '<br>“The separated strands would simply pair up again, so <b>single-strand binding protein</b>, SSB in the textbook, coats them and keeps them apart. '
    + 'It binds the single strand without any sequence preference, and it does not act as an enzyme.”'
    + '<br><br>⚠ <b>书里还有一个没画在图上的蛋白</b>：Rep 蛋白，沿<b>前导链</b>模板走（p080 正文自己说了 “Rep — not shown in the figure”）。'
    + '<b>他问「还有吗」时这一句是现成的答案，而且它证明你看的是正文不只是图。</b>',
  src2:'Biochemie, Obr. 4.19, p080 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p083_obr423_primer_okazaki.jpg',
  t:'一个 Okazaki 片段是怎么开头的 —— RNA primer（书 Obr. 4.23）',
  cap:'<b>两格，上下对照看，标注也是英文：RNA primer → Okazaki fragment。</b>'
    + '上格后随链上只有一小段（那就是引物），下格它已经被接长成一整段。'
    + '<br><br><b>画的顺序（三步，接在复制叉那张上）</b>：'
    + '<br>① 在后随链每一段的<b>右端（靠近叉的那一头）画一小段波浪线或粗线</b>，标 <b>RNA primer</b>。'
    + '<br>② 从那一小段的 <b>3′ 端向左拉一根箭头</b>，写 <b>Okazaki fragment</b>。'
    + '<br>③ 两段之间留一个缺口，标 <b>ligase</b>。'
    + '<br><br><b>边画边说的四句</b>：“The real reason primers exist is that <b>DNA polymerase cannot start a chain</b>. '
    + 'It can only add to a <b>free three-prime OH</b> that is already paired to the template.”'
    + '<br>“So a short piece of <b>RNA</b>, up to about <b>sixty nucleotides</b>, is made first and serves as the starter. '
    + 'In prokaryotes the textbook says both <b>RNA polymerase</b> and the much smaller <b>primase</b> are thought to take part.”'
    + '<br>“Then <b>DNA polymerase III</b> extends it into a piece of about <b>one to two thousand nucleotides</b>. Those pieces are the <b>Okazaki fragments</b>.”'
    + '<br>“Afterwards the RNA is removed, <b>DNA polymerase I</b> fills the gap with DNA, and <b>DNA ligase</b> joins the ends.”'
    + '<br><br><b>一个值钱的反问</b>：他问「为什么引物是 RNA 不是 DNA」时，不要编。'
    + '能从书里说的是：<b>能从无到有开头的是 RNA 聚合酶，DNA 聚合酶做不到</b>，'
    + '所以开头必须交给前者。再往下“为什么这样进化”就是进化地基，说到那里停。',
  src2:'Biochemie, Obr. 4.23, p083 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p084_obr424_primer_removal.jpg',
  t:'引物是怎么被换掉的 —— DNA polymerase I 的那一手（书 Obr. 4.24）',
  cap:'<b>这张是「认」，它把一件很容易说含糊的事画成了一步一步。</b>标注全是英文：'
    + '<b>Template DNA · Nick · RNA primer · DNA · dNTPs · pyrophosphate ion · DNA polymerase I · Newly synthesized DNA · Ribonucleotides</b>。'
    + '<br><br><b>图上按顺序读四件事</b>：'
    + '<br>① 上格：新链上有一个 <b>Nick（缺口）</b>，缺口右边是 <b>RNA primer</b>，再右边才是 <b>DNA</b>。'
    + '<br>② 中间：<b>DNA polymerase I</b> 一边吃 dNTPs、一边吐 <b>焦磷酸根</b>。'
    + '<br>③ 下格：原来是引物的那一段变成了 <b>Newly synthesized DNA</b>。'
    + '<br>④ 右下飞出去的那一堆是 <b>Ribonucleotides</b>——被拆掉的引物。'
    + '<b>整个缺口向右移了一段，这就是书说的 nick translation。</b>'
    + '<br><br><b>看到图要说的那一段</b>：“<b>DNA polymerase I</b> does two things at once here. '
    + 'Its <b>five-prime to three-prime nuclease</b> activity removes the RNA ahead of it, and its polymerase activity fills the same space with DNA. '
    + 'The nick is simply <b>moved along</b> the strand, which is why the textbook calls it shifting the nick. '
    + 'Then <b>DNA ligase</b> seals the last phosphodiester bond and the strand is continuous.”'
    + '<br><br><b>这张图把三个 polymerase 分清楚了</b>：<b>III</b> 是真正的复制酶，合成大部分新 DNA；'
    + '<b>I</b> 去掉引物、填空；<b>II</b> 的体内功能书说不清楚（p080）。<b>“not known” 也是一个可以说出口的答案。</b>',
  src2:'Biochemie, Obr. 4.24, p084 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p078_obr415_em_replication_eye.jpg',
  t:'复制真的被看见过 —— 果蝇 DNA 里的复制眼（书 Obr. 4.15）',
  cap:'<b>这张是「认」，而且它是你在「当年怎么搞清楚的」那一格的回答。</b>'
    + '这是一张<b>电镜照片</b>，不是示意图。一条 DNA 中间<b>鼓出一个沮形的泡</b>，'
    + '两支箭头分别指着这个泡的<b>两个尖端</b>——<b>那两个尖端就是两个复制叉</b>。'
    + '下方那根标尺写着 <b>1 kb</b>，是图里唯一的尺度。'
    + '<br><br><b>看到图要说的那一段</b>：“This is an <b>electron micrograph</b> of a replication <b>eye</b> in Drosophila DNA. '
    + 'The bubble is where the double helix has been opened, and the two arrows mark the two <b>replication forks</b> at its ends. '
    + 'They move in <b>opposite</b> directions, so one origin gives two forks. '
    + 'The textbook points out that the single-stranded regions near the forks are in the <b>trans</b> configuration, which is what the <b>semiconservative</b> model predicts.”'
    + '<br><br><b>为什么这张值得记</b>：他问「how do we know replication is semiconservative」时，'
    + '你除了 Meselson–Stahl 还能再给一条：<b>看得见</b>。'
    + '<b>一个密度梯度实验加一张照片，比两个名字强。</b>',
  src2:'Biochemie, Obr. 4.15, p078 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p082_obr421_theta_autoradiogram.jpg',
  t:'环状染色体复制时是个 theta —— Cairns 的放射自显影（书 Obr. 4.21）',
  cap:'<b>这张也是「认」，上半是底片，下半是书自己给的线条描图。</b>'
    + '线条图里那个英文标注 <b>Replication eye</b> 指的就是中间鼓出来的那一圈。'
    + '左下角那行小字写着照片来自 <b>John Cairns</b>，冷泉港实验室。'
    + '<br><br><b>看到图要说的那一段</b>：“Replicating DNA can be visualised in two ways: by <b>autoradiography</b>, feeding the cells labelled <b>tritiated thymidine</b>, '
    + 'or by <b>electron microscopy</b>. This is the autoradiograph. '
    + 'A replicating <b>E. coli</b> chromosome is a <b>closed circle with a loop inside it</b>, and because that looks like the Greek letter theta the textbook calls it the <b>theta structure</b>.”'
    + '<br><br><b>两张图要一起说，因为它们说的是同一件事</b>：'
    + '果蝇那张（Obr. 4.15）是<b>线形</b> DNA 上的复制眼，这张是<b>环形</b>染色体上的同一个东西。'
    + '<b>环上的复制眼就是 theta。</b>'
    + '<br>⚠ 这张底片本身很淡，<b>不要指望从底片上看出什么</b>；要看的是下面那张描图。',
  src2:'Biochemie, Obr. 4.21, p082 · 250 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is DNA replication?',
  ez:'“D N A replication is the biosynthesis of D N A. One double helix becomes two identical ones. They are made on a template. The order of bases in the parental strand fixes the new one. Base pairing does that. It is semiconservative. Each daughter helix keeps one parental strand. A helicase unwinds the helix at a replication fork. Primase makes a short R N A primer. Polymerase three extends it five prime to three prime.”',
  ezcn:'<b>DNA 复制 ＝ DNA 的生物合成：一条双螺旋变成两条一样的，按模板来做。</b><b>亲本链上的碱基顺序通过碱基配对决定新链的顺序。</b><b>它是半保留的——每条子代双螺旋保留一条亲本链。</b><b>解旋酶在复制叉处把螺旋解开，引发酶做一段短的 RNA 引物，DNA 聚合酶 III 接上去延伸（每个 dNTP 接到游离的 3′-OH 上，所以永远是 5′→3′）。</b><b>因为两条模板反向平行，一条连续合成（前导链），另一条做成冈崎片段（后随链）；聚合酶 I 把引物换成 DNA，连接酶封口。</b><b>准确性来自碱基配对和 3′→5′ 外切酶的校对。</b>',
 mean:'<b>他嘴里的最短问法。</b>答案自带结构：定义 → 半保留 → 叉和演员 → leading/lagging → 校对。说到校对就停，让他挑。',
 say:'“DNA replication is the biosynthesis of DNA — from one double helix, two identical ones, made on a template. The order of bases in the parental strand fixes the order in the new one through base pairing. It is semiconservative — each daughter helix keeps one parental strand. The helix is unwound by a helicase at a replication fork. Primase makes a short RNA primer. DNA polymerase III extends it, adding each dNTP to the free 3′-OH, so always 5′→3′. Because the templates are antiparallel, one strand grows continuously: the leading strand. The other is made in Okazaki fragments: the lagging strand. Polymerase I replaces the primers with DNA and ligase seals the nicks. Accuracy comes from base pairing and from the 3′→5′ exonuclease that proofreads.”'},

{q:'Explain the process of DNA replication.',
  ez:'“I will give it in order. Replication starts at a specific site. The E. coli chromosome has one origin. It runs both ways from there. Helicase separates the strands using A T P. Single strand binding protein holds them apart. Primase lays an R N A primer. No D N A polymerase can start a chain. Polymerase three extends that primer five prime to three prime. It is continuous on the leading strand. It is in fragments on the lagging strand.”',
  ezcn:'<b>按顺序说。</b><b>复制从一个特定位点开始——大肠杆菌染色体只有一个起点，从那里向两个方向进行。</b><b>解旋酶用 ATP 把两条链分开，单链结合蛋白把它们撑住；引发酶铺一段 RNA 引物，因为没有任何 DNA 聚合酶能起始一条链。</b><b>聚合酶 III 从引物开始 5′→3′ 延伸：前导链上连续，后随链上做成 1000–2000 个核苷酸的冈崎片段，因为那条模板方向相反。</b><b>聚合酶 I 用它的 5′→3′ 核酸酶去掉每个引物并补上缺口，DNA 连接酶把片段接起来（花掉 NAD⁺）。</b><b>螺旋继续打开，循环重复，直到出现两条完整的半保留双螺旋。</b>',
 mean:'<b>卷面题面。</b>「process」＝他要<b>顺序</b>，不是清单。按叉上的事件先后说。',
 say:'“In order: replication starts at a specific site — one origin on the E. coli chromosome, running both ways. Helicase separates the strands using ATP and single-strand-binding protein holds them apart. Primase lays an RNA primer, because no DNA polymerase can start a chain. Polymerase III extends the primer 5′→3′ — continuously on the leading strand, in one-to-two-thousand-nucleotide Okazaki fragments on the lagging strand, since that template runs the other way. Polymerase I removes each primer with its 5′→3′ nuclease and fills the gap. DNA ligase joins the fragments, spending NAD⁺. The helix opens further and the cycle repeats until two complete semiconservative helices exist.”'},

{q:'What does semiconservative mean?',
  ez:'“Semiconservative means each product helix has two kinds of strand. One old strand and one new strand. So the parental helix is split between the two daughters. It is not kept whole. It is not dispersed either. The textbook states it directly. It also shows an electron micrograph of a replication eye. That picture fits the model. The classic proof is general knowledge.”',
  ezcn:'<b>半保留的意思是：每一条产物双螺旋由一条旧链和一条新链组成。</b><b>亲本螺旋是被分给两个子代的，既不是整条保留下来，也不是被打散。</b><b>书直接陈述了这一点，还给了一张复制眼的电镜照片，跟这个模型相符。</b>⚠ <b>经典证明（Meselson 和 Stahl 1958 年的密度标记实验）是通用知识。</b>',
 mean:'核心词正面定义，一句，再给书的证据。',
 say:'“Semiconservative means each product double helix is made of one old strand and one new strand. The parental helix is split between the two daughters rather than kept whole or dispersed. The textbook states it and shows an electron micrograph of a replication eye that fits the model. The classic proof is general knowledge — Meselson and Stahl’s density-labelling experiment, 1958.”'},

{q:'What is a primer, and why is it RNA?',
  ez:'“A primer is a short stretch of nucleotides. It is paired to the template. It offers a free three prime hydroxyl. D N A polymerase extends from there. In the cell it is a piece of R N A. It can be up to sixty nucleotides. Primase makes it. D N A polymerases cannot start a chain. R N A polymerases can. Why it is R N A the textbook does not say.”',
  ezcn:'<b>引物 ＝ 一小段跟模板配对的核苷酸，提供一个游离的 3′-OH 让 DNA 聚合酶从那里延伸。</b><b>细胞里它是一段 RNA，最长可到 60 个核苷酸，由引发酶合成——因为 DNA 聚合酶不能起始一条链，而 RNA 聚合酶可以。</b>⚠ <b>「为什么是 RNA 而不是 DNA」书没有说。</b><b>通用的解释是：最前面那几个核苷酸是在没有校对的情况下铺下去的，做成 RNA 就等于给它们打上「临时」的标记；聚合酶 I 随后把它们换成经过校对的 DNA。</b>',
 mean:'定义 ＋ 一个书里没有的 why。<b>先划清出处再解释。</b>',
 say:'“A primer is a short stretch of nucleotides paired to the template that offers a free 3′-OH for DNA polymerase to extend. In the cell it is a piece of RNA up to sixty nucleotides, made by primase, because DNA polymerases cannot start a chain and RNA polymerases can. Why RNA rather than DNA the textbook does not say. Generally, the first nucleotides are laid down without proofreading, and making them of RNA marks them as temporary. Polymerase I removes them and replaces them with proofread DNA.”'},

{q:'What are Okazaki fragments?',
  ez:'“Okazaki fragments are the short pieces of the lagging strand. The lagging strand is made in those pieces. Each one starts from its own R N A primer. Each is extended five prime to three prime. That direction points away from the fork. In the textbook they are one to two thousand nucleotides. That is in E. coli. They are generally much shorter in eukaryotes. Polymerase one removes their primers. Ligase then joins them.”',
  ezcn:'<b>冈崎片段 ＝ 后随链被合成时的那些短片段。</b><b>每一段都从自己的 RNA 引物起始，5′→3′ 地朝远离复制叉的方向延伸。</b><b>书给的长度是大肠杆菌里 1000–2000 个核苷酸（真核里通常短得多，这是通用说法）。</b><b>聚合酶 I 去掉它们的引物，连接酶把它们接成一条连续的链。</b>',
 mean:'正面定义，带书的数字。',
 say:'“Okazaki fragments are the short pieces in which the lagging strand is made. Each is started from its own RNA primer and extended 5′→3′ away from the fork. In the textbook they are about one to two thousand nucleotides in E. coli, and generally much shorter in eukaryotes. Polymerase I removes their primers and ligase joins them into one continuous strand.”'},

{q:'What is the difference between the leading and the lagging strand?',
  ez:'“There is one axis. It is the direction of synthesis relative to the fork. Both new strands are made five prime to three prime. The difference is what that means on each template. On one template that direction points towards the fork. So that strand grows continuously as the fork opens. It is the leading strand. The other template is antiparallel. There the direction points away from the fork. So that strand can only be made in pieces.”',
  ezcn:'<b>只有一根轴：合成方向相对于复制叉是朝哪边。</b><b>两条新链都是 5′→3′ 合成的，差别在于这在各自的模板上意味着什么。</b><b>在一条模板上，5′→3′ 正好指向复制叉，所以那条链随着叉打开而连续生长——前导链。</b><b>在另一条反向平行的模板上，它指向背离复制叉的方向，所以那条链只能一段一段地做，每一段都要等足够长的模板露出来——后随链，那些片段就是冈崎片段，最后由连接酶接起来。</b>',
 mean:'<b>比较题的形状</b>：先给轴（相对于叉的方向），再填。',
 say:'“One axis: the direction of synthesis relative to the fork. Both new strands are made 5′→3′ — the difference is what that means on each template. On one template 5′→3′ points towards the fork, so that strand grows continuously as the fork opens — the leading strand. On the other, antiparallel template it points away from the fork, so that strand can only be made in pieces: the lagging strand. Each piece waits for enough template to be exposed. Those are the Okazaki fragments, later joined by ligase.”'},

{q:'What is the difference between replication, transcription and PCR?',
  ez:'“All three copy a template by base pairing. Replication copies both strands of the whole molecule. The product is D N A. Helicase opens it. R N A primers start it. It happens once per cell cycle. Transcription copies one strand of one gene. The product is R N A. R N A polymerase does it and needs no primer. It ends at a terminator. P C R is laboratory work and not in the book. Two synthetic primers define the stretch. Heat replaces the helicase.”',
  ezcn:'<b>三个都是靠碱基配对抄模板。</b><b>复制：抄整个分子的两条链，产物是 DNA，由解旋酶打开、由 RNA 引物起始，每个细胞周期一次。</b><b>转录：只抄一个基因的一条链（书说的编码链），产物是 RNA，由 RNA 聚合酶完成、不需要引物，在终止子处结束。</b><b>PCR：实验室的东西，书里没有；抄的是两条人工合成 DNA 引物界定的一段，用热代替解旋酶来分开两条链——不需要引发酶、不需要去引物、不需要连接酶，而且每一圈把产物翻一倍。</b>',
 mean:'三个都是「在模板上合成核酸」，<b>轴是：谁解链、要不要 primer、产物是什么、抄一条还是两条</b>。',
 say:'“All three copy a template by base pairing. Replication copies both strands of the whole molecule into DNA, opened by helicase, started by RNA primers, once per cell cycle. Transcription copies one strand of one gene into RNA — the textbook’s coding strand. It is done by RNA polymerase, which needs no primer, and ends at a terminator. PCR is laboratory, not the book. It copies a stretch defined by two synthetic DNA primers, and uses heat instead of helicase to separate the strands. It needs no primase, no primer removal and no ligase, and it doubles the product every cycle.”'},

{q:'Why does a cell have to copy its DNA before it divides?',
  ez:'“Because each daughter cell needs a complete copy. It needs the genetic information. And the information is the base sequence. The textbook makes the point plainly. D N A is the material carrier of heredity. Its structure explains how heredity is passed on. Complementarity is the reason. Each strand can serve as a template for the other. So one helix becomes two identical ones. Each one keeps one parental strand.”',
  ezcn:'因为<b>每个子细胞都需要一份完整的遗传信息拷贝，而信息就是碱基序列</b>。<b>书的要点是：DNA 是遗传的物质载体，而它的结构解释了遗传是怎么传下去的。</b><b>原因是互补性——每条链都能充当另一条的模板，所以一条螺旋变成两条一样的，每条各保留一条亲本链。</b><b>没有复制，就会有一个子细胞没有基因组。</b>', odd:1,
 mean:'问的是<b>半保留 ＋ 遗传</b>——书 §4.1.3 的标题。',
 say:'“Because each daughter cell needs a complete copy of the genetic information, and the information is the base sequence. The textbook’s point is that DNA is the material carrier of heredity and that its structure explains how it is passed on. Complementarity lets each strand serve as a template for the other, so one helix becomes two identical ones, each with one parental strand. Without replication one daughter would have no genome.”'},

{q:'Why do we age — what are telomeres?',
  ez:'“I should say first that the textbook does not cover this. A linear chromosome cannot be finished by this machinery. The lagging strand needs a primer at its very end. That primer is then removed. And nothing can fill the gap. A polymerase only extends a three prime hydroxyl. There is none upstream of that gap. So the ends get shorter each round. Those ends are the telomeres. They are repeated non coding sequence.”',
  ezcn:'⚠ <b>先说一句：这本书完全没有这部分，以下全是通用的。</b><b>线性染色体没法被这套机器做完：后随链在最末端需要一个 RNA 引物，而这个引物被去掉之后，那个缺口没人能补——聚合酶只能从一个 3′-OH 往下延伸，而那个缺口上游没有 3′-OH。</b><b>所以每复制一轮末端就短一点，那些末端就是端粒：重复的非编码序列。</b><b>必须一直分裂的细胞用端粒酶（一种自带 RNA 模板的逆转录酶）把它们补长；大多数体细胞不表达它，而端粒缩短是跟细胞衰老相关的计数器之一。</b>', odd:1,
 mean:'<b>书里 0 命中</b>，全部 general。答案落在「最后一个 primer 留下的缺口」上——这张卡的逻辑。',
 say:'“Generally — the textbook does not cover it. A linear chromosome cannot be finished by this machinery. The lagging strand needs an RNA primer at its very end, and when that primer is removed nothing can fill the gap. A polymerase only extends a 3′-OH, and there is none upstream. So each round the ends get shorter — the telomeres, repeated non-coding sequence. Cells that must keep dividing use telomerase, a reverse transcriptase carrying its own RNA template, to extend them. Most somatic cells do not, and telomere shortening is one of the counters associated with cellular ageing.”'},

{q:'Why does an antibiotic like ciprofloxacin kill bacteria?',
  ez:'“I should say the enzyme is not in the textbook. Ahead of a replication fork the unopened helix gets overwound. In E. coli D N A gyrase relieves that. Gyrase is a topoisomerase. It cuts both strands and reseals them. Ciprofloxacin traps gyrase on the D N A. It traps it with the strands cut. So replication stalls. And the chromosome breaks. Human topoisomerases differ enough for the drug to be selective.”',
  ezcn:'⚠ <b>先说一句：这个酶书里没有。</b><b>复制叉前方那段还没打开的螺旋会被拧得过紧，大肠杆菌里由 DNA 旋转酶（一种拓扑异构酶）切开两条链再封回去，以缓解这种超螺旋。</b><b>环丙沙星把旋转酶卡在 DNA 上、而且是卡在「链已经被切开」的状态，于是复制停摆、染色体断裂。</b><b>人的拓扑异构酶差别够大，所以这个药有选择性。</b><b>书在 p076 提到了环状 DNA 的超螺旋，但没有提这个酶。</b>', odd:1,
 mean:'问的是 <b>gyrase</b>。书只提了超螺旋（p076），没有酶名。',
 say:'“Generally — the enzyme is not in the textbook. Ahead of a replication fork the unopened helix gets overwound, and in E. coli DNA gyrase, a topoisomerase, cuts and reseals both strands to relieve that supercoiling. Ciprofloxacin traps gyrase on the DNA with the strands cut, so replication stalls and the chromosome breaks. Human topoisomerases are different enough that the drug is selective. The textbook mentions supercoiling of circular DNA on p076, not the enzyme.”'},

{q:'What does proofreading mean for the mutation rate?',
  ez:'“The textbook gives no numbers here. So the following is general. Base pairing alone gives roughly one error in ten thousand. It may be one in a hundred thousand. Proofreading then lowers that. The three prime to five prime exonuclease does it. It lowers it by two to three orders of magnitude. Mismatch repair acts after replication. It brings the final rate much lower again. The point of proofreading is its timing. It acts while the mispair is still at the three prime end.”',
  ezcn:'⚠ <b>书没有给数字，以下是通用值（Lehninger 量级）。</b><b>单靠碱基配对，错误率大约是每 10⁴–10⁵ 个碱基一个；3′→5′ 外切酶的校对把它再降两到三个数量级；复制之后的错配修复把最终突变率带到大肠杆菌里每代每碱基约 10⁻⁹–10⁻¹⁰。</b><b>突变率就是「三道关之后还活下来的那些」。</b><b>校对的要点在时机：它是在错配还挂在 3′ 端的时候动手的。</b>', odd:1,
 mean:'他要数字。<b>书里没有</b>——按 LOGIC §11：先说判据，再给 general 数，标明出处。',
 say:'“The textbook gives no numbers. Generally, base pairing alone gives roughly one error in ten thousand to a hundred thousand. Proofreading by the 3′→5′ exonuclease takes it down by two to three orders of magnitude. And mismatch repair after replication brings the final rate to about one in a billion to ten billion per base per generation in E. coli. The mutation rate is what survives all three, and the point of proofreading is that it acts while the mispair is still at the 3′ end.”',
 tail:'⚠ 三个数全是通用值（Lehninger 量级），不是书的。核之前不要说得比这更精确。'},

{q:'Why is the lagging strand called lagging?',
  ez:'“Because it lags behind the fork. Its template runs the other way. So five prime to three prime synthesis points away from the fork. The polymerase therefore cannot follow the helicase. It has to wait. A stretch of template must be exposed first. Then it makes a fragment backwards. Then it waits again. The leading strand keeps pace with the fork. The lagging strand is always one fragment behind.”',
  ezcn:'因为<b>它落在复制叉后面</b>。<b>它的模板方向反过来，所以 5′→3′ 的合成指向背离复制叉的方向，聚合酶没法跟着解旋酶走。</b><b>它必须等——先等一段模板露出来，再倒着做一个片段，然后再等。</b><b>前导链跟得上复制叉，后随链永远慢一个片段。</b>', odd:1,
 mean:'问的是<b>方向 ＋ 等待</b>。',
 say:'“Because it lags behind the fork. Its template runs so that 5′→3′ synthesis points away from the fork, so the polymerase cannot follow the helicase. It has to wait until a stretch of template is exposed, make a fragment backwards, then wait again. The leading strand keeps pace with the fork. The lagging strand is always a fragment behind.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'演员表里的每个词都可能被单独拎出来。每条先说它是什么。', items:[
{r:'中', q:'What is proofreading?',
  ez:'“Proofreading removes a wrongly paired nucleotide. It removes it from the three prime end. That is the end of the growing chain. The polymerase’s own three prime to five prime exonuclease does it. It happens before the chain is extended further. The textbook calls it the second corrector. The first is the specificity of base pairing itself. Polymerases one and three both have it. Taq polymerase does not.”',
  ezcn:'<b>校对 ＝ 在链继续延伸之前，由聚合酶自己的 3′→5′ 外切酶把正在生长的链 3′ 端那个配错了的核苷酸切掉。</b><b>书叫它「碱基配对错误的第二个纠正者」——第一个是碱基配对本身的专一性。</b><b>聚合酶 I 和 III 都有；实验室里的 Taq 没有。</b>',
 en:'“Proofreading is the removal of a wrongly paired nucleotide from the 3′ end of the growing chain by the polymerase’s own 3′→5′ exonuclease, before the chain is extended further. The textbook calls it the second corrector of base-pairing errors — the first is the specificity of base pairing itself. Polymerases I and III have it. Taq polymerase, in the laboratory, does not.”',
 cn:'核心词正面定义。书的词是「第二个纠错者」。'},
{r:'高', q:'What is a template?',
    ez:'“A template is an existing strand of D N A. Its base sequence dictates the new strand. It dictates it by base pairing. The textbook’s word for it is matrix. The new strand is complementary to the template. It is not identical to it.”',
    ezcn:'<b>模板 ＝ 已经存在的那条 DNA 链</b>，<b>它的碱基序列通过碱基配对决定在它上面造出来的新链</b>。<b>书用的词是 matrix。</b>⚠ <b>新链跟模板是互补的，不是相同的。</b>',
 en:'“A template is the existing strand of DNA whose base sequence dictates, by base pairing, the sequence of the strand being made on it. The textbook’s word is matrix. The new strand is complementary to it, not identical.”',
 cn:'p076。<b>互补不等于相同</b>，卡 03 第 07 点。'},
{r:'高', q:'What is a DNA polymerase?',
    ez:'“A D N A dependent D N A polymerase replicates D N A. It adds deoxyribonucleotides one at a time. It adds them to the free three prime hydroxyl of a chain. That chain must already be paired with a template. It always works five prime to three prime. It chooses each nucleotide by complementarity. And it releases pyrophosphate. The textbook says these enzymes are fully responsible for preserving the genetic information.”',
    ezcn:'<b>DNA 依赖的 DNA 聚合酶就是复制 DNA 的那个酶。</b>它<b>一次一个地把脱氧核苷酸接到一条「已经跟模板配对好的链」的游离 3′-羟基上</b>，<b>永远 5′→3′</b>，<b>每一个都按跟模板碱基互补来挑</b>，<b>同时放出焦磷酸</b>。书说：<b>这些酶对新分子里遗传信息的保存负全部责任。</b>',
 en:'“A DNA-dependent DNA polymerase is the enzyme that replicates DNA. It adds deoxyribonucleotides one at a time to the free 3′-OH of a chain paired with a template, always 5′→3′. It chooses each one by complementarity to the template base, and releases pyrophosphate. The textbook says these enzymes are fully responsible for preserving the genetic information in the new molecule.”',
 cn:'p076、p078。<b>DNA-dependent</b> 值得说：p085 还有 RNA-dependent 的 DNA polymerase（逆转录酶）。'},
{r:'高', q:'What is an exonuclease — and an endonuclease, and a nick?',
    ez:'“An exonuclease hydrolyses nucleotides off from an end. It takes them one at a time. Three to five works from the three prime end. Five to three works from the five prime end. An endonuclease cuts inside a chain instead. A nick is a break in one strand of a duplex. It is one missing phosphodiester bond. The textbook notes something about polymerase one. Its five to three activity is different in kind. It starts at a nick. It cuts within a double stranded region. It takes off up to ten nucleotides. So it is endonucleolytic in effect.”',
    ezcn:'<b>外切酶从链的一端一个一个水解掉核苷酸</b>：<b>3′→5′ 从 3′ 端走，5′→3′ 从 5′ 端走</b>。<b>内切酶是在链的中间切</b>。<b>缺口 nick ＝ 双链里一条链断了，少一个磷酸二酯键</b>。书特别注了一句：<b>Pol Ⅰ 的 5′→3′ 活性性质不同</b>——<b>它从一个缺口起步，在双链区里切，一次拿掉最多十个核苷酸，效果上是内切的。</b>',
 en:'“An exonuclease hydrolyses nucleotides off from an end of a chain, one at a time — 3′→5′ from the 3′ end, 5′→3′ from the 5′ end. An endonuclease cuts inside a chain. A nick is a break in one strand of a duplex — one missing phosphodiester bond. The textbook notes that polymerase I’s 5′→3′ activity is different in kind. It starts at a nick, cuts within a double-stranded region and takes off up to ten nucleotides — endonucleolytic in effect.”',
 cn:'p078–p079。也是限制酶的定义入口——她的主场。'},
{r:'中', q:'What is a helicase — and SSB?',
  ez:'“A helicase separates the two strands of a double helix. It breaks the hydrogen bonds between the bases. That costs A T P. And it moves along one strand. In E. coli that protein is Dna B. It sits on the lagging strand template. Single strand binding protein is the other one. S S B coats the separated strands. So they cannot pair back before being copied. It binds only. It does not cut or join.”',
  ezcn:'<b>解旋酶把双螺旋的两条链分开：打断碱基之间的氢键，代价是 ATP，同时沿着一条链移动。</b><b>大肠杆菌里是 DnaB 蛋白，坐在后随链模板上。</b><b>单链结合蛋白（SSB）随后包住分开的单链，防止它们在被复制之前又配回去。</b><b>它只结合，不切也不连。</b>',
 en:'“A helicase separates the two strands of a double helix, breaking the hydrogen bonds between the bases at the cost of ATP and moving along one strand. In E. coli that is the DnaB protein, on the lagging-strand template. Single-strand-binding protein, SSB, then coats the separated strands and prevents them pairing back before they are copied. It binds, it does not cut or join.”',
 cn:'p080、p085。OCR 印成 SBB。'},
{r:'中', q:'What is primase?',
  ez:'“Primase is a small R N A polymerase. It makes the R N A primer. That is a short chain started from nothing. It is started on the template. D N A polymerase then extends it. The textbook says two enzymes are thought to take part in E. coli. One is the transcribing R N A polymerase. The other is the much smaller primase. On the lagging strand primase works within the primosome.”',
  ezcn:'<b>引发酶是一个小的 RNA 聚合酶，负责做 RNA 引物——一条在模板上「从无到有」起始的短链，随后由 DNA 聚合酶接着延伸。</b><b>书说大肠杆菌里被认为有两个参与者：负责转录的那个 RNA 聚合酶，和小得多的引发酶。</b><b>在后随链上，引发酶是在引发体（primosome）里工作的——那个亚组装体同时带着解旋酶。</b><b>对聚合酶 III 来说，holoenzyme 指的是完整的多亚基复合物。</b>',
 en:'“Primase is a small RNA polymerase that makes the RNA primer — a short chain started from nothing on the template. DNA polymerase then extends it. In E. coli the textbook says the transcribing RNA polymerase and the much smaller primase are both thought to take part. On the lagging strand primase works within the primosome — the sub-assembly that also carries the helicase. Holoenzyme, for polymerase III, means the complete multi-subunit complex.”',
 cn:'p083–p085。holoenzyme 在卡 18 是「酶 ＋ 辅因子」，这里是多亚基完整复合物，同一个词两种用法。'},
{r:'高', q:'What is DNA ligase?',
    ez:'“D N A ligase seals a nick. It forms one phosphodiester bond. That bond joins a three prime hydroxyl to a five prime phosphate. Those two lie next to each other in one strand of a duplex. The reaction is endergonic. E. coli pays for it with N A D plus. Eukaryotes pay with A T P. Both go through an A M P intermediate on a lysine. Ligase cannot join two single strands.”',
    ezcn:'<b>DNA 连接酶封的是缺口</b>：<b>在双链的一条链上，把彼此相邻的 3′-羟基和 5′-磷酸之间那一根磷酸二酯键接起来</b>。<b>这个反应是吸能的</b>，<b>大肠杆菌用 NAD⁺ 付账，真核用 ATP</b>，<b>都经过一个连在赖氨酸上的 AMP 中间物</b>。⚠ <b>它接不了两条游离的单链。</b>',
 en:'“DNA ligase seals a nick: it forms the phosphodiester bond between a 3′-OH and a 5′-phosphate that lie next to each other in one strand of a duplex. It is endergonic and is paid for by NAD⁺ in E. coli or ATP in eukaryotes, through an AMP intermediate on a lysine. It cannot join two single strands.”',
 cn:'p081–p082，figure 4.20。'},
{r:'中', q:'What is a topoisomerase — gyrase?',
  ez:'“Generally, because it is not in the textbook. A topoisomerase changes the topology of D N A. It cuts one strand or both. Then it lets the helix rotate. Then it reseals the cut. Gyrase is the E. coli one that introduces negative supercoils. A moving fork overwinds the helix ahead of itself. Gyrase relieves that. The textbook does mention supercoiling of circular D N A. But it names no enzyme.”',
  ezcn:'⚠ <b>generally——书里没有这个酶。</b><b>拓扑异构酶改变 DNA 的拓扑状态：切开一条链或两条链，让螺旋转一下，再把切口封回去。</b><b>旋转酶（gyrase）是大肠杆菌里引入负超螺旋的那一个，用来缓解移动中的复制叉在自己前方造成的过度缠绕。</b><b>书提到了环状 DNA 的超螺旋，但没有点任何酶的名字。</b>',
 en:'“Generally — not in the textbook: a topoisomerase changes the topology of DNA by cutting one strand, or both, letting the helix rotate, and resealing it. Gyrase is the E. coli topoisomerase that introduces negative supercoils, relieving the overwinding a moving fork creates ahead of itself. The textbook mentions supercoiling of circular DNA but names no enzyme.”',
 cn:'topoisomer / gyras 0 命中；超螺旋只在 p076。<b>先说不在书里。</b>'},
{r:'中', q:'What is the origin of replication?',
  ez:'“The origin is the specific site where replication begins. The textbook says replication is bound to a particular place. It also says the E. coli chromosome has a single origin. Replication runs from it in both directions. Generally the word for it is origin. And a plasmid carries one of its own. That is why a plasmid replicates independently. It does not depend on the chromosome.”',
  ezcn:'<b>复制起点 ＝ 复制开始的那个特定位点。</b><b>书说复制是绑定在一个特定的地方的，而大肠杆菌染色体只有一个起点，从那里向两个方向进行。</b><b>通用地说这个词就是 origin；而质粒自带一个，这正是它能独立于染色体复制的原因。</b>',
 en:'“The origin is the specific site where replication begins. The textbook says replication is bound to a particular place, and that the E. coli chromosome replicates from a single origin, bidirectionally. Generally the word is origin, and a plasmid carries one of its own, which is why it replicates independently of the chromosome.”',
 cn:'p082、p085。「origin」这个词书没用。plasmid 那半句接大本营卡 `x_plasmid`。'},
{r:'中', q:'What is the replication fork?',
  ez:'“It is the place where the double helix is being unwound. And at the same moment both exposed strands are being copied. Only part of the helix is open at any time. A bubble has a fork at each end. In E. coli the two forks move away from one origin. They move in opposite directions.”',
  ezcn:'<b>复制叉 ＝ 分子上「双螺旋正在被解开、而同一时刻两条露出来的链正在被复制」的那个地方。</b><b>任何时候只有一部分螺旋是打开的；一个复制泡两端各有一个叉，而大肠杆菌里这两个叉从同一个起点朝相反方向离开。</b>',
 en:'“The place in the molecule where the double helix is being unwound and, at the same moment, both exposed strands are being copied. Only part of the helix is open at any time. A bubble has a fork at each end, and in E. coli the two forks move away from a single origin in opposite directions.”',
 cn:'p082 原话。'},
{r:'中', q:'What is processivity?',
  ez:'“Generally, because the word is not in the textbook. Processivity is how many nucleotides a polymerase adds at one go. It is how many it adds before letting go of the template. Polymerase three is highly processive. A sliding clamp holds it on the D N A. Polymerase one is not processive. That suits short gap filling. Taq is moderately processive. That is one reason extension time follows product length.”',
  ezcn:'⚠ <b>generally——书里没有这个词。</b><b>持续合成能力（processivity）＝ 一个聚合酶在松开模板之前一口气能接上多少个核苷酸。</b><b>聚合酶 III 的持续性很高，因为有一个滑动钳把它按在 DNA 上；聚合酶 I 不高，而那正适合补短缺口。</b><b>Taq 是中等——这也是 PCR 延伸时间要按产物长度设定的原因之一。</b>',
 en:'“Generally — not in the textbook: processivity is how many nucleotides a polymerase adds before it lets go of the template. Polymerase III is highly processive because a sliding clamp holds it on the DNA. Polymerase I is not, which suits short gap-filling. Taq is moderately processive — one reason PCR extension time is set by product length.”',
 cn:'通用。sliding clamp 只在 figure 4.25 的图注里出现。'},
{r:'中', q:'What is the Klenow fragment?',
  ez:'“It is the large piece of polymerase one. A protease cuts the enzyme in two. The large piece has molecular weight sixty seven thousand. It carries the polymerase activity. It also carries the three prime to five prime exonuclease. But it does not carry the five prime to three prime nuclease. That one stays on the small fragment. The small fragment is thirty six thousand. Klenow is the classic laboratory polymerase for filling in ends.”',
  ezcn:'<b>Klenow 片段 ＝ 蛋白酶把聚合酶 I 切成两段之后剩下的那个大片段：分子量 67 000，带着聚合酶活性和 3′→5′ 外切酶，但不带 5′→3′ 核酸酶</b>（<b>那个留在 36 000 的小片段上</b>）。<b>它是实验室里补平末端的经典聚合酶。</b>',
 en:'“The large piece of polymerase I left when a protease cuts off the small fragment: molecular weight 67 000, carrying the polymerase and the 3′→5′ exonuclease but not the 5′→3′ nuclease. That nuclease stays on the small fragment of 36 000. It is the classic laboratory polymerase for filling in ends.”',
 cn:'p079–p080。最后半句是实验室用法。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方。书没有理由的先划清出处。', items:[
{r:'高', q:'Why can a polymerase only extend a 3′-OH?',
    ez:'“The textbook states the rule and gives the chemistry. It does not give the reason. The reason is general. The energy for each new bond sits on the incoming nucleotide. It sits in its triphosphate. Now suppose chains grew the other way. Then the activated triphosphate would sit on the growing chain’s five prime end. Every proofreading step removes a wrong nucleotide. It would then also remove the activation. And the chain would end there. Growing on the three prime hydroxyl avoids that. The energy always comes with the next monomer.”',
    ezcn:'书<b>给了规则和化学，但没给理由</b>。理由是通用的：<b>每一根新键的能量都在「进来的那个核苷酸」身上，在它的三磷酸里</b>。<b>假如链往反方向长，那个活化的三磷酸就会挂在正在生长的链的 5′ 端</b>——<b>而校对每拆掉一个错的核苷酸，就顺手把活化也拆掉了，链就到此为止</b>。<b>在 3′-羟基上生长就没这个问题：能量永远是跟着下一个单体一起来的。</b>',
 en:'“The textbook states the rule and gives the chemistry but not the reason. Generally: the energy for each new bond sits on the incoming nucleotide, in its triphosphate. If chains grew the other way, the activated triphosphate would sit on the growing chain’s 5′ end, and every proofreading step that removed a wrong nucleotide would also remove the activation and end the chain. Growing on the 3′-OH means the energy always comes with the next monomer.”',
 cn:'Lehninger 的论证。why 梯子第三级。'},
{r:'高', q:'Why is the primer RNA rather than DNA?',
    ez:'“The textbook gives the direct reason. D N A polymerases cannot start a chain. R N A polymerase type enzymes can. The deeper reason is general knowledge. Primer synthesis has no proofreading. So those first nucleotides are the least accurate in the strand. Making them of R N A labels them as temporary. Polymerase one then removes them. It replaces them with proofread D N A.”',
    ezcn:'书给的直接理由：<b>DNA 聚合酶不能起始一条链，而 RNA 聚合酶那一类能。</b><b>更深的理由是通用知识</b>：<b>引物合成没有校对，所以那头几个核苷酸是整条链上最不准的</b>——<b>做成 RNA 等于给它们贴上「临时」的标签</b>，<b>随后 Pol Ⅰ 把它们拆掉，换成校对过的 DNA。</b>',
 en:'“The direct reason in the textbook is that DNA polymerases cannot start a chain and RNA-polymerase-type enzymes can. The deeper reason is general knowledge: primer synthesis has no proofreading, so those first nucleotides are the least accurate in the strand. Making them of RNA labels them as temporary, and polymerase I removes and replaces them with proofread DNA.”',
 cn:'p078、p083 ＋ 通用。'},
{r:'高', q:'Why is pyrophosphate hydrolysed — why two steps?',
    ez:'“Because the bond forming step alone is close to reversible. One phosphoanhydride bond is spent. One phosphodiester bond is made. So the balance is nearly even. Pyrophosphatase then hydrolyses the released pyrophosphate. It gives two phosphates. That spends a second high energy bond. It pulls the equilibrium far to the product side. The textbook says the reaction is driven by the release and hydrolysis of the diphosphate. The same trick appears elsewhere. It appears in the ligase reaction. It also appears in aminoacyl tRNA formation.”',
    ezcn:'因为<b>单看成键这一步，几乎是可逆的</b>：<b>花掉一根磷酸酐键，造出一根磷酸二酯键</b>，<b>账差不多打平</b>。<b>焦磷酸酶随后把放出来的焦磷酸水解成两个磷酸</b>，<b>这就又花掉一根高能键，把平衡狠狠拉向产物一侧</b>。书的说法是：<b>反应由二磷酸的释放及随后的水解来驱动</b>。<b>同一招还出现在连接酶反应和氨酰-tRNA 的形成里。</b>',
 en:'“Because the bond-forming step on its own is close to reversible — one phosphoanhydride bond spent, one phosphodiester made. Hydrolysing the released pyrophosphate to two phosphates with pyrophosphatase spends a second high-energy bond and pulls the equilibrium far to the product side. The textbook says the reaction is driven by the release and subsequent hydrolysis of the diphosphate. The same trick appears in the ligase reaction and in aminoacyl-tRNA formation.”',
 cn:'p078。「近可逆」是通用推论，书只说它是「driven（被推着走的）」。落在<b>热力学</b>。'},
{r:'中', q:'Why does polymerase I need magnesium?',
  ez:'“The textbook only says magnesium ions are essential. Generally the metal does two things. It holds the triphosphate of the incoming nucleotide. It does that by coordinating the negatively charged oxygens. And it makes the three prime hydroxyl a better nucleophile. There are two magnesium ions in the active site. That matters in the laboratory too. P C R fidelity depends on the magnesium concentration. Manganese in its place makes Taq error prone.”',
  ezcn:'<b>书只说镁离子是必需的。</b><b>通用的解释是：金属做两件事——靠配位带负电的氧把进来那个 dNTP 的三磷酸抓住，以及让 3′-OH 变成更好的亲核体；活性中心里有两个镁离子。</b><b>这在实验室里同样要紧：PCR 的保真度取决于镁的浓度，而用锰替掉一部分就让 Taq 变得易错。</b>',
 en:'“The textbook only says magnesium ions are essential. Generally the metal does two things: it holds the triphosphate of the incoming dNTP by coordinating its negatively charged oxygens, and it makes the 3′-OH a better nucleophile. There are two magnesium ions in the active site. That also matters in the laboratory: PCR fidelity depends on the magnesium concentration, and manganese in its place makes Taq error-prone.”',
 cn:'p078 ＋ 通用（two-metal-ion mechanism）。最后半句是实验室——错配 PCR 的配方。'},
{r:'中', q:'Why two polymerases — why not let polymerase III do everything?',
  ez:'“It is division of labour by activity. Polymerase three is the fast processive replicase. But it lacks the five prime to three prime nuclease. So it cannot remove a primer. Polymerase one has that nuclease. And it has low processivity. That is the right tool for two jobs. Excising a primer is one. Filling a short gap is the other. The textbook puts it simply. Polymerase three makes most of the new D N A.”',
  ezcn:'<b>这是按「活性」做的分工。</b><b>聚合酶 III 是又快又持续的复制酶，但它没有 5′→3′ 核酸酶，所以去不掉引物。</b><b>聚合酶 I 有那个核酸酶，而且持续性低——这正是「切除引物 ＋ 补一小段缺口」这两件事需要的工具。</b><b>书的说法很简单：聚合酶 III 合成绝大部分新 DNA，聚合酶 I 去掉引物并补上缺口。</b>',
 en:'“Division of labour by activity. Polymerase III is the fast, processive replicase and lacks the 5′→3′ nuclease, so it cannot remove a primer. Polymerase I has that nuclease and low processivity — the right tool for excising a primer and filling a short gap. The textbook puts it as: polymerase III synthesises most of the new DNA, polymerase I removes the primers and fills the gaps.”',
 cn:'p080。'},
{r:'高', q:'How accurate is it — give me a number.',
    ez:'“The textbook gives no number. It gives the two correctors instead. They are pairing specificity and the three to five exonuclease. The general figures are these. Pairing alone gives about one error in ten to a hundred thousand. Proofreading improves that by two to three orders of magnitude. Post replication mismatch repair improves it further. That brings E. coli to about one in a billion. It can reach one in ten billion per base per generation.”',
    ezcn:'<b>书没有给数字，它给的是两道纠正</b>：<b>配对的专一性</b>和 <b>3′→5′ 外切酶</b>。<b>通用的数字是</b>：<b>单靠配对大约 10⁻⁴–10⁻⁵</b>；<b>加上校对再好两到三个数量级</b>；<b>再加复制后的错配修复，大肠杆菌能到每个碱基每代 10⁻⁹–10⁻¹⁰</b>。',
 en:'“The textbook gives no number. It gives the two correctors — pairing specificity and the 3′→5′ exonuclease. Generally the figures are these. Pairing alone gives about one error in ten to a hundred thousand. Proofreading improves that by two to three orders of magnitude. And post-replication mismatch repair brings E. coli to about one in a billion to ten billion per base per generation.”',
 cn:'LOGIC §11：先说书没给数，再给 general 值并标出处。三个数是 Lehninger 量级，⚠ 待核。'}
]},

{g:'怎么发现的', gn:'⚠ 书里几乎没有，人名年份全是 general。年表 p009 只有 1953 Watson–Crick 和 1983–5 PCR。', items:[
{r:'中', q:'How do we know it is semiconservative?',
  ez:'“The textbook’s evidence is a picture. It is an electron micrograph of a replication eye. Its single stranded regions fit the semiconservative model. The classic proof is general knowledge. Meselson and Stahl did it in nineteen fifty eight. They grew E. coli on heavy nitrogen. Then they shifted it to light nitrogen. After one generation all the D N A was of intermediate density. After two generations half was intermediate and half was light.”',
  ezcn:'<b>书给的证据是一张图：复制眼的电镜照片，它的单链区域跟半保留模型相符。</b><b>经典证明是通用知识——Meselson 和 Stahl，1958：把大肠杆菌养在重氮里，再换到轻氮；一代之后全部 DNA 都是中间密度，两代之后一半中间、一半轻——正好是每条螺旋里有一条旧链。</b>',
 en:'“The textbook’s evidence is the electron micrograph of a replication eye whose single-stranded regions fit the semiconservative model. The classic proof is general knowledge: Meselson and Stahl, 1958. E. coli was grown on heavy nitrogen, then shifted to light. After one generation all DNA was of intermediate density. After two, half was intermediate and half light — exactly one old strand per helix.”',
 cn:'p078 ＋ 通用。<b>先给书的，再给通用的。</b>'},
{r:'中', q:'Who found DNA polymerase?',
  ez:'“Generally it was Arthur Kornberg, in nineteen fifty six. He found polymerase one in E. coli. It was the first enzyme shown to make D N A on a template. That is why the textbook still describes polymerase one first. It also describes it in the most detail. The Kornberg in the textbook’s timeline is a different person. That is his son Roger. He is there for the structure of R N A polymerase.”',
  ezcn:'⚠ <b>generally：Arthur Kornberg，1956 年，从大肠杆菌里找到聚合酶 I——第一个被证明能在模板上合成 DNA 的酶。</b><b>这也是书至今仍然把聚合酶 I 放在最前面、讲得最详细的原因。</b>⚠ <b>书的年表里那个 Kornberg 是另一个人：他儿子 Roger，因为 2001 年 RNA 聚合酶的结构。</b>',
 en:'“Generally, Arthur Kornberg, 1956 — polymerase I from E. coli, the first enzyme shown to make DNA on a template. That is why the textbook still describes polymerase I first and in most detail. The Kornberg in the textbook’s timeline is his son Roger, for the structure of RNA polymerase in 2001.”',
 cn:'p009 年表只有 2001 Roger Kornberg。<b>父子两人别混。</b>'},
{r:'中', q:'How were Okazaki fragments found?',
  ez:'“Generally, because the textbook uses the name but not the story. Reiji Okazaki did it in the late nineteen sixties. He pulse labelled replicating E. coli D N A. The pulse lasted a few seconds. He found the label first in short pieces. Those pieces were joined into long strands later. That happened only after a chase. It was the direct evidence for one thing. One strand is made discontinuously.”',
  ezcn:'⚠ <b>generally——书用了这个名字，但没有讲这个故事。</b><b>冈崎令治，1960 年代末：给正在复制的大肠杆菌 DNA 做几秒钟的脉冲标记，发现标记先出现在一些短片段里；只有在「追踪」之后，这些片段才被接成长链。</b><b>这就是「有一条链是不连续合成的」的直接证据。</b>',
 en:'“Generally, the textbook uses the name but not the story. Reiji Okazaki, late 1960s, pulse-labelled replicating E. coli DNA for a few seconds and found the label first in short pieces. Those pieces were joined into long strands only after a chase — the direct evidence that one strand is made discontinuously.”',
 cn:'通用。'},
{r:'中', q:'How was replication seen directly?',
  ez:'“By autoradiography. Or by electron microscopy. The textbook says D N A can be visualised during replication. Incorporating tritiated thymidine makes that possible. Cairns made an autoradiogram of the E. coli chromosome. It gave the theta structure. And an electron micrograph of Drosophila D N A gave the replication eyes.”',
  ezcn:'<b>靠放射自显影，或者电子显微镜。</b><b>书说把氚标记的胸苷掺进去，就能在复制过程中把 DNA 显现出来。</b><b>Cairns 对大肠杆菌染色体做的放射自显影给出了 θ 结构；果蝇 DNA 的电镜照片给出了那些复制眼。</b>',
 en:'“By autoradiography, or by electron microscopy. The textbook says DNA can be visualised during replication by incorporating tritiated thymidine. Cairns’s autoradiogram of the E. coli chromosome gave the theta structure, and the electron micrograph of Drosophila DNA gave the replication eyes.”',
 cn:'p078、p082。这两条是<b>书里有的</b>方法证据，比人名安全。'}
]},

{g:'陷阱', gn:'五句最容易说错的话，加书自己的一处松动。', items:[
{r:'高', q:'“DNA polymerase starts the new chain.”',
    ez:'“No. A D N A polymerase can only extend. It needs a stretch already paired with the template. That stretch must carry a free three prime hydroxyl. The chain is started by primase. Primase makes a short R N A primer.”',
    ezcn:'<b>不对。DNA 聚合酶只能延伸</b>——<b>它需要一段已经跟模板配好、而且带着游离 3′-羟基的序列</b>。<b>起始是引发酶干的，它做一小段 RNA 引物。</b>',
 en:'“No. A DNA polymerase can only extend — it needs a stretch already paired with the template and carrying a free 3′-OH. The chain is started by primase as a short RNA primer.”',
 cn:'p078。'},
{r:'高', q:'“Both strands are made continuously.”',
    ez:'“No. Only the leading strand is continuous. The lagging strand is made in Okazaki fragments. The reason is direction. On that template five prime to three prime points away from the fork. The textbook’s word for the whole process is semidiscontinuous.”',
    ezcn:'<b>不对，只有前导链是连续的。</b><b>后随链是一段段的冈崎片段</b>，<b>原因是方向</b>：<b>在那条模板上，5′→3′ 指的是背离复制叉的方向</b>。<b>书管整个过程叫「半不连续」。</b>',
 en:'“No. Only the leading strand is. The lagging strand is made in Okazaki fragments, because on that template 5′→3′ points away from the fork. The textbook’s word is semidiscontinuous.”',
 cn:'p082。'},
{r:'高', q:'“The lagging strand is made 3′→5′.”',
    ez:'“No. Every D N A polymerase makes D N A five prime to three prime. That includes the lagging strand. What differs is the direction relative to the fork. Its fragments are made away from the fork. So the strand as a whole is completed backwards. But every single fragment grows five prime to three prime.”',
    ezcn:'<b>不对。所有 DNA 聚合酶造 DNA 都是 5′→3′，后随链也一样。</b><b>不同的是相对复制叉的方向</b>：<b>它的片段是背着复制叉造的，所以整条链看上去是倒着补完的</b>，<b>但每一个片段本身都是 5′→3′ 长出来的。</b>',
 en:'“No. Every DNA polymerase makes DNA 5′→3′ — the lagging strand too. What differs is the direction relative to the fork: its fragments are made away from the fork, so the strand as a whole is completed backwards, but every fragment grows 5′→3′.”',
 cn:'p082–p083。<b>最常见的说错。</b>'},
{r:'高', q:'“DNA polymerase unwinds the DNA.”',
    ez:'“No. Unwinding is the helicase’s job, and it uses A T P. S S B then keeps the strands apart. The textbook does say polymerase one plays some role in unwinding. That refers to something else. It displaces a strand ahead of a nick during nick translation. It does not open the helix at the fork. The textbook assigns that to DnaB.”',
    ezcn:'<b>不对。解开双链是解旋酶的活，用 ATP</b>，<b>然后 SSB 把两条链撑开</b>。书确实说过 <b>Pol Ⅰ 在解链上起一定作用</b>，<b>但那说的是另一件事</b>：<b>缺口平移时它把缺口前面那条链顶开</b>，<b>不是在复制叉处打开双螺旋</b>——<b>那件事书归给 DnaB。</b>',
 en:'“No. Unwinding is the helicase’s job, with ATP, and SSB keeps the strands apart. The textbook does add that polymerase I plays some role in unwinding. That refers to its displacing a strand ahead of a nick during nick translation, not to opening the helix at the fork. The textbook assigns that to DnaB.”',
 cn:'p080 两处：解链是 helicase 的（原文），末尾又说 pol I「在解链上也有一定作用」。<b>用书的前一句打后一句</b>，再用 figure 4.18 的缺口平移解释后一句。'},
{r:'高', q:'“Ligase joins the nucleotides during synthesis.”',
    ez:'“No. Every phosphodiester bond in a growing chain is made by the polymerase. It is made as each d N T P is added. Ligase makes one bond only. It is the bond that closes a nick between two finished pieces. It joins a three prime hydroxyl to a five prime phosphate. And it needs N A D plus or A T P to do it.”',
    ezcn:'<b>不对。生长中的链上每一根磷酸二酯键都是聚合酶在接每个 dNTP 的时候造的。</b><b>连接酶只造一根键：封住两段已经做好的片段之间那个缺口的那一根</b>（<b>3′-羟基对 5′-磷酸</b>），<b>而且它得花 NAD⁺ 或 ATP。</b>',
 en:'“No. Every phosphodiester bond in a growing chain is made by the polymerase as each dNTP is added. Ligase makes one bond: the one that closes a nick between two finished pieces, a 3′-OH against a 5′-phosphate. It needs NAD⁺ or ATP to do it.”',
 cn:'p078 vs p081。'},
{r:'中', q:'“Replication and transcription are the same reaction with a different product.”',
  ez:'“The chemistry of adding a nucleotide is the same. The textbook says R N A polymerase catalyses an analogous reaction. Everything around it differs though. Transcription copies one strand of one gene. The product is R N A. It needs no primer. It has its own start and stop signals. And it leaves the D N A unchanged. Replication copies both strands of the whole molecule. It needs primers and ligase. And it happens once per division.”',
  ezcn:'<b>「加一个核苷酸」这一步的化学确实一样——书说 RNA 聚合酶催化的反应跟 DNA 聚合酶的是类似的。</b><b>但围绕它的一切都不同：转录只抄一个基因的一条链，产物是 RNA，不需要引物，有自己的起始和终止信号，而且不改变 DNA；复制抄整个分子的两条链，产物是 DNA，需要引物和连接酶，而且每次分裂只发生一次。</b>',
 en:'“The chemistry of adding a nucleotide is the same — the textbook says RNA polymerase catalyses a reaction analogous to DNA polymerase’s. Everything around it differs. Transcription copies one strand of one gene into RNA, needs no primer, has its own start and stop signals, and leaves the DNA unchanged. Replication copies both strands of the whole molecule into DNA, needs primers and ligase, and happens once per division.”',
 cn:'p088–p089。「不需要 primer」是 p088 原话。'}
]},

{g:'相邻考点', gn:'这题坐在书投入最大的一片里（p066–p091），四面都有门。', items:[
{r:'高', q:'→ 卡 03 · DNA 的结构',
    ez:'“The strands are antiparallel. The bases are complementary. And they are held by base pairing. Those three properties are the whole reason replication looks the way it does.”',
    ezcn:'<b>双螺旋的三个性质解释了这里的一切</b>：<b>反向平行 · 互补 · 靠碱基配对维系</b>。<b>复制之所以长成这个样子，理由全在这三条里。</b>',
 en:'“Antiparallel, complementary, base-paired — those three properties of the double helix are the whole reason replication looks the way it does.”',
 cn:'反平行 → 半不连续；互补 → 模板；配对特异性 → 准确性（p073）。全在卡 03。'},
{r:'高', q:'→ 转录 p088–p091',
    ez:'“Transcription is the neighbour of replication. A D N A dependent R N A polymerase copies the coding strand of a gene into R N A. It needs no primer. It binds a promoter through its sigma factor. Eukaryotes have three of these enzymes. Polymerase one makes ribosomal R N A precursors. Polymerase two makes messenger precursors. Polymerase three mostly makes transfer R N A and five S R N A.”',
    ezcn:'<b>转录是复制的邻居</b>：<b>DNA 依赖的 RNA 聚合酶把基因的编码链抄成 RNA</b>，<b>不需要引物</b>，<b>靠 σ 因子结合启动子</b>。<b>真核有三种</b>：<b>Ⅰ 做 rRNA 前体，Ⅱ 做 mRNA 前体，Ⅲ 主要做 tRNA 和 5S RNA。</b>',
 en:'“Transcription is the neighbour: DNA-dependent RNA polymerase copies the coding strand of a gene into RNA, needs no primer, and binds a promoter through its sigma factor. In eukaryotes there are three — I for ribosomal RNA precursors, II for messenger precursors, III mostly for transfer and 5S RNA.”',
 cn:'p088–p089。σ 因子 OCR 读成了「factor a」；promotor 与 lac operator 重叠接 #12。'},
{r:'中', q:'→ 修复',
  ez:'“The textbook’s one repair example is on this card. Polymerase one’s five prime to three prime nuclease excises pyrimidine dimers. U V light induces those dimers. Its polymerase activity then fills the gap. And ligase seals it. Generally there is a third corrector. It comes after pairing and proofreading. It is mismatch repair. That one reads the newly made strand after the fork has passed.”',
  ezcn:'<b>书里唯一的修复例子就在这张卡上：聚合酶 I 的 5′→3′ 核酸酶切除紫外线诱导的嘧啶二聚体，它的聚合酶活性补上缺口，连接酶封口。</b><b>通用地说，在「配对」和「校对」之后还有第三个纠正者：错配修复——它是在复制叉过去之后，去读那条新合成的链。</b>',
 en:'“The textbook’s one repair example is on this card: polymerase I’s 5′→3′ nuclease excises UV-induced pyrimidine dimers, its polymerase fills the gap, ligase seals it. Generally, the third corrector after pairing and proofreading is mismatch repair, which reads the newly made strand after the fork has passed.”',
 cn:'p079。mismatch repair 是通用；书里没有 repair 那个术语词（p079 用的是日常说法「修正」）。'},
{r:'中', q:'→ 中心法则 p085',
  ez:'“Replication is the first arrow of the central dogma. D N A directs its own replication. It also directs its transcription into R N A. And the R N A directs its translation into protein. The textbook attributes the scheme to Crick. It dates it nineteen fifty three. Generally that year is the double helix. The central dogma came in Crick’s lecture of nineteen fifty eight. Reverse transcriptase is the special arrow the book adds.”',
  ezcn:'<b>复制是中心法则的第一个箭头：DNA 指导自己的复制，也指导自己转录成 RNA，而 RNA 指导翻译成蛋白。</b><b>书把这个图式归给 Crick，并标成 1953 年。</b>⚠ <b>通用地说，1953 年是双螺旋，中心法则是 Crick 1958 年那次演讲。</b><b>书额外加的那个特殊箭头是逆转录酶——某些 RNA 病毒里的「RNA 指导的 DNA 聚合酶」。</b>',
 en:'“Replication is the first arrow of the central dogma. DNA directs its own replication and its transcription into RNA, and the RNA directs its translation into protein. The textbook attributes the scheme to Crick and dates it 1953. Generally 1953 is the double helix, and the central dogma is Crick’s 1958 lecture. Reverse transcriptase is the special arrow the book adds — RNA-directed DNA polymerase in some RNA viruses.”',
 cn:'p085。<b>书的 1953 和通用的 1958 不一致</b>——说出来，不改书。'}
]},

{g:'桥回主场', gn:'题 #5/#10 的整套答案从这里走。全部实验室出处。', items:[
{r:'中', q:'How does PCR work?',
  ez:'“P C R is replication reduced to one enzyme and heat. Three temperatures are cycled. Near ninety five degrees the double helix melts. Heat does what helicase does in the cell. At about fifty degrees two synthetic primers anneal. One binds each strand. They bracket the piece I want. They replace primase. And they stay in the product. At seventy two degrees a thermostable polymerase extends them. Each cycle doubles the region between the primers.”',
  ezcn:'<b>PCR 就是被简化成「一个酶 ＋ 热」的复制，循环三个温度。</b><b>约 95 ℃：双螺旋熔开——热在这里做的是细胞里解旋酶做的事。</b><b>五十几度：两条人工合成的 DNA 引物退火，一条对一条链，把我要的那段夹在中间——它们取代了引发酶，而且会留在产物里。</b><b>72 ℃：耐热聚合酶从各自的 3′-OH 开始 5′→3′ 延伸，正是书里那个反应（Taq，或者需要保真度时用 KAPA HiFi）。</b><b>每一圈把引物之间那段翻一倍；没有 SSB、没有连接酶、没有起点——引物就是「从哪里开始抄」。</b>',
 en:'“PCR is replication reduced to one enzyme and heat. Three temperatures, cycled. Near 95 degrees the double helix melts — heat does what helicase does in the cell. At fifty-something degrees two synthetic DNA primers anneal, one to each strand, bracketing the piece I want. They replace primase, and they stay in the product. At 72 degrees a thermostable polymerase extends each primer from its 3′-OH, 5′→3′, exactly the textbook’s reaction. That polymerase is Taq, or KAPA HiFi if I need fidelity. Each cycle doubles the region between the primers. No SSB, no ligase, no origin — the primers define where copying starts. The textbook’s timeline dates the discovery of PCR to 1983–85.”',
 cn:'<b>便装题，但答案就在这张卡上</b>：它就是复制去掉细胞的部分。实验室出处。'},
{r:'实测', q:'Describe the activities of Taq and Kapa polymerases and why that matters for you.',
    ez:'“Taq comes from Thermus aquaticus. So it is thermostable. It survives the melting steps of P C R. It has the five to three polymerase activity. It also has a five to three exonuclease, like polymerase one. But it has no three to five exonuclease. So it cannot proofread. Its error rate is therefore high. It also leaves one untemplated adenine on the three prime end. KAPA HiFi is an engineered polymerase. It does have the three to five proofreading exonuclease. So its error rate is far lower. Its products are blunt ended. For us the choice is deliberate. Taq builds a diverse library under mutagenic conditions. KAPA HiFi is used whenever the sequence must stay what it is.”',
    ezcn:'<b>Taq</b> 来自 <i>Thermus aquaticus</i>，所以<b>耐热</b>，熬得过 PCR 的变性步骤。它有 <b>5′→3′ 聚合酶</b>和 <b>5′→3′ 外切酶</b>（像 Pol Ⅰ），<b>但没有 3′→5′ 外切酶 → 不会校对 → 错误率高</b>，而且会在 3′ 端<b>多留一个无模板的 A</b>。<b>KAPA HiFi</b> 是工程化的酶，<b>有 3′→5′ 校对外切酶</b>，错误率低得多，产物是<b>平末端</b>。<b>我们的选择是刻意的：Taq 在诱变条件下造多样性；凡是序列必须保持原样的地方，一律用 KAPA HiFi。</b>',
 en:'“In the textbook’s vocabulary. Taq comes from Thermus aquaticus, so it is thermostable and survives the melting steps of PCR. It has the 5′→3′ polymerase and a 5′→3′ exonuclease, like polymerase I, but no 3′→5′ exonuclease. It cannot proofread, so its error rate is high, and it leaves a single untemplated adenine on the 3′ end. KAPA HiFi is an engineered polymerase that does have the 3′→5′ proofreading exonuclease, so its error rate is far lower and its products are blunt-ended. In activity it resembles the textbook’s polymerase II — polymerase plus proofreading, without the 5′→3′ nuclease. For us the choice is deliberate. Taq under mutagenic conditions, to build a diverse library. KAPA HiFi whenever the sequence must stay what it is — amplifying a library, preparing a sequencing sample, cloning.”',
 cn:'实验室。⚠ 待核：Taq 约 10⁻⁴–10⁻⁵ 错误/碱基/倍增；KAPA HiFi 比 Taq 低约两个数量级；Taq 属 A 家族（与 pol I 同源）、KAPA HiFi 属 B 家族（与 pol II 同源）。核之前只说 “far lower”，家族不主动说。'},
{r:'高', q:'How do you design a primer?',
    ez:'“With the same rule the cell uses. The polymerase only extends a matched three prime hydroxyl. So the three prime end of my primer must pair exactly. A mismatch there gives no extension. Allele specific P C R exploits exactly that. The five prime end is free. The polymerase never looks at it. So I can add a restriction site there. I can also add an overlap for assembly, or a barcode. Length and G C content then set the annealing temperature.”',
    ezcn:'<b>用跟细胞一样的规矩：聚合酶只延伸配对好的 3′-羟基。</b><b>所以引物 3′ 端必须严格配对</b>——<b>那里错一个就不延伸，等位基因特异性 PCR 用的就是这一点</b>。<b>5′ 端是自由的，聚合酶根本不看它</b>，<b>所以酶切位点、组装用的重叠、条形码都加在那头</b>。<b>最后用长度和 GC 含量定退火温度。</b>',
 en:'“With the same rule as the cell’s primer: the polymerase only extends a matched 3′-OH. So the 3′ end of my primer must pair exactly with the template. A mismatch there and there is no extension, which is what allele-specific PCR exploits. The 5′ end is free: I can add a restriction site, an overlap for assembly, or a barcode there, because the polymerase never looks at the 5′ end. Length and GC content set the annealing temperature.”',
 cn:'实验室。<b>这一条把书的 p078 规则直接变成了她的日常操作。</b>'},
{r:'高', q:'How do you make a library by error-prone PCR?',
    ez:'“I take away the accuracy the cell builds in. Taq already lacks proofreading. Then I raise the error rate further. I put manganese in place of some magnesium. I use unbalanced d N T P concentrations. And I run more cycles. So every product carries a few random substitutions. That gives the diversity a directed evolution library needs. How many mutations per gene is tuned by how hard I push. Afterwards I amplify the library with KAPA HiFi. Then selection reads the variants I made. It does not read new errors.”',
    ezcn:'<b>把细胞内建的准确性拿掉。</b><b>Taq 本来就没有校对</b>，<b>然后我再把错误率推高</b>：<b>用锰替掉一部分镁</b>、<b>四种 dNTP 浓度故意不平衡</b>、<b>多跑几轮</b>。<b>于是每个产物都带几个随机替换，这就是定向进化文库要的多样性</b>；<b>每个基因几个突变，靠这些条件推多狠来调</b>。<b>之后文库一律用 KAPA HiFi 扩增——这样选择读到的是我造的变体，不是新冒出来的错误。</b>',
 en:'“I take away the accuracy the cell builds in. Taq already lacks proofreading. Then I raise the error rate further: manganese in place of some of the magnesium, unbalanced dNTP concentrations, more cycles. So every product carries a few random substitutions. That gives the diversity a directed-evolution library needs, and the number of mutations per gene is tuned by how hard I push those conditions. Afterwards the library is amplified with KAPA HiFi so that selection reads the variants I made, not new errors.”',
 cn:'实验室。Mn²⁺ 那条接「为什么需要 Mg²⁺」。'},
{r:'中', q:'Why does fidelity matter for a sequencing library?',
  ez:'“Because a sequencing read cannot tell two things apart. It cannot separate a real variant from a polymerase error. That error was made during amplification. So if I amplify a library with Taq something happens. Some reads carry substitutions that were never in the cell. And they look like enrichment signal. A proofreading polymerase keeps that background low. Then what I see is what selection did.”',
  ezcn:'因为<b>测序读段分不开两样东西：一个真实的变体，和扩增时聚合酶犯的错。</b><b>如果我用 Taq 扩增文库，就会有一些读段带着细胞里从来没有过的替换，而它们看上去像富集信号。</b><b>校对酶把这个背景压得足够低，我看到的才是筛选做的事。</b>',
 en:'“Because a sequencing read cannot tell a real variant from a polymerase error made during amplification. If I amplify a library with Taq, some reads carry substitutions that were never in the cell and look like enrichment signal. A proofreading polymerase keeps that background low enough that what I see is what selection did.”',
 cn:'实验室。'},
{r:'中', q:'Why does a plasmid replicate on its own?',
  ez:'“Because it carries its own origin of replication. So the host’s machinery copies it. It copies it independently of the chromosome. The machinery is the same one. It is polymerase three and primase and ligase. Nobody designed that. Bacteria already had it. Copy number is set by one thing. It is set by how that origin is controlled.”',
  ezcn:'因为<b>它自带一个复制起点</b>，<b>所以宿主的那套机器（同样的聚合酶 III、引发酶、连接酶）会独立于染色体地把它复制出来。</b><b>这不是谁设计的——细菌本来就有。</b><b>拷贝数由一件事决定：那个起点是怎么被调控的。</b>',
 en:'“Because it carries its own origin of replication, so the host’s machinery copies it independently of the chromosome — the same polymerase III, primase and ligase. Nobody designed that. Bacteria already had it. Copy number is set by how that origin is controlled.”',
 cn:'大本营卡 `x_plasmid`。plasmid 全书 0 命中。'}
]}
,
{g:'⚠ DNA 修复 · 书只写了半句，名字全是通用的', gn:'⚠ <b>2026-09-24 查出来的缺口</b>：Lehninger §25.2 是捷克书<b>完全没有对应章节</b>的七块之一，而卡上原来只有「错配修复」一个名字（<code class="eq">glycosylase</code> 0 命中 · <code class="eq">AP site</code> 0 · <code class="eq">Holliday</code> 0）。<br><b>但书不是一个字没写</b>：<span class="pg">p079</span> 讲聚合酶 I 的时候写了「这个反应也修复某些损伤，例如切除 UV 照射产生的嘧啶二聚体，切完之后聚合酶活性把缺口补上」——<b>那就是切除修复的骨架，书只是没给它名字</b>。<br><b>所以这一组的打法</b>：先站在书那句话上，再把通用的名字和分类挂上去。',
 items:[
{r:'高', q:'What DNA repair mechanisms do you know?',
    ez:'“Repair means restoring the original sequence after damage. There are four families. One is direct reversal. The damage is undone in place. Two is base excision repair. A single wrong base is cut out. Three is nucleotide excision repair. A whole stretch around a bulky lesion is cut out. Four is mismatch repair. It corrects replication errors that proofreading missed. Double strand breaks are a separate case. My textbook names none of these families. It does describe one of them.”',
    ezcn:'<b>修复 ＝ 损伤之后把原来的序列恢复回来。</b>四大类：<br>① <b>直接逆转</b>——就地把损伤解开；<br>② <b>碱基切除修复（BER）</b>——挖掉<b>单个</b>错碱基；<br>③ <b>核苷酸切除修复（NER）</b>——把<b>大块损伤周围的一整段</b>切掉；<br>④ <b>错配修复（MMR）</b>——收拾校对漏掉的复制错误。<br><b>双链断裂是另一回事，单独算。</b>⚠ <b>这四个名字书上一个都没有，但书描述了其中一个</b>（见下一条）。',
 en:'“Repair means restoring the original sequence after damage. There are four families. <b>Direct reversal</b> undoes the damage in place. <b>Base excision repair</b> cuts out a single wrong base. <b>Nucleotide excision repair</b> removes a whole stretch around a bulky lesion. <b>Mismatch repair</b> corrects the replication errors that proofreading missed. Double-strand breaks are a separate case with their own two routes. My textbook names none of these families, although it does describe one of them.”',
 cn:'⚠ <b>四个名字全是通用的</b>（Lehninger §25.2），<b>标 general</b>。<b>书上 0 命中</b>：opravy / reparace 在全书只出现在蛋白质折叠和糖基化的语境里，不是 DNA 修复。<br><b>开口先给「四类 ＋ 双链断裂另算」这个形状</b>，他要哪一类你再展开——<b>不要一上来就讲 glycosylase</b>。'},

{r:'高', q:'Does your textbook say anything about repair at all?',
    ez:'“Yes, one sentence, and it is attached to an enzyme. The textbook is describing D N A polymerase one. It says the five prime to three prime exonuclease has two jobs. One job is removing the primer during replication. The other job is repair. It excises faulty pyrimidine dimers. Those form in D N A exposed to U V light. After the excision the same enzyme fills the gap. It fills it with its polymerase activity. That is excision repair. The textbook simply does not use the name.”',
    ezcn:'<b>有，一句，而且是挂在酶上的。</b>书在讲 <b>DNA 聚合酶 I</b> 的时候说，它的 <b>5′→3′ 外切酶</b>有两个用处：<b>一是复制时切掉引物</b>，<b>二是修复</b>——<b>切除 UV 照射在 DNA 上形成的嘧啶二聚体</b>，切完之后<b>同一个酶用聚合酶活性把缺口补上</b>。<br>⚠ <b>这就是切除修复，书只是没用这个名字。</b><span class="pg">p079</span>',
 en:'“Yes, one sentence, and it is attached to an enzyme. While describing DNA polymerase I the textbook says its 5′→3′ exonuclease has two uses. One is removing the primer during replication. The other is repair, excising faulty pyrimidine dimers formed in DNA exposed to UV light. After that excision the same enzyme fills the gap with its polymerase activity. That is excision repair, although the textbook does not use the name.”',
 cn:'<span class="pg">p079</span>，Obr. 4.17 那一段。捷克原文：「Kromě toho se touto reakcí opravují některé poruchy, např. vyštěpení chybných pyrimidinových dimerů, které se tvoří v DNA vystavené UV záření.」<br>⚠ <b>这一条非常值钱</b>：他问修复，你先给的是<b>你自己教材里的那句话</b>，而且能指出书在讲哪个酶、哪一页。<b>然后再把通用的分类挂上去</b>——顺序反了就变成背课外书。<br><b>接口</b>：聚合酶 I 三个活性中心那一段就在同一页，被追问「哪个活性」时直接接上。'},

{r:'高', q:'What is base excision repair?',
    ez:'“It is the repair of a single damaged base. A D N A glycosylase finds that base. It cuts the bond to the sugar. The base leaves. The sugar stays. That leaves a site with no base at all. It is called an A P site. An A P endonuclease then nicks the backbone there. A polymerase puts the right nucleotide in. A ligase seals it. The damage it handles is small. Deaminated cytosine is the classic one. That gives uracil in D N A.”',
    ezcn:'<b>BER ＝ 修一个坏掉的碱基。</b><b>DNA 糖苷酶</b>找到那个碱基，<b>切断它跟糖之间的键</b>，碱基掉了、糖还在——<b>留下一个「没有碱基的位点」，叫 AP 位点</b>（apurinic／apyrimidinic）。<b>AP 内切酶</b>在那里把骨架切开，<b>聚合酶</b>补上正确的核苷酸，<b>连接酶</b>封口。<br>⚠ <b>它管的是小损伤，不撑歪双螺旋</b>。最经典的是<b>胞嘧啶脱氨</b>——脱完变成<b>尿嘧啶</b>，而尿嘧啶本来不该出现在 DNA 里。',
 en:'“It is the repair of a single damaged base. A DNA glycosylase recognises that base and cuts the bond to the sugar, so the base leaves and the sugar stays. That leaves a site with no base, called an AP site. An AP endonuclease nicks the backbone there, a polymerase inserts the correct nucleotide, and a ligase seals it. The damage it handles is small and does not distort the helix. The classic case is deamination of cytosine, which gives uracil in DNA.”',
 cn:'通用（Lehninger §25.2），<b>标 general</b>。<br>⚠ <b>「为什么 DNA 用胸腺嘧啶而 RNA 用尿嘧啶」这道题的答案就在这里</b>：胞嘧啶脱氨会变成尿嘧啶，<b>如果尿嘧啶是 DNA 的正常成分，细胞就分不清哪个是损伤</b>。用胸腺嘧啶（＝ 甲基化的尿嘧啶）当正常碱基，任何尿嘧啶一出现就是错的，<b>糖苷酶可以直接挖掉</b>。<b>这一句是加分</b>，被问到碱基组成时顺手给。<br><b>接口</b>：卡 03 讲碱基结构。'},

{r:'高', q:'And nucleotide excision repair — how is that different?',
    ez:'“It removes a whole stretch, not one base. It handles bulky damage. Bulky damage distorts the double helix. U V pyrimidine dimers are the example. So are chemical adducts. An excinuclease cuts the strand twice. It cuts on both sides of the lesion. The piece between the cuts is removed. In bacteria that piece is about twelve nucleotides. In humans it is about twenty seven. A polymerase fills the gap. A ligase seals it. People who cannot do this get xeroderma pigmentosum.”',
    ezcn:'<b>NER 切掉的是一整段，不是一个碱基。</b>它管的是<b>大块损伤</b>——<b>撑歪双螺旋</b>的那种：<b>UV 造成的嘧啶二聚体</b>、化学加合物。<br><b>excinuclease 在损伤两侧各切一刀</b>，把中间那一段拿走（<b>细菌约 12 个核苷酸，人约 27 个</b>），<b>聚合酶补、连接酶封</b>。<br>⚠ <b>做不了这件事的人得着色性干皮病（xeroderma pigmentosum）</b>——晒太阳就长皮肤癌。<b>这个病名是白拿的加分。</b>',
 en:'“It removes a whole stretch rather than one base, and it handles bulky damage that distorts the double helix. UV pyrimidine dimers and chemical adducts are the examples. An excinuclease cuts the strand on both sides of the lesion, and the piece between the cuts is removed, about twelve nucleotides in bacteria and about twenty-seven in humans. A polymerase fills the gap and a ligase seals it. People who cannot do this have xeroderma pigmentosum.”',
 cn:'通用（Lehninger §25.2），<b>标 general</b>。<br>⚠ <b>这一条跟书那句话直接接得上</b>：书说聚合酶 I 切除 UV 嘧啶二聚体再补缺口——<b>那正是 NER 处理的损伤类型</b>。所以先说书那句，再说「the general name for that is nucleotide excision repair」，<b>两句话就把教材和通用知识缝上了</b>。<br><b>一句话记住两者的差别</b>：<b>BER 挖一个碱基，NER 剪一段链</b>。'},

{r:'中', q:'Mismatch repair has to fix the new strand. How does it know which one is new?',
    ez:'“The new strand carries a mark for a short time. In bacteria the marking is methylation. A methylase puts a methyl group on the adenine in G A T C sequences. The old strand is already methylated. The new strand is not yet methylated. So for a short time the site is methylated on one side only. The repair system reads that. It cuts the unmethylated strand. In eukaryotes the mark is different. Nicks in the new strand are used instead.”',
    ezcn:'<b>因为新链上有记号，至少在一小段时间里有。</b><b>细菌用的是甲基化</b>：甲基化酶给 <b>GATC</b> 序列里的腺嘌呤加甲基，<b>老链已经甲基化，新链还没来得及</b>——所以复制后一小段时间里，那个位点<b>只有一侧是甲基化的（半甲基化）</b>。修复系统认这个，<b>切没有甲基的那一条</b>。<br><b>真核生物不用甲基化</b>，用的是<b>新链上的缺口</b>（冈崎片段之间的切口）当记号。',
 en:'“Because the new strand is marked, at least for a while. In bacteria the mark is methylation. A methylase adds a methyl group to the adenine in GATC sequences, and the old strand is already methylated while the new one is not yet. For a short time the site is methylated on one side only, and the repair system cuts the unmethylated strand. In eukaryotes the mark is different, and nicks in the new strand are used instead.”',
 cn:'通用（Lehninger §25.2），<b>标 general</b>。<br>⚠ <b>这是这一组里最容易被追问的一条</b>，因为它是个真问题：<b>两条链上都是正常碱基，凭什么说哪一条错了</b>？答案不在化学上，在<b>时间</b>上——新链有一小段时间是「没来得及打标记」的。<br><b>接口</b>：卡 16 讲保真度那几条（配对 → 校对 → 错配修复，三道关各降两三个数量级）就在这张卡上，<b>这一条补的是第三道关的机制</b>。'},

{r:'中', q:'What if both strands break?',
    ez:'“Then there is no intact template on either side. There are two routes. One is homologous recombination. It uses the sister chromatid as the template. The broken end invades the intact duplex. That is called strand invasion. The crossed structure that forms is a Holliday junction. An enzyme cuts it to separate the two molecules. This route is accurate. The other route is non homologous end joining. It simply ligates the two ends back together. It is fast. It needs no template. But it often loses a few nucleotides. So it is error prone.”',
    ezcn:'<b>两条链都断了，就没有完整的模板可抄了。</b>两条路：<br>① <b>同源重组（HR）</b>——<b>拿姐妹染色单体当模板</b>：断端<b>侵入</b>完整的双链（<b>strand invasion</b>），形成交叉结构 <b>Holliday junction</b>，再由酶切开把两个分子分离。<b>准确。</b><br>② <b>非同源末端连接（NHEJ）</b>——<b>直接把两个断端接回去</b>。<b>快、不需要模板，但常常丢掉几个核苷酸，所以容易出错。</b>',
 en:'“Then there is no intact template on either side, and there are two routes. <b>Homologous recombination</b> uses the sister chromatid as a template. The broken end invades the intact duplex, which is called strand invasion, and the crossed structure that forms is a <b>Holliday junction</b>, cut by an enzyme to separate the two molecules. That route is accurate. <b>Non-homologous end joining</b> simply ligates the two ends back together. It is fast and needs no template, but it often loses a few nucleotides and is therefore error-prone.”',
 cn:'通用（Lehninger §25.2 和 §25.3），<b>标 general</b>。<br>⚠ <b>Holliday junction 和 strand invasion 这两个词原来全套卡上 0 命中</b>，2026-09-24 查出来补的。<br><b>接口</b>：<b>CRISPR 敲除就靠这两条路的比例</b>——只想敲掉基因就让 NHEJ 去接（出错正好造成移码），想精确替换就给一条修复模板走 HR。<b>这一句把这条题接回她自己的实验</b>（卡 mb-ko）。'}
 ]}
]
});
