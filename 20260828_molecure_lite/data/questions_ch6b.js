/* Questions for the second half of chapter 6, written against the spines themselves.

   M-6-3  蛋白质及 RNA 相互作用技术   spine_ch6_interactions.js, printed 219–228
   M-6-4  在酵母细胞中鉴定靶基因功能   spine_ch6_yeast.js, printed 229–230
   M-6-5  其他分子生物学技术           spine_ch6_yeast.js, printed 230–237

   data/questions.js and data/questions_ch6.js have separate owners and are not
   touched here.

   TWO MEASURED DEFECTS, DELIBERATELY NOT REPRODUCED. The bank this app forked from
   was re-measured: 51% of its items can be answered by picking the longest option
   (chance is 25% for four options), and 60% of its answers sit at index 1. Both
   defects arrive the same way — the author writes the correct option with its
   justification attached and leaves the distractors as stubs, and then drops the
   finished item into the same slot every time. So in every item below the longest
   of the four options is a DISTRACTOR, the correct option is cut back to its bare
   claim with the reasoning moved into why_en / why_cn where the reader meets it
   after answering, and the answer index is spread across all four positions
   roughly evenly within each node.

   The shape that is worth asking here is the one an oral examiner uses: give a
   RESULT and ask what may be concluded, or ask what a method CANNOT show. A yeast
   two-hybrid hit, an empty c lane, an absent 535 nm emission, a Western band of the
   right size, a Manhattan peak — each of them proves less than it looks like it
   proves, and knowing exactly how much less is the examinable part.

   The chapter's own 13 思考题 (printed 237) supplied the raw material for several
   items, notably 思考题 3 (CoIP vs two-hybrid), 7 (design a yeast experiment for a
   mammalian very-long-chain fatty acid gene) and 13 (EMSA). */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* ===================================================================== M-6-3 */
