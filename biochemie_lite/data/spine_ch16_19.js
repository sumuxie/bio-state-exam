/* Spines for chapters 16-19 — 速通简洁版.

   These are the pathway chapters, and the temptation here is to hand over a list of
   steps. A list is not a thread. Each step below is a CLAIM: why the citric acid
   cycle has to close into a cycle, why a fatty acid needs a gate before it can be
   burned, why twenty amino acids funnel their nitrogen through one carrier, why a
   proton gradient is spent on releasing ATP rather than on making it.

   House rules, all of them from the reader saying which sentence stopped them:
   state the thing; no unbound "the"; name the actual objects; no commentary about
   the textbook; introduce every noun in the breath that first uses it; state the
   scope; reach back when a step is the parallel or the opposite of an earlier one.
   Every structural claim carries its consequence — 「这些东西一般有啥用？」

   `beyond: true` marks material that is standard and examinable but is NOT on the
   pages this node was read from. `openQuestion_*` marks a question the subject has
   not settled. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ L-16-2-1 */
window.BIOLITE_SPINE["L-16-2-1"] = {
  assumed: ["ATP", "ADP", "GTP", "GDP", "coenzyme A", "glucose", "cytosol",
            "amino acid", "fatty acid", "enzyme", "gene duplication",
            "messenger RNA", "active site", "substrate"],
  nodeTitle_en: "Reactions of the citric acid cycle",
  nodeTitle_cn: "柠檬酸循环的各步反应",
  title_en: "Why this pathway has to be a cycle, and why micromolar oxaloacetate is enough",
  title_cn: "这条通路为什么非得是个循环，以及为什么微摩尔的草酰乙酸就够用",
  steps: [
    {
      en: "Acetyl-CoA is a two-carbon acetyl group carried on coenzyme A through a thioester bond, and it is what sugars, fatty acids and most amino acids all arrive as once they have been broken down. **The citric acid cycle exists to oxidise that acetyl group completely to two molecules of carbon dioxide, and to keep the electrons stripped off it** — they are loaded onto NAD+ and FAD, two soluble electron acceptors that become NADH and FADH2 when they take electrons up.",
      cn: "**乙酰-CoA** 是一个两碳的乙酰基，通过**硫酯键**挂在辅酶 A 上；糖、脂肪酸和大多数氨基酸被拆解到最后，都以它的形式到场。**柠檬酸循环存在的目的，是把这个乙酰基彻底氧化成两分子二氧化碳，并把从它身上剥下来的电子留住** —— 电子被装到 **NAD+** 和 **FAD** 这两种可溶的电子受体上，它们接了电子就成为 NADH 和 FADH2。",
      src: "A p.580"
    },
    {
      link_en: "and that turns out to be chemically hard",
      link_cn: "而这件事在化学上并不好办",
      en: "Cut the acetyl group off coenzyme A and what is left is free acetate, a two-carbon acid. **Acetate cannot be oxidised directly: knock its carboxyl group off as carbon dioxide and the other carbon leaves as methane, and apart from a handful of methanotrophic bacteria — bacteria that live on methane — nothing has the enzymes or the cofactors to oxidise methane.** So the short route from acetate to carbon dioxide is closed, and a cell that wants the energy in an acetyl group has to get at it some other way.",
      cn: "把乙酰基从辅酶 A 上切下来，剩下的是游离的**乙酸**，一个二碳酸。**乙酸没法被直接氧化：把它的羧基以二氧化碳的形式敲掉，另一个碳就会以甲烷的形式离开，而除了少数甲烷氧化菌（methanotroph，靠甲烷为生的细菌）之外，没有生物有酶或辅因子去氧化甲烷。** 所以从乙酸直通二氧化碳的近路是堵死的，想要乙酰基里那点能量的细胞，只能绕道。",
      src: "A p.580"
    },
    {
      link_en: "so what can a cell oxidise easily?",
      link_cn: "那细胞容易氧化的是什么？",
      en: "**A methylene group — one carbon carrying two hydrogens — is easy to oxidise when it sits right next to a carbonyl group, which is a carbon double-bonded to an oxygen.** The oxygen pulls electrons away, so the carbonyl carbon is electron-poor and can drain negative charge off its neighbour; that lets a carbanion form on the neighbouring carbon, a carbon holding a lone pair and a negative charge, and a carbanion is the reactive species that carbon-carbon bonds in metabolism are made and broken through. **The acetyl group has a methyl instead — three hydrogens on a carbon with nothing useful beside it — and that is the entire problem.**",
      cn: "**亚甲基（一个带两个氢的碳）只要紧挨着羰基，就很容易被氧化；羰基指的是一个与氧双键相连的碳。** 氧把电子拉走，于是羰基碳缺电子，能把邻碳上的负电荷吸过去；这就允许邻碳上形成**碳负离子**，即一个带着孤对电子和负电荷的碳，而代谢中碳-碳键的生成与断裂，靠的正是碳负离子这种活泼物种。**乙酰基上挂的却是甲基 —— 一个碳上顶着三个氢，旁边没有任何帮得上忙的东西 —— 全部麻烦就在这里。**",
      src: "A p.580"
    },
    {
      link_en: "so the first reaction of the cycle exists to fix exactly that",
      link_cn: "所以循环的第一个反应，存在的意义就是解决这一件事",
      en: "The first enzyme is citrate synthase: it joins the acetyl group of acetyl-CoA onto oxaloacetate — a four-carbon acid carrying a carbonyl at C-2 — and the product is the six-carbon citrate. **The methyl nobody could touch is now a methylene sitting inside citrate with carbon-bearing carbonyls on either side of it, and from here on there is something to oxidise.** That fixes the logic of everything downstream: each step of the cycle either is an oxidation that saves energy, or is the rearrangement that puts a functional group where the next oxidation needs it.",
      cn: "第一个酶是**柠檬酸合酶**：它把乙酰-CoA 上的乙酰基接到**草酰乙酸**上 —— 草酰乙酸是一个四碳酸，C-2 上带着一个羰基 —— 产物是六碳的**柠檬酸**。**原来动不了的那个甲基，如今成了柠檬酸内部的一个亚甲基，两侧都有带羰基的碳撑着，从这里开始才有东西可氧化。** 这也定下了后面所有步骤的逻辑：循环的每一步，要么本身是一次保存能量的氧化，要么是把某个官能团摆到下一次氧化所需位置上的重排。",
      src: "A p.580",
      see: [{ id: "6-2-2-1", en: "the nine reactions in order", cn: "按顺序排开的九步反应" }]
    },
    {
      link_en: "and joining the acetyl group to a carrier creates a new problem, which is where the shape of the pathway comes from",
      link_cn: "把乙酰基接到一个载体上，又制造了一个新问题 —— 这条通路的形状正是从这里来的",
      en: "Oxaloacetate is used up in making citrate. If it were simply spent, a cell would need one fresh oxaloacetate for every acetyl group it burns, and would have to build them as fast as it burns fuel. **The pathway instead returns to oxaloacetate at the end: the same four-carbon acid is handed back, so across one turn nothing is consumed but the acetyl group. That is why the pathway closes into a cycle, and it makes oxaloacetate catalytic rather than stoichiometric — one molecule can in principle carry an unlimited number of acetyl groups through the oxidation.**",
      cn: "草酰乙酸在生成柠檬酸时被用掉了。如果它就这么被消耗掉，那么细胞每烧一个乙酰基就得配一个新的草酰乙酸，还得以烧燃料的速度把它们造出来。**这条通路选择的做法是在末尾回到草酰乙酸：同一个四碳酸被交还回来，所以走完一圈，被消耗掉的只有那个乙酰基。这就是这条通路为什么要闭合成一个循环，也使草酰乙酸成为催化性的而非化学计量性的 —— 原则上一个分子可以把无限多的乙酰基送过这场氧化。**",
      src: "A pp.580-581"
    },
    {
      link_en: "before the consequences of that, one fact about where all this happens",
      link_cn: "在谈它的后果之前，先交代这一切发生在哪里",
      en: "In eukaryotes every reaction of the cycle runs in one compartment: the mitochondrial matrix — the aqueous space enclosed by the inner membrane of a mitochondrion. Eugene Kennedy and Albert Lehninger established it in 1948 by isolating mitochondria and finding in them every enzyme and coenzyme of the cycle, plus everything needed for electron transfer. **What it is for: the same compartment also holds fatty acid oxidation and the degradation of several amino acids, so all three fuels are brought to one place and their electrons are delivered to one respiratory chain in one membrane.** In most bacteria there is no such compartment — the cycle enzymes sit in the cytosol and the plasma membrane does the job the inner mitochondrial membrane does in us.",
      cn: "在真核生物里，循环的每一步都在**线粒体基质**中进行 —— 基质就是线粒体内膜围出来的那个水相空间。Eugene Kennedy 与 Albert Lehninger 在 1948 年把线粒体分离出来，在其中找齐了该循环的每一种酶和辅酶，以及电子传递所需的一切，从而确立了这一点。**有什么用：同一个隔室里还装着脂肪酸氧化和若干氨基酸的降解，于是三类燃料被带到同一个地方，电子被交到同一张膜上的同一条呼吸链手里。** 大多数细菌没有这样的隔室 —— 循环的酶就在细胞质里，质膜扮演我们体内线粒体内膜的角色。",
      src: "A p.580"
    },
    {
      link_en: "now the consequences of oxaloacetate being catalytic — there are two, and they are the two ends of one arrangement",
      link_cn: "现在说草酰乙酸「催化性」的后果 —— 有两个，而它们是同一套安排的两头",
      recall_en: "the catalytic claim two steps up, now with a number on it",
      recall_cn: "两步之前那个「催化性」的说法，现在给它配上数字",
      en: "The steady-state level of oxaloacetate in the matrix is micromolar, below one millionth molar. **Citrate synthase therefore has to be strongly exergonic, or nothing would ever start at that concentration — and it is, because the condensation runs through an enzyme-bound citroyl-CoA whose thioester is then hydrolysed, and that hydrolysis drags the whole reaction forward.** At the other end of the cycle sits malate dehydrogenase — it converts malate back to oxaloacetate against an equilibrium lying far to the left, so on paper it should not run at all. **It runs because citrate synthase takes the oxaloacetate away the moment it appears and holds its concentration under a micromolar. An unfavourable step is pulled by the step that follows it, and the low concentration is the same fact seen from the other side.**",
      cn: "基质中草酰乙酸的稳态浓度是**微摩尔级**，低于百万分之一摩尔。**因此柠檬酸合酶必须是强放能的，否则在这个浓度下根本启动不了 —— 它确实是，因为这场缩合要经过一个酶结合态的柠檬酰-CoA，其硫酯随后被水解，而这次水解把整个反应拽向前。** 在循环的另一头，苹果酸脱氢酶把苹果酸变成草酰乙酸，而这个反应的平衡远远偏向左边，纸面上根本不该跑得动。**它跑得动，是因为草酰乙酸一出现就被柠檬酸合酶拿走，浓度被压在微摩尔以下。一个不利的步骤被紧随其后的步骤拉着走 —— 而那个极低的浓度，正是同一件事的另一面。**",
      src: "A pp.581, 587"
    },
    {
      link_en: "citrate synthase has a second trick, and it is about not wasting fuel",
      link_cn: "柠檬酸合酶还有第二个花招，讲的是别浪费燃料",
      en: "Citrate synthase is a homodimer, and each subunit has one large rigid domain and one smaller flexible domain with the active site between them. **The two substrates must bind in a fixed order: oxaloacetate goes first and its binding swings the flexible domain over, and only that movement creates the binding site for acetyl-CoA.** A further closing motion then triggers the thioester hydrolysis. **What it is for: acetyl-CoA is an expensive molecule with a high-energy bond, and an enzyme that could grab it before the other substrate was in place would sometimes cut that bond for nothing. Making the site for acetyl-CoA appear only after oxaloacetate has arrived means the thioester is never cut without a partner to receive the acetyl group.** This ordered binding, with the enzyme shaping itself first to one substrate and then to the reaction intermediate, is induced fit doing a third job — enforcing an order.",
      cn: "柠檬酸合酶是同源二聚体，每个亚基有一个大而刚性的结构域和一个较小、较柔性的结构域，活性位点夹在两者之间。**两个底物必须按固定顺序结合：草酰乙酸先来，它的结合把柔性结构域摆过去，而只有这个动作才造出乙酰-CoA 的结合位点。** 随后再一次合拢的动作，触发硫酯的水解。**有什么用：乙酰-CoA 是带高能键的昂贵分子，如果酶能在另一个底物到位之前就抓住它，那这条键有时就会被白白切断。让乙酰-CoA 的位点等草酰乙酸到了才出现，就意味着硫酯绝不会在没有接手方的情况下被切开。** 这种有序结合 —— 酶先按底物塑形、再按反应中间物塑形 —— 就是**诱导契合**在做第三份工作：强制规定先后顺序。",
      src: "A p.581, figure 16-8",
      see: [{ id: "L-6-4-1", en: "induced fit watched at work in three enzymes", cn: "在三个酶身上看诱导契合" }]
    },
    {
      link_en: "the second enzyme keeps a metal in its active site, and that metal gives it a second career",
      link_cn: "第二个酶在活性位点里养着一个金属，而这个金属给了它第二份职业",
      en: "Aconitase, which rearranges citrate into isocitrate, holds an iron-sulfur centre at its active site: three of its cysteines bind three iron atoms, and a fourth iron grips a carboxyl group of citrate itself, so the cluster both binds the substrate and does chemistry on it. **When a cell runs short of iron the cluster falls apart and aconitase activity is lost — and the bare protein left behind is iron regulatory protein 1, which binds short structures called iron response elements in two messenger RNAs.** Sitting on the 5-prime end of the ferritin message, which encodes the protein cells store iron in, it blocks ferritin from being made; sitting on the 3-prime end of the transferrin receptor message, which encodes the protein that takes iron into a cell, it stabilises that message so more receptor is made. **What it is for: an iron-starved cell takes up more iron and stores less, and the switch that decides it is a citric acid cycle enzyme reading its own cofactor as the signal.** When iron returns the cluster reassembles and the protein goes back to being an enzyme.",
      cn: "**乌头酸酶**负责把柠檬酸重排成异柠檬酸，它的活性位点里带着一个**铁硫中心**：三个半胱氨酸结合三个铁原子，第四个铁则抓住柠檬酸自身的一个羧基，所以这个簇既参与结合底物，也参与催化。**细胞一旦缺铁，这个簇就散架，乌头酸酶活性随之丧失 —— 而剩下的那个裸蛋白就是铁调节蛋白 1，它会结合两条 mRNA 上叫做「铁响应元件」的小结构。** 坐在铁蛋白 mRNA 的 5′ 端时（铁蛋白就是细胞用来储铁的蛋白），它阻断铁蛋白的合成；坐在转铁蛋白受体 mRNA 的 3′ 端时（转铁蛋白受体负责把铁运进细胞），它稳定这条 mRNA，让受体被造得更多。**有什么用：缺铁的细胞于是多摄取、少储存，而做这个决定的开关，是一个把自己的辅因子当信号来读的柠檬酸循环的酶。** 铁一回来，簇重新装好，蛋白又变回酶。",
      src: "A pp.582-585, Box 16-1"
    },
    {
      link_en: "the third enzyme comes in two versions, and only one of them belongs to this cycle",
      link_cn: "第三个酶有两个版本，而只有一个属于这个循环",
      en: "Isocitrate dehydrogenase oxidises isocitrate and knocks a carbon off it as carbon dioxide, and every cell has two forms of it with the same overall reaction: one takes NAD+ and one takes NADP+, a version of NAD+ carrying an extra phosphate. **The NAD-dependent form is in the mitochondrial matrix and is the one the cycle uses. The NADP-dependent form, in both matrix and cytosol, is there to make NADPH — the reduced carrier that reductive biosynthesis runs on, fatty acid and sterol synthesis above all.** So one reaction serves two completely different budgets depending on which cofactor the enzyme takes, and this is one of the places the NADPH for building fat comes from.",
      cn: "**异柠檬酸脱氢酶**氧化异柠檬酸，并把它的一个碳以二氧化碳的形式敲掉；每个细胞里都有它的两种形式，总反应相同：一种用 NAD+，一种用 **NADP+**，即多带一个磷酸的 NAD+。**依赖 NAD 的那种位于线粒体基质，是本循环用的那个。依赖 NADP 的那种在基质和细胞质里都有，它的职责是生产 NADPH —— 还原性生物合成靠的就是这个还原型载体，首先是脂肪酸与固醇的合成。** 于是同一个反应，因为酶收哪种辅因子而服务于两本完全不同的账；造脂肪所需的 NADPH，来源之一就在这里。",
      src: "A pp.582-583",
      see: [{ id: "L-21-1-1", en: "fatty acid synthesis, where that NADPH is spent", cn: "脂肪酸合成 —— 这些 NADPH 花在哪里" }]
    },
    {
      link_en: "the fourth enzyme is a machine you have already met",
      link_cn: "第四个酶是一台你已经见过的机器",
      recall_en: "the same five-cofactor machine that turns pyruvate into the acetyl-CoA of step 1",
      recall_cn: "把丙酮酸变成第 1 步那个乙酰-CoA 的，正是同一台五辅因子的机器",
      en: "The alpha-ketoglutarate dehydrogenase complex performs the cycle's second oxidative decarboxylation, and it is built like the pyruvate dehydrogenase complex — the multi-enzyme machine that converts pyruvate into acetyl-CoA before the cycle begins. Both, and a third complex that degrades isoleucine, leucine and valine, use the same five cofactors — thiamine pyrophosphate, coenzyme A, lipoate, FAD and NAD+ — and all three have homologous E1 and E2 subunits and an **identical** E3 subunit. **They can share E3 because E3's substrate is a reduced lipoate, and a reduced lipoate looks the same whatever was oxidised to produce it. Learning one complex gives you three, and the reason they are alike is that all three descend from one ancestral set of genes by duplication.**",
      cn: "**α-酮戊二酸脱氢酶复合体**执行本循环的第二次氧化脱羧，而它的构造与**丙酮酸脱氢酶复合体**如出一辙 —— 后者是在循环开始之前把丙酮酸转成乙酰-CoA 的那台多酶机器。这两者，加上第三个降解异亮氨酸、亮氨酸、缬氨酸的复合体，用的是同样五种辅因子：焦磷酸硫胺素、辅酶 A、硫辛酸、FAD、NAD+；三者的 E1 与 E2 亚基同源，而 **E3 亚基完全相同**。**它们之所以能共用 E3，是因为 E3 的底物是还原型硫辛酸 —— 不管上游氧化的是什么，还原型硫辛酸长得都一样。学会一个复合体等于学会三个，而它们相像的原因，是三者都由同一套祖先基因经重复而来。**",
      src: "A p.583",
      see: [{ id: "7-8-5", en: "the pyruvate dehydrogenase complex in full", cn: "丙酮酸脱氢酶复合体的完整讲法" }]
    },
    {
      link_en: "the fifth is where the cycle makes a nucleoside triphosphate with its own hands",
      link_cn: "第五个酶，是这个循环唯一亲手做出核苷三磷酸的地方",
      en: "Succinyl-CoA synthetase carries out the only substrate-level phosphorylation in the cycle, meaning the only place a phosphoryl group is transferred straight onto a nucleoside diphosphate by an enzyme rather than by the respiratory chain. **The energy comes from the thioester bond of succinyl-CoA and is handed along a three-step relay: a phosphoryl group first displaces coenzyme A to give a high-energy acyl phosphate, then moves onto histidine 246 of the enzyme itself, and only then onto GDP or ADP.** Two helix dipoles, one from each subunit, park partial positive charges beside the negatively charged phosphohistidine and hold it steady. Animal cells have two isozymes, one specific for ADP and one for GDP, so the product is ATP in some tissues and GTP in others; nucleoside diphosphate kinase interconverts the two with no free-energy change, **so the choice makes no difference to the energy balance.**",
      cn: "**琥珀酰-CoA 合成酶**完成本循环唯一一次**底物水平磷酸化** —— 意思是全循环只有这一处，磷酰基是由一个酶直接转到核苷二磷酸上，而不是由呼吸链来给。**能量来自琥珀酰-CoA 的硫酯键，并通过三步接力传下去：先由一个磷酰基顶掉辅酶 A，生成高能的酰基磷酸；再转到酶自身的组氨酸 246 上；此后才交给 GDP 或 ADP。** 两条螺旋的偶极（每个亚基各出一条）把部分正电荷摆在带负电的磷酸组氨酸旁边，稳住它。动物细胞有两种同工酶，一种专一于 ADP，一种专一于 GDP，所以产物在有些组织是 ATP、在另一些是 GTP；核苷二磷酸激酶在两者之间互换且没有自由能变化，**所以选哪个对能量总账毫无影响。**",
      src: "A pp.585-586, figure 16-13"
    },
    {
      link_en: "the sixth enzyme is the only one not floating in the matrix, and it is the one a poison stops",
      link_cn: "第六个酶是唯一不漂在基质里的，也是能被一个毒物按停的那个",
      en: "Succinate dehydrogenase is embedded in the inner mitochondrial membrane — the plasma membrane in bacteria — and it is the only cycle enzyme that is. It carries a covalently bound FAD and three iron-sulfur clusters, and electrons from succinate run through them straight into the respiratory chain instead of being released on a soluble carrier. **What it is for, and what it costs: these electrons enter the chain lower down than the electrons NADH delivers, which is why the FADH2 of this step is worth less ATP than an NADH.** Malonate is a three-carbon diacid that looks like succinate, is not normally present in cells, and is a strong competitive inhibitor of this enzyme — it occupies the active site without reacting. **Add malonate to isolated mitochondria and the entire citric acid cycle stops, which is the clearest demonstration there is that one small molecule resembling one substrate can shut a whole pathway down.**",
      cn: "**琥珀酸脱氢酶**嵌在线粒体内膜上（细菌中则在质膜上），是本循环唯一这样的酶。它带着一个共价结合的 FAD 和三个铁硫簇，来自琥珀酸的电子穿过它们**直接进入呼吸链**，而不是被交到某个可溶载体上带走。**有什么用、又付出什么代价：这些电子进入呼吸链的位置比 NADH 送来的电子低，所以这一步的 FADH2 换得的 ATP 比一个 NADH 少。** **丙二酸**是一个长得像琥珀酸的三碳二元酸，正常细胞里并不存在，却是这个酶的强**竞争性抑制剂** —— 它占着活性位点却不反应。**把丙二酸加到分离的线粒体里，整个柠檬酸循环就停摆 —— 这是「一个像底物的小分子能让一整条通路瘫痪」最干净的演示。**",
      src: "A p.586",
      see: [
        { id: "L-19-1-1", en: "where those electrons go, and what else blocks the chain", cn: "这些电子去了哪里，以及还有什么能堵住呼吸链" },
        { id: "3-5", en: "competitive inhibition as a general mechanism", cn: "竞争性抑制的一般机制" }
      ]
    },
    {
      link_en: "one more thing about citrate, and it changes what you can say about the carbon atoms",
      link_cn: "关于柠檬酸还有一件事，它会改变你对碳原子能说的话",
      en: "Citrate has two identical arms and no chiral centre, so it is a symmetric molecule. In the mid-1940s acetate labelled with carbon-14 in its carboxyl group was fed to a tissue preparation, and the alpha-ketoglutarate recovered afterwards was expected to carry half the label in each of its two carboxyls. **All of it was in one, which led the investigators to conclude that citrate could not be an intermediate at all.** In 1948 Alexander Ogston pointed out the flaw: **an asymmetric active site holds a symmetric molecule at three points, so there is only one way it can sit, and only one of its two identical arms is ever used. Symmetry in a substrate says nothing about symmetry in what the enzyme does to it.** Molecules like this are now called prochiral. **The related bookkeeping point is examined constantly: the two carbons that leave as carbon dioxide in one turn are not the two that entered as the acetyl group, because succinate and fumarate are themselves symmetric and scramble the two ends between them.**",
      cn: "柠檬酸有两条相同的臂、没有手性中心，所以它是个**对称分子**。1940 年代中期，人们把羧基上带碳-14 标记的乙酸喂给组织制剂，预期回收到的 α-酮戊二酸会在两个羧基上各带一半标记。**结果标记全在同一个羧基上，研究者由此断定柠檬酸根本不可能是中间物。** 1948 年 Alexander Ogston 指出了这个推理的漏洞：**不对称的活性位点以三个点抓住一个对称分子，于是它只有一种摆法，两条相同的臂里永远只有一条会被用到。底物本身对称，并不说明酶对它做的事也对称。** 这样的分子如今称为**前手性分子**。**与之相连的那笔账则是常考点：一圈里以二氧化碳形式离开的那两个碳，并不是这一圈作为乙酰基进来的那两个 —— 因为琥珀酸和延胡索酸本身是对称的，它们把分子的两端搅混了。**",
      src: "A pp.587-589, Box 16-2, figure 16-14"
    },
    {
      link_en: "and finally the arithmetic, where two different numbers are both in circulation",
      link_cn: "最后是算术，这里有两个数字同时在流通",
      en: "One turn of the cycle takes in one acetyl group and gives out two molecules of carbon dioxide, three NADH, one FADH2 and one GTP or ATP. **Turning those carriers into a number for ATP is where two conventions part. The older one counts about 3 ATP per NADH and about 2 per FADH2, which gives 12 ATP per acetyl group and 38 per glucose, split 8 + 6 + 24. The measured stoichiometries are about 2.5 per NADH and about 1.5 per FADH2, which gives 30 to 32 ATP per glucose** — a range, not a single number, because cytosolic NADH from glycolysis is worth either 3 or 5 ATP depending on which shuttle carries its electrons into the matrix. **The biochemistry is identical in both counts; only the assumed ATP-per-oxidation differs.** Answer with whichever convention the question was set in, and be able to say what the difference is.",
      cn: "循环转一圈，收进一个乙酰基，交出两分子二氧化碳、三个 NADH、一个 FADH2 和一个 GTP 或 ATP。**把这些载体折算成 ATP 的数目，正是两套惯例分道扬镳的地方。较老的一套按每个 NADH 约 3 个 ATP、每个 FADH2 约 2 个来算，于是每个乙酰基 12 个 ATP、每分子葡萄糖 38 个，拆成 8 + 6 + 24。实测的化学计量则是每个 NADH 约 2.5 个、每个 FADH2 约 1.5 个，于是每分子葡萄糖 30 到 32 个** —— 是一个区间而不是一个数，因为糖酵解产生的胞质 NADH 依其电子由哪种穿梭机制送进基质，值 3 个或 5 个 ATP。**两种算法下的生物化学完全一样，不同的只是每次氧化折合多少 ATP 这个假定。** 题目按哪套惯例出，就按哪套答，同时要说得出这个差别在哪里。",
      src: "A p.589, table 16-1"
    }
  ],
  terms: [
    { en: "acetyl-CoA", cn: "乙酰-CoA",
      def_en: "A two-carbon acetyl group held on coenzyme A by a thioester bond. Sugars, fatty acids and most amino acids all converge on it, and its thioester is a high-energy bond, which is why an enzyme that handles it takes care not to cut it wastefully.",
      def_cn: "通过硫酯键挂在辅酶 A 上的两碳乙酰基。糖、脂肪酸和大多数氨基酸最后都汇聚到它这里；它的硫酯是高能键，所以处理它的酶都很小心，不会白白把这条键切掉。" },
    { en: "oxaloacetate", cn: "草酰乙酸",
      def_en: "The four-carbon acceptor that the acetyl group is attached to in the first reaction and that is handed back in the last. Consumed and regenerated in one turn, so it works catalytically — its concentration in the matrix is micromolar and that is enough.",
      def_cn: "第一步接住乙酰基、最后一步又被交还回来的四碳受体。一圈之内被消耗又被再生，所以起的是催化作用 —— 它在基质中的浓度是微摩尔级，而这已经够了。" },
    { en: "prochiral molecule", cn: "前手性分子",
      def_en: "A molecule with no chiral centre that still reacts asymmetrically, because an asymmetric active site binds it at three points and allows only one orientation. Citrate is the classic case; Ogston explained it in 1948.",
      def_cn: "本身没有手性中心、却仍然发生不对称反应的分子，因为不对称的活性位点以三点结合它，只允许一种取向。柠檬酸是经典案例，Ogston 于 1948 年给出解释。" },
    { en: "moonlighting enzyme", cn: "身兼二职的酶",
      def_en: "One protein doing two unrelated jobs. Cytosolic aconitase without its iron-sulfur cluster is iron regulatory protein 1, which binds the ferritin and transferrin-receptor messages and switches the cell towards taking iron up.",
      def_cn: "一个蛋白干两件互不相干的活。失去铁硫簇的胞质乌头酸酶就是铁调节蛋白 1，它结合铁蛋白与转铁蛋白受体的 mRNA，把细胞切换到摄取铁的状态。" },
    { en: "ordered bisubstrate mechanism", cn: "有序双底物机制",
      def_en: "Two substrates that must bind in a fixed sequence. In citrate synthase oxaloacetate binds first and the conformational change it induces creates the acetyl-CoA site, so the acetyl-CoA thioester is never cut before there is something to receive the acetyl group.",
      def_cn: "两个底物必须按固定顺序结合。柠檬酸合酶中草酰乙酸先结合，它诱导的构象变化才造出乙酰-CoA 的位点，因此乙酰-CoA 的硫酯绝不会在没有接手方时被切开。" },
    { en: "malonate", cn: "丙二酸",
      def_en: "A three-carbon diacid resembling succinate, absent from normal cells, and a strong competitive inhibitor of succinate dehydrogenase. Adding it to isolated mitochondria stops the whole citric acid cycle.",
      def_cn: "一个像琥珀酸的三碳二元酸，正常细胞中不存在，是琥珀酸脱氢酶的强竞争性抑制剂。把它加进分离的线粒体，整个柠檬酸循环就停下来。" },
    { en: "substrate-level phosphorylation", cn: "底物水平磷酸化",
      def_en: "A phosphoryl group transferred straight onto ADP or GDP by an enzyme, using the energy of a high-energy bond in a substrate, rather than by the respiratory chain. The cycle has exactly one, at succinyl-CoA synthetase.",
      def_cn: "由一个酶利用底物中某条高能键的能量，把磷酰基直接转到 ADP 或 GDP 上，而不是经由呼吸链。本循环恰好只有一处，在琥珀酰-CoA 合成酶。" }
  ]
};

