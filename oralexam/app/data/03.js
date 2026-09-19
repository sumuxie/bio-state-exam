/* 卡 03 · What are the differences between DNA and RNA?
   题库 #3（S1 Biochemistry 3 ＋ S3 Biochemistry 2）· 导师写过两遍
   出处 Biochemie OCR p066、p067、p070、p072、p073、p075、p076、p079、p081、p085、p086、p087、p088、p089、p090、p091、p096
   题型：比较题。第一张这个类型，形状见 recog 第一行。 */

window.CARDS.push({
id:'03', n:3, merged:[15], w:3,
q:'What are the differences between DNA and RNA?',
qcn:'DNA 和 RNA 有什么区别',
sub:'主干说完约 80 秒 · 比较题 · 导师写过两遍',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 比较题的第一句决定成败：先说比较的轴，再往轴上填。交替列特征＝一张清单，不是一个理解。'},
 {n:'01', t:'上位类',
  big:'两者都是<b>核酸</b>：储存和传递遗传信息的大分子；化学上是 <b>polynucleotide</b>。DNA 是信息的载体，RNA 是蛋白合成的直接模板',
  en:'“Both are nucleic acids — the macromolecules that <b>store and transmit genetic information</b>. Chemically they are polynucleotides, chains of nucleotides joined by <b>phosphodiester bonds</b>. A nucleotide is a nitrogenous base, a purine or a pyrimidine, plus a pentose and at least one phosphate. DNA is the material carrier of the information, stored as the order of its bases. RNA is the working copy — the direct template for protein synthesis.”',
  note:'先给共同的上位类，<b>而且要说各自是什么、干什么</b>。书 p066 §4.1 第一句就是功能定义（书自己那句话的英译：<i>they store and transmit genetic information</i>）；p076 DNA 是遗传信息的物质载体，信息以碱基顺序存储；p085 DNA 不是蛋白合成的直接模板，模板是 RNA。<b>只列三条化学区别、不说各自是什么，就是卡 01 三级结构那种错——判据不是定义。</b>'},
 {n:'02', t:'四条轴',
  big:'区别是<b>三条化学轴 ＋ 一条功能轴</b>：<b>糖</b>、<b>其中一个碱基</b>、<b>链数</b>、<b>各自干什么</b>',
  en:'“So there are four differences. Three of them are chemical: <b>which pentose, which bases, and how many chains</b>. The fourth difference is <b>what each one is for</b>, and that is what the chemistry is paying for.”',
  note:'<b>这一句是整题的骨架。</b>说完它，后面无论他挑哪一条追，你都在自己的框架里答。<br><b>这一招适用于所有比较题</b>（#14、#28 都用它）。<br>⚠ <b>以前这句话只开了三个口，后面只交了三条轴</b>——答应了四样只给三样，是比少说一条更贵的失分。'},

 {g:'四条轴分别是什么', gn:'一条一句，不要展开。展开留给段 3。<b>前三条是化学，第四条是功能——而前三条都在为第四条付账。</b>'},
 {n:'03', t:'轴一 · 糖',
  big:'DNA 是 <b>2-deoxy-D-ribose</b>，RNA 是 <b>D-ribose</b>——差别就是一个 <b>2′-OH</b>',
  en:'“DNA has 2-deoxy-D-ribose, RNA has D-ribose. The whole difference is one hydroxyl — the one on <b>carbon two of the sugar ring</b>. We write it 2-prime because the sugar carbons are primed to keep them apart from the numbering of the base.”',
  note:'<b>「差别就是一个羟基」这个说法值钱</b>，因为它把一个名词差异变成了一个可以往下追的化学事实。<span class="pg">p067</span>'},
 {n:'04', t:'轴二 · 碱基',
  big:'共用 A、G、C；<b>uracil 实际上只在 RNA</b>，<b>thymine 主要在 DNA</b>',
  en:'“Both use the purines adenine and guanine and the pyrimidine cytosine. Of the other two pyrimidines, uracil is found <b>practically only</b> in RNA, and thymine <b>predominantly</b> in DNA. The textbook is careful with those words, and so am I.”',
  note:'<b>书用的就是这两个限定词</b>（书上印的那两个限定词，英译就是 practically only 和 predominantly）。<b>不要说「thymine 只在 DNA」</b>——tRNA 的 T-loop 里有 ribothymidine（通用知识；书 p087 只说 tRNA 环上有「minor bases」——书上印的就是这个词，这里给的是英译——没点名）。<b>跟着书加限定词，本身就是分数。</b><span class="pg">p067</span>'},
 {n:'05', t:'轴三 · 链数',
  big:'DNA 通常是<b>右手双螺旋</b>；mRNA 和 rRNA 是单链，<b>但 rRNA 有配对成螺旋的局部</b>',
  en:'“DNA is normally a right-handed double helix. Messenger and ribosomal RNA are single-stranded — though parts of ribosomal RNA pair up into helices.”',
  note:'<b>后半句必须说。</b>「RNA 是单链」这句话只对 mRNA 的整体拓扑成立，rRNA 和 tRNA 都有二级结构。<span class="pg">p086</span>'},

 {n:'06', t:'轴四 · 功能',
  big:'DNA <b>存</b>全部遗传信息；RNA 是<b>其中一条指令的临时拷贝</b>——而“拷贝”这个角色<b>只属于 mRNA</b>',
  en:'“The fourth axis is what each one is for. DNA stores the genetic information. RNA is a temporary copy of one specific instruction. Two contrasts make that precise. DNA is the whole archive, and one RNA is a single entry taken out of it. And DNA is permanent, while an RNA is made when it is needed and then destroyed. The copy role belongs to messenger RNA. Transfer and ribosomal RNA are not copies of an instruction at all. They are working parts of the machinery that reads the copy, and some RNA is catalytic.”',
  note:'<b>这是她自己的说法，照说。</b>两个对比把它说准：<b>全部 vs 一条</b>、<b>永久 vs 用完就拆</b>。<br>三处书的出处：p066 §4.1 第一句就是功能定义（书自己那句话的英译：<i>they store and transmit genetic information</i>）；p076 DNA 是遗传信息的<b>物质载体</b>，信息以<b>碱基顺序</b>存储；p085 §4.1.4 第一句英译是 <i>DNA is not the direct template for protein synthesis</i>——模板是 RNA。<br>“用完就拆”也有书的出处：p091 §4.1.5，这一节的标题英译是 <i>Degradation of nucleic acids</i>：核酸由<b>核酸酶</b>降解，分外切和内切，切 RNA 的叫<b>核糖核酸酶</b>。<b>但书没给任何寿命数字。</b><span class="pg">p066 p076 p085 p091</span>',
  warn:'<b>“RNA 是那个临时拷贝”只对 mRNA 成立。</b>不加限定地说出口，他一句“那 tRNA 呢”就穿了——tRNA 和 rRNA 不是任何指令的拷贝，是读拷贝的那台机器的零件（rRNA 是核糖体的<b>结构成分</b> <span class="pg">p086</span>；tRNA <b>运活化的氨基酸</b> <span class="pg">p087</span>）。<b>第一次说这条轴时就把 messenger 这个词说出来。</b>',
  good:'三条化学轴分别在为它付账——他问“为什么化学是这样”就说这段：<br>“Each of the three chemical differences is paying for that. The 2-prime hydroxyl sits next to the phosphodiester bond and makes RNA easy to cleave, which suits something disposable and is wrong for an archive. Thymine instead of uracil matters for a reason the textbook does not give. Generally, cytosine can lose its amino group and turn into uracil, and that is called deamination. In DNA the repair machinery reads that uracil as damage and takes it out, because uracil does not belong there. That only matters for something you keep. And two complementary strands mean every base is written down twice, so a damaged one can be rebuilt from its partner. That again only matters for something you keep.”'},

 {g:'双螺旋要会的四件事', gn:'他挑「链数」那条轴追的时候，就是这四件。'},
 {n:'07', t:'配对规则',
  big:'A–T <b>两个</b>氢键，G–C <b>三个</b>',
  en:'“Hydrogen bonds form only between particular bases for <b>steric</b> reasons — two between adenine and thymine, three between guanine and cytosine. Generally: a purine always faces a pyrimidine, so every pair has the same width and the backbone stays regular, and only A-T and G-C have matching hydrogen-bond donors and acceptors.”',
  note:'<b>说反是最常见的失误。</b>记法：GC 含量高的 DNA 熔点高，因为每对多一根氢键。书还说这个特异性正是<b>复制准确性的来源</b>。<span class="pg">p073</span>'},
 {n:'08', t:'互补不等于相同',
  big:'一条链决定另一条，但<b>不等于另一条</b>',
  en:'“The sequence of one strand is <b>complementary but not identical</b> to the other. Each base sits opposite the one base it can hydrogen-bond with, so one strand fixes the other without being a copy of it.”',
  note:'这一句是「为什么两条链」的答案的一半：<b>互补意味着一条链就是另一条的备份</b>，信息存了两遍——这是修复的前提。'},
 {n:'09', t:'反平行',
  big:'两条链方向相反：一条 <b>5′→3′</b> 往上，另一条同方向往下',
  en:'“The two strands are <b>antiparallel</b> — one runs five-prime to three-prime up the helix, the other runs the same direction downwards.”',
  note:'<b>这是书自己的措辞</b>（p073）。反平行是复制时前导链和后随链之所以不同的根本原因，接 #16：“It matters for replication: the polymerase adds nucleotides only in the 5′→3′ direction. So on one template the new chain grows continuously toward the fork — the leading strand. On the other template it is made backwards, in Okazaki fragments that DNA ligase joins.”（p085）'},
 {n:'10', t:'还有第二层力',
  big:'除了氢键还有<b>碱基堆叠</b>，而书说它主要靠<b>疏水</b>作用稳定',
  en:'“Beyond the hydrogen bonds the helix is held by <b>base stacking</b> of the flat rings. The textbook attributes that stacking mainly to <b>hydrophobic</b> interactions. And it adds a third element: the phosphates are fully ionised at pH 7 and are neutralised by counter-ions such as Mg²⁺ or Mn²⁺.”',
  note:'<b>只说氢键就漏了大半。</b>他追问「还有什么在稳定它」时，这一句就是答案。而且它接上了卡 01 的落点——疏水效应是水的熵。<br>书 p074 还有第三样：磷酸根在 pH 7 全部电离，跟 Mg²⁺/Mn²⁺ 的离子相互作用也算稳定因素。<b>「两样」是封闭清单，他一句「还有吗」就穿了。</b><span class="pg">p073 p074</span>'},

 {g:'构象与 RNA 的种类', gn:'时间不够可以砍这一组，但 Z-DNA 是左手这条很容易被单独问。'},
 {n:'11', t:'DNA 不止一种构象',
  big:'生理条件下几乎全是 <b>B-DNA</b>；含水降到 <b>75%</b> 转 <b>A-DNA</b>；<b>Z-DNA 是左手</b>',
  en:'“Under physiological conditions DNA is almost exclusively <b>B-DNA</b>. When the relative water content drops to about seventy-five percent it goes to <b>A-DNA</b>, which is wider and flatter. And <b>Z-DNA is left-handed</b> — the other two are right-handed.”',
  note:'<b>三种里只有 Z 是左手</b>，最容易记混。A-DNA 的触发条件是<b>脱水</b>，不是温度不是盐。⚠ 75% 这个数要回原图核。<span class="pg">p075</span>'},
 {n:'12', t:'RNA 有很多种',
  big:'<b>mRNA、rRNA、tRNA、snRNA</b>、病毒 RNA——<b>只有 mRNA 是那个「临时拷贝」</b>',
  en:'“RNA is not one thing. Messenger RNA carries the information from DNA to the ribosome. Ribosomal RNA is the structural component of the ribosome. Transfer RNA, the smallest, carries one activated amino acid each to the ribosome. Small nuclear RNA, with proteins, forms the spliceosome. And viral RNA serves a virus as both its DNA and its mRNA.”',
  note:'<b>只报名字不说各自干什么，他下一句就是「那 tRNA 干什么」。</b>每种一句都在书里：mRNA p086 · rRNA p086 · tRNA p087（最小，4S；每种只运一种氨基酸；3′ 端都是 CCA；三叶草形）· snRNA p087、p108（跟蛋白组成剪接体）· 病毒 RNA p087。原核 rRNA 三种（<b>5S、16S、23S</b>），真核多到四种（<b>5S、5.8S、18S、28S</b>），按<b>沉降系数</b>命名。真核第一条转录本是 <b>hnRNA</b>，含 exon 和 intron，加工成 mRNA——书 p086 说「核糖核酸酶」，p108 说是剪接体。<span class="pg">p086 p087 p108</span>'},

 {g:'收尾', gn:'一句停住，一句伸出去。'},
 {n:'13', t:'落点',
  big:'脱氧核糖<b>是从核糖还原来的</b>——所以 RNA 的化学在 DNA 之前',
  en:'“Deoxyribonucleotides are not built from scratch. They are made from <b>ribonucleoside diphosphates</b> by removing the 2-prime OH by reduction. <b>Ribonucleotide reductase</b> does it, and the reducing equivalents come from <b>thioredoxin</b>. Oxidised thioredoxin is regenerated by <b>thioredoxin reductase</b> using NADPH.”',
  note:'<b>这是全卡最漂亮的一条</b>：书给的是一个生物合成事实（<span class="pg">p072</span>），而它直接说出了两个分子的先后。<br>停止句：“Beyond that the answer is historical rather than mechanistic — the deoxy form is derived from the ribo form, so RNA chemistry came first. There is no deeper purpose than that the arrangement survived.” <b>落在「进化」这块地基。</b>'},
 {n:'14', t:'留口子',
  big:'去掉一个反应性基团换来稳定——<b>这是为长期存储付的代价</b>',
  en:'“So the sugar chemistry differs by a single hydroxyl, and that hydroxyl is something the cell <b>actively removes</b> by reduction, spending NADPH. The base difference is likewise made by an enzyme — thymine is not built as a base, it is made by methylating deoxyuridylate. Giving up a reactive group buys stability — that is the price of using one of them as long-term storage. It is also why a whole class of drugs targets ribonucleotide reductase: a dividing cell cannot make DNA without it. Those drugs are hydroxyurea, which quenches the enzyme’s tyrosyl radical, and nucleoside analogues such as gemcitabine.”',
  note:'口子留在<b>核糖核苷酸还原酶作为药物靶点</b>和 <b>RNA world</b> 上。两个都能接住，而且都不在书里也没关系——<b>这是想接的口子，不是必答题</b>。RNA world 被问：“The RNA-world hypothesis: early life used RNA both to store information and to catalyse reactions, before DNA and protein enzymes. Two footprints survive — catalytic RNAs, ribozymes, and the fact that the cell still makes deoxyribonucleotides by reducing ribonucleotides.”'}
],
end:'<b>比较题的形状比内容更要紧。</b>先说四条轴（三条化学 ＋ 一条功能），再往上填——这一招 #14（transformation 系列）和 #28（C3/C4/CAM）直接复用。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>上位类</b>：两者都是 polynucleotide，靠<b>磷酸二酯键</b>连',
 '“Both are polynucleotides, chains of nucleotides joined by phosphodiester bonds.”',
 '先给共同的上位类，再给区别。不给这句就直接说区别，等于跳过了定义。'],
