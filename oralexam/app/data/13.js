/* 卡 13 · What are two critical post-translational modifications for surface and secreted proteins?
   题库 #13（S2 Biochemistry 7）· 导师写过一遍
   出处 Biochemie OCR p108–p115、p109
   插队理由：2026-09-11 她跟同事聊到这题只答出「O-glycan / N-glycan」，自评不合格。 */

window.CARDS.push({
id:'13', n:13, w:2,
q:'What are two critical post-translational modifications for surface and secreted proteins?',
qcn:'对表面蛋白和分泌蛋白最关键的两种翻译后修饰是什么',
sub:'主干说完约 90 秒 · 口试他多半只问 “What is post-translational modification?”',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 他不会念完整的题面。卷面写了 two / critical / surface and secreted，嘴上多半只有前半句——那三个词是他要挖的方向，不是他会说出口的话。'},
 {n:'01', t:'定义',
  ez:'“Post translational modification is a set of processes. They turn the nascent polypeptide into the active protein. They happen once the nucleic acids are no longer involved. So nothing in it is encoded by a codon. The textbook counts three kinds. First, non covalent folding and association of the chain. Second, covalent changes to the backbone. Signal peptide cleavage is one. Third, covalent changes to side chains. The narrower sense means the covalent ones. And some of those begin early. N glycosylation begins while the chain is still on the ribosome.”',
  ezcn:'<b>翻译后修饰 ＝ 把新生肽链变成有活性蛋白的那一整套过程</b>，<b>发生在核酸不再参与之后</b>——<b>所以里面没有任何一步是由密码子编码的</b>。<b>书数了三类</b>：<b>① 链的非共价折叠与缔合</b>；<b>② 对主链的共价改动（比如切掉信号肽）</b>；<b>③ 对侧链的共价改动</b>。<b>狭义上这个词指的是共价那些</b>。⚠ <b>而且有些开始得很早：N-糖基化在链还挂在核糖体上的时候就开始了。</b>',
  big:'把新生肽链变成<b>有活性的蛋白</b>的那一整套过程，核酸不再参与——<b>没有密码子编码它</b>；狭义指其中<b>共价</b>的那些',
  en:'“Post-translational modification is the set of processes that turn the nascent polypeptide into the <b>biologically active protein</b>, once the nucleic acids are no longer involved. So nothing in it is <b>encoded by a codon</b>. The textbook counts three kinds: the non-covalent folding and association of the chain, covalent changes to the backbone such as signal-peptide cleavage, and covalent changes to side chains. In the usual narrower sense the term means the covalent ones. And some of those, N-glycosylation for instance, actually begin while the chain is still on the ribosome.”',
  note:'「没有密码子」这条边界一句话挡掉两道题：这题的定义，和 #1 里「hydroxyproline 为什么不算 proteinogenic」。<b>同一个边界，两道题共用。</b>'},
 {n:'02', t:'挑两个',
  ez:'“Two of them matter most. That is for proteins going to the surface. It also holds for proteins going out of the cell. Those two are N glycosylation and disulfide bond formation.”',
  ezcn:'<b>对于要去细胞表面、或者要分泌出去的蛋白，最要紧的是两个：N-糖基化 和 二硫键的形成。</b>',
  big:'<b>N-glycosylation</b> 和 <b>disulfide bond formation</b>',
  en:'“For proteins that go to the surface or out of the cell, two of them matter most: <b>N-glycosylation</b> and <b>disulfide bond formation</b>.”',
  note:'题面里的 <b>two</b> 是导师自己写的——他要的是**挑两个**，不是列一堆。列一堆就答偏了。'},

 {g:'为什么偏偏是这两个', gn:'这一格是整题的胜负手。只说名字＝不合格，说清这个＝答对一半。'},
 {n:'03', t:'共同点',
  big:'表面蛋白和分泌蛋白的共同点是<b>都走分泌通路</b>，也就是<b>都经过 ER 腔</b>',
  en:'“What surface and secreted proteins have in common is that they all take the same route, the <b>secretory pathway</b>. An N-terminal signal sequence brings the ribosome to the ER. The signal recognition particle, SRP, carries it there and docks on its receptor in the ER membrane. The chain is threaded into the ER lumen as it is made, and signal peptidase cuts the signal off. From there vesicles carry it through the Golgi to the plasma membrane or out of the cell. So they all pass through the <b>lumen of the ER</b>, which is already ‘outside’ in the topological sense. Its contents reach the extracellular space by vesicle fusion and never mix with the cytosol. That is why the lumen can hold an oxidising chemistry the cytosol cannot.”',
  note:'先说共同点，再说修饰。顺序反过来就变成了列清单。'},
 {n:'04', t:'关键一句',
  big:'ER 里发生的修饰书列了四种；<b>这两个是通用的</b>，而且都<b>不能在胞质里做</b>',
  en:'“Of the modifications the textbook lists, four happen in the ER — glycosylation, disulfide formation, hydroxylation and γ-carboxylation. Hydroxylation is specific to collagen and γ-carboxylation to the clotting factors, so the two <b>general</b> ones, the ones nearly every surface or secreted protein carries, are N-glycosylation and disulfide bonds. Neither can be made in the cytosol. The cytosol is a <b>reducing</b> environment: its glutathione is almost entirely the free thiol, so a structural sulfur–sulfur bond there is exchanged back into two thiols. And <b>oligosaccharyltransferase</b>, the enzyme that moves the sugar core onto asparagine, has its active site in the ER lumen — the textbook just says ‘transferases’.”',
  note:'<b>「胞质是还原性的，二硫键在那儿形不成」</b>——这半句是全卡最值钱的一句。它同时解释了为什么是这两个、为什么在这儿、以及（见 ⑧ 桥）为什么表达膜蛋白要用酵母不用大肠杆菌。'},
 {n:'05', t:'一句话收',
  big:'所以这两个修饰等于<b>「这个蛋白到过 ER」的签名</b>',
  en:'“So between them, these two modifications are the <b>signature of a protein that has been through the ER</b>.”',
  note:'说到这里，critical 那个词就答完了。'},

 {g:'糖基化的机制', gn:'他追问时追的是这一个，不是二硫键。分两阶段，别说成一步。'},
 {n:'06', t:'接在哪',
  big:'N- 接在 <b>asparagine 的酰胺氮</b>；O- 接在 <b>serine 或 threonine 的羟基</b>',
  en:'“<b>N-glycosidic</b>, through the amide nitrogen of <b>asparagine</b>. <b>O-glycosidic</b>, through the hydroxyl of <b>serine or threonine</b>.”',
  note:'<span class="pg">p112</span> 这两个词就是你上次答的全部内容。<b>它们是第一行，不是答案。</b>'},
 {n:'07', t:'第一阶段',
  big:'寡糖核心<b>不在蛋白上造</b>，先在 <b>dolichol phosphate</b> 上造好',
  en:'“The oligosaccharide core is not built on the protein at all. It is assembled on a lipid carrier, <b>dolichol phosphate</b>, from nucleotide sugars, starting with UDP-N-acetylglucosamine. It grows until it is a fourteen-sugar block held on a pyrophosphate — three glucose, nine mannose, two N-acetylglucosamine, Glc₃Man₉GlcNAc₂.”',
  note:'核心的组成：<b>Glc₃Man₉(GlcNAc)₂</b>——三个葡萄糖、九个甘露糖、两个 GlcNAc。dolichol 是 ER 膜里的长链脂，n = 9–22 个异戊二烯单位。<span class="pg">p112</span>'},
 {n:'08', t:'识别信号',
  big:'三肽 <b>Asn-X-Ser/Thr</b>，其中 <b>X 是除 proline 外任何氨基酸</b>',
  en:'“The signal the transferase reads is a tripeptide: <b>asparagine, any residue except proline, then serine or threonine</b>.”',
  note:'<b>「除 proline 外」这个例外最容易漏，而它正是 specific 题的形状。</b>这种短序列叫 sequon。<span class="pg">p112</span>'},
 {n:'09', t:'什么时候接',
  big:'在 <b>ER 膜上</b>接，那时<b>蛋白还没合成完</b>',
  en:'“This happens in the ER membrane <b>while the protein is still being synthesised</b>.”',
  note:'共翻译，不是翻译后：“Strictly that makes N-glycosylation co-translational rather than post-translational — the textbook still files it under post-translational modification.” <b>这一条是「它同时是折叠质控」的依据</b>——修饰发生在还没折好的时候。<span class="pg">p112</span>'},
 {n:'10', t:'第二阶段',
  big:'到 Golgi 里<b>先剪后加</b>：切葡萄糖、切甘露糖，再加回去，<b>末端是 sialic acid</b>',
  en:'“After the transfer the core is trimmed and rebuilt. <b>Glucosidases</b> take the three glucoses off, <b>mannosidases</b> take some mannoses off, and further transferases in the Golgi add N-acetylglucosamine, galactose and <b>sialic acid at the end</b>. The textbook puts all the trimming in the Golgi. In the standard picture the glucoses come off already in the ER, and that is what the calnexin–calreticulin cycle reads as a folding check.”',
  note:'<b>「在 Golgi 里加糖」是错的说法</b>——核心在 ER 接，Golgi 是修剪加尾。<span class="pg">p112</span>'},
 {n:'11', t:'一个去向标签',
  big:'甘露糖 <b>6 位磷酸化</b> → <b>mannose-6-phosphate</b> → 送去<b>溶酶体</b>',
  en:'“One mannose can be phosphorylated at position six. <b>Mannose-6-phosphate</b> is the tag that sends a secretory glycoprotein to the lysosome.”',
  note:'这是书里唯一明确给出的**糖决定去向**的例子。被问「加糖有什么用」时给这个，比泛泛说「稳定性」稳。<span class="pg">p112</span>'},

 {g:'二硫键', gn:'比糖基化简单，但书对它有一句定性特别好用。'},
 {n:'12', t:'怎么形成',
  big:'两个 cysteine 侧链之间的<b>共价 S–S 键</b>（空间上相邻，序列上可以很远），氧化生成，合起来叫 cystine；酶是 <b>protein disulfide isomerase</b>，在 <b>ER 池</b>里',
  en:'“A disulfide bond is a covalent sulfur–sulfur bond between the side chains of two cysteine residues that lie next to each other <b>in the fold</b>. They can be far apart in the sequence. The two become one cystine and cross-link the chain. It forms by oxidation: the two thiol hydrogens are removed. Which pairs form first is not specific, the textbook says, so <b>protein disulfide isomerase</b>, in the cisternae of the ER, reshuffles them until the pairing that stabilises the native conformation is reached.”',
  note:'名字里的 <b>isomerase</b> 说明它不只是「形成」，也<b>重排错配的</b>二硫键。<span class="pg">p113</span>'},
 {n:'13', t:'书的定性',
  big:'它是把肽链<b>固定在一个能量上并不完全有利的构象</b>上的办法',
  en:'“It is one of the ways a chain can be <b>fixed in a particular conformation that is not entirely favourable energetically</b>.”',
  note:'<b>这句话直接咬住 p109</b>：书在那里说，对相当一部分蛋白，活性构象不是能量最低的构象。<b>两章的同一个思想，能接起来是加分。</b><span class="pg">p113 p109</span>'},

 {g:'收尾', gn:'一句停住，一句伸出去。'},
 {n:'14', t:'落点',
  big:'再往下「为什么偏偏用糖」是<b>历史问题</b>，能测的是<b>糖把蛋白送去哪</b>',
  en:'“Beyond that, why glycosylation specifically rather than some other tag is a historical question — the pathway is what survived. What we <b>can</b> measure is where the sugar sends the protein.”',
  note:'落在**进化 ／ 测量限制**之间。说完就停。<br>⚠「糖决定半衰期、免疫识别」这些**书里没有**，要说就说 "generally"，别说成书上写的。'},
 {n:'15', t:'留口子',
  big:'这两个修饰都发生在蛋白<b>还没折好</b>的时候；书说二硫键<b>帮助达到活性折叠</b>，通用说法里 N-糖链的修剪状态是<b>折叠质控</b>',
  en:'“Both of these happen while the chain is still folding, not after. The textbook says disulfide formation contributes to reaching the active fold and that PDI facilitates the pairs that stabilise the native conformation. In the standard picture the N-glycan’s trimming state is also read as a folding check. That is the part I find interesting, because the textbook says elsewhere that for many proteins the biologically active conformation is <b>not</b> the lowest-energy one.”',
  note:'口子留在「折叠质控」上，他追下去就到 chaperone，那边<b>卡 01 有</b>。'}
],
end:'<b>会说这十五点，这题就不会再像上次那样只答出两个词。</b>真正的胜负手是第 3–5 点（为什么偏偏是这两个），其余都是被追问时才给的。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：把新生链变成有活性蛋白的那套过程，核酸不再参与，<b>没有密码子编码</b>；狭义指共价的那些',
 '“The processes that turn the nascent chain into the active protein once the nucleic acids are out. Nothing in it is encoded by a codon. In the narrow sense, the covalent ones.”',
 '这条边界跟 #1 那题共用——hydroxyproline 是天然的但不是 proteinogenic，就是因为它在翻译后才加上去。'],
