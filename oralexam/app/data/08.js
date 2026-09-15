/* 卡 08 · Explain the terms “propeptide” and “signal peptide”. 题库 #8 ＋ #9（S2 Biochemistry 2、3），同一段书，并成一张
   出处 OCR p108、p110–p111（§4.3.2）、p113、p064（§3.7.2）、p117–p118（Obr. 5.2）、p222、p158、p112、p094 p097
   回 300 dpi 原图核过：p111「23 aminokyselin」是书印的；p111「preproproteinu na preprotein」也是书印的（应为 proprotein，见陷阱）。
   「propeptid」「prokolagen」全书 0 命中——书的对象是 proprotein / zymogen / C-peptid；propeptide 按通用说法定义，卡上标明。糖基化、二硫键在卡 13。 */

window.CARDS.push({
id:'08', n:8, merged:[9], w:2,
q:'Explain the terms “propeptide” and “signal peptide”.',
qcn:'解释术语 propeptide（#8）与 signal peptide（#9）',
sub:'主干说完约 90 秒 · 两个词各一句定义，再说它们怎么相关 · 口试他多半只问其中一个词',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 两道题都是「解释术语 X」。「解释术语」的意思是：先正面说它<b>是什么</b>（肽链的哪一截、在哪、什么时候没了），再说它<b>为什么存在</b>。两个词都是「前体里有、成熟蛋白里没有的一截肽」——区别在<b>为什么要拿掉</b>。'},
 {n:'01', t:'定义 · signal peptide',
  big:'新生链 <b>N 端</b>的一段序列，由<b>紧接起始密码子后面的信号密码子</b>编码；任务是把核糖体带到 <b>ER 膜</b>上；在 <b>ER 腔内被信号肽酶切掉</b>',
  en:'“The term signal peptide means the stretch of amino acids at the <b>N-terminus</b> of a nascent polypeptide — the textbook says signal sequence. It is encoded by the signal codons that follow immediately after the initiation codon. Its job is to bring the ribosome to the membrane of the endoplasmic reticulum. The rest of the chain is then threaded into the ER lumen as it is made. Once its end is inside, a membrane-bound <b>signal peptidase</b> cuts it off — the mature protein does not carry it.”',
  note:'书上那个词是 <i>signal sequence</i>，题面叫 signal peptide，同一个东西；「signal peptide」也指切下来的那一截。<span class="pg">p110 p111</span>'},
 {n:'02', t:'定义 · propeptide',
  big:'前体蛋白（<b>proprotein</b>）里的一截肽：链已经折好、已经在分泌路上，但<b>这一截不去掉它就没有活性</b>；由<b>选择性蛋白水解</b>切掉，切了就回不来',
  en:'“The term propeptide means a segment of a precursor protein, the <b>proprotein</b>, that is still there after the chain has folded and entered the secretory route. It has to be removed by <b>selective proteolysis</b>, cleavage at specific peptide bonds, before the protein is biologically active. The textbook’s example is the <b>C-peptide</b> of proinsulin. The pieces cut off the digestive zymogens are the same idea. The word propeptide itself is not in the textbook — its objects are the proprotein, the proenzyme or zymogen, and the C-peptide.”',
  note:'「propeptid」全书 0 命中；「proprotein」「zymogen」「C-peptid」有。定义按通用说法，例子全是书的。<span class="pg">p110 p111 p064 p118</span>'},
 {n:'03', t:'两者的关系',
  big:'<b>pre 管地点，pro 管活性</b>。pre 先掉（ER 里，边合成边切），pro 后掉（Golgi 里，或分泌到目的地之后）；两个都有的叫 <b>preproprotein</b>',
  en:'“The two are the two stages of what the textbook calls a <b>two-stage proteolytic modification</b>. Pre is about <b>location</b>: the signal peptide says where the chain goes, and it is cut off first, in the ER, while the chain is still being made. Pro is about <b>activity</b>: the propeptide keeps the protein inactive or holds it together. It is cut off later, mostly in the Golgi, or for the digestive enzymes only in the gut. A protein carrying both is a <b>preproprotein</b>: preproinsulin is signal, B chain, C-peptide, A chain.”',
  note:'<b>这一句是两道题合并的骨架：pre = 地点，pro = 活性。</b>他问哪个词都从这句接到另一个。<span class="pg">p111</span>'},

 {g:'signal peptide 的机器，按顺序', gn:'书 p110–p111 给了一整条链，名字都有。按顺序说，一个环节一句。'},
 {n:'04', t:'长什么样',
  big:'<b>中间疏水</b>、<b>末端带电</b>；preproinsulin 的信号序列 <b>23 个残基</b>',
  en:'“It is mostly <b>hydrophobic residues in the middle</b> and <b>charged residues at the end</b>. That arrangement is the mechanism: at the ER membrane the charged end stays outside, and the hydrophobic middle sinks into the non-polar membrane. Preproinsulin’s signal sequence is <b>23 residues</b> long.”',
  note:'23 回原图核过，是书印的。<span class="pg">p110 p111</span> 通用说法分三段（N 端带正电、疏水核心、C 端极性含切点），书只分两段——说书的。'},
 {n:'05', t:'SRP 和它的受体',
  big:'<b>SRP</b>（signal recognition particle，一个核糖核蛋白）认出<b>已经合成出来的</b>信号序列，把核糖体带到 ER 外侧的 <b>SRP 受体</b>上',
  en:'“As soon as the signal sequence has been synthesised, the <b>signal recognition particle</b>, SRP, binds it specifically. SRP is a ribonucleoprotein — protein plus a small RNA. It brings the ribosome to a specific <b>SRP receptor</b> on the outer face of the ER membrane. That, the textbook says, is the primary task of the signal sequence according to the signal theory. Generally SRP also pauses elongation until the ribosome has docked — the textbook does not say this.”',
  note:'「暂停翻译」是通用说法，书没有——标 general。<span class="pg">p110</span>'},
 {n:'06', t:'孔，共翻译穿膜',
  big:'疏水段插进膜，跟旁边的 <b>ribophorin I 和 II</b> 排成一段折叠片；这个非共价互动逼开一个由 ribophorin 围成的<b>「孔」</b>，其余的链<b>边合成边穿进 ER</b>；SRP 随即脱开去接下一条',
  en:'“The hydrophobic middle enters the membrane and forms a pleated-sheet structure with two adjacent membrane proteins, <b>ribophorin I and II</b>. That non-covalent interaction forces open a ‘pore’ bounded by the ribophorins. The rest of the chain then passes through it into the ER while it is still being synthesised — co-translationally. Once the ribosome is attached, SRP is released for the next signal sequence. In the standard picture the channel is the <b>Sec61 translocon</b>. The textbook gives only the ribophorins.”',
  note:'书的说法是 ribophorin 围孔；通用说法是 Sec61。<b>卡上说书的，被追问再补通用。</b><span class="pg">p110 p111</span>'},
 {n:'07', t:'信号肽酶',
  big:'信号序列的末端一出现在 ER 腔里，<b>膜结合的信号肽酶</b>就把它水解掉；从此蛋白是 pro- 或成熟形式，<b>没有信号肽</b>',
  en:'“As soon as the end of the signal sequence appears in the ER lumen, a membrane-bound <b>signal peptidase</b> cuts it off by hydrolysis. From then on the protein is either the proprotein or the finished protein — the signal is gone. The textbook files this cleavage as the covalent modification of the backbone that goes with export.”',
  note:'书这句自己有点绕（「合成完成后，即信号序列末端一出现在腔内」）；通用说法是<b>边合成边切</b>。<span class="pg">p108 p111</span>'},
 {n:'08', t:'之后的路',
  big:'ER 池 → 从 ER 出芽的<b>微囊泡</b> → <b>Golgi</b>（继续修饰）→ <b>分泌颗粒</b> → 跟质膜融合 → 胞外；溶酶体蛋白也走这条路，靠 M6P 分流',
  en:'“After cleavage the rest of the chain goes into the cisternae of the ER. From there it is packed into <b>microvesicles</b> that bud off the ER and travel to the <b>Golgi apparatus</b>, and there it is modified further. It finally leaves in <b>secretory granules</b> that fuse with the plasma membrane and release the protein outside the cell. Lysosomal proteins take the same route and are sorted off by the mannose-6-phosphate tag. The textbook says they are probably made as preproteins too.”',
  note:'这条路跟卡 13 共用；糖基化、二硫键的机制在卡 13，这里不重复。<span class="pg">p110 p111 p112</span>'},

 {g:'propeptide 的三个例子', gn:'一个是书的主例（insulin），一个是书的整节（zymogen），一个是通用的（procollagen，书里没有，标 general）。'},
 {n:'09', t:'preproinsulin → proinsulin → insulin',
  big:'preproinsulin = 信号(23) ＋ <b>B 链</b>(N 端) ＋ <b>C-peptide</b>(中间，连着两条链) ＋ <b>A 链</b>(C 端)；切掉信号得 proinsulin；切掉 C-peptide 得 insulin，两条链靠<b>三个二硫键</b>连着',
  en:'“Insulin is first made as <b>preproinsulin</b>: a 23-residue signal sequence, then the <b>B chain</b>, then the connecting <b>C-peptide</b>, then the <b>A chain</b> at the C-terminus. Signal peptidase removes the signal and gives <b>proinsulin</b>, which already contains the finished A and B chains joined by the C-peptide. Selective proteolysis removes the C-peptide and gives biologically active insulin, in which the two chains are held by <b>three disulfide bonds</b>.”',
  note:'书的主干例子，逐词来自 p111。<span class="pg">p111</span>'},
 {n:'10', t:'切 C-peptide 的酶',
  big:'<b>至少两个酶</b>：一个 <b>trypsin 样专一性</b>的酶切下 C-peptide；一个 <b>carboxypeptidase</b> 去掉留下的<b>两个碱性残基的二肽</b>',
  en:'“At least two enzymes take part. The first has <b>trypsin-like specificity</b>, meaning it cuts after basic residues, and it cuts out the C-peptide. The second is a <b>carboxypeptidase</b>, an exopeptidase working from the C-terminus, and it removes the dipeptide of two basic amino acids by which the C-peptide had been attached. Generally the two are the prohormone convertases and carboxypeptidase E. The textbook names only the specificities.”',
  note:'通用名字（PC1/3、PC2、carboxypeptidase E）标 general。<b>「trypsin 样」= 切碱性残基之后</b>，所以 C-peptide 两头是成对的碱性残基。<span class="pg">p111 p117</span>'},
 {n:'11', t:'二硫键先于切',
  big:'proinsulin 的 A–B 二硫键是<b>在 proinsulin 阶段</b>形成的（跟氧化型谷胱甘肽反应）——<b>C-peptide 还连着两条链的时候</b>',
  en:'“The order matters. The textbook says the disulfide bonds between the A and B chains form <b>in proinsulin</b>, by reaction with the oxidised form of glutathione. So they are made while the C-peptide still holds the two chains together, and only then is the C-peptide cut out. That is what the C-peptide is for.”',
  note:'这是「propeptide 为什么存在」的第二种理由：不是压住活性，是<b>把两条链按对的位置拴在一起等二硫键形成</b>。<span class="pg">p113</span>'},
 {n:'12', t:'zymogen',
  big:'有些蛋白酶以<b>无活性的 zymogen / proenzyme</b> 合成，需要时才用<b>酶催化的水解切掉一段肽</b>激活，这会<b>露出活性中心</b>；<b>不可逆</b>；trypsin、chymotrypsin、pepsin、部分凝血酶',
  en:'“A <b>zymogen</b>, or proenzyme, is an enzyme synthesised in an inactive precursor form and activated only when needed. The textbook puts it among the covalently modulated enzymes. Activation is an enzyme-catalysed hydrolytic removal of part of the peptide chain, and it <b>uncovers the enzyme’s own active centre</b>. This kind of regulation is <b>irreversible</b>. Typical of trypsin, chymotrypsin and pepsin, the digestive enzymes, and of some enzymes of blood clotting.”',
  note:'卡 18/19 的邻居：共价调控的一种，跟磷酸化并列，跟别构（非共价、可逆）相对。<span class="pg">p064 p222</span>'},
 {n:'13', t:'消化酶原的账',
  big:'pepsinogen → <b>HCl</b> 切掉 5 个肽 → pepsin–inhibitor 复合物 → pH < 5 放出抑制肽 → pepsin；<b>trypsinogen → trypsin 靠肠黏膜的 enteropeptidase</b>（切掉 Val-Asp₄-Lys）；trypsin 再激活 chymotrypsinogen、proelastase、procarboxypeptidases；胰腺同时分泌 <b>trypsin inhibitor</b>',
  en:'“In the stomach, <b>pepsinogen</b> loses five peptides by the action of hydrochloric acid and becomes a pepsin-inhibitor complex. Below pH 5 the inhibitor peptide leaves and pepsin is free. The pancreas sends trypsinogen, chymotrypsinogen, proelastase, procarboxypeptidase and a trypsin inhibitor into the small intestine. There <b>enteropeptidase</b> from the intestinal mucosa converts trypsinogen to trypsin, and the figure shows the hexapeptide Val-Asp₄-Lys coming off. Trypsin then activates the others. The inhibitor protects trypsin from digesting itself and stops the other zymogens being activated too early.”',
  note:'全在 Obr. 5.2 和 p118 正文。<b>「胰腺为什么不消化自己」那道便装题的答案就在这里。</b><span class="pg">p117 p118</span>'},
 {n:'14', t:'procollagen（general）',
  big:'胶原以 <b>procollagen</b> 分泌，三螺旋两端各带一个球形的 <b>N-/C-propeptide</b>；出细胞后被 <b>procollagen peptidases</b> 切掉才装配成纤维——书里没有 prokolagen，通用',
  en:'“Generally, collagen is secreted as <b>procollagen</b>, the triple helix with a globular <b>propeptide at each end</b> — the textbook does not have procollagen. The propeptides keep it soluble and stop it assembling into fibres inside the cell. Then <b>procollagen peptidases</b> cut them off outside, and only after that do the molecules pack into fibrils. What the textbook does give is that collagen is hydroxylated in the cisternae of the ER. So it goes through the ER, which means it starts with a signal sequence.”',
  note:'<b>全条 general</b>，只有「羟化在 ER 池」是书的。<span class="pg">p112 p031</span> 这是 propeptide 的第三种理由：<b>先别装配</b>。'},

 {g:'为什么', gn:'三个理由对应三个例子。说得出理由，「解释术语」才算解释了。'},
 {n:'15', t:'为什么要 pre',
  big:'核糖体在胞质里，分泌蛋白要过一层膜；<b>地址必须写在蛋白自己身上</b>，而且写在<b>最先出来的那一端</b>；用完就切，因为书只给了它一个任务',
  en:'“Why a signal peptide at all: the ribosome is cytosolic and a secreted protein has to cross a membrane. The cell has one kind of ribosome and many destinations, so the address has to be written in the protein itself. It is written at the N-terminus, because that is the first part to emerge. The decision is made before the rest of the chain exists. And it is cut off because it has done its only job: the textbook gives it one task, attachment to the ER.”',
  note:'书给了任务（p110）；「为什么在 N 端」是从「信号密码子紧接起始密码子」推的，说成推论。<span class="pg">p110</span>'},
 {n:'16', t:'为什么要 pro',
  big:'三种理由：① <b>活性在错误的地方有害</b>（胰腺不能消化自己——书明说）② <b>把两条链拴在一起等二硫键</b>（insulin）③ <b>先别装配</b>（procollagen，general）',
  en:'“Why a propeptide: three reasons, one per example. For the digestive enzymes, activity in the wrong place is harmful. The textbook says outright that making them as proenzymes is a protective mechanism that stops the producing organs digesting themselves. For insulin, the C-peptide holds the A and B chains in register while the three disulfides form. Two separate chains would not find each other reliably. For collagen, generally, the propeptides stop the molecule assembling before it is outside.”',
  note:'<span class="pg">p118 p113</span> 第二、三条的「为什么」是通用推理，书只给了事实。'},

 {g:'收尾', gn:'一句停住，一句陷阱，一句伸出去。'},
 {n:'17', t:'落点 · 不可逆',
  big:'切肽键是<b>水解</b>，放能，切下来的片段扩散走——<b>细胞没有把它接回去的反应</b>；所以 pro 只能用一次，要可逆的调控得用别构或磷酸化',
  en:'“And the removal is irreversible for a thermodynamic reason: hydrolysis of a peptide bond is exergonic and the fragment diffuses away, so there is no reaction in the cell that puts it back. That is why a propeptide is a one-shot switch, and why reversible regulation uses something else — allosteric binding or phosphorylation.”',
  note:'停在热力学。停止句在 why 那一屏。<span class="pg">p064</span>'},
 {n:'18', t:'陷阱四条',
  big:'① 成熟蛋白<b>没有</b>信号肽 ② 这个 signal 是<b>地址</b>，不是激素那种信号 ③ 线粒体、细胞核的靶向序列是<b>另一套信号</b>（general）④ 书 p111 把「preproprotein 切掉信号」印成「→ preprotein」，应为 <b>proprotein</b>',
  en:'“Four things not to say. The mature protein does not have a signal peptide — it was cut off in the ER. ‘Signal’ here means an address, not a hormone signal. Mitochondrial and nuclear targeting sequences are different signals read by different machinery. Generally, the mitochondrial one is also N-terminal and cleaved, and the nuclear one is internal and stays. And the textbook slips once: page 111 says removing the signal turns a preproprotein into a preprotein — it means proprotein, because ‘pre’ is what came off.”',
  note:'第四条回原图核过，书就是这么印的，不是 OCR。<b>用书自己的定义（p110：pre = 带信号序列）打书的这一句</b>，比引外部教材稳。<span class="pg">p110 p111</span>'},
 {n:'19', t:'留口子',
  big:'我自己的构建体上就有这两样：yeast display 的 Aga2 融合前面是一段分泌信号；大肠杆菌周质表达用 pelB；标签放在信号<b>后面</b>，不然跟信号一起被切掉',
  en:'“I use both of these every week. In yeast display the protein is a fusion to Aga2p, and the vector puts a secretion signal in front of it. That is why the fusion goes through the ER and the Golgi and ends up anchored on the cell surface. For E. coli I would use a pelB or OmpA signal to send a protein to the periplasm. And the practical rule: a tag goes after the signal, never in front of it, or it is cut off with the signal.”',
  note:'<b>实验室知识，不是书的。</b>他顺着走就到 yeast display（卡 02）和 plasmid 元件（大本营卡）。'}
],
end:'<b>两个词各一句定义，加「pre 管地点、pro 管活性」那一句，这题就答完了八分。</b>其余是他追问哪个例子时才给的：insulin 给 09–11，胰腺给 13，胶原给 14。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>signal peptide</b>：N 端、信号密码子紧接起始密码子、带核糖体去 ER、在腔内被信号肽酶切掉',
 '“The N-terminal stretch, encoded right after the initiation codon, that brings the ribosome to the ER. Signal peptidase cuts it off in the lumen.”',
 '书叫 signal sequence。'],
