/* 卡 19 · What are the different types of enzyme inhibition?
   题库 #19（S3 Biochemistry 6）
   出处 Biochemie OCR p059–p062（§3.5 抑制、§3.6 机制） */

window.CARDS.push({
id:'19', n:19, w:1,
q:'What are the different types of enzyme inhibition?',
qcn:'酶抑制有哪些类型',
sub:'主干说完约 80 秒 · 先分两刀，再分三类',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'⚠ 这题最容易犯的错是一上来就报「竞争性、非竞争性、反竞争性」。那是第二刀的结果，第一刀在它前面。'},
 {n:'01', t:'上位类',
  big:'影响酶反应速率的东西统称 <b>modulator</b>：加快的叫 <b>activator</b>，减慢的叫 <b>inhibitor</b>',
  en:'“Substances that affect the rate of an enzyme reaction by interacting with the catalyst are called <b>modulators</b>. Those that increase the rate are activators, those that decrease it are inhibitors.”',
  note:'<b>先给上位类，显示你知道抑制剂只是一半。</b>书还补了一句好用的：关于抑制剂说的一切，<b>对激活剂反过来说也成立</b>。<span class="pg">p059</span>'},
 {n:'02', t:'第一刀',
  big:'先分<b>不可逆</b>和<b>可逆</b>——这一刀比后面三类更根本',
  en:'“The different types are a classification by two cuts — first by whether the inhibitor comes off again, then by which form of the enzyme it binds. The first division is not competitive versus non-competitive. It is <b>irreversible</b> versus <b>reversible</b>, because they are not even described by the same equations.”',
  note:'<b>这一句是这题的骨架。</b>直接报三类，等于跳过了这一刀，而它才是分类的依据。'},

 {g:'不可逆', gn:'一句定义、一个后果、一个用途、一个例子。'},
 {n:'03', t:'不可逆是什么',
  big:'结合得<b>非常牢，多半是共价</b>；<b>修饰掉酶的功能基团</b>，把它灭活',
  en:'“The inhibitor binds very firmly, usually <b>covalently</b>, modifies the enzyme’s functional groups and thereby inactivates it.”',
  note:'<span class="pg">p059</span>'},
 {n:'04', t:'关键后果',
  big:'<b>Michaelis-Menten 方程不适用</b>——因为<b>活性酶的浓度在变</b>',
  en:'“The Michaelis–Menten equation does <b>not</b> apply to these, because the concentration of the <b>active form of the enzyme</b> is itself changing.”',
  note:'<b>这是全卡最值钱的一句。</b>它解释了为什么第一刀必须先划：可逆抑制是「同一个酶跑得慢了」，不可逆抑制是「酶越来越少」——<b>那是两个不同的模型，不是同一个模型的两种参数</b>。英文：“A reversible inhibitor leaves you the same amount of enzyme working more slowly. An irreversible one leaves you less and less enzyme — two different models, not two settings of one.”<span class="pg">p059</span>'},
 {n:'05', t:'用途和例子',
  big:'用来<b>研究酶的结构</b>；某些<b>化学战剂</b>就是靠不可逆抑制神经组织的酶起作用的',
  en:'“Irreversible inhibition is used to study enzyme structure. You covalently label one functional group and see which activity you lost. The group might be a serine hydroxyl or a cysteine thiol. And the action of some chemical warfare agents has the character of irreversible inhibition of enzymes in nerve tissue.”',
  note:'<b>两个都是书给的。</b>「用来研究结构」这条很好用：它把抑制剂从「坏东西」变成了<b>工具</b>。<span class="pg">p059</span>'},

 {g:'可逆', gn:'先说共同点，再分三类。共同点里有两条是他会追的。'},
 {n:'06', t:'可逆是什么',
  big:'靠<b>弱相互作用</b>结合；<b>Michaelis-Menten 方程适用</b>',
  en:'“A reversible inhibitor binds through weak, non-covalent interactions, so it can dissociate again and the enzyme is left unmodified. Because the amount of active enzyme stays constant, the Michaelis–Menten equation still applies.”',
  note:'跟不可逆正好对称。<span class="pg">p059</span>'},
 {n:'07', t:'它为什么有用',
  big:'可逆抑制剂提供关于<b>底物专一性</b>和<b>活性中心结构</b>的宝贵信息',
  en:'“Reversible inhibitors give valuable information about the substrate specificity and about the <b>structure of the active site</b>.”',
  note:'<b>又一次把抑制剂变成工具。</b>而且这一句直接接卡 18——你不能直接看见活性中心，但你可以用「什么能结合、什么不能」去画它的轮廓。英文：“You cannot see the active site directly, but you can map it. Test which substrate analogues bind and which do not. The pattern tells you what shape and which groups the site requires — the inhibitor is a probe.”<span class="pg">p059</span>'},
 {n:'08', t:'它在体内是什么',
  big:'<b>特定代谢物的可逆抑制，是中间代谢调控的重要工具</b>，也是某些药物起作用的本质',
  en:'“Reversible inhibition of enzymes by specific metabolites is an important instrument of the regulation of intermediary metabolism. And it is the basis of the action of some drugs.”',
  note:'<b>这一句把这题接到 #32 代谢调控和药理学上。</b>抑制不是意外，是细胞的控制手段。<span class="pg">p059</span>'},
 {n:'09', t:'三类的分法',
  big:'分类依据是<b>抑制剂跟酶的哪一种形式结合</b>',
  en:'“Kinetically, reversible inhibitors are divided by <b>which form of the enzyme they interact with</b>. They can bind the free enzyme, the enzyme–substrate complex, or both.”',
  note:'<b>先给依据再给名字。</b>这跟卡 01「分类的依据比名字重要」是同一个动作。<span class="pg">p059 p060</span>'},

 {g:'三类', gn:'每类三样：跟谁结合、Ki 是什么、图上什么表现。'},
 {n:'10', t:'竞争性',
  big:'只跟<b>游离酶</b>结合，只生成 <b>EI</b>；抑制剂和底物<b>争同一个结合位</b>',
  en:'“<b>Competitive</b>: the inhibitor reacts only with the free enzyme, so only the binary EI complex forms. Inhibitor and substrate compete for the <b>same binding site</b>. Its constant is K i, defined as the <b>dissociation constant</b> of EI — free enzyme times free inhibitor over EI.”',
  note:'<b>图上：Vmax 不变，Km 升高。</b>直觉：加足够多底物就能把抑制剂挤掉，所以最大速度还在，只是需要更多底物才达到一半。<span class="pg">p060</span>'},
 {n:'11', t:'竞争性的经典例子',
  big:'<b>malonate 抑制 succinate dehydrogenase</b>——像到能结合，但<b>不能被脱氢</b>',
  en:'“The classic example is <b>malonate</b> inhibiting <b>succinate dehydrogenase</b>. Malonate resembles the substrate closely enough to bind, but it cannot be dehydrogenated. It has only one CH₂ between its two carboxyls, so there is no pair of adjacent carbons to take two hydrogens from.”',
  note:'<b>这个例子直接接卡 24</b>——succinate dehydrogenase 就是柠檬酸循环第 6 步那个酶。<b>两张卡共用一个分子。</b><span class="pg">p060</span>'},
 {n:'12', t:'反竞争性',
  big:'只跟 <b>EA 复合物</b>结合，只生成三元的 <b>EAI</b>',
  en:'“<b>Uncompetitive</b>: the inhibitor reacts only with the enzyme–substrate complex, so only the ternary EAI complex forms. The inhibitor cannot bind the free enzyme, because its binding site is created only by the conformational change the substrate induces. Bound to EA, it disrupts catalysis. Its constant, K i prime, is the dissociation constant of EAI. On the Lineweaver–Burk plot both V max and K m fall.”',
  note:'<b>书给了一个很实用的说明</b>：这一类在<b>单底物反应里很罕见，在双底物反应里相当常见</b>。它<b>结合不了游离酶</b>——书给了机制：抑制剂的位点是底物诱导的构象变化才造出来的，所以必须等底物先来；结合到 EA 上以后破坏催化。<b>图上：Vmax 和 Km 一起降</b>（p060）。<span class="pg">p060</span>'},
 {n:'13', t:'非竞争性',
  big:'跟 <b>E 和 EA 都结合，而且一样紧</b>（Ki = Ki′）；位点跟底物不同，所以不竞争',
  en:'“<b>Non-competitive</b>: the inhibitor binds both the free enzyme and the enzyme–substrate complex, <b>with the same affinity</b>. K i equals K i prime, so EI and EAI form equally easily. It binds at a different site from the substrate, so the two do not compete. Usually these are substances reacting with groups outside the active site that the enzyme still needs for catalysis. Heavy-metal ions inhibiting SH-enzymes are the textbook’s example. They bind the sulfhydryl, the thiol group of cysteine residues, and those enzymes need it to stay active.”',
  note:'<b>定义在 p060 最后三行，不是 p061 开头那句「通常是……」。</b>书的原话：跟 E 和 EA 都作用、亲和力相同（Ki = Ki′）、EI 和 EAI 一样容易生成、结合位点跟底物不同、A 和 I 不竞争。「活性中心之外的基团」是书接着说的<b>典型情形</b>（<i>Obvykle se jedná o látky…</i>），不是定义——混合型也结合在活性中心之外，能区分两者的只有「亲和力相不相等」。书给的例子：<b>重金属离子非竞争性地抑制含 SH 的酶</b>。<br><b>图上：Vmax 降低，Km 不变。</b>Km 不变的原因正是亲和力相等：抑制剂不动底物结合的平衡，只把固定的一部分酶扣在不周转的复合物里。<span class="pg">p060 p061</span>'},
 {n:'14', t:'混合型',
  big:'非竞争性的<b>一般情形</b>：跟 E 和 EA 都结合，但<b>结合得不一样紧</b>',
  en:'“<b>Mixed</b> inhibition is the general case of non-competitive. Everything said about non-competitive holds, except that the interaction with E and with EA is <b>not the same</b> — the two constants differ.”',
  note:'<b>书把非竞争性说成混合型的特例</b>（两个 Ki 相等的那个特例）。这个说法比「四种平行的类型」准确。<span class="pg">p061</span>'},

 {g:'收尾', gn:'一句停住，一句伸出去。这题的落点很漂亮——它回到「结合不等于催化」。'},
 {n:'15', t:'落点',
  big:'书 p062 的机制图景（说的是竞争性那一类）：<b>能结合，但逼不动酶改变构象</b>',
  en:'“Underneath the kinetics the textbook adds one mechanistic picture, on its induced-fit page. Only the true substrate can force the enzyme into its catalytic conformation, and some molecules bind but cannot trigger that change — <b>those act as inhibitors</b>. That is the competitive, substrate-analogue case said mechanistically — malonate binds succinate dehydrogenase and nothing happens. For that case, inhibition is not a separate phenomenon. It is what binding looks like when it is not followed by catalysis.”',
  note:'<b>书自己把这两件事接起来了</b>（<span class="pg">p062</span>）。说出这一句，你就从「四种类型」升到了「一个机制」。<br>停止句：“Below that, why a given molecule can bind without triggering the conformational change is a question about the energetics of the interface — physical chemistry rather than biochemistry.”'},
 {n:'16', t:'留口子',
  big:'「结合但不催化」正是<b>我在测的那件事</b>',
  en:'“That distinction is exactly what I measure — binding without turnover. With yeast display I titrate a labelled partner and read out a dissociation constant, so I get the binding half on its own, without any catalysis involved.”',
  note:'口子落在卡 02。<b>他追下去就是 Kd</b>，那是你的主场。'}
],
end:'<b>这题的分数在两刀，不在三个名字。</b>第一刀（不可逆 vs 可逆，因为方程不一样）和最后那句（抑制＝结合了但逼不动酶），中间那三类反而是最容易背的部分。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>上位类</b>：modulator ＝ activator ＋ inhibitor',
 '“Substances affecting the rate by interacting with the catalyst are modulators.”',
 '书说：关于抑制剂说的一切，对激活剂反过来说也成立。'],
