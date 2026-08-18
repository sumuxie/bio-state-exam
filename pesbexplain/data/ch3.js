/* =========================================================================
   PESB — Batch 3 · Lectures 7–8 · Cell-Free Synthesis and the Genetic Code
   Source: notes/md/03_lec7-8_cell-free-and-genetic-code.md (50 slides,
   combined deck).

   NOTE ON THIS DECK: it is the sparsest in the course. A large fraction of
   the 50 slides are figures, video links or bare headings, with the content
   delivered verbally. The source markdown is therefore more reconstruction
   than transcription, and its "beyond the slides" boxes carry most of the
   weight. That shows up here as an unusually high beyondPoints-to-points
   ratio. The separation is still honest: `points` is what was on a slide.

   The deck also contains snap-quiz questions; those are marked in the
   coverageNote of the node that answers them.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

/* ============ PART I — CELL-FREE PROTEIN SYNTHESIS ============ */

{
  id: '3-1',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.1',
  enTitle: 'Cell-free synthesis — top-down versus bottom-up',
  cnTitle: '无细胞合成——自顶向下与自底向上',
  slides: 'L7 s.2–6',
  coverage: 'full',
  coverageNote: 'The two-philosophy framing and the trade-off table are on the slides, and the source flags the trade-off table as the exam question. The three-component structure recurs on slides 6, 17 and 43, which is the strongest available hint that it is the organising spine of the lecture.',
  summary: {
    en: 'Cell-free protein synthesis, also called in vitro translation, runs translation in a reaction mixture rather than a living cell. It comes in two philosophies: top-down crude extracts, made by lysing cells and using what is already there, and bottom-up reconstituted PURE systems, built by purifying every component separately and mixing them. Crude extract is cheaper and scales; PURE is defined, customisable and batch-consistent.',
    cn: '无细胞蛋白合成又叫体外翻译，是在反应体系而不是活细胞里进行翻译。它有两种思路：自顶向下的粗提物——裂解细胞、直接用里面现成的东西；以及自底向上的重构（PURE）体系——把每个组分单独纯化再混合。粗提物便宜、易放大；PURE 成分明确、可定制、批次一致。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.3', src: 'img/figures/L7_s03_1.webp' },
    { slide: 'L7 s.4', src: 'img/figures/L7_s04_1.webp' },
    { slide: 'L7 s.6', src: 'img/figures/L7_s06_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '粗提物是「**裂开细胞，把不想要的拿掉**」；PURE 是「**只放你亲手加进去的**」。\n\n' +
            '而**遗传密码重编程几乎必须用 PURE**——因为你要让某个天然 aaRS **不在场**，而在一锅裂解物里你没法把它单独挑出来扔掉。',
  skipIt: '**第 7–8 讲没有 RECAP 可引**——老师只在第 2–5 讲开头做过 RECAP，回顾第 1–4 讲。不过这一讲有一个同等级别的一手信号：**老师把「CFPS key components」那张路线图重复了三次**（本讲第 6、17、43 页），上面只有三样东西——**核糖体；氨基酸、tRNA、ARSs；能量再生**。那就是第 7 讲的骨架。相比之下 Shimizu 2001 这个出处、以及成本高低的具体比较，不用背。',
  explain: [
    {
      q: '「自顶向下」和「自底向上」，具体指的是什么？',
      a: '**「顶」是完整的细胞，「底」是一个个纯化好的分子。**\n\n' +
         '**自顶向下（top-down，粗提物）**：从一个已经能工作的复杂系统出发，**把细胞裂开，然后设法拿掉你不想要的东西**。你没有造出任何东西，你是在做**减法**。\n\n' +
         '**自底向上（bottom-up，PURE）**：从零件出发，**把每个组分单独纯化，再一个个加进去**。管子里只有你亲手放进去的东西。你在做**加法**。\n\n' +
         '**判据就是这一句：你是在做减法还是做加法。**\n\n' +
         '**两者各自继承了自己的问题：**\n\n' +
         '减法的问题是**你不知道自己没拿掉什么**——粗提物里有细胞质里的全部东西，已知的和未知的。\n\n' +
         '加法的问题是**你不知道自己漏加了什么**——好在这一次没漏，因为翻译机器的组分已经被搞清楚了。\n\n' +
         '**这一组词在第 11 讲会原样再出现一次**：合成细胞也分自顶向下（把一个真实基因组一点点删到最小）和自底向上（从分子开始组装一个细胞）。**同一组哲学，换了个尺度。**',
      takeaway: '顶向下是从完整细胞做减法，底向上是从零件做加法。第 11 讲的合成细胞用的是同一组词。'
    },
    {
      q: '为什么遗传密码重编程「几乎必须用 PURE」？',
      a: '**因为你需要的是「拿掉」，而粗提物只能「加上」。**\n\n' +
         '想清楚重编程要干什么：你要让某个密码子不再指向它原来的氨基酸，改指一个非天然氨基酸。\n\n' +
         '**那么原来负责那个密码子的天然 aaRS 就必须不在场**——否则它会照旧把天然氨基酸装上去，你的正交系统只能跟它抢，而它数量占优。\n\n' +
         '**在粗提物里，你没有办法把一种蛋白单独挑出来扔掉。**那是一锅几千种蛋白的混合物，20 种天然 aaRS 全都在里面。你可以往里加东西，但你不能精确地减掉一样。\n\n' +
         '**而 PURE 系统是一个个加进去的——所以「不加」就等于「没有」。**\n\n' +
         '想去掉哪个 aaRS，配料时不放它就是了。\n\n' +
         '**这是自底向上真正的、也是唯一不可替代的优势：它能做减法。**\n\n' +
         '自顶向下能加东西（往粗提物里补什么都行），但**做不到干净的减法**。而重编程恰恰是一件「减法优先」的事。\n\n' +
         '**所以第 7 讲和第 8 讲的顺序不是随意的：**先有一个能任意增删组件的平台，才谈得上改写密码。',
      takeaway: 'PURE 里「不加」就等于「没有」，而粗提物里没法把一种蛋白单独挑出来扔掉。重编程要的正是减法。'
    },
    {
      q: '粗提物里那些「不知道有什么」的东西，具体怎么坏事？',
      a: '**四条，前三条是当场坏事，第四条最讨厌。**\n\n' +
         '**残留的 RNase 降解你的 mRNA 模板。**模板一没，反应就停了——而你会以为是别的地方出了问题。\n\n' +
         '**残留的蛋白酶降解你的产物。**辛苦做出来的蛋白一边合成一边被切。\n\n' +
         '**未知的蛋白干扰反应。**细胞质里有几千种蛋白，其中任何一个都可能结合你的产物、消耗你的底物、或者催化你不想要的反应。\n\n' +
         '**每一批都不一样。**\n\n' +
         '**第四条最难对付，因为它让实验不可重复，而你查不出原因。**这批做得好、下批做不出来，中间你什么都没改——你会去怀疑模板、怀疑操作、怀疑自己，而真正的变量在提取物里，那是你看不见也测不了的。\n\n' +
         '**PURE 系统的「批次一致性」这条优点，说的就是把这个变量消掉。**它值多少钱，取决于你有多需要重复性。\n\n' +
         '**这也是第 2-3 节那句「每个蛋白都有自己的脾气」的另一面**：有些不可重复来自蛋白本身，有些来自你没控制住的体系。**前者只能接受，后者可以花钱买掉。**',
      takeaway: 'RNase 吃模板、蛋白酶吃产物、未知蛋白干扰——但最讨厌的是批次差异，因为它让你查不出原因。'
    },
    {
      q: '为什么说第 7 讲和第 8 讲其实是一个论证？',
      a: '**因为 CFPS 不只是一种生产蛋白的方法，它是让密码子重编程变得可行的那个平台。**\n\n' +
         '在活细胞里，翻译机器是一个**你只能旁观的系统**：核糖体、tRNA、aaRS、能量供应，全都由细胞自己维持。你能做的只有转进去一些基因，然后期待细胞照办。\n\n' +
         '**在试管里，翻译机器变成了一份配料表。**\n\n' +
         '你可以**去掉**某个 aaRS（上面那条）；\n\n' +
         '可以**加进**一个正交的 aaRS/tRNA 对（第 3-9 节）；\n\n' +
         '可以**换掉**核糖体（第 3-11 节的正交核糖体）；\n\n' +
         '可以**跳过 aaRS**，直接用核酶给 tRNA 装氨基酸（第 3-13 节的 flexizyme）。\n\n' +
         '**这些操作在细胞里要么做不到，要么会把细胞杀死。**\n\n' +
         '**所以两讲的结构是：第 7 讲搭平台，第 8 讲在平台上改写规则。**\n\n' +
         '口试里如果被问到「为什么无细胞体系重要」，答「产量快、能做有毒蛋白」只是第 2-2 节那一层。**能加一句「而且它是唯一一个可以随意增删翻译机器组件的地方，所以遗传密码重编程建在它上面」，就说明你把两讲连起来看了。**',
      takeaway: '在试管里翻译机器变成一份可增删的配料表。第 7 讲搭平台，第 8 讲在平台上改写规则。'
    }
  ],
  points: [
    { term: 'What it is', en: 'CFPS, also called in vitro translation (IVT), is protein synthesis performed in a reaction mixture rather than inside a living cell.', cn: 'CFPS，也叫体外翻译（IVT），是在反应混合物中而非活细胞内进行的蛋白合成。' },
    { term: 'The protocol', en: 'Grow and lyse cells, prepare crude extracts, add substrates, salts and energy sources, add the template, and produce.', cn: '培养并裂解细胞，制备粗提取物，加入底物、盐和能量来源，加入模板，然后合成。' },
    { term: 'Top-down — crude extract', en: 'Lyse cells and use the extract: take what is already there and remove what you do not want. It contains everything in the cytoplasm, known and unknown.', cn: '裂解细胞并使用提取物：拿现成的东西，再设法去掉不想要的。它包含胞质里的一切，已知的和未知的。' },
    { term: 'Bottom-up — reconstituted PURE', en: 'Purify every component separately and mix them, so the system contains only what you deliberately added — recombinantly expressed transcription, translation and energy machinery from E. coli, plus NTPs, amino acids and a tRNA mix.', cn: '把每个组分单独纯化再混合，所以体系里只有你有意加进去的东西——重组表达的大肠杆菌转录、翻译和能量机器，加上 NTP、氨基酸和 tRNA 混合物。' },
    { term: 'Crude extract advantages', en: 'Cheaper, and easier to scale up.', cn: '更便宜，也更容易放大。' },
    { term: 'PURE system advantages', en: 'Easy customisation with no unknown proteins, batch-to-batch control, and control over RNase and protease content.', cn: '容易定制且没有未知蛋白、批次可控、RNase 和蛋白酶含量可控。' },
    { term: 'What CFPS buys regardless of flavour', en: 'Toxic, aggregating or proteolysis-sensitive proteins; many proteins in parallel for libraries; and engineerability, for example unnatural amino acids.', cn: '不管哪种形式，CFPS 都能带来：毒性蛋白、易聚集蛋白、易被蛋白酶降解的蛋白；并行做很多个蛋白（文库）；以及可工程化改造，例如引入非天然氨基酸。' },
    { term: 'The three key components', en: 'One, the ribosome. Two, amino acids, tRNA and aminoacyl-tRNA synthetases. Three, energy regeneration. The deck returns to this slide three times.', cn: '一、核糖体。二、氨基酸、tRNA 和氨酰-tRNA 合成酶。三、能量再生。这张幻灯片在整个课件里出现了三次。' }
  ],
  beyondPoints: [
    { term: 'The trade-off in one sentence', en: 'Crude extract is a soup you then try to clean up: cheap and scalable because you only lysed some bacteria, but you do not fully know what is in it — residual RNases degrade your mRNA, proteases degrade the product, unknown proteins may interfere, and every batch differs.', cn: '粗提物是「先有一锅汤，再想办法去掉不要的」：便宜、好放大，因为你只是裂解了细菌；但里面有什么你并不完全知道——残留的 RNase 会降解 mRNA，蛋白酶会降解产物，未知蛋白可能干扰实验，而且每批都不一样。' },
    { term: 'PURE is the opposite bargain', en: 'Shimizu and colleagues in 2001 expressed and purified every component of translation separately and mixed them — some thirty-odd proteins plus ribosomes and tRNA. You get fully known composition, high batch consistency and no RNases or proteases, at the cost of being extremely expensive.', cn: 'Shimizu 等人 2001 年把翻译所需的每一个组分单独重组表达纯化再混起来——三十多种蛋白加核糖体和 tRNA。好处是成分完全已知、批次高度一致、没有 RNase 和蛋白酶；代价是极其昂贵。' },
    { term: 'The deciding rule', en: 'Want yield and low cost, use crude extract. Want cleanliness and control, use PURE. And genetic code reprogramming almost requires PURE, because you need to remove a native aaRS and replace it with an orthogonal one — and in a crude extract you simply cannot take the native one out.', cn: '判断口诀：要产量和成本 → 粗提物；要干净和可控 → PURE。而做遗传密码重编程几乎必须用 PURE——因为你要把某个天然 aaRS 拿掉换成正交的，而粗提物里那个天然 aaRS 你根本拿不掉。' },
    { term: 'Why the two lectures are one argument', en: 'CFPS is not only a production method; it is the platform that makes genetic code reprogramming practical, because in a tube you can add, remove and replace any component of the translation machinery at will.', cn: 'CFPS 不只是一种生产方法，它还是让遗传密码重编程变得可行的平台——因为在试管里你可以随意增加、去除、替换翻译机器的任何组分。' }
  ],
  terms: [
    { en: 'CFPS / in vitro translation', cn: '无细胞蛋白合成 / 体外翻译', def_en: 'Protein synthesis carried out in a reaction mixture rather than inside a living cell.', def_cn: '在反应混合物中而非活细胞内进行的蛋白合成。' },
    { en: 'Top-down', cn: '自顶向下', def_en: 'Starting from a cell lysate and removing what you do not want. Cheap and scalable, but of incompletely known composition.', def_cn: '从细胞裂解液出发，去掉不想要的部分。便宜、可放大，但成分并不完全清楚。' },
    { en: 'Bottom-up', cn: '自底向上', def_en: 'Building the system from separately purified parts, so nothing is present that you did not add. Defined and controllable, but expensive.', def_cn: '用分别纯化的部件搭建体系，所以里面没有你没加进去的东西。明确、可控，但昂贵。' },
    { en: 'PURE system', cn: 'PURE 重构体系', def_en: 'Protein synthesis Using Recombinant Elements — a fully defined reconstituted translation system, first described by Shimizu et al. in 2001.', def_cn: 'Protein synthesis Using Recombinant Elements——完全成分明确的重构翻译体系，由 Shimizu 等人 2001 年首次报道。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which is an advantage of a crude extract system over a PURE system?',
      q_cn: '粗提物体系相对 PURE 体系的优势是什么？',
      options: ['No unknown proteins', 'Cheaper and easier to scale up', 'Better batch-to-batch reproducibility between preparations', 'Control over RNase content'],
      answer: 1,
      optionNotes: {
        0: { en: 'That is the defining PURE advantage, stated the wrong way round: crude extract is exactly the system where you cannot know everything in the tube, because you lysed a cell and kept whatever was in it. What crude extract wins on is cost and scale-up.', cn: '这一条正是 PURE 的招牌优势，只是方向说反了：粗提物恰恰是那个「你不可能知道管子里都有什么」的体系，因为你是裂了细胞、把里面的东西照单全收。粗提物赢的地方是成本和放大。' }
      },
      why_en: 'Crude extract wins on cost and scalability because you are only lysing bacteria. The other three options are all PURE system advantages, since they follow from knowing exactly what is in the mixture.',
      why_cn: '粗提物在成本和可放大性上占优，因为你只是裂解了细菌。另外三项都是 PURE 体系的优势，因为它们都源自「你确切知道混合物里有什么」。' },
    { type: 'mcq',
      q_en: 'Why is genetic code reprogramming almost always done in a PURE system rather than a crude extract?',
      q_cn: '为什么遗传密码重编程几乎总是在 PURE 体系而不是粗提物里做？',
      options: ['PURE systems give a higher yield of protein per reaction', 'Only in PURE can a native aaRS be omitted and an orthogonal one added', 'Crude extracts cannot express protein from a linear DNA template', 'PURE systems cost less to assemble than a crude extract does'],
      answer: 1,
      optionRefs: { 2: '3-7' },
      optionNotes: {
        3: { en: 'Cost points the other way: every component of a PURE system has to be expressed and purified one by one, which is why crude extract is the cheap and scalable option. PURE is chosen for what you are able to leave out of it, and that control is what you are paying for.', cn: '成本是反过来的：PURE 的每一个组分都得单独表达、纯化，所以便宜又好放大的是粗提物。选 PURE 是为了「可以不加某个东西」这种控制力，而这种控制力正是要花钱买的。' }
      },
      why_en: 'Reprogramming means controlling exactly which synthetases are present. In a crude extract the native aaRS is simply there and cannot be taken out, so it will keep charging its tRNA with the canonical amino acid.',
      why_cn: '重编程意味着要精确控制体系里有哪些合成酶。粗提物里天然的 aaRS 就在那儿、拿不掉，它会持续用天然氨基酸给自己的 tRNA 充电。' },
    { type: 'mcq',
      q_en: 'What are the three key components of a CFPS reaction?',
      q_cn: 'CFPS 反应的三个关键组分是什么？',
      options: ['The DNA template; RNA polymerase; a buffered salt solution', 'The ribosome; amino acids with tRNA and aaRSs; energy regeneration', 'Folding chaperones; proteases; nucleases from the extract', 'A DNA template; a primer pair; a thermostable polymerase'],
      answer: 1,
      why_en: 'These three organise the whole lecture — the deck returns to the slide three times. Part II of the lecture then attacks component two, since reprogramming the code means changing what tRNAs and synthetases do.',
      why_cn: '这三项是整讲的组织结构——这张幻灯片出现了三次。而第二部分攻击的正是第二个组分，因为重编程遗传密码就是改变 tRNA 和合成酶的行为。' },
    { type: 'short',
      q_en: 'Define CFPS and give three things it can do that cellular expression cannot.',
      q_cn: '定义 CFPS，并说出三件它能做而细胞内表达做不到的事。',
      accept: ['toxic', 'linear DNA', 'parallel', 'libraries', 'unnatural amino acid'],
      answer_en: 'Cell-free protein synthesis, also called in vitro translation, is protein synthesis performed in a reaction mixture rather than inside a living cell — you grow and lyse cells, prepare the extract, add substrates, salts and energy sources, add the template and produce. Three things it uniquely allows: it can make toxic, aggregating or proteolysis-sensitive proteins, because there is no cell to poison and you control the protease content; it can run many proteins in parallel as a library, because each reaction is just a tube; and it is engineerable, most importantly allowing unnatural amino acids to be incorporated, because you can add, remove and replace any component of the translation machinery at will.',
      answer_cn: '无细胞蛋白合成（又叫体外翻译）是在反应混合物而非活细胞内进行的蛋白合成——培养并裂解细胞、制备提取物、加入底物盐和能量来源、加入模板、然后合成。三件它独有的能力：可以做毒性蛋白、易聚集蛋白、易被蛋白酶降解的蛋白，因为没有细胞可被毒死，而且蛋白酶含量可控；可以并行做很多个蛋白构成文库，因为每个反应只是一个管子；以及可工程化，最重要的是能引入非天然氨基酸，因为你可以随意增删替换翻译机器的任何组分。'
    }
  ],
  oral: {
    q_en: 'What is cell-free protein synthesis, and what are the two ways of building such a system?',
    q_cn: '什么是无细胞蛋白合成？搭建这种体系有哪两种方式？',
    model_en: 'Cell-free protein synthesis, also called in vitro translation, is protein synthesis performed in a reaction mixture rather than inside a living cell. The protocol is to grow and lyse cells, prepare crude extracts, add substrates, salts and energy sources, add the template and produce. There are two philosophies for building one, and the deck frames them as top-down versus bottom-up. Top-down means crude extract: you lyse cells and use what is already there, removing what you do not want. It is cheaper and easier to scale up, because all you did was lyse some bacteria — but it contains everything in the cytoplasm, known and unknown, so residual RNases can degrade your mRNA, proteases can degrade your product, unknown proteins may interfere, and every batch differs. Bottom-up means a reconstituted system, the PURE system, from Shimizu and colleagues in 2001: every component of translation is expressed and purified separately and then mixed, some thirty-odd proteins plus ribosomes and a tRNA mix, so the reaction contains only what you deliberately added. That gives you easy customisation with no unknown proteins, batch-to-batch control, and control over RNase and protease content, at the cost of being extremely expensive. The rule is simple: if you want yield and low cost, use crude extract; if you want cleanliness and control, use PURE. Whichever you choose, the reaction has three key components — the ribosome, then amino acids with tRNA and the aminoacyl-tRNA synthetases, then energy regeneration — and the deck returns to that slide three times, which tells you it is the spine of the lecture. And CFPS as a whole buys you three things a cell cannot: toxic or aggregating or protease-sensitive proteins, many proteins in parallel as a library, and engineerability, which is the bridge to genetic code reprogramming — because in a tube you can add, remove and replace any part of the translation machinery at will.',
    checklist: ['CFPS = in vitro translation, in a mixture not a cell', 'Protocol: grow, lyse, extract, add substrates/salts/energy, add template', 'Top-down = crude extract: use what is there, remove what you do not want', 'Cheaper and scalable, but unknown contents and batch variation', 'Bottom-up = PURE: purify every component and mix (Shimizu 2001)', 'Defined, customisable, batch-consistent, no RNase or protease — but expensive', 'Rule: yield and cost so crude; cleanliness and control so PURE', 'Three key components: ribosome; amino acids/tRNA/aaRS; energy regeneration', 'CFPS advantages: toxic proteins, parallel libraries, engineerability', 'Reprogramming needs PURE, since a native aaRS cannot be removed from an extract']
  }
},

{
  id: '3-2',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.2',
  enTitle: 'The ribosome',
  cnTitle: '核糖体',
  slides: 'L7 s.7–12',
  coverage: 'full',
  coverageNote: 'The size figures and the Hsiao citation are on the slides. This node answers the deck\'s first snap-quiz question — how many ribosomes in an E. coli cell — and the reason the number scales with growth rate is the reasoning that earns the point.',
  summary: {
    en: 'The ribosome is a large molecular machine: 20 to 30 nanometres, about 7,500 amino acids and 4,600 nucleotides, 2.7 megadaltons, roughly a million atoms. A fast-growing E. coli cell contains about 70,000 of them, because ribosome content is proportional to growth rate. Its catalytic core, the peptidyl transferase centre, is pure RNA — the ribosome is a ribozyme, and peptide bond formation is catalysed by RNA rather than protein.',
    cn: '核糖体是一台大型分子机器：20–30 纳米，约 7500 个氨基酸和 4600 个核苷酸，2.7 兆道尔顿，约一百万个原子。快速生长的大肠杆菌细胞里约有 7 万个，因为核糖体含量与生长速率成正比。它的催化核心——肽基转移酶中心——是纯 RNA，所以核糖体本质上是一个核酶，肽键的形成由 RNA 而不是蛋白催化。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.7', src: 'img/figures/L7_s07_1.webp' },
    { slide: 'L7 s.7', src: 'img/figures/L7_s07_2.webp' },
    { slide: 'L7 s.8', src: 'img/figures/L7_s08_1.webp' },
    { slide: 'L7 s.9', src: 'img/figures/L7_s09_1.webp' },
    { slide: 'L7 s.9', src: 'img/figures/L7_s09_2.webp' },
    { slide: 'L7 s.10', src: 'img/figures/L7_s10_1.webp' },
    { slide: 'L7 s.10', src: 'img/figures/L7_s10_2.webp' },
    { slide: 'L7 s.11', src: 'img/figures/L7_s11_1.webp' },
    { slide: 'L7 s.12', src: 'img/figures/L7_s12_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**核糖体的催化核心（肽基转移酶中心）是纯 RNA**——肽键的形成由 RNA 催化，不是蛋白。\n\n' +
            '所以核糖体本质上是一个**核酶（ribozyme）**，这是 RNA 世界假说最强的单一证据。',
  skipIt: '2.7 MDa、一百万个原子、7500 个氨基酸这一串尺寸数字，以及 Hsiao 2009 的出处，不用背。**第 7–8 讲没有 RECAP 可引**，所以这是判断——但「核糖体是核酶」这一条建议记牢，它既是 RNA 世界的核心论据，也是第 3-13 节 flexizyme 的思想来源。',
  explain: [
    {
      q: '「核糖体是核酶」为什么算一件大事？',
      trace: {
        what: '核糖体是**翻译**的机器——把 mRNA 上的密码子读出来，把氨基酸一个个连成蛋白链。它的催化核心叫**肽基转移酶中心（PTC，peptidyl transferase centre）**，就是真正把两个氨基酸缝成肽键的那个位置。',
        from: 'PTC 不是蛋白做的，是**纯 RNA**——核糖体本质上是几十亿年前就定型的**核酶（ribozyme）**，是所有已知生命共有的、最古老最保守的部分之一。',
        to: '因为催化的是 RNA 而不是蛋白，核糖体成了 **RNA 世界假说**最有力的单一证据；同一个逻辑在第 3-13 节被拿去解释 flexizyme 为什么能用 RNA 给 tRNA 上料。',
        family: '核糖体分**大亚基**（含 PTC）和**小亚基**（负责密码子–反密码子配对，第 3-11 节的解码中心）；同类的人工核酶还有 flexizyme。'
      },
      a: '**因为它把中心法则里最核心的那个化学动作，交给了 RNA。**\n\n' +
         '形成肽键——把氨基酸一个个连成蛋白质——是整个中心法则的落点。而干这件事的**不是蛋白酶、不是任何蛋白，是 RNA**。\n\n' +
         '**含义很直接：在蛋白存在之前，RNA 就已经能催化蛋白的合成了。**\n\n' +
         '这解开了一个鸡生蛋的死结：**蛋白需要核糖体来合成，而核糖体如果是蛋白做的，那第一个核糖体从哪来？**答案是它不是蛋白做的。\n\n' +
         '**Hsiao 那篇文章的「洋葱」框架把这一点讲得很漂亮：**\n\n' +
         '核糖体可以像洋葱一样一层层剥开。**最里面、紧贴着肽基转移酶中心的那几层，是最古老、在所有生物里最保守的，而且是纯 RNA，一个蛋白都没有。**蛋白是后来一层层贴到外面去的。\n\n' +
         '**所以核糖体是一块分子化石**——它的结构本身记录了自己的演化顺序，从里到外就是从古到今。\n\n' +
         '（这也解释了为什么那么多抗生素打核糖体、而且能区分细菌和真核：**外层差异大，内核几乎一样**，所以药必须打在外层的差异上——回到第 1-10-1 节那张表。）',
      takeaway: 'RNA 能催化蛋白的合成，解开了「第一个核糖体从哪来」的死结。内核最古老且纯 RNA，外层是后来贴上的。'
    },
    {
      q: '为什么 70,000 这个数字要跟「生长速率」绑在一起说？',
      a: '**因为核糖体含量与生长速率成正比，这是细菌生理学里最老的定量规律之一。**\n\n' +
         '**慢速生长**（倍增约 100 分钟）→ 1–2 万个。\n\n' +
         '**快速生长**（倍增约 20 分钟）→ 约 **7 万个**。\n\n' +
         '**为什么必然如此？**算一下就明白：\n\n' +
         '一个核糖体大约每秒延伸 **20 个氨基酸**。而细胞必须在**一个倍增时间之内，把自己全部的蛋白翻一倍**。\n\n' +
         '倍增时间缩短一半，就要求单位时间的蛋白产量翻倍——而单个核糖体的速度是固定的，**所以只能靠增加核糖体的数量**。\n\n' +
         '**而这里有一个自我加强的环节：核糖体蛋白本身就占了细胞蛋白总量的一大块。**所以「多造核糖体」这件事本身又需要更多核糖体。结果是**生长越快，核糖体占的比例不成比例地更高**——快速生长时它们占到细胞干重的 **20–30%**。\n\n' +
         '**一句话：细菌在很大程度上就是一台生产更多核糖体的机器。**\n\n' +
         '**这一条在 CFPS 里的实际用处**：制备提取物时用**快速生长期的细胞**，拿到的核糖体浓度高得多——而核糖体浓度基本决定了这锅反应的产量上限。',
      takeaway: '核糖体速度固定，所以长得快只能靠数量堆。而核糖体蛋白自己就占大头，于是比例不成比例地上升。'
    },
    {
      q: '幻灯片上那道课堂 quiz 题该怎么算？（先说一处出入）',
      a: '**先说明一处出入，免得你对着两个不同的问题记答案。**\n\n' +
         '本节 points 里写的 snap quiz 是「**一个 E. coli 细胞里有多少核糖体**」，答案约 7 万。\n\n' +
         '而幻灯片上那道 QUIZZ（本讲第 21 页）问的其实是：「**一个 20 µL 的 CFPS 反应里，你预期有多少个核糖体？**」选项是 **10⁶ / 10⁸ / 10¹⁰ / 10¹²**。\n\n' +
         '**幻灯片上没有标出答案，我也无法核实老师认定的是哪一个**——所以下面给方法，不给结论。\n\n' +
         '**方法只有一个公式：个数 = 浓度 × 体积 × 阿伏伽德罗常数。**\n\n' +
         'CFPS 反应里核糖体的浓度通常在**微摩尔量级**。取 1 µM 试算：\n\n' +
         '1×10⁻⁶ mol/L × 20×10⁻⁶ L = 2×10⁻¹¹ mol\n\n' +
         '2×10⁻¹¹ × 6.022×10²³ ≈ **1.2×10¹³ 个**\n\n' +
         '若浓度只有 0.1 µM，则约 1.2×10¹²。\n\n' +
         '**所以按微摩尔量级估，落在 10¹²–10¹³ 之间，四个选项里 (D) 最接近。**\n\n' +
         '**第 3-6 节记的答案就是 (D) 约 10¹²**，取的是 PURE 体系里偏低的那一端（0.1 µM）。两个数不矛盾——**PURE 的核糖体浓度本来就比粗提物低**，因为它是一个个加进去的、而核糖体很贵。\n\n' +
         '**真正要带走的是那个公式**：看到任何「有多少个分子」的问题，就是**浓度 × 体积 × 6×10²³**。而估算时**先问清楚是哪种体系**，浓度可以差一个量级。',
      takeaway: '公式是浓度 × 体积 × 6×10²³。第 3-6 节按 PURE 的 0.1 µM 算出 10¹²；粗提物浓度更高，所以要先问是哪种体系。'
    },
    {
      q: '这一节跟第 3-13 节的 flexizyme 有什么关系？',
      a: '**关系比看上去紧密：如果核糖体的催化核心是 RNA，那么造一个人工核酶来给 tRNA 装氨基酸，就是在用同一套语言干活。**\n\n' +
         '正常情况下，给 tRNA 装氨基酸这件事是 **aaRS 这个蛋白酶**干的（第 3-3 节）。\n\n' +
         '而 flexizyme 是一段**人工设计的 RNA**，它能完成同一件事——**不用蛋白**。\n\n' +
         '**如果你已经知道「核糖体是核酶」，flexizyme 就不再是一个聪明的外挂，而是一次回归：**翻译这台机器本来就是 RNA 造的、RNA 催化的，那么用 RNA 来给它上料，是最自然不过的事。\n\n' +
         '**而且这一条还解释了 flexizyme 为什么能那么「不挑」（第 3-13 节的 flexible 就是这个意思）：**\n\n' +
         'aaRS 是被进化打磨了几十亿年、专门用来**排除**非标准氨基酸的（第 3-3 节的双筛机制）。它的精确性正是你的障碍。\n\n' +
         '而一个人工核酶**没有那段进化史**，它没有理由排斥非天然氨基酸。**它的「不挑」不是设计出来的优点，是没有被进化训练过的结果。**\n\n' +
         '所以复习到第 3-13 节时，可以回过头来把这条线接上：**核糖体是核酶 → 翻译本来就是 RNA 的活 → 用 RNA 绕开被进化训练得太精确的那个蛋白。**',
      takeaway: '翻译本来就是 RNA 催化的，所以用人工核酶给 tRNA 上料是回归而非外挂。而它「不挑」是因为没被进化训练过。'
    }
  ],
  points: [
    { term: 'Size', en: '20 to 30 nanometres across.', cn: '直径 20–30 纳米。' },
    { term: 'Composition', en: 'About 7,500 amino acids and about 4,600 nucleotides.', cn: '约 7500 个氨基酸和约 4600 个核苷酸。' },
    { term: 'Mass', en: '2.7 megadaltons.', cn: '2.7 兆道尔顿。' },
    { term: 'Atom count', en: 'Roughly one million atoms.', cn: '大约一百万个原子。' },
    { term: 'The cited paper', en: 'Hsiao et al. 2009, "Peeling the Onion: Ribosomes are ancient molecular fossils", Molecular Biology and Evolution 26:2415–25.', cn: 'Hsiao 等 2009 年，《剥洋葱：核糖体是古老的分子化石》，Molecular Biology and Evolution 26:2415–25。' },
    { term: 'Snap quiz — ribosomes per cell', en: 'How many ribosomes in one E. coli cell at fast doubling time? About 70,000.', cn: '快速倍增期的一个大肠杆菌细胞里有多少核糖体？约 7 万个。' }
  ],
  beyondPoints: [
    { term: 'The onion framing', en: 'The Hsiao argument is that the ribosome can be peeled like an onion: the innermost layers around the peptidyl transferase centre are the most ancient and most universally conserved, and they are pure RNA with no protein. Proteins accreted onto the outside later.', cn: 'Hsiao 的论点是核糖体可以像洋葱一样被剥开：肽基转移酶中心周围最内层的部分最古老、最普遍保守，而且是纯 RNA、不含蛋白。蛋白是后来才附着到外层的。' },
    { term: 'The ribosome is a ribozyme', en: 'The peptidyl transferase centre is catalytic RNA, so peptide bond formation — the central chemical act of the central dogma — is catalysed by RNA, not protein. This is the strongest single piece of evidence for an RNA World.', cn: '肽基转移酶中心是催化性 RNA，所以肽键的形成——中心法则里最核心的那个化学反应——是由 RNA 而不是蛋白催化的。这是 RNA World 假说最有力的单一证据。' },
    { term: 'Why this matters for flexizymes', en: 'If the ribosome\'s catalytic core is RNA, then building an artificial ribozyme to charge tRNAs is working in the same idiom as the machinery you are reprogramming — which makes flexizymes conceptually elegant rather than merely clever.', cn: '如果核糖体的催化核心是 RNA，那么造一个人工核酶去给 tRNA 充电，就是在用与被改造机器相同的语言工作——这让 flexizyme 显得优雅而不只是取巧。' },
    { term: 'Why 70,000 and why it scales', en: 'Ribosome content is proportional to growth rate, one of the oldest quantitative laws in bacterial physiology. Slow growth, doubling around 100 minutes, gives 10,000 to 20,000; fast growth, doubling around 20 minutes, gives about 70,000.', cn: '核糖体含量与生长速率成正比，这是细菌生理学中最古老的定量规律之一。慢速生长（倍增约 100 分钟）是 1 万–2 万个；快速生长（倍增约 20 分钟）是约 7 万个。' },
    { term: 'The reason behind the law', en: 'A ribosome elongates at roughly 20 amino acids per second, and a cell must double its entire protein content within one doubling time. Since ribosomal proteins are themselves a large fraction of that protein, faster growth requires disproportionately more ribosomes — the cell is largely a machine for making more ribosomes. At fast growth they are 20 to 30 per cent of total dry mass.', cn: '一个核糖体的延伸速度约为每秒 20 个氨基酸，而细胞必须在一个倍增时间内把全部蛋白含量翻倍。由于核糖体蛋白本身就占蛋白总量的很大一部分，生长越快就需要不成比例地更多的核糖体——细胞在很大程度上就是一台制造更多核糖体的机器。快速生长时它们占细胞干重的 20–30%。' }
  ],
  terms: [
    { en: 'Peptidyl transferase centre (PTC)', cn: '肽基转移酶中心', def_en: 'The catalytic site of the ribosome where peptide bonds form. It is made of RNA, not protein, and is the most ancient and conserved part of the structure.', def_cn: '核糖体上形成肽键的催化位点。它由 RNA 而非蛋白构成，是整个结构中最古老、最保守的部分。' },
    { en: 'Ribozyme', cn: '核酶', def_en: 'An RNA molecule with catalytic activity. The ribosome is one, which is the strongest evidence for an RNA World.', def_cn: '具有催化活性的 RNA 分子。核糖体就是其中之一，这是 RNA World 假说最有力的证据。' },
    { en: 'RNA World', cn: 'RNA 世界假说', def_en: 'The hypothesis that early life used RNA for both information storage and catalysis, before proteins and DNA took over those roles.', def_cn: '认为早期生命同时用 RNA 承担信息存储和催化功能的假说，那时蛋白和 DNA 还没有接手这些角色。' },
    { en: 'Growth rate law', cn: '生长速率定律', def_en: 'The proportionality between ribosome content and growth rate in bacteria — one of the oldest quantitative results in the field.', def_cn: '细菌中核糖体含量与生长速率成正比的关系，是该领域最古老的定量结果之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How many ribosomes would you expect in one E. coli cell at fast doubling time?',
      q_cn: '快速倍增期的一个大肠杆菌细胞里大约有多少核糖体？',
      options: ['700', '7,000', '70,000', '700,000'],
      answer: 2,
      why_en: 'About 70,000. Ribosome content is proportional to growth rate — slow growth at around 100 minutes doubling gives only 10,000 to 20,000.',
      why_cn: '约 7 万个。核糖体含量与生长速率成正比——倍增时间约 100 分钟的慢速生长只有 1 万–2 万个。' },
    { type: 'mcq',
      q_en: 'What catalyses peptide bond formation in the ribosome?',
      q_cn: '核糖体中是什么催化肽键的形成？',
      options: ['A ribosomal protein sitting in the large subunit', 'The rRNA that forms the peptidyl transferase centre', 'A magnesium ion held in the active site alone', 'Elongation factor Tu, using the energy from GTP hydrolysis'],
      answer: 1,
      optionNotes: {
        0: { en: 'This is the default assumption that a catalyst has to be a protein. The peptidyl transferase centre is built entirely of rRNA, with no protein close enough to take part — the ribosomal proteins sit around the outside stabilising the RNA fold.', cn: '这是「催化剂总该是蛋白」这个默认假设。肽基转移酶中心（PTC）完全由 rRNA 构成，附近没有任何蛋白近到能参与催化——ribosomal protein 都待在外围，负责稳定 RNA 的折叠。' },
        3: { en: 'EF-Tu is a GTPase that delivers the aminoacyl-tRNA into the A site and then leaves; it never touches the chemistry. Getting the right tRNA into position and forming the bond are two different jobs, and the second one is done by rRNA in the peptidyl transferase centre.', cn: 'EF-Tu 是一个 GTPase，负责把氨酰-tRNA 送进 A 位点然后离开，它不参与化学反应本身。「把正确的 tRNA 送到位」和「把肽键接上」是两件事，后一件是 PTC 里的 rRNA 做的。' }
      },
      why_en: 'The PTC is made of RNA, so the ribosome is a ribozyme. This makes peptide bond formation, the central chemical act of the central dogma, an RNA-catalysed reaction — the strongest evidence for an RNA World.',
      why_cn: '肽基转移酶中心由 RNA 构成，所以核糖体是一个核酶。这使得肽键形成——中心法则最核心的化学反应——成为一个由 RNA 催化的反应，也是 RNA World 假说最有力的证据。' },
    { type: 'mcq',
      q_en: 'Why does ribosome content scale with growth rate?',
      q_cn: '为什么核糖体含量随生长速率变化？',
      options: ['Faster-growing cells are simply larger, so every component scales up in the same proportion', 'The entire protein content must be doubled within one doubling time', 'Each ribosome elongates more slowly at high growth rate, so extra ones are needed', 'Faster DNA replication demands more ribosomes directly'],
      answer: 1,
      why_en: 'A ribosome elongates at about 20 amino acids per second, so doubling all protein in less time needs disproportionately more ribosomes — and since they are a large share of the protein being made, the requirement compounds. At fast growth they reach 20-30 per cent of dry mass.',
      why_cn: '一个核糖体每秒延伸约 20 个氨基酸，所以要在更短时间内把全部蛋白翻倍，就需要不成比例地更多核糖体——而由于它们本身就占所要合成蛋白的很大份额，这个需求会叠加放大。快速生长时它们占干重的 20–30%。' },
    { type: 'short',
      q_en: 'Why is it significant that the ribosome\'s catalytic core is RNA?',
      q_cn: '核糖体的催化核心是 RNA，这一点为什么重要？',
      accept: ['ribozyme', 'RNA World', 'not protein', 'flexizyme'],
      answer_en: 'It means the ribosome is a ribozyme. Peptide bond formation is the central chemical act of the central dogma, and it turns out to be catalysed by RNA rather than by protein — which is the strongest single piece of evidence for an RNA World, where early life used RNA for both information and catalysis. The Hsiao paper adds that the ribosome can be peeled like an onion, with the innermost layers around the peptidyl transferase centre being the most ancient, most universally conserved, and pure RNA, with proteins accreted onto the outside later. There is also a practical consequence for this lecture: if the catalytic core of the translation machinery is RNA, then building an artificial ribozyme to charge tRNAs — which is exactly what a flexizyme is — is working in the same idiom as the machinery you are reprogramming.',
      answer_cn: '这意味着核糖体是一个核酶。肽键的形成是中心法则最核心的化学反应，而它竟然是由 RNA 而非蛋白催化的——这是 RNA World 假说最有力的单一证据，该假说认为早期生命同时用 RNA 承担信息和催化功能。Hsiao 那篇论文还指出核糖体可以像洋葱一样被剥开：肽基转移酶中心周围最内层最古老、最普遍保守，而且是纯 RNA，蛋白是后来附着到外层的。这对本讲还有一个实际意义：如果翻译机器的催化核心是 RNA，那么造一个人工核酶来给 tRNA 充电（这正是 flexizyme 所做的），就是在用与被改造机器相同的语言工作。'
    }
  ],
  oral: {
    q_en: 'Tell me about the ribosome as a molecular machine.',
    q_cn: '把核糖体作为一台分子机器讲一讲。',
    model_en: 'It is a large machine by any standard: twenty to thirty nanometres across, built from about seven and a half thousand amino acids and four and a half thousand nucleotides, with a mass of two point seven megadaltons and roughly a million atoms. A fast-growing E. coli cell contains about seventy thousand of them. That number is worth being able to defend, because ribosome content is proportional to growth rate — one of the oldest quantitative laws in bacterial physiology. At slow growth, doubling around a hundred minutes, you find only ten to twenty thousand; at fast growth, doubling in twenty minutes, about seventy thousand. The reason is that a ribosome elongates at roughly twenty amino acids per second and the cell has to double its entire protein content within one doubling time; since ribosomal proteins are themselves a large fraction of that protein, faster growth requires disproportionately more ribosomes. At fast growth they make up twenty to thirty per cent of the cell\'s dry mass — the cell is largely a machine for making more ribosomes. The deeper point comes from the paper the deck cites, Hsiao and colleagues on ribosomes as ancient molecular fossils. Their argument is that the ribosome can be peeled like an onion: the innermost layers, around the peptidyl transferase centre, are the most ancient and the most universally conserved, and they are pure RNA with no protein at all — the proteins accreted onto the outside later. So the ribosome is a ribozyme. Peptide bond formation, the central chemical act of the entire central dogma, is catalysed by RNA rather than protein, and that is the strongest single piece of evidence for an RNA World. It also matters for the second half of this lecture, because if the catalytic core of translation is RNA, then building an artificial ribozyme to charge tRNAs — which is what a flexizyme does — is working in the same idiom as the machinery being reprogrammed.',
    checklist: ['20-30 nm, ~7,500 aa and ~4,600 nt, 2.7 MDa, ~1 million atoms', '~70,000 ribosomes in a fast-growing E. coli cell', 'Content is proportional to growth rate', 'Slow growth (~100 min doubling): 10,000-20,000', 'Reason: ~20 aa/s elongation, must double all protein in one doubling time', 'Ribosomal proteins are themselves a large share of that protein', '20-30% of dry mass at fast growth', 'Hsiao: peel like an onion, innermost layers most ancient', 'The PTC is pure RNA, proteins accreted later', 'So the ribosome is a ribozyme — evidence for an RNA World', 'And it makes flexizymes conceptually natural']
  }
},

{
  id: '3-3',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.3',
  enTitle: 'Aminoacyl-tRNA synthetases and the double sieve',
  cnTitle: '氨酰-tRNA 合成酶与双筛机制',
  slides: 'L7 s.13, s.28–29',
  coverage: 'full',
  coverageNote: 'The two classes, the three domains and the slide\'s own answer are on the deck. This node answers the second snap-quiz question — why such complex proteins are needed — and the double-sieve mechanism is the full answer, as well as being the reason orthogonal synthetases later need their editing domains removed.',
  summary: {
    en: 'Aminoacylation of tRNA is a very specific, ATP-dependent reaction. Synthetases come in two classes, each serving about half the amino acids, and have three domains: anticodon recognition, catalytic, and editing. The reason they are so complex is that they must discriminate between chemically near-identical amino acids, and they do it with two sieves in series — a catalytic site that excludes anything larger than the correct residue, and an editing site that admits and destroys anything smaller.',
    cn: 'tRNA 的氨酰化是一个高度特异、依赖 ATP 的反应。合成酶分为两类，各负责约一半的氨基酸，有三个结构域：反密码子识别域、催化域、编辑域。它们之所以如此复杂，是因为必须区分化学上几乎相同的氨基酸，而做法是两道串联的筛子——催化位点排除比正确残基大的，编辑位点则放进并销毁比它小的。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.13', src: 'img/figures/L7_s13_1.webp' },
    { slide: 'L7 s.28', src: 'img/figures/L7_s28_1.webp' },
    { slide: 'L7 s.29', src: 'img/figures/L7_s29_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**双筛**：催化位点**排除比正确氨基酸大的**，编辑位点**放进并销毁比它小的**——两道方向相反的筛子。\n\n' +
            '约 1/100 × 1/100 = **1/10000**，正好是实测的错误率。',
  skipIt: 'class I 和 class II 各包含哪些氨基酸不用背。**第 7–8 讲没有 RECAP 可引**，所以这是判断——但双筛机制必须能讲，而且**编辑域这一条直接连到第 3-9 节**：做正交合成酶时常常要把它改掉或删掉。',
  explain: [
    {
      q: '为什么说 Ile 和 Val 是「最坏情况」？差多少才算难分？',
      a: '**它们只差一个亚甲基（CH₂）——而这个差别小到热力学根本不够用。**\n\n' +
         '把数字摆出来，问题的严重程度就清楚了：\n\n' +
         '**一个 CH₂ 能提供的结合能差异，大约只有 1 kcal/mol。**\n\n' +
         '按玻尔兹曼分布算，1 kcal/mol 的能量差对应的选择性大约是 **5 倍**——也就是说，**单靠结合亲和力，错误率会是大约五分之一。**每五个 Ile 里就有一个装成了 Val。\n\n' +
         '**而实测的错误率是大约万分之一。**\n\n' +
         '**差了三个数量级。**\n\n' +
         '**所以结论是硬的：结合亲和力本身根本解释不了这个精度，必然还有别的机制。**\n\n' +
         '这个推理方式本身值得学——**先算出「如果只靠最朴素的机制，结果会是多少」，再跟实测比**。差距有多大，就说明还缺多少解释。第 2-11 节判断折叠和聚集的竞争、第 1-6 节判断 Sanger 读长的上限，用的都是同一种思路。\n\n' +
         '**这个「三个数量级的缺口」，就是双筛机制要填的坑。**',
      takeaway: '一个 CH₂ 只值约 1 kcal/mol，单靠结合亲和力错误率会是 1/5，而实测是 1/10000。缺口必须由别的机制填。'
    },
    {
      q: '两道筛子怎么相乘成 1/10000？',
      a: '**关键在于两道筛子的方向正好相反——一道挡大的，一道抓小的。**\n\n' +
         '**筛一：催化（活化）位点 —— 挡住比正确氨基酸大的。**\n\n' +
         '口袋的尺寸卡得很死。Ile-RS 的口袋**装不下任何比 Ile 大的氨基酸**，它们在空间上就被排除了。\n\n' +
         '**但比 Ile 小的（比如 Val）还是塞得进去**，而且会被错误地活化。这道筛子对「小的」无能为力。\n\n' +
         '**筛二：编辑位点 —— 只放进比正确氨基酸小的。**\n\n' +
         '这是**另一个口袋，物理上跟催化位点有一段距离**。它的尺寸做得更小：\n\n' +
         '**正确的 Ile-tRNA 进不去**（太大了）——所以正确产物安全。\n\n' +
         '**错误的 Val-tRNA 进得去**——进去就被水解掉。\n\n' +
         '**两道筛子各自约 1/100，串联相乘就是 1/10000。**这正是实测值。\n\n' +
         '**而三个结构域正好对应三件事：**\n\n' +
         '**反密码子识别域** —— 挑对 tRNA（选对「送货地址」）。\n\n' +
         '**催化域** —— 筛一。\n\n' +
         '**编辑域** —— 筛二。\n\n' +
         '**所以「为什么 aaRS 这么复杂」有了答案：它不是一台简单的连接机器，它是一台带质检的连接机器，而质检占了它三分之一的结构。**',
      takeaway: '一道挡大的、一道抓小的，方向相反所以能串联。三个结构域正好是选 tRNA、筛一、筛二。'
    },
    {
      q: '为什么这个精密的编辑域，到第 8 讲反而变成了障碍？',
      a: '**因为你要装的非天然氨基酸，在编辑域看来就是一个错误——它会尽职地把它水解掉。**\n\n' +
         '编辑域的判据很简单：**「比正确的那个小 → 销毁」**。它不知道什么叫「非天然氨基酸」，它只认尺寸和化学。\n\n' +
         '**于是你精心设计的正交系统，会被一个进化了几十亿年的质控机制持续拆台。**\n\n' +
         '**所以做正交 aaRS 时，常常要把编辑域改掉或者整个删掉**（第 3-9 节）。\n\n' +
         '**注意这句话的分量：你要主动破坏一个精心进化出来的质量控制系统。**\n\n' +
         '**而这已经是这门课里第三次做同样的事了：**\n\n' +
         '**第 2-5 节**：BL21 敲掉 **Lon 蛋白酶**——因为它专门降解「异常」蛋白，而你过表达的产物正好符合这个描述。\n\n' +
         '**第 2-13 节**：Origami/SHuffle 敲掉 **trxB 和 gor**——因为还原性胞质是细胞保护自己的机制，而你要的正是二硫键。\n\n' +
         '**这一节**：删掉 **编辑域**——因为它在保护你不想要的那种正确性。\n\n' +
         '**共同的模式是：宿主的质控系统在尽职地按规矩办事，而你的目标恰好被它判定为「不合规」。**\n\n' +
         '看到「为什么要敲掉某个看起来有用的东西」，先问一句：**它在保护什么？而我要的是不是正好被它当成了错误？**',
      takeaway: '编辑域只认「比正确的小就销毁」。它在保护你不想要的那种正确性——跟敲掉 Lon、敲掉 trxB 是同一个模式。'
    },
    {
      q: '为什么说 aaRS 才是遗传密码「真正的执行者」？',
      a: '**这是理解整个第 8 讲的逻辑起点，值得停下来想清楚。**\n\n' +
         '问一个问题：**密码子和氨基酸的对应关系，物理上写在哪里？**\n\n' +
         '**不在 mRNA 里**——mRNA 只是一串碱基。\n\n' +
         '**也不在核糖体里。**核糖体做的事是：让 tRNA 的**反密码子**跟 mRNA 的**密码子**配上对，然后把这条 tRNA 上挂着的氨基酸接到肽链上。\n\n' +
         '**关键是：核糖体根本不检查这条 tRNA 上挂的是哪个氨基酸。**它只管配对是不是对上了。你给它一条反密码子是 UAC、但挂着完全错误的氨基酸的 tRNA，它照装不误。\n\n' +
         '**所以「哪个反密码子配哪个氨基酸」这条规则，是由 aaRS 决定的——就在氨酰化那一步。**\n\n' +
         '**遗传密码不是一本写在某处的字典，它是 aaRS 这一组酶的行为的总和。**\n\n' +
         '**于是第 8 讲的整个思路就自动出来了：要改写密码，就改这一步。**\n\n' +
         '**加一对新的**（正交 aaRS/tRNA 对，第 3-9 节）；\n\n' +
         '**空出一个密码子给它用**（琥珀抑制 3-10、四联密码子 3-11、密码子压缩 3-12）；\n\n' +
         '**或者干脆绕开 aaRS**，用核酶自己给 tRNA 上料（flexizyme，第 3-13 节）。\n\n' +
         '**四条路，全部是在动同一步。**',
      takeaway: '核糖体只管反密码子配对，不检查挂的是什么氨基酸。所以密码表其实写在 aaRS 的行为里——改它就是改密码。'
    }
  ],
  points: [
    { term: 'The reaction', en: 'Aminoacylation of tRNA is a very specific, ATP-dependent reaction.', cn: 'tRNA 的氨酰化是一个高度特异、依赖 ATP 的反应。' },
    { term: 'Two classes', en: 'aaRSs fall into two classes, each serving approximately half of the amino acids, where the activation sites have distinct structural properties.', cn: 'aaRS 分为两类，各服务约一半的氨基酸，两类的活化位点具有不同的结构特征。' },
    { term: 'Three domains', en: 'An anticodon recognition domain, a catalytic domain, and an editing domain.', cn: '反密码子识别域、催化域、编辑域。' },
    { term: 'The slide\'s own summary', en: 'aaRSs channel the chemistry toward the right substrate.', cn: 'aaRS 把化学反应导向正确的底物。' },
    { term: 'The preview of Part II', en: 'To introduce non-canonical amino acids, the genetic code rule needs to be broken and some codons reassigned. Almost 200 ncAAs have been incorporated into proteins this way.', cn: '要引入非天然氨基酸，就必须打破遗传密码的规则、重新分配某些密码子。已经有近 200 种非天然氨基酸通过这种方式被装进蛋白里。' }
  ],
  beyondPoints: [
    { term: 'The discrimination problem', en: 'The worst case is isoleucine versus valine, which differ by a single methylene group. The binding-energy difference available from one CH2 is only about 1 kcal/mol, which by thermodynamics alone would give an error rate of roughly 1 in 5. The observed error rate is about 1 in 10,000, so binding affinity alone cannot explain the gap.', cn: '最难的情况是异亮氨酸和缬氨酸，它们只差一个亚甲基。一个 CH2 能提供的结合能差别只有约 1 kcal/mol，单靠热力学错误率会高达约 1/5。而实际观测到的错误率约为 1/10000，所以光靠结合亲和力解释不了这个差距。' },
    { term: 'Sieve one — too big to fit', en: 'The catalytic or activation site is sized so that anything larger than the correct amino acid is sterically excluded. Ile-RS rejects anything bigger than isoleucine. But smaller amino acids such as valine still fit and get mistakenly activated.', cn: '催化（活化）位点的尺寸设计成把比正确氨基酸大的一律在空间上排除。Ile-RS 会拒绝任何比异亮氨酸大的东西。但更小的氨基酸（如缬氨酸）仍然放得进去，会被错误地活化。' },
    { term: 'Sieve two — small enough to enter', en: 'A separate site, physically distant from the catalytic site, is sized to admit only amino acids smaller than the correct one. Correct Ile-tRNA cannot enter it; incorrect Val-tRNA can, and is hydrolysed.', cn: '另一个与催化位点在空间上分开的位点，其尺寸只允许比正确氨基酸更小的进入。正确的 Ile-tRNA 进不去；错误的 Val-tRNA 进得去，并被水解掉。' },
    { term: 'Multiplying the sieves', en: 'Roughly 1 in 100 times 1 in 100 gives 1 in 10,000 — which is the observed fidelity. So the three domains map onto three jobs: anticodon recognition picks the right tRNA, the catalytic domain is sieve one, and the editing domain is sieve two.', cn: '大约 1/100 乘以 1/100 得到 1/10000——正好是观测到的精度。所以三个结构域对应三项工作：反密码子识别域挑对 tRNA，催化域是第一道筛，编辑域是第二道筛。' },
    { term: 'Why this matters for Part II', en: 'Orthogonal synthetases often need their editing domain modified or deleted, precisely because that domain would treat the non-canonical amino acid you are trying to install as an error and hydrolyse it.', cn: '正交合成酶往往需要改造甚至删除编辑域，正是因为那个结构域会把你想装进去的非天然氨基酸当成「错误」水解掉。' }
  ],
  terms: [
    { en: 'Aminoacyl-tRNA synthetase (aaRS)', cn: '氨酰-tRNA 合成酶', def_en: 'The enzyme that attaches an amino acid to its cognate tRNA in an ATP-dependent reaction. Has anticodon recognition, catalytic and editing domains.', def_cn: '在依赖 ATP 的反应中把氨基酸接到其同源 tRNA 上的酶。包含反密码子识别域、催化域和编辑域。' },
    { en: 'Double sieve', cn: '双筛机制', def_en: 'Two-stage proofreading in which the catalytic site excludes larger amino acids and a separate editing site admits and hydrolyses smaller ones. Multiplying the two gives the observed fidelity.', def_cn: '两级校对机制：催化位点排除较大的氨基酸，另一个独立的编辑位点则接纳并水解较小的。两者相乘得到观测到的精度。' },
    { en: 'Editing domain', cn: '编辑域', def_en: 'The site that hydrolyses mischarged tRNA. It must often be removed when engineering an orthogonal synthetase, since it would destroy the intended ncAA as an error.', def_cn: '水解错误装载的 tRNA 的位点。改造正交合成酶时往往必须去掉它，否则它会把想要的非天然氨基酸当作错误销毁。' },
    { en: 'Identity elements', cn: '识别元件', def_en: 'The features of a tRNA that its cognate synthetase recognises. Their conservation between related species is why orthogonal pairs must come from distant organisms.', def_cn: 'tRNA 上被其同源合成酶识别的特征。它们在近缘物种间的保守性，正是正交对必须来自远缘生物的原因。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can binding affinity alone not explain the fidelity of an aminoacyl-tRNA synthetase?',
      q_cn: '为什么单靠结合亲和力解释不了氨酰-tRNA 合成酶的精度？',
      options: ['The amino acids do not bind the synthetase active site at all', 'One CH2 group is worth about 1 kcal/mol, far too little for 1 in 10,000', 'The synthetase binds valine more tightly than it binds isoleucine', 'All tRNAs are chemically identical apart from the anticodon'],
      answer: 1,
      why_en: 'Isoleucine and valine differ by a single methylene group, which provides far too little binding energy to account for the observed accuracy. The gap is closed by proofreading, not by binding.',
      why_cn: '异亮氨酸和缬氨酸只差一个亚甲基，它提供的结合能远不足以解释观测到的准确度。这个差距是靠校对而不是靠结合来弥合的。' },
    { type: 'mcq',
      q_en: 'How does the second sieve work?',
      q_cn: '第二道筛子是怎么工作的？',
      options: ['It rejects any amino acid larger than the correct one before it can enter the active site', 'A separate editing site admits smaller amino acids and hydrolyses them', 'It checks the anticodon a second time before release', 'It consumes a second ATP to check the charged product'],
      answer: 1,
      optionNotes: {
        0: { en: 'That is sieve one, the catalytic site, described accurately but attached to the wrong sieve. The point of having a second sieve is that it must catch a different class of error — the amino acids smaller than the correct one, which fit the catalytic pocket perfectly comfortably.', cn: '这说的是第一个筛子（催化位点），描述本身没错，只是安到了第二个筛子头上。设第二个筛子的意义就在于它要抓的是另一类错误——比正确氨基酸更小、因而在催化口袋里待得很舒服的那些。' }
      },
      why_en: 'Sieve one, the catalytic site, excludes anything larger. Sieve two, the editing site, catches the smaller amino acids that slipped through and destroys them. Multiplying roughly 1 in 100 by 1 in 100 gives the observed 1 in 10,000.',
      why_cn: '第一道筛（催化位点）排除比正确氨基酸大的。第二道筛（编辑位点）抓住漏过去的较小氨基酸并销毁它们。大约 1/100 乘 1/100 得到观测到的 1/10000。' },
    { type: 'mcq',
      q_en: 'Which domain must often be removed when engineering an orthogonal synthetase, and why?',
      q_cn: '改造正交合成酶时通常必须去掉哪个结构域？为什么？',
      options: ['The anticodon recognition domain, because the synthetase must now read a different codon', 'The editing domain, because it would hydrolyse the intended ncAA as an error', 'The catalytic domain, because its strict specificity would exclude the ncAA', 'None of them, the wild-type enzyme works as it is'],
      answer: 1,
      optionNotes: {
        0: { en: 'The codon is read by the tRNA anticodon, not by the synthetase. Moving to an amber codon means changing the anticodon of the orthogonal tRNA; on the synthetase side the problem is the amino acid, which is why it is the editing domain that has to go.', cn: '读密码子的是 tRNA 的反密码子，不是 synthetase。改用 amber codon 时，你改的是那个正交 tRNA 的反密码子；synthetase 这一侧要解决的是氨基酸，所以要动的是编辑域（editing domain）。' }
      },
      why_en: 'The editing domain exists to destroy anything that is not the correct amino acid. A non-canonical amino acid is, from its point of view, exactly such an error — so the proofreading that gives natural fidelity actively defeats the engineering goal.',
      why_cn: '编辑域的存在就是为了销毁一切不是正确氨基酸的东西。而从它的角度看，非天然氨基酸恰恰就是这样一个「错误」——所以赋予天然高精度的校对机制，正好在破坏你的改造目标。' },
    { type: 'short',
      q_en: 'Why does an aaRS need three domains? Explain the double sieve.',
      q_cn: '为什么 aaRS 需要三个结构域？解释双筛机制。',
      accept: ['anticodon', 'catalytic', 'editing', 'too big', 'smaller', '10,000'],
      answer_en: 'Because it has three separate jobs and they map onto the three domains. The anticodon recognition domain picks the right tRNA. The catalytic domain is the first sieve, and it works on a too-big-to-fit principle: the activation site is sized so that anything larger than the correct amino acid is sterically excluded. But smaller amino acids still fit, which is the problem — isoleucine and valine differ by only a single methylene group, worth about one kilocalorie per mole, which by binding energy alone would give an error rate of about one in five. So the editing domain provides a second sieve on the opposite principle, small-enough-to-enter: a physically separate site sized to admit only amino acids smaller than the correct one, which then hydrolyses them. Correct isoleucyl-tRNA cannot enter it; mischarged valyl-tRNA can, and is destroyed. Multiply roughly one in a hundred by one in a hundred and you get one in ten thousand, which is the observed fidelity.',
      answer_cn: '因为它有三项独立的工作，正好对应三个结构域。反密码子识别域负责挑对 tRNA。催化域是第一道筛，遵循「大了进不来」的原则：活化位点的尺寸使得任何比正确氨基酸大的都被空间排除。但更小的仍然放得进去，这就是问题所在——异亮氨酸和缬氨酸只差一个亚甲基，约合 1 kcal/mol，单靠结合能错误率会高达约 1/5。所以编辑域提供了第二道筛，遵循相反的原则「小了才进得来」：一个在空间上分开的位点，只允许比正确氨基酸更小的进入，然后把它们水解掉。正确的异亮氨酰-tRNA 进不去；误装的缬氨酰-tRNA 进得去，并被销毁。大约 1/100 乘以 1/100 得到 1/10000，正是观测到的精度。'
    }
  ],
  oral: {
    q_en: 'Why is an aminoacyl-tRNA synthetase such a complex protein for what sounds like a simple job?',
    q_cn: '氨酰-tRNA 合成酶的工作听起来很简单，为什么它是这么复杂的蛋白？',
    model_en: 'Because the job is not simple at all — it is a discrimination problem at the edge of what chemistry allows. Aminoacylation itself is a very specific, ATP-dependent reaction, and the synthetases come in two classes, each serving about half of the amino acids, with activation sites of distinct structural character. Each enzyme has three domains: anticodon recognition, catalytic, and editing. The reason for that architecture is fidelity. Consider the hardest case, isoleucine against valine: they differ by a single methylene group. The binding energy available from one CH2 is about one kilocalorie per mole, which by thermodynamics alone predicts an error rate of roughly one in five. The rate actually observed is about one in ten thousand. Binding affinity cannot close that gap, so the enzyme uses two sieves in series. The first sieve is the catalytic site, working on a too-big-to-fit principle: it is sized so anything larger than the correct amino acid is sterically excluded, so isoleucyl-tRNA synthetase rejects everything bigger than isoleucine. But smaller residues, valine included, still fit and get mistakenly activated. The second sieve is the editing site, a physically separate site working on the opposite principle, small-enough-to-enter: it admits only amino acids smaller than the correct one and hydrolyses them. Correct isoleucyl-tRNA cannot enter; mischarged valyl-tRNA can, and is destroyed. Multiply about one in a hundred by about one in a hundred and you arrive at one in ten thousand. So the three domains map cleanly onto three jobs — pick the right tRNA, activate the right amino acid, destroy the mistakes. And this has a direct consequence for the second half of the lecture: when you engineer an orthogonal synthetase to accept a non-canonical amino acid, you very often have to remove or modify the editing domain, because from its point of view your intended ncAA is exactly the kind of error it exists to destroy.',
    checklist: ['Aminoacylation is a very specific, ATP-dependent reaction', 'Two classes, each serving about half the amino acids', 'Three domains: anticodon recognition, catalytic, editing', 'The problem: Ile vs Val differ by one CH2', 'One CH2 gives ~1 kcal/mol, predicting ~1 error in 5', 'Observed error rate is ~1 in 10,000 — binding alone cannot explain it', 'Sieve 1, catalytic site: too big to fit, excludes larger residues', 'Smaller residues still slip through and get activated', 'Sieve 2, editing site: small enough to enter, then hydrolysed', '1/100 x 1/100 = 1/10,000, the observed fidelity', 'Consequence: orthogonal synthetases often need the editing domain removed']
  }
},

{
  id: '3-4',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.4',
  enTitle: 'Energy regeneration',
  cnTitle: '能量再生',
  slides: 'L7 s.15–16',
  coverage: 'full',
  coverageNote: 'The regeneration systems are on the slides, and the slide heading "to recycle inorganic phosphate" gives away the answer to the deck\'s third snap-quiz question. The full three-part reason is beyond the slides, and it is the reasoning that earns the point.',
  summary: {
    en: 'ATP has to be regenerated rather than simply added in excess, and the reason is about the product rather than the substrate. Every ATP hydrolysed releases inorganic phosphate, which chelates magnesium — and magnesium is essential for ribosome assembly and function. Regeneration runs the phosphate back onto ADP, keeping ATP high and phosphate low at once. It is done with creatine phosphate, PEP, or more cheaply with a whole glycolytic pathway.',
    cn: 'ATP 必须再生而不能一次性大量加入，原因不在底物而在产物。每水解一个 ATP 都会释放无机磷酸，而磷酸会螯合镁离子——镁离子对核糖体的组装和功能是必需的。再生系统把磷酸装回 ADP 上，同时维持高 ATP 和低磷酸。做法是用磷酸肌酸、PEP，或者更便宜地用一整套糖酵解途径。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.15', src: 'img/figures/L7_s15_1.webp' },
    { slide: 'L7 s.16', src: 'img/figures/L7_s16_1.webp' },
    { slide: 'L7 s.16', src: 'img/figures/L7_s16_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '问题**不是 ATP 不够，是用完 ATP 的废物出不去**：每水解一个 ATP 放出一个无机磷酸，而**磷酸螯合镁**，镁一少核糖体就散架。\n\n' +
            '再生系统的意义是**同时维持高 ATP 和低磷酸**。',
  skipIt: '磷酸肌酸 / PEP / 糖酵解三条路线的成本比较，记个方向就行。**第 7–8 讲没有 RECAP 可引**，这是判断——但这一节不能跳：**老师那张重复了三次的「CFPS key components」路线图上，三样之一就是 energy regeneration**。',
  explain: [
    {
      q: '为什么不能干脆「一次多加点 ATP」？',
      a: '**三条原因叠在一起，而且它们互相独立——堵住任何一条都不够。**\n\n' +
         '**一、磷酸毒化反应（这一条最要命）。**\n\n' +
         '每水解一个 ATP，就放出一个无机磷酸。**磷酸螯合镁离子**，而**镁对核糖体是结构性必需的**（见下一条）。磷酸越积越多，游离镁越来越少，翻译停摆。严重时还会直接析出磷酸镁沉淀。\n\n' +
         '**二、产物抑制。**\n\n' +
         'ADP、AMP 和磷酸堆积起来，会改变质量作用比，**直接抑制那些需要 ATP 的酶**。这跟磷酸螯合镁是两回事，是另一条独立的路。\n\n' +
         '**三、离子强度。**\n\n' +
         'ATP 是一个**高电荷分子，以盐的形式加进去**。你要是一次加够整个反应所需的量，**光是离子强度就足以破坏核糖体的功能**——还没等它被用掉呢。\n\n' +
         '**一句话总结：在活细胞里，磷酸会被代谢掉、离子会被泵出去；在试管里没有清道夫，磷酸只会一直累积，直到把镁剥光、核糖体散架。**\n\n' +
         '**所以再生系统解决的不是「供给」，是「排废」。**它把磷酸装回 ADP 上，**一个动作同时压住三个问题**。',
      takeaway: '磷酸螯合镁、产物抑制、离子强度——三条独立的路。再生解决的是排废，不是供给。'
    },
    {
      q: '镁为什么这么关键？为什么「磷酸螯合镁」等于在拆核糖体？',
      a: '**因为核糖体是一台巨大的、带满负电的 RNA 机器，而镁是把它拉在一起的东西。**\n\n' +
         '数一下电荷：核糖体里有约 **4600 个核苷酸**，而每个核苷酸的磷酸骨架都带一个负电。**这是几千个同种电荷挤在一个 20–30 纳米的球里。**\n\n' +
         '**同种电荷互相排斥。**光靠 RNA 自己，这个结构既折不起来，大小亚基也贴不到一起。\n\n' +
         '**镁离子（Mg²⁺，二价正电）的作用就是屏蔽这些负电荷、把结构拉住。**它让 RNA 链能够紧密折叠、让两个亚基能够结合、也稳定 tRNA 在核糖体上的结合。\n\n' +
         '**所以「磷酸螯合镁」不是一个化学副作用——它是在拆核糖体。**\n\n' +
         '游离镁一降到某个水平以下，**大小亚基就分开了**，翻译整个停下来。而且这个过程是渐进的：你会看到反应「越跑越慢，然后停住」，而不是突然失败。\n\n' +
         '**实用推论：CFPS 反应对镁浓度极其敏感，而且这个最优浓度需要针对每个体系滴定。**\n\n' +
         '太低核糖体散架，太高又会影响翻译的保真度和 tRNA 的选择性。**这是这一类反应里最常需要优化的一个参数**，而现在你知道为什么了。',
      takeaway: '核糖体是几千个负电挤在一起的 RNA 机器，靠镁屏蔽电荷把结构拉住。镁一少，大小亚基就分开。'
    },
    {
      q: '用整条糖酵解通路代替磷酸肌酸，到底便宜在哪？',
      a: '**因为磷酸肌酸和 PEP 是化学计量消耗的——你想产多少 ATP，就得加多少它们。**\n\n' +
         '这两个都是「高能磷酸键载体」：一个分子交出一个磷酸，就用完了。所以**要维持一个长反应，你得按摩尔数把它们加够**。而这类试剂很贵。\n\n' +
         '**糖酵解体系换了个思路：用葡萄糖、麦芽糖或者淀粉当起点。**\n\n' +
         '一分子葡萄糖走完糖酵解能净产 2 个 ATP，而**糖便宜到可以忽略成本**。\n\n' +
         '**而最妙的一点是：粗提物里本来就带着全套糖酵解酶。**\n\n' +
         '你不需要额外加任何酶——细胞裂解时它们就在那儿了。**这正好是第 3-1 节说的「拿现成的」那条优势的一个具体兑现。**\n\n' +
         '**代价也很具体：**\n\n' +
         '反应更复杂，变量更多；\n\n' +
         '会产生**乳酸和有机酸**等副产物，**pH 会往下漂**，所以需要更强的缓冲。\n\n' +
         '**还有一条限制值得单独记：这条路只在粗提物里成立。**\n\n' +
         'PURE 系统里没有糖酵解酶——你要用它，就得把那十几个酶一个个纯化了加进去，**那就完全不便宜了**。\n\n' +
         '**所以这又是一次 top-down 和 bottom-up 的取舍**：粗提物的「不知道里面有什么」，在这里恰好变成了「里面什么都有，白送」。',
      takeaway: '磷酸肌酸按摩尔数消耗且贵，糖便宜；而粗提物白送全套糖酵解酶。但 PURE 里没有，所以这条路只对粗提物成立。'
    }
  ],
  points: [
    { term: 'The slide heading', en: 'The purpose is stated on the slide itself — to recycle inorganic phosphate.', cn: '幻灯片标题本身就给出了目的——回收无机磷酸。' },
    { term: 'How it is done', en: 'Through a compound carrying a high-energy phosphate bond.', cn: '通过一种带有高能磷酸键的化合物。' },
    { term: 'Creatine phosphate', en: 'With creatine kinase. One of the two most common systems.', cn: '配合肌酸激酶。两种最常用体系之一。' },
    { term: 'Phosphoenolpyruvate', en: 'PEP with pyruvate kinase. The other most common system.', cn: 'PEP 配合丙酮酸激酶。另一种最常用的体系。' },
    { term: 'Whole pathways', en: 'Entire energy-generating pathways such as glycolysis can be used instead, as cheaper alternatives.', cn: '也可以改用完整的产能途径，例如糖酵解，作为更便宜的替代方案。' }
  ],
  beyondPoints: [
    { term: 'Reason one — phosphate poisons the reaction', en: 'Every ATP hydrolysed releases inorganic phosphate. Phosphate chelates magnesium, and magnesium is essential for ribosome assembly and function — it holds the subunits together and stabilises tRNA binding. As phosphate builds up, free magnesium falls and translation stops. The phosphate can also precipitate as magnesium phosphate.', cn: '每水解一个 ATP 都释放无机磷酸。磷酸会螯合镁离子，而镁离子对核糖体的组装和功能是必需的——它把亚基维系在一起并稳定 tRNA 的结合。随着磷酸积累，游离镁离子下降，翻译就停止了。磷酸还可能以磷酸镁的形式沉淀出来。' },
    { term: 'Reason two — product inhibition', en: 'Accumulating ADP, AMP and phosphate shift the mass-action ratio and directly inhibit the enzymes that need ATP.', cn: '积累的 ADP、AMP 和磷酸会改变质量作用比，并直接抑制那些需要 ATP 的酶。' },
    { term: 'Reason three — ionic strength', en: 'ATP is a highly charged molecule added as a salt. Adding enough of it for a long reaction would raise the ionic strength to levels that disrupt ribosome function on its own.', cn: 'ATP 是高度带电的分子，以盐的形式加入。为一个长时间反应加足够多的 ATP，光是离子强度的升高就足以破坏核糖体的功能。' },
    { term: 'What regeneration solves', en: 'All three at once, by keeping ATP high and phosphate low simultaneously — continuously running the phosphate back onto ADP.', cn: '一次解决全部三个问题：同时维持高 ATP 和低磷酸——持续地把磷酸装回 ADP 上。' },
    { term: 'The one-sentence version', en: 'The problem is not that there is too little ATP; it is that the waste from using it cannot get out. In a living cell phosphate is metabolised away and ions are pumped out, but in a tube there is no scavenger, so phosphate only accumulates until it strips the magnesium and the ribosome falls apart.', cn: '问题不在「ATP 不够」，而在「用完之后的垃圾出不去」。活细胞里磷酸会被代谢掉、离子会被泵出去；试管里没有清道夫，无机磷酸只会越积越多，把镁离子螯合走，核糖体就散架了。' },
    { term: 'Why glycolysis-based systems are cheaper', en: 'Creatine phosphate and PEP are consumed stoichiometrically — you must add as much as the ATP you want to make, and those reagents are expensive. A glycolysis-based system uses glucose, maltose or starch instead, and the crude extract already contains the full set of glycolytic enzymes to convert it. Pennies of sugar replace hundreds of pounds of creatine phosphate. The cost is a more complex reaction and by-products such as lactate and organic acids that drift the pH, so stronger buffering is needed.', cn: '磷酸肌酸和 PEP 是化学计量消耗的——你要产多少 ATP 就得加多少，而这些试剂很贵。基于糖酵解的体系改用葡萄糖、麦芽糖或淀粉，而粗提物里本来就带着全套糖酵解酶来转化它。几分钱的糖代替几百块的磷酸肌酸。代价是反应体系更复杂，乳酸等有机酸副产物会让 pH 漂移，所以需要更强的缓冲。' }
  ],
  terms: [
    { en: 'Energy regeneration', cn: '能量再生', def_en: 'Continuously recycling ADP back to ATP while consuming the released phosphate, so that both ATP stays high and phosphate stays low.', def_cn: '持续把 ADP 循环回 ATP，同时消耗掉释放出的磷酸，使 ATP 保持高浓度而磷酸保持低浓度。' },
    { en: 'Inorganic phosphate (Pi)', cn: '无机磷酸', def_en: 'The product of ATP hydrolysis. In a closed tube it accumulates, chelates magnesium and stops translation — the reason regeneration is necessary.', def_cn: 'ATP 水解的产物。在封闭的试管里它不断积累、螯合镁离子并终止翻译——这正是必须做能量再生的原因。' },
    { en: 'Creatine phosphate', cn: '磷酸肌酸', def_en: 'A high-energy phosphate donor used with creatine kinase to regenerate ATP. Effective but consumed stoichiometrically and expensive.', def_cn: '与肌酸激酶配合用于再生 ATP 的高能磷酸供体。有效，但按化学计量消耗且价格昂贵。' },
    { en: 'Phosphoenolpyruvate (PEP)', cn: '磷酸烯醇式丙酮酸', def_en: 'The other common high-energy phosphate donor, used with pyruvate kinase.', def_cn: '另一种常用的高能磷酸供体，与丙酮酸激酶配合使用。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why must ATP be regenerated rather than simply added in excess?',
      q_cn: '为什么 ATP 必须再生而不能直接大量加入？',
      options: ['ATP hydrolyses spontaneously in water too fast to keep up', 'Accumulating phosphate chelates magnesium, which the ribosome needs', 'ATP itself inhibits the ribosome when it is present in excess', 'ATP cannot be dissolved at anything like the concentration a whole reaction needs'],
      answer: 1,
      why_en: 'The problem is the product, not the substrate. Phosphate builds up, strips free magnesium, and the ribosome falls apart — in a tube there is no metabolism to clear it away as there would be in a cell.',
      why_cn: '问题出在产物而不是底物。磷酸不断积累、夺走游离镁离子，核糖体就散架了——试管里不像细胞那样有代谢过程把它清走。' },
    { type: 'mcq',
      q_en: 'Besides phosphate accumulation, what other problem does adding excess ATP create?',
      q_cn: '除了磷酸积累，大量加入 ATP 还会造成什么问题？',
      options: ['It drops the reaction pH to around 2 within minutes', 'ATP is a highly charged salt, so ionic strength rises too high', 'It unfolds the tRNA so it can no longer be charged', 'It strips the affinity tag off the finished protein'],
      answer: 1,
      why_en: 'Three problems compound: phosphate chelating magnesium, product inhibition from accumulating ADP and AMP, and the raw ionic strength of adding that much charged salt.',
      why_cn: '三个问题叠加：磷酸螯合镁离子、积累的 ADP 和 AMP 造成产物抑制，以及加入这么多带电盐本身带来的离子强度。' },
    { type: 'mcq',
      q_en: 'Why is a glycolysis-based energy system cheaper?',
      q_cn: '为什么基于糖酵解的供能体系更便宜？',
      options: ['It needs no enzymes at all, only the sugar substrate', 'It runs on glucose instead of stoichiometric creatine phosphate', 'It produces no acidic by-products, so the pH never drifts during a long run', 'It runs without needing any magnesium in the reaction'],
      answer: 1,
      optionNotes: {
        0: { en: 'Glycolysis takes a dozen enzymes; what makes it cheap is that a crude extract already contains all of them for free. That is also why this route only exists for crude extract — in a PURE system you would have to purify and add every one of those enzymes yourself.', cn: '糖酵解需要十几个酶，它便宜的原因是粗提物里本来就白送了这一整套。这也是为什么这条路只对粗提物成立——在 PURE 体系里，你得把那十几个酶一个个纯化好再加进去。' }
      },
      why_en: 'Creatine phosphate and PEP must be supplied in proportion to the ATP you want, and they are expensive. Crude extract already contains the glycolytic enzymes, so cheap sugar can be used instead — at the cost of pH drift from organic acid by-products.',
      why_cn: '磷酸肌酸和 PEP 必须按你想产的 ATP 量成比例供应，而且很贵。粗提物本来就含有糖酵解酶，所以可以改用便宜的糖——代价是有机酸副产物会引起 pH 漂移。' },
    { type: 'short',
      q_en: 'Explain in one sentence why the problem is the waste rather than the fuel, then give the mechanism.',
      q_cn: '用一句话说明为什么问题出在废物而不是燃料，然后给出机制。',
      accept: ['phosphate', 'magnesium', 'chelate', 'no scavenger', 'ribosome'],
      answer_en: 'The problem is not that there is too little ATP but that the waste from using it cannot get out. In a living cell, phosphate is metabolised away and ions are pumped out; in a closed tube there is no scavenger. So the mechanism is this: every ATP hydrolysed releases inorganic phosphate, phosphate chelates magnesium, and magnesium is essential to the ribosome — it holds the subunits together and stabilises tRNA binding. As phosphate accumulates, free magnesium falls and translation stops, and the phosphate may even precipitate as magnesium phosphate. Two further effects compound it: accumulating ADP and AMP cause product inhibition, and the sheer ionic strength of adding that much charged ATP salt would itself disrupt the ribosome. Regeneration solves all three simultaneously, because running the phosphate back onto ADP keeps ATP high and phosphate low at the same time.',
      answer_cn: '问题不是 ATP 太少，而是用完之后的废物出不去。活细胞里磷酸会被代谢掉、离子被泵出去；封闭的试管里没有清道夫。机制是这样的：每水解一个 ATP 就释放一个无机磷酸，磷酸螯合镁离子，而镁离子对核糖体是必需的——它把亚基维系在一起并稳定 tRNA 的结合。随着磷酸积累，游离镁离子下降，翻译停止，磷酸甚至可能以磷酸镁沉淀出来。还有两个效应叠加：积累的 ADP 和 AMP 造成产物抑制，而加入那么多带电的 ATP 盐，光是离子强度本身就会破坏核糖体。能量再生一次解决全部三个问题，因为把磷酸装回 ADP 上，就同时做到了高 ATP 和低磷酸。'
    }
  ],
  oral: {
    q_en: 'Why does a cell-free reaction need an energy regeneration system?',
    q_cn: '为什么无细胞反应需要能量再生系统？',
    model_en: 'The obvious question is why you cannot simply add more ATP, and the answer is that the problem is the product rather than the substrate — the waste from using ATP cannot get out. In a living cell phosphate is metabolised away and ions are pumped out, but a tube has no scavenger. There are three linked reasons. First and most important, every ATP hydrolysed releases inorganic phosphate, and phosphate chelates magnesium. Magnesium is essential for the ribosome — it holds the subunits together and stabilises tRNA binding — so as phosphate builds up, free magnesium falls and translation simply stops. The phosphate can also precipitate out as magnesium phosphate. Second, accumulating ADP and AMP together with the phosphate shift the mass-action ratio and directly inhibit the enzymes that need ATP, which is straightforward product inhibition. Third, ATP is a highly charged molecule added as a salt, so putting in enough for a long reaction would raise the ionic strength to levels that disrupt ribosome function on its own. Regeneration solves all three at once, because continuously running the phosphate back onto ADP keeps ATP high and phosphate low simultaneously — the slide heading says exactly this, that the point is to recycle inorganic phosphate. In practice it is done through a compound with a high-energy phosphate bond: creatine phosphate with creatine kinase, or phosphoenolpyruvate with pyruvate kinase, are the two most common. There is also a cheaper route, which is to use a whole energy-generating pathway such as glycolysis. The reason that is cheaper is that creatine phosphate and PEP are consumed stoichiometrically — you must add as much as the ATP you want — and they are expensive reagents, whereas a crude extract already contains the full glycolytic enzyme set, so you can feed it glucose or maltose or starch instead. Pennies of sugar replace a very expensive phosphate donor. The cost is a more complex reaction with by-products like lactate that drift the pH, so you need stronger buffering.',
    checklist: ['Cannot just add more ATP — the problem is the product, not the substrate', 'Reason 1: phosphate chelates magnesium, which the ribosome needs', 'Magnesium holds subunits together and stabilises tRNA binding', 'Phosphate can also precipitate as magnesium phosphate', 'Reason 2: accumulating ADP/AMP cause product inhibition', 'Reason 3: ATP is a charged salt, so ionic strength rises', 'Regeneration keeps ATP high AND phosphate low at once', 'Slide heading says it: to recycle inorganic phosphate', 'Creatine phosphate with creatine kinase; PEP with pyruvate kinase', 'Cheaper: whole glycolytic pathway on glucose, maltose or starch', 'Crude extract already has the glycolytic enzymes', 'Cost of that route: organic acid by-products drift the pH']
  }
},

{
  id: '3-5',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.5',
  enTitle: 'Crude extract systems',
  cnTitle: '粗提物体系',
  slides: 'L7 s.18–19',
  coverage: 'full',
  coverageNote: 'Slides 18 and 19 are figures, so the source reconstructs the essentials. The S30 naming convention is added because it appears constantly in the literature and is worth being able to decode.',
  summary: {
    en: 'Crude extracts are made from several source organisms, each with its own niche. E. coli S30 is the workhorse — cheap, high yield, no post-translational modifications. Wheat germ is the eukaryotic option with low background nuclease. Rabbit reticulocyte lysate is the classic for radiolabelling. Insect, HeLa and CHO lysates make eukaryotic PTMs possible. The S30 name simply means the supernatant after centrifugation at 30,000 times gravity.',
    cn: '粗提物可以来自多种生物，各有各的用武之地。大肠杆菌 S30 是主力——便宜、高产、没有翻译后修饰。麦胚是真核选项，本底核酸酶活性低。兔网织红细胞裂解液是放射性标记研究的经典体系。昆虫、HeLa 和 CHO 裂解液则能提供真核的翻译后修饰。S30 这个名字的意思就是 30000 × g 离心后的上清。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.18', src: 'img/figures/L7_s18_1.webp' },
    { slide: 'L7 s.19', src: 'img/figures/L7_s19_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**S30 的意思就是「30,000 × g 离心之后的上清」**——S = supernatant，30 = 转速。这个命名法在文献里到处都是，认得出就行。\n\n' +
            '选哪种提取物，判据还是那一条：**你要不要真核的翻译后修饰。**',
  skipIt: '各种提取物各自的优缺点清单不必逐条背。**第 7–8 讲没有 RECAP 可引**，所以这是判断——不过 **S30 这个命名法建议记**，因为你在任何一篇 CFPS 的文献方法部分都会碰到它。',
  explain: [
    {
      q: 'S30 这个名字到底怎么来的？',
      a: '**S = supernatant（上清），30 = 30,000 × g。合起来就是「30,000 × g 离心后的上清」。**\n\n' +
         '过程很朴素：把 E. coli 裂解，然后离心。\n\n' +
         '**沉下去的**：细胞碎片、膜、没裂开的完整细胞。\n\n' +
         '**留在上清里的**：可溶组分——**核糖体、翻译因子、tRNA、氨酰-tRNA 合成酶**。也就是你要的那一整套翻译机器。\n\n' +
         '**这个命名法是可以推广的：S12 就是 12,000 × g 的上清。**\n\n' +
         '**而两者的差别正好是一个 top-down 的旋钮：转速越低，沉下去的越少，留在上清里的东西越多——但也越杂。**\n\n' +
         'S12 保留了更多组分（有些是你想要的，比如某些膜相关的活性），代价是更「粗」，未知成分更多。S30 更干净，但也丢掉了一些东西。\n\n' +
         '**所以「S 多少」这个数字本身就在告诉你这份提取物有多粗。**看到 S12 和 S30 并列出现在一篇文章里，你就知道作者在权衡什么。',
      takeaway: 'S = 上清，数字 = 离心力。转速越低留下的越多也越杂——这个数字本身就标着提取物有多粗。'
    },
    {
      q: '麦胚提取物为什么特别标一句「本底核酸酶活性低」？',
      a: '**因为核酸酶是粗提物最大的隐患之一，而它直接决定你的反应能跑多久。**\n\n' +
         '回到第 3-1 节那四条坏事，第一条就是：**残留的 RNase 降解你的 mRNA 模板**。模板一没，反应就停了。\n\n' +
         '**而麦胚天生在这方面就干净。**\n\n' +
         '这一条在两种场合特别值钱：\n\n' +
         '**需要长时间反应的时候**——反应跑得越久，模板被啃掉的机会越多。低核酸酶背景意味着反应能持续更久、产量更高。\n\n' +
         '**直接用 mRNA 当模板的时候**（第 3-7 节）——这时候你已经没有 DNA 这个「可以反复转录」的后备了，mRNA 被降解掉就真的没了。\n\n' +
         '**值得注意的是这条判据的性质：它很具体、可操作。**\n\n' +
         '「真核 vs 原核」是一个笼统的分类，而「本底核酸酶低」是一个**你可以直接拿来做决定**的性质。**选提取物时，这类具体性质比分类标签有用得多。**',
      takeaway: 'RNase 吃掉 mRNA 模板是粗提物的主要死因。麦胚天生干净，所以适合长反应和直接用 mRNA。'
    },
    {
      q: '兔网织红细胞裂解液，为什么是放射性标记的经典体系？',
      a: '**因为网织红细胞是一个天然的、翻译活性极高而背景极低的来源。**\n\n' +
         '网织红细胞是**即将成熟的红细胞**，它有一个很特别的状态：\n\n' +
         '**它已经没有细胞核了**——所以几乎没有转录，也没有核相关的那一堆蛋白。\n\n' +
         '**但它装满了正在疯狂合成血红蛋白的核糖体**——翻译活性极高。\n\n' +
         '**这两条加在一起，正好是做放射性标记想要的：**\n\n' +
         '**翻译能力强** → 新合成的蛋白多，信号强。\n\n' +
         '**背景蛋白种类少**（主要就是血红蛋白）→ 你把 ³⁵S 标记的甲硫氨酸加进去，**几乎所有的放射性都进了你的新产物**，跑一张胶就能看得清清楚楚。\n\n' +
         '**如果背景里有几千种蛋白也在合成，标记就被稀释得到处都是，什么都看不出来。**\n\n' +
         '**所以「经典」不是因为它历史悠久，是因为它的生理状态恰好把信噪比调到了最好。**这也是为什么一个来自兔血的体系，能在分子生物学里用了几十年。',
      takeaway: '无核所以背景低，装满核糖体所以翻译强。两条合起来正好是放射性标记要的信噪比。'
    }
  ],
  points: [
    { term: 'E. coli S30', en: 'The workhorse — cheap, high yield, and no post-translational modifications.', cn: '主力体系——便宜、产量高、没有翻译后修饰。' },
    { term: 'Wheat germ', en: 'Eukaryotic, good for eukaryotic proteins, with low background nuclease activity.', cn: '真核体系，适合真核蛋白，本底核酸酶活性低。' },
    { term: 'Rabbit reticulocyte lysate', en: 'Eukaryotic, and the classic system for radiolabelling studies.', cn: '真核体系，是放射性标记研究的经典体系。' },
    { term: 'Insect, HeLa and CHO lysates', en: 'Eukaryotic post-translational modifications become possible.', cn: '可以实现真核的翻译后修饰。' }
  ],
  beyondPoints: [
    { term: 'Where the S30 name comes from', en: 'S30 means the supernatant after centrifugation at 30,000 times gravity. You lyse the E. coli, spin, and the debris, membranes and intact cells pellet, while the supernatant retains the soluble components — ribosomes, translation factors, tRNA and the synthetases.', cn: 'S30 = 30000 × g 离心后的上清（Supernatant）。裂解大肠杆菌后离心，细胞碎片、细胞膜和完整细胞沉下去，上清里保留核糖体、翻译因子、tRNA、aaRS 这些可溶组分。' },
    { term: 'The convention generalises', en: 'S12 is the same idea at 12,000 times gravity, retaining more components but at the cost of being cruder. The naming appears throughout the literature and is worth recognising on sight.', cn: 'S12 是同样的思路但用 12000 × g，保留更多组分但也更粗。这套命名法在文献里到处都是，值得一眼就能认出来。' }
  ],
  terms: [
    { en: 'S30 extract', cn: 'S30 提取物', def_en: 'The supernatant from lysed E. coli after centrifugation at 30,000 x g, retaining ribosomes, translation factors, tRNA and synthetases.', def_cn: '大肠杆菌裂解后经 30000 × g 离心得到的上清，保留了核糖体、翻译因子、tRNA 和合成酶。' },
    { en: 'Wheat germ extract', cn: '麦胚提取物', def_en: 'A eukaryotic cell-free system with notably low background nuclease activity, suited to eukaryotic proteins.', def_cn: '一种真核无细胞体系，本底核酸酶活性特别低，适合真核蛋白。' },
    { en: 'Rabbit reticulocyte lysate', cn: '兔网织红细胞裂解液', def_en: 'A eukaryotic cell-free system, historically the standard for radiolabelling studies.', def_cn: '一种真核无细胞体系，历史上是放射性标记研究的标准体系。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What does the S in S30 stand for?',
      q_cn: 'S30 中的 S 代表什么？',
      options: ['Soluble, the fraction left in solution after lysis', 'Supernatant, the layer above the 30,000 x g pellet', 'Synthetic, since the components are rebuilt in vitro', 'Standard, the reference formulation of the extract'],
      answer: 1,
      optionNotes: {
        0: { en: 'The confusion is between what the fraction contains and how the fraction got its name. S30 is named after the operation that produces it — the supernatant of a 30,000 x g spin — which is why there is a number in the name at all, and why S12 exists as the same idea at a gentler spin. Soluble machinery is what you end up with, not what the letter stands for.', cn: '这里混淆的是「这一层里有什么」和「这个名字是怎么来的」。S30 是按操作命名的——30,000 × g 离心之后的 supernatant，所以名字里才会带一个数字，也才会有同一思路、转速更低的 S12。可溶的翻译机器是你拿到的东西，不是 S 这个字母的意思。' }
      },
      why_en: 'Supernatant. You lyse the cells and spin at 30,000 x g; debris, membranes and intact cells pellet, and the supernatant keeps the soluble translation machinery. S12 is the same idea at 12,000 x g.',
      why_cn: '是上清（Supernatant）。裂解细胞后以 30000 × g 离心，碎片、膜和完整细胞沉下去，上清保留可溶的翻译机器。S12 是同样思路的 12000 × g 版本。' },
    { type: 'mcq',
      q_en: 'Which crude extract is noted for low background nuclease activity?',
      q_cn: '哪种粗提物以本底核酸酶活性低著称？',
      options: ['E. coli S30', 'Wheat germ', 'Rabbit reticulocyte lysate', 'CHO lysate'],
      answer: 1,
      why_en: 'Wheat germ, which matters because residual nucleases degrade your template and mRNA — one of the standard liabilities of any crude extract system.',
      why_cn: '麦胚提取物。这一点很重要，因为残留的核酸酶会降解你的模板和 mRNA——这正是所有粗提物体系的标准软肋之一。' },
    { type: 'mcq',
      q_en: 'What is the main limitation of E. coli S30 extract?',
      q_cn: '大肠杆菌 S30 提取物的主要局限是什么？',
      options: ['Lower yield of protein than a reticulocyte lysate gives', 'Higher cost per reaction than a wheat germ or CHO lysate', 'No post-translational modifications of the product', 'Inability to use linear PCR product without cloning it first'],
      answer: 2,
      optionRefs: { 3: '3-7' },
      optionNotes: {
        0: { en: 'This swaps the bacterial and the eukaryotic extracts. E. coli S30 is precisely the cheap, high-yield workhorse; low yield and high cost are what you accept when you move to wheat germ, reticulocyte or CHO lysate in order to get eukaryotic folding and modification.', cn: '这是把细菌体系和真核体系的性质对调了。E. coli S30 恰恰是便宜又高产的主力；产量低、成本高是你改用 wheat germ、reticulocyte 或 CHO lysate 去换真核折叠和修饰时才付的代价。' }
      },
      why_en: 'It is cheap and high-yielding, but being bacterial it performs no PTMs — the same limitation E. coli has as a living expression host. Eukaryotic lysates are the alternative when modifications are needed.',
      why_cn: '它便宜、产量高，但作为细菌来源的体系不做任何翻译后修饰——这和大肠杆菌作为活体表达宿主的局限是一样的。需要修饰时就改用真核裂解液。' },
    { type: 'short',
      q_en: 'You need a cell-free system for a eukaryotic protein requiring post-translational modification. What would you choose and why not S30?',
      q_cn: '你需要一个无细胞体系来做一个需要翻译后修饰的真核蛋白。你会选什么？为什么不用 S30？',
      accept: ['insect', 'HeLa', 'CHO', 'no PTM', 'eukaryotic'],
      answer_en: 'An insect cell, HeLa or CHO lysate, because those are the extracts in which eukaryotic post-translational modifications are possible. E. coli S30 is ruled out for exactly the same reason living E. coli is ruled out for a glycoprotein: it is bacterial and performs no post-translational modifications at all, so no amount of optimisation will produce them. S30 remains the workhorse whenever modifications are not needed, since it is cheap and high-yielding. Wheat germ or rabbit reticulocyte lysate would be intermediate options — both are eukaryotic, with wheat germ notable for low background nuclease activity and reticulocyte lysate being the classic radiolabelling system — but the mammalian and insect lysates are the ones specifically credited with PTM capability.',
      answer_cn: '选昆虫细胞、HeLa 或 CHO 裂解液，因为这些提取物能实现真核的翻译后修饰。排除大肠杆菌 S30 的理由和排除活体大肠杆菌做糖蛋白的理由完全一样：它来自细菌，根本不做任何翻译后修饰，再怎么优化也做不出来。在不需要修饰的场合 S30 仍然是主力，因为它便宜且高产。麦胚和兔网织红细胞裂解液是中间选项——两者都是真核的，麦胚以本底核酸酶活性低著称，网织红细胞裂解液是放射性标记的经典体系——但明确被认为具备翻译后修饰能力的是哺乳动物和昆虫裂解液。'
    }
  ],
  oral: {
    q_en: 'What crude extract systems are available, and how would you pick one?',
    q_cn: '有哪些粗提物体系可选？你会怎么挑？',
    model_en: 'There are four families in common use, and the choice follows the same logic as choosing a living expression host. E. coli S30 is the workhorse: cheap, high yield, and no post-translational modifications — which matters only if your protein needs them. Wheat germ extract is the eukaryotic option and is particularly noted for low background nuclease activity, which is useful because residual nucleases degrading your template or mRNA is one of the standard liabilities of any crude system. Rabbit reticulocyte lysate is also eukaryotic and is the classic system for radiolabelling studies. And insect cell, HeLa or CHO lysates are the ones in which eukaryotic post-translational modifications become possible, so those are what you reach for when the modification is the point. It is worth knowing where the S30 name comes from, because the convention appears constantly in the literature. S stands for supernatant, and thirty means thirty thousand times gravity: you lyse the E. coli and centrifuge, so the debris, the membranes and any intact cells pellet, while the supernatant retains the soluble components you actually want — ribosomes, translation factors, tRNA and the aminoacyl-tRNA synthetases. The same convention gives S12, spun at twelve thousand times gravity, which retains more components but is correspondingly cruder. So when you see S30 or S12 in a methods section, it is telling you exactly how hard the lysate was spun and therefore how much of the cell is still in it.',
    checklist: ['E. coli S30: the workhorse, cheap, high yield, no PTMs', 'Wheat germ: eukaryotic, low background nuclease', 'Rabbit reticulocyte lysate: eukaryotic, classic for radiolabelling', 'Insect, HeLa, CHO lysates: eukaryotic PTMs possible', 'S = supernatant; 30 = 30,000 x g', 'Lyse, spin, debris and membranes pellet', 'Supernatant keeps ribosomes, factors, tRNA, synthetases', 'S12 is the same idea at 12,000 x g — more components, cruder', 'Choice follows the same logic as picking a living host']
  }
},

{
  id: '3-6',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.6',
  enTitle: 'The PURE system',
  cnTitle: 'PURE 重构体系',
  slides: 'L7 s.20–22',
  coverage: 'full',
  coverageNote: 'The founding citation, the His-tag note and the supplement list are on the slides. Why His-tagging every component is more than a purification convenience is the beyond-the-slides point, and it is genuinely elegant. This node also answers the deck\'s fourth snap-quiz question.',
  summary: {
    en: 'The PURE system comes from Shimizu and colleagues in 2001, reconstituting translation from purified components. The original used His-tagged proteins, which turns out to be doubly clever: passing the finished reaction over Ni-NTA captures the entire translation machinery and lets the untagged product flow through, giving near-pure protein in one step. Because the system is defined, you can supplement exactly what a given protein needs — chaperones, disulfide isomerases, EF-P, emulsions.',
    cn: 'PURE 体系来自 Shimizu 等人 2001 年的工作，用纯化的组分重构翻译。原始版本使用带 His 标签的蛋白，而这一点其实一举两得：反应结束后把整个体系过一次 Ni-NTA，就能抓住全部翻译机器、让不带标签的产物流穿出来，一步得到接近纯净的蛋白。而且因为体系成分明确，你可以精确补充某个蛋白所需的东西——伴侣蛋白、二硫键异构酶、EF-P、乳化剂。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.20', src: 'img/figures/L7_s20_1.webp' },
    { slide: 'L7 s.20', src: 'img/figures/L7_s20_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '原始 PURE 的组分**全部带 His 标签**，这一手一举两得：反应完把整锅过一次 Ni-NTA，**整套翻译机器被抓在柱子上，不带标签的产物直接流穿出来**——一步拿到接近纯的蛋白。\n\n' +
            '而因为成分完全明确，你可以**精确地补上缺的那一个**。',
  skipIt: 'Shimizu 2001 的出处、以及补充成分的完整清单，不用背。**第 7–8 讲没有 RECAP 可引**，这是判断——但「成分明确 → 能定位到具体哪一步卡住 → 补上那一个」这条逻辑要记，它是重构体系最实在的价值。',
  explain: [
    {
      q: '所有组分都带 His 标签，为什么说这是「一举两得」？',
      a: '**第一得是显而易见的：三十多个组分要一个个纯化，全带 His 标签最省事。**这是本来的用途。\n\n' +
         '**第二得才是妙的，而且它是反过来用的：**\n\n' +
         '反应跑完之后，把**整锅东西过一次 Ni-NTA 柱**。\n\n' +
         '**所有翻译机器都带标签 → 全部被留在柱子上。**\n\n' +
         '**你的产物不带标签 → 直接流穿出来。**\n\n' +
         '**一步就得到接近纯的蛋白。**\n\n' +
         '**注意这里有一个全课唯一的反转：你要的东西在穿透液（FT）里，而这是好事。**\n\n' +
         '第 2-29 节讲过，看层析结果时「目标出现在 FT 里」通常意味着失败。而这里 FT 就是产物——**因为这一次被抓住的是杂质，不是目标。**这种用法叫**负向纯化（negative purification）**，思路是「抓住所有你不要的」而不是「抓住你要的」。\n\n' +
         '**它之所以只在这里可行，是因为你事先知道杂质有哪些、而且能给它们全都装上同一个把手。**\n\n' +
         '**在粗提物里这绝对做不到**——几千种宿主蛋白，你没法给它们统一贴标签。**所以这是自底向上独有的一个红利。**',
      takeaway: '反应完过镍柱，机器被抓住、产物流穿出来。这是「抓杂质」而不是「抓目标」——只有成分已知时才做得到。'
    },
    {
      q: '既然带标签这么好，为什么还要有不带标签的版本？',
      a: '**因为有一种需求正好相反：如果你的目标蛋白自己需要 His 标签来纯化呢？**\n\n' +
         '那就冲突了：反应体系里有三十多种带 His 标签的蛋白，**它们会把镍柱的结合位点占满**，而你的产物只是众多竞争者之一。你不但纯化不出来，还浪费了昂贵的树脂。\n\n' +
         '**所以两个版本各服务一种情况：**\n\n' +
         '**产物不带标签**（比如你打算用别的方式纯化、或者根本不纯化直接测活性）→ **用带标签的 PURE**，享受一步负向纯化。\n\n' +
         '**产物自己带 His 标签** → **必须用不带标签的 PURE**，否则镍柱那一步没法做。\n\n' +
         '**这个选择要在配反应之前就做出来**，因为它取决于你打算怎么纯化产物——而那是下游的事。\n\n' +
         '**这跟第 2-11 节柱上复性那条是同一类提醒：有些决定必须在很早的时候做出，而那时你要预见到很后面的一步。**',
      takeaway: '产物自己带 His 标签时，体系里的标签会抢占镍柱。所以要在配反应前就想清楚产物怎么纯化。'
    },
    {
      q: '「按需补充成分」这个能力，实际意味着什么？',
      a: '**它意味着从「只能观察」变成「可以诊断并干预」。用一个对比就清楚了。**\n\n' +
         '**在活细胞里**，你观察到的现象只有一个：**表达量低。**\n\n' +
         '然后你毫无头绪。是转录不行？折叠不行？被降解了？核糖体卡住了？**你没法逐一排除，因为你动不了单个组分**——细胞是一个你只能从外面调条件的黑箱（温度、IPTG、菌株，第 2-12 节那五个手段全都是间接的）。\n\n' +
         '**在重构体系里，你可以定位到具体哪一步卡住，然后把缺的那个补上：**\n\n' +
         '**连续的脯氨酸让核糖体停滞** → 加 **EF-P**。\n\n' +
         '**二硫键配错** → 加**二硫键异构酶**（回到第 2-11 节 GSH/GSSG 和第 2-13 节 DsbC，同一个「能反悔」的思路）。\n\n' +
         '**蛋白聚集** → 加**伴侣蛋白**（DnaK、GroE）。\n\n' +
         '**做膜蛋白** → 加**乳化剂**。\n\n' +
         '**这就是「可控性」在实践中的确切含义**——不是笼统的「更好」，是**可诊断、可干预**。\n\n' +
         '**而这正是第 2-4 节说 E. coli「被研究得透」是一条优点时，说的同一种价值**：失败的时候你能查出原因、并且有对应的对策。**PURE 把这个能力从「查手册」推进到了「直接把缺的那样加进去」。**',
      takeaway: '细胞里你只看得到「表达量低」；重构体系里你能定位到具体哪一步、补上那一个。这才是可控性的含义。'
    },
    {
      q: '为什么连续的脯氨酸需要一个专门的因子（EF-P）？',
      trace: {
        what: '**EF-P（elongation factor P，延伸因子 P）**是一个翻译辅助因子，专门负责解除核糖体在连续脯氨酸处的**停滞（stalling）**。',
        from: '脯氨酸是 20 种氨基酸里唯一的**仲胺**，主链的氮被锁在环里，让它既是差的肽基供体也是差的受体——两三个连在一起，核糖体就会卡住不走。',
        to: 'EF-P 结合在核糖体的 **E 位点和 P 位点之间**，把 P 位点上的 tRNA 稳定在能反应的几何构象上，停滞就解开了。',
        family: '它是 PURE 体系里「按需补充」的成员之一，跟伴侣蛋白（折叠出问题时加）、二硫键异构酶（二硫键配错时加）、乳化剂（做膜蛋白时加）属于同一类——细胞里看不到，只有在重构体系里才能精确诊断和补救。'
      },
      a: '**因为脯氨酸是 20 种氨基酸里唯一的仲胺——它的氮被锁在环里。**\n\n' +
         '这个性质你已经见过两次了，这是第三次：\n\n' +
         '**第 1-2-5 节**：正因为 Pro 让主链转不动，两个 Pro 就能把 spike 锁在前融合构象上。**那里它是优点。**\n\n' +
         '**第 2-25 节**：正因为它锁住主链，糖基转移酶要的构象摆不出来，所以 Asn-X-Ser/Thr 里 **X 不能是 Pro**。**那里它是禁忌。**\n\n' +
         '**这里**：氮被锁在环里，让 Pro **既是很差的肽基供体，也是很差的受体**。两三个 Pro 连在一起，**核糖体就卡住了**。**这里它是障碍。**\n\n' +
         '**同一个化学性质，三种完全不同的后果。**看到脯氨酸，先想「主链在这里转不动」，然后再看在当前场景里这意味着什么。\n\n' +
         '**EF-P 的作用**：它结合在核糖体的 **E 位点和 P 位点之间**，**把 P 位点上的 tRNA 稳定在一个能够反应的几何构象上**，从而把停滞解开。\n\n' +
         '**为什么这个例子被选进幻灯片**：因为它是「可诊断、可干预」最干净的一个案例——**症状（多聚脯氨酸处停滞）、原因（几何构象不对）、对策（加一个特定的因子）三者完全对应上**。在活细胞里你永远不会知道自己卡在了脯氨酸上。',
      takeaway: 'Pro 的氮锁在环里，供体受体都很差，连着几个就卡住核糖体。EF-P 把 P 位点 tRNA 摆正。'
    }
  ],
  points: [
    { term: 'The founding paper', en: 'Shimizu, Inoue, Tomari et al., "Cell-free translation reconstituted with purified components", Nature Biotechnology 19, 751–755 (2001).', cn: 'Shimizu、Inoue、Tomari 等，《用纯化组分重构的无细胞翻译》，Nature Biotechnology 19, 751–755（2001）。' },
    { term: 'The His-tag note', en: 'The original system used His-tagged proteins; untagged variants exist as well.', cn: '原始体系使用带 His 标签的蛋白；也有不带标签的变体。' },
    { term: 'Snap quiz — ribosomes in 20 microlitres', en: 'How many ribosomes in a 20 microlitre CFPS reaction? About 10 to the 12.', cn: '一个 20 µL 的 CFPS 反应里有多少核糖体？约 10¹² 个。' },
    { term: 'Supplement — chaperones', en: 'A DnaK or GroE mix, for folding help.', cn: 'DnaK 或 GroE 混合物，用于协助折叠。' },
    { term: 'Supplement — redox components', en: 'Reducing agents and disulfide bond isomerases, for disulfide-bonded proteins.', cn: '还原剂和二硫键异构酶，用于含二硫键的蛋白。' },
    { term: 'Supplement — EF-P', en: 'Elongation factor P, for the synthesis of proteins containing consecutive proline residues.', cn: '延伸因子 P，用于合成含连续脯氨酸残基的蛋白。' },
    { term: 'Supplement — emulsions', en: 'For membrane protein production.', cn: '用于膜蛋白的生产。' }
  ],
  beyondPoints: [
    { term: 'Why the original components were all His-tagged', en: 'The PURE components are each expressed and purified individually, and tagging them all is not only a purification convenience. After the reaction, you pass the whole mixture over a Ni-NTA column: every piece of translation machinery is captured, while your untagged product flows straight through. One step gives you nearly pure protein.', cn: 'PURE 的组分是逐个重组表达纯化的，全部加 His 标签不只是为了纯化方便。反应结束后把整个反应液过一次 Ni-NTA 柱：所有翻译机器都被抓住，而你的目标蛋白（不带标签）直接流穿出来。一步就得到几乎纯净的产物。' },
    { term: 'This is impossible in a crude extract', en: 'You cannot separate several thousand host proteins from your product that way — which is another concrete advantage of the bottom-up approach.', cn: '这在粗提物里完全做不到——你没法把几千种宿主蛋白从产物里这样分离出来。这是自底向上路线的又一个具体优势。' },
    { term: 'Why untagged variants exist', en: 'They serve the opposite need: if your target protein itself needs a His-tag for purification, you cannot have a reaction full of competing His-tagged machinery.', cn: '它们服务于相反的需求：如果你的目标蛋白本身需要带 His 标签来纯化，反应体系里就不能再有一堆带 His 标签的机器来竞争。' },
    { term: 'The 10^12 arithmetic', en: 'Ribosome concentration in a PURE reaction is around 0.1 to 2 micromolar. At 0.1 micromolar in 20 microlitres, n = 2 x 10^-12 mol, so N is about 1.2 x 10^12. A sanity check that makes it memorable: one E. coli cell holds about 70,000 ribosomes, so that is roughly 17 million cells\' worth in a single 20 microlitre drop.', cn: 'PURE 反应中核糖体浓度约 0.1–2 µM。按 0.1 µM、20 µL 计算，n = 2×10⁻¹² mol，所以 N ≈ 1.2×10¹²。一个便于记忆的核对：一个大肠杆菌细胞约有 7 万个核糖体，所以这相当于一滴 20 µL 液体里装了约 1700 万个细胞的核糖体。' },
    { term: 'Why polyproline needs its own factor', en: 'Proline is the only secondary amine among the twenty amino acids — its nitrogen is locked in a ring — making it both a poor peptidyl donor and a poor acceptor. Two or three prolines in a row stall the ribosome. EF-P binds between the E and P sites and stabilises the P-site tRNA in a productive geometry, rescuing the stall.', cn: '脯氨酸是 20 种氨基酸中唯一的仲胺——它的氮被锁在环里——所以它既是很差的肽基供体也是很差的受体。连续两三个脯氨酸会让核糖体停滞。EF-P 结合在 E 位和 P 位之间，把 P 位的 tRNA 稳定在有利的几何构型上，从而解除停滞。' },
    { term: 'What the supplement list actually demonstrates', en: 'In a living cell you only observe "low expression" and have nowhere to start. In a reconstituted system you can identify precisely which step is stalling and add the missing factor: consecutive prolines stall the ribosome so add EF-P, disulfides misfold so add an isomerase, the protein aggregates so add a chaperone. That is what controllability means in practice.', cn: '在活细胞里你只能看到「表达量低」，无从下手。在重构体系里你可以精确判断卡在哪一步，然后把缺的那个因子加进去：连续脯氨酸导致停滞就加 EF-P，二硫键折叠不对就加异构酶，蛋白聚集就加伴侣。这就是「可控性」的实际含义。' }
  ],
  terms: [
    { en: 'Elongation factor P (EF-P)', cn: '延伸因子 P', def_en: 'A factor that binds between the E and P sites and rescues ribosome stalling at consecutive proline residues by stabilising the P-site tRNA.', def_cn: '结合在 E 位和 P 位之间的因子，通过稳定 P 位 tRNA 来解除核糖体在连续脯氨酸处的停滞。' },
    { en: 'Polyproline stalling', cn: '多聚脯氨酸停滞', def_en: 'Ribosome stalling caused by two or more consecutive prolines, which are poor peptidyl donors and acceptors because proline is a secondary amine.', def_cn: '由两个或更多连续脯氨酸引起的核糖体停滞；脯氨酸是仲胺，因而既是差的肽基供体也是差的受体。' },
    { en: 'Disulfide bond isomerase', cn: '二硫键异构酶', def_en: 'An enzyme that rearranges incorrectly paired disulfide bonds, supplemented into PURE reactions for disulfide-containing targets.', def_cn: '重排错误配对二硫键的酶，为含二硫键的目标蛋白而添加到 PURE 反应中。' },
    { en: 'Reconstituted system', cn: '重构体系', def_en: 'A reaction assembled entirely from separately purified components, so its composition is fully known and every part can be varied deliberately.', def_cn: '完全由分别纯化的组分组装起来的反应体系，因而成分完全已知，每个部件都可以有意地改变。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why were the original PURE system components His-tagged?',
      q_cn: '为什么原始 PURE 体系的组分都带 His 标签？',
      options: ['To help each purified component fold correctly', 'So one Ni-NTA pass after the reaction removes the machinery', 'To raise the solubility of each component', 'To allow detection of each component by anti-His antibody'],
      answer: 1,
      optionRefs: { 2: '2-12' },
      why_en: 'It is a two-for-one design. The tags help purify each component during preparation, and then after the reaction one Ni-NTA pass removes every piece of machinery at once, leaving nearly pure product in the flow-through.',
      why_cn: '这是一举两得的设计。标签在制备时帮助纯化每个组分，而反应之后过一次 Ni-NTA 就能一次性去掉所有机器，穿透液里留下的就是几乎纯净的产物。' },
    { type: 'mcq',
      q_en: 'When would you use an untagged PURE variant instead?',
      q_cn: '什么时候改用不带标签的 PURE 变体？',
      options: ['When the reaction is scaled up to a large volume', 'When the target protein itself carries a His-tag', 'When the reaction must run at low temperature', 'When the template is a linear PCR product'],
      answer: 1,
      why_en: 'The clean-up trick only works if the product is the untagged species. If your protein needs its own His-tag, a reaction full of His-tagged machinery would compete for the resin and defeat the purpose.',
      why_cn: '那个纯化技巧只有在产物不带标签时才成立。如果你的蛋白自己需要 His 标签，反应体系里满是带 His 标签的机器就会竞争树脂，让这个设计失去意义。' },
    { type: 'mcq',
      q_en: 'What is EF-P for?',
      q_cn: 'EF-P 是干什么用的？',
      options: ['Inserting membrane proteins into a lipid bilayer', 'Rescuing ribosomes stalled at consecutive prolines', 'Forming disulfide bonds in the folded product', 'Regenerating ATP to sustain the reaction'],
      answer: 1,
      optionRefs: { 2: '2-13', 3: '3-4' },
      why_en: 'Proline is the only secondary amine among the twenty amino acids and is a poor peptidyl donor and acceptor, so two or three in a row stall the ribosome. EF-P binds between the E and P sites and restores a productive geometry.',
      why_cn: '脯氨酸是 20 种氨基酸中唯一的仲胺，既是差的肽基供体也是差的受体，所以连续两三个就会让核糖体停滞。EF-P 结合在 E 位和 P 位之间，恢复有利的几何构型。' },
    { type: 'short',
      q_en: 'What does the supplement list illustrate about the value of a defined system?',
      q_cn: '那份补充成分清单说明了成分明确的体系有什么价值？',
      accept: ['diagnose', 'which step', 'add the missing factor', 'controllab', 'cannot in a cell'],
      answer_en: 'It illustrates what controllability actually means. Inside a living cell, all you observe is that expression is low, and there is nowhere obvious to start. In a reconstituted system you can work out precisely which mechanistic step is failing and then supplement exactly the missing factor. If the target contains consecutive prolines and you are getting truncated product, the ribosome is stalling and you add EF-P. If the disulfides are pairing wrongly, you add a disulfide bond isomerase along with an appropriate redox environment. If the protein is aggregating, you add a chaperone mix such as DnaK or GroE. If it is a membrane protein, you add emulsions. Each of those is a specific diagnosis followed by a specific fix, and none of them is available to you inside a cell, where the components are neither knowable nor adjustable.',
      answer_cn: '它说明了「可控性」的实际含义。在活细胞里，你能观察到的只是表达量低，而且没有明显的下手之处。在重构体系里，你可以精确判断是哪一个机制环节出了问题，然后正好把缺的那个因子补上。如果目标蛋白含连续脯氨酸而你得到截短产物，那是核糖体停滞，加 EF-P。如果二硫键配对错了，就加二硫键异构酶并配合合适的氧化还原环境。如果蛋白聚集，就加 DnaK 或 GroE 这类伴侣混合物。如果是膜蛋白，就加乳化剂。每一条都是「具体诊断 + 具体解决」，而这些在细胞内部都做不到，因为那里的组分既不可知也不可调。'
    }
  ],
  oral: {
    q_en: 'What is the PURE system and what can you do with it that you cannot with a crude extract?',
    q_cn: '什么是 PURE 体系？它能做哪些粗提物做不到的事？',
    model_en: 'The PURE system comes from Shimizu, Inoue, Tomari and colleagues in 2001, published in Nature Biotechnology as cell-free translation reconstituted with purified components. Every part of the translation machinery is expressed and purified separately and then mixed, so the reaction contains only what was deliberately added. The slides note that the original system used His-tagged proteins, and that detail is worth dwelling on because it is doubly clever. The tags obviously help purify each component during preparation, but they also solve the downstream problem: once the reaction is finished you pass the whole mixture over a Ni-NTA column, every piece of translation machinery is captured because all of it is tagged, and your untagged product flows straight through. One step gives you nearly pure protein. That is completely impossible in a crude extract, where you cannot separate several thousand host proteins from your product. Untagged variants exist for the opposite situation, where your own target needs a His-tag and would otherwise compete with the machinery for the resin. The other thing a defined system buys is the ability to supplement precisely what a particular protein needs. Chaperones, a DnaK or GroE mix, for folding. Reducing agents and disulfide bond isomerases for disulfide-bonded proteins. Emulsions for membrane proteins. And elongation factor P for proteins containing consecutive prolines — proline is the only secondary amine among the twenty amino acids, its nitrogen locked in a ring, which makes it a poor peptidyl donor and a poor acceptor, so two or three in a row stall the ribosome, and EF-P binds between the E and P sites to restore a productive geometry. That last example is the best illustration of the whole argument: in a cell you observe only that expression is low and have nowhere to start, whereas in a reconstituted system you can diagnose exactly which step is stalling and add the missing factor. That is what controllability means in practice.',
    checklist: ['Shimizu et al. 2001, Nature Biotechnology — reconstituted from purified components', 'Original components all His-tagged', 'Tags help purify each part during preparation', 'And afterwards: one Ni-NTA pass captures all machinery', 'Untagged product flows through — near-pure in one step', 'Impossible in crude extract with thousands of host proteins', 'Untagged variants exist for when YOUR protein needs the His-tag', 'Supplements: chaperones (DnaK/GroE) for folding', 'Reducing agents and disulfide isomerases for disulfides', 'EF-P for consecutive prolines; emulsions for membrane proteins', 'Proline is the only secondary amine — poor donor and acceptor', 'The point: diagnose the failing step and supplement it, impossible in a cell']
  }
},

{
  id: '3-7',
  chapter: 3,
  lecture: 'Lecture 7',
  section: '3.7',
  enTitle: 'The template',
  cnTitle: '模板',
  slides: 'L7 s.23',
  coverage: 'full',
  coverageNote: 'The minimal construct and the note that linear DNA works are on the slide. Why linear DNA is impossible in cells but trivial here — and why that is the basis of high-throughput library screening — is beyond the slides. The optional TAG at the end is a deliberate hook for amber suppression.',
  summary: {
    en: 'The minimal template is a T7 promoter, a ribosome binding site, a start codon, the gene, a stop codon, and optionally a TAG. Circular or linear DNA both work, and mRNA can be used directly, though purity matters. The ability to use linear PCR product is a major advantage, because in a living cell exonucleases such as RecBCD degrade linear DNA rapidly, forcing you through cloning, transformation and plasmid preparation first.',
    cn: '最小模板由 T7 启动子、核糖体结合位点、起始密码子、基因、终止密码子，以及可选的一个 TAG 组成。环状和线性 DNA 都可以，也可以直接用 mRNA，但纯度很关键。能用线性 PCR 产物是一大优势，因为在活细胞里 RecBCD 这类外切核酸酶会迅速降解线性 DNA，迫使你先经过克隆、转化和质粒提取。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L7 s.23', src: 'img/figures/L7_s23_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**线性 PCR 产物可以直接当模板**——因为管子里没有 RecBCD 那类外切核酸酶。这一条砍掉了「克隆 → 转化 → 挑菌落 → 提质粒」整条链。\n\n' +
            '还要注意最小模板末尾那个**可选的 TAG**：它不是装饰，是给琥珀抑制预留的槽位。',
  skipIt: '最小模板各元件的顺序看一遍就记得，不用刻意背。**第 7–8 讲没有 RECAP 可引**，这是判断——但「为什么线性 DNA 在细胞里不行、在管子里行」这条因果建议记，它把第 1-5-3 节和这一讲连起来了。',
  explain: [
    {
      q: '为什么线性 DNA 在细胞里活不了，在试管里就可以？',
      a: '**因为细胞里有专门吃线性 DNA 的酶，而试管里没有。**\n\n' +
         '细菌里有 **RecBCD** 这类外切核酸酶，会迅速降解线性 DNA。这是细菌防御外源 DNA（比如噬菌体线性基因组）的机制之一。\n\n' +
         '**而这一条你在第 1-5-3 节已经从另一面见过了：外切酶必须有一个自由末端才能开工，所以环状质粒对它免疫。**\n\n' +
         '当时的结论是「所以细菌自己的环状质粒安全，外来的线性 DNA 被降解」。\n\n' +
         '**现在把它倒过来读：既然环状是为了躲外切酶，那么在一个没有外切酶的地方，你就不再需要环状了。**\n\n' +
         '**试管里那些核酸酶要么不在（PURE），要么可以被抑制（粗提物）。**所以 PCR 产物直接加进去就能用。\n\n' +
         '**这是一个很好的例子，说明「为什么要这么做」的答案常常在别的地方：**\n\n' +
         '你之所以要克隆进质粒、转化、挑菌落、提质粒——**整条流程存在的唯一理由，是让你的 DNA 在细胞里活下来并被复制。**\n\n' +
         '**一旦不需要细胞，这条流程的存在理由就消失了。**',
      takeaway: '环状是为了躲外切酶（第 1-5-3 节）。没有外切酶的地方就不需要环状——整条克隆流程的理由随之消失。'
    },
    {
      q: '省掉的到底是什么？对什么样的实验是质变？',
      a: '**把两条路并排写出来，差距一目了然。**\n\n' +
         '**常规路线**：设计引物 → PCR → 克隆 → 转化 → **过夜**铺板 → 挑菌落 → **过夜**培养 → miniprep → 测序（又要等）→ 才能开始表达。\n\n' +
         '**至少三个过夜，实际常常是四五天。**\n\n' +
         '**CFPS 路线**：设计引物 → PCR → **直接加进反应** → 几小时后有蛋白。\n\n' +
         '**对做一个蛋白来说，这是省几天。对一次要试很多个变体来说，这是质变。**\n\n' +
         '关键在于**并行度**：你可以在一块 96 孔板上跑 96 个 PCR，**每一个 PCR 产物直接对应一个反应孔**。中间不需要任何一步是「一个一个来」的。\n\n' +
         '而常规路线里，克隆、挑菌落、miniprep **每一步都是逐个操作的**——96 个构建体意味着 96 次挑菌、96 次抽提。\n\n' +
         '**所以 CFPS 是文库工作的天然平台**：你要比较二十个截短体哪个可溶、或者筛一批突变体的活性，这条路把「几周」变成「一天」。\n\n' +
         '**这条线在第 9 讲会正式接上**——那一讲讲的就是怎么建库和怎么筛。**能建多大的库，一部分取决于你能多快地把 DNA 变成蛋白。**',
      takeaway: '常规路线每一步都是逐个操作的，CFPS 全程可以并行。所以它是文库工作的天然平台。'
    },
    {
      q: '最小模板末尾那个「可选的 TAG」，为什么在这里出现？',
      a: '**它不是可有可无的装饰——它是为琥珀抑制预留的槽位，也就是这一讲后半段的全部内容。**\n\n' +
         '**先回顾一下你已经见过的 TAG：**\n\n' +
         '**第 1-20 节**：设计引物时 spacer 用了 `TA`，跟旁边的序列凑出 **TAG**，蛋白在 His 标签之前就被截断了。**那里它是一个会毁掉整个构建体的 bug。**\n\n' +
         '而在这里，**同一个 TAG 是你要往里装非天然氨基酸的那个位置。**\n\n' +
         '逻辑是这样的：TAG 在标准密码表里是终止密码子，**而终止密码子的「使用率」很低**——大多数基因只在末尾用一次。所以它是 64 个密码子里**最容易被腾出来的那一个**。\n\n' +
         '**于是把它从「停」改成「装某个 ncAA」，代价最小。**（真正的代价和限制是第 3-10 节的内容。）\n\n' +
         '**第 1-20 节当时就埋了这条线**：「这里它是 bug，第 7–8 讲里它是 feature」。**现在到了兑现的时候。**\n\n' +
         '口试里能主动把这两处连起来说，比单独答对任何一处都值钱——**因为它说明你是把十二讲当成一件事在读。**',
      takeaway: 'TAG 是使用率最低的密码子，所以最容易腾出来改指 ncAA。第 1-20 节那个 bug，在这里是 feature。'
    }
  ],
  points: [
    { term: 'The minimal construct', en: 'T7 promoter, ribosome binding site, ATG, the gene, a stop codon, and an optional TAG.', cn: 'T7 启动子、核糖体结合位点、ATG、基因、终止密码子，以及一个可选的 TAG。' },
    { term: 'Template forms', en: 'Circular or linear DNA both work, and mRNA can also be used — but purity matters.', cn: '环状或线性 DNA 都可以，也可以用 mRNA——但纯度很关键。' }
  ],
  beyondPoints: [
    { term: 'Why linear DNA fails in cells', en: 'Intracellular exonucleases, RecBCD among them, degrade linear DNA rapidly. So the conventional route forces you to clone into a circular plasmid, transform, pick colonies and prepare plasmid — several days of work before you can express anything.', cn: '细胞内的外切核酸酶（如 RecBCD）会迅速降解线性 DNA。所以常规路线必须先克隆成环状质粒、转化、挑克隆、抽质粒——在能表达任何东西之前先要花好几天。' },
    { term: 'Why it works in CFPS', en: 'Those nucleases are absent, or can be inhibited, so a PCR product goes straight in as template. Design primers, run the PCR, add it to the reaction — protein in a few hours, skipping cloning and transformation entirely.', cn: '这些核酸酶不存在，或者可以被抑制，所以 PCR 产物可以直接当模板。设计引物、跑 PCR、加进反应——几小时就能拿到蛋白，完全跳过克隆和转化。' },
    { term: 'This is the basis of high-throughput screening', en: 'You can run a thousand PCRs in parallel, each corresponding directly to one reaction well. That is what makes CFPS the natural platform for library work.', cn: '你可以并行做上千个 PCR，每个直接对应一个反应孔。这正是 CFPS 成为文库工作天然平台的原因。' },
    { term: 'Note the optional TAG', en: 'It is there deliberately, as the slot for amber suppression — the entire subject of the second half of the lecture.', cn: '它是有意留在那里的，作为琥珀抑制的位置——也就是本讲后半部分的全部主题。' }
  ],
  terms: [
    { en: 'RecBCD', cn: 'RecBCD 核酸酶', def_en: 'An E. coli exonuclease complex that rapidly degrades linear DNA, which is why linear templates cannot be expressed in living cells.', def_cn: '大肠杆菌的一个外切核酸酶复合体，会迅速降解线性 DNA，这正是线性模板无法在活细胞中表达的原因。' },
    { en: 'Ribosome binding site (RBS)', cn: '核糖体结合位点', def_en: 'The sequence upstream of the start codon that recruits the ribosome. Part of the minimal cell-free template.', def_cn: '起始密码子上游招募核糖体的序列。是无细胞最小模板的组成部分。' },
    { en: 'Linear template', cn: '线性模板', def_en: 'A PCR product used directly for expression, possible in CFPS because the degrading exonucleases are absent, and the basis of parallel library screening.', def_cn: '直接用于表达的 PCR 产物；在 CFPS 中可行是因为降解性外切核酸酶不存在，这也是并行文库筛选的基础。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can CFPS use linear PCR products as template when living cells cannot?',
      q_cn: '为什么 CFPS 能用线性 PCR 产物做模板而活细胞不能？',
      options: ['PCR product can be supplied at a much higher concentration', 'Exonucleases such as RecBCD, which degrade linear DNA, are absent', 'T7 polymerase transcribes only from linear templates', 'Linear DNA cannot cross the cell envelope, so it never reaches the cytoplasm'],
      answer: 1,
      optionRefs: { 2: '2-8' },
      optionNotes: {
        3: { en: 'This confuses delivery with survival. Linear DNA enters cells perfectly well — electroporating a linear fragment is routine, and lambda-Red recombineering depends on exactly that. What removes it is RecBCD chewing it up once it is inside.', cn: '这是把「进不去」和「进去之后活不下来」搞混了。线性 DNA 完全进得去细胞——电转一段线性片段是常规操作，lambda-Red recombineering 靠的就是这一点。真正让它消失的是进去之后被 RecBCD 降解。' }
      },
      why_en: 'The obstacle in a cell is degradation, not delivery. Removing the nucleases removes the requirement to clone into a circular plasmid, which is what saves several days per construct.',
      why_cn: '细胞里的障碍是降解而不是导入。去掉核酸酶就去掉了「必须克隆进环状质粒」这个要求，这正是每个构建体能省下好几天的原因。' },
    { type: 'mcq',
      q_en: 'What does the minimal cell-free template contain?',
      q_cn: '无细胞的最小模板包含什么？',
      options: ['Only the gene, since the tube already supplies polymerase and ribosomes', 'T7 promoter, RBS, ATG, gene, stop codon, optional TAG', 'An origin of replication and an antibiotic resistance marker for maintenance', 'A promoter and a polyA tail only'],
      answer: 1,
      optionRefs: { 2: '1-9' },
      optionNotes: {
        0: { en: 'Taking the cell away removes the need for replication elements, not the need for signals. The tube supplies polymerase and ribosomes, but they still have to be told where to start: with no T7 promoter there is no transcript, and with no RBS the ribosome cannot find the ATG.', cn: '去掉细胞，去掉的是复制和维持所需要的元件，不是转录翻译的信号。管子里给了 polymerase 和 ribosome，但还得告诉它们从哪里起步：没有 T7 promoter 就没有转录本，没有 RBS 核糖体就找不到 ATG。' }
      },
      why_en: 'No origin or selection marker is needed, because nothing has to replicate or be maintained — which is itself a consequence of there being no cell.',
      why_cn: '不需要复制起点或筛选标记，因为没有东西需要复制或维持——而这本身就是「没有细胞」的一个推论。' },
    { type: 'mcq',
      q_en: 'What is the optional TAG at the end of the construct for?',
      q_cn: '构建体末尾那个可选的 TAG 是做什么用的？',
      options: ['A purification tag', 'A slot for amber suppression', 'A transcription terminator', 'A polyadenylation signal'],
      answer: 1,
      optionNotes: {
        0: { en: 'Two meanings of the word tag have collided. Here TAG is three bases in the DNA, the amber stop codon; an affinity tag is a peptide such as His6, which would have to be encoded in frame as codons, not appended as a termination signal.', cn: '这里是 tag 这个词的两个意思撞在一起了。构建里的 TAG 是 DNA 上的三个碱基，也就是 amber 终止密码子；而 affinity tag 是 His6 这类肽段，必须在读框内用密码子编码出来，不可能以一个终止信号的形式挂在末尾。' },
        2: { en: 'This mixes up two levels. TAG stops translation and is read by the ribosome on the mRNA; a T7 terminator stops transcription and is read by the polymerase on the DNA. Different signals, different readers — and the amber slot only means anything at the translation level.', cn: '这是把两个层次混在一起了。TAG 停的是 translation，由 ribosome 在 mRNA 上读；T7 terminator 停的是 transcription，由 polymerase 在 DNA 上读。信号不同，读它的机器也不同，而 amber 这个位置只有在翻译层次上才有意义。' }
      },
      why_en: 'TAG is the amber codon. Leaving one in the construct is the deliberate hook for reading it as a non-canonical amino acid rather than as stop — the subject of the second half of the lecture.',
      why_cn: 'TAG 就是琥珀密码子。在构建体里留一个，正是为了让它被读作非天然氨基酸而不是终止信号——也就是本讲后半部分的主题。' },
    { type: 'short',
      q_en: 'Explain why the ability to use linear templates makes CFPS the natural platform for library screening.',
      q_cn: '解释为什么「能用线性模板」让 CFPS 成为文库筛选的天然平台。',
      accept: ['PCR', 'parallel', 'no cloning', 'transformation', 'hours'],
      answer_en: 'Because it collapses the workflow from days to hours and removes the step that cannot be parallelised easily. In a living cell, linear DNA is destroyed by exonucleases such as RecBCD, so every construct must first be cloned into a circular plasmid, transformed, plated, picked and prepared — several days of work, and each of those steps is laborious to do a thousand times over. In a cell-free reaction those nucleases are absent or inhibited, so a PCR product is added directly as template: design primers, run the PCR, add it to the reaction, and you have protein in a few hours with no cloning or transformation at all. Since PCR parallelises trivially, you can run a thousand reactions at once, each well corresponding directly to one PCR. That direct one-to-one correspondence between a PCR and an expressed protein is exactly what a library screen needs.',
      answer_cn: '因为它把整个流程从几天压缩到几小时，而且去掉了那个难以并行化的步骤。在活细胞里，线性 DNA 会被 RecBCD 这类外切核酸酶破坏，所以每个构建体都必须先克隆进环状质粒、转化、铺板、挑克隆、抽质粒——好几天的工作，而且这里每一步做上一千遍都非常费力。在无细胞反应里这些核酸酶不存在或被抑制，所以 PCR 产物直接当模板加进去：设计引物、跑 PCR、加进反应，几小时就有蛋白，完全不需要克隆和转化。而 PCR 极易并行，所以你可以一次跑一千个反应，每个孔直接对应一个 PCR。这种「一个 PCR 对应一个表达出来的蛋白」的一一对应关系，正是文库筛选所需要的。'
    }
  ],
  oral: {
    q_en: 'What does a cell-free expression template look like, and why does the form of the DNA matter?',
    q_cn: '无细胞表达的模板长什么样？DNA 的形式为什么重要？',
    model_en: 'The minimal construct is short: a T7 promoter, a ribosome binding site, a start codon, the gene, a stop codon, and optionally a TAG at the end. Notice what is absent — no origin of replication, no selection marker — because nothing has to replicate or be maintained, which is itself a consequence of there being no cell. Circular or linear DNA both work, and you can even use mRNA directly, though purity matters there. The really consequential point is that linear DNA works, because in a living cell it does not. Intracellular exonucleases, RecBCD among them, degrade linear DNA rapidly, which is why the conventional route forces you to clone into a circular plasmid, transform, pick colonies and prepare plasmid before you can express anything — several days per construct. In a cell-free reaction those nucleases are absent, or can be inhibited, so a PCR product goes straight in as template: design primers, run the PCR, add it to the reaction, and you have protein in a few hours, skipping cloning and transformation entirely. That is what makes CFPS the natural platform for high-throughput library screening, because PCR parallelises trivially — you can run a thousand PCRs at once, each corresponding directly to one reaction well, with no cloning bottleneck in between. And the optional TAG at the end of the construct is not an afterthought; it is deliberately there as the slot for amber suppression, which is the entire subject of the second half of the lecture.',
    checklist: ['Minimal construct: T7 promoter, RBS, ATG, gene, stop, optional TAG', 'No origin or selection marker needed — nothing must replicate', 'Circular or linear DNA, or mRNA directly (purity matters)', 'Linear DNA fails in cells: RecBCD and other exonucleases degrade it', 'So cells force cloning, transformation, picking, plasmid prep — days', 'In CFPS those nucleases are absent or inhibited', 'PCR product goes straight in: primers, PCR, react — hours', 'PCR parallelises, so 1,000 reactions map to 1,000 wells', 'That is why CFPS suits high-throughput library screening', 'The optional TAG is the deliberate hook for amber suppression']
  }
},

{
  id: '3-8',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.8',
  enTitle: 'Reprogramming the genetic code — the strategy map',
  cnTitle: '遗传密码重编程——策略图',
  slides: 'L8 s.31, s.37, s.42, s.48',
  coverage: 'full',
  coverageNote: 'The same decision tree appears on four slides, filling in progressively — which makes it the skeleton of Lecture 8. This node presents it complete, and every later node in the chapter fills in one of its cells.',
  summary: {
    en: 'The lecture\'s framing is mastering the central dogma becoming manipulating it. The strategy map has two axes: in vivo versus in vitro, and one non-canonical amino acid versus more than one. In vivo with one ncAA means an orthogonal aaRS/tRNA pair plus the amber codon. In vivo with several means quadruplet codons or codon compression. In vitro, either way, means flexizymes.',
    cn: '本讲的框架是从「掌握中心法则」走向「操纵中心法则」。策略图有两个轴：体内还是体外，装一种非天然氨基酸还是多种。体内加一种，用正交 aaRS/tRNA 对配琥珀密码子。体内加多种，用四联体密码子或密码子压缩。体外则不论几种，都用 flexizyme。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这张图两个轴：**体内还是体外**、**装一种还是多种 ncAA**。\n\n' +
            '体内一种 = **正交 aaRS/tRNA 对 + 琥珀密码子**（最成熟）；体内多种 = **四联体密码子或密码子压缩**；体外 = **flexizyme**。',
  skipIt: 'De la Torre & Chin 2021 这篇综述的出处不用背。**第 7–8 讲没有 RECAP 可引**——但这一节有一个同等级别的信号：**老师把「Genetic code reprogramming」这张路线图重复了四次**（本讲第 31、37、42、48 页），最后一次是最全的版本。**重复四次本身就是在说：这张图是第 8 讲的骨架。**建议把它当索引记住。',
  explain: [
    {
      q: '为什么「装第二个 ncAA」比装第一个难那么多？',
      a: '**因为琥珀密码子只有一个，而 64 个密码子全部有主。**\n\n' +
         '**装第一个 ncAA**：把 TAG 从「终止」改成「装 ncAA-1」。可行，而且代价最小（第 3-7 节讲了为什么是 TAG）。\n\n' +
         '**装第二个 ncAA**：**没有密码子给它了。**\n\n' +
         '数一下：64 个密码子里，**61 个编码氨基酸，3 个是终止密码子**（TAA、TAG、TGA）。你已经征用了 TAG。剩下两个终止密码子还得留着让翻译能停下来——总不能一个都不留。\n\n' +
         '**所以问题从「怎么装」变成了「空位从哪来」。**\n\n' +
         '**两条逃生路线，正好对应两种造空位的办法：**\n\n' +
         '**四联体密码子（第 3-11 节）—— 造新的。**把密码子从 3 位扩到 4 位，**凭空变出 256 个新密码子**，跟原来那 64 个完全不冲突。\n\n' +
         '**密码子压缩（第 3-12 节）—— 腾旧的。**利用遗传密码的简并性（第 1-4-3 节），在**全基因组范围**把某些同义密码子统一替换掉，于是被替换掉的那个密码子**再也不出现在任何基因里**，就空出来了。\n\n' +
         '**看清「空位从哪来」这个问题，第 3-11 和 3-12 节就不用分开背了——它们是同一个问题的两个解。**',
      takeaway: '64 个密码子全部有主，TAG 只有一个。所以问题变成「空位从哪来」——造新的（四联体）或腾旧的（压缩）。'
    },
    {
      q: '为什么体外那一列只有一个条目？',
      a: '**因为在试管里，你可以直接绕过 aaRS 的特异性——而体内不行。**\n\n' +
         '回到第 3-3 节那条关键认识：**遗传密码不是写在某处的字典，它是 aaRS 这组酶的行为的总和。**\n\n' +
         '**在体内**，你必须尊重这套机制。你想让某个 tRNA 挂上一个 ncAA，就得**造一个能干这件事的新酶**（正交 aaRS），而且还要保证它不去动天然的 tRNA、天然的酶也不来动它——这就是「正交」的全部要求（第 3-9 节）。\n\n' +
         '**在体外，你可以跳过这一步。**\n\n' +
         '你可以**用化学方法、或者用一个核酶（flexizyme），把任何氨基酸直接装到任何 tRNA 上**。不需要任何蛋白酶参与，也就不受它的特异性约束。\n\n' +
         '**所以体外那一列不需要区分「一种还是多种」——你想装几种就装几种，只要有对应的 tRNA。**\n\n' +
         '这就是为什么图上体外那一栏只写了 flexizyme（外加「多种时用合成核苷酸」）。\n\n' +
         '**代价当然也在**：体外意味着 CFPS，意味着产量低、成本高、放大困难（第 2-2 节那三条）。**所以这不是一条更好的路，是一条约束完全不同的路。**',
      takeaway: '体内必须造一个新酶来尊重 aaRS 这套机制；体外可以直接把氨基酸装到 tRNA 上，绕过它。'
    },
    {
      q: '标题从「mastering」变成「manipulating」，在说什么？',
      a: '**老师用这两个词把整块内容分成了两半，而且它们的关系是依赖，不是并列。**\n\n' +
         '**mastering the central dogma（掌握中心法则）—— 第 7 讲。**\n\n' +
         '把翻译这台机器**完整地搬到试管里，让它照常工作**。你没有改任何规则，你只是证明了自己能在体外重现它、并且理解它的每一个部件（核糖体、aaRS、能量再生——那张重复三次的路线图）。\n\n' +
         '**manipulating the central dogma（操纵中心法则）—— 第 8 讲。**\n\n' +
         '**改写它的规则**：让某个密码子指向一个自然界不用的氨基酸。\n\n' +
         '**关键是：第二步依赖第一步。**\n\n' +
         '你必须**先能把机器完整拆开又装回去、并且每个部件都在你手上**，才谈得上换掉其中一个（第 3-1 节那条「PURE 才能做减法」）。\n\n' +
         '**这个「先复现、再改写」的顺序，其实是整门工程学科的通用模式。**\n\n' +
         '第 1 讲也是这样：先能把基因克隆出来、原样表达（复现），才谈得上定点突变（改写）。第 11 讲还会再来一次：先能合成一个完整基因组并让细胞活下来（复现），才谈得上精简它（改写）。\n\n' +
         '**口试里这一句可以当整块内容的开场白。**',
      takeaway: '先能在体外完整复现，才谈得上改写。这个顺序在第 1 讲和第 11 讲也各出现过一次。'
    },
    {
      q: '这张图实际怎么用？',
      a: '**当索引用：被问到任何一个具体技术，先在图上定位它解决的是哪个问题。**\n\n' +
         '整个第 8 讲其实只有**三个不同的问题**，六个节点分别在回答它们：\n\n' +
         '**问题一：怎么把 ncAA 装到 tRNA 上？**\n\n' +
         '→ **第 3-9 节，正交 aaRS/tRNA 对**（体内的答案）。\n\n' +
         '→ **第 3-13 节，flexizyme**（体外的答案，用核酶代替酶）。\n\n' +
         '**问题二：用哪个密码子来指定它？（空位从哪来）**\n\n' +
         '→ **第 3-10 节，琥珀抑制**（装一种时的答案：征用 TAG）。\n\n' +
         '→ **第 3-11 节，四联体密码子**（造新的）。\n\n' +
         '→ **第 3-12 节，密码子压缩**（腾旧的）。\n\n' +
         '**问题三：这一切有什么用？**\n\n' +
         '→ **第 3-14 节。**\n\n' +
         '**所以复习这一讲时，不要按节点顺序记六个技术名词，按这三个问题记。**\n\n' +
         '被问到「怎么在蛋白里装一个非天然氨基酸」，完整的答案框架就是：**先说要解决两个独立的问题（怎么装、用哪个密码子），再说体内和体外各自的答案。**这比罗列技术名称清楚得多，也更像你真的理解了这件事。',
      takeaway: '整讲只有三个问题：怎么装、用哪个密码子、有什么用。按问题记，不要按技术名词记。'
    }
  ],
  points: [
    { term: 'The framing', en: 'The section titles tell the story: mastering the central dogma becomes manipulating the central dogma.', cn: '章节标题本身就讲出了故事：从「掌握中心法则」到「操纵中心法则」。' },
    { term: 'Terminology', en: 'Unnatural amino acids are non-canonical amino acids, ncAAs.', cn: '非天然氨基酸即 non-canonical amino acids，缩写 ncAA。' },
    { term: 'The key review', en: 'De la Torre and Chin, "Reprogramming the genetic code", Nature Reviews Genetics 2021, 22:169–184.', cn: 'De la Torre 与 Chin，《遗传密码重编程》，Nature Reviews Genetics 2021, 22:169–184。' },
    { term: 'In vivo, one ncAA', en: 'An orthogonal aaRS/tRNA pair plus the amber codon.', cn: '正交 aaRS/tRNA 对加上琥珀密码子。' },
    { term: 'In vivo, more than one ncAA', en: 'Quadruplet codons, or codon compression.', cn: '四联体密码子，或者密码子压缩。' },
    { term: 'In vitro, either', en: 'Flexizymes, with synthetic nucleotides if more than one ncAA is needed.', cn: 'Flexizyme；如果需要多种 ncAA 则再配合合成核苷酸。' },
    { term: 'Scale of the field', en: 'Almost 200 non-canonical amino acids have been incorporated into proteins this way.', cn: '已经有近 200 种非天然氨基酸通过这类方法被装进蛋白里。' }
  ],
  beyondPoints: [
    { term: 'Why the in vivo, one-ncAA cell is the mature route', en: 'The orthogonal pair with the amber codon is the most developed and most widely used approach, and everything else on the map exists because of its limitations.', cn: '正交对加琥珀密码子是最成熟、用得最多的路线，图上其他所有方案的存在，都是因为它有局限。' },
    { term: 'Why more than one ncAA is hard', en: 'There is only one amber codon available, so installing a second ncAA leaves you with no codon to assign it to. Hence the two escape routes: quadruplet codons expand a codon from three positions to four, conjuring 256 new codons out of nothing, and codon compression replaces certain synonymous codons genome-wide to free them up.', cn: '可用的琥珀密码子只有一个，所以装第二种 ncAA 时就没有密码子可分配了。于是有两条出路：四联体密码子把密码子从 3 位扩展到 4 位，凭空造出 256 个新密码子；密码子压缩则把基因组里某些同义密码子全部换掉，把它们腾出来。' },
    { term: 'Why in vitro is a different world', en: 'In a tube you can chemically attach any amino acid directly onto a tRNA, bypassing the specificity of the synthetase entirely — which is what a flexizyme does, and why the in vitro column of the map has only one entry.', cn: '在试管里你可以直接把任意氨基酸化学挂到 tRNA 上，完全绕开合成酶的特异性限制——这正是 flexizyme 所做的，也是策略图上体外那一列只有一个条目的原因。' }
  ],
  terms: [
    { en: 'Non-canonical amino acid (ncAA)', cn: '非天然氨基酸', def_en: 'Any amino acid outside the standard twenty. Almost 200 have been incorporated into proteins by genetic code reprogramming.', def_cn: '标准 20 种之外的任何氨基酸。已有近 200 种通过遗传密码重编程被装进蛋白里。' },
    { en: 'Genetic code reprogramming', cn: '遗传密码重编程', def_en: 'Breaking the standard codon assignments so that a codon encodes something other than its canonical meaning.', def_cn: '打破标准的密码子分配，让某个密码子编码它原本含义之外的东西。' },
    { en: 'Quadruplet codon', cn: '四联体密码子', def_en: 'A four-base codon read by a tRNA with an extended anticodon. There are 256 possible ones, but decoding them requires an orthogonal ribosome.', def_cn: '由带扩展反密码子的 tRNA 读取的四碱基密码子。理论上有 256 个，但解码它们需要正交核糖体。' },
    { en: 'Codon compression', cn: '密码子压缩', def_en: 'Genome-wide replacement of selected sense codons by synonyms, followed by deletion of the tRNAs that decoded them, freeing those codons for reassignment.', def_cn: '在全基因组范围内把选定的有义密码子换成同义密码子，再删掉解码它们的 tRNA，从而把这些密码子腾出来重新分配。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'On the strategy map, what is the route for one ncAA in vivo?',
      q_cn: '在策略图上，体内装一种 ncAA 走哪条路？',
      options: ['Flexizymes charging the tRNA chemically in a tube', 'An orthogonal aaRS/tRNA pair reading the amber codon', 'Quadruplet codons read by an expanded-anticodon tRNA', 'Codon compression, freeing a sense codon genome-wide'],
      answer: 1,
      optionRefs: { 0: '3-13', 2: '3-11', 3: '3-12' },
      why_en: 'This is the mature, most widely used route. The other in vivo options exist specifically because it cannot be extended beyond a single ncAA, there being only one amber codon.',
      why_cn: '这是最成熟、用得最多的路线。体内的其他方案之所以存在，正是因为它无法扩展到一种以上的 ncAA——可用的琥珀密码子只有一个。' },
    { type: 'mcq',
      q_en: 'Why does installing a second ncAA in vivo require a different strategy?',
      q_cn: '为什么在体内装第二种 ncAA 需要不同的策略？',
      options: ['The orthogonal pair becomes toxic to the host cell', 'There is only one amber codon left to reassign', 'Two synthetases cannot fold in the same cytoplasm', 'The ribosome cannot accept two ncAAs in one chain'],
      answer: 1,
      why_en: 'The bottleneck is codon availability, not chemistry. Quadruplet codons create new codons out of nothing, and codon compression frees existing ones — two different ways of solving the same shortage.',
      why_cn: '瓶颈在于密码子的可用性，而不是化学。四联体密码子凭空造出新密码子，密码子压缩则腾出现有的——这是解决同一个短缺问题的两种不同办法。' },
    { type: 'mcq',
      q_en: 'Why does the in vitro column of the map contain only flexizymes?',
      q_cn: '为什么策略图的体外那一列只有 flexizyme？',
      options: ['Flexizymes are the cheapest of the available routes', 'Chemical charging of the tRNA bypasses synthetase specificity', 'Orthogonal aaRS/tRNA pairs do not function in a tube', 'Cells are always preferable to a tube for ncAA work'],
      answer: 1,
      optionNotes: {
        2: { en: 'The one-way restriction runs in the opposite direction. Nothing stops an orthogonal pair working in a tube; it is merely redundant there, because once you can charge the tRNA chemically you no longer need a synthetase willing to accept the ncAA. The method genuinely confined to one side of the map is the flexizyme, which cannot be used in vivo.', cn: '单向的限制方向反了。没有什么东西阻止 orthogonal pair 在管子里工作，它只是在管子里变得多余——一旦能用化学方法给 tRNA 充电，你就不再需要一个肯接受 ncAA 的 synthetase。真正只能待在图上一边的是 flexizyme，它没办法在体内用。' }
      },
      why_en: 'The whole difficulty of the in vivo routes is working around a synthetase that will not accept your amino acid. In vitro you can sidestep that problem rather than solve it, by charging the tRNA chemically before adding it to the reaction.',
      why_cn: '体内路线的全部困难在于绕开一个不肯接受你的氨基酸的合成酶。在体外你可以直接跳过这个问题而不是解决它——在加进反应之前先用化学方法给 tRNA 充电。' },
    { type: 'short',
      q_en: 'Reproduce the strategy map and say what each axis means.',
      q_cn: '复述策略图，并说明两个轴各代表什么。',
      accept: ['in vivo', 'in vitro', 'orthogonal', 'amber', 'quadruplet', 'compression', 'flexizyme'],
      answer_en: 'The map has two axes. One is in vivo against in vitro — whether you are working in a living cell or in a tube. The other is one type of ncAA against more than one. In vivo with a single ncAA, the answer is an orthogonal aaRS/tRNA pair combined with the amber codon, and that is the mature and most widely used route. In vivo with more than one, the problem is that there is only a single amber codon, so a second ncAA has nowhere to go; the two escape routes are quadruplet codons, which expand a codon from three bases to four and thereby conjure two hundred and fifty-six new codons, and codon compression, which replaces certain synonymous codons genome-wide in order to free them for reassignment. In vitro, in either column, the answer is flexizymes, optionally with synthetic nucleotides for multiple ncAAs — because in a tube you can chemically attach any amino acid directly onto a tRNA and sidestep synthetase specificity entirely.',
      answer_cn: '这张图有两个轴。一个是体内还是体外——你是在活细胞里还是在试管里工作。另一个是装一种 ncAA 还是多种。体内装一种，答案是正交 aaRS/tRNA 对配合琥珀密码子，这是最成熟、用得最多的路线。体内装多种，问题在于可用的琥珀密码子只有一个，第二种 ncAA 无处安放；两条出路是四联体密码子（把密码子从 3 个碱基扩展到 4 个，从而凭空造出 256 个新密码子）和密码子压缩（在全基因组范围替换某些同义密码子，把它们腾出来重新分配）。体外则不论哪一列，答案都是 flexizyme，需要装多种时再配合合成核苷酸——因为在试管里你可以直接把任意氨基酸化学挂到 tRNA 上，完全绕开合成酶的特异性。'
    }
  ],
  oral: {
    q_en: 'How would you go about incorporating a non-canonical amino acid into a protein?',
    q_cn: '你会怎么把一个非天然氨基酸装进蛋白里？',
    model_en: 'The lecture organises this as a map with two axes, and it is worth reproducing because everything else fits into one of its cells. The framing is that we move from mastering the central dogma to manipulating it. One axis is in vivo against in vitro; the other is one type of non-canonical amino acid against more than one. Take the cells in turn. In vivo with a single ncAA is the mature route: an orthogonal aminoacyl-tRNA synthetase and tRNA pair, combined with the amber codon TAG. This is by far the most developed and widely used approach, and almost two hundred non-canonical amino acids have been incorporated this way. In vivo with more than one ncAA is harder, and the reason is purely a shortage of codons — there is only one amber codon, so once you have spent it on your first ncAA there is nothing left to assign to a second. Two escape routes exist. Quadruplet codons expand a codon from three positions to four, which conjures two hundred and fifty-six new codons out of nothing, though decoding them requires an orthogonal ribosome. Codon compression takes the opposite approach: replace selected synonymous codons genome-wide, delete the tRNAs that read them, and those codons become free for reassignment. In vitro, in either column, the answer is flexizymes, with synthetic nucleotides if you need several ncAAs. The reason that column is so simple is that the in vivo difficulty is entirely about working around a synthetase that refuses your amino acid, and in a tube you can sidestep the problem rather than solve it — you chemically attach any amino acid you like directly onto a tRNA before adding it to the reaction. The key review, cited throughout the deck, is De la Torre and Chin in Nature Reviews Genetics, 2021.',
    checklist: ['Framing: mastering the central dogma becomes manipulating it', 'ncAA = non-canonical amino acid; ~200 incorporated so far', 'Key review: De la Torre & Chin, Nat Rev Genet 2021', 'Two axes: in vivo vs in vitro, one ncAA vs several', 'In vivo + one: orthogonal aaRS/tRNA pair + amber codon (the mature route)', 'In vivo + several: quadruplet codons, or codon compression', 'The bottleneck is codon availability — only one amber codon exists', 'Quadruplets create 256 new codons; compression frees existing ones', 'In vitro, either: flexizymes (+ synthetic nucleotides)', 'In vitro sidesteps synthetase specificity by charging tRNA chemically']
  }
},

{
  id: '3-9',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.9',
  enTitle: 'Orthogonal aaRS/tRNA pairs',
  cnTitle: '正交 aaRS/tRNA 对',
  slides: 'L8 s.32–33',
  coverage: 'full',
  coverageNote: 'The requirements and the source organisms are stated precisely on the slides. Breaking orthogonality into four separate non-crossing conditions, and explaining why evolutionary distance is what supplies it, is the beyond-the-slides content — and orthogonality is the single most important word in the lecture.',
  summary: {
    en: 'The non-canonical amino acid is supplied in the medium while the cell expresses an orthogonal synthetase and tRNA. The tRNA must be charged by its cognate synthetase and minimally by the host\'s, and must read a codon not assigned to any canonical amino acid, usually amber. The synthetase must charge only its own tRNA and must be engineered to accept the ncAA over the canonical twenty. Pairs are imported from evolutionarily distant organisms, because that is what makes them orthogonal in the first place.',
    cn: '非天然氨基酸由培养基提供，同时细胞表达一对正交的合成酶和 tRNA。这个 tRNA 必须由它的同源合成酶装载、而尽量不被宿主的合成酶装载，并且要识别一个未分配给任何天然氨基酸的密码子，通常是琥珀密码子。合成酶必须只装载自己的 tRNA，而且要经过改造以接受 ncAA 而非那 20 种天然氨基酸。正交对从进化上遥远的生物中引入，因为正是进化距离提供了正交性。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L8 s.32', src: 'img/figures/L8_s32_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**「正交」= 四条互不干扰的条件同时成立**：外来酶只装外来 tRNA、外来 tRNA 只被外来酶装、外来酶只认 ncAA、以及它读的密码子不跟任何天然密码子冲突。\n\n' +
            '**前三条里有三条靠「进化距离」白送，只有「只认 ncAA」那一条必须靠定向进化改出来。**',
  skipIt: 'MjTyrRS、PylRS 这两个名字建议记（它们是这个领域的起点），但 Dunkelmann 2020 / Beattie 2023 那些前沿工作的作者和年份不用背。**第 7–8 讲没有 RECAP 可引**，这是判断。',
  explain: [
    {
      q: '「正交」到底是什么意思？为什么要拆成四条？',
      a: '**正交 = 互不干扰。**但「互不干扰」这句话太笼统，必须拆成四条**同时**成立的条件，缺一条整个系统就漏了。\n\n' +
         '把宿主细胞里的情况画出来：里面本来有 **20 种天然 aaRS 和几十种天然 tRNA**，它们互相之间配对得好好的。现在你往里塞一对外来的。\n\n' +
         '**条件一：外来的 aaRS 只装外来的 tRNA，不去装宿主那几十种。**\n\n' +
         '违反了会怎样：它把 ncAA 装到天然 tRNA 上 → **ncAA 被随机插进宿主所有的蛋白里** → 细胞死。\n\n' +
         '**条件二：外来的 tRNA 只被外来的 aaRS 装，不被宿主那 20 种装。**\n\n' +
         '违反了会怎样：宿主的酶把天然氨基酸装到你的 tRNA 上 → **你的 TAG 位点装进去的是天然氨基酸，不是 ncAA** → 实验白做，而且你可能要到质谱才发现。\n\n' +
         '**条件三：外来的 aaRS 只接受 ncAA，不接受那 20 种天然氨基酸。**\n\n' +
         '违反了会怎样：跟条件二一样的后果，只是原因在酶这一侧。\n\n' +
         '**条件四：外来 tRNA 的反密码子读的是一个空闲密码子，不跟任何天然密码子冲突。**\n\n' +
         '违反了会怎样：**宿主基因组里所有那个密码子的位置都被插进 ncAA** → 细胞死。\n\n' +
         '**四条里有三条是「别碰宿主的东西」，一条是「别让宿主的东西碰你」。**记住这个结构，四条就不用死背了。',
      takeaway: '四条同时成立才叫正交。三条是「别碰宿主」，一条是「别让宿主碰你」——违反哪一条，后果各不相同。'
    },
    {
      q: '为什么正交对要从「进化上遥远」的生物里找？',
      a: '**因为正交性本身是进化距离白送的。这是这一节最漂亮的一步。**\n\n' +
         '先想一个反例：**如果你从 E. coli 拿一对 aaRS/tRNA，改造一下再放回 E. coli 里，会怎样？**\n\n' +
         '**必然串味。**因为 aaRS 识别自己 tRNA 靠的是一组叫**识别元件（identity elements）**的特征——某几个特定位置的碱基。**而这些识别元件在近缘物种之间是高度保守的。**你的改造版和宿主原版长得太像，互相认得出来。\n\n' +
         '**而古菌的 aaRS/tRNA 系统跟细菌的已经分开演化了几十亿年。**\n\n' +
         '它们的识别元件差异足够大，**所以「互不认识」是天然状态，不需要你做任何工作。**\n\n' +
         '**这就是为什么 MjTyrRS（来自古菌 Methanocaldococcus jannaschii）和 PylRS 成了整个领域的起点：**\n\n' +
         '**条件一、二、四基本上是白送的**——它们本来就不认识 E. coli 的东西，而 PylRS 系统在自然界里读的本来就是 TAG（见第 3-10 节）。\n\n' +
         '**只有条件三需要你动手。**\n\n' +
         '同理，**在真核细胞里就反过来用 E. coli 的 LeuRS/tRNA-Leu**——对真核宿主来说，细菌的系统同样是「进化上遥远」的。\n\n' +
         '**所以这条选材原则可以一句话概括：要找互不干扰的零件，去演化树上离得最远的地方找。**',
      takeaway: '识别元件在近缘物种间高度保守，所以近的必然串味。古菌和细菌分开几十亿年，互不认识是白送的。'
    },
    {
      q: '为什么只有「条件三」必须靠定向进化，不能白送？',
      a: '**因为它要求的是一件自然界从来没做过的事：偏爱一个自然界里不存在的氨基酸。**\n\n' +
         '条件一、二、四说的都是「**别去认那些本来就在的东西**」——而进化距离恰好提供了这种陌生感。\n\n' +
         '**但条件三说的是「去认一个新东西，而且要比那 20 种天然的更偏爱它」。**\n\n' +
         '**演化从来没有面对过这个需求**，所以没有任何天然的酶碰巧满足它。这东西只能造。\n\n' +
         '**怎么造：把合成酶的氨基酸结合口袋做成一个突变库，然后筛。**筛出那些「接受 ncAA、拒绝天然氨基酸」的突变体。\n\n' +
         '**这正是第 9 讲的内容**——而且这是个很典型的第 9 讲式问题：**你知道要改哪个区域（结合口袋），但不知道该把哪几个残基改成什么。**回到第 1-2-4 节那条岔路：知道改哪里就理性设计，不知道就建库筛选。\n\n' +
         '**还有一件必须做的事：常常要把编辑域删掉。**\n\n' +
         '回到第 3-3 节：编辑域的判据是「比正确的那个小就销毁」，**它会把你的 ncAA 当成错误水解掉**。所以你不但要让酶接受 ncAA，还得**把那个会把它撤销的质控机制拆掉**。\n\n' +
         '**这跟敲掉 Lon（第 2-5 节）、敲掉 trxB/gor（第 2-13 节）是同一个模式的第四次出现。**',
      takeaway: '前三条靠进化距离白送，但「偏爱一个自然界没有的氨基酸」演化从没做过，只能建库筛。而且要顺手删掉编辑域。'
    }
  ],
  points: [
    { term: 'How the ncAA gets in', en: 'The non-canonical amino acid is supplied in the culture medium, while the cell expresses the orthogonal aaRS/tRNA pair.', cn: '非天然氨基酸加在培养基里，同时细胞表达正交的 aaRS/tRNA 对。' },
    { term: 'The tRNA requirement', en: 'The orthogonal tRNA is aminoacylated by its cognate synthetase but minimally by the host\'s aaRSs, and is engineered to recognise an orthogonal codon not assigned to a canonical amino acid — usually the amber codon TAG.', cn: '正交 tRNA 由它的同源合成酶氨酰化，而尽量不被宿主的 aaRS 氨酰化；它被改造成识别一个未分配给天然氨基酸的正交密码子——通常是琥珀密码子 TAG。' },
    { term: 'The synthetase requirement', en: 'Each orthogonal aaRS aminoacylates its cognate orthogonal tRNA but minimally the other tRNAs in the host, and its active site is often engineered to use the desired ncAA selectively and discriminate against canonical amino acids.', cn: '每个正交 aaRS 只氨酰化自己的同源正交 tRNA，而尽量不氨酰化宿主的其他 tRNA；它的活性位点往往经过改造，以选择性地使用目标 ncAA 并排斥天然氨基酸。' },
    { term: 'Where the pairs come from', en: 'Usually imported from evolutionarily divergent organisms, where sequences have diverged from the host\'s.', cn: '通常从进化上分化很远的生物引入，因为那里的序列已经与宿主分化开了。' },
    { term: 'The two workhorse pairs', en: 'Methanocaldococcus jannaschii Tyr-RS with its tRNA-Tyr, and derivatives, used in E. coli. E. coli Leu-RS with tRNA-Leu, and derivatives, used in eukaryotic cells.', cn: 'Methanocaldococcus jannaschii 的 Tyr-RS 及其 tRNA-Tyr 及衍生物，用于大肠杆菌。大肠杆菌的 Leu-RS 及其 tRNA-Leu 及衍生物，用于真核细胞。' },
    { term: 'Frontier work', en: 'Dunkelmann, Willis, Beattie and Chin in Nature Chemistry 2020 engineered triply orthogonal pyrrolysyl pairs for three distinct ncAAs; Beattie, Dunkelmann and Chin in Nature Chemistry 2023 reported quintuply orthogonal PylRS/tRNA-Pyl pairs.', cn: 'Dunkelmann、Willis、Beattie 和 Chin 在 Nature Chemistry 2020 上改造出三重正交的吡咯赖氨酰对，可装三种不同的 ncAA；Beattie、Dunkelmann 和 Chin 在 Nature Chemistry 2023 上报道了五重正交的 PylRS/tRNA-Pyl 对。' }
  ],
  beyondPoints: [
    { term: 'What orthogonal means — four non-crossing conditions', en: 'Orthogonal means mutually non-interfering. For an imported pair to work in a host, four conditions must hold simultaneously: the foreign aaRS charges only the foreign tRNA and not the host\'s; the foreign tRNA is charged only by the foreign aaRS and not by the host\'s twenty; the foreign aaRS accepts only the ncAA and not the twenty canonical amino acids; and the foreign tRNA\'s anticodon reads a free codon that conflicts with no natural one.', cn: '正交就是互不干扰、各走各的。一对外源的 aaRS/tRNA 要在宿主里工作，必须同时满足四个互不交叉的条件：外源 aaRS 只装载外源 tRNA、不装宿主的 tRNA；外源 tRNA 只被外源 aaRS 装载、不被宿主的 20 种 aaRS 装载；外源 aaRS 只接受那个 ncAA、不接受 20 种天然氨基酸；外源 tRNA 的反密码子识别一个空闲密码子，不与任何天然密码子冲突。' },
    { term: 'Why evolutionary distance supplies orthogonality', en: 'The identity elements by which a synthetase recognises its tRNA are highly conserved among related species, so a pair taken from E. coli and put back into E. coli would inevitably cross-react. Archaeal aaRS/tRNA systems have diverged from bacterial ones over billions of years, so their identity elements differ enough to be nearly orthogonal by default.', cn: '合成酶识别其 tRNA 所依据的识别元件在近缘物种间高度保守，所以从大肠杆菌里拿一对再放回大肠杆菌，必然互相串扰。古菌的 aaRS/tRNA 系统与细菌分化了几十亿年，识别元件差异足够大，天然就接近正交。' },
    { term: 'Why MjTyrRS and PylRS became the workhorses', en: 'Both come from archaea, so conditions one, two and four come close to being satisfied for free. That is what made them the starting points for the whole field.', cn: '两者都来自古菌，所以第一、二、四个条件几乎是免费满足的。这正是它们成为整个领域起点的原因。' },
    { term: 'Condition three usually needs engineering', en: 'Accepting the ncAA while rejecting the canonical twenty is not something evolution provides. The synthetase\'s amino-acid binding pocket is put through directed evolution — the subject of Lecture 9 — to select mutants that take the ncAA and refuse natural amino acids. And the editing domain often has to be removed, because otherwise the proofreading mechanism would hydrolyse the ncAA as an error.', cn: '「接受 ncAA 同时拒绝那 20 种天然氨基酸」不是进化能提供的。要对合成酶的氨基酸结合口袋做定向进化（第 9 讲的技术），筛出只接受 ncAA、拒绝天然氨基酸的突变体。而且往往还要把编辑域敲掉，否则那套校对机制会把 ncAA 当作错误水解掉。' }
  ],
  terms: [
    { en: 'Orthogonality', cn: '正交性', def_en: 'The property of not interfering with the host system. For an aaRS/tRNA pair it requires four simultaneous non-crossing conditions, covering both partners and both their substrates.', def_cn: '不干扰宿主系统的性质。对一对 aaRS/tRNA 来说，它要求四个同时成立的互不交叉条件，涵盖两个搭档及其两类底物。' },
    { en: 'MjTyrRS', cn: 'MjTyrRS', def_en: 'The tyrosyl-tRNA synthetase of the archaeon Methanocaldococcus jannaschii, whose pair with its tRNA is nearly orthogonal in E. coli and is a workhorse of the field.', def_cn: '古菌 Methanocaldococcus jannaschii 的酪氨酰-tRNA 合成酶，它与自身 tRNA 组成的对在大肠杆菌中接近正交，是该领域的主力工具。' },
    { en: 'PylRS', cn: '吡咯赖氨酰合成酶', def_en: 'The pyrrolysyl-tRNA synthetase system, naturally an amber-decoding orthogonal system in some archaea, and hence an excellent engineering starting point.', def_cn: '吡咯赖氨酰-tRNA 合成酶系统，在某些古菌中天然就是一套解读琥珀密码子的正交系统，因而是极好的改造起点。' },
    { en: 'Directed evolution', cn: '定向进化', def_en: 'Iterative mutagenesis and selection to obtain a desired protein property — here, a synthetase pocket that accepts the ncAA and refuses canonical amino acids. The subject of Lecture 9.', def_cn: '通过反复突变和筛选获得想要的蛋白性质——这里是指得到一个接受 ncAA、拒绝天然氨基酸的合成酶口袋。这是第 9 讲的主题。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why are orthogonal pairs imported from evolutionarily distant organisms?',
      q_cn: '为什么正交对要从进化上遥远的生物中引入？',
      options: ['Distant organisms have structurally simpler synthetases', 'Their tRNA identity elements are not recognised by host synthetases', 'The donors are thermophiles, and thermostability is what makes a pair orthogonal', 'Their tRNAs are shorter than those of the host'],
      answer: 1,
      why_en: 'Orthogonality is really about non-recognition. Archaeal systems diverged from bacterial ones over billions of years, so their identity elements differ enough that host synthetases do not recognise the imported tRNA and vice versa.',
      why_cn: '正交性本质上是「互不识别」。古菌系统与细菌系统分化了几十亿年，识别元件差异足够大，宿主的合成酶认不出引入的 tRNA，反之亦然。' },
    { type: 'mcq',
      q_en: 'Which of the four orthogonality conditions usually requires deliberate engineering?',
      q_cn: '四个正交性条件中，通常哪一个需要人工改造？',
      options: ['The foreign aaRS charging only the foreign tRNA and none of the host tRNAs', 'The foreign aaRS accepting the ncAA and rejecting the canonical twenty', 'The foreign tRNA not being charged by any of the host twenty synthetases', 'The anticodon reading a free codon'],
      answer: 1,
      optionNotes: {
        2: { en: 'This is the condition that evolutionary distance hands you for free — it is the entire reason the pair is imported from an archaeon in the first place. The engineering is needed on the other axis, amino-acid specificity, where the binding pocket is reshaped by directed evolution and the editing domain is often deleted as well.', cn: '这一条恰恰是进化距离白送的——从 archaea 引进这一对系统的全部理由就在于此。需要动手改造的是另一个轴：对氨基酸的特异性，要靠 directed evolution 重塑结合口袋，而且常常还得把 editing domain 一并删掉。' }
      },
      why_en: 'Evolutionary distance supplies the tRNA-related conditions almost for free, but no natural synthetase evolved to prefer your particular ncAA. That pocket must be evolved in the lab, and the editing domain often removed as well.',
      why_cn: '进化距离几乎免费提供了与 tRNA 有关的那几个条件，但没有哪个天然合成酶进化出偏好你那个特定 ncAA 的能力。那个口袋必须在实验室里进化出来，而且往往还要去掉编辑域。' },
    { type: 'mcq',
      q_en: 'How does the non-canonical amino acid reach the translation machinery in vivo?',
      q_cn: '在体内，非天然氨基酸是怎么到达翻译机器的？',
      options: ['It is synthesised by an engineered pathway', 'It is supplied in the culture medium', 'It is released from a precursor protein', 'It is delivered by a plasmid'],
      answer: 1,
      optionNotes: {
        3: { en: 'What the plasmid carries is the genes for the orthogonal synthetase and tRNA. A plasmid encodes proteins and RNAs; it cannot encode a small molecule for which the cell has no biosynthetic pathway, which is why the ncAA itself has to come from outside.', cn: '质粒上带的是 orthogonal synthetase 和 tRNA 的基因。plasmid 能编码蛋白和 RNA，却编码不出一个细胞根本没有合成途径的小分子——所以 ncAA 本身只能从外面加进来。' }
      },
      why_en: 'You feed it to the cells. The cell contributes the orthogonal synthetase and tRNA from an expression plasmid, but the ncAA itself is simply added to the medium and taken up.',
      why_cn: '直接喂给细胞。细胞通过表达质粒提供正交的合成酶和 tRNA，而 ncAA 本身只是加进培养基、由细胞摄取。' },
    { type: 'short',
      q_en: 'Define orthogonality and give the four conditions an orthogonal pair must satisfy.',
      q_cn: '定义正交性，并说出一对正交对必须满足的四个条件。',
      accept: ['non-interfering', 'only', 'host', 'free codon', 'ncAA'],
      answer_en: 'Orthogonal means mutually non-interfering — the imported system and the host system run in parallel without touching each other. Four conditions must hold at once. First, the foreign synthetase charges only the foreign tRNA and not any of the host\'s tRNAs. Second, the foreign tRNA is charged only by the foreign synthetase and not by any of the host\'s twenty synthetases. Third, the foreign synthetase accepts only the non-canonical amino acid and not the canonical twenty. Fourth, the foreign tRNA\'s anticodon reads a codon that is free, conflicting with no natural assignment — in practice the amber codon. The first, second and fourth come close to being satisfied for free if you import the pair from an evolutionarily distant organism, because tRNA identity elements are conserved among relatives and archaeal systems have diverged from bacterial ones over billions of years. The third almost always requires directed evolution of the amino-acid binding pocket, and often removal of the editing domain, which would otherwise hydrolyse the ncAA as an error.',
      answer_cn: '正交就是互不干扰——引入的系统和宿主系统各走各的、互不接触。四个条件必须同时成立。第一，外源合成酶只装载外源 tRNA，不装宿主的任何 tRNA。第二，外源 tRNA 只被外源合成酶装载，不被宿主那 20 种合成酶装载。第三，外源合成酶只接受那个非天然氨基酸，不接受 20 种天然氨基酸。第四，外源 tRNA 的反密码子识别一个空闲的、与任何天然分配都不冲突的密码子——实践中就是琥珀密码子。如果从进化上遥远的生物引入这对，第一、二、四条几乎是免费满足的，因为 tRNA 的识别元件在近缘物种间保守，而古菌系统与细菌分化了几十亿年。第三条几乎总是需要对氨基酸结合口袋做定向进化，而且往往要去掉编辑域，否则它会把 ncAA 当作错误水解掉。'
    }
  ],
  oral: {
    q_en: 'What is an orthogonal aaRS/tRNA pair and what makes one work?',
    q_cn: '什么是正交 aaRS/tRNA 对？它靠什么才能工作？',
    model_en: 'The setup is that the non-canonical amino acid is supplied in the culture medium while the cell expresses an orthogonal synthetase and tRNA pair from a plasmid. Orthogonal is the single most important word in this lecture, and it means mutually non-interfering — the imported system and the host system run in parallel without touching. Concretely, four conditions have to hold simultaneously. The foreign synthetase must charge only the foreign tRNA, not the host\'s. The foreign tRNA must be charged only by the foreign synthetase, not by any of the host\'s twenty. The foreign synthetase must accept only your ncAA and not the twenty canonical amino acids. And the foreign tRNA\'s anticodon must read a codon that is genuinely free, conflicting with no natural assignment — in practice the amber codon. Now, where do such pairs come from? They are imported from evolutionarily divergent organisms, and the reason is worth spelling out. The identity elements by which a synthetase recognises its own tRNA are highly conserved among related species, so if you took a pair from E. coli and put it back into E. coli it would inevitably cross-react. Archaeal aaRS/tRNA systems have diverged from bacterial ones over billions of years, so their identity elements differ enough that they are nearly orthogonal by default. That is exactly why the Methanocaldococcus jannaschii tyrosyl pair in E. coli, and the pyrrolysyl system, became the workhorses of the field. But notice that evolutionary distance only gives you conditions one, two and four. Condition three — accepting the ncAA while rejecting the natural twenty — is not something evolution provides, so the amino-acid binding pocket has to be put through directed evolution, which is the subject of Lecture 9. And the editing domain usually has to be removed as well, because that proofreading mechanism would treat your ncAA as an error and hydrolyse it. The frontier is multiplying these: Chin\'s group reported triply orthogonal pyrrolysyl pairs in 2020 and quintuply orthogonal pairs in 2023.',
    checklist: ['ncAA supplied in the medium; cell expresses the orthogonal pair', 'Orthogonal = mutually non-interfering', 'Condition 1: foreign aaRS charges only the foreign tRNA', 'Condition 2: foreign tRNA charged only by the foreign aaRS', 'Condition 3: foreign aaRS accepts only the ncAA', 'Condition 4: the anticodon reads a free codon (amber)', 'Pairs imported from evolutionarily distant organisms', 'Because identity elements are conserved among relatives and would cross-react', 'Archaea diverged from bacteria over billions of years', 'Workhorses: MjTyrRS in E. coli, EcLeuRS in eukaryotes, PylRS', 'Condition 3 needs directed evolution of the binding pocket', 'Editing domain often removed, or it hydrolyses the ncAA as an error', 'Frontier: Chin lab triply (2020) and quintuply (2023) orthogonal pairs']
  }
},

{
  id: '3-10',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.10',
  enTitle: 'Amber codon suppression',
  cnTitle: '琥珀密码子抑制',
  slides: 'L8 s.34–36',
  coverage: 'full',
  coverageNote: 'The choice of amber, the efficiency factors and the three RF1 solutions are on the slides. The competition framing, the causal chain from wanting to delete RF1 to needing genome recoding, and the origin of the name are beyond the slides.',
  summary: {
    en: 'Amber, TAG, is chosen because it is the least used codon in E. coli and the cell remains viable when it is reassigned, though at substantial fitness cost. Suppression efficiency ranges from 10 to 100 per cent, depending on sequence context, decoding efficiency, peptide bond formation, and competition with release factor 1. The three solutions to RF1 are mutating it, deleting it, or evolving an orthogonal ribosome that ignores it.',
    cn: '之所以选琥珀密码子 TAG，是因为它是大肠杆菌中使用最少的密码子，而且重新分配之后细胞仍能存活，尽管适合度损失可观。抑制效率在 10% 到 100% 之间，取决于序列上下文、解码效率、肽键形成，以及与释放因子 1 的竞争。对付 RF1 有三种办法：改造它、删除它，或者进化出一个不理会它的正交核糖体。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L8 s.34', src: 'img/figures/L8_s34_1.webp' },
    { slide: 'L8 s.35', src: 'img/figures/L8_s35_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '琥珀抑制的核心是一场**竞争**：核糖体走到 TAG 时，**RF1 想终止，你的正交 tRNA 想装 ncAA**——谁赢是概率问题。\n\n' +
            '这就是效率只有 **10–100%** 的根本原因，也是三条对策（改造 RF1 / 删掉 RF1 / 正交核糖体）全都指向 RF1 的原因。',
  skipIt: '琥珀/赭石/蛋白石这几个颜色名字的由来是个玩笑（来自 Harris Bernstein 的姓氏在德语里是「琥珀」），当趣闻就行。**第 7–8 讲没有 RECAP 可引**，这是判断——但**「跟 RF1 竞争」这条机制必须能讲**，三条对策都是从它推出来的。',
  explain: [
    {
      q: '为什么效率是一个范围（10–100%）而不是一个数？',
      a: '**因为这不是一个反应的收率，是一场竞争的胜率——而胜率取决于现场情况。**\n\n' +
         '**核糖体走到 TAG 的那一刻，两个分子在抢同一个位置：**\n\n' +
         '**释放因子 1（RF1）**：它识别 TAG，一旦结合就**把肽链切下来**——你得到一个**截短的产物**，在 TAG 那个位置就断了。\n\n' +
         '**你的正交 tRNA**：它带着 ncAA，一旦结合就**把 ncAA 装上去**，翻译继续往下走。\n\n' +
         '**谁先结合上，就谁赢。这是概率。**\n\n' +
         '**所以那四个影响因素其实都在改变这个概率：**\n\n' +
         '**序列上下文** —— TAG 前后的碱基会影响 RF1 和 tRNA 各自的结合难易。\n\n' +
         '**解码效率** —— 你的 tRNA 认 TAG 认得有多牢。\n\n' +
         '**肽键形成** —— 装上去之后，核糖体接得动接不动（想想第 3-6 节的脯氨酸）。\n\n' +
         '**跟 RF1 的竞争** —— 这是最直接的一条。\n\n' +
         '**一个很实用的推论**：同一套正交系统，**换一个插入位点，效率可能从 80% 掉到 20%**——因为上下文变了。所以做实验时**位点是要试的，不是算出来的**。\n\n' +
         '**还有一个很聪明的实操技巧：把 His 标签放在 C 端。**这样一来，**所有截短产物都没有标签**，一步亲和纯化就把它们全滤掉了。**你解决不了竞争，但你可以在下游把输家扔掉。**',
      takeaway: '这是 RF1 和你的 tRNA 抢同一个位置，胜率随上下文变。解决不了竞争，就把 His 标签放 C 端滤掉截短产物。'
    },
    {
      q: '三条对策为什么全都指向 RF1？它们分别激进到什么程度？',
      a: '**因为竞争只有两方，你没法让自己的 tRNA 快无限倍，那就只能削弱对方。**三条对策是同一个思路的三个激进程度：\n\n' +
         '**一、改造 RF1（治标）。**用识别 TAG 效率低的 RF1 突变体。竞争对手变弱了，你的胜率上升。**代价小，但也不彻底**——它还在那儿。\n\n' +
         '**二、删掉 RF1（治本，但代价很大）。**\n\n' +
         '**这里有一个必须想清楚的连锁反应：RF1 是必需基因。**为什么必需？因为基因组里有大量天然基因是用 TAG 结尾的——**删了 RF1，这些基因就全都停不下来。**\n\n' +
         '**所以要删 RF1，你必须先把基因组里每一个天然的 TAG 都换成 TAA。**\n\n' +
         '**而这就是全基因组重编码——Syn61 就是为此而建的**（第 3-12 节）。\n\n' +
         '**看清这条因果链，第 3-12 节就不再是一个孤立的技术展示了：**「想删 RF1」→「必须先清空所有天然 TAG」→「所以要重写整个基因组」。**Syn61 是被这个需求逼出来的。**\n\n' +
         '**三、正交核糖体（绕开）。**造一套只读你的 mRNA 的翻译系统，**它压根不理会 RF1**。宿主的核糖体照常工作、照常被 RF1 服务，两套系统各干各的。这是第 3-11 节的内容。\n\n' +
         '**三条对策：削弱它、消灭它、绕开它。**这个「治标 / 治本 / 换赛道」的三段结构，在工程问题里到处都是。',
      takeaway: '削弱、消灭、绕开。而「消灭」这一条会连锁地逼出全基因组重编码——Syn61 就是这么被逼出来的。'
    },
    {
      q: '为什么偏偏选 TAG，不选别的密码子？',
      a: '**因为它是「代价最小的那个空位」，而且自然界已经示范过可以这么用。**\n\n' +
         '**理由一：它是 E. coli 里使用最少的密码子。**\n\n' +
         '想清楚这意味着什么：你征用一个密码子，就等于**把基因组里所有用到它的地方都变成了「装 ncAA」的位置**。用得越多，破坏越大。TAG 用得最少，所以损伤最小。\n\n' +
         '**理由二（实测的）：重新分配之后，E. coli 仍然能活。**\n\n' +
         '幻灯片老实地加了一句：**虽然适合度损失可观。**也就是说细胞活着，但长得不好。**这是一个诚实的表述，值得学**——它没有说「没有影响」。\n\n' +
         '**理由三，也是最漂亮的一条：自然界已经这么干过了。**\n\n' +
         '**TGA 在 SECIS 元件存在时编码硒代半胱氨酸**（第 21 种氨基酸）。\n\n' +
         '**TAG 在某些古菌里编码吡咯赖氨酸**（第 22 种氨基酸）。\n\n' +
         '**注意第二条的分量：自然界已经造好了一套「用 TAG 编码一个非标准氨基酸」的正交系统。**\n\n' +
         '**这就是 PylRS 系统为什么是那么好的工程起点**（第 3-9 节）——你不是从零开始，你是接手了一个已经在运行的方案。\n\n' +
         '**又一次是那条老规律：先问一句，有没有哪个生物已经解决了这道题。**exendin-4、ccdB、λ 整合酶、2µ 质粒、T7 聚合酶——现在再加上 PylRS。',
      takeaway: '用得最少所以破坏最小，实测能活（但适合度有损），而且自然界已经用 TAG 编码吡咯赖氨酸——现成的方案。'
    }
  ],
  points: [
    { term: 'Why amber', en: 'It is the least used codon in E. coli, and E. coli remains viable if it is reassigned — though it suffers substantial loss of fitness.', cn: '它是大肠杆菌中使用最少的密码子，而且被重新分配后大肠杆菌仍能存活——尽管适合度损失可观。' },
    { term: 'Efficiency range', en: '10 to 100 per cent, depending on several factors.', cn: '10% 到 100%，取决于若干因素。' },
    { term: 'Factor — sequence context', en: 'The context of the amber codon within the gene.', cn: '琥珀密码子在基因中所处的序列上下文。' },
    { term: 'Factor — decoding', en: 'The efficiency with which the tRNA decodes it.', cn: 'tRNA 解码它的效率。' },
    { term: 'Factor — peptide bond formation', en: 'How readily the ribosome forms the bond with the preceding amino acids.', cn: '核糖体与前面的氨基酸形成肽键的难易程度。' },
    { term: 'Factor — RF1 competition', en: 'Competition with release factor 1, which recognises TAG in E. coli.', cn: '与释放因子 1 的竞争——在大肠杆菌中它识别 TAG。' },
    { term: 'Solution one', en: 'Mutants of RF1 that do not efficiently recognise the amber codon.', cn: '改造出不能高效识别琥珀密码子的 RF1 突变体。' },
    { term: 'Solution two', en: 'RF1 deleted from E. coli entirely.', cn: '把 RF1 从大肠杆菌中彻底删除。' },
    { term: 'Solution three', en: 'Evolution of an orthogonal ribosome that no longer efficiently recognises RF1.', cn: '进化出一个不再高效识别 RF1 的正交核糖体。' }
  ],
  beyondPoints: [
    { term: 'The core conflict is a competition', en: 'When the ribosome reaches TAG, two molecules compete. Release factor 1 recognises TAG, cuts the chain, and the product is truncated there. Your orthogonal tRNA carries the ncAA, installs it, and translation continues. Which wins is probabilistic, and that is the fundamental reason efficiency is only 10 to 100 per cent.', cn: '当核糖体走到 TAG 时，有两个分子在竞争。释放因子 1 识别 TAG、切断肽链，产物就在此截断。你的正交 tRNA 携带 ncAA，把它装进去，翻译继续。谁赢是概率问题，这正是效率只有 10–100% 的根本原因。' },
    { term: 'A practical trick for the truncated fraction', en: 'Put the His-tag at the C-terminus. Then the truncated products have no tag and are removed in a single purification step.', cn: '把 His 标签放在 C 端。这样截断产物就没有标签，一步纯化就能滤掉。' },
    { term: 'The three solutions map onto three levels', en: 'Mutating RF1 lowers its recognition of TAG, which treats the symptom. Deleting RF1 is more radical but RF1 is an essential gene, so it can only be removed once every native TAG in the genome has been changed to TAA. An orthogonal ribosome sidesteps both by building a translation system that only reads your mRNA and ignores RF1.', cn: '三种解法对应三个层次。改造 RF1 降低它对 TAG 的识别能力，这是治标。直接删掉 RF1 更彻底，但 RF1 是必需基因，只有把基因组里所有天然 TAG 都换成 TAA 之后才能删。正交核糖体则绕开前两者，造一套只翻译你的 mRNA、不理会 RF1 的翻译系统。' },
    { term: 'The causal chain worth tracing', en: 'Wanting to delete RF1 forces you to clear every TAG from the genome first, which requires whole-genome recoding. Syn61 was built precisely for this purpose.', cn: '想删 RF1 → 必须先清空基因组里所有 TAG → 需要全基因组重编码。Syn61 正是为此而造的。' },
    { term: 'Where the name comes from', en: 'The names have nothing to do with chemistry. The amber mutation was named after Harris Bernstein, whose surname means amber in German — he was the student who helped discover it. Once one stop codon had a colour name, the other two followed: ochre for TAA and opal or umber for TGA.', cn: '这些名字与化学毫无关系。琥珀突变是以 Harris Bernstein 命名的，他姓氏在德语里就是「琥珀」的意思，他是协助发现该突变的学生。既然一个终止密码子有了颜色名，另外两个也就跟上了：TAA 叫赭石（ochre），TGA 叫蛋白石（opal）或棕土（umber）。' },
    { term: 'Nature already does this', en: 'TGA encodes selenocysteine, the 21st amino acid, when read in the presence of a SECIS element. And pyrrolysine, the 22nd, is encoded by TAG in some archaea — which is exactly why the PylRS system is such a good engineering starting point: nature already built an orthogonal amber-decoding system.', cn: '自然界本来就在做这件事。TGA 在有 SECIS 元件时编码硒代半胱氨酸（第 21 种氨基酸）。而吡咯赖氨酸（第 22 种）在某些古菌中由 TAG 编码——这正是 PylRS 系统成为绝佳改造起点的原因：自然已经造好了一套解读琥珀密码子的正交系统。' }
  ],
  terms: [
    { en: 'Amber codon', cn: '琥珀密码子', def_en: 'TAG, the least used stop codon in E. coli and therefore the standard target for reassignment to a non-canonical amino acid.', def_cn: 'TAG，大肠杆菌中使用最少的终止密码子，因而是重新分配给非天然氨基酸的标准目标。' },
    { en: 'Release factor 1 (RF1)', cn: '释放因子 1', def_en: 'The protein that recognises TAG and terminates translation. It is your orthogonal tRNA\'s direct competitor, and an essential gene until the genome is recoded.', def_cn: '识别 TAG 并终止翻译的蛋白。它是你的正交 tRNA 的直接竞争者，而且在基因组重编码之前是必需基因。' },
    { en: 'Amber suppression', cn: '琥珀抑制', def_en: 'Reading TAG as an amino acid rather than as a stop signal, by supplying a tRNA whose anticodon matches it.', def_cn: '通过提供反密码子与之匹配的 tRNA，把 TAG 读作氨基酸而不是终止信号。' },
    { en: 'Selenocysteine and pyrrolysine', cn: '硒代半胱氨酸与吡咯赖氨酸', def_en: 'The 21st and 22nd amino acids, encoded naturally by TGA (with a SECIS element) and by TAG in some archaea respectively — natural precedents for codon reassignment.', def_cn: '第 21 和第 22 种氨基酸，分别由 TGA（配合 SECIS 元件）和某些古菌中的 TAG 天然编码——这是密码子重新分配的天然先例。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What competes with your orthogonal tRNA at a TAG codon?',
      q_cn: '在 TAG 密码子处，是什么在与你的正交 tRNA 竞争？',
      options: ['Release factor 1', 'The ribosome recycling factor', 'A host tRNA', 'Elongation factor Tu'],
      answer: 0,
      optionNotes: {
        1: { en: 'RRF and RF1 act at different steps and are easy to swap. RF1 reads the stop codon itself and hydrolyses the peptide off the tRNA; RRF acts only afterwards, splitting the already emptied ribosome into subunits. Only the factor that reads TAG can compete for it.', cn: 'RRF 和 RF1 作用在不同步骤，很容易对调。RF1 直接识别终止密码子，把肽链从 tRNA 上水解下来；RRF 只在这之后起作用，把已经空掉的核糖体拆成亚基。能在 TAG 上跟你竞争的，只有读 TAG 的那一个。' }
      },
      why_en: 'RF1 recognises TAG in E. coli and terminates translation there, truncating the product. Which one wins is probabilistic, and that competition is why suppression efficiency ranges from 10 to 100 per cent.',
      why_cn: 'RF1 在大肠杆菌中识别 TAG 并在此终止翻译，产物被截断。谁赢是概率问题，这个竞争正是抑制效率在 10–100% 之间波动的原因。' },
    { type: 'mcq',
      q_en: 'Why can RF1 only be deleted after genome recoding?',
      q_cn: '为什么只有在基因组重编码之后才能删除 RF1？',
      options: ['RF1 is required for assembly of the 50S ribosomal subunit', 'RF1 stays essential until every native TAG has been changed to TAA', 'No deletion method works on the RF1 locus before recoding', 'RF1 is part of the defence against incoming phage'],
      answer: 1,
      why_en: 'While native genes still end in TAG, RF1 is the only thing terminating them, so deleting it is lethal. Clearing every TAG from the genome first is exactly why Syn61 was built.',
      why_cn: '只要还有天然基因以 TAG 结尾，RF1 就是唯一能终止它们的东西，删掉它就是致命的。先把基因组里所有 TAG 清空——这正是 Syn61 被造出来的原因。' },
    { type: 'mcq',
      q_en: 'Why was the amber codon chosen for reassignment?',
      q_cn: '为什么选择琥珀密码子来做重新分配？',
      options: ['It is the most used of the three stop codons in E. coli', 'It is the least used codon in E. coli and reassignment is survivable', 'It is read by two different release factors, RF1 and RF2', 'It already encodes selenocysteine, the natural 21st amino acid, in some organisms'],
      answer: 1,
      optionNotes: {
        3: { en: 'The natural precedent is real but attached to the wrong codon. Selenocysteine is read from TGA in the presence of a SECIS element; the amino acid encoded by TAG in some archaea is the 22nd one, pyrrolysine — which is exactly why PylRS is such a convenient engineering starting point.', cn: '天然先例确实存在，只是挂到了错的密码子上。selenocysteine 是在有 SECIS 元件时由 TGA 读出来的；由 TAG 编码的是第 22 种氨基酸 pyrrolysine，存在于某些 archaea 里——这也正是 PylRS 成为好用的改造起点的原因。' }
      },
      why_en: 'Least used means fewest native genes disrupted by the reassignment. E. coli survives it, though with substantial fitness cost. TAA is the most used stop codon and cannot be spared; TGA is the one that naturally encodes selenocysteine.',
      why_cn: '使用最少意味着重新分配会打断最少的天然基因。大肠杆菌能挺过去，尽管适合度损失可观。TAA 是使用最多的终止密码子、腾不出来；天然编码硒代半胱氨酸的是 TGA。' },
    { type: 'short',
      q_en: 'Name three solutions to the RF1 problem and say what level each operates at.',
      q_cn: '说出解决 RF1 问题的三种办法，并说明各自作用在哪个层次。',
      accept: ['mutate', 'delete', 'orthogonal ribosome', 'essential', 'recoding'],
      answer_en: 'The first is to use mutants of RF1 that do not efficiently recognise the amber codon. That treats the symptom — you weaken the competitor without removing it, and suppression efficiency improves but the competition still exists. The second is to delete RF1 from E. coli entirely, which is the radical solution, but RF1 is an essential gene: as long as native genes still terminate at TAG, removing it is lethal. So it can only be done after every native TAG in the genome has been changed to TAA, which requires whole-genome recoding — and that is precisely why Syn61 was built. The third is to evolve an orthogonal ribosome that no longer efficiently recognises RF1, which sidesteps the problem entirely by building a parallel translation system that reads only your mRNA and ignores the release factor, leaving the host\'s own translation untouched.',
      answer_cn: '第一是使用不能高效识别琥珀密码子的 RF1 突变体。这是治标——你削弱了竞争者但没有清除它，抑制效率提高了但竞争依然存在。第二是把 RF1 从大肠杆菌中彻底删除，这是激进的解法，但 RF1 是必需基因：只要还有天然基因以 TAG 终止，删掉它就是致命的。所以只有在把基因组里所有天然 TAG 都换成 TAA 之后才能做，而这需要全基因组重编码——Syn61 正是为此而造的。第三是进化出一个不再高效识别 RF1 的正交核糖体，这等于完全绕开问题：造一套平行的翻译系统，只读你的 mRNA、不理会释放因子，同时宿主自身的翻译完全不受影响。'
    }
  ],
  oral: {
    q_en: 'Explain amber suppression and the problem you have to solve to make it efficient.',
    q_cn: '解释琥珀抑制，以及要让它高效必须解决的问题。',
    model_en: 'Amber is TAG, and it is chosen for reassignment because it is the least used codon in E. coli — so reassigning it disrupts the fewest native genes — and because E. coli remains viable when it is reassigned, though it does suffer a substantial loss of fitness. Suppression efficiency runs anywhere from ten to a hundred per cent, depending on the sequence context of the amber codon within the gene, the efficiency with which your tRNA decodes it, how readily the ribosome forms the peptide bond with the preceding residues, and competition with release factor one. That last factor is the core problem, and it is worth framing as a race. When the ribosome arrives at TAG, two molecules are competing for it: release factor one, which recognises TAG, cuts the chain and leaves you a truncated product; and your orthogonal tRNA, which carries the ncAA, installs it and lets translation continue. Which one wins is probabilistic, and that is fundamentally why efficiency is not a hundred per cent. A useful practical trick for the fraction you lose is to put the His-tag at the C-terminus, so truncated products carry no tag and are removed in a single purification step. There are three solutions, operating at three levels. You can use RF1 mutants that recognise TAG poorly, which weakens the competitor without removing it. You can delete RF1 outright — but RF1 is an essential gene, so this only becomes possible once every native TAG in the genome has been changed to TAA, which requires whole-genome recoding, and that causal chain is exactly why Syn61 was built. Or you can evolve an orthogonal ribosome that no longer recognises RF1, sidestepping the competition by running a parallel translation system. One historical aside worth knowing: the name has nothing to do with chemistry — the amber mutation was named after Harris Bernstein, whose surname means amber in German, and once one stop codon had a colour name the other two followed as ochre and opal.',
    checklist: ['Amber is TAG: least used codon in E. coli, cell stays viable when reassigned', 'But substantial fitness cost', 'Efficiency 10-100%, four factors', 'Factors: sequence context, decoding efficiency, peptide bond formation, RF1', 'The core problem is a competition at the TAG codon', 'RF1 recognises TAG, cuts the chain, truncated product', 'Your tRNA installs the ncAA and translation continues', 'Probabilistic, hence sub-100% efficiency', 'Trick: put the His-tag at the C-terminus to remove truncated products', 'Solution 1: RF1 mutants — treats the symptom', 'Solution 2: delete RF1 — but essential until all native TAGs are gone', 'Hence whole-genome recoding, hence Syn61', 'Solution 3: orthogonal ribosome that ignores RF1']
  }
},

{
  id: '3-11',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.11',
  enTitle: 'Quadruplet codons and the orthogonal ribosome',
  cnTitle: '四联体密码子与正交核糖体',
  slides: 'L8 s.38–39',
  coverage: 'full',
  coverageNote: 'The arithmetic, the frameshift problem and ribo-Q are on the slides. Why the natural ribosome cannot be used, and how ribo-Q achieves a parallel translation system, is the beyond-the-slides explanation — and it generalises orthogonality from the synthetase level to the ribosome level.',
  summary: {
    en: 'Expanding a codon from three bases to four gives 64 times 4, or 256, possible quadruplet codons, assigned via frameshift suppressor tRNAs with extended anticodons. But the natural ribosome cannot decode them — it would frameshift. An orthogonal ribosome, ribo-Q, was created to decode both quadruplet and amber codons, and combining two quadruplets with one amber has allowed up to three distinct ncAAs to be incorporated.',
    cn: '把密码子从 3 个碱基扩展到 4 个，得到 64×4 = 256 个可能的四联体密码子，通过带扩展反密码子的移码抑制型 tRNA 来分配。但天然核糖体解不了它们——会发生移码。于是造出了正交核糖体 ribo-Q，它能同时解读四联体密码子和琥珀密码子；把两个四联体加一个琥珀组合起来，已经实现了装入最多三种不同的 ncAA。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L8 s.38', src: 'img/figures/L8_s38_1.webp' },
    { slide: 'L8 s.39', src: 'img/figures/L8_s39_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '四联体密码子是**凭空造出 256 个新空位**，但**天然核糖体解不了它们——它会移码**。\n\n' +
            '所以必须配一个**正交核糖体（ribo-Q）**：靠改掉反 SD 序列，让它只读你的 mRNA，于是一个细胞里**两套核糖体各干各的**。',
  skipIt: '256 这个数字的算法（64×4）看一眼就懂，不用背。**第 7–8 讲没有 RECAP 可引**，这是判断——但「为什么天然核糖体会移码」和「正交核糖体靠什么隔离」这两条要能讲。',
  explain: [
    {
      q: '为什么天然核糖体解不了四联体密码子？',
      a: '**因为它的解码中心被进化打磨成了严格三个碱基一步——而这正是阅读框稳定性的来源。**\n\n' +
         '核糖体每次前进的步长必须精确地是 3 个碱基。**差一个碱基，后面所有密码子就全错位了**（回到第 1-4-2 节内含子那条：移码之后是一串乱码加上提前终止）。\n\n' +
         '**所以「严格三步」不是一个可调的参数，它是翻译准确性的根基。**几十亿年的选择压力全都在加强它。\n\n' +
         '**现在你给它一条反密码子有四个碱基的 tRNA。**\n\n' +
         '核糖体最可能的反应是：**照旧走三步。**于是这条 tRNA 虽然配上了，核糖体却只前进了 3 位——**从这里开始阅读框就滑了，后面全是垃圾。**\n\n' +
         '**这就是「frameshift suppressor（移码抑制型 tRNA）」这个名字的由来**：它本来是用来「抑制」一个移码突变的（在移码突变处读四个碱基，把框读回来）。**这里是反过来用它：主动制造一次受控的四碱基读取。**\n\n' +
         '**但天然核糖体做不好这件事**——它有时读四位、有时读三位，结果是一锅混合产物。\n\n' +
         '**所以你不能只换 tRNA，还得换核糖体。**这就是 ribo-Q 存在的理由。',
      takeaway: '严格三碱基一步是阅读框稳定性的根基，进化打磨了几十亿年。所以光给它四碱基 tRNA，它会照旧走三步。'
    },
    {
      q: 'ribo-Q 靠什么做到「只读你的 mRNA」？',
      trace: {
        what: '**Shine-Dalgarno（SD）序列**是 mRNA 上、起始密码子上游的一小段序列；**反 SD 序列（anti-SD）**是 16S rRNA 上与它互补配对的一段。两者配对，核糖体才能在正确的位置坐下来开始翻译。',
        from: '这对「暗号」是细菌核糖体找到起始位点的天然机制——正常情况下，全细胞只有一套 SD/反 SD，所有 mRNA 和所有核糖体用的是同一套密码。',
        to: 'ribo-Q 的正交核糖体把这套暗号**改掉重配**：16S rRNA 上换一套新的反 SD，配上你自己 mRNA 上相应改过的 SD，于是天然核糖体和正交核糖体在同一个细胞里各读各的、互不干扰。',
        family: '它就是第 3-7 节最小模板里那个 **RBS（核糖体结合位点）** 的细菌版实现；同类「改暗号来隔离」的还有第 3-9 节的正交 aaRS/tRNA 对、第 2-8 节的 T7 系统。'
      },
      a: '**靠改掉核糖体和 mRNA 之间那个「对暗号」的环节。**\n\n' +
         '在细菌里，核糖体找到起始位点靠的是一对互补序列：\n\n' +
         'mRNA 上有 **Shine-Dalgarno（SD）序列**；\n\n' +
         '16S rRNA 上有对应的 **反 SD 序列**。\n\n' +
         '**两者碱基互补配对，核糖体就在这里坐下来开始翻译。**这就是第 3-7 节最小模板里那个 RBS（核糖体结合位点）。\n\n' +
         '**ribo-Q 的做法是：把 16S rRNA 上的反 SD 序列改掉，同时在你的 mRNA 上放一个配套的、改过的 SD 序列。**\n\n' +
         '于是暗号变成了一对新的：\n\n' +
         '**天然核糖体**（原版反 SD）→ 只认得**天然 mRNA**（原版 SD）→ 照常翻译宿主的基因，严格三碱基一步。\n\n' +
         '**正交核糖体**（改版反 SD）→ 只认得**你的 mRNA**（改版 SD）→ 而它被改造成能读四联体密码子。\n\n' +
         '**一个细胞里两套核糖体，各干各的，互不干扰。**\n\n' +
         '**关键的收益是：宿主的翻译完全不受影响，所以细胞活得好好的。**\n\n' +
         '如果你直接把所有核糖体都改成能读四联体的，宿主自己那几千个基因立刻全部翻译出错——细胞死。**正交化让你可以在一个活细胞里做一件本来会致命的事。**',
      takeaway: '改掉 16S rRNA 的反 SD 序列和你 mRNA 的 SD 序列，配成一对新暗号。宿主翻译不受影响，所以细胞活得下来。'
    },
    {
      q: '「正交」这个思路在这一讲里出现了几次？',
      a: '**三次，而且是层层往上升级的——把这条线看出来，这一讲就串起来了。**\n\n' +
         '**第一层：正交的 aaRS/tRNA 对**（第 3-9 节）。在**分子对**这个层面做隔离：一对外来的酶和 tRNA，跟宿主那 20 对互不认识。\n\n' +
         '**第二层：正交的密码子**（第 3-10 节的 TAG，第 3-11 节的四联体）。在**编码**这个层面做隔离：找一个宿主不用的密码子，或者干脆造一个宿主体系里不存在的。\n\n' +
         '**第三层：正交的核糖体**（ribo-Q，这一节）。在**整台机器**这个层面做隔离：一套只读你的 mRNA 的翻译系统。\n\n' +
         '**每一层解决的都是同一个问题：你要在一个活细胞里改规则，而细胞自己还得照常运转。**\n\n' +
         '**而每往上升一层，你能做的改动就更激进，代价也更大。**\n\n' +
         '**这个思路本身值得记住，因为它超出这一讲：**\n\n' +
         '第 1-9 节质粒的不相容性（要共存就要不同 ORI）、第 2-8 节 T7 系统（T7 聚合酶只读 T7 启动子，宿主聚合酶读不了）——**都是同一件事：在一个共享的环境里开辟一条互不干扰的独立通道。**\n\n' +
         '**「正交」是这门课最通用的一个工程概念，值得单独记一笔。**',
      takeaway: '分子对 → 密码子 → 整台核糖体，三层隔离。T7 系统和质粒不相容性也是同一个概念。'
    }
  ],
  points: [
    { term: 'The arithmetic', en: 'There are 64 times 4, that is 256, possible quadruplet codons.', cn: '共有 64×4 = 256 个可能的四联体密码子。' },
    { term: 'How they are assigned', en: 'Via frameshift suppressors — tRNAs with extended anticodons.', cn: '通过移码抑制型 tRNA——带有扩展反密码子的 tRNA。' },
    { term: 'The obstacle', en: 'This does not work with the natural ribosome, because it would lead to frameshifts.', cn: '这在天然核糖体上行不通，因为会导致移码。' },
    { term: 'Ribo-Q', en: 'An orthogonal ribosome created to decode both quadruplet and amber codons.', cn: '一个被造出来的正交核糖体，能同时解读四联体密码子和琥珀密码子。' },
    { term: 'The result', en: 'Up to three distinct ncAAs incorporated, by combining two quadruplet codons with one amber codon.', cn: '通过组合两个四联体密码子和一个琥珀密码子，已实现装入最多三种不同的 ncAA。' }
  ],
  beyondPoints: [
    { term: 'Why the natural ribosome frameshifts', en: 'The decoding centre has been optimised over billions of years to move in strict three-base steps. Give it a tRNA with a four-base anticodon and it will most likely slip the frame, misreading every downstream codon and producing nothing but garbage.', cn: '天然核糖体的解码中心经过几十亿年的优化，是严格按三个碱基一组移动的。给它一个四碱基反密码子的 tRNA，它多半会滑框，读错后面所有密码子，产物全是垃圾。' },
    { term: 'How ribo-Q solves it', en: 'By building a parallel ribosome system. The anti-Shine-Dalgarno sequence of the 16S rRNA is modified so the ribosome recognises only a special orthogonal ribosome binding site. Natural ribosomes then translate only host mRNA with normal triplet decoding, so the cell survives normally, while orthogonal ribosomes translate only your mRNA and are engineered to accommodate quadruplet decoding.', cn: '办法是造一套平行的核糖体系统。改造 16S rRNA 的反 SD 序列，让这种核糖体只识别一种特殊的正交核糖体结合位点。于是天然核糖体只翻译宿主 mRNA、照常做三联体解码，细胞正常存活；而正交核糖体只翻译你的 mRNA，并被改造成能容纳四联体解码。' },
    { term: 'Two ribosome populations, one cell', en: 'They coexist and do different jobs, which lets you run radical decoding experiments without collapsing the host\'s own translation. This is the orthogonality idea generalised from the synthetase and tRNA level up to the ribosome itself.', cn: '两套核糖体在同一个细胞里各干各的，这样既能做激进的解码实验，又不至于把宿主自身的翻译搞崩。这是把「正交」的思想从 aaRS/tRNA 层面推广到核糖体层面的结果。' }
  ],
  terms: [
    { en: 'Frameshift suppressor', cn: '移码抑制型 tRNA', def_en: 'A tRNA with an extended, four-base anticodon that reads a quadruplet codon. It requires a ribosome able to step four bases without losing the frame.', def_cn: '带有四碱基扩展反密码子、能读取四联体密码子的 tRNA。它需要一个能一次前进四个碱基而不丢失阅读框的核糖体。' },
    { en: 'Ribo-Q', cn: '正交核糖体 ribo-Q', def_en: 'An engineered orthogonal ribosome that decodes quadruplet as well as amber codons, and translates only mRNAs bearing a matching orthogonal ribosome binding site.', def_cn: '一种改造过的正交核糖体，能解读四联体密码子和琥珀密码子，并且只翻译带有相匹配正交核糖体结合位点的 mRNA。' },
    { en: 'Anti-Shine-Dalgarno sequence', cn: '反 SD 序列', def_en: 'The 16S rRNA sequence that pairs with the ribosome binding site on an mRNA. Modifying it is what makes an orthogonal ribosome read only its own dedicated messages.', def_cn: '16S rRNA 上与 mRNA 核糖体结合位点配对的序列。改造它正是让正交核糖体只读自己专属信息的手段。' },
    { en: 'Decoding centre', cn: '解码中心', def_en: 'The region of the ribosome that checks codon-anticodon pairing and enforces the three-base step. Its strictness is why quadruplet decoding needs an engineered ribosome.', def_cn: '核糖体上检查密码子–反密码子配对并维持三碱基步进的区域。它的严格性正是四联体解码需要改造核糖体的原因。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How many quadruplet codons are theoretically possible?',
      q_cn: '理论上有多少个四联体密码子？',
      options: ['64', '128', '256', '1,024'],
      answer: 2,
      why_en: '64 times 4, which is 256. Adding a fourth position multiplies the existing 64 triplets by the four possible bases at that new position.',
      why_cn: '64×4 = 256。增加第四个位置，就是把原有的 64 个三联体乘以那个新位置上 4 种可能的碱基。' },
    { type: 'mcq',
      q_en: 'Why does quadruplet decoding require an orthogonal ribosome?',
      q_cn: '为什么四联体解码需要正交核糖体？',
      options: ['The natural ribosome decodes too slowly for a four-base codon', 'The natural decoding centre moves in strict three-base steps and frameshifts', 'A tRNA with a four-base anticodon is too large to enter the A site', 'The natural ribosome has no E site to release the used tRNA'],
      answer: 1,
      why_en: 'The strict three-base step is the product of billions of years of optimisation. A four-base anticodon slips the frame and every downstream codon is misread, so a purpose-built ribosome is needed.',
      why_cn: '严格的三碱基步进是几十亿年优化的产物。四碱基反密码子会让阅读框滑动，后面所有密码子都读错，所以需要一个专门造的核糖体。' },
    { type: 'mcq',
      q_en: 'How does ribo-Q avoid disrupting the host\'s own translation?',
      q_cn: 'ribo-Q 怎么做到不干扰宿主自身的翻译？',
      options: ['It is expressed only in a short pulse, then diluted out', 'Its anti-Shine-Dalgarno sequence is changed to match only your own mRNAs', 'It is confined to the periplasm, where no host mRNA reaches it', 'It only functions at low temperature, unlike the host ribosome'],
      answer: 1,
      why_en: 'Two ribosome populations coexist: natural ones translating host mRNA with normal triplet decoding, and orthogonal ones translating only your messages. That separation is what lets radical decoding experiments run in a living cell.',
      why_cn: '两群核糖体共存：天然的翻译宿主 mRNA、照常做三联体解码，正交的只翻译你的信息。正是这种分隔让激进的解码实验能在活细胞里进行。' },
    { type: 'short',
      q_en: 'Explain why ribo-Q is the orthogonality idea applied at a new level.',
      q_cn: '解释为什么 ribo-Q 是把正交思想应用到了一个新层次。',
      accept: ['orthogonal', 'parallel', 'anti-SD', 'host translation', 'ribosome level'],
      answer_en: 'Orthogonality originally meant an imported synthetase and tRNA that do not cross-react with the host\'s twenty synthetases and their tRNAs — two parallel systems at the level of charging. Ribo-Q takes exactly the same idea one level up, to the ribosome itself. Its anti-Shine-Dalgarno sequence in the 16S rRNA is modified so that it recognises only a special orthogonal ribosome binding site, which means it translates only the messages you designed for it. Natural ribosomes continue translating host mRNA with ordinary triplet decoding, so the cell lives normally, while the orthogonal ribosomes translate only your mRNA and can be engineered to do things a natural ribosome could never survive doing — such as stepping four bases at a time. Two ribosome populations coexist in one cell, each doing its own job, and that separation is precisely what allows radical decoding experiments without collapsing the host\'s own protein synthesis.',
      answer_cn: '正交性最初指的是引入的合成酶和 tRNA 不与宿主那 20 种合成酶及其 tRNA 交叉反应——这是在「充电」这个层面上的两套平行系统。ribo-Q 把完全相同的思路提升了一个层次，用到了核糖体本身。它的 16S rRNA 上的反 SD 序列被改造，使它只识别一种特殊的正交核糖体结合位点，也就是说它只翻译你为它设计的信息。天然核糖体继续用普通的三联体解码翻译宿主 mRNA，所以细胞正常存活；而正交核糖体只翻译你的 mRNA，并且可以被改造去做天然核糖体绝不可能承受的事情——比如一次前进四个碱基。两群核糖体在同一个细胞里共存、各司其职，正是这种分隔让激进的解码实验得以进行而不会搞垮宿主自身的蛋白合成。'
    }
  ],
  oral: {
    q_en: 'How would you incorporate more than one non-canonical amino acid in a living cell?',
    q_cn: '在活细胞里怎么装入一种以上的非天然氨基酸？',
    model_en: 'The problem is that there is only one amber codon, so once you have spent it on your first ncAA there is nothing left for a second. One answer is quadruplet codons. If you expand a codon from three bases to four, you get sixty-four times four, that is two hundred and fifty-six possible codons, conjured out of nothing — and they can be assigned using frameshift suppressors, which are tRNAs carrying extended four-base anticodons. But this does not work with the natural ribosome, and the reason is worth stating: the decoding centre has been optimised over billions of years to move in strict three-base steps, so handing it a four-base anticodon makes it slip the frame, misreading every downstream codon and producing garbage. The solution was to create an orthogonal ribosome, ribo-Q, able to decode both quadruplet and amber codons. The way ribo-Q achieves this without wrecking the cell is elegant, and it is the orthogonality idea from earlier in the lecture applied at a new level. Its anti-Shine-Dalgarno sequence in the 16S rRNA is modified so it recognises only a special orthogonal ribosome binding site. So you end up with two ribosome populations coexisting in one cell: natural ribosomes translating host mRNA with normal triplet decoding, keeping the cell alive, and orthogonal ribosomes translating only your messages and engineered to handle four-base steps. Combining two quadruplet codons with one amber codon has allowed up to three distinct ncAAs to be incorporated into a single protein. The alternative route to the same goal is codon compression, which frees up existing codons rather than inventing new ones.',
    checklist: ['Problem: only one amber codon, so no room for a second ncAA', 'Quadruplet codons: 64 x 4 = 256 possible', 'Assigned by frameshift suppressors — tRNAs with extended anticodons', 'Natural ribosome cannot do this: it would frameshift', 'Because the decoding centre steps strictly three bases at a time', 'Solution: ribo-Q, an orthogonal ribosome for quadruplet and amber codons', 'Mechanism: modified anti-Shine-Dalgarno recognises only an orthogonal RBS', 'Natural ribosomes keep translating host mRNA normally', 'Orthogonal ribosomes translate only your mRNA', 'Two populations, one cell, each doing its own job', 'Result: up to 3 ncAAs from 2 quadruplets + 1 amber', 'Orthogonality generalised from synthetase level to ribosome level']
  }
},

{
  id: '3-12',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.12',
  enTitle: 'Codon compression — Syn61 and Syn57',
  cnTitle: '密码子压缩——Syn61 与 Syn57',
  slides: 'L8 s.40–41',
  coverage: 'full',
  coverageNote: 'The two-step recipe and both strain tables are on the slides. One correction is needed: the slide attributes virus resistance to Syn61, but it belongs to the follow-up strain Syn61 delta 3. Why that deletion confers resistance is beyond the slides and is the most striking result in the lecture.',
  summary: {
    en: 'Cells use 64 codons but many are redundant. Codon compression frees some in two steps: replace a subset of sense codons genome-wide with their synonyms, then delete the tRNAs that decoded them. Syn61 re-synthesised the whole 4-megabase E. coli genome, recoding 18,214 codons and losing only 1.6-fold in growth rate. Syn57 went further, removing seven codons across more than 100,000 changes, at a 4-fold fitness cost.',
    cn: '细胞用 64 个密码子，但很多是冗余的。密码子压缩分两步腾出一些：在全基因组范围把一部分有义密码子换成同义密码子，然后删掉解码它们的 tRNA。Syn61 重新合成了整个 4 兆碱基的大肠杆菌基因组，重编码了 18214 个密码子，生长速度只慢了 1.6 倍。Syn57 走得更远，通过超过 10 万处改动移除了 7 个密码子，代价是适合度下降 4 倍。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L8 s.40', src: 'img/figures/L8_s40_1.webp' },
    { slide: 'L8 s.41', src: 'img/figures/L8_s41_1.webp' },
    { slide: 'L8 s.41', src: 'img/figures/L8_s41_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '两步：**先在全基因组把某些密码子换成同义的，再把解码它们的 tRNA 删掉**——于是那些密码子彻底空出来。\n\n' +
            '而删掉 tRNA 之后会白送一个**遗传防火墙**：噬菌体的基因组读不了了，同时你的基因也传不出去。',
  skipIt: '18,214 / 100,000 这些改动数目、以及两篇论文的作者年份，不用背。**第 7–8 讲没有 RECAP 可引**，这是判断——但**「腾密码子的代价随数量上升」这条趋势要记**（三个密码子慢 1.6 倍，七个慢 4 倍），它是这个领域的中心矛盾。',
  explain: [
    {
      q: '为什么必须分两步？只换密码子不够吗？',
      a: '**不够，而且这两步的区别正是「遗传防火墙」的来源，值得想清楚。**\n\n' +
         '**第一步：全基因组把 TCG、TCA 换成同义的 AGC、AGT。**\n\n' +
         '做完这一步，Syn61 的基因组里**再也没有 TCG 和 TCA 了**。但注意——**解码它们的 tRNA 还在细胞里。**\n\n' +
         '所以此刻的状态是：**「我不用这两个密码子了，但我仍然读得懂它们。」**\n\n' +
         '**第二步：把那两个 tRNA 删掉。**\n\n' +
         '现在状态变成：**「这两个密码子我不但不用，而且读不懂了。」**\n\n' +
         '**只有做完第二步，那两个密码子才真正空出来可以重新分配**——否则你把 ncAA 指派给 TCG，天然 tRNA 还会来抢。\n\n' +
         '**而「读不懂」这件事顺带产生了一个谁也没订购的好处：**\n\n' +
         '一个噬菌体感染进来，它的基因组用的是**标准密码表**，里面到处都是 TCG。核糖体读到那里——**没有对应的 tRNA，卡住。噬菌体造不出自己的蛋白。**\n\n' +
         '**细菌不是靠打赢噬菌体获得免疫的，是靠说另一种语言。**\n\n' +
         '（严格说这个抗病毒性属于后续菌株 **Syn61Δ3**——那一株才真正删掉了两个丝氨酸 tRNA 和 RF1。幻灯片把它归给了 Syn61，这一点值得知道。）',
      takeaway: '第一步是「不用了」，第二步是「读不懂了」。只有第二步才真正腾出密码子——而顺带带来了遗传防火墙。'
    },
    {
      q: '「遗传防火墙」为什么说它是双向的？',
      a: '**因为「说另一种语言」这件事，进和出都拦得住。**\n\n' +
         '**向内：噬菌体进不来。**外来的基因组用标准密码表写成，进到这个细胞里读不通（上一条）。这是一种**广谱**的抗噬菌体能力——它不针对某一种病毒，而是针对「所有说标准语言的东西」。\n\n' +
         '**向外：你的基因传不出去。**\n\n' +
         '假设这个工程菌株逃逸到环境里，它的基因通过水平转移进了别的细菌。**别的细菌用的是标准密码表**——而在 Syn61 的基因里，TCG 和 TCA 的含义已经变了（如果做了进一步的重新分配的话）。**读出来的是错的蛋白。**\n\n' +
         '**所以水平基因转移被阻断了。**\n\n' +
         '**这在合成生物学里是很罕见的一种情况：一次工程改动同时解决了一个功能问题和一个安全问题。**\n\n' +
         '通常这两者是冲突的——你为了安全加的限制（比如第 3-14 节的合成营养缺陷），往往要付出功能上的代价。而这里两者是同一件事的两面。\n\n' +
         '**这一条在口试里很好用**：被问到「密码子压缩有什么用」，除了「腾出密码子装 ncAA」这个直接答案，能补上「而且它顺带给了广谱抗噬菌体能力和生物防控」，就说明你看到了这个技术的完整轮廓。',
      takeaway: '外来基因读不进来（抗噬菌体），自己的基因传出去也读不对（生物防控）。一次改动解决两个问题。'
    },
    {
      q: '为什么腾的密码子越多，细胞就越弱？',
      a: '**因为「同义」只是在氨基酸这一层同义，在别的层面它一点都不同义。**\n\n' +
         '把 TCG 换成 AGC，蛋白序列确实一个字母没变。**但序列变了，而序列还承载着很多别的信息：**\n\n' +
         '**mRNA 的二级结构** —— 碱基一换，局部的折叠可能变，影响翻译起始或稳定性。\n\n' +
         '**核糖体结合位点** —— 有些基因内部藏着影响翻译的序列元件。\n\n' +
         '**内部的调控元件** —— 启动子、终止子、结合位点可能重叠在编码区里。\n\n' +
         '**翻译速度** —— 回到第 1-4-3 节：同义密码子对应的 tRNA 丰度不同，翻译速度不同，而**速度影响共翻译折叠**。\n\n' +
         '**所以每一处同义替换都是一次小赌博，而 Syn61 赌了 18,214 次，Syn57 赌了十万多次。**\n\n' +
         '**代价的趋势很清楚：**\n\n' +
         '**Syn61**（腾出 3 个密码子）→ 慢 **1.6 倍**。\n\n' +
         '**Syn57**（腾出 7 个）→ 慢 **4 倍**。\n\n' +
         '**这就是这个领域的中心矛盾：你想腾出更多密码子来编码更多 ncAA，而腾得越多细胞越弱。**57 个密码子目前已经接近极限。\n\n' +
         '**换个角度看，真正令人惊讶的其实是另一面：一个细胞能扛住十万处改动还活着。**这说明遗传密码的冗余确实有相当大的容错余地——只是不是无限的。',
      takeaway: '「同义」只在氨基酸层面同义；序列还承载二级结构、调控元件和翻译速度。腾 3 个慢 1.6 倍，腾 7 个慢 4 倍。'
    }
  ],
  points: [
    { term: 'The premise', en: 'Cells use 64 codons but many of them are potentially redundant — so some can be freed.', cn: '细胞使用 64 个密码子，但其中很多是潜在冗余的——所以可以腾出一些。' },
    { term: 'Step one', en: 'Genome-wide replacement of a subset of sense codons by their synonyms — synonymous codon compression.', cn: '在全基因组范围内把一部分有义密码子换成它们的同义密码子——即同义密码子压缩。' },
    { term: 'Step two', en: 'Deletion of the tRNAs that decode them. The result is free codons available for reassignment.', cn: '删掉解码它们的 tRNA。结果就是得到可供重新分配的空闲密码子。' },
    { term: 'Syn61 — the paper', en: 'Fredens et al., "Total synthesis of E. coli with a recoded genome", Nature 2019, 569:514.', cn: 'Fredens 等，《具有重编码基因组的大肠杆菌全合成》，Nature 2019, 569:514。' },
    { term: 'Syn61 — what was done', en: 'The whole 4-megabase genome was re-synthesised. Two serine codons, TCG and TCA, were replaced by the synonymous AGC and AGT, and the stop codon TAG by TAA. 18,214 codons were recoded, leaving 61 in use.', cn: '整个 4 Mb 的基因组被重新合成。两个丝氨酸密码子 TCG 和 TCA 被换成同义的 AGC 和 AGT，终止密码子 TAG 换成 TAA。共重编码 18214 个密码子，剩下 61 个在用。' },
    { term: 'Syn61 — fitness cost', en: 'It doubles only 1.6 times slower than the parent strain.', cn: '它的倍增速度只比亲本菌株慢 1.6 倍。' },
    { term: 'Syn57 — the paper', en: 'Robertson et al., "Escherichia coli with a 57-codon genetic code", Science 2025, 390:eady4368.', cn: 'Robertson 等，《使用 57 密码子遗传密码的大肠杆菌》，Science 2025, 390:eady4368。' },
    { term: 'Syn57 — what was done', en: 'More than 100,000 codon changes removed four serine codons, two alanine codons and one stop codon — seven in total — leaving 57 codons, of which 55 encode the 20 canonical amino acids.', cn: '超过 10 万处密码子改动，移除了 4 个丝氨酸密码子、2 个丙氨酸密码子和 1 个终止密码子——共 7 个——剩下 57 个密码子，其中 55 个编码 20 种天然氨基酸。' },
    { term: 'Syn57 — fitness cost', en: 'Four times slower than the parent strain.', cn: '比亲本菌株慢 4 倍。' }
  ],
  beyondPoints: [
    { term: 'A correction to the slide', en: 'The deck attributes virus resistance to Syn61. Strictly it belongs to the follow-up strain Syn61 delta 3, from Robertson et al. in Science 2021, in which the two now-unused serine tRNAs and release factor 1 were deleted.', cn: '幻灯片把抗病毒性归给了 Syn61。严格地说这属于后续菌株 Syn61Δ3（Robertson 等，Science 2021），其中两个已不再使用的丝氨酸 tRNA 和释放因子 1 被删除了。' },
    { term: 'Why deleting the tRNAs confers virus resistance', en: 'Syn61 itself has merely stopped using TCG and TCA; it still carries the tRNAs, so a phage genome full of those codons is still perfectly readable. Once the tRNAs are deleted, those codons become unreadable. An incoming phage genome uses the full standard code, hits a TCG, and the ribosome stalls. The phage cannot make its proteins.', cn: 'Syn61 本身只是「不再使用」TCG 和 TCA；它仍然带着那两个 tRNA，所以一个充满这些密码子的噬菌体基因组照样能被读出来。而一旦把 tRNA 删掉，这些密码子就变得不可读了。进来的噬菌体基因组用的是完整的标准密码，遇到 TCG 时核糖体就停滞。噬菌体造不出自己的蛋白。' },
    { term: 'The genetic firewall', en: 'The bacterium is immune to a broad range of phages not by fighting them but by speaking a different language. It also works in reverse as a biosafety barrier: if genes from this strain escaped into the wild, other organisms could not read them correctly, because the meaning of TCG and TCA has changed — so horizontal gene transfer is blocked. This is a rare case in synthetic biology where one engineering move solves both a functional and a safety problem.', cn: '这种细菌对广谱噬菌体免疫，靠的不是对抗它们，而是换了一种语言。反过来它也是一道生物安全屏障：如果这个菌株的基因泄漏到自然界，别的生物也读不对，因为 TCG 和 TCA 的含义已经变了——水平基因转移被阻断。这是合成生物学里少见的「一个工程手段同时解决功能和安全问题」的案例。' },
    { term: 'The trend in the fitness cost', en: 'The more codons you free, the greater the fitness loss — 1.6-fold for three codons, 4-fold for seven. This is unsurprising: every synonymous substitution can disrupt mRNA secondary structure, ribosome binding sites, internal regulatory elements, or translation speed and hence co-translational folding. That a cell survives a hundred thousand such changes at all is remarkable.', cn: '腾出的密码子越多，适合度损失越大——3 个密码子是 1.6 倍，7 个是 4 倍。这并不奇怪：每一次同义替换都可能破坏 mRNA 二级结构、核糖体结合位点、内部调控元件，或者改变翻译速度进而影响共翻译折叠。10 万次这样的改动累积起来细胞还能活，已经很了不起了。' },
    { term: 'The central tension of the field', en: 'You want to free more codons so you can encode more ncAAs, but the more you free the weaker the cell becomes. Fifty-seven codons is currently near the limit.', cn: '你想腾出更多密码子来编码更多 ncAA，但腾得越多细胞越虚弱。57 个密码子目前是极限附近。' }
  ],
  terms: [
    { en: 'Synonymous codon compression', cn: '同义密码子压缩', def_en: 'Replacing every instance of selected codons with synonymous alternatives across a whole genome, so those codons fall out of use and can be reassigned.', def_cn: '在整个基因组范围内把选定密码子的每一次出现都换成同义的替代密码子，使这些密码子不再被使用、从而可以重新分配。' },
    { en: 'Syn61', cn: 'Syn61 菌株', def_en: 'An E. coli strain with a totally re-synthesised 4-Mb genome using only 61 codons, from Fredens et al. 2019. Fitness cost: 1.6-fold slower growth.', def_cn: '基因组完全重新合成、只使用 61 个密码子的大肠杆菌菌株，来自 Fredens 等 2019 年的工作。适合度代价：生长慢 1.6 倍。' },
    { en: 'Syn61 delta 3', cn: 'Syn61Δ3 菌株', def_en: 'The follow-up strain in which the two unused serine tRNAs and RF1 were deleted, making it virus-resistant — this, not Syn61 itself, is where the resistance comes from.', def_cn: '后续菌株，删除了两个不再使用的丝氨酸 tRNA 和 RF1，从而具有抗病毒性——抗性来自它而不是 Syn61 本身。' },
    { en: 'Genetic firewall', cn: '遗传防火墙', def_en: 'A recoded organism that cannot read natural genomes and whose genes cannot be read correctly by natural organisms, blocking both phage infection and horizontal gene transfer.', def_cn: '一个重编码的生物，它读不懂天然基因组，它的基因也不能被天然生物正确读取，从而同时阻断噬菌体感染和水平基因转移。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What are the two steps of codon compression?',
      q_cn: '密码子压缩的两个步骤是什么？',
      options: ['Delete the tRNAs first, then mutate the ribosome so it no longer needs them', 'Replace codons genome-wide with synonyms, then delete their tRNAs', 'Insert quadruplet codons, then evolve ribo-Q to decode them', 'Delete RF1, then add an orthogonal aaRS and tRNA pair'],
      answer: 1,
      optionRefs: { 2: '3-11', 3: '3-10' },
      optionNotes: {
        0: { en: 'The order is inverted, and the ribosome belongs to a different strategy. Deleting a tRNA while genes still use its codon is lethal, so the genome-wide synonymous rewriting has to come first. Ribosome engineering is what quadruplet decoding requires; it plays no part in codon compression.', cn: '顺序反了，而且核糖体属于另一条策略。基因还在用某个密码子的时候就删掉对应的 tRNA 是致命的，所以必须先做全基因组的同义替换。改造 ribosome 是四联体密码子那条路线的需求，跟 codon compression 无关。' }
      },
      why_en: 'Order matters. You must first ensure no gene still uses the codon, then remove its tRNA. Deleting the tRNA while genes still need the codon would be lethal.',
      why_cn: '顺序很关键。必须先确保没有基因还在用那个密码子，然后才能删掉它的 tRNA。在基因还需要这个密码子时就删掉 tRNA 会是致命的。' },
    { type: 'mcq',
      q_en: 'Why is Syn61 delta 3 resistant to viruses?',
      q_cn: '为什么 Syn61Δ3 对病毒有抗性？',
      options: ['Its restriction-modification system cuts the incoming phage DNA', 'The deleted tRNAs leave codons in the phage genes untranslatable', 'It grows too slowly for the phage to complete a burst cycle', 'It has lost the surface receptors that phage use to adsorb'],
      answer: 1,
      optionRefs: { 0: '1-11' },
      optionNotes: {
        3: { en: 'Losing the receptor is the classic natural route to phage resistance, but it is not this one. Syn61 delta 3 still adsorbs phage and still lets the genome in — the block sits downstream, at translation, where the deleted tRNAs leave codons in the phage genes unreadable.', cn: '丢掉受体确实是天然获得噬菌体抗性的经典方式，但这里不是。Syn61 delta 3 照样吸附 phage、照样让基因组进来——卡住的地方在下游的翻译：被删掉的 tRNA 让 phage 基因里的那些密码子读不出来。' }
      },
      why_en: 'Resistance comes from the tRNA deletion, not from the recoding alone. Syn61 still carries the tRNAs so phage genomes remain readable; only once they are deleted does the phage hit an untranslatable codon.',
      why_cn: '抗性来自 tRNA 的删除，而不是仅仅来自重编码。Syn61 仍带着那些 tRNA，所以噬菌体基因组照样可读；只有把它们删掉之后，噬菌体才会撞上一个无法翻译的密码子。' },
    { type: 'mcq',
      q_en: 'Compare the fitness costs of Syn61 and Syn57.',
      q_cn: '比较 Syn61 和 Syn57 的适合度代价。',
      options: ['Both are 1.6-fold slower than wild type', 'Syn61 is 1.6-fold slower, Syn57 is 4-fold slower', 'Syn61 is 4-fold slower, Syn57 is 1.6-fold slower', 'Neither shows any measurable cost'],
      answer: 1,
      optionNotes: {
        2: { en: 'The two numbers have been swapped, and the direction is the whole point: Syn61 removes three codons, Syn57 removes seven, and the cost rises with how many are removed, because every synonymous substitution risks disturbing mRNA structure, ribosome binding or translation speed.', cn: '两个数字对调了，而方向正是这里的要点：Syn61 去掉 3 个密码子，Syn57 去掉 7 个，代价随去掉的数量上升——因为每一次同义替换都可能扰动 mRNA 结构、核糖体结合或翻译速度，损伤会累加。' }
      },
      why_en: 'The trend is the point: three codons removed costs 1.6-fold, seven costs 4-fold. Every synonymous substitution risks disrupting mRNA structure, ribosome binding or translation speed, and the damage accumulates.',
      why_cn: '重点在于这个趋势：移除 3 个密码子的代价是 1.6 倍，移除 7 个是 4 倍。每一次同义替换都可能破坏 mRNA 结构、核糖体结合或翻译速度，损害会累积。' },
    { type: 'short',
      q_en: 'Explain the genetic firewall concept and why it solves two problems at once.',
      q_cn: '解释「遗传防火墙」的概念，以及它为什么同时解决了两个问题。',
      accept: ['unreadable', 'stall', 'phage', 'horizontal gene transfer', 'biosafety'],
      answer_en: 'Once the tRNAs decoding a set of codons have been deleted, the organism can no longer read those codons at all. An incoming phage genome uses the full standard genetic code, so it inevitably contains them; the ribosome reaches one and stalls, and the phage cannot make its proteins. The bacterium is therefore immune to a broad range of phages not by fighting them but by speaking a different language. The same fact runs in reverse and gives biosafety. If genes from this engineered strain escaped into the wild, other organisms could not read them correctly, because the meaning of those codons has changed in this strain — so horizontal gene transfer out of the strain is blocked. That is what makes it unusual: a single engineering decision delivers both a functional benefit, phage resistance in fermentation, and a containment benefit, and in synthetic biology it is rare for those two goals to be served by the same move.',
      answer_cn: '一旦解码某组密码子的 tRNA 被删除，这个生物就完全读不了那些密码子了。进来的噬菌体基因组用的是完整的标准遗传密码，必然含有这些密码子；核糖体读到其中一个就停滞，噬菌体造不出自己的蛋白。所以这种细菌对广谱噬菌体免疫，靠的不是对抗而是换了一种语言。同一个事实反过来还提供了生物安全性。如果这个改造菌株的基因泄漏到自然界，别的生物也读不对，因为这些密码子在该菌株中的含义已经变了——从菌株向外的水平基因转移被阻断。这就是它不寻常的地方：一个工程决策同时带来功能收益（发酵中抗噬菌体）和防控收益，而在合成生物学里，这两个目标很少能由同一个手段一起满足。'
    }
  ],
  oral: {
    q_en: 'What is codon compression, and what has been achieved with it?',
    q_cn: '什么是密码子压缩？用它做出了什么成果？',
    model_en: 'The premise is that cells use sixty-four codons but many of them are potentially redundant, so some can be freed for reassignment. The recipe has two steps and the order matters. First, genome-wide replacement of a subset of sense codons by their synonyms — synonymous codon compression — so that no gene in the organism still uses them. Second, deletion of the tRNAs that decoded them. Only then are those codons genuinely free. Two strains illustrate the progression. Syn61, from Fredens and colleagues in Nature in 2019, re-synthesised the whole four-megabase E. coli genome: two serine codons, TCG and TCA, were replaced by the synonymous AGC and AGT, and the stop codon TAG by TAA, recoding eighteen thousand two hundred and fourteen codons in total and leaving sixty-one in use. Remarkably it doubles only one point six times slower than the parent. Syn57, from Robertson and colleagues in Science in 2025, went much further: over a hundred thousand codon changes removed four serine codons, two alanine codons and one stop, seven altogether, leaving fifty-seven codons of which fifty-five encode the twenty canonical amino acids. The fitness cost there is four-fold slower growth. That trend is the central tension of the field — the more codons you free the more ncAAs you can encode, but the weaker the cell becomes, and fifty-seven is currently near the limit. One correction to the slides is worth making: virus resistance is attributed to Syn61, but strictly it belongs to the follow-up strain Syn61 delta three, in which the two now-unused serine tRNAs and release factor one were deleted. And the reason it works is genuinely beautiful. Syn61 has merely stopped using those codons but still carries the tRNAs, so a phage genome remains readable. Once the tRNAs are deleted the codons become unreadable, so an incoming phage — which of course uses the standard code — hits a TCG and the ribosome stalls. The bacterium is immune not by fighting phages but by speaking a different language. And the same fact works in reverse as biosafety: genes escaping from this strain cannot be read correctly by anything in nature, so horizontal transfer is blocked.',
    checklist: ['Premise: 64 codons, many potentially redundant', 'Step 1: genome-wide synonymous replacement of selected codons', 'Step 2: delete the tRNAs that decoded them — order matters', 'Syn61 (Fredens, Nature 2019): whole 4-Mb genome re-synthesised', 'TCG and TCA to AGC and AGT; TAG to TAA; 18,214 codons recoded', 'Syn61 fitness cost: only 1.6-fold slower', 'Syn57 (Robertson, Science 2025): >100,000 changes, 7 codons removed', 'Syn57: 57 codons, 55 encoding the canonical 20; 4-fold slower', 'Trend: more codons freed means greater fitness loss', 'Correction: virus resistance belongs to Syn61 delta 3, not Syn61', 'Deleted tRNAs make phage codons unreadable, ribosome stalls', 'Genetic firewall: immunity by speaking a different language', 'Runs in reverse as biosafety — blocks horizontal gene transfer']
  }
},

{
  id: '3-13',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.13',
  enTitle: 'Flexizymes',
  cnTitle: 'Flexizyme 柔性核酶',
  slides: 'L8 s.44–46',
  coverage: 'full',
  coverageNote: 'The recognition mechanism, the substrate range and the commercialisation note are on the slides. Why flexizymes bypass every constraint that makes aaRS engineering hard — and why that confines them to in vitro use — is the beyond-the-slides argument, and it closes the loop with the double sieve from the first half.',
  summary: {
    en: 'Flexizyme stands for flexible tRNA acylation ribozyme, from the Suga lab. It is an artificial ribozyme that charges tRNAs, and its generality comes from recognising only the 3-prime terminal DCCA region of the tRNA rather than the body sequence. It accepts substrates far outside alpha-L-amino acids — N-methyl and D-amino acids, beta-amino acids, hydroxy acids, cyclic peptides — because it recognises an activating group rather than a side chain.',
    cn: 'Flexizyme 是「柔性 tRNA 酰化核酶」的缩写，来自 Suga 实验室。它是一种给 tRNA 充电的人工核酶，其通用性来自只识别 tRNA 3′ 端的 DCCA 区域而不是主体序列。它能接受远超 α-L-氨基酸范围的底物——N-甲基氨基酸、D-氨基酸、β-氨基酸、羟基酸、环肽——因为它识别的是一个活化基团而不是侧链。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L8 s.44', src: 'img/figures/L8_s44_1.webp' },
    { slide: 'L8 s.45', src: 'img/figures/L8_s45_1.webp' },
    { slide: 'L8 s.45', src: 'img/figures/L8_s45_2.webp' },
    { slide: 'L8 s.46', src: 'img/figures/L8_s46_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'flexizyme 的「柔性」是**双向**的：它**不认氨基酸的侧链**（只认一个活化基团），也**不认 tRNA 的主体序列**（只认所有 tRNA 都有的 3′-CCA）。\n\n' +
            '所以它接受的东西远远超出 α-L-氨基酸——**而这正是因为它没有被进化训练过**。',
  skipIt: 'DCCA、氰甲酯/二硝基苄酯这些具体的化学细节不用背，RaPID 这个系统名知道即可。**第 7–8 讲没有 RECAP 可引**，这是判断——但「双向柔性」这条要能讲，它是这个技术全部能力的来源。',
  explain: [
    {
      q: '「柔性」到底柔在哪两个方向？',
      trace: {
        what: '**Flexizyme（柔性核酶）**是一种人工核酶，能给 tRNA 装上氨基酸（充电），来自 Suga 实验室，名字就是「FLEXIble tRNA acylation riboZYME」的缩写。',
        from: '天然的 aaRS 靠严格识别氨基酸侧链和 tRNA 主体序列来干这件事（第 3-3 节的双筛机制），而 flexizyme 是**从头设计**出来的核酶，没有经历过那几十亿年「必须精确」的进化压力。',
        to: '正因为没被训练过，它可以装上远超 α-L-氨基酸范围的东西——D-氨基酸、β-氨基酸、羟基酸——被用在 RaPID 这类系统里造环肽药物文库（第 4-16 节的 mRNA display 负责筛）。',
        family: '它跟核糖体本身是同一类东西——都是**核酶**；它的「不挑」跟 aaRS 编辑域被删掉（第 3-9 节）是同一个思路的两种做法：一个是从头不设限制，一个是把限制拆掉。'
      },
      a: '**两个方向都是「不去认那些本来该认的东西」。**\n\n' +
         '**方向一：对氨基酸柔性——它根本不看侧链。**\n\n' +
         '天然的 aaRS 认的是氨基酸的**侧链**（所以才需要第 3-3 节那套双筛机制去区分 Ile 和 Val）。\n\n' +
         '**flexizyme 完全不看侧链。**它认的是底物上挂着的一个**活化基团**（比如氰甲酯、二硝基苄酯）。\n\n' +
         '**推论很有力：任何东西，只要你能把它做成这样一个活化酯，flexizyme 就接受。**\n\n' +
         '于是 **D-氨基酸、β-氨基酸、羟基酸**——**这些根本不是 α-L-氨基酸的东西**——统统可以装上 tRNA。\n\n' +
         '**方向二：对 tRNA 柔性——它不看主体序列。**\n\n' +
         '天然 aaRS 靠 tRNA 上的**识别元件**来认它（第 3-9 节讲过，正是这些元件的保守性让近缘物种的系统必然串味）。\n\n' +
         '**flexizyme 只认 3′ 端的 DCCA 区域**——而 **CCA 是所有 tRNA 都有的通用末端**。它自己的 GGU 端跟这个 CCA 互补配对，就这么简单。\n\n' +
         '**所以它对几乎任何 tRNA 都管用。**\n\n' +
         '**把两个方向合起来：任意（活化的）底物 × 任意 tRNA。**这就是 flexible 的双重含义。',
      takeaway: '不看侧链只看活化基团（所以底物任意），不看主体序列只看通用的 CCA（所以 tRNA 任意）。'
    },
    {
      q: '为什么一个人工核酶能做到天然酶做不到的事？',
      a: '**因为天然酶的「做不到」不是能力不足，是被进化专门训练出来的拒绝。**\n\n' +
         '这一条值得反复品味，它是整章最好的一个洞见：\n\n' +
         '**aaRS 被打磨了几十亿年，目的就是排除非标准的氨基酸。**双筛机制（第 3-3 节）、编辑域、识别元件——**它全部的复杂性都在服务于「不要装错」。**\n\n' +
         '**而你想装的 ncAA，在它眼里就是「错」。**\n\n' +
         '**所以它的精确性正是你的障碍。**你要么去改造它（第 3-9 节的定向进化 + 删编辑域），要么绕开它。\n\n' +
         '**flexizyme 是绕开的那条路，而它之所以「不挑」，是因为它没有那段历史。**\n\n' +
         '它是人造的核酶，**从来没有面对过「必须排除非标准氨基酸」这个选择压力**。它的宽容不是设计出来的优点，**是没有被训练过的结果**。\n\n' +
         '**而这一条又回到第 3-2 节：核糖体的催化核心本来就是 RNA。**\n\n' +
         '所以用 RNA 来给 tRNA 上料，不是一个聪明的外挂，**是回到翻译这台机器本来的化学**。\n\n' +
         '**一条完整的线索：核糖体是核酶 → 翻译本来是 RNA 的活 → aaRS 是后来演化出来的「质检员」→ 而质检正是你的障碍 → 那就用 RNA 绕过质检。**\n\n' +
         '口试里能把这条线说出来，比背 flexizyme 的定义有价值得多。',
      takeaway: 'aaRS 的精确性是几十亿年训练出来的拒绝，而那正是你的障碍。人工核酶没这段历史，所以不挑。'
    },
    {
      q: '为什么 flexizyme 只能用在体外？',
      a: '**因为它的用法是分两步的，而第一步没法在细胞里做。**\n\n' +
         '**步骤：先在管子里用 flexizyme 把 tRNA 充上你要的东西，然后把这条「已充电的 tRNA」加进 CFPS 反应。**\n\n' +
         '**为什么不能在细胞里？**\n\n' +
         '你得把那个**活化酯底物**送进细胞——那是个化学合成的、不稳定的分子，细胞膜是一道障碍，而且它在细胞内的环境里会水解。\n\n' +
         '而且就算充上了，细胞里还有 20 种天然 aaRS 在同时工作，你没法阻止它们去动这条 tRNA（回到第 3-9 节的正交性四条件——**flexizyme 路线一条都不满足**）。\n\n' +
         '**所以策略图上 flexizyme 只出现在「体外」那一行**（第 3-8 节）。这不是一个偶然的限制，是它的工作方式决定的。\n\n' +
         '**而这也解释了体外那一行为什么不需要区分「一种还是多种」：**\n\n' +
         '你可以在管子里分别充好三条不同的 tRNA，然后一起加进反应。**它们各带各的 ncAA、各认各的密码子，互不干扰**——因为充电这一步已经在管外完成了，没有任何酶会来抢。\n\n' +
         '**代价还是那个：体外意味着 CFPS，意味着产量低、成本高、放大困难。**而且幻灯片说整套流程大约要一周。',
      takeaway: '充电必须在管子里先做好，而活化酯进不了细胞、天然 aaRS 也会来抢。所以它天生只属于体外那一行。'
    },
    {
      q: '为什么这条路特别适合做环肽药物？',
      a: '**因为环肽要解决的两个致命问题，正好都需要「非标准氨基酸」。**\n\n' +
         '**普通线性多肽当药有两个硬伤：**\n\n' +
         '**几秒钟内就被蛋白酶降解掉**（回到第 1-2-3 节 GLP-1 那两分钟的半衰期）。\n\n' +
         '**过不了细胞膜**——所以只能打靶点在细胞外的东西。\n\n' +
         '**而 N-甲基化和环化能大幅改善这两点：**\n\n' +
         '**N-甲基化**把主链的酰胺氮甲基化了，**蛋白酶认不出来**，同时也减少了主链上暴露的氢键供体，膜通透性上升。\n\n' +
         '**环化**去掉了自由末端，**外切型蛋白酶无从下口**（回到第 1-5-3 节：外切酶必须有自由末端），而且构象被固定住，结合亲和力更高。\n\n' +
         '**天然的例子就是环孢素（cyclosporine）**——它既是环状的又带 N-甲基，所以口服有效。\n\n' +
         '**问题在于：N-甲基氨基酸和 D-氨基酸都不是那 20 种，核糖体装不了。**\n\n' +
         '**而 flexizyme 正好能装。**\n\n' +
         '所以 RaPID 这类系统的做法是：**用 flexizyme 造出含 N-甲基和 D-氨基酸的巨大环肽文库，再用 mRNA display 去筛**（第 4-16 节）。\n\n' +
         '**这是第 8 讲和第 9 讲接上的地方**：一边提供「造出自然界没有的分子」的能力，一边提供「从天文数字里挑出有用的那个」的能力。',
      takeaway: '环肽靠 N-甲基化和环化躲蛋白酶、过膜，而这些残基核糖体装不了。flexizyme 能装——再用第 9 讲的展示技术去筛。'
    }
  ],
  points: [
    { term: 'What the name means', en: 'Flexizyme is FLEXIble tRNA acylation riboZYME, from the Hiroaki Suga lab.', cn: 'Flexizyme 是 FLEXIble tRNA acylation riboZYME，来自 Hiroaki Suga 实验室。' },
    { term: 'What it is', en: 'An artificial ribozyme — catalytic RNA — with tRNA aminoacylation activity.', cn: '一种具有 tRNA 氨酰化活性的人工核酶，也就是催化性 RNA。' },
    { term: 'How it recognises the tRNA', en: 'Through the 3-prime terminal region, 5-prime DCCA 3-prime, where D is A, G or U. The GGU end of the flexizyme pairs complementarily with the CCA end of the tRNA.', cn: '通过 3′ 端区域 5′-DCCA-3′（其中 D 为 A、G 或 U）。Flexizyme 的 GGU 末端与 tRNA 的 CCA 末端互补配对。' },
    { term: 'Why that gives generality', en: 'It therefore accepts most tRNAs regardless of their body sequence.', cn: '因此它能接受大多数 tRNA，不管它们的主体序列是什么。' },
    { term: 'What it enables', en: 'Peptide chemistry beyond alpha-L-amino acids: N-methyl amino acids, D-amino acids, beta-amino acids, hydroxy acids, and cyclic peptides.', cn: '超出 α-L-氨基酸范围的肽化学：N-甲基氨基酸、D-氨基酸、β-氨基酸、羟基酸和环肽。' },
    { term: 'Practicalities', en: 'The whole procedure takes about a week, and it has been commercialised for drug discovery.', cn: '整个流程约需一周，而且已经被商业化用于药物发现。' }
  ],
  beyondPoints: [
    { term: 'It replaces the entire recognition logic of an aaRS', en: 'Recall why natural synthetases are so complex: they must recognise the correct amino acid and the correct tRNA extremely strictly, with an editing domain destroying mistakes. That strictness is precisely the greatest obstacle to installing an ncAA, because the thing you want to install looks like an error to the enzyme.', cn: '回想天然合成酶为什么这么复杂：它必须极其严格地识别正确的氨基酸和正确的 tRNA，还有编辑域负责销毁错误。而这种严格性正是引入 ncAA 的最大障碍——你想装的东西，在酶眼里就是「错误」。' },
    { term: 'Flexibility on the amino acid side', en: 'The flexizyme does not recognise the amino acid side chain at all. It recognises an activating group on the substrate, such as a cyanomethyl ester or a dinitrobenzyl ester. So anything that can be made into such an activated ester is accepted — including D-amino acids, beta-amino acids and hydroxy acids, which are not alpha-L-amino acids at all.', cn: 'Flexizyme 完全不识别氨基酸的侧链。它识别的是底物上的一个活化基团，比如氰甲酯或二硝基苄酯。所以任何能被做成这种活化酯的分子都能被接受——包括 D-氨基酸、β-氨基酸和羟基酸，而这些根本不是 α-L-氨基酸。' },
    { term: 'Flexibility on the tRNA side', en: 'It does not recognise the tRNA body sequence either, only the universal CCA at the 3-prime end, so it works with almost any tRNA. That is the double meaning of flexible: flexible about the amino acid and flexible about the tRNA.', cn: '它也不识别 tRNA 的主体序列，只识别 3′ 端通用的 CCA，所以对几乎所有 tRNA 都适用。这就是「flexible」的双重含义：对氨基酸灵活，对 tRNA 也灵活。' },
    { term: 'Why this confines it to in vitro use', en: 'You must charge the tRNA with the flexizyme in a tube first, then add the charged tRNA to the CFPS reaction. You cannot do that inside a living cell — which is exactly why the strategy map places flexizymes only in the in vitro row.', cn: '你必须先在试管里用 flexizyme 把 tRNA 充电好，再把充好电的 tRNA 加进 CFPS 反应。活细胞里没法这么做——这正是策略图把 flexizyme 只放在体外那一行的原因。' },
    { term: 'Why this route suits cyclic peptide drugs', en: 'The commercialisation refers mainly to systems like PeptiDream\'s RaPID — Random non-standard Peptide Integrated Discovery — which uses flexizymes to install N-methyl and D-amino acids into huge cyclic peptide libraries, then selects with mRNA display. Ordinary linear peptides are degraded by proteases within seconds in vivo and cannot cross membranes; N-methylation and cyclisation greatly improve protease resistance and membrane permeability, cyclosporine being the natural example.', cn: '所谓商业化主要指 PeptiDream 的 RaPID 系统（Random non-standard Peptide Integrated Discovery），它用 flexizyme 把 N-甲基氨基酸和 D-氨基酸装进巨型环肽文库，再用 mRNA display 筛选。普通线性肽在体内几秒钟就被蛋白酶降解，也穿不过细胞膜；N-甲基化和成环大幅提高蛋白酶抗性和膜通透性，环孢素就是天然的例子。' }
  ],
  terms: [
    { en: 'Flexizyme (Fx)', cn: '柔性核酶', def_en: 'An artificial ribozyme that acylates tRNA with almost any activated ester substrate, recognising the tRNA only by its 3-prime CCA end.', def_cn: '一种人工核酶，能用几乎任何活化酯底物给 tRNA 酰化，且只通过 tRNA 3′ 端的 CCA 来识别它。' },
    { en: 'Activated ester', cn: '活化酯', def_en: 'A cyanomethyl or dinitrobenzyl ester of the substrate. The flexizyme recognises this group rather than the side chain, which is the source of its substrate generality.', def_cn: '底物的氰甲酯或二硝基苄酯衍生物。Flexizyme 识别的是这个基团而不是侧链，这正是它底物通用性的来源。' },
    { en: 'RaPID system', cn: 'RaPID 系统', def_en: 'Random non-standard Peptide Integrated Discovery — flexizyme-built cyclic peptide libraries selected by mRNA display, commercialised for drug discovery.', def_cn: 'Random non-standard Peptide Integrated Discovery——用 flexizyme 构建环肽文库、再用 mRNA display 筛选，已商业化用于药物发现。' },
    { en: 'Cyclic peptide', cn: '环肽', def_en: 'A peptide closed into a ring, which together with N-methylation greatly improves protease resistance and membrane permeability. Cyclosporine is the natural exemplar.', def_cn: '首尾成环的多肽，与 N-甲基化一起可大幅提高蛋白酶抗性和膜通透性。环孢素是天然的代表。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What does a flexizyme recognise on its amino acid substrate?',
      q_cn: 'Flexizyme 识别底物氨基酸上的什么？',
      options: ['The side chain, as an aminoacyl-tRNA synthetase does', 'An activating group such as a cyanomethyl or dinitrobenzyl ester', 'The free alpha-amino group, common to all amino acids', 'The stereocentre at the alpha carbon, so only L forms fit'],
      answer: 1,
      optionRefs: { 0: '3-3' },
      why_en: 'Not the side chain at all — which is exactly why it accepts D-amino acids, beta-amino acids and hydroxy acids, none of which are alpha-L-amino acids. Anything that can be made into an activated ester is a substrate.',
      why_cn: '完全不识别侧链——这正是它能接受 D-氨基酸、β-氨基酸和羟基酸的原因，而这些都不是 α-L-氨基酸。任何能做成活化酯的分子都是底物。' },
    { type: 'mcq',
      q_en: 'How does a flexizyme recognise the tRNA?',
      q_cn: 'Flexizyme 怎么识别 tRNA？',
      options: ['By reading the anticodon, the way a synthetase does', 'By base pairing its GGU end to the 3-prime terminal DCCA of the tRNA', 'By the overall L-shaped tertiary fold of the tRNA body', 'By sequence-specific identity elements inside the acceptor stem'],
      answer: 1,
      optionRefs: { 0: '3-3', 3: '3-3' },
      why_en: 'Because the CCA end is universal, recognising it rather than the body sequence means almost any tRNA works. This is the second half of what flexible means.',
      why_cn: '因为 CCA 末端是通用的，识别它而不是主体序列就意味着几乎任何 tRNA 都能用。这是「flexible」的另一半含义。' },
    { type: 'mcq',
      q_en: 'Why are flexizymes restricted to in vitro use?',
      q_cn: '为什么 flexizyme 只能用于体外？',
      options: ['The ribozyme is degraded at 37 degrees inside the cell', 'The tRNA must be charged in a tube and then supplied to the reaction', 'The acylation reaction runs only in pure organic solvent, with no water present', 'They work only in a wheat germ extract translation system'],
      answer: 1,
      optionRefs: { 3: '3-5' },
      why_en: 'The whole procedure depends on preparing the charged tRNA separately and supplying it. There is no way to run that pre-charging step inside a cell, which is why the strategy map puts flexizymes only in the in vitro row.',
      why_cn: '整个流程依赖于单独制备充好电的 tRNA 再提供给反应。没有办法在细胞内部完成这个预充电步骤，这就是策略图把 flexizyme 只放在体外那一行的原因。' },
    { type: 'short',
      q_en: 'What two recognition problems does a flexizyme sidestep, and why does that matter?',
      q_cn: 'Flexizyme 绕开了哪两个识别问题？这为什么重要？',
      accept: ['side chain', 'activating group', 'tRNA body', 'CCA', 'aaRS specificity'],
      answer_en: 'Both of the recognition problems that make a natural aminoacyl-tRNA synthetase so complex. A synthetase must recognise the correct amino acid extremely strictly, using a double sieve with an editing domain that destroys anything that does not fit — and that strictness is precisely the obstacle to installing a non-canonical amino acid, because your intended ncAA looks like an error. The flexizyme sidesteps it by not recognising the side chain at all: it recognises an activating group on the substrate, a cyanomethyl or dinitrobenzyl ester, so anything you can convert into such an ester is accepted, including D-amino acids, beta-amino acids and hydroxy acids that are not alpha-L-amino acids at all. A synthetase must also recognise its cognate tRNA through conserved identity elements. The flexizyme sidesteps that too by recognising only the universal CCA at the 3-prime end, so it works with almost any tRNA. That is the double meaning of flexible — flexible about the amino acid, flexible about the tRNA — and it is why this route opens up peptide chemistry that no engineered synthetase could reach.',
      answer_cn: '正是让天然氨酰-tRNA 合成酶如此复杂的那两个识别问题。合成酶必须极其严格地识别正确的氨基酸，靠的是带编辑域的双筛机制，把任何不合适的都销毁掉——而这种严格性恰恰是引入非天然氨基酸的障碍，因为你想装的 ncAA 在它看来就是错误。Flexizyme 通过完全不识别侧链来绕开这一点：它识别的是底物上的活化基团（氰甲酯或二硝基苄酯），所以任何能转化成这种酯的分子都被接受，包括根本不是 α-L-氨基酸的 D-氨基酸、β-氨基酸和羟基酸。合成酶还必须通过保守的识别元件来识别自己的同源 tRNA。Flexizyme 也绕开了这一点，它只识别 3′ 端通用的 CCA，所以几乎任何 tRNA 都能用。这就是「flexible」的双重含义——对氨基酸灵活、对 tRNA 也灵活——也是这条路线能打开任何改造合成酶都够不到的肽化学空间的原因。'
    }
  ],
  oral: {
    q_en: 'What is a flexizyme and why is it such a powerful approach?',
    q_cn: '什么是 flexizyme？为什么它是一条如此强大的路线？',
    model_en: 'Flexizyme stands for flexible tRNA acylation ribozyme, and it comes from the Hiroaki Suga lab. It is an artificial ribozyme — catalytic RNA — with tRNA aminoacylation activity, and there is something fitting about that, because the ribosome\'s own catalytic core is RNA, so building an artificial ribozyme to charge tRNAs works in the same idiom as the machinery being reprogrammed. Its power comes from sidestepping both of the recognition problems that make natural synthetases so complex. Remember why an aaRS needs three domains and a double sieve: it must discriminate extremely strictly between chemically similar amino acids, with an editing domain hydrolysing anything that does not fit. That strictness is the single biggest obstacle to installing a non-canonical amino acid, because from the enzyme\'s point of view your ncAA is an error. The flexizyme does not recognise the amino acid side chain at all. It recognises an activating group on the substrate — a cyanomethyl ester or a dinitrobenzyl ester — so anything that can be made into such an activated ester becomes a substrate, including D-amino acids, beta-amino acids and hydroxy acids, which are not alpha-L-amino acids in the first place. Second, it does not recognise the tRNA body sequence either: it recognises the three-prime terminal DCCA region, with the flexizyme\'s GGU end pairing complementarily to the tRNA\'s CCA end, and since CCA is universal it works with almost any tRNA. That is the double meaning of flexible. What it enables is peptide chemistry well beyond the canonical repertoire — N-methyl amino acids, D-amino acids, beta-amino acids, hydroxy acids and cyclic peptides — and the whole procedure takes about a week. The cost is that it only works in vitro, because you must charge the tRNA in a tube and then add it to the cell-free reaction; there is no way to do that inside a living cell, which is why the strategy map puts flexizymes only in the in vitro row. It is commercialised for drug discovery, chiefly through systems like PeptiDream\'s RaPID, which builds huge cyclic peptide libraries with N-methyl and D-amino acids and then selects them by mRNA display — because N-methylation and cyclisation are what give a peptide protease resistance and membrane permeability, cyclosporine being the natural example.',
    checklist: ['FLEXIble tRNA acylation riboZYME, from the Suga lab', 'An artificial ribozyme with tRNA aminoacylation activity', 'Fitting, since the ribosome\'s own catalytic core is RNA', 'Sidesteps both aaRS recognition problems', 'Does not recognise the side chain — recognises an activating group', 'Cyanomethyl or dinitrobenzyl ester, so any such ester is a substrate', 'Hence D-amino acids, beta-amino acids, hydroxy acids all work', 'Does not recognise the tRNA body — only the 3-prime DCCA', 'Flexizyme GGU pairs with tRNA CCA; CCA is universal', 'Double meaning of flexible: amino acid and tRNA', 'Enables N-methyl, D-, beta-amino acids, hydroxy acids, cyclic peptides', 'In vitro only: must charge the tRNA in a tube first', 'Commercialised via RaPID; N-methylation and cyclisation give protease resistance']
  }
},

{
  id: '3-14',
  chapter: 3,
  lecture: 'Lecture 8',
  section: '3.14',
  enTitle: 'What reprogramming the code is good for',
  cnTitle: '重编程遗传密码有什么用',
  slides: 'L8 s.49',
  coverage: 'full',
  coverageNote: 'The application list is on the slide. What each application actually buys, and the two that are already products, is the beyond-the-slides material — and both connect directly back to earlier batches.',
  summary: {
    en: 'Five application areas. Encoding amino acids that mimic post-translationally modified residues gives homogeneously modified protein for studying PTM regulation. Photocaged amino acids allow protein function to be switched on with light, with sub-second timing. Fluorophore and probe ncAAs allow site-specific labelling without antibodies or large fusions. Medical applications include antibody-drug conjugates with defined stoichiometry and biocontainment. And alternative molecular biologies lead into Lecture 11.',
    cn: '五个应用方向。编码模拟翻译后修饰残基的氨基酸，可以得到修饰均一的蛋白用于研究翻译后修饰的调控。光笼氨基酸可以用光在亚秒级时间尺度上开启蛋白功能。带荧光基团或探针的 ncAA 可以实现位点特异的标记，不需要抗体或大的融合蛋白。医学应用包括化学计量比确定的抗体偶联药物以及生物防控。而「另类分子生物学」则通向第 11 讲。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '五个应用里有**三个在解决同一个问题：均一性**。\n\n' +
            '化学修饰打在折好的蛋白上，会打中很多个相似的残基、给你一锅混合物；而**在 DNA 层面编码这个修饰，它就只出现在一个位置**。',
  skipIt: '五个方向的具体例子不必逐条背。**第 7–8 讲没有 RECAP 可引**，这是判断——但**「均一性」这条主线要抓住**，它把三个看起来无关的应用串成了一件事，而且直接回到第 1-3 节那个论证。',
  explain: [
    {
      q: '为什么说五个应用里有三个在解决同一个问题？',
      a: '**因为 PTM 模拟、ADC、位点特异标记，三者都在对付「化学修饰给你一锅混合物」这件事。**\n\n' +
         '**PTM 模拟**：你想研究磷酸化怎么调控一个蛋白。常规做法是拿激酶去磷酸化它——**结果是一锅混合物**：有的位点被修饰了、有的没有、有的被修饰了两处。**你测到的活性是一个平均值，而你想知道的是「这一个位点被修饰时会怎样」。**\n\n' +
         '**ADC（抗体偶联药物）**：常规做法是把药偶联到赖氨酸或半胱氨酸上，而**抗体上有很多个**。得到的是**药物抗体比（DAR）从 0 到 8 散开的混合物**——这在药代和监管上都是问题。\n\n' +
         '**位点特异标记**：想在蛋白某处装一个荧光基团。用化学方法标记，又是随机打在一堆赖氨酸上。\n\n' +
         '**三个场景，同一个病根：化学试剂认的是化学基团，而蛋白表面有很多个一样的化学基团。**\n\n' +
         '**而遗传密码重编程给的是同一个解法：把这个修饰在 DNA 层面编码进去，它就只出现在你指定的那一个位置。**\n\n' +
         '**ADC 那个例子最干净：编码一个带生物正交基团（叠氮、酮）的 ncAA 在指定位置，DAR 每次都精确等于 2。**',
      takeaway: '化学试剂认基团，而蛋白表面有很多个一样的基团。在 DNA 层面编码，修饰就只出现在一个位置。'
    },
    {
      q: '这一条跟第 1-3 节那个论证是什么关系？',
      a: '**是同一个论证，隔了七讲之后的兑现。**\n\n' +
         '**第 1-3 节问的是：既然最终产物是蛋白，为什么要绕道 DNA？**\n\n' +
         '答案有三层：中心法则（蛋白不能被扩增）→ **蛋白水平缺乏定点操作的工具** → 所以只能在 DNA 层面动手。\n\n' +
         '**第二层当时举的例子就是 NHS 酯**：它认赖氨酸，而蛋白有几十个赖氨酸，**所以你得到一锅混合物**。\n\n' +
         '**而这一节就是那个问题的正面解决方案。**\n\n' +
         '当时的结论是「所以要回到 DNA 去加一个标签（比如工程一个 Cys 进去）」。**但那还是在用那 20 种氨基酸凑合。**\n\n' +
         '**现在你可以直接在 DNA 层面编码一个自带反应基团的氨基酸**——不是「加一个 Cys 然后用 maleimide」，而是「在这个位置放一个带叠氮的氨基酸」，然后用一个**在生物体系里不跟任何天然基团反应的**化学（生物正交化学）去接。\n\n' +
         '**所以这条线是这样走完的：**\n\n' +
         '**第 1 讲**：蛋白水平没有定点工具 → 退到 DNA。\n\n' +
         '**第 7–8 讲**：在 DNA 层面把「定点」这件事做到了极致——**连那 20 种氨基酸的限制都突破了。**\n\n' +
         '**口试里能把第一讲和第八讲用这一句话连起来，说明你读的是一门课，不是十二个孤立的话题。**',
      takeaway: '第 1-3 节说「蛋白层面没有定点工具」，这一节就是那个问题在 DNA 层面的最终解法。'
    },
    {
      q: '「合成营养缺陷」为什么被说成是一种进化绕不过去的 kill switch？',
      a: '**因为它依赖的东西在自然界里根本不存在。**\n\n' +
         '做法：改造一个生物，让它的某个**必需蛋白**必须含有一个 ncAA 才能工作。发酵罐里你把这个 ncAA 加进培养基，它就活得好好的。\n\n' +
         '**一旦逃逸到环境里——自然界没有这种分子，它造不出那个蛋白，死。**\n\n' +
         '**为什么说「进化绕不过去」？**\n\n' +
         '对比一下常规的 kill switch：比如「表达一个毒素，用某个化学品抑制它」。这类开关**总是可以被突变绕过**——把毒素基因突变掉、把开关的启动子突变掉，逃逸株就活了。**你在第 2-7 节见过一模一样的现象**：有毒蛋白的渗漏表达会筛出 escape mutant。\n\n' +
         '**而合成营养缺陷不一样：细胞需要的是一个物质，而那个物质在环境里不存在。**\n\n' +
         '突变帮不了它——它不是被什么东西压制着，它是**缺一样原料**。**没有任何突变能凭空造出一个自然界不存在的化合物的生物合成通路。**\n\n' +
         '**所以这类 kill switch 的可靠性来自化学，而不是来自基因调控。**\n\n' +
         '**跟第 3-12 节的遗传防火墙对照着看**：那一条是「别人读不懂我的基因」，这一条是「我离开了这里就活不了」。**两条防线的方向不同，可以叠加使用。**',
      takeaway: '它缺的是一种自然界不存在的原料，不是被什么压制着。所以突变无从绕起——可靠性来自化学而非调控。'
    },
    {
      q: '光笼氨基酸为什么值得单独记一笔？',
      a: '**因为它给了一个别的手段给不了的东西：时间分辨率。**\n\n' +
         '想研究一个蛋白在细胞里的动态过程——比如某个信号一开启，接下来几秒内发生了什么。**问题是你怎么「在某一刻打开」它？**\n\n' +
         '常规手段全都太慢：\n\n' +
         '**诱导表达**（IPTG、Tet，第 2-7、2-22 节）→ 从加药到蛋白积累起来要**几十分钟到几小时**。\n\n' +
         '**加抑制剂或激动剂** → 要等它扩散、进细胞、结合，**分钟级**，而且不可逆地污染了体系。\n\n' +
         '**光笼氨基酸的做法完全不同：蛋白已经在那里了，只是活性位点上那个关键残基被一个光敏基团「笼住」了，所以没有活性。**\n\n' +
         '**你照一下光，笼子被打断，蛋白当场变成活的。**\n\n' +
         '**时间尺度是亚秒级的**，而且你可以**只照细胞的某一小块区域**——空间分辨率也有了。\n\n' +
         '**所以它解决的不是「能不能做」，是「能不能在正确的时刻做」。**\n\n' +
         '这也是一个很好的例子说明为什么要装 ncAA：**你不是想给蛋白加个装饰，你是想给它加一个天然氨基酸提供不了的功能**——这里是「可以被光控制」。',
      takeaway: '蛋白已经在那儿只是被笼住了，照光当场激活。诱导表达要几十分钟，而它是亚秒级的，还能只照一小块。'
    }
  ],
  points: [
    { term: 'PTM-mimicking residues', en: 'Genetically encoded amino acids corresponding to post-translationally modified residues let you make a homogeneously phosphorylated, acetylated or methylated protein to study PTM regulation, instead of the heterogeneous mixture a kinase reaction gives.', cn: '基因编码那些对应翻译后修饰残基的氨基酸，可以做出磷酸化、乙酰化或甲基化程度均一的蛋白来研究修饰的调控，而不是激酶反应给出的那种不均一混合物。' },
    { term: 'Photocaged amino acids', en: 'Rapid activation of protein function with light, allowing dynamic processes in cells to be studied with sub-second timing.', cn: '用光快速激活蛋白功能，从而以亚秒级的时间分辨率研究细胞内的动态过程。' },
    { term: 'Fluorophores and biophysical probes', en: 'Follow changes in protein structure and activity, with site-specific labelling that needs no antibodies and no large fluorescent-protein fusions.', cn: '追踪蛋白结构和活性的变化，实现位点特异的标记，不需要抗体也不需要大的荧光蛋白融合。' },
    { term: 'Medical applications', en: 'Antibody-drug conjugates with defined stoichiometry, and biocontainment.', cn: '化学计量比确定的抗体偶联药物，以及生物防控。' },
    { term: 'Alternative molecular biologies', en: 'Synthetic cells and life, and curiosity-driven work — the subject of Lecture 11.', cn: '合成细胞与合成生命，以及纯粹出于好奇的研究——这是第 11 讲的主题。' }
  ],
  beyondPoints: [
    { term: 'Site-specific antibody-drug conjugates', en: 'Conventional ADCs conjugate the drug to lysines or cysteines, of which an antibody has many, so you get a heterogeneous mixture with a drug-to-antibody ratio spread across 0 to 8. That heterogeneity is a regulatory and pharmacokinetic problem. Encode a single ncAA carrying a bio-orthogonal handle such as an azide or ketone at a defined position, and the ratio is exactly 2, every time.', cn: '常规抗体偶联药物把药物连到赖氨酸或半胱氨酸上，而抗体上这两类残基很多，所以得到的是药物/抗体比在 0–8 之间分布的不均一混合物。这种不均一性在监管和药代动力学上都是麻烦。改为在确定位置编码一个带生物正交基团（如叠氮或酮基）的 ncAA，比值就每次都精确等于 2。' },
    { term: 'Why that connects back', en: 'It is the same argument as in Batch 1 about what you can do at the protein level and why it is not enough: chemical conjugation is not site-specific, so you fix the problem at the DNA level instead.', cn: '这与第一部分讲「在蛋白层面能做什么、为什么不够」是同一个论证：化学偶联做不到位点特异，所以改到 DNA 层面去解决。' },
    { term: 'Biocontainment by synthetic auxotrophy', en: 'Engineer an organism so that an essential protein requires an ncAA. The ncAA is supplied in the fermenter but does not exist in nature, so an escaped organism cannot make that protein and dies. It is a genetic kill-switch that cannot be evolved around, because there is no natural source of the required molecule.', cn: '改造一个生物，让它的某个必需蛋白依赖一个 ncAA。这个 ncAA 在发酵罐里供应，但在自然界不存在，所以一旦逃逸，这个生物就造不出那个蛋白而死亡。这是一个无法通过进化绕过的遗传自杀开关，因为所需分子在自然界没有来源。' },
    { term: 'Why homogeneity is the recurring theme', en: 'Three of these applications — PTM mimics, ADCs, site-specific labelling — are all solving the same problem: chemistry applied to a folded protein hits many similar residues and gives a mixture, whereas encoding the modification at the DNA level puts it in exactly one place.', cn: '这些应用中有三个——翻译后修饰模拟、抗体偶联药物、位点特异标记——解决的其实是同一个问题：对折叠好的蛋白做化学修饰会打中很多相似的残基、给出混合物，而在 DNA 层面编码这个修饰，就能把它精确地放在唯一一个位置。' }
  ],
  terms: [
    { en: 'Photocaged amino acid', cn: '光笼氨基酸', def_en: 'An amino acid bearing a light-removable protecting group, allowing protein function to be switched on with sub-second timing.', def_cn: '带有可被光去除的保护基团的氨基酸，可以在亚秒级时间尺度上开启蛋白功能。' },
    { en: 'Bio-orthogonal handle', cn: '生物正交基团', def_en: 'A chemical group such as an azide or ketone that reacts with a specific partner and with nothing in the cell, allowing site-specific conjugation.', def_cn: '叠氮或酮基这类只与特定搭档反应、不与细胞内任何东西反应的化学基团，可实现位点特异的偶联。' },
    { en: 'Drug-to-antibody ratio (DAR)', cn: '药物抗体比', def_en: 'The number of drug molecules per antibody in an ADC. Conventional conjugation gives a spread of 0 to 8; ncAA incorporation gives exactly 2.', def_cn: '抗体偶联药物中每个抗体上连接的药物分子数。常规偶联给出 0–8 的分布；用 ncAA 则精确等于 2。' },
    { en: 'Synthetic auxotrophy', cn: '合成营养缺陷', def_en: 'Engineering dependence on a molecule that does not exist in nature, creating a kill-switch that cannot be evolved around.', def_cn: '人为制造对一个自然界不存在的分子的依赖，从而形成无法通过进化绕开的自杀开关。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does encoding a PTM-mimicking amino acid beat treating the protein with a kinase?',
      q_cn: '为什么编码一个模拟翻译后修饰的氨基酸比用激酶处理蛋白更好？',
      options: ['It costs less than running a purified kinase reaction', 'Every molecule carries the modification at one defined position', 'Kinases do not work in vitro on a purified substrate', 'It raises the yield of modified protein per litre of culture'],
      answer: 1,
      why_en: 'A kinase reaction modifies some molecules and not others, and often at several sites, so you cannot attribute an effect to a specific modification. Encoding it puts the modification at one defined position in every molecule.',
      why_cn: '激酶反应会修饰一部分分子而不修饰另一部分，而且常常修饰好几个位点，所以你无法把某个效应归因于特定的修饰。而编码它可以让每一个分子的修饰都在同一个确定位置。' },
    { type: 'mcq',
      q_en: 'What does an ncAA-based antibody-drug conjugate achieve that conventional conjugation cannot?',
      q_cn: '基于 ncAA 的抗体偶联药物做到了常规偶联做不到的什么？',
      options: ['Each drug molecule is more potent than in a conventional conjugate', 'A fixed drug-to-antibody ratio of 2 in every molecule of product', 'A conjugate stable enough at room temperature to need no cold storage', 'A cheaper manufacturing route than lysine or cysteine chemistry'],
      answer: 1,
      why_en: 'Conventional chemistry targets lysines or cysteines, of which an antibody has many, so the product is a heterogeneous mixture — a regulatory and pharmacokinetic problem. A single encoded bio-orthogonal handle at a defined position fixes the stoichiometry.',
      why_cn: '常规化学针对赖氨酸或半胱氨酸，而抗体上这两类残基很多，所以产物是不均一的混合物——这在监管和药代动力学上都是麻烦。在确定位置编码一个生物正交基团就固定了化学计量比。' },
    { type: 'mcq',
      q_en: 'Why can synthetic auxotrophy not be evolved around?',
      q_cn: '为什么合成营养缺陷无法通过进化绕开？',
      options: ['The mutation rate is too low for an escape mutant to arise', 'The ncAA it depends on does not exist outside the fermenter', 'The engineered gene is duplicated, so one copy always survives', 'An escaping cell is killed by a toxin gene that switches on outside the fermenter'],
      answer: 1,
      why_en: 'Ordinary kill-switches fail because a mutant that disables them survives. Here the dependency is on a molecule that simply is not available outside the fermenter, so escape is fatal regardless of what mutations occur.',
      why_cn: '普通的自杀开关会失效，因为把它破坏掉的突变体能活下来。而这里依赖的是一个在发酵罐之外根本不存在的分子，所以无论发生什么突变，逃逸都是致命的。' },
    { type: 'short',
      q_en: 'Give two applications of ncAA incorporation and say why the genetic code had to be changed for each.',
      q_cn: '举出 ncAA 引入的两个应用，并说明每一个为什么必须改变遗传密码。',
      accept: ['ADC', 'stoichiometry', 'homogeneous', 'photocaged', 'biocontainment', 'labelling'],
      answer_en: 'First, site-specific antibody-drug conjugates. Conventional ADCs attach the drug to lysines or cysteines, and an antibody has many of both, so you get a heterogeneous mixture with a drug-to-antibody ratio spread from zero to eight, which is a regulatory and pharmacokinetic problem. Chemistry on a folded protein simply cannot be made site-specific, so the fix has to happen at the DNA level: encode a single non-canonical amino acid carrying a bio-orthogonal handle such as an azide or ketone at one defined position, and the ratio is exactly two, every time. Second, biocontainment by synthetic auxotrophy. You engineer an organism so that an essential protein requires an ncAA that is supplied in the fermenter but does not exist in nature. If the organism escapes it cannot make that protein and dies. This has to be done through the code because the point is to create a dependency that evolution cannot route around, and only a molecule with no natural source achieves that.',
      answer_cn: '第一，位点特异的抗体偶联药物。常规 ADC 把药物连到赖氨酸或半胱氨酸上，而抗体上这两类残基都很多，所以得到的是药物/抗体比在 0 到 8 之间分布的不均一混合物，这在监管和药代动力学上都是问题。对折叠好的蛋白做化学修饰根本无法做到位点特异，所以只能到 DNA 层面去解决：在一个确定的位置编码一个带生物正交基团（如叠氮或酮基）的非天然氨基酸，比值就每次都精确等于 2。第二，通过合成营养缺陷实现生物防控。改造一个生物，让它的某个必需蛋白依赖一个在发酵罐中供应、但自然界不存在的 ncAA。一旦逃逸，它造不出那个蛋白就会死亡。这件事必须通过遗传密码来做，因为目的是制造一种进化无法绕过的依赖，而只有一个在自然界没有来源的分子才能做到这一点。'
    }
  ],
  oral: {
    q_en: 'What is genetic code reprogramming actually good for?',
    q_cn: '遗传密码重编程到底有什么用？',
    model_en: 'The slide lists five areas, and it is worth saying what each actually buys. First, genetically encoded amino acids corresponding to post-translationally modified residues. That lets you make a homogeneously phosphorylated, acetylated or methylated protein in order to study how that modification regulates function — whereas a kinase reaction gives you a heterogeneous mixture modified at several sites to varying extents, from which you cannot attribute anything. Second, photocaged amino acids, where a light-removable group blocks function until you illuminate. That gives rapid activation of protein function with light and lets you study dynamic processes in cells with sub-second timing. Third, ncAAs carrying fluorophores or other biophysical probes, which let you follow changes in protein structure and activity with site-specific labelling, without antibodies and without large fluorescent-protein fusions that might perturb what you are measuring. Fourth, medical applications, and the clearest of those is site-specific antibody-drug conjugates. Conventional ADCs conjugate the drug to lysines or cysteines, of which an antibody has many, so the product has a drug-to-antibody ratio spread across zero to eight — a genuine regulatory and pharmacokinetic nightmare. Encode a single ncAA with a bio-orthogonal handle, an azide or a ketone, at a defined position, and you get a ratio of exactly two, every time. That is the same argument made earlier in the course about protein-level chemistry not being site-specific, so you fix it at the DNA level. The other medical application is biocontainment through synthetic auxotrophy: engineer an organism so an essential protein requires an ncAA that is supplied in the fermenter but does not exist in nature, so an escapee simply dies — a kill-switch that cannot be evolved around, because there is no natural source of the required molecule. And fifth, alternative molecular biologies and synthetic life, which leads directly into Lecture 11. If there is one theme running through several of these, it is homogeneity: chemistry on a folded protein hits many similar residues and gives a mixture, whereas encoding the change at the DNA level puts it in exactly one place.',
    checklist: ['Five application areas on the slide', 'PTM-mimicking residues: homogeneous modified protein, not a kinase mixture', 'Photocaged amino acids: light activation, sub-second timing', 'Fluorophores and probes: site-specific labelling, no antibodies or big fusions', 'Medical: site-specific ADCs and biocontainment', 'Conventional ADC: lysines/cysteines give DAR spread 0-8', 'ncAA with bio-orthogonal handle gives DAR exactly 2', 'Same argument as before: chemistry is not site-specific, so fix it at DNA level', 'Synthetic auxotrophy: essential protein needs an ncAA absent from nature', 'A kill-switch evolution cannot route around', 'Alternative molecular biologies leads to Lecture 11', 'Recurring theme: homogeneity — one defined position instead of a mixture']
  }
}

]);