/* ------------------------------------------------------------------ L-17-2-1 */
window.BIOLITE_SPINE["L-17-2-1"] = {
  assumed: ["ATP", "ADP", "AMP", "coenzyme A", "NAD+", "NADH", "FAD", "FADH2",
            "enzyme", "gene", "transcription factor", "cytosol", "amino acid",
            "active site", "substrate", "isozyme", "molecular oxygen"],
  nodeTitle_en: "Fatty acid oxidation",
  nodeTitle_cn: "脂肪酸的氧化",
  title_en: "Why a fatty acid has to pass a gate before it can be burned, and what the gate decides",
  title_cn: "脂肪酸为什么必须先过一道闸门才能被烧掉，以及这道门决定了什么",
  steps: [
    {
      en: "A fatty acid is a long unbranched hydrocarbon chain with a carboxyl group at one end. **Almost every carbon in that chain is fully reduced — bonded only to hydrogen and to other carbons — so there is far more to oxidise per gram than in a sugar, whose carbons already carry oxygen. That is why fat is the storage fuel and sugar is the fast one.** Getting the energy out means chopping the chain up two carbons at a time and oxidising each piece, and the machinery that does the chopping sits in the mitochondrial matrix, the space inside the inner membrane of a mitochondrion.",
      cn: "**脂肪酸**是一条一端带羧基的长直链烃。**这条链上几乎每个碳都是完全还原的 —— 只与氢和别的碳成键 —— 所以按每克算，它可供氧化的东西远多于糖，因为糖的碳上已经挂着氧了。这就是脂肪当储备燃料、糖当快速燃料的原因。** 要把能量取出来，就得把这条链两个碳两个碳地剁开、逐块氧化，而干这件事的机器待在**线粒体基质**里 —— 也就是线粒体内膜围出来的那个空间。",
      src: "A p.607"
    },
    {
      link_en: "and the fuel starts on the wrong side of two membranes",
      link_cn: "而燃料一开始待在两层膜的另一侧",
      en: "A free fatty acid in the cytosol is first activated: an enzyme joins it to coenzyme A through a thioester bond, giving a fatty acyl-CoA. **The cost is unusual and worth getting right — one ATP goes to AMP plus pyrophosphate, and the pyrophosphate is then hydrolysed as well, so two phosphoanhydride bonds are broken rather than one and activation costs the equivalent of two ATP.** That double expense buys two things: the reaction is made effectively irreversible, and the fatty acid now carries a high-energy thioester bond that every later step relies on.",
      cn: "细胞质里的游离脂肪酸首先要被**活化**：一个酶通过**硫酯键**把它接到辅酶 A 上，生成**脂酰-CoA**。**这里的代价不寻常，值得记准 —— 一个 ATP 变成 AMP 加焦磷酸，而焦磷酸随后又被水解掉，所以被打断的是两个磷酸酐键而不是一个，活化的代价相当于两个 ATP。** 这笔加倍的开销买来两样东西：反应实际上变得不可逆；脂肪酸从此带着一个高能硫酯键，后面每一步都要靠它。",
      src: "A pp.607-608, 611"
    },
    {
      link_en: "and the activated fuel still cannot get in",
      link_cn: "可活化之后的燃料还是进不去",
      en: "A long-chain fatty acyl-CoA cannot cross the inner mitochondrial membrane. It gets in through the carnitine shuttle, three steps long: **carnitine acyltransferase I, on the outer face, moves the acyl group off coenzyme A onto carnitine — a small hydroxy-amino acid derivative — giving acylcarnitine; a transporter in the inner membrane trades that acylcarnitine inwards against a free carnitine coming out; and carnitine acyltransferase II, on the matrix face, puts the acyl group back onto a coenzyme A molecule that was already in the matrix.** So the acyl group crosses and the coenzyme A does not: the cytosolic and matrix pools of coenzyme A stay separate, each with its own concentration and its own uses.",
      cn: "长链脂酰-CoA 过不了线粒体内膜。它靠**肉碱穿梭**进去，一共三步：**外侧的肉碱脂酰转移酶 I 把脂酰基从辅酶 A 上取下、装到肉碱上（肉碱是一个小分子的羟基氨基酸衍生物），生成脂酰肉碱；内膜上的一个转运体把脂酰肉碱换进去、同时把一个游离肉碱换出来；基质侧的肉碱脂酰转移酶 II 再把脂酰基装回到一个本来就在基质里的辅酶 A 上。** 于是过去的是脂酰基，辅酶 A 并没有过去：胞质和基质的辅酶 A 各成一池，各有各的浓度和用途。",
      src: "A p.613",
      beyond: true,
      beyondNote: "The node's pages name the three-step shuttle and carnitine acyltransferases I and II. That the middle step is an antiport exchanging acylcarnitine for free carnitine, and that the two coenzyme A pools are thereby kept separate, is standard and is added here because the shuttle makes no sense without it."
    },
    {
      link_en: "and now the reason there is a gate here at all",
      link_cn: "现在说这里为什么会有一道闸门",
      en: "A fatty acyl-CoA sitting in the cytosol has two possible fates: mitochondrial enzymes can oxidise it, or cytosolic enzymes can esterify it into triacylglycerols and phospholipids — that is, into stored fat and into membrane lipid. **Which fate it meets is decided by one quantity: the rate at which the carnitine shuttle carries it inwards. That makes the shuttle the committed and rate-limiting step of the whole oxidative pathway, and it is why a cell controls fat burning at the door rather than at any of the reactions inside.** One decision at the entrance settles what happens to everything behind it.",
      cn: "待在细胞质里的脂酰-CoA 有两种可能去向：被线粒体的酶氧化掉，或者被胞质的酶酯化成三酰甘油和磷脂 —— 也就是变成储存的脂肪和膜脂。**它遇上哪一种，由一个量决定：肉碱穿梭把它往里运的速率。这使得肉碱穿梭成为整条氧化通路的承诺步骤与限速步骤，也解释了细胞为什么把「烧不烧脂肪」控制在门口，而不是控制在里面任何一个反应上。** 门口一个决定，就把后面所有事情都定下来了。",
      src: "A p.613"
    },
    {
      link_en: "so who closes the gate, and when?",
      link_cn: "那么是谁在关这道门，什么时候关？",
      recall_en: "the same gate as the step above, now seen as a switch",
      recall_cn: "还是上一步那道门，现在把它当作开关来看",
      en: "Malonyl-CoA is the first committed intermediate of fatty acid synthesis — the three-carbon unit a cell makes when it is building fatty acids rather than burning them — and **malonyl-CoA inhibits carnitine acyltransferase I**. **What it is for: the moment synthesis starts, newly made fatty acids are locked out of the mitochondrion, so a cell cannot build and burn fat at the same time. Running both would consume ATP in a circle and release the difference as heat, and this single inhibition is what prevents it.**",
      cn: "**丙二酰-CoA** 是脂肪酸合成的第一个承诺中间物 —— 细胞在造脂肪酸（而不是烧脂肪酸）时生成的那个三碳单元 —— 而**丙二酰-CoA 抑制肉碱脂酰转移酶 I**。**有什么用：合成一开始，新造出来的脂肪酸就被挡在线粒体门外，于是细胞不可能同时造脂肪又烧脂肪。两条路一起跑，只会绕着圈子消耗 ATP、把差额变成热，而阻止这件事的，就是这一个抑制。**",
      src: "A p.613",
      see: [{ id: "L-21-1-1", en: "the same interlock seen from the synthesis side", cn: "从合成那一侧看同一个互锁" }]
    },
    {
      link_en: "that switch acts in seconds. There is a second one that acts in hours",
      link_cn: "那个开关以秒计。还有一个以小时计的",
      en: "Inhibiting an enzyme changes how fast the molecules already present work. Changing how many molecules there are takes longer and lasts longer. **PPAR-alpha is a nuclear receptor: a transcription factor that binds fatty-acid-like molecules and, when it does, switches on a whole coordinated set of genes for fatty acid oxidation in muscle, adipose tissue and liver — the fatty acid transporter, both carnitine acyltransferases, and the acyl-CoA dehydrogenases that run the first oxidation. The gate and the machinery behind it are built up together, as one unit.** The visible consequence: endurance training raises PPAR-alpha in muscle, which is one reason a trained muscle oxidises fat better than an untrained one.",
      cn: "抑制一个酶，改变的是已经存在的分子干活的快慢。改变分子的数量则更慢、也更持久。**PPARα 是一种核受体：它是一类转录因子，能结合类似脂肪酸的分子，一旦结合，就在肌肉、脂肪组织和肝脏中一次性打开一整套协调的脂肪酸氧化基因 —— 脂肪酸转运体、两个肉碱脂酰转移酶，以及执行第一次氧化的那些酰基-CoA 脱氢酶。闸门和它后面的机器是被当作一个整体一起扩建的。** 看得见的后果：耐力训练会提高肌肉中 PPARα 的水平，这正是受过训练的肌肉比未训练的更会烧脂肪的原因之一。",
      src: "A p.616, figure 17-13"
    },
    {
      link_en: "past the gate, what actually happens to the chain",
      link_cn: "过了门之后，这条链究竟被怎么处理",
      en: "Inside the matrix the chain is shortened by a four-reaction cycle, and the first three reactions have one purpose between them: **oxidation, then hydration, then oxidation again put a carbonyl group — a carbon double-bonded to oxygen — onto the third carbon of the chain, the one called beta because it is second from the carboxyl carbon. That is the whole reason the pathway is called beta-oxidation.** Only then does the fourth reaction cut, and it cuts the bond next to that new carbonyl, releasing a two-carbon acetyl group on coenzyme A — acetyl-CoA — and leaving a chain two carbons shorter that goes round again. **The same three-reaction motif appears elsewhere in metabolism, so recognising it once is worth more than memorising this list: a carbonyl is installed beside a carbon-carbon bond because that is what makes the bond breakable.**",
      cn: "进了基质，这条链靠一个四反应的循环被逐步缩短，而前三个反应合起来只为一个目的：**先氧化、再水合、再氧化一次，把一个羰基（与氧双键相连的碳）装到链上的第三个碳上 —— 这个碳叫 β 碳，因为它是从羧基碳数起的第二个。这就是这条通路被叫做 β-氧化的全部原因。** 到这时第四个反应才动刀，切的正是紧挨着这个新羰基的那根键，放出一个挂在辅酶 A 上的两碳乙酰基（**乙酰-CoA**），留下短了两个碳的链再走一圈。**同样这个「三反应模式」在代谢的别处还会出现，所以认出它一次，比把这份清单背下来更值：在一根碳-碳键旁边装一个羰基，正是让这根键变得可断的手段。**",
      src: "A pp.608-609, figures 17-8 and 17-9",
      see: [{ id: "L-16-2-1", en: "the same carbonyl argument, used there to explain why the citric acid cycle is shaped as it is", cn: "同一个羰基论证 —— 在那里用来解释柠檬酸循环为什么长成那样" }]
    },
    {
      link_en: "and those four steps are not run by four all-purpose enzymes",
      link_cn: "而这四步并不是由四个万能酶来执行的",
      en: "The first oxidation is carried out by three isozymes of acyl-CoA dehydrogenase, each taking a different range of chain lengths: very-long-chain for 12 to 18 carbons, sitting in the inner membrane itself, and medium-chain for 4 to 14 and short-chain for 4 to 8, both dissolved in the matrix. **All three are flavoproteins — proteins with a tightly bound FAD — and the electrons they strip off go to that FAD and then out to the electron-transferring flavoprotein, which delivers them into the respiratory chain at ubiquinone, the small mobile carrier in the inner membrane. That is the exact junction where fat burning meets breathing.** The last three steps are split by chain length too: for 12 carbons and up they are done by the trifunctional protein, an eight-subunit assembly holding all three activities so the intermediate passes from one active site to the next without diffusing away, and below 12 carbons four separate soluble enzymes take over.",
      cn: "第一次氧化由**酰基-CoA 脱氢酶**的三个同工酶完成，各管一段链长：极长链型管 12 到 18 个碳，本身就长在内膜上；中链型管 4 到 14 个碳、短链型管 4 到 8 个碳，两者都溶在基质里。**三者都是黄素蛋白，即紧密结合着一个 FAD 的蛋白；它们剥下来的电子先交给这个 FAD，再送给电子转移黄素蛋白（ETF），由 ETF 在泛醌（内膜中那个小分子流动载体）这一层把电子交进呼吸链。这里正是「烧脂肪」与「呼吸」相接的确切接口。** 后三步同样按链长分工：12 个碳及以上由**三功能蛋白**承担 —— 一个八亚基的组装体，三种活性都在它身上，中间产物从一个活性位点直接传到下一个而不扩散跑掉；12 个碳以下则由四个各自独立的可溶性酶接手。",
      src: "A p.608, figure 17-8"
    },
    {
      link_en: "that division of labour is why one mutation gives one specific disease",
      link_cn: "正是这套分工，使得一个突变对应一种特定的疾病",
      recall_en: "the three chain-length isozymes of the step above",
      recall_cn: "上一步那三个按链长分工的同工酶",
      en: "Stored fat is normally the chief fuel of a contracting muscle, so failing to oxidise it has consequences at once. **A mutation in the gene for the medium-chain acyl-CoA dehydrogenase is the commonest inherited defect of fatty acid catabolism in the United States and in northern European populations — a defect in one isozyme, leaving chains of other lengths handled normally.** Loss of the long-chain hydroxyacyl-CoA dehydrogenase activity of the trifunctional protein is one of the most severe disorders in this group, and mutations in its subunits that knock out all three of its activities cause serious heart disease and abnormal skeletal muscle. **Chain-length specificity looked like a detail two steps ago; it is the reason these diseases are different from one another.**",
      cn: "储存的脂肪通常是收缩中的肌肉的主要燃料，所以一旦氧化不了，后果立刻显现。**中链酰基-CoA 脱氢酶基因的突变，是美国和北欧人群中最常见的脂肪酸分解代谢遗传缺陷 —— 坏的只是一个同工酶，其他链长照常处理。** 三功能蛋白上长链羟脂酰-CoA 脱氢酶活性的丧失，是这一类疾病中最严重的之一；而使它三种活性全部失效的亚基突变，会造成严重的心脏病和骨骼肌异常。**两步之前那套按链长分工看着像细节，如今它正是这些疾病彼此不同的原因。**",
      src: "A pp.616-617"
    },
    {
      link_en: "now the arithmetic, and it is where the double cost of activation shows up",
      link_cn: "现在算账 —— 活化那笔加倍的开销就在这里显形",
      recall_en: "the two phosphoanhydride bonds broken at activation, five steps up",
      recall_cn: "五步之前活化时断掉的那两个磷酸酐键",
      en: "Palmitate is the sixteen-carbon saturated fatty acid — a chain with no double bonds anywhere in it — and oxidising one of them completely consumes 23 O2 and yields 16 CO2 together with **108 ATP gross**. **The net figure per palmitate is 106, because activation spent the equivalent of two ATP before the chain ever entered the mitochondrion.** Two efficiency numbers go with it and are regularly confused: against a standard free-energy change of about 9,800 kJ per mole for burning palmitate, the 106 ATP recover about 33 percent — but recalculated from the concentrations actually present inside a cell, the recovery is above 60 percent. **Quoting 33 percent alone understates the pathway badly.**",
      cn: "一分子**软脂酸**（十六碳的饱和脂肪酸）完全氧化，消耗 23 分子 O2，生成 16 分子 CO2 和**总计 108 个 ATP**。**按每分子软脂酸计的净值是 106，因为在这条链进线粒体之前，活化就已经花掉了相当于两个 ATP 的代价。** 与之配套的还有两个效率数字，常被混为一谈：以燃烧软脂酸约 9,800 kJ/mol 的标准自由能变化为分母，106 个 ATP 回收了约 **33%**；但若按细胞内实际存在的浓度重算，回收率**超过 60%**。**只报 33% 会严重低估这条通路。**",
      src: "A p.611"
    },
    {
      link_en: "everything so far assumed a saturated chain with an even number of carbons. Three kinds of chain break that assumption",
      link_cn: "以上全都默认链是饱和的、碳数是偶数的。有三类链打破这个前提",
      en: "A double bond already in the chain stops the cycle, and the reason is geometric. **The enzymes of the pathway make and use a trans double bond at one particular position; the double bonds in a natural unsaturated fatty acid are cis and sit somewhere else.** Run linoleoyl-CoA through three ordinary rounds and it stalls as a twelve-carbon intermediate the standard enzymes cannot touch. Two auxiliary enzymes rescue it — enoyl-CoA isomerase, which moves a double bond to the right place and configuration, and the NADPH-dependent 2,4-dienoyl-CoA reductase, which removes one of two conflicting double bonds — after which the chain finishes normally. **The number to carry: linoleate gives nine acetyl-CoA in total.**",
      cn: "链上原本就有的双键会让循环卡住，原因是几何构型。**这条通路的酶生成并使用的，是位于某个特定位置的反式双键；而天然不饱和脂肪酸上的双键是顺式的，位置也不在那儿。** 把亚油酰-CoA 送进普通循环转三轮，它就卡在一个十二碳中间物上，标准的那几个酶碰都碰不了。两个辅助酶把它救回来 —— **烯脂酰-CoA 异构酶**把双键挪到正确的位置和构型上，依赖 NADPH 的 **2,4-二烯脂酰-CoA 还原酶**除掉两个互相冲突的双键中的一个 —— 此后这条链就能正常走完。**要记的数字：亚油酸总共给出九分子乙酰-CoA。**",
      src: "A p.612, figure 17-11"
    },
    {
      link_en: "the second exception is a chain with an odd number of carbons",
      link_cn: "第二个例外是碳数为奇数的链",
      en: "An odd-numbered chain cannot end in a clean two-carbon piece: the last round leaves propionyl-CoA, three carbons, which the cycle cannot use. Three extra reactions convert it into something the citric acid cycle can take. **A biotin-dependent carboxylase — biotin is the vitamin cofactor that carries carbon dioxide for carboxylation reactions — adds a carbon to give methylmalonyl-CoA, and methylmalonyl-CoA mutase then rearranges it into succinyl-CoA, an intermediate of the citric acid cycle. That mutase requires coenzyme B12, which is where vitamin B12 becomes load-bearing for fat catabolism rather than only for blood.** When this route fails, propionate and its metabolites build up in blood and urine: propionic acidemia. Its treatments each attack a different source: severe dietary protein restriction, because degrading amino acids is a major source of propionyl-CoA; carnitine, to help clear the accumulated acyl groups; antibiotics against gut bacteria, which themselves make odd-chain and branched-chain fatty acids; and high-dose biotin for the patients whose defect is in attaching biotin to the enzyme rather than in the enzyme itself. **That last treatment is the clearest argument there is for knowing which cofactor a step needs.**",
      cn: "奇数碳的链没法以一个干净的两碳片段收尾：最后一轮剩下的是三个碳的**丙酰-CoA**，循环用不了它。三个额外的反应把它变成柠檬酸循环收得下的东西。**一个依赖生物素的羧化酶先给它加一个碳，生成甲基丙二酰-CoA（生物素是替羧化反应搬运二氧化碳的那个维生素辅因子）；甲基丙二酰-CoA 变位酶再把它重排成琥珀酰-CoA，也就是柠檬酸循环的一个中间物。这个变位酶需要辅酶 B12 —— 维生素 B12 正是在这里成为脂肪分解代谢的承重环节，而不只是血液学里的东西。**这条路线失效时，丙酸及其代谢物在血和尿中堆积：**丙酸血症**。它的几种治疗各打一个来源：严格限制膳食蛋白质，因为氨基酸降解是丙酰-CoA 的一大来源；补充肉碱，帮助清除堆积的酰基；用抗生素对付肠道细菌，因为这些细菌本身会产生奇数碳和支链脂肪酸；以及对那些缺陷在于「把生物素装到酶上」而非酶本身的患者，给予大剂量生物素。**最后这一条，是「知道某一步需要哪个辅因子有什么用」最清楚的答案。**",
      src: "A p.613, figure 17-12"
    },
    {
      link_en: "the third exception cannot be rescued at all, and the reason goes back to the carbonyl",
      link_cn: "第三个例外根本没法救，原因要回到那个羰基上",
      recall_en: "beta-oxidation exists to put a carbonyl on the beta carbon, six steps up",
      recall_cn: "六步之前说过：β-氧化存在的意义就是在 β 碳上装一个羰基",
      en: "Phytanic acid is a branched fatty acid carrying a methyl group on its beta carbon, and it comes from an avoidable place: dairy products, the fat of ruminant animals, meat and fish. **A substituent sitting on the beta carbon makes beta-oxidation impossible rather than merely slow, because the beta carbon is exactly where the pathway has to install its carbonyl.** Peroxisomes — small organelles that carry out oxidations outside the mitochondrion — run a different pathway on it: alpha-oxidation, which removes one carbon from the carboxyl end instead of two. Phytanoyl-CoA is hydroxylated on its alpha carbon using molecular oxygen, that product is decarboxylated to an aldehyde one carbon shorter, and the aldehyde is oxidised to an acid whose beta carbon is now clear, so ordinary beta-oxidation can take it. **Refsum disease is a genetic defect of phytanoyl-CoA hydroxylase: blood phytanic acid runs very high and severe neurological damage follows, including blindness and deafness.**",
      cn: "**植烷酸**是一种支链脂肪酸，β 碳上带着一个甲基；它的来源是可以规避的：乳制品、反刍动物的脂肪、肉类和鱼类。**β 碳上坐着一个取代基，会让 β-氧化变得不可能，而不只是变慢 —— 因为 β 碳恰恰是这条通路必须装上羰基的地方。** **过氧化物酶体**（在线粒体之外执行氧化反应的小细胞器）对它运行的是另一条路：**α-氧化**，每次从羧基端只去掉一个碳，而不是两个。植烷酰-CoA 先在 α 碳上被羟基化（用到分子氧），产物脱羧生成一个短一个碳的醛，醛再被氧化成酸 —— 此时它的 β 碳空出来了，普通 β-氧化就能接手。**Refsum 病就是植烷酰-CoA 羟化酶的遗传缺陷：血中植烷酸极高，随之而来的是严重的神经损害，包括失明和耳聋。**",
      src: "A p.618, figure 17-15",
      openQuestion_en: "How high phytanic acid produces that neurological damage is stated as unknown.",
      openQuestion_cn: "高浓度植烷酸究竟通过什么机制造成这种神经损害，教材明言尚不清楚。"
    },
    {
      link_en: "and peroxisomes do not only handle branched chains",
      link_cn: "而过氧化物酶体处理的不只是支链",
      recall_en: "the same organelle as the step above, now running the ordinary four-step cycle",
      recall_cn: "还是上一步那个细胞器，这次跑的是普通的四步循环",
      en: "Peroxisomes run a beta-oxidation of their own, with the same four steps, and it differs from the mitochondrial one in three ways that all matter. **It prefers very-long-chain fatty acids, so it handles what the mitochondrial enzymes will not take. Its first oxidation passes the electrons straight to O2 and makes hydrogen peroxide, so that step's energy is lost as heat instead of being saved — this is a chain-shortening service, not an energy-yielding pathway. And the NADH made in its second oxidation cannot be reoxidised inside the peroxisome, so the reducing equivalents and the acetyl-CoA both have to be exported.** In plant cells peroxisomes, and not mitochondria, are the major site of fatty acid oxidation. Two severe diseases mark this compartment: Zellweger syndrome, in which peroxisomes cannot be assembled at all, and X-linked adrenoleukodystrophy, in which they fail to oxidise very-long-chain fatty acids for want of a working transporter — both let very-long-chain fatty acids accumulate in the blood.",
      cn: "过氧化物酶体自己也跑一套 β-氧化，步骤同样是四步，但与线粒体那套有三点不同，而且每一点都有分量。**第一，它偏好极长链脂肪酸，处理的正是线粒体的酶不收的那部分。第二，它的第一次氧化把电子直接交给 O2、生成过氧化氢，所以这一步的能量以热散掉而不是被保存 —— 这是一项「把链剪短」的服务，不是一条产能通路。第三，它第二次氧化生成的 NADH 没法在过氧化物酶体内被重新氧化，所以还原当量和乙酰-CoA 都得被输出出去。** 在植物细胞里，脂肪酸氧化的主要场所是过氧化物酶体而不是线粒体。两种重病标记着这个隔室：**Zellweger 综合征**，过氧化物酶体根本装配不出来；以及 **X 连锁肾上腺脑白质营养不良**，过氧化物酶体因缺少一个有功能的转运体而无法氧化极长链脂肪酸 —— 两者都会让极长链脂肪酸在血中堆积。",
      src: "A p.617, figure 17-14"
    }
  ],
  terms: [
    { en: "carnitine shuttle", cn: "肉碱穿梭",
      def_en: "The three-step system that carries a long-chain acyl group into the mitochondrial matrix: acyltransferase I loads it onto carnitine, a membrane transporter exchanges acylcarnitine for free carnitine, and acyltransferase II reloads it onto matrix coenzyme A. Because it decides whether a cytosolic acyl-CoA is burned or esterified into fat, it is the committed and rate-limiting step of fatty acid oxidation.",
      def_cn: "把长链脂酰基送进线粒体基质的三步系统：转移酶 I 把它装到肉碱上，膜上的转运体以脂酰肉碱换出游离肉碱，转移酶 II 再把它装回基质里的辅酶 A 上。由于它决定了胞质脂酰-CoA 是被烧掉还是被酯化成脂肪，它是脂肪酸氧化的承诺步骤与限速步骤。" },
    { en: "carnitine acyltransferase I", cn: "肉碱脂酰转移酶 I",
      def_en: "The first enzyme of the carnitine shuttle, and the point where malonyl-CoA inhibits fatty acid oxidation. This single inhibition is what stops synthesis and breakdown from running at the same time and burning ATP in a circle.",
      def_cn: "肉碱穿梭的第一个酶，也是丙二酰-CoA 抑制脂肪酸氧化的作用点。正是这一个抑制，阻止了合成与分解同时运转、绕着圈子烧掉 ATP。" },
    { en: "beta-oxidation", cn: "β-氧化",
      def_en: "The four-reaction cycle that shortens a fatty acyl chain by two carbons per turn. The first three reactions — oxidation, hydration, oxidation — exist to put a carbonyl on the beta carbon; the fourth cuts the bond beside it and releases acetyl-CoA.",
      def_cn: "每转一圈把脂酰链缩短两个碳的四反应循环。前三个反应（氧化、水合、氧化）的存在是为了在 β 碳上装一个羰基；第四个反应切开它旁边那根键，放出乙酰-CoA。" },
    { en: "VLCAD / MCAD / SCAD", cn: "VLCAD／MCAD／SCAD",
      def_en: "The three chain-length-specific isozymes of acyl-CoA dehydrogenase that run the first oxidation: very-long-chain for 12-18 carbons in the inner membrane, medium-chain for 4-14 and short-chain for 4-8 in the matrix. All are flavoproteins with tightly bound FAD.",
      def_cn: "执行第一次氧化的三个按链长分工的酰基-CoA 脱氢酶同工酶：极长链型管 12–18 碳、位于内膜；中链型管 4–14 碳、短链型管 4–8 碳，都在基质中。三者都是紧密结合 FAD 的黄素蛋白。" },
    { en: "electron-transferring flavoprotein", cn: "电子转移黄素蛋白（ETF）",
      def_en: "The carrier that takes electrons from the acyl-CoA dehydrogenases and hands them into the respiratory chain at the level of ubiquinone. It is the precise junction between fatty acid oxidation and respiration.",
      def_cn: "从酰基-CoA 脱氢酶手里接过电子、在泛醌这一层把它们交进呼吸链的载体。它正是脂肪酸氧化与呼吸之间的确切接口。" },
    { en: "trifunctional protein", cn: "三功能蛋白",
      def_en: "An eight-subunit assembly on the inner mitochondrial membrane carrying the last three beta-oxidation activities for chains of 12 carbons and up, passing the intermediate between active sites without releasing it. Shorter chains are handled by four separate soluble enzymes.",
      def_cn: "线粒体内膜上的八亚基组装体，为 12 碳及以上的链承担 β-氧化的后三种活性，中间产物在活性位点之间传递而不被释放。更短的链则由四个各自独立的可溶性酶处理。" },
    { en: "net yield of 106 ATP", cn: "净产量 106 个 ATP",
      def_en: "Complete oxidation of one palmitate gives 108 ATP gross, but activation broke two phosphoanhydride bonds rather than one, so the net is 106. Efficiency is about 33% against standard free energies and above 60% at real intracellular concentrations.",
      def_cn: "一分子软脂酸完全氧化总产 108 个 ATP，但活化断的是两个磷酸酐键而不是一个，所以净值是 106。以标准自由能计效率约 33%，按细胞内实际浓度计则超过 60%。" },
    { en: "propionyl-CoA to succinyl-CoA route", cn: "丙酰-CoA → 琥珀酰-CoA 路线",
      def_en: "How an odd-numbered chain is finished: a biotin-dependent carboxylase converts propionyl-CoA to methylmalonyl-CoA, and methylmalonyl-CoA mutase, which needs coenzyme B12, rearranges that into succinyl-CoA for the citric acid cycle. Failure of the route is propionic acidemia.",
      def_cn: "奇数碳链的收尾方式：依赖生物素的羧化酶把丙酰-CoA 变成甲基丙二酰-CoA，需要辅酶 B12 的甲基丙二酰-CoA 变位酶再把它重排成琥珀酰-CoA，送进柠檬酸循环。这条路线失效就是丙酸血症。" },
    { en: "peroxisomal beta-oxidation", cn: "过氧化物酶体 β-氧化",
      def_en: "A parallel four-step pathway that prefers very-long-chain fatty acids, passes the electrons of its first oxidation straight to O2 and loses that energy as heat, and must export its NADH and acetyl-CoA. It is the major site in plant cells; Zellweger syndrome and X-linked adrenoleukodystrophy are its failure modes.",
      def_cn: "一条平行的四步通路，偏好极长链脂肪酸，第一次氧化把电子直接交给 O2、该步能量以热散失，其 NADH 与乙酰-CoA 都必须输出。它是植物细胞中的主要场所；Zellweger 综合征与 X 连锁肾上腺脑白质营养不良是它的失效形式。" },
    { en: "alpha-oxidation", cn: "α-氧化",
      def_en: "A peroxisomal route that shortens a chain by one carbon at a time. It exists because phytanic acid carries a methyl on its beta carbon, which makes beta-oxidation structurally impossible; the defect that blocks it is Refsum disease.",
      def_cn: "过氧化物酶体里每次只把链缩短一个碳的路线。它之所以存在，是因为植烷酸的 β 碳上带着甲基，使 β-氧化在结构上不可能；阻断这条路线的缺陷就是 Refsum 病。" }
  ]
};

