# Biochemie.pdf 勘误 — 书里写错的、或与通用写法冲突的地方

> 建立于 2026-09-11 · oralexam · 只在此目录产出

这本书是这批材料**唯一的事实出处**，但它不是没有错。凡是发现书上的说法与通用写法冲突，
或者书内部自相矛盾的，记在这里，**不要在卡片里悄悄改成“正确”版本**——考场上老师用的很
可能就是这本书。每条都要写清楚：书上怎么说、依据什么判断它有问题、考场上建议怎么答。

**核的规矩**：只看 OCR 不算核过。凡是关键数字，必须回 400 dpi 原图看一眼，确认是书印错
了还是 OCR 读错了。这两种情况处理方式完全不同。

---

## 1 · p029 · α-helix 的氢键写成 n+3，应为 n+4

| | |
|---|---|
| 书上正文 | *“CO skupina každé n-té aminokyseliny se účastní vodíkové vazby s NH skupinou **(n+3)** aminokyseliny v pořadí.”* |
| 是 OCR 错吗 | **不是。**已回 400 dpi 原图确认，书上印的就是 (n+3)。 |
| 书自己的图 | 同一页 **Obr. 2.8** 的括号，从 R₁ 后面那个 CO 连到 R₅ 前面那个 NH，画的是 **n → n+4**。 |
| 通用写法 | **i → i+4**（13 元环，即 3.6₁₃ helix）。 |
| 内部矛盾 | 书自己给的 **3,6 残基／圈**（p029）只跟 n+4 自洽：氢键跨一整圈，落在第 4 个残基上。若真是 n+3，那是每圈 3 个残基的 3₁₀ helix。 |
| 错的来源（推测） | **n+3 是 β-turn 的数**：p031 讲 β-otáčka 就是 CO(n)···NH(n+3)，那一条是对的。书在两处用了同一个数字。 |

**考场建议**：先说模糊但正确的 —— *“the CO hydrogen-bonds to the NH about one full turn
further along the chain”*。被逼问具体数字再给 **n+4**，并补一句 *“3.6 residues per turn only
works out with n+4”*。这样即使老师按书记的是 n+3，你是在讲道理，不是在跟他对答案。

---

## 2 · p033 · 二硫键被算进 primary structure

不是错，是**这本书的分类选择**，但和很多教材不一样，值得单列。

书上：*“primární struktura — je dána sekvencí aminokyselin v peptidovém řetězci a **umístěním
disulfidových můstků**”*（一级结构由序列**和二硫桥的位置**决定）。

很多英文教材把二硫键算进三级结构，因为它连接的是序列上离得远的残基。

**考场建议**：按这本书答，但知道差别。被追问时可以说，这正好是“二级／三级按序列距离划分”
那条规则的边界情形。

---

## 3 · OCR 丢字（不是书的错，是扫描件的错）

这些是 OCR 把字符吃掉了，书上本身是对的。引用时按下表还原。

| 页 | OCR 出来的 | 书上实际是 | 怎么确认的 |
|---|---|---|---|
| p027 | `v poloze 6 -řetězce hemoglobinu` | `v poloze 6 `**`β`**`-řetězce` | 希腊字母 β 被扫掉；上下文是镰刀型贫血 Glu6→Val |
| 全书 | 希腊字母普遍不稳：α 常被读成 a / o / ce，β 常被读成 f / fi / j / P | — | 凡引用含希腊字母的句子，回原图看 |

**通用规则**：OCR 文本里凡是出现 `-helix`、`-struktura`、`fi-struktura`、`j-otáčka` 这种开头
缺字母的，几乎都是希腊字母被吃了，不是书上漏印。

---

## 4 · p140 · 整页扫描过暗，第一次 OCR 出 0 字符（已修好）

不是书的错，是扫描的错，但差一点让一整页正文从材料里静默消失。

这一页的纸面被扫成了灰度约 63 的暗底（正常页面纸面接近 255），tesseract 把整页二值化成一个
色块，**返回 0 个字符**。`pages_manifest.tsv` 把它标成了 `thin`，所以它没有悄悄溜过去——这
正是 thin 标记存在的理由。

