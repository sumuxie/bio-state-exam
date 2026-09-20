/* 横向卡 · 官能团 —— 糖、脂质、蛋白那几张卡底下没铺的那层地。
   2026-09-20 Ruojin：「我现在还是不知道什么醇 醛 这些的定义，acyl 所以看见一万遍都觉得没学会，
   不是词根的问题，是我真的不会有机化学」，以及「这些化学物质就算有区别 为啥有区别呢？
   这些区别有多大的影响？而不是只是名字不一样？那你直接画个图 大整合图什么的
   就写xx的基本原理/本质 会发生什么/体现在这门科目的哪里」「把我当作白痴来教吧」。
   ⚠ 她在终端里读 ASCII 结构式读不了（「都没办法对齐」），所以这张卡的结构式全是内联 SVG。
   ⚠ 她问过「ester 这个也是糖？不是脂质吗」——酯和缩醛长得像，第 11 点专门分辨。
   这张卡不按官能团清单排，按**两根轴**排：挂了多少氧（决定能量）、羰基碳被谁攻击（决定生成什么键）。
   接卡 06（糖成环、还原糖、异头碳）、23（脂质）、01（肽键）、x-meta（能量密度）、
   pe-pur（等电点和离子交换）、x-bonds（键的种类）、x-rxn（反应族）。 */

