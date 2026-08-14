/* ============================================================
   Lehninger 8 — Chapter 14, sections 14.4 and 14.6.
   DEPTH LAYER for two topicKeys that had NO Lehninger node at all:
   `gluconeogenesis` (Czech 7-9, 7-9-1) and
   `pentose-phosphate-pathway` (Czech 7-7-1, 7-7-2).

   `leh_ch14.js` holds exactly ONE node, `L-14-5-1`, section 14.5,
   topicKey `glycolysis`. Checked before writing: no id collision,
   and no overlap of subject — 14.5 is the regulation section, and
   it explicitly writes every control point from the GLYCOLYTIC
   side. These two nodes take the two sections it does not touch.

   Ids: L-14-4-1 and L-14-6-1, in the established `L-<ch>-<sec>-<n>`
   form. `chapter: 14` is LEHNINGER's chapter 14 — chapter is
   book-local (Czech ch7 is the carbohydrate chapter).

   ------------------------------------------------------------
   THE ONE THING THESE NODES DO THAT NOTHING ELSE IN THE APP CAN
   ------------------------------------------------------------
   The Czech textbook never names three enzymes, and its nodes
   faithfully record the omission rather than quietly patching it:

     7-9   "the book does NOT name an enzyme for either hydrolysis
            anywhere in this node's page range — it describes both
            only in the passive voice"
            -> fructose 1,6-bisphosphatase (FBPase-1)
            -> glucose 6-phosphatase
     7-7-1 "the third arrow carries NO enzyme name anywhere in the
            text or the figure"
            -> 6-phosphogluconate dehydrogenase

   Measured in the app data before writing (2026-08-14, grep over
   biochemie_pro/data/ch*.js):
     karboxykinas               0 hits anywhere
     6-fosfatas                 0 hits anywhere
     bisfosfatas                0 hits in ch7
     6-fosfoglukonatdehydrogenas 1 hit, and it is 7-7-1's own
                                sentence saying the book never
                                prints the name
     favism / G6PD / beriberi / Wernicke / primaquine   0 each
     glutathion                 8 in ch4, 2 in ch6, 0 in ch7 —
                                so the NADPH-glutathione link is
                                never made at the pathway
   One nuance worth keeping straight: a ch10 node's OWN annotation
   does name glucose 6-phosphatase and fructose 1,6-bisphosphatase,
   as an aside explaining that the Czech book's word "hydrolase" is
   correct but unusual. That is the app author supplying the names,
   not the book. Lehninger 14.4 prints them, with the reaction,
   the free-energy change and — for glucose 6-phosphatase — the
   fact that decides which organs can feed the blood.

   PASTE-READY `lehNotes` FOR THE CZECH NODES. This file creates no
   `lehNotes` itself, because §9f puts them on CZECH nodes and this
   session was told to add no new file only. Three notes are owed;
   they are written out verbatim at the FOOT of this file so nothing
   is lost, ready to insert into ch7.js above each node's `mustKnow`.

   ------------------------------------------------------------
   THE 12 NADPH TENSION IN 7-7-2, SETTLED
   ------------------------------------------------------------
   Czech node 7-7-2 asserts two things side by side that cannot
   both be true: "12 NADPH per glucose-6-phosphate", and "glucose-
   6-phosphate must be oxidized SIX times (2 NADPH each turn) to
   obtain 6 ribose-5-phosphate, from which 2 glyceraldehyde-3-
   phosphate molecules arise" which are then sent off to glycolysis.
   Do the carbon and the count:
     six turns              6 G6P + 12 NADP+ -> 6 pentose-P
                            + 6 CO2 + 12 NADPH
     Czech's non-ox tail    6 pentose-P (30 C) -> 4 F6P (24 C)
                            + 2 G3P (6 C), the 2 G3P leaving
     so 4 G6P are rebuilt, 2 are consumed net
     => 12 NADPH / 2 G6P = SIX NADPH per glucose 6-phosphate,
        not twelve.
   Lehninger closes the loop instead, and that is what makes 12
   correct: the two G3P are joined to fructose 1,6-bisphosphate
   "as in gluconeogenesis" and FBPase-1 plus phosphohexose
   isomerase return them to glucose 6-phosphate, so SIX pentose
   phosphates become FIVE hexose phosphates and nothing leaves
   (A p.549). Six G6P oxidised, five rebuilt, ONE consumed net,
   six CO2 out, twelve NADPH. FIGURE 14-29's caption says the same
   in one clause: the nonoxidative phase recycles six molecules of
   the pentose into five molecules of the hexose glucose
   6-phosphate, converting glucose 6-phosphate "(in six cycles)"
   to CO2 (A p.547).
   So: 2 NADPH is per PASS, per molecule of G6P oxidised.
       12 NADPH is per G6P COMPLETELY OXIDISED to six CO2, which
       takes six passes because five of the six are given back.
   Both numbers are right; they count different denominators. The
   Czech node's error is not the 12 — it is exporting the 2 G3P
   while still claiming the 12. This is written up as point 6 and
   quiz item 2 of L-14-6-1, and as the third `lehNotes` below.

   ------------------------------------------------------------
   QUESTION DESIGN — DELIBERATELY DIFFERENT FROM THE REST OF THE APP
   ------------------------------------------------------------
   Measured over biochemie_pro/data before writing:
     leh_*.js   162 mcq, answer is the LONGEST option in 155 (96 %),
                positions A/B/C/D = 42/109/10/1
     ch*.js     381 mcq, longest in 296 (78 %)
     together   543 mcq, longest in 451 (83 %)
   A reader who always picks the longest option scores 83 % without
   reading the biochemistry. The twelve mcq below are written the
   other way: every distractor is a full, specific, same-length
   claim, and the key is spread 3/3/3/3 across the four positions.

   Source: Lehninger Principles of Biochemistry, 8th ed.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "L-14-4-1",
    book: "lehninger",
    topicKey: "gluconeogenesis",
    chapter: 14,
    section: "14.4",
    czTitle: "Glukoneogeneze (7.9 / 7.9.1) — hloubková vrstva: tři obchvaty a jejich enzymy, biotin a CO2 u pyruvátkarboxylasy, cena šesti makroergických fosfátů na jednu glukosu, a proč z mastných kyselin u savců glukosa nevznikne",
    enTitle: "Gluconeogenesis — the three irreversible glycolytic steps measured rather than asserted, the two enzymes that bypass them and that the Czech book never names, the biotin and CO2 chemistry of the pyruvate carboxylase detour, what one glucose actually costs, and why fatty acids cannot give net glucose in animals",
    cnTitle: "糖异生——把糖酵解那三步「不可逆」从断言变成实测值，绕过它们的两个酶（捷克教材从不点名），pyruvate carboxylase 绕行路线里的 biotin 与 CO2 化学，造一个葡萄糖到底花多少，以及为什么动物不能用脂肪酸净造葡萄糖",
    pages: [533, 534, 535, 536, 537, 538],
    coverage: "full",
    coverageNote: "Read from Lehninger 8 section 14.4, B-copy text layer pp.1946-1961 in full, end to end through all four subheadings (The First Bypass: Conversion of Pyruvate to Phosphoenolpyruvate Requires Two Exergonic Reactions; The Second and Third Bypasses Are Simple Dephosphorylations by Phosphatases; Gluconeogenesis Is Energetically Expensive, But Essential; Mammals Cannot Convert Fatty Acids to Glucose, Plants and Microorganisms Can), plus SUMMARY 14.4. EVERY A PAGE WAS THEN MEASURED IN A'S OWN OCR rather than taken from the A-B map, per the rule §13l set: A pdf pages 564 to 592 were extracted and 27 candidate phrases probed page by page, all of them landing on exactly one page. The result agrees with the TOC's range at both ends (14.4 opens on A p.533, SUMMARY 14.4 closes on A p.538) and is confirmed independently by the chapter's own KEY TERMS index on A p.552, which prints gluconeogenesis 533, biotin 534, fructose 1,6-bisphosphatase (FBPase-1) 537, glucogenic 538, glyceroneogenesis 538. Content by page as read: A p.533 the opening (brain needs about 120 g glucose a day, the tissues that depend on blood glucose, the definition of gluconeogenesis, the precursors, liver and renal cortex and small-intestine epithelium, the Cori cycle) and FIGURE 14-15; A p.534 the seven-of-ten arithmetic, the three irreversible glycolytic reactions, FIGURE 14-16, and the pyruvate carboxylase reaction with biotin, carboxyphosphate and carboxybiotin; A p.535 TABLE 14-2 (free-energy changes of every glycolytic reaction in erythrocytes), FIGURE 14-17 (biotinyl-Lys tether, site 1 and site 2), acetyl-CoA as pyruvate carboxylase's positive effector, and the malate dehydrogenase and PEP carboxykinase reactions; A p.536 FIGURE 14-18, the summed bypass equation with its standard and actual free-energy changes, the carboxylation-decarboxylation activation argument, the cytosolic NADH logic, and FIGURE 14-19 with the lactate route; A p.537 the mitochondrial PEP carboxykinase isozyme, FBPase-1 and glucose 6-phosphatase with their free-energy changes and glucose 6-phosphatase's endoplasmic-reticulum localisation, the overall equation 14-9 and TABLE 14-3; A p.538 the comparison with glycolysis, the two free-energy totals, TABLE 14-4 (glucogenic amino acids, only leucine and lysine excluded), the fatty-acid argument, glycerol and glyceroneogenesis, and SUMMARY 14.4. For the reciprocal-regulation material that section 14.4 itself only points forward to, B pp.1969-1977 were also read in full and the A pages verified by direct probe (A p.541 commits glucose to glycolysis; A p.542 the coordinated and reciprocal wording, PFK-1 virtually inactive without fructose 2,6-bisphosphate, the bifunctional protein, the glucagon cascade; A p.543 the FBPase-1 inhibition figures and xylulose 5-phosphate) — that material is summarised here only as far as a reader of the gluconeogenic side needs it, and the full treatment stays in L-14-5-1 where it belongs.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；biotin/羧基生物素、PEP carboxykinase、glucose 6-phosphatase 的内质网定位、生糖氨基酸表、glyceroneogenesis 这几点是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    trace: [
      {
        term: "biotin 生物素——为什么搬一个 CO2 需要动用一个维生素",
        what: "**一条长长的、会摆动的机械臂。** biotin 通过一个**酰胺键**共价接在 pyruvate carboxylase 一个 **Lys 残基的 ε-氨基**上，形成所谓 **biotinyl-enzyme**。这条 **biotinyl-Lys 长臂**做的事只有一件：**把底物从酶的一个位点搬到另一个位点**。反应分**两相、在两个不同的位点**上发生——**位点 1** 花掉一个 ATP 把 **bicarbonate 变成 CO2**，biotin **接住**这个 CO2；**位点 2** biotin **把 CO2 交给丙酮酸**，生成 oxaloacetate（FIGURE 14-17，A 第 535 页）。",
        from: "为什么不能让 CO2 自己飘过去？因为**游离的 CO2 加到丙酮酸上是个上坡反应**，你必须先**给这个 CO2 充电**，而充电这件事得花 ATP、得有专门的化学。书上把这条链一步不落地写了出来，值得当成三步来记：**bicarbonate 先被 ATP 磷酸化，做成一个混合酸酐——carboxyphosphate**；**然后 biotin 把那个磷酸顶掉，自己接上去，成为 carboxybiotin**（A 第 534 页）。**到这一步，CO2 已经是「活化」状态了**，被拴在一条臂上，可以被准确地送到第二个位点去。**所以 biotin 不是催化剂，它是一个「载具」**——**而且是共价拴住的载具**，这样活化好的 CO2 才不会半路跑掉。**这就是为什么缺 biotin 这个维生素，糖异生的第一步就会瘫。**",
        to: "考试里 biotin 出现在**三个不同的地方，而且每次都是同一套化学**。**第一，糖异生**：pyruvate carboxylase，丙酮酸 → oxaloacetate。**第二，脂肪酸合成**：acetyl-CoA carboxylase——书自己在这里就点出来了，说**同样一套「羧化—脱羧」序列在第 21 章被用来活化 acetyl-CoA**（A 第 536 页）。**第三，柠檬酸循环的回补（anaplerotic）反应**——同一个 pyruvate carboxylase，第 16 章。**被问到「哪些酶需要 biotin」，答「羧化酶（carboxylases）」这一类，然后举这两个例子，比背一张表稳当。**",
        family: "**别把三个「加 CO2 / 减 CO2」的角色搞混**。**pyruvate carboxylase 加上 CO2（花 ATP，用 biotin）**；**PEP carboxykinase 把同一个 CO2 拿掉（花 GTP）**；**pyruvate dehydrogenase 也拿掉一个 CO2，但那是不可逆的、通向 acetyl-CoA 的另一条路**。**注意书里那句最漂亮的话**：**在 pyruvate carboxylase 那一步加上去的 CO2，正是在 PEP carboxykinase 那一步被丢掉的同一个分子**（A 第 536 页）。**加了又减，看着白做工——其实不是**：**脱羧本身释放的自由能，正是把磷酸推上 PEP 那个高能位置的动力**。书把这整套叫做**「活化」丙酮酸的一种方式**。",
        numbers: "**代价是可以数出来的**：把**一个**丙酮酸变成**一个** PEP，要花**两个高能磷酸当量**——**一个来自 ATP（羧化），一个来自 GTP（磷酸化）**——而书说在细胞条件下**每个大约值 50 kJ/mol**（A 第 536 页）。**而糖酵解走相反方向时，同一步只还给你一个 ATP。** 这两步加起来的标准自由能变化 **ΔG'° 只有 0.9 kJ/mol**，看着几乎是平的；但**细胞里的实测 ΔG 是 −25 kJ/mol**，因为 **PEP 一生成就被下游消耗掉、浓度始终很低**——**所以它在细胞里实际上不可逆**（A 第 536 页）。"
      },
      {
        term: "为什么造一个葡萄糖要 6 个高能磷酸，而糖酵解只还你 2 个",
        what: "**从两个丙酮酸造一个葡萄糖，账单是：4 个 ATP + 2 个 GTP + 2 个 NADH**（方程 14-9，A 第 537 页）。**也就是六个高能磷酸基团。** 而**糖酵解正向跑完一个葡萄糖，只净赚 2 个 ATP**。**所以来回一趟，你净亏四个高能磷酸。**",
        from: "**为什么要这么贵？书自己给了两个理由，而第一个才是重点**。**第一，贵是买来的「单向性」**：**「这些高能量代价的很大一部分，是为了保证糖异生的不可逆性」**（A 第 538 页）。**如果两个方向的代价一样，那两条路就会在同一个平衡点上互相抵消，谁也走不动。** 把数字放上去就一目了然：**在细胞内条件下，糖酵解整体的自由能变化至少是 −63 kJ/mol，糖异生整体是 −16 kJ/mol**——**两个都是负的**，**所以两条路各自都是不可逆过程**（A 第 538 页）。**这就是「反应可逆、通路不可逆」的教科书例子。** **第二个理由是经济学的**：**如果不把丙酮酸变回葡萄糖，而是把它排掉，那它完全有氧氧化本可产出的 ATP 就全丢了——书说每个丙酮酸超过 10 个 ATP**（A 第 538 页）。",
        to: "**这一条和捷克教材有一个漂亮的对账，值得当场做一遍。** 捷克 `7-9` 说：**糖异生每合成「一个丙糖磷酸」要花三个高能磷酸**——一个用于形成 carboxybiotin，一个用于 oxaloacetate 脱羧磷酸化成 PEP，一个用于 3-磷酸甘油酸的还原。**一个葡萄糖需要两个丙糖磷酸，所以 3 × 2 = 6。** **和 Lehninger 的 4 ATP + 2 GTP 完全对上。** **两本书用不同的方式数同一件事而得到同一个数——考试里把这句说出来，比只报一个数字有说服力得多。**",
        family: "**三个数别混**：**6** 是造一个葡萄糖花的**高能磷酸**（4 ATP + 2 GTP）；**2** 是另外还要花的 **NADH**（用于还原两个 1,3-bisphosphoglycerate）；**2** 是糖酵解正向**还给你**的 ATP。**还有一个容易漏的**：那 2 个 NADH **是胞质里的**，而**胞质的 [NADH]/[NAD+] 比线粒体低好几个数量级**——**所以「把还原当量运到胞质」本身就是 malate 穿梭存在的理由之一**（A 第 536 页）。",
        numbers: "**方程 14-9 逐字**：**2 丙酮酸 + 4 ATP + 2 GTP + 2 NADH + 2 H+ + 4 H2O → 葡萄糖 + 4 ADP + 2 GDP + 6 Pi + 2 NAD+**。**对照糖酵解**：**葡萄糖 + 2 ADP + 2 Pi + NAD+ → 2 丙酮酸 + 2 ATP + 2 NADH + 2 H+ + 2 H2O**（A 第 538 页）。**两个方程并排写出来，「不是同一条路倒着跑」这句话就不需要再解释了。**"
      }
    ],
    mustKnow: {
      en: "Four things, and the first is the one the Czech book asserts without evidence. ONE, gluconeogenesis is not glycolysis reversed: 7 of the 10 enzymatic reactions ARE the reverse of glycolytic ones, and three are not, because in the cell they are too far downhill. Lehninger does not merely say so — TABLE 14-2 measures it. Hexokinase runs at a cellular free-energy change of −33.4 kJ/mol, PFK-1 at −22.2, pyruvate kinase at −16.7, while all seven shared steps sit between −6 and +25, near zero. That is the evidence for the three bypasses, and it is the reason both directions can be irreversible at once. TWO, the bypasses, with their enzymes. Bypass one, pyruvate to PEP, takes two enzymes and two different nucleotides: pyruvate carboxylase, a MITOCHONDRIAL enzyme requiring the coenzyme BIOTIN, spends ATP to add bicarbonate as CO2 and gives oxaloacetate; then PEP carboxykinase spends GTP to remove that same CO2 again and gives PEP. Because there is no transporter for oxaloacetate, it leaves the mitochondrion disguised as malate, and reoxidising malate in the cytosol delivers the cytosolic NADH that gluconeogenesis will consume further up the pathway. Bypasses two and three are simple hydrolyses by phosphatases, NOT reversed kinases: FRUCTOSE 1,6-BISPHOSPHATASE (FBPase-1) and GLUCOSE 6-PHOSPHATASE. Those two names are what the Czech book withholds — it describes both reactions only in the passive voice. THREE, glucose 6-phosphatase is a membrane protein in the LUMEN OF THE ENDOPLASMIC RETICULUM of hepatocytes, kidney cells and small-intestine epithelium, and of no other tissue. That single fact decides which organs can put glucose into the blood, and it is why muscle glycogen can never raise blood sugar. FOUR, the cost and the limit. One glucose from two pyruvate costs four ATP, two GTP and two NADH — six high-energy phosphates against the two ATP that glycolysis returned — and that expense is what buys irreversibility. And no NET conversion of fatty acids to glucose occurs in mammals, because most fatty acids yield only acetyl-CoA, the pyruvate dehydrogenase reaction is irreversible, and animals have no other route from acetyl-CoA to pyruvate. Plants, yeast and many bacteria do: the glyoxylate cycle. What mammals CAN use is the glycerol backbone of the fat.",
      cn: "**四件事，而第一件正是捷克教材只下断言、不给证据的那一件。** **一、糖异生不是糖酵解倒着跑**：**十个酶促反应里有七个确实是糖酵解反应的逆反应**，另外**三个不是**——因为它们**在细胞里下坡下得太狠**。**Lehninger 不只是这样说，TABLE 14-2 是把它量出来的**：**hexokinase 在细胞内的自由能变化是 −33.4 kJ/mol**，**PFK-1 是 −22.2**，**pyruvate kinase 是 −16.7**；而**共用的那七步全都落在 −6 到 +25 之间，接近零**。**这就是「三个绕行」的证据**，**也是两个方向为什么能同时都不可逆的原因**。**二、三个绕行，以及它们的酶。** **绕行一，丙酮酸 → PEP，要两个酶、两种不同的核苷酸**：**pyruvate carboxylase 是线粒体酶、需要辅酶 biotin**，**花掉一个 ATP** 把 bicarbonate 以 CO2 的形式加上去，得到 **oxaloacetate**；接着 **PEP carboxykinase 花掉一个 GTP** 把**同一个 CO2 再拿掉**，得到 **PEP**。**因为线粒体膜上没有 oxaloacetate 的转运体**，它得**化装成 malate** 出来；**而在胞质里把 malate 重新氧化，正好交付了糖异生在上游要消耗的那份胞质 NADH**。**绕行二和三是磷酸酶做的简单水解，不是「反着跑的激酶」**：**fructose 1,6-bisphosphatase（FBPase-1）** 和 **glucose 6-phosphatase**。**这两个名字正是捷克教材扣着不给的**——它对这两个反应**只用被动语态描述**。**三、glucose 6-phosphatase 是一个膜蛋白，位于肝细胞、肾细胞和小肠上皮细胞的内质网腔内**，**其他组织都没有**。**就这一个事实决定了哪些器官能往血里送葡萄糖**，**也正是「肌糖原永远升不了血糖」的原因**。**四、代价与界限。** **从两个丙酮酸造一个葡萄糖要花 4 个 ATP、2 个 GTP 和 2 个 NADH**——**六个高能磷酸，对上糖酵解还给你的那 2 个 ATP**——**而这笔开销买到的就是不可逆性**。**另外，哺乳动物身上不存在脂肪酸到葡萄糖的「净」转化**：因为**大多数脂肪酸分解只产生 acetyl-CoA**，**pyruvate dehydrogenase 那个反应不可逆**，**而动物没有别的路把 acetyl-CoA 变回丙酮酸**。**植物、酵母和许多细菌有——那就是乙醛酸循环（glyoxylate cycle）。** **哺乳动物能用的，是脂肪里的甘油骨架。**"
    },
    summary: {
      en: "Section 14.4 opens with why the pathway has to exist: the brain alone needs about 120 g of glucose a day, more than half of all the glucose stored as glycogen in muscle and liver, and between meals, in longer fasts, or after vigorous exercise those stores run out. Gluconeogenesis, in mammals mainly in liver and to a lesser extent in renal cortex and small-intestine epithelium, converts pyruvate and related three- and four-carbon compounds back to glucose; lactate from exercising muscle makes the round trip Lehninger names the Cori cycle. It then sets out the central arithmetic: 7 of the 10 enzymatic reactions of gluconeogenesis are the reverse of glycolytic reactions, and three cannot be, because in the cell they are far too exergonic — TABLE 14-2 gives the numbers for every step. The three bypasses follow. The first, pyruvate to PEP, runs through the mitochondrion: pyruvate carboxylase, a biotin enzyme, spends ATP to make oxaloacetate, with bicarbonate activated as carboxyphosphate and then as carboxybiotin and carried between two sites on a long biotinyl-Lys arm; acetyl-CoA is its positive effector, so available fat turns the pathway on. Oxaloacetate has no transporter, so it is reduced to malate, exported, and reoxidised, which incidentally delivers the cytosolic NADH the pathway needs; PEP carboxykinase then spends GTP to remove the CO2 that was just added. A second route, predominant when lactate is the precursor, uses a mitochondrial PEP carboxykinase isozyme instead. The second and third bypasses are simple hydrolyses by phosphatases, FBPase-1 and glucose 6-phosphatase, the latter confined to the endoplasmic reticulum of liver, kidney and intestine — which is why only those organs supply blood glucose. The cost is then totalled: four ATP, two GTP and two NADH per glucose, against two ATP recovered by glycolysis, an expense that buys irreversibility in both directions. Anything convertible to pyruvate or to a citric acid cycle intermediate is a substrate, which makes eighteen of the twenty amino acids glucogenic; only leucine and lysine are not. Finally the limit: no net conversion of fatty acids to glucose occurs in mammals, because catabolism of most fatty acids yields only acetyl-CoA and the pyruvate dehydrogenase reaction is irreversible. Plants, yeast and many bacteria escape this through the glyoxylate cycle. Mammals can still use the glycerol released from triacylglycerols, and adipocytes, which lack glycerol kinase, run a truncated version of the pathway called glyceroneogenesis.",
      cn: "**14.4 节先说这条通路为什么非有不可**：**单是脑每天就要约 120 克葡萄糖**，**比肌肉和肝里以糖原形式储存的全部葡萄糖的一半还多**；而**两餐之间、较长时间禁食、或剧烈运动之后，这些储备会被耗尽**。**糖异生**在哺乳动物中**主要发生在肝**，**肾皮质和小肠上皮细胞里也有一些**，把**丙酮酸以及相关的三碳和四碳化合物变回葡萄糖**；运动肌肉产生的**乳酸**跑的那趟往返，**Lehninger 直接点名叫 Cori cycle**。接着它摆出核心的那道算术：**糖异生的十个酶促反应里有七个是糖酵解反应的逆反应，而三个不可能是**，因为**它们在细胞里放能放得太多**——**TABLE 14-2 把每一步的数字都给了出来**。随后是三个绕行。**第一个，丙酮酸 → PEP，要穿过线粒体**：**pyruvate carboxylase 是个 biotin 酶**，**花掉 ATP** 生成 **oxaloacetate**；bicarbonate 先被活化成 **carboxyphosphate**、再成为 **carboxybiotin**，由**一条长长的 biotinyl-Lys 臂在两个位点之间搬运**；**acetyl-CoA 是它的正性效应物**——**所以有脂肪可烧时，这条通路就被打开**。**oxaloacetate 没有转运体**，于是**被还原成 malate 运出去、再在胞质里氧化回来**，而这**顺带交付了这条通路所需的胞质 NADH**；然后 **PEP carboxykinase 花掉一个 GTP，把刚加上去的那个 CO2 又拿掉**。**当乳酸是前体时占主导的第二条路线**，改用**线粒体型的 PEP carboxykinase 同工酶**。**第二和第三个绕行是磷酸酶做的简单水解**：**FBPase-1** 与 **glucose 6-phosphatase**，**后者被限制在肝、肾和肠的内质网里**——**这正是只有这几个器官能供应血糖的原因**。接着把账算总：**每个葡萄糖 4 个 ATP、2 个 GTP、2 个 NADH**，**对上糖酵解回收的 2 个 ATP**；**这笔开销买到的是两个方向上的不可逆性**。**凡是能被转化成丙酮酸或柠檬酸循环中间物的东西都是底物**，**于是二十个氨基酸里有十八个是生糖的**，**只有 leucine 和 lysine 不是**。最后是界限：**哺乳动物身上不存在脂肪酸到葡萄糖的净转化**，因为**大多数脂肪酸的分解只产生 acetyl-CoA**，而 **pyruvate dehydrogenase 的反应不可逆**。**植物、酵母和许多细菌靠乙醛酸循环绕开了这一点。** **哺乳动物仍然可以用三酰甘油释放出来的甘油**；而**缺乏 glycerol kinase 的脂肪细胞**，跑的是这条通路的一个截短版本，叫做 **glyceroneogenesis**。"
    },
    points: [
      {
        cz: "proč dráha vůbec existuje — mozek si denně vyžádá asi 120 g glukosy",
        en: "START WITH THE DEMAND, BECAUSE IT IS A NUMBER AND IT MAKES THE REST INEVITABLE. Some tissues depend almost completely on glucose for their metabolic energy: for the human brain and nervous system, as well as the erythrocytes, testes, renal medulla and embryonic tissues, blood glucose is the sole or major fuel source. And the brain alone “ requires about 120 g of glucose each day ” — more than half of all the glucose stored as glycogen in muscle and liver put together (A p.533). Read the consequence rather than the number: the store is smaller than two days of one organ's demand. So between meals, during longer fasts, or after vigorous exercise, glycogen is depleted, and for those times organisms need a method of synthesising glucose from noncarbohydrate precursors. That method is gluconeogenesis, literally new formation of sugar, which converts pyruvate and related three- and four-carbon compounds to glucose. It occurs in all animals, plants, fungi and microorganisms, and the reactions are essentially the same in all tissues and all species — what differs between them is the metabolic context and the regulation, which is why the section then narrows to the mammalian liver.",
        cn: "**从「需求」开始讲，因为那是一个数字，而这个数字让后面的一切都变得不可避免。** 有些组织**几乎完全依赖葡萄糖**供能：对**人的脑和神经系统**，以及**红细胞、睾丸、肾髓质和胚胎组织**来说，**血糖是唯一或主要的燃料来源**。而**单是脑，就「每天需要约 120 克葡萄糖」**——**比肌肉和肝里以糖原形式储存的全部葡萄糖加起来的一半还多**（A 第 533 页）。**别只记数字，读它的后果**：**整个储备，还不够一个器官两天的用量**。所以**两餐之间、较长时间禁食、或剧烈运动之后，糖原会被耗尽**；为了这些时刻，生物需要一套**用非碳水前体合成葡萄糖**的办法。这套办法就是 **gluconeogenesis**——字面意思就是「**糖的新生成**」——它把**丙酮酸以及相关的三碳和四碳化合物**变成葡萄糖。**它存在于所有动物、植物、真菌和微生物中**，而且**在所有组织、所有物种里反应基本相同**——**不同的是代谢背景和调控方式**，这也正是本节随后把镜头收窄到**哺乳动物肝**的原因。"
      },
      {
        cz: "kde probíhá a odkud jsou substráty — játra, ledvinová kůra, střevní epitel; Coriho cyklus je pojmenován",
        en: "THE TISSUE LIST AND THE SUBSTRATE LIST ARE BOTH SHORTER THAN STUDENTS EXPECT, AND ONE NAME HERE IS ONE THE CZECH BOOK DELIBERATELY LEAVES OUT. In mammals gluconeogenesis takes place mainly in the liver, and to a lesser extent in the renal cortex and in the epithelial cells that line the small intestine; the glucose produced passes into the blood to supply other tissues. The important precursors in animals are three-carbon compounds — lactate, pyruvate and glycerol — as well as certain amino acids (A p.533). Now the loop: after vigorous exercise, lactate produced by anaerobic glycolysis in skeletal muscle returns to the liver and is converted to glucose, which moves back to muscle and is converted to glycogen, “ a circuit called the Cori cycle ” . Czech node 7-9 describes exactly this circuit — muscle lacks the main gluconeogenic enzymes, so its lactate goes to the liver by blood and the glucose comes back the same way — and its own coverage note records that the book never uses the name. Here the name is printed, which matters because an examiner is more likely to say Cori cycle than to describe it. Outside animals the same pathway serves other ends: in plant seedlings stored fats and proteins are converted through gluconeogenesis into sucrose for transport, and in many microorganisms it starts from two- and three-carbon compounds such as acetate, lactate and propionate in the growth medium.",
        cn: "**组织清单和底物清单都比学生预期的短，而这里有一个名字，正是捷克教材故意不给的那个。** 在哺乳动物中，糖异生**主要发生在肝**，**肾皮质**和**小肠上皮细胞**里也有一些；**产生的葡萄糖进入血液供应其他组织**。动物体内**重要的前体是三碳化合物**——**乳酸、丙酮酸和甘油**——**以及某些氨基酸**（A 第 533 页）。**现在看那个环路**：剧烈运动之后，**骨骼肌里无氧糖酵解产生的乳酸回到肝、被转化成葡萄糖，葡萄糖再回到肌肉、被转化成糖原**——**「一个叫做 Cori 循环的回路」**。捷克节点 `7-9` **描述的正是这个回路**——肌肉缺乏糖异生的主要酶，所以乳酸经血流去肝、葡萄糖经血流回来——**而它自己的 coverageNote 明确记下：教材从未用过这个名字**。**这里名字被印出来了**，这一点很实在：**考官更可能说「Cori cycle」，而不是把这个过程描述一遍**。在动物之外，同一条通路服务于别的目的：**植物幼苗**把储存的**脂肪和蛋白**经由糖异生转化成**蔗糖**以便运输；**许多微生物**则从培养基里的**乙酸、乳酸、丙酸**这类二碳、三碳化合物开始跑这条路。"
      },
      {
        cz: "TABULKA 14-2 — kde捷克 kniha tvrdí, Lehninger měří: tři reakce s velkou zápornou ΔG",
        en: "THIS IS THE POINT WHERE LEHNINGER GIVES EVIDENCE FOR SOMETHING THE CZECH BOOK ONLY ASSERTS, AND IT IS WORTH DWELLING ON. Gluconeogenesis and glycolysis “ are not identical pathways running in opposite directions ” , although they share several steps: 7 of the 10 enzymatic reactions of gluconeogenesis are the reverse of glycolytic reactions. Three reactions of glycolysis are essentially irreversible in vivo and cannot be used — the conversion of glucose to glucose 6-phosphate by hexokinase, the phosphorylation of fructose 6-phosphate to fructose 1,6-bisphosphate by PFK-1, and the conversion of PEP to pyruvate by pyruvate kinase. In cells, these three reactions are characterised by a large negative free-energy change, whereas the other glycolytic reactions have a free-energy change near zero (A p.534). TABLE 14-2 puts numbers on all ten, measured in erythrocytes at pH 7 (A p.535): hexokinase, standard −16.7 kJ/mol and actual −33.4; PFK-1, standard −14.2 and actual −22.2; pyruvate kinase, standard −31.4 and actual −16.7. Every other step's actual value falls between −6 and +25, that is, near zero. Read the table the way it is meant to be read: the standard values and the cellular values do not even rank the steps the same way — the aldolase reaction has a standard free-energy change of +23.8 kJ/mol, the largest positive number in the table, and yet in the cell it runs at −6 to 0. So it is the CELLULAR column, not the standard column, that identifies the three bypasses. Czech node 7-9 states the conclusion correctly and gives one enzyme, pyruvate kinase; the table is where the claim can be checked, and where the other two come from.",
        cn: "**这里就是「捷克教材只下断言、Lehninger 给出证据」的那个点，值得多停一会儿。** 糖异生与糖酵解**「不是同一条通路朝相反方向跑」**，尽管它们共用好几步：**糖异生的十个酶促反应里，有七个是糖酵解反应的逆反应**。**糖酵解中有三个反应在体内本质上不可逆、无法被使用**——**hexokinase 把葡萄糖变成 glucose 6-phosphate**、**PFK-1 把 fructose 6-phosphate 磷酸化成 fructose 1,6-bisphosphate**、**pyruvate kinase 把 PEP 变成丙酮酸**。**在细胞里，这三个反应的特征是很大的负自由能变化**，**而其余的糖酵解反应自由能变化接近零**（A 第 534 页）。**TABLE 14-2 给出了全部十步的数字**，测的是**红细胞、pH 7** 的条件（A 第 535 页）：**hexokinase 标准值 −16.7 kJ/mol、实际值 −33.4**；**PFK-1 标准 −14.2、实际 −22.2**；**pyruvate kinase 标准 −31.4、实际 −16.7**。**其余每一步的实际值都落在 −6 到 +25 之间，也就是接近零。** **按它本来的读法去读这张表**：**标准值和细胞值甚至连排序都不一样**——**aldolase 那一步的标准自由能变化是 +23.8 kJ/mol，是全表最大的正数**，**可它在细胞里跑的是 −6 到 0**。**所以真正认出那三个绕行的，是「细胞」那一列，不是「标准」那一列。** 捷克节点 `7-9` **结论说对了，并给了其中一个酶：pyruvate kinase**；**而这张表才是那个断言可以被核对的地方，另外两个也从这里来。**"
      },
      {
        cz: "první obchvat, krok 1 — pyruvátkarboxylasa: mitochondriální, biotin, ATP, aktivace CO2",
        en: "BYPASS ONE IS THE COMPLICATED ONE, AND IT IS COMPLICATED FOR A REASON WORTH STATING BEFORE THE MECHANISM. The conversion of pyruvate to PEP cannot occur by simple reversal of the pyruvate kinase reaction, so “ the phosphorylation of pyruvate is achieved by a roundabout sequence of reactions ” that in eukaryotes requires enzymes in BOTH the cytosol and mitochondria (A p.534). Pyruvate is first transported from the cytosol into mitochondria, or generated inside them from alanine by transamination. Then pyruvate carboxylase, “ a mitochondrial enzyme that requires the coenzyme biotin ” , converts pyruvate to oxaloacetate: pyruvate plus bicarbonate plus ATP gives oxaloacetate plus ADP plus phosphate. The carboxylation involves biotin as a carrier of ACTIVATED bicarbonate, and the activation is a two-step chemistry worth memorising: bicarbonate “ is phosphorylated by ATP to form a mixed anhydride ” , a carboxyphosphate, and then biotin displaces the phosphate in the formation of carboxybiotin (A p.534). FIGURE 14-17 shows the architecture: biotin is covalently attached to the enzyme through an amide linkage to the epsilon-amino group of a Lys residue, forming a biotinyl-enzyme, and the reaction takes place in two phases at two different sites, with “ the long biotinyl-Lys arm ” carrying the substrate from one to the other (A p.535). Site 1 converts bicarbonate to CO2 at the expense of ATP and loads it onto biotin; site 2 delivers that CO2 to pyruvate. So the ATP is not spent on the bond that forms — it is spent on making the CO2 carriable.",
        cn: "**绕行一是复杂的那个，而它复杂是有理由的，这个理由值得在讲机制之前先说。** 丙酮酸变 PEP **不能靠简单逆转 pyruvate kinase 的反应**，所以**「丙酮酸的磷酸化是通过一串绕远路的反应完成的」**——在真核生物中，这串反应**同时需要胞质和线粒体里的酶**（A 第 534 页）。**丙酮酸先从胞质被转运进线粒体**，**或者在线粒体内由 alanine 经转氨作用生成**。然后 **pyruvate carboxylase**——**「一个需要辅酶 biotin 的线粒体酶」**——把丙酮酸变成 **oxaloacetate**：**丙酮酸 + bicarbonate + ATP → oxaloacetate + ADP + Pi**。这个羧化反应**用 biotin 作为「活化了的」bicarbonate 的载体**，而**这个活化是值得背下来的两步化学**：bicarbonate **「被 ATP 磷酸化，形成一个混合酸酐」**——即 **carboxyphosphate**——**然后 biotin 把那个磷酸顶掉，形成 carboxybiotin**（A 第 534 页）。**FIGURE 14-17 给出了构造**：**biotin 通过酰胺键共价连在一个 Lys 残基的 ε-氨基上**，形成 **biotinyl-enzyme**；反应**分两相、在两个不同的位点上进行**，由**「那条长长的 biotinyl-Lys 臂」**把底物从一个位点带到另一个位点（A 第 535 页）。**位点 1 花掉 ATP 把 bicarbonate 变成 CO2 并装到 biotin 上；位点 2 把这个 CO2 交给丙酮酸。** **所以那个 ATP 并不是花在最终形成的那根键上——它花在「把 CO2 变得可搬运」这件事上。**"
      },
      {
        cz: "acetyl-CoA jako pozitivní efektor — tuk hlasuje o glukose už tady",
        en: "ONE SENTENCE IN THIS SUBSECTION IS PURE REGULATION, AND IT IS THE HOOK BETWEEN THIS NODE AND L-14-5-1. “ Pyruvate carboxylase is the first regulatory enzyme in the gluconeogenic pathway ” , requiring acetyl-CoA as a POSITIVE effector. Acetyl-CoA is produced by fatty acid oxidation, and its accumulation signals the availability of fatty acids as fuel (A p.535). Read what that means physiologically: the cell does not decide to make glucose because glucose is scarce — it decides because FAT IS AVAILABLE to burn instead. The signal is not a shortage of the product, it is an abundance of the alternative fuel. Section 14.5 completes the picture by adding that the same acetyl-CoA is a NEGATIVE modulator of pyruvate dehydrogenase, so one metabolite pushes pyruvate away from acetyl-CoA and towards oxaloacetate at the same moment. The other forward reference the section makes here is anaplerotic: the pyruvate carboxylase reaction can replenish intermediates in the citric acid cycle, which is chapter 16's topic. Keep the two roles distinct — the same enzyme, the same reaction, but in one case the oxaloacetate is drawn off towards glucose and in the other it stays in the cycle.",
        cn: "**这一小节里有一句话是纯粹的调控，而它正是本节点与 L-14-5-1 之间的挂钩。** **「Pyruvate carboxylase 是糖异生通路上第一个调节酶」**，**它需要 acetyl-CoA 作为正性效应物**。**acetyl-CoA 由脂肪酸氧化产生，它的积累标志着「有脂肪酸可以当燃料」**（A 第 535 页）。**读出它在生理上的意思**：**细胞并不是因为「葡萄糖少了」才决定造葡萄糖——它是因为「有脂肪可以烧」才决定的。** **信号不是产物的短缺，而是替代燃料的充裕。** **14.5 节补完了这幅图**：**同一个 acetyl-CoA 又是 pyruvate dehydrogenase 的负性调节物**——**所以同一个代谢物在同一瞬间，把丙酮酸从 acetyl-CoA 那边推开、推向 oxaloacetate**。本节在这里给的另一个前瞻是**回补（anaplerotic）**的：**pyruvate carboxylase 的反应可以补充柠檬酸循环的中间物**，那是第 16 章的题目。**把这两个角色分清楚**——**同一个酶、同一个反应**，但**一种情况下 oxaloacetate 被抽走去造葡萄糖，另一种情况下它留在循环里**。"
      },
      {
        cz: "první obchvat, krok 2 — malát ven, PEP-karboxykinasa a GTP; a proč ta oklika přes mitochondrii dává smysl",
        en: "NOW THE PART THAT LOOKS LIKE POINTLESS DETOUR AND IS NOT, WHICH IS EXACTLY THE KIND OF THING AN EXAMINER ASKS. “ Because the mitochondrial membrane has no transporter for oxaloacetate ” , oxaloacetate must be reduced to malate by mitochondrial malate dehydrogenase at the expense of NADH before export. The standard free-energy change of that reduction is quite high, but under physiological conditions — including a very low concentration of oxaloacetate — the actual change is about zero and the reaction is readily reversible. Malate leaves through a specific transporter in the inner membrane and is reoxidised in the cytosol, producing cytosolic NADH. The oxaloacetate is then converted to PEP by PEP carboxykinase, a magnesium-dependent reaction that “ requires GTP as the phosphoryl group donor ” , releasing the CO2 again (A p.535). Then the payoff sentence: “ There is a logic to the route of these reactions through the mitochondrion. ” The cytosolic NADH to NAD+ ratio is several orders of magnitude LOWER than the mitochondrial one, and gluconeogenesis CONSUMES cytosolic NADH further up the pathway, at the conversion of 1,3-bisphosphoglycerate to glyceraldehyde 3-phosphate. Transporting malate out and reconverting it there “ effectively moves reducing equivalents to the cytosol ” , where they are scarce (A p.536). So the detour is not a detour at all: it is a reducing-equivalent shuttle that happens to also carry the carbon.",
        cn: "**接下来是那个「看着像多此一举、其实不是」的部分——而这恰恰是考官爱问的那类东西。** **「因为线粒体膜上没有 oxaloacetate 的转运体」**，oxaloacetate 在被运出去之前**必须先被线粒体的 malate dehydrogenase 消耗 NADH 还原成 malate**。这一步还原的**标准自由能变化相当高**，但**在生理条件下**——**包括 oxaloacetate 浓度非常低这一条**——**实际的变化约等于零，反应可以轻松地双向进行**。**malate 经内膜上一个特异的转运体离开**，**在胞质里被重新氧化，产生胞质 NADH**。随后 oxaloacetate 由 **PEP carboxykinase** 转化成 **PEP**，这是一个**依赖镁离子**的反应，**「以 GTP 作为磷酸基供体」**，并**把那个 CO2 再释放出去**（A 第 535 页）。然后是那句点题的话：**「这些反应绕经线粒体的路线，是有其道理的。」** **胞质中 NADH 与 NAD+ 之比，比线粒体里低好几个数量级**；**而糖异生在通路上游要消耗胞质 NADH**——就在 **1,3-bisphosphoglycerate 变成 glyceraldehyde 3-phosphate** 那一步。**把 malate 运出去、在那里转化回来，「实际上就是把还原当量搬到了胞质」**，**而那里正缺还原当量**（A 第 536 页）。**所以这根本不是什么绕远路：它是一条还原当量的穿梭线，只不过顺便把碳也带过去了。**"
      },
      {
        cz: "součet obchvatu 1 — 2 makroergické fosfáty, ΔG'° 0,9 ale skutečná ΔG −25 kJ/mol; a stejný CO2 přidán i odebrán",
        en: "TWO NUMBERS AND ONE OBSERVATION FINISH BYPASS ONE, AND THE OBSERVATION IS THE ONE WORTH REPEATING IN AN ORAL. Summing the four reactions gives pyruvate plus ATP plus GTP plus bicarbonate to PEP plus ADP plus GDP plus phosphate plus CO2, with a standard free-energy change of 0.9 kJ/mol. “ Two high-energy phosphate equivalents ” , one from ATP and one from GTP, “ each yielding about 50 kJ/mol under cellular conditions ” , must be expended to phosphorylate one molecule of pyruvate to PEP — while glycolysis running the other way generates only one ATP from that same step. Although the standard change is a nearly flat 0.9 kJ/mol, the ACTUAL free-energy change calculated from measured cellular concentrations is very strongly negative, about −25 kJ/mol, because PEP is consumed so readily in other reactions that its concentration stays low; the reaction is therefore effectively irreversible in the cell (A p.536). Now the observation: “ the CO2 added to pyruvate in the pyruvate carboxylase step ” is the SAME MOLECULE that is lost in the PEP carboxykinase reaction. That carboxylation-decarboxylation sequence “ represents a way of activating pyruvate ” , in that the decarboxylation of oxaloacetate is what facilitates PEP formation. The book flags that the identical trick is used in chapter 21 to activate acetyl-CoA for fatty acid biosynthesis, so this is a pattern to recognise rather than a one-off oddity. A second route exists too: when lactate is the precursor, its oxidation to pyruvate already yields cytosolic NADH, so no malate export is needed, and a MITOCHONDRIAL isozyme of PEP carboxykinase — a separate nuclear gene — makes PEP inside the organelle for export (A pp.536-537).",
        cn: "**两个数字和一个观察，把绕行一收尾——而那个观察，是口试里值得复述的那一句。** 把四个反应加起来得到：**丙酮酸 + ATP + GTP + bicarbonate → PEP + ADP + GDP + Pi + CO2**，**标准自由能变化 0.9 kJ/mol**。**「两个高能磷酸当量」**，一个来自 ATP、一个来自 GTP，**「在细胞条件下每个约值 50 kJ/mol」**，**必须被花掉，才能把一个丙酮酸磷酸化成 PEP**——**而糖酵解朝另一个方向跑时，同一步只生成一个 ATP**。虽然**标准变化只有几乎持平的 0.9 kJ/mol**，但**由实测胞内浓度算出来的实际自由能变化是很强的负值，约 −25 kJ/mol**，因为 **PEP 一生成就被其他反应迅速消耗、浓度始终很低**；**所以这个反应在细胞里实际上不可逆**（A 第 536 页）。**现在说那个观察**：**「在 pyruvate carboxylase 那一步加到丙酮酸上的 CO2」**，**正是在 PEP carboxykinase 那一步被丢掉的同一个分子**。这个**羧化—脱羧序列「代表了一种活化丙酮酸的方式」**——**因为正是 oxaloacetate 的脱羧，使 PEP 的生成变得容易**。书特别点出，**第 21 章活化 acetyl-CoA 去做脂肪酸合成时，用的是一模一样的招数**——**所以这是一个要认出来的「模式」，不是一次性的怪事**。另外还有**第二条路线**：**当乳酸是前体时**，它氧化成丙酮酸**本身就产生胞质 NADH**，**于是不需要 malate 输出**；此时由**线粒体型的 PEP carboxykinase 同工酶**——**由另一个核基因编码**——**在细胞器内部制造 PEP 再运出去**（A 第 536–537 页）。"
      },
      {
        cz: "obchvaty 2 a 3 — TADY DOSTÁVAJÍ JMÉNO: FBPase-1 a glukosa-6-fosfatasa, obojí prostá hydrolýza",
        en: "THIS IS THE POINT OF THE WHOLE NODE FOR A READER COMING FROM THE CZECH BOOK, SO IT IS WORTH SAYING PLAINLY. Czech node 7-9 describes both closing steps correctly and records, in its own honesty note, that the book “ does NOT name an enzyme for either hydrolysis ” — it uses only the passive voice. Here are the two names, with what they do and why the reaction is a hydrolysis rather than a reversed kinase. The second glycolytic reaction that cannot participate is PFK-1's; because it is highly exergonic and irreversible in intact cells, the generation of fructose 6-phosphate from fructose 1,6-bisphosphate is catalysed instead by a different enzyme, magnesium-dependent FRUCTOSE 1,6-BISPHOSPHATASE (FBPase-1), which promotes “ the essentially irreversible hydrolysis of the C-1 phosphate ” — explicitly “ not phosphoryl group transfer to ADP ” — with a standard free-energy change of −16.3 kJ/mol. The book adds the naming rule at once: FBPase-1 is so named to distinguish it from FBPase-2, the regulatory enzyme of section 14.5. The third bypass is the final reaction of the pathway, and reversing hexokinase would mean transferring a phosphoryl group from glucose 6-phosphate to ADP to make ATP, which is energetically unfavourable. The reaction catalysed by GLUCOSE 6-PHOSPHATASE “ does not require synthesis of ATP; it is a simple hydrolysis of a phosphate ester ” , standard free-energy change −13.8 kJ/mol (A p.537). Note what the two hydrolyses cost the cell: the phosphate that the kinase paid an ATP to attach is simply thrown away as inorganic phosphate. That waste IS the price of directionality, and it is the same argument as the free-energy totals two points below.",
        cn: "**对一个从捷克教材过来的读者来说，这一点就是整个节点存在的理由，所以要说得直白。** 捷克节点 `7-9` **把两个收尾步骤都描述对了**，并在它自己的诚实说明里记下：教材**「没有给这两步水解中的任何一个命名」**——**它只用被动语态**。**下面就是这两个名字**，连同它们做什么、以及**为什么这个反应是水解而不是「反着跑的激酶」**。**第二个不能参与糖异生的糖酵解反应是 PFK-1 那一步**；因为它**高度放能、在完整细胞中不可逆**，由 fructose 1,6-bisphosphate 生成 fructose 6-phosphate 这件事**改由另一个酶催化**：**依赖镁的 FRUCTOSE 1,6-BISPHOSPHATASE（FBPase-1）**，它促成的是**「C-1 上那个磷酸的、本质上不可逆的水解」**——**明确写着「不是把磷酸基转移给 ADP」**——**标准自由能变化 −16.3 kJ/mol**。书还**当场把命名规则也给了**：**FBPase-1 之所以这样命名，是为了与 14.5 节里那个起调控作用的 FBPase-2 区分开**。**第三个绕行是这条通路的最后一个反应**；**逆转 hexokinase 意味着要把一个磷酸基从 glucose 6-phosphate 转给 ADP 去生成 ATP，而这在能量上是不利的**。由 **GLUCOSE 6-PHOSPHATASE** 催化的反应**「不需要合成 ATP；它就是一个磷酸酯的简单水解」**，**标准自由能变化 −13.8 kJ/mol**（A 第 537 页）。**注意这两次水解让细胞付出了什么**：**激酶当初花了一个 ATP 才装上去的那个磷酸，现在被当作无机磷酸直接扔掉。** **这份浪费，就是「方向性」的价格**——**这和下面第二条里的自由能总账，是同一个论证。**"
      },
      {
        cz: "glukosa-6-fosfatasa sedí v lumen ER — a jen v játrech, ledvině a střevě; to rozhoduje, kdo krmí krev",
        en: "ONE SENTENCE ABOUT WHERE THAT ENZYME SITS ANSWERS SEVERAL EXAM QUESTIONS AT ONCE, INCLUDING ONE ABOUT A COMPLETELY DIFFERENT PATHWAY. Glucose 6-phosphatase is a magnesium-activated “ membrane protein in the lumen of the endoplasmic reticulum ” of hepatocytes, renal cells and the epithelial cells of the small intestine — “ but not in other tissues, which are therefore unable to supply glucose to the blood ” (A p.537). Two consequences, and the second is the one usually missed. First, the organ list for gluconeogenesis is not an arbitrary fact to memorise: liver, kidney and intestine can export glucose because they alone can take the phosphate off. Second, the book explains why it would be a bad idea for other tissues to have it: “ If other tissues had glucose 6-phosphatase, this enzyme's activity would hydrolyze the glucose 6-phosphate needed within those tissues for glycolysis. ” The phosphate group is what keeps glucose inside a cell, so a tissue with this enzyme would leak its own fuel. Now carry the fact across to glycogen, because this is where it earns its keep: muscle stores glycogen and can break it down, but muscle has no glucose 6-phosphatase, so muscle glycogen can never raise blood glucose — it can only fuel the muscle itself. Any question of the form which hormone or which store raises blood sugar is decided by this one localisation.",
        cn: "**关于「这个酶待在哪里」的一句话，一次回答了好几道考题，其中一道还属于完全另一条通路。** Glucose 6-phosphatase 是一个**镁激活的**、**「位于内质网腔内的膜蛋白」**，存在于**肝细胞、肾细胞和小肠上皮细胞**中——**「但不存在于其他组织中，因此那些组织无法向血液供应葡萄糖」**（A 第 537 页）。**两个后果，而第二个通常会被漏掉。** **第一**，糖异生的器官清单**不是一条要死记的任意事实**：**肝、肾、肠之所以能输出葡萄糖，是因为只有它们能把那个磷酸拿掉。** **第二**，书还解释了**为什么让别的组织拥有它会是个坏主意**：**「如果其他组织也有 glucose 6-phosphatase，这个酶的活性会把那些组织内部糖酵解所需的 glucose 6-phosphate 水解掉。」** **那个磷酸基正是把葡萄糖扣在细胞内的东西**——**所以带着这个酶的组织，会漏掉自己的燃料**。**现在把这个事实搬到糖原上去，因为那才是它真正兑现价值的地方**：**肌肉储存糖原、也能分解糖原，但肌肉没有 glucose 6-phosphatase**，**所以肌糖原永远升不了血糖**——**它只能给肌肉自己供能**。**凡是「哪个激素／哪个储备能升高血糖」这一类问题，都由这一条定位决定。**"
      },
      {
        cz: "cena — 4 ATP + 2 GTP + 2 NADH; a proč se to vyplatí (ΔG glykolýzy −63, glukoneogeneze −16 kJ/mol)",
        en: "THE COST IS A SINGLE EQUATION, AND THE ARGUMENT ABOUT WHY IT IS WORTH PAYING IS THE MOST QUOTABLE THING IN THE SECTION. The sum of the biosynthetic reactions from pyruvate to free blood glucose is: two pyruvate plus four ATP plus two GTP plus two NADH plus four water gives one glucose plus four ADP plus two GDP plus six phosphate plus two NAD+ (A p.537). “ For each molecule of glucose formed from pyruvate, six high-energy phosphate groups are required ” — four from ATP and two from GTP — plus two NADH for the reduction of two molecules of 1,3-bisphosphoglycerate. Set that against glycolysis in the forward direction, which yields only two ATP per glucose, and the round trip is a net loss of four high-energy phosphates. Why pay it? “ Much of this high energy cost is necessary to ensure the irreversibility of gluconeogenesis. ” The numbers make it concrete: under intracellular conditions the overall free-energy change of glycolysis is at least −63 kJ/mol, and under the same conditions the overall change for gluconeogenesis is −16 kJ/mol, so BOTH are essentially irreversible processes in cells (A p.538). That is the sentence to keep — two opposite pathways, both thermodynamically downhill, which is only possible because they are not the same set of reactions. A second reason follows: if pyruvate were simply excreted, its considerable potential for ATP production by complete aerobic oxidation would be lost, and that is more than 10 ATP per pyruvate. And here is a cross-check worth doing out loud: Czech node 7-9 says one triose phosphate costs THREE high-energy phosphates, one for carboxybiotin, one for the phosphorylation of oxaloacetate, one for the reduction of 3-phosphoglycerate. Two trioses per glucose gives six. The two books count differently and agree.",
        cn: "**代价就是一个方程，而「为什么这笔钱值得花」的那段论证，是本节最值得引用的东西。** 从丙酮酸到游离血糖的全部生物合成反应之和是：**2 丙酮酸 + 4 ATP + 2 GTP + 2 NADH + 4 H2O → 1 葡萄糖 + 4 ADP + 2 GDP + 6 Pi + 2 NAD+**（A 第 537 页）。**「每由丙酮酸生成一分子葡萄糖，需要六个高能磷酸基团」**——**四个来自 ATP，两个来自 GTP**——**另加两个 NADH**，用于还原两分子 1,3-bisphosphoglycerate。**把它和正向的糖酵解放在一起**：糖酵解**每个葡萄糖只产出 2 个 ATP**，**所以来回一趟净亏四个高能磷酸**。**为什么要付这笔钱？** **「这份高能量代价的很大一部分，是为了保证糖异生的不可逆性。」** **数字让它变得具体**：**在胞内条件下，糖酵解整体的自由能变化至少是 −63 kJ/mol**，**在同样条件下糖异生整体是 −16 kJ/mol**，**所以两者在细胞里都是本质上不可逆的过程**（A 第 538 页）。**这句话要留住**——**两条方向相反的通路，热力学上都是下坡**，**而这之所以可能，正是因为它们不是同一组反应**。**接着是第二个理由**：**如果丙酮酸干脆被排掉，它经完全有氧氧化本可产出的 ATP 就全没了——而那超过每个丙酮酸 10 个 ATP**。**这里还有一个值得当场做一遍的对账**：捷克节点 `7-9` 说**每合成一个丙糖磷酸要花三个高能磷酸**——一个给 carboxybiotin，一个给 oxaloacetate 的磷酸化，一个给 3-磷酸甘油酸的还原。**一个葡萄糖要两个丙糖磷酸，3 × 2 = 6。** **两本书用不同的数法，数出了同一个数。**"
      },
      {
        cz: "co všechno je substrát — 18 z 20 aminokyselin je glukogenních; jen leucin a lysin ne",
        en: "THE SUBSTRATE LIST WIDENS AT THIS POINT, AND IT WIDENS TO ALMOST EVERYTHING, WHICH IS THE USEFUL FORM OF THE FACT. The pathway allows net synthesis of glucose not only from pyruvate but also from the four-, five- and six-carbon intermediates of the citric acid cycle, since those can be oxidised to oxaloacetate. Some or all of the carbon atoms of most amino acids derived from proteins are ultimately catabolised to pyruvate or to citric acid cycle intermediates, so such amino acids can undergo net conversion to glucose and are said to be GLUCOGENIC. TABLE 14-4 groups them by their site of entry — pyruvate, alpha-ketoglutarate, succinyl-CoA, fumarate, oxaloacetate — and its note carries the fact worth memorising in its negative form: “ Of the 20 common amino acids, only leucine and lysine are unable to furnish carbon for net glucose synthesis. ” Eighteen of twenty is a much more useful thing to remember than a list of eighteen names. Two are singled out for a physiological reason: alanine and glutamine are the principal molecules that transport amino groups from extrahepatic tissues to the liver, and after their amino groups are removed in liver mitochondria the carbon skeletons remaining — pyruvate and alpha-ketoglutarate respectively — are readily funnelled into gluconeogenesis (A p.538). So the same two molecules that carry nitrogen to the liver for disposal deliver carbon for glucose while they are there.",
        cn: "**底物清单在这里变宽了，而且宽到几乎无所不包——这正是这个事实最有用的形态。** 这条通路允许**由丙酮酸净合成葡萄糖，也允许由柠檬酸循环中的四碳、五碳和六碳中间物净合成葡萄糖**，因为**那些中间物可以被氧化成 oxaloacetate**。**来自蛋白质的大多数氨基酸，其部分或全部碳原子最终都会被分解成丙酮酸或柠檬酸循环的中间物**，所以这些氨基酸**能够净转化为葡萄糖，被称为「生糖的（glucogenic）」**。**TABLE 14-4 按它们的入口位点分组**——**丙酮酸、α-酮戊二酸、琥珀酰-CoA、延胡索酸、草酰乙酸**——而它的注释把最值得记的事实**以否定的形式**给了出来：**「在 20 种常见氨基酸中，只有 leucine 和 lysine 不能为葡萄糖的净合成提供碳。」** **「二十里有十八」比背十八个名字有用得多。** 有**两个氨基酸因为生理上的理由被单独点名**：**alanine 和 glutamine 是把氨基从肝外组织运到肝的主要分子**；**在肝线粒体里脱去氨基之后，剩下的碳骨架**——**分别是丙酮酸和 α-酮戊二酸**——**很容易被送进糖异生**（A 第 538 页）。**所以同样这两个分子，一边把氮运到肝里去处理，一边顺手把造葡萄糖的碳也送到了。**"
      },
      {
        cz: "proč z mastných kyselin glukosa nevznikne — a co přesně znamená slovo 'net'",
        en: "THIS IS A CLASSIC EXAM QUESTION AND THE ANSWER HAS THREE CLAUSES, ALL OF WHICH ARE NEEDED. “ No net conversion of fatty acids to glucose occurs in mammals. ” The reason is a chain: the catabolism of most fatty acids yields ONLY acetyl-CoA; mammals cannot use acetyl-CoA as a precursor of glucose “ because the pyruvate dehydrogenase reaction is irreversible ” ; and cells have no other pathway to convert acetyl-CoA to pyruvate (A p.538). Say all three, because each blocks a different escape route — the first rules out other products, the second rules out running the obvious step backwards, the third rules out a detour. Now the contrast, which is what makes it memorable: plants, yeast and many bacteria DO have a pathway for converting acetyl-CoA to oxaloacetate, the glyoxylate cycle, so those organisms CAN use fatty acids as starting material for gluconeogenesis. The book gives the case where it matters — a germinating seedling, before leaves develop and photosynthesis can supply energy, relies on stored seed oils for both energy production and cell wall biosynthesis. Two qualifications keep the answer honest. Mammals cannot make carbohydrate from fatty acids, but they CAN use the small amount of glycerol produced from the breakdown of triacylglycerols: glycerol kinase phosphorylates it and oxidation of the central carbon gives dihydroxyacetone phosphate, an intermediate of the pathway in liver. And adipocytes, which lack glycerol kinase, run a truncated version of gluconeogenesis called GLYCERONEOGENESIS — pyruvate to dihydroxyacetone phosphate by the early reactions, then reduction to glycerol 3-phosphate — because they need glycerol phosphate to build triacylglycerols.",
        cn: "**这是一道经典考题，而答案有三个分句，缺一不可。** **「哺乳动物体内不存在脂肪酸到葡萄糖的净转化。」** 理由是一条链：**大多数脂肪酸的分解只产生 acetyl-CoA**；哺乳动物**不能用 acetyl-CoA 作为葡萄糖的前体**，**「因为 pyruvate dehydrogenase 的反应是不可逆的」**；而且**细胞没有别的通路能把 acetyl-CoA 变成丙酮酸**（A 第 538 页）。**三句都要说**，因为**每一句堵住一条不同的退路**——**第一句排除了别的产物，第二句排除了把那一步倒着跑，第三句排除了绕道**。**现在讲那个对照，正是它让人记得住**：**植物、酵母和许多细菌确实有一条把 acetyl-CoA 变成 oxaloacetate 的通路——乙醛酸循环（glyoxylate cycle）**，**所以这些生物能用脂肪酸作为糖异生的起始材料**。书给了它真正要紧的场景：**一株正在萌发的幼苗，在叶子长出来、光合作用能供能之前，靠储存的种子油同时支撑产能和细胞壁的合成**。**两条限定让这个答案保持诚实。** 哺乳动物**造不出碳水**，但**能用三酰甘油分解释放出来的那一点甘油**：**glycerol kinase 把它磷酸化，中心碳原子再被氧化，就得到 dihydroxyacetone phosphate**——**肝中糖异生的一个中间物**。而**缺乏 glycerol kinase 的脂肪细胞**，跑的是这条通路的一个截短版本，叫 **GLYCERONEOGENESIS**——**先用糖异生前段的反应把丙酮酸变成 dihydroxyacetone phosphate，再把它还原成 glycerol 3-phosphate**——**因为它们需要甘油磷酸来搭三酰甘油。**"
      },
      {
        cz: "reciproční regulace, viděná z glukoneogenní strany — a kam pro celý výklad (L-14-5-1)",
        en: "SECTION 14.4 ENDS ITS OWN INTRODUCTION WITH A FORWARD POINTER, AND IT IS WORTH FOLLOWING FAR ENOUGH THAT THIS NODE STANDS ON ITS OWN. Having established that in animals both pathways “ occur largely in the cytosol ” , the book concludes that this necessitates “ their reciprocal and coordinated regulation ” , described in section 14.5 (A p.534). Here is the minimum a reader of the gluconeogenic side needs, taken from that section and no further. At the PFK-1 and FBPase-1 pair, the two enzymes “ are regulated in a coordinated and reciprocal manner ” : FBPase-1 is strongly and allosterically inhibited by AMP, so when the cell's ATP supply is low the ATP-requiring synthesis of glucose slows, while the same AMP relieves ATP's inhibition of PFK-1 (A p.542). The dominant regulator, however, is fructose 2,6-bisphosphate — a molecule that is NOT an intermediate of either pathway, so no flux runs through it and the cell can raise and lower it purely as information. It activates PFK-1 and simultaneously inhibits FBPase-1, and the load-bearing measurement is that at physiological concentrations of every substrate and effector, “ PFK-1 is virtually inactive in the absence of fructose 2,6-bisphosphate ” (A p.542). From the gluconeogenic side the reading is the mirror image: gluconeogenesis runs when fructose 2,6-bisphosphate is LOW, and glucagon lowers it, through cAMP and protein kinase A phosphorylating the bifunctional PFK-2/FBPase-2 protein — the phosphorylation “ enhances its FBPase-2 activity and inhibits its PFK-2 ” activity (A p.542). Add the branch point already met above, where acetyl-CoA activates pyruvate carboxylase, and you have the gluconeogenic switch complete: fat available, energy charge high, fructose 2,6-bisphosphate low. For the mechanism in full — hexokinase isozymes, nuclear sequestration, the numbers on the bifunctional protein, xylulose 5-phosphate and the transcriptional layer — go to L-14-5-1, which is the section written for it.",
        cn: "**14.4 节在自己的引言末尾留了一个前瞻指针，而这个指针值得跟到「让本节点能独立成立」为止。** 在确立了动物体内两条通路**「大体上都在胞质中进行」**之后，书得出结论：**这就必然要求「它们之间的互反与协同调控」**，详见 14.5 节（A 第 534 页）。**下面是一个从糖异生这一侧读的人所需要的最小限度**，取自那一节，不再多取。在 **PFK-1 与 FBPase-1 这一对**上，两个酶**「以协调而互反的方式被调控」**：**FBPase-1 被 AMP 强烈地别构抑制**，所以**当细胞的 ATP 供应低时，这个消耗 ATP 的葡萄糖合成就慢下来**；而**同一个 AMP 解除了 ATP 对 PFK-1 的抑制**（A 第 542 页）。**不过占主导的调节物是 fructose 2,6-bisphosphate**——**一个不是任何一条通路中间物的分子**，**没有任何流量经过它**，**所以细胞可以纯粹作为信息去升降它**。**它激活 PFK-1，同时抑制 FBPase-1**；而**承重的那个测量结果是**：在**所有底物和效应物都处于生理浓度**时，**「没有 fructose 2,6-bisphosphate，PFK-1 几乎是不活跃的」**（A 第 542 页）。**从糖异生这一侧读，就是镜像**：**F2,6BP 低的时候，糖异生才跑**；**而 glucagon 正是把它压低的那个信号**——经 **cAMP** 和**蛋白激酶 A** 磷酸化那个**双功能的 PFK-2/FBPase-2 蛋白**，**这次磷酸化「增强它的 FBPase-2 活性、抑制它的 PFK-2 活性」**（A 第 542 页）。**再加上上面已经见过的那个分叉点**——**acetyl-CoA 激活 pyruvate carboxylase**——**糖异生的开关就齐了：有脂肪可烧、能荷高、F2,6BP 低。** **完整的机制**——hexokinase 同工酶、核内隔离、双功能蛋白上的那些数字、xylulose 5-phosphate 以及转录那一层——**请去 L-14-5-1**，**那一节就是为它写的**。"
      }
    ],

    quiz: [
      { type: "mcq",
        q_en: "Lehninger argues that gluconeogenesis cannot simply run glycolysis backwards. What is the EVIDENCE it gives, as opposed to the assertion?",
        q_cn: "Lehninger 论证糖异生不能简单地把糖酵解倒着跑。它给出的**证据**是什么（而不只是断言）？",
        options: [
          "The three bypassed steps use different enzymes from the glycolytic ones",
          "The three bypassed reactions are catalysed in separate cell compartments",
          "TABLE 14-2 measures the cellular free-energy changes: -33.4, -22.2 and -16.7 kJ/mol",
          "Gluconeogenesis needs six high-energy phosphates while glycolysis yields only two"
        ],
        answer: 2,
        optionRefs: { 0: "7-9", 3: "7-8-1" },
        optionNotes: {
          0: { en: "True, and it is what the Czech book says — but it is the same assertion restated, not evidence for it. The measurement is the evidence.", cn: "这是对的，也正是捷克教材说的——但它只是把同一个断言换个说法，不是**证据**。证据是那组测量值。" },
          1: { en: "Only one bypass is split across compartments (pyruvate carboxylase in the matrix). The other two are not, and compartments are not the argument here.", cn: "只有一个 bypass 跨了区室（pyruvate carboxylase 在线粒体基质）。另外两个并没有，而且区室也不是这里的论据。" },
          3: { en: "That is the cost of the pathway, quoted later in this node. It explains why it is expensive, not why three steps must be bypassed.", cn: "那是这条通路的**代价**，本节点后面会引用。它解释的是为什么贵，不是为什么必须绕开三步。" }
        },
        why_en: "The seven shared reactions sit between -6 and +25 kJ/mol in the cell — near enough to zero to run either way. The three that are bypassed are measured at -33.4 (hexokinase), -22.2 (PFK-1) and -16.7 (pyruvate kinase): too far downhill to reverse. That measurement is why both directions can be irreversible at once, and it is exactly what the Czech book asserts without showing.",
        why_cn: "七个共用反应在细胞内的自由能变化落在 -6 到 +25 kJ/mol 之间——离零足够近，两个方向都能跑。被绕开的三步测出来是 -33.4（hexokinase）、-22.2（PFK-1）、-16.7（pyruvate kinase）：下坡太陡，逆不回去。正是这组测量解释了为什么两个方向可以同时都不可逆，而这恰恰是捷克教材只下断言、没有给出的东西。" },

      { type: "mcq",
        q_en: "Which enzyme does Lehninger call the FIRST regulatory enzyme of the gluconeogenic pathway, and what switches it on?",
        q_cn: "Lehninger 把哪个酶称为糖异生通路上的**第一个调节酶**？是什么把它打开？",
        options: [
          "Pyruvate carboxylase, activated by acetyl-CoA as a positive effector",
          "Fructose 1,6-bisphosphatase, released from inhibition by low F2,6BP",
          "PEP carboxykinase, activated once oxaloacetate leaves as malate",
          "Glucose 6-phosphatase, switched on inside the endoplasmic reticulum"
        ],
        answer: 0,
        optionRefs: { 1: "7-9", 3: "7-9" },
        optionNotes: {
          1: { en: "FBPase-1 is genuinely regulated by fructose 2,6-bisphosphate, but that is the chapter's LATER control point, in section 14.5 — not the first enzyme of the pathway.", cn: "FBPase-1 确实受 fructose 2,6-bisphosphate 调节，但那是本章**后面**的控制点（14.5 节），不是通路上的第一个酶。" },
          2: { en: "PEP carboxykinase acts second, on the oxaloacetate that pyruvate carboxylase made. Its substrate leaving the mitochondrion as malate is transport, not activation.", cn: "PEP carboxykinase 是第二步，作用于 pyruvate carboxylase 生成的 oxaloacetate。底物以 malate 形式离开线粒体是**转运**，不是激活。" },
          3: { en: "Glucose 6-phosphatase is the last step, not the first, and its ER location is about where the reaction happens rather than whether it is switched on.", cn: "Glucose 6-phosphatase 是**最后**一步，不是第一步；它在 ER 里这件事说的是反应发生在哪儿，不是它开没开。" }
        },
        why_en: "Acetyl-CoA is produced by fatty acid oxidation, so its accumulation is the cell's signal that fat is available as fuel — the moment at which making glucose from pyruvate is worth doing. That is why the pathway's first regulatory enzyme listens for it.",
        why_cn: "acetyl-CoA 来自脂肪酸氧化，所以它的积累就是细胞收到的信号：现在有脂肪可烧——这正是值得把 pyruvate 拿去造糖的时刻。这就是为什么通路上第一个调节酶盯着的是它。" },

      { type: "mcq",
        q_en: "Why must the oxaloacetate made inside the mitochondrion leave as malate rather than as oxaloacetate itself?",
        q_cn: "线粒体内生成的 oxaloacetate，为什么必须以 malate 的形式离开，而不是直接以 oxaloacetate 出去？",
        options: [
          "Malate carries the CO2 that the next reaction will need to release",
          "Oxaloacetate would be decarboxylated by PEP carboxykinase too early",
          "Malate is the form that pyruvate carboxylase releases from its site 2",
          "The mitochondrial inner membrane has no transporter for oxaloacetate"
        ],
        answer: 3,
        optionNotes: {
          0: { en: "The CO2 added by pyruvate carboxylase is removed again by PEP carboxykinase, but the carrier's identity is not what carries it — the transport problem is a membrane problem.", cn: "pyruvate carboxylase 加上去的 CO2 后来又被 PEP carboxykinase 拿掉，但携带者是谁并不取决于这一点——转运问题是**膜**的问题。" },
          1: { en: "PEP carboxykinase acts on oxaloacetate wherever the isozyme sits; the reason for the detour is that the molecule cannot cross, not that it would react early.", cn: "PEP carboxykinase 在哪个同工酶所在之处就作用于 oxaloacetate；绕道的原因是这个分子过不去，而不是怕它提前反应。" },
          2: { en: "Pyruvate carboxylase's two sites carry biotin and the substrate; the product it releases is oxaloacetate, and the conversion to malate is a separate reaction.", cn: "pyruvate carboxylase 的两个位点承载 biotin 和底物；它放出的产物是 oxaloacetate，转成 malate 是另一个反应。" }
        },
        why_en: "The molecule is reduced to malate, carried out, and oxidised back to oxaloacetate in the cytosol by malate dehydrogenase. The detour also moves reducing equivalents out, which the cytosolic step later needs — which is why it looks like a pointless shuttle and is not.",
        why_cn: "这个分子先被还原成 malate，运出去，再在胞质里由 malate dehydrogenase 氧化回 oxaloacetate。这趟绕行顺便把还原当量也带了出去，而胞质里后面那一步正需要它——所以它看着像多此一举，其实不是。" },

      { type: "mcq",
        q_en: "What does the location of glucose 6-phosphatase tell you, and which tissues therefore release free glucose into the blood?",
        q_cn: "glucose 6-phosphatase 的定位说明了什么？因此哪些组织能把游离葡萄糖释放进血液？",
        options: [
          "It is cytosolic, so every tissue that stores glycogen can release glucose",
          "It sits in the endoplasmic-reticulum lumen, and only liver, kidney and gut have it",
          "It is bound to the outer mitochondrial membrane in liver and in muscle alike",
          "It is a plasma-membrane enzyme, which is why the glucose appears outside"
        ],
        answer: 1,
        optionRefs: { 0: "7-11-2-1" },
        optionNotes: {
          0: { en: "Muscle stores plenty of glycogen and still cannot release glucose, precisely because it lacks this enzyme — the classic exam contrast.", cn: "肌肉储存了大量糖原却仍然放不出葡萄糖，原因正是它没有这个酶——这是最典型的考试对比。" },
          2: { en: "Nothing in the section places it on a mitochondrial membrane, and the liver/muscle difference would disappear if muscle had it too.", cn: "本节没有任何内容把它放在线粒体膜上；而且如果肌肉也有它，肝与肌肉的差别就不存在了。" },
          3: { en: "The reaction happens inside a compartment and the product is then exported; a plasma-membrane enzyme is a different mechanism and not the one described.", cn: "反应发生在一个**区室内部**，产物随后被输出；质膜酶是另一套机制，不是这里描述的那一套。" }
        },
        why_en: "Gluconeogenesis is a liver, renal-cortex and small-intestine pathway, and the last enzyme is what makes it so. Muscle runs the pathway's earlier steps but keeps its glucose 6-phosphate, because without this enzyme it has no way to take the phosphate off.",
        why_cn: "糖异生是肝、肾皮质和小肠上皮的通路，而决定这一点的正是最后这个酶。肌肉跑得了前面几步，却只能把 glucose 6-phosphate 留在自己体内——没有这个酶，它没办法把那个磷酸拿掉。" },

      { type: "short",
        q_en: "An examiner says: fatty acids are burned to acetyl-CoA, and acetyl-CoA enters the citric acid cycle which makes oxaloacetate, and oxaloacetate is a gluconeogenic precursor — so why does Lehninger say fatty acids cannot be turned into glucose?",
        q_cn: "考官问：脂肪酸烧成 acetyl-CoA，acetyl-CoA 进柠檬酸循环生成 oxaloacetate，而 oxaloacetate 又是糖异生的前体——那为什么 Lehninger 说脂肪酸变不成葡萄糖？",
        accept: ["net", "irreversible", "pyruvate dehydrogenase", "two carbons", "净", "不可逆", "丙酮酸脱氢酶"],
        answer_en: "Because the claim is about NET conversion, and the word carries the whole argument. Most fatty acids yield only acetyl-CoA on catabolism, and acetyl-CoA cannot be a precursor of glucose because the pyruvate dehydrogenase reaction is irreversible — there is no route back from acetyl-CoA to pyruvate. Acetyl-CoA entering the cycle does condense with oxaloacetate, but for every two carbons it brings in, two leave as CO2, so no oxaloacetate is gained. Individual carbon atoms from a fatty acid can end up in glucose; no NET glucose is made. The exceptions are the odd-chain fatty acids, whose propionyl-CoA is genuinely glucogenic.",
        answer_cn: "因为这句话说的是**净**转化，而全部论证都压在这个「净」字上。多数脂肪酸分解后只给出 acetyl-CoA，而 acetyl-CoA 当不了葡萄糖的前体，因为 pyruvate dehydrogenase 这一步不可逆——从 acetyl-CoA 没有路回到 pyruvate。acetyl-CoA 进入循环后确实与 oxaloacetate 缩合，但它每带进两个碳，就有两个碳以 CO2 形式离开，所以 oxaloacetate 并没有净增加。脂肪酸里个别碳原子确实可以出现在葡萄糖里，但**净**的葡萄糖一个也没造出来。例外是奇数碳脂肪酸，它们的 propionyl-CoA 是真正生糖的。" }
    ],

    oral: {
      q_en: "Take me through gluconeogenesis: why the cell needs it, where it differs from glycolysis, and what it costs.",
      q_cn: "把糖异生讲一遍：细胞为什么需要它、它与糖酵解在哪里不同、代价是多少。",
      model_en: "Gluconeogenesis exists because some tissues need glucose whatever the diet does; the brain alone takes about a hundred and twenty grams a day, which is more than the whole body stores as glycogen. It runs in liver, renal cortex and small-intestine epithelium, from pyruvate, lactate, glycerol and most amino acids. It is not glycolysis reversed. Seven of the ten reactions are the same enzymes running backwards, because in the cell their free-energy changes sit near zero, between minus six and plus twenty-five kilojoules per mole. The other three cannot be reversed, and Lehninger measures why: hexokinase at minus thirty-three point four, phosphofructokinase-one at minus twenty-two point two, pyruvate kinase at minus sixteen point seven. Each gets a bypass. The first is the elaborate one: pyruvate carboxylase, in the mitochondrial matrix, with biotin and bicarbonate, makes oxaloacetate — and that enzyme is the pathway's first regulatory step, switched on by acetyl-CoA, which is the cell's signal that fat is available to burn. Oxaloacetate cannot cross the inner membrane, so it is reduced to malate, carried out, and oxidised back in the cytosol, which conveniently exports reducing equivalents at the same time. Then PEP carboxykinase removes the carbon dioxide that was just added and phosphorylates the product to phosphoenolpyruvate. Adding CO2 and taking it off again looks wasteful; it is the activation that makes the step go. The second and third bypasses are simple hydrolyses, by fructose one-six-bisphosphatase and by glucose six-phosphatase — and those two names matter, because the Czech textbook describes both reactions and never names either enzyme. Glucose six-phosphatase sits in the endoplasmic-reticulum lumen and only liver, kidney and intestine have it, which is exactly why muscle keeps its glucose and the liver exports it. The cost is six high-energy phosphates per glucose: four ATP, two GTP, and two NADH as well. Glycolysis releases about sixty-three kilojoules per mole and gluconeogenesis about sixteen, and both being downhill is what lets the cell run either direction without ever running them at once.",
      checklist: [
        "Named the demand first — about 120 g of glucose a day for the brain — and the three tissues that do it",
        "Said seven of ten reactions are shared, and gave the free-energy argument rather than just asserting three bypasses",
        "Quoted at least one measured value: hexokinase -33.4, PFK-1 -22.2, pyruvate kinase -16.7 kJ/mol",
        "Pyruvate carboxylase: matrix, biotin, bicarbonate, and acetyl-CoA as the positive effector",
        "Explained the malate detour as a transport problem, not a pointless shuttle",
        "Named fructose 1,6-bisphosphatase and glucose 6-phosphatase — the two the Czech book never names",
        "Placed glucose 6-phosphatase in the ER lumen and drew the liver-versus-muscle conclusion from it",
        "Gave the cost as six high-energy phosphates (4 ATP + 2 GTP) plus 2 NADH"
      ]
    }
  }

);
