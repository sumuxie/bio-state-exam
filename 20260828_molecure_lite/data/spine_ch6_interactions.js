/* Spine for chapter 6 §6.3 — 蛋白质及 RNA 相互作用技术.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 219–228.
   Continues directly from spine_ch6.js (M-6-2, printed 211–218): that node broke a
   gene inside a living organism to find out what it does; this one asks the other
   half of the same question — which molecules the gene product actually touches.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. 1 000 resonance units of JAZ1 on a dextran chip; the
      empty c lane under ACO1; 30% of phytochrome B pulled down and 5% of phytochrome A;
      two H3K4me3 peaks at the 5' ends of Cotton_A_37370 and Cotton_A_37371.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   THE ARC. Eight methods, one question: do these two things touch? Each answers it
   with a different readout (a colony, a colour, an angle, a band, a wavelength), in
   a different place (a yeast nucleus, a chip, a tube, a living cell), and each one
   therefore has something it structurally cannot show. Steps 3, 6, 11, 13, 14, 15
   and 18 carry that second half explicitly, because the blind spot of a method is
   the part that decides what a positive result is worth. The chain runs from the
   most indirect readout (transcription of a reporter gene in yeast) through the
   most physical (a resonance angle, a band on a gel), into a living cell (FRET,
   ChIP), and ends where §6.3 ends — at RNAi, where the interaction being exploited
   is RNA with RNA.

   WHAT IS NOT HERE. The transcribed pages stop mid-sentence inside RNAi on printed
   228 and contain no yeast three-hybrid, no EMSA, no DNase I footprinting and no
   RIP; nothing here presents any of those as read off these pages. Two handwritten
   red-pen fragments in the scan are illegible and no content was invented for them.
   Claims drawn from standard knowledge rather than from the pages carry
   `beyond: true` and a `beyondNote` saying so. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-6-3 */