['<b>propeptide</b>：proprotein 里必须被选择性蛋白水解切掉才有活性的一截；C-peptide',
 '“A segment of the proprotein that selective proteolysis has to remove before the protein is active — the C-peptide of proinsulin.”',
 '「propeptide」这个词书里没有，对象有。'],
['<b>关系</b>：pre 管地点、先掉；pro 管活性、后掉；两个都有 = preproprotein',
 '“Pre is about location and comes off first, in the ER. Pro is about activity and comes off later, mostly in the Golgi.”',
 '两道题合并的骨架句。'],
['<b>长相</b>：中间疏水、末端带电；preproinsulin 的 23 个残基',
 '“Hydrophobic in the middle, charged at the end. Twenty-three residues in preproinsulin.”',
 '带电端留在膜外，疏水段插进膜——长相就是机制。'],
['<b>SRP → SRP 受体</b>：核糖核蛋白认出已合成的信号序列，把核糖体带到 ER 外侧的受体上',
 '“SRP, a ribonucleoprotein, binds the signal the moment it is made and docks the ribosome on the SRP receptor in the ER membrane.”',
 '「暂停翻译」是通用说法，书没有。'],
['<b>孔</b>：疏水段跟 ribophorin I、II 排成折叠片，逼开一个孔；链边合成边穿；SRP 脱开回收',
 '“The hydrophobic part forms a pleated sheet with ribophorins I and II, a pore opens, the chain goes through as it is made, and SRP is released for the next one.”',
 '通用叫 Sec61 translocon；卡上说书的。'],