['<b>第一刀</b>：<b>不可逆 vs 可逆</b>，比三类更根本',
 '“The first division is irreversible versus reversible.”',
 '<b>直接报三类等于跳过了分类依据。</b>'],
['<b>不可逆</b>：结合牢、多半共价，修饰功能基团把酶灭活',
 '“Binds very firmly, usually covalently, modifies functional groups and inactivates.”',
 ''],
['<b>不可逆的后果</b>：<b>MM 方程不适用</b>，因为活性酶浓度在变',
 '“The Michaelis–Menten equation does not apply, because the concentration of the active form is changing.”',
 '<b>全卡最值钱的一句。</b>可逆是「跑得慢」，不可逆是「酶越来越少」——两个模型。'],
['<b>不可逆的用途</b>：研究酶结构；某些化学战剂就是这样作用于神经组织的酶',
 '“Used to study enzyme structure. Some chemical warfare agents act this way on nerve-tissue enzymes.”',
 '把抑制剂从「坏东西」变成工具。'],
['<b>可逆</b>：弱相互作用，<b>MM 方程适用</b>',
 '“Binds through weak, non-covalent interactions, so it comes off again and the enzyme is unmodified. The Michaelis–Menten equation applies.”',
 ''],
['<b>可逆的用途</b>：提供<b>底物专一性</b>和<b>活性中心结构</b>的信息',
 '“They give valuable information about substrate specificity and the structure of the active site.”',
 '你看不见活性中心，但可以用「什么能结合」画它的轮廓。'],