/* ------------------------------------------------------------------ L-18-1-1 */
window.BIOLITE_SPINE["L-18-1-1"] = {
  assumed: ["ATP", "ADP", "GTP", "NAD+", "NADP+", "coenzyme A", "enzyme",
            "amino acid", "protein", "peptide bond", "cytosol", "substrate",
            "active site", "insulin", "pyruvate", "lactate", "glycolysis",
            "allosteric enzyme", "plasma membrane", "receptor"],
  nodeTitle_en: "Metabolic fates of amino groups",
  nodeTitle_cn: "氨基的代谢去向",
  title_en: "Nitrogen has to be collected before it can be removed, and it must never travel free",
  title_cn: "氮必须先被收集起来才谈得上移走，而且一路上绝不能是游离的",
  steps: [
    {
      en: "A cell has no store for amino acids. Fat goes into droplets and glucose into glycogen, but a surplus amino acid has nowhere to wait, **so it is burned, and burning it means dealing with its nitrogen.** Three situations put amino acids into the furnace: proteins turn over constantly and the amino acids released are not all needed for new protein; a meal delivers more than protein synthesis can use; and, when carbohydrate is unavailable or cannot be used — in starvation and in uncontrolled diabetes mellitus — the body degrades its own proteins for fuel. **That third case is why an untreated diabetic wastes muscle while blood glucose is high.** Across a normal day this accounts for only 10 to 15 percent of a human's energy.",
      cn: "细胞没有**氨基酸的储库**。脂肪能进脂滴、葡萄糖能变成糖原，可多出来的氨基酸无处可等，**于是它被烧掉 —— 而烧掉它，就必须处理它身上的氮**。三种情形会把氨基酸送进炉子：蛋白质一直在周转，释放出来的氨基酸并非都被新蛋白需要；一餐送进来的量超过了合成蛋白所能用掉的；以及当糖类拿不到或用不上时（饥饿，以及**未受控制的糖尿病**），身体拆自己的蛋白当燃料。**第三种情形正是「未经治疗的糖尿病人血糖很高、却在消耗肌肉」的原因。** 平常一天里，这条路只占人体产能的 **10% 到 15%**。",
      src: "A pp.625, 639"
    },
    {
      link_en: "and the first thing that happens to an amino acid being burned is that it comes apart in two",
      link_cn: "而一个要被烧掉的氨基酸，遇上的第一件事就是被拆成两半",
      en: "An amino acid is a carbon skeleton with an alpha-amino group on it — a nitrogen attached to the carbon next to the carboxyl group. **Catabolism separates the two, and the separation always uses the same cofactor, pyridoxal phosphate, which is the working form of vitamin B6. After the split the two halves go different ways: the carbon skeleton is degraded to intermediates of the citric acid cycle and can be burned or turned back into glucose, while the nitrogen has to be got rid of, because free ammonia is poisonous.** Every claim below follows the nitrogen.",
      cn: "一个氨基酸就是一副碳骨架，上面挂着一个 **α-氨基** —— 一个氮，接在紧邻羧基的那个碳上。**分解代谢要做的是把这两者分开，而这一分开总是用同一个辅因子：磷酸吡哆醛（PLP），也就是维生素 B6 的工作形式。分开之后两半各走各的：碳骨架被降解成柠檬酸循环的中间物，可以烧掉、也可以回炉造葡萄糖；而那个氮必须被处理掉，因为游离的氨有毒。** 下面每一步跟的都是那个氮。",
      src: "A p.625"
    },
    {
      link_en: "before any of that, the protein has to be taken apart, and the stomach does it with a switch that can only arm itself in one place",
      link_cn: "在这一切之前，蛋白质得先被拆开 —— 胃用的是一个只能在特定地点给自己上膛的开关",
      en: "Dietary protein makes the stomach lining release gastrin — a hormone is a molecule released by one tissue to change what another tissue does, and this one tells parietal cells to secrete hydrochloric acid and chief cells to secrete pepsinogen. **The acid, at pH 1.0 to 2.5, does two jobs at once: it kills most bacteria and other foreign cells, and it unfolds globular proteins so that the peptide bonds buried inside them become reachable.** Pepsinogen is a zymogen — an inactive precursor of an enzyme — and it becomes the protease pepsin by cutting itself, **which happens only at low pH. That makes it a self-limiting switch: the enzyme cannot arm itself anywhere except where it is meant to work.**",
      cn: "膳食蛋白让胃黏膜释放**胃泌素**，这个激素叫**壁细胞**分泌盐酸、**主细胞**分泌**胃蛋白酶原**。**pH 1.0 到 2.5 的胃酸一次干两件事：杀死大多数细菌和外来细胞；同时把球状蛋白展开，让埋在里面的肽键变得够得着。** 胃蛋白酶原是一种**酶原**（zymogen，即酶的无活性前体），它靠切自己变成蛋白酶**胃蛋白酶**，而**这件事只在低 pH 下发生。于是它成了一个自限的开关：这个酶除了在它该干活的地方，别处都没法给自己上膛。**",
      src: "A p.627"
    },
    {
      link_en: "the intestine repeats the trick on a larger scale, and the reason for all this caution has a disease attached to it",
      link_cn: "小肠把同一个花招放大重演，而这么小心的理由，背后挂着一种病",
      en: "Acid arriving from the stomach triggers secretin, a hormone that makes the pancreas secrete bicarbonate and lifts the pH abruptly to about 7; peptides arriving in the duodenum trigger cholecystokinin, which releases the pancreatic proteases, whose optimum is pH 7 to 8. They arrive as zymogens too. **Enteropeptidase, secreted by intestinal cells, converts trypsinogen into trypsin, and trypsin then activates everything else — more trypsinogen, chymotrypsinogen, the procarboxypeptidases and proelastase. One activation at the head of the cascade turns the whole set on.** The reason for the caution: an active protease inside the cell that made it would destroy that cell, so the pancreas both ships its enzymes inactive and makes a specific pancreatic trypsin inhibitor to block the master activator at home. **Acute pancreatitis is that arrangement failing — the duct out is obstructed, the zymogens are activated prematurely inside the pancreas, and the organ digests itself.**",
      cn: "从胃里下来的酸触发**促胰液素**，这个激素让胰腺分泌碳酸氢盐，把 pH 陡然抬到约 **7**；肽段到达十二指肠又触发**胆囊收缩素**，放出胰腺的那些蛋白酶 —— 它们的最适 pH 是 7 到 8。它们同样以酶原的形式出场。**肠细胞分泌的肠肽酶把胰蛋白酶原变成胰蛋白酶，而胰蛋白酶接着去激活其余的一切 —— 更多的胰蛋白酶原、糜蛋白酶原、羧肽酶原和弹性蛋白酶原。级联的源头动一下，整套就全开了。** 这么谨慎的理由：**一个在造它的细胞内部就有活性的蛋白酶，会把那个细胞毁掉**，所以胰腺既把酶做成无活性的运出去，又另造一种专一的**胰蛋白酶抑制剂**，在自己家里堵住那个总启动者。**急性胰腺炎就是这套安排失守的样子 —— 出口的导管被堵，酶原在胰腺内部提前被激活，器官开始消化自己。**",
      src: "A pp.627-628"
    },
    {
      link_en: "the amino acids reach the liver, and the first reaction most of them meet removes no nitrogen at all",
      link_cn: "氨基酸抵达肝脏，而多数氨基酸遇到的第一个反应，根本不移走任何氮",
      en: "An aminotransferase moves the alpha-amino group of an amino acid onto the alpha carbon of alpha-ketoglutarate, leaving the matching alpha-keto acid behind and turning that alpha-ketoglutarate into glutamate. **Nothing is deaminated on balance — the acceptor gains an amino group at the same instant the donor loses one, so the size of the amino-group pool does not change and nothing has been excreted.** What the reaction achieves is collection: **the amino groups of many different amino acids are gathered onto one carrier, L-glutamate, so that a single enzyme downstream can do the actual removing instead of twenty.** Two practical facts: an aminotransferase is named for the donor rather than the acceptor, so alanine aminotransferase takes the amino group off alanine; and the equilibrium constant is about 1.0, so the same enzyme can run either way depending on which side is in excess.",
      cn: "**氨基转移酶**把一个氨基酸的 α-氨基挪到 **α-酮戊二酸**的 α 碳上，留下与之对应的 α-酮酸，而那个 α-酮戊二酸就此变成**谷氨酸**。**从总账上看什么也没被脱氨 —— 受体得到一个氨基与供体失去一个氨基是同一瞬间的事，所以氨基池的大小没变，也没有任何东西被排出体外。** 这个反应真正完成的是**收集**：**把许多不同氨基酸身上的氨基归拢到同一个载体 L-谷氨酸上，好让下游一个酶去做真正的「移走」，而不是二十个。** 两个实用事实：氨基转移酶是**按供体命名**而不是按受体，所以丙氨酸氨基转移酶取走的是丙氨酸的氨基；以及它的**平衡常数约为 1.0**，所以同一个酶可以视哪边过量而朝任一方向跑。",
      src: "A p.628"
    },
    {
      link_en: "and one cofactor makes that chemistry possible — the same one, doing the same single thing, in a whole family of reactions",
      link_cn: "这套化学之所以成立，靠的是一个辅因子 —— 而它在一整族反应里做的，其实是同一件事",
      en: "Pyridoxal phosphate sits in the active site as a prosthetic group: a prosthetic group is one that stays bound to its enzyme, rather than arriving and leaving as a substrate does. At rest it is joined to a lysine side chain of the enzyme as an aldimine, also called a Schiff base — a carbon-nitrogen double bond — and the incoming amino acid displaces the lysine to take its place. **Then one thing happens: a bond at the alpha carbon of the substrate is broken, and whatever is removed, the carbon left behind would be an unstable carbanion. Pyridoxal phosphate has a large conjugated ring that acts as an electron sink, spreading that negative charge over itself and holding the carbanion as a quinonoid intermediate long enough for the reaction to finish.** **What it is for: this one trick supports racemization, decarboxylation and transamination at the alpha carbon, and reactions at the beta and gamma carbons besides. Which reaction you get depends only on which bond was broken — the coenzyme does the same job every time.**",
      cn: "**磷酸吡哆醛**以**辅基**的身份坐在活性位点里 —— 辅基的意思是它一直结合在酶上，不像底物那样来了又走。静息时它以**醛亚胺**（又叫 Schiff 碱，即一个碳氮双键）挂在酶的一个赖氨酸侧链上，进来的氨基酸把赖氨酸顶掉、取而代之。**接下来发生的只有一件事：底物 α 碳上的一根键被打断 —— 不论被拿走的是什么，剩下的那个碳都会是一个不稳定的碳负离子。磷酸吡哆醛有一个大的共轭环，充当电子阱，把这份负电荷摊到自己身上，以醌型中间体的形式把碳负离子稳住，直到反应走完。** **有什么用：就这一个花招，撑起了 α 碳上的消旋、脱羧和转氨，还撑起了 β 碳和 γ 碳上的一批反应。你得到哪个反应，只取决于当初打断的是哪根键 —— 辅酶每次干的都是同一件事。**",
      src: "A pp.629-630"
    },
    {
      link_en: "now the enzyme that actually removes the nitrogen, at the one place it has all been collected",
      link_cn: "现在轮到真正把氮移走的那个酶了 —— 就在氮被收集到的那一个地方",
      recall_en: "the collection in glutamate three steps up is what makes a single removal point possible",
      recall_cn: "三步之前把氮收集成谷氨酸，正是「只需一个移走点」得以成立的前提",
      en: "Glutamate is carried from the cytosol into the mitochondrion, and glutamate dehydrogenase in the matrix strips its amino group off as ammonium, giving alpha-ketoglutarate back. **An aminotransferase plus this dehydrogenase together is called transdeamination, and the pair is the whole answer to how twenty amino acids lose their nitrogen through one controlled exit.** The enzyme is unusual in accepting either NAD+ or NADP+, which the plant and microbial versions do not. It is allosteric, built from six identical subunits, activated by ADP and inhibited by GTP — **and the direction makes sense: ADP signals that energy is short, GTP is a citric acid cycle product signalling that alpha-ketoglutarate is already plentiful, and there is no reason to tear down glutamate to make more of something the cycle already has.** **The allostery is demonstrably real: mutations that damage the GTP site leave the enzyme permanently on, giving hyperinsulinism-hyperammonemia syndrome — insulin over-secreted after a protein meal, ammonia high in blood, blood glucose low.**",
      cn: "谷氨酸被从胞质运进线粒体，基质里的**谷氨酸脱氢酶**把它的氨基以**铵离子**的形式剥下来，同时把 α-酮戊二酸交还回去。**一个氨基转移酶加上这个脱氢酶，合起来叫「转脱氨基作用」（transdeamination）；二十种氨基酸如何经由一个受控的出口卸掉氮，答案全在这一对上。** 这个酶不寻常的地方在于 **NAD+ 和 NADP+ 它都收**，而植物和微生物版本做不到。它是变构酶，由**六个相同亚基**组成，**ADP 激活、GTP 抑制** —— **方向是说得通的：ADP 意味着能量紧张；GTP 是柠檬酸循环的产物，意味着 α-酮戊二酸已经不缺 —— 循环里已经有的东西，没理由再拆谷氨酸去多造。** **这套变构调控是可以被证明的：破坏 GTP 位点的突变让这个酶永远开着，结果是「高胰岛素血症-高氨血症综合征」—— 蛋白质餐后胰岛素分泌过多、血氨升高、血糖偏低。**",
      src: "A p.631"
    },
    {
      link_en: "that works inside one cell. Between organs, the nitrogen needs a different carrier",
      link_cn: "以上都在一个细胞内部。器官之间搬运，氮需要另一个载体",
      en: "Many tissues, the brain among them, generate free ammonia — from degrading nucleotides, for instance — and almost none of it is allowed into the blood as ammonia. **Glutamine synthetase attaches it to glutamate to make glutamine, spending an ATP and going through a gamma-glutamyl phosphate intermediate, and glutamine is what actually travels in the blood.** At the far end sits glutaminase — inside the mitochondria of liver, kidney and intestinal cells it takes that amide nitrogen back off as ammonium. **So there are two carriers with two different ranges: glutamate collects nitrogen inside a cell, glutamine carries it between cells, and free ammonia is never the thing in transit.** In the liver, ammonia from every source is disposed of by making urea.",
      cn: "许多组织（脑也在内）会产生游离的氨 —— 比如核苷酸降解时 —— 而其中几乎没有一点被允许以氨的形式进入血液。**谷氨酰胺合成酶把它接到谷氨酸上做成谷氨酰胺，花掉一个 ATP，中间经过一个 γ-谷氨酰磷酸中间体；真正在血里跑的是谷氨酰胺。** 到了另一端，肝、肾和肠细胞线粒体里的**谷氨酰胺酶**再把这个酰胺氮以铵离子的形式取下来。**所以有两个载体、两种作用范围：谷氨酸在细胞内部收集氮，谷氨酰胺在细胞之间搬运氮，而游离的氨从来不是被运送的那个东西。** 在肝脏里，各种来源的氨最后都靠合成**尿素**处理掉。",
      src: "A pp.631-632",
      see: [{ id: "L-18-2-1", en: "the urea cycle itself", cn: "尿素循环本身" }]
    },
    {
      link_en: "and the kidney uses the same molecule for something else entirely",
      link_cn: "而肾脏拿同一个分子去干一件完全不同的事",
      recall_en: "the same glutamine and the same glutaminase as the step above",
      recall_cn: "还是上一步那个谷氨酰胺、那个谷氨酰胺酶",
      en: "In metabolic acidosis — blood too acid — the kidney increases its processing of glutamine, and this increase is regulated rather than incidental. **The ammonium released there is not sent to the blood and not made into urea: it goes straight into the urine, where it forms salts with metabolic acids and carries them out of the body.** Bicarbonate produced when alpha-ketoglutarate is decarboxylated in the citric acid cycle adds a second effect, buffering the blood plasma. **Both push against the acidosis. The chemistry is the same as in the liver; what differs is where the ammonium is allowed to go.**",
      cn: "在**代谢性酸中毒**（血偏酸）时，肾脏会加大对谷氨酰胺的处理量，而这个增加是**受调控的**，不是顺带发生的。**在那里放出来的铵离子既不送进血液、也不去做尿素：它直接进入尿液，在尿里与代谢酸成盐，把酸带出体外。** 柠檬酸循环中 α-酮戊二酸脱羧产生的碳酸氢盐又加了第二重效果，在血浆里充当缓冲。**两者都在往回顶那个酸中毒。化学与肝里的完全一样，不同的只是这个铵离子被允许去哪里。**",
      src: "A p.632"
    },
    {
      link_en: "working muscle uses yet another carrier, and the reason is about who pays",
      link_cn: "工作中的肌肉又用另一个载体，而理由关乎「谁买单」",
      en: "Hard-contracting skeletal muscle works largely without oxygen, so it makes a great deal of pyruvate and lactate, and breaking down its own protein makes ammonia as well. Both have to reach the liver — the three-carbon acids to be rebuilt into glucose by gluconeogenesis, the nitrogen to be made into urea. **Alanine aminotransferase converts pyruvate and glutamate into alanine, and alanine goes to the liver carrying both at once: a nitrogen and a three-carbon skeleton in one molecule.** In the liver the same enzyme runs backwards, handing the amino group to alpha-ketoglutarate and returning pyruvate — **an equilibrium constant of 1.0 doing visible work.** The glutamate made there either enters mitochondria to be stripped by glutamate dehydrogenase, or is transaminated with oxaloacetate to aspartate, the second nitrogen donor of urea synthesis. **What it is for: gluconeogenesis is expensive, and this arrangement puts its cost on the liver, leaving all the ATP in the muscle for contraction.**",
      cn: "剧烈收缩的骨骼肌基本上在缺氧下工作，于是产生大量**丙酮酸和乳酸**，而拆自己的蛋白又产生氨。两样都得送到肝脏 —— 三碳酸去经**糖异生**（由三碳前体重新造葡萄糖）变回葡萄糖，氮去做尿素。**丙氨酸氨基转移酶把丙酮酸和谷氨酸变成丙氨酸，而丙氨酸一趟把两样都带去肝脏：一个氮和一副三碳骨架，装在同一个分子里。** 到了肝里，同一个酶**反着跑**，把氨基交给 α-酮戊二酸、把丙酮酸还回来 —— **那个等于 1.0 的平衡常数在这里肉眼可见地干活**。在肝里生成的谷氨酸要么进线粒体被谷氨酸脱氢酶剥掉氨基，要么与草酰乙酸转氨生成**天冬氨酸** —— 尿素合成的第二个氮供体。**有什么用：糖异生很贵，这套安排把这笔账记在肝脏头上，让肌肉里的 ATP 全部留给收缩。**",
      src: "A pp.632-633"
    },
    {
      link_en: "four amino acids have now appeared as carriers, and they are not four out of twenty by chance",
      link_cn: "到此为止出场的载体一共四个，而它们不是从二十个里随便挑出来的",
      recall_en: "glutamate, glutamine, alanine and aspartate, each introduced above as it was needed",
      recall_cn: "谷氨酸、谷氨酰胺、丙氨酸、天冬氨酸 —— 前面每次需要时各自出场过一回",
      en: "Glutamate, glutamine, alanine and aspartate are the four amino acids that transport and distribute amino groups, and all four are present at relatively high concentration in one or many mammalian tissues. **The reason they are the carriers: each is one transamination away from an intermediate of the citric acid cycle or from pyruvate — glutamate from alpha-ketoglutarate, aspartate from oxaloacetate, alanine from pyruvate, glutamine from glutamate. So loading nitrogen onto them costs one step, unloading costs one step, and the carbon they are carrying is itself usable fuel rather than dead weight. Nitrogen and carbon travel together and both arrive somewhere they can be used.**",
      cn: "**谷氨酸、谷氨酰胺、丙氨酸、天冬氨酸**是负责运输与分配氨基的那四个氨基酸，四者在一种或多种哺乳动物组织中浓度都相对较高。**它们之所以是载体：每一个都离柠檬酸循环的某个中间物或丙酮酸只有一次转氨之遥 —— 谷氨酸对 α-酮戊二酸，天冬氨酸对草酰乙酸，丙氨酸对丙酮酸，谷氨酰胺对谷氨酸。于是装氮一步、卸氮一步，而它们载着的碳本身就是能用的燃料，不是死重。氮和碳一起走，而且两者到站之后都用得上。**",
      src: "A p.625"
    },
    {
      link_en: "and at the end of all this transport, the nitrogen has to leave the body in some chemical form",
      link_cn: "而这一路运输的终点，氮总得以某种化学形式离开身体",
      en: "Which form depends on how much water the animal has. **Most aquatic species, bony fishes among them, are ammonotelic: they release ammonia and simply let the surrounding water dilute it. Most terrestrial animals are ureotelic, excreting urea, which is neither toxic nor costly in water. Birds and reptiles are uricotelic, excreting uric acid as a near-solid paste, which costs almost no water at all.** The grouping does not follow ancestry — sharks are ureotelic and are not short of water — so water is not the only pressure at work. **There is a second reading of these molecules worth having: the carbons of urea and of uric acid are highly oxidised, which says that an organism throws carbon away only after taking most of the oxidation energy out of it.**",
      cn: "以哪种形式离开，取决于这种动物有多少水。**多数水生物种（硬骨鱼在内）是排氨型：直接放出氨，让周围的水把它稀释掉。多数陆生动物是排尿素型，排出尿素 —— 既不毒，也不太费水。鸟类和爬行类是排尿酸型，把尿酸以接近固体的糊状排出，几乎不费水。** 这个分组并不跟着亲缘关系走 —— 鲨鱼是排尿素型，而鲨鱼并不缺水 —— 所以「水」不是唯一在起作用的压力。**这些分子还有第二种读法值得拿着：尿素和尿酸的碳都被高度氧化了，这说明生物只有在把碳的氧化能量榨取得差不多之后，才会把它扔掉。**",
      src: "A pp.626-627"
    },
    {
      link_en: "one thing has been asserted throughout and not yet argued: that free ammonia is poisonous. The reason starts with a membrane",
      link_cn: "有一件事前面一直在用、却还没论证：游离的氨有毒。原因要从一张膜说起",
      en: "In blood about 98 percent of ammonia is protonated, as ammonium, and ammonium carries a charge and does not cross a plasma membrane. **The remaining 2 percent is uncharged NH3, and uncharged NH3 crosses every membrane easily, the blood-brain barrier included. Once inside a cell most of it picks up a proton again and is stuck there as ammonium.** **That is the trap, and it is one-way: only the small uncharged fraction can travel, and it converts into the trapped form on arrival, so ammonia accumulates inside cells and the brain gets the worst of it** — cognitive impairment, ataxia, seizures, and in extreme cases swelling of the brain and death.",
      cn: "血中约 **98%** 的氨是质子化的**铵离子**，而铵离子带电，**过不了质膜**。**剩下 2% 是不带电的 NH3，不带电的 NH3 轻易穿过任何膜，包括血脑屏障。一旦进入细胞，其中大部分又抓回一个质子，以铵离子的形式被困在里面。** **这就是那个陷阱，而且是单向的：能走的只有那一小部分不带电的，而它一到就变成走不掉的形式，于是氨在细胞内不断累积 —— 脑受害最深** —— 认知损害、共济失调、癫痫样发作，极端情况下脑肿胀直至死亡。",
      src: "A p.633"
    },
    {
      link_en: "and inside the brain the damage runs along a chain that can be followed step by step",
      link_cn: "而在脑内部，损害沿着一条可以一步步跟下去的链条展开",
      recall_en: "the two enzymes from earlier, glutamate dehydrogenase and glutamine synthetase, now running as a defence",
      recall_cn: "前面那两个酶 —— 谷氨酸脱氢酶和谷氨酰胺合成酶 —— 现在充当防线",
      en: "The first line of defence is to run glutamate dehydrogenase backwards, aminating alpha-ketoglutarate to glutamate, and then to make glutamine with glutamine synthetase — **which in the brain only astrocytes express, and astrocytes are the supporting cells that wrap around neurons and manage their chemical environment. It costs the brain glutamate, which is itself a neurotransmitter and the precursor of GABA, another one, so the defence damages the signalling it protects, and it is in any case not enough.** Then the ion chain: **ammonium competes with potassium for transport into astrocytes through the Na-K ATPase, so potassium builds up outside; the excess potassium enters neurons through the NKCC1 cotransporter, which brings in sodium and two chlorides with each potassium; and the extra chloride inside a neuron alters how it responds when GABA reaches its GABA-A receptors, giving abnormal depolarisation and increased firing.** That accounts for the incoordination and the seizures. **If ammonium stays high, the disturbance of ion and water channels makes astrocytes swell, and the result is fatal brain edema.**",
      cn: "第一道防线是把谷氨酸脱氢酶**反着开**，让 α-酮戊二酸氨基化成谷氨酸，再由谷氨酰胺合成酶做成谷氨酰胺 —— **而在脑中只有星形胶质细胞表达谷氨酰胺合成酶；星形胶质细胞是包裹神经元、打理其化学环境的支持细胞。这道防线要花掉谷氨酸，而谷氨酸本身就是一种神经递质，也是另一种神经递质 GABA 的前体 —— 于是防线损伤了它所要保护的信号，何况这点能力本来也不够用。** 接着是离子这条链：**铵离子在 Na-K ATPase 上与钾竞争进入星形胶质细胞，于是细胞外的钾堆积起来；多出来的钾经 NKCC1 共转运体进入神经元，每带一个钾就同时带进一个钠和两个氯；而神经元内多出来的氯，改变了它在 GABA 作用于 GABA-A 受体时的反应方式，造成异常去极化和放电增强。** 神经肌肉不协调和癫痫发作就是这么来的。**如果铵离子持续偏高，离子通道与水通道的紊乱会让星形胶质细胞肿胀，结果是致命的脑水肿。**",
      src: "A p.633",
      openQuestion_en: "How much of the brain's sensitivity comes from glutamate depletion rather than from the ion chain is not settled.",
      openQuestion_cn: "脑的这种敏感性里，有多少来自谷氨酸被耗竭、而不是来自那条离子链，目前并没有定论。"
    }
  ],
  terms: [
    { en: "transamination", cn: "转氨作用",
      def_en: "Transfer of an alpha-amino group onto the alpha carbon of alpha-ketoglutarate, leaving the corresponding alpha-keto acid. No net deamination happens: the acceptor gains exactly what the donor loses. Its purpose is collection — the amino groups of many amino acids end up on one carrier, L-glutamate. Equilibrium constant about 1.0, so the reaction is freely reversible, and the enzymes are named for the donor.",
      def_cn: "把一个 α-氨基转到 α-酮戊二酸的 α 碳上，留下相应的 α-酮酸。没有净脱氨：受体得到的正是供体失去的。它的用处在于收集 —— 许多氨基酸的氨基最终都落到同一个载体 L-谷氨酸上。平衡常数约 1.0，故可自由逆转；这些酶按供体命名。" },
    { en: "pyridoxal phosphate", cn: "磷酸吡哆醛",
      def_en: "The working form of vitamin B6, bound to its enzyme as a prosthetic group through a Schiff base to a lysine. It breaks one bond at a substrate's alpha carbon and holds the resulting carbanion as a quinonoid intermediate on its conjugated ring, which acts as an electron sink. One chemical role supports racemization, decarboxylation and transamination alike.",
      def_cn: "维生素 B6 的工作形式，以辅基身份通过 Schiff 碱结合在酶的一个赖氨酸上。它打断底物 α 碳上的一根键，并把由此产生的碳负离子以醌型中间体的形式稳在自己的共轭环上，该环充当电子阱。同一种化学角色同时撑起了消旋、脱羧与转氨。" },
    { en: "transdeamination", cn: "转脱氨基作用",
      def_en: "An aminotransferase and glutamate dehydrogenase working as a pair: the first collects amino groups onto glutamate, the second releases them as ammonium in the mitochondrial matrix. This is how twenty amino acids lose their nitrogen through one controlled exit.",
      def_cn: "氨基转移酶与谷氨酸脱氢酶配对工作：前者把氨基收集到谷氨酸上，后者在线粒体基质里把它们以铵离子形式放出。二十种氨基酸正是这样经由一个受控出口卸掉氮的。" },
    { en: "glutamate dehydrogenase", cn: "谷氨酸脱氢酶",
      def_en: "The matrix enzyme that removes the amino group of glutamate as ammonium and returns alpha-ketoglutarate. Six identical subunits, activated by ADP and inhibited by GTP, and unusual in accepting either NAD+ or NADP+. Permanent activation by mutation of its GTP site causes hyperinsulinism-hyperammonemia syndrome.",
      def_cn: "基质中把谷氨酸的氨基以铵离子形式移走、并交还 α-酮戊二酸的酶。六个相同亚基，ADP 激活、GTP 抑制，且不寻常地 NAD+ 与 NADP+ 都能用。GTP 位点突变导致它被永久激活，就是「高胰岛素血症-高氨血症综合征」。" },
    { en: "glutamine as nitrogen carrier", cn: "谷氨酰胺作为氮的载体",
      def_en: "Glutamine synthetase attaches free ammonia to glutamate at the cost of one ATP, through a gamma-glutamyl phosphate intermediate, and glutamine is what travels in the blood. Glutaminase in the mitochondria of liver, kidney and intestine takes the nitrogen off again as ammonium. Glutamate collects within a cell; glutamine carries between cells.",
      def_cn: "谷氨酰胺合成酶花一个 ATP、经 γ-谷氨酰磷酸中间体把游离氨接到谷氨酸上，在血里跑的是谷氨酰胺。肝、肾、肠细胞线粒体中的谷氨酰胺酶再把这个氮以铵离子形式取下来。谷氨酸在细胞内收集，谷氨酰胺在细胞之间搬运。" },
    { en: "glucose-alanine cycle", cn: "葡萄糖-丙氨酸循环",
      def_en: "Working muscle sends nitrogen and a three-carbon skeleton to the liver in one molecule, alanine, made by alanine aminotransferase from pyruvate and glutamate. The liver runs the same enzyme backwards, recovers the pyruvate for glucose synthesis and the nitrogen for urea. It puts the cost of gluconeogenesis on the liver and leaves the muscle's ATP for contraction.",
      def_cn: "工作中的肌肉把氮和一副三碳骨架装进同一个分子 —— 丙氨酸（由丙氨酸氨基转移酶从丙酮酸和谷氨酸生成）—— 送往肝脏。肝里同一个酶反着跑，取回丙酮酸去造葡萄糖、取回氮去造尿素。这把糖异生的代价压在肝上，让肌肉的 ATP 留给收缩。" },
    { en: "ammonotelic / ureotelic / uricotelic", cn: "排氨型／排尿素型／排尿酸型",
      def_en: "The three forms in which nitrogen leaves an animal, chosen largely by how much water it has: ammonia diluted into surrounding water, urea in most terrestrial animals, uric acid as a near-solid paste in birds and reptiles. Sharks are ureotelic without being short of water, so the grouping does not follow ancestry. The carbons of urea and uric acid are highly oxidised.",
      def_cn: "氮离开动物体的三种形式，主要由这种动物有多少水来决定：氨被稀释进周围的水，尿素见于多数陆生动物，尿酸在鸟类与爬行类中以接近固体的糊状排出。鲨鱼并不缺水却是排尿素型，可见这个分组不跟着亲缘关系走。尿素和尿酸的碳都被高度氧化。" },
    { en: "ammonia toxicity", cn: "氨的毒性",
      def_en: "Only the 2 percent of blood ammonia that is uncharged NH3 crosses membranes, and it is re-protonated and trapped inside cells. In the brain, defence costs glutamate; ammonium then competes with potassium at the Na-K ATPase, extracellular potassium enters neurons through NKCC1 with two chlorides, and the chloride load perverts the GABA-A response, giving seizures. Persistent ammonium swells astrocytes into fatal brain edema.",
      def_cn: "血氨中只有那 2% 不带电的 NH3 能穿膜，它进入细胞后被重新质子化并困在里面。在脑中，防线要消耗谷氨酸；铵离子随后在 Na-K ATPase 上与钾竞争，细胞外的钾经 NKCC1 连同两个氯一起进入神经元，氯负荷扭曲了 GABA-A 的响应，于是出现癫痫发作。铵离子持续偏高会让星形胶质细胞肿胀，成为致命的脑水肿。" }
  ]
};

