# 基础卡 · glycine 是怎么产生的（原料）

- **类型** 不是题库的题。同事问过、她答不上，所以留着。
- **要紧的是它暴露的事**：捷克书**没有氨基酸生物合成这一节**，
  书自己 p202 引的「kap. 5.3.4 Biosyntéza aromatických aminokyselin」在书里不存在。
  这类缺口要靠 Lehninger 临时补，一次一处。
- **来自** SHAPE_V2.md §9，该文件已归档。

## glycine 是怎么产生的（v2 形态，兄弟页）

> 这不是 32 题之一，是**基础卡**。放在这里是为了验证 v2 的形态能不能装下「你还没学的东西」。

**问题**：How is glycine produced?

**一口气说完（兄弟点，漏 2 条以内算过）**

1. **主路，从 serine。** PLP 依赖的 aldol 式裂解切掉 α-碳上的 hydroxymethyl，交给
   tetrahydrofolate 带走。酶是 **serine hydroxymethyltransferase**，反应**可逆**。〔书 p122 p126〕
2. **serine 自己从哪来**（书没有，Lehninger 补）：3-phosphoglycerate → dehydrogenase(NAD⁺) →
   3-phosphohydroxypyruvate → 从 glutamate 转氨 → 3-phosphoserine → phosphoserine phosphatase
   → serine。所有生物同一条路。〔Leh 8 §22.2，印刷 p806–808，Fig 22-14〕
3. **次路，从 threonine。** **Threonine aldolase** 劈成 glycine + acetaldehyde。〔书 p122 p126〕
4. **第三条，glycine synthase**（又名 glycine cleavage enzyme），可逆：
   CO₂ + NH₄⁺ + N5,N10-methylene-THF + NADH → glycine + THF + NAD⁺。〔Leh 8 §22.2〕**书里没有。**
5. **植物里还有一条：photorespiration。** RuBP 被 RubisCO 加氧 → phosphoglycolate → glycolate
   → glyoxylate。书明说这是植物合成 glycine 和 serine 的路。〔书 p212〕
6. **去向，挡「那 glycine 拿来干嘛」**：glycine + succinyl-CoA →
   **δ-aminolevulinate synthase** → porphyrin 合成的第一步，也是那条路的调控关键点。〔书 p146〕

**① 定义（规矩 A：先给边界）**
> "Glycine is the only achiral proteinogenic amino acid — its side chain is a single hydrogen."

**开口逐字稿（≤ 25 词，自足）**
> "Mainly from serine: a PLP-dependent cleavage removes the hydroxymethyl group onto
> tetrahydrofolate. The enzyme is serine hydroxymethyltransferase, and it runs both ways."

数一下这句里没交代的词：PLP、tetrahydrofolate、both ways。这三个就是接下来的三刀，
所以定义链里必须各有一句。

**定义链（每个词一句，规矩 A）**
- **PLP** — pyridoxal phosphate, the vitamin B6 coenzyme that forms a Schiff base with the
  amino group and makes the α-carbon's bonds labile.
- **Tetrahydrofolate** — the carrier of one-carbon units at oxidation levels between methanol
  and formate; the folate vitamin in its reduced form.
- **Both ways** — the same enzyme runs glycine → serine in tissues that need serine.

**④ 为什么，落到地基**
1. 为什么偏偏是 serine 和 threonine 能直接掉出 glycine？
   → 因为 PLP 的 aldol 式裂解只在 β-碳带 OH 时才可能。〔书 p122 Obr. 5.3〕
2. 为什么一个辅酶能做这么多种反应？
   → Schiff base 之后 α-碳上三个取代基哪个都能断：断羧基是 decarboxylation，断 α-H 是
   transamination，断侧链是 aldol 裂解。**一个辅酶，三根键。**
3. 断哪根由什么决定？
   → 由酶把哪根键摆得跟 π 体系垂直决定，也就是取决于化学，不取决于氨基酸叫什么名字。
   **停止规则**：再往下是有机化学的立体电子效应，不是生化了。

**⑦ 陷阱**
- glycine synthase = glycine cleavage enzyme，**同一个酶两个名字**，方向不同而已。
- serine hydroxymethyltransferase 是**可逆**的，所以「glycine 从 serine 来」和
  「serine 从 glycine 来」两句都对，要看组织。书 p126 讲的是后一个方向。
- photorespiration 那条**只在植物**，别当通用路答。
