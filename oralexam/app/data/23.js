/* 卡 23 · What are the different types of lipids and their roles in the body?
   题库 #23（S3 Biochemistry 10）· 卷面 w1，书本投入度全书第三（bw 55）：22 页 · 8 个小节 · 23 个酶名
   出处 Biochemie OCR p176–p197（§8 全章）＋ p197–p201（§8.5 生物膜，后门）；另引 p012 / p032–p033（疏水效应）、
   p035（去污剂是变性剂）、p039（蛇毒、血脂蛋白）、p112（dolichol）、p134–p135（能量数字）、p148 / p153（糖脂、唾液酸）、
   p163（NADPH）、p206（类囊体糖脂）、p218–p220（脂代谢总账）、p224–p228（磷脂酶 C、甾体激素、二十碳类）。
   ⚠ OCR 把 p176 的 table 8.1（十一类 ＋ 水解产物）整张吃掉了 —— 已回 200 dpi 原图抄回来，速背 03 就是它。
   同样回原图核过：p177 的 C12–24 / C16–24 与 table 8.2 全表、p179 的蜡碳数与 50–85 °C、p181 的 C24 与 80%、
   p196 β-氧化四步酶名（书确实印 β-ketokinase，见「相邻考点」的 warn）。
   书里没有：saponifiable / non-saponifiable · micelle（脂这一章）· HDL/LDL · 反式脂肪的工业来源 · lipid A ·
   「胆固醇是流动性缓冲剂」· Gorter-Grendel 与 Singer-Nicolson。全部标 general。
   她没学过这一章，所以这张卡是教，不是提醒。 */

