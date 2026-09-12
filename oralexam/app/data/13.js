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
  big:'把新生肽链变成<b>有活性的蛋白</b>的那一整套过程，核酸不再参与——<b>没有密码子编码它</b>；狭义指其中<b>共价</b>的那些',
  en:'“Post-translational modification is the set of processes that turn the nascent polypeptide into the <b>biologically active protein</b> once the nucleic acids are no longer involved — so nothing in it is <b>encoded by a codon</b>. The textbook counts three kinds: the non-covalent folding and association of the chain, covalent changes to the backbone such as signal-peptide cleavage, and covalent changes to side chains. In the usual narrower sense the term means the covalent ones — and some of those, N-glycosylation for instance, actually begin while the chain is still on the ribosome.”',
  note:'「没有密码子」这条边界一句话挡掉两道题：这题的定义，和 #1 里「hydroxyproline 为什么不算 proteinogenic」。<b>同一个边界，两道题共用。</b>'},
 {n:'02', t:'挑两个',
  big:'<b>N-glycosylation</b> 和 <b>disulfide bond formation</b>',
  en:'“For proteins that go to the surface or out of the cell, two of them matter most: <b>N-glycosylation</b> and <b>disulfide bond formation</b>.”',
  note:'题面里的 <b>two</b> 是导师自己写的——他要的是**挑两个**，不是列一堆。列一堆就答偏了。'},

 {g:'为什么偏偏是这两个', gn:'这一格是整题的胜负手。只说名字＝不合格，说清这个＝答对一半。'},
 {n:'03', t:'共同点',
  big:'表面蛋白和分泌蛋白的共同点是<b>都走分泌通路</b>，也就是<b>都经过 ER 腔</b>',
  en:'“What surface and secreted proteins have in common is that they all take the same route, the <b>secretory pathway</b>: an N-terminal signal sequence brings the ribosome to the ER — via the signal recognition particle, SRP, which docks on its receptor in the ER membrane — the chain is threaded into the ER lumen as it is made and the signal is cut off by signal peptidase, and from there vesicles carry it through the Golgi to the plasma membrane or out of the cell. So they all pass through the <b>lumen of the ER</b> — which is already ‘outside’ in the topological sense: its contents reach the extracellular space by vesicle fusion and never mix with the cytosol, which is why it can hold an oxidising chemistry the cytosol cannot.”',
  note:'先说共同点，再说修饰。顺序反过来就变成了列清单。'},
 {n:'04', t:'关键一句',
  big:'ER 里发生的修饰书列了四种；<b>这两个是通用的</b>，而且都<b>不能在胞质里做</b>',
  en:'“Of the modifications the textbook lists, four happen in the ER — glycosylation, disulfide formation, hydroxylation and γ-carboxylation. Hydroxylation is specific to collagen and γ-carboxylation to the clotting factors, so the two <b>general</b> ones, the ones nearly every surface or secreted protein carries, are N-glycosylation and disulfide bonds. Neither can be made in the cytosol: it is a <b>reducing</b> environment — its glutathione is almost entirely the free thiol, so a structural sulfur–sulfur bond there is exchanged back into two thiols — and <b>oligosaccharyltransferase</b> — the textbook just says ‘transferases’ — which moves the sugar core onto asparagine, has its active site in the ER lumen.”',
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
  en:'“The oligosaccharide core is not built on the protein at all — it is assembled on a lipid carrier, <b>dolichol phosphate</b>, from nucleotide sugars, starting with UDP-N-acetylglucosamine, until it is a fourteen-sugar block — three glucose, nine mannose, two N-acetylglucosamine, Glc₃Man₉GlcNAc₂ — held on a pyrophosphate.”',
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
  en:'“After the transfer the core is trimmed and rebuilt — <b>glucosidases</b> take the three glucoses off, <b>mannosidases</b> take some mannoses off, and further transferases in the Golgi add N-acetylglucosamine, galactose and <b>sialic acid at the end</b>. The textbook puts all the trimming in the Golgi; in the standard picture the glucoses come off already in the ER, and that is what the calnexin–calreticulin cycle reads as a folding check.”',
  note:'<b>「在 Golgi 里加糖」是错的说法</b>——核心在 ER 接，Golgi 是修剪加尾。<span class="pg">p112</span>'},
 {n:'11', t:'一个去向标签',
  big:'甘露糖 <b>6 位磷酸化</b> → <b>mannose-6-phosphate</b> → 送去<b>溶酶体</b>',
  en:'“One mannose can be phosphorylated at position six. <b>Mannose-6-phosphate</b> is the tag that sends a secretory glycoprotein to the lysosome.”',
  note:'这是书里唯一明确给出的**糖决定去向**的例子。被问「加糖有什么用」时给这个，比泛泛说「稳定性」稳。<span class="pg">p112</span>'},

 {g:'二硫键', gn:'比糖基化简单，但书对它有一句定性特别好用。'},
 {n:'12', t:'怎么形成',
  big:'两个 cysteine 侧链之间的<b>共价 S–S 键</b>（空间上相邻，序列上可以很远），氧化生成，合起来叫 cystine；酶是 <b>protein disulfide isomerase</b>，在 <b>ER 池</b>里',
  en:'“A disulfide bond is a covalent sulfur–sulfur bond between the side chains of two cysteine residues that lie next to each other <b>in the fold</b> — they can be far apart in the sequence — so the two become one cystine and cross-link the chain. It forms by oxidation: the two thiol hydrogens are removed. Which pairs form first is not specific, the textbook says, so <b>protein disulfide isomerase</b>, in the cisternae of the ER, reshuffles them until the pairing that stabilises the native conformation is reached.”',
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
  en:'“Both of these happen while the chain is still folding, not after. The textbook says disulfide formation contributes to reaching the active fold and that PDI facilitates the pairs that stabilise the native conformation; in the standard picture the N-glycan’s trimming state is also read as a folding check. That is the part I find interesting, because the textbook says elsewhere that for many proteins the biologically active conformation is <b>not</b> the lowest-energy one.”',
  note:'口子留在「折叠质控」上，他追下去就到 chaperone，那边<b>卡 01 有</b>。'}
],
end:'<b>会说这十五点，这题就不会再像上次那样只答出两个词。</b>真正的胜负手是第 3–5 点（为什么偏偏是这两个），其余都是被追问时才给的。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：把新生链变成有活性蛋白的那套过程，核酸不再参与，<b>没有密码子编码</b>；狭义指共价的那些',
 '“The processes that turn the nascent chain into the active protein once the nucleic acids are out — nothing in it is encoded by a codon; in the narrow sense, the covalent ones.”',
 '这条边界跟 #1 那题共用——hydroxyproline 是天然的但不是 proteinogenic，就是因为它在翻译后才加上去。'],
