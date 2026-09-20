/* 横向卡 · 第三科（分子生物学）第二张
   把一个基因弄坏 —— 五个难处，五种技术。
   出处是《现代分子生物学》第五版 §6.2（印刷页 211–218），经 20260828_molecure_lite/data/
   spine_ch6.js 转录（节点 M-6-2，20 步）。那份转录里 beyond 节点是 0 —— 这一整张卡
   每一句都能指到书上的某一页，不需要标 general。

   ⚠ 脊梁是转录者自己写在标题里的那一句，卡上原样用：
   「你有一段序列，却不知道它干什么，于是你在活体里把它弄坏 —— 而每一项技术，
   都是在解决『在活体里弄坏一个基因』所带来的一个难处」。
   这句话是背这张卡的唯一办法：五个技术名字硬背会串，五个难处填空不会串。

   接卡 mb-int（敲除 vs 敲低、扰动 vs 检测）、14（转化转染，把载体弄进细胞）、
   16（同源重组、双链断裂的修复）、12（启动子决定何时何地表达）、
   pe-clone（载体、左右臂、筛选标记）、pe-evo（文库这个词的两种用法）。
   页码用 <span class="pg"> 标印刷页，例如 p.211。

   ⚠ 图：《现代分子生物学》的扫描件不在这个仓库里，只有转录出来的文字。
   图 6-10 到 6-17 都没法裁，按 R4「要画的先记下不要画」，一张都没放。
   想要的图记在 LOGIC.md §16。 */

