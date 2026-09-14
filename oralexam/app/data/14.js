/* 卡 14 · What is the difference between transformation, electroporation, transduction, and transfection?
   题库 #14（S2 Biochemistry 9）· w2 · 书本投入 bw 0 · gap 'ok'（她说这是强项）

   ⛔ 出处规矩：这张卡里没有一句可以说成「书上说」。229 页全文 grep 的结果：
      transfekce · transdukce · elektroporace · kompetence · bakteriofág · fág · plasmid ·
      plazmid · klonování · rekombinantní · restrikční · konjugace · antibiotikum ·
      ampicilin · liposom · lipofekce · episom · integrace · virový vektor = 全部 0 命中。
      transformace 全书只有两处，而且两处都不是这道题的意思：
        · p056 —— lineární transformace 的 Michaelis–Mentenové 方程（Lineweaver–Burk），是数学变换；
        · p182 —— 糖脂与糖蛋白「pravděpodobně i za transformaci normálně rostoucích buněk v maligní」，
          正常生长的细胞变成恶性的。⚠ 这就是这张卡的陷阱：书里 transformation 的唯一生物学用法是癌症那个。
      vektor 只有 p141 p142 的 vektorový charakter（矢量的），跟载体无关。
      selekční 只有 p019 的 selekční tlak（进化的选择压力），跟 selection marker 的 selection 不是一回事。
   书能给的只有邻居，都带页码，而且每次都要说清「书讲的不是这个用法」：
      p009 年表 1944「Průkaz přenosu genetické informace DNA (Avery)」← 这一行讲的就是转化实验本身，
        但书既不叫它 transformation，也没写实验怎么做 ·
      p015 病毒的定义：活与非活的边界 · 细胞内寄生 · 比原核细胞还简单 · 借宿主的生化机器 ·
        本身「v zásadě jen genetickou informaci, nutnou k reprodukci」← 转导为什么天然可行的全部理由 ·
      p015 Tab. 1.3 细胞壁：植物和原核生物的壁厚 20 nm，由多糖等构成，起保护作用 ·
      p198 膜的结构基础是脂双层，「výrazně nepolární střed a dva polární povrchy」，厚 3,5–4,0 nm ·
      p200 简单扩散走脂双层、膜上随机的孔或整合蛋白的通道，过去的是亲脂物质、水和一些离子 ·
      p197 膜负责向细胞内外的选择性转运 ·
      p076 DNA 是遗传信息的物质载体，信息以碱基顺序存储。
   已经定义过、这里只引用不重复：卡 03 的 phosphodiester 主链与「每个核苷酸一个负电荷」·
      卡 16 的 origin of replication 与「质粒自带 origin 所以独立复制」· 卡 12 的 lac operon 与 conjugation ·
      卡 taq 的 selectable marker 那半句。卡 12 用过 phage 这个词但没定义，这张卡当场定义。
   标记约定：英文里出现 “generally” ＝ 通用分子生物学；“in the lab / in my hands / in my own work” ＝ 她的实验室实践。 */