['<b>信号肽酶</b>：膜结合，信号末端一进腔就水解掉；成熟蛋白没有信号肽',
 '“A membrane-bound signal peptidase hydrolyses it off once its end is in the lumen.”',
 '书归为「主链的共价修饰」，跟出口相关的那种（p108）。'],
['<b>路线</b>：ER 池 → 微囊泡 → Golgi → 分泌颗粒 → 融合质膜 → 胞外；溶酶体蛋白靠 M6P 分流',
 '“ER cisternae, microvesicles, Golgi, secretory granules, fusion with the plasma membrane. Lysosomal proteins are sorted off by mannose-6-phosphate.”',
 '糖基化、二硫键在卡 13。'],
['<b>insulin</b>：信号 ＋ B ＋ C ＋ A；切 C-peptide 用 trypsin 样酶 ＋ carboxypeptidase；三个二硫键在 proinsulin 阶段就形成',
 '“Signal, B chain, C-peptide, A chain. A trypsin-like enzyme cuts out the C-peptide and a carboxypeptidase trims the basic dipeptide. The three disulfides were already made in proinsulin.”',
 '二硫键先于切——C-peptide 就是干这个的。'],
['<b>zymogen</b>：无活性前体，酶催化的水解切一段肽露出活性中心，不可逆；trypsinogen → trypsin 靠 enteropeptidase，pepsinogen 靠 HCl',
 '“An inactive precursor activated by enzymatic hydrolysis of part of the chain, which uncovers the active centre. The activation is irreversible. Enteropeptidase for trypsinogen, hydrochloric acid for pepsinogen.”',
 '共价调控的一种（p064），保护产生它的器官（p118）。'],