window.CARDS.push({
id:'23', n:23, w:1,
q:'What are the different types of lipids and their roles in the body?',
qcn:'脂类有哪些类型？在体内的作用？',
sub:'主干说完约 90 秒 · 22 页 8 个小节，书本投入度全书第三 · 后门是「生物膜」那一节 · 她没学过',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'他嘴里多半只有一句 “What is a lipid?”。卷面多出来的两个词——<b>types</b> 和 <b>roles in the body</b>——就是他准备挖的两个方向。开口这一组一次交代三件事：是什么、怎么分、干什么。'},
 {n:'01', t:'定义',
  big:'脂是按<b>溶解性</b>定义的——几乎不溶于水，溶于非极性溶剂。<b>按性质定义，不是按结构定义</b>',
  en:'“A lipid is defined by a <b>property</b>, not a structure. The textbook’s definition: all natural <b>nonpolar</b> compounds <b>almost or completely insoluble in water but soluble in other nonpolar organic solvents</b>, such as chloroform, ethanol or ether. The textbook then says why the definition has to be like that: <b>lipids are so diverse in structure and function that no more exact definition can be formulated</b>. This is the one class of biomolecule with no shared skeleton and no shared bond.”',
  note:'§8.1 <span class="pg">p176</span>，两句都是原话。<b>先说「按性质不按结构」，这是这道题最值钱的开口</b>——它提前回答了「为什么这一章看起来像一堆不相干的东西」。蛋白质、核酸、糖都按结构定义，脂不是。'},
 {n:'02', t:'题面里的词',
  big:'<b>types</b> = 书画的三分树（＋十一类的表）；<b>roles in the body</b> = 书开章列的五条功能。先给这两张地图，再往里填',
  en:'“The question asks for the <b>different types</b> of lipids and their <b>roles in the body</b>, so two lists first. The <b>types</b>: structurally the textbook makes three groups — <b>simple</b>, <b>complex</b> and <b>derived</b>. Its table splits those into eleven classes by what each gives on hydrolysis. The <b>roles in the body</b>, its own five. One, a <b>component of biological membranes</b>. Two, the <b>main storage form of carbon and energy</b>. Three, <b>precursors of vitamins, hormones and regulatory substances</b>. Four, an <b>insulating barrier against thermal, electrical or other physical shock</b>. Five, a <b>protective coat against infection and dehydration</b>.”',
  note:'五条是 <span class="pg">p176</span> 的原顺序，一条不加一条不减；被追问哪一条都能停在那一条展开。<br><b>书没把「信号」单列成第六条</b>——它在第三条「调控物质的前体」里（激素、二十碳类）。要说信号，就说它是第三条的内容。'},
 {n:'03', t:'归类 · 书的表',
  big:'Table 8.1 十一类，第二列是<b>水解产物</b>——<b>「水解出什么」就是书的分类判据</b>',
  en:'“The table classifies by hydrolysis products. <b>Simple</b>, two classes. Acylglycerols give glycerol and fatty acids. Waxes give a long-chain alcohol and long-chain fatty acids. <b>Complex</b>, five classes. Glycoacylglycerols give sugar, glycerol and fatty acids. Phosphoacylglycerols give glycerol, fatty acids, phosphate and an organic compound. Sphingomyelins give sphingosine, fatty acids, phosphate and choline. Cerebrosides give sphingosine, fatty acids and sugars. Gangliosides give the same plus sialic acid. <b>Derived</b>: four classes with no hydrolysis products listed at all, because they are not esters.”',
  tbl:{head:['三大组','类','水解出什么'],
   rows:[
    ['<b>简单</b>','1 acylglycerols','甘油 ＋ 脂肪酸'],
    ['','2 waxes 蜡','长链醇 ＋ 长链脂肪酸'],
    ['<b>复合</b>','3 glycoacylglycerols','糖 ＋ 甘油 ＋ 脂肪酸'],
    ['','4 phosphoacylglycerols','甘油 ＋ 脂肪酸 ＋ HPO₄²⁻ ＋ 胆碱/乙醇胺/丝氨酸/肌醇/甘油'],
    ['','5 sphingomyelins','鞘氨醇 ＋ 脂肪酸 ＋ HPO₄²⁻ ＋ 胆碱'],
    ['','6 cerebrosides','鞘氨醇 ＋ 脂肪酸 ＋ 糖'],
    ['','7 gangliosides','鞘氨醇 ＋ 脂肪酸 ＋ 糖 ＋ <b>唾液酸</b>'],
    ['<b>衍生</b>','8 prostaglandins · 9 steroids','—'],
    ['','10 carotenoids · 11 lipophilic vitamins','—']
   ]},
  note:'<b>⚠ Table 8.1 被 OCR 整张吃掉，这张表是回 200 dpi 原图抄的</b>（<span class="pg">p176</span>）。表头那两列，书上印的原词译过来就是 <i>classification</i> / <i>hydrolysis products</i>。<br><b>这张表是这道题的骨架</b>：他问「有哪些类型」你有十一个名字；他挑任一类往下问，你先答「它水解出什么」，等于自动给出了结构。书正文把复合脂明确数成 <b>5 组</b>，跟表的 3–7 行对得上。'},
 {n:'04', t:'每一层的判据',
  big:'<b>简单</b>＝只有酸 ＋ 醇的酯；<b>复合</b>＝再加一样（糖 / 磷酸＋碱基 / 鞘氨醇），那一样就是<b>极性头</b>；<b>衍生</b>＝剩下的，骨架来自异戊二烯，<b>根本没有脂肪酸酯</b>',
  en:'“Each branch has a criterion. <b>Simple lipids are esters of fatty acids and alcohols</b> and nothing else, so they carry no ionisable group — the textbook calls them <b>neutral lipids</b>. <b>Complex lipids contain in addition a further component</b>, and that extra piece gives the molecule a <b>polar head</b> at one end. That is the difference that matters, because only a molecule with a polar head can build a membrane. <b>Derived lipids are the remaining compounds of lipid nature that cannot be put in the preceding groups</b>, and practically all of them are terpenes.”',
  note:'三句判据在 <span class="pg">p176</span> 和 <span class="pg">p182</span>。<b>「极性头」承重</b>——不交代它，「复合脂能做膜、简单脂不能」就没有理由，所以在同一句里点明：多出来那一样就是头。',
  warn:'通用教材另有一条切法：<b>saponifiable（可皂化）vs non-saponifiable（异戊二烯类）</b>，位置跟书的切法几乎重合，<b>但全书 grep 零命中这两个词</b>。要用就说 “generally these are also called saponifiable and non-saponifiable. The textbook divides them by the hydrolysis products instead.”'},

 {g:'脂肪酸 —— 穿起前七类的那根线', gn:'十一类里有七类水解出脂肪酸。脂肪酸讲清楚了，这一章的一半就清楚了。'},
 {n:'05', t:'脂肪酸是什么',
  big:'<b>多碳的脂肪族一元羧酸</b>；自然界的是<b>直链、偶数碳、C12–24</b>，双键<b>多数 cis</b>。它那根烃链就是整个脂分子疏水的原因',
  en:'“<b>Many-carbon aliphatic monocarboxylic acids</b> — one carboxyl on a long hydrocarbon chain. The textbook makes them the backbone of the chapter: <b>their marked hydrophobicity is what makes the whole lipid molecule hydrophobic</b>. It classifies them three ways. By the chain: <b>linear, branched or alicyclic</b>. By the number of double bonds: <b>saturated or unsaturated</b>. And by the <b>configuration of those bonds, cis or trans</b>. What occurs is narrower: linear, an <b>even number of carbons, C twelve to twenty-four</b>, the unsaturated ones usually C sixteen to twenty-four, the double bonds <b>mostly cis</b> and separated by a CH₂ group.”',
  note:'§8.2.1 <span class="pg">p177</span>；<b>C₁₂₋₂₄ 与 C₁₆₋₂₄ 两个下标 OCR 掉了，已回原图核。</b><br>书<b>没说</b>为什么偶数——那要看合成：链每次长两个碳（<span class="pg">p189</span>），起点是二碳的乙酰。<b>被问「为什么偶数」答合成，不答观察。</b>'},
 {n:'06', t:'命名与名单',
  big:'<b>18:2</b> = 碳数 : 双键数；<b>Δ</b> 从<b>羧基</b>端数，<b>n-（旧称 ω）</b>从<b>甲基</b>端数，后者定<b>系列</b>（n-3 / n-6）',
  en:'“Two systems. <b>Trivial names</b> from the natural source — palmitic acid. <b>Systematic names</b> give the carbon count by a Greek numeral, with <b>-anoic</b> for saturated and <b>-enoic, -dienoic, -trienoic</b> for one, two or three double bonds. The shorthand is <b>carbons colon double bonds</b>. Position is given twice. <b>Delta</b> counts from the <b>carboxyl</b> end. The <b>n-minus</b> number, older notation omega, counts from the <b>methyl</b> end, and that one defines the <b>series</b>, the n-three and n-six families. So linoleic acid is eighteen-two, delta nine and twelve, n-six.”',
  tbl:{head:['俗名','缩写','系统名','Δ','n-','要点'],
   rows:[
    ['lauric · myristic','12:0 · 14:0','dodecanoic · tetradecanoic','—','—','表里最短的两个'],
    ['<b>palmitic 棕榈</b>','<b>16:0</b>','hexadecanoic','—','—','<b>从头合成的终点</b> p187'],
    ['<b>stearic 硬脂</b>','<b>18:0</b>','octadecanoic','—','—','书用它讲 β-氧化 p195'],
    ['arachidic · palmitoleic','20:0 · 16:1','eicosanoic · hexadecenoic','— · 9','— · n-7',''],
    ['<b>oleic 油酸</b>','<b>18:1</b>','octadecenoic','9','n-9','橄榄油为什么是液体'],
    ['erucic','22:1','docosenoic','13','n-9',''],
    ['<b>linoleic 亚油</b>','<b>18:2</b>','octadecadienoic','9,12','<b>n-6</b>','<b>必需</b>'],
    ['<b>α-linolenic</b>','<b>18:3</b>','octadecatrienoic','9,12,15','<b>n-3</b>','<b>必需</b>'],
    ['γ-linolenic','18:3','octadecatrienoic','6,9,12','n-6','跟 α- 只差位置'],
    ['<b>arachidonic</b>','<b>20:4</b>','eicosatetraenoic','5,8,11,14','n-6','<b>二十碳类的来源</b> p228'],
    ['timnodonic · clupanodonic','20:5 · 22:6','eicosapentaenoic · docosahexaenoic','—','n-3','EPA 与 DHA，表里最长']
   ]},
  note:'Table 8.2 <span class="pg">p177</span>，命名规则 <span class="pg">p178</span>，整表已回原图核。<br><b>要背的只有黑体那六个</b>：16:0 · 18:0 · 18:1 · 18:2 · 18:3 · 20:4。<b>α- 与 γ-亚麻酸是最阴的一对</b>：都是 18:3，只差 Δ9,12,15（n-3）还是 Δ6,9,12（n-6）——必需的是 <b>α</b>。'},
 {n:'07', t:'必需脂肪酸 ＋ 熔点',
  big:'必需的只有两个：<b>linoleic 18:2 n-6</b> 和 <b>α-linolenic 18:3 n-3</b>；其余靠<b>延长酶和去饱和酶</b>自己造。<b>饱和 → 熔点高；不饱和 → 熔点低；双键越靠羧基降得越多</b>',
  en:'“The textbook is precise: <b>the diet of mammals must contain linoleic acid, eighteen-two n-six, and alpha-linolenic acid, eighteen-three n-three</b>. Anything longer or more unsaturated mammals make from those two with <b>elongases and desaturases</b>. So what we cannot do is put a double bond past a certain point, not build a chain. And it gives three rules. <b>Saturated fatty acids raise the chemical stability and the melting point.</b> <b>Unsaturated ones lower both.</b> <b>And the closer the double bond lies to the carboxyl group, the more it lowers them.</b>”',
  note:'§8.2.1 <span class="pg">p178</span>，三条规则是书自己的清单。<b>书没给理由</b>；通用理由是 <b>cis 双键在链上打一个折</b>，链堆不紧——说时带 generally。<br><b>这一条同时是「膜流动性」和「黄油 vs 橄榄油」两道题的答案。</b>延长酶在线粒体基质、去饱和酶在内质网（<span class="pg">p187</span>）。'},

 {g:'十一类逐个走一遍', gn:'每一类三句：<b>什么醇 ＋ 什么酸 ＋ 什么键</b>、<b>长在哪</b>、<b>干什么</b>。三句在，他从哪一类插进来你都接得住。'},
 {n:'08', t:'简单脂 · 三酰甘油与蜡',
  big:'<b>三酰甘油</b>＝三个脂肪酸酯化在甘油（三元醇）上，无可电离基团 → <b>中性脂</b>，固体叫 fat、液体叫 oil。<b>蜡</b>＝长链酸 ＋ <b>长链醇</b>的酯，两头都长',
  en:'“<b>Acylglycerols are esters of the trihydric alcohol glycerol and fatty acids</b> — an <b>ester</b> being the bond between an <b>acid</b> and an <b>alcohol</b>, formed with loss of water. Triacylglycerols are commonest, and having <b>no ionisable group</b> they are <b>neutral lipids</b> — <b>fats</b> when solid at room temperature, <b>oils</b> when liquid. Three jobs in the textbook. In <b>adipose tissue</b> it is the store of carbon and energy, and excess dietary carbon, above all sugars, is converted into it. In <b>chylomicrons</b> it is the transport form. And it gives <b>insulation and physical protection</b> of organs. <b>Waxes</b> esterify a <b>long-chain alcohol</b> instead of glycerol: completely insoluble, <b>not attacked by lipases</b>, and they waterproof surfaces.”',
  note:'§8.2.2 <span class="pg">p178 p179</span>。<b>酯这个词承重</b>——不交代它，「酰甘油是酯」就是同义反复；完整的键表在<b>横向卡 bonds</b> 第 07 点。书还说：天然脂多为 <b>L-异构体</b>；中性酰甘油<b>只能发生一种反应——水解</b>，靠<b>脂肪酶 lipase</b>（封闭清单，可以直接引）。<br>蜡的酸是 <b>lignoceric C24 · cerotic C26 · myricic C30</b>，例子是<b>蜂蜡 = myricyl palmitate</b>，熔点 <b>50–85 °C</b>；只有植物和微生物的 <b>cerases</b> 能切（已回原图核）。<b>⚠ 待核</b>：醇的碳数在 200 dpi 原图上印得糊（cetyl 看着像 C₁₁，通用值是 C₁₆；ceryl 像 C₂₂，通用值 C₂₆），<b>书上有但我读不准，所以考场只报酸的碳数和 myricyl palmitate，不报醇的碳数</b>。',
  good:'<b>第二层（为什么存脂不存糖原）</b>：“The textbook’s figures for complete oxidation are <b>minus eleven thousand three hundred and forty kilojoules per mole for palmitic acid against minus two thousand eight hundred and seventy for glucose</b>. Divided by the molar masses, that is about <b>forty-four kilojoules per gram against sixteen</b>. A fatty acid is a chain of CH₂ groups with no oxygen — it is <b>more reduced</b>. And generally fat is stored <b>anhydrous</b>, glycogen hydrated.” 两个摩尔数是书印的（<span class="pg">p135</span>）；<b>每克的数是除出来的，说时要把除法说出来</b>。同一条在<b>卡 24</b>。'},
 {n:'09', t:'甘油磷脂',
  big:'骨架是<b>磷脂酸</b>：甘油 C-1、C-2 接两个脂肪酸（<b>酯键</b>），C-3 接磷酸；头基 R 用<b>磷酸酯键</b>接在磷酸上——换 R 就换名字',
  en:'“<b>Phospholipids are the most abundant complex lipids in nature</b>, and the textbook says where: components of biological membranes of all types. The simplest, and the precursor of the rest, is <b>phosphatidic acid</b> — glycerol with fatty acids esterified at positions one and two and a phosphate at three. <b>The individual phospholipids differ only in the group bound to it by a phosphoester bond</b>: <b>phosphatidyl-ethanolamine, -choline, -serine, -glycerol, -inositol, and diphosphatidylglycerol</b>. One regularity: <b>position two usually carries an unsaturated fatty acid, position one a saturated one</b>.”',
  note:'§8.2.3 <span class="pg">p180 p181</span>，六个头基是书列的全部。<b>diphosphatidylglycerol 就是心磷脂 cardiolipin</b>——俗名不是书的。<br><b>别漏植物那一类</b>：<b>glycoacylglycerols</b>（表的第 3 类）是<b>植物膜、尤其叶绿体类囊体膜</b>的主要脂——MGDG、DGDG、SL（<span class="pg">p179</span>）；<span class="pg">p206</span> 说类囊体膜磷脂较少、多的正是这三种。<b>#27 光合从这里接。</b>'},
 {n:'10', t:'两亲性 · amphipathy',
  big:'一个分子<b>两头性质相反</b>：脂肪酸那头非极性疏水，甘油＋磷酸＋头基那头极性亲水。书管这个叫 <b>amphipathy</b>。<b>膜、胶束、肥皂都是这一条的推论</b>',
  en:'“A phospholipid shows <b>two clearly different regions</b>: a nonpolar hydrophobic one, the fatty acids, and a polar hydrophilic one, the glycerol, the phosphoric acid and the functional group. <b>The textbook calls this dual character amphipathy and says phospholipids are amphipathic compounds.</b> It adds the quantitative point. The amphipathic character of acylglycerols alone is <b>very weak</b>, and the contribution comes from the head groups. <b>Some of them, choline, ethanolamine and serine, can carry an electric charge at physiological pH</b>, and it says that matters greatly for how phospholipids work in membranes.”',
  note:'§8.2.3 <span class="pg">p181</span>，<i>amphipathy</i> 是书印的词，全书唯一一处。图上两个标签也是书印的，译过来是：<i>ionizable polar hydrophilic “head”</i> / <i>non-ionizable nonpolar hydrophobic “tail”</i>。<b>「头」「尾」这两个字她要说出口</b>——书讲膜时用的就是它们。同一条在<b>横向卡 bonds</b>。',
  warn:'<b>micelle 在脂这一章书里没有</b>（全书只有 <span class="pg">p156 p157</span> 讲淀粉的水合胶束）。要说就 general：“Generally a single-tailed amphipathic molecule such as a soap packs into a <b>micelle</b>. A two-tailed phospholipid packs into a <b>bilayer</b>.” 同样 general：哪个头是两性离子（PC、PE）、哪个净负电（PS、PI、PG）——<b>书只说「有些能带电」。</b>'},
 {n:'11', t:'鞘脂',
  big:'醇换成<b>鞘氨醇</b>（18 碳不饱和氨基二元醇）。脂肪酸接的<b>不是羟基而是氨基 → 酰胺键 → ceramide</b>。＋磷酰胆碱（酯键）= <b>鞘磷脂</b>；＋糖（O-糖苷键）= <b>脑苷脂 / 神经节苷脂</b>',
  en:'“Sphingolipids swap the alcohol. <b>Sphingosine is an unsaturated eighteen-carbon amino-dialcohol</b>, and the textbook makes a point of the bond. <b>Although it has two hydroxyls, the fatty acid binds through the amino group — an amide bond.</b> <b>So the compound is a ceramide.</b> Add phosphorylcholine on the terminal hydroxyl <b>by an ester bond</b> for <b>sphingomyelin</b>. It sits in the membranes of nerves and brain — the <b>myelin sheaths of axons</b>. Add a sugar <b>by an O-glycosidic bond</b> instead for the <b>glycosphingolipids</b>: cerebrosides with one sugar, gangliosides with a chain that <b>always includes at least one sialic acid</b>.”',
  note:'§8.2.3 <span class="pg">p181 p182</span>。<b>「两个羟基却用氨基」是书自己强调的</b>，也是这一章唯一的酰胺键。<b>先说 ceramide 再分叉</b>，比并列背四个名字省力。<br>糖鞘脂<b>没有磷酸也照样两亲</b>——头是糖，常含 <b>N-乙酰神经氨酸</b>；尾是 <b>C₂₄ 长脂肪酸，占脂肪酸含量的 80%</b>。约 <b>25%</b> 脑内脑苷脂在糖（通常半乳糖）的 <b>C-3 带硫酸</b> → <b>sulfatides</b>。',
  good:'<b>功能是识别</b>（<span class="pg">p182</span>）：糖脂显著<b>增加膜的刚性</b>，并和糖蛋白一起承担细胞表面的功能——<b>抗原标记</b>、分化程度标记、生长调控、正常细胞的恶性转化，以及识别别的活性分子：<b>破伤风毒素和霍乱毒素结合神经节苷脂 GM</b>、糖蛋白激素、干扰素、<b>病毒</b>。<b>这是回到糖那一章（卡 06 的「识别」功能）的桥。</b>'},
 {n:'12', t:'萜类 ＋ 脂溶性维生素',
  big:'衍生脂几乎全是<b>萜（异戊二烯类）</b>：单体是 <b>isoprene（C₅）</b>，按<b>生物合成</b>分级。<b>维生素 A、D、E、K，辅酶 Q，类胡萝卜素，dolichol 都住在这里</b>',
  en:'“<b>Practically all natural derived lipids are, by biochemical origin, terpenes or isoprenoids</b>, and the textbook says why they count as lipids. <b>They satisfy the condition of insolubility in water because of their hydrophobic character</b> — not because they contain fatty acids, for they contain none. Their basis is the monomer unit <b>isoprene</b>, and <b>the subgroups follow consistently from the biosynthesis</b>. <b>Phytol</b> is part of <b>chlorophyll</b> and gives <b>vitamin K one</b> its lipophilic character. Chains of the same origin are in <b>vitamin K two, vitamin E and coenzyme Q</b>. <b>Vitamin A, retinol</b>, belongs here too, but comes from the tetraterpene <b>carotene</b>.”',
  note:'§8.2.4 <span class="pg">p182 p183 p184</span>。K₁ = phylloquinone n=4；K₂ = menaquinone n=8（书印的）。<br><b>类胡萝卜素</b>（四萜，<span class="pg">p186 p187</span>）：3–11 个共轭双键所以有颜色；最广布的是 <b>β-胡萝卜素</b>，含氧衍生物叫<b>叶黄素</b>。最稳的是 <b>all-trans</b>；吸一个光量子后 <b>cis → trans</b>，这个吸热转变正是<b>感光</b>的基础。还兼做光合的<b>辅助捕光色素</b>和<b>抗氧化剂</b>。β-胡萝卜素被酶<b>对称裂解成两分子视黄醇</b>=维生素 A。<br><b>接口</b>：辅酶 Q → <b>卡 25</b>；dolichol phosphate（书叫「高分子量脂类载体」，<span class="pg">p112</span>）→ <b>卡 13</b>。'},
 {n:'13', t:'甾体与胆固醇',
  big:'共同骨架是<b>甾烷 sterane</b>。C-17 上 8–10 碳侧链 ＋ C-3 上一个羟基 = <b>固醇 sterol</b>，代表是<b>胆固醇</b>：占膜脂 <b>0–40%</b>，<b>增加刚性</b>，又是<b>胆汁酸、性激素、维生素 D</b> 的前体',
  en:'“<b>The common structural basis of all steroids is the skeleton of fused alicyclic rings called sterane</b>. <b>A hydrocarbon chain of eight to ten carbons at position seventeen and a hydroxyl at position three mark the steroids called sterols</b>, of which the most important in animals is <b>cholesterol</b>. Two roles. <b>Structural</b>: <b>zero to forty per cent of the total membrane lipids</b>, and <b>because the steroid skeleton is relatively inflexible it contributes very significantly to membrane rigidity</b>. And <b>precursor</b>: of the <b>bile acids, which emulsify lipids in digestion</b>, of the <b>sex hormones</b>, and in some organisms of <b>vitamin D</b>.”',
  note:'§8.2.4 <span class="pg">p184 p185</span>；0–40% 是书印的。<b>维生素 D 的机制书给了</b>（<span class="pg">p186</span>）：钙化醇本身<b>没有甾体结构</b>，但来自甾体前体——<b>紫外线打开 B 环的 C-9 与 C-10 之间</b>并发生双键重排，7-脱氢胆固醇 → 胆钙化醇（D₃）。「晒太阳造维生素 D」问的就是这句。植物那一路：stigmasterol、ergosterol、sitosterol，以及强心苷。',
  warn:'<b>书说胆固醇「增加刚性」，通用说法是「流动性缓冲剂 fluidity buffer」。</b>书只描述了一侧（<span class="pg">p185 p198</span>：胆固醇越多流动性越低）。给第二层要明说来源：“The textbook says cholesterol increases rigidity. Generally it is called a <b>fluidity buffer</b>, because below the transition temperature it does the opposite — it stops the chains packing tightly.”'},
 {n:'14', t:'前列腺素与二十碳类',
  big:'Table 8.1 的第 8 类。<b>二十碳（eicosanoids，「eikosi」希腊语二十）</b>，全部来自<b>花生四烯酸 20:4</b>：<b>前列腺素、前列环素、血栓烷、白三烯</b>。这是「信号」那条功能的落点',
  en:'“<b>Prostaglandins are class eight of the table</b>, the first of the derived lipids, and the hormone chapter says what they are. The textbook divides hormones into four groups: steroid hormones, amino-acid derivatives, peptide and protein hormones, and <b>eicosanoids</b>. <b>Eicosanoids contain twenty carbon atoms, and <i>eikosi</i>, it says, is Greek for twenty.</b> <b>Eicosanoid hormones arise from arachidonate</b>, the main ones being <b>leukotrienes, prostaglandins, prostacyclins and thromboxanes</b>, regulating <b>blood flow, ion transport and synaptic transmission</b>.”',
  note:'<span class="pg">p176</span>（表）＋ §10.3 <span class="pg">p225 p226 p228</span>。<b>⚠ 说 arachidonic 要说清是 20:4——碳二十、四个双键</b>，别念成 24 个碳。<br>书还给了<b>甾体激素怎么起作用</b>（<span class="pg">p225</span>）：甾体和甲状腺激素<b>进入细胞</b>，结合能结合 DNA 的受体蛋白，被带进核，结合 DNA 特定位点<b>激活基因的某些部分</b>——跟肽类激素停在膜受体上完全不同。<b>「为什么脂溶性激素能直接进细胞」的答案就是这一章的定义。</b>'},

 {g:'后门 · 生物膜', gn:'§8.5 就在这道题的页范围里，也是他从「膜是脂做的」往下走的第一站。<b>一屏够用。</b>'},
 {n:'15', t:'膜',
  big:'膜 = <b>蛋白 ＋ 脂</b>（重量比 <b>1:4 到 3:1</b>）＋ 糖（<b>0.5–10%</b>，一定在糖蛋白或糖脂上）。双层<b>厚 3.5–4.0 nm</b>，头尾之间的作用力<b>全是非共价的</b>',
  en:'“<b>Biological membranes consist of proteins and lipids</b>, the <b>protein to lipid weight ratio running from one to four up to three to one</b>. <b>Carbohydrates are always present as glycoproteins or glycolipids, half a per cent to ten per cent</b>. The structure is the <b>lipid bilayer</b>. Each layer is predominantly <b>complex lipids</b>, hydrophobic <b>tails</b> in close contact and hydrophilic <b>heads</b> likewise, the monolayers <b>tail to tail</b>. So it has <b>a markedly nonpolar middle and two polar surfaces</b>, and it is <b>three and a half to four nanometres</b> thick. And <b>the interactions of heads and tails are exclusively noncovalent</b>.”',
  note:'§8.5.1–8.5.2 <span class="pg">p198</span>，四个数全是书印的。<br><b>三条书自己给的，被问一句一条</b>：① <b>脂的不对称</b>——两层脂组成不同，脑苷脂和神经节苷脂一般在<b>外</b>层；② <b>翻转机制 flip-flop</b> 能让脂在两层间交换，书说<b>它的生物学意义目前还没有确切定义</b>（引这句很安全）；③ <b>流动镶嵌模型</b>（<span class="pg">p199</span>），<b>蛋白没有真正的翻转</b>。<br><b>膜蛋白两类</b>：<b>外周</b>只跟极性头作用、容易释放；<b>整合</b>靠<b>疏水作用</b>留在膜里。<b>这两句是段 4 的入口。</b>'},

 {g:'画 · 收尾', gn:'他可能说「画一个三酰甘油」或「画一个磷脂」。没有图片文件，下面就是图——<b>拿纸画三遍，边画边说。</b>'},
 {n:'16', t:'画 · 三酰甘油与磷脂',
  big:'两张图共用一个骨架：<b>竖着的甘油三个碳</b>。三个位子都挂脂肪酸 = 三酰甘油；<b>第三个位子换成磷酸 ＋ 头基</b> = 磷脂',
  en:'“Same backbone for both. <b>Glycerol</b>: three carbons written vertically, numbered one to three, each with a hydroxyl. For a <b>triacylglycerol</b> every hydroxyl makes an <b>ester</b> with a fatty acid — glycerol oxygen, carbonyl carbon, then a zig-zag chain. Three esters, no charged group anywhere, which is why it is a <b>neutral</b> lipid. For a <b>phospholipid</b> I keep the esters at one and two, <b>saturated at one, unsaturated with a cis kink at two</b>. Then I replace the third by a <b>phosphate</b> carrying the head group. With no head group it is <b>phosphatidic acid</b>.”',
  note:'画的顺序：① 竖线，三个碳，标 1、2、3；② 每个碳旁写 –OH；③ <b>三酰甘油</b>：把每个 OH 改写成 –O–C(=O)–R，三条 R 画成锯齿链；④ <b>磷脂</b>：C-3 改成 –O–P(=O)(O⁻)–O–R；⑤ <b>最后一步最重要</b>：甘油＋磷酸＋头基外面圈一圈写 <b>polar hydrophilic head</b>，两条链外面圈一圈写 <b>nonpolar hydrophobic tail</b>——<b>书 <span class="pg">p180</span> 的图就是这样标的</b>；⑥ 画膜：两排磷脂<b>尾对尾</b>，头朝两侧的水，旁边写 <b>3.5–4.0 nm</b>。'},
 {n:'17', t:'落点',
  big:'整章压在一句话上：<b>尾巴不是互相吸引，是水把它们挤到一起</b>——疏水效应是<b>水的熵</b>',
  en:'“So the whole chapter rests on one thing. A lipid is defined by not dissolving in water, and everything follows. A molecule with only tails becomes a store or an insulating barrier. A molecule with a tail and a polar head becomes a surface — a bilayer, a membrane. And the tails do not come together because they attract each other. The textbook’s own definition: <b>the essence of the hydrophobic effect is the increase in entropy from destroying the ordered arrangement of the water molecules around the hydrophobic particles</b>. Below that we are counting the entropy of water — physical chemistry rather than biochemistry.”',
  note:'疏水效应的定义在 <span class="pg">p032 p033</span>（蛋白那一章），非极性基团的清单在 <span class="pg">p012</span>，里面明写包括<b>脂的非极性部分</b>——所以这句在书里接得上，不是从蛋白那边借的。同一条在<b>卡 01</b>。<b>说完就停。</b>'},
 {n:'18', t:'留口子',
  big:'把话引到<b>你每天用去污剂拆的那层膜</b>——纯化蛋白的第一步就是这一章',
  en:'“The place I meet this chapter is the first step of every purification. To get a protein out of yeast or <i>E. coli</i> I have to take a membrane apart. What I add is a <b>detergent</b> — the same design as a phospholipid, a hydrocarbon tail and a polar head. So it competes for the tails and breaks the bilayer up. Which detergent matters: a mild non-ionic one leaves the protein folded, a strongly ionic one unfolds it. And from a Gram-negative host there is a second lipid to think about, the <b>lipid A</b> part of the outer-membrane <b>lipopolysaccharide</b>. It sticks to the protein and has to be removed.”',
  note:'<b>三个故意不交代的词都在你的地盘</b>：detergent（横向卡 bonds ＋ 卡 01 变性）、non-ionic vs ionic（通用）、lipid A / LPS。<br>书能撑住的只有两条：<b>去污剂是化学变性剂</b>（<span class="pg">p035</span>，跟加热不同，不凝固）和<b>膜糖一定以糖蛋白或脂多糖形式存在</b>（<span class="pg">p148 p198</span>）。<b>lipid A 书里零命中</b>，说时带 generally。'}
],
end:'<b>会说这十八点，主干、类型、功能、膜都成立。</b>画的那一点（16）要<b>拿纸画三遍</b>，不是看三遍。β-氧化、脂肪酸合成、磷脂酶、酮体在<b>追问</b>那边，眼熟即可。现在切到演练，出声说一遍。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>定义</b>：按<b>溶解性</b>定义——几乎不溶于水，溶于非极性溶剂；<b>按性质不按结构</b>',
 '“All natural nonpolar compounds almost or completely insoluble in water but soluble in nonpolar organic solvents. The textbook says a more exact definition cannot be formulated, because lipids are too diverse in structure and function.”',
 'p176 原话两句。全书唯一按性质定义的一类生物分子。'],