window.CARDS.push({
id:'14', n:14, w:2,
q:'What is the difference between transformation, electroporation, transduction, and transfection?',
qcn:'transformation、electroporation、transduction、transfection 四者的区别？',
sub:'主干说完约 90 秒 · 比较题 · 书里 0 命中：每一句都要标 general 或 lab · 轴是一句话：四个都是把外源核酸送进细胞，分歧在送进哪种细胞、谁把它带过膜',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口 · 先给轴，再把四个名字各定义一次', gn:'⚠ 比较题的第一句决定成败：<b>先说比较的轴，再往轴上填</b>（卡 03 是样板）。这道题的轴比卡 03 多一层——<b>四个里有一个不在同一张清单上</b>。题面的五个实词（difference、transformation、electroporation、transduction、transfection）在这一组里全部交代掉。口试他多半只念 “What is transformation?”，其余的是他准备挖的方向。'},
 {n:'01', t:'先划出处',
  big:'全书 <b>0 命中</b>：transfekce、transdukce、elektroporace、kompetence、bakteriofág、plasmid 全没有。<b>transformace 出现两次，两次都不是这个意思</b>。所以这张卡全部是<b>通用分子生物学</b>或<b>我自己的实验室实践</b>',
  en:'“One thing before I answer. This is not textbook material. Three of the four words do not appear in this book at all. The fourth, transformation, appears twice and never in this sense. So everything I say is either general molecular biology or my own laboratory practice, and I will say which as I go.”',
  note:'<b>这一句是整张卡的保险。</b>书外题最危险的失分不是答错，是把实验室的东西说成「书上说」——他翻得到。先说清楚，后面每一句都安全，而且「我知道这本书里有什么、没有什么」本身就是加分。跟卡 <b>taq</b> 和卡 <b>land</b> 同一个开法。<span class="pg">p056</span><span class="pg">p182</span>'},
 {n:'02', t:'轴 · 这道题的第一句',
  big:'四个说的是<b>同一件事</b>：把<b>外源核酸送进活细胞</b>。区别只落在两个问题上——<b>送进哪一种细胞</b>，和<b>谁把核酸带过膜</b>',
  en:'“All four name ways of getting foreign nucleic acid into a living cell. So the difference is not four unrelated things. It is two questions asked of each one. Which cell, and what carries the nucleic acid across the membrane. <b>Foreign</b> means DNA or RNA that the cell did not make itself. And those two questions sort the four words into three destinations and one method.”',
  note:'<b>「三个去处，一个做法」这半句是这道题的分数。</b>说完这一句他就知道你不是在背清单。<br><b>交替列特征＝一张清单，不是一个理解</b>——比较题的通则，卡 03 第 02 点写过。'},
 {n:'03', t:'定义一 · transformation',
  big:'<b>细菌</b>把<b>裸 DNA</b> 从周围的溶液里<b>自己拿进去</b>。没有车。前提是这个细菌处在 <b>competent</b> 的状态',
  en:'“Transformation is the uptake of naked DNA by a bacterium, straight from the solution around it. <b>Naked</b> means the DNA is free in solution. It is not inside a protein coat and not inside any particle. Nothing delivers it. The cell itself takes it up, and only if the cell is <b>competent</b>. Competent means able to take up DNA from outside, and most bacteria in a flask are not.”',
  note:'<b>naked 和 competent 两个词承重</b>，所以在同一句里交代掉，不留给他问（LOGIC §4b）。<b>「most bacteria are not」这半句必须说</b>，否则 competent 听起来像一个形容词而不是一个状态。'},
 {n:'04', t:'定义二 · electroporation',
  big:'一个<b>物理方法</b>：一次<b>电场脉冲</b>在膜上开出<b>短暂的孔</b>。它<b>不是第四个去处</b>，它是<b>做 transformation 或 transfection 的一种做法</b>',
  en:'“Electroporation is a physical method. A short pulse of electric field is put across the cell suspension, and where the voltage across the membrane passes a threshold the bilayer opens transient pores. The nucleic acid goes through while they are open, and then the membrane reseals. <b>Transient</b> means the pores close again within seconds. And this is the one word on the list that names a way of doing rather than a destination.”',
  note:'<b>这一点是整道题的心脏，也是他最可能追的地方。</b>把它放在四个定义里第二个说，后面的表才填得干净。⚠ 不要在这里报电压和脉冲长度，那一层留给追问，而且要明说是 protocol 的常用区间。'},
 {n:'05', t:'定义三 · transduction',
  big:'<b>病毒当车</b>：细菌里是一个 <b>bacteriophage</b>，把 DNA 打包进自己的壳再注进下一个细菌。<b>书 p015 的病毒定义正好说明为什么病毒天生适合干这个</b>',
  en:'“Transduction is the transfer of DNA into a cell by a virus. For bacteria that virus is a <b>bacteriophage</b>, meaning a virus that infects bacteria. The phage packages the DNA inside its own protein coat and injects it, so the vehicle here is a particle built for exactly this job. That is also the textbook’s own picture of a virus, on p015. It calls a virus an intracellular parasite, simpler than a prokaryotic cell, and essentially only the genetic information needed for its reproduction.”',
  note:'<b>p015 是这张卡跟书最漂亮的接口。</b>书说病毒「本身基本上只是繁殖所需的遗传信息」——那正是「为什么它能当运 DNA 的车」的答案，虽然书完全没提转导。⚠ 说的时候要点明：书给的是病毒的定义，不是转导。<span class="pg">p015</span>'},
 {n:'06', t:'定义四 · transfection',
  big:'<b>把核酸送进真核细胞</b>——这个词的全部内容就这一句。<b>为什么另起一个词，是历史，不是机制</b>',
  en:'“Transfection is the introduction of nucleic acid into a <b>eukaryotic</b> cell. That is the whole of the definition. No particular mechanism is implied, and that is the point worth making. The word exists because in animal cell culture the word transformation was already taken. There it means a normal cell turning malignant, and this textbook uses it in exactly that sense on p182. So a separate word was coined for the harmless laboratory operation.”',
  note:'<b>「是历史不是机制」这半句要主动给</b>——懂行的考官一定往这里挖，你先说出来，他就没有那一刀了（LOGIC §4：接得住的口子故意留，接不住的当场交代）。<span class="pg">p182</span>'},

 {g:'把轴填满', gn:'轴给完了就填。一张表 ＋ 两句话：<b>三个去处一个做法</b>，以及<b>命名有一半是约定</b>。第二句是这道题「sharp」的地方，因为它承认了分类本身的边界（LOGIC §11：分类是人划的，不是分子自带的）。'},
 {n:'07', t:'四个词填在两条轴上',
  big:'<b>横着看是四个词，竖着看只有两个问题</b>：进的是哪种细胞、谁带它过膜',
  tbl:{head:['','transformation','electroporation','transduction','transfection'],
       rows:[['<b>进的是哪种细胞</b>','细菌（酵母也沿用这个词）','<b>任何细胞</b>——细菌和真核都用','细菌（噬菌体）；实验室里也指病毒载体送进真核细胞','<b>真核细胞</b>'],
             ['<b>谁带它过膜</b>','<b>细胞自己</b>，处在 competent 状态','<b>电场打开的短暂孔</b>','<b>病毒颗粒</b>','脂质颗粒、阳离子聚合物，或干脆电场'],
             ['<b>核酸是什么形态</b>','裸 DNA','裸 DNA 或 RNA','包在病毒壳里','裸的，但一般裹在一个颗粒里'],
             ['<b>这个词说的是</b>','<b>去处</b>','<b>做法</b>','<b>去处 ＋ 车</b>','<b>去处</b>'],
             ['<b>留下来靠什么</b>','质粒自带 origin（卡 16）＋ 抗性标记','看你送的是什么','重组进染色体，否则被降解','整合进染色体，否则几天后稀释掉']]},
  en:'“Laid out that way the four words fall into place. Transformation, transduction and transfection each say which cell took the nucleic acid up and what brought it there. Electroporation says how I did it. So when I electroporate a plasmid into <b>E. coli</b> I have transformed those bacteria, by electroporation. When I electroporate a plasmid into a mammalian cell I have transfected them. The method did not change. The destination did.”',
  note:'<b>最后四个短句是整道题的落锤。</b>“The method did not change. The destination did.” 背到是声音。<br>表的最后一行是桥：它提前把「进去只是第一步」这件事摆出来，第 16 点会回到它。'},
 {n:'08', t:'命名有一半是约定 · 用酵母证明',
  big:'四个词不是一套严格的分类，是<b>各自的领域长出来的行话</b>。<b>最好的证据是酵母</b>：酵母是真核，按定义该叫 transfection，但全世界都说 yeast transformation',
  en:'“I should also say plainly that the naming is partly convention rather than mechanism. The clearest proof is yeast. Yeast is a eukaryote, so by the strict definition putting a plasmid into it is transfection. Nobody says that. Everybody says yeast transformation, because yeast genetics grew out of microbial genetics. Transfection stayed with animal cell culture. Nothing physical separates the two cases. The words follow the field rather than the membrane.”',
  note:'<b>这一条是这张卡最能显出内行的地方</b>，而且它落在她自己的台面上（yeast display）。<br>形状跟卡 01 那句 “the categories are a description we impose rather than something the molecule has” 是同一个（LOGIC §11）——<b>主动承认分类的边界，本身就是 researcher 的标志</b>。'},

 {g:'transformation 的底下', gn:'他挑 transformation 这一格追的时候，就是这三件：competent 是什么、怎么做出来的、为什么要加热。⚠ 最后一件的机制<b>至今没有定论</b>，这一点要说出来，不要编。'},
 {n:'09', t:'competence 是什么 · 天然的与做出来的',
  big:'<b>competence ＝ 能把外面的 DNA 拿进去的那个状态。</b>有些菌天生就有这套机器（<b>Bacillus subtilis · Streptococcus pneumoniae</b>），<b>E. coli 没有</b>，所以实验室里是<b>做出来的</b>',
  en:'“Competence is the state in which a bacterium can take up DNA from outside. It is not a property every bacterium has. Some species are naturally competent, and they carry genes for a machine that binds DNA at the surface and pulls one strand in. <b>Bacillus subtilis</b> and <b>Streptococcus pneumoniae</b> are the usual examples, and in those species competence is regulated and switched on under particular conditions. <b>E. coli</b> is not naturally competent in any useful way. So in the lab competence is made, either chemically or by the electric pulse.”',
  note:'⚠ 全部 general。书里 kompetence 0 命中。<br><b>「天然的」和「做出来的」要分开说</b>：这是下一刀的位置，而且分开说之后 electroporation 自然接上去——电穿孔就是「做出来」的第二种办法。'},
 {n:'10', t:'化学 competence · 为什么要钙、为什么要热激',
  big:'两边都是<b>负电</b>：DNA 主链每个核苷酸一个负电荷（卡 03），细菌表面也是负的。<b>Ca²⁺ 把这层排斥屏蔽掉</b>；冰让膜变硬；随后一次短促的 <b>heat shock</b> 把 DNA 推进去。<b>⚠ 机制到今天没有定论，这句要说出来</b>',
  en:'“Both sides of the approach are negative. The DNA backbone carries one negative charge per nucleotide, and the bacterial surface is negative too, so the two repel each other. A divalent cation sits between them and screens that repulsion. Cells are grown to early exponential phase, washed cold, and left on ice in calcium chloride. The cold keeps the membrane rigid while the DNA is brought close. Then a brief heat shock, in ordinary practice around forty-two degrees for well under a minute, is thought to drive the DNA through. I say thought because the detailed mechanism is still not settled, and I would rather say that than invent one.”',
  warn:'⚠ <b>四十二度是 protocol 的常用区间，不是任何书上的常数</b>，说的时候必须带 “in ordinary practice”。<b>不要报秒数</b>——不同 protocol 从半分钟到一分半都有。编一个精确值是这场考试里最危险的动作之一（LOGIC §11）。',
  note:'<b>「机制没有定论」这句不是认输，是准确。</b>他要是追「那到底是怎么过去的」，你已经把停止线画好了；硬编一个机制才是失分。'},
 {n:'11', t:'自然界里这是三条路之一 —— 题面少的那一条',
  big:'细菌天然获得外源 DNA 有<b>三条</b>路：<b>transformation</b>（拿裸 DNA）·<b>transduction</b>（噬菌体带）·<b>conjugation</b>（靠 pilus 直接接触）。<b>题面里缺的正好是 conjugation</b>',
  en:'“In bacteria two of these are not laboratory tricks at all. Transformation and transduction are two of the three natural routes by which a bacterium picks up DNA from outside its own line of descent. The third is <b>conjugation</b>. There two cells make direct contact through a <b>pilus</b>, a protein tube, and DNA is passed through it. Conjugation is the one relative missing from this question, and it is worth naming for that reason. Together the three are how antibiotic resistance spreads between bacteria.”',
  note:'<b>主动点出题面里没有的那一个，是这道题拿高分的动作。</b>而且 conjugation 卡 12 已经用过——Jacob 与 Monod 把正常的 lacI 和 lacZ 转进缺失株，用的就是接合。<b>说法保持一致，别给两个版本。</b>'},

 {g:'transduction 的底下', gn:'两件事：<b>普遍性与局限性的区别在哪一步出错</b>，以及<b>这个词在细胞培养里的第二种用法</b>。第二件常被忽略，但他要是做细胞的，他嘴里的 transduction 就是那个意思。'},
 {n:'12', t:'generalised vs specialised · 区别在哪一步出错',
  big:'<b>generalised ＝ 装配时抓错了 DNA</b>，宿主基因组的<b>任何一段</b>都可能被带走；<b>specialised ＝ 整合的噬菌体切出来时切歪了</b>，只可能带走<b>整合位点旁边</b>那几个基因',
  tbl:{head:['','generalised 普遍性转导','specialised 局限性转导'],
       rows:[['<b>错在哪一步</b>','<b>装头的时候</b>把一段宿主 DNA 当成自己的装了进去','<b>切出来的时候</b>切歪了，把旁边的宿主 DNA 一起带走'],
             ['<b>能带哪一段</b>','宿主基因组的<b>任何一段</b>','只有<b>整合位点两侧</b>的基因'],
             ['<b>来自哪种噬菌体</b>','走裂解周期的','能溶原化的，λ 是样板'],
             ['<b>经典例子</b>','—','λ 从 E. coli 的整合位点带走 <b>gal</b> 或 <b>bio</b>']]},
  en:'“Transduction comes in two kinds, and the difference is which step goes wrong. In <b>generalised</b> transduction the phage is packaging DNA at the end of a lytic infection. <b>Lytic</b> means the phage multiplies and then bursts the cell. The host chromosome has been cut up by then. A head sometimes takes a piece of host DNA by mistake, so any part of the genome can travel. In <b>specialised</b> transduction the phage was <b>lysogenic</b>. Lysogenic means its DNA had integrated into the host chromosome at one particular site and sat quiet there. When it comes back out it sometimes cuts off centre and carries the neighbouring host genes with it. So only genes next to that site can move. Phage lambda in <b>E. coli</b> is the standard example, and the genes it picks up are <b>gal</b> and <b>bio</b>.”',
  note:'<b>lytic 和 lysogenic 两个词在这套卡里没有别处定义过</b>，所以必须就地交代（terms 查过）。<br><b>记法一句话</b>：普遍性错在<b>装</b>，局限性错在<b>切</b>。gal 和 bio 是 λ 整合位点两侧的基因，这一对名字值得背，因为它把「只能带邻居」变成了一个具体事实。'},
 {n:'13', t:'实验室里 transduction 的第二种用法',
  big:'现在说 “transduction” 多半指<b>用病毒载体把基因送进真核细胞</b>（lentivirus、AAV）。<b>同一个词两个用法，都要认得</b>——而且这一层正好把它跟 transfection 分开',
  en:'“There is a second, modern use of the word, and an examiner may mean either one. In cell culture, <b>transduction</b> means delivering a gene into a eukaryotic cell using a viral vector. A <b>vector</b> here is a piece of DNA built to carry a gene into a cell and keep it there. Lentiviral and adeno-associated viral vectors are the common ones. So a viral route into a eukaryotic cell is called transduction, and a non-viral route into the same cell is called transfection. The cell is the same. The word follows the vehicle.”',
  note:'<b>这一条把「谁带它过膜」这条轴用到了极致</b>：同一个目的地，换了车就换了名字。<br>顺便挡住一个真会被抓的混淆：<b>viral vector ≠ transfection</b>。要是把慢病毒说成 transfection，懂行的人立刻听出来。'},

 {g:'transfection 的底下', gn:'两件事：<b>transient 和 stable 的唯一差别是整合</b>，以及<b>两条常走的路线</b>。整合那一条是他最可能追的，因为它把「送进去」和「留下来」分开了。'},
 {n:'14', t:'transient vs stable · 唯一的差别是整合',
  big:'差别只有一个词：<b>integration</b>。<b>transient</b>：DNA 留在核里但<b>不进染色体</b>（叫 <b>episomal</b>），表达几天，随细胞分裂被稀释掉；<b>stable</b>：<b>整合进宿主染色体</b>，每个子细胞都继承',
  en:'“A transfection is either transient or stable, and the single difference is <b>integration</b>. Integration means the foreign DNA becomes part of a host chromosome, joined into it by covalent bonds. In a transient transfection it does not. The plasmid stays separate in the nucleus and is transcribed for a few days, and then it is diluted away as the cells divide. That separate state is called <b>episomal</b>. In a stable transfection the DNA integrates, so every daughter cell inherits it. Integration is rare and it happens at unpredictable places, so a stable line is made by keeping the cells under continuous selection and growing up the survivors.”',
  note:'<b>episomal 这个词全套卡里没有别处解释过</b>，就地交代。<br><b>「integration is rare and unpredictable」这半句是分数</b>：它解释了为什么 stable line 要花几周而 transient 第二天就能看，也解释了为什么必须有 marker。'},
 {n:'15', t:'两条常走的转染路线',
  big:'<b>lipofection</b>：DNA 跟<b>阳离子脂</b>配成颗粒，正电中和掉 DNA 的负电，颗粒被<b>内吞</b>进去；<b>viral vector</b>：把基因装进病毒，让病毒自己演化出来的进入机制干活',
  en:'“Two routes cover most of what is done. The first is <b>lipofection</b>. The DNA is mixed with <b>cationic</b> lipids, meaning lipids that carry a positive head group. They wrap it into a small particle, the positive charge cancels the negative charge of the DNA, and the particle is taken in by <b>endocytosis</b>. Endocytosis is the cell pulling a piece of its own membrane inward to swallow something. The second route is a viral vector, and there the virus contributes an entry mechanism it already evolved. Between the two sit the physical methods, electroporation and direct injection into the cell.”',
  note:'cationic、endocytosis、lipofection 三个词全套卡里没有别处解释过，就地交代。<br>其余常见路线被追问再给：<b>calcium phosphate co-precipitate</b>（最老的一种）和 <b>PEI</b>（一种阳离子聚合物）。<b>不要背各家试剂的效率数字</b>，那是产品参数不是生化。'},

 {g:'四个方法共用的那一件事 · 以及陷阱', gn:'这一组把四个词接成一个故事。<b>16 和 17 是这道题真正的落点</b>，18 是那个会让强项题翻车的陷阱。'},
 {n:'16', t:'selection marker · 为什么四个方法都必须有',
  big:'<b>selection marker ＝ 跟着外源 DNA 一起进去的一个基因，它的产物让带着它的细胞在一个能杀死其余细胞的条件下活下来。</b>四个方法都要它，理由是同一个：<b>绝大多数细胞什么也没拿到</b>',
  en:'“Every one of these methods needs a <b>selection marker</b>, and the reason is the same for all four. A marker is a gene carried in along with the foreign DNA whose product lets the cell that has it survive a condition that kills the rest. It is needed because the great majority of the cells take up nothing. And there is no way to see under a microscope which cell took the DNA. So the condition is imposed, and only the cells that took it up grow. In bacteria the marker is usually an antibiotic resistance gene, and the antibiotic goes into the plate. In mammalian cells it is usually resistance to a drug such as puromycin, or a fluorescent protein so that the cells can be sorted.”',
  warn:'⚠ <b>不要报效率数字。</b>「绝大多数细胞什么也没拿到」这个说法是安全的；一报百分比他就会问「哪个菌株、哪种方法、怎么测的」。转化效率的单位是 <b>colony-forming units per microgram of DNA</b>——他要数，就报<b>单位和判据</b>，说明它随菌株、方法和质粒大小变好几个数量级，不报一个值（LOGIC §11）。',
  note:'<b>marker 这个词卡 taq 用过但没正面定义过</b>，这里给定义，两张卡说法一致。<br>质粒为什么能留下来是<b>卡 16</b> 的 origin of replication，这里只引用不重复。'},
 {n:'17', t:'判据 · 把四个词接成一个故事的那一句',
  big:'<b>送进去是第一步，留下来是第二步。</b>四个词全都只描述第一步，而第二步每次都是同一个问题：这段 DNA 要么能自己复制，要么整合进染色体，否则就没了',
  en:'“The sentence that ties the four together is this. Getting the nucleic acid in is only the first step, and staying there is the second. In a bacterium a plasmid stays because it carries its own origin of replication, and the cells that have it are found with the marker. In transduction the injected DNA has no origin of its own, so it either recombines into the host chromosome or is degraded. In a eukaryotic cell the DNA stays only if it integrates, and otherwise the expression is transient. So the four words all describe the first step, and the second step is the same problem every time.”',
  note:'<b>这一句要背到是声音。</b>他问 “what is the difference” 时你已经给了轴；这一句是<b>他没问但一定会加分</b>的那一层——你把四个并列的名词接成了一条有方向的线。'},
 {n:'18', t:'⚠ 陷阱 · transformation 在癌症生物学里是另一件事',
  big:'<b>这本书里 transformation 唯一的生物学用法就是癌症那个</b>：p182 说糖脂和糖蛋白「大概也负责正常生长的细胞转变成恶性的」。<b>混合领域的考官很可能用的正是这个意思</b>',
  en:'“One word on this list carries a second meaning, and it is worth putting on the table myself. In cancer biology <b>transformation</b> means a normal cell acquiring the growth properties of a malignant one. That is the only biological sense in which this textbook uses the word. On p182 it says that glycolipids and glycoproteins of the cell surface are probably responsible for the transformation of normally growing cells into malignant ones. So if the question comes from that side, transformation is not about DNA uptake at all. I would ask which sense is meant rather than guess.”',
  note:'<b>这是这张卡最值钱的一条。</b>她说这道题是强项，而强项题的失分方式正是「把另一个意思的那个词答成了这个意思」——PESB 那次 cut / elute 就是同一个形状（LOGIC §1）。<br>书的另一处 <span class="pg">p056</span> 用 transformace 指 Michaelis–Mentenové 方程的<b>线性变换</b>（Lineweaver–Burk），那是数学不是生物，顺口提一句能显出你真的翻过书。<span class="pg">p182</span>'},
 {n:'19', t:'落点 · 这四个词里有三个在我的台面上',
  big:'每周都在做：把质粒<b>电转</b>进 E. coli（那是一次 transformation）· 把文库<b>转化</b>进酵母做展示（酵母是真核，但还是叫 transformation）· 用<b>抗性</b>把拿到 DNA 的那些挑出来',
  en:'“In my own work three of these appear every week. I put plasmids into <b>E. coli</b> by electroporation, and that is a transformation done electrically. I put a library into yeast for display, and although yeast is a eukaryote the field still calls that transformation. In both the read-out depends on a marker. For a library that matters twice over. The number of cells that take up DNA sets how many variants I can actually screen, so the efficiency of this one step is the ceiling on the diversity I can look at.”',
  note:'<b>这是全卡的落点，也是唯一一句能让他记住你是谁的话。</b>最后一句是故意留的口子（LOGIC §4：只留接得住的）——他顺着追就是文库大小、然后是题 #7 <b>fitness landscape</b>（卡 <b>land</b>）。⚠ 具体项目数据不写在卡上，考场上按需要报。'}
],
end:'<b>顺序：先划出处 → 给轴 → 四个定义各一句 → 三个去处一个做法 → 命名是约定（拿酵母证明） → competence 和热激 → 两种转导 → 整合 → selection marker → 进去只是第一步 → 癌症那个意思。</b><br>全卡的轴是一句话：<b>四个都是把外源核酸送进细胞，分歧只在「哪一种细胞」和「谁带它过膜」</b>。<b>electroporation 不在这条清单上</b>——它回答的是「你怎么做的」，所以「电转进大肠杆菌」仍然是一次 transformation。剩下的全是后果。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>先划出处</b>：书里 transfekce / transdukce / elektroporace / kompetence / plasmid 全 0；transformace 两处都不是这个意思',
 '“This is not textbook material. Three of the four words do not appear in this book at all, and the fourth appears twice and never in this sense. So everything here is general molecular biology or my own laboratory practice.”',
 '<b>书外题的第一句永远是出处。</b>把实验室的东西说成「书上说」，他翻得到。'],
