# 留给 PESB 的 —— 生化这边不收，别丢

> 2026-09-12 · Ruojin 判定：这些是 protein engineering，归 PESB 那门课，**不进生化的三十道题**。
> 但它们**确实在导师的题目单上**，所以做 PESB 材料时从这里起步，不用重新翻题库。
>
> ⛔ **现在不要做这些。** 9 月 21 日之后不做任何新材料，生化的十项清单都还没做完。
> 这一份只是**存档**。

---

## 七道题的原文与它们在题目单上的位置

出自 `jiri_bank/_qindex.json`，导师把它们归在 Basic Lab Techniques 和 Microbiology 之下。

| 题目单归节 | 题面 | 为什么算 protein engineering |
|---|---|---|
| Basic Lab | **Describe protein expression workflow in bacterial cells.** | 表达流程本身 |
| Basic Lab | **Name at least two strains of E. coli suitable for protein expression** and explain… | 表达菌株（BL21 那一类） |
| Basic Lab | **Imagine a situation when you need to tag a protein receptor…** | 加标签，直通 His-tag / IMAC |
| Basic Lab | **What is proofreading activity in DNA polymerases?** | 聚合酶保真，接 Taq / Kapa |
| Basic Lab | Describe the process of DNA extraction from bacterial cells. | 偏 lab technique，优先级最低 |
| Basic Lab | Which antibiotic is stable at room temperature and which one is not? | 选择标记，偏 lab |
| Microbiology | What is polycistronic mRNA? | 操纵子那一片，也可能算分子生物学 |

**另有一条不能合并的近似题**，两道都留着：

- `…E. coli suitable for **protein expression**…`（表达菌株）
- `…E. coli suitable for **cloning**…`（克隆菌株）

题面相似度 0.90，但**是两道题**：表达菌株和克隆菌株是不同的东西。
**这个区别本身就是一道可能被追问的题。**

---

## 做 PESB 时，这几道能直接接上的已有东西

**别从零开始，下面这些已经存在：**

| 已有 | 在哪 | 能接哪几道 |
|---|---|---|
| **CHAIN-01 His-tag / IMAC**，11 层，含 wrong_level 标注 | `recombinants…/HANDOFF_stateexam_追问.md` §5 | 加标签那道 |
| PESB 口试**实测**的两条追问链（纯化 5 层、作业 6 层） | 同上 §1 | 表达流程那道 |
| 已确认的**术语错误五条**（His binds lysine 等） | 同上 §3 | 全部 |
| `pesbexplain/` 六章完整教材 app | `bio-state-exam/pesbexplain/` | 全部 |
| 横向卡 · 各种化学键（含配位键、His 咪唑基） | `oralexam/app/data/x_bonds.js` | 加标签那道 |
| 大本营卡原料 · 为什么用 plasmid | `oralexam/content/x_plasmid.md` | 表达流程那道 |

---

## 生化卡里已经埋好的接口

做 PESB 时这几处可以直接复用，**不用重写**：

- **卡 01 段 4** 落在 yeast display 和 dissociation constant 上——那两个词是故意留的口子。
- **横向卡 · 化学键**里「镍柱到底抓住了什么」那一条，就是 His-tag 的配位化学，
  而且标出了 PESB 那次的失分点（不是 histidine binds lysine，不是靠芳香环）。
- **卡 13 PTM** 的桥里写了「为什么用酵母不用大肠杆菌」：
  大肠杆菌胞质是还原性的，做不出二硫键，也不做 N-糖基化。**这是表达系统选择那道题的核心。**

---

## 一条要注意的

题目单的**分节是导师自己的归档方式，不是考纲边界**。
所以做 PESB 时不要只看 Basic Lab 那一节——**Microbiology 和 Biochemistry 两节里也可能有
protein engineering 的题**，得按内容重新过一遍，不能按标签。
