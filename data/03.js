/* 卡 03 · What are the differences between DNA and RNA?
   题库 #3（S1 Biochemistry 3 ＋ S3 Biochemistry 2）· 导师写过两遍
   出处 Biochemie OCR p066、p067、p072、p073、p075、p086、p096
   题型：比较题。第一张这个类型，形状见 recog 第一行。 */

window.CARDS.push({
id:'03', n:3, w:3,
q:'What are the differences between DNA and RNA?',
qcn:'DNA 和 RNA 有什么区别',
sub:'主干说完约 80 秒 · 比较题 · 导师写过两遍',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 比较题的第一句决定成败：先说比较的轴，再往轴上填。交替列特征＝一张清单，不是一个理解。'},
 {n:'01', t:'上位类',
  big:'两者都是<b>核酸</b>：储存和传递遗传信息的大分子；化学上是 <b>polynucleotide</b>。DNA 是信息的载体，RNA 是蛋白合成的直接模板',
  en:'“Both are nucleic acids — the macromolecules that <b>store and transmit genetic information</b>; chemically, polynucleotides, chains of nucleotides joined by <b>phosphodiester bonds</b>. A nucleotide is a nitrogenous base — a purine or a pyrimidine — a pentose, and at least one phosphate. DNA is the material carrier of the information, stored as the order of its bases; RNA is the working copy — the direct template for protein synthesis.”',
  note:'先给共同的上位类，<b>而且要说各自是什么、干什么</b>。书 p066 §4.1 第一句就是功能定义（<i>uchovávají a přenášejí genetickou informaci</i>）；p076 DNA 是遗传信息的物质载体，信息以碱基顺序存储；p085 DNA 不是蛋白合成的直接模板，模板是 RNA。<b>只列三条化学区别、不说各自是什么，就是卡 01 三级结构那种错——判据不是定义。</b>'},
 {n:'02', t:'三条轴',
  big:'区别只有三条轴：<b>糖</b>、<b>其中一个碱基</b>、<b>链数</b>',
  en:'“So chemically the question is three questions: <b>which pentose, which bases, and how many chains</b>. The fourth difference — what each one is for — is what the chemistry is paying for.”',
  note:'<b>这一句是整题的骨架。</b>说完它，后面无论他挑哪一条追，你都在自己的框架里答。<br><b>这一招适用于所有比较题</b>（#14、#28 都用它）。'},

 {g:'三条轴分别是什么', gn:'一条一句，不要展开。展开留给段 3。'},
 {n:'03', t:'轴一 · 糖',
  big:'DNA 是 <b>2-deoxy-D-ribose</b>，RNA 是 <b>D-ribose</b>——差别就是一个 <b>2′-OH</b>',
  en:'“DNA has 2-deoxy-D-ribose, RNA has D-ribose. The whole difference is one hydroxyl — the one on <b>carbon two of the sugar ring</b>, written 2-prime because the sugar carbons are primed to keep them apart from the numbering of the base.”',
  note:'<b>「差别就是一个羟基」这个说法值钱</b>，因为它把一个名词差异变成了一个可以往下追的化学事实。<span class="pg">p067</span>'},
 {n:'04', t:'轴二 · 碱基',
  big:'共用 A、G、C；<b>uracil 实际上只在 RNA</b>，<b>thymine 主要在 DNA</b>',
  en:'“Both use the purines adenine and guanine and the pyrimidine cytosine. Of the other two pyrimidines, uracil is found <b>practically only</b> in RNA, and thymine <b>predominantly</b> in DNA — the textbook is careful with those words, and so am I.”',
  note:'<b>书用的就是这两个限定词</b>（prakticky pouze / převážně）。<b>不要说「thymine 只在 DNA」</b>——tRNA 的 T-loop 里有 ribothymidine（通用知识；书 p087 只说 tRNA 环上有「minoritní báze」，没点名）。<b>跟着书加限定词，本身就是分数。</b><span class="pg">p067</span>'},
 {n:'05', t:'轴三 · 链数',
  big:'DNA 通常是<b>右手双螺旋</b>；mRNA 和 rRNA 是单链，<b>但 rRNA 有配对成螺旋的局部</b>',
  en:'“DNA is normally a right-handed double helix. Messenger and ribosomal RNA are single-stranded — though parts of ribosomal RNA pair up into helices.”',
  note:'<b>后半句必须说。</b>「RNA 是单链」这句话只对 mRNA 的整体拓扑成立，rRNA 和 tRNA 都有二级结构。<span class="pg">p086</span>'},

 {g:'双螺旋要会的四件事', gn:'他挑「链数」那条轴追的时候，就是这四件。'},
 {n:'06', t:'配对规则',
  big:'A–T <b>两个</b>氢键，G–C <b>三个</b>',
  en:'“Hydrogen bonds form only between particular bases for <b>steric</b> reasons — two between adenine and thymine, three between guanine and cytosine. Generally: a purine always faces a pyrimidine, so every pair has the same width and the backbone stays regular, and only A–T and G–C have matching hydrogen-bond donors and acceptors.”',
  note:'<b>说反是最常见的失误。</b>记法：GC 含量高的 DNA 熔点高，因为每对多一根氢键。书还说这个特异性正是<b>复制准确性的来源</b>。<span class="pg">p073</span>'},
 {n:'07', t:'互补不等于相同',
  big:'一条链决定另一条，但<b>不等于另一条</b>',
  en:'“The sequence of one strand is <b>complementary but not identical</b> to the other — each base sits opposite the one base it can hydrogen-bond with, so one strand fixes the other without being a copy of it.”',
  note:'这一句是「为什么两条链」的答案的一半：<b>互补意味着一条链就是另一条的备份</b>，信息存了两遍——这是修复的前提。'},
 {n:'08', t:'反平行',
  big:'两条链方向相反：一条 <b>5′→3′</b> 往上，另一条同方向往下',
  en:'“The two strands are <b>antiparallel</b> — one runs five-prime to three-prime up the helix, the other runs the same direction downwards.”',
  note:'<b>这是书自己的措辞</b>（p073）。反平行是复制时前导链和后随链之所以不同的根本原因，接 #16：“It matters for replication: the polymerase adds nucleotides only in the 5′→3′ direction, so on one template the new chain grows continuously toward the fork — the leading strand — and on the other it is made backwards in Okazaki fragments that DNA ligase joins.”（p085）'},
 {n:'09', t:'还有第二层力',
  big:'除了氢键还有<b>碱基堆叠</b>，而书说它主要靠<b>疏水</b>作用稳定',
  en:'“Beyond the hydrogen bonds the helix is held by <b>base stacking</b> of the flat rings, which the textbook attributes mainly to <b>hydrophobic</b> interactions — and it adds a third element: the phosphates are fully ionised at pH 7 and are neutralised by counter-ions such as Mg²⁺ or Mn²⁺.”',
  note:'<b>只说氢键就漏了大半。</b>他追问「还有什么在稳定它」时，这一句就是答案。而且它接上了卡 01 的落点——疏水效应是水的熵。<br>书 p074 还有第三样：磷酸根在 pH 7 全部电离，跟 Mg²⁺/Mn²⁺ 的离子相互作用也算稳定因素。<b>「两样」是封闭清单，他一句「还有吗」就穿了。</b><span class="pg">p073 p074</span>'},

 {g:'构象与 RNA 的种类', gn:'时间不够可以砍这一组，但 Z-DNA 是左手这条很容易被单独问。'},
 {n:'10', t:'DNA 不止一种构象',
  big:'生理条件下几乎全是 <b>B-DNA</b>；含水降到 <b>75%</b> 转 <b>A-DNA</b>；<b>Z-DNA 是左手</b>',
  en:'“Under physiological conditions DNA is almost exclusively <b>B-DNA</b>. When the relative water content drops to about seventy-five percent it goes to <b>A-DNA</b>, which is wider and flatter. And <b>Z-DNA is left-handed</b> — the other two are right-handed.”',
  note:'<b>三种里只有 Z 是左手</b>，最容易记混。A-DNA 的触发条件是<b>脱水</b>，不是温度不是盐。⚠ 75% 这个数要回原图核。<span class="pg">p075</span>'},
 {n:'11', t:'RNA 有很多种',
  big:'<b>mRNA、rRNA、tRNA、snRNA</b>、病毒 RNA',
  en:'“RNA is not one thing. Messenger RNA carries the information from DNA to the ribosome. Ribosomal RNA is the structural component of the ribosome. Transfer RNA, the smallest, carries one activated amino acid each to the ribosome. Small nuclear RNA, with proteins, forms the spliceosome. And viral RNA serves a virus as both its DNA and its mRNA.”',
  note:'<b>只报名字不说各自干什么，他下一句就是「那 tRNA 干什么」。</b>每种一句都在书里：mRNA p086 · rRNA p086 · tRNA p087（最小，4S；每种只运一种氨基酸；3′ 端都是 CCA；三叶草形）· snRNA p087、p108（跟蛋白组成剪接体）· 病毒 RNA p087。原核 rRNA 三种（<b>5S、16S、23S</b>），真核多到四种（<b>5S、5.8S、18S、28S</b>），按<b>沉降系数</b>命名。真核第一条转录本是 <b>hnRNA</b>，含 exon 和 intron，加工成 mRNA——书 p086 说「核糖核酸酶」，p108 说是剪接体。<span class="pg">p086 p087 p108</span>'},

 {g:'收尾', gn:'一句停住，一句伸出去。'},
 {n:'12', t:'落点',
  big:'脱氧核糖<b>是从核糖还原来的</b>——所以 RNA 的化学在 DNA 之前',
  en:'“Deoxyribonucleotides are not built from scratch. They are made from <b>ribonucleoside diphosphates</b> by removing the 2-prime OH by reduction — <b>ribonucleotide reductase</b> does it, the reducing equivalents come from <b>thioredoxin</b>, and oxidised thioredoxin is regenerated by <b>thioredoxin reductase</b> using NADPH.”',
  note:'<b>这是全卡最漂亮的一条</b>：书给的是一个生物合成事实（<span class="pg">p072</span>），而它直接说出了两个分子的先后。<br>停止句：“Beyond that the answer is historical rather than mechanistic — the deoxy form is derived from the ribo form, so RNA chemistry came first. There is no deeper purpose than that the arrangement survived.” <b>落在「进化」这块地基。</b>'},
 {n:'13', t:'留口子',
  big:'去掉一个反应性基团换来稳定——<b>这是为长期存储付的代价</b>',
  en:'“So the sugar chemistry differs by a single hydroxyl, and that hydroxyl is something the cell <b>actively removes</b> by reduction, spending NADPH. The base difference is likewise made by an enzyme — thymine is not built as a base, it is made by methylating deoxyuridylate. Giving up a reactive group buys stability — that is the price of using one of them as long-term storage. It is also why a whole class of drugs — hydroxyurea, which quenches the enzyme’s tyrosyl radical, and nucleoside analogues such as gemcitabine — targets ribonucleotide reductase: a dividing cell cannot make DNA without it.”',
  note:'口子留在<b>核糖核苷酸还原酶作为药物靶点</b>和 <b>RNA world</b> 上。两个都能接住，而且都不在书里也没关系——<b>这是想接的口子，不是必答题</b>。RNA world 被问：“The RNA-world hypothesis: early life used RNA both to store information and to catalyse reactions, before DNA and protein enzymes. Two footprints survive — catalytic RNAs, ribozymes, and the fact that the cell still makes deoxyribonucleotides by reducing ribonucleotides.”'}
],
end:'<b>比较题的形状比内容更要紧。</b>先说三条轴，再往上填——这一招 #14（transformation 系列）和 #28（C3/C4/CAM）直接复用。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>上位类</b>：两者都是 polynucleotide，靠<b>磷酸二酯键</b>连',
 '“Both are polynucleotides, chains of nucleotides joined by phosphodiester bonds.”',
 '先给共同的上位类，再给区别。不给这句就直接说区别，等于跳过了定义。'],
