# 结构式清单 — 分母 (STRUCTURE LIST — the denominator)

**这份清单是提案，不是定稿。** 它存在的唯一目的是让「画了多少个」这个问题有分母可除。
在 Ruojin 过一遍、删掉不考的之前，**不要把下面的合计当成目标数**。

**每一行都带证据。** `Czech` 和 `Leh` 两列是这个分子的名字在两个 layer 的真实数据里被
grep 到的次数（**英文名 + 捷克语词干，大小写不敏感；中文名不参与计数**）。**两列都是 0 的行，是没有任何
一本教材教过的东西——可以直接删，不用再想。** 命中数高的行是教材反复提到的，画出来收益最大。

⚠️ **计数是「子串证据」，不是「覆盖证明」。** 匹配要求前面是非字母数字（所以 `example` 里的
`amp` 不算、`isocitrate` 不算进 `citrate`），但**不要求后面是边界**，所以词干能匹配到词形
（`glukos` → `glukosa`），缩写也会匹配到它的复合词（`CoA` → `acetyl-CoA`，`NAD` → `NADH`）。
凡是因此被抬高的行，备注列里写了。**一个高命中数只说明「这个词常出现」，不说明「这个结构式该画」**
——那是 Ruojin 的判断，不是脚本的。

⚠️ **中文名故意不参与计数。** 中文没有词边界，`丙酮`（acetone）会整个匹配进 `丙酮酸`
（pyruvate）——第一次跑出来 acetone 在 Czech 层是 428 次，全是丙酮酸。同类陷阱还有
`核糖` ⊂ `脱氧核糖`/`核糖体`、`甘油` ⊂ `甘油醛`/`甘油三酯`、`柠檬酸` ⊂ `异柠檬酸`、
`腺苷` ⊂ `腺苷酸`。这类碰撞我没法在 205 行上逐条审干净，所以**干脆不数这一路**：
计数只用英文和捷克语探针（每个节点都有 `en` 字段，覆盖不受影响），中文只作为名字留在表里。
**重跑这个脚本的人：不要把中文探针加回去。**

⚠️ **这份清单只写名字，不写任何化学数据。** 没有分子式、没有 SMILES、没有 PubChem CID——
按本项目的规矩，参考数据绝不凭记忆写，**要在画每一个结构的时候现查、连出处一起存**。

---

## 氨基酸 amino acids

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `gly` | 甘氨酸 | glycine | 107 | 42 |  |
| ✅ | `ala` | 丙氨酸 | alanine | 89 | 26 |  |
| ✅ | `val` | 缬氨酸 | valine | 24 | 10 |  |
| ✅ | `leu` | 亮氨酸 | leucine | 37 | 12 |  |
| ✅ | `ile` | 异亮氨酸 | isoleucine | 34 | 31 |  |
| ✅ | `pro` | 脯氨酸 | proline | 64 | 19 |  |
| ✅ | `met` | 甲硫氨酸 | methionine | 34 | 26 |  |
| ✅ | `phe` | 苯丙氨酸 | phenylalanine | 47 | 31 |  |
| ✅ | `tyr` | 酪氨酸 | tyrosine | 141 | 46 |  |
| ✅ | `trp` | 色氨酸 | tryptophan | 65 | 31 |  |
| ✅ | `ser` | 丝氨酸 | serine | 139 | 42 |  |
| ✅ | `thr` | 苏氨酸 | threonine | 95 | 23 |  |
| ✅ | `cys` | 半胱氨酸 | cysteine | 83 | 27 |  |
| ✅ | `asn` | 天冬酰胺 | asparagine | 39 | 17 |  |
| ✅ | `gln` | 谷氨酰胺 | glutamine | 268 | 64 |  |
| ✅ | `asp` | 天冬氨酸 | aspartate | 136 | 41 |  |
| ✅ | `glu` | 谷氨酸 | glutamate | 268 | 64 |  |
| ✅ | `lys` | 赖氨酸 | lysine | 72 | 34 |  |
| ✅ | `arg` | 精氨酸 | arginine | 77 | 27 |  |
| ✅ | `his` | 组氨酸 | histidine | 38 | 38 |  |

**氨基酸 amino acids：20 个，已画 20，未画 0；其中两层都 0 命中的有 0 个。**

---

