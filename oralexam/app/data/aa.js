/* 卡 aa · List all proteinogenic amino acids and describe one characteristic property of each.
   题库 #1（S1 Biochemistry 1 ＋ S2 Biochemistry 10）· 导师写过两遍
   出处 Biochemie OCR p021–p026（§2.1 全节：分组 p021 · 稀有氨基酸 p022 · 酸碱与甘氨酸滴定 p023 ·
        立体化学与紫外吸收 p024 · 反应 p024–p025 · 肽键 p026）；
        每种氨基酸「在哪里干活」的页码散在全书：p027 p029 p031 p032 p034 p036 p046–p049 p061–p063
        p068 p070 p082 p093–p094 p097 p102 p104 p109 p112–p114 p116 p119–p129 p146 p215 p225 p227 p228
   id 用 aa，因为 01 已经是蛋白质结构那张。 */

window.CARDS.push({
id:'aa', n:1, w:3,
q:'List all proteinogenic amino acids and describe one characteristic property of each.',
qcn:'列出全部蛋白原氨基酸，并各说一个特征性质',
sub:'主干说完约 90 秒 · 口试他多半只说 “Name the amino acids.” 然后随手挑一个问 “and what is characteristic about it?”',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'先定义、再划边界、再给共同骨架。二十个名字是第四步，不是第一步——先报名字等于把结构送给他挑。'},
 {n:'01', t:'定义',
  big:'氨基酸 = <b>同时带一个羧基和一个氨基</b>的有机物；蛋白原的那 20 个，<b>氨基永远在 α 碳上</b>',
  en:'“An amino acid is an organic compound that carries both a <b>carboxyl group</b> and an <b>amino group</b>. Living organisms contain many such compounds, but a small group of twenty has a special position: they are the building blocks of proteins. In all of them the amino group sits on the <b>α-carbon</b> — the carbon next to the carboxyl. They are also the starting material for every nitrogen compound the organism needs.”',
  note:'书 p021 开篇三句，照着说。<b>「α 碳」要点名</b>——它是后面手性、两性离子、肽键三件事共用的那个原子。<span class="pg">p021</span>'},
 {n:'02', t:'proteinogenic 是什么意思',
  big:'<b>被装进蛋白质、而且有密码子编码</b>的那 20 个；稀有的（羟脯氨酸）是翻译后改出来的，<b>没有密码子</b>',
  en:'“<b>Proteinogenic</b> means the amino acids that are built into proteins <b>and for which a genetic code exists</b> — twenty of them. The textbook draws two further circles. Rare ones are found in some proteins: 4-hydroxyproline and 5-hydroxylysine in collagen, desmosine in elastin. They are derivatives, made by modifying a residue <b>already in the chain</b>, and there is no codon for them. And over a hundred and fifty amino acids occur in cells, free or bound, but <b>never in proteins</b>. Examples: citrulline and ornithine of the urea cycle, β-alanine in coenzyme A, D-glutamate in bacterial cell walls.”',
  note:'三个圈：<b>有密码子的 20 个 → 翻译后改出来的 → 根本不进蛋白的</b>。「没有密码子」这条边界跟卡 13 的定义共用。<span class="pg">p021 p022 p023</span>',
  good:'<b>第 21 个：书自己给了。</b>p093 table 4.3 的脚注：终止密码子 UGA 在 mRNA 有特定序列（<b>SECIS 元件</b>）时被读成 <b>selenocysteine</b>。<br>“Strictly there is a twenty-first: the textbook’s own codon table notes that UGA, normally a stop, is read as <b>selenocysteine</b> when the mRNA carries a SECIS element. So ‘twenty’ is the standard set, with selenocysteine as the coded exception.”<span class="pg">p093</span>'},
 {n:'03', t:'共同骨架 ＋ 怎么画',
  big:'一个 α 碳上挂四样：<b>H · NH₂ · COOH · R</b>。只有 R 不同；<b>除 proline 外都有自由的 α-氨基</b>',
  en:'“Every one of the twenty has the same backbone: one α-carbon carrying a <b>hydrogen</b>, an <b>amino group</b>, a <b>carboxyl group</b>, and a <b>side chain</b> called R. Everything that distinguishes them is in R. That is where the one <b>characteristic property</b> of each amino acid lives. The property is what its side chain can do — its charge, its polarity, its ring, its sulfur. All of them except proline have a free, unsubstituted α-amino group.”',
  note:'<b>画的顺序（他让你画就这样画）：</b>① 中间写一个 C，标 α；② 左边 H₂N–，右边 –COOH，上面 H，下面 R。<b>glycine</b>：把 R 换成 H；<b>alanine</b>：把 R 换成 CH₃。<b>两性离子</b>：左边写 H₃N⁺–，右边写 –COO⁻，其余不动。<b>L 型的 Fischer 投影</b>：COOH 在上、R 在下、<b>NH₂ 在左</b>（书 p024 就是这样画 L-serine 的）。<span class="pg">p021 p024</span>'},

 {g:'归类', gn:'书按侧链性质分四组，glycine 放不进去。先报组和数目，再报名字——这样他挑哪一个，你都已经说了它属于哪类。'},
 {n:'04', t:'书的四组',
  big:'<b>非极性 8</b>（5 脂肪 ＋ 2 芳香 ＋ 1 含硫）· <b>极性不带电 6</b>（3 羟基 ＋ 2 酰胺 ＋ 1 巯基）· <b>带负电 2</b> · <b>带正电 3</b> · <b>glycine 单列</b> = 20',
  en:'“The textbook divides them by the <b>nature of the side chain</b> into four groups. <b>Nonpolar</b>, eight. Five have an aliphatic chain: alanine, valine, leucine, isoleucine, proline. Two have an aromatic ring: phenylalanine and tryptophan. One contains sulfur: methionine. <b>Polar but uncharged</b>, six. Three have a hydroxyl: serine, threonine, tyrosine. Two have an amide: asparagine and glutamine. One has a thiol: cysteine. <b>Negatively charged</b>, two: aspartate and glutamate, each with a second carboxyl. <b>Positively charged</b>, three: lysine with a second amino group, arginine with a guanidine group, histidine with a weakly basic imidazole. And <b>glycine</b>, which the textbook says is very hard to place. Its side chain is just a hydrogen. Eight, six, two, three, and glycine: twenty.”',
  note:'<b>数目是骨架</b>：8 ＋ 6 ＋ 2 ＋ 3 ＋ 1 = 20，漏了谁一数就知道。<br><b>书和 Lehninger 不一样的两处，主动说</b>：书把 <b>tyrosine 放进极性组</b>（Lehninger 放芳香组），把 <b>glycine 单列</b>（Lehninger 放非极性脂肪组）。“Lehninger files tyrosine with the aromatic ones and glycine with the aliphatic ones — same twenty, different drawers.”<span class="pg">p021</span>',
  warn:'书还有一句自己的判断：<b>极性组里最极性的是 cysteine 和 tyrosine</b>（p021 原话）。通用教材一般把 Ser/Thr 当更极性的。<b>别主动说这句</b>；他问「哪个最极性」再照书答，并加一句 “that is the textbook’s ranking”。'},
 {n:'05', t:'二十个，各一条',
  big:'名字 · 三字母/单字母 · <b>书给它的那一条性质</b>',
  en:'“For each I will give the group it belongs to and the one property the textbook attaches to it.”',
  tbl:{head:['氨基酸','码','一句话（照说）','页'], rows:[
   ['<b>Glycine</b>','Gly · G','“The only one with <b>no asymmetric carbon</b> — its side chain is a single hydrogen. The smallest, so it fits where nothing else does: nearly thirty percent of collagen.”','p024 p031'],
   ['<b>Alanine</b>','Ala · A','“The simplest nonpolar side chain, a <b>methyl</b>. Transamination turns it into pyruvate — alanine aminotransferase.”','p021 p120'],
   ['<b>Valine</b>','Val · V','“<b>Branched</b> nonpolar. The residue that replaces glutamate at position six of the β-chain in sickle-cell haemoglobin.”','p021 p027'],
   ['<b>Leucine</b>','Leu · L','“<b>Branched</b> nonpolar. The textbook’s only <b>purely ketogenic</b> amino acid — degraded to acetyl-CoA and acetoacetate.”','p125 p127'],
   ['<b>Isoleucine</b>','Ile · I','“<b>Branched</b> nonpolar, and with threonine one of the two that have <b>two asymmetric carbons</b>.”','p024'],
   ['<b>Proline</b>','Pro · P','“The only one <b>without a free α-amino group</b>: the side chain closes back onto the nitrogen as a <b>pyrrolidine</b> ring. Excluded from the α-helix. Cis peptide bonds occur practically only next to it.”','p021 p029 p027'],
   ['<b>Phenylalanine</b>','Phe · F','“Aromatic — a <b>phenyl</b> ring. Essential. The cell makes tyrosine from it with phenylalanine hydroxylase.”','p021 p127'],
   ['<b>Tryptophan</b>','Trp · W','“Aromatic — an <b>indole</b>, a benzene fused to a pyrrole. Absorbs at 280 nm. It is the amino acid whose synthesis the trp operon controls.”','p024 p104'],
   ['<b>Methionine</b>','Met · M','“Sulfur as a <b>thioether</b>. Its codon AUG is the <b>initiation codon</b>. As S-adenosylmethionine it is the main methyl donor.”','p094 p048'],
   ['<b>Serine</b>','Ser · S','“A <b>hydroxyl</b>. The phosphorylation site of glycogen phosphorylase. The nucleophile of the serine proteases — Ser195 of chymotrypsin. And the O-glycosylation site.”','p063 p062 p036'],
   ['<b>Threonine</b>','Thr · T','“A <b>hydroxyl</b> on a second asymmetric carbon. Phosphorylated and O-glycosylated like serine.”','p024 p113'],
   ['<b>Cysteine</b>','Cys · C','“A <b>thiol</b>, which oxidises very easily to the disulfide: two cysteines become one <b>cystine</b>, the cross-linker of proteins.”','p025'],
   ['<b>Tyrosine</b>','Tyr · Y','“A <b>phenol</b> — aromatic and polar at once. Absorbs at 280 nm. Phosphorylated by tyrosine kinases. Precursor of adrenaline and thyroxine.”','p024 p225 p227'],
   ['<b>Asparagine</b>','Asn · N','“The <b>amide</b> of aspartate. The attachment point of N-linked sugars, through its amide nitrogen. The first amino acid ever isolated, 1806.”','p036 p009'],
   ['<b>Glutamine</b>','Gln · Q','“The <b>amide</b> of glutamate. The cell’s store and carrier of ammonia, made by glutamine synthetase. Nitrogen donor for the purine and pyrimidine rings.”','p123 p068 p070'],
   ['<b>Aspartate</b>','Asp · D','“A <b>second carboxyl</b>, negatively charged. Forms ion pairs. Gives its nitrogen to the urea cycle and to the purine and pyrimidine rings.”','p032 p123 p068'],
   ['<b>Glutamate</b>','Glu · E','“A <b>second carboxyl</b>, negatively charged. Forms ion pairs. The hub of nitrogen metabolism — glutamate dehydrogenase and the transaminases run through it.”','p032 p119 p120'],
   ['<b>Lysine</b>','Lys · K','“A <b>second amino group</b> at the end of the chain — the ε-amino, positively charged. Where biotin and pyridoxal phosphate are attached to their enzymes.”','p021 p049 p121'],
   ['<b>Arginine</b>','Arg · R','“A <b>guanidine</b> group, positively charged. Releases urea in the last step of the urea cycle.”','p021 p123'],
   ['<b>Histidine</b>','His · H','“A weakly basic <b>imidazole</b> — it can give or take a proton near neutral pH, so it is the proton shuttle of active sites, and it binds metals.”','p021 p062']
  ]},
  note:'三字母码书 table 2.1 给全了；<b>单字母码书只举了 Ala–A、Tyr–Y 两个例子</b>（p021），其余是通用知识。「照说」列里每一句都是英文整句，<b>他挑到哪个就说哪一句</b>。<br>每行第一个加粗的词是它的<b>官能团或环的名字</b>——说属性之前先把那个名字说出口。<span class="pg">p021 p022</span>'},

 {g:'他会挑的那几个', gn:'他随手一点，多半是这几个。每个先说它是什么基团，再说它干什么。'},
 {n:'06', t:'Glycine',
  big:'侧链是一个 <b>H</b> → 没有不对称碳 · 最小 · 书说很难归类 · 胶原近 30%',
  en:'“Glycine’s side chain is a single <b>hydrogen</b>, so the α-carbon carries two identical groups and there is <b>no asymmetric carbon</b>. It is the one amino acid with no L or D form. Being the smallest, it fits where nothing else does: nearly thirty percent of collagen, because in that helix every third side chain points into the axis. It is also abundant in silk fibroin, with alanine and serine. Metabolically it donates atoms to the purine ring, to haem via δ-aminolevulinate, and to glutathione.”',
  note:'「每三个一个朝轴心」这半句是把 p031 两句连起来的推论，卡 01 已经用过。<span class="pg">p024 p021 p031 p034 p068 p146 p047</span><br><br><b>=== 数字从哪来（30% 这一个数） ===</b><br><b>算式</b>：<code>Gly–X–Y 三联重复 → 每 3 个残基里 1 个 Gly → 1/3 ≈ 33%</code>。<br>三股链拧成一条绳，每股上<b>每隔两个残基就有一个侧链被挤向轴心</b>，而轴心只剩得下一个氢原子的空间。所以序列被逼成 Gly–X–Y 的三联重复，甘氨酸的比例<b>上限</b>就是三分之一。<br>实测报<b>接近 30%</b> 而不是 33%，是因为链两端还有不按这个重复排的端肽（telopeptide），把比例稍微拉低。<b>33% 这个算法和端肽的解释都是通用知识</b>，书只给了「胶原里甘氨酸约 30%」这个结果。<br>同一个算法给旁边那个数：X 和 Y 两个位置合起来占三分之二，其中相当一部分被脯氨酸占（Y 位上的常被羟化成 Hyp），<b>Pro ＋ Hyp 合计约 30%</b>——也就是那三分之二的位置里差不多一半。<br><br><b>=== 一句话理解 ===</b><br><b>30% 不是一个测出来的性质，是一个几何配额。</b>三根绳子拧紧，每根每三个位置就有一个被挤到中心，而中心只放得下一个氢——能占那个位置的氨基酸只有一种，所以它必须占到三分之一。<br><b>反过来用这个数更有力</b>：一条链上只要有一个位置该是甘氨酸却换成了别的（哪怕最小的丙氨酸），那一圈就拧不紧——这正是成骨不全（osteogenesis imperfecta）里最常见的那类突变，一个点突变毁掉整条胶原。<b>这一句是通用知识，书里没有。</b>'},
 {n:'07', t:'Proline',
  big:'侧链<b>绕回来接在自己的 α-氮上</b> → 五元 <b>pyrrolidine</b> 环 → 仲胺，「亚氨基酸」→ 进不了 α-helix · cis 肽键几乎只在它旁边',
  en:'“Proline is the one amino acid <b>without a free α-amino group</b>. Its side chain loops back onto its own nitrogen, closing a five-membered saturated ring with one nitrogen — a <b>pyrrolidine</b>. That makes the nitrogen a secondary amine, which is why proline is called an imino acid. Two consequences the textbook gives. The α-helix accepts every proteinogenic amino acid <b>except proline</b>. And the cis form of the peptide bond occurs practically only next to a proline. And with ninhydrin it gives a yellow product instead of the blue-violet one, because the amino group is substituted.”',
  note:'<b>环要叫 pyrrolidine</b>——PESB 那次「the ring」失分的就是这一类。为什么进不了 helix（没有 N–H 可供氢键 ＋ 环锁住一个主链角）是通用解释，在追问里。胶原里它被羟化成 4-hydroxyproline（p031、p112），细胞有专门的 prolyl cis-trans isomerase（p109）。<span class="pg">p021 p029 p027 p024</span>'},
 {n:'08', t:'Cysteine',
  big:'<b>–SH 巯基</b> → 极易氧化成 <b>–S–S–</b>，两个 cysteine 变一个 <b>cystine</b> = 蛋白质的交联剂；重金属成 mercaptide',
  en:'“Cysteine carries a <b>thiol</b>, –SH. The textbook calls its reactions the most important of any side chain: with heavy metals it forms mercaptides, and it oxidises very easily to the disulfide, -S-S-. Two cysteine residues joined that way are together called <b>cystine</b>. Cystine acts as the <b>cross-linking agent</b> of the protein molecule — a covalent bond between two places in the chain. The bond is cleaved in alkali, reduced back to two cysteines by reducing agents, and oxidised further to cysteic acid for amino-acid analysis.”',
  note:'<b>cysteine 是氨基酸，cystine 是两个 cysteine 氧化后连成的二聚体</b>——两个词只差一个字母，追问里有专门一条。它在别处：Fe–S 蛋白（p046）、谷胱甘肽（p047）、ER 里的 protein disulfide isomerase（p113，卡 13）。<span class="pg">p025 p032</span>'},
 {n:'09', t:'Histidine',
  big:'<b>imidazole</b>：五元芳香环、两个氮、<b>弱碱</b> → 在中性 pH 附近能给也能收质子 → 活性中心的质子搬运工；也结合金属',
  en:'“Histidine’s side chain is an <b>imidazole</b>, an aromatic five-membered ring with two nitrogens. The textbook describes it as <b>weakly basic</b>. Weakly basic is the whole point: its pKa is near neutral, so at the pH of the cell part of the rings are protonated and part are not, and the same ring can <b>accept or donate a proton</b>. That is why the textbook lists histidine first among the reactive side chains of active sites, and imidazole among the groups doing acid–base catalysis. The same ring donates a lone pair to metal ions — that is how a His-tag holds on a nickel column.”',
  note:'书说「弱碱性咪唑基」（p021）、活性中心常见 His（p061）、酸碱催化的基团之一（p062）。<b>pKa ≈ 6 这个数是通用知识</b>，书没给；说的时候说 “roughly six, in general references”。His-tag 那条在横向卡 bonds。<span class="pg">p021 p061 p062</span>',
  warn:'<b>PESB 实测失分点</b>：His-tag 靠的是 histidine 的 <b>imidazole</b> 配位镍，<b>不是 lysine</b>，也不是「芳香环」。环要叫名字。'},
 {n:'10', t:'三个芳香的',
  big:'Phe <b>phenyl</b> · Tyr <b>phenol</b> · Trp <b>indole</b>；三个都吸紫外，<b>Tyr 和 Trp 在 280 nm</b> → 测蛋白浓度',
  en:'“Three carry aromatic rings: phenylalanine a plain <b>phenyl</b>, tyrosine a <b>phenol</b>, and tryptophan an <b>indole</b>. A phenol is a phenyl with a hydroxyl, and an indole is a benzene fused to a pyrrole. None of the twenty absorbs visible light, but these three absorb in the ultraviolet, and because proteins contain tyrosine and tryptophan, absorbance at <b>280 nm</b> is the quick way to measure protein concentration. Phenylalanine is essential. The cell hydroxylates it to tyrosine, which is why tyrosine is not. All three are precursors of hormones. Tyrosine gives DOPA, dopamine, noradrenaline, adrenaline and thyroxine. Tryptophan gives melatonin.”',
  note:'<b>书把 tyrosine 归在极性组，不在芳香组</b>——它既芳香又极性，追问里是一条陷阱。cystine 在 240 nm 弱吸收（p024）。trp 操纵子（p104–p105）是 #12 的地盘。<span class="pg">p024 p127 p227 p104</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<b>Lambert–Beer</b> <code>A = ε · c · l</code>。A 是吸光度（无单位），c 是摩尔浓度（M），l 是光程（比色皿宽度，通常 1 cm），ε 是<b>摩尔消光系数</b>（M⁻¹cm⁻¹）——它就是「这个分子有多会吸这个波长的光」。<br>反过来解出浓度：<code>c = A / (ε · l)</code>。<br><br><b>ε 从哪来（这一步才是这条方法的全部窍门）</b>：一个蛋白的 ε₂₈₀ <b>不用测，数出来就行</b>，因为 280 nm 的吸收几乎只来自三样东西：<br><code>ε₂₈₀ ≈ 5500 × n(Trp) + 1490 × n(Tyr) + 125 × n(胱氨酸)</code>（M⁻¹cm⁻¹，通用值，书没有）。<br>有序列 → 数出色氨酸和酪氨酸各几个 → 加起来就是这个蛋白的 ε。<br><br><b>=== 一句话理解 ===</b><br><b>280 nm 测的从来不是「蛋白」，是「色氨酸和酪氨酸的个数」</b>——蛋白只是顺便被算出来的那个。<br>所以卡上那句「只是近似」有了确切含义：两个同样重的蛋白，一个含六个 Trp、一个一个都没有，同样的 A₂₈₀ 会给出差十倍的浓度。<b>Trp 和 Tyr 都没有的蛋白（存在，比如某些小肽），A₂₈₀ 干脆是零，这个方法整个不成立。</b><br>Trp 的 ε 约是 Tyr 的 <b>3.7 倍</b>（5500 比 1490），所以「280 的信号几乎全来自 Trp 和 Tyr」这句里，<b>色氨酸才是主力</b>；一个 Trp 抵将近四个 Tyr。'},
 {n:'11', t:'两个酸 ＋ 两个酰胺',
  big:'Asp · Glu 侧链多一个 <b>–COOH</b>，中性 pH 带负电 → 跟 Lys/Arg 成<b>离子对</b>；Asn · Gln 是它们的<b>酰胺</b>，不带电',
  en:'“Aspartate and glutamate carry a <b>second carboxyl</b> in the side chain, so at neutral pH they are negatively charged. Together with lysine and arginine they form the <b>ion pairs</b> that stabilise a fold — the salt bridges. Glutamate is the hub of nitrogen metabolism: glutamate dehydrogenase removes its amino group oxidatively, the textbook’s nodal reaction, and the transaminases move amino groups onto and off it. Aspartate donates nitrogen to the urea cycle and to the purine and pyrimidine rings. Asparagine and glutamine are their <b>amides</b> — the side-chain carboxyl converted to -CONH₂, so uncharged. Asparagine is where N-linked sugars attach, through its amide nitrogen. Glutamine is how the cell stores and carries ammonia, made by glutamine synthetase.”',
  note:'<b>Asp/Asn、Glu/Gln 是四个名字两对</b>；单字母 D/N、E/Q。凝血因子上的 glutamate 会被 γ-羧化（p112，卡 13）。<span class="pg">p021 p032 p119 p120 p123 p068 p070 p036</span>'},
 {n:'12', t:'三个碱',
  big:'Lys <b>ε-氨基</b>（伯胺）· Arg <b>guanidine</b> · His <b>imidazole</b>（弱）——三个碱三种基团，强度不同',
  en:'“Three are basic, and each with a <b>different group</b>. Lysine has a <b>second amino group</b> at the end of a four-carbon chain — the ε-amino, a primary amine, protonated at neutral pH. That free amine is where enzymes attach cofactors: biotin by an isopeptide bond, pyridoxal phosphate as an aldimine, and DNA ligase carries its AMP on a lysine. Arginine has a <b>guanidine</b> group — the most basic side chain, charged at any physiological pH. It is also where urea comes from: arginase splits it into urea and ornithine. Histidine has the <b>imidazole</b>, only weakly basic, which is what makes it useful in catalysis.”',
  note:'书：lysine「第二个氨基」、arginine「胍基」、histidine「弱碱性咪唑基」（p021）。<b>「arginine 最碱、pKa 约 12.5」是通用知识</b>，书没给数。biotin–lysine p049，PLP–lysine p121，ligase–lysine p082，尿素循环 p123–p125。<span class="pg">p021 p049 p121 p082 p123</span>'},
 {n:'13', t:'三个羟基',
  big:'Ser · Thr（醇羟基）· Tyr（酚羟基）→ <b>磷酸化的位点</b>；Ser · Thr → <b>O-糖基化</b>；Ser 是丝氨酸蛋白酶的亲核基团',
  en:'“Serine and threonine carry an alcohol <b>hydroxyl</b>, and tyrosine a phenolic one. These three hydroxyls are the <b>phosphorylation sites</b>: a kinase makes a phosphate ester there, which changes the charge and hence the conformation. Glycogen phosphorylase is switched on by phosphorylating a serine in its active site, and the insulin receptor phosphorylates its own tyrosines. Serine and threonine are also where O-linked sugars attach. And the serine hydroxyl is the nucleophile of the serine proteases — Ser195 in chymotrypsin.”',
  note:'磷酸化 p113–p114、p063、p225；O-糖基化 p036、p112；Ser195 p062；丝氨酸蛋白酶 p116。threonine 和 isoleucine 各有<b>两个不对称碳</b>（p024）。serine 在代谢里是<b>一碳单位的供体</b>（p048）、跟 glycine 互变（p122、p126）。<span class="pg">p113 p063 p225 p036 p062</span>'},
 {n:'14', t:'Methionine ＋ 三个支链',
  big:'Met：<b>硫醚</b>，AUG = 起始密码子，SAM 供甲基 · Val Leu Ile：<b>支链疏水</b>，藏在核心',
  en:'“Methionine’s sulfur is a <b>thioether</b>, -S-CH₃, so unlike cysteine it has no free thiol and cannot form disulfides. Its codon AUG is the <b>initiation codon</b>, so every chain starts with methionine, formylmethionine in prokaryotes, usually trimmed off afterwards. Activated with ATP it becomes S-adenosylmethionine, the main methyl donor. Valine, leucine and isoleucine are the <b>branched-chain</b> nonpolar ones. They pack into the hydrophobic core, and they are the ones that transamination and gluconeogenesis handle as a group. Leucine is the textbook’s only purely ketogenic amino acid. Methionine, isoleucine and valine are broken down to succinyl-CoA.”',
  note:'AUG p094、fMet p097/p102、SAM p048；支链 p169；ketogenic p125；succinyl-CoA p128。<b>Lehninger 把 lysine 也算纯生酮</b>，书只算 leucine——他要是问就说 “the textbook counts only leucine, and Lehninger adds lysine”。<span class="pg">p094 p102 p048 p125 p128</span>'},

 {g:'酸碱与立体', gn:'书 §2.1.2 整节。pH 是她自报的弱点，所以这两点要能正面定义。'},
 {n:'15', t:'两性离子 · pKa · pI',
  big:'低 pH 是<b>阳离子</b>，高 pH 是<b>阴离子</b>，中间是<b>两性离子</b>（两头都带电、净电荷零）；滴定曲线两个拐点 = 两个 pK；<b>pI = 两个 pK 的平均</b>',
  en:'“Because both groups ionise, the form of an amino acid depends on pH. At low pH the carboxyl is protonated and the molecule is a <b>cation</b>. At high pH the ammonium group loses its proton and it is an <b>anion</b>. In between it is a <b>dipolar ion</b>, the zwitterion — carboxylate negative, ammonium positive, net charge zero. The textbook shows this as the titration curve of glycine. There are two inflection points, and they are the <b>pKa</b> of the carboxyl and of the amino group. A pKa is the pH at which that group is half protonated. And the pH at half the titrant consumption is the <b>isoelectric point</b>, pI, the average of the two pKa values. Side chains add further ionisable groups, so each amino acid has its own pI, and that is what ion-exchange chromatography and electrophoresis separate them by.”',
  note:'p023 原文 ＋ p024 的 pI = (pK₁ + pK₂)/2。<b>「zwitterion」这个词书没用</b>，书叫它「ammonium form」（书上印的词的英译）/ 两性形式；词是通用的，说的时候不用标。<b>pKa 的定义</b>（半质子化时的 pH）是通用定义，书直接用没解释。<br>⚠ <b>书把 –NH₃⁺ 印成「季铵」</b>（书上那个词译过来就是 <i>quaternary ammonium</i>），<b>这是书的笔误</b>：季铵的氮上接<b>四个</b>碳、永久带正电、根本放不掉质子；氨基酸的 –NH₃⁺ 氮上只接<b>一个</b>碳，是<b>伯铵</b>，而且它必须能放掉一个质子，否则 pK₂ ≈ 9.6 那个平台就不存在。<b>别跟着说 quaternary。</b><span class="pg">p023 p024</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>pI = (pK₁ + pK₂) / 2</code>，其中 pK₁、pK₂ 是<b>夹住两性离子的那两个</b> pK。<br><br><b>四步推导（他问「为什么是平均」就照这个说）</b>：<br>① 甘氨酸有两个可解离基团，所以有三种形态，按 pH 从低到高：<code>⁺H₃N–CH₂–COOH（净 +1） ⇌ ⁺H₃N–CH₂–COO⁻（净 0） ⇌ H₂N–CH₂–COO⁻（净 −1）</code>。<br>② 中间那个就是两性离子。<b>「净电荷零」不等于「不带电」</b>——它同时带一个正一个负，只是对外抵消；所以它极性极大、熔点高、在水里溶得好，只是在电场里不动，而不是像烷烃那样真的没有电荷。<br>③ 净电荷要正好为零，就要求 <b>+1 那一形态和 −1 那一形态一样多</b>（互相抵消）；中间的 0 形态有多少都不影响净电荷。<br>④ 用 Henderson–Hasselbalch 把这两个形态的浓度写出来，令两者相等，两条式子相加除以二，中间形态正好被消掉 → <code>pH = (pK₁ + pK₂)/2</code>。<br><br><b>滴定曲线为什么是两个平台</b>：纵轴是 pH、横轴是加进去的碱。<b>平台 ＝ 加了碱 pH 却几乎不动 ＝ 碱被某个基团吃掉了，没留在溶液里。</b>这只在某个基团正「半推半就」时发生，也就是 pH 落在它的 <code>pK<sub>a</sub> ± 1</code> 之内（这一段里该基团 10%–90% 解离，就是它的<b>缓冲区</b>）。<br><b>两个可解离基团 → 两个 pK → 两段缓冲区 → 两个平台</b>；两个平台之间那一段最陡的（加一点碱 pH 就窜上去），是<b>等当量点</b>，也就是 <b>pI</b>——羧基刚全放完、氨基还一个没放，溶液里几乎全是两性离子，没有东西缓冲。<br>带可解离侧链的（Asp、Glu、Lys、Arg、His、Cys、Tyr）多一个基团 → <b>三个 pK、三个平台</b>。<br>⚠ 数字是通用值：甘氨酸 pK₁ ≈ 2.3、pK₂ ≈ 9.6 → pI ≈ 6.0。书 figure 2.1 上印着，OCR 没读出来。<br><br><b>=== 一句话理解 ===</b><br><b>pI 就是「带正电的那一份和带负电的那一份正好一样多」的那个 pH——所以它当然落在两个 pK 的正中间。</b>pH 往左一点，多出来的质子把分子推成阳离子；往右一点，被夺走的质子把它拉成阴离子。<br><b>而两个平台，就是这个分子两次「不情愿地交出质子」的过程</b>：缓冲不是氨基酸的一项额外本领，就是「解离到一半时最难被推动」这件事本身。所以缓冲区必然长在 pK 上，pI 必然长在两个缓冲区中间那个最不缓冲的地方。<br><b>这也是为什么 pI 能拿来分离蛋白</b>：在某个缓冲液 pH 下，pI 低于它的带负电、pI 高于它的带正电、pI 正好等于它的不带净电——电泳和离子交换分开的就是这个差别，而不是分子的大小。',
  warn:'<b>数字待核。</b>甘氨酸曲线上的 pK 值在 figure 2.1 里，OCR 没读出来。通用值 pK₁ ≈ 2.3、pK₂ ≈ 9.6、pI ≈ 6。他要数就说 “roughly two and ten, so a pI near six” 并说明是 general values。蛋白质的 pI：在那个 pH 净电荷零、电泳不动、<b>溶解度最低</b>（p038）。'},
 {n:'16', t:'手性 · D/L',
  big:'R ≠ H 就至少一个不对称碳 → 光学活性；<b>全部是 L 型，只有 glycine 例外</b>（它没有手性）；Thr 和 Ile 有两个不对称碳',
  en:'“Whenever R is not hydrogen the α-carbon carries four different groups, so it is an <b>asymmetric carbon</b> and the amino acid is optically active. Glycine is the exception with none. Threonine and isoleucine have <b>two</b>. Every amino acid found in proteins is of the <b>L</b> configuration. The textbook derives L-serine from L-glyceraldehyde, amino group on the left in the Fischer projection, the same convention as for sugars. D-amino acids exist, but outside proteins: the textbook’s example is D-glutamate in bacterial cell walls.”',
  note:'p024 整段。<b>L/D 是构型，不是旋光方向</b>——它说的是跟甘油醛比的空间排布，跟左旋右旋（+/−）无关；这一句是通用知识，追问里有。<span class="pg">p024 p023</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>立体异构体数 = 2ⁿ</code>，n = 不对称碳的个数（前提是分子里没有内部对称面）。<br><b>为什么是 2 的幂</b>：每一个不对称碳都是一个独立的二选一（四个基团有两种互为镜像的排法），n 个独立的二选一就是 2 × 2 × … = <code>2ⁿ</code>。<br><br><b>数到这二十个头上</b>：<br>① <b>十七个</b>（除 Gly、Thr、Ile）只有 α 碳一个不对称碳 → <code>2¹ = 2</code> → 一个 L 一个 D，互为<b>对映体</b>。<br>② <b>Thr 和 Ile</b> 各有两个（α 碳 ＋ 侧链上一个）→ <code>2² = 4</code> → L、D，外加两个 allo 型（L-allo-threonine、D-allo-threonine）。<b>蛋白里只用四个里的一个。</b><br>③ <b>Gly</b>：α 碳上是 <code>H · H · NH₂ · COOH</code>，<b>四个里有两个一样</b>，判据不成立 → n = 0 → <code>2⁰ = 1</code>。只有一种分子，没有 L 也没有 D。<br>「不对称碳」的判据就一条：<b>四个取代基两两互不相同</b>。有两个相同，把分子沿那两个之间翻过去就跟自己重合，镜像和本体是同一个东西。<br><br><b>=== 一句话理解 ===</b><br><b>2ⁿ 数的是「有多少个独立的左右可以拨」</b>——一个不对称碳就是一个只有两档的开关，n 个开关能摆出 2ⁿ 种组合。glycine 那个开关根本不存在（两只手一模一样，拨过去等于没拨），所以它只有一种。<br><b>同一个 2ⁿ 在卡 06 的糖那边原样再来一次</b>：醛己糖有四个不对称碳 → <code>2⁴ = 16</code> 个，一半 D 一半 L。<b>糖和氨基酸用同一个参照物（glyceraldehyde）、同一个 Fischer 约定、同一个 2ⁿ</b>——说出这一句等于把两章接起来。<br>（2ⁿ 和 allo-threonine 都是通用有机化学；书只给了「Thr 和 Ile 有两个不对称碳」这个事实。）'},

 {g:'反应 ＋ 收尾', gn:'书 §2.1.3 是他「怎么发现的」那类问题的来源。最后一句停住，一句伸出去。'},
 {n:'17', t:'书给的反应',
  big:'<b>ninhydrin</b>（蓝紫；proline 黄）· <b>DNFB</b>（黄色 DNP 衍生物 → 认 N 端）· Schiff 碱（→ PLP 代谢）· 巯基氧化成二硫',
  en:'“The textbook gives four reactions. Heating with <b>ninhydrin</b> gives an intensely coloured product: blue-violet with a free amino group, yellow with proline, whose amino group is substituted. That is how amino acids are detected. The reagent <b>1-Fluoro-2,4-dinitrobenzene</b> gives yellow dinitrophenyl derivatives under mild conditions. Because it labels only a free α-amino group it identifies the <b>N-terminal</b> residue of a peptide — Sanger’s reagent, the tool behind the first protein sequence. Amino groups form reversible <b>Schiff bases</b> with aldehydes, which is the chemistry of pyridoxal phosphate. And the cysteine thiol oxidises to the disulfide.”',
  note:'p024–p025。碳链那头：羧基能成酰胺（肽键）、酯、酰卤、叠氮——肽合成用；氨基能被酰化来保护。「Sanger’s reagent」这个叫法是通用的，书只写化学名；insulin 1953 Sanger 在 p009、p228。<span class="pg">p024 p025 p009</span>'},
 {n:'18', t:'落点',
  big:'为什么是<b>这 20 个</b>？因为遗传密码把它们定死了，而密码是<b>全宇宙通用</b>的——再往下是密码起源，进化史',
  en:'“Why these twenty and no others is fixed by the <b>genetic code</b>: sixty-four triplets, sixty-one of them coding, and the code is universal across organisms. So every protein in every organism is built from the same set. Why the code settled on these twenty rather than some other twenty is a question about its origin: evolutionary history rather than something we can derive from chemistry.”',
  note:'p094：三联体、64 组合、简并、通用。<b>说完这句就停</b>——它是答案，也是体面的收手。<span class="pg">p094</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>算式</b>：<code>4³ = 64</code>。4 是碱基的种类数（A·G·C·U），3 是一个密码子的位数；<b>每一位都能独立取四个值里的任何一个</b>，所以 4 × 4 × 4 = 64 种三联体。<br><code>64 − 3 个终止密码子（UAA · UAG · UGA） = 61 个编码的</code>；<code>61 ÷ 20 ≈ 3</code> → 平均每个氨基酸摊到三个密码子，这就是<b>简并</b>。<br><br><b>为什么非得是三位</b>（他问「为什么不是两位」就照这个说）：要给 20 个氨基酸各一个编号，<code>4¹ = 4</code> 不够、<code>4² = 16</code> 还差 4 个、<code>4³ = 64</code> 够了而且富余。<b>三是能装下二十的最小位数</b>，富余的部分就变成了简并。<br><br><b>=== 一句话理解 ===</b><br><b>密码表只回答了「最多能有多少个」，没回答「为什么正好是二十个」</b>：64 个格子装得下的远不止 20 个，所以这个数量不是化学逼出来的，是历史定下来的——这正是这张卡停在「进化史」而不是继续往下推的理由。<br>而 61 个格子分给 20 个东西，富余的那部分不是浪费：<b>多出来的格子被当成缓冲用掉了</b>，同义密码子大多只差第三位，所以第三位上的一个点突变常常什么都不改。<br>（「最小位数」和「第三位缓冲」是通用推理；书给的是 64、61、简并、通用这四个事实。）'},
 {n:'19', t:'留口子',
  big:'主动把话引到<b>定点突变</b>和<b>非天然氨基酸</b>——那是你天天做的',
  en:'“Where I meet this list in practice is <b>site-directed mutagenesis</b>: choosing which residue on a binding surface to change, and to what. An alanine removes a side chain without disturbing the backbone, and a charge swap tests an ion pair. Then I measure what the change does to binding. I have also worked with a twenty-first, unnatural amino acid put in through a repurposed stop codon — the same trick the cell uses for selenocysteine.”',
  note:'<b>两个钓饵</b>：alanine scanning（alanine = 把侧链删成甲基而不动骨架，通用技术）和 pBpa（对氨基酸 p-benzoyl-phenylalanine，光交联，走 amber 密码子 ＋ 正交的 aminoacyl-tRNA synthetase/tRNA 对）。<b>不点病原体的名字</b>，说 “a binding surface”。<br>⚠ 发音：<b>aminoacyl</b>（a-MI-no-A-cyl），PESB 那次说成了 acryl。'}
],
end:'<b>顺序不能乱：定义 → proteinogenic 的边界 → 共同骨架 → 四组带数目 → 名字 → 他挑哪个说哪个。</b>二十条性质不用背成一串，背成「它的基团是什么 → 所以它干什么」。现在切到演练，出声说一遍。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：带一个羧基 ＋ 一个氨基的有机物；蛋白原的 20 个氨基永远在 α 碳',
 '“An amino acid carries both a carboxyl and an amino group. In the twenty that build proteins the amino group is on the α-carbon.”',
 '书 p021 开篇。α 碳要点名。'],