['<b>两个是</b>：N-glycosylation ＋ disulfide bond formation',
 '“N-glycosylation and disulfide bond formation.”',
 '题面里的 <b>two</b> 是导师写的。挑两个，不要列一堆。'],
['<b>共同点</b>：表面蛋白和分泌蛋白都走分泌通路，都过 <b>ER 腔</b>',
 '“They all take the secretory route — signal sequence, into the ER lumen as they are made, then vesicles through the Golgi. So they all pass through the lumen of the ER, which is topologically already outside.”',
 '先说共同点再说修饰，否则就变成清单。'],
['<b>关键</b>：ER 里的修饰有四种，这两个是<b>通用的</b>；都<b>做不了在胞质里</b>——胞质是<b>还原性</b>的',
 '“Four ER modifications in the textbook. These two are the general ones. Neither can be made in the cytosol: its glutathione is almost all free thiol, so a structural S–S is exchanged back. And the transferase that puts the sugar core on faces the ER lumen.”',
 '<b>全卡最值钱的半句。</b>它同时回答了 critical、地点、以及为什么用酵母不用大肠杆菌。'],
['<b>接在哪</b>：N- 在 <b>Asn 酰胺氮</b>，O- 在 <b>Ser/Thr 羟基</b>',
 '“N-glycosidic through the side-chain amide nitrogen of asparagine, not the backbone amide. O-glycosidic through the side-chain hydroxyl of serine or threonine.”',
 '这两个词是上次答的全部内容。它们是第一行，不是答案。'],
['<b>载体</b>：核心先在 <b>dolichol phosphate</b> 上造，不是在蛋白上',
 '“The core is assembled on a lipid carrier, dolichol phosphate.”',
 '组成 Glc₃Man₉(GlcNAc)₂，起点是 UDP-N-acetylglucosamine。'],
['<b>识别信号</b>：<b>Asn-X-Ser/Thr</b>，X ≠ proline',
 '“The signal is a tripeptide: asparagine, any residue except proline, then serine or threonine.”',
 '「除 proline 外」最容易漏，而它正是 specific 题的形状。'],
['<b>时机</b>：在 ER 膜上，<b>蛋白还没合成完</b>',
 '“It happens in the ER membrane while the protein is still being synthesised.”',
 '共翻译。这是「同时是折叠质控」的依据。'],
['<b>Golgi</b>：先剪后加，<b>末端 sialic acid</b>',
 '“Glucosidases and mannosidases trim, then transferases add GlcNAc, galactose and sialic acid.”',
 '「在 Golgi 里加糖」是错的——核心在 ER 接。'],
['<b>去向标签</b>：<b>mannose-6-phosphate</b> → 溶酶体',
 '“Mannose-6-phosphate is the tag that sends a secretory glycoprotein to the lysosome.”',
 '书里唯一明确给的「糖决定去向」的例子。'],
['<b>二硫键</b>：两个 cysteine 侧链间的共价 S–S，空间相邻、序列可远；氧化生成；PDI 在 ER 池里重排',
 '“A covalent S–S bond between two cysteine side chains, neighbours in the fold, not necessarily in sequence. It forms by oxidation, and protein disulfide isomerase reshuffles it in the ER cisternae.”',
 'isomerase 这个名字说明它也重排错配的二硫键。'],