/* ------------------------------------------------------------------ L-18-2-1 */
window.BIOLITE_SPINE["L-18-2-1"] = {
  assumed: ["ATP", "ADP", "AMP", "NAD+", "NADH", "acetyl-CoA", "enzyme",
            "amino acid", "protein", "cytosol", "substrate", "active site",
            "citric acid cycle", "oxaloacetate", "glutamate", "aspartate",
            "isozyme", "transamination", "gene"],
  nodeTitle_en: "Nitrogen excretion and the urea cycle",
  nodeTitle_cn: "氮的排泄与尿素循环",
  title_en: "Two nitrogens arrive by two different routes, and a carrier that comes back makes it a cycle",
  title_cn: "两个氮由两条不同的路到场，而一个会回来的载体让它成为循环",
  steps: [
    {
      en: "In an animal that excretes urea, ammonia arriving in the mitochondria of liver cells is built into urea and nothing else. **Urea then goes into the blood, to the kidneys, and out in the urine, and that fixes a division of labour across the whole body: many tissues produce ammonia and package it for travel, only the liver converts it to urea, and only the kidney excretes the product.** Hans Krebs and a medical student, Kurt Henseleit, worked the pathway out in 1932 — before Krebs found the citric acid cycle, which is why the later discovery that the two cycles are connected is a historical sequence rather than a coincidence of names.",
      cn: "在排尿素的动物里，抵达**肝细胞线粒体**的氨只有一个去处：被造成**尿素**。**尿素随后进入血液、到达肾脏、随尿排出 —— 这就定下了全身范围的一套分工：许多组织产氨并把它打包上路，只有肝脏把它变成尿素，只有肾脏把产物排掉。** Hans Krebs 与一位医学生 Kurt Henseleit 在 **1932 年**弄清了这条通路 —— 那时 Krebs 还没有发现柠檬酸循环，所以后来发现两个循环相连，是一个先后关系，而不是名字上的巧合。",
      src: "A p.633"
    },
    {
      link_en: "so what has to be built, and how many enzymes does it take?",
      link_cn: "那么要造的是什么，需要几个酶？",
      en: "Urea holds two nitrogen atoms on one carbon, and that carbon comes from bicarbonate rather than from either amino acid. **Getting from ammonia to urea takes five enzymatic steps, of which only four form the ring: carbamoyl phosphate synthetase I prepares the first nitrogen outside the ring and feeds it in. The ring itself is ornithine to citrulline to argininosuccinate to arginine and back to ornithine.** Both counts are correct and they answer different questions, so give both: five enzymes from ammonia to urea, four of them making up the cycle proper.",
      cn: "尿素是把**两个氮**挂在**一个碳**上，而这个碳来自**碳酸氢根**，不是来自哪个氨基酸。**从氨走到尿素要经过五个酶促步骤，其中只有四个构成那个环：氨甲酰磷酸合成酶 I 在环外把第一个氮准备好、再送进去。环本身是鸟氨酸 → 瓜氨酸 → 精氨基琥珀酸 → 精氨酸 → 回到鸟氨酸。** 两种数法都对，只是回答的问题不同，所以两个都报出来：**从氨到尿素五个酶，其中四个构成循环本身。**",
      src: "A pp.633-635"
    },
    {
      link_en: "and the molecule that goes round the ring is not one you will find in a protein",
      link_cn: "而绕着这个环跑的那个分子，你在蛋白质里是找不到的",
      en: "Ornithine is an amino acid that is not among the twenty found in proteins; its job here is to be the thing that comes back. **It accepts material at every turn and is regenerated at the end of every turn, exactly as oxaloacetate does in the citric acid cycle, so a small amount of ornithine can carry an unlimited number of nitrogen pairs out of the body.** Across one turn nothing is consumed except the two nitrogens, the carbon that came in as bicarbonate, and the ATP spent along the way.",
      cn: "**鸟氨酸**是一种氨基酸，但**不在组成蛋白质的那二十种之内**；它在这里的职责就是「那个会回来的东西」。**它每一圈接一次料、每一圈末尾又被再生出来 —— 与草酰乙酸在柠檬酸循环里做的事完全一样 —— 所以很少量的鸟氨酸就能把无限多对氮送出体外。** 走完一圈，被消耗掉的只有那两个氮、以碳酸氢根身份进来的那个碳，以及一路上花掉的 ATP。",
      src: "A p.635",
      see: [{ id: "L-16-2-1", en: "the same catalytic-carrier argument in the citric acid cycle", cn: "柠檬酸循环里同一个「催化性载体」的论证" }]
    },
    {
      link_en: "the first nitrogen is loaded before the ring starts, and that one enzyme spends half the cycle's budget",
      link_cn: "第一个氮在进环之前就被装好，而这一个酶就吃掉了整个循环一半的预算",
      en: "Carbamoyl phosphate synthetase I works in the mitochondrial matrix — the compartment enclosed by the inner membrane of a mitochondrion — on ammonium and on bicarbonate from respiration, and its mechanism explains its price. **The bicarbonate is phosphorylated by one ATP; ammonia then displaces that phosphoryl group, giving carbamate; and a second ATP phosphorylates the carbamate to give carbamoyl phosphate. Two activation steps means two ATP, which is why this single enzyme accounts for half of the energy the whole cycle spends.** One trap to avoid: this enzyme is form I, in mitochondria; form II is in the cytosol and belongs to pyrimidine synthesis. Same name, different protein, different compartment, different pathway.",
      cn: "**氨甲酰磷酸合成酶 I** 在**线粒体基质**（线粒体内膜围出来的那个区室）里工作，用的是**铵离子**和**呼吸产生的碳酸氢根**；它的机制解释了它的价钱。**先由一个 ATP 把碳酸氢根磷酸化；接着氨把那个磷酰基顶掉，生成氨基甲酸（carbamate）；再由第二个 ATP 把氨基甲酸磷酸化，给出氨甲酰磷酸。两个活化步骤就是两个 ATP —— 这就是为什么单单这一个酶就占了整个循环能量支出的一半。** 有个坑要避开：这里说的是 **I 型**，在线粒体里；**II 型**在细胞质里，属于嘧啶的合成。同名、不同蛋白、不同区室、不同通路。",
      src: "A pp.634-635"
    },
    {
      link_en: "loaded, the nitrogen is handed to the carrier and the ring begins",
      link_cn: "装好之后，这个氮被交给载体，环就开始转了",
      en: "Carbamoyl phosphate is an activated carbamoyl group donor — the phosphate is what makes it reactive — and ornithine transcarbamoylase hands that group to ornithine, releasing phosphate and giving citrulline. **The reaction happens in the matrix, and the citrulline then leaves for the cytosol, where the rest of the cycle runs. That split across two compartments is where the second nitrogen will be added, and it is also what the traffic problems later in this chain are about.**",
      cn: "**氨甲酰磷酸是一个「活化的氨甲酰基供体」** —— 让它有反应性的正是那个磷酸 —— **鸟氨酸转氨甲酰酶**把这个基团交给鸟氨酸，放出磷酸，生成**瓜氨酸**。**这一步发生在基质里，随后瓜氨酸离开、进入细胞质，循环余下的部分在那里进行。第二个氮就是在这条区室分界之后被加上去的，而后面几步要谈的运输问题，也都由这条分界而来。**",
      src: "A p.635"
    },
    {
      link_en: "and the second nitrogen does not arrive as ammonia at all",
      link_cn: "而第二个氮根本不是以氨的形式到场的",
      en: "It arrives on aspartate, made in the matrix by transaminating glutamate with oxaloacetate and then carried out to the cytosol. **Argininosuccinate synthetase joins the amino group of aspartate to the carbonyl group of citrulline, and it does so through an activated intermediate: ATP adds AMP to that carbonyl oxygen, making a citrullyl-AMP, and aspartate then displaces the AMP.** That ATP goes to AMP plus pyrophosphate rather than to ADP, **so this one step breaks two high-energy bonds — which is where the fourth phosphate bond in the energy account comes from.**",
      cn: "它是搭在**天冬氨酸**上来的：天冬氨酸在基质里由谷氨酸与草酰乙酸转氨生成，再被运到细胞质。**精氨基琥珀酸合成酶把天冬氨酸的氨基接到瓜氨酸的羰基上，走的是一条经活化中间体的路：ATP 先把 AMP 加到那个羰基氧上，做成 citrullyl-AMP（瓜氨酰-AMP），随后天冬氨酸把 AMP 顶掉。** 这个 ATP 走向的是 **AMP 加焦磷酸**而不是 ADP，**所以单这一步就打断了两根高能键 —— 能量账里那第四根磷酸键就是从这里来的。**",
      src: "A pp.635-636"
    },
    {
      link_en: "then the molecule is cut in two, and one half is not a nitrogen compound at all",
      link_cn: "接着这个分子被切成两半，而其中一半根本不是含氮化合物",
      en: "Argininosuccinase splits argininosuccinate into arginine and fumarate — the nitrogen stays with the arginine, the four-carbon skeleton leaves as fumarate. **This is the only reversible step in the urea cycle; every other step runs one way.** **What that is good for is diagnosis: when one enzyme is missing, the intermediate immediately in front of it piles up and cannot drain backwards, so measuring which intermediate is elevated in blood or urine names the missing enzyme.**",
      cn: "**精氨基琥珀酸裂解酶**把精氨基琥珀酸切成**精氨酸**和**延胡索酸** —— 氮留在精氨酸这边，那副四碳骨架以延胡索酸的形式离开。**这是尿素循环中唯一可逆的一步；其余每一步都只朝一个方向走。** **这一点的用处在诊断上：某个酶缺失时，紧挨在它前面的那个中间物会堆积，而且倒不回去，所以测一测血或尿里哪个中间物升高，就能点出缺的是哪个酶。**",
      src: "A p.636"
    },
    {
      link_en: "and the last step releases the product and hands the carrier back",
      link_cn: "最后一步放出产物，同时把载体交还回来",
      recall_en: "ornithine, the carrier from three steps up, arriving back at its starting point",
      recall_cn: "三步之前那个载体鸟氨酸，回到了它的出发点",
      en: "Arginase, in the cytosol, hydrolyses arginine into urea and ornithine, and the ornithine is carried back into the mitochondrion to start another turn. **Note what arginine is doing here: it is not being made as a building block for protein, it is the immediate precursor of urea, and the reaction that consumes it is a plain hydrolysis. With ornithine returning at this point, the four reactions stop being four reactions and become a cycle.**",
      cn: "细胞质里的**精氨酸酶**把精氨酸水解成**尿素**和**鸟氨酸**，鸟氨酸被送回线粒体，开始下一圈。**注意精氨酸在这里的身份：它不是作为造蛋白质的砖块被生产出来的，它是尿素的直接前体，而消耗它的反应就是一次普通的水解。鸟氨酸在这一步回来了 —— 于是那四个反应不再只是四个反应，而成了一个循环。**",
      src: "A p.635"
    },
    {
      link_en: "splitting a pathway across two compartments looks expensive. It costs less than it looks",
      link_cn: "把一条通路切在两个区室里，看起来很贵。实际比看起来便宜",
      en: "The enzymes of many pathways are clustered into a metabolon: a group of enzymes held close enough that the product of one is handed straight to the active site of the next instead of being released. **The urea cycle enzymes appear to be arranged this way — citrulline, argininosuccinate, arginine and ornithine are passed from one enzyme to the next, and only urea is let out into the general pool of cytosolic metabolites.** **Two things follow. The intermediates never have to build up to a concentration high enough to diffuse across the cytosol, so the two-compartment layout does not carry the dilution penalty it appears to. And because they are normally kept out of the free pool altogether, finding one of them in blood or urine is meaningful rather than ordinary.**",
      cn: "许多通路的酶会聚成一个**代谢子（metabolon）**：一组酶挨得足够近，前一个酶的产物**直接被递到后一个酶的活性位点上**，而不是被释放出来。**尿素循环的这些酶看起来正是这样安排的 —— 瓜氨酸、精氨基琥珀酸、精氨酸和鸟氨酸都是从一个酶手里传到下一个酶手里，只有尿素被放进细胞质里那个公共的代谢物池。** **由此有两个推论。这些中间物根本不必累积到足以在细胞质里靠扩散跑一趟的浓度，所以两区室的布局并没有它看上去那份稀释代价。而正因为它们平常根本不进入游离池，一旦在血或尿里查到，就是有意义的，而不是寻常现象。**",
      src: "A p.636",
      openQuestion_en: "That the urea cycle enzymes really form a metabolon is stated as an appearance rather than as an established fact.",
      openQuestion_cn: "尿素循环的这些酶是否真的组成一个代谢子，原文用的是「看起来如此」，并没有当作已确立的事实。"
    },
    {
      link_en: "the fumarate cut off two steps ago still has to get somewhere, and there is no door for it",
      link_cn: "两步之前切下来的那个延胡索酸还得有个去处，而它没有门可走",
      recall_en: "the fumarate released by argininosuccinase",
      recall_cn: "精氨基琥珀酸裂解酶放出来的那个延胡索酸",
      en: "Fumarate is an intermediate of the citric acid cycle, so in principle it belongs in the matrix — **but no transporter carries cytosolic fumarate into the matrix.** It gets in by being converted first: several citric acid cycle enzymes, fumarase and malate dehydrogenase among them, also exist as cytosolic isozymes, so the fumarate is hydrated to malate in the cytosol and the malate is carried in on a transporter that does exist. **The reactions making this link are called the aspartate-argininosuccinate shunt, and the two cycles joined by it have been nicknamed the Krebs bicycle. What the link is for: it ties together the two pathways that handle the two halves of an amino acid — the nitrogen and the carbon skeleton. Each cycle can still run on its own; what passes between them is traffic, not dependency.**",
      cn: "延胡索酸是柠檬酸循环的中间物，按理它该在基质里 —— **可是没有任何转运体能把细胞质里的延胡索酸搬进基质。** 它得先变个身份才进得去：包括**延胡索酸酶**和**苹果酸脱氢酶**在内的几个柠檬酸循环的酶，同时还存在**细胞质版本的同工酶**，于是延胡索酸先在细胞质里被水合成**苹果酸**，苹果酸再走一个确实存在的转运体进去。**构成这条连接的那套反应叫「天冬氨酸-精氨基琥珀酸支路」，被它连起来的两个循环则得了个绰号叫「Krebs 双轮车」。这条连接是干什么用的：它把处理一个氨基酸两半（氮和碳骨架）的两条通路拴在了一起。两个循环各自仍然能独立运转；在它们之间往来的是物流，不是依赖。**",
      src: "A pp.636-637"
    },
    {
      link_en: "which raises an obvious objection: why bring the second nitrogen in on aspartate at all?",
      link_cn: "这就带出一个明显的疑问：第二个氮为什么非要坐天冬氨酸进来？",
      en: "Using aspartate looks like a complicated way to add a second amino group when free ammonium was already available in the matrix. Two answers. **First, this is one of the two common ways nitrogen is introduced into biomolecules generally, so it is not a device invented for urea.** **Second, and better: the liver has to run the malate-aspartate shuttle anyway. NADH made in the cytosol cannot cross the inner membrane, so its electrons are carried in by reducing oxaloacetate to malate, importing the malate, re-oxidising it inside to make NADH there, converting that oxaloacetate to aspartate and exporting the aspartate. The urea cycle takes its second nitrogen off a traffic system that has to run whether or not any urea is being made.** The cytosolic balance of glutamate and aspartate is kept by aspartate aminotransferase, one of the most active enzymes in a liver cell — **which is exactly why it is the enzyme that shows up in blood when liver tissue is damaged.**",
      cn: "在基质里明明已经有游离铵离子的情况下，还要绕道天冬氨酸来加第二个氨基，看着确实很绕。有两个回答。**第一，这本来就是把氮引入生物分子的两条常见途径之一，并不是为尿素专门发明的装置。** **第二个更好：肝脏无论如何都得跑「苹果酸-天冬氨酸穿梭」。细胞质里生成的 NADH 过不了内膜，它的电子要靠这样进来 —— 把草酰乙酸还原成苹果酸，把苹果酸运进去，在里面重新氧化、就地生成 NADH，再把草酰乙酸转成天冬氨酸送出来。尿素循环的第二个氮，就是从这套「不管造不造尿素都得转」的运输系统上顺手取下来的。** 细胞质里谷氨酸与天冬氨酸的平衡由**天冬氨酸氨基转移酶**维持，它是肝细胞中最活跃的酶之一 —— **这也正是肝组织受损时在血里被查到的就是它的原因。**",
      src: "A p.637"
    },
    {
      link_en: "now the bill, and the rebate that comes with it",
      link_cn: "现在结账，以及随账附上的一笔返还",
      recall_en: "the two ATP at the synthetase and the one that went to AMP",
      recall_cn: "合成酶那里的两个 ATP，加上走向 AMP 的那一个",
      en: "Taken on its own, one urea costs **four high-energy phosphate groups**, although only three ATP appear in the equation: two are spent making carbamoyl phosphate, and the third is spent making argininosuccinate but goes all the way to AMP, so its second bond counts too. **The cost is then partly repaid from outside the cycle: the fumarate that left is converted to malate, the malate is oxidised in the matrix by malate dehydrogenase, and the NADH that makes is worth up to 2.5 ATP in respiration. So the true cost of disposing of two nitrogen atoms is lower than the equation for the cycle alone suggests.**",
      cn: "**孤立地看**，造一个尿素要花**四个高能磷酸基团**，尽管方程里只出现三个 ATP：两个花在造氨甲酰磷酸上；第三个花在造精氨基琥珀酸上，但它一路走到 **AMP**，所以它的第二根键也得算。**这笔账随后被循环之外的东西部分补回：离开的那个延胡索酸变成苹果酸，苹果酸在基质里被苹果酸脱氢酶氧化，由此生成的 NADH 在呼吸中最多值 2.5 个 ATP。所以处理掉两个氮原子的真实代价，比单看这个循环的方程要低。**",
      src: "A p.638"
    },
    {
      link_en: "and how much of all this runs is controlled on two very different timescales",
      link_cn: "而这一整套跑多快，是在两个非常不同的时间尺度上被控制的",
      en: "Over days, the amounts of enzyme change: all five enzymes are made at higher rates in a starving animal and in one on a very-high-protein diet, and at lower rates on a protein-free diet. **Over minutes, carbamoyl phosphate synthetase I is switched on by N-acetylglutamate, which N-acetylglutamate synthase makes from acetyl-CoA and glutamate. In mammals that synthase has no other job at all — plants and microorganisms use the same reaction as the first step of making arginine from glutamate, but mammals lack the rest of that route, so the enzyme is kept purely as a signal generator.** **Read its inputs as a sensor: glutamate reports how much amino nitrogen has arrived, acetyl-CoA reports that catabolism is running, and arginine — which activates the synthase — reports that the cycle itself is stocked.**",
      cn: "**以天计**，改变的是酶的数量：饥饿的动物和吃极高蛋白饮食的动物体内，这五个酶的合成速率都更高；吃无蛋白饮食时则更低。**以分钟计**，**氨甲酰磷酸合成酶 I 由 N-乙酰谷氨酸开启，而 N-乙酰谷氨酸由 N-乙酰谷氨酸合酶用乙酰-CoA 和谷氨酸做成。在哺乳动物身上，这个合酶再没有别的职务 —— 植物和微生物用同一个反应作为「由谷氨酸从头合成精氨酸」的第一步，而哺乳动物缺少这条路线余下的酶，所以这个酶被单纯当作一个信号发生器留了下来。** **把它的输入当传感器读：谷氨酸报告来了多少氨基氮，乙酰-CoA 报告分解代谢正在运转，而激活这个合酶的精氨酸，报告循环本身备货充足。**",
      src: "A pp.637-638"
    },
    {
      link_en: "and what a missing enzyme looks like in a person",
      link_cn: "最后是：缺一个酶，在人身上是什么样子",
      en: "A baby with a severe defect in any of these enzymes looks normal at birth, because the mother's circulation had been clearing the ammonia, and then develops hyperammonemia — cerebral edema, lethargy, hyperventilation — with early death if untreated. **The obvious treatment is forbidden: a protein-free diet is not an option, because humans cannot make half of the twenty amino acids and must eat them.** A three-way split is more useful than the usual two: nonessential (alanine, asparagine, aspartate, glutamate, serine), conditionally essential in growing children and sometimes in illness (arginine, cysteine, glutamine, glycine, proline, tyrosine), and essential (histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine). **The treatments that do work all share one idea — send the nitrogen out on a different molecule. Benzoate becomes benzoyl-CoA and joins glycine to make hippurate; phenylbutyrate becomes phenylacetyl-CoA and joins glutamine to make phenylacetylglutamine. Both products are harmless and leave in the urine, and neither drug touches ammonia directly: it consumes an amino acid, and the cell takes ammonia out of the blood to replace it.** For missing N-acetylglutamate synthase, carbamoyl glutamate substitutes for the activator; arginine is given in three of the enzyme deficiencies, **and excluded from the diet in arginase deficiency, where it is the substrate that cannot be cleared.**",
      cn: "在这些酶中任何一个上有严重缺陷的婴儿，**出生时看起来是正常的** —— 因为此前一直是母体循环在替他清氨 —— 随后出现**高氨血症**：脑水肿、嗜睡、过度换气；不治疗通常早期死亡。**那个显而易见的治法是被禁止的：无蛋白饮食不是选项，因为人类造不出二十种氨基酸里的一半，必须从饮食中获得。** 分成三栏比通常的两栏更有用：**非必需**（丙氨酸、天冬酰胺、天冬氨酸、谷氨酸、丝氨酸）；**条件必需**，即在生长中的儿童身上、有时在患病期间必需（精氨酸、半胱氨酸、谷氨酰胺、甘氨酸、脯氨酸、酪氨酸）；**必需**（组氨酸、异亮氨酸、亮氨酸、赖氨酸、蛋氨酸、苯丙氨酸、苏氨酸、色氨酸、缬氨酸）。**真正管用的那些疗法共用同一个想法 —— 让氮搭另一个分子出去。苯甲酸变成苯甲酰-CoA，与甘氨酸结合成马尿酸；苯丁酸变成苯乙酰-CoA，与谷氨酰胺结合成苯乙酰谷氨酰胺。两个产物都无害、随尿排出，而这两种药都不直接碰氨：它们消耗掉一个氨基酸，细胞为了补回这个氨基酸，就从血里把氨取走了。** 若缺的是 N-乙酰谷氨酸合酶，就用**氨甲酰谷氨酸**顶替那个激活剂；**精氨酸**在其中三种酶缺陷中作为补充给予，**而在精氨酸酶缺陷中反过来必须从饮食里剔除 —— 那里它正是清不掉的那个底物。**",
      src: "A pp.638-639"
    }
  ],
  terms: [
    { en: "carbamoyl phosphate synthetase I", cn: "氨甲酰磷酸合成酶 I",
      def_en: "The preparatory enzyme outside the ring, in the mitochondrial matrix. It phosphorylates bicarbonate, lets ammonia displace the phosphoryl group to give carbamate, then phosphorylates the carbamate — two activation steps, hence two ATP, half the cycle's whole energy bill. Form II, in the cytosol, is a different protein serving pyrimidine synthesis.",
      def_cn: "环外那个准备用的酶，位于线粒体基质。它先磷酸化碳酸氢根，让氨顶掉磷酰基生成氨基甲酸，再把氨基甲酸磷酸化 —— 两个活化步骤，所以两个 ATP，占整个循环能量账的一半。细胞质里的 II 型是另一个蛋白，服务于嘧啶合成。" },
    { en: "ornithine", cn: "鸟氨酸",
      def_en: "An amino acid not found in proteins, which serves as the carrier that goes round the urea cycle — accepting material each turn and being regenerated each turn, the role oxaloacetate plays in the citric acid cycle. Its regeneration is what makes the pathway a cycle.",
      def_cn: "一种不出现在蛋白质中的氨基酸，在尿素循环里充当绕圈的载体 —— 每圈接一次料、每圈又被再生，扮演的是草酰乙酸在柠檬酸循环里的角色。正是它的再生使这条通路成为循环。" },
    { en: "citrullyl-AMP intermediate", cn: "瓜氨酰-AMP 中间体",
      def_en: "How argininosuccinate synthetase activates citrulline: ATP puts AMP onto the carbonyl oxygen, and aspartate then displaces it. Because that ATP goes to AMP rather than ADP, this step spends two high-energy bonds, which is the fourth phosphate group in the cycle's cost.",
      def_cn: "精氨基琥珀酸合成酶活化瓜氨酸的方式：ATP 把 AMP 装到羰基氧上，随后天冬氨酸把它顶掉。由于这个 ATP 走向 AMP 而不是 ADP，这一步花掉两根高能键 —— 这正是循环代价里的第四个磷酸基团。" },
    { en: "metabolon", cn: "代谢子",
      def_en: "A cluster of consecutive enzymes close enough that each hands its product straight to the next active site instead of releasing it. The urea cycle enzymes appear to be arranged this way; only urea reaches the general cytosolic pool, which is why an intermediate found in blood or urine is diagnostic.",
      def_cn: "一组彼此挨得足够近的连续酶，每个酶把产物直接递到下一个活性位点，而不是释放出来。尿素循环的酶看起来正是这样排布的；只有尿素进入细胞质的公共池，这也是血或尿中查到某个中间物具有诊断意义的原因。" },
    { en: "aspartate-argininosuccinate shunt", cn: "天冬氨酸-精氨基琥珀酸支路",
      def_en: "The reactions linking the urea cycle to the citric acid cycle, the pair nicknamed the Krebs bicycle. No transporter moves cytosolic fumarate inwards, so it is hydrated to malate by a cytosolic isozyme and imported as malate. The link ties together the pathway handling an amino acid's nitrogen and the pathway handling its carbon skeleton.",
      def_cn: "把尿素循环与柠檬酸循环连起来的那套反应，两者合称「Krebs 双轮车」。没有转运体能把细胞质中的延胡索酸运进去，所以它先由细胞质同工酶水合成苹果酸，再以苹果酸的身份进入。这条连接把「处理氨基酸的氮」与「处理它的碳骨架」这两条通路拴在一起。" },
    { en: "N-acetylglutamate", cn: "N-乙酰谷氨酸",
      def_en: "The allosteric activator of carbamoyl phosphate synthetase I, made from acetyl-CoA and glutamate. In mammals its synthase has no other function — the rest of the arginine-from-glutamate route is missing — so the enzyme is kept purely for the signal. Arginine activates that synthase, so arginine activates the whole cycle.",
      def_cn: "氨甲酰磷酸合成酶 I 的变构激活剂，由乙酰-CoA 和谷氨酸生成。在哺乳动物中，它的合酶没有别的功能 —— 从谷氨酸造精氨酸那条路线其余的酶都缺 —— 所以这个酶纯粹是为了信号而被保留。精氨酸激活这个合酶，因而也就激活整个循环。" },
    { en: "four high-energy phosphate groups", cn: "四个高能磷酸基团",
      def_en: "The cost of one urea taken in isolation, although the equation shows only three ATP: two at carbamoyl phosphate synthetase, and one at argininosuccinate synthetase that goes all the way to AMP so its second bond counts. Part of the cost comes back as the exported fumarate returns as malate and yields NADH.",
      def_cn: "孤立地看，造一个尿素的代价，尽管方程里只出现三个 ATP：氨甲酰磷酸合成酶那里两个，精氨基琥珀酸合成酶那里一个、但它一路走到 AMP，所以第二根键也要算。其中一部分代价会随「送出去的延胡索酸以苹果酸身份回来并产出 NADH」而收回。" },
    { en: "nitrogen-export therapy", cn: "把氮换个分子排出的疗法",
      def_en: "Treatment of a urea cycle defect by sending nitrogen out on another molecule: benzoate joins glycine as hippurate, phenylbutyrate joins glutamine as phenylacetylglutamine, and both leave in the urine. Neither drug touches ammonia directly — replacing the consumed amino acid is what pulls ammonia out of the blood.",
      def_cn: "治疗尿素循环缺陷的办法是让氮搭另一个分子出去：苯甲酸与甘氨酸结合成马尿酸，苯丁酸与谷氨酰胺结合成苯乙酰谷氨酰胺，两者都随尿排出。这两种药都不直接作用于氨 —— 真正把氨从血里拉走的，是细胞去补回那个被消耗掉的氨基酸。" }
  ]
};