## 糖 sugars

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `d-glyceraldehyd` | D-甘油醛 | D-glyceraldehyde | 181 | 2 | 计数主要来自 glyceraldehyde 3-phosphate（另有 `gap` 一行），自由态甘油醛本身少见 |
| ✅ | `dihydroxyaceton` | 二羟丙酮 | dihydroxyacetone | 69 | 0 | 计数主要来自 dihydroxyacetone phosphate（另有 `dhap` 一行） |
| ✅ | `d-erythrose` | D-赤藓糖 | D-erythrose | 25 | 7 |  |
| ✅ | `d-ribose-open` | D-核糖（开链） | D-ribose, open chain | 132 | 23 | 探针已排除 `ribosom-`（原本被核糖体抬高约 146 次） |
| ✅ | `b-ribf` | β-D-呋喃核糖 | beta-D-ribofuranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-ribose-open` 有 132/23 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `b-drib` | β-D-2-脱氧核糖 | beta-D-2-deoxyribose | 10 | 8 |  |
| ✅ | `d-ribulose` | D-核酮糖 | D-ribulose | 106 | 0 |  |
| ✅ | `d-xylose` | D-木糖 | D-xylose | 18 | 11 |  |
| ✅ | `d-xylulose` | D-木酮糖 | D-xylulose | 86 | 0 |  |
| ✅ | `l-arabinose` | L-阿拉伯糖 | L-arabinose | 10 | 0 |  |
| ✅ | `glc-open` | D-葡萄糖（开链） | D-glucose, open chain | 784 | 334 |  |
| ✅ | `a-glcp` | α-D-吡喃葡萄糖 | alpha-D-glucopyranose | 46 | 0 |  |
| ✅ | `b-glcp` | β-D-吡喃葡萄糖 | beta-D-glucopyranose | 46 | 0 |  |
| ✅ | `d-galactose-open` | D-半乳糖（开链） | D-galactose, open chain | 220 | 13 |  |
| ✅ | `b-galp` | β-D-吡喃半乳糖 | beta-D-galactopyranose | 2 | 0 |  |
| ✅ | `d-mannose-open` | D-甘露糖（开链） | D-mannose, open chain | 94 | 1 |  |
| ✅ | `a-manp` | α-D-吡喃甘露糖 | alpha-D-mannopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-mannose-open` 有 94/1 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `d-fructose-open` | D-果糖（开链） | D-fructose, open chain | 199 | 17 |  |
| ✅ | `b-fruf` | β-D-呋喃果糖 | beta-D-fructofuranose | 5 | 0 |  |
| ✅ | `glucosamine` | 葡糖胺 | D-glucosamine | 56 | 0 |  |
| ✅ | `glcnac` | N-乙酰葡糖胺 | N-acetylglucosamine (GlcNAc) | 58 | 0 |  |
| ✅ | `murnac` | N-乙酰胞壁酸 | N-acetylmuramic acid (MurNAc) | 0 | 0 | **两层都 0 命中——考虑删** |
| ✅ | `neu5ac` | N-乙酰神经氨酸（唾液酸） | N-acetylneuraminic acid (sialic acid) | 58 | 0 |  |
| ✅ | `d-glucuronate` | D-葡糖醛酸 | D-glucuronic acid | 33 | 0 |  |
| ✅ | `d-gluconate` | D-葡糖酸 | D-gluconic acid | 0 | 0 | **两层都 0 命中——考虑删** |
| ✅ | `sorbitol` | 山梨醇 | sorbitol (glucitol) | 32 | 0 |  |
| ✅ | `maltose` | 麦芽糖 | maltose | 70 | 9 |  |
| ✅ | `lactose` | 乳糖 | lactose | 37 | 10 |  |
| ✅ | `sucrose` | 蔗糖 | sucrose | 38 | 2 |  |
| ✅ | `cellobiose` | 纤维二糖 | cellobiose | 7 | 0 |  |
| ✅ | `isomaltose` | 异麦芽糖 | isomaltose (alpha-1,6) | 27 | 0 |  |
|  | `amylose-unit` | 直链淀粉重复单元 | amylose repeat unit (alpha-1,4) | 35 | 0 |  |
|  | `amylopectin-branch` | 支链淀粉分支点 | amylopectin branch point (alpha-1,6) | 55 | 0 |  |
|  | `glycogen-branch` | 糖原分支点 | glycogen branch point | 223 | 72 | 命中的是「糖原」这个词，不等于教材画过分支点结构 |
|  | `cellulose-unit` | 纤维素重复单元 | cellulose repeat unit (beta-1,4) | 99 | 1 |  |
|  | `chitin-unit` | 几丁质重复单元 | chitin repeat unit | 36 | 2 |  |
| ✅ | `a-ribf` | α-D-呋喃核糖 | alpha-D-ribofuranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-ribose-open` 有 132/23 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `drib-open` | 2-脱氧-D-核糖（开链） | 2-deoxy-D-ribose, open chain | 10 | 8 |  |
| ✅ | `a-dribf` | 2-脱氧-α-D-呋喃核糖 | alpha-D-2-deoxyribofuranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `b-drib` 有 10/8 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `a-xylp` | α-D-吡喃木糖 | alpha-D-xylopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-xylose` 有 18/11 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `b-xylp` | β-D-吡喃木糖 | beta-D-xylopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-xylose` 有 18/11 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `a-arap` | α-L-吡喃阿拉伯糖 | alpha-L-arabinopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `l-arabinose` 有 10/0 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `b-arap` | β-L-吡喃阿拉伯糖 | beta-L-arabinopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `l-arabinose` 有 10/0 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `a-galp` | α-D-吡喃半乳糖 | alpha-D-galactopyranose | 2 | 0 |  |
| ✅ | `b-manp` | β-D-吡喃甘露糖 | beta-D-mannopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-mannose-open` 有 94/1 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `a-fruf` | α-D-呋喃果糖 | alpha-D-fructofuranose | 5 | 0 |  |
| ✅ | `b-frup` | β-D-吡喃果糖 | beta-D-fructopyranose | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `d-fructose-open` 有 199/17 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |

**糖 sugars：47 个，已画 42，未画 5；其中两层都 0 命中的有 2 个。**

---

## 核苷酸与碱基 nucleotides and bases

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `adenine` | 腺嘌呤 | adenine | 24 | 30 |  |
| ✅ | `guanine` | 鸟嘌呤 | guanine | 17 | 13 |  |
| ✅ | `cytosine` | 胞嘧啶 | cytosine | 13 | 38 |  |
| ✅ | `thymine` | 胸腺嘧啶 | thymine | 32 | 42 |  |
| ✅ | `uracil` | 尿嘧啶 | uracil | 23 | 69 |  |
| ✅ | `hypoxanthine` | 次黄嘌呤 | hypoxanthine | 7 | 3 |  |
| ✅ | `xanthine` | 黄嘌呤 | xanthine | 3 | 0 |  |
| ✅ | `uric-acid` | 尿酸 | uric acid | 35 | 4 | 捷克语 `močov` 同时匹配「尿酸」和「尿素 močovina」，两行会互相污染 |
| ✅ | `adenosine` | 腺苷 | adenosine | 6 | 13 |  |
| ✅ | `guanosine` | 鸟苷 | guanosine | 5 | 3 |  |
| ✅ | `cytidine` | 胞苷 | cytidine | 4 | 4 |  |
| ✅ | `uridine` | 尿苷 | uridine | 21 | 0 |  |
| ✅ | `deoxythymidine` | 脱氧胸苷 | deoxythymidine | 1 | 6 |  |
| ✅ | `deoxyadenosine` | 脱氧腺苷 | deoxyadenosine | 2 | 0 |  |
| ✅ | `amp` | AMP | adenosine 5'-monophosphate | 305 | 60 |  |
| ✅ | `adp` | ADP | adenosine 5'-diphosphate | 313 | 129 |  |
| ✅ | `atp` | ATP | adenosine 5'-triphosphate | 1515 | 1176 | `ATP` 会匹配到 ATPase/ATP synthase，计数被抬高 |
| ✅ | `camp` | 环化 AMP | cyclic AMP (cAMP) | 80 | 56 |  |
| ✅ | `gmp` | GMP | guanosine 5'-monophosphate | 30 | 4 |  |
| ✅ | `gtp` | GTP | guanosine 5'-triphosphate | 186 | 27 |  |
| ✅ | `cgmp` | 环化 GMP | cyclic GMP (cGMP) | 0 | 0 | **两层都 0 命中——考虑删** |
| ✅ | `ump` | UMP | uridine 5'-monophosphate | 14 | 0 |  |
| ✅ | `utp` | UTP | uridine 5'-triphosphate | 33 | 0 |  |
| ✅ | `ctp` | CTP | cytidine 5'-triphosphate | 60 | 2 |  |
| ✅ | `dtmp` | dTMP | thymidine 5'-monophosphate | 11 | 0 |  |
|  | `dinucleotide-link` | 3'→5' 磷酸二酯键 | 3'-5' phosphodiester link | 31 | 30 |  |