['<b>五条功能</b>：膜 · 储碳储能 · 前体（维生素、激素、调控物质）· 绝缘保护 · 防感染防脱水',
 '“Component of biological membranes. The main storage form of carbon and energy. Precursors of vitamins, hormones and regulatory substances. An insulating barrier against thermal, electrical or other physical shock. A protective coat against infection and dehydration.”',
 'p176 的原顺序。「信号」不是第六条，它在第三条里。'],
['<b>三大组 ＋ 判据</b>：简单（只有酸＋醇的酯）· 复合（多一样 → 有<b>极性头</b>）· 衍生（剩下的，异戊二烯类）',
 '“Simple lipids are esters of fatty acids and alcohols. Complex lipids contain in addition a further component, and that component makes a polar head. Derived lipids are everything that cannot go in the first two, practically all of them terpenes.”',
 'p176 ＋ p182。「极性头」是承重词，必须同句交代。'],
['<b>脂肪酸</b>：多碳脂肪族一元羧酸；直链、<b>偶数碳 C12–24</b>；双键<b>多数 cis</b>；<b>必需的只有 18:2 n-6 和 18:3 n-3</b>',
 '“Many-carbon aliphatic monocarboxylic acids. In nature linear, an even number of carbons, C twelve to twenty-four, the double bonds mostly cis. The diet of mammals must contain linoleic acid and alpha-linolenic acid. Longer ones we make with elongases and desaturases.”',
 'p177–p178，碳数范围已回原图核。偶数是因为合成每次加两个碳。'],