['<b>轴</b>：四个都是把<b>外源核酸送进细胞</b>；区别只在<b>哪一种细胞</b>和<b>谁带它过膜</b>',
 '“All four name ways of getting foreign nucleic acid into a living cell. The difference is two questions asked of each. Which cell, and what carries the nucleic acid across the membrane.”',
 '<b>比较题先给轴再填轴。</b>交替列特征＝一张清单，不是一个理解（卡 03）。'],
['<b>transformation</b>：细菌把<b>裸 DNA</b> 自己拿进去，前提是 <b>competent</b>',
 '“The uptake of naked DNA by a bacterium straight from the solution around it. Naked means free in solution, not inside a coat and not inside a particle. Nothing delivers it, and the cell must be competent.”',
 'naked 和 competent 两个词承重，必须同句交代。'],
['<b>electroporation</b>：电场脉冲开出<b>短暂的孔</b>——<b>是做法，不是去处</b>',
 '“A physical method. A short field pulse opens transient pores in the membrane, the nucleic acid goes through while they are open, and the membrane reseals. It names a way of doing rather than a destination.”',
 '<b>这是整道题的心脏。</b>说不出这半句，四个词就只是四张卡片。'],
['<b>transduction</b>：<b>病毒当车</b>；细菌里是 <b>bacteriophage</b>，打包进壳再注进去',
 '“Transfer of DNA into a cell by a virus. For bacteria that is a bacteriophage, a virus that infects bacteria. It packages the DNA in its own coat and injects it, so the vehicle is a particle built for the job.”',
 '书 <span class="pg">p015</span> 说病毒「本身基本上只是繁殖所需的遗传信息」——那就是它能当车的理由。'],
