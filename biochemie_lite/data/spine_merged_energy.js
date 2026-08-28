/* Merged topic spines — energy metabolism. 速通简洁版.

   Six topics, each keyed by topicKey rather than by node, because the two books
   teach the same subject twice and the reader wants one thread per subject:

     key:glycolysis                  7-8-1, 7-8-2, 7-8-3, 10-6, 10-7 + L-14-5-1
     key:glycogen-metabolism         7-11-2-1, 7-11-2-2, 7-12-1, 7-12-2 + L-15-2-1, L-15-3-1
     key:respiratory-chain           6-2-4-1..6-2-4-5 + L-19-1-1, L-19-2-1, L-19-5-1, L-20-3-1
     key:metabolic-regulation        10-12, 10-13, 10-14, 10-15, 10-16 + L-13-5-1
     key:biochemical-reaction-logic  6-1-3, 10-1..10-5 + L-13-2-1
     key:amino-acid-degradation      5-2-3-1..5-2-3-4 + L-18-3-1

   `src` letters: "A" is Lehninger 8, cited by its own page and section numbers.
   "CZ" is the second textbook, cited by the page numbers `pages` carries in
   tools/topics.json. A step never carries a page it was not read from.

   These are pathway topics, and the trap in a pathway topic is reciting the steps.
   The step lists live in the full app. Here every step is a CLAIM: why a cycle has
   to be a cycle, why phosphorolysis rather than hydrolysis, why the height of each
   drop in the respiratory chain is set by the protein around the metal and not by
   the metal itself.

   House style is SPINE_SPEC.md: one claim per step, every noun introduced where it
   is first used, every structural claim followed by its consequence, and exactly
   ONE `**` run per `en` and per `cn` — the app has a compact mode that shows only
   the bolded run, so each one must read as a complete statement on its own. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ================================================================ glycolysis */
window.BIOLITE_SPINE["key:glycolysis"] = {
  assumed: ["glucose", "ATP", "ADP", "AMP", "NAD+", "NADH", "pyruvate", "lactate",
            "ethanol", "glycogen", "yeast", "liver", "muscle", "brain", "blood",
            "mitochondrion", "cytosol", "membrane", "hormone", "insulin", "glucagon",
            "cyclic AMP", "enzyme", "substrate", "protein kinase A", "citrate",
            "acetyl-CoA", "fatty acid", "alanine", "citric acid cycle",
            "pentose phosphate pathway", "hexose", "aldose", "ketose", "triose",
            "phosphate", "inorganic phosphate", "equilibrium", "allosteric"],
  nodeTitle_en: "Glycolysis",
  nodeTitle_cn: "糖酵解",
  title_en: "Two ATP are spent to make four, the pathway needs no oxygen at all, and the three steps that cannot run backwards are exactly the three where control sits",
  title_cn: "先花两个 ATP 去挣四个；全程不用氧；而那三个倒不回来的步骤，正是调控所在的三个地方",
  steps: [
    {
      en: "**Glycolysis is the run of reactions that turns one molecule of glucose into two molecules of pyruvate and makes ATP on the way**. It is found in almost every organism there is, and the reason is that no step in it needs oxygen — a way of making ATP without oxygen is something a cell can fall back on anywhere, in any tissue, at any moment.",
      cn: "糖酵解是把一分子葡萄糖变成两分子丙酮酸、并在途中造出 ATP 的那一串反应。**它几乎存在于所有生物体内，原因只有一个：其中没有任何一步需要氧 —— 一条不靠氧就能造出 ATP 的路线，是细胞在任何组织、任何时刻都可以退守的底牌。**",
      src: "CZ p.164, §7.8"
    },
    {
      link_en: "the first thing done to glucose is not a bond broken, it is a charge added",
      link_cn: "葡萄糖遭遇的第一件事不是被拆掉一个键，而是被装上一份电荷",
      en: "Glucose that has entered a cell is phosphorylated on carbon 6, and the phosphate is paid for with one ATP. Two enzymes do this job: hexokinase, which will phosphorylate many different hexoses at carbon 6 using ATP and is therefore the one of broad specificity, contrasted with glucokinase, which accepts glucose only and is the one that matters in liver. Both give glucose 6-phosphate. **A phosphate group carries two negative charges, and a charged sugar cannot cross a membrane, so the cell spends an ATP to lock the sugar inside** before it spends anything on taking the sugar apart.",
      cn: "已经进入细胞的葡萄糖，先在第 6 号碳上被磷酸化，这个磷酸由一个 ATP 支付。做这件事的酶有两个：己糖激酶（hexokinase）用 ATP 把多种己糖在 6 号碳上磷酸化，是特异性较宽的那一个；与它相对的葡糖激酶（glucokinase）只接受葡萄糖，是肝里真正管事的那一个。两者的产物都是葡萄糖-6-磷酸。**一个磷酸基带两个负电荷，而带电的糖穿不过膜 —— 所以细胞先花一个 ATP 把糖锁在屋里，然后才开始花力气去拆它。**",
      src: "CZ p.164"
    },
    {
      link_en: "the same sugar arriving from store costs nothing",
      link_cn: "同一种糖，如果是从库房里出来的，一分钱都不用花",
      recall_en: "the opposite of the ATP-spending entry one step up",
      recall_cn: "与上一步「进门要交一个 ATP」正好相反",
      en: "Glucose kept in store is kept as glycogen, a branched polymer of glucose units, and it is not released by hydrolysis. It is released by phosphorolysis, which is cleavage using inorganic phosphate instead of water: the phosphate goes onto the sugar as the sugar comes off the chain, giving glucose 1-phosphate and costing no ATP, after which a mutase shifts that phosphate from carbon 1 to carbon 6. **One and the same sugar therefore carries two different price tags according to where it came from**: one ATP if it was imported free from the blood, nothing at all if it was mobilised out of the cell own glycogen.",
      cn: "存起来的葡萄糖是以糖原（glycogen）的形式存的 —— 糖原是葡萄糖单元连成的分支多聚物 —— 而它并不靠水解释放，靠的是磷酸解（phosphorolysis），也就是用无机磷酸而不是用水去断键：糖从链上掉下来的同时磷酸就装了上去，得到葡萄糖-1-磷酸，不花 ATP；随后一个变位酶把这个磷酸从 1 号碳挪到 6 号碳。**于是同一种糖，因为来路不同而挂着两张不同的价签：从血里进口来的游离糖要付一个 ATP，从细胞自己的糖原里动员出来的一分钱不用付。**",
      src: "CZ p.219, §10.1.1",
      see: [{ id: "7-11-2-1", en: "glycogen breakdown in full", cn: "糖原分解的完整过程" }]
    },
    {
      link_en: "the second ATP is spent, and this one buys something quite different",
      link_cn: "第二个 ATP 也花出去了，而这一个买到的东西完全不同",
      en: "Glucose 6-phosphate is isomerised to fructose 6-phosphate by hexose phosphate isomerase, an aldose turned into a ketose, and at equilibrium that mixture is 30 per cent fructose 6-phosphate against 70 per cent glucose 6-phosphate. Then phosphofructokinase spends the second ATP, putting a phosphate on carbon 1: the product is fructose 1,6-bisphosphate. That phosphorylation is practically irreversible, which makes it the rate-limiting reaction of the whole pathway. Notice what changed. Glucose 6-phosphate still had choices open to it: on down glycolysis, away into glycogen, or off into the pentose phosphate pathway — the alternative route of glucose oxidation, which supplies pentoses for nucleic acid synthesis and NADPH, the reduced carrier biosynthesis runs on, rather than ATP. **Fructose 1,6-bisphosphate has nowhere else to go, so this is the step at which a glucose is committed to being burnt** — and the step that commits is always where a cell puts its control.",
      cn: "葡萄糖-6-磷酸由己糖磷酸异构酶异构化为果糖-6-磷酸——醛糖变成酮糖；这一步平衡时是 30% 的果糖-6-磷酸对 70% 的葡萄糖-6-磷酸。接着磷酸果糖激酶（phosphofructokinase）花掉第二个 ATP，把一个磷酸装到 1 号碳上，得到果糖-1,6-二磷酸。这次磷酸化实际上不可逆，因而是整条通路的限速反应。注意这里发生了什么变化：葡萄糖-6-磷酸原本还有几条路可选 —— 继续走糖酵解、拐去做糖原、或者进磷酸戊糖途径，即葡萄糖氧化的另一条路线，它交出的是给核酸合成用的戊糖和给生物合成用的还原型载体 NADPH，而不是 ATP。**而果糖-1,6-二磷酸已经无路可拐，所以这一步就是「一个葡萄糖被交付去烧掉」的那一步 —— 而「作出承诺」的那一步，永远就是细胞安放控制的地方。**",
      src: "CZ p.164; A p.541, §14.5"
    },
    {
      link_en: "now the cut, and the two ATP just spent are what make it a clean one",
      link_cn: "现在轮到那一刀 —— 而刚花掉的两个 ATP，正是为了让这一刀切得干净",
      en: "Aldolase cuts fructose 1,6-bisphosphate in half: carbons 1 to 3 leave as dihydroxyacetone phosphate, carbons 4 to 6 as glyceraldehyde 3-phosphate, and triose-phosphate isomerase turns the first into the second by way of an enol form the two of them share, so one hexose becomes two identical three-carbon molecules, each already carrying a phosphate: one fructose 1,6-bisphosphate ultimately yields two molecules of glyceraldehyde 3-phosphate, aldolase and the isomerase acting one after the other. This is why the sugar was isomerised from an aldose to a ketose first: a ketose splits down the middle into two threes, an aldose does not. Both equilibria sit the wrong way — 89 per cent of the aldolase mixture is uncut hexose, 96 per cent of the isomerase mixture is dihydroxyacetone phosphate. **Neither of those bad equilibria stops the pathway, because everything downstream keeps taking glyceraldehyde 3-phosphate away**, and an unfavourable step in the middle of a pathway is pulled forward by the removal of its own product.",
      cn: "醛缩酶（aldolase）把果糖-1,6-二磷酸从中间切开：1–3 号碳成为二羟丙酮磷酸，4–6 号碳成为甘油醛-3-磷酸；磷酸丙糖异构酶再经由两者共有的一个烯醇式把前者变成后者，于是一个己糖变成两个一模一样、而且各自已经带着磷酸的三碳分子：醛缩酶与异构酶一前一后地作用，一分子果糖-1,6-二磷酸最终给出两分子甘油醛-3-磷酸。这也正是先前要把糖从醛糖异构成酮糖的原因：酮糖从中间断开正好得到两个三碳，醛糖不行。两处平衡都是偏向错误方向的 —— 醛缩酶那一步平衡时 89% 仍是未切开的己糖，异构酶那一步平衡时 96% 是二羟丙酮磷酸。**这两个不利的平衡都拦不住这条通路，因为下游一直在把甘油醛-3-磷酸取走 —— 通路中间一个不利的步骤，是靠不断移走它自己的产物被拉着往前走的。**",
      src: "CZ p.164–165",
      beyond: true,
      beyondNote: "The 89/11 and 96/4 equilibrium figures and the aldose-to-ketose isomerisation are on pp.164-165; that a ketose is what splits into two three-carbon pieces while an aldose does not is standard course material and is not spelled out there."
    },
    {
      link_en: "and here, once only in the whole pathway, something is actually oxidised",
      link_cn: "而在这里，整条通路中唯一的一次，真正发生了氧化",
      en: "Glyceraldehyde-3-phosphate dehydrogenase takes the two hydrogens off the aldehyde group and hands them to NAD+. The mechanism is worth holding, because it explains where the energy goes: the aldehyde group first adds onto an HS group of the enzyme, giving an enzyme-bound adduct of the thiohemiacetal type, a carbon carrying both a hydroxyl and a sulfur; that adduct is then dehydrogenated, and what is left is a thioester — a sulfur-carbonyl bond that is energy-rich — an energy-rich covalent intermediate joining the oxidised triose phosphate to the active-site HS group of the dehydrogenase, written GAPDH for short. Inorganic phosphate then attacks and cleaves that thioester and carries the acyl group away — the molecule that leaves is 1,3-bisphosphoglycerate, a sugar acid with a phosphate on carbon 3 and a second, energy-rich one on carbon 1. **This is the only oxidation in the whole of glycolysis, and its trick is to catch the energy released as a new phosphate bond instead of letting it leave as heat**, which is what makes the ATP two steps later possible at all.",
      cn: "甘油醛-3-磷酸脱氢酶把醛基上的两个氢摘下来交给 NAD+。它的机理值得记住，因为机理说明了能量去了哪里：醛基先加到酶的一个 HS 基上，形成一个酶结合的加合物，属于硫代半缩醛类型，即一个碳上同时带着羟基和硫；这个加合物随后脱氢，剩下的是一个硫酯键（thioester）—— 一种富能的硫-羰基键 —— 也就是把被氧化的丙糖磷酸与脱氢酶（简写 GAPDH）活性位点上那个 HS 基连在一起的富能共价中间体；接着无机磷酸去进攻并裂解这个硫酯键，把酰基带走，成为 1,3-二磷酸甘油酸。**这是整条糖酵解中唯一的一次氧化，而它的高明之处在于：把释放出来的能量当场捕捉成一个新的磷酸键，而不是让它作为热跑掉 —— 两步之后那个 ATP 之所以能出现，全靠这一手。**",
      src: "CZ p.164–165, §7.8"
    },
    {
      link_en: "and now that bond is cashed",
      link_cn: "现在把那个键兑现",
      en: "The enzyme that collects on that bond is phosphoglycerate kinase — it takes the phosphate off carbon 1 of 1,3-bisphosphoglycerate and puts it straight onto ADP, giving ATP and 3-phosphoglycerate. **Making ATP by handing a phosphate directly from one metabolite to ADP is called substrate-level phosphorylation**, and it is the only kind of ATP synthesis glycolysis can do — which is precisely why the pathway needs neither a membrane nor oxygen.",
      cn: "磷酸甘油酸激酶把 1,3-二磷酸甘油酸 1 号碳上的磷酸摘下来，直接装到 ADP 上，生成 ATP 与 3-磷酸甘油酸。**把一个磷酸从某个代谢物身上直接交给 ADP 来生成 ATP，这种方式叫底物水平磷酸化；它是糖酵解唯一会用的造 ATP 方式 —— 而这恰恰就是这条通路既不需要膜、也不需要氧的原因。**",
      src: "CZ p.165"
    },
    {
      link_en: "two steps of rearrangement now set up the second payment",
      link_cn: "接下来两步重排，是在为第二笔进账做准备",
      en: "Phosphoglycerate mutase moves the remaining phosphate from carbon 3 to carbon 2, working through 2,3-bisphosphoglycerate — the reaction's own regenerating cofactor, also described as the reaction's coenzyme: it sits on the enzyme, donates its phosphate to the incoming substrate and is remade at every turnover. Enolase then removes one molecule of water from 2-phosphoglycerate, and what comes out is phosphoenolpyruvate, a compound whose energy-rich phosphate residue can be given away to ADP. **The phosphate now sitting on phosphoenolpyruvate is the very one an ATP donated back at the first step of the pathway**, so what glycolysis gets returned to it is the same physical group it originally supplied at the hexose-phosphorylation step.",
      cn: "磷酸甘油酸变位酶把剩下那个磷酸从 3 号碳挪到 2 号碳，中间经过 2,3-二磷酸甘油酸 —— 它是这个反应自己可再生的辅因子，也被称作该反应自身的「辅酶」：它坐在酶上，把自己的磷酸交给新进来的底物，并在每一轮周转中重新生成。随后烯醇化酶（enolase）从 2-磷酸甘油酸里脱去一分子水，得到磷酸烯醇丙酮酸（PEP），一个带着高能磷酸基团、能把它交给 ADP 的化合物。**此刻挂在磷酸烯醇丙酮酸上的那个磷酸，正是通路第一步里由 ATP 交出去的那一个 —— 糖酵解收回来的，是它当初在己糖磷酸化那一步借出去的同一个实物基团。**",
      src: "CZ p.166"
    },
    {
      link_en: "the last transfer, and then the account",
      link_cn: "最后一次转移，然后算总账",
      en: "The enzyme of the last step is pyruvate kinase — it transfers that phosphate residue to ADP, generating ATP and pyruvate, which is how the ATP consumed phosphorylating hexoses at the start of glycolysis is recovered. The full account runs per glucose: one ATP spent at hexokinase, one at phosphofructokinase, two made at phosphoglycerate kinase and two at pyruvate kinase, since everything below the cut happens twice over. **Net for one glucose: two ATP and two NADH, four made and two spent. It is a thin return, and it is bought without a single molecule of oxygen** — which is the whole reason the pathway is worth keeping. Drawn as one circular diagram, the entire route runs from glucose through every intermediate to pyruvate and on to lactate, with the ATP and ADP arrows placed exactly where this account puts them: consumed at hexokinase and phosphofructokinase, produced at phosphoglycerate kinase and pyruvate kinase.",
      cn: "丙酮酸激酶把那个磷酸基团转移给 ADP，生成 ATP 与丙酮酸 —— 糖酵解开头磷酸化己糖所消耗的 ATP，就是这样被收回来的。按每分子葡萄糖算总账：己糖激酶处花掉 1 个 ATP，磷酸果糖激酶处花掉 1 个；磷酸甘油酸激酶处得到 2 个，丙酮酸激酶处得到 2 个 —— 因为切开之后的每一步都要跑两遍。**一分子葡萄糖的净收益：2 个 ATP 和 2 个 NADH，造了四个、花掉两个。回报很薄，但这笔账里没有用到一个氧分子 —— 这就是这条通路值得被保留下来的全部理由。**把整条路画成一幅环形示意图，就是从葡萄糖经过每一个中间体到丙酮酸、再到乳酸；图上 ATP／ADP 箭头的位置与这本账完全对得上：在己糖激酶和磷酸果糖激酶处消耗，在磷酸甘油酸激酶和丙酮酸激酶处生成。",
      src: "CZ p.166–167"
    },
    {
      link_en: "pyruvate is a fork, and which way it goes depends on oxygen",
      link_cn: "丙酮酸是一个岔口，往哪边走取决于有没有氧",
      en: "Pyruvate has three destinations. With oxygen it enters the mitochondrion and is oxidised the whole way to CO2 and water. In a muscle working harder than its oxygen supply allows, it is reduced to lactate. In yeast it is converted to ethanol. Both of the oxygen-free fates exist for one reason: **the dehydrogenase step used up NAD+, a cell holds very little NAD+ at any moment, and a pathway that cannot hand its electrons back to NAD+ stops within seconds** no matter how much glucose is left.",
      cn: "丙酮酸有三个去处。有氧时它进入线粒体，被一路氧化成 CO2 和水；在耗氧超过供氧的肌肉里，它被还原成乳酸；在酵母里，它被转化成乙醇。**两条不用氧的去路之所以存在，理由是同一个：脱氢那一步把 NAD+ 用掉了，而细胞在任何时刻手里的 NAD+ 都极少 —— 一条无法把电子还给 NAD+ 的通路，不管还剩多少葡萄糖，几秒钟之内就会停下来。**",
      src: "CZ p.164, p.219",
      beyond: true,
      beyondNote: "The three fates are on p.164 and p.219. That the point of lactate and ethanol formation is the regeneration of NAD+ is standard course material and is not stated on those pages."
    },
    {
      link_en: "run the whole thing backwards and it makes glucose instead",
      link_cn: "把整件事倒过来跑，它就变成造葡萄糖",
      en: "Making glucose rather than burning it is gluconeogenesis, and in an animal it starts from the lactate that anaerobic glycolysis produced. Most of glycolysis is freely reversible and simply runs the other way, from phosphoenolpyruvate upwards to the six-carbon sugars. **Three steps cannot be reversed: the two kinase phosphorylations, which are undone instead by phosphatases that hydrolyse the phosphate straight off**, and pyruvate to phosphoenolpyruvate, which is got round by first carboxylating pyruvate to oxaloacetate. Those two undoing enzymes are named as hydrolases, and correctly: the enzymes concerned are glucose 6-phosphatase and fructose 1,6-bisphosphatase, and a phosphatase — EC class 3.1.3 — is a hydrolase. The conversion of pyruvate to phosphoenolpyruvate is the only real problem in the whole reversal, which is why it alone needs a detour through a four-carbon acid. Some amino acids can travel this route all the way to carbohydrate — to sugar, that is — while fats cannot.",
      cn: "把葡萄糖造出来而不是烧掉，这就是糖异生（gluconeogenesis）；在动物体内，它的碳源是无氧糖酵解产生的乳酸。糖酵解的大部分步骤自由可逆，直接倒着走就行 —— 从磷酸烯醇丙酮酸一路向上回到六碳糖。**只有三步倒不回来：两次激酶磷酸化，改由磷酸酶把磷酸直接水解掉来撤销；以及丙酮酸变磷酸烯醇丙酮酸这一步，靠先把丙酮酸羧化成草酰乙酸绕过去。**做撤销工作的那两个酶被称作水解酶，而这个叫法是对的：所涉及的酶是葡萄糖-6-磷酸酶与果糖-1,6-二磷酸酶，而磷酸酶（EC 3.1.3 类）本来就属于水解酶。整个「倒着跑」里唯一真正的问题只有丙酮酸变磷酸烯醇丙酮酸这一步，所以也只有它需要绕道一个四碳酸。某些氨基酸可以沿这条路线一路变成糖类，而脂肪不能。",
      src: "CZ p.219, §10.1.1",
      see: [{ id: "L-14-4-1", en: "gluconeogenesis in full, with the mitochondrial shuttling", cn: "糖异生的完整过程，含线粒体穿梭" }]
    },
    {
      link_en: "which raises the obvious danger: what if both directions run at once?",
      link_cn: "这就带出一个明摆着的危险：两个方向要是同时开着呢？",
      en: "Put the two directions of one bypassed step side by side. Phosphofructokinase-1 spends an ATP to phosphorylate fructose 6-phosphate; fructose 1,6-bisphosphatase hydrolyses that same phosphate straight off again. Add the two reactions and everything cancels except ATP + H2O turning into ADP + Pi. **Two opposed enzymes running at the same time build nothing, move nothing and dissipate the energy as heat — such a loop is a futile cycle**, and preventing it is why the two directions must be switched against each other at exactly those three bypassed steps. Glycolysis and gluconeogenesis therefore generally do not both occur at the same time in the same tissue: simultaneous operation of both pathways would consume ATP without accomplishing any chemical or biological work, and a large amount of chemical energy would be dissipated as heat. Notice what that arithmetic settles — not whether the pathways are regulated, but where, and the answer is the three bypassed steps, the only places where two different enzymes face each other.",
      cn: "把某一个被绕过的步骤的两个方向摆在一起看。PFK-1 花掉一个 ATP，把果糖-6-磷酸磷酸化；果糖-1,6-二磷酸酶再把这同一个磷酸水解掉。两个反应加起来，一切都抵消了，只剩下 ATP + H2O 变成 ADP + Pi。**两个方向相反的酶同时开着，什么也没造出来、什么也没搬动，能量全部作为热耗散掉 —— 这样一个空转的环叫无效循环（futile cycle）；防止它，正是这两个方向必须恰好在那三个被绕过的步骤上互相对着开关的原因。**所以糖酵解与糖异生一般不会在同一组织里同时进行：两条通路同时运转会消耗 ATP，却不完成任何化学功或生物学功，大量化学能会以热的形式耗散掉。注意这道算术锁死的是什么 —— 它锁死的不是「这两条路受不受调控」，而是「调控落在哪里」：只能落在那三个被绕过的步骤上，因为只有那三处才有两个不同的酶面对面。",
      src: "A p.539, §14.5"
    },
    {
      link_en: "and only one organ actually has to make that choice",
      link_cn: "而真正需要做这个选择的，只有一个器官",
      en: "Gluconeogenesis runs chiefly in the liver, whose job is to make glucose for other tissues; glycolysis runs nearly everywhere. So only the liver runs both and must decide between them minute by minute, and its control is hormonal, while a muscle, which does no gluconeogenesis, is controlled locally by its own metabolites. The kinetics say the same thing. Humans carry four hexokinase isozymes, numbered I to IV and encoded by four different genes. Muscle hexokinase II is half-saturated at about 0.1 mM glucose, far under the 4 to 5 mM in blood, so it works flat out and is turned down only by its own product: glucose 6-phosphate allosterically inhibits hexokinases I and II whenever it rises above its normal level, temporarily and reversibly, which brings the rate at which glucose 6-phosphate is formed back into balance with the rate at which it is used. Liver glucokinase, which is hexokinase IV, is half-saturated at about 10 mM, above blood glucose, and glucose 6-phosphate does not inhibit it at all; because the transporter GLUT2 rapidly equilibrates glucose inside a hepatocyte with glucose in the blood, that high half-saturation point is exactly what allows the enzyme to be regulated directly by the blood glucose concentration. **A deliberately low-affinity enzyme lets the liver take up more glucose the more of it there is, and lets the glucose the liver has just made walk back out unphosphorylated** — which is how an organ avoids eating what it made for everyone else.",
      cn: "糖异生主要在肝里跑 —— 肝的职责是替别的组织造葡萄糖；而糖酵解几乎到处都在跑。所以只有肝同时跑两条路、必须一分一秒地在两者之间做决定，它的调控是激素性的；肌肉不做糖异生，它的调控是由自己的代谢物就地完成的。动力学说的是同一件事。人有四个己糖激酶同工酶，编号 I 到 IV，由四个不同的基因编码。肌肉的己糖激酶 II 在约 0.1 mM 葡萄糖时就半饱和，远低于血里的 4–5 mM，所以它平时全速运转，只被自己的产物调低：葡萄糖-6-磷酸一升过正常水平，就别构抑制己糖激酶 I 和 II，抑制是暂时而可逆的，从而把它的生成速率重新拉回到与消耗速率持平。肝的葡糖激酶（即己糖激酶 IV）要到约 10 mM 才半饱和，高于血糖，而且完全不被葡萄糖-6-磷酸抑制；由于转运体 GLUT2 让肝细胞内的葡萄糖与血中的葡萄糖迅速平衡，这个偏高的半饱和点恰恰就是让这个酶可以被血糖浓度直接调控的原因。**一个刻意做成低亲和力的酶，让肝在血糖越高时拿走越多，也让肝刚造出来的葡萄糖在还没被磷酸化扣住之前就走出去 —— 一个器官正是这样避免吃掉自己替别人造的东西。**",
      src: "A p.539–540, §14.5, Fig. 14-20"
    },
    {
      link_en: "at the committed step, the brake is one of the enzyme own substrates",
      link_cn: "在「作出承诺」的那一步，踩刹车的正是这个酶自己的一个底物",
      recall_en: "the committed step four steps up, now under control",
      recall_cn: "就是上面第四步那个「作出承诺」的反应，现在给它装上控制",
      en: "ATP is both a substrate of phosphofructokinase-1 and the end product of the pathway that phosphofructokinase-1 commits glucose to. When ATP is plentiful it binds a second site, away from the catalytic one, and lowers the affinity of the enzyme for fructose 6-phosphate; ADP and AMP bind there and lift that inhibition; citrate, which piles up when fat and protein are being burnt for fuel, deepens it — a high citrate concentration specifically increases the inhibitory effect of ATP, and citrate is therefore an intracellular message that the oxidation of fats and proteins is already meeting the demand for energy. On the opposing side, fructose 1,6-bisphosphatase is strongly and allosterically inhibited by AMP, so one and the same metabolite raises one enzyme and lowers the other; that same rise in AMP also activates glycogen phosphorylase, one signal reaching three pathways and pointing all of them the same way. AMP is the sharper of those signals for an arithmetic reason: **the adenylate pool is large and mostly ATP, so a small percentage fall in ATP appears as a large percentage rise in AMP**, and the cell reads the small number rather than the big one.",
      cn: "ATP 既是 PFK-1 的底物，又是 PFK-1 所交付的那条通路的终产物。ATP 充裕时，它结合到一个远离催化位点的第二位点上，降低这个酶对果糖-6-磷酸的亲和力；ADP 与 AMP 结合到那里则解除这份抑制；而柠檬酸 —— 烧脂肪和蛋白供能时会积累起来的那个分子 —— 会把抑制加深：高浓度柠檬酸的作用正是增强 ATP 的抑制效果，所以柠檬酸是一条胞内消息，说的是「脂肪和蛋白的氧化已经把能量需求顶上了」。而在对面，果糖-1,6-二磷酸酶被 AMP 强烈地别构抑制，于是同一个代谢物把一个酶抬上去、把另一个压下来；同样这次 AMP 升高还会激活糖原磷酸化酶 —— 一个信号触达三条通路，而且把它们指向同一个方向。**在这几个信号里，AMP 是最锐利的一个，理由是算术上的：腺苷酸池很大而且绝大部分是 ATP，所以 ATP 只掉了很小的比例，AMP 就涨了很大的比例 —— 细胞读的是那个小数字，不是那个大数字。**",
      src: "A p.541–542, §14.5, Fig. 14-22, Fig. 14-23",
      see: [{ id: "L-13-5-1", en: "why a small fall in ATP is a large rise in AMP", cn: "为什么 ATP 掉一点点，AMP 会涨很多" }]
    },
    {
      link_en: "and one molecule does most of the switching, though no flux runs through it",
      link_cn: "而大部分切换由一个分子完成 —— 尽管没有任何物质流经过它",
      en: "Fructose 2,6-bisphosphate is an intermediate of neither direction. No material flows through it; it exists only to carry information, which is exactly why the cell can make and destroy it freely without disturbing what either pathway is carrying. It activates phosphofructokinase-1 and inhibits fructose 1,6-bisphosphatase in the same instant, and at physiological concentrations of everything else phosphofructokinase-1 is virtually inactive without it. One protein both makes and destroys it: a single chain carrying a kinase domain, PFK-2, and a phosphatase domain, FBPase-2. **Because both activities sit on one chain, the single phosphorylation that glucagon orders through cyclic AMP and protein kinase A raises one and lowers the other at the same moment** — the reciprocity is built into the protein rather than maintained by regulation. Traced as a chain the hormone reaches the metabolite in four moves: low blood glucose releases glucagon, glucagon stimulates adenylyl cyclase to make cyclic AMP from ATP, cyclic AMP activates protein kinase A, and that kinase puts a phosphoryl group on the bifunctional protein. Phosphorylation enhances the FBPase-2 activity and inhibits the PFK-2 activity, so fructose 2,6-bisphosphate falls, glycolysis is inhibited and gluconeogenesis stimulated and the liver makes glucose to replenish the blood. Insulin has the opposite effect, stimulating a phosphoprotein phosphatase that removes that same phosphoryl group; none of these four moves requires new protein to be made, which is why this arm answers in seconds.",
      cn: "果糖-2,6-二磷酸不是任何一个方向上的中间产物。没有任何物质流从它身上经过；它存在的唯一目的是携带信息 —— 而这正是细胞可以随意造它、拆它而不扰动两条通路吞吐量的原因。它在同一瞬间激活 PFK-1、抑制果糖-1,6-二磷酸酶；而在其他一切都处于生理浓度时，没有它，PFK-1 几乎毫无活性。造它和拆它的是同一个蛋白：一条链上带着一个激酶结构域 PFK-2 和一个磷酸酶结构域 FBPase-2。**因为两个活性长在同一条链上，胰高血糖素经 cyclic AMP 和蛋白激酶 A 下令做的那一次磷酸化，就能在同一瞬间把一个抬上去、把另一个压下来 —— 这里的「互为倒数」是被造进蛋白里的，而不是靠调控去维持的。**把这条链写出来，激素到代谢物只有四步：低血糖释放胰高血糖素；胰高血糖素刺激腺苷酸环化酶用 ATP 造出 cyclic AMP；cyclic AMP 激活蛋白激酶 A；这个激酶把一个磷酰基装到那个双功能蛋白上。磷酸化增强其 FBPase-2 活性、抑制其 PFK-2 活性，于是果糖-2,6-二磷酸下降，糖酵解被抑制、糖异生被刺激，肝造出葡萄糖去补充血糖。胰岛素的作用正相反：它刺激一个磷酸蛋白磷酸酶，把同一个磷酰基摘掉。这四步里没有任何一步需要新合成蛋白，这就是这条臂能以秒计作答的原因。",
      src: "A p.542–543, §14.5, Fig. 14-24, Fig. 14-25"
    },
    {
      link_en: "a second input reaches that same protein with no hormone involved at all",
      link_cn: "还有第二个输入抵达同一个蛋白，而且全程不经过激素",
      en: "Xylulose 5-phosphate is a product of the pentose phosphate pathway, and its concentration rises when glucose entering the liver is converted to glucose 6-phosphate and flows into the glycolytic and the pentose phosphate routes at once — so it reports that the glucose-using pathways are well supplied with substrate. **It activates phosphoprotein phosphatase 2A, which dephosphorylates the very bifunctional protein glucagon phosphorylates, so fructose 2,6-bisphosphate rises and glycolysis is stimulated.** Follow it one step further and it is the link between eating carbohydrate and making fat: more glycolysis means more acetyl-CoA, more hexose through the pentose phosphate pathway means more NADPH, and acetyl-CoA plus NADPH are precisely what fatty acid synthesis is built out of — which is why fat synthesis climbs sharply after a high-carbohydrate meal.",
      cn: "木酮糖-5-磷酸是磷酸戊糖途径的产物；当进入肝的葡萄糖被转成葡萄糖-6-磷酸、并同时流进糖酵解和磷酸戊糖两条路时，它的浓度就升高 —— 所以它报告的是「利用葡萄糖的那些通路底物很充足」。**它激活磷酸蛋白磷酸酶 2A，后者去磷酸化的正是胰高血糖素所磷酸化的那个双功能蛋白，于是果糖-2,6-二磷酸升高、糖酵解被刺激。**再往前追一步，它就是「吃碳水」与「造脂肪」之间的那条链：糖酵解变强意味着更多 acetyl-CoA，己糖流经磷酸戊糖途径变多意味着更多 NADPH，而 acetyl-CoA 加 NADPH 恰恰就是脂肪酸合成的原料 —— 这正是高碳水一餐之后脂肪合成急剧上升的原因。",
      src: "A p.543–544, §14.5"
    },
    {
      link_en: "the exit is controlled too, and its inhibitor list reads as one sentence",
      link_cn: "出口那一步也被管着 —— 而它那份抑制剂清单读起来其实只是一句话",
      en: "Pyruvate kinase, the last step, is inhibited by high ATP, by acetyl-CoA and by long-chain fatty acids, and it is activated by fructose 1,6-bisphosphate accumulating upstream, which is feed-forward control: the product of the committed step warns the last step that material is on its way. In liver, and only in liver, glucagon has protein kinase A phosphorylate this enzyme and switch it off, sparing glucose for export to the brain. Every one of those three inhibitors is a sign that the cell is already rich in fuel, so the list is one sentence: **stop making pyruvate when there is plainly enough energy about already**.",
      cn: "最后一步的丙酮酸激酶，被高浓度的 ATP、acetyl-CoA 和长链脂肪酸抑制；被上游积累起来的果糖-1,6-二磷酸激活 —— 后者是前馈控制：「作出承诺」那一步的产物提前通知最后一步「货在路上」。在肝里（而且只在肝里），胰高血糖素让蛋白激酶 A 把这个酶磷酸化并关掉，把葡萄糖省下来送去给脑。**那三个抑制剂，每一个都是「细胞燃料已经很富裕」的标志，所以整份清单其实是一句话：能量明明已经够了，就别再造丙酮酸了。**",
      src: "A p.544, §14.5, Fig. 14-26"
    },
    {
      link_en: "one more control point sits inside the mitochondrion, and it is where fat gets a vote on glucose",
      link_cn: "还有一个控制点在线粒体里面 —— 那是脂肪对葡萄糖投票的地方",
      en: "Pyruvate that has reached the mitochondrion meets a branch: the pyruvate dehydrogenase complex makes it into acetyl-CoA to fuel the citric acid cycle, or pyruvate carboxylase makes it into oxaloacetate to start gluconeogenesis. What decides is how much fat is available, since breaking fatty acids down in liver mitochondria yields acetyl-CoA. **Acetyl-CoA is a positive allosteric modulator of pyruvate carboxylase and a negative one of pyruvate dehydrogenase, which it inhibits by stimulating a protein kinase that inactivates the complex.** The loop closes on itself: energy needs met, oxidative phosphorylation slows, NADH rises against NAD+ and inhibits the citric acid cycle, acetyl-CoA accumulates, and accumulated acetyl-CoA both blocks its own further production and pushes the spare pyruvate towards oxaloacetate and eventually glucose.",
      cn: "已经进入线粒体的丙酮酸遇到一个分叉：丙酮酸脱氢酶复合体把它做成 acetyl-CoA 去给柠檬酸循环供料，或者丙酮酸羧化酶把它做成草酰乙酸、开启糖异生。做决定的是「手边有多少脂肪」，因为脂肪酸在肝线粒体里分解，产物正是 acetyl-CoA。**acetyl-CoA 是丙酮酸羧化酶的正性别构调节物，同时是丙酮酸脱氢酶的负性调节物 —— 对后者的抑制，是靠刺激一个使该复合体失活的蛋白激酶完成的。**这个环还会自己闭合：能量需求满足了，氧化磷酸化就慢下来，NADH 相对 NAD+ 升高并抑制柠檬酸循环，acetyl-CoA 于是积累起来；而积累起来的 acetyl-CoA 既阻断自己继续被造出来，又把多余的丙酮酸推向草酰乙酸、最终推向葡萄糖。",
      src: "A p.544–545, §14.5, Fig. 14-27"
    },
    {
      link_en: "one enzyme of the pathway has a second copy that behaves oppositely, and the trick is where it is kept",
      link_cn: "这条通路里有一个酶还有第二份拷贝，行为相反，而窍门在于它被放在哪里",
      recall_en: "the low-affinity liver enzyme from the control step, now with the mechanism that hides it",
      recall_cn: "控制那一步里那个低亲和力的肝酶，现在补上把它藏起来的机制",
      en: "Hexokinase IV, the liver enzyme, is regulated by being moved rather than by being inhibited. **A regulatory protein binds it and carries it into the nucleus when glucose is scarce, so the enzyme is sequestered away from its substrate; a rise in glucose releases it back to the cytosol.** That binding is much tighter when the allosteric effector fructose 6-phosphate is present, and glucose competes with fructose 6-phosphate for the same site, so a rise in cytosolic glucose — which equilibrates with nuclear glucose through the nuclear pores — knocks the regulatory protein off and lets the enzyme walk back out. During a fast, when blood glucose drops below 5 mM, high fructose 6-phosphate does the reverse, and the liver stops competing with other organs for the scarce glucose. Amount is regulated as well as activity: transcription of the hexokinase IV gene rises when more glucose is to be consumed, while transcription of glucose 6-phosphatase, the gluconeogenic enzyme that bypasses this very step, rises on low blood glucose and glucagon signalling instead. Regulating an enzyme by changing where it is, rather than how fast it runs, is a mechanism worth recognising because nothing about the active site would ever reveal it. The general name for two forms of one activity is isozyme, and the clinical case is lactate dehydrogenase: heart and liver make different proportions of its subunits, so the ratio of the LDH1 and LDH2 forms in blood says which tissue the enzyme leaked from.",
      cn: "肝里的己糖激酶 IV，调控方式是「被搬走」而不是「被抑制」。**葡萄糖稀缺时，一个调节蛋白结合它、把它带进细胞核，于是这个酶被隔离在底物够不着的地方；葡萄糖一升高，它又被放回胞质。**别构效应物果糖-6-磷酸在场时，这份结合紧得多；而葡萄糖与果糖-6-磷酸争的是同一个位点，所以胞质葡萄糖一升高 —— 它经核孔与核内葡萄糖平衡 —— 就把调节蛋白撞下来，让酶走回胞质。禁食时血糖跌到 5 mM 以下，高浓度的果糖-6-磷酸做的是相反的事，于是肝停止与其他器官争抢稀缺的葡萄糖。被调控的不只是活性，还有数量：需要多消耗葡萄糖时，己糖激酶 IV 基因的转录升高；而绕过这一步的那个糖异生酶——葡萄糖-6-磷酸酶——则在低血糖和胰高血糖素信号下被调高转录。靠「改变酶在哪里」而不是「改变它跑多快」来调控，值得认出来——因为光看活性中心永远看不出这回事。同一种活性有两种形式，通名叫同工酶（isozyme）；临床上的例子是乳酸脱氢酶：心和肝造出的亚基比例不同，所以血里 LDH1 与 LDH2 的比值能说出这个酶是从哪个组织漏出来的。",
      src: "A pp.539-546, Box 14-3"
    },
    {
      link_en: "and that general idea has a clinical test hanging off it, which is the part worth memorising",
      link_cn: "而这个一般想法下面挂着一项临床检验 —— 那才是真正值得背的部分",
      en: "Lactate dehydrogenase exists as five isozymes, each a tetramer built from two kinds of chain encoded by two different genes, M for muscle and H for heart. LDH1 is HHHH and sits in heart and erythrocytes; LDH5 is MMMM and sits in skeletal muscle and liver. The kinetic difference is real chemistry rather than labelling: the muscle-type enzyme is suited to reducing very low concentrations of pyruvate to lactate, the heart-type to oxidising lactate back to pyruvate, one reaction run in opposite directions in two tissues with opposite needs. **What the clinic reads is a ratio over time rather than a level: soon after a myocardial infarction LDH2 exceeds LDH1, by 12 hours the two are similar, and by 24 hours LDH1 exceeds LDH2.** That inversion, together with a rise in creatine kinase, is strong evidence of a recent infarction.",
      cn: "乳酸脱氢酶有五种同工酶，每一种都是四聚体，由两个不同基因编码的两类链拼成：M 代表肌肉，H 代表心脏。LDH1 是 HHHH，坐在心脏和红细胞里；LDH5 是 MMMM，坐在骨骼肌和肝里。动力学上的差别是真化学，而非贴标签：肌肉型适合把极低浓度的丙酮酸还原成乳酸，心脏型适合把乳酸氧化回丙酮酸 —— 同一个反应，在两个需求相反的组织里朝相反方向跑。**临床上读的是一个随时间变化的比值，而非某一个水平：心梗后不久 LDH2 高于 LDH1，到 12 小时两者接近，到 24 小时 LDH1 反超 LDH2。**这个翻转再加上肌酸激酶升高，就是近期梗死的有力证据。",
      src: "A p.540, Box 14-3"
    },
    {
      link_en: "and everything so far changed how fast the enzymes already there run, which is only half of what a cell can do",
      link_cn: "而到此为止改变的，都是「已经在场的酶跑多快」—— 那只是细胞能做的一半",
      en: "The other half changes how many molecules of an enzyme exist, through the balance between making them and breaking them down. Insulin is the main driver: more than 150 genes are transcriptionally regulated by it, and the direction of each follows from what insulin means. Up go hexokinase II and IV, phosphofructokinase-1, the bifunctional PFK-2/FBPase-2 protein and pyruvate kinase; down go the two enzymes without which no cell can make glucose: PEP carboxykinase and glucose 6-phosphatase. PEP carboxykinase is the clearest case, being regulated mostly at the level of its own synthesis and breakdown — fasting or high glucagon act through cyclic AMP to raise its transcription and stabilise its messenger RNA, while insulin or high blood glucose do the opposite. One transcription factor is worth a name: ChREBP, the carbohydrate response element binding protein of liver, adipose tissue and kidney, unlocked in two steps as phosphoprotein phosphatase 2A removes one phosphoryl group so it can enter the nucleus and removes a second inside, after which it partners with a protein called Mlx and turns on pyruvate kinase, fatty acid synthase and acetyl-CoA carboxylase. **The same xylulose 5-phosphate activates that phosphatase, so one nutritional signal throws the fast switch and the slow one, seconds on one side and minutes to days on the other.**",
      cn: "另一半改变的是「某种酶有多少个分子」，靠的是合成与降解之间的平衡。主要驱动者是胰岛素：受它在转录水平调控的基因有 150 个以上，而每一个的方向都能从「胰岛素意味着什么」推出来。上调的是己糖激酶 II 和 IV、PFK-1、双功能的 PFK-2/FBPase-2 蛋白和丙酮酸激酶；下调的则是「没有它们就造不出葡萄糖」的那两个酶：PEP 羧激酶和葡萄糖-6-磷酸酶。PEP 羧激酶是最清楚的例子，它主要在「自身的合成与降解」这一层被调控 —— 禁食或高胰高血糖素经 cyclic AMP 提高它的转录、稳定它的 mRNA，而胰岛素或高血糖则反其道而行。有一个转录因子值得记住名字：ChREBP，即肝、脂肪组织和肾里的「碳水化合物反应元件结合蛋白」；它分两步解锁：磷酸蛋白磷酸酶 2A 先摘掉一个磷酰基让它得以进核，进核后再摘掉第二个，此后它与一个叫 Mlx 的蛋白搭档，开启丙酮酸激酶、脂肪酸合酶和 acetyl-CoA 羧化酶的合成。**激活那个磷酸酶的正是同一个木酮糖-5-磷酸，于是同一个营养信号既掀快开关也掀慢开关 —— 一边以秒计，另一边以分钟到天计。**",
      src: "A p.545–546, §14.5, Table 14-5, Fig. 14-28"
    },
    {
      link_en: "and two naming habits in the older literature will trip a reader who does not know them",
      link_cn: "另外，旧文献里有两个命名习惯，不知道的人会被绊住",
      en: "The same triose appears in one structural figure as 3-phosphoglyceraldehyde and in the running text as glyceraldehyde 3-phosphate — one molecule, two orders of naming the same substituent. **Hexokinase is the broad-specificity enzyme that phosphorylates many hexoses at carbon 6, which is what separates it from the liver's glucokinase**, and the bond by which the aldehyde is held to the dehydrogenase in the oxidation step is a thioester, a sulfur-carbonyl linkage that carries the energy of that oxidation. Counted per glucose the ledger is −1, −1, +2, +2, which is where the net gain of two ATP comes from.",
      cn: "同一个丙糖，在一张结构图里写作「3-磷酸甘油醛」，在正文里写作「甘油醛-3-磷酸」——同一个分子，同一个取代基的两种命名顺序。**己糖激酶是那个特异性较宽、能把多种己糖在 6 号碳上磷酸化的酶，这正是它与肝里葡糖激酶的分别；而氧化那一步中醛基与脱氢酶之间的连接是硫酯键——一种承载着这次氧化能量的硫-羰基连接。**按每分子葡萄糖记账就是 −1、−1、+2、+2，净得两个 ATP 正是这么来的。",
      src: "B §7.8.1-7.8.3, pp.164-167"
    }
  ],
  terms: [
    { en: "phosphorolysis", cn: "磷酸解",
      def_en: "Cleavage of a bond using inorganic phosphate instead of water. It is how glycogen is mobilised: the phosphate goes onto the sugar as it leaves the chain, so glucose 1-phosphate is obtained without spending any ATP.",
      def_cn: "用无机磷酸而不是用水去断键。糖原就是这样被动员的：糖离开链条的同时磷酸就装了上去，于是不花任何 ATP 就得到葡萄糖-1-磷酸。" },
    { en: "phosphofructokinase (PFK-1)", cn: "磷酸果糖激酶 PFK-1",
      def_en: "Spends the second ATP of glycolysis to make fructose 1,6-bisphosphate. Practically irreversible, so it is the rate-limiting reaction, and it is the step that commits glucose to being burnt — which is why the cell controls it allosterically with ATP, ADP, AMP, citrate and fructose 2,6-bisphosphate.",
      def_cn: "花掉糖酵解的第二个 ATP，造出果糖-1,6-二磷酸。实际上不可逆，因而是限速反应；也是把葡萄糖交付去烧掉的那一步 —— 所以细胞用 ATP、ADP、AMP、柠檬酸和果糖-2,6-二磷酸对它作别构调控。" },
    { en: "substrate-level phosphorylation", cn: "底物水平磷酸化",
      def_en: "Making ATP by transferring a phosphate group directly from a high-energy metabolite to ADP, as phosphoglycerate kinase and pyruvate kinase do. It needs no membrane and no oxygen, which is why glycolysis works anywhere.",
      def_cn: "把一个磷酸基团从高能代谢物身上直接交给 ADP 来生成 ATP，磷酸甘油酸激酶与丙酮酸激酶做的就是这件事。它不需要膜、也不需要氧，这正是糖酵解在哪里都能跑的原因。" },
    { en: "glyceraldehyde-3-phosphate dehydrogenase", cn: "甘油醛-3-磷酸脱氢酶",
      def_en: "The one oxidation in glycolysis. The aldehyde adds to an enzyme SH group, is dehydrogenated onto NAD+, and the energy is kept as an enzyme-substrate thioester, which inorganic phosphate then attacks to release 1,3-bisphosphoglycerate.",
      def_cn: "糖酵解中唯一的氧化步骤。醛基先加到酶的 SH 基上，脱氢并把氢交给 NAD+，能量被保留为酶-底物之间的硫酯键；随后无机磷酸进攻这个硫酯，释放出 1,3-二磷酸甘油酸。" },
    { en: "glycolysis ATP balance", cn: "糖酵解的能量平衡",
      def_en: "Minus one ATP at hexokinase, minus one at phosphofructokinase, plus two at phosphoglycerate kinase and plus two at pyruvate kinase, because everything after the aldolase cut runs twice. Net two ATP and two NADH per glucose.",
      def_cn: "己糖激酶处 −1 ATP，磷酸果糖激酶处 −1 ATP，磷酸甘油酸激酶处 +2，丙酮酸激酶处 +2 —— 因为醛缩酶切开之后的每一步都跑两遍。每分子葡萄糖净得 2 个 ATP 与 2 个 NADH。" },
    { en: "gluconeogenesis", cn: "糖异生",
      def_en: "Synthesis of glucose, in animals mostly from lactate. Essentially glycolysis run backwards from phosphoenolpyruvate upwards, with three irreversible steps bypassed: two by phosphatases, and pyruvate to phosphoenolpyruvate by a detour through oxaloacetate.",
      def_cn: "葡萄糖的合成，在动物体内主要以乳酸为原料。本质上就是从磷酸烯醇丙酮酸向上倒着跑的糖酵解，其中三个不可逆步骤被绕开：两个由磷酸酶完成，丙酮酸到磷酸烯醇丙酮酸则绕道草酰乙酸。" },
    { en: "futile cycle", cn: "无效循环",
      def_en: "Two opposed enzymes working at once across the same pair of molecules, so the two reactions sum to ATP plus water giving ADP plus phosphate and the energy leaves as heat. Avoiding it is why glycolysis and gluconeogenesis are switched against each other at precisely the three bypassed steps.",
      def_cn: "两个方向相反的酶同时在同一对分子上运转，两个反应加总只剩下 ATP 加水变成 ADP 加磷酸，能量以热跑掉。避免它，正是糖酵解与糖异生必须恰好在那三个被绕过的步骤上互相对着开关的原因。" },
    { en: "fructose 2,6-bisphosphate", cn: "果糖-2,6-二磷酸",
      def_en: "A pure signal molecule, an intermediate of neither pathway, so it can be made and destroyed without disturbing throughput. It activates PFK-1 and inhibits FBPase-1 at once, and is made and destroyed by two domains of a single bifunctional protein that one phosphorylation switches over.",
      def_cn: "一个纯粹的信号分子，不是任何一条通路的中间产物，所以造它拆它都不扰动通量。它同时激活 PFK-1、抑制 FBPase-1；造它与拆它的是同一个双功能蛋白上的两个结构域，一次磷酸化就能把两者一起翻过来。" },
    { en: "glucokinase (hexokinase IV)", cn: "葡糖激酶（己糖激酶 IV）",
      def_en: "The liver form, specific for glucose and half-saturated at about 10 mM, which is above blood glucose, and not inhibited by glucose 6-phosphate. That low affinity is deliberate: the liver takes up more the more there is, and lets newly made glucose leave instead of trapping it.",
      def_cn: "肝里的那一型，只认葡萄糖，约 10 mM 才半饱和（高于血糖水平），而且不被葡萄糖-6-磷酸抑制。这份低亲和力是刻意的：血里越多肝拿走越多，而刚造出来的葡萄糖则被放走、不被扣住。" }
  ]
};