**核苷酸与碱基 nucleotides and bases：26 个，已画 25，未画 1；其中两层都 0 命中的有 1 个。**

---

## 辅酶与维生素 coenzymes and vitamins

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `nad` | NAD⁺ | nicotinamide adenine dinucleotide (NAD+) | 1321 | 352 | `NAD` 会匹配到 NADH/NADP，计数被抬高 |
|  | `nadh-ring` | NADH（还原的烟酰胺环） | NADH, the reduced nicotinamide ring | 427 | 157 |  |
| ✅ | `nadp` | NADP⁺ | NADP+ | 550 | 115 |  |
| ✅ | `fad` | FAD | flavin adenine dinucleotide (FAD) | 232 | 63 | `FAD` 会匹配到 FADH₂，计数被抬高 |
|  | `fadh2-ring` | FADH₂（还原的异咯嗪环） | FADH2, the reduced isoalloxazine ring | 102 | 23 |  |
| ✅ | `fmn` | FMN | flavin mononucleotide (FMN) | 77 | 11 |  |
| ✅ | `riboflavin` | 核黄素（B₂） | riboflavin (vitamin B2) | 3 | 0 |  |
| ✅ | `coa` | 辅酶 A | coenzyme A (CoA-SH) | 1410 | 315 | `CoA` 会匹配到所有 acyl-CoA，计数被抬高 |
| ✅ | `acetyl-coa` | 乙酰辅酶 A | acetyl-CoA | 496 | 120 | 同时属于辅酶组与代谢中间物组，只画一次 |
| ✅ | `thiamine` | 硫胺素（B₁） | thiamine (vitamin B1) | 38 | 1 |  |
| ✅ | `tpp` | 焦磷酸硫胺素 | thiamine pyrophosphate (TPP) | 107 | 19 |  |
| ✅ | `plp` | 磷酸吡哆醛 | pyridoxal 5'-phosphate (PLP) | 82 | 34 |  |
| ✅ | `biotin` | 生物素 | biotin | 63 | 23 |  |
| ✅ | `folate` | 叶酸 | folate | 1 | 6 |  |
| ✅ | `thf` | 四氢叶酸 | tetrahydrofolate (THF) | 7 | 1 |  |
| ✅ | `lipoate` | 硫辛酸 | lipoic acid | 47 | 0 |  |
| ✅ | `ubiquinone` | 泛醌（辅酶 Q） | ubiquinone (coenzyme Q) | 62 | 30 |  |
| ✅ | `sam` | S-腺苷甲硫氨酸 | S-adenosylmethionine (SAM) | 0 | 9 |  |
| ✅ | `cobalamin` | 钴胺素（B₁₂） | cobalamin (vitamin B12) | 0 | 21 |  |
| ✅ | `ascorbate` | 抗坏血酸（维生素 C） | ascorbate (vitamin C) | 48 | 0 |  |
| ✅ | `glutathione` | 谷胱甘肽 | glutathione (GSH) | 10 | 45 |  |

**辅酶与维生素 coenzymes and vitamins：21 个，已画 19，未画 2；其中两层都 0 命中的有 0 个。**

---