['<b>三条轴</b>：糖、其中一个碱基、链数',
 '“Three questions: which pentose, which bases, and how many chains.”',
 '<b>整题的骨架。</b>说完它，他挑哪条追你都在自己框架里。所有比较题都用这一招。'],
['<b>糖</b>：2-deoxy-D-ribose vs D-ribose，差一个 <b>2′-OH</b>',
 '“The whole difference is one hydroxyl — on carbon two of the sugar. The primes distinguish sugar carbons from the numbering of the base.”',
 '把名词差异变成可以往下追的化学事实。'],
['<b>碱基</b>：uracil <b>实际上只在</b> RNA，thymine <b>主要在</b> DNA',
 '“Uracil practically only in RNA, thymine predominantly in DNA.”',
 '<b>书用的就是这两个限定词。</b>别说「只在」——tRNA 里有 ribothymidine（通用知识，书只说「minoritní báze」）。'],
['<b>链数</b>：DNA 双链右手；mRNA/rRNA 单链，<b>但 rRNA 有配对局部</b>',
 '“DNA is a right-handed double helix; mRNA and rRNA are single-stranded, though parts of rRNA pair up.”',
 '后半句必须说。「RNA 是单链」只对 mRNA 的整体拓扑成立。'],
['<b>配对</b>：A–T <b>两个</b>氢键，G–C <b>三个</b>',
 '“Two between adenine and thymine, three between guanine and cytosine.”',
 '<b>最容易说反。</b>记法：GC 含量高熔点高。书说这个特异性是复制准确性的来源。'],