['<b>四条轴</b>：糖、其中一个碱基、链数、<b>各自干什么</b>',
 '“Four differences. Three of them are chemical: which pentose, which bases, and how many chains. The fourth is what each one is for.”',
 '<b>整题的骨架。</b>说完它，他挑哪条追你都在自己框架里。所有比较题都用这一招。<b>开了几个口就要交几样。</b>'],
['<b>糖</b>：2-deoxy-D-ribose vs D-ribose，差一个 <b>2′-OH</b>',
 '“The whole difference is one hydroxyl — on carbon two of the sugar. The primes distinguish sugar carbons from the numbering of the base.”',
 '把名词差异变成可以往下追的化学事实。'],
['<b>碱基</b>：uracil <b>实际上只在</b> RNA，thymine <b>主要在</b> DNA',
 '“Uracil practically only in RNA, thymine predominantly in DNA.”',
 '<b>书用的就是这两个限定词。</b>别说「只在」——tRNA 里有 ribothymidine（通用知识，书只说「minor bases」）。'],
['<b>链数</b>：DNA 双链右手；mRNA/rRNA 单链，<b>但 rRNA 有配对局部</b>',
 '“DNA is a right-handed double helix. Messenger and ribosomal RNA are single-stranded, though parts of ribosomal RNA pair up.”',
 '后半句必须说。「RNA 是单链」只对 mRNA 的整体拓扑成立。'],
