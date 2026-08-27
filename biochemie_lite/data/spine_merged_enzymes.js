/* MERGED SPINES — enzymes. One body of content per topic, not one per book.
   Keyed by topicKey, so the app shows the topic once and names every section it
   covers in its header. The per-node spines stay where they are; a `key:` spine
   simply wins over them.

   Backbone: Lehninger. Folded in: what the Czech sections add and Lehninger does
   not carry — E.C. nomenclature, the activity units U and katal, the temperature
   optimum, the proximity effect, and the naming the exam actually uses.

   topics: enzyme-kinetics · enzymes-introduction · enzyme-mechanism · regulatory-enzymes
*/

window.BIOLITE_SPINE["key:enzyme-kinetics"] = {
  assumed: ["protein", "amino acid", "enzyme", "substrate", "product", "cell", "pH",
            "hydrogen bond", "active site", "active centre", "ligand", "cofactor",
            "coenzyme", "ATP", "DNA", "conformation", "buffer", "helix", "hyperbola",
            "asymptote", "histidine", "lysine", "serine", "taq polymerase", "pcr",
            "nad+", "nadp+", "aspirin", "prostaglandin", "gastric juice", "cytosol",
            "pepsin", "catalase", "carbonic anhydrase", "fumarase",
            "acetylcholinesterase", "beta-lactamase", "aldolase", "hexokinase",
            "chymotrypsin", "alcohol dehydrogenase", "dehydrogenase", "glycolysis",
            "protease", "trypanosome", "polyamine", "ornithine decarboxylase",
            "prokaryote", "denaturation"],
  nodeTitle_en: "Enzyme kinetics",
  nodeTitle_cn: "酶动力学",
  title_en: "**What you measure in a tube, what falls out of the algebra, and what the numbers do and do not mean**",
  title_cn: "**在试管里你到底测了什么、代数最后掉出来的是什么，以及这些数字能说和不能说什么**",
  steps: [
    {
      en: "A reaction does not run merely because it is downhill. For a starting substance to become a product, its molecules must first be given enough energy to climb an energy barrier, and that quantity is the activation energy. There are exactly three ways to get more molecules over that barrier: heat the system, which raises the energy of the reactant molecules; excite them with electromagnetic radiation, that is with light, after which they usually react along a different path and are no longer doing the same reaction at all; or catalyse — let a catalyst join the reactants temporarily so that the reaction runs by another mechanism whose barrier is lower. **Living organisms are thermolabile, meaning their own molecules are destroyed by heat, so heating is the one route they cannot take, and catalysis is what is left to them.** Everything below exists because that first route is closed.",
      cn: "反应并不会因为「下坡」就自己跑起来。要让起始物变成产物，必须先给它的分子足够的能量去翻过一道能垒，这份能量叫活化能（activation energy）。让更多分子翻过这道能垒，恰好有三条路：加热体系，提高反应物分子的能量；用电磁辐射（也就是光）激发它们，此后反应通常沿另一条路径进行，已经不再是同一个反应；或者催化 —— 让催化剂暂时与反应物结合，使反应沿另一条能垒更低的机制进行。**生物体是热不稳定的（thermolabile），自己的分子会被热毁掉，所以加热恰恰是它唯一走不了的一条路，剩下能走的就只有催化。**下面的一切，都是因为第一条路被封死了才存在。",
      src: "CZ p.54, §3.3.1"
    },
    {
      link_en: "in an organism that catalyst is an enzyme, and here is the whole experiment done on it",
      link_cn: "在生物体内，那个催化剂就是酶；下面是对它做的全部实验",
      en: "Put a known amount of enzyme in a tube, add substrate, and measure how fast product appears. Then change one thing — how much substrate, the pH, add a drug — and measure again. Watching how a reaction rate answers to what you change is enzyme kinetics, and it is the oldest way of finding out how an enzyme works, older than solving its structure and older than mutating single residues. One picture has to be in place before any of it makes sense. **At any instant every enzyme molecule in the tube is in one of two forms — free enzyme E with nothing bound, and enzyme-substrate complex ES with a substrate molecule sitting in its active site** — and everything below is bookkeeping on those two. The scheme is E + S ⇌ ES → E + P, the first step fast and reversible with the substrate held only by weak non-covalent interactions, the second slower and effectively irreversible. The same three quantities are also written as substrate A, product X and limiting rate V_lim.",
      cn: "往试管里放已知量的酶，加底物，测产物出现得有多快。然后改一样东西 —— 底物加多少、pH 是多少、加不加某种药 —— 再测一次。看反应速率如何回应你的改动，这门学问就叫酶动力学（enzyme kinetics），它是弄清一个酶怎么工作的最古老手段，比解它的结构更早，也比逐个突变残基更早。有一幅图必须先摆好，否则后面全看不懂。**任何一个瞬间，管子里的每一个酶分子都处在两种形式之一 —— 游离酶 E（什么也没结合）和酶-底物复合物 ES（活性位点里坐着一个底物分子）—— 下面所有内容都是围绕这两样东西记账。**反应式是 E + S ⇌ ES → E + P：第一步快速可逆，底物仅由弱的非共价相互作用握住；第二步较慢，且实际上不可逆。同样这三个量，也被写作底物 A、产物 X、极限速率 V_lim。",
      src: "A p.188, §6.3 · CZ p.55, §3.3.1"
    },
    {
      link_en: "and the first problem is that the thing you are varying will not stay still",
      link_cn: "而第一个麻烦是：你要改的那个量自己不肯待着不动",
      en: "You want the rate as a function of substrate concentration, written [S]. But [S] falls while you watch, because the enzyme is eating it. The fix is to measure only the very beginning: the rate measured over a window in which under two or three percent of the substrate has been used up is the initial velocity, written V0, and over that window [S] can be treated as a constant. This works because the enzyme is usually present in nanomolar amounts while [S] is five or six orders of magnitude higher. Do it at one substrate concentration after another, plot V0 against [S], and out comes a hyperbola: almost a straight line at low [S], then a bend, then a creep towards a ceiling it never touches. **That ceiling is the maximum velocity, Vmax, and because the curve never reaches it, Vmax is always obtained by extrapolation and never read straight off the graph.** One family of enzymes gives an S-shaped curve instead of a hyperbola — the regulatory enzymes — and they are the standing exception to everything that follows.",
      cn: "你想要的是「速率随底物浓度 [S] 如何变化」。可是你一边看，[S] 一边在掉，因为酶正在把它吃掉。对策是只测最开头那一小段：在「底物被消耗掉不到百分之二到三」的时间窗里测出的速率，叫初速度（initial velocity），记作 V0；在这个窗口里 [S] 可以当作常数。这样做行得通，是因为酶通常只有纳摩尔级的量，而 [S] 要高出五到六个数量级。换一个底物浓度再做一次、再做一次，把 V0 对 [S] 作图，得到的是一条双曲线：低 [S] 时几乎是直线，然后拐弯，再慢慢爬向一个永远碰不到的天花板。**这个天花板就是最大速度 Vmax；而正因为曲线永远够不到它，Vmax 永远是外推出来的，绝不是直接从图上读出来的。**有一类酶给出的不是双曲线而是 S 形曲线 —— 调节酶 —— 它们是下面全部内容的固定例外。",
      src: "A p.189, §6.3",
      see: [
        { id: "3-7", en: "the regulatory enzymes and their S-shaped curves", cn: "调节酶与它们的 S 形曲线" }
      ]
    },
    {
      link_en: "and the second problem is that ES is invisible. One assumption gets round it",
      link_cn: "第二个麻烦是 ES 你看不见。有一个假设绕过了它",
      en: "Mix enzyme with a large excess of substrate and there is first a very short transient, the pre-steady state, during which ES builds up from nothing. After that the reaction settles into a steady state, in which ES is being formed exactly as fast as it is being consumed. **The concentration of ES therefore stays nearly constant through most of the reaction**, and since almost everything measurable happens in that regime, the classical treatment is properly called steady-state kinetics. Three pairs of names sit behind it and the split matters. Victor Henri proposed in 1903, following a suggestion of Adolphe Wurtz, that an ES complex forms at all. Leonor Michaelis and Maud Menten expanded that in 1913 into a general theory, assuming a fast reversible binding step followed by a slower breakdown, the two in equilibrium. G. E. Briggs and J. B. S. Haldane replaced the equilibrium assumption in 1925 with the steady-state one, and the derivation everyone actually uses is theirs.",
      cn: "把酶和大大过量的底物混在一起，先有一段极短的过渡期，叫前稳态（pre-steady state），其间 ES 从零开始累积。之后反应落入稳态（steady state）：ES 生成的速率恰好等于它被消耗的速率。**于是 ES 的浓度在余下的大部分反应过程中几乎不变；而既然几乎所有可测量的事都发生在这个区间里，整套经典处理的正式名字其实是稳态动力学。**它背后站着三对名字，这个拆分是有意义的。Victor Henri 在 1903 年（承接 Adolphe Wurtz 的提议）提出：必须先形成 ES 复合物这件事本身。Leonor Michaelis 与 Maud Menten 在 1913 年把它扩展成一套普遍理论，假设先有一个快速可逆的结合步骤、再有一个较慢的分解步骤，并设两者处于平衡。G. E. Briggs 与 J. B. S. Haldane 在 1925 年用稳态假设换掉了平衡假设，而今天大家真正在用的推导是他们那一版。",
      src: "A p.189–190, §6.3"
    },
    {
      link_en: "with that assumption in hand the algebra is four steps long",
      link_cn: "有了这个假设，代数只有四步",
      en: "Start from E plus S forming ES, and ES going on to E plus P; early in the reaction there is almost no product, so the reverse step from P back to S is dropped. Step one: write the rate at which ES forms, governed by the rate constant k1, and the rate at which ES disappears, governed by k-1 for falling apart plus k2 for reacting onward. Step two: set those two equal — that equality is the steady-state assumption said in symbols. Step three: solve for the concentration of ES, which is legitimate because total enzyme equals free plus bound, and because substrate is in such vast excess that the amount tied up on enzyme at any instant is negligible. A particular lump of rate constants is then left sitting in the denominator, (k2 + k-1)/k1, and that lump is given a name: the Michaelis constant, Km. Step four: substitute back, and note that at saturating substrate every enzyme molecule is in the ES form, so the coefficient in front becomes Vmax. What you now have is the Michaelis-Menten equation, and **notice how Km arrived — as a collection of three rate constants that fell out of the algebra, never as a statement about how tightly anything binds**.",
      cn: "起点是 E + S 生成 ES，ES 再生成 E + P；反应早期几乎没有产物，所以由 P 回到 S 的逆反应被丢掉。第一步：分别写出 ES 的生成速率（由速率常数 k1 决定）和 ES 的消失速率（由散架的 k-1 加上继续反应的 k2 决定）。第二步：令两者相等 —— 这个等式就是稳态假设写成了符号。第三步：由它解出 ES 的浓度；这一步合法，因为总酶量等于游离加结合，而底物大大过量，任一瞬间被酶占住的底物量可以忽略。化简完毕，分母上剩下一坨特定的速率常数组合 (k2 + k-1)/k1，它被起了个名字：米氏常数（Michaelis constant）Km。第四步：代回速率表达式，并注意在饱和底物下每个酶分子都以 ES 形式存在，于是前面的系数变成 Vmax。**这样得到的就是米氏方程；请留意 Km 是怎么出场的 —— 它是从代数里掉出来的三个速率常数的组合，而从来不是一句关于「结合有多紧」的话。**",
      src: "A p.190, §6.3"
    },
    {
      link_en: "so where does the familiar one-line definition come from?",
      link_cn: "那大家背的那句一行定义又是从哪来的？",
      en: "Put V0 equal to exactly half of Vmax into the Michaelis-Menten equation, divide through by Vmax, and the algebra collapses to Km + [S] = 2[S], hence Km = [S]. So the sentence everyone memorises — **Km is the substrate concentration at which the reaction runs at half its maximum rate** — is a consequence of the equation rather than its definition, and a very practical one, because it is how Km is actually measured. There are now two statements about Km and they do different work: the algebraic one, that Km is that lump of rate constants, which is where its meaning lives; and the operational one, that Km is [S] at half Vmax, which is where its measurement lives. One thing more to hang on to, because it is the fastest check on an answer that has drifted: Km has the units of a molar concentration. An answer treating it as a speed is wrong before anything else is considered.",
      cn: "在米氏方程里令 V0 恰好等于 Vmax 的一半，两边同除以 Vmax，代数化简后得到 Km + [S] = 2[S]，于是 Km = [S]。**所以大家背的那一句 —— 「Km 是反应速率达到最大值一半时的底物浓度」—— 是方程的一个推论，而不是它的定义；而且是非常实用的推论，因为 Km 实际上就是这么测出来的。**现在关于 Km 有两句话，各管各的用处：代数上的那句 —— Km 就是那一坨速率常数，它的含义住在这里；操作上的那句 —— Km 是半速时的 [S]，它的测法住在这里。还有一条必须抓住，因为它是检查答案有没有跑偏的最快办法：Km 的量纲是摩尔浓度。一个把它当速度用的答案，在别的都还没看之前就已经错了。",
      src: "A p.191, §6.3"
    },
    {
      link_en: "and now the thing that is got wrong most often",
      link_cn: "接下来是最常被搞错的那一处",
      en: "**Km has the units of a molar concentration, and it does not measure how tightly an enzyme holds its substrate except under one condition that most enzymes fail to meet.** For the two-step scheme Km equals (k2 + k-1)/k1, a mixture of how fast the substrate binds, how fast it falls off again, and how fast the chemistry happens. It measures how tightly the enzyme holds its substrate under one condition only: if the chemical step is much slower than falling off, k2 becomes negligible, Km reduces to k-1/k1, and that ratio is the dissociation constant Kd of the ES complex. That condition does not hold for most enzymes. Run it the other way — k2 much larger than k-1 — and Km becomes k2/k1, a number about chemistry with nothing to do with binding; and more commonly the reaction passes through several further steps after ES forms, which makes Km a complicated function of many constants. What Km is genuinely good for is this: an enzyme's Km tends to be close to the concentration of its substrate inside the cell. An enzyme working on a scarce metabolite usually has a low Km, one working on an abundant metabolite a high one — so Km tells you where on its own curve that enzyme normally sits in life, and therefore whether its rate is currently sensitive to substrate supply or already flat out.",
      cn: "**Km 的量纲是摩尔浓度；而它并不衡量酶把底物抓得多紧 —— 只有在一个条件下它才衡量，而多数酶都不满足那个条件。**对那个两步机制，Km = (k2 + k-1)/k1 —— 里面掺着「底物结合有多快」「它散掉有多快」「化学反应有多快」三件事。它衡量「酶把底物抓得多紧」只在一种条件下成立：当化学步骤远慢于散架时，k2 可以忽略，Km 退化成 k-1/k1，而这个比值正是 ES 复合物的解离常数 Kd。这个条件对多数酶并不成立。反过来，若 k2 远大于 k-1，Km 就变成 k2/k1 —— 一个关于化学、与结合毫无关系的数；更常见的情况是 ES 形成之后反应还要再走好几步，那时 Km 会变成许多速率常数的复杂函数。Km 真正有用的地方在这一条：一个酶的 Km 往往与它底物在细胞里的实际浓度相近。作用于稀有代谢物的酶通常 Km 低，作用于丰富代谢物的酶通常 Km 高 —— 于是 Km 告诉你的是：这个酶在活体里平时待在自己那条曲线的哪一段，因而它此刻的速率是对底物供应敏感、还是已经开到了头。",
      src: "A p.192–193, §6.3",
      see: [
        { id: "L-13-5-1", en: "where this rule pays off — which enzyme in a pathway responds to supply", cn: "这条规律的回报之处 —— 一条通路里究竟哪个酶会对底物供应作出响应" }
      ]
    },
    {
      link_en: "Vmax has the same trouble: it is not a fundamental property either",
      link_cn: "Vmax 也有同样的毛病：它同样不是一个基本性质",
      en: "Vmax depends on whichever step happens to be the slowest one, so it changes meaning from enzyme to enzyme. In the plain two-step scheme Vmax equals k2 times the total enzyme; but take the very common case where what limits the reaction is release of the product, and at saturation most of the enzyme is sitting there as the enzyme-product complex, so Vmax equals k3 times total enzyme instead. Rather than chase which constant it is each time, define a general one. **kcat is the rate constant of whatever step is rate-limiting, it equals Vmax divided by the total enzyme concentration, and it is also called the turnover number**: how many substrate molecules one enzyme molecule converts per unit time when it is saturated. It is a first-order rate constant, so its units are one over time — and the same quantity is tabulated sometimes per second and sometimes per minute, so reading the unit first is the difference between a right and a wrong answer. The spread across real enzymes is enormous: catalase forty million per second, carbonic anhydrase four hundred thousand, acetylcholinesterase fourteen thousand, the antibiotic-destroying beta-lactamase two thousand, fumarase eight hundred, and the ATP-splitting RecA protein one half — one turnover every two seconds. Eight orders of magnitude, and all of them are called enzymes.",
      cn: "Vmax 取决于「碰巧哪一步最慢」，所以它的含义会随酶而变。在朴素的两步机制里 Vmax 等于 k2 乘以总酶量；但取一个很常见的情形：限速的是产物的释放，那么饱和时大部分酶就以「酶-产物复合物」的形式待在那里，Vmax 变成 k3 乘以总酶量。与其每次都去追究到底是哪个常数，不如定义一个一般的。**kcat 就是「不管哪一步限速、那一步的速率常数」，它等于 Vmax 除以总酶浓度，还有一个名字叫周转数（turnover number）：饱和时一个酶分子在单位时间里转化掉多少个底物分子。**它是一级速率常数，单位是时间的倒数 —— 而同一个量有时按每秒列表、有时按每分钟列表，先看单位就是对与错的分界。真实酶之间的跨度大得惊人：过氧化氢酶每秒四千万次，碳酸酐酶四十万次，乙酰胆碱酯酶一万四千次，专拆抗生素的 β-内酰胺酶两千次，延胡索酸酶八百次，而分解 ATP 的 RecA 蛋白只有 0.5 次 —— 两秒钟才转一次。横跨八个数量级，而它们全都叫「酶」。",
      src: "A p.192–193, §6.3"
    },
    {
      link_en: "so which of the two numbers tells you that one enzyme is better than another?",
      link_cn: "那么「哪个酶更强」，该看这两个数里的哪一个？",
      en: "Neither, on its own. Two enzymes can share a kcat while the reactions they speed up differ wildly in how fast they would go with no enzyme there at all, and two enzymes can share a Km and differ completely in what they do once the substrate has arrived. The answer is the ratio kcat/Km, called the specificity constant, and it is not an invented index: it is the rate constant for the whole journey from E plus S all the way to E plus P, binding and chemistry counted together. At low substrate the Michaelis-Menten equation collapses into a rate depending on the concentrations of both enzyme and substrate, which makes it a second-order rate equation and kcat/Km a second-order rate constant. That identity hands it a hard ceiling. **Enzyme and substrate have to physically bump into each other before anything at all can happen, so kcat/Km can never exceed the rate at which the two diffuse together in water** — a limit of the order of a hundred million to a billion per molar per second. Acetylcholinesterase, crotonase and fumarase already sit on that line; they cannot be improved by binding better or reacting faster, only by making water less viscous, and such enzymes are said to have achieved catalytic perfection.",
      cn: "单看任何一个都不行。两个酶可以有相同的 kcat，而它们所加速的那两个反应在完全没有酶时的速率可能天差地别；两个酶也可以有相同的 Km，而底物一到位之后干的事完全不同。答案是比值 kcat/Km，称为专一性常数（specificity constant）；它不是一个凑出来的指标：它就是「从 E + S 一路走到 E + P」这整段旅程的速率常数，结合与化学一起算进去。在低底物浓度下，米氏方程退化成一个同时依赖酶浓度和底物浓度的速率式，所以它是二级速率方程，kcat/Km 是二级速率常数。这个身份给了它一个硬天花板。**酶和底物必须先在物理上撞上，任何事才可能发生，所以 kcat/Km 永远不可能超过两者在水中扩散到一起的速率 —— 这个上限量级是每摩尔每秒一亿到十亿。**乙酰胆碱酯酶、巴豆酰辅酶 A 水解酶和延胡索酸酶已经贴在这条线上，它们没法再靠「结合得更好」或「反应得更快」改进，只能靠把水变稀一点；这样的酶被说成已经达到了「催化的完美」。",
      src: "A p.193, §6.3"
    },
    {
      link_en: "back to the bench. Vmax was an extrapolation, so people straighten the curve",
      link_cn: "回到实验台。Vmax 是外推出来的，所以有人把曲线拉直",
      recall_en: "the curve that never reaches its ceiling, from the initial-velocity step",
      recall_cn: "就是初速度那一步里，那条永远够不到天花板的曲线",
      en: "Take the reciprocal of both sides of the Michaelis-Menten equation and separate the terms, and the hyperbola becomes a straight line: plot one over the rate against one over [S] and you get the double-reciprocal, or Lineweaver-Burk, plot, whose slope is Km/Vmax, whose intercept on the vertical axis is 1/Vmax and whose intercept on the horizontal axis is minus 1/Km — so both constants can be read off with a ruler instead of guessed at by extrapolation. A warning has to travel with it. **Taking the reciprocal of a small, noisy rate produces a large, noisy number, so the transformation gives undue weight to the measurements made at low substrate concentration** — and those are precisely the points that decide where the line goes. Current practice is to fit Vmax and Km by nonlinear regression on the untransformed curve, which is more accurate; the double-reciprocal plot survives because it displays data well and because the inhibition patterns below are instantly recognisable on it. There is also a construction that needs no reciprocals at all: Cornish-Bowden and Eisenthal noticed that the two asymptotes of the rate hyperbola cross at a point whose coordinates are minus Km and Vmax, so one drawing gives both constants with no algebra.",
      cn: "把米氏方程两边取倒数、再把项拆开，双曲线就变成一条直线：以「速率的倒数」对「[S] 的倒数」作图，得到双倒数图，也叫 Lineweaver-Burk 图；它的斜率是 Km/Vmax，纵轴截距是 1/Vmax，横轴截距是 −1/Km —— 两个常数都能拿尺子量出来，不必再靠向天花板外推去猜。但有一条警告必须跟着它一起走。**一个又小又带噪声的速率取倒数之后，变成一个又大又带噪声的数，所以这个变换给低底物浓度下的测量点过大的权重 —— 而恰恰是这些点在决定那条直线往哪儿走。**现在的做法是直接对未变换的曲线做非线性回归来求 Vmax 和 Km，精度更高；双倒数图之所以还活着，是因为它展示数据很好用，而且下面那几种抑制模式在它上面一眼就能认出来。另外还有一种完全不用取倒数的作法：Cornish-Bowden 与 Eisenthal 注意到，速率双曲线两条渐近线的交点，坐标恰好就是 −Km 与 Vmax —— 一张图就把两个常数都交了出来，不必做任何代数。",
      src: "A p.191–192, §6.3 · CZ p.57, Obr. 3.4"
    },
    {
      link_en: "one practical matter before the constants get used: how is an amount of enzyme even reported?",
      link_cn: "在动用这些常数之前，还有一件实务：一个酶的「量」到底怎么报？",
      en: "The quantity of an enzyme could be given in grams or in moles, as for any other substance, but only when working with a pure enzyme of known molecular mass, and neither condition is usually met. So the quantity of an enzyme is expressed instead by its activity — by how much reaction it produces per unit time. That only means anything under one condition. **The assay must be run at saturating substrate, the region where the reaction proceeds with kinetics of the zeroth order, meaning the rate no longer depends on how much substrate is present** and is proportional to the enzyme concentration instead — which is why Km has to be known before an activity can be measured at all. The standard unit, U, is that amount of enzyme which converts 1 μmol of substrate in 1 minute at that enzyme's pH optimum and 25 °C; the Si unit is the katal, the amount converting 1 mol per second, so 1 kat = 6·10⁷ U. Three quantities are then built from it and they answer three different questions: activity per unit volume, U/ml, says how much enzyme is in this tube; specific activity, U/mg of protein, measures how pure a preparation is, because purification removes protein and leaves activity; and molecular activity, formerly the turnover number, is substrate molecules converted by one enzyme molecule per minute — the same idea as kcat, and a property of the molecule that no purification can improve.",
      cn: "酶的量本可以像任何其他物质一样用克或摩尔来表示，但那只限于处理分子质量已知的纯酶，而这两个条件通常都不满足。所以酶的量改用它的活性来表示 —— 即单位时间内它促成了多少反应。这件事只有在一个条件下才算数。**测定必须在饱和底物浓度下进行：那个区域里反应按零级动力学进行，速率不再取决于底物有多少，而是与酶的浓度成正比 —— 这也正是「测活性之前必须先知道 Km」的原因。**标准单位 U 指在该酶的 pH 最适值与 25 °C 下每分钟转化 1 μmol 底物所需的酶量；国际单位制的单位是开特（katal），指每秒转化 1 mol 所需的酶量，于是 1 kat = 6·10⁷ U。由它又造出三个量，回答三个不同的问题：单位体积的活性 U/ml，回答「这一管里有多少酶」；比活性 U/mg 蛋白，衡量一份制剂有多纯，因为纯化拿走的是蛋白而留下的是活性；分子活性（旧称转换数）是一个酶分子每分钟转化的底物分子数 —— 与 kcat 是同一个想法，也是分子自身的性质，再怎么提纯也改变不了。",
      src: "CZ p.58, §3.3.3",
      see: [
        { id: "L-3-3-1", en: "the purification table where specific activity is read step by step", cn: "把比活性一步步读下来的那张纯化表" }
      ]
    },
    {
      link_en: "and most enzymes have two substrates, not one",
      link_cn: "而且多数酶有两个底物，不是一个",
      en: "Nearly two-thirds of all enzymatic reactions have two substrates and two products, so the single-substrate case the equation was built for is the minority — yet the equation still applies, and an enzyme like hexokinase simply has a characteristic Km for each of its substrates. There are two ways to run such a reaction, separated by one question: are both substrates sitting on the enzyme at the same moment? If yes, they form a non-covalent three-member complex called a ternary complex, written EAB, and the group being transferred passes straight from one substrate to the other without leaving the active site; the binding is called random when either substrate may arrive first and ordered when a strict sequence applies, which happens when the first substrate completes the site the second one needs. If no, the first substrate is converted and leaves before the second binds: the enzyme reacts with substrate A to give a two-member binary complex EA, releases the first product, and is left as a modified enzyme E′ carrying the transferred group covalently, which then reacts with substrate B and is regenerated. That is the Ping-Pong, or double-displacement, mechanism, and its physical heart is one clause: substrates A and B never meet each other on the enzyme. Telling the two apart takes one graph: vary substrate one at several fixed concentrations of substrate two, take the double reciprocal of each series, and **intersecting lines mean a ternary complex while parallel lines mean Ping-Pong**. The commonest two-substrate reactions are ones nobody thinks of as having two substrates: an enzyme working with a nicotinamide coenzyme, NAD⁺ or NADP⁺, consumes one coenzyme molecule per substrate molecule turned over, so kinetically that coenzyme is a second substrate and every dehydrogenase reaction is a two-substrate reaction.",
      cn: "将近三分之二的酶促反应是「两个底物、两个产物」，所以方程当初为之而建的单底物情形反倒是少数派 —— 但方程照样适用，像己糖激酶这样的酶，只是对每一个底物各有一个特征性的 Km。这类反应有两种跑法，分界只有一个问题：两个底物是不是在同一时刻都坐在酶上？回答「是」，它们就形成一个非共价的三成员复合物，叫三元复合物（ternary complex），写作 EAB，被转移的基团直接从一个底物交到另一个底物手上，全程不离开活性位点；哪一个先到都行时称为无序结合，必须按严格顺序时称为有序结合 —— 后者发生在「第二个底物所需的位置由第一个底物补齐」的时候。回答「否」，第一个底物先被转化并离开，第二个才结合：酶与底物 A 反应，生成两成员的二元复合物 EA，放出第一个产物，留下一个把转移基团共价挂在自己身上的修饰酶 E′；E′ 再与底物 B 反应并复原。这就是乒乓机制（Ping-Pong，又叫双置换），它的物理内核只有一句：底物 A 和 B 从来没有在酶上碰过面。**区分两者只要一张图：固定第二个底物于若干浓度、改变第一个底物，每一族各作双倒数图 —— 相交的直线说明形成了三元复合物，平行的直线说明是乒乓机制。**最常见的双底物反应恰恰是你不会觉得它有两个底物的那些：与烟酰胺辅酶 NAD⁺ 或 NADP⁺ 一起工作的酶，每转化一个底物分子就消耗一个辅酶分子，所以从动力学上看那个辅酶就是第二个底物 —— 于是每一个脱氢酶反应都是双底物反应。",
      src: "A p.194–195, §6.3 · CZ pp.57–58, §3.3.2",
      see: [
        { id: "3-2", en: "why a weakly bound coenzyme behaves as a substrate in the first place", cn: "弱结合的辅酶为什么一开始就表现得像底物" }
      ]
    },
    {
      link_en: "change a condition instead of a concentration, and two curves with maxima appear — for two different reasons",
      link_cn: "改的如果不是浓度而是条件，就会出现两条带极大值的曲线 —— 而原因完全不同",
      en: "Change the pH and you find out which side chain is doing the work. An enzyme has an optimum pH, the value at which it is fastest, because side chains in its active centre act as weak acids and bases only while they hold one particular state of ionisation; elsewhere in the protein, losing a proton can break an ionic interaction that was holding the active shape together; and less often the group being titrated belongs to the substrate. The pH range over which activity changes therefore points at a residue — a change near pH 7 often means a histidine — but do not look a pKa up in a table and assume it, because the local surroundings inside a protein shift these values: one lysine in acetoacetate decarboxylase has a pKa of 6.6 against 10.5 for free lysine. The optimum follows the enzyme's habitat and not any universal number: pepsin peaks near pH 1.6 and works in gastric juice at pH 1 to 2, while glucose 6-phosphatase — an enzyme inside liver cells, where the cytosol sits at pH 7.2 — peaks near 7.8. **A pH optimum need not coincide with the pH the enzyme actually works at, and that gap is a control knob rather than a defect**: an enzyme held off its optimum can be turned up or down by a shift in local pH alone, with no change to the enzyme and no extra molecule needed. Temperature gives a curve with a maximum for an entirely different reason. The rate of most reactions, enzyme reactions included, roughly doubles for every 10 °C — but once a critical value is passed, thermal denaturation of the protein prevails, the folded structure is lost, the active centre comes apart, and the rate falls. The peak is the meeting point of those two opposing processes, so its value depends on how the experiment was arranged and it is not a constant of the enzyme, whereas the pH optimum is. Most enzymes are inactivated around 55–60 °C; enzymes from thermophilic bacteria, which live in hot springs, are still active at 85 °C, and a DNA polymerase taken from one of them is what makes the polymerase chain reaction possible, since that reaction is heated near 95 °C in every cycle to separate the two DNA strands.",
      cn: "改 pH，你查出的是「哪一个侧链在干活」。酶有一个最适 pH，即它跑得最快的那个 pH 值，因为活性中心里的侧链只有保持在某一种特定解离状态时才能充当弱酸和弱碱；而在蛋白的别处，失去一个质子可能打断某个正维系着活性构象的离子相互作用；还有较少见的情形，被滴定的基团在底物上。所以活性发生变化的那个 pH 区间能指向某个残基 —— 在 pH 7 附近变化往往意味着组氨酸 —— 但不要查表抄一个 pKa 就当数：蛋白内部的局部环境会把这些值推开，乙酰乙酸脱羧酶里有一个赖氨酸的 pKa 是 6.6，而游离赖氨酸是 10.5。最适值跟随的是这个酶所处的环境，不是什么普适数值：胃蛋白酶最适约 pH 1.6，工作在 pH 1 到 2 的胃液里；肝细胞的葡萄糖-6-磷酸酶最适约 7.8，而胞质是 7.2。**一个酶的 pH 最适值不一定与它实际工作时所处的 pH 相同，而这个落差是一个旋钮、不是一个缺陷：被按在最适值之外的酶，只靠局部 pH 的移动就能被调高或调低，酶本身不必改变，也不需要额外的分子。**温度那条带极大值的曲线，成因完全不同。多数反应（酶反应也在内）的速率每升高 10 °C 约增加一倍 —— 但一旦越过某个临界值，蛋白质的热变性便占上风，折叠结构丧失，活性中心解体，速率转而下降。那个峰是这两个方向相反的过程相遇的地方，所以它的数值取决于实验怎么设置，它不是酶的常数 —— 而 pH 最适值是。多数酶在 55–60 °C 左右失活；来自嗜热细菌（生活在温泉一类环境中的细菌）的酶在 85 °C 下仍有活性，而从其中一种取出的 DNA 聚合酶正是聚合酶链式反应之所以可能的原因：该反应每一轮都要升到接近 95 °C 才能把 DNA 双链分开。",
      src: "A p.195–197, §6.3 · CZ pp.58–59, §3.4",
      beyond: true,
      beyondNote: "Taq polymerase and PCR are not on CZ p.59, which gives only the 85 °C thermophile exception; they are standard, commonly examined, and are what that exception is famous for, so they are carried in here and flagged."
    },
    {
      link_en: "and now the reason anyone outside a laboratory cares: molecules that stop enzymes",
      link_cn: "接下来是实验室之外的人为什么在乎这件事：能把酶按停的分子",
      en: "Substances that change the rate of an enzyme reaction by interacting with the catalyst are called modulators: those that raise the rate are activators, those that lower it are inhibitors. Inhibitors turn up far more often, and because enzymes run everything they are among the most important drugs there are — aspirin works by blocking the first step of prostaglandin synthesis. The reversible kinds are told apart by which form of the enzyme the inhibitor binds, E or ES, and everything else follows from that one choice. A competitive inhibitor binds the free enzyme, in the active site, competing with the substrate for the same space, and many competitive inhibitors look structurally like the substrate. The equation picks up a factor alpha, equal to one plus the inhibitor concentration divided by the inhibitor's dissociation constant, and the Km measured in its presence is alpha times the real Km — an apparent Km. **An enzyme with a competitive inhibitor bound is not damaged and not inactivated, so the competition can be tipped back simply by adding more substrate, and Vmax is reached in the end unchanged** — which makes apparent Km up with Vmax untouched the diagnostic pattern, and makes this the one kind of inhibition that more substrate can overcome. On a double-reciprocal plot the two lines meet on the vertical axis, because that intercept is 1/Vmax and Vmax has not moved. The clinical case fits exactly: alcohol dehydrogenase converts methanol into formaldehyde, to which the eyes are particularly sensitive, and ethanol competes for that same enzyme, so methanol poisoning is treated by slow intravenous infusion of ethanol while the kidneys clear the methanol out.",
      cn: "通过与催化剂相互作用而改变酶反应速率的物质，称为调节物（modulator）：使速率升高的是激活剂，使速率降低的是抑制剂。抑制剂出现得频繁得多；而因为酶掌管着一切，它们属于最重要的药物之列 —— 阿司匹林起作用的方式就是阻断前列腺素合成的第一步。可逆的那几类，区分标准只有一条：抑制剂结合的是酶的哪一种形式，E 还是 ES；其余一切都由这一个选择推出来。竞争性抑制剂结合的是游离酶，位置就在活性位点，和底物抢同一块地方；许多竞争性抑制剂在结构上与底物很像。方程会多出一个因子 alpha，等于「1 加上抑制剂浓度除以抑制剂的解离常数」，在它存在下测得的 Km 就是 alpha 乘以真实的 Km，称为表观 Km。**结合了竞争性抑制剂的酶并没有被破坏、也没有失活，所以只要多加底物这场竞争就能被扳回来，最终仍能达到没有改变的 Vmax —— 于是「表观 Km 升高、Vmax 不动」成为它的诊断特征，也使它成为唯一一种能靠加底物解除的抑制。**在双倒数图上两条直线交于纵轴，因为那个截距就是 1/Vmax，而 Vmax 没动过。临床例子严丝合缝：乙醇脱氢酶把甲醇转化成甲醛，而眼睛对甲醛特别敏感；乙醇与甲醇争夺同一个酶，所以甲醇中毒的疗法就是缓慢静脉输注乙醇，同时让肾把甲醇清出去。",
      src: "A p.197–198, §6.3 · CZ pp.59–60, §3.5"
    },
    {
      link_en: "the other two kinds bind somewhere else entirely, and differ in one thing",
      link_cn: "另外两类结合在完全不同的地方，而它们之间只差一件事",
      recall_en: "same question as the step above — which form does it bind, E or ES?",
      recall_cn: "还是上一步那个问题 —— 它结合的是 E 还是 ES？",
      en: "An uncompetitive inhibitor binds at a site of its own, away from the active site, and binds only to the ES complex, never to free enzyme. Its factor, alpha prime, multiplies [S] in the denominator rather than Km, and apparent Vmax and apparent Km both fall by exactly the same factor. **While the inhibitor is bound the enzyme is dead and the inhibitor is competing with nothing, so it effectively deletes a fraction of the enzyme molecules from the reaction** — Vmax falls because Vmax depends on how much enzyme there is, and because what is deleted is ES rather than free enzyme, the substrate needed to reach half of the new lower Vmax falls in the same proportion, taking Km down with it. Both intercepts move, the slope does not, so the lines with and without inhibitor come out parallel, the inhibited one above; and adding substrate makes this inhibitor worse rather than better, because more substrate means more ES for it to bind. A mixed inhibitor also binds at a site of its own but can bind either the free enzyme or the ES complex, so both factors are in play: Vmax always falls, because some fraction of the enzyme is made inactive, while apparent Km can go either way depending on which form is bound more strongly, and its lines always intersect but never on an axis. The special case where the inhibitor binds E and ES equally well — where the two dissociation constants K_i and K_i′ are equal — is what has historically been called non-competitive inhibition, the pattern with Vmax down and Km unchanged, heavy metal ions on enzymes whose activity depends on a free sulfhydryl group being the standard example. Non-competitive is therefore a corner of mixed inhibition and not the other way round. In practice uncompetitive and mixed inhibition are seen only with enzymes that have two or more substrates.",
      cn: "反竞争性抑制剂（uncompetitive inhibitor）结合在自己的一个位点上，远离活性位点，而且只结合 ES 复合物，从不结合游离酶。它的因子 alpha prime 乘的是分母里的 [S] 而不是 Km，结果是表观 Vmax 与表观 Km 按完全相同的因子一起下降。**抑制剂结合着的时候酶是死的，而它又不与任何东西竞争，所以它实际上等于把一部分酶分子从反应里删掉 —— Vmax 取决于有多少酶，所以 Vmax 下降；而被删掉的是 ES、不是游离酶，因此达到「新的、更低的 Vmax 的一半」所需的底物浓度也按同样比例下降，Km 跟着一起降。**两个截距都动，斜率不动，于是有抑制剂和无抑制剂的两条直线是平行的，被抑制的那条在上方；而对这种抑制剂，加底物只会更糟：底物越多，可供它结合的 ES 就越多。混合型抑制剂同样结合在自己的位点上，但游离酶和 ES 复合物都能结合，于是两个因子同时在场：Vmax 必降，因为总有一部分酶被弄成没有活性；表观 Km 可升可降，取决于它更强地结合哪一种形式；它的直线总是相交，但从不交在坐标轴上。抑制剂对 E 和 ES 结合得同样好的那个特例 —— 两个解离常数 K_i 与 K_i′ 相等 —— 历史上被称为非竞争性抑制，就是「Vmax 降低、Km 不变」的那种模式，标准例子是重金属离子作用于活性依赖游离巯基的酶。所以非竞争性是混合型里的一个角落，不是它的上位概念。另外，在实际中，反竞争性抑制和混合型抑制只在有两个或更多底物的酶上被观察到。",
      src: "A p.198–199, §6.3 · CZ p.61, §3.5 & Obr. 3.6"
    },
    {
      link_en: "and an inhibitor that never lets go at all",
      link_cn: "最后是一种根本不松手的抑制剂",
      en: "An irreversible inhibitor either bonds covalently to a group the enzyme needs for catalysis, or destroys that group, or forms a non-covalent association so stable that it may as well be permanent. **The Michaelis-Menten equation does not hold here at all, because the concentration of the active form of the enzyme is itself falling while the measurement runs**, so Km and Vmax have nothing constant left to describe. Used deliberately, such an inhibitor is a tool for finding out which residue does the catalysis, because it stays put and can afterwards be located in the sequence: chymotrypsin treated with diisopropylfluorophosphate ends up with Ser195 covalently modified and completely dead, which is how anyone knows Ser195 is its catalytic serine. Used as a weapon, the same chemistry is what several chemical warfare agents do to enzymes of nervous tissue. A sharper class still is the suicide inactivator, harmless in solution, which enters the active site, goes through the first few steps of the enzyme's own normal reaction, and is thereby converted into something highly reactive that kills the enzyme — hence the other name, mechanism-based inactivator. A molecule inert until it is inside its one target promises few side effects: African sleeping sickness is caused by trypanosomes, single-celled parasites whose polyamine pathway starts with ornithine decarboxylase, an enzyme that is stable in the parasite but replaced rapidly in mammalian cells, so poisoning it permanently costs the parasite far more than the patient, and the drug difluoromethylornithine has proved highly effective. Finally, an irreversible inhibitor need not be covalent at all — non-covalent binding is enough if the inhibitor almost never comes off — and the way to design one is not to copy the substrate. Enzymes evolve to bind most tightly to the transition state of the reaction, the highest-energy arrangement the reacting molecules pass through, so stable molecules shaped like that arrangement, called transition-state analogs, fit better and bind more tightly than the substrate does; Linus Pauling suggested it in the 1940s, aldolase analogs bind more than four orders of magnitude more tightly than its substrates, and the anti-HIV protease inhibitors were designed on exactly this principle.",
      cn: "不可逆抑制剂要么与酶上某个催化所必需的基团共价结合，要么干脆把那个基团破坏掉，要么形成一种稳定到形同永久的非共价结合。**米氏方程在这里根本不成立，因为测定进行的同时，酶的活性形式的浓度本身就在下降，Km 与 V_lim 已经没有任何恒定的东西可以描述。**有意去用它，它就是一件工具，用来查出究竟哪一个残基在催化 —— 因为它赖着不走，事后能在序列里被找出来：用二异丙基氟磷酸处理胰凝乳蛋白酶，最后 Ser195 上被共价修饰、酶完全死掉，人们正是这样知道 Ser195 就是它的催化丝氨酸的。而被当作武器时，同样的化学正是若干化学战剂对神经组织中某些酶所做的事。其中还有更锐利的一类：自杀性失活剂在溶液里无害，进入活性位点后走完酶自身正常反应的头几步，于是被转化成某种反应性极强的东西，反手把酶杀死 —— 所以它又叫基于机制的失活剂。一个「不进入它唯一的靶点就一直是惰性的」分子，有望副作用很少：非洲昏睡病的病原是锥虫（一种单细胞寄生虫），它合成多胺的通路第一个酶是鸟氨酸脱羧酶，该酶在寄生虫体内很稳定、在哺乳动物细胞里更新很快，所以把它永久毒死对寄生虫的代价远大于对病人的代价，药物二氟甲基鸟氨酸已被证明非常有效。最后，不可逆抑制剂根本不必是共价的 —— 只要非共价结合紧到几乎从不脱落就够了 —— 而设计这种东西的办法不是模仿底物。酶在演化中被造成与反应的过渡态（反应分子必须经过的那个能量最高的排布）结合得最紧，所以形状模仿那个排布的稳定分子（称为过渡态类似物）比底物更契合、结合得更紧；这个想法由 Linus Pauling 在 1940 年代提出，针对醛缩酶设计的类似物结合比它的底物紧四个数量级以上，而抗 HIV 的蛋白酶抑制剂正是按这条原理设计出来的。",
      src: "A p.200–203, §6.3 · CZ p.59, §3.5",
      see: [
        { id: "3-6", en: "the mechanisms these drugs imitate, residue by residue", cn: "这些药所模仿的机制，一个残基一个残基地讲" }
      ]
    }
  ],
  terms: [
    { en: "activation energy", cn: "活化能",
      def_en: "The energy that must be supplied to the molecules of a starting substance before they can cross the barrier separating them from the product. It is what sets the rate of a reaction, and lowering it is the whole job of a catalyst.",
      def_cn: "起始物分子在越过通向产物的那道能垒之前必须获得的能量。它决定反应的速率，而把它压低正是催化剂的全部工作。" },
    { en: "thermolabile", cn: "热不稳定",
      def_en: "Destroyed by heat. Organisms are, which is exactly why raising the temperature is not available to them as a way of speeding a reaction up.",
      def_cn: "会被热毁掉。生物体正是如此 —— 这恰恰是它们不能靠升温来加快反应的原因。" },
    { en: "initial velocity V0", cn: "初速度 V0",
      def_en: "The rate measured over a window so early that under two or three percent of the substrate has been used, so its concentration can be treated as constant. The enzyme is usually nanomolar and the substrate five or six orders of magnitude more concentrated, which is what makes this possible.",
      def_cn: "在「底物被消耗掉不到百分之二到三」的极早期时间窗里测得的速率，因而底物浓度可以当作常数。酶通常是纳摩尔量级，底物要高出五到六个数量级，这正是这件事做得成的原因。" },
    { en: "steady state", cn: "稳态",
      def_en: "The regime in which the enzyme-substrate complex is formed exactly as fast as it is consumed, so its concentration stays nearly constant through most of the reaction. Briggs and Haldane, 1925. Almost everything measurable happens here.",
      def_cn: "酶-底物复合物的生成速率恰好等于它被消耗的速率，因而其浓度在大部分反应过程中几乎不变的那个区间。Briggs 与 Haldane，1925 年。几乎所有可测量的事都发生在这里。" },
    { en: "Michaelis constant", cn: "米氏常数 Km",
      def_en: "The lump of rate constants (k2 + k-1)/k1 that falls out of the derivation, with the units of a molar concentration. Measured as the substrate concentration at which the rate is half of Vmax. It equals the dissociation constant of the enzyme-substrate complex only when the chemical step is much slower than dissociation, which is untrue for most enzymes.",
      def_cn: "推导最后掉出来的那一坨速率常数 (k2 + k-1)/k1，量纲是摩尔浓度。测法是「速率达到 Vmax 一半时的底物浓度」。只有当化学步骤远慢于解离时它才等于酶-底物复合物的解离常数 —— 而这个条件对多数酶并不成立。" },
    { en: "V_lim", cn: "V_lim（极限速率）",
      def_en: "A second symbol for the maximal rate, the ceiling reached when every enzyme molecule is occupied by substrate. It travels with substrate written A and product written X, where Vmax travels with S and P.",
      def_cn: "最大速率的另一套符号，即每个酶分子都被底物占满时达到的上限。它与「底物写作 A、产物写作 X」配套；Vmax 则与 S 和 P 配套。" },
    { en: "kcat", cn: "kcat 周转数",
      def_en: "The rate constant of whichever step is rate-limiting, equal to Vmax divided by total enzyme concentration. Also the turnover number: how many substrate molecules one enzyme molecule converts per unit time at saturation. First-order, so units are one over time — check whether a table is per second or per minute.",
      def_cn: "不管哪一步限速、那一步的速率常数，等于 Vmax 除以总酶浓度。也叫周转数：饱和时一个酶分子每单位时间转化多少个底物分子。一级速率常数，单位是时间的倒数 —— 看表时先确认是每秒还是每分钟。" },
    { en: "specificity constant", cn: "专一性常数 kcat/Km",
      def_en: "The ratio kcat over Km, the second-order rate constant for the whole journey from free enzyme plus substrate to free enzyme plus product. Because the two must physically meet first, it is capped by the rate at which they diffuse together in water — a hundred million to a billion per molar per second. Enzymes on that ceiling are said to have reached catalytic perfection.",
      def_cn: "kcat 除以 Km，是「从游离酶加底物一路到游离酶加产物」整段旅程的二级速率常数。因为两者必须先在物理上相遇，它被「二者在水中扩散到一起的速率」封顶 —— 每摩尔每秒一亿到十亿。顶在这条线上的酶被说成已达到催化的完美。" },
    { en: "double-reciprocal plot", cn: "双倒数图",
      def_en: "One over the rate against one over the substrate concentration, turning the hyperbola into a line of slope Km over Vmax. It weights the noisy low-substrate points too heavily to be a good way of fitting the constants, but it displays data well and shows an inhibition pattern at a glance.",
      def_cn: "以速率的倒数对底物浓度的倒数作图，把双曲线变成斜率为 Km/Vmax 的直线。它给低底物浓度下带噪声的点过大的权重，因此不是求常数的好方法；但展示数据很好用，抑制模式一眼可辨。" },
    { en: "direct linear plot", cn: "直接线性作图",
      def_en: "The Cornish-Bowden and Eisenthal construction: the two asymptotes of the rate hyperbola cross at a point whose coordinates are minus Km and Vmax, so both constants come off one drawing with no algebra and no reciprocals.",
      def_cn: "Cornish-Bowden 与 Eisenthal 的作法：速率双曲线两条渐近线的交点坐标即 −Km 与 Vmax，两个常数从一张图上直接读出，不必取倒数、也不必做代数。" },
    { en: "zeroth-order kinetics", cn: "零级动力学",
      def_en: "The regime at saturating substrate, where rate no longer depends on substrate and is proportional to enzyme concentration instead. Every activity assay has to be run here, which is why Km must be known before activity can be measured.",
      def_cn: "饱和底物浓度下的状态：速率不再取决于底物，而与酶浓度成正比。所有活性测定都必须在这里进行 —— 这就是为什么测活性前必须先知道 Km。" },
    { en: "unit U and katal", cn: "单位 U 与开特",
      def_en: "Two units of the same thing, an amount of enzyme expressed through the rate it produces. U converts 1 μmol of substrate per minute at the enzyme's pH optimum and 25 °C; the katal converts 1 mol per second, so 1 kat equals 6·10⁷ U.",
      def_cn: "同一件事的两个单位 —— 用「所产生的速率」来表达的酶量。U 是在该酶 pH 最适值与 25 °C 下每分钟转化 1 μmol 底物的酶量；开特是每秒转化 1 mol 的酶量，故 1 kat = 6·10⁷ U。" },
    { en: "specific activity", cn: "比活性",
      def_en: "Activity per amount of protein, U/mg. The measure of how pure an enzyme preparation is, because purification removes protein and leaves activity, so the ratio climbs at every step and stops climbing when nothing but the enzyme is left.",
      def_cn: "单位蛋白质量的活性，U/mg。它衡量一份酶制剂有多纯：纯化拿走的是蛋白、留下的是活性，所以这个比值每一步都往上走，直到只剩该酶时才停。" },
    { en: "molecular activity", cn: "分子活性 (MA)",
      def_en: "Formerly the turnover number: substrate molecules converted by a single enzyme molecule per minute, obtained from the limiting rate and the enzyme's molecular mass. The same idea as kcat, and a property of the molecule that purification cannot improve.",
      def_cn: "旧称转换数：单个酶分子每分钟转化的底物分子数，由极限速率连同酶的分子质量算出。与 kcat 是同一个想法，且是分子自身的性质，提纯改变不了。" },
    { en: "ternary complex and Ping-Pong", cn: "三元复合物与乒乓机制",
      def_en: "The two ways a two-substrate reaction can run. In a ternary complex both substrates sit on the enzyme at once, binding either randomly or in a fixed order; in Ping-Pong the first leaves as product before the second arrives, through a covalently modified enzyme, so the two substrates never meet. Intersecting double-reciprocal lines mean a ternary complex, parallel lines mean Ping-Pong.",
      def_cn: "双底物反应的两种跑法。三元复合物：两个底物同时坐在酶上，结合顺序或无序或固定；乒乓机制：第一个先作为产物离开、中间经过一个共价修饰的酶，第二个才来，两个底物从不碰面。双倒数图上相交表示三元复合物，平行表示乒乓机制。" },
    { en: "pH optimum", cn: "pH 最适值",
      def_en: "The pH at which an enzyme is fastest. It arises from the ionisation of specific side chains in the active centre, so the range over which activity changes points at a residue. It is a property of the enzyme molecule, and it need not equal the pH the enzyme works at in the body — that gap is one of the cell's control knobs.",
      def_cn: "酶最快时的 pH。它源于活性中心中特定侧链的解离，所以活性变化的区间能指向某个残基。它是酶分子自身的性质，且不必等于该酶在体内工作时的 pH —— 这个落差正是细胞的一个调节旋钮。" },
    { en: "temperature optimum", cn: "温度最适值",
      def_en: "The peak produced by two opposing processes — rate roughly doubling per 10 °C, and the protein being destroyed by thermal denaturation above a critical value. Its value depends on how the assay was arranged, so unlike the pH optimum it is not a constant of the enzyme.",
      def_cn: "由两个方向相反的过程叠出的峰 —— 速率每 10 °C 约翻一倍，而蛋白在临界值以上被热变性毁掉。它的数值取决于测定怎么设置，所以与 pH 最适值不同，它不是酶的常数。" },
    { en: "modulators", cn: "调节物",
      def_en: "Substances that change the rate of an enzyme reaction by interacting with the catalyst. Activators raise the rate, inhibitors lower it, and the two obey the same rules in opposite directions. Inhibitors turn up far more often.",
      def_cn: "通过与催化剂相互作用而改变酶反应速率的物质。激活剂使速率升高，抑制剂使之降低，两者服从同样的规律、方向相反。抑制剂出现得频繁得多。" },
    { en: "competitive inhibition", cn: "竞争性抑制",
      def_en: "The inhibitor binds free enzyme in the active site and competes with the substrate for it. Apparent Km rises, Vmax is unchanged, the double-reciprocal lines meet on the vertical axis, and piling on more substrate wins the competition back — the only kind that more substrate can overcome. Ethanol against methanol on alcohol dehydrogenase is the therapeutic case.",
      def_cn: "抑制剂结合游离酶的活性位点，与底物争夺同一位置。表观 Km 升高，Vmax 不变，双倒数图上两线交于纵轴，多加底物就能扳回来 —— 这是唯一能靠加底物解除的一类。乙醇在乙醇脱氢酶上顶掉甲醇，就是它的治疗用例。" },
    { en: "uncompetitive inhibition", cn: "反竞争性抑制",
      def_en: "The inhibitor binds only the enzyme-substrate complex, at a site of its own. It deletes a fraction of the enzyme from the reaction, so apparent Vmax and apparent Km fall by exactly the same factor and the double-reciprocal lines come out parallel. Adding substrate makes it worse.",
      def_cn: "抑制剂只结合酶-底物复合物，结合在自己的位点上。它等于把一部分酶从反应里删掉，所以表观 Vmax 与表观 Km 按同一因子一起下降，双倒数图上两线平行。加底物只会更糟。" },
    { en: "mixed inhibition", cn: "混合型抑制",
      def_en: "The inhibitor binds at a site of its own and can bind either the free enzyme or the enzyme-substrate complex, with dissociation constants K_i and K_i′ that differ. Vmax always falls; apparent Km rises or falls depending on which form is bound more strongly; the lines intersect off both axes.",
      def_cn: "抑制剂结合在自己的位点上，游离酶和酶-底物复合物都能结合，两个解离常数 K_i 与 K_i′ 不相等。Vmax 必降；表观 Km 可升可降，取决于它更强地结合哪一种形式；直线相交，但不交在任何一根轴上。" },
    { en: "non-competitive inhibition", cn: "非竞争性抑制",
      def_en: "The corner of mixed inhibition where K_i equals K_i′, so the inhibitor cannot tell free enzyme from complex. Vmax falls, Km does not change, and more substrate does not help. Heavy metal ions on enzymes that need a free sulfhydryl group are the standard example.",
      def_cn: "混合型抑制中 K_i = K_i′ 的那个角落：抑制剂分不出游离酶与复合物。Vmax 降低，Km 不变，加底物无济于事。标准例子是重金属离子作用于需要游离巯基的酶。" },
    { en: "suicide inactivator", cn: "自杀性失活剂",
      def_en: "A molecule harmless until an enzyme starts to process it, whereupon the first steps of the enzyme's own normal reaction turn it into something highly reactive that kills that enzyme permanently. Also called a mechanism-based inactivator. Difluoromethylornithine against African sleeping sickness is the worked case.",
      def_cn: "在酶开始加工它之前一直无害的分子；一旦酶按自己正常反应的头几步处理它，它就变成反应性极强的东西，把这个酶永久杀死。也叫基于机制的失活剂。二氟甲基鸟氨酸治疗非洲昏睡病是它的实例。" },
    { en: "transition-state analog", cn: "过渡态类似物",
      def_en: "A stable molecule shaped like the highest-energy arrangement a reaction passes through rather than like the substrate. Because enzymes evolve to grip that arrangement hardest, such a molecule binds a hundred to a hundred million times more tightly than the substrate. Pauling suggested it in the 1940s; the anti-HIV protease inhibitors are built on it.",
      def_cn: "一个稳定分子，模仿的是反应必须经过的那个能量最高的排布，而不是底物。因为酶在演化中被造成最紧地抓住那个排布，这样的分子结合得比底物紧一百倍到一亿倍。Pauling 在 1940 年代提出；抗 HIV 蛋白酶抑制剂就建立在它之上。" }
  ]
};