['<b>留口子</b>：两个都发生在还没折好时；书说二硫键帮助达到活性折叠，糖链的质控是通用说法',
 '“Both happen while the chain is still folding. The textbook says disulfides help reach the active fold, and in the standard picture the glycan’s trimming state is a folding check.”',
 '他追下去就到 chaperone，卡 01 有。']
],

segs:[
 {tag:'段 1 · 定义', h:'他只问了半句，你要把结构自己接上',
  p:['“Post-translational modification means the processes that turn the nascent polypeptide into the biologically active protein, once the nucleic acids are no longer involved. Nothing in it is encoded by a codon. The textbook counts three kinds: non-covalent folding and association, covalent changes to the backbone, covalent changes to side chains. In the narrow sense the term means the covalent ones.',
     'For proteins that go to the surface or out of the cell, two of them matter most: <b>N-glycosylation</b> and <b>disulfide bond formation</b>.”'],
  note:'<b>他嘴里的题面只到「什么是翻译后修饰」。</b>卷面上多出来的 two / critical / surface and secreted 是他要挖的方向——所以你要主动把「挑两个」这一步做掉，不要等他问。'},
 {tag:'段 2 · general', h:'为什么偏偏是这两个',
  p:['“What surface and secreted proteins have in common is that they all take the <b>secretory pathway</b>. A signal sequence brings the ribosome to the ER. The chain enters the lumen as it is made, then vesicles carry it through the Golgi to the surface or the outside. So they all pass through the lumen of the endoplasmic reticulum, which is topologically already outside the cell. Its contents never mix with the cytosol.',
     'The textbook places four modifications in the ER: glycosylation, disulfide formation, hydroxylation, γ-carboxylation. These two are the general ones, the ones nearly every surface or secreted protein carries. Neither can be made in the cytosol. It is a <b>reducing</b> environment: its glutathione is almost entirely the free thiol, so a structural sulfur–sulfur bond is exchanged back into two thiols. And the transferase that puts the sugar core onto asparagine faces the ER lumen.',
     'So between them, these two modifications are the signature of a protein that has been through the ER.”'],
  note:'<b>这一段答的是题面里的 critical。</b>只说名字不说这个，就是上次那种不合格。'},
 {tag:'段 3 · 稍展开', h:'挑糖基化，因为他追的是这个',
  p:['“N-glycosylation runs in two phases. First the oligosaccharide core is not built on the protein at all. It is assembled on a lipid carrier, dolichol phosphate, until it reaches three glucose, nine mannose, two N-acetylglucosamine.',
     'Then a transferase moves that whole core onto the protein. The signal it reads is a tripeptide: asparagine, any residue except proline, then serine or threonine. This happens in the ER membrane while the protein is still being synthesised.',
     'The core is then trimmed and rebuilt. Glucosidases take the three glucoses off, mannosidases take some mannoses off, and further transferases in the Golgi add N-acetylglucosamine, galactose and sialic acid at the end. The textbook puts the trimming in the Golgi. In the standard picture the glucoses come off already in the ER, as a folding check.”'],
  note:'〔可裁〕再一层：“And one mannose can be phosphorylated at position six — <b>mannose-6-phosphate</b> is the tag that sends a secretory glycoprotein to the lysosome.”'},
 {tag:'段 4 · 留口子', h:'把话引到折叠质控',
  p:['“Both of these happen while the chain is still folding, not after. The textbook says disulfide formation contributes to reaching the active fold. In the standard picture the glycan’s trimming state is read as a folding check. That is the part I find interesting, because the textbook says elsewhere that for many proteins the biologically active conformation is not the lowest-energy one. That is also how it describes what a disulfide bridge does: it fixes the chain in a conformation that is not entirely favourable energetically.”'],
  note:'<b>这一段把第四章和第二章接起来了</b>（p113 的定性 ＋ p109 的论断）。能把两章接起来，是这场考试里最划算的动作。'}
],