['<b>功能</b>：DNA <b>存</b>全部信息；RNA 是<b>一条指令的临时拷贝</b>（只 mRNA 是）',
 '“DNA stores the genetic information. A messenger RNA is a temporary copy of one specific instruction. DNA is permanent, and an RNA is made when it is needed and then destroyed.”',
 '<b>第四条轴，前三条化学轴都在为它付账。</b>一定要说 messenger——tRNA 和 rRNA 不是任何指令的拷贝。'],
['<b>配对</b>：A–T <b>两个</b>氢键，G–C <b>三个</b>',
 '“Two between adenine and thymine, three between guanine and cytosine.”',
 '<b>最容易说反。</b>记法：GC 含量高熔点高。书说这个特异性是复制准确性的来源。'],
['<b>互补但不相同</b>；两条链<b>反平行</b>',
 '“Complementary but not identical. The two strands are antiparallel.”',
 '互补 = 一条链是另一条的备份，信息存了两遍，这是修复的前提。'],
['<b>第二层力</b>：碱基<b>堆叠</b>，书说主要靠<b>疏水</b>',
 '“Base stacking, which the textbook attributes mainly to hydrophobic interactions.”',
 '只说氢键就漏了一半。这条接卡 01 的落点。'],
['<b>三种构象</b>：生理下几乎全是 B；脱水到 75% 转 A；<b>Z 是左手</b>',
 '“Almost exclusively B-DNA physiologically. A-DNA when the water drops to about seventy-five percent. Z-DNA is left-handed.”',
 '三种里只有 Z 是左手。A 的触发是脱水，不是温度不是盐。'],
['<b>RNA 有很多种</b>：mRNA、rRNA、tRNA、snRNA、病毒 RNA',
 '“Messenger, ribosomal, transfer, small nuclear, and viral RNA.”',
 '原核 rRNA 是 5S/16S/23S，真核 5S/5.8S/18S/28S，按沉降系数命名。'],
['<b>落点</b>：脱氧核糖是<b>从核糖还原来的</b>（ribonucleotide reductase）',
 '“Deoxyribonucleotides are made from ribonucleoside diphosphates by removing the 2-prime OH by reduction.”',
 '书给的生物合成事实，直接说出了两个分子的化学先后。落在「进化」这块地基。']
],

segs:[
 {tag:'段 1 · 定义', h:'先给上位类，再把区别收进四条轴（三化学 ＋ 一功能）',
  p:['“Both are nucleic acids — the macromolecules that store and transmit genetic information. Chemically they are polynucleotides, chains of nucleotides joined by phosphodiester bonds. A nucleotide is a nitrogenous base, a purine or a pyrimidine, plus a pentose and at least one phosphate.',
     'DNA is the material carrier of the information, stored as the order of its bases. RNA is the working copy, the direct template for protein synthesis.',
     'So there are four differences. Three of them are chemical: which pentose, which bases, and how many chains. The fourth difference is what each one is for, and that is what the chemistry is paying for.”'],
  note:'<b>比较题的第一句决定成败。</b>先说比较的轴，再往轴上填。交替列特征（「DNA 有脱氧核糖，RNA 有核糖，DNA 是双链……」）听起来是一张清单，不是一个理解。'},
 {tag:'段 2 · general', h:'四条轴，一条一句',
  p:['“The sugar: DNA has 2-deoxy-D-ribose, RNA has D-ribose. The whole difference is one hydroxyl, the 2-prime OH.',
     'The bases: both use the purines adenine and guanine and the pyrimidine cytosine. Uracil is found practically only in RNA, and thymine predominantly in DNA. The textbook is careful with those words, and so am I.',
     'The strands: DNA is normally a right-handed double helix. Messenger and ribosomal RNA are single-stranded, though parts of ribosomal RNA pair up into helices.',
     'And the purpose: DNA stores the genetic information, the whole of it, as the order of its bases. A messenger RNA is a temporary copy of one specific instruction. DNA is permanent, and an RNA is made when it is needed and then broken down by ribonucleases. I should say messenger, because transfer and ribosomal RNA are not copies of an instruction at all. They are working parts of the machinery that reads the copy.”'],
  note:'<b>「the textbook is careful with those words, and so am I」这半句是加分</b>：它显示你读的是原文，而不是一个概括。<br><b>第四段是功能轴，不能省。</b>段 1 答应了“三个化学问题加一个用途问题”，这里就要把第四个交出去。ribonuclease 在 <span class="pg">p091</span>。'},
 {tag:'段 3 · 稍展开', h:'先挑「糖」那条轴展开，再把三条化学轴各自接回功能',
  p:['“Take the sugar, because it is the one difference that is actually made by an enzyme.',
     'Deoxyribonucleotides are not built from scratch. They are made from ribonucleoside diphosphates by removing the 2-prime OH by reduction. Ribonucleotide reductase does it, and the reducing equivalents come from thioredoxin. Oxidised thioredoxin is put back by thioredoxin reductase, a flavin enzyme, using NADPH.',
     'So in the cell’s own chemistry the ribose form comes first, and the deoxy form is derived from it.',
     'Now the fourth axis. Each of the three chemical differences is paying for it. The 2-prime hydroxyl sits next to the phosphodiester bond and makes RNA easy to cleave, which suits something disposable and is wrong for an archive. Thymine instead of uracil matters for a reason the textbook does not give. Generally, cytosine can lose its amino group and turn into uracil, and that is called deamination. In DNA the repair machinery reads that uracil as damage and takes it out, because uracil does not belong there. That only matters for something you keep. And two complementary strands mean every base is written down twice, so a damaged one can be rebuilt from its partner. That again only matters for something you keep.”'],
  note:'<b>最后一段是这张卡自己开的口的收尾</b>——骨架句里那句 “that is what the chemistry is paying for”。三条链接的出处：2′-OH 容易断链<b>书里没有机制</b>（所以用 “easy to cleave”，机制留在 recog 那条，开口带 generally）；<b>脱氨这个理由书里完全没有</b>，所以句子里先明说 “for a reason the textbook does not give”；修复本身书里有例子（DNA 聚合酶 I 用 5′→3′ 核酸酶切掉 UV 造成的嘧啶二聚体、再自己填缺口，<span class="pg">p079</span>；缺口由 DNA 连接酶封上，<span class="pg">p081</span>）。<br>〔可裁〕双螺旋那条轴也可以展开：“Hydrogen bonds form only between particular bases for steric reasons — two between A and T, three between G and C. That specificity is what makes replication accurate. The strands are antiparallel, and beyond the hydrogen bonds the helix is held by base stacking, which the textbook attributes mainly to hydrophobic interactions.”'},
 {tag:'段 4 · 留口子', h:'把一个羟基说成一个决定',
  p:['“The part I find most interesting is that the sugar difference is a <b>reduction</b> — the cell spends reducing power, NADPH, to take that hydroxyl off. Giving up a reactive group buys stability, which is the price of using one of them as long-term storage. That is also the biochemical footprint of RNA being the older molecule, and the reason a whole class of drugs targets ribonucleotide reductase — hydroxyurea, gemcitabine.”'],
  note:'口子留在 <b>ribonucleotide reductase 作为药物靶点</b> 和 <b>RNA world</b>。两个都能接住。<br>⚠「RNA 先于 DNA」是<b>从书里那条生物合成事实推出来的</b>，不是书的原话。就照上面那样说——说的是化学次序，不替书下进化结论。'}
],