/* ======================================================= glycogen-metabolism */
window.BIOLITE_SPINE["key:glycogen-metabolism"] = {
  assumed: ["glucose", "ATP", "ADP", "AMP", "UTP", "UDP", "cyclic AMP", "starch",
            "glycolysis", "gluconeogenesis", "liver", "kidney", "muscle", "brain",
            "hepatocyte", "blood", "enzyme", "substrate", "protein", "serine",
            "tyrosine", "cytosol", "endoplasmic reticulum", "plasma membrane",
            "hormone", "insulin", "glucagon", "epinephrine", "receptor", "calcium",
            "protein kinase A", "hexokinase", "glucokinase", "amylase", "vitamin B6",
            "fatty acid", "blood-brain barrier", "allosteric", "phosphate",
            "inorganic phosphate", "pyrophosphate", "myoglobin"],
  nodeTitle_en: "Glycogen metabolism",
  nodeTitle_cn: "糖原代谢",
  title_en: "Why the cell takes glycogen apart with phosphate instead of water, why putting it back costs three times what it returns, and why the cascade that switches the two has an extra tier on one side",
  title_cn: "为什么细胞用磷酸而不是水去拆糖原，为什么装回去要花掉拆出来时收回的三倍，以及切换两者的那条级联为什么一边多出一级",
  steps: [
    {
      en: "Glycogen is a large, heavily branched polymer of glucose residues, and the reason a cell keeps its sugar in that shape rather than loose is osmotic. **A well-fed liver cell holds enough stored glucose to come to about 0.4 M as free monomers, an osmolarity so far above the surrounding fluid that water would pour in and probably burst the cell** — polymerised, all 55,000 residues of one molecule exert the osmotic pressure of a single particle.",
      cn: "糖原是葡萄糖残基连成的、高度分支的大聚合物；细胞把糖存成这个形状而不是散着放，理由是渗透压。**一个吃饱的肝细胞里存着的葡萄糖，若以游离单体计约为 0.4 M —— 这个渗透浓度远高于周围体液，水会倒灌进来，多半把细胞胀破；而聚合起来之后，一个分子里那 55,000 个残基产生的渗透压只相当于一个颗粒。**",
      src: "A p.556–557, §15.1–15.2"
    },
    {
      link_en: "and this small expensive store sits next to a fat store about a hundred times larger, which raises the obvious question",
      link_cn: "而这个又小又贵的库，旁边就是一个大约一百倍于它的脂肪库 —— 这就带出一个明摆着的问题",
      en: "A 70 kg human stores about 100 g of glycogen in the liver, which is 5 to 10 per cent of the liver wet weight, and up to 400 g in skeletal muscle, which is 1 to 2 per cent of it. Three sentences say why a vertebrate keeps this store at all: **fat cannot be turned into glucose, fat cannot be broken down without oxygen — which is what hard-working skeletal muscle often needs — and the brain cannot use fatty acids, because long-chain ones do not cross the blood-brain barrier**.",
      cn: "一个 70 kg 的人肝里约存 100 g 糖原，相当于肝湿重的 5–10%；骨骼肌里最多 400 g，相当于肌肉湿重的 1–2%。**为什么脊椎动物还要留着这个库？三句话：脂肪变不成葡萄糖；脂肪不能在无氧条件下分解，而奋力工作的骨骼肌常常正需要无氧分解；脑用不了脂肪酸，因为长链脂肪酸过不了血脑屏障。**",
      src: "A p.556–557, §15.1–15.2"
    },
    {
      link_en: "the store is not a heap — it is a particle with its machinery bolted on",
      link_cn: "这个库不是一堆东西，而是一个自带机器的颗粒",
      en: "Glycogen sits in cytosolic granules. A muscle granule is 20 to 30 nm across and carries up to 55,000 glucose residues with about 2,000 nonreducing ends, a nonreducing end being a chain terminus whose anomeric carbon is tied up in the glycosidic bond, and therefore the only place where any enzyme of this pathway can work. At the core of every granule is a dimer of the protein glycogenin. **The enzymes that build glycogen and break it down, and the regulatory proteins that act on those enzymes, are bolted onto the granule itself** — so this is not a store with enzymes somewhere nearby, it is an assembly that carries its own machinery.",
      cn: "糖原以胞质颗粒的形式存在。肌肉里的颗粒直径 20–30 nm，带着多达 55,000 个葡萄糖残基和约 2,000 个非还原端 —— 所谓非还原端，是指异头碳已经参与糖苷键的那种链末端，因而它是这条通路上任何酶唯一能下手的地方。每个颗粒的核心是蛋白 glycogenin（糖原蛋白）的一个二聚体。**造糖原的酶、拆糖原的酶，以及作用在这些酶身上的调节蛋白，都是直接拴在颗粒上的 —— 所以这不是「一个旁边放着酶的仓库」，而是一个自带机器的组装体。**",
      src: "A p.556–558, §15.1"
    },
    {
      link_en: "and the granules are not all alike, which is where the difference between two tissues starts",
      link_cn: "而颗粒并不都一样 —— 两个组织之间的差别正是从这里开始的",
      en: "The granules just described are beta-granules, 20 to 30 nm across in muscle. In liver, 20 to 40 beta-granules cluster into one protein-rich alpha-granule as wide as 300 nm — large enough to see in the electron microscope in a well-fed animal, and essentially gone after a 24-hour fast. Inside either kind the chains are stacked in tiers: about 13 glucose residues to a chain, inner B-chains carrying two branch points each, outer A-chains carrying none, 6 or 7 tiers in all, with that unbranched outer tier making up most of the particle. **Muscle beta-granules release glucose faster than the liver's alpha-granules do, so the difference between the two tissues is already built into the shape of the store.**",
      cn: "刚才描述的那种颗粒是 β-颗粒，在肌肉里直径 20–30 nm。在肝里，20 到 40 个 β-颗粒聚成一个富含蛋白的 α-颗粒，宽可达 300 nm —— 在吃饱的动物身上大到能用电子显微镜看见，而禁食 24 小时后基本消失。无论哪一种，里面的链都是分层码放的：每条链约 13 个葡萄糖残基，内层的 B 链各带两个分支点，外层的 A 链一个也不带，全颗粒共 6 或 7 层，而那个不分支的最外层构成了颗粒的大部分。**肌肉的 β-颗粒比肝的 α-颗粒放糖更快 —— 两个组织之间的差别，早就被造进这个库房的形状里了。**",
      src: "A p.557–558, §15.1"
    },
    {
      link_en: "now the breakdown, and the first decision is which molecule attacks the bond",
      link_cn: "现在讲分解 —— 第一个决定是「派哪个分子去进攻那根键」",
      en: "Inside a cell, a polysaccharide is not broken by water. Glycogen phosphorylase lets inorganic phosphate attack the alpha-1,4 glycosidic bond at a nonreducing end: one glucose residue is cleaved off the polysaccharide and transferred straight onto phosphoric acid, so what leaves the chain is glucose 1-phosphate. The newly exposed end is then cut the same way, over and over. That is phosphorolysis, and the same chemistry breaks starch down inside a plant cell. **Hydrolysis is what happens in the gut instead, where amylase attacks dietary starch with water and hands back free glucose** — so one and the same bond is broken by two different attacking molecules, according to whether the sugar is being digested or mobilised.",
      cn: "在细胞内部，多糖不是被水打断的。糖原磷酸化酶让无机磷酸去进攻非还原端的 α-1,4 糖苷键：一个葡萄糖残基从多糖上被切下来，直接转移到磷酸上，因而离开链条时的形式是葡萄糖-1-磷酸。新露出来的末端再被同样地切下，如此反复。这就是磷酸解（phosphorolysis）；植物细胞内部拆淀粉用的是同一套化学。**水解则发生在消化道：那里由淀粉酶用水去进攻膳食淀粉，交还的是游离葡萄糖 —— 同一根键，进攻它的分子却有两种，取决于这份糖是在被消化，还是在被动员。**",
      src: "CZ p.173, §7.11.2; A p.558–559, §15.2"
    },
    {
      link_en: "and what the cell buys by using phosphate can be counted, in ATP, at a named step",
      link_cn: "而用磷酸换来的好处可以数出来 —— 用 ATP，而且能指名道姓在哪一步",
      en: "Glucose 1-phosphate is converted to glucose 6-phosphate and enters glycolysis already phosphorylated, so it skips the hexokinase step altogether: the preparatory phase costs one ATP instead of two, and the cell nets three ATP per monomer instead of two. There is a second gain that costs nothing. **A phosphorylated sugar cannot cross the plasma membrane, so glucose taken off glycogen by phosphorolysis is trapped inside the cell that released it**, whereas the free glucose that hydrolysis would have made could simply walk out.",
      cn: "葡萄糖-1-磷酸转成葡萄糖-6-磷酸，进入糖酵解时已经带着磷酸，于是把己糖激酶那一步整个跳过了：准备阶段只花 1 个 ATP 而不是 2 个，每个单体净得 3 个 ATP 而不是 2 个。还有一份不花钱的收益。**磷酸化的糖穿不过质膜，所以靠磷酸解从糖原上取下来的葡萄糖被扣在放出它的那个细胞里；而水解本会产生的游离葡萄糖，是可以直接走掉的。**",
      src: "CZ p.173–174; A p.522, 559, §15.2"
    },
    {
      link_en: "one cofactor sits in this enzyme, and it answers the question of which vitamin glycogen breakdown depends on",
      link_cn: "这个酶身上有一个辅因子，它回答了「糖原分解依赖哪种维生素」这个问题",
      en: "Pyridoxal phosphate, which is the active form of vitamin B6, is an essential cofactor of glycogen phosphorylase and is covalently attached near the active site. Everywhere else in metabolism it does Schiff-base chemistry on an amino group — transamination, decarboxylation, amino acid work generally. Here it does not touch the chemistry of the substrate at all: **only its own phosphate group takes part, acting as a general acid that helps inorganic phosphate attack the glycosidic bond**, which is why this is the one place where the cofactor is easy to forget.",
      cn: "磷酸吡哆醛（pyridoxal phosphate）是维生素 B₆ 的活性形式，它是糖原磷酸化酶必需的辅因子，共价连在活性位点附近。在代谢的其他任何地方，它做的都是针对氨基的席夫碱化学 —— 转氨基、脱羧，以及氨基酸代谢里的种种。**而在这里，它根本不碰底物的化学：参与反应的只有它自己那个磷酸基团，充当广义酸，帮助无机磷酸去进攻糖苷键 —— 这也正是它在这个位置最容易被忘掉的原因。**",
      src: "A p.559, §15.2"
    },
    {
      link_en: "phosphorylase cannot finish the job alone, because it stops short of every branch",
      link_cn: "磷酸化酶一个人干不完，因为它在每个分支前都会停住",
      en: "Phosphorylase chews along a chain and then stops dead four glucose residues short of every alpha-1,6 branch point, which is the spot where one chain is joined onto the side of another. Clearing the branch takes two chemically different activities carried on one bifunctional protein, the debranching enzyme: a transferase activity, which the second textbook calls transglycosidase, lifts a block of three residues off the stub and reattaches it to a nearby nonreducing end as an alpha-1,4 bond, and an alpha-1,6-glucosidase activity then hydrolyses the single remaining glucose off, so that the branch is cleared by two successive reactions and the chain becomes straight again. Its formal name — oligo-alpha-1,6-to-alpha-1,4-glucantransferase — names only the first of the two activities, and what shows that both really sit on one protein is a single genetic defect: type IIIa, Cori or Forbes disease, takes out the debranching step as a whole. That last residue leaves as free glucose rather than as a phosphate ester, and since every branch point yields one such residue, **complete breakdown of glycogen always delivers about 10 per cent free glucose alongside the glucose 1-phosphate**.",
      cn: "磷酸化酶沿着链一路啃，然后在距离每个 α-1,6 分支点还有四个葡萄糖残基的地方停死 —— 分支点就是一条链接在另一条链侧面的那个位置。清理分支需要两种化学性质不同的活性，而它们长在同一个双功能蛋白（脱支酶）上：转移酶活性（另一本教材称之为转糖苷酶 transglycosidase）把残端上三个残基的一整块提起来，以 α-1,4 键接到附近的非还原端上；随后 α-1,6-葡萄糖苷酶活性把剩下的那一个葡萄糖水解下来——两个连续的反应就这样清掉分支，链重新变直。它的正式名称「oligo-α-1,6→α-1,4-葡聚糖转移酶」只点出了两种活性中的第一种；而「两种活性确实长在同一个蛋白上」这件事，由一个单一的遗传缺陷证明：IIIa 型（Cori 病，又称 Forbes 病）一次就废掉整个脱支步骤。**最后这一个残基是以游离葡萄糖、而不是以磷酸酯的形式离开的；由于每个分支点都会交出这样一个残基，糖原被完全分解时，除葡萄糖-1-磷酸之外总还会给出约 10% 的游离葡萄糖。**",
      src: "CZ p.173–174, §7.11.2; A p.559, 562, §15.2"
    },
    {
      link_en: "the third enzyme of the breakdown trio is the one that gets skipped, and its mechanism is one sentence",
      link_cn: "分解三人组里的第三个酶最常被跳过，而它的机制一句话就说得完",
      en: "Phosphoglucomutase — the third enzyme of the trio — converts glucose 1-phosphate into glucose 6-phosphate, and its way of doing it is not a simple slide of the phosphate along the sugar. The enzyme arrives already phosphorylated on a serine residue; it donates that phosphoryl group to carbon 6 of the substrate, so the substrate is briefly glucose 1,6-bisphosphate, and then takes a phosphoryl group back off carbon 1, ending re-phosphorylated on its serine and ready for the next molecule. **A mutase moves a functional group from one position to another inside the same molecule, and mutases are a subclass of the isomerases.** The reaction is reversible, and glycogen synthesis runs this same enzyme the other way, from glucose 6-phosphate to glucose 1-phosphate.",
      cn: "磷酸葡萄糖变位酶 —— 三人组里的第三个 —— 把葡萄糖-1-磷酸变成葡萄糖-6-磷酸，而它的做法并不像「把磷酸就地挪一格」那么简单。这个酶来的时候，自己一个丝氨酸残基上已经带着磷酸；它先把这个磷酰基交给底物的 C-6，于是底物短暂地成为葡萄糖-1,6-二磷酸，随后再从 C-1 收回一个磷酰基，最后带着丝氨酸磷酸离场，准备接待下一个分子。**变位酶（mutase）把一个官能团在同一分子内部从一个位置搬到另一个位置，而变位酶是异构酶的一个亚类。**这个反应是可逆的，糖原合成时同一个酶朝反方向跑：从葡萄糖-6-磷酸到葡萄糖-1-磷酸。",
      src: "A p.522, 559, 562, §15.2"
    },
    {
      link_en: "and where that glucose 6-phosphate goes is where liver and muscle part company",
      link_cn: "而那个葡萄糖-6-磷酸的去向，正是肝与肌肉分道扬镳的地方",
      en: "Phosphoglucomutase moves the phosphate from carbon 1 to carbon 6, and in skeletal muscle the glucose 6-phosphate then goes into glycolysis to pay for contraction, and that is the end of it. **The liver instead has to put glucose back into the blood, which needs glucose 6-phosphatase — an enzyme of the endoplasmic reticulum membrane whose active site faces into the lumen**, so the sugar has to be carried into the lumen by the transporter T1, hydrolysed there, and the products carried back out by T2 and T3, with glucose finally leaving the cell through GLUT2 — the high-capacity transporter that equilibrates glucose across the hepatocyte membrane. Liver and kidney are the tissues that hold this phosphatase, and the epithelium of the small intestine is the third site it has been credited with. Putting that active site inside the endoplasmic reticulum keeps a phosphatase physically away from glycolysis, which runs in the cytosol and would be aborted by a loose phosphatase among its intermediates; muscle has no such enzyme at all, and therefore contributes no glucose to the blood.",
      cn: "磷酸葡萄糖变位酶把磷酸从 1 号碳挪到 6 号碳。在骨骼肌里，得到的葡萄糖-6-磷酸随即进入糖酵解、为收缩付账，到此为止。肝则必须把葡萄糖送回血液，这需要葡萄糖-6-磷酸酶 —— 一个内质网膜上的酶，活性位点朝向腔内，所以糖必须先由转运体 T1 送进腔里、在那里被水解，产物再由 T2 和 T3 送出来，葡萄糖最后经 GLUT2 离开细胞——GLUT2 就是那个让葡萄糖在肝细胞膜内外迅速拉平的高容量转运体。带着这个磷酸酶的组织是肝和肾，而小肠上皮是第三个被认为拥有它的部位。**把那个活性位点放进内质网腔，就把一个磷酸酶与糖酵解在物理上隔开了 —— 糖酵解在胞质里跑，一个散在它中间产物之间的磷酸酶会把它打断；而肌肉根本没有这个酶，因此完全不向血液供糖。**",
      src: "A p.560, 569, §15.2, Fig. 15-6"
    },
    {
      link_en: "synthesis does not simply run the breakdown backwards, and the price of that is countable",
      link_cn: "合成并不是把分解倒着跑一遍 —— 而这件事的价钱是可以算出来的",
      recall_en: "the opposite of the cheap entry that phosphorolysis gave, four steps up",
      recall_cn: "与上面第四步「磷酸解带来的廉价入口」正好相反",
      en: "Glucose has to be activated before it can be added to a chain, and it is activated as a sugar nucleotide, meaning a sugar whose anomeric carbon carries a nucleotide attached through a phosphate ester bond. For glycogen that is UDP-glucose, made from glucose 1-phosphate and UTP. The reaction is barely downhill on its own, but it releases pyrophosphate, which inorganic pyrophosphatase destroys at once at minus 19.2 kJ/mol, and that pull makes the activation irreversible; the nucleotidyl tag also sets the sugar aside in its own pool, apart from the sugar heading into glycolysis. Both phosphoanhydride bonds of the UTP are spent on one single glucose residue, and before that a hexokinase spent an ATP to bring a free blood glucose in. **Storing one glucose as glycogen therefore costs three high-energy phosphate equivalents while phosphorolysis on the way back out returns only one**, so a round trip through the store recovers well under half of what was invested — that is the price a cell pays for fuel it can reach in seconds.",
      cn: "葡萄糖要先被活化，才能被接到链上；活化的形式是糖核苷酸 —— 也就是异头碳上通过一根磷酸酯键接了一个核苷酸的糖。糖原用的这一个是 UDP-葡萄糖，由葡萄糖-1-磷酸加 UTP 生成。这个反应本身几乎不下坡，但它放出焦磷酸，而无机焦磷酸酶立刻以 −19.2 kJ/mol 把它销毁，这份拉力使活化变得不可逆；那枚核苷酰基标签同时把这个糖拨进它自己的池子，与要去走糖酵解的糖分开。UTP 的两根磷酸酐键全花在「一个」葡萄糖残基上；而在那之前，己糖激酶还花了一个 ATP 才把一个游离血糖弄进来。**所以把一个葡萄糖存成糖原要花三个高能磷酸当量，而磷酸解在拆回来时只还一个 —— 走一趟库房，收回的远不到当初投入的一半；这就是细胞为「几秒钟就能取用的燃料」所付的价钱。**",
      src: "CZ p.174, §7.11.2; A p.560–563, §15.2, Fig. 15-7"
    },
    {
      link_en: "four properties are what make a sugar nucleotide the right donor, not merely an activated one",
      link_cn: "糖核苷酸之所以是「对的」供体、而不只是「被活化的」供体，靠的是四条性质",
      en: "Luis Leloir found out in 1953 what sugar nucleotides are for, and four properties explain why polysaccharide synthesis everywhere — disaccharides, glycogen, starch, cellulose — is built on them. Their formation is metabolically irreversible, because the pyrophosphate released is destroyed the moment it appears. The nucleotide half offers many groups for noncovalent contact with an enzyme, and that extra binding energy is spent on catalysis. **The nucleotidyl group is an excellent leaving group, which activates the sugar carbon it sits on towards nucleophilic attack** — attack by an electron-rich atom, here the hydroxyl at the end of the growing chain. And the tag sorts hexoses into separate pools, one heading for glycogen and one for glycolysis.",
      cn: "1953 年 Luis Leloir 弄清了糖核苷酸是干什么用的；而各处的多糖合成 —— 双糖、糖原、淀粉、纤维素 —— 都建立在它们身上，理由有四条。第一，它们的生成在代谢上不可逆，因为放出的焦磷酸一出现就被销毁。第二，核苷酸那一半提供了许多可与酶发生非共价接触的基团，这份额外的结合能被花在催化上。**第三，核苷酰基是一个极好的离去基团，它把自己所连的那个糖碳活化，使之易受亲核进攻**—— 所谓亲核进攻，就是被一个富电子的原子进攻，在这里是正在延长的链末端上的羟基。第四，这枚标签把己糖分进不同的池子：一池奔糖原，一池奔糖酵解。",
      src: "A p.560–561, §15.2"
    },
    {
      link_en: "with the sugar activated, two different enzymes make two different bonds",
      link_cn: "糖被活化之后，由两个不同的酶去造两种不同的键",
      en: "Glycogen synthase takes the glucose residue off UDP-glucose and attaches it to the carbon-4 hydroxyl of the terminal residue at a nonreducing end, making an alpha-1,4 bond, and that is the only bond it can make. Branch points are alpha-1,6, and they are made by a separate branching enzyme, which lifts a terminal piece of six or seven residues off a chain of at least eleven and reattaches it to the carbon-6 hydroxyl of a glucose further inside. Branching is not decoration: **both synthase and phosphorylase work only at nonreducing ends, so multiplying those ends to about 2,000 per granule lets two thousand enzyme molecules work on one glycogen molecule at once**, which is what allows a burst of contraction to be supplied within seconds.",
      cn: "糖原合酶从 UDP-葡萄糖上取下葡萄糖残基，接到某个非还原端末端残基的 C-4 羟基上，形成 α-1,4 键 —— 而它只会造这一种键。分支点是 α-1,6 键，由另一个分支酶来造：它从一条至少有 11 个残基的链上提起 6 或 7 个残基的末端片段，重新接到更靠内的某个葡萄糖的 C-6 羟基上。**分支不是装饰：合酶和磷酸化酶都只在非还原端干活，所以把这种末端增加到每个颗粒约 2,000 个，就意味着两千个酶分子可以同时在同一个糖原分子上开工 —— 一次爆发性收缩之所以能在几秒内被供上能，靠的就是这个。**",
      src: "CZ p.174, §7.12; A p.557, 563, §15.2"
    },
    {
      link_en: "one thing is still missing: the synthase can lengthen a chain but cannot start one",
      link_cn: "还缺一件东西：合酶能把链加长，却起不了头",
      en: "Glycogen synthase needs a primer, meaning a piece of alpha-1,4 polyglucose already there to add onto, so polysaccharide synthesis in general starts from a protein chain that already carries short sugar chains. For glycogen that protein is glycogenin, which is both the primer and the enzyme that makes the primer. It is a homodimer, and its first move is odd enough to be memorable: each subunit transfers a glucose residue from UDP-glucose onto Tyr194 of the other subunit, then extends that chain by seven more residues, and only then does glycogen synthase take over. **Glycogenin does not leave afterwards — it stays buried inside the granule, covalently attached at the reducing end, for the whole life of the particle**, which is why every glycogen molecule has a protein at its centre.",
      cn: "糖原合酶需要一个引物，也就是一段已经存在、可以往上加的 α-1,4 多聚葡萄糖；所以多糖合成一般是从一条已经带着短糖链的蛋白质链开始的。对糖原来说，这个蛋白就是 glycogenin：它既是引物，又是造出这个引物的酶。它是同源二聚体，第一步古怪得让人忘不掉 —— 每个亚基把一个葡萄糖残基从 UDP-葡萄糖转到「另一个」亚基的 Tyr194 上，随后把那条链再延长七个残基，直到这时糖原合酶才接手。**glycogenin 事后并不离开 —— 它以共价键连在还原端上，一直埋在颗粒内部，陪伴这个颗粒的一生；这就是每一个糖原分子中心都坐着一个蛋白的原因。**",
      src: "CZ p.174, §7.12; A p.563–565, §15.2, Fig. 15-10"
    },
    {
      link_en: "both directions now exist, so something must guarantee they never run together",
      link_cn: "两个方向都有了，于是必须有东西保证它们绝不同时开工",
      en: "Synthesis and breakdown are controlled reciprocally by one cascade: the synthase is active exactly when phosphorylase is inactive. Epinephrine in muscle, or glucagon in liver, raises cyclic AMP, and cyclic AMP activates protein kinase A — the enzyme through which every one of these hormonal effects is delivered. From there the two arms have different lengths. On the synthesis arm, protein kinase A phosphorylates glycogen synthase directly and switches it off, turning the active I form into the inactive D form — one step. On the breakdown arm it phosphorylates phosphorylase kinase, and phosphorylase kinase is what then converts glycogen phosphorylase b into the much more active a form — two steps. Say it in that order and the standard error becomes impossible: **protein kinase A never touches glycogen phosphorylase itself, and a phosphate placed by this cascade means off for the synthase and on for phosphorylase**.",
      cn: "合成与分解由同一条级联互为倒数地控制着：合酶有活性的时刻，恰恰是磷酸化酶没活性的时刻。肌肉里的肾上腺素、或肝里的胰高血糖素抬高 cyclic AMP，cyclic AMP 激活蛋白激酶 A。从这里开始，两条臂长度不同。合成那一臂：蛋白激酶 A 直接磷酸化糖原合酶并把它关掉，把有活性的 I 型变成无活性的 D 型 —— 一步。分解那一臂：它磷酸化的是磷酸化酶激酶，再由磷酸化酶激酶把糖原磷酸化酶 b 变成活性高得多的 a 型 —— 两步。**照这个顺序说出来，那个标准错误就犯不了了：蛋白激酶 A 从来不碰糖原磷酸化酶本身；而这条级联装上去的那个磷酸，对合酶意味着「关」，对磷酸化酶意味着「开」。**",
      src: "CZ p.174–175, §7.12; A p.566, 569, §15.3"
    },
    {
      link_en: "the extra tier is not an accident of drawing, and what it buys can be counted",
      link_cn: "多出来的那一级不是画图时的偶然，而且它买到了什么可以被数出来",
      en: "Glycogen phosphorylase has exactly one kinase acting on it, phosphorylase kinase, so a relay is needed to reach it at all; glycogen synthase has several kinases acting on it directly, so it is wired to each of them. What the extra tier buys is amplification, and the numbers are printed: x molecules of hormone give 20x cyclic AMP, 10x active protein kinase A, 100x active phosphorylase kinase, 1,000x active phosphorylase a and 10,000x glucose 1-phosphate. **The two largest jumps in that chain are exactly the two kinase steps the two-tier structure creates, so deleting the phosphorylase kinase tier would take a factor of ten out of the response** — an enzyme with one input needs a relay, an enzyme with many is wired to all of them.",
      cn: "作用在糖原磷酸化酶身上的激酶只有一个 —— 磷酸化酶激酶 —— 所以必须有个中继站才够得着它；而糖原合酶身上直接作用着好几个激酶，于是它被直接接到每一个输入上。多出来的那一级买到的是放大，而且数字是印出来的：x 个激素分子 → 20x 个 cyclic AMP → 10x 个有活性的蛋白激酶 A → 100x 个有活性的磷酸化酶激酶 → 1,000x 个有活性的 phosphorylase a → 10,000x 个葡萄糖-1-磷酸。**这条链上最大的两次跃升，恰恰就是「两级结构」造出来的那两个激酶步骤；把磷酸化酶激酶这一级删掉，整个响应就少掉一个数量级 —— 只有一个输入的酶需要中继站，有许多输入的酶则被直接接到每一个上。**",
      src: "A p.566–568, §15.3, Fig. 15-12"
    },
    {
      link_en: "running alongside the covalent layer is an allosteric one, and in muscle it has two sensors",
      link_cn: "与共价那一层并行跑着的是别构层 —— 在肌肉里它有两个感受器",
      en: "Ca2+, the very signal that tells a muscle to contract, binds and activates phosphorylase kinase, and it binds through the delta subunit of that kinase, which is calmodulin, the general-purpose calcium-binding protein. So ordinary unhurried muscle work mobilises glycogen with no hormone involved at all. The second sensor reads the energy charge: AMP piles up as ATP is spent and activates glycogen phosphorylase directly, while ATP occupies the same site and turns the enzyme down. **AMP and ATP compete for one site, so what the enzyme measures is their ratio rather than either concentration on its own** — and the two sensors enter the cascade at different heights, calcium one tier up at the kinase, AMP at the bottom on phosphorylase itself.",
      cn: "Ca²⁺ —— 正是那个命令肌肉收缩的信号 —— 结合并激活磷酸化酶激酶；它结合的位置是这个激酶的 δ 亚基，而那个亚基就是钙调蛋白（calmodulin），一种通用的钙结合蛋白。所以平常不紧不慢的肌肉工作，压根不需要激素参与就已经在动员糖原。第二个感受器读的是能荷：ATP 被花掉时 AMP 堆积起来，直接激活糖原磷酸化酶；而 ATP 充足时它占住同一个位点，把酶调低。**AMP 与 ATP 争的是同一个位点，所以酶测的是它们的比值，而不是任何一方的绝对浓度；而且这两个感受器切入级联的高度不同 —— 钙作用在高一级的激酶上，AMP 作用在最底下的磷酸化酶本身上。**",
      src: "A p.566–567, 569, §15.3"
    },
    {
      link_en: "and the liver uses the same enzyme as a completely different instrument",
      link_cn: "而肝把同一个酶当成一件完全不同的乐器来用",
      en: "When blood glucose falls, glucagon runs the cascade and phosphorylase a starts pushing glucose out into the blood. When blood glucose comes back to normal, glucose enters the hepatocyte and binds an inhibitory allosteric site on phosphorylase a; that binding changes the shape of the enzyme so that its phosphorylated serines are exposed to the phosphatase, which strips them off and shuts the enzyme down. This is product inhibition with a twist — **glucose does not block the active site, it makes the enzyme a better substrate for a phosphatase, so the off-switch is covalent and lasting**; and because the liver cell reads blood glucose through that site directly, it needs no hormone in order to stop.",
      cn: "血糖下降时，胰高血糖素跑完整条级联，phosphorylase a 开始把葡萄糖推进血液。而当血糖回到正常，葡萄糖进入肝细胞，结合到 phosphorylase a 上一个抑制性的别构位点；这次结合改变了酶的构象，把它被磷酸化的丝氨酸暴露给磷酸酶，磷酸酶把它们摘掉，酶就关停了。**这是一种带转折的产物抑制 —— 葡萄糖并不去堵活性位点，它做的是让这个酶变成磷酸酶更好的底物，于是这个「关」是共价的、持久的；而由于肝细胞通过那个位点直接读血糖，它不需要任何激素来叫停。**",
      src: "A p.567, §15.3, Fig. 15-13"
    },
    {
      link_en: "one phosphatase undoes everything the cascade did, and how it is held is what stops the system oscillating",
      link_cn: "一个磷酸酶把级联做过的一切全部撤销 —— 而它被怎样摁住，正是这套系统不会来回振荡的原因",
      en: "Phosphoprotein phosphatase 1 strips the phosphoryl groups off all three enzymes the cascade phosphorylated, and its catalytic subunit is never free in the cytosol: a tissue-specific glycogen-targeting protein, GM in muscle and GL in liver, holds it on the granule beside its substrates, so specificity does not have to be built into its active site. Insulin tips the balance from the other side, by activating this phosphatase and by blocking glycogen synthase kinase 3 — a kinase phosphorylates the amino terminus of that enzyme, turning it into a fake substrate that jams its own binding site. The neatest handle is the last one: **active glycogen phosphorylase inhibits the phosphatase directly, so while breakdown is running the enzyme doing the breaking holds off the switch that would start synthesis** — an interlock against a futile cycle, built out of the parts of the pathway itself.",
      cn: "磷酸蛋白磷酸酶 1（PP1）能把级联磷酸化过的那三个酶身上的磷酰基统统摘掉；而它的催化亚基从不游离在胞质里：一个组织特异的糖原靶向蛋白（肌肉里是 GM，肝里是 GL）把它摁在颗粒上、紧挨着底物，于是特异性不必被造进活性位点。胰岛素则从另一侧压秤盘：它既激活这个磷酸酶，又封住糖原合酶激酶 3 —— 一个激酶去磷酸化那个酶的氨基末端，把那段序列变成一个假底物，恰好卡住它自己的结合位点。**最精妙的是最后一个把手：有活性的糖原磷酸化酶直接抑制这个磷酸酶 —— 分解正在进行时，那个正在拆糖原的酶亲自摁住了「启动合成」的开关；这是一个用通路自身零件搭出来的、防止无效循环的联锁装置。**",
      src: "A p.568–569, §15.3, Fig. 15-15b, Fig. 15-16"
    },
    {
      link_en: "the synthase side carries more machinery than the phosphorylase side, and that is the other reason the two arms are unequal",
      link_cn: "合酶那一侧带的机器比磷酸化酶那一侧多 —— 这是两条臂不等长的另一个理由",
      en: "Glycogen synthase kinase 3 puts phosphoryl groups on three serine residues near the carboxyl terminus of the active synthase, giving the inactive form, which is dead unless its allosteric activator glucose 6-phosphate is present. **This kinase cannot start on its own: casein kinase II has to phosphorylate a nearby residue first, an event called priming, and only then will glycogen synthase kinase 3 bind and work.** It binds through three positively charged residues that grip the phosphoserine — a serine already carrying a phosphate — four positions along, which lines its active site up over the serine at position zero; phosphorylating that one creates a fresh priming site, so the enzyme walks down the chain to minus four and then minus eight. Insulin switches it off by having protein kinase B phosphorylate a serine near its own amino terminus: that stretch folds into its own priming site and occupies the place a real primed substrate would bind, as a pseudosubstrate — so an enzyme that requires a primed substrate is switched off by being handed a fake one made out of its own sequence. A third kinase, AMP-activated protein kinase, holds onto the granule through a carbohydrate-binding domain and phosphorylates the synthase whenever AMP is high and ATP low.",
      cn: "糖原合酶激酶 3（GSK3）把磷酰基装到有活性的合酶羧基端附近的三个丝氨酸残基上，得到无活性的那一型 —— 除非它的别构激活物葡萄糖-6-磷酸在场，否则这一型是死的。**这个激酶自己起不了头：必须先由酪蛋白激酶 II 把附近的一个残基磷酸化，这一步叫 priming（打底），此后 GSK3 才肯结合上去干活。**它靠三个带正电的残基抓住往后数第四位上的磷酸丝氨酸 —— 即一个已经带着磷酸的丝氨酸 —— 从而把自己的活性位点对准 0 位上的丝氨酸；把那一个磷酸化，就又造出一个新的 priming 位点，于是这个酶沿着链往下走到 −4 位、再到 −8 位。胰岛素关掉它的办法是让蛋白激酶 B 磷酸化 GSK3 自己氨基端附近的一个丝氨酸：那一段随即折进它自己的 priming 位点，占住了真正「被打过底的底物」本该结合的位置，成为一个假底物（pseudosubstrate）—— 一个需要「被打过底的底物」的酶，就这样被塞进一个用它自身序列裁出来的假货而瘫掉。第三个激酶是 AMP 激活的蛋白激酶（AMPK），它靠一个碳水结合结构域挂在颗粒上，只要 AMP 高、ATP 低，就去磷酸化合酶。",
      src: "A p.567–568, §15.3, Fig. 15-15"
    },
    {
      link_en: "put all of that machinery into one liver cell after a meal and it reads as a short list",
      link_cn: "把上面这些机器放进一顿饭之后的一个肝细胞里，它读起来就是一份短清单",
      en: "After a carbohydrate-rich meal blood glucose rises, insulin is released, and insulin has two immediate effects in a hepatocyte: it inactivates glycogen synthase kinase 3, and it activates a protein phosphatase, most likely phosphoprotein phosphatase 1. Those two together fully activate glycogen synthase. **The same phosphatase also dephosphorylates glycogen phosphorylase a and phosphorylase kinase, so the one enzyme that starts synthesis is the one that stops breakdown.** Meanwhile glucose enters through GLUT2 — always in place in the plasma membrane, so no hormone has to open it — and the raised glucose inside pulls hexokinase IV off its nuclear regulatory protein, releasing it to the cytosol to phosphorylate glucose and feed both glycolysis and glycogen synthesis. The liver fills to about 10 per cent of its own weight.",
      cn: "碳水丰盛的一餐之后血糖升高，胰岛素被释放；胰岛素在肝细胞里有两个即时效应：使糖原合酶激酶 3 失活，并激活一个蛋白磷酸酶（很可能就是磷酸蛋白磷酸酶 1）。这两件事合起来把糖原合酶完全激活。**同一个磷酸酶还把 phosphorylase a 和磷酸化酶激酶一并去磷酸化 —— 于是「启动合成」的那个酶，正是「停掉分解」的那个酶。**与此同时葡萄糖经 GLUT2 进来 —— 它一直待在质膜上，不需要任何激素去把它打开 —— 胞内升高的葡萄糖把己糖激酶 IV 从它的核内调节蛋白上拽下来，放回胞质去磷酸化葡萄糖，既供糖酵解也供糖原合成。肝一直能装到约占自身体重的 10%。",
      src: "A p.569, §15.3"
    },
    {
      link_en: "and the fasting cell is the same list run the other way, with one kinase doing every job",
      link_cn: "而禁食时的细胞是同一份清单反过来跑 —— 每件事都由同一个激酶做",
      en: "When blood glucose drops, glucagon is released, and every one of its effects is delivered by protein kinase A. **That one kinase does four things at once: switches phosphorylase kinase on, switches glycogen synthase off, drops fructose 2,6-bisphosphate, and switches pyruvate kinase off.** The third of those works through the bifunctional protein that both makes and destroys that signal — a kinase domain called PFK-2 and a phosphatase domain called FBPase-2 on one chain — and the last two together shut glycolysis down while gluconeogenesis is left running. So the liver builds glucose 6-phosphate by two routes at once, out of glycogen and out of smaller precursors, and refuses to spend any of it. Releasing the glucose itself is possible only in liver and kidney, because no other tissue carries glucose 6-phosphatase.",
      cn: "血糖下降时，胰高血糖素被释放，而它的每一个效应都由蛋白激酶 A 递送。**这一个激酶同时做四件事：把磷酸化酶激酶打开，把糖原合酶关掉，把果糖-2,6-二磷酸压下去，再把丙酮酸激酶关掉。**第三件事是通过那个既造这个信号又拆这个信号的双功能蛋白完成的 —— 一条链上带着一个叫 PFK-2 的激酶结构域和一个叫 FBPase-2 的磷酸酶结构域；而后两件事合起来把糖酵解关停，只留糖异生开着。于是肝同时用两条路做出葡萄糖-6-磷酸 —— 一条来自糖原，一条来自更小的前体 —— 却一点也不肯花掉。而把葡萄糖本身放出去，只有肝和肾做得到，因为别的组织都没有葡萄糖-6-磷酸酶。",
      src: "A p.569, §15.3"
    },
    {
      link_en: "this enzyme is the textbook example of regulation, and it is worth knowing why it was chosen",
      link_cn: "这个酶是调控的教科书例子，而它为什么被选中，值得知道",
      en: "Glycogen phosphorylase earns the space it gets for four separate reasons, and they are four different exam topics meeting in one protein. **It was among the first allosterically regulated enzymes known, the first enzyme shown to be controlled by reversible phosphorylation**, one of the first allosteric enzymes whose active and inactive structures were both solved by x-ray crystallography, and it shows isozymes doing tissue-specific work. Carl and Gerty Cori found in the late 1930s that the skeletal-muscle enzyme exists in two interconvertible forms, the active phosphorylase a and the much less active phosphorylase b; Earl Sutherland then showed b predominates in resting muscle and that epinephrine converts it to a during vigorous activity, glucagon doing the same in liver. One naming trap comes with the history: this enzyme is so often called simply phosphorylase, because it was the first one found, that the bare word has stuck — but phosphorylase alone now names a whole class, so the full name is the safe one.",
      cn: "糖原磷酸化酶配得上它占的篇幅，理由有四条，而这四条是四个不同的考试主题在同一个蛋白身上相遇。**它是最早为人所知的别构调节酶之一，是第一个被证明受可逆磷酸化控制的酶，是最早由 X 射线晶体学同时解出活性型与非活性型结构的别构酶之一，而且它演示了同工酶如何承担组织特异的工作。**1930 年代末 Carl 与 Gerty Cori 发现骨骼肌里这个酶以两种可互变的形式存在：有活性的磷酸化酶 a，和活性低得多的磷酸化酶 b；随后 Earl Sutherland 证明静息肌肉里以 b 为主，而剧烈活动时肾上腺素把它变成 a，肝里则由胰高血糖素做同样的事。历史还带来一个命名陷阱：因为它是第一个被发现的磷酸化酶，人们常常直接简称它 phosphorylase，这个简称就留下来了——但今天单说 phosphorylase 指的是一整类酶，所以说全名才稳妥。",
      src: "A pp.565-566, §15.3"
    },
    {
      link_en: "and the molecular detail of that conversion is short enough to hold as one sentence",
      link_cn: "而那次转化的分子细节，短到可以当一句话记住",
      en: "Phosphorylase b kinase transfers a phosphoryl group to Ser14 on each of the two identical subunits of phosphorylase b. **Two phosphates go on per enzyme molecule, at the cost of two ATP, and they trigger the conformational change from the T state, which is phosphorylase b, to the R state, which is phosphorylase a.** So this is the same T-to-R allosteric transition met in enzyme regulation, driven here by covalent modification instead of by a ligand — which is exactly why this enzyme sits in both stories at once. The reverse is the phosphatase's work: phosphoprotein phosphatase 1 strips those phosphoryl groups off and returns the enzyme to the less active b form, which in muscle is what happens as it returns to rest.",
      cn: "磷酸化酶 b 激酶把一个磷酸基转移到磷酸化酶 b 两个相同亚基各自的 Ser14 上。**每个酶分子上去两个磷酸，代价是两个 ATP；它们触发从 T 态（即磷酸化酶 b）到 R 态（即磷酸化酶 a）的构象变化。**所以这就是在酶调控里见过的那次 T→R 别构转变，只是这里驱动它的是共价修饰而不是配体——这正是这个酶同时坐在两个故事里的原因。反向是磷酸酶的活：磷酸蛋白磷酸酶 1 把这些磷酸基摘掉，让酶回到活性较低的 b 型；在肌肉里，这发生在它回到静息的时候。",
      src: "A pp.566-567, Fig. 15-11"
    },
    {
      link_en: "and the cheapest way to check whether the pathway is really understood is to remove one enzyme at a time",
      link_cn: "而检验这条通路是否真的懂了，最省事的办法是一次拿掉一个酶",
      en: "Thirteen human glycogen storage diseases are catalogued, each naming an enzyme, an organ and a set of symptoms. Read them in pairs rather than as a list: **McArdle disease is muscle phosphorylase and Hers disease is liver phosphorylase — one enzymatic activity in two tissues giving two completely different clinical pictures**, which is the isozyme argument made by nature. Von Gierke disease is glucose 6-phosphatase itself and type Ib is the transporter that carries its substrate into the endoplasmic reticulum; the two give the same picture, which is what proves that compartmentation is real rather than a drawing convention. The others name the same enzymes this chain has already used — type 0 glycogen synthase, type III the debranching enzyme, type IV the branching enzyme, type II a lysosomal glucosidase, type VII muscle PFK-1, type XI the transporter GLUT2.",
      cn: "人类糖原贮积病一共编目十三种，每一种都点名一个酶、一个器官和一组症状。**要成对地读，而不是当清单背：McArdle 病是肌肉磷酸化酶，Hers 病是肝磷酸化酶——同一种酶活性在两个组织里，给出两幅完全不同的临床图景，这是大自然亲手做出的同工酶论证。**von Gierke 病是葡萄糖-6-磷酸酶本身，而 Ib 型是把它的底物运进内质网的那个转运体；两者给出相同的图景，这恰恰证明区室化是真的，不是作图的惯例。其余几种点的都是这条链已经用过的酶——0 型是糖原合酶，III 型是脱支酶，IV 型是分支酶，II 型是溶酶体葡萄糖苷酶，VII 型是肌肉 PFK-1，XI 型是转运体 GLUT2。",
      src: "A p.562, Box 15-1"
    },
    {
      link_en: "one enzyme in the middle of the cascade goes by two names, and both are in circulation",
      link_cn: "级联中间那个酶有两个名字，而且两个都在流通",
      en: "Written end to end the cascade runs adrenaline or glucagon, then adenylate cyclase, then cyclic AMP, then the kinase that acts on phosphorylase kinase — protein kinase A, also written as the kinase of phosphorylase-kinase, which describes the job rather than naming the enzyme — and from there both branches at once, phosphorylase kinase b to a and glycogen synthase I to D. Synthesis is built the same way as breakdown is regulated: **the sugar is added by glycosyltransferases acting on monosaccharides activated as nucleoside diphosphates**, which is the general mechanism for building any polysaccharide and not a special arrangement for glycogen.",
      cn: "把级联从头到尾写出来是：肾上腺素或胰高血糖素 → 腺苷酸环化酶 → 环腺苷酸 → 作用于磷酸化酶激酶的那个激酶——也就是蛋白激酶 A，也被写作「磷酸化酶激酶的激酶」，那是在描述它的活儿而不是给它命名——由此同时驱动两条分支：磷酸化酶激酶 b→a，以及糖原合酶 I→D。**合成的搭法与分解的调控同出一辙：糖是由糖基转移酶接上去的，底物是以核苷二磷酸形式活化的单糖——这是造任何多糖的通用机制，不是糖原专有的安排。**",
      src: "B §7.12.1-7.12.2, pp.174-175"
    }
  ],
  terms: [
    { en: "phosphorolysis", cn: "磷酸解",
      def_en: "Breaking the alpha-1,4 glycosidic bond with inorganic phosphate as the attacking molecule rather than water, so the residue leaves as glucose 1-phosphate. It is the intracellular route for both glycogen and plant starch, it saves exactly one ATP per monomer because the hexokinase step is skipped, and the phosphorylated sugar cannot leave the cell.",
      def_cn: "断开 α-1,4 糖苷键时，进攻的分子是无机磷酸而不是水，因而残基以葡萄糖-1-磷酸的形式离开。它是细胞内拆糖原和拆植物淀粉共用的途径；因为跳过了己糖激酶那一步，每个单体正好省下一个 ATP；而且磷酸化的糖离不开细胞。" },
    { en: "nonreducing end", cn: "非还原端",
      def_en: "A chain terminus whose anomeric carbon is committed to a glycosidic bond. Both glycogen synthase and glycogen phosphorylase work only here, so branching — which raises the count to about 2,000 per muscle granule — is what makes a granule fast rather than what makes it tidy.",
      def_cn: "异头碳已经参与糖苷键的那种链末端。糖原合酶和糖原磷酸化酶都只在这里干活，所以分支（它把这种末端提高到每个肌肉颗粒约 2,000 个）带来的是速度，而不是整齐。" },
    { en: "debranching enzyme, transglycosidase", cn: "脱支酶与转糖苷酶",
      def_en: "One bifunctional protein carrying two chemically different activities. The transferase, also called transglycosidase, moves a block of three residues from a branch stub to a nearby nonreducing end as an alpha-1,4 bond; the alpha-1,6-glucosidase then hydrolyses the last residue off as free glucose, which is why complete breakdown gives about 10 per cent free glucose.",
      def_cn: "一个带着两种化学性质不同活性的双功能蛋白。转移酶活性（又称转糖苷酶）把分支残端上三个残基的一整块搬到附近的非还原端、以 α-1,4 键接上；α-1,6-葡萄糖苷酶再把最后一个残基水解下来，成为游离葡萄糖 —— 这就是完全分解会给出约 10% 游离葡萄糖的原因。" },
    { en: "pyridoxal phosphate at phosphorylase", cn: "磷酸化酶上的磷酸吡哆醛",
      def_en: "The active form of vitamin B6, covalently attached near the active site of glycogen phosphorylase. Unusually it does no Schiff-base chemistry on the substrate here; only its own phosphate group takes part, as a general acid helping inorganic phosphate attack the glycosidic bond.",
      def_cn: "维生素 B₆ 的活性形式，共价连在糖原磷酸化酶活性位点附近。不寻常之处是它在这里完全不对底物做席夫碱化学，参与反应的只有它自身的磷酸基团 —— 充当广义酸，帮助无机磷酸进攻糖苷键。" },
    { en: "UDP-glucose", cn: "UDP-葡萄糖",
      def_en: "The activated donor for glycogen synthesis, made from glucose 1-phosphate and UTP. Its formation is irreversible because inorganic pyrophosphatase destroys the released pyrophosphate at minus 19.2 kJ/mol, and the nucleotidyl tag also assigns the sugar to the glycogen pool rather than the glycolytic one.",
      def_cn: "糖原合成所用的活化供体，由葡萄糖-1-磷酸加 UTP 生成。它的形成不可逆，因为无机焦磷酸酶以 −19.2 kJ/mol 销毁放出的焦磷酸；而这枚核苷酰基标签同时把这个糖划归糖原池，而不是糖酵解池。" },
    { en: "glycogenin", cn: "糖原蛋白",
      def_en: "Both the primer a new glycogen chain is built on and the enzyme that makes that primer. Each subunit of the homodimer glucosylates Tyr194 of the other subunit and extends the chain by seven residues before glycogen synthase takes over; it then stays buried in the granule, covalently attached at the reducing end, for the whole life of the granule.",
      def_cn: "既是新糖原链赖以起头的引物，又是造出这个引物的酶。同源二聚体的每个亚基给另一个亚基的 Tyr194 加上葡萄糖，并把那条链延长七个残基，之后糖原合酶才接手；此后它一直以共价键连在还原端、埋在颗粒内部，陪伴颗粒一生。" },
    { en: "phosphorylase a and b; synthase I and D", cn: "磷酸化酶 a／b；合酶 I／D",
      def_en: "The two nomenclatures of this cascade. Glycogen phosphorylase b is the less active form, and phosphorylation on Ser14 of each subunit gives the active a form; glycogen synthase is the other way round, the unphosphorylated I form being active and phosphorylation giving the inactive D form. One phosphate therefore means on for one enzyme and off for the other.",
      def_cn: "这条级联上的两套命名。糖原磷酸化酶 b 是活性较低的那一型，在每个亚基 Ser14 上磷酸化后得到有活性的 a 型；糖原合酶正好相反，未磷酸化的 I 型才有活性，磷酸化后得到无活性的 D 型。所以同一个磷酸，对一个酶意味着「开」，对另一个意味着「关」。" },
    { en: "phosphorylase kinase", cn: "磷酸化酶激酶",
      def_en: "The second tier of the breakdown arm, and the only kinase acting on glycogen phosphorylase — which is why the cascade needs an extra step to reach it. Protein kinase A phosphorylates this enzyme, not phosphorylase itself. Its delta subunit is calmodulin, so Ca2+ activates it directly and ordinary contraction mobilises glycogen without any hormone.",
      def_cn: "分解那条臂的第二级，也是唯一作用于糖原磷酸化酶的激酶 —— 这正是级联必须多一步才够得着它的原因。蛋白激酶 A 磷酸化的是这个酶，而不是磷酸化酶本身。它的 δ 亚基就是钙调蛋白，所以 Ca²⁺ 能直接激活它，普通的收缩不需要任何激素就能动员糖原。" },
    { en: "phosphoprotein phosphatase 1 (PP1)", cn: "磷酸蛋白磷酸酶 1（PP1）",
      def_en: "The single phosphatase reversing all three enzymes the cascade phosphorylates. Its catalytic subunit is never free — a glycogen-targeting protein, GM in muscle and GL in liver, holds it on the granule next to its substrates. Insulin activates it; active glycogen phosphorylase inhibits it, which is the interlock keeping breakdown and synthesis from running together.",
      def_cn: "把级联磷酸化过的三个酶统统逆转回去的那一个磷酸酶。它的催化亚基从不游离 —— 糖原靶向蛋白（肌肉里的 GM、肝里的 GL）把它摁在颗粒上、紧挨着底物。胰岛素激活它；而有活性的糖原磷酸化酶抑制它 —— 这正是防止分解与合成同时开工的那个联锁。" }
  ]
};