why:{
 rungs:[
  ['为什么要在 ER 里做，不在胞质做？','因为<b>胞质是还原性的</b>，二硫键在那儿会被还原回去；而糖基转移酶都在 ER 腔和 Golgi 里。'],
  ['为什么细胞要先在 dolichol 上造一个核心，再整块搬过去？','因为这样每个 N 位点<b>起点都一样</b>，质量控制才有统一参照。修剪到什么程度就成了一个可读的状态标签——葡萄糖切没切完，等于「折好了没有」。'],
  ['那为什么要给蛋白加糖？','书说糖基化是最重要的翻译后修饰之一，<b>但没有给功能清单</b>。能从书里说出来的只有两条：它决定去向（M6P → 溶酶体），并且发生在折叠过程中。“The textbook calls it one of the most important modifications but gives no list of functions. Two things it does say. The sugar decides where the protein goes — mannose-6-phosphate sends it to the lysosome. And it is put on while the chain is still folding, which in the standard picture makes the trimming state a folding check.”']
 ],
 stop:{lbl:'停 · 落在进化与测量限制之间',
  say:'“Beyond that, why glycosylation specifically rather than some other tag is a historical question — the pathway is what survived. What we can measure is where the sugar sends the protein.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p111_obr455_er_translocation.jpg',
  t:'分泌通路的第一段 —— 链是怎么进到 ER 里的（书 Obr. 4.55）',
  cap:'<b>速背 03 那一整段英文，书把它画成了这张图，而且编了号。</b>'
    + '上半部标着 <b>cytosol</b>，下半部那个长扈子就是 <b>ER</b>，里面写着 <b>ER lumen</b>。'
    + '图上四个捷克语标注对应你要说的四个名词：<b>signální sekvence ＝ 信号序列</b>、'
    + '<b>ribosomový receptor ＝ 核糖体受体</b>、<b>peptidový translakační komplex ＝ 肽链转位复合物</b>、'
    + '<b>signální peptidasa ＝ 信号肽酶</b>；SRP 和 SRP receptor 本来就是英文。'
    + '<br><br><b>画的顺序（他说“show me”就画这五笔）</b>：'
    + '<br>① 下面画<b>一条横的 ER 膜</b>，膜下写 <b>ER lumen</b>，膜上写 <b>cytosol</b>。'
    + '<br>② 膜上方画一个<b>核糖体</b>，下面拉一条 <b>mRNA</b>，核糖体里伸出一截<b>新生肽链</b>，'
    + '链的 <b>N 端那一段标“信号序列”</b>。'
    + '<br>③ 在信号序列上挂一个小棒，标 <b>SRP</b>；箭头指到膜上一个小方块，标 <b>SRP receptor</b>。'
    + '<br>④ 膜上再画一个<b>穿膜的孔</b>，标 <b>translocation complex</b>，链从这个孔<b>向下穿进 lumen</b>。'
    + '<br>⑤ 在孔旁边画一把小剪刀，标 <b>signal peptidase</b>，把信号序列剪下来。'
    + '最后在 lumen 里画一个已经卷好的团。'
    + '<br><br><b>边画边说的三句</b>：“The signal sequence sits at the <b>N-terminus</b> and is encoded by ordinary codons right after the initiation codon, '
    + 'so it is part of the chain until it is cut off.”'
    + '<br>“The <b>SRP</b> binds the signal sequence, brings the whole ribosome to its <b>receptor</b> on the ER membrane, and is then released to be used again.”'
    + '<br>“The chain is threaded through the translocation complex into the <b>lumen while it is still being made</b>. <b>Signal peptidase</b> sits on that membrane and cuts the signal off there.”'
    + '<br><br><b>这张图是你那一句胜负手的地图</b>：表面蛋白和分泌蛋白的共同点就是<b>都走这条路、都经过 ER 腔</b>。'
    + '指着图说完路线，再说两个修饰，顺序就不会变成列清单。',
  src2:'Biochemie, Obr. 4.55, p111 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p110_obr454_pdi_folding.jpg',
  t:'二硫键是怎么被改对的 —— 四格漫画（书 Obr. 4.54）',
  cap:'<b>这张同时回答速背 12 和定义里那一条「非共价的折叠也算 PTM」。</b>'
    + '从左到右四格：<b>没折叠的链（上面挂着 hsp 70 chaperone）→ 折错了的（图里看得见 –SH 和 –S–S–）'
    + '→ 经过 ① → 经过 ②</b>。右上角的图例就是两个酶的名字：'
    + '<b>① protein-disulfid-isomerasa（PDI）、② peptidyl-prolin-cis,trans-isomerasa</b>——两个名字本来就是拉丁文，直接能读。'
    + '<br><br><b>画的顺序（他问“how does the cell get the right pairs”就画这四笔）</b>：'
    + '<br>① 画一条<b>松开的链</b>，上面挂两个圆点，标 <b>chaperone（hsp 70）</b>。'
    + '<br>② 箭头→ 画一个卷好了的团，上面写几个 <b>–SH</b> 和两根 <b>–S–S–</b>，写一句「配错了」。'
    + '<br>③ 箭头上方写 <b>PDI</b>，右边再画同一个团，<b>S–S 换了搭档</b>。'
    + '<br>④ 再一个箭头，上方写 <b>PPIase</b>，把图里那个五边形（就是 proline）从 <b>cis 翻成 trans</b>。'
    + '<br><br><b>边画边说的三句</b>：“A disulfide is a covalent <b>sulfur–sulfur</b> bond between two cysteine side chains that are close together <b>in the fold</b>, '
    + 'though they can be far apart in the sequence. It forms by <b>oxidation</b>, and the two residues together are called a <b>cystine</b>.”'
    + '<br>“Which pairs form first is <b>not specific</b>, so the first set is often wrong. '
    + '<b>Protein disulfide isomerase</b> reshuffles them until the chain reaches its stable conformation — the name says isomerase, not synthase, and that is the point.”'
    + '<br>“The figure also shows the other repair enzyme, <b>peptidyl-prolyl cis-trans isomerase</b>, which flips a proline peptide bond. '
    + 'Proline is the one residue where the <b>cis</b> form really occurs, so it needs an enzyme of its own.”'
    + '<br><br>⚠ <b>一句最值钱的要接在这里</b>：“All of this happens in the <b>ER lumen</b>, because the <b>cytosol is reducing</b> — '
    + 'there are enough free thiols there that any S-S would be pulled apart again.”'
    + '<b>这同时是「为什么表达膜蛋白用酵母不用大肠杆」那个桥的前半句。</b>',
  src2:'Biochemie, Obr. 4.54, p110 · 250 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p112_dolichol_phosphate.jpg',
  t:'对糖的那个载体长什么样 —— dolichol phosphate（书 p112）',
  cap:'<b>这张是「认」，而且它把速背 07 里最难想象的那个名词变成了一个形状。</b>'
    + '左边一个圈着的 <b>P</b> 就是磷酸基，右边一条<b>很长的烃链，隔几个碳挂一个 CH₃、每段一个双键</b>——'
    + '那就是<b>异戊二烯重复单元</b>，中间那对括号右下角的 <b>n</b> 就是重复次数。'
    + '<b>图注直接印着 n = 9–22</b>，这个数不用猜。'
    + '<br><br><b>看到图要说的那一段</b>：“The oligosaccharide core is <b>not built on the protein</b>. '
    + 'It is assembled on a lipid carrier in the ER membrane, <b>dolichol phosphate</b> — a long <b>isoprenoid</b> chain, nine to twenty-two units, with a phosphate at one end. '
    + 'The sugars come from <b>nucleotide sugars</b>, starting with UDP-N-acetylglucosamine, and the finished block is <b>Glc₃Man₉GlcNAc₂</b> held on a pyrophosphate. '
    + 'Only then is the whole block transferred onto an asparagine.”'
    + '<br><br><b>为什么要有这个载体，一句话</b>：它是<b>脂</b>，所以它待在膜里；'
    + '糖在膜上装好一整块再一次性搬过去，比在蛋白上一个一个接快得多。'
    + '<br>⚠ 这里<b>没有糖链核心本身的图</b>——全书没画 Glc₃Man₉GlcNAc₂的结构，也没画修剪过程。'
    + '<b>所以那一段只能说，不能指图。</b>',
  src2:'Biochemie, p112 · 250 dpi 原图裁切，未修改（书上这张没给图号）'},

 {k:'画',
  src:'img/p114_obr457_phospho_ser_thr_tyr.jpg',
  t:'磷酸化接在哪三个残基上（书 Obr. 4.57）',
  cap:'<b>他问「还有哪些翻译后修饰」时，最常落在磷酸化，而书就画了这三个。</b>'
    + '三个名字照字面读就是 <b>phosphoserine · phosphothreonine · phosphotyrosine</b>。'
    + '<br><br><b>画的顺序（三步，接在氨基酸卡的骨架后面）</b>：'
    + '<br>① 先按氨基酸卡那个骨架画一个 <b>serine</b>：α 碳上 H₃N⁺、COO⁻、H，侧链 <b>CH₂–OH</b>。'
    + '<br>② 把那个 <b>OH 上的 H 换成 PO₃²⁻</b>：写成 <b>CH₂–O–P</b>，磷上一个双键 O、两个 <b>O⁻</b>。'
    + '<br>③ 把侧链换成 threonine（<b>CH–OH</b> 旁边多一个 CH₃）或 tyrosine（苯环对位的 <b>OH</b>），同样把 H 换成磷。'
    + '<br><br><b>边画边说的两句</b>：“Phosphorylation makes a <b>phosphoester</b> on a side-chain hydroxyl — '
    + 'on <b>serine</b>, <b>threonine</b> or <b>tyrosine</b>. The textbook says lysine, arginine and histidine are phosphorylated far more rarely.”'
    + '<br>“The textbook calls phosphorylation and dephosphorylation probably the <b>most important regulatory mechanism</b> for the activity of proteins, especially enzymes and protein hormones. '
    + 'For some proteins the phosphorylated form is the active one, for others it is the opposite.”'
    + '<br><br><b>为什么这三个，一句话</b>：<b>只有它们的侧链带着一个能被酶接手的 –OH</b>。'
    + '这正好接回氨基酸卡的「三个羟基」那一点：Ser、Thr、Tyr。'
    + '<br>⚠ <b>别把它说成表面/分泌蛋白的两个关键修饰之一。</b>磷酸化主要发生在<b>胞质</b>侧，'
    + '是调控，不是「到过 ER 的签名」。他问到它时把这句差别说出来，比多数一个例子都值钱。',
  src2:'Biochemie, Obr. 4.57, p114 · 250 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is PTM?',
  ez:'“Post translational modification means a set of processes. They turn the nascent polypeptide into the active protein. They happen once the nucleic acids are no longer involved. Nothing in it is encoded by a codon. In the narrow sense it means covalent changes. They are changes to the backbone and the side chains. Two matter most for surface and secreted proteins. N glycosylation is one. Disulfide bond formation is the other. Neither can be made in the cytosol.”',
  ezcn:'<b>翻译后修饰 ＝ 在核酸已经不再参与之后，把新生多肽变成有生物活性的蛋白的那些过程；里面没有任何一样是由密码子编码的。</b><b>狭义上说，它指的是主链和侧链上的共价改变。</b><b>对于要去细胞表面或者分泌出去的蛋白，最重要的是两个：N-糖基化和二硫键形成。</b><b>它们的共同点是：两个都不能在胞质里完成——胞质是还原性的，结构性二硫键在那里活不下来；而把糖核心装上去的那个转移酶朝向的是内质网腔。</b>',
 mean:'他多半说全称 “What is post-translational modification?”。<b>这就是他真正会说出口的那句。</b>卷面那句完整题面他不会念。所以这一句的答案必须<b>自带结构</b>：定义 → 挑两个 → 为什么是这两个 → 分别对应什么。',
 say:'“Post-translational modification means the processes that turn the nascent polypeptide into the biologically active protein, once the nucleic acids are no longer involved. Nothing in it is encoded by a codon. In the narrow sense, it means the covalent changes to the backbone and the side chains. For proteins that go to the surface or out of the cell, two matter most: N-glycosylation and disulfide bond formation. What they have in common is that neither can be made in the cytosol. It is reducing, so a structural disulfide does not survive there, and the transferase that puts the sugar core on faces the ER lumen.”'},

{q:'Name some post-translational modifications.',
  ez:'“The textbook lists seven of them. Glycosylation. Hydroxylation. Gamma carboxylation. Disulfide bond formation. Methylation. Phosphorylation. And sulfation. It places four of them in the E R. Those four are glycosylation and hydroxylation. Gamma carboxylation and disulfide formation are the others. Those four mark a protein from the secretory route. Phosphorylation and methylation are generally the cytosolic ones. They act on signalling and regulatory proteins.”',
  ezcn:'<b>书列了七个：糖基化 · 羟化 · γ-羧化 · 二硫键形成 · 甲基化 · 磷酸化 · 硫酸化。</b><b>其中四个它放在内质网里：糖基化 · 羟化 · γ-羧化 · 二硫键形成——这四个标记着一个走过分泌途径的蛋白。</b><b>磷酸化和甲基化通用地说是胞质里做调节的那两个，作用在信号蛋白和调节蛋白上。</b>',
 mean:'他要清单，不是要两个。<b>这时候才列</b>——而且列完要说哪些是分泌蛋白特有的。',
 say:'“The textbook lists seven: glycosylation, hydroxylation, γ-carboxylation, disulfide bond formation, methylation, phosphorylation and sulfation. Four of them it places in the ER: <b>glycosylation, hydroxylation, γ-carboxylation and disulfide formation</b>. Those four mark a protein that has gone through the secretory route. <b>Phosphorylation and methylation are, in general, the cytosolic regulatory ones</b>, on signalling and regulatory proteins.”',
 tail:'甲基化和硫酸化被追就说：“Methylation puts methyl groups on charged side chains. It makes O-methyl esters on the carboxyls of glutamate and aspartate, and mono- to tri-N-methyl groups on the amines of lysine, arginine and histidine. The textbook’s examples are the bacterial chemotaxis proteins, and it notes that faulty methylation of sperm proteins is a fairly common cause of infertility. Sulfation esterifies a side-chain hydroxyl with sulfate — the textbook’s example is the tyrosines of gastrin.”（p113–p114）γ-羧化见「Why do you need vitamin K?」。'},

{q:'How is N-glycosylation formed?',
  ez:'“It happens in two phases. First the core is assembled on a lipid carrier. That carrier is dolichol phosphate. The core grows to three glucose and nine mannose. It also has two N acetylglucosamine. Then oligosaccharyltransferase moves the whole core. It moves it onto an asparagine. It reads a sequon to find that asparagine. That happens in the E R membrane. The protein is still being made. Trimming and the terminal sugars come later in the Golgi.”',
  ezcn:'<b>两个阶段。</b><b>① 先在一个脂质载体——磷酸多萜醇——上把糖核心装起来，一直装到 3 个葡萄糖、9 个甘露糖、2 个 N-乙酰葡糖胺。</b><b>② 然后由寡糖基转移酶把整个核心整块搬到一个天冬酰胺上，它认的是那个序列子：Asn-任意残基（脯氨酸除外）-Ser 或 Thr。</b><b>这发生在内质网膜上，而且蛋白还在被合成的过程中；修剪和末端的糖是后来在高尔基体里加的。</b>⚠ <b>要机制，不要现象；别说成一步。</b>',
 mean:'<b>同学转述的实测问题，而且明说「要机制不要现象」。</b>两阶段，别说成一步。',
 say:'“In two phases. The core is first assembled on a lipid carrier, dolichol phosphate, until it is three glucose, nine mannose, two N-acetylglucosamine. Then oligosaccharyltransferase moves the whole core onto an asparagine, reading the sequon asparagine, any residue except proline, then serine or threonine. That happens in the ER membrane while the protein is still being made. Trimming and the terminal sugars come later, in the Golgi.”'},

{q:'Why can’t E. coli make your protein properly?',
  ez:'“Because the E. coli cytoplasm is reducing. So disulfides do not form there. I would have to send the protein to the periplasm. Or I would use an engineered oxidising strain. And E. coli has no N glycosylation at all. It has no dolichol linked core. It has no oligosaccharyltransferase either. A surface protein may need both of those. Then it is far easier to fold in a eukaryotic host. That is why I express it in yeast.”',
  ezcn:'因为<b>大肠杆菌的胞质是还原性的，二硫键在那里形成不了</b>——<b>要么把蛋白送去周质，要么用一个改造成氧化性的菌株。</b><b>而且大肠杆菌完全没有 N-糖基化：既没有连在多萜醇上的糖核心，也没有寡糖基转移酶。</b><b>一个两样都需要的表面蛋白，放在真核宿主里折叠正确得多——这就是我用酵母表达它的原因。</b>', odd:1,
 mean:'<b>这就是同一个答案，换成了实验室的问法。</b>而且它直通你的工作。',
 say:'“Because the E. coli cytoplasm is reducing, so disulfides do not form there. You would have to send the protein to the periplasm or use an engineered oxidising strain. And E. coli has no N-glycosylation — no dolichol-linked core and no oligosaccharyltransferase. A surface protein that needs both is far easier to fold correctly in a eukaryotic host, which is why I express it in yeast.”',
 tail:'<b>这是一个想接的口子</b>：他顺着走就到 yeast display，那是你的主场。'},

{q:'Why do you need vitamin C?',
  ez:'“Because ascorbate is a cofactor of three hydroxylases. Those enzymes make collagen’s hydroxyproline and hydroxylysine. They act after translation. They work in the cisternae of the E R. Three other things are needed there. Oxygen. Two oxoglutarate. And iron two plus. Generally the three enzymes are a prolyl four hydroxylase. There is also a prolyl three hydroxylase. And a lysyl five hydroxylase. Without ascorbate the collagen is not stable.”',
  ezcn:'因为<b>抗坏血酸是那三个羟化酶的辅因子</b>——<b>它们在翻译之后、在内质网腔里造出胶原的羟脯氨酸和羟赖氨酸，同时还需要氧气、2-氧代戊二酸和 Fe²⁺。</b><b>通用地说，那三个酶是脯氨酰 4-羟化酶、脯氨酰 3-羟化酶和赖氨酰 5-羟化酶。</b><b>没有抗坏血酸，羟化做不完，胶原就不稳定。</b>⚠ <b>「坏血病」这个病名书里没有，要提就说 that is the biochemistry behind scurvy。</b>', odd:1,
 mean:'问的是 <b>hydroxylation</b>，也是 ER 里的翻译后修饰。',
 say:'“Because ascorbate is a cofactor of the three hydroxylases that make collagen’s hydroxyproline and hydroxylysine after translation, in the cisternae of the ER. It works there alongside oxygen, 2-oxoglutarate and Fe²⁺. Generally those three enzymes are a prolyl 4-hydroxylase, a prolyl 3-hydroxylase and a lysyl 5-hydroxylase. Without <b>ascorbate</b> the hydroxylation does not finish and the collagen is not stable.”',
 tail:'⚠「坏血病」这个病名<b>书里没有</b>，辅因子清单有（p112）。要提病名就说 “that is the biochemistry behind scurvy”。'},

{q:'How does a protein know to go to the lysosome?',
  ez:'“By a sugar tag. One mannose on the N linked chain is phosphorylated. It is phosphorylated at position six. Mannose six phosphate is the routing signal. It sends a secretory glycoprotein to the lysosome. Generally a receptor in the Golgi reads that tag. It then sorts the protein into vesicles. Those vesicles are bound for the lysosome.”',
  ezcn:'<b>靠一个糖标签。</b><b>N-连接糖链上的一个甘露糖在 6 位被磷酸化，而甘露糖-6-磷酸就是把一个分泌型糖蛋白送去溶酶体的路由信号。</b><b>通用地说：高尔基体里的甘露糖-6-磷酸受体读这个标签，把蛋白分拣进开往溶酶体的囊泡。</b>', odd:1,
 mean:'问的是 <b>mannose-6-phosphate</b>。',
 say:'“By a sugar tag. One mannose on the N-linked chain is phosphorylated at position six, and mannose-6-phosphate is what routes a secretory glycoprotein to the lysosome. Generally, a mannose-6-phosphate receptor in the Golgi reads the tag and sorts the protein into vesicles bound for the lysosome.”'},

{q:'Why isn’t hydroxyproline one of the twenty amino acids?',
  ez:'“Because it is not encoded by a codon. It is made after translation. A proline residue is already in the chain. That residue is then hydroxylated. So it is natural. But it is not proteinogenic.”',
  ezcn:'因为<b>它不由任何密码子编码</b>：<b>它是在翻译之后才做出来的——把链上已经就位的一个脯氨酸残基羟化。</b><b>所以它是天然的，但不是蛋白质合成用的（not proteinogenic）。</b>', odd:1,
 mean:'<b>问的是这题的定义那一格</b>，只是从 #1 那道题绕过来的。',
 say:'“Because it is not encoded by a codon. It is made after translation, by hydroxylating a proline residue that is already in the chain. Natural, but not proteinogenic.”'},

{q:'What does protein disulfide isomerase do?',
  ez:'“It catalyses disulfide bond formation. It does that in the cisternae of the E R. And the name matters here. It is an isomerase. So it also reshuffles bonds. It reshuffles the ones that formed wrongly. Those formed between the wrong pair of cysteines.”',
  ezcn:'<b>它在内质网腔里催化二硫键的形成。</b><b>而名字里的 isomerase 是有意义的：作为异构酶，它还会把配错对的键拆开重排——也就是那些形成在错误的半胱氨酸之间的键。</b>',
 mean:'注意名字里的 isomerase。',
 say:'“It catalyses disulfide bond formation in the cisternae of the ER. And the name matters — as an <b>isomerase</b> it also reshuffles bonds that formed between the wrong pair of cysteines.”'},

{q:'Which of these modifications is reversible?',
  ez:'“Phosphorylation is the reversible one. It puts a phosphoester on a hydroxyl. That hydroxyl is on serine or threonine or tyrosine. A protein kinase puts it on. A phosphatase hydrolyses it off. The textbook calls it a control mechanism. It controls biological activity through a change of conformation. It also notes something useful. Some proteins are more active once the phosphate is off again. Glycosylation and disulfide formation are not reversed in normal operation.”',
  ezcn:'<b>可逆的是磷酸化</b>：<b>在丝氨酸、苏氨酸或酪氨酸的羟基上接一个磷酸酯，蛋白激酶装上去，磷酸酶把它水解下来。</b><b>书说它是通过构象改变来控制蛋白（尤其是酶）生物活性的一种机制，还指出有些蛋白是在磷酸被水解掉之后活性更高。</b><b>糖基化和二硫键形成在正常运转中不会被逆转——它们是结构性的，不是调节性的。</b>⚠ <b>「可逆 vs 不可逆」这个分法书里没有明说，是推出来的，说 generally 比较稳。</b>',
 mean:'分类问题。<b>可逆的是信号用的，不可逆的是结构用的。</b>',
 say:'“Phosphorylation is the reversible one. It puts a phosphoester on the hydroxyl of serine, threonine or tyrosine. A protein kinase puts it on and a phosphatase hydrolyses it off. The textbook calls it a mechanism for controlling the biological activity of proteins, especially enzymes, through a change of conformation. It also notes that some proteins are more active once the phosphate is hydrolysed off again. Glycosylation and disulfide formation are not reversed in normal operation. They are structural, not regulatory.”',
 tail:'⚠ 「可逆 vs 不可逆」这个分法**书里没有明说**，是从 p113–p114 推的。说成 "generally" 比较稳。'},

{q:'Why do you need vitamin K?',
  ez:'“Because gamma carboxylation depends on it. That reaction adds a second carboxyl. It adds it to the gamma carbon of a glutamate side chain. The product is gamma carboxyglutamate. The carboxylase sits on the inner face of the E R membrane. And it needs vitamin K. The textbook says where it was first found. It was in the plasma glycoproteins of blood clotting. The paired carboxyls there bind calcium.”',
  ezcn:'因为<b>γ-羧化依赖它</b>：<b>这个反应在谷氨酸侧链的 γ-碳上再加一个羧基，产物是 γ-羧基谷氨酸。</b><b>那个羧化酶坐在内质网膜的内侧面，需要维生素 K。</b><b>书说它最早是在血液凝固的血浆糖蛋白里发现的（通用地说就是凝血酶原和因子 VII、IX、X）；那里成对的羧基负责结合钙。</b><b>没有维生素 K，就没有羧化，也就没有凝血。</b>', odd:1,
 mean:'跟维 C 那条平行：问的是 <b>γ-羧化</b>。',
 say:'“Because γ-carboxylation depends on it. The reaction adds a second carboxyl to the γ-carbon of glutamate side chains, giving γ-carboxyglutamate. The carboxylase sits on the inner face of the ER membrane and needs vitamin K. The textbook says it was first found in the plasma glycoproteins of blood clotting, generally prothrombin and factors VII, IX and X. The paired carboxyls there bind calcium. No vitamin K, no carboxylation, no clotting.”'},
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'他会挖的三个方向', gn:'卷面上多出来的每个词，就是一个方向。', items:[
{r:'实测', q:'Why those two in particular? (critical)',
    ez:'“Because they are the two general ones. The textbook puts four modifications in the E R. They are glycosylation, disulfide formation, hydroxylation and gamma carboxylation. But hydroxylation belongs to collagen. Gamma carboxylation belongs to the clotting factors. Nearly every surface protein carries an N glycan. Nearly every one carries disulfides too. Neither can be made in the cytosol. The cytosol is reducing. And the transferase faces the E R lumen. So these two mark a protein that went through the secretory route.”',
    ezcn:'因为<b>它俩是内质网四种修饰里唯二通用的</b>。书列了四种：糖基化、二硫键、羟化、γ-羧化——<b>但羟化是胶原专属，γ-羧化是凝血因子专属</b>。几乎所有表面蛋白和分泌蛋白都带 <b>N-糖</b> 和<b>二硫键</b>。<b>这两样在胞质里都做不出来</b>：胞质是还原环境，而装糖核心的那个转移酶朝着内质网腔。<b>所以这两样就是「这个蛋白走过分泌途径」的标记。</b>',
 en:'“Because they are the two general ones among the ER modifications. The textbook puts four in the ER: glycosylation, disulfide formation, hydroxylation, γ-carboxylation. But hydroxylation is collagen’s and γ-carboxylation belongs to the clotting factors. Nearly every surface or secreted protein carries an N-glycan and disulfides. Neither can be made in the cytosol: it is reducing, and the transferase for the sugar core faces the ER lumen. So these two are the signature of a protein that has been through the secretory route. The textbook itself lists backbone processing as the modification tied to export — signal-sequence cleavage, proinsulin to insulin. That is the entry ticket, and these two are what the folded product carries.”',
 cn:'<b>2026-09-11 就是这一刀没接住。</b>只答 O-glycan / N-glycan 是回答了「哪两个」，没回答「为什么 critical」——<b>而题面本身在问后者</b>。'},
{r:'高', q:'What do they each do? (surface and secreted)',
    ez:'“They do different jobs. The glycosylation decides where the protein goes. It also reports how far the protein has folded. The trimming state is readable. The disulfide does something else. It fixes the chain in one conformation. The textbook says that conformation is not entirely favourable energetically. So one is routing and quality control. The other is mechanical stability. That matters for proteins that leave the cell. Outside there are no chaperones. The medium is also oxidising. So a disulfide survives out there. And the glycan is the first thing the outside world touches.”',
    ezcn:'<b>两者干的是不同的活。</b><b>糖基化决定蛋白去哪儿</b>，<b>同时还报告它折到了什么程度</b>（<b>修剪状态是可读的</b>）。<b>二硫键做的是另一件事：把链固定在某个构象上</b>——<b>书说那个构象在能量上并不完全有利</b>。<b>所以一个是路由和质检，一个是机械稳定性</b>，<b>而后者正是对「要离开细胞」的蛋白最要紧：外面没有分子伴侣，而且介质是氧化性的，二硫键在那里活得下来</b>。<b>另外，糖链是外界最先碰到的那一层。</b>',
 en:'“The glycosylation decides where the protein goes and, in the standard picture, reports how far it has folded — the trimming state is readable. The disulfide fixes the chain in a conformation that, as the textbook puts it, is not entirely favourable energetically. One is routing and quality control. The other is mechanical stability, and that matters precisely for proteins that leave the cell. Outside there are, generally speaking, no chaperones, and the medium is oxidising, so a disulfide survives there. And the glycan is the first thing the outside world touches.”',
 cn:'<b>「一个管去向，一个管稳定」是最短的分工说法。</b>说完这句，surface and secreted 那个限定词就答完了。'},
{r:'中', q:'Only two? What about the others? (two)',
 en:'“There are more — hydroxylation, methylation, phosphorylation, sulfation, gamma-carboxylation. But phosphorylation and methylation act mostly on cytosolic proteins, in signalling and regulation. If the question is about surface and secreted proteins in general, the two that nearly all of them carry are N-glycosylation and disulfides. Hydroxylation and γ-carboxylation are ER modifications too, but hydroxylation is collagen’s and γ-carboxylation belongs to the clotting factors.”',
 cn:'<b>把「还有哪些」和「为什么只挑两个」一起答掉。</b>这样既显示你知道全集，又说明你听懂了限定词。'}
]},