why:{
 rungs:[
  ['为什么只有 A–T 和 G–C 配？','书给的理由是<b>空间</b>上的：氢键只在特定碱基之间形成得起来（<span class="pg">p073</span>）。而这个特异性正是复制准确性的来源。'],
  ['为什么要两条链而不是一条？','因为互补意味着<b>一条链就是另一条的备份</b>。信息被存了两遍——这是修复的前提。'],
  ['那为什么存储用 DNA、工作用 RNA？','糖上的差别只有一个 2′-OH，而那个 OH 正是要被酶<b>主动还原掉</b>的东西（<span class="pg">p072</span>）；碱基上的差别也是酶造的——thymine 由 dUMP 甲基化而来（<span class="pg">p070</span>）。<b>去掉一个反应性基团换来稳定，这是为长期存储付的代价。</b>']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Beyond that, the answer is historical rather than mechanistic: the deoxy form is made by reducing the ribo form, so RNA chemistry came first and DNA is derived from it. There is no deeper purpose than that the arrangement survived.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'认',
  src:'img/p073_obr48_bdna_grooves.jpg',
  t:'双螺旋外面的两条沟 —— 哪条是大沟，哪条是小沟',
  cap:'<b>他把这张图摆过来、或者直接说 major / minor groove，要的就是你认得出来。</b>'
    + '没人会让你在黑板上画一个球棍模型的双螺旋，所以这张是<b>认</b>，不是画。'
    + '<br><br><b>图上怎么看</b>：上面那支箭头指的是 <b>minor groove</b>（小沟，窄的那条），'
    + '下面那支指的是 <b>major groove</b>（大沟，宽的那条）。左下角印着 <b>B-DNA</b>——'
    + '<b>这正是生理条件下的那一种</b>，所以这张图同时也是「生理条件下几乎全是 B-DNA」那一条的图。'
    + '<br><br><b>看到图要说的一句</b>：螺旋在外面留下两条<b>宽窄不等</b>的螺旋通道，'
    + '<b>碱基对的边缘在沟里朝外露着</b>，所以蛋白<b>不用把螺旋打开</b>就能读到序列。'
    + '要识别特定序列的蛋白读的是<b>大沟</b>，因为那一面露出来的信息更多。'
    + '<br><br>⚠ <b>「蛋白从沟里读序列」这半句书里没有</b>——书只给了名字和这张图，'
    + '所以说的时候带 generally。整段英文照说：'
    + '<br>“Through the grooves. The double helix leaves two unequal spiral channels on the outside — '
    + 'the textbook calls them the larger and the smaller groove, major and minor. '
    + 'That is where the edges of the bases are readable from outside without opening the helix. '
    + 'Generally, a protein that has to recognise a specific sequence reads the major groove.”',
  src2:'Biochemie, figure 4.8, p073 · 原图裁切，未修改'},
 {k:'画',
  src:'img/p074_obr49_base_pairing.jpg',
  t:'碱基配对 —— A–T 两根氢键，G–C 三根',
  cap:'<b>要会画的是这张图的简化版</b>：两个环面对面，中间几根虚线——<b>A–T 两根，G–C 三根</b>。'
    + '<b>说反是这题最常见的失误</b>，而画出来就说不反了。'
    + '<br><br><b>画的顺序</b>：① 左边画<b>嘌呤</b>（双环，A 或 G），右边画<b>嘧啶</b>（单环，T 或 C）——'
    + '<b>永远是一大一小面对面</b>，所以每一对宽度都一样，主链才规整。'
    + '② 在两个环之间拉虚线：<b>A–T 拉两根，G–C 拉三根</b>。'
    + '③ 两端各引一根短线到标着 <b>1′</b> 的那个原子，那是接糖的地方。'
    + '<br><br><b>图上还有两件正文没写的事</b>：两个 1′ 之间标的是 <b>10.85 Å</b>，'
    + '<b>A–T 那一对和 G–C 那一对是同一个数</b>——这就是「每一对宽度相同」的量化版；'
    + '两边各标 <b>51.5°</b>，是糖苷键相对那条轴的角度，左右对称。'
    + '<br><br>图的上下两边分别印着 <b>Major groove</b> 和 <b>Minor groove</b>：'
    + '<b>同一个碱基对，朝大沟的那一面和朝小沟的那一面露出来的边缘不一样</b>——'
    + '这半句直接接上一张图，也是「蛋白为什么读大沟」的理由。'
    + '<br><br>⚠ 10.85 Å 和 51.5° 是<b>图上印的</b>，正文里没有；被问就说这是图里标的。',
  src2:'Biochemie, figure 4.9, p074 · 220 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p072_obr47_rna_dinucleotide.jpg',
  t:'一条链是怎么接起来的 —— 而且 2′-OH 就在图上（书 Obr. 4.7，RNA 二核苷酸）',
  cap:'<b>这张把轴一（糖）和「链是怎么接的」一次画完了。</b>上面是 <b>adenosine</b>，下面是 <b>cytidine</b>，'
    + '两个糖环上各有一个写出来的 <b>OH</b>——<b>那就是 2′-OH，DNA 没有的就是它。</b>'
    + '<br><br><b>画的顺序（他说 draw a dinucleotide 就这么画，五步）</b>：'
    + '<br>① 画一个<b>五元环，右上角放 O</b>（糖环）；右边那个角是 <b>C-1′</b>。'
    + '<br>② 从 <b>C-1′</b> 往右上接<b>碱基</b>（上面画双环的 A）——这根键叫 <b>N-糖苷键</b>。'
    + '<br>③ 左上角的 <b>C-5′</b> 接出 <b>CH₂–O–P</b>，磷上写两个 <b>O⁻</b>。'
    + '<br>④ 左下角的 <b>C-3′</b> 往下接 <b>O–P</b>，再接到下一个糖的 <b>C-5′</b>——'
    + '<b>这一根磷同时接了两个糖，所以叫磷酸二酢键</b>。'
    + '<br>⑤ 两个糖的 <b>C-2′</b> 上各写一个 <b>OH</b>。<b>把这两个 OH 抹掉，它就是 DNA。</b>'
    + '<br><br><b>边画边说的三句</b>：“A nucleotide is three parts: a <b>base</b>, a <b>pentose</b>, and a <b>phosphate</b>. '
    + 'The base is joined to carbon one of the sugar by an <b>N-glycosidic bond</b>. Base plus sugar with no phosphate is a <b>nucleoside</b>.”'
    + '<br>“The chain is built by a <b>phosphodiester bond</b>: one phosphate esterified twice, to the <b>three-prime</b> carbon of one sugar and the <b>five-prime</b> carbon of the next. '
    + 'That is what gives the chain a direction, and why we say five-prime to three-prime.”'
    + '<br>“This one is RNA, because both sugars still carry the hydroxyl on <b>carbon two</b>. Remove those two and you have DNA.”'
    + '<br><br>⚠ <b>这张图是你在「为什么 DNA 带负电」上的护身符</b>：每一步都能看见 <b>O⁻</b>，'
    + '骱架上每一个磷都带一个负电荷。',
  src2:'Biochemie, Obr. 4.7, p072 · 原图裁切，未修改'},

 {k:'认',
  src:'img/p074_obr410_bonds_in_dna.jpg',
  t:'一张图里的四种东西：磷酸二酢键 · 氢键 · 堆叠 · 两头倒着的 5′/3′（书 Obr. 4.10）',
  cap:'<b>这张是「认」，而且它一张图回答了速背的两点：反平行，和「还有什么在稳定它」。</b>'
    + '<br><br><b>图上四个标注，逐个对应过去（标注是捷克语，不用读，记位置就行）</b>：'
    + '<br>① 右下那个大括号指的是 <b>磷酸二酢键</b>（phosphodiester bond）——沟通两个糖的那根骱架。'
    + '<br>② 中下那根指引线指的是 <b>氢键</b>（图里碱基之间那一组细斜线）。'
    + '<br>③ 右中那个短引线指的是 <b>糖</b>（cukr）；上方那个分叉引线指的是 <b>碱基</b>（báze），'
    + '而它指的那两片<b>直接画成上下叠起来的</b>——<b>那就是堆叠（stacking），书把它画出来了。</b>'
    + '<br>④ <b>四个角上的灰底标签就是 5′ 端和 3′ 端</b>（konec ＝ 端）：'
    + '<b>一条链左下是 5′、左上是 3′，另一条右上是 5′、右下是 3′</b>——正好倒着。'
    + '<b>这就是反平行，而且它是图上看得见的，不是背的。</b>'
    + '<br><br><b>看到图要说的那一段</b>：“Three different things hold this together, and the figure shows all three. '
    + 'Along each strand, <b>phosphodiester bonds</b> — covalent. Across the two strands, <b>hydrogen bonds</b> between the bases. '
    + 'And the flat bases lie face to face on top of each other. That is <b>base stacking</b>, and the textbook attributes it mainly to <b>hydrophobic</b> interactions. '
    + 'The two strands are <b>antiparallel</b>: you can read the five-prime and three-prime ends off the corners of the figure, and they are the other way round on the two chains.”'
    + '<br><br>⚠ 还有<b>第四样图上看不到的</b>，说了加分：磷酸基在 pH 7 全部电离，'
    + '靠 <b>Mg²⁺ 或 Mn²⁺</b> 这类反离子中和（p074 正文）。<b>所以别说「只有两样」。</b>'
    + '<br>（这张以前被否掉过一次，因为三个捷克语标注都在图内。'
    + '<b>现在的规矩是看得清就行，所以它回来了。</b>）',
  src2:'Biochemie, Obr. 4.10, p074 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p075_obr411a_a_dna.jpg',
  t:'A-DNA —— 宽而扁，小沟浅得几乎没有（书 Obr. 4.11a）',
  cap:'<b>这张是「认」。它和下一张要摆在一起看，因为考点就是三种构象的区别。</b>'
    + '每张图都是<b>左边一个线条模型、右边一个实心球模型</b>，画的是同一东西。'
    + '<br><br><b>这张看一件事就够了</b>：跟已经看过的 <b>B-DNA</b>（figure 4.8）比，'
    + '<b>螺旋明显更宽、更扁</b>，两条沟<b>深浅差很多</b>。左边模型上那两个小箭头就是在指两条沟。'
    + '<br><br><b>看到图要说的那一段</b>：“This is <b>A-DNA</b>. It is still <b>right-handed</b>, but wider and flatter than B. '
    + 'It has a <b>deep major groove</b> and a <b>very shallow minor groove</b>. '
    + 'What produces it is <b>dehydration</b>: the textbook says B goes over to A when the relative water content falls to about <b>seventy-five percent</b>. '
    + 'Not temperature, not salt — water.”'
    + '<br><br>⚠ <b>图里的标注很小，不要指望当场读它。</b>这张图对你的用处是<b>形状</b>：宽、扁、小沟平。'
    + '75% 这个数字是 p075 正文印的，可以报。',
  src2:'Biochemie, Obr. 4.11a, p075 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p075_obr411b_z_dna.jpg',
  t:'Z-DNA —— 细、束腰，而且它是唯一左手的那一种（书 Obr. 4.11b）',
  cap:'<b>这张是「认」，而且它是三种构象里最容易被单独问的那一种。</b>'
    + '跟上一张 A-DNA 摆在一起看：<b>A 是宽而扁的，Z 是细而长的</b>，中间像被捱了一把。'
    + '<b>形状就是你在图上认它的办法。</b>'
    + '<br><br><b>看到图要说的那一段</b>：“This is <b>Z-DNA</b>, and the one thing to say about it is that it is <b>left-handed</b>. '
    + 'B and A are both right-handed. Z is the exception. It has a <b>deep minor groove</b>, and the major groove is not really distinguishable at all. '
    + 'The textbook says it occurs only in certain stretches of a DNA molecule, and that its biological function is <b>not yet known</b>. '
    + 'Under physiological conditions DNA is almost exclusively <b>B</b>.”'
    + '<br><br>⚠ <b>诚实一点</b>：这张扫描上的螺旋<b>看不出左右手</b>，所以<b>不要说「你看图上就是左手的」</b>。'
    + '左手这件事是 p075 正文写的，拿正文当依据。'
    + '<br><b>书还给了一个序列</b>：<b>d(CGCATGCG)</b> 能形成类似的螺旋（p075）——'
    + '他问「什么序列容易变 Z」时这个能拿出来，<b>注意它是 CG 交替</b>。'
    + '「CG 交替序列才能形成 Z」这一步是通用知识，说的时候带 generally。',
  src2:'Biochemie, Obr. 4.11b, p075 · 250 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'DNA versus RNA?',
 mean:'整句是 “What are the differences between DNA and RNA?”。<b>比较题的通用形状：先说轴，再填。</b>不要交替列特征。这一招 #14 和 #28 直接复用。',
 say:'“Both are nucleic acids — polynucleotides that store and transmit genetic information. DNA is the material carrier, the information stored as the order of its bases. RNA is the working copy, the direct template for protein synthesis. Chemically the question is then three questions: which pentose, which bases, and how many chains. The sugar — deoxyribose versus ribose, a difference of one hydroxyl. The bases — uracil practically only in RNA, thymine predominantly in DNA. The strands — DNA a right-handed double helix, most RNA single-stranded though partly paired. And the purpose — DNA stores the whole archive, while a messenger RNA is a temporary copy of one instruction out of it.”'},

{q:'What is the role of DNA and RNA in the cell?',
 mean:'<b>问的就是第四条轴</b>，而且他要的是功能，不是化学。<b>先答功能，再用化学去解释功能，不要反过来。</b>这道题和 #15「Describe the structure and function of nucleic acids」是同一个答案。',
 say:'“DNA stores the genetic information. It is the material carrier of the genetic information of all organisms, and the information is stored as the order of its bases. RNA is a temporary copy of one specific instruction taken from that store. The copy role is messenger RNA. It carries the information from DNA to the ribosome, because DNA is not the direct template for protein synthesis. The other RNAs are working parts rather than copies. Ribosomal RNA builds the ribosome, transfer RNA brings in the activated amino acids, and small nuclear RNA makes up the spliceosome. So the path is DNA to RNA to protein, which the textbook calls the central dogma.”',
 tail:'<b>“central dogma” 是书里的词</b>（<span class="pg">p085</span>，figure 4.26，书上标 F. Crick 1953），原话是“DNA 指导自己的复制和向 RNA 的转录，RNA 再指导向蛋白质的翻译”。图上还标了两条<b>特殊传递</b>：某些病毒和植物里有 RNA 指导的 RNA 聚合酶，某些 RNA 病毒里有<b>反转录酶</b>。“物质载体、信息存成碱基顺序”是 <span class="pg">p076</span> 的原话。'},

{q:'Why does the cell not just use DNA directly?', odd:1,
 mean:'<b>便装问法，问的还是第四条轴。</b>他要的是“为什么要拷贝”，不是“拷贝怎么做”。',
 say:'“Because DNA is not the direct template for protein synthesis. The textbook says that in one line: the template for protein synthesis is RNA. The reason, generally, is that the two jobs need opposite properties. The archive has to last, so it has no 2-prime hydroxyl, it has two strands, and it gets repaired. The working copy has to be made fast, used, and then destroyed, so it is single-stranded and easy to cleave. A copy also lets the cell decide how much of each protein to make, by making many copies or none, without ever touching the original. And in a eukaryote the DNA never leaves the nucleus, so a copy has to carry the message to the ribosomes.”',
 tail:'第一句是 <span class="pg">p085</span> §4.1.4 的开头。<b>“两份工作需要相反的性质”这个框架书里没有</b>，是通用解释——但它把三条化学轴一次全接回来了，所以值得说。书里能提供的支撑：核酸合成全在核内（<span class="pg">p089</span>）、mRNA 除编码区外还含<b>调控区</b>（<span class="pg">p086</span>）。'},

{q:'What is the difference between a nucleoside and a nucleotide?',
 mean:'<b>定义题伪装成比较题。</b>一句话，别展开。',
 say:'“A nucleoside is a base joined to carbon one of the pentose by an N-glycosidic bond — from N9 of a purine, N1 of a pyrimidine. Esterify a phosphate onto the sugar, normally at the 5′ carbon, and it is a nucleotide.”'},

{q:'What is the double helix?',
 mean:'<b>核心词正面定义。</b>说完它是什么，再说什么撑着它。',
 say:'“Two polynucleotide chains, antiparallel, wound around a common axis — normally right-handed. The sugar–phosphate backbones run on the outside, the paired bases stack inside, and the winding leaves a major and a minor groove. The textbook’s figure 4.8 is B-DNA, the form under physiological conditions.”'},

{q:'What holds the double helix together?',
 mean:'<b>他要三层，不是一层。</b>只说氢键就漏了大半；说「两样」是封闭清单（p073–p074）。',
 say:'“Three things in the textbook. Hydrogen bonds between the bases — two between adenine and thymine, three between guanine and cytosine, and they form only between those pairs for steric reasons. <b>Base stacking</b> of the flat purine and pyrimidine rings, which the textbook attributes mainly to hydrophobic interactions. Lehninger would add van der Waals and dipole forces. And electrostatics: the phosphates are fully ionised at pH 7 and neutralised by counter-ions such as Mg²⁺ or Mn²⁺, which the book also counts toward stability.”'},

{q:'Why is DNA more stable than RNA?',
 mean:'轴一，说到底。<b>而且答案要落在那个被主动去掉的羟基上。</b>',
 say:'“Because it lacks the 2′-hydroxyl. Generally — the textbook does not give the mechanism. That hydroxyl is a nucleophile sitting next to the phosphodiester bond. In alkaline solution it attacks the phosphorus, a 2′,3′-cyclic phosphate forms and the chain breaks, so RNA hydrolyses easily. DNA has no 2′-OH, so the same backbone survives. That is why the cell spends NADPH to remove the hydroxyl by reduction. Giving up a reactive group buys the stability you want in something that has to last.”',
 tail:'⚠「2′-OH 攻击磷酸二酯键、经 2′,3′-环磷酸断链」这条<b>书里没有</b>，所以开口带 “generally”。书给的只有还原那一步（p072）。'},

{q:'Why is DNA negatively charged?', odd:1,
 mean:'问的是<b>磷酸二酯键</b>，也就是那条主链本身。',
 say:'“Because of the phosphodiester backbone. Each phosphate is a diester: two of its four oxygens link the 3′ carbon of one pentose to the 5′ carbon of the next. The two non-bridging oxygens share one negative charge. The textbook says the phosphates are fully ionised at pH 7 — so one negative charge per nucleotide.”'},

{q:'Why does GC-rich DNA melt at a higher temperature?', odd:1,
 mean:'<b>问的就是那三个氢键</b>，只是从熔点绕过来的。也是防止你把 2 和 3 说反的记法。',
 say:'“Melting is the separation of the two strands on heating. The melting temperature is where half the DNA is single-stranded. GC-rich DNA melts higher because a G-C pair has three hydrogen bonds and an A-T pair has two. More bonds per base pair means more energy to separate the strands. And G-C pairs also stack more strongly, which is the part the textbook does not say.”'},

{q:'What actually reads the sequence — how does a protein find its site?', odd:1,
 mean:'问的是<b>沟</b>（groove）。书给了名字和图。',
 say:'“Through the grooves. The double helix leaves two unequal spiral channels on the outside — the textbook calls them the larger and the smaller groove, major and minor. That is where the edges of the bases are readable from outside without opening the helix.”'},

{q:'Is RNA always single-stranded?', odd:1,
 mean:'<b>陷阱问法。</b>答「是」就错了。',
 say:'“No. Messenger RNA is single-stranded as a whole, but ribosomal RNA is single-stranded with regions that pair into short double helices, and where the complementarity is incomplete the molecule forms loops. Transfer RNA is folded even more.”'},

{q:'How many kinds of RNA are there?',
 mean:'清单题。<b>报名字，再报一个能显出你读过表的细节。</b>',
 say:'“Five main kinds in the textbook. It also adds the nuclear RNAs as the least understood group: the precursors of every kind, small nuclear RNA, and chromosomal RNA. Messenger RNA carries the genetic information from DNA to the ribosome, single-stranded. Ribosomal RNA is the structural component of the ribosome, named by sedimentation coefficient. In prokaryotes there are three, 5S, 16S and 23S. In eukaryotes there are up to four, 5S, 5.8S, 18S and 28S. Transfer RNA, the smallest at 4S, carries one activated amino acid each to the ribosome, all ending in CCA at the 3′ end. It is folded as a cloverleaf — three constant arms and a variable one. The acceptor stem carries the CCA and the amino acid, and the anticodon loop carries the triplet that pairs with the codon. Small nuclear RNA forms complexes with proteins — the spliceosome. Those complexes take part in splicing. Viral RNA serves a virus as both its DNA and its mRNA.”'},

{q:'Which is left-handed?',
 mean:'<b>只有 Z。</b>一句话答完。',
 say:'“Only Z-DNA. A and B are both right-handed. Under physiological conditions DNA is almost exclusively B. Z-DNA has a deep minor groove and no distinguishable major groove. It occurs only in certain stretches. The textbook’s example sequence is d(CGCATGCG). Its biological function is not known.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'比较题的每个名词都可能被单独拎出来问。', items:[
{r:'高', q:'What does “temporary” actually mean — how long does a messenger RNA last?',
 en:'“The textbook gives no lifetime, so I will give the criterion instead. A messenger RNA lasts while the cell still needs that protein, and then it is degraded. What destroys it are the nucleases. The book has a section on the degradation of nucleic acids. Exonucleases take off the terminal nucleotides, endonucleases cut ester bonds inside the chain, and the ones that act on RNA are called ribonucleases. Generally, a message is short-lived and the DNA it was copied from is not. That difference is the point. Regulation works by making and destroying copies, and the original is never touched.”',
 cn:'书 p091 §4.1.5，这一节的标题英译是 <i>Degradation of nucleic acids</i>：核酸由<b>核酸酶</b>降解，<b>外切酶</b>切末端核苷酸、<b>内切酶</b>切链内的酯键；按底物分<b>脱氧核糖核酸酶</b>和<b>核糖核酸酶</b>。真核的 hnRNA 加工成 mRNA 也是核糖核酸酶干的（<span class="pg">p086</span>）。<span class="pg">p091</span>',
 warn:'<b>书里没有 mRNA 寿命的任何数字。</b>他问“多久？给个数”就走 LOGIC §11 三步：先说这个边界不是数字定义的，再给判据（这个蛋白还需不需要）。<b>不要报一个分钟数。</b>short-lived 是程度词，所以第一句先把它卡死了。'},
{r:'高', q:'You said RNA is a copy. Is transfer RNA a copy of anything?',
 en:'“No, and I should have said messenger RNA. Transfer RNA and ribosomal RNA are transcribed from DNA, so they are products of a gene, but they are not copies of an instruction for a protein. Ribosomal RNA is the structural component of the ribosome. Transfer RNA is the adaptor. It carries one activated amino acid to the ribosome, and its anticodon pairs with the codon on the messenger. Small nuclear RNA, together with proteins, forms the spliceosome. And some RNA is catalytic. A ribozyme is an RNA molecule with catalytic activity. So only messenger RNA is the temporary copy, and the others are working parts.”',
 cn:'<b>这是第四条轴的陷阱，必须预备。</b>rRNA <span class="pg">p086</span>（核糖体的结构成分）· tRNA <span class="pg">p087</span>（最小 4S，运活化氨基酸，反密码子配密码子）· snRNA <span class="pg">p087 p108</span> · 病毒 RNA <span class="pg">p087</span>。<b>ribozyme 书里没有</b>，卡 18 有正面定义，所以这里就地给了一句。<br>最稳的做法是<b>根本不让他问出这一刀</b>：第一次说这条轴时就说 messenger。'},
{r:'高', q:'How is the copy made — what is transcription?',
 en:'“Transcription is the copying of the base sequence of DNA into the base sequence of RNA. That is the textbook’s own definition, and its reason for the name. It is done by DNA-dependent RNA polymerase, from the four ribonucleoside triphosphates, and it needs no primer. Only one strand of the DNA is copied. That one is called the codogenic strand, which is the book’s word for it, meaning the strand that carries the code. It starts at a promoter, which is the base sequence the polymerase binds, recognised by the sigma factor. It ends at a terminator, where a G-C-rich palindrome gives a transcript that folds into a hairpin followed by a run of uridines. All kinds of RNA are made this way, and all are made first as long precursors that are then processed.”',
 cn:'<b>定义是书的原话</b>：p087 那两句的英译：<i>the sequence of bases in DNA is transcribed into the sequence of bases in RNA. That is why this process is called transcription.</i><br>两头的界定也都在书里：起点 <b>promoter</b>（<span class="pg">p089</span>，σ 因子识别；起始后 σ 解离，核心酶延长）、终点 <b>terminator</b>（<span class="pg">p090</span>，G+C 富集的回文 → 发夹 ＋ 一串 U；另一类要 <b>ρ 因子</b>）。<b>只抄一条链</b>，书给这条链的名字英译是 <i>codogenic strand</i>（<span class="pg">p088</span>），而且<b>不需要引物</b>——这一条跟 DNA 复制正好相反，是很好的对照（接 #16）。真核三种 RNA 聚合酶 I / II / III 分别做 rRNA / mRNA / tRNA＋5S 的前体（<span class="pg">p089</span>）。<span class="pg">p087 p088 p089 p090</span>'},
{r:'中', q:'What actually carries the information, in DNA and in RNA?',
 en:'“The order of the bases, in both. The textbook says it twice. The genetic information is stored as the order of bases in the DNA molecule. The bases carry it, and the deoxyribose and the phosphate only build the spatial structure. And transcription copies the base sequence of DNA into the base sequence of RNA. So the sugar and the backbone are the same along the whole chain and cannot say anything. Only the part that changes from one unit to the next can carry a message.”',
 cn:'<b>前两句都是书的原话。</b>p076 那句的英译：<i>the genetic information is stored in the form of the order of bases in the DNA molecule</i>；同一段还说<b>碱基“携带”遗传信息，而脱氧核糖和磷酸只参与空间结构</b>。p087：转录就是把 DNA 的碱基序列抄成 RNA 的碱基序列。<br>最后一句“只有逐个单元在变的那部分才能携带信息”是<b>推论，不是书说的</b>，但它是这道题最像 researcher 的一句。<span class="pg">p076 p087</span>'},
{r:'中', q:'What is base pairing?',
 en:'“Base pairing is the specific hydrogen bonding of a base on one strand to the one base on the other strand it can bond with. Adenine pairs with thymine by two hydrogen bonds, guanine with cytosine by three. The textbook says the bonds form only between those pairs for steric reasons, and it names the phenomenon base pairing. It is what makes the two strands complementary and replication accurate.”',
 cn:'<b>核心词正面定义。</b>书 p073 明说「这个过程叫碱基配对」。'},
{r:'中', q:'What is hnRNA?',
 en:'“In eukaryotes the first transcript is heterogeneous nuclear RNA, substantially longer than the structural gene itself. It contains both coding regions, the exons, and non-coding ones, the introns. It is then processed into the functional messenger RNA: the introns are removed by the spliceosome, a complex of small nuclear RNA and proteins. The textbook’s word on p086 is simply ribonucleases.”',
 cn:'真核转录的第一条产物。<b>顺手把 exon/intron 带出来。</b>'},
{r:'实测', q:'What are purines and pyrimidines?',
 en:'“A pyrimidine is one six-membered aromatic ring with nitrogens at positions 1 and 3 — cytosine, uracil, thymine. A purine is that ring fused to a five-membered imidazole ring, nine atoms in all, with nitrogens at 1, 3, 7 and 9 — adenine and guanine. So the purine is the larger base. Its sugar attaches at N9, the pyrimidine’s at N1.”',
 cn:'结构 p066 图 4.1；N9/N1 p067。卡上用了十次的词，之前没定义。'},
{r:'高', q:'Why “predominantly” — where else does thymine occur?',
 en:'“In transfer RNA. The textbook says the loops of tRNA contain minor bases, and its example of a minor base is hypoxanthine — guanine without its amino group. Generally, one of the tRNA minor bases is ribothymidine, thymine on ribose, in the T-loop. Pseudouridine and dihydrouridine are others. So thymine is predominantly, not exclusively, a DNA base.”',
 cn:'minor bases p087；hypoxanthine p066；ribothymidine 通用。'},
{r:'中', q:'What does “activated amino acid” mean?',
 en:'“Activation is done by the aminoacyl-tRNA synthetase specific for that amino acid and tRNA, in two steps. First the amino acid reacts with ATP to give aminoacyl-adenylate, releasing pyrophosphate. Then the aminoacyl group is transferred as an ester to the 2′- or 3′-hydroxyl of the terminal adenosine of the tRNA’s CCA end. From then on the amino acid is recognised by the anticodon of its tRNA, not by its own chemistry. The anticodon is the triplet that pairs with the codon on mRNA.”',
 cn:'p096；anticodon p087。'},
{r:'中', q:'What is thioredoxin?',
 en:'“Thioredoxin is a small protein with two cysteines at its active site. Reduced, they are two SH groups. Oxidised, they form a disulfide. Thioredoxin hands two hydrogens to ribonucleotide reductase and is recharged from NADPH by the flavin enzyme thioredoxin reductase.”',
 cn:'SH/S–S 和 NADPH → 还原酶 → 硫氧还蛋白 → RNR 这条链是 p072 图 4.6；「小蛋白、两个半胱氨酸」通用。'},
{r:'中', q:'What is S — the sedimentation coefficient?',
 en:'“S is the Svedberg unit of the sedimentation coefficient — how fast a particle sediments in the ultracentrifuge, 10⁻¹³ seconds. It depends on mass and shape together, so it is not additive: 30S and 50S subunits make a 70S ribosome.”',
 cn:'通用；书 p086 用了没定义，p096 有 30S/40S 小亚基。'},
{r:'高', q:'What is a phosphodiester bond?',
 en:'“One phosphate esterified to <b>two</b> different hydroxyls, so it links two sugars and still keeps one negative charge. In nucleic acids it runs from the 3′-hydroxyl of one pentose to the 5′-hydroxyl of the next — usually 3′→5′ in both DNA and RNA. The textbook adds that in RNA a 2′–5′ linkage is also possible, precisely because RNA still has the 2′-hydroxyl.”',
 cn:'<b>名字本身就说明了它为什么能当骨架</b>：一个磷酸用掉两个羟基，还剩一个负电荷。完整的键的分类在<b>横向卡 · 各种化学键</b>。<span class="pg">p072</span>'},
{r:'高', q:'What does antiparallel mean?',
 en:'“The two chains run in opposite directions: one strand’s five-prime end sits at the other’s three-prime end. The textbook puts it as — one strand rises through the helix in the five-to-three direction while the other descends in that same direction.”',
 cn:'<b>这是复制时前导链和后随链之所以不同的根本原因</b>，直接接 #16。<span class="pg">p073</span>'},
{r:'中', q:'What is base stacking?',
 en:'“The flat bases piling face to face along the helix axis. In aqueous solution the textbook says those stacking associations are stabilised mainly by <b>hydrophobic</b> interactions.”',
 cn:'<b>这一条把这题和卡 01 的落点接起来了</b>：疏水效应是水的熵，不是分子之间的吸引。'},
{r:'中', q:'Major and minor groove — what are they for?',
 en:'“They are the two unequal channels the double helix leaves on the outside. They matter because the edges of the base pairs are exposed there, so a protein can read the sequence without opening the helix.”',
 cn:'书给了名字和图（<span class="pg">p073 p074</span>），但<b>没有说「蛋白从这里读序列」</b>——那半句是通用知识，说成 generally。'}
]},

