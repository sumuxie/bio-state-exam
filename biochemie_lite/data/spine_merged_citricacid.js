/* Merged spine — the citric acid cycle. 速通简洁版, ONE spine per TOPIC.

   Four nodes go in and one chain comes out: L-16-2-1 (Lehninger) as the backbone,
   with 6-2-2-1, 6-2-2-2 and 6-2-2-3 folded into it. No per-node spine is written for
   the three Czech nodes — a merged `key:` spine shadows them, so one would never be
   seen.

   The merge rule: the Lehninger telling is the backbone. The other account is folded
   in only where it ADDS — an EC number, a name the exam uses, a mechanism the
   backbone states without explaining, a consequence the backbone does not draw.
   Where both say the same thing, the Lehninger sentence stands. Every step keeps a
   `src` naming the pages it was read from, and a step built from both carries both,
   separated by a middle dot. A is Lehninger; B is the state-exam textbook, §6.2.2.

   Three things the merge actually bought, recorded here so they are not re-derived:
     · citrate's hydroxyl sits on a TERTIARY carbon, which is why aconitase has to
       exist at all — the backbone names the isomerisation but never says why (B p.138);
     · both accounts count the ATP yield and disagree: 3/2 per NADH/FADH2 → 38 per
       glucose (B pp.139-140) against measured 2.5/1.5 → 30-32 (A p.589). Same
       biochemistry, different assumed ratio; step 16 resolves it and recomputes the
       captured fraction;
     · B asserts the citrate-synthase step is "exergonic" and prints no ΔG and no
       reason. A supplies both the reason (enzyme-bound citroyl-CoA, hydrolysed) and
       why it MUST be strongly exergonic (micromolar oxaloacetate) — step 5.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------- 柠檬酸循环（三羧酸循环） ---- */