['<b>transfection</b>：把核酸送进<b>真核细胞</b>；这个词是<b>历史</b>不是机制',
 '“The introduction of nucleic acid into a eukaryotic cell. No mechanism is implied. The word exists because in animal cell culture the word transformation was already taken, for a normal cell turning malignant.”',
 '<b>主动说「是历史不是机制」</b>，否则他一定往这里挖。'],
['<b>三个去处一个做法</b>：电转进 E. coli 仍然叫 <b>transformation</b>，电转进哺乳细胞叫 <b>transfection</b>',
 '“When I electroporate a plasmid into E. coli I have transformed those bacteria, by electroporation. When I electroporate a plasmid into a mammalian cell I have transfected them. The method did not change. The destination did.”',
 '<b>最后两句短句是落锤，背到是声音。</b>'],
['<b>命名是约定</b>：酵母是真核，按定义该叫 transfection，可全世界都说 <b>yeast transformation</b>',
 '“Yeast is a eukaryote, so by the strict definition putting a plasmid into it is transfection. Nobody says that. Everybody says yeast transformation, because yeast genetics grew out of microbial genetics. The words follow the field rather than the membrane.”',
 '<b>承认分类的边界，本身就是 researcher 的标志</b>（LOGIC §11），而且这一条正好落在她的台面上。'],
['<b>competence</b>：冰上的 <b>CaCl₂</b> 屏蔽两边的负电 ＋ 一次短促 <b>heat shock</b>。<b>机制没有定论</b>',
 '“Both sides are negative, the DNA backbone and the bacterial surface, so a divalent cation screens the repulsion. Then a brief heat shock is thought to drive the DNA through. I say thought because the mechanism is still not settled.”',
 '<b>「没有定论」要说出来。</b>编一个机制才是失分（LOGIC §11）。'],
['<b>两种转导</b>：generalised <b>错在装</b>（任何一段都可能）· specialised <b>错在切</b>（只能是整合位点的邻居，λ 的 <b>gal</b> 和 <b>bio</b>）',
 '“In generalised transduction a phage head takes a piece of host DNA by mistake, so any part of the genome can travel. In specialised transduction an integrated phage cuts off centre when it leaves and carries its neighbours out, so only genes beside that site can move.”',
 '记法：普遍性<b>错在装</b>，局限性<b>错在切</b>。'],
['<b>transient vs stable</b>：唯一的差别是 <b>integration</b>；不整合就叫 <b>episomal</b>，几天后稀释掉',
 '“The single difference is integration, meaning the foreign DNA becomes part of a host chromosome by covalent bonds. Without it the plasmid stays episomal and is diluted away as the cells divide. With it every daughter cell inherits it.”',
 '<b>integration 是这一半的全部内容</b>，其余（选几周、位置不定）都是它的后果。'],
['<b>selection marker</b>：四个方法都要，因为<b>绝大多数细胞什么也没拿到</b>',
 '“A marker is a gene carried in with the foreign DNA whose product lets the cell that has it survive a condition that kills the rest. It is needed because the great majority of cells take up nothing, and nothing about a cell shows which.”',
 '<b>「进去是第一步，留下来是第二步」</b>——这一句把四个并列的名词接成了一条线。'],
['⚠ <b>陷阱</b>：癌症生物学里的 <b>transformation</b> 是另一件事，而<b>书里唯一的生物学用法就是那个</b>',
 '“In cancer biology transformation means a normal cell acquiring the growth properties of a malignant one. That is the only biological sense in which this textbook uses the word, on p182. I would ask which sense is meant rather than guess.”',
 '<b>强项题的失分方式正是答了另一个意思的那个词。</b><span class="pg">p182</span>']
],

