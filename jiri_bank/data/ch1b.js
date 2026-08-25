/* =========================================================================
   JIRI BANK — Chapter 1b . Basic Lab Techniques, written for this bank

   Hand-written here, NOT generated. data/ch1.js is rebuilt by tools/port.py
   and anything added to it is destroyed on the next run; this file is where
   new Lab-Techniques nodes belong. Mirrors the ch2/ch2b split exactly.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

{
  id: '1-7',
  chapter: 1,
  lecture: 'Lab',
  section: '1.7',
  slides: 'S3 Lab 8（凝胶电泳原理）· S3 Lab 11（Western blot 原理）· S3 Lab 12（loading control 的作用）',
  coverage: 'partial',
  enTitle: 'Gel electrophoresis and the blot family — separate, transfer, then ask a specific question',
  cnTitle: '凝胶电泳与印迹家族——先分离，再转印，再问一个具体的问题',
  coverageNote: 'Three printed sheet questions land here, and all three were among the eight in the ' +
                'question index with no confident source anywhere in 13 MB (GAP_REPORT.md / qindex.py). ' +
                'Checked directly: every "Western blot" hit in pesbexplain (1.2.5, 1.7, 2.10, 2.14, 6.5) ' +
                'is a name-drop in a quiz option or a use-case list — none explains what a blot is. ' +
                'The one thing that is NOT a gap is the underlying separation step for a protein blot: ' +
                'pesbexplain 2-43 already teaches SDS-PAGE in full, including the three-jobs argument ' +
                'for why SDS makes migration track molecular weight alone, and that logic is imported ' +
                'here rather than rewritten, per SCOPE.md. What is new is agarose gel electrophoresis of ' +
                'nucleic acids (S3 Lab 8 sits between "standard solution" and "DNA extraction" on the ' +
                'sheet, which is the microbiology reading of "gel electrophoresis" rather than the ' +
                'protein one), the whole transfer-and-probe logic of blotting, and the loading-control ' +
                'question, which is a specific and frequently mis-answered follow-up.',

  summary: {
    en: 'Gel electrophoresis separates by size, and the two common gels use size for opposite reasons. ' +
        'Agarose separates nucleic acids: DNA already carries a uniform negative charge on its ' +
        'phosphate backbone, so no denaturant is needed, and a agarose gel is really a sieve of pores ' +
        'whose average size is set by the agarose percentage, so a higher percentage gel resolves ' +
        'smaller fragments and a lower percentage gel resolves larger ones. SDS-PAGE separates proteins, ' +
        'which do not carry a uniform charge on their own, so SDS is added to impose one and to unfold ' +
        'the protein into a rod, and only then does migration depend on size alone. A blot takes either ' +
        'gel one step further: the separated bands are transferred out of the fragile gel onto a solid ' +
        'membrane, where a specific probe can find one species among thousands. Southern blot probes ' +
        'for DNA with a complementary nucleic acid probe, Northern blot probes for RNA the same way, ' +
        'and Western blot probes for protein with an antibody, detected through a labelled secondary ' +
        'antibody and a chemiluminescent or fluorescent readout. A loading control is a second, ' +
        'unrelated protein probed on the same membrane, chosen because its abundance does not change ' +
        'under the experiment\'s conditions, so that a difference in the band of interest can be read as ' +
        'a real biological difference rather than as unequal loading, uneven transfer, or degraded ' +
        'sample.',
    cn: '凝胶电泳按大小分离，而两种常见的胶是出于相反的原因才能靠大小分离。琼脂糖分离核酸：' +
        'DNA 的磷酸骨架天然带有均一的负电荷，不需要变性剂；琼脂糖胶本质上是一张孔径网，' +
        '平均孔径由琼脂糖浓度决定——浓度越高，分辨的片段越小；浓度越低，分辨的片段越大。' +
        'SDS-PAGE 分离蛋白，而蛋白本身不带均一的电荷，所以要加 SDS 来赋予均一电荷、并把蛋白展开成棒状，' +
        '这样迁移率才只取决于大小。印迹是在凝胶电泳之后再往前走一步：把分离好的条带从脆弱的凝胶转印到固相膜上，' +
        '这样一个特异的探针才能在成千上万种分子里找到那一种。Southern blot 用互补核酸探针探测 DNA，' +
        'Northern blot 用同样的方式探测 RNA，Western blot 用抗体探测蛋白，' +
        '再通过带标记的二抗和化学发光或荧光读出。loading control（上样内参）是同一张膜上另外探测的、' +
        '一个不相关的蛋白，选它是因为它的丰度在这个实验的条件下不会变化，' +
        '这样目的条带上的差异才能被解读为真实的生物学差异，而不是上样不均、转印不均或样品降解。'
  },

  mustKnow: '**分开三个概念，它们经常被当成一回事：胶（怎么分离）、转印（怎么搬到膜上）、探测（怎么找到那一种）。** ' +
            '琼脂糖靠 DNA 自带的均一电荷分离，SDS-PAGE 靠人为赋予的均一电荷分离。' +
            'Western/Southern/Northern 只是探针不同（抗体 / DNA 探针 / DNA 探针探 RNA），' +
            '「转印」这一步三者共用。**loading control 回答的是「差异是真的还是上样不均」，不是「蛋白存不存在」。** ' +
            'Separate three concepts that get collapsed into one: the gel (how you separate), the ' +
            'transfer (how it gets onto the membrane), and the probe (how you find the one species). ' +
            'A loading control answers "is the difference real or just unequal loading", not "is the ' +
            'protein present".',

  skipIt: 'Do not memorise specific transfer voltages, transfer times, or membrane pore sizes (PVDF vs ' +
          'nitrocellulose) beyond knowing both exist. Do not memorise a catalogue of housekeeping genes ' +
          'or loading-control proteins beyond one worked example (GAPDH, actin, or tubulin) and the ' +
          'reasoning for why it is chosen, since the reasoning is what is tested, not the name. ' +
          '不用背具体的转印电压、时间，或者膜的孔径参数，知道 PVDF 和硝酸纤维素两种膜都存在就够。' +
          '不用背一整张内参蛋白清单，记一个例子（GAPDH、actin 或 tubulin）和挑选它的道理就够——' +
          '考的是道理，不是名字。',
  explain: [
    {
      q: 'Agarose gel electrophoresis needs no denaturant and no charge-imposing agent, but SDS-PAGE ' +
         'needs both. Why does the same technique — separation by an electric field through a gel — ' +
         'require completely different chemistry for the two molecules? ' +
         '（琼脂糖凝胶电泳不需要变性剂也不需要赋予电荷的试剂，SDS-PAGE 却两个都要。' +
         '同样是「靠电场穿过凝胶来分离」，为什么两种分子需要完全不同的化学处理？）',
      a: '**Because migration by size alone requires charge-per-unit-mass to already be uniform across ' +
         'the sample, and DNA starts that way while proteins do not.**\n\n' +
         'Every nucleotide in a DNA or RNA backbone contributes exactly one phosphate group, and every ' +
         'phosphate carries one negative charge at the pH the gel is run at. **So a 100-base fragment ' +
         'and a 10,000-base fragment have exactly the same charge per unit length**, regardless of what ' +
         'sequence they carry. Sequence affects which bases are present, not how many phosphates are on ' +
         'the backbone. That uniformity is already built into the molecule before it goes anywhere near ' +
         'a gel, so nothing has to be added to create it.\n\n' +
         'A folded, native protein has none of that. Its net charge is set by how many acidic versus ' +
         'basic side chains it happens to have and by the pH of the buffer — two proteins of identical ' +
         'size can carry opposite net charges, and one might barely move while the other runs off the ' +
         'gel. **Charge, for a protein, is a property of the sequence, not of the backbone**, so it has ' +
         'to be manufactured artificially before size becomes the only variable. That is exactly what ' +
         'SDS does: it coats the unfolded chain at a roughly constant ratio of SDS molecules per amino ' +
         'acid, so its own strongly negative charge swamps whatever the protein\'s side chains ' +
         'contributed, and every protein ends up with the same charge-to-mass ratio regardless of ' +
         'sequence.\n\n' +
         '**The one thing both gels still share is the sieve.** Agarose and polyacrylamide are both ' +
         'porous meshes, and a longer or bigger molecule threads through the pores more slowly than a ' +
         'shorter one. Charge uniformity is what makes that sieving effect the *only* thing being ' +
         'measured; without it, an electrophoresis result cannot be read as a size at all — which is ' +
         'the same argument node 2-43 makes for why native PAGE cannot report a molecular weight. ' +
         '（因为按大小迁移这件事，前提是样品里每个分子「每单位质量带的电荷」已经是均一的，' +
         '而 DNA 天生就是这样，蛋白不是。DNA 或 RNA 骨架上每一个核苷酸都恰好贡献一个磷酸基团，' +
         '在跑胶的 pH 下每个磷酸都带一个负电荷。所以一个 100 碱基的片段和一个一万碱基的片段，' +
         '每单位长度的电荷完全相同，跟序列是什么无关——序列只决定有哪些碱基，不决定骨架上有多少磷酸。' +
         '这种均一性在分子进胶之前就已经写在分子本身里了，所以不需要额外添加任何东西去制造它。' +
         '折叠好的天然蛋白完全没有这个性质：它的净电荷取决于它恰好有多少酸性和碱性侧链、以及缓冲液的 pH——' +
         '两个大小相同的蛋白可以带相反的净电荷，一个几乎不动、另一个跑出胶外。对蛋白来说，' +
         '电荷是序列的性质，不是骨架的性质，所以必须人为制造出电荷的均一性，大小才能成为唯一的变量。' +
         '这正是 SDS 做的事：它以大致恒定的比例包裹到展开的链上，它自己强烈的负电荷压过蛋白侧链原本贡献的电荷，' +
         '于是每个蛋白最终都有相同的电荷/质量比，跟序列无关。两种胶仍然共用的是那张筛网：' +
         '琼脂糖和聚丙烯酰胺都是多孔网络，更长或更大的分子穿过孔隙更慢。电荷均一正是让「筛分」成为唯一被测量的东西的前提；' +
         '没有它，电泳结果就根本读不出「大小」——这和节点 2-43 里「为什么 native PAGE 读不出分子量」是同一个论证。）'
    },
    {
      q: 'A blot is described as "transfer, then probe". Why can the probing step not simply be done ' +
         'inside the gel itself, skipping the transfer? ' +
         '（印迹被描述为「转印，再探测」。为什么探测这一步不能直接在凝胶里做，跳过转印？）',
      a: '**Because a probe — an antibody or a nucleic-acid strand — is a large reagent that cannot ' +
         'diffuse through the pores of the gel that just separated your sample, and the gel itself is ' +
         'too fragile to survive the washing a real detection protocol requires.**\n\n' +
         'The gel matrix that made separation possible is the same matrix that blocks the next step. ' +
         'Agarose and polyacrylamide pores are sized to slow down macromolecules — that is the whole ' +
         'principle of the sieve — which means a bulky IgG antibody, or a labelled nucleic-acid probe ' +
         'annealing to its target, would need hours to penetrate a gel a few millimetres thick, and ' +
         'would do so unevenly. Detection also requires repeated washing to remove unbound probe and ' +
         'background, and a soft hydrated gel breaks apart under that handling long before a membrane ' +
         'would.\n\n' +
         '**So the bands are moved once, while their relative positions are still fixed, onto a ' +
         'mechanically robust membrane** — nitrocellulose or PVDF for protein, a nylon membrane for ' +
         'nucleic acids — usually by applying an electric field perpendicular to the original run ' +
         'direction (electroblotting) or by capillary action drawing buffer through the gel and ' +
         'membrane stack. The membrane binds the transferred molecules on its surface rather than in a ' +
         'three-dimensional mesh, so a probe added afterwards only has to reach a surface, not diffuse ' +
         'through a gel, and the membrane survives as many wash and strip cycles as the experiment ' +
         'needs.\n\n' +
         '**This is also why the family name makes sense**: whatever moved across in the transfer step ' +
         'is unchanged — Southern still means DNA, Northern still means RNA, Western still means ' +
         'protein — the blot names only add the probing chemistry on top of a shared physical operation. ' +
         '（因为探针——抗体或核酸链——是一种个头很大的试剂，没办法扩散穿过刚刚完成分离的凝胶的孔隙，' +
         '而凝胶本身也脆弱到扛不住真正的检测流程所需要的反复洗涤。让分离得以实现的那张凝胶网络，' +
         '恰恰也是挡住下一步的那张网络。琼脂糖和聚丙烯酰胺的孔径本来就是为了拖慢大分子——这正是筛分的原理——' +
         '这意味着一个体积不小的 IgG 抗体，或者一条要去退火结合靶标的标记核酸探针，' +
         '要穿透几毫米厚的凝胶需要数小时，而且穿透得并不均匀。检测还需要反复洗涤去除未结合的探针和背景，' +
         '而柔软含水的凝胶在这种操作下早就散架了。所以要在条带的相对位置还固定的时候，把它们一次性搬到一张' +
         '机械上更结实的膜上——蛋白用硝酸纤维素或 PVDF，核酸用尼龙膜——通常靠垂直于原电泳方向再加一次电场' +
         '（电转印），或者靠毛细作用把缓冲液吸过凝胶和膜的叠层。膜把转印过来的分子结合在表面，' +
         '而不是结合在一个三维网络里，所以之后加的探针只需要到达一个表面，不需要穿透凝胶，' +
         '膜也能承受实验所需要的任意多次洗涤和剥离重探。这也是为什么这个家族的名字讲得通：' +
         '转印过去的东西本身没有变——Southern 还是指 DNA，Northern 还是指 RNA，Western 还是指蛋白——' +
         '这几个名字只是在同一个物理操作之上，各自加上了自己的探测化学。）'
    },
    {
      q: 'Two lanes on a Western blot show different amounts of your protein of interest. What has to ' +
         'be true of the loading control before you are allowed to call that difference biological? ' +
         '（Western blot 两条泳道里目的蛋白的量不一样。在你能把这个差异叫做「生物学差异」之前，' +
         '上样内参必须满足什么条件？）',
      trace: {
        what: '**loading control 回答的问题是「这条泳道里到底上了多少总蛋白」，不是「目的蛋白存不存在」。** ' +
              '它是同一张膜上另外探测的第二个蛋白，通常是丰度很高、看起来到处都差不多的那种——' +
              'actin、tubulin、GAPDH 是三个常举的例子。',
        from: '**它必须是一个「已知在你的实验条件下不会变化」的蛋白。**这不是一个可以随便挑的名字——' +
              '选错了，内参本身就在变，结论就整个垮掉。',
        to: '**用法是做比值，不是看它有没有条带。**目的蛋白条带的灰度除以内参条带的灰度，' +
            '两条泳道的比值互相比较，这才是「归一化」；单独说「内参条带都在」只能排除完全没上样这种极端情况。',
        family: '同一族的检查还有：**转印效率**（丝考马斯或丽春红总蛋白染色，确认膜上确实转印均匀）、' +
                '**总蛋白定量归一化**（不用单一内参蛋白、而是给整张膜的总蛋白染色，现在被认为比单一内参更可靠，' +
                '因为单一内参本身也可能在某些处理下改变表达）。',
        numbers: '没有一个通用的「正常」内参条带强度可以背；这一节没有必须记的数字。'
      },
      a: '**The loading control has to be a protein whose abundance is independently known not to ' +
         'change under the specific conditions of that experiment — and "independently known" is doing ' +
         'all the work in that sentence.**\n\n' +
         'The reasoning behind a Western blot result is only as strong as the assumption that every ' +
         'lane started with the same amount of total protein. That assumption can fail in several ' +
         'ways that have nothing to do with biology: pipetting a slightly different volume into each ' +
         'well, uneven transfer efficiency across the membrane, or partial degradation in one sample ' +
         'but not another. **A loading control is the experiment\'s way of checking that assumption ' +
         'rather than simply trusting it.** A second protein is probed on the same membrane, and if ' +
         'its band is the same intensity across every lane, the total-protein assumption holds and a ' +
         'difference in the protein of interest can be attributed to the experiment. If the loading ' +
         'control band itself varies, no conclusion about the protein of interest is safe, because you ' +
         'cannot tell whether it changed or whether loading did.\n\n' +
         '**The condition on the control is therefore not "it is abundant" but "it does not respond to ' +
         'the treatment being tested."** Actin, tubulin and GAPDH are common choices precisely because ' +
         'they are usually stable structural or housekeeping proteins — but usually is the operative ' +
         'word, and each has documented exceptions: GAPDH expression shifts under some metabolic and ' +
         'hypoxic conditions, and actin or tubulin levels can shift during cytoskeletal remodelling or ' +
         'cell-cycle changes. Choosing a loading control is therefore a judgement about the specific ' +
         'experiment, not a fixed rule, and reviewers routinely ask why a particular control was ' +
         'trusted for a particular treatment.\n\n' +
         '**The actual use is a ratio, not a presence check.** The band intensity of the protein of ' +
         'interest is divided by the band intensity of the loading control in the same lane, and it is ' +
         'those normalised ratios that are compared across lanes — merely observing that a loading-' +
         'control band exists in every lane only rules out the extreme case of a totally empty well. ' +
         'A newer and increasingly preferred alternative sidesteps the single-protein assumption ' +
         'entirely: staining the whole membrane for total protein and normalising to that, since a ' +
         'single reference protein can itself change under some treatments in ways nobody checked for. ' +
         '（上样内参必须是一个独立已知——在这个具体实验的条件下——不会变化的蛋白，「独立已知」这四个字是重点。' +
         'Western blot 结果的说服力，完全建立在「每条泳道一开始上样的总蛋白量相同」这个假设上，' +
         '而这个假设可能因为一些和生物学毫无关系的原因而失效：每孔加样体积略有差异、膜上转印效率不均、' +
         '某一份样品部分降解而另一份没有。上样内参就是用来核实这个假设，而不是简单地相信它：' +
         '在同一张膜上再探测第二个蛋白，如果它的条带在所有泳道里强度一致，' +
         '总蛋白相同这个假设就站得住，目的蛋白上的差异才能归因于实验本身；' +
         '如果内参条带自己都不一样，那么关于目的蛋白的任何结论都不安全，因为你分不清是它变了还是上样量变了。' +
         '所以对内参的要求不是「丰度高」，而是「对这个处理不响应」——actin、tubulin、GAPDH 之所以常被选用，' +
         '正是因为它们通常是稳定的结构蛋白或管家蛋白，但「通常」才是关键词，三者都有记录在案的例外：' +
         'GAPDH 在某些代谢或缺氧条件下表达会变，actin 或 tubulin 在细胞骨架重塑或细胞周期变化中水平也会变。' +
         '所以选内参是针对具体实验的判断，不是一条固定规则，审稿人也经常会问为什么某个内参在某个处理下值得信任。' +
         '真正的用法是做比值而不是看有没有条带：目的蛋白条带的强度除以同一泳道内参条带的强度，' +
         '拿这些归一化后的比值去跨泳道比较——只看到「每条泳道都有内参条带」，只能排除完全没上样这种极端情况。' +
         '一种更新、越来越受青睐的替代方案，干脆绕开了「单一内参蛋白」这个假设：给整张膜的总蛋白染色，' +
         '拿总蛋白量做归一化，因为单一的参照蛋白本身也可能在某些没人专门查过的处理下发生变化。）',
      takeaway: '内参的条件是「对这个处理不响应」，不是「丰度高」；用法是做比值，不是看条带在不在。'
    }
  ],

  points: [
    { term: 'Agarose separates by an intrinsic property', en: 'DNA and RNA carry one negative charge per phosphate in the backbone, uniform regardless of sequence, so no denaturant or charge-imposing reagent is needed before size becomes the only variable.', cn: '琼脂糖靠分子固有的性质分离：DNA 和 RNA 骨架上每个磷酸带一个负电荷，与序列无关、天然均一，所以不需要变性剂或赋予电荷的试剂，大小就已经是唯一变量。' },
    { term: 'Agarose percentage sets the resolving range', en: 'A higher percentage gel has smaller average pores and resolves smaller fragments better; a lower percentage gel resolves larger fragments better. Percentage is chosen for the expected fragment size, not fixed.', cn: '琼脂糖浓度决定分辨范围：浓度越高，平均孔径越小，越擅长分辨小片段；浓度越低，越擅长分辨大片段。浓度要按预期片段大小来选，不是固定值。' },
    { term: 'SDS-PAGE separates by an imposed property', en: 'Proteins do not carry uniform charge on their own, so SDS is added to coat the unfolded chain and impose one, which is why the technique needs a denaturant that DNA electrophoresis does not (see node 2-43 for the full three-jobs argument).', cn: 'SDS-PAGE 靠人为赋予的性质分离：蛋白本身不带均一电荷，所以要加 SDS 包裹展开的链、人为赋予电荷，这就是为什么这个技术需要变性剂，而 DNA 电泳不需要（完整的「三件事」论证见节点 2-43）。' },
    { term: 'The sieve is the one thing both gels share', en: 'Agarose and polyacrylamide are both porous meshes that slow larger molecules more than smaller ones. Charge uniformity — intrinsic for DNA, imposed for protein — is what lets that sieving be read as size alone.', cn: '两种胶共用的是那张筛网：琼脂糖和聚丙烯酰胺都是多孔网络，让大分子比小分子走得更慢。电荷均一——DNA 天生如此、蛋白靠人为赋予——正是让这种筛分能被读作「纯粹的大小」的前提。' },
    { term: 'Why probing cannot happen inside the gel', en: 'A probe (antibody or nucleic acid) cannot diffuse efficiently through gel pores sized to slow macromolecules, and the soft hydrated gel cannot survive the repeated washing detection requires.', cn: '探测为什么不能在凝胶里直接做：探针（抗体或核酸）没法有效扩散穿过本来就是为了拖慢大分子而设计的孔隙，而柔软含水的凝胶也扛不住检测所需的反复洗涤。' },
    { term: 'Transfer moves bands to a robust surface', en: 'Electroblotting or capillary transfer moves the separated bands, positions preserved, onto nitrocellulose or PVDF (protein) or nylon (nucleic acids) — a membrane that binds molecules on its surface and survives repeated wash and strip cycles.', cn: '转印把分离好的条带、保持相对位置，搬到一个更结实的表面上——蛋白用硝酸纤维素或 PVDF，核酸用尼龙膜——这种膜把分子结合在表面，能承受反复的洗涤和剥离重探。' },
    { term: 'The blot family differs only in the probe', en: 'Southern blot detects DNA with a complementary nucleic-acid probe, Northern blot detects RNA the same way, Western blot detects protein with a primary antibody and a labelled secondary. The physical transfer step is identical across all three.', cn: '印迹家族的区别只在探针：Southern blot 用互补核酸探针探测 DNA，Northern blot 同样的方式探测 RNA，Western blot 用一抗加带标记的二抗探测蛋白。三者的物理转印步骤完全相同。' },
    { term: 'Chemiluminescence is the common Western readout', en: 'A secondary antibody conjugated to an enzyme (commonly HRP) converts a substrate into light in proportion to how much antibody is bound, which is captured on film or a digital imager. Fluorescent secondaries are a label-free-of-substrate alternative.', cn: 'Western blot 最常见的读出方式是化学发光：连接了酶（通常是 HRP）的二抗把底物转化为光，光强与结合的抗体量成正比，用胶片或数码成像仪捕捉。荧光二抗是不依赖底物的另一种选择。' },
    { term: 'A loading control checks the total-protein assumption', en: 'A second protein probed on the same membrane, chosen because it is independently known not to respond to the treatment being tested — not merely because it is abundant. If its band varies across lanes, no conclusion about the protein of interest is safe.', cn: '上样内参是在同一张膜上探测的第二个蛋白，选它是因为它被独立证明对该处理不响应——而不仅仅因为丰度高。如果它的条带在泳道间不一致，任何关于目的蛋白的结论都不安全。' },
    { term: 'The control is used as a ratio, not a presence check', en: 'The band intensity of the protein of interest is divided by the loading-control intensity in the same lane, and those normalised values are what get compared across lanes.', cn: '内参的用法是做比值，不是看有没有条带：目的蛋白条带强度除以同一泳道内参强度，比较的是这些归一化之后的值。' },
    { term: 'Total-protein staining is the newer alternative', en: 'Staining the whole membrane for total protein and normalising to that avoids relying on a single reference protein, which can itself change expression under conditions nobody checked for.', cn: '给整张膜的总蛋白染色再做归一化，是更新的替代方案，避免了依赖单一参照蛋白——而这个参照蛋白本身也可能在没人查过的条件下改变表达。' }
  ],
  beyondPoints: [
    { term: 'The naming is historical, not descriptive', en: 'Edwin Southern developed the DNA-detection method in 1975 and it is named after him. When RNA detection followed, it was named "Northern" as a pun on the geographic direction, and when protein detection followed that, it became "Western" for the same joke. There is no southern, northern or western chemistry — the names are a running pun on a person\'s surname, not a description of method.', cn: '命名是历史性的，不是描述性的：埃德温·萨瑟恩（Edwin Southern）在 1975 年开发了检测 DNA 的方法，因此以他的姓氏命名。后来出现的 RNA 检测方法，借着地理方向的谐音被称为「Northern」，再之后的蛋白检测方法沿用同一个玩笑被称为「Western」。世界上并不存在什么「南方化学」「北方化学」或「西方化学」——这几个名字是拿一个人的姓氏开的一路玩笑，不是对方法本身的描述。' },
    { term: 'A dot blot skips the gel entirely', en: 'When the question is only "is this molecule present", not "what size is it", the sample can be spotted directly onto a membrane with no electrophoresis step at all. It is faster but throws away all size information, which is why it cannot substitute for a Western blot when a paper needs to show that an antibody detects a band of the expected molecular weight.', cn: 'dot blot 完全跳过了凝胶：当问题只是「这个分子在不在」而不是「它多大」时，样品可以直接点到膜上，完全不需要电泳这一步。它更快，但丢掉了全部大小信息，这就是为什么当一篇论文需要证明某抗体检测到的是预期分子量的那条带时，dot blot 不能替代 Western blot。' }
  ],

  terms: [
    { en: 'Agarose gel electrophoresis', cn: '琼脂糖凝胶电泳', def_en: 'Separation of DNA or RNA by size through a porous agarose matrix, using the uniform negative charge already present on the phosphate backbone.', def_cn: '利用磷酸骨架天然均一的负电荷，让 DNA 或 RNA 按大小穿过多孔的琼脂糖基质而分离。' },
    { en: 'Agarose percentage', cn: '琼脂糖浓度', def_en: 'The parameter that sets average pore size and therefore the range of fragment sizes a gel resolves well; higher percentage resolves smaller fragments.', def_cn: '决定平均孔径、进而决定凝胶能良好分辨哪个片段大小范围的参数；浓度越高越擅长分辨小片段。' },
    { en: 'Ethidium bromide / SYBR stain', cn: '溴化乙锭 / SYBR 染料', def_en: 'A dye that intercalates into double-stranded nucleic acid and fluoresces under UV or blue light, used to visualise bands after an agarose gel run.', def_cn: '嵌入双链核酸并在紫外或蓝光下发出荧光的染料，用于琼脂糖凝胶跑完后使条带可见。' },
    { en: 'Electroblotting', cn: '电转印', def_en: 'Transfer of separated bands from a gel onto a membrane by applying an electric field perpendicular to the original run direction.', def_cn: '在垂直于原电泳方向上施加电场，把分离好的条带从凝胶转印到膜上。' },
    { en: 'Nitrocellulose / PVDF membrane', cn: '硝酸纤维素膜 / PVDF 膜', def_en: 'Solid supports that bind transferred protein on their surface, robust enough to survive the repeated washing and probing a blot requires.', def_cn: '把转印过来的蛋白结合在表面的固相支持物，足够结实，能承受印迹检测所需的反复洗涤和探测。' },
    { en: 'Southern blot', cn: 'Southern blot', def_en: 'Detection of a specific DNA sequence after transfer, using a complementary labelled nucleic-acid probe. Named after its inventor, Edwin Southern.', def_cn: '转印之后用带标记的互补核酸探针检测特定 DNA 序列的方法，以发明者埃德温·萨瑟恩的姓氏命名。' },
    { en: 'Northern blot', cn: 'Northern blot', def_en: 'The same procedure applied to RNA; the name is a geographic pun on "Southern", not a description of the chemistry.', def_cn: '同样的流程用于 RNA；名字是对「Southern」的地理方向谐音玩笑，不是对化学原理的描述。' },
    { en: 'Western blot', cn: 'Western blot', def_en: 'Detection of a specific protein after transfer, using a primary antibody and a labelled secondary antibody, typically read out by chemiluminescence.', def_cn: '转印之后用一抗加带标记的二抗检测特定蛋白的方法，通常以化学发光读出。' },
    { en: 'Primary antibody', cn: '一抗', def_en: 'The antibody that binds the target protein directly; its specificity determines what the blot actually detects.', def_cn: '直接结合目标蛋白的抗体；它的特异性决定了印迹实际检测到的是什么。' },
    { en: 'Secondary antibody', cn: '二抗', def_en: 'An antibody against the primary antibody\'s species, conjugated to an enzyme or fluorophore, that provides the detectable signal.', def_cn: '针对一抗所属物种的抗体，偶联了酶或荧光基团，提供可检测的信号。' },
    { en: 'Chemiluminescence', cn: '化学发光', def_en: 'Light produced when an enzyme conjugated to the secondary antibody converts a substrate, with intensity proportional to bound antibody.', def_cn: '二抗偶联的酶把底物转化时产生的光，光强与结合的抗体量成正比。' },
    { en: 'Loading control', cn: '上样内参', def_en: 'A second protein probed on the same membrane, independently known not to respond to the treatment tested, used to confirm equal total protein across lanes before a difference is called biological.', def_cn: '在同一张膜上探测的第二个蛋白，被独立证明对该处理不响应，用于在把差异称为生物学差异之前，先确认各泳道总蛋白量相等。' },
    { en: 'Housekeeping protein', cn: '管家蛋白', def_en: 'A protein such as actin, tubulin or GAPDH usually expressed at stable levels, common but not universal choices for a loading control.', def_cn: '像 actin、tubulin、GAPDH 这类通常表达水平稳定的蛋白，是常见但并非普适的内参选择。' },
    { en: 'Total-protein normalisation', cn: '总蛋白归一化', def_en: 'Staining the whole membrane for total protein content and normalising to that, avoiding reliance on any single reference protein.', def_cn: '给整张膜的总蛋白含量染色并据此归一化，避免依赖任何单一的参照蛋白。' },
    { en: 'Dot blot', cn: 'dot blot', def_en: 'Spotting sample directly onto a membrane with no electrophoresis, answering only presence or absence and discarding size information.', def_cn: '不经过电泳、直接把样品点到膜上，只回答有无，丢弃了大小信息。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does agarose gel electrophoresis need no SDS-equivalent reagent to make migration depend on size alone?',
      q_cn: '为什么琼脂糖凝胶电泳不需要一个类似 SDS 的试剂，就能让迁移率只取决于大小？',
      options: [
        'The backbone charge is already uniform',
        'Agarose pores are too large for charge differences to matter during migration',
        'DNA and RNA have no secondary structure able to interfere with migration',
        'The running buffer neutralises any charge differences between the fragments'
      ],
      answer: 0,
      optionNotes: {
        2: { en: 'Nucleic acids do fold and can carry secondary structure, and this is exactly why samples are sometimes run under denaturing conditions (formaldehyde gels for RNA) when that structure would distort migration. Uniform charge is a separate, backbone-level property that holds regardless of folding.', cn: '核酸确实会折叠、带有二级结构，这正是为什么有时要在变性条件下跑胶（比如 RNA 用甲醛胶），以避免这种结构扭曲迁移。电荷均一是骨架层面的独立性质，跟折不折叠无关。' },
        3: { en: 'The buffer sets pH and conductivity for the run; it does not act on the sample to erase charge differences. If fragments started with unequal charge per length, no buffer choice would fix that.', cn: '缓冲液的作用是为电泳设定 pH 和导电性，它并不会作用于样品去抹平电荷差异。如果片段一开始每单位长度的电荷就不相等，换缓冲液也解决不了。' }
      },
      why_en: 'Every phosphate in the DNA or RNA backbone carries one negative charge, so charge per unit length is already the same for every fragment regardless of sequence. That uniformity is what SDS has to be added to manufacture for proteins, which do not have it naturally.',
      why_cn: 'DNA 或 RNA 骨架上每一个磷酸都带一个负电荷，所以每单位长度的电荷对任何片段来说都已经相同，与序列无关。这种均一性正是蛋白天然不具备、需要额外加 SDS 去人为制造出来的东西。' },

    { type: 'mcq',
      q_en: 'What is the actual reason a gel is transferred to a membrane before probing, rather than probed directly?',
      q_cn: '为什么凝胶要先转印到膜上才能探测，而不是直接在凝胶里探测？',
      options: [
        'The gel blocks the probe and cannot survive washing',
        'Membranes give a stronger chemiluminescent signal than a gel does',
        'Transfer concentrates the sample into a smaller area than the gel allows',
        'Only a membrane can be stripped and re-probed for a second target protein'
      ],
      answer: 0,
      optionNotes: {
        3: { en: 'Stripping and re-probing is a real advantage of using a membrane, but it is a consequence of the membrane\'s durability, not the reason transfer is required in the first place — you could not skip transfer even for a single-probe experiment.', cn: '剥离重探确实是用膜的一个真实优点，但那是膜的耐用性带来的结果，不是「必须转印」这件事本身的原因——就算只探测一次，也不能跳过转印这一步。' }
      },
      why_en: 'The pores sized to slow macromolecules during separation are the same pores that block a bulky probe from diffusing in afterwards, and the soft hydrated gel breaks down under the washing a real detection protocol needs. Moving the bands to a mechanically robust membrane solves both problems at once.',
      why_cn: '那些为了在分离时拖慢大分子而设计的孔隙，正是之后挡住体积不小的探针扩散进去的孔隙；柔软含水的凝胶也扛不住真正的检测流程所需要的洗涤。把条带搬到一张机械上更结实的膜上，同时解决了这两个问题。' },

    { type: 'mcq',
      q_en: 'A Western blot loading control band is noticeably weaker in lane 3 than in lanes 1, 2 and 4. What is the correct next step?',
      q_cn: 'Western blot 里第 3 泳道的上样内参条带明显比第 1、2、4 泳道弱。正确的下一步是什么？',
      options: [
        'Treat lane 3 as uninterpretable until loading is equalised',
        'Divide the protein-of-interest band by the smaller control value to correct for it',
        'Discard the loading control and compare the raw band intensities instead',
        'Report the result as it stands, since the control only needs to be present, not equal'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'Normalising against a control that is itself known to be unreliable in that lane launders the problem rather than fixing it — the ratio would still be built on an unequal footing, just with the inequality hidden inside the arithmetic.', cn: '用一个在这条泳道里本身已知不可靠的内参去做归一化，只是把问题洗白了，而不是解决了——这个比值仍然建立在不对等的基础上，只是这种不对等被藏进了算式里。' },
        3: { en: 'Raw intensities without any control are exactly what a loading control exists to correct for, since they conflate real biological signal with loading, transfer and degradation artefacts.', cn: '完全不用内参、只看原始强度，正是上样内参存在的意义所要纠正的对象，因为原始强度把真实的生物学信号和上样、转印、降解这些人为因素混在了一起。' }
      },
      why_en: 'A weak loading-control band in one lane means the total-protein assumption has failed for that lane specifically, so any ratio computed from it inherits the same unreliability. The honest response is to treat that lane as uninterpretable and repeat it with equalised loading, not to compute a number and report it anyway.',
      why_cn: '一条泳道的内参偏弱，说明「总蛋白相同」这个假设在这条泳道上恰好失效了，从它算出来的任何比值都继承了同样的不可靠性。诚实的做法是把这条泳道当作无法解读、重新上样均衡后再做一次，而不是硬算出一个数字照样报告。' },

    { type: 'short',
      q_en: 'Explain the principle of a Western blot, from sample to signal.',
      q_cn: '解释 Western blot 的原理，从样品到信号。',
      accept: ['SDS-PAGE', 'transfer', '转印', 'membrane', '膜', 'antibody', '抗体', 'primary', '一抗', 'secondary', '二抗', 'chemiluminescence', '化学发光', 'loading control', '内参'],
      answer_en: 'The sample is first denatured and separated by SDS-PAGE, which imposes a uniform charge on every protein so migration depends on molecular weight alone. The separated bands are then transferred out of the fragile gel onto a nitrocellulose or PVDF membrane, usually by electroblotting, because the gel is too fragile and too fine-pored for the next step to happen inside it. The membrane is blocked to prevent non-specific binding, then incubated with a primary antibody specific to the protein of interest, followed by a labelled secondary antibody that binds the primary. Signal is generated where the secondary antibody sits, most commonly by an enzyme conjugate producing light in the presence of a substrate, and the pattern is recorded on film or with a digital imager. A loading control, a second protein probed on the same membrane and independently known not to respond to the treatment, is used to normalise the signal so that a difference in the protein of interest can be attributed to the experiment rather than to unequal loading, transfer or degradation.',
      answer_cn: '样品先经变性处理并用 SDS-PAGE 分离，SDS 给每个蛋白赋予均一电荷，使迁移率只取决于分子量。分离好的条带随后从脆弱的凝胶转印到硝酸纤维素或 PVDF 膜上，通常用电转印，因为凝胶太脆弱、孔隙也太细，下一步没法在里面进行。膜先经封闭以防止非特异结合，再与针对目的蛋白的一抗孵育，随后加入能结合一抗的带标记二抗。信号在二抗所在的位置产生，最常见的是酶偶联物在底物存在下产生光，图案用胶片或数码成像仪记录。上样内参——同一张膜上探测的、独立已知对该处理不响应的第二个蛋白——用来对信号做归一化，这样目的蛋白上的差异才能归因于实验本身，而不是上样不均、转印不均或降解。' }
  ],
  bank: [
    { type: 'mcq',
      q_en: 'Why is a lower-percentage agarose gel chosen to resolve a 10 kb fragment from an 8 kb fragment, rather than a higher-percentage gel?',
      q_cn: '要分辨一个 10 kb 片段和一个 8 kb 片段，为什么选低浓度琼脂糖胶而不是高浓度的？',
      options: [
        'Larger pores spread out large fragments better',
        'A lower percentage gel runs at lower voltage and causes less DNA damage overall',
        'Large fragments need more agarose in the gel to stay inside the loading wells',
        'A higher percentage gel stains unevenly with ethidium bromide across its width'
      ],
      answer: 0,
      why_en: 'A higher-percentage gel has smaller pores, which resolves small fragments well but makes large fragments migrate so slowly and similarly that they bunch up near the wells. A lower-percentage gel gives large molecules a wider range of pore sizes to sieve through, spreading out a small percentage difference in size into a visible separation.',
      why_cn: '高浓度胶孔径小，擅长分辨小片段，但会让大片段迁移得又慢又相近，全都挤在孔附近。低浓度胶给大分子提供了更宽的孔径筛分范围，能把两者之间较小的百分比大小差异，拉开成看得见的分离。' },

    { type: 'mcq',
      q_en: 'A colleague says a faint loading-control band still counts as "present" so the experiment is fine. What is wrong with that reasoning?',
      q_cn: '同事说上样内参条带虽然很淡，但「有」就行，所以实验没问题。这个说法错在哪？',
      options: [
        'Presence alone is not enough; the bands have to be compared as a ratio',
        'A faint control band always indicates antibody degradation, never a loading problem',
        'A loading control is only required for a Northern blot, never for a Western blot',
        'The primary antibody concentration should simply be increased to compensate'
      ],
      answer: 0,
      why_en: 'The control is used quantitatively, as a normalising ratio, not as a yes/no presence check. A faint but present band in one lane relative to strong bands in the others is exactly the signature of unequal loading that the control exists to catch.',
      why_cn: '内参是被定量使用的，是一个归一化比值，不是一个「有没有」的判断。某一条泳道内参明显偏淡、而其它泳道都很强，正是内参存在的目的所要抓住的「上样不均」的典型特征。' },

    { type: 'mcq',
      q_en: 'What does the Southern/Northern/Western naming convention actually encode?',
      q_cn: 'Southern / Northern / Western 这套命名到底编码的是什么？',
      options: [
        'A pun on the inventor\'s surname',
        'The direction the sample migrates relative to the wells during electrophoresis',
        'The continent on which each version of the technique was first developed',
        'The polarity of the net charge carried by the molecule being detected'
      ],
      answer: 0,
      why_en: 'Edwin Southern developed the DNA method and it bears his name. The RNA and protein versions that followed adopted "Northern" and "Western" purely as a geographic joke extending "Southern" — the names carry no chemical or directional information about the technique itself.',
      why_cn: '埃德温·萨瑟恩开发了检测 DNA 的方法，因此以他的姓氏命名。随后出现的 RNA 和蛋白版本借着地理方向的谐音、沿用「Southern」这个玩笑分别取名「Northern」和「Western」——这几个名字本身不携带任何关于技术的化学或方向信息。' },

    { type: 'short',
      q_en: 'A Western blot shows a band at the expected molecular weight in treated cells and no band in untreated cells. List the controls needed before this can be reported as the treatment inducing the protein.',
      q_cn: 'Western blot 显示处理组细胞在预期分子量处有条带，未处理组没有。在把这个结果报告为「处理诱导了该蛋白」之前，需要哪些对照？',
      accept: ['loading control', '内参', 'secondary only', '仅二抗', 'positive control', '阳性对照', 'specificity', '特异性', 'total protein', '总蛋白'],
      answer_en: 'First, a loading control on the same membrane to confirm both lanes started with equal total protein, since unequal loading alone could make a low-abundance band disappear in one lane. Second, a secondary-antibody-only lane with no primary antibody, to confirm the band is not the secondary binding non-specifically. Third, ideally a positive control lysate known to express the protein, to confirm the primary antibody detects it at all under these conditions. Only once loading is shown equal, the signal is shown to depend on the primary antibody, and the antibody is shown to work, can the presence-versus-absence pattern be attributed to the treatment rather than to a technical artefact.',
      answer_cn: '第一，同一张膜上的上样内参，确认两条泳道起始总蛋白量相等，因为单纯的上样不均就可能让一个低丰度条带在某条泳道里消失。第二，只加二抗、不加一抗的泳道，确认这条带不是二抗非特异结合产生的。第三，理想情况下还要一份已知表达该蛋白的阳性对照裂解液，确认一抗在这些条件下确实能检测到它。只有在证明了上样相等、信号确实依赖一抗、抗体本身有效之后，「有和没有」这个模式才能归因于处理本身，而不是技术性的假象。' }
  ],

  oral: {
    q_en: 'Explain the principle of a Western blot, and what a loading control is for.',
    q_cn: '解释 Western blot 的原理，以及上样内参的作用。',
    model_en: 'A Western blot starts with SDS-PAGE: SDS denatures the protein and coats it at a roughly ' +
              'constant ratio per residue, imposing a uniform negative charge that swamps whatever the ' +
              'sequence contributed, so migration through the gel depends on molecular weight alone. ' +
              'The separated bands then have to leave the gel, because the pores that made separation ' +
              'possible are also too fine and the gel itself too fragile for a probe to reach them or ' +
              'for the washing that detection requires. So the bands are electroblotted onto a ' +
              'nitrocellulose or PVDF membrane, which binds them on its surface and can survive repeated ' +
              'washing. The membrane is blocked, then probed with a primary antibody specific to the ' +
              'protein of interest, and that is detected in turn by a labelled secondary antibody, most ' +
              'often conjugated to an enzyme that produces light from a substrate — chemiluminescence — ' +
              'recorded on film or a digital imager. The whole family — Southern for DNA, Northern for ' +
              'RNA, Western for protein — shares this same transfer-then-probe logic and differs only in ' +
              'the probe used; the names themselves are a historical pun on Edwin Southern\'s surname, ' +
              'not a description of the chemistry. A loading control is a second, unrelated protein ' +
              'probed on the same membrane, chosen because it is independently known not to respond to ' +
              'the treatment being tested, and it is used as a ratio: the band of interest divided by ' +
              'the control band, in each lane, and it is those normalised values that get compared ' +
              'across lanes. Without it, a difference in the protein of interest could just as easily be ' +
              'unequal loading, uneven transfer, or partial degradation in one sample, and there would be ' +
              'no way to rule that out. The condition on a good control is not that it is abundant but ' +
              'that it does not move under this particular treatment, which is a judgement about the ' +
              'specific experiment — actin, tubulin and GAPDH are common choices but each has documented ' +
              'exceptions, which is why total-protein staining of the whole membrane is an increasingly ' +
              'preferred alternative that avoids trusting any single reference protein.',
    model_cn: 'Western blot 从 SDS-PAGE 开始：SDS 让蛋白变性，并以大致恒定的比例包裹到每个残基上，' +
              '赋予均一的负电荷，压过序列本身贡献的电荷，于是在凝胶中的迁移率只取决于分子量。' +
              '分离好的条带随后必须离开凝胶，因为让分离得以实现的那些孔隙同时也太细，' +
              '凝胶本身也太脆弱，探针够不着、也扛不住检测所需的洗涤。所以要把条带电转印到硝酸纤维素或 PVDF 膜上，' +
              '膜把它们结合在表面，能承受反复洗涤。膜先封闭，再用针对目的蛋白的一抗探测，' +
              '一抗再由带标记的二抗检测，二抗最常偶联一种能在底物存在下产生光的酶——化学发光——' +
              '用胶片或数码成像仪记录。整个家族——Southern 对 DNA、Northern 对 RNA、Western 对蛋白——' +
              '共用同一套「先转印、再探测」的逻辑，区别只在探针；这几个名字本身是对埃德温·萨瑟恩姓氏的历史性谐音玩笑，' +
              '不是对化学原理的描述。上样内参是同一张膜上探测的另一个不相关蛋白，' +
              '选它是因为它被独立证明对该处理不响应；用法是做比值——每条泳道里目的条带除以内参条带，' +
              '比较的是这些归一化之后的值。没有它，目的蛋白上的差异同样可能只是上样不均、转印不均，' +
              '或者某份样品部分降解，而且没有办法排除这种可能。一个好内参的条件不是丰度高，' +
              '而是在这个具体处理下不会变化，这是针对具体实验的判断——actin、tubulin、GAPDH 是常见选择，' +
              '但每一个都有记录在案的例外，这也是为什么给整张膜做总蛋白染色、不依赖任何单一参照蛋白，' +
              '正在成为越来越受青睐的替代方案。',
    checklist: [
      { en: 'SDS-PAGE first: SDS imposes uniform charge, migration tracks molecular weight', cn: '先做 SDS-PAGE：SDS 赋予均一电荷，迁移率反映分子量' },
      { en: 'Why probing cannot happen in the gel: pores too fine, gel too fragile', cn: '为什么不能在凝胶里探测：孔隙太细，凝胶太脆弱' },
      { en: 'Electroblot onto nitrocellulose or PVDF, positions preserved', cn: '电转印到硝酸纤维素或 PVDF 膜，位置保持不变' },
      { en: 'Block, then primary antibody, then labelled secondary', cn: '封闭，然后一抗，然后带标记的二抗' },
      { en: 'Chemiluminescence: enzyme conjugate converts substrate to light', cn: '化学发光：酶偶联物把底物转化为光' },
      { en: 'Southern/Northern/Western share transfer logic, differ only in probe', cn: 'Southern/Northern/Western 共用转印逻辑，只是探针不同' },
      { en: 'The names are a historical pun (Edwin Southern), not chemistry', cn: '名字是历史性的谐音玩笑（埃德温·萨瑟恩），不是化学描述' },
      { en: 'Loading control condition: does not respond to the treatment, not just abundant', cn: '内参的条件：对处理不响应，而不只是丰度高' },
      { en: 'Used as a ratio across lanes, not as a presence/absence check', cn: '用作跨泳道的比值，不是有无检查' },
      { en: 'Actin/tubulin/GAPDH have documented exceptions; total-protein staining is the newer fix', cn: 'actin/tubulin/GAPDH 都有记录在案的例外；总蛋白染色是更新的解决方案' }
    ]
  }
},

{
  id: '1-8',
  chapter: 1,
  lecture: 'State exam',
  section: '1.8',
  slides: 'S2 Lab 4（What is OD600?）· S2 Lab 5（Lambert-Beer law and its applications）',
  coverage: 'partial',
  enTitle: 'OD600 and the Lambert-Beer law — one is an absorbance measurement and the other is not',
  cnTitle: 'OD600 与 Lambert-Beer 定律——一个是吸光度测量，另一个根本不是',
  coverageNote: 'Two printed sheet questions, adjacent on the same sheet and in the same section: ' +
                '"What is OD600?" (S2 Lab 4) and "Describe the Lambert-Beer law and its applications" ' +
                '(S2 Lab 5). Both are Sheet 2, so both carry x2 weight, and both were among the ' +
                'questions with no confident source in section 10. Measured before writing: ' +
                'Lambert / Beer / 朗伯 / 比尔 gives 40 raw hits across all corpora and ZERO nodes ' +
                'titled after it; OD600 gives 6 hits, all incidental — pesbexplain 2-16 uses it to ' +
                'say when to inoculate and 2-9 to say when to induce, and neither explains what the ' +
                'number is. So this is a genuine gap on both halves. ' +
                'They are written as one node deliberately, per section 9: the answer to the OD600 ' +
                'question is not complete without Lambert-Beer, and the interesting part is that ' +
                'OD600 is the case where Lambert-Beer does NOT apply. Answering them separately ' +
                'would hide exactly the thing being examined. ' +
                'A correction rides along with this node: node 1-1 used to assert "Lambert-Beer ' +
                'itself is already covered". It was not — not in labhandbook, not here, not anywhere ' +
                'in 13 MB. That sentence was fixed upstream and now points here.',

  summary: {
    en: 'The Lambert-Beer law states that absorbance is proportional to the concentration of the ' +
        'absorbing species, the path length through the sample, and a constant characteristic of ' +
        'that species at that wavelength: A = epsilon x c x l. It works because each molecule ' +
        'removes light independently, so doubling the number of molecules doubles the fraction ' +
        'removed. That is why absorbance is the quantity spectroscopy reports rather than ' +
        'transmitted intensity: absorbance is linear in concentration, transmission is not. The law ' +
        'is the basis of every colorimetric assay, including the BCA quantification in node 1-5 and ' +
        'the standard curve in node 1-1, and it fails predictably — above roughly one absorbance ' +
        'unit stray light flattens the response, and any process that makes molecules stop behaving ' +
        'independently, such as aggregation or a chemical equilibrium that shifts with ' +
        'concentration, breaks the proportionality. OD600 looks like the same measurement and is ' +
        'not one. A bacterial culture at 600 nm contains nothing that absorbs appreciably; the cells ' +
        'SCATTER light out of the beam instead. The instrument cannot tell scattered light from ' +
        'absorbed light, so it reports a number in absorbance units, which is why it is called ' +
        'optical density rather than absorbance. It is a turbidity measurement wearing an ' +
        'absorbance instrument\'s units. Everything awkward about OD600 follows from that: there is ' +
        'no epsilon and so no way to convert it to cells per millilitre without calibrating against ' +
        'a count on your own strain and instrument; it is not linear much above 0.4 because ' +
        'scattered light gets re-scattered back into the detector; and it counts anything that ' +
        'scatters, so dead cells, debris and inclusion bodies all read as growth.',
    cn: 'Lambert-Beer 定律说：吸光度正比于吸光物质的浓度、光穿过样品的路径长度，' +
        '以及该物质在该波长下的一个特征常数，即 A = epsilon x c x l。' +
        '它成立是因为每个分子各自独立地移走一部分光，所以分子数翻倍，被移走的比例也翻倍。' +
        '这正是光谱学报告「吸光度」而不是「透射光强」的原因：吸光度对浓度是线性的，透射率不是。' +
        '这条定律是一切比色测定的基础，包括节点 1-5 的 BCA 定量和节点 1-1 的标准曲线；' +
        '而它的失效方式是可预测的——大约超过一个吸光度单位后，杂散光会把响应压平；' +
        '任何让分子不再彼此独立的过程，比如聚集、或者随浓度移动的化学平衡，都会破坏这个正比关系。' +
        'OD600 看起来是同一种测量，其实根本不是。' +
        '细菌培养物在 600 nm 处没有什么东西会显著吸光；细胞是把光散射出光路之外。' +
        '而仪器分不清散射掉的光和被吸收的光，于是照样报出一个以吸光度为单位的数字——' +
        '这正是它被叫做「光密度」而不是「吸光度」的原因。' +
        '它是一个穿着吸光度仪器单位外衣的浊度测量。' +
        'OD600 所有别扭的地方都由此而来：它没有 epsilon，' +
        '所以不校准就没法换算成每毫升多少个细胞，而且校准必须用你自己的菌株和自己的仪器做；' +
        '它在大约 0.4 以上就不线性了，因为散射出去的光会被再次散射回探测器；' +
        '而且它把任何会散射的东西都算进去，所以死细胞、碎片和包涵体统统读作「长起来了」。'
  },

  mustKnow: '**Lambert-Beer：A = epsilon x c x l，成立的前提是每个分子独立地移走光。**' +
            '**而 OD600 不是吸光度，是散射**——细菌在 600 nm 几乎不吸光，是把光散射出光路，' +
            '仪器分不清两者，才照样报成「吸光度单位」。' +
            '**所以 OD600 没有 epsilon，不校准就换算不成细胞数**，' +
            '**0.4 以上不线性**，而且**死细胞和碎片照样计数**。' +
            'Beer-Lambert is absorbance and is linear in concentration; OD600 is turbidity wearing ' +
            'the same units, and has no extinction coefficient at all.',

  skipIt: 'Do not memorise extinction coefficients for anything, the exact wavelength each dye ' +
          'peaks at, or a conversion factor like "OD600 of 1 equals 8 x 10^8 cells per mL" — that ' +
          'number is strain-specific and instrument-specific and quoting it as universal is the ' +
          'error the question is probing for. Do not derive the law from the exponential ' +
          'attenuation integral. What is examined is the proportionality, its three factors, why ' +
          'the independence assumption matters, and the fact that OD600 sits outside the law. ' +
          '不用背任何物质的消光系数、不用背各种染料的吸收峰具体在哪个波长，' +
          '也不要去背「OD600 = 1 相当于每毫升 8 x 10^8 个细胞」这种换算——' +
          '那个数字是菌株特异、仪器特异的，把它当作普适常数说出来，恰恰是这道题在钓的错误。' +
          '也不用从指数衰减积分去推导这条定律。' +
          '要考的是那个正比关系、它的三个因子、为什么「各分子独立」这个前提重要，' +
          '以及 OD600 根本不在这条定律的适用范围内。',

  explain: [
    {
      q: 'Why does spectroscopy report absorbance rather than the transmitted light it actually ' +
         'measures? （分光光度法测到的其实是透射光，为什么报告的却是吸光度？）',
      a: '**Because the detector\'s own quantity is not proportional to concentration, and ' +
         'absorbance is.**\n\n' +
         'What the instrument physically measures is how much light arrives at the detector with ' +
         'the sample in the beam, against how much arrives without it. That ratio is the ' +
         '**transmittance**, T = I / I0. It is a perfectly real measurement, and it is the wrong ' +
         'number to report, because it is not linear in the thing you want.\n\n' +
         'Think about why. Consider a slab of solution and cut it into thin layers. Each layer ' +
         'removes the **same fraction** of whatever light enters it — not the same amount, the same ' +
         'fraction — because each layer holds the same number of molecules and each molecule acts ' +
         'independently of the others. Removing a constant fraction per layer, repeated over many ' +
         'layers, is multiplication, not addition: two identical layers transmit T x T, not 2T. So ' +
         'transmittance falls off **exponentially** with concentration and path length.\n\n' +
         '**The logarithm turns that multiplication back into addition.** Absorbance is defined as ' +
         'A = -log10(T) = log10(I0 / I), and once you take that logarithm the exponential becomes ' +
         'linear: A = epsilon x c x l. Doubling the concentration doubles A. Two absorbing species ' +
         'in the same cuvette add their absorbances. A standard curve becomes a straight line ' +
         'through the origin, and interpolation on it is honest.\n\n' +
         '**So absorbance is not a raw observation — it is a transformation chosen to make the ' +
         'measurement additive.** That is worth saying in an oral, because it explains why the ' +
         'quantity has such an odd definition, and it sets up the real content of the law: the ' +
         'linearity is inherited from the assumption that molecules act independently, so wherever ' +
         'that assumption fails, so does the line. ' +
         '（因为探测器自己的那个量对浓度不是线性的，而吸光度是。' +
         '仪器物理上测的是：样品在光路里时到达探测器的光，比上样品不在时到达的光。' +
         '这个比值就是透射率 T = I / I0。它是一个完全真实的测量，但却是不该报告的那个数，' +
         '因为它对你想要的东西不是线性的。想想为什么。' +
         '把一层溶液切成很多薄层，每一薄层移走进入它的光的同一个「比例」——' +
         '不是同样的量，而是同样的比例——因为每层含有相同数目的分子，而每个分子的作用彼此独立。' +
         '「每层移走固定比例」重复很多层，这是乘法而不是加法：两层相同的薄层透过的是 T x T，不是 2T。' +
         '所以透射率随浓度和光程指数式下降。而取对数就把这个乘法变回了加法。' +
         '吸光度被定义为 A = -log10(T) = log10(I0 / I)，一旦取了这个对数，指数就变成了线性：' +
         'A = epsilon x c x l。浓度翻倍，A 就翻倍。同一个比色皿里两种吸光物质，吸光度可以相加。' +
         '标准曲线于是成为一条过原点的直线，在上面内插才是诚实的。' +
         '所以吸光度并不是一个原始观测量，而是一个为了让测量变得可加而选择的变换。' +
         '这一点在口试里值得说出来，因为它解释了这个量为什么有这么古怪的定义，' +
         '同时也为这条定律真正的内容做了铺垫：' +
         '线性是从「分子彼此独立」这个假设继承来的，所以哪里这个假设不成立，直线也就在哪里不成立。）'
    },
    {
      q: 'A culture reads OD600 = 1.2. What exactly have you measured, and what have you NOT ' +
         'measured? （一个培养物读数 OD600 = 1.2。你到底测了什么？又有什么是你没测到的？）',
      a: '**You have measured how much light the culture kept out of the detector. You have not ' +
         'measured absorbance, concentration, or the number of living cells.**\n\n' +
         'Start with what is physically happening. At 600 nm a bacterial suspension contains ' +
         'essentially nothing that absorbs — the wavelength is chosen precisely because the ' +
         'biological molecules do not absorb there. What the cells do is **scatter**: they are ' +
         'objects of roughly the wavelength\'s own scale suspended in a medium of different ' +
         'refractive index, so they deflect light out of the straight path. The photons are not ' +
         'destroyed, they simply do not arrive.\n\n' +
         '**The instrument cannot tell the difference.** It knows only that fewer photons reached ' +
         'the detector, and it applies -log10(I / I0) as always, so it prints a number in absorbance ' +
         'units. Calling it **optical density** rather than absorbance is the field\'s way of ' +
         'flagging that the number came out of an absorbance instrument without being an ' +
         'absorbance.\n\n' +
         'Three consequences follow, and together they are the answer to the exam question.\n\n' +
         '**There is no extinction coefficient.** Epsilon is a property of a molecule absorbing at ' +
         'a wavelength; a cell scattering light has no such constant, and how much it scatters ' +
         'depends on its size, shape and refractive index — which change with strain, growth phase ' +
         'and medium. So OD600 cannot be converted to cells per millilitre by calculation. It can ' +
         'only be calibrated, by plating and counting alongside it, and that calibration is valid ' +
         'for that strain on that instrument.\n\n' +
         '**It goes non-linear early.** Above roughly OD 0.4 a photon scattered by one cell has a ' +
         'good chance of being scattered again by another and arriving at the detector after all. ' +
         'The instrument counts it as light that was never removed, so the reading ' +
         '**underestimates** density, increasingly so as the culture thickens. The fix is to dilute ' +
         'into the linear range and multiply back, never to trust a raw high reading.\n\n' +
         '**It counts anything that scatters.** Dead cells scatter. Lysed debris scatters. ' +
         'Inclusion bodies scatter, and rather well. So OD600 measures biomass-like turbidity, not ' +
         'viability — which is why a culture can keep rising in OD after growth has stopped, and ' +
         'why colony-forming units, not OD, is what you report when you need live cells. ' +
         '（你测的是这个培养物挡住了多少光不让它到达探测器。' +
         '你没有测到吸光度，没有测到浓度，也没有测到活细胞的数目。' +
         '先看物理上在发生什么。在 600 nm，细菌悬液里基本上没有什么会吸光——' +
         '选这个波长恰恰就是因为生物分子在这里不吸收。细胞做的事是散射：' +
         '它们是尺度和波长本身相当、悬浮在折射率不同的介质中的物体，' +
         '所以会把光偏折出直线光路。光子没有被消灭，只是没有到达而已。' +
         '而仪器分不出这个区别。它只知道到达探测器的光子变少了，' +
         '于是照例套用 -log10(I / I0)，打印出一个以吸光度为单位的数字。' +
         '把它叫做「光密度」而不是「吸光度」，正是这个领域用来标记' +
         '「这个数出自吸光度仪器，但它不是吸光度」的方式。由此推出三个后果，合起来就是这道题的答案。' +
         '第一，没有消光系数。epsilon 是某个分子在某波长下吸光的性质；' +
         '一个散射光的细胞没有这样的常数，而它散射多少取决于它的大小、形状和折射率——' +
         '这些都随菌株、生长期和培养基而变。所以 OD600 不能靠计算换算成每毫升多少细胞。' +
         '它只能被校准：一边测 OD 一边铺板计数，而这个校准只对那个菌株、那台仪器有效。' +
         '第二，它很早就不线性了。大约 OD 0.4 以上，被一个细胞散射掉的光子' +
         '很有机会被另一个细胞再散射一次、最终还是到了探测器。' +
         '仪器把它算作从未被移走的光，于是读数低估了密度，而且培养物越浓低估越多。' +
         '解决办法是稀释到线性范围内再乘回去，绝不要相信一个未经稀释的高读数。' +
         '第三，它把任何会散射的东西都算进去。死细胞会散射，裂解的碎片会散射，' +
         '包涵体也会散射，而且散射得还挺厉害。' +
         '所以 OD600 测的是类似生物量的浊度，不是活力——' +
         '这也是为什么生长已经停止之后培养物的 OD 还能继续上升，' +
         '以及为什么当你需要的是活细胞时，该报的是菌落形成单位而不是 OD。）',
      trace: {
        what: '**OD600 是散射，不是吸收。**细菌在 600 nm 几乎不吸光，' +
              '是把光散射出光路；仪器只知道「到达的光子变少了」。',
        from: '**来自仪器的定义方式**：它一律套用 A = -log10(I / I0)，' +
              '而这个式子分不清「被吸收」和「被散射走」。所以单位看起来是吸光度单位。',
        to: '**所以三件事同时成立**：没有 epsilon（只能靠铺板计数校准，且菌株/仪器特异）、' +
            '**0.4 以上因二次散射而低估**、以及**死细胞与碎片照样被计入**。',
        family: '同族的「仪器报出的数不等于你想要的量」还有：' +
                '节点 1-5 的 BCA（吸光度要经蛋白特异的显色效率才到浓度）、' +
                '节点 1-4 的玻璃电极（电压要经校准才到 pH）、' +
                '以及节点 4-3 的微阵列（荧光强度要经探针效率才到丰度）。',
        numbers: '**要记的只有一个范围：线性大约到 OD 0.4。**' +
                 '不要记「OD 1 = 多少细胞」——那是菌株与仪器特异的，' +
                 '把它当普适常数说出口正是这道题在钓的错误。'
      },
      takeaway: '仪器报的是「光少了多少」；至于光是被吸收还是被散射，是你要替它分辨的。'
    },
    {
      q: 'Where does Lambert-Beer break down, and what do the failure modes have in common? ' +
         '（Lambert-Beer 在什么地方失效？这些失效模式有什么共同点？）',
      a: '**All of them are ways of breaking the same assumption: that each molecule removes light ' +
         'independently of every other one.** Name that and the list stops being something to ' +
         'memorise.\n\n' +
         '**Instrumental ceiling.** Above about A = 1, only around a tenth of the light is still ' +
         'getting through, so the small amount of **stray light** that reaches the detector by any ' +
         'other route — leaking round the cuvette, scattered off optics — becomes a large fraction ' +
         'of what is measured. Stray light cannot be absorbed by the sample, so it sets a floor on ' +
         'I and therefore a ceiling on A, and the curve bends over. This is why a reading above the ' +
         'top standard is diluted and re-read rather than extrapolated, which is the same rule ' +
         'node 1-1 gives for standard curves and node 1-5 for BCA.\n\n' +
         '**Chemical.** If the absorbing species takes part in an equilibrium that shifts with ' +
         'concentration — dimerising, aggregating, protonating — then diluting the sample does not ' +
         'simply give fewer of the same absorber, it gives a different mixture with a different ' +
         'epsilon. The concentration axis and the absorbing-species axis have come apart.\n\n' +
         '**Optical.** If the sample scatters, light is lost by a route the law does not describe. ' +
         'A turbid protein prep reads high at 280 nm for exactly this reason, and the usual ' +
         'diagnostic is to check the absorbance at 320 nm where nothing should absorb: a non-zero ' +
         'reading there is scattering, and it is subtracted or the sample is cleared. **OD600 is ' +
         'this failure mode taken to its limit and then used deliberately** — the whole measurement ' +
         'is the artefact.\n\n' +
         '**Polychromatic light.** Epsilon is defined at a wavelength. If the instrument\'s ' +
         'bandwidth is wide compared with how fast epsilon changes across the absorption peak, the ' +
         'measurement averages several different epsilons and the average shifts with concentration. ' +
         'This is why you read on a peak rather than a shoulder — on a peak the derivative is zero, ' +
         'so the averaging does least harm.\n\n' +
         '**The unifying statement is worth having ready**: Lambert-Beer is linear because ' +
         'absorbers act independently and identically. Every failure is a case where they stop ' +
         'doing one or the other. ' +
         '（所有这些失效，都是在破坏同一个假设：每个分子独立于其他分子地移走光。' +
         '把这一点说出来，这份清单就不再是需要背的东西了。' +
         '仪器上限：A = 1 以上时只剩大约十分之一的光还能穿过，' +
         '于是那一点点通过其他途径到达探测器的杂散光——从比色皿边上漏过去的、从光学件上散射来的——' +
         '在被测到的光里占了很大比例。杂散光不会被样品吸收，' +
         '所以它给 I 设了一个下限，也就给 A 设了一个上限，曲线于是弯了下去。' +
         '这正是为什么超过最高标准品的读数要稀释重测而不是外推，' +
         '和节点 1-1 对标准曲线、节点 1-5 对 BCA 给出的是同一条规则。' +
         '化学上：如果吸光物质参与一个随浓度移动的平衡——二聚、聚集、质子化——' +
         '那么稀释样品得到的并不只是「同样的吸光物质变少了」，' +
         '而是一个 epsilon 不同的新混合物。浓度这个轴和吸光物种这个轴已经脱钩了。' +
         '光学上：如果样品会散射，光就以这条定律没有描述的途径损失掉了。' +
         '一份浑浊的蛋白样品在 280 nm 读数偏高正是这个原因，' +
         '常用的诊断办法是看 320 nm 处的吸光度——那里本不该有任何吸收：' +
         '若读数非零就是散射，要么扣掉它，要么把样品澄清。' +
         'OD600 就是把这个失效模式推到极致、然后反过来刻意加以利用——整个测量本身就是这个假象。' +
         '复色光：epsilon 是在某一个波长下定义的。' +
         '如果仪器的带宽相对于 epsilon 在吸收峰上变化的快慢来说太宽，' +
         '测量就是在对好几个不同的 epsilon 求平均，而这个平均值又随浓度移动。' +
         '这正是为什么要在峰上读数而不是在肩上读——峰上导数为零，所以求平均带来的损害最小。' +
         '那句统一的表述值得随时备着：' +
         'Lambert-Beer 之所以线性，是因为吸光物彼此独立且性质相同；' +
         '每一种失效，都是它们不再满足其中之一的情形。）',
      takeaway: '线性来自「独立且相同」这个假设；每一种失效都是这个假设的一种破法。'
    }
  ],

  points: [
    { term: 'A = epsilon x c x l', en: 'Absorbance is proportional to the molar extinction coefficient of the species at that wavelength, its concentration, and the path length through the sample — conventionally 1 cm in a standard cuvette.', cn: 'A = epsilon x c x l：吸光度正比于该物质在该波长下的摩尔消光系数、它的浓度，以及光穿过样品的路径长度——标准比色皿按惯例是 1 cm。' },
    { term: 'Absorbance is a logarithm, and that is the point', en: 'The instrument measures transmittance T = I/I0, which falls exponentially with concentration because each layer removes a constant fraction. A = -log10(T) turns that exponential into a straight line, which is why absorbance and not transmittance is reported.', cn: '吸光度是一个对数，而这正是关键：仪器测的是透射率 T = I/I0，它随浓度指数下降，因为每一薄层移走的是固定比例。A = -log10(T) 把这个指数变成一条直线，这正是报告吸光度而不是透射率的原因。' },
    { term: 'Absorbances add', en: 'Because the logarithm converts multiplication into addition, two absorbing species in the same cuvette contribute additively. This is what makes blank subtraction legitimate.', cn: '吸光度可以相加：因为对数把乘法变成了加法，同一个比色皿里的两种吸光物质的贡献是相加的。正因如此，扣空白才是合法的。' },
    { term: 'The linearity comes from independence', en: 'The law holds only while each absorber acts independently of and identically to the others. Every documented deviation is a case where one of those two conditions fails.', cn: '线性来自「独立」：只有当每个吸光物彼此独立、且性质相同时这条定律才成立。所有已知的偏离，都是这两个条件之一不成立的情形。' },
    { term: 'Stray light sets a ceiling near A = 1', en: 'Above about one absorbance unit only a tenth of the light gets through, so light reaching the detector by other routes becomes a large share of the signal. It cannot be absorbed, so it floors I and caps A, bending the curve over.', cn: '杂散光在 A = 1 附近设了一个上限：超过约一个吸光度单位时只剩十分之一的光能穿过，于是通过其他途径到达探测器的光在信号里占了很大份额。它不会被吸收，所以给 I 设了下限、给 A 设了上限，曲线因此弯折。' },
    { term: 'Read on a peak, not a shoulder', en: 'Epsilon is defined at one wavelength, and a real instrument passes a band. On a peak the slope is zero so averaging across the band does least damage; on a shoulder the effective epsilon shifts.', cn: '在峰上读数而不是在肩上：epsilon 是在单一波长下定义的，而真实仪器透过的是一个波段。峰上斜率为零，所以在波段内求平均损害最小；在肩上，有效 epsilon 会移动。' },
    { term: 'OD600 is scattering, not absorption', en: 'At 600 nm a bacterial suspension absorbs almost nothing. The cells deflect light out of the beam, and the photons are not destroyed — they simply do not arrive at the detector.', cn: 'OD600 是散射不是吸收：在 600 nm，细菌悬液几乎不吸光。细胞把光偏折出光路，光子并没有被消灭——它们只是没有到达探测器。' },
    { term: 'The instrument cannot tell the two apart', en: 'It applies -log10(I/I0) regardless of why the light failed to arrive, so it prints absorbance units. Calling the result optical density rather than absorbance is the field flagging exactly that.', cn: '仪器分不出这两者：不管光为什么没能到达，它都套用 -log10(I/I0)，于是打印出吸光度单位。把结果叫做「光密度」而不是「吸光度」，正是这个领域在标记这件事。' },
    { term: 'There is no extinction coefficient for a cell', en: 'How much a cell scatters depends on its size, shape and refractive index, which vary with strain, growth phase and medium. So OD600 cannot be calculated into cells per mL — only calibrated against a plate count, for that strain on that instrument.', cn: '细胞没有消光系数：一个细胞散射多少取决于它的大小、形状和折射率，而这些随菌株、生长期和培养基变化。所以 OD600 不能算成每毫升多少细胞，只能针对那个菌株、那台仪器，用铺板计数去校准。' },
    { term: 'Non-linear above about 0.4', en: 'In a dense culture a photon scattered by one cell is likely to be scattered again by another and reach the detector anyway. It is counted as light never removed, so the reading underestimates density — increasingly so as the culture thickens.', cn: '大约 0.4 以上不再线性：在浓的培养物里，被一个细胞散射掉的光子很可能被另一个再散射一次、最终还是到达探测器。它被算作从未被移走的光，所以读数低估了密度，而且越浓低估越多。' },
    { term: 'Dilute and multiply back, never extrapolate', en: 'The same rule as for a standard curve in node 1-1 and BCA in node 1-5: a reading outside the linear range carries no reliable information, so it is diluted into range and scaled, not extrapolated.', cn: '稀释后乘回去，绝不外推：和节点 1-1 的标准曲线、节点 1-5 的 BCA 是同一条规则——超出线性范围的读数不含可靠信息，所以要稀释到范围内再换算，而不是外推。' },
    { term: 'OD600 counts anything that scatters', en: 'Dead cells, lysed debris and inclusion bodies all scatter, so OD can keep rising after growth has stopped. When live cells are what matters, colony-forming units is the measurement, not OD.', cn: 'OD600 把任何会散射的东西都算进去：死细胞、裂解碎片和包涵体都会散射，所以生长停止之后 OD 还能继续上升。当你要的是活细胞时，该测的是菌落形成单位，而不是 OD。' },
    { term: 'Why 600 nm', en: 'The wavelength is chosen because biological molecules absorb negligibly there, so the reading is dominated by scattering rather than contaminated by absorbance from medium components.', cn: '为什么选 600 nm：选这个波长是因为生物分子在这里吸收可以忽略，所以读数由散射主导，而不会被培养基成分的吸光度污染。' }
  ],

  terms: [
    { en: 'Absorbance', cn: '吸光度', def_en: 'A = -log10(I/I0), the logarithm of the fraction of light removed. Defined this way so it is linear in concentration and additive between species.', def_cn: 'A = -log10(I/I0)，即被移走光的比例的对数。这样定义是为了让它对浓度线性、且在不同物质之间可加。' },
    { en: 'Transmittance', cn: '透射率', def_en: 'T = I/I0, what the detector actually measures. Falls exponentially with concentration, which is why it is not the reported quantity.', def_cn: 'T = I/I0，探测器真正测到的量。它随浓度指数下降，所以不是被报告的那个量。' },
    { en: 'Molar extinction coefficient', cn: '摩尔消光系数', def_en: 'Epsilon, a constant of one species at one wavelength expressing how strongly it absorbs. A scattering cell has no equivalent.', def_cn: 'epsilon，某一物质在某一波长下表示其吸光强弱的常数。一个散射光的细胞没有对应的量。' },
    { en: 'Path length', cn: '光程', def_en: 'The distance light travels through the sample, conventionally 1 cm. Doubling it doubles absorbance, which is why microplate readings depend on fill volume.', def_cn: '光穿过样品的距离，按惯例是 1 cm。加倍光程吸光度也加倍，这正是酶标板读数会依赖加样体积的原因。' },
    { en: 'Optical density', cn: '光密度', def_en: 'A reading in absorbance units whose loss of light is not (only) absorption. The name is a deliberate signal that Lambert-Beer does not apply.', def_cn: '一个以吸光度为单位、但其光损失并非（仅仅）来自吸收的读数。这个名字本身就是在提示 Lambert-Beer 不适用。' },
    { en: 'Turbidity', cn: '浊度', def_en: 'Loss of transmitted light to scattering by suspended particles. What OD600 actually measures.', def_cn: '透射光因悬浮颗粒散射而损失。这才是 OD600 实际测量的东西。' },
    { en: 'Stray light', cn: '杂散光', def_en: 'Light reaching the detector without passing through the sample. It cannot be absorbed, so it caps the maximum measurable absorbance near 1.', def_cn: '未经样品就到达探测器的光。它不会被吸收，所以把可测吸光度的上限压在 1 附近。' },
    { en: 'Linear range', cn: '线性范围', def_en: 'The span over which signal and concentration stay proportional. Roughly A below 1 for absorbance, and OD below about 0.4 for turbidity.', def_cn: '信号与浓度保持正比的区间。对吸光度大约是 A 小于 1，对浊度大约是 OD 小于 0.4。' },
    { en: 'Blank', cn: '空白', def_en: 'A reference containing everything but the analyte, whose absorbance is subtracted. Legitimate precisely because absorbances add.', def_cn: '除待测物外含有一切成分的参比，其吸光度会被扣除。正因为吸光度可加，这样做才是合法的。' },
    { en: 'Colony-forming unit', cn: '菌落形成单位', def_en: 'A count of cells able to divide and form a colony. The measurement OD600 cannot give, because it cannot distinguish live from dead.', def_cn: '能够分裂并形成菌落的细胞计数。这正是 OD600 给不了的量，因为它分不出死活。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'Why is absorbance, rather than transmittance, the quantity a spectrophotometer reports?',
      q_cn: '为什么分光光度计报告的是吸光度而不是透射率？',
      options: [
        'Absorbance is linear in concentration; transmittance is not',
        'Transmittance cannot be measured accurately below about ten percent',
        'Absorbance is independent of the path length through the sample',
        'Transmittance changes with the wavelength while absorbance does not'
      ],
      answer: 0,
      optionRefs: { 2: '1-1' },
      optionNotes: {
        2: { en: 'Absorbance is proportional to path length, not independent of it — that is the l in A = epsilon x c x l, and it is why microplate readings depend on fill volume.', cn: '吸光度正比于光程，而不是与之无关——那就是 A = epsilon x c x l 里的 l，也是为什么酶标板读数会依赖加样体积。' },
        3: { en: 'Both depend on wavelength, through epsilon. Reading on an absorption peak rather than a shoulder is exactly a response to that dependence.', cn: '两者都通过 epsilon 依赖波长。在吸收峰而不是肩上读数，正是对这种依赖性的应对。' }
      },
      why_en: 'Each thin layer of solution removes a constant fraction of the light, so transmittance falls exponentially with concentration. Taking -log10 converts that exponential into a straight line, making absorbance proportional to concentration and additive between species — which is what allows standard curves and blank subtraction.',
      why_cn: '每一薄层溶液移走的是光的固定比例，所以透射率随浓度指数下降。取 -log10 把这个指数变成一条直线，使吸光度对浓度成正比、且在不同物质间可加——这正是标准曲线和扣空白得以成立的原因。' },

    { type: 'mcq',
      q_en: 'What physical process is responsible for the reading when you measure a bacterial culture at OD600?',
      q_cn: '当你在 OD600 下测量一个细菌培养物时，产生读数的物理过程是什么？',
      options: [
        'Scattering of light out of the beam by the cells',
        'Absorbance by cytochromes and other pigments in the cells',
        'Absorbance by nucleic acids released from lysed cells',
        'Fluorescence emitted by cell wall components at that wavelength'
      ],
      answer: 0,
      optionNotes: {
        1: { en: '600 nm is chosen precisely because biological molecules absorb negligibly there. If pigments were absorbing, the reading would depend on their content rather than on cell number.', cn: '选 600 nm 恰恰是因为生物分子在这里吸收可忽略。如果是色素在吸光，读数就会取决于色素含量而不是细胞数目。' },
        2: { en: 'Nucleic acids absorb at 260 nm, not 600. And a lysed culture scatters less, not more, which is how lysis is followed in real time.', cn: '核酸吸收在 260 nm，不在 600。而且裂解后的培养物散射变少而不是变多，实时监测裂解正是靠这一点。' }
      },
      why_en: 'Cells are objects of roughly the wavelength scale in a medium of different refractive index, so they deflect light out of the straight path. The photons are not destroyed, they simply do not reach the detector — which the instrument cannot distinguish from absorption, so it prints absorbance units anyway.',
      why_cn: '细胞是尺度与波长相当、悬浮在折射率不同介质中的物体，所以会把光偏折出直线光路。光子并未被消灭，只是没有到达探测器——而仪器分不出这与吸收的区别，于是照样打印出吸光度单位。' },

    { type: 'mcq',
      q_en: 'Why can OD600 not be converted into cells per millilitre by calculation alone?',
      q_cn: '为什么 OD600 不能仅靠计算换算成每毫升的细胞数？',
      options: [
        'A scattering cell has no extinction coefficient',
        'The relationship is linear but the proportionality constant is not yet known',
        'Cell counts are always reported as colony-forming units by convention',
        'The spectrophotometer rounds absorbance to two decimal places'
      ],
      answer: 0,
      optionNotes: {
        1: { en: 'It is not a matter of an unknown constant waiting to be looked up. How much a cell scatters depends on its size, shape and refractive index, which change with strain, growth phase and medium, so there is no fixed constant to know.', cn: '这不是「有个常数还没查到」的问题。一个细胞散射多少取决于它的大小、形状和折射率，而这些随菌株、生长期和培养基变化，所以根本不存在一个固定常数。' },
        2: { en: 'CFU is preferred when viability matters, but that is a separate point. The reason calculation fails is physical, not a reporting convention.', cn: '当关心活力时确实优先用 CFU，但那是另一回事。计算之所以行不通是物理原因，不是报告惯例。' }
      },
      why_en: 'Epsilon is a property of a molecule absorbing at a wavelength, and a cell scattering light has no equivalent constant. Scattering depends on size, shape and refractive index, which vary with strain, growth phase and medium — so OD600 can only be calibrated against a plate count, valid for that strain on that instrument.',
      why_cn: 'epsilon 是分子在某波长下吸光的性质，而散射光的细胞没有对应的常数。散射取决于大小、形状和折射率，这些随菌株、生长期和培养基而变——所以 OD600 只能对着铺板计数去校准，且只对那个菌株、那台仪器有效。' },

    { type: 'short',
      q_en: 'Describe the Lambert-Beer law, and explain whether OD600 is an application of it.',
      q_cn: '描述 Lambert-Beer 定律，并说明 OD600 是不是它的一个应用。',
      accept: ['epsilon', '消光系数', 'concentration', '浓度', 'path', '光程', 'linear', '线性', 'scatter', '散射', 'absorb', '吸收', 'turbid', '浊度', 'log', '对数'],
      answer_en: 'The Lambert-Beer law states that absorbance is proportional to three things: the molar extinction coefficient of the absorbing species at that wavelength, its concentration, and the path length through the sample, so A = epsilon x c x l. The reason absorbance rather than transmittance is reported is that each thin layer of solution removes a constant fraction of the light entering it, so transmittance falls exponentially with concentration; taking the negative logarithm converts that exponential into a straight line, which also makes absorbances of different species additive and legitimises blank subtraction. The linearity is inherited from an assumption: that every absorber acts independently of and identically to every other. That is why the law fails predictably — above about A = 1 stray light floors the transmitted intensity and caps absorbance; a concentration-dependent equilibrium such as aggregation changes the absorbing species as you dilute; scattering loses light by a route the law does not describe; and a wide instrument bandwidth averages several different epsilons. OD600 is not an application of the law but the clearest case of it not applying. At 600 nm a bacterial suspension absorbs essentially nothing — the wavelength is chosen for that reason — and the cells scatter light out of the beam instead. The instrument cannot distinguish light that was absorbed from light that was deflected, so it applies the same logarithm and prints absorbance units, and the name optical density rather than absorbance is the signal that this has happened. Three consequences follow: there is no extinction coefficient, so the reading can only be calibrated against a plate count for that strain and instrument rather than calculated; it becomes non-linear above roughly 0.4 because scattered light is re-scattered into the detector and the density is underestimated; and it counts anything that scatters, including dead cells and debris, so it is not a viability measurement.',
      answer_cn: 'Lambert-Beer 定律说吸光度正比于三件事：吸光物质在该波长下的摩尔消光系数、它的浓度、以及光穿过样品的路径长度，即 A = epsilon x c x l。之所以报告吸光度而不是透射率，是因为每一薄层溶液移走进入它的光的固定比例，所以透射率随浓度指数下降；取负对数把这个指数变成直线，同时也让不同物质的吸光度可以相加，从而使扣空白成为合法操作。这个线性是从一个假设继承来的：每个吸光物彼此独立、且性质相同。这正是为什么这条定律的失效是可预测的——A 大约超过 1 之后，杂散光给透射光强设了下限、给吸光度设了上限；像聚集这类随浓度移动的平衡会在你稀释时改变吸光物种本身；散射以这条定律没有描述的途径损失光；而过宽的仪器带宽则是在对好几个不同的 epsilon 求平均。OD600 不是这条定律的应用，而是它最清楚的不适用案例。在 600 nm，细菌悬液基本上不吸光——选这个波长正是为此——细胞做的是把光散射出光路。仪器分不出「被吸收的光」和「被偏折走的光」，于是照样套用同一个对数、打印出吸光度单位；而把它叫做「光密度」而不是「吸光度」，正是在提示这件事已经发生。由此推出三个后果：没有消光系数，所以读数只能针对那个菌株和那台仪器用铺板计数去校准，而不能算出来；大约 0.4 以上开始不线性，因为散射掉的光会被再次散射进探测器，密度因而被低估；而且它把任何会散射的东西都算进去，包括死细胞和碎片，所以它不是一个活力测量。' }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'A sample reads A = 1.8 on a spectrophotometer. What is the correct next step?',
      q_cn: '一个样品在分光光度计上读数 A = 1.8。正确的下一步是什么？',
      options: [
        'Dilute it into the linear range and multiply back',
        'Extrapolate the standard curve upward to cover the reading',
        'Report the value as measured, since the instrument returned it',
        'Increase the path length so the reading falls back below one'
      ],
      answer: 0,
      why_en: 'Above about one absorbance unit only a tenth of the light gets through, so stray light becomes a large share of what reaches the detector. It cannot be absorbed, so it caps the measurable absorbance and the response bends over. The reading carries no reliable concentration information, and extrapolating a curve into that region reports a number the measurement cannot support.',
      why_cn: '超过约一个吸光度单位后只剩十分之一的光能穿过，于是杂散光在到达探测器的光里占了很大份额。它不会被吸收，所以给可测吸光度设了上限，响应因而弯折。这个读数不含可靠的浓度信息，把曲线外推到这个区间等于报告一个测量本身支撑不了的数字。' },

    { type: 'mcq',
      q_en: 'A culture stops growing but its OD600 continues to rise slowly. What is the most likely explanation?',
      q_cn: '一个培养物已经停止生长，但它的 OD600 仍在缓慢上升。最可能的解释是什么？',
      options: [
        'Dead cells and debris scatter light just as well',
        'The remaining live cells have begun to absorb more strongly at 600 nm',
        'The medium darkens with time and absorbs light at that wavelength',
        'Cells swell after division stops, raising their extinction coefficient'
      ],
      answer: 0,
      why_en: 'OD600 measures turbidity, and anything that scatters contributes: dead cells, lysed debris and inclusion bodies all do. Growth and optical density are therefore not the same quantity, which is why colony-forming units rather than OD is reported when live cells are what matter.',
      why_cn: 'OD600 测的是浊度，任何会散射的东西都有贡献：死细胞、裂解碎片和包涵体都会。所以「生长」和「光密度」并不是同一个量——这正是当关心活细胞时该报菌落形成单位而不是 OD 的原因。' },

    { type: 'mcq',
      q_en: 'Why does a dense culture read a LOWER OD600 than its true cell density would suggest?',
      q_cn: '为什么很浓的培养物读出的 OD600 会低于其真实细胞密度所应对应的值？',
      options: [
        'Scattered light is re-scattered back into the detector',
        'Cells at high density shield one another from the incident beam entirely',
        'The instrument automatically compensates for readings above one',
        'Nutrient depletion at high density shrinks the cells and their cross-section'
      ],
      answer: 0,
      why_en: 'Above roughly OD 0.4 a photon deflected by one cell has a good chance of meeting another and being deflected back onto the detector. The instrument counts it as light that was never removed, so the measured density falls short of the truth, and the shortfall grows as the culture thickens. Diluting into the linear range and scaling back is the fix.',
      why_cn: '大约 OD 0.4 以上时，被一个细胞偏折的光子很有机会遇到另一个细胞、又被偏折回探测器。仪器把它算作从未被移走的光，于是测得的密度低于真实值，且培养物越浓差距越大。解决办法是稀释到线性范围内再乘回去。' },

    { type: 'mcq',
      q_en: 'A protein preparation reads unexpectedly high at A280 and also gives A320 = 0.15. What does that indicate?',
      q_cn: '一份蛋白样品在 A280 处读数意外偏高，同时 A320 = 0.15。这说明什么？',
      options: [
        'The sample is turbid and is scattering light',
        'The protein contains an unusually high proportion of tryptophan',
        'The buffer contains a contaminant absorbing across the ultraviolet',
        'The cuvette path length is longer than the assumed one centimetre'
      ],
      answer: 0,
      why_en: 'Nothing in a clean protein sample should absorb at 320 nm, so a reading there is light lost to scattering rather than absorption. Scattering raises the apparent absorbance across the spectrum, inflating A280 and the concentration derived from it. The usual response is to subtract the scattering contribution or to clear the sample and re-read.',
      why_cn: '干净的蛋白样品在 320 nm 处不该有任何吸收，所以那里的读数是光被散射掉、而不是被吸收掉。散射会抬高整个光谱上的表观吸光度，使 A280 及由此算出的浓度虚高。常规做法是扣掉散射贡献，或者把样品澄清后重测。' }
  ],

  oral: {
    q_en: 'What is OD600, and how does it relate to the Lambert-Beer law?',
    q_cn: '什么是 OD600？它和 Lambert-Beer 定律是什么关系？',
    model_en: 'I would start with the law, because the interesting part of the OD600 answer is that ' +
              'it sits outside it. The Lambert-Beer law says absorbance is proportional to three ' +
              'things: the molar extinction coefficient of the absorbing species at that ' +
              'wavelength, its concentration, and the path length through the sample — A equals ' +
              'epsilon times c times l. It is worth saying why absorbance is the reported quantity ' +
              'at all, because the instrument does not measure it. What the detector sees is ' +
              'transmittance, the fraction of light that arrives. Each thin layer of solution ' +
              'removes the same fraction of the light entering it, since each layer holds the same ' +
              'number of molecules and each molecule acts independently, and repeating a constant ' +
              'fraction is multiplication, so transmittance falls exponentially. Taking the ' +
              'negative logarithm turns that exponential into a straight line. That is the whole ' +
              'reason for the definition: absorbance is linear in concentration and additive ' +
              'between species, which is what makes a standard curve interpolable and blank ' +
              'subtraction legitimate. The linearity is inherited from an assumption — that ' +
              'absorbers act independently and identically — so the law fails wherever that ' +
              'assumption does. Above about one absorbance unit, stray light reaching the detector ' +
              'by other routes cannot be absorbed, so it floors the intensity and caps absorbance. ' +
              'A concentration-dependent equilibrium such as aggregation changes the absorbing ' +
              'species as you dilute. Scattering loses light by a route the law does not describe. ' +
              'And a wide instrument bandwidth averages several epsilons, which is why you read on ' +
              'a peak rather than a shoulder. Now OD600. It is not an application of the law; it is ' +
              'the clearest case of the law not applying. At 600 nm a bacterial suspension absorbs ' +
              'essentially nothing — the wavelength is chosen precisely for that. The cells instead ' +
              'scatter light out of the beam: they are objects of roughly the wavelength scale in a ' +
              'medium of different refractive index, so they deflect photons out of the straight ' +
              'path. Those photons are not destroyed, they simply do not arrive. The instrument ' +
              'cannot tell absorbed light from deflected light, so it applies the same logarithm ' +
              'and prints a number in absorbance units — and the fact that we call it optical ' +
              'density rather than absorbance is the field flagging exactly that. Three things ' +
              'follow, and they are the practical content of the answer. There is no extinction ' +
              'coefficient, because how much a cell scatters depends on its size, shape and ' +
              'refractive index, which vary with strain, growth phase and medium; so OD600 cannot ' +
              'be calculated into cells per millilitre, only calibrated against a plate count, and ' +
              'that calibration belongs to that strain on that instrument. It goes non-linear above ' +
              'roughly 0.4, because in a dense culture scattered light is re-scattered back onto ' +
              'the detector and counted as never removed, so the reading underestimates density — ' +
              'which is why you dilute into range and multiply back rather than trusting a high ' +
              'raw reading. And it counts anything that scatters, so dead cells, debris and ' +
              'inclusion bodies all register; OD can keep rising after growth has stopped, and when ' +
              'viability is what matters the measurement is colony-forming units, not OD.',
    model_cn: '我会从定律讲起，因为 OD600 这道题有意思的地方恰恰在于它不在这条定律之内。' +
              'Lambert-Beer 定律说吸光度正比于三件事：' +
              '吸光物质在该波长下的摩尔消光系数、它的浓度、以及光穿过样品的路径长度，' +
              '即 A = epsilon x c x l。' +
              '值得说一下为什么被报告的是吸光度，因为仪器根本没有测它。' +
              '探测器看到的是透射率，也就是到达的那部分光。' +
              '每一薄层溶液移走进入它的光的同一个比例——' +
              '因为每层含有相同数目的分子，而每个分子彼此独立地起作用——' +
              '而固定比例重复多次是乘法，所以透射率指数式下降。' +
              '取负对数就把这个指数变成了一条直线。这就是这个定义的全部理由：' +
              '吸光度对浓度线性、在不同物质间可加，正因如此标准曲线才能内插、扣空白才合法。' +
              '这个线性是从一个假设继承来的——吸光物彼此独立且性质相同——' +
              '所以这个假设在哪里不成立，定律就在哪里失效。' +
              '大约超过一个吸光度单位后，通过其他途径到达探测器的杂散光不会被吸收，' +
              '于是它给光强设了下限、给吸光度设了上限。' +
              '像聚集这样随浓度移动的平衡，会在你稀释的过程中改变吸光物种本身。' +
              '散射则以这条定律没有描述的途径损失光。' +
              '而过宽的仪器带宽是在对好几个 epsilon 求平均，这也是为什么要在峰上而不是肩上读数。' +
              '再说 OD600。它不是这条定律的应用，而是这条定律最清楚的不适用案例。' +
              '在 600 nm，细菌悬液基本上什么都不吸收——选这个波长正是为此。' +
              '细胞做的是把光散射出光路：它们是尺度与波长相当、' +
              '悬浮在折射率不同介质中的物体，所以会把光子偏折出直线路径。' +
              '这些光子并没有被消灭，只是没有到达而已。' +
              '而仪器分不出「被吸收的光」和「被偏折的光」，' +
              '于是照样套用同一个对数，打印出一个以吸光度为单位的数字——' +
              '我们把它叫做「光密度」而不是「吸光度」，正是这个领域在标记这件事。' +
              '由此推出三件事，也是这个回答真正的实用内容。' +
              '第一，没有消光系数，因为一个细胞散射多少取决于它的大小、形状和折射率，' +
              '而这些随菌株、生长期和培养基变化；' +
              '所以 OD600 不能算成每毫升多少细胞，只能对着铺板计数去校准，' +
              '而那个校准只属于那个菌株、那台仪器。' +
              '第二，大约 0.4 以上就不线性了，因为在浓的培养物里散射掉的光会被再次散射回探测器、' +
              '被算作从未被移走，于是读数低估了密度——' +
              '这正是为什么要稀释到范围内再乘回去，而不是相信一个未稀释的高读数。' +
              '第三，它把任何会散射的东西都算进去，所以死细胞、碎片和包涵体统统计入；' +
              'OD 在生长停止之后还能继续上升，而当你真正关心活力时，' +
              '该测的是菌落形成单位，不是 OD。',
    checklist: [
      { en: 'A = epsilon x c x l — name all three factors', cn: 'A = epsilon x c x l——三个因子都要说出来' },
      { en: 'The instrument measures transmittance, not absorbance', cn: '仪器测的是透射率，不是吸光度' },
      { en: 'Constant fraction per layer means exponential, so take the log', cn: '每层固定比例意味着指数关系，所以取对数' },
      { en: 'The log is what makes it linear and additive — hence standard curves and blanks', cn: '对数正是让它线性且可加的原因——标准曲线和空白因此成立' },
      { en: 'Linearity is inherited from independent, identical absorbers', cn: '线性继承自「吸光物独立且相同」这个假设' },
      { en: 'Failure modes: stray light near A=1, aggregation, scattering, wide bandwidth', cn: '失效模式：A=1 附近的杂散光、聚集、散射、带宽过宽' },
      { en: 'OD600 is scattering, NOT absorbance — say this explicitly', cn: 'OD600 是散射，不是吸光度——这句要明确说出来' },
      { en: '600 nm chosen because biological molecules do not absorb there', cn: '选 600 nm 是因为生物分子在这里不吸收' },
      { en: 'The instrument cannot distinguish the two, hence absorbance units', cn: '仪器分不出这两者，所以才是吸光度单位' },
      { en: 'No epsilon: calibrate against a plate count, strain- and instrument-specific', cn: '没有 epsilon：只能对铺板计数校准，且菌株与仪器特异' },
      { en: 'Non-linear above ~0.4 by re-scattering; dilute and multiply back', cn: '约 0.4 以上因二次散射而不线性；稀释后乘回去' },
      { en: 'Counts dead cells and debris, so it is not viability — CFU is', cn: '死细胞和碎片也计入，所以它不是活力测量——CFU 才是' }
    ]
  }
}

]);
