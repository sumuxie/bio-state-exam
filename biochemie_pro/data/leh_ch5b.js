/* ============================================================
   Lehninger 8 — Chapter 5, the two sections after §5.1: 5.2 and 5.3.

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」.
   Only `summary` + `mustKnow` — no `points`, `terms`, `quiz`, `oral`
   or `trace`. Written to the pattern of `leh_ch12b.js`.

   PAGE RANGES MEASURED IN A, and the mapping is wrong on BOTH rows —
   it hands 5.2 and 5.3 a shared boundary one page too early:
     5.2  tsv says A 164-168. Measured: the section opens on p.164
          ("most protein-ligand interactions do not involve a prosthetic
          group") and SUMMARY 5.2 is on p.169. So 164-169.
     5.3  tsv says A 168-172. Measured: the section opens on p.169 —
          the same page SUMMARY 5.2 sits on, which is why the boundary
          is easy to get wrong — and SUMMARY 5.3 is on p.172.
          So 169-172.

   CZECH COVERAGE, word-boundary matched before writing:
     5.2  imunoglobulin 0, protilátk 0, epitop 0, lymfocyt 0. NOT quite
          zero, and the exception is worth stating rather than rounding
          away: `antigen` scores 5 in Czech 2-2-3 and 5 in 8-2-3-4.
          The 8-2-3-4 hits are glycolipids acting as antigenic cell-
          surface markers — a different subject. The 2-2-3 hits ARE
          about antibodies, but as a ONE-SENTENCE example of subunit
          contact (its own `cz` field reads just "kontakt podjednotek"):
          the antigen-binding site is formed by parts of both the heavy
          and the light chain. That single sentence is the whole of the
          Czech layer's immunology, and it is exactly the fact §5.2
          builds on — which is why the merge below is the honest call.
     5.3  aktin 0, myosin 0, myozin 0, sarkomer 0, troponin 0.
          ⚠️ A naive substring count returns 1 for `aktin`, and it is
          "pro-LAKTIN" in 10-22. Total zero. The 8 `sval` (muscle) hits
          are muscle as a TISSUE in glycogen and glycolysis nodes
          (7-9, 7-4-1-1, 7-8-4, 7-11-2-1), never contraction.
          The Lehninger layer was checked too: `myosin` scores 1, a
          passing mention in L-5-1-1.

   topicKey:
     5.2 MERGES into `protein-tertiary-quaternary` (Czech 2-2-3 + 2-2-4),
         because that is where the one Czech sentence about antibodies
         lives and §5.2 is its full version. ⚠️ That key held only Czech
         nodes until now, so this merge CREATES A NEW CROSS-BOOK LINK —
         the same shape as L-14-5-1 joining `glycolysis`, and unlike
         L-19-5-1 joining `respiratory-chain` where nothing moved.
     5.3 starts a NEW single-book key `motor-proteins`. There is nothing
         in the Czech layer to join. Expected for a Lehninger-only topic.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-5-2-1",
    book: "lehninger",
    topicKey: "protein-tertiary-quaternary",
    chapter: 5,
    section: "5.2",
    czTitle: "Imunitní systém a imunoglobuliny (5.2) — jen orientačně: jedna vazebná kapsa, deset miliard různých náplní",
    enTitle: "Complementary interactions between proteins and ligands: the immune system and immunoglobulins — a brief orientation: one binding-site design, an astronomical number of different contents",
    cnTitle: "蛋白质与配体的互补相互作用：免疫系统与免疫球蛋白——只作科普性了解：一种结合口袋的设计，装得下天文数字般多的内容",
    pages: [164, 165, 166, 167, 168, 169],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 5.2 read end to end, A printed pp.164-169: the section opens on printed p.164 and SUMMARY 5.2 is on printed p.169. `lehninger_only_scope.tsv` marks 5.2 `brief` AND ITS RANGE IS WRONG AT THE END (it says 164-168; the summary is measurably on 169). Czech coverage measured with word-boundary matching before writing: imunoglobulin 0, protilátk 0, epitop 0, lymfocyt 0. ⚠️ NOT zero for `antigen`, and the exception is stated rather than rounded away: 5 hits in Czech 8-2-3-4 are glycolipids as antigenic cell-surface markers, a different subject; 5 hits in Czech 2-2-3 are genuinely about antibodies, but as a ONE-SENTENCE example of subunit contact -- that node's own `cz` field reads only 'kontakt podjednotek', and the English expansion says the antigen-binding site is formed by parts of both the heavy (H) and light (L) chains. That single sentence is the entire immunology of the Czech layer. topicKey MERGES into `protein-tertiary-quaternary` for exactly that reason: §5.2 is the full version of the sentence Czech 2-2-3 already teaches. ⚠️ That key held only Czech nodes until now, so this merge CREATES a new cross-book link -- the L-14-5-1/`glycolysis` shape, not the L-19-5-1/`respiratory-chain` shape. NOT COVERED: the genetics of antibody diversity (V(D)J recombination is Chapter 25 and is already in L-25-3-1), T-cell receptor structure beyond its name, and the MHC/self-recognition machinery.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；免疫球蛋白与抗原-抗体结合是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "An antibody is the textbook's cleanest case of a protein-ligand interaction, because nothing else about it is special — the same weak forces, the same induced fit, just pushed to an extreme of specificity: Kd values as low as 10^-10 M. Two facts do most of the exam work. The binding site is built from BOTH chains, heavy and light, from their variable domains. And an antibody does not bind a whole antigen — it binds an epitope, one small patch of it, which is why one large protein can be recognised by many different antibodies at once.",
      cn: "抗体是全书**最干净的一个蛋白质–配体相互作用**的例子，因为**它身上没有任何别的特殊之处**——**还是那几种弱作用力、还是诱导契合**，只是**被推到了特异性的极端**：**K_d 可以低到 10⁻¹⁰ M**。考试用得上的主要是两件事。第一，**结合位点是由重链和轻链两条链的可变结构域共同搭出来的**（⚠️ 这正是捷克书 `2-2-3` 里那一句「亚基接触」讲的东西）。第二，**抗体结合的不是整个抗原，而是抗原上的一小块——表位 (epitope)**，**所以同一个大蛋白可以同时被许多不同的抗体识别。**"
    },
    summary: {
      en: "A short section whose real job is to show one principle at its limit. The immune response is carried by an array of specialised leukocytes: T lymphocytes make T-cell receptors, B lymphocytes make immunoglobulins. Humans have five classes of immunoglobulin, distinguished by their heavy chain — α, δ, ε, γ and μ for IgA, IgD, IgE, IgG and IgM — with two types of light chain, κ and λ, occurring in all of them. IgG is the most abundant and the one to know: a Y-shaped protein of two heavy and two light chains, worked out by Gerald Edelman and Rodney Porter in the 1960s. Each chain is built of domains, some constant from one IgG to the next and folded into the immunoglobulin fold, one variable domain per chain. The variable domains pair up at the tips of the Y, their most changeable residues line the pocket, and the result is two identical antigen-binding sites per molecule. “A given immunoglobulin generally binds to only a part, called the epitope, of a large antigen” (A p.169), and binding often involves a small conformational change — an induced fit, common to protein-ligand interactions generally. The strength is worth a number: a typical antibody-antigen interaction has a Kd as low as 10^-10 M, and that energy comes from the ordinary hydrophobic effect together with ionic, hydrogen-bonding and van der Waals interactions. The section ends where the biochemistry becomes a laboratory reagent: because the specificity is so exact, a labelled antibody can report whether a protein is present and where it is, which is the basis of immunoblotting (Western blot) and related assays. IN THE BOOK'S OWN WORDS: “most protein-ligand interactions do not involve a prosthetic group” (A p.164); “The fundamental structure of immunoglobulins was first established by Gerald Edelman and Rodney Porter in the 1960s” (A p.165); “IgG is but one of five classes of immunoglobulins” (A p.166); “The binding specificity of an antibody is determined by the amino acid residues in the variable domains” (A p.167); “Immunoblotting allows the detection of a minor component in a sample and provides an approximation of its molecular weight” (A p.168).",
      cn: "很短的一节，它真正的任务是**把一条原理推到极限展示一次**。免疫应答由一系列特化的**白细胞**承担：**T 淋巴细胞**产生 **T 细胞受体**，**B 淋巴细胞**产生**免疫球蛋白**。人有**五类免疫球蛋白**，靠**重链**区分——**α、δ、ε、γ、μ** 分别对应 **IgA、IgD、IgE、IgG、IgM**；**轻链只有两型，κ 和 λ**，五类里都有。**IgG** 最丰富，也是要掌握的那个：一个 **Y 形**蛋白，由**两条重链和两条轻链**组成，由 **Gerald Edelman 和 Rodney Porter** 在 **1960 年代**阐明。每条链由**结构域**搭成，其中一些在不同 IgG 之间**恒定**、折叠成**免疫球蛋白折叠 (immunoglobulin fold)**，每条链另有**一个可变结构域**。可变结构域在 Y 的两个顶端**两两配对**，其中**最易变的残基**衬在口袋内壁，结果是**每个分子有两个完全相同的抗原结合位点**。「**一个给定的免疫球蛋白通常只结合大抗原的一部分，称为表位 (epitope)**」（A p.169），而且结合时常伴随一个小的构象变化——**诱导契合 (induced fit)**，这在蛋白质–配体相互作用里很普遍。强度值得记一个数：典型的抗原-抗体相互作用 **K_d 可以低到 10⁻¹⁰ M**，而这份能量来自**普通的疏水效应**加上**离子键、氢键和 van der Waals 相互作用**——**没有新的作用力**。本节结束在生化变成实验室试剂的地方：**正因为特异性如此精确**，一个**带标记的抗体**就能报告某个蛋白**在不在、在哪里**，这就是 **免疫印迹（Western blot）**及相关方法的原理。"
    }
  },
  {
    id: "L-5-3-1",
    book: "lehninger",
    topicKey: "motor-proteins",
    chapter: 5,
    section: "5.3",
    czTitle: "Žádná — aktin, myosin a molekulární motory (5.3): jak se z chemické energie stane pohyb",
    enTitle: "Protein interactions modulated by chemical energy: actin, myosin and molecular motors — a brief orientation: the filaments do not shorten, they slide past each other",
    cnTitle: "由化学能调控的蛋白质相互作用：肌动蛋白、肌球蛋白与分子马达——只作科普性了解：纤维本身并不缩短，它们是彼此滑过去的",
    pages: [169, 170, 171, 172],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 5.3 read end to end, A printed pp.169-172: the section opens on printed p.169 -- the same page that carries SUMMARY 5.2, which is why this boundary is easy to misplace -- and SUMMARY 5.3 is on printed p.172. `lehninger_only_scope.tsv` marks 5.3 `brief` AND ITS RANGE IS WRONG AT THE START (it says 168-172). Czech coverage measured with word-boundary matching before writing and it is exactly zero: aktin 0, myosin 0, myozin 0, sarkomer 0, troponin 0. ⚠️ A naive substring count returns 1 for `aktin` and it is 'proLAKTIN' in Czech 10-22 -- the same class of artefact that scored `Ras` at 607 in leh_ch12b.js. The 8 `sval` (muscle) hits are muscle as a tissue in the glycogen and glycolysis nodes (7-9, 7-4-1-1, 7-8-4, 7-11-2-1), never contraction. The Lehninger layer was checked as well: `myosin` scores 1, a passing mention in L-5-1-1. topicKey is a NEW single-book key, `motor-proteins`, as there is no Czech node to join. NOT COVERED: kinesin and dynein on microtubules, flagellar motors, and the structural detail of the myosin lever arm -- named and stopped, per the brief-node spec.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；肌肉收缩的滑行学说与肌动蛋白/肌球蛋白是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Muscle shortens without any filament shortening: the thick and thin filaments SLIDE past each other, so the sarcomere gets shorter while its parts stay the same length. ATP hydrolysis by the myosin head is not what pulls — it is what makes the head LET GO of one actin subunit and grab a further one along the filament, so the energy buys a cycle of release-and-rebind. And calcium does not act on myosin at all: Ca2+ released from the sarcoplasmic reticulum binds troponin, which moves tropomyosin off the actin surface. That is why the trigger is a calcium signal and the fuel is a separate question.",
      cn: "**肌肉缩短，但没有任何一根纤维在缩短**：**粗肌丝和细肌丝是彼此滑过去的**，所以**肌节 (sarcomere) 变短，而它的零件长度不变**。⚠️ **肌球蛋白头部水解 ATP，并不是「拉」的那一步**——它做的是让头部**松开一个肌动蛋白亚基、再抓住纤维上更远处的另一个**，也就是说**这份能量买的是一轮「放手–重新抓住」的循环**。而**钙根本不作用在肌球蛋白上**：**肌浆网释放的 Ca²⁺ 结合肌钙蛋白 (troponin)**，后者把**原肌球蛋白 (tropomyosin) 从肌动蛋白表面挪开**。**所以「扳机是钙信号」和「燃料是 ATP」是两个分开的问题。**"
    },
    summary: {
      en: "The chapter's closing section, and the payoff of everything before it: “Protein-ligand interactions achieve a special degree of spatial and temporal organization in motor proteins” (A p.172). Myosin is two heavy chains and four light chains, forming a fibrous coiled-coil tail and a globular head; several hundred myosin molecules associate by their tails into a bipolar thick filament with the heads projecting from either end in regular stacked arrays. The thin filament is F-actin — a polymer of globular G-actin, Mr 42,000 — together with troponin and tropomyosin. Actin does hydrolyse ATP, but only when assembling the filament, so every actin subunit in a finished filament carries ADP and that hydrolysis contributes nothing to contraction. The contractile unit is the sarcomere, thick filaments interleaved at both ends with thin filaments, each thick filament surrounded by six thin ones. Contraction is sliding: the Z disks are drawn closer together, the I bands narrow, and nothing gets shorter except the sarcomere itself. The engine is a cycle — ATP hydrolysis in the myosin head drives a series of conformational changes that dissociate the head from one F-actin subunit and eventually reattach it to another, farther along the thin filament, so the myosin walks along the actin. Control is separate from fuel: contraction is stimulated by Ca2+ released from the sarcoplasmic reticulum, the Ca2+ binds troponin, and the resulting change in the troponin-tropomyosin complex is what starts the cycle of actin-myosin interactions. IN THE BOOK'S OWN WORDS: “The contractile force of muscle is generated by the interaction of two proteins, myosin and actin” (A p.169); “This ATP hydrolysis by actin functions only in the assembly of the filaments” (A p.170); “The thick filament thus actively slides forward past the adjacent thin filaments” (A p.171).",
      cn: "本章的收尾一节，也是前面所有内容的回报：「**在马达蛋白中，蛋白质–配体相互作用达到了一种特殊程度的空间与时间组织性**」（A p.172）。**肌球蛋白 (myosin)** 由**两条重链和四条轻链**组成，形成一段**纤维状的卷曲螺旋「尾」**和一个**球状的「头」**；数百个肌球蛋白分子**靠尾部缔合**成一根**双极性的粗肌丝**，头部**从两端整齐成排地伸出**。**细肌丝**是 **F-肌动蛋白**——由球状的 **G-肌动蛋白（M_r 42,000）**聚合而成——外加**肌钙蛋白和原肌球蛋白**。⚠️ **肌动蛋白确实水解 ATP，但只在组装纤维时水解**，所以**成品纤维里每一个肌动蛋白亚基上带的都是 ADP**，**这一步水解对收缩毫无贡献**。收缩单位是**肌节 (sarcomere)**：粗肌丝两端与细肌丝**交错嵌插**，**每根粗肌丝被六根细肌丝围绕**。收缩就是**滑动**：**Z 盘彼此靠近、I 带变窄**，而**除了肌节本身，没有任何东西变短**。发动机是一个**循环**——**肌球蛋白头部水解 ATP** 驱动一连串构象变化，使头部**从一个 F-肌动蛋白亚基上解离**，最终**结合到细肌丝上更远处的另一个亚基**，于是肌球蛋白**沿着肌动蛋白「走」过去**。**控制与燃料是分开的两件事**：收缩由**肌浆网释放的 Ca²⁺** 启动，**Ca²⁺ 结合肌钙蛋白**，由此引起的**肌钙蛋白–原肌球蛋白复合体的构象变化**才是**启动肌动蛋白–肌球蛋白相互作用循环**的那一步。"
    }
  }
]);
