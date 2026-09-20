/* 卡 12 · Explain the functioning of the Lac and Trp operons.
   题库 #12（S2 Biochemistry 6）· 导师写过一遍
   出处 Biochemie OCR p102–p105（§4.2.4 Regulation of protein synthesis：figure 4.46–4.49）、
        p088–p090（RNA 聚合酶、σ、启动子、终止子）、p097（figure 4.40 含 lacI / lacZ / trp leader）、
        p221（酶量调控 = 诱导或阻遏）、p155 / p170 / p172（乳糖、糖苷酶、半乳糖去路）、p108（cAMP 只作激素效应物）
   书里没有（全书 grep 0 命中，一律标 general）：allolactose · IPTG · cAMP–CAP / catabolite repression · constitutive · Jacob-Monod 年份 · T7 / pET / GAL1
   图 4.46–4.49 已回 170 dpi 原图核过：基因顺序 I | P O | Z Y A；trpL 162 nt；发夹编号 1–4。 */

window.CARDS.push({
id:'12', n:12, w:2,
q:'Explain the functioning of the Lac and Trp operons.',
qcn:'解释 Lac 与 Trp 操纵子的工作方式',
sub:'主干说完约 90 秒 · 口试他多半只问 “What is an operon?” · 一个开关，两种接法',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 卷面写了 Lac and Trp，嘴上多半只有 “What is an operon?”。Lac 和 Trp 是他要挖的两个方向，不是他会念出来的题面。所以第一句永远是定义，不是「乳糖来了阻遏物走开」。'},
 {n:'01', t:'定义',
  ez:'“An operon is a group of genes. Those genes code one group of proteins. That is the textbook’s wording. They sit together in the D N A. That arrangement lets them be transcribed together. They share one promoter. They sit under one operator. And they give one messenger R N A. That messenger carries several proteins. It is a bacterial arrangement. The classic case is the lac operon of E. coli. The question asks about its functioning. That means how the whole unit is switched on and off. One regulatory protein does that.”',
  ezcn:'<b>操纵子 ＝ 一组编码一组蛋白的基因</b>（书的原话）。<b>它们在 DNA 上的排布使它们被一起转录：共用一个启动子、在同一个操纵基因管辖下、给出一条带好几个蛋白的 mRNA</b>。<b>这是细菌的安排，经典例子是大肠杆菌的 lac 操纵子。</b><b>题面问的是「它怎么运作」——也就是整个单元怎么被一个调控蛋白开关掉。</b>',
  big:'一组<b>为同一组蛋白编码</b>的基因，排在一起，<b>从一个启动子、受一个操纵基因控制、转录成一条 mRNA</b>',
  en:'“An operon is a group of genes coding the synthesis of one group of proteins — that is the textbook’s wording. They are arranged in the DNA so that they are transcribed together: from <b>one promoter</b>, under <b>one operator</b>, into <b>one messenger RNA</b> that carries several proteins. It is a bacterial arrangement, and the classic case is the lac operon of E. coli. Its <b>functioning</b> is what the question asks for: how the whole unit is switched on and off by one regulatory protein.”',
  note:'书 p103 原话只有前半句，那一句是 <i>a group of genes which code the synthesis of one group of proteins</i>。「一个启动子、一条 mRNA」是同页 figure 4.47 画的（一条 lac mRNA 下面三个箭头指向 Z、Y、A），p086 也说 mRNA 的大小取决于它决定的<b>肽链数目</b>。「polycistronic」这个词是 Lehninger 的，书里没有。<span class="pg">p103 p086</span>'},
 {n:'02', t:'四个部件',
  ez:'“An operon is built from four parts. The promoter is a D N A sequence. R N A polymerase binds it to start transcription. The operator is another D N A sequence. The repressor binds that one. And it overlaps the promoter. Then come the structural genes. Their protein products do the metabolism. Most of them are enzymes. And beside the operon sits the regulator gene. It is not inside the operon. Its protein product regulates transcription. The textbook sums it up. The operon is a control site plus a stretch of structural genes.”',
  ezcn:'<b>四个部件。</b><b>启动子 P</b>：RNA 聚合酶结合、开始转录的那段 DNA。<b>操纵基因 O</b>：阻遏蛋白结合的那段 DNA，<b>而且它跟启动子重叠</b>。<b>结构基因</b>：产物（多半是酶）真正干代谢活儿的那些基因。<b>调节基因 I</b>：<b>在操纵子旁边，不在里面</b>，它的蛋白产物负责调控转录。<b>书的总结：操纵子 ＝ 一个控制位点（P 和 O）＋ 一段结构基因。</b>',
  big:'<b>promoter</b> · <b>operator</b> · <b>structural genes</b>，这三样是操纵子；<b>regulator gene</b> 在操纵子<b>旁边</b>，不在里面',
  en:'“Four parts. The <b>promoter</b>, P, is the DNA sequence RNA polymerase binds to start transcription. The <b>operator</b>, O, is the DNA sequence the repressor binds, and it overlaps the promoter. Then the <b>structural genes</b> — the genes whose protein products, mostly enzymes, do the actual metabolism. And beside the operon, not inside it, the <b>regulator gene</b>, I, whose protein product regulates transcription. The textbook puts it as: the operon consists of a control site, P and O, and a stretch of structural genes.”',
  tbl:{head:['部件','是什么','谁来结合'],rows:[
   ['promoter P','RNA 聚合酶起始转录的那段 DNA','RNA 聚合酶（σ 因子认它）'],
   ['operator O','阻遏物结合的那段 DNA，<b>跟启动子重叠</b>','阻遏物'],
   ['structural genes Z Y A','产物是做代谢的酶','—'],
   ['regulator gene I','<b>在操纵子旁边</b>，产物是阻遏物','—']]},
  note:'书 p103 的图 4.46 就是这个顺序：I | P O | Z Y A，「Lactose operon」那个括号只罩 P O Z Y A，<b>不罩 I</b>。「操纵基因跟启动子重叠」p089 和 p104 都说了。<span class="pg">p103 p104 p089</span>'},
 {n:'03', t:'三个小分子/蛋白的名字',
  ez:'“A repressor is a protein. It binds the operator. So it blocks transcription. It is the product of the regulator gene. The textbook calls it a diffusible negative regulatory protein. An inducer is a small molecule. It binds the repressor. And it blocks the repressor from binding D N A. The textbook says the inducer is typically the substrate. Or a derivative of the substrate. A corepressor is the opposite small molecule. It makes the repressor able to bind.”',
  ezcn:'<b>阻遏蛋白 repressor</b>：结合操纵基因、从而挡住转录的蛋白；<b>它是调节基因的产物</b>，<b>书称它为「可扩散的负调控蛋白」</b>。<b>诱导物 inducer</b>：结合阻遏蛋白、让它结合不了 DNA 的小分子；<b>书说诱导物通常就是酶的底物或底物的衍生物</b>。<b>辅阻遏物 corepressor</b>：相反的那个小分子——<b>它让阻遏蛋白变得能够结合。</b>',
  big:'<b>repressor</b> 是蛋白，结合 DNA；<b>inducer</b> 是小分子，结合阻遏物让它<b>放开</b> DNA；<b>corepressor</b> 是小分子，结合阻遏物让它<b>能结合</b> DNA',
  en:'“A <b>repressor</b> is a protein that binds the operator and so blocks transcription. It is the product of the regulator gene, and the textbook calls it a diffusible, negative regulatory protein. An <b>inducer</b> is a small molecule that binds the repressor and blocks its binding to DNA. Typically, the textbook says, the inducer is the substrate of the enzyme or a derivative of it. A <b>corepressor</b> is the opposite small molecule: one that makes the repressor able to bind.”',
  note:'<b>这一格是整题的陷阱区</b>：阻遏物结合的是 <b>DNA</b>（操纵基因），不是 RNA 聚合酶；诱导物结合的是<b>阻遏物</b>，不是 DNA。书 p104 把「inducer」这个词定义成「与阻遏物作用后<b>阻断它与 DNA 的结合</b>的低分子效应物」，并说它是「正效应物」——正的是效果，机制仍是解除阻遏。<span class="pg">p104</span>'},
 {n:'04', t:'两种控制 × 两种操纵子',
  ez:'“Control of an operon comes in two kinds. Negative control is also called repression. A protein brakes transcription. Positive control is also called stimulation. A regulatory protein speeds it up. And there are two kinds of operon. They differ by what the small molecule does. Inducible means off until a substrate turns it on. Repressible means on until a product turns it off. The lac operon is the inducible example. It is also negatively controlled. The trp operon is the repressible one.”',
  ezcn:'<b>两种控制</b>：<b>负控制（阻遏）＝ 一个蛋白给转录踩刹车</b>；<b>正控制（促进）＝ 一个调控蛋白给它加速</b>。<b>两种操纵子</b>（按小分子干什么分）：<b>可诱导型 ＝ 平时关着，底物来了才开</b>；<b>可阻遏型 ＝ 平时开着，产物来了才关</b>。<b>lac 是可诱导 ＋ 负控制的例子，trp 是可阻遏的那个。</b>',
  big:'<b>负控制</b>（阻遏物刹车）vs <b>正控制</b>（激活蛋白加速）；<b>可诱导</b>（默认关，底物打开）vs <b>可阻遏</b>（默认开，产物关掉）',
  en:'“Two kinds of control. <b>Negative</b> control, also called repression, is a protein that brakes transcription. <b>Positive</b> control, also called stimulation, is a regulatory protein that speeds it up. And two kinds of operon by what the small molecule does. <b>Inducible</b> means off until a substrate turns it on. <b>Repressible</b> means on until a product turns it off. The lac operon is the inducible, negatively controlled example, and the trp operon is the repressible one.”',
  note:'书 p102 开篇就是这两种（书上印的是 <i>negative regulation (repression) … positive regulation (stimulation)</i>）；「诱导或阻遏」这对词在 p221 讲酶量调控时出现。<b>两组分类是两个轴，不是一个</b>：lac 是「负控制 ＋ 可诱导」，trp 是「负控制 ＋ 可阻遏」，而葡萄糖那一层（见 10）是 lac 上的<b>正</b>控制。<span class="pg">p102 p221</span>'},
 {n:'05', t:'为什么这么装',
  ez:'“The logic is economy. Protein synthesis is endergonic. That is the textbook’s own word. The textbook says why both controls exist. Proteins should be neither made needlessly nor lacking. So a catabolic pathway is induced by its substrate. The enzymes are made only when there is something to break down. An anabolic pathway is repressed by its product. It stops once there is enough.”',
  ezcn:'<b>这么装的逻辑是省。</b><b>蛋白质合成是吸能的（书自己的用词）</b>，<b>书说两种控制之所以都存在，是为了让蛋白「既不被白造，也不短缺」</b>。<b>所以：分解代谢通路由它的底物诱导——有东西要拆的时候才造那些酶；合成代谢通路由它的产物阻遏——够了就停。</b>',
  big:'<b>分解通路由底物诱导，合成通路由产物阻遏</b>——理由是<b>经济</b>：蛋白合成是吸能的',
  en:'“The logic is economy. Protein synthesis is <b>endergonic</b> — that is the textbook’s own word. The textbook says both controls exist so that proteins are neither made <b>needlessly</b> nor <b>lacking</b>. So a catabolic pathway is induced by its substrate: make the enzymes only when there is something to break down. An anabolic pathway is repressed by its product: stop once there is enough.”',
  note:'p092 那一句是 <i>protein synthesis is moreover an endergonic process and is strictly regulated</i>。p102 那一句是 <i>so that certain proteins are not synthesised in the cell needlessly, or conversely are not lacking</i>。这两句合起来就是「为什么」的第一层，<b>不用引 Lehninger</b>。<span class="pg">p092 p102</span>'},

 {g:'lac 操纵子 · 可诱导、分解', gn:'三个基因、一个默认状态、一个开关动作。顺序：产物是什么 → 默认关 → 乳糖来了怎么开。'},
 {n:'06', t:'三个基因三个产物',
  big:'<b>lacZ</b> β-galactosidase（把乳糖水解成半乳糖 ＋ 葡萄糖）· <b>lacY</b> galactoside permease（把乳糖运进来）· <b>lacA</b> thiogalactoside transacetylase',
  en:'“Three <b>structural genes</b>, meaning the genes that code the proteins themselves. The first, <b>lacZ</b>, codes <b>β-galactosidase</b>. That is the hydrolase that splits lactose at its β-1,4 glycosidic bond into galactose and glucose, lactose being 4-O-β-D-galactopyranosyl-D-glucose, milk sugar. The second, <b>lacY</b>, codes <b>galactoside permease</b>, the membrane protein that carries lactose into the cell. The third, <b>lacA</b>, codes <b>thiogalactoside transacetylase</b>, whose physiological role is, generally speaking, still not clear.”',
  note:'三个名字是 figure 4.46 图注给的。乳糖的结构和「乳糖」这个名字在 p155；β-D-galactosidase 属于水解酶在 p170。<b>lacA 的作用书没说</b>，「不清楚」是通用说法。<span class="pg">p103 p155 p170</span>'},
 {n:'07', t:'默认关',
  big:'没有诱导物时，<b>阻遏物坐在操纵基因上</b>；操纵基因跟启动子重叠，所以 RNA 聚合酶过不去',
  en:'“The default is <b>off</b>. With no inducer, the lac repressor sits on the operator, and because the operator overlaps the promoter, RNA polymerase cannot transcribe the operon. The repressor is made by lacI all the time, at a low constant level. That is the textbook’s figure 4.47a.”',
  note:'「lacI 一直在表达」书没有明说，但它是模型成立的前提（阻遏物得先在那儿才能默认关），通用说法。顺带一个书里的细节：p097 figure 4.40 列的起始序列里，<b>只有 lacI 的起始密码子不是 AUG</b>（是 GUG）——弱起始，跟「阻遏物量少」一致，这个联系是我推的。<span class="pg">p103 p104 p097</span>'},
 {n:'08', t:'开关动作',
  big:'乳糖进来 → 它的<b>衍生物</b>（allolactose，general）结合阻遏物 → 复合物<b>从操纵基因上解离</b> → 转录三个基因成一条 lac mRNA',
  en:'“Lactose comes in, and a derivative of it binds the repressor. The textbook says ‘the substrate or a derivative of it’. Generally the actual inducer is <b>allolactose</b>, galactose linked β-1,6 to glucose, which β-galactosidase itself makes from a little lactose as a side reaction. The repressor-inducer complex no longer binds the operator and comes off. RNA polymerase transcribes the three genes into one lac mRNA, and the enzymes are made. The textbook calls the operator-repressor-inducer system a <b>molecular switch</b>.”',
  note:'<b>「乳糖诱导」严格说是 allolactose 诱导</b>，但书只说「底物或其衍生物」，所以先说书的，再补 general。「分子开关」是 p104 原话，书上印的是 <i>molecular switch</i>。<span class="pg">p104</span>'},
 {n:'09', t:'开关的硬件',
  big:'操纵基因<b>近乎回文</b>；阻遏物有<b>三个结合位</b>（O₁ 跟启动子重叠 ＋ 两个假操纵基因）；聚合酶那边：全酶 α₂ββ′σ 开启动子，先做 ≤9 nt 的短 RNA，<b>σ 走了</b>核心酶才延伸',
  en:'“On the DNA side, the lac operator is a near-<b>palindrome</b>, nearly the same sequence read in both directions. The textbook says that facilitates protein binding: a symmetric site for a symmetric protein. The repressor has three sites in the operon: the primary operator O₁, which overlaps the promoter, and two pseudo-operators. On the polymerase side, the holoenzyme, α₂ββ′σ, forms an open complex with the promoter and makes short RNAs up to nine nucleotides. When σ is released and the promoter freed, the core enzyme, α₂ββ′, elongates.”',
  note:'都在 p104。⚠ 两处要小心：① p104 把全酶印成了「<i>the holoenzyme of DNA polymerase</i>」，p088 同一个亚基组成写的是 RNA 聚合酶——是书的笔误，说 RNA polymerase；② 书说两个假操纵基因「在 lacZ 里面」，通用说法是 O₂ 在 lacZ 里、O₃ 在上游 lacI 里，被追就说 general。「阻遏物是四聚体、同时抓两个位点把 DNA 拉成环」是通用知识，书没有。<span class="pg">p104 p088</span>'},
 {n:'10', t:'葡萄糖优先（general）',
  big:'有葡萄糖时 lac 不全开——<b>catabolite repression</b>：葡萄糖少 → cAMP 多 → cAMP–CAP 结合启动子旁边帮聚合酶上来；这是 lac 上的<b>正控制</b>',
  en:'“If glucose is present as well, E. coli uses it first. That is generally called <b>catabolite repression</b>, and the textbook does not cover it. Generally, low glucose raises cyclic AMP, and cAMP binds the catabolite activator protein, CAP. The cAMP-CAP complex then binds next to the lac promoter and helps RNA polymerase bind, which is <b>positive</b> control. That is exactly the shape the textbook describes for positive regulation: a protein binding at the promoter and changing the DNA’s conformation so polymerase binds more easily. The textbook never names the protein. So lac needs two yes-votes: lactose present <b>and</b> glucose absent.”',
  note:'全书 grep：cAMP 只在 p108 作激素效应物、p175 作糖原磷酸化酶级联出现；CAP、以及「catabolite」这个词 0 命中。<b>所以整条标 general</b>，但可以借 p105 那段「正调控」的形状。<span class="pg">p105 p108</span>',
  warn:'不要说成「书上讲了 CAP」。书讲了「正调控的形状」，没讲 CAP。'},

 {g:'trp 操纵子 · 可阻遏、合成', gn:'⚠ 书对 trp 讲的机制<b>只有衰减</b>。「阻遏物 ＋ 色氨酸辅阻遏物」那一层书只给了 corepressor 的通用定义，没说色氨酸——那一层要标 general。'},
 {n:'11', t:'五个基因三个酶',
  big:'<b>trpE D C B A</b> 五条多肽 → 三个酶，从 <b>chorismate</b> 合成色氨酸；<b>trpC 一个产物做两步</b>；tryptophan synthase α₂β₂ 最后一步接 serine',
  en:'“The trp operon of E. coli has five structural genes: trpE, D, C, B, A. They code five polypeptides that form three enzymes of tryptophan synthesis from <b>chorismate</b>. The first is <b>anthranilate synthase</b>, from trpE and trpD. The second is the <b>trpC</b> product, which catalyses two consecutive steps. The third is <b>tryptophan synthase</b>, α₂β₂, from trpB and trpA, and it joins indole-3-glycerol phosphate with serine to give tryptophan and releases glyceraldehyde-3-phosphate.”',
  note:'全部来自 figure 4.48 和 p104 正文，那两句是 <i>five polypeptides which form three enzymes</i>；<i>the gene product of trpC catalyses two consecutive reactions</i>。通路：chorismate ＋ glutamine → anthranilate → N-(5′-phosphoribosyl)-anthranilate（用 PRPP）→ 异构 → indole-3-glycerol-P（放 CO₂）→ ＋ serine → Trp。<span class="pg">p104</span>'},
 {n:'12', t:'第一层：阻遏 ＋ 辅阻遏物（general）',
  big:'默认<b>开</b>；trp 阻遏物<b>单独不结合</b>操纵基因，<b>色氨酸结合上去它才能结合</b>——色氨酸就是辅阻遏物',
  en:'“It is the <b>repressible</b> case, an anabolic operon that is <b>on</b> by default and switched off when its end product is plentiful. The textbook defines a corepressor only in general, as a small molecule that influences the repressor. Generally, for trp that molecule is <b>tryptophan itself</b>. The trp repressor cannot bind the operator on its own. With tryptophan bound it can, and transcription stops. That first layer is Lehninger. The textbook’s own account of the trp operon is the second layer, attenuation.”',
  note:'corepressor 的定义在 p104，书上那一句是 <i>the function of the repressor can further be influenced by a low-molecular-weight effector, a corepressor</i>。<b>书从没写「色氨酸是辅阻遏物」</b>，所以这一格英文里要有 “generally”。<span class="pg">p104</span>',
  warn:'trp 阻遏物的名字 TrpR、它是二聚体——都是通用知识，不是书的。'},
 {n:'13', t:'第二层：衰减是什么',
  big:'<b>转录已经开始之后</b>再决定要不要继续进结构基因。启动子和 trpE 之间有一段 <b>leader trpL，162 个核苷酸</b>，末端是<b>衰减子</b>；leader 编码一个短肽，里面有<b>两个连着的 Trp 密码子</b>',
  en:'“<b>Attenuation</b> is a second, finer control that decides, after transcription has started, whether it continues into the structural genes. Between the promoter and trpE there is a leader, trpL, 162 nucleotides long, and near its end an <b>attenuator</b>. The textbook says the attenuator has a function similar to an operator. The leader encodes a short <b>leader peptide</b>, and that peptide contains two tryptophan codons in a row. Generally it is a fourteen-residue peptide with tryptophan at positions ten and eleven.”',
  note:'162 nt 是 p104 原文（已回原图核）。「14 个残基、Trp 在 10 和 11」是 Lehninger 的，书只说「串联的 Trp 密码子」，p104 印的是 <i>a tandem of Trp codons</i>。<span class="pg">p104 p105</span>',
  warn:'p104 正文说 leader「转录但<b>不翻译</b>成肽」——<b>这跟书自己的图矛盾</b>：figure 4.49 画的是「Ribosome transcribing the leader peptide」、「Leader peptide」，p097 figure 4.40 还把 trp leader 列在核糖体识别的起始序列里。衰减<b>必须</b>翻译 leader 肽才成立。用图打正文：“The text says the leader is not translated. The figure on the next page shows a ribosome on it, and the mechanism needs that ribosome.”'},
 {n:'14', t:'两种情形',
  big:'<b>色氨酸多</b>：核糖体一路读完 leader 肽，盖住片段 2 → <b>3–4 发夹</b>＝终止子 → 聚合酶掉下来。<b>色氨酸少</b>：没有带 Trp 的 tRNA，核糖体<b>停在两个 Trp 密码子上</b>（片段 1）→ <b>2–3 发夹</b>＝抗终止子 → 3–4 形不成 → 读进操纵子',
  en:'“Two cases, four segments of leader RNA. With plenty of tryptophan there is plenty of charged tRNA-Trp. The ribosome translates the leader peptide straight through and covers segment 2, so segments 3 and 4 pair. That <b>3-4 hairpin</b> is a transcription terminator, and RNA polymerase falls off before the structural genes. With little tryptophan there is no charged tRNA-Trp. The ribosome <b>stalls</b> at the tandem Trp codons in segment 1, so segments 2 and 3 pair instead. That 2-3 pairing is the <b>antiterminator</b>, 3-4 cannot form, and polymerase reads through into the operon.”',
  note:'一字不差是 figure 4.49 的图注，书上那一段是 <i>(a) in the case of sufficient tRNA<sup>Trp</sup> … hairpin 3–4 … (b) … the ribosome stops at the tandem of Trp codons in segment 1 … hairpin 2–3</i>。<b>要记的只有一对数字：多 → 3–4 停；少 → 2–3 走。</b><span class="pg">p105</span>'},
 {n:'15', t:'为什么只有原核能这么干',
  big:'因为细菌里<b>核糖体在 RNA 聚合酶还在合成 mRNA 的时候就已经在翻译它</b>——没有核，没有 ER。真核转录在核里、翻译在胞质，核糖体赶不上去决定 RNA 怎么折',
  en:'“It only works because in a bacterium translation is coupled to transcription: the ribosome is on the mRNA while RNA polymerase is still making it. There is no nucleus and no endoplasmic reticulum, and protein synthesis is on free ribosomes only, as the textbook says. Its figure shows the ribosome and the polymerase on the same transcript. In a eukaryote transcription is in the nucleus and translation in the cytosol, and the message is processed in between, so the ribosome cannot reach the RNA in time to decide its fold. The coupling sentence itself is general. The figure is the textbook’s.”',
  note:'p102：原核无 ER，蛋白合成只在游离核糖体上；p105 图里核糖体和聚合酶在同一条 RNA 上。「偶联」这个词书没说，是从图读出来的，说成 “the figure shows”。<span class="pg">p102 p105</span>'},
 {n:'16', t:'3–4 发夹为什么能终止',
  big:'书 p090 讲的<b>通用终止子</b>：<b>富 G+C 的回文</b>在 RNA 里折成稳定发夹，<b>后面跟一串 U</b>，U–A 配对弱，转录物就松手',
  en:'“The 3-4 hairpin terminates for the reason the textbook gives for any intrinsic terminator. A G+C-rich palindrome in the DNA is transcribed into a self-complementary RNA that folds into a stable hairpin, followed by a run of four to ten A-T pairs read as U’s. The decisive factors, the textbook says, are the hairpin’s stability and the weak pairing of the oligo-U tail with the template. Transcription stops spontaneously, with no protein needed.”',
  note:'p090 原文，两个特征（(i) 4–10 个 A–T，(ii) 富 G+C 的回文）。<b>这一句把 #12 接回 #15/#3 那片书</b>：衰减子不是新东西，就是一个被核糖体决定形不形成的普通终止子。ρ 因子终止是另一类，那里不需要。<span class="pg">p090</span>'},

 {g:'收尾', gn:'怎么发现的一句、停一句、伸出去一句。这题的口子非常干净——她天天在用这个开关。'},
 {n:'17', t:'怎么发现的',
  big:'<b>Jacob 和 Monod</b>（书点名），从<b>乳糖酶诱导</b>的实验推出来的；决定性的工具是<b>组成型突变体</b>（general）',
  en:'“Jacob and Monod derived the model from experiments on the induction of the lactose enzymes, and the textbook names them. Generally that was 1961. The decisive tool was mutants in which the enzymes were made all the time, <b>constitutively</b>, whatever lactose did. There were two such mutants: either a mutant regulator gene with no working repressor, or a mutant operator the repressor cannot bind. Those two behave differently when you add a second copy of the genes, and that difference is what separated a diffusible protein from a site on the DNA.”',
  note:'书 p102 说这是 Jacob 和 Monod 的「假说性机制」，「已部分在原核细胞得到实验验证」——<b>书是老的</b>；通用知识：lac 阻遏物已被分离、结构已解出。年份 1961、诺贝尔 1965 书里都没有，standard history。cis / trans 那对词书没有，但 p104 有它们的实质：阻遏物「可扩散」，书上印的词是 <i>diffusible</i>；操纵基因只管「同一条染色体」，书上印的是 <i>of the same chromosome</i>。<span class="pg">p102 p104</span>'},
 {n:'18', t:'落点',
  big:'机制之下是<b>经济 ＋ 选择</b>；再往下是<b>结合的动力学</b>——阻遏物抓操纵基因多紧、诱导物让它松多少',
  en:'“Below the mechanism, the question is why a cell is built this way, and the answer is economy under selection. A cell that spends ATP on enzymes it does not need grows more slowly than one that does not, so the arrangement that survived is the one that switches. Further down it is <b>binding</b>: how tightly the repressor holds the operator relative to random DNA, and by how much the inducer loosens it — a dissociation constant. Below that we are in physical chemistry rather than biochemistry.”',
  note:'停在<b>进化</b>，顺手把第二块地基（动力学 / Kd）也点了名——因为那正是她的主场。'},
 {n:'19', t:'留口子',
  big:'这个开关<b>我每周都在用</b>：表达质粒上有 lac operator 和 lacI，<b>IPTG</b> 诱导；酵母展示用的是 <b>GAL1</b> 启动子',
  en:'“This is the switch I use every week. My bacterial expression plasmids carry the lac operator and lacI, and I induce with <b>IPTG</b>, a gratuitous inducer. It binds the repressor like allolactose, but the cell cannot metabolise it, so the signal does not go away. In yeast I induce surface display through the GAL1 promoter, which is switched on by galactose. That is the eukaryotic parallel: positive control by an activator rather than an operon.”',
  note:'全是实验室知识，书 grep 0。他顺着走就到 pET / T7 / BL21(DE3) 或 yeast display（卡 02）。<b>说到自己的质粒前先确认你手里的图谱真的是 T7lac ＋ lacI</b>——pET 系列是，但别替不是的载体背书。'},
 {n:'20', t:'要是让你画',
  big:'先画一条横线；从左到右写 <b>I</b> ｜ <b>P O</b> ｜ <b>Z Y A</b>；在 I 下面画阻遏物，箭头指向 O；在 P 上画 RNA 聚合酶；从 P 开始画一条波浪线 mRNA 盖过 Z Y A，三个箭头向下写三个酶',
  en:'“A line for the DNA. Left to right: I, then P and O together as the control site, then Z, Y, A. Under I, the repressor, arrow to O. Polymerase on P. From P a wavy line, the single lac mRNA, over Z, Y and A, with three arrows down to β-galactosidase, permease and transacetylase. For trp: P and O, then the leader trpL with the attenuator at its end, then E, D, C, B, A. Next to it, draw the four segments of leader RNA, 3-4 paired for stop, 2-3 paired for go.”',
  note:'这就是 figure 4.46 ＋ 4.47b ＋ 4.48 的骨架。没有导图（书图是彩版翻印，认的价值低），画的顺序比图本身有用。<span class="pg">p103 p104</span>'}
],
end:'<b>这题的分数在 01–05 和 13–15。</b>定义和分类先说清（一个启动子、一条 mRNA、四个部件、两个轴），然后 lac 一句开关、trp 两层，衰减用「多 → 3–4 停；少 → 2–3 走」一对数字扛住。葡萄糖、allolactose、IPTG、组成型突变体全是 general，说的时候带上这个词。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：一组为同一组蛋白编码的基因，<b>一个启动子、一个操纵基因、一条 mRNA</b>',
 '“A group of genes coding one group of proteins, transcribed together from one promoter, under one operator, into one mRNA.”',
 '前半句是书 p103 原话，后半句是 figure 4.47 画的。'],