['<b>可逆在体内</b>：特定代谢物的可逆抑制是<b>代谢调控</b>的重要工具，也是某些药的本质',
 '“An important instrument of the regulation of intermediary metabolism, and the basis of the action of some drugs.”',
 '抑制不是意外，是细胞的控制手段。接 #32。'],
['<b>三类的依据</b>：抑制剂跟酶的<b>哪一种形式</b>结合',
 '“They are divided by which form of the enzyme the inhibitor interacts with.”',
 '先给依据再给名字。'],
['<b>竞争性</b>：只结合游离酶 → EI；争同一个位；<b>Vmax 不变，Km 升高</b>',
 '“Only the free enzyme. Inhibitor and substrate compete for the same site.”',
 'Ki = [E][I]/[EI]，书唯一明确叫「解离常数」的东西。'],
['<b>竞争性的例子</b>：<b>malonate 抑制 succinate dehydrogenase</b>',
 '“Malonate resembles the substrate enough to bind but cannot be dehydrogenated — only one CH₂ between its carboxyls.”',
 '<b>接卡 24</b>——就是柠檬酸循环第 6 步那个酶。'],
['<b>反竞争性</b>：只结合 EA → 三元 EAI；<b>结合不了游离酶</b>',
 '“Only the enzyme–substrate complex, giving the ternary EAI.”',
 '单底物反应里罕见，双底物反应里相当常见。'],