## 脂类 lipids

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `palmitate` | 软脂酸（棕榈酸） | palmitic acid (16:0) | 115 | 35 |  |
| ✅ | `stearate` | 硬脂酸 | stearic acid (18:0) | 20 | 4 |  |
| ✅ | `oleate` | 油酸 | oleic acid (18:1) | 9 | 0 |  |
| ✅ | `linoleate` | 亚油酸 | linoleic acid (18:2) | 14 | 0 |  |
| ✅ | `linolenate` | 亚麻酸 | alpha-linolenic acid (18:3) | 15 | 0 |  |
| ✅ | `arachidonate` | 花生四烯酸 | arachidonic acid (20:4) | 31 | 11 |  |
| ✅ | `glycerol` | 甘油 | glycerol | 211 | 33 | 同时属于脂类组与代谢中间物组，只画一次 |
| ✅ | `triacylglycerol` | 三酰甘油 | triacylglycerol | 62 | 26 |  |
| ✅ | `phosphatidate` | 磷脂酸 | phosphatidic acid | 62 | 1 |  |
| ✅ | `pc` | 磷脂酰胆碱（卵磷脂） | phosphatidylcholine (lecithin) | 46 | 1 |  |
| ✅ | `pe` | 磷脂酰乙醇胺 | phosphatidylethanolamine | 17 | 1 |  |
| ✅ | `ps` | 磷脂酰丝氨酸 | phosphatidylserine | 15 | 12 |  |
|  | `pi` | 磷脂酰肌醇 | phosphatidylinositol | 35 | 0 |  |
|  | `cardiolipin` | 心磷脂 | cardiolipin | 11 | 5 |  |
| ✅ | `sphingosine` | 鞘氨醇 | sphingosine | 60 | 2 |  |
| ✅ | `ceramide` | 神经酰胺 | ceramide | 86 | 0 |  |
| ✅ | `sphingomyelin` | 鞘磷脂 | sphingomyelin | 69 | 1 |  |
|  | `cerebroside` | 脑苷脂 | galactocerebroside | 44 | 0 |  |
|  | `ganglioside` | 神经节苷脂 | ganglioside GM1 | 54 | 0 |  |
| ✅ | `cholesterol` | 胆固醇 | cholesterol | 119 | 29 |  |
| ✅ | `cholesteryl-ester` | 胆固醇酯 | cholesteryl ester | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `cholesterol` 有 119/29 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `cholate` | 胆酸 | cholic acid (bile acid) | 10 | 0 |  |
| ✅ | `testosterone` | 睾酮 | testosterone | 28 | 2 |  |
| ✅ | `estradiol` | 雌二醇 | estradiol | 22 | 0 |  |
| ✅ | `progesterone` | 孕酮 | progesterone | 31 | 7 |  |
| ✅ | `cortisol` | 皮质醇 | cortisol | 35 | 52 |  |
| ✅ | `aldosterone` | 醛固酮 | aldosterone | 25 | 0 |  |
| ✅ | `vitamin-d3` | 维生素 D₃ | cholecalciferol (vitamin D3) | 54 | 3 |  |
| ✅ | `pge2` | 前列腺素 E₂ | prostaglandin E2 | 33 | 13 |  |
| ✅ | `txa2` | 血栓素 A₂ | thromboxane A2 | 25 | 16 |  |
| ✅ | `ltb4` | 白三烯 B₄ | leukotriene B4 | 38 | 13 |  |
| ✅ | `pgi2` | 前列环素 I₂ | prostacyclin I2 | 21 | 0 |  |
| ✅ | `isoprene` | 异戊二烯 | isoprene unit | 85 | 0 |  |
| ✅ | `retinal` | 视黄醛（维生素 A） | retinal (vitamin A) | 70 | 0 |  |
| ✅ | `tocopherol` | 生育酚（维生素 E） | alpha-tocopherol (vitamin E) | 28 | 0 |  |
| ✅ | `vitamin-k` | 维生素 K | phylloquinone (vitamin K) | 39 | 0 |  |

**脂类 lipids：36 个，已画 32，未画 4；其中两层都 0 命中的有 0 个。**

---