/* =========================================================== respiratory-chain */
window.BIOLITE_SPINE["key:respiratory-chain"] = {
  assumed: ["ATP", "ADP", "NAD+", "NADH", "NADP+", "NADPH", "FAD", "FADH2", "FMN",
            "oxygen", "water", "proton", "electron", "pH", "enzyme", "protein",
            "subunit", "heme", "membrane", "mitochondrion", "chloroplast",
            "cytosol", "substrate", "cofactor", "citric acid cycle", "glycolysis",
            "gluconeogenesis", "pyruvate", "succinate", "fumarate", "malate",
            "fatty acid", "amino acid", "DNA", "RNA", "gene", "genome", "mutation",
            "ribosome", "nucleus", "isotope", "conformational change", "cytochrome",
            "brain", "muscle", "heart", "liver", "kidney", "insulin", "glucose"],
  nodeTitle_en: "The respiratory chain",
  nodeTitle_cn: "呼吸链",
  title_en: "One long drop taken in small steps, spent entirely on moving protons across a membrane that does not leak",
  title_cn: "一段很长的落差，被拆成许多小步走完；而这些能量全部花在把质子搬过一张不漏的膜上",
  steps: [
    {
      en: "Oxidising one mole of NADH all the way to water releases about 220 kJ, and the NADH arriving at this chain comes from four places: the four dehydrogenation steps of the citric acid cycle, the oxidative decarboxylation of pyruvate, the breakdown of fatty acids, and glycolysis when it runs aerobically. The electrons do not make that drop in one fall: they are handed from carrier to carrier, ordered by reduction potential, which measures how strongly a carrier holds electrons, so that they always move towards the carrier that holds them more tightly, and finally to oxygen. **The whole of that released energy is spent on one thing — pumping protons out of the mitochondrial matrix** — so the free energy of an oxidation ends up stored as a difference in proton concentration and charge across a membrane.",
      cn: "把一摩尔 NADH 一路氧化成水，放出约 220 kJ；而抵达这条链的 NADH 来自四处：柠檬酸循环的四个脱氢步骤、丙酮酸的氧化脱羧、脂肪酸的分解，以及有氧条件下的糖酵解。电子不是一步跌下来的：它们从一个载体交到下一个载体，顺序由还原电位排定（还原电位衡量一个载体抓电子抓得有多紧），因而总是流向抓得更紧的那一个，最后交给氧。**这份放出来的能量全部只花在一件事上 —— 把质子泵出线粒体基质 —— 于是一场氧化的自由能，最终以「跨膜的质子浓度差和电荷差」的形式被存了起来。**",
      src: "CZ p.141, §6.2.4; A pp.660, 673"
    },
    {
      link_en: "and none of that works unless the carriers are nailed down and the container is tight",
      link_cn: "而这一切成立的前提是：载体被钉死在原处，容器也不漏",
      en: "A mitochondrion has two membranes of opposite character. The outer one is freely permeable up to about 5,000 daltons because it is studded with porins, which are proteins forming open channels; the inner one is impermeable to almost everything, protons included, and anything crossing it needs its own transporter. The oxidoreductase enzymes are not floating free — they are built into that inner membrane. **An enzyme fixed in a membrane has a direction in three-dimensional space and not merely a rate**, and that vectorial character is what lets the free energy of a chemical reaction be converted into osmotic work, which is what carrying a proton against its own gradient is.",
      cn: "线粒体有两层性质相反的膜。外膜对约 5,000 道尔顿以下的东西自由通透，因为上面布满了孔蛋白 —— 一类形成敞开通道的蛋白；内膜则几乎什么都不让过，质子也在内，任何要穿过它的分子都得有自己的转运体。而那些催化氧化还原的酶并不是自由漂着的 —— 它们是嵌进这张内膜里的。**一个被固定在膜里的酶，拥有的不只是一个反应速率，还有三维空间里的一个方向；正是这种「矢量特性」，使化学反应的自由能可以被转换成渗透功 —— 而所谓渗透功，就是逆着质子自己的梯度把它搬过去。**",
      src: "CZ p.141, §6.2.4; A pp.660–661"
    },
    {
      link_en: "and the carriers themselves come in two kinds, which take turns",
      link_cn: "而这些载体分为两类，并且轮流出现",
      en: "What travels down the chain is a reducing equivalent, meaning one electron worth of reducing power however it happens to be carried. Some carriers move a proton along with each electron: NAD+, the flavin FMN, and ubiquinone, a small fat-soluble molecule that dissolves in the membrane and diffuses inside it. Others move the electron alone and leave the proton behind: the iron-sulfur proteins, which carry iron bound to sulfur outside any heme, and the cytochromes. Those two kinds alternate along the chain, and because each carrier is fixed in the membrane facing a particular way, **a proton picked up on the matrix side is put down on the other side every time the electron changes hands** — the pumping is not a separate machine bolted on, it falls out of the alternation.",
      cn: "沿链往下走的东西叫还原当量，意思是「相当于一个电子的还原力」，不论它以什么形式在跑。有些载体每搬一个电子就顺带搬一个质子：NAD+、黄素 FMN，以及泛醌（一种能溶在膜里、并在膜内扩散的小分子脂溶性载体）。另一些只搬电子、把质子留下：铁硫蛋白（携带与硫结合、但不在血红素里的铁）和细胞色素。**这两类载体沿着链交替出现；而由于每个载体在膜里都朝着固定的方向安放，每交接一次电子，就有一个在基质侧取走的质子被放到另一侧 —— 泵送不是外接上去的一台机器，它是从这种交替里自己掉出来的。**",
      src: "CZ pp.142–143, §6.2.4; A pp.662–664"
    },
    {
      link_en: "and the height of each step is not set by the metal at its centre",
      link_cn: "而每一级台阶有多高，并不是由中心那个金属决定的",
      en: "Cytochromes are heme-containing carriers, named by where they absorb visible light — type a near 600 nm, type b near 560, type c near 550, which is also the tool used to watch them, since the absorption shifts when a carrier is reduced. Iron-sulfur centres range from a single iron held by four cysteines up to a cluster of four irons and four sulfurs. **Reduction potential is a property of the whole protein and not of the metal centre inside it: the same heme sits at different potentials in different proteins**, and iron-sulfur centres span minus 0.65 to plus 0.45 volts — which is how a cell builds a long staircase of finely spaced steps out of a handful of chemical parts.",
      cn: "细胞色素是含血红素的载体，按它们吸收可见光的位置命名 —— a 型约 600 nm，b 型约 560 nm，c 型约 550 nm；而这也正是观察它们的手段，因为一个载体被还原时吸收会移动。铁硫中心则从「一个铁被四个半胱氨酸抓着」一直到「四铁四硫的簇」都有。**还原电位是整个蛋白的性质，而不是里面那个金属中心的性质：同一种血红素在不同蛋白里坐在不同电位上，铁硫中心的跨度从 −0.65 V 到 +0.45 V —— 细胞正是这样，用寥寥几种化学零件搭出一段间距细密的长阶梯。**",
      src: "A pp.663–664"
    },
    {
      link_en: "the order they are arranged in was not read off a diagram",
      link_cn: "它们排列的顺序，不是从某张图上读出来的",
      en: "Three independent methods fixed the sequence and they agree. The measured reduction potentials were ranked, since electrons flow spontaneously towards the higher one. The whole chain was reduced with no oxygen present and oxygen was then admitted suddenly while a spectrometer watched which carrier lost its electrons first, which reads the order from the far end. And one step at a time was blocked with a specific poison: everything before the block stays reduced, everything after it turns oxidised, and different poisons triangulate the whole sequence — rotenone and amytal at Complex I, antimycin A and myxothiazol at Complex III, cyanide and carbon monoxide at Complex IV, oligomycin at the ATP synthase, and atractyloside at neither, since it blocks the transporter that exchanges ADP for ATP. **The order counts as established because three unrelated approaches converge on it, and not because any single measurement settled it.**",
      cn: "有三种彼此独立的方法把这个顺序定了下来，而三者结论一致。第一，把实测的还原电位排序 —— 电子自发地流向电位更高的那个。第二，在完全无氧的条件下把整条链还原掉，然后突然通氧，用分光计盯着看哪个载体最先失去电子 —— 这等于从末端倒着把顺序读出来。第三，用专一的毒物一次只堵一步：堵点之前的全部保持还原态，之后的全部变成氧化态，用堵不同步骤的毒物做三角定位 —— 鱼藤酮和异戊巴比妥堵复合物 I，抗霉素 A 和 myxothiazol 堵复合物 III，氰化物和一氧化碳堵复合物 IV，寡霉素堵的是 ATP 合酶，而苍术苷两者都不堵（它挡住的是「以 ADP 换 ATP」的那个转运体）。**这个顺序之所以算是确立了，是因为三条互不相干的路走到了同一个结论，而不是因为某一次测量把它钉死了。**",
      src: "A pp.664–665, 667, table 19-4, figure 19-6"
    },
    {
      link_en: "the carriers are not loose in the membrane — they are packed into numbered machines",
      link_cn: "载体并不是散在膜里的 —— 它们被编进了几台带编号的机器",
      en: "Five multienzyme lipoprotein complexes can be isolated from the inner membrane, numbered with Roman numerals, and each has a systematic name saying exactly what it does: Complex I is NADH:ubiquinone oxidoreductase, the largest at 850 kDa and 45 subunits; Complex II is succinate:ubiquinone oxidoreductase, the smallest at 140 kDa; Complex III is ubiquinol:cytochrome c oxidoreductase; Complex IV is ferrocytochrome c:oxygen oxidoreductase, better known as cytochrome oxidase. **Complex V is the odd one in the list — it is not an oxidoreductase at all but the phosphorylation complex, the ATP synthase** — and three components belong to no complex, the mobile carriers NADH, ubiquinol and cytochrome c, which is the one freely soluble carrier and shuttles between Complexes III and IV.",
      cn: "从内膜上可以分离出五个多酶脂蛋白复合物，用罗马数字编号；每一个都有一个把它的工作说清楚的系统名：复合物 I 是 NADH:泛醌氧化还原酶，最大，850 kDa、45 个亚基；复合物 II 是琥珀酸:泛醌氧化还原酶，最小，140 kDa；复合物 III 是泛醇:细胞色素 c 氧化还原酶；复合物 IV 是铁细胞色素 c:氧氧化还原酶，通称细胞色素氧化酶。**复合物 V 是这份名单里的异类 —— 它根本不是氧化还原酶，而是磷酸化复合物，即 ATP 合酶；另有三个组分不属于任何复合物，就是可移动载体 NADH、泛醇和细胞色素 c —— 后者是唯一自由可溶的载体，在复合物 III 与 IV 之间往返。**",
      src: "CZ pp.141–145, §6.2.4; A p.665, table 19-3"
    },
    {
      link_en: "the first machine shows how electron flow becomes proton pumping at all",
      link_cn: "第一台机器展示了「电子流」究竟怎么变成「泵质子」",
      en: "Complex I is L-shaped, one arm buried in the membrane and one reaching into the matrix. A hydride ion from NADH plus a proton from the matrix reduce ubiquinone, and the energy of that downhill reaction drives four protons from the matrix out to the intermembrane space. Now the part worth holding: ubiquinone is reduced far away from the membrane arm that does the pumping. **The coupling therefore cannot be direct chemistry — the energy has to travel as a long-range change of shape along the protein**, and three subunits of the membrane arm resembling a known sodium-proton antiporter are thought to move three of those four protons.",
      cn: "复合物 I 呈 L 形，一条臂埋在膜里，一条臂伸进基质。来自 NADH 的一个氢负离子加上基质里的一个质子把泛醌还原，而这个下坡反应的能量把四个质子从基质赶到膜间隙。值得记住的是接下来这一点：泛醌被还原的地方，离那条真正干泵送活的膜臂很远。**所以这种偶联不可能是直接的化学反应 —— 能量必须以一次长程的构象改变沿着蛋白传过去；膜臂上有三个亚基与一个已知的钠-质子逆向转运体相似，被认为负责搬运那四个质子中的三个。**",
      src: "A pp.666–667"
    },
    {
      link_en: "and the first machine's own equation names a form of ubiquinone no diagram draws",
      link_cn: "而第一台机器自己的反应式里，出现了一种示意图从不画出的泛醌形式",
      en: "Complex I can be designated NADH:ubiquinone oxidoreductase, and with a ubiquinone pool that is already half reduced its reaction reads NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2 — QH• being the semiquinone, the half-reduced radical form of ubiquinone, and QH2 being ubiquinol, the fully reduced form. Its core is a flavoprotein named NADH-dehydrogenase, a protein carrying the flavin nucleotide FMN as its prosthetic group. **Besides FMN the same protein carries iron-sulfur groups, whose iron is non-heme iron: bound straight to sulfur and to cysteine side chains, never inside the flat ring of a heme.**",
      cn: "复合物 I 也可以写作 NADH:泛醌氧化还原酶；若泛醌池本来就已半还原，它的反应写作 NADH + H+ + 2 QH• ⇌ NAD+ + 2 QH2 —— 其中 QH• 是半醌，即泛醌被还原了一半的自由基形式，QH2 是泛醇，即完全还原的形式。它的核心是一个叫 NADH-脱氢酶的黄素蛋白，也就是以黄素核苷酸 FMN 作辅基的蛋白。**除 FMN 之外，这个蛋白还带着若干铁硫基团，其中的铁是非血红素铁：直接与硫原子和半胱氨酸侧链结合，而不是嵌在血红素那张扁平的环里。**",
      src: "B §6.2.4, pp.141–142"
    },
    {
      link_en: "and Complex I is not the only door in — but every door opens onto the same room",
      link_cn: "而复合物 I 并不是唯一的入口 —— 但所有入口通向同一个房间",
      en: "Complex II is succinate dehydrogenase, the same enzyme already met as a step of the citric acid cycle, now seen as a second doorway; it hands electrons from succinate to the ubiquinone pool and pumps no protons at all. Three more routes deliver to the same pool: fatty acid oxidation through an electron-transferring flavoprotein, the glycerol 3-phosphate shuttle, and dihydroorotate dehydrogenase, which sits on the same face while building pyrimidine nucleotides. Ubiquinone is therefore a junction where separately taught subjects meet, and **since only the Complex I door pumps protons on the way in, what a fuel is worth in ATP is decided by which door its electrons come through**.",
      cn: "复合物 II 就是琥珀酸脱氢酶 —— 柠檬酸循环里早已认识的那个酶，如今被看作第二道门；它把电子从琥珀酸交进泛醌池，而且一个质子也不泵。另有三条路线通向同一个池子：脂肪酸氧化经电子转移黄素蛋白交货，3-磷酸甘油穿梭，以及二氢乳清酸脱氢酶（它在搭建嘧啶核苷酸时就长在这一侧面上）。**所以泛醌是一个路口，几个被分开讲授的主题在这里碰头；而由于只有复合物 I 那道门在进门时泵质子，一种燃料到底值多少 ATP，就由它的电子走哪道门决定。**",
      src: "CZ p.143, §6.2.4; A pp.668, 671–672",
      see: [{ id: "L-17-2-1", en: "fatty acid oxidation, where one set of those electrons starts", cn: "脂肪酸氧化 —— 其中一路电子的起点" }]
    },
    {
      link_en: "the same complex carries one cofactor that does no electron transfer at all",
      link_cn: "同一个复合物上还挂着一个根本不做电子传递的辅基",
      en: "Complex II carries one more cofactor that the main electron route does not need, and that route runs succinate to FAD to three iron-sulfur centres to ubiquinone. Sitting off it is a heme b whose job is defensive — it lowers how often an electron leaks out of the complex onto O2 and makes a reactive oxygen species, a partly reduced form of oxygen that damages whatever it meets. **Mutations near that heme or near the ubiquinone site cause hereditary paraganglioma — a benign tumour of the carotid body, the organ in the neck that senses blood oxygen.** Mutations affecting the succinate-binding region are linked instead to degeneration in the central nervous system and to tumours of the adrenal medulla.",
      cn: "复合物 II 还带着一个主电子通路并不需要的辅基；主通路走的是琥珀酸 → FAD → 三个铁硫中心 → 泛醌。坐在通路之外的是一个血红素 b，它的职责是防御性的 —— 降低电子从复合物里漏到 O2 上、生成活性氧（即部分还原的氧，遇到什么就损伤什么）的频率。**血红素 b 附近或泛醌结合位点附近的突变会引起遗传性副神经节瘤 —— 一种颈动脉体的良性肿瘤，而颈动脉体正是颈部那个感受血氧的器官。** 影响琥珀酸结合区域的突变则与中枢神经系统的退行性病变、以及肾上腺髓质的肿瘤相关。",
      src: "A pp.671–672"
    },
    {
      link_en: "the third machine exists to solve a mismatch between two kinds of carrier",
      link_cn: "第三台机器的存在，是为了解决两类载体之间的一个不匹配",
      recall_en: "the two kinds of carrier from the third step: paired versus single",
      recall_cn: "第三步里那两类载体：成对搬运的与单独搬运的",
      en: "Ubiquinol carries two electrons at once; cytochrome c can accept only one at a time. Complex III splits the pair. Its redox core is two cytochrome b molecules, bT and bK, which sit at different potentials because they are bound to different polypeptides, and only bT can be reduced by ubiquinol. On the intermembrane side, ubiquinol is oxidised to the semiquinone and then to ubiquinone, releasing two protons and passing one electron on through cytochrome c1 to cytochrome c; the other electron travels bT to bK and is used on the matrix side to reduce a ubiquinone back to the semiquinone, taking one proton from the matrix. **One electron therefore circulates inside the complex instead of leaving it, and that recycling is why two electrons — one NADH worth — release four protons here rather than two.**",
      cn: "泛醇一次带两个电子，而细胞色素 c 一次只收得下一个。复合物 III 把这一对拆开。它的氧化还原核心是两个细胞色素 b 分子 —— bT 和 bK，二者因结合在不同的多肽上而坐在不同电位上，其中只有 bT 能被泛醇还原。在膜间隙那一侧，泛醇先被氧化成半醌、再被氧化成泛醌，释放两个质子，并把一个电子经细胞色素 c1 交给细胞色素 c；另一个电子则由 bT 走到 bK，在基质侧被用来把一个泛醌还原回半醌，为此从基质取走一个质子。**于是有一个电子是在复合物内部循环、而不是离开的；正是这次回收，使两个电子（相当于一个 NADH）在这里释放四个质子，而不是两个。**",
      src: "CZ pp.143–144, §6.2.4; A p.669, figure 19-11"
    },
    {
      link_en: "and the last machine is where oxygen is finally used, one electron at a time",
      link_cn: "最后一台机器，是氧最终被用掉的地方 —— 一次一个电子",
      en: "In Complex IV the electrons run from cytochrome c to a two-copper centre, to heme a, to a second centre of heme a3 with a copper, and there oxygen binds and is reduced to water. The bookkeeping has two halves that are easy to confuse: four protons are taken out of the matrix and built into the two water molecules as a substrate, which alone raises the pH of the matrix, and four more are pumped across on top of that. **Oxygen is reduced one electron at a time, so a partly reduced oxygen must exist as an intermediate; it normally stays bound until it is water, but 0.2 to 2 per cent escapes as superoxide**, which is why a cell needs superoxide dismutase, glutathione peroxidase and glutathione reductase running on NADPH.",
      cn: "在复合物 IV 里，电子从细胞色素 c 走到一个双铜中心，再到血红素 a，再到由血红素 a3 与一个铜组成的第二个中心 —— 氧就在那里结合并被还原成水。这里的账有两半，很容易混：有四个质子从基质被取走、作为底物砌进那两个水分子里（光这一件事就已经抬高了基质的 pH），此外还有另外四个被泵过膜去。**氧是一次一个电子被还原的，所以必然有「部分还原的氧」作为中间体存在；正常情况下它一直被结合着直到变成水，但仍有 0.2% 到 2% 以超氧化物的形式逃掉 —— 这正是细胞需要超氧化物歧化酶、谷胱甘肽过氧化物酶，以及靠 NADPH 运转的谷胱甘肽还原酶的原因。**",
      src: "CZ pp.144–145, §6.2.4; A pp.670, 674, figures 19-12, 19-18"
    },
    {
      link_en: "and the small fraction that escapes has a source and a chemistry of its own",
      link_cn: "而逃掉的那一小部分，有它自己的来源和化学",
      en: "The electron that escapes to oxygen comes chiefly from ubisemiquinone, the half-reduced ubiquinone radical held at Complexes I and III, which can hand one electron straight to O2: O2 plus one electron gives superoxide. Superoxide is then reduced further to hydrogen peroxide and then to the hydroxyl radical, the most damaging of the three. Superoxide can also attack aconitase — a citric acid cycle enzyme built around a four-iron, four-sulfur centre — and release Fe2+, which then converts hydrogen peroxide into hydroxyl radical by the Fenton reaction. **Leakage rises when electrons enter the chain faster than they leave it for oxygen: a large proton gradient together with a high NADH to NAD+ ratio, a mitochondrion backed up.**",
      cn: "逃逸出去的那个电子，主要来自泛半醌 —— 停在复合物 I 和 III 上的、被还原了一半的泛醌自由基；它可以把一个电子直接交给 O2：O2 加一个电子就得到超氧化物。超氧化物接着被还原成过氧化氢，再变成三者中破坏力最强的羟自由基。超氧化物还能攻击乌头酸酶 —— 柠檬酸循环里那个以四铁四硫中心为核心的酶 —— 把 Fe2+ 释放出来，后者再通过芬顿反应把过氧化氢变成羟自由基。**当电子进入呼吸链的速度快过它们流向氧的速度时，泄漏就会上升：那正是质子梯度很大、同时 NADH 与 NAD+ 之比很高的状态 —— 线粒体堵住了。**",
      src: "A p.674, figure 19-18"
    },
    {
      link_en: "and against all that the cell keeps three enzymes standing in a fixed relay",
      link_cn: "而针对这一切，细胞备着三个酶，按固定顺序接力",
      en: "The defence runs in a fixed order, and each enzyme hands its product to the next. Superoxide dismutase converts two superoxides plus two protons into hydrogen peroxide and O2; glutathione peroxidase then destroys that hydrogen peroxide, oxidising reduced glutathione — a small tripeptide whose cysteine thiol does the reducing — to its disulfide form GSSG; glutathione reductase regenerates the reduced form using NADPH from the pentose phosphate pathway or from nicotinamide nucleotide transhydrogenase. The same reduced glutathione also keeps protein thiol groups from being oxidised. **A low level of reactive oxygen species is not only damage: it also serves as a physiological signal of hypoxia that triggers metabolic adjustment.**",
      cn: "防御是按固定顺序跑的，每个酶把产物交给下一个。超氧化物歧化酶把两个超氧化物加两个质子变成过氧化氢和 O2；谷胱甘肽过氧化物酶随后销毁这份过氧化氢，同时把还原型谷胱甘肽 —— 一个靠半胱氨酸巯基去还原的小三肽 —— 氧化成它的二硫形式 GSSG；谷胱甘肽还原酶再用 NADPH 把还原型再生出来，而这份 NADPH 来自磷酸戊糖途径，或来自烟酰胺核苷酸转氢酶。同样这份还原型谷胱甘肽也保护蛋白质的巯基不被氧化。**低水平的活性氧并不只是损伤：它同时充当一个生理性的缺氧信号，触发代谢上的调整 —— 所以「活性氧等于损伤」这个框架是不完整的。**",
      src: "A p.674, figure 19-18"
    },
    {
      link_en: "so a gradient exists. That it is the only link to ATP synthesis took three experiments to prove",
      link_cn: "梯度是有了。但「它是通向 ATP 合成的唯一联系」，是靠三个实验证明的",
      en: "Peter Mitchell proposed that oxidation and ATP synthesis are joined by nothing but that gradient, with no shared chemical intermediate anywhere — which is why it was hard to believe. Three results settled it. Oligomycin binds the ATP synthase and touches no electron carrier, yet it stops respiration, because protons with no way back build a gradient until making it costs as much as electron transfer releases. Uncouplers do the opposite: 2,4-dinitrophenol and FCCP are weak acids soluble in the membrane charged or not, so they ferry protons back in privately, respiration races and the energy leaves as heat. And the decisive one: **mitochondria equilibrated at pH 9 and moved to pH 7 with valinomycin and no potassium made ATP, with nothing oxidised and nothing reduced** — a gradient assembled by hand was enough.",
      cn: "Peter Mitchell 提出：氧化与 ATP 合成之间除了那个梯度再没有别的联系，全程不存在任何共享的化学中间物 —— 这正是当年难以被接受的地方。三个结果把它定了下来。寡霉素结合的是 ATP 合酶、一个电子载体也不碰，可它连呼吸一起停掉 —— 因为质子无路可回，梯度会一直涨到「建立它的代价」等于「电子传递释放的能量」为止。解偶联剂做的是相反的事：2,4-二硝基苯酚和 FCCP 是带电与不带电时都溶于膜的弱酸，能把质子私自摆渡回去，于是呼吸狂奔，而能量以热的形式离开。**而判决性的那个是：把线粒体在 pH 9 平衡后移入 pH 7、含缬氨霉素而无钾的液体里，它造出了 ATP —— 什么都没被氧化，什么都没被还原；一个手工拼出来的梯度就够了。**",
      src: "A pp.675–677, figures 19-20, 19-21, 19-22"
    },
    {
      link_en: "and the machine at the end of the gradient spends it on something unexpected",
      link_cn: "而梯度尽头那台机器，把它花在了一件出人意料的事情上",
      en: "ATP synthase has a knob in the matrix called F1 and a membrane-embedded part called Fo; strip F1 off and the vesicle leaks protons through the open pore and makes no ATP, put it back and coupling returns, so Fo is the channel and F1 is both the catalytic head and the stopper. Let purified F1 hydrolyse ATP in water made with heavy oxygen and the phosphate comes back carrying three or four labelled atoms instead of one, which can only mean the bond is broken and remade over and over while the phosphate still sits on the enzyme. Forming the bond is therefore not the hard part; **the enzyme binds finished ATP about ten million times more tightly than ADP, so the highest barrier is letting go** — and letting go is exactly what the proton gradient is spent on.",
      cn: "ATP 合酶有一个伸进基质的旋钮叫 F1，还有一段嵌在膜里的部分叫 Fo；把 F1 剥掉，囊泡就从敞开的孔道漏质子、造不出 ATP，把它装回去，偶联就恢复 —— 所以 Fo 是通道，F1 既是催化头也是塞子。让纯化的 F1 在用重氧做的水里水解 ATP，拿回来的磷酸带着三到四个被标记的氧原子，而不是一个；唯一的解释是：磷酸还停在酶上时，那根键被反复地断开又接上。**所以成键根本不是难的那一步：这个酶结合做好的 ATP 比结合 ADP 紧约一千万倍，最高的能垒是「松手」—— 而质子梯度花的正是这笔钱。**",
      src: "CZ pp.145–146, §6.2.4; A pp.677–678, figures 19-23, 19-24"
    },
    {
      link_en: "and the membrane half of that enzyme is built of three parts, one of which never moves",
      link_cn: "而这个酶埋在膜里的那一半由三个部件组成，其中一个从不移动",
      en: "Fo is not a single piece either. Subunit a is the membrane protein holding the two half-channels a proton must pass through, and it is fixed in place; beside it a ring of c subunits turns, carrying the protons round. Two b subunits form a peripheral stalk that runs from subunit a up the outside of the enzyme and clamps the alpha-beta head, so the shaft rotates inside a head that is held still. **Without that stalk the head would simply turn with the shaft — and a motor whose stator turns together with its rotor does no work at all.**",
      cn: "Fo 同样不是一整块。a 亚基是那个膜蛋白，质子必须经过的两条半通道就在它上面，而它是固定不动的；紧挨着它的是一圈 c 亚基组成的环，质子被这个环带着转。另有两个 b 亚基组成一根外周柄，从 a 亚基沿着酶的外侧上去，把 α β 头箍住，于是轴在一个被摁住不动的头里面转。**没有这根柄，头就会跟着轴一起转 —— 而一台定子跟着转子一起转的马达，根本做不了功。**",
      src: "B §6.2.4, pp.145–146; A pp.679–680"
    },
    {
      link_en: "and letting go happens at one site at a time, because the head turns",
      link_cn: "而「松手」一次只在一个位点上发生 —— 因为这个头在转",
      en: "F1 is three alpha and three beta subunits packed like the segments of an orange around a central gamma shaft. The three beta subunits have identical sequences and yet three different shapes at any moment, because the shaft touches one pair at a time: one site binds ADP and phosphate loosely, one holds them tightly where they equilibrate with ATP, one is empty and lets the ATP go, and every 120 degrees of rotation moves each site one shape onward. The rotation was watched directly — **a fluorescent actin filament glued to the shaft turned through a full circle in three discrete 120-degree jumps** — and the number of protons per revolution equals the number of c subunits in the membrane ring, which is 8 in cattle and 10 in yeast, so the proton cost of an ATP is not a universal constant.",
      cn: "F1 由三个 α 和三个 β 亚基像橘瓣一样码在一根中央 γ 轴周围。三个 β 亚基序列完全相同，却在任一时刻呈现三种不同形状，因为那根轴一次只碰一对：一个位点松散地结合 ADP 和磷酸，一个把它们紧紧握住、在那里与 ATP 达成平衡，还有一个是空的、让 ATP 离开；每转过 120 度，每个位点就前进一种形状。**这个转动被直接看到了 —— 粘在轴上的一根荧光肌动蛋白丝转满了一整圈，而且是三次各 120 度的离散跳跃；而转一圈所需的质子数等于膜内 c 环上 c 亚基的个数，牛是 8、酵母是 10，所以「一个 ATP 要花几个质子」并不是一个普适常数。**",
      src: "A pp.678–682, figures 19-25, 19-26, 19-27, 19-28"
    },
    {
      link_en: "which is why the ATP yield per NADH was never going to be a round number",
      link_cn: "所以每个 NADH 的 ATP 产额，本来就不可能是个整数",
      recall_en: "the ring size one step up, and the ten protons the chain pumps per NADH",
      recall_cn: "上一步那个环的大小，以及呼吸链每个 NADH 泵出的十个质子",
      en: "Ten protons leave per NADH oxidised — four at Complex I, four at Complex III, two at Complex IV — and four must come back per ATP, one of them spent not on synthesis but on carrying phosphate in and exchanging ADP for ATP across the membrane. Ten out and four in gives 2.5 ATP per NADH and 1.5 per succinate, which is why the total for glucose is 30 to 32 rather than 38. One more thing moves that total, and it is the tissue rather than the molecule: cytosolic NADH cannot cross the inner membrane, so its electrons come in by a shuttle, and the malate-aspartate shuttle of liver, kidney and heart rebuilds NADH inside the matrix and delivers at Complex I, while the glycerol 3-phosphate shuttle of skeletal muscle and brain delivers past Complex I to ubiquinone — the same molecule is worth about 2.5 ATP in one tissue and about 1.5 in the other. **An older accounting is still printed and still examined — 6 protons per NADH and 4 from succinate, giving 3 ATP and 2** — so quote whichever the question uses, and know that both rest on the same claim: once the two halves are joined by a gradient rather than by a shared molecule, there is no reason for the ratio to be a whole number.",
      cn: "每氧化一个 NADH 有十个质子出去 —— 复合物 I 四个、复合物 III 四个、复合物 IV 两个；而每造一个 ATP 必须有四个回来，其中一个不是花在合成上，而是花在把磷酸带进来、并在膜上以 ADP 换 ATP 的运输上。十出四进，得到每个 NADH 2.5 个 ATP、每个琥珀酸 1.5 个 —— 这就是葡萄糖总账为什么是 30 到 32 而不是 38。还有一件事会改动这个总账，而它取决于组织、不取决于分子：胞质 NADH 过不了内膜，它的电子只能靠穿梭送进去 —— 肝、肾、心用的苹果酸-天冬氨酸穿梭在基质内部重造 NADH、从复合物 I 交货；骨骼肌和脑用的 3-磷酸甘油穿梭则绕过复合物 I、把电子交给泛醌 —— 同一个分子，在一种组织里值约 2.5 个 ATP，在另一种里只值约 1.5 个。**还有一套更早的算法至今仍被印出来、仍被考到：每个 NADH 6 个质子、琥珀酸 4 个，对应 3 个和 2 个 ATP —— 题目用哪一套就答哪一套，同时要知道两套算法立足于同一个论断：既然两半是靠梯度、而不是靠共享分子连起来的，这个比值就没有理由是整数。**",
      src: "CZ pp.144–146, §6.2.4; A pp.682–686, figures 19-31, 19-32"
    },
    {
      link_en: "and the older accounting comes with a picture saying where it thinks the protons leave",
      link_cn: "而那套更早的算法配着一张图，图上标出了它认为质子从哪里出去",
      en: "The older accounting can be read straight off the scheme drawn with it: proton-release arrows towards the cytosolic side appear beneath Complex III, four of them, and beneath Complex I, two — and beneath neither Complex II nor Complex IV. In that drawing only Complexes I and III feed the transmembrane proton gradient at all, which is a weaker claim than the modern one, where Complex IV pumps as well. Divide either pair and the same number falls out: six protons for three ATP, four protons for two ATP. **Two protons per ATP is what other textbooks call the P/O ratio, and it is worth carrying as an orientation figure rather than as a term used here.**",
      cn: "那套更早的算法可以直接从与它配套的示意图上读出来：指向胞质侧的质子释放箭头画在复合物 III 下面，四个；画在复合物 I 下面，两个；而复合物 II 和复合物 IV 下面一个也没有。在那张图里，只有复合物 I 和 III 对跨膜质子梯度有贡献 —— 这比现代的说法弱，后者认为复合物 IV 也泵。把两个比例各自约一下，落出来的是同一个数：六个质子换三个 ATP，四个质子换两个 ATP。**每个 ATP 两个质子，正是别的教科书所说的「P/O 比值」；它值得当作一个方位感上的数字记住，而非这里在用的术语。**",
      src: "B §6.2.4, pp.144–146"
    },
    {
      link_en: "and the same machine turns up in three compartments, which looks like a contradiction",
      link_cn: "同一台机器出现在三个区室里 —— 而这看上去像是自相矛盾",
      en: "A mitochondrion pumps protons out of the matrix with F1 facing in; a chloroplast pumps them into the space enclosed by the thylakoid, which is the flattened membrane sac inside a chloroplast, and its own catalytic head faces the other way, outward. Read as anatomy that is a reversal. Name the two faces by protons instead: the P side is the face protons are pumped to, crowded and more positive; the N side is the face they are pumped from. **In every case the catalytic head sits on the N side, protons flow P to N through the pore**, and ATP appears in the matrix, in the chloroplast stroma or in the bacterial cytosol, which are all N sides — the only thing reversed is which face happened to be called inside.",
      cn: "线粒体把质子泵出基质，而 F1 朝里；叶绿体则把质子泵进类囊体（thylakoid，叶绿体内部那种扁平的膜囊）所围出的腔里，而它那个催化头朝的是相反的方向 —— 朝外。按解剖学来读，这就是一次反转。改用质子来给膜的两面命名：P 侧是质子被泵「到」的那一面，拥挤、电位偏正；N 侧是质子被泵「离开」的那一面。**每一种情形里，催化头都长在 N 侧，质子都经孔道从 P 侧流向 N 侧，而 ATP 都出现在基质、叶绿体基质或细菌胞质里 —— 这些全都是 N 侧。真正被颠倒的，只有「哪一面碰巧被叫做里面」。**",
      src: "A p.717, §20.3, figure 20-22"
    },
    {
      link_en: "and a gradient can be spent on things that have nothing to do with ATP",
      link_cn: "而一个梯度可以花在跟 ATP 毫无关系的事情上",
      en: "Respiration-linked extrusion of protons is spent on more than ATP. It drives transport systems that take up a nutrient such as lactose against its own concentration gradient by symport — the nutrient rides inwards together with a returning proton. It also turns bacterial flagella, the whip-like appendages a bacterium swims with, through what can be called proton turbines: rotary motors driven directly by the transmembrane electrochemical potential rather than by ATP. Muscle, and the flagella and cilia of eukaryotes, run on ATP hydrolysis instead, which is a fundamentally different arrangement. **A gradient therefore pays for chemistry, for transport and for movement alike, and only the first of those three ever needs an ATP synthase.** Because the same arrangement is found in bacteria and in eukaryotes, it seems likely that the chemiosmotic mechanism evolved early, before eukaryotes emerged; that is a hedge and not an established fact.",
      cn: "与呼吸相偶联的质子外排，花掉的不只是造 ATP 这一项。它还驱动转运系统：把乳糖这类营养物逆着自身浓度梯度摄入，方式是与质子同向转运（symport）—— 营养物是搭着一个回流的质子一起进来的。它还让细菌鞭毛（细菌用来游泳的那种鞭状附属结构）转起来，靠的是所谓「质子涡轮」：一种旋转马达，其驱动力直接来自跨膜电化学势，而不是 ATP。而肌肉、以及真核生物的鞭毛与纤毛，用的却是 ATP 水解 —— 这是根本不同的另一套安排。**所以一个质子梯度可以同时买下化学、转运和运动这三样，而其中只有第一样才需要 ATP 合酶。** 由于细菌和真核生物身上都有这同一套安排，化学渗透机制「似乎很可能」很早就演化出来了、早于真核生物的出现 —— 这是一句保留措辞，不是已确立的事实。",
      src: "A p.693, figure 19-41"
    },
    {
      link_en: "and none of this could have existed before one particular moment in the planet's history",
      link_cn: "而这一切，在这颗行星历史上某个特定时刻之前根本不可能存在",
      en: "Aerobic respiration has a date before which it could not exist. Oxygenic photosynthesis — photosynthesis that splits water and releases O2 — appeared on Earth about 2.5 billion years ago; before that the atmosphere was methane, carbon dioxide and nitrogen, the planet held essentially no molecular oxygen, and no ozone layer stood between organisms and solar ultraviolet radiation. Two consequences follow and they run in opposite directions: on the supply side water became a nearly limitless reducing agent for building organic compounds, and on the consumption side mechanisms then evolved that use O2 as the terminal electron acceptor of a highly energetic transfer. **Everything in this chain is downstream of that event — the waste product of one process became the terminal oxidant of the other.**",
      cn: "需氧呼吸有一个「在此之前不可能存在」的时间点。产氧光合作用 —— 即劈开水、放出 O2 的那种光合作用 —— 约在 25 亿年前出现在地球上；在那之前，大气是甲烷、二氧化碳和氮气，这颗行星基本上没有分子氧，也没有臭氧层挡在生物与太阳紫外辐射之间。由此有两个方向相反的后果：在供给一侧，水成了一种近乎无限的还原剂，供建造有机化合物之用；在消耗一侧，随后演化出了把 O2 当作高能电子传递之终端受体的机制。**这条呼吸链上的一切都处在那个事件的下游 —— 一个过程的废物，变成了另一个过程的终端氧化剂。**",
      src: "A p.717",
      see: [{ id: "L-20-2-1", en: "the photosystem that learned to take its electrons from water", cn: "学会从水里取电子的那个光系统" }]
    },
    {
      link_en: "and the same equation covers bacteria that never make any oxygen at all",
      link_cn: "而同一个方程也涵盖那些根本不产氧的细菌",
      en: "Not every photosynthetic bacterium splits water. Many are obligate anaerobes, which cannot tolerate O2 at all, and must use some other electron donor: green sulfur bacteria use hydrogen sulfide and deposit elemental sulfur where a plant would release O2, oxidising that sulfur onward to sulfate, while others use an organic compound such as lactate and leave pyruvate behind. Written separately these look like different reactions; written generally they are one — 2 H2D + CO2 gives (CH2O) + H2O + 2 D, in which H2D is the electron and hydrogen donor and D is its oxidised form. **Water is the hardest donor rather than the original one, adopted late: the bacteria that first developed photosynthesis most likely used hydrogen sulfide.**",
      cn: "并非每一种光合细菌都劈水。许多是专性厌氧菌 —— 即完全不能耐受 O2 —— 因而必须用别的电子供体：绿硫细菌用硫化氢，在植物释放 O2 的地方它们析出单质硫，随后再把硫氧化成硫酸盐；另一些则用乳酸这类有机化合物，留下丙酮酸。分开写，这些像是不同的反应；写成通式，它们就是同一个 —— 2 H2D + CO2 → (CH2O) + H2O + 2 D，其中 H2D 是电子（和氢）的供体，D 是它的氧化形式。**水并非最初的供体，而是最难的那一个、后来才被采用的：最早发展出光合能力的细菌，最可能用的是硫化氢。**",
      src: "A pp.717–718"
    },
    {
      link_en: "and the same enzyme in four kinds of cell carries a claim stated harder than the one beside it",
      link_cn: "同一个酶出现在四类细胞里，撑起一个比它旁边那个说得更硬的论断",
      en: "How firmly a claim is stated is itself information. The structure and mechanism of ATP synthase are described as strongly conserved throughout evolution, and the enzymes of bacteria, cyanobacteria, mitochondria and chloroplasts are said to share a common evolutionary precursor and a common enzymatic mechanism — stated flatly, with no hedge. The endosymbiotic origin of chloroplasts, by contrast, is called a now widely accepted hypothesis, which is deliberately weaker. **For the enzyme there are structures, subunit compositions and a shared mechanism to compare directly; for the origin there is only a set of consistent observations.** One number belongs here too, and it is a measurement rather than a derivation: eight photons drive the production of one O2 and the making of three ATP.",
      cn: "一个论断被说得有多硬，本身就是信息。ATP 合酶的结构和机制被描述为「在整个演化过程中被强烈地保守下来」；细菌、蓝细菌、线粒体和叶绿体的 ATP 合酶被说成「共享一个共同的演化前体和一套共同的酶学机制」—— 这是平铺直叙地断言的，没有任何保留。相比之下，叶绿体的内共生起源被称作「一个如今被广泛接受的假说」，措辞刻意更弱。**对这个酶，有结构、有亚基组成、有一套可以直接比较的共同机制；对那个起源，只有一组彼此一致的观察。** 还有一个数字也属于这里，而且它是测量值、不是推导：八个光子驱动产生一个 O2，并造出三个 ATP。",
      src: "A pp.718–719"
    },
    {
      link_en: "and this whole apparatus is the one thing a second genome inside the cell encodes",
      link_cn: "而这整套装置，正是细胞里第二个基因组唯一编码的东西",
      en: "The mitochondrion is the only compartment of a human cell carrying its own DNA: a circular molecule of 16,569 base pairs with 37 genes, of which only 13 encode a protein and the other 24 encode the RNA parts of a translation apparatus belonging to the organelle alone. Against those 13, about 1,200 mitochondrial proteins are encoded in the nucleus and imported. **All 13 are subunits of the respiratory chain and the ATP synthase** — Complex II, the one respiratory complex that pumps no protons, is also the one this genome does not touch — so a mutation here has nothing else it could damage, and mitochondrial gene defects appear as failures of electron transfer and essentially nothing else.",
      cn: "线粒体是人体细胞里唯一自带 DNA 的隔室：一个 16,569 碱基对的环状分子，携带 37 个基因，其中只有 13 个编码蛋白，另外 24 个编码的是只属于这个细胞器的一套翻译装置的 RNA 部件。与这 13 个相对的是：约 1,200 个线粒体蛋白由细胞核编码、合成后被运进来。**这 13 个全是呼吸链和 ATP 合酶的亚基 —— 而复合物 II（呼吸链里唯一不泵质子的那个）恰好也是这个基因组碰不到的那个 —— 所以这里的突变没有别的东西可破坏，线粒体基因缺陷几乎只表现为电子传递的失灵。**",
      src: "A p.692, table 19-6"
    },
    {
      link_en: "and two genomes inside one cell are the evidence for where the organelle came from",
      link_cn: "而「一个细胞里有两个基因组」这件事，正是这个细胞器来历的证据",
      en: "Three facts stand behind one theory: a mitochondrion has its own DNA, its own ribosomes and its own tRNAs. Together they support the endosymbiotic origin of mitochondria — the theory that the first organisms capable of aerobic metabolism were bacteria, and that a primitive eukaryote living anaerobically by fermentation acquired oxidative phosphorylation when it took such bacteria into its cytosol and kept them. Over a long evolution many bacterial genes moved into the host nucleus, and the endosymbiont became an organelle. **Gene migration explains the ratio of 13 genes to about 1,200: the genome is small because most of it left, not because it was ever this small.** A hypothesis of that kind must be paid for with a prediction: it presumes that early free-living bacteria already carried the machinery for oxidative phosphorylation, so modern bacteria should have closely similar respiratory chains — and they do, down to F1Fo complexes in the plasma membrane of E. coli.",
      cn: "有三个事实撑着一个理论：线粒体有自己的 DNA、自己的核糖体、自己的 tRNA。它们合起来支持线粒体的内共生起源 —— 这个理论主张：最早能进行有氧代谢的生物是细菌；而原本靠发酵过厌氧生活的原始真核生物，是在把这类细菌收进胞质并留下它们之后，才获得了氧化磷酸化。经过漫长演化，许多细菌基因迁入了宿主的细胞核，内共生体就变成了一个细胞器。**基因迁移正是「13 个基因对约 1,200 个」这个比例的解释：基因组之所以小，是因为大部分搬走了，而不是它本来就这么小。** 这样一个假说必须用一个预言来偿付：它预设早期自由生活的细菌已经带着氧化磷酸化的机器，那么现代细菌就应当有高度相似的呼吸链 —— 事实确实如此，一直到 E. coli 质膜上的 F1Fo 复合体。",
      src: "A pp.692–693"
    },
    {
      link_en: "and a genome carried in the cytoplasm is inherited in a way a nuclear one never is",
      link_cn: "而一个待在胞质里的基因组，其遗传方式与核基因组截然不同",
      en: "Mitochondrial inheritance is maternal for two reasons, and the second is the one usually missed. The arithmetic comes first: an egg is large and holds 100,000 to 1,000,000 mitochondria, while a sperm is much smaller and holds perhaps 100 to 1,000, so on numbers alone the paternal contribution is at most about one per cent and possibly one in ten thousand. On top of that dilution there is an active mechanism — just after fertilisation, maternal phagosomes, which are membrane vesicles that engulf and digest material inside a cell, migrate to the site of sperm entry, engulf the sperm mitochondria and degrade them. **Paternal mitochondrial DNA is not merely diluted, it is hunted down, so an affected mother can transmit to all her children and an affected father to none.** That asymmetry alone is enough to separate a mitochondrial pedigree from an autosomal or an X-linked one, before any sequencing is done.",
      cn: "线粒体的遗传是母系的，原因有两条，而第二条通常被忽略。先说算术：卵子很大，含 10 万到 100 万个线粒体；精子小得多，大约只有 100 到 1,000 个 —— 光凭数字，父源的贡献至多约百分之一，也可能只有万分之一。在这种稀释之上还有一套主动机制 —— 受精刚发生之后，母源的吞噬体（一种在细胞内部把物质吞入并消化掉的膜性小泡）迁移到精子进入的位点，把精子的线粒体吞进去并降解掉。**父源的线粒体 DNA 不只是被稀释，而是被追杀；所以患病的母亲可以传给她所有的子女，患病的父亲一个也不传。** 光凭这一条不对称，在做任何测序之前就足以把线粒体系谱与常染色体系谱或 X 连锁系谱区分开。",
      src: "A p.694"
    },
    {
      link_en: "and a mutation in this genome exists as a proportion rather than as a yes or a no",
      link_cn: "而这个基因组上的突变，是以一个比例存在的，不是「有」或「没有」",
      en: "A nuclear gene comes in two copies, so a mutation is either present or absent. A cell carries hundreds or thousands of mitochondria with about five genomes each, so a mutation is present as a fraction instead. Follow how that arises: damage to one mitochondrial genome in a germ cell replicates along with the healthy ones, the progeny are distributed at random to daughter cells, mature eggs therefore end up with different proportions of defective mitochondria, and after fertilisation and many divisions the somatic cells differ in their proportion of mutant mitochondria. That state is heteroplasmy, defined against homoplasmy, in which every mitochondrial genome in every cell is the same. **Individuals with the same mutation can have symptoms of very different severity: here the dose and its distribution across tissues predict the phenotype, and the genotype does not.**",
      cn: "一个核基因有两份拷贝，所以突变要么在、要么不在。而一个细胞带着几百到几千个线粒体，每个又有约五份基因组，于是突变是以「一个比例」的形式存在的。看它是怎么来的：生殖细胞里某一份线粒体基因组受了损，它照样与健康的一起复制，其后代在分裂中被随机分配到子细胞里，于是成熟的卵细胞各自含有不同比例的缺陷线粒体；受精之后再经过许多次分裂，体细胞在突变型线粒体的比例上也就彼此不同。这种状态叫异质性（heteroplasmy），它是相对同质性（homoplasmy）定义的 —— 后者指每个细胞里的每一份线粒体基因组都相同。**带着同一个突变的不同个体，症状的严重程度可以差得很远：在这里预测表型的是剂量及其在组织间的分布，基因型并不预测表型。**",
      src: "A p.694, figure 19-42"
    },
    {
      link_en: "and how common these diseases are, and which tissues show them, both have numbers",
      link_cn: "这类疾病有多常见、又在哪些组织上表现出来，两者都有数字",
      en: "About 1 in 5,000 people carry a disease-causing mutation in a mitochondrial protein that lowers the cell's capacity to make ATP, and a growing number of these diseases have been traced to genes of the mitochondrion itself, the rest lying in the nucleus — the wording is careful and worth copying. Which tissues declare themselves? Neurons, the myocytes of skeletal and of cardiac muscle, and the β cells of the pancreas are less able than other cells to tolerate lowered ATP production. **The tissue list is derivable and not arbitrary: every entry names a cell that cannot ride out a shortfall, because it works without rest or stores no fuel.**",
      cn: "约每 5,000 人中有 1 人携带一个致病突变，它落在某个线粒体蛋白上，使细胞产生 ATP 的能力下降；而这些疾病中被追溯到线粒体自身基因的数目正在增加，其余的则落在细胞核里 —— 措辞上的这个区别很谨慎，值得照抄。哪些组织会先出声？神经元、骨骼肌与心肌的肌细胞、以及胰腺的 β 细胞，比其他细胞更不能耐受 ATP 产量的下降。**这张组织清单是推得出来的，并非随便列的：上面每一项都是一种扛不住供应短缺的细胞 —— 因为它要么不停地工作，要么储不了燃料。**",
      src: "A pp.694–695"
    },
    {
      link_en: "and one group of diseases is named after exactly the two tissues that list puts first",
      link_cn: "而有一组疾病，名字里写的恰好就是那张清单上排在最前的两个组织",
      en: "The mitochondrial encephalomyopathies are a group of genetic diseases affecting primarily the brain and skeletal muscle, and they are invariably inherited from the mother, because a developing embryo takes all its mitochondria from the egg. Encephalomyopathy writes the two tissues into the diagnosis itself — brain and skeletal muscle, the top two entries on the list of tissues least able to tolerate a fall in ATP — so the name of the group is a bioenergetic prediction. **Invariably is a stronger word than usually or predominantly: a pedigree in which any affected man has affected children argues against a mitochondrial gene, whatever the biochemistry shows.**",
      cn: "线粒体脑肌病是一组主要累及脑和骨骼肌的遗传病，而且无一例外地由母亲遗传而来 —— 因为发育中的胚胎，其全部线粒体都来自卵子。「脑肌病」这个名字把两个组织直接写进了诊断里 —— 脑和骨骼肌，正是「最不能耐受 ATP 下降」那张清单上排在最前的两项 —— 所以这个病组的名字本身就是一个生物能学上的预言。**「无一例外」比「通常」或「多数情况下」都更强：一份系谱里只要有任何一个患病男性把病传给了子女，就应当反对线粒体基因的解释，不论生化上看起来多像。**",
      src: "A p.695"
    },
    {
      link_en: "and one disease breaks the habit of reading one gene as one protein",
      link_cn: "而有一种病打破了「一个基因对应一个蛋白」的习惯读法",
      en: "Myoclonic epilepsy with ragged-red fibers, MERRF, is caused by a mutation in the mitochondrial gene encoding a tRNA specific for lysine. Now count the damage. Of the 37 mitochondrial genes only 13 encode a protein and the rest are the translation apparatus, so a lesion in one tRNA gene does not disable one protein: it degrades production of several of the proteins whose synthesis needs mitochondrial tRNAs, an unpredictable subset of all 13 subunits at once, across several complexes. **A single point mutation in a gene that encodes no protein is therefore a maker of syndromes rather than the cause of one specific enzyme deficiency.** The phenotype is uncontrollable muscular jerking together with skeletal muscle fibres holding abnormally shaped mitochondria that sometimes contain paracrystalline structures — the ragged red fibres of the name, visible in a muscle biopsy. Other mutations in mitochondrial genes are held responsible for the progressive weakness of mitochondrial myopathy and for the enlarged, deteriorating heart muscle of hypertrophic cardiomyopathy.",
      cn: "肌阵挛性癫痫伴破碎红纤维（MERRF）是由线粒体上那个编码赖氨酸专一 tRNA 的基因发生突变引起的。现在数一数它损坏了什么。37 个线粒体基因里只有 13 个编码蛋白，其余的是翻译装置；所以一个 tRNA 基因上的病变并不只让一个蛋白失效：它削弱的是若干种「合成时需要线粒体 tRNA」的蛋白的生产 —— 一次同时波及全部 13 个亚基中一个无法预料的子集，横跨好几个复合物。**一个落在「不编码蛋白的基因」上的单点突变，因此造出的是一个综合征，而非某一个酶的缺乏。** 它的表型是无法控制的肌肉抽动，加上骨骼肌纤维里那些形态异常、有时含有类晶体结构的线粒体 —— 这就是病名里的「破碎红纤维」，在肌肉活检里看得见。线粒体基因上的另一些突变，则被认为要为线粒体肌病的进行性无力、以及肥厚型心肌病中增大而衰变的心肌负责。",
      src: "A p.695, figure 19-43"
    },
    {
      link_en: "and knowing the inheritance rule makes one therapy possible and one assumption wrong",
      link_cn: "而懂了那条遗传规律，就有了一项疗法，也戳破了一个想当然",
      en: "Two corrections close the disease discussion. First, a therapy that follows from maternal inheritance: if a prospective mother is known to carry a pathogenic mitochondrial gene, mitochondrial donation can circumvent its passage to her offspring — her nuclear genes are transplanted under a microscope into an enucleated ovum from a donor with healthy mitochondria, the ovum is fertilised in vitro, and the embryo is transferred to her uterus. Such three-parent baby procedures were approved in the United Kingdom in 2015 and raise ethical issues that are being vigorously debated. **The procedure is possible only because the two genomes are physically separable, one held in the nucleus and one out in the cytoplasm.** Second, mitochondrial disease can also come from a mutation in any of the roughly 1,200 nuclear genes encoding mitochondrial proteins: a mutation in COX6B1, a nuclear-encoded protein of Complex IV, gives severe defects of brain development and thickened walls of the heart muscle, and other nuclear genes encode proteins needed to assemble the complexes at all. Mitochondrial disease therefore names which organelle fails and not which genome carries the mutation — and a donation that replaces only the mitochondria does nothing for the nuclear-gene forms.",
      cn: "疾病部分以两处纠正收尾。第一，是母系遗传带来的一项治疗：如果已知一位准母亲携带致病的线粒体基因，线粒体置换可以绕开它向后代的传递 —— 把她的核基因在显微操作下移植进一枚来自「线粒体健康的供体」的去核卵，随后体外受精，再把胚胎植入她的子宫。这类「三亲婴儿」操作于 2015 年在英国获批，并引发了至今仍被激烈争论的伦理问题。**这个操作之所以行得通，全在于两个基因组在物理上是可分开的：一个待在细胞核里，一个待在胞质里。** 第二，线粒体病同样可以来自那约 1,200 个编码线粒体蛋白的核基因中任何一个的突变：Complex IV 里由核编码的蛋白 COX6B1 上的突变，会造成严重的脑发育缺陷和心肌壁增厚；另一些核基因编码的则是把复合物装配起来所必需的蛋白。所以「线粒体病」说的是哪个细胞器失灵，而不是突变落在哪个基因组上 —— 而只置换线粒体的那项技术，对核基因型的那些一点用也没有。",
      src: "A pp.695–696"
    },
    {
      link_en: "and in one cell type this whole bioenergetics turns into an endocrine signal",
      link_cn: "而在某一种细胞里，这一整套生物能学变成了一个内分泌信号",
      en: "Insulin is produced and exported by the β cells of the pancreas, and that export hinges on the ATP concentration inside them. The circuit runs in four steps: when blood glucose is high the β cell takes up glucose and oxidises it by glycolysis and the citric acid cycle, raising the ATP concentration above a threshold; above that threshold an ATP-gated K+ channel in the plasma membrane closes; the membrane depolarises, which opens voltage-gated Ca2+ channels; and the Ca2+ flowing in triggers exocytosis of the insulin granules. **In this one cell type ATP is the messenger reporting the glucose concentration rather than the currency paying for work, so a cell that cannot raise it cannot report a meal.** A β cell with a defect in any aspect of oxidative phosphorylation may therefore fail to raise the ATP concentration past the threshold, and the resulting failure of insulin release effectively produces diabetes.",
      cn: "胰岛素由胰腺的 β 细胞产生并输出，而这份输出取决于细胞内的 ATP 浓度。这条回路分四步：血糖升高时，β 细胞摄取葡萄糖，经糖酵解和柠檬酸循环把它氧化，使 ATP 浓度升过一个阈值；一旦越过阈值，质膜上一个 ATP 门控的 K+ 通道就关闭；膜随之去极化，电压门控的 Ca2+ 通道打开；流入的 Ca2+ 触发胰岛素颗粒的胞吐。**在这一种细胞里，ATP 扮演的是「把葡萄糖浓度报告出去的信使」，而非「支付做功的货币」—— 所以一个升不起 ATP 的细胞，就是一个报不了餐的细胞。** 于是，在氧化磷酸化任何环节上有缺陷的 β 细胞，可能无法把 ATP 浓度升过那个阈值；由此造成的胰岛素释放失败，实际上就产生了糖尿病。",
      src: "A pp.695–696, figure 19-44",
      see: [{ id: "L-23-5-1", en: "diabetes itself, and what a failure of insulin release does to the body", cn: "糖尿病本身，以及胰岛素释放失败会给全身带来什么" }]
    },
    {
      link_en: "and three unrelated lesions arrive at that one threshold",
      link_cn: "而三种彼此无关的病变，抵达的是同一个阈值",
      en: "Three different molecular lesions reach that same threshold. A defect in the gene for glucokinase — the hexokinase IV isozyme of the β cell — blunts the glucose sensor itself and causes the rare MODY2, maturity onset diabetes of the young. A mutation in the mitochondrial tRNA-Lys or tRNA-Leu gene instead limits expression of the electron transfer components encoded in mitochondrial DNA, and type 2 diabetes mellitus is common among people carrying such defects, although those cases are a very small fraction of all diabetes. A defect in nicotinamide nucleotide transhydrogenase, part of the mitochondrial defence against reactive oxygen species, lets that damage accumulate, which slows ATP production and blocks insulin release in its turn. **One clinical endpoint is reached by a blunted sensor, by a chain that cannot be expressed, and by a failed antioxidant defence alike.**",
      cn: "有三种不同的分子病变抵达同一个阈值。第一，葡萄糖激酶（glucokinase）基因上的缺陷 —— 它就是 β 细胞里的 hexokinase IV 同工酶 —— 会让葡萄糖感受器本身变钝，造成罕见的 MODY2，即青少年发病的成人型糖尿病。第二，线粒体 tRNA-Lys 或 tRNA-Leu 基因上的突变，则通过限制线粒体 DNA 所编码的电子传递组分的表达来削弱 ATP 生产；2 型糖尿病在携带这类缺陷的个体中很常见 —— 尽管这类病例只占全部糖尿病中极小的一部分。第三，烟酰胺核苷酸转氢酶（线粒体抗活性氧防御的一部分）上的缺陷，会让损伤累积起来，从而减慢 ATP 生产、并进而阻断胰岛素释放。**同一个临床终点，可以由变钝的感受器抵达，也可以由表达不出来的呼吸链抵达，还可以由失守的抗氧化防御抵达。**",
      src: "A pp.695–696"
    },
    {
      link_en: "and the last two claims here are weaker than everything before them, on purpose",
      link_cn: "而这里最后两个论断，是刻意比前面所有内容都弱的",
      en: "Two claims at the end are deliberately weak and should be repeated at their own strength. One theory of ageing holds that the gradual accumulation of such defects is the primary cause of many symptoms of ageing, among them the progressive weakening of skeletal and heart muscle; the hedge is one theory, and the symptoms chosen are exactly the tissues that tolerate a fall in ATP worst, so the theory is internally consistent with the diseases — which is an argument for it and not evidence that ageing works this way. Damage caused by reactive oxygen species, including damage to mitochondrial DNA, may also underlie other human diseases, and there is some evidence for its involvement in Alzheimer, Parkinson and Huntington diseases and in heart failure, as well as in ageing. **Saying that mitochondrial damage causes Alzheimer disease overstates what this material establishes: the words used are may and some evidence, not causes.**",
      cn: "结尾处有两个论断是刻意写弱的，复述时应当保持它们各自的强度。一种关于衰老的理论认为，这类缺陷的逐渐累积是衰老许多症状的主要原因，其中包括骨骼肌与心肌的进行性无力；请注意保留措辞「一种理论」，也请注意它举的症状恰好就是最扛不住 ATP 下降的那些组织 —— 这种与疾病谱的自洽是支持它的论据，而非「衰老就是这样造成的」的证据。活性氧造成的损伤（包括对线粒体 DNA 的损伤）「可能」也是另一些人类疾病的基础，并且有「一些证据」表明它参与了阿尔茨海默病、帕金森病、亨廷顿病以及心力衰竭，衰老亦然。**说「线粒体损伤导致阿尔茨海默病」就说过了头：这里用的词是「可能」和「一些证据」，而非「导致」。**",
      src: "A pp.694, 696"
    }
  ],
  terms: [
    { en: "vectorial character", cn: "矢量特性",
      def_en: "The directionality in three-dimensional space that a reaction acquires when its enzyme is built into a membrane rather than floating free. It is what allows the free energy of a redox reaction to be converted into osmotic work — carrying a proton against its own gradient — and so links the cell oxidoreduction and phosphorylation systems.",
      def_cn: "当催化某反应的酶是嵌在膜里、而不是自由漂浮时，这个反应所获得的三维空间方向性。正是它使氧化还原反应的自由能得以转换成渗透功（逆着质子自身的梯度把它搬过去），从而把细胞的氧化还原系统与磷酸化系统连接起来。" },
    { en: "reducing equivalent", cn: "还原当量",
      def_en: "One electron worth of reducing power, in whatever form it travels — a bare electron, a hydrogen atom, or a hydride ion carrying two at once. Carriers of the chain alternate between those that move a proton with each electron (NAD+, FMN, ubiquinone) and those that move the electron alone (iron-sulfur proteins, cytochromes).",
      def_cn: "相当于一个电子的还原力，不论它以何种形式移动 —— 裸电子、氢原子，或一次带两个电子的氢负离子。链上的载体在「每搬一个电子就顺带搬一个质子」（NAD+、FMN、泛醌）与「只搬电子」（铁硫蛋白、细胞色素）之间交替。" },
    { en: "reduction potential is set by the protein", cn: "还原电位由蛋白决定",
      def_en: "The same heme or the same kind of iron-sulfur cluster sits at very different potentials in different proteins — iron-sulfur centres span minus 0.65 to plus 0.45 volts. That is how a long staircase of finely spaced steps is built out of a handful of chemical parts, and it is why the height of each step is a property of the protein around the metal and not of the metal.",
      def_cn: "同一种血红素、或同一类铁硫簇，在不同蛋白里坐在差别很大的电位上 —— 铁硫中心的跨度从 −0.65 V 到 +0.45 V。细胞正是这样用寥寥几种化学零件搭出一段间距细密的长阶梯；每一级台阶有多高，是金属周围那圈蛋白的性质，而不是金属本身的性质。" },
    { en: "the five complexes and their systematic names", cn: "五个复合物及其系统名",
      def_en: "Complex I is NADH:ubiquinone oxidoreductase, Complex II succinate:ubiquinone oxidoreductase, Complex III ubiquinol:cytochrome c oxidoreductase, Complex IV ferrocytochrome c:oxygen oxidoreductase or cytochrome oxidase. Complex V is not an oxidoreductase but the phosphorylation complex, the ATP synthase. The mobile components belonging to no complex are NADH, ubiquinol and cytochrome c.",
      def_cn: "复合物 I 是 NADH:泛醌氧化还原酶，II 是琥珀酸:泛醌氧化还原酶，III 是泛醇:细胞色素 c 氧化还原酶，IV 是铁细胞色素 c:氧氧化还原酶（细胞色素氧化酶）。复合物 V 不是氧化还原酶，而是磷酸化复合物，即 ATP 合酶。不属于任何复合物的可移动组分是 NADH、泛醇和细胞色素 c。" },
    { en: "the Q cycle", cn: "Q 循环",
      def_en: "How Complex III joins a two-electron carrier to a one-electron one. Ubiquinol is oxidised on the intermembrane side, one electron going through cytochrome c1 to cytochrome c while the other travels bT to bK and regenerates a semiquinone on the matrix side. Because one electron circulates inside the complex, two electrons release four protons here rather than two.",
      def_cn: "复合物 III 把双电子载体与单电子载体接上的办法。泛醇在膜间隙侧被氧化，一个电子经细胞色素 c1 交给细胞色素 c，另一个由 bT 走到 bK、在基质侧把泛醌还原回半醌。正因为有一个电子在复合物内部循环，这里每两个电子释放的是四个质子，而不是两个。" },
    { en: "inhibitor versus uncoupler", cn: "抑制剂与解偶联剂之别",
      def_en: "An inhibitor stops electrons moving — rotenone and amytal at Complex I, antimycin A and myxothiazol at Complex III, cyanide and carbon monoxide at Complex IV, oligomycin at the ATP synthase. An uncoupler lets electrons keep flowing but gives protons a private way back that bypasses the synthase, so respiration races and the energy leaves as heat: 2,4-dinitrophenol and FCCP in the laboratory, the protein UCP1 in brown fat.",
      def_cn: "抑制剂让电子走不动 —— 鱼藤酮和异戊巴比妥作用于复合物 I，抗霉素 A 与 myxothiazol 作用于复合物 III，氰化物与一氧化碳作用于复合物 IV，寡霉素作用于 ATP 合酶。解偶联剂则让电子照常流动，却给质子开一条绕过合酶的私门，于是呼吸狂奔、能量以热离开：实验室里是 2,4-二硝基苯酚和 FCCP，棕色脂肪里是 UCP1 蛋白。" },
    { en: "binding-change mechanism", cn: "结合变化机制",
      def_en: "ATP forms on the enzyme surface with a free-energy change near zero, because the enzyme binds ATP roughly ten million times more tightly than ADP. The highest barrier is therefore releasing the finished ATP, and that release is what the proton-motive force pays for — not the making of the bond.",
      def_cn: "ATP 在酶表面上生成时自由能变化接近于零，因为这个酶结合 ATP 比结合 ADP 紧约一千万倍。于是最高的能垒变成了「把做好的 ATP 放开」，而质子动力势买的正是这次释放，而不是那根键的形成。" },
    { en: "P side and N side", cn: "P 侧与 N 侧",
      def_en: "Naming the two faces of an energy-transducing membrane by proton concentration instead of by anatomy: P is the face protons are pumped to, N the face they come from. The catalytic head always sits on the N side and ATP always appears there — in the mitochondrial matrix, the chloroplast stroma or the bacterial cytosol — so the apparent reversal between mitochondria and chloroplasts is a naming problem only.",
      def_cn: "按质子浓度、而不是按解剖学给能量转换膜的两面命名：P 侧是质子被泵到的那一面，N 侧是质子被泵离开的那一面。催化头永远长在 N 侧，ATP 也永远出现在那里 —— 线粒体基质、叶绿体基质或细菌胞质 —— 所以线粒体与叶绿体之间那个看似的反转，只是命名问题。" },
    { en: "the proton-to-ATP arithmetic", cn: "质子与 ATP 的算账",
      def_en: "Ten protons are pumped per NADH (four at Complex I, four at Complex III, two at Complex IV) and four return per ATP, one of them spent on transport, which gives 2.5 ATP per NADH and 1.5 per succinate and a glucose total of 30 to 32. An older accounting gives 6 and 4 protons and 3 and 2 ATP. Neither ratio has to be a whole number, because the two halves are joined by a gradient rather than by a shared molecule.",
      def_cn: "每个 NADH 泵出十个质子（复合物 I 四个、III 四个、IV 两个），每造一个 ATP 回来四个，其中一个花在运输上，于是每个 NADH 得 2.5 个 ATP、每个琥珀酸 1.5 个，葡萄糖总账 30 到 32。另有一套更早的算法给出 6 个和 4 个质子、3 个和 2 个 ATP。两个比值都没有必要是整数，因为两半是靠梯度、而不是靠共享分子连起来的。" },
    { en: "Fo, the membrane sector", cn: "Fo，膜内那一段",
      def_en: "The membrane-embedded portion of ATP synthase: subunit a, which holds the two half-channels a proton crosses by, the ring of c subunits that turns beside it, and the peripheral stalk of two b subunits that clamps the catalytic head still. Proton passage through it changes the conformation of the active sites in the knob above.",
      def_cn: "ATP 合酶嵌在膜里的那一部分：a 亚基（质子所经的两条半通道就在它上面）、紧挨着它旋转的 c 亚基环，以及由两个 b 亚基组成、把催化头箍住不动的外周柄。质子从这里通过，会改变上方旋钮里活性位点的构象。" },
    { en: "reactive oxygen species", cn: "活性氧",
      def_en: "Superoxide, hydrogen peroxide and the hydroxyl radical, generated mainly at Complexes I and III when a partly reduced ubisemiquinone hands an electron straight to O2. Under normal conditions 0.2 to 2 per cent of respired oxygen ends up as superoxide, which is why the defence enzymes run continuously. Not purely destructive: a low level of them is a physiological signal of hypoxia.",
      def_cn: "超氧化物、过氧化氢和羟自由基；主要在复合物 I 和 III 处、由部分还原的泛半醌把一个电子直接交给 O2 而生成。正常情况下，呼吸消耗的氧中有 0.2% 到 2% 最终变成超氧化物 —— 这就是防御酶必须一直开着的原因。它们也不是纯粹有害的：低水平的活性氧是一个生理性的缺氧信号。" },
    { en: "the P/O ratio", cn: "P/O 比值",
      def_en: "Two protons per ATP, the number both accountings of the older scheme reduce to: six protons for three ATP and four protons for two ATP both divide to two. The name belongs to other textbooks rather than to the material here, and it is worth carrying as an orientation figure, not as a term to quote back.",
      def_cn: "每个 ATP 两个质子 —— 那套更早的方案里两笔账约下来都是这个数：六个质子换三个 ATP、四个质子换两个 ATP，都是二。这个名字属于别的教科书、不属于这里的材料；它值得当作一个方位感上的数字记住，而不是当作可以引用的术语。" },
    { en: "the general equation of photosynthesis", cn: "光合作用的通式",
      def_en: "2 H2D + CO2 gives (CH2O) + H2O + 2 D, in which H2D is an electron and hydrogen donor and D its oxidised form. H2D may be water, hydrogen sulfide, lactate or another organic compound depending on the species, so plant and bacterial photosynthesis are one reaction with different donors — green sulfur bacteria deposit elemental sulfur where plants release O2. Water is the hardest donor, adopted late, which is why splitting it needs four photons and a manganese cluster while hydrogen sulfide needs neither.",
      def_cn: "2 H2D + CO2 → (CH2O) + H2O + 2 D，其中 H2D 是电子（和氢）的供体，D 是它的氧化形式。H2D 可以是水、硫化氢、乳酸或另一种有机化合物，取决于物种 —— 所以植物与细菌的光合作用是同一个反应、只是供体不同：绿硫细菌析出单质硫，而植物放出 O2。水是最难的那个供体、后来才被采用 —— 这也正是为什么劈开水要四个光子和一个锰簇，而氧化硫化氢两样都不需要。" },
    { en: "the arrival of oxygenic photosynthesis", cn: "产氧光合作用的到来",
      def_en: "The event about 2.5 billion years ago that made aerobic respiration possible at all. Before it the atmosphere was methane, carbon dioxide and nitrogen, with essentially no molecular oxygen and no ozone layer against solar ultraviolet. Two consequences run in opposite directions: water became a nearly limitless reducing agent for biosynthesis, and mechanisms then evolved to use O2 as a terminal electron acceptor — the waste product of one process became the terminal oxidant of the other.",
      def_cn: "约 25 亿年前的那个事件，它才使需氧呼吸成为可能。在它之前，大气是甲烷、二氧化碳和氮气，基本没有分子氧，也没有臭氧层去挡太阳紫外。由此有两个方向相反的后果：水成了一种近乎无限的还原剂供生物合成使用；而随后演化出了把 O2 当作终端电子受体的机制 —— 一个过程的废物，成了另一个过程的终端氧化剂。" },
    { en: "the endosymbiotic origin of mitochondria", cn: "线粒体的内共生起源",
      def_en: "The theory that mitochondria descend from aerobic bacteria taken into a primitive fermenting eukaryote, which thereby acquired oxidative phosphorylation; over evolutionary time many bacterial genes moved into the host nucleus and the endosymbiont became an organelle. Its evidence is that a mitochondrion has its own DNA, ribosomes and tRNAs; its testable prediction is that modern bacteria should have closely similar respiratory chains, which they do, down to F1Fo complexes in the plasma membrane of E. coli. The gene migration also explains why only 13 protein genes remain.",
      def_cn: "该理论认为线粒体源自被原始的、行发酵的真核生物吞入的需氧细菌，后者由此获得了氧化磷酸化；在演化过程中许多细菌基因迁入宿主细胞核，内共生体变成了一个细胞器。它的证据是线粒体有自己的 DNA、核糖体和 tRNA；它可检验的预言是现代细菌应当有高度相似的呼吸链 —— 事实确实如此，一直到 E. coli 质膜上的 F1Fo 复合体。那次基因迁移同时也解释了为什么只剩下 13 个蛋白基因。" },
    { en: "maternal inheritance", cn: "母系遗传",
      def_en: "Transmission of mitochondria, and therefore of mitochondrial DNA, from the mother alone. Two mechanisms combine: an egg holds 100,000 to 1,000,000 mitochondria while a sperm holds perhaps 100 to 1,000, and on top of that dilution maternal phagosomes migrate to the site of sperm entry just after fertilisation, engulf the sperm mitochondria and degrade them. The diagnostic consequence is a pedigree in which an affected mother may transmit to all her children and an affected father to none.",
      def_cn: "线粒体、因而线粒体 DNA，只由母亲一方传递。两套机制叠加：卵子含 10 万到 100 万个线粒体，而精子大约只有 100 到 1,000 个；在这种稀释之上，受精刚发生之后母源的吞噬体还会迁移到精子进入的位点，把精子线粒体吞入并降解。诊断上的后果是这样一种系谱：患病的母亲可能传给她所有的子女，患病的父亲一个也不传。" },
    { en: "heteroplasmy", cn: "异质性",
      def_en: "The state in which the mitochondrial genomes inside one cell, or one organism, are not all identical — some carry a mutation and some do not, so the mutation is present as a proportion rather than as a yes or a no. It arises because a defective mitochondrion replicates alongside normal ones and its progeny are distributed at random to daughter cells during oocyte maturation and embryonic development. It is why genotype does not predict phenotype in mitochondrial disease: the same mutation is nearly silent in one person or tissue and severe in another.",
      def_cn: "指一个细胞内、或一个个体内的线粒体基因组并非全都相同 —— 有的带突变、有的不带，所以突变是以一个比例、而非「有／没有」的形式存在。成因是：有缺陷的线粒体与正常的一起复制，其后代在卵母细胞成熟和胚胎发育的分裂中被随机分配到子细胞里。这正是线粒体病中基因型不预测表型的原因：同一个突变，在一个人或一块组织里几乎无声，在另一个人或另一块组织里却很严重。" },
    { en: "homoplasmy", cn: "同质性",
      def_en: "The opposite state: every mitochondrial genome in every cell is the same. It is the term heteroplasmy is defined against, and the pair is what makes mitochondrial genetics quantitative. Note that it is not the same thing as normal — a homoplasmic mutant is uniformly affected, with no wild-type mitochondria anywhere to buffer the defect.",
      def_cn: "相反的状态：每个细胞里的每一份线粒体基因组都相同。异质性正是相对它定义的，而这一对术语正是线粒体遗传学之所以是定量的原因。注意它不等于「正常」 —— 一个同质性的突变体是均一地受累的，全身没有任何野生型线粒体可以缓冲这个缺陷。" },
    { en: "mitochondrial encephalomyopathies", cn: "线粒体脑肌病",
      def_en: "A group of genetic diseases affecting primarily the brain and skeletal muscle, invariably inherited from the mother because the embryo takes all its mitochondria from the egg. The name itself encodes a bioenergetic prediction: brain and skeletal muscle are the two tissues least able to tolerate a lowered ATP supply, so a general shortfall of oxidative phosphorylation declares itself there first. MERRF, mitochondrial myopathy and hypertrophic cardiomyopathy belong to this group.",
      def_cn: "一组主要累及脑和骨骼肌的遗传病，无一例外地由母亲遗传 —— 因为胚胎的全部线粒体都来自卵子。这个病名本身就编码了一个生物能学的预言：脑和骨骼肌正是最不能耐受 ATP 供应下降的两种组织，所以氧化磷酸化的普遍性不足会最先在它们身上表现出来。MERRF、线粒体肌病和肥厚型心肌病都属于这一组。" },
    { en: "the mitochondrial tRNA genes", cn: "线粒体 tRNA 基因",
      def_en: "Genes of the organelle's own translation machinery, and the clearest demonstration that a gene encoding no protein can be as pathogenic as one that does. The lysine tRNA gene is the MERRF locus; mutations in the lysine or leucine tRNA genes also weaken ATP production by limiting expression of the electron transfer components encoded in mitochondrial DNA, and type 2 diabetes mellitus is common among people carrying such defects — although those cases are a very small fraction of all diabetes.",
      def_cn: "这个细胞器自有翻译机器的基因，也是「一个不编码蛋白的基因可以和编码蛋白的基因一样致病」的最清楚演示。赖氨酸 tRNA 基因就是 MERRF 的位点；而赖氨酸或亮氨酸 tRNA 基因上的突变，还会通过限制线粒体 DNA 所编码的电子传递组分的表达来削弱 ATP 生产，2 型糖尿病在携带这类缺陷的个体中很常见 —— 尽管这类病例只占全部糖尿病中极小的一部分。" },
    { en: "mitochondrial donation", cn: "线粒体置换",
      def_en: "A technique that circumvents transmission of a pathogenic mitochondrial gene: the prospective mother's nuclear genes are transplanted under a microscope into an enucleated ovum from a donor with healthy mitochondria, the ovum is fertilised in vitro, and the embryo is transferred to her uterus. Approved in the United Kingdom in 2015, and raising ethical issues still vigorously debated. It works only because the two genomes are physically separable, and it does nothing for the nuclear-gene forms of the disease.",
      def_cn: "一项绕开致病线粒体基因传递的技术：把准母亲的核基因在显微操作下移植进一枚来自线粒体健康供体的去核卵，随后体外受精，再把胚胎植入她的子宫。2015 年在英国获批，并引发至今仍被激烈争论的伦理问题。它之所以行得通，全因为两个基因组在物理上可分开；而对核基因型的那些病，它一点用也没有。" },
    { en: "MODY2 and glucokinase", cn: "MODY2 与葡萄糖激酶",
      def_en: "A rare diabetes caused by defects in the gene for the hexokinase IV isozyme of the pancreatic β cell. Low activity of that enzyme prevents the ATP concentration from rising above the threshold that triggers insulin secretion. It belongs beside the mitochondrial forms because it reaches the same endpoint by a different route: here the glucose sensor is blunted, there the ATP-producing machinery is — the failing step is the same threshold.",
      def_cn: "一种罕见的糖尿病，由胰腺 β 细胞里 hexokinase IV 同工酶的基因缺陷引起。该酶活性低下，使 ATP 浓度无法升过触发胰岛素分泌的那个阈值。它之所以与线粒体型并列，是因为它经由另一条路径抵达了相同的终点：这里是葡萄糖感受器变钝，那里是产 ATP 的机器出问题 —— 而失败的那一步是同一个阈值。" },
    { en: "the ATP-gated K+ channel", cn: "ATP 门控的 K+ 通道",
      def_en: "The step at which a bioenergetic quantity becomes an endocrine signal. When blood glucose is high the β cell oxidises it by glycolysis and the citric acid cycle, the ATP concentration rises above a threshold, this channel in the plasma membrane closes, the membrane depolarises, voltage-gated Ca2+ channels open, and Ca2+ influx triggers exocytosis of insulin granules. In this one cell type ATP is the messenger reporting the glucose concentration rather than the currency paying for work — which is why a defect anywhere in oxidative phosphorylation can produce diabetes.",
      def_cn: "生物能学的量在这一步变成内分泌信号。血糖升高时，β 细胞经糖酵解和柠檬酸循环把它氧化，ATP 浓度升过阈值，质膜上的这个通道关闭，膜去极化，电压门控的 Ca2+ 通道开放，Ca2+ 内流触发胰岛素颗粒的胞吐。在这一种细胞里，ATP 是把葡萄糖浓度报告出去的信使，而非支付做功的货币 —— 这正是为什么氧化磷酸化任何环节上的缺陷都可能造成糖尿病。" }
  ]
};