{g:'为什么类', gn:'给了结论没给理由的地方。', items:[
{r:'高', q:'Why two strands and not one?',
 en:'“Because complementarity makes each strand a full record of the other — the information is stored twice. The textbook’s point is that the complementary nature of the two strands fixes the base order of every new strand: one strand is the template. Generally, it is also why damage on one strand can be repaired by reading the other.”',
 cn:'模板 p076；修复是通用。这是 why 梯子第二级的英文版。'},
{r:'高', q:'Why does the cell make a copy at all instead of using the DNA itself?',
 en:'“Three reasons, and a fourth in eukaryotes. The textbook gives the first one: DNA is not the direct template for protein synthesis. The template is RNA, and the path is DNA to RNA to protein. Generally, the other reasons follow from what the two molecules are for. The original has to survive, so you do not want the synthesis machinery working on it and damaging it. And the cell can make many copies of one gene, or few, or none, and that is how it controls how much of each protein it makes. In a eukaryote there is a fourth reason. The DNA stays in the nucleus and the ribosomes are in the cytoplasm, so something has to carry the message out.”',
 cn:'第一条是<b>书的原话</b>：p085 §4.1.4 开头那两句的英译 <i>DNA is not the direct template for protein synthesis. The template for protein synthesis is RNA.</i> 同一页就是中心法则图。<br>后面几条<b>书没有明说</b>，所以开口带 generally。间接支撑：mRNA 除编码区外还含<b>调控区</b>（<span class="pg">p086</span>），核酸合成全在核内（<span class="pg">p089</span>），tRNA 把氨基酸从<b>胞质</b>运到核糖体（<span class="pg">p087</span>）。完整的“拷贝数＝调控量”在卡 12（lac / trp 操纵子）。<span class="pg">p085 p086 p087 p089</span>'},
{r:'高', q:'Why does the cell make deoxyribonucleotides from ribonucleotides instead of building them separately?',
 en:'“Because the de novo pathways make ribonucleotides. The purine ring is assembled stepwise on ribose-5-phosphate. The pyrimidine ring is closed first, as orotate, then attached to phosphoribosyl diphosphate. And the deoxy form is one modification at the end: the 2′-OH is removed at the <b>diphosphate</b> level by ribonucleotide reductase. One biosynthetic route, one modification step — cheaper than two parallel pathways.”',
 cn:'<b>注意「在二磷酸水平」这个细节</b>——不是在从头合成核苷酸的时候就用脱氧糖。这一点很容易答错。<span class="pg">p072</span>'},
{r:'高', q:'Why thymine in DNA and uracil in RNA?',
 en:'“The textbook gives the distribution and one biosynthetic fact: thymine is never made as a free base. It is made as dTMP by methylating dUMP, the methyl coming from N⁵,N¹⁰-methylenetetrahydrofolate. The enzyme, thymidylate synthase, is general knowledge. So thymine is made at the deoxy level, which is why it belongs to DNA. The reason usually given is general knowledge, not in the book: cytosine deaminates to uracil, so if uracil were a normal DNA base the repair machinery could not tell a damaged cytosine from a legitimate base. Thymine is uracil with a methyl group, and that methyl is the label that says ‘this one belongs here’.”',
 cn:'⚠ 脱氨那个理由<b>书里完全没有</b>，是通用解释；但「thymine 只在脱氧水平上合成（dUMP → dTMP，N⁵,N¹⁰-亚甲基四氢叶酸）」是书 p070 的原话，可以当书的理由说。<b>先划清出处，再给解释</b>，比含糊地说出来安全得多。'},
{r:'中', q:'Why does A-DNA appear when you dry it out?',
 en:'“Because the B form depends on the water structure around the backbone. The textbook gives the trigger as the relative water content falling to about seventy-five percent, and the A form is a wider, flatter right-handed helix with a deep major groove and a very shallow minor one.”',
 cn:'⚠ 75% 这个数<b>要回 300 dpi 原图核</b>（OCR 数字容易吃掉）。<span class="pg">p075</span>'}
]},