['<b>非竞争性</b>：跟 <b>E 和 EA 都结合、一样紧</b>（Ki = Ki′），位点跟底物不同；<b>Vmax 降低，Km 不变</b>',
 '“Binds both the free enzyme and the enzyme–substrate complex with the same affinity, at a site other than the substrate’s.”',
 '定义在 p060，「活性中心之外的基团」只是典型情形。例子：重金属离子抑制含 SH 的酶。'],
['<b>混合型</b>：非竞争性的一般情形，跟 E 和 EA 结合得<b>不一样紧</b>',
 '“The general case: the interaction with E and with EA is not the same.”',
 '书把非竞争性说成混合型的特例，比「四种平行类型」准确。'],
['<b>落点</b>：抑制剂＝<b>能结合但逼不动酶改变构象</b>',
 '“Molecules that bind but cannot trigger the conformational change act as inhibitors.”',
 '书自己接的（p062）。从「四种类型」升到「一个机制」。']
],

segs:[
 {tag:'段 1 · 定义', h:'先给上位类和第一刀',
  p:['“Substances that affect the rate of an enzyme reaction by interacting with the catalyst are called <b>modulators</b>. Activators speed the rate up, inhibitors slow it down. Everything said about inhibitors holds for activators in the opposite sense.',
     'The different types come from two cuts: whether the inhibitor comes off again, and which form of the enzyme it binds. The first division is not competitive versus non-competitive. It is <b>irreversible</b> versus <b>reversible</b> — and the reason that comes first is that they are not even described by the same equations.”'],
  note:'<b>「不是……而是……」这个句式在这里很有用</b>：它显示你知道大多数人会先说什么，而你有理由不那样说。'},
 {tag:'段 2 · general', h:'两边各一句，重点在为什么方程不同',
  p:['“An <b>irreversible</b> inhibitor binds very firmly, usually covalently, modifies the enzyme’s functional groups and inactivates it. The Michaelis–Menten equation does not apply, because the concentration of the <b>active form of the enzyme</b> is itself changing. Irreversible inhibition is used to study enzyme structure, and the action of some chemical warfare agents on nerve-tissue enzymes has this character.',
     'A <b>reversible</b> inhibitor binds through weak interactions. The Michaelis–Menten equation can be applied to it. Reversible inhibitors give valuable information about substrate specificity and about the structure of the active site. And reversible inhibition by specific metabolites is an important instrument of metabolic regulation. It is also the basis of the action of some drugs.”'],
  note:'<b>可逆抑制在这本书里是三样东西</b>：一个动力学现象、一个研究工具、一个调控机制。三样都说到，题就答完了一大半。'},
 {tag:'段 3 · 稍展开', h:'三类，先给依据再给名字',
  p:['“Within the reversible ones, the division is by <b>which form of the enzyme</b> the inhibitor binds.',
     '<b>Competitive</b> — only the free enzyme, so only the binary EI complex. Inhibitor and substrate compete for the same site. On a Lineweaver–Burk plot the maximum velocity is unchanged and K m rises. The classic case is malonate inhibiting succinate dehydrogenase. Malonate is similar enough to bind, but it cannot be dehydrogenated. It has one CH₂ between the carboxyls, so no adjacent pair of carbons to lose hydrogens from.',
     '<b>Uncompetitive</b> binds only the enzyme–substrate complex, giving the ternary EAI. Its site exists only after the substrate has bound. Both the maximum velocity and K m fall. Rare in one-substrate reactions, fairly common in two-substrate ones.',
     '<b>Non-competitive</b> — binds both the free enzyme and the complex, <b>with the same affinity</b>. It binds at a site other than the substrate’s. Usually the inhibitor reacts with groups outside the active site that are still necessary for activity. The example is heavy-metal ions binding the thiol of cysteine residues in sulfhydryl enzymes. Here the maximum velocity falls and K m is unchanged. And mixed inhibition is the general case of that, where the inhibitor binds E and EA with different strength.”'],
  note:'<b>两个图上的表现要记牢，因为它们的直觉正好相反</b>：竞争性——加足够底物能挤掉它，所以 Vmax 还在；非竞争性——加多少底物都没用，因为那部分酶根本不工作。'},
 {tag:'段 4 · 留口子', h:'从四种类型升到一个机制',
  p:['“Underneath all of that the textbook adds one mechanistic picture, on its induced-fit page. Only the true substrate can force the enzyme into its catalytic conformation, and some molecules bind but cannot trigger that change. Those are inhibitors. That is the competitive, substrate-analogue case said mechanistically. The other types differ. An uncompetitive inhibitor binds only after the substrate-induced change has created its site, and a non-competitive one binds elsewhere while substrate still binds normally. But for that first case, inhibition is what binding looks like when it is <b>not</b> followed by catalysis.',
     'That distinction is exactly what I measure. With yeast display I titrate and read out a dissociation constant, so I get the binding half on its own, with no catalysis involved.”'],
  note:'<b>这一段是这张卡的最高点。</b>它把一个分类题变成了一个机制题，而且落到你的主场。书自己在 p062 把这两件事接在了一起，所以不算跑题。'}
],