## 代谢中间物 metabolic intermediates

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `g6p` | 葡萄糖-6-磷酸 | glucose 6-phosphate | 7 | 25 |  |
| ✅ | `g1p` | 葡萄糖-1-磷酸 | glucose 1-phosphate | 5 | 2 |  |
| ✅ | `f6p` | 果糖-6-磷酸 | fructose 6-phosphate | 6 | 0 |  |
| ✅ | `f16bp` | 果糖-1,6-二磷酸 | fructose 1,6-bisphosphate | 6 | 0 |  |
| ✅ | `f26bp` | 果糖-2,6-二磷酸 | fructose 2,6-bisphosphate | 0 | 14 |  |
| ✅ | `dhap` | 磷酸二羟丙酮 | dihydroxyacetone phosphate | 25 | 0 |  |
| ✅ | `gap` | 甘油醛-3-磷酸 | glyceraldehyde 3-phosphate | 18 | 1 |  |
| ✅ | `bpg13` | 1,3-二磷酸甘油酸 | 1,3-bisphosphoglycerate | 31 | 0 |  |
| ✅ | `pg3` | 3-磷酸甘油酸 | 3-phosphoglycerate | 54 | 8 |  |
| ✅ | `pg2` | 2-磷酸甘油酸 | 2-phosphoglycerate | 24 | 3 |  |
| ✅ | `pep` | 磷酸烯醇丙酮酸 | phosphoenolpyruvate (PEP) | 86 | 10 |  |
| ✅ | `pyruvate` | 丙酮酸 | pyruvate | 447 | 49 |  |
| ✅ | `lactate` | 乳酸 | lactate | 108 | 19 |  |
| ✅ | `bpg23` | 2,3-二磷酸甘油酸 | 2,3-bisphosphoglycerate | 18 | 12 |  |
| ✅ | `udp-glucose` | UDP-葡萄糖 | UDP-glucose | 36 | 0 |  |
| ✅ | `citrate` | 柠檬酸 | citrate | 334 | 91 |  |
| ✅ | `cis-aconitate` | 顺乌头酸 | cis-aconitate | 25 | 1 |  |
| ✅ | `isocitrate` | 异柠檬酸 | isocitrate | 87 | 17 |  |
| ✅ | `akg` | α-酮戊二酸 | alpha-ketoglutarate | 23 | 27 |  |
| ✅ | `succinyl-coa` | 琥珀酰辅酶 A | succinyl-CoA | 115 | 17 |  |
| ✅ | `succinate` | 琥珀酸 | succinate | 97 | 45 |  |
| ✅ | `fumarate` | 延胡索酸（富马酸） | fumarate | 123 | 11 |  |
| ✅ | `malate` | 苹果酸 | malate | 135 | 31 |  |
| ✅ | `oxaloacetate` | 草酰乙酸 | oxaloacetate | 205 | 49 |  |
| ✅ | `glyoxylate` | 乙醛酸 | glyoxylate | 66 | 0 |  |
| ✅ | `pgluconate6` | 6-磷酸葡糖酸 | 6-phosphogluconate | 38 | 0 |  |
| ✅ | `ru5p` | 核酮糖-5-磷酸 | ribulose 5-phosphate | 14 | 0 |  |
| ✅ | `r5p` | 核糖-5-磷酸 | ribose 5-phosphate | 4 | 7 |  |
| ✅ | `s7p` | 景天庚酮糖-7-磷酸 | sedoheptulose 7-phosphate | 24 | 0 |  |
| ✅ | `e4p` | 赤藓糖-4-磷酸 | erythrose 4-phosphate | 3 | 7 |  |
| ✅ | `rubp` | 核酮糖-1,5-二磷酸 | ribulose 1,5-bisphosphate (RuBP) | 82 | 0 |  |
| ✅ | `acyl-coa` | 脂酰辅酶 A | fatty acyl-CoA | 78 | 28 |  |
|  | `enoyl-coa` | 烯脂酰辅酶 A | trans-enoyl-CoA | 21 | 6 |  |
|  | `hydroxyacyl-coa` | 3-羟脂酰辅酶 A | 3-hydroxyacyl-CoA | 21 | 4 |  |
|  | `ketoacyl-coa` | 3-酮脂酰辅酶 A | 3-ketoacyl-CoA | 25 | 2 |  |
| ✅ | `malonyl-coa` | 丙二酸单酰辅酶 A | malonyl-CoA | 99 | 26 |  |
| ✅ | `carnitine` | 肉碱 | carnitine | 8 | 37 |  |
| ✅ | `acetoacetate` | 乙酰乙酸 | acetoacetate | 61 | 4 |  |
| ✅ | `hydroxybutyrate` | β-羟丁酸 | beta-hydroxybutyrate | 22 | 8 |  |
| ✅ | `acetone` | 丙酮 | acetone | 32 | 8 |  |
| ✅ | `hmg-coa` | HMG-CoA | beta-hydroxy-beta-methylglutaryl-CoA | 112 | 4 |  |
| ✅ | `mevalonate` | 甲羟戊酸 | mevalonate | 46 | 1 |  |
| ✅ | `carbamoyl-p` | 氨甲酰磷酸 | carbamoyl phosphate | 43 | 0 |  |
| ✅ | `ornithine` | 鸟氨酸 | ornithine | 29 | 8 |  |
| ✅ | `citrulline` | 瓜氨酸 | citrulline | 30 | 1 |  |
| ✅ | `argininosuccinate` | 精氨琥珀酸 | argininosuccinate | 32 | 1 |  |
| ✅ | `urea` | 尿素 | urea | 103 | 15 |  |
| ✅ | `glycerol3p` | 甘油-3-磷酸 | glycerol 3-phosphate | 0 | 5 |  |
| ✅ | `prpp` | PRPP | 5-phosphoribosyl 1-pyrophosphate | 65 | 16 |  |
| ✅ | `creatine` | 肌酸 | creatine | 3 | 21 |  |
| ✅ | `phosphocreatine` | 磷酸肌酸 | phosphocreatine | 15 | 21 |  |