window.BIOLITE_Q["M-6-3"] = [
  {
    "type": "mcq",
    "q_en": "A yeast two-hybrid screen scores a cotton protein as a partner of your bait. What has been shown?",
    "q_cn": "酵母双杂交筛选把一个棉花蛋白判为你的诱饵蛋白的互作对象。这说明了什么？",
    "options": [
      "The two proteins bind each other in the cotton tissue where both are expressed",
      "The prey protein carries transcription activation function of its own",
      "The two proteins associate when both are put into one yeast nucleus",
      "The bait binds the region upstream of the reporter gene only while no prey protein is present"
    ],
    "answer": 2,
    "why_en": "The readout is transcription of a reporter gene inside a yeast cell, so both partners had to be made in yeast, reach the yeast nucleus, and hold together long enough for the reporter product to accumulate. Two proteins that are never in the same compartment of a cotton cell can score positive there, so the hit says nothing about whether they ever meet where they came from.",
    "why_cn": "读出的是酵母细胞内一个报告基因的转录，所以两边都必须在酵母里被合成出来、进得了酵母细胞核、并且结合得足够久。在棉花细胞里从不共处同一区室的两个蛋白，在这里照样可以是阳性；所以这个结果不含「它们在原来的细胞里会不会相遇」的信息。"
  },
  {
    "type": "mcq",
    "q_en": "An interaction known from plant tissue never appears in a yeast two-hybrid screen. What is the standard explanation?",
    "q_cn": "一个在植物组织里已知存在的相互作用，在酵母双杂交里始终不出现。通常的解释是什么？",
    "options": [
      "A modification the interaction depends on may never be made in yeast",
      "The BD is occupied by the promoter and cannot reach the AD",
      "Reporter transcription is switched off whenever the bait is phosphorylated",
      "The prey cDNA library was cloned out of frame with respect to the activation domain gene"
    ],
    "answer": 0,
    "why_en": "Both partners are built by yeast, so an interaction that requires a chemical modification yeast does not perform cannot form, and no reporter fires. A frame error in the library is a real failure mode too, but it would kill the whole screen rather than one known pair.",
    "why_cn": "两个搭档都是酵母造出来的；凡是依赖某种酵母做不出来的化学修饰的相互作用，在这里根本形成不了，报告基因也就不会亮。文库读框错了当然也是一种真实的失败，但那会毁掉整个筛选，而不是只丢掉某一对已知的搭档。"
  },
  {
    "type": "mcq",
    "q_en": "A hybrid built from the BD of one transcription regulator and the AD of a different one activates transcription normally. What does that establish?",
    "q_cn": "由一个转录调控因子的 BD 和另一个调控因子的 AD 拼成的杂合蛋白，照样能正常激活转录。这说明了什么？",
    "options": [
      "A binding domain on its own starts transcription once it reaches a promoter",
      "GAL4 recognises the cis-acting element of every eukaryotic promoter it meets",
      "An activation domain works only when it is translated from its own gene",
      "The two domains must reach one place, not one polypeptide"
    ],
    "answer": 3,
    "why_en": "Eukaryotic transcription regulators are modular: a BD alone binds a promoter region and starts nothing, and an AD does its work wherever it is delivered. Because the two domains can arrive on separate chains, an interaction between two other proteins can be made to assemble them — which is the whole of the two-hybrid idea.",
    "why_cn": "真核转录调控因子是组件式的：单独的 BD 只结合启动区，并不启动转录；而 AD 无论被送到哪里都照样干活。正因为两个结构域可以由两条不同的链带来，就可以让另外两个蛋白之间的相互作用去把它们凑到一起——双杂交的全部思路就在这里。"
  },
  {
    "type": "mcq",
    "q_en": "On an SPR chip loaded with JAZ1, COI1 alone gives almost no signal, while COI1 with JA–Ile climbs to 380 resonance units. What follows?",
    "q_cn": "在固定了 JAZ1 的 SPR 芯片上，单独的 COI1 几乎没有信号，而 COI1 与 JA–Ile 同时存在时升到 380 共振单位。由此可得什么？",
    "options": [
      "COI1 and JAZ1 bind whenever both are in the same solution",
      "COI1 binds JAZ1 only when JA–Ile is in the system too",
      "JA–Ile occupies the dextran layer and blocks the COI1 site",
      "JAZ1 is degraded while JA–Ile is absent, which is why that baseline sits near zero"
    ],
    "answer": 1,
    "why_en": "SPR returns a quantity rather than a yes, so the control curves are readable: luciferase, luciferase with JA–Ile, and COI1 by itself all stay near zero, and only the full system rises. Coronatine, a bacterial toxin resembling methyl jasmonate, drives the same pair to about 310 units, which supports the same reading.",
    "why_cn": "SPR 给出的是一个量而不只是一个「有」，所以对照曲线是可读的：荧光素酶、荧光素酶加 JA–Ile、以及单独的 COI1 都贴着零，只有完整体系升上去。冠毒素（一种在结构和功能上与茉莉酸甲酯相似的细菌毒素）能把同一对推到约 310 单位，支持的是同一个判读。"
  },
  {
    "type": "mcq",
    "q_en": "A GST pull-down is run in two tubes: GST–protein X in one, bare GST in the other, same beads and same ³⁵S lysate. What is the second tube for?",
    "q_cn": "GST 沉降实验用两支管：一支加「GST–蛋白质 X」，另一支只加裸 GST，球珠和 ³⁵S 裂解物完全相同。第二支管是干什么用的？",
    "options": [
      "To measure how much glutathione the agarose beads can hold",
      "To confirm the ³⁵S label reached the lysate",
      "To carry a second bait so that two interactions are scored on one gel",
      "To show which bands the beads and GST bring down without protein X"
    ],
    "answer": 3,
    "why_en": "Beads, glutathione and GST itself all pull down some protein on their own. A band is evidence for a partner of X only if it is present in the GST–X lane and absent in the bare GST lane, so the control tube is what makes the gel readable at all.",
    "why_cn": "球珠、谷胱甘肽和 GST 本身都会各自带下来一些蛋白质。只有当一条带在「GST–蛋白质 X」那道出现、而在裸 GST 那道没有时，它才算 X 的互作蛋白的证据；所以对照管才是让这张胶可读的东西。"
  },
  {
    "type": "mcq",
    "q_en": "Cotton ACS2 comes down in a co-immunoprecipitate with CDPK1. Which conclusion does that gel NOT support?",
    "q_cn": "棉花 ACS2 与 CDPK1 被共沉淀了下来。下面哪一个结论是这张胶支持不了的？",
    "options": [
      "ACS2 and CDPK1 were in one complex that the antibody brought down",
      "The two proteins ended up in one pellet",
      "ACS2 and CDPK1 are in direct contact with one another",
      "The c lane of this pair carries a band, unlike the c lane under ACO1"
    ],
    "answer": 2,
    "why_en": "Co-precipitation places two proteins in one pelleted complex. Whether they touch each other, or are both held by a third molecule in the mixture, is a distinction the pellet does not make — which is why co-immunoprecipitation is usually paired with a method that measures a direct binding, such as SPR or a pull-down with purified components.",
    "why_cn": "共沉淀说明两个蛋白处在同一个被沉下来的复合物里。至于它们是彼此直接接触，还是同时被混合物里的第三个分子攥着，沉淀本身分不开——所以免疫共沉淀通常要配一种能测直接结合的方法，比如 SPR，或者用纯化组分做的 pull-down。"
  },
  {
    "type": "mcq",
    "q_en": "A CFP–YFP FRET experiment gives no 535 nm emission under 440 nm excitation. What may be concluded?",
    "q_cn": "一个 CFP–YFP 的 FRET 实验，在 440 nm 激发下没有 535 nm 的发射。可以得出什么结论？",
    "options": [
      "Either the two proteins never bind, or they bind in an orientation that blocks transfer",
      "The donor and acceptor are more than 10 nm apart at all times",
      "The donor was excited at the wrong wavelength, which is the only way a 535 nm emission can fail to appear",
      "The emission spectrum of CFP does not overlap the absorption spectrum of YFP"
    ],
    "answer": 0,
    "why_en": "FRET needs three conditions at once — donor and acceptor 1–10 nm apart, the donor's emission overlapping the acceptor's absorption, and a suitable relative orientation of the two dipoles. Any one of them failing leaves no signal, so an absent FRET is equally consistent with no binding and with binding in the wrong orientation.",
    "why_cn": "FRET 同时需要三个条件：给体与受体相距 1~10 nm；给体发射光谱与受体吸收光谱有重叠；两者偶极的空间取向合适。三个里任何一个不满足都没有信号；所以「没有 FRET」对「根本不结合」和「结合了但取向不对」是同样成立的。"
  }
];