['<b>三酰甘油 ＋ 蜡</b>：酯键；无可电离基团 = <b>中性脂</b>，固体 fat、液体 oil；蜡是长链酸 ＋ <b>长链醇</b>，防水防干',
 '“Esters of glycerol and fatty acids. No ionisable group, so neutral lipids. In adipose tissue the store of carbon and energy, in chylomicrons the transport form, around the organs the insulation. Waxes esterify a long-chain alcohol instead, are not attacked by lipases, and waterproof surfaces.”',
 'p178–p179。书说中性酰甘油只能发生一种反应：水解。'],
['<b>甘油磷脂 ＋ 两亲</b>：骨架是<b>磷脂酸</b>，头基靠<b>磷酸酯键</b>接上；书管两头相反叫 <b>amphipathy</b>',
 '“The simplest is phosphatidic acid, and the others differ only in the group bound to it by a phosphoester bond — ethanolamine, choline, serine, glycerol, inositol. The textbook calls the dual character amphipathy, and says choline, ethanolamine and serine can carry an electric charge at physiological pH.”',
 'p180–p181。amphipathy 就是书印的那个词，全书唯一一处。'],
['<b>鞘脂</b>：脂肪酸走<b>氨基 → 酰胺键 → ceramide</b>；＋磷酰胆碱（酯键）= 鞘磷脂；＋糖（O-糖苷键）= 糖鞘脂',
 '“Although sphingosine has two hydroxyls, the fatty acid binds through the amino group — an amide bond. That gives a ceramide. Phosphorylcholine by an ester bond gives sphingomyelin. A sugar by an O-glycosidic bond gives the glycosphingolipids, and a ganglioside always contains at least one sialic acid.”',
 'p181–p182。ceramide 是共同核心，先说它再分叉。'],