segs:[
 {tag:'段 1 · 定义', h:'先划出处，给轴，然后四个名字各一句',
  p:['“One thing first. This is not textbook material. Three of these four words do not appear in this book at all, and transformation appears twice and never in this sense. So what I say is general molecular biology or my own laboratory practice, and I will mark which.”',
     '“All four name ways of getting foreign nucleic acid into a living cell. So the difference is two questions asked of each one. Which cell, and what carries the nucleic acid across the membrane. Foreign means DNA or RNA that the cell did not make itself.”',
     '“Transformation is the uptake of naked DNA by a bacterium, straight from the solution around it. Naked means free in solution, not inside a protein coat and not inside a particle. Nothing delivers it, and the cell has to be competent, which means able to take DNA up at all.”',
     '“Electroporation is a physical method. A short pulse of electric field opens transient pores in the membrane, the nucleic acid passes while they are open, and the membrane reseals. Transduction is transfer of DNA into a cell by a virus, a bacteriophage in the case of bacteria. And transfection is the introduction of nucleic acid into a eukaryotic cell.”'],
  note:'<b>出处 → 轴 → 四个定义。</b>题面的五个实词在这四句里全部交代掉。<br>⚠ 第三句里的 naked 和 competent 是承重词，<b>同句带一个从句交代，不能只放定义链</b>（LOGIC §4b）。'},
 {tag:'段 2 · general', h:'把轴填满：三个去处、一个做法，以及命名是约定',
  p:['“Laid out that way the four fall into place. Transformation, transduction and transfection each say which cell took the nucleic acid up and what brought it there. Electroporation says how I did it. So when I electroporate a plasmid into E. coli I have transformed those bacteria, by electroporation. When I electroporate a plasmid into a mammalian cell I have transfected them. The method did not change. The destination did.”',
     '“And the naming is partly convention rather than mechanism. The clearest proof is yeast. Yeast is a eukaryote, so by the strict definition putting a plasmid into it is transfection. Nobody says that. Everybody says yeast transformation, because yeast genetics grew out of microbial genetics. The words follow the field rather than the membrane.”',
     '“There is also a second use of transduction, and an examiner may mean either. In cell culture it means delivering a gene into a eukaryotic cell with a viral vector. So a viral route into a eukaryotic cell is called transduction and a non-viral route is called transfection. The cell is the same. The word follows the vehicle.”'],
  note:'<b>「三个去处一个做法」和「命名跟着领域走」是这一段的两句落锤。</b>只列四个定义而不说这两句，他会觉得你在背名词解释。'},
 {tag:'段 3 · 稍展开', h:'三件底下的事：competence、两种转导、整合',
  p:['“Under transformation sits competence. Some species are naturally competent and carry a machine that binds DNA and pulls one strand in. E. coli is not, so competence is made. Both sides of the approach are negative, the DNA backbone and the bacterial surface, so a divalent cation such as calcium screens the repulsion. Then a brief heat shock is thought to drive the DNA in. I say thought because the mechanism is still not settled.”',
     '“Under transduction sit two kinds. In generalised transduction a phage head takes a piece of host DNA by mistake during packaging, so any part of the genome can travel. In specialised transduction the phage had integrated at one site, and when it comes back out it sometimes carries its neighbours with it. Phage lambda is the standard example, and the genes it takes are gal and bio.”',
     '“Under transfection sits integration. A transient transfection leaves the DNA separate in the nucleus, so it is expressed for a few days and then diluted away as the cells divide. A stable transfection means the DNA has become part of a chromosome, so every daughter cell inherits it. That is rare, so a stable line is made under continuous selection.”'],
  note:'〔可裁〕时间不够先砍第二句里的 gal 和 bio。<br>三句的形状是一样的：<b>一个词 → 底下那件事 → 一个具体的名字或数</b>。'},
 {tag:'段 4 · 留口子', h:'转进主场：这四个词里有三个在我的台面上，而效率就是文库的天花板',
  p:['“And all four of them end at the same place, which is why the question is one question. Getting the nucleic acid in is only the first step. Staying is the second, and that is what a selection marker is for. A marker is a gene carried in with the foreign DNA whose product lets the cell that has it survive a condition that kills the rest. It is needed because the great majority of cells take up nothing.”',
     '“In my own work three of these appear every week. I put plasmids into E. coli by electroporation, which is transformation done electrically. I put a library into yeast for display, and although yeast is a eukaryote the field still calls that transformation. In both the read-out depends on the marker.”',
     '“For a library that matters twice over. The number of cells that take up DNA sets how many variants I can actually screen. So the efficiency of this one step is the ceiling on the diversity I can look at, and that is why I electroporate rather than use chemical competence when I build one.”'],
  note:'<b>这一段是全卡的落点。</b>三个没交代的词（library、display、diversity）全在她的地盘，他追哪一个都答得住——题 #7 <b>fitness landscape</b>（卡 <b>land</b>）就在这条线上。⚠ 具体项目数据不在这张卡上，按需要现场报。'}
],