/* ------------------------------------------------------------------ L-18-3-1 */
window.BIOLITE_SPINE["L-18-3-1"] = {
  assumed: ["ATP", "enzyme", "amino acid", "protein", "cytosol", "gene",
            "citric acid cycle", "glycolysis", "acetyl-CoA", "oxaloacetate",
            "pyruvate", "glucose", "glycogen", "transamination", "substrate",
            "ketone body", "insulin"],
  nodeTitle_en: "Pathways of amino acid degradation",
  nodeTitle_cn: "氨基酸碳骨架的降解通路",
  title_en: "Twenty skeletons, six destinations, and one chemical fact that sorts them all",
  title_cn: "二十副骨架、六个终点，以及把它们全部分好类的那一个化学事实",
  steps: [
    {
      en: "Once the amino group has been taken off, what is left of an amino acid is a carbon skeleton, and each of the twenty has its own degradation route. **Those twenty routes converge onto only six molecules: pyruvate, acetyl-CoA, alpha-ketoglutarate, succinyl-CoA, fumarate and oxaloacetate. Every one of the six is a citric acid cycle intermediate or feeds straight into the cycle, so there are six destinations to know rather than twenty pathways.** A seventh box, acetoacetyl-CoA, is sometimes counted as well; it is a route to acetyl-CoA rather than an endpoint, which is why the count is six here and seven elsewhere. Give the number and say which convention it belongs to.",
      cn: "氨基被取走之后，一个氨基酸剩下的是一副**碳骨架**，而二十种氨基酸各有各的降解路线。**这二十条路线只汇聚到六个分子上：丙酮酸、乙酰-CoA、α-酮戊二酸、琥珀酰-CoA、延胡索酸、草酰乙酸。这六个要么本身就是柠檬酸循环的中间物，要么直接喂进循环 —— 所以要记的是六个终点，而不是二十条通路。** 有时还会数上第七个框：乙酰乙酰-CoA；它是通向乙酰-CoA 的一条路，而不是终点，这就是为什么这里数出六个、别处数出七个。报数字时，把你用的是哪一种约定一并说出来。",
      src: "A pp.639-640, figure 18-15"
    },
    {
      link_en: "and before going further, how much of the body's energy this actually accounts for",
      link_cn: "在往下走之前，先说清这条路究竟占身体产能的多少",
      en: "Amino acid catabolism normally supplies only 10 to 15 percent of a human's energy, and flux through these routes shifts with the balance between how much of an amino acid is available and how much is wanted for building things. **These pathways are nowhere near as busy as glycolysis or fatty acid oxidation, and they matter most in exactly two situations: a diet high in protein, and starvation, when the body is dismantling its own protein for fuel.**",
      cn: "氨基酸的分解代谢通常只供给人体 **10% 到 15%** 的能量，而通过这些路线的流量，随「某种氨基酸有多少可用」与「有多少被拿去造东西」之间的平衡而变动。**这些通路远不像糖酵解或脂肪酸氧化那样繁忙，它们最要紧的恰好是两种情形：高蛋白饮食，以及饥饿 —— 那时身体正在拆自己的蛋白当燃料。**",
      src: "A pp.639-640"
    },
    {
      link_en: "one feature of the convergence has to be stated before the sorting makes sense",
      link_cn: "在做分类之前，必须先说清这场汇聚的一个特点",
      en: "Several amino acids appear at more than one of the six destinations. **The reason is that a carbon skeleton is not obliged to stay in one piece: different fragments of the same skeleton can end up in different places, so one amino acid can deliver part of itself to acetyl-CoA and another part to fumarate.** That single fact is why the two categories below overlap at all, instead of being a clean split of twenty into two groups.",
      cn: "有几个氨基酸会出现在这六个终点中的不止一个上。**原因是碳骨架并没有义务保持完整：同一副骨架的不同碎片可以去往不同的地方，所以一个氨基酸完全可以把自己的一部分送到乙酰-CoA、另一部分送到延胡索酸。** 就是这一个事实，使下面那两个类别彼此重叠，而不是把二十种干净地劈成两组。",
      src: "A pp.639-640"
    },
    {
      link_en: "now the first of the two fates: which skeletons can become glucose",
      link_cn: "现在说两种命运中的第一种：哪些骨架能变成葡萄糖",
      en: "Gluconeogenesis — making glucose from smaller precursors — starts from oxaloacetate, and every intermediate of the citric acid cycle can be carried round the cycle to top the oxaloacetate pool up. **So a skeleton that arrives at pyruvate, alpha-ketoglutarate, succinyl-CoA, fumarate or oxaloacetate can be converted into glucose and into glycogen. Those amino acids are the glucogenic ones, and they are the large majority.**",
      cn: "**糖异生**（由更小的前体造出葡萄糖）从**草酰乙酸**起步，而柠檬酸循环的每一个中间物都能沿着循环走到草酰乙酸那里，把草酰乙酸池补上去。**所以，凡是能抵达丙酮酸、α-酮戊二酸、琥珀酰-CoA、延胡索酸或草酰乙酸的骨架，都能被转成葡萄糖和糖原。这些氨基酸就是「生糖」的那一批，而且是绝大多数。**",
      src: "A p.640"
    },
    {
      link_en: "and the one destination that does not work that way",
      link_cn: "而有一个终点不是这样",
      recall_en: "the acetyl group entering the citric acid cycle, and the two carbons that leave as carbon dioxide",
      recall_cn: "乙酰基进入柠檬酸循环，以及随后以二氧化碳形式离开的那两个碳",
      en: "Acetyl-CoA cannot be turned into glucose, and the reason is arithmetic inside the citric acid cycle. **An acetyl group enters by condensing with oxaloacetate, and one turn later two carbons have left as carbon dioxide and the oxaloacetate has been handed back unchanged. Carbon went in and carbon came out; the oxaloacetate pool is exactly the size it was. With no net gain in oxaloacetate there is nothing extra for gluconeogenesis to start from.** **This one fact generates the whole classification below — it is worth deriving rather than memorising, because from it the membership lists follow.**",
      cn: "**乙酰-CoA 变不成葡萄糖**，原因是柠檬酸循环内部的一笔算术。**乙酰基靠与草酰乙酸缩合进入循环，一圈之后，两个碳以二氧化碳的形式离开，而草酰乙酸原样被交还回来。碳进去了，碳也出来了；草酰乙酸池还是原来那么大。草酰乙酸没有净增加，糖异生就没有多出来的起点可用。** **下面整套分类都由这一个事实生成 —— 值得去推而不是去背，因为名单是从它推出来的。**",
      src: "A p.640"
    },
    {
      link_en: "so the exceptions can be predicted before they are looked up",
      link_cn: "于是那些例外，在查表之前就能被预测出来",
      en: "An amino acid fails to be glucogenic only if its **entire** skeleton lands on acetyl-CoA or acetoacetyl-CoA, and **only leucine and lysine do that — they are the two exclusively ketogenic amino acids, and every other amino acid can make some contribution to gluconeogenesis.** Seven amino acids reach acetoacetyl-CoA or acetyl-CoA in whole or in part and can therefore yield ketone bodies: phenylalanine, tyrosine, isoleucine, leucine, tryptophan, threonine and lysine. **Take leucine and lysine out of that list of seven and five are left — tryptophan, phenylalanine, tyrosine, threonine and isoleucine — and those five are both ketogenic and glucogenic, because part of each skeleton goes one way and part the other.** One more wrinkle in the same direction: an amino acid degraded to pyruvate is potentially ketogenic too, since pyruvate itself can be converted to acetyl-CoA.",
      cn: "一个氨基酸要**不能**生糖，唯一的可能是它的**整副**骨架都落在乙酰-CoA 或乙酰乙酰-CoA 上；**而做到这一点的只有亮氨酸和赖氨酸 —— 它们是仅有的两个纯生酮氨基酸，除它们之外的每一个氨基酸都能对糖异生有所贡献。** 有七个氨基酸会全部或部分地抵达乙酰乙酰-CoA 或乙酰-CoA，因而能产出酮体：**苯丙氨酸、酪氨酸、异亮氨酸、亮氨酸、色氨酸、苏氨酸、赖氨酸**。**把亮氨酸和赖氨酸从这七个里去掉，剩下五个 —— 色氨酸、苯丙氨酸、酪氨酸、苏氨酸、异亮氨酸 —— 这五个既生酮又生糖，因为它们各自骨架的一部分走这边、另一部分走那边。** 同一方向上还有一处细节：**被降解成丙酮酸的氨基酸也具有潜在的生酮能力**，因为丙酮酸本身可以转成乙酰-CoA。",
      src: "A p.640, figure 18-15"
    },
    {
      link_en: "and being ketogenic is not a label — it shows up in a person",
      link_cn: "而「生酮」不是一个标签 —— 它会在人身上显出来",
      en: "Ketone bodies are three small water-soluble fuels the liver makes when acetyl units arrive faster than the citric acid cycle takes them: acetoacetyl-CoA becomes acetoacetate, and acetoacetate becomes acetone and beta-hydroxybutyrate. **In uncontrolled diabetes mellitus the liver produces large amounts of them, and the raw material is fatty acids and ketogenic amino acids together — which is the same situation that made amino acids a fuel in the first place, since carbohydrate cannot be used.** **The other side of it is useful rather than pathological: during starvation the brain can burn ketone bodies in place of glucose, which is what makes a ketogenic skeleton worth having.**",
      cn: "**酮体**是三种小分子的水溶性燃料，当乙酰单位到得比柠檬酸循环收得快时，肝脏就制造它们：乙酰乙酰-CoA 变成**乙酰乙酸**，乙酰乙酸再变成**丙酮**和 **β-羟丁酸**。**在未受控制的糖尿病中，肝脏大量生产它们，原料是脂肪酸和生酮氨基酸两样一起 —— 而这正是「氨基酸一开始成为燃料」的那同一种处境：糖类用不上。** **它的另一面则是有用而非病态的：饥饿期间，脑可以烧酮体来代替葡萄糖 —— 这才是「有一副生酮骨架」值钱的地方。**",
      src: "A p.640",
      see: [{ id: "L-23-5-1", en: "diabetes, and the ketone bodies in it", cn: "糖尿病，以及其中的酮体" }]
    },
    {
      link_en: "the membership of the six destinations, starting with the two-carbon and three-carbon ends",
      link_cn: "六个终点各自的成员名单，先从二碳和三碳这一头说起",
      en: "**To pyruvate, in whole or in part: alanine, cysteine, glycine, serine, threonine and tryptophan. To acetyl-CoA by way of acetoacetyl-CoA: leucine, lysine, phenylalanine, tyrosine and tryptophan — and isoleucine, leucine, threonine and tryptophan also reach acetyl-CoA directly.** Notice how often the same names recur across those two lists: tryptophan appears three times in this step alone, which is what a skeleton being cut into pieces with different fates looks like in practice.",
      cn: "**→ 丙酮酸（全部或部分）：丙氨酸、半胱氨酸、甘氨酸、丝氨酸、苏氨酸、色氨酸。→ 经乙酰乙酰-CoA 到乙酰-CoA：亮氨酸、赖氨酸、苯丙氨酸、酪氨酸、色氨酸 —— 此外异亮氨酸、亮氨酸、苏氨酸、色氨酸还直接生成乙酰-CoA。** 注意同样的名字在这两份名单里反复出现：单在这一步里色氨酸就出现了三次 —— 「一副骨架被切成几块、各有各的命运」在实际中就是这个样子。",
      src: "A pp.650, 655"
    },
    {
      link_en: "and the four-carbon and five-carbon ends, where the routes are worth a sentence each",
      link_cn: "再说四碳和五碳这一头，那里每条路线都值得一句话",
      en: "**To alpha-ketoglutarate: arginine, glutamate, glutamine, histidine and proline.** Proline's ring is opened by oxidising the carbon furthest from its carboxyl group to make a Schiff base — a carbon-nitrogen double bond — which is then hydrolysed to the straight-chain glutamate gamma-semialdehyde and oxidised again at that same carbon to give glutamate; arginine reaches the same semialdehyde by way of ornithine, which the urea cycle produces, and one transamination. **To succinyl-CoA: isoleucine, methionine, threonine and valine** — methionine first gives up its methyl group, and three of its four remaining carbons become the propionyl group of propionyl-CoA, which is a precursor of succinyl-CoA. **To fumarate: four carbon atoms of phenylalanine and of tyrosine** — four atoms, not the whole molecule, which is exactly why those two are glucogenic and ketogenic at once. **To oxaloacetate: asparagine and aspartate.**",
      cn: "**→ α-酮戊二酸：精氨酸、谷氨酸、谷氨酰胺、组氨酸、脯氨酸。** 脯氨酸的环是这样打开的：氧化离羧基最远的那个碳，形成一个 **Schiff 碱**（碳氮双键），再水解成直链的谷氨酸 γ-半醛，然后在同一个碳上再氧化一次，得到谷氨酸；精氨酸则经由尿素循环产生的**鸟氨酸**、再一次转氨，抵达同一个半醛。**→ 琥珀酰-CoA：异亮氨酸、甲硫氨酸、苏氨酸、缬氨酸** —— 甲硫氨酸先交出它的甲基，余下四个碳中的三个成为丙酰-CoA 的丙酰基，而丙酰-CoA 是琥珀酰-CoA 的前体。**→ 延胡索酸：苯丙氨酸和酪氨酸的四个碳原子** —— 是四个原子，不是整个分子，这恰恰就是这两者同时生糖又生酮的原因。**→ 草酰乙酸：天冬酰胺和天冬氨酸。**",
      src: "A pp.650, 655",
      see: [{ id: "L-18-2-1", en: "the urea cycle, where that ornithine comes from", cn: "尿素循环 —— 那个鸟氨酸的来处" }]
    },
    {
      link_en: "these routes lean on a small set of cofactors, and two of them do the same kind of job",
      link_cn: "这些路线依赖一小组辅因子，其中两个干的是同一类活",
      en: "**Tetrahydrofolate and S-adenosylmethionine both carry single carbon atoms from one molecule to another, which is what a pathway needs when a skeleton has one carbon too many or one too few.** Two uses have already appeared above: the extra carbon of histidine is removed in a step that uses tetrahydrofolate, and methionine hands its methyl group over as S-adenosylmethionine. **The third cofactor is tetrahydrobiopterin, and it is needed by phenylalanine hydroxylase, the enzyme that oxidises phenylalanine to tyrosine** — which is why tyrosine is not an essential amino acid while phenylalanine is, and why the next two steps are about what happens when that one reaction fails.",
      cn: "**四氢叶酸和 S-腺苷甲硫氨酸都负责把单个碳原子从一个分子搬到另一个分子上** —— 当一副骨架多一个碳或少一个碳时，通路需要的正是这个。上面已经出现过两个用途：组氨酸多出来的那个碳，是在一个用到四氢叶酸的步骤里被移走的；甲硫氨酸则以 S-腺苷甲硫氨酸的形式交出它的甲基。**第三个辅因子是四氢生物蝶呤，它是苯丙氨酸羟化酶所必需的 —— 后者把苯丙氨酸氧化成酪氨酸**，这正是酪氨酸不是必需氨基酸而苯丙氨酸是的原因，也是下面两步要讲「这一个反应失灵会怎样」的原因。",
      src: "A pp.641, 644, 655",
      beyond: true,
      beyondNote: "The names of the three cofactors and what they are used for are on the summary page this node reads (A p.655) and in the two concrete uses on A p.650. Their actual chemistry is on A pp.641-646, which this node does not cover, so nothing more about how they work is claimed here."
    },
    {
      link_en: "one structural fact breaks the rule that all of this happens in the liver",
      link_cn: "有一个结构性事实，打破了「这一切都发生在肝里」这条规则",
      recall_en: "the alanine that muscle sends to the liver, carrying nitrogen and a three-carbon skeleton together",
      recall_cn: "肌肉送往肝脏的那个丙氨酸 —— 一趟带走一个氮和一副三碳骨架",
      en: "The branched-chain amino acids are isoleucine, leucine and valine, named for the methyl branches on their side chains. **Unlike every other amino acid, these three are degraded only outside the liver.** Set that beside the way working muscle exports its surplus nitrogen as alanine, and a division emerges: **muscle keeps and burns the branched-chain carbon itself, while sending the nitrogen to the liver to be made into urea.** Parts of the valine and isoleucine routes also run through the same reactions as fatty acid degradation, so the machinery is shared rather than duplicated.",
      cn: "**支链氨基酸**指的是异亮氨酸、亮氨酸和缬氨酸，名字来自它们侧链上的甲基分支。**与其他所有氨基酸不同，这三个只在肝脏之外被降解。** 把这一条与「工作中的肌肉把多余的氮以丙氨酸形式送出去」并排放，一种分工就浮现出来：**肌肉自己留下并烧掉支链的碳，而把氮送去肝脏做成尿素。** 缬氨酸和异亮氨酸路线的一部分，走的还是与脂肪酸降解相同的那些反应 —— 机器是共用的，不是重造一套。",
      src: "A p.655"
    },
    {
      link_en: "and when one enzyme of these routes is missing, the pathway becomes a disease",
      link_cn: "而这些路线上少了一个酶，通路就变成一种病",
      en: "Phenylketonuria follows from a defective phenylalanine hydroxylase, and it was among the first inheritable metabolic defects ever found in humans. **Recognised early enough in infancy, the intellectual disability it causes can be prevented by diet — and the diet has to supply enough phenylalanine and enough tyrosine for protein synthesis and no more, tyrosine included because a patient who cannot hydroxylate phenylalanine can no longer make tyrosine.** Natural proteins such as milk casein have to be hydrolysed first with most of the phenylalanine taken out. **This is where the warning on aspartame comes from: aspartame is a dipeptide of aspartate and the methyl ester of phenylalanine, so sweetening a food with it adds phenylalanine to it.** Since a lifetime of perfect dietary control is hard and often leaves neurological symptoms anyway, a second treatment was approved in 2018: **phenylalanine ammonia lyase, an enzyme from plants, bacteria and fungi, coupled to polyethylene glycol and injected under the skin, which degrades phenylalanine to harmless trans-cinnamic acid plus a small and non-toxic amount of ammonia.** Screening newborns is worthwhile at 8 to 10 cases per 100,000.",
      cn: "**苯丙酮尿症**源于苯丙氨酸羟化酶的缺陷，它是人类最早被发现的遗传性代谢缺陷之一。**只要在婴儿期足够早被识别出来，它造成的智力障碍可以靠饮食预防 —— 而这份饮食必须只提供刚够合成蛋白质用的苯丙氨酸和酪氨酸，一点不多；之所以连酪氨酸也要供给，是因为羟化不了苯丙氨酸的病人已经造不出酪氨酸了。** 牛奶酪蛋白之类的天然蛋白必须先水解、并把其中大部分苯丙氨酸去掉。**阿斯巴甜上的那行警示就是从这里来的：阿斯巴甜是天冬氨酸与苯丙氨酸甲酯构成的二肽，用它增甜就等于往食物里加苯丙氨酸。** 由于终生完美执行饮食控制很难、而且往往仍留有神经系统症状，2018 年批准了第二种治疗：**苯丙氨酸解氨酶** —— 一种来自植物、细菌和真菌的酶，与**聚乙二醇**偶联后皮下注射，把苯丙氨酸降解成无害的**反式肉桂酸**，外加少量、无毒的氨。**新生儿筛查在每十万人 8 到 10 例的发病率下是划算的。**",
      src: "A p.650"
    },
    {
      link_en: "and the same disease has a second cause, which is not in the enzyme at all",
      link_cn: "同一种病还有第二个病因，而它根本不在那个酶身上",
      recall_en: "tetrahydrobiopterin, the cofactor phenylalanine hydroxylase needs",
      recall_cn: "苯丙氨酸羟化酶所需的那个辅因子：四氢生物蝶呤",
      en: "Phenylketonuria can also come from a defect in the enzyme that regenerates tetrahydrobiopterin, leaving the hydroxylase intact but starved of its cofactor. **That form is harder to treat, because the same cofactor is required to make L-dopa and 5-hydroxytryptophan — the precursors of norepinephrine and serotonin — so blocking its regeneration cuts off two neurotransmitter routes as well. Treatment therefore has to supply those precursors in the diet along with tetrahydrobiopterin itself.** **The general lesson is worth keeping: a cofactor shared between pathways means a single defect appears in all of them at once.**",
      cn: "苯丙酮尿症还可以来自另一个缺陷：**负责再生四氢生物蝶呤的那个酶坏了**，羟化酶本身完好，却拿不到辅因子。**这一型更难治，因为同一个辅因子还是合成 L-多巴和 5-羟色氨酸所必需的 —— 这两者分别是去甲肾上腺素和血清素的前体 —— 所以堵住它的再生，等于同时切断两条神经递质路线。因此治疗必须在补充四氢生物蝶呤之外，把这些前体也一并从饮食中给上。** **值得记住的通则是：一个辅因子被多条通路共用，意味着一处缺陷会在所有这些通路上同时显形。**",
      src: "A p.650"
    },
    {
      link_en: "and one more defect of the same amino acid, which matters far beyond how mild it is",
      link_cn: "同一个氨基酸上还有一个缺陷，它的重要性远远超过它的轻微程度",
      en: "Alkaptonuria comes from a defective homogentisate dioxygenase, further down the phenylalanine route. **It is mild: large amounts of homogentisate are excreted and turn the urine black on oxidation, and affected people are prone to a form of arthritis, but there is little else.** Its importance is historical. **In the early 1900s Archibald Garrod showed that alkaptonuria is inherited and traced the cause to the absence of one enzyme, which made him the first person to connect an inheritable trait with an enzyme.** The line that runs from there to genes carrying instructions for proteins starts in a pathway of amino acid degradation, with black urine.",
      cn: "**尿黑酸症**源于苯丙氨酸路线更下游的**尿黑酸双加氧酶**缺陷。**它很轻：大量尿黑酸被排出，氧化后把尿变黑；患者容易发展出一种关节炎，除此之外没有太多别的。** 它的重要性在历史上。**1900 年代初，Archibald Garrod 证明尿黑酸症是遗传的，并把病因追溯到某一个酶的缺失 —— 他因此成为第一个把可遗传性状与一个酶联系起来的人。** 从那里通往「基因携带蛋白质的指令」的那条线，起点是一条氨基酸降解通路，和一泡变黑的尿。",
      src: "A p.650"
    }
  ],
  terms: [
    { en: "the six major products", cn: "六个主要产物",
      def_en: "Pyruvate, acetyl-CoA, alpha-ketoglutarate, succinyl-CoA, fumarate and oxaloacetate — the molecules that all twenty amino acid skeletons converge onto, and all of them enter the citric acid cycle. Acetoacetyl-CoA is sometimes counted as a seventh, but it is a route to acetyl-CoA rather than a destination.",
      def_cn: "丙酮酸、乙酰-CoA、α-酮戊二酸、琥珀酰-CoA、延胡索酸、草酰乙酸 —— 二十副氨基酸骨架全都汇聚到这六个分子上，而它们都进入柠檬酸循环。乙酰乙酰-CoA 有时被数成第七个，但它是通向乙酰-CoA 的一条路，不是终点。" },
    { en: "glucogenic", cn: "生糖氨基酸",
      def_en: "An amino acid whose skeleton reaches pyruvate, alpha-ketoglutarate, succinyl-CoA, fumarate or oxaloacetate, and can therefore be converted to glucose and glycogen. Every amino acid except leucine and lysine can make some contribution to gluconeogenesis.",
      def_cn: "骨架能抵达丙酮酸、α-酮戊二酸、琥珀酰-CoA、延胡索酸或草酰乙酸的氨基酸，因而可以被转成葡萄糖和糖原。除亮氨酸和赖氨酸之外的每一个氨基酸，都能对糖异生有所贡献。" },
    { en: "ketogenic", cn: "生酮氨基酸",
      def_en: "An amino acid degraded wholly or partly to acetoacetyl-CoA or acetyl-CoA, and therefore able to yield ketone bodies in the liver. Seven qualify — phenylalanine, tyrosine, isoleucine, leucine, tryptophan, threonine, lysine — of which five are also glucogenic, leaving leucine and lysine as the only exclusively ketogenic pair.",
      def_cn: "被全部或部分降解为乙酰乙酰-CoA 或乙酰-CoA、因而能在肝里产出酮体的氨基酸。符合的有七个：苯丙氨酸、酪氨酸、异亮氨酸、亮氨酸、色氨酸、苏氨酸、赖氨酸；其中五个同时也生糖，于是只剩亮氨酸与赖氨酸这一对是纯生酮的。" },
    { en: "why acetyl-CoA cannot make glucose", cn: "乙酰-CoA 为什么造不出葡萄糖",
      def_en: "An acetyl group condenses with oxaloacetate on entering the citric acid cycle, and two carbons leave as carbon dioxide before the oxaloacetate is handed back unchanged, so there is no net gain of oxaloacetate for gluconeogenesis to start from. This single fact is what makes leucine and lysine exceptions.",
      def_cn: "乙酰基进入柠檬酸循环时与草酰乙酸缩合，随后有两个碳以二氧化碳形式离开，而草酰乙酸原样交还，因此草酰乙酸没有净增加，糖异生没有多出来的起点。正是这一个事实，使亮氨酸和赖氨酸成为例外。" },
    { en: "branched-chain amino acids", cn: "支链氨基酸",
      def_en: "Isoleucine, leucine and valine, named for the methyl branches on their side chains. Alone among the twenty, they are degraded only outside the liver — muscle burns their carbon itself and sends only the nitrogen to the liver, as alanine.",
      def_cn: "异亮氨酸、亮氨酸、缬氨酸，名字来自侧链上的甲基分支。它们是二十种里唯一只在肝外降解的，肌肉自己烧掉它们的碳，只把氮以丙氨酸的形式送去肝脏。" },
    { en: "phenylketonuria", cn: "苯丙酮尿症",
      def_en: "A defect of phenylalanine hydroxylase, among the first inheritable metabolic defects found in humans. Managed by a diet supplying just enough phenylalanine and tyrosine, which is why aspartame carries a warning, and since 2018 also by injected PEGylated phenylalanine ammonia lyase. A second form is a defect in regenerating tetrahydrobiopterin, which also blocks L-dopa and 5-hydroxytryptophan synthesis.",
      def_cn: "苯丙氨酸羟化酶的缺陷，是人类最早被发现的遗传性代谢缺陷之一。靠只提供刚够量的苯丙氨酸与酪氨酸的饮食管理 —— 阿斯巴甜的警示由此而来；2018 年起还可注射聚乙二醇化的苯丙氨酸解氨酶。第二型是四氢生物蝶呤再生环节的缺陷，它同时阻断 L-多巴与 5-羟色氨酸的合成。" },
    { en: "alkaptonuria", cn: "尿黑酸症",
      def_en: "A defect of homogentisate dioxygenase. Mild in itself — black urine and a tendency to arthritis — but historically the largest thing in this section: Archibald Garrod traced it to the absence of one enzyme in the early 1900s and was the first to connect an inheritable trait with an enzyme.",
      def_cn: "尿黑酸双加氧酶的缺陷。本身很轻 —— 尿变黑，容易得一种关节炎 —— 但在历史上是这一节里最大的事：1900 年代初 Archibald Garrod 把它追溯到某一个酶的缺失，成为第一个把可遗传性状与一个酶联系起来的人。" }
  ]
};