['<b>proteinogenic</b>：装进蛋白质 ＋ 有密码子；羟脯氨酸是翻译后改的，没有密码子；selenocysteine 是书自己给的第 21 个',
 '“Proteinogenic means built into proteins and coded for — twenty of them. The rare ones like hydroxyproline are made after translation and have no codon.”',
 'p021 p022；SECIS 脚注 p093。'],
['<b>共同骨架</b>：α 碳上 H · NH₂ · COOH · R；除 proline 外都有自由 α-氨基',
 '“One α-carbon carrying a hydrogen, an amino group, a carboxyl group and a side chain R — everything that differs is in R.”',
 '画图从这里开始。'],
['<b>四组带数目</b>：非极性 8 · 极性 6 · 负 2 · 正 3 · glycine 单列 = 20',
 '“Nonpolar eight, polar uncharged six, negatively charged two, positively charged three, and glycine.”',
 '数目是骨架。Tyr 在极性组、Gly 单列是书的分法。'],
['<b>Glycine</b>：侧链 H → 无不对称碳 → 最小 → 胶原 30%',
 '“A single hydrogen for a side chain, so no asymmetric carbon. The smallest, nearly thirty percent of collagen.”',
 'p024 p031。'],
['<b>Proline</b>：侧链绕回 α-氮 → pyrrolidine → 无自由氨基 → 进不了 helix，cis 肽键在它旁边',
 '“Its side chain closes onto its own nitrogen as a pyrrolidine ring, so there is no free α-amino group. It is excluded from the α-helix, and cis peptide bonds occur practically only next to it.”',
 '环要叫名字。'],