{g:'定义类', gn:'他默认你知道这些名词。', items:[
{r:'中', q:'What is glycosylation?',
 en:'“Glycosylation is the <b>covalent attachment of carbohydrate to a protein</b> by highly specific glycosyltransferases, with nucleotide sugars as donors. Two linkages: N-glycosidic, to the side-chain amide nitrogen of asparagine, or O-glycosidic, to the side-chain hydroxyl of serine or threonine. It takes place in the ER and the Golgi, and the textbook calls it one of the most important post-translational modifications.”',
 cn:'<b>核心词正面定义。</b>先说它是什么，再分 N/O。'},
{r:'中', q:'What is a signal peptide?',
 en:'“A signal peptide is the <b>N-terminal sequence</b> that sends a nascent chain into the ER, coded by the signal codons right after the initiation codon. In preproinsulin it is 23 residues. It has a hydrophobic middle and charged ends. The signal recognition particle, SRP, binds it as it emerges from the ribosome and docks on the SRP receptor in the ER membrane. The hydrophobic part enters the membrane and a pore opens, bounded by ribophorins, the textbook says. The rest of the chain is threaded into the lumen as it is made. Once its end appears in the lumen, membrane-bound signal peptidase cuts it off, so the mature protein no longer carries it. The textbook files this under covalent modification of the backbone — the one tied to export.”',
 cn:'题库 #9 就是这句（bw 指到这张卡）。<b>整条从书 p110–p111 来。</b>'},
{r:'高', q:'What is the endoplasmic reticulum?',
    ez:'“The endoplasmic reticulum is a membrane network. It is made of flattened sacs called cisternae. It is continuous with the nuclear envelope. The rough E R carries ribosomes. Those ribosomes make secretory and membrane proteins. Its lumen is where those proteins fold. It is where they get their N glycan. It is where they get their disulfides. That lumen is topologically already outside the cell. Its contents reach the extracellular space by vesicle fusion. They never mix with the cytosol. That is why it can hold an oxidising chemistry.”',
    ezcn:'<b>内质网是一张膜的网络</b>，<b>由扁平的囊（cisternae）组成，跟核膜连续</b>。<b>粗面内质网上挂着造分泌蛋白和膜蛋白的核糖体</b>；<b>它的腔就是这些蛋白折叠、装 N-糖、形成二硫键的地方</b>。<b>那个腔在拓扑上已经算「细胞外」了</b>：<b>里面的东西靠囊泡融合到达细胞外空间，从不跟胞质混合</b>——<b>这就是它能维持一套胞质维持不了的氧化化学的原因。</b>',
 en:'“The endoplasmic reticulum is the membrane network of flattened sacs, the cisternae, continuous with the nuclear envelope. The rough ER carries the ribosomes making secretory and membrane proteins. Its lumen is where they fold and get their N-glycan and their disulfides. That lumen is topologically already outside the cell. Its contents reach the extracellular space by vesicle fusion and never mix with the cytosol. That is why it can hold an oxidising chemistry the cytosol cannot.”',
 cn:'定义是通用细胞生物学；在里面发生什么是书 p109–p112。'},
{r:'中', q:'What is the Golgi apparatus?',
 en:'“The Golgi apparatus is the stack of flattened cisternae that receives the microvesicles budding from the ER. There the glycan is trimmed and finished, and proproteins are cut — proinsulin to insulin. The products are then packed into secretory granules that fuse with the plasma membrane.”',
 cn:'p111–p112。'},
{r:'高', q:'What is proinsulin?',
    ez:'“Insulin is made as preproinsulin. That is a twenty three residue signal sequence at the N terminus. Then the B chain. Then the connecting C peptide. Then the A chain. Signal peptidase removes the signal in the E R. What is left is proinsulin. In the Golgi a trypsin like enzyme cuts out the C peptide. A carboxypeptidase then removes the basic dipeptide. That dipeptide is what it was attached by. What is left is insulin. It is an A and a B chain held by three disulfides. Those disulfides formed while the C peptide still held them together.”',
    ezcn:'<b>胰岛素是以前胰岛素原的形式做出来的</b>：<b>N 端 23 个残基的信号序列 → B 链 → 连接用的 C 肽 → A 链</b>。<b>信号肽酶在内质网里去掉信号，剩下的就是胰岛素原</b>。<b>高尔基体里一个类胰蛋白酶把 C 肽切出来，羧肽酶再把它连接用的那个碱性二肽修掉</b>。<b>剩下的就是胰岛素：A 链和 B 链靠三个二硫键连着</b>——<b>而那三个二硫键是在 C 肽还把它们拢在一起的时候形成的。</b>',
 en:'“Insulin is made as preproinsulin: a 23-residue N-terminal signal sequence, then the B chain, the connecting C-peptide, then the A chain. Signal peptidase removes the signal in the ER, giving proinsulin. In the Golgi a trypsin-like enzyme cuts out the C-peptide, and a carboxypeptidase removes the basic dipeptide it was attached by. What is left is insulin — A and B chains held by three disulfides that formed while the C-peptide still held them together.”',
 cn:'p111，书的主干加工例子。'},
{r:'中', q:'What is O-glycosylation?',
 en:'“O-glycosylation attaches sugars one at a time, directly from nucleotide sugars, to the side-chain hydroxyl of serine or threonine. There is no lipid carrier, no preassembled core, no sequon. Generally it happens in the Golgi, after folding. The textbook’s own example is the sugar on the hydroxylysine of collagen.”',
 cn:'书 p112 只给了连接位置；其余通用。'},
{r:'高', q:'What is a reducing environment, and why does it stop disulfides forming?',
    ez:'“A reducing environment is one where the redox buffer is mostly reduced. In the cell that buffer is glutathione. The cytosol keeps it almost entirely as the reduced form. That form is G S H, the free thiol. The ratio is roughly a hundred to one. So a structural disulfide there is exchanged back. It becomes two thiols again. In the E R lumen the balance is shifted. It is shifted towards the oxidised form, G S S G. That is two glutathiones joined by a disulfide. The ratio there is around three to one. The textbook’s example is proinsulin. Its three disulfides form by handing their thiol hydrogens to oxidised glutathione.”',
    ezcn:'<b>还原环境 ＝ 氧化还原缓冲体系大部分处在还原态。</b><b>细胞里那个缓冲体系是谷胱甘肽</b>：<b>胞质里几乎全是还原型 GSH（游离巯基），大约 100:1</b>——<b>所以在那里形成的结构性二硫键会被交换回两个巯基</b>。<b>内质网腔里天平偏向氧化型 GSSG（两个谷胱甘肽靠二硫键连起来），大约 3:1</b>。<b>书的例子是胰岛素原：它那三个二硫键，正是把巯基上的氢交给氧化型谷胱甘肽形成的。</b>',
 en:'“A reducing environment is one where the redox buffer is mostly in its reduced form. In the cell that buffer is glutathione, γ-glutamyl-cysteinyl-glycine. The cytosol keeps it almost entirely as the reduced form, GSH, the free thiol — roughly a hundred to one, generally. So a structural disulfide there is exchanged back into two thiols. In the ER lumen the balance is shifted towards the oxidised form, GSSG, two glutathiones joined through a disulfide, around three to one. The textbook’s example is proinsulin. Its three A–B disulfides form by handing their thiol hydrogens to oxidised glutathione. The reducing cytosol is standard cell biology. The textbook gives only the ER half.”',
 cn:'<b>书给了一个现成的证据</b>：proinsulin 的 A、B 链之间的二硫键，是靠与<b>氧化型谷胱甘肽</b>反应形成的（p113）。同一个分子，既是例子又是机制。'},
{r:'高', q:'What is a sequon?',
    ez:'“A sequon is a short consensus sequence. A glycosyltransferase recognises it as its attachment site. The textbook calls it the signal for binding to asparagine. It is asparagine, then any residue except proline, then serine or threonine. Only an asparagine sitting in that pattern gets glycosylated. The word sequon is the standard name. It is not the textbook’s word.”',
    ezcn:'<b>糖基化识别序列（sequon）＝ 糖基转移酶用来认定连接位点的那一小段共识序列</b>。<b>书把它叫做「与天冬酰胺结合的信号」</b>：<b>Asn – 除脯氨酸外任一残基 – Ser 或 Thr</b>。<b>只有落在这个模式里的天冬酰胺才会被糖基化。</b>⚠ <b>sequon 是通行叫法，不是书上的词。</b>',
 en:'“A sequon is the short consensus sequence a glycosyltransferase recognises as its attachment site. The textbook calls it the signal for binding to asparagine: asparagine, any residue except proline, then serine or threonine. Only an asparagine sitting in that pattern gets glycosylated. The word ‘sequon’ is the standard name, not the textbook’s.”',
 cn:'<b>被继续追「为什么不能是 proline」</b>：proline 的氮在环里，主链在那个位置的几何被锁死，转移酶读不到它要的构象：“Why not proline? Generally speaking, proline’s nitrogen is part of its pyrrolidine ring, so the backbone at that position cannot take the conformation oligosaccharyltransferase needs to read the sequon. The textbook gives the rule, not the reason.”<br>⚠ 这个理由<b>书里没有</b>，是通用解释，别说成书上的。'},
{r:'中', q:'What is dolichol?',
 en:'“Dolichol is a polyisoprenoid alcohol — nine to twenty-two isoprene units, the textbook says, ending in a hydroxyl. As dolichol phosphate it is the membrane-bound carrier on which the sugar core is built. The core is built from nucleotide sugars, monosaccharides activated on a nucleoside diphosphate: UDP-glucose, UDP-GlcNAc, GDP-mannose. The core starts with UDP-GlcNAc, before the whole block is moved onto asparagine.”',
 cn:'⚠ n = 9–22 这个数<b>要回原图核</b>（OCR 数字容易吃掉）。<span class="pg">p112</span>'}
]},

