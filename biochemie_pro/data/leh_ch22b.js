/* ============================================================
   Lehninger 8 — Chapter 22, section 22.2, Biosynthesis of Amino
   Acids. DEPTH LAYER, and a Lehninger-only node: Czech node 10-2
   only gives the generic three-phase catabolism/anabolism scheme
   on one page (p.218) and uses amino acids as a single illustrative
   sentence ("oxo acids -> alpha-amino acids -> proteins") — it does
   NOT cover any actual biosynthetic pathway. Ruojin ruled this one
   "主要需要的" on 2026-08-06 (CORE2_LEHNINGER.md; archived in
   HANDOFF_LEHNINGER.md section 9b; row 22.2 of
   lehninger_index/lehninger_only_scope.tsv, tagged `full`,
   12 printed pages).

   THIRD Lehninger-only node, after leh_ch9.js (L-9-1-1) and
   leh_ch9b.js (L-9-2-1). Same two conventions apply: czTitle opens
   with "Žádná —", cnNote.status is "pending" with an honest reason.

   topicKey "amino-acid-biosynthesis" is NEW and single-book, as
   every Lehninger-only node's key must be. Deliberately distinct
   from the existing "amino-acids" (structure/properties, on the
   207-node Czech side) and "amino-acid-degradation" (the reverse
   direction, ch5 of the Czech book) — this key is specifically the
   FORWARD direction, building the 20 from six precursor families.

   File is `leh_ch22b.js` because chapter 22 already holds one node,
   L-22-3-1 in leh_ch22.js (Lehninger's own section 22.3) — this
   project's a/b convention for a chapter with two nodes.

   `chapter` is LEHNINGER's chapter 22 — chapter is book-local.
   Source: Lehninger Principles of Biochemistry, 8th ed.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "L-22-2-1",
    book: "lehninger",
    topicKey: "amino-acid-biosynthesis",
    chapter: 22,
    section: "22.2",
    czTitle: "Žádná — biosyntéza 20 aminokyselin ze šesti prekurzorových rodin, s alosterickou regulací",
    enTitle: "Biosynthesis of amino acids — why ten amino acids are one step from a common metabolite while three others need a whole separate ring-building pathway, and the three escalating patterns (simple, concerted, sequential) organisms use to keep making all twenty in the right proportions at once",
    cnTitle: "氨基酸的生物合成——为什么有十种氨基酸离某个常见代谢物只有一步之遥，而另外三种却需要一整条独立的建环路径，以及生物体用来让二十种氨基酸按正确比例同时持续合成的三种层层升级的调控模式（简单、协同、序贯）",
    pages: [805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816],
    coverage: "full",
    coverageNote: "Read from Lehninger 8 section 22.2, B-copy text layer pp.2829-2862 in full, end to end through every subheading (Organisms Vary Greatly in Their Ability to Synthesize the 20 Common Amino Acids; alpha-Ketoglutarate Gives Rise to Glutamate, Glutamine, Proline, and Arginine; Serine, Glycine, and Cysteine Are Derived from 3-Phosphoglycerate; Three Nonessential and Six Essential Amino Acids Are Synthesized from Oxaloacetate and Pyruvate; Chorismate Is a Key Intermediate in the Synthesis of Tryptophan, Phenylalanine, and Tyrosine; Histidine Biosynthesis Uses Precursors of Purine Biosynthesis; Amino Acid Biosynthesis Is under Allosteric Regulation) plus Table 22-1 and Figures 22-11 through 22-24, and the section's own SUMMARY, covering A printed pp.805-816. Czech node 10-2 (ch10, p.218) was checked before writing this: it states only the generic three-phase catabolism/anabolism scheme and uses amino acids as a single illustrative sentence, with no pathway detail — confirmed to be the entire Czech-layer content on this subject.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；氨基酸生物合成六大前体家族的具体路径是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Amino acid biosynthesis is not one pathway, it is six unrelated on-ramps, and the difficulty of each on-ramp is what actually separates 'nonessential' from 'essential' in a mammal. Ten amino acids sit one or a few steps from a common metabolite you already know — alpha-ketoglutarate, pyruvate, oxaloacetate, 3-phosphoglycerate — and mammals kept those short ramps. The three aromatic amino acids need an entire separate ring-building pathway through shikimate and chorismate that mammals never evolved at all, which is exactly why an herbicide that blocks that pathway (glyphosate) can kill a plant while leaving you untouched.",
      cn: "氨基酸的生物合成**不是一条路径，而是六条互不相干的匝道**，而每条匝道的难度，正是哺乳动物身上「非必需」与「必需」之间的真实分野。有十种氨基酸离你早就认识的某个常见代谢物只有一步或几步之遥——α-酮戊二酸、丙酮酸、草酰乙酸、3-磷酸甘油酸——哺乳动物保留了这些短匝道。而三种芳香族氨基酸需要一整条经由 shikimate 和 chorismate 的**独立建环路径**，哺乳动物从未进化出这条路径——这正是为什么一种阻断这条路径的除草剂（草甘膦）能杀死植物，却对你毫无影响。"
    },
    summary: {
      en: "Lehninger opens 22.2 with the fact that organizes the whole section: plants and bacteria can make all 20 amino acids, mammals only about half, and the label 'nonessential' for the mammalian half is somewhat misleading, since the innate pathways often do not make enough for optimal growth. The book's organizing device is six precursor families (Table 22-1), each named for the metabolite the pathway starts from: alpha-ketoglutarate gives glutamate, glutamine, proline and arginine; pyruvate gives alanine, valine, leucine, isoleucine; 3-phosphoglycerate gives serine, glycine, cysteine; oxaloacetate gives aspartate, asparagine, plus (by longer routes) methionine, threonine, lysine, isoleucine; PEP plus erythrose 4-phosphate gives the three aromatics, tryptophan, phenylalanine, tyrosine; and ribose 5-phosphate gives histidine, whose pathway is entangled with purine biosynthesis. Three details are worth carrying past the family names. First, the aromatic pathway is qualitatively different — building an aromatic ring is chemically hard, the environment does not hand you one, so the route runs through shikimate and chorismate, a branch point which then splits toward tryptophan on one side and phenylalanine/tyrosine on the other; the herbicide glyphosate works by blocking a step on this pathway, one mammals lack entirely, which is exactly why it is toxic to plants and largely not to us. Second, cysteine's route depends on which kingdom you are in: bacteria and plants build it from serine plus sulfide reduced from environmental sulfate, while mammals instead disassemble methionine (via S-adenosylmethionine and cystathionine) to donate the sulfur onto a serine-derived backbone — two different chemistries converging on the same product. Third, tyrosine sits in an interesting middle category: mammals make it in one step by hydroxylating phenylalanine, so it is 'conditionally essential' — nonessential only as long as dietary phenylalanine is adequate. The section closes on regulation, and the pattern it wants you to see is escalation. The simplest case is ordinary feedback inhibition, the end product blocking the pathway's first committed enzyme (isoleucine on its own synthesis from threonine). A single enzyme can integrate more than one signal at once — six different glutamine-derived products jointly inhibit glutamine synthetase, an effect that is more than additive, called concerted inhibition. And when several end products share upstream steps, cells solve the conflict with isoenzymes: in E. coli's aspartate-derived pathway to lysine, methionine, threonine and isoleucine, the first three enzymes each exist in multiple independently-regulated copies, so one product's excess cannot accidentally shut down synthesis of the others — an arrangement called sequential feedback inhibition.",
      cn: "Lehninger 在 22.2 开篇就给出了组织全节的那个事实：植物和细菌能合成全部 20 种氨基酸，哺乳动物只能合成大约一半，而给哺乳动物那一半贴上「非必需」的标签多少有些误导，因为天然通路的产量往往不足以支撑最佳生长。全书的组织手法是**六大前体家族**（Table 22-1），各自以路径的起点代谢物命名：**α-酮戊二酸**给出谷氨酸、谷氨酰胺、脯氨酸、精氨酸；**丙酮酸**给出丙氨酸、缬氨酸、亮氨酸、异亮氨酸；**3-磷酸甘油酸**给出丝氨酸、甘氨酸、半胱氨酸；**草酰乙酸**给出天冬氨酸、天冬酰胺，外加（经更长路径）甲硫氨酸、苏氨酸、赖氨酸、异亮氨酸；**PEP 加赤藓糖 4-磷酸**给出三种芳香族氨基酸——色氨酸、苯丙氨酸、酪氨酸；**核糖 5-磷酸**给出组氨酸，其路径与嘌呤生物合成纠缠在一起。有三个细节值得记在这些家族名字之外。第一，**芳香族路径性质完全不同**——构建一个芳香环在化学上很难，环境里也不会现成递给你一个，所以这条路径要经过 **shikimate** 和 **chorismate**，这个分支点随后一边通向色氨酸，另一边通向苯丙氨酸/酪氨酸；除草剂**草甘膦**正是通过阻断这条路径上的一步起效的，而哺乳动物完全没有这条路径——这正是它对植物有毒、对我们基本无害的原因。第二，**半胱氨酸的路径取决于你属于哪个界**：细菌和植物用丝氨酸加上由环境硫酸盐还原来的硫化物来构建它，而哺乳动物则反过来**拆解甲硫氨酸**（经 S-腺苷甲硫氨酸和胱硫醚）把硫原子供给到一个丝氨酸来源的骨架上——两套完全不同的化学，殊途同归到同一个产物。第三，**酪氨酸处在一个有意思的中间类别**：哺乳动物只需一步——把苯丙氨酸羟基化——就能造出它，所以它是「条件必需」的：只要膳食中的苯丙氨酸够用，它就不是必需的。本节收尾在调控上，而它想让你看到的模式是**层层升级**。最简单的情形是普通的反馈抑制，终产物阻断路径的第一个限速酶（异亮氨酸抑制自己从苏氨酸出发的合成）。单个酶也能同时整合不止一个信号——**六种**谷氨酰胺衍生的产物共同抑制谷氨酰胺合成酶，其效果**超过简单相加**，这被称为**协同抑制**。而当若干终产物共用上游步骤时，细胞用**同工酶**来化解冲突：在 *E. coli* 从天冬氨酸出发通向赖氨酸、甲硫氨酸、苏氨酸和异亮氨酸的路径中，前三个酶各自都有多个独立调控的拷贝，于是某一个产物的过量**不会意外关掉**其他产物的合成——这种安排叫**序贯反馈抑制**。"
    },
    points: [
      {
        cz: "šest prekurzorových rodin — organizační princip celé kapitoly",
        en: "SIX PRECURSOR FAMILIES ORGANISE THE WHOLE SECTION, AND THE FAMILY NAME IS THE STARTING METABOLITE, NOT A CHEMICAL CLASS. Every amino acid's carbon skeleton derives from glycolysis, the citric acid cycle, or the pentose phosphate pathway, and nitrogen enters via glutamate and glutamine. Table 22-1's six families, worth memorising as a table: ALPHA-KETOGLUTARATE gives glutamate, glutamine, proline, arginine. PYRUVATE gives alanine, valine, leucine, isoleucine. 3-PHOSPHOGLYCERATE gives serine, glycine, cysteine. PHOSPHOENOLPYRUVATE + ERYTHROSE 4-PHOSPHATE gives tryptophan, phenylalanine, tyrosine (the aromatics). OXALOACETATE gives aspartate, asparagine, isoleucine, methionine, threonine, lysine. RIBOSE 5-PHOSPHATE gives histidine. Ten of the twenty are just one or a few steps from their family's precursor; others, especially the aromatics, are far more complex — which is the whole reason the section does not treat all twenty uniformly. A seventh player threads through several families without being one itself: PRPP (5-phosphoribosyl-1-pyrophosphate), made from ribose 5-phosphate plus ATP, feeds tryptophan and histidine synthesis and is allosterically regulated by many of the molecules it eventually becomes part of.",
        cn: "**六大前体家族组织了整节内容，而「家族名字」是起点代谢物，不是化学分类。** 每种氨基酸的碳骨架都来自糖酵解、柠檬酸循环或磷酸戊糖途径，氮则经由谷氨酸和谷氨酰胺进入。Table 22-1 的六大家族，值得当表格背下来：**α-酮戊二酸**给出谷氨酸、谷氨酰胺、脯氨酸、精氨酸。**丙酮酸**给出丙氨酸、缬氨酸、亮氨酸、异亮氨酸。**3-磷酸甘油酸**给出丝氨酸、甘氨酸、半胱氨酸。**磷酸烯醇丙酮酸 + 赤藓糖 4-磷酸**给出色氨酸、苯丙氨酸、酪氨酸（芳香族）。**草酰乙酸**给出天冬氨酸、天冬酰胺、异亮氨酸、甲硫氨酸、苏氨酸、赖氨酸。**核糖 5-磷酸**给出组氨酸。二十种里有十种离各自家族的前体只有一步或几步之遥；另一些，尤其是芳香族，要复杂得多——这正是本节没有对二十种一视同仁的全部原因。还有第七个角色贯穿好几个家族、自己却不是其中一员：**PRPP**（5-磷酸核糖-1-焦磷酸），由核糖 5-磷酸加 ATP 制成，供给色氨酸和组氨酸的合成，并被它最终会变成的许多分子别构调控。"
      },
      {
        cz: "esenciální vs. neesenciální — proč je to nálepka, ne fyziologický fakt",
        en: "ESSENTIAL VERSUS NONESSENTIAL IS A LABEL FOR PATHWAY LENGTH, NOT A CLEAN PHYSIOLOGICAL CATEGORY, AND THE BOOK SAYS SO DIRECTLY. Plants and most bacteria synthesise all 20; mammals synthesise only about half, generally those with SIMPLE pathways — these are called nonessential, but the book flags that label as somewhat misleading, because innate biosynthetic pathways often do not supply ENOUGH for optimal growth and health even when they exist. The remaining amino acids, which mammals cannot make at all, are essential and must come from food. A few sit in between: CONDITIONALLY essential, required at particular developmental stages, or (tyrosine's case) nonessential only as long as its essential precursor is available. Unless stated otherwise, every pathway the section details is the one operating in BACTERIA — mammalian pathways, where they exist and differ, are noted separately (proline and arginine are the worked examples).",
        cn: "**「必需 / 非必需」是关于路径长短的标签，不是一个干净的生理学分类，书里也直说了这一点。** 植物和多数细菌能合成全部 20 种；哺乳动物只能合成大约一半，通常是那些路径**简单**的——这些被称为非必需氨基酸，但书里特别指出这个标签有些误导，因为即便天然路径存在，也往往**供不应求**，不足以支撑最佳生长与健康。剩下那些哺乳动物完全无法合成的，是必需氨基酸，必须从食物中获取。还有几个处在中间：**条件必需**，在特定发育阶段才需要；或者（酪氨酸的情况）只要它的必需前体够用，它就不算必需。除非另有说明，本节详述的每一条路径都是**细菌**中运作的那一条——哺乳动物的路径若存在且有差异，会单独说明（脯氨酸和精氨酸就是给出的实例）。"
      },
      {
        cz: "glutamát → glutamin, prolin, arginin",
        en: "GLUTAMATE'S FAMILY IS THE SHORTEST WALK IN THE WHOLE SECTION, AND ARGININE'S ROUTE SPLITS BY KINGDOM. From alpha-ketoglutarate, glutamate and glutamine are made (already covered earlier in the book); proline is simply a CYCLISED derivative of glutamate — ATP phosphorylates glutamate's gamma-carboxyl, NADPH or NADH reduces it to glutamate gamma-semialdehyde, which cyclises SPONTANEOUSLY and is reduced again to proline. Arginine's route in BACTERIA parallels this but adds two extra steps specifically to PREVENT that spontaneous cyclisation: glutamate's alpha-amino group is acetylated first (blocking cyclisation), transamination proceeds, then the acetyl group is removed to give ornithine, which continues through steps paralleling the mammalian urea cycle (citrulline, argininosuccinate) to arginine. Mammals do not run this bacterial pathway at all. Instead they get proline from dietary/tissue arginine via the urea cycle enzyme arginase (arginine to ornithine to glutamate gamma-semialdehyde to proline), and when dietary arginine falls short, the reaction runs in the OPPOSITE direction — ornithine delta-aminotransferase pushed toward ornithine formation — feeding the urea cycle back toward arginine. The lesson worth keeping: the same handful of intermediates can be read forwards or backwards depending on what the organism needs at that moment.",
        cn: "**谷氨酸家族是全节走得最短的一段，而精氨酸的路径按界不同而分岔。** 从 α-酮戊二酸出发，谷氨酸和谷氨酰胺（书里更早已讲过）被合成出来；脯氨酸不过是谷氨酸的**环化**衍生物——ATP 磷酸化谷氨酸的 γ-羧基，NADPH 或 NADH 将其还原为谷氨酸 γ-半醛，后者**自发**环化，再被还原一次得到脯氨酸。**细菌**中精氨酸的路径与此平行，但额外多了两步，专门用来**阻止**那次自发环化：先把谷氨酸的 α-氨基乙酰化（阻断环化），进行转氨基，再脱去乙酰基得到鸟氨酸，随后经过与哺乳动物尿素循环平行的步骤（瓜氨酸、精氨基琥珀酸）走到精氨酸。**哺乳动物完全不跑这条细菌路径**。它们改从膳食/组织来源的精氨酸出发，经尿素循环酶**精氨酸酶**得到脯氨酸（精氨酸→鸟氨酸→谷氨酸 γ-半醛→脯氨酸）；而当膳食精氨酸不够时，这个反应会**反向**运行——鸟氨酸 δ-氨基转移酶被推向生成鸟氨酸的方向——反过来给尿素循环供料、走回精氨酸。值得记住的一课是：同样这几个中间产物，可以根据生物体当下的需要被**正着读**或**反着读**。"
      },
      {
        cz: "serin, glycin, cystein — 3-fosfoglycerát a dvě různé cesty k síře",
        en: "SERINE'S PATHWAY IS UNIVERSAL, GLYCINE HAS A SECOND ROUTE IN VERTEBRATES, AND CYSTEINE'S SULFUR SOURCE SPLITS BY KINGDOM. Serine's major pathway is the SAME in all organisms: 3-phosphoglycerate's hydroxyl is oxidised to 3-phosphohydroxypyruvate, transamination from glutamate gives 3-phosphoserine, and a phosphatase releases free serine. Serine (3 carbons) then loses one carbon to become glycine (2 carbons), via serine hydroxymethyltransferase, with the removed carbon captured by TETRAHYDROFOLATE as N5,N10-methylenetetrahydrofolate — a one-carbon-metabolism link worth keeping. Vertebrate liver has a SECOND route to glycine, running the glycine cleavage reaction in reverse. For cysteine, the sulfur source is where kingdoms diverge. Plants and bacteria reduce ENVIRONMENTAL SULFATE (via PAPS, an eight-electron reduction to sulfide) and use that sulfide to convert serine to cysteine in two steps. Mammals cannot do this; they instead cannibalise METHIONINE for its sulfur — methionine to S-adenosylmethionine, demethylation to S-adenosylhomocysteine, hydrolysis to homocysteine, which then condenses with SERINE (cystathionine beta-synthase) to give cystathionine, and a PLP-requiring lyase cleaves that to free cysteine. So mammalian cysteine is built from two different amino acids at once: methionine donates the sulfur, serine donates the carbon skeleton.",
        cn: "**丝氨酸的路径是通用的，甘氨酸在脊椎动物体内有第二条路，半胱氨酸的硫来源则按界分岔。** 丝氨酸的主路径在**所有生物中都相同**：3-磷酸甘油酸的羟基被氧化成 3-磷酸羟基丙酮酸，谷氨酸转氨基得到 3-磷酸丝氨酸，一个磷酸酶释放出游离丝氨酸。丝氨酸（3 个碳）随后经**丝氨酸羟甲基转移酶**丢掉一个碳变成甘氨酸（2 个碳），被移走的那个碳由**四氢叶酸**捕获，形成 N⁵,N¹⁰-亚甲基四氢叶酸——这是一条值得记住的、与一碳代谢的连接。脊椎动物肝脏还有**第二条**通往甘氨酸的路，是把甘氨酸裂解反应反着跑一遍。至于半胱氨酸，硫的来源正是各界分道扬镳的地方。植物和细菌还原**环境中的硫酸盐**（经 PAPS，一次八电子还原成硫化物），再用这个硫化物分两步把丝氨酸转化为半胱氨酸。哺乳动物做不到这一步；它们改为**拆解甲硫氨酸**取硫——甲硫氨酸变成 S-腺苷甲硫氨酸，脱甲基成 S-腺苷高半胱氨酸，水解成高半胱氨酸，后者再与**丝氨酸**缩合（胱硫醚 β-合酶）生成胱硫醚，一个需要 PLP 的裂解酶把它切开、释放游离半胱氨酸。所以哺乳动物的半胱氨酸是**同时由两种不同氨基酸**构建的：甲硫氨酸供给硫，丝氨酸供给碳骨架。"
      },
      {
        cz: "asparaginasa a dětská ALL — biosyntéza jako terapeutický cíl",
        en: "A BIOSYNTHETIC PATHWAY BECAME A CANCER THERAPY BECAUSE A TUMOUR LOST IT — WORTH KEEPING AS A CONCRETE, EXAMINABLE CLINICAL LINK. Alanine and aspartate are made from pyruvate and oxaloacetate respectively by simple transamination from glutamate; asparagine follows by amidation of aspartate (asparagine synthetase, with glutamine donating the NH4+). These are nonessential, simple, universal pathways — which is precisely why the clinical story works. The malignant lymphocytes of childhood acute lymphoblastic leukaemia (ALL) make little or no asparagine synthetase, so unlike normal cells they CANNOT make their own asparagine and depend entirely on the supply circulating in blood. Treatment exploits exactly that gap: bacterial L-asparaginase is given to deplete serum asparagine, starving the leukaemic cells specifically while normal cells, which can still synthesise their own, are far less affected. Combined chemotherapy plus asparaginase reaches over 95% remission in childhood ALL (versus 40-60% for asparaginase alone) — though about 10% of remissions later relapse with drug-resistant tumours, which is why researchers are now developing human asparagine synthetase inhibitors to reinforce the same strategy.",
        cn: "**一条生物合成路径变成了一种癌症疗法，只因为某种肿瘤丢失了它——这条具体、可考的临床连接值得记住。** 丙氨酸和天冬氨酸分别由丙酮酸和草酰乙酸经谷氨酸简单转氨基而来；天冬酰胺紧随其后，由天冬氨酸酰胺化而成（天冬酰胺合成酶，NH₄⁺ 由谷氨酰胺供给）。这些都是非必需、简单、通用的路径——而这恰恰是这个临床故事之所以成立的原因。**儿童急性淋巴细胞白血病 (ALL)** 的恶性淋巴细胞几乎不表达**天冬酰胺合成酶**，所以与正常细胞不同，它们**无法自己合成天冬酰胺**，完全依赖血液中循环供应的那一份。治疗正是利用了这个缺口：给予**细菌来源的 L-天冬酰胺酶**耗竭血清中的天冬酰胺，专门饿死白血病细胞，而仍能自行合成的正常细胞受影响小得多。联合化疗加天冬酰胺酶治疗，儿童 ALL 的缓解率可达 **95% 以上**（单用天冬酰胺酶为 40%–60%）——不过约 10% 的缓解病例后来会复发、出现耐药肿瘤，这正是研究者如今在开发人天冬酰胺合成酶抑制剂、以强化同一策略的原因。"
      },
      {
        cz: "šest esenciálních aminokyselin z oxaloacetátu a pyruvátu — propletené větve",
        en: "SIX ESSENTIAL AMINO ACIDS SHARE A TANGLE OF BRANCH POINTS, WHICH IS WHY THIS FAMILY IS AMONG THE MOST COMPLEX IN THE SECTION. Methionine, threonine, lysine, isoleucine, valine and leucine are all essential in humans, and their bacterial pathways interconnect rather than running in parallel. From ASPARTATE: the branch point aspartate beta-semialdehyde feeds all three of methionine, threonine and lysine; a second branch point, HOMOSERINE, splits toward threonine and methionine; and threonine is itself, in turn, a PRECURSOR of isoleucine — so a change anywhere upstream ripples through several end products at once. From PYRUVATE: valine and isoleucine share FOUR enzymes on largely parallel routes, valine's beginning with condensation of two pyruvate-derived carbons (as hydroxyethyl-TPP) with another pyruvate, isoleucine's with the same two carbons condensing instead with alpha-ketobutyrate (itself derived from threonine, in a PLP-requiring step) — so isoleucine synthesis literally depends on flux through the threonine branch of the aspartate family. An intermediate on the valine path, alpha-ketoisovalerate, is also the starting point of a separate four-step branch to LEUCINE. The web-like structure here, not a simple family tree, is the point worth keeping — it is exactly what makes coordinated regulation (see below) necessary rather than optional.",
        cn: "**六种必需氨基酸共享一团分支节点，这正是这个家族在本节中最复杂之一的原因。** 甲硫氨酸、苏氨酸、赖氨酸、异亮氨酸、缬氨酸和亮氨酸在人体内都是必需的，它们在细菌中的路径相互交织，而不是平行独立的。从**天冬氨酸**出发：分支点**天冬氨酸 β-半醛**同时供给甲硫氨酸、苏氨酸、赖氨酸这三条路；第二个分支点**高丝氨酸**分岔向苏氨酸和甲硫氨酸；而苏氨酸自身又**是异亮氨酸的前体**——所以上游任何一处的变化都会同时波及好几个终产物。从**丙酮酸**出发：缬氨酸和异亮氨酸共享**四个**酶、走的是大体平行的路线，缬氨酸的起点是两个来自丙酮酸的碳（以羟乙基-TPP 的形式）与另一分子丙酮酸缩合，异亮氨酸的起点则是同样这两个碳改与 **α-酮丁酸**（本身来自苏氨酸，经一步需要 PLP 的反应）缩合——所以异亮氨酸的合成实际上依赖于天冬氨酸家族中苏氨酸这条支路的通量。缬氨酸路径上的一个中间产物 **α-酮异戊酸**，还是通往**亮氨酸**的一条独立四步支路的起点。这里呈现的是一张**网状结构**，而不是一棵简单的家族树——这一点值得记住，因为它正是下文「协调调控」不是可有可无、而是**必需**的原因。"
      },
      {
        cz: "shikimát a chorismát — proč aromatický kruh potřebuje vlastní dráhu",
        en: "AN AROMATIC RING IS CHEMICALLY EXPENSIVE TO BUILD FROM SCRATCH, AND THAT SINGLE FACT EXPLAINS WHY TRYPTOPHAN, PHENYLALANINE AND TYROSINE NEED A WHOLE SEPARATE PATHWAY. Even though the benzene ring itself is stable once formed, aromatic rings are not readily available in the environment as starting material, so bacteria, fungi and plants build one via ring closure of an aliphatic precursor followed by stepwise addition of double bonds — the main biological route to an aromatic ring at all. The first four steps, from erythrose 4-phosphate and phosphoenolpyruvate, produce SHIKIMATE (a seven-carbon molecule); three further steps, adding three more carbons from a second PEP, give CHORISMATE, which is the pathway's first BRANCH POINT — one branch toward tryptophan, the other toward phenylalanine and tyrosine together. This is also a genuinely useful piece of applied biochemistry: the herbicide GLYPHOSATE competitively inhibits the step converting shikimate toward chorismate, and it is relatively nontoxic to mammals for the simple reason that mammals lack this pathway entirely — the toxicity is pathway-selective by evolutionary accident, not by clever drug design against a shared target.",
        cn: "**从头构建一个芳香环在化学上代价高昂，仅这一个事实就解释了为什么色氨酸、苯丙氨酸和酪氨酸需要一整条独立路径。** 尽管苯环一旦形成就很稳定，但环境中并没有现成的芳香环可以直接拿来当起始原料，所以细菌、真菌和植物是通过一个脂肪族前体的**闭环**、再逐步加入双键来构建它的——这就是生物体获得芳香环的主要途径。头四步，从赤藓糖 4-磷酸和磷酸烯醇丙酮酸出发，生成 **shikimate**（七碳分子）；再三步，从第二分子 PEP 加入三个碳，得到 **chorismate**——这是整条路径的第一个**分支点**：一支通向色氨酸，另一支同时通向苯丙氨酸和酪氨酸。这也是一个非常实用的应用生物化学例子：除草剂**草甘膦**竞争性抑制从 shikimate 通往 chorismate 的那一步，而它对哺乳动物相对无毒，原因很简单——哺乳动物**完全没有**这条路径；这种毒性选择性是进化上的巧合，不是针对某个共享靶点的精巧药物设计。"
      },
      {
        cz: "tryptofan syntáza — kanál mezi dvěma podjednotkami",
        en: "TRYPTOPHAN SYNTHASE PHYSICALLY TUNNELS ITS OWN INTERMEDIATE FROM ONE ACTIVE SITE TO THE NEXT, WHICH IS A CONCRETE, VISUALISABLE EXAMPLE OF CHANNELING. At the chorismate branch point, the tryptophan side first converts chorismate to anthranilate — glutamine donates the nitrogen that becomes the indole ring's nitrogen — then anthranilate condenses with PRPP, contributing the indole ring's other two carbons. The final enzyme, tryptophan synthase, has an alpha2beta2 structure that DISSOCIATES into separable activities: the alpha subunit converts indole-3-glycerol phosphate to indole plus glyceraldehyde 3-phosphate, and the beta2 unit condenses that indole with serine (via a PLP-dependent Schiff base) to give tryptophan. The mechanistically important point: the indole intermediate made at the alpha subunit is NOT released into solution — it moves through an internal molecular TUNNEL directly to a beta-subunit active site. This channeling may extend across the whole chorismate-to-tryptophan pathway; in some fungi and bacteria several of its enzyme activities sit on single polypeptides, and even where they are separate proteins, some require noncovalent association with the others, suggesting the whole pathway may function as a metabolon — a multienzyme complex that does not survive standard purification, which is why it eluded direct biochemical isolation for a long time.",
        cn: "**色氨酸合酶把自己的中间产物直接从一个活性位点「隧穿」送到下一个，这是一个具体、可视化的物质传送 (channeling) 例子。** 在 chorismate 分支点，通向色氨酸的一支先把 chorismate 转化为邻氨基苯甲酸——谷氨酰胺供给那个后来成为吲哚环氮原子的氮；随后邻氨基苯甲酸与 PRPP 缩合，贡献吲哚环另外两个碳。最后一个酶——色氨酸合酶——具有 **α₂β₂** 结构，可**解离**成各自独立的活性：α 亚基把吲哚-3-甘油磷酸转化为吲哚加 3-磷酸甘油醛，β₂ 单元再把这个吲哚（经一个 PLP 依赖的席夫碱）与丝氨酸缩合，生成色氨酸。机制上重要的一点是：α 亚基生成的吲哚中间体**并不释放到溶液中**——它经由一条内部的分子**隧道**直接被送到 β 亚基的活性位点。这种物质传送可能贯穿从 chorismate 到色氨酸的整条路径；在某些真菌和细菌中，其中若干酶活性坐落在单条多肽链上，即便在分开的蛋白中，有些也需要与其他酶**非共价缔合**才能工作，提示整条路径可能作为一个 **metabolon**（多酶复合物）运作——这种复合物在常规纯化中通常不能完整保留，这正是它长期未能被直接生化分离出来的原因。"
      },
      {
        cz: "fenylalanin, tyrosin — jednodušší větev, a tyrosin jako podmíněně esenciální",
        en: "PHENYLALANINE AND TYROSINE'S BRANCH IS MUCH SIMPLER THAN TRYPTOPHAN'S, AND TYROSINE'S RELATIONSHIP TO PHENYLALANINE IS WHY IT COUNTS AS CONDITIONALLY ESSENTIAL. From chorismate, the phenylalanine/tyrosine branch runs through a single common intermediate, PREPHENATE, formed by a chorismate-to-prephenate step that is chemically notable as a rare biological example of a CLAISEN REARRANGEMENT; the final step to either amino acid is transamination with glutamate. Animals additionally have a direct shortcut: phenylalanine hydroxylase converts phenylalanine to tyrosine by hydroxylation at C-4 of the phenyl ring — the same enzyme that also participates in phenylalanine's DEGRADATION, so it is a two-way door metabolically, not a dedicated biosynthetic enzyme. Because tyrosine can always be made this way as long as phenylalanine (an essential amino acid) is available, tyrosine itself is classed as conditionally essential, or nonessential only in the sense of being one hydroxylation away from something you must eat.",
        cn: "**苯丙氨酸/酪氨酸这一支比色氨酸那一支简单得多，而酪氨酸与苯丙氨酸的关系正是它被归为条件必需的原因。** 从 chorismate 出发，苯丙氨酸/酪氨酸这一支经过一个共同的中间体 **prephenate**，由 chorismate 到 prephenate 的这一步在化学上颇值一提，是生物体内 **Claisen 重排**的罕见实例之一；通往这两种氨基酸的最后一步都是与谷氨酸的转氨基。动物还多了一条直接的捷径：**苯丙氨酸羟化酶**通过在苯环 C-4 位羟基化，把苯丙氨酸转化为酪氨酸——同一个酶也参与苯丙氨酸的**降解**，所以在代谢上它是一扇双向门，而不是一个专属的生物合成酶。正因为只要苯丙氨酸（一种必需氨基酸）够用，就总能用这条路做出酪氨酸，酪氨酸本身被归为**条件必需**——或者说，它「非必需」的程度，仅仅是离一种你必须吃进去的东西差一步羟基化而已。"
      },
      {
        cz: "histidin — sdílí prekurzory s biosyntézou purinů",
        en: "HISTIDINE'S PATHWAY IS THE ONE THAT REACHES OUTSIDE AMINO ACID METABOLISM ENTIRELY, BORROWING MACHINERY FROM PURINE SYNTHESIS. Histidine draws on THREE precursors at once: PRPP contributes five carbons, the purine ring of ATP contributes one nitrogen and one carbon, and glutamine supplies the second ring nitrogen. The key steps: ATP and PRPP condense, linking N-1 of the purine ring to PRPP's activated C-1; the purine ring then OPENS, leaving N-1 and C-2 of the former adenine attached to the ribose; and the imidazole ring closes with glutamine donating a nitrogen. Using ATP here as an ordinary metabolite (a carbon-and-nitrogen source) rather than as a phosphoryl-donating cofactor looks wasteful at first glance, but it is not: the ATP remnant left after N-1 and C-2 are stripped away is AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) — which is itself an intermediate of purine biosynthesis and is rapidly recycled back to ATP. So the histidine pathway and purine biosynthesis are not merely analogous, they share literal chemical machinery, and nothing here is thrown away.",
        cn: "**组氨酸的路径是唯一一条彻底伸出氨基酸代谢之外、借用嘌呤合成机器的路径。** 组氨酸同时取用**三种**前体：PRPP 贡献五个碳，ATP 的嘌呤环贡献一个氮和一个碳，谷氨酰胺供给环上的第二个氮。关键步骤是：ATP 与 PRPP 缩合，把嘌呤环的 N-1 连接到 PRPP 被活化的 C-1 上；随后嘌呤环**打开**，把原来腺嘌呤的 N-1 和 C-2 留在核糖上；咪唑环随之闭合，谷氨酰胺供给一个氮。在这里把 ATP 当作一个普通代谢物（碳氮来源）而不是磷酰基供体辅因子来用，乍看像是浪费，但其实不然：N-1 和 C-2 被剥离之后剩下的那部分 ATP 残余，正是 **AICAR**（5-氨基咪唑-4-甲酰胺核糖核苷酸）——它本身就是嘌呤生物合成的一个中间体，会被迅速回收再生成 ATP。所以组氨酸路径和嘌呤生物合成不只是类比关系，它们**共享着实实在在的化学机器**，这里没有任何东西被白白丢弃。"
      },
      {
        cz: "tři úrovně regulace — jednoduchá, koncertovaná, sekvenční",
        en: "REGULATION ESCALATES THROUGH THREE DISTINCT PATTERNS, AND TELLING THEM APART IS THE EXAMINABLE POINT. SIMPLE feedback inhibition is the baseline: an end product allosterically inhibits the first committed enzyme of ITS OWN pathway — the book's clean worked example is isoleucine inhibiting the first step of its own synthesis from threonine, historically one of the first examples of allosteric feedback inhibition discovered. CONCERTED inhibition is one enzyme integrating MULTIPLE independent signals whose combined effect is more than additive: E. coli glutamine synthetase is inhibited by six different products derived from glutamine simultaneously, and the joint effect exceeds the sum of each acting alone. SEQUENTIAL feedback inhibition solves a different problem — several end products sharing the SAME upstream steps — using ISOENZYMES: in E. coli's aspartate-derived pathway to lysine, methionine, threonine and isoleucine, the enzyme converting aspartate to aspartyl-beta-phosphate exists as THREE independently-regulated isozymes, and the enzymes at the next two branch points (aspartate-beta-semialdehyde to homoserine; threonine to alpha-ketobutyrate) each exist as TWO. This multiplicity is the whole point: it prevents one end product's excess from accidentally shutting down synthesis of the OTHER products that share the same early steps. On top of allosteric control, some isozymes are regulated instead by changing how much enzyme is made — synthesis of the unregulated isozyme is repressed when the relevant end product is abundant. The aromatic pathway shows the same design: three DAHP synthase isozymes catalyse the first step toward chorismate, one inhibited by phenylalanine, one by tyrosine, one by tryptophan, so the shared early pathway can still respond to which specific aromatic amino acid is actually in excess.",
        cn: "**调控通过三种截然不同的模式层层升级，分清它们是这里可考的要点。** **简单**反馈抑制是基线：终产物别构抑制**自己那条路径**的第一个限速酶——书里干净的实例是异亮氨酸抑制自己从苏氨酸合成的第一步，这是历史上最早被发现的别构反馈抑制实例之一。**协同**抑制是**一个酶**同时整合**多个独立信号**、且合并效果超过简单相加：*E. coli* 的谷氨酰胺合成酶同时被**六种**谷氨酰胺衍生的产物抑制，联合效果超过各自单独作用之和。**序贯**反馈抑制解决的是另一个问题——**若干终产物共用同一段上游步骤**——用的是**同工酶**：在 *E. coli* 从天冬氨酸出发通向赖氨酸、甲硫氨酸、苏氨酸和异亮氨酸的路径中，把天冬氨酸转化为天冬氨酰-β-磷酸的那个酶存在**三个**独立调控的同工酶；接下来两个分支点上的酶（天冬氨酸-β-半醛到高丝氨酸；苏氨酸到 α-酮丁酸）各自存在**两个**。这种「多份」正是关键所在：它防止某一个终产物过量时**意外关掉**了共用同一早期步骤的**其他**产物的合成。在别构调控之上，有些同工酶改由**改变酶的合成量**来调控——当相关终产物充足时，那个不受别构调控的同工酶的合成会被**阻遏**。芳香族路径展现了同样的设计：**三个** DAHP 合酶同工酶催化通向 chorismate 的第一步，一个被苯丙氨酸抑制，一个被酪氨酸抑制，一个被色氨酸抑制，于是这段共用的早期路径依然能对**具体是哪一种**芳香族氨基酸过量做出响应。"
      }
    ],
    terms: [
      {
        cz: "šest prekurzorových rodin",
        en: "six precursor families",
        cn: "六大前体家族",
        def_en: "Lehninger's organising scheme for amino acid biosynthesis (Table 22-1): alpha-ketoglutarate, pyruvate, 3-phosphoglycerate, PEP + erythrose 4-phosphate, oxaloacetate, and ribose 5-phosphate, each the starting metabolite for a subset of the 20 amino acids. Ten amino acids sit one or a few steps from their family precursor; others, especially the aromatics, require far longer pathways.",
        def_cn: "Lehninger 用来组织氨基酸生物合成的框架（Table 22-1）：α-酮戊二酸、丙酮酸、3-磷酸甘油酸、PEP + 赤藓糖 4-磷酸、草酰乙酸、核糖 5-磷酸，各自是一部分氨基酸的起点代谢物。二十种里有十种离各自家族的前体只有一步或几步之遥；另一些，尤其是芳香族，需要长得多的路径。"
      },
      {
        cz: "esenciální aminokyselina",
        en: "essential amino acid",
        cn: "必需氨基酸",
        def_en: "An amino acid a mammal cannot synthesise at all and must obtain from food, generally because its biosynthetic pathway is long or (for the aromatics) entirely absent from mammalian metabolism. Contrast conditionally essential, required only under particular conditions or developmental stages.",
        def_cn: "哺乳动物完全无法自行合成、必须从食物中获取的氨基酸，通常因为其生物合成路径很长，或（对芳香族而言）哺乳动物代谢中根本不存在这条路径。与「条件必需」相对——后者只在特定条件或发育阶段才需要额外摄入。"
      },
      {
        cz: "PRPP — 5-fosforibosyl-1-pyrofosfát",
        en: "PRPP (5-phosphoribosyl-1-pyrophosphate)",
        cn: "PRPP（5-磷酸核糖-1-焦磷酸）",
        def_en: "An activated ribose intermediate made from ribose 5-phosphate plus ATP, feeding both tryptophan and histidine biosynthesis (and, separately, nucleotide synthesis). Allosterically regulated by many of the downstream molecules it eventually becomes part of.",
        def_cn: "由核糖 5-磷酸加 ATP 制成的活化核糖中间体，同时供给色氨酸和组氨酸的生物合成（此外还单独供给核苷酸合成）。被它最终会变成的许多下游分子别构调控。"
      },
      {
        cz: "shikimát a chorismát",
        en: "shikimate and chorismate",
        cn: "莽草酸与分支酸",
        def_en: "Sequential intermediates in the pathway that builds an aromatic ring de novo from erythrose 4-phosphate and phosphoenolpyruvate. Chorismate is the pathway's first branch point, splitting toward tryptophan on one side and phenylalanine/tyrosine on the other. A step on this path is the target of the herbicide glyphosate, which mammals are largely unaffected by because they lack the pathway entirely.",
        def_cn: "从赤藓糖 4-磷酸和磷酸烯醇丙酮酸从头构建芳香环的路径上依次出现的两个中间体。分支酸 (chorismate) 是该路径的第一个分支点，一边通向色氨酸，另一边通向苯丙氨酸/酪氨酸。这条路径上的一步是除草剂草甘膦的作用靶点，哺乳动物基本不受影响，因为它们根本没有这条路径。"
      },
      {
        cz: "tryptofan syntáza a channeling",
        en: "tryptophan synthase and channeling",
        cn: "色氨酸合酶与物质传送",
        def_en: "The final enzyme of the tryptophan pathway, an alpha2beta2 complex that separably converts indole-3-glycerol phosphate to indole (alpha subunit) and condenses indole with serine to give tryptophan (beta2 unit, PLP-dependent). The indole intermediate is not released into solution but tunnels directly between the two active sites — channeling — possibly extending across the whole chorismate-to-tryptophan pathway as a metabolon.",
        def_cn: "色氨酸路径的最后一个酶，一个 α₂β₂ 复合物，其活性可分离：α 亚基把吲哚-3-甘油磷酸转化为吲哚，β₂ 单元（PLP 依赖）把吲哚与丝氨酸缩合成色氨酸。吲哚中间体不释放到溶液中，而是直接在两个活性位点之间隧穿——即 channeling（物质传送）——这种传送可能贯穿从分支酸到色氨酸的整条路径，构成一个 metabolon。"
      },
      {
        cz: "podmíněně esenciální aminokyselina",
        en: "conditionally essential amino acid",
        cn: "条件必需氨基酸",
        def_en: "An amino acid nonessential only under certain conditions. Tyrosine is the section's example: mammals make it in one step by hydroxylating phenylalanine (phenylalanine hydroxylase), so tyrosine is nonessential only as long as dietary phenylalanine, an essential amino acid, is adequate.",
        def_cn: "只有在特定条件下才算非必需的氨基酸。酪氨酸是本节的例子：哺乳动物只需一步——羟基化苯丙氨酸（苯丙氨酸羟化酶）——就能造出它，所以酪氨酸「非必需」，仅在膳食中必需氨基酸苯丙氨酸供应充足的前提下成立。"
      },
      {
        cz: "asparaginasa",
        en: "L-asparaginase",
        cn: "L-天冬酰胺酶",
        def_en: "A bacterial enzyme given as chemotherapy in childhood acute lymphoblastic leukaemia (ALL) to deplete serum asparagine, exploiting the fact that leukaemic lymphocytes make little or no asparagine synthetase and so cannot synthesise their own, unlike normal cells.",
        def_cn: "一种细菌来源的酶，作为儿童急性淋巴细胞白血病 (ALL) 的化疗药物给予，用来耗竭血清中的天冬酰胺——利用的是白血病淋巴细胞几乎不表达天冬酰胺合成酶、因而无法像正常细胞一样自行合成天冬酰胺这一点。"
      },
      {
        cz: "jednoduchá zpětnovazebná inhibice",
        en: "simple feedback inhibition",
        cn: "简单反馈抑制",
        def_en: "The baseline regulatory pattern in amino acid biosynthesis: an end product allosterically inhibits the first committed enzyme of its own pathway. The book's example is isoleucine inhibiting the first step of its own synthesis from threonine.",
        def_cn: "氨基酸生物合成中最基本的调控模式：终产物别构抑制自己那条路径的第一个限速酶。书中的例子是异亮氨酸抑制自己从苏氨酸合成的第一步。"
      },
      {
        cz: "koncertovaná inhibice",
        en: "concerted inhibition",
        cn: "协同抑制",
        def_en: "A single enzyme regulated by multiple independent inhibitory signals whose combined effect exceeds the sum of each acting alone. The book's example is E. coli glutamine synthetase, inhibited simultaneously by six different products derived from glutamine.",
        def_cn: "单个酶同时受多个独立抑制信号调控，其合并效果超过各自单独作用之和。书中的例子是 *E. coli* 谷氨酰胺合成酶，被六种不同的谷氨酰胺衍生产物同时抑制。"
      },
      {
        cz: "sekvenční zpětnovazebná inhibice",
        en: "sequential feedback inhibition",
        cn: "序贯反馈抑制",
        def_en: "A regulatory pattern solving the problem of multiple end products sharing upstream pathway steps: the shared steps are catalysed by isoenzymes, each independently regulated, so one product's excess cannot accidentally shut down synthesis of the others. The book's example is E. coli's aspartate-derived pathway to lysine, methionine, threonine and isoleucine.",
        def_cn: "解决「若干终产物共用上游路径步骤」这一问题的调控模式：共用的步骤由多个各自独立调控的同工酶催化，于是某一个产物的过量不会意外关掉其他产物的合成。书中的例子是 *E. coli* 从天冬氨酸出发通向赖氨酸、甲硫氨酸、苏氨酸和异亮氨酸的路径。"
      }
    ],
    quiz: [
      {
        type: "mcq",
        q_en: "Why can the herbicide glyphosate (Roundup) block a step in aromatic amino acid biosynthesis while remaining relatively nontoxic to mammals?",
        q_cn: "为什么除草剂草甘膦（Roundup）能阻断芳香族氨基酸生物合成中的一步，却对哺乳动物相对无毒？",
        options: [
          "Mammals have a detoxifying enzyme that rapidly degrades glyphosate before it reaches its target",
          "Glyphosate only binds plant-specific chlorophyll-associated proteins, unrelated to amino acid synthesis",
          "Glyphosate competitively inhibits a step in the shikimate-to-chorismate pathway, and mammals lack this pathway entirely, since they cannot build an aromatic ring de novo and must obtain the aromatic amino acids from food",
          "Mammals synthesise tryptophan, phenylalanine and tyrosine via a completely different, glyphosate-insensitive route"
        ],
        answer: 2,
        why_en: "The section is explicit: glyphosate competitively inhibits a step converting shikimate toward chorismate, and it is relatively nontoxic to mammals because mammals LACK this biosynthetic pathway — not because they have a resistant variant of it, and not because of detoxification. This is why phenylalanine, tyrosine and tryptophan are essential in mammals in the first place: without the shikimate/chorismate route, there is no way to build the aromatic ring from scratch, so it must come from the diet. The pathway's absence in the target organism (us) rather than its presence in an altered form is what makes the herbicide selective.",
        why_cn: "本节讲得很明确：草甘膦竞争性抑制从 shikimate 通往 chorismate 的一步，它对哺乳动物相对无毒，是因为哺乳动物**根本没有**这条生物合成路径——不是因为它们有一个耐受的变体版本，也不是靠解毒。这正是苯丙氨酸、酪氨酸、色氨酸在哺乳动物体内本来就是必需氨基酸的原因：没有 shikimate/chorismate 这条路，就没有办法从头构建芳香环，所以只能从饮食中获取。这种除草剂的选择性，来自这条路径在靶标生物（也就是我们）体内的**缺失**，而不是它以某种改变形式的**存在**。"
      },
      {
        type: "mcq",
        q_en: "In mammals, cysteine is synthesised using sulfur from methionine and a carbon skeleton from serine. What does this tell you about mammalian cysteine biosynthesis compared to the pathway in plants and bacteria?",
        q_cn: "在哺乳动物体内，半胱氨酸的合成用甲硫氨酸供给硫、丝氨酸供给碳骨架。这对比植物和细菌的路径，说明了关于哺乳动物半胱氨酸生物合成的什么？",
        options: [
          "It is essentially identical, since both routes start from serine and end with the same product",
          "Mammals use a chemically distinct sulfur source: instead of reducing environmental sulfate to sulfide, they cannibalise the sulfur atom from an existing amino acid, methionine, via S-adenosylmethionine and cystathionine, then attach it to a serine-derived backbone",
          "Mammals do not actually synthesise cysteine at all; the methionine-serine reaction described is only used to degrade excess cysteine",
          "The pathway is identical in all organisms except for the enzyme names used"
        ],
        answer: 1,
        why_en: "The section draws this contrast directly. Plants and bacteria reduce environmental sulfate (via PAPS) all the way to sulfide and use that sulfide directly on serine. Mammals cannot fix sulfate this way, so they instead take an existing organic sulfur source, methionine, and pass its sulfur atom through S-adenosylmethionine, S-adenosylhomocysteine, and homocysteine, which condenses with serine (cystathionine beta-synthase) to give cystathionine, then a PLP-dependent lyase releases free cysteine. So mammalian cysteine synthesis genuinely combines two different amino acids — methionine as sulfur donor, serine as carbon skeleton — which is a materially different chemistry from the plant/bacterial route, not merely different naming.",
        why_cn: "本节直接给出了这个对比。植物和细菌把环境中的硫酸盐（经 PAPS）一路还原成硫化物，直接用在丝氨酸上。哺乳动物无法这样固定硫酸盐，所以它们改为取用一个已有的有机硫来源——甲硫氨酸，把它的硫原子经 S-腺苷甲硫氨酸、S-腺苷高半胱氨酸、高半胱氨酸传递下去，后者与丝氨酸缩合（胱硫醚 β-合酶）生成胱硫醚，再由一个 PLP 依赖的裂解酶释放出游离半胱氨酸。所以哺乳动物的半胱氨酸合成确实是**同时结合两种不同氨基酸**——甲硫氨酸作硫供体，丝氨酸作碳骨架——这与植物/细菌路线在化学上有实质差异，不只是命名不同。"
      },
      {
        type: "mcq",
        q_en: "In E. coli, the pathway from aspartate to lysine, methionine, threonine and isoleucine uses isoenzymes at several shared branch points rather than a single enzyme at each step. What problem does this solve, and what would go wrong without it?",
        q_cn: "在 E. coli 中，从天冬氨酸通向赖氨酸、甲硫氨酸、苏氨酸和异亮氨酸的路径，在若干共用的分支点上用的是同工酶而不是单一的酶。这解决了什么问题？如果没有这个设计会出什么问题？",
        options: [
          "It has no functional purpose; the isoenzymes are simply evolutionary redundancy with no regulatory role",
          "It allows the pathway to run faster overall, since more enzyme copies mean higher maximum flux regardless of regulation",
          "It solves the problem of several end products sharing the same upstream steps: each isozyme is independently regulated, so an excess of one end product (say, lysine) cannot allosterically shut down the shared early steps and thereby also block synthesis of the other products (methionine, threonine, isoleucine) that need those same steps",
          "It exists purely to allow the cell to synthesise each isozyme at a different point in the cell cycle, unrelated to end-product levels"
        ],
        answer: 2,
        why_en: "This is sequential feedback inhibition, and the mechanism is specifically about avoiding cross-talk between pathways that share early steps. If there were only ONE enzyme at, say, the aspartate-to-aspartyl-beta-phosphate step, and it were allosterically inhibited by lysine alone, then high lysine would shut down that step entirely — starving methionine, threonine and isoleucine synthesis too, even though those pathways' own end products might be in short supply. Isoenzymes solve this by letting each product regulate only ITS OWN dedicated copy of the enzyme (or a copy specifically responsive to it), leaving the other isozymes free to keep flux moving toward the products that are actually needed. This is a distinct regulatory strategy from concerted inhibition (one enzyme integrating multiple signals) and from simple feedback inhibition (one product regulating its own dedicated pathway).",
        why_cn: "这就是序贯反馈抑制，而这个机制专门用来避免共用早期步骤的多条路径之间发生「串扰」。如果，比如说，天冬氨酸到天冬氨酰-β-磷酸这一步只有**单一一个**酶、且只被赖氨酸别构抑制，那么赖氨酸高时就会**完全关掉**这一步——连带饿死甲硫氨酸、苏氨酸和异亮氨酸的合成，即便这些路径自己的终产物可能正供不应求。同工酶解决了这个问题：让每个产物只调控**属于自己**的那一份酶拷贝（或对它特异响应的拷贝），使其他同工酶仍能自由地把通量继续送往真正需要的那些产物。这是一种不同于协同抑制（一个酶整合多个信号）、也不同于简单反馈抑制（一个产物调控自己专属的路径）的独立调控策略。"
      },
      {
        type: "mcq",
        q_en: "A student says: 'Amino acid biosynthesis is symmetric with catabolism — since catabolism funnels everything down to acetyl-CoA, biosynthesis must widen back out from one common starting point.' Using what section 22.2 actually shows, what is wrong with this claim?",
        q_cn: "一位同学说：「氨基酸生物合成与分解代谢是对称的——既然分解代谢把一切都收窄到乙酰辅酶A，生物合成就一定是从同一个共同起点重新扩展出去的。」根据 22.2 节实际展示的内容，这个说法错在哪里？",
        options: [
          "The claim is essentially correct; acetyl-CoA is in fact the single starting point for all 20 amino acids",
          "The claim is wrong because biosynthesis does not start from one common metabolite at all — it draws from at least six different precursors (alpha-ketoglutarate, pyruvate, 3-phosphoglycerate, PEP+erythrose 4-phosphate, oxaloacetate, ribose 5-phosphate), with wildly uneven pathway complexity between them, from a one-step conversion to the multi-branch aromatic and aspartate-family pathways",
          "The claim is wrong because amino acid biosynthesis does not exist in most organisms; all 20 amino acids must always come from the diet",
          "The claim is correct for bacteria but the opposite is true in mammals, where biosynthesis narrows rather than widens"
        ],
        answer: 1,
        why_en: "The 'funnel in, funnel back out' picture is exactly the oversimplification this section corrects. Amino acid carbon skeletons are drawn from glycolysis, the citric acid cycle, AND the pentose phosphate pathway, entering biosynthesis at six distinct precursor points, not one. And the pathways are radically unequal: ten amino acids sit one or a few steps from their family precursor, while the aromatic family requires an entirely separate ring-building pathway through shikimate and chorismate that most organisms (mammals) never even evolved, and the aspartate family is a tangle of shared, cross-regulated branch points rather than a single linear route. So there is no single reverse-funnel shape to point to — the true picture is six unequal, partly interconnected on-ramps.",
        why_cn: "「先收窄成一个漏斗、再从同一点重新展开」这幅图景，正是本节要纠正的过度简化。氨基酸的碳骨架同时取自糖酵解、柠檬酸循环**以及**磷酸戊糖途径，从**六个**不同的前体节点进入生物合成，而不是一个。而且各条路径的难度极不均等：十种氨基酸离各自家族的前体只有一步或几步之遥，而芳香族家族需要一整条经由 shikimate 和 chorismate 的独立建环路径——多数生物（包括哺乳动物）从未进化出这条路径；天冬氨酸家族则是一团共享、交叉调控的分支点，而不是一条单一的线性路径。所以并不存在一个可以指认的、单一的「反向漏斗」形状——真实的图景是**六条难度不均、部分相互交织**的匝道。"
      }
    ],
    oral: {
      q_en: "Explain why 'essential amino acid' is a label about pathway difficulty rather than a fixed biological category, using at least three of the six precursor families as evidence, and finish by explaining the three levels of regulation that keep all twenty amino acids in balance.",
      q_cn: "请解释为什么「必需氨基酸」是一个关于路径难度的标签，而不是一个固定的生物学分类，并至少用六大前体家族中的三个作为证据，最后再讲一下让二十种氨基酸保持平衡的三个层次的调控。",
      model_en: "Start from the organising fact: every amino acid's carbon skeleton comes from glycolysis, the citric acid cycle, or the pentose phosphate pathway, entering biosynthesis at one of six precursor points, and plants and bacteria can walk all six roads while mammals kept only about half. That half-and-half split is not arbitrary — it tracks pathway length and complexity, which is the whole argument that 'essential' is a difficulty label, not a fixed category. Take the alpha-ketoglutarate family first: glutamate, glutamine, proline and arginine are all one or a few steps away, proline being nothing more than a cyclised derivative of glutamate. That family stayed nonessential in mammals because it was cheap to keep. Now take the aromatic family, PEP plus erythrose 4-phosphate: building tryptophan, phenylalanine and tyrosine requires constructing an aromatic ring from scratch through shikimate and chorismate, a whole separate multi-step pathway that mammals never evolved at all — which is exactly why glyphosate, which blocks a step on that pathway, kills plants and largely spares us: we were never running that pathway to begin with. And tyrosine sits at an instructive middle point: mammals can make it in a single step by hydroxylating phenylalanine, so it counts as conditionally essential rather than essential — it is nonessential only because its essential precursor is available, which shows the label tracks the actual chemistry, not a fixed list. Third, the oxaloacetate family shows that even 'essential' is not uniform: aspartate and asparagine are simple, nonessential, one-step conversions, while methionine, threonine, lysine, isoleucine, valine and leucine — six of the nine essential amino acids — share a genuinely tangled set of branch points off the same family, aspartate beta-semialdehyde and homoserine among them, with threonine itself feeding into isoleucine. So essentiality correlates with how many extra, organism-specific steps a pathway needs, not with any deep chemical necessity. Now to regulation, which has to solve exactly the complexity this creates. The simplest level is ordinary feedback inhibition: a pathway's own end product blocks its own first committed step, as isoleucine does to its synthesis from threonine. The second level, concerted inhibition, is one enzyme integrating several signals at once, with an effect more than additive — E. coli glutamine synthetase is inhibited simultaneously by six different glutamine-derived products. The third level, sequential feedback inhibition, solves the problem the tangled aspartate family creates directly: when several end products share the same upstream steps, a single allosteric target would let one product's excess accidentally starve the others, so the cell instead uses multiple independently regulated isoenzymes at each shared branch point, so lysine, methionine, threonine and isoleucine can each regulate their own dedicated copy without shutting down the others. The aromatic pathway shows the same design at its own entry point, with three DAHP synthase isozymes each responsive to a different one of the three aromatic products. Put together, the escalation from simple to concerted to sequential regulation is not decoration — it is the direct consequence of the pathway structure itself: simple pathways need only simple regulation, but a shared, branching structure like the aspartate or aromatic families forces isoenzyme-based sequential control to keep one product's abundance from silently starving the others.",
      model_cn: "先从组织性的事实说起：每种氨基酸的碳骨架都来自糖酵解、柠檬酸循环或磷酸戊糖途径，从六个前体节点之一进入生物合成，植物和细菌能走全部六条路，而哺乳动物只保留了大约一半。这个一半一半的划分不是随意的——它跟着路径的长短和复杂程度走，这正是「必需」是一个难度标签、而不是固定分类的全部论证。先看 α-酮戊二酸家族：谷氨酸、谷氨酰胺、脯氨酸、精氨酸都只有一步或几步之遥，脯氨酸不过是谷氨酸的环化衍生物。这个家族在哺乳动物体内保持非必需，是因为保留它成本很低。再看芳香族家族，PEP 加赤藓糖 4-磷酸：构建色氨酸、苯丙氨酸、酪氨酸需要经由 shikimate 和 chorismate 从头造出一个芳香环，这是一整条独立的多步路径，哺乳动物根本没有进化出来——这正是为什么阻断这条路径上一步的草甘膦能杀死植物、却基本不伤害我们：我们本来就没在跑这条路径。而酪氨酸处在一个很有启发性的中间位置：哺乳动物只需一步——羟基化苯丙氨酸——就能造出它，所以它算「条件必需」而不是「必需」——它非必需，仅仅是因为它的必需前体够用，这说明这个标签跟着的是真实的化学，而不是一份固定的清单。第三，草酰乙酸家族说明就连「必需」内部也不均匀：天冬氨酸和天冬酰胺是简单、非必需、一步转化，而甲硫氨酸、苏氨酸、赖氨酸、异亮氨酸、缬氨酸和亮氨酸——九种必需氨基酸里的六种——共享着同一家族里一团真正纠缠的分支点，天冬氨酸 β-半醛和高丝氨酸都在其中，苏氨酸自己又反过来供给异亮氨酸。所以「是否必需」跟的是一条路径需要多少额外的、物种特异的步骤，而不是任何深层的化学必然性。现在讲调控，它必须直接解决这种复杂性带来的问题。最简单的一层是普通的反馈抑制：一条路径自己的终产物阻断自己的第一个限速步骤，就像异亮氨酸对自己从苏氨酸合成的抑制那样。第二层，协同抑制，是一个酶同时整合好几个信号，效果超过简单相加——*E. coli* 谷氨酰胺合成酶同时被六种不同的谷氨酰胺衍生产物抑制。第三层，序贯反馈抑制，直接解决了纠缠的天冬氨酸家族带来的问题：当若干终产物共用同一段上游步骤时，单一的别构靶点会让某个产物的过量意外饿死其他产物，于是细胞在每个共用的分支点改用多个各自独立调控的同工酶，让赖氨酸、甲硫氨酸、苏氨酸和异亮氨酸各自调控自己专属的那一份，而不会关掉其他的。芳香族路径在自己的入口处展现了同样的设计，三个 DAHP 合酶同工酶各自响应三种芳香族产物中的一种。合在一起看，从简单到协同再到序贯的调控升级不是装饰——它是路径结构本身的直接后果：简单的路径只需要简单的调控，而像天冬氨酸家族或芳香族家族这样共用、分岔的结构，则迫使细胞必须用基于同工酶的序贯调控，才能防止某一个产物的丰富悄悄饿死其他产物。",
      checklist: [
        "Named the six precursor families and correctly stated that biosynthesis does NOT start from one common metabolite",
        "Used the alpha-ketoglutarate family (or another simple family) as an example of a short, cheap, kept-nonessential pathway",
        "Explained the aromatic pathway's ring-building problem via shikimate/chorismate and why mammals lack it entirely",
        "Connected the aromatic pathway's absence in mammals to glyphosate's selective toxicity",
        "Explained tyrosine as conditionally essential and why that label fits better than a binary essential/nonessential split",
        "Used the oxaloacetate/aspartate family to show that even 'essential' amino acids differ in pathway complexity, with shared branch points",
        "Defined simple feedback inhibition with the isoleucine example",
        "Defined concerted inhibition with the glutamine synthetase example (six signals, more than additive)",
        "Defined sequential feedback inhibition and explained WHY isoenzymes are needed (shared upstream steps, avoiding cross-starvation)",
        "Connected the escalation (simple -> concerted -> sequential) to pathway structure rather than presenting it as an arbitrary list"
      ]
    }
  }

);
