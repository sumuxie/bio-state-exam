# 质检 · jiri_bank/_qindex.json

> 2026-09-12 · 只读检查，**没有改动 jiri_bank 任何文件**。
> 复算：`python tools/qc_qindex.py`
>
> 为什么要做：这份索引是下游全部工作的唯一依据。它错一条，三十张卡的优先级就全错。

---

## 结论

**该做，而且抓到四条。两条改变了我要做的事，一条要你定。**

| | 发现 | 严重度 |
|---|---|---|
| 1 | **w3 的意思我理解错了** | **高 · 已改** |
| 2 | 七道生化性质的题被归在别的节里 | **高 · 待你定** |
| 3 | `__PRIMER_TASK__` 是个占位符，题面没转录 | 中 · 待你定 |
| 4 | SCOPE.md 的题数与索引对不上 | 低 · 只是文档过期 |

**没抓到的**（检查过，是干净的）：卷内编号无缺号无重号；三张卷子 19 / 30 / 60 题全在；
生化那 32 题里**没有该合并却没合并的**，我之前定的两处合并（#5+#10、#11+#30）是对的。

---

## 1 · w3 不是「三张卷子都出现」，是「出现在第一张卷子上」

规则 `S1→3，否则 S2→2，否则 1`，**98 / 98 条全部符合**，没有例外。

我之前在 `TOPICS.md` 和 app 列表里写的是「w3 是三张卷子都出现的题」，**错了**。已改。

**正确的含义，以及为什么第一张卷子值 3 分**（来自 `jiri_bank/SCOPE.md`，是可复算的测量）：

- 第一张卷子只有 **19 题**，另外两张是 30 和 60。
- **11 处跨卷重复，每一处都包含第一张卷子。** 它题最少，却吃掉了全部重复。
- 它是**唯一带实操任务**的一张。

所以第一张卷子是导师的「核心清单」，另外两张是扩展。**w3 = 在核心清单上。**

> 生化的 w3 有七道：#1 氨基酸 · #2 糖酵解 · #3 DNA vs RNA · #4 Kd ·
> #5 Taq/Kapa · #6 画投影式 · #7 fitness landscape。
> **其中 #5 和 #7 书里一个字都没有**，而它们在核心清单上。

---

## 2 · 七道题的归节值得怀疑 —— 而且它们正好是你的地盘

索引把它们归在 Basic Lab Techniques 或 Microbiology，所以**不在生化那 32 题里**：

| 现在归在 | 题面 |
|---|---|
| Basic Lab | Describe protein expression workflow in bacterial cells. |
| Basic Lab | Name at least two strains of E. coli suitable for protein expression… |
| Basic Lab | Imagine a situation when you need to tag a protein receptor… |
| Basic Lab | What is proofreading activity in DNA polymerases? |
| Basic Lab | Describe the process of DNA extraction from bacterial cells. |
| Basic Lab | Which antibiotic is stable at room temperature and which one is not? |
| Microbiology | What is polycistronic mRNA? |

**为什么这条重要。** 这些是**蛋白表达、加标签、聚合酶保真、质粒**——
正是 PESB 那次考官追着问的方向，也正是你日常做的事。

而且第一条「protein expression workflow」直接对上老师举过的那个例子：
**「表达蛋白要怎么做 → 要回答 plasmid → 要回答 plasmid 用的元件」。**

**归节是导师自己的归档方式，不是考纲边界。** 三位考官轮流问，没有理由认为
生化那位不会问蛋白表达。

> **要你定**：这七道要不要收进来？
> 我的建议是**收前四道**（表达流程 / 表达菌株 / 加标签 / 保真），
> 它们跟已经计划的三张大本营卡（plasmid 元件、yeast display、directed evolution）是同一片，
> **顺手就做了**。后三道（DNA 提取、抗生素、多顺反子）留给别的科目。

---

## 3 · 有一条题面根本没转录

```
__PRIMER_TASK__
```

这是 S1 上的**实操任务**留下的占位符。SCOPE.md 说第一张卷子「是唯一带实操任务的一张」，
指的就是它。它属于 Basic Lab Techniques，不在生化 32 题里，**但它在权重最高的那张卷子上**。

> **要你定**：这道题的原文是什么？如果是设计引物那类任务，它跟你的工作直接相关。

---

## 4 · SCOPE.md 的数字过期了（不影响工作）

| | SCOPE.md 写的 | 索引里实际的 |
|---|---|---|
| 卷面题数 | 98 | **109**（19 + 30 + 60） |
| 去重后 | 84 | **98**（合并了 11 处跨卷重复） |

84 那个数来自另一棵树里的 `state_exam/GAP_REPORT.md` 的覆盖判定（**不在本目录**），跟索引不是同一套计数。
**不用改 jiri_bank**，知道两个数字指的不是一回事就行。

---

## 检查了但没问题的

**卷内编号**：S1 = 6+7+6 = 19 · S2 = 10+10+10 = 30 · S3 = 20+20+20 = 60。
**无缺号，无重号，合计 109 全部有 refs。** 转录质量是好的。

**漏合并**：把 98 条两两比对题面相似度，> 0.72 的都人工看过。
生化节内**没有该合并没合并的**。相似度高的多数是句式相同（"Describe the structure and
function of X"），不是同一道题。

一处**跨节的 0.90**，两道题看着几乎一样但实际不同，**不能合并**：
- `…E. coli suitable for **protein expression**…`
- `…E. coli suitable for **cloning**…`

表达菌株和克隆菌株是两回事（BL21 那一类 vs DH5α 那一类）。
**这一条留着，因为它本身就是一道可能被追问的题。**

---

## 我因此改了什么

- `TOPICS.md` 里「w3 是三张卷子都出现的题」→ 改成「w3 = 在第一张卷子（核心清单）上」。
- `app/index.html` 列表页的同一句话，同样改。
- `app/data/_index.js` 加上每题的 `refs`，这样卡上能看到它来自哪张卷子第几题。
- 质检脚本存进 `tools/qc_qindex.py`，改了索引重跑一遍即可。