['<b>胆固醇 ＋ 萜类</b>：甾烷骨架 ＋ C-3 羟基 = 固醇，占膜脂 <b>0–40%</b>，<b>增加刚性</b>，是胆汁酸、性激素、维 D 的前体；维生素 A D E K、辅酶 Q 都是异戊二烯类',
 '“Cholesterol is zero to forty per cent of membrane lipids, and because the steroid skeleton is inflexible it contributes significantly to rigidity. It is also the precursor of the bile acids, the sex hormones and vitamin D. Practically all the other derived lipids are terpenes built from isoprene — vitamins A, D, E and K, and coenzyme Q.”',
 'p182–p186。0–40% 是书印的。这一格也是题库 #31 的一半。'],
['<b>膜</b>：蛋白:脂 <b>1:4 到 3:1</b>；糖 <b>0.5–10%</b>；双层厚 <b>3.5–4.0 nm</b>；头尾之间<b>全是非共价</b>',
 '“Proteins and lipids, weight ratio one to four up to three to one. Carbohydrates always as glycoproteins or glycolipids. Tails in contact with tails, heads with heads, the interactions exclusively noncovalent. A markedly nonpolar middle and two polar surfaces, three and a half to four nanometres thick.”',
 'p198，四个数全是书印的。'],
['<b>落点</b>：尾巴靠拢<b>不是互相吸引</b>，是<b>水的熵</b>——疏水效应',
 '“The essence of the hydrophobic effect, in the textbook’s own words, is the increase in entropy from destroying the ordered arrangement of water molecules around the hydrophobic particles. Below that we are in physical chemistry rather than biochemistry.”',
 'p032–p033。说完就停。']
],

segs:[
 {tag:'段 1 · 定义', h:'定义、为什么只能这样定义、三大组、五条功能 —— 一口气',
  p:['“A lipid is defined by a property rather than by a structure. The textbook’s definition: all natural nonpolar compounds that are almost or completely insoluble in water but soluble in other, nonpolar, organic solvents — chloroform, ethanol, ether. And it says immediately why: because lipids are so diverse in structure and in function that no more exact definition of this varied set of biologically active substances can be formulated. That is unusual — proteins, nucleic acids and carbohydrates are all defined by a shared skeleton and a shared bond, and lipids are not.”',
     '“The written question asks for the different types of lipids and their roles in the body, so let me put both lists down first. The types: structurally the textbook makes three main groups — simple, complex and derived. Its table splits those into eleven classes, each defined by what it gives on hydrolysis.”',
     '“The roles in the body, as the textbook opens the chapter. Lipids are a component of biological membranes. They are the main storage form of carbon and energy. They are precursors of other important substances — vitamins, hormones and regulatory substances. They are an insulating barrier against thermal, electrical or other physical shock. And they are a protective coat of organisms and cells against infection and dehydration.”'],
  note:'<b>他多半只说 “What is a lipid?”</b>。即使这样，这三段照说——第二段是你自己把题目问完整，第三段把「roles」先占住。<b>「按性质不按结构」那一句是这道题的门。</b>'},
 {tag:'段 2 · general · 怎么分', h:'脂肪酸是穿起来的那根线，然后三大组一组一句',
  p:['“The thread through the first seven classes is the fatty acid: many-carbon aliphatic monocarboxylic acids, and the textbook says it is their marked hydrophobicity that makes the whole lipid molecule hydrophobic. In nature they are linear, with an even number of carbons, twelve to twenty-four, and the double bonds are mostly cis. Saturated ones raise the melting point, unsaturated ones lower it — which is the whole difference between a fat and an oil. Two are essential in the mammalian diet: linoleic acid, eighteen-two n-six, and alpha-linolenic acid, eighteen-three n-three.”',
     '“Simple lipids are esters of fatty acids and alcohols and nothing more. Acylglycerols have no ionisable group, so they are neutral lipids, and triacylglycerols are the fat store, the transport form in chylomicrons, and the insulation. Waxes esterify a long-chain alcohol instead of glycerol, are completely insoluble, are not touched by lipases, and waterproof surfaces.”',
     '“Complex lipids contain one further component, and that component is a polar head. In the phospholipids it is a phosphate carrying choline, ethanolamine, serine, inositol or glycerol. In the sphingolipids the alcohol itself is changed to sphingosine, with the fatty acid on its amino group as an amide, giving a ceramide. And the head is either phosphorylcholine or a sugar chain.”',
     '“Derived lipids are everything that cannot be put in the first two groups, and practically all of them are terpenes, built from the isoprene unit. That group holds the steroids, with cholesterol, the carotenoids, the prostaglandins, and the fat-soluble vitamins A, D, E and K.”'],
  note:'<b>三个自然停顿点</b>：脂肪酸说完、简单脂说完、复合脂说完。他在任何一处插进来，你都还在自己的框架里。<b>时间紧就把衍生脂那段压成一句</b>——他要细节会自己问。'},
 {tag:'段 3 · 稍展开', h:'从两亲性一路走到膜 —— 他最可能挖的方向',
  p:['“The most interesting of those is the complex lipids, because of one property the textbook gives a name to. A phospholipid has two clearly different regions: a nonpolar hydrophobic one, the fatty acids, and a polar hydrophilic one, the glycerol, the phosphate and the head group. The textbook calls this dual character amphipathy. A triacylglycerol is barely amphipathic at all, because it has no head. And that one difference decides what the molecule can build. A lipid with only tails becomes a store, and a lipid with a tail and a head becomes a surface.”',
     '“That surface is the membrane. Each layer is formed predominantly by complex lipids, tails in close contact with tails and heads with heads, the two monolayers facing tail to tail. So the bilayer has a markedly nonpolar middle and two polar surfaces, three and a half to four nanometres thick. And the interactions of heads and tails are exclusively noncovalent — nothing in a membrane is held by a covalent bond.”',
     '“The composition then tunes it. The more saturated the fatty acids, the longer their chains, and the more cholesterol, the lower the fluidity — cholesterol because its fused ring skeleton is inflexible. So the same facts about fatty acids that decide whether a fat is solid or liquid also decide how fluid a membrane is.”'],
  note:'〔可裁〕<b>这一段是「types」和「roles」握手的地方</b>：两亲性是结构，膜是功能，中间没有跳跃。他再往膜里走一步，就答膜蛋白两类（速背 15 的 note），然后进段 4。'},
 {tag:'段 4 · 留口子', h:'落到你每天拆的那层膜',
  p:['“The place I actually meet this chapter is the first step of every purification. To get a protein out of yeast or <i>E. coli</i> I have to take a membrane apart. What I add is a detergent — a molecule with exactly the design we have been describing, a hydrocarbon tail and a polar head. It competes for the tails and breaks the bilayer up. Which detergent matters: a mild non-ionic one leaves the protein folded, a strongly ionic one unfolds it, and the textbook does list detergents with urea and guanidine as chemical denaturants. It also explains why some proteins come off easily and others do not. Peripheral proteins interact only with the polar heads and can be released fairly simply. Integral proteins are held by hydrophobic interaction between their nonpolar side chains and the fatty-acid tails.”'],
  note:'<b>钓饵有三个</b>：detergent（横向卡 bonds ＋ 卡 01 的变性）、non-ionic vs ionic（通用）、integral vs peripheral（书 <span class="pg">p199</span>）。他追哪个都在你的地盘。<b>lipid A 那条留在追问里，不要主动说</b>——书里零命中的词，主动说等于自己挖坑。'}
],