['<b>Cysteine</b>：–SH 极易氧化成 –S–S– → 两个 cysteine 变一个 cystine = 交联剂',
 '“A thiol that oxidises very easily to a disulfide. Two cysteines become one cystine, the cross-linker of proteins.”',
 'p025。cysteine ≠ cystine。'],
['<b>Histidine</b>：imidazole，弱碱 → 中性 pH 能收能给质子 → 活性中心的质子搬运工，结合金属',
 '“A weakly basic imidazole — it can accept or donate a proton near neutral pH, so it shuttles protons in active sites and binds metals.”',
 'His-tag 靠它，不是 lysine。'],
['<b>三个芳香</b>：phenyl · phenol · indole；Tyr 和 Trp 在 280 nm → 测蛋白',
 '“Phenylalanine a phenyl, tyrosine a phenol, tryptophan an indole. Tyrosine and tryptophan absorb at 280 nm, which is how protein concentration is measured.”',
 'p024。Tyr 既芳香又极性。'],
['<b>两性离子 · pI</b>：低 pH 阳离子、高 pH 阴离子、中间两性；两个拐点是两个 pK；pI 是它们的平均',
 '“Cation at low pH, anion at high pH, zwitterion in between. The two inflection points are the two pKa values, and the isoelectric point is their average.”',
 'p023–p024。数字待核，通用 ≈ 2.3 / 9.6 / 6。'],