{g:'为什么类', gn:'给了结论没给理由的地方。', items:[
{r:'高', q:'Why build the core on a lipid first instead of adding sugars one by one?',
    ez:'“So that every N site starts from the same structure. That makes the trimming state readable. How many glucoses are still on tells the cell something. It tells how far the protein has folded. The textbook does not go into that. Adding sugars one at a time is the alternative. O linked glycosylation does it that way. That route gives no such common reference.”',
    ezcn:'<b>为了让每个 N-位点都从同一个结构起步</b>——<b>这样「修剪到哪一步」就是可读的</b>：<b>还剩几个葡萄糖，告诉细胞这个蛋白折到什么程度了</b>。⚠ <b>书没有展开这一层。</b><b>另一条路是一个一个加糖（O-连接糖基化就是这样），那样就没有一个共同的参照点。</b>',
 en:'“So that every N-site starts from the same structure. In the standard picture that makes the trimming state readable — how many glucoses are still on tells the cell how far the protein has folded. The textbook does not go into that. Adding sugars one at a time, as O-linked glycosylation does, gives you no such common reference.”',
 cn:'<b>这一条同时解释了 N- 和 O- 的差别</b>：O- 是在 Golgi 里一个一个加的，没有共同起点，所以也不承担质控。<br>⚠ 「质控读取修剪状态」这层<b>书里没明说</b>，是从「两阶段 ＋ 修剪」推的。说成 generally。'},
{r:'高', q:'Why does the cell bother making disulfides at all, if the fold is already determined by the sequence?',
    ez:'“Because for many proteins the active conformation is not the most favourable one. The textbook says so directly. It is not the energetically most favourable conformation. A disulfide is one way to hold a chain there. It holds it in a conformation it would not otherwise keep. That matters most outside the cell. There are no chaperones out there to help.”',
    ezcn:'因为<b>对相当一批蛋白来说，生物活性构象并不是能量上最有利的那个</b>——<b>书直接这么说</b>。<b>二硫键就是把链摁在那个「它本来待不住的构象」上的办法之一</b>。<b>而这件事在细胞外面最要紧：那里没有分子伴侣来帮忙。</b>',
 en:'“Because for many proteins the biologically active conformation is <b>not</b> the energetically most favourable one — the textbook says so directly. A disulfide is one of the ways to hold a chain in a conformation it would not otherwise stay in. That matters most outside the cell. Generally speaking, there are no chaperones out there to help.”',
 cn:'<b>这条把 p113 和 p109 咬在一起</b>，而且顺带修正了「序列决定结构」的天真版本。<b>能把两章接起来，是这场考试里最划算的动作。</b><span class="pg">p109 p113</span>'}
]},