why:{
 rungs:[
  ['为什么不可逆抑制不能用 Michaelis-Menten 描述？','因为那个方程假设<b>酶的总量不变</b>，变的只是有多少处在复合物里。不可逆抑制<b>把酶永久拿走了</b>——活性酶的浓度在变，方程的前提就没了。'],
  ['为什么竞争性抑制 Vmax 不变，非竞争性 Vmax 会降？','因为竞争性抑制剂<b>抢的是位置</b>，底物加得够多就能把它挤掉，所以最大速度还够得着；非竞争性抑制剂<b>废掉的是酶本身</b>，那部分酶无论多少底物都不工作，天花板就降了。'],
  ['那为什么细胞要有可逆抑制这种东西？','因为<b>它是可撤销的控制</b>。一条通路的终产物可逆地抑制它的第一个酶，产物一少抑制就解除。<b>不可逆抑制没法当调节手段——用一次就报废一个酶。</b>']
 ],
 stop:{lbl:'停 · 落在测量方法的限制',
  say:'“And how much of that you can read off depends on the assay. The classification is by which form of the enzyme the inhibitor binds — free enzyme, the complex, or both. It is divided that way because that is what steady-state kinetics can distinguish. The K m and V max changes are each type’s fingerprint, not its definition, and none of it tells you directly where on the protein the inhibitor sits.”'}
},

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'What is enzyme inhibition?',
 mean:'<b>他真正会说的短句。</b>答案自带结构：上位类 → 第一刀 → 三类 → 依据。',
 say:'“Inhibition is a decrease in the rate of an enzyme reaction caused by a substance that interacts with the enzyme itself — that substance is the inhibitor. The general term including activators is modulator. The first division is irreversible versus reversible, because the two are not described by the same equations. Within the reversible ones the division is by which form of the enzyme the inhibitor binds: the free enzyme, the enzyme–substrate complex, or both.”'},