/* -------------------------------------------------------------------------- */

window.BIOLITE_SPINE["key:enzymes-introduction"] = {
  assumed: ["protein", "amino acid", "enzyme", "substrate", "product", "cell", "pH",
            "ATP", "ADP", "RNA", "urea", "urease", "trypsin", "pepsin", "chymotrypsin",
            "ethanol", "acetaldehyde", "pyruvate", "lactate", "fumarate", "maleate",
            "alcohol dehydrogenase", "lactate dehydrogenase", "hexokinase",
            "oxalate decarboxylase", "phosphatase", "cytochromes", "tyrosinase",
            "pyruvate kinase", "atpase", "riboflavin", "thiamin", "pantothenic acid",
            "nicotinic acid", "biotin", "pyridoxal phosphate", "d-ribose", "adenine",
            "coenzyme q", "lipoamide", "acyl", "aldehyde", "nad+", "nadp+",
            "flavin adenine dinucleotide", "corrin", "dehydrogenase", "hexose",
            "glycosidic bond", "nucleotide", "ester", "polypeptide"],
  nodeTitle_en: "Enzymes: naming them, and what they are made of",
  nodeTitle_cn: "酶：怎么给它命名，以及它由什么构成",
  title_en: "**An enzyme's real name is the reaction it catalyses, and half of many enzymes is not protein at all**",
  title_cn: "**酶真正的名字就是它催化的那个反应；而许多酶身上有一半根本不是蛋白质**",
  steps: [
    {
      en: "An enzyme is a protein whose job is to catalyse one of the reactions that go on inside a living organism, and two properties make it remarkable: it acts on one particular substance and almost nothing else, and it speeds that one reaction up enormously. **An enzyme is defined by the reaction it catalyses, so its official name records that reaction rather than its shape, its source or its size.** Before any of them could be catalogued one had to be held in the hand: in 1926 Sumner obtained the first enzyme in the crystalline state, urease, the enzyme that hydrolyses urea, and three more crystalline enzymes followed in the thirties — trypsin, pepsin and chymotrypsin, all three digestive enzymes that cut other proteins. More than 3000 enzymes have been described since, though far from all of them have been prepared pure.",
      cn: "酶是这样一种蛋白质：它的工作是催化生物体内某一个反应。它有两点非凡之处 —— 作用特异性高（只认某一种特定物质），催化效率高。**一个酶是由它所催化的反应来定义的，所以它的正式名称记录的是那个反应，而不是它的形状、来源或大小。**但要给酶编目，先得真的拿到一个酶：1926 年 Sumner 首次以结晶状态得到一个酶 —— 脲酶（urease），即水解尿素的那个酶；三十年代又相继得到三种结晶酶：胰蛋白酶、胃蛋白酶、胰凝乳蛋白酶，这三者都是切割其他蛋白质的消化酶。此后已描述了 3000 种以上的酶，尽管远非全部都已制成纯品。",
      src: "CZ p.41, §3.1"
    },
    {
      link_en: "three thousand of anything needs a filing system",
      link_cn: "三千件东西必须有一套编目办法",
      en: "Enzymes are divided into six main classes according to the reaction they catalyse, and inside that scheme every enzyme is given three designations. **The systematic name characterises the catalysed reaction and is usually very long, the recommended name is the short one everybody actually says**, and the code number identifies the enzyme unambiguously. Take one reaction: L-lactate + NAD⁺ ⇌ pyruvate + NADH + H⁺, which is lactate being oxidised to pyruvate. The enzyme that catalyses it has the systematic name L-lactate:NAD⁺-oxidoreductase — the reaction simply read aloud — the recommended name lactate dehydrogenase, and the code number E.C. 1.1.1.27.",
      cn: "酶按其所催化的反应被分为六大类，而在这套体系里，每一个酶都被赋予三种称谓。**系统名表征所催化的反应，通常很长；推荐名是大家实际会说的那个简短名称；编码号则能明确无误地识别该酶。**看一个反应：L-乳酸 + NAD⁺ ⇌ 丙酮酸 + NADH + H⁺，也就是乳酸被氧化成丙酮酸。催化它的酶，系统名是 L-乳酸:NAD⁺-氧化还原酶 —— 不过是把这个反应念出来 —— 推荐名是乳酸脱氢酶，编码号是 E.C. 1.1.1.27。",
      src: "CZ p.41"
    },
    {
      link_en: "and the four digits are not a serial number with three spare digits in front",
      link_cn: "那四个数字并不是「一个序号前面加了三个凑数的位」",
      en: "**The four numbers narrow the enzyme down one step at a time — main class, subclass, sub-subclass, and then the serial number of that one enzyme inside its sub-subgroup** — so the code tells you what chemistry an enzyme does before you know anything else about it. In E.C. 1.1.1.27 the first 1 says oxidoreductase; the second 1 says the subclass is oxidation of a primary alcoholic group; the third 1 says the hydrogen acceptor is a nicotinamide coenzyme, meaning NAD⁺ or NADP⁺; and 27 is the serial number.",
      cn: "**这四个数字是一级一级把范围收窄 —— 大类、亚类、次亚类，最后才是该酶在其次亚类内的序号 —— 所以光看编号就已经知道这个酶做的是什么化学，此外一无所知也不要紧。**在 E.C. 1.1.1.27 中，第一个 1 表示氧化还原酶；第二个 1 表示亚类是伯醇基的氧化；第三个 1 表示氢受体是烟酰胺辅酶，也就是 NAD⁺ 或 NADP⁺；27 是序号。",
      src: "CZ p.41"
    },
    {
      link_en: "now the six classes. The first two both move something from a donor to an acceptor",
      link_cn: "下面是六大类。头两类都是把某样东西从供体搬到受体",
      en: "**Class 1, the oxidoreductases, catalyse oxidation-reduction reactions — transfer of electrons, transfer of hydrogen, or reaction with oxygen — and class 2, the transferases, catalyse the transfer of a group from one molecule to another.** Both are named on the pattern Donor:Acceptor-class. Ethanol + NAD⁺ ⇌ acetaldehyde + NADH + H⁺ is catalysed by ethanol:NAD⁺-oxidoreductase, recommended name alcohol dehydrogenase. Hexose + ATP → hexose phosphate + ADP is catalysed by ATP:hexose-phosphotransferase, recommended name hexokinase.",
      cn: "**第 1 类氧化还原酶催化氧化还原反应 —— 电子的转移、氢的转移，或与氧的反应；第 2 类转移酶催化把某个基团从一个分子转移到另一个分子上。**两者都按「供体:受体-类别」构词。乙醇 + NAD⁺ ⇌ 乙醛 + NADH + H⁺，由乙醇:NAD⁺-氧化还原酶催化，推荐名乙醇脱氢酶。己糖 + ATP → 己糖磷酸 + ADP，由 ATP:己糖-磷酸转移酶催化，推荐名己糖激酶。",
      src: "CZ p.42"
    },
    {
      link_en: "the next two both break a bond, and differ over whether water does it",
      link_cn: "接下来两类都是断键，区别在于是不是用水去断",
      en: "**Class 3, the hydrolases, catalyse hydrolytic reactions, with their subclasses formed according to which type of bond is hydrolysed; class 4, the lyases, cleave a bond without water and without oxidation, usually leaving a double bond behind**, or run the same chemistry backwards by adding a group across a double bond. Hydrolases are among the longest-known enzymes, and that history shows in their names: many still bear the original non-systematic name given before any Donor:Acceptor construction existed. Lyases follow the pattern Substrate group-lyase — (COOH)₂ → HCOOH + CO₂ is catalysed by oxalate carboxy-lyase, recommended name oxalate decarboxylase — and a lyase is also called a synthase.",
      cn: "**第 3 类水解酶催化水解反应，其亚类按所水解键的类型划分；第 4 类裂合酶则在不用水、也不发生氧化的情况下断开一个键，通常留下一个双键，或者反过来把某个基团加到双键上。**水解酶属于最早为人所知的酶，这段历史就写在名字里：其中许多至今沿用「供体:受体」构词法出现之前的旧名。裂合酶按「底物 基团-裂合酶」构词 —— (COOH)₂ → HCOOH + CO₂ 由草酸羧基裂合酶催化，推荐名草酸脱羧酶 —— 而裂合酶又称合酶。",
      src: "CZ p.42"
    },
    {
      link_en: "and the last two: one rearranges a single molecule, one joins two",
      link_cn: "最后两类：一类在单个分子内部重排，一类把两个分子接起来",
      en: "**Class 5, the isomerases, catalyse isomerisations — a rearrangement inside one molecule, with nothing added and nothing taken away — while class 6, the ligases, form a bond between two molecules** and pay for it by hydrolysing a macroergic compound in the very same step, most often ATP. A macroergic compound is one whose hydrolysis releases a large amount of energy, and the ones used here are above all the nucleoside triphosphates. Fumarate ⇌ maleate is catalysed by fumarate cis-trans-isomerase. A ligase follows the pattern X:Y ligase, marked ADP-forming or AMP-forming, for the reaction X + Y + ATP → X–Y + ADP + Pᵢ, and a ligase is also called a synthetase.",
      cn: "**第 5 类异构酶催化异构化 —— 分子内部的重排，既不加入什么也不拿走什么；第 6 类连接酶则在两个分子之间形成一个键，并在同一步里水解一个高能化合物来支付，最常见的是 ATP。**所谓高能化合物，就是水解时释放大量能量的化合物，这里用到的首先是核苷三磷酸。延胡索酸 ⇌ 马来酸，由延胡索酸顺反异构酶催化。连接酶按「X:Y 连接酶」构词，并标明生成 ADP 还是 AMP，对应反应 X + Y + ATP → X–Y + ADP + Pᵢ；连接酶又称合成酶。",
      src: "CZ p.42"
    },
    {
      link_en: "two of those alternative names differ by two letters, and that is the standard slip",
      link_cn: "刚才两个别名只差两个字母，这正是最常见的失分点",
      recall_en: "class 4 and class 6, the two steps just above",
      recall_cn: "就是上面两步里的第 4 类和第 6 类",
      en: "A synthase is class 4 and a synthetase is class 6. The difference is who pays for the bond: **a lyase, or synthase, makes and breaks bonds without spending a nucleoside triphosphate, while a ligase, or synthetase, forms its bond only by hydrolysing ATP in the very same step**.",
      cn: "合酶是第 4 类，合成酶是第 6 类。**区别在于谁来付账：裂合酶（合酶）成键与断键都不消耗核苷三磷酸；而连接酶（合成酶）只有在同一步里水解 ATP 才能把键做出来。**",
      src: "CZ p.42"
    },
    {
      link_en: "so much for the name. Now what the thing itself is made of",
      link_cn: "名字说完了。现在说这东西本身由什么构成",
      en: "Enzymes are proteins, with one described exception: a ribonucleic acid, that is an RNA, has been shown to have a catalytic ability of its own. Among the proteins there are two kinds. The molecule of some enzymes is a polypeptide chain, or several chains, and nothing else; the active form of the others contains in addition a non-protein component called the cofactor. For those enzymes activity is a property of the pair and not of the protein alone: **the catalytically active protein-cofactor complex is the holoenzyme, the protein left after the cofactor has been removed is the apoenzyme, and an apoenzyme on its own catalyses nothing**. The two halves can be told apart in a test tube, because it holds generally that cofactors are thermally stable while the protein part is not — so when heat destroys the activity of a preparation, what has been destroyed is the protein half and the cofactor is still sitting in the tube.",
      cn: "酶是蛋白质，只有一个已被描述的例外：一种核糖核酸，也就是 RNA，被证明自身具有一定的催化能力。而在蛋白质这一边，酶又分两种：有些酶的分子仅由一条或几条多肽链构成，此外别无他物；另一些酶的活性形式还含有一个非蛋白质组分，称为辅因子（cofactor）。**对这类酶来说，活性是「一对」东西的性质，而不是蛋白质单独的性质：具有催化活性的「蛋白质-辅因子」复合物称为全酶，除去辅因子后剩下的蛋白质部分称为脱辅基酶，而脱辅基酶单独存在时什么也不催化。**这两半在试管里能被分开，因为一般规律是辅因子热稳定、蛋白质部分不热稳定 —— 所以当加热毁掉一份制剂的活性时，被毁掉的是蛋白质那一半，辅因子还好端端地留在管子里。",
      src: "CZ p.42, §3.2",
      see: [
        { id: "L-26-4-1", en: "catalytic RNAs in full", cn: "核酶的完整讨论" }
      ]
    },
    {
      link_en: "a cofactor comes in exactly two kinds, and the metal kind comes first",
      link_cn: "辅因子恰好只有两种，先说金属那一种",
      en: "**A cofactor is either a metal ion or an organic molecule, the organic kind is called a coenzyme, and some enzymes contain both at once** — that one split runs through everything below, the metal ions giving the metalloenzymes, the organic molecules giving the coenzymes and, through them, the vitamins. An enzyme carrying a metal ion as its cofactor is a metalloenzyme, and the ions that turn up most often are Zn²⁺ in alcohol dehydrogenase, Mg²⁺ in phosphatase, Mn²⁺ in hexokinase, Fe²⁺ and Fe³⁺ in the cytochromes, Cu²⁺ in tyrosinase, K⁺ in pyruvate kinase and Na⁺ in ATPase. The metal does one of three jobs: it is part of the active centre, the small region of the enzyme where the substrate is bound and converted; or a bridge binding the substrate to the enzyme; or an element stabilising the spatial structure of the enzyme molecule. Only the first of the three is doing chemistry; the other two are holding things in place.",
      cn: "**辅因子要么是金属离子，要么是有机分子；有机的那一种称为辅酶（coenzyme），某些酶同时含有两者** —— 这一处分岔贯穿下文：金属离子那一支通向金属酶，有机分子那一支通向辅酶，并由辅酶通向维生素。以金属离子为辅因子的酶称为金属酶，最常出现的有：乙醇脱氢酶里的 Zn²⁺、磷酸酶里的 Mg²⁺、己糖激酶里的 Mn²⁺、细胞色素里的 Fe²⁺ 与 Fe³⁺、酪氨酸酶里的 Cu²⁺、丙酮酸激酶里的 K⁺、ATP 酶里的 Na⁺。金属只干三种活之一：作为活性中心（酶上结合并转化底物的那一小块区域）的组成部分；作为把底物结合到酶上的桥梁；或作为稳定酶分子空间结构的因素。三者之中只有第一种在做化学，另外两种是在把东西固定住。",
      src: "CZ p.42",
      see: [
        { id: "3-6", en: "enolase, where a metal does a fourth thing this list of three leaves out", cn: "烯醇化酶 —— 金属在那里做的是这三项之外的第四件事" }
      ]
    },
    {
      link_en: "now the organic branch, and its job description is a single phrase",
      link_cn: "再走有机这一支，它的职责用一句话就能说完",
      en: "Coenzymes function as intermediary carriers of the functional groups, atoms or electrons that are transferred in the reaction the enzyme catalyses — **a coenzyme is a shuttle, picking the transferred piece up from one substrate and putting it down on another, so the same coenzyme serves many different enzymes that move the same piece**. How tightly the shuttle is tied to the protein decides what to call it. A coenzyme bound to the apoenzyme very strongly is called a prosthetic group; a coenzyme bound only by weak interactions comes and goes, and from the kinetic standpoint it behaves as a substrate of the enzyme. That second case matters more than it looks, because it is why a reaction with a loosely bound coenzyme in it is treated as a two-substrate reaction.",
      cn: "**辅酶的功能是充当中间载体，运送在该酶所催化的反应中被转移的官能团、原子或电子 —— 辅酶是一个「摆渡的」：它从一个底物身上取下被转移的那一块，再放到另一个底物身上，所以同一种辅酶可以为许多不同的酶服务，只要它们搬运的是同一块东西。**这个「摆渡的」拴得有多紧，决定了它该叫什么：与脱辅基酶结合得非常牢固的辅酶称为辅基（prosthetic group）；只以弱相互作用结合的辅酶来去自由，从动力学角度看，它表现得就像酶的一个底物。第二种情形比看上去重要，因为正是它使「有松散结合的辅酶参与的反应」要按双底物反应来处理。",
      src: "CZ pp.42–43",
      see: [
        { id: "L-6-3-1", en: "two-substrate reactions, where that consequence is cashed in", cn: "双底物反应 —— 这个推论在那里被兑现" }
      ]
    },
    {
      link_en: "and the cell cannot build most of these shuttles from scratch",
      link_cn: "而这些「摆渡的」，细胞大多造不出来",
      en: "Coenzymes are mostly molecules corresponding in structure to vitamins or their derivatives, and a vitamin is an organic substance indispensable for the life functions of cells which the organism cannot make and must be supplied with in food. **Put those two halves together and the consequence follows: a vitamin missing from the diet is a coenzyme the cell cannot build, so every enzyme that needs that coenzyme stops.** That is why a table of coenzymes doubles as a table of the vitamin deficiency diseases.",
      cn: "辅酶多数是在结构上与维生素或其衍生物相对应的分子；而维生素是细胞生命功能所不可缺少、机体自身又造不出来、必须随食物供给的有机物。**把这两句拼起来，推论就出来了：食物里缺一种维生素，就是细胞造不出某一种辅酶，于是所有需要该辅酶的酶都停摆。**这也正是为什么一张辅酶表同时就是一张维生素缺乏病表。",
      src: "CZ p.43"
    },
    {
      link_en: "the table worth memorising is three columns wide",
      link_cn: "值得背下来的那张表只有三列",
      en: "**Tab. 3.1 pairs each coenzyme with the group it transfers and with the vitamin it comes from, and that pairing is the whole content of it.** NAD⁺ and NADP⁺ carry H⁺ and e⁻, from nicotinic acid; FMN and FAD carry H⁺ and e⁻, from riboflavin, which is vitamin B₂; coenzyme Q carries H⁺ and e⁻ and has no vitamin; TPP, that is thiamine pyrophosphate, carries an aldehyde group, from thiamin; coenzyme A carries an acyl group, from pantothenic acid; lipoamide carries acyl and H and has no vitamin; biotin carries CO₂, from biotin, vitamin H; pyridoxal phosphate carries the –NH₂ group, from pyridoxin, which is vitamin B₆.",
      cn: "**表 3.1 把每一种辅酶与它所转移的基团、以及它所对应的维生素配成一行 —— 这个配对就是它的全部内容。**NAD⁺ 与 NADP⁺ 运送 H⁺ 和 e⁻，来自烟酸；FMN 与 FAD 运送 H⁺ 和 e⁻，来自核黄素即维生素 B₂；辅酶 Q 运送 H⁺ 和 e⁻，无对应维生素；TPP（焦磷酸硫胺素）运送醛基，来自硫胺素；辅酶 A 运送酰基，来自泛酸；硫辛酰胺运送酰基与 H，无对应维生素；生物素运送 CO₂，来自维生素生物素（H）；磷酸吡哆醛运送 –NH₂，来自吡哆醇即维生素 B₆。",
      src: "CZ p.54, Tab. 3.1"
    },
    {
      link_en: "two entries in that table are worth opening up",
      link_cn: "表里有两项值得拆开来看",
      en: "**The nicotinamide coenzymes are the pair that turns up most often, NAD⁺ and NADP⁺, both built as a dinucleotide** — one base adenine, the other nicotinamide, D-ribose as the sugar in both halves, the two nucleotides joined through two residues of phosphoric acid — and the nicotinamide end is the working end, the part that takes up and gives back the H⁺ and e⁻ of every dehydrogenase reaction. The strangest molecule in the table is vitamin B₁₂, whose main component is a ribonucleotide with 5,6-dimethylbenzimidazole as its base, joined to D-ribose by an α-N-glycosidic bond — the only place that base is met — and attached to a corrin nucleus partly by a coordination bond and partly by an ester bond. Coenzyme B₁₂ does one specific kind of chemistry: reactions in which a hydrogen atom and a group on the neighbouring carbon exchange places.",
      cn: "**烟酰胺辅酶是出现频率最高的一对：NAD⁺ 与 NADP⁺，二者都按二核苷酸构建 —— 一个碱基是腺嘌呤，另一个是烟酰胺，两半的糖都是 D-核糖，两个核苷酸之间由两个磷酸残基相连 —— 而烟酰胺那一端是干活的一端，每一个脱氢酶反应里被接过来又交出去的 H⁺ 和 e⁻ 都落在它身上。**表里最古怪的分子是维生素 B₁₂：其主要组分是一个核糖核苷酸，碱基为 5,6-二甲基苯并咪唑，通过 α-N-糖苷键与 D-核糖相连 —— 这是唯一见到这种碱基的地方 —— 该核苷酸又一面以配位键、一面以酯键连到咕啉核（corrin）上。辅酶 B₁₂ 只做一类特定的化学：氢原子与相邻碳上某个基团互换位置的反应。",
      src: "CZ pp.44–53, §3.2"
    }
  ],
  terms: [
    { en: "systematic name", cn: "系统名",
      def_en: "The designation that characterises the catalysed reaction, built as Donor:Acceptor-class. Usually very long, which is why it is almost never spoken aloud.",
      def_cn: "表征所催化反应的称谓，按「供体:受体-类别」构成。通常很长，所以几乎没人真的把它念出来。" },
    { en: "recommended name", cn: "推荐名",
      def_en: "The short designation used in common practice — lactate dehydrogenase rather than L-lactate:NAD⁺-oxidoreductase.",
      def_cn: "日常实践中使用的简短称谓 —— 说「乳酸脱氢酶」，而不说「L-乳酸:NAD⁺-氧化还原酶」。" },
    { en: "code number", cn: "编码号 (E.C.)",
      def_en: "Four digits identifying an enzyme unambiguously: main class, subclass, sub-subclass, and serial number within that sub-subgroup. E.C. 1.1.1.27 is lactate dehydrogenase.",
      def_cn: "明确识别一个酶的四个数字：大类、亚类、次亚类，以及在该次亚类中的序号。E.C. 1.1.1.27 就是乳酸脱氢酶。" },
    { en: "oxidoreductases", cn: "氧化还原酶",
      def_en: "Class 1 — transfer of electrons, transfer of hydrogen, or reaction with oxygen; named Donor:Acceptor-oxidoreductase.",
      def_cn: "第 1 类 —— 电子转移、氢转移，或与氧的反应；命名为「供体:受体-氧化还原酶」。" },
    { en: "transferases", cn: "转移酶",
      def_en: "Class 2 — transfer of a group from one molecule to another; named Donor:Acceptor group-transferase.",
      def_cn: "第 2 类 —— 把基团从一个分子转移到另一个分子；命名为「供体:受体 基团-转移酶」。" },
    { en: "hydrolases", cn: "水解酶",
      def_en: "Class 3 — hydrolytic reactions, with subclasses formed by the type of bond broken. The longest-known enzymes, and many keep their pre-systematic names.",
      def_cn: "第 3 类 —— 水解反应，按所断键的类型分亚类。最早为人所知的一批酶，许多仍沿用系统命名法之前的旧名。" },
    { en: "lyases", cn: "裂合酶（合酶）",
      def_en: "Class 4, also called synthases — non-hydrolytic and non-oxidative cleavage, usually forming a double bond, or addition across one. No nucleoside triphosphate is spent.",
      def_cn: "第 4 类，又称合酶 —— 非水解、非氧化的断裂，通常生成双键，或对双键加成。不消耗核苷三磷酸。" },
    { en: "isomerases", cn: "异构酶",
      def_en: "Class 5 — rearrangement inside a single molecule, nothing added and nothing removed.",
      def_cn: "第 5 类 —— 单个分子内部的重排，既不加入也不移走任何东西。" },
    { en: "ligases", cn: "连接酶（合成酶）",
      def_en: "Class 6, also called synthetases — bond formation paid for by simultaneous hydrolysis of a macroergic compound, most often ATP. The two-letter difference from synthase is the standard slip.",
      def_cn: "第 6 类，又称合成酶 —— 成键，并以同时水解一个高能化合物（最常为 ATP）来支付。与「合酶」只差两个字母，是标准的失分点。" },
    { en: "macroergic compound", cn: "高能化合物",
      def_en: "A compound whose hydrolysis releases a large amount of energy. The ones a ligase spends are above all the nucleoside triphosphates, ATP first among them.",
      def_cn: "水解时释放大量能量的化合物。连接酶所花的首先是核苷三磷酸，其中又以 ATP 为主。" },
    { en: "cofactor", cn: "辅因子",
      def_en: "The non-protein component present in the active form of some enzymes — either a metal ion or an organic molecule. Thermally stable, unlike the protein part, which is how the two halves are told apart in a tube.",
      def_cn: "某些酶的活性形式中所含的非蛋白质组分 —— 或为金属离子，或为有机分子。与蛋白质部分不同，它是热稳定的，试管里正是靠这一点把两半分开。" },
    { en: "holoenzyme", cn: "全酶",
      def_en: "The catalytically active complex of protein plus cofactor — the form that actually works.",
      def_cn: "蛋白质加辅因子所构成的、具有催化活性的复合物 —— 真正能工作的那个形式。" },
    { en: "apoenzyme", cn: "脱辅基酶（酶蛋白）",
      def_en: "The protein part left after the cofactor has been taken away. On its own it catalyses nothing.",
      def_cn: "取走辅因子之后剩下的蛋白质部分。单独存在时不催化任何反应。" },
    { en: "metalloenzyme", cn: "金属酶",
      def_en: "An enzyme whose cofactor is a metal ion. The metal acts as part of the active centre, as a bridge to the substrate, or as a stabiliser of the spatial structure — and only the first of the three is doing chemistry.",
      def_cn: "以金属离子为辅因子的酶。金属或作为活性中心的一部分，或作为通向底物的桥梁，或作为空间结构的稳定因素 —— 三者中只有第一种在做化学。" },
    { en: "coenzyme", cn: "辅酶",
      def_en: "An organic cofactor, acting as an intermediary carrier of the groups, atoms or electrons transferred in the catalysed reaction. Most correspond in structure to a vitamin.",
      def_cn: "有机辅因子，充当所催化反应中被转移的基团、原子或电子的中间载体。多数在结构上与某种维生素相对应。" },
    { en: "prosthetic group", cn: "辅基",
      def_en: "A coenzyme bound to the apoenzyme very strongly, so that it stays put. The alternative is weak binding, in which case the molecule comes and goes and behaves kinetically as a substrate.",
      def_cn: "与脱辅基酶结合得非常牢固、因而固定不动的辅酶。另一种情况是弱结合，那时该分子来去自由，在动力学上表现为底物。" },
    { en: "vitamins", cn: "维生素",
      def_en: "Organic substances indispensable for the life functions of cells which the organism cannot make and must obtain with food. Most coenzymes correspond to one structurally, so a missing vitamin stops every enzyme that needs that coenzyme.",
      def_cn: "细胞生命功能所不可缺少、机体自身不能合成而必须随食物获得的有机物。多数辅酶在结构上与其中之一相对应，所以缺一种维生素就会让所有需要该辅酶的酶停摆。" },
    { en: "nicotinamide coenzymes", cn: "烟酰胺辅酶",
      def_en: "NAD⁺ and NADP⁺, both dinucleotides of adenine and nicotinamide on D-ribose, joined through two phosphate residues. They carry H⁺ and e⁻, derive from nicotinic acid, and the nicotinamide end is the working end.",
      def_cn: "NAD⁺ 与 NADP⁺，均为腺嘌呤与烟酰胺各接 D-核糖、再经两个磷酸残基相连的二核苷酸。运送 H⁺ 与 e⁻，来自烟酸，干活的是烟酰胺那一端。" },
    { en: "coenzyme B₁₂", cn: "辅酶 B₁₂",
      def_en: "Built round a corrin nucleus carrying a ribonucleotide of 5,6-dimethylbenzimidazole, the only place that base is met. It serves reactions in which a hydrogen and a group on the neighbouring carbon swap places.",
      def_cn: "以咕啉核为骨架，其上带一个 5,6-二甲基苯并咪唑的核糖核苷酸 —— 这是唯一见到该碱基的地方。服务于「氢与相邻碳上某基团互换位置」的反应。" }
  ]
};