{g:'桥回主场', gn:'他顺着走就到你答得住的地方。', items:[
{r:'中', q:'What is the periplasm?',
 en:'“The periplasm is the space between the inner and outer membranes of a Gram-negative bacterium. Unlike the cytoplasm it is oxidising and has its own disulfide-forming enzymes, the Dsb proteins, so disulfides can form there.”',
 cn:'通用；这是「E. coli 里怎么做二硫键」的答案。'},
{r:'高', q:'So how would you express a protein like that?',
    ez:'“Not easily in E. coli. Its cytoplasm is reducing. So there are no disulfides there. You would have to go to the periplasm. Or use an engineered strain. And E. coli has no N glycosylation at all. So for a surface protein needing both, a eukaryotic host is the point. That is why I work with yeast display. The protein is anchored on the yeast surface. So it has gone through the secretory pathway. And I can read binding cell by cell.”',
    ezcn:'<b>在大肠杆菌里不好做。</b><b>它的胞质是还原性的，所以没有二硫键</b>——<b>要么把蛋白送去周质，要么用工程菌株</b>；<b>而且大肠杆菌根本没有 N-糖基化</b>。<b>所以一个两样都需要的表面蛋白，真核宿主才是答案。</b><b>这正是我用酵母展示的原因：蛋白锚在酵母表面，说明它走过了分泌途径，而且我可以一个细胞一个细胞地读结合。</b>',
 en:'“Not easily in E. coli — its cytoplasm is reducing, so no disulfides unless you go to the periplasm or an engineered strain, and it has no N-glycosylation. For a surface protein that needs both, a eukaryotic host is the point. That is why I work with <b>yeast display</b>: the protein is anchored on the yeast surface, so it has gone through the secretory pathway, and I can read binding cell by cell.”',
 cn:'<b>这是全卡最强的一个口子。</b>它从书里的一句化学事实（胞质是还原性的）一步走到你的日常工作，而且中间没有跳跃。'},
{r:'中', q:'You said folding quality control — how does that work?',
 en:'“In the standard picture the check is done by two ER lectins, calnexin and calreticulin. They bind a glycoprotein only while its N-glycan still carries a single glucose. Once that last glucose is trimmed the protein is released. If it is still misfolded, a glucosyltransferase called UGGT puts one glucose back, so it goes round again. On top of that sit the chaperones proper, which recognise and stabilise partially folded intermediates and help repair chains that have folded wrongly. The textbook names GroEL and GroES, and hsp70. It also says that a number of serious neurological diseases are caused by protein misfolding.”',
 cn:'完整内容在<b>卡 01 的追问</b>里。<span class="pg">p109</span>'}
]}
]
});