why:{
 rungs:[
  ['为什么脂在水里会自己排成双层？','因为<b>两亲</b>：一个分子上两头性质相反，哪一头都没法单独满足。书画的结果就是尾对尾靠在一起、头都朝水，中间明显非极性、两面极性，<b>而且头尾之间的作用力全是非共价的</b>。“Because the molecule is amphipathic: the tails go together, the heads face the water, and every interaction holding it is noncovalent.” <span class="pg">p198</span>'],
  ['那尾巴为什么会靠到一起——它们互相吸引吗？','<b>不吸引。</b>书自己的定义：疏水效应的本质是<b>破坏非极性颗粒周围那层排列整齐的水，从而升高熵</b>。“Not attraction — the essence of the hydrophobic effect is the increase in entropy from destroying the ordered water around the hydrophobic particles.” <span class="pg">p033</span>'],
  ['那为什么是片，不是球？','<b>形状。</b>通用：一条尾巴的两亲分子（肥皂）像个锥，锥堆成球 = <b>胶束</b>；两条尾巴的磷脂接近圆柱，圆柱只能铺成<b>平片</b>，而片会自己合拢成囊，因为边缘会把尾巴露给水。“Generally, one tail makes a cone and gives a micelle. Two tails make a cylinder and give a sheet. The sheet closes on itself, because an edge would expose the tails.” <b>书只给双层，不给这个几何理由——说 generally。</b>']
 ],
 stop:{lbl:'停 · 落在热力学',
  say:'“Below that we are counting the entropy of water molecules around a nonpolar surface — physical chemistry rather than biochemistry.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is a lipid?',
 mean:'<b>最短的问法，多半就是这一句。</b>答案自带结构：定义 → 为什么只能这样定义 → 怎么分 → 干什么。',
 say:'“A lipid is defined by a property rather than a structure: all natural nonpolar compounds almost or completely insoluble in water but soluble in nonpolar organic solvents. The textbook says a more exact definition cannot be formulated, because lipids are too diverse in structure and function. It divides them into three groups — simple, complex and derived. Its table splits those into eleven classes by what each gives on hydrolysis. And it lists five roles: membranes, the main store of carbon and energy, precursors of vitamins and hormones, insulation, and a protective coat against infection and dehydration.”'},

{q:'What types of lipids are there?',
 mean:'卷面第一个限定词。<b>先给树，再给名字</b>，不要一上来数十一个。',
 say:'“Three groups, and the criterion at each branch. Simple lipids are esters of fatty acids and alcohols and nothing else — acylglycerols and waxes. Complex lipids contain in addition a further component, and that component gives the molecule a polar head. Glycoacylglycerols carry a sugar, phosphoacylglycerols a phosphate and an organic base, and the sphingolipids are the sphingomyelins, the cerebrosides and the gangliosides. Derived lipids are everything else — prostaglandins, steroids, carotenoids and the lipophilic vitamins. They are practically all terpenes, with no fatty acid ester in them at all.”',
 tail:'通用教材切成 <b>saponifiable / non-saponifiable</b>，位置几乎一样，<b>但这本书没有这两个词</b>。要用就明说是 generally。'},

{q:'What are the roles of lipids in the body?',
 mean:'卷面第二个限定词。<b>书的五条，每条带一个例子。</b>',
 say:'“Five in the textbook. A component of biological membranes — the bilayer is built of complex lipids. The main storage form of carbon and energy — triacylglycerols in adipose tissue, into which any excess carbon in the diet, above all sugars, is converted. Precursors of other important substances. Cholesterol gives the bile acids and the sex hormones, arachidonate gives the prostaglandins, and the fat-soluble vitamins A, D, E and K are themselves lipids. An insulating barrier against thermal, electrical or other physical shock. And a protective coat against infection and dehydration.”'},

{q:'What is a phospholipid?',
 mean:'<b>骨架 ＋ 键 ＋ 头基 ＋ 为什么重要</b>，四句。',
 say:'“A complex lipid built on phosphatidic acid: glycerol with fatty acids esterified at positions one and two and a phosphate at position three. The individual phospholipids differ only in the group bound to that phosphate by a phosphoester bond — ethanolamine, choline, serine, glycerol or inositol. The textbook calls them the most abundant complex lipids in nature and says where they are: components of biological membranes of all types. And the point of them is amphipathy — the fatty acids the nonpolar region, the glycerol, phosphate and head group the polar one.”'},

{q:'What is cholesterol?',
 mean:'<b>先归类再说功能</b>：膜的刚性，和当前体。',
 say:'“A steroid, and more precisely a sterol. A sterol is a steroid with a hydrocarbon chain of eight to ten carbons at position seventeen and a hydroxyl at position three. Those sit on the sterane skeleton all steroids share. It is the most important sterol in animals, with two roles. Structural: from zero to forty per cent of the lipids of a membrane, and because the steroid skeleton is relatively inflexible it contributes significantly to membrane rigidity. And precursor: of the bile acids, which emulsify lipids in digestion, of the sex hormones, and in some organisms of vitamin D.”'},

{q:'Draw a triacylglycerol.',
 mean:'<b>边画边说</b>，顺序在速背 16。画完顺手提一句磷脂，把下一问先占住。',
 say:'“Glycerol first — three carbons written vertically, numbered one to three, each with a hydroxyl. Then each hydroxyl makes an ester with a fatty acid: the glycerol oxygen, a carbonyl carbon, then a zig-zag chain. Three esters and no ionisable group anywhere, which is why the textbook calls these neutral lipids. The natural ones are L-isomers. For a phospholipid I keep the esters at positions one and two, saturated at one and unsaturated at two. Then I replace the third by a phosphate carrying choline, ethanolamine, serine, inositol or glycerol.”'},

{q:'Why does butter go solid in the fridge and olive oil not?', odd:1,
 mean:'问的是<b>饱和度和熔点</b>。书 p178 有整条规则，也给了 fat / oil 的命名。',
 say:'“Because of which fatty acids are esterified on the glycerol. The textbook says it directly: saturated fatty acids give a lipid higher chemical stability and a higher melting point, unsaturated ones lower both, and the closer the double bond lies to the carboxyl the more it lowers them. Butter fat is largely saturated — palmitic sixteen-zero, stearic eighteen-zero. Olive oil is largely oleic acid, eighteen-one. The textbook names them by exactly that: a neutral fat when solid at room temperature, a neutral oil when liquid. Generally the reason is that a cis double bond kinks the chain so the chains cannot pack tightly.”'},

{q:'Why does soap get grease off your hands?', odd:1,
 mean:'问的是<b>两亲性</b>。书给两亲和疏水效应；肥皂和胶束是通用。',
 say:'“Because soap is amphipathic in exactly the way a phospholipid is — a hydrocarbon tail and a polar head. Amphipathy is the textbook’s word for that dual character. The tails bury themselves in the grease. The grease is triacylglycerol and has no polar part at all. The heads stay in the water, so the grease ends up in a particle with a water-friendly outside. Generally that particle is a micelle. The same trick unfolds proteins: the textbook lists detergents with urea and guanidine as chemical denaturants, because the tails get in between the nonpolar side chains and take away the hydrophobic effect holding the core together.”'},

{q:'Why do we have to eat some fats at all?', odd:1,
 mean:'两层：<b>必需脂肪酸</b>（p178）和<b>脂溶性维生素</b>（table 8.1 第 11 类）。',
 say:'“Two reasons in the textbook. First, two fatty acids are essential: the diet of mammals must contain linoleic acid, eighteen-two n-six, and alpha-linolenic acid, eighteen-three n-three. Anything longer or more unsaturated we build from those with elongases and desaturases — so the requirement is for a particular double-bond position, not for fat as fuel. Second, the lipophilic vitamins are class eleven of the textbook’s own table of lipids: A, D, E and K are lipids, so they arrive dissolved in dietary fat. Arachidonic acid matters for a third reason — it is the source of the eicosanoids.”'},

{q:'Why is cholesterol both necessary and dangerous?', odd:1,
 mean:'书<b>只给必需的那一半</b>，但也给了出口的瓶颈和医学的钩子。<b>危险那半要老实标 general。</b>',
 say:'“Necessary for two reasons the textbook gives. First, cholesterol is up to forty per cent of the lipids of a membrane, and because the steroid skeleton is inflexible it sets the membrane’s rigidity. Second, it is the primary precursor of the bile acids, the sex hormones and vitamin D. Dangerous because of the exit. The textbook says terpenoids including steroids are generally not metabolised as a source of energy and carbon. And it says cholesterol leaves the body only after conversion to bile acids. There is no way to burn it. It names the control point itself, HMG-CoA reductase, followed in medicine in connection with the therapy of atherosclerosis. That the drugs inhibiting it are the statins is general.”'},

{q:'Why do polar bears have a thick layer of fat under the skin?', odd:1,
 mean:'一次命中书的<b>两条功能</b>（第 2 和第 4 条），而且能把能量密度带出来。',
 say:'“It does two of the textbook’s five jobs at once: the insulating barrier against thermal shock, and the main storage form of carbon and energy. Fat is the right material because it is so reduced. The textbook’s figures for complete oxidation are minus eleven thousand three hundred and forty kilojoules per mole for palmitic acid against minus two thousand eight hundred and seventy for glucose. Divide by the molar masses, two hundred and fifty-six and one hundred and eighty, and that is about forty-four kilojoules per gram against about sixteen. And generally fat is stored without water while glycogen is hydrated.”'},

{q:'Why does someone who is starving smell of acetone?', odd:1,
 mean:'<b>酮体。</b>书 p195 把整条链写全了，包括气味和结局。',
 say:'“Because fatty acids are being burned faster than the acetyl-CoA can be used. The textbook says that in diabetes, in starvation or on a fat-rich diet acetyl-CoA is overproduced, because not all of it can be used in the citrate cycle. The excess is converted in liver cells to HMG-CoA, and part of that becomes acetoacetate. Acetoacetate is either reduced enzymatically to beta-hydroxybutyrate or decarboxylated non-enzymatically to acetone. When those pathways are abnormally active the products appear in the blood as ketone bodies, and the blood pH falls — acidosis and ketosis. And the textbook says acetone is smelled on the breath.”'},

{q:'Why can you get fat from eating sugar, but not sugar from eating fat?', odd:1,
 mean:'书 <span class="pg">p220</span> 有一句完整答案，理由是<b>一个缺失的酶反应</b>，不是泛泛的代谢。',
 say:'“Because both meet at acetyl-CoA but the traffic is one-way. Sugars go to pyruvate and then to acetyl-CoA, and when the cell’s energy demand is low acetyl-CoA is used mainly for fatty-acid and fat synthesis. So an excess of either nutrient is converted to fat and stored, and the glycerophosphate for it comes from sugar metabolism. Going back is blocked: the textbook says the animal organism cannot convert acetyl-CoA to pyruvate, the starting compound for sugar synthesis, and therefore cannot make sugars from fats. Glycerol is the one exception — it is oxidised to a triose and enters carbohydrate metabolism.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'这一章的词他默认你知道，而且它们互相定义。每个一句。', items:[
{r:'高', q:'What does amphipathic mean?',
 en:'“One molecule with two regions of opposite character. The textbook’s wording for a phospholipid: a nonpolar hydrophobic region represented by the fatty acid, and a polar hydrophilic region represented by the glycerol, the phosphoric acid and the functional group. It calls this dual character amphipathy. It adds that acylglycerols alone are barely amphipathic, and that choline, ethanolamine and serine carry an electric charge at physiological pH.”',
 cn:'<span class="pg">p181</span>，<i>amphipathy</i> 全书唯一一处。同一条在<b>横向卡 bonds</b> 和<b>卡 01</b> 疏水效应的追问里。'},
{r:'高', q:'What is a ceramide?',
 en:'“Sphingosine with a fatty acid on it, and the bond is the point. Although sphingosine carries two hydroxyls, the fatty acid is bound through the <b>amino</b> group, as an amide. Sphingosine itself is an unsaturated eighteen-carbon amino-dialcohol. The ceramide is the common core of the whole sphingolipid group: add phosphorylcholine by an ester bond for sphingomyelin, a sugar by an O-glycosidic bond for a cerebroside, or a chain containing sialic acid for a ganglioside.”',
 cn:'<span class="pg">p181</span>。<b>「两个羟基却用氨基」是书自己强调的</b>，也是这一章唯一的酰胺键。'},
{r:'中', q:'Sterol, steroid, sterane — which is which?',
 en:'“Three levels. <b>Sterane</b> is the skeleton, the fused alicyclic rings all steroids share. A <b>steroid</b> is any compound on that skeleton. The diversity comes from different desaturation and different oxygen-containing groups. A <b>sterol</b> is the subclass with a hydrocarbon chain of eight to ten carbons at position seventeen and a hydroxyl at position three. The examples are cholesterol in animals, and stigmasterol, ergosterol and sitosterol in plants.”',
 cn:'<span class="pg">p184 p185</span>。<b>sterol 和 steroid 最容易说反</b>——判据一句：有那个 C-3 羟基的才叫 sterol。'},
{r:'中', q:'What is an isoprenoid, and what are the fat-soluble vitamins doing here?',
 en:'“An isoprenoid is a compound built from the five-carbon unit isoprene — the textbook’s alternative name for the terpenes. And it says the subgroups follow consistently from the biosynthesis: five carbons isopentenyl pyrophosphate, ten geranyl, fifteen farnesyl, thirty squalene, and the tetraterpenes giving the carotenoids. Vitamins A, D, E and K are class eleven of its own table of lipids, and they belong here because they are isoprenoids or come from them. Phytol carries vitamin K, carotene gives retinol by symmetrical cleavage, and ultraviolet light opens ring B of 7-dehydrocholesterol to give cholecalciferol.”',
 cn:'<span class="pg">p182 p183 p184 p186 p187 p192</span>。通式 (C₅H₈)ₙ 是书给的。<b>这条同时是题库 #31（维生素）的一半</b>——水溶性那一半在第 3 章辅酶表（<span class="pg">p043</span>）。'}
]},

