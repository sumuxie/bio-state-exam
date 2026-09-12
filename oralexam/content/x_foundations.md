# 横向卡 · 四块停止地基（原料）

- **类型** 横向卡，32 张题卡共用。
- **四块**：热力学 / 动力学 / 进化 / 测量方法的限制。每块要有一句定义 ＋ 一句停止句。
- **状态** 只有「动力学」这一块写完了（下面）。热力学、进化、测量三块还没写。
- **来自** SHAPE_V2.md §12b，该文件已归档。

## 「kinetics 到底是什么」——属于地基定义，32 张卡共用

这是 v1 四块地基里「动力学」那一块。你 why 追到底会落在这里，落点本身就会被问，
所以必须有一句定义。**书里有现成的抓手**：§3.3 Kinetika enzymové reakce（p054），
书是用**反应级数**来给它下操作定义的。

**定义（先说这句）**
> "Kinetics is about rates: how fast a reaction goes and what the rate depends on.
> It is the complement of thermodynamics — thermodynamics says whether a reaction can go and
> how far, kinetics says how fast it gets there. An enzyme changes only the second one."

**书自己的抓手，被追问就给（p056, p058）**
- 底物浓度低时，速率正比于 [S]：**first order**（书：kinetika I. řádu，p056）。
- 底物饱和时，速率与 [S] 无关、只正比于 [E]：**zero order**（书：kinetika 0. řádu，p058）。
- 书还顺带给了实用推论：**测酶活性要在饱和底物浓度下做**，因为那时速率只反映酶量。

**⑦ 陷阱**：Km 不是 Kd。Km 是速率降到一半时的底物浓度，是**动力学**量；
Kd 是结合的**热力学**量。只有在催化远慢于解离时两者才接近。
这条同时连着 #4（Kd）和 #21（Michaelis-Menten），三题共用。

**停止句**
> "Below that, rate constants come from collision frequency and activation energy — that is
> physical chemistry, not biochemistry."
