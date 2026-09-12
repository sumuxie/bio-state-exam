# 卡 13 · What are two critical post-translational modifications for surface and secreted proteins?

- **题库** Biochemistry #13 · **weight 2**
- **出处** Biochemie OCR p112（glykosylace、hydroxylace）、p113（disulfidové vazby、methylace）、p114（fosforylace、sulfatace）、p109（chaperony）
- **插队理由** 2026-09-11 Ruojin 跟同事聊到这题，只答出「O-glycan / N-glycan」，自评不合格。
  **这是实测证据，比权重可靠**，所以这张卡从 w2 提到第一批。
- **建立** 2026-09-11

---

## 为什么「O-glycan / N-glycan」不合格

那两个词只回答了「叫什么」。题目问的是 **critical**——为什么是这两个、它们做了什么、在哪儿做的。
而且**书里全都有**，这题不需要外部来源。

**合格答案的骨架是一个「为什么偏偏是这两个」**：

> 表面蛋白和分泌蛋白的共同点是**它们都走分泌通路**，也就是都经过 ER 腔。
> 那两个修饰恰恰是**只能在 ER 腔里发生**的：
> 胞质是**还原性**环境，二硫键在那里形不成；糖基化的机器在 ER 腔和 Golgi 里。
> **所以这两个修饰等于「这个蛋白到过 ER」的签名。**

这一句说出来，题就答对了一半，剩下的是细节。


---

## ⚠ 口试时他不会念完整的题面（2026-09-12 Ruojin 指出）

卷面：*"What are two **critical** post-translational modifications for **surface and secreted** proteins?"*
**口试他多半只问：** *"What is post-translational modification?"*

**所以开口必须自带结构，他不会替你把题目问完整：**

1. **定义** —— 翻译之后加在链上的共价改动，没有密码子编码。
2. **挑两个** —— N-glycosylation 和 disulfide bond formation。
3. **为什么是这两个** —— 都只在 ER 腔发生；胞质是还原性的，二硫键在那儿形不成。
4. **分别对应什么** —— 糖基化决定去向与折叠质控；二硫键把链锁在一个能量上并不最有利的构象上。

> "Post-translational modification means a covalent change made to the chain after it has been
> translated, so it is not encoded by a codon. For proteins that go to the surface or out of the
> cell, two of them matter most: N-glycosylation and disulfide bond formation. What they have in
> common is that both can only happen in the lumen of the endoplasmic reticulum — the cytosol is
> reducing, so disulfides do not form there, and the glycosylation machinery is not there either."

**卷面上多出来的三个词，就是他要挖的三个方向**：
`two`（别列一堆）· `critical`（说清为什么是这两个）· `surface and secreted`（分别对应哪类蛋白）。

---

## 一口气说完（兄弟页）

1. **两个是**：**N-glycosylation** 和 **disulfide bond formation**。
2. **为什么是这两个**：都只在 **ER 腔**发生；胞质是还原性的，二硫键在那儿形不成。
3. **糖接在哪**：N- 连在 **asparagine 的酰胺氮**上；O- 连在 **serine 或 threonine 的羟基**上。
4. **N- 的识别信号**：三肽序列 **Asn-X-Ser/Thr，X 是除 proline 外任何氨基酸**。
5. **糖的载体**：先在 **dolichol phosphate** 上造一个活化的寡糖核心。
6. **核心的组成**：**Glc₃Man₉(GlcNAc)₂**，起点是 UDP-N-acetyl-D-glucosamine。
7. **什么时候接**：**在 ER 膜上、蛋白还没合成完的时候**就接了（共翻译）。
8. **Golgi 里做什么**：**修剪**——glucosidase 切葡萄糖、mannosidase 切甘露糖，再由 glycosyltransferase 依次加 GlcNAc、galactose，**末端是 sialic acid**。
9. **一个去向标签**：甘露糖 **6 位磷酸化**成 mannose-6-phosphate，带这个标签的分泌型糖蛋白**被送去溶酶体**。
10. **二硫键怎么形成**：相邻两个 cysteine 的巯基**氧化**成 cystine；催化的酶是 **protein disulfide isomerase**，就在 **ER 池**里。
11. **书对二硫键的定性**（很好用）：它是把肽链**固定在一个能量上并不最有利的构象**上的一种办法。
12. **留口子**：这两个修饰都发生在蛋白**还没折好**的时候，所以它们同时是折叠质量控制的一部分。

---

## 段 1 · 定义

> "A post-translational modification is a covalent change made to the chain <b>after</b> it has been
> translated — so it is not encoded by a codon. For surface and secreted proteins the two that
> matter most are <b>N-glycosylation</b> and <b>disulfide bond formation</b>."