/* ------------------------------------------------------------------ L-19-1-1 */
window.BIOLITE_SPINE["L-19-1-1"] = {
  assumed: ["ATP", "ADP", "NAD+", "NADH", "NADP+", "NADPH", "FAD", "FMN",
            "enzyme", "protein", "subunit", "heme", "cytosol", "substrate",
            "citric acid cycle", "glycolysis", "gene", "mutation", "cofactor",
            "active site", "conformational change", "pentose phosphate pathway"],
  nodeTitle_en: "The mitochondrial respiratory chain",
  nodeTitle_cn: "线粒体呼吸链",
  title_en: "A long drop taken in stages, and how the order of the stages was proved",
  title_cn: "一段很长的落差被分成几级来走，以及这些台阶的顺序是怎么被证明的",
  steps: [
    {
      en: "Oxidising the NADH made by the citric acid cycle and by glycolysis, all the way to water, releases about 220 kJ for every mole of NADH. **The respiratory chain spends that energy on one thing: pumping protons out of the mitochondrial matrix, so that the free energy of the oxidation ends up stored as a difference in proton concentration and charge across a membrane.** It does this by passing the electrons down a series of carriers, and the carriers are ordered by reduction potential — a measure of how strongly a carrier holds on to electrons, with electrons flowing spontaneously from a carrier that holds them loosely to one that holds them tightly.",
      cn: "把柠檬酸循环和糖酵解造出来的 NADH 一路氧化成水，每摩尔 NADH 放出约 **220 kJ**。**呼吸链把这份能量只用在一件事上：把质子泵出线粒体基质，让这场氧化的自由能最终以「跨膜的质子浓度差和电荷差」的形式存起来。** 它的做法是让电子沿着一串载体往下走，而这些载体是按**还原电位**排序的 —— 还原电位衡量一个载体抓电子抓得有多紧，电子会自发地从抓得松的那个流向抓得紧的那个。",
      src: "A pp.660, 673"
    },
    {
      link_en: "and none of that works unless the container is tight",
      link_cn: "而这一切成立的前提是：容器必须密不透风",
      en: "A mitochondrion has two membranes with opposite properties. **The outer one is freely permeable to small molecules and ions up to about 5,000 daltons, because it is studded with porins — proteins forming open channels. The inner one is impermeable to nearly everything, protons included; anything that crosses it needs its own transporter.** **That impermeability is the precondition for the whole chapter: a proton gradient can only be held across a membrane that does not leak.** The inner membrane is folded into cristae to gain area — a single liver mitochondrion may carry more than 10,000 sets of respiratory chains, and heart mitochondria, with denser folds, carry over three times as many.",
      cn: "线粒体有两层性质相反的膜。**外膜对约 5,000 道尔顿以下的小分子和离子自由通透，因为它上面布满了孔蛋白（porin）—— 一类形成敞开通道的蛋白。内膜则对几乎一切都不通透，质子也在内；任何要穿过它的东西都得有自己的转运体。** **这种不通透正是整章的前提：质子梯度只能维持在一张不漏的膜两侧。** 内膜折叠成**嵴**以争取面积 —— 单个肝细胞线粒体的内膜上可能带着一万套以上的呼吸链，而嵴更密的心肌线粒体是它的三倍以上。",
      src: "A pp.660-661"
    },
    {
      link_en: "what actually travels down the chain is not always the same thing",
      link_cn: "沿链往下走的那个东西，并不总是同一种东西",
      en: "An electron moves between carriers in three different ways: **on its own, as when an iron ion goes from Fe3+ to Fe2+; as part of a hydrogen atom, one proton and one electron together; or inside a hydride ion, which carries two electrons at once.** The single word covering all three is a reducing equivalent, meaning one electron's worth of reducing power however it happens to travel. **This matters because NADH hands over two electrons together while a cytochrome can accept only one at a time, so something has to convert between the two currencies. A flavoprotein does it: a protein carrying FMN or FAD, which can take up one electron and sit stably as a half-reduced semiquinone, or take up two.**",
      cn: "电子在载体之间移动有三种方式：**单独走，比如铁离子由 Fe3+ 变成 Fe2+；作为氢原子的一部分走，即一个质子加一个电子；或者装在氢负离子里走，一次带两个电子。** 把三者统称的那个词是**还原当量**，意思是「相当于一个电子的还原力」，不管它以什么形式在跑。**这一点之所以重要：NADH 一次交出两个电子，而细胞色素一次只收得下一个 —— 中间必须有人做兑换。做这件事的是黄素蛋白：一种带着 FMN 或 FAD 的蛋白，它既可以只收一个电子、稳定地停在半还原的半醌态，也可以收两个。**",
      src: "A pp.662-663"
    },
    {
      link_en: "and the carriers themselves are built from a small set of parts",
      link_cn: "而这些载体本身，是用很少几种零件搭出来的",
      en: "Two families do most of the work. **A cytochrome is a heme-containing protein, and the types are named by where they absorb visible light: type a near 600 nm, type b near 560 nm, type c near 550 nm — which is also the tool used to watch them, since a carrier's absorption changes when it is reduced. An iron-sulfur protein carries iron bound to sulfur, from a single iron held by four cysteines up to a cluster of four irons and four sulfurs.** **Now the claim that matters: reduction potential is a property of the whole protein and not of the metal centre inside it. The same heme in different proteins sits at different potentials, and iron-sulfur centres range from -0.65 to +0.45 V. That is how a cell builds a long staircase of finely spaced steps out of a handful of chemical parts — the protein around each centre sets the height of its step.**",
      cn: "干活的主要是两大家族。**细胞色素是含血红素的蛋白，各型按它们吸收可见光的位置命名：a 型约 600 nm，b 型约 560 nm，c 型约 550 nm —— 而这也正是观察它们的工具，因为一个载体被还原时，它的吸收会变。铁硫蛋白携带与硫结合的铁，从「一个铁被四个半胱氨酸抓着」一直到「四铁四硫的簇」都有。** **现在是要紧的那句：还原电位是整个蛋白的性质，而不是里面那个金属中心的性质。同一种血红素在不同蛋白里坐在不同的电位上；铁硫中心的电位跨度从 −0.65 V 到 +0.45 V。这就是细胞如何用寥寥几种化学零件搭出一段间距细密的长阶梯 —— 每个中心周围的那圈蛋白，决定了它那一级台阶有多高。**",
      src: "A pp.663-664"
    },
    {
      link_en: "so much for the parts. The order they are arranged in was not read off a diagram",
      link_cn: "零件说到这里。而它们排列的顺序，不是从某张图上读出来的",
      en: "The sequence is NADH to ubiquinone — a small fat-soluble carrier that diffuses inside the membrane — then to cytochrome b, cytochrome c1, cytochrome c, cytochrome a, cytochrome a3, and finally to O2. **Three independent methods established it, and they agree. First, the measured reduction potentials were ranked, since electrons flow spontaneously toward the higher one. Second, the whole chain was reduced with no oxygen present and oxygen was then added suddenly, while a spectrometer watched which carrier lost its electrons first — the one nearest oxygen goes first, which reads the order from the far end. Third, one step at a time was blocked with a specific poison: every carrier before the block stays reduced, everything after it turns oxidised, and different poisons blocking different steps triangulate the whole sequence.** **The order is considered established because three unrelated approaches converge on it, not because any one measurement settled it.**",
      cn: "这个顺序是：NADH → **泛醌**（一个能在膜内扩散的小分子脂溶性载体）→ 细胞色素 b → 细胞色素 c1 → 细胞色素 c → 细胞色素 a → 细胞色素 a3 → 最后到 O2。**有三种彼此独立的方法把它确立下来，而三者结论一致。第一，把实测的还原电位排序 —— 电子自发地流向更高的那个。第二，在完全没有氧的条件下把整条链还原掉，然后突然通氧，用分光计盯着看哪个载体最先失去电子 —— 离氧最近的最先，这等于从另一头把顺序读出来。第三，用专一的毒物一次堵住一步：堵点之前的每个载体都保持还原态，之后的全部变成氧化态；用堵不同步骤的不同毒物做三角定位，就能定出整条顺序。** **这个顺序之所以被认为已经确立，是因为三条互不相干的路走到了同一个结论，而不是因为某一次测量把它定死了。**",
      src: "A pp.664-665, figure 19-6"
    },
    {
      link_en: "which makes the poisons themselves worth knowing, because they are the experiment",
      link_cn: "所以那些毒物本身就值得记住 —— 它们就是那个实验",
      recall_en: "the third method just above, inhibitor mapping",
      recall_cn: "紧接着上一步的第三种方法：抑制剂定位",
      en: "**Rotenone, a plant insecticide, and amytal, a barbiturate, and piericidin A block Complex I. Antimycin A and myxothiazol block Complex III. Cyanide and carbon monoxide block Complex IV. Oligomycin and DCCD block ATP synthase rather than the chain. Atractyloside blocks neither — it stops the transporter that exchanges ADP for ATP across the inner membrane.** **One distinction is worth stating separately: an inhibitor stops electrons moving, while an uncoupler lets them keep moving but gives the protons a way back in without passing through ATP synthase, so the gradient is spent as heat. DNP, FCCP and valinomycin do this in the laboratory; the protein UCP1 in brown fat does it deliberately, which is how brown fat warms an animal.**",
      cn: "**鱼藤酮（一种植物杀虫剂）、异戊巴比妥（一种巴比妥类药物）和 piericidin A 阻断复合物 I。抗霉素 A 和 myxothiazol 阻断复合物 III。氰化物和一氧化碳阻断复合物 IV。寡霉素和 DCCD 阻断的不是这条链，而是 ATP 合酶。atractyloside 两者都不阻断 —— 它挡住的是内膜上「以 ADP 换 ATP」的那个转运体。** **有一个区分值得单独说清：抑制剂让电子走不动；解偶联剂则让电子照走不误，却给质子开了一条不经过 ATP 合酶的回程，于是梯度以热的形式被花掉。DNP、FCCP 和缬氨霉素在实验室里干这件事；棕色脂肪里的 UCP1 蛋白则是有意为之 —— 棕色脂肪就是这样给动物供暖的。**",
      src: "A p.667, table 19-4"
    },
    {
      link_en: "the carriers are not loose in the membrane. Most of them are grouped into four machines",
      link_cn: "这些载体并不是散在膜里的 —— 它们大多被编进四台机器",
      en: "**Complex I, NADH dehydrogenase, is by far the largest at 850 kDa and 45 subunits, carrying FMN and iron-sulfur centres. Complex II is succinate dehydrogenase, the smallest at 140 kDa and 4 subunits, with FAD and iron-sulfur centres. Complex III, 250 kDa and 11 subunits, carries hemes and an iron-sulfur centre. Complex IV, cytochrome oxidase, is 204 kDa and 13 subunits, with hemes and two copper centres.** **Cytochrome c belongs to none of them: at 13 kDa and one subunit it is the one freely soluble carrier, shuttling in the intermembrane space between Complexes III and IV.** The four are not present in equal numbers either — in bovine heart the ratio of I to II to III to IV is about 1.1 to 1.3 to 3.0 to 6.7.",
      cn: "**复合物 I（NADH 脱氢酶）迄今最大，850 kDa、45 个亚基，带着 FMN 和铁硫中心。复合物 II 就是琥珀酸脱氢酶，最小，140 kDa、4 个亚基，带 FAD 和铁硫中心。复合物 III，250 kDa、11 个亚基，带血红素和一个铁硫中心。复合物 IV（细胞色素氧化酶），204 kDa、13 个亚基，带血红素和两个铜中心。** **细胞色素 c 不属于其中任何一个：它只有 13 kDa、一个亚基，是唯一自由可溶的载体，在膜间隙里往返于复合物 III 与 IV 之间。** 四者的数量也并不相等 —— 在牛心中，I∶II∶III∶IV 约为 1.1∶1.3∶3.0∶6.7。",
      src: "A p.665, table 19-3"
    },
    {
      link_en: "and the first of those machines shows how electron flow is converted into proton pumping at all",
      link_cn: "而第一台机器展示了「电子流」究竟是怎么被转换成「泵质子」的",
      en: "Complex I is L-shaped, with one arm buried in the membrane and one reaching into the matrix. **It couples a downhill reaction to an uphill one: a hydride ion from NADH plus a proton from the matrix reduce ubiquinone, and that release of energy drives four protons from the matrix to the intermembrane space.** The two sides are written with a shorthand used for every complex: N for the negative matrix side that protons are taken from, P for the positive intermembrane side they are delivered to. **What makes this remarkable is that ubiquinone is reduced far away from the membrane arm that does the pumping, so the coupling cannot be direct chemistry — the energy is transmitted as a long-range change of shape, and three subunits of the membrane arm that resemble a known sodium-proton antiporter are thought to move three of the four protons.**",
      cn: "复合物 I 呈 L 形，一臂埋在膜里，一臂伸进基质。**它把一个下坡反应和一个上坡反应拴在一起：来自 NADH 的一个氢负离子加上基质里的一个质子把泛醌还原，而这份能量的释放，把四个质子从基质赶到膜间隙。** 膜的两侧有一套每个复合物都通用的简写：**N** 指带负电的基质侧（质子从这里被取走），**P** 指带正电的膜间隙侧（质子被送到这里）。**值得注意的是：泛醌被还原的地方，离干泵送活的那条膜臂很远，所以这种偶联不可能是直接的化学反应 —— 能量是以一次长程的形状改变传过去的；膜臂上有三个亚基与一个已知的钠-质子逆向转运体相似，被认为负责搬运四个质子中的三个。**",
      src: "A pp.666-667"
    },
    {
      link_en: "the second machine carries a part that is not on the electron path at all",
      link_cn: "第二台机器上带着一个根本不在电子通路上的零件",
      en: "In Complex II the electrons run succinate to FAD to three iron-sulfur centres to ubiquinone — and the complex also holds a heme b that sits off that path. **Its job appears to be to reduce how often an electron leaks out of the complex onto O2, which would make a damaging oxygen radical.** **The evidence that this matters is clinical: mutations near that heme b or near the ubiquinone site cause hereditary paraganglioma — usually benign tumours of the head and neck, often of the carotid body, the organ that senses how much oxygen is in the blood — and the mechanism is more oxygen radicals and the DNA damage they do.** Mutations in the succinate-binding region instead cause degeneration in the central nervous system and tumours of the adrenal medulla.",
      cn: "在复合物 II 里，电子的路线是：琥珀酸 → FAD → 三个铁硫中心 → 泛醌 —— 而这个复合物还带着一个**不在这条路线上**的血红素 b。**它的职责看来是降低「电子从复合物里漏到 O2 上」的频率 —— 那样会生成有破坏性的氧自由基。** **说明这件事有分量的证据是临床上的：这个血红素 b 附近或泛醌位点附近的突变会引起遗传性副神经节瘤 —— 多为头颈部的良性肿瘤，常见于颈动脉体（感受血中氧含量的那个器官）—— 机制正是氧自由基变多以及它们造成的 DNA 损伤。** 而琥珀酸结合区域的突变，引起的则是中枢神经系统的退行性病变和肾上腺髓质的肿瘤。",
      src: "A p.668"
    },
    {
      link_en: "the third machine has the most intricate bookkeeping, and two separate drug targets to go with it",
      link_cn: "第三台机器的账最绕，也因此有两个各自独立的药物靶点",
      en: "Complex III has two ubiquinone-binding sites, one facing each side of the membrane, and it uses them in one turn of a cycle: **one ubiquinone is reduced at the site facing the matrix while two reduced ubiquinones are oxidised at the site facing the intermembrane space, so the net result is two protons taken from the matrix and four released outside, with two molecules of cytochrome c reduced.** **Only two of those four released protons actually move net charge across the membrane; the other two are balanced by the two electrons delivered to cytochrome c on that same side, so they contribute chemically but not electrically.** **The two sites are also why one complex has two different inhibitors: antimycin A binds the matrix-facing site, myxothiazol the outward-facing one.**",
      cn: "复合物 III 有**两个泛醌结合位点**，膜的两侧各一个，而它在一圈循环里把两个位点都用上：**在朝基质的那个位点还原一个泛醌，同时在朝膜间隙的那个位点氧化两个还原型泛醌 —— 净结果是从基质取走两个质子、向外释放四个质子，并把两分子细胞色素 c 还原。** **释放到外面的这四个质子里，真正带来跨膜净电荷移动的只有两个；另外两个被同一侧交给细胞色素 c 的那两个电子抵消掉了，因此它们在化学上算数、在电学上不算。** **两个位点也正是「同一个复合物有两种不同抑制剂」的原因：抗霉素 A 结合朝基质的那个位点，myxothiazol 结合朝外的那个。**",
      src: "A p.669, figure 19-11"
    },
    {
      link_en: "and the last machine is where oxygen is finally used, one electron at a time",
      link_cn: "最后一台机器，是氧最终被用掉的地方 —— 一次一个电子",
      en: "In Complex IV the electrons run cytochrome c to a two-copper centre, then to heme a, then to a second binuclear centre made of heme a3 and a single copper, and it is there that O2 binds and is reduced to water. **The accounting has two halves that are easy to confuse: for every four electrons passing through, four protons are consumed from the matrix and built into the two water molecules, and four more protons are pumped out to the intermembrane space on top of that.** **And there is a structural consequence: oxygen is reduced one electron at a time at that centre, so partly reduced oxygen has to exist as an intermediate. Normally it stays bound until it is fully water, but a fraction escapes — which is where the next-to-last step of this chain leads.**",
      cn: "在复合物 IV 里，电子的路线是：细胞色素 c → 一个双铜中心 → 血红素 a → 由血红素 a3 与一个铜组成的第二个双核中心 —— O2 正是在那里结合并被还原成水。**这里的账有两半，很容易混：每通过四个电子，就有四个质子从基质被消耗掉、被砌进那两个水分子里；除此之外，还有另外四个质子被泵到膜间隙。** **另有一个结构上的后果：氧在那个中心是一次一个电子被还原的，所以「部分还原的氧」必然要作为中间体存在。正常情况下它一直被结合着，直到变成完整的水；但总有一小部分逃出去 —— 这条链倒数第二步要说的正是它。**",
      src: "A p.670, figure 19-12"
    },
    {
      link_en: "one thing about the four machines that a diagram of separate boxes gets wrong",
      link_cn: "关于这四台机器，「四个独立方框」的画法有一处是错的",
      en: "Complexes I to IV can be separated in a test tube, but inside an intact mitochondrion three of them stick together. **Complexes I, III and IV associate into one supramolecular assembly called a respirasome, resolved directly by electron microscopy of frozen samples; Complex II is the odd one out and stays free.** **The small mobile carriers are not trapped inside: ubiquinone and cytochrome c still diffuse freely between assemblies, so what the respirasome organises is the large protein machines and not the traffic between them.**",
      cn: "复合物 I 到 IV 在试管里可以被分开，但在完整的线粒体内部，其中三个是黏在一起的。**复合物 I、III、IV 会结合成一个叫做「呼吸体（respirasome）」的超分子组装体，已由冷冻样品的电子显微术直接解析出来；复合物 II 是那个例外，保持自由。** **小分子的流动载体并没有被困在里面：泛醌和细胞色素 c 仍然在各组装体之间自由扩散 —— 所以呼吸体组织起来的是那些大蛋白机器，而不是它们之间的往来运输。**",
      src: "A pp.670-671",
      openQuestion_en: "What the supercomplexes are for is not settled; faster electron transfer between complexes and less leakage of electrons onto oxygen are the leading suggestions.",
      openQuestion_cn: "这些超复合物到底是干什么用的，并没有定论；目前主要的两种说法是「让复合物之间的电子传递更快」和「减少电子漏到氧上」。"
    },
    {
      link_en: "and Complexes I and II are not the only doors into this chain",
      link_cn: "而进入这条链的门，不止复合物 I 和 II 两扇",
      recall_en: "ubiquinone, the mobile carrier introduced with the carrier order",
      recall_cn: "泛醌 —— 讲载体顺序时介绍过的那个流动载体",
      en: "Three other pathways deliver electrons, and all three deliver them to ubiquinone. **Fatty acid oxidation — the route that cuts a fatty acid, which is a long hydrocarbon chain with a carboxyl group at one end, into two-carbon pieces — sends them from its first dehydrogenase through the electron-transferring flavoprotein and on to an oxidoreductase that reduces ubiquinone. The glycerol-3-phosphate shuttle has a flavoprotein on the outer face of the inner membrane oxidise glycerol-3-phosphate and pass the electrons straight to ubiquinone, which is also how the reducing power of cytosolic NADH gets in. And dihydroorotate dehydrogenase — dihydroorotate is an intermediate in building pyrimidine nucleotides — sits on that same face and donates to ubiquinone as well.** **So ubiquinone is a junction: four separately taught topics feed one chain, and from ubiquinone onwards every electron takes the same road through Complex III to oxygen.**",
      cn: "另有三条通路往这条链送电子，而且都送到**泛醌**这一层。**脂肪酸氧化（把脂肪酸这条一端带羧基的长链烃剁成两碳片段的那条路线）把电子从它的第一个脱氢酶经电子转移黄素蛋白（ETF）交给一个还原泛醌的氧化还原酶。3-磷酸甘油穿梭则由内膜外侧面上的一个黄素蛋白氧化 3-磷酸甘油、把电子直接交给泛醌 —— 胞质 NADH 的还原力也是这样进来的。二氢乳清酸脱氢酶（二氢乳清酸是搭建嘧啶核苷酸的一个中间物）同样长在这一侧面上，也把电子交给泛醌。** **所以泛醌是一个路口：四个被分开讲授的主题喂进同一条链，而从泛醌往后，每一个电子走的都是同一条路 —— 经复合物 III 直到氧。**",
      src: "A pp.671-672",
      see: [{ id: "L-17-2-1", en: "fatty acid oxidation, where those electrons start", cn: "脂肪酸氧化 —— 那些电子的起点" }]
    },
    {
      link_en: "now the numbers, and they say how good this arrangement actually is",
      link_cn: "现在上数字 —— 它们说明这套安排究竟有多好",
      en: "The potential difference between the NAD+/NADH couple at -0.320 V and the O2/water couple at +0.816 V is 1.14 V, which for two electrons gives about **-220 kJ per mole of NADH**; in a respiring cell, where NADH is kept above NAD+, the real drop is larger still. **Succinate starts from a much less negative potential and its oxidation therefore releases only about -150 kJ per mole, which is the quantitative reason an FADH2-linked substrate is worth less than an NADH-linked one.** Per pair of electrons from NADH, ten protons are pumped: four by Complex I, four by Complex III, two by Complex IV. **Moving one mole of protons against the measured gradient — about 0.15 to 0.20 V of charge difference and about 0.75 pH units, the matrix being the alkaline side — costs about 19 kJ, so ten protons store roughly 190 of the 220 kJ released. Almost all of the energy is captured before a single ATP has been made.**",
      cn: "NAD+/NADH 电对在 **−0.320 V**、O2/水电对在 **+0.816 V**，两者相差 **1.14 V**；对两个电子而言，这给出每摩尔 NADH 约 **−220 kJ**；而在正在呼吸的细胞里，NADH 被维持得高于 NAD+，实际落差还更大。**琥珀酸的起点电位没那么负，所以它的氧化只放出约 −150 kJ/mol —— 这就是「与 FADH2 偶联的底物不如与 NADH 偶联的底物值钱」的定量原因。** 每一对来自 NADH 的电子，共泵出**十个质子**：复合物 I 四个、复合物 III 四个、复合物 IV 两个。**逆着实测的梯度搬一摩尔质子（电荷差约 0.15 到 0.20 V，pH 差约 0.75 个单位、基质是偏碱的那一侧）约需 19 kJ，所以十个质子存下了 220 kJ 中的大约 190 kJ。在还没造出一个 ATP 之前，能量几乎已经全部被捕获住了。**",
      src: "A pp.663-664, 673",
      see: [{ id: "L-19-2-1", en: "how the gradient is spent on making ATP", cn: "这个梯度如何被花在造 ATP 上" }]
    },
    {
      link_en: "and the fraction of oxygen that escapes half-reduced has to be dealt with",
      link_cn: "而那一小部分半还原就跑掉的氧，得有人收拾",
      recall_en: "the partly reduced oxygen left at Complex IV, and the leak Complex II's spare heme suppresses",
      recall_cn: "复合物 IV 那里剩下的部分还原的氧，以及复合物 II 那个备用血红素所压制的那种泄漏",
      en: "A ubiquinone carrying only one extra electron is a radical, and it can hand that electron straight to O2 to make superoxide, mostly at Complexes I and III. **It happens most when electrons enter the chain faster than they leave it — a large proton gradient together with a high ratio of NADH to NAD+, which is a mitochondrion backed up.** Superoxide is reduced further to hydrogen peroxide and then to the hydroxyl radical, the most damaging of the three; superoxide also attacks the four-iron centre of aconitase and frees an iron ion, which turns hydrogen peroxide into hydroxyl radicals of its own. **Between 0.2 and 2 percent of the oxygen a working mitochondrion consumes ends up as superoxide, so disposal is not optional: superoxide dismutase turns two superoxides into hydrogen peroxide and O2; glutathione peroxidase destroys the hydrogen peroxide, oxidising two molecules of glutathione — a small thiol-containing peptide — in doing so; and glutathione reductase restores the glutathione using NADPH.** **The picture is not purely destructive: at low levels these same species act as a signal that oxygen is short, which triggers the cell to adjust its metabolism.**",
      cn: "一个只多带了一个电子的泛醌是**自由基**，它可以把这个电子直接交给 O2，生成**超氧化物**，主要发生在复合物 I 和 III 上。**最容易发生的时候，是电子进入这条链比离开它更快 —— 也就是质子梯度很大、同时 NADH 与 NAD+ 的比值很高：线粒体「堵住了」。** 超氧化物会被进一步还原成**过氧化氢**，再变成三者中破坏力最强的**羟自由基**；超氧化物还会攻击乌头酸酶的四铁中心、释放出一个铁离子，而这个铁离子又能把过氧化氢变成羟自由基。**一个工作中的线粒体所消耗的氧里，有 0.2% 到 2% 最终变成超氧化物，所以清理不是可选项：超氧化物歧化酶把两个超氧化物变成过氧化氢和 O2；谷胱甘肽过氧化物酶把过氧化氢消灭掉，代价是两分子谷胱甘肽（一种含巯基的小肽）被氧化；谷胱甘肽还原酶再用 NADPH 把谷胱甘肽还原回去。** **这幅图景并不是纯粹的破坏：低水平的这些物种充当「氧不够了」的信号，促使细胞调整自己的代谢。**",
      src: "A p.674, figure 19-18",
      see: [{ id: "L-16-2-1", en: "aconitase and the iron-sulfur centre that is attacked", cn: "乌头酸酶，以及被攻击的那个铁硫中心" }]
    }
  ],
  terms: [
    { en: "porin and cristae", cn: "孔蛋白与线粒体嵴",
      def_en: "Porins are outer-membrane proteins forming open channels, which make that membrane freely permeable up to about 5,000 daltons. Cristae are the folds of the inner membrane, which is impermeable even to protons; the folding buys the surface area that carries the respiratory chains.",
      def_cn: "孔蛋白是外膜上形成敞开通道的蛋白，使外膜对约 5,000 道尔顿以下的物质自由通透。嵴是内膜的折叠，而内膜连质子都不让过；折叠换来的是承载呼吸链所需的表面积。" },
    { en: "reducing equivalent", cn: "还原当量",
      def_en: "One electron's worth of reducing power, whatever form it travels in — a bare electron, a hydrogen atom, or a hydride ion carrying two at once. Flavoproteins can accept one electron or two, which is how the chain converts between two-electron donors like NADH and one-electron acceptors like the cytochromes.",
      def_cn: "相当于一个电子的还原力，不论它以何种形式移动 —— 裸电子、氢原子，或一次带两个电子的氢负离子。黄素蛋白既能收一个也能收两个电子，链上「NADH 这类二电子供体」与「细胞色素这类一电子受体」之间的兑换就靠它。" },
    { en: "cytochrome", cn: "细胞色素",
      def_en: "A heme-containing electron carrier, the types named by their absorption maximum in visible light: a near 600 nm, b near 560, c near 550. Its reduction potential is set by the surrounding protein, not by the heme alone. Cytochrome c is the only freely soluble one, moving between Complexes III and IV.",
      def_cn: "含血红素的电子载体，各型按其可见光吸收峰命名：a 型约 600 nm，b 型约 560 nm，c 型约 550 nm。它的还原电位由周围的蛋白决定，而不是由血红素本身决定。细胞色素 c 是唯一自由可溶的一个，往返于复合物 III 与 IV 之间。" },
    { en: "P side and N side", cn: "P 侧与 N 侧",
      def_en: "Shorthand for the two faces of the inner mitochondrial membrane: N for the negative matrix side, which protons are pumped from, and P for the positive intermembrane side, where they accumulate. Every complex's proton stoichiometry is written this way.",
      def_cn: "线粒体内膜两侧的简写：N 指带负电的基质侧，质子从这里被泵走；P 指带正电的膜间隙侧，质子在这里积累。每个复合物的质子计量都用这套写法。" },
    { en: "inhibitor versus uncoupler", cn: "抑制剂与解偶联剂之别",
      def_en: "An inhibitor stops electrons moving: rotenone and amytal at Complex I, antimycin A and myxothiazol at Complex III, cyanide and carbon monoxide at Complex IV, oligomycin and DCCD at ATP synthase. An uncoupler lets electrons keep flowing but gives protons a way back that bypasses ATP synthase, spending the gradient as heat — DNP and FCCP in the laboratory, UCP1 in brown fat.",
      def_cn: "抑制剂让电子走不动：鱼藤酮和异戊巴比妥作用于复合物 I，抗霉素 A 与 myxothiazol 作用于复合物 III，氰化物与一氧化碳作用于复合物 IV，寡霉素与 DCCD 作用于 ATP 合酶。解偶联剂则让电子照常流动，却给质子开一条绕过 ATP 合酶的回程，把梯度当热花掉 —— 实验室里是 DNP 和 FCCP，棕色脂肪里是 UCP1。" },
    { en: "respirasome", cn: "呼吸体",
      def_en: "The assembly of Complexes I, III and IV into one supramolecular structure inside an intact mitochondrion, seen directly by electron microscopy of frozen samples. Complex II stays free, and ubiquinone and cytochrome c still diffuse between assemblies rather than being trapped inside one.",
      def_cn: "在完整线粒体内部，复合物 I、III、IV 组装成的单一超分子结构，已由冷冻样品的电子显微术直接观察到。复合物 II 保持自由；泛醌和细胞色素 c 仍在各组装体之间扩散，并没有被困在某一个里面。" },
    { en: "proton-motive force", cn: "质子动力势",
      def_en: "The energy stored in the proton gradient across the inner membrane, with a concentration part and an electrical part. The measured values are about 0.15 to 0.20 V of charge difference and about 0.75 pH units with the matrix alkaline, which together make one mole of protons worth about 19 kJ.",
      def_cn: "储存在内膜跨膜质子梯度中的能量，包含一个浓度分量和一个电学分量。实测值约为 0.15 到 0.20 V 的电荷差、约 0.75 个 pH 单位（基质偏碱），两者合起来使一摩尔质子值约 19 kJ。" },
    { en: "reactive oxygen species", cn: "活性氧",
      def_en: "Superoxide, hydrogen peroxide and the hydroxyl radical, formed mainly at Complexes I and III when a ubiquinone radical hands an electron straight to O2. Between 0.2 and 2 percent of respired oxygen ends up as superoxide; superoxide dismutase, glutathione peroxidase and glutathione reductase dispose of it, the last running on NADPH.",
      def_cn: "超氧化物、过氧化氢和羟自由基，主要在复合物 I 和 III 处、由泛醌自由基把一个电子直接交给 O2 而生成。呼吸消耗的氧里有 0.2% 到 2% 变成超氧化物；超氧化物歧化酶、谷胱甘肽过氧化物酶和谷胱甘肽还原酶负责清除，最后一个靠 NADPH 运转。" }
  ]
};