['<b>互补但不相同</b>；两条链<b>反平行</b>',
 '“Complementary but not identical; the two strands are antiparallel.”',
 '互补 = 一条链是另一条的备份，信息存了两遍，这是修复的前提。'],
['<b>第二层力</b>：碱基<b>堆叠</b>，书说主要靠<b>疏水</b>',
 '“Base stacking, which the textbook attributes mainly to hydrophobic interactions.”',
 '只说氢键就漏了一半。这条接卡 01 的落点。'],
['<b>三种构象</b>：生理下几乎全是 B；脱水到 75% 转 A；<b>Z 是左手</b>',
 '“Almost exclusively B-DNA physiologically; A when water drops to about seventy-five percent; Z is left-handed.”',
 '三种里只有 Z 是左手。A 的触发是脱水，不是温度不是盐。'],
['<b>RNA 有很多种</b>：mRNA、rRNA、tRNA、snRNA、病毒 RNA',
 '“Messenger, ribosomal, transfer, small nuclear, and viral RNA.”',
 '原核 rRNA 是 5S/16S/23S，真核 5S/5.8S/18S/28S，按沉降系数命名。'],
['<b>落点</b>：脱氧核糖是<b>从核糖还原来的</b>（ribonucleotide reductase）',
 '“Deoxyribonucleotides are made from ribonucleoside diphosphates by removing the 2-prime OH by reduction.”',
 '书给的生物合成事实，直接说出了两个分子的化学先后。落在「进化」这块地基。']
],

