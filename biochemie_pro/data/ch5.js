/* ============================================================
   Chapter 5 — Další metabolismus proteinů a vzájemné přeměny aminokyselin
   Further protein metabolism and amino acid interconversions / 蛋白质代谢续篇与氨基酸互变
   Source: Biochemie – Základní kurz, pp. 115–129
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "5-1",
  book: "cz",
  topicKey: "protein-targeting-and-degradation",
  chapter: 5,
  section: "5.1",
  czTitle: "Proteolytické štěpení bílkovin",
  enTitle: "Proteolytic cleavage of proteins",
  cnTitle: "蛋白质的蛋白水解裂解",
  pages: [115, 116, 117, 118],
  coverage: "full",
  coverageNote: "All four pages read directly from the scans. p.115 covers the chapter-5 opening paragraph and the full Obr. 5.1 overview diagram, plus the start of 5.1 (protein turnover, serum albumin half-life). p.116 covers protease/peptidase terminology, the classification by reaction mechanism, and Tab. 5.1 — re-read zoomed at 4x on every specificity cell to confirm the exact arrow placement (pepsin uniquely cleaves on BOTH sides of Phe/Tyr, -X-↓Phe-↓X-, while trypsin/chymotrypsin cleave on only ONE side of their target residues, and kathepsin B/papain share an identical three-line specificity column). p.117 covers the exopeptidase/endopeptidase classification and the full Obr. 5.2 zymogen-activation/digestion-cascade diagram, zoomed in two passes to confirm every activation-peptide label (Val-Asp4-Lys, Ser-Arg, Thr-Asn x2, and the 15-amino-acid polypeptide). Only the top portion of p.118, through '...asi 200 g L-aminokyselin' (the zymogen/digestion narrative), belongs to this node; the '5.2 Odbourávání aminokyselin' heading onward on the same page is used by node 5-2.",
  cnNote: { topic: null, title: "蓋白质降解（消化酶/酶原激活）？笔记二十五§① pp.161–162 实际写的是细胞内降解（泛素-蛋白酶体/溶酶体途径），与教材消化酶/酶原激活不是同一回事，未找到确实对应页码（可能在第十一题 pp.71–73，未确认）", status: "pending" },
  mustKnow: { en: "Digestive proteases are made and stored as inactive zymogens, and only switched on after they leave the cell that made them — that single design choice is what stops the pancreas and stomach from digesting themselves. And the two-tier system (endopeptidases cutting in the middle, exopeptidases trimming one end) is why digestion goes protein to peptides to free amino acids in stages rather than all at once.", cn: "消化道里的蛋白酶被合成、储存成没有活性的酶原，只有离开合成它的细胞之后才会被激活——正是这一个设计，才让胰腺和胃不会把自己消化掉。而『内切酶从中间切、外切酶从两端一个个修剪』这套两层系统，也解释了为什么消化是分阶段进行的——从蛋白质到多肽再到游离氨基酸，而不是一步到位。" },
  summary: {
    en: "Protein and amino acid metabolism is framed as one of the central metabolic processes: hydrolytic cleavage of ingested and endogenous proteins releases free amino acids that form a metabolic POOL, used for resynthesis of other proteins, biosynthesis of nitrogen/sulfur/ring-containing products, and as an energy reserve (Obr. 5.1). Section 5.1 covers how that cleavage happens: proteins are constantly degraded and resynthesized in the body (serum albumin half-life about 20-25 days), catalysed by PROTEASES, which are classified either by REACTION MECHANISM (serine/cysteine/aspartate/metalloproteases) or by WHERE they attack the chain (ENDOpeptidases, cutting in the middle, vs EXOpeptidases, trimming one terminal residue at a time — Tab. 5.1 gives worked examples of both). Digestive proteases are synthesised as inactive ZYMOGENS and activated only after secretion — pepsinogen to pepsin in the stomach, and trypsinogen/chymotrypsinogen/proelastase/procarboxypeptidase to their active forms in the small intestine (Obr. 5.2) — a protective mechanism that stops the pancreas and stomach digesting themselves.",
    cn: "蛋白质与氨基酸代谢被定位为最核心的代谢过程之一：摄入及内源性蛋白质经水解裂解释放出游离氨基酸，形成代谢「库」（pool），既可用于重新合成其他蛋白质，也可用于合成含氮、含硫、含环状结构的产物，还可作为能量储备（图5.1）。5.1节讲的是这一裂解过程如何发生：体内蛋白质持续被降解并重新合成（血清白蛋白半衰期约20-25天），由蛋白酶催化完成。蛋白酶既可按反应机制分类（丝氨酸蛋白酶/半胱氨酸蛋白酶/天冬氨酸蛋白酶/金属蛋白酶），也可按其攻击肽链的位置分类（内肽酶从链中间切割，外肽酶则每次从末端切下一个残基——表5.1给出了两类的具体实例）。消化道蛋白酶都以无活性的酶原形式合成，只有分泌之后才被激活——胃中胃蛋白酶原激活为胃蛋白酶，小肠中胰蛋白酶原/糜蛋白酶原/弹性蛋白酶原/羧肽酶原激活为各自的活性形式（图5.2）——这是防止胰腺和胃自我消化的保护机制。"
  },
  points: [
    { cz: "pool volných aminokyselin (Obr. 5.1)", en: "Free amino acids released by protein hydrolysis form a metabolic POOL ('hotovost') that has FOUR fates, shown in Obr. 5.1: RESYNTHESIS into other peptides/proteins (proteosyntéza), BIOSYNTHESIS of other nitrogen/sulfur/ring-containing products (nucleotides, porphyrins, amines, melanin, creatinine, hormones etc.), oxidation of the CARBON SKELETON for ENERGY, and — via NH3 → urea — EXCRETION of nitrogen. For heterotrophic organisms amino acids/proteins are the EXCLUSIVE source of nitrogen, sulfur, aromatic rings and branched aliphatic structures, so dietary protein cannot be replaced by extra intake of other nutrient types.", cn: "蛋白质水解释放的游离氨基酸构成一个代谢「库」（hotovost），图5.1显示其有四个去向：重新合成为其他肽/蛋白质（蛋白质合成）；生物合成其他含氮/含硫/含环状结构的产物（核苷酸、卟啉、胺类、黑色素、肌酐、激素等）；氧化碳骨架以获取能量；以及经NH3→尿素途径排出氮。对异养生物而言，氨基酸/蛋白质是氮、硫、芳香环和支链脂肪结构的唯一来源，因此膳食蛋白质无法被增加摄入其他营养素类型所替代。" },
    { cz: "obrat bílkovin; proteasa = peptidasa; C-N hydrolasy", en: "Most proteins in the body are CONSTANTLY degraded and resynthesised (protein TURNOVER); human serum albumin's half-life is given as an example: 20-25 DAYS. Hydrolytic peptide-bond cleavage occurs spontaneously in acidic/alkaline environments (ch. 2), but in the organism it is CATALYSED by PROTEASES (= peptidases = proteinases), which belong to the C-N HYDROLASES; the reaction equilibrium is markedly shifted TOWARD hydrolysis. Because most amino acids and organic acids are dissociated to ANIONS at physiological pH (7.0-7.4), the book names them as anions from this point forward.", cn: "体内大多数蛋白质都在持续地降解与重新合成（蛋白质更新）；例如人血清白蛋白的半衰期约为20-25天。肽键的水解裂解在酸性和碱性环境中可自发发生（第2章），但在生物体内这一步由蛋白水解酶（蛋白酶，亦称肽酶或蛋白水解酶）催化，它们属于C-N水解酶类；反应平衡明显偏向水解方向。由于大多数氨基酸和有机酸在生理pH（7.0-7.4）下都以阴离子形式解离存在，教材此后均以相应阴离子的名称来称呼它们。" },
    { cz: "klasifikace podle mechanismu (Ser/Cys/Asp/metalo-)", en: "Proteases classify FOUR ways by reaction mechanism (named for the amino-acid residue or cofactor in the active site): SERINE proteases (trypsin, α-chymotrypsin, ELASTASE, coagulation factors), CYSTEINE proteases (papain, lysosomal CATHEPSINS), ASPARTATE proteases (pepsin, RENNIN), and METALLOPROTEASES (carboxypeptidase, COLLAGENASE). A separate, independent classification axis is by SITE OF ACTION (intracellular vs extracellular).", cn: "按反应机制（即活性中心所依赖的氨基酸残基或辅因子命名）蛋白酶可分为四类：丝氨酸蛋白酶（胰蛋白酶、α-糜蛋白酶、弹性蛋白酶、凝血因子）、半胱氨酸蛋白酶（木瓜蛋白酶、溶酶体组织蛋白酶）、天冬氨酸蛋白酶（胃蛋白酶、凝乳酶）和金属蛋白酶（羧肽酶、胶原酶）。另一个独立的分类维度是按作用部位（细胞内/细胞外）。" },
    { cz: "Tab. 5.1 (ověřeno ze skenu, 4x zoom)", en: "TAB. 5.1 — proteolytic enzymes and properties, re-read zoomed from the scan. ENDOPEPTIDASES: PEPSIN (stomach, pH 1.5-2.5) cleaves on BOTH sides of Phe/Tyr (-X-↓Phe-↓X-, -X-↓Tyr-↓X-) plus one fixed site, -Leu-↓Glu-; TRYPSIN (small intestine, pH 7.5-8.5) cleaves ONLY after -Arg- or -Lys-; α-CHYMOTRYPSIN (small intestine, pH 7.8) cleaves ONLY after -Phe-, -Tyr-, -Trp- or -Leu-. KATHEPSIN B (found intracellularly, pH 5-6) and PAPAIN (from the papaya plant, pH 8) share an IDENTICAL specificity pattern — -Arg-↓X-, -Lys-↓X-, -Phe-X-↓Y- — consistent with both being cysteine proteases. EXOPEPTIDASES: CARBOXYPEPTIDASE (small intestine, no pH given) removes the residue bearing the free X-COO⁻ terminus; AMINOPEPTIDASE (intestinal mucosa, no pH given) removes the residue bearing the free X-NH3⁺ terminus. The table's own footnote defines ↓ as marking the exact cleavage site.", cn: "表5.1——蛋白水解酶及其性质，已从扫描件4倍放大重新核对。内肽酶：胃蛋白酶（胃，pH 1.5-2.5）在Phe/Tyr的两侧都能切割（-X-↓Phe-↓X-、-X-↓Tyr-↓X-），另有一个固定位点-Leu-↓Glu-；胰蛋白酶（小肠，pH 7.5-8.5）只在Arg或Lys之后切割；α-糜蛋白酶（小肠，pH 7.8）只在Phe、Tyr、Trp或Leu之后切割。组织蛋白酶B（细胞内，pH 5-6）与木瓜蛋白酶（番木瓜植物，pH 8）具有完全相同的特异性模式——-Arg-↓X-、-Lys-↓X-、-Phe-X-↓Y-——这与二者同属半胱氨酸蛋白酶相符。外肽酶：羧肽酶（小肠，未给出pH）切下带游离X-COO⁻末端的残基；氨肽酶（肠黏膜，未给出pH）切下带游离X-NH3⁺末端的残基。表格自身的脚注将↓定义为标出确切的切割位点。" },
    { cz: "exopeptidasy vs endopeptidasy", en: "By WHERE they attack the chain, proteases split into two groups: EXOPEPTIDASES cleave from the END, always removing the terminal amino acid — from the N-terminus (free amino group) by AMINOPEPTIDASES, or from the C-terminus (free carboxyl group) by CARBOXYPEPTIDASES. ENDOPEPTIDASES, also called PROTEINASES, cleave predominantly proteins and larger polypeptides IN THE MIDDLE of the chain — this group includes the well-known trypsin, α-chymotrypsin and pepsin.", cn: "按攻击肽链的位置，蛋白酶分为两组：外肽酶从链的末端切割，总是切下末端氨基酸——从N端（游离氨基）切割的称为氨肽酶，从C端（游离羧基）切割的称为羧肽酶。内肽酶，亦称蛋白水解酶，主要在链的中间切割蛋白质和较大的多肽——这一组包括常见的胰蛋白酶、α-糜蛋白酶和胃蛋白酶。" },
    { cz: "Obr. 5.2 — žaludek: pepsinogen → pepsin", en: "OBR. 5.2 traces zymogen activation. In the STOMACH: dietary proteins meet PEPSINOGEN, which HCl cleaves into FIVE PEPTIDES plus a PEPSIN-INHIBITOR COMPLEX; at pH<5 the complex releases its peptide INHIBITOR, giving free PEPSIN, which degrades the dietary proteins into larger polypeptides, PEPTONES.", cn: "图5.2描绘了酶原激活过程。在胃中：食物蛋白质与胃蛋白酶原相遇，后者被盐酸裂解为五个肽段和一个胃蛋白酶-抑制剂复合物；在pH<5时，该复合物释放出肽段抑制剂，生成游离的胃蛋白酶，将食物蛋白质分解为较大的多肽，即胨（peptones）。" },
    { cz: "Obr. 5.2 — tenké střevo: aktivační kaskáda", en: "In the SMALL INTESTINE (Obr. 5.2): TRYPSINOGEN is activated to TRYPSIN by ENTEROPEPTIDASE (+ Ca²⁺), releasing the peptide VAL-ASP₄-LYS (Val-Asp-Asp-Asp-Asp-Lys). Trypsin then activates the rest: CHYMOTRYPSINOGEN → π-CHYMOTRYPSIN (releasing Ser-Arg) or δ-CHYMOTRYPSIN (releasing a 15-AMINO-ACID POLYPEPTIDE); CHYMOTRYPSIN itself then converts BOTH π- and δ-chymotrypsin onward into the final, active α-CHYMOTRYPSIN (releasing Ser-Arg and/or Thr-Asn dipeptides); PROELASTASE → ELASTASE; PROCARBOXYPEPTIDASE → CARBOXYPEPTIDASE. Peptones/polypeptides are cut to oligopeptides by trypsin+chymotrypsin+elastase, then to di-/tripeptides by carboxy-/aminopeptidases, and finally to L-AMINO ACIDS by DIPEPTIDASES/TRIPEPTIDASES from the intestinal mucosal epithelium, which enter the BLOODSTREAM.", cn: "在小肠中（图5.2）：胰蛋白酶原经肠激酶（+Ca²⁺）激活为胰蛋白酶，释放肽段Val-Asp4-Lys（Val-Asp-Asp-Asp-Asp-Lys）。胰蛋白酶随后激活其余酶原：糜蛋白酶原→π-糜蛋白酶（释放Ser-Arg）或δ-糜蛋白酶（释放一个15个氨基酸的多肽）；糜蛋白酶本身又将π-和δ-糜蛋白酶都进一步转化为最终具有活性的α-糜蛋白酶（释放Ser-Arg和/或Thr-Asn二肽）；弹性蛋白酶原→弹性蛋白酶；羧肽酶原→羧肽酶。胨/多肽先被胰蛋白酶+糜蛋白酶+弹性蛋白酶切成寡肽，再被羧肽酶/氨肽酶切成二肽/三肽，最终由肠黏膜上皮产生的二肽酶/三肽酶切成L-氨基酸，进入血液循环。" },
    { cz: "zymogeny — biologický smysl; sekrece slinivky; 200 g/den", en: "Most digestive enzymes are biosynthesised as PROPROTEINS (ZYMOGENS), post-translationally activated by PARTIAL PROTEOLYSIS (ch. 4.3) — a purposeful PROTECTIVE mechanism preventing self-digestion of the producing organs/tissues; proenzymes activate only upon SECRETION into the digestive tract. The pancreas secretes trypsinogen, chymotrypsinogen, proelastase, procarboxypeptidase AND a TRYPSIN INHIBITOR together; the inhibitor, by binding trypsin, both protects it from AUTOCATALYTIC breakdown and prevents PREMATURE activation of chymotrypsinogen/procarboxypeptidase in the gut contents. About 200 g of L-amino acids are absorbed into the human bloodstream per day.", cn: "大多数消化酶都以酶原（zymogen）形式合成，经翻译后的部分蛋白水解而被激活（第4.3节）——这是防止产生这些酶的器官/组织发生自我消化的有效保护机制；酶原只有在分泌进入消化道后才被激活。胰腺同时分泌胰蛋白酶原、糜蛋白酶原、弹性蛋白酶原、羧肽酶原以及胰蛋白酶抑制剂；抑制剂通过与胰蛋白酶结合，既保护胰蛋白酶不被自催化分解，又防止糜蛋白酶原/羧肽酶原在肠内容物中被过早激活。人体每天约有200克L-氨基酸被吸收进入血液。" }
  ],
  terms: [
    { cz: "proteasa (peptidasa, proteinasa)", en: "protease (peptidase, proteinase)", cn: "蛋白酶（肽酶、蛋白水解酶）", def_en: "A C-N hydrolase that catalyses hydrolytic cleavage of the peptide bond; the reaction equilibrium strongly favours cleavage.", def_cn: "催化肽键水解裂解的C-N水解酶；反应平衡强烈偏向裂解方向。" },
    { cz: "endopeptidasa", en: "endopeptidase", cn: "内肽酶", def_en: "A protease that cleaves proteins/large polypeptides in the middle of the chain, e.g. trypsin, α-chymotrypsin, pepsin.", def_cn: "在链中间切割蛋白质/大分子多肽的蛋白酶，例如胰蛋白酶、α-糜蛋白酶、胃蛋白酶。" },
    { cz: "exopeptidasa", en: "exopeptidase", cn: "外肽酶", def_en: "A protease that removes one terminal amino acid at a time — aminopeptidases from the N-terminus, carboxypeptidases from the C-terminus.", def_cn: "每次从末端切下一个氨基酸的蛋白酶——氨肽酶作用于N端，羧肽酶作用于C端。" },
    { cz: "zymogen (proenzym)", en: "zymogen (proenzyme)", cn: "酶原（zymogen）", def_en: "An inactive proprotein precursor of a proteolytic enzyme, activated only after secretion by partial proteolysis; protects the producing tissue from self-digestion.", def_cn: "蛋白水解酶的无活性前体蛋白，只有在分泌后经部分蛋白水解才被激活；保护产生该酶的组织不被自我消化。" },
    { cz: "pepsinogen → pepsin", en: "pepsinogen to pepsin activation", cn: "胃蛋白酶原→胃蛋白酶的激活", def_en: "HCl cleaves pepsinogen into 5 peptides plus a pepsin-inhibitor complex; below pH 5 the inhibitor is released, giving active pepsin.", def_cn: "盐酸将胃蛋白酶原裂解为5个肽段和一个胃蛋白酶-抑制剂复合物；pH低于5时抑制剂被释放，生成有活性的胃蛋白酶。" },
    { cz: "trypsinogen → trypsin (enteropeptidasa)", en: "trypsinogen to trypsin activation (enteropeptidase)", cn: "胰蛋白酶原→胰蛋白酶的激活（肠激酶）", def_en: "Enteropeptidase (+ Ca2+), from the small-intestine mucosa, converts trypsinogen to trypsin, releasing the peptide Val-Asp4-Lys.", def_cn: "来自小肠黏膜的肠激酶（+Ca2+）将胰蛋白酶原转化为胰蛋白酶，释放肽段Val-Asp4-Lys。" },
    { cz: "chymotrypsinogen → π/δ/α-chymotrypsin", en: "chymotrypsinogen activation cascade", cn: "糜蛋白酶原的激活级联", def_en: "Trypsin converts chymotrypsinogen to π- or δ-chymotrypsin; chymotrypsin then converts both onward to the final active α-chymotrypsin.", def_cn: "胰蛋白酶将糜蛋白酶原转化为π-或δ-糜蛋白酶；糜蛋白酶再将二者进一步转化为最终有活性的α-糜蛋白酶。" },
    { cz: "inhibitor trypsinu", en: "trypsin inhibitor", cn: "胰蛋白酶抑制剂", def_en: "A pancreatic secretion that binds trypsin, protecting it from autocatalytic breakdown and preventing premature activation of the other pancreatic zymogens.", def_cn: "胰腺分泌的一种蛋白质，与胰蛋白酶结合，保护其不被自催化分解，并防止其他胰腺酶原被过早激活。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which pairing of enzyme and mechanistic protease class is CORRECT?",
      q_cn: "下列哪一项对酶与其反应机制类别的配对是正确的？",
      options: ["Pepsin — cysteine protease", "Papain — aspartate protease", "Trypsin — serine protease", "Carboxypeptidase — serine protease"],
      answer: 2,
      why_en: "Trypsin, α-chymotrypsin, elastase and the coagulation factors are SERINE proteases. Pepsin (with rennin) is an ASPARTATE protease, not cysteine. Papain (with lysosomal cathepsins) is a CYSTEINE protease, not aspartate. Carboxypeptidase (with collagenase) is a METALLOPROTEASE, not serine — so only the trypsin pairing is correct.",
      why_cn: "胰蛋白酶、α-糜蛋白酶、弹性蛋白酶和凝血因子都是丝氨酸蛋白酶。胃蛋白酶（与凝乳酶一起）是天冬氨酸蛋白酶，不是半胱氨酸蛋白酶。木瓜蛋白酶（与溶酶体组织蛋白酶一起）是半胱氨酸蛋白酶，不是天冬氨酸蛋白酶。羧肽酶（与胶原酶一起）是金属蛋白酶，不是丝氨酸蛋白酶——因此只有胰蛋白酶这一配对正确。"
    },
    {
      type: "mcq",
      q_en: "Per Tab. 5.1, what distinguishes pepsin's cleavage notation from trypsin's or chymotrypsin's?",
      q_cn: "根据表5.1，胃蛋白酶的切割位点标注与胰蛋白酶或糜蛋白酶的有何不同？",
      options: ["Pepsin has no defined specificity at all", "Pepsin cleaves on BOTH sides of its target residue (Phe/Tyr), while trypsin and chymotrypsin each cleave on only ONE side of theirs", "Pepsin only cleaves at the protein's N-terminus", "There is no difference; all three use identical notation"],
      answer: 1,
      why_en: "The table marks pepsin as -X-↓Phe-↓X- and -X-↓Tyr-↓X-, with an arrow on BOTH sides of the aromatic residue, meaning it can cut on either side. Trypsin (-Arg-↓X-, -Lys-↓X-) and chymotrypsin (-Phe-↓X- etc.) each carry only ONE arrow, always immediately AFTER their target residue.",
      why_cn: "表格将胃蛋白酶标注为-X-↓Phe-↓X-和-X-↓Tyr-↓X-，芳香族残基两侧都有箭头，说明它可以在任一侧切割。胰蛋白酶（-Arg-↓X-、-Lys-↓X-）和糜蛋白酶（-Phe-↓X-等）则各自只有一个箭头，且总是紧跟在目标残基之后。"
    },
    {
      type: "short",
      q_en: "Why are digestive proteases synthesised as inactive zymogens, and what specifically activates trypsinogen?",
      q_cn: "消化道蛋白酶为什么以无活性的酶原形式合成？具体是什么激活了胰蛋白酶原？",
      accept: ["protect", "self-digest", "autocatalytic", "enteropeptidase", "Ca", "自我消化", "肠激酶", "保护"],
      answer_en: "Zymogens are a protective mechanism preventing the stomach and pancreas from digesting their own tissue; proenzymes are activated only after secretion into the digestive tract. Trypsinogen specifically is converted to trypsin by enteropeptidase (with Ca2+) from the small-intestine mucosa, releasing the peptide Val-Asp4-Lys.",
      answer_cn: "酶原是一种保护机制，防止胃和胰腺消化自身组织；酶原只有在分泌进入消化道后才被激活。胰蛋白酶原具体是由小肠黏膜产生的肠激酶（配合Ca2+）转化为胰蛋白酶的，同时释放出肽段Val-Asp4-Lys。"
    },
    {
      type: "mcq",
      q_en: "In Obr. 5.2, what happens to BOTH π-chymotrypsin and δ-chymotrypsin after they are first formed from chymotrypsinogen?",
      q_cn: "在图5.2中，π-糜蛋白酶和δ-糜蛋白酶由糜蛋白酶原生成之后，二者接下来会发生什么？",
      options: ["They are both degraded and play no further role", "Chymotrypsin itself converts both of them onward into the same final form, α-chymotrypsin, each releasing a small peptide", "Only π-chymotrypsin is converted further; δ-chymotrypsin is already the final active form", "They combine with each other to form α-chymotrypsin"],
      answer: 1,
      why_en: "Both π-chymotrypsin (releasing the Ser-Arg AND Thr-Asn dipeptides on its way to α) and δ-chymotrypsin (releasing Thr-Asn alone) are further converted by CHYMOTRYPSIN itself into the same final, fully active α-chymotrypsin — two different activation routes converging on one product.",
      why_cn: "π-糜蛋白酶（转化为α形式时同时释放Ser-Arg和Thr-Asn两个二肽）和δ-糜蛋白酶（转化为α形式时只释放Thr-Asn）都由糜蛋白酶本身进一步转化为同一个最终具有完全活性的α-糜蛋白酶——两条不同的激活路线最终汇合于同一产物。"
    }
  ],
  oral: {
    q_en: "How does the body classify proteolytic enzymes, and how are digestive zymogens activated in the stomach and small intestine?",
    q_cn: "机体如何对蛋白水解酶进行分类？消化道中的酶原在胃和小肠中是如何被激活的？",
    model_en: "Protein and amino acid metabolism starts from the fact that free amino acids released by hydrolysis form a metabolic pool with four fates: resynthesis into new proteins, biosynthesis of other nitrogen-containing products such as nucleotides, porphyrins and hormones, oxidation of the carbon skeleton for energy, and excretion of nitrogen as urea. Most body proteins are constantly degraded and resynthesised — human serum albumin, for instance, has a half-life of only twenty to twenty-five days — and this hydrolysis of the peptide bond, though it can happen spontaneously in acid or alkaline conditions, is in the organism catalysed by proteases, also called peptidases or proteinases, which belong to the C-N hydrolases. Proteases can be classified in two independent ways. By reaction mechanism there are serine proteases such as trypsin, chymotrypsin and elastase, cysteine proteases such as papain and the lysosomal cathepsins, aspartate proteases such as pepsin and rennin, and metalloproteases such as carboxypeptidase and collagenase. By where they attack the chain, exopeptidases trim one terminal residue at a time, either from the amino end as aminopeptidases or the carboxyl end as carboxypeptidases, while endopeptidases, or proteinases, cut in the middle of the chain — trypsin, chymotrypsin and pepsin among them, each with its own sequence specificity, for instance trypsin only after arginine or lysine and chymotrypsin only after bulky residues like phenylalanine, tyrosine, tryptophan or leucine. Almost all of these digestive enzymes are synthesised as inactive zymogens, a protective device that stops the stomach and pancreas digesting their own tissue, and they are activated only once secreted. In the stomach, hydrochloric acid converts pepsinogen into a pepsin-inhibitor complex, releasing five peptides, and then below pH five the inhibitor peptide is released, leaving active pepsin, which breaks dietary protein down into peptones. In the small intestine, enteropeptidase from the mucosa, helped by calcium, converts trypsinogen into trypsin, releasing the hexapeptide valine-aspartate four-lysine; trypsin then activates chymotrypsinogen into pi- or delta-chymotrypsin, both of which chymotrypsin itself further converts into the final active alpha-chymotrypsin, and trypsin likewise activates proelastase to elastase and procarboxypeptidase to carboxypeptidase. All of this is kept in check by a trypsin inhibitor secreted alongside the zymogens, which protects trypsin from autocatalytic breakdown and stops chymotrypsinogen and procarboxypeptidase being activated too early. The combined action of these enzymes reduces peptones and polypeptides to oligopeptides, then to di- and tripeptides, and finally, with dipeptidases and tripeptidases from the intestinal mucosa, to free L-amino acids, of which roughly two hundred grams are absorbed into the human bloodstream every day.",
    checklist: [
      "Described the amino-acid pool and its four fates from Obr. 5.1",
      "Gave protein turnover with the serum albumin half-life example",
      "Classified proteases both by mechanism (serine/cysteine/aspartate/metallo) and by site of attack (exo/endopeptidase)",
      "Cited at least two specific Tab. 5.1 specificities (e.g. trypsin after Arg/Lys, chymotrypsin after Phe/Tyr/Trp/Leu)",
      "Explained the zymogen concept as protection against self-digestion",
      "Walked through the stomach cascade: pepsinogen to pepsin via HCl and pH<5",
      "Walked through the intestinal cascade: enteropeptidase, trypsin, chymotrypsinogen branches, proelastase, procarboxypeptidase",
      "Named the trypsin inhibitor's dual protective role and gave the ~200 g/day absorption figure"
    ]
  }
},

{
  id: "5-2",
  book: "cz",
  topicKey: "amino-group-metabolism",
  chapter: 5,
  section: "5.2",
  czTitle: "Odbourávání aminokyselin",
  enTitle: "Degradation of amino acids",
  cnTitle: "氨基酸的分解代谢",
  pages: [118],
  coverage: "full",
  coverageNote: "The full '5.2 Odbourávání aminokyselin' paragraph on p.118 (between the end of the 5.1 zymogen narrative and the '5.2.1' heading) verified directly against the scan. This is a short framing paragraph in the book itself, not a long section, so this node is intentionally brief rather than padded with material that belongs to 5.1 or 5.2.1.",
  cnNote: { topic: null, title: "蛋白质的降解及氨基酸的分解代谢 (笔记二十五，pp.161–170，本节为概述段落，未固定到具体页码)", status: "partial" },
  mustKnow: { en: "Every amino acid's breakdown starts the same way — strip the amino group — and ends the same way — burn the carbon skeleton in the citrate cycle. It is only the middle step, what happens to the released ammonia, where individual amino acids' paths actually diverge — so that is the one phase worth learning amino-acid-by-amino-acid; the other two are shared machinery.", cn: "每一种氨基酸的降解都以同一件事开头——脱掉氨基——也以同一件事收尾——把碳骨架送进柠檬酸循环烧掉。真正分化的，只有中间那一步：释放出来的氨怎么处理，这也是唯一值得逐个氨基酸去学的部分；另外两个阶段是共用的机器。" },
  summary: {
    en: "The combined action of endo- and exopeptidases eventually reduces proteins/peptides to a mixture of free amino acids. Their further degradation proceeds in THREE phases, stated explicitly by the book: (1) a transformation AT THE α-CARBON atom, (2) DETOXIFICATION of the ammonia released, and (3) degradation of the remaining CARBON SKELETON. The prerequisite for everything that follows is removal of the α-amino group, most often by TRANSAMINATION or OXIDATIVE DEAMINATION (both detailed in 5.2.1) — a first phase that is essentially common to all amino acids, unlike the second phase, where individual amino acids' pathways diverge. The final step, common again to all amino acids, is oxidation of the carbon skeleton in the CITRATE CYCLE (ch. 6.2.2). In mammals amino acid catabolism happens mainly in the LIVER, to a smaller extent in the KIDNEYS, and many amino acids can be broken down by more than one mechanism.",
    cn: "内肽酶与外肽酶的共同作用最终把蛋白质/肽降解为游离氨基酸的混合物。教材明确指出，它们的进一步降解分为三个阶段：（1）α-碳原子上的转化；（2）释放的氨的解毒；（3）剩余碳骨架的降解。之后一切的前提是脱去α-氨基，最常见的方式是转氨基作用或氧化脱氨基作用（详见5.2.1节）——第一阶段对几乎所有氨基酸都是共通的，而第二阶段则因各个氨基酸的代谢路径不同而有所差异。最终步骤——对所有氨基酸而言又是共通的——是碳骨架在柠檬酸循环中被氧化（第6.2.2节）。在哺乳动物中，氨基酸的分解代谢主要发生在肝脏，肾脏中也有少量发生，许多氨基酸可以通过不止一种机制被分解。"
  },
  points: [
    { cz: "tři fáze odbourávání aminokyselin", en: "Degradation of the free amino acid pool proceeds in THREE phases, stated explicitly by the book: (1) TRANSFORMATION AT THE α-CARBON atom [removing the amino group], (2) DETOXIFICATION of the released ammonia, and (3) degradation of the remaining CARBON SKELETON.", cn: "游离氨基酸库的降解分为三个阶段，教材明确列出：（1）α-碳原子上的转化（脱去氨基）；（2）释放氨的解毒；（3）剩余碳骨架的降解。" },
    { cz: "primární předpoklad = odstranění NH2 skupiny", en: "The PRIMARY PREREQUISITE for degrading any amino acid is removing its amino group AT THE α-CARBON, most often by TRANSAMINATION or by OXIDATIVE DEAMINATION (both mechanisms are detailed in 5.2.1).", cn: "降解任何氨基酸的首要前提都是脱去其α-碳原子上的氨基，最常见的方式是转氨基作用或氧化脱氨基作用（两者详见5.2.1节）。" },
    { cz: "fáze 1 společná, fáze 2 specifická podle AK", en: "The FIRST phase (α-carbon transformation) is essentially COMMON to almost all amino acids; only in the SECOND phase (ammonia detoxification) do individual amino acids' pathways begin to DIFFER from one another.", cn: "第一阶段（α-碳转化）对几乎所有氨基酸都是共通的；只有到第二阶段（氨的解毒）时，各个氨基酸的代谢路径才开始出现差异。" },
    { cz: "konečný mechanismus = citrátový cyklus (kap. 6.2.2)", en: "The FINAL degradative mechanism, again common to all amino acids, is oxidation of their carbon skeleton IN THE CITRATE CYCLE (cross-referenced forward to ch. 6.2.2).", cn: "最终的分解机制——对所有氨基酸而言又是共通的——是其碳骨架在柠檬酸循环中被氧化（前瞻引用第6.2.2节）。" },
    { cz: "místo katabolismu — játra především, ledviny málo", en: "In mammals, amino acid catabolism takes place mainly in the LIVER, and to a SMALL EXTENT also in the KIDNEYS.", cn: "在哺乳动物中，氨基酸的分解代谢主要发生在肝脏，肾脏中也有少量发生。" },
    { cz: "více mechanismů pro jednu aminokyselinu", en: "The book notes that a number of amino acids can be catabolised by SEVERAL different mechanisms — foreshadowing that 5.2.1 will present more than one route (simple deamination, dehydration, oxidative deamination, transamination) for removing the α-amino group.", cn: "教材指出许多氨基酸可以通过几种不同的机制被分解代谢——预示着5.2.1节将介绍不止一种脱去α-氨基的途径（简单脱氨、脱水脱氨、氧化脱氨、转氨基）。" }
  ],
  terms: [
    { cz: "odbourávání aminokyselin", en: "amino acid degradation (catabolism)", cn: "氨基酸的分解代谢", def_en: "The three-phase breakdown of free amino acids: α-carbon transformation, ammonia detoxification, and carbon-skeleton oxidation.", def_cn: "游离氨基酸的三阶段分解过程：α-碳转化、氨的解毒、碳骨架氧化。" },
    { cz: "přeměna na α-C atomu", en: "transformation at the α-carbon atom", cn: "α-碳原子上的转化", def_en: "Phase 1 of amino acid degradation: removal of the α-amino group, usually by transamination or oxidative deamination.", def_cn: "氨基酸分解代谢的第一阶段：脱去α-氨基，通常经转氨基或氧化脱氨完成。" },
    { cz: "detoxikace amoniaku", en: "ammonia detoxification", cn: "氨的解毒", def_en: "Phase 2 of amino acid degradation, in which the released ammonia is disposed of; the point at which individual amino acids' pathways start to differ.", def_cn: "氨基酸分解代谢的第二阶段，处理释放出的氨；各氨基酸代谢路径开始出现差异之处。" },
    { cz: "odbourávání uhlíkové kostry", en: "degradation of the carbon skeleton", cn: "碳骨架的降解", def_en: "Phase 3 of amino acid degradation: oxidation of the remaining carbon skeleton in the citrate cycle.", def_cn: "氨基酸分解代谢的第三阶段：剩余碳骨架在柠檬酸循环中被氧化。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What are the THREE phases of amino acid degradation, in the order the book gives them?",
      q_cn: "教材给出的氨基酸分解代谢的三个阶段，按顺序是什么？",
      options: [
        "Carbon-skeleton oxidation, then transamination, then ammonia detoxification",
        "Transformation at the α-carbon atom, then detoxification of ammonia, then degradation of the carbon skeleton",
        "Ammonia detoxification, then carbon-skeleton degradation, then α-carbon transformation",
        "Deamination, then transamination, then decarboxylation, with no further steps"
      ],
      answer: 1,
      why_en: "The book lists exactly three phases in this order: (1) transformation at the α-C atom, (2) detoxification of ammonia, (3) degradation of the carbon skeleton — the amino group must come off FIRST before the nitrogen can be detoxified or the remaining skeleton oxidised.",
      why_cn: "教材按此顺序列出恰好三个阶段：（1）α-碳原子上的转化；（2）氨的解毒；（3）碳骨架的降解——必须先脱去氨基，之后才能对氮进行解毒或氧化剩余的骨架。"
    },
    {
      type: "short",
      q_en: "Why is the 'first phase' of amino acid degradation described as common to almost all amino acids, while later steps are not?",
      q_cn: "为什么氨基酸分解代谢的「第一阶段」被描述为几乎对所有氨基酸都是共通的，而之后的步骤却不是？",
      accept: ["transamination", "oxidative deamination", "α-carbon", "common", "differ", "转氨", "氧化脱氨", "共通", "差异"],
      answer_en: "Removing the α-amino group (by transamination or oxidative deamination) is essentially the same first move for nearly every amino acid, so the book calls this phase common. It is only afterward, once each amino acid's carbon skeleton is a distinct 2-oxo acid, that individual degradation pathways start to differ from one another.",
      answer_cn: "脱去α-氨基（经转氨基或氧化脱氨）对几乎每种氨基酸而言都是相同的第一步，因此教材称这一阶段是共通的。只有在此之后，当每种氨基酸的碳骨架变为各自不同的2-氧代酸时，各自的分解代谢路径才开始出现差异。"
    },
    {
      type: "mcq",
      q_en: "In mammals, where does amino acid catabolism mainly take place?",
      q_cn: "在哺乳动物中，氨基酸的分解代谢主要发生在哪里？",
      options: ["Skeletal muscle, exclusively", "The liver, with a smaller contribution from the kidneys", "Adipose tissue", "The small intestine mucosa"],
      answer: 1,
      why_en: "The book states amino acid catabolism in mammals runs mainly in the LIVER, to a small extent also in the KIDNEYS — muscle, adipose tissue and the intestinal mucosa are not given as catabolic sites here.",
      why_cn: "教材指出，哺乳动物中氨基酸的分解代谢主要发生在肝脏，肾脏中也有少量发生——肌肉、脂肪组织和肠黏膜在此处并未被列为分解代谢部位。"
    }
  ],
  oral: {
    q_en: "Outline the three-phase framework the book uses for amino acid degradation, and state where in the body this mainly happens.",
    q_cn: "概述教材用于氨基酸分解代谢的三阶段框架，并说明这一过程主要发生在身体的什么部位。",
    model_en: "Once endo- and exopeptidases have reduced proteins and peptides down to a mixture of free amino acids, their further degradation proceeds in three phases: first a transformation at the alpha-carbon atom, which in practice means removing the amino group, most often by transamination or by oxidative deamination; second, detoxification of the ammonia this releases; and third, degradation of what remains, the carbon skeleton. The first of these phases is essentially common to almost every amino acid, since removing the alpha-amino group looks much the same reaction whichever amino acid you start with, but from the second phase onward individual amino acids diverge, because each one is left with a differently shaped carbon skeleton that has to be dealt with by its own route. That final route converges again, though: whatever the amino acid, its carbon skeleton is ultimately oxidised in the citrate cycle. In mammals this whole catabolic sequence takes place mainly in the liver, with the kidneys contributing to a smaller extent, and it's worth remembering that many individual amino acids are not restricted to a single catabolic mechanism but can be broken down by more than one route, which is exactly why the next section has to lay out several distinct ways of removing that first amino group.",
    checklist: [
      "Named all three phases in order: α-carbon transformation, ammonia detoxification, carbon-skeleton degradation",
      "Explained that transamination/oxidative deamination is the primary route for phase 1",
      "Stated phase 1 is common across amino acids while phase 2 onward diverges",
      "Linked the final carbon-skeleton step to the citrate cycle",
      "Named liver as the main site, kidneys as a minor site",
      "Noted that individual amino acids can use more than one degradation mechanism"
    ]
  }
},

{
  id: "5-2-1-1",
  book: "cz",
  topicKey: "amino-group-metabolism",
  chapter: 5,
  section: "5.2.1",
  czTitle: "Metabolické reakce na α-uhlíkovém atomu aminokyselin — deaminace",
  enTitle: "Metabolic reactions at the amino acid α-carbon — deamination mechanisms",
  cnTitle: "氨基酸α-碳原子上的代谢反应——脱氨机制",
  pages: [118, 119, 120],
  coverage: "full",
  coverageNote: "p.118's 5.2.1 opening paragraph and the histidine-to-urocanic-acid reaction (bottom of the page) verified directly, continuing through the full p.119 (simple-deamination examples, the serine/threonine dehydratase reactions with their two structural schemes, the general oxidative-deamination scheme, and the glutamate dehydrogenase reaction — all three reaction diagrams zoomed to confirm the exact substituents and charges) and the top of p.120 (the D-/L-amino acid oxidase paragraph, ending immediately before 'Základní reakcí, umožňující napojení...'). NODE-SPLIT NOTE: unlike section 4.1.3 in ch.4, this book does NOT mark section 5.2.1 with its own bold internal sub-headings — the split into 5-2-1-1 (deamination-type reactions) and 5-2-1-2 (transamination plus the unifying PLP mechanism, including decarboxylation) is an editorial grouping by mechanism-family, made because the full 5-page section is too dense for one node, not because the book itself marks a break at this exact point.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——脱氨 (笔记 pp.162–165)", status: "mapped" },
  mustKnow: { en: "Of the four ways to strip an amino acid's nitrogen, only one actually releases free ammonia — oxidative deamination, above all by glutamate dehydrogenase; the other three change which molecule is carrying the nitrogen but do not get rid of it. That is why glutamate dehydrogenase, funnelling glutamate to 2-oxoglutarate, is called a nodal reaction: nearly every amino acid's nitrogen has to pass through this one step to actually leave the pool.", cn: "脱掉氨基酸氮的四种方式里，真正能把游离氨释放出来的只有一种——氧化脱氨，尤其是靠谷氨酸脱氢酶；另外三种只是换了个分子来携带这个氮，并没有把它清除掉。这就是为什么谷氨酸脱氢酶（把谷氨酸变成 2-氧戊二酸）被称为『枢纽反应』：几乎所有氨基酸的氮，最终都要经过这一步才能真正离开这个氨基酸池。" },
  summary: {
    en: "The basic reaction removing an amino acid's nitrogen is DEAMINATION, and the book presents FOUR distinct routes to it. (1) SIMPLE deamination (loss of NH3 forming a double bond, no oxidation) is restricted to HISTIDINE, converted to urocanic acid (further degraded via glutamate), and — in bacteria/plants only — to aspartate, phenylalanine and tyrosine. (2) DEHYDRATION-based deamination needs a β-hydroxyl group, so it is restricted to SERINE (→ pyruvate, via an aminoacrylate intermediate) and THREONINE (→ 2-oxobutyrate); the dehydratase's PLP coenzyme here does NOT act as an oxidant. (3) In most amino acids, deamination is coupled to OXIDATION of the α-carbon — OXIDATIVE DEAMINATION, catalysed by NAD(P)+-dependent dehydrogenases, allosterically INHIBITED by ATP/GTP and ACTIVATED by ADP/GDP; by far the most important example is GLUTAMATE DEHYDROGENASE (E.C. 1.4.1.2), converting glutamate to 2-oxoglutarate + NH4+ — explicitly called 'one of the nodal reactions of amino acid metabolism.' (4) A minor OXIDASE mechanism also exists, via two flavoproteins: D-amino acid oxidase (mainly detoxifying) and L-amino acid oxidase (low catalytic efficiency).",
    cn: "脱去氨基酸氮原子的基本反应是脱氨基作用，教材给出了四条不同的途径。（1）简单脱氨（失去NH3并形成双键，不发生氧化）仅限于组氨酸——转化为尿刺酸（可再经谷氨酸进一步降解）——以及仅在细菌/植物中发生的天冬氨酸、苯丙氨酸和酪氨酸。（2）基于脱水的脱氨需要β-羟基，因此仅限于丝氨酸（经氨基丙烯酸酯中间体→丙酮酸）和苏氨酸（→2-氧代丁酸）；此处脱水酶所用的PLP辅酶并不起氧化剂的作用。（3）大多数氨基酸的脱氨伴随着α-碳的氧化——即氧化脱氨基作用，由NAD(P)+依赖的脱氢酶催化，被ATP/GTP别构抑制、被ADP/GDP别构激活；迄今最重要的例子是谷氨酸脱氢酶（E.C. 1.4.1.2），将谷氨酸转化为2-氧戊二酸+NH4+——教材明确称其为「氨基酸代谢的枢纽反应之一」。（4）此外还存在一种次要的氧化酶机制，由两种黄素蛋白催化：D-氨基酸氧化酶（主要起解毒作用）和L-氨基酸氧化酶（催化效率很低）。"
  },
  points: [
    { cz: "prostá deaminace — histidin → urokanát", en: "The simplest conceivable mechanism for removing an amino acid's nitrogen is SIMPLE DEAMINATION: loss of ammonia with formation of a double bond. This mechanism applies ONLY to HISTIDINE, converted (+H⁺) to UROCANIC ACID (kyselina urokanová) + NH4⁺, which can be further degraded via GLUTAMATE. In BACTERIA AND PLANTS (not generally in mammals), aspartate, phenylalanine and tyrosine are ALSO degraded by simple deamination.", cn: "脱去氨基酸氮原子最简单的机制是简单脱氨基作用：失去氨并形成双键。该机制仅适用于组氨酸——（+H⁺）转化为尿刺酸+NH4⁺，尿刺酸可再经谷氨酸进一步降解。在细菌和植物中（哺乳动物一般不适用），天冬氨酸、苯丙氨酸和酪氨酸也通过简单脱氨基被降解。" },
    { cz: "dehydratace — serin/threonin (serindehydratasa, E.C. 4.2.1.13)", en: "A SECOND deamination route is DEHYDRATION, possible only when a HYDROXYL group sits on the β-CARBON — i.e. for SERINE and THREONINE. A specific dehydratase (e.g. SERINE DEHYDRATASE, E.C. 4.2.1.13) splits off water, giving an AMINOACRYLATE intermediate that TAUTOMERIZES (via an imino acid) to PYRUVATE + NH4⁺; threonine analogously dehydrates to 2-OXOBUTYRATE. The dehydratase's coenzyme is PYRIDOXAL PHOSPHATE — but here it does NOT act as an oxidising agent.", cn: "第二条脱氨途径是脱水，只有当β-碳原子上带有羟基时才可能发生——即丝氨酸和苏氨酸。特异性脱水酶（如丝氨酸脱水酶，E.C. 4.2.1.13）裂解出一分子水，生成氨基丙烯酸酯中间体，后者经亚胺酸互变异构为丙酮酸+NH4⁺；苏氨酸类似地脱水生成2-氧代丁酸。该脱水酶的辅酶是磷酸吡哆醛，但在这里它并不起氧化剂的作用。" },
    { cz: "oxidační deaminace — obecný mechanismus", en: "In MOST amino acids, deamination is accompanied by OXIDATION of the α-carbon — collectively called OXIDATIVE DEAMINATION: strongly exergonic reactions catalysed by DEHYDROGENASES with NAD⁺ or NADP⁺ as coenzyme, yielding 2-OXO ACIDS. Mechanistically this is oxidation of the >CH-NH2 group to an imine >C=NH, which then hydrolyses SPONTANEOUSLY. In the 2-oxoglutarate-forming direction, the reaction needs simultaneous AEROBIC reoxidation of the NADH produced (e.g. in mitochondria). ALLOSTERIC regulation: ATP and GTP INHIBIT this reaction; ADP and GDP ACTIVATE it.", cn: "在大多数氨基酸中，脱氨伴随着α-碳的氧化——统称为氧化脱氨基作用：由以NAD+或NADP+为辅酶的脱氢酶催化的强放能反应，生成2-氧代酸。其机制可理解为>CH-NH2基团氧化为亚胺>C=NH，后者随即自发水解。在生成2-氧戊二酸的方向上，该反应需要同时发生已生成NADH的有氧再氧化（例如在线粒体中）。别构调节：ATP和GTP抑制该反应；ADP和GDP激活该反应。" },
    { cz: "glutamátdehydrogenasa (E.C. 1.4.1.2) — uzlová reakce", en: "BY FAR the most significant oxidative deamination is that of GLUTAMIC ACID, catalysed by GLUTAMATE DEHYDROGENASE (E.C. 1.4.1.2) using a NICOTINAMIDE coenzyme (NAD⁺ OR NADP⁺): glutamate + NAD(P)⁺ ⇌ [α-iminoglutarate intermediate] + NAD(P)H + H⁺, then + H2O → 2-OXOGLUTARATE + NH4⁺. The book explicitly flags this glutamate ⇌ 2-oxoglutarate interconversion as ONE OF THE NODAL (hub) REACTIONS of amino acid metabolism.", cn: "迄今最重要的氧化脱氨反应是谷氨酸的氧化脱氨，由谷氨酸脱氢酶（E.C. 1.4.1.2）催化，使用烟酰胺辅酶（NAD+或NADP+）：谷氨酸+NAD(P)+ ⇌ [α-亚氨基戊二酸中间体]+NAD(P)H+H+，随后+H2O→2-氧戊二酸+NH4+。教材明确指出，谷氨酸⇌2-氧戊二酸这一互变是氨基酸代谢的枢纽反应之一。" },
    { cz: "oxidasový mechanismus — D-/L-aminokyselin oxidasa", en: "Oxidative deamination can ALSO run by an OXIDASE mechanism, via TWO FLAVOPROTEINS: D-AMINO ACID OXIDASE (E.C. 1.4.3.3), whose role is more DETOXIFYING [since D-amino acids are not standard protein building blocks], and L-AMINO ACID OXIDASE (E.C. 1.4.3.2), which however has LOW catalytic efficiency [a minor pathway compared with glutamate dehydrogenase].", cn: "氧化脱氨基作用也可以通过氧化酶机制进行，由两种黄素蛋白催化：D-氨基酸氧化酶（E.C. 1.4.3.3），其作用更偏向解毒（因为D-氨基酸并非标准蛋白质组成成分）；以及L-氨基酸氧化酶（E.C. 1.4.3.2），但其催化效率很低（相对于谷氨酸脱氢酶而言是次要途径）。" },
    { cz: "proč transaminace sama nestačí (předzvěst)", en: "This deamination toolkit matters because — as the next node explains — TRANSAMINATION alone only SHUFFLES amino groups between molecules and cannot remove nitrogen from the amino-acid pool; an actual OXIDATIVE step, glutamate dehydrogenase above all, is what finally RELEASES nitrogen as free ammonia.", cn: "这套脱氨「工具箱」之所以重要，是因为（如下一节所解释的）转氨基作用本身只是把氨基在分子之间「搬来搬去」，并不能把氮从氨基酸库中真正移除；真正把氮以游离氨的形式释放出来的，是一个真正的氧化步骤——首先就是谷氨酸脱氢酶。" }
  ],
  terms: [
    { cz: "prostá deaminace", en: "simple deamination", cn: "简单脱氨基作用", def_en: "Loss of ammonia with formation of a double bond, no oxidation; restricted mainly to histidine (→ urocanic acid).", def_cn: "失去氨并形成双键、不发生氧化的脱氨方式；主要限于组氨酸（→尿刺酸）。" },
    { cz: "dehydratace (serindehydratasa)", en: "dehydration deamination (serine dehydratase)", cn: "脱水脱氨（丝氨酸脱水酶）", def_en: "PLP-dependent loss of water from a β-hydroxy amino acid (Ser, Thr), giving an unstable intermediate that hydrolyses to a 2-oxo acid + NH4+.", def_cn: "依赖PLP、从β-羟基氨基酸（丝氨酸、苏氨酸）脱去水的反应，生成不稳定中间体后水解为2-氧代酸+NH4+。" },
    { cz: "oxidační deaminace", en: "oxidative deamination", cn: "氧化脱氨基作用", def_en: "Deamination coupled to oxidation of the α-carbon, catalysed by NAD(P)+-dependent dehydrogenases; the dominant deamination route for most amino acids.", def_cn: "与α-碳氧化偶联的脱氨反应，由NAD(P)+依赖的脱氢酶催化；是大多数氨基酸的主要脱氨途径。" },
    { cz: "glutamátdehydrogenasa", en: "glutamate dehydrogenase (GDH)", cn: "谷氨酸脱氢酶", def_en: "E.C. 1.4.1.2; NAD(P)+-dependent enzyme converting glutamate to 2-oxoglutarate + NH4+, the single most important oxidative deamination and a metabolic hub reaction.", def_cn: "E.C. 1.4.1.2；NAD(P)+依赖酶，将谷氨酸转化为2-氧戊二酸+NH4+，是最重要的氧化脱氨反应，也是代谢枢纽反应。" },
    { cz: "oxidasa D-aminokyselin", en: "D-amino acid oxidase", cn: "D-氨基酸氧化酶", def_en: "E.C. 1.4.3.3; a flavoprotein deaminating D-amino acids, mainly a detoxification enzyme.", def_cn: "E.C. 1.4.3.3；对D-氨基酸进行脱氨的黄素蛋白，主要起解毒作用。" },
    { cz: "oxidasa L-aminokyselin", en: "L-amino acid oxidase", cn: "L-氨基酸氧化酶", def_en: "E.C. 1.4.3.2; a flavoprotein deaminating L-amino acids, but with low catalytic efficiency.", def_cn: "E.C. 1.4.3.2；对L-氨基酸进行脱氨的黄素蛋白，但催化效率较低。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which enzyme does the book explicitly call one of the 'nodal reactions' of amino acid metabolism?",
      q_cn: "教材明确将哪一种酶称为氨基酸代谢的「枢纽反应」之一？",
      options: ["Serine dehydratase", "Glutamate dehydrogenase", "D-amino acid oxidase", "L-amino acid oxidase"],
      answer: 1,
      why_en: "GLUTAMATE DEHYDROGENASE (E.C. 1.4.1.2), interconverting glutamate and 2-oxoglutarate with release of NH4+, is singled out by name as a nodal reaction — by far the most significant oxidative deamination, not a minor or detox-only pathway like the oxidases.",
      why_cn: "谷氨酸脱氢酶（E.C. 1.4.1.2）催化谷氨酸与2-氧戊二酸之间的互变并释放NH4+，被教材专门点名为枢纽反应——它是迄今最重要的氧化脱氨反应，而非像氧化酶那样只是次要或纯解毒性质的途径。"
    },
    {
      type: "mcq",
      q_en: "What allosterically ACTIVATES the oxidative deamination reaction catalysed by NAD(P)+-dependent dehydrogenases such as glutamate dehydrogenase?",
      q_cn: "什么会别构激活由NAD(P)+依赖的脱氢酶（如谷氨酸脱氢酶）催化的氧化脱氨反应？",
      options: ["ATP and GTP", "ADP and GDP", "NAD+ and NADP+ themselves", "Ca2+ and Mg2+"],
      answer: 1,
      why_en: "The book states ATP and GTP are ALLOSTERIC INHIBITORS of this reaction, while ADP and GDP act as ACTIVATORS — a classic energy-charge signal: when the cell is low on ATP/GTP (high ADP/GDP), oxidising amino acids for energy is favoured.",
      why_cn: "教材指出ATP和GTP是该反应的别构抑制剂，而ADP和GDP则起激活作用——这是典型的能荷信号：当细胞ATP/GTP不足（ADP/GDP偏高）时，氧化氨基酸以获取能量的反应被促进。"
    },
    {
      type: "short",
      q_en: "Why can only serine and threonine be deaminated by the dehydratase mechanism, and what does serine produce?",
      q_cn: "为什么只有丝氨酸和苏氨酸能通过脱水酶机制脱氨？丝氨酸的产物是什么？",
      accept: ["hydroxyl", "beta", "β-carbon", "pyruvate", "aminoacrylate", "羟基", "丙酮酸", "氨基丙烯酸酯"],
      answer_en: "Dehydration deamination requires a hydroxyl group on the β-carbon, which only serine and threonine have among the standard amino acids. Serine dehydrates (losing H2O) to an aminoacrylate intermediate that tautomerises and hydrolyses to pyruvate + NH4+; threonine analogously gives 2-oxobutyrate.",
      answer_cn: "脱水脱氨需要β-碳原子上带有羟基，在标准氨基酸中只有丝氨酸和苏氨酸具备这一条件。丝氨酸脱水（失去H2O）生成氨基丙烯酸酯中间体，经互变异构和水解生成丙酮酸+NH4+；苏氨酸则类似地生成2-氧代丁酸。"
    },
    {
      type: "mcq",
      q_en: "What is the key functional difference between D-amino acid oxidase and L-amino acid oxidase?",
      q_cn: "D-氨基酸氧化酶与L-氨基酸氧化酶的关键功能差异是什么？",
      options: [
        "D-amino acid oxidase is mainly detoxifying; L-amino acid oxidase has low catalytic efficiency, making the oxidase route minor overall",
        "Both are highly efficient and are the dominant deamination route in the body",
        "D-amino acid oxidase requires NAD+; L-amino acid oxidase requires no cofactor at all",
        "L-amino acid oxidase is the enzyme responsible for the histidine-to-urocanic-acid reaction"
      ],
      answer: 0,
      why_en: "Both are FLAVOPROTEINS. D-amino acid oxidase (E.C. 1.4.3.3) mainly detoxifies D-amino acids (not standard protein building blocks); L-amino acid oxidase (E.C. 1.4.3.2) has LOW catalytic efficiency, so this oxidase route is minor compared with glutamate dehydrogenase's dehydrogenase-based oxidative deamination.",
      why_cn: "两者都是黄素蛋白。D-氨基酸氧化酶（E.C. 1.4.3.3）主要对D-氨基酸（非标准蛋白质组成成分）起解毒作用；L-氨基酸氧化酶（E.C. 1.4.3.2）催化效率很低，因此相对于谷氨酸脱氢酶所代表的脱氢酶型氧化脱氨而言，氧化酶这条途径是次要的。"
    }
  ],
  oral: {
    q_en: "What mechanisms does the body use to remove the amino group from an amino acid's α-carbon, and which single reaction is the most important?",
    q_cn: "机体通过哪些机制脱去氨基酸α-碳上的氨基？其中哪一个反应最为重要？",
    model_en: "Removing an amino acid's nitrogen is the basic reaction that opens amino acid catabolism, and the book actually presents four distinct ways to do it. The simplest is plain deamination, loss of ammonia with formation of a double bond, but this only works for histidine, which becomes urocanic acid, further degradable via glutamate, and in bacteria and plants for aspartate, phenylalanine and tyrosine as well. A second route is dehydration, which needs a hydroxyl group on the beta-carbon and so is limited to serine and threonine: a specific dehydratase, using pyridoxal phosphate purely as a structural coenzyme rather than an oxidant, splits off water to give an unstable aminoacrylate that tautomerises and hydrolyses to pyruvate plus ammonium, with threonine following the same logic to 2-oxobutyrate. For most amino acids, though, deamination is coupled to oxidation of the alpha-carbon, and this oxidative deamination, run by NAD-plus or NADP-plus dependent dehydrogenases, is strongly exergonic and mechanistically amounts to oxidising the carbon-nitrogen group to an imine that then hydrolyses spontaneously; when the product is 2-oxoglutarate this only proceeds together with aerobic reoxidation of the NADH formed, and the whole reaction is allosterically inhibited by ATP and GTP but activated by ADP and GDP, tying it to the cell's energy charge. By far the most important single example is the oxidative deamination of glutamate itself, catalysed by glutamate dehydrogenase using NAD-plus or NADP-plus, interconverting glutamate and 2-oxoglutarate with release of free ammonium — the book calls this one of the nodal reactions of the entire amino acid metabolism, and for good reason, because, as we'll see next, transamination reactions on their own only shuffle amino groups from one molecule to another and can never actually eliminate nitrogen from the body; it takes an oxidative step like this one to finally release it as free ammonia. Finally, a comparatively minor oxidase mechanism also exists, carried out by two flavoproteins: D-amino acid oxidase, which is really more of a detoxifying enzyme since D-amino acids aren't standard protein building blocks, and L-amino acid oxidase, which despite acting on the natural L-series has only low catalytic efficiency and so contributes little compared with glutamate dehydrogenase.",
    checklist: [
      "Named all four deamination routes: simple, dehydratase, oxidative (dehydrogenase), oxidase",
      "Gave histidine → urocanic acid as the simple-deamination example",
      "Explained the β-hydroxyl requirement restricting dehydratase deamination to Ser/Thr",
      "Described oxidative deamination's mechanism (imine intermediate) and NAD(P)+ dependence",
      "Named glutamate dehydrogenase, its EC number logic, and its 'nodal reaction' status",
      "Gave the ATP/GTP-inhibits, ADP/GDP-activates allosteric regulation",
      "Distinguished D- vs L-amino acid oxidase roles",
      "Connected this node to why transamination alone cannot remove nitrogen"
    ]
  }
},

{
  id: "5-2-1-2",
  book: "cz",
  topicKey: "amino-group-metabolism",
  chapter: 5,
  section: "5.2.1",
  czTitle: "Metabolické reakce na α-uhlíkovém atomu aminokyselin — transaminace a PLP",
  enTitle: "Metabolic reactions at the amino acid α-carbon — transamination and the PLP mechanism",
  cnTitle: "氨基酸α-碳原子上的代谢反应——转氨基作用与PLP机制",
  pages: [120, 121, 122],
  coverage: "full",
  coverageNote: "p.120 from 'Základní reakcí, umožňující napojení metabolismu aminokyselin...' (immediately after the D-/L-amino acid oxidase paragraph used by node 5-2-1-1) through the end of the page verified directly, including the general transaminace structural scheme and the specific alanine-/glutamate-aminotransferase equations. p.121 (the PLP internal/external aldimine mechanism, the electron-sink explanation, the written-out reaction-1/2a/regeneration equations, and the decarboxylation paragraph) and p.122 (the retro-aldol Ser/Thr paragraph and the full Obr. 5.3 structural diagram) verified directly, with Obr. 5.3 zoomed in three passes (top/middle/bottom) to confirm every reaction label (1, 2a/2b/2c, 3a/3b/3c, 4a/4b/4c) and the three final products (α-oxo acid + pyridoxamine-phosphate form; free amine; glycine). Obr. 5.3's own caption ('Funkce pyridoxalfosfátu v metabolismu aminokyselin') sits at the very bottom of p.122 with nothing beneath it except the page number — p.122 ends at a CLEAN section break, not mid-sentence; p.123 is unread and starts a new topic.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——转氨基作用/PLP机制 (笔记 pp.162–165)", status: "mapped" },
  mustKnow: { en: "Transamination by itself can never remove a net amino group from the pool — it only swaps which molecule is carrying it. Its real job is to gather nitrogen from many different amino acids onto one carrier, glutamate, so a single downstream reaction (glutamate dehydrogenase) can do the actual removal. And the PLP coenzyme is what makes this whole chemistry possible: its positively charged ring pulls electrons out of whichever bond is about to break, which is why the same coenzyme also does decarboxylation and, for serine/threonine, side-chain cleavage.", cn: "转氨基作用本身永远不能把一个净氨基从池子里移走——它只是换了个分子来背这个氨基。它真正的作用是把许多不同氨基酸身上的氮都收集到同一个载体——谷氨酸——身上，这样下游的一个反应（谷氨酸脱氢酶）才能真正把它清除掉。而 PLP 辅酶正是让这一整套化学反应成为可能的关键：它带正电的环把要断裂的那个键上的电子拉走，这也是为什么同一个辅酶还能做脱羧反应，以及（对丝氨酸/苏氨酸而言）侧链断裂。" },
  summary: {
    en: "TRANSAMINATION is the reaction that links amino acid metabolism to fat and sugar metabolism: an amino acid's amino group is transferred onto the oxo group of a 2-OXO ACID (usually pyruvate, 2-oxoglutarate or oxaloacetate), so the products are again a 2-oxo acid PLUS a newly formed amino acid. AMINOTRANSFERASES (E.C. 2.6.1., coenzyme PYRIDOXAL PHOSPHATE/PLP) catalyse this especially for Glu/Asp/Gln/Asn/Ala; the goal is to funnel every amino acid's nitrogen into ONE common carrier, usually GLUTAMATE, which oxidative deamination (previous node) then strips of its nitrogen. Almost all reactions at the amino acid α-carbon — transamination, decarboxylation, and (for Ser/Thr) retro-aldol cleavage — run through the SAME PLP mechanism: the coenzyme's aldimine first swaps its resting Schiff base with a LYSINE residue for a new one with the incoming amino acid, and the resulting conjugated, positively-charged pyridinium ring acts as an ELECTRON SINK that lets any of the three α-carbon substituents (-NH2/-H, -COOH, or -R — the book's own prose and its own diagram label the first of these differently, see the point below) leave easily — which one leaves determines whether the outcome is transamination, decarboxylation (biogenic amines), or (Ser/Thr only) cleavage to glycine (Obr. 5.3).",
    cn: "转氨基作用是连接氨基酸代谢与脂肪、糖代谢的反应：氨基酸的氨基被转移到某个2-氧代酸（通常是丙酮酸、2-氧戊二酸或草酰乙酸）的氧基上，产物又是一个2-氧代酸，外加一个新生成的氨基酸。氨基转移酶（转氨酶，E.C. 2.6.1.，辅酶为磷酸吡哆醛/PLP）尤其催化Glu、Asp、Gln、Asn、Ala的这类反应；其目的是把各个氨基酸的氮都汇集到同一个载体上——通常是谷氨酸——再由氧化脱氨基作用（见前一节）把其氮脱去。氨基酸α-碳上几乎所有的反应——转氨基、脱羧、以及（对丝氨酸/苏氨酸而言的）逆醛醇裂解——都通过同一个PLP机制进行：辅酶的醛亚胺先与酶上一个赖氨酸残基形成的静息席夫碱互换，与新进入的氨基酸形成新的席夫碱，由此产生的共轭、带正电的吡啶环起到「电子池」的作用，使α-碳上三个取代基（H、COOH或R）中的任意一个都容易离去——离去的是哪一个，决定了最终结果是转氨基、脱羧（生成生物胺）还是（仅限丝氨酸/苏氨酸）裂解生成甘氨酸（图5.3）。"
  },
  points: [
    { cz: "transaminace — obecná rovnice a cíl", en: "TRANSAMINATION is the reaction enabling amino acid metabolism to connect to FAT and SUGAR metabolism: R1-CH(NH2)-COOH + R2-C(=O)-COOH ⇌ R1-C(=O)-COOH + R2-CH(NH2)-COOH. The 2-oxo acceptor is most often PYRUVATE, 2-OXOGLUTARATE or OXALOACETATE. The GOAL of transamination is to pool the amino groups of MANY DIFFERENT amino acids into the form of a SINGLE amino acid, usually GLUTAMATE, which is then oxidatively deaminated (previous node) in the next catabolic phase.", cn: "转氨基作用是使氨基酸代谢得以与脂肪、糖代谢相连的反应：R1-CH(NH2)-COOH + R2-C(=O)-COOH ⇌ R1-C(=O)-COOH + R2-CH(NH2)-COOH。最常见的2-氧代酸受体是丙酮酸、2-氧戊二酸或草酰乙酸。转氨基作用的目的是把许多不同氨基酸的氨基汇集为单一一种氨基酸的形式——通常是谷氨酸——再在下一个分解代谢阶段被氧化脱氨（见前一节）。" },
    { cz: "aminotransferasy (E.C. 2.6.1.) — alanin-AT a glutamát-AT", en: "Transamination is undergone especially by GLU, ASP, GLN, ASN, ALA. The corresponding AMINOTRANSFERASES (transaminases, E.C. 2.6.1.) use PYRIDOXAL PHOSPHATE (PLP) as coenzyme, forming a SCHIFF BASE with amino acids (Obr. 5.3). The two most important named: ALANINE AMINOTRANSFERASE (α-amino acid + pyruvate ⇌ 2-oxo acid + ALANINE) and GLUTAMATE AMINOTRANSFERASE (α-amino acid + 2-oxoglutarate ⇌ 2-oxo acid + GLUTAMATE).", cn: "尤其容易发生转氨基作用的是Glu、Asp、Gln、Asn、Ala。相应的氨基转移酶（转氨酶，E.C. 2.6.1.）以磷酸吡哆醛（PLP）为辅酶，与氨基酸形成席夫碱（图5.3）。教材点名的两种最重要的转氨酶是：丙氨酸氨基转移酶（α-氨基酸+丙酮酸⇌2-氧代酸+丙氨酸）和谷氨酸氨基转移酶（α-氨基酸+2-氧戊二酸⇌2-氧代酸+谷氨酸）。" },
    { cz: "transaminasy — mitochondrie i cytosol; transport glutamátu", en: "Transaminases occur BOTH in MITOCHONDRIA and in the CYTOSOL of eukaryotic cells, and the two compartments COOPERATE in amino acid deamination: glutamate formed in the cytoplasm is carried INTO mitochondria by ACTIVE TRANSPORT via a specific carrier system (ch. 8.5.3) — where glutamate dehydrogenase then acts.", cn: "转氨酶在真核细胞的线粒体和细胞质中都存在，二者在氨基酸脱氨过程中协同工作：在细胞质中生成的谷氨酸经特异性载体系统（第8.5.3节）以主动转运方式被运入线粒体——谷氨酸脱氢酶正是在那里发挥作用。" },
    { cz: "PLP — vnitřní vs vnější aldimin (reakce 1)", en: "Most α-carbon reactions run on the coenzyme PYRIDOXAL PHOSPHATE (PLP, ch. 3). At REST, PLP is bound to the apoenzyme by ionic bonds PLUS a COVALENT bond to a LYSINE residue's ε-amino group, as an ALDIMINE (internal Schiff base). When an amino acid enters the active site, it binds PLP through its OWN α-amino group, DISPLACING the lysine residue from the aldimine (REACTION 1, Obr. 5.3) — forming a new, EXTERNAL aldimine.", cn: "氨基酸α-碳上的大多数反应都在辅酶磷酸吡哆醛（PLP，第3章）上进行。静息状态下，PLP通过离子键并通过与一个赖氨酸残基ε-氨基形成的共价键，以醛亚胺（分子内席夫碱）形式结合在脱辅基酶上。当氨基酸进入活性中心后，它通过自身的α-氨基与PLP结合，取代醛亚胺中的赖氨酸残基（反应1，图5.3）——形成新的分子外醛亚胺。" },
    { cz: "elektronový propad — konjugovaný pyridinový kruh", en: "The resulting external-aldimine intermediate has a chain of CONJUGATED double bonds linking the bound amino acid to the PROTONATED nitrogen of PLP's pyridine ring. The ring's POSITIVE charge pulls electrons out of this conjugated system — an ELECTRON SINK — which is what makes it easy to cleave ANY of the three remaining substituents on the amino acid's α-carbon (-NH2/-H, -COOH, or -R).", cn: "由此生成的分子外醛亚胺中间体含有一条共轭双键链，把结合的氨基酸与PLP吡啶环上被质子化的氮原子连接起来。吡啶环的正电荷从这一共轭体系中拉出电子——形成「电子池」效应——这正是α-碳上剩余三个取代基（-NH2/-H、-COOH或-R）中任意一个都容易被裂解掉的原因。" },
    { cz: "reakce 2a — ping-pong mechanismus transaminace", en: "The SIMPLEST and MOST COMMON outcome is loss of a PROTON (reaction 2a) from the α-carbon, giving — after hydrolysis — 2-OXO ACID-1 + enzyme-PYRIDOXAMINE PHOSPHATE. For the coenzyme to be REGENERATED, pyridoxamine phosphate then transaminates with a SECOND 2-oxo acid, forming a SECOND amino acid and restoring enzyme-PLP. NET RESULT (a two-half-reaction, 'PING-PONG' mechanism): α-amino acid-1 + 2-oxo acid-2 ⇌ α-amino acid-2 + 2-oxo acid-1 — i.e. transamination. Because this cycle ALONE could never eliminate a net amino group, the book stresses it must be COMBINED with glutamate's oxidative deamination to actually release ammonia.", cn: "最简单也最常见的结果是α-碳上质子的脱去（反应2a），经水解后生成2-氧代酸-1和酶-磷酸吡哆胺。为使辅酶得以再生，磷酸吡哆胺随后与第二个2-氧代酸发生转氨反应，生成第二个氨基酸并恢复为酶-PLP。净结果（两个半反应组成的「乒乓」机制）：α-氨基酸-1+2-氧代酸-2⇌α-氨基酸-2+2-氧代酸-1——即转氨基作用。由于这一循环单独运行时永远无法真正消除氨基，教材强调必须将其与谷氨酸的氧化脱氨基作用结合，才能真正释放出氨。" },
    { cz: "dekarboxylace (reakce 2b) — biogenní aminy", en: "A SUBSTANTIALLY less common transformation is DECARBOXYLATION (reaction 2b), also PLP-catalysed, giving physiologically active PRIMARY AMINES ('biogenic amines'): R-CH(NH2)-COOH → R-CH2-NH2 + CO2. Unlike deamination, this does NOT remove nitrogen from the amino acid. Example: decarboxylation of CYSTEINE and ASPARTATE gives CYSTEAMINE and β-ALANINE — both COMPONENTS OF COENZYME A.", cn: "另一种明显较不常见的转化是脱羧反应（反应2b），同样由PLP催化，生成具有生理活性的伯胺（「生物胺」）：R-CH(NH2)-COOH → R-CH2-NH2 + CO2。与脱氨不同，这一反应并不从氨基酸中去除氮。例如：半胱氨酸和天冬氨酸脱羧分别生成半胱胺和β-丙氨酸——二者都是辅酶A的组成成分。" },
    { cz: "retro-aldolové štěpení (reakce 2c) — jen Ser/Thr", en: "Cleaving the THIRD substituent (the R side chain, reaction 2c) is restricted to amino acids with a HYDROXYL on the β-carbon — SERINE and THREONINE — and has the character of an ALDOL cleavage. THREONINE ALDOLASE splits threonine into GLYCINE + ACETALDEHYDE; serine analogously gives GLYCINE + a hydroxymethyl group, carried off by the TETRAHYDROFOLATE (THF) system. NOTE the asymmetry between the three routes at this final step: hydrolysis after 2b/2c (steps 4b/4c) regenerates FREE PLP directly, releasing a 2-OXO ACID or GLYCINE respectively — but the 2a (transamination) branch does NOT regenerate free PLP at step 4a; it instead leaves the coenzyme as PYRIDOXAMINE PHOSPHATE, which only becomes free PLP again once IT transaminates with a second 2-oxo acid (see point above).", cn: "裂解第三个取代基（即R侧链，反应2c）仅限于β-碳上带有羟基的氨基酸——丝氨酸和苏氨酸——其性质相当于一次醛醇裂解。苏氨酸醛缩酶将苏氨酸裂解为甘氨酸+乙醛；丝氨酸则类似地生成甘氨酸和一个羟甲基，后者由四氢叶酸（THF）系统转运。注意三条途径在这最后一步并不对称：2b/2c途径水解后（步骤4b/4c）直接再生出游离的PLP，分别释放出2-氧代酸或甘氨酸——但2a（转氨基）途径在步骤4a并不会再生出游离PLP，而是把辅酶留在磷酸吡哆胺的形式，只有当它再与第二个2-氧代酸发生转氨反应后（见上一条要点），才会重新变回游离的PLP。" }
  ],
  terms: [
    { cz: "transaminace", en: "transamination", cn: "转氨基作用", def_en: "Transfer of an amino group from an amino acid to a 2-oxo acid (usually pyruvate, 2-oxoglutarate or oxaloacetate), producing a new amino acid and a new 2-oxo acid.", def_cn: "氨基酸的氨基转移到2-氧代酸（通常是丙酮酸、2-氧戊二酸或草酰乙酸）上的反应，生成新的氨基酸和新的2-氧代酸。" },
    { cz: "aminotransferasa (transaminasa)", en: "aminotransferase (transaminase)", cn: "氨基转移酶（转氨酶）", def_en: "E.C. 2.6.1. enzyme family catalysing transamination; uses PLP as coenzyme, forming a Schiff base with the amino acid substrate.", def_cn: "催化转氨基作用的E.C. 2.6.1.酶家族；以PLP为辅酶，与氨基酸底物形成席夫碱。" },
    { cz: "alaninaminotransferasa", en: "alanine aminotransferase (ALT)", cn: "丙氨酸氨基转移酶", def_en: "Catalyses α-amino acid + pyruvate ⇌ 2-oxo acid + alanine.", def_cn: "催化α-氨基酸+丙酮酸⇌2-氧代酸+丙氨酸。" },
    { cz: "glutamátaminotransferasa", en: "glutamate aminotransferase", cn: "谷氨酸氨基转移酶", def_en: "Catalyses α-amino acid + 2-oxoglutarate ⇌ 2-oxo acid + glutamate — the main route funnelling amino groups toward glutamate.", def_cn: "催化α-氨基酸+2-氧戊二酸⇌2-氧代酸+谷氨酸——将各氨基酸的氨基汇集到谷氨酸的主要途径。" },
    { cz: "pyridoxalfosfát (PLP)", en: "pyridoxal phosphate (PLP)", cn: "磷酸吡哆醛（PLP）", def_en: "The vitamin-B6-derived coenzyme for nearly all α-carbon reactions of amino acids; bound to the enzyme as an aldimine (Schiff base) via a lysine residue at rest.", def_cn: "维生素B6衍生的辅酶，参与氨基酸α-碳上几乎所有的反应；静息状态下经赖氨酸残基以醛亚胺（席夫碱）形式结合在酶上。" },
    { cz: "aldimin (Schiffova báze)", en: "aldimine (Schiff base)", cn: "醛亚胺（席夫碱）", def_en: "The imine bond linking PLP's aldehyde carbon to an amine; internal (to the enzyme's lysine) at rest, external (to the substrate amino acid) during catalysis.", def_cn: "连接PLP醛基碳与胺基的亚胺键；静息时为分子内（连接酶的赖氨酸），催化时为分子外（连接底物氨基酸）。" },
    { cz: "dekarboxylace (biogenní aminy)", en: "decarboxylation (biogenic amines)", cn: "脱羧反应（生物胺）", def_en: "PLP-catalysed loss of CO2 from an amino acid's carboxyl group, giving a physiologically active primary amine; does not remove nitrogen.", def_cn: "PLP催化下氨基酸羧基脱去CO2的反应，生成具有生理活性的伯胺；不去除氮。" },
    { cz: "threoninaldolasa", en: "threonine aldolase", cn: "苏氨酸醛缩酶", def_en: "Cleaves threonine (retro-aldol, PLP-dependent) into glycine + acetaldehyde; the analogous serine reaction yields glycine + a THF-carried hydroxymethyl group.", def_cn: "以逆醛醇方式（依赖PLP）将苏氨酸裂解为甘氨酸+乙醛；类似的丝氨酸反应生成甘氨酸和由THF转运的羟甲基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the resting PLP-enzyme complex, how is the coenzyme bound, and what happens the instant an amino acid substrate arrives?",
      q_cn: "在静息状态的PLP-酶复合物中，辅酶是如何结合的？氨基酸底物一旦进入会立即发生什么？",
      options: [
        "PLP floats free in the active site until the substrate arrives, with no covalent bond ever forming",
        "PLP is bound as an aldimine to a lysine residue's ε-amino group; the incoming amino acid's own α-amino group displaces the lysine, forming a new external aldimine",
        "PLP is bound only by hydrogen bonds, and the amino acid simply sits alongside it without reacting",
        "The amino acid binds to PLP's phosphate group, not to its aldehyde carbon"
      ],
      answer: 1,
      why_en: "At rest PLP is held partly by ionic bonds and partly COVALENTLY, as an aldimine (Schiff base) to a LYSINE residue's ε-amino group. The incoming amino acid's α-amino group DISPLACES that lysine, forming a new, EXTERNAL aldimine — this is reaction 1 in Obr. 5.3, the first step shared by every downstream pathway (2a/2b/2c).",
      why_cn: "静息状态下PLP部分通过离子键、部分通过共价键，以醛亚胺（席夫碱）形式结合在一个赖氨酸残基的ε-氨基上。进入的氨基酸通过自身的α-氨基取代该赖氨酸，形成新的分子外醛亚胺——这就是图5.3中的反应1，是之后所有分支途径（2a/2b/2c）共享的第一步。"
    },
    {
      type: "short",
      q_en: "Explain why the transamination 'ping-pong' cycle by itself cannot eliminate an amino group from the body's amino acid pool, and name the reaction that breaks the cycle.",
      q_cn: "解释为什么转氨基「乒乓」循环本身无法从体内氨基酸库中真正消除氨基？打破这一循环的是哪个反应？",
      accept: ["glutamate dehydrogenase", "oxidative deamination", "glutamate", "2-oxoglutarate", "谷氨酸脱氢酶", "氧化脱氨"],
      answer_en: "Transamination only moves an amino group from one carbon skeleton to another (amino acid-1 + 2-oxo acid-2 ⇌ amino acid-2 + 2-oxo acid-1) — nitrogen is conserved within the cycle, never released. The book breaks this vicious cycle by combining transamination with glutamate's oxidative deamination (catalysed by glutamate dehydrogenase), which actually releases the nitrogen as free ammonia.",
      answer_cn: "转氨基作用只是把氨基从一个碳骨架转移到另一个（氨基酸-1+2-氧代酸-2⇌氨基酸-2+2-氧代酸-1）——氮始终保留在循环之内，从未被释放。教材通过将转氨基作用与谷氨酸的氧化脱氨基作用（由谷氨酸脱氢酶催化）结合，打破了这一循环，后者才真正把氮以游离氨的形式释放出来。"
    },
    {
      type: "mcq",
      q_en: "Decarboxylation of cysteine and aspartate (reaction 2b in Obr. 5.3) produces which two compounds, and what is significant about them?",
      q_cn: "半胱氨酸和天冬氨酸的脱羧反应（图5.3反应2b）生成哪两种化合物？它们有什么重要意义？",
      options: [
        "Histamine and GABA, both neurotransmitters",
        "Cysteamine and β-alanine, both components of coenzyme A",
        "Serotonin and dopamine, both catecholamine-family signalling molecules",
        "Putrescine and cadaverine, both foul-smelling polyamines"
      ],
      answer: 1,
      why_en: "The book gives this SPECIFIC example: decarboxylation of cysteine yields CYSTEAMINE, and of aspartate yields β-ALANINE — and explicitly notes both are COMPONENTS OF COENZYME A, illustrating that decarboxylation products are 'significant for synthetic reactions,' not just waste biogenic amines.",
      why_cn: "教材给出的正是这一具体例子：半胱氨酸脱羧生成半胱胺，天冬氨酸脱羧生成β-丙氨酸——并明确指出二者都是辅酶A的组成成分，说明脱羧产物「对合成反应具有重要意义」，而不仅仅是废弃的生物胺。"
    },
    {
      type: "short",
      q_en: "Why can the 'third substituent' (reaction 2c) only be cleaved from serine and threonine, and what enzyme performs this for threonine?",
      q_cn: "为什么「第三个取代基」的裂解（反应2c）只能发生在丝氨酸和苏氨酸上？苏氨酸的这一反应由哪种酶完成？",
      accept: ["hydroxyl", "β-carbon", "beta", "threonine aldolase", "aldol", "羟基", "苏氨酸醛缩酶", "醛醇"],
      answer_en: "Reaction 2c requires a hydroxyl group on the amino acid's β-carbon (third carbon of the chain), which only serine and threonine have; the mechanism has the character of an aldol cleavage. Threonine aldolase splits threonine into glycine + acetaldehyde; serine gives glycine + a hydroxymethyl group carried by tetrahydrofolate.",
      answer_cn: "反应2c需要氨基酸的β-碳（链上第三个碳）上带有羟基，标准氨基酸中只有丝氨酸和苏氨酸具备这一条件；该机制具有醛醇裂解的性质。苏氨酸醛缩酶将苏氨酸裂解为甘氨酸+乙醛；丝氨酸则生成甘氨酸和一个由四氢叶酸转运的羟甲基。"
    }
  ],
  oral: {
    q_en: "Explain the pyridoxal phosphate mechanism that underlies transamination, decarboxylation and the serine/threonine-specific cleavage, and describe the ping-pong logic of transamination.",
    q_cn: "解释磷酸吡哆醛机制如何支撑转氨基作用、脱羧反应以及丝氨酸/苏氨酸特有的裂解反应，并描述转氨基作用的「乒乓」逻辑。",
    model_en: "Transamination is the reaction that lets amino acid metabolism plug into fat and sugar metabolism, because it transfers an amino group from an amino acid onto the oxo group of a two-oxo acid, usually pyruvate, two-oxoglutarate or oxaloacetate, leaving behind a new two-oxo acid and a newly formed amino acid. It's carried out by aminotransferases, using pyridoxal phosphate as coenzyme, and while glutamate, aspartate, glutamine, asparagine and alanine are especially prone to it, the two enzymes worth naming are alanine aminotransferase, which interconverts an alpha-amino acid and pyruvate with alanine, and glutamate aminotransferase, which does the same with two-oxoglutarate and glutamate; the whole point is to gather up the amino groups of many different amino acids into one common carrier, almost always glutamate, which is then oxidatively deaminated, as we saw before, to finally release the nitrogen. Nearly every reaction at the amino acid's alpha-carbon, in fact, runs through the same coenzyme mechanism. At rest, pyridoxal phosphate sits on the enzyme as an aldimine, a Schiff base, covalently attached to a lysine residue; when a substrate amino acid arrives, its own alpha-amino group displaces that lysine and forms a new external aldimine, and because this intermediate has a chain of conjugated double bonds running into the protonated, positively charged pyridine ring, the ring acts as an electron sink that makes it easy to break any of the three remaining bonds on the alpha-carbon. Which bond breaks decides the outcome. Losing a proton is the simplest and commonest path: after hydrolysis this gives a two-oxo acid plus the pyridoxamine form of the coenzyme, which is then re-aminated by a second two-oxo acid to regenerate pyridoxal phosphate and produce a second amino acid — overall a two-half-reaction, ping-pong exchange of amino groups between two molecules, which is exactly transamination, and precisely because it only shuffles nitrogen between molecules rather than removing it, it has to be coupled to glutamate's oxidative deamination to actually get rid of it. Losing carbon dioxide instead gives decarboxylation, a much less common route that leaves the nitrogen in place and produces a physiologically active primary amine — cysteine and aspartate, for instance, decarboxylate to cysteamine and beta-alanine, both building blocks of coenzyme A. And finally, only in serine and threonine, which carry a hydroxyl on the beta-carbon, can the third substituent, the side chain itself, be cleaved off in what is essentially an aldol cleavage: threonine aldolase splits threonine into glycine and acetaldehyde, and serine analogously gives glycine plus a hydroxymethyl group handed off to the tetrahydrofolate system.",
    checklist: [
      "Gave the general transamination equation and named the 2-oxo acid acceptors",
      "Named alanine aminotransferase and glutamate aminotransferase with their specific reactions",
      "Described PLP's resting internal aldimine (lysine) versus the substrate's external aldimine",
      "Explained the electron-sink/conjugated pyridinium ring rationale",
      "Walked through the ping-pong two-half-reaction mechanism of transamination via pyridoxamine phosphate",
      "Explained why transamination alone cannot remove nitrogen and must couple to oxidative deamination",
      "Described decarboxylation and gave the cysteamine/β-alanine → coenzyme A example",
      "Described the Ser/Thr-restricted retro-aldol cleavage and named threonine aldolase"
    ]
  }
},

{
  id: "5-2-2-1",
  book: "cz",
  topicKey: "urea-cycle",
  chapter: 5,
  section: "5.2.2",
  czTitle: "Detoxikace amoniaku, močovinový (ornithinový) cyklus — zdroje a eliminace amoniaku",
  enTitle: "Ammonia detoxification, the urea (ornithine) cycle — sources and elimination of ammonia",
  cnTitle: "氨的解毒与尿素（鸟氨酸）循环——氨的来源与消除方式",
  pages: [123],
  coverage: "full",
  coverageNote: "The opening portion of p.123 verified in full against the scan: the section 5.2.2 heading, the glutamate dehydrogenase and glutamine synthetase reactions, and the three-way classification of nitrogen-excretion strategies. The page opens directly with the bold '5.2.2' heading — it does NOT continue a sentence from p.122, so nothing is lost at that boundary. p.123 is shared with node 5-2-2-2: everything up to and including the ammonotelic/ureotelic/uricotelic paragraph is used here; the italic subheading 'Močovinový (ornithinový) cyklus' onward belongs to that node.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——氨的去路 (笔记 pp.165–167)", status: "mapped" },
  mustKnow: { en: "Free ammonia is toxic, and how an organism gets rid of it tracks how much water it has, not how closely related it is: fish just release it into the surrounding water, land animals pay ATP to build safer, water-soluble urea, and egg-laying animals pay even more to build barely-soluble uric acid — because inside a sealed egg, a solid crystal is safer than anything dissolved. Same waste nitrogen, three completely different solutions, each one dictated by the organism's water supply.", cn: "游离氨是有毒的，而一种生物怎么处理它，取决于它有多少水可用，而不是它和谁亲缘关系近：鱼类直接把氨排进周围的水里，陆生动物花 ATP 造出更安全、水溶性更好的尿素，卵生动物则花更多 ATP 造出几乎不溶的尿酸——因为在一个封闭的蛋壳里，固体晶体反而比任何溶解的东西都安全。同样是含氮废物，三种完全不同的解法，每一种都是被这种生物的水资源决定的。" },
  summary: {
    en: "Ammonia released at the α-carbon during amino-acid catabolism is toxic and must either be recaptured or excreted. Most organisms can reincorporate free ammonia into 2-oxoglutarate via GLUTAMATE DEHYDROGENASE (reductive amination, using NADPH), and GLUTAMINE SYNTHETASE plays a supporting role buffering blood ammonia by trapping it onto glutamate as glutamine. Whatever ammonia remains must be eliminated, and the strategy is organism-specific: aquatic animals simply diffuse it into the surrounding water through the gills (AMMONOTELIC), terrestrial animals convert it in the liver into UREA via a cyclic, strongly endergonic pathway (UREOTELIC), and oviparous animals (birds, reptiles) instead convert it to poorly-soluble URIC ACID, excreted as a crystal suspension so it cannot poison the closed embryonic environment of the egg (URICOTELIC).",
    cn: "氨基酸分解代谢在α碳上释放的氨具有毒性，必须被重新利用或排出体外。大多数生物可以通过谷氨酸脱氢酶（利用NADPH的还原氨基化反应）把游离氨重新固定到2-氧戊二酸上；谷氨酰胺合成酶则起辅助作用，通过把氨固定到谷氨酸上生成谷氨酰胺，从而缓冲血液中的氨浓度。剩余的氨必须被消除，具体策略因生物种类而异：水生动物通过鳃将氨直接扩散到周围水中排出（排氨型）；陆生动物在肝脏中通过一个环式、高耗能的循环将氨转化为尿素（排尿素型）；卵生动物（鸟类、爬行类）则将氨转化为溶解度很低的尿酸，以晶体悬浮液的形式排出，以免在蛋这一封闭的胚胎发育环境中造成中毒（排尿酸型）。"
  },
  points: [
    { cz: "amoniak vzniká na α-uhlíku", en: "The ammonia handled in this section is the ammonia released by CATABOLIC transformations at the α-CARBON of amino acids (i.e. from the deamination reactions covered earlier in 5.2.1) — this is the starting problem the rest of 5.2.2 solves.", cn: "本节要处理的氨，是氨基酸分解代谢在α碳原子上释放出的氨（即前面5.2.1节所述脱氨反应的产物）——这正是本节接下来要解决的问题。" },
    { cz: "glutamátdehydrogenasa — reduktivní aminace", en: "In most organisms, free ammonia can be reused (recaptured) via the reaction catalysed by GLUTAMATE DEHYDROGENASE: NH₃ + 2-oxoglutarát + NADPH + H⁺ ⇌ Glu + NADP⁺ + H₂O. Note the DIRECTION here is REDUCTIVE AMINATION (fixing NH₃ back onto a carbon skeleton using NADPH as reductant) — the reverse of the oxidative deamination reaction that released the ammonia in the first place.", cn: "在大多数生物体内，游离氨可以通过谷氨酸脱氢酶催化的反应被重新利用：NH₃ + 2-氧戊二酸 + NADPH + H⁺ ⇌ 谷氨酸 + NADP⁺ + H₂O。注意这里的方向是还原氨基化（利用NADPH作还原剂，把NH₃重新固定到碳骨架上）——正好是最初释放出这个氨的氧化脱氨反应的逆过程。" },
    { cz: "glutaminsynthetasa — omezená role", en: "GLUTAMINE SYNTHETASE plays only a LIMITED role in regulating blood ammonia concentration, catalysing: glutamát + NH₄⁺ + ATP ⇌ glutamin + ADP + Pᵢ. This consumes ATP (unlike the NADPH-driven glutamate dehydrogenase reaction) and produces glutamine, a second, non-toxic carrier of amide nitrogen.", cn: "谷氨酰胺合成酶在调节血氨浓度方面只起有限的作用，催化反应：谷氨酸 + NH₄⁺ + ATP ⇌ 谷氨酰胺 + ADP + Pᵢ。该反应消耗ATP（不同于依赖NADPH的谷氨酸脱氢酶反应），生成谷氨酰胺——另一种无毒的酰胺氮载体。" },
    { cz: "amoniak je toxický, musí být odstraněn", en: "Free ammonia that DOES form is considerably TOXIC to organisms and must be removed. The elimination strategy is NOT universal — it depends on the type of organism, giving three classes named after their nitrogen-excretion product.", cn: "生成的游离氨对生物体具有相当的毒性，必须被清除。消除方式并非对所有生物都相同——它取决于生物的种类，据此可分为以其排氮产物命名的三大类。" },
    { cz: "amonotelní — vodní živočichové", en: "AQUATIC animals can eliminate ammonia by SIMPLE DIFFUSION into the surrounding water through the GILLS — these are AMMONOTELIC organisms. This is the cheapest strategy energetically, since ammonia needs no further chemical conversion, only a large volume of surrounding water to dilute it.", cn: "水生动物可以通过鳃将氨直接单纯扩散到周围的水中来消除氨——这类生物称为排氨型（amonotelní）生物。由于氨不需要经过任何化学转化，只需依靠周围大量的水将其稀释，因此这是能量上最「便宜」的策略。" },
    { cz: "ureotelní — suchozemští živočichové", en: "TERRESTRIAL animals lack that unlimited water supply, so the liver converts ammonia into UREA by a CYCLIC and STRONGLY ENDERGONIC process — these are UREOTELIC organisms. Urea is far less toxic than free ammonia and highly water-soluble, so it can be concentrated in urine without crystallising.", cn: "陆生动物没有那样无限的水源，因此在肝脏中通过一个环式、高耗能的过程将氨转化为尿素——这类生物称为排尿素型（ureotelní）生物。尿素的毒性远低于游离氨，且水溶性很高，因此可以在尿液中被浓缩而不会形成结晶。" },
    { cz: "urikotelní — vejcorodí (ptáci, plazi)", en: "OVIPAROUS animals (birds and reptiles) evolved a THIRD mechanism during phylogeny, driven by embryonic development inside a CLOSED system (the egg): ammonia is converted to URIC ACID (urate), which — precisely BECAUSE of its poor solubility — is excreted as a SUSPENSION OF CRYSTALS rather than dissolved in liquid. These are URICOTELIC organisms. Poor solubility, normally a liability for a dissolved excretory product, is exactly what makes urate SAFE to store solid inside a sealed egg without poisoning the embryo.", cn: "卵生动物（鸟类和爬行类）在进化过程中发展出了第三种机制，这源于它们的胚胎是在蛋这一封闭系统内发育的：氨被转化为尿酸（urát），而尿酸恰恰因为溶解度差，被以晶体悬浮液的形式排出，而非溶解在液体中排出。这类生物称为排尿酸型（urikotelní）生物。溶解度差对一般的可溶排泄产物是缺点，但对尿酸而言恰恰是优点——正因如此它才能以固态形式安全储存在密闭的蛋内，而不会毒害胚胎。" },
    { cz: "tři strategie — srovnání", en: "The three strategies trade off ENERGY COST against WATER DEPENDENCE and TOXICITY of the excreted form: ammonia itself (ammonotelic) is free to make but needs abundant water and is toxic if concentrated; urea (ureotelic) costs ATP to synthesise but is safe even when concentrated in limited water; urate (uricotelic) costs the most to synthesise but needs almost no water at all and poses no osmotic or toxicity problem even solid.", cn: "这三种策略是在能量消耗与对水的依赖程度、以及排泄产物毒性之间做出的权衡：氨本身（排氨型）合成不耗能，但需要大量水，且浓缩后有毒；尿素（排尿素型）合成需要消耗ATP，但即使在有限的水中浓缩也是安全的；尿酸（排尿酸型）合成耗能最多，但几乎不需要水，即使是固态也不会造成渗透或毒性问题。" }
  ],
  terms: [
    { cz: "amoniak", en: "ammonia", cn: "氨", def_en: "Toxic nitrogenous waste product released at the α-carbon during oxidative deamination of amino acids; must be recaptured or excreted.", def_cn: "氨基酸氧化脱氨时在α碳上释放出的有毒含氮废物；必须被重新利用或排出体外。" },
    { cz: "glutamátdehydrogenasa", en: "glutamate dehydrogenase", cn: "谷氨酸脱氢酶", def_en: "Catalyses reversible reductive amination of 2-oxoglutarate to glutamate using NH₃ and NADPH; the main route for reincorporating free ammonia.", def_cn: "催化2-氧戊二酸与NH₃、NADPH之间可逆的还原氨基化反应生成谷氨酸；是重新固定游离氨的主要途径。" },
    { cz: "glutaminsynthetasa", en: "glutamine synthetase", cn: "谷氨酰胺合成酶", def_en: "ATP-dependent enzyme that amidates glutamate's side-chain carboxyl with NH₄⁺ to give glutamine, providing a secondary, limited buffer for blood ammonia.", def_cn: "依赖ATP的酶，把NH₄⁺加到谷氨酸侧链羧基上生成谷氨酰胺，为血氨提供次要的、有限的缓冲作用。" },
    { cz: "amonotelní organismy", en: "ammonotelic organisms", cn: "排氨型生物", def_en: "Organisms (mostly aquatic) that excrete nitrogen directly as ammonia via diffusion into surrounding water.", def_cn: "（多为水生）通过扩散把氮直接以氨的形式排入周围水体的生物。" },
    { cz: "ureotelní organismy", en: "ureotelic organisms", cn: "排尿素型生物", def_en: "Organisms (terrestrial vertebrates) that convert ammonia to urea in the liver via the cyclic, endergonic urea cycle before excretion.", def_cn: "（陆生脊椎动物）在肝脏中通过环式、吸能的尿素循环把氨转化为尿素后再排出的生物。" },
    { cz: "urikotelní organismy", en: "uricotelic organisms", cn: "排尿酸型生物", def_en: "Organisms (birds, reptiles) that convert ammonia to poorly soluble uric acid, excreted as crystals; adapted to development inside a closed egg.", def_cn: "（鸟类、爬行类）把氨转化为溶解度差的尿酸、以晶体形式排出的生物；这是对在封闭的蛋内发育的适应。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the poor water-solubility of uric acid make it the ideal excretory nitrogen form for birds and reptiles, rather than a drawback?",
      q_cn: "为什么尿酸溶解度差这一点，对鸟类和爬行类来说反而是理想的排氮方式，而不是缺点？",
      options: ["It allows uric acid to dissolve deep into egg fluids without harming the embryo", "It lets uric acid be stored/excreted as solid crystals with almost no water and no toxic dissolved concentration inside the closed egg", "It makes uric acid diffuse rapidly through the eggshell like ammonia does through gills", "It has nothing to do with the egg — it is simply cheaper to synthesise than urea"],
      answer: 1,
      why_en: "Because the embryo develops inside a CLOSED system (the egg) with no way to flush away a dissolved toxin, urate's poor solubility is turned into an advantage: it precipitates as a solid crystal suspension, so nitrogen waste can accumulate in the egg without ever reaching a toxic dissolved concentration. This is the opposite logic from ammonotelic and ureotelic excretion, which both rely on a LIQUID carrier (water/urine).",
      why_cn: "由于胚胎是在蛋这一封闭系统内发育，无法把溶解的毒物排出体外，尿酸溶解度差这一点反而成了优势：它以固态晶体悬浮液的形式沉淀出来，使氮废物得以在蛋内积累而不会达到有毒的溶解浓度。这与排氨型和排尿素型排泄依赖液态载体（水/尿液）的逻辑正好相反。"
    },
    {
      type: "mcq",
      q_en: "Which reaction correctly represents how most organisms recapture free ammonia onto a carbon skeleton, and what is its energy source?",
      q_cn: "下列哪一个反应正确代表了大多数生物如何把游离氨重新固定到碳骨架上？其能量来源是什么？",
      options: ["glutamát + NH₄⁺ + ATP ⇌ glutamin + ADP + Pᵢ, powered by ATP hydrolysis", "NH₃ + 2-oxoglutarát + NADPH + H⁺ ⇌ Glu + NADP⁺ + H₂O, powered by NADPH oxidation", "NH₃ + pyruvát + NADH ⇌ alanin + NAD⁺ + H₂O, powered by NADH oxidation", "NH₄⁺ + CO₂ + 2 ATP → karbamoylfosfát + 2 ADP + Pᵢ, powered by ATP hydrolysis"],
      answer: 1,
      why_en: "Glutamate dehydrogenase is the MAIN recapture route, reductively aminating 2-oxoglutarate using NADPH (not NADH) as the reductant. Option A describes glutamine synthetase, which the book explicitly calls only a LIMITED/supporting role; option D is carbamoyl phosphate synthesis, a later, committed step of the urea cycle proper, not ammonia recapture.",
      why_cn: "谷氨酸脱氢酶是氨重新捕获的主要途径，利用NADPH（而非NADH）作还原剂，将2-氧戊二酸还原氨基化。选项A描述的是谷氨酰胺合成酶，教材明确指出它只起有限的辅助作用；选项D是氨甲酰磷酸的合成，是尿素循环本身后续的限速步骤，并非氨的重新捕获。"
    },
    {
      type: "short",
      q_en: "Name the three organism classes defined by their nitrogen-excretion strategy, their excreted nitrogen form, and one organism-type example of each.",
      q_cn: "说出以排氮策略划分的三类生物、各自排出的含氮产物，以及各一个生物类型的例子。",
      accept: ["ammonotelic", "ureotelic", "uricotelic", "ammonia", "urea", "uric acid", "排氨", "排尿素", "排尿酸"],
      answer_en: "Ammonotelic organisms (aquatic animals) excrete ammonia directly by diffusion through gills; ureotelic organisms (terrestrial animals) convert ammonia to urea in the liver via the urea cycle; uricotelic organisms (birds and reptiles) convert ammonia to uric acid, excreted as crystals, an adaptation to development inside the closed egg.",
      answer_cn: "排氨型生物（水生动物）通过鳃扩散直接排出氨；排尿素型生物（陆生动物）在肝脏中通过尿素循环把氨转化为尿素；排尿酸型生物（鸟类和爬行类）把氨转化为尿酸，以晶体形式排出，这是对在封闭的蛋内发育这一特点的适应。"
    }
  ],
  oral: {
    q_en: "How is ammonia recaptured and eliminated in the body, and why do different animal groups excrete nitrogen in different chemical forms?",
    q_cn: "机体如何重新捕获并消除氨？为什么不同的动物类群会以不同的化学形式排出氮？",
    model_en: "Ammonia released at the alpha-carbon during amino acid catabolism is quite toxic, so organisms first try to recapture it rather than simply excrete it. The main recapture route is glutamate dehydrogenase, which reductively aminates two-oxoglutarate using ammonia and NADPH to regenerate glutamate; glutamine synthetase offers a second, more limited buffering route, trapping ammonium onto glutamate's side chain, at the cost of ATP, to form glutamine. Whatever ammonia cannot be recaptured has to be excreted, and the strategy chosen depends heavily on the organism's environment and life history. Aquatic animals, with effectively unlimited water around them, are ammonotelic: they simply let ammonia diffuse out through the gills into the surrounding water, which is energetically the cheapest option but only works because dilution is free. Terrestrial animals cannot rely on that, so they are ureotelic: the liver converts ammonia into urea through a cyclic, strongly endergonic pathway, spending metabolic energy to produce a far less toxic, highly soluble molecule that can be concentrated in a limited volume of urine. Birds and reptiles took a third path, uricotelic excretion, and the reason is developmental: because their embryos grow inside the closed system of an egg, with no way to flush away dissolved waste, they convert ammonia into uric acid, a compound whose very poor solubility, normally a disadvantage, becomes the solution — it precipitates as a suspension of crystals, so nitrogenous waste can accumulate throughout incubation without ever reaching a toxic concentration in solution. So the three strategies really trade off energy cost against water availability and the toxicity of the stored or excreted form.",
    checklist: ["Framed ammonia as a toxic byproduct of deamination that must be recaptured or excreted", "Gave the glutamate dehydrogenase reaction and named NADPH as reductant", "Named glutamine synthetase's limited buffering role and its ATP cost", "Defined ammonotelic/ureotelic/uricotelic with correct excreted form", "Linked each strategy to its organism type and environmental logic (water availability, egg development)", "Explained why uric acid's poor solubility is an adaptive advantage, not a flaw"]
  }
},

{
  id: "5-2-2-2",
  book: "cz",
  topicKey: "urea-cycle",
  chapter: 5,
  section: "5.2.2",
  czTitle: "Detoxikace amoniaku, močovinový (ornithinový) cyklus — mechanismus, energetika a lokalizace cyklu",
  enTitle: "Ammonia detoxification, the urea (ornithine) cycle — mechanism, energetics and compartmentalisation",
  cnTitle: "氨的解毒与尿素（鸟氨酸）循环——循环机制、能量代价与区室化",
  pages: [123, 124, 125],
  coverage: "full",
  coverageNote: "The italic subheading 'Močovinový (ornithinový) cyklus' to the end of p.123, all of p.124 (including the full enzyme-labelled Obr. 5.4 scheme), and the top of p.125 through Obr. 5.5 and its caption (before the 5.2.3 heading) verified in full against the scans, with the overall urea-formation equation and the carbamoyl-phosphate equation re-read at 2x zoomed magnification to confirm every coefficient. p.123's opening (ammonia sources, GDH, glutamine synthetase, the three excretion strategies) belongs to node 5-2-2-1, not here.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——尿素（鸟氨酸）循环 (笔记 pp.165–167)", status: "mapped" },
  mustKnow: { en: "The urea cycle costs 4 ATP-equivalents per urea, and the equation only shows 3 — the fourth is hidden in the cost of regenerating AMP back to ATP after argininosuccinate synthetase, exactly the kind of energy cost that looks smaller than it is if you only count what is written. And unlike the citrate cycle, this one is not confined to one compartment: half runs in the mitochondria, half in the cytosol, so ornithine and citrulline have to cross the mitochondrial membrane every single turn.", cn: "尿素循环每生成一个尿素要花掉相当于 4 个 ATP，而方程式里只写出了 3 个——第四个藏在精氨基琥珀酸合成酶反应之后把 AMP 再生回 ATP 的代价里，这正是那种『只数写出来的部分就会低估真实成本』的典型例子。而且和柠檬酸循环不同，这个循环不局限在一个区室里：一半在线粒体里跑，一半在细胞质里跑，所以鸟氨酸和瓜氨酸每转一圈都要穿过线粒体膜一次。" },
  summary: {
    en: "The urea cycle disposes of ammonia by building it, together with a second nitrogen from aspartate, into UREA. Carbamoyl phosphate is made first, at a cost of 2 ATP; it then condenses with ORNITHINE to give CITRULLINE, which crosses from mitochondria to cytosol to react with ASPARTATE (costing a further ATP-equivalent, but as ATP→AMP) and form ARGININOSUCCINATE; a lyase then splits off FUMARATE to give ARGININE, and ARGINASE hydrolyses arginine to UREA, regenerating ORNITHINE for another turn. The cycle is energetically expensive (4 ATP-equivalents per urea) and, unlike the citrate cycle, is split across TWO compartments, with the fumarate released in the cytosol feeding straight back into aspartate regeneration via reactions shared with the citrate cycle.",
    cn: "尿素循环通过把氨、连同来自天冬氨酸的第二个氮原子一起构建进尿素分子中来清除氨。氨甲酰磷酸首先生成，消耗2个ATP；随后它与鸟氨酸缩合生成瓜氨酸，瓜氨酸从线粒体转运到细胞质中与天冬氨酸反应（再消耗一个ATP当量，但形式是ATP→AMP），生成精氨基琥珀酸；裂解酶随后从中裂解出延胡索酸生成精氨酸，精氨酸再被精氨酸酶水解生成尿素，同时再生出鸟氨酸供下一轮循环使用。该循环在能量上代价高昂（每生成1分子尿素消耗4个ATP当量），而且与柠檬酸循环不同，它分布在两个区室中进行，细胞质中释放出的延胡索酸通过与柠檬酸循环共用的反应直接反哺天冬氨酸的再生。"
  },
  points: [
    { cz: "karbamoylfosfát — první, endergonický krok", en: "The FIRST phase of the cycle forms CARBAMOYL PHOSPHATE from NH₄⁺, CO₂ and 2 ATP: NH₄⁺ + CO₂ + 2 ATP → H₂N-C(=O)-O~P + 2 ADP + Pᵢ + H⁺. This is a STRONGLY ENDERGONIC reaction catalysed by CARBAMOYL PHOSPHATE SYNTHETASE (E.C. 6.3.4.16), located in the MITOCHONDRIAL MATRIX and ACTIVATED by N-ACETYLGLUTAMATE (itself made in the matrix by acetylation of glutamate).", cn: "循环的第一阶段由NH₄⁺、CO₂和2个ATP生成氨甲酰磷酸：NH₄⁺ + CO₂ + 2 ATP → H₂N-C(=O)-O~P + 2 ADP + Pᵢ + H⁺。这是一个强吸能反应，由氨甲酰磷酸合成酶（E.C. 6.3.4.16）催化，该酶定位于线粒体基质中，并被N-乙酰谷氨酸激活（后者本身也在基质中由谷氨酸乙酰化生成）。" },
    { cz: "reakce 1: ornithin + karbamoylfosfát → citrulin", en: "Carbamoyl phosphate then reacts with the amino acid ORNITHINE — the reaction that gives the cycle its alternative name — catalysed by ORNITHINE CARBAMOYLTRANSFERASE (E.C. 2.1.3.3.). The book calls this 'reaction 1' of the cycle proper (note: this is enzyme box 2 in Obr. 5.4's own numbering, since the figure separately numbers carbamoyl phosphate synthase as its enzyme '1' — the text's 'reaction N' labels run one behind the figure's boxed enzyme numbers). The product is CITRULLINE, which then leaves the mitochondria for the CYTOPLASM.", cn: "氨甲酰磷酸随后与氨基酸鸟氨酸反应——该循环的别名「鸟氨酸循环」正是由此而来——由鸟氨酸氨甲酰转移酶（E.C. 2.1.3.3.）催化。教材把这一步称为循环本身的「反应1」（注意：在图5.4自身的编号中，这其实是2号酶框，因为图中把氨甲酰磷酸合成酶单独编为「1」号酶——正文的「反应N」标号比图中方框编号少1）。产物是瓜氨酸，随后离开线粒体进入细胞质。" },
    { cz: "reakce 2: citrulin + aspartát → argininsukcinát", en: "In the cytoplasm, citrulline reacts with ASPARTATE to form ARGININOSUCCINATE ('reaction 2'), catalysed by ARGININOSUCCINATE SYNTHETASE (E.C. 6.3.4.5). This is the step that brings in UREA'S SECOND NITROGEN ATOM: aspartate is the donor. Energetically this step is unusual — it uses ATP but releases AMP + PPᵢ (not ADP + Pᵢ); because regenerating ATP from AMP costs TWO further phosphorylations, this single ATP is equivalent to consuming 2 ATP.", cn: "在细胞质中，瓜氨酸与天冬氨酸反应生成精氨基琥珀酸（「反应2」），由精氨基琥珀酸合成酶（E.C. 6.3.4.5）催化。这一步引入了尿素的第二个氮原子：天冬氨酸就是氮的供体。这一步在能量上比较特殊——它消耗ATP，但释放的是AMP + PPᵢ（而非ADP + Pᵢ）；由于把AMP重新变回ATP需要再经过两次磷酸化，这一个ATP在能量上相当于消耗了2个ATP。" },
    { cz: "argininsukcinátlyasa → fumarát + arginin", en: "A LYASE (argininosuccinate lyase) then cleaves argininosuccinate, releasing FUMARATE and ARGININE. The fumarate leaves the urea cycle proper and is picked up by reactions shared with the citrate cycle (see point below); the arginine carries both nitrogen atoms destined for urea.", cn: "裂解酶（精氨基琥珀酸裂解酶）随后裂解精氨基琥珀酸，释放出延胡索酸和精氨酸。延胡索酸离开尿素循环本体，被与柠檬酸循环共用的反应所接收（见下文）；精氨酸则携带着最终构成尿素的两个氮原子。" },
    { cz: "reakce 4: arginasa → močovina + regenerace ornithinu", en: "The cycle closes with ARGINASE (E.C. 3.5.3.1, the text's 'reaction 4'), which HYDROLYSES arginine into UREA (released as the excretory product) and regenerates ORNITHINE — which is then transported back into the mitochondria to start another turn. Unlike the citrate cycle, the urea cycle is NOT confined to one organelle: it requires transport of intermediates (ornithine in, citrulline out) across the mitochondrial membrane (Obr. 5.5).", cn: "循环由精氨酸酶（E.C. 3.5.3.1，正文中的「反应4」）闭合，该酶水解精氨酸生成尿素（作为排泄产物释放）并再生出鸟氨酸——鸟氨酸随后被转运回线粒体，开始新一轮循环。与柠檬酸循环不同，尿素循环并不局限于单一细胞器：它需要中间产物跨线粒体膜转运（鸟氨酸转入，瓜氨酸转出）（图5.5）。" },
    { cz: "energetika — 4 ATP na 1 molekulu močoviny", en: "The urea cycle is energetically demanding: a TOTAL of 4 ATP-EQUIVALENTS are spent per mole of urea — 2 ATP at carbamoyl phosphate synthesis (→2 ADP), and 1 ATP at argininosuccinate synthesis whose AMP product costs a further 2 ATP-equivalents to regenerate. Written as a single balanced equation, only 3 ATP MOLECULES appear directly: 2 NH₄⁺ + HCO₃⁻ + 3 ATP + H₂O → urea + 2 ADP + 4 Pᵢ + AMP + 2 H⁺ — the 4th ATP-equivalent is 'hidden' in the cost of recycling that AMP back to ATP, so a student must not just count the 3 ATP written in the equation.", cn: "尿素循环在能量上代价高昂：每生成1摩尔尿素总共消耗4个ATP当量——氨甲酰磷酸合成消耗2个ATP（生成2 ADP），精氨基琥珀酸合成消耗1个ATP，但其AMP产物的再生还需再花费2个ATP当量。写成一个配平方程时，直接出现的ATP分子只有3个：2 NH₄⁺ + HCO₃⁻ + 3 ATP + H₂O → 尿素 + 2 ADP + 4 Pᵢ + AMP + 2 H⁺——第4个ATP当量「隐藏」在把AMP重新变回ATP的代价之中，因此不能只数方程里写出的3个ATP。" },
    { cz: "propojení s citrátovým cyklem (fumarát → aspartát)", en: "Obr. 5.4 also draws FOUR further enzymes (6-9) that link the urea cycle back to the CITRATE CYCLE and regenerate the aspartate consumed in reaction 2: FUMARATE HYDRATASE (6) converts the released fumarate to MALATE; MALATE DEHYDROGENASE (7, NAD⁺/NADH) converts it to OXALOACETATE; ASPARTATE TRANSAMINASE [PLP] (9) transfers an amino group from GLUTAMATE onto oxaloacetate to regenerate ASPARTATE (releasing 2-oxoglutarate); and GLUTAMATE DEHYDROGENASE (8, NAD⁺/NADH) can refill that glutamate pool from 2-oxoglutarate plus a further NH₄⁺. Obr. 5.5 shows this same fumarate/malate pool is SHARED with, and can shuttle directly into, the mitochondrial citrate cycle — a fumarate/aspartate shuttle sometimes called the 'Krebs bicycle' in the wider literature (a name this book itself does not use), linking urea-cycle nitrogen disposal to central carbon metabolism.", cn: "图5.4还画出了另外四个酶（6-9），把尿素循环与柠檬酸循环连接起来，并再生反应2中消耗掉的天冬氨酸：延胡索酸水合酶（6）把释放出的延胡索酸转化为苹果酸；苹果酸脱氢酶（7，NAD⁺/NADH）把苹果酸转化为草酰乙酸；天冬氨酸转氨酶[PLP]（9）把谷氨酸上的氨基转给草酰乙酸，再生出天冬氨酸（同时释放2-氧戊二酸）；谷氨酸脱氢酶（8，NAD⁺/NADH）则可以用2-氧戊二酸加另一个NH₄⁺来补充这个谷氨酸库。图5.5进一步显示，这个延胡索酸/苹果酸库与线粒体内的柠檬酸循环是共用的，可以直接穿梭进入柠檬酸循环——这种延胡索酸/天冬氨酸穿梭在更广泛的文献中有时被称为「Krebs自行车」（本教材并未使用这一名称），把尿素循环的排氮功能与中心碳代谢连接了起来。" },
    { cz: "citrulin a ornithin — struktury", en: "Obr. 5.4 draws out the structures along the way: ORNITHINE is the C5 diamino acid (2,5-diaminopentanoic acid) — structurally lysine minus one methylene group; CITRULLINE is the same backbone with the δ-amino group carbamoylated to a UREIDO group (-NH-C(=O)-NH₂); UREA itself is the simple diamide H₂N-C(=O)-NH₂ released by arginase.", cn: "图5.4把沿途各中间体的结构都画了出来：鸟氨酸是C5二氨基酸（2,5-二氨基戊酸）——相当于赖氨酸少一个亚甲基；瓜氨酸的骨架与鸟氨酸相同，只是δ-氨基被氨甲酰化为脲基（-NH-C(=O)-NH₂）；尿素本身则是精氨酸酶释放出的简单二酰胺 H₂N-C(=O)-NH₂。" }
  ],
  terms: [
    { cz: "karbamoylfosfátsynthetasa (E.C. 6.3.4.16)", en: "carbamoyl phosphate synthetase", cn: "氨甲酰磷酸合成酶", def_en: "Mitochondrial-matrix enzyme forming carbamoyl phosphate from NH₄⁺, CO₂ and 2 ATP; activated by N-acetylglutamate.", def_cn: "线粒体基质中的酶，由NH₄⁺、CO₂和2个ATP生成氨甲酰磷酸；受N-乙酰谷氨酸激活。" },
    { cz: "ornithinkarbamoyltransferasa (E.C. 2.1.3.3)", en: "ornithine carbamoyltransferase", cn: "鸟氨酸氨甲酰转移酶", def_en: "Condenses carbamoyl phosphate with ornithine to give citrulline; gives the cycle its alternative name.", def_cn: "把氨甲酰磷酸与鸟氨酸缩合生成瓜氨酸；该循环的别名「鸟氨酸循环」即由此而来。" },
    { cz: "argininsukcinátsynthetasa (E.C. 6.3.4.5)", en: "argininosuccinate synthetase", cn: "精氨基琥珀酸合成酶", def_en: "Condenses citrulline with aspartate, using ATP → AMP + PPᵢ, to give argininosuccinate; brings in urea's second nitrogen.", def_cn: "把瓜氨酸与天冬氨酸缩合（消耗ATP，生成AMP + PPᵢ）生成精氨基琥珀酸；引入尿素的第二个氮原子。" },
    { cz: "argininsukcinátlyasa", en: "argininosuccinate lyase", cn: "精氨基琥珀酸裂解酶", def_en: "Cleaves argininosuccinate into arginine and fumarate.", def_cn: "把精氨基琥珀酸裂解为精氨酸和延胡索酸。" },
    { cz: "arginasa (E.C. 3.5.3.1)", en: "arginase", cn: "精氨酸酶", def_en: "Hydrolyses arginine into urea and ornithine, closing the cycle.", def_cn: "水解精氨酸生成尿素和鸟氨酸，使循环闭合。" },
    { cz: "N-acetylglutamát", en: "N-acetylglutamate", cn: "N-乙酰谷氨酸", def_en: "Allosteric activator of carbamoyl phosphate synthetase, made in the mitochondrial matrix by acetylation of glutamate.", def_cn: "氨甲酰磷酸合成酶的别构激活剂，在线粒体基质中由谷氨酸乙酰化生成。" },
    { cz: "citrulin", en: "citrulline", cn: "瓜氨酸", def_en: "Non-proteinogenic amino acid formed from ornithine + carbamoyl phosphate; carbamoylated at the δ-amino group.", def_cn: "由鸟氨酸+氨甲酰磷酸生成的非蛋白氨基酸；δ-氨基被氨甲酰化。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Where does the SECOND nitrogen atom of urea come from, and at what point does it enter the cycle?",
      q_cn: "尿素的第二个氮原子来自哪里？它在循环的哪一步进入？",
      options: ["From a second molecule of NH₄⁺, added directly to citrulline", "From aspartate, which condenses with citrulline to form argininosuccinate", "From glutamine's amide group, added to arginine", "From carbamoyl phosphate, which donates both nitrogens"],
      answer: 1,
      why_en: "Carbamoyl phosphate supplies urea's FIRST nitrogen (from NH₄⁺). The SECOND comes from ASPARTATE, which condenses with citrulline (catalysed by argininosuccinate synthetase) to form argininosuccinate — aspartate's own nitrogen ends up in the arginine, and then the urea, produced downstream.",
      why_cn: "氨甲酰磷酸提供了尿素的第一个氮原子（来自NH₄⁺）。第二个氮原子来自天冬氨酸，它与瓜氨酸缩合（由精氨基琥珀酸合成酶催化）生成精氨基琥珀酸——天冬氨酸自身的氮原子最终进入精氨酸，再进入下游生成的尿素。"
    },
    {
      type: "mcq",
      q_en: "The urea cycle is said to cost 4 ATP-equivalents per mole of urea, yet the balanced overall equation shows only 3 ATP. How is this reconciled?",
      q_cn: "尿素循环据称每摩尔尿素消耗4个ATP当量，但配平的总方程式中只出现3个ATP。这该如何解释？",
      options: ["The 4th ATP is a rounding error and should be ignored", "One of the 3 ATP is converted to AMP + PPᵢ rather than ADP + Pᵢ, and regenerating ATP from AMP costs 2 further phosphorylations, so that single ATP is energetically equivalent to 2", "The 4th ATP is spent on transporting ornithine and citrulline across the mitochondrial membrane", "Arginase itself consumes 1 additional ATP not shown in the equation"],
      answer: 1,
      why_en: "Carbamoyl phosphate synthesis spends 2 ATP → 2 ADP (a normal 1-phosphate step each). Argininosuccinate synthetase spends 1 ATP but releases AMP + PPᵢ instead of ADP + Pᵢ — and because AMP needs TWO phosphorylation steps to become ATP again (AMP→ADP→ATP), that one molecule is energetically equivalent to 2 ATP. So 2 + 2 = 4 ATP-equivalents overall, even though only 3 ATP molecules appear in the written equation.",
      why_cn: "氨甲酰磷酸合成消耗2个ATP变为2个ADP（每次都是正常的单磷酸化步骤）。精氨基琥珀酸合成酶消耗1个ATP，但释放的是AMP + PPᵢ而非ADP + Pᵢ——由于AMP需要经过两次磷酸化才能变回ATP（AMP→ADP→ATP），这一个分子在能量上相当于2个ATP。所以总计2+2=4个ATP当量，尽管方程式里直接写出的ATP分子只有3个。"
    },
    {
      type: "short",
      q_en: "List, in order, the four named enzymes of the urea cycle 'proper' (after carbamoyl phosphate synthesis) and the intermediate each one produces.",
      q_cn: "按顺序列出尿素循环「本体」（氨甲酰磷酸合成之后）的四个酶及其各自生成的中间体。",
      accept: ["ornithine carbamoyltransferase", "citrulline", "argininosuccinate synthetase", "argininosuccinate", "argininosuccinate lyase", "fumarate", "arginine", "arginase", "urea", "鸟氨酸氨甲酰转移酶", "精氨基琥珀酸合成酶", "精氨基琥珀酸裂解酶", "精氨酸酶"],
      answer_en: "(1) Ornithine carbamoyltransferase: ornithine + carbamoyl phosphate → citrulline. (2) Argininosuccinate synthetase: citrulline + aspartate → argininosuccinate. (3) Argininosuccinate lyase: argininosuccinate → arginine + fumarate. (4) Arginase: arginine + H₂O → urea + ornithine, which restarts the cycle.",
      answer_cn: "(1) 鸟氨酸氨甲酰转移酶：鸟氨酸+氨甲酰磷酸→瓜氨酸。(2) 精氨基琥珀酸合成酶：瓜氨酸+天冬氨酸→精氨基琥珀酸。(3) 精氨基琥珀酸裂解酶：精氨基琥珀酸→精氨酸+延胡索酸。(4) 精氨酸酶：精氨酸+H₂O→尿素+鸟氨酸，鸟氨酸再开始新一轮循环。"
    },
    {
      type: "short",
      q_en: "Explain how the fumarate released by argininosuccinate lyase is reconnected to the urea cycle's nitrogen economy.",
      q_cn: "解释精氨基琥珀酸裂解酶释放出的延胡索酸是如何被重新连接回尿素循环的氮代谢中的。",
      accept: ["fumarate hydratase", "malate", "malate dehydrogenase", "oxaloacetate", "transaminase", "aspartate", "延胡索酸水合酶", "苹果酸", "草酰乙酸", "转氨酶", "天冬氨酸"],
      answer_en: "Fumarate is hydrated to malate (fumarate hydratase), oxidised to oxaloacetate (malate dehydrogenase, NAD⁺), and then transaminated using glutamate (aspartate transaminase, PLP-dependent) to regenerate ASPARTATE — the same molecule consumed at the argininosuccinate synthetase step — while releasing 2-oxoglutarate, which glutamate dehydrogenase can reconvert to glutamate using a further NH₄⁺.",
      answer_cn: "延胡索酸先水合为苹果酸（延胡索酸水合酶），再氧化为草酰乙酸（苹果酸脱氢酶，NAD⁺依赖），随后利用谷氨酸进行转氨（天冬氨酸转氨酶，PLP依赖）再生出天冬氨酸——正是精氨基琥珀酸合成酶那一步所消耗的同一分子——同时释放2-氧戊二酸，谷氨酸脱氢酶可以再利用一个NH₄⁺把2-氧戊二酸转化回谷氨酸。"
    }
  ],
  oral: {
    q_en: "Walk through the urea cycle from carbamoyl phosphate to urea, naming every enzyme and intermediate, and explain its energy cost and compartmentalisation.",
    q_cn: "请从氨甲酰磷酸开始，逐步讲解尿素循环直到生成尿素，说出每一个酶和中间体的名称，并解释其能量代价与区室化特点。",
    model_en: "The urea cycle disposes of ammonia by building it into urea together with a second nitrogen contributed by aspartate. It begins in the mitochondrial matrix, where carbamoyl phosphate synthetase, activated by N-acetylglutamate, condenses ammonium and carbon dioxide at the cost of two ATP to give carbamoyl phosphate, a strongly endergonic first step. Carbamoyl phosphate then reacts with ornithine, the amino acid that gives the cycle its alternative name, in a reaction catalysed by ornithine carbamoyltransferase, producing citrulline; this is the point where the cycle's product first crosses from the mitochondria into the cytoplasm. In the cytoplasm, citrulline condenses with aspartate, catalysed by argininosuccinate synthetase, to give argininosuccinate — and this is where the urea's second nitrogen enters, donated by aspartate. This step is energetically unusual: it consumes ATP but releases AMP plus pyrophosphate rather than ADP plus phosphate, and because regenerating ATP from AMP takes two further phosphorylation steps, this single ATP is effectively worth two. Argininosuccinate lyase then cleaves argininosuccinate into arginine, which carries both nitrogens onward, and fumarate, which leaves the cycle proper. Finally arginase hydrolyses arginine into urea, the excreted product, and regenerates ornithine, which is transported back into the mitochondria to start another turn. Altogether the cycle spends four ATP-equivalents per molecule of urea — two at carbamoyl phosphate synthesis and effectively two more at the argininosuccinate step — even though the balanced overall equation, two ammonium plus bicarbonate plus three ATP plus water yielding urea, two ADP, four phosphate, AMP and two protons, shows only three ATP molecules directly, because the fourth is hidden in recycling that AMP. Unlike the citrate cycle, the urea cycle is not confined to a single organelle: ornithine and citrulline must shuttle across the mitochondrial membrane, and the fumarate released in the cytoplasm is not wasted — it is hydrated to malate, oxidised to oxaloacetate, and transaminated with glutamate to regenerate the aspartate the cycle needs, while the citrate cycle itself can pick up the same fumarate and malate pool directly, tying nitrogen disposal to central carbon metabolism.",
    checklist: ["Named carbamoyl phosphate synthetase, its activator N-acetylglutamate, and the 2-ATP cost", "Gave all four cycle-proper enzymes in order: OTC, argininosuccinate synthetase, argininosuccinate lyase, arginase", "Identified ornithine, citrulline, argininosuccinate, arginine, urea as the successive intermediates", "Explained aspartate as the second nitrogen donor", "Explained why the ATP→AMP step is worth 2 ATP-equivalents and gave the total of 4 per urea", "Gave the balanced overall equation", "Described the mitochondria/cytosol compartmentalisation and ornithine/citrulline transport", "Connected released fumarate back to aspartate regeneration and the citrate cycle"]
  }
},

{
  id: "5-2-3-1",
  book: "cz",
  topicKey: "amino-acid-degradation",
  chapter: 5,
  section: "5.2.3",
  czTitle: "Odbourávání uhlíkové kostry a vzájemné přeměny aminokyselin — glukogenní/ketogenní klasifikace; 1) Přeměna na acetylkoenzym A přes pyruvát (C3-rodina)",
  enTitle: "Degradation of the carbon skeleton and mutual interconversion of amino acids — glucogenic/ketogenic classification; 1) Conversion to acetyl-CoA via pyruvate (C3 family)",
  cnTitle: "氨基酸碳骨架的降解与相互转化——生糖/生酮分类；一、经丙酮酸转化为乙酰辅酶A（C3族）",
  pages: [125, 126],
  coverage: "full",
  coverageNote: "The 5.2.3 heading and its two framing paragraphs (bottom of p.125), the two-way glucogenic/ketogenic classification paragraph, and all of p.126 (family-1 diagram, text and the cysteine-sulfinate structural scheme) verified in full against the scans. p.126 is shared with node 5-2-3-2: everything through the cysteine/pyruvate structural diagram is used here; the heading line '2. Přeměna na acetylkoenzym A přes acetoacetylkoenzym A' and its opening sentence, at the very foot of p.126, belong to that node.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——生糖/生酮氨基酸分类 (笔记 pp.168–170)", status: "mapped" },
  mustKnow: { en: "Glucogenic versus ketogenic is not a two-box sort — it is decided by which single molecule an amino acid's carbon skeleton ends up as: pyruvate (glucogenic, can run gluconeogenesis) or acetyl-CoA (ketogenic, cannot). And because several amino acids' skeletons split into two separate fragments, several land in both boxes at once — glucogenic and ketogenic are properties of a pathway's endpoint, not mutually exclusive categories.", cn: "生糖 vs 生酮不是简单的二选一分类——它是由氨基酸碳骨架最终变成哪一个分子决定的：丙酮酸（生糖，能跑糖异生）还是乙酰辅酶A（生酮，不能）。而且因为有些氨基酸的骨架会拆成两个独立的片段，好几种氨基酸会同时落进两个框里——生糖和生酮是一条通路终点的属性，不是互相排斥的类别。" },
  summary: {
    en: "After deamination strips the amino group (5.2.1) and transamination hands the carbon skeleton on as a 2-oxo acid, that 2-oxo acid is usually shortened by one carbon via oxidative decarboxylation to an acyl-CoA. The book limits itself to BASIC PRINCIPLES rather than every individual pathway, and starts by sorting amino acids into GLUCOGENIC (final product pyruvate, feeding gluconeogenesis/glycogen) versus KETOGENIC (final product acetyl-CoA, feeding ketone-body formation once citrate-cycle capacity is exceeded) — noting that several amino acids are BOTH. It then details the biochemically most important entry point, family 1: ALANINE, SERINE, GLYCINE, THREONINE and CYSTEINE/CYSTINE, all funnelled to PYRUVATE and onward to ACETYL-CoA.",
    cn: "脱氨（5.2.1节）去除氨基之后，转氨作用把碳骨架以2-氧酸的形式传递下去，这个2-氧酸通常再经氧化脱羧减少一个碳原子，生成酰基辅酶A。教材只讲基本原理，而不逐一讲解每种氨基酸的具体通路，首先把氨基酸分为生糖氨基酸（终产物为丙酮酸，可用于糖异生/糖原合成）和生酮氨基酸（终产物为乙酰辅酶A，一旦超过柠檬酸循环的代谢容量就用于生成酮体）两大类——并指出有几种氨基酸兼具两种性质。随后详细介绍了生物化学上最重要的一个入口，即第一族：丙氨酸、丝氨酸、甘氨酸、苏氨酸和胱氨酸/半胱氨酸，全部汇入丙酮酸，再进入乙酰辅酶A。"
  },
  points: [
    { cz: "od 2-oxokyseliny k acylkoenzymu A", en: "After transamination, the resulting 2-OXO ACID can be the substrate of OXIDATIVE DECARBOXYLATION (a general catabolic reaction, cross-referenced to chap. 7.8.1), which shortens the original amino acid's chain by ONE CARBON and yields an ACYL-CoA — the entry point into the schemes that follow.", cn: "转氨之后生成的2-氧酸可以作为氧化脱羧反应（一个通用的分解代谢反应，教材交叉引用了7.8.1节）的底物，该反应使原氨基酸的碳链缩短一个碳原子，生成酰基辅酶A——这正是后续各条通路的入口。" },
    { cz: "rozsah omezen na principy", en: "The book explicitly scopes itself down here: a full account of every amino acid's individual degradation is 'necessary for understanding fairly common metabolic disorders, their diagnosis and therapy' but 'clearly exceeds the framework of these lecture notes' — so what follows is BASIC PRINCIPLES AND SCHEMES only, not exhaustive mechanism.", cn: "教材在此明确限定了讲解范围：逐一讲解每种氨基酸具体降解过程「对于理解相当常见的代谢疾病及其诊断和治疗是必要的」，但「显然超出了本讲义的范围」——因此接下来只讲基本原理与图式，而非详尽机制。" },
    { cz: "glukogenní vs. ketogenní — definice", en: "Amino acids split into two basic groups by final carbon-skeleton product: GLUCOGENIC (glucoplastic) amino acids end in PYRUVATE — feeding a starved organism these drives GLUCONEOGENESIS and GLYCOGEN formation; KETOGENIC (ketoplastic) amino acids are degraded all the way to ACETYL-CoA, which under the same conditions EXCEEDS the citrate cycle's metabolic capacity and drives KETONE-BODY formation (examples given: Leu, Phe, Tyr, Ile, Trp).", cn: "按碳骨架最终产物，氨基酸分为两大基本类别：生糖（糖异生型）氨基酸最终生成丙酮酸——给饥饿机体补充这类氨基酸会促进糖异生和糖原合成；生酮（酮体型）氨基酸则一路降解到乙酰辅酶A，在同样条件下这会超出柠檬酸循环的代谢容量，从而促使酮体生成（教材举例：Leu、Phe、Tyr、Ile、Trp）。" },
    { cz: "čistě ketogenní pouze Leu — srov. Obr. 5.6", en: "The book states explicitly that of its own ketogenic examples, 'PURELY ketogenic is however only Leu' — but this sentence's example list does not mention lysine at all. Cross-referencing the family-2 pathway diagram (node 5-2-3-2) and the master summary Obr. 5.6 (node 5-2-3-4) shows LYSINE follows exactly the same acetyl-CoA-only route as leucine, with no glucogenic branch drawn anywhere for it — so by the book's own diagrams, lysine belongs alongside leucine as purely ketogenic even though this opening sentence's 'e.g.' list does not name it. Treat this paragraph's list as illustrative, not exhaustive; the pathway diagrams are the more complete source for exact classification.", cn: "教材明确指出，在它举出的生酮氨基酸例子中，「但纯生酮的只有Leu」——但这句话所举的例子列表根本没有提到赖氨酸。对照第二族的代谢通路图（节点5-2-3-2）和总结图5.6（节点5-2-3-4）可以看到，赖氨酸走的正是与亮氨酸完全相同的、只通向乙酰辅酶A的路线，没有为它画出任何生糖支路——因此按教材自己的图示，赖氨酸其实应该和亮氨酸一样被归为纯生酮氨基酸，尽管这句话「例如」列出的清单没有点出它的名字。这段文字的列表应视为举例说明而非详尽清单；具体分类应以代谢通路图为准。" },
    { cz: "dvojí povahy: Ile, Phe, Trp, Tyr", en: "ISOLEUCINE, PHENYLALANINE, TRYPTOPHAN and TYROSINE are explicitly named as BOTH glucogenic and ketogenic — later pages show the mechanistic basis: Ile splits into an acetyl-CoA fragment and a propionyl-CoA/succinyl-CoA fragment; Phe/Tyr degradation branches into BOTH fumarate (glucogenic) AND acetoacetate (ketogenic); and family 1's own diagram shows Trp (in parentheses) feeding alanine → pyruvate as a secondary route, alongside its main ketogenic route via glutaryl-CoA (family 2).", cn: "异亮氨酸、苯丙氨酸、色氨酸和酪氨酸被明确指出兼具生糖和生酮两种性质——后面几页展示了其机制基础：异亮氨酸分裂为一个乙酰辅酶A片段和一个丙酰辅酶A/琥珀酰辅酶A片段；苯丙氨酸/酪氨酸的降解分支同时生成延胡索酸（生糖）和乙酰乙酸（生酮）；而第一族自身的图中把色氨酸（加括号）画成经丙氨酸→丙酮酸这条次要路线的输入，与其经戊二酰辅酶A（第二族）的主要生酮路线并存。" },
    { cz: "rodina 1 — přehled cesty", en: "FAMILY 1 (C3 family) funnels FIVE amino acids to PYRUVATE, then onward to ACETYL-CoA — the book calls acetyl-CoA the SINGLE MOST IMPORTANT entry point into the citrate cycle overall. The five routes: THREONINE → GLYCINE → SERINE → pyruvate; (TRYPTOPHAN, parenthesised, minor route) → ALANINE → pyruvate; CYSTINE → CYSTEINE → pyruvate.", cn: "第一族（C3族）把五种氨基酸汇入丙酮酸，再进一步汇入乙酰辅酶A——教材称乙酰辅酶A是整个柠檬酸循环所有入口中最重要的一个。这五条路线是：苏氨酸→甘氨酸→丝氨酸→丙酮酸；（色氨酸，带括号，次要路线）→丙氨酸→丙酮酸；胱氨酸→半胱氨酸→丙酮酸。" },
    { cz: "alanin, serin, threonin — mechanismy", en: "ALANINE is degraded to pyruvate by DIRECT TRANSAMINATION with 2-oxoglutarate. SERINE is dehydrated and deaminated to pyruvate by SERINE DEHYDRATASE (alternatively serine can instead be degraded to glycine). THREONINE is cleaved by THREONINE ALDOLASE into glycine + acetaldehyde; ALTERNATIVELY, dehydration of threonine gives 2-OXOBUTYRATE, which is either transaminated to 2-aminobutyrate or aerobically decarboxylated to PROPIONATE (this is threonine's link to the succinyl-CoA family, node 5-2-3-3). The glycine ⇌ serine interconversion itself is catalysed by SERINE HYDROXYMETHYLTRANSFERASE.", cn: "丙氨酸通过与2-氧戊二酸直接转氨而降解为丙酮酸。丝氨酸由丝氨酸脱水酶催化脱水并脱氨生成丙酮酸（丝氨酸也可以改为降解生成甘氨酸）。苏氨酸被苏氨酸醛缩酶裂解为甘氨酸+乙醛；此外，苏氨酸脱水还可生成2-氧丁酸，后者既可转氨生成2-氨基丁酸，也可有氧脱羧生成丙酸（这正是苏氨酸与琥珀酰辅酶A族（节点5-2-3-3）相连的路线）。甘氨酸⇌丝氨酸的相互转化本身由丝氨酸羟甲基转移酶催化。" },
    { cz: "cystein/cystin → pyruvát (kys. cysteinsulfinová)", en: "CYSTINE and CYSTEINE can reach pyruvate by more than one mechanism; the book details the route via CYSTEINE SULFINIC ACID: cysteine (HOOC-CH(NH₂)-CH₂-SH) is OXIDISED (NAD⁺ → NADH+H⁺) to cysteine sulfinic acid (HOOC-CH(NH₂)-CH₂-SO₂H); TRANSAMINATION converts this to β-SULFINYLPYRUVATE (HOOC-CO-CH₂-SO₂H); and DESULFURATION finally removes the sulfinyl group to give PYRUVATE (CH₃-CO-COOH) directly.", cn: "胱氨酸和半胱氨酸可以通过不止一种机制到达丙酮酸；教材详细讲解的是经半胱氨酸亚磺酸这条路线：半胱氨酸（HOOC-CH(NH₂)-CH₂-SH）被氧化（NAD⁺ → NADH+H⁺）生成半胱氨酸亚磺酸（HOOC-CH(NH₂)-CH₂-SO₂H）；转氨作用将其转化为β-亚磺酰丙酮酸（HOOC-CO-CH₂-SO₂H）；最后脱硫作用去除亚磺酰基，直接生成丙酮酸（CH₃-CO-COOH）。" }
  ],
  terms: [
    { cz: "glukogenní aminokyseliny", en: "glucogenic amino acids", cn: "生糖氨基酸", def_en: "Amino acids whose carbon skeleton degrades to pyruvate (or another gluconeogenic precursor), able to drive gluconeogenesis/glycogen synthesis.", def_cn: "碳骨架降解生成丙酮酸（或其他糖异生前体）、能够驱动糖异生/糖原合成的氨基酸。" },
    { cz: "ketogenní aminokyseliny", en: "ketogenic amino acids", cn: "生酮氨基酸", def_en: "Amino acids degraded to acetyl-CoA, feeding ketone-body formation once citrate-cycle capacity is exceeded.", def_cn: "降解生成乙酰辅酶A的氨基酸，一旦超出柠檬酸循环的代谢容量即用于生成酮体。" },
    { cz: "serindehydratasa", en: "serine dehydratase", cn: "丝氨酸脱水酶", def_en: "Dehydrates and deaminates serine directly to pyruvate.", def_cn: "使丝氨酸脱水并脱氨，直接生成丙酮酸。" },
    { cz: "threoninaldolasa", en: "threonine aldolase", cn: "苏氨酸醛缩酶", def_en: "Cleaves threonine into glycine and acetaldehyde.", def_cn: "把苏氨酸裂解为甘氨酸和乙醛。" },
    { cz: "serinhydroxymethyltransferasa", en: "serine hydroxymethyltransferase", cn: "丝氨酸羟甲基转移酶", def_en: "Interconverts glycine and serine.", def_cn: "催化甘氨酸与丝氨酸之间的相互转化。" },
    { cz: "kyselina cysteinsulfinová", en: "cysteine sulfinic acid", cn: "半胱氨酸亚磺酸", def_en: "Oxidation product of cysteine's thiol group; transaminated then desulfurated to pyruvate.", def_cn: "半胱氨酸巯基的氧化产物；经转氨、再脱硫后生成丙酮酸。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which final product defines the 'glucogenic' classification of an amino acid, per this book's opening definition?",
      q_cn: "按本教材开篇的定义，「生糖」氨基酸是以哪种终产物来界定的？",
      options: ["Acetyl-CoA", "Pyruvate", "Oxaloacetate", "2-oxoglutarate"],
      answer: 1,
      why_en: "The book's opening two-way split defines glucogenic amino acids by a final product of PYRUVATE (feeding gluconeogenesis/glycogen in a starved organism); ketogenic amino acids are defined by a final product of acetyl-CoA. The five-family breakdown that follows then refines this into specific TCA entry points, but the book's own headline definition names pyruvate.",
      why_cn: "教材开篇的二分法用「终产物为丙酮酸」来定义生糖氨基酸（在饥饿机体中可驱动糖异生/糖原合成）；生酮氨基酸则以「终产物为乙酰辅酶A」来定义。随后的五族划分把这一定义细化为具体的TCA循环入口，但教材自己给出的总定义用的是丙酮酸。"
    },
    {
      type: "mcq",
      q_en: "Cross-checking the book's opening classification paragraph against its own pathway diagrams (family 2 and Obr. 5.6), which amino acid is under-represented in the opening paragraph's list of 'purely ketogenic' examples?",
      q_cn: "把教材开篇分类段落与其自身的通路图（第二族及图5.6）对照后可以发现，哪种氨基酸在开篇「纯生酮」举例清单中被遗漏了？",
      options: ["Leucine", "Lysine", "Isoleucine", "Tryptophan"],
      answer: 1,
      why_en: "The opening paragraph names only Leu as purely ketogenic, without mentioning lysine at all in that sentence. But the family-2 diagram and Obr. 5.6 both trace lysine's carbon skeleton only as far as glutaryl-CoA → acetoacetyl-CoA → acetyl-CoA, with no glucogenic branch drawn — exactly the criterion used to call leucine 'purely' ketogenic. The diagrams, being more complete, should be trusted over the opening paragraph's illustrative 'e.g.' list.",
      why_cn: "开篇段落只点名Leu为纯生酮氨基酸，那句话完全没有提到赖氨酸。但第二族的通路图和总结图5.6都显示赖氨酸的碳骨架只通向戊二酰辅酶A→乙酰乙酰辅酶A→乙酰辅酶A，没有画出任何生糖支路——这正是判定亮氨酸「纯」生酮的同一标准。图示更为完整，应以图示为准，而非开篇那个仅作举例的「例如」清单。"
    },
    {
      type: "short",
      q_en: "Describe the three-step conversion of cysteine to pyruvate via cysteine sulfinic acid, naming the cofactor and the two enzymatic steps after oxidation.",
      q_cn: "描述半胱氨酸经半胱氨酸亚磺酸转化为丙酮酸的三个步骤，说出氧化步骤所用的辅因子以及氧化之后的两个酶促步骤。",
      accept: ["NAD+", "oxidation", "transamination", "desulfuration", "sulfinylpyruvate", "转氨", "脱硫", "亚磺酸"],
      answer_en: "Cysteine's thiol is first oxidised (NAD⁺ → NADH+H⁺) to cysteine sulfinic acid; this is transaminated to β-sulfinylpyruvate; and desulfuration then removes the sulfinyl group to give pyruvate directly.",
      answer_cn: "半胱氨酸的巯基先被氧化（NAD⁺ → NADH+H⁺）生成半胱氨酸亚磺酸；再经转氨作用生成β-亚磺酰丙酮酸；最后脱硫作用去除亚磺酰基，直接生成丙酮酸。"
    }
  ],
  oral: {
    q_en: "How does this book classify amino acids as glucogenic versus ketogenic, and how are the family-1 amino acids degraded to pyruvate?",
    q_cn: "本教材如何把氨基酸分为生糖与生酮两类？第一族氨基酸是如何降解为丙酮酸的？",
    model_en: "Once deamination has stripped the amino group and transamination has handed the carbon skeleton on as a two-oxo acid, that acid is typically shortened by one carbon through oxidative decarboxylation into an acyl-CoA, and what happens next depends on the side chain. The book deliberately limits itself to basic principles here rather than every individual disorder-relevant pathway, and starts from a simple two-way split: glucogenic amino acids end up as pyruvate, and feeding them to a starving organism drives gluconeogenesis and glycogen formation, while ketogenic amino acids are degraded all the way to acetyl-CoA, which under the same starved conditions exceeds the citrate cycle's capacity and is diverted into ketone bodies; leucine is named as the only purely ketogenic amino acid, though the pathway diagrams later show lysine belongs in that category too. Isoleucine, phenylalanine, tryptophan and tyrosine are explicitly both. The first and biochemically most important of the five detailed families funnels five amino acids through pyruvate to acetyl-CoA, which the book calls the single most significant entry into the citrate cycle. Alanine reaches pyruvate by direct transamination with two-oxoglutarate. Serine is dehydrated and deaminated to pyruvate by serine dehydratase, or alternatively degraded to glycine, and glycine and serine interconvert via serine hydroxymethyltransferase. Threonine can be cleaved by threonine aldolase into glycine and acetaldehyde, or alternatively dehydrated to two-oxobutyrate, which is either transaminated to two-aminobutyrate or aerobically decarboxylated to propionate, linking threonine onward to the succinyl-CoA family. Tryptophan makes a minor contribution here too, feeding alanine and so pyruvate, alongside its main route to acetyl-CoA via glutaryl-CoA. And cysteine and cystine reach pyruvate through cysteine sulfinic acid: cysteine's thiol is oxidised using NAD-plus to cysteine sulfinic acid, transamination converts that to beta-sulfinylpyruvate, and desulfuration finally strips the sulfinyl group to leave pyruvate itself.",
    checklist: ["Explained the two-oxo-acid/oxidative-decarboxylation starting point", "Gave the glucogenic (pyruvate) vs ketogenic (acetyl-CoA) definitions with their physiological consequence", "Named leucine as 'purely' ketogenic per the text, and flagged lysine's matching pathway", "Listed the four amino acids named as both glucogenic and ketogenic", "Traced all 5 family-1 amino acids (Ala, Ser, Gly, Thr, Cys/cystine) to pyruvate with their enzymes", "Gave the 3-step cysteine sulfinic acid route to pyruvate"]
  }
},

{
  id: "5-2-3-2",
  book: "cz",
  topicKey: "amino-acid-degradation",
  chapter: 5,
  section: "5.2.3",
  czTitle: "Odbourávání uhlíkové kostry a vzájemné přeměny aminokyselin — 2) Přeměna na acetylkoenzym A přes acetoacetylkoenzym A",
  enTitle: "Degradation of the carbon skeleton and mutual interconversion of amino acids — 2) Conversion to acetyl-CoA via acetoacetyl-CoA",
  cnTitle: "氨基酸碳骨架的降解与相互转化——二、经乙酰乙酰辅酶A转化为乙酰辅酶A",
  pages: [126, 127],
  coverage: "full",
  coverageNote: "The foot of p.126 (the '2. Přeměna...' heading and opening sentence) through all of p.127 down to (not including) the '3. Přeměna na 2-oxoglutarát' heading verified in full against the scans, including the full pathway diagram and the aromatic-amino-acid hormone-precursor paragraph. p.126's earlier material (family 1) belongs to node 5-2-3-1; p.127's final paragraph and diagram (family 3, proline) belong to node 5-2-3-3.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——生糖/生酮氨基酸分类 (笔记 pp.168–170)", status: "mapped" },
  mustKnow: { en: "Phenylalanine is essential and tyrosine is not, for exactly one reaction: phenylalanine hydroxylase converts one into the other, so the body can always make tyrosine as long as it has phenylalanine, but never the reverse. And leucine is 'purely' ketogenic for a structural reason, not an arbitrary label: its breakdown produces acetyl-CoA and acetoacetate directly, with no branch anywhere that could feed back into glucose.", cn: "苯丙氨酸是必需氨基酸而酪氨酸不是，原因就是这一个反应：苯丙氨酸羟化酶把前者变成后者，所以只要体内有苯丙氨酸，就总能造出酪氨酸，但反过来不行。而亮氨酸『纯』生酮也是有结构原因的，不是随便贴的标签：它的降解产物直接就是乙酰辅酶A和乙酰乙酸，中途没有任何一个分支能反哺回葡萄糖。" },
  summary: {
    en: "A second group of five amino acids — PHENYLALANINE, TYROSINE, TRYPTOPHAN, LYSINE and LEUCINE — also reaches ACETYL-CoA, but via ACETOACETATE/ACETOACETYL-CoA rather than pyruvate, making this route KETOGENIC. Phenylalanine is first hydroxylated to tyrosine (explaining why phenylalanine is essential but tyrosine is not); tyrosine's breakdown branches to give BOTH fumarate (glucogenic) and acetoacetate (ketogenic), which is the mechanistic reason Phe/Tyr count as both; tryptophan takes a long route to glutaryl-CoA and then acetoacetyl-CoA; leucine goes directly to acetyl-CoA AND acetoacetate; and lysine reaches glutaryl-CoA via 2-oxoadipate. Phe, Tyr and Trp are additionally flagged as precursors of major hormones (catecholamines and thyroid hormones).",
    cn: "另有五种氨基酸——苯丙氨酸、酪氨酸、色氨酸、赖氨酸和亮氨酸——也会到达乙酰辅酶A，但走的是经乙酰乙酸/乙酰乙酰辅酶A而非丙酮酸的路线，因此这条路线是生酮性质的。苯丙氨酸首先被羟化为酪氨酸（这解释了为什么苯丙氨酸是必需氨基酸而酪氨酸不是）；酪氨酸的降解分支同时生成延胡索酸（生糖）和乙酰乙酸（生酮），这正是苯丙氨酸/酪氨酸兼具两种性质的机制基础；色氨酸经过较长的路线到达戊二酰辅酶A，再到乙酰乙酰辅酶A；亮氨酸则直接生成乙酰辅酶A和乙酰乙酸；赖氨酸经2-氧己二酸到达戊二酰辅酶A。此外，苯丙氨酸、酪氨酸和色氨酸还被特别指出是重要激素（儿茶酚胺类和甲状腺激素）的前体。"
  },
  points: [
    { cz: "5 aminokyselin → acetoacetylkoenzym A", en: "A FURTHER FIVE amino acids — PHENYLALANINE, TYROSINE, LYSINE, TRYPTOPHAN and LEUCINE — are degraded to acetyl-CoA via the route through ACETOACETATE, resp. ACETOACETYL-CoA. Since acetoacetate/acetoacetyl-CoA are themselves ketone-body-related, this whole family is the KETOGENIC counterpart to family 1's pyruvate route.", cn: "另有五种氨基酸——苯丙氨酸、酪氨酸、赖氨酸、色氨酸和亮氨酸——通过经乙酰乙酸（或乙酰乙酰辅酶A）这条路线降解为乙酰辅酶A。由于乙酰乙酸/乙酰乙酰辅酶A本身就与酮体相关，这整个家族正是与第一族丙酮酸路线相对应的生酮路线。" },
    { cz: "Phe → Tyr (fenylalaninhydroxylasa)", en: "PHENYLALANINE is hydroxylated by PHENYLALANINE HYDROXYLASE to TYROSINE on this pathway. The book explicitly draws the exam-relevant conclusion from this single reaction: it 'explains the ESSENTIAL character of phenylalanine and the DISPENSABILITY (non-essential status) of tyrosine' — tyrosine is only conditionally dispensable because it can always be made from (essential) phenylalanine.", cn: "苯丙氨酸在此通路中被苯丙氨酸羟化酶羟化为酪氨酸。教材明确从这一个反应中得出了考试相关的结论：它「解释了苯丙氨酸的必需性以及酪氨酸的可替代性（非必需地位）」——酪氨酸之所以是条件非必需氨基酸，正是因为它总能由（必需氨基酸）苯丙氨酸生成。" },
    { cz: "Tyr → fumarát + acetoacetát (dvojí povaha)", en: "TYROSINE is transaminated to p-HYDROXYPHENYLPYRUVATE, which is OXIDATIVELY DECARBOXYLATED and, after further reactions, HYDROLYTICALLY CLEAVED into FUMARIC ACID and ACETOACETATE. This single pathway branching into TWO different end-products — one glucogenic (fumarate, a TCA intermediate), one ketogenic (acetoacetate) — is the concrete mechanism behind classifying tyrosine (and, via the shared first step, phenylalanine) as 'both glucogenic and ketogenic'.", cn: "酪氨酸经转氨生成对羟苯丙酮酸，后者被氧化脱羧，再经过一系列后续反应，最终被水解裂解为延胡索酸和乙酰乙酸。这一条通路分裂出两种不同终产物——一种是生糖的（延胡索酸，一种TCA循环中间体），一种是生酮的（乙酰乙酸）——正是把酪氨酸（以及经由共同的第一步、苯丙氨酸）归类为「既生糖又生酮」的具体机制。" },
    { cz: "Trp → glutarylkoenzym A → acetoacetylkoenzym A", en: "TRYPTOPHAN takes the most complex route of the five: in a 'relatively complex sequence' it is DECARBOXYLATED, OXIDISED, HYDROLYSED, DEAMINATED and AGAIN OXIDATIVELY DECARBOXYLATED all the way to GLUTARYL-CoA, which after DEHYDROGENATION, DECARBOXYLATION and ADDITION OF WATER gives the final product, ACETOACETYL-CoA.", cn: "色氨酸走的是五者中最复杂的路线：经过一个「相对复杂的反应序列」——脱羧、氧化、水解、脱氨，再次氧化脱羧——一路生成戊二酰辅酶A，后者再经脱氢、脱羧和加水，生成最终产物乙酰乙酰辅酶A。" },
    { cz: "aromatické AK → hormony", en: "The book flags that PHENYLALANINE, TYROSINE and TRYPTOPHAN (all three aromatic amino acids on this pathway) are physiologically very significant beyond energy metabolism: they are PRECURSORS of hormones — NORADRENALINE, ADRENALINE, DOPAMINE (from Tyr), TRIIODOTHYRONINE and THYROXINE (thyroid hormones, also from Tyr) — and other substances bearing an aromatic ring.", cn: "教材特别指出，苯丙氨酸、酪氨酸和色氨酸（这条通路上的三种芳香族氨基酸）在能量代谢之外还具有非常重要的生理意义：它们是激素的前体——去甲肾上腺素、肾上腺素、多巴胺（均来自酪氨酸）、三碘甲状腺原氨酸和甲状腺素（甲状腺激素，同样来自酪氨酸）——以及其他带芳香环的物质的前体。" },
    { cz: "Leu → acetylkoenzym A + acetoacetát přímo", en: "LEUCINE is degraded, after TRANSAMINATION and OXIDATIVE DECARBOXYLATION, directly to BOTH acetyl-CoA AND acetoacetate — with no intermediate glucogenic branch anywhere. This is exactly why the book calls leucine (uniquely, among its named examples) 'purely' ketogenic.", cn: "亮氨酸经转氨和氧化脱羧后，直接生成乙酰辅酶A和乙酰乙酸两种产物——中间完全没有任何生糖支路。这正是教材（在其举出的例子中唯一）把亮氨酸称为「纯」生酮氨基酸的原因。" },
    { cz: "Lys → 2-oxoadipát → glutarylkoenzym A", en: "For LYSINE, TWO ALTERNATIVE metabolic pathways exist for degradation down to 2-OXOADIPIC ACID, and both converge on the same product, GLUTARYL-CoA — the same intermediate tryptophan reaches by its own longer route. From glutaryl-CoA, a further series of reactions (paralleling tryptophan's ending) leads on to ACETYL-CoA. As noted in node 5-2-3-1, the diagram gives lysine NO glucogenic outlet at all, matching leucine's 'purely ketogenic' status even though the opening classification paragraph does not name lysine explicitly.", cn: "对于赖氨酸，代谢中存在两条可相互替代的降解途径，二者都通向2-氧己二酸，并进一步汇聚为同一产物——戊二酰辅酶A（与色氨酸经由自己较长路线到达的中间体相同）。从戊二酰辅酶A出发，经过进一步的一系列反应（与色氨酸的终点平行），最终到达乙酰辅酶A。正如节点5-2-3-1所指出的，该图完全没有为赖氨酸画出任何生糖出口，这与亮氨酸「纯生酮」的地位相符，尽管开篇分类段落并未明确点出赖氨酸的名字。" }
  ],
  terms: [
    { cz: "fenylalaninhydroxylasa", en: "phenylalanine hydroxylase", cn: "苯丙氨酸羟化酶", def_en: "Hydroxylates phenylalanine to tyrosine; its reaction is why Phe is essential and Tyr is not.", def_cn: "把苯丙氨酸羟化为酪氨酸；这一反应正是苯丙氨酸必需而酪氨酸非必需的原因。" },
    { cz: "kyselina p-hydroxyfenylpyrohroznová", en: "p-hydroxyphenylpyruvate", cn: "对羟苯丙酮酸", def_en: "Transamination product of tyrosine, oxidatively decarboxylated en route to fumarate + acetoacetate.", def_cn: "酪氨酸的转氨产物，在通往延胡索酸+乙酰乙酸的路上被氧化脱羧。" },
    { cz: "glutarylkoenzym A", en: "glutaryl-CoA", cn: "戊二酰辅酶A", def_en: "Shared intermediate reached by both tryptophan and lysine degradation, converted onward to acetoacetyl-CoA.", def_cn: "色氨酸和赖氨酸降解共同到达的中间体，进一步转化为乙酰乙酰辅酶A。" },
    { cz: "acetoacetát", en: "acetoacetate", cn: "乙酰乙酸", def_en: "A ketone body precursor; the branch-point product shared by Tyr, Leu and (via glutaryl-CoA) Trp/Lys degradation.", def_cn: "酮体前体；酪氨酸、亮氨酸以及（经戊二酰辅酶A）色氨酸/赖氨酸降解共同的分支点产物。" },
    { cz: "kyselina 2-oxoadipová", en: "2-oxoadipic acid", cn: "2-氧己二酸", def_en: "Intermediate common to both alternative lysine-degradation pathways, feeding onward into glutaryl-CoA.", def_cn: "赖氨酸两条可替代降解途径共同的中间体，进一步汇入戊二酰辅酶A。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the mechanistic reason tyrosine (and phenylalanine) is classified as BOTH glucogenic and ketogenic?",
      q_cn: "酪氨酸（和苯丙氨酸）被归类为既生糖又生酮的机制原因是什么？",
      options: ["Tyrosine is first converted to alanine, then separately to leucine", "Tyrosine's degradation pathway hydrolytically splits into two separate end-products: fumaric acid (glucogenic) and acetoacetate (ketogenic)", "Tyrosine can be directly converted to glucose without any intermediate", "Tyrosine has two side chains, one metabolised by each pathway independently from the start"],
      answer: 1,
      why_en: "The book traces one continuous pathway — transamination to p-hydroxyphenylpyruvate, oxidative decarboxylation, then a series of reactions ending in hydrolytic cleavage — that splits at its very last step into fumaric acid AND acetoacetate simultaneously. Fumarate is a citrate-cycle (glucogenic) intermediate; acetoacetate is ketogenic. One pathway, two products, is the mechanism — not two independent side chains.",
      why_cn: "教材描述的是同一条连续通路——转氨生成对羟苯丙酮酸，氧化脱羧，再经一系列反应，最终水解裂解——在其最后一步同时分裂生成延胡索酸和乙酰乙酸。延胡索酸是柠檬酸循环（生糖）中间体，乙酰乙酸是生酮的。「一条通路、两种产物」才是机制所在，而不是两条从一开始就独立的支路。"
    },
    {
      type: "short",
      q_en: "Why does the book say the phenylalanine hydroxylase reaction 'explains the essential character of phenylalanine and the dispensability of tyrosine'?",
      q_cn: "为什么教材说苯丙氨酸羟化酶这一反应「解释了苯丙氨酸的必需性以及酪氨酸的可替代性」？",
      accept: ["essential", "non-essential", "conditionally dispensable", "can be made from phenylalanine", "必需", "非必需", "可由苯丙氨酸生成"],
      answer_en: "Because tyrosine can always be synthesised endogenously from phenylalanine via this one hydroxylation reaction, the body never needs a dietary source of tyrosine as long as phenylalanine (which the body cannot synthesise at all) is available — making tyrosine only conditionally dispensable, while phenylalanine itself remains a true dietary essential.",
      answer_cn: "因为酪氨酸总是可以通过这一步羟化反应由苯丙氨酸在体内合成，所以只要有苯丙氨酸（人体完全无法自行合成）可用，身体就永远不需要从饮食中额外获取酪氨酸——这使酪氨酸只是条件性非必需氨基酸，而苯丙氨酸本身则仍然是真正的膳食必需氨基酸。"
    },
    {
      type: "mcq",
      q_en: "Which intermediate is shared by both tryptophan's and lysine's degradation pathways, according to the diagram?",
      q_cn: "根据图示，色氨酸和赖氨酸的降解途径共同经过哪个中间体？",
      options: ["p-hydroxyphenylpyruvate", "Glutaryl-CoA", "Methylmalonyl-CoA", "2-oxoglutarate"],
      answer: 1,
      why_en: "Both tryptophan (via a long decarboxylation/oxidation/hydrolysis/deamination sequence) and lysine (via 2-oxoadipic acid, from either of two alternative pathways) converge on glutaryl-CoA, which is then processed onward (dehydrogenation, decarboxylation, water addition) to the family's shared final product, acetoacetyl-CoA.",
      why_cn: "色氨酸（经过一段较长的脱羧/氧化/水解/脱氨序列）和赖氨酸（经2-氧己二酸，由两条可替代途径中的任一条）都汇聚到戊二酰辅酶A，随后再经进一步加工（脱氢、脱羧、加水）生成本族共同的最终产物——乙酰乙酰辅酶A。"
    }
  ],
  oral: {
    q_en: "Describe how phenylalanine, tyrosine, tryptophan, leucine and lysine are each degraded to acetyl-CoA via acetoacetyl-CoA, and explain the biochemical basis for tyrosine's dual glucogenic/ketogenic classification.",
    q_cn: "描述苯丙氨酸、酪氨酸、色氨酸、亮氨酸和赖氨酸各自如何经乙酰乙酰辅酶A降解为乙酰辅酶A，并解释酪氨酸兼具生糖/生酮性质的生化机制。",
    model_en: "A second family of five amino acids also converges on acetyl-CoA, but by way of acetoacetate and acetoacetyl-CoA rather than pyruvate, which is why this whole route counts as ketogenic. Phenylalanine is hydroxylated by phenylalanine hydroxylase to tyrosine, and the book draws out the exam-relevant consequence directly: this single reaction is why phenylalanine is a dietary essential amino acid while tyrosine is not, since the body can always make tyrosine from phenylalanine. Tyrosine itself is then transaminated to p-hydroxyphenylpyruvate, oxidatively decarboxylated, and after further reactions hydrolytically split into two separate products at once, fumaric acid and acetoacetate — fumarate being a citrate-cycle, glucogenic intermediate and acetoacetate being ketogenic, which is exactly the mechanism behind classifying both tyrosine and phenylalanine as glucogenic and ketogenic together. Tryptophan takes the longest route of the five, being decarboxylated, oxidised, hydrolysed, deaminated and oxidatively decarboxylated again until it reaches glutaryl-CoA, which is then dehydrogenated, decarboxylated and hydrated to give the family's shared endpoint, acetoacetyl-CoA. All three of these aromatic amino acids matter well beyond energy metabolism, since they are precursors of major hormones — noradrenaline, adrenaline and dopamine, and the thyroid hormones triiodothyronine and thyroxine. Leucine, by contrast, takes a direct route: after transamination and oxidative decarboxylation it yields both acetyl-CoA and acetoacetate straight away, with no glucogenic branch at all, which is why the book calls it purely ketogenic. Lysine reaches the same glutaryl-CoA intermediate as tryptophan, by either of two alternative pathways that both pass through two-oxoadipic acid, and glutaryl-CoA is then processed onward to acetyl-CoA — and since no glucogenic outlet is ever drawn for lysine either, it really belongs alongside leucine as purely ketogenic, even though the book's own opening classification paragraph happens not to name it.",
    checklist: ["Named all five amino acids in this family and their shared ketogenic route via acetoacetyl-CoA", "Gave the Phe→Tyr hydroxylation and its essential/dispensable consequence", "Explained tyrosine's split into fumarate + acetoacetate as the basis of its dual classification", "Traced tryptophan's route through glutaryl-CoA to acetoacetyl-CoA", "Named the hormone precursor role of Phe/Tyr/Trp", "Described leucine's direct, purely-ketogenic route", "Traced lysine's two alternative routes to 2-oxoadipate/glutaryl-CoA and noted its unstated purely-ketogenic status"]
  }
},

{
  id: "5-2-3-3",
  book: "cz",
  topicKey: "amino-acid-degradation",
  chapter: 5,
  section: "5.2.3",
  czTitle: "Odbourávání uhlíkové kostry a vzájemné přeměny aminokyselin — 3) Přeměna na 2-oxoglutarát (C5-rodina); 4) Přeměna na sukcinylkoenzym A",
  enTitle: "Degradation of the carbon skeleton and mutual interconversion of amino acids — 3) Conversion to 2-oxoglutarate (C5 family); 4) Conversion to succinyl-CoA",
  cnTitle: "氨基酸碳骨架的降解与相互转化——三、转化为2-氧戊二酸（C5族）；四、转化为琥珀酰辅酶A",
  pages: [127, 128],
  coverage: "full",
  coverageNote: "The '3. Přeměna na 2-oxoglutarát' heading (mid p.127) through the end of the succinyl-CoA diagram on p.128 (before the '5. Přeměna na oxalacetát' heading, which opens p.129) verified in full against the scans, including a 2-3x zoomed re-read of the semialdehyde sentence and the methionine-pathway diagram box at the top of p.128 to confirm exact wording after an apparent internal inconsistency was spotted on first read. p.127's first two paragraphs (family 2, aromatic amino acids) belong to node 5-2-3-2.",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——生糖/生酮氨基酸分类 (笔记 pp.168–170)", status: "mapped" },
  mustKnow: { en: "Five very different-looking amino acids — arginine, histidine, glutamate, glutamine, proline — all funnel down to exactly one shared intermediate, glutamate, before entering the citrate cycle as 2-oxoglutarate. That kind of convergence is the whole point of drawing these families: it is not really twenty separate degradation pathways, it is a handful of entry points that many amino acids share.", cn: "五种看起来毫不相干的氨基酸——精氨酸、组氨酸、谷氨酸、谷氨酰胺、脯氨酸——最终都汇聚到同一个中间产物：谷氨酸，然后以 2-氧戊二酸的身份进入柠檬酸循环。这种汇聚正是划分这些『家族』的意义所在：这不是二十条各自独立的降解通路，而是少数几个入口，被许多氨基酸共用。" },
  summary: {
    en: "Family 3 gathers ARGININE, HISTIDINE, GLUTAMATE, GLUTAMINE and PROLINE, all converging on GLUTAMATE and then 2-OXOGLUTARATE as a direct entry into the citrate cycle; proline is oxidised to Δ1-pyrroline-5-carboxylate, in equilibrium with glutamate γ-semialdehyde, and histidine is deaminated to urocanate and then hydrolysed to glutamate. (A sentence at the top of p.128 states this semialdehyde is degraded to acetoacetyl-CoA — this directly contradicts the section's own heading, its diagram, and standard biochemistry, all of which agree the semialdehyde becomes glutamate; the diagram is treated as reliable, the sentence as an apparent slip.) Family 4 sends METHIONINE, ISOLEUCINE and VALINE to SUCCINYL-CoA via the shared intermediate METHYLMALONYL-CoA, with propionyl-CoA as an earlier common intermediate; the diagram's own methionine-pathway box is labelled '2-oxoglutarát', which is very likely a mislabelling of 2-oxobutyrate, since 2-oxoglutarate cannot chemically decarboxylate to propionyl-CoA.",
    cn: "第三族包括精氨酸、组氨酸、谷氨酸、谷氨酰胺和脯氨酸，全部汇聚到谷氨酸、再到2-氧戊二酸，直接进入柠檬酸循环；脯氨酸被氧化为Δ1-吡咯啉-5-羧酸，与谷氨酸γ-半醛处于平衡状态，组氨酸则脱氨生成尿刊酸，再水解生成谷氨酸。（第128页顶部有一句话说这个半醛会降解生成乙酰乙酰辅酶A——这与本节自己的标题、自己的图示以及标准生物化学知识都直接矛盾，三者都一致认为该半醛会变成谷氨酸；本笔记以图示为准，将该句视为疑似笔误。）第四族把甲硫氨酸、异亮氨酸和缬氨酸通过共同中间体甲基丙二酰辅酶A送入琥珀酰辅酶A，丙酰辅酶A是更早的共同中间体；图中甲硫氨酸通路的方框标注为「2-氧戊二酸」，这很可能是2-氧丁酸的标注错误，因为2-氧戊二酸在化学上无法脱羧生成丙酰辅酶A。"
  },
  points: [
    { cz: "rodina 3 — pět AK → glutamát → 2-oxoglutarát", en: "ARGININE, HISTIDINE, GLUTAMIC ACID, GLUTAMINE and PROLINE all enter the citrate cycle via 2-OXOGLUTARATE (α-ketoglutarate); its IMMEDIATE precursor is GLUTAMATE. This is the book's C5 family.", cn: "精氨酸、组氨酸、谷氨酸、谷氨酰胺和脯氨酸都经2-氧戊二酸（α-酮戊二酸）进入柠檬酸循环；其直接前体是谷氨酸。这就是教材所说的C5族。" },
    { cz: "prolin → Δ1-pyrrolin-5-karboxylát ⇌ semialdehyd", en: "PROLINE is first OXIDISED by PROLINE DEHYDROGENASE to Δ1-PYRROLINE-5-CARBOXYLIC ACID, which exists in EQUILIBRIUM with the open-chain γ-SEMIALDEHYDE OF GLUTAMIC ACID — the same semialdehyde that ARGININE's degradation also passes through (per the diagram's arrow from arginin directly to this semialdehyde box).", cn: "脯氨酸先被脯氨酸脱氢酶氧化为Δ1-吡咯啉-5-羧酸，后者与开链形式的谷氨酸γ-半醛处于平衡状态——精氨酸的降解也会经过同一个半醛（图中从精氨酸直接指向这个半醛方框的箭头可以看出）。" },
    { cz: "semialdehyd → glutamát (ne acetoacetylkoenzym A)", en: "A sentence at the very top of p.128 reads (verified at 2-3x zoom): 'the resulting semialdehyde is, in a series of reactions, completely degraded all the way to ACETOACETYL-CoA and is also an intermediate of arginine's conversion.' This directly CONTRADICTS three independent things on the very same page: the section's own heading ('3. Conversion to 2-OXOGLUTARATE'), the diagram immediately below the sentence (which draws arginine + proline → semialdehyde → GLUTAMATE → 2-OXOGLUTARATE, with no arrow anywhere to acetoacetyl-CoA), and standard biochemistry (glutamate-γ-semialdehyde dehydrogenase converts this semialdehyde to glutamate; it has no route to acetoacetyl-CoA). The diagram, section heading, and the very next sentence (histidine → urocanate → 'glutamic acid') are mutually consistent, so THIS BOOK'S OWN DIAGRAM is treated as the reliable side here, and the 'acetoacetylkoenzym A' clause is flagged as an apparent slip in the running text (possibly a stray carry-over from family 2's glutaryl-CoA→acetoacetyl-CoA discussion one page earlier).", cn: "第128页最顶部有一句话（已放大2-3倍核对）：「生成的半醛经过一系列反应，完全降解为乙酰乙酰辅酶A，同时也是精氨酸转化的中间体。」这与同一页上三处独立内容直接矛盾：本节自己的标题（「三、转化为2-氧戊二酸」）、该句正下方的图示（图中精氨酸+脯氨酸→半醛→谷氨酸→2-氧戊二酸，完全没有任何箭头指向乙酰乙酰辅酶A），以及标准生物化学知识（谷氨酸γ-半醛脱氢酶把这个半醛转化为谷氨酸，并没有通向乙酰乙酰辅酶A的路线）。图示、节标题，以及紧接着的下一句（组氨酸→尿刊酸→「谷氨酸」）三者相互一致，因此本笔记以教材自己的图示为准，将「乙酰乙酰辅酶A」这一表述标记为正文中的疑似笔误（可能是前一页第二族「戊二酰辅酶A→乙酰乙酰辅酶A」讨论内容的误植）。" },
    { cz: "histidin → urokanát → glutamát", en: "HISTIDINE is converted by DEAMINATION to UROCANATE (cross-referenced to chap. 5.2.1), which after HYDROLYSIS degrades all the way to GLUTAMIC ACID — joining arginine/proline's semialdehyde route at the GLUTAMATE node, then continuing to 2-oxoglutarate. GLUTAMINE joins at the same GLUTAMATE box directly (per the diagram).", cn: "组氨酸经脱氨转化为尿刊酸（交叉引用5.2.1节），尿刊酸再经水解，一路降解生成谷氨酸——在谷氨酸这一节点与精氨酸/脯氨酸的半醛路线汇合，再继续通向2-氧戊二酸。谷氨酰胺（按图示）则直接汇入同一个谷氨酸方框。" },
    { cz: "rodina 4 — Met, Ile, Val → sukcinylkoenzym A", en: "The carbon skeleton of METHIONINE, ISOLEUCINE and VALINE is degraded to SUCCINYL-CoA; the PRECURSOR of succinyl-CoA is METHYLMALONYL-CoA. Isoleucine and methionine both feed in via a shared intermediate, PROPIONYL-CoA → methylmalonyl-CoA → succinyl-CoA.", cn: "甲硫氨酸、异亮氨酸和缬氨酸的碳骨架都降解为琥珀酰辅酶A；琥珀酰辅酶A的前体是甲基丙二酰辅酶A。异亮氨酸和甲硫氨酸都通过共同中间体丙酰辅酶A汇入——丙酰辅酶A→甲基丙二酰辅酶A→琥珀酰辅酶A。" },
    { cz: "krabička '2-oxoglutarát' pod methioninem", en: "The family-4 diagram draws methionine's arrow leading straight down into a box labelled (re-read at 3x zoom, confirmed) '2-OXOGLUTARÁT', which then leads to propionyl-CoA. This is almost certainly a MISLABELLING: 2-oxoglutarate is a C5 TCA-cycle acid with no chemical route to a C3 product like propionyl-CoA, and 2-oxoglutarate is ALREADY the named end-product of family 3, one section above, making its reappearance here as a methionine intermediate chemically and structurally implausible. The standard, universally-taught methionine intermediate at exactly this position in the pathway is 2-OXOBUTYRATE (which family 1 independently names, on p.126, as a threonine-derived precursor of propionate) — a name easily mistyped as '2-oxoglutarát' given the shared '2-oxo-...-át' pattern. Treat 'methionine → 2-oxobutyrate → propionyl-CoA' as the biochemically reliable reading; the printed diagram label is reproduced above exactly as it appears, flagged as a probable book error.", cn: "第四族的图中，甲硫氨酸的箭头直接向下指向一个方框，标注（已放大三倍核对确认）为「2-氧戊二酸」，该方框再指向丙酰辅酶A。这几乎可以肯定是标注错误：2-氧戊二酸是一种C5的TCA循环酸，在化学上没有途径生成丙酰辅酶A这样的C3产物，而且2-氧戊二酸在上一节（第三族）中已经是明确的终产物，在此处又作为甲硫氨酸的中间体出现，于化学和结构上都说不通。在通路的这一确切位置，标准的、普遍教授的甲硫氨酸中间体是2-氧丁酸（第126页第一族部分也独立提到过它，是苏氨酸生成丙酸的前体）——「2-氧丁酸」和「2-氧戊二酸」在捷克语中都是「2-oxo-...-át」的模式，很容易被误植。本笔记建议以「甲硫氨酸→2-氧丁酸→丙酰辅酶A」作为生化上可靠的理解；上面按原样重现了图中印刷的标注，并标记为教材可能存在的错误。" },
    { cz: "isoleucin, valin → propionylkoenzym A / methylmalonylkoenzym A", en: "ISOLEUCINE feeds directly into PROPIONYL-CoA (consistent with its dual glucogenic role noted in family 2 — isoleucine's branched skeleton splits into an acetyl-CoA fragment, family 2, AND this propionyl-CoA fragment). VALINE feeds directly into METHYLMALONYL-CoA. Both converge with methionine's route at methylmalonyl-CoA, which is then converted to SUCCINYL-CoA — the family's final product and a direct citrate-cycle intermediate, making this entire family GLUCOGENIC.", cn: "异亮氨酸直接汇入丙酰辅酶A（这与第二族提到的其双重生糖角色一致——异亮氨酸的支链骨架分裂为一个乙酰辅酶A片段（属于第二族）和这个丙酰辅酶A片段）。缬氨酸直接汇入甲基丙二酰辅酶A。两者都在甲基丙二酰辅酶A处与甲硫氨酸的路线汇合，甲基丙二酰辅酶A再转化为琥珀酰辅酶A——本族的最终产物，也是柠檬酸循环的直接中间体，这使整个第四族都属于生糖性质。" }
  ],
  terms: [
    { cz: "Δ1-pyrrolin-5-karboxylová kyselina", en: "Δ1-pyrroline-5-carboxylate", cn: "Δ1-吡咯啉-5-羧酸", def_en: "Oxidation product of proline (proline dehydrogenase); in equilibrium with glutamate γ-semialdehyde.", def_cn: "脯氨酸的氧化产物（由脯氨酸脱氢酶生成）；与谷氨酸γ-半醛处于平衡状态。" },
    { cz: "urokanát", en: "urocanate", cn: "尿刊酸", def_en: "Deamination product of histidine, hydrolysed onward to glutamic acid.", def_cn: "组氨酸的脱氨产物，进一步水解生成谷氨酸。" },
    { cz: "propionylkoenzym A", en: "propionyl-CoA", cn: "丙酰辅酶A", def_en: "Shared C3-acyl-CoA intermediate from isoleucine and (via 2-oxobutyrate) methionine, converted to methylmalonyl-CoA.", def_cn: "异亮氨酸和（经2-氧丁酸）甲硫氨酸共同的C3酰基辅酶A中间体，转化为甲基丙二酰辅酶A。" },
    { cz: "methylmalonylkoenzym A", en: "methylmalonyl-CoA", cn: "甲基丙二酰辅酶A", def_en: "Immediate precursor of succinyl-CoA; formed from propionyl-CoA (Ile, Met) and directly from valine.", def_cn: "琥珀酰辅酶A的直接前体；由丙酰辅酶A（异亮氨酸、甲硫氨酸来源）生成，缬氨酸也可直接汇入。" },
    { cz: "sukcinylkoenzym A", en: "succinyl-CoA", cn: "琥珀酰辅酶A", def_en: "Citrate-cycle intermediate and final product of family 4 (Met, Ile, Val); makes this family glucogenic.", def_cn: "柠檬酸循环中间体，也是第四族（甲硫氨酸、异亮氨酸、缬氨酸）的最终产物；这使该族属于生糖性质。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which amino acids converge on 2-oxoglutarate as their citrate-cycle entry point (family 3)?",
      q_cn: "哪些氨基酸以2-氧戊二酸作为其进入柠檬酸循环的入口（第三族）？",
      options: ["Methionine, isoleucine, valine", "Aspartate, asparagine", "Arginine, histidine, glutamate, glutamine, proline", "Alanine, serine, glycine, threonine, cysteine"],
      answer: 2,
      why_en: "Family 3 (the C5 family) is Arg, His, Glu, Gln, Pro, all converging on glutamate and then 2-oxoglutarate. The other options are family 4 (succinyl-CoA), family 5 (oxaloacetate), and family 1 (pyruvate) respectively.",
      why_cn: "第三族（C5族）是精氨酸、组氨酸、谷氨酸、谷氨酰胺、脯氨酸，全部汇聚到谷氨酸再到2-氧戊二酸。其余选项分别是第四族（琥珀酰辅酶A）、第五族（草酰乙酸）和第一族（丙酮酸）。"
    },
    {
      type: "mcq",
      q_en: "A sentence on p.128 states the proline/arginine-derived glutamate semialdehyde degrades 'to acetoacetyl-CoA.' Why should this specific clause be treated with suspicion rather than taken at face value?",
      q_cn: "第128页有一句话说脯氨酸/精氨酸来源的谷氨酸半醛降解「生成乙酰乙酰辅酶A」。为什么这句话应该被谨慎对待，而不能直接采信？",
      options: ["Because acetoacetyl-CoA does not exist as a metabolite in this book", "Because it contradicts the section's own heading (2-oxoglutarate family), the diagram on the same page (semialdehyde → glutamate → 2-oxoglutarate), and standard biochemistry, all of which agree with each other", "Because the book never mentions glutamate anywhere else", "Because proline is not actually degraded in this book at all"],
      answer: 1,
      why_en: "Three independent, mutually consistent sources on the very same page — the section heading, the diagram directly below the sentence, and general biochemical knowledge of glutamate-γ-semialdehyde dehydrogenase — all say the semialdehyde becomes glutamate, not acetoacetyl-CoA. When one sentence disagrees with everything else around it, including the book's own figure, the figure and the heading are the more reliable read.",
      why_cn: "同一页上有三处独立且相互一致的来源——节标题、该句正下方的图示，以及关于谷氨酸γ-半醛脱氢酶的一般生物化学知识——都指出这个半醛会变成谷氨酸，而不是乙酰乙酰辅酶A。当一句话与周围包括教材自己图示在内的一切都不一致时，图示和标题才是更可靠的依据。"
    },
    {
      type: "short",
      q_en: "Methionine's degradation diagram shows an arrow into a box labelled '2-oxoglutarát', leading onward to propionyl-CoA. What intermediate should this most likely be, and why?",
      q_cn: "甲硫氨酸降解图中有一个箭头指向标注为「2-氧戊二酸」的方框，再通向丙酰辅酶A。这个中间体最可能应该是什么？为什么？",
      accept: ["2-oxobutyrate", "2-oxobutyrát", "alpha-ketobutyrate", "2-氧丁酸"],
      answer_en: "It is almost certainly meant to be 2-OXOBUTYRATE, not 2-oxoglutarate. 2-oxoglutarate is a five-carbon TCA-cycle acid that cannot chemically decarboxylate into the three-carbon propionyl-CoA, and it is already used as family 3's own named end-product one section earlier; 2-oxobutyrate, by contrast, is the standard intermediate that undergoes oxidative decarboxylation to propionyl-CoA, and this book independently names it (p.126) as a threonine-derived precursor of propionate via the same kind of reaction.",
      answer_cn: "它几乎可以肯定应该是2-氧丁酸，而不是2-氧戊二酸。2-氧戊二酸是一种五碳TCA循环酸，在化学上无法脱羧生成三碳的丙酰辅酶A，而且它在上一节中已经是第三族自己明确的终产物；相比之下，2-氧丁酸才是经氧化脱羧生成丙酰辅酶A的标准中间体，教材本身（第126页）也独立提到过它，是苏氨酸经同类反应生成丙酸的前体。"
    }
  ],
  oral: {
    q_en: "Trace families 3 and 4 of amino acid carbon-skeleton degradation, and explain the two places on these pages where the book's own text or diagram needs a careful, critical read.",
    q_cn: "梳理氨基酸碳骨架降解的第三族和第四族，并说明这几页中有哪两处需要对教材自身文字或图示进行谨慎、批判性解读。",
    model_en: "Family three gathers arginine, histidine, glutamic acid, glutamine and proline, all of which enter the citrate cycle via two-oxoglutarate, with glutamate as its immediate precursor. Proline is oxidised by proline dehydrogenase to delta-one-pyrroline-five-carboxylate, sitting in equilibrium with the open-chain gamma-semialdehyde of glutamic acid, and arginine's degradation reaches the very same semialdehyde. Histidine takes a different route in, being deaminated to urocanate and then hydrolysed all the way to glutamic acid, joining the others at the glutamate node before the final step to two-oxoglutarate. Now, a sentence right at the top of the second page here claims this semialdehyde is degraded all the way to acetoacetyl-CoA — but that clashes with the section's own heading, with the diagram drawn immediately below it, which shows the semialdehyde becoming glutamate and nothing else, and with standard biochemistry; since heading, diagram, and general knowledge all agree with each other, I read that one clause as a slip in the running text, not as the reliable statement. Family four is more compact: methionine, isoleucine and valine all degrade to succinyl-CoA, by way of the shared precursor methylmalonyl-CoA, with propionyl-CoA as an earlier common intermediate for isoleucine and methionine, and valine feeding in slightly further along. Isoleucine's presence here, alongside its acetyl-CoA fragment from family two, is exactly why it counts as both glucogenic and ketogenic. The second place needing a critical eye is the methionine box in this very diagram, which is labelled two-oxoglutarate — but that can't be right, because two-oxoglutarate is a five-carbon citrate-cycle acid with no chemical path down to the three-carbon propionyl-CoA that follows it in the diagram, and it's already the named endpoint of family three one section earlier. The intermediate that actually belongs there, and that the book itself names elsewhere for exactly this kind of oxidative decarboxylation, is two-oxobutyrate — an easy word to mistype as two-oxoglutarate in Czech, and almost certainly what was intended.",
    checklist: ["Named all five family-3 amino acids and their convergence on glutamate/2-oxoglutarate", "Described proline's oxidation to the pyrroline-carboxylate/semialdehyde equilibrium", "Described histidine's route via urocanate to glutamate", "Flagged the semialdehyde/acetoacetyl-CoA sentence as inconsistent with the heading, diagram and biochemistry", "Named all three family-4 amino acids and methylmalonyl-CoA as the succinyl-CoA precursor", "Flagged the methionine-diagram '2-oxoglutarate' label as a likely mislabel for 2-oxobutyrate, with reasoning"]
  }
},

{
  id: "5-2-3-4",
  book: "cz",
  topicKey: "amino-acid-degradation",
  chapter: 5,
  section: "5.2.3",
  czTitle: "Odbourávání uhlíkové kostry a vzájemné přeměny aminokyselin — 5) Přeměna na oxalacetát (C4-rodina); souhrnné schéma (Obr. 5.6)",
  enTitle: "Degradation of the carbon skeleton and mutual interconversion of amino acids — 5) Conversion to oxaloacetate (C4 family); the master summary scheme (Obr. 5.6)",
  cnTitle: "氨基酸碳骨架的降解与相互转化——五、转化为草酰乙酸（C4族）；总结图（图5.6）",
  pages: [129],
  coverage: "full",
  coverageNote: "All of p.129 verified in full against the scan, including every amino-acid box, arrow and intermediate label in the full-page Obr. 5.6 diagram, cross-checked box-by-box against the family-by-family text on pp.126-128 (nodes 5-2-3-1 to 5-2-3-3).",
  cnNote: { topic: "二十五", title: "蓋白质的降解及氨基酸的分解代谢——生糖/生酮氨基酸分类 (笔记 pp.168–170)", status: "mapped" },
  mustKnow: { en: "The single most useful fact in this section is not any one amino acid's pathway — it is that all twenty collapse onto just seven entry points around the citrate cycle. Once you know which of the seven a given amino acid's skeleton lands on, you already know whether it is glucogenic, ketogenic, or both, without memorising the pathway itself.", cn: "这一节里最有用的事实，不是任何一个具体氨基酸的通路，而是二十种氨基酸最终全部收敛到柠檬酸循环周围的七个入口上。只要知道某个氨基酸的骨架落在这七个里的哪一个，你就已经知道它是生糖、生酮、还是两者都是，根本不需要背下整条通路。" },
  summary: {
    en: "Only ASPARTATE and ASPARAGINE convert directly to OXALOACETATE, the fifth and final family. The page's real payoff is Obr. 5.6, a single master diagram tying every amino acid to its precise entry point around the citrate cycle: pyruvate (Ala/Gly/Cys/Ser, also linked to PEP/glucose), acetyl-CoA (Ile/Leu/Trp/Thr), acetoacetyl-CoA (Leu/Lys/Phe/Tyr), fumarate (Tyr/Phe/Asp), oxaloacetate (Asn/Asp), 2-oxoglutarate (Glu/Gln/His/Pro/Arg) and succinyl-CoA (Ile/Met/Thr/Val). Cross-checking this figure box-by-box against the running text confirms two things the text's own opening paragraph (p.125) understated: lysine has no glucogenic outlet anywhere in the figure (so it is purely ketogenic, like leucine), and threonine appears in both a ketogenic and a glucogenic box (so it is dual, like isoleucine), even though neither was named explicitly in that opening paragraph's examples.",
    cn: "只有天冬氨酸和天冬酰胺直接转化为草酰乙酸，这是第五个、也是最后一个家族。这一页真正的价值在于图5.6——一张把每种氨基酸精确对应到柠檬酸循环各入口的总结图：丙酮酸（丙氨酸/甘氨酸/半胱氨酸/丝氨酸，还与磷酸烯醇丙酮酸/葡萄糖相连）、乙酰辅酶A（异亮氨酸/亮氨酸/色氨酸/苏氨酸）、乙酰乙酰辅酶A（亮氨酸/赖氨酸/苯丙氨酸/酪氨酸）、延胡索酸（酪氨酸/苯丙氨酸/天冬氨酸）、草酰乙酸（天冬酰胺/天冬氨酸）、2-氧戊二酸（谷氨酸/谷氨酰胺/组氨酸/脯氨酸/精氨酸）以及琥珀酰辅酶A（异亮氨酸/甲硫氨酸/苏氨酸/缬氨酸）。把这张图与正文逐框核对后可以确认两点，是正文开篇段落（第125页）未能充分说明的：赖氨酸在图中完全没有任何生糖出口（因此它和亮氨酸一样属于纯生酮氨基酸），而苏氨酸则同时出现在一个生酮方框和一个生糖方框中（因此它和异亮氨酸一样兼具两种性质）——尽管开篇段落举例时都没有明确点出这两者。"
  },
  points: [
    { cz: "rodina 5 — jen Asp, Asn → oxalacetát", en: "The FIFTH and final family is the SMALLEST: 'only TWO amino acids convert to oxaloacetate: ASPARTIC ACID and ASPARAGINE.' This is the most direct route of all five families — aspartate/asparagine sit right next to oxaloacetate in the citrate cycle, with essentially no intermediate steps needed.", cn: "第五个、也是最后一个家族是五族中最小的：「只有两种氨基酸转化为草酰乙酸：天冬氨酸和天冬酰胺。」这是五族中最直接的一条路线——天冬氨酸/天冬酰胺在柠檬酸循环中紧邻草酰乙酸，几乎不需要任何中间步骤。" },
    { cz: "Obr. 5.6 — sedm vstupních bodů", en: "Obr. 5.6 ('Connection between amino acid metabolism and the citrate cycle') is the CAPSTONE diagram for all of 5.2.3, mapping every amino acid discussed onto SEVEN labelled entry points arranged around a drawn citrate-cycle circle: PYRUVATE, ACETYL-CoA, ACETOACETYL-CoA, FUMARATE, OXALOACETATE, 2-OXOGLUTARATE and SUCCINYL-CoA — plus PEP/D-glucose shown branching off pyruvate to represent the gluconeogenic endpoint.", cn: "图5.6（「氨基酸代谢与柠檬酸循环之间的联系」）是整个5.2.3节的总结图，把所讨论的每种氨基酸都对应到围绕柠檬酸循环圆圈排列的七个标注入口上：丙酮酸、乙酰辅酶A、乙酰乙酰辅酶A、延胡索酸、草酰乙酸、2-氧戊二酸和琥珀酰辅酶A——此外还画出了磷酸烯醇丙酮酸/D-葡萄糖从丙酮酸分支出去，代表糖异生的终点。" },
    { cz: "Ile a Thr — dvě krabičky, dvojí povaha", en: "The diagram lists ISOLEUCINE in BOTH the '→acetyl-CoA' box (Ile/Leu/Trp/Thr) AND the '→succinyl-CoA' box (Ile/Met/Thr/Val) — a direct visual confirmation that isoleucine's branched carbon skeleton splits into two separate fragments feeding two different families, matching its explicit 'both glucogenic and ketogenic' label from p.125. THREONINE is listed in the SAME two boxes — making it dual by the same criterion, even though the opening classification paragraph (p.125) named only Ile, Phe, Trp and Tyr as dual, omitting threonine.", cn: "图中把异亮氨酸同时列在「→乙酰辅酶A」方框（异亮氨酸/亮氨酸/色氨酸/苏氨酸）和「→琥珀酰辅酶A」方框（异亮氨酸/甲硫氨酸/苏氨酸/缬氨酸）中——直观地证实了异亮氨酸支链的碳骨架分裂为两个独立片段，分别汇入两个不同家族，与第125页明确给出的「既生糖又生酮」标签相符。苏氨酸被列在完全相同的两个方框中——按同样的标准，它也应属于兼具两种性质，尽管开篇分类段落（第125页）只点名了异亮氨酸、苯丙氨酸、色氨酸和酪氨酸为兼具两种性质，遗漏了苏氨酸。" },
    { cz: "Lys — jediná krabička, žádný glukogenní východ", en: "By contrast, LYSINE appears in EXACTLY ONE box in the entire diagram: 'Leucin/Lysin/Fenylalanin/Tyrosin → Acetoacetyl-CoA.' It does not appear in the fumarate, oxaloacetate, 2-oxoglutarate or succinyl-CoA boxes anywhere. This is the second, independent piece of diagram evidence (alongside the family-2 pathway diagram, node 5-2-3-2) that lysine has NO glucogenic outlet at all in this book's own scheme — reinforcing that it belongs with leucine as purely ketogenic, a classification the opening paragraph's example list (p.125) never states outright.", cn: "相比之下，赖氨酸在整张图中只出现在唯一一个方框里：「亮氨酸/赖氨酸/苯丙氨酸/酪氨酸→乙酰乙酰辅酶A」。它没有出现在延胡索酸、草酰乙酸、2-氧戊二酸或琥珀酰辅酶A的任何一个方框中。这是（与第二族通路图、节点5-2-3-2一起）第二个独立的图示证据，证明按本教材自己的图式，赖氨酸完全没有任何生糖出口——进一步印证它应与亮氨酸一样归为纯生酮氨基酸，而这一分类是开篇段落（第125页）的举例清单从未明确说出的。" },
    { cz: "Tyr, Phe — dvě krabičky; Trp jen jedna", en: "TYROSINE and PHENYLALANINE each appear in TWO boxes: '→acetoacetyl-CoA' (with Leu, Lys) AND '→fumarate' (with Aspartát) — the diagram's direct visual match to the two-product (fumarate + acetoacetate) tyrosine pathway detailed in node 5-2-3-2. TRYPTOPHAN, however, appears ONLY in the '→acetyl-CoA' box here, not in the fumarate box — the diagram does not draw out a glucogenic route for tryptophan explicitly, consistent with the book's own disclaimer (p.125) that full individual pathways are beyond this course's scope.", cn: "酪氨酸和苯丙氨酸各自出现在两个方框中：「→乙酰乙酰辅酶A」（与亮氨酸、赖氨酸同框）以及「→延胡索酸」（与天冬氨酸同框）——这与节点5-2-3-2中详述的酪氨酸「双产物」（延胡索酸+乙酰乙酸）通路在图示上直接吻合。然而色氨酸在此图中只出现在「→乙酰辅酶A」方框中，并未出现在延胡索酸方框中——图中并未明确画出色氨酸的生糖路线，这与教材自己（第125页）声明「完整的个别通路超出本课程范围」的免责说明是一致的。" },
    { cz: "Asp/Asn — nejpropojenější uzel (OAA, fumarát i močovinový cyklus)", en: "ASPARTATE (and, via it, ASPARAGINE) is the ONLY amino acid appearing in THREE places across this material: the dedicated family-5 '→oxaloacetate' pair (with Asparagin), the '→fumarate' box (with Tyr/Phe), AND as the transamination partner regenerating aspartate from oxaloacetate in the urea cycle's own linked reactions (node 5-2-2-2, enzyme 9). This makes aspartate/oxaloacetate the single most CONNECTED node across both the urea cycle and the amino-acid-family scheme.", cn: "天冬氨酸（以及经由它的天冬酰胺）是在本部分材料中唯一出现在三处的氨基酸：专属的第五族「→草酰乙酸」组合（与天冬酰胺同框）、「→延胡索酸」方框（与酪氨酸/苯丙氨酸同框），以及在尿素循环自身相连的反应中（节点5-2-2-2，9号酶）作为转氨配对、由草酰乙酸再生出天冬氨酸。这使天冬氨酸/草酰乙酸成为尿素循环与氨基酸家族图式之间连接最紧密的单一节点。" }
  ],
  terms: [
    { cz: "oxalacetát", en: "oxaloacetate", cn: "草酰乙酸", def_en: "Citrate-cycle intermediate and family-5 endpoint reached directly by aspartate and asparagine.", def_cn: "柠檬酸循环中间体，天冬氨酸和天冬酰胺直接到达的第五族终点。" },
    { cz: "Obr. 5.6 (souhrnné schéma)", en: "master amino-acid/citrate-cycle scheme (Obr. 5.6)", cn: "氨基酸-柠檬酸循环总结图（图5.6）", def_en: "The book's single capstone diagram mapping all amino acids discussed onto seven entry points around the citrate cycle.", def_cn: "教材把所讨论的全部氨基酸对应到柠檬酸循环七个入口上的总结性图示。" },
    { cz: "fosfoenolpyruvát (PEP)", en: "phosphoenolpyruvate (PEP)", cn: "磷酸烯醇丙酮酸 (PEP)", def_en: "Gluconeogenic intermediate shown branching from oxaloacetate/pyruvate toward D-glucose in Obr. 5.6.", def_cn: "图5.6中从草酰乙酸/丙酮酸分支出去、通向D-葡萄糖的糖异生中间体。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to this page, which TWO amino acids convert directly to oxaloacetate?",
      q_cn: "根据本页内容，哪两种氨基酸直接转化为草酰乙酸？",
      options: ["Glutamate and glutamine", "Aspartate and asparagine", "Alanine and glycine", "Methionine and valine"],
      answer: 1,
      why_en: "The book states explicitly that only two amino acids convert to oxaloacetate: aspartic acid and asparagine — the smallest and most direct of the five families, since aspartate sits immediately adjacent to oxaloacetate in the citrate cycle.",
      why_cn: "教材明确指出只有两种氨基酸转化为草酰乙酸：天冬氨酸和天冬酰胺——这是五族中最小、最直接的一族，因为天冬氨酸在柠檬酸循环中就紧邻草酰乙酸。"
    },
    {
      type: "mcq",
      q_en: "Obr. 5.6 places lysine in exactly one box, feeding acetoacetyl-CoA, and nowhere else. What does this imply about lysine's classification that the book's own p.125 example list does not state outright?",
      q_cn: "图5.6把赖氨酸只放在唯一一个方框中（通向乙酰乙酰辅酶A），再无其他出现。这对赖氨酸的分类意味着什么，而这是教材第125页的举例清单没有明确说出的？",
      options: ["Lysine is exclusively glucogenic", "Lysine is purely ketogenic, with no glucogenic outlet, just like leucine", "Lysine cannot be degraded at all", "Lysine feeds directly into the citrate cycle without any acyl-CoA intermediate"],
      answer: 1,
      why_en: "Since lysine appears in no box representing a citrate-cycle/glucogenic entry point (fumarate, oxaloacetate, 2-oxoglutarate, succinyl-CoA), and its only route is to acetoacetyl-CoA — the same criterion the book uses to call leucine 'purely' ketogenic — lysine belongs in that same purely-ketogenic category by the diagram's own logic, even though the opening paragraph's illustrative example list never named it.",
      why_cn: "由于赖氨酸没有出现在任何代表柠檬酸循环/生糖入口的方框中（延胡索酸、草酰乙酸、2-氧戊二酸、琥珀酰辅酶A），它唯一的路线是通向乙酰乙酰辅酶A——这正是教材用来判定亮氨酸为「纯」生酮氨基酸的同一标准——因此按图示自身的逻辑，赖氨酸也应属于同一个纯生酮类别，尽管开篇段落举例说明时从未点出它的名字。"
    },
    {
      type: "short",
      q_en: "Name the seven citrate-cycle-linked entry points labelled in Obr. 5.6, and one amino acid feeding each.",
      q_cn: "说出图5.6中标注的七个与柠檬酸循环相连的入口，并各举一个汇入其中的氨基酸。",
      accept: ["pyruvate", "acetyl-CoA", "acetoacetyl-CoA", "fumarate", "oxaloacetate", "2-oxoglutarate", "succinyl-CoA", "丙酮酸", "乙酰辅酶A", "乙酰乙酰辅酶A", "延胡索酸", "草酰乙酸", "2-氧戊二酸", "琥珀酰辅酶A"],
      answer_en: "Pyruvate (e.g. alanine), acetyl-CoA (e.g. isoleucine), acetoacetyl-CoA (e.g. leucine), fumarate (e.g. tyrosine), oxaloacetate (e.g. aspartate), 2-oxoglutarate (e.g. glutamate), and succinyl-CoA (e.g. methionine).",
      answer_cn: "丙酮酸（如丙氨酸）、乙酰辅酶A（如异亮氨酸）、乙酰乙酰辅酶A（如亮氨酸）、延胡索酸（如酪氨酸）、草酰乙酸（如天冬氨酸）、2-氧戊二酸（如谷氨酸）、琥珀酰辅酶A（如甲硫氨酸）。"
    }
  ],
  oral: {
    q_en: "Use the master summary diagram (Obr. 5.6) to give the complete picture of how amino acid carbon skeletons feed into the citrate cycle, and explain what cross-checking this figure against the earlier text reveals.",
    q_cn: "请借助总结图（图5.6）完整描述氨基酸碳骨架如何汇入柠檬酸循环，并说明将该图与前文逐一核对后能发现什么。",
    model_en: "The fifth and final family is the simplest: only aspartate and asparagine convert directly to oxaloacetate, sitting immediately next to it in the citrate cycle with essentially no intermediate steps. But the real value of this last page is Obr. 5.6, which draws every amino acid discussed across the whole section onto one picture, arranged around the citrate cycle at seven labelled entry points: pyruvate, which also connects onward to phosphoenolpyruvate and glucose; acetyl-CoA; acetoacetyl-CoA; fumarate; oxaloacetate; two-oxoglutarate; and succinyl-CoA. Reading this figure box by box against the family-by-family text from the preceding pages confirms the classification given for most amino acids, but it also fills in two gaps the book's own opening classification paragraph left open. Isoleucine appears in both the acetyl-CoA box and the succinyl-CoA box, visually confirming that its branched skeleton splits into two separate fragments, which is exactly why it was named both glucogenic and ketogenic; threonine appears in precisely those same two boxes, which by the same logic makes it dual too, even though the opening paragraph's list of examples never said so. Tyrosine and phenylalanine each appear in two boxes, acetoacetyl-CoA and fumarate, matching the two-product pathway described earlier for tyrosine. Lysine, by contrast, appears in exactly one box in the whole diagram, alongside leucine, phenylalanine and tyrosine, feeding only acetoacetyl-CoA — it is absent from every glucogenic box, fumarate, oxaloacetate, two-oxoglutarate and succinyl-CoA alike. That absence is the second piece of diagram evidence, alongside the earlier acetoacetyl-CoA pathway diagram, that lysine has no glucogenic outlet at all in this book's own scheme, so it really belongs alongside leucine as purely ketogenic, even though the opening paragraph's own illustrative list of examples never states that outright. So the lesson of this summary figure is less about any single new fact, and more about how a careful cross-check between a book's prose and its own diagrams can sharpen a classification the prose alone leaves slightly incomplete.",
    checklist: ["Named aspartate and asparagine as the only family-5 amino acids, feeding oxaloacetate directly", "Listed all seven entry points shown in Obr. 5.6", "Explained isoleucine and threonine's dual-box appearance as the mechanistic basis of their dual classification", "Explained tyrosine/phenylalanine's two-box appearance (acetoacetyl-CoA + fumarate)", "Identified lysine's single-box appearance and what it implies about its true classification", "Articulated the general lesson of cross-checking prose against diagrams"]
  }
}

);