{g:'为什么类', gn:'卡上给了结论没给理由的地方。每条先说书有没有。', items:[
{r:'高', q:'Why do fatty acids have an even number of carbons?',
 en:'“Because of how they are made, not what they are. The textbook shows the acyl chain growing on the multienzyme complex always by two carbon atoms at a time, and the two-carbon donor is acetyl, delivered as malonyl-CoA. Palmitate, sixteen carbons, is eight acetyl units and seven cycles. Odd-numbered fatty acids, it says, are less common. When one is broken down the leftover is propionyl-CoA, extended to succinyl-CoA and joining the citrate cycle.”',
 cn:'<span class="pg">p189 p195</span>。<b>书没有把「偶数」和「二碳生长」连成一句</b>——这个连接是卡上做的，说出来的是书的两个事实，不是书的结论。'},
{r:'高', q:'Why does a double bond lower the melting point?',
 en:'“The textbook states the rule and not the mechanism: unsaturated fatty acids lower the chemical stability and the melting point, and the nearer the double bond to the carboxyl the more it lowers them. Generally the reason is geometry. A cis double bond puts a permanent kink in the chain, so neighbouring chains cannot lie against each other along their whole length. Read the other way it is membrane fluidity: the more saturated and the longer the chains, the lower the fluidity of the bilayer.”',
 cn:'<span class="pg">p178 p198</span>。<b>「cis 打折」是通用的，要带 generally</b>；书只给规则和后果。'},
{r:'高', q:'Why is fat a better store than glycogen?',
 en:'“Because it is more reduced, and because it is dry. The textbook’s figures for complete oxidation: minus eleven thousand three hundred and forty kilojoules per mole for palmitic acid against minus two thousand eight hundred and seventy for glucose. Divided by the molar masses, that is about forty-four kilojoules per gram against about sixteen. A fatty acid is a chain of CH₂ groups with no oxygen, while every carbon of glucose already carries one. So there is more hydrogen to hand to NAD⁺ and FAD. Generally, fat is stored anhydrous and glycogen hydrated.”',
 cn:'两个摩尔数是 <span class="pg">p135</span> 印的；<b>每克的数是除出来的，说时要把除法说出来</b>；「无水」是通用。同一条在<b>卡 24</b>。'},
{r:'中', q:'Why do phospholipids make membranes but triacylglycerols make droplets?',
 en:'“Because only one of the two has a head. The textbook says the amphipathic character of the acylglycerols alone is very weak, because three fatty acids on glycerol leave no polar region. So in water they can only minimise their own surface, and that is a droplet. A phospholipid replaces one chain by a phosphate and a polar head, giving a molecule that can sit at a boundary. The textbook adds that the structural basis of membranes is formed predominantly by the complex lipids.”',
 cn:'<span class="pg">p181 p198</span>。<b>这条把两类脂的功能差别压回一个结构差别上</b>——是这道题最容易得分的一句 why。'}
]},

{g:'怎么发现的', gn:'⚠ 这一格书里几乎没有，人名年份全是通用。<b>出处要说清，不要说成书上的。</b>', items:[
{r:'中', q:'How do we know a membrane is a bilayer and not a single layer?',
 en:'“Generally — the textbook gives the bilayer as a fact, not the evidence. The classical experiment was done in the nineteen-twenties. Extract the lipid from a known number of red blood cells, spread it as a single molecular layer on a water surface, and measure the area. It came out about twice the total surface of the cells. The textbook’s own support is structural instead — two monolayers tail to tail, a nonpolar middle and two polar surfaces, three and a half to four nanometres. That thickness is about two extended chains.”',
 cn:'<span class="pg">p198</span> 只有结构和厚度。<b>Gorter 与 Grendel 的名字和 1925 书里零命中</b>，卡上也不写人名，只说 “in the nineteen-twenties”——<b>报不出人名比报错人名安全。</b>'},
{r:'中', q:'Where does the fluid mosaic model come from?',
 en:'“The textbook uses the term: it says the components of biological membranes are in constant motion, and it speaks of the model of a fluid mosaic. Proteins move rotationally or laterally in the plane, while a flip-flop in the true sense has not been found for proteins, only for lipids. That the model was proposed in the early nineteen-seventies is general. The textbook gives no author and no date.”',
 cn:'<span class="pg">p198 p199</span>。<b>书对翻转机制自己承认不懂</b>：<i>its biological significance has so far not been precisely defined</i>——引这句比硬编一个功能安全。'}
]},

{g:'陷阱', gn:'最容易被抓的是几对邻近的名字，和三个听起来很对的结论。每条一句判据。', items:[
{r:'高', q:'Fat and lipid — the same thing?',
 en:'“No. <b>Lipid</b> is the whole class, defined by solubility — eleven classes in the textbook’s table. <b>Fat</b> is one thing inside it: a triacylglycerol, and in the textbook’s own usage one that is solid at room temperature. It writes that acylglycerols, having no ionisable group, are neutral lipids, called neutral fats when solid and neutral oils when liquid. So every fat is a lipid, no cholesterol and no phospholipid is a fat, and a fat and an oil differ only in which fatty acids are on the glycerol.”',
 cn:'<span class="pg">p176 p178</span>。<b>这对在捷克语里更容易混</b>：书开篇就说 <i>lipos</i> = tuk，而 tuk 恰恰又是「脂肪」那个窄义词。'},
{r:'高', q:'Cholesterol is a fat, isn’t it?',
 en:'“No, on two counts. It is not a fat — a fat is a triacylglycerol, and cholesterol has no glycerol and no fatty acid in it. And it is not even an ester. It is a sterol, an alcohol, with a free hydroxyl at position three on the sterane skeleton. So it sits in the derived lipids, the group whose table entry lists no hydrolysis products at all. Cholesterol esters do exist, and the textbook says its esters take part in the transport of lipids. But cholesterol itself is the free alcohol.”',
 cn:'<span class="pg">p176 p184 p185</span>。<b>「不可皂化」正是这个意思</b>，但那个词不是书的，要说带 generally。'},
{r:'高', q:'So lipids are polymers of fatty acids?',
 en:'“No — and this is the one class of biomolecule that is not a polymer. A protein, a nucleic acid and a polysaccharide are chains of repeating monomers joined end to end. A triacylglycerol is three fatty acids hung on one glycerol by three separate esters, and a phospholipid is an assembly of four different kinds of piece. Nothing repeats and nothing extends. One qualification, and it is the textbook’s own. It describes the terpenes as an extensive group of substances on the basis of polymers, with isoprene as the monomer unit. So inside the derived lipids there is a repeating unit, though there is none in a fat or a phospholipid.”',
 cn:'<b>书自己在 <span class="pg">p182</span> 用了 polymer 这个词</b>（<i>polymer-based</i>），所以「脂不是聚合物」<b>不能说死</b>——LOGIC §18 的教训：封闭清单要先在全书搜反例。<b>这句限定词说出来是加分的，不是麻烦。</b>'},
{r:'高', q:'Unsaturated means trans, and trans is what makes it liquid?',
 en:'“The other way round. The textbook says natural fatty acids have their double bonds mostly in the <b>cis</b> configuration, and it is the cis geometry that lowers the melting point. The evidence is inside the book. It says the beta-oxidation enzymes require <b>trans</b> isomers. That is precisely why a natural cis-unsaturated fatty acid needs a cis-trans isomerase before it can be broken down. Generally, trans fatty acids in food come from industrial hydrogenation and behave more like saturated ones. The textbook does not discuss that.”',
 cn:'<span class="pg">p177 p195</span>。<b>书自己的 β-氧化那段就是证据——用书的一半打书的另一半，比引外部权威稳。</b>'},
{r:'中', q:'Are the phospholipid heads neutral?',
 en:'“No. The textbook is explicit: choline, ethanolamine and serine can carry an electric charge at physiological pH. And it says this plays a very significant role in how phospholipids work in membranes. Its figure labels the head as the <b>ionisable</b> polar hydrophilic head against the non-ionisable nonpolar hydrophobic tail. Generally, phosphatidylcholine and phosphatidylethanolamine are zwitterionic, and phosphatidylserine, phosphatidylinositol and phosphatidylglycerol net negative. The textbook does not go head by head.”',
 cn:'<span class="pg">p180 p181</span>。<b>哪个头带什么电是通用的</b>，书只说「有些能带电」。<b>不要把逐个电荷说成书上的。</b>'},
{r:'中', q:'Glycolipids have no phosphate, so they cannot be amphipathic?',
 en:'“They are, and the textbook says so in exactly that form: cerebrosides and gangliosides have amphipathic character although they contain no phosphoester group. The polar head is the sugar, often including N-acetylneuraminic acid, strongly hydrophilic or even charged. And the tail is emphasised by long fatty acids, C twenty-four, up to eighty per cent of the fatty-acid content. So what makes a head is polarity, not phosphate.”',
 cn:'<span class="pg">p181</span>；C₂₄ 与 80% 已回原图核。<b>这条检验「极性头」那个判据是不是真懂了</b>——判据是极性，不是某一个基团。'}
]},