**代谢中间物 metabolic intermediates：51 个，已画 48，未画 3；其中两层都 0 命中的有 0 个。**

---

## 卟啉与色素 porphyrins and pigments

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `porphine` | 卟吩骨架 | porphine skeleton | 0 | 0 | **0 命中是词形问题，不是缺口** — 母体 `protoporphyrin-ix` 有 23/18 次命中；要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 |
| ✅ | `protoporphyrin-ix` | 原卟啉 IX | protoporphyrin IX | 23 | 18 |  |
| ✅ | `heme-b` | 血红素 b | heme b | 74 | 104 | 只用 `heme`/`血红素` 探针；捷克语 `hem` 会匹配 hemoglobin，故意没用 |
| ✅ | `chlorophyll-a` | 叶绿素 a | chlorophyll a | 213 | 1 |  |
| ✅ | `bilirubin` | 胆红素 | bilirubin | 26 | 44 |  |
| ✅ | `biliverdin` | 胆绿素 | biliverdin | 17 | 21 |  |

**卟啉与色素 porphyrins and pigments：6 个，已画 6，未画 0；其中两层都 0 命中的有 0 个。**

---

## 氨基酸衍生物 amino-acid-derived molecules

| 画了 | key | 中文 | English | Czech | Leh | 备注 |
|---|---|---|---|---|---|---|
| ✅ | `epinephrine` | 肾上腺素 | epinephrine (adrenaline) | 61 | 58 |  |
| ✅ | `norepinephrine` | 去甲肾上腺素 | norepinephrine | 22 | 5 |  |
| ✅ | `dopamine` | 多巴胺 | dopamine | 20 | 3 |  |
| ✅ | `serotonin` | 血清素 | serotonin (5-HT) | 20 | 4 |  |
| ✅ | `melatonin` | 褪黑素 | melatonin | 14 | 0 |  |
| ✅ | `histamine` | 组胺 | histamine | 1 | 6 |  |
| ✅ | `gaba` | γ-氨基丁酸 | gamma-aminobutyrate (GABA) | 12 | 12 |  |
| ✅ | `thyroxine` | 甲状腺素 T₄ | thyroxine (T4) | 37 | 2 |  |
| ✅ | `nitric-oxide` | 一氧化氮 | nitric oxide (NO) | 0 | 13 |  |

**氨基酸衍生物 amino-acid-derived molecules：9 个，已画 9，未画 0；其中两层都 0 命中的有 0 个。**

---

## 合计（提案，未经 Ruojin 删减）

| 组 | 提案数 | 已画 | 未画 | 两层 0 命中 |
|---|---|---|---|---|
| 氨基酸 amino acids | 20 | 20 | 0 | 0 |
| 糖 sugars | 47 | 42 | 5 | 2 |
| 核苷酸与碱基 nucleotides and bases | 26 | 25 | 1 | 1 |
| 辅酶与维生素 coenzymes and vitamins | 21 | 19 | 2 | 0 |
| 脂类 lipids | 36 | 32 | 4 | 0 |
| 代谢中间物 metabolic intermediates | 51 | 48 | 3 | 0 |
| 卟啉与色素 porphyrins and pigments | 6 | 6 | 0 | 0 |
| 氨基酸衍生物 amino-acid-derived molecules | 9 | 9 | 0 | 0 |
| **合计** | **216** | **201** | **15** | **3** |