{q:'Name the types of reversible inhibition.',
 mean:'他要清单。<b>报名字的同时报「跟谁结合」，一句一个。</b>',
 say:'“Competitive — binds the free enzyme only. Uncompetitive binds the enzyme–substrate complex only. Non-competitive — binds both, free enzyme and complex, with the same affinity, at a site other than the substrate’s. And mixed, which is the general case of that, where the two affinities differ.”'},

{q:'How can you tell them apart experimentally?',
 mean:'<b>方法题。</b>两个参数，四种组合。',
 say:'“By what happens to the two Michaelis–Menten parameters, V max and K m. You read them off a Lineweaver–Burk plot, one over v against one over substrate concentration. Competitive: maximum velocity unchanged, K m rises. Uncompetitive: both fall together. Non-competitive: maximum velocity falls, K m unchanged. Mixed: both change. And irreversible inhibition shows up differently again. The Michaelis–Menten equation stops describing it at all, because the amount of active enzyme is changing.”'},

{q:'Why does adding more substrate rescue one type but not the other?', odd:1,
 mean:'<b>这一问在测你懂不懂那两张图，而不是背没背。</b>',
 say:'“Because a competitive inhibitor is fighting the substrate for the same site. With enough substrate you win, so the maximum velocity is still reachable. You just need more substrate to get halfway there. A non-competitive inhibitor binds at a different site, and equally well whether or not substrate is there — so substrate cannot displace it. The fraction of enzyme it occupies is set by the inhibitor concentration alone, and that fraction does not turn over, so the ceiling itself drops.”'},

{q:'How do nerve agents work?', odd:1,
 mean:'<b>书自己提了这个</b>——不可逆抑制。',
 say:'“As irreversible inhibitors. They bind firmly, usually covalently, to enzymes in nerve tissue and modify the functional groups, so the enzyme is permanently inactivated. That is how the textbook defines irreversible inhibition. Because the amount of active enzyme is falling, the kinetics is not Michaelis–Menten at all.”',
 tail:'⚠ 具体是哪个酶（acetylcholinesterase）和哪个基团（活性位丝氨酸）<b>书里没有</b>。要说就说成 generally：“The textbook does not name it. Generally the enzyme is acetylcholinesterase, and the agent phosphorylates the serine hydroxyl in its active site, so acetylcholine is no longer broken down.”'},

{q:'How do drugs work, biochemically?', odd:1,
 mean:'<b>书给了一句现成的：</b>可逆抑制是某些药物作用的本质。',
 say:'“For a large class of them, as reversible inhibitors. The textbook puts it directly. Reversible inhibition of enzymes by specific metabolites is an important instrument of metabolic regulation, and the basis of the action of some drugs. A drug that works this way is borrowing a control mechanism the cell already uses.”'},