['<b>四个部件</b>：P · O · 结构基因；调节基因 I <b>在旁边</b>',
 '“Promoter, operator, structural genes. And beside the operon the regulator gene, whose product is the repressor.”',
 '图 4.46 的括号不罩 I。操纵基因跟启动子重叠。'],
['<b>三个名字</b>：repressor 蛋白结合 DNA；inducer 让它放开；corepressor 让它能结合',
 '“The repressor binds the operator. An inducer binds the repressor and blocks its binding to DNA. A corepressor does the opposite.”',
 '陷阱区。阻遏物结合的是操纵基因不是聚合酶；诱导物结合的是阻遏物不是 DNA。'],
['<b>两个轴</b>：负 / 正控制 × 可诱导 / 可阻遏',
 '“Negative control brakes, positive control speeds up. Inducible is off until a substrate, repressible is on until a product.”',
 'lac ＝ 负 ＋ 可诱导；trp ＝ 负 ＋ 可阻遏；CAP ＝ lac 上的正控制。'],
['<b>为什么</b>：蛋白合成吸能，不多做也不缺',
 '“Protein synthesis is endergonic. The controls exist so proteins are neither made needlessly nor lacking.”',
 'p092 ＋ p102，两句都是书的。'],
['<b>lac 三个产物</b>：Z β-galactosidase · Y permease · A transacetylase',
 '“The lacZ product, β-galactosidase, splits lactose. The lacY product, the permease, carries it in. The lacA product is a transacetylase.”',
 '乳糖 = 4-O-β-D-galactopyranosyl-D-glucose，β-1,4。'],