why:{
 rungs:[
  ['为什么外源 DNA 非要这四样里的一样？它自己不能走进细胞吗？','<b>不能，而且书自己给了理由。</b>膜的结构基础是<b>脂双层</b>，<span class="pg">p198</span> 说它有「明显非极性的中间和两个极性表面」，厚 3,5–4,0 nm。<span class="pg">p200</span> 说简单扩散过去的是<b>亲脂物质、水和一些离子</b>。而 DNA 正好是反面：<b>每个核苷酸一个负电荷</b>（卡 03），既高度极性又极大。细菌外面还多一层壁（<span class="pg">p015</span> Tab. 1.3：20 nm，多糖）。“So it needs a pore, a vehicle, or a coat that hides its charge — and those are exactly the four words in the question.”'],
  ['那有些细菌为什么会<b>有</b>一套专门拿 DNA 的机器？','<b>因为那是被选出来的。</b>天然 competence 不是膜漏了，它是<b>基因编码的、受调控的</b>：有专门的蛋白把 DNA 结合在表面、把一条链拉进去，而且只在特定条件下打开。<b>会花代价、又受调控的性状，是被选择保留的性状。</b>通行的解释有三个，而且并存：① 获得新基因（水平基因转移，抗性就是这么传的）② 拿外源 DNA 当<b>修复模板</b> ③ 拿 DNA 当<b>营养</b>，核苷酸和磷都是稀缺的。'],
  ['那到底是哪一个？','<b>这一问就撞到地基了。</b>三个解释都有实验支持，而且它们<b>不互斥</b>——同一套机器可以同时干三件事。更麻烦的是：一个性状<b>现在起什么作用</b>，和它<b>当初为什么被选出来</b>，是两个问题，后者没有直接证据可看。这是进化解释的通病，不是这个例子特有的。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that the question stops being biochemical and becomes one about why a trait was selected. Competence costs the cell a dedicated protein machine and it is switched on under particular conditions, so it was selected for something. All three explanations have experimental support and they are not exclusive. But what a trait does now and what it was selected for are different questions, and only the first one can be measured. So I would rather say that than pick one.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is transformation?',
 mean:'<b>他嘴里的最短问法，就这么短。</b>所以答案要自带结构：是什么 → 进的是哪种细胞 → 谁带它过膜 → 前提是什么 → <b>而且这个词还有另一个意思</b>。说完最后一句就停，让他挑方向。',
 say:'“Transformation is the uptake of naked DNA by a bacterium, straight from the solution around it. Naked means free in solution, not inside a protein coat and not inside a particle. Nothing delivers it, so the cell itself has to be competent, meaning able to take DNA up from outside. Most bacteria are not, so in the lab competence is made, either with cold divalent cations and a heat shock or by an electric pulse. I should add that the word has a second meaning. In cancer biology transformation is a normal cell acquiring the growth properties of a malignant one, and that is the only sense in which this textbook uses it.”'},

{q:'What is the difference between transformation, electroporation, transduction, and transfection?',
 mean:'<b>卷面题面。</b>四个词并列摆着，就是在看你会不会<b>先给轴</b>。给轴 → 四个定义 → 三个去处一个做法 → 命名是约定。到这里就停，别把 competence 和整合一起倒出来（LOGIC §12：答八分）。',
 say:'“All four are ways of getting foreign nucleic acid into a living cell, so the difference is two questions asked of each. Which cell, and what carries the nucleic acid across the membrane. Transformation is a bacterium taking up naked DNA by itself, if it is competent. Transduction is a virus carrying DNA in, a bacteriophage in the case of bacteria. Transfection is introduction of nucleic acid into a eukaryotic cell. And electroporation is a physical method, a field pulse that opens transient pores. That last one is not a fourth destination. It is a way of doing the others. So electroporating a plasmid into E. coli is still a transformation, and into a mammalian cell it is a transfection. I would add that the naming is partly convention. Yeast is a eukaryote, and everybody still says yeast transformation.”'},

{q:'Is electroporation a kind of transformation?',
 mean:'<b>这是这道题真正在问的东西</b>，而且他很可能直接这样问。答案：<b>不是种属关系，是两个不同的问题</b>。给一句判据，给两个例子，停。',
 say:'“Not a kind of it, but a way of doing it. Transformation says what happened, which is that a bacterium ended up with foreign DNA. Electroporation says how it was made to happen, which is a field pulse opening transient pores. So the two words answer different questions and both can be true of one experiment. Electroporating a plasmid into E. coli is a transformation carried out by electroporation. The same pulse applied to a mammalian cell is a transfection carried out by electroporation. The method is neutral about the destination.”'},

{q:'What is the difference between transformation and transfection?',
 mean:'<b>最常见的两两比法。</b>先给轴（<b>进的是哪种细胞</b>），再说清<b>这个区分一半是约定</b>，最后给酵母那个反例。',
 say:'“One axis, which is which cell. Transformation is used for bacteria taking up naked DNA, and transfection for nucleic acid going into a eukaryotic cell. But I would say plainly that the distinction is partly historical. Transfection was coined because in animal cell culture transformation already meant a normal cell turning malignant. The best evidence that it is convention is yeast. Yeast is a eukaryote, so strictly it should be transfection, and everybody says yeast transformation instead. There is one real difference underneath. A bacterial plasmid stays because it carries its own origin of replication, while in a eukaryotic cell the DNA is lost within days unless it integrates.”'},

{q:'What is transduction and what are its two types?',
 mean:'定义一句，然后<b>两种的区别在哪一步出错</b>。⚠ lytic 和 lysogenic 两个词要就地交代，别当作他懂。',
 say:'“Transduction is transfer of DNA into a cell by a virus, and for bacteria that virus is a bacteriophage. There are two kinds, and the difference is which step goes wrong. In generalised transduction the phage is packaging at the end of a lytic infection, meaning it has multiplied and is about to burst the cell. The host chromosome is already cut up, and a head sometimes takes a piece of host DNA by mistake. So any part of the genome can travel. In specialised transduction the phage was lysogenic, meaning its DNA had integrated at one particular site and sat quiet. When it excises it sometimes cuts off centre and takes its neighbours along. So only genes beside that site can move, and for phage lambda those are gal and bio.”'},

{q:'How would you get a plasmid into E. coli?',
 mean:'<b>方法题，这位老师的口味。</b>先说这叫什么（transformation），再给两条路，再说怎么知道成功了。<b>落在 marker 上就停。</b>',
 say:'“That operation is a transformation, and there are two routes in ordinary use. The chemical one makes the cells competent with cold divalent cations, generally calcium chloride, then mixes in the DNA on ice and gives a brief heat shock. The physical one is electroporation, where the cells are washed free of salt and given a field pulse that opens transient pores. Electroporation is the more efficient of the two, which is why I use it when I build a library. Either way the cells then recover in rich medium without antibiotic for a while, so the resistance gene can be expressed, and only then go onto a selective plate. The colonies that grow are the ones that took up the plasmid.”'},

{q:'What does competent mean?',
 mean:'<b>单拎一个词出来，是他最常用的问法。</b>先说它是什么状态，再说不是每种菌都有，再说实验室怎么做出来。',
 say:'“Competent means that a bacterium is in a state where it can take up DNA from outside. It is not something every bacterium can do. Some species are naturally competent and carry genes for a machine that binds DNA at the surface and pulls one strand in, with Bacillus subtilis and Streptococcus pneumoniae as the usual examples. There the state is regulated and switched on under particular conditions. E. coli is not naturally competent in any useful way, so in the lab the state is made, either chemically or by an electric pulse. The made version is not the same thing as the natural one, and I would keep the two apart.”'},

{q:'Why does every one of these methods need a selection marker?',
 mean:'先定义 marker（一句），<b>再回答「为什么非要」</b>——那才是问的那个问题。答案是一句话：绝大多数细胞什么也没拿到，而且看不出来是哪些。',
 say:'“A selection marker is a gene carried in along with the foreign DNA whose product lets the cell that has it survive a condition that kills the rest. It is needed because the great majority of the cells take up nothing, and nothing visible distinguishes the ones that did. So instead of finding them, the condition is imposed and only they grow. In bacteria that is usually an antibiotic resistance gene with the antibiotic in the plate. In mammalian cells it is usually resistance to a drug such as puromycin, or a fluorescent protein so the cells can be sorted. Without a marker the successful cells are simply lost among the rest.”'},

{q:'How does a viral vector vaccine work?', odd:1,
 mean:'<b>便装题，答案整张卡上都有。</b>问的其实是 <b>transduction</b>。先说它是什么，再说为什么用病毒当车，再说它不整合。',
 say:'“Generally, that kind of vaccine is transduction used deliberately. A viral vector carries the gene for one protein of the pathogen, usually a surface protein. The virus is modified so that it cannot multiply, and what is kept is its entry mechanism, which is the part evolution already optimised. It delivers the gene into your own cells, they transcribe and translate that one protein, and the immune system responds to it. The vector DNA generally stays episomal rather than integrating, so the expression is transient. That is the same transient and stable distinction as in transfection, and here transient is what is wanted.”',
 tail:'⚠ <b>不点具体产品和厂商</b>，说 “that kind of vaccine” 就够。这条题的全部生化内容是 transduction ＋ episomal ＋ transient。'},

{q:'Why do bacteria become resistant to antibiotics so quickly?', odd:1,
 mean:'<b>听起来是医学题，其实是这张卡的正题。</b>答案是<b>三条水平基因转移的路</b>，而其中两条就写在题面上。',
 say:'“Because resistance does not have to be invented in each lineage. It can be handed across. Bacteria have three natural routes for taking in DNA from outside their own line of descent, and two of them are in this question. Transformation is uptake of naked DNA released by dead cells. Transduction is a bacteriophage carrying a piece of one bacterium into another. And conjugation is direct contact through a pilus, a protein tube, which is the route that moves whole resistance plasmids. Then the antibiotic itself is the selection. It kills the cells without the gene, so one rare recipient becomes the whole population.”',
 tail:'<b>最后两句是这条题的分数</b>：它把 selection marker 那一格和自然界接上了——<b>培养皿里的抗性平板，和医院里的抗生素，是同一个选择</b>。'},

{q:'Why is there an antibiotic in the agar plate?', odd:1,
 mean:'<b>最像闲聊的一条，问的是 selection。</b>先说这是在干什么，再说为什么不能不用。',
 say:'“Because the plate has to do the finding for me. When I transform bacteria, the great majority of the cells take up nothing, and no microscope will tell me which ones did. So the plasmid carries a resistance gene, the antibiotic goes into the agar, and only the cells that took the plasmid up can grow. Every colony on that plate is therefore a cell that received DNA, and it is also a clone, because it grew from one cell. That is two things the plate gives me at once, selection and separation.”',
 tail:'<b>「一个菌落就是一个克隆」这半句值钱</b>，它是菌落 PCR 和挑单克隆的前提，也接得上卡 <b>taq</b>。'},

{q:'A cancer paper says the cells were transformed. Does that mean someone put DNA into them?', odd:1,
 mean:'<b>这条就是那个陷阱，反过来问。</b>答：不是，而且这是这个词最常见的歧义。',
 say:'“No, and that is the trap in this word. In cancer biology transformation means a normal cell acquiring the growth properties of a malignant one, such as growing without anchorage or without a growth signal. It says nothing about anyone adding DNA. This textbook uses the word only in that sense. On p182 it says that glycolipids and glycoproteins of the cell surface are probably responsible for the transformation of normally growing cells into malignant ones. If someone had put DNA into a eukaryotic cell they would say transfected or transduced. So the safe move is to ask which sense is meant.”',
 tail:'<b>她说这道题是强项，而强项题就是这样翻车的。</b>把这条当成整张卡的最后一道保险。<span class="pg">p182</span>'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认这些词你都会，所以他问的方式是把词单拎出来。<b>每条先说它是什么</b>，再说它在这道题里起什么作用。', items:[
{r:'高', q:'What do you mean by naked DNA?',
 en:'“Naked DNA is DNA free in solution, with nothing around it. It is not packaged in a protein coat, not inside a virus particle, and not wrapped in lipid. The word matters here because it is exactly what separates transformation from transduction. In transformation the DNA arrives on its own and the cell has to do the work. In transduction it arrives inside a particle built to deliver it. Generally the term also covers plasmid DNA injected directly into tissue, where again nothing carries it.”',
 cn:'<b>naked 是 transformation 定义里的承重词</b>，不解释的话「细胞自己拿进去」这个结论就空了（LOGIC §4b）。'},
{r:'高', q:'What is a bacteriophage?',
 en:'“A bacteriophage is a virus that infects bacteria. It is a piece of nucleic acid inside a protein coat, with a structure for attaching to the bacterial surface and injecting that nucleic acid. The textbook does not use the word, but its definition of a virus on p015 is exactly the reason a phage can be used this way. It calls a virus an intracellular parasite, simpler than a prokaryotic cell, and essentially only the genetic information needed for its reproduction. A delivery device for nucleic acid is what that description amounts to.”',
 cn:'⚠ bakteriofág 全书 0 命中，但 <span class="pg">p015</span> 的病毒定义可以整句引。<b>卡 12 用过 phage 这个词（T7 RNA polymerase）但没定义</b>，这里补上，两张卡说法一致。'},
{r:'高', q:'What is a vector?',
 en:'“In this context a vector is a piece of DNA built to carry a gene into a cell and keep it there. A plasmid vector carries its own origin of replication so that it is copied by the host, plus a selection marker, plus a place to put the insert. A viral vector is a virus stripped of the genes it needs to multiply, keeping only the parts that get it into a cell. So the word names a carrier, not a method. Transformation, transduction and transfection are how a vector is delivered.”',
 cn:'⚠ 书里 vektor 只有 <span class="pg">p141</span><span class="pg">p142</span> 的 vektorový charakter（矢量的），跟这个词毫无关系——<b>别顺嘴说「书上讲 vector」</b>。origin of replication 在<b>卡 16</b>，质粒的来历在大本营卡 <code>x_plasmid</code>。'},
{r:'高', q:'What is a selection marker, and what kinds are there?',
 en:'“A selection marker is a gene carried in with the foreign DNA whose product lets the cell that has it survive or be identified under a condition applied to all the cells. There are two shapes. A selectable marker kills the cells without it, and antibiotic resistance in bacteria is the usual case. A screenable marker only labels the cells that have it, and a fluorescent protein is the usual case, so the cells are sorted instead of killed. Generally a construct carries both, one to survive the plate and one to see the result.”',
 cn:'<b>「选」和「筛」分开说，是这一条的分数</b>：前者杀掉其余的，后者只是标出来。卡 <b>taq</b> 用过 selectable marker 这个词，没正面定义，这里是它的定义。'},
{r:'中', q:'What does episomal mean?',
 en:'“Episomal means the foreign DNA is present in the cell but separate from the host chromosome, not joined into it by covalent bonds. It can still be transcribed, so the gene works, but it is not inherited reliably. As the cells divide it is distributed unevenly and it is diluted away, which is why a transient transfection lasts days rather than indefinitely. A bacterial plasmid is the opposite case. It is also separate from the chromosome, but it carries its own origin of replication, so it is copied every generation and stays.”',
 cn:'<b>这一条把两件事接上了</b>：为什么细菌的质粒留得住而哺乳细胞的转染留不住——差别不在「分不分开」，在<b>有没有自己的复制起点</b>（卡 16）。'},
{r:'中', q:'What does lysogenic mean?',
 en:'“Lysogenic describes a phage whose DNA has integrated into the host chromosome and sits quiet there, copied along with the chromosome every time the cell divides. Nothing is made and the cell is not killed. The alternative is lytic, where the phage multiplies at once and bursts the cell. A lysogenic phage can later switch to the lytic route, generally when the cell is stressed. Specialised transduction exists only because of the lysogenic state, since a phage has to have been integrated somewhere before it can leave with its neighbours.”',
 cn:'<b>lytic 和 lysogenic 在这套卡里没有别处解释过</b>（terms 查过），所以必须就地交代。最后一句是这条的分数：它说明了「为什么只有局限性转导有位点限制」。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方。<b>书没有理由的先划出处再解释。</b>', items:[
{r:'高', q:'Why can DNA not simply diffuse into a cell?',
 en:'“Because of what the membrane lets through and what DNA is. The textbook says on p198 that the structural basis of a membrane is a lipid bilayer with a markedly non-polar middle and two polar surfaces, about three and a half to four nanometres thick. And on p200 it says simple diffusion carries lipophilic substances, water and some ions. DNA is the opposite of lipophilic. It carries one negative charge per nucleotide along the whole backbone, and a plasmid is enormous next to any of those. A bacterium has a wall on top of that, twenty nanometres of polysaccharide by the book’s own table on p015. So it needs a pore, a vehicle, or a coat that hides the charge.”',
 cn:'<b>这是这张卡跟书最实的一段</b>：三条都有页码，而且三条合起来正好推出题面的四个词。每个核苷酸一个负电荷是<b>卡 03</b> 的说法，保持一致。<span class="pg">p015</span><span class="pg">p198</span><span class="pg">p200</span>'},
{r:'高', q:'Why calcium chloride, and why the heat shock?',
 en:'“The calcium is there for charge. The DNA backbone is negative and the bacterial surface is negative, so they repel, and a divalent cation between them screens that repulsion and lets the DNA come close. The cold keeps the membrane rigid meanwhile. The heat shock is a sudden change imposed on that state, and it is thought to drive the DNA across, in ordinary practice around forty-two degrees for well under a minute. I say thought deliberately. The detailed mechanism is still argued, and I would rather say that than give you a story I cannot defend.”',
 warn:'⚠ 四十二度是 protocol 的常用区间，<b>不是书上的常数</b>，一定带 “in ordinary practice”。秒数不报——不同 protocol 差三倍。',
 cn:'<b>「机制没有定论」这句本身就是分数。</b>他要是追到底，那就是停止线（LOGIC §6）；硬编一个机制才是失分。'},
{r:'高', q:'What actually happens to the membrane during an electric pulse?',
 en:'“The field puts a voltage across the membrane itself, because the membrane is a thin insulator between two conducting solutions. Above a threshold that voltage destabilises the bilayer and water-filled pores open through it. They are transient, closing again within seconds once the field is off, and the nucleic acid moves through while they are open. Generally the pulse is described by two numbers, the field strength and its duration. In ordinary bacterial practice that is a few kilovolts per centimetre for milliseconds, and mammalian cells are pulsed more gently for longer. I give those as a working range in a protocol, not as constants.”',
 warn:'⚠ <b>电压和脉冲长度必须说成「protocol 的常用区间」</b>，而且要点明真正决定成败的是<b>膜上的电压</b>，不是仪器面板上的数。不同 cuvette 间距、不同细胞，数值差很多。',
 cn:'<b>「膜是两层导电溶液之间的薄绝缘层」这半句是这条的形状</b>——它把电穿孔从一个操作变成一个能推的物理事实，而且落在台面化学之内（LOGIC §5）。'},
{r:'中', q:'Why must the sample be free of salt before electroporation?',
 en:'“Because a conducting sample carries current instead of holding the field. If the salt concentration is high the pulse arcs across the cuvette, the sample is heated and the cells are killed, and nothing is delivered. So in the lab the cells are washed several times into water or into glycerol, and the DNA is desalted too. That is why a ligation cannot be electroporated straight from the tube. This is one of the practical reasons chemical competence is still used. It tolerates a dirty sample, and electroporation does not.”',
 cn:'<b>这一条最能显出你真的做过。</b>它同时回答了「两种方法什么时候选哪个」——效率高的那个对样品挑剔。'},
{r:'高', q:'Why does a stable transfection need continuous selection?',
 en:'“Because integration is rare and unpredictable. In most of the cells the DNA stays separate and is diluted away as they divide, and in a small minority it becomes part of a chromosome. Nothing about a cell shows which happened, so the drug is left in the medium and only the cells with an integrated resistance gene keep growing. It stays in afterwards because a cell can still lose or silence the inserted copy, and a cell without the burden of expressing it grows a little faster. Take the selection away and the population drifts back.”',
 cn:'<b>最后两句是这条的分数</b>：不是「加了药才长出来」，是<b>不加药它会退回去</b>。这一层他多半没预期你会说。'},
{r:'中', q:'Why is a phage a good vehicle for DNA at all?',
 en:'“Because that is what a phage already is. The textbook puts it better than I would, on p015. It calls a virus an intracellular parasite, simpler than a prokaryotic cell. The virus uses the host’s biochemical apparatus, and it is essentially only the genetic information needed for its reproduction. So a virus is a nucleic acid with a delivery system around it, and evolution has already solved the two hard parts. It recognises the right cell surface, and it gets the nucleic acid across the membrane. Transduction is that machine carrying something other than its own genome.”',
 cn:'<b>用书的定义解释一个书里完全没有的过程</b>——这是书外题最稳的接法，跟卡 <b>taq</b> 用 p035 的 denaturace 定义解释 PCR 是同一个动作。<span class="pg">p015</span>'}
]},

{g:'怎么发现的', gn:'⚠ 人名和年份<b>全部是通用知识</b>，只有 1944 那一行是书上的，而且书<b>没有</b>说那个实验叫什么、怎么做的。先给书的那一行，再给通用的故事。', items:[
{r:'中', q:'How was transformation discovered?',
 en:'“The line this textbook gives is in its chronological table on p009. For 1944 it records the proof that genetic information is transferred by DNA, with Avery’s name. That experiment was a transformation. Bacteria of a harmless strain were given material from a killed virulent strain and became virulent themselves, and the question was which molecule carried that change. Removing protein changed nothing. Removing DNA abolished it. So the answer to what the gene is made of came out of a transformation experiment. The book records the conclusion without naming the method.”',
 warn:'⚠ 只说到这里。Griffith、肺炎链球菌的株型、1928 这些名字和年份<b>书里全是 0 命中，本仓库也没核过</b>——被问细节就说 “that is the line I can give from this book”。',
 cn:'<b>这是这张卡最漂亮的一条</b>：书的年表里那一行讲的<b>就是</b>转化实验，只是书不叫它 transformation。<b>先引书再给故事，最稳。</b><span class="pg">p009</span>'},
{r:'中', q:'Why is the word transfection different from the others?',
 en:'“Because it was made to avoid a collision. By the time nucleic acid was being put into animal cells in culture, transformation already had a meaning in that field, which was a normal cell turning malignant. So a separate word was built for the laboratory operation. That is also why the boundary between the words is not mechanistic. Yeast work kept the word transformation because it came out of microbial genetics, and cell culture kept transfection. Knowing that the split is historical is more useful than trying to find a physical rule behind it.”',
 cn:'<b>「知道这个分界是历史的，比去找一条物理规则更有用」</b>——这句话的形状跟 LOGIC §11 的「分类是人划的」是同一个，说出来本身就是加分。'}
]},

{g:'陷阱', gn:'六句最容易说错的话。<b>前两条最贵</b>，因为它们会让一个懂的人听起来像不懂。', items:[
{r:'高', q:'「四个是四种并列的方法」',
 en:'“Not quite, and the distinction is the point of the question. Three of them say where the nucleic acid ended up and what carried it. Electroporation says how the operation was performed. So they are not four items on one list. They are three destinations and one method, and the method can serve any of the destinations. Putting a plasmid into E. coli by an electric pulse is a transformation performed by electroporation.”',
 cn:'<b>这一条几乎一定会被问到，或者被你自己说错。</b>四个词并排摆在题面上，本来就在引诱你列成四条。'},
{r:'高', q:'「transformation ＝ 细菌，transfection ＝ 真核，规矩就这么定的」',
 en:'“That is the rule of thumb, and it breaks on yeast. Yeast is a eukaryote, and putting a plasmid into it is called transformation by everyone who does it. The reason is historical rather than mechanistic. Yeast genetics grew out of microbial genetics and kept the microbial word, while transfection stayed with animal cell culture. So I would give the rule and then say that it is a convention with a known exception, rather than state it as a law.”',
 cn:'<b>说出这条反例，比把规则背得更牢有用</b>，而且酵母正好是她的台面（yeast display）。'},
{r:'高', q:'「用慢病毒把基因送进细胞，这叫 transfection」',
 en:'“That is the one people say wrongly most often. When the vehicle is a viral vector the word is transduction, even though the destination is a eukaryotic cell. Transfection is used when the nucleic acid goes in by a non-viral route, so lipid particles, cationic polymers, calcium phosphate, electroporation or injection. Same cell, different word, and the word follows the vehicle. It is not only pedantry, because the two also differ in outcome. Lentiviral vectors integrate, and most transfections do not.”',
 cn:'<b>最后两句把一个用词问题变成了一个生物学问题</b>——这才是他想听的。'},
{r:'高', q:'「transformation 就是把 DNA 弄进细胞」——在癌症的语境里',
 en:'“In cancer biology transformation means something else entirely. There it is a normal cell acquiring the growth properties of a malignant one, such as growing without anchorage or without an external growth signal. No DNA is being added by anyone. This textbook uses the word only in that sense, on p182. So if the question comes from a cell biology or pathology direction, the right move is to ask which sense is meant rather than answer the wrong one confidently.”',
 cn:'<b>这道题是她的强项，而强项题的失分方式就是这一条</b>：答案本身没错，但不回答被问的那个问题（LOGIC §9，PESB 那次 cut / elute 是同一个形状）。<span class="pg">p182</span>'},
{r:'中', q:'「competent cells 就是买来的那管东西」',
 en:'“Competence is a state, not a product. It means the cell can take DNA up from outside. Some species are naturally competent and have a regulated protein machine for it, and E. coli is not one of them, so the state is imposed on it in the lab. What is in the tube is E. coli that has been treated to be in that state and then frozen. Calling the state and the reagent by the same name is fine in the lab, but in an answer I would separate them, because the natural process and the laboratory one are not the same mechanism.”',
 cn:'<b>把「天然的」和「做出来的」分开，是这一条的全部内容。</b>不分开的话，下一刀就是「那细菌为什么会有这个能力」，而那一问是 why 三层的第二层。'},
{r:'中', q:'「电穿孔把膜打穿了，所以细胞就死了」',
 en:'“The pores are transient by design. They open while the field is above a threshold and reseal within seconds afterwards, and that resealing is what makes the method usable. Cells are lost, and the fraction lost rises with the strength and length of the pulse, so a protocol is a compromise between delivery and survival. But a pulse that killed everything would deliver nothing I could grow. The way I check is that the surviving cells form colonies on a non-selective plate as well.”',
 cn:'<b>最后一句是实验室的说法</b>，也是一个真的对照。「transient」这个词在这里承重，不交代它，「打了孔细胞还活着」听起来就像矛盾。'}
]},

{g:'相邻考点与主场', gn:'这张卡自己没有书页，但它<b>四面都贴着别的卡</b>。每条一句话就够，能接上就行。最后两条是落点，也是 2–3 道「来自你自己的工作」的题里的一道。', items:[
{r:'中', q:'→ 卡 16 · DNA 复制，以及质粒为什么留得住',
 en:'“The reason a plasmid stays in a bacterium is not the way it got in. It is that the plasmid carries its own origin of replication, so the host’s machinery copies it every generation independently of the chromosome. That is the same polymerase, primase and ligase the textbook describes for the chromosome. In a eukaryotic cell a transfected plasmid has no such origin, so it is diluted away unless it integrates. Getting in and staying in are two separate problems, and only the second one is about replication.”',
 cn:'<b>origin of replication 在卡 16 定义过，这里只引用不重复。</b>质粒本身书里 0 命中，材料在大本营卡 <code>x_plasmid</code>。'},
{r:'中', q:'→ 卡 12 · 操纵子，以及送进去之后表达什么',
 en:'“Once the DNA is in and selected for, the question becomes whether it is expressed, and that is a promoter question. My bacterial plasmids carry the gene behind a promoter with a lac operator, so I induce with IPTG. The same construct that carries the gene carries the resistance marker, so one selection keeps both. Jacob and Monod’s experiment is also relevant here in another way. They moved a normal lacI and lacZ into a cell lacking both by conjugation, which is the third natural route of DNA transfer.”',
 cn:'<b>conjugation 在卡 12 已经用过</b>，说法保持一致。启动子、操纵子、IPTG 全在卡 12，这里只点一句。'},
{r:'中', q:'→ 卡 taq · 转化之后第一步就是菌落 PCR',
 en:'“The plate after a transformation is the input to the next method. Each colony is a clone, because it grew from one cell, so colony PCR asks which colonies carry the insert. That is the case where Taq is the right enzyme, because the question is only whether a band is there. The plasmid I put in was made with a proofreading enzyme instead, because that sequence will be expressed. So the choice of polymerase and the choice of delivery method are two decisions in one workflow.”',
 cn:'<b>这一条把两张书外卡接成一条工作流</b>，说得出来就证明你不是在背名词。判据那句在卡 <b>taq</b> 第 12 点，别给两个版本。'},
{r:'实测', q:'Where does this come into your own work?',
 en:'“Three of the four are weekly for me. I put plasmids into E. coli by electroporation, which is transformation done electrically, and I use the pulse rather than chemical competence because it is more efficient. I put libraries into yeast for display, and although yeast is a eukaryote the field calls that transformation as well. In both, what I recover is defined by the marker. And the efficiency of that one step is the ceiling on my experiment, because the number of cells that take up DNA is the number of variants I can screen.”',
 cn:'<b>这是这道题的满分答案，而且它是一个故事不是一张清单。</b>用通用说法（a library, for display），具体项目数据留给 mywork 的窗口。'},
{r:'高', q:'→ 题 #7 · 为什么转化效率决定了文库能有多大',
 en:'“A library is worth exactly the number of independent variants that are actually inside cells. Each cell that takes up one plasmid becomes one member, so the transformation step sets the size of the library, and everything downstream can only sample what is there. If the step is inefficient the library is small, and a small library samples a tiny corner of sequence space. That is the link to the fitness landscape. How much of the map I can see is set here, at the step that looks like a technical detail.”',
 cn:'<b>题 #7 是另一道 w3 的书外题</b>（卡 <b>land</b> 已经做了）。这一句是两张卡之间的门：<b>一个看起来纯技术的步骤，决定了能看到多少张地图</b>——这种句子是考官会记住的。'}
]}
]
});