{q:'Why are heavy metals poisonous?', odd:1,
 mean:'问的是<b>非竞争性抑制</b>那个例子。',
 say:'“One reason is non-competitive inhibition. Heavy-metal ions react with sulfhydryl groups — the thiol of cysteine residues. So they inactivate SH-enzymes, the enzymes that need a free cysteine thiol to work. Those groups are often outside the active site but still necessary for the enzyme to keep working. That is the textbook’s usual picture of a non-competitive inhibitor. It binds the enzyme equally with or without substrate, at a site other than the substrate’s.”'},

{q:'Why is malonate the textbook example?', odd:1,
 mean:'<b>因为它是「像到能结合但不能反应」的最干净的例子。</b>而且它连着卡 24。',
 say:'“Because it is close enough to succinate to bind succinate dehydrogenase, but it cannot be dehydrogenated. It has only one CH₂ between its two carboxyls, and no adjacent pair of carbons to lose two hydrogens from. So it occupies the site and does nothing. It also happens to sit in the citric acid cycle, at the one step that is in the inner membrane and gives FADH₂.”'},

{q:'Can an inhibitor be useful rather than harmful?',
 mean:'<b>三个用途，书全给了。</b>',
 say:'“Three ways. Irreversible inhibitors are used to study enzyme structure. Reversible ones report on substrate specificity and on the structure of the active site. And in the cell itself, reversible inhibition by specific metabolites is one of the main instruments of metabolic regulation.”'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'为什么类', gn:'这题的结论多、理由少，所以他插刀的位置很集中。', items:[
{r:'高', q:'Why does irreversible inhibition break the Michaelis–Menten equation?',
 en:'“Because that equation assumes the <b>total enzyme concentration is constant</b> — what changes is only how much of it is in complex. An irreversible inhibitor removes enzyme permanently, so the concentration of the active form is itself a function of time. The premise of the derivation is gone.”',
 cn:'<b>这一条是这张卡的核心。</b>它把「不可逆 vs 可逆」从一个名字上的区别变成了一个模型上的区别。书 p059 明写了这个理由。'},
{r:'高', q:'Why does non-competitive inhibition lower Vmax but not Km?',
 en:'“Because it binds the free enzyme and the enzyme–substrate complex with the same affinity. K i equals K i prime. So it does not shift the substrate-binding equilibrium at all, and the substrate concentration giving half-maximal rate is unchanged. What it does is hold a fixed fraction of the enzyme, set by the inhibitor concentration alone, in complexes that do not turn over. So the ceiling falls. A mixed inhibitor, which binds the two forms unequally, shifts K m as well.”',
 cn:'<b>「相当于把一部分酶从体系里拿掉」是最好的直觉。</b>⚠ 这个说法是推论，书只给了图上的表现。说成 “in effect”。'},
{r:'高', q:'Why would a cell use reversible rather than irreversible inhibition to regulate?',
 en:'“Because regulation has to be <b>reversible</b>. An end product inhibiting the first enzyme of its own pathway has to let go again when the product runs low. Irreversible inhibition cannot serve as a control mechanism — you would destroy an enzyme every time you used it.”',
 cn:'<b>这条接 #32 代谢调控和书里的反馈抑制那一段</b>（<span class="pg">p063</span>）：终产物抑制整条序列的第一个酶，那个酶通常是<b>别构酶</b>。'},
{r:'中', q:'Why is uncompetitive inhibition rare with one substrate but common with two?',
 en:'“Because an uncompetitive inhibitor needs a site that exists only on the enzyme–substrate complex. The textbook says the site is created by the conformational change substrate binding induces. In a two-substrate reaction that situation is built in. In an ordered mechanism the second substrate itself binds only after the first has. So anything resembling the second substrate binds EA and not free E, which is exactly an uncompetitive inhibitor. With one substrate there is no such second site, so the case is rare. The textbook states the fact, and the link is my inference.”',
 cn:'书给了机制（p060：位点由底物诱导的构象变化造出来），<b>但没给「为什么单底物罕见、双底物常见」的直接理由</b>——后半句说成推测：“presumably because…”。'}
]},