**内容**：p140 是 6.2.2 末尾到 **6.2.3 Glyoxylátový cyklus** 开头，含柠檬酸循环的能量账
（1159 kJ·mol⁻¹，约占葡萄糖氧化总能量的 40%，ΔG°′ = −2870 kJ·mol⁻¹）、anaplerotická reakce
与 pyruvátkarboxylasa、以及 isocitrátlyasa 和 malátsynthasa 两个反应。**做柠檬酸循环那几道题
（题库 #23、#25）时会用到这一页。**

**怎么修的**：`tools/ocr_book.py` 加了一条抢救通道。某页 plain 通道读出来太薄时，自动再试
`stretch`（按中位数把纸面拉白）、`adaptive`（局部阈值）、`invert` 三种预处理，取最好的一个。

两个坑记一下，下次别再踩：

- **拉伸的白点不能取高百分位。**最初用 p2–p98，没救回来：扫描件在页面外还有一圈白边，
  所以 p98 恒等于 255，拉伸等于没做。改成**用中位数当纸面亮度**才有效——对正常页几乎是
  恒等变换，对暗页才起作用。
- **选通道不能按字符数排。**`adaptive` 出的字符更多（2089 > 2038），但里面混着把扫描噪点
  读成标点的垃圾。改成按 **wordscore**（长度 ≥3 的纯字母词里的字母总数）排，`stretch` 才
  正确胜出。

抢救记录写在 `book/ocr_recovery.json`，`pages_manifest.tsv` 也多了一列 `method`，标明每页是
哪条通道读出来的。全书跑完后 **229 页全部 ok，只剩 p001 是 thin（封面，197 字符，无损失）**。

---

## 5 · p055 vs p056 · 书自己对 Km 前后不一致（Km ≠ Kd）

| | |
|---|---|
| 书 p055 | 推导里**把式子印出来了**：`[EA] = [E]t·[A] / ( (k₋₁+k₂)/k₁ + [A] )`，并说分母里那个由速率常数构成的分式就是 **Km**。已回原图确认，不是 OCR 错。 |
| 书 p056 | 同一节后面又说 Km *"charakterizuje vždy dvojici enzym a substrát, **vyjadřuje afinitu** enzymu k substrátu"*，Km 越小底物越好。 |
| 书 p060 | 全书唯一明确定义成**解离常数**的是 Ki：*"inhibiční konstanta Ki definovaná jako **disociační konstanta** komplexu EI"*，Ki = [E][I]/[EI]。 |
| 矛盾在哪 | Km = (k₋₁+k₂)/k₁ 是**动力学**组合；真正的解离常数是 Kd = k₋₁/k₁。**只有 k₂ ≪ k₋₁ 时两者才相等。** 催化快的酶 Km 明显大于 Kd，此时把 Km 读成亲和力是错的。 |
| 为什么这条重要 | 这是**书自己跟自己打架**，两边都在书里。所以考场上可以**引用这本书反驳这本书**，那是最安全的位置——不是"别的教材说"，是"你这本书第 55 页印的式子说"。 |

**考场说法**（先给书，再给条件）：
> *"The textbook reads Km as an affinity, and that is fair as long as catalysis is slow compared with
> the substrate falling back off. Strictly, Km is k₋₁ plus k₂, over k₁, while a true dissociation
> constant is k₋₁ over k₁. They coincide only in the rapid-equilibrium case. The clean dissociation
> constant in this book is Ki, defined as [E][I] over [EI]."*

**跟第 1 条（α-helix n+3）同一类**：书内部自相矛盾，而不是书与通用写法冲突。
这一类的处理方式是**用书的一半打书的另一半**，比引用外部权威稳。

---

## 6 · p196 · β-氧化第四步的酶印成 `β-ketokinasa`，应为 thiolase

| | |
|---|---|
| 书上印的 | Obr. 8.x β-氧化四步表，第四步 **D. Thiolytické štěpení**，酶名那一栏印的是 **`β-ketokinasa`** |
| 是 OCR 错吗 | **不是。**已回 280 dpi 原图确认，书上印的就是 ketokinasa。 |
| 书自己的图 | **同一行**写的是 *thiolytické štěpení*（硫解），进来的是 **CoASH**，出去的是 acyl-CoA ＋ acetyl-CoA。 |
| 矛盾在哪 | **kinase 转移的是磷酸**，这一步一个磷酸都没有。硫解酶按反应命名就是 **thiolase**（3-ketoacyl-CoA thiolase，即 β-ketothiolase）。「ketokinasa」多半是 **thiolasa → kinasa** 的排印错。 |
| 怎么用 | 跟第 1、5 条同一招：**用书的一半打书的另一半**——不说「别的教材叫 thiolase」，说「你这本书同一行写的是 thiolytické štěpení，加的是 CoASH 不是磷酸」。 |