/* -------------------------------------------------------------------------- */

window.BIOLITE_SPINE["key:enzyme-mechanism"] = {
  assumed: ["protein", "amino acid", "enzyme", "substrate", "product", "cell", "pH",
            "hydrogen bond", "active site", "active centre", "ATP", "RNA", "DNA",
            "conformation", "peptide bond", "cofactor", "glucose", "helix", "ligand",
            "urea", "urease", "histidine", "serine", "tyrosine", "aspartate",
            "glutamate", "lysine", "imidazole", "nitrophenol", "acetic acid",
            "hexokinase", "chymotrypsin", "enolase", "xylose", "salt bridge",
            "hydrophobic", "amide", "carbonyl", "nucleophile", "ester", "hydroxyl",
            "primary structure", "tertiary structure", "residue", "subunit",
            "dimer", "osmotic pressure", "antibiotic", "virus", "hiv",
            "phosphoenolpyruvate", "2-phosphoglycerate", "benzyl", "penicillin",
            "amoxicillin", "clavulanic acid", "stereospecific"],
  nodeTitle_en: "How an enzyme actually works",
  nodeTitle_cn: "酶究竟是怎么工作的",
  title_en: "**Five catalytic devices, watched at work in three real enzymes, and the two drug classes that came out of it**",
  title_cn: "**五件催化装置，在三个真实的酶里看它们如何运作，以及由此长出来的两类药**",
  steps: [
    {
      en: "To say you understand an enzyme's mechanism you have to know all of this: every substrate, cofactor, product and regulator; the order in time in which the enzyme-bound intermediates form; the structure of each one; the rates at which they turn into each other; how the enzyme is arranged around each; and how much energy every reacting group contributes. Only a few enzymes are understood to that standard, and three of them are worked through here — chymotrypsin, hexokinase and enolase — because between them **they show all five of the devices that do the actual work: proximity, covalent catalysis, general acid-base catalysis, transition-state stabilisation, and induced fit**. Proximity is binding pulling the substrate's reacting group up against the enzyme's catalytic group, so the meeting a reaction in solution has to wait for has already happened. Covalent catalysis is the enzyme itself being temporarily joined to the substrate by a real chemical bond, so the reaction runs in two halves instead of one. General acid-base catalysis is a side chain of the enzyme handing a proton to the substrate or taking one away, at the moment when moving that proton is what the reaction needs. Transition-state stabilisation is the enzyme gripping the awkward halfway arrangement harder than it grips the substrate, which lowers the barrier. Induced fit is the enzyme being the wrong shape until the substrate arrives, so that binding pulls it into the working shape. What turns any of these from a word into a mechanism is a residue number and an experiment, and both are below.",
      cn: "要说你懂了一个酶的机制，你必须知道全部这些：所有底物、辅因子、产物和调节物；酶结合的各个中间物按时间的先后顺序；每一个中间物的结构；它们相互转化的速率；酶围绕每一个中间物是怎么排布的；以及每个反应基团各贡献多少能量。**达到这个标准的酶只有少数几个；这里走完其中三个 —— 胰凝乳蛋白酶、己糖激酶、烯醇化酶 —— 因为它们合起来展示了真正干活的全部五件装置：邻近效应、共价催化、普通酸碱催化、过渡态稳定化、诱导契合。**邻近效应，是结合把底物的反应基团拉到酶的催化基团旁边，于是溶液反应要苦等的那次相遇早已发生。共价催化，是酶自己被一根真正的化学键暂时接到底物上，于是反应分成两半跑，而不是一步跑完。普通酸碱催化，是酶的某个侧链在「反应正需要挪动一个质子」的那一刻，把一个质子递给底物、或从底物上取走一个。过渡态稳定化，是酶抓住那个别扭的中途排布，比抓住底物还紧，于是把能垒压低。诱导契合，是底物没来之前酶的形状不对，结合把它拉进工作形状。让这些词变成机制的，是残基编号和实验 —— 下面两样都有。",
      src: "A p.203, §6.4 · CZ pp.61–62, §3.6"
    },
    {
      link_en: "but first, where in the molecule does any of this happen?",
      link_cn: "但首先：这一切发生在分子的什么地方？",
      en: "**Only part of the enzyme molecule is responsible for its catalytic ability — the active centre, the part where contact between enzyme and substrate is realised** and where the groups that do the actual catalysis are located — and everything else in the molecule is scaffolding holding those groups in position. The residues found there are not a random sample of the twenty: amino acids with reactive side groups keep reappearing, above all histidine, serine and tyrosine, because their side chains can give away or take up a proton, or attack another molecule directly, and an amino acid with an inert side chain cannot do catalysis whatever position it occupies. The active centre is a relatively small region of the tertiary structure — the shape the chain folds into — but the amino acids belonging to it may lie a long way from one another in the primary structure, which is the order of amino acids along the chain. So an active centre cannot be found by reading a sequence; it exists only once the chain is folded, and it is destroyed the moment the fold is lost, which is why heat that unfolds an enzyme also abolishes its activity.",
      cn: "**酶分子中只有一部分负责它的催化能力 —— 活性中心：酶与底物实现接触的部位，也是真正承担催化的那些基团所在之处 —— 分子的其余部分都是把这些基团固定在位的支架。**这里出现的残基并不是二十种氨基酸里随便挑的：带反应性侧链基团的氨基酸反复出现，尤以组氨酸、丝氨酸、酪氨酸为多，因为它们的侧链能交出或接过一个质子，或者直接去进攻另一个分子；而侧链惰性的氨基酸，不管占据什么位置都做不了催化。活性中心在三级结构（链折叠出来的形状）中是一个相对较小的区域，但属于它的那些氨基酸，就一级结构（氨基酸沿链排列的顺序）而言可能彼此相距很远。所以活性中心不可能靠读序列找到：它只有在链折叠好之后才存在，而折叠一旦丧失它立刻消失 —— 这也正是「把酶烤散架」和「把酶的活性废掉」是同一件事的原因。",
      src: "CZ p.61, §3.6"
    },
    {
      link_en: "and two properties are what make an active centre worth having at all",
      link_cn: "而活性中心之所以值得拥有，靠的是两项性质",
      en: "The first is specificity, and it has two halves. Substrate specificity means an enzyme catalyses the conversion of only a certain substrate; specificity of action means the reaction it catalyses proceeds in only one certain way, so one substrate gives one product and not a mixture. **If it were not so the cell would very quickly be flooded with undesirable products, which is the plain reason specificity matters.** Specificity is a dial rather than a switch: some enzymes are practically absolute and do not act even on molecules very similar to the substrate, others attack a whole large group of substances sharing only certain structural features, and there appear to be enzymes able to catalyse two different chemical reactions. Most enzymes are stereospecific, meaning they act on only one of two mirror-image forms of a molecule, and some distinguish between two identical substituents on a non-chiral carbon — a distinction no ordinary chemical reagent can make at all. The second property is efficiency, and it comes with a number: urease increases the rate of hydrolysis of urea 10¹⁴-fold compared with catalysis by hydrogen ions. The consequence is what makes life chemically possible: most reactions in the cell proceed in dilute solution, at low temperature and at neutral pH, conditions under which the same reactions in a flask would take geological time.",
      cn: "第一项是特异性，它有两半。底物特异性是说一种酶只催化某一特定底物的转变；作用特异性是说它所催化的反应只按某一特定方式进行，于是一种底物给出一种产物、而不是一堆混合物。**若非如此，细胞会很快被不需要的产物淹没 —— 这就是特异性之所以要紧的朴素理由。**特异性是一个旋钮而不是一个开关：有些酶实际上是绝对的，即使对与底物极为相似的分子也毫不动作；另一些则作用于一大类只共有某些结构特征的物质；而且似乎还存在能催化两种不同化学反应的酶。多数酶是立体特异的，即只作用于一个分子两种互为镜像的形式中的一种；有些甚至能分辨非手性碳上两个完全相同的取代基 —— 这是任何普通化学试剂都根本做不到的区分。第二项是效率，而且带着一个数字：与氢离子催化相比，脲酶使尿素水解的速率提高 10¹⁴ 倍。其后果正是使生命在化学上成为可能的那一条：细胞里绝大多数反应得以在稀溶液中、低温下、中性 pH 下进行；同样的反应放在烧瓶里，在这些条件下要花地质时间。",
      src: "CZ p.61, §3.6"
    },
    {
      link_en: "so how is 10¹⁴ achieved? The first device costs no chemistry at all",
      link_cn: "那 10¹⁴ 倍是怎么做到的？第一件装置根本不涉及化学",
      en: "**Binding the substrate to the enzyme brings an important group of the substrate close to the catalytic group of the enzyme in the active centre, and that alone creates conditions for acceleration — the proximity effect.** An enzyme reaction is not a normal reaction in solution: it takes place in the limited space of the active centre, where the substrates are not only concentrated but also correctly oriented. Two molecules in solution have to meet, and meet in the right attitude, before anything can happen; on an enzyme both of those have already happened before the chemistry starts. Nothing has been done to any bond yet, and the rate has already gone up.",
      cn: "**底物与酶结合之后，底物上某个重要基团被带到活性中心里酶的催化基团近旁 —— 光是这一点就为加速创造了条件，这就是邻近效应。**酶反应并不是溶液中的普通反应：它发生在活性中心那个有限的空间里，底物在那里不仅被浓集，而且被正确定向。溶液里的两个分子必须先相遇、而且以正确的姿态相遇，任何事才可能发生；而在酶上，这两件事在化学开始之前就已经办妥了。此时还没有对任何一根键动过手，速率就已经上去了。",
      src: "CZ p.61, §3.6"
    },
    {
      link_en: "second device: the enzyme stops being a bystander and joins the reaction",
      link_cn: "第二件装置：酶不再旁观，它自己加入了反应",
      en: "Chymotrypsin is a protease from bovine pancreas — a protease is an enzyme that cuts other proteins by hydrolysing their peptide bonds — with a relative molecular mass of 25,191, and it cuts specifically next to the aromatic residues Trp, Phe and Tyr, speeding peptide-bond hydrolysis up by at least a billionfold. It does not do that by helping a water molecule attack the peptide bond directly. Instead **the enzyme forms, besides the enzyme-substrate complex, a transient covalent acyl-enzyme intermediate, so the reaction comes in two distinct halves**: an acylation phase, in which the peptide bond is broken and an ester bond forms between the substrate's carbonyl carbon and the enzyme itself, and a deacylation phase, in which that ester is hydrolysed and the free enzyme is handed back ready for the next round. That is covalent catalysis, and the shape of it should be familiar: two products leaving at two different moments with a modified enzyme in between is exactly the Ping-Pong pattern.",
      cn: "胰凝乳蛋白酶是来自牛胰腺的一种蛋白酶 —— 蛋白酶就是靠水解肽键把别的蛋白切开的酶 —— 相对分子质量 25,191，专门切在芳香族残基 Trp、Phe、Tyr 旁边，把肽键水解的速率至少提高十亿倍。它做到这一点靠的不是帮一个水分子去直接进攻肽键。**取而代之的是：酶除了形成酶-底物复合物之外，还形成一个瞬时的共价酰基-酶中间物，于是整个反应分成清清楚楚的两半 —— 酰化阶段，肽键被切断，底物的羰基碳与酶自身之间形成一个酯键；去酰化阶段，那个酯键被水解，游离的酶被交还回来，准备下一轮。**这就是共价催化；而它的形状应当眼熟：两个产物在两个不同时刻离开、中间夹着一个被修饰的酶 —— 这正是乒乓机制的形状。",
      src: "A p.204, §6.4 · CZ p.62, §3.6",
      see: [
        { id: "L-6-3-1", en: "the Ping-Pong scheme this is an instance of", cn: "这一例所属的乒乓机制" }
      ]
    },
    {
      link_en: "that is a strong claim. Here is how the intermediate was actually caught",
      link_cn: "这是一个很强的断言。而那个中间物究竟是怎么被抓住的",
      en: "Chymotrypsin also hydrolyses small esters, more slowly, because a smaller substrate gives the enzyme less binding energy to work with — and that slowness is the opportunity, because it stretches the first turnover out far enough to watch. The reaction is E–OH plus p-nitrophenylacetate giving the acetylated enzyme E–O–CO–CH₃ plus p-nitrophenol as the first product, then E–O–CO–CH₃ plus water giving back E–OH plus acetic acid as the second. In 1954 B. S. Hartley and B. A. Kilby followed it by watching p-nitrophenol appear — a coloured product, so a colour meter is enough — and saw a rapid burst before the rate settled to a slower steady value, and **extrapolated back to zero time the burst came to just under one molecule of p-nitrophenol for every enzyme molecule present**. One molecule per enzyme, once, then slow: that is every enzyme molecule in the tube being acylated exactly once, after which turnover is limited by the slower deacylation step. Stated generally, a burst means the rate-limiting step lies after release of the product being watched.",
      cn: "胰凝乳蛋白酶也水解小分子酯，而且更慢，因为更小的底物提供给酶的结合能更少 —— 这份「慢」正是机会，它把第一次周转拉长到足以被看见。反应是 E–OH 加对硝基苯乙酸酯，生成乙酰化的酶 E–O–CO–CH₃ 和第一个产物对硝基酚；随后 E–O–CO–CH₃ 加水，还原出 E–OH 和第二个产物乙酸。**1954 年 B. S. Hartley 与 B. A. Kilby 追踪对硝基酚的出现 —— 这是一个有颜色的产物，一台比色计就够了 —— 看到速率落定成较慢的稳态值之前先有一次快速爆发；把它外推回零时刻，这次爆发相当于「每个在场的酶分子略少于一分子对硝基酚」。**每个酶一分子、只有一次、然后变慢：这说明管子里每一个酶分子都恰好被酰化了一次，此后周转由更慢的去酰化步骤限速。一般地说，看到爆发就意味着限速步骤位于所监测产物释放之后。",
      src: "A p.204–205, §6.4 · CZ p.62, §3.6",
      see: [
        { id: "L-6-3-1", en: "the same logic as a general principle, and the stopped-flow device that measures it", cn: "同一套逻辑作为一般原理，以及测量它所用的停流装置" }
      ]
    },
    {
      link_en: "so a serine attacks the substrate. An ordinary serine could not",
      link_cn: "所以是一个丝氨酸出手进攻底物。可普通的丝氨酸做不到这件事",
      en: "The group that attacks is the oxygen of Ser195 — proteases that use a serine this way are called serine proteases — and there is a problem with that, because the hydroxyl of a serine has a pKa far too high for its deprotonated, nucleophilic form to exist in useful amounts at the pH of a cell. Chymotrypsin solves it with a three-residue device. **Ser195, His57 and Asp102 are joined into a hydrogen-bonding network called the catalytic triad**; when substrate binds, the hydrogen bond between His57 and Asp102 is compressed into a much stronger interaction, and that raises the pKa of His57 from about 7, its value in free histidine, to above 12 — making it a base strong enough to pull the proton off Ser195 and leave behind an oxygen that is a powerful nucleophile. Later in the same reaction the same His57 works the other way round, handing a proton to the group that is leaving. One residue, two opposite jobs, in one turnover.",
      cn: "出手进攻的是 Ser195 的氧 —— 以这种方式使用丝氨酸的蛋白酶叫丝氨酸蛋白酶 —— 可这里有个问题：丝氨酸羟基的 pKa 太高，在细胞的 pH 下，它那个去质子的、有亲核能力的形式根本不够用。胰凝乳蛋白酶用一个三残基装置解决了它。**Ser195、His57 与 Asp102 连成一个氢键网络，叫催化三联体；底物一结合，His57 与 Asp102 之间的氢键就被压缩成一个强得多的相互作用，这把 His57 的 pKa 从游离组氨酸的约 7 抬高到 12 以上 —— 于是它成为一个强到足以把质子从 Ser195 上拽下来的碱，留下一个强亲核的氧。**在同一次反应的后段，同一个 His57 又反向工作，把一个质子递给正在离去的基团。一个残基，两件相反的活，在同一次周转里。",
      src: "A p.205, 208, §6.4",
      see: [
        { id: "E-histidine", en: "why histidine and no other residue can do this at cellular pH", cn: "为什么在细胞 pH 下只有组氨酸干得了这件事" }
      ]
    },
    {
      link_en: "third device, and the bell-shaped pH curve is not one fact but two, one per side",
      link_cn: "第三件装置；而那条钟形 pH 曲线不是一个事实，是两个 —— 一边一个",
      recall_en: "the reactive side chains named at the start are exactly the list that does this",
      recall_cn: "开头点名的那些反应性侧链，就是干这件事的那份清单",
      en: "In the active centre of many enzymes there are groups capable of functioning as donor or acceptor of H⁺, so catalysis often has the character of general acid-base catalysis; the groups concerned are above all the –COOH of aspartate and glutamate, the –NH₂ of lysine, the –OH of tyrosine and the imidazole of histidine, and each works only while it holds one particular state of ionisation. Chymotrypsin makes that visible. Its rate against pH is a bell with its top at pH 8.0, and measuring kcat and Km separately at each pH breaks the bell into two independent halves with two different residues behind them. The fall below pH 7 belongs to kcat and is the protonation of His57: once His57 has a proton of its own it can no longer take one from Ser195, so the first chemical step stops. The fall above pH 8.5 belongs instead to 1 over Km and is the amino group of Ile16 losing its proton, which breaks a salt bridge to Asp194, closes the hydrophobic pocket that grips the substrate's aromatic side chain, and stops the substrate binding properly. One side of the curve is about chemistry and the other is about binding. **A pH optimum is not a general property of enzymes — it is the sum of specific ionisations, and each one of them can be named.**",
      cn: "许多酶的活性中心里存在能充当 H⁺ 供体或受体的基团，所以催化常常具有普通酸碱催化的性质；所涉及的基团首先是天冬氨酸与谷氨酸的 –COOH、赖氨酸的 –NH₂、酪氨酸的 –OH，以及组氨酸的咪唑基，而每一个都只有保持在某一种特定解离状态时才工作。胰凝乳蛋白酶把这件事变得看得见。它的「速率对 pH」是一条钟形曲线，顶点在 pH 8.0；在每个 pH 下分别测 kcat 和 Km，这口钟就裂成两个互相独立的半边，各自背后站着一个不同的残基。pH 7 以下的下降属于 kcat，原因是 His57 被质子化：His57 自己带上质子之后，就再也不能从 Ser195 那里取走一个，第一个化学步骤于是停摆。pH 8.5 以上的下降则属于 1/Km，原因是 Ile16 的氨基失去了质子，这打断了它与 Asp194 之间的一座盐桥，用来夹住底物芳香侧链的疏水口袋随之关闭，底物再也结合不上去。曲线的一边讲的是化学，另一边讲的是结合。**「最适 pH」并不是酶的某种笼统性质 —— 它是一组具体解离过程的总和，而每一个都能被点名。**",
      src: "A p.205, §6.4 · CZ p.62, §3.6"
    },
    {
      link_en: "fourth device, and here is where the enzyme's binding energy is actually spent",
      link_cn: "第四件装置 —— 酶的结合能究竟花在了哪里，答案就在这里",
      en: "When the Ser195 oxygen attacks the substrate's carbonyl group, a very short-lived tetrahedral intermediate forms — the carbonyl carbon briefly has four groups around it instead of three — and its oxygen picks up a negative charge, which appears inside a pocket of the enzyme called the oxyanion hole, where two amide groups from the enzyme's own backbone hydrogen-bond to it. **One of those two hydrogen bonds, the one from Gly193, exists only in that intermediate and in the transition states leading into and out of it**, and is absent when the substrate is simply sitting in the active site — so it lowers the energy needed to reach the hard part of the reaction without stabilising the starting state at all, and lowering the difference between those two is exactly what catalysis is. That forces a distinction which gets blurred constantly. An intermediate is any chemical species with a finite lifetime, where finite means longer than a single molecular vibration, about ten to the minus thirteenth of a second; a transition state is the highest-energy arrangement formed along the reaction path and has no lifetime at all. The difference is not that one is a little more stable than the other, but whether the thing has a lifetime in the first place. The acyl-enzyme intermediate keeps that honest: it is stable enough to detect and to study, which is exactly why nobody mistakes it for a transition state. And the payoff is practical — asked what an enzyme stabilises, the answer is the transition state, and the Gly193 hydrogen bond is the evidence sitting ready to be quoted.",
      cn: "当 Ser195 的氧进攻底物的羰基时，会形成一个寿命极短的四面体中间物 —— 那个羰基碳周围短暂地由三个基团变成四个 —— 而它的氧上带出一个负电荷；这个电荷出现在酶的一个口袋里，这个口袋叫氧负离子洞，酶自身主链上的两个酰胺基团在那里与它形成氢键。**这两条氢键里有一条 —— 来自 Gly193 的那条 —— 只在那个中间物、以及通向它和离开它的过渡态中存在，底物老老实实待在活性位点里的时候它并不在；所以它降低的是「到达反应最难那一段所需的能量」，而对起始状态完全不加稳定 —— 把这两者之间的差值压小，正是催化的定义。**这就逼出一个总被含混带过的区分。中间物是任何具有有限寿命的化学物种，这里「有限」的下限很具体：长于一次分子振动，约 10⁻¹³ 秒；过渡态是沿反应路径形成的能量最高的排布，它根本没有寿命。两者的差别不在于「一个比另一个稳定一点」，而在于它到底有没有寿命。酰基-酶中间物让这件事保持诚实：它稳定到可以被检出、被研究，正因如此没有人会把它当成过渡态。而回报是实打实的 —— 被问到「酶稳定的是什么」，答案是过渡态，而 Gly193 那条氢键就是现成可引的证据。",
      src: "A p.207–208, §6.4"
    },
    {
      link_en: "the covalent route is not the only route, and the difference decides how a drug is designed",
      link_cn: "共价这条路并不是唯一的路，而这个差别决定了药怎么设计",
      en: "Proteases fall into four subclasses by mechanism — serine, cysteine, aspartate and metallo — named after what does the catalysis, and the split is not bookkeeping, because it predicts something. **Serine and cysteine proteases form covalent enzyme-substrate complexes, while aspartyl proteases — the ones that put a pair of aspartate residues to work instead of a serine — and metalloproteases do not.** The HIV protease, the enzyme the virus needs to cut its own newly made proteins into working pieces, is an aspartyl protease: two aspartate residues in its active site, one from each of its two subunits, act as general acid-base catalysts and help a water molecule attack the peptide bond directly, giving a short-lived tetrahedral intermediate much like chymotrypsin's but with no acyl-enzyme step anywhere in the reaction. So knowing the subclass tells a drug designer what there is to imitate — and what they imitate is the hardest moment of the reaction. The HIV protease inhibitors bind with no covalent bond at all, yet so tightly that they count as irreversible, because they are designed as transition-state analogs: every one of them carries a main chain with a hydroxyl group next to a branch carrying a benzyl group, the benzyl goes into the enzyme's aromatic pocket, and the hydroxyl beside it mimics the negatively charged oxygen of the tetrahedral intermediate. The enzyme binds the drug as though the reaction were already at its most difficult point, and cannot let go. In 2018, 38 million people were living with HIV and 23.3 million of them were receiving antiretroviral therapy: applying these principles saves lives.",
      cn: "蛋白酶按机制分成四个亚类 —— 丝氨酸型、半胱氨酸型、天冬氨酸型、金属型 —— 名字来自「是谁在催化」；这个划分不是记账，因为它能预测一件事。**丝氨酸蛋白酶和半胱氨酸蛋白酶形成共价的酶-底物复合物，而天冬氨酸蛋白酶 —— 即不用丝氨酸、改由一对天冬氨酸残基上阵的那一类 —— 和金属蛋白酶则不形成。**HIV 蛋白酶 —— 病毒用来把自己刚合成出来的蛋白切成可用零件的那个酶 —— 是一种天冬氨酸蛋白酶：它活性位点上有两个天冬氨酸残基，两个亚基各出一个，充当普通酸碱催化剂，帮助一个水分子直接进攻肽键，由此产生一个短命的四面体中间物，与胰凝乳蛋白酶那个很像，但整个反应里根本没有酰基-酶这一步。所以知道它属于哪个亚类，就等于告诉药物设计者可以去模仿的是什么 —— 而他们模仿的，正是反应最艰难的那一刻。HIV 蛋白酶抑制剂完全不靠共价键结合，却紧到可以算作不可逆，因为它们被设计成过渡态类似物：每一个都有一条带羟基的主链，旁边是一个带苄基的分支；苄基进入酶的芳香口袋，紧挨着它的羟基模拟的是四面体中间物上那个带负电的氧。于是酶结合这个药的方式，就像反应已经处在最难的那一点上一样，而且放不开手。2018 年有 3,800 万人感染 HIV，其中 2,330 万人正在接受抗逆转录病毒治疗：把这些原理用上去，是能救命的。",
      src: "A p.208–209, §6.4"
    },
    {
      link_en: "fifth device, second enzyme: one that is the wrong shape until you feed it",
      link_cn: "第五件装置，第二个酶：一个不喂东西就形状不对的酶",
      en: "Hexokinase transfers the outermost phosphoryl group of ATP onto the hydroxyl at carbon 6 of glucose; the yeast enzyme has a relative molecular mass of 107,862, and ATP and ADP always arrive as a complex with a magnesium ion, Mg2+. The problem it has to solve is sharp: that hydroxyl on glucose is chemically much like a water molecule, and water gets into the active site freely and in enormous excess, yet hexokinase prefers glucose to water by a millionfold — and it does not manage that by keeping water out. **The empty enzyme is U-shaped and inactive, with the side chains of its active site out of position; when glucose and Mg-ATP bind, the two arms of the U pinch together** and the energy released by binding drives the protein into its catalytically active shape. That is induced fit, with a number attached to it. It also pays for itself twice over: because the enzyme has been pushed out of its own stable shape, the resulting complex is thermodynamically unstable and has a strong tendency to return to the stable conformation, so it breaks down with formation of product — the substrate is deformed on binding as well — and induced fit therefore supplies the driving force for the second step of the reaction and not merely a better description of the first.",
      cn: "己糖激酶把 ATP 最外侧的磷酰基转移到葡萄糖 6 号碳上的羟基上；酵母来源的这个酶相对分子质量 107,862，而 ATP 和 ADP 总是以与镁离子 Mg²⁺ 的复合物形式到场。它要解决的问题很尖锐：葡萄糖上那个羟基化学性质与一个水分子很像，而水能自由进入活性位点、量还大得离谱，可己糖激酶对葡萄糖的偏好比对水高一百万倍 —— 它做到这一点靠的不是把水挡在外面。**空载的酶呈 U 形、没有活性，活性位点的侧链都不在位；当葡萄糖与 Mg-ATP 结合上来，U 的两条臂夹拢，结合释放出的能量把蛋白推进具催化活性的形状。**这就是诱导契合，而且是带着一个数字的诱导契合。它还一举两得：由于酶被推离了自己稳定的形状，所生成的复合物在热力学上不稳定，具有强烈回到稳定构象的倾向，于是它会分解并生成产物 —— 底物在结合时同样发生形变 —— 所以诱导契合不只是把「结合」描述得更好一点，它为反应的第二步提供了推动力。",
      src: "A p.209–210, §6.4 · CZ p.62, §3.6",
      see: [
        { id: "L-14-5-1", en: "hexokinase as a control point in sugar metabolism", cn: "己糖激酶作为糖代谢中的一个控制点" }
      ]
    },
    {
      link_en: "and the shape change was proved by a sugar that is not a substrate",
      link_cn: "而这个构象变化，是被一个「根本不是底物」的糖证明的",
      en: "Xylose is a five-carbon sugar, stereochemically like glucose but one carbon shorter, and it binds hexokinase in a position where it cannot be phosphorylated at all. Add it anyway, and the rate at which the enzyme hydrolyses ATP goes up. **Binding xylose is enough on its own to induce the change into the active conformation, and the enzyme, now switched on with nothing proper to work on, is tricked into phosphorylating water instead.** That experiment settles a reasonable-sounding guess in the opposite direction — the guess that only a true substrate has enough affinity to force the conformational change, so that anything binding without evoking it must act as an inhibitor. Xylose binds, evokes it, and speeds up a side reaction. And it moves specificity to a place most people do not look for it: water gets into the active site, xylose gets into the active site, and what makes glucose different is what happens after it arrives. Specificity is not observed in the formation of the enzyme-substrate complex; it is observed in the relative rates of the catalytic steps that follow. Meanwhile the side chains that the conformational change brings into position go on to carry out general acid-base catalysis and transition-state stabilisation — one enzyme, several devices working together in one active site, which is why treating them as a list of separate tricks misses how they actually operate.",
      cn: "木糖是一种五碳糖，立体化学上像葡萄糖，只是少一个碳；它结合到己糖激酶上的位置，使它根本无法被磷酸化。可你偏偏把它加进去，酶水解 ATP 的速率反而上升了。**光是木糖的结合，就足以诱导酶转入活性构象；而这个已经被打开、手上却没有正经活干的酶，就被「骗」去磷酸化水了。**这个实验了结了一个听起来很有道理的反向猜测 —— 即「只有真正的底物才有足够的亲和力去迫使构象改变，凡是能结合却引不出构象变化的分子就必然充当抑制剂」。木糖能结合、也引出了构象变化，结果是加快了一个副反应。它同时把「特异性」挪到了大多数人不会去找的地方：水能进活性位点，木糖也能进活性位点，葡萄糖之所以不同，差别发生在它进来之后。特异性并不体现在酶-底物复合物的形成上，它体现在此后各个催化步骤的相对速率上。而与此同时，被构象变化带到位的那些侧链，接下来执行的是普通酸碱催化和过渡态稳定化 —— 一个酶，好几件装置在同一个活性位点里协同工作；这正是为什么把它们当成清单上各自独立的技巧，会错过它们真实的工作方式。",
      src: "A p.209–210, §6.4"
    },
    {
      link_en: "third enzyme, and the device is a metal ion doing something the standard list misses",
      link_cn: "第三个酶，而这次的装置是一个金属离子在干一件标准清单漏掉的事",
      en: "A metal ion in an enzyme is usually described as being part of the active centre, or a bridge holding the substrate in place, or a stabiliser of the protein's shape. Enolase shows a fourth thing a metal can do, and it is the thing that makes the reaction possible at all. Yeast enolase, relative molecular mass 93,316, a dimer of two subunits of 436 residues each, catalyses the reversible removal of water from 2-phosphoglycerate to give phosphoenolpyruvate, one step of the pathway that breaks glucose down. Lys345 acts as a general base and takes a proton off carbon 2; Glu211 acts as a general acid and gives a proton to the hydroxyl that is leaving. The difficulty is that the proton on carbon 2 is not acidic, so there is nothing there for a base to take. What makes it acidic is a pull on electron density: **the electronegative oxygen atoms of the carboxyl group next door drag electrons away from carbon 2, and in the active site that carboxyl group is gripped by strong ionic interactions with two bound Mg2+ ions**, which increases the pull enough to render the carbon-2 protons acidic enough for one to be removed. The same two metal ions then go on to shield the two negative charges of the short-lived enolate intermediate.",
      cn: "酶里的金属离子，通常被描述成三种角色：活性中心的一部分、把底物固定住的桥、或者稳定蛋白空间结构的因素。烯醇化酶展示了金属能做的第四件事，而正是这件事让反应成为可能。酵母烯醇化酶相对分子质量 93,316，是由两个各含 436 个残基的亚基组成的二聚体，催化 2-磷酸甘油酸可逆地脱去一分子水，生成磷酸烯醇式丙酮酸 —— 这是分解葡萄糖那条途径中的一步。Lys345 充当普通碱，从 2 号碳上取走一个质子；Glu211 充当普通酸，把一个质子给予正在离去的羟基。难点在于：2 号碳上那个质子本身并不酸，碱根本无从下手。**让它变酸的是对电子密度的拉扯：紧邻的羧基上那些电负性很强的氧原子把电子从 2 号碳那里拽走，而在活性位点里这个羧基被两个结合上的 Mg²⁺ 以强离子相互作用握住，把这份拉扯放大到足以让 2 号碳上的质子酸到可以被取走一个。**随后同样这两个金属离子又去屏蔽那个短命的烯醇负离子中间物上的两个负电荷。",
      src: "A p.210–211, §6.4",
      see: [
        { id: "7-8-3", en: "the same reaction as one step of sugar breakdown", cn: "同一个反应，作为糖分解途径中的一步" },
        { id: "3-2", en: "the three roles a metal ion is usually given inside an enzyme", cn: "金属离子在酶内部通常被指派的那三种角色" }
      ]
    },
    {
      link_en: "and now what all of this was for. A false substrate handed to a serine enzyme",
      link_cn: "而这一切究竟为了什么。答案是：给一个丝氨酸酶递上一个假底物",
      recall_en: "the same active-site serine and covalent mechanism as chymotrypsin, in a bacterium",
      recall_cn: "与胰凝乳蛋白酶同样的活性位点丝氨酸、同样的共价机制，换到细菌身上",
      en: "Alexander Fleming found penicillin in 1928, and 15 more years passed before this unstable compound was understood well enough to be used as a medicine. It blocks the synthesis of peptidoglycan, the rigid mesh outside a bacterium that stops the cell bursting under its own osmotic pressure; the step it attacks is the one that cross-links that mesh, run by an enzyme called a transpeptidase, and that transpeptidase uses an active-site serine and a covalent mechanism much like chymotrypsin's. Penicillin binds it through a segment that mimics one shape of the D-Ala–D-Ala end of the peptidoglycan precursor, except that where the peptide bond should be there is a strained, highly reactive four-membered beta-lactam ring. **The active-site serine attacks that ring and forms a covalent adduct, and the leaving group cannot walk away because it is still tethered by what is left of the ring**, so the enzyme is inactivated permanently, wall synthesis stops, and most bacteria die as the fragile inner membrane bursts. Three members worth telling apart: penicillin G was isolated first and is still among the most effective, but stomach acid destroys it so it has to be injected; penicillin V is acid-stable and can be swallowed; amoxicillin works against a broad range, is taken by mouth, and is the most prescribed of the class. Bacteria then answered with beta-lactamases, enzymes that cut the beta-lactam ring open and destroy the antibiotic, and under the pressure of use and overuse the genes for them have spread rapidly. The answer to that answer is clavulanic acid, a suicide inactivator: it mimics a beta-lactam antibiotic, so the beta-lactamase attacks it with its own active-site serine and forms a covalent adduct, which then rearranges into a far more reactive species that a second nucleophile in the same active site attacks, acylating the enzyme and killing it for good. What arms the poison is the enzyme's own chemistry. Amoxicillin combined with clavulanic acid is sold as Augmentin.",
      cn: "Alexander Fleming 于 1928 年发现青霉素，此后又过了 15 年，人们才把这个不稳定的化合物弄懂到足以当药用。它阻断的是肽聚糖的合成 —— 肽聚糖是细菌外面那层刚性网格，正是它挡着细胞不被自身的渗透压撑破；它攻击的那一步是把这层网格交联起来的那一步，由一个叫转肽酶的酶执行，而这个转肽酶用的是一个活性位点丝氨酸，机制与胰凝乳蛋白酶很相似，也是共价的。青霉素通过一段模仿肽聚糖前体 D-Ala–D-Ala 末端某种构象的结构与它结合，只不过在本该是肽键的位置上，换成了一个张力很大、反应性很高的四元 β-内酰胺环。**活性位点的丝氨酸进攻这个环、形成共价加合物，而离去基团走不掉，因为它还被这个环剩下的部分拴着，于是该酶被永久失活，细胞壁合成随之停止，多数细菌因脆弱的内膜在渗透压下破裂而死。**三个成员值得分清：青霉素 G 最早被分离出来，至今仍属最有效之列，但会被胃酸破坏，所以必须注射；青霉素 V 耐酸，可以口服；阿莫西林抗菌谱广、可口服，是这一类里处方量最大的。细菌随后回敬了一手 β-内酰胺酶 —— 把 β-内酰胺环切开、从而毁掉抗生素的酶；在使用乃至滥用造成的压力下，编码它们的基因迅速扩散。对这一手的回应是克拉维酸，一种自杀性失活剂：它模仿一种 β-内酰胺抗生素，于是 β-内酰胺酶用自己活性位点的丝氨酸去进攻它、形成共价加合物；该加合物随后重排成一个反应性强得多的物种，再被同一活性位点里的第二个亲核基团进攻，把酶酰化并永久杀死。给这剂毒药上膛的，正是酶自身的化学过程。阿莫西林与克拉维酸的合剂，商品名就是 Augmentin。",
      src: "A p.211–213, §6.4",
      openQuestion_en: "Strains resistant to both already exist, their beta-lactamase mutated so that clavulanic acid no longer reacts with it. Where this ends is not settled: the development of new antibiotics promises to be a growth industry.",
      openQuestion_cn: "对两者都耐药的菌株已经出现了：它们的 β-内酰胺酶发生了突变，克拉维酸不再与它反应。这条路通向哪里并没有定论 —— 新抗生素的开发有望成为一个持续增长的产业。"
    }
  ],
  terms: [
    { en: "active centre", cn: "活性中心",
      def_en: "The part of an enzyme where contact with the substrate is realised and where the catalytic groups sit. A small region of the folded molecule, built from residues that may lie far apart along the chain, so it exists only while the fold does.",
      def_cn: "酶上与底物实现接触、并容纳催化基团的那一部分。它是折叠分子中的一小块区域，由沿链可能相距很远的残基构成，所以折叠在它才在。" },
    { en: "substrate specificity", cn: "底物特异性",
      def_en: "An enzyme converts only a certain substance. The degree varies from practically absolute — no action even on very similar molecules — to acceptance of a whole group of substances sharing one structural feature. Without it the cell would flood with unwanted products.",
      def_cn: "一种酶只转化某一特定物质。其程度从实际上绝对（对极相似的分子也毫不动作）到接受共有某一结构特征的一整类物质不等。没有它，细胞会被不需要的产物淹没。" },
    { en: "specificity of action", cn: "作用特异性",
      def_en: "The catalysed reaction proceeds only in one certain way, so one substrate gives one product and not a mixture.",
      def_cn: "所催化的反应只按某一特定方式进行，所以一种底物给出一种产物，而不是一堆混合物。" },
    { en: "proximity effect", cn: "邻近效应",
      def_en: "Binding brings the substrate's reacting group next to the enzyme's catalytic group. In the limited space of the active centre the substrates are both concentrated and correctly oriented, so the meeting a solution reaction has to wait for has already happened before any bond is touched.",
      def_cn: "结合把底物的反应基团带到酶的催化基团旁边。在活性中心那个有限空间里，底物既被浓集又被正确定向 —— 溶液反应要苦等的那次相遇，在动任何一根键之前就已经发生。" },
    { en: "covalent catalysis", cn: "共价催化",
      def_en: "A very reactive, unstable, covalently modified enzyme forms transiently and breaks down rapidly to give the product, so the reaction runs in two halves. Chymotrypsin's acyl-enzyme is the worked example, and serine and cysteine proteases do it while aspartyl and metalloproteases do not.",
      def_cn: "暂时形成一种反应性极强、不稳定的共价修饰酶，它迅速分解并给出产物，于是反应分两半跑。胰凝乳蛋白酶的酰基-酶就是范例；丝氨酸型与半胱氨酸型蛋白酶这样做，天冬氨酸型与金属型则不。" },
    { en: "acyl-enzyme intermediate", cn: "酰基-酶中间物",
      def_en: "The transient covalent species formed when the Ser195 oxygen of chymotrypsin becomes esterified to the substrate's carbonyl carbon. It is stable enough to detect, and it is why the reaction runs in an acylation phase and a deacylation phase rather than in one step.",
      def_cn: "胰凝乳蛋白酶的 Ser195 氧与底物羰基碳酯化后形成的瞬时共价物种。它稳定到可以被检出，也正是这个反应分成酰化与去酰化两个阶段、而非一步跑完的原因。" },
    { en: "burst kinetics", cn: "爆发动力学",
      def_en: "A fast initial release of product, roughly one molecule per enzyme molecule, before the rate settles to a slower steady value. It proves that the rate-limiting step comes after release of the product being watched. Hartley and Kilby saw it in 1954 with p-nitrophenylacetate, and it is the evidence for a covalent intermediate.",
      def_cn: "在速率落到较慢的稳态值之前，产物先有一次快速释放，约为每个酶分子一分子。它证明限速步骤位于所监测产物释放之后。Hartley 与 Kilby 于 1954 年用对硝基苯乙酸酯看到了它，这正是共价中间物的证据。" },
    { en: "catalytic triad", cn: "催化三联体",
      def_en: "The Ser195, His57 and Asp102 hydrogen-bonding network of chymotrypsin. Substrate binding compresses the His-Asp hydrogen bond, which raises His57's pKa from about 7 to above 12, so that it can strip the proton from Ser195 and turn an ordinary hydroxyl into a strong nucleophile.",
      def_cn: "胰凝乳蛋白酶中由 Ser195、His57 与 Asp102 构成的氢键网络。底物的结合压缩了 His-Asp 之间的氢键，把 His57 的 pKa 从约 7 抬到 12 以上，于是它能把质子从 Ser195 上剥下来，把一个普通的羟基变成强亲核试剂。" },
    { en: "general acid-base catalysis", cn: "普通酸碱催化",
      def_en: "Catalysis by active-centre groups acting as donor or acceptor of H⁺: the –COOH of Asp and Glu, the –NH₂ of Lys, the –OH of Tyr, and the imidazole of His. Each works in only one state of ionisation, which is where a pH optimum comes from.",
      def_cn: "由活性中心中充当 H⁺ 供体或受体的基团完成的催化：Asp 与 Glu 的 –COOH、Lys 的 –NH₂、Tyr 的 –OH、His 的咪唑基。每一个都只在一种解离状态下工作，pH 最适值即由此而来。" },
    { en: "oxyanion hole", cn: "氧负离子洞",
      def_en: "A pocket in the enzyme where two backbone amide groups hydrogen-bond to the negative charge that appears on the substrate's carbonyl oxygen in the tetrahedral intermediate. One of those bonds, from Gly193, exists only in that intermediate and its transition states, so the binding energy is spent on the hard part of the reaction and not on the starting state.",
      def_cn: "酶上的一个口袋：其中两个主链酰胺基团与四面体中间物里底物羰基氧上出现的负电荷形成氢键。其中来自 Gly193 的那一条只在该中间物及其过渡态中存在 —— 所以结合能被花在反应最难的那一段，而不是花在起始状态上。" },
    { en: "tetrahedral intermediate", cn: "四面体中间物",
      def_en: "The very short-lived species formed when a nucleophile adds to a carbonyl carbon, giving that carbon four groups instead of three and putting a negative charge on the oxygen. In chymotrypsin it is held in the oxyanion hole; in the HIV protease it is what the inhibitors are shaped to imitate.",
      def_cn: "亲核基团加到羰基碳上时形成的极短命物种：那个碳周围由三个基团变成四个，氧上带出一个负电荷。在胰凝乳蛋白酶里它被氧负离子洞握住；在 HIV 蛋白酶里，它正是那些抑制剂在模仿的对象。" },
    { en: "intermediate versus transition state", cn: "中间物与过渡态之别",
      def_en: "An intermediate has a finite lifetime, longer than one molecular vibration at about ten to the minus thirteenth of a second; a transition state is the highest-energy arrangement along the reaction path and has no lifetime whatever. What an enzyme is built to stabilise is the transition state.",
      def_cn: "中间物有有限的寿命，下限是长于一次分子振动，约 10⁻¹³ 秒；过渡态是反应路径上能量最高的排布，根本没有寿命。酶被造出来要稳定的，是过渡态。" },
    { en: "induced fit", cn: "诱导契合",
      def_en: "Enzyme and substrate need not be complementary in advance; the enzyme has the wrong shape until the substrate arrives, and the energy released on binding pulls it into the working shape. The strained complex is then thermodynamically unstable and breaks down to product. Hexokinase is the case with a number on it, and xylose is the proof.",
      def_cn: "酶与底物不必事先互补；底物没到之前酶的形状是不对的，结合时释放的能量把它拉进能工作的形状。被撑开的复合物因而在热力学上不稳定，会分解生成产物。己糖激酶是那个带着数字的例子，木糖是证据。" },
    { en: "beta-lactam ring", cn: "β-内酰胺环",
      def_en: "The strained, highly reactive four-membered ring that sits where a peptide bond would be in the D-Ala-D-Ala mimic carried by penicillin. The transpeptidase's active-site serine attacks it, the leaving group stays tethered, and the enzyme is permanently dead.",
      def_cn: "青霉素所带的 D-Ala-D-Ala 模拟结构中，本该是肽键的那个位置上换成的一个张力大、反应性极高的四元环。转肽酶活性位点的丝氨酸进攻它，离去基团仍被拴住，于是该酶被永久杀死。" },
    { en: "suicide inactivator", cn: "自杀性失活剂",
      def_en: "A molecule that stays harmless until the target enzyme runs the first steps of its own normal reaction on it, which converts it into something highly reactive that kills that enzyme for good. Clavulanic acid does this to beta-lactamases, and it is why amoxicillin is sold combined with it.",
      def_cn: "在靶酶用自己正常反应的头几步去处理它之前一直无害的分子；一旦被处理，它就变成反应性极强的东西，把这个酶彻底杀死。克拉维酸对 β-内酰胺酶就是这么干的，这也是阿莫西林要与它做成合剂的原因。" }
  ]
};