['<b>为什么 pro</b>：活性在错的地方有害 · 拴住两条链等二硫键 · 先别装配（procollagen，general）',
 '“Three reasons. Activity in the wrong place is harmful. The C-peptide holds the two chains while the disulfides form. And generally, procollagen’s propeptides stop assembly until it is outside.”',
 '三个理由对三个例子。'],
['<b>留口子</b>：Aga2 融合前面的分泌信号 · pelB 去周质 · 标签放信号后面',
 '“My display construct has a secretion signal in front of the Aga2 fusion. In E. coli I would use pelB. And the tag goes after the signal, or it is cut off with it.”',
 '实验室知识。口子落在卡 02 和 plasmid 大本营卡。']
],

segs:[
 {tag:'段 1 · 定义', h:'两个词各一句正面定义，然后一句关系',
  p:['“Both terms name a piece of a polypeptide that is present in the precursor and absent from the mature protein. The difference is why it is removed.”',
     '“A <b>signal peptide</b> is the stretch at the N-terminus of a nascent chain — the textbook says signal sequence. It is encoded by the signal codons right after the initiation codon, and its job is to bring the ribosome to the membrane of the endoplasmic reticulum. The chain is then threaded into the ER lumen as it is made. Once its end is inside, a membrane-bound signal peptidase cuts it off. While it is still there the protein is a <b>preprotein</b>.”',
     '“A <b>propeptide</b> is a segment of the precursor, the <b>proprotein</b>, that is still there after the chain has folded and is on the secretory route. It must be removed by selective proteolysis, cleavage at specific peptide bonds, before the protein is biologically active. The textbook’s example is the C-peptide of proinsulin. The pieces cut off the digestive zymogens are the same idea.”'],
  note:'<b>他嘴里的题面是「What is a propeptide?」或「What is a signal peptide?」，只有一个词。</b>答那个词的定义之后，主动接到另一个——因为两者的关系就是这题的第二句。'},
 {tag:'段 2 · general', h:'归类：pre 管地点，pro 管活性；书把它们归在哪',
  p:['“The relation between them: ‘pre’ is about <b>location</b> and ‘pro’ is about <b>activity</b>. The signal peptide is cut off first, in the ER, while the chain is being made. The propeptide is cut off later, mostly in the Golgi, the textbook says, or for the digestive enzymes only after secretion into the gut. A protein carrying both is a <b>preproprotein</b>. The textbook calls the whole thing a two-stage proteolytic modification.”',
     '“Where it sits in the textbook: post-translational modification has three kinds. They are non-covalent folding, covalent modification of the backbone, and covalent modification of side chains. Both of these cleavages are the second kind, the one the textbook ties to transport of proteins out of the cell. Zymogen activation it also files, separately, under covalent modulation of enzymes — the irreversible kind.”'],
  note:'<b>这一段是「解释术语」的第二半：它属于什么。</b>p108 的三分法和 p064 的共价调控，两处都能接。'},
 {tag:'段 3 · 稍展开', h:'机器按顺序，然后 insulin 一个例子走完',
  p:['“The machinery in order. The signal sequence is hydrophobic in the middle and charged at the end. The moment it has been synthesised, the signal recognition particle, SRP, a ribonucleoprotein, binds it. SRP then brings the ribosome to the SRP receptor on the outer face of the ER. The charged end stays outside, and the hydrophobic middle sinks into the membrane. There, with two adjacent membrane proteins, ribophorin I and II, it forms a pleated-sheet structure that forces open a pore. The rest of the chain goes through it while it is still being made, and SRP is released for the next one. Once the end of the signal appears in the lumen, membrane-bound signal peptidase cuts it off. From the ER cisternae the protein goes by microvesicles to the Golgi and leaves in secretory granules that fuse with the plasma membrane.”',
     '“Insulin shows both stages. Preproinsulin is a 23-residue signal, then the B chain, the connecting C-peptide, then the A chain. Signal peptidase gives proinsulin, in which the three disulfides between A and B are formed with oxidised glutathione, while the C-peptide still holds the chains together. Then, in the Golgi, at least two enzymes act: one with trypsin-like specificity cuts out the C-peptide and a carboxypeptidase removes the dipeptide of two basic residues it was attached by. What is left is insulin.”'],
  note:'〔可裁〕如果他要另一个例子，给 zymogen：“The digestive enzymes are the other case. Enteropeptidase from the intestinal mucosa turns trypsinogen into trypsin, cutting off a hexapeptide and uncovering the active centre. Trypsin then activates chymotrypsinogen, proelastase and the procarboxypeptidases.”'},
 {tag:'段 4 · 留口子', h:'转进主场：构建体上的信号序列',
  p:['“And I use both of these every week. In yeast display the protein I work on is a fusion to Aga2p, and the vector puts a secretion signal in front of it. So the fusion goes through the ER, gets its disulfides and glycans there, passes the Golgi, and ends up anchored on the cell surface. There I can titrate binding. The yeast α-factor leader some vectors use is literally a prepro sequence: a signal cut by signal peptidase and a pro-region cut in the Golgi by the Kex2 protease.”',
     '“For E. coli I would put a pelB or OmpA signal in front to send the protein to the periplasm, where disulfides can form. And the practical rule that follows: any tag goes after the signal, or it is cut off with it.”'],
  note:'<b>实验室知识，不是书的。</b>三个口子——yeast display（卡 02）、周质与二硫键（卡 13）、plasmid 元件（大本营卡）——全在你的地盘。<b>具体用的是哪个 leader，看你自己的载体图，别在考场上猜。</b>'}
],