['<b>两个是</b>：N-glycosylation ＋ disulfide bond formation',
 '“N-glycosylation and disulfide bond formation.”',
 '题面里的 <b>two</b> 是导师写的。挑两个，不要列一堆。'],
['<b>共同点</b>：表面蛋白和分泌蛋白都走分泌通路，都过 <b>ER 腔</b>',
 '“They all take the secretory route — signal sequence, into the ER lumen as they are made, then vesicles through the Golgi — so they all pass through the lumen of the ER, which is topologically already outside.”',
 '先说共同点再说修饰，否则就变成清单。'],
['<b>关键</b>：ER 里的修饰有四种，这两个是<b>通用的</b>；都<b>做不了在胞质里</b>——胞质是<b>还原性</b>的',
 '“Four ER modifications in the textbook; these two are the general ones. Neither can be made in the cytosol: its glutathione is almost all free thiol, so a structural S–S is exchanged back; and the transferase that puts the sugar core on faces the ER lumen.”',
 '<b>全卡最值钱的半句。</b>它同时回答了 critical、地点、以及为什么用酵母不用大肠杆菌。'],
['<b>接在哪</b>：N- 在 <b>Asn 酰胺氮</b>，O- 在 <b>Ser/Thr 羟基</b>',
 '“N-glycosidic through the side-chain amide nitrogen of asparagine — not the backbone amide; O-glycosidic through the side-chain hydroxyl of serine or threonine.”',
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
 '“A covalent S–S bond between two cysteine side chains, neighbours in the fold, not necessarily in sequence; formed by oxidation, reshuffled by protein disulfide isomerase in the ER cisternae.”',
 'isomerase 这个名字说明它也重排错配的二硫键。'],