**考场说法**：
> *"The textbook's own figure calls this step thiolytic cleavage and shows coenzyme A coming in, not
> phosphate — so the enzyme is a thiolase, generally 3-ketoacyl-CoA thiolase. The name printed next
> to it, ketokinase, cannot be right: a kinase transfers a phosphoryl group and there is none here."*

---

## 7 · 「这本书正文一个加粗都没有」——不成立，至少第 4 章不成立

| | |
|---|---|
| 原来的结论 | `LOGIC.md` §7 写「这本书正文一个加粗都没有，所以『只背加粗的』这个标准不存在」。 |
| 反例 | **p110–p111**（§4.3.2 翻译后加工）正文里有加粗：*preproteinů · preproproteinů · signální sekvenci · ribonukleoproteinu SRP · riboforiny I a II · signální peptidasou · sekrečních granulí · preproinsulin · proinsulin*。 |
| 第二处反例 | **p202**（§9 光合作用开头）正文也有加粗：*Thylakoidní membrány · chloroplasty*。两处分属不同章，**可能是不同作者写的章节排版习惯不同**。 |
| 怎么发现的 | 写卡 08（propeptide / signal peptide）时回原图核 23 残基那个数字，顺带看见的。 |
| 注意 | OCR 出来的纯文本**不带格式**，所以 `book/pages/*.txt` 里看不出加粗——这也是当初得出「没有加粗」的原因。**凡是关于版式的结论，只能回原图看。** |
| 结论怎么改 | 「全书无加粗」→「**加粗零星出现，至少第 4 章有**；但它仍然不是可靠的重点标记，锚点还是靠节标题、图、表、命名句」。已改 `LOGIC.md` §7。 |


---

## 8 · p045 说黄素的氢加在 N-1 和 N-10，但同一页的结构式把核糖醇链画在 N-10 上

| | |
|---|---|
| 是 OCR 错吗 | **不是。**已回 320 dpi 原图确认，正文印的就是 N-1 和 N-10。 |
| 书自己的图 | **同一页**的 FMN 结构式里，核糖醇链接在 **N-10** 上——那个氮已经四配位，没有空价可以再接氢。 |
| 第二处自证 | 同一页画的氧化型／还原型对照，两个氢画在 **N-1 和 N-5** 上，也就是通行的位置。 |
| 矛盾在哪 | 正文和它自己的两张图不一致。**N-10 接着核糖醇，不可能同时接氢。** |
| 怎么用 | 跟第 1、5、6 条同一招：**用书的一半打书的另一半**。不说「别的教材写 N-5」，说「你这本书同一页的结构式把核糖醇画在 N-10 上」。 |
| 怎么发现的 | 写卡 31（维生素与矿物质）时核黄素那一段发现的。 |

**考场说法**：
> *"The running text says the hydrogens go on N-1 and N-10, but the structure printed on the same
> page attaches the ribityl chain to N-10, so that nitrogen has no free valence. The oxidised and
> reduced pair drawn beside it puts the hydrogens on N-1 and N-5, which is the accepted answer."*

---

## 9 · Tab. 3.1 给 NAD⁺ 的维生素写 nicotinic acid，同一页正文说辅酶的碱基是 nicotinamide

| | |
|---|---|
| 矛盾在哪 | 表格列的是**维生素**（nicotinic acid，烟酸），正文说的是**辅酶里那个碱基**（nicotinamide，烟酰胺）。两个不是同一个分子。 |
| 是错吗 | **严格说不是错**，是两句话在说两件事。但并排放着，读起来像书自相矛盾。 |
| 怎么用 | 这正好是卡 31 那个核心陷阱的书证：**辅酶不是维生素，是维生素变成的东西**。书自己这两行就演示了这个区别。 |
| 怎么发现的 | 写卡 31 时对 Tab. 3.1 逐行核对发现的。 |
