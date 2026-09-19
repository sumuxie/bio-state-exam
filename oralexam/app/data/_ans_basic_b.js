/* _ans_basic_b.js —— Basic Lab Techniques 三十四题的后一半（_qbank.js 里 basic 数组的 #17–#33），
   短口答，不是卡。

   2026-09-19 Ruojin 提的：Biochemistry 三十二题有整套卡，Microbiology 三十二题前几天给了短口答，
   Basic Lab Techniques 这三十四题到现在只有题面。考试 2026-10-05。做卡来不及，所以这一批照
   _ans_micro_a / _ans_micro_b 的样子做：「能出声说出来的三到五句」＋ 一两行中文。
   没有四段脚本、没有追问树、没有图、没有公式块、没有识别变体。写着写着开始像卡了，就停。
   前一半（#0–#16）在 _ans_basic_a.js，两个文件 concat 到同一个 window.ANS_BASIC。

   ⚠ 这一科跟另外两科不一样：这些是她每周在台子上做的事（标准曲线、移液、pH 计、离心、
   蛋白表达、层析、电泳、安全）。她八成会做，缺的是六十秒的说法。所以英文写成
   「一个会做事的人在讲自己的做法」：按顺序说做什么，并说清每一步是在防哪一个具体的失败，
   而不是背教科书段落。仪器名、单位、对照——考官听方法题就听这三样。

   出处顺序：
     ① ../jiri_bank/data/ —— 同一批题目单做的题库，house answer。凡是它写过的说法就照它的，
        免得她把同一件事学两个版本。导师题目单上的「Basic」在 jiri_bank 里写作「Lab」。
        我这十七题在它那里**全部**有 house answer：q_s3.js 十一题（S3 Lab 1 2 5 6 9 10 13 16 17 19 20）、
        q_s4.js 五题（S3 Lab 7 8 11 12 18）、q_s2.js 一题（S2 Lab 5 · S3 Lab 3 —— 它把「分光光度法原理」
        并进了 Lambert-Beer 那一条；Lambert-Beer 本身是前一半 #7，所以这里只讲仪器、空白和线性范围，
        不重复定律，免得两个文件说同一段）。
     ② ../PESB/ 与 ../pesbexplain/ —— 她上过的 Protein Engineering 课，纯化那一章重叠很实：
        2-29 层析基础（平衡/结合/洗涤/洗脱四步 ＋ 先读穿透液）· 2-31 五种模式（HIC 与反相同一原理、
        蛋白活不活得下来不同，老师自己说这是标准考试对比点）· 2-32…2-42 各模式与步骤顺序 ·
        2-43 SDS 干的三件事 · 2-44 蛋白浓度测定（A280 / Bradford / BCA 与还原剂不容）。
        ⚠ jiri_bank 这些 Lab 条目自己标的 sourceNodes（1-1 1-7 1-8 1-16）跟 pesbexplain 的节点对不上
        （那四个分别是「什么是蛋白质工程」「1922 年纯化胰岛素」「克隆设计软件」「TA 克隆」），
        所以不算出处，跟 _ans_micro_b.js 里记的是同一类错标。
     ③ 通用实验室做法 —— 前两项给不出的，中文行里明写 general，办法照 taq.js 那张卡。
   ⛔ 捷克生化书不是这里的出处：它讲生化，不讲实验技术，book/pages 一页都不要引。
   ⛔ 数字一律不编。121 °C / 15–20 min / 15 psi、160–180 °C / 2 h、0.22 µm、70% 乙醇、
      A260=1 对应 dsDNA 约 50 µg/mL、RNA 约 40、A260/A280 1.8 与 2.0、醋酸盐 pKa 4.8、Tris pKa 8.1、
      EDTA 要 pH 8 才溶——都是 jiri_bank house answer 里的常规工作值，中文行里各自注明。

   字段：q 逐字抄自 _qbank.js（两半要能对回导师的题目单）· en 出声说的英文，
   全文只有它在弯引号里面 · cn 一两行中文：轴 ＋ 出处 · warn 可选，只在真有坑的地方写。 */