['<b>留口子</b>：两个都发生在还没折好时；书说二硫键帮助达到活性折叠，糖链的质控是通用说法',
 '“Both happen while the chain is still folding; the textbook says disulfides help reach the active fold, and in the standard picture the glycan’s trimming state is a folding check.”',
 '他追下去就到 chaperone，卡 01 有。']
],

segs:[
 {tag:'段 1 · 定义', h:'他只问了半句，你要把结构自己接上',
  p:['“Post-translational modification means the processes that turn the nascent polypeptide into the biologically active protein once the nucleic acids are no longer involved — nothing in it is encoded by a codon. The textbook counts three kinds: non-covalent folding and association, covalent changes to the backbone, covalent changes to side chains; in the narrow sense the term means the covalent ones.',
     'For proteins that go to the surface or out of the cell, two of them matter most: <b>N-glycosylation</b> and <b>disulfide bond formation</b>.”'],
  note:'<b>他嘴里的题面只到「什么是翻译后修饰」。</b>卷面上多出来的 two / critical / surface and secreted 是他要挖的方向——所以你要主动把「挑两个」这一步做掉，不要等他问。'},
 {tag:'段 2 · general', h:'为什么偏偏是这两个',
  p:['“What surface and secreted proteins have in common is that they all take the <b>secretory pathway</b> — a signal sequence brings the ribosome to the ER, the chain enters the lumen as it is made, then vesicles through the Golgi to the surface or the outside — so they all pass through the lumen of the endoplasmic reticulum, which is topologically already outside the cell: its contents never mix with the cytosol.',
     'Of the four modifications the textbook places in the ER — glycosylation, disulfide formation, hydroxylation, γ-carboxylation — these two are the general ones, the ones nearly every surface or secreted protein carries. Neither can be made in the cytosol: it is a <b>reducing</b> environment — its glutathione is almost entirely the free thiol, so a structural sulfur–sulfur bond is exchanged back into two thiols — and the transferase that puts the sugar core onto asparagine faces the ER lumen.',
     'So between them, these two modifications are the signature of a protein that has been through the ER.”'],
  note:'<b>这一段答的是题面里的 critical。</b>只说名字不说这个，就是上次那种不合格。'},
 {tag:'段 3 · 稍展开', h:'挑糖基化，因为他追的是这个',
  p:['“N-glycosylation runs in two phases. First the oligosaccharide core is not built on the protein at all — it is assembled on a lipid carrier, dolichol phosphate, until it reaches three glucose, nine mannose, two N-acetylglucosamine.',
     'Then a transferase moves that whole core onto the protein. The signal it reads is a tripeptide: asparagine, any residue except proline, then serine or threonine. This happens in the ER membrane while the protein is still being synthesised.',
     'The core is then trimmed and rebuilt — glucosidases take the three glucoses off, mannosidases take some mannoses off, and further transferases in the Golgi add N-acetylglucosamine, galactose and sialic acid at the end. The textbook puts the trimming in the Golgi; in the standard picture the glucoses come off already in the ER, as a folding check.”'],
  note:'〔可裁〕再一层：“And one mannose can be phosphorylated at position six — <b>mannose-6-phosphate</b> is the tag that sends a secretory glycoprotein to the lysosome.”'},
 {tag:'段 4 · 留口子', h:'把话引到折叠质控',
  p:['“Both of these happen while the chain is still folding, not after. The textbook says disulfide formation contributes to reaching the active fold; in the standard picture the glycan’s trimming state is read as a folding check. That is the part I find interesting, because the textbook says elsewhere that for many proteins the biologically active conformation is not the lowest-energy one — which is also how it describes what a disulfide bridge does: it fixes the chain in a conformation that is not entirely favourable energetically.”'],
  note:'<b>这一段把第四章和第二章接起来了</b>（p113 的定性 ＋ p109 的论断）。能把两章接起来，是这场考试里最划算的动作。'}
],