**为什么这样开口。**先给「不是密码子编码的」这条边界，这一句同时挡掉了 #1 那题里
hydroxyproline 为什么不算 proteinogenic 的问题——**同一个边界，两道题共用。**

---

## 段 2 · general（为什么偏偏是这两个）

> "What surface and secreted proteins have in common is that they all travel through the
> secretory pathway, so they all pass through the lumen of the endoplasmic reticulum.
> Those two modifications are exactly the ones that can only happen there.
> The cytosol is a reducing environment, so disulfides do not form in it. And the glycosylation
> machinery sits in the ER and the Golgi. So between them, these two modifications are the
> signature of a protein that has been through the ER."

---

## 段 3 · 稍展开（挑 N-glycosylation，因为它是被追问的那一个）

> "N-glycosylation runs in two phases. First the oligosaccharide core is not built on the protein
> at all — it is assembled on a lipid carrier, <b>dolichol phosphate</b>, starting from
> UDP-N-acetylglucosamine, until it reaches the composition three glucose, nine mannose,
> two N-acetylglucosamine.
> Then a transferase moves that whole core onto the protein. The signal it reads is a tripeptide,
> <b>asparagine, any residue except proline, then serine or threonine</b>. This happens in the ER
> membrane while the protein is still being synthesised.
> In the Golgi the sugar is then trimmed and rebuilt — glucosidases take the glucoses off,
> mannosidases take some mannoses off, and further transferases add
> N-acetylglucosamine, galactose and sialic acid at the end."

〔可裁〕再一层：
> "And one mannose can be phosphorylated at position six. <b>Mannose-6-phosphate</b> is the tag
> that sends a secretory glycoprotein to the lysosome."

---

## 段 4 · 留口子

> "Both of these happen while the chain is still folding, not after, so they are also part of the
> folding quality control. That is the part I find interesting, because the textbook says elsewhere
> that for many proteins the biologically active conformation is <b>not</b> the lowest-energy one."

**这一段接的是 p109。** 口子留在「折叠质量控制」上，老师追下去就到 chaperone，那边卡 01 有。

---

## 定义链

- **post-translational** — After translation; not specified by any codon.
- **secretory pathway** — ER to Golgi to vesicle to surface or outside.
- **lumen** — The inside of the ER, topologically already outside the cell.
- **reducing environment** — Enough free thiol around that S–S bonds get pulled apart again.
- **sequon** — The short sequence an enzyme reads as its address; here Asn-X-Ser/Thr.
- **dolichol phosphate** — A long lipid in the ER membrane, n = 9–22 isoprene units, used as the
  scaffold the sugar core is assembled on.
- **sugar nucleotide** — The activated donor form of a sugar; the book says these are the substrates
  of all glycosylation reactions.

---

## ④ 为什么（三层）

1. **为什么要在 ER 里做，不在胞质做？**
   因为胞质是还原性的，二硫键会被还原回去；而糖基转移酶都在 ER 腔和 Golgi 里。
2. **为什么细胞要费劲先在 dolichol 上造一个核心，再整块搬过去？**
   因为这样每一个 N 位点起点都一样，**质量控制才有统一的参照**；修剪的程度就成了一个可读的状态标签
   （葡萄糖切没切完 = 折好了没有）。
3. **那为什么要给蛋白加糖？**
   书说 glycosylation 是最重要的翻译后修饰之一，但**没有明确给功能清单**。
   能从书里说出来的是：它决定去向（mannose-6-phosphate → 溶酶体），并且发生在折叠过程中。

**停止规则 · 落在「进化 / 测量限制」之间**
> "Beyond that, why glycosylation specifically rather than some other tag is a historical question —
> the pathway is what survived. What we can measure is where the sugar sends the protein."

> ⚠ 「糖决定半衰期、稳定性、免疫识别」这些通用说法**书里没有**。可以说，但要说成
> "generally" 而不是 "the textbook says"。

---

## ⑥ 硬事实（全部抄自书）