segs:[
 {tag:'段 1 · 定义', h:'先给上位类，再把区别收进三个问题',
  p:['“Both are nucleic acids — the macromolecules that store and transmit genetic information; chemically, polynucleotides, chains of nucleotides joined by phosphodiester bonds. A nucleotide is a nitrogenous base — a purine or a pyrimidine — a pentose, and at least one phosphate.',
     'DNA is the material carrier of the information, stored as the order of its bases; RNA is the working copy, the direct template for protein synthesis.',
     'So chemically the question is three questions: which pentose, which bases, and how many chains.”'],
  note:'<b>比较题的第一句决定成败。</b>先说比较的轴，再往轴上填。交替列特征（「DNA 有脱氧核糖，RNA 有核糖，DNA 是双链……」）听起来是一张清单，不是一个理解。'},
 {tag:'段 2 · general', h:'三条轴，一条一句',
  p:['“The sugar: DNA has 2-deoxy-D-ribose, RNA has D-ribose. The whole difference is one hydroxyl, the 2-prime OH.',
     'The bases: both use the purines adenine and guanine and the pyrimidine cytosine. Uracil is found practically only in RNA, and thymine predominantly in DNA — the textbook is careful with those words, and so am I.',
     'The strands: DNA is normally a right-handed double helix; messenger and ribosomal RNA are single-stranded, though parts of ribosomal RNA pair up into helices.”'],
  note:'<b>「the textbook is careful with those words, and so am I」这半句是加分</b>：它显示你读的是原文，而不是一个概括。'},
 {tag:'段 3 · 稍展开', h:'挑「糖」那条轴，因为它是唯一一条由酶造出来的差别',
  p:['“Take the sugar, because it is the one difference that is actually made by an enzyme.',
     'Deoxyribonucleotides are not built from scratch. They are made from ribonucleoside diphosphates by removing the 2-prime OH by reduction — ribonucleotide reductase does it, the reducing equivalents come from thioredoxin, and oxidised thioredoxin is put back by thioredoxin reductase, a flavin enzyme, using NADPH.',
     'So in the cell’s own chemistry the ribose form comes first, and the deoxy form is derived from it.”'],
  note:'〔可裁〕双螺旋那条轴也可以展开：“Hydrogen bonds form only between particular bases for steric reasons — two between A and T, three between G and C. That specificity is what makes replication accurate. The strands are antiparallel, and beyond the hydrogen bonds the helix is held by base stacking, which the textbook attributes mainly to hydrophobic interactions.”'},
 {tag:'段 4 · 留口子', h:'把一个羟基说成一个决定',
  p:['“The part I find most interesting is that the sugar difference is a <b>reduction</b> — the cell spends reducing power, NADPH, to take that hydroxyl off. Giving up a reactive group buys stability, which is the price of using one of them as long-term storage. That is also the biochemical footprint of RNA being the older molecule, and the reason a whole class of drugs — hydroxyurea, gemcitabine — targets ribonucleotide reductase.”'],
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

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What are the differences between DNA and RNA?',
 mean:'<b>比较题的通用形状：先说轴，再填。</b>不要交替列特征。这一招 #14 和 #28 直接复用。',
 say:'“Both are nucleic acids — polynucleotides that store and transmit genetic information: DNA is the material carrier, the information stored as the order of its bases; RNA is the working copy, the direct template for protein synthesis. Chemically the question is then three questions: which pentose, which bases, and how many chains. The sugar — deoxyribose versus ribose, a difference of one hydroxyl. The bases — uracil practically only in RNA, thymine predominantly in DNA. The strands — DNA a right-handed double helix, most RNA single-stranded though partly paired.”'},

{q:'What is the difference between a nucleoside and a nucleotide?',
 mean:'<b>定义题伪装成比较题。</b>一句话，别展开。',
 say:'“A nucleoside is a base joined to carbon one of the pentose by an N-glycosidic bond — from N9 of a purine, N1 of a pyrimidine. Esterify a phosphate onto the sugar, normally at the 5′ carbon, and it is a nucleotide.”'},

{q:'What is base pairing?',
 mean:'<b>核心词正面定义。</b>书 p073 明说「这个过程叫碱基配对」。',
 say:'“Base pairing is the specific hydrogen bonding of a base on one strand to the one base on the other strand it can bond with — adenine with thymine by two hydrogen bonds, guanine with cytosine by three; the textbook says the bonds form only between those pairs for steric reasons and names the phenomenon base pairing. It is what makes the two strands complementary and replication accurate.”'},

{q:'What is the double helix?',
 mean:'<b>核心词正面定义。</b>说完它是什么，再说什么撑着它。',
 say:'“Two polynucleotide chains, antiparallel, wound around a common axis — normally right-handed. The sugar–phosphate backbones run on the outside, the paired bases stack inside, and the winding leaves a major and a minor groove. The textbook’s figure 4.8 is B-DNA, the form under physiological conditions.”'},

{q:'What holds the double helix together?',
 mean:'<b>他要三层，不是一层。</b>只说氢键就漏了大半；说「两样」是封闭清单（p073–p074）。',
 say:'“Three things in the textbook. Hydrogen bonds between the bases — two between adenine and thymine, three between guanine and cytosine, and they form only between those pairs for steric reasons. <b>Base stacking</b> of the flat purine and pyrimidine rings, which the textbook attributes mainly to hydrophobic interactions — Lehninger would add van der Waals and dipole forces. And electrostatics: the phosphates are fully ionised at pH 7 and neutralised by counter-ions such as Mg²⁺ or Mn²⁺, which the book also counts toward stability.”'},

{q:'Why is DNA more stable than RNA?',
 mean:'轴一，说到底。<b>而且答案要落在那个被主动去掉的羟基上。</b>',
 say:'“Because it lacks the 2′-hydroxyl. Generally — the textbook does not give the mechanism — that hydroxyl is a nucleophile sitting next to the phosphodiester bond: in alkaline solution it attacks the phosphorus, a 2′,3′-cyclic phosphate forms and the chain breaks, so RNA hydrolyses easily. DNA has no 2′-OH, so the same backbone survives. That is why the cell spends NADPH to remove the hydroxyl by reduction — giving up a reactive group buys the stability you want in something that has to last.”',
 tail:'⚠「2′-OH 攻击磷酸二酯键、经 2′,3′-环磷酸断链」这条<b>书里没有</b>，所以开口带 “generally”。书给的只有还原那一步（p072）。'},

{q:'Why is DNA negatively charged?', odd:1,
 mean:'问的是<b>磷酸二酯键</b>，也就是那条主链本身。',
 say:'“Because of the phosphodiester backbone. Each phosphate is a diester — two of its four oxygens link the 3′ carbon of one pentose to the 5′ carbon of the next, and the two non-bridging oxygens share one negative charge. The textbook says the phosphates are fully ionised at pH 7 — so one negative charge per nucleotide.”'},

{q:'Why does GC-rich DNA melt at a higher temperature?', odd:1,
 mean:'<b>问的就是那三个氢键</b>，只是从熔点绕过来的。也是防止你把 2 和 3 说反的记法。',
 say:'“Melting is the separation of the two strands on heating; the melting temperature is where half the DNA is single-stranded. GC-rich DNA melts higher because a G–C pair has three hydrogen bonds and an A–T pair has two. More bonds per base pair means more energy to separate the strands — and G–C pairs also stack more strongly, which is the part the textbook does not say.”'},

{q:'What actually reads the sequence — how does a protein find its site?', odd:1,
 mean:'问的是<b>沟</b>（groove）。书给了名字和图。',
 say:'“Through the grooves. The double helix leaves two unequal spiral channels on the outside — the textbook calls them the larger and the smaller groove, major and minor — and that is where the edges of the bases are readable from outside without opening the helix.”'},

{q:'Is RNA always single-stranded?', odd:1,
 mean:'<b>陷阱问法。</b>答「是」就错了。',
 say:'“No. Messenger RNA is single-stranded as a whole, but ribosomal RNA is single-stranded with regions that pair into short double helices, and where the complementarity is incomplete the molecule forms loops. Transfer RNA is folded even more.”'},

{q:'How many kinds of RNA are there?',
 mean:'清单题。<b>报名字，再报一个能显出你读过表的细节。</b>',
 say:'“Five main kinds in the textbook — plus the nuclear RNAs it adds as the least understood group: the precursors of every kind, small nuclear RNA, and chromosomal RNA. Messenger RNA carries the genetic information from DNA to the ribosome, single-stranded. Ribosomal RNA is the structural component of the ribosome, named by sedimentation coefficient — in prokaryotes 5S, 16S and 23S; in eukaryotes up to four, 5S, 5.8S, 18S and 28S. Transfer RNA, the smallest at 4S, carries one activated amino acid each to the ribosome, all ending in CCA at the 3′ end, folded as a cloverleaf — three constant arms and a variable one, the acceptor stem carrying the CCA and the amino acid, the anticodon loop the triplet that pairs with the codon. Small nuclear RNA forms complexes with proteins — the spliceosome — and takes part in splicing. Viral RNA serves a virus as both its DNA and its mRNA.”'},

{q:'What is hnRNA?',
 mean:'真核转录的第一条产物。<b>顺手把 exon/intron 带出来。</b>',
 say:'“In eukaryotes the first transcript is heterogeneous nuclear RNA, substantially longer than the structural gene itself. It contains both coding regions — exons — and non-coding ones, introns, and it is processed into the functional messenger RNA — the introns are removed by the spliceosome, a complex of small nuclear RNA and proteins; the textbook’s word on p086 is simply ribonucleases.”'},

{q:'Which is left-handed?',
 mean:'<b>只有 Z。</b>一句话答完。',
 say:'“Only Z-DNA. A and B are both right-handed. Under physiological conditions DNA is almost exclusively B. Z-DNA has a deep minor groove and no distinguishable major groove; it occurs only in certain stretches — the textbook’s example sequence is d(CGCATGCG) — and its biological function is not known.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'比较题的每个名词都可能被单独拎出来问。', items:[
{r:'实测', q:'What are purines and pyrimidines?',
 en:'“A pyrimidine is one six-membered aromatic ring with nitrogens at positions 1 and 3 — cytosine, uracil, thymine. A purine is that ring fused to a five-membered imidazole ring — nine atoms, nitrogens at 1, 3, 7 and 9 — adenine and guanine. So the purine is the larger base; its sugar attaches at N9, the pyrimidine’s at N1.”',
 cn:'结构 p066 图 4.1；N9/N1 p067。卡上用了十次的词，之前没定义。'},
{r:'高', q:'Why “predominantly” — where else does thymine occur?',
 en:'“In transfer RNA. The textbook says the loops of tRNA contain minor bases, and its example of a minor base is hypoxanthine — guanine without its amino group. Generally, one of the tRNA minor bases is ribothymidine, thymine on ribose, in the T-loop; pseudouridine and dihydrouridine are others. So thymine is predominantly, not exclusively, a DNA base.”',
 cn:'minor bases p087；hypoxanthine p066；ribothymidine 通用。'},
{r:'中', q:'What does “activated amino acid” mean?',
 en:'“Activation is done by the aminoacyl-tRNA synthetase specific for that amino acid and tRNA, in two steps: the amino acid reacts with ATP to give aminoacyl-adenylate, releasing pyrophosphate; then the aminoacyl group is transferred as an ester to the 2′- or 3′-hydroxyl of the terminal adenosine of the tRNA’s CCA end. From then on the amino acid is recognised by the anticodon of its tRNA — the triplet that pairs with the codon on mRNA — not by its own chemistry.”',
 cn:'p096；anticodon p087。'},
{r:'中', q:'What is thioredoxin?',
 en:'“Thioredoxin is a small protein with two cysteines at its active site — reduced, two SH groups; oxidised, a disulfide. It hands two hydrogens to ribonucleotide reductase and is recharged from NADPH by the flavin enzyme thioredoxin reductase.”',
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
{r:'高', q:'Why does the cell make deoxyribonucleotides from ribonucleotides instead of building them separately?',
 en:'“Because the de novo pathways make ribonucleotides — the purine ring is assembled stepwise on ribose-5-phosphate; the pyrimidine ring is closed first, as orotate, then attached to phosphoribosyl diphosphate — and the deoxy form is one modification at the end: the 2′-OH is removed at the <b>diphosphate</b> level by ribonucleotide reductase. One biosynthetic route, one modification step — cheaper than two parallel pathways.”',
 cn:'<b>注意「在二磷酸水平」这个细节</b>——不是在从头合成核苷酸的时候就用脱氧糖。这一点很容易答错。<span class="pg">p072</span>'},
{r:'高', q:'Why thymine in DNA and uracil in RNA?',
 en:'“The textbook gives the distribution and one biosynthetic fact: thymine is never made as a free base — it is made as dTMP by methylating dUMP — the methyl from N⁵,N¹⁰-methylenetetrahydrofolate; the enzyme, thymidylate synthase, is general knowledge — so it is made at the deoxy level, which is why it belongs to DNA. The reason usually given is general knowledge, not in the book: cytosine deaminates to uracil, so if uracil were a normal DNA base the repair machinery could not tell a damaged cytosine from a legitimate base. Thymine is uracil with a methyl group, and that methyl is the label that says ‘this one belongs here’.”',
 cn:'⚠ 脱氨那个理由<b>书里完全没有</b>，是通用解释；但「thymine 只在脱氧水平上合成（dUMP → dTMP，N⁵,N¹⁰-亚甲基四氢叶酸）」是书 p070 的原话，可以当书的理由说。<b>先划清出处，再给解释</b>，比含糊地说出来安全得多。'},
{r:'中', q:'Why does A-DNA appear when you dry it out?',
 en:'“Because the B form depends on the water structure around the backbone. The textbook gives the trigger as the relative water content falling to about seventy-five percent, and the A form is a wider, flatter right-handed helix with a deep major groove and a very shallow minor one.”',
 cn:'⚠ 75% 这个数<b>要回 300 dpi 原图核</b>（OCR 数字容易吃掉）。<span class="pg">p075</span>'}
]},

{g:'怎么发现的', gn:'⚠ 这一格书里几乎没有，出处要说清。', items:[
{r:'中', q:'How was the structure of DNA worked out?',
 en:'“Generally — the textbook does not tell this history: from X-ray fibre diffraction of DNA, which showed a regular helix, plus Chargaff’s rule that in any DNA adenine equals thymine and guanine equals cytosine, and model building — Watson and Crick, 1953. What the textbook stresses is the consequence: it titles the section ‘the structure and biosynthesis of DNA explains the principle of heredity’ — once the structure is known, complementarity supplies the copying mechanism, no extra principle is needed.”',
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