{g:'怎么发现的', gn:'⚠ 这一格书里几乎没有，出处要说清。', items:[
{r:'中', q:'How was the structure of DNA worked out?',
 en:'“Generally — the textbook does not tell this history. It came from X-ray fibre diffraction of DNA, which showed a regular helix. Then Chargaff’s rule, that in any DNA adenine equals thymine and guanine equals cytosine. And then model building, by Watson and Crick in 1953. What the textbook stresses is the consequence: it titles the section ‘the structure and biosynthesis of DNA explains the principle of heredity’. Once the structure is known, complementarity supplies the copying mechanism, and no extra principle is needed.”',
 cn:'<b>书 §4.1.3 的节标题本身就是一个 researcher 式的陈述</b>：结构一旦知道，遗传就不再需要额外的原理。',
 warn:'Watson–Crick 1953、Franklin 的衍射、Avery 1944、Hershey–Chase 1952 <b>书里都没有</b>（p009 那张年表是蛋白质的）。核过再主动说人名。'}
]},

{g:'桥', gn:'这题坐在书投入最大的一块里，往外接很方便。', items:[
{r:'高', q:'→ #15 核酸的结构与功能 · #16 DNA 复制',
 en:'“Complementary but not identical — that is the whole basis of replication.”',
 cn:'<b>p066–p091 这 26 页是全书投入最大的一块</b>（30 张图、25 处命名句）。这张卡覆盖了它的前十页，#15 和 #16 是同一片。'},
{r:'中', q:'→ 你的工作',
 en:'“Sanger sequencing, primer design, and the polymerases — all of that sits on the same axis.”',
 cn:'#5（Taq/Kapa）和 #16 的 proofreading 都从这里走出去。'}
]}
]
});