**所以现在的进度是 201 / 216 = 93%**——但请注意这个分母是**提案**。
把 3 个两层都 0 命中的删掉，分母就变成 213，进度变成 94%。
**在你过一遍之前，这两个数都不要往外说。**

⚠️ **旧 CORE3 里那张「粗估 180–220」的表是推出来的，不是数出来的。** 本清单是逐条列出来
并逐条 grep 过的，合计 216——**与那个量级一致，但这一份可以核对，那一份不能**。

## 下一步怎么用这份清单

1. **Ruojin 过一遍，删掉不考的。** 优先看「两层都 0 命中」那 3 行——它们是两本教材都
   没提过的东西，删掉没有任何损失。
2. **定稿之后把分母写进 `CORE3_STRUCTURES.md`**，从此「画了多少」这个问题有答案。
3. **再开始画**，顺序建议按命中数从高到低，而不是按组的顺序——命中数高 = 教材反复提到 =
   考到的可能性大。
4. 每画一个：`key`、中英文名、`smiles`、分子式**现查现存**；糖必须加 `haworth` 块；
   画完跑 `python tools/check_structures.py && python tools/check_links.py`。

⚠️ **注意这个「删」的筛子几乎没干活：205 行里只有 2 行是两层都 0 命中。** 也就是说，我提的
这些东西基本上教材都提到过——**所以真正的删减只能靠你的判断，不能靠这两列数字**。数字能回答
的是「教材提没提」，不能回答「你的考试考不考」。

---

## 还没画、命中数最高的 40 个（建议的开画顺序）

按 Czech 层命中数排序——Czech 教材是考试的主教材，所以它提得多的东西优先。
Leh 列只作参考。**带 ⚠️ 的行说明计数被词形抬高过，别只看数字。**

| # | key | 中文 | English | Czech | Leh | 组 |
|---|---|---|---|---|---|---|
| 1 | `nadh-ring` | NADH（还原的烟酰胺环） | NADH, the reduced nicotinamide ring | 427 | 157 | 辅酶与维生素 coenzymes and vitamins |
| 2 | `glycogen-branch` ⚠️ | 糖原分支点 | glycogen branch point | 223 | 72 | 糖 sugars |
| 3 | `fadh2-ring` | FADH₂（还原的异咯嗪环） | FADH2, the reduced isoalloxazine ring | 102 | 23 | 辅酶与维生素 coenzymes and vitamins |
| 4 | `cellulose-unit` | 纤维素重复单元 | cellulose repeat unit (beta-1,4) | 99 | 1 | 糖 sugars |
| 5 | `amylopectin-branch` | 支链淀粉分支点 | amylopectin branch point (alpha-1,6) | 55 | 0 | 糖 sugars |
| 6 | `ganglioside` | 神经节苷脂 | ganglioside GM1 | 54 | 0 | 脂类 lipids |
| 7 | `cerebroside` | 脑苷脂 | galactocerebroside | 44 | 0 | 脂类 lipids |
| 8 | `chitin-unit` | 几丁质重复单元 | chitin repeat unit | 36 | 2 | 糖 sugars |
| 9 | `amylose-unit` | 直链淀粉重复单元 | amylose repeat unit (alpha-1,4) | 35 | 0 | 糖 sugars |
| 10 | `pi` | 磷脂酰肌醇 | phosphatidylinositol | 35 | 0 | 脂类 lipids |
| 11 | `dinucleotide-link` | 3'→5' 磷酸二酯键 | 3'-5' phosphodiester link | 31 | 30 | 核苷酸与碱基 nucleotides and bases |
| 12 | `ketoacyl-coa` | 3-酮脂酰辅酶 A | 3-ketoacyl-CoA | 25 | 2 | 代谢中间物 metabolic intermediates |
| 13 | `enoyl-coa` | 烯脂酰辅酶 A | trans-enoyl-CoA | 21 | 6 | 代谢中间物 metabolic intermediates |
| 14 | `hydroxyacyl-coa` | 3-羟脂酰辅酶 A | 3-hydroxyacyl-CoA | 21 | 4 | 代谢中间物 metabolic intermediates |
| 15 | `cardiolipin` | 心磷脂 | cardiolipin | 11 | 5 | 脂类 lipids |