['<b>D/L</b>：全是 L，只有 glycine 没有手性；Thr、Ile 两个不对称碳；D 型只在蛋白外（细菌细胞壁）',
 '“All L except glycine, which has no asymmetric carbon. Threonine and isoleucine have two. D-amino acids occur outside proteins.”',
 'p024 p023。'],
['<b>落点</b>：为什么是这 20 个 —— 遗传密码定死的，密码通用；再往下是进化史',
 '“Fixed by the universal genetic code. Why the code chose these twenty is evolutionary history, not chemistry.”',
 '说完就停。']
],

segs:[
 {tag:'段 1 · 定义', h:'先说它是什么，再划三个圈',
  p:['“An amino acid is an organic compound carrying both a carboxyl group and an amino group. Of the many that occur in living organisms, twenty have a special position: they are the building blocks of proteins, and in all of them the amino group sits on the α-carbon, the carbon next to the carboxyl. <b>Proteinogenic</b> means exactly that: built into proteins, and with a codon in the genetic code.”',
     '“Two boundaries. Rare amino acids are found in some proteins: hydroxyproline and hydroxylysine in collagen. They are made by modifying a residue already in the chain, and there is no codon for them. And over a hundred and fifty amino acids occur in cells but never in proteins. Examples: ornithine and citrulline of the urea cycle, β-alanine in coenzyme A, D-glutamate in bacterial cell walls.”',
     '“The twenty share one backbone: an α-carbon carrying a hydrogen, the amino group, the carboxyl group and a side chain R. Everything that differs is in R. That is where the one characteristic property of each amino acid lives: what its side chain can do, its charge, its polarity, its ring, its sulfur. All of them except proline have a free α-amino group.”'],
  note:'<b>三个圈说完，「proteinogenic」这个限定词就答完了。</b>selenocysteine 留着当加分，被问「真的只有二十个吗」再给（p093 脚注）。'},
 {tag:'段 2 · general', h:'四组带数目，然后名字',
  p:['“The textbook groups them by the nature of the side chain. <b>Nonpolar</b>, eight. Alanine, valine, leucine, isoleucine and proline with aliphatic side chains. Phenylalanine and tryptophan with aromatic rings. Methionine with sulfur. <b>Polar but uncharged</b>, six. Serine, threonine and tyrosine with a hydroxyl. Asparagine and glutamine with an amide. Cysteine with a thiol. <b>Negatively charged</b>, two: aspartate and glutamate, each with a second carboxyl. <b>Positively charged</b>, three: lysine with a second amino group, arginine with a guanidine group, histidine with a weakly basic imidazole. And <b>glycine</b>, whose side chain is a single hydrogen and which the textbook says is very hard to place. Eight, six, two, three and glycine — twenty.”',
     '“Two general properties before the individual ones. Because both groups ionise, an amino acid is a cation at low pH, an anion at high pH and a dipolar ion in between — a zwitterion. The pH at which it carries no net charge is its isoelectric point, and side-chain groups make it different for each. And all of them except glycine have an asymmetric α-carbon, and all of those in proteins are of the L configuration.”'],
  note:'<b>数目先于名字。</b>他打断你挑一个的时候，你已经说过它属于哪组、那组靠什么定义——剩下的只是那一条性质。'},
 {tag:'段 3 · 稍展开', h:'他挑哪个说哪个——这里预演四个最可能的',
  p:['“Take glycine: the side chain is a hydrogen, so there is no asymmetric carbon. Being the smallest, it fits where nothing else does: nearly thirty percent of collagen, where every third side chain points into the axis of the helix.”',
     '“Proline: the side chain closes onto its own α-nitrogen as a pyrrolidine ring, so it has no free amino group — an imino acid. The α-helix takes every amino acid except proline, and cis peptide bonds occur practically only next to it.”',
     '“Cysteine: a thiol that oxidises very easily to a disulfide. Two cysteines become one cystine, which the textbook calls the cross-linking agent of proteins.”',
     '“Histidine: an imidazole, weakly basic. Its pKa is near neutral, so the same ring can accept or donate a proton. That is why it is the proton shuttle of active sites and the group that binds metals.”'],
  note:'四个例子四种「基团 → 后果」的句式。<b>其余十六个在速背的表里，每个一句，照说。</b>'},
 {tag:'段 4 · 留口子', h:'主动落到你的主场',
  p:['“Where I meet this list every day is site-directed mutagenesis on a binding surface: deciding which residue to change and to what. Alanine deletes a side chain without touching the backbone, and a charge swap tests an ion pair. Then I measure what the change does to the dissociation constant. And I have used a twenty-first, unnatural amino acid, incorporated through a repurposed stop codon — the same trick the textbook’s codon table shows for selenocysteine.”'],
  note:'<b>这不是漏洞，是钓饵。</b>他顺着走就到卡 02（Kd）或到非天然氨基酸——两边你都接得住。不点病原体名字。'}
],