why:{
 rungs:[
  ['为什么地址要写在蛋白上，而且写在 N 端？','因为核糖体只有一种，目的地有很多，<b>能区分它们的只有正在合成的那条链本身</b>。写在 N 端是因为 N 端最先出来——信号密码子紧接起始密码子（p110）——所以链还没合成完就能决定去哪。'],
  ['那为什么要把信号切掉？','因为它只有一个任务（p110：把核糖体接到 ER 上），任务完成它就没用了；而且它是一段疏水序列，留在一个可溶蛋白上没有好处。“It had one job, and a hydrophobic stretch left on a soluble protein serves nothing.”'],
  ['那为什么有的蛋白还要多带一截 pro，不直接合成活性形式？','三个理由，各对一个例子（p118、p113、general）：<b>活性在错的地方会伤害产生它的器官</b>（胰腺）；<b>两条链要先拴在一起等二硫键</b>（insulin）；<b>先别装配</b>（procollagen）。共同点：<b>活性或装配要等到对的时间和地点</b>，而蛋白一折好就有了，所以要有一个可以一次性拆掉的锁。']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“And the lock is one-shot because removal is proteolysis: hydrolysis of a peptide bond is exergonic and the fragment diffuses away, so nothing in the cell puts it back. Below that the question is why the peptide bond is thermodynamically unstable in water yet stays put until an enzyme acts. There we are in physical chemistry rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is a propeptide?',
 mean:'<b>#8 的最短问法，他真正会说的那句。</b>答案自带结构：定义 → 例子 → 为什么有它 → 跟 pre 的关系。',
 say:'“A propeptide is a segment of a precursor protein, the proprotein, that is still there after the chain has folded and entered the secretory route. It has to be removed by selective proteolysis before the protein is biologically active. The textbook’s example is the C-peptide of proinsulin, which holds the A and B chains together while their three disulfides form. The pieces cut off the digestive zymogens are the same idea, there to keep the enzyme inactive until it is in the gut. The removal is irreversible. It is the second stage of the textbook’s two-stage proteolytic modification. The first is the signal peptide, which is about where the protein goes, not whether it is active.”'},

{q:'What is a signal peptide?',
 mean:'<b>#9 的最短问法。</b>定义 → 长相 → 机器一句 → 切掉 → 跟 pro 的关系。',
 say:'“A signal peptide is the N-terminal stretch of a nascent polypeptide — the textbook says signal sequence. It is encoded by the signal codons right after the initiation codon, and it brings the ribosome to the ER membrane. The chain is then threaded into the ER lumen as it is made. It is hydrophobic in the middle and charged at the end. SRP binds it and docks the ribosome on the SRP receptor. The chain goes through a pore, and a membrane-bound signal peptidase cuts the signal off once its end is inside. So the mature protein never carries it. Preproinsulin’s is 23 residues. It is the ‘pre’ of a preproprotein. The ‘pro’, the propeptide, is a different segment removed later, for activity rather than location.”'},

{q:'What is the difference between a preprotein and a proprotein?',
 mean:'<b>他在问 pre 和 pro 两个前缀。</b>这就是骨架句。',
 say:'“A preprotein still carries its signal peptide — it has not yet been processed in the ER, so the prefix is about location. A proprotein has lost the signal but still carries a propeptide. It is folded and on its way but not yet active, so the prefix is about activity. A preproprotein has both, and loses them in that order: pre first, in the ER, pro later, mostly in the Golgi.”',
 tail:'书 p111 在这句上印错了一次（preproprotein → “preprotein”），见陷阱；答这题时按 p110 的定义说，不用提书错，除非他自己念出那句。'},

{q:'Where is the signal peptide cut off, and by what?',
 mean:'<b>要地点和酶名，一句话。</b>',
 say:'“In the lumen of the endoplasmic reticulum, by signal peptidase, an enzyme bound to the ER membrane. It cuts the moment the end of the signal sequence appears in the lumen, while the rest of the chain is still coming through. That is the standard picture. The textbook words it as after synthesis is complete.”'},

{q:'How is insulin made from preproinsulin?',
 mean:'<b>书的主干例子。</b>顺序：信号 → proinsulin → 二硫键 → C-peptide → insulin。',
 say:'“Preproinsulin is a 23-residue signal, then the B chain, the C-peptide, then the A chain. Signal peptidase removes the signal in the ER, giving proinsulin, which already contains the finished A and B chains. Their three disulfides form at this stage, with oxidised glutathione, while the C-peptide holds the chains together. Then, mostly in the Golgi, an enzyme with trypsin-like specificity cuts out the C-peptide and a carboxypeptidase removes the dipeptide of two basic amino acids it was attached by. What remains is insulin.”'},

{q:'What is a zymogen, and how is it activated?',
 mean:'<b>propeptide 的第二个例子，书有整节。</b>定义 → 机制 → 不可逆 → 例子。',
 say:'“A zymogen, or proenzyme, is an enzyme synthesised as an inactive precursor and activated only when needed. Activation is an enzyme-catalysed hydrolytic removal of part of the peptide chain, which uncovers the active centre. It is irreversible, and the textbook lists it among the covalently modulated enzymes. Trypsinogen becomes trypsin by enteropeptidase from the intestinal mucosa, pepsinogen becomes pepsin by hydrochloric acid, and trypsin activates chymotrypsinogen, proelastase and the procarboxypeptidases. Some clotting enzymes work the same way.”'},

{q:'Why do doctors measure C-peptide in a diabetic?', odd:1,
 mean:'<b>问的是 C-peptide 是什么、从哪来。</b>临床部分通用。',
 say:'“Because the C-peptide is the propeptide cut out of proinsulin. So, generally, one C-peptide is released for every insulin molecule the patient’s own β-cells make, while injected insulin contains no C-peptide. Measuring C-peptide therefore tells you how much insulin the patient is still producing themselves, even if they are on insulin injections.”',
 tail:'⚠ 临床用途<b>书里没有</b>；C-peptide 的来路（p111）有。'},

{q:'Why doesn’t the pancreas digest itself?', odd:1,
 mean:'<b>问的是 zymogen。</b>书 p118 直接给了答案。',
 say:'“Because its proteases are made as zymogens: trypsinogen, chymotrypsinogen, proelastase and procarboxypeptidase. These are inactive precursors that are only activated after secretion into the small intestine. There enteropeptidase from the mucosa converts trypsinogen to trypsin, and trypsin activates the rest. The textbook says outright that this is a protective mechanism against the producing organ digesting itself. The pancreas also secretes a trypsin inhibitor, which stops trypsin digesting itself and stops the other zymogens being activated too early.”'},

{q:'Why does your displayed protein end up on the yeast surface?', odd:1,
 mean:'<b>同一个答案，换成实验室的问法。</b>直通主场。',
 say:'“Because it starts with a signal peptide. The display vector puts a secretion signal in front of the Aga2p fusion. So the fusion is threaded into the ER as it is made and gets its disulfides and N-glycans there. It then passes through the Golgi and is delivered to the cell surface. There Aga2p is held by disulfides to Aga1p, which is anchored in the cell wall. Without the signal it would be a cytosolic protein and I would see nothing on the surface.”',
 tail:'实验室知识。Aga1p–Aga2p 的锚定是通用的 yeast-display 说法。'},

{q:'Why does blood not clot inside a healthy vessel?', odd:1,
 mean:'<b>问的是凝血酶原 = zymogen。</b>书的碎片：p064（凝血酶是酶原）、p158（prothrombin → thrombin）、p039 p034（fibrinogen → fibrin）。',
 say:'“Because the clotting enzymes circulate as zymogens — the textbook names them among the proteases made as proenzymes. Prothrombin is converted to thrombin only where the cascade is triggered, and thrombin converts soluble globular fibrinogen into fibrous fibrin. The textbook’s heparin example is that it blocks both steps. Generally, thrombin does that by cutting two short peptides off fibrinogen — itself a propeptide removal.”',
 tail:'γ-carboxylation 和维生素 K 在<b>卡 13</b>；fibrinopeptide 那句 general。'},

{q:'Why is collagen assembled into fibres only outside the cell?', odd:1,
 mean:'<b>问的是 procollagen 的 propeptide。</b>全条 general。',
 say:'“Generally: because it is secreted as procollagen, with a globular propeptide at each end of the triple helix that keeps it soluble and prevents assembly. Procollagen peptidases outside the cell cut them off, and only then do the molecules pack into fibrils. The textbook does not have procollagen, but it does put collagen’s hydroxylation in the ER cisternae, so the molecule goes through the secretory route like the others.”'},

{q:'Is signal-peptide cleavage a post-translational modification?',
 mean:'<b>归类题。</b>按书答，然后给通用的保留。',
 say:'“In the textbook, yes: it is the covalent modification of the polypeptide backbone, the kind it ties to transport of proteins out of the cell. That is one of its three classes of post-translational modification. Strictly it is co-translational, because the cut is made while the rest of the chain is still being synthesised. The textbook keeps it under post-translational all the same.”'},

{q:'Give me an example of a propeptide.',
 mean:'<b>要例子。</b>先给书的，再给通用的，标明。',
 say:'“The C-peptide of proinsulin — the textbook’s example. Then the pieces cut off the zymogens: the hexapeptide enteropeptidase removes from trypsinogen. And generally, the N- and C-propeptides of procollagen.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认你知道这些名词。每个先说是什么。', items:[
{r:'高', q:'What is a preproprotein?',
 en:'“A precursor that still carries both removable segments. One is the signal peptide at the N-terminus, which says where it goes. The other is a propeptide, which keeps it inactive or held together. The textbook’s example is preproinsulin — signal, B chain, C-peptide, A chain. It loses the signal first, in the ER, and becomes the proprotein. Then it loses the propeptide, mostly in the Golgi, and becomes the active protein.”',
 cn:'<span class="pg">p110 p111</span> 书 p110 把 pre(pro)形式定义为「天然状态下带信号序列的」——这就是「pre = 带信号」的出处。'},
{r:'高', q:'What is the signal recognition particle?',
 en:'“SRP is a ribonucleoprotein, protein subunits on a small RNA. It binds specifically to a signal sequence the moment that sequence has been synthesised. Then it carries the ribosome to its own receptor, the SRP receptor, in the ER membrane. Once the ribosome is attached it is released and picks up the next signal sequence. Generally it also pauses elongation while it does this. The textbook gives the binding and the recycling, not the pause.”',
 cn:'<span class="pg">p110 p111</span> 「暂停翻译」标 general。通用的组成（6 个蛋白 ＋ 7S RNA）书里没有，不用报数。'},
{r:'中', q:'What is a ribophorin?',
 en:'“In the textbook, ribophorins I and II are the two ER membrane proteins beside which the hydrophobic part of the signal sequence lines up as a pleated sheet, and which bound the pore the chain goes through. In the standard picture the channel itself is the Sec61 translocon, and the ribophorins are subunits of the oligosaccharyltransferase next to it that puts the N-glycan on. That is why glycosylation starts while the chain is still coming through.”',
 cn:'<span class="pg">p110</span> 书 vs 通用：书说 ribophorin 围孔，通用说 Sec61。<b>卡上说书的，被追问再补通用。</b>这条顺便接卡 13 的「N-糖基化是共翻译的」。'},
{r:'高', q:'What is selective proteolysis?',
 en:'“Hydrolysis of specific peptide bonds in a protein by a protease that recognises a particular sequence or residue. Digestion, by contrast, takes the chain apart. The textbook calls the second stage of processing selective proteolysis. For proinsulin it is a trypsin-like enzyme, which cuts after basic residues, followed by a carboxypeptidase that trims the basic dipeptide left behind. It is a covalent modification of the backbone, and it is irreversible.”',
 cn:'<span class="pg">p111 p064</span> 「trypsin 样 = 切碱性残基之后」：书 Tab. 5.1（p116）给了各蛋白酶的专一性。'},
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方。', items:[
{r:'高', q:'Why is the middle of the signal peptide hydrophobic?',
 en:'“Because that is the part that has to enter the membrane. The textbook says it directly: the hydrophobic middle sinks into the non-polar ER membrane while the charged end stays outside, and that insertion, together with the ribophorins, is what forces the pore open. A charged or polar stretch would stay in the water. A hydrophobic one partitions into the lipid — the same reason a membrane-spanning helix is hydrophobic.”',
 cn:'<span class="pg">p110</span> 落在热力学：疏水段进脂相是自由能下降的（疏水效应，卡 x_bonds）。'},
{r:'高', q:'Why is the signal at the N-terminus rather than the C-terminus?',
 en:'“Because the N-terminus is made first. The signal codons follow the initiation codon, so the signal is the first part of the chain to emerge from the ribosome. SRP can bind it and dock the ribosome before the rest of the protein exists, which is what makes the translocation co-translational. A C-terminal signal would only be readable after the whole chain was already in the cytosol.”',
 cn:'<span class="pg">p110</span> 前半句是书的（信号密码子紧接起始密码子），后半句是推论。通用补充：膜蛋白可以用内部的 signal-anchor 序列，不切——标 general。'},
{r:'高', q:'Why does the pancreas also secrete a trypsin inhibitor?',
 en:'“Because trypsin activates trypsinogen, so the reaction is autocatalytic, and it also activates chymotrypsinogen and the procarboxypeptidases. So a trace of trypsin in the wrong place would set off the whole cascade. The textbook says the inhibitor does two things: it protects trypsin against its own autocatalytic breakdown, and it prevents premature activation of the other zymogens in the intestinal content.”',
 cn:'<span class="pg">p118</span> 书原话两个功能。通用补一句：胰腺炎就是这套保护失灵——要说就说 generally。'},
{r:'高', q:'Why is proinsulin made as one chain rather than two?',
 en:'“Because two separate chains would have to find each other and pair three specific cysteines correctly. In proinsulin the C-peptide holds the A and B chains in register, and the three disulfides form. The textbook says they form with oxidised glutathione, in proinsulin. Only then is the connector cut out. The propeptide is a folding aid here, not an activity lock.”',
 cn:'<span class="pg">p113 p111</span> 这条跟卡 13 的 PDI / 氧化型谷胱甘肽接上。「折叠辅助 vs 活性锁」是通用区分。'}
]},

{g:'怎么发现的', gn:'书只说「按信号理论」，人名年份都是 general。', items:[
{r:'中', q:'How was the signal hypothesis established?',
 en:'“Generally: Günter Blobel and Bernhard Dobberstein, in 1975, translated the mRNA of a secreted protein in a cell-free system. Without ER membranes the product was longer, because it still had the signal, and added protease digested it. With ER microsomes the product was shorter, the signal gone, and protected from protease, because it was inside the vesicles. So cleavage and translocation happen together, at the ER. Blobel’s Nobel Prize for it was 1999. The textbook just says ‘signal theory’.”',
 cn:'<span class="pg">p110</span> 书上只有「<i>according to the signal theory</i>」这一句，其余 general。<b>被问时先说实验逻辑，人名年份放最后。</b>'},
{r:'中', q:'How was proinsulin discovered?',
 en:'“Generally: Donald Steiner, in 1967, labelled a human insulin-producing tumour with radioactive amino acids and followed the label over time. It appeared first in a single larger chain and only later in insulin, so the two-chain hormone had to come from a one-chain precursor. That precursor was proinsulin, and the piece removed was the C-peptide.”',
 cn:'全条 general；书只有 proinsulin 的结构（p111）。'}
]},

{g:'陷阱', gn:'每条都是一个说错就被抓的地方。', items:[
{r:'高', q:'Does insulin have a signal peptide?',
 en:'“No. Preproinsulin has one. It is cut off by signal peptidase in the ER before the protein has even finished folding, so neither proinsulin nor insulin carries it. Insulin also no longer has the C-peptide.”',
 cn:'<span class="pg">p111</span> 「成熟蛋白没有信号肽」——这条是全卡第一陷阱。'},
{r:'高', q:'Is zymogen activation an allosteric regulation?',
 en:'“No. Allosteric regulation is non-covalent and reversible — a metabolite binds at a separate site and leaves again. Zymogen activation is covalent and irreversible: a peptide bond is hydrolysed and the fragment is gone. The textbook puts it with the covalently modulated enzymes, next to phosphorylation — but phosphorylation is reversible and this is not.”',
 cn:'<span class="pg">p064 p222</span> 三种调控的区分：别构（非共价、可逆）· 磷酸化（共价、可逆）· 酶原激活（共价、不可逆）。卡 18/19 那边有别构。'},
{r:'高', q:'Do all secreted proteins have a propeptide?',
 en:'“No. The textbook says secreted proteins are often made as preproteins or preproproteins — often, not always. Generally every protein that enters the ER has a signal, but the propeptide is optional: it is there when activity or assembly has to wait. So pre is the rule, pro is the exception.”',
 cn:'<span class="pg">p110</span> 书上那个词是 <i>often</i>（不是「总是」）。「只有」「都」是邀请函——不要说「所有分泌蛋白都是 preproprotein」。'},
{r:'中', q:'The textbook says removing the signal turns a preproprotein into a preprotein. Is that right?',
 en:'“That line on page 111 is a slip. By the textbook’s own definition on the page before, the pre-forms are the ones that still carry the signal sequence. So once the signal is removed, what is left is the proprotein, which still has the propeptide. The example on the same page says it correctly: preproinsulin minus the signal is proinsulin.”',
 cn:'<span class="pg">p111 p110</span> 回 300 dpi 原图核过，书印的就是 preprotein。<b>用书 p110 的定义打书 p111 的这一句</b>，同页的 preproinsulin → proinsulin 例子是第二个证人。'},
{r:'中', q:'Do mitochondrial proteins use the same signal?',
 en:'“Generally, no. Proteins made in the cytosol for the mitochondrion carry their own N-terminal targeting sequence. It is a different pattern, read by receptors in the mitochondrial membranes rather than by SRP, and cut off inside by a mitochondrial processing peptidase. Nuclear proteins carry an internal nuclear localisation signal that is never cut. The ER signal is one address among several. The textbook only describes the ER one.”',
 cn:'全条 general；书只有 ER 这一套。别把「signal peptide」说成所有靶向序列的总称。'}
]},

{g:'相邻考点', gn:'他从这题走出去会到的地方，各给一句，指到那张卡。', items:[
{r:'高', q:'What happens to the protein on this route besides the cleavages?',
 en:'“The modifications of the secretory route are these. N-glycosylation starts in the ER membrane while the chain is still coming through. Disulfide bonds are formed and reshuffled by protein disulfide isomerase in the ER cisternae. Collagen is hydroxylated there and the clotting factors γ-carboxylated. In the Golgi the glycan is finished, the propeptide is cut, and mannose-6-phosphate sends lysosomal proteins off.”',
 cn:'<b>全部在卡 13</b>，这里只说一句。<span class="pg">p111 p112 p113</span>'},
{r:'中', q:'What is the initiation codon?',
 en:'“AUG, which codes for methionine, or in bacteria formylmethionine at the start. Because AUG also codes internal methionines, the ribosome finds the right one by pairing the mRNA with its 16S rRNA at the Shine-Dalgarno sequence, about ten nucleotides upstream in E. coli. The signal codons come immediately after it, which is why the signal peptide is N-terminal.”',
 cn:'<span class="pg">p094 p097 p110</span> 翻译那段书（p092–p101）没有题，但这题和卡 12 从两边夹着它。'},
{r:'中', q:'What other kinds of covalent modulation of enzymes are there?',
 en:'“The textbook gives two. The first is reversible phosphorylation: a kinase puts a phosphate on a serine, threonine or tyrosine hydroxyl, and a phosphatase takes it off. The second is the irreversible activation of zymogens by partial proteolysis. Both are covalent, but only the first can be undone. Allosteric regulation is the non-covalent alternative.”',
 cn:'<span class="pg">p063 p064 p222</span> 卡 18/19 的地盘。溶酶体（M6P）在卡 13。'}
]},

{g:'桥回主场', gn:'实验室知识，不是书的。每条说清是自己的构建体，不是教科书。', items:[
{r:'高', q:'What signal sequence do you use in yeast display?',
 en:'“The display vector carries a secretion signal in front of the Aga2p fusion. In the standard yeast-display system it is the Aga2p signal sequence itself. Other yeast expression vectors use the α-factor leader, which is a genuine prepro sequence. It has a signal cut by signal peptidase in the ER and a pro-region cut in the Golgi by the Kex2 protease. That protease cleaves after a lysine-arginine pair. Either way the fusion goes through the ER and the Golgi and ends up on the surface.”',
 cn:'<b>lab 知识。</b>具体用的是哪个 leader 看你自己的载体图；考场上说「my vector carries」，不说型号。'},
{r:'中', q:'And in E. coli?',
 en:'“A bacterial signal peptide such as pelB or OmpA in front of the protein sends it through the Sec machinery into the periplasm. There the signal is removed by the bacterial signal peptidase and disulfides can form, because the periplasm is oxidising and has the Dsb enzymes. It is the same logic as the ER signal — a hydrophobic N-terminal stretch, cut off after crossing. The membrane and the machinery are different.”',
 cn:'<b>lab 知识。</b>周质与二硫键在卡 13 也有。'},
{r:'高', q:'Where do you put the His-tag, and why?',
 en:'“After the signal sequence, or at the C-terminus — never in front of the signal, because everything before the cleavage site leaves with the signal peptide. If the construct also has a pro-region, the tag has to sit after that cleavage site too. And the residues right after the cut affect how efficiently signal peptidase cleaves, so I keep the junction as it is in the parent vector.”',
 cn:'<b>lab 知识。</b>这条是 pre/pro 两个词在实验台上的直接后果，也是他最容易顺着问的一步。'},
{r:'中', q:'How would you check that the signal was actually cleaved?',
 en:'“By the N-terminus of the product: N-terminal sequencing or mass spectrometry of the purified protein shows whether it starts where the cleavage site predicts, and on a gel the cleaved protein runs slightly smaller than the uncleaved one. If the signal were still on, the protein would also be sitting in the membrane fraction rather than in the secreted or periplasmic fraction.”',
 cn:'<b>lab 知识。</b>落在测量限制：能看见的是 N 端和大小，不是切的过程。'}
]}
]
});