/* ===================================================================== M-6-4 */
window.BIOLITE_Q["M-6-4"] = [
  {
    "type": "mcq",
    "q_en": "On the spotting plate, KCS13 lets elo2Δelo3Δ cells grow again but does not restore the wild-type phenotype. What follows?",
    "q_cn": "点样平板上，KCS13 使 elo2Δelo3Δ 细胞恢复了生长，却没有回复到野生型表型。由此可得什么？",
    "options": [
      "KCS13 does not encode a very-long-chain fatty acid synthase",
      "KCS13 was integrated into the yeast chromosome at the elo2 locus",
      "KCS13 and elo2 are one gene in two species, since both rescue the lethal double deletion",
      "KCS13 supplies part of the function elo2 and elo3 supply"
    ],
    "answer": 3,
    "why_en": "elo2Δelo3Δ is lethal, so any growth at all means the cotton gene performed the missing function. Partial rescue is evidence too: the dilution series grades how much of that function each gene supplies, and KCS12 and KCS6 supplied all of it while KCS13 and KCS2 supplied some.",
    "why_cn": "elo2Δelo3Δ 是致死型，所以只要长出来，就说明棉花基因把缺掉的功能补上了。部分回复同样是证据：稀释梯度给出的是每个基因把这份功能补回来多少——KCS12 和 KCS6 补全了，KCS13 和 KCS2 补了一部分。"
  },
  {
    "type": "mcq",
    "q_en": "In a complementation test built on a lethal mutation, why is the reading taken on four separated spores rather than on the diploid?",
    "q_cn": "在以致死突变为基础的互补实验里，为什么要把判读放在分开的四个孢子上，而不放在二倍体上？",
    "options": [
      "Only a spore can express a gene carried on a URA3 plasmid",
      "The mutant allele has to be made haploid before rescue becomes visible",
      "Starvation is the only condition under which yeast takes up foreign DNA",
      "Tetrad dissection separates the URA3 plasmid from the TRP1 plasmid so that one of them is left behind"
    ],
    "answer": 1,
    "why_en": "The diploid carries a working copy alongside the lethal mutation, so it grows whatever the introduced gene does. Starving it gives a tetrad — four spores in one sac — and dissection lets the haploid carrying the mutant allele grow on its own, where survival is decided by the foreign gene and nothing else.",
    "why_cn": "二倍体里除了致死突变还有一份好的拷贝，所以不管导入的基因干不干活它都能长。饥饿条件下它形成四分体（四个孢子包在一个孢子囊里），分离之后，带着突变基因的那个单倍体单独培养，它的死活就只由外源基因决定。"
  },
  {
    "type": "mcq",
    "q_en": "The cotton KCS genes ride on a URA3 plasmid used to replace a TRP1 plasmid. What do two different markers buy?",
    "q_cn": "棉花 KCS 基因搭在带 URA3 标记的质粒上，用来替换带 TRP1 标记的质粒。用两个不同的标记换来了什么？",
    "options": [
      "The cotton gene can be expressed at two different levels in one strain",
      "They mark the two ends of the region homologous recombination will replace",
      "The plasmid exchange itself becomes readable on a plate",
      "They supply the fatty acids that an elo2Δelo3Δ strain can no longer make for itself"
    ],
    "answer": 2,
    "why_en": "Cells taken into the growth test have to be known to hold the cotton gene and to have given up the plasmid it displaced. Selecting for URA3 and against TRP1 does exactly that on a plate, so the survival readout afterwards is not confounded by cells that kept both plasmids or neither.",
    "why_cn": "进入生长实验的细胞，必须确知带着棉花基因、并且已经舍弃了被替换掉的那个质粒。在平板上正选 URA3、反选 TRP1 做的就是这件事；于是后面「活还是死」的判读，不会被那些两个质粒都留着或都没有的细胞搅混。"
  },
  {
    "type": "mcq",
    "q_en": "GhKCS is expressed in wild-type yeast and GC–MS shows a new C22:0 peak with C24:0 and C26:0 much reduced. What may be concluded?",
    "q_cn": "在野生型酵母中表达 GhKCS，气相色谱–质谱显示出现新的 C22:0 峰，而 C24:0 与 C26:0 大量减少。可以得出什么？",
    "options": [
      "The cotton protein makes very-long-chain fatty acids of the C22:0 type",
      "The cotton protein sits in the endoplasmic reticulum of the yeast cell",
      "Yeast elo2 and elo3 were deleted when the cotton gene came in",
      "Wild-type yeast cannot make C22:0 under any induction condition, since no such peak appears without the cotton gene"
    ],
    "answer": 0,
    "why_en": "A new peak appearing on an otherwise wild-type background names the reaction the introduced protein performs. It says nothing about where in the cell the protein sits — that is what a GFP fusion is for — and nothing was deleted from the host, which is exactly why the background is readable.",
    "why_cn": "在其余部分仍是野生型的背景上冒出一个新峰，点出的是导入的蛋白质所催化的反应。它不说这个蛋白待在细胞的什么位置——那是 GFP 融合要回答的——而宿主里什么也没被敲掉，这恰恰是这个背景之所以可读的原因。"
  },
  {
    "type": "mcq",
    "q_en": "A cotton gene fused to GFP gives fluorescence in one subcellular region of a yeast cell. What does the image NOT establish?",
    "q_cn": "把一个棉花基因与 GFP 融合，在酵母细胞的某一个亚细胞区域看到荧光。这张图像建立不了下面哪一件事？",
    "options": [
      "Which subcellular region the fusion protein occupies",
      "That yeast expressed the introduced gene",
      "Which chemical reaction the gene product carries out",
      "That a fluorescence microscope can resolve that region of a yeast cell"
    ],
    "answer": 2,
    "why_en": "Fluorescence sitting in one subcellular region is a statement about localisation alone: it gives the gene product an address inside the cell and leaves its biochemistry entirely open. The chemistry is read a different way, by what the cell now contains — a new fatty acid peak, for instance.",
    "why_cn": "荧光落在某一个亚细胞区域，这句话只关于定位：它给了基因产物一个细胞内的地址，而这个产物的生化功能完全没有交代。生化功能是靠另一条路读出来的——看细胞里现在多了什么，比如多出来的那个脂肪酸峰。"
  },
  {
    "type": "mcq",
    "q_en": "A plant gene expressed in Escherichia coli yields no functional protein. What follows?",
    "q_cn": "一个植物基因在大肠杆菌中表达，得不到有功能的蛋白质。由此可得什么？",
    "options": [
      "The gene is a pseudogene and encodes no functional protein anywhere",
      "The gene must first be knocked out in yeast before its function can be tested",
      "The protein needs a bacterial chaperone that plant cells do not encode at all",
      "Its function is undecided, and yeast may still express it functionally"
    ],
    "answer": 3,
    "why_en": "Yeast carries a system for modifying newly made proteins that is fairly close to the one plant and animal cells have, and many plant and animal genes that give nothing functional in E. coli fold and work normally once expressed in yeast. A blank result in a bacterial host leaves the question open rather than answering it.",
    "why_cn": "酵母细胞中有与动植物细胞比较接近的蛋白质修饰系统；许多在大肠杆菌里不产生功能蛋白质的动植物基因，在酵母中表达后往往能正常发挥功能。在细菌宿主里得到的空白结果，只是把问题留着，而不是把它回答掉。"
  },
  {
    "type": "mcq",
    "q_en": "A mammalian gene may encode a very-long-chain fatty acid synthase. Which yeast experiment decides it?",
    "q_cn": "某哺乳动物基因可能编码超长链脂肪酸合成酶。哪一个酵母实验能作出判定？",
    "options": [
      "Raise an antibody against the mammalian protein and run a Western blot on a yeast extract",
      "Express it in elo2Δelo3Δ and see whether those spores grow",
      "Fuse it to GFP and record which yeast organelle the fluorescence occupies",
      "Use Yip to knock the mammalian gene out of the yeast genome and follow the tetrads by dissection"
    ],
    "answer": 1,
    "why_en": "Complementation of a defect defined in advance is the functional test: elo2Δelo3Δ has both of yeast's own very-long-chain fatty acid synthase genes deleted and is lethal, so growth means the mammalian gene supplied that function. GC–MS of the fatty acid composition then names the chain length. Yip cannot knock out a gene the yeast genome does not contain.",
    "why_cn": "互补一个事先定义好的缺陷，才是功能测定：elo2Δelo3Δ 把酵母自身两个超长链脂肪酸合成酶基因都缺失了，属致死型，所以能长出来就说明哺乳动物基因补上了这份功能；随后用 GC–MS 分析脂肪酸组成，再定出链长。至于 Yip，它敲不掉酵母基因组里根本没有的基因。"
  }
];