/* -------------------------------------------------------------------------- */

window.BIOLITE_SPINE["key:regulatory-enzymes"] = {
  assumed: ["enzyme", "substrate", "product", "cell", "pH", "protein", "coenzyme",
            "metabolism", "conformation", "haemoglobin", "hyperbola", "glycogen",
            "phosphate", "ATP"],
  nodeTitle_en: "Regulatory enzymes",
  nodeTitle_cn: "调节酶",
  title_en: "**A pathway that cannot switch itself off wastes everything, so one enzyme in it is built to listen to a molecule that is not its substrate**",
  title_cn: "**一条关不掉的通路会把什么都浪费掉，所以其中总有一个酶，被造成会听一个并非它底物的分子**",
  steps: [
    {
      en: "**Every enzyme already has properties that can be used to influence its activity inside a cell: its rate answers to the pH of its surroundings, to the concentration of substrate or of coenzyme**, and to the presence of an inhibitor or an activator. So being influenceable is not what makes an enzyme a regulatory one — all of them are influenceable. Something more specific is meant by the name.",
      cn: "**任何一个酶本来就带有可以被用来影响其细胞内活性的性质：它的速率会回应环境的 pH、底物或辅酶的浓度，以及有没有抑制剂或激活剂在场。**所以「可被影响」并不是一个酶之所以叫调节酶的原因 —— 所有的酶都可被影响。这个名字指的是更具体的东西。",
      src: "CZ p.62, §3.7",
      see: [
        { id: "L-6-3-1", en: "pH, temperature, inhibitors and activators, one by one", cn: "pH、温度、抑制剂与激活剂，逐项讨论" }
      ]
    },
    {
      link_en: "a few enzymes are built for the job rather than merely subject to it",
      link_cn: "有少数酶是为这份差事而造的，而不只是被动受影响",
      en: "**There exist enzymes with specific properties that predestine them for a regulatory role in metabolism, and these highly specialised enzymes come in exactly two kinds: the allosteric enzymes and the covalently modulated enzymes.** The difference between the two is whether the signal is attached to the enzyme by a chemical bond or merely held against it, and that one difference decides how long the setting lasts.",
      cn: "**存在一些具有特殊性质、因而注定要在代谢中担任调节角色的酶；这类高度特化的酶恰好有两种：别构酶与共价调节酶。**两者的区别在于：那个信号究竟是用化学键接在酶身上，还是只是贴着酶被握住 —— 而这一个区别决定了这个设定能保持多久。",
      src: "CZ p.62"
    },
    {
      link_en: "take the first kind",
      link_cn: "先说第一种",
      en: "**An allosteric enzyme is one whose activity is modulated by a non-covalent interaction with a specific metabolite** — a metabolite being any small molecule that the cell's own reactions produce or consume. Non-covalent means the signal molecule is held and then released, so the same enzyme molecule can be switched down and back up again many times over, and it goes back to full activity the moment the signal leaves. The signal has to be present to have an effect at all.",
      cn: "**别构酶是这样一类酶：它的活性通过与某个特定代谢物的非共价相互作用而被调节 —— 所谓代谢物，就是细胞自身反应所生成或消耗的任何小分子。**「非共价」意味着这个信号分子是被握住、随后又被放开的，所以同一个酶分子可以被调低、再调高，反复许多次；信号一走，它立刻恢复满活性。也就是说，信号必须一直在场才有效。",
      src: "CZ p.62"
    },
    {
      link_en: "and it is held somewhere the substrate never goes",
      link_cn: "而它被握住的地方，底物从来不去",
      en: "That metabolite binds into a special place in the enzyme molecule, the allosteric site, which is distinct from the active centre where the substrate binds. **Because the two sites are separate, the regulating molecule does not have to resemble the substrate in any way** — so an enzyme can be controlled by a compound it never touches chemically, and that is the whole reason the arrangement exists. A regulator that had to look like the substrate could only ever report on the substrate; one that need not look like anything can report on whatever the cell finds worth reporting.",
      cn: "该代谢物结合到酶分子中的一个特殊部位，即别构部位；它不同于底物所结合的活性中心。**既然两个部位是分开的，起调节作用的分子就完全不必长得像底物 —— 于是一个酶可以被一个它在化学上从不接触的化合物所控制，而这正是这套安排存在的全部理由。**一个必须长得像底物的调节物，只能报告底物的情况；一个不必长得像任何东西的调节物，则能报告细胞认为值得报告的任何情况。",
      src: "CZ p.62"
    },
    {
      link_en: "and in practice one particular molecule keeps turning up in that site",
      link_cn: "而实际上，出现在那个部位里的往往是同一类分子",
      en: "Allosteric modulators are often the products of the very metabolic sequence at whose beginning the allosteric enzyme acts: **in a chain A → B → C → D → E, the end product E modulates the enzyme that catalyses the first step, and that is the principle of feedback regulation**. The molecule that reports is the one whose supply the pathway exists to maintain, so the pathway is measuring its own output.",
      cn: "**别构调节物往往正是某条代谢序列的产物，而该别构酶恰好作用于这条序列的起点：在 A → B → C → D → E 这样的链条中，终产物 E 调节的是催化第一步的那个酶 —— 这就是反馈调节的原理。**负责报告的那个分子，恰恰就是这条通路存在的目的所在，所以通路量的是它自己的产出。",
      src: "CZ p.62"
    },
    {
      link_en: "and the placement of that switch — at the first step, not the last — is doing real work",
      link_cn: "而这个开关装在第一步、不装在最后一步，是有讲究的",
      recall_en: "the chain in the step above, read backwards",
      recall_cn: "把上一步那条链倒过来读",
      en: "**A pathway regulated this way switches itself down exactly as fast as its end product accumulates, and because the switch sits at the first step, none of the intermediates B, C or D piles up when it closes.** Regulating the last step instead would stop the product and leave the cell holding four useless intermediates it had already paid to make.",
      cn: "**按这种方式受调节的通路，会随着终产物的积累而恰好同步地把自己调小；而由于开关装在第一步，通路关小时中间物 B、C、D 一个也不会堆积。**若改为调节最后一步，产物固然停了，细胞手里却剩下四种已经花过成本、又毫无用处的中间物。",
      src: "CZ p.62",
      beyond: true,
      beyondNote: "CZ p.62 states the feedback principle and puts the enzyme at the beginning of the sequence; spelling out why the first step is the right place for the switch is standard course material and is not written on that page."
    },
    {
      link_en: "the second kind of regulatory enzyme carries its signal a different way",
      link_cn: "第二类调节酶携带信号的方式不同",
      recall_en: "the opposite of the non-covalent case above",
      recall_cn: "与上面那个非共价的情形正好相反",
      en: "**In a covalently modulated enzyme the activity is altered by a covalent modification of the enzyme molecule — a group is bonded onto the enzyme, or taken off it again**, and the enzyme stays in whichever state it was last put into. That is the practical difference from an allosteric enzyme: an allosteric signal has to be present to have an effect, whereas a covalent one is a setting that persists after the signal has gone, and a second enzyme is needed to reverse it. So one kind reports a concentration moment by moment, and the other remembers an instruction.",
      cn: "**共价调节酶的活性是通过对酶分子的共价修饰来改变的 —— 一个基团被接到酶上，或者又被拿下来，而酶会一直停留在最后被设定的那个状态。**这就是它与别构酶在实用上的区别：别构信号必须在场才有效，而共价修饰是一个在信号离开之后仍然保持的设定，要把它撤销还得另有一个酶。所以一种是逐刻报告某个浓度，另一种是把一条指令记住。",
      src: "CZ pp.62–65, §3.7",
      beyond: true,
      beyondNote: "CZ p.62 names the class and says it is regulated by covalent modification; pp.63–65, which develop it, are not in the extracted page set, so the persistence-versus-presence contrast is carried in as standard course material.",
      see: [
        { id: "L-15-3-1", en: "the worked case — glycogen phosphorylase, switched covalently and allosterically at once", cn: "范例 —— 糖原磷酸化酶，同时受共价与别构两层调控" }
      ]
    },
    {
      link_en: "one last property of allosteric enzymes, and it is what makes them switches rather than dials",
      link_cn: "别构酶还有最后一项性质，正是它使这些酶成为开关而不是旋钮",
      en: "An allosteric enzyme does not give the hyperbolic rate curve of an ordinary enzyme: **its rate plotted against substrate concentration is S-shaped, so over a narrow range of concentration a small change in substrate or in modulator produces a very large change in rate**. That steepness is what a regulator needs. A hyperbola answers a doubling of substrate with far less than a doubling of rate, which would make a poor switch; an S-shaped curve has a stretch where the response is far steeper than proportional, and a control point is placed inside that stretch. It is also why the allosteric enzymes are the standing exception to Michaelis-Menten kinetics: the equation describes a hyperbola, and this is not one.",
      cn: "**别构酶给出的不是普通酶那条双曲线：它的速率对底物浓度作图呈 S 形，所以在一段很窄的浓度范围内，底物或调节物的微小变化就会引起速率的巨大变化。**这种陡峭正是调节所需要的。双曲线在底物翻倍时速率远远达不到翻倍，那样的东西做不成开关；而 S 形曲线有一段响应远比「成正比」更陡，控制点就被安放在那一段里面。这也正是别构酶成为米氏动力学固定例外的原因：那个方程描述的是一条双曲线，而这一条不是。",
      src: "CZ pp.62–65, §3.7",
      beyond: true,
      beyondNote: "The sigmoid curve of allosteric enzymes belongs to CZ pp.63–65, which are not in the extracted page set. It is standard, examinable, and is developed in full on haemoglobin in L-5-1-1.",
      see: [
        { id: "L-5-1-1", en: "where the S-shaped curve comes from, worked out on haemoglobin", cn: "S 形曲线是怎么来的 —— 在血红蛋白上完整推出" }
      ]
    }
  ],
  terms: [
    { en: "regulatory enzymes", cn: "调节酶",
      def_en: "Enzymes with specific properties that predestine them for a regulatory role in metabolism. Two kinds only: allosteric and covalently modulated. Every enzyme can be influenced; these are the ones built for it.",
      def_cn: "具有特殊性质、因而注定在代谢中担任调节角色的酶。只有两类：别构酶与共价调节酶。任何酶都可被影响，而这些是为此而造的。" },
    { en: "allosteric enzyme", cn: "别构酶",
      def_en: "One whose activity is modulated by a non-covalent interaction with a specific metabolite. Because the interaction is non-covalent the signal has to be present to have an effect, and the enzyme resets when it leaves.",
      def_cn: "其活性通过与某个特定代谢物的非共价相互作用而被调节的酶。由于是非共价的，信号必须在场才有效，信号离开后酶即复原。" },
    { en: "allosteric site", cn: "别构部位",
      def_en: "The special place in the enzyme molecule, distinct from the active centre, into which the modulator binds. Its separateness is why the modulator need not resemble the substrate, and therefore why a pathway can be controlled by a molecule its enzymes never touch.",
      def_cn: "酶分子中不同于活性中心的那个特殊部位，调节物结合于此。正因为两处分开，调节物才不必长得像底物 —— 一条通路才能被它的酶从不接触的分子所控制。" },
    { en: "allosteric modulator", cn: "别构调节物",
      def_en: "The specific metabolite that binds at the allosteric site. Often the end product of the metabolic sequence the enzyme starts, which is what makes feedback regulation possible.",
      def_cn: "结合在别构部位上的那个特定代谢物。它常常就是该酶所启动的代谢序列的终产物 —— 反馈调节因此才成为可能。" },
    { en: "feedback regulation", cn: "反馈调节",
      def_en: "The end product of a metabolic sequence modulating the enzyme that catalyses the first step of that same sequence, so the pathway slows itself as its product accumulates and leaves no half-made intermediates behind.",
      def_cn: "一条代谢序列的终产物去调节催化该序列第一步的那个酶，于是通路随着产物积累而自行减速，也不会留下做了一半的中间物。" },
    { en: "covalently modulated enzymes", cn: "共价调节酶",
      def_en: "The second class of regulatory enzyme, whose activity is altered by attaching a group to the enzyme molecule or removing one. The setting persists after the signal has gone, until another enzyme reverses it.",
      def_cn: "调节酶的第二类，其活性通过在酶分子上接上或取下一个基团来改变。这个设定在信号离开后仍然保持，直到另一个酶把它撤销。" },
    { en: "sigmoid rate curve", cn: "S 形速率曲线",
      def_en: "The S-shaped plot of rate against substrate concentration given by an allosteric enzyme instead of a hyperbola. Over a narrow range the response is far steeper than proportional, which is what makes such an enzyme a switch, and it is why these enzymes are the standing exception to Michaelis-Menten kinetics.",
      def_cn: "别构酶给出的「速率对底物浓度」曲线，呈 S 形而非双曲线。在一段很窄的范围内，响应远比成正比更陡 —— 这正是它能当开关的原因，也是这类酶成为米氏动力学固定例外的原因。" }
  ]
};