window.BIOLITE_SPINE["key:citric-acid-cycle"] = {
  assumed: ["ATP", "ADP", "GTP", "GDP", "AMP", "NAD+", "NADH", "NADP+", "NADPH",
            "FAD", "FADH2", "coenzyme A", "coenzyme", "cofactor", "glucose",
            "pyruvate", "glycolysis", "cytosol", "cytoplasm", "amino acid",
            "fatty acid", "alanine", "isoleucine", "leucine", "valine", "cysteine",
            "histidine", "enzyme", "protein", "subunit", "domain", "active site",
            "substrate", "gene", "gene duplication", "messenger RNA", "mitochondrion",
            "mitochondria", "membrane", "respiratory chain", "electron", "proton",
            "oxygen", "water", "carbon dioxide", "phosphate", "inorganic phosphate",
            "hydrolysis", "equilibrium", "free energy", "kinase", "isozyme",
            "induced fit", "allosteric", "ester", "isotope", "tissue", "bacteria",
            "cell", "iron", "ferritin", "transferrin", "sterol", "lipoate",
            "lipoic acid", "hydroxyl", "carboxyl", "carbonyl", "methyl", "ketone",
            "alcohol", "acyl group", "sulfur", "double bond", "oxidation",
            "shuttle", "chiral centre", "conformational change", "magnesium",
            "flavoenzyme", "biosynthesis", "metabolism"],
  nodeTitle_en: "The citric acid cycle",
  nodeTitle_cn: "柠檬酸循环",
  title_en: "Why this pathway has to be a cycle, why a methyl group had to become a methylene first, and why two textbooks count its ATP differently",
  title_cn: "这条通路为什么非得是个循环、为什么必须先把一个甲基变成亚甲基，以及两本书为什么把它的 ATP 算出两个数",
  steps: [
    {
      en: "Acetyl-CoA is a two-carbon acetyl group carried on coenzyme A through a thioester bond, meaning a bond between an acyl group and a sulfur atom. Sugars, fatty acids and most amino acids all arrive as acetyl-CoA once they have been broken down: from the pyruvate glycolysis makes, from the pyruvate made when alanine hands its amino group to another molecule, and in large amounts from the breakdown of fatty acids. **The citric acid cycle oxidises that acetyl group completely to two molecules of carbon dioxide, and keeps the electrons stripped off it on NAD+ and FAD.** Nine numbered, enzyme-catalysed reactions do it, all of them inside the mitochondrial matrix, and one turn of the cycle generates 3 NADH, 1 FADH2 and 1 GTP while fully oxidising those two carbons; because citrate carries three carboxyl groups the same pathway is also named the tricarboxylic acid cycle.",
      cn: "乙酰-CoA 是一个两碳的乙酰基，通过硫酯键挂在辅酶 A 上；硫酯键就是酰基与硫原子之间的键。糖、脂肪酸和大多数氨基酸被拆到最后，都以乙酰-CoA 的形式到场：来自糖酵解做出的丙酮酸，来自丙氨酸把氨基交给别的分子之后生成的丙酮酸，以及大量来自脂肪酸的分解。**柠檬酸循环把这个乙酰基彻底氧化成两分子二氧化碳，并把从它身上剥下来的电子留在 NAD+ 和 FAD 上。**做这件事的是九个编号的酶促反应，全部发生在线粒体基质中；循环每转一圈把那两个碳完全氧化掉，并生成 3 个 NADH、1 个 FADH2 和 1 个 GTP。柠檬酸本身带三个羧基，所以这条通路又叫三羧酸循环。",
      src: "A p.580 · B §6.2.2, p.136"
    },
    {
      link_en: "and that turns out to be chemically hard",
      link_cn: "而这件事在化学上很不好办",
      en: "Cut the acetyl group off coenzyme A and what is left is free acetate, a two-carbon acid that cannot be oxidised where it stands. Knock its carboxyl off as carbon dioxide and the other carbon leaves as methane, and apart from a few bacteria that live on methane, nothing has the enzymes or cofactors to oxidise methane. What a cell oxidises easily is a methylene group, one carbon carrying two hydrogens, sitting next to a carbonyl, which is a carbon double-bonded to oxygen: the oxygen drains electrons away, so a carbanion — a carbon holding a lone pair and a negative charge — can form on the neighbouring carbon, and carbanions are how carbon-carbon bonds get made and broken in metabolism. **An acetyl group offers a methyl instead, three hydrogens on a carbon with no carbonyl beside it, and the shape of this whole pathway is built around getting round that.**",
      cn: "把乙酰基从辅酶 A 上切下来，剩下的是游离的乙酸，一个二碳酸，而它在原地没法被氧化。把它的羧基以二氧化碳的形式敲掉，另一个碳就以甲烷的形式离开；除了少数靠甲烷为生的细菌，没有生物有酶或辅因子去氧化甲烷。细胞容易氧化的是亚甲基，即一个带两个氢的碳，而且要紧挨着羰基；羰基就是一个与氧双键相连的碳：氧把电子拉走，于是邻碳上可以形成碳负离子，即带着孤对电子和负电荷的碳，而代谢里碳-碳键的生成与断裂靠的正是碳负离子。**乙酰基给出的却是一个甲基：一个碳上顶着三个氢，旁边没有羰基可用；整条通路的形状，就是为了绕开这一件事才长成这样。**",
      src: "A p.580"
    },
    {
      link_en: "so the first reaction of the cycle exists to fix exactly that",
      link_cn: "所以循环的第一个反应，存在的意义就是解决这一件事",
      en: "The first enzyme is citrate synthase, EC 4.1.3.7, where an EC number is the four-part code that names a reaction rather than a protein. It joins the acetyl group of acetyl-CoA onto oxaloacetate, a four-carbon acid carrying a carbonyl at C-2, and the products are the six-carbon citrate and free coenzyme A. The joining is an aldol condensation, which means a carbon-carbon bond made between an activated carbon and a carbonyl carbon, and it is possible because a thioester cannot spread its electrons onto sulfur the way an ordinary oxygen ester spreads them onto oxygen: the carbonyl of acetyl-CoA therefore stays sharply electron-poor and keeps the methyl beside it activated. **The methyl nobody could touch is now a methylene inside citrate with a carbonyl-bearing carbon on either side of it, and from here on there is something to oxidise.**",
      cn: "第一个酶是柠檬酸合酶，EC 4.1.3.7；EC 编号是一个四段式代号，它命名的是反应而不是蛋白。它把乙酰-CoA 上的乙酰基接到草酰乙酸上——草酰乙酸是一个四碳酸，C-2 上带着一个羰基——产物是六碳的柠檬酸和游离的辅酶 A。这次接合是一次羟醛缩合，即在一个被活化的碳与一个羰基碳之间成键；它之所以做得成，是因为硫酯不能像普通氧酯把电子摊到氧上那样把电子摊到硫上：乙酰-CoA 的羰基因此一直明显缺电子，旁边那个甲基也就一直处于被活化的状态。**原来动不了的那个甲基，如今成了柠檬酸内部的一个亚甲基，两侧都有带羰基的碳撑着，从这里开始才有东西可氧化。**",
      src: "A p.580 · B §6.2.2, pp.136-137"
    },
    {
      link_en: "before the consequences of that, one fact about where all this happens",
      link_cn: "在谈它的后果之前，先交代这一切发生在哪里",
      en: "In eukaryotes every reaction of the cycle runs in one compartment: the mitochondrial matrix, which is the aqueous space enclosed by the inner membrane of a mitochondrion. Eugene Kennedy and Albert Lehninger established it in 1948 by isolating mitochondria and finding in them every enzyme and coenzyme of the cycle, plus everything needed for electron transfer. **That compartment also holds fatty acid oxidation and the breakdown of several amino acids, so three fuels reach one place and hand their electrons to one respiratory chain in one membrane.** In most bacteria there is no such compartment: the enzymes sit in the cytosol and the plasma membrane does the job the inner mitochondrial membrane does in us.",
      cn: "在真核生物里，循环的每一步都在线粒体基质中进行；基质就是线粒体内膜围出来的那个水相空间。Eugene Kennedy 与 Albert Lehninger 在 1948 年把线粒体分离出来，在其中找齐了这个循环的每一种酶和辅酶，以及电子传递所需的一切，从而确立了这一点。**同一个隔室里还装着脂肪酸氧化和几种氨基酸的降解，于是三类燃料被带到同一个地方，电子交给同一张膜上的同一条呼吸链。**大多数细菌没有这样的隔室：循环的酶就在细胞质里，质膜扮演我们体内线粒体内膜的角色。",
      src: "A p.580 · B §6.2.2, p.136",
      see: [{ id: "L-17-2-1", en: "fatty acid oxidation, the second fuel arriving in that compartment", cn: "脂肪酸氧化——到达同一隔室的第二类燃料" }]
    },
    {
      link_en: "and joining the acetyl group to a carrier creates a new problem, which is where the shape of the pathway comes from",
      link_cn: "把乙酰基接到一个载体上又制造了新问题——这条通路的形状正是从这里来的",
      en: "Oxaloacetate is used up in making citrate, and if it were simply spent a cell would need one fresh oxaloacetate for every acetyl group it burns. **The same four-carbon acid is handed back at the last reaction, so across one turn nothing is consumed but the acetyl group and oxaloacetate works catalytically rather than being used up.** Its steady-state level in the matrix is micromolar, below one millionth molar, and both ends of the cycle are shaped by that. Citrate synthase has to be strongly exergonic, meaning it releases a lot of free energy, or nothing would start at that concentration; it is, because the condensation runs through an enzyme-bound citroyl-CoA whose thioester is then hydrolysed, and that hydrolysis drags the whole reaction forward. Malate dehydrogenase is the enzyme that remakes oxaloacetate at the far end, and it works against an equilibrium lying far to the left and runs only because citrate synthase carries its product away the moment it appears.",
      cn: "草酰乙酸在生成柠檬酸时被用掉了；如果它就这么被消耗掉，细胞每烧一个乙酰基就得配一个新的草酰乙酸。**同一个四碳酸在最后一步被交还回来，所以走完一圈被消耗掉的只有那个乙酰基，草酰乙酸是催化性的而不是被用掉的。**它在基质中的稳态浓度是微摩尔级，低于百万分之一摩尔，而循环的两头都是被这个数字塑形的。柠檬酸合酶必须是强放能的，即放出大量自由能，否则在这个浓度下根本启动不了；它确实是，因为这场缩合要经过一个酶结合态的柠檬酰-CoA，其硫酯随后被水解，而这次水解把整个反应拽向前。苹果酸脱氢酶——在另一头把草酰乙酸重新做出来的那个酶——面对的平衡远远偏向左边，它跑得动，只是因为草酰乙酸一出现就被柠檬酸合酶拿走。",
      src: "A pp.580-581, 587 · B §6.2.2, p.139"
    },
    {
      link_en: "citrate synthase has a second trick, and it is about not wasting fuel",
      link_cn: "柠檬酸合酶还有第二个花招，讲的是别浪费燃料",
      en: "Citrate synthase is a homodimer, two identical subunits, and each subunit has one large rigid domain and one smaller flexible domain with the active site between them. The two substrates bind in a fixed order: oxaloacetate goes first, its binding swings the flexible domain over, and only that movement creates the binding site for acetyl-CoA. A further closing motion then triggers the thioester hydrolysis. **Acetyl-CoA is expensive, and an enzyme able to grab it before oxaloacetate was in place would sometimes cut that thioester for nothing, so its site appears only once a receiver has arrived.** Shaping the enzyme first to one substrate and then to the reaction intermediate is induced fit doing a third job, which is enforcing an order.",
      cn: "柠檬酸合酶是同源二聚体，即两个相同的亚基；每个亚基有一个大而刚性的结构域和一个较小、较柔性的结构域，活性位点夹在两者之间。两个底物按固定顺序结合：草酰乙酸先来，它的结合把柔性结构域摆过去，而只有这个动作才造出乙酰-CoA 的结合位点；随后再一次合拢的动作，触发硫酯的水解。**乙酰-CoA 很贵；如果酶能在草酰乙酸到位之前就抓住它，那条硫酯有时就会被白白切断，所以它的位点要等接手方到了才出现。**让酶先按底物塑形、再按反应中间物塑形，就是诱导契合在做第三份工作：强制规定先后顺序。",
      src: "A p.581",
      see: [{ id: "L-6-4-1", en: "induced fit watched at work in three enzymes", cn: "诱导契合在三个酶身上的实况" }]
    },
    {
      link_en: "and the same enzyme is where the whole cycle is switched on and off",
      link_cn: "而整个循环的开关，也在同一个酶上",
      recall_en: "the same economy as the ordered binding one step up, applied to the pathway as a whole",
      recall_cn: "和上一步那种「不浪费」是同一笔账，只是这次算的是整条通路",
      en: "Citrate synthase is a regulatory enzyme, the point at which flux through the whole cycle is set. In most organisms it is strongly inhibited by ATP; in some it is inhibited by NADH instead. **ATP and NADH are exactly what this cycle is run to produce, so a cell already holding plenty of both shuts the pathway at its door rather than committing acetyl-CoA part way down.** Nothing later in the cycle needs to be switched, because nothing enters it except through this one reaction.",
      cn: "柠檬酸合酶是一个调节性酶，整个循环的通量就在这一步被定下来。在大多数生物中它被 ATP 强烈抑制，在某些生物中改由 NADH 抑制。**ATP 和 NADH 正是这个循环要生产的东西，所以两样都不缺的细胞，是在门口就把这条通路关掉，而不是让乙酰-CoA 走到半路。**循环后面的步骤不必再设开关，因为除了这一个反应，没有别的入口。",
      src: "B §6.2.2, p.136 · A p.581",
      see: [{ id: "L-13-5-1", en: "why a small fall in ATP is a large rise in AMP", cn: "为什么 ATP 稍降就意味着 AMP 大涨" }]
    },
    {
      link_en: "so what happens to citrate, now that there is finally something to oxidise?",
      link_cn: "那么柠檬酸接下来怎么办——毕竟现在终于有东西可氧化了？",
      en: "Citrate carries its hydroxyl on a tertiary carbon, a carbon bonded to three other carbons and therefore holding no hydrogen of its own, and an alcohol can only be oxidised to a carbonyl by losing a hydrogen from the very carbon that bears the hydroxyl. **Citrate is a dead end for oxidation, so aconitase removes water to give cis-aconitate and adds it back the other way round, moving the hydroxyl onto a carbon that still has a hydrogen.** The product is isocitrate, whose hydroxyl sits on a secondary carbon and can be dehydrogenated. Aconitase, EC 4.2.1.3, is also named aconitate hydratase, and its two sub-steps are a dehydration — the removal of one water molecule, which is what creates the alpha,beta double bond of cis-aconitate — followed by a rehydration, meaning the addition of that water back onto the same double bond in a new orientation, giving isocitrate. Across the two sub-steps nothing is oxidised and nothing is reduced, and Fe2+ is the cofactor listed for both; it holds an iron-sulfur centre in which three cysteines bind three iron atoms while a fourth iron grips a carboxyl group of citrate itself, so that cluster both binds the substrate and does chemistry on it.",
      cn: "柠檬酸的羟基长在一个叔碳上，即一个与另外三个碳相连、自己不带氢的碳；而一个醇要被氧化成羰基，只能靠带羟基的那个碳交出一个氢。**柠檬酸对氧化来说是条死路，于是乌头酸酶脱掉一分子水、再换个方向把它加回去，把羟基挪到一个还带着氢的碳上。**产物是异柠檬酸，它的羟基落在仲碳上，可以被脱氢。乌头酸酶的编号是 EC 4.2.1.3，也叫乌头酸水合酶；它的两个子步骤，一是脱水——脱去一分子水，正是这一步造出顺乌头酸的 α,β 双键——二是再水合，即把水以新的方向重新加到同一根双键上，得到异柠檬酸。这两个子步骤里没有任何氧化、也没有任何还原，而两步列出的辅因子都是 Fe²⁺。它的活性位点里带着一个铁硫中心：三个半胱氨酸结合三个铁原子，第四个铁则抓住柠檬酸自身的一个羧基，所以这个簇既参与结合底物，也参与催化。",
      src: "B §6.2.2, p.138 · A pp.582-585"
    },
    {
      link_en: "and that iron in the active site gives aconitase a second career",
      link_cn: "而活性位点里养着的这个铁，给了乌头酸酶第二份职业",
      en: "When a cell runs short of iron the iron-sulfur cluster of cytosolic aconitase falls apart and its catalytic activity is lost, and the bare protein left behind is iron regulatory protein 1, which binds short structures called iron response elements in two messenger RNAs. Sitting on the 5-prime end of the ferritin message, which encodes the protein cells store iron in, it blocks ferritin from being made; sitting on the 3-prime end of the transferrin receptor message, which encodes the protein that carries iron into a cell, it stabilises that message so more receptor is made. **An iron-starved cell therefore takes up more iron and stores less, and the switch deciding that is a citric acid cycle enzyme reading its own cofactor as the signal.** When iron returns the cluster reassembles and the protein goes back to being an enzyme.",
      cn: "细胞一旦缺铁，胞质中乌头酸酶的铁硫簇就散架，催化活性随之丧失；剩下的那个裸蛋白就是铁调节蛋白 1，它会结合两条 mRNA 上叫做「铁响应元件」的小结构。坐在铁蛋白 mRNA 的 5′ 端时（铁蛋白就是细胞用来储铁的蛋白），它阻断铁蛋白的合成；坐在转铁蛋白受体 mRNA 的 3′ 端时（转铁蛋白受体负责把铁运进细胞），它稳定这条 mRNA，让受体被造得更多。**缺铁的细胞于是多摄取、少储存；而做这个决定的开关，是一个把自己的辅因子当信号来读的柠檬酸循环的酶。**铁一回来，簇重新装好，蛋白又变回酶。",
      src: "A pp.582-585, Box 16-1"
    },
    {
      link_en: "with a secondary hydroxyl finally available, the first oxidation can happen",
      link_cn: "有了仲位的羟基，第一次氧化才做得成",
      en: "Isocitrate dehydrogenase — EC 1.1.1.41 — oxidises that secondary hydroxyl to a ketone using NAD+, and the immediate product is oxalosuccinate — a transient intermediate that stays bound to the enzyme and cannot be isolated as a free metabolite, which is why reaction schemes write it inside square brackets rather than on the line with the others. Oxalosuccinate never leaves the enzyme, because one of its carboxyl groups sits in the beta position relative to the new carbonyl, two carbons away, and a beta-keto acid loses that carboxyl spontaneously and exergonically. **Oxalosuccinate throws off that carboxyl as the cycle's first carbon dioxide, leaving the five-carbon 2-oxoglutarate, and beta-keto acids are a general source of carbon dioxide in cells.** Every cell also carries a second form of this enzyme that takes NADP+, which is NAD+ with an extra phosphate; that form sits in matrix and cytosol alike and exists to make NADPH, the reduced carrier that fatty acid and sterol synthesis run on, so one reaction serves two entirely different budgets depending on which cofactor the enzyme accepts.",
      cn: "异柠檬酸脱氢酶（EC 1.1.1.41）用 NAD+ 把那个仲羟基氧化成酮基，直接产物是草酰琥珀酸——一个始终结合在酶上、无法作为游离代谢物分离出来的短暂中间体，所以反应式里通常把它写在方括号内，而不是与别的代谢物并排写在线上。草酰琥珀酸从不离开酶，因为它有一个羧基处在相对新生羰基的 β 位，也就是隔着两个碳；而 β-酮酸会自发地、放能地把那个羧基丢掉。**草酰琥珀酸把那个羧基以循环的第一个二氧化碳的形式甩掉，留下五碳的 2-氧戊二酸；β-酮酸的脱羧是细胞里二氧化碳的一大来源。**每个细胞还有这个酶的第二种形式，收的是 NADP+，即多带一个磷酸的 NAD+；这一种在基质和细胞质里都有，职责是生产 NADPH——脂肪酸与固醇的合成靠的就是这个还原型载体。于是同一个反应因为酶收哪种辅因子，服务于两本完全不同的账。",
      src: "B §6.2.2, p.138 · A pp.582-583",
      see: [{ id: "L-21-1-1", en: "fatty acid synthesis, where that NADPH is spent", cn: "脂肪酸合成——那些 NADPH 花在这里" }]
    },
    {
      link_en: "the second oxidation is done by a machine you have already met",
      link_cn: "第二次氧化，是一台你已经见过的机器做的",
      recall_en: "the same five-cofactor machine that made the acetyl-CoA the first step started from",
      recall_cn: "把第一步那个乙酰-CoA 做出来的，正是同一台机器",
      en: "The five-carbon acid goes by three names for one molecule — 2-oxoglutarate, alpha-oxoglutarate and alpha-ketoglutarate — and it is a homolog of pyruvate, the same 2-oxo acid pattern with two more carbons on the tail. It is oxidised and decarboxylated by exactly the mechanism that handles pyruvate, inside a multi-enzyme complex needing six cofactors: thiamine diphosphate, coenzyme A, FAD, NAD+, lipoic acid and Mg2+. The products are succinyl-CoA, a second NADH and the cycle's second carbon dioxide. **Two carbons entered as the acetyl group and two have now left as carbon dioxide; no carbon leaves after this point, and the rest of the cycle is oxidation and hydration only.** That complex is built like the pyruvate dehydrogenase complex and like a third one that degrades isoleucine, leucine and valine: all three have homologous E1 and E2 subunits and an identical E3 subunit, because E3's substrate is a reduced lipoate and a reduced lipoate looks the same whatever was oxidised to make it, and all three descend from one ancestral set of genes by duplication.",
      cn: "这个五碳酸有三个名字指的是同一个分子——2-氧戊二酸、α-氧戊二酸、α-酮戊二酸——而它是丙酮酸的同系物，即同样的 2-氧代酸骨架，尾巴上多两个碳。它被氧化脱羧的机制，与处理丙酮酸的机制完全相同，发生在一台需要六种辅因子的多酶复合体里：焦磷酸硫胺素、辅酶 A、FAD、NAD+、硫辛酸和 Mg2+。产物是琥珀酰-CoA、第二个 NADH 和循环的第二个二氧化碳。**两个碳以乙酰基的形式进来，如今两个碳以二氧化碳的形式离开；此后不再有碳离开循环，余下的全是氧化和加水。**这台复合体的构造与丙酮酸脱氢酶复合体、以及第三台降解异亮氨酸／亮氨酸／缬氨酸的复合体如出一辙：三者的 E1 与 E2 亚基同源，E3 亚基完全相同——因为 E3 的底物是还原型硫辛酸，而不管上游氧化的是什么，还原型硫辛酸长得都一样；三者都由同一套祖先基因经重复而来。",
      src: "B §6.2.2, p.138 · A p.583",
      see: [{ id: "7-8-5", en: "the pyruvate dehydrogenase complex in full", cn: "丙酮酸脱氢酶复合体的完整讲法" }]
    },
    {
      link_en: "and here the cycle makes a nucleoside triphosphate with its own hands",
      link_cn: "在这里，循环亲手做出一个核苷三磷酸",
      en: "Succinyl-CoA is a high-energy thioester, and succinyl-CoA synthetase, EC 6.2.1.4, does not simply hydrolyse it: it makes succinyl-CoA react with GDP and inorganic phosphate, so the energy of the thioester is captured rather than lost as heat. **The direct product is GTP, not ATP, and this is the cycle's only substrate-level phosphorylation: the one phosphoryl group placed by an enzyme rather than by the respiratory chain.** The transfer runs as a three-step relay — a phosphoryl group first displaces coenzyme A to give a high-energy acyl phosphate, then moves onto histidine 246 of the enzyme itself, and only then onto GDP or ADP — with two helix dipoles parking partial positive charges beside the negatively charged phosphohistidine to hold it steady. GTP is convertible in a separate reaction, GTP plus ADP giving GDP plus ATP; animal cells carry two isozymes of the synthetase, one specific for ADP and one for GDP, and nucleoside diphosphate kinase equilibrates the two products with no free-energy change, so which one a tissue makes changes nothing in the energy balance.",
      cn: "琥珀酰-CoA 是高能硫酯，而琥珀酰-CoA 合成酶（EC 6.2.1.4）并不把它一水解了事：它让琥珀酰-CoA 与 GDP 和无机磷酸反应，从而把硫酯里的能量捕获下来，而不是让它散成热。**直接产物是 GTP 而不是 ATP，这也是全循环唯一一次底物水平磷酸化：唯一一个由酶而不是由呼吸链安上去的磷酰基。**这次转移是三步接力——先由一个磷酰基顶掉辅酶 A，生成高能的酰基磷酸；再转到酶自身的组氨酸 246 上；此后才交给 GDP 或 ADP——同时两条螺旋的偶极把部分正电荷摆在带负电的磷酸组氨酸旁边，稳住它。GTP 可以在另一个反应里换手：GTP + ADP ⇌ GDP + ATP。动物细胞有这个合成酶的两种同工酶，一种专一于 ADP，一种专一于 GDP；核苷二磷酸激酶让两种产物彼此平衡且没有自由能变化，所以某个组织做出哪一种，对能量总账毫无影响。",
      src: "B §6.2.2, p.139 · A pp.585-586"
    },
    {
      link_en: "the next enzyme is the only one not floating in the matrix, and it is the one a poison stops",
      link_cn: "下一个酶是唯一不漂在基质里的，也是能被一个毒物按停的那个",
      en: "Succinate dehydrogenase — EC 1.3.99.1 — is embedded in the inner mitochondrial membrane, and in bacteria in the plasma membrane; it is the only cycle enzyme that is. Its FAD is covalently bound, which is unusual — most flavoenzymes hold their FAD non-covalently, and this one is specifically noted for not doing so — and alongside three iron-sulfur clusters it takes two hydrogens off succinate to give fumarate as the trans isomer, the two carboxyl groups on opposite sides of the new double bond, with the electrons running straight into the respiratory chain instead of leaving on a soluble carrier. Those electrons enter the chain lower down than electrons delivered by NADH, which is why this step's FADH2 is worth less ATP than an NADH. **Malonate is a three-carbon diacid resembling succinate, absent from normal cells, that occupies this active site without reacting: add it to isolated mitochondria and the entire cycle stops.**",
      cn: "琥珀酸脱氢酶（EC 1.3.99.1）嵌在线粒体内膜上，细菌中则在质膜上；它是本循环唯一这样的酶。它的 FAD 是共价结合的，这不常见——绝大多数黄素酶的 FAD 都是非共价结合的，而这个酶被特别指出不是；它连同三个铁硫簇一起，把琥珀酸的两个氢拿掉，生成反式的延胡索酸，即两个羧基分处新生双键的两侧，而电子直接跑进呼吸链，不经任何可溶载体带走。这些电子进入呼吸链的位置比 NADH 送来的电子低，所以这一步的 FADH2 换得的 ATP 比一个 NADH 少。**丙二酸是一个长得像琥珀酸的三碳二元酸，正常细胞里没有，它占着这个活性位点却不反应：加到分离的线粒体里，整个循环就停摆。**",
      src: "A p.586 · B §6.2.2, p.139",
      see: [
        { id: "L-19-1-1", en: "where those electrons go, and what else blocks the chain", cn: "这些电子去了哪里，以及还有什么能堵住这条链" },
        { id: "3-5", en: "competitive inhibition as a general mechanism", cn: "竞争性抑制作为一般机制" }
      ]
    },
    {
      link_en: "two reactions are left, and both are chemistry this cycle has already used",
      link_cn: "只剩两个反应，而两者用的都是这个循环已经用过的化学",
      recall_en: "the same water-across-a-double-bond addition aconitase used to make isocitrate",
      recall_cn: "和乌头酸酶做异柠檬酸时那次「水加到双键上」是同一招",
      en: "Fumarase, EC 4.2.1.2, adds water across the double bond of fumarate to give L-malate, and it needs no cofactor at all — chemically the same move aconitase made when it hydrated cis-aconitate into isocitrate. Malate dehydrogenase, EC 1.1.1.37, then oxidises L-malate back to oxaloacetate with NAD+, producing the cycle's third NADH and closing the ring. **Oxaloacetate is itself a 3-oxo acid, the class oxalosuccinate belongs to, yet it is stable and does not decarboxylate, which is why it can serve as the carrier that comes back every turn.**",
      cn: "延胡索酸酶（EC 4.2.1.2）把水加到延胡索酸的双键上，生成 L-苹果酸，而且完全不需要辅因子——化学上与乌头酸酶把顺乌头酸加水成异柠檬酸是同一招。苹果酸脱氢酶（EC 1.1.1.37）随后用 NAD+ 把 L-苹果酸氧化回草酰乙酸，生成循环的第三个 NADH，把环闭上。**草酰乙酸自己也是 3-氧代酸，和自行散架的草酰琥珀酸同类，却稳定、不会自发脱羧——它能当那个每圈都回来的载体，靠的正是这一点。**",
      src: "B §6.2.2, p.139",
      see: [{ id: "6-2-2-4", en: "what happens when intermediates are pulled out for biosynthesis", cn: "中间物被抽走去搞生物合成时会怎样" }]
    },
    {
      link_en: "and fumarase deserves one more sentence, because it is where stereospecificity is actually measured",
      link_cn: "延胡索酸酶还值得多说一句——立体专一性在这里是被真正测出来的",
      en: "Fumarase is highly stereospecific, and it is stereospecific going each way. Forward, it hydrates the trans double bond of fumarate and will not touch the cis double bond of maleate, which is fumarate's cis isomer. Backward, from malate to fumarate, it accepts L-malate and refuses D-malate. **One enzyme, two independent stereochemical tests, both passed — that is what the general statement that most enzymes are stereospecific looks like once someone measures it.**",
      cn: "延胡索酸酶是高度立体专一的，而且它在正反两个方向上都专一。正向，它水合延胡索酸的反式双键，却完全不碰马来酸——延胡索酸的顺式异构体——的顺式双键。逆向，从苹果酸到延胡索酸，它接受 L-苹果酸而拒绝 D-苹果酸。**一个酶，两次相互独立的立体化学检验，全部通过——「多数酶具有立体专一性」这句一般性说法，被真正测出来时就是这个样子。**",
      src: "A p.587",
      see: [{ id: "3-6", en: "stereospecificity as a general property of enzymes", cn: "立体专一性作为酶的一般性质" }]
    },
    {
      link_en: "one more thing about citrate, and it changes what you may say about individual carbon atoms",
      link_cn: "关于柠檬酸还有一件事，它会改变你对单个碳原子能说的话",
      en: "Citrate has two identical arms and no chiral centre, so it is a symmetric molecule. In the mid-1940s acetate labelled with carbon-14 in its carboxyl group was fed to a tissue preparation, and the alpha-ketoglutarate recovered afterwards was expected to carry half the label in each of its two carboxyls; all of it was in one, which led the investigators to conclude that citrate could not be an intermediate at all. In 1948 Alexander Ogston pointed out the flaw. **An asymmetric active site holds a symmetric molecule at three points, so only one of its two identical arms is ever used: symmetry in a substrate says nothing about how an enzyme treats it.** Molecules like this are now called prochiral, and the bookkeeping point that follows is examined constantly: the two carbons leaving as carbon dioxide in one turn are not the two that entered as the acetyl group, because succinate and fumarate are themselves symmetric and scramble the two ends between them.",
      cn: "柠檬酸有两条相同的臂、没有手性中心，所以它是个对称分子。1940 年代中期，人们把羧基上带碳-14 标记的乙酸喂给组织制剂，预期回收到的 α-酮戊二酸会在两个羧基上各带一半标记；结果标记全在同一个羧基上，研究者由此断定柠檬酸根本不可能是中间物。1948 年 Alexander Ogston 指出了这个推理的漏洞。**不对称的活性位点以三个点抓住一个对称分子，于是两条相同的臂里只有一条会被用到：底物本身对称，并不说明酶对它的处理也对称。**这样的分子如今称为前手性分子；随之而来的那笔账则是常考点：一圈里以二氧化碳形式离开的那两个碳，并不是这一圈作为乙酰基进来的那两个，因为琥珀酸和延胡索酸本身对称，它们把分子的两端搅混了。",
      src: "A pp.587-589, Box 16-2"
    },
    {
      link_en: "and finally the arithmetic, where two different numbers are both in circulation",
      link_cn: "最后是算术，这里有两个数字同时在流通",
      en: "One turn takes in acetyl-CoA, 3 NAD+, FAD, GDP, inorganic phosphate and 2 H2O, and gives out 2 CO2, 3 NADH, 3 H+, FADH2, GTP and free coenzyme A. Turning those carriers into a number for ATP is where two conventions part. Counting about 3 ATP per NADH and about 2 per FADH2 gives 12 ATP per acetyl group and 38 per glucose, split as 8 from glycolysis, 6 from the oxidative decarboxylation of two pyruvates — the step that strips a carbon off each pyruvate and hands the rest on as acetyl-CoA — and 24 from two turns of the cycle; at about 30.5 kJ per mole of ATP that is 1159 kJ, roughly 40% of the 2870 kJ released by oxidising a mole of glucose to carbon dioxide. Measured stoichiometries are about 2.5 per NADH and about 1.5 per FADH2, giving 30 to 32 ATP per glucose — a range rather than one number, because cytosolic NADH from glycolysis is worth 3 or 5 ATP depending on which shuttle carries its electrons into the matrix. **The biochemistry is identical under both counts and only the assumed ATP-per-oxidation differs, so answer in whichever convention a question was set in and be able to say what the difference is.** Redoing the same division with 30 to 32 ATP puts the captured fraction near a third of that 2870 kJ rather than 40%. Written as one equation, the maximum energy yield per turn is CH3CO~S-CoA + 2 O2 + 12 ADP + 12 Pi -> 2 CO2 + CoA-SH + 12 ATP + 13 H2O, the twelve being three NADH at approximately 3 each, one FADH2 at 2, and the GTP counted as an ATP; regeneration of those carriers is what the respiratory chain does, which is where the ratios come from.",
      cn: "循环转一圈，收进乙酰-CoA、3 个 NAD+、FAD、GDP、无机磷酸和 2 个 H2O，交出 2 个 CO2、3 个 NADH、3 个 H+、FADH2、GTP 和游离辅酶 A。把这些载体折算成 ATP 的数目，正是两套惯例分道扬镳的地方。按每个 NADH 约 3 个 ATP、每个 FADH2 约 2 个来算，每个乙酰基 12 个 ATP、每分子葡萄糖 38 个，拆成糖酵解 8 个＋两个丙酮酸氧化脱羧 6 个＋循环两圈 24 个；按每摩尔 ATP 约 30.5 kJ 折算就是 1159 kJ，约占把一摩尔葡萄糖氧化成二氧化碳所释放的 2870 kJ 的 40%。实测的化学计量则是每个 NADH 约 2.5 个、每个 FADH2 约 1.5 个，于是每分子葡萄糖 30 到 32 个——是一个区间而不是一个数，因为糖酵解产生的胞质 NADH 依其电子由哪种穿梭机制送进基质，值 3 个或 5 个 ATP。**两套算法下的生物化学完全一样，不同的只是「每次氧化折合多少 ATP」这个假定；题目按哪套出就按哪套答，并且说得出差别在哪。**用 30 到 32 个 ATP 把同一笔除法重做一遍，被捕获的比例就落到那 2870 kJ 的三分之一上下，而不是 40%。写成一个方程，转一圈的最大能量产量就是 CH3CO~S-CoA + 2 O2 + 12 ADP + 12 Pi -> 2 CO2 + CoA-SH + 12 ATP + 13 H2O；这十二个是三个 NADH 各约 3 个、一个 FADH2 折 2 个，再加上算作 ATP 的那个 GTP。这些载体的再生正是呼吸链干的活——那些比值也就是从那里来的。",
      src: "B §6.2.2, pp.139-140 · A p.589, table 16-1",
      see: [{ id: "6-2-4-1", en: "the respiratory chain, where those ratios are actually measured", cn: "呼吸链——那些比值是在那里被实测出来的" }]
    }
  ],
  terms: [
    { en: "acetyl-CoA", cn: "乙酰-CoA",
      def_en: "A two-carbon acetyl group held on coenzyme A by a thioester bond. Sugars, fatty acids and most amino acids all converge on it, and its thioester is a high-energy bond, which is why an enzyme handling it takes care not to cut it wastefully.",
      def_cn: "通过硫酯键挂在辅酶 A 上的两碳乙酰基。糖、脂肪酸和大多数氨基酸都汇聚到它这里；它的硫酯是高能键，所以处理它的酶会格外小心，不把这条键白白切掉。" },
    { en: "oxaloacetate", cn: "草酰乙酸",
      def_en: "The four-carbon acceptor that the acetyl group is attached to in the first reaction and that is handed back in the last. Consumed and regenerated in one turn, so it works catalytically — its level in the matrix is micromolar, and that is enough. It is a 3-oxo acid but a stable one, so it does not decarboxylate on its own.",
      def_cn: "第一个反应里接住乙酰基、最后一个反应里又被交还回来的四碳受体。一圈之内被消耗又被再生，所以它是催化性的——基质里它只有微摩尔级，而这就够了。它属于 3-氧代酸，但是稳定的那一种，不会自行脱羧。" },
    { en: "tertiary and secondary alcohol", cn: "叔醇与仲醇",
      def_en: "A hydroxyl on a carbon bonded to three other carbons has no hydrogen left on that carbon, so it cannot be oxidised to a carbonyl; a hydroxyl on a carbon bonded to two others still has one. Citrate is the first kind and isocitrate the second, which is the entire reason aconitase exists.",
      def_cn: "羟基长在与另外三个碳相连的碳上时，那个碳没有多余的氢，因而无法被氧化成羰基；长在只与两个碳相连的碳上时还剩一个氢。柠檬酸属于前者、异柠檬酸属于后者——乌头酸酶存在的全部理由就在这里。" },
    { en: "oxalosuccinate", cn: "草酰琥珀酸",
      def_en: "The unstable intermediate made when isocitrate dehydrogenase oxidises isocitrate's hydroxyl to a ketone. One of its carboxyl groups then sits beta to that new carbonyl, and beta-keto acids shed such a carboxyl spontaneously, so it falls apart into 2-oxoglutarate and the cycle's first carbon dioxide without ever leaving the enzyme.",
      def_cn: "异柠檬酸脱氢酶把异柠檬酸的羟基氧化成酮基时生成的不稳定中间物。此时它有一个羧基处在新生羰基的 β 位，而 β-酮酸会自发丢掉这样的羧基，于是它还没离开酶就散成 2-氧戊二酸和循环的第一个二氧化碳。" },
    { en: "2-oxoglutarate", cn: "2-氧戊二酸",
      def_en: "The five-carbon 2-oxo acid left after the first decarboxylation, also written alpha-oxoglutarate or alpha-ketoglutarate. It is a homolog of pyruvate, which is why the same six-cofactor machinery oxidises both.",
      def_cn: "第一次脱羧之后剩下的五碳 2-氧代酸，也写作 α-氧戊二酸或 α-酮戊二酸。它是丙酮酸的同系物，所以同一套六辅因子的机器可以氧化两者。" },
    { en: "substrate-level phosphorylation", cn: "底物水平磷酸化",
      def_en: "A phosphoryl group transferred straight onto GDP or ADP by an enzyme, using the energy of a high-energy bond in a substrate, rather than by the respiratory chain. This cycle has exactly one, at succinyl-CoA synthetase, and its direct product is GTP.",
      def_cn: "由酶直接把磷酰基转到 GDP 或 ADP 上，用的是底物里一条高能键的能量，而不是靠呼吸链。本循环只有一处这样的反应，在琥珀酰-CoA 合成酶，直接产物是 GTP。" },
    { en: "ordered bisubstrate mechanism", cn: "有序双底物机制",
      def_en: "Two substrates that must bind in a fixed sequence. In citrate synthase oxaloacetate binds first and the conformational change it induces creates the acetyl-CoA site, so an expensive thioester is never cut before there is something to receive the acetyl group.",
      def_cn: "两个底物必须按固定顺序结合。柠檬酸合酶里草酰乙酸先结合，它诱导的构象变化才造出乙酰-CoA 的位点，于是昂贵的硫酯绝不会在没有接手方的情况下被切开。" },
    { en: "moonlighting enzyme", cn: "身兼二职的酶",
      def_en: "One protein doing two unrelated jobs. Cytosolic aconitase without its iron-sulfur cluster is iron regulatory protein 1, which binds the ferritin and transferrin-receptor messages and switches a cell towards taking iron up.",
      def_cn: "一个蛋白干两份互不相干的活。胞质乌头酸酶失去铁硫簇之后就是铁调节蛋白 1，它结合铁蛋白和转铁蛋白受体的 mRNA，把细胞调向多摄取铁。" },
    { en: "malonate", cn: "丙二酸",
      def_en: "A three-carbon diacid resembling succinate, absent from normal cells, and a strong competitive inhibitor of succinate dehydrogenase. Adding it to isolated mitochondria stops the whole citric acid cycle.",
      def_cn: "一个长得像琥珀酸的三碳二元酸，正常细胞里并不存在，是琥珀酸脱氢酶的强竞争性抑制剂。把它加到分离的线粒体里，整个柠檬酸循环就停摆。" },
    { en: "prochiral molecule", cn: "前手性分子",
      def_en: "A molecule with no chiral centre that still reacts asymmetrically, because an asymmetric active site binds it at three points and allows only one orientation. Citrate is the classic case, and Ogston explained it in 1948.",
      def_cn: "本身没有手性中心、却仍然发生不对称反应的分子，因为不对称的活性位点以三个点抓住它、只允许一种取向。柠檬酸是经典例子，Ogston 在 1948 年解释了它。" },
    { en: "EC number", cn: "EC 编号",
      def_en: "The four-part code that identifies a reaction rather than a protein, so two unrelated proteins doing the same chemistry share it. The cycle's are 4.1.3.7, 4.2.1.3, 1.1.1.41, 6.2.1.4, 1.3.99.1, 4.2.1.2 and 1.1.1.37, in order.",
      def_cn: "一个四段式代号，标识的是反应而不是蛋白，所以两个毫不相干的蛋白只要做同一种化学就共用一个号。本循环依次是 4.1.3.7、4.2.1.3、1.1.1.41、6.2.1.4、1.3.99.1、4.2.1.2 和 1.1.1.37。" }
  ]
};
