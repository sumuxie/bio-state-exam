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
  ez:'“Almost every bond in biochemistry is named the same way. It is named by the two groups it joins. Peptide joins a carboxyl to an amino. Ester joins an acid to an alcohol. Thioester joins an acid to a thiol. Glycosidic joins an anomeric carbon to a hydroxyl. It can also join it to an amine. So know the two ends. Then the name follows.”',
  ezcn:'<b>生物化学里几乎每一种键，命名方式都一样：按它连接的那两个基团命名。</b><b>肽键 ＝ 羧基 ＋ 氨基</b>；<b>酯键 ＝ 酸 ＋ 醇</b>；<b>硫酯键 ＝ 酸 ＋ 硫醇</b>；<b>糖苷键 ＝ 异头碳 ＋ 一个羟基（或者一个胺）</b>。<b>知道两头是什么，名字就出来了。</b>',
  big:'这是<b>什么种类</b>的键？——看它<b>连接的是哪两个基团</b>',
  en:'“Almost every bond in biochemistry is named by the two groups it joins. Peptide, carboxyl to amino. Ester, acid to alcohol. Thioester, acid to thiol. Glycosidic, anomeric carbon to a hydroxyl or an amine. Know the two ends and the name follows.”',
  note:'键的名字几乎全是按「谁连谁」起的：<b>肽</b>键连羧基和氨基，<b>酯</b>键连酸和醇，<b>硫酯</b>键连酸和巯基，<b>糖苷</b>键连异头碳和一个羟基或氮。<b>知道两头是什么官能团，名字就能自己推出来。</b>'},
 {n:'02', t:'第二个问题',
  ez:'“The textbook says we should change the wording. We should speak of macroergic compounds. We should not speak of macroergic bonds. A macroergic compound is in an energetically unstable state. A single bond holds it there. Breaking that bond by hydrolysis releases thirty to sixty kilojoules per mole. An ordinary bond releases under twelve. A T P to A D P is minus thirty point five. So it is not a strong bond. It is an unstable compound. Its products are much more stable.”',
  ezcn:'<b>书说措辞要改：应该说「高能化合物」，不要说「高能键」。</b><b>高能化合物 ＝ 处在能量上不稳定状态、被某一根键维持在那里的化合物</b>；<b>水解那根键放出 30–60 kJ/mol，而普通键不到 12</b>（<b>ATP→ADP 是 −30.5</b>）。<b>所以它不是一根「强键」——它是一个不稳定的化合物，而它的产物稳定得多。</b>',
  big:'这个键<b>断了能放出多少能量</b>？——跟种类<b>没有必然关系</b>',
  en:'“The textbook says we should speak of macroergic <b>compounds</b> rather than macroergic bonds. A macroergic compound is one in an energetically unstable state, held there by a single bond. Breaking that bond by hydrolysis releases <b>30 to 60 kJ per mole</b>, against under 12 for an ordinary bond — ATP to ADP is minus 30.5. It is not a strong bond. It is an unstable compound whose products are much more stable.”',
  note:'书对 macroergic compounds 的说法是：<b>能相对容易地从中取得大量能量</b>，是生物体的通用「能量货币」（p016）。<br><br><b>这是最容易乱的地方：「高能键」不是「强键」，正好相反。</b>它容易断，而且断完之后回不去。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>式子</b>：<code>ΔG°′ = −RT ln K</code><br>ΔG°′ 是标准自由能变（撇 ＝ 生化标准态，pH 7）· R = 8.314 J·mol⁻¹·K⁻¹ · T 是绝对温度 · K 是平衡常数。<br><br><b>三步推导</b>（他问「30 到 60 这个门槛哪来的」就照这个说）：<br>① 每个组分的化学势 <code>μ = μ° + RT ln a</code>（a 是活度，稀溶液里当浓度用）。书 p017–p018 就是从这儿起步的。<br>② 平衡时整个体系 <code>ΔG = 0</code>，把各组分按化学计量代进去整理 → <code>ΔG°′ = −RT ln K</code>（书 p018 印的是 −ΔG°′ = RT ln K，同一个式子，只差挪个负号）。<br>③ 换成以 10 为底：<code>ΔG°′ = −RT·ln10·log K = −5.71·log K</code>（25 °C）。<b>K 每差十倍，ΔG°′ 差 5.71 kJ/mol</b>——跟卡 02 里 Kd 用的是同一个数。<br><br><b>=== 一句话理解 ===</b><br>把书给的两个门槛翻成平衡常数，「高能」这两个字就不再是形容词了：<br><code>12 kJ/mol → K ≈ 130</code> · <code>30 kJ/mol → K ≈ 2×10⁵</code> · <code>60 kJ/mol → K ≈ 3×10¹⁰</code> · <code>ATP 的 30.5 → K ≈ 2×10⁵</code><br><b>所以「普通键」水解是一百倍上下的事——把产物堆浓一点就能推回去；「高能化合物」水解是十万倍到百亿倍的事——实际上拉不回来。</b>门槛不是谁拍脑袋定的，它画在「可逆」和「不可逆」之间。<br>⚠ 30–60 和 12 是书 p131 的数（<i>per bond</i>，按每个键算）；换算出来的这几个 K <b>书里没有</b>，是按 ΔG°′ = −RT ln K 算的，被追问出处就说这是热力学定义，不是书上的数。',
  warn:'考场上别说 "high-energy bond" 就完事。被追问「高在哪」，答<b>产物更稳定</b>，不是<b>键更强</b>。'},

 {g:'共价键 · 七种', gn:'共价 = 共用电子。断它要酶，或者要强条件。按「连接什么」排。'},
 {n:'03', t:'peptide（= amide）',
  big:'一个氨基酸的 <b>–COOH</b> ＋ 下一个的 <b>α–NH₂</b>，脱一分子水',
  en:'“The amide bond between the carboxyl carbon of one amino acid and the α-amino nitrogen of the next, formed by condensation with the loss of one water. The textbook writes it as peptide (amide) bond.”',
  note:'肽键就是<b>酰胺键</b>，两个名字一个东西。因为氮的孤对部分离域进羰基，C–N 键长 <b>1.32 Å</b>，介于单键 1.49 和双键 1.27 之间——<b>所以它是平面的、不能自由转动</b>。<span class="pg">p026 p027</span><br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>三个数</b>：<code>C–N 单键 1.49 Å · 肽键 C–N 1.32 Å · C=N 双键 1.27 Å</code>（书 p027；1 Å = 10⁻¹⁰ m = 0.1 nm，所以 1.32 Å 就是书同页写的 0.132 nm）。<br><br><b>「键级在 1 和 2 之间」怎么算给他看</b>：<br>① 从单键到双键，键长一共缩 <code>1.49 − 1.27 = 0.22 Å</code>。<br>② 肽键已经缩了 <code>1.49 − 1.32 = 0.17 Å</code>。<br>③ <code>0.17 ÷ 0.22 ≈ 0.77</code>——<b>按键长读，它走完了单键到双键这段路的四分之三。</b><br>④ 但键长和键级不是线性关系，所以文献上常引的「部分双键性」是<b>约 40%</b>，不是 77%。<b>两个数不打架，是两种读法：一个读键长，一个读电子。</b><br>⚠ 书<b>只给了三个键长，没给任何百分数</b>。40% 和 77% 都是书外的，被追问就说书只给了三个键长。<br><br><b>=== 一句话理解 ===</b><br>键长是量出来的，键级是从键长倒推的，所以这条结论不依赖任何理论：<b>这根键被量出来比单键短，短掉的那一截，就是氮的孤对跑进羰基去的那部分电子。</b><br>「不能转」也是个能算的数：要转 90° 就得把那片 π 重叠整个拆掉，代价<b>约 80 kJ/mol</b>（通用数，书里没有），而室温下分子身上的热能只有 <code>RT ≈ 2.5 kJ/mol</code>。按 Boltzmann 因子 <code>e^(−E/RT)</code> 算：<code>80 ÷ 2.5 ≈ 32</code>，<code>e^(−32) ≈ 10⁻¹⁴</code>。<b>所以「不能自由转动」不是修辞，是「一亿亿次里才转成一次」。</b><br>反过来也就懂了这条键为什么值钱：骨架上每个残基本来有三根可转的键（φ、ψ、ω），<b>这一个键长数字免费把其中一根冻掉了</b>，只剩两个角能转——二级结构只有那么几种，根子就在这。'},
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
  note:'书讲得很具体：<b>3′ 连 5′</b>，DNA 和 RNA 都是这个连法（p072）。<br><br>「diester」这个名字本身就说明了它为什么能当链的骨架：<b>一个磷酸用掉两个羟基，还剩一个负电荷</b>——核酸带负电就是从这儿来的。<span class="pg">p072</span><br><br><b>=== 这个「一个负电荷」是数出来的 ===</b><br>磷原子上挂四个氧：<code>两个去当桥（连前一个糖的 3′ 和后一个糖的 5′）· 一个 P＝O · 一个 P–O⁻</code>。能解离的只剩最后那一个，所以<b>每个核苷酸净 −1</b>，不是 −2 也不是 −1.5。<br><b>为什么在 pH 7 一定是解离的</b>：磷酸二酯剩下那个羟基的 pK<sub>a</sub> 约 1（通用数，书里没有）。按 Henderson–Hasselbalch，<code>解离型 ÷ 未解离型 = 10^(pH − pKa) = 10⁶</code>——<b>一百万比一，所以书才敢直接说「完全解离」。</b><br><br><b>=== 一句话理解 ===</b><br><b>DNA 不是「带点负电」，它是一把一个核苷酸一个电荷、精确到整数的均匀电荷尺。</b>正因为每个核苷酸恰好 −1，<b>电荷严格正比于长度</b>，所有 DNA 的荷质比都一样，能把它们分开的就只剩长度。<b>电泳能按长度读 DNA，根子就在这个数是 1 而不是别的。</b>'},
 {n:'07', t:'ester',
  big:'一个<b>酸</b>（含磷酸）＋ 一个<b>醇</b>，脱水',
  en:'“An ester is the bond between an acid and an alcohol, formed by condensation with loss of water. Three places in biochemistry. First, phosphate esters. A kinase puts phosphate on the hydroxyl of serine or threonine or the phenolic hydroxyl of tyrosine, and sugars are metabolised almost only as phosphate esters. Second, the fatty acids on glycerol in acylglycerols. Third, the amino acid on tRNA, bound by its carboxyl as an ester to the 2′- or 3′-hydroxyl of the terminal adenosine.”',
  note:'在生化里主要见于三处：<b>磷酸酯</b>——Ser、Thr 的羟基和 Tyr 的酚羟基被激酶磷酸化（p113–p114）；<b>甘油酯</b>——脂肪酸接在甘油上（第 8 章）；<b>tRNA 上的氨基酸</b>——以酯键接在 2′ 或 3′ 羟基上（p096）。<span class="pg">p096 p113</span>'},
 {n:'08', t:'thioester',
  big:'一个<b>酸</b> ＋ 一个<b>巯基</b>——比酯<b>活泼得多</b>',
  en:'“A thioester is the acyl bond between a carboxylic acid and a thiol — in acetyl-CoA the acetyl group sits on the free SH of coenzyme A. The textbook calls thioesters generally very reactive and acetyl-CoA macroergic, and gives the reason: the sulfur atom prevents the resonance that normally stabilises an O-ester, so the carbonyl stays reactive.”',
  note:'<b>这是「种类」和「能量」两个问题在同一个键上相遇的地方</b>：硫酯和酯连接的官能团只差一个原子（O 换成 S），但硫酯是高能化合物，酯不是。<span class="pg">p050</span>',
  warn:'理由<b>书里写了</b>（p132、p136：硫原子阻止了 O-酯常见的离域/共振，<i>the sulfur atom prevents mesomerism</i>）。可以直接说是书上的。'},
 {n:'09', t:'anhydride',
  big:'两个<b>酸</b>缩掉一分子水——ATP 的磷酸酐键就是这个',
  en:'“An anhydride is what two acids give when they condense with loss of water. In ATP the α-β and β-γ links are phosphoanhydride bonds, but the α-phosphate is joined to the 5′-hydroxyl of ribose by an ester. So ATP has two macroergic bonds, not three, and hydrolysing that ester gives under 12 kJ per mole. The textbook also puts pyrophosphate, the acyl phosphates 1,3-bisphosphoglycerate and carbamoyl phosphate, and the phosphosulfate of PAPS under anhydrides, and says ATP and ADP are complexed with Mg²⁺ in the cell.”',
  note:'ATP 里 α–β 和 β–γ 之间是<b>磷酸酐</b>键，α 和核糖之间是<b>酯</b>键。<b>所以同一个分子上两种键，能量完全不同</b>：水解酐键放能多，水解那个酯键放得很少，在书 p131 的 12 kJ/mol 门槛以下（这一条是标准知识，不在 p132）。<br><br>这解释了为什么说「ATP 有两个高能键」而不是三个。<span class="pg">p024 p132</span><br><br><b>=== 「两个高能键」是数出来的，不是背出来的 ===</b><br>三个磷酸排成一串，串上<b>只有三个接头</b>：<code>核糖–O–P(α)–O–P(β)–O–P(γ)</code>。从右往左数：γ–β 一个酐、β–α 一个酐、α–核糖<b>是酯不是酐</b>（因为核糖那头是醇，不是酸）。<br><code>3 个磷酸 → 3 个连接 → 2 个酐 ＋ 1 个酯 → 两个高能键</code><br>推广一句就不会再错：<b>n 个磷酸连成链，就有 n−1 个酐键。</b>（焦磷酸 n = 2，一个酐键；ATP n = 3，两个。）<br>⚠ 门槛那边的换算在速背第 2 点：酯键那不到 12 kJ/mol 对应 K 只有一百多倍，酐键的 30.5 对应 K 约 2×10⁵。<b>差的不是一点，是三个数量级。</b>'},
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
  note:'书特意写了两部分，<b>排斥那一半常被忘掉</b>（p032）。<br><br>单个极弱，<b>但堆紧的蛋白内部接触极多，总和很大</b>——书自己强调了这一点。所以它没有方向性，却决定了「堆得紧不紧」。<span class="pg">p032</span><br><br><b>=== 「单个极弱」弱到什么程度，有个数可以对 ===</b><br>单个 van der Waals 接触<b>约 1 kJ/mol</b>（范围 0.4–4，通用数，书里没有），而室温下一个分子身上的热能 <code>RT ≈ 2.5 kJ/mol</code>——<b>它比热噪音还小。</b>按 Boltzmann 因子算 <code>e^(−1 ÷ 2.5) ≈ 0.67</code>：<b>三分之二的时间它其实是散的。</b><br><b>一句话理解</b>：<b>一个 vdW 接触靠自己什么都抓不住，它只能靠人多。</b>所以蛋白折叠不是「几个强相互作用钉住」，是几百个各自站不住的接触同时压上去、多数派赢；<b>书说的「堆得紧」＝ 接触数多 ＝ 总和才够</b>。完整的能量尺子（共价 / 氢键 / vdW 各是多少）在追问「What is a chemical bond」那一条里。'},

 {g:'一个不是键的东西', gn:'这一格单独拿出来，因为把它当成键是最常见的错。'},
 {n:'14', t:'hydrophobic effect',
  big:'<b>它不是一种键。</b>它是<b>水</b>获得的熵',
  en:'“The tendency of nonpolar groups in water to associate with one another. It is not a bond — the textbook says explicitly it is not an affinity between the nonpolar groups. It is an entropy effect: the ordered layer of water molecules around each nonpolar surface is released when they pack together, so the entropy of the water rises.”',
  note:'书说得很直接：它<b>不是非极性物质之间某种亲和力的表现（不是一种键）</b>，而是<b>溶质周围水的结构发生变化的结果</b>（p013）。<br><br>所以当老师问「有哪些非共价相互作用」时，前三个是键，这个是<b>驱动力</b>。<b>把这个区别说出来是加分。</b><span class="pg">p012 p013 p032 p033</span>'},

 {g:'另一个维度：高能', gn:'跟「种类」正交。同一种键可以高能也可以不高能。'},
 {n:'15', t:'macroergic',
  big:'高能的是<b>化合物</b>，不是<b>键的种类</b>',
  en:'“The textbook lists four types of macroergic compound. Phosphoanhydrides: ATP, pyrophosphate, and the acyl phosphates. Phosphamides: the phosphagens creatine phosphate in vertebrates and phosphoarginine in invertebrates. Enol phosphates: phosphoenolpyruvate, with the highest free energy of hydrolysis. And thioesters: acetyl-CoA. On the same ATP molecule the anhydride bonds are macroergic and the ribose ester is not, so macroergic is a property of the compound, not of a bond type.”',
  tbl:{head:['高能的','键的种类','出处'],
   rows:[
    ['<b>ATP</b> 的 β–γ 与 α–β','磷酸<b>酐</b>','p132'],
    ['<b>acetyl-CoA</b>','<b>硫酯</b>','p050'],
    ['<b>phosphoenolpyruvate</b>、1,3-bisphosphoglycerate','烯醇磷酸 / 酰基磷酸','第 6、7 章'],
    ['ATP 的 α–核糖','磷酸<b>酯</b> ——<b>这个不高能</b>','标准知识；门槛见 p131'],
    ['<b>creatine phosphate</b>、phosphoarginine','<b>磷酰胺</b>（phosphamide）——书列的第二类','p132']
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

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p026_obr23_peptide_bond_formation.jpg',
  t:'肽键怎么形成 —— 书 figure 2.3',
  cap:'<b>这张是「画」。</b>他一句 “show me how a peptide bond is formed” 就要求你在纸上画它，而书这张图<b>只用两个氨基酸和一分子水</b>就把整个缩合说完了。'
    + '<br><br><b>画的顺序（五步，照这个练）</b>：'
    + '<br>① <b>先写左边那个氨基酸</b>：<code>⁺H₃N–C–COO⁻</code>，中间那个 C 上面写 <b>H</b>、下面写 <b>R₁</b>。'
    + '<br>② <b>右边再写一个一模一样的</b>，下面写 <b>R₂</b>，两个中间画一个 <b>＋</b>。'
    + '<br>③ 中间画<b>双向箭头</b> ⇌——书画的是可逆的，不是单箭头。'
    + '<br>④ 右边写产物：<code>⁺H₃N–C–CO–NH–C–COO⁻</code>。<b>新出现的那根 C–N 就是肽键</b>，N 底下<b>一定要把那个 H 写出来</b>。'
    + '<br>⑤ 最后在产物后面补 <b>＋ H₂O</b>。'
    + '<br><br><b>画的时候要说的那两句</b>：“The carboxyl of the first residue condenses with the α-amino nitrogen of the second, and one water leaves.” 和 '
    + '“The nitrogen keeps one hydrogen, and that N-H is the donor for every main-chain hydrogen bond later.”'
    + '<br><br>⚠ <b>两个最容易漏的细节</b>：一是<b>两端的电荷</b>，⁺H₃N 和 COO⁻ 都要标，那是 pH 7 的样子；'
    + '二是<b>产物氮上那个 H</b>——漏了它，后面讲二级结构时就没有氢键供体了。',
  src2:'Biochemie, figure 2.3, p026 · 原图裁切，未修改'},

 {k:'画',
  src:'img/p159_obr711_o_and_n_glycosidic.jpg',
  t:'O-糖苷键和 N-糖苷键 —— 一张图答两个问题（书 figure 7.11a）',
  cap:'<b>这张是「画」，而且它一张顶两张</b>：<b>左边是 O-糖苷</b>（GalNAc 接 <b>Ser</b>），<b>右边是 N-糖苷</b>（GlcNAc 接 <b>Asn</b>）。图上<b>灰底那一条是氨基酸，白底是糖</b>。'
    + '<br><br><b>画的顺序（四步，左右两边一样）</b>：'
    + '<br>① 先画<b>一个六元环的糖</b>，把<b>右边那个碳</b>圈出来——那是<b>异头碳</b>，所有糖苷键都从它出发。'
    + '<br>② 从异头碳往右引一根键：<b>左边这根引到 O</b>，<b>右边这根引到 N</b>。<b>差别只在这一个原子。</b>'
    + '<br>③ O 后面接 <b>–CH₂–CH</b>，那是 <b>serine</b> 的侧链；N 后面接 <b>–CO–CH₂–CH</b>，那是 <b>asparagine</b> 的侧链酰胺。'
    + '<br>④ 两个糖上都挂着 <b>–NH–CO–CH₃</b>，所以它们叫 <b>GalNAc</b> 和 <b>GlcNAc</b>。'
    + '<br><br><b>画完要说的一句</b>：“The bond always starts at the anomeric carbon. To an oxygen it is O-glycosidic, to a nitrogen N-glycosidic — and in a nucleoside the same N-glycosidic bond goes to the base.”'
    + '<br><br>⚠ 这张图<b>只画了糖蛋白那两处</b>。<b>第三处，核苷里糖连碱基，在书的另一章</b>，靠嘴补一句，别在这张图上硬加。<span class="pg">p112 p159</span>',
  src2:'Biochemie, figure 7.11a, p159 · 原图裁切，未修改'},

 {k:'画',
  src:'img/p072_obr47_rna_dinucleotide.jpg',
  t:'磷酸二酯键 —— 一段 RNA 的两个核苷酸（书 figure 4.7）',
  cap:'<b>这张是「画」。</b>“Draw me the linkage between two nucleotides” 是核酸题最常落的一刀，而书这张图<b>把 3′ 和 5′ 两个数字印在了该在的位置上</b>。'
    + '<br><br><b>画的顺序（六步）</b>：'
    + '<br>① 先画<b>上面那个核糖</b>（五元环），左上角引出 <b>5′–CH₂</b>，左下角标 <b>3′</b>，右下角挂 <b>OH</b>——<b>是 RNA 才有这个 2′-OH</b>。'
    + '<br>② 5′ 那头往左接 <b>–O–P</b>，磷上写 <b>＝O</b> 和两个 <b>O⁻</b>。'
    + '<br>③ 环的右上角往上引一根键到<b>碱基</b>（图上是 adenine）——<b>这根是 N-糖苷键，不是磷酸二酯键，别混</b>。'
    + '<br>④ 从 <b>3′</b> 往下引 <b>–O–P</b>，这个磷上写 <b>＝O</b> 和<b>一个</b> <b>O⁻</b>。'
    + '<br>⑤ 这个磷再往右接 <b>–O–CH₂</b>，往下画<b>第二个核糖</b>，它的碱基是 cytosine。'
    + '<br>⑥ <b>最后把中间那个磷圈起来，数它身上的四个氧</b>：两个当桥、一个 P＝O、一个 P–O⁻。'
    + '<br><br><b>画完要说的那两句</b>：“One phosphate esterified to two hydroxyls — the three prime of one pentose and the five prime of the next.” 和 '
    + '“Two of its four oxygens are used up in the bridges, so one negative charge is left per nucleotide. That is why DNA is negatively charged.”',
  src2:'Biochemie, figure 4.7, p072 · 原图裁切，未修改'},

 {k:'画',
  src:'img/p114_obr457_phosphoserine.jpg',
  t:'磷酸酯键 —— phosphoserine（书 figure 4.57）',
  cap:'<b>这张是「画」，而且它小到十秒能画完</b>——所以「举个酯键的例子」这一刀就用它，别临场去想甘油酯。'
    + '<br><br><b>画的顺序（三步）</b>：'
    + '<br>① 先写一个标准氨基酸骨架：上面 <b>COO⁻</b>，中间一个 <b>C</b>，左边 <b>⁺H₃N</b>，右边 <b>H</b>。'
    + '<br>② 从中间那个 C 往下写 <b>CH₂</b>，再往右写 <b>–O–</b>。'
    + '<br>③ <b>O 后面接 P</b>，磷上写 <b>＝O</b>，右边和下面各写一个 <b>O⁻</b>。'
    + '<br><b>画完把 CH₂–O–P 那一段圈起来</b>——那就是酯键本身，他要看的就是这三个符号。'
    + '<br><br><b>画完要说的一句</b>：“An ester is an acid plus an alcohol. Here the acid is phosphate and the alcohol is the side-chain hydroxyl of serine. A kinase makes this bond, a phosphatase takes it off.”'
    + '<br><br>⚠ 书同一张图上还并排画着 <b>phosphothreonine</b> 和 <b>phosphotyrosine</b>——<b>被磷酸化的正好就是 Ser、Thr、Tyr 这三个带羟基的残基</b>。'
    + '他要第二个例子就报这两个名字，不用重画。<span class="pg">p113 p114</span>',
  src2:'Biochemie, figure 4.57, p114 · 原图裁切，未修改'},

 {k:'画',
  src:'img/p132_obr61_thioester_acetylcoa.jpg',
  t:'硫酯键 —— 书写 acetyl-CoA 的那一行（书 figure 6.1）',
  cap:'<b>这张是「画」，而且整条只有一行字</b>：<code>CoA-S~COCH₃</code>。<b>书就是这么写的，照抄。</b>'
    + '<br><br><b>写的顺序（三步）</b>：'
    + '<br>① 先写 <b>CoA</b>，一横接 <b>S</b>——<b>那个 S 就是辅酶 A 末端的游离巯基</b>。'
    + '<br>② S 后面画<b>一条波浪线 ~</b>，<b>不是短横</b>。'
    + '<br>③ 波浪线后面写 <b>COCH₃</b>，也就是乙酰基。'
    + '<br><br><b>写完要说的那两句</b>：“The wavy line is the textbook’s notation for a macroergic bond. The acetyl group sits on the free SH of coenzyme A, so this is a thioester.” 和 '
    + '“The sulfur blocks the resonance that stabilises an O-ester, so the carbonyl stays reactive.”'
    + '<br><br>⚠ <b>这一行里两根键要分清</b>：<b>CoA–S 那根是普通键</b>，<b>S~CO 那根才是硫酯</b>。'
    + '波浪线是书的记号，意思是「这根断了放很多能」。<span class="pg">p050 p132 p136</span>',
  src2:'Biochemie, figure 6.1, p132 · 原图裁切，未修改'},

 {k:'画',
  src:'img/p132_obr61_atp_phosphoanhydride.jpg',
  t:'磷酸酐键 —— ATP 上的两个（书 figure 6.1）',
  cap:'<b>这张是「画」，而且它是「ATP 到底有几个高能键」那一刀的护身符</b>：图上那<b>三支弯箭头是书自己画的</b>，指的就是能断的位置。'
    + '<br><br><b>画的顺序（四步）</b>：'
    + '<br>① <b>从左往右画三个磷</b>：<code>⁻O–P–O–P–O–P–</code>，每个磷上面写 <b>＝O</b>、下面写 <b>⁻O</b>。'
    + '<br>② 第三个磷右边接 <b>–OCH₂</b>，往下画<b>核糖</b>（五元环），环底下两个碳挂 <b>HO</b> 和 <b>OH</b>。'
    + '<br>③ 环的右上角往上引一根键到 <b>adenine</b>（双环，角上挂 <b>NH₂</b>）。'
    + '<br>④ <b>在三个磷上面各画一支弯箭头</b>，照书的样子。'
    + '<br><br><b>画完当着他的面数一遍</b>：三个磷排成一串，接头只有三个。<b>γ–β 一个酐、β–α 一个酐、α–核糖是酯不是酐</b>，因为核糖那头是醇，不是酸。'
    + '<br><code>3 个磷酸 → 3 个连接 → 2 个酐 ＋ 1 个酯</code>'
    + '<br><br><b>画完要说的一句</b>：“Two of these three links are phosphoanhydride bonds. The third, to the ribose, is an ester, and hydrolysing it gives under twelve kilojoules per mole. So ATP has two macroergic bonds, not three.”',
  src2:'Biochemie, figure 6.1, p132 · 原图裁切，未修改'},

 {k:'画',
  src:'img/p074_obr49_base_pairing_hbonds.jpg',
  t:'氢键长什么样 —— A–T 两条、G–C 三条（书 figure 4.9）',
  cap:'<b>这张是「画」。</b>全书<b>唯一一处把氢键单独画出来的地方就是碱基配对</b>，所以他说「画一个氢键给我看」就用这张。'
    + '<br><br><b>画的顺序（四步）</b>：'
    + '<br>① <b>左边画嘌呤</b>（双环，上排是 <b>A</b>，下排是 <b>G</b>），<b>右边画嘧啶</b>（单环，<b>T</b> 和 <b>C</b>）。'
    + '<br>② <b>中间用虚线连</b>：<b>A–T 两条，G–C 三条</b>。虚线的两头必须落在 <b>N 或 O</b> 上。'
    + '<br>③ 每条虚线上<b>要有一个 H</b>，而且那个 H 是<b>已经接在 N 或 O 上</b>的，不是凭空浮着的——<b>这是这张图最值钱的一点</b>。'
    + '<br>④ 两端各引一根往外的键并标 <b>1′</b>，那是接糖的位置；两个 1′ 之间图上标着 <b>10.85 Å</b>。'
    + '<br><br><b>画完要说的那两句</b>：“A hydrogen bond is a hydrogen already bound to an electronegative atom, attracted to a lone pair on another one. The donor here is an N-H, the acceptor an oxygen or a ring nitrogen.” 和 '
    + '“It is directional, which is why it can fix a geometry rather than merely hold two groups close.”'
    + '<br><br>⚠ 图上还印着 <b>major groove</b>、<b>minor groove</b> 和两个 <b>51.5°</b>。'
    + '<b>被问「为什么双螺旋处处一样宽」就指那个 10.85 Å</b>：嘌呤配嘧啶，所以每一对的跨度相同。',
  src2:'Biochemie, figure 4.9, p074 · 原图裁切，未修改'},

 {k:'认',
  src:'img/p132_obr61_acylphosphate_phosphamide.jpg',
  t:'认 —— 酰基磷酸和磷酰胺，书列的第一、二类高能化合物（书 figure 6.1）',
  cap:'<b>这张是「认」，不用画。</b>他把书翻到这一页问「这两个是什么」，你要认得出，并说出它们各属于书列的哪一类。'
    + '<br><br><b>左边那个</b>：<code>H₃C–CO–O–P</code>，一个<b>羧酸</b>和一个<b>磷酸</b>脱水接在一起——<b>acetyl phosphate</b>，属于书的第一类 <b>anhydrides</b> 底下的 <b>acyl phosphates</b>。'
    + '<b>同一类里要顺口报上的例子是 1,3-bisphosphoglycerate 和 carbamoyl phosphate。</b>'
    + '<br><b>右边那个</b>：磷直接接在一个 <b>N</b> 上（<code>P–N</code>），右边带着胍基和一个 N-甲基——<b>creatine phosphate</b>，属于书的第二类 <b>phosphamides</b>。'
    + '<br><br><b>要说的一句</b>：“On the left an acyl phosphate — a carboxylic acid and phosphoric acid joined as an anhydride. On the right creatine phosphate, a phosphamide: the phosphate is bound to nitrogen. Both are macroergic, and they belong to two different classes.”'
    + '<br><br>⚠ <b>认的抓手就是那根 P–N</b>：<b>磷接氧是酐或酯，磷接氮就是磷酰胺</b>。书列的磷酰胺只有两个——脊椎动物的 <b>creatine phosphate</b>、无脊椎动物的 <b>phosphoarginine</b>。<span class="pg">p132</span>',
  src2:'Biochemie, figure 6.1, p132 · 原图裁切，未修改'},

 {k:'认',
  src:'img/p132_obr61_enolphosphate_pep.jpg',
  t:'认 —— 烯醇磷酸 phosphoenolpyruvate，书列的第三类（书 figure 6.1）',
  cap:'<b>这张是「认」。</b>PEP 是书列的四类高能化合物里<b>水解自由能最高的那一个</b>，所以它值得单独认一次。'
    + '<br><br><b>图上看三件事</b>：'
    + '<br>① 最上面是一个<b>磷酸</b>，通过一个 <b>O</b> 往下接。'
    + '<br>② 接上去的那个碳<b>带着一个 C＝C 双键</b>（<code>H₂C＝C</code>）——<b>「烯醇」这两个字说的就是这个双键碳上的羟基被磷酸化了</b>。'
    + '<br>③ 右边是 <b>COO⁻</b>，所以整个分子是<b>丙酮酸的烯醇式</b>。'
    + '<br><br><b>要说的一句</b>：“Phosphoenolpyruvate — an enol phosphate. The textbook says this class has the highest free energy of hydrolysis. The ester bond to phosphate blocks the keto form, and the keto form is the poorer in energy and the more stable.”'
    + '<br><br>⚠ <b>理由是书自己给的</b>：磷酸酯键<b>挡住了酮式的形成</b>，而酮式能量更低、更稳定；磷酸一掉，分子立刻塌到酮式去，所以放能特别多。'
    + '<b>这是「产物更稳定，不是键更强」这句话最干净的一个例子。</b><span class="pg">p132</span>',
  src2:'Biochemie, figure 6.1, p132 · 原图裁切，未修改'}
],

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
 cn:'<b>陷阱题。</b>他想看你会不会说成「键特别强」。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>先用一个符号把这题切了</b>：水解 ATP 的 <code>ΔG°′ = −30.5 kJ/mol</code>，<b>是负的</b>。负号的意思是<b>能量往外跑</b>；而「强键」的定义是<b>你得往里塞能量才拆得开</b>。<b>一根键不可能既是强键又放能——光看这个负号，「高能键 ≠ 强键」就已经证完了</b>，一页书都不用翻。<br><br><b>那 30.5 是什么的差</b>：是「拆键要花的能量」减去「产物松下来退还的能量」。书 p132 给的是后一半——<b>不是键的问题，是电荷的问题</b>：<br>① pH 7 时 ATP 有<b>四个可解离的质子</b>（ADP 三个，书 p132 明写），所以磷酸链上挤着<b>四个负电荷</b>。<br>② 磷不乐意成双键，P–O 是<b>半极性</b>的，负电荷就堆在氧上（书 p132 原话）。<br>③ 同号电荷挨这么近，互相推——<b>这就是书说的那个「能量上不稳定的状态」</b>。<br>④ 一水解，ATP⁴⁻ 变成 ADP³⁻ ＋ Pi²⁻，<b>电荷被分到两个分开的分子上</b>，推力没了，体系松一口气。<br><br><b>=== 一句话理解 ===</b><br><b>ATP 不是一根绷紧的绳子，是一根被按住的弹簧。</b>能量不在那根键里，在「四个同号电荷被按着挨在一起」这件事里；水解不是「砸断一根硬键」，是<b>松手</b>。<br>顺着就懂了为什么细胞里 ATP 总配着 <b>Mg²⁺</b>（书 p132 也写了）：镁是正的，坐上去把负电荷<b>屏蔽</b>掉一部分，弹簧就没那么急着弹——<b>等于给这根弹簧上了个保险</b>，免得 ATP 自己白白水解掉。<br>⚠ Lehninger 还加一条「产物 Pi 的共振稳定」，<b>书里没有</b>；要说就标明是 Lehninger 的。'},
{r:'高', q:'What is a chemical bond, and what is covalent versus non-covalent?',
    ez:'“A chemical bond is an attraction between atoms. It is strong enough to hold them as one unit. A covalent bond shares a pair of electrons. That is the strong one, at hundreds of kilojoules per mole. In a protein it fixes the sequence. That is the primary structure. A non covalent interaction shares no electrons. It is electrostatic in origin. Ion pairs, hydrogen bonds and van der Waals contacts are the kinds. Each one is weak, a few kilojoules per mole. So the structure rests on their number. They build the conformation. That is secondary, tertiary and quaternary structure.”',
    ezcn:'<b>化学键 ＝ 原子之间强到足以把它们维持成一个整体的吸引力。</b><b>共价键是共享一对电子的那种</b>——<b>强，几百 kJ/mol</b>；<b>在蛋白里它固定的是序列，也就是一级结构</b>。<b>非共价作用不共享电子，本质是静电的</b>（<b>离子对、氢键、范德华接触</b>），<b>每一个都弱，只有几 kJ/mol，所以结构靠的是它们的数量</b>；<b>它们搭出来的是构象——二级、三级、四级结构。</b>',
 en:'“A chemical bond is an attraction between atoms strong enough to hold them together as one unit. A covalent bond is one in which two atoms share a pair of electrons — the strong bond, hundreds of kJ per mole. In a protein it fixes the sequence, the primary structure. A non-covalent interaction is an attraction between groups that does not share electrons — electrostatic in origin: ion pairs, hydrogen bonds, van der Waals contacts. Each is weak, a few kJ per mole, so the structure rests on their number. They build the conformation — secondary, tertiary, quaternary. Covalent bonds fix the sequence.”',
 cn:'书 p012 把共价和非共价分开说；强度数字是通用。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>先把尺子立起来</b>（每摩尔键，<b>全是通用数——书只说了共价强、非共价弱，没给数</b>）：<br><code>共价键 ≈ 200–800（C–C 348 · C–N 293 · S–S 226 · O–H 463）</code><br><code>氢键 ≈ 4–30，蛋白里典型 20</code><br><code>van der Waals 单个接触 ≈ 0.4–4，典型 1</code><br><code>室温下一个分子身上的热能 RT ≈ 2.5（25 °C）</code>——<b>这一条是整把尺子的零点。</b><br><br><b>用 Boltzmann 因子把这几个数读成「多容易被热撞开」</b>（被撞开的比例约 <code>e^(−E/RT)</code>）：<br>① 共价 350：<code>350 ÷ 2.5 = 140</code> → <code>e^(−140) ≈ 10⁻⁶¹</code>。<b>放在宇宙年龄里也不会自己断一次</b>，所以断它非得有酶。<br>② 氢键 20：<code>20 ÷ 2.5 = 8</code> → <code>e^(−8) ≈ 3×10⁻⁴</code>。<b>撑得住，但撑得不稳。</b><br>③ vdW 1：<code>1 ÷ 2.5 = 0.4</code> → <code>e^(−0.4) ≈ 0.67</code>。<b>三分之二的时间它根本就是散的。</b><br><br><b>=== 一句话理解 ===</b><br><b>一个非共价接触比室温的热噪音还小，靠自己什么也抓不住——所以蛋白不是被几个强相互作用钉住的，是被几百个各自站不住的接触同时压住的，多数派赢。</b>这就是「靠数量取胜」的确切意思。<br>还有一个推论值得说出口：几百上千个弱作用加起来是好几百 kJ/mol，可一个折好的蛋白<b>净稳定性只有 20–60 kJ/mol</b>（通用数）——因为展开那一边水也在跟这些基团结合，<b>两个大数相减剩下一个小数</b>。<b>所以蛋白只比散开的自己稳「两三个氢键」那么一点</b>，这才是它能被温度、pH、去垢剂轻易拆掉的原因。<br>⚠ 上面每一个数<b>都不是这本书的</b>（书只有定性的强弱对比）。被问出处就说这些是标准数值，不是这本书上的。'},
{r:'高', q:'What is resonance — mesomerism?',
    ez:'“Resonance is when the real electron distribution is a blend. It blends more than one drawable structure. The electrons are delocalised over several bonds. The textbook’s word for it is mesomerism. Take an O ester. The oxygen’s lone pair is shared into the carbonyl. That stabilises the ester. It also blunts the carbonyl. Sulfur is different. Its lone pair overlaps poorly with carbon. So in a thioester that sharing fails. And the carbonyl stays reactive.”',
    ezcn:'<b>共振 ＝ 真实的电子分布是好几个「画得出来的结构」的混合，电子离域在好几根键上。</b><b>书用的词是 mesomerism（中介现象）</b>。<b>普通的氧酯里，氧的孤对电子被共享进羰基，既稳定了酯，也让羰基变钝</b>；<b>硫不一样——硫的孤对跟碳重叠得差，所以硫酯里这种共享失败了，羰基保持活泼。</b>',
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
 en:'“Amphipathic means one molecule with a nonpolar, hydrophobic part and a polar, hydrophilic part. The textbook’s word is amphipathy, used for phospholipids: fatty-acid tails and a glycerol-phosphate head. A detergent is the same design, a hydrocarbon tail with an ionic head. Coagulation is when a denatured protein separates out of solution — the textbook’s example is heat. Detergents and urea unfold the chain without precipitating it.”',
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
    ez:'“Only one atom differs. An ester joins an acid to an alcohol. A thioester joins it to a thiol. But that one atom changes everything. The sulfur blocks the resonance. That resonance is what stabilises an O ester. So the thioester is much more reactive. Acetyl coenzyme A is a macroergic compound. A simple carboxylic O ester is not.”',
    ezcn:'<b>只差一个原子</b>：<b>酯是酸接醇，硫酯是酸接硫醇</b>。<b>但这一个原子改变了一切：硫挡住了那个稳定氧酯的共振，所以硫酯活泼得多。</b><b>乙酰辅酶 A 是高能化合物，而一个普通的羧酸氧酯不是。</b>',
 en:'“Only one atom: an ester joins an acid to an <b>alcohol</b>, a thioester joins it to a <b>thiol</b>. But that one atom changes everything. The sulfur blocks the resonance that stabilises an O-ester, so the thioester is much more reactive. Acetyl-CoA is a macroergic compound while a simple carboxylic O-ester is not.”',
 cn:'<b>这一对是「种类相近、能量差很远」的标准例子</b>，非常适合用来展示你分得清那两个问题。<span class="pg">p050</span>'},
{r:'高', q:'Amide or peptide — are they the same bond?',
    ez:'“Yes. The peptide bond is an amide bond. Peptide is just the name we use in one case. We use it when the bond joins two amino acids. The textbook writes it as the peptide, or amide, bond.”',
    ezcn:'<b>是同一根键。肽键就是酰胺键。</b><b>「肽」只是它连接两个氨基酸时我们用的那个名字。</b><b>书就写成「肽（酰胺）键」。</b>',
 en:'“Yes. The peptide bond <b>is</b> an amide bond. Peptide is just the name we use when it joins two amino acids. The textbook writes it as “peptide (amide) bond”.”',
 cn:'书 p026 括号里就并排写了这两个名字。<b>知道它们是一回事，比记住两个名字有用。</b><span class="pg">p026</span>'},
{r:'高', q:'Ion pair, salt bridge, ionic bond — three things or one?',
    ez:'“Ion pair and salt bridge are two names for one thing. The textbook uses both. They name the electrostatic attraction between two ionised side chains. One is acidic and one is basic. The acidic one is a carboxylate. That is glutamate or aspartate. The basic one is an ammonium or a guanidinium. That is lysine or arginine. In the protein literature salt bridge is sometimes narrower. It is reserved for a pair close enough to hydrogen bond too. Ionic bond is the third word. We do not use it for proteins in the crystal sense. This is one pair in water. It is not a lattice.”',
    ezcn:'<b>离子对和盐桥是同一件事的两个名字</b>（书两个都用）：<b>一个电离的酸性侧链和一个电离的碱性侧链之间的静电吸引</b>——<b>酸性那个是谷氨酸或天冬氨酸的羧酸根，碱性那个是赖氨酸的铵基或精氨酸的胍基</b>。⚠ <b>蛋白文献里「盐桥」有时更窄，专指近到还能同时形成氢键的那种</b>。<b>「离子键」是第三个词：在蛋白里我们不按晶体那个意义用它，因为这里是水里的一对，不是一个晶格。</b>',
 en:'“Two names for one thing, and a third that is related but not what we say for proteins. Ion pair and salt bridge are the textbook’s two names for the electrostatic attraction between an ionised acidic side chain and an ionised basic one. The acidic one is the carboxylate of glutamate or aspartate, the basic one the ε-ammonium of lysine or the guanidinium of arginine. In the protein literature ‘salt bridge’ is sometimes reserved for an ion pair close enough to hydrogen-bond as well. What we do not call it in proteins is an ionic bond in the crystal sense, because it is one pair in water, not a lattice.”',
 cn:'书用的词是 <i>ion pairs</i>（离子对），「也叫 <i>salt bridges</i>（盐桥）」（p012、p032）；<i>ionic bond</i> 书只用在 p074 磷酸–Mg²⁺ 那里：“The textbook uses ‘ionic bond’ only once, for the fully ionised phosphate groups of DNA binding Mg²⁺ or Mn²⁺.”<b>回答时用 salt bridge，因为那是英语文献里更常见的。</b>'},
{r:'实测', q:'Is the hydrophobic effect a bond?',
    ez:'“No. The hydrophobic effect is a tendency. Nonpolar groups in water associate with each other. But there is no attraction between them. Water forms an ordered layer around each nonpolar surface. When the surfaces come together, that layer is released. The water gains entropy. So the hydrophobic effect is a driving force. It is not a bond.”',
    ezcn:'<b>不是键。</b>疏水效应是<b>非极性基团在水里聚到一起的倾向</b>，但<b>它们之间并没有吸引力</b>。真正发生的是：每个非极性表面周围的水本来排得很整齐，表面凑到一起之后那层水被<b>释放</b>了，<b>水赚到了熵</b>。<b>所以它是驱动力，不是键。</b>',
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
    ez:'“Because the lone pair on the nitrogen is partly delocalised. It goes into the carbonyl. So the C to N bond has partial double bond character. It measures one point three two angstrom. A single bond is one point four nine. A double one is one point two seven. A partial double bond cannot rotate. So the atoms around it are held in one plane. Those are the two alpha carbons, the carbonyl C and O, and the N with its H.”',
    ezcn:'因为<b>氮上的孤对电子部分离域进了羰基</b>，<b>所以 C–N 带部分双键性质</b>：<b>实测 1.32 Å</b>（<b>单键 1.49，双键 1.27</b>）。<b>带部分双键性质的键不能转，所以它周围的原子被固定在同一个平面上</b>——<b>两个 α 碳、羰基的 C 和 O、氮和它的 H。</b>',
 en:'“Because the lone pair on the nitrogen is partly delocalised into the carbonyl, so the C-N bond has partial double-bond character. It is 1.32 Å, between a single bond at 1.49 and a double at 1.27. A partial double bond cannot rotate. The atoms around it are held in one plane — the two α-carbons, the carbonyl C and O, and the N and its H.”',
 cn:'<b>这是全书最好用的一条「结构解释性质」</b>：一个键长数字直接解释了为什么蛋白骨架只剩两个可转的角，也就解释了为什么二级结构只有那么几种：“So each residue has only two freely rotating bonds, the two at the α-carbon — which is why there are so few kinds of regular secondary structure.”<span class="pg">p027</span><br>⚠ <b>三个键长怎么读成「键级在 1 和 2 之间」（0.17 ÷ 0.22 ≈ 0.77，而文献常引的是 40%），以及「不能转」到底有多不能转（约 80 kJ/mol 对 RT 2.5 kJ/mol），算在速背第 3 点的公式块里。</b>'},
{r:'中', q:'Why does the cell use ATP rather than some stronger bond?',
 en:'“Because what matters is not the strength of the bond but the difference in stability before and after. ATP sits in a useful middle range. Hydrolysis of its terminal β-γ anhydride bond to ADP and phosphate is minus 30.5 kJ per mole. That is enough to drive glucose phosphorylation at plus 13.8, with the coupled reaction at minus 16.7, yet low enough that it can be regenerated. The textbook calls macroergic compounds the organism’s universal energy currency.”',
 cn:'<b>「货币」这个比喻是书自己用的</b>（p016），用它比自己发挥安全。<br><br><b>=== 公式和推导（背之前先看懂这一段） ===</b><br><b>这三行就是书 p131 的那张小表，一个数都没改</b>（单位 kJ/mol，都是 ΔG°′）：<br><code>葡萄糖 ＋ Pi → 葡萄糖-6-磷酸 ＋ H₂O ⋯⋯ +13.8</code>（吸能，自己不走）<br><code>ATP ＋ H₂O → ADP ＋ Pi ⋯⋯⋯⋯⋯⋯⋯⋯ −30.5</code>（放能）<br><code>葡萄糖 ＋ ATP → 葡萄糖-6-磷酸 ＋ ADP ⋯ −16.7</code>（耦合后的净账，hexokinase 那一步）<br><b>为什么能直接相加</b>：<code>+13.8 + (−30.5) = −16.7</code>。因为 G 是<b>状态函数</b>，一串反应的总 ΔG 等于各步 ΔG 之和（书 p017、p131 都写了）。两式相加时两边各消掉一个 Pi 和一个 H₂O——<b>加法就是把中间体约掉。</b><br><br><b>=== 一句话理解 ===</b><br>用 <code>ΔG°′ = −5.71·log K</code>（25 °C）把三个数翻成平衡常数，「ATP 到底买到了什么」就有了确切答案：<br><b>不耦合</b>：+13.8 → <code>K ≈ 1/260</code>，260 个葡萄糖里只有 1 个会被磷酸化。<br><b>耦合后</b>：−16.7 → <code>K ≈ 840</code>，840 比 1 倒向产物。<br><b>翻身的倍数 ＝ 840 × 260 ≈ 2×10⁵ ——正好就是 ATP 自己水解的那个 K。</b><br>所以这句话可以说得很硬：<b>ATP 不「推」任何反应，它只是把你接上去的那个反应的平衡常数乘以二十万倍</b>，不多不少，就是它自己那个 −30.5 换算出来的数。<br>这也顺手答了「为什么不用更强的键」：<b>倍数再大也没用（反应早就一边倒了），而太大就意味着 ADP 再也补不回成 ATP</b>。书 p016 叫它「能量货币」，货币的要点正是<b>能花，也能挣回来</b>。<br>⚠ 三个 ΔG°′ 是书 p131 的；几个 K 是按 ΔG°′ = −RT ln K 算的，<b>书里没有</b>。'}
]}
]
});