['<b>lac 默认关，乳糖开</b>：阻遏物坐在 O 上 → allolactose 结合阻遏物 → 解离 → 一条 lac mRNA',
 '“Off by default: the repressor on the operator. Lactose in, a derivative binds the repressor, it comes off, one lac mRNA.”',
 '书说「底物或其衍生物」；allolactose 是 general。'],
['<b>硬件</b>：O 近乎回文；三个位点 O₁ O₂ O₃；全酶 α₂ββ′σ 先做 ≤9 nt，σ 走了才延伸',
 '“The operator is a near-palindrome. The repressor has three sites. The holoenzyme makes RNAs up to nine nucleotides, then σ leaves.”',
 '书 p104 把全酶误印成 DNA polymerase，说 RNA。'],
['<b>葡萄糖优先</b>（general）：cAMP–CAP 帮聚合酶上来，正控制',
 '“Generally, low glucose raises cAMP, and cAMP-CAP binds by the promoter and helps polymerase. That is positive control. The textbook has the shape, not the name.”',
 '两个 yes：有乳糖 ＋ 没葡萄糖。'],
['<b>trp 五基因三酶</b>：E D C B A，从 chorismate，trpC 做两步，synthase α₂β₂',
 '“Five genes, three enzymes from chorismate: anthranilate synthase, the trpC product doing two steps, tryptophan synthase α₂β₂.”',
 '全在 figure 4.48。'],
['<b>trp 第一层</b>（general）：默认开；色氨酸是辅阻遏物',
 '“On by default. Generally tryptophan is the corepressor — the repressor binds only with tryptophan bound.”',
 '书只定义了 corepressor，没说色氨酸。'],
['<b>衰减</b>：leader trpL 162 nt，末端衰减子；leader 肽有<b>两个连着的 Trp 密码子</b>',
 '“A 162-nucleotide leader with an attenuator. The leader peptide has two tryptophan codons in a row.”',
 '书正文说 leader 不翻译——图说翻译。用图。'],
['<b>多 → 3–4 停；少 → 2–3 走</b>',
 '“Plenty of tryptophan: the ribosome covers segment 2, the 3–4 terminator forms, polymerase stops. Little: it stalls on the Trp codons, 2–3 forms instead, polymerase reads through.”',
 '一对数字扛住整个机制。'],
['<b>只有原核</b>：核糖体在聚合酶还在合成时就在翻译',
 '“Only in bacteria: translation is coupled to transcription — the figure shows both on one transcript.”',
 '真核转录在核、翻译在胞质。'],
['<b>怎么发现的</b>：Jacob 和 Monod，从乳糖酶诱导；组成型突变体（general）',
 '“Jacob and Monod, from the induction of the lactose enzymes. The key mutants were constitutive ones.”',
 '书说「假说性机制、部分验证」——书是老的。'],
['<b>留口子</b>：lac operator ＋ lacI ＋ IPTG 在我的质粒上；GAL1 在酵母',
 '“This is the switch I use every week — the lac operator and IPTG on my expression plasmids, GAL1 in yeast.”',
 '他顺着走就到 pET / T7 或卡 02。']
],

segs:[
 {tag:'段 1 · 定义', h:'从最短的问法起步，把结构自己接上',
  p:['“An operon is a group of genes coding the synthesis of one group of proteins — that is the textbook’s wording. They are arranged so that they are transcribed together: from one promoter, under one operator, into one messenger RNA carrying several proteins. It is a bacterial arrangement, and its functioning is what the question asks for: how the whole unit is switched on and off by one regulatory protein.”',
     '“Four parts. The <b>promoter</b> is the DNA sequence RNA polymerase binds to start transcription. The <b>operator</b> is the DNA sequence the repressor binds, and it overlaps the promoter. The <b>structural genes</b> are the ones whose products, mostly enzymes, do the metabolism. And beside the operon, not in it, the <b>regulator gene</b>, whose product, the repressor, controls transcription.”'],
  note:'<b>他嘴里的题面只到 “What is an operon?”。</b>Lac 和 Trp 是他要挖的方向，你在段 2 主动把两个例子摆出来，不要等他问。'},
 {tag:'段 2 · general', h:'两个轴、一个理由、两个例子的归类',
  p:['“Two kinds of control: <b>negative</b>, a repressor that brakes transcription, and <b>positive</b>, a regulatory protein that speeds it up. And two kinds of operon by what the small molecule does. <b>Inducible</b> means off until a substrate turns it on. <b>Repressible</b> means on until a product turns it off.”',
     '“The logic is economy: protein synthesis is endergonic, and the textbook says both controls exist so that proteins are neither made needlessly nor lacking. So a catabolic pathway is induced by its substrate, an anabolic pathway is repressed by its product.”',
     '“The two classic examples are the two cases. The <b>lac</b> operon of E. coli is inducible, and it has three genes for using lactose. The <b>trp</b> operon is repressible, and it has five genes for making tryptophan.”'],
  note:'到这里 “functioning” 这个词还没兑现，但分类已经给了。<b>先分类再机制</b>，这是每张卡的顺序。'},
 {tag:'段 3 · 稍展开', h:'lac 一句开关，trp 两层',
  p:['“<b>lac</b>: the gene lacZ codes β-galactosidase, which splits lactose into galactose and glucose. The gene lacY codes the permease that carries lactose in, and lacA codes a transacetylase. The default is off — the lac repressor, made by lacI, sits on the operator, and because the operator overlaps the promoter, polymerase cannot start. When lactose comes in, a derivative of it binds the repressor. That derivative is generally allolactose. The complex comes off the operator, and the three genes are transcribed into one lac mRNA. The textbook calls it a molecular switch. Generally there is a second, positive layer: with glucose absent, cAMP–CAP helps polymerase bind, so E. coli uses glucose first.”',
     '“<b>trp</b>: five genes, three enzymes from chorismate to tryptophan. The default is on. Generally, the first layer is a repressor that binds only with tryptophan as its corepressor. The textbook’s own layer is <b>attenuation</b>: a 162-nucleotide leader in front of the first gene encodes a short peptide with two tryptophan codons in a row. With plenty of tryptophan the ribosome reads through and covers segment 2, so the 3-4 terminator hairpin forms and polymerase stops before the genes. With little tryptophan the ribosome stalls on the Trp codons, 2-3 forms instead, 3-4 cannot, and polymerase reads through.”'],
  note:'lac 那段说完就够八分。trp 的两层各一句，「多 → 3–4 停；少 → 2–3 走」是最省的记法。<b>别在这一段展开三个操纵基因位点或 σ 因子</b>，那是被追问才给的。'},
 {tag:'段 4 · 留口子', h:'为什么只有原核，然后落到自己的质粒',
  p:['“Attenuation only works because in a bacterium the ribosome is on the mRNA while polymerase is still making it. The textbook’s figure shows both on one transcript. A eukaryote transcribes in the nucleus and translates in the cytosol, so it cannot do this. Below the mechanism the reason for all of it is economy under selection.”',
     '“And this is the switch I use every week. My bacterial expression plasmids carry the lac operator and lacI, and I induce with IPTG. IPTG is a gratuitous inducer, one the cell cannot metabolise, so the signal stays. In yeast I induce surface display through the GAL1 promoter — the eukaryotic parallel, an activator switched on by galactose.”'],
  note:'<b>这个口子他多半接。</b>接了就是 pET / T7 / BL21(DE3) 或 yeast display——两边都在「桥回主场」那一组里备好了。'}
],