why:{
 rungs:[
  ['为什么要在 ER 里做，不在胞质做？','因为<b>胞质是还原性的</b>，二硫键在那儿会被还原回去；而糖基转移酶都在 ER 腔和 Golgi 里。'],
  ['为什么细胞要先在 dolichol 上造一个核心，再整块搬过去？','因为这样每个 N 位点<b>起点都一样</b>，质量控制才有统一参照。修剪到什么程度就成了一个可读的状态标签——葡萄糖切没切完，等于「折好了没有」。'],
  ['那为什么要给蛋白加糖？','书说糖基化是最重要的翻译后修饰之一，<b>但没有给功能清单</b>。能从书里说出来的只有两条：它决定去向（M6P → 溶酶体），并且发生在折叠过程中。“The textbook calls it one of the most important modifications but gives no list of functions. Two things it does say: the sugar decides where the protein goes — mannose-6-phosphate sends it to the lysosome — and it is put on while the chain is still folding, which in the standard picture makes the trimming state a folding check.”']
 ],
 stop:{lbl:'停 · 落在进化与测量限制之间',
  say:'“Beyond that, why glycosylation specifically rather than some other tag is a historical question — the pathway is what survived. What we can measure is where the sugar sends the protein.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is glycosylation?',
 mean:'<b>核心词正面定义。</b>先说它是什么，再分 N/O。',
 say:'“Glycosylation is the <b>covalent attachment of carbohydrate to a protein</b> by highly specific glycosyltransferases, with nucleotide sugars as donors. Two linkages: N-glycosidic, to the side-chain amide nitrogen of asparagine, or O-glycosidic, to the side-chain hydroxyl of serine or threonine. It takes place in the ER and the Golgi, and the textbook calls it one of the most important post-translational modifications.”'},

{q:'What is a signal peptide?',
 mean:'题库 #9 就是这句（bw 指到这张卡）。<b>整条从书 p110–p111 来。</b>',
 say:'“A signal peptide is the <b>N-terminal sequence</b> — coded by the signal codons right after the initiation codon — that sends a nascent chain into the ER; preproinsulin’s is 23 residues. It has a hydrophobic middle and charged ends. The signal recognition particle, SRP, binds it as it emerges from the ribosome and docks on the SRP receptor in the ER membrane; the hydrophobic part enters the membrane, a pore opens — bounded by ribophorins, the textbook says — and the rest of the chain is threaded into the lumen as it is made. Once its end appears in the lumen, membrane-bound signal peptidase cuts it off, so the mature protein no longer carries it. The textbook files this under covalent modification of the backbone — the one tied to export.”'},

{q:'Why do you need vitamin K?', odd:1,
 mean:'跟维 C 那条平行：问的是 <b>γ-羧化</b>。',
 say:'“Because γ-carboxylation depends on it. γ-Carboxylation adds a second carboxyl to the γ-carbon of glutamate side chains, giving γ-carboxyglutamate; the carboxylase sits on the inner face of the ER membrane and needs vitamin K. The textbook says it was first found in the plasma glycoproteins of blood clotting — generally prothrombin and factors VII, IX and X — where the paired carboxyls bind calcium. No vitamin K, no carboxylation, no clotting.”'},

{q:'What is post-translational modification?',
 mean:'<b>这就是他真正会说出口的那句。</b>卷面那句完整题面他不会念。所以这一句的答案必须<b>自带结构</b>：定义 → 挑两个 → 为什么是这两个 → 分别对应什么。',
 say:'“Post-translational modification means the processes that turn the nascent polypeptide into the biologically active protein once the nucleic acids are no longer involved — nothing in it is encoded by a codon; in the narrow sense, the covalent changes to the backbone and the side chains. For proteins that go to the surface or out of the cell, two matter most: N-glycosylation and disulfide bond formation. What they have in common is that neither can be made in the cytosol — it is reducing, so a structural disulfide does not survive there, and the transferase that puts the sugar core on faces the ER lumen.”'},

{q:'Name some post-translational modifications.',
 mean:'他要清单，不是要两个。<b>这时候才列</b>——而且列完要说哪些是分泌蛋白特有的。',
 say:'“The textbook lists seven: glycosylation, hydroxylation, γ-carboxylation, disulfide bond formation, methylation, phosphorylation and sulfation. Four of them it places in the ER — <b>glycosylation, hydroxylation, γ-carboxylation and disulfide formation</b> — and those mark a protein that has gone through the secretory route. <b>Phosphorylation and methylation are, in general, the cytosolic regulatory ones</b>, on signalling and regulatory proteins.”',
 tail:'甲基化和硫酸化被追就说：“Methylation puts methyl groups on charged side chains — O-methyl esters on the carboxyls of glutamate and aspartate, mono- to tri-N-methyl on the amines of lysine, arginine and histidine; the textbook’s examples are the bacterial chemotaxis proteins, and it notes that faulty methylation of sperm proteins is a fairly common cause of infertility. Sulfation esterifies a side-chain hydroxyl with sulfate — the textbook’s example is the tyrosines of gastrin.”（p113–p114）γ-羧化见「Why do you need vitamin K?」。'},

{q:'How is N-glycosylation formed?',
 mean:'<b>同学转述的实测问题，而且明说「要机制不要现象」。</b>两阶段，别说成一步。',
 say:'“In two phases. The core is first assembled on a lipid carrier, dolichol phosphate, until it is three glucose, nine mannose, two N-acetylglucosamine. Then oligosaccharyltransferase moves the whole core onto an asparagine, reading the sequon asparagine–any residue except proline–serine or threonine. That happens in the ER membrane while the protein is still being made. Trimming and the terminal sugars come later, in the Golgi.”'},

{q:'Why can’t E. coli make your protein properly?', odd:1,
 mean:'<b>这就是同一个答案，换成了实验室的问法。</b>而且它直通你的工作。',
 say:'“Because the E. coli cytoplasm is reducing, so disulfides do not form there — you would have to send the protein to the periplasm or use an engineered oxidising strain — and E. coli has no N-glycosylation — no dolichol-linked core and no oligosaccharyltransferase. A surface protein that needs both is far easier to fold correctly in a eukaryotic host, which is why I express it in yeast.”',
 tail:'<b>这是一个想接的口子</b>：他顺着走就到 yeast display，那是你的主场。'},

{q:'Why do you need vitamin C?', odd:1,
 mean:'问的是 <b>hydroxylation</b>，也是 ER 里的翻译后修饰。',
 say:'“Because ascorbate is a cofactor of the three hydroxylases that make collagen’s hydroxyproline and hydroxylysine after translation, in the cisternae of the ER — a prolyl 4-hydroxylase, a prolyl 3-hydroxylase and a lysyl 5-hydroxylase, generally — alongside oxygen, 2-oxoglutarate and Fe²⁺. Without <b>ascorbate</b> the hydroxylation does not finish and the collagen is not stable.”',
 tail:'⚠「坏血病」这个病名<b>书里没有</b>，辅因子清单有（p112）。要提病名就说 “that is the biochemistry behind scurvy”。'},

{q:'How does a protein know to go to the lysosome?', odd:1,
 mean:'问的是 <b>mannose-6-phosphate</b>。',
 say:'“By a sugar tag. One mannose on the N-linked chain is phosphorylated at position six, and mannose-6-phosphate is what routes a secretory glycoprotein to the lysosome — generally, a mannose-6-phosphate receptor in the Golgi reads the tag and sorts the protein into vesicles bound for the lysosome.”'},

{q:'Why isn’t hydroxyproline one of the twenty amino acids?', odd:1,
 mean:'<b>问的是这题的定义那一格</b>，只是从 #1 那道题绕过来的。',
 say:'“Because it is not encoded by a codon. It is made after translation, by hydroxylating a proline residue that is already in the chain. Natural, but not proteinogenic.”'},

{q:'What does protein disulfide isomerase do?',
 mean:'注意名字里的 isomerase。',
 say:'“It catalyses disulfide bond formation in the cisternae of the ER. And the name matters — as an <b>isomerase</b> it also reshuffles bonds that formed between the wrong pair of cysteines.”'},

{q:'Which of these modifications is reversible?',
 mean:'分类问题。<b>可逆的是信号用的，不可逆的是结构用的。</b>',
 say:'“Phosphorylation — a phosphoester on the hydroxyl of serine, threonine or tyrosine, put on by a protein kinase and hydrolysed off by a phosphatase — is the reversible one: the textbook calls it a mechanism for controlling the biological activity of proteins, especially enzymes, through a change of conformation, and notes that some proteins are more active once the phosphate is hydrolysed off again. Glycosylation and disulfide formation are not reversed in normal operation; they are structural, not regulatory.”',
 tail:'⚠ 「可逆 vs 不可逆」这个分法**书里没有明说**，是从 p113–p114 推的。说成 "generally" 比较稳。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'他会挖的三个方向', gn:'卷面上多出来的每个词，就是一个方向。', items:[
{r:'实测', q:'Why those two in particular? (critical)',
 en:'“Because they are the two general ones among the ER modifications. The textbook puts four in the ER — glycosylation, disulfide formation, hydroxylation, γ-carboxylation — but hydroxylation is collagen’s and γ-carboxylation belongs to the clotting factors; nearly every surface or secreted protein carries an N-glycan and disulfides. Neither can be made in the cytosol: it is reducing, and the transferase for the sugar core faces the ER lumen. So these two are the signature of a protein that has been through the secretory route. The textbook itself lists backbone processing — signal-sequence cleavage, proinsulin to insulin — as the modification tied to export; that is the entry ticket, these two are what the folded product carries.”',
 cn:'<b>2026-09-11 就是这一刀没接住。</b>只答 O-glycan / N-glycan 是回答了「哪两个」，没回答「为什么 critical」——<b>而题面本身在问后者</b>。'},
{r:'高', q:'What do they each do? (surface and secreted)',
 en:'“The glycosylation decides where the protein goes and, in the standard picture, reports how far it has folded — the trimming state is readable. The disulfide fixes the chain in a conformation that, as the textbook puts it, is not entirely favourable energetically. One is routing and quality control; the other is mechanical stability — and that matters precisely for proteins that leave the cell: outside there are, generally speaking, no chaperones and the medium is oxidising, so a disulfide survives there, and the glycan is the first thing the outside world touches.”',
 cn:'<b>「一个管去向，一个管稳定」是最短的分工说法。</b>说完这句，surface and secreted 那个限定词就答完了。'},
{r:'中', q:'Only two? What about the others? (two)',
 en:'“There are more — hydroxylation, methylation, phosphorylation, sulfation, gamma-carboxylation. But phosphorylation and methylation act mostly on cytosolic proteins, in signalling and regulation. If the question is about surface and secreted proteins in general, the two that nearly all of them carry are N-glycosylation and disulfides; hydroxylation and γ-carboxylation are ER modifications too, but hydroxylation is collagen’s and γ-carboxylation belongs to the clotting factors.”',
 cn:'<b>把「还有哪些」和「为什么只挑两个」一起答掉。</b>这样既显示你知道全集，又说明你听懂了限定词。'}
]},