/* ------------------------------------------------------------------ L-19-2-1 */
window.BIOLITE_SPINE["L-19-2-1"] = {
  assumed: ["ATP", "ADP", "NADH", "NAD+", "enzyme", "protein", "subunit",
            "cytosol", "glycolysis", "substrate", "active site", "amino acid",
            "glutamate", "aspartate", "oxaloacetate", "malate", "succinate",
            "equilibrium constant", "membrane potential", "transition state",
            "conformational change", "isotope", "gene"],
  nodeTitle_en: "ATP synthesis",
  nodeTitle_cn: "ATP 的合成",
  title_en: "The energy is spent on letting ATP go, and the machine that does it was filmed turning",
  title_cn: "能量花在「放开 ATP」上，而干这件事的那台机器，转动的样子被拍了下来",
  steps: [
    {
      en: "Peter Mitchell's chemiosmotic model says that oxidation and ATP synthesis are joined by nothing but a proton gradient: the respiratory chain pumps protons out of the matrix, and ATP synthase makes ATP as those protons flow back in through a pore in it. **No shared chemical intermediate appears anywhere in that account, which is what made it hard to believe when it was proposed — every other coupled process in biochemistry runs through a molecule that both halves touch.** Everything below is the evidence, and it is unusually direct.",
      cn: "Peter Mitchell 的**化学渗透模型**说：氧化与 ATP 合成之间，除了一个**质子梯度**再没有别的联系 —— 呼吸链把质子泵出基质，而 ATP 合酶在这些质子经它身上的孔道流回来时造出 ATP。**这套说法里从头到尾没有出现任何共享的化学中间物，这正是它当初难以被接受的原因 —— 生物化学里其他所有偶联过程，靠的都是一个两边都要碰的分子。** 下面全部是证据，而且这些证据罕见地直接。",
      src: "A p.675"
    },
    {
      link_en: "first piece of evidence: blocking either half stops the other",
      link_cn: "第一份证据：堵住任何一半，另一半也停",
      en: "Isolated mitochondria given ADP, phosphate and succinate consume oxygen and make ATP, and both can be measured. Cyanide, which blocks the transfer of electrons to oxygen, stops both — no surprise there. **The informative result runs the other way: oligomycin binds ATP synthase and does not touch a single electron carrier, and it stops respiration as well.** **The explanation is pure gradient logic. Block the only way back in for protons and the chain keeps pumping into a gradient that grows until building it costs as much as electron transfer releases; at that point electron flow has nowhere to go and must stop. The two halves are joined, and the join is the gradient.**",
      cn: "给分离的线粒体加上 ADP、磷酸和琥珀酸，它们会耗氧、也会造 ATP，两者都可测。**氰化物**阻断电子交给氧的那一步，两件事都停 —— 这不奇怪。**有信息量的是反方向那个结果：寡霉素结合的是 ATP 合酶，一个电子载体也不碰，可它连呼吸一起停掉了。** **解释完全是梯度的逻辑：堵死质子唯一的回程，呼吸链就继续往一个不断变大的梯度里泵，直到「建立梯度所需的代价」等于「电子传递所释放的能量」；到那一刻电子流无处可去，只能停下。两半确实连着，而连着它们的就是那个梯度。**",
      src: "A p.675, figure 19-20"
    },
    {
      link_en: "second piece: give the protons a private door and ATP stops while respiration speeds up",
      link_cn: "第二份证据：给质子开一扇私门，ATP 停了，呼吸反而更快",
      en: "2,4-dinitrophenol and FCCP are weak acids that dissolve in a membrane. **Each picks up a proton on the outside, carries it across, drops it in the matrix, and — the essential trick — stays soluble enough in the membrane even when charged to diffuse back and fetch another. That is a proton short circuit: the chain runs at full speed, oxygen is consumed, and the energy leaves as heat instead of ATP.** Valinomycin uncouples differently, by letting inorganic ions across and collapsing the electrical half of the gradient rather than the concentration half. **Dinitrophenol was once sold as a slimming drug. It works, because it burns fuel for nothing, and it kills, for exactly the same reason.**",
      cn: "**2,4-二硝基苯酚（DNP）**和 **FCCP** 是能溶进膜里的弱酸。**它们在膜外抓一个质子，带着穿过去，在基质里放掉，然后 —— 这是关键的花招 —— 即便带上了电荷，它们在膜里仍然溶得够好，可以扩散回去再取一个。这就是质子短路：呼吸链全速运转、氧被消耗，而能量以热而不是 ATP 的形式离开。** **缬氨霉素**的解偶联方式不同：它让无机离子过膜，瓦解的是梯度中电学的那一半，而不是浓度的那一半。**二硝基苯酚曾被当作减肥药出售。它确实有效，因为它白白地烧燃料；它也确实致命，理由完全一样。**",
      src: "A p.676, figure 19-21"
    },
    {
      link_en: "third piece, and the decisive one: build the gradient by hand and oxidise nothing at all",
      link_cn: "第三份证据，也是判决性的那一份：手工造一个梯度，什么都不氧化",
      en: "If the only job of electron transfer is to build a gradient, an artificial gradient should make ATP with no oxidisable substrate anywhere. **Mitochondria were equilibrated in a buffer at pH 9 and then moved into one at pH 7 containing valinomycin but no potassium: that leaves two pH units across the inner membrane, and potassium leaving through valinomycin with no counter-ion leaves the matrix negative. Those two together — a difference in proton concentration and a difference in charge — are what the proton-motive force is, here assembled by hand.** **ATP was synthesised. Nothing was oxidised and nothing was reduced — which is as close to a decisive experiment as this subject gets.**",
      cn: "如果电子传递唯一的工作就是造一个梯度，那么一个**人工**梯度就应该能在完全没有可氧化底物的情况下造出 ATP。**人们先把线粒体在 pH 9 的缓冲液里平衡，再移进 pH 7、含缬氨霉素但不含钾的缓冲液：这样内膜两侧就有了两个 pH 单位的差；而钾经缬氨霉素外流又没有配对离子，使基质带负电。一个由 pH 差和电荷差手工拼出来的质子动力势。** **结果 ATP 被合成出来了。没有任何东西被氧化，也没有任何东西被还原 —— 这已经是这门学科里最接近判决性实验的东西。**",
      src: "A pp.676-677, figure 19-22"
    },
    {
      link_en: "so what is the machine at the end of the gradient, and what are its two halves for?",
      link_cn: "那么梯度尽头的那台机器是什么，它的两半各干什么？",
      en: "ATP synthase has a knob sticking into the matrix, called F1, and a part embedded in the membrane, called Fo. **Efraim Racker's group separated them in the early 1960s: strip F1 gently off inner-membrane vesicles and the vesicles still pass electrons from NADH to oxygen, but they can no longer hold a gradient, because the pore in Fo now leaks protons as fast as the chain pumps them — and with no gradient, no ATP. Add the purified F1 back and it re-attaches, plugging the pore, and coupling returns.** **So Fo is the channel and F1 is both the catalytic head and the stopper.** One more fact to keep: isolated F1 on its own hydrolyses ATP, which is why it was first named F1 ATPase — with no gradient to drive it forwards the machine simply runs backwards.",
      cn: "**ATP 合酶**有一个伸进基质的旋钮，叫 **F1**，和一段嵌在膜里的部分，叫 **Fo**。**Efraim Racker 的团队在 1960 年代初把两者分开了：把 F1 从内膜囊泡上轻轻剥掉，囊泡照样能把电子从 NADH 传到氧，却再也维持不住梯度 —— 因为 Fo 上的孔道此刻漏质子的速度与呼吸链泵送的速度一样快；没有梯度，就没有 ATP。把纯化的 F1 加回去，它重新贴上、把孔堵住，偶联也就回来了。** **所以 Fo 是通道，F1 既是催化头也是塞子。** 还有一件事要记住：单独分离出来的 F1 会**水解** ATP，这正是它最初被叫做 F1 ATP 酶的原因 —— 没有梯度推着它正向走，这台机器就干脆倒着跑。",
      src: "A p.677"
    },
    {
      link_en: "and that isolated head, given labelled water, gives away the whole mechanism",
      link_cn: "而那个分离出来的头，泡在标记过的水里，把整个机制泄露了出来",
      en: "Purified F1 was left to hydrolyse ATP in water made with the heavy isotope of oxygen, and the phosphate released was measured. **One round of hydrolysis would put one heavy oxygen atom into each phosphate. The phosphate came back carrying three or four.** **The only way that happens is if the bond is broken and re-made over and over while the phosphate is still sitting on the enzyme, each re-synthesis picking up another labelled oxygen — and this exchange runs with no proton gradient at all.** **On the enzyme surface, then, ADP plus phosphate and ATP sit in an easy equilibrium: the measured constant is about 2.4, against about 100,000 for the same reaction free in solution. Forming the bond is not the hard part.**",
      cn: "人们让纯化的 F1 在用**重氧同位素**做的水里水解 ATP，然后测量放出来的磷酸。**如果水解只发生一次，每个磷酸里应该只进去一个重氧原子。实测拿回来的磷酸带着三到四个。** **唯一能造成这个结果的情形是：磷酸还停在酶上时，那根键被反复地断开又接上，每一次重新合成都带进又一个被标记的氧 —— 而且这种交换在完全没有质子梯度时照样进行。** **也就是说，在酶的表面上，「ADP 加磷酸」与「ATP」处在一个轻易可逆的平衡里：实测的平衡常数约为 2.4，而同一反应在自由溶液中约为十万。成键根本不是难的那一步。**",
      src: "A p.677, figure 19-23"
    },
    {
      link_en: "which forces the question of what the gradient is actually paying for",
      link_cn: "这就逼出一个问题：那梯度到底在为什么买单？",
      recall_en: "the near-zero free-energy change for making ATP on the enzyme, just above",
      recall_cn: "紧接上一步：在酶上生成 ATP 的自由能变化接近于零",
      en: "The enzyme binds ATP with a dissociation constant in the picomolar range and binds ADP with one around ten micromolar — **a difference of about 40 kJ per mole in binding energy, and that binding energy is what pays for forming the bond. It is why the reaction equilibrates so easily up there.** **The consequence is a reaction profile unlike any ordinary enzyme's: for most enzymes the highest barrier is reaching the transition state, but here the highest barrier is letting the finished ATP go. So the proton gradient is not used to push ADP and phosphate together. It is used to make the enzyme let go.** Say that first and every remaining detail of the mechanism follows from it.",
      cn: "这个酶结合 ATP 的**解离常数**在皮摩尔量级，结合 ADP 的约在十微摩尔 —— **两者在结合能上差约 40 kJ/mol，而正是这份结合能支付了成键的代价。这也是那个反应在酶上如此容易达到平衡的原因。** **由此得到一张与任何普通酶都不同的反应曲线：对多数酶来说，最高的能垒是抵达过渡态；而在这里，最高的能垒是把做好的 ATP 放开。所以质子梯度不是用来把 ADP 和磷酸摁到一起的，它是用来让酶松手的。** 先把这一句说出来，机制余下的每一个细节都会跟着顺下来。",
      src: "A pp.677-678, figure 19-24"
    },
    {
      link_en: "and letting go is something the enzyme does at one site at a time",
      link_cn: "而「松手」这件事，酶一次只在一个位点上做",
      en: "F1 is nine subunits of five kinds — three alpha, three beta, and one each of gamma, delta and epsilon — packed like the segments of an orange into a flattened sphere about 8 by 10 nanometres, with a shaft down the middle. **John Walker's crystal structure supplied the fact the mechanism needs: the three beta subunits have identical amino acid sequences and yet, in the same structure, three different shapes. Crystallised with ADP and a form of ATP that cannot be hydrolysed, one site holds that ATP, one holds ADP and one is empty.** **What makes identical proteins differ is the single gamma subunit: its shaft passes through the middle and touches one alpha-beta pair at a time, and whichever pair it touches is forced into the empty shape.**",
      cn: "F1 由五种共九个亚基组成 —— 三个 α、三个 β，加上 γ、δ、ε 各一个 —— 像橘瓣一样码成一个约 8 × 10 纳米的扁球，中间贯穿一根轴。**John Walker 的晶体结构提供了机制所需的那个事实：三个 β 亚基的氨基酸序列完全相同，然而在同一个结构里，它们呈现三种不同的形状。与 ADP 和一种不能被水解的 ATP 共结晶时，一个位点装着那种 ATP，一个装着 ADP，还有一个是空的。** **让相同的蛋白变得不同的，是那唯一的 γ 亚基：它的轴从中间穿过，一次只碰一对 α-β，而被它碰到的那一对就被压成空构象。**",
      src: "A pp.678-680, figure 19-25"
    },
    {
      link_en: "so the three sites take turns, and what makes them take turns is a shaft going round",
      link_cn: "于是三个位点轮流工作，而让它们轮流的，是一根转着的轴",
      en: "Paul Boyer's rotational catalysis: **a beta subunit loosely binds ADP and phosphate; it is then forced into the tight-binding shape, where ADP and phosphate equilibrate with ATP; then it is forced into the empty shape, whose affinity is very low, and the ATP leaves. Every 120 degrees of rotation moves each site one shape onward, so one complete revolution puts every site through all three states and releases three ATP.** The head itself must not turn with the shaft, and it does not: the b and delta subunits hold it against the membrane as a stator, while the shaft and the ring it is attached to turn inside it. **The whole design is a rotary engine in which the fuel is a proton gradient and the product leaves at three positions on the circle.**",
      cn: "Paul Boyer 的**旋转催化**：**一个 β 亚基先松散地结合 ADP 和磷酸；随后被压成紧结合的形状，在那里 ADP 加磷酸与 ATP 达成平衡；再被压成亲和力极低的空构象，ATP 于是离开。每转过 120 度，每个位点就前进一种形状，所以完整转一圈会让每个位点走完全部三种状态，放出三个 ATP。** 头部本身绝不能跟着轴转，事实上它也没有：**b 亚基和 δ 亚基**像**定子**一样把它固定在膜上，而轴连同它所附着的那个环在里面转。**整套设计就是一台旋转发动机：燃料是质子梯度，产物在圆周上的三个位置离开。**",
      src: "A p.680, figure 19-26"
    },
    {
      link_en: "and this is the point where a model stopped being a model",
      link_cn: "而正是在这里，一个模型不再只是模型",
      en: "In the laboratories of Masasuke Yoshida and Kazuhiko Kinosita, F1 was engineered to carry a run of histidines so that it stuck to a nickel-coated microscope slide, and a long fluorescent filament of actin — the protein that muscle is largely built of — was glued to the gamma subunit. **Given ATP to hydrolyse, the filament turned, visibly, under a microscope, through a full 360 degrees. It did not turn smoothly: it went in three discrete jumps of 120 degrees, which is exactly what rotational catalysis predicts.** In a companion experiment the filament was attached instead to one of the ring subunits in the membrane, and the ring turned together with the shaft, showing that the two move as one piece. **From the hydrolysis rate and the drag on the filament, the efficiency of turning chemical energy into movement comes out close to 100 percent.**",
      cn: "在 Masasuke Yoshida 与 Kazuhiko Kinosita 的实验室里，F1 被改造成带一串组氨酸，好让它黏在镀镍的载玻片上；再把一根长长的荧光**肌动蛋白**丝（肌动蛋白是构成肌肉的主要蛋白之一）粘到 γ 亚基上。**给它 ATP 去水解，那根丝就转了起来 —— 在显微镜下肉眼可见，整整转过 360 度。而且它不是平滑地转：它以三次各 120 度的离散跳跃前进，与旋转催化的预言分毫不差。** 在配套实验里，丝改粘到膜内那个环的一个亚基上，环与轴一起转动，说明两者作为一个整体运动。**由水解速率和丝所受的阻力算出来，把化学能转成运动的效率接近 100%。**",
      src: "A p.681, figure 19-27"
    },
    {
      link_en: "the shaft is turned by protons, and how that works decides a number",
      link_cn: "转动这根轴的是质子，而它的工作方式决定了一个数字",
      en: "Fo is one a subunit, two b subunits, and a ring of c subunits. **Each c subunit carries one acidic residue about halfway across the membrane, its pKa shifted so that it can pick a proton up and put it down at neutral pH; the stationary a subunit provides two half-channels, one opening to each side. A proton enters from the crowded side and neutralises that residue's charge, which lets the subunit rotate into the oily middle of the membrane; the ring turns; and when the subunit arrives at the half-channel on the matrix side the proton is let go.** **The number of protons needed for one full turn equals the number of c subunits in the ring — and that number differs between species: 8 in cattle, 10 in yeast and in E. coli, up to 17 in one soil bacterium. So how many protons an ATP costs is not a universal constant.** In an intact mitochondrion the rotor turns at about 6,000 revolutions a minute, a hundred turns a second.",
      cn: "Fo 由一个 **a 亚基**、两个 **b 亚基**和一圈 **c 亚基**构成。**每个 c 亚基在大约膜厚一半的位置上带着一个酸性残基，它的 pKa 被环境挪过，使它能在中性 pH 下取放质子；固定不动的 a 亚基提供两条半通道，各朝膜的一侧开口。质子从拥挤的那一侧进来，把那个残基的电荷中和掉，这个亚基于是得以转进膜的油性中部；环随之转动；等这个亚基转到基质一侧的半通道时，质子被放掉。** **转满一圈所需的质子数，等于环上 c 亚基的个数 —— 而这个数目因物种而异：牛是 8，酵母和大肠杆菌是 10，某种土壤细菌高达 17。所以「一个 ATP 要花几个质子」并不是一个普适常数。** 在完整的线粒体里，这个转子每分钟约转 6,000 圈，也就是每秒一百圈。",
      src: "A pp.681-682, figures 19-28 and 19-29"
    },
    {
      link_en: "which is why the ATP yield per glucose was never going to be a round number",
      link_cn: "所以每分子葡萄糖的 ATP 产额，本来就不可能是个整数",
      recall_en: "the ring size two steps up, and the ten protons the chain pumps per NADH",
      recall_cn: "两步之前那个环的大小，以及呼吸链每个 NADH 泵出的十个质子",
      en: "The question splits into two measurable ones: how many protons leave per NADH oxidised, and how many must come back to make one ATP. **The accepted figures are 10 out per NADH and 6 for succinate, and 4 back in per ATP — of which one is spent not on synthesis but on transport across the membrane. Ten out and four in gives 2.5 ATP per NADH and 1.5 per succinate, which is where those numbers come from and why the total for glucose is 30 to 32 rather than 38.** And the ratio is not even fixed: with a ring of 8 the same arithmetic gives about 2.7 ATP per NADH, with a ring of 10 about 2.3. **Once the two halves are coupled through a gradient instead of through a shared molecule, there is no reason at all for the ratio to be a whole number.**",
      cn: "这个问题可以拆成两个可测量的问题：每氧化一个 NADH 有多少质子出去，以及要造一个 ATP 必须有多少质子回来。**公认的数字是：每个 NADH 出去 10 个、琥珀酸 6 个；每造一个 ATP 回来 4 个 —— 而这 4 个里有 1 个不是花在合成上，而是花在跨膜运输上。十出四进，得到每个 NADH 2.5 个 ATP、每个琥珀酸 1.5 个 —— 这两个数就是这么来的，也是葡萄糖总账为什么是 30 到 32 而不是 38。** 而且这个比值连固定都算不上：环是 8 个亚基时，同样的算术给出每个 NADH 约 2.7 个 ATP；是 10 个时约 2.3 个。**一旦两半是通过梯度而不是通过共享分子来偶联的，这个比值就根本没有理由是整数。**",
      src: "A p.682",
      see: [{ id: "L-16-2-1", en: "the same arithmetic seen from the citric acid cycle's side", cn: "从柠檬酸循环那一侧看同一笔账" }]
    },
    {
      link_en: "and the fourth proton, the one that is not spent on synthesis, has a specific job",
      link_cn: "而那第四个不花在合成上的质子，有它具体的用途",
      en: "ATP is made in the matrix and used in the cytosol, and the inner membrane stops charged molecules, so two dedicated carriers are needed. **The adenine nucleotide translocase is an antiporter — it brings one ADP in and sends one ATP out in the same movement — and since ATP carries four negative charges to ADP's three, each exchange moves one net negative charge outward, which the matrix-negative membrane potential actively favours. So the gradient pays for the exchange too.** That carrier is specifically blocked by atractyloside, a toxic glycoside from a thistle; block it and cytosolic ATP cannot be replaced, which is exactly why the plant poisons. **The phosphate translocase is a symporter, bringing one phosphate in together with one proton — and that proton is the fourth one from the step above.** All three proteins can be isolated together as one assembly. Across the outer membrane, ATP and ADP simply pass through a wide voltage-gated channel that can move a hundred thousand ATP molecules a second.",
      cn: "ATP 在基质里生成、在细胞质里被使用，而内膜拦住带电分子，所以需要两个专门的载体。**腺苷酸转位酶是一个反向转运体 —— 同一个动作里把一个 ADP 送进来、一个 ATP 送出去 —— 而 ATP 带四个负电荷、ADP 带三个，所以每交换一次就净向外移出一个负电荷，而基质带负电的膜电位正好乐意促成这件事。于是这次交换也是梯度买的单。** 这个载体被**苍术苷**（一种来自蓟属植物的毒性糖苷）专一地堵住；一堵，细胞质里的 ATP 就补不回来 —— 那种植物有毒正是因此。**磷酸转位酶则是一个同向转运体，把一个磷酸连同一个质子一起带进来 —— 而这个质子就是上一步里那第四个。** 这三个蛋白可以作为一个组装体被一起分离出来。至于外膜，ATP 和 ADP 直接穿过一个宽大的电压门控通道，它每秒能搬运十万个 ATP 分子。",
      src: "A p.683, figure 19-30"
    },
    {
      link_en: "one loose end remains: the NADH made outside the mitochondrion",
      link_cn: "还剩一个尾巴：在线粒体外面造出来的那些 NADH",
      en: "The inner membrane does not let NADH through, and the dehydrogenase in the matrix accepts electrons only from the inside, so the NADH glycolysis makes in the cytosol cannot simply walk in. Two shuttles carry its electrons in indirectly, **and which one a tissue uses changes the answer.** **The malate-aspartate shuttle, used in liver, kidney and heart, hands the electrons to oxaloacetate to make malate, carries the malate in, and rebuilds NADH inside the matrix — so those electrons start at Complex I and are worth about 2.5 ATP. The glycerol 3-phosphate shuttle, used in skeletal muscle and brain, instead passes the electrons through a flavoprotein to ubiquinone, entering the chain past Complex I and missing its proton pumping entirely — so the same cytosolic NADH is worth only about 1.5 ATP.** **That is the missing half of the 30-to-32 range: the tissue decides what a molecule of glycolytic NADH is worth.**",
      cn: "内膜不让 NADH 通过，而基质里的脱氢酶又只接受来自内侧的电子，所以糖酵解在细胞质里造出的 NADH 没法自己走进去。有两套**穿梭机制**间接地把它的电子送进去，**而组织用哪一套，会改变答案。** **苹果酸-天冬氨酸穿梭用于肝、肾和心：它把电子交给草酰乙酸生成苹果酸，把苹果酸运进去，在基质内部重新造出 NADH —— 于是这些电子从复合物 I 起步，值约 2.5 个 ATP。3-磷酸甘油穿梭用于骨骼肌和脑：它转而通过一个黄素蛋白把电子交给泛醌，从复合物 I 之后才进入这条链，完全错过了复合物 I 的质子泵送 —— 于是同样的胞质 NADH 只值约 1.5 个 ATP。** **这正是「30 到 32」那个区间所缺的另一半解释：一分子糖酵解 NADH 值多少，由组织说了算。**",
      src: "A pp.684, 686, figures 19-31 and 19-32"
    },
    {
      link_en: "and a closing case of an organism spending the gradient on heat, on purpose",
      link_cn: "最后一个例子：有生物**故意**把梯度花在发热上",
      recall_en: "the uncouplers three steps into this chain, which did the same thing chemically",
      recall_cn: "这条链第三步里的解偶联剂 —— 它们用化学手段做的是同一件事",
      en: "Mitochondria of plants, fungi and protists carry an alternative respiratory route: an oxidase that takes electrons from the ubiquinone pool straight to oxygen, bypassing the proton-pumping steps of Complexes III and IV, so the energy comes out as heat and no ATP is made. **It is resistant to cyanide, because it never uses cytochrome oxidase.** **Plants of the arum family — philodendrons, arum lilies, skunk cabbage — use it to heat the spike of their flower 20 to 40 degrees above the surrounding air, which evaporates the compounds that make them smell of rotting flesh and dung and so brings in the flies and beetles that pollinate them. The eastern skunk cabbage flowers in late winter, and the heat lets the spike grow up through snow.**",
      cn: "植物、真菌和原生生物的线粒体带着一条**替代呼吸路线**：一个氧化酶把电子从泛醌库直接交给氧，绕开复合物 III 和 IV 的质子泵送步骤，于是能量以热的形式出来，不产生 ATP。**它抗氰化物，因为它根本不经过细胞色素氧化酶。** **天南星科的植物 —— 喜林芋、马蹄莲、臭菘 —— 用它把花序的肉穗加热到比周围空气高 20 到 40 度，从而把那些让它们闻起来像腐肉和粪便的化合物蒸发出去，引来替它们授粉的蝇类和甲虫。东部臭菘在冬末开花，而这份热量让它的肉穗直接从积雪里顶出来。**",
      src: "A pp.684-685, box 19-1"
    }
  ],
  terms: [
    { en: "chemiosmotic model", cn: "化学渗透模型",
      def_en: "Peter Mitchell's proposal that oxidation and ATP synthesis are joined only by a proton gradient across the inner membrane, with no shared chemical intermediate. Proved by the obligate coupling shown with oligomycin, by uncouplers, and above all by making ATP from an artificial gradient with nothing being oxidised.",
      def_cn: "Peter Mitchell 提出的说法：氧化与 ATP 合成之间唯一的联系是跨内膜的质子梯度，没有任何共享的化学中间物。证据来自寡霉素显示的强制偶联、解偶联剂，以及最有力的那个 —— 用人工梯度在毫无氧化发生的情况下造出 ATP。" },
    { en: "uncoupler", cn: "解偶联剂",
      def_en: "A weak acid soluble in the membrane in both its charged and uncharged forms, so it ferries protons back into the matrix and short-circuits the gradient: respiration runs at full speed and the energy leaves as heat. 2,4-dinitrophenol and FCCP do this; valinomycin instead collapses the electrical half of the gradient.",
      def_cn: "一种在带电和不带电两种形式下都能溶于膜的弱酸，因而能把质子摆渡回基质、让梯度短路：呼吸全速运转，而能量以热的形式离开。2,4-二硝基苯酚和 FCCP 就是这样；缬氨霉素则是瓦解梯度中电学的那一半。" },
    { en: "F1 and Fo", cn: "F1 与 Fo",
      def_en: "The two halves of ATP synthase. Fo is embedded in the membrane and contains the proton pore; F1 is the knob in the matrix carrying the catalytic sites, and it also plugs that pore. Strip F1 off and the vesicle leaks protons and makes no ATP; put it back and coupling returns. Isolated F1 hydrolyses ATP, so it was first called F1 ATPase.",
      def_cn: "ATP 合酶的两半。Fo 嵌在膜里，含有质子孔道；F1 是伸进基质的那个旋钮，带着催化位点，同时也把那个孔堵上。把 F1 剥掉，囊泡就漏质子、造不出 ATP；装回去，偶联就恢复。分离出来的 F1 会水解 ATP，所以它最初被叫做 F1 ATP 酶。" },
    { en: "binding-change mechanism", cn: "结合变化机制",
      def_en: "ATP forms on the enzyme with a free-energy change near zero, because the enzyme binds ATP about ten million times more tightly than ADP — worth about 40 kJ/mol, which pays for the bond. The highest barrier is therefore releasing the ATP, and that is what the proton gradient is spent on.",
      def_cn: "ATP 在酶上生成时的自由能变化接近于零，因为该酶结合 ATP 比结合 ADP 紧约一千万倍 —— 折合约 40 kJ/mol，这份能量支付了成键。于是最高的能垒变成了「把 ATP 放开」，而质子梯度花的正是这笔钱。" },
    { en: "rotational catalysis", cn: "旋转催化",
      def_en: "The three beta subunits of F1 have identical sequences but three different shapes at any moment, imposed by the central gamma shaft. Protons turning the c ring turn that shaft, and every 120 degrees moves each site one shape onward, so one revolution releases three ATP. The rotation was watched directly with a fluorescent actin filament and goes in three discrete jumps.",
      def_cn: "F1 的三个 β 亚基序列完全相同，但在任一时刻呈现三种不同形状，这是由中心的 γ 轴强加的。质子转动 c 环，c 环带着这根轴转，每转 120 度，每个位点就前进一种形状，所以转一圈放出三个 ATP。这个转动被荧光肌动蛋白丝直接观察到，而且是三次离散跳跃。" },
    { en: "the c ring", cn: "c 环",
      def_en: "The rotor of Fo. Each c subunit has one acidic residue mid-membrane whose charge is neutralised when it picks up a proton, which lets it rotate into the lipid; the stationary a subunit supplies a half-channel on each side. Protons per revolution equal the number of c subunits, which is 8 in cattle, 10 in yeast and E. coli and up to 17 elsewhere.",
      def_cn: "Fo 的转子。每个 c 亚基在膜中部带一个酸性残基，抓到质子后电荷被中和，于是它得以转进脂相；固定的 a 亚基在膜的两侧各提供一条半通道。转一圈所需的质子数等于 c 亚基的个数：牛是 8，酵母和大肠杆菌是 10，别处可高达 17。" },
    { en: "adenine nucleotide translocase", cn: "腺苷酸转位酶",
      def_en: "The antiporter that brings one ADP into the matrix while sending one ATP out. Because ATP carries four negative charges and ADP three, each exchange moves a net negative charge outward and is favoured by the membrane potential, so the gradient pays for the transport as well. Atractyloside blocks it, which is why the thistle it comes from is poisonous.",
      def_cn: "把一个 ADP 送进基质、同时把一个 ATP 送出去的反向转运体。由于 ATP 带四个负电荷、ADP 带三个，每次交换净向外移出一个负电荷，因而受膜电位偏爱 —— 也就是说，这项运输同样由梯度买单。苍术苷会堵住它，这正是它所来自的那种蓟有毒的原因。" },
    { en: "the two NADH shuttles", cn: "两套 NADH 穿梭机制",
      def_en: "Cytosolic NADH cannot cross the inner membrane, so its electrons are carried in indirectly. The malate-aspartate shuttle, in liver, kidney and heart, rebuilds NADH inside the matrix and delivers at Complex I, worth about 2.5 ATP. The glycerol 3-phosphate shuttle, in skeletal muscle and brain, delivers to ubiquinone past Complex I, worth about 1.5. The tissue therefore sets the ATP yield per glucose.",
      def_cn: "胞质 NADH 过不了内膜，它的电子只能间接送进去。苹果酸-天冬氨酸穿梭见于肝、肾、心，它在基质内部重造 NADH、从复合物 I 交货，值约 2.5 个 ATP。3-磷酸甘油穿梭见于骨骼肌和脑，它把电子交给泛醌、绕过复合物 I，值约 1.5 个。于是每分子葡萄糖的 ATP 产额由组织决定。" }
  ]
};