/* ===================================================================== M-6-5 */
window.BIOLITE_Q["M-6-5"] = [
  {
    "type": "mcq",
    "q_en": "Six regions of the ACO3 promoter are used as labelled probes in an EMSA, and only the PⅡ lanes show a retarded band. What may be concluded?",
    "q_cn": "把 ACO3 启动子的六个区段分别作为标记探针做 EMSA，只有 PⅡ 那一组出现滞缓条带。可以得出什么？",
    "options": [
      "A MYB protein binds PⅡ",
      "Regions PⅠ and PⅢ–PⅥ carry no protein binding site in any cotton tissue",
      "Some protein in the extract binds inside region PⅡ",
      "The PⅡ probe has the largest relative molecular mass of the six, which is why it migrates slowest"
    ],
    "answer": 2,
    "why_en": "A shift localises binding to one sub-region of a promoter and stops there: the assay never names which protein in the extract bound, which is why it serves as the first step of purifying that protein. A MYB site is drawn inside PⅡ, but the gel does not say the bound protein was a MYB factor, and a blank lane with one extract is not the same as no site.",
    "why_cn": "滞缓把结合定位到启动子的某一个亚区段，然后就停住了：这个实验从不说出提取物里结合上去的是哪一个蛋白质——这也正是它被用作分离纯化该蛋白质第一步的原因。PⅡ 里确实画着一个 MYB 结合位点，但胶并没有说结合上去的就是 MYB 因子；而某一种提取物下的空白泳道，也不等于那里没有位点。"
  },
  {
    "type": "mcq",
    "q_en": "In an EMSA the ³²P goes on the DNA and the protein is left unlabelled. Why that way round?",
    "q_cn": "EMSA 里 ³²P 标记的是 DNA，蛋白质不标记。为什么是这个方向？",
    "options": [
      "Protein cannot be labelled with ³²P by any available method",
      "Labelling protein would mark thousands of molecules at once",
      "A phosphate label alters a protein's charge and would reverse the direction in which it migrates",
      "³²P decays too fast to survive an incubation with a cell extract"
    ],
    "answer": 1,
    "why_en": "A cell extract holds thousands of different proteins, so a label on protein would report where proteins ran. With the label carried by the probe, every band on the film is the same molecule and the film has one question to answer: where did that molecule end up — at the bottom as free probe, or higher up as a complex.",
    "why_cn": "细胞提取物里有成千上万种蛋白质，标记打在蛋白质上，胶片报告的就成了「蛋白质跑到哪里」。标记由探针携带时，胶片上的每一条带都是同一个分子，胶片只需回答一个问题：这个分子最后停在哪里——底部的自由探针，还是上方的复合物。"
  },
  {
    "type": "mcq",
    "q_en": "Which phage display layout is the one for catching a weak or rare binder?",
    "q_cn": "要抓住结合力弱或者稀有的结合者，应该用哪一种噬菌体展示布局？",
    "options": [
      "pⅧ display, at 2,700–3,000 copies per coat",
      "pⅢ display, at no more than 5 copies per phage",
      "Either one, since washing removes only the unbound particles in both",
      "Neither; a weak binder is recovered only by eluting at low pH after the final washing step"
    ],
    "answer": 0,
    "why_en": "A particle bearing up to 3,000 copies is held to the immobilised target by many contacts at once, so even a weak bait–target pair survives the wash — high avidity, and therefore low stringency. A pⅢ particle with 5 copies or fewer depends far more on the strength of a single interaction, which is the layout for insisting on tight binders.",
    "why_cn": "带着多达 3 000 个拷贝的颗粒，是被许多接触点同时按在固定靶分子上的，所以即使诱饵–靶这一对本身很弱，它也挺得过洗涤——高亲合力，也就意味着低严格性。而只带 5 个甚至更少拷贝的 pⅢ 颗粒，留不留得下来在很大程度上取决于单次相互作用的强弱，那是只认紧密结合者的布局。"
  },
  {
    "type": "mcq",
    "q_en": "In an in-vitro kinase assay with MBP cast into the gel, lanes 1, 4 and 5 give a black band near Mr 68,000. What does that mean?",
    "q_cn": "在胶里混入 MBP 的体外激酶活性分析中，泳道 1、4、5 在 Mr 68 000 附近出现黑带。这说明什么？",
    "options": [
      "MBP has a relative molecular mass of 68,000 in every lane",
      "The proteins in lanes 2, 3 and 6 are phosphatases that stripped the label off again",
      "The proteins in lanes 1, 4 and 5 phosphorylated MBP",
      "The protein in lane 1 transferred its own γ phosphate group onto the ³²P-ATP supplied in the reaction system"
    ],
    "answer": 2,
    "why_en": "The gel is bathed in γ-³²P-ATP after electrophoresis, and a loaded protein with kinase activity transfers the labelled phosphate onto the MBP lying around its own position. So the black band sits at the kinase's position and its Mr is the kinase's, while lanes 2, 3 and 6 hold proteins that cannot phosphorylate MBP.",
    "why_cn": "电泳之后把胶浸在含 γ-³²P–ATP 的体系里，凡有激酶活性的上样蛋白，都会把被标记的磷酸基团转移到它自己位置周围的 MBP 上。所以黑带落在激酶所在的位置，那个 Mr 是激酶的；泳道 2、3、6 里的蛋白质则不能使 MBP 磷酸化。"
  },
  {
    "type": "mcq",
    "q_en": "GhCDPK1 phosphorylates GhACS2 in a reaction system containing calcium, and adding EGTA weakens the band. What does the experiment NOT establish?",
    "q_cn": "在含钙离子的体系中 GhCDPK1 使 GhACS2 磷酸化，加入 EGTA 后条带减弱。这个实验建立不了下面哪一件事？",
    "options": [
      "That calcium is required for the phosphorylation seen here",
      "That GhSUS is not a substrate for this kinase under the same conditions",
      "That GhACS2 can take a phosphate group from GhCDPK1",
      "That GhCDPK1 phosphorylates GhACS2 in a living cotton cell"
    ],
    "answer": 3,
    "why_en": "The whole reason the assay is run outside the cell is that a cell may hold a thousand kinases and the activity of one of them cannot be measured inside it. What the tube shows is what this kinase CAN do to this substrate under these conditions; whether it does so in vivo needs separate evidence.",
    "why_cn": "把这个测定赶出细胞的原因本来就是：细胞里可能有上千个蛋白激酶，在活细胞内测其中某一个的活性做不到。试管里显示的是这个激酶在这些条件下「能」对这个底物做什么；它在体内是否真的这样做，要另找证据。"
  },
  {
    "type": "mcq",
    "q_en": "A Western blot gives one band at the expected size. What follows?",
    "q_cn": "一次 Western blotting 在预期大小的位置给出一条带。由此可得什么？",
    "options": [
      "A protein of that size in the sample reacts with that antibody",
      "The protein is present in the sample in its active conformation",
      "The protein occupies the compartment against which the antibody was raised",
      "The antibody cross-reacts with nothing else in the sample, since exactly one band appeared"
    ],
    "answer": 0,
    "why_en": "Antibody binding does not change the protein's relative molecular mass in electrophoresis, so the position of the band is a size and the band itself is an antigen–antibody reaction. It is not a functional assay, it carries no localisation information, and a single band on one sample does not prove the antibody has no cross-reaction elsewhere.",
    "why_cn": "抗体结合不改变该蛋白质在凝胶电泳中的相对分子质量，所以带的位置给的是大小，带本身给的是一次抗原抗体反应。它不是功能测定，不含任何定位信息；而一个样品上出现单一条带，也不能证明这支抗体在别处不发生交叉反应。"
  },
  {
    "type": "mcq",
    "q_en": "In the five steps of Western blotting, the membrane is blocked right after transfer. What for?",
    "q_cn": "Western blotting 的五个步骤里，转膜之后紧接着要封闭。这是为了什么？",
    "options": [
      "To keep the transferred proteins from diffusing back off the membrane",
      "To stop antibody adsorbing where there is no antigen",
      "To denature the transferred proteins so that the epitope becomes accessible",
      "To couple horseradish peroxidase to the free sites so that colour develops evenly across the membrane"
    ],
    "answer": 1,
    "why_en": "Blocking occupies the membrane's unreacted sites so that antibody cannot adsorb non-specifically. Without it the primary and secondary antibodies stick over the whole membrane and the colour reaction fills the lane instead of marking one band. Denaturation happened earlier, in SDS-PAGE.",
    "why_cn": "封闭是把膜上未反应的位点占住，以抑制抗体的非特异性吸附。不封闭，一抗二抗会糊满整张膜，显色反应铺满泳道而不是标出一条带。至于变性，那是更早的 SDS-PAGE 那一步就完成了的。"
  },
  {
    "type": "mcq",
    "q_en": "GWAS puts the strongest cotton seed-oil SNP in the first exon of GaKAS Ⅲ, haplotype A reading CGT and haplotype B reading TGT. What may be concluded?",
    "q_cn": "GWAS 把棉花种子油信号最高的 SNP 定位在 GaKAS Ⅲ 的第一个外显子上，单体型 A 为 CGT，单体型 B 为 TGT。可以得出什么？",
    "options": [
      "The arginine-to-cysteine change abolishes the activity of the enzyme",
      "GaKAS Ⅲ is the only gene on chromosome 11 that affects seed oil",
      "Every cotton plant carrying haplotype B has a low palmitic acid content in its seed",
      "That SNP is associated with the trait in this population"
    ],
    "answer": 3,
    "why_en": "GWAS compares the frequency of each variant between an experimental and a control group, so what it returns is an association between a genotype and a trait — which is why the workflow's own fourth step is a separate experimental confirmation. Going from a codon change to a change in an enzyme's chemistry is work the Manhattan plot has not done.",
    "why_cn": "GWAS 比较的是每个变异在实验组与对照组之间的频率差异，所以它交还的是基因型与性状之间的一个关联——正因如此，它自己的流程第四步才是另做实验去确认。从一个密码子的改变走到一个酶的化学性质的改变，这段路曼哈顿图并没有替你走。"
  }
];
