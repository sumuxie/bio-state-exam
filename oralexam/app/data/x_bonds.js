/* 横向卡 · 生物化学里的各种键
   不对应某一道题，跨很多题共用。
   出处 Biochemie OCR p012、p026–p027、p032、p036、p050、p053、p072、p112–p114 */

window.CARDS.push({
id:'x-bonds', cross:1, w:0,
q:'生物化学里到底有哪些键，怎么分清',
qcn:'横向卡 · 共价七种 ＋ 非共价三种 ＋ 一个不是键的东西',
sub:'跨题共用 · 卡 01、13、03、22、23、24 都要用到',

cram:[
 {g:'先分清两个不同的问题', gn:'乱，多半是因为把这两个问题混成了一个。'},
 {n:'01', t:'第一个问题',
  big:'这是<b>什么种类</b>的键？——看它<b>连接的是哪两个基团</b>',
  en:'“Almost every bond in biochemistry is named by the two groups it joins. Peptide, carboxyl to amino. Ester, acid to alcohol. Thioester, acid to thiol. Glycosidic, anomeric carbon to a hydroxyl or an amine. Know the two ends and the name follows.”',
  note:'键的名字几乎全是按「谁连谁」起的：<b>肽</b>键连羧基和氨基，<b>酯</b>键连酸和醇，<b>硫酯</b>键连酸和巯基，<b>糖苷</b>键连异头碳和一个羟基或氮。<b>知道两头是什么官能团，名字就能自己推出来。</b>'},
 {n:'02', t:'第二个问题',
  big:'这个键<b>断了能放出多少能量</b>？——跟种类<b>没有必然关系</b>',
  en:'“The textbook says we should speak of macroergic <b>compounds</b> rather than macroergic bonds. A macroergic compound is one in an energetically unstable state, held there by a single bond. Breaking that bond by hydrolysis releases <b>30 to 60 kJ per mole</b>, against under 12 for an ordinary bond — ATP to ADP is minus 30.5. It is not a strong bond. It is an unstable compound whose products are much more stable.”',
  note:'书对 makroergické sloučeniny 的说法是：<b>能相对容易地从中取得大量能量</b>，是生物体的通用「能量货币」（p016）。<br><br><b>这是最容易乱的地方：「高能键」不是「强键」，正好相反。</b>它容易断，而且断完之后回不去。',
  warn:'考场上别说 "high-energy bond" 就完事。被追问「高在哪」，答<b>产物更稳定</b>，不是<b>键更强</b>。'},

 {g:'共价键 · 七种', gn:'共价 = 共用电子。断它要酶，或者要强条件。按「连接什么」排。'},
 {n:'03', t:'peptide（= amide）',
  big:'一个氨基酸的 <b>–COOH</b> ＋ 下一个的 <b>α–NH₂</b>，脱一分子水',
  en:'“The amide bond between the carboxyl carbon of one amino acid and the α-amino nitrogen of the next, formed by condensation with the loss of one water. The textbook writes it as peptide (amide) bond.”',
  note:'肽键就是<b>酰胺键</b>，两个名字一个东西。因为氮的孤对部分离域进羰基，C–N 键长 <b>1.32 Å</b>，介于单键 1.49 和双键 1.27 之间——<b>所以它是平面的、不能自由转动</b>。<span class="pg">p026 p027</span>'},
 {n:'04', t:'disulfide',
  big:'两个 cysteine 侧链之间的<b>共价 –S–S–</b>（空间相邻、序列可远、可跨链），由 –SH <b>氧化</b>生成',
  en:'“A covalent S-S bond between the sulfur atoms of two cysteine side chains — neighbours in space, not necessarily in sequence, and possibly on different chains. The A and B chains of insulin are joined that way. It forms by oxidation of the two SH groups, and the linked pair is called cystine. The textbook says it mainly stabilises a structure that has already formed.”',
  note:'这是<b>书里列的唯一一个能把已经折好的构象锁住的共价键</b>（胶原的赖氨酸交联、异肽键是书外的）。书 p113 的说法很好用：它是把肽链<b>固定在一个能量上并不完全有利的构象</b>上的办法。<br><br>形成的酶叫 <b>protein disulfide isomerase</b>，在 ER 池里。<b>胞质是还原性的，那里形不成二硫键</b>——这一句是卡 13 的骨架（通用知识；书只给了 ER 那一半）。英文：“Disulfide bonds form in the lumen of the endoplasmic reticulum, catalysed by protein disulfide isomerase. The cytosol is reducing, so cytosolic proteins generally lack them. The textbook says it is one way to fix the chain in a conformation that is not energetically the most favourable.”<span class="pg">p032 p113</span>'},
 {n:'05', t:'glycosidic',
  big:'糖的<b>异头碳</b> ＋ 另一个基团的 <b>–OH 或 –NH</b>',
  en:'“The bond from the anomeric carbon of a sugar to the oxygen of a hydroxyl, O-glycosidic, or to a nitrogen, N-glycosidic. The anomeric carbon is the former carbonyl carbon, C-1 in glucose, which became a hemiacetal on ring closure. It forms by condensation of the hemiacetal hydroxyl with loss of water, and its configuration at that carbon is α or β. The textbook notes the N-glycosidic bond in DNA and RNA is β.”',
  note:'<b>接蛋白时</b>：N- 接在 <b>asparagine 的酰胺氮</b>，O- 接在 <b>serine 或 threonine 的羟基</b>（p112）。<br><b>接糖时</b>：两个单糖之间就是糖苷键，构型分 α 和 β（第 7 章）。<br><b>接碱基时</b>：核苷里糖和碱基之间也是 N-糖苷键。<b>同一个名字，三个地方。</b><span class="pg">p036 p067 p112</span>'},
 {n:'06', t:'phosphodiester',
  big:'一个磷酸<b>同时酯化两个羟基</b>，所以能把两个糖连起来',
  en:'“One phosphate esterified to two different hydroxyls — in nucleic acids, between the 3′-hydroxyl of one pentose and the 5′-hydroxyl of the next.”',
  note:'书讲得很具体：<b>3′ 连 5′</b>，DNA 和 RNA 都是这个连法（p072）。<br><br>「diester」这个名字本身就说明了它为什么能当链的骨架：<b>一个磷酸用掉两个羟基，还剩一个负电荷</b>——核酸带负电就是从这儿来的。<span class="pg">p072</span>'},
 {n:'07', t:'ester',
  big:'一个<b>酸</b>（含磷酸）＋ 一个<b>醇</b>，脱水',
  en:'“An ester is the bond between an acid and an alcohol, formed by condensation with loss of water. Three places in biochemistry. First, phosphate esters. A kinase puts phosphate on the hydroxyl of serine or threonine or the phenolic hydroxyl of tyrosine, and sugars are metabolised almost only as phosphate esters. Second, the fatty acids on glycerol in acylglycerols. Third, the amino acid on tRNA, bound by its carboxyl as an ester to the 2′- or 3′-hydroxyl of the terminal adenosine.”',
  note:'在生化里主要见于三处：<b>磷酸酯</b>——Ser、Thr 的羟基和 Tyr 的酚羟基被激酶磷酸化（p113–p114）；<b>甘油酯</b>——脂肪酸接在甘油上（第 8 章）；<b>tRNA 上的氨基酸</b>——以酯键接在 2′ 或 3′ 羟基上（p096）。<span class="pg">p096 p113</span>'},
 {n:'08', t:'thioester',
  big:'一个<b>酸</b> ＋ 一个<b>巯基</b>——比酯<b>活泼得多</b>',
  en:'“A thioester is the acyl bond between a carboxylic acid and a thiol — in acetyl-CoA the acetyl group sits on the free SH of coenzyme A. The textbook calls thioesters generally very reactive and acetyl-CoA macroergic, and gives the reason: the sulfur atom prevents the resonance that normally stabilises an O-ester, so the carbonyl stays reactive.”',
  note:'<b>这是「种类」和「能量」两个问题在同一个键上相遇的地方</b>：硫酯和酯连接的官能团只差一个原子（O 换成 S），但硫酯是高能化合物，酯不是。<span class="pg">p050</span>',
  warn:'理由<b>书里写了</b>（p132、p136：硫原子阻止了 O-酯常见的离域/共振，<i>atom síry brání mezomerii</i>）。可以直接说是书上的。'},
 {n:'09', t:'anhydride',
  big:'两个<b>酸</b>缩掉一分子水——ATP 的磷酸酐键就是这个',
  en:'“An anhydride is what two acids give when they condense with loss of water. In ATP the α-β and β-γ links are phosphoanhydride bonds, but the α-phosphate is joined to the 5′-hydroxyl of ribose by an ester. So ATP has two macroergic bonds, not three, and hydrolysing that ester gives under 12 kJ per mole. The textbook also puts pyrophosphate, the acyl phosphates 1,3-bisphosphoglycerate and carbamoyl phosphate, and the phosphosulfate of PAPS under anhydrides, and says ATP and ADP are complexed with Mg²⁺ in the cell.”',
  note:'ATP 里 α–β 和 β–γ 之间是<b>磷酸酐</b>键，α 和核糖之间是<b>酯</b>键。<b>所以同一个分子上两种键，能量完全不同</b>：水解酐键放能多，水解那个酯键放得很少，在书 p131 的 12 kJ/mol 门槛以下（这一条是标准知识，不在 p132）。<br><br>这解释了为什么说「ATP 有两个高能键」而不是三个。<span class="pg">p024 p132</span>'},
 {n:'10', t:'coordination',
  big:'金属离子的<b>空轨道</b> ＋ 配体的<b>孤对电子</b>',
  en:'“A coordination bond is a covalent bond in which both electrons come from one partner. A ligand donates a lone pair into an empty orbital of a metal ion. The textbook calls it a coordination bond, some books a dative bond. There are three examples. The cobalt ion at the centre of vitamin B12 is held by four coordination bonds from the corrin ring. The iron in heme is held by the four nitrogens of the porphyrin. And metalloproteins bind metals through carboxyl, imidazole and sulfhydryl groups — the imidazole being the histidine side chain.”',
  note:'书里出现三处：<b>维生素 B12</b> 中间的钴被<b>四个配位键</b>抱住（p053）；<b>血红素</b>里的铁被卟啉抱住（p037）；<b>金属蛋白</b>用羧基、<b>咪唑基</b>、巯基结合金属（p036）。<br><br><b>咪唑基就是 histidine 的侧链——这正是 His-tag 靠的那个键。</b><span class="pg">p036 p037 p053</span>',
  warn:'往下追到「哪个空轨道、为什么是八面体」就是<b>无机化学</b>，说停止句收手：“Which orbital and why the geometry is octahedral is inorganic chemistry — I would stop there.”'},

 {g:'非共价 · 三种', gn:'不共用电子。单个都很弱，靠数量取胜。三级和四级结构主要靠它们 ＋ 疏水效应；二硫键（共价）也参与固定，书 p034 把它排在第一个。'},
 {n:'11', t:'hydrogen bond',
  big:'已经接在电负性原子上的 <b>H</b> ＋ 另一个电负性原子的<b>孤对</b>',
  en:'“An electrostatic attraction between a hydrogen covalently bound to an electronegative atom and a lone pair on another electronegative atom. The N-H or O-H group is the donor, and the lone pair is the acceptor. The textbook classes it as a special case of dipole–dipole electrostatic interaction and calls it the main factor forming and stabilising regular secondary structure. Unlike van der Waals contacts it is <b>directional</b>. That is why it can fix a geometry rather than merely hold two groups close, and why regular secondary structure can exist at all.”',
  note:'<b>方向性是它的关键</b>：正因为有方向，它才能<b>固定一个几何形状</b>，而不只是把东西拉近。二级结构能存在就是靠这一条。<br><br>供体只能是 <b>N–H、O–H</b>（S–H 很弱），受体是 <b>O、N</b> 上的孤对。<b>C–H 不行</b>，碳的电负性不够。英文：“The donors are N-H and O-H. The acceptors are the lone pairs on oxygen and nitrogen. A C-H does not count — carbon is not electronegative enough to polarise the hydrogen.”',
  warn:'<b>书只给了一句归类</b>（p032：偶极间静电作用的特例，是形成和稳定规则二级结构的重要因素；p012 同样）；供体/受体和方向性是自己带的。它是实测追问链上的一环，这条必须自己带着。'},
 {n:'12', t:'ion pair / salt bridge',
  big:'一个<b>酸性</b>侧链 ＋ 一个<b>碱性</b>侧链的静电吸引',
  en:'“An ion pair, also called a salt bridge, is the electrostatic attraction between an ionised acidic side chain and an ionised basic one. The acidic one is the carboxylate of glutamate or aspartate, the basic one the ε-ammonium of lysine or the guanidinium of arginine. It exists only while both carry their charge, so it is lost when the pH moves far enough to neutralise either side.”',
  note:'书给的组合：<b>Glu、Asp</b> 对 <b>Lys、Arg</b>（p032）。两个名字（离子对 / 盐桥）是同一个东西。<br><br><b>它依赖 pH</b>：把 pH 拉到侧链失去电荷，这个键就没了——这就是酸碱能让蛋白变性的原因之一。<span class="pg">p032</span>'},
 {n:'13', t:'van der Waals',
  big:'瞬时偶极之间的 <b>London 吸引</b> ＋ 电子云重叠时的<b>排斥</b>',
  en:'“Weak, basically electrostatic interactions that act even between completely nonpolar atoms. There is an attractive London dispersion term, a transient dipole inducing a dipole, and a repulsive term when the electron clouds overlap. Each is small, but in a tightly packed protein the number of contacts makes the total large.”',
  note:'书特意写了两部分，<b>排斥那一半常被忘掉</b>（p032）。<br><br>单个极弱，<b>但堆紧的蛋白内部接触极多，总和很大</b>——书自己强调了这一点。所以它没有方向性，却决定了「堆得紧不紧」。<span class="pg">p032</span>'},

 {g:'一个不是键的东西', gn:'这一格单独拿出来，因为把它当成键是最常见的错。'},
 {n:'14', t:'hydrophobic effect',
  big:'<b>它不是一种键。</b>它是<b>水</b>获得的熵',
  en:'“The tendency of nonpolar groups in water to associate with one another. It is not a bond — the textbook says explicitly it is not an affinity between the nonpolar groups. It is an entropy effect: the ordered layer of water molecules around each nonpolar surface is released when they pack together, so the entropy of the water rises.”',
  note:'书说得很直接：它<b>不是非极性物质之间某种亲和力的表现（不是一种键）</b>，而是<b>溶质周围水的结构发生变化的结果</b>（p013）。<br><br>所以当老师问「有哪些非共价相互作用」时，前三个是键，这个是<b>驱动力</b>。<b>把这个区别说出来是加分。</b><span class="pg">p012 p013 p032 p033</span>'},

 {g:'另一个维度：高能', gn:'跟「种类」正交。同一种键可以高能也可以不高能。'},
 {n:'15', t:'makroergní',
  big:'高能的是<b>化合物</b>，不是<b>键的种类</b>',
  en:'“The textbook lists four types of macroergic compound. Phosphoanhydrides: ATP, pyrophosphate, and the acyl phosphates. Phosphamides: the phosphagens creatine phosphate in vertebrates and phosphoarginine in invertebrates. Enol phosphates: phosphoenolpyruvate, with the highest free energy of hydrolysis. And thioesters: acetyl-CoA. On the same ATP molecule the anhydride bonds are macroergic and the ribose ester is not, so macroergic is a property of the compound, not of a bond type.”',
  tbl:{head:['高能的','键的种类','出处'],
   rows:[
    ['<b>ATP</b> 的 β–γ 与 α–β','磷酸<b>酐</b>','p132'],
    ['<b>acetyl-CoA</b>','<b>硫酯</b>','p050'],
    ['<b>phosphoenolpyruvate</b>、1,3-bisphosphoglycerate','烯醇磷酸 / 酰基磷酸','第 6、7 章'],
    ['ATP 的 α–核糖','磷酸<b>酯</b> ——<b>这个不高能</b>','标准知识；门槛见 p131'],
    ['<b>creatine phosphate</b>、phosphoarginine','<b>磷酰胺</b>（fosfamid）——书列的第二类','p132']
   ]},
  note:'<b>最后一行是重点</b>：同一个 ATP 分子上，酐键高能、酯键不高能。<b>所以「高能」是化合物的性质，不是某类键天生的性质。</b>'}
],

end:'<b>这张卡的用法：</b>被问到任何一个键，先答<b>它连接的是哪两个基团</b>，再答它属于共价还是非共价。这两句给完，剩下的都是细节。<b>「高能」是另一个问题，别混进来。</b>',

/* ---------------- 演练 ---------------- */
segs:[
 {tag:'段 1 · 定义', h:'先说键是什么，再给两个分法',
  p:['“A chemical bond is an attraction between atoms strong enough to hold them together as one unit. In biochemistry we sort bonds by two questions. First, what kind. A <b>covalent</b> bond is two atoms sharing a pair of electrons, hundreds of kJ per mole, the bonds that fix the sequence. <b>Non-covalent</b> interactions are electrostatic attractions that share no electrons, a few kJ per mole each, the ones that build the conformation.”',
     '“Second, how much energy comes out when it breaks. That, the textbook says, is a property of the <b>compound</b>, not of the kind of bond: speak of macroergic compounds, not macroergic bonds.”'],
  note:'两个问题分开问，是这张卡的骨架：<b>种类</b>看连接的是哪两个基团；<b>能量</b>看产物比反应物稳定多少。书 p012 分共价/非共价，p131 说「化合物不说键」。'},
 {tag:'段 2 · general', h:'共价按「谁连谁」报，非共价三种，外加一个不是键的',
  p:['“Covalent bonds are named by what they join. The <b>peptide</b> bond, carboxyl carbon to α-amino nitrogen — an amide. The <b>disulfide</b>, sulfur to sulfur between two cysteines. The <b>glycosidic</b> bond, anomeric carbon to a hydroxyl or a nitrogen. The <b>phosphodiester</b>, one phosphate esterified to two hydroxyls. The <b>ester</b>, acid to alcohol. The <b>thioester</b>, acid to thiol. The <b>anhydride</b>, acid to acid. And the <b>coordination</b> bond, a lone pair donated into an empty orbital of a metal.”',
     '“Non-covalent, three. The <b>ion pair</b> between a carboxylate and an ammonium or guanidinium. The <b>hydrogen bond</b>, a special case of dipole–dipole attraction, directional. And <b>van der Waals</b> contacts, weak singly but many. And one thing that is not a bond at all: the <b>hydrophobic effect</b>, the entropy the water gains when nonpolar groups pack together.”'],
  note:'名字几乎全是按「谁连谁」起的，知道两头就能推名字。书给的非共价清单在 p032；疏水效应「不是键」在 p013。'},
 {tag:'段 3 · 稍展开', h:'挑肽键和氢键，因为二级结构靠它们',
  p:['“Take the peptide bond. The nitrogen lone pair is delocalised into the carbonyl, so the C-N is 1.32 Å, between a single bond at 1.49 and a double at 1.27. That is a partial double bond, planar, no rotation, hence cis and trans. That is why the backbone has only two free rotations per residue, and why there are so few kinds of regular secondary structure.”',
     '“And the bond that holds those structures: the hydrogen bond — an electrostatic attraction between an N-H or O-H donor and a lone pair on oxygen or nitrogen. It is directional, which is why it can fix a geometry rather than merely hold two groups close.”'],
  note:'p027 键长三个数；p032 氢键归类。<b>两句连起来就是「为什么二级结构只有那几种」。</b>'},
 {tag:'段 4 · 留口子', h:'落到 His-tag 和 Kd',
  p:['“The bond I use every week is the coordination bond: the imidazole of histidine donating its lone pair into an empty orbital of an immobilised Ni²⁺. That is a His-tag column, and imidazole in the buffer competes it off.”',
     '“And the number I measure, the dissociation constant, is a statement about non-covalent bonds only. A nanomolar K d is a handful of hydrogen bonds and ion pairs plus the hydrophobic effect — no covalent bond involved. That is exactly why it is reversible.”'],
  note:'两个口子都在主场：His-tag 的配位键（卡 x_bonds 自己的追问），Kd 是非共价的总和（卡 02）。'}
],

why:{
 rungs:[
  ['为什么共价键强、非共价键弱？','共价是<b>共用电子对</b>，拆开要重新分配电子；非共价只是<b>静电吸引</b>，拆开只要克服库仑力或偶极。差两个数量级，所以一个定序列、一个定构象。'],
  ['为什么「高能」不是键的性质？','因为放出的能量是<b>产物比反应物稳定多少</b>，是整个化合物的事——同一个 ATP 上酐键放 30 kJ/mol、酯键不到 12（p131）。'],
  ['疏水效应为什么不算键？','因为它不是两个基团之间的吸引，是<b>水的熵</b>：非极性面靠在一起时，周围有序的水被放掉（p013、p033）。']
 ],
 stop:{lbl:'停 · 落在物理化学',
  say:'“Below that it is physical chemistry rather than biochemistry — which orbital overlaps which, why a lone pair delocalises, why an electron cloud repels.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What forces hold a protein together?',
 mean:'共价两种 ＋ 非共价三种 ＋ 一个驱动力。<b>按级给，不要一股脑列。</b>',
 say:'“Covalently, the peptide bonds of the backbone and the disulfide bridges. Non-covalently, hydrogen bonds, ion pairs and van der Waals contacts. And underneath those, the hydrophobic effect — which is not a bond at all, it is the entropy of the water.”'},

{q:'What kind of bond joins two nucleotides?',
 mean:'phosphodiester，而且要给 <b>3′–5′</b>。',
 say:'“A phosphodiester bond — one phosphate esterified to two hydroxyls, formed between the 3′-hydroxyl of one pentose and the 5′-hydroxyl of the next. It is usually 3′→5′ in both DNA and RNA, and the textbook adds that RNA can also form 2′-5′.”'},

{q:'Why is DNA negatively charged?', odd:1,
 mean:'还是 phosphodiester。<b>一个磷酸用掉两个羟基，还剩一个负电荷。</b>',
 say:'“Because of the phosphodiester backbone. Two of the phosphate’s four oxygens are in ester links to the two sugars, the other two are free and share one negative charge. At pH 7 the group is fully ionised — the textbook’s words. So one negative charge per nucleotide.”'},

{q:'Why does soap denature proteins?', odd:1,
 mean:'问的是<b>疏水效应</b>——不是三种键里的任何一种。',
 say:'“Soap is a detergent, and a detergent is amphipathic, so it gets between the nonpolar side chains and takes away the hydrophobic effect that was holding the core together. The textbook lists detergents together with urea and guanidine as chemical denaturants — and notes that unlike heat, they do not cause coagulation.”'},

{q:'Why does a change of pH destroy a protein?', odd:1,
 mean:'问的是 <b>ion pair</b> 依赖电荷。',
 say:'“Because ion pairs need both partners charged. Change the pH far enough and the acidic or the basic side chain loses its charge, and every salt bridge holding the fold together simply stops existing. The textbook lists strong acids and bases among the chemical denaturants.”'},

{q:'What does the nickel in a His-tag column actually bind?', odd:1,
 mean:'问的是 <b>coordination bond</b>。',
 say:'“The imidazole ring of histidine. The unprotonated ring nitrogen donates its lone pair into an empty orbital of the immobilised Ni²⁺ — a coordination bond. The textbook lists exactly that group as the ones that form complexes with metals — carboxyl, <b>imidazole</b> and sulfhydryl.”',
 tail:'⚠ 这条是 PESB 那次的失分点。<b>不是 histidine binds lysine，也不是靠芳香环。</b>往下追到「哪个空轨道」就说停止句。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'卡上的英文句用到的词，他会单独拎出来问。', items:[
{r:'中', q:'What is a high-energy bond?',
 en:'“The name is a little misleading, and the textbook says so: speak of macroergic compounds, not bonds. A macroergic compound is one in an energetically unstable state, held there by a single bond. Hydrolysing that bond releases 30 to 60 kJ per mole, against under 12 for an ordinary one — ATP to ADP is minus 30.5. For ATP the instability is the accumulated negative charges on the phosphate oxygens repelling each other. It is not a strong bond — its products are simply much more stable. ATP and acetyl-CoA are the standard examples.”',
 cn:'<b>陷阱题。</b>他想看你会不会说成「键特别强」。'},
{r:'高', q:'What is a chemical bond, and what is covalent versus non-covalent?',
 en:'“A chemical bond is an attraction between atoms strong enough to hold them together as one unit. A covalent bond is one in which two atoms share a pair of electrons — the strong bond, hundreds of kJ per mole. In a protein it fixes the sequence, the primary structure. A non-covalent interaction is an attraction between groups that does not share electrons — electrostatic in origin: ion pairs, hydrogen bonds, van der Waals contacts. Each is weak, a few kJ per mole, so the structure rests on their number. They build the conformation — secondary, tertiary, quaternary. Covalent bonds fix the sequence.”',
 cn:'书 p012 把共价和非共价分开说；强度数字是通用。'},
{r:'高', q:'What is resonance — mesomerism?',
 en:'“Resonance is when the real electron distribution is a blend of more than one drawable structure: the electrons are delocalised over several bonds. The textbook’s word is mesomerism. In an O-ester the oxygen’s lone pair is shared into the carbonyl, which stabilises the ester and blunts the carbonyl. Sulfur’s lone pair overlaps poorly with carbon, so in a thioester that sharing fails and the carbonyl stays reactive.”',
 cn:'硫酯那句是书 p132、p136；定义通用。'},
{r:'中', q:'What is a hemiacetal, and what is an anomer?',
 en:'“A hemiacetal is an aldehyde that has added one alcohol, so one carbon carries both an -OH and an -OR. In glucose the C-1 aldehyde adds the C-5 hydroxyl inside the same molecule, giving the six-membered pyranose. Fructose’s C-2 ketone does the same to give a hemiketal, the five-membered furanose. Ring closure makes C-1 a new asymmetric carbon, so there are two cyclic forms, α and β — the anomers. C-1 is the anomeric carbon, and in solution they interconvert through the open chain, which is mutarotation. Replace that hemiacetal -OH with -OR and you have an acetal — a glycoside.”',
 cn:'p149–p151、p153。'},
{r:'中', q:'What is a phosphamide — a phosphagen?',
 en:'“A phosphamide is a phosphate bound to nitrogen, a P–N bond. The textbook’s examples are the phosphagens, creatine phosphate in vertebrates and phosphoarginine in invertebrates — a phosphate store that can be handed back to ADP. It is macroergic because the partial positive charge on phosphorus blocks mesomerism.”',
 cn:'p132。'},
{r:'中', q:'What are a dipole, a lone pair and electronegativity?',
 en:'“Electronegativity is how strongly an atom pulls shared electrons toward itself — oxygen and nitrogen strongly, carbon and hydrogen much less. A dipole is a bond or molecule whose positive and negative charge centres are separated because one atom pulls the electrons harder. O-H and N-H are permanent dipoles. A transient dipole is the same thing for an instant, and it induces an opposite dipole in a neighbour. A lone pair is a pair of valence electrons on an atom that is not in a bond — nitrogen has one, oxygen two. It is what a hydrogen-bond acceptor offers and what a ligand donates in a coordination bond.”',
 cn:'通用；书 p012、p027、p032 用了这些词没定义。'},
{r:'中', q:'What does amphipathic mean, and what is coagulation?',
 en:'“Amphipathic means one molecule with a nonpolar, hydrophobic part and a polar, hydrophilic part. The textbook’s word is amfipatie, used for phospholipids: fatty-acid tails and a glycerol-phosphate head. A detergent is the same design, a hydrocarbon tail with an ionic head. Coagulation is when a denatured protein separates out of solution — the textbook’s example is heat. Detergents and urea unfold the chain without precipitating it.”',
 cn:'p181；p035。'},
{r:'中', q:'What is a porphyrin, and what is a corrin?',
 en:'“A porphyrin is a ring of four pyrrole rings joined by methine bridges. With iron at the centre it is heme. The corrin of vitamin B12 is similar, but two of the pyrroles are joined directly, and the metal is cobalt.”',
 cn:'p037、p053。'},
{r:'中', q:'Why is forming a disulfide an oxidation?',
 en:'“Because the two thiols lose two hydrogen atoms to an acceptor — two protons and two electrons. In proinsulin the textbook names oxidised glutathione as that acceptor.”',
 cn:'p113。'}
]},
{g:'最容易混的几对', gn:'乱，通常不是不知道，是两个名字挨得太近。', items:[
{r:'高', q:'Ester versus thioester — what is the difference?',
 en:'“Only one atom: an ester joins an acid to an <b>alcohol</b>, a thioester joins it to a <b>thiol</b>. But that one atom changes everything. The sulfur blocks the resonance that stabilises an O-ester, so the thioester is much more reactive. Acetyl-CoA is a macroergic compound while a simple carboxylic O-ester is not.”',
 cn:'<b>这一对是「种类相近、能量差很远」的标准例子</b>，非常适合用来展示你分得清那两个问题。<span class="pg">p050</span>'},
{r:'高', q:'Amide or peptide — are they the same bond?',
 en:'“Yes. The peptide bond <b>is</b> an amide bond. Peptide is just the name we use when it joins two amino acids. The textbook writes it as “peptidová (amidová) vazba”.”',
 cn:'书 p026 括号里就并排写了这两个名字。<b>知道它们是一回事，比记住两个名字有用。</b><span class="pg">p026</span>'},
{r:'高', q:'Ion pair, salt bridge, ionic bond — three things or one?',
 en:'“Two names for one thing, and a third that is related but not what we say for proteins. Ion pair and salt bridge are the textbook’s two names for the electrostatic attraction between an ionised acidic side chain and an ionised basic one. The acidic one is the carboxylate of glutamate or aspartate, the basic one the ε-ammonium of lysine or the guanidinium of arginine. In the protein literature ‘salt bridge’ is sometimes reserved for an ion pair close enough to hydrogen-bond as well. What we do not call it in proteins is an ionic bond in the crystal sense, because it is one pair in water, not a lattice.”',
 cn:'书用的词是 <i>iontové páry</i>（离子对），「也叫 <i>solné můstky</i>（盐桥）」（p012、p032）；<i>iontová vazba</i> 书只用在 p074 磷酸–Mg²⁺ 那里：“The textbook uses ‘ionic bond’ only once, for the fully ionised phosphate groups of DNA binding Mg²⁺ or Mn²⁺.”<b>回答时用 salt bridge，因为那是英语文献里更常见的。</b>'},
{r:'实测', q:'Is the hydrophobic effect a bond?',
 en:'“No. The hydrophobic effect is the tendency of nonpolar groups in water to associate. It is not an attraction between them at all — it is the entropy the water gains when the ordered layer around each nonpolar surface is released. So it is a driving force rather than a bond.”',
 cn:'书 p013 明确否定了「非极性物质之间有某种亲和力」这个说法。<b>这一条同时是很多题的 why 落点</b>，说完就可以停在热力学上。',
 good:'<b>停止句：</b>“Below that it is an entropy term of water — physical chemistry rather than biochemistry.”'},
{r:'中', q:'N-glycosidic and O-glycosidic — where does each occur?',
 en:'“O-glycosidic between two sugars, and to the hydroxyl of serine or threonine in glycoproteins. N-glycosidic to the amide nitrogen of asparagine in glycoproteins. And in every nucleoside, from C-1′ of the pentose to N-9 of a purine or N-1 of a pyrimidine. The textbook notes this N-glycosidic bond is β.”',
 cn:'<b>同一个名字出现在三个完全不同的章节</b>（糖、糖蛋白、核苷），这是它容易乱的原因。<span class="pg">p036 p067 p112</span>'}
]},

{g:'为什么类', gn:'键的「为什么」几乎都落在同一个地方：稳定性差。', items:[
{r:'中', q:'Why is acetyl-CoA special?',
 en:'“Because the acetyl group is bound to the free SH of coenzyme A, so it is a <b>thioester</b>. The textbook calls thioesters generally very reactive, and acetyl-CoA a macroergic compound. That is why it can donate the acetyl group in so many reactions.”',
 cn:'问的是<b>硫酯</b>。'},
{r:'高', q:'Why is the peptide bond planar?',
 en:'“Because the lone pair on the nitrogen is partly delocalised into the carbonyl, so the C-N bond has partial double-bond character. It is 1.32 Å, between a single bond at 1.49 and a double at 1.27. A partial double bond cannot rotate. The atoms around it are held in one plane — the two α-carbons, the carbonyl C and O, and the N and its H.”',
 cn:'<b>这是全书最好用的一条「结构解释性质」</b>：一个键长数字直接解释了为什么蛋白骨架只剩两个可转的角，也就解释了为什么二级结构只有那么几种：“So each residue has only two freely rotating bonds, the two at the α-carbon — which is why there are so few kinds of regular secondary structure.”<span class="pg">p027</span>'},
{r:'中', q:'Why does the cell use ATP rather than some stronger bond?',
 en:'“Because what matters is not the strength of the bond but the difference in stability before and after. ATP sits in a useful middle range. Hydrolysis of its terminal β-γ anhydride bond to ADP and phosphate is minus 30.5 kJ per mole. That is enough to drive glucose phosphorylation at plus 13.8, with the coupled reaction at minus 16.7, yet low enough that it can be regenerated. The textbook calls macroergic compounds the organism’s universal energy currency.”',
 cn:'<b>「货币」这个比喻是书自己用的</b>（p016），用它比自己发挥安全。'}
]}
]
});