window.CARDS.push({
id:'x-fg', cross:1, w:0,
q:'有机化学那几张图 —— 醇醛酮酸酯酰胺缩醛到底差在哪',
qcn:'横向卡 · 不是一门课，是两根轴：挂了多少氧决定能量，羰基碳被谁攻击决定生成什么键',
sub:'跨题共用 · 糖、脂质、蛋白、代谢四块卡底下共用的那一层 · 接卡 06、23、01、x-meta、pe-pur',

cram:[
 {g:'大整合图 · 先看这一屏，别的都从这里长出来', gn:'碳骨架只是个架子，本身什么都不干。<b>反应只发生在挂在它上面的那一小块，那一小块叫官能团。</b>整门课的有机部分只有两根轴。'},

 {n:'01', t:'两根轴',
  ez:'“A functional group is the small reactive piece. It is attached to a carbon skeleton. The skeleton itself does almost nothing. I sort the groups by two axes. The first is how much oxygen the carbon carries. That sets how much energy is left in it. The second is what attacks a carbonyl carbon. That sets what bond is formed.”',
  ezcn:'<b>官能团 ＝ 挂在碳骨架上那一小块活泼部分，骨架本身几乎什么都不干。</b><b>我用两根轴给它们分类</b>：<b>① 那个碳挂了多少氧——决定它里面还剩多少能量</b>；<b>② 羰基碳被谁攻击——决定生成什么键。</b>',
  big:'<b>轴一：挂了多少氧 → 决定能量。轴二：羰基那个碳被谁攻击 → 决定生成什么键。</b>',
  en:'“A functional group is the small reactive piece attached to a carbon skeleton. The skeleton itself does almost nothing. I sort the groups by two axes. How much oxygen the carbon carries, which sets how much energy is left in it. And what attacks a carbonyl carbon, which sets what bond is formed.”',
  note:'<svg viewBox="0 0 470 210" style="width:100%;max-width:470px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><text x="150" y="16" font-size="13">碳骨架 —— 只是个架子</text><g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M150 26 h18 l10 10 l10 -10 h18 l10 10 l10 -10 h18"/></g><text x="152" y="58" font-size="12" fill="var(--faint)">本身什么都不干</text><g stroke="currentColor" stroke-width="1.5"><line x1="235" y1="64" x2="235" y2="80"/></g><text x="163" y="94" font-size="13.5" font-weight="700">挂在上面的 = 官能团</text><text x="150" y="110" font-size="12" fill="var(--faint)">反应只发生在这里</text><g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M235 116 v14 h-125 v12"/><path d="M235 116 v14 h125 v12"/></g><text x="32" y="150" font-size="13.5" font-weight="700">① 挂了多少氧</text><text x="32" y="168" font-size="12.5">＝ 氧化程度 ＝ 能量</text><text x="32" y="192" font-size="12.5" fill="var(--accent)">CH₂ → OH → C＝O → COOH → CO₂</text><text x="285" y="150" font-size="13.5" font-weight="700">② 羰基碳被谁攻击</text><text x="285" y="168" font-size="12.5">＝ 生成什么键</text><text x="285" y="192" font-size="12.5" fill="var(--accent)">醇→酯 · 胺→酰胺 · 醇→缩醛</text></svg>',
  good:'<b>这一屏是这张卡的全部。</b>下面每一点都只是把这两根轴里的一格画开。'},

 {n:'02', t:'轴一 · 氧越多，能量越低',
  ez:'“Oxidation here does not mean adding oxygen. It means losing electrons. Each step down this ladder does the same thing. It strips two electrons off the same carbon. Those electrons are carried away. They are spent making A T P. So a carbon can already sit far down the ladder. Then less energy is left in it.”',
  ezcn:'<b>这里的「氧化」不是指加氧，是指失去电子。</b><b>这架梯子每往下一级，都从同一个碳上剥走两个电子；那两个电子被带走，花在制造 ATP 上。</b><b>所以一个碳已经落得越低，它里面剩下的能量就越少。</b>',
  big:'每往下一级，那个碳<b>丢掉两个电子</b>。电子被 NAD⁺ 或 FAD 接走，送进电子传递链换 ATP',
  en:'“Oxidation here does not mean adding oxygen. It means losing electrons. Each step down this ladder strips two electrons off the same carbon, and those electrons are carried away and spent making ATP. So a carbon can already sit far down the ladder. Then less energy is left in it.”',
  note:'<svg viewBox="0 0 430 176" style="width:100%;max-width:430px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="15"><g stroke="currentColor" stroke-width="1.5"><line x1="266" y1="14" x2="266" y2="158"/><path d="M266 158 l-5 -10 M266 158 l5 -10" fill="none"/></g><text x="8" y="26">CH₃—CH₃</text><text x="120" y="26" font-size="13" fill="var(--faint)">烷 · 只有碳和氢</text><text x="284" y="22" font-size="12.5">最还原</text><text x="284" y="38" font-size="12.5" fill="var(--accent)">能量最高</text><text x="8" y="62">CH₃—CH₂—OH</text><text x="120" y="62" font-size="13" fill="var(--faint)">醇 · 一个氧</text><text x="8" y="98">CH₃—CHO</text><text x="120" y="98" font-size="13" fill="var(--faint)">醛 · 氧变成双键</text><text x="8" y="134">CH₃—COOH</text><text x="120" y="134" font-size="13" fill="var(--faint)">羧酸 · 两个氧</text><text x="8" y="168">O＝C＝O</text><text x="120" y="168" font-size="13" fill="var(--faint)">二氧化碳 · 全是氧</text><text x="284" y="156" font-size="12.5">最氧化</text><text x="284" y="172" font-size="12.5" fill="var(--accent)">能量最低 · 废物</text></svg><br><b>这就是为什么脂肪比糖能量高。</b>脂肪酸是一长串 CH₂，几乎不带氧，停在梯子最上面，所以能榨出最多电子，<b>9 kcal/g</b>；糖每个碳上都挂着 OH，已经氧化了一半，<b>4 kcal/g</b>。<b>那个数字不用背，它是这张梯子的后果。</b>接卡 <b>x-meta</b>、<b>23</b>。'},

 {n:'03', t:'轴二 · 羰基那个碳是个靶子',
  ez:'“Oxygen pulls electrons harder than carbon does. In a carbonyl the double bonded oxygen drags electron density away. So that carbon is left short of electrons. Anything with a lone pair will attack it. An alcohol will. An amine will. Water will too. Every linkage in this card is that one move.”',
  ezcn:'<b>氧抢电子比碳厉害。</b><b>羰基里那个双键氧把电子密度拽走，于是那个碳缺电子</b>——<b>任何带孤对电子的东西都会来攻击它：醇、胺、水</b>。<b>这张卡上的每一种连接，都是这同一个动作。</b>',
  big:'氧比碳抢电子。双键氧把电子拽走，<b>那个碳就缺电子</b>。谁有多余的电子，谁就来攻击它',
  en:'“Oxygen pulls electrons harder than carbon does. In a carbonyl the double bonded oxygen drags electron density away, so that carbon is left short of electrons. Anything with a lone pair will attack it. An alcohol, an amine, or water. Every linkage in this card is that one move.”',
  note:'<svg viewBox="0 0 330 118" style="width:100%;max-width:330px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="17"><text x="46" y="24">O</text><text x="64" y="24" font-size="12" fill="var(--faint)">δ−</text><g stroke="currentColor" stroke-width="1.6"><line x1="48" y1="32" x2="48" y2="52"/><line x1="56" y1="32" x2="56" y2="52"/><line x1="18" y1="68" x2="40" y2="68"/></g><text x="4" y="74">R</text><text x="44" y="74">C</text><text x="42" y="96" font-size="12" fill="var(--faint)">δ＋</text><g stroke="var(--accent)" stroke-width="1.8" fill="none"><path d="M148 68 h-70"/><path d="M78 68 l11 -6 M78 68 l11 6"/></g><text x="156" y="74" font-size="14" fill="var(--accent)">有孤对电子的东西来攻击</text></svg><br><b>攻击者是谁，就生成什么键：</b>',
  tbl:{head:['攻击它的是','生成','在这门课的哪里'],
       rows:[['醇 R—OH','<b>酯 ester</b>','三酰甘油、磷脂、脂肪酶'],
             ['胺 R—NH₂','<b>酰胺 amide</b>','<b>肽键</b>、整个蛋白质'],
             ['分子内自己的醇','<b>半缩醛 hemiacetal</b>','<b>糖成环</b>、异头碳'],
             ['再来一个醇','<b>缩醛 acetal</b>','<b>糖苷键</b>、蔗糖、淀粉']]},
  good:'<b>脂肪、蛋白质、糖，三大类分子的连接方式是同一个反应。</b>而且都是<b>脱一个水</b>连上、<b>加一个水</b>拆开——所以消化酶全叫<b>水解酶 hydrolase</b>：脂肪酶水解酯键、蛋白酶水解酰胺键、淀粉酶水解糖苷键。<b>三个酶，一个动作。</b>'},

 {g:'一个一个看 · 每个只给三样', gn:'<b>长什么样 · 本质是什么 · 会发生什么。</b>R 就是「后面还连着别的东西」，不用管它。'},

 {n:'04', t:'醇 alcohol',
  big:'一个氧，两边各接一个：<b>一边碳，一边氢</b>',
  en:'“An alcohol is a hydroxyl group on a carbon. The oxygen holds lone pairs, so it gives hydrogen bonds and it can attack a carbonyl carbon.”',
  note:'<svg viewBox="-12.93 43.76 174.035 62.52" style="width:100%;max-width:174.035px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="81" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">羟基 hydroxyl ＝ —O—H</text></svg><br><b>这根键长什么样</b>：<b>—O—H</b>，一个氧，一边接碳、一边接氢。<br><b>那块 —O—H 叫羟基 hydroxyl。</b><br><b>会发生什么</b>：① <b>溶于水</b>（能给氢键）；② 能被氧化成醛或酮；③ <b>它能去攻击羰基碳</b>——酯和缩醛都是它干的。<br><b>在哪儿</b>：糖上挂满了它，所以糖溶于水。甘油有三个。'},

 {n:'05', t:'醛 aldehyde',
  big:'羰基<b>在链的末端</b>——那个碳上还留着一个 <b>H</b>',
  en:'“An aldehyde is a carbonyl at the end of a chain, so the carbonyl carbon still carries a hydrogen. That hydrogen is easy to take off, which is why an aldehyde is easy to oxidise to an acid.”',
  note:'<svg viewBox="-12.93 -0.24 175.85 106.52" style="width:100%;max-width:175.85px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="54" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">醛 · 羰基在链的末端</text><text x="108" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--faint)">所以还留着一个 H</text></svg><br><b>这个基团长什么样</b>：<b>—C(＝O)—H</b>，羰基碳的一个邻居是氢。<br><b>会发生什么：那个 H 容易被拿掉 → 很容易被氧化成羧酸。</b><br><b>在哪儿</b>：<b>还原糖</b>就是这件事——糖上那个醛能被氧化，所以它能把别的东西还原。Fehling、Benedict 试剂变色测的就是它。接卡 <b>06</b>。'},

 {n:'06', t:'酮 ketone',
  big:'羰基<b>在链的中间</b>——两边都是碳，<b>没有那个 H</b>',
  en:'“A ketone is a carbonyl in the middle of a chain, with carbon on both sides. There is no hydrogen on that carbon to remove, so a ketone is not easily oxidised.”',
  note:'<svg viewBox="-12.93 -0.24 181.6 106.52" style="width:100%;max-width:181.6px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="54" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酮 · 羰基在链的中间</text><text x="108" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--faint)">两边都是碳，没有 H</text></svg><br><b>这个基团长什么样</b>：<b>—C(＝O)—</b>，羰基碳两边的邻居都是碳。<br><b>醛和酮的全部区别就是那个 H 在不在。</b>在 → 容易被氧化 → 还原糖；不在 → 不容易 → 不是还原糖。<br><b>在哪儿</b>：果糖是酮糖。酮体也是。'},

 {n:'07', t:'羧酸 carboxylic acid ＝「酸」',
  big:'<b>这两个词是同一个东西。</b>同一个碳上：一边双键接氧，一边单键接 O—H',
  en:'“A carboxylic acid carries a double bonded oxygen and a hydroxyl on the same carbon. That whole piece is the carboxyl group. It gives up its proton easily, so at the pH inside a cell it is negatively charged.”',
  note:'<svg viewBox="-12.93 -0.24 225.875 106.52" style="width:100%;max-width:225.875px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">羧基 carboxyl ＝ —C(＝O)—O—H</text></svg><br><b>这个基团长什么样</b>：<b>—C(＝O)—O—H</b>，同一个碳上一个双键氧 ＋ 一个羟基。<br>⚠ <b>我上次一会儿写「羧酸」一会儿写「酸」，那是同一个东西</b>，全名和简称。那一整块 —C(=O)—O—H 叫<b>羧基 carboxyl</b>。<br><b>会发生什么：它会放掉那个 H⁺</b>，在生理 pH 下变成 <b>—COO⁻，带负电</b>。<br><b>在哪儿</b>：脂肪酸的那一头、氨基酸的「酸」那一头。'},

 {n:'08', t:'胺 amine，和氨基 amino',
  big:'氨 NH₃ 的一个 H 换成碳链，就是胺。<b>那块 —NH₂ 叫氨基</b>',
  en:'“Ammonia is nitrogen with three hydrogens. Replace one hydrogen with a carbon chain and it is an amine. The nitrogen still holds a lone pair, so it takes up a proton, and at the pH inside a cell it is positively charged.”',
  note:'<svg viewBox="-21.85 43.76 151.7 106.52" style="width:100%;max-width:151.7px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="54" y1="75" x2="54" y2="93"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">N</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="106" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="136" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">氨基 amino ＝ —N—H₂</text></svg><br><b>这个基团长什么样</b>：<b>—N—H₂</b>，氮挂在一个<b>普通碳</b>上（不是羰基碳）。<br><b>amine 是分子的名字，amino 是基团的名字。</b>一个说「这是什么分子」，一个说「这上面挂着什么」。<b>氨基酸 amino acid ＝ 一头挂 amino、一头挂 acid 的分子。</b><br><b>会发生什么：它接 H⁺</b>，在生理 pH 下变成 <b>—NH₃⁺，带正电</b>。'},

 {n:'09', t:'酰基 acyl —— 一个词解开一串',
  big:'<b>羧酸去掉那个 O—H，剩下的这一块</b>。它自己不能单独存在，永远接在别的东西上',
  en:'“An acyl group is what is left of a carboxylic acid after the hydroxyl is removed. It never stands alone. Whatever it is attached to gives the compound its name.”',
  note:'<svg viewBox="-25.185 -0.24 205.435 106.52" style="width:100%;max-width:205.435px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/><line x1="70" y1="62" x2="100" y2="62"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="132" y="62" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--faint)">接在别的东西上</text><text x="54" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酰基 acyl ＝ —C(＝O)—</text></svg><br><b>这一块长什么样</b>：<b>R—C(＝O)—</b>，右边那根键永远接着别的东西。<br><b>就这一个词，解开下面全部：</b>acyl-CoA（酰基挂在辅酶 A 上）· tri<b>acyl</b>glycerol（三个酰基挂在甘油上）· <b>acyl</b>transferase（把酰基搬来搬去的酶）· N-<b>acyl</b>ation（把酰基挂到氮上）。'},

 {n:'10', t:'酯 ester ＝ 酸 ＋ 醇',
  big:'酸的 <b>H</b> 和醇的 <b>O—H</b> 掉下来合成水，剩下两块接上。<b>羧基里原来 H 的位置，现在坐着一根碳链</b>',
  en:'“An ester is a carboxylic acid joined to an alcohol with the loss of one water. The hydrogen of the acid and the hydroxyl of the alcohol leave together, and the two remaining pieces join.”',
  note:'<svg viewBox="-12.93 -0.24 394.36 230.52" style="width:100%;max-width:394.36px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/><line x1="268" y1="62" x2="290" y2="62"/><line x1="322" y1="62" x2="344" y2="62"/><line x1="16" y1="186" x2="38" y2="186"/><line x1="70" y1="186" x2="92" y2="186"/><line x1="124" y1="186" x2="146" y2="186"/><line x1="50.4" y1="173" x2="50.4" y2="155"/><line x1="57.6" y1="173" x2="57.6" y2="155"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="54" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--faint)">羧酸</text><text x="206" y="62" text-anchor="middle" dy="0.35em" font-size="17">＋</text><text x="252" y="62" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="306" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="360" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="306" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--faint)">醇</text><text x="306" y="124" text-anchor="middle" dy="0.35em" font-size="17" fill="var(--accent)">↓</text><text x="0" y="186" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="186" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="186" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="186" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="142" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="216" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酯键 ＝ —C(＝O)—O—C</text><text x="206" y="186" text-anchor="middle" dy="0.35em" font-size="17">＋</text><text x="258" y="186" text-anchor="middle" dy="0.35em" font-size="17">H₂O</text></svg><br><b>酯键长什么样</b>：<b>—C(＝O)—O—C</b>——中心碳带一个双键氧，再单键连一个氧，那个氧的另一边接碳。<b>三个原子一串：C、O、C，而中心那个 C 头上顶着 O。</b><br><b>会发生什么：比较容易水解</b>——加一个水就拆回酸和醇。所以<b>脂肪几小时就被脂肪酶消化掉</b>。<br><b>在哪儿</b>：脂肪、磷脂、蜡。接卡 <b>23</b>。'},

 {n:'11', t:'⚠ 酯不是糖 —— 酯和缩醛怎么分',
  big:'两边都有 <b>C—O—C</b>，但<b>看中心那个碳上有没有双键氧</b>。有 → 酯（脂质）。没有 → 缩醛（糖）',
  en:'“An ester and an acetal both contain a carbon oxygen carbon linkage, and they look similar written out. The difference is the centre carbon. In an ester it carries a double bonded oxygen. In an acetal it does not.”',
  note:'<svg viewBox="-21.43 -0.24 258.86 284.52" style="width:100%;max-width:258.86px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/><line x1="16" y1="196" x2="38" y2="196"/><line x1="70" y1="196" x2="92" y2="196"/><line x1="124" y1="196" x2="146" y2="196"/><line x1="178" y1="196" x2="200" y2="196"/><line x1="108" y1="209" x2="108" y2="227"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="54" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酯 · 中心碳上有双键氧</text><text x="0" y="196" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="196" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="196" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="162" y="196" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="216" y="196" text-anchor="middle" dy="0.35em" font-size="17">R″</text><text x="108" y="240" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="108" y="270" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">缩醛 · 中心碳上没有双键氧</text></svg><br><b>两根键并排写出来</b>：酯是 <b>—C(＝O)—O—C</b>，缩醛是 <b>C—O—C(H)—O—C</b>。<b>同样都有 C—O—C，分辨点只有中心碳头上那个双键氧。</b>',
  warn:'⚠ <b>这一条是 2026-09-20 她自己问出来的</b>：「你说什么 ester 这个也是糖？不是脂质吗」。两个式子写出来太像了，<b>分辨点只有中心碳上那个双键氧</b>。'},

 {n:'12', t:'酰胺 amide ＝ 酸 ＋ 胺 · 肽键就是它',
  big:'同样掉一个水，只是把醇换成了胺。<b>会发生什么：非常稳定，必须靠酶才拆得开</b>',
  en:'“An amide is a carboxylic acid joined to an amine with the loss of one water. A peptide bond is an amide. Nitrogen pushes electron density back onto the carbonyl carbon, so that carbon is less short of electrons than in an ester, and the amide is far more stable.”',
  note:'<svg viewBox="-23.6 -0.24 209.2 150.52" style="width:100%;max-width:209.2px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/><line x1="108" y1="75" x2="108" y2="93"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">N</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="106" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="81" y="136" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酰胺键 ＝ —C(＝O)—N—  ＝ 肽键</text></svg><br><b>酰胺键长什么样</b>：<b>—C(＝O)—N—</b>，羰基碳<b>直接连着氮</b>，中间没有氧。<b>跟酯比，只是把那个桥接的 O 换成了 N。</b>',
  good:'<b>amide 和 amino 怎么分：看氮挂在什么样的碳上。</b>挂在<b>普通碳</b>上 → <b>amino 氨基</b>；挂在<b>带双键氧的碳</b>上 → <b>amide 酰胺</b>。<b>一个氨基酸身上两个都有</b>：自己那一头是 amino，跟下一个连起来形成的肽键是 amide。接卡 <b>01</b>、<b>aa</b>。'},

 {n:'13', t:'半缩醛 hemiacetal —— 糖成环就是这件事',
  big:'醛 ＋ 醇，<b>这次不掉水</b>，是<b>双键打开、两边各接一个</b>。那个碳上于是同时有 <b>—OH</b> 和 <b>—O—R</b>',
  en:'“A hemiacetal forms when an alcohol adds across the double bond of an aldehyde. Nothing is lost. The centre carbon ends up carrying both a hydroxyl and an oxygen link to the alcohol. One half alcohol and one half ether, which is where the name comes from.”',
  note:'<svg viewBox="-36.93 -0.24 241.86 150.52" style="width:100%;max-width:241.86px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="54" y1="49" x2="54" y2="31"/><line x1="70" y1="18" x2="92" y2="18"/><line x1="54" y1="75" x2="54" y2="93"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="18" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="106" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="84" y="136" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">同一个碳上：一个 —O—H ＋ 一个 —O—R</text></svg><br><b>这个碳长什么样</b>：同一个碳上 <b>一个 —O—H ＋ 一个 —O—R</b>，另外还有一个 H 和一个 R。<b>「半」就是指只有一半变成了醚。</b><br><b>一半是醇（—OH），一半是醚（—O—R），所以叫「半」。</b><br><b>糖成环就是这件事</b>，只不过醛和醇长在<b>同一个分子上</b>，自己跟自己合。<b>那个中心碳就是异头碳 anomeric carbon。</b>接卡 <b>06</b>。'},

 {n:'14', t:'缩醛 acetal ＝ 糖苷键 · 还原糖那一段的全部',
  big:'半缩醛上那个 <b>—OH 再被一个醇换掉</b>。现在中心碳上<b>两边都是 —O—R，一个 —OH 都没有了</b>',
  en:'“Add a second alcohol and the remaining hydroxyl is replaced, so the centre carbon carries two oxygen links and no hydroxyl. That is an acetal, and a glycosidic bond is an acetal. The ring can no longer open.”',
  note:'<svg viewBox="-36.845 -0.24 269.69 150.52" style="width:100%;max-width:269.69px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="54" y1="49" x2="54" y2="31"/><line x1="70" y1="18" x2="92" y2="18"/><line x1="54" y1="75" x2="54" y2="93"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="18" text-anchor="middle" dy="0.35em" font-size="17">R″</text><text x="54" y="106" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="98" y="136" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">同一个碳上两个 —O—R，一个 —O—H 都没有了</text></svg><br><b>这个碳长什么样</b>：同一个碳上 <b>两个 —O—R</b>，<b>没有 —O—H，也没有双键氧</b>。<b>糖苷键就是这个形状</b>，所以环打不开了。<br><b>这两点就是你那天读不懂的还原糖那一段的全部：</b>',
  tbl:{head:['','中心碳上有什么','能不能开环','还原性'],
       rows:[['<b>半缩醛</b>（游离的糖）','一个 —OH ＋ 一个 —O—R','<b>能</b>，开了就变回醛','<b>是还原糖</b> · 会变旋'],
             ['<b>缩醛</b>（糖苷）','两个 —O—R，没有 —OH','<b>不能，锁死了</b>','<b>不还原</b> · 蔗糖、淀粉']]},
  good:'<b>「糖苷键就是缩醛」——这一句说出来，糖那张卡上一半的困惑就没了。</b>DNA 里碱基接在糖上的那个键也是糖苷键。接卡 <b>06</b>、<b>03</b>。'},

 {n:'15', t:'磷酸 phosphate',
  big:'一个磷接四个氧，<b>带两个负电，互相排斥</b>。<b>会发生什么：水解释放大量能量</b>',
  en:'“A phosphate group carries two negative charges at the pH inside a cell. Two phosphates joined together hold those charges close, and they repel each other. Hydrolysing that link releases a large amount of free energy, and that is what a cell spends.”',
  note:'<svg viewBox="0 0 200 96" style="width:200px;height:96px;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="17"><text x="60" y="22">O</text><g stroke="currentColor" stroke-width="1.5"><line x1="63" y1="30" x2="63" y2="48"/><line x1="70" y1="30" x2="70" y2="48"/><line x1="40" y1="60" x2="56" y2="60"/><line x1="76" y1="60" x2="92" y2="60"/><line x1="66" y1="72" x2="66" y2="86"/></g><text x="4" y="66">R—O</text><text x="60" y="66">P</text><text x="96" y="66">O⁻</text><text x="56" y="96" font-size="15">O⁻</text></svg><br><b>在哪儿</b>：ATP、磷脂的头、DNA 骨架、蛋白质磷酸化。接卡 <b>x-meta</b>、<b>25</b>。'},

 {g:'剩下的那些 · 她卡上真的出现的', gn:'上面十个是主干。<b>这一组是她卡上确实会碰到、而第一稿漏掉的。</b>纯有机课里还有一堆（腈、卤代烃、环氧…），这门课一个都不考，所以不写。'},

 {n:'19', t:'醚 ether',
  big:'一个氧，<b>两边都是碳</b>。跟醇的唯一区别：醇那一边是 H',
  en:'“An ether is an oxygen with a carbon on each side. An alcohol has a hydrogen on one side instead. An ether is unreactive, which is why it mostly appears as half of something larger.”',
  note:'<svg viewBox="0 0 160 46" style="width:160px;height:46px;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="18"><text x="4" y="30">R</text><g stroke="currentColor" stroke-width="1.6"><line x1="22" y1="24" x2="44" y2="24"/><line x1="66" y1="24" x2="88" y2="24"/></g><text x="48" y="30">O</text><text x="92" y="30">R′</text></svg><br><b>它本身几乎不反应</b>，所以很少单独出现。<b>你见到它基本都是在半缩醛/缩醛里</b>——那个「一半是醚」说的就是它。'},

 {n:'20', t:'C＝C 双键 alkene · 不饱和就是这个',
  big:'两个碳之间是双键。<b>「饱和」＝ 一个都没有；「不饱和」＝ 有</b>',
  en:'“A carbon carbon double bond is what unsaturated means. A saturated fatty acid has none of them and its chain is straight, so the chains pack tightly and the fat is solid. A double bond in the cis form puts a kink in the chain, the chains cannot pack, and the fat is liquid.”',
  note:'<svg viewBox="0 0 290 60" style="width:100%;max-width:290px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="17"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M10 40 h20 l12 -14 l12 14 h20 l12 -14 l12 14 h20"/></g><text x="8" y="56" font-size="12" fill="var(--faint)">饱和 · 链是直的 · 堆得紧 · 固体</text><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M178 40 h18"/><path d="M196 40 l18 0"/><path d="M196 44 l18 0"/><path d="M214 40 l14 -16 l14 16"/></g><text x="180" y="56" font-size="12" fill="var(--faint)">不饱和 · 双键处折一下 · 堆不紧 · 液体</text></svg><br><b>会发生什么：双键不能转</b>。单键两边能自由旋转，双键不能，所以双键处的形状被锁死——<b>顺式 cis 折一下，反式 trans 几乎还是直的</b>。<br><b>在哪儿</b>：黄油固体 vs 橄榄油液体、反式脂肪、膜的流动性。接卡 <b>23</b>、<b>x-mem</b>。'},

 {n:'21', t:'硫醇 thiol —SH · 把醇里的氧换成硫',
  big:'跟醇一模一样，<b>只是 O 换成了 S</b>。硫比氧大、抓电子弱，所以 <b>S—H 更容易被拿掉</b>',
  en:'“A thiol is an alcohol with the oxygen replaced by sulfur. Sulfur is larger and holds its electrons more loosely, so the hydrogen comes off more easily and the sulfur is a better attacker than an oxygen.”',
  note:'<svg viewBox="0 0 150 46" style="width:150px;height:46px;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="18"><text x="4" y="30">R</text><g stroke="currentColor" stroke-width="1.6"><line x1="22" y1="24" x2="44" y2="24"/><line x1="66" y1="24" x2="88" y2="24"/></g><text x="48" y="30">S</text><text x="92" y="30">H</text></svg><br><b>在哪儿</b>：<b>半胱氨酸 cysteine 的侧链</b>就是它。辅酶 A 末端那个 —SH 也是它。<br><b>为什么要单独记</b>：它是蛋白质上<b>最活泼的那个侧链</b>，下面两条都从它长出来。'},

 {n:'22', t:'二硫键 disulfide —S—S— · 蛋白质里唯一的共价交联',
  big:'两个 —SH <b>被氧化</b>，各丢一个 H，两个硫直接连起来',
  en:'“Two thiols are oxidised and lose one hydrogen each, and the two sulfurs bond directly. That is a disulfide. It is a covalent bond, and it is the only covalent cross link holding a folded protein together. Everything else in tertiary structure is non covalent.”',
  note:'<svg viewBox="0 0 330 52" style="width:100%;max-width:330px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="17"><text x="2" y="30">R—S—H</text><text x="78" y="30" font-size="14">＋</text><text x="100" y="30">H—S—R′</text><text x="188" y="30" fill="var(--accent)">→</text><text x="222" y="30">R—S—S—R′</text><text x="222" y="48" font-size="11.5" fill="var(--accent)">二硫键</text><text x="304" y="30" font-size="14">＋ 2H</text></svg><br><b>会发生什么：加还原剂就断</b>（DTT、β-巯基乙醇），所以 SDS-PAGE 要加还原剂才能把蛋白彻底摊开。<br>⚠ <b>细胞内是还原环境，所以胞内蛋白几乎没有二硫键</b>；分泌到胞外的蛋白才有（抗体、胰岛素）。<b>这一条在表达系统那张卡上决定选哪个宿主。</b>接卡 <b>01</b>、<b>pe-sys</b>。'},

 {n:'23', t:'硫酯 thioester · 乙酰辅酶 A 为什么是「高能」',
  big:'就是酯，<b>但把中间那个 O 换成了 S</b>。<b>会发生什么：比普通酯难以稳定，所以水解放能多得多</b>',
  en:'“A thioester is an ester with the linking oxygen replaced by sulfur. Oxygen can push electron density back onto the carbonyl carbon and stabilise an ordinary ester. Sulfur does that much less well, so the thioester is left higher in energy, and hydrolysing it releases much more.”',
  note:'<svg viewBox="0 0 330 82" style="width:100%;max-width:330px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="17"><text x="34" y="22">O</text><g stroke="currentColor" stroke-width="1.5"><line x1="37" y1="30" x2="37" y2="46"/><line x1="44" y1="30" x2="44" y2="46"/><line x1="16" y1="58" x2="32" y2="58"/><line x1="52" y1="58" x2="68" y2="58"/><line x1="88" y1="58" x2="104" y2="58"/></g><text x="2" y="64">R</text><text x="34" y="64">C</text><text x="72" y="64">O</text><text x="108" y="64">R′</text><text x="14" y="80" font-size="11.5" fill="var(--faint)">普通酯 · 稳</text><g stroke="var(--rule)" stroke-width="1.5"><line x1="168" y1="8" x2="168" y2="78"/></g><text x="228" y="22">O</text><g stroke="currentColor" stroke-width="1.5"><line x1="231" y1="30" x2="231" y2="46"/><line x1="238" y1="30" x2="238" y2="46"/><line x1="210" y1="58" x2="226" y2="58"/><line x1="246" y1="58" x2="262" y2="58"/><line x1="282" y1="58" x2="298" y2="58"/></g><text x="196" y="64">R</text><text x="228" y="64">C</text><text x="266" y="64">S</text><text x="302" y="64">R′</text><text x="200" y="80" font-size="11.5" fill="var(--accent)">硫酯 · 高能</text></svg><br><b>乙酰辅酶 A 就是一个硫酯。</b>「高能化合物」这个说法常被当成一个要背的标签，其实理由就在上面这一句：<b>硫不擅长把电子推回去，所以这个键一直吊在高处。</b><br><b>在哪儿</b>：乙酰辅酶 A 进柠檬酸循环、脂肪酸合成与氧化全程。接卡 <b>24</b>、<b>x-meta</b>。'},

 {n:'24', t:'磷酸酐 phosphoanhydride · ATP 的那两个键',
  big:'<b>两个磷酸直接连起来</b>。两边都带负电，<b>挤在一起互相排斥</b>，所以一拆就放能',
  en:'“A phosphoanhydride is two phosphate groups joined directly. Both carry negative charges held close together and they repel each other, and the products of hydrolysis are more stable than the starting material. That is why the energy released is large.”',
  note:'<svg viewBox="0 0 290 96" style="width:100%;max-width:290px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="16"><text x="46" y="20">O</text><text x="166" y="20">O</text><g stroke="currentColor" stroke-width="1.5"><line x1="49" y1="26" x2="49" y2="44"/><line x1="56" y1="26" x2="56" y2="44"/><line x1="169" y1="26" x2="169" y2="44"/><line x1="176" y1="26" x2="176" y2="44"/><line x1="30" y1="56" x2="42" y2="56"/><line x1="66" y1="56" x2="78" y2="56"/><line x1="102" y1="56" x2="114" y2="56"/><line x1="186" y1="56" x2="198" y2="56"/><line x1="52" y1="68" x2="52" y2="80"/><line x1="172" y1="68" x2="172" y2="80"/></g><text x="2" y="62">R—O</text><text x="46" y="62">P</text><text x="82" y="62">O</text><text x="118" y="62">P</text><text x="202" y="62">O⁻</text><text x="42" y="94">O⁻</text><text x="162" y="94">O⁻</text><text x="86" y="86" font-size="12" fill="var(--accent)">这个连接就是磷酸酐键</text></svg><br>⚠ <b>ATP 上有三个磷酸、两个磷酸酐键。</b>「高能磷酸键」说的是这两个，不是磷酸接到糖上那个（那个是普通的磷酸酯）。<br><b>在哪儿</b>：ATP、GTP、焦磷酸。接卡 <b>x-meta</b>、<b>25</b>。'},

 {n:'25', t:'半缩酮 hemiketal · 果糖成环用的是这个',
  big:'跟半缩醛一模一样，<b>只是被攻击的是酮不是醛</b>。所以中心碳上没有 H，两边都是碳',
  en:'“A hemiketal is the same addition as a hemiacetal, except the carbonyl attacked is a ketone rather than an aldehyde. Glucose closes its ring as a hemiacetal because it is an aldose. Fructose closes as a hemiketal because it is a ketose.”',
  note:'<svg viewBox="-14.42 -0.24 224.84 150.52" style="width:100%;max-width:224.84px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="54" y1="49" x2="54" y2="31"/><line x1="70" y1="18" x2="92" y2="18"/><line x1="54" y1="75" x2="54" y2="93"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="18" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="54" y="106" text-anchor="middle" dy="0.35em" font-size="17">R″</text><text x="98" y="136" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">跟半缩醛一样，只是下面挂的是碳不是 H</text></svg><br><b>这个碳长什么样</b>：跟半缩醛完全一样（一个 —O—H ＋ 一个 —O—R），<b>只是下面挂的不是 H 而是一条碳链</b>——因为被攻击的是酮不是醛。<br><b>葡萄糖是醛糖 → 成环得到半缩醛。果糖是酮糖 → 成环得到半缩酮。</b><br>⚠ <b>但果糖仍然是还原糖</b>：在碱性条件下酮糖能异构成醛糖，所以 Fehling 试剂照样变色。<b>这一条很容易答错</b>——「果糖是酮糖所以不还原」是错的。接卡 <b>06</b>。'},

 {n:'26', t:'亚胺 / 席夫碱 Schiff base · 转氨反应靠它',
  big:'醛或酮 ＋ 胺，<b>脱一个水</b>，生成 <b>C＝N</b> 双键。就是把 C＝O 里的 O 换成了 N—R',
  en:'“An aldehyde or a ketone reacting with an amine loses one water and forms a carbon nitrogen double bond. That is an imine, also called a Schiff base. It is how an amino group is carried from one molecule to another in transamination.”',
  note:'<svg viewBox="0 0 330 76" style="width:100%;max-width:330px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif" font-size="17"><text x="30" y="22">O</text><g stroke="currentColor" stroke-width="1.5"><line x1="33" y1="30" x2="33" y2="48"/><line x1="40" y1="30" x2="40" y2="48"/><line x1="14" y1="60" x2="28" y2="60"/><line x1="48" y1="60" x2="62" y2="60"/></g><text x="2" y="66">R</text><text x="30" y="66">C</text><text x="66" y="66">H</text><text x="92" y="66" font-size="14">＋ H₂N—R′</text><text x="190" y="66" fill="var(--accent)">→</text><text x="250" y="22">N—R′</text><g stroke="currentColor" stroke-width="1.5"><line x1="253" y1="30" x2="253" y2="48"/><line x1="260" y1="30" x2="260" y2="48"/><line x1="234" y1="60" x2="248" y2="60"/><line x1="268" y1="60" x2="282" y2="60"/></g><text x="222" y="66">R</text><text x="250" y="66">C</text><text x="286" y="66">H</text><text x="298" y="30" font-size="13" fill="var(--accent)">席夫碱</text></svg><br><b>在哪儿</b>：转氨酶用的辅酶 <b>磷酸吡哆醛 PLP</b>，整个机制就是反复生成和拆开席夫碱，把氨基从氨基酸搬到 α-酮酸上。接卡 <b>aa</b>、<b>31</b>（维生素 B6）。'},

 {n:'27', t:'三个侧链上的环 · 咪唑 · 胍基 · 酚',
  big:'这三个是<b>氨基酸侧链</b>，它们的性质直接决定三件你卡上有的事',
  en:'“Three ring or charged side chains matter here. Imidazole on histidine has a pKa near six, so it can pick up or give away a proton at the pH inside a cell. Guanidinium on arginine is positively charged at any physiological pH. And the phenol on tyrosine absorbs ultraviolet light.”',
  note:'<b>咪唑 imidazole（组氨酸）</b>：pKa 约 <b>6</b>，正好在生理 pH 附近，<b>所以它能一会儿接质子一会儿放质子</b>——酶的活性中心最常用它做酸碱催化。<b>His-tag 也是它</b>：咪唑环上的氮配位镍离子，所以镍柱能抓住 His-tag，而高浓度咪唑能把它洗下来。接卡 <b>pe-pur</b>、<b>18</b>。<br><b>胍基 guanidinium（精氨酸）</b>：正电被三个氮<b>分摊掉</b>，所以特别稳，<b>在任何生理 pH 下都带正电</b>。这就是精氨酸永远是正电荷的原因。<br><b>酚 phenol（酪氨酸）</b>：苯环上挂一个 OH。<b>它吸收紫外光</b>——和色氨酸一起构成 <b>280 nm 吸光</b>，所以测蛋白浓度用 A280。接卡 <b>pe-pur</b>、<b>aa</b>。'},

 {n:'28', t:'芳环 aromatic ring · 为什么它们特别',
  big:'<b>环上的电子是所有原子共用的</b>，摊得很开，所以这个环<b>特别稳、特别平、还会吸紫外光</b>',
  en:'“In an aromatic ring the electrons are shared around the whole ring rather than sitting between two atoms. That makes the ring unusually stable, flat, and able to absorb ultraviolet light. Two aromatic rings can also stack face to face.”',
  note:'<b>三个后果，每个都在你卡上</b>：① <b>吸紫外</b> → A280 测蛋白浓度、A260 测核酸；② <b>平的，能面对面叠起来</b> → DNA 的碱基堆积力；③ <b>非常稳</b> → 嘌呤嘧啶环不会自己拆掉。接卡 <b>03</b>、<b>aa</b>、<b>x-bonds</b>。'},

 {g:'这些区别有多大影响 · 三个具体后果', gn:'<b>不是名字不一样，是后果完全不同。</b>下面三条都是你已有的卡上直接用到的。'},

 {n:'16', t:'后果一 · 酸带负电、胺带正电 → 等电点 → 能分离蛋白',
  big:'氨基酸一头 <b>—COO⁻</b> 一头 <b>—NH₃⁺</b>。<b>有一个 pH 让整个蛋白净电荷为零，那就是等电点</b>',
  en:'“A carboxyl gives up a proton and an amino group takes one up, so an amino acid carries both a negative and a positive charge at once. The net charge of a whole protein therefore depends on pH, and at one particular pH it is zero. That pH is the isoelectric point.”',
  note:'<b>这一条把两个官能团变成了一个能用的实验方法。</b>离子交换层析就是靠净电荷分离蛋白的：把 pH 调到目标蛋白带正电，它就挂在带负电的柱子上，别的流走。<b>你 pe-pur 那张纯化卡整节建在这上面。</b>接卡 <b>x-ph</b>、<b>aa</b>、<b>pe-pur</b>。'},

 {n:'17', t:'后果二 · 酯容易拆，酰胺很难 → 你身体没散架',
  big:'两个反应长得几乎一样，差别只是攻击者是 <b>O</b> 还是 <b>N</b>。<b>结果差了几个数量级</b>',
  en:'“Nitrogen pushes electron density back onto the carbonyl carbon more readily than oxygen does, so an amide carbon is less short of electrons than an ester carbon. An ester is hydrolysed in hours by a lipase. A peptide bond in neutral water lasts for a very long time and needs an enzyme.”',
  note:'<svg viewBox="-32.68 -0.24 253.36 284.52" style="width:100%;max-width:253.36px;height:auto;color:var(--ink)" fill="currentColor" font-family="Georgia,serif"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="16" y1="62" x2="38" y2="62"/><line x1="70" y1="62" x2="92" y2="62"/><line x1="124" y1="62" x2="146" y2="62"/><line x1="50.4" y1="49" x2="50.4" y2="31"/><line x1="57.6" y1="49" x2="57.6" y2="31"/><line x1="16" y1="196" x2="38" y2="196"/><line x1="70" y1="196" x2="92" y2="196"/><line x1="124" y1="196" x2="146" y2="196"/><line x1="50.4" y1="183" x2="50.4" y2="165"/><line x1="57.6" y1="183" x2="57.6" y2="165"/><line x1="108" y1="209" x2="108" y2="227"/></g><text x="0" y="62" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="62" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="62" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="162" y="62" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="18" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="94" y="92" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酯 · 羰基碳的邻居是 O  → 几小时就被水解</text><text x="0" y="196" text-anchor="middle" dy="0.35em" font-size="17">R</text><text x="54" y="196" text-anchor="middle" dy="0.35em" font-size="17">C</text><text x="108" y="196" text-anchor="middle" dy="0.35em" font-size="17">N</text><text x="162" y="196" text-anchor="middle" dy="0.35em" font-size="17">R′</text><text x="54" y="152" text-anchor="middle" dy="0.35em" font-size="17">O</text><text x="108" y="240" text-anchor="middle" dy="0.35em" font-size="17">H</text><text x="94" y="270" text-anchor="middle" dy="0.35em" font-size="11.5" fill="var(--accent)">酰胺 · 邻居是 N  → 在中性水里能放很久</text></svg><br><b>把两根键并排写出来就看见了</b>：酯 <b>—C(＝O)—O—C</b>，酰胺 <b>—C(＝O)—N—</b>。<b>差别只有桥接的那个原子是 O 还是 N。</b><br><b>后果</b>：脂肪几小时就被消化掉；<b>蛋白质的肽键在中性水里能放几百年</b>。你身体靠这个才没有自己散架。<br><b>这也是为什么蛋白酶是酶</b>——没有酶，那个键根本不动。接卡 <b>17</b>、<b>18</b>。'},

 {n:'18', t:'后果三 · 氧化程度 → 能量密度',
  big:'脂肪酸停在梯子最上面（一串 CH₂），糖已经走到一半（每个碳挂 OH）。<b>9 对 4</b>',
  en:'“A fatty acid is a long chain of carbons carrying almost no oxygen, so it sits at the top of the ladder and there are many electrons left to strip. A sugar carries a hydroxyl on nearly every carbon, so it is already half oxidised. That is the whole reason fat stores about nine kilocalories per gram and carbohydrate about four.”',
  note:'<b>这个数字不是要背的事实，是第 02 点那张梯子的后果。</b>说出来的时候先说梯子再说数字，不要倒过来。接卡 <b>x-meta</b>、<b>23</b>。'}
],

end:'<b>这不是有机化学，是两根轴。</b>挂了多少氧决定能量；羰基碳被谁攻击决定生成什么键。<b>其余十几个名字都是这两根轴上的格子。</b>',

sib:[
 ['官能团到底是什么','“A functional group is the small reactive piece attached to a carbon skeleton. The skeleton itself does almost nothing.”','反应只发生在那一小块上。这句话是整张卡的地基。'],
 ['氧化在这里是什么意思','“Oxidation means losing electrons, not simply gaining oxygen. Each step down the ladder strips two electrons off the same carbon.”','那两个电子被 NAD⁺ 或 FAD 接走，送去做 ATP。'],
 ['为什么脂肪比糖能量高','“A fatty acid carries almost no oxygen, so many electrons are still there to strip. A sugar carries a hydroxyl on nearly every carbon and is already half oxidised.”','9 对 4，是梯子的后果，不是一个要背的数字。'],
 ['羰基碳为什么会被攻击','“The double bonded oxygen pulls electron density away, so that carbon is short of electrons and anything with a lone pair will attack it.”','酯、酰胺、半缩醛、缩醛，全是这一个动作。'],
 ['醛和酮差在哪','“An aldehyde sits at the end of a chain so its carbonyl carbon still carries a hydrogen, and that makes it easy to oxidise. A ketone sits in the middle and has no such hydrogen.”','这一条就是还原糖和非还原糖的分界。'],
 ['酯怎么来的','“An acid joined to an alcohol with the loss of one water.”','脂肪就是三条脂肪酸接在甘油的三个 OH 上。'],
 ['酰胺怎么来的','“An acid joined to an amine with the loss of one water. A peptide bond is an amide.”','比酯稳定得多，所以蛋白质不会自己散架。'],
 ['amide 和 amino 怎么分','“Amino is nitrogen on an ordinary carbon. Amide is nitrogen on a carbon that carries a double bonded oxygen.”','一个氨基酸身上两个都有。'],
 ['半缩醛是什么','“An alcohol added across the double bond of an aldehyde, so the centre carbon carries both a hydroxyl and an oxygen link. Nothing is lost.”','糖成环就是分子自己跟自己做这件事。那个碳是异头碳。'],
 ['缩醛是什么，为什么糖苷不还原','“A second alcohol replaces the remaining hydroxyl, so the centre carbon carries two oxygen links and none free. The ring can no longer open.”','开不了环就变不回醛，变不回醛就不还原。'],
 ['酯和缩醛怎么分','“Both contain a carbon oxygen carbon linkage. In an ester the centre carbon carries a double bonded oxygen. In an acetal it does not.”','有双键氧是脂质，没有是糖。'],
 ['acyl 是什么','“An acyl group is what is left of a carboxylic acid after the hydroxyl is removed.”','triacylglycerol 就是三个酰基挂在甘油上。这个词就是那张图。']
],

why:{
 rungs:[
  ['为什么只要认官能团，不用学有机化学？','因为<b>反应只发生在官能团上</b>，碳骨架是架子。这门课问的是「这块长什么样、它会发生什么」，不问机理、不问合成路线。十来个官能团就够了。'],
  ['为什么要按两根轴排，不按清单背？','因为清单是十几件孤立的事，两根轴是两件事。<b>挂多少氧管能量，羰基碳被谁攻击管连接</b>，剩下的名字都是格子。'],
  ['为什么说脂肪、蛋白、糖的连接是同一个反应？','因为都是<b>有孤对电子的东西去攻击一个缺电子的羰基碳</b>，都<b>脱一个水</b>连上、<b>加一个水</b>拆开。所以消化它们的酶全叫水解酶。'],
  ['为什么官能团的差别不只是名字？','因为它决定<b>会发生什么</b>：醛上那个 H 让它能被氧化，于是有还原糖；酸放 H⁺、胺接 H⁺，于是蛋白有等电点；氮比氧更能把电子推回去，于是肽键比酯稳定几个数量级。']
 ],
 stop:{lbl:'停 · 落在「结构决定会发生什么」',
  say:'“The point of a functional group is not its name. It is that the group decides what the molecule can do, and the same small set of groups explains energy density, reducing sugars, isoelectric points and why a peptide bond needs an enzyme.”'}
},

ask:[
 {g:'定义类 · 他挑一个词问「那是什么」',
  gn:'这些词在糖、脂质、蛋白那几张卡上反复出现。<b>一句话给定义，不要顺着往下讲。</b>',
  items:[
   {r:'高', q:'What is a functional group?',
    ez:'“A functional group is the small reactive piece. It is attached to a carbon skeleton. The skeleton does almost nothing. The group decides what reactions the molecule takes part in.”',
    ezcn:'<b>官能团 ＝ 挂在碳骨架上的那一小块活泼部分。</b><b>骨架几乎什么都不干；这一小块决定这个分子参与什么反应。</b>',
    en:'“A functional group is the small reactive piece attached to a carbon skeleton. The skeleton does almost nothing, and the group decides what reactions the molecule takes part in.”',
    cn:'<b>这一句是这张卡的地基。</b>答得干脆，说明你知道为什么要分这些名字。'},
   {r:'高', q:'What is the difference between an aldehyde and a ketone?',
    ez:'“An aldehyde has its carbonyl at the end of the chain. So that carbon still carries a hydrogen. That makes it easy to oxidise. A ketone has its carbonyl in the middle. There is carbon on both sides. So it has no such hydrogen.”',
    ezcn:'<b>醛的羰基在链的末端，所以那个碳上还带着一个氢——这让它很容易被氧化。</b><b>酮的羰基在中间，两边都是碳，所以没有那个氢。</b>',
    en:'“An aldehyde has its carbonyl at the end of the chain, so that carbon still carries a hydrogen and is easy to oxidise. A ketone has its carbonyl in the middle with carbon on both sides, and no such hydrogen.”',
    cn:'<b>接着他多半就问还原糖。</b>那一步的答案是：能被氧化的糖就是还原糖。'},
   {r:'高', q:'What is an ester?',
    ez:'“An ester is a carboxylic acid joined to an alcohol. One water is lost in the joining. A triacylglycerol is an example. It is three fatty acids joined to glycerol. Glycerol has three hydroxyls. So it is three ester bonds.”',
    ezcn:'<b>酯 ＝ 羧酸跟醇连起来，掉一个水。</b><b>三酰甘油就是例子：三条脂肪酸接在甘油的三个羟基上——也就是三根酯键。</b>',
    en:'“An ester is a carboxylic acid joined to an alcohol with the loss of one water. A triacylglycerol is three fatty acids joined to the three hydroxyls of glycerol, so it is three ester bonds.”',
    cn:'<b>顺手把 triacylglycerol 拆给他看</b>，比单纯给定义强。'},
   {r:'高', q:'What is a peptide bond, chemically?',
    ez:'“It is an amide. A carboxylic acid is joined to an amine. One water is lost in the joining.”',
    ezcn:'<b>它是一个酰胺。</b><b>羧酸跟胺连起来，掉一个水。</b>',
    en:'“It is an amide. A carboxylic acid joined to an amine with the loss of one water.”',
    cn:'⚠ 很多人只会说「氨基酸连起来」。<b>说出 amide 这个词，层次立刻不一样。</b>'},
   {r:'高', q:'What is an acyl group?',
    ez:'“It is what is left of a carboxylic acid. It is what is left after the hydroxyl is removed. It never stands alone. And whatever it is attached to names the compound.”',
    ezcn:'<b>酰基 ＝ 羧酸去掉羟基之后剩下的那一块。</b><b>它从不单独存在；它接在什么上面，那个化合物就叫什么。</b>',
    en:'“It is what is left of a carboxylic acid after the hydroxyl is removed. It never stands alone, and whatever it is attached to names the compound.”',
    cn:'解开 acyl-CoA、triacylglycerol、acyltransferase 一整串。'},
   {r:'中', q:'What is the difference between amino and amide?',
    en:'“Amino is a nitrogen on an ordinary carbon. Amide is a nitrogen on a carbon that carries a double bonded oxygen. An amino acid has both.”',
    cn:'两个词长得像，意思差一个羰基。'},
   {r:'中', q:'What is a hemiacetal?',
    en:'“An alcohol added across the double bond of an aldehyde, with nothing lost. The centre carbon then carries both a hydroxyl and an oxygen link to the alcohol.”',
    cn:'<b>糖成环就是分子内部自己做这件事</b>，那个碳是异头碳。'}
  ]},

 {g:'为什么类 · 他问「那又怎么样」',
  gn:'<b>这一组是这张卡最值钱的地方</b>——它证明这些名字不是名字，是后果。',
  items:[
   {r:'高', q:'Why does fat store more energy per gram than carbohydrate?',
    ez:'“Because a fatty acid is a long chain of carbons. Those carbons carry almost no oxygen. So it sits at the reduced end. Many electrons are left to strip. A sugar is different. It carries a hydroxyl on nearly every carbon. So it is already half oxidised. That gives about nine kilocalories per gram against about four.”',
    ezcn:'因为<b>脂肪酸是一长串几乎不带氧的碳，停在还原的那一端，还有很多电子可以榨</b>；<b>而糖几乎每个碳上都挂着一个羟基，已经氧化了一半</b>。<b>结果是每克约 9 kcal 对约 4 kcal。</b>',
    en:'“Because a fatty acid is a long chain of carbons carrying almost no oxygen, so it sits at the reduced end and there are many electrons left to strip. A sugar carries a hydroxyl on nearly every carbon and is already half oxidised. About nine kilocalories per gram against about four.”',
    cn:'<b>先说梯子再说数字</b>，不要倒过来。倒过来听起来就是背的。'},
   {r:'高', q:'Why is a peptide bond so much more stable than an ester?',
    ez:'“Because nitrogen pushes electron density back. It pushes it onto the carbonyl carbon. It does that more readily than oxygen does. So that carbon is less short of electrons. An ester is hydrolysed by a lipase in hours. A peptide bond in neutral water lasts a very long time. It needs an enzyme.”',
    ezcn:'因为<b>氮把电子密度推回羰基碳的能力比氧强</b>，<b>所以那个碳没那么缺电子</b>。<b>酯几小时就被脂肪酶水解掉；肽键在中性水里能放很久，必须靠酶。</b>',
    en:'“Nitrogen pushes electron density back onto the carbonyl carbon more readily than oxygen does, so that carbon is less short of electrons. An ester is hydrolysed by a lipase in hours. A peptide bond in neutral water needs an enzyme and lasts a very long time.”',
    cn:'<b>后果是你身体没有自己散架。</b>这一句说出来很有说服力。'},
   {r:'高', q:'Why is sucrose not a reducing sugar?',
    ez:'“Because the linkage is an acetal. The anomeric carbon carries two oxygen links. It carries no free hydroxyl. So the ring cannot open. The aldehyde cannot reappear. And there is nothing left to be oxidised.”',
    ezcn:'因为<b>那根键是缩醛</b>：<b>异头碳上有两个 —O—R，没有游离羟基</b>——<b>所以环开不了，醛回不来，也就没有东西可以被氧化了。</b>',
    en:'“Because the linkage is an acetal. The anomeric carbon carries two oxygen links and no free hydroxyl, so the ring cannot open, the aldehyde cannot reappear, and there is nothing left to be oxidised.”',
    cn:'<b>把「不还原」一路推到结构上</b>，而不是停在「因为它是非还原糖」。接卡 <b>06</b>。'},
   {r:'中', q:'Why does a protein have an isoelectric point?',
    en:'“Because a carboxyl gives up a proton and an amino group takes one up, so the net charge depends on pH. At one particular pH the two cancel and the net charge is zero.”',
    cn:'<b>接卡 pe-pur</b>：离子交换层析就是靠这个分离蛋白。'},
   {r:'中', q:'Why do digestive enzymes all belong to one class?',
    en:'“Because ester bonds, peptide bonds and glycosidic bonds are all made by removing one water, so all three are broken by adding one water back. They are all hydrolases.”',
    cn:'<b>一句话把三大营养素的消化统一了。</b>'}
  ]},

 {g:'⚠ 陷阱 · 说错了听起来还挺对',
  gn:'每一条都是把一个结构上的事说成了一个名字上的事。',
  items:[
   {r:'高', q:'（陷阱）把酯和缩醛混起来',
    ez:'“Both contain a carbon oxygen carbon linkage. But the centre carbon differs. In an ester it carries a double bonded oxygen. In an acetal it does not. An ester belongs to lipids. An acetal belongs to sugars.”',
    ezcn:'<b>两者都有 C—O—C，但中心碳不一样</b>：<b>酯的中心碳带一个双键氧，缩醛的没有。</b><b>酯属于脂质，缩醛属于糖。</b>',
    en:'“Both contain a carbon oxygen carbon linkage, but the centre carbon of an ester carries a double bonded oxygen and the centre carbon of an acetal does not. An ester belongs to lipids and an acetal to sugars.”',
    cn:'⚠ <b>2026-09-20 她自己问出来的那一条</b>：「你说什么 ester 这个也是糖？不是脂质吗」。写出来太像了。'},
   {r:'高', q:'（陷阱）说「氧化就是加氧」',
    ez:'“Oxidation means losing electrons. Adding oxygen is one common way of losing them. It is not the definition.”',
    ezcn:'<b>氧化的意思是失去电子。</b><b>加氧只是失电子的一种常见方式，它不是定义。</b>',
    en:'“Oxidation means losing electrons. Adding oxygen is one common way of losing them, and it is not the definition.”',
    cn:'<b>说成加氧，一遇到脱氢反应就解释不了。</b>接卡 <b>25</b>。'},
   {r:'中', q:'（陷阱）把 amino 和 amide 当同一个词',
    en:'“They differ by one carbonyl. Amino is nitrogen on an ordinary carbon, amide is nitrogen on a carbonyl carbon.”',
    cn:'两个词在氨基酸那张卡上会同时出现。'},
   {r:'中', q:'（陷阱）说「羧酸和酸是两种东西」',
    en:'“They are the same thing. Carboxylic acid is the full name and acid is the short form used in context.”',
    cn:'⚠ <b>这一条是我自己造成的</b>：09-20 我在同一段里两个词混用又没说明，她当场指出来。'}
  ]}
]
});