{g:'定义类', gn:'', items:[
{r:'中', q:'What is Ki?',
 en:'“The inhibition constant. The textbook defines it as the <b>dissociation constant</b> of the enzyme–inhibitor complex: free enzyme times free inhibitor over EI. Whenever the inhibitor also binds the enzyme–substrate complex there is a second one, K i prime, the dissociation constant of EAI. Uncompetitive has only K i prime. Non-competitive has K i equal to K i prime. Mixed has them different.”',
 cn:'<b>书里唯一明确叫「解离常数」的东西。</b>而且有两个。<br>完整的 Kd 内容在<b>卡 02</b>。<b>注意：Ki 是解离常数，Km 不是</b>——书自己在 p055 和 p056 前后打架，见卡 02 的陷阱那一格。'},
{r:'高', q:'What is a modulator?',
 en:'“The general term for a substance that changes the rate of an enzyme reaction by interacting with the catalyst. An activator raises the rate, an inhibitor lowers it. The textbook notes that everything said about inhibitors holds for activators in the opposite sense.”',
 cn:'<b>开口就给上位类，显示你知道抑制剂只是一半。</b>'},
{r:'高', q:'What is a Lineweaver–Burk plot?',
 en:'“The linearised Michaelis–Menten equation: <b>one over v plotted against one over substrate concentration</b>. It gives a straight line whose slope is K m over V max. Its intercept on the 1/v axis is one over V max, and the intercept on the 1/[A] axis is minus one over K m. It is used because rates at high substrate concentration are imprecise and costly to measure, so the constants are read from the line instead of the curve.”',
 cn:'p056–p057 给了斜率、1/v 截距和「不精确、费材料」的理由；p060 给了坐标轴（1/v 对 1/[A]）；x 截距是通用知识。抑制类型就是看这条线怎么动。'},

{r:'中', q:'What is a ternary complex?',
 en:'“A complex of three species at once — here enzyme, substrate and inhibitor, EAI. In two-substrate kinetics it is the enzyme with both substrates, EAB. Uncompetitive inhibition is the case where <b>only</b> this complex forms, because the inhibitor cannot bind the free enzyme. In non-competitive and mixed inhibition EAI forms alongside EI.”',
 cn:'三元复合物在双底物动力学里也出现（<span class="pg">p058</span>），跟 ping-pong 机制相对。'}
]},

{g:'桥回主场', gn:'', items:[
{r:'高', q:'You said binding without catalysis — how do you measure that?',
 en:'“As a dissociation constant. With yeast display the protein is on the cell surface, you titrate a labelled partner and read the midpoint by flow cytometry. There is no turnover involved at all, so what comes out is the binding half on its own.”',
 cn:'完整内容在<b>卡 02</b>。<b>这个桥是书搭的</b>：p062 把「能结合但逼不动构象变化」定义成抑制剂，而你测的正是「能结合」这一半。'},
{r:'高', q:'What is feedback inhibition?',
 en:'“Feedback inhibition is when the <b>end product</b> of a metabolic sequence inhibits the <b>first enzyme</b> of that sequence. Only the last product acts, and only on the first enzyme. That enzyme is usually allosteric. The textbook’s example is isoleucine synthesis from threonine over five intermediates: the first enzyme, which dehydrates threonine, is inhibited by isoleucine. It is the general mechanism for regulating biosynthesis, and it minimises the demand for carbon, nitrogen and energy.”',
 cn:'p062–p063 原文，含苏氨酸→异亮氨酸的例子。这是「为什么细胞要有可逆抑制」那条的正面定义。'},

{r:'中', q:'What is an allosteric enzyme?',
 en:'“Allosteric enzymes are modulated non-covalently by a specific metabolite binding at a separate allosteric site — often the end product of the pathway that enzyme starts. They are usually built of subunits with several substrate-binding sites, and their own substrate can act as an effector. Their kinetics are not Michaelis–Menten. The rate against substrate concentration is <b>sigmoid</b>, not hyperbolic.”',
 cn:'书 §3.7.1（<span class="pg">p062 p063</span>）。<b>这是可逆抑制在体内的主要形态</b>，接 #32。'}
]}
]
});