window.ANS_BASIC = (window.ANS_BASIC || []).concat([

{q:'Describe the principle of immunoassays.',
 en:'“An immunoassay uses the specific binding of an antibody to its antigen to detect or quantify that antigen in a complex mixture, so the antibody supplies the specificity and the label supplies the signal. In a sandwich ELISA I coat the plate with a capture antibody, add the sample, and then add a detection antibody raised against a second epitope on the same antigen. The detection antibody carries an enzyme that turns a substrate into colour, and I read the absorbance on a plate reader and convert it to concentration against a standard curve of known antigen. Requiring two antibodies against two epitopes is what makes the assay specific. The controls decide whether the number means anything, so I run a blank with no antigen and a well with no detection antibody, and lateral flow strips and Western blots are the same idea rearranged.”',
 cn:'轴：抗体给特异性、标记给信号；夹心 ELISA 要两个抗体认两个表位，定量靠标准曲线。出处 jiri_bank q_s3「S3 Lab 20」（house answer）；酶标仪、空白孔、不加检测抗体的对照是 general 通用做法。',
 warn:'⚠ 夹心的两个抗体必须认不同表位——认同一个表位就是互相竞争，信号反而掉下去。还有一条：抗原极高时会有 hook effect，读数反而变低，遇到「太浓反而低」要先稀释再测。'},

{q:'Describe the principle of spectrophotometry.',
 en:'“Spectrophotometry measures how much light of a chosen wavelength a sample absorbs, and it is quantitative because absorbance is proportional to concentration through the Lambert-Beer law. The instrument is a light source, a monochromator that selects the wavelength, a cuvette of fixed path length, and a detector that compares transmitted light with incident light. Absorbance is the logarithm of that ratio, so it carries no units, and the working equation is A equals epsilon times c times l. The control is the blank, a cuvette of everything except the analyte, read first so the instrument subtracts the absorbance of the buffer and the cuvette itself. In practice I check that the reading sits inside the linear range of the instrument, and I dilute and read again when it does not, because at high absorbance the detector saturates and the law fails.”',
 cn:'轴：单色光 ＋ 固定光程 ＋ 空白，读到的吸光度才能换成浓度；仪器四件套（光源、单色器、比色皿、检测器）和「先做空白」是考官在听的。出处 jiri_bank q_s2「S2 Lab 5 · S3 Lab 3」——它把这一题并进了 Lambert-Beer；定律本身在前一半 #7，这里不重复。PESB 2-44 给了应用面（纯蛋白 A280、粗样品 Bradford、有还原剂不用 BCA）。仪器构成与空白操作是 general。',
 warn:'⚠ OD600 不是真正的 Lambert-Beer：那是散射不是吸收，所以它没有 ε，也不能拿去算摩尔浓度。另一条：280 nm 以下要用石英比色皿，塑料和普通玻璃自己就吸紫外。'},

{q:'Describe the process of DNA extraction from bacterial cells.',
 en:'“DNA extraction from bacteria is four steps, and each one solves a specific problem: lyse, remove protein and RNA, separate the DNA, then precipitate it. I lyse with a detergent such as SDS, usually after lysozyme has broken the peptidoglycan open. Proteinase K digests the protein and RNase A removes the RNA, which would otherwise contaminate the prep and inflate any A260 measurement. To separate the DNA I use either phenol and chloroform, which sends protein into the organic phase, or a silica column that binds DNA under high chaotropic salt. Then salt and cold ethanol precipitate the DNA, an ethanol wash removes the residual salt, and I resuspend the pellet in TE buffer. For plasmid DNA I use alkaline lysis instead, because on neutralisation the small closed circular plasmid renatures and stays soluble while the huge chromosomal DNA tangles and precipitates with the protein.”',
 cn:'轴：四步各解决一个问题，最后补一句质粒的碱裂解为什么能把质粒和染色体分开（小、共价闭环、拓扑上两条链没断）。出处 jiri_bank q_s3「S3 Lab 9」（house answer），内容 general；溶菌酶破肽聚糖这一句跟 PESB 2-26 细胞破碎对得上。',
 warn:'⚠ 碱裂解那一步不要涡旋、不要超时：NaOH 里待久了或用力振荡，染色体 DNA 被剪断成小片段就复性得回来，跟质粒一起洗下来——胶上一片拖尾就是这么来的。'},

{q:'Explain the principle of a Western blot.',
 en:'“A Western blot is three separable steps: separate, transfer and probe. I separate the proteins by SDS-PAGE so that migration reflects molecular weight alone, then I transfer the separated bands out of the gel onto a nitrocellulose or PVDF membrane by electroblotting. The transfer is necessary rather than convenient, because the gel pores that made the separation possible are too fine for a bulky antibody to enter, and the soft gel would not survive the repeated washing detection needs. Then I block the membrane, probe with a primary antibody against my protein, and follow it with a labelled secondary antibody that is read most often by chemiluminescence. The family point is worth adding: Southern is DNA, Northern is RNA and Western is protein, and they share the transfer step and differ only in the probe.”',
 cn:'轴：分离、转印、探测三步，而转印是必需不是图方便（抗体钻不进胶孔、胶也扛不住反复洗）。出处 jiri_bank q_s4「S3 Lab 11」（house answer）；SDS-PAGE 那一步接 PESB 2-43。Southern/Northern/Western 是对 Edwin Southern 姓氏的历史玩笑，不是化学。',
 warn:'⚠ 二抗必须是针对一抗所来物种的（比如一抗是兔的，就用 anti-rabbit 二抗）。这一条搞错，整张膜只剩背景。封闭不足也是同一个后果：满膜灰底，不是「蛋白表达高」。'},

{q:'Explain the principles of chromatography.',
 en:'“All chromatography is one idea: the mixture is partitioned between a stationary phase and a mobile phase, and the molecules that interact more with the stationary phase move more slowly. Every mode runs the same four steps, which are equilibrate, bind, wash and elute. Elution is either isocratic at constant conditions, or a gradient that weakens the interaction progressively and releases the bound species in order. What I read at the end is the chromatogram, and the habit worth having is to start from the flow-through. Protein sitting there never bound at all, so the problem is in the binding conditions rather than in the elution. What changes between modes is only which physical property the stationary phase was chosen to exploit, so charge, hydrophobicity, size or specific affinity.”',
 cn:'轴：一个思想（分配 ＋ 迁移速率不同）＋ 四个步骤（平衡、结合、洗涤、洗脱）＋ 一个诊断习惯（先看穿透液）。出处 jiri_bank q_s3「S3 Lab 5」，跟 PESB 2-29 完全对得上（四步和「读一次跑柱从穿透液开始」是老师课上的原话结构）——这是我这十七题里出处最实的一条。',
 warn:'⚠ 上样之前样品必须先换到结合缓冲液（透析或脱盐）。盐或 pH 不对，第一步就不结合，后面怎么洗脱都没用——这正是穿透液里出现蛋白的最常见原因。'},

{q:'How do you calculate molarity and prepare molar solutions?',
 en:'“Molarity is moles of solute per litre of solution, and the words per litre of solution matter, because that is why I make up to volume instead of adding a litre of solvent. The working formula is mass in grams equals molarity times volume in litres times molecular weight. I take the molecular weight from the bottle, because a hydrated salt weighs more per mole than the anhydrous formula says. For a dilution the relation is C1V1 equals C2V2, since adding solvent does not change the number of moles, and that one equation answers every question about how much stock to take. Then the preparation is the standard sequence: weigh, transfer quantitatively into the volumetric flask, dissolve in less than the final volume, make up to the mark, mix by inversion and label. I also keep molarity separate from molality, per kilogram of solvent, and from percentage solutions, which are mass or volume per hundred.”',
 cn:'轴：每升「溶液」不是每升「溶剂」，所以要定容；一条公式算质量，一条 C1V1=C2V2 算稀释。出处 jiri_bank q_s4「S3 Lab 18」（house answer），内容 general。',
 warn:'⚠ 不能把算出来的溶剂体积直接加进去——溶质自己占体积，那样配出来总体积偏大、浓度偏低。以及分子量一定看瓶子：结晶水按无水式算，配出来就偏稀。'},

{q:'How do you ensure the accuracy and precision of pipetting?',
 en:'“I start by separating the two words, because accuracy is closeness to the true volume and precision is reproducibility between replicates, and a pipette can be very precise and consistently wrong. Accuracy comes from calibration, so I check gravimetrically by pipetting distilled water onto an analytical balance, where one milligram of water is one microlitre. I also pick the pipette whose range fits the volume and use it in the upper part of that range, because relative error is largest at the bottom. Precision comes from technique: press to the first stop to aspirate and the second stop only to expel, hold the pipette vertical, and immerse the tip only a few millimetres. I also aspirate and dispense slowly at a constant rate, and I pre-wet the tip so that the film of liquid inside it is already established. For viscous or volatile liquids I use reverse pipetting, which leaves the residual film in the tip instead of in my sample.”',
 cn:'轴：先把 accuracy 和 precision 分开（可以很精密却一直偏），再各配一条来源——准确度靠校准和选量程，精密度靠操作。出处 jiri_bank q_s3「S3 Lab 13」（house answer）；称重法 1 mg ＝ 1 µL、第一档/第二档、预润湿、反向移液都是 general 通用做法。定期送检也要提一句。',
 warn:'⚠ 预润湿这一条最容易被跳过：第一次吸液会在吸头内壁留一层膜，所以第一次排液偏少。标准曲线最低那个点、或者一排复孔里的第一个孔，往往就是这么废的。'},

{q:'How do you prepare a standard solution?',
 en:'“A standard solution is one whose concentration is known accurately, so every step exists to protect that accuracy. I calculate the mass from concentration times volume times molecular weight, using the molecular weight printed on the bottle including any waters of hydration. I weigh on a balance with enough resolution and transfer quantitatively, which means rinsing the weighing boat into the flask, because whatever stays behind is error. Then I dissolve in less than the final volume, make up to the mark in a volumetric flask, mix by inversion, and label with the identity, concentration, solvent and date. Two reagents need a specific trick. EDTA will not dissolve until sodium hydroxide raises the pH to about eight, and six molar guanidine hydrochloride has to go into a small volume first because the solid takes up so much space.”',
 cn:'轴：「准确已知」是定义，所以定量转移、定容、贴标签每一步都是在保这个准确度。出处 jiri_bank q_s4「S3 Lab 7」（house answer）；EDTA 要 pH 8 才溶、6 M 盐酸胍固体占体积这两条直接接第一张卷子上 #8 那道题（1M EDTA 与 6M 盐酸胍怎么配）。pH 8 是常规工作值，不是从书上抄的数。',
 warn:'⚠ 标准品的误差是系统误差：它会原封不动传给每一个照它测出来的未知样。所以标准液出问题不是「结果打个折扣」，是整批数据作废。'},

{q:'How do you properly calibrate a pH meter?',
 en:'“Calibration is not optional, because a glass electrode drifts: the meter converts a voltage into a pH, and both the slope and the offset of that conversion change with age and use. I rinse the electrode with distilled water and blot it dry rather than wiping it, because wiping builds a static charge on the bulb and the reading then drifts. I calibrate with at least two buffers that bracket my target pH, conventionally pH seven first to set the offset and then pH four or pH ten to set the slope, rinsing between them. I calibrate at the temperature I will measure at, since pH is temperature dependent, and I use fresh standard buffers, because an opened bottle absorbs carbon dioxide and carries that error into every sample. The meter reports the slope at the end, and a slope far from the theoretical value means the electrode needs cleaning or replacing rather than another calibration.”',
 cn:'轴：测的是电压、换算成 pH，斜率和截距都会漂——所以要两点、要夹住目标 pH、要同温、要新鲜标准液。出处 jiri_bank q_s3「S3 Lab 1」（house answer），内容 general。',
 warn:'⚠ 单点校准只定截距，正好掩盖了电极老化时坏掉的那一项（斜率）。所以「我校了一下 pH 7」不是答案。另外电极只能吸干，擦会带静电，读数一直跳。'},

{q:'How do you quantify DNA and RNA?',
 en:'“I use three methods, and they differ in how specific they are. The quickest is absorbance at two hundred and sixty nanometres, where the bases absorb, and Lambert-Beer turns that absorbance into a concentration. The conventional factors are about fifty micrograms per millilitre for double-stranded DNA at an A260 of one, and about forty for RNA. Absorbance cannot tell DNA from RNA from free nucleotides, so I always report the ratios too. A260 over A280 near one point eight means clean DNA and near two point zero means clean RNA, and a low A260 over A230 means guanidine or phenol carried over. A fluorescent dye assay is the specific option, because the dye only fluoresces when bound to double-stranded DNA, and an agarose gel is what I run when I need to see integrity.”',
 cn:'轴：三种方法特异性递增（A260 → 荧光染料 → 胶）；A260 的弱点是「凡带碱基的都吸」，所以必须连比值一起报。出处 jiri_bank q_s3「S3 Lab 10」（house answer）。50 / 40 µg/mL 与 1.8 / 2.0 都是惯用换算值，general。',
 warn:'⚠ 要送测序或建库就别用 A260：它把 RNA 和游离核苷酸也算成 DNA，会系统性地高估投入量。那种时候用只对双链 DNA 发荧光的染料法。'},

{q:'How do you sterilize lab equipment?',
 en:'“I choose the method by what the material tolerates, and the standard is always the same, which is to kill bacterial endospores. The default is autoclaving with saturated steam at one hundred and twenty-one degrees for fifteen to twenty minutes at fifteen psi, and that temperature is set by what it takes to kill spores and not vegetative cells. I use that for media, glassware, tips and waste, and dry heat at around one hundred and sixty to one hundred and eighty degrees for two hours for metal and glass that must stay dry. Anything heat labile goes through a zero point two two micrometre filter instead, so antibiotics, enzymes, vitamins and serum, and that removes bacteria rather than killing them. For surfaces I use seventy percent ethanol and for spills and liquid waste I use bleach, and I verify a load with a spore strip biological indicator, because autoclave tape only shows that it got hot.”',
 cn:'轴：按材料耐受什么选方法，但判据永远是「能不能杀死芽孢」；最后一句验证（胶带 vs 芽孢指示剂）是加分点。出处 jiri_bank q_s3「S3 Lab 16」（house answer）。121 °C / 15–20 min / 15 psi、160–180 °C / 2 h、0.22 µm、70% 乙醇都是常规工作参数，general。',
 warn:'⚠ 0.22 µm 是除菌不是灭菌：它把细菌滤掉，滤不掉病毒和支原体。还有抗生素绝对不能高压灭菌——氨苄西林的 β-内酰胺环会水解，要过滤除菌、等培养基冷下来再加。'},

{q:'What are the differences between acidic and basic buffers?',
 en:'“The mechanism is identical in both, and the only thing that differs is which pKa I picked. An acidic buffer is a weak acid with its conjugate base and buffers below pH seven, so acetate at a pKa near four point eight, or citrate. A basic buffer is a weak base with its conjugate acid and buffers above pH seven, so Tris at a pKa near eight point one, or carbonate. Both obey Henderson-Hasselbalch and both work best within about one pH unit of their own pKa, so I choose the buffer whose pKa is nearest my working pH. Tris is the one to watch, because its pKa shifts strongly with temperature, and a Tris buffer set at room temperature is at a different pH in the cold room. Phosphate is the other one, because it precipitates with calcium and magnesium and is the wrong choice for a reaction that needs those ions.”',
 cn:'轴：机制一样，差别只在 pKa 落在哪一边；真正的选择判据是 pKa ±1 个 pH 单位。出处 jiri_bank q_s3「S3 Lab 2」（house answer）。醋酸盐 4.8、Tris 8.1 是常用 pKa 值，general。接前一半 #6（pH 与 Henderson-Hasselbalch）。',
 warn:'⚠ 别答成「酸性缓冲液用酸配、碱性缓冲液用碱配」——两者都是弱酸碱加自己的共轭对。他在听的是 pKa 离工作 pH 多远，以及 Tris 进冷室 pH 会变这两句。'},

{q:'What are the different types of chromatography and their applications?',
 en:'“I name them by the property each one exploits, and the application follows from that. Ion exchange separates by net charge, so I bind at a pH that gives my protein the opposite charge to the resin, elute with a salt gradient, and use it early for bulk separation. Hydrophobic interaction separates by surface hydrophobicity and works the other way round, binding in high salt and eluting in low salt, and that is why it pairs naturally after an ammonium sulfate precipitation. Size exclusion separates by size, with large molecules unable to enter the pores and eluting first, and nothing binds, so it is gentle but it dilutes the sample and I keep it for polishing. Affinity separates by specific binding, most often a histidine tag on a nickel column, and it is the highest resolution single step, so it is normally the capture step. Reverse phase also separates by hydrophobicity but under organic solvent, so it resolves very well and denatures the protein, which makes it analytical rather than preparative.”',
 cn:'轴：五种模式按「利用哪种性质」排，应用跟着出来；顺序是捕获、中间、精修（亲和或离子交换先浓缩，分子排阻最后，因为它稀释且上样量有限）。出处 jiri_bank q_s3「S3 Lab 6」＋ PESB 2-31…2-42（2-31 就是这五种模式那一张幻灯片）。',
 warn:'⚠ HIC 和反相都是按疏水性分离——同一个原理，区别在蛋白能不能活下来（HIC 保天然构象，反相彻底变性）。老师在 PESB 课上自己说这是标准考试对比点，很可能追问。'},

{q:'What are the different types of micropipettes and their uses?',
 en:'“Micropipettes divide first by mechanism and then by format. The standard mechanism is air displacement, where a cushion of air sits between the piston and the liquid, and it is accurate for aqueous solutions. It is unreliable for volatile, viscous or dense liquids, because the air cushion expands and contracts, and for those I use a positive displacement pipette, with the piston touching the liquid directly inside a disposable capillary. Positive displacement is also what I use in PCR work, because there is no air path for an aerosol to carry template from one sample to the next. By format there are single channel pipettes for general work, multichannel pipettes for plate work, repeating pipettes for many identical aliquots, and electronic ones for reverse pipetting. The rule that matters most is to pick the pipette whose range fits the volume, because a two hundred microlitre pipette set to three microlitres is where the error lives.”',
 cn:'轴：先按机制（空气置换 vs 正向置换）再按形式（单道、多道、连续分液、电动）；最后一条规则才是他真正想听的。出处 jiri_bank q_s3「S3 Lab 19」（house answer），内容 general。',
 warn:'⚠ 空气置换式对甘油、有机溶剂和高密度液体不准，这是机制决定的，不是「手不稳」。遇到这类液体换正向置换或用反向移液，别靠多练。'},

{q:'What is the principle behind gel electrophoresis?',
 en:'“Charged molecules move through a porous gel in an electric field, and the gel sieves them by size. That only separates by size if the charge per unit mass is the same for everything in the sample, because otherwise I am measuring charge and size at once and can read neither. For nucleic acids that condition is free, since every nucleotide carries one phosphate, so charge per unit length is identical whatever the sequence, and the agarose percentage sets the pore size. For proteins it is not free, because a folded protein carries the net charge its own amino acids give it. So I add SDS, which unfolds the chain, coats it at a roughly constant ratio, and imposes a uniform negative charge that swamps the protein’s own. Only then does migration through polyacrylamide depend on size alone, and I detect DNA with an intercalating dye under UV or blue light and protein with Coomassie or silver stain.”',
 cn:'轴：「每单位质量的电荷必须一致」是前提——核酸天生满足，蛋白要靠 SDS 人为制造。出处 jiri_bank q_s4「S3 Lab 8」（house answer）＋ PESB 2-43（SDS 同时干三件事：变性、统一电荷密度、消除形状差异，三件合起来迁移率才只取决于分子量）。接前一半 #15（浓缩胶与分离胶）。',
 warn:'⚠ 琼脂糖浓度选反是「我的大片段在胶上看不见」的头号原因：高浓度孔小，大片段挤在加样孔附近分不开；要分大片段就降浓度。'},

{q:'What is the purpose of using a loading control in Western blotting?',
 en:'“A loading control checks the assumption that every lane started with the same amount of total protein, and a Western blot depends on that assumption completely and cannot otherwise verify it. That assumption fails for reasons that have nothing to do with biology, such as slightly different volumes pipetted, uneven transfer, or one sample partly degraded. Any of those looks exactly like a real change in my protein. So I probe a second unrelated protein on the same membrane, and the condition for choosing it is not that it is abundant but that it is independently known not to respond to my treatment. Actin, tubulin and GAPDH are the usual choices, and each of them has documented exceptions. And I use it as a ratio rather than a presence check, so I divide my band by the control band in the same lane and compare those normalised values across lanes.”',
 cn:'轴：它验的是一个 Western blot 自己验不了的假设（每道上样量相同），而且用法是做比值不是看有没有。出处 jiri_bank q_s4「S3 Lab 12」（house answer），内容 general。更新的替代是整膜总蛋白染色，不必信任任何单一参照蛋白。',
 warn:'⚠ 只看到每条泳道都有内参带，只排除了完全空样这一种极端情况。内参偏弱的那条泳道应当判为不可解读、重新均衡上样再做——拿一个已知不可靠的内参去做除法，是把问题洗白。'},

{q:'What is the role of a centrifuge in laboratory experiments?',
 en:'“A centrifuge separates the components of a mixture by applying a force far greater than gravity, so particles sediment at rates set by their size, shape and density. The commonest use is differential centrifugation: I spin at low force to pellet the largest things, keep the supernatant, and then spin harder to pellet the next size down. That is how I go from a lysate to a cleared lysate, and how organelles are fractionated into nuclei, then mitochondria, then microsomes. Density gradient centrifugation separates by buoyant density instead of size, because the sample moves through the gradient until it reaches the point where its own density matches the medium. I always balance opposing tubes, because an unbalanced rotor at speed can destroy the rotor and the machine. And I report the force in times g rather than in rpm, because the same rpm in a different rotor gives a different force.”',
 cn:'轴：远大于重力的力 ＋ 沉降速率由大小形状密度决定；差速（按沉降速率）和密度梯度（按浮力密度）是两件事。出处 jiri_bank q_s3「S3 Lab 17」（house answer），内容 general。日常用途：收菌、裂解后澄清、沉淀蛋白或核酸、超滤管浓缩。',
 warn:'⚠ 最后一句直接接第一张卷子上 #13 那道题（rpm 与 rcf 的关系）：rcf 还取决于转子半径，所以同样的 rpm 换个转子力就不同，方法里必须写 × g 才可重复。配平是安全要求，不是讲究。'}

]);