| 名字 | 书里给的内容 | 页 |
|---|---|---|
| **N-glycosidic bond** | 接在 **asparagine 的游离酰胺基**上 | p112 |
| **O-glycosidic bond** | 接在 **threonine 或 serine 的羟基**上 | p112 |
| **glycosyltransferase** | 高度专一；**不只识别底物，还识别要接上去的那段多肽的结构** | p112 |
| **糖基化的底物** | **cukerné nukleotidy**（sugar nucleotides） | p112 |
| **发生地点** | **ER 与 Golgi** | p112 |
| **dolichol phosphate** | 高分子脂质载体，**n = 9–22** | p112 |
| **寡糖核心的组成** | **Glc₃Man₉(GlcNAc)₂ – P – P – Dol** | p112 |
| **第一个接上去的糖** | **UDP-N-acetyl-D-glucosamine** | p112 |
| **识别信号（sequon）** | **Asn-X-Ser 或 Asn-X-Thr，X = 除 proline 外任何氨基酸** | p112 |
| **接的时机** | 在 **ER 膜部分**，蛋白**尚未合成完** | p112 |
| **Golgi 里的修剪** | **glucosidase** 去葡萄糖、**mannosidase** 去甘露糖 | p112 |
| **后加的糖，按顺序** | GlcNAc → D-galactose → **sialic acid（末端）** | p112 |
| **mannose-6-phosphate** | 甘露糖 6 位磷酸化；**分泌型糖蛋白被送往溶酶体**的标签 | p112 |
| **disulfide 的形成** | 相邻一对 cysteine 巯基**氧化**成 cystine | p113 |
| **protein disulfide isomerase** | 催化二硫键形成，**定位在 ER 池（cisternae）** | p113 |
| **glutathione** | proinsulin 的 A、B 链间二硫键靠与**氧化型谷胱甘肽**反应形成 | p113 |
| **书对二硫键的定性** | 把肽链**固定在一个能量上并不完全有利的构象**上的办法 | p113 |
| **hydroxylation** | collagen 里的 4-hydroxyproline、**3-hydroxyproline**、5-hydroxylysine | p112 |
| **hydroxylase 的辅因子** | **氧气、2-oxoglutarate、L-抗坏血酸、金属离子**；酶在 **ER 池**里 | p112 |
| **methylation** | Glu/Asp 的羧基 → O-甲酯；Lys/Arg/His 的氨基 → 单至三甲基衍生物 | p113 |
| **methylation 的例子** | 细菌**趋化性**相关蛋白；精子蛋白甲基化错误是**不育**的常见原因 | p113 |
| **phosphorylation** | Ser、Thr 的羟基和 Tyr 的酚羟基 → 磷酸酯；Lys、His 少见 | p114 |
| **sulfation** | Tyr 残基可成硫酸酯，例子是 **gastrin** | p114 |
| **γ-carboxyglutamate** | 也是一种侧链共价修饰 | p113 |

---

## ⑦ 陷阱

1. **只说 N- 和 O- 是不够的。** 这正是 2026-09-11 那次的失败。题目问 **critical**，
   所以必须给「为什么是这两个」——都只在 ER 腔发生。
2. **hydroxyproline 不是密码子编码的。** 它是翻译后加上去的（p112），所以**不算 proteinogenic**。
   这条同时是 #1 那题的边界。
3. **抗坏血酸在这里的角色是辅因子，不是「维生素好」。** 缺了它 collagen 的羟化做不完，
   这就是坏血病的生化落点。**书给了辅因子清单，没给病名**——病名是你补的，别说成书上写的。
4. **糖基化不是一次做完的。** 两阶段：ER 里接核心，Golgi 里修剪加尾。
   说成「在 Golgi 里加糖」是错的。
5. **sequon 里的 X 不能是 proline。** 这个例外很容易漏，而它正是 specific 题的形状。
6. **protein disulfide isomerase 不是「形成」二硫键那么简单**，书说的是它参与形成；
   isomerase 这个名字本身说明它也**重排**错配的二硫键。
7. **methylation 和 phosphorylation 也是 PTM，但不是这题的答案。**
   它们主要发生在胞内蛋白（信号、趋化），不是分泌蛋白的特征修饰。
   老师若问「还有哪些」，报这些；但别把它们答成前两个。

---

## ⑧ 桥

- **→ 卡 01（蛋白质结构）**：二硫键这本书算进 primary structure；hydroxyproline / hydroxylysine
  是 collagen 的特有残基；p113 说二硫键把链固定在**能量上不最有利**的构象上，
  接 p109「活性构象不总是能量最低」。**三处互相咬合。**
- **→ #12 signal peptide / #8 propeptide**：同一条分泌通路，p110–p111 有 preproinsulin 的完整例子。
- **→ 你的工作**：yeast display 表达的是**表面蛋白**，走的正是这条通路。
  「为什么用酵母而不用大肠杆菌」的答案就在这里——**大肠杆菌胞质是还原性的，做不出二硫键，
  也不做 N-糖基化。**这是一个极强的留口子。

---

## 待办

- [ ] 回 400 dpi 原图核 Glc₃Man₉(GlcNAc)₂ 的下标（OCR 出来是 `Gle,Man,(GleNAc)2`，数字被吃掉了）。
- [ ] 核 dolichol 的 n = 9–22。
- [ ] 坏血病这个病名书里没有，确认要不要说。