/* ========================================================= metabolic-regulation */
window.BIOLITE_SPINE["key:metabolic-regulation"] = {
  assumed: ["glucose", "ATP", "ADP", "AMP", "NAD+", "NADH", "NADPH", "cyclic AMP",
            "glycolysis", "gluconeogenesis", "glycogen", "cholesterol", "fatty acid",
            "glutamate", "glutathione", "liver", "kidney", "heart", "brain", "muscle",
            "hepatocyte", "blood", "enzyme", "substrate", "protein", "gene", "DNA",
            "mRNA", "transcription", "translation", "promoter", "ribonuclease",
            "hormone", "insulin", "epinephrine", "steroid hormone", "receptor",
            "protein kinase", "membrane", "citric acid cycle",
            "pentose phosphate pathway", "diabetes mellitus", "trypsin", "trypsinogen",
            "hexokinase", "pyruvate kinase", "allosteric", "equilibrium constant",
            "Michaelis-Menten kinetics", "Km", "Vmax", "E. coli"],
  nodeTitle_en: "Metabolic regulation",
  nodeTitle_cn: "代谢调节",
  title_en: "Concentrations hold still while flux moves, and the steps that carry the regulation are exactly the ones held far from equilibrium",
  title_cn: "浓度不动而通量在动；而承担调节的那几步，恰恰是被摁在远离平衡处的那几步",
  steps: [
    {
      en: "A dynamic steady state is the condition in which the concentration of every intermediate holds still while material keeps flowing through, and what it asserts is worth stating carefully, because everything else hangs on it. In a pathway A to S to P, the reaction before S supplies it at exactly the rate the reaction after S consumes it, so the concentration of S does not change. What that leaves free is the counterintuitive part: **the flux — the rate at which material flows through a step — can be high and can swing enormously while the concentration of that step substrate does not move at all**, so flux and concentration are independent, and regulation is almost always about flux.",
      cn: "所谓动态稳态（dynamic steady state），指的是「物质一直在流过，而每一个中间产物的浓度却保持不动」的那种状态；它到底在断言什么值得仔细讲清楚，因为后面一切都挂在这句话上。在一条通路 A → S → P 里，S 前面那个反应供应它的速率，正好等于 S 后面那个反应消耗它的速率，于是 S 的浓度不变。**它放开的东西才是反直觉的：通量（也就是物质流过某一步的速率）可以很高、可以剧烈摆动，而这一步底物的浓度纹丝不动 —— 通量和浓度是两个独立的变量，而调节几乎永远是在调通量。**",
      src: "A pp.497–498, §13.5"
    },
    {
      link_en: "and what that steady state is for has a name and a number attached to it",
      link_cn: "而这个稳态是为了什么，有一个名字、也有一个数字挂在上面",
      recall_en: "the same steady state as the step above, now stated as a quantity that is measured",
      recall_cn: "还是上一步那个稳态，只是这里把它说成一个可以测出来的量",
      en: "Cells and organisms exist in a dynamic steady state, and holding it is homeostasis: keeping the fluctuations of a state quantity within permissible limits around its stationary value, which is a thermodynamic definition with an operational one underneath it. The worked case is glucose. Changes in the rate at which glucose enters the blood from various sources are balanced by changes in the rate of uptake into tissues, so **blood glucose is held nearly constant at 5 mM, and diabetes mellitus is what failure of that homeostasis looks like — regulation gone defective through lack of insulin or insensitivity to it.** The failure of homeostatic mechanisms is often at the root of human disease, which is why this abstraction is worth the precision.",
      cn: "细胞与机体存在于一种动态稳态之中，而把这个状态守住就叫 homeostasis（稳态／自稳）：把某个状态量围绕其稳态值的波动维持在允许的限度以内 —— 这是一个热力学定义，底下还压着一个操作性定义。拿葡萄糖做例子。葡萄糖从各种来源进入血液的速率变化，被各组织从血液中摄取葡萄糖的速率变化所抵消，于是**血糖被维持在接近恒定的 5 mM；而糖尿病就是这套 homeostasis 失效的样子 —— 由于胰岛素缺乏或对胰岛素不敏感，调节出了故障。** 稳态机制的失效往往正是人类疾病的根源，这也是为什么这个抽象概念值得说得这么精确。",
      src: "A p.498, §13.5"
    },
    {
      link_en: "and without that control, metabolism fails in two different ways",
      link_cn: "而一旦没有这种控制，代谢会以两种不同的方式失败",
      en: "If enzyme reactions simply coexisted uncontrolled, reactions at many points of metabolism would run uselessly, or the effects of different enzyme systems would actively interfere with one another — waste in the first case, conflict in the second, and conflict is the worse of the two, because a synthetic and a degradative pathway both running flat out leaves the state of the cell undefined. Nor is the danger local. Metabolism drawn honestly is a three-dimensional meshwork in which most metabolites are shared by more than one pathway, and glucose 6-phosphate in a hepatocyte has five fates open to it — glycogen, the pentose phosphate pathway, glycolysis, release into the blood as free glucose, and the amino sugars. Any change in the allocation of glucose 6-phosphate to one pathway affects, directly or indirectly, the flow of metabolites everywhere else, so a decision taken at one nodal point propagates, and that is a constraint on regulation rather than a description of structure. **A high degree of organisation is possible only under consistent regulation of enzyme reactions**, so regulation is a precondition of metabolism being organised at all rather than an improvement made to it afterwards.",
      cn: "如果各个酶反应只是不受控制地并存，代谢中许多地方的反应就会白白空转，或者不同酶系统的作用会彼此干扰 —— 前者是浪费，后者是冲突；而冲突更糟，因为一条合成通路和一条分解通路同时全速运转，会让细胞的状态变得无法确定。危险也不是局部的。老实画出来的代谢是一张三维的网，其中大多数代谢物被不止一条途径共享；肝细胞里的葡萄糖-6-磷酸就有五个去向敞开着 —— 糖原、磷酸戊糖途径、糖酵解、水解成游离葡萄糖释放进血液，以及各种氨基糖。葡萄糖-6-磷酸在某一条途径上的分配一旦改变，就会直接或间接地影响其他各处代谢物的流动；于是在一个「节点」上作出的决定会一路传导出去 —— 这是对调节的一条约束，而不是对结构的一段描述。**只有在对酶反应持续调节的条件下，高度的组织化才是可能的 —— 所以调节是「代谢能够被组织起来」的前提条件，而不是事后加上去的一项改良。**",
      src: "CZ p.221, §10.2; A p.497, §13.5, Fig. 13-28"
    },
    {
      link_en: "before any mechanism, it is worth fixing which floor of the building is being discussed",
      link_cn: "在讲任何机制之前，先钉住我们讨论的是这栋楼的哪一层",
      en: "**Regulation can be considered at five levels, in descending order: the metabolism of a whole organism, of an organ, of a cell, of a system of enzyme reactions, and of a single enzyme reaction**. Cutting across that ladder is a physiological classification into nervous and hormonal regulation. Everything below sits on the bottom two rungs — one enzyme reaction and one system of them — which is why none of it mentions nerves, and why hormones appear here only as signals arriving from outside rather than as a subject of their own.",
      cn: "调节可以在五个层面上考察，由高到低是：整个机体的代谢、某个器官的代谢、某个细胞的代谢、某一套酶反应系统的代谢，以及单个酶反应。横切这道阶梯的，还有一种生理学上的分类：神经性调节与激素性调节。**下面所有内容都落在最底下的两级上 —— 单个酶反应，以及一套酶反应系统 —— 这就是为什么其中完全不涉及神经，也是为什么激素在这里只作为从外面到达的信号出现，而不是作为一个独立的主题。**",
      src: "CZ p.221, §10.2"
    },
    {
      link_en: "on those two rungs a cell has exactly two handles, and it pays a lot for them",
      link_cn: "在这两级上，细胞手里恰好有两个把手 —— 而它为此花了不少钱",
      en: "In humans about 2,500 genes, roughly 12 per cent of all genes, encode regulatory proteins: receptors, regulators of gene expression, and more than 500 different protein kinases. What all that machinery does reduces to two handles — **change the number of enzyme molecules, or change the catalytic activity of the molecules already present**. The two handles work on time scales from milliseconds to many hours, which makes them complementary rather than redundant, and it is entirely usual for one enzyme to be regulated transcriptionally, allosterically and covalently at once, each layer moving at its own speed.",
      cn: "在人体内，约 2,500 个基因（约占全部基因的 12%）编码调控蛋白：受体、基因表达的调控者，以及五百多种不同的蛋白激酶。这些机器所做的事归结起来只有两个把手 —— 改变酶分子的数量，或者改变已经在场的那些分子的催化活性。**这两个把手作用的时间尺度从毫秒到许多小时，因而它们是互补的而非冗余的；同一个酶同时在转录、别构和共价三个层面上被调节，每一层各按自己的速度，这是完全寻常的事。**",
      src: "A pp.498, 501, §13.5"
    },
    {
      link_en: "and changes in enzymatic activity are put to two complementary uses, which one word usually hides",
      link_cn: "而「酶活性的改变」被用在两件互补的事情上 —— 这两件事常被一个词盖住",
      en: "Two complementary roles are proposed for changes in enzymatic activity, and English keeps them apart where a single word for regulation would not. Metabolic regulation refers to processes that serve to maintain homeostasis at the molecular level — holding some cellular parameter, such as the concentration of a metabolite, at a steady level over time even as the flow of metabolites through the pathway changes. Metabolic control refers to a process that leads to a change in the output of a metabolic pathway over time, in response to some outside signal or change in circumstances. **The difference is the target of the verb: regulation keeps a concentration constant while flux moves, and control changes the flux itself.** Blood glucose held at 5 mM while dietary intake swings from meal to meal is regulation; the whole-body shift in fuel use after a signal such as insulin or adrenaline is control.",
      cn: "对于「酶活性的改变」，教材提出了两种互补的角色；而中文里若统统叫「调节」，这两件事就会被一个词盖住。metabolic regulation（代谢调节）指的是那些在分子层面维持稳态的过程 —— 把某个细胞参数（例如某个代谢物的浓度）在时间上维持在稳定水平，即便流经该途径的代谢物流量正在变化。metabolic control（代谢控制）则指在某个外界信号或环境变化的响应中，使一条代谢途径的输出随时间发生改变的过程。**差别在于动词作用的对象：调节是在通量变动时把某个浓度守住，控制则是去改变通量本身。** 膳食摄入一餐一餐地波动而血糖被守在 5 mM，这是 regulation；胰岛素或肾上腺素这类信号之后全身燃料使用格局的转变，这是 control。",
      src: "A p.501, §13.5",
      openQuestion_en: "The distinction, although useful, is not always easy to make. Use it as a lens for reading a mechanism rather than as a classification to be defended: asked which one a given mechanism is, the honest answer often names both and says which aspect is being looked at.",
      openQuestion_cn: "这个区分虽然有用，却并不总是容易作出。把它当作阅读某个机制时的一副镜片，而不是一套需要去捍卫的分类：被问到某个机制属于哪一种时，诚实的答法往往是两个都点到，并说明你现在看的是哪一面。"
    },
    {
      link_en: "the first handle, and it has five places to act rather than one",
      link_cn: "第一个把手 —— 它可以下手的地方有五处，不是一处",
      en: "How much enzyme there is can be set at five points, and all five are the level of using the cell's own genetic equipment. Transcription: a signal activates a transcription factor, a nuclear protein binding a specific DNA sequence called a response element near a gene promoter; an inducer can cause or increase transcription of the gene and subsequently also the translation of that protein, which is induction, and transcription and translation can similarly be suppressed, which is repression; steroid hormones work this way. Then mRNA stability, set by the balance of synthesis against destruction by ribonucleases; then translation rate, with the warning that an n-fold rise in an mRNA need not give an n-fold rise in its protein; then degradation, some of it directed by attaching ubiquitin, a small protein marking its target for the proteasome; and finally sequestration, keeping enzyme and substrate in different compartments. **Genes whose products work together often share one response element sequence, so a single signal through a single transcription factor moves a whole pathway worth of enzymes as a group.**",
      cn: "「酶有多少」可以在五个点上被设定，而这五点全都属于「利用细胞自身遗传装备」这个层面。转录：一个信号激活转录因子 —— 一种结合在基因启动子附近某段特定 DNA 序列（即应答元件）上的核内蛋白；一个诱导物可以引起或增强该基因的转录、进而增强该蛋白的翻译，这就是诱导；转录与翻译同样也可以被压下去，那就是阻遏。类固醇激素走的正是这条路。其次是 mRNA 的稳定性，由合成速率与被核酸酶降解的速率共同决定；再次是翻译速率 —— 这里有一条警告：mRNA 涨 n 倍，蛋白未必也涨 n 倍；再次是降解，其中一部分由挂上泛素（一个把靶蛋白标记送往蛋白酶体的小蛋白）来指挥；最后是区隔，也就是把酶和它的底物放在不同的区室里。**那些产物需要一起干活的基因，往往共用同一段应答元件序列 —— 于是一个信号经由一个转录因子，就能把整整一条通路的酶成组搬动。**",
      src: "CZ p.221, §10.2; A pp.498–499, §13.5, Fig. 13-29, Table 13-8",
      see: [{ id: "L-28-3-1", en: "transcription factors and response elements in full", cn: "转录因子与应答元件的完整机制" }]
    },
    {
      link_en: "and that first handle has a speed limit, which is what a half-life measures",
      link_cn: "而第一个把手有一个速度上限 —— 半衰期量的就是它",
      recall_en: "synthesis and degradation, the first and fourth of the five points just listed",
      recall_cn: "刚列的五个点里的第一个和第四个：合成与降解",
      en: "The number of molecules of an enzyme present is set by its rates of synthesis and of degradation together, some proteins being tagged with ubiquitin for proteasomal degradation, so a cell can change an amount either by making more or by destroying faster. Average half-lives differ by tissue: about 0.9 days in liver and 10.7 days in muscle. **Rapid turnover is energetically expensive, and what it buys is speed — a protein that is destroyed fast reaches a new steady-state level much faster when synthesis changes.** So the tissues that must re-tune their enzyme complement often pay for the privilege in ATP, and the ones that need not, do not.",
      cn: "某个酶在场的分子数，由它的合成速率与降解速率共同决定 —— 部分蛋白被挂上泛素后送进蛋白酶体降解 —— 所以细胞既可以靠多造来改变数量，也可以靠拆得更快来改变数量。平均半衰期因组织而异：肝里约 0.9 天，肌肉里约 10.7 天。**快速周转在能量上是昂贵的，它买来的是速度：一个被拆得快的蛋白，在合成速率改变时能快得多地到达新的稳态水平。** 于是那些必须频繁重新调配自己酶组成的组织，用 ATP 为这份便利买单；不需要的组织就不买。",
      src: "A pp.498–499, §13.5"
    },
    {
      link_en: "when all five have acted, the result is read at three levels — and one of them looks nothing like a pathway diagram",
      link_cn: "这五处全部动过之后，结果在三个层次上被读取 —— 其中一个层次的样子和通路图完全不像",
      en: "Global changes are quantified as the transcriptome, which is the whole complement of a cell messenger RNAs, the proteome, the whole complement of its proteins, and the metabolome, the whole ensemble of its low-molecular-weight metabolites. Switching a rat from a diet rich in carbohydrate, which is sugar and starch, to one rich in lipid, which is fat, changes the transcription of hundreds of liver genes at once. The shape of a metabolome is the surprise: **of 103 metabolites measured in E. coli growing on glucose, glutamate alone is 49 per cent at 9.6 mM**, nucleotides are 15 per cent, and the intermediates of glycolysis, the citric acid cycle and the pentose phosphate pathway together are only another 15 per cent.",
      cn: "全局性的变化在三个层次上被量化：转录组，即细胞全部信使 RNA 的总和；蛋白质组，即全部蛋白的总和；代谢组，即全部低分子量代谢物的总和。把一只大鼠从高碳水饮食换成高脂饮食，会一次改变肝里数以百计基因的转录。**真正出人意料的是代谢组的形状：在以葡萄糖生长的大肠杆菌里实测的 103 种代谢物中，光谷氨酸就占 49%（浓度 9.6 mM），核苷酸占 15%，而糖酵解、柠檬酸循环与磷酸戊糖途径的中间产物加在一起也不过又一个 15%。**",
      src: "A p.499, §13.5, Fig. 13-30"
    },
    {
      link_en: "the second handle is activity, and its cheapest form is simply how much substrate there is",
      link_cn: "第二个把手是活性 —— 它最便宜的一种形式，就是「有多少底物」",
      en: "For an enzyme following Michaelis-Menten kinetics the rate is half-maximal when substrate concentration equals Km, and well below Km the rate is simply proportional to substrate concentration. The enzyme-catalysed reaction itself is therefore an example of a simple way of regulation, though the claim arrives with a hedge in parenthesis — although not very effective — and that hedge is part of the claim and should not be dropped. It only works in that low, first-order region, since at saturation the enzyme cannot answer at all. What rescues it is a measurement: plot metabolite concentrations measured in E. coli against the Km values of the enzymes that consume them and the points fall near the line of equality, so cells happen to operate on the steep part of the curve. The exception is worth holding — **ATP, NAD+ and NADPH sit well above their Km values, so they are not limiting and no rate change can be blamed on a small dip in ATP**.",
      cn: "对一个服从米氏动力学的酶来说，底物浓度等于 Km 时速率为最大值的一半；远低于 Km 时，速率干脆与底物浓度成正比。所以「酶催化反应本身」就是一种简单调节方式的例子；不过这个论断是带着一句括号里的保留来的 —— 「尽管不太有效」 —— 而这句保留是论断的一部分，不该被略去。它只在低浓度、一级动力学的那一段里管用，一旦饱和，酶就完全没法应答了。**救回它的是一个测量结果：把大肠杆菌里实测的代谢物浓度，对着消耗它们的酶的 Km 作图，点子落在等值线附近 —— 也就是说细胞恰好工作在曲线陡峭的那一段上。有一个例外值得记住：ATP、NAD⁺ 和 NADPH 的浓度远高于它们的 Km，所以它们不是限速因素，任何速率变化都不能归咎于 ATP 稍微掉了一点。**",
      src: "CZ p.221, §10.2; A p.500, §13.5, Fig. 13-31"
    },
    {
      link_en: "and the cheapest inhibitor of all is one the reaction manufactures itself",
      link_cn: "而最便宜的那个抑制剂，是反应自己造出来的",
      en: "Binding an inhibitor into the active site is an important way of regulating an enzyme reaction, and one such inhibitor costs the cell nothing at all to supply. **Inhibition can also occur by the product of the enzyme reaction, so that on accumulation of the product the enzyme reaction slows down — a primitive self-limiting loop.** Primitive is the right word: a loop of that kind can report only on the output of its own reaction, so it cannot tell an enzyme what a pathway twenty steps downstream is short of.",
      cn: "把抑制剂结合到活性位点里去，是调节酶反应的一种重要方式；而其中有一种抑制剂，细胞供应它一分钱都不用花。**抑制也可以由酶反应的产物造成：产物一积累，酶反应就慢下来——这是一个原始的自限回路。** 「原始」这个词用得恰当：这样的回路只能反映它自己那个反应的产出，所以它没法告诉一个酶「二十步之外的下游缺什么」。",
      src: "CZ p.221, §10.2"
    },
    {
      link_en: "the effective version of that handle works from a site that is not the active site",
      link_cn: "这个把手真正有效的那种用法，作用点不在活性位点上",
      en: "An allosteric effector binds an enzyme somewhere other than the active site and acts by changing the shape of the protein. That one structural fact carries the whole mechanism: because the site is separate, the effector need bear no chemical resemblance to the substrate, so the final product of a long sequence can reach back and inhibit an enzyme near the beginning of it, acting on a completely different molecule. That is negative feedback, and an early enzyme inhibited this way is called the controlling enzyme. How sharp the response becomes is measurable: **driving an enzyme from 10 to 90 per cent of maximal rate takes an 81-fold change in substrate with no cooperativity and only a 3-fold change at a Hill coefficient of 4** — three against eighty-one is the whole content of the claim that allosteric regulation is effective.",
      cn: "别构效应物结合在酶上活性位点以外的地方，通过改变蛋白的形状起作用。仅这一个结构事实就撑起了整个机制：既然位点是分开的，效应物就不必与底物有任何化学上的相似，于是一条长序列的终产物可以反过来抑制序列开头附近的某个酶 —— 而那个酶作用的是完全不同的分子。这就是负反馈；被这样抑制的开头那个酶，叫做调控酶。**响应能变得多陡是可以量出来的：把一个酶从最大速率的 10% 推到 90%，在完全没有协同性时需要底物浓度变化 81 倍，而希尔系数为 4 时只需要 3 倍 —— 三倍对八十一倍，就是「别构调节很有效」这句话的全部含义。**",
      src: "CZ pp.221–222, §10.2; A p.500, §13.5, Table 13-9"
    },
    {
      link_en: "the third version answers to signals from outside, and comes in a reversible and an irreversible kind",
      link_cn: "第三种用法响应来自外部的信号 —— 而它分可逆与不可逆两种",
      en: "Covalent modification changes an enzyme within seconds of a signal, and phosphorylation is by far the commonest kind: up to half the proteins of a eukaryotic cell are phosphorylated under some circumstances. A phosphoryl group can alter the electrostatic character of the active site, push an inhibitory stretch of the protein out of it, change how the enzyme meets other proteins, or force a conformational change that shows up as an altered Km or maximal rate. The other kind is partial proteolysis, which converts an inactive proenzyme into an active enzyme — trypsinogen into trypsin. The two differ in one respect that decides where each is used: **a phosphatase can take a phosphoryl group off again, whereas a proenzyme that has been cut cannot be uncut**, so proteolysis is the mechanism for a one-way commitment such as digestion or clotting, and phosphorylation is the mechanism for a switch that has to go back.",
      cn: "共价修饰能在收到信号后的几秒内改变一个酶，其中最常见的是磷酸化：在某些情况下，真核细胞里多达一半的蛋白是被磷酸化的。一个磷酰基可以改变活性位点的静电性质，可以把蛋白上一段起抑制作用的序列推出活性位点，可以改变这个酶与别的蛋白见面的方式，也可以逼出构象变化、表现为 Km 或最大速率的改变。另一种是部分蛋白水解，它把没有活性的酶原变成有活性的酶 —— 胰蛋白酶原变成胰蛋白酶。**两者有一处差别决定了各自用在哪里：磷酸酶能把磷酰基再摘掉，而一个被切开的酶原没法再被缝回去 —— 所以蛋白水解用于消化、凝血这类一次性、不可反悔的承诺，而磷酸化用于必须能回头的那种开关。**",
      src: "CZ p.222, §10.2; A p.501, §13.5"
    },
    {
      link_en: "and one further mechanism uses no chemistry on the enzyme at all — only where things are kept",
      link_cn: "还有一种机制根本不对酶做任何化学 —— 它只管东西被放在哪里",
      en: "A cell is divided into many membrane-bounded compartments, and substrates and products must be carried across the membranes between them, mostly in a controlled way, which makes the transport step itself a control point. What compartmentation is for is the case where a synthetic and a degradative pathway share some of their intermediates: **keeping them in separate compartments is what lets both run at the same time, in opposite directions, without either undoing the other**. This closes a circle opened earlier, where the localisation of catabolic and anabolic reactions in different parts of a eukaryotic cell was introduced as the reason they can run simultaneously and independently; the worked case is fatty acid synthesis versus beta-oxidation, one in the cytoplasm and one in the mitochondrion. A related trick needs no membrane at all — an enzyme can be switched by association with and dissociation from a separate regulatory protein, as the cyclic-AMP-dependent protein kinase is, sitting inactive until cyclic AMP pulls its catalytic subunits off its inhibitory ones.",
      cn: "细胞被分隔成许多有膜包围的区室，底物和产物必须跨过区室之间的膜被运送，而且多半是以受控的方式运送 —— 于是这个运输步骤本身就成了一个控制点。**区室化到底是为了什么？为的正是「一条合成通路和一条分解通路共用部分中间产物」的那种情形：把它们关进不同的区室，才使两者能够同时朝相反方向运转，而互不抵消。**这也闭合了前面开启的一个循环：在那里，分解反应与合成反应定位于真核细胞的不同部位，被作为「二者能够同时且独立运行」的理由引入；而具体的案例就是脂肪酸合成对 β-氧化 —— 一个在细胞质，一个在线粒体。还有一个相关的花招根本不需要膜 —— 一个酶可以靠与某个独立的调节蛋白结合、解离来开关，依赖 cyclic AMP 的那个蛋白激酶就是如此：它一直没有活性，直到 cyclic AMP 把它的催化亚基从抑制性亚基上拉开。",
      src: "CZ p.222, §10.2; A p.501, §13.5",
      see: [{ id: "L-12-1-1", en: "how an extracellular signal reaches an enzyme in the cytosol", cn: "胞外信号怎么抵达胞质里的一个酶" }]
    },
    {
      link_en: "one further principle is named in the same list and left for the enzyme chapter to develop",
      link_cn: "同一份清单上还点了一种原理，把展开留给了讲酶的那一章",
      en: "Regulation on the principle of isoenzymes is the fifth mechanism named, and it is named without being developed at this point — the possibilities it opens are described where enzyme forms themselves are treated. **Isoenzymes are distinct protein forms catalysing one and the same reaction, so a tissue sets its own kinetics for a shared step simply by choosing which form to make.**",
      cn: "同工酶原理的调节是这份清单上被点名的第五种机制，而它在这里只被点名、并未展开——它所打开的种种可能性，是在讲酶本身形式的地方才被描述的。**同工酶是催化同一个反应的几种不同蛋白形式，所以一个组织只要选择造哪一种形式，就为一个共用步骤定下了自己的动力学。**",
      src: "CZ p.222, §10.2",
      beyond: true,
      beyondNote: "p.222 names isoenzyme regulation and refers the reader onward without saying what an isoenzyme is. The one-sentence definition given here is taken from the glossary entry and from the isoenzyme box of the glycolysis chapter, so that the mechanism is at least legible where it is named; nothing about its regulatory use is attributed to p.222.",
      see: [{ id: "L-14-5-1", en: "isoenzymes in general, and lactate dehydrogenase as the clinical case", cn: "同工酶的一般情况，以及乳酸脱氢酶这个临床例证" }]
    },
    {
      link_en: "now the core question: out of all the enzymes in a pathway, which ones does regulation actually sit on?",
      link_cn: "现在进入核心问题：一条通路里那么多酶，调节究竟坐在哪几个上？",
      en: "There is a test that replaces intuition. For A plus B giving C plus D, the mass-action ratio is Q = [C][D]/[A][B], evaluated at the actual concentrations in the living cell, and the equilibrium constant K'eq is what that same ratio would be at equilibrium. Comparing Q with K'eq is the criterion for where regulation can sit: within one or two orders of magnitude means near equilibrium, and such a reaction's net flow is only the small difference between a large forward and a large reverse rate, so it merely transmits flux rather than regulating it. More than half the enzymes of glycolysis are near equilibrium by that test, and **the three that are not — hexokinase, phosphofructokinase-1 and pyruvate kinase — are the same three practically irreversible steps that gluconeogenesis has to bypass**: past a one-way step material cannot flow back, so whoever controls that step controls everything committed downstream.",
      cn: "这里有一个取代直觉的判据。对反应 A + B → C + D，质量作用比是 Q = [C][D]/[A][B]，取活细胞里的实际浓度来算；而平衡常数 K′eq 是同一个比值在平衡时会取的值。把 Q 与 K′eq 相比，就是判断「调节能坐在哪里」的判据：相差在一到两个数量级以内，就是坐在平衡附近；它的净流量只是「很大的正向速率」与「很大的逆向速率」之间那点差额，所以它传递通量，而不调节通量。**按这个判据，糖酵解里超过一半的酶都在平衡附近；而不在平衡附近的那三个 —— 己糖激酶、磷酸果糖激酶-1、丙酮酸激酶 —— 正是糖异生必须绕开的那三个实际上不可逆的步骤：过了一个单向步骤，物质就流不回来，所以谁控制了那一步，谁就控制了下游所有已被交付的流量。**",
      src: "CZ p.222, §10.2; A pp.501–502, §13.5, Table 13-10",
      see: [{ id: "L-14-5-1", en: "how PFK-1 is actually switched", cn: "PFK-1 究竟是怎么被切换的" }]
    },
    {
      link_en: "and the causal arrow here is easy to state backwards",
      link_cn: "而这里的因果箭头很容易说反",
      en: "Phosphofructokinase-1 is the glycolytic enzyme phosphorylating fructose 6-phosphate practically irreversibly, which makes it a controlling enzyme defined by thermodynamics rather than by allostery, and the numbers say so: its equilibrium constant is about 1,000 while the measured ratio in a liver cell is about 0.1 — four orders apart. It is because the reaction is held far from equilibrium that it is exergonic in the cell and runs forward, and not the other way round; it is held there because its rate is limited by how much enzyme there is and by the effectors acting on that enzyme. Let such a reaction reach equilibrium and two things break: fructose 1,6-bisphosphate would climb into the molar range and wreck the cell osmotically, and if ATP hydrolysis were allowed to approach equilibrium its free-energy change would approach zero and ATP would lose the transfer potential that is the only reason it is worth anything. One caution bounds all of it: **so many adjustments act on any single enzyme that the properties of one enzyme cannot tell you whether it controls the flow through the whole pathway** — flux control is a property of the pathway and has to be measured.",
      cn: "磷酸果糖激酶-1 是糖酵解里那个把果糖-6-磷酸「实际上不可逆地」磷酸化的酶 —— 于是它成为一个由热力学、而不是由别构性所界定的调控酶；数字也是这么说的：它的平衡常数约为 1,000，而肝细胞里实测的比值约为 0.1 —— 相差四个数量级。正是因为这个反应被摁在远离平衡的地方，它在细胞里才是放能的、才朝前跑；顺序不能倒过来说。它之所以被摁在那里，是因为它的速率受限于「有多少这个酶」以及作用在这些酶上的效应物。若放任这样一个反应达到平衡，有两件事会坏掉：果糖-1,6-二磷酸会爬到摩尔级，在渗透压上把细胞毁掉；而如果 ATP 的水解被允许接近平衡，它的自由能变化就趋近于零，ATP 会失去磷酰基转移势 —— 而那是它唯一值钱的地方。**最后有一句限定罩着这一切：作用在任何单个酶身上的调整实在太多，以至于单凭一个酶的性质，无法判断它是否控制着整条通路的流量 —— 通量控制是整条通路的性质，必须靠测量得到。**",
      src: "A p.502, §13.5"
    },
    {
      link_en: "one lever has not been named yet, and it is simply not having enough of something",
      link_cn: "还有一个杠杆没点名 —— 而它不过就是「某样东西不够用」",
      en: "The supply of a key metabolite can cap the output of a whole system of reactions. The example is phosphorylation in the respiratory chain, where the limiting factor is a sufficiency of ADP: not fuel, not oxygen, but how much phosphate acceptor is available to be turned back into ATP. **The adenine nucleotide pool is fixed in total size, so spending ATP is what creates ADP, and the appearance of ADP is itself the permission for more oxidative phosphorylation** — the turnover regulates itself, with no signal molecule and no enzyme modification involved.",
      cn: "某种关键代谢物的供应量，可以给整整一套反应系统的产出设上限。教材举的例子是呼吸链上的磷酸化：那里的限制因素是 ADP 够不够 —— 不是燃料，也不是氧气，而是有多少磷酸受体可供重新变回 ATP。**腺苷酸池的总量是固定的，所以花掉 ATP 这件事本身就制造出 ADP，而 ADP 的出现本身就是「可以进行更多氧化磷酸化」的许可 —— 周转自己调节自己，既不需要信号分子，也不需要对酶做任何修饰。**",
      src: "CZ p.222, §10.2"
    },
    {
      link_en: "and the same fixed pool is what makes one nucleotide the cell most sensitive alarm",
      link_cn: "而正是这个固定的池子，让其中一种核苷酸成了细胞最灵敏的警报器",
      recall_en: "the fixed adenine nucleotide pool from the step above",
      recall_cn: "上一步里那个总量固定的腺苷酸池",
      en: "Enzymes that use ATP have Km values of 0.1 to 1 mM while a cell holds ATP at 5 to 10 mM, so ATP normally saturates them and a large fall would slow hundreds of reactions at once. But a cell holds AMP below 0.1 mM, and spending ATP makes AMP in two steps, hydrolysis to ADP followed by adenylate kinase turning two ADP into one ATP and one AMP. **Because AMP starts from so low a base, a 10 per cent fall in ATP appears as roughly a 600 per cent rise in AMP**, which is why the emergency response is keyed to AMP rather than to ATP: AMP-activated protein kinase reads it and switches on glucose transport, glycolysis and fatty acid oxidation while switching off the synthesis of glycogen, fat, cholesterol and protein.",
      cn: "用 ATP 的那些酶，Km 在 0.1 到 1 mM 之间，而细胞把 ATP 维持在 5 到 10 mM，所以 ATP 平时把它们饱和着；一旦大幅下降，数以百计的反应会同时变慢。但细胞把 AMP 压在 0.1 mM 以下，而花掉 ATP 分两步生成 AMP：先水解成 ADP，再由腺苷酸激酶把两个 ADP 变成一个 ATP 加一个 AMP。**因为 AMP 的基数极低，ATP 只下降 10%，AMP 就上升约 600% —— 这正是应急响应挂在 AMP 而不是 ATP 身上的原因：AMP 激活的蛋白激酶读取这个信号，开启葡萄糖转运、糖酵解与脂肪酸氧化，同时关掉糖原、脂肪、胆固醇和蛋白质的合成。**",
      src: "A pp.502–503, §13.5, Table 13-11",
      see: [{ id: "L-23-3-1", en: "AMPK inside the whole-body hormonal picture", cn: "AMPK 在全身激素图景里的位置" }]
    }
  ],
  terms: [
    { en: "dynamic steady state and flux", cn: "动态稳态与通量",
      def_en: "The condition in which every step of a pathway receives its substrate at exactly the rate it consumes it, so concentrations hold still. Flux is the rate at which material flows through a step, and it can swing widely while concentrations do not move — which is why regulation is almost always about flux.",
      def_cn: "通路每一步接收底物的速率正好等于消耗底物的速率，因而浓度保持不动的那种状态。通量是物质流过某一步的速率；它可以大幅摆动而浓度不动 —— 这正是调节几乎永远针对通量的原因。" },
    { en: "levels of regulation", cn: "调节的层面",
      def_en: "Whole organism, organ, cell, system of enzyme reactions, single enzyme reaction — five rungs in descending order, cut across by a physiological division into nervous and hormonal regulation. Biochemical treatment lives on the bottom two rungs.",
      def_cn: "整个机体、器官、细胞、酶反应系统、单个酶反应 —— 由高到低五级；横切这道阶梯的还有「神经性／激素性」这一生理学分类。生物化学的处理住在最底下两级上。" },
    { en: "induction and repression", cn: "诱导与阻遏",
      def_en: "Regulating the amount of an enzyme by controlling its synthesis: an inducer causes or increases transcription and then translation of that protein, and repression is the mirror image. Steroid hormones act this way. Slower than changing an existing enzyme activity, but it sets the ceiling.",
      def_cn: "通过控制酶的合成来调节酶的数量：诱导物引起或提高该蛋白的转录、进而提高翻译，阻遏则是它的镜像。类固醇激素走的就是这条路。它比改变现有酶的活性慢，但它决定了上限。" },
    { en: "response element", cn: "应答元件",
      def_en: "A specific DNA sequence near a gene promoter, bound by an activated transcription factor. Genes whose products work together often share one, so a single signal moves a whole pathway worth of enzymes as a group.",
      def_cn: "基因启动子附近一段特定的 DNA 序列，被激活的转录因子结合于此。产物需要一起干活的基因常常共用同一段，所以一个信号就能把整条通路的酶成组搬动。" },
    { en: "allosteric control and negative feedback", cn: "别构调控与负反馈",
      def_en: "An effector binding outside the active site and acting through a conformational change. Because the site is separate, the effector need not resemble the substrate, so the final product of a sequence can inhibit an enzyme near its beginning — that enzyme is the controlling enzyme.",
      def_cn: "效应物结合在活性位点之外，通过构象变化起作用。既然位点是分开的，效应物就不必与底物相似，于是一条序列的终产物可以抑制序列开头附近的酶 —— 那个酶就是调控酶。" },
    { en: "Hill coefficient", cn: "希尔系数",
      def_en: "The number quantifying cooperativity, and so how sharp an allosteric response is. Going from 10 to 90 per cent of maximal rate needs an 81-fold change in substrate with no cooperativity, and only a 3-fold change at a coefficient of 4.",
      def_cn: "量化协同性、因而量化别构响应有多陡的那个数字。从最大速率的 10% 到 90%，在没有协同性时需要底物变化 81 倍，系数为 4 时只需 3 倍。" },
    { en: "proenzyme", cn: "酶原",
      def_en: "An inactive precursor converted into the active enzyme by partial proteolysis, as trypsinogen becomes trypsin. Unlike phosphorylation it cannot be undone, which is why this mechanism is used where the cell wants a one-way commitment — digestion, blood clotting.",
      def_cn: "通过部分蛋白水解转变为活性酶的无活性前体，例如胰蛋白酶原变为胰蛋白酶。与磷酸化不同，它无法撤销 —— 这正是这种机制被用在细胞需要一次性、不可反悔承诺的场合（消化、凝血）的原因。" },
    { en: "compartmentation", cn: "区室化",
      def_en: "Dividing the cell into membrane-bounded spaces and carrying metabolites between them in a controlled way, so the transport step is itself a control point. Its purpose is the case of a synthetic and a degradative pathway sharing intermediates: separate compartments let both run at once without either undoing the other.",
      def_cn: "把细胞分隔成有膜包围的空间，并以受控的方式在它们之间运送代谢物，于是运输步骤本身成为一个控制点。它的用意在于「合成与分解通路共用中间产物」的情形：分开的区室让两者能同时运转而互不抵消。" },
    { en: "mass-action ratio and the controlling reaction", cn: "质量作用比与调控反应",
      def_en: "The ratio of product to substrate concentrations measured in a living cell, compared against the equilibrium constant. Within one or two orders of magnitude means near equilibrium, and such a step transmits flux rather than regulating it; a step held orders away — a practically irreversible one such as phosphofructokinase — is where control has purchase.",
      def_cn: "在活细胞里实测的产物与底物浓度之比，用来与平衡常数相比。相差一到两个数量级以内即为「在平衡附近」，这样的步骤只传递通量而不调节通量；被摁在相差好几个数量级处的那种步骤（例如实际上不可逆的磷酸果糖激酶），才是控制能使上力的地方。" },
    { en: "limiting metabolite", cn: "限制性代谢物",
      def_en: "A key metabolite whose availability caps the output of a whole system of reactions. ADP is the case for respiratory-chain phosphorylation: since the adenine nucleotide pool is of fixed size, spending ATP creates the ADP that is itself the permission for more oxidative phosphorylation.",
      def_cn: "其可得量给整套反应系统的产出设上限的关键代谢物。呼吸链磷酸化的那个例子就是 ADP：由于腺苷酸池总量固定，花掉 ATP 就制造出 ADP，而 ADP 本身就是「可以进行更多氧化磷酸化」的许可。" }
  ]
};