why:{
 rungs:[
  ['为什么二十个积木就能造出所有蛋白质？','因为<b>骨架全一样</b>，任何顺序都能连成肽键；而侧链把化学都覆盖了——疏水的、能成氢键的、酸、碱、一个巯基、一个能做亲核基团的羟基。'],
  ['为什么是这二十个？','因为<b>遗传密码</b>把它们定死了：64 个三联体、61 个编码，而且密码对所有生物<b>通用</b>（p094）——每个生物的每个蛋白都用同一套。'],
  ['为什么密码选了这二十个而不是别的二十个？','这是密码<b>起源</b>的问题：一旦定下，任何改动会同时改掉所有蛋白，所以它被冻住了。往下没有化学可推，只有历史。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Why the code settled on these twenty rather than some other set is a question about the origin of the genetic code. It is evolutionary history rather than something we can derive from chemistry.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p021_amino_acid_general_formula.jpg',
  t:'共同骨架 —— 书 p021 就这么画的',
  cap:'<b>速背 03 说的「他让你画就这样画」，指的就是这一张。</b>'
    + '中间一个 <b>C</b>，上面 <b>H</b>、下面 <b>NH₂</b>、左边 <b>R</b>、右边 <b>COOH</b>。<b>四根线，完了。</b>'
    + '<br><br><b>画的顺序（五步）</b>：'
    + '<br>① 中间写一个 <b>C</b>，旁边标一个 <b>α</b>。'
    + '<br>② 向上一根线接 <b>H</b>，向下一根线接 <b>NH₂</b>。'
    + '<br>③ 向右接 <b>COOH</b>，向左接 <b>R</b>。'
    + '<br>④ 他要具体的：<b>R 换成 H 就是 glycine，R 换成 CH₃ 就是 alanine</b>。'
    + '<br>⑤ 他要两性离子：<b>把 NH₂ 改成 H₃N⁺，COOH 改成 COO⁻</b>，其余一笔不动。'
    + '<br><br><b>边画边说的两句</b>：“Every one of the twenty has the same backbone: one <b>alpha-carbon</b> carrying a hydrogen, an <b>amino group</b>, a <b>carboxyl group</b> and a <b>side chain</b>, R. '
    + 'Everything that distinguishes them is in R.”'
    + '<br>“The textbook draws it in the <b>uncharged</b> form, but at physiological pH it is really the <b>dipolar</b> form, ammonium and carboxylate. '
    + 'I can redraw it that way.”'
    + '<br><br>⚠ <b>一个小但能追的点</b>：这张图里没有画出立体，所以它没回答 L 还是 D。'
    + '他要构型就用下面那张 Fischer 投影的图。',
  src2:'Biochemie, p021 · 400 dpi 原图裁切，未修改（书上这张没给图号）'},

 {k:'认',
  src:'img/p022_tab21_twenty_amino_acids.jpg',
  t:'书自己的四组 —— I / II / III / IV 就印在图上（书 Tab. 2.1）',
  cap:'<b>这张是「认」，而且要认的不是结构式，是<u>分组</u>。</b>'
    + '化合物结构式你另有专门的 app，这里要看的只有<b>左边那四个罗马数字</b>。'
    + '<br><br><b>四组对应速背 04，数目数得出来</b>：'
    + '<br><b>I）非极性，八个</b>——glycine 排在这一组的最前面，然后 Ala · Val · Leu · Ile · Phe · Pro，'
    + '加上第二组里的 Met。<b>注意书把 glycine 画进了这张表的第一格，却在正文里说它很难归类。</b>'
    + '<br><b>II）极性不带电</b>——Ser · Thr · Cys · Met · Trp · Tyr · Asn · Gln。'
    + '<br><b>III）带负电</b>——Asp · Glu，图上两个的侧链末端都是 <b>COOH</b>。'
    + '<br><b>IV）带正电</b>——Lys（末端 CH₂–NH₃⁺）· Arg（末端那个带两个 N 的叉子是胍基）· His（五元双 N 环）。'
    + '<br><br><b>看图时顺手数一件事，这一条能当场拿出来</b>：<b>Pro 是表里唯一一个氮长在环上的</b>——'
    + '图上它的 <b>H₂N</b> 直接连回侧链，所以它没有自由的 α-氨基。'
    + '<b>这就是它碰茵三酮变黄、它开不了 α-helix 的同一个原因。</b>'
    + '<br><br><b>认图时要说的那一段</b>：“The textbook divides them by the <b>nature of the side chain</b> into four groups: '
    + '<b>nonpolar</b>, <b>polar but uncharged</b>, <b>negatively charged</b> and <b>positively charged</b>. '
    + 'Eight, six, two and three, plus glycine, which it says is very hard to place. That is twenty.”'
    + '<br>⚠ 表上的名字是捷克语拼法（glycin、L-alanin、L-serin…），<b>跟英文只差词尾</b>，读的时候自己补上就行；'
    + '<b>三字母缩写是国际通用的，表上那一列直接能用</b>。'
    + '<br>Asn 写成 <b>Asp.NH₂</b>、Gln 写成 <b>Glu.NH₂</b>，那是旧写法，就是天冬酰胺和谷氨酰胺。',
  src2:'Biochemie, Tab. 2.1, p022 · 240 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p023_glycine_three_forms.jpg',
  t:'三种形态，两步放质子（书 p023）',
  cap:'<b>这张要和下面的滴定曲线一起看，它是曲线的坐标轴。</b>'
    + '从左到右三个形态，两个双箭头上写着 <b>−H⁺</b>、下面写着 <b>＋H⁺</b>：'
    + '<br>① <b>⁺H₃N–CH(R)–COOH</b>，净 <b>＋1</b>，低 pH 那一端。'
    + '<br>② <b>⁺H₃N–CH(R)–COO⁻</b>，净 <b>0</b>，就是两性离子（zwitterion）。'
    + '<br>③ <b>H₂N–CH(R)–COO⁻</b>，净 <b>−1</b>，高 pH 那一端。'
    + '<br><br><b>图上看得见的两件事，都能当场说</b>：'
    + '<br>① <b>先掉的是羧基上那个质子，后掉的是氨基上那个</b>——因为羧基酸得多，pK 小得多。'
    + '<br>② 中间那个形态<b>同时带一个正一个负</b>，所以「净电荷零」不等于「不带电」。'
    + '<b>这是他最容易抓的一句。</b>'
    + '<br><br><b>看到图要说的那一段</b>：“Both groups ionise, so the form depends on pH. '
    + 'At low pH the carboxyl is protonated and the molecule is a <b>cation</b>. At high pH the ammonium loses its proton and it is an <b>anion</b>. '
    + 'In between it is the <b>dipolar</b> form: carboxylate negative, ammonium positive, <b>net</b> charge zero — not uncharged, but zero overall.”'
    + '<br>⚠ <b>书把 –NH₃⁺ 印成了「季铵」，那是书的笔误</b>：季铵的氮接四个碳、永久带正电、放不掉质子，'
    + '而这张图里它明明放掉了一个。<b>图自己反驳了正文。别跟着说 quaternary。</b>',
  src2:'Biochemie, p023 · 300 dpi 原图裁切，未修改（书上这张没给图号）'},

 {k:'画',
  src:'img/p023_obr21_glycine_titration.jpg',
  t:'甘氨酸的滴定曲线 —— 三个数字就印在图上（书 Obr. 2.1）',
  cap:'<b>★ 这是这张卡上最有用的一张图，而且它把速背 15 里那三个「待核」的数字给了。</b>'
    + '图上直接印着三条线：<b>pK<sub>A1</sub> ＝ 2.4</b>（虚线）、<b>pI ＝ 6.1</b>（点线）、<b>pK<sub>A2</sub> ＝ 9.8</b>（虚线）。'
    + '<b>这三个是书自己的数，不是通用值，可以直接报。</b>'
    + '（OCR 读不出图里的字，所以卡上原来标的是通用值 2.3 / 9.6 / 6——两套数差不多，'
    + '但<b>报书上那一套才是安全的</b>。）'
    + '<br><br><b>坐标轴只有两个词</b>：纵轴是 <b>pH</b>（0–14），横轴那个捷克语是'
    + '<b>加进去的 OH⁻，单位 mmol</b>，从 <b>0 到 2</b>。<b>横轴走到 1 的地方就是 pI。</b>'
    + '<br><br><b>画的顺序（六步，黑板上一分钟）</b>：'
    + '<br>① 画坐标轴：纵轴 <b>pH 0 到 14</b>，横轴 <b>OH⁻ 0 到 2</b>。'
    + '<br>② 从左下角起笔，先画<b>一段往上爬的平流</b>，在 <b>pH ≈ 2.4</b> 处最平——第一个缓冲区。'
    + '<br>③ 到横轴 <b>1</b> 的位置突然<b>竖直往上窜</b>，窜到 <b>pH ≈ 6.1</b> 那一点——这是等当量点，也就是 <b>pI</b>。'
    + '<br>④ 再画<b>第二段平流</b>，在 <b>pH ≈ 9.8</b> 处最平——第二个缓冲区。'
    + '<br>⑤ 到横轴 <b>2</b> 再竖直往上，收在 pH 12 以上。'
    + '<br>⑥ 在三个高度上各拉一条横虚线，写 <b>pK₁ · pI · pK₂</b>。'
    + '<br><br><b>边画边说的四句</b>：“A <b>plateau</b> means the base I add is being taken up by a group instead of staying in solution, '
    + 'so the pH hardly moves. That only happens when that group is about <b>half dissociated</b>, which is its <b>pKa</b>. '
    + 'Two ionisable groups, two pKa values, two plateaus.”'
    + '<br>“The first plateau, at <b>2.4</b>, is the <b>carboxyl</b>. The second, at <b>9.8</b>, is the <b>ammonium</b> group.”'
    + '<br>“Between them the curve is <b>steepest</b>, because almost everything is the dipolar form and nothing is buffering. '
    + 'That point is the <b>isoelectric point</b>, and the figure prints it as <b>6.1</b> — the average of the two.”'
    + '<br>“A side chain that can ionise adds a third pKa and a <b>third plateau</b>, and that is why every amino acid has its own pI.”'
    + '<br><br><b>这张图还是横向卡 x-ph 的地基</b>：「pH ≅ pKa 时正好解离一半」在这里是看得见的一根平段。'
    + '他问「buffer 是什么」时，<b>指这两段平的地方比背定义强</b>。',
  src2:'Biochemie, Obr. 2.1, p023 · 300 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p024_dl_fischer_glyceraldehyde_serine.jpg',
  t:'L 是怎么定出来的 —— 跟甘油醛比（书 p024）',
  cap:'<b>速背 16 说「书 p024 就是这样画 L-serine 的」，指的就是这一张。</b>'
    + '三个 Fischer 投影式并排，名字就在下面：<b>D-glyceraldehyd · L-glyceraldehyd · L-serin</b>。'
    + '<br><br><b>看图只看一件事：那个官能团在左边还是右边。</b>'
    + '<br>① <b>D-甘油醛</b>：OH 在<b>右</b>。'
    + '<br>② <b>L-甘油醛</b>：HO 在<b>左</b>。'
    + '<br>③ <b>L-serine</b>：<b>H₂N 在左</b>——跟 L-甘油醛同一边，<b>所以它叫 L</b>。'
    + '<b>就是这么定的，没有别的依据。</b>'
    + '<br><br><b>画的顺序（四步，他说 “draw L-serine” 就这么画）</b>：'
    + '<br>① 画一根<b>竖线</b>，上、中、下三个位置。'
    + '<br>② 顶上写 <b>COOH</b>（甘油醛那两个顶上是 <b>CHO</b>），底下写 <b>CH₂OH</b>（就是 R）。'
    + '<br>③ 中间写 <b>C</b>，左边接 <b>H₂N–</b>，右边接 <b>–H</b>。'
    + '<br>④ 要画 D 型就<b>把左右两个对调</b>，其余不动。'
    + '<br><br><b>边画边说的三句</b>：“The configuration is defined by comparison with <b>glyceraldehyde</b>, the same convention as for sugars. '
    + 'In the Fischer projection the amino group of <b>L-serine</b> is on the <b>left</b>, like the hydroxyl of L-glyceraldehyde.”'
    + '<br>“Every amino acid found in proteins is of the <b>L</b> configuration. D-amino acids exist but outside proteins — '
    + 'the textbook’s example is <b>D-glutamate in bacterial cell walls</b>.”'
    + '<br>“This figure says nothing about <b>optical rotation</b>. D and L are <b>configuration</b>, read off a drawing. '
    + 'Plus and minus are <b>rotation</b>, measured on an instrument. <b>L-alanine is right-rotating and L-serine is left-rotating, and both are L.</b>”'
    + '<br><br>⚠ 图上只画了 <b>serine</b> 一个例子，而 serine 的侧链正好是 <b>CH₂OH</b>，'
    + '跟甘油醛的底部一模一样——<b>书选它就是为了让两边能直接对着看</b>。这一句说出来很加分。',
  src2:'Biochemie, p024 · 300 dpi 原图裁切，未修改（书上这张没给图号）'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'The amino acids?',
 mean:'他会说 “Name the amino acids.” 或 “Which amino acids do you know?”。<b>他嘴里最短的那句。</b>答案要自带结构：多少个 → 按什么分 → 每组几个 → 名字。别从 alanine 开始背二十个。',
 say:'“Twenty proteinogenic ones — the ones with a codon. The textbook groups them by the side chain. Nonpolar, eight: alanine, valine, leucine, isoleucine, proline, phenylalanine, tryptophan, methionine. Polar uncharged, six: serine, threonine, tyrosine, asparagine, glutamine, cysteine. Negatively charged, two: aspartate and glutamate. Positively charged, three: lysine, arginine, histidine. And glycine, which does not fit any group. Its side chain is just a hydrogen.”'},

{q:'What does “proteinogenic” mean?',
 mean:'卷面上的第一个限定词。<b>两个条件</b>，缺一不可。',
 say:'“Built into proteins <b>and</b> coded for by the genetic code — twenty amino acids. Hydroxyproline is in collagen but is not proteinogenic, because it is made by modifying a proline already in the chain and has no codon. Ornithine is an amino acid but is never in a protein at all.”'},

{q:'And one characteristic property of each?',
 mean:'卷面第二个限定词。他真正要的是<b>「它的基团是什么 → 所以它干什么」</b>，不是二十个形容词。',
 say:'“For each one I will name the group on the side chain and then what that group does. For example cysteine: a thiol, so it oxidises to a disulfide and cross-links the chain. Histidine: an imidazole, weakly basic, so it shuttles protons in active sites.”',
 tail:'然后照速背第 05 点那张表说。他挑到哪个说哪一句。'},

{q:'What is an amino acid?',
 mean:'核心词正面定义。<b>别从「蛋白质的单位」起步</b>——那是用途，不是它是什么。',
 say:'“An organic compound that carries both a carboxyl group and an amino group. In the twenty that build proteins the amino group is on the α-carbon, the carbon next to the carboxyl. That carbon also carries a hydrogen and a side chain, and the side chain is all that distinguishes them.”'},

{q:'How are amino acids classified?',
 mean:'问的是<b>依据</b>，不是名单。',
 say:'“By the nature of the side chain, because the backbone is the same for all. The textbook uses four groups: nonpolar, polar uncharged, negatively charged, positively charged. Glycine is left outside, because a single hydrogen is neither. Lehninger uses the same idea with tyrosine among the aromatic ones and glycine among the aliphatic ones. The twenty do not change, only the drawers.”'},

{q:'What is a zwitterion?',
 mean:'正面定义，一句。',
 say:'“A molecule that carries a positive and a negative charge at the same time and so has no net charge. For an amino acid, that is the ammonium group positive and the carboxylate negative. It is the form an amino acid takes between its two pKa values, which includes neutral pH. The textbook calls it the dipolar form. Zwitterion is the general word.”'},

{q:'What is the isoelectric point?',
 mean:'正面定义 ＋ 怎么算 ＋ 为什么要紧。',
 say:'“The pH at which the molecule carries no net charge and does not move in an electric field. For an amino acid with two ionisable groups it is the average of the two pKa values — the midpoint of the titration curve. Side chains add further ionisable groups, so each amino acid has its own pI, and that is what ion-exchange chromatography and electrophoresis separate them by. For a protein the textbook adds that solubility is lowest at the pI, because without charge there is no repulsion between molecules.”'},

{q:'Are all amino acids chiral?',
 mean:'<b>陷阱。</b>答「是」就错了。',
 say:'“All except glycine. Chirality needs four different groups on the α-carbon, and glycine has two hydrogens there, so it has no asymmetric carbon and no L or D form. The other nineteen are L in proteins. Threonine and isoleucine even have two asymmetric carbons.”'},

{q:'Why can you measure protein concentration at 280 nanometres?', odd:1,
 mean:'问的是<b>芳香氨基酸的紫外吸收</b>——听起来像方法题，答案在 p024。',
 say:'“Because tyrosine and tryptophan absorb ultraviolet light at 280 nm through their aromatic rings, the phenol and the indole. None of the twenty absorbs visible light. Since nearly every protein contains some of both, the absorbance at 280 nm is a quick and convenient measure of protein content. It is only approximate, because proteins differ in how many of those residues they carry.”'},

{q:'Why is hair curly — how does a perm work?', odd:1,
 mean:'<b>问的是 cysteine 和二硫键。</b>入口完全不像生化题。',
 say:'“Hair is keratin, and its shape is held by disulfide bonds between cysteine residues of neighbouring chains — cystine cross-links. A perm reduces those bonds with a reducing agent, so the chains can slide while the hair is wound on a curler, then re-oxidises them in the new position. The textbook gives exactly that chemistry: the disulfide is reduced to two cysteines by reducing agents and re-formed by oxidation.”'},

{q:'Why do we have to eat protein?', odd:1,
 mean:'<b>问的是必需氨基酸。</b>书没有列表，只有 phenylalanine 那一句。',
 say:'“Because some of the twenty we cannot make. The textbook’s example is phenylalanine: it is essential, while tyrosine is not — because the cell makes tyrosine from phenylalanine with phenylalanine hydroxylase. The full list for humans is general knowledge, nine: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine. Plants make all of them. The textbook notes the biosynthesis of essential amino acids as one of the things plant metabolism does that ours does not.”',
 tail:'p127 是书里唯一一句；p216 提到植物合成必需氨基酸。<b>九个名单是 general，说的时候标明。</b>'},

{q:'Why does MSG taste of anything?', odd:1,
 mean:'问的是 glutamate。前半是书外常识，后半在书里。',
 say:'“MSG is monosodium glutamate, the sodium salt of glutamic acid, and the taste is the glutamate ion itself. The tongue has a receptor for it, and that part is general knowledge. What the textbook does say is why glutamate is in every protein-rich food: it is the hub of nitrogen metabolism, the amino acid the transaminases and glutamate dehydrogenase all run through.”'},

{q:'What is actually in a protein shake?', odd:1,
 mean:'问的是<b>消化成氨基酸、支链氨基酸、必需氨基酸</b>。',
 say:'“A protein, usually whey, from milk, which digestion hydrolyses back to the twenty amino acids. The marketing name BCAA means the three branched-chain ones, valine, leucine and isoleucine. What the body actually needs from it is the essential ones, the nine it cannot make. Leucine is the one the textbook singles out as purely ketogenic.”'},

{q:'Why is collagen full of glycine?', odd:1,
 mean:'<b>卡 01 的实测追问</b>，从这题也能进来。',
 say:'“Because in the collagen helix every third side chain points into the axis, where three chains wind round each other. The only residue that fits there is the one whose side chain is a single hydrogen — glycine, nearly thirty percent of the protein. Proline and hydroxyproline make up another thirty.”'},

{q:'Why does a His-tag bind nickel?', odd:1,
 mean:'<b>PESB 实测失分点。</b>答案是 imidazole 配位，不是 lysine，不是芳香环。',
 say:'“Because the imidazole ring of histidine has a ring nitrogen with a lone pair that donates into the immobilised nickel ion — a coordination bond. Six histidines in a row give several such ligands at once. The textbook lists exactly imidazole, carboxyl and sulfhydryl as the groups that complex metals, and imidazole competes it off again at elution.”'},

{q:'What is the difference between cysteine and cystine?',
 mean:'<b>陷阱：一个字母。</b>',
 say:'“Cysteine is the amino acid, with a free thiol. Cystine is two cysteines joined through their sulfurs by a disulfide bond — the oxidised dimer, and in a protein the cross-link between two parts of the chain. Reduce cystine and you get two cysteines back.”'},

{q:'Is tyrosine polar or nonpolar?',
 mean:'<b>陷阱：两者都是。</b>书放极性组。',
 say:'“Both, and it depends which part you look at: the ring is aromatic and nonpolar, the hydroxyl on it makes it a phenol and polar. The textbook files it among the polar amino acids, with the hydroxyl group. Lehninger files it with the aromatic ones. Its phenolic hydroxyl is also what tyrosine kinases phosphorylate.”'},

{q:'What is an imino acid?',
 mean:'proline 的另一个名字。',
 say:'“An amino acid whose α-nitrogen is a secondary amine, bonded to two carbons instead of one, because the side chain closes back onto it. Proline is the only proteinogenic one: the ring is a pyrrolidine, and there is no free α-amino group and no N–H once it is in a peptide.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他默认你知道名词，所以专挑名词问。这题名词密度极高——每个环、每个基团都可能被单独拎出来。', items:[
{r:'中', q:'What is pKa?',
 en:'“The pH at which a given acidic group is exactly half protonated and half deprotonated — numerically the negative logarithm of its acid dissociation constant. Below its pKa the group is mostly protonated, above it mostly not. On the glycine titration curve the two pKa values are the two inflection points — one for the carboxyl, one for the amino group.”',
 cn:'她自报的弱点。<b>先说它是什么，再说怎么用。</b><br>书 p023 直接用 pK 这个词没解释；「半质子化时的 pH」是通用定义。<b>数字待核</b>：通用 ≈ 2.3 和 9.6。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>K<sub>a</sub> = [A⁻][H⁺] / [HA]</code>，<code>pK<sub>a</sub> = −log K<sub>a</sub></code>，<code>pH = −log [H⁺]</code>。<br>HA 是还带着质子的那一半（–COOH、–NH₃⁺），A⁻ 是已经放掉质子的那一半（–COO⁻、–NH₂）。<br><br><b>三步推导（他问「为什么半解离那一点正好是 pKa」就照这个说）</b>：<br>① 解离反应 <code>HA ⇌ A⁻ + H⁺</code>，它的平衡常数就是上面那个 K<sub>a</sub>。<br>② 把 [H⁺] 解到左边：<code>[H⁺] = K<sub>a</sub> · [HA] / [A⁻]</code>。<br>③ 恰好一半解离时 <code>[HA] = [A⁻]</code>，比值 = 1 → <code>[H⁺] = K<sub>a</sub></code>，两边取负对数 → <code>pH = pK<sub>a</sub></code>。<b>推完了，就三行。</b><br><br>② 那一步两边直接取负对数，就是 <b>Henderson–Hasselbalch</b>：<code>pH = pK<sub>a</sub> + log([A⁻]/[HA])</code>。<b>拿它读滴定曲线</b>：log 里是 1 → <code>pH = pK<sub>a</sub></code>（半当量点）；是 10 → <code>pK<sub>a</sub> + 1</code>（91% 已解离）；是 1/10 → <code>pK<sub>a</sub> − 1</code>（9% 已解离）。<b>所以每个 pK<sub>a</sub> 上下各一个 pH 单位就是那个基团的缓冲区</b>，曲线上最平的那一段。<br><br><b>=== 一句话理解 ===</b><br><b>pKa 就是质子的 Kd，只不过换到了对数刻度上。</b>K<sub>d</sub> 问的是「配体要多浓，才有一半的位点被占住」；K<sub>a</sub> 问的是「质子要多浓，才有一半的基团被占住」；卡 02 的 K<sub>m</sub> 问的是「底物要多浓，才有一半的酶被占住」。<b>三个常数问的是同一句话：多浓才够占住一半。</b>所以滴定曲线上那个半解离点，跟卡 02 开头那条占据率曲线的半饱和点，是同一个点。<br><b>为什么要取对数</b>：质子浓度在生理范围里就跨了十几个数量级（1 M 到 10⁻¹⁴ M），pH 和 pK<sub>a</sub> 只是把这把尺子压扁成 0–14 的刻度。<b>所以「差一个 pK 单位」= 差十倍浓度</b>：羧基 ≈ 2.3、铵基 ≈ 9.6，差 7 个单位，就是差 10⁷ 倍的质子浓度。<br><b>pK<sub>a</sub> 越小 = 酸越强 = 它放手越早</b>：pH 才到 2.3 羧基就已经交出一半质子，而铵基要等到 9.6。这也是为什么中性 pH 落在两者中间——羧基早就放完、氨基还一个没放，所以中间只能是两性离子。'},
{r:'实测', q:'What is that ring called?',
 en:'“Proline’s is a <b>pyrrolidine</b> — a saturated five-membered ring with one nitrogen, and that nitrogen is the α-amino group itself. Histidine’s is an <b>imidazole</b> — an aromatic five-membered ring with two nitrogens, weakly basic. Tryptophan’s is an <b>indole</b>, a benzene fused to a pyrrole. Phenylalanine carries a <b>phenyl</b> ring, plain benzene. Tyrosine carries a <b>phenol</b>, benzene with a hydroxyl. Arginine’s group is not a ring: a <b>guanidine</b>, a carbon carrying three nitrogens.”',
 cn:'PESB 那次说 histidine「上面的 ring」，老师不满意——<b>环要叫名字</b>。书 p021 只说 histidine 含弱碱性的咪唑基、Phe 和 Trp 带芳香环、arginine 含胍基、proline 没有自由氨基；名字本身是通用有机化学。'},
{r:'高', q:'What is the difference between the side chain and the backbone?',
 en:'“The <b>backbone</b> is what every residue shares — the nitrogen, the α-carbon and the carbonyl carbon, repeated along the chain and joined by peptide bonds. The <b>side chain</b> is the group R on the α-carbon, the only part that differs between the twenty. The textbook puts it as: the polypeptide has a regularly repeating part, the main chain, and a variable part made of the side chains.”',
 cn:'p026 §2.1.4 那句。<b>骨架的三个原子要点名</b>；「主链氢键」这个说法在卡 01 里靠它站住。<span class="pg">p026</span>'},
{r:'高', q:'What do hydrophobic and hydrophilic mean?',
 en:'“<b>Hydrophobic</b> groups have low affinity for water: the hydrocarbons, the nonpolar side chains. In water they tend to associate with each other and avoid being solvated, the way two drops of oil merge. The textbook says this is not an attraction between them but a change in the structure of the water around them. <b>Hydrophilic</b> groups are polar or charged and are solvated by water. In a globular protein the hydrophobic side chains end up inside, the hydrophilic ones on the surface.”',
 cn:'p012–p013 的定义；朝里朝外 p033。<b>说完第三句就停</b>——再往下是水的熵，卡 01 和横向卡 bonds 的地盘。<span class="pg">p012 p013 p033</span>'},
{r:'高', q:'What is an amide?',
 en:'“The group formed when a carboxylic acid condenses with an amine, losing water: -CO-NH-. Two places on this card. The side chains of asparagine and glutamine are amides of the side-chain carboxyl, -CONH₂, which is why they are uncharged. And the peptide bond itself is an amide, between the carboxyl of one residue and the α-amino group of the next. The textbook writes it as the peptide, amide, bond.”',
 cn:'p026。横向卡 bonds 有整条肽键。<span class="pg">p026</span>'},
{r:'高', q:'Thiol, thioether, disulfide — what is the difference?',
 en:'“All three are sulfur groups, and two of the twenty carry one each. A <b>thiol</b> is -SH, sulfur with a hydrogen, as in cysteine. It is the reactive one, and it can be oxidised. A <b>thioether</b> is sulfur between two carbons, -S-CH₃ in methionine. There is no hydrogen, so no disulfide from it. A <b>disulfide</b> is -S-S-, two thiols oxidised together — cystine. That is why cysteine, not methionine, cross-links proteins.”',
 cn:'书 p021 只说 methionine「含硫」、cysteine「–SH」；三个词的区分是通用有机化学。<b>「methionine 不能成二硫键」是最常被抓的一句。</b>'},
{r:'高', q:'What does “essential amino acid” mean?',
 en:'“One the organism cannot make in sufficient amount and must obtain from food. The textbook’s example is phenylalanine, essential because there is no pathway to it, while tyrosine is dispensable because phenylalanine hydroxylase makes it from phenylalanine. The list of nine for humans is general knowledge, and the textbook does not list them. They are histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan and valine.”',
 cn:'p127 那一句是书里的全部；p216 只说植物能合成必需氨基酸。<b>九个的名单标 general。</b>',
 warn:'书里<b>没有</b>必需氨基酸的表。说名单时说 “in general references”。'},
{r:'中', q:'What does L mean — is it the same as laevorotatory?',
 en:'“No. L and D name the <b>configuration</b> — which way the four groups sit around the α-carbon, by comparison with L- or D-glyceraldehyde. The textbook derives L-serine from L-glyceraldehyde, amino group on the left in the Fischer projection. Laevorotatory and dextrorotatory, minus and plus, name which way the compound rotates polarised light, and that is measured, not derived. An L amino acid can rotate light either way.”',
 cn:'p024 只给了构型；「构型 ≠ 旋光方向」是通用知识。<b>这是有机化学口味的老师会问的一刀。</b><br><br><b>=== 公式（「旋光」是量出来的数，D/L 是查出来的） ===</b><br><b>式子</b>：<code>[α] = α / (c · l)</code>。α 是旋光仪上读到的角度（度），c 是浓度（g/mL），l 是光程（dm）；<code>[α]</code> 叫<b>比旋光度</b>。<br><b>为什么要除掉这两个</b>：读数本身不是化合物的性质——同一瓶样品，浓一倍、管子长一倍，角度就翻倍。除回「每浓度、每分米」之后剩下的那个数，才只属于这个化合物，所以书上才能印 <code>+112°</code> 这样的常数。写全了还要标温度和波长：<code>[α]<sub>D</sub></code>，D 是钠灯的 589 nm。<br><b>而 D/L 那边一个数都没有</b>——它是看 Fischer 投影式上 NH₂ 画在左边还是右边，是<b>对照 glyceraldehyde 定出来的</b>，不是量出来的。<br><br><b>=== 一句话理解 ===</b><br><b>一个是查表查出来的，一个是拿仪器量出来的，所以它们没有任何理由一致。</b>D/L 说的是原子在空间里怎么摆；(+)/(−) 说的是这堆原子把偏振光的振动面推向哪一边，而这个推力还随溶剂、pH、温度、波长变。<br><b>所以「L 就是左旋」是一句能被当场证伪的话</b>：L-alanine 在水里是<b>右旋</b>（约 +1.8°），L-serine 在水里是<b>左旋</b>（约 −7.5°）——两个都是 L。同一个化合物换个溶剂符号甚至可能翻过来，而构型一个字都不变，这本身就说明两者是两码事。（比旋光度的定义和这两个数值都是通用知识；书只给了构型这一半。）'},
{r:'中', q:'What is a guanidine group?',
 en:'“A carbon carrying three nitrogens — one double-bonded, two as -NH₂ or -NH-. The positive charge on the protonated form is spread over all three nitrogens by resonance. That is what makes it the most basic side chain, charged at any physiological pH. Arginine carries it at the end of its side chain, and arginase splits it off as urea.”',
 cn:'p021 说「胍基」；共振稳定和 pKa ≈ 12.5 是通用。<b>停止线：</b>再往下是共振结构，横向卡 bonds 里 mesomerism 那条。<br><br><b>=== 数字从哪来（pK<sub>a</sub> ≈ 12.5 是什么意思） ===</b><br><code>pK<sub>a</sub> = 12.5</code> 的字面意思是「要把 pH 提到 12.5，胍基才肯放掉一半质子」。细胞里 pH ≈ 7，离它还差 5.5 个单位 → 中性（不带质子）的胍基只占大约 <code>1 : 300 000</code>。<b>所以「在任何生理 pH 下都带正电」不是一句修辞，是算出来的。</b><br><br><b>=== 一句话理解 ===</b><br><b>pK<sub>a</sub> 这么高，是共振的后果，不是原因</b>：质子一接上，正电荷就被三个氮均摊（三个等价的共振式），这个带电形态特别稳，于是它极不情愿把质子交出去——要逼它放手，得把溶液弄到 pH 12.5。<br><b>反过来看同一件事更有用</b>：正电荷摊薄在三个氮上，也意味着这个正电荷「面积大」、能同时跟磷酸根上的两个氧配对。<b>这就是为什么结合 DNA、结合磷酸基的口袋里精氨酸特别多，而不是赖氨酸</b>——赖氨酸的正电荷集中在一个氮上，只够抓一个点。（pK<sub>a</sub> 的值和这条推论都是通用知识。）'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方，就是他会插刀的地方。', items:[
{r:'高', q:'Why can proline not be in an α-helix?',
 en:'“Two reasons. Its side chain closes onto its own α-nitrogen as a pyrrolidine ring, so once it is in a peptide that nitrogen has <b>no N-H left to donate</b> a hydrogen bond. And the helix is held by exactly those main-chain hydrogen bonds. And the ring locks one of the two rotatable backbone angles, so the chain cannot take the helical geometry. The textbook gives the fact: the α-helix takes every proteinogenic amino acid except proline. The reasons are the standard explanation.”',
 cn:'p029 只给结果。两个理由是通用解释，说的时候不要说「书上写」。卡 01 有同一条。<span class="pg">p029</span>'},
{r:'高', q:'Why is histidine, and not lysine, the catalytic base in active sites?',
 en:'“Because catalysis needs a group that can <b>both take and give</b> a proton at the pH where the enzyme works, and that requires a pKa near that pH. The imidazole of histidine sits near neutral. Lysine’s ε-amino and arginine’s guanidine are so basic that at cell pH they are essentially always protonated. They are good for ion pairs and for holding phosphates, useless as a base. The textbook lists imidazole among the groups doing acid–base catalysis for exactly this reason.”',
 cn:'p062 的清单；pKa 的比较是通用。这一条同时回答了「为什么 His-tag 用 histidine」——同一个环、三个角色（卡 18 有整句）。<span class="pg">p062</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br>把 <b>Henderson–Hasselbalch</b> <code>pH = pK<sub>a</sub> + log([A⁻]/[HA])</code> 反过来用，算「在 pH 7 时还有多少比例没被质子占住」：<br>· <b>His</b>，pK<sub>a</sub> ≈ 6：<code>pH − pK<sub>a</sub> = +1</code> → 自由碱 : 质子化 = <code>10 : 1</code> → <b>约 91% 自由碱、9% 带质子</b>。<b>两种形态都拿得出手。</b><br>· <b>Lys</b>，pK<sub>a</sub> ≈ 10.5：<code>pH − pK<sub>a</sub> = −3.5</code> → 自由碱 : 质子化 ≈ <code>1 : 3000</code>。<br>· <b>Arg</b>，pK<sub>a</sub> ≈ 12.5：差 5.5 个单位 → ≈ <code>1 : 300 000</code>，实际上等于零。<br><br><b>=== 一句话理解 ===</b><br><b>催化要的不是「碱性强」，是「两头都站得住」。</b>一个基团要在一个催化循环里先收下一个质子、再把它放掉，它的两种形态就得在同一个 pH 下都<b>大量存在</b>。<code>pK<sub>a</sub></code> 落在工作 pH 上下一个单位之内才做得到——离开一个单位，少数那一方就掉到 10% 以下；离开三个单位，等于只剩一种形态。<br><b>所以 Lys 和 Arg 不是「不够碱」，是碱得回不来</b>：它们抓住质子就不放，只能当固定的正电荷用（配对负电荷、按住磷酸根），当不了搬运工。这也是为什么书把 imidazole 列进酸碱催化的基团里，而把 lysine 的氨基列在旁边当另一种角色。<br><b>同一个算式还解释 His-tag 怎么洗脱</b>：把 pH 降到 4–5，咪唑被质子化，氮上那对孤对电子被质子占走，就不再配位镍——柱子上的蛋白掉下来。（pK<sub>a</sub> 数值和这里的换算都是通用知识。）'},
{r:'高', q:'Why does cysteine cross-link proteins but the cytosol has almost no disulfides?',
 en:'“The cross-link needs the two thiols to be <b>oxidised</b>, and the cytosol is a reducing environment. It holds enough free thiol, largely reduced glutathione, that any disulfide that forms there is reduced back. Disulfides survive where the chain is oxidised on purpose: in the cisternae of the ER, with protein disulfide isomerase. So they are typical of secreted and surface proteins.”',
 cn:'p025 的氧化 ＋ p113 的 PDI 在 ER；「胞质还原」是卡 13 那句最值钱的话。<b>这是一个你想接的口子</b>——落到卡 13。<span class="pg">p025 p113</span>'},
{r:'高', q:'Why do only tyrosine and tryptophan absorb at 280 nm, and not phenylalanine?',
 en:'“All three absorb in the ultraviolet, and the textbook says so. But the absorption depends on how extended the aromatic system is. Phenylalanine is a bare benzene, which absorbs weakly and further into the ultraviolet, around 260. The phenol of tyrosine and especially the two-ring indole of tryptophan absorb more strongly and nearer 280. So the 280 nm signal of a protein comes almost entirely from tryptophan and tyrosine.”',
 cn:'书 p024 说三个都吸紫外、测蛋白用 Tyr 和 Trp 的 280。「Phe 弱、在 260 附近」是通用光谱知识。<b>停止线：</b>为什么共轭越长吸收越靠红端——那是轨道，物理化学。<span class="pg">p024</span><br><br><b>=== 数字从哪来（「弱」到底弱多少） ===</b><br>衡量「会不会吸」的量是<b>摩尔消光系数 ε</b>（<code>A = ε · c · l</code> 里的那个 ε，单位 M⁻¹cm⁻¹）。三个芳香氨基酸的通用值：<br>· <b>Trp</b>（indole，两个环共轭）<code>ε₂₈₀ ≈ 5500</code><br>· <b>Tyr</b>（phenol）<code>ε₂₈₀ ≈ 1490</code><br>· <b>Phe</b>（裸苯环）峰在 257 nm 而且只有 <code>ε ≈ 200</code>，到 280 nm 上<b>几乎已经是零</b><br><code>5500 : 1490 : 200</code>——Trp 差不多是 Phe 的 <b>30 倍</b>。<br><br><b>=== 一句话理解 ===</b><br><b>「只有 Tyr 和 Trp 吸 280」不是说 Phe 不吸紫外，是说在 280 这一格上 Phe 的贡献小到可以当零。</b>两件事被压在一句话里，拆开就清楚了：<b>吸在哪（波长）</b>和<b>吸得多狠（ε）</b>是两个独立的量，Phe 在这两件事上都输——峰更靠蓝（257），峰也更矮（200）。<br>而这两件事又是同一个原因的两个表现：<b>共轭系统越大，吸收峰越往长波挪，也越高</b>。benzene（Phe）一个环 → phenol（Tyr）一个环带一个给电子的 OH → indole（Trp）两个环拼在一起，正好就是 200 → 1490 → 5500 这个顺序。<b>说到这里就停</b>，再往下是轨道能级。'},
{r:'高', q:'Why is phenylalanine essential but tyrosine not?',
 en:'“Because there is a one-way pathway between them: phenylalanine hydroxylase puts a hydroxyl on the phenyl ring of phenylalanine and gives tyrosine. So provided phenylalanine comes from food, tyrosine can be made. The textbook says exactly that this reaction explains the essential character of phenylalanine and the dispensability of tyrosine. When the hydroxylase is missing, tyrosine becomes essential and phenylalanine accumulates. That is phenylketonuria, which is general knowledge.”',
 cn:'p127 原句。<b>苯丙酮尿症书里没有</b>，标 general。<span class="pg">p127</span>'},
{r:'中', q:'Why does each amino acid have a different isoelectric point?',
 en:'“Because the pI is set by <b>all</b> the ionisable groups, and the side chains add different ones. With only the α-carboxyl and α-amino, all twenty would have nearly the same pI, near six. A second carboxyl in aspartate or glutamate pulls it down to around three. The extra basic group of lysine or arginine pushes it up towards ten. The textbook makes the point and draws the consequence — that this is what separates them by ion-exchange chromatography and electrophoresis.”',
 cn:'p024 原理；具体数字（≈ 3 / ≈ 10）是通用近似，说时标明。<span class="pg">p024</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>规则</b>：<code>pI = 夹住「净电荷 0」那一形态的两个 pK 的平均</code>。<b>不是三个 pK 的平均，也不一定是最小和最大那两个。</b><br><br><b>三步做法（他丢一个氨基酸让你算 pI，就照这个做）</b>：<br>① pH 从 0 往上走，按 pK 从小到大一个一个摘掉质子，每摘一个净电荷减 1。<br>② 写出净电荷的序列，找到 <b>净电荷 = 0</b> 的那一形态。<br>③ 平均它<b>前后</b>的那两个 pK。<br><br><b>三个例子（pK 是通用近似值，书只给原理）</b>：<br>· <b>Gly</b>（2.3 · 9.6）：电荷走 +1 → 0 → −1，零就夹在这两个之间 → <code>pI = (2.3 + 9.6)/2 ≈ 6.0</code>。<br>· <b>Asp</b>（α-COOH 2.1 · 侧链 COOH 3.9 · α-NH₃⁺ 9.8）：电荷走 +1 → 0 → −1 → −2，零出现在头两个 pK 之间 → <code>pI = (2.1 + 3.9)/2 ≈ 3.0</code>。<b>两个都是羧基的 pK，9.8 根本用不上。</b><br>· <b>Lys</b>（2.2 · α-NH₃⁺ 9.0 · ε-NH₃⁺ 10.5）：电荷走 +2 → +1 → 0 → −1，零夹在后两个之间 → <code>pI = (9.0 + 10.5)/2 ≈ 9.7</code>。<b>这次轮到 2.2 用不上。</b><br><br><b>=== 一句话理解 ===</b><br><b>pI 不是「把所有 pK 平均一下」，是「先找到那个不带净电荷的分子，再问它左右两边分别什么时候塌掉」。</b><br>所以方向一看就明白：<b>酸性侧链把 pI 往下拽</b>（多了一个早早就放手的质子，要把正负重新扯平，只能退到更酸的地方去）；<b>碱性侧链把 pI 往上顶</b>（多了一个死抱着不放的质子，得爬到很碱的地方才肯松手）。中性侧链什么都不加，pI 就停在 6 附近，二十个里大多数都在那一带。<br><b>这就是离子交换和电泳能把它们分开的全部原因</b>：同一个缓冲液 pH 下，pI 低的带负电往正极跑，pI 高的带正电往负极跑，pI 等于该 pH 的不动——分开它们的不是分子量，是<b>每个分子自己那套可解离基团的清单</b>。'},
{r:'中', q:'Why does the amino group sit on the α-carbon in all twenty?',
 en:'“Because that is what lets them polymerise into an unbranched chain with the same repeating unit. The carboxyl of one joins the α-amino of the next, so the backbone is always N, α-carbon, carbonyl carbon: three atoms per residue. And the side chains hang off it at regular intervals. Compare β-alanine, which has the amino group one carbon further. It exists in the cell, in coenzyme A, but it is not in proteins.”',
 cn:'书只陈述事实（p021）和骨架的重复性（p026）；「所以骨架才能规则重复」是推论。<span class="pg">p021 p026</span>'}
]},

{g:'怎么发现的', gn:'这位老师的口味。要像 researcher 答：他们当时手上只有什么，所以只能怎么推。', items:[
{r:'高', q:'How do you detect an amino acid?',
 en:'“With <b>ninhydrin</b>: heating an amino acid with ninhydrin gives an intensely coloured product. It is blue-violet for a free α-amino group, and yellow for proline, whose amino group is substituted. The textbook calls it one of the most characteristic reactions of the α-amino group, and gives the mechanism as a figure. It is how spots are made visible after chromatography and how amino acids are quantified in an analyser.”',
 cn:'p024–p025，figure 2.2。「层析后显色、分析仪定量」是通用用途。<span class="pg">p024 p025</span>'},
{r:'高', q:'How was the first protein sequence read?',
 en:'“By labelling the free end. The reagent 1-Fluoro-2,4-dinitrobenzene reacts with a free α-amino group under mild conditions to give a yellow dinitrophenyl derivative. In a peptide only the <b>N-terminal</b> residue has a free α-amino group, so after hydrolysis the labelled amino acid tells you which residue was first. That reagent is Sanger’s, and with it and partial hydrolysis into overlapping fragments he read insulin in 1953 — the first protein sequence, in the textbook’s own timeline.”',
 cn:'反应 p025；Sanger 1953 p009、p228。<b>「Sanger’s reagent」这个名字和「重叠片段」的策略是通用</b>，书只给反应和年份。Edman 降解书里没有。<span class="pg">p025 p009 p228</span>'},
{r:'中', q:'How do you separate amino acids from each other?',
 en:'“By charge. Each has its own isoelectric point, because the side chains carry different ionisable groups, so at a given pH they carry different net charges. The textbook names <b>ion-exchange chromatography</b> and <b>electrophoresis</b> as the methods that use this.”',
 cn:'p024。<b>方法题，这位老师的口味。</b><span class="pg">p024</span>'},
{r:'中', q:'How do we know there are exactly twenty?',
 en:'“From the genetic code. Three nucleotides per codon give sixty-four triplets. Three are stops, sixty-one code for amino acids, and when the table was completed they mapped onto twenty. That is several codons per amino acid, which the textbook calls degeneracy. The first amino acid isolated was asparagine, in 1806, from asparagus, long before anyone knew what it was for.”',
 cn:'密码 p093–p094；asparagine 1806 Vauquelin 在 p009 table 1.1（「from asparagus」是通用）。selenocysteine 的脚注 p093。<span class="pg">p093 p094 p009</span><br><br><b>=== 这三个数各自在数什么 ===</b><br><code>4³ = 64</code> 数的是<b>格子</b>（三个位置，每个四选一）；<code>64 − 3 = 61</code> 数的是<b>有输出的格子</b>；<b>20</b> 数的是<b>去重之后有多少个不同的输出</b>——不是 61 的因数，也不是从 64 里减出来的，是把 61 个格子的内容列出来、把重复的合并之后剩下的种类数。<br><code>61 ÷ 20 ≈ 3</code> 只是<b>平均</b>：实际分布从 1 到 6 不等——<b>Met 和 Trp 各只有一个密码子</b>，而 <b>Leu、Ser、Arg 各有六个</b>。（这个分布是通用知识，书给的是 64、61、简并、通用这四条。）<br><br><b>=== 一句话理解 ===</b><br><b>「二十」是一张查询表有多少个不同的答案，不是自然界有多少种氨基酸。</b>细胞里的氨基酸有一百五十种以上，出现在蛋白质里的也不止二十种（羟脯氨酸就在胶原里）——<b>二十是「翻译机器认得的那份清单」的长度</b>。<br>所以密码表能证明的只有一件事：<b>这份清单是有限的、固定的、而且所有生物共用一份</b>。至于为什么是二十而不是十九或二十五，表本身答不了——64 个格子绰绰有余，<b>数量上的限制不来自密码表</b>。这就是这张卡停在进化史的位置。'}
]},

{g:'陷阱', gn:'两个名字换一下，就是 PESB 那种失分。这一组每条都是一句能被当场证伪的话。', items:[
{r:'中', q:'Is histidine basic?',
 en:'“Yes, but weakly — the textbook’s own word. The imidazole has a pKa near neutral, so at cell pH it is partly protonated and partly not, and the same ring can accept or donate a proton. Lysine and arginine are fully charged at that pH and cannot do that. That is why histidine, not lysine, is the catalytic base in active sites.”',
 cn:'<b>陷阱：是，但弱。</b>「弱」才是它的用处。'},
{r:'实测', q:'Which amino acid does a His-tag use?',
 en:'“Histidine, through its imidazole ring, which coordinates the nickel. Not lysine: lysine’s ε-amino is protonated at neutral pH and has no lone pair free to donate.”',
 cn:'<b>这是 PESB 那次的原话失分。</b>His 和 lysine 是两套化学：imidazole 配位 vs 伯胺质子化。'},
{r:'高', q:'Glycine — L or D?',
 en:'“Neither. It has two hydrogens on the α-carbon, so there is no asymmetric carbon and no configuration to name.”',
 cn:'p024。<br><br><b>=== 为什么「都不是」（数一下就知道） ===</b><br><b>判据</b>：不对称碳 = <b>四个取代基两两互不相同</b>。glycine 的 α 碳上是 <code>H · H · NH₂ · COOH</code>——<b>两个 H 一样</b>，判据当场不成立。<br>代进立体异构体公式：n = 0 → <code>2⁰ = 1</code>。<b>只有一种分子，所以根本没有第二种可以拿来命名。</b><br><b>当场演示</b>：把 glycine 做个镜像，再绕 NH₂–C–COOH 这条线转 180°，两个 H 互换位置——因为它们一模一样，转完跟原分子<b>完全重合</b>。镜像和本体是同一个东西，这叫 <b>achiral</b>。<br><br><b>=== 一句话理解 ===</b><br><b>L 和 D 不是一个分子的属性，是「同一个分子式的两个不同分子」之间的区别</b>——只有一个分子的时候，这个区别没有东西可指。<br>所以正确答案不是「L」也不是「两个都有」，是<b>「这个问题在 glycine 身上不成立」</b>。同一句话顺带答掉另一个陷阱：<b>glycine 没有旋光性</b>，因为旋光要的正是这一对分子里的一个。'},
{r:'高', q:'Is proline an amino acid?',
 en:'“Strictly an imino acid — its α-nitrogen is a secondary amine because the side chain closes onto it. The textbook keeps it among the twenty and notes it is the only one without a free unsubstituted amino group.”',
 cn:'p021。'},
{r:'高', q:'Are all amino acids in nature L?',
 en:'“All amino acids <b>in proteins</b> are L. D-amino acids exist outside proteins — the textbook’s example is D-glutamate in bacterial cell walls. Peptide antibiotics are another general example.”',
 cn:'p023–p024。「都是 L」漏了「在蛋白质里」这个限定就是一句可证伪的话。'},
{r:'高', q:'You said twenty. Is that all?',
 en:'“Twenty with a codon in the standard table. And the textbook’s own table adds a footnote: UGA, normally a stop, is read as <b>selenocysteine</b> when the mRNA carries a SECIS element. So twenty standard, twenty-one coded. Everything else in proteins is made after translation: hydroxyproline, hydroxylysine, phosphoserine.”',
 cn:'p093 脚注。<b>书自己给的</b>，所以可以说 “the textbook’s own codon table”。pyrrolysine（第 22 个，某些古菌）书里没有，不必提。<br><br><b>=== 数一数（20 / 21 / 22 各是怎么数出来的） ===</b><br><b>20</b> ＝ 标准密码表里 61 个编码密码子对应到的<b>不同氨基酸的个数</b>（去重后的计数）。<br><b>21</b> ＝ 20 ＋ <b>selenocysteine</b>。它<b>不占新格子</b>：是把 <b>UGA</b> 这个本来的终止密码子，在 mRNA 带 SECIS 元件的上下文里<b>借来用</b>。所以密码表还是 64 格，只是有一格身兼两职。<br><b>22</b> ＝ 21 ＋ <b>pyrrolysine</b>（某些产甲烷古菌，借 UAG）。<b>书里没有，不主动提。</b><br>再往外：翻译后修饰出来的（hydroxyproline、phosphoserine、γ-carboxyglutamate…）<b>一个都不进这个计数</b>，因为它们没有自己的密码子——这正是 proteinogenic 那条边界画在哪里。<br><br><b>=== 一句话理解 ===</b><br><b>「二十」数的不是自然界有多少种氨基酸，是翻译机器认得多少个不同的答案。</b>所以扩张这份清单有两条路，而只有一条被用过：<b>造新格子做不到</b>（密码子只有 64 个，而且改一个格子会同时改掉所有蛋白），<b>重新解释旧格子做得到</b>——selenocysteine 就是自然界自己做的那个例子。<br><b>你实验室里用非天然氨基酸走 amber 密码子，走的是同一条路</b>：不是发明一个新密码子，是把一个用得最少的终止密码子借走。说到这里正好接上速背 19 点那个钓饵。'},
{r:'高', q:'Is hydroxyproline one of the twenty?',
 en:'“No. It is in collagen, but it is made by hydroxylating a proline that is already in the chain — a post-translational modification with no codon of its own. Natural, not proteinogenic.”',
 cn:'p022、p112。卡 13 同一条。'},
{r:'高', q:'Aspartate or asparagine — which is which?',
 en:'“Aspartate has the second carboxyl, negatively charged — one-letter D. Asparagine is its amide, -CONH₂, uncharged — one-letter N, and the one that carries N-linked sugars. The same pair for glutamate, E, and glutamine, Q.”',
 cn:'四个名字两对，单字母是通用。'},
{r:'中', q:'Which is the most polar amino acid?',
 en:'“The textbook’s answer is cysteine and tyrosine — it says so when it introduces the polar group. In general references serine and threonine are usually counted as the more polar, so I would give the textbook’s ranking and say that it is the textbook’s.”',
 cn:'p021 原话译过来是 “The most polar of these amino acids are cysteine and tyrosine”。<b>别主动说；被问再照书答并标明出处。</b>'},
{r:'中', q:'Which amino acids are purely ketogenic?',
 en:'“The textbook says only leucine — degraded entirely to acetyl-CoA and acetoacetate. Lehninger counts lysine as purely ketogenic too. Isoleucine, phenylalanine, tyrosine and tryptophan are both glucogenic and ketogenic.”',
 cn:'p125。<b>书和 Lehninger 不同，卡上明说。</b>'}
]},

{g:'相邻考点', gn:'从这道题走出去，最近的几张卡。', items:[
{r:'高', q:'How are amino acids joined?',
 en:'“By the peptide bond: the carboxyl of one amino acid condenses with the α-amino group of the next, losing one water — an amide bond. The chain is unbranched, has an N-terminus with a free amino group and a C-terminus with a free carboxyl, and by convention the sequence is written from the N-terminus.”',
 cn:'p026。整条肽键（部分双键、平面、cis/trans）在卡 01 和横向卡 bonds。<span class="pg">p026</span>'},
{r:'高', q:'Which residues get modified after translation?',
 en:'“The ones with a reactive side chain. The hydroxyls of serine, threonine and tyrosine are phosphorylated. Serine and threonine are O-glycosylated. Asparagine is N-glycosylated on its amide nitrogen. Cysteines are oxidised to disulfides. Proline and lysine are hydroxylated in collagen. Glutamate is γ-carboxylated in the clotting factors. Lysine, arginine and histidine are methylated on their amino groups, aspartate and glutamate on their carboxyls.”',
 cn:'p112–p114。<b>卡 13 的地盘</b>——这一条是那张卡的目录。<span class="pg">p112 p113 p114</span>'},
{r:'高', q:'Which residues are found in active sites?',
 en:'“The textbook names histidine, serine and tyrosine as the reactive ones. For acid-base catalysis it names the groups: the carboxyl of aspartate and glutamate, the amino of lysine, the hydroxyl of tyrosine, the imidazole of histidine. In chymotrypsin the catalytic triad is Ser195, His57 and Asp102.”',
 cn:'p061–p062。卡 18。'},
{r:'中', q:'What happens to an amino acid when it is broken down?',
 en:'“First the amino group comes off. Transamination onto 2-oxoglutarate gives glutamate, then oxidative deamination of glutamate by glutamate dehydrogenase releases ammonia, which goes to urea. The carbon skeleton then enters central metabolism: glucogenic ones end as pyruvate or citric-acid-cycle intermediates, ketogenic ones as acetyl-CoA. And the textbook says only leucine is purely ketogenic.”',
 cn:'p119–p129，书里<b>没有题落在这一段</b>，是后门区。够用即可，别往下钻。<span class="pg">p119 p120 p123 p125</span>'},
{r:'中', q:'Where does the amino group of amino acids come from in the first place?',
 en:'“From ammonia fixed onto 2-oxoglutarate by glutamate dehydrogenase to give glutamate, and a second onto glutamate by glutamine synthetase to give glutamine. Transamination from glutamate then supplies all the others. The textbook gives that in the plant chapter and says every other amino acid arises by transamination. And it says elsewhere that the twenty are the starting material for all the nitrogen compounds the organism needs.”',
 cn:'p215、p021。<b>书没有氨基酸生物合成这一节</b>（p202 引的 kap. 5.3.4 不存在）；glycine 的来路在 content/z_glycine.md。<span class="pg">p215 p021</span>'}
]},

{g:'桥回主场', gn:'他顺着这些走，就走到你答得住的地方。三句以内。', items:[
{r:'高', q:'Which amino acids do you change in your work, and why?',
 en:'“Two kinds of change. <b>Alanine</b> to delete a side chain: alanine is the smallest residue that still has a carbon side chain. Replacing a residue with it removes the chemistry without disturbing the backbone, and that tells me whether that side chain mattered for binding. And a swap that keeps the size but changes the property: a charged residue to its amide, aspartate to asparagine, or lysine to glutamate to reverse an ion pair. Each variant I read out as a change in the dissociation constant.”',
 cn:'alanine scanning 是通用技术；Kd 在卡 02。<b>说 “a binding surface”，不点名。</b>'},
{r:'高', q:'You mentioned an unnatural amino acid — how do you put one in?',
 en:'“By expanding the code: a stop codon, usually the amber codon UAG, is reassigned, and the cell is given an orthogonal pair. That pair is an aminoacyl-tRNA synthetase that charges only the new amino acid onto a tRNA that reads only UAG. The one I used is a photo-crosslinker, a benzoyl-phenylalanine, so that on UV light it fixes whatever its ring touches. It is the same principle the textbook shows for selenocysteine: a stop codon read as an amino acid when the context says so.”',
 cn:'pBpa = p-benzoyl-L-phenylalanine。<b>三句说完就停</b>，再往下是 PESB 那门的内容。<br>⚠ 发音：<b>aminoacyl-tRNA synthetase</b>——PESB 那次说成 acryl。这个词没大声说过三遍不算会。'}
]}
]
});