why:{
 rungs:[
  ['为什么大肠杆菌不干脆一直做 β-半乳糖苷酶？','因为<b>蛋白合成是吸能的</b>（<span class="pg">p092</span>），三个酶白做等于白烧 ATP 和氨基酸。书 p102 直接说控制的目的是「不多做、也不缺」。'],
  ['那为什么分解通路是默认关、合成通路是默认开？','因为<b>信号就是那个分子本身</b>。分解通路的底物出现＝有活可干，所以底物当诱导物；合成通路的产物够了＝活干完了，所以产物当辅阻遏物。同一个逻辑、两个接法，接的那头由通路方向决定。'],
  ['那为什么细胞会长成这样？','因为<b>选择</b>：两株细菌，一株按需开关，一株常开，后者每一代都多付一笔蛋白合成的账，长得慢，几百代之后就没了。所以留下来的是会开关的那一株——这不是设计，是筛选的结果。']
 ],
 stop:{lbl:'停 · 落在进化（顺带点名动力学）',
  say:'“Below that we are asking why economy wins, and that is selection — a historical answer, not a mechanistic one. The other direction down is binding: how tightly the repressor holds the operator relative to random DNA, and by how much the inducer loosens it. That is a dissociation constant, and below that we are in physical chemistry rather than biochemistry.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p103_obr446_lac_gene_map.jpg',
  t:'操纵子的四个部件，一条横线画完（书 Obr. 4.46）',
  cap:'<b>速背 20 说「没有导图」——那是按旧规矩下的判断。'
    + '现在图裁出来了，而且图里的标注本来就是英文的：'
    + 'Regulatory gene · Control sites · Structural genes · Lactose operon。</b>'
    + '<br><br><b>这张图的全部内容就是一件事：哪一段算 operon，哪一段不算。</b>'
    + '下面那根 <b>Lactose operon</b> 的箭头<b>从 P 开始</b>，<b>不包含 I</b>。'
    + '<br><br><b>画的顺序（四步，十秒）</b>：'
    + '<br>① 画<b>一条横长条</b>，从左到右分成六格，依次写 <b>I ｜ P ｜ O ｜ Z ｜ Y ｜ A</b>。'
    + '<br>② 在 <b>I</b> 上方写 <b>regulatory gene</b>；在 <b>P 和 O</b> 上方写 <b>control sites</b>；'
    + '在 <b>Z Y A</b> 上方写 <b>structural genes</b>。'
    + '<br>③ 在下方画一根<b>从 P 到 A</b> 的双向箭头，写 <b>lac operon</b>。<b>这一笔就是考点。</b>'
    + '<br>④ 在 Z、Y、A 下面各引一根箭头，写三个酶的名字。'
    + '<br><br><b>边画边说的两句</b>：“An <b>operon</b> is a group of genes that code the synthesis of one group of proteins. '
    + 'It has two parts: a <b>control region</b>, the promoter and the operator, and a stretch of <b>structural genes</b>.”'
    + '<br>“The <b>regulatory gene</b> is next to the operon but <b>not part of it</b>. Its product is the <b>repressor</b>, and because the repressor is a diffusible protein the regulatory gene does not even have to sit here.”'
    + '<br><br>⚠ <b>图注里书把三个酶的名字都给了</b>：Z 是 <b>β-galactosidase</b>、'
    + 'Y 是 <b>galactoside permease</b>、A 是 <b>thiogalactoside transacetylase</b>。'
    + '<b>三个都能报名字，比只说「three enzymes」值钱。</b>',
  src2:'Biochemie, Obr. 4.46, p103 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p103_obr447_lac_operon_switch.jpg',
  t:'lac 开关的两个状态 —— 没诱导物 / 有诱导物（书 Obr. 4.47）',
  cap:'<b>上下两格，标题本来就是英文：(a) Absence of inducer · (b) Presence of inducer。</b>'
    + '这两格就是速背 07、08、09 三点的全部内容。'
    + '<br><br><b>画的顺序（两格，每格三笔）</b>：'
    + '<br><b>(a) 没有诱导物</b>：① 把上一张的条再画一遍（P O Z Y A）；'
    + '② 在 <b>O</b> 上面扣一个椭圆，标 <b>repressor</b>；'
    + '③ 旁边写一句 <b>no transcription</b>。'
    + '<br><b>(b) 有诱导物</b>：① 同一条；② 把椭圆从 <b>O</b> 上拿开，在旁边画一个小黑点贴在它身上，'
    + '小黑点标 <b>inducer</b>，写一句 <b>does not bind</b>；'
    + '③ 在 <b>P</b> 上画一个大椭圆标 <b>RNA polymerase</b>，从它往右拉一条横线盖过 Z Y A，标 <b>lac mRNA</b>，'
    + '再从 Z、Y、A 各向下一根箭头。'
    + '<br><br><b>边画边说的三句</b>：“The default state is <b>off</b>. The repressor, the product of gene I, sits on the <b>operator</b> and prevents transcription.”'
    + '<br>“The <b>inducer</b> binds the <b>repressor</b>, not the DNA. The complex can no longer bind the operator, it falls off, and RNA polymerase can move. '
    + 'So the textbook calls the inducer a <b>positive effector</b>, and the whole operator-repressor-inducer system a <b>molecular switch</b>.”'
    + '<br>“One promoter gives <b>one</b> mRNA covering all three structural genes, and that single mRNA is translated into three separate proteins.”'
    + '<br><br><b>图里那条 lac mRNA 底下的三根箭头，就是「一条 mRNA 、三个产物」的书证。</b>'
    + '“polycistronic” 这个词书里没有，是 Lehninger 的；要用就先指图再报这个词。'
    + '<br>⚠ 说到“inducer”时别把它说成直接作用在 DNA 上。<b>它绑的是蛋白，不是基因</b>——图里那根箭头就是这么画的。',
  src2:'Biochemie, Obr. 4.47, p103 · 250 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p104_obr448_trp_operon_map.jpg',
  t:'trp 操纵子的地图 —— 多了 trpL 和 Attenuator 两格（书 Obr. 4.48）',
  cap:'<b>把这张跟 lac 那张对着看，差别一眼就出来了：</b>'
    + 'trp 的控制区后面<b>多了两格</b>——<b>trpL</b>（先导序列）和紧跟着的 <b>Attenuator</b>，'
    + '然后才是五个结构基因 <b>trpE trpD trpC trpB trpA</b>。<b>这两格就是第二层调控住的地方。</b>'
    + '<br><br><b>画的顺序（五步）</b>：'
    + '<br>① 一条横条，最左一格写 <b>trpP, O</b>（启动子加操作基因，书把它们合在一格）。'
    + '<br>② 接一格写 <b>trpL</b>，它右端紧贴一个<b>窄黑格</b>，上方写 <b>Attenuator</b>。'
    + '<br>③ 后面五格依次写 <b>trpE · trpD · trpC · trpB · trpA</b>，上方写 <b>structural genes</b>。'
    + '<br>④ 下方画<b>两条波浪线</b>：一条长的标 <b>mRNA</b>，一条只到 attenuator 就断的标 <b>leader mRNA</b>，'
    + '两条之间写一个 <b>or</b>。<b>这一笔把衰减画出来了：不是不转录，是只转录一段就停。</b>'
    + '<br>⑤ 要多说一层就报产物：五个基因 → <b>三个酶</b>。'
    + '<br><br><b>边画边说的三句</b>：“The trp operon codes <b>five polypeptides</b> that make up <b>three enzymes</b> of tryptophan synthesis. '
    + 'Two pairs associate: anthranilate synthase is made of two different components, and tryptophan synthase is an alpha-two beta-two.”'
    + '<br>“Before the structural genes there is a <b>leader</b> region, <b>trpL</b>, of <b>162 nucleotides</b>, and at its end a second regulatory element, the <b>attenuator</b>.”'
    + '<br>“The attenuator has a similar function to an operator, but it does not work by binding a protein. '
    + 'When it acts, the polymerase stops at the attenuator, so the cell gets a short <b>leader mRNA</b> instead of the whole operon.”'
    + '<br><br><b>图的下半部还白送一条路</b>：从 <b>chorismate</b> 到 <b>L-tryptophan</b> 的整条合成，'
    + '每一步的底物、酶和副产物都写了。<b>他问「trpC 干什么」时照图注说：trpC 的产物催化两步。</b>',
  src2:'Biochemie, Obr. 4.48, p104 · 300 dpi 原图裁切，未修改'},

 {k:'画',
  src:'img/p105_obr449_attenuation.jpg',
  t:'衰减的两种情形 —— 而且这张图是你打正文的那把刀（书 Obr. 4.49）',
  cap:'<b>两格，标题就是两种情形：(a) High tryptophan · (b) Low tryptophan。全部标注都是英文。</b>'
    + '<br><br><b>★ 先看一个标注，它是这张卡上最值钱的一根指头。</b>(a) 里写着'
    + '<b>“Ribosome transcribing the leader peptide mRNA”</b>，而 p104 正文说先导序列'
    + '「转录但<b>不翻译</b>成肽」。<b>书自己跟自己矛盾，而机制站在图这一边。</b>'
    + '被问到就把图指给他：“The text says the leader is not translated. The figure on the next page shows a <b>ribosome</b> on it, and the mechanism needs that ribosome.”'
    + '<br><br><b>画的顺序（两格，每格四笔）</b>：'
    + '<br><b>(a) Trp 够用</b>：① 一条横的 mRNA，上面标 <b>1 2 3 4</b> 四段；'
    + '② 把一个核糖体画在 <b>2</b> 上面（它跑到了 2）；'
    + '③ 剩下的 <b>3 和 4 配成一个发夹</b>，标 <b>transcription terminator</b>；'
    + '④ 右边画一个掉下来的圆，标 <b>terminated RNA polymerase</b>。'
    + '<br><b>(b) Trp 不够</b>：① 同一条；② 核糖体<b>卡在 1</b>（标 stalled at tandem Trp codons）；'
    + '③ <b>2 和 3 配成发夹</b>，标 <b>antiterminator</b>；④ 4 落单，转录继续，右边画 RNA 聚合酶往前走。'
    + '<br><br><b>边画边说的四句</b>：“The leader mRNA has <b>four</b> segments that can pair in two different ways, and only one way at a time.”'
    + '<br>“When tryptophan is plentiful there is plenty of charged <b>tryptophanyl-tRNA</b>. '
    + 'The ribosome runs straight through segment one into segment two, so two cannot pair with three. '
    + 'Then <b>three pairs with four</b>, and that hairpin is the <b>terminator</b>. Transcription stops.”'
    + '<br>“When tryptophan is scarce the ribosome <b>stalls</b> on the two tryptophan codons in segment one. '
    + 'Segment two is left free, <b>two pairs with three</b>, the three-four hairpin cannot form, and the polymerase reads on through the whole operon.”'
    + '<br>“So the cell is reading its own <b>translation speed</b> as the signal, not the amino acid itself.”'
    + '<br><br>⚠ <b>为什么只有原核能这么干</b>：图里核糖体坐在<b>还在被转录的</b> mRNA 上。'
    + '没有核膜，转录和翻译在同一个地方同时发生，衰减才成立。<b>真核生物做不到，这一句要主动说。</b>',
  src2:'Biochemie, Obr. 4.49, p105 · 250 dpi 原图裁切，未修改'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is an operon?',
  ez:'“An operon is a group of genes. They code one group of proteins. They are arranged to be transcribed together. They run from one promoter. They sit under one operator. And they give one m R N A. There are four parts. The promoter. The operator. The structural genes. And beside them the regulator gene. Its product is the repressor. The repressor binds the operator.”',
  ezcn:'<b>操纵子 ＝ 一组编码一组蛋白的基因，排布成「被一起转录」的样子</b>：<b>从一个启动子出发、在同一个操纵基因管辖下、给出一条 mRNA</b>。<b>四个部件：启动子 · 操纵基因 · 结构基因 · 以及旁边的调节基因</b>（<b>它的产物是阻遏蛋白，结合操纵基因</b>）。',
 mean:'<b>他真正会说的短句。</b>答案自带结构：定义 → 四个部件 → 两个例子 → 逻辑。说完停，让他挑 lac 还是 trp。',
 say:'“An operon is a group of genes coding the synthesis of one group of proteins, arranged so that they are transcribed together. They run from one promoter, under one operator, into one mRNA. Four parts: promoter, operator, structural genes, and beside them the regulator gene whose product, the repressor, binds the operator. Two classic examples in E. coli. The lac operon is inducible, off until lactose turns it on. The trp operon is repressible, on until tryptophan turns it off. The logic is economy: a catabolic pathway is induced by its substrate, an anabolic one repressed by its product.”'},

{q:'How does the lac operon work?',
  ez:'“It is off by default. The lac repressor is the product of lac I. It sits on the operator. The operator overlaps the promoter. So R N A polymerase cannot start. Then lactose comes in. The permease brings it in. A derivative of it binds the repressor. That derivative is allolactose. The repressor and inducer complex comes off the operator. And the three genes are transcribed.”',
  ezcn:'<b>默认是关着的。</b><b>lacI 的产物 lac 阻遏蛋白坐在操纵基因上，而操纵基因跟启动子重叠，所以 RNA 聚合酶起始不了。</b><b>随后乳糖由透过酶运进来，它的一个衍生物（别乳糖）结合阻遏蛋白；「阻遏蛋白–诱导物」复合物从操纵基因上下来，三个基因就被转录了。</b>',
 mean:'卷面里的 <b>Lac</b>。一句默认状态、一句开关、一句产物。',
 say:'“Off by default: the lac repressor, the product of lacI, sits on the operator, which overlaps the promoter, so RNA polymerase cannot start. Lactose comes in through the permease, and a derivative of it binds the repressor. That derivative is generally allolactose. The repressor-inducer complex comes off the operator, and the three genes are transcribed into one lac mRNA. The lacZ product is β-galactosidase, which splits lactose into galactose and glucose. The lacY product is the permease, and the lacA product a transacetylase. The textbook calls the operator-repressor-inducer system a molecular switch. Generally there is also a positive layer, cAMP-CAP, and it only helps when glucose is absent.”'},

{q:'How does the trp operon work?',
  ez:'“It makes the enzymes of tryptophan synthesis. So it is on by default. Its own product turns it off. There are five genes. They run from trp E to trp A. There are two layers of control. The first is a trp repressor. It binds the operator only with tryptophan bound. Tryptophan is the corepressor there. The second layer is attenuation. The textbook describes that one. A leader region decides whether polymerase continues.”',
  ezcn:'<b>它造的是合成色氨酸的那些酶，所以默认是开着的，由它自己的产物把它关掉。</b><b>五个基因，trpE 到 trpA。</b><b>两层控制：① trp 阻遏蛋白，只有在结合了色氨酸（辅阻遏物）之后才结合操纵基因；② 衰减——书讲的是这一层，由前导区决定聚合酶要不要继续往下走。</b>',
 mean:'卷面里的 <b>Trp</b>。两层，先说哪层是书的。',
 say:'“It makes the enzymes of tryptophan synthesis, so it is on by default and turned off by its product. That is five genes, trpE to trpA, and three enzymes from chorismate. Two layers. Generally, a trp repressor that binds the operator only with tryptophan bound as corepressor. And the layer the textbook describes: attenuation. A 162-nucleotide leader before the first gene encodes a short peptide with two tryptophan codons in a row. With plenty of tryptophan the ribosome reads through, covers segment 2, the 3–4 terminator hairpin forms and polymerase stops before the genes. With little tryptophan the ribosome stalls at the Trp codons, 2-3 forms instead, 3-4 cannot, and polymerase reads through.”'},

{q:'What is attenuation?',
  ez:'“Attenuation is a control of transcription. It acts after initiation. It acts in the leader region. That region lies before the first structural gene. One thing decides whether polymerase continues. It is which hairpin the leader R N A folds into. And one thing decides that. It is how fast a ribosome translates the leader peptide. In the trp operon that peptide has two tryptophan codons.”',
  ezcn:'<b>衰减 ＝ 一种在起始之后才起作用的转录控制，作用在第一个结构基因之前的「前导区」上。</b><b>聚合酶要不要继续往下走，取决于前导 RNA 折成哪一个发夹；而那又取决于核糖体翻译前导肽的速度有多快。</b><b>trp 操纵子里，那条前导肽上有两个色氨酸密码子。</b>',
 mean:'<b>核心词正面定义</b>。先说它是什么（转录开始后、在 leader 里决定停不停），再说机制。',
 say:'“Attenuation is a control of transcription that acts after initiation, in the leader region before the first structural gene. Whether RNA polymerase continues into the genes is decided by which hairpin the leader RNA folds into, and that is decided by how fast a ribosome translates the leader peptide. In the trp operon the leader peptide has two tryptophan codons in a row. With tryptophan available the ribosome moves on and the terminator hairpin, 3-4, forms. Without it the ribosome stalls there, the antiterminator 2-3 forms, and transcription goes on. It is a second control on top of repression, and it exists only where translation is coupled to transcription — in bacteria.”'},

{q:'What is the difference between the lac and the trp operon?',
  ez:'“They differ in direction. Lac is catabolic. It uses lactose. Trp is anabolic. It makes tryptophan. They differ in default state. Lac is off. Trp is on. They differ in the small molecule. In lac a derivative of the substrate is an inducer. It pulls the repressor off. In trp the product is a corepressor. It puts the repressor on. And they differ in layers. Trp adds attenuation.”',
  ezcn:'<b>方向不同</b>：<b>lac 是分解代谢的（用乳糖），trp 是合成代谢的（造色氨酸）</b>。<b>默认状态不同</b>：<b>lac 默认关，trp 默认开</b>。<b>小分子的作用不同</b>：<b>lac 里底物的衍生物是诱导物，把阻遏蛋白拉下来；trp 里产物是辅阻遏物，把阻遏蛋白按上去</b>。<b>层数不同</b>：<b>trp 多一层衰减。</b>',
 mean:'比较题。<b>一句一个维度</b>：方向、默认、小分子干什么、几层。',
 say:'“Direction: lac is catabolic, using lactose, and trp is anabolic, making tryptophan. Default: lac is off, trp is on. The small molecule: in lac the substrate’s derivative is an inducer that pulls the repressor off the operator. In trp, generally, the product is a corepressor that puts the repressor on the operator. Layers: lac has repression plus a positive cAMP-CAP layer. Trp has repression plus attenuation, a control by a stalling ribosome. Same switch, wired the opposite way, because a catabolic pathway should run when its substrate is there and an anabolic one should stop when its product is.”'},

{q:'What is a repressor?',
  ez:'“A repressor is a protein. It is the product of a regulator gene. It binds the operator D N A. So it prevents transcription of the operon. The textbook’s words are precise. It is a diffusible negative regulatory protein. A small molecule sets its activity. An inducer takes it off the D N A. A corepressor puts it on.”',
  ezcn:'<b>阻遏蛋白 ＝ 调节基因的产物，一个结合操纵基因 DNA、从而阻止操纵子被转录的蛋白。</b><b>书的原话是「可扩散的负调控蛋白」。</b><b>它的活性由一个小分子设定：诱导物把它从 DNA 上拿下来，辅阻遏物把它按上去。</b>',
 mean:'正面定义，一句。<b>蛋白，结合 DNA。</b>',
 say:'“A repressor is a protein, the product of a regulator gene, that binds the operator DNA and so prevents RNA polymerase from transcribing the operon. The textbook’s words are a diffusible, negative regulatory protein. Its activity is set by a small molecule: an inducer takes it off the DNA, a corepressor puts it on.”'},

{q:'Why does E. coli use glucose before lactose?',
  ez:'“Because the lac operon needs two conditions. Lactose must be present. That takes the repressor off. And glucose must be absent. That lets it be transcribed strongly. Low glucose raises cyclic A M P. Cyclic A M P then binds a protein. That is the catabolite activator protein. The complex binds beside the lac promoter. It helps R N A polymerase bind. That is positive control.”',
  ezcn:'因为 <b>lac 操纵子需要两个条件同时成立：有乳糖（把阻遏蛋白拿下来）和没有葡萄糖（让它被强转录）</b>。<b>葡萄糖低时 cAMP 升高，cAMP 结合分解代谢物激活蛋白 CAP；这个复合物结合在 lac 启动子旁边，帮助 RNA 聚合酶结合——那是正控制。</b>', odd:1,
 mean:'问的是 <b>catabolite repression</b>——书里没有，说 general。',
 say:'“Because the lac operon needs two conditions, generally speaking: lactose present, to take the repressor off, and glucose absent, to let it be transcribed strongly. Low glucose raises cyclic AMP, and cAMP binds the catabolite activator protein, CAP. The cAMP-CAP complex binds beside the lac promoter and helps RNA polymerase bind, which is positive control. With glucose around, cAMP is low, that help is missing, and the operon runs only weakly even with lactose present. So the cell finishes the glucose first, then switches — the two-phase growth curve is called diauxie. The textbook describes positive control in exactly this shape but does not name CAP.”'},

{q:'Why do you add IPTG in the lab?',
  ez:'“Because I P T G is a gratuitous inducer. It binds the lac repressor. It binds it the way allolactose does. So it takes the repressor off the operator. But the cell cannot hydrolyse it. So its concentration stays constant. And the operon stays on. Lactose would be different. The beta galactosidase it induces would consume it. So the signal would fade.”',
  ezcn:'因为 <b>IPTG 是一个「无偿诱导物」</b>：<b>它像别乳糖一样结合 lac 阻遏蛋白、把它从操纵基因上拿下来，但细胞水解不了它</b>——<b>所以它的浓度恒定，操纵子一直开着</b>。<b>换成乳糖就不行：它诱导出来的 β-半乳糖苷酶会把它消耗掉，信号就淡了。</b>', odd:1,
 mean:'她的主场。<b>先答机制，再答为什么不用乳糖。</b>',
 say:'“Because IPTG, isopropyl β-D-thiogalactoside, is a gratuitous inducer. It binds the lac repressor the way allolactose does and takes it off the operator, but the cell cannot hydrolyse it, so its concentration stays constant and the operon stays on. Lactose would be consumed by the β-galactosidase it induces, so the signal would fade. In my expression strain the target gene sits behind a T7 promoter with a lac operator, and the T7 RNA polymerase itself is behind a lac promoter. So one addition of IPTG opens both locks.”'},

{q:'Why can a baby digest milk — and so can E. coli?',
  ez:'“Because both have a beta galactosidase. Lactose is milk sugar. It is galactose linked beta one to four to glucose. A beta galactosidase is the hydrolase for that bond. The textbook calls lactose the most important sugar in milk. That holds for all mammals. In the infant the enzyme is lactase. It sits in the gut lining. In E. coli it is the lac Z product.”',
  ezcn:'因为<b>两者都有 β-半乳糖苷酶</b>。<b>乳糖是乳汁里的糖：半乳糖 β-1,4 连着葡萄糖，而 β-半乳糖苷酶正是切这根键的水解酶。</b><b>书说乳糖是所有哺乳动物乳汁里最重要的糖。</b><b>婴儿体内那个酶是肠壁上的乳糖酶；大肠杆菌里是 lacZ 的产物。</b>', odd:1,
 mean:'问的是 <b>β-galactosidase</b>：乳糖这个底物，两个不同的酶。',
 say:'“Because both have a β-galactosidase. Lactose is milk sugar, galactose linked β-1,4 to glucose, and a β-galactosidase is the hydrolase that cuts that bond. The textbook calls lactose the most important sugar in the milk of all mammals. In the infant the enzyme is lactase in the gut lining. In E. coli it is the lacZ product, made only when lactose is present. Generally, most adult humans switch lactase off after weaning, and that is lactose intolerance. E. coli switches its enzyme on and off by the operon every time. The galactose half then enters glycolysis through galactokinase, the uridylyltransferase and UDP-glucose 4-epimerase — the textbook’s most important pathway of galactose.”'},

{q:'Why does a bacterium stop making tryptophan when you feed it tryptophan?',
  ez:'“Because tryptophan shuts its own synthesis off. It does it twice. First tryptophan binds the trp repressor. It acts as corepressor there. Only then can the repressor sit on the operator. Transcription then stops. Second there is attenuation. With tryptophan available the ribosome does not stall. It translates the leader peptide straight through. It passes its two tryptophan codons.”',
  ezcn:'因为<b>色氨酸是关掉它自己合成的那个信号，而且关了两次</b>。<b>① 色氨酸作为辅阻遏物结合 trp 阻遏蛋白——只有这样阻遏蛋白才能坐上操纵基因，转录才停</b>。<b>② 衰减：有色氨酸时，翻译前导肽的核糖体不会在那两个色氨酸密码子上卡住，一路读过去。</b>', odd:1,
 mean:'问的是 <b>trp 操纵子的两层</b>，从生理那头问进来。',
 say:'“Because tryptophan is the signal that shuts its own synthesis off — twice. Generally, tryptophan binds the trp repressor as a corepressor, and only then can the repressor sit on the operator and stop transcription. And by attenuation: with tryptophan available the ribosome translating the leader peptide does not stall at its two tryptophan codons, the terminator hairpin forms, and polymerase stops before the enzyme genes. The reason is economy — five polypeptides and a pathway from chorismate are expensive to make when the product is already there.”'},

{q:'What is blue–white screening?',
  ez:'“It is a cloning trick built on lac Z. The vector carries a small fragment. It is the N terminal alpha peptide of beta galactosidase. It sits under the lac promoter. The host carries the rest. Together they make an active enzyme. That is alpha complementation. An active enzyme cleaves X gal. X gal is a synthetic galactoside. The product is blue. So the colony is blue.”',
  ezcn:'<b>蓝白斑筛选 ＝ 建立在 lacZ 上的一个克隆技巧。</b><b>载体带着 β-半乳糖苷酶 N 端那一小段（α 肽），装在 lac 启动子下面；宿主带着其余部分。</b><b>两者凑起来才是有活性的酶——这叫 α 互补。</b><b>有活性的酶切开人工底物 X-gal，产物是蓝色的，所以菌落发蓝。</b>', odd:1,
 mean:'实验室问法，落在 lacZ 上。<b>全部 general。</b>',
 say:'“A cloning trick built on lacZ, generally. The vector carries the small N-terminal fragment of β-galactosidase, the α-peptide, under the lac promoter, and the host carries the rest. Together they make an active enzyme — α-complementation. If the enzyme is active it cleaves X-gal, a synthetic galactoside, into a blue product, so the colony is blue. The multiple cloning site sits inside the α-fragment: an insert disrupts it, no active enzyme, no colour — white colonies carry the insert. IPTG is added to induce the lac promoter. It is the lac operon’s own enzyme used as a reporter.”'},

{q:'Why is this considered a founding experiment of molecular biology?',
  ez:'“Because it was the first mechanism of gene regulation. It showed that a gene is not simply on. Its expression is controlled. And the controller is a protein. That protein binds a specific site on the D N A. The protein is the repressor. The site is the operator. A small molecule decides whether it binds. It also introduced the idea of messenger R N A.”',
  ezcn:'因为<b>它是第一个被弄清楚的基因调控机制</b>。<b>它表明：基因不是简单地「开着」，它的表达是受控的；而控制者是一个蛋白，这个蛋白结合 DNA 上一个特定的位点</b>——<b>蛋白是阻遏蛋白，位点是操纵基因，而一个小分子决定它结不结合。</b><b>它还顺带引入了「信使 RNA」这个概念。</b>', odd:1,
 mean:'历史问法。<b>它第一次证明了基因的表达本身受控，而且控制者是一个蛋白结合一段 DNA。</b>',
 say:'“Because it was the first mechanism of gene regulation. It showed that a gene is not simply on, that its expression is controlled, and that the controller is a protein binding a specific site on the DNA. The protein is the repressor, the site is the operator, and a small molecule decides whether it binds. It also introduced the idea of messenger RNA as a short-lived intermediate. Jacob and Monod are the names the textbook gives, and generally that was 1961. The textbook still calls the mechanism hypothetical and partly verified, because the book is old. The repressor has since been isolated and its structure solved.”'},

{q:'What is a promoter?',
  ez:'“A promoter is a D N A sequence. R N A polymerase binds there to begin transcription. It lies near the start nucleotide. The sigma subunit of the holoenzyme recognises it. In the lac operon it overlaps the operator. That is why a repressor there blocks initiation. The two conserved elements sit upstream. They are at minus ten and minus thirty five.”',
  ezcn:'<b>启动子 ＝ RNA 聚合酶结合、开始转录的那段 DNA</b>，<b>位于起始核苷酸附近，由全酶的 σ 亚基识别</b>。<b>在 lac 操纵子里它跟操纵基因重叠——这就是阻遏蛋白坐在那里就能挡住起始的原因。</b><b>两个保守元件在上游的 −10 和 −35 处。</b>',
 mean:'相邻概念，正面定义一句。',
 say:'“A promoter is the DNA sequence at which RNA polymerase binds to begin transcription, located near the start nucleotide and recognised by the σ subunit of the holoenzyme. In the lac operon it overlaps the operator, which is why a repressor on the operator blocks initiation. Generally the two conserved elements are at −10 and −35 from the start.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这题名词密度极高，而且每个都能单独拎出来问。先说它是什么，再说判据。', items:[
{r:'高', q:'What is an operator?',
    ez:'“The operator is a D N A sequence. It sits in the control region of an operon. It lies next to the promoter and overlaps it. The repressor binds there. Its binding decides one thing. It decides whether polymerase can transcribe the structural genes. In lac the operator is a near palindrome. The textbook says that shape helps protein binding. The repressor has three sites in all. The primary operator O one overlaps the promoter. The other two are pseudo-operators.”',
    ezcn:'<b>操纵基因 operator 是一段 DNA</b>，在操纵子的<b>控制区</b>里，<b>紧挨着启动子并且跟它重叠</b>，<b>阻遏蛋白结合在这里</b>。<b>它结合与否决定聚合酶能不能转录结构基因。</b>lac 的这一段接近<b>回文</b>，书说这种形状<b>方便蛋白结合</b>。阻遏蛋白一共有三个位点：<b>主操纵基因 O₁ 跟启动子重叠</b>，另外两个是<b>假操纵基因</b>。',
 en:'“The operator is a DNA sequence in the control region of an operon, next to and overlapping the promoter, to which the repressor binds. Its binding decides whether RNA polymerase can transcribe the structural genes. In lac it is a near-palindrome, and the textbook says that facilitates protein binding. The repressor has three sites: the primary operator O₁, which overlaps the promoter, and two pseudo-operators.”',
 cn:'p103–p104。「跟启动子重叠」p089 也说了，那一句是 <i>the promoter overlaps with the lac operator</i>。O₂ 在 lacZ 里、O₃ 在 lacI 里是通用说法，书把两个都写在 lacZ 里。<span class="pg">p103 p104 p089</span>'},
{r:'高', q:'What is the difference between a structural gene and a regulator gene?',
    ez:'“A structural gene codes a protein that does metabolism. In lac those are the three enzymes. A regulator gene codes a protein with one job only. That job is regulating transcription of other genes. In lac that protein is the repressor. The textbook draws the distinction by position too. Structural genes are inside the operon. The regulator gene sits beside it. Its product is diffusible. So it can act on any copy of the operator in the cell.”',
    ezcn:'<b>结构基因编码干代谢活儿的蛋白</b>（lac 里就是那三个酶）。<b>调节基因编码的蛋白只干一件事：调控别的基因的转录</b>（lac 里就是阻遏蛋白）。书还按位置分：<b>结构基因在操纵子里面，调节基因在旁边</b>。<b>它的产物是可扩散的，所以能作用于细胞里任何一份操纵基因。</b>',
 en:'“A structural gene codes a protein that does the cell’s metabolism — in lac the three enzymes. A regulator gene codes a protein whose only job is to regulate transcription of other genes — in lac the repressor. The textbook’s distinction: structural genes are inside the operon, the regulator gene is beside it, and its product is diffusible, so it can act on any copy of the operator in the cell.”',
 cn:'p103–p104 原话，那两处是 <i>structural genes … take part in the general metabolism of the cell</i>；<i>regulator gene … of a diffusible product</i>。<span class="pg">p103 p104</span>'},
{r:'高', q:'What is an inducer? And a corepressor?',
    ez:'“An inducer is a small molecule. It binds the repressor. It then blocks the repressor from binding D N A. So the operon is transcribed. The textbook calls inducers positive effectors. It says the inducer is usually the substrate of the enzyme. It can also be a derivative of the substrate. In lac the inducer is allolactose. In the lab we use I P T G. A corepressor is the opposite. It binds the repressor and enables it to bind D N A. For trp that is tryptophan. Both act on the repressor. Neither acts on the D N A.”',
    ezcn:'<b>诱导物 inducer ＝ 一个小分子，结合阻遏蛋白，让它结合不了 DNA</b>，于是操纵子被转录。书把诱导物叫做<b>正效应物</b>，并说<b>诱导物通常就是酶的底物或者底物的衍生物</b>。lac 里是<b>别乳糖 allolactose</b>，实验室里用 <b>IPTG</b>。<b>辅阻遏物 corepressor 正相反</b>：结合阻遏蛋白，<b>让它能够</b>结合 DNA（trp 里是<b>色氨酸</b>）。<b>两者作用的都是阻遏蛋白，都不作用于 DNA。</b>',
 en:'“An inducer is a small molecule that binds the repressor and blocks its binding to DNA, so the operon is transcribed. The textbook calls inducers positive effectors, and says the inducer is typically the substrate of the enzyme or a derivative of it. For lac that is allolactose, generally, and IPTG in the lab. A corepressor is a small molecule that binds the repressor and enables its binding to DNA — generally tryptophan for trp. Both act on the repressor, never on the DNA.”',
 cn:'p104。「正效应物」说的是效果，不是「正控制」——正控制是激活蛋白。<b>这个词的两个用法不要混。</b><span class="pg">p104</span>'},
{r:'高', q:'What does polycistronic mean?',
    ez:'“Polycistronic means one m R N A carries several coding sequences. Each one has its own start and stop. The lac m R N A carries three. They are beta galactosidase, permease and transacetylase. The word itself is Lehninger’s. The textbook shows it in a figure instead. One lac m R N A has three arrows to three products. It also says the size of an m R N A depends on how many chains it determines. In a eukaryote each m R N A is usually monocistronic.”',
    ezcn:'<b>多顺反子 ＝ 一条 mRNA 上带着好几个蛋白的编码序列</b>，<b>每一段有自己的起始和终止</b>。lac 的那条 mRNA 带三个：<b>β-半乳糖苷酶、透过酶、转乙酰酶</b>。<b>polycistronic 这个词是 Lehninger 的说法</b>，捷克书用图表示：一条 lac mRNA 画三个箭头指向三个产物，并说 <b>mRNA 的长度取决于它决定几条肽链</b>。<b>真核里通常一条 mRNA 只编一个蛋白（单顺反子）。</b>',
 en:'“One mRNA carrying the coding sequences for several proteins, each with its own start and stop — the lac mRNA carries β-galactosidase, permease and transacetylase. The word is Lehninger’s. The textbook shows it in its figure, one lac mRNA with three arrows to the three products, and says that the size of an mRNA depends on the number of peptide chains it determines. In a eukaryote each mRNA is, generally, monocistronic.”',
 cn:'p086 ＋ figure 4.47。<span class="pg">p086 p103</span>'},
{r:'高', q:'What does constitutive mean?',
    ez:'“Constitutive means made all the time. It is made at a constant level. Inducer and corepressor do not change it. The lac repressor is made constitutively from lac I. A constitutive mutant is a different thing. It makes the operon’s enzymes all the time. Either the repressor is broken. Or the operator cannot bind it. This wording is general. The textbook does not use the word.”',
    ezcn:'<b>组成型 constitutive ＝ 一直在做，量恒定，不受诱导物或辅阻遏物影响。</b>lac 的阻遏蛋白就是由 <b>lacI 组成型表达</b>的。<b>组成型突变体是另一回事</b>：它<b>一直在做操纵子的那几个酶</b>——要么<b>阻遏蛋白坏了</b>，要么<b>操纵基因结合不住它</b>。⚠ <b>这个词是通用说法，捷克书没有用它。</b>',
 en:'“Made all the time, at a constant level, regardless of inducer or corepressor. The lac repressor is made constitutively from lacI. And a constitutive mutant is one that makes the operon’s enzymes all the time — because the repressor is broken, or because the operator cannot bind it. That is general wording, and the textbook does not use the word.”',
 cn:'「constitutive」这个词全书 0 命中。<b>但没有这个词，Jacob–Monod 的发现就讲不出来</b>，所以要备。'},
{r:'中', q:'What is a leader sequence?',
  ez:'“A leader sequence is the stretch of messenger R N A before the first structural gene. It starts at the transcription start. In the trp operon it is trp L. It is one hundred and sixty two nucleotides long. It carries the attenuator near its end. And it encodes the short leader peptide with the tandem tryptophan codons. The textbook’s text says it is not translated. Its own figure shows a ribosome translating it.”',
  ezcn:'<b>前导序列 ＝ 从转录起点到第一个结构基因之间那一段 mRNA。</b><b>trp 操纵子里它叫 trpL，162 个核苷酸，末端附近带着衰减子，并编码那条带串联色氨酸密码子的短前导肽。</b>⚠ <b>书的正文说它「不被翻译」，可它自己的图上画着一个核糖体正在翻译前导肽，而且它的翻译起始位点清单里就有 trp leader——衰减机制正是需要那次翻译。</b>',
 en:'“The stretch of mRNA between the transcription start and the first structural gene. In the trp operon it is trpL, 162 nucleotides, it carries the attenuator near its end, and it encodes the short leader peptide with the tandem tryptophan codons. The textbook’s text says it is not translated. Its figure shows a ribosome translating the leader peptide, and its list of translation start sites includes the trp leader — attenuation needs that translation.”',
 cn:'p104 正文 vs p105 图、p097 figure 4.40。<b>用图打正文。</b><span class="pg">p104 p105 p097</span>'},
{r:'中', q:'What is a hairpin?',
  ez:'“A hairpin is single stranded R N A folded back on itself. Two self complementary segments pair into a short double helix. A loop sits at the end. The textbook uses the word for the terminator. A G plus C rich palindrome in the D N A gives a self complementary transcript. That folds into a stable hairpin. In the trp leader segments three and four make the terminator hairpin. Segments two and three make the antiterminator.”',
  ezcn:'<b>发夹 ＝ 一段单链 RNA 自己折回来，两段自互补的序列配成一小截双螺旋，末端留一个环。</b><b>书用这个词讲终止子：DNA 上一段富 G＋C 的回文给出自互补的转录本，折成一个稳定的发夹。</b><b>trp 前导区里，第 3 和第 4 段形成终止子发夹，第 2 和第 3 段形成抗终止子。</b>',
 en:'“A stretch of single-stranded RNA that folds back on itself so that two self-complementary segments pair into a short double helix with a loop at the end. The textbook uses the word for the terminator: a G+C-rich palindrome in the DNA gives a self-complementary transcript, which folds into a stable hairpin. In the trp leader, segments 3 and 4 make the terminator hairpin, segments 2 and 3 the antiterminator.”',
 cn:'p090 ＋ p105。<span class="pg">p090 p105</span>'},
{r:'中', q:'What is the σ factor?',
  ez:'“Sigma is the subunit that recognises the promoter. It belongs to the bacterial R N A polymerase holoenzyme. That holoenzyme is alpha two beta beta prime sigma. Sigma finds the promoter. Initiation then begins. Short R N As up to nine nucleotides are made. Then sigma dissociates. It can bind another core enzyme afterwards. The core is alpha two beta beta prime. The core does the elongation.”',
  ezcn:'<b>σ 因子 ＝ 细菌 RNA 聚合酶全酶里负责识别启动子的那个亚基。</b><b>全酶是 α₂ββ′σ：σ 找到启动子，起始开始、合成出最长九个核苷酸的短 RNA 之后，σ 就解离下来，可以再去结合另一个核心酶；核心酶 α₂ββ′ 负责延长。</b>',
 en:'“The subunit of the bacterial RNA polymerase holoenzyme that recognises the promoter. The holoenzyme is α₂ββ′σ. The σ subunit finds the promoter and, once initiation has begun and short RNAs up to nine nucleotides have been made, it dissociates and can bind another core enzyme. The core, α₂ββ′, elongates.”',
 cn:'p088–p089 ＋ p104。<span class="pg">p088 p089 p104</span>'},
{r:'中', q:'What is a terminator?',
  ez:'“A terminator is a D N A sequence at which transcription ends. The textbook gives the intrinsic kind two features. The first is a G plus C rich palindrome. Its transcript folds into a stable hairpin. The second is a run of four to ten A T pairs after it. That is read into oligo U. The weak pairing of that tail lets the transcript go. Termination is spontaneous there. Other sites need the protein rho.”',
  ezcn:'<b>终止子 ＝ 转录在那里结束的一段 DNA。</b><b>书给了内在型终止子两个特征：① 一段富 G＋C 的回文，它的转录本折成稳定的发夹；② 紧随其后的 4–10 个 A-T 对，转录成寡聚 U——这条尾巴跟模板配得很弱，转录本就松开了。</b><b>在那里终止是自发的；另一些位点要靠 ρ 蛋白，而它解开 RNA-DNA 杂合体是要花 NTP 的。</b>',
 en:'“A DNA sequence at which transcription ends. The textbook gives the intrinsic kind two features. The first is a G+C-rich palindrome whose transcript folds into a stable hairpin. The second is a run of four to ten A-T pairs after it, read into oligo-U, and the weak pairing of that tail with the template lets the transcript go. Termination is spontaneous there. Other sites need the protein ρ, and it unwinds the RNA-DNA hybrid at the cost of NTPs.”',
 cn:'p090。<span class="pg">p090</span>'}
]},

{g:'为什么类', gn:'给了结论没给理由的地方。', items:[
{r:'高', q:'Why does the repressor bind the DNA rather than the polymerase?',
    ez:'“Because the operator overlaps the promoter. So a protein sitting on the operator occupies the place polymerase needs. No interaction with the polymerase is required. And the same repressor works whatever polymerase arrives. The textbook figure draws exactly that. The repressor is on O and polymerase is kept off P. For lac there is one more point. The repressor can hold two operators at once. That loops the D N A and makes the block tighter.”',
    ezcn:'因为<b>操纵基因跟启动子重叠</b>，<b>所以坐在操纵基因上的蛋白，物理上就占住了聚合酶要用的位置</b>。<b>不需要跟聚合酶有任何相互作用</b>，而且<b>来的是哪种聚合酶都一样挡得住</b>。书的图画的就是这个：阻遏蛋白在 O 上，聚合酶被挡在 P 外。lac 还多一条：<b>阻遏蛋白能同时抓住两个操纵基因，把 DNA 拉成一个环，封得更死。</b>',
 en:'“Because the operator overlaps the promoter, so a protein sitting on the operator physically occupies the place polymerase needs. No interaction with the polymerase is required, and the same repressor works whatever polymerase comes. The textbook’s figure draws exactly that: repressor on O, polymerase kept off P. Generally, for lac the repressor can also loop the DNA by holding two operators at once, which makes the block tighter.”',
 cn:'p089 / p104 的「重叠」是理由。环化是 general。<span class="pg">p089 p104</span>'},
{r:'高', q:'Why does the trp operon need two layers?',
    ez:'“Because the two layers read different things. Repression reads the amount of free tryptophan. Attenuation reads the amount of charged tRNA for tryptophan. That second quantity is what actually matters for making protein. Repression gives most of the range. Attenuation fine tunes it several fold on top. Together they cover more range than either alone. Attenuation is also fast. It acts on every transcript already started. It does not wait for a repressor to find the operator.”',
    ezcn:'因为<b>两层读的是不同的量</b>：<b>阻遏读的是游离色氨酸的多少</b>，<b>衰减读的是上了色氨酸的 tRNA 有多少</b>——<b>后者才是造蛋白真正要用的东西</b>。<b>阻遏提供大部分调节幅度，衰减在上面再微调几倍</b>，合起来比任何一层单干的范围都宽。<b>而且衰减快</b>：它作用在<b>每一条已经开始的转录本</b>上，<b>不用等阻遏蛋白去找操纵基因</b>。',
 en:'“Because they answer different questions at different sensitivities. Repression reads the amount of free tryptophan. Attenuation reads the amount of charged tRNA-Trp — the thing that actually matters for making protein. Generally, repression gives most of the range and attenuation fine-tunes it several-fold on top. Together they cover a wider range than either alone. And attenuation is fast: it acts on every transcript already started, without waiting for a repressor to find the operator.”',
 cn:'两层的分工书没有明说；书只给了衰减。「几倍」那个数是 Lehninger 的量级，<b>不要报具体倍数</b>——他要数就说 general 加判据。'},
{r:'高', q:'Why can’t a eukaryote use attenuation?',
    ez:'“Because the mechanism needs a ribosome on the R N A. It needs it while polymerase is still making that R N A. The position of the ribosome decides which hairpin forms. That must happen before polymerase reaches the terminator. In a eukaryote transcription happens in the nucleus. Translation happens in the cytosol. In between the transcript is capped, spliced and polyadenylated. So no ribosome can reach the nascent R N A in time. The textbook shows the coupling in a figure.”',
    ezcn:'因为<b>这个机制需要在聚合酶还在造 RNA 的时候，核糖体就已经在这条 RNA 上了</b>——<b>核糖体的位置决定哪个发夹形成</b>，<b>而且必须赶在聚合酶到达终止子之前</b>。<b>真核里转录在核内、翻译在胞质</b>，中间还要<b>加帽、剪接、加尾</b>，<b>所以没有核糖体来得及碰到新生的 RNA</b>。书用一张图画了这个偶联。',
 en:'“Because the mechanism needs a ribosome on the RNA while polymerase is still making it — the ribosome’s position decides which hairpin forms before polymerase reaches the terminator. In a eukaryote transcription is in the nucleus and translation in the cytosol, and between them the transcript is capped, spliced and polyadenylated, so no ribosome can reach the nascent RNA in time. The textbook shows the coupling in its figure. The sentence itself is general.”',
 cn:'p105 图 ＋ p106–p107（帽、内含子、poly A）。<span class="pg">p105 p106 p107</span>'},
{r:'中', q:'Why is the operator a palindrome?',
  ez:'“Because the repressor is a symmetric protein. Generally it is a dimer. In lac it is a tetramer of identical subunits. A symmetric protein binds a symmetric site. Each subunit reads one half of the sequence. The textbook says the near palindromic structure facilitates protein binding. The symmetry argument itself is general.”',
  ezcn:'因为<b>阻遏蛋白是一个对称的蛋白</b>（<b>通常是二聚体，lac 里是四个相同亚基的四聚体</b>）。<b>对称的蛋白结合对称的位点：每个亚基读序列的一半。</b><b>书说这种近乎回文的结构「有利于蛋白结合」；而对称性这条论证本身是通用的。</b>',
 en:'“Because the repressor is a symmetric protein, generally a dimer, or in lac a tetramer of identical subunits. A symmetric protein binds a symmetric site: each subunit reads one half of the sequence. The textbook says the near-palindromic structure facilitates protein binding. The symmetry argument is general.”',
 cn:'p104。<span class="pg">p104</span>'},
{r:'高', q:'How much does induction raise expression? Give me a number.',
    ez:'“I would not quote a number from memory. The textbook gives none. The criterion is a ratio of two binding affinities. One is how much tighter the repressor holds the operator than random D N A. The other is how much the inducer weakens that hold. The induced level is of the order of a thousand times the repressed one. The exact value depends on strain and conditions. What I can say for certain is the shape. It is a binding equilibrium. So it is graded, not all or none.”',
    ezcn:'<b>我不会凭记忆报一个数，书上也没有给。</b><b>判据是两个结合亲和力的比值</b>：阻遏蛋白抓操纵基因比抓随机 DNA<b>紧多少</b>，以及诱导物把这个抓握<b>削弱多少</b>。<b>诱导后的水平大致是阻遏时的一千倍量级</b>，<b>具体数字看菌株和条件</b>。<b>能肯定的是形状：这是一个结合平衡，所以它是渐变的，不是全有全无。</b>',
 en:'“I would not quote a number from memory — the textbook gives none. The criterion is the ratio of two binding affinities: how much tighter the repressor holds the operator than random DNA, and how much the inducer weakens that. Generally the induced level is of the order of a thousand times the repressed one, and the exact value depends on strain and conditions. What I can say is the shape: it is a binding equilibrium, so it is graded, not all-or-none.”',
 cn:'<b>LOGIC §11 的场景。</b>先说没有书上的数、给判据、再给通用量级带 “of the order of”。「约千倍」是通用教材的量级，⚠ 待核具体值，不要说成精确数。'}
]},

{g:'怎么发现的', gn:'书点了名，没给年份和实验。年份和实验全是 general。', items:[
{r:'高', q:'How did Jacob and Monod work it out?',
    ez:'“From genetics, not from biochemistry. The textbook says the model came from experiments on induction of the lactose enzymes. The key mutants were constitutive ones. They made the enzymes without lactose. Two kinds behaved differently. A mutant in the regulator gene was recessive. Adding a normal lac I on a second piece of D N A restored regulation. So its product is diffusible and acts in trans. A mutant operator was dominant. It acted only on the genes next to it, in cis. So an operator is a site, not a product. That is the repressor and operator distinction.”',
    ezcn:'<b>是从遗传学做出来的，不是生化。</b>书说这个模型来自<b>乳糖酶诱导</b>的实验。关键是<b>组成型突变体</b>——没有乳糖也一直做酶。<b>两类表现不同</b>：<b>调节基因的突变是隐性的</b>，<b>在另一段 DNA 上补一份正常 lacI 就恢复调控</b>，<b>说明它的产物可扩散，在 trans 起作用</b>；<b>操纵基因的突变是显性的</b>，<b>只影响挨着它的那几个基因，在 cis 起作用</b>，<b>说明它是一个位点，不是一个产物</b>。<b>这就是阻遏蛋白和操纵基因的分界。</b>',
 en:'“From genetics, not biochemistry — the textbook says the model was derived from experiments on the induction of the lactose enzymes. The key mutants, generally, were constitutive ones, making the enzymes without lactose. Two kinds behaved differently. A mutant in the regulator gene was recessive: adding a normal copy of lacI on a second piece of DNA restored regulation, so the product is diffusible and acts in trans. A mutant operator was dominant and acted only on the genes next to it, in cis, so it is a site, not a product. That is the repressor–operator distinction, and the textbook has both halves: a diffusible product, and an operator that controls the operon of the same chromosome.”',
 cn:'书 p102 ＋ p104 的两个词，书上印的是 <i>diffusible</i> 和 <i>of the same chromosome</i>。cis / trans、lacI⁻ / Oᶜ 是 general。<span class="pg">p102 p104</span>'},
{r:'中', q:'What was the PaJaMo experiment?',
  ez:'“Generally it is Pardee and Jacob and Monod, in nineteen fifty nine. They transferred a normal lac I and lac Z by conjugation. The recipient cell lacked both. Beta galactosidase appeared at once, without inducer. Then it switched off after a while. The repressor had accumulated by then. So the regulator gene makes a diffusible product. And that product turns the operon off rather than on. That is negative control.”',
  ezcn:'⚠ <b>generally：Pardee、Jacob、Monod，1959 年。</b><b>他们用接合把正常的 lacI 和 lacZ 转进一个两者都缺的细胞里：β-半乳糖苷酶立刻出现，而且不需要诱导物；过一阵又关掉了——因为阻遏蛋白积累起来了。</b><b>这说明调节基因做出的是一个可扩散的产物，而且那个产物是把操纵子「关掉」而不是「打开」——也就是负控制。</b><b>repressor 这个词就出自这个实验。</b>',
 en:'“Generally, this is Pardee, Jacob and Monod, 1959. They transferred a normal lacI and lacZ by conjugation into a cell lacking both. The enzyme β-galactosidase appeared at once, without inducer, and then switched off after a while as the repressor accumulated. That showed the regulator gene makes a diffusible product that turns the operon off rather than something that turns it on, which is negative control. It is the experiment behind the word repressor.”',
 cn:'全 general；书里没有。年份 1959 是 standard history。'},
{r:'中', q:'Was the repressor ever seen, or is it still a hypothesis?',
  ez:'“It was isolated. Generally that was Gilbert and Müller Hill, in the sixties. Its structure has been solved since. That includes structures with operator D N A and with inducer. The textbook still calls the Jacob Monod mechanism hypothetical. It says it is only partly verified. That reflects when the book was written. Today it is one of the best characterised protein D N A systems.”',
  ezcn:'<b>它被分离出来了</b>（⚠ <b>generally：Gilbert 和 Müller-Hill，1960 年代</b>），<b>而且它跟操纵基因 DNA 以及跟诱导物结合的结构都已经解出来了。</b>⚠ <b>书至今还把 Jacob-Monod 机制称为「假说性的、只被部分验证」——那反映的是这本书写作的年代；今天它是被刻画得最清楚的蛋白–DNA 系统之一。</b>',
 en:'“It was isolated, generally by Gilbert and Müller-Hill, in the sixties, and its structure with operator DNA and with inducer has been solved. The textbook still calls the Jacob-Monod mechanism hypothetical and only partly verified, which reflects when it was written. Today it is one of the best-characterised protein-DNA systems.”',
 cn:'p102 印的是「<i>hypothetical … partly experimentally verified</i>」。⚠ 人名年份待核（1966），不逼不报。<span class="pg">p102</span>'}
]},

{g:'陷阱', gn:'这题最容易在名词的宾语上错——谁结合谁。每条一句改正。', items:[
{r:'实测', q:'Does the repressor bind the RNA polymerase?',
    ez:'“No. It binds the DNA. The site it binds is the operator. The operator overlaps the promoter. So when the repressor sits there, polymerase cannot bind. The two proteins never touch. The inducer binds the repressor. The inducer does not bind the DNA.”',
    ezcn:'<b>不，它结合的是 DNA，是操纵基因（operator）。</b>操纵基因<b>跟启动子重叠</b>，所以阻遏蛋白一坐上去，聚合酶就挂不上——<b>两个蛋白根本不用接触</b>。<b>诱导物结合的是阻遏蛋白，不是 DNA。</b>',
 en:'“No — it binds the DNA, the operator. The operator overlaps the promoter, so with the repressor there polymerase cannot bind. No contact between the two proteins is needed. The inducer, in turn, binds the repressor, not the DNA.”',
 cn:'<b>PESB 那次失分的形状</b>——把两个名字的宾语接错。宾语链：诱导物 → 阻遏物 → 操纵基因；聚合酶 → 启动子。<span class="pg">p104</span>'},
{r:'高', q:'So lactose induces the lac operon?',
    ez:'“Strictly a derivative of lactose does. The textbook says the inducer is the substrate or a derivative of it. The true inducer is allolactose. That is galactose beta one to six glucose. Beta galactosidase makes it from lactose as a side reaction. Lactose itself does not bind the repressor. In the lab we skip the sugar. We use I P T G instead.”',
    ezcn:'<b>严格说，诱导的是乳糖的一个衍生物。</b>书说诱导物是<b>底物或底物的衍生物</b>。<b>真正的诱导物是别乳糖 allolactose</b>（<b>半乳糖 β-1,6 葡萄糖</b>），<b>是 β-半乳糖苷酶从乳糖做出来的一个副反应产物</b>。<b>乳糖本身不结合阻遏蛋白。</b>实验室里<b>干脆不用糖，用 IPTG</b>。',
 en:'“Strictly, a derivative of lactose does — the textbook says the inducer is the substrate or its derivative. Generally the true inducer is allolactose, galactose β-1,6 glucose, which β-galactosidase makes from lactose as a side reaction. Lactose itself does not bind the repressor. In the lab we skip the sugar altogether and use IPTG.”',
 cn:'书的措辞留了口子，印的是 <i>the substrate … or a derivative of it</i>，所以先说书的，再说 general。<span class="pg">p104</span>'},
{r:'高', q:'Is lacI part of the lac operon?',
    ez:'“No. The textbook puts the regulator gene beside the operon. The operon is the control site P and O, plus Z, Y and A. The gene lac I has its own promoter. It is transcribed on its own. Lactose does not regulate it. The repressor is made constitutively.”',
    ezcn:'<b>不是。</b>书把调节基因放在<b>操纵子旁边</b>：<b>操纵子 ＝ 控制位点 P 和 O ＋ Z、Y、A 三个结构基因</b>。<b>lacI 有自己的启动子，自己转录，不受乳糖调控，阻遏蛋白是组成型表达的。</b>',
 en:'“No. The textbook puts the regulator gene beside the operon: the operon is the control site P and O plus Z, Y and A. The gene lacI has its own promoter and is transcribed on its own. It is not regulated by lactose, and the repressor is made constitutively.”',
 cn:'figure 4.46 的括号不罩 I。「自己的启动子」是 general。<span class="pg">p103</span>'},
{r:'高', q:'Is attenuation a kind of repression?',
    ez:'“No. The textbook says the attenuator has a function similar to the operator. Both are places where transcription can be stopped. But the mechanism is different. Repression is a protein binding D N A. That happens before initiation. Attenuation is an R N A structure. A translating ribosome decides it. That happens after initiation. No repressor protein is involved in attenuation at all.”',
    ezcn:'<b>不是。</b>书说<b>衰减子的功能跟操纵基因相似</b>——两者都是<b>能让转录停下来的地方</b>。<b>但机制完全不同</b>：<b>阻遏是蛋白结合 DNA，发生在起始之前</b>；<b>衰减是一个 RNA 结构，由正在翻译的核糖体决定，发生在起始之后</b>。<b>衰减里根本没有阻遏蛋白参与。</b>',
 en:'“No. The textbook says the attenuator has a function similar to the operator, since both are places where transcription can be stopped. But the mechanism is different. Repression is a protein binding DNA before initiation. Attenuation is an RNA structure, decided by a translating ribosome, after initiation. No repressor protein is involved in attenuation at all.”',
 cn:'p105 的「<i>a function similar to an operator</i>」是个容易滑的比喻。<span class="pg">p105</span>'},
{r:'高', q:'Do eukaryotes have operons?',
    ez:'“As a rule, no. Each eukaryotic gene usually has its own promoter. It gives a monocistronic m R N A. Regulation works mostly through activators. It works less through repressors. The textbook says only a few things about this. Regulation in multicellular eukaryotes differs. A gene may have several promoters. The regulators are non histone proteins. And the basic difference in the genes is exons and introns. A few exceptions exist. Some nematode genes are transcribed together.”',
    ezcn:'<b>原则上没有。</b><b>真核基因一般各有各的启动子，给出单顺反子 mRNA</b>，而且<b>调控主要靠激活因子，不太靠阻遏蛋白</b>。书只说了几句：多细胞真核的调控不一样；<b>一个基因可能有好几个启动子</b>；<b>调控因子是非组蛋白蛋白质</b>；<b>基因本身的根本区别是外显子和内含子</b>。<b>少数例外确实存在</b>，比如线虫有些基因一起转录。',
 en:'“As a rule, no — generally each eukaryotic gene has its own promoter and gives a monocistronic mRNA, and regulation works mostly through activators rather than repressors. The textbook says only that regulation in multicellular eukaryotes differs, that a gene may have several promoters, that the regulators are non-histone proteins, and that the basic difference in the genes is exons and introns. A few exceptions exist, some nematode genes being transcribed together, but that is a footnote.”',
 cn:'p105–p106。「线虫有操纵子」是 general，不逼不说。<span class="pg">p105 p106</span>'},
{r:'中', q:'The textbook says the leader is not translated.',
  ez:'“Its text does say that. Its figure on the next page contradicts it. That figure shows a ribosome translating the leader peptide. And its list of translation initiation sequences includes the trp leader. The mechanism needs that ribosome. The whole point is where the ribosome stalls. What is true is something narrower. The leader peptide is not one of the enzymes. It is made and then discarded.”',
  ezcn:'<b>正文是那么说的，可它下一页的图自相矛盾</b>：<b>那张图上画着核糖体正在翻译前导肽，而且它的翻译起始序列清单里就列着 trp leader。</b><b>这个机制本来就需要那个核糖体——全部要点就在于它卡在哪里。</b><b>真正成立的是更窄的一句：前导肽不是那些酶中的一个，它被做出来、然后被丢掉。</b>',
 en:'“Its text does. Its figure on the next page shows a ribosome translating the leader peptide, and its list of translation initiation sequences includes the trp leader. The mechanism needs that ribosome — the whole point is where it stalls. What is true is that the leader peptide is not one of the enzymes. It is made and discarded.”',
 cn:'<b>用书的图打书的正文</b>，LOGIC §14 的做法。<span class="pg">p104 p105 p097</span>'},
{r:'中', q:'The textbook calls it DNA polymerase holoenzyme.',
  ez:'“That is a slip on that page. Look at the subunit composition it gives. Alpha two beta beta prime sigma is the R N A polymerase holoenzyme. The same book describes it as R N A polymerase elsewhere. That is where it introduces transcription. D N A polymerase has no sigma. And it needs a primer. R N A polymerase needs neither.”',
  ezcn:'⚠ <b>那一页是笔误。</b><b>它自己给的亚基组成 α₂ββ′σ 就是 RNA 聚合酶全酶，而同一本书在介绍转录的地方也把它写成 RNA 聚合酶。</b><b>DNA 聚合酶没有 σ，而且需要引物；RNA 聚合酶两样都不需要。</b>',
 en:'“That is a slip on that page. The subunit composition it gives, α₂ββ′σ, is the RNA polymerase holoenzyme, and the same book describes it as RNA polymerase where it introduces transcription. DNA polymerase has no σ and needs a primer. RNA polymerase needs neither.”',
 cn:'p104 vs p088。「不需要引物」是 p088 原话，印的是 <i>a primer for RNA synthesis is not needed</i>。<span class="pg">p104 p088</span>'}
]},

{g:'相邻考点', gn:'这道题左边是转录（p088–p091），右边是翻译（p092–p101）和翻译后修饰（卡 13），下面是代谢调控（#32）。走出去一步都有底。', items:[
{r:'高', q:'What does RNA polymerase do at the promoter?',
    ez:'“The textbook names four things. It binds the template. It initiates the chain. It elongates it. And it terminates it. The holoenzyme binds the promoter through sigma. It then forms an open complex. It makes abortive short R N As of up to nine nucleotides. Then sigma leaves and the core elongates. Elongation runs five prime to three prime. It uses ribonucleoside triphosphates. It needs no primer. It copies one strand only. A polymerase bound to a promoter protects that D N A from D Nase one. That is how promoters were mapped, by footprinting.”',
    ezcn:'书列了四件事：<b>结合模板 · 起始 · 延伸 · 终止</b>。<b>全酶靠 σ 因子结合启动子</b>，形成<b>开放复合物</b>，先做出<b>最多九个核苷酸的流产 RNA</b>；<b>然后 σ 离开，核心酶延伸</b>——<b>5′→3′，用核糖核苷三磷酸，不需要引物，只抄一条链</b>。<b>结合在启动子上的聚合酶会保护那段 DNA 不被 DNase Ⅰ 切</b>——<b>启动子当年就是这么定位的，叫足迹法。</b>',
 en:'“Four things, the textbook says: binds the template, initiates the chain, elongates it, terminates it. The holoenzyme α₂ββ′σ binds the promoter through σ, forms an open complex, and makes abortive short RNAs up to nine nucleotides. Then σ leaves and the core elongates, 5′ to 3′, from ribonucleoside triphosphates, no primer, on one strand only. Bound to a promoter it protects that DNA from DNase I — which, generally, is how promoters were mapped: footprinting.”',
 cn:'p088–p089 ＋ p104。footprinting 这个名字是 general，书只说「保护 DNA 不被 DNase I 切」。<span class="pg">p088 p089 p104</span>'},
{r:'中', q:'How does the ribosome find the start on a polycistronic mRNA?',
  ez:'“By a Shine Dalgarno sequence in front of each coding region. That is a purine rich stretch about ten nucleotides before the A U G. It pairs with the three prime end of sixteen S r R N A. So each cistron on the lac messenger has its own ribosome entry. The textbook’s figure lists three of them. They are lac Z and lac I and the trp leader. It notes that lac I is the one whose start codon is not A U G.”',
  ezcn:'<b>靠每个编码区前面的 Shine-Dalgarno 序列</b>：<b>AUG 前约十个核苷酸处一段富嘌呤的序列，跟 16S rRNA 的 3′ 端配对——所以 lac 的 mRNA 上每个顺反子都有自己的核糖体入口。</b><b>书那张起始序列的图列了 lacZ、lacI 和 trp leader，并指出 lacI 是其中起始密码子不是 AUG 的那一个。</b>',
 en:'“By a Shine-Dalgarno sequence in front of each coding region. That is a purine-rich stretch about ten nucleotides before the AUG that pairs with the 3′ end of 16S rRNA, so each cistron on the lac mRNA has its own ribosome entry. The textbook’s figure of initiation sequences lists lacZ, lacI and the trp leader — and notes that lacI is the one whose start codon is not AUG.”',
 cn:'p097 figure 4.40。lacI 起始 GUG 是书图注的原话，印的是 <i>all AUG except lacI</i>。<span class="pg">p097</span>'},
{r:'中', q:'Where does this sit among the ways a cell regulates an enzyme?',
  ez:'“It sits at the level of enzyme amount. The textbook’s regulation chapter lists five levels. First is regulation by substrate concentration, through Michaelis kinetics. Second is regulation by the level of the enzyme. That means controlled synthesis, induction or repression. The textbook calls that the level of using the cell’s genetic equipment. Third is by inhibitors. Fourth is allosteric control and feedback. Fifth is covalent modification. Induction is the slowest and the most complete.”',
  ezcn:'<b>它在「酶的量」这一层。</b><b>书的调控那一章列了五层：① 通过底物浓度（米氏动力学）；② 通过酶的量——也就是受控的合成、诱导或阻遏，书称之为「动用细胞遗传装备」的那一层，并在那里把你指回操纵子那一章；③ 通过抑制剂；④ 通过别构控制和反馈；⑤ 通过共价修饰。</b><b>诱导是最慢、也最彻底的一层：你改变的是「有多少个酶分子存在」，不是「每一个跑多快」。</b>',
 en:'“At the level of enzyme amount. The textbook’s chapter on regulation lists five. First, regulation by substrate concentration through Michaelis kinetics. Second, regulation by the level of the enzyme, that is controlled synthesis, induction or repression. The textbook calls that the level of using the cell’s genetic equipment, and there it sends you back to the operon chapter. Third, by inhibitors. Fourth, by allosteric control and feedback. Fifth, by covalent modification. Induction is the slowest and the most complete — you change how many enzyme molecules exist, not how fast each works.”',
 cn:'p221 明写「<i>regulation of enzyme biosynthesis by induction or repression (chapter 4.2.4)</i>」。这是 #32 那道题的骨架，卡 19 的反馈抑制是它的另一格。<span class="pg">p221</span>'},
{r:'中', q:'Is there anything like a corepressor in eukaryotes?',
  ez:'“The textbook says hormones can act like corepressors. A steroid hormone binds its receptor protein. The receptor hormone complex then acts on the D N A. Or it acts through a protein kinase on D N A binding proteins. Either way it changes transcription of the structural genes. The textbook adds that steroid hormones induce enzyme synthesis. Generally that complex is an activator rather than a repressor. The analogy is the small molecule setting what a regulatory protein does.”',
  ezcn:'<b>书说激素可以起到类似辅阻遏物的作用</b>：<b>甾体激素结合它的受体蛋白，「受体–激素」复合物或者直接作用于 DNA，或者经由蛋白激酶作用于 DNA 结合蛋白，从而改变结构基因的转录；书还说甾体激素诱导酶的合成。</b>⚠ <b>通用地说，那个复合物更像激活因子而不是阻遏物；书要类比的是「一个小分子决定一个调节蛋白做什么」这件事。</b>',
 en:'“The textbook says hormones can act like corepressors. A steroid hormone binds its receptor protein, and the receptor-hormone complex acts on the DNA or, through a protein kinase, on DNA-binding proteins, to change transcription of the structural genes. The textbook adds that steroid hormones induce enzyme synthesis. Generally the receptor–hormone complex is an activator rather than a repressor, but the textbook’s analogy is the small molecule setting what a regulatory protein does.”',
 cn:'p108 ＋ p221。<span class="pg">p108 p221</span>'},
{r:'中', q:'What happens to the protein after the operon has been transcribed and translated?',
  ez:'“In a bacterium not much happens. There is no endoplasmic reticulum. Protein synthesis is on free ribosomes. The N terminal formylmethionine is trimmed. And the enzyme folds in the cytosol. The lac products are all cytosolic or inner membrane. The permease is a membrane protein. It is inserted without a secretory pathway. That is why a bacterium cannot give you N glycosylation. Nor disulfides in its cytoplasm.”',
  ezcn:'<b>在细菌里几乎什么都不发生</b>：<b>没有内质网，蛋白在游离核糖体上合成，N 端的甲酰甲硫氨酸被修剪掉，酶就在胞质里折叠。</b><b>lac 的产物要么在胞质里、要么在内膜上（透过酶是一个不经分泌途径就插进膜的膜蛋白）。</b><b>这正是细菌给不了你 N-糖基化、在胞质里也给不了二硫键的原因——那些翻译后修饰需要内质网。</b>',
 en:'“In a bacterium, not much: no endoplasmic reticulum, protein synthesis on free ribosomes, the N-terminal formylmethionine is trimmed, and the enzyme folds in the cytosol. The lac products are all cytosolic or inner-membrane — the permease is a membrane protein inserted without a secretory pathway. That is why a bacterium cannot give you N-glycosylation or, in its cytoplasm, disulfides — the post-translational modifications that need the ER.”',
 cn:'p102 ＋ 卡 13。<b>这就是从操纵子走到卡 13 的那一步</b>。<span class="pg">p102</span>'}
]},

{g:'桥回主场', gn:'他顺着 IPTG 走过来，这一组全是实验室知识，书 grep 0 命中，说的时候带 “in my system / generally”。⚠ 说到自己的载体前确认图谱。', items:[
{r:'高', q:'How does your expression system use the lac operon?',
    ez:'“It uses it twice, in the p E T and B L twenty one D E three system. The host carries the gene for T seven R N A polymerase. That gene sits behind a lac promoter with a lac operator. T seven polymerase is a phage enzyme. It recognises only its own T seven promoter. My plasmid carries my gene behind a T seven promoter. That promoter is itself followed by a lac operator. The plasmid also carries its own lac I. Without I P T G the repressor sits on both operators. Add I P T G and both open. The host makes T seven polymerase. That polymerase then transcribes my gene. T seven polymerase is fast and specific. So most of the cell’s protein synthesis goes to my protein.”',
    ezcn:'<b>在 pET / BL21(DE3) 系统里用了两次。</b><b>宿主染色体上的 T7 RNA 聚合酶基因，装在一个带 lac 操纵基因的 lac 启动子后面</b>；<b>T7 聚合酶是噬菌体的酶，只认它自己的 T7 启动子</b>。<b>我的质粒把我的基因装在 T7 启动子后面，而那个启动子后面又跟着一个 lac 操纵基因</b>，质粒上还自带 <b>lacI</b>。<b>不加 IPTG 时阻遏蛋白坐在两个操纵基因上；加 IPTG 两个一起打开</b>：宿主造 T7 聚合酶，聚合酶转录我的基因。<b>因为 T7 聚合酶又快又专一，细胞的蛋白合成大部分都去做我的蛋白了。</b>',
 en:'“Twice over, in the pET-BL21(DE3) system. The host carries the gene for T7 RNA polymerase behind a lac promoter with a lac operator. T7 RNA polymerase is a phage polymerase that only recognises its own T7 promoter. The plasmid carries my gene behind a T7 promoter that is itself followed by a lac operator, and it carries its own lacI. Without IPTG the repressor sits on both operators. Add IPTG and both open: the host makes T7 polymerase, and the polymerase transcribes my gene. Because T7 polymerase is fast and specific, most of the cell’s protein synthesis goes to my protein. It is the lac switch borrowed to gate a phage enzyme.”',
 cn:'标准 pET 逻辑。<b>lacUV5</b>（DE3 里驱动 T7 聚合酶的启动子变体）、T7lac 这些名字被追再给。'},
{r:'高', q:'What is leaky expression, and why do you add glucose?',
    ez:'“Leaky expression is the low level made without I P T G. The repressor and operator system is an equilibrium. So some T seven polymerase is always made. And some target is always transcribed. It matters when the protein is toxic to the cell. The leaky cells stop growing and the plasmid drifts. There are two common fixes. The first is glucose in the medium. That uses the operon’s own second layer. Catabolite repression lowers transcription from the lac promoter. The second is a plasmid making T seven lysozyme. That protein binds and inhibits T seven polymerase. Both push the basal level down. Neither touches the induced level.”',
    ezcn:'<b>本底表达 ＝ 不加 IPTG 时也做出来的那一点点。</b>因为<b>阻遏蛋白–操纵基因是一个平衡</b>，<b>总有一些 T7 聚合酶被做出来，也总有一些目的基因被转录</b>。<b>蛋白对细胞有毒的时候这件事就要命</b>：漏表达的细胞长不动，质粒会漂移。两个常用办法：<b>① 培养基里加葡萄糖</b>，借的是<b>操纵子自己的第二层——分解代谢物阻遏</b>，把 lac 启动子的转录压下去；<b>② 用质粒表达 T7 溶菌酶</b>，它<b>结合并抑制 T7 聚合酶</b>。<b>两个都是把本底压低，不动诱导后的水平。</b>',
 en:'“Leaky expression is the low level of my protein made without IPTG. The repressor-operator system is an equilibrium, so some T7 polymerase is always made and some target transcribed. It matters when the protein is toxic to the cell, because the leaky cells stop growing and the plasmid drifts. Two fixes, generally. The first is glucose in the medium, which uses the operon’s own second layer: catabolite repression lowers transcription from the lac promoter driving T7 polymerase. The second is a plasmid making T7 lysozyme, which binds and inhibits T7 polymerase. Both push the basal level down without touching the induced one.”',
 cn:'实验室知识。这条同时回答了「为什么 catabolite repression 你要会」——它不是课本装饰，是你培养基里的葡萄糖。'},
{r:'高', q:'And in yeast — how do you induce display?',
    ez:'“Through the G A L one promoter. It is the eukaryotic parallel with the opposite logic. It is positive control by an activator. My surface fusion sits behind G A L one. The activator Gal four sits on the upstream activating sequence. Gal eighty holds it inactive while there is no galactose. Galactose releases the activator and transcription starts. Glucose represses the whole system. So I grow the cells in glucose first. Then I move them to galactose to induce. There is no operon here and no repressor on an operator. There is a switch made of an activator and its inhibitor.”',
    ezcn:'<b>用 GAL1 启动子</b>——<b>真核这边的对应物，而且逻辑正好相反：靠激活因子的正调控</b>。我的表面融合蛋白装在 GAL1 后面。<b>激活因子 Gal4 坐在上游激活序列上，但没有半乳糖的时候被 Gal80 摁住不干活</b>；<b>半乳糖把它放开，转录才开始</b>；<b>葡萄糖把整个系统压住</b>。<b>所以我先在葡萄糖里养，再换到半乳糖里诱导。</b><b>这里没有操纵子、也没有阻遏蛋白坐在操纵基因上，而是「激活因子 ＋ 它的抑制子」组成的开关。</b>',
 en:'“Through the GAL1 promoter, the eukaryotic parallel and the opposite logic: positive control by an activator. The surface fusion is behind GAL1. The activator Gal4 sits on the upstream activating sequence but is held inactive by Gal80 while there is no galactose. Galactose releases it and transcription starts, and glucose represses the whole system. So I grow the cells in glucose, then move them to galactose to induce. There is no operon and no repressor on an operator, but a switch made of an activator and its inhibitor instead.”',
 cn:'Gal4 / Gal80 / Mig1 是通用酵母遗传学。跟卡 02 的 yeast display 接上。'},
{r:'高', q:'You said binding — what is the repressor’s Kd?',
    ez:'“I would not quote a number from memory. The point is the ratio. The lac repressor binds its operator far more tightly than random D N A. The difference is many orders of magnitude. Inducer binding then lowers the operator affinity by orders of magnitude. That gap is the switch. It is the same quantity I measure myself. With yeast display I titrate a labelled partner. I read a dissociation constant off the midpoint. A repressor and operator titration would be the same experiment. The ligand would be D N A.”',
    ezcn:'<b>我不凭记忆报数。要紧的是比值</b>：<b>lac 阻遏蛋白抓自己操纵基因，比抓随机 DNA 紧好几个数量级</b>；<b>诱导物一结合，对操纵基因的亲和力又掉好几个数量级</b>。<b>这个落差就是开关。</b>而<b>这正是我自己在测的那个量</b>——酵母展示里<b>滴定一个带标记的配体，从中点读出 K<sub>d</sub></b>。<b>阻遏蛋白–操纵基因的滴定是同一个实验，只是配体换成 DNA。</b>',
 en:'“I would not quote a number from memory. The point is the ratio: the lac repressor binds its operator many orders of magnitude more tightly than random DNA, and inducer binding lowers the operator affinity by orders of magnitude. That gap is the switch. It is the same quantity I measure: with yeast display I titrate a labelled partner and read a dissociation constant off the midpoint. A repressor–operator titration would be the same experiment with DNA as the ligand.”',
 cn:'完整的 Kd 在<b>卡 02</b>。⚠ 具体值（通常引 10⁻¹³–10⁻¹⁰ M，随盐浓度变）待核，不报。'},
{r:'中', q:'Why IPTG rather than lactose in the lab?',
  ez:'“Because I P T G is not metabolised. It binds the repressor like allolactose. But it is not a substrate of beta galactosidase. So its concentration stays constant. And the induction stays constant with it. Lactose would be split by the enzyme it induces. So that signal fades. Lactose also needs the permease to get in. I P T G diffuses in on its own. Generally an inducer the cell cannot use is called gratuitous.”',
  ezcn:'因为<b>IPTG 不被代谢</b>：<b>它像别乳糖一样结合阻遏蛋白，却不是 β-半乳糖苷酶的底物，所以浓度恒定、诱导也恒定。</b><b>乳糖会被它自己诱导出来的酶切掉，信号就淡了；而且乳糖还要靠透过酶才进得来，IPTG 自己扩散就进去了。</b>⚠ <b>通用说法：细胞用不掉的诱导物叫「无偿诱导物」。</b>',
 en:'“Because IPTG is not metabolised: it binds the repressor like allolactose but is not a substrate of β-galactosidase, so its concentration and the induction stay constant. Lactose would be split by the enzyme it induces, so the signal fades. Lactose also needs the permease to get in, while IPTG diffuses in on its own. Generally an inducer the cell cannot use is called gratuitous.”',
 cn:'实验室知识。'}
]}
]
});