/* ------------------------------------------------------------------ L-19-5-1 */
window.BIOLITE_SPINE["L-19-5-1"] = {
  assumed: ["DNA", "RNA", "gene", "genome", "nucleus", "protein", "enzyme",
            "cytosol", "mutation", "ribosome", "ATP", "NADH", "insulin",
            "glucose", "glycolysis", "citric acid cycle", "eukaryote",
            "plasma membrane", "exocytosis", "chromosome", "amino acid"],
  nodeTitle_en: "Mitochondrial genes",
  nodeTitle_cn: "线粒体基因",
  title_en: "A second genome, 37 genes long, and everything that follows from its being that small",
  title_cn: "第二个基因组，只有 37 个基因 —— 以及「它这么小」所带来的一切",
  steps: [
    {
      en: "**The mitochondrion is the only compartment in a human cell that carries its own DNA.** It is a circular double-stranded molecule of 16,569 base pairs holding 37 genes, present at about five copies per mitochondrion, in a cell that contains hundreds or thousands of mitochondria. **Only 13 of the 37 genes encode a protein. The other 24 encode the RNA parts of a translation apparatus belonging to the organelle alone — mitochondria build those 13 proteins on their own ribosomes, which are distinctly different from the ones in the cytoplasm.** Against those 13, roughly 1,200 mitochondrial proteins are encoded in the nucleus, made in the cytoplasm and imported. **Hold the ratio 13 to 1,200: almost everything below is a consequence of it.**",
      cn: "**线粒体是人体细胞里唯一自带 DNA 的隔室。** 那是一个 **16,569 碱基对**的环状双链分子，装着 **37 个基因**；每个线粒体约有五份拷贝，而一个细胞里有成百上千个线粒体。**37 个基因里只有 13 个编码蛋白。另外 24 个编码的是一整套只属于这个细胞器的翻译装置的 RNA 部件 —— 线粒体是在自己的核糖体上造那 13 个蛋白的，而这些核糖体与细胞质里的明显不同。** 与这 13 个相对的是：约 **1,200 个**线粒体蛋白由细胞核编码，在细胞质里合成后被运进来。**把 13 比 1,200 这个比例记住：下面几乎每一条都是它的推论。**",
      src: "A p.692"
    },
    {
      link_en: "so what are those thirteen proteins, and what is missing from the list?",
      link_cn: "那这十三个蛋白是什么，名单上又缺了什么？",
      en: "**All 13 are subunits of the respiratory chain and of ATP synthase, and the distribution is uneven: Complex I contributes 7 of its 45 subunits from this genome, Complex III 1 of 11, Complex IV 3 of 13, and ATP synthase 2 of 8. Complex II contributes none of its 4 — succinate dehydrogenase is built entirely from nuclear genes.** **Two things follow. Every complex that pumps protons has at least one subunit encoded here, so a single lesion in this genome can degrade pumping at more than one place at once; and the one respiratory complex that does not pump is also the one this genome does not touch. And with 13 protein genes there is nothing else for a mutation here to damage — which is why mitochondrial gene defects show up as failures of electron transfer and essentially nothing else.**",
      cn: "**这 13 个全是呼吸链和 ATP 合酶的亚基，而分布并不均匀：复合物 I 的 45 个亚基里有 7 个由这个基因组提供，复合物 III 是 11 个里的 1 个，复合物 IV 是 13 个里的 3 个，ATP 合酶是 8 个里的 2 个。复合物 II 的 4 个亚基里一个也没有 —— 琥珀酸脱氢酶完全由核基因建造。** **由此有两点。凡是泵质子的复合物，都至少有一个亚基编码在这里，所以这个基因组上的一处损伤可以同时削弱好几处的质子泵送；而唯一不泵质子的那个呼吸复合物，恰好也是这个基因组碰不到的那个。另外，既然只有 13 个蛋白基因，这里的突变也就没有别的东西可破坏 —— 这正是线粒体基因缺陷几乎只表现为电子传递失灵的原因。**",
      src: "A p.692, table 19-6",
      see: [{ id: "L-19-1-1", en: "the complexes themselves, and which of them pump", cn: "这些复合物本身，以及哪些会泵质子" }]
    },
    {
      link_en: "a genome this odd needs an origin, and the origin makes a prediction",
      link_cn: "这么奇怪的一个基因组需要一个来历，而这个来历给出一个预言",
      en: "The existence of a separate DNA, separate ribosomes and separate transfer RNAs supports the endosymbiotic theory: **the first organisms able to run respiration-linked ATP production were bacteria, and a primitive eukaryote that lived by fermentation acquired oxidative phosphorylation by taking such bacteria into its cytosol and keeping them. Over a long evolution most of the bacterial genes moved into the host's nucleus, and the guest became an organelle. So this genome is small because most of it left, not because it was ever this small.** **A story like that has to be paid for with a prediction: if early bacteria really did this chemistry, their living descendants should still have closely similar respiratory chains. They do — the dehydrogenases sit in the bacterial cytosol, the chain in the plasma membrane, protons are pumped outward, and E. coli carries the same two-part ATP synthase with its head protruding inward. Relabel three compartments and the machine is the same one: bacterial cytosol for matrix, plasma membrane for inner membrane, outside the cell for intermembrane space.**",
      cn: "有自己的 DNA、自己的核糖体、自己的转运 RNA，这三件事支持**内共生学说**：**最早能进行「与呼吸偶联的 ATP 生产」的生物是细菌；一个靠发酵为生的原始真核生物，把这样的细菌收进自己的细胞质并留了下来，从而获得了氧化磷酸化。经过漫长的演化，细菌的大部分基因迁进了宿主的细胞核，客人变成了细胞器。所以这个基因组之所以小，是因为它的大部分搬走了，而不是它本来就这么小。** **这样一个故事必须用一个预言来买单：如果当初真是细菌干的这套化学，那么它们今天活着的后代应该仍有极其相似的呼吸链。事实正是如此 —— 脱氢酶在细菌的细胞质里，呼吸链在质膜上，质子被向外泵出，而大肠杆菌带着同样一台两部分组成的 ATP 合酶，头部朝内伸出。把三个隔室的名字换一下，这就是同一台机器：细菌细胞质对应基质，质膜对应内膜，细胞外对应膜间隙。**",
      src: "A pp.692-693"
    },
    {
      link_en: "and the bacteria also show that a proton gradient is a more general thing than ATP",
      link_cn: "细菌还表明：质子梯度是比 ATP 更普遍的东西",
      en: "Protons pushed out by respiration are not spent only on ATP. **They also drive uptake of nutrients: a bacterium takes lactose in against its concentration gradient by carrying it inward together with a proton. And they turn things — the rotary motor at the base of a bacterial flagellum, the whip a bacterium swims with, is driven directly by the proton gradient and not by ATP at all.** **That is worth setting beside muscle and beside the flagella and cilia of eukaryotic cells, which all run on ATP hydrolysis instead. So a proton gradient can be spent three ways — on making ATP, on transport, and on movement — and only the first needs ATP synthase.** It seems likely that this way of coupling arose early, before eukaryotes existed; the hedge belongs in the claim.",
      cn: "被呼吸推出去的质子，并不只花在 ATP 上。**它们还驱动养分的摄取：细菌把乳糖连同一个质子一起往里带，从而逆着浓度梯度把乳糖收进来。它们还能驱动转动 —— 细菌鞭毛（细菌用来游动的那根鞭子）根部的旋转马达，是直接由质子梯度驱动的，根本不用 ATP。** **这值得与肌肉、以及真核细胞的鞭毛和纤毛并排放着看 —— 后面这些统统靠水解 ATP 运转。所以质子梯度可以花在三处：造 ATP、运输、运动；而只有第一处需要 ATP 合酶。** 这种偶联方式**看来很可能**在真核生物出现之前就已经形成了 —— 这个保留语气本身就是结论的一部分。",
      src: "A p.693, figure 19-41"
    },
    {
      link_en: "back inside our own cells: this genome is in a bad place and badly defended",
      link_cn: "回到我们自己的细胞里：这个基因组待的地方不好，防守也差",
      en: "Two disadvantages compound. **The first is self-inflicted by the organelle's own job: the respiratory chain is the cell's major producer of reactive oxygen species, so this DNA sits in the compartment where oxygen radicals are made, with no nuclear envelope and no distance between it and them.** **The second is repair: the replication system of this genome is less effective than the nuclear one at correcting mistakes as it copies and at repairing damage afterwards.** **High exposure plus weak correction is why defects here accumulate measurably within a single lifetime, which no one would say of the nuclear genome.** One theory of ageing holds that this accumulation is the primary cause of many of its symptoms — the progressive weakening of skeletal and heart muscle among them. **Keep it at that strength: one theory, not the explanation. Its argument is that the symptoms it picks out are exactly the tissues that turn out below to tolerate a shortfall of ATP worst, and internal consistency of that kind is a reason to take a theory seriously, not evidence that it is right.**",
      cn: "两项劣势叠在一起。**第一项是这个细胞器自己的工作带来的：呼吸链是细胞里活性氧的主要生产者，于是这份 DNA 恰好待在制造氧自由基的那个隔室里，既没有核膜，也没有任何距离把它和它们隔开。** **第二项是修复：这个基因组的复制系统，无论在复制时纠错还是在事后修复损伤上，都不如细胞核那一套有效。** **暴露高、纠错弱，正是这里的缺陷能在一个人的一生之内累积到可测量程度的原因 —— 换成核基因组，没人会这么说。** 关于衰老的**一种理论**认为，这种累积是衰老许多症状的主要原因，其中就包括骨骼肌和心肌的逐渐变弱。**要保持在这个强度上：是一种理论，不是那个解释。它的论据在于，它挑出来的这些症状，恰好就是下文中最经不起 ATP 供应不足的那些组织；这种内部自洽是认真对待一个理论的理由，而不是它正确的证据。**",
      src: "A pp.693-694"
    },
    {
      link_en: "and this genome is passed on in a way no nuclear gene is",
      link_cn: "而这个基因组的传递方式，是任何核基因都没有的",
      en: "**Animals inherit essentially all their mitochondria from the mother, for two reasons that stack. The arithmetic first: an egg is large and holds 100,000 to 1,000,000 mitochondria, while a sperm is small and holds perhaps 100 to 1,000, so the paternal share would be a rounding error even by dilution alone. Then the mechanism: just after fertilisation, maternal phagosomes — vesicles that engulf and digest material inside a cell — migrate to the point where the sperm entered, swallow the mitochondria it brought, and destroy them. Paternal mitochondrial DNA is not merely diluted; it is hunted down.** **What that is for, practically: an affected mother can pass the condition to every one of her children, and an affected father passes it to none. That asymmetry identifies a mitochondrial pedigree before anything has been sequenced.**",
      cn: "**动物的线粒体基本上全部来自母亲，原因有两层，而且是叠加的。先看算术：卵很大，装着 10 万到 100 万个线粒体；精子很小，大概只有 100 到 1,000 个 —— 光靠稀释，父方那一份就已经是舍入误差。再看机制：受精之后不久，母方的吞噬体（细胞内负责吞下并消化物质的囊泡）会迁移到精子进入的位置，把它带进来的线粒体吞掉、降解掉。父方的线粒体 DNA 不只是被稀释，它是被追着清除的。** **这在实践上有什么用：一位患病的母亲可以把这个病传给她所有的孩子，而一位患病的父亲一个也传不了。单凭这种不对称，就能在做任何测序之前认出一个线粒体病的家系。**",
      src: "A p.694"
    },
    {
      link_en: "and there is one concept here with no counterpart at all in nuclear genetics",
      link_cn: "这里还有一个概念，在核遗传学里完全找不到对应",
      en: "A nuclear gene comes in two copies, so a mutation is either there or not. **A cell carries hundreds or thousands of mitochondria with about five genomes each, so a mutation is present as a proportion.** Follow how the proportion is set: damage occurs to one genome in a germ cell from which egg cells develop; that defective mitochondrion replicates alongside the healthy ones and its descendants are handed out at random as the cell divides, so mature eggs end up with different fractions of defective mitochondria, and the many divisions of embryonic development scatter them further between tissues. **The state in which the genomes are not all alike is heteroplasmy, defined against homoplasmy, where every mitochondrial genome in every cell is the same.** **The clinical consequence is the important one: two people carrying the very same mutation, and two tissues in the same person, can range from essentially normal to severely affected. Here the genotype does not predict the phenotype — the dose and its distribution do.**",
      cn: "一个核基因只有两份拷贝，所以突变要么在、要么不在。**而一个细胞里有成百上千个线粒体、每个约五份基因组，于是突变是以「比例」的形式存在的。** 跟着看这个比例是怎么定下来的：在将来发育成卵细胞的某个生殖细胞里，一份基因组受了损伤；这个有缺陷的线粒体与健康的线粒体一起复制，它的后代在细胞分裂时被**随机**分配下去，于是成熟卵细胞里有缺陷线粒体的比例各不相同；而胚胎发育的许多次分裂又把它们在各组织之间进一步打散。**「各份基因组并不相同」的这种状态叫异质性（heteroplasmy），它是相对于同质性（homoplasmy）定义的 —— 后者指每个细胞里的每一份线粒体基因组都一样。** **临床上的推论才是要紧的：带着完全相同突变的两个人，以及同一个人身上的两处组织，可以从基本正常一直到严重受累。在这里，基因型预测不了表型 —— 决定表型的是剂量和它的分布。**",
      src: "A p.694, figure 19-42"
    },
    {
      link_en: "how common is this, and which tissues break?",
      link_cn: "这有多常见，又是哪些组织先垮？",
      en: "About 1 in 5,000 people carry a disease-causing mutation in a mitochondrial protein that lowers the cell's capacity to make ATP. **Read that wording carefully: a mitochondrial protein, not a mitochondrial gene — only a growing subset of those cases is traced to this genome, and the rest are nuclear, exactly as the ratio of 13 to 1,200 predicted.** The tissues that declare themselves are neurons, the muscle cells of skeletal muscle and heart, and the beta cells of the pancreas. **That list is derivable rather than arbitrary: a neuron maintains its ion gradients without pause and stores no fuel, heart muscle contracts without rest, skeletal muscle swings between huge and small demands, and a beta cell — as the last steps here show — uses ATP as a signal rather than as fuel. Every entry is a cell that cannot ride out a shortfall.**",
      cn: "大约每 **5,000 人**中有一人，携带某个线粒体蛋白上的致病突变，使细胞制造 ATP 的能力下降。**这句措辞要读仔细：说的是线粒体**蛋白**，不是线粒体**基因** —— 其中只有越来越多（但仍是一部分）的病例被追溯到这个基因组，其余都在细胞核里，与 13 比 1,200 这个比例所预测的完全一致。** 会先出问题的组织是：神经元、骨骼肌与心肌的肌细胞，以及胰腺的 β 细胞。**这份名单是可以推出来的，不是随便列的：神经元不间断地维持自己的离子梯度、又不储存燃料；心肌收缩不能休息；骨骼肌的需求在极大和极小之间摆动；而 β 细胞 —— 正如最后几步会讲的 —— 是把 ATP 当作信号而不是燃料来用的。每一项都是「扛不住一次供应短缺」的细胞。**",
      src: "A pp.694-695"
    },
    {
      link_en: "and the name of the main disease group is itself that prediction",
      link_cn: "而这类疾病的名字，本身就是那个预测",
      recall_en: "the tissue list one step up: brain and skeletal muscle were the first two entries",
      recall_cn: "上一步那份组织名单：脑和骨骼肌正是排在最前面的两项",
      en: "**The mitochondrial encephalomyopathies are a group of genetic diseases affecting primarily the brain and skeletal muscle, and they are invariably inherited from the mother, since a developing embryo takes all its mitochondria from the egg.** **Two words in that sentence do work. The name itself is a bioenergetic prediction — it names the two tissues that tolerate a lowered ATP supply worst. And invariably is stronger than any other word in this material: not usually, not mostly. A pedigree in which an affected man has affected children argues against a mitochondrial gene, however much the enzyme measurements look like one.**",
      cn: "**线粒体脑肌病是一组主要影响脑和骨骼肌的遗传病，而它们无一例外地遗传自母亲 —— 因为发育中的胚胎，全部线粒体都来自卵。** **这句话里有两个词在干活。病名本身就是一个生物能学上的预测 —— 它点名的正是最经不起 ATP 供应下降的那两种组织。而「无一例外」比这份材料里任何别的措辞都强：不是「通常」，不是「多数」。一个家系里若有患病的男性把病传了下去，那就不支持线粒体基因，不管酶活测定看起来多像。**",
      src: "A p.695"
    },
    {
      link_en: "one disease is worth following from a single base to a single symptom",
      link_cn: "有一种病值得从一个碱基一路跟到一个症状",
      en: "Leber hereditary optic neuropathy causes loss of vision in both eyes in early adulthood. **The lesion is one base change in the mitochondrial gene ND4, which replaces an arginine residue with a histidine in a Complex I subunit; the mitochondria are then partly defective at moving electrons from NADH to ubiquinone. They can still make some ATP from succinate, which enters at Complex II and needs no subunit from this genome at all — but not enough for the constant metabolism of a neuron, and the optic nerve is where that shows.** **Then the control that turns a story into an argument: a single base change in the mitochondrial gene for cytochrome b, a Complex III subunit, produces the same disease. Hit a different complex, get the same illness — so the cause is a general reduction of mitochondrial function, and not a defect of Complex I specifically.**",
      cn: "**Leber 遗传性视神经病变**在成年早期造成双眼视力丧失。**病变是线粒体基因 ND4 上的一个碱基改变，它把复合物 I 一个亚基里的一个精氨酸残基换成组氨酸；这些线粒体从此在「把电子从 NADH 送到泛醌」上部分失灵。它们仍然能从琥珀酸那边造出一些 ATP —— 琥珀酸从复合物 II 进入，而复合物 II 根本不需要这个基因组的任何亚基 —— 但不够供给神经元那种不停歇的代谢，而视神经就是这件事显形的地方。** **接着是把「故事」变成「论证」的那个对照：线粒体上编码细胞色素 b（复合物 III 的一个亚基）的基因，一个碱基的改变，同样产生这个病。打的是另一个复合物，得的是同一种病 —— 所以病因是线粒体功能的总体下降，而不是复合物 I 的某个特定缺陷。**",
      src: "A pp.693, 695"
    },
    {
      link_en: "the next case is worse than a shortage of ATP, and the reason is a loop",
      link_cn: "下一个病例比「ATP 不够」更糟，原因是一个回路",
      recall_en: "the obligate coupling of chain and synthase: block the return path and the chain backs up",
      recall_cn: "呼吸链与合酶之间那种强制偶联：堵住回程，链就会堵住",
      en: "A mutation in the mitochondrial gene ATP6 damages the proton pore of ATP synthase, so ATP is made slowly while the respiratory chain stays perfectly intact. **That combination is the dangerous one. The chain keeps pumping and keeps accepting electrons from NADH, but the protons cannot get back in, so the carriers upstream stay reduced — which is exactly the condition that maximises electron leak onto oxygen. Reactive oxygen species rise, the damage they do to the mitochondrion slows it further, and the cycle feeds itself.** Half the individuals carrying this mutation die within days or months of birth. **This is the clinical face of the coupling proved earlier: a chain that cannot spend its gradient is not merely unproductive, it is actively destructive.**",
      cn: "线粒体基因 **ATP6** 上的突变损坏 ATP 合酶的质子孔道，于是 ATP 造得很慢，而呼吸链完好无损。**恰恰是这个组合最危险。链继续泵、继续从 NADH 收电子，可质子回不去，上游的载体便一直停在还原态 —— 而这正是「电子漏到氧上」最容易发生的条件。活性氧升高，它们对线粒体造成的损伤又让线粒体更慢，回路开始自我喂养。** 携带这个突变的人里，有一半在出生后几天到几个月内死亡。**这就是前面所证明的那种偶联的临床面孔：一条花不掉自己梯度的链，不只是不产出，它是在主动搞破坏。**",
      src: "A p.695",
      see: [{ id: "L-19-2-1", en: "the coupling experiment this disease reproduces", cn: "这个病重演的正是那个偶联实验" }]
    },
    {
      link_en: "and one disease breaks the habit of expecting one gene to mean one protein",
      link_cn: "还有一种病，打破了「一个基因对应一个蛋白」的思维习惯",
      recall_en: "the 24 genes of the organelle's own translation apparatus, from the first step",
      recall_cn: "第一步里那 24 个属于细胞器自身翻译装置的基因",
      en: "Myoclonic epilepsy with ragged-red fibres comes from a mutation in the mitochondrial gene for the transfer RNA that carries lysine — **a gene of the translation apparatus, not of any protein.** **Count the damage: the defect is not in one protein but in the production of several of the proteins that need mitochondrial transfer RNAs to be made, so one point mutation degrades an unpredictable subset of all 13 subunits at once, across several complexes.** **That is why the result is a syndrome rather than a named enzyme deficiency:** uncontrollable muscular jerking, and skeletal muscle fibres holding abnormally shaped mitochondria that sometimes contain paracrystalline structures — the ragged red fibres the name refers to, seen in a muscle biopsy. Other mutations in this genome are held responsible for the progressive weakness of mitochondrial myopathy and for the enlargement and deterioration of heart muscle in hypertrophic cardiomyopathy. **Muscle and heart again, for the same reason as before.**",
      cn: "**肌阵挛性癫痫伴破碎红纤维（MERRF）**源于线粒体上编码「搬运赖氨酸的转运 RNA」的那个基因发生突变 —— **这是翻译装置的基因，不属于任何一个蛋白。** **数一数它破坏了什么：缺陷不在某一个蛋白身上，而在「若干个需要线粒体转运 RNA 才能被合成出来的蛋白」的生产上 —— 于是一个点突变一次性削弱了那 13 个亚基中难以预料的一部分，横跨好几个复合物。** **这就是为什么结果是一个综合征，而不是某种具名的酶缺乏症：** 无法控制的肌肉抽动，以及骨骼肌纤维里形状异常、有时含有类晶体结构的线粒体 —— 病名里的「破碎红纤维」，在肌肉活检中可以看到。这个基因组上的另一些突变，被认为要为线粒体肌病的进行性无力、以及肥厚型心肌病中心肌的增大与劣化负责。**又是肌肉和心脏，理由和前面一样。**",
      src: "A p.695, figure 19-43"
    },
    {
      link_en: "and there is one cell in which a shortage of ATP does not cause weakness but an endocrine disease",
      link_cn: "还有一种细胞，ATP 不够在它身上引起的不是乏力，而是一种内分泌病",
      en: "Insulin is made and exported by the beta cells of the pancreas, and its export hinges on the ATP concentration inside them. **The circuit: when blood glucose is high the beta cell takes glucose up and oxidises it through glycolysis and the citric acid cycle, which raises ATP above a threshold; above that threshold an ATP-gated potassium channel in the plasma membrane closes; the membrane depolarises; voltage-gated calcium channels open; and the calcium coming in triggers exocytosis of the insulin granules.** **Look at what ATP is doing in this one cell type. Everywhere else in metabolism it is the currency that pays for work; here it is the message, and what it reports is how much glucose has arrived. A cell that cannot raise its ATP therefore cannot report a meal, and the failure of insulin release that follows is, in effect, diabetes.**",
      cn: "**胰岛素**由胰腺的 **β 细胞**制造并输出，而它的输出取决于细胞内的 **ATP 浓度**。**这条回路是：血糖高时，β 细胞把葡萄糖摄进来，经糖酵解和柠檬酸循环氧化掉，使 ATP 升到某个阈值之上；一过这个阈值，质膜上一个受 ATP 门控的钾通道就关闭；膜发生去极化；电压门控的钙通道打开；进来的钙触发胰岛素颗粒的胞吐。** **看看 ATP 在这一种细胞里扮演的是什么角色。在代谢的其他任何地方，它都是为做功买单的货币；而在这里，它是那条消息本身 —— 它汇报的是「来了多少葡萄糖」。所以一个升不起 ATP 的细胞，就没法汇报一顿饭；随之而来的胰岛素释放失败，实际上就是糖尿病。**",
      src: "A pp.695-696, figure 19-44"
    },
    {
      link_en: "and three different lesions reach that same threshold from three directions",
      link_cn: "而有三种不同的损伤，从三个方向抵达同一个阈值",
      recall_en: "the ATP threshold that closes the potassium channel, one step up",
      recall_cn: "上一步那个「关掉钾通道」的 ATP 阈值",
      en: "**First, the sensor can be blunted: defects in the gene for glucokinase, the form of hexokinase used by the beta cell to commit glucose to oxidation, cause the rare MODY2, a diabetes of the young. Second, the machinery can fail to be built: mutations in the mitochondrial transfer RNA genes for lysine or leucine limit the expression of the electron transfer components this genome encodes, and type 2 diabetes is common among people carrying such defects — although those cases are a very small fraction of all diabetes, and the qualifier is the difference between an interesting mechanism and a claim about a population. Third, the defence can fail: when nicotinamide nucleotide transhydrogenase, which is part of the mitochondrion's protection against reactive oxygen species, is defective, the accumulating damage slows ATP production and blocks insulin release the same way.** **Three unrelated molecular lesions, one clinical endpoint, because all three end at the same threshold.**",
      cn: "**第一，传感器可以被钝化：编码葡萄糖激酶（β 细胞用来把葡萄糖送上氧化之路的那种己糖激酶）的基因缺陷，导致罕见的 MODY2，即青少年发病的一种糖尿病。第二，机器可以造不出来：线粒体上编码赖氨酸或亮氨酸转运 RNA 的基因突变，会限制这个基因组所编码的电子传递组分的表达，而携带此类缺陷的人中 2 型糖尿病很常见 —— 尽管这些病例在全部糖尿病中只占极小一部分，而这个限定语正是「一个有趣的机制」与「一个关于人群的论断」之间的分界。第三，防御可以失守：当烟酰胺核苷酸转氢酶（线粒体抵御活性氧的装置之一）有缺陷时，累积的损伤同样会拖慢 ATP 的产生、阻断胰岛素的释放。** **三处互不相干的分子损伤，一个临床终点 —— 因为三者最后都停在同一个阈值上。**",
      src: "A p.696"
    },
    {
      link_en: "two things belong at the end, and both correct a common oversimplification",
      link_cn: "最后有两件事要说，它们各自纠正一个常见的过度简化",
      recall_en: "the 13 to 1,200 ratio from the first step, cashed out clinically",
      recall_cn: "第一步那个 13 比 1,200，在这里兑现成临床结论",
      en: "**First, a therapy that exists only because the two genomes sit in different places. If a prospective mother is known to carry a pathogenic mitochondrial gene, mitochondrial donation can keep it from her children: her nuclear genes are transplanted under a microscope into a donor egg emptied of its own nucleus but holding healthy mitochondria, the egg is fertilised outside the body, and the embryo is transferred to her uterus. The United Kingdom approved such three-parent procedures in 2015, and the ethical questions they raise are still argued over.** **Second, a correction worth making out loud: mitochondrial disease can equally come from any of the roughly 1,200 nuclear genes for mitochondrial proteins — a mutation in COX6B1, a nuclear-encoded subunit of Complex IV, gives severe defects of brain development and thickened heart muscle walls, and other nuclear genes encode the proteins that assemble the complexes in the first place. Mitochondrial disease names the organelle that fails, and not the genome that carries the mutation — which is also why mitochondrial donation, which replaces only the mitochondria, does nothing for the nuclear-gene forms.**",
      cn: "**第一件，是一种「只因为两个基因组待在不同地方才存在」的疗法。如果已知一位准母亲携带致病的线粒体基因，线粒体置换可以让它不传给孩子：在显微镜下把她的核基因移植进一枚供体卵 —— 这枚卵的细胞核已被取走，但带着健康的线粒体 —— 在体外受精，再把胚胎移植回她的子宫。英国在 2015 年批准了这类「三亲」操作，而它引出的伦理问题至今仍在激烈争论。** **第二件是纠正：线粒体病同样可以来自那约 1,200 个编码线粒体蛋白的核基因中的任何一个 —— COX6B1（复合物 IV 一个由细胞核编码的亚基）的突变，会造成严重的脑发育缺陷和心肌壁增厚；还有别的核基因编码的是「负责把这些复合物装配起来」的蛋白。线粒体病这个名字说的是哪个细胞器出了故障，而不是哪个基因组带着突变 —— 这也正是为什么只置换线粒体的那种疗法，对核基因型的线粒体病毫无帮助。**",
      src: "A pp.695-696",
      openQuestion_en: "Whether damage by reactive oxygen species, mitochondrial DNA included, underlies Alzheimer, Parkinson and Huntington diseases, heart failure and ageing is stated as a possibility with some evidence behind it, and not as an established cause.",
      openQuestion_cn: "活性氧造成的损伤（包括对线粒体 DNA 的损伤）是否是阿尔茨海默病、帕金森病、亨廷顿病、心力衰竭乃至衰老的底层原因，原文说的是「可能」、有「一些证据」，并没有当作已确立的病因。"
    }
  ],
  terms: [
    { en: "mitochondrial DNA", cn: "线粒体 DNA",
      def_en: "The only DNA in a human cell outside the nucleus: a circular double-stranded molecule of 16,569 base pairs with 37 genes, about five copies per mitochondrion, in a cell holding hundreds or thousands of them. Maternal transmission, heteroplasmy and the accumulation of damage within one lifetime all follow from that copy number and that location rather than from the sequence.",
      def_cn: "人体细胞中唯一位于细胞核之外的 DNA：一个 16,569 碱基对的环状双链分子，带 37 个基因，每个线粒体约五份拷贝，而一个细胞里有成百上千个线粒体。母系传递、异质性，以及损伤在一生之内的累积，都源自这个拷贝数和这个位置，而不是源自序列本身。" },
    { en: "13 genes against 1,200", cn: "13 个基因对 1,200 个",
      def_en: "Only 13 of the 37 mitochondrial genes encode protein, and all 13 are subunits of the respiratory chain and ATP synthase; the other 24 encode the organelle's own translation apparatus. Roughly 1,200 mitochondrial proteins are encoded in the nucleus instead. The ratio predicts that most disease of oxidative phosphorylation is nuclear, and explains why a mutation in this genome damages electron transfer and nothing else.",
      def_cn: "37 个线粒体基因里只有 13 个编码蛋白，而这 13 个全是呼吸链和 ATP 合酶的亚基；另外 24 个编码这个细胞器自己的翻译装置。相对地，约有 1,200 个线粒体蛋白由细胞核编码。这个比例预示了氧化磷酸化疾病多数来自细胞核，也解释了这个基因组上的突变为什么只伤及电子传递。" },
    { en: "endosymbiotic origin", cn: "内共生起源",
      def_en: "The theory that mitochondria descend from aerobic bacteria taken into a fermenting primitive eukaryote, most of whose genes later moved to the host nucleus. Its evidence is the separate DNA, ribosomes and transfer RNAs; its testable prediction is that living bacteria should have closely similar respiratory chains, which they do, down to a two-part ATP synthase in the plasma membrane of E. coli.",
      def_cn: "认为线粒体源自被一个靠发酵为生的原始真核生物收进体内的需氧细菌，其大部分基因后来迁入宿主细胞核。证据是那套独立的 DNA、核糖体和转运 RNA；可检验的预言是「今天的细菌应当有极其相似的呼吸链」，而事实确实如此 —— 连大肠杆菌质膜上那台两部分组成的 ATP 合酶都对得上。" },
    { en: "proton turbine", cn: "质子涡轮",
      def_en: "The rotary motor at the base of a bacterial flagellum, turned directly by protons flowing back into the cell rather than by ATP hydrolysis — unlike muscle and unlike eukaryotic flagella and cilia. It shows that a proton gradient can be spent on movement and on transport as well as on ATP, so chemiosmosis is more general than ATP synthase.",
      def_cn: "细菌鞭毛根部的旋转马达，直接由流回细胞的质子驱动，而不是靠水解 ATP —— 这与肌肉、以及真核生物的鞭毛和纤毛都不同。它说明质子梯度除了造 ATP，还可以花在运动和运输上，因此化学渗透比 ATP 合酶更普遍。" },
    { en: "heteroplasmy and homoplasmy", cn: "异质性与同质性",
      def_en: "Heteroplasmy is the state in which the mitochondrial genomes in one cell or one organism are not all alike, so a mutation is present as a proportion rather than as a yes or no; homoplasmy is the state in which every genome in every cell is identical. The proportion is set by chance during oocyte maturation and embryonic division, which is why the same mutation can be nearly harmless in one person or tissue and severe in another.",
      def_cn: "异质性指一个细胞或一个个体内的线粒体基因组并不全都相同，于是突变是以比例而非有无的形式存在；同质性则指每个细胞里的每一份基因组都一样。这个比例由卵母细胞成熟与胚胎分裂过程中的随机分配决定 —— 这正是同一个突变在一个人或一处组织里几乎无害、在另一处却很严重的原因。" },
    { en: "maternal inheritance", cn: "母系遗传",
      def_en: "Mitochondria, and therefore this genome, come from the mother alone. An egg holds 100,000 to 1,000,000 mitochondria against a sperm's 100 to 1,000, and on top of that dilution maternal phagosomes migrate to the site of sperm entry after fertilisation and digest the mitochondria it brought. The pedigree consequence: an affected mother may transmit to all her children, an affected father to none.",
      def_cn: "线粒体（因而这个基因组）只来自母亲。卵含 10 万至 100 万个线粒体，精子只有 100 到 1,000 个；在这层稀释之上，受精后母方的吞噬体还会迁到精子入口处，把它带来的线粒体消化掉。家系上的推论是：患病的母亲可能传给她所有的孩子，患病的父亲一个也传不了。" },
    { en: "Leber hereditary optic neuropathy", cn: "Leber 遗传性视神经病变",
      def_en: "Bilateral loss of vision in early adulthood from one base change in the mitochondrial gene ND4, replacing an arginine with a histidine in a Complex I subunit. The mitochondria still make some ATP from succinate at Complex II but not enough for the optic nerve. A base change in the mitochondrial cytochrome b gene, in Complex III, causes the same disease — the control showing the cause is a general loss of mitochondrial function.",
      def_cn: "成年早期双眼视力丧失，源于线粒体基因 ND4 的一个碱基改变，把复合物 I 某个亚基里的一个精氨酸换成组氨酸。这些线粒体仍能经复合物 II 从琥珀酸造出一些 ATP，但不够视神经用。线粒体上细胞色素 b（复合物 III）基因的一个碱基改变会引起同一种病 —— 这个对照说明病因是线粒体功能的总体下降。" },
    { en: "ATP6", cn: "ATP6",
      def_en: "One of the two ATP synthase subunits encoded by mitochondrial DNA. A mutation damages the proton pore, so ATP synthesis is slow while the respiratory chain stays intact — the combination that maximises electron leak, raising reactive oxygen species and setting up a self-feeding cycle of damage. Half of those carrying it die within days or months of birth.",
      def_cn: "线粒体 DNA 编码的两个 ATP 合酶亚基之一。突变损坏质子孔道，于是 ATP 合成很慢而呼吸链完好 —— 正是这个组合使电子泄漏最大化，活性氧升高，形成自我喂养的损伤循环。携带者有一半在出生后数天到数月内死亡。" },
    { en: "MERRF", cn: "MERRF（肌阵挛性癫痫伴破碎红纤维）",
      def_en: "A syndrome from a mutation in the mitochondrial gene for the lysine transfer RNA. Because that gene belongs to the translation apparatus, the defect is in making several of the 13 mitochondrially encoded subunits at once, across several complexes — hence a syndrome rather than one enzyme deficiency: muscular jerking, and muscle fibres full of abnormally shaped mitochondria with paracrystalline inclusions.",
      def_cn: "源于线粒体上赖氨酸转运 RNA 基因突变的一个综合征。由于该基因属于翻译装置，缺陷落在「同时造不好那 13 个线粒体编码亚基中的若干个」上，横跨几个复合物 —— 所以是综合征而不是某一种酶缺乏：肌肉抽动，以及肌纤维中大量形状异常、含类晶体包涵物的线粒体。" },
    { en: "the ATP-gated potassium channel of the beta cell", cn: "β 细胞的 ATP 门控钾通道",
      def_en: "Where a bioenergetic quantity becomes an endocrine signal: glucose is oxidised, ATP rises past a threshold, this channel closes, the membrane depolarises, calcium channels open and insulin granules are released. In this one cell type ATP is the message rather than the currency, which is why any defect of oxidative phosphorylation there can produce diabetes.",
      def_cn: "一个生物能学的量在这里变成内分泌信号：葡萄糖被氧化，ATP 升过阈值，这个通道关闭，膜去极化，钙通道打开，胰岛素颗粒被释放。在这一种细胞里，ATP 是消息而不是货币 —— 这就是那里任何一处氧化磷酸化缺陷都可能造成糖尿病的原因。" },
    { en: "mitochondrial donation", cn: "线粒体置换",
      def_en: "Transplanting a prospective mother's nuclear genes into a donor egg emptied of its nucleus but carrying healthy mitochondria, fertilising it outside the body and transferring the embryo. Approved in the United Kingdom in 2015 and still ethically debated. It works only because the two genomes are physically separable, and it does nothing for the nuclear-gene forms of mitochondrial disease.",
      def_cn: "把一位准母亲的核基因移植进一枚已去核、但带着健康线粒体的供体卵，体外受精后再移植胚胎。英国于 2015 年批准，伦理争论至今未息。它之所以可行，只是因为两个基因组在物理上可以分开；而对核基因型的线粒体病，它毫无作用。" }
  ]
};