{g:'定义类', gn:'他默认你知道这些名词。', items:[
{r:'高', q:'What is the endoplasmic reticulum?',
 en:'“The endoplasmic reticulum is the membrane network of flattened sacs — cisternae — continuous with the nuclear envelope. The rough ER carries the ribosomes making secretory and membrane proteins; its lumen is where they fold, get their N-glycan and their disulfides, and it is topologically already outside the cell — its contents reach the extracellular space by vesicle fusion and never mix with the cytosol, which is why it can hold an oxidising chemistry the cytosol cannot.”',
 cn:'定义是通用细胞生物学；在里面发生什么是书 p109–p112。'},
{r:'中', q:'What is the Golgi apparatus?',
 en:'“The Golgi apparatus is the stack of flattened cisternae that receives the microvesicles budding from the ER; there the glycan is trimmed and finished, proproteins are cut — proinsulin to insulin — and the products are packed into secretory granules that fuse with the plasma membrane.”',
 cn:'p111–p112。'},
{r:'高', q:'What is proinsulin?',
 en:'“Insulin is made as preproinsulin: a 23-residue N-terminal signal sequence, then the B chain, the connecting C-peptide, then the A chain. Signal peptidase removes the signal in the ER, giving proinsulin; in the Golgi a trypsin-like enzyme cuts out the C-peptide and a carboxypeptidase removes the basic dipeptide it was attached by, leaving insulin — A and B chains held by three disulfides that formed while the C-peptide still held them together.”',
 cn:'p111，书的主干加工例子。'},
{r:'中', q:'What is O-glycosylation?',
 en:'“O-glycosylation attaches sugars one at a time, directly from nucleotide sugars, to the side-chain hydroxyl of serine or threonine — no lipid carrier, no preassembled core, no sequon; generally it happens in the Golgi, after folding. The textbook’s own example is the sugar on the hydroxylysine of collagen.”',
 cn:'书 p112 只给了连接位置；其余通用。'},
{r:'高', q:'What is a reducing environment, and why does it stop disulfides forming?',
 en:'“A reducing environment is one where the redox buffer is mostly in its reduced form. In the cell that buffer is glutathione — γ-glutamyl-cysteinyl-glycine — and the cytosol keeps it almost entirely as the reduced form, GSH, the free thiol — roughly a hundred to one, generally — so a structural disulfide there is exchanged back into two thiols. In the ER lumen the balance is shifted towards the oxidised form, GSSG, two glutathiones joined through a disulfide, around three to one; the textbook’s example is proinsulin, whose three A–B disulfides form by handing their thiol hydrogens to oxidised glutathione. The reducing cytosol is standard cell biology; the textbook gives only the ER half.”',
 cn:'<b>书给了一个现成的证据</b>：proinsulin 的 A、B 链之间的二硫键，是靠与<b>氧化型谷胱甘肽</b>反应形成的（p113）。同一个分子，既是例子又是机制。'},
{r:'高', q:'What is a sequon?',
 en:'“A sequon is the short consensus sequence a glycosyltransferase recognises as its attachment site — the textbook calls it the signal for binding to asparagine: asparagine, any residue except proline, then serine or threonine — and only an asparagine sitting in that pattern gets glycosylated. ‘Sequon’ is the standard name, not the textbook’s.”',
 cn:'<b>被继续追「为什么不能是 proline」</b>：proline 的氮在环里，主链在那个位置的几何被锁死，转移酶读不到它要的构象：“Why not proline? Generally speaking, proline’s nitrogen is part of its pyrrolidine ring, so the backbone at that position cannot take the conformation oligosaccharyltransferase needs to read the sequon — the textbook gives the rule, not the reason.”<br>⚠ 这个理由<b>书里没有</b>，是通用解释，别说成书上的。'},
{r:'中', q:'What is dolichol?',
 en:'“Dolichol is a polyisoprenoid alcohol — nine to twenty-two isoprene units, the textbook says, ending in a hydroxyl. As dolichol phosphate it is the membrane-bound carrier on which the sugar core is built from nucleotide sugars — monosaccharides activated on a nucleoside diphosphate: UDP-glucose, UDP-GlcNAc, GDP-mannose — starting with UDP-GlcNAc, before the whole block is moved onto asparagine.”',
 cn:'⚠ n = 9–22 这个数<b>要回原图核</b>（OCR 数字容易吃掉）。<span class="pg">p112</span>'}
]},