window.BIOLITE_SPINE["M-6-3"] = {
  /* Declared rather than left implicit. The first group is molecular-biology
     furniture this reader has had since chapter 1 and which M-6-2 already used;
     the second group are ordinary words that happen to be glossary entries too.
     Nothing load-bearing is parked here: every method name and every part of a
     method (one-hybrid, two-hybrid, activation domain, binding domain, reporter
     gene, cis-acting element, SPR, co-immunoprecipitation, pull-down, FRET, ChIP,
     RNAi, Dicer, siRNA, RISC) is introduced in the prose at its first use. */
  assumed: ["DNA", "RNA", "mRNA", "ssRNA", "dsRNA", "gene", "genome", "exon", "intron",
            "promoter", "transcription", "translation", "protein", "polypeptide",
            "amino acid", "peptide", "enzyme", "cell", "nucleus", "cytoplasm", "yeast",
            "bacterium", "virus", "plasmid", "vector", "cDNA", "cDNA library", "antibody",
            "antigen", "antibody-antigen", "affinity", "agarose", "glutathione",
            "centrifugation", "electrophoresis", "SDS-PAGE", "gel", "column", "membrane",
            "chromosome", "chromatin", "histone", "nucleosome", "sequencing", "PCR",
            "phenotype", "kinase", "protein kinase", "ethylene", "fluorescence",
            "wavelength", "spectrum", "nucleotide", "residue", "strand",
            "excitation", "emission", "refractive index", "Arabidopsis", "cotton",
            "in vitro", "domain", "target", "screening", "library", "signal", "complex",
            "matrix", "probe", "dye", "primer", "polymerase", "region", "site",
            "sequence", "fragment", "surface", "control", "structure", "toxin",
            "lysate", "beads", "tag", "fusion protein", "concentration", "efficiency"],
  nodeTitle_en: "Protein and RNA interaction techniques",
  nodeTitle_cn: "蛋白质及 RNA 相互作用技术",
  title_en: "Eight methods, one question — do these two molecules touch? — and **each one answers it with a different readout, in a different place, and each one has something it cannot show**",
  title_cn: "八种方法，问的是同一个问题——这两个分子是否接触？——而**每一种方法用的读出信号不同、发生的场所不同，并且每一种都有它显示不出来的东西**",
  steps: [
    {
      en: "Two molecules touching is not something a microscope resolves, so every method here builds a signal downstream of the contact and reports that instead. **A contact is read out as a colony that grows, a colony that turns blue, an angle of reflected light, a band on a gel, or a wavelength of emitted light — never as the two molecules being seen together.**",
      cn: "两个分子有没有接触，显微镜是看不出来的；所以这里的每一种方法，都是在接触事件的下游造一个信号，再拿这个信号来报告接触。**「接触」被读成的东西是：一个长出来的菌落、一个变蓝的菌落、一个反射光的角度、一条胶上的条带，或者一个新的发射波长——从来不是「看见两个分子在一起」。**",
      src: "现分 p.219"
    },
    {
      link_en: "the first method puts the whole question inside a living yeast cell",
      link_cn: "第一种方法把整个问题搬进了一个活的酵母细胞里",
      en: "Yeast one-hybrid is a technique from the mid-1990s that identifies a protein bound stably to DNA, and it works inside a living yeast cell. A known cis-acting element — a short DNA sequence that a regulatory protein binds — is cloned upstream of a minimal promoter, written Pmin, and a reporter gene is joined downstream of Pmin. The cDNA of the candidate transcription factor is fused to a yeast transcription activation domain (AD), and that fusion is expressed in the same cell. **A protein that binds the cis-acting element drags its attached AD to Pmin, Pmin fires, and the reporter gene is transcribed — so binding to a piece of DNA is read out as expression of a reporter gene.**",
      cn: "酵母单杂交（yeast one-hybrid）是 20 世纪 90 年代中期发展起来的技术，它能识别稳定结合在 DNA 上的蛋白质，而且是在活的酵母细胞里做的。先把一段已知的顺式作用元件（cis-acting element，即调控蛋白所结合的一小段 DNA 序列）构建到最基本启动子（minimal promoter，记作 Pmin）的上游，再把报告基因（reporter gene）接到 Pmin 的下游；然后把待测转录因子的 cDNA 与酵母的转录激活结构域（transcription activation domain, AD）融合，在同一个细胞里表达。**待测蛋白只要结合上顺式作用元件，就把挂在它身上的 AD 拖到了 Pmin 跟前，Pmin 被激活，报告基因转录——于是「结合了这段 DNA」被读成了「报告基因表达了」。**",
      src: "现分 p.219, p.220（图 6-18）"
    },
    {
      link_en: "so what the experimenter actually looks at is a plate of colonies",
      link_cn: "于是实验者真正看的，是一皿菌落",
      en: "The reporter gene is usually HIS3 or LacZ, and in most systems it rides on a plasmid rather than being integrated into the yeast chromosome; putting three or more copies of the cis-acting element in a row raises the efficiency with which the factor is recognised and bound. In the worked case four copies of the element DRE sit upstream of Pmin driving LacZ, and an Arabidopsis cDNA library is fused to the GAL4 AD on a vector carrying LEU2. Sensitivity is what the method is for: it reaches transcription regulators present at concentrations too low for any biochemical purification to reach. **Yeast transformants that go blue are picked as positive clones, and every one of them is then sequenced and has its binding activity verified separately — a blue colony is where the verification starts.**",
      cn: "报告基因一般选 HIS3 或 LacZ；虽然有的体系把带报告基因的载体直接整合到酵母染色体上，但大部分实验里报告基因是待在质粒上的。顺式作用元件连上 3 个以上，可以提高转录因子被识别和结合的效率。书上给的实例是：4 个顺式作用元件 DRE 排在 Pmin 上游驱动 LacZ，而拟南芥 cDNA 文库被融合在载有 LEU2 的载体上的 GAL4 AD 前面。这个方法真正的用武之地正是它的灵敏度：细胞中含量极低、用生化手段根本纯化不出来的那部分转录调控因子，靠它可以克隆到。**平板上变蓝的酵母转化体被当作阳性克隆挑出来，而每一个阳性克隆都还要再测序、再单独验证它的结合活性——蓝色菌落是验证的起点。**",
      src: "现分 p.220（图 6-19）"
    },
    {
      link_en: "and the reason a protein can be cut in half and refitted like that is one structural fact",
      link_cn: "而一个蛋白之所以能被这样拆开再拼上，靠的是一个结构上的事实",
      en: "Eukaryotic transcription regulators have a modular structure: each is built from two or more mutually independent domains, and the two an activator needs in order to function are a DNA-binding domain (BD) and an activation domain (AD). A BD on its own binds the promoter region of a particular gene and stops there, having started no transcription. **A hybrid protein carrying the BD of one regulator and the AD of a different regulator activates transcription perfectly well, so the two domains have to arrive in the same place and not on the same polypeptide.** The same fact gives a second assay: fuse an unknown gene to the GAL4 BD, read the reporter gene downstream of a GAL4 cis-acting element, and a reporter that fires says the unknown protein carries transcription activation function of its own.",
      cn: "真核生物的转录调控因子具有组件式结构（modular）：每一个都由两个或两个以上相互独立的结构域构成，而转录激活因子发挥功能所必需的是其中两个——DNA 结合结构域（binding domain, BD）和转录激活结构域（AD）。单独的 BD 能结合到特定基因的启动区上，也就到此为止了，它并不能启动转录。**由一个调控因子的 BD 和另一个调控因子的 AD 拼成的杂合蛋白，照样能激活转录；也就是说，这两个结构域需要到达同一个位置，而不需要长在同一条多肽链上。**同一个事实还带来第二种用法：把某个未知基因与酵母 GAL4 的 BD 融合，再去读位于 GAL4 顺式作用元件下游的报告基因；报告基因亮了，就说明这个未知蛋白自身带有转录激活功能。",
      src: "现分 p.221"
    },
    {
      link_en: "and once the two domains no longer need one polypeptide, the assay can be turned on protein pairs",
      link_cn: "而一旦两个结构域不必长在同一条链上，这套读出就能被转去问蛋白与蛋白的关系",
      recall_en: "the same AD and BD as in the one-hybrid layout, now carried by two separate proteins",
      recall_cn: "还是单杂交里那对 AD 和 BD，只是现在由两个各自独立的蛋白分别带着",
      en: "Yeast two-hybrid is that separation of BD from AD put to work on protein pairs. The DNA sequence of a known protein is joined to the BD gene fragment of a yeast transcription regulator — GAL1, GAL4 or GCN1 — on an expression vector; the hybrid protein made in yeast binds the regulatory region upstream of a reporter gene and sits there. That construct is the bait, meaning the half that is known and fixed. The AD gene fragment is joined separately to each insert of a cDNA library to give prey vectors, which are then transformed into the bait-carrying cells. **When a prey protein binds the bait, the AD and the BD are drawn together into one working transcription regulator, the reporter gene switches on, and the prey vector recovered from that colony carries a new interacting gene.**",
      cn: "酵母双杂交（yeast two-hybrid）就是把 BD 与 AD 可分离这件事，用到蛋白与蛋白的配对上。先用基因重组把已知蛋白的 DNA 序列连到带有酵母转录调控因子（常为 GAL1、GAL4 或 GCN1）BD 结构域基因片段的表达载体上；在酵母里表达出来的杂合蛋白，会结合到报告基因上游的启动调控区并停在那里。这个构建叫「诱饵」（bait），意思是这一半是已知的、固定不动的。另一边，把 AD 的基因片段分别与待筛选 cDNA 文库的各个插入片段相连，做成「猎物」（prey）载体，再转化进含有诱饵的酵母细胞。**猎物蛋白一旦与诱饵结合，AD 和 BD 就被牵引到一起、凑成一个能干活的转录调控因子，报告基因随之开启；从这个菌落里回收出来的猎物载体，带着的就是一个新的互作基因。**",
      src: "现分 p.221（图 6-20）"
    },
    {
      link_en: "and everything that readout requires is also everything it restricts",
      link_cn: "而这套读出所要求的条件，同时就是它的限制",
      beyond: true,
      beyondNote: "Printed 221 gives the mechanism and the readout; the two consequences drawn from them here are standard knowledge and are not written on that page.",
      en: "Both partners have to be produced inside a yeast cell, reach the yeast nucleus, and hold together long enough for a reporter gene to be transcribed and its product to accumulate to a detectable level. Two consequences follow. An interaction that depends on a chemical modification yeast does not make will not appear at all, and two proteins that are never in the same part of a cell in the organism they came from can still score positive. **A yeast two-hybrid hit is a statement about two proteins placed together in a yeast nucleus, and it carries no information about whether those two ever meet in the cell they came from.**",
      cn: "诱饵和猎物两边都必须在酵母细胞里被合成出来、进得了酵母细胞核，并且结合得足够久，久到报告基因能被转录、产物能积累到检测得出来。由此有两个后果。凡是依赖某种酵母做不出来的化学修饰的相互作用，在这里根本不会出现；而在原本那个生物体内从不共处同一区室的两个蛋白，在这里照样可以是阳性。**酵母双杂交的一个阳性结果，说的是「这两个蛋白被放进同一个酵母细胞核里以后会结合」，至于它们在各自原来的细胞里是否有机会相遇，这个结果不含任何信息。**",
      src: "现分 p.221（图 6-20）"
    },
    {
      link_en: "so the next method takes the pair out of any cell and measures the binding physically",
      link_cn: "于是下一种方法把这一对分子从任何细胞里取出来，直接做物理测量",
      en: "Surface plasmon resonance (SPR) immobilises the bait protein on a dextran layer, and that layer is fixed onto a metal film of nanometre thickness. A protein mixture is then flowed past it. Anything in the mixture that interacts with the bait raises the refractive index at the film surface, and that shifts the resonance angle — the angle at which the reflected light loses intensity — with the shift linear in the protein concentration at that spot. **SPR needs no label and no dye, it is fast and safe and returns a quantity rather than a yes; its price is a dedicated resonance instrument, and a bait sitting on a chip instead of in a cell.**",
      cn: "等离子体表面共振（surface plasmon resonance, SPR）技术把诱饵蛋白结合在葡聚糖表面上，再把这层葡聚糖固定到纳米级厚度的金属膜表面。然后让蛋白质混合物流过。混合物里凡是与诱饵蛋白发生相互作用的，都会使金属膜表面的折射率上升，从而改变共振角度——即反射光强度下降的那个角度——而角度的改变与该处的蛋白质浓度成线性关系。**SPR 不需要标记物、也不需要染料，安全、灵敏、快速，给出的是一个量而不只是一个「有」；它的代价是必须有专门的共振检测仪器，而且诱饵是待在芯片上、不在细胞里。**",
      src: "现分 p.221, p.222（图 6-21）"
    },
    {
      link_en: "and a quantity is what lets one experiment show that two proteins need a third molecule",
      link_cn: "而正因为给出的是一个量，一次实验才能显示出：这两个蛋白还需要第三个分子",
      en: "JAZ1, a negative regulator of the jasmonic acid (JA) signalling pathway, was immobilised on the dextran chip at 1 000 resonance units. With jasmonic acid–isoleucine (JA–Ile) and COI1 protein both present in the system, the signal climbed to 380 resonance units before a dissociation spike near 350 s; luciferase, luciferase with JA–Ile, and COI1 on its own all stayed near zero. Coronatine (COR) is a bacterial toxin resembling methyl jasmonate (MeJA) in structure and in function, and it drove the same interaction to about 310 units, while JA, MeJA and o-phenylenediamine (OPDA) produced no response at all. **COI1 binds JAZ1 only when a particular small molecule is in the system as well, and a trace measured in resonance units is what turns that requirement into a number.**",
      cn: "把茉莉酸（JA）信号通路的负调控因子 JAZ1 蛋白，以 1 000 共振单位固定在葡聚糖芯片表面。当体系中同时存在茉莉酸–异亮氨酸（JA–Ile）和 COI1 蛋白时，信号升到最高 380 共振单位，约 350 s 处出现一个解离尖峰；而荧光素酶、荧光素酶加 JA–Ile、以及单独的 COI1，三条对照都贴着零。冠毒素（coronatine, COR）是一种在结构和功能上都与茉莉酸甲酯（MeJA）相似的细菌毒素，它同样能把这一对推到约 310 单位；而 JA、MeJA 和邻苯二胺（OPDA）则完全没有反应。**COI1 与 JAZ1 只有在体系里还存在某个特定小分子时才结合，而以共振单位记录下来的曲线，正是把这个「还需要什么」变成了一个数字。**",
      src: "现分 p.222（图 6-22）"
    },
    {
      link_en: "the next method goes back into a tube, and hands the specificity over to an antibody",
      link_cn: "下一种方法回到试管里，把「专一性」这件事交给抗体",
      en: "Co-immunoprecipitation (CoIP) rests on one thing: an antibody specific for the target protein. That antibody is coupled by an affinity reaction onto a solid matrix; the proteins to be screened are added to the reaction system; and low centrifugal force or microfiltration brings the matrix, the antibody and everything hanging off them down to the bottom of the tube or onto a microfilm. **A screened protein that has interacted with the target protein is separated out by riding down attached to it, so presence in the pellet is the entire readout of the experiment.**",
      cn: "免疫共沉淀（co-immunoprecipitation, CoIP）的核心只有一件事：一支特异识别靶蛋白的抗体。先把靶蛋白的抗体通过亲和反应连接到固体基质上，再把可能与靶蛋白发生相互作用的待筛选蛋白加进反应体系，然后用低离心力沉淀或微膜过滤，把固体基质、抗体、以及挂在它们身上的一切一起带到试管底部或微膜上。**待筛选蛋白如果与靶蛋白发生了相互作用，就会挂在靶蛋白身上一起沉下来而被分离出来；所以「在不在沉淀里」就是这个实验的全部读出。**",
      src: "现分 p.222, p.223（图 6-23）"
    },
    {
      link_en: "and in practice neither protein is chased with its own antibody",
      link_cn: "而实际操作中，两个蛋白都不是用各自的抗体去追的",
      en: "The two target proteins are expressed as fusion proteins from the plasmid vectors pGADT7 and pGBKT7, which attach an HA tag and a c-Myc tag — short peptide stretches that a ready-made antibody recognises. Both are transcribed and translated in vitro, the products are mixed and incubated, the mixture is precipitated with either the Myc antibody or the HA antibody, passed over a column, and separated by SDS–PAGE. **Whether the two target proteins interact is read straight off that gel: precipitate with the Myc antibody, then look for the HA-tagged partner in the same lane.**",
      cn: "两个靶蛋白分别由质粒载体 pGADT7 和 pGBKT7 以融合蛋白的形式表达出来，这两个载体分别给它们接上 HA 标签和 c-Myc 标签——标签就是一小段多肽序列，有现成的抗体认得它。两者体外转录、翻译后，把产物混合温育，再分别用 Myc 抗体或 HA 抗体沉淀混合物，过柱，最后用 SDS–PAGE 电泳分离。**两个靶蛋白之间到底有没有相互作用，就直接从这张胶上读：用 Myc 抗体沉淀，然后看带 HA 标签的那一个有没有出现在同一条泳道里。**",
      src: "现分 p.223（图 6-24）"
    },
    {
      link_en: "run that way over six pairs, the gel gives four negatives and one positive",
      link_cn: "这样跑完六对，胶上给出的是四个阴性和一个阳性",
      beyond: true,
      beyondNote: "The pairs, the conclusion and the empty c lane are on printed 223–224; the closing point about a complex not being the same as a contact is standard knowledge and is not written there.",
      en: "Cotton ethylene synthase ACS2 was co-precipitated with the calcium-dependent protein kinase CDPK1, and not with CDPK32 or with CRK5; ACO1 was co-precipitated with none of the three. Each pair is run as two lanes, H and c, and the c lane is the co-precipitate: under ACO1 that lane is empty while the H lane still carries a band, which is what a negative answer looks like here. **A co-precipitation puts two proteins in one pelleted complex, and whether they touch each other or are both held by a third thing in the mixture is a question the gel does not separate.**",
      cn: "棉花乙烯合成酶 ACS2 与钙离子依赖性蛋白激酶 CDPK1 之间被共沉淀下来，而它与 CDPK32、CRK5 都没有；ACO1 则与这三个蛋白都没有发生相互作用。每一对都跑 H 和 c 两条泳道，其中 c 泳道是共沉淀的那一份：在 ACO1 这一块里，c 泳道是空的，而 H 泳道仍有条带——这就是这里的「阴性」长什么样。**共沉淀说明两个蛋白处在同一个被沉下来的复合物里；至于它们是彼此直接接触，还是同时被混合物里的第三样东西攥着，这张胶分不开。**",
      src: "现分 p.223, p.224（图 6-25）"
    },
    {
      link_en: "an antibody is one way to grab a protein out of a mixture; an affinity tag is another",
      link_cn: "把一个蛋白从混合物里抓出来，抗体是一条路，亲和标签是另一条",
      en: "GST pull-down is a purification with a handle: glutathione S-transferase (GST) has affinity for glutathione coupled to agarose beads, so anything fused to GST can be fished out of a mixed protein sample. One tube receives the GST–protein X fusion, the beads and a ³⁵S-labelled cell lysate; a control tube receives bare GST with the same beads and the same lysate. After incubation at 4 °C and a spin, the first tube yields beads–GST–protein X together with whatever partner X held, the second yields beads–GST alone, and SDS–PAGE resolves three bands: the interacting protein, the GST fusion, and GST. **A band present with GST–protein X and absent with bare GST is what identifies a partner of X, so the control tube is what makes the gel readable at all.**",
      cn: "GST 沉降（GST pull-down）是一种带把手的纯化：谷胱甘肽 S-转移酶（GST）对偶联在琼脂糖球珠上的谷胱甘肽有亲和性，于是凡是与 GST 融合的东西，都能从混合蛋白质样品里被钓出来。一支管里加入「GST–蛋白质 X」融合蛋白、球珠和 ³⁵S 标记的细胞裂解物；另一支对照管里加入不带蛋白质 X 的裸 GST，球珠和裂解物完全相同。4 ℃ 反应后离心，前一管得到「球珠–GST–蛋白质 X–互作蛋白」，后一管只得到「球珠–GST」；再用 SDS–PAGE 分离，胶上自上而下是三条带：发生相互作用的蛋白质、GST 融合物、GST。**在「GST–蛋白质 X」管里出现、而在裸 GST 管里没有的那条带，才是 X 的互作蛋白；所以对照管才是让这张胶可读的东西。**",
      src: "现分 p.223, p.224（图 6-26）"
    },
    {
      link_en: "and because what comes off the beads can be quantified, a weak interaction stays visible",
      link_cn: "而正因为从球珠上下来的东西可以被定量，一个弱的相互作用也不会消失",
      recall_en: "the same move as SPR's resonance units — a number instead of a yes",
      recall_cn: "和 SPR 那里的共振单位是同一招——给一个数，而不只给一个「有」",
      en: "The same layout was run with GAD — a GAL4 activation domain — fused to different segments of PIF3 as the bait, against phytochrome prey. Over 30% of phytochrome B (phyB) was precipitated by GAD–PIF3; a phyB mutant lacking its N-terminal 37 amino acids gave about 10%, phytochrome A (phyA) about 5%, and GAD on its own close to zero. **A pull-down returns a percentage rather than a verdict, so deleting 37 residues from phyB shows up as a fall from 30% to 10% instead of as an interaction that vanishes.**",
      cn: "同样的做法，把 GAD——即 GAL4 的转录激活结构域——与 PIF3 的不同区段相连做成钓饵，去钓光敏素。结果是：超过 30% 的光敏素 B（phyB）能被 GAD–PIF3 沉淀下来；缺失 N 端第 37 位氨基酸的 phyB 突变体约 10%，光敏素 A（phyA）约 5%，而单独的 GAD 对照接近于零。**沉降实验给出的是一个百分数而不是一个判决，所以从 phyB 上去掉 37 个残基，表现出来是从 30% 掉到 10%，而不是相互作用整个消失。**",
      src: "现分 p.223, p.225（图 6-27）"
    },
    {
      link_en: "every readout so far has needed the pair taken out of the cell or put into a yeast; the next one does not",
      link_cn: "到此为止的每一种读出，都要么把这一对拿出细胞、要么把它塞进酵母；下一种不必",
      en: "Fluorescence resonance energy transfer (FRET) is energy passing from a fluorescent donor to a fluorescent acceptor by dipole–dipole coupling without radiation, and it needs three conditions at once: donor and acceptor 1–10 nm apart, the donor's emission spectrum overlapping the acceptor's absorption spectrum, and the two dipoles in a suitable spatial orientation. Two probes make it visible: protein A carrying cyan fluorescent protein (CFP) and protein B carrying yellow fluorescent protein (YFP). Held apart, they give only CFP's 480 nm emission under 440 nm excitation; brought together by an interaction, the same excitation yields YFP's 535 nm emission, and fluorescence imaging records the colour change inside the cell. **Any one of the three conditions failing leaves no 535 nm signal, so an absent FRET is equally consistent with two proteins that never bind and two that bind in the wrong orientation.**",
      cn: "荧光共振能量转移（fluorescence resonance energy transfer, FRET）是荧光能量给体与受体之间通过偶极–偶极耦合作用、以非辐射方式转移能量的过程，它同时需要三个条件：给体与受体相距 1~10 nm；给体的发射光谱与受体的吸收光谱有一定重叠；两者的偶极具有一定的空间取向。让它可见的是两个探针：蛋白质 A 上接青色荧光蛋白（CFP），蛋白质 B 上接黄色荧光蛋白（YFP）。两者相距较远时，440 nm 激发下只看得到 CFP 的 480 nm 发射；发生相互作用而彼此靠近时，同样的激发给出的是 YFP 的 535 nm 发射，再与荧光成像技术联用，就能在细胞内把这个色彩变化记录下来。**三个条件里任何一个不满足，535 nm 的信号就都不会出现；所以「没有 FRET」这件事，对「两个蛋白从不结合」和「两个蛋白结合了但取向不对」是同样成立的。**",
      src: "现分 p.225, p.226（图 6-28）"
    },
    {
      link_en: "and the same in-cell logic, turned back onto DNA, gives the method that reads a protein's address on the genome",
      link_cn: "把这套「在细胞内做」的思路调回 DNA 上，就得到了能读出一个蛋白在基因组上的地址的方法",
      recall_en: "the one-hybrid layout asked which protein binds a chosen DNA; this asks which DNA a chosen protein binds",
      recall_cn: "单杂交问的是「哪个蛋白结合这段选定的 DNA」，这里问的是反过来的「这个选定的蛋白结合哪些 DNA」",
      en: "Chromatin immunoprecipitation (ChIP) is that question asked of DNA and protein inside a living cell. The procedure has five moves: protein–DNA complexes are fixed while the cells are alive; sonication or enzyme treatment cuts the chromatin randomly into small fragments of a certain length; an antibody recognises its antigen and precipitates the complex, enriching the DNA fragments bound to the protein of interest; those fragments are purified, end-repaired and given adaptors; and high-throughput sequencing reads them. What comes out is the sequence of the bound DNA, its position in the genome, the strength of binding, and its effect on gene expression. **ChIP hands back a fragment of a certain length, so it places a protein on a stretch of chromatin rather than on a base.**",
      cn: "染色质免疫共沉淀（chromatin immunoprecipitation, ChIP）就是把这个问题拿到活细胞里，对着 DNA 和蛋白质去问。流程分五步：在活细胞状态下固定蛋白质–DNA 复合物；用超声或酶处理把染色质随机切断成一定长度的小片段；用抗原抗体的特异性识别反应沉淀该复合体，从而富集与目的蛋白相结合的 DNA 片段；把这些片段纯化、末端修复并加上接头；最后高通量测序把它们读出来。读出来的东西包括：结合的 DNA 序列特征、它在基因组上的位置、结合亲和程度，以及它对基因表达的影响。**ChIP 交还给你的是一段有一定长度的片段，所以它把一个蛋白定位到染色质的一段上，而不是定位到某一个碱基上。**",
      src: "现分 p.226, p.227（图 6-29、图 6-30）"
    },
    {
      link_en: "and the antibody does not have to be raised against a transcription factor",
      link_cn: "而这支抗体，并不非得是针对某个转录因子做出来的",
      en: "ChIP reaches beyond transcription regulators. Run with an antibody against a covalent modification of a histone, it relates the placement of that modification to gene expression, qualitatively or quantitatively. Done genome-wide in cotton with an antibody against the histone modification H3K4me3, the enrichment track carries peaks of about 31 and about 23 sitting over the 5′ ends of two genes, Cotton_A_37370 and Cotton_A_37371, with the gene bodies near zero. **Placing a protein of interest at the promoter region of a named gene is the step that turns a binding measurement into a claim about what that protein does biologically.**",
      cn: "ChIP 的用处不止于转录调控因子。换上一支针对组蛋白某种共价修饰的抗体，它就能把这种修饰的分布与基因表达的关系定性或定量地测出来。在棉花里用针对组蛋白修饰 H3K4me3 的抗体做全基因组水平的检测，富集丰度的轨迹图上出现约 31 和约 23 两个峰，正落在 Cotton_A_37370 与 Cotton_A_37371 这两个基因的 5′ 端附近，而基因体中部几乎为零。**把你研究的目的蛋白定位到某个具体基因的启动子区，这一步才是把一次结合测量变成一句关于这个蛋白生物学功能的论断。**",
      src: "现分 p.226, p.227（图 6-30）"
    },
    {
      link_en: "the last interaction in this chain is not protein with protein but RNA with RNA",
      link_cn: "这一串里最后一种相互作用，发生在 RNA 与 RNA 之间",
      en: "RNA interference (RNAi) is a technique that uses a small double-stranded RNA to degrade the homologous mRNA in a cell efficiently and specifically, blocking expression of the target gene so that the cell shows the phenotype of having lost it. The first observation was in an animal: foreign double-stranded RNA injected into a nematode induced specific silencing of gene sequences highly homologous to that RNA. The effect has since been found in many animals and in most plants: fruit flies, trypanosomes, planarians and nematodes. Double-stranded RNA (dsRNA) is the trigger, and what it triggers is degradation of the single-stranded RNA complementary to it. **Dicer — a nuclease with RNase Ⅲ activity — cuts dsRNA over 30 nucleotides long into 21–25 nt short interfering RNA (siRNA), and dsRNA too short to be processed into siRNA cannot mediate RNAi at all.**",
      cn: "RNAi（RNA interference，RNA 干涉）是一种技术：它利用双链小 RNA 高效、特异性地降解细胞内的同源 mRNA，从而阻断靶基因表达，使细胞表现出仿佛丢失了这个基因的表型。最早的观察来自一种动物：给线虫注射外源双链 RNA，会诱发与该 RNA 高度同源的基因序列发生特异性「沉默」。此后在很多动物和大部分植物中都陆续发现了这一效应：果蝇、锥虫、涡虫、线虫。双链 RNA（dsRNA）是 RNAi 的触发物，它触发的是与之互补的那条单链 RNA（ssRNA）的降解。**Dicer——一种具有 RNase Ⅲ 活性的核酸酶——把 30 个核苷酸以上的双链 RNA 切成 21~25 个核苷酸的小分子干扰 RNA（siRNA）；而短到不能被有效加工成 siRNA 的双链 RNA，就根本不能介导 RNAi。**",
      src: "现分 p.226, p.227, p.228"
    },
    {
      link_en: "and from one siRNA the cell builds both a cutting machine and a way of making more siRNA",
      link_cn: "而细胞从一条 siRNA 出发，既造出了切割装置，又造出了继续生产 siRNA 的办法",
      recall_en: "gene knockout removed the gene from the chromosome; this leaves the gene and destroys its message",
      recall_cn: "基因敲除是把基因从染色体上去掉；这里基因还在，被毁掉的是它的信使",
      en: "An siRNA has a characteristic structure: a 5′ phosphate group and a 3′ hydroxyl, with two bases of each strand overhanging its 3′ end. Its antisense strand directs assembly of a ribonucleoprotein called the RNA-induced silencing complex (RISC), and RISC cleaves the region of the target mRNA that is complementary to that antisense strand. siRNA doubles as a special primer: an RNA-dependent RNA polymerase (RdRP) copies the target mRNA into fresh dsRNA, which is cut into new siRNA and re-enters the cycle, so even a low injected dose is amplified into complete gene silencing. **Longer dsRNA causes non-specific silencing in mammalian cells and only 21–25 nt siRNA silences specifically there, and throughout it is the mRNA that is destroyed while the target gene stays in the genome.**",
      cn: "siRNA 有它特殊的结构特征：5′ 端是磷酸基团、3′ 端是羟基，两条链的 3′ 端各有两个碱基突出于末端。由 siRNA 中的反义链指导合成一种叫 RNA 诱导的沉默复合体（RISC）的核蛋白体，再由 RISC 切割目的 mRNA 分子中与该反义链互补的区域。siRNA 还兼作一种特殊引物：在依赖于 RNA 的 RNA 聚合酶（RdRP）作用下，以目的 mRNA 为模板合成新的双链 RNA，后者又被降解成新的 siRNA 重新进入这个循环；所以即使外源 siRNA 的注入量很低，信号也会被迅速放大，导致全面的基因沉默。**在哺乳动物细胞里，较长的双链 RNA 会引起非特异性沉默，只有 21~25 个核苷酸的 siRNA 才是特异的；而从头到尾被摧毁的都是 mRNA，靶基因本身仍然留在基因组上。**",
      /* No `see` entry here. SPINE_SPEC's `see` shape uses bare `en:` / `cn:` keys,
         and tools/check-spans.py scans for those key names by regex across the whole
         file — so a see entry is read as a step field with zero bold runs and is
         reported as a defect. The cross-reference to M-6-2 is made in the prose
         above instead. */
      src: "现分 p.228"
    }
  ]
};