{g:'相邻考点', gn:'后门有三个：<b>膜</b>（§8.5，就在页范围里）、<b>β-氧化</b>、<b>脂肪酸合成</b>。每个两句够挡。', items:[
{r:'高', q:'How is a membrane built, and what holds it together?',
 en:'“Proteins and lipids, weight ratio one to four up to three to one. Plus carbohydrates at half a per cent to ten per cent, always as glycoproteins or glycolipids. The structure is the lipid bilayer: tails in contact with tails and heads with heads, the monolayers tail to tail, a markedly nonpolar middle and two polar surfaces, three and a half to four nanometres thick. And the textbook is emphatic: the interactions of heads and tails are <b>exclusively noncovalent</b>. The proteins are of two kinds. Peripheral proteins interact only with the polar heads and are relatively easy to release. Integral proteins are held by hydrophobic interaction with the fatty-acid tails.”',
 cn:'§8.5.1–8.5.2 <span class="pg">p198 p199</span>。<b>这是最可能的后门，先把四个数记住。</b>膜蛋白的功能分类（结构型 / 动态型：转运、催化、受体）在 <span class="pg">p200</span>。'},
{r:'高', q:'How is a fatty acid broken down?',
 en:'“By beta-oxidation, in the mitochondrial matrix, which the textbook says holds all four enzymes needed for one cycle. The acid is first activated to a thioester with coenzyme A by a thiokinase, costing one ATP. Then two carbons come off the carboxyl end per cycle, in four steps. One, dehydrogenation by acyl-CoA dehydrogenase with FAD, producing only trans isomers. Two, hydration by enoyl-CoA hydratase, which requires trans and gives only L-isomers. Three, dehydrogenation by beta-hydroxyacyl-CoA dehydrogenase with NAD⁺. Four, thiolytic cleavage with CoASH, releasing acetyl-CoA. Its example is stearic acid: eight cycles, nine acetyl-CoA, eight FADH₂ and eight NADH.”',
 cn:'§8.4.4 <span class="pg">p195 p196</span>；总账 <span class="pg">p220</span>：<b>投入</b> 1 acyl-CoA（活化已耗 1 ATP）＋ 每切一次 1 FAD ＋ 1 NAD⁺；<b>产出</b> 每切一次 1 acetyl-CoA ＋ 1 FADH₂ ＋ 1 NADH；<b>总结</b> 脂肪酸只被交付成 acetyl-CoA，真正兑成 ATP 是<b>卡 24</b> 和<b>卡 25</b> 的事。',
 warn:'<b>⚠ 书把第四步的酶印成 β-ketokinase（已回 280 dpi 原图核，不是 OCR 错）。</b>但书自己把这一步画成 <i>thiolytic cleavage</i>，加的是 CoASH，不是磷酸——<b>激酶转磷酸，这一步不转磷酸</b>。通用名是 <b>thiolase（β-ketothiolase）</b>。考场说法：“The textbook labels it beta-ketokinase, but the step it draws is a thiolytic cleavage with coenzyme A, so generally this enzyme is called a thiolase.” <b>用书的图打书的字。</b>'},
{r:'高', q:'And how is one made?',
 en:'“On a soluble multienzyme complex in the cytoplasm, and the textbook lists the differences rather than letting you assume symmetry. The carrier is not coenzyme A but <b>ACP</b>, acyl carrier protein, with two different SH groups. The chain cannot be extended by acetyl directly: acetyl-CoA is first carboxylated to <b>malonyl-CoA</b> by acetyl-CoA carboxylase, ATP-dependent and requiring <b>biotin</b>. Then four steps per cycle — condensation releasing CO₂, reduction, dehydration, reduction. And the reductant is <b>NADPH</b> where degradation gave NADH. Seven cycles give palmitate. The balance is eight acetyl-CoA, seven ATP and fourteen NADPH.”',
 cn:'§8.3 <span class="pg">p187 p188 p189 p190</span>；四条对照在 <span class="pg">p220</span>。三个区室也是书的：<b>饱和链到 C18 在细胞质、延长酶在线粒体基质、去饱和酶在内质网</b>。NADPH 从哪来 → 戊糖磷酸途径（<span class="pg">p163</span>，<b>卡 06</b>）。'},
{r:'中', q:'What are the phospholipases?',
 en:'“The hydrolases that take phospholipids apart. The textbook classifies them by which bond they cut, using phosphatidylcholine as the map. <b>Phospholipase A one</b> takes the fatty acid off position one, and <b>A two</b> off position two. <b>C</b> cuts between the glycerol and the phosphate, and <b>D</b> between the phosphate and the head group. Four names for four bonds on one molecule — which is also a compact way of saying what a phospholipid is made of.”',
 cn:'§8.4.2 <span class="pg">p193</span>；蛇毒含水解磷脂的酶 <span class="pg">p039</span>。<b>磷脂酶 C 还是信号通路的入口</b>：激素结合膜受体后活化磷酸肌醇酶（磷脂酶 C）（<span class="pg">p224</span>）——接题库 #32。'}
]},

{g:'桥回主场', gn:'他顺着这些走，就走到你答得住的地方。', items:[
{r:'高', q:'You said you break membranes — how, exactly?',
 en:'“With a detergent, which has the same design as a phospholipid: a hydrocarbon tail and a polar head. It competes for the hydrophobic tails and breaks the bilayer into mixed particles carrying the protein. The choice matters because of what the textbook says holds the two kinds of membrane protein. A <b>peripheral</b> protein interacts only with the polar heads and can be released fairly simply. An <b>integral</b> protein is held by hydrophobic interaction between its nonpolar side chains and the fatty-acid tails. A mild non-ionic detergent keeps it folded, and a strongly ionic one unfolds it. The textbook lists detergents among the chemical denaturants.”',
 cn:'<span class="pg">p199 p035</span>。<b>non-ionic vs ionic、以及「拿掉去污剂就聚集」都是通用的</b>，说时带 generally。变性那条在<b>卡 01</b> 和<b>横向卡 bonds</b>。'},
{r:'中', q:'Does anything in this chapter interfere with your purification?',
 en:'“Two things. From a Gram-negative host the outer membrane carries <b>lipopolysaccharide</b>, and its lipid part is <b>lipid A</b>, the endotoxin. It is amphipathic, it sticks to proteins and it has to be removed. The textbook does not describe it, but it does say the carbohydrates of a membrane are always present as glycoproteins or glycolipids, and it names lipopolysaccharides among the sugar-bearing lipids. The second is the opposite problem. Express in yeast instead and the protein goes through the secretory pathway, so the lipid question turns into a glycan question. That is a different card.”',
 cn:'<b>lipid A / endotoxin 书里零命中</b>，只有 <span class="pg">p148</span> 的 <i>lipopolysaccharides</i> 和 <span class="pg">p198</span> 的「膜糖只以糖蛋白或糖脂形式存在」。<b>说时明说 generally。</b>糖那一路是<b>卡 13</b> 和<b>卡 06</b>。'},
{r:'中', q:'Why express a surface protein in yeast rather than in E. coli, in lipid terms?',
 en:'“Because a membrane is not just a barrier, it is a compartment boundary, and the compartments are what a eukaryote has. The textbook makes the point that eukaryotic cells further divide their internal space with membranes, and that individual membranes are specialised. Only the inner mitochondrial membrane makes ATP, and only certain membranes bind certain hormones. A protein destined for a cell surface is folded and modified as it crosses those membranes, and a bacterium has nowhere to do that.”',
 cn:'<span class="pg">p197</span>。<b>这条把「膜」从一句结构事实抬成一句生物学论点</b>，落点正好在你日常做的事上。二硫键和糖基化那两条理由在<b>卡 13</b>。'}
]}
]
});