{g:'为什么类', gn:'给了结论没给理由的地方。', items:[
{r:'高', q:'Why build the core on a lipid first instead of adding sugars one by one?',
 en:'“So that every N-site starts from the same structure. In the standard picture that makes the trimming state readable — how many glucoses are still on tells the cell how far the protein has folded; the textbook does not go into that. Adding sugars one at a time, as O-linked glycosylation does, gives you no such common reference.”',
 cn:'<b>这一条同时解释了 N- 和 O- 的差别</b>：O- 是在 Golgi 里一个一个加的，没有共同起点，所以也不承担质控。<br>⚠ 「质控读取修剪状态」这层<b>书里没明说</b>，是从「两阶段 ＋ 修剪」推的。说成 generally。'},
{r:'高', q:'Why does the cell bother making disulfides at all, if the fold is already determined by the sequence?',
 en:'“Because for many proteins the biologically active conformation is <b>not</b> the energetically most favourable one — the textbook says so directly. A disulfide is one of the ways to hold a chain in a conformation it would not otherwise stay in. That matters most outside the cell, where — generally speaking — there are no chaperones to help.”',
 cn:'<b>这条把 p113 和 p109 咬在一起</b>，而且顺带修正了「序列决定结构」的天真版本。<b>能把两章接起来，是这场考试里最划算的动作。</b><span class="pg">p109 p113</span>'}
]},