window.CARDS.push({
id:'mb-ko', cross:1, w:0,
q:'把一个基因弄坏 —— 五个难处，五种技术',
qcn:'横向卡 · 第三科第二张 · 脊梁：每一项技术都在解决上一项带来的一个难处',
sub:'跨题共用 · 出处《现代分子生物学》第五版 §6.2 · 接卡 mb-int、14、16、12、pe-clone',

cram:[
 {g:'开口 · 先把这一串串成一句话', gn:'这张卡不是五个技术名字的清单。它是<b>一条难处的链</b>：每解决一个，就冒出下一个。名字会串，难处不会串。'},

 {n:'01', t:'这是一件什么工作',
  ez:'“Gene knockout answers one question. What does this sequence do. You already have the sequence. You do not have its function. So you break it on purpose. Then you read the function off whatever goes wrong. Classical genetics runs the other way. It starts at a strange phenotype. Then it hunts backwards for the gene. This direction is called reverse genetics.”',
  ezcn:'<b>基因敲除回答的是一个问题：这段序列到底干什么。</b><b>你已经有序列，没有功能，于是故意把它弄坏，再从「坏了以后出什么问题」反推它原本在干什么。</b><b>经典遗传学（正向遗传学）是反着走的：从一个古怪的表型出发，往回追是哪个基因。</b><b>这个方向叫反向遗传学。</b>',
  big:'<b>反向遗传学</b>：手上有序列、不知道功能 → <b>故意弄坏</b> → 从出的问题反推功能。中文又叫<b>基因打靶</b>',
  en:'“Gene knockout is the reverse-genetics move. Classical genetics, forward genetics, starts at a mutant with an odd phenotype and hunts backwards for the gene responsible. Reverse genetics runs the other way round: it takes a sequence already read out of the genome, breaks it on purpose, and reads the function off whatever then goes wrong. In Chinese it is also called gene targeting. And the breaking itself is homologous recombination between DNA you introduce and the chromosome.”',
  note:'<b>第一句就要把方向说清楚</b>，因为「正向 / 反向」这两个词本身就是常考的一刀。<span class="pg">p.211</span><br><b>「弄坏靠的是同源重组」这半句一定要跟上</b>——它是下面整条链的起点：正因为同源重组太罕见，才有了后面所有的花样。'},

 {n:'02', t:'脊梁 · 五个难处',
  ez:'“Every technique here answers a difficulty that the previous one creates. Homologous recombination is too rare to find. So selection is rebuilt to make survival depend on it. A verified cell is still only a cell in a dish. So the targeting is done in stem cells. A complete knockout kills the embryo. So the cut is put under a switch. Plants have no such stem cells. So a soil bacterium is borrowed. And every method so far waits for the cell to recombine. So the last one stops waiting and cuts.”',
  ezcn:'<b>每一项技术，都是在解决上一项带来的一个难处。</b><b>① 同源重组太罕见 → 改造筛选，让只有重组对了的细胞活下来。</b><b>② 验过的细胞仍然只是皿里的细胞 → 打靶做在胚胎干细胞上。</b><b>③ 完全敲除会杀死胚胎 → 把「删」交给一个开关。</b><b>④ 植物没有这种干细胞 → 借一种土壤细菌。</b><b>⑤ 以上全都在等细胞自己重组 → 最后一种不等了，直接切。</b>',
  big:'① 太罕见 → <b>双向选择</b> · ② 皿里不是动物 → <b>ES 细胞</b> · ③ 会致死 → <b>条件敲除</b> · ④ 植物没 ES → <b>农杆菌</b> · ⑤ 不想等重组 → <b>直接切（CRISPR）</b>',
  en:'“Every technique here is an answer to a difficulty that the one before it creates. Homologous recombination is too rare to find, so selection is rebuilt to make survival depend on it. A verified cell line is still only a cell in a dish, so the targeting is done in embryonic stem cells. A complete knockout kills the embryo, so the removal is put under a promoter the experimenter controls. The animal route does not work in plants, which have no such cells, so a soil bacterium is borrowed. And every method so far waits for the cell to recombine. So the last one stops waiting and makes the double-strand break directly. That is where CRISPR comes in.”',
  note:'<b>这一句说出来，后面每一个名字都有位置可放。</b>反过来，先背名字再想它解决什么，一定会串。<br><b>说完这一句就停</b>，让他挑一个难处往下问——他挑哪个你讲哪个，这是八分答案的形状。'},

 {g:'经典路线 · 为什么要绕那么大一圈', gn:'难处一和难处二在这里解决。<b>两件事：怎么把对的细胞留下来，以及怎么从细胞走到动物。</b>'},

 {n:'03', t:'难处一 · 太罕见，而且看不出来',
  ez:'“Homologous recombination does happen on its own. But it is very rare. In animals the rate is ten to the minus two down to ten to the minus five. In plants it is ten to the minus four down to ten to the minus five. And a correct cell looks exactly like the others. A microscope shows no difference. So the rate is too low to screen by looking. The experiment has to be rebuilt instead. Only a correctly recombined cell may stay alive.”',
  ezcn:'<b>同源重组确实会自然发生，但极其罕见：动物 10⁻²–10⁻⁵，植物 10⁻⁴–10⁻⁵。</b><b>而且重组对了的细胞在显微镜下跟别的一模一样，看不出来。</b><b>低到这个程度又看不出来，就没法靠「看」筛——只能把实验改造成：只有正确重组了的细胞才活得下来。</b>',
  big:'动物 <b>10⁻²–10⁻⁵</b>、植物 <b>10⁻⁴–10⁻⁵</b>，而且<b>显微镜下看不出差别</b> → 只能让<b>不对的死掉</b>',
  en:'“Homologous recombination between introduced DNA and its matching chromosomal site does happen on its own. But out of a dish of cells, essentially none are the one you want. And nothing about a correct cell looks different down a microscope. Homologous recombination happens at ten to the minus two to ten to the minus five in animals, and ten to the minus four to ten to the minus five in plants. A rate that low cannot be screened for by looking, so the experiment has to be rebuilt so that only a cell which recombined correctly stays alive.”',
  note:'<b>两个数要记住，而且要说清楚哪个是动物哪个是植物。</b><span class="pg">p.211 p.212</span><br><b>「看不出来」这半句比数字更要紧</b>：它说明为什么答案是「改造筛选」而不是「多看几眼」。'},

 {n:'04', t:'正-负双向选择（PNS）· 两个基因摆在两个位置',
  ez:'“Positive negative selection is the layout that solves it. The targeting vector carries a disrupted copy of the gene. Two markers sit on it. The neo gene gives resistance to G418. It is placed inside the most critical exon of the target. So neo is the disruption and the positive marker at once. The H S V t k gene turns ganciclovir into a poison. It is placed outside the two matching arms. Homologous recombination copies in only what lies between the arms. So it brings neo in and leaves H S V t k behind. A random insertion swallows the whole construct.”',
  ezcn:'<b>正-负双向选择（PNS）就是解决它的那个摆法。</b><b>打靶载体带着这个基因被破坏掉的那一份，上面有两个标记。</b><b>neo 给 G418 抗性，被放在靶基因最关键的外显子里面——所以它既是那个「破坏」，又是正选标记。</b><b>HSV-tk 把丙氧鸟苷变成毒物，被放在两条同源臂外面。</b><b>同源重组只拷贝两臂之间的东西，所以它把 neo 带进来、把 HSV-tk 丢在外面；而随机插入是整条载体一起吞进去。</b>',
  big:'<b>neo（抗 G418）在靶基因里面</b>，<b>HSV-tk（把丙氧鸟苷变毒）在同源臂外面</b>。重组只拷两臂之间 → <b>带进 neo，丢下 tk</b>',
  en:'“Positive-negative selection, PNS, is that layout, and the targeting vector is the piece of DNA carrying the disrupted copy of the gene. The neo gene, resistance to G418, sits in the target’s most critical exon, so it is both the disruption and the positive marker. HSV-tk is herpes simplex virus thymidine kinase, and it turns ganciclovir into a poison. It sits outside the matching arms. Homologous recombination copies in only what lies between the two matching arms, so it brings neo in and leaves HSV-tk behind. A random insertion swallows the whole linear construct and carries HSV-tk in with it.”',
  note:'<b>这一格是整张卡最值得画的一张图。</b><span class="pg">p.211（图 6-10）</span><br>说的时候<b>先说位置再说后果</b>：neo 在里面、tk 在外面 → 重组只拷中间 → 一个进来一个留下。位置说清楚了，后果是自己长出来的，不用背。<br><b>「neo 既是破坏又是标记」这一句很值钱</b>——它说明设计者是怎么用一个东西干两件事的。'},

 {n:'05', t:'两种药一起加 · ⚠ 但筛选从不做证明',
  ez:'“Grow the cells in G418 and ganciclovir at the same time. A correctly targeted cell carries neo. So it survives the G418. It dropped H S V t k. So the ganciclovir does not touch it. A randomly inserted cell also has neo. But it kept H S V t k. So the ganciclovir kills it. Selection only enriches. It never proves. A cell can survive both drugs for reasons you did not plan. So every surviving line is checked again. P C R and Southern blot do that checking.”',
  ezcn:'<b>把细胞同时放在 G418 和丙氧鸟苷里养。</b><b>正确打靶的细胞带着 neo，扛得住 G418；又因为丢掉了 HSV-tk，丙氧鸟苷对它没作用。</b><b>随机插入的细胞同样有 neo，但它把 HSV-tk 留着，于是被丙氧鸟苷杀死。</b>⚠ <b>筛选只做富集，它从不做证明</b>：<b>细胞能在两种药里活下来，可能出于你没设想的原因——所以每一个活下来的细胞系，仍然要用 PCR 和 Southern 杂交验过才算数。</b>',
  big:'两种药一起加 → 只有打靶对的活下来。⚠ <b>筛选只做富集，从不做证明</b> → 活下来的仍要 <b>PCR ＋ Southern</b> 验',
  en:'“Grow the cells in G418 and ganciclovir at once. A correctly targeted cell carries neo and survives the G418, and having dropped HSV-tk it is untouched by the ganciclovir. A randomly inserted cell also has neo, but it kept HSV-tk, so the ganciclovir kills it. Selection only enriches — it never proves, because a cell can survive both drugs for reasons other than the one intended. So every surviving line is still checked by PCR and Southern blot before it is believed.”',
  warn:'⚠ <b>「筛选只做富集，从不做证明」是这张卡上最该说出口的一句。</b>它跟 pe-pur 那张卡上「选择性平板只做选择和分离」、跟 mb-int 上「共沉淀不等于直接接触」是同一个形状：<b>一个实验给你的是富集，不是结论。</b>他要是顺着问「那你怎么知道是对的」，答案已经在手上：PCR 和 Southern。'},

 {n:'06', t:'难处二 · 皿里的细胞不是一只动物',
  ez:'“A verified cell line is still only a cell in a dish. The question was about an animal. So the targeting is done in embryonic stem cells. Those cells can still give rise to every tissue. That includes the germ line. Then they are injected into an early embryo. The result is a chimera. Part of it is the host embryo. Part of it is the injected cells. Coat colour makes that readable. Black cells go into a white embryo. So black patches mark the injected tissue.”',
  ezcn:'<b>验过的细胞系仍然只是皿里的细胞，而问题问的是一只动物。</b><b>所以打靶做在胚胎干细胞（ES 细胞）上——它还能分化成所有组织，包括生殖系，正因如此才选它。</b><b>再把它注射进早期胚胎，长出一只嵌合体：一部分来自受体胚胎，一部分来自注射进去的细胞。</b><b>毛色让结果一眼可读：黑毛的 ES 细胞注进白毛胚胎，黑色区域就是 ES 细胞来源的组织。</b>',
  big:'打靶做在 <b>ES 细胞</b>（能分化成所有组织，<b>包括生殖系</b>）→ 注进早期胚胎 → <b>嵌合体</b> → 毛色一眼可读',
  en:'“A verified cell line is still only a cell in a dish, and the question was about an animal. So the targeting is done in embryonic stem cells, ES cells, and they are injected into an early embryo to give a chimera, part host and part ES cell. ES cells can still give rise to every tissue including the germ line, which is why they are the ones targeted. Coat colour makes the result readable at a glance: black ES cells go into a white embryo, so black patches mark ES-derived tissue.”',
  note:'<b>「包括生殖系」这四个字是选 ES 细胞的全部理由</b>——不进生殖系，这个改动就传不到下一代，整件事白做。<span class="pg">p.213（图 6-12）</span>',
  good:'<b>顺势能给的第二层</b>：因为重组只改了两条染色体中的一条，嵌合体还要<b>回交</b>，<b>至少两代</b>之后才可能出现敲除纯合的动物。他要是问「那多久能拿到动物」，答案就是这一句。'},

 {n:'07', t:'一个完整跑通的例子 · 表型才是目的',
  ez:'“One worked case runs the whole chain. Exons four to six of the intestinal alkaline phosphatase gene were replaced by neo. Southern blot confirmed the gene was gone from the genome. Northern found no transcript. Western found no protein in the homozygote. Then the mice were fed a high fat diet. The knockout mice got visibly fatter than their wild type littermates. That fatness is the whole point of the exercise. It is a phenotype that names what the gene was doing.”',
  ezcn:'<b>有一个完整跑通的例子。</b><b>把肠碱性磷酸酶（IAP）基因的外显子 Ⅳ 到 Ⅵ 换成 neo；Southern 杂交证实这个基因已从基因组里消失，Northern 查不到转录本，Western 在纯合子体内查不到蛋白。</b><b>随后在高脂饲养下，敲除的小鼠明显比野生型同窝仔胖。</b><b>而那个「胖」才是整件事的目的：一个能说出这个基因原本在干什么的表型。</b>',
  big:'IAP 基因外显子 <b>Ⅳ–Ⅵ</b> 换成 neo → Southern 没基因 · Northern 没转录本 · Western 没蛋白 → <b>高脂饲养下明显更胖</b>',
  en:'“One worked case runs the whole chain. Exons four to six of the intestinal alkaline phosphatase gene, IAP, were replaced by neo. Southern blot confirmed the gene was gone from the genome, Northern found no transcript, and Western found no protein in the homozygote. Fed a high-fat diet, mice knocked out for intestinal alkaline phosphatase got visibly fatter than wild-type littermates. And that fatness is the whole point of the exercise: a phenotype that names what the gene was doing.”',
  note:'<b>三个印迹是三个层次的验证</b>：Southern 查 DNA、Northern 查 RNA、Western 查蛋白。<b>一次把中心法则的三层都查了一遍</b>——这一句说出来很好听，而且是真的。<span class="pg">p.213–214（图 6-13）</span><br><b>最后那半句才是落点</b>：做了这么长一串，要的就是一个能说出功能的表型。'},

 {g:'两个改良 · 会致死怎么办，逐个定做太慢怎么办', gn:'难处三和难处四。<b>前一个是「删得太狠」，后一个是「一次只能做一个」。</b>'},

 {n:'08', t:'难处三 · 完全敲除常常杀死胚胎',
  ez:'“Some genes carry an important physiological job. Delete such a gene in every cell from the first division. Then the embryo usually dies. And a dead embryo tells you almost nothing. It cannot tell you what the gene does in an adult liver. Conditional knockout exists for exactly that dead embryo. The removal is no longer everywhere and always. It is put under something the experimenter switches on. He chooses the time. He also chooses the tissue.”',
  ezcn:'<b>有些基因担着重要的生理功能：从第一次分裂起就在每个细胞里把它删掉，通常会导致胚胎死亡。</b><b>而一个死掉的胚胎几乎什么都说明不了——它没法告诉你这个基因在成年肝脏里做什么。</b><b>条件型基因敲除的存在，正是为了这个死胎：不再是「处处删、始终删」，而是把「删」这个动作交给实验者，在他选定的时间、选定的组织里开启。</b>',
  big:'从第一次分裂就处处删 → <b>胚胎死掉</b>，而死胎说明不了成年组织里的事 → <b>条件敲除</b>：选时间、选组织',
  en:'“When a gene carries an important physiological job, deleting it in every cell from the first division usually kills the embryo. And an embryo that dies tells you almost nothing about what the gene does in an adult liver. Conditional knockout exists precisely for that dead embryo: instead of removing the gene everywhere and always, the removal is put under something the experimenter switches on at a chosen time in a chosen tissue.”',
  note:'<b>「死胎说明不了成年肝脏里的事」这半句是理由，不要只说「会死」。</b><span class="pg">p.212</span><br>说了理由，下一步「那怎么办」就自然接到 Cre/LoxP 上。'},

 {n:'09', t:'Cre / LoxP · 两个位点放在哪里，就删掉哪一段',
  ez:'“The switch is a recombinase called Cre. It comes from a bacteriophage, a virus that infects bacteria. It recognises one site of thirty four base pairs. That site is called Lox P. Cre joins two Lox P sites that point the same way. Then it deletes everything lying between them. So where the two Lox P are placed decides what disappears. The targeting vector puts one Lox P on each side of the important domain. And it hides neo in an intron, where it will not disturb the gene.”',
  ezcn:'<b>这个开关是一种叫 Cre 的重组酶，来自噬菌体（感染细菌的病毒），它只认一段 34 bp 的序列 LoxP。</b><b>Cre 把两个方向相同的 LoxP 接到一起，并删掉夹在它们中间的一切——所以「两个 LoxP 放在哪里」，恰好决定了基因的哪一段会消失。</b><b>因此打靶载体在靶基因重要功能域的两侧各放一个 LoxP，并把 neo 藏在内含子里，让它不干扰这个基因。</b>',
  big:'Cre 只认 <b>34 bp 的 LoxP</b>，把<b>同向</b>的两个 LoxP 接起来、删掉中间的一切 → <b>LoxP 放哪里 ＝ 删掉哪一段</b>',
  en:'“Cre is a recombinase from a bacteriophage, which is a virus that infects bacteria. It recognises a thirty-four base pair site called LoxP. Cre joins two LoxP sites that point the same way and deletes everything lying between them, so where the two LoxP are placed is exactly what decides which piece of the gene disappears. The targeting vector therefore puts one LoxP on each side of the target’s important functional domain. And it hides neo in an intron, where it will not disturb the gene.”',
  note:'<b>「同向」这两个字不能漏</b>：方向相反的两个 LoxP，Cre 做的是倒位而不是删除。<span class="pg">p.211 p.212（图 6-11）</span>',
  good:'<b>他要是问还有没有别的系统</b>：另外三套原理相同——噬菌体的 <b>Gin/Gix</b>，酵母的 <b>FLP/FRT</b> 和 <b>R/RS</b>；四套里 <b>Cre/LoxP 用得最广</b>。'},

 {n:'10', t:'谁控制 Cre 的启动子，谁就控制删除',
  ez:'“Cre is itself a gene. So it is delivered by crossing in a mouse that carries it. And that gene is put under a chosen promoter. The promoter is either tissue specific or drug inducible. Whatever decides when and where Cre is made decides when and where the target gene dies. So the animal develops normally first. It loses the gene only afterwards, and only in one tissue. That is how a gene whose complete knockout is lethal still gets studied.”',
  ezcn:'<b>Cre 自己也是一个基因，所以它是通过跟携带 Cre 基因的小鼠杂交带进来的，而那个基因被放在一个组织特异性的、或者可药物诱导的启动子之下。</b><b>决定 Cre 何时何地被合成的东西，也就决定了靶基因何时何地死掉。</b><b>于是动物先正常发育，之后才在某一个组织里失去这个基因——完全敲除会致死的基因，就是这样仍然被研究到的。</b>',
  big:'Cre 装在<b>组织特异</b>或<b>药物诱导</b>的启动子下 → <b>何时何地做 Cre ＝ 何时何地删基因</b> → 先正常发育，再定点删掉',
  en:'“Cre is delivered by crossing in a mouse that carries the Cre gene, and Cre is put under a promoter that is either tissue-specific or drug-inducible. Whatever decides when and where Cre is made decides when and where the target gene dies. So the animal develops normally and loses the gene only afterwards, in one tissue. That is how a gene whose complete knockout is lethal still gets studied.”',
  note:'<b>这一格把难处三真正关掉了</b>，说的时候要把它跟上面那个死胎连起来说：正因为处处删会死，才把删这件事交给一个启动子。<span class="pg">p.212</span><br><b>接卡 12</b>：启动子决定何时何地表达——那张卡上的 lac 操纵子和这里是同一件事。'},

 {n:'11', t:'难处四 · 以上都冲着你已选定的基因；反过来那条路谁也不选',
  ez:'“All of that aims at a gene you already chose. Gene trapping chooses none. It inserts a reporter gene at random. That reporter carries no promoter of its own. Landing in a random spot it stays silent. Landing inside a gene the cell is already transcribing it is carried along. It then produces a fusion protein. So a promoterless reporter lights up only where it interrupted an active gene. The insertion reports itself. Then you sequence the DNA flanking the marker. That names the gene you hit.”',
  ezcn:'<b>以上都是冲着一个你已经选定的基因去的；基因捕获法谁也不选。</b><b>它把一个报告基因随机插进去（通常是 neoʳ 或 GUS），而且这个报告基因自己不带启动子。</b><b>落在随机的地方，它就是哑的；落进一个细胞本来就在转录的基因里，它被那个基因自身的转录带着一起表达，产生一个融合蛋白。</b><b>所以一个没有启动子的报告基因，只可能在它打断了某个活跃基因的地方亮起来——插入事件自己报告自己；再测标记两侧的 DNA 序列，就知道打中的是哪个基因。</b>',
  big:'<b>不带启动子</b>的报告基因随机插入 → 只在<b>打断了活跃基因</b>的地方亮 → <b>插入自己报告自己</b>，测两侧序列知道打中谁',
  en:'“Gene trapping inserts a reporter gene at random, with no promoter of its own. That reporter is usually neo-resistance or the GUS gene. Landing in a random spot, it stays silent. Landing inside a gene the cell is already transcribing, it is carried along by that gene’s own transcription and produces a fusion protein. A promoterless reporter can only light up where it has interrupted an active gene, so the insertion reports itself, and sequencing the DNA flanking the marker names the gene that was hit.”',
  note:'<b>「不带启动子」是这整个设计的全部机关。</b>带了启动子，它落在哪儿都亮，就什么也不报告了。<span class="pg">p.214（图 6-14）</span>',
  good:'<b>顺手能给的一句 · 位置效应</b>：整合进去的转基因，是在它落点周围的染色质环境里被读的；5′ 端的启动子增强子区、3′ 端的终止子区都会改变它做出来多少。<b>这就是位置效应。</b>所以打靶载体常常自带一个组织特异性启动子，而不是听凭落点摆布。<span class="pg">p.214</span>'},

 {n:'12', t:'植物 · 没有 ES 细胞，就借一种土壤细菌',
  ez:'“Plants have no embryonic stem cells. So delivery is borrowed from a soil bacterium. That bacterium is Agrobacterium. Its Ti plasmid holds a transferable segment called T D N A. It also holds a virulence region called Vir. Ti stands for tumour inducing. A wounded root leaks acetosyringone. That compound induces Vir. Vir then cuts one strand of the T D N A out of the plasmid. It carries that strand into the plant nucleus. There it integrates into the host genome. Landing inside a gene, that insertion is the knockout.”',
  ezcn:'<b>植物没有 ES 细胞，所以「运送」这件事改借一种土壤细菌——根瘤农杆菌。</b><b>它的 Ti 质粒上有一段可转移的片段 T-DNA，和一个致毒区 Vir；Ti 就是 tumour-inducing（诱导肿瘤）。</b><b>植物根部受伤会分泌乙酰丁香酮，它诱导 Vir 表达；Vir 把 T-DNA 单链从质粒上切下来，带进植物细胞核，最终整合到宿主基因组上。</b><b>而正是这段 T-DNA 插进某个基因里，构成了植物的敲除。</b>',
  big:'植物没 ES 细胞 → 借<b>农杆菌</b>：伤口分泌<b>乙酰丁香酮</b> → 诱导 <b>Vir</b> → 切下 <b>T-DNA</b> 单链 → 进核整合 → <b>插进基因里就是敲除</b>',
  en:'“The plant method is called T-DNA insertional inactivation. Plants have no ES cells, so delivery is borrowed from Agrobacterium, a soil bacterium whose Ti plasmid holds a transferable segment, the T-DNA, and a virulence region, Vir. Ti is for tumour-inducing, and the Ti plasmid also carries genes for auxin and cytokinin that make the wound tissue grow into a crown gall, and genes for opines the bacterium feeds on. A wounded root leaks acetosyringone, and that induces Vir. Vir then cuts one strand of the T-DNA out of the Ti plasmid and carries it into the plant nucleus, where it integrates into the host genome. Landing inside a gene, that insertion is the knockout.”',
  note:'<b>这一格的顺序就是一条因果链，按顺序说就不会忘</b>：受伤 → 乙酰丁香酮 → 诱导 Vir → 切 T-DNA → 进核 → 整合 → 插进基因里 ＝ 敲除。<span class="pg">p.215</span>',
  good:'<b>随机变成方法</b>：T-DNA 没有专一的整合位点，基本是随机落点。<b>只要独立插入的株系足够多，基因组里每一个基因都会在其中某一株里被打中</b>——于是一个随机过程变成了一个<b>可以检索的敲除突变体文库</b>，不必再逐个定做。拟南芥特别适合：冗余序列少、基因密度高，几乎每一个插入都毁掉某个基因的功能；研究者是<b>去数据库里查一个突变体，而不是去做一个</b>。<span class="pg">p.216 p.217</span>'},

 {g:'不等了 · 直接切', gn:'难处五。<b>前面每一种方法都在等细胞自己重组，这一种不等。</b>'},

 {n:'13', t:'难处五 · 基因组编辑 ＝ 切是工具，修复才是机制',
  ez:'“Every method so far waits for the cell to recombine. Genome editing stops waiting. A nuclease cuts both strands where it recognises the sequence. Until two thousand and thirteen two engineered proteins did this. One was the zinc finger nuclease. The other was T A L E N. A cell cannot leave a double strand break alone. So the break is the tool and its repair is the mechanism. That is why the rate from step two becomes workable. The repair goes one of two ways. Homologous recombination against a template is one. Non homologous end joining is the other.”',
  ezcn:'<b>到此为止每一种方法都在等细胞自己重组；基因组编辑不等了——核酸酶在它认出的序列处把 DNA 双链切断。</b><b>2013 年之前干这件事的是两种人工改造的蛋白：锌指核酸酶（名字来自给它序列识别能力的「锌指」单元）和 TALEN（转录激活样效应因子核酸酶）。</b><b>细胞不可能对一个双链断裂坐视不管，所以「切」是工具，而细胞自己的修复才是机制——这正是第 03 点那个 10⁻⁵ 变得可用的原因。</b><b>修复走两条路之一：以模板进行同源重组，或者非同源末端连接（NHEJ，常常丢掉或多出几个碱基）。</b>',
  big:'<b>切是工具，修复才是机制</b>：细胞不能对双链断裂坐视不管 → 那个 10⁻⁵ 变得可用。修复两条路：<b>有模板的同源重组</b> / <b>NHEJ</b>（丢或多几个碱基）',
  en:'“Until 2013 the standard tools for this were two engineered proteins: the zinc-finger nuclease, named for the zinc-finger units that give it its sequence recognition, and TALEN, transcription activator-like effector nuclease. Genome editing is that move: the nuclease cuts both strands where it recognises the sequence. A cell cannot leave a double-strand break alone, so the break is the tool and its repair the mechanism. That is why the ten to the minus five rate from the second step becomes workable. The repair itself goes one of two ways. One is homologous recombination against a template, meaning an intact matching copy used as the pattern to rebuild from. The other is non-homologous end joining, NHEJ, which rejoins the two ends directly and often loses or gains a few bases doing so.”',
  note:'<b>「切是工具，修复才是机制」这一句是这一组的地基</b>，先说它再说 CRISPR。<span class="pg">p.217</span><br><b>而且它直接回答了第 03 点</b>：同源重组太罕见 → 主动制造断裂，细胞被迫启动修复，频率就上去了。<b>把这两格连起来说，是这张卡上最漂亮的一处。</b>'},

 {n:'14', t:'CRISPR/Cas · 本来是细菌的免疫系统',
  ez:'“C R I S P R and Cas are part of an immune system. It is the adaptive immune system of bacteria and archaea. Its job there is to destroy invading viruses and foreign DNA. Two parts sit next to each other on the chromosome. One is the C R I S P R array. In it short spacer sequences alternate with a conserved direct repeat. The other is the cas gene cluster at the five prime end. Those genes encode proteins that cut foreign DNA. A spacer is a piece of a previously encountered invader. So the array is a record of past infections.”',
  ezcn:'<b>CRISPR/Cas 本来是细菌和古菌适应性免疫系统的一部分，它在那里的职责是摧毁入侵的病毒和外源 DNA。</b><b>它的两个部分在染色体上紧挨着：一个 CRISPR 序列（短的间隔序列与高度保守的正向重复序列相间排列），以及位于它 5′ 端的 cas 基因簇（编码能切割外源 DNA 的蛋白）。</b><b>一段间隔序列就是一份「从前遇到过的入侵者」的存档——所以 CRISPR 序列是一份感染史记录，而 Cas 蛋白是对这份记录采取行动的那一方。</b>',
  big:'本是细菌古菌的<b>适应性免疫</b>：<b>CRISPR 序列</b>（间隔 ＋ 正向重复）＝ 一份<b>感染史记录</b>，<b>cas 基因簇</b> ＝ 对这份记录动手的那一方。Ⅰ Ⅱ Ⅲ 三型里，成为工具的是 <b>Ⅱ 型</b>',
  en:'“CRISPR/Cas is part of the adaptive immune system of bacteria and archaea, and its job there is to destroy invading viruses and foreign DNA. Its two parts sit next to each other on the chromosome. One is a CRISPR array, in which short spacer sequences alternate with a highly conserved direct repeat. The other is the cas gene cluster at the array’s five prime end, encoding proteins that cut foreign DNA. A spacer is a piece of a previously encountered invader kept on file, so the array is a record of past infections and the cas proteins are what acts on that record. Of the three types, one, two and three, type two is the one that became the tool.”',
  note:'<b>「一份感染史记录」这个说法是理解整套系统的钥匙</b>：间隔序列不是随机的，它们是档案。<span class="pg">p.217</span><br><b>一定要说出「本来是细菌的免疫系统」</b>——它解释了后面 PAM 那一格为什么存在。'},

 {n:'15', t:'两条 RNA ＋ PAM · 为什么它不切自己',
  ez:'“Cutting takes two R N A molecules, not one. The C R I S P R array is transcribed and processed into a mature cr R N A. That one is about forty nucleotides. The matching stretch on the invading DNA is called the protospacer. The second molecule is tracr R N A. The two base pair with each other. The double stranded R N A they form does two things. It activates Cas nine and it guides Cas nine to the target. Then Cas nine cuts with one domain per strand. H N H cuts the strand paired with the cr R N A. Ruv C like cuts the other one.”',
  ezcn:'<b>切割要用两条 RNA，不是一条。</b><b>CRISPR 序列被转录并加工成约 40 nt 的成熟 crRNA；入侵 DNA 上与它匹配的那一段叫原型间隔序列（protospacer）。</b><b>第二条是 tracrRNA（trans-activating CRISPR RNA）。</b><b>两者碱基配对，形成的双链 RNA 既激活 Cas9，又把它引到匹配的那一段上。</b><b>随后 Cas9 用两个结构域各切一条链：HNH 切与 crRNA 配对的那条，RuvC-like 切另一条。</b>',
  big:'<b>crRNA（约 40 nt）＋ tracrRNA</b> 配成双链 → 既<b>激活</b> Cas9 又<b>引导</b> Cas9 · <b>HNH</b> 切配对链、<b>RuvC-like</b> 切非配对链',
  en:'“When foreign DNA arrives, the CRISPR array is transcribed and processed into a mature crRNA of about forty nucleotides, and the stretch of invading DNA it matches is called the protospacer. tracrRNA is short for trans-activating CRISPR RNA. The two base-pair, and the double-stranded RNA they form both activates Cas9 and guides it to the matching stretch of invading DNA. Cas9 cuts with one domain per strand: HNH cuts the strand paired with the crRNA, and RuvC-like cuts the other.”',
  note:'<b>「既激活又引导」是一个动作干两件事</b>，跟第 04 点 neo「既是破坏又是标记」是同一种设计。<span class="pg">p.217（图 6-16a）</span>',
  warn:'⚠ <b>PAM 那一格是这一段最值钱的</b>：<b>只有原型间隔序列后面跟着 PAM（protospacer-adjacent motif）时，Cas9 才切</b>；PAM 通常是 <b>5′-NGG-3′</b>，极少数是 5′-NAG-3′，<b>切点在它上游第三个碱基</b>。<b>而 PAM 在入侵者的 DNA 上，细菌自己的 CRISPR 序列里没有</b>——所以「必须有 PAM」正是 Cas9 不去切那些给它编程的间隔序列的原因。<b>后来同一个要求，也框定了人工设计的切点能瞄到哪里。</b><span class="pg">p.217</span>'},

 {n:'16', t:'sgRNA · 改二十个核苷酸就换靶',
  ez:'“s g R N A stands for single guide R N A. It is the cr R N A and tracr R N A pair fused into one hairpin molecule. Its five prime end carries a twenty nucleotide guide. That guide is fully complementary to the DNA target. Here is the difference from the older tools. Hitting a new site with a zinc finger nuclease means engineering a new protein. T A L E N is the same. Changing those twenty nucleotides is the entire act of retargeting. Any twenty bases followed by N G G become a target. And the Cas nine protein is never redesigned.”',
  ezcn:'<b>sgRNA ＝ single guide RNA，就是把 crRNA::tracrRNA 这一对焊成一条发夹形的单分子，5′ 端那段 20 nt 引导序列与 DNA 靶序列完全互补。</b><b>这正是它跟锌指核酸酶、TALEN 的根本差别：后两者要打一个新位点，就得重新改造一个蛋白。</b><b>而改这 20 nt 就是「重新瞄准」的全部动作——基因组上任意 5′-(N)₂₀-NGG-3′ 都能成为靶点，Cas9 蛋白本身一次都不用重新设计。</b>',
  big:'把两条 RNA 焊成一条发夹，5′ 端 <b>20 nt</b> 引导序列 → <b>改这 20 nt 就是重新瞄准的全部动作</b>，Cas9 蛋白<b>一次都不用重新设计</b>',
  en:'“sgRNA is short for single guide RNA: the crRNA and tracrRNA pair fused into one hairpin-shaped molecule, its five prime end carrying a twenty nucleotide guide fully complementary to the DNA target. That is the difference from a zinc-finger nuclease or a TALEN, where hitting a new site means engineering a new protein. Changing those twenty nucleotides is the entire act of retargeting. Any twenty bases followed by NGG in a genome becomes a target, and the Cas9 protein itself is never redesigned.”',
  note:'<b>这一句是 CRISPR 为什么赢的全部答案</b>，而且它是一个<b>工程上的答案而不是生物学上的</b>：把「重新设计一个蛋白」换成了「订一段 20 个碱基的寡核苷酸」。<span class="pg">p.217（图 6-16b）</span><br><b>说的时候要把对照说出来</b>——不说 ZFN 和 TALEN 要重做蛋白，「改 20 nt」听起来就只是一个细节。'},

 {n:'17', t:'⚠ 这一刀不留标记 · 所以鉴定只能间接做',
  ez:'“An edit leaves only a few inserted or deleted bases. Nothing here confers a drug resistance. So there is nothing to select on. Screening cannot be direct. Suppose the cut destroyed a restriction site. Then the wild type P C R product still digests into two fragments. The mutant stays one band. Suppose no suitable site exists. Then the P C R product is melted and re annealed. Mutant and wild type strands pair imperfectly. T seven endonuclease one cuts only mismatched duplexes. So it reveals the edit. Sequencing confirms it either way.”',
  ezcn:'<b>编辑只留下几个碱基的插入或缺失，而且这里没有任何东西带来抗药性可供筛选，所以鉴定没法直接做。</b><b>如果这一刀恰好破坏了一个酶切位点：野生型的 PCR 产物仍能被切成两条小片段，而突变体的还是一条带。</b><b>如果找不到合适的酶切位点：把 PCR 产物变性再复性，让突变型与野生型的链不完全配对，再用只切错配双链的 T7 核酸内切酶 Ⅰ 把编辑显示出来。</b><b>两种情形最后都由 DNA 测序确认。</b>',
  big:'编辑只留几个碱基的插入缺失、<b>不带任何抗性</b> → 鉴定只能间接：<b>酶切位点没了</b>，或者<b>变性复性 ＋ T7 核酸内切酶 Ⅰ</b>；<b>最后都要测序</b>',
  en:'“In plants the twenty base pair guide and its adjacent NGG PAM are chosen from the target gene, cloned into a vector carrying the sgRNA scaffold and the Cas9 gene, and expressed from a U6 or U3 promoter. An edit leaves only a few inserted or deleted bases, which is why screening cannot be direct. Where a suitable restriction site was destroyed, the wild-type PCR product still digests into two fragments while the mutant’s stays one band. Where no suitable restriction site exists, the PCR product is melted and re-annealed so mutant and wild-type strands pair imperfectly. T7 endonuclease one cuts only mismatched duplexes, and it reveals the edit. Sequencing confirms it either way.”',
  note:'<b>这一格跟第 04 点的 neo 正好相反，一定要对照着说</b>：PNS 那边有抗性基因可以选，CRISPR 这边什么都不留下。<span class="pg">p.218（图 6-16、6-17）</span><br><b>「最后都要测序」跟第 05 点「筛选只做富集」是同一条规矩</b>：间接的证据只到富集为止，结论要靠直接读序列。'},

 {g:'收尾', gn:'落点和留口子。'},

 {n:'18', t:'落点 · 三句话版',
  ez:'“If I had to compress it, I would say three things. Knockout is reverse genetics. You break a known sequence and read the function off what goes wrong. The techniques form a chain. Each one answers a difficulty the one before it creates. And the last step changed the economics. C R I S P R replaced engineering a new protein with ordering twenty new bases.”',
  ezcn:'<b>压成三句话：</b><b>① 敲除是反向遗传学——弄坏一段已知序列，从出的问题反推功能。</b><b>② 这些技术是一条链，每一项都在解决上一项带来的难处。</b><b>③ 最后一步改变的是经济账：CRISPR 把「重新设计一个蛋白」换成了「订二十个新碱基」。</b>',
  big:'① 反向遗传学 · ② 一条难处的链 · ③ <b>CRISPR 改的是经济账</b>：从「重做一个蛋白」变成「订 20 个碱基」',
  en:'“If I had to compress the whole topic into three sentences: knockout is the reverse-genetics move, breaking a known sequence and reading the function off what then goes wrong. The techniques form a chain in which each one answers a difficulty the previous one creates. And the last step changed the economics rather than the biology — CRISPR replaced engineering a new protein with ordering twenty new bases.”',
  note:'<b>第三句是这张卡最像 researcher 的一句</b>：它说的不是「CRISPR 更好」，而是「它把难题换成了另一个更便宜的难题」。'},

 {n:'19', t:'留口子 · 主动把话引到你的主场',
  ez:'“I would add one boundary. All of this is loss of function. It asks whether a gene is necessary. My own work asks the opposite question. It asks whether a protein can be made better. So I build a library of variants and let a selection choose. Both need the same thing underneath. The genotype and the phenotype must stay physically linked. Knockout keeps that link in an animal. Yeast display keeps it in a cell.”',
  ezcn:'<b>我会主动补一句边界：这一整套做的都是「功能缺失」，问的是「这个基因是不是必需的」。</b><b>我自己的工作问的是相反的问题：这个蛋白能不能被改得更好——所以我造一个变体文库，让筛选去挑。</b><b>而两者底下需要的是同一件事：基因型和表型必须在物理上拴在一起。</b><b>敲除是把这条连接留在一只动物身上，酵母展示是把它留在一个细胞上。</b>',
  big:'敲除 ＝ <b>功能缺失</b>，问「必不必需」；定向进化 ＝ <b>功能获得</b>，问「能不能更好」。<b>两者底下都是同一条：基因型和表型要拴在一起</b>',
  en:'“I would add one boundary of my own. All of this is loss of function: it asks whether a gene is necessary. My own work asks the opposite question, whether a protein can be made better, so I build a library of variants and let a selection choose. Underneath, both need the same thing — the genotype and the phenotype have to stay physically linked, so that whatever wins can be recovered and read. Knockout keeps that link in an animal. Yeast display keeps it in a cell.”',
  note:'<b>这一句把这张卡接到了 pe-evo 和 mb-int 上</b>，而且用的是她真正熟的语言。<br><b>说完就停</b>，让他顺着问下去——他往哪边问都是你的主场。'}
],
end:'<b>五个难处，五种技术。</b>名字会串，难处不会串——<b>所以先说那条链，再说名字。</b>',

sib:[
 ['方向','“Reverse genetics: you have the sequence and not the function.”','正向是从表型追基因，反向是从序列追功能'],
 ['弄坏靠什么','“The breaking is homologous recombination.”','这半句是下面整条链的起点'],
 ['难处一','“Ten to the minus two to ten to the minus five in animals.”','太罕见，而且显微镜下看不出来'],
 ['PNS 的摆法','“neo inside the target, HSV-tk outside the arms.”','重组只拷两臂之间 → 带进 neo、丢下 tk'],
 ['⚠ 筛选的边界','“Selection only enriches. It never proves.”','活下来的仍要 PCR ＋ Southern 验'],
 ['难处二','“ES cells can still give rise to the germ line.”','皿里的细胞不是动物；毛色让嵌合体一眼可读'],
 ['难处三','“A complete knockout kills the embryo.”','死胎说明不了成年组织里的事'],
 ['Cre/LoxP','“Where the two LoxP are placed decides what disappears.”','34 bp、同向；启动子决定何时何地'],
 ['难处四','“A promoterless reporter lights up only inside an active gene.”','基因捕获：插入自己报告自己'],
 ['植物','“Acetosyringone induces Vir, which carries T-DNA into the nucleus.”','没有 ES 细胞，就借农杆菌'],
 ['难处五','“The break is the tool and its repair the mechanism.”','不等重组了，主动切'],
 ['CRISPR 的来处','“The array is a record of past infections.”','本来是细菌古菌的适应性免疫'],
 ['PAM','“The PAM sits on the invader and not in the array.”','所以 Cas9 不切给它编程的那些间隔序列'],
 ['sgRNA','“Changing those twenty nucleotides is the entire act of retargeting.”','跟 ZFN/TALEN 的根本差别'],
 ['⚠ 鉴定','“Nothing here confers a drug resistance.”','只能间接：酶切位点没了，或 T7 核酸内切酶 Ⅰ；最后都测序']
],

segs:[
 {tag:'段 1 · 定义和那条链', h:'先说方向，再把五个难处一口气串出来，然后停',
  p:['“Gene knockout is the reverse-genetics move. Classical genetics starts at a mutant with an odd phenotype and hunts backwards for the gene responsible. Reverse genetics runs the other way round. It takes a sequence already read out of the genome, breaks it on purpose, and reads the function off whatever then goes wrong. The breaking itself is homologous recombination between DNA you introduce and the chromosome.”',
     '“The techniques are best held as one chain, because every one of them answers a difficulty that the one before it creates. Homologous recombination is too rare to find, so selection is rebuilt to make survival depend on it. A verified cell line is still only a cell in a dish, so the targeting is done in embryonic stem cells. A complete knockout kills the embryo, so the removal is put under a promoter the experimenter controls. Plants have no such cells, so a soil bacterium is borrowed. And every method so far waits for the cell to recombine, so the last one stops waiting and makes the break directly.”'],
  note:'<b>说完第二段就停。</b>这是八分答案。他挑哪个难处，你就讲哪一个——<b>不要一口气把五个都展开</b>。'},

 {tag:'段 2 · 经典路线', h:'难处一和难处二：怎么留下对的细胞，怎么从细胞走到动物',
  p:['“Homologous recombination happens on its own at ten to the minus two to ten to the minus five in animals, and a correct cell looks exactly like the others down a microscope. A rate that low cannot be screened for by looking, so the experiment is rebuilt so that only a correctly recombined cell stays alive. That layout is positive-negative selection. The targeting vector carries a disrupted copy of the gene. The neo gene, resistance to G418, sits inside the target’s most critical exon, so it is both the disruption and the positive marker. HSV-tk turns ganciclovir into a poison, and it sits outside the matching arms. Homologous recombination copies in only what lies between those arms, so it brings neo in and leaves HSV-tk behind, whereas a random insertion swallows the whole construct.”',
     '“Grown in G418 and ganciclovir together, the correctly targeted cells survive and the randomly inserted ones are killed. But selection only enriches and never proves. So every surviving line is still checked by PCR and Southern blot.”',
     '“A verified cell line is still only a cell in a dish. So the targeting is done in embryonic stem cells. Those cells can still give rise to every tissue, including the germ line. They are injected into an early embryo to give a chimera. Coat colour makes it readable: black ES cells in a white embryo, so black patches mark ES-derived tissue. Because the recombination altered only one of the two chromosomes, the chimera is backcrossed, and at least two generations are needed before any animal is homozygous.”'],
  note:'<b>PNS 那一段先说位置、再说后果</b>：neo 在里面、tk 在外面 → 重组只拷中间。位置说对了，后果不用背。'},

 {tag:'段 3 · 两个改良和植物那条路', h:'难处三和难处四',
  p:['“When a gene carries an important physiological job, deleting it in every cell from the first division usually kills the embryo, and a dead embryo tells you almost nothing about what the gene does in an adult liver. Conditional knockout exists for exactly that. The switch is Cre, a recombinase from a bacteriophage that recognises one thirty-four base pair site called LoxP. Cre joins two LoxP sites pointing the same way and deletes everything between them, so where the two LoxP are placed decides what disappears. Cre is itself a gene, put under a tissue-specific or drug-inducible promoter. So whatever decides when and where Cre is made decides when and where the target gene dies.”',
     '“All of that aims at a gene you already chose. Gene trapping chooses none. A reporter with no promoter of its own is inserted at random, and it can only light up where it has interrupted an active gene. So the insertion reports itself, and sequencing the flanking DNA names the gene that was hit.”',
     '“Plants have no ES cells, so delivery is borrowed from Agrobacterium. Its Ti plasmid holds the T-DNA and the virulence region Vir. A wounded root leaks acetosyringone, and that induces Vir. Vir cuts one strand of the T-DNA out and carries it into the plant nucleus, where it integrates. Landing inside a gene, that insertion is the knockout. And because T-DNA picks no particular site, enough independent lines turn a random process into a knockout library that is searched rather than built to order.”'],
  note:'<b>三段各自有一个句子是承重的</b>：LoxP 放哪里决定删哪段 · 不带启动子才报告得了 · 随机足够多就变成文库。'},

 {tag:'段 4 · 直接切，然后落回你的主场', h:'难处五 ＋ 留口子',
  p:['“Every method so far waits for the cell to recombine. Genome editing stops waiting: a nuclease cuts both strands where it recognises the sequence. Until 2013 that was done with engineered proteins, the zinc-finger nuclease and TALEN. A cell cannot leave a double-strand break alone, so the break is the tool and its repair the mechanism. That is exactly why the ten to the minus five rate becomes workable. Repair goes either by homologous recombination against a template, or by non-homologous end joining, which often loses or gains a few bases.”',
     '“CRISPR/Cas came from the adaptive immune system of bacteria and archaea. There, a CRISPR array of spacers and repeats is a record of past infections, and the cas genes act on that record. Cutting takes two RNAs: a mature crRNA of about forty nucleotides and a tracrRNA. Paired, they both activate Cas9 and guide it to the target, and Cas9 cuts with one domain per strand. It only cuts where the protospacer is followed by a PAM, usually NGG. And because the PAM sits on the invader and not in the array, that requirement is what stops Cas9 cutting the spacers that program it.”',
     '“The tool version fuses the two RNAs into one hairpin, the sgRNA, whose five prime end carries a twenty nucleotide guide. That is the whole difference from the older tools: hitting a new site with a zinc-finger nuclease means engineering a new protein, while changing those twenty nucleotides is the entire act of retargeting. So the last step changed the economics rather than the biology.”',
     '“I would add one boundary of my own. All of this is loss of function — it asks whether a gene is necessary. My own work asks the opposite, whether a protein can be made better, so I build a library of variants and let a selection choose. Underneath, both need the genotype and the phenotype to stay physically linked. Knockout keeps that link in an animal. Yeast display keeps it in a cell.”'],
  note:'<b>最后一段是落点</b>：不要停在 CRISPR 上，把话推到「功能缺失 vs 功能获得」和「基因型–表型连接」，那是你的地方。'}
],

why:{
 rungs:[
  ['为什么不能直接看谁重组对了？','因为概率是 10⁻²–10⁻⁵，而且重组对了的细胞在显微镜下跟别的没有任何区别。'],
  ['为什么 neo 要放在最关键的外显子里？','因为这样一个东西干两件事：它既是「破坏」，又是正选标记。'],
  ['为什么随机插入会被丙氧鸟苷杀掉？','因为同源重组只拷贝两臂之间的东西，而随机插入是整条线性载体一起进去，HSV-tk 也跟着进去了。'],
  ['为什么打靶要做在 ES 细胞上？','因为它还能分化成所有组织，包括生殖系——不进生殖系，这个改动传不到下一代。'],
  ['为什么需要条件敲除？','因为完全敲除常常杀死胚胎，而死掉的胚胎说明不了这个基因在成年组织里做什么。'],
  ['为什么基因捕获的报告基因不能自带启动子？','因为自带启动子它落在哪儿都亮，就什么也报告不了了；不带启动子，它只在打断活跃基因的地方亮。'],
  ['为什么主动切一刀能把 10⁻⁵ 变得可用？','因为细胞不可能对双链断裂坐视不管——切是工具，细胞自己的修复才是机制。'],
  ['为什么 Cas9 不切细菌自己的 CRISPR 序列？','因为必须有 PAM 才切，而 PAM 在入侵者的 DNA 上，细菌自己的 CRISPR 序列里没有。'],
  ['为什么 CRISPR 赢了锌指核酸酶和 TALEN？','因为换靶点只要改 20 nt 的引导序列，而那两个要重新改造一个蛋白。']
 ],
 stop:{lbl:'停 · 落在「切是工具，修复才是机制」',
   say:'“Below that I would be reconstructing rather than recalling. What I can say is the principle. The nuclease only makes the break, and everything that follows is the cell’s own repair. That is why the same cut gives either a clean replacement or a few lost bases, depending on which repair route the cell takes.”'}
},

recog:[
 {q:'What is gene knockout?',
  mean:'<b>最短的问法，也是最可能的那一个。</b>答案要自带结构：是什么 → 属于哪一类 → 靠什么实现 → 用来回答什么问题。',
  ez:'“Gene knockout is a reverse genetics method. You take a sequence already read out of the genome. Then you break it on purpose. Then you read its function off whatever goes wrong. The breaking is homologous recombination. It happens between D N A you introduce and the chromosome. In Chinese it is also called gene targeting. The question it answers is about necessity. It asks what this gene was doing.”',
  ezcn:'<b>基因敲除 ＝ 一种反向遗传学的方法：拿一段基因组上已经读出来的序列，故意把它弄坏，再从「坏了以后出什么问题」反推它原本的功能。</b><b>「弄坏」靠的是导入的 DNA 与染色体之间的同源重组；中文又叫基因打靶。</b><b>它回答的是必需性的问题：这个基因原本在干什么。</b>',
  say:'“Gene knockout is the reverse-genetics move: you take a sequence already read out of the genome, break it on purpose, and read its function off whatever then goes wrong. The breaking is homologous recombination between DNA you introduce and the chromosome. In Chinese it is also called gene targeting. Classical, forward genetics runs the other way — it starts at an odd phenotype and hunts backwards for the gene.”',
  tail:'<b>说完就停。</b>他接着多半会问「那怎么做」或者「跟敲低有什么区别」——两条都在这张卡和 mb-int 上。'},

 {q:'How would you knock out a gene in a mouse?',
  mean:'他要的是<b>一条流程</b>，不是名词表。按难处的顺序走，每一步都带上它解决的问题。',
  ez:'“I would go through four steps. First build a targeting vector. It carries the gene with neo inside its critical exon. It carries H S V t k outside the matching arms. Second put the vector into embryonic stem cells. Then grow them in G418 and ganciclovir. Only correctly targeted cells survive both. Third check the survivors. P C R and Southern blot do that. Fourth inject the verified cells into an early embryo. That gives a chimera. Then backcross it for at least two generations.”',
  ezcn:'<b>四步。</b><b>① 造打靶载体：neo 插在靶基因最关键的外显子里，HSV-tk 放在两条同源臂外面。</b><b>② 把载体导入 ES 细胞，再用 G418 和丙氧鸟苷一起养——只有正确打靶的两种药都扛得过去。</b><b>③ 验活下来的：PCR ＋ Southern。</b><b>④ 把验过的细胞注射进早期胚胎得到嵌合体，再回交至少两代，才可能拿到纯合的敲除动物。</b>',
  say:'“Four steps. Build a targeting vector carrying the disrupted gene, with neo inside the critical exon and HSV-tk outside the matching arms. Put it into embryonic stem cells and grow them in G418 and ganciclovir together, so only correctly targeted cells survive both. Check the survivors by PCR and Southern blot, because selection only enriches and never proves. Then inject the verified cells into an early embryo to give a chimera, and backcross for at least two generations to get a homozygote.”',
  tail:'<b>第三步那半句「筛选只做富集」是加分的</b>——它说明你知道药筛不是证据。'},

 {q:'What is a conditional knockout, and why would you need one?',
  mean:'先说为什么需要，再说怎么做。<b>倒过来说会显得像在背名词。</b>',
  ez:'“Some genes carry an important physiological job. Deleting such a gene everywhere kills the embryo. And a dead embryo tells you nothing about an adult liver. A conditional knockout answers that. The removal is put under a switch. The switch is a recombinase called Cre. Cre recognises a thirty four base pair site called Lox P. It joins two Lox P pointing the same way. Then it deletes what lies between them. Cre itself sits under a tissue specific promoter. Or under a drug inducible one.”',
  ezcn:'<b>有些基因担着重要的生理功能，处处删掉会让胚胎死亡，而死胎说明不了成年肝脏里的事。</b><b>条件敲除就是为这个存在的：把「删」交给一个开关。</b><b>那个开关是重组酶 Cre：它认一段 34 bp 的 LoxP，把两个同向的 LoxP 接起来、删掉中间的一切。</b><b>而 Cre 自己被装在组织特异性或药物诱导的启动子之下。</b>',
  say:'“Deleting a gene with an important physiological job in every cell from the first division usually kills the embryo, and a dead embryo tells you almost nothing about what that gene does in an adult tissue. A conditional knockout puts the removal under a switch instead. The switch is Cre, a recombinase from a bacteriophage that recognises a thirty-four base pair site called LoxP: it joins two LoxP pointing the same way and deletes everything between them. Cre itself is put under a tissue-specific or drug-inducible promoter, so whatever decides when and where Cre is made decides when and where the gene dies.”',
  tail:'<b>被追问还有没有别的系统</b>：Gin/Gix、FLP/FRT、R/RS，四套里 Cre/LoxP 用得最广。'},

 {q:'What is CRISPR and how does it work?',
  mean:'⚠ <b>这是全卡最可能被单独问的一道。</b>答案要有四层：它本来是什么 → 两条 RNA → PAM → sgRNA 让它成为工具。',
  ez:'“C R I S P R and Cas are part of a bacterial immune system. It is the adaptive immune system of bacteria and archaea. A C R I S P R array holds spacers between conserved repeats. Each spacer is a piece of a past invader. So the array is a record of past infections. Cutting takes two R N A molecules. A cr R N A matches the target. A tracr R N A pairs with it. Together they activate Cas nine and guide it. Cas nine only cuts next to a P A M. The tool version fuses the two R N As into one s g R N A.”',
  ezcn:'<b>CRISPR/Cas 本来是细菌和古菌适应性免疫系统的一部分。</b><b>CRISPR 序列里，短的间隔序列夹在保守的正向重复之间；每一段间隔都是一份从前入侵者的存档——所以它是一份感染史记录。</b><b>切割要两条 RNA：crRNA 跟靶序列匹配，tracrRNA 跟它配对；两者形成的双链既激活 Cas9 又引导它。</b><b>而且只有在 PAM 旁边 Cas9 才切。</b><b>工具版把那两条 RNA 焊成一条 sgRNA。</b>',
  say:'“CRISPR/Cas is part of the adaptive immune system of bacteria and archaea, where its job is to destroy invading viruses and foreign DNA. A CRISPR array alternates short spacers with a conserved direct repeat, and a spacer is a piece of a previously encountered invader. So the array is a record of past infections, and the cas genes beside it encode the proteins that act on it. Cutting takes two RNAs: a mature crRNA of about forty nucleotides, and a tracrRNA. Paired, they both activate Cas9 and guide it to the matching stretch, and Cas9 cuts with one domain per strand. It only cuts where the protospacer is followed by a PAM, usually NGG. The tool version fuses the two RNAs into a single guide RNA, and changing its twenty nucleotide guide is the entire act of retargeting.”',
  tail:'<b>Ⅰ Ⅱ Ⅲ 三型里成为工具的是 Ⅱ 型</b>，被问到再给。'},

 {q:'Why is CRISPR better than a zinc-finger nuclease or a TALEN?',
  mean:'⚠ <b>答案是工程上的，不是生物学上的。</b>说成「CRISPR 更准更强」是错的方向。',
  ez:'“Because of how you retarget it. A zinc finger nuclease recognises its sequence with protein. So does a T A L E N. Hitting a new site means engineering a new protein. That is a project each time. C R I S P R recognises its sequence with R N A. The twenty nucleotide guide does the recognising. Changing those twenty nucleotides is the whole act of retargeting. The Cas nine protein is never redesigned. So it changed the economics and not the biology.”',
  ezcn:'因为<b>换靶点的方式不一样</b>。<b>锌指核酸酶和 TALEN 靠蛋白识别序列，所以打一个新位点就得重新改造一个蛋白——每一次都是一个项目。</b><b>CRISPR 靠 RNA 识别：识别靠的是那段 20 nt 的引导序列，改这 20 nt 就是重新瞄准的全部动作，Cas9 蛋白本身一次都不用重新设计。</b><b>所以它改的是经济账，不是生物学。</b>',
  say:'“Because of how you retarget it. A zinc-finger nuclease and a TALEN both recognise their sequence with protein, so hitting a new site means engineering a new protein — a project each time. CRISPR recognises its sequence with RNA. The twenty nucleotide guide at the five prime end of the sgRNA does the recognising. So changing those twenty nucleotides is the entire act of retargeting, and the Cas9 protein itself is never redesigned. Any twenty bases followed by NGG become a target. It changed the economics rather than the biology.”',
  tail:'<b>「改的是经济账不是生物学」这一句是这道题的分数。</b>'},

 {q:'Why does Cas9 not cut the bacterium’s own CRISPR array?',
  mean:'<b>一道很漂亮的小题。</b>答案只有一句，但它说明你懂这套系统本来是干什么的。',
  ez:'“Because Cas nine needs a P A M. It only cuts when the protospacer is followed by that motif. The motif is usually N G G. And the P A M sits on the invader D N A. The bacterium’s own array does not carry it. So the spacers that program Cas nine are safe from it.”',
  ezcn:'因为 <b>Cas9 必须看到 PAM 才切</b>：只有原型间隔序列后面跟着那段短基序（通常 5′-NGG-3′）它才下刀。<b>而 PAM 在入侵者的 DNA 上，细菌自己的 CRISPR 序列里没有——所以给 Cas9 编程的那些间隔序列是安全的。</b>',
  say:'“Because Cas9 only cuts when the protospacer is followed by a PAM, usually NGG, and the PAM sits on the invader’s DNA and not in the bacterium’s own CRISPR array. So requiring a PAM is exactly what stops Cas9 from cutting the very spacers that program it. The same requirement later fixes where an engineered cut can be aimed.”',
  odd:1},

 {q:'You made an edit with CRISPR. How do you know it worked?',
  mean:'⚠ <b>这一刀专门抓「以为有标记可选」。</b>答案先说「什么都没留下」，再给两条间接路线。',
  ez:'“Nothing here confers a drug resistance. So there is nothing to select on. And an edit leaves only a few bases changed. So screening has to be indirect. Suppose the cut destroyed a restriction site. Then the wild type P C R product still cuts into two fragments. The mutant stays one band. Suppose no suitable site exists. Then melt the P C R product and let it re anneal. Mutant and wild type strands pair imperfectly. T seven endonuclease one cuts only mismatched duplexes. Sequencing confirms it either way.”',
  ezcn:'<b>这里没有任何东西带来抗药性可供筛选，而且编辑只改了几个碱基，所以鉴定只能间接做。</b><b>① 如果这一刀破坏了一个酶切位点：野生型的 PCR 产物还能被切成两条，突变体的还是一条带。</b><b>② 如果没有合适的位点：把 PCR 产物变性复性，让突变型和野生型的链不完全配对，再用只切错配双链的 T7 核酸内切酶 Ⅰ 显示出来。</b><b>两种情形最后都由测序确认。</b>',
  say:'“Unlike the neo of a positive-negative selection, nothing here confers a drug resistance, so there is nothing to select on, and an edit leaves only a few inserted or deleted bases. Screening is therefore indirect. If the cut destroyed a restriction site, the wild-type PCR product still digests into two fragments while the mutant’s stays one band. If no suitable site exists, the PCR product is melted and re-annealed so mutant and wild-type strands pair imperfectly. T7 endonuclease one cuts only mismatched duplexes, and it reveals the edit. Sequencing confirms it either way.”'},

 {q:'How do you knock out a gene in a plant?',
  mean:'先说<b>为什么不能照搬动物那一套</b>，再说农杆菌。',
  ez:'“Plants have no embryonic stem cells. So the animal route does not transfer. Delivery is borrowed from a soil bacterium instead. That bacterium is Agrobacterium. Its Ti plasmid holds a transferable segment. That segment is the T D N A. It also holds a virulence region called Vir. A wounded root leaks acetosyringone. That induces Vir. Vir cuts one strand of the T D N A out. It carries that strand into the plant nucleus. There it integrates at no particular site. Landing inside a gene, that insertion is the knockout.”',
  ezcn:'<b>植物没有 ES 细胞，所以动物那一套搬不过来——「运送」改借土壤细菌农杆菌。</b><b>它的 Ti 质粒上有可转移的 T-DNA 和致毒区 Vir。</b><b>植物根部受伤分泌乙酰丁香酮，诱导 Vir；Vir 把 T-DNA 单链切下来、带进植物细胞核，整合到基因组上，而且不挑位点。</b><b>插进某个基因里，那就是敲除。</b>',
  say:'“Plants have no ES cells, so the animal route does not transfer and delivery is borrowed from Agrobacterium, a soil bacterium. Its Ti plasmid holds the transferable T-DNA and a virulence region, Vir. A wounded root leaks acetosyringone, and that induces Vir. Vir then cuts one strand of the T-DNA out of the plasmid and carries it into the plant nucleus, where it integrates. Landing inside a gene, that insertion is the knockout — the method is called T-DNA insertional inactivation.”',
  tail:'<b>顺势给那一句</b>：因为 T-DNA 不挑位点，只要独立株系足够多，每个基因都会在某一株里被打中——随机于是变成了一个<b>可以检索的文库</b>。'},

 {q:'Why do you need two selection markers and not one?',
  mean:'问的是 PNS 的设计。<b>答案落在「两种错误要分开」。</b>',
  ez:'“Because one marker cannot separate two kinds of event. Both correct targeting and random insertion carry neo. So G418 alone keeps both. The second marker separates them. H S V t k sits outside the matching arms. Homologous recombination copies in only what lies between the arms. So a correct event leaves H S V t k behind. A random insertion takes the whole construct and keeps it. Ganciclovir then kills the random ones.”',
  ezcn:'因为<b>一个标记分不开两种事件</b>：正确打靶和随机插入<b>都带着 neo</b>，所以光用 G418 两种都留下了。<b>第二个标记才分得开</b>：HSV-tk 放在两条同源臂外面，而同源重组只拷贝两臂之间的东西，所以正确的事件把 tk 丢在外面，随机插入把整条载体吞进去、tk 也跟着进去——丙氧鸟苷于是把随机的那些杀掉。',
  say:'“Because one marker cannot separate the two kinds of event. Both a correct targeting and a random insertion carry neo, so G418 alone keeps both. The second marker is what separates them. HSV-tk sits outside the matching arms, and homologous recombination copies in only what lies between the arms. So a correct event leaves HSV-tk behind, while a random insertion swallows the whole linear construct and keeps it. Ganciclovir then kills the random ones. That is why it is called positive-negative selection.”'},

 {q:'Why do mice used for this have different coat colours?',
  mean:'<b>听起来像闲聊，其实问的是嵌合体怎么读。</b>',
  ez:'“Because coat colour makes the chimera readable by eye. Black embryonic stem cells are injected into a white embryo. So black patches mark the tissue that came from the injected cells. Without that contrast you could not tell which animal is a chimera. And you could not tell how much of it came from the targeted cells.”',
  ezcn:'因为<b>毛色让嵌合体一眼就读得出来</b>：黑毛的 ES 细胞注进白毛胚胎，黑色区域就是注射进去的细胞来源的组织。<b>没有这个反差，你既看不出哪只是嵌合体，也看不出它有多少来自打靶过的细胞。</b>',
  say:'“Because coat colour makes the chimera readable at a glance. Black ES cells are injected into a white embryo, so black patches mark ES-derived tissue. Without that contrast you could not see which animal is a chimera or how much of it came from the targeted cells. And because the recombination altered only one of the two chromosomes, the chimera still has to be backcrossed — at least two generations before any animal is homozygous.”',
  odd:1},

 {q:'What is the difference between a knockout and a knockdown?',
  mean:'⚠ <b>两个常被说反的词</b>，而且 mb-int 那张卡上也有。',
  ez:'“A knockout removes the gene from the chromosome. So the product is absent. A knockdown leaves the gene in the genome. It destroys the message instead. So the product is only reduced. R N A interference gives a knockdown. The phenotype it produces is a reduction. It is not an absence.”',
  ezcn:'<b>敲除（knockout）把基因从染色体上拿掉，产物「没有」；敲低（knockdown）把基因留在基因组里、毁掉它的 mRNA，产物只是「变少」。</b><b>RNA 干扰给的是敲低，它造成的表型是减少，不是缺失。</b>',
  say:'“A knockout removes the gene from the chromosome, so the product is absent. A knockdown leaves the gene in the genome and destroys its message, so the product is reduced. RNA interference gives a knockdown, and the phenotype it produces is a reduction rather than an absence. That also means a weak phenotype after interference does not prove the gene is unimportant — the knockdown may simply have been incomplete.”'},

 {q:'Why does a random insertion library work at all?',
  mean:'问的是<b>随机怎么变成方法</b>。答案是一个数目的论证。',
  ez:'“Because randomness becomes coverage at scale. T D N A has no preferred integration site. So one insertion tells you nothing in advance. But make enough independent lines. Then every gene in the genome is hit in one of them. So a random process turns into a library. And a library can be searched. You look a mutant up in a database. You do not make one. Arabidopsis suits this well. Its genes sit densely and little sequence is redundant.”',
  ezcn:'因为<b>规模一大，随机就变成了覆盖</b>。<b>T-DNA 没有偏好的整合位点，所以单独一次插入事先什么都说明不了；但只要独立的插入株系足够多，基因组里每一个基因都会在其中某一株里被打中。</b><b>于是一个随机过程变成了一个文库——而文库是可以检索的：你去数据库里查一个突变体，而不是去做一个。</b><b>拟南芥特别适合：基因密度高、冗余序列少。</b>',
  say:'“Because at scale randomness becomes coverage. T-DNA has no preferred integration site, so any single insertion tells you nothing in advance. But make enough independent insertion lines and every gene in the genome is hit in one of them. That turns a random process into a knockout library that can be searched instead of built to order. Arabidopsis suits it particularly well: its genome carries little redundant sequence and its genes sit densely, so nearly every insertion destroys some gene’s function, and a researcher looks a mutant up in a database rather than making one.”'}
],

ask:[
 {g:'定义类', gn:'他挑一个词问「那是什么」。', items:[
  {r:'高', q:'What is forward genetics, and what is reverse genetics?',
   ez:'“Forward genetics starts at a phenotype. Someone notices a mutant that looks odd. Then the work hunts backwards for the gene responsible. Reverse genetics starts at a sequence. You already have the sequence and not the function. So you break the gene on purpose. Then you read the function off what goes wrong. Knockout is a reverse genetics method.”',
   ezcn:'<b>正向遗传学从表型出发：先发现一个古怪的突变体，再往回追是哪个基因造成的。</b><b>反向遗传学从序列出发：序列已经有了、功能还不知道，于是故意把这个基因弄坏，再从出的问题反推功能。</b><b>敲除属于反向遗传学。</b>',
   en:'“Forward genetics, the classical direction, starts at a mutant with an odd phenotype and hunts backwards for the gene responsible. Reverse genetics runs the other way round: it starts from a sequence already read out of the genome, breaks it on purpose, and reads the function off whatever then goes wrong. Gene knockout is the reverse-genetics move.”'},

  {r:'高', q:'What is a targeting vector?',
   ez:'“A targeting vector is the piece of D N A you introduce. It carries a disrupted copy of the target gene. Two arms on it match the chromosomal sequence. Those arms are where homologous recombination happens. The neo gene sits between them, inside a critical exon. H S V t k sits outside them. So the layout itself decides what gets copied in.”',
   ezcn:'<b>打靶载体 ＝ 你导入的那段 DNA，它带着靶基因被破坏掉的那一份。</b><b>上面有两条跟染色体序列匹配的同源臂，同源重组就发生在那里；neo 在两臂之间、插在一个关键外显子里，HSV-tk 在两臂之外。</b><b>所以这个摆法本身就决定了什么会被拷贝进去。</b>',
   en:'“The targeting vector is the piece of DNA carrying the disrupted copy of the gene. Two arms on it match the chromosomal sequence, and homologous recombination happens between those arms and the chromosome. neo sits between them, inside the target’s most critical exon, and HSV-tk sits outside them. The layout itself decides what is copied in: recombination brings in only what lies between the arms.”'},

  {r:'中', q:'What is a chimera here?',
   ez:'“A chimera is one animal built from two sources. Targeted embryonic stem cells are injected into an early embryo. The animal that grows is part host and part injected cell. Coat colour shows which is which. It is not yet a knockout animal. Only one of the two chromosomes was altered. So it has to be backcrossed first.”',
   ezcn:'<b>嵌合体 ＝ 由两个来源拼成的一只动物：打过靶的 ES 细胞注射进早期胚胎，长出来的动物一部分是受体胚胎、一部分是注射进去的细胞，毛色把两者分开。</b>⚠ <b>它还不是敲除动物：重组只改了两条染色体中的一条，所以还要回交。</b>',
   en:'“A chimera is a single animal built from two cell populations. Targeted ES cells are injected into an early embryo, so the animal that grows is part host and part ES-derived, and coat colour marks which tissue came from where. It is not yet a knockout animal: the recombination altered only one of the two chromosomes, so the chimera is backcrossed, and at least two generations are needed before any animal is homozygous.”'},

  {r:'中', q:'What is a protospacer, and what is a spacer?',
   ez:'“A spacer sits in the bacterium. It is one short sequence in the C R I S P R array. It is a piece of an invader met before. A protospacer sits on the invader. It is the stretch of foreign D N A that the cr R N A matches. So the two are the same sequence in two places. One is the file copy and one is the target.”',
   ezcn:'<b>间隔序列（spacer）在细菌身上：CRISPR 序列里的一小段，是从前遇到过的入侵者留下的一份存档。</b><b>原型间隔序列（protospacer）在入侵者身上：外源 DNA 上跟 crRNA 匹配的那一段。</b><b>所以两者是同一段序列在两个地方——一份是档案，一份是靶子。</b>',
   en:'“A spacer is one of the short sequences in the bacterium’s own CRISPR array, kept on file from an invader met before. A protospacer is the stretch of invading DNA that the crRNA matches. They are the same sequence in two places: the file copy and the target. The difference that matters is the PAM — it sits next to the protospacer on the invader, and not next to the spacer in the array.”'},

  {r:'中', q:'What is non-homologous end joining?',
   ez:'“It is one of the two repair routes after a double strand break. The cell rejoins the two ends directly. No template is used. And the joining often loses a few bases. It can also gain a few. That is why an edit usually shows up as a small insertion or deletion. The other route is homologous recombination against a template.”',
   ezcn:'<b>非同源末端连接（NHEJ）＝ 双链断裂之后两条修复路线之一：细胞把两端直接接回去，不用任何模板，而且接的时候常常丢掉或多出几个碱基。</b><b>这就是编辑通常表现为一小段插入或缺失的原因。</b><b>另一条路是以模板进行的同源重组。</b>',
   en:'“Non-homologous end joining is one of the two ways a cell repairs a double-strand break. It rejoins the two ends directly, with no template, and often loses or gains a few bases doing so. That is why an edit usually appears as a small insertion or deletion. The other route is homologous recombination against a template, an intact matching copy used as the pattern to rebuild from.”'},

  {r:'中', q:'What is the Ti plasmid?',
   ez:'“The Ti plasmid belongs to Agrobacterium. Ti stands for tumour inducing. It carries a transferable segment called T D N A. It carries a virulence region called Vir. It also carries genes for auxin and cytokinin. Those make wound tissue grow into a crown gall. And it carries genes for opines. The bacterium feeds on those.”',
   ezcn:'<b>Ti 质粒是农杆菌身上的质粒，Ti ＝ tumour-inducing（诱导肿瘤）。</b><b>它带着一段可转移的 T-DNA 和一个致毒区 Vir；还带着合成生长素和分裂素的基因（让创伤组织长成冠瘿瘤），以及合成冠瘿碱的基因——那是这个细菌自己的食物。</b>',
   en:'“The Ti plasmid is the plasmid of Agrobacterium, and Ti is for tumour-inducing. It carries a transferable segment, the T-DNA, and a virulence region, Vir. It also carries genes for auxin and cytokinin that make the wound tissue grow into a crown gall, and genes for opines the bacterium feeds on.”'}
 ]},

 {g:'为什么类', gn:'他问「为什么要这么绕」。这一组是这张卡最该答得好的。', items:[
  {r:'高', q:'Why can a knockout not simply be screened for under a microscope?',
   ez:'“Two reasons together. The rate is far too low. The animal rate is ten to the minus two at best. It falls to ten to the minus five. And a correctly recombined cell looks exactly like the others. Nothing about it is visible. So looking cannot find it at any rate. The experiment is rebuilt instead. Only a correctly recombined cell is allowed to stay alive.”',
   ezcn:'<b>两个原因一起成立。</b><b>① 概率太低：动物是 10⁻²–10⁻⁵。</b><b>② 重组对了的细胞在显微镜下跟别的一模一样，没有任何可见的特征。</b><b>所以「看」在任何概率下都找不到它——只能把实验改造成：只有正确重组了的细胞才活得下来。</b>',
   en:'“For two reasons together. The rate is far too low. In animals it is ten to the minus two down to ten to the minus five. In plants it is ten to the minus four to ten to the minus five. And nothing about a correctly recombined cell looks different down a microscope, so even at a workable rate looking would not find it. That is why the experiment is rebuilt so that only a cell which recombined correctly stays alive.”'},

  {r:'高', q:'Why does making a cut deliberately solve the rarity problem?',
   ez:'“Because the cell cannot ignore a double strand break. The nuclease only makes the break. Everything after that is the cell’s own repair. So the break is the tool and the repair is the mechanism. Repair happens at a high rate. That is what replaces waiting for a rare spontaneous event. The same break gives either a clean replacement or a few lost bases. It depends which repair route the cell takes.”',
   ezcn:'因为<b>细胞不可能对一个双链断裂坐视不管</b>。<b>核酸酶只负责「切」，之后的一切是细胞自己的修复——所以切是工具，修复才是机制。</b><b>而修复的发生率很高，这正是取代「等一个罕见的自发事件」的东西。</b><b>同一刀会给出干净的替换、还是丢掉几个碱基，取决于细胞走了哪条修复路线。</b>',
   en:'“Because a cell cannot leave a double-strand break alone. The nuclease only makes the break. Everything that follows is the cell’s own repair. So the break is the tool and its repair the mechanism, and because repair happens at a high rate it replaces waiting for a rare spontaneous recombination. That is exactly why the ten to the minus five rate becomes workable. The same cut gives either a clean templated replacement or a few lost bases, depending on which repair route the cell takes.”'},

  {r:'中', q:'Why is neo placed inside the gene rather than beside it?',
   ez:'“Because one element is doing two jobs. Sitting inside the most critical exon it interrupts the gene. That interruption is the knockout itself. And it still confers resistance to G418. So it is the positive marker at the same time. Placing it beside the gene would select for the event without causing it.”',
   ezcn:'因为<b>一个元件在干两件事</b>：<b>坐在最关键的外显子里面，它打断了这个基因——那个打断本身就是敲除；而它同时仍然赋予 G418 抗性，所以它又是正选标记。</b><b>要是把它放在基因旁边，就只筛选了事件，却没有造成事件。</b>',
   en:'“Because one element is doing two jobs at once. Sitting in the target’s most critical exon, neo interrupts the gene — and that interruption is the knockout itself. At the same time it still confers resistance to G418, so it is also the positive marker. Placing it beside the gene would select for the event without causing it.”'},

  {r:'中', q:'Why must the gene trap reporter have no promoter of its own?',
   ez:'“Because a promoter would make it light up anywhere. Then the signal would say nothing about the landing site. Without a promoter it stays silent in a random spot. It is expressed only when it lands inside a transcribed gene. There it is carried by that gene’s own transcription. So the signal means the insertion interrupted an active gene. The insertion reports itself.”',
   ezcn:'因为<b>自带启动子的话它落在哪儿都会亮，那个信号就什么也说明不了</b>。<b>不带启动子，它落在随机的地方就是哑的；只有落进一个正在被转录的基因里，才被那个基因自己的转录带着表达出来。</b><b>所以「亮」这件事本身就意味着「插入打断了一个活跃的基因」——插入事件自己报告自己。</b>',
   en:'“Because a promoter of its own would make it light up wherever it landed, and the signal would then say nothing about the site. Without one it stays silent in a random spot and is expressed only when it lands inside a gene the cell is already transcribing, carried along by that gene’s own transcription as a fusion protein. So a signal means the insertion has interrupted an active gene — the insertion reports itself, and sequencing the flanking DNA names the gene that was hit.”'},

  {r:'中', q:'Why is Arabidopsis the plant used for insertion libraries?',
   ez:'“Because its genome wastes very little space. It carries little redundant sequence. And its genes sit densely. So nearly every random insertion lands inside some gene. And nearly every insertion therefore destroys a function. That makes a library of independent lines cover the genome efficiently. A researcher then looks a mutant up rather than making one.”',
   ezcn:'因为<b>它的基因组几乎不浪费空间</b>：<b>冗余序列少、基因密度高，所以几乎每一次随机插入都落在某个基因里面，也就几乎每一次都毁掉一个功能。</b><b>这让「一批独立株系」能很高效地覆盖整个基因组——研究者于是去数据库里查一个突变体，而不是去做一个。</b>',
   en:'“Because its genome wastes very little space: it carries little redundant sequence and its genes sit densely, so nearly every insertion lands inside some gene and destroys its function. That makes a set of independent insertion lines cover the genome efficiently. And that is what turns the random process into a searchable library. A researcher looks a mutant up in a database rather than making one.”'}
 ]},

 {g:'⚠ 陷阱', gn:'说错了听起来还挺对的地方。', items:[
  {r:'高', q:'（陷阱）把药物筛选说成证明',
   ez:'“Selection only enriches. It never proves. A cell can survive both drugs for reasons you did not plan. So a surviving colony is a candidate and not a result. Every surviving line is still checked. P C R and Southern blot do that checking.”',
   ezcn:'⚠ <b>筛选只做富集，从不做证明。</b><b>细胞能在两种药里活下来，可能出于你没设想的原因——所以活下来的菌落是候选，不是结果。</b><b>每一个活下来的细胞系仍然要用 PCR 和 Southern 杂交验过。</b>',
   en:'“Selection only enriches — it never proves, because a cell can survive both drugs for reasons other than the one intended. A surviving line is a candidate, not a result, and every one of them is still checked by PCR and Southern blot before it is believed.”'},

  {r:'中', q:'（陷阱）以为 CRISPR 的编辑也能靠药筛出来',
   ez:'“Nothing in a C R I S P R edit confers a drug resistance. Unlike the neo of a targeting vector, no marker is left behind. And the edit itself is only a few bases. So there is nothing to select on at all. Screening has to be indirect, and sequencing settles it.”',
   ezcn:'⚠ <b>CRISPR 的编辑不留下任何抗性。</b><b>跟打靶载体里的 neo 不同，这里没有任何标记留下来，而编辑本身只有几个碱基——所以根本没有东西可供筛选。</b><b>鉴定只能间接做，最后由测序定案。</b>',
   en:'“Unlike the neo of a targeting vector, nothing in a CRISPR edit confers a drug resistance, so there is no marker to select on, and the edit itself is only a few inserted or deleted bases. Screening therefore has to be indirect. It uses a destroyed restriction site, or T7 endonuclease one on re-annealed PCR product. And sequencing settles it either way.”'},

  {r:'中', q:'（陷阱）把嵌合体当成敲除动物',
   ez:'“A chimera is not yet a knockout animal. The recombination altered only one of the two chromosomes. And only part of the animal came from the targeted cells. So the chimera is backcrossed. At least two generations are needed. Only then can an animal be homozygous for the knockout.”',
   ezcn:'⚠ <b>嵌合体还不是敲除动物。</b><b>重组只改了两条染色体中的一条，而且这只动物只有一部分来自打过靶的细胞。</b><b>所以嵌合体还要回交，至少两代之后才可能出现敲除纯合的动物。</b>',
   en:'“A chimera is not yet a knockout animal. The recombination altered only one of the two chromosomes, and only part of the animal derives from the targeted cells at all. So the chimera is backcrossed, and at least two generations are needed before any animal is homozygous for the knockout.”'},

  {r:'中', q:'（陷阱）说 LoxP 的方向无所谓',
   ez:'“Direction decides what Cre does. Two Lox P sites pointing the same way give a deletion. Cre joins them and removes everything between. Two pointing opposite ways give an inversion instead. So the targeting vector places both sites in the same orientation. Otherwise the piece is turned round rather than removed.”',
   ezcn:'⚠ <b>方向决定 Cre 干什么。</b><b>两个同向的 LoxP 给出删除：Cre 把它们接起来、去掉中间的一切。</b><b>两个反向的给出的是倒位。</b><b>所以打靶载体把两个位点放成同一个方向——否则那一段是被翻过来，而不是被拿走。</b>',
   en:'“Direction decides what Cre does. Two LoxP sites pointing the same way give a deletion, because Cre joins them and removes everything lying between. Two pointing in opposite directions give an inversion instead. So the targeting vector places both sites in the same orientation. Otherwise the piece is turned round rather than taken out.”'},

  {r:'中', q:'（陷阱）把 PAM 说成靶序列的一部分',
   ez:'“The P A M is next to the target and not in it. The guide is complementary to the twenty bases of the protospacer. The P A M follows immediately after them. It is not part of what the guide pairs with. And the cut falls three bases upstream of it. So the P A M limits where a cut can be aimed. It does not tell you what the guide should be.”',
   ezcn:'⚠ <b>PAM 在靶序列旁边，不在靶序列里面。</b><b>引导序列互补的是原型间隔序列那 20 个碱基，而 PAM 紧跟在它们后面，不属于引导序列配对的那一段；切点落在 PAM 上游第三个碱基处。</b><b>所以 PAM 限制的是「刀能瞄到哪里」，它不告诉你引导序列该是什么。</b>',
   en:'“The PAM sits next to the target rather than inside it. The guide is complementary to the twenty bases of the protospacer, and the PAM follows immediately after them, so it is not part of what the guide pairs with. The cut itself falls three bases upstream of it. The PAM therefore limits where a cut can be aimed. It does not tell you what the guide sequence should be.”'}
 ]},

 {g:'相邻考点', gn:'从这道题最容易走到哪儿。', items:[
  {r:'高', q:'（走向 mb-int）If a knockout is lethal, what else could you do?',
   ez:'“Two routes are open. One stays in the genome. A conditional knockout puts the removal under Cre. Then the gene dies only in one tissue and only after a chosen time. The other leaves the genome alone. R N A interference destroys the message instead. That gives a knockdown rather than a knockout. The product is reduced and not absent.”',
   ezcn:'<b>两条路。</b><b>① 仍然动基因组：条件敲除，把「删」交给 Cre——基因只在某一个组织里、某一个时间之后才死掉。</b><b>② 不动基因组：用 RNA 干扰去毁掉 mRNA，那给的是敲低而不是敲除——产物是变少，不是没有。</b>',
   en:'“Two routes. One stays in the genome. A conditional knockout puts the removal under Cre, so the gene is lost only in a chosen tissue and only after a chosen time. That is how a gene whose complete knockout is lethal still gets studied. The other leaves the genome alone. RNA interference destroys the message instead, and that gives a knockdown rather than a knockout. The product is reduced, not absent.”'},

  {r:'中', q:'（走向 16）What is homologous recombination, exactly?',
   ez:'“It is an exchange between two matching sequences. One is the D N A you introduce. The other is the chromosomal site that matches it. The exchange copies in what lies between the two matching arms. It happens on its own but very rarely. And it is also one of the two repair routes after a double strand break. There it works against an intact template.”',
   ezcn:'<b>同源重组 ＝ 两段互相匹配的序列之间的交换</b>：<b>一段是你导入的 DNA，另一段是染色体上与之对应的位点；交换把两条同源臂之间的东西拷贝进去。</b><b>它自己会发生，但非常罕见。</b><b>而且它同时也是双链断裂之后的两条修复路线之一——在那里它以一份完好的拷贝为模板。</b>',
   en:'“It is an exchange between two matching sequences, the DNA you introduce and the chromosomal site that matches it. The exchange copies in whatever lies between the two matching arms. It happens on its own, but very rarely, at ten to the minus two down to ten to the minus five in animals. It is also one of the two repair routes after a double-strand break, and there it works against an intact template rather than against introduced DNA.”'},

  {r:'中', q:'（走向 12）Why does the promoter in front of Cre matter so much?',
   ez:'“Because Cre is itself a gene. So it is made only where its promoter is active. And it is made only when that promoter is on. Whatever decides when and where Cre appears decides when and where the target gene dies. A tissue specific promoter fixes the place. A drug inducible one fixes the time.”',
   ezcn:'因为 <b>Cre 自己也是一个基因</b>：<b>它只在它的启动子活跃的地方被做出来，也只在那个启动子被打开的时候被做出来。</b><b>所以「何时何地有 Cre」就决定了「何时何地靶基因死掉」——组织特异性启动子定地点，药物诱导型启动子定时间。</b>',
   en:'“Because Cre is itself a gene, so it is made only where its promoter is active and only when that promoter is switched on. Whatever decides when and where Cre appears decides when and where the target gene dies. A tissue-specific promoter fixes the place and a drug-inducible one fixes the time. That is what turns a knockout which would be lethal into an experiment you can actually run.”'},

  {r:'中', q:'（走向 pe-clone）What is the binary vector system?',
   ez:'“It solves a handling problem. A Ti plasmid is large and awkward to cut and rejoin. In a binary system two plasmids are used and they never recombine. Each replicates independently. One helper Ti plasmid keeps Vir and has lost its T D N A entirely. A separate shuttle plasmid carries the gene between a left border and a right border. Vir recognises those two borders and cuts there.”',
   ezcn:'<b>它解决的是操作问题：Ti 质粒很大，切开再接回去很不好做。</b><b>双元载体系统用两个质粒，而且两者之间不发生同源重组、各自独立复制：辅助 Ti 质粒只保留 Vir 功能、T-DNA 区已被整个删掉；另一个穿梭质粒把目的基因夹在左臂（LB）和右臂（RB）之间。</b><b>Vir 认的就是这两个边界，并在那里下刀。</b>',
   en:'“It solves a handling problem, because a Ti plasmid is large and awkward to cut and rejoin. In a binary system two plasmids are used which never recombine with each other and replicate independently. One is a helper Ti plasmid that keeps the Vir functions and has lost its T-DNA region entirely. The other is a shuttle plasmid carrying the gene of interest between a left border and a right border. Vir recognises those two borders and cuts there, so the gene travels while the machinery stays behind.”'}
 ]},

 {g:'桥回主场', gn:'把话拉回你真正做的事。', items:[
  {r:'高', q:'Does any of this connect to your own work?',
   ez:'“It connects through one idea. Both need the genotype and the phenotype physically linked. A knockout keeps that link inside an animal. The altered chromosome and the phenotype travel together. Yeast display keeps it inside a cell. Each cell shows its own variant on its surface. But the questions are opposite. Knockout asks whether a gene is necessary. My work asks whether a protein can be made better.”',
   ezcn:'<b>通过一个想法连着：两者都需要基因型和表型在物理上拴在一起。</b><b>敲除是把这条连接留在一只动物身上——被改过的染色体和表型一起往下走；酵母展示是把它留在一个细胞上——每个细胞把自己的变体展示在表面。</b><b>但问的问题是相反的：敲除问「这个基因是不是必需的」，我的工作问「这个蛋白能不能被改得更好」。</b>',
   en:'“It connects through one idea: both need the genotype and the phenotype to stay physically linked, so that whatever you find can be recovered and read. A knockout keeps that link inside an animal — the altered chromosome and the phenotype travel together. Yeast display keeps it inside a cell, where each cell shows its own variant on its surface. The questions are opposite, though. Knockout is loss of function, and it asks whether a gene is necessary. Directed evolution is gain of function, and it asks whether a protein can be made better.”'},

  {r:'中', q:'Would you use CRISPR in your own work?',
   ez:'“I would answer by what I need. C R I S P R changes a genome at a chosen site. My question is not about a chosen site. It is about many variants at once. So I build a library and let a selection choose between them. Where the two meet is a screen. A pooled C R I S P R screen also links a guide sequence to a phenotype. And reading that link back out is sequencing, exactly as in my own work.”',
   ezcn:'<b>我会按「我需要什么」来回答。</b><b>CRISPR 改的是基因组上一个选定的位点，而我的问题不是关于某一个选定的位点，是关于同时比较很多个变体——所以我建文库，让筛选在它们之间挑。</b><b>两者相遇的地方是「筛选」：混合的 CRISPR 筛选同样是把一段引导序列跟一个表型拴在一起，而把这条连接读回来靠的也是测序，跟我做的事一模一样。</b>',
   en:'“I would answer by what I need. CRISPR changes a genome at a chosen site, and my question is not about a chosen site. It is about many variants at once, so I build a library and let a selection choose between them. Where the two meet is the screen. A pooled CRISPR screen also links a guide sequence to a phenotype, and reading that link back out is sequencing, exactly as in my own work.”'}
 ]}
]
});