{g:'桥回主场', gn:'他顺着走就到你答得住的地方。', items:[
{r:'中', q:'What is the periplasm?',
 en:'“The periplasm is the space between the inner and outer membranes of a Gram-negative bacterium; unlike the cytoplasm it is oxidising and has its own disulfide-forming enzymes, the Dsb proteins, so disulfides can form there.”',
 cn:'通用；这是「E. coli 里怎么做二硫键」的答案。'},
{r:'高', q:'So how would you express a protein like that?',
 en:'“Not easily in E. coli — its cytoplasm is reducing, so no disulfides unless you go to the periplasm or an engineered strain, and it has no N-glycosylation. For a surface protein that needs both, a eukaryotic host is the point. That is why I work with <b>yeast display</b>: the protein is anchored on the yeast surface, so it has gone through the secretory pathway, and I can read binding cell by cell.”',
 cn:'<b>这是全卡最强的一个口子。</b>它从书里的一句化学事实（胞质是还原性的）一步走到你的日常工作，而且中间没有跳跃。'},
{r:'中', q:'You said folding quality control — how does that work?',
 en:'“In the standard picture the check is done by two ER lectins, calnexin and calreticulin: they bind a glycoprotein only while its N-glycan still carries a single glucose; once that last glucose is trimmed the protein is released, and if it is still misfolded a glucosyltransferase — UGGT — puts one glucose back, so it goes round again. On top of that sit the chaperones proper, which recognise and stabilise partially folded intermediates and help repair chains that have folded wrongly. The textbook names GroEL and GroES, and hsp70. It also says that a number of serious neurological diseases are caused by protein misfolding.”',
 cn:'完整内容在<b>卡 01 的追问</b>里。<span class="pg">p109</span>'}
]}
]
});
