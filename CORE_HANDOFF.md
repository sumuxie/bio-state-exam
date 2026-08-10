# CORE HANDOFF — 路由页

Ruojin 定的三条主线。**每条有自己的文件，只读你要做的那一条。**

| 你要做什么 | 打开 | 现状 |
|---|---|---|
| app 功能 | `CORE1_APP.md` | 7 个里做了 4 个 |
| Lehninger 额外内容 | `CORE2_LEHNINGER.md` | **内容 30 / 117 section**；**层：`trace` 30 / 30 ✅ 已收官** |
| 结构式 | `CORE3_STRUCTURES.md` | **202 / 217**（清单已定稿，Ruojin 说全要） |

## 进度：先分清「内容」和「层」，这是两个轴

⚠️ **「做了多少」这个问题有两个答案，别混着说。** **内容**＝写了几个新 section 节点；
**层**＝在已有节点上补的东西（`mustKnow`、`trace`、行内引用）。两者进度完全不同。

**内容（新节点）：117 个 section 做了 30 个**，2026-08-09 用两份 tsv 逐个核对过。
⚠️ **上面那句话的措辞不要改**——`audit_handoff.py` 用正则 `117 个 section 做了 (\d+) 个`
从这里读实时计数并与数据库比对；改写这一段时它当场报了 `COUNT MISSING`，**说明它在正常工作**，别把它绕过去。

| 来源清单 | 总数 | 已做 | 说明 |
|---|---|---|---|
| `depth_queue.tsv` | 85 | **20** | **正好是 rank 第 1–20，一个不多一个不少**（逐个验过） |
| `lehninger_only_scope.tsv` | 32 | **10** | = 她圈定的「主要需要的」7 个 + merge 桶实测的 3 个真缺口 |

**Ruojin 亲自圈定的 13 个已全部处置完毕**：7 个「主要需要的」做完，6 个「merge 进对应 topic」
里 3 个真缺口做完、另 3 个实测确认不必做（§15.1 已覆盖 · §15.3 的「零命中」理由是假的 ·
§19.4 主体已在 `L-23-2-1`）。**所以「她点名要的」现在是零欠账。**
剩下的 87 个都是**她说过优先级更低的**：Lehninger-only 还剩 22 个（其中 **19 个是「一笔带过
就行」**），depth queue 还剩 65 个（**按 ratio ≥1.5 真正值得做的约 38 个**）。

**层（在已有 30 个 Lehninger 节点上）：**

| 层 | 进度 | 说明 |
|---|---|---|
| `mustKnow` | **30 / 30** ✅ | 全项目 240/240，零缺口 |
| `points`/`terms`/`quiz`/`oral` | **30 / 30** ✅ | 每个节点都满 |
| **`trace`** | **30 / 30** ✅ | **2026-08-09 开工、2026-08-10 收官**，一批 3 个共十批。全项目 64 张卡 / 63 个节点 |
| 行内引用进检查协议 | **27 / 30** | 差 `L-9-1-1`/`L-9-2-1`/`L-22-2-1` 三个（`L-24-2-1` 2026-08-10 补完）|
| `explain` / `skipIt` / `bank` | 0 | **有意留空，不要去填**（理由见 CORE2） |

⚠️ **优先级需要 Ruojin 重新拍板。** 之前的排序是 **CORE2 > CORE3 > CORE1**，理由是 CORE2 里有
她亲自圈定却一个没做的 7 个 section。**那 7 个已于 2026-08-08 全部完成**，所以那条理由用光了。

现在三条线的候选下一步，**成本与收益差别很大**：

- **CORE2**：**内容这条轴上，她点名要的已经零欠账**；剩下的是「一笔带过」19 个和 depth queue
  的长尾。⚠️ **「层」那条轴基本关掉了**：`trace` 已 **30/30 收官**，`mustKnow` 和
  `points`/`terms`/`quiz`/`oral` 本来就满。**层里唯一还欠的是行内引用 27/30**——还有三个
  Lehninger-only 节点（`L-9-1-1`/`L-9-2-1`/`L-22-2-1`）的引用**不在检查器的 636 条里**。
  **这是现在成本最低、收益最明确的一件事，而且已经有现成样板**：`L-24-2-1` 已于 2026-08-10
  补完（20 条引语 → 11 个 (字段, 页) 行，全部 OK），做法照抄它即可。
- **CORE3**：**分母定稿了**（Ruojin 2026-08-09：「我看了清单了没关系都做」，205 全要），
  **202 个已画**。其中 177 个是 2026-08-09 从 **PubChem 取回来的**，不是手画的——CID、分子式、
  SMILES、2D 坐标全带出处和日期，每条过五项断言。**还差 15 个**，是重复单元/分支点/还原型环
  这类 PubChem 上没有单一化合物的东西，只能手画，清单和画法在 CORE3 里。
  ⚠️ **顺带修了一个静默 bug：`app.js` 只渲染五个氨基酸类别的条目，所以 `sugars.js` 那 5 个糖
  在页面上一直是不显示的**（标题写 5/5，底下空的）。检查器只验数据不验渲染，所以从没报过。
- **CORE1**：剩 3 个舒适性功能，不影响考试。A4（笔记+图片）是唯一能损坏已有用户数据的。

**`trace` 已经收官，所以那条建议用完了。** 如果她没有新指示，现在成本最低的是
**给剩下三个节点补行内引用**（CORE2 的层，27/30 → 30/30，照抄 `L-24-2-1`）；工作量大一些但确定的是
**CORE3 剩下那 15 个只能手画的结构**，以及**把 53 个没下来的真人录音补齐**（换个网络跑一次即可）。⚠️ **旧版本这里写过「画了她看不见 = 已完成的工作正在白费」——那是说过头了，
已经改掉。** `biochemie_struct` 是独立的第三个 app，**部署正常、有自己的地址、pro 里也有入口**；
真实情况只是「从根目录那条路（自动跳 basic）走不到它」。**已经画的 25 个没有白费。**

---

## 新 session 的开场指令（复制这段）

```
读 C:\Users\Admin\Downloads\bio-state-exam\CORE_HANDOFF.md，全文读完（只有 8 KB，别跳）。
然后只读你要做的那一条主线对应的那一个 CORE 文件，其余三个不要读。
不要整读 HANDOFF_LEHNINGER.md / HANDOFF.md / LEHNINGER_START.md，只按章节号 grep。
开工前跑 CORE_HANDOFF「每次开工前跑这三条」那套检查；收工前再跑一次 audit_handoff.py。
写完一批立刻 commit + push。被打断就回「继续」，接着做之前先跑一次 parse 检查。

这次做：<在这里填一行>
```

**最后那行填什么**——三条线各自的下一步：

| 想做哪条 | 填这一行 |
|---|---|
| **CORE2 的层（推荐）** | `trace 已 30/30 收官。改做「层」里唯一还欠的一项：给 L-9-1-1 / L-9-2-1 / L-22-2-1 补行内 (A p.N) 引用（L-24-2-1 已补完，做法照抄它）——现在 27/30 个节点在协议里。` |
| CORE2 的层（补债） | 同上一行，已合并。 |
| CORE2 内容 | `「一笔带过」19 个里挑最靠前的，整个 ch12（信号转导/GPCR/RTK/癌基因）是最大的一块。她的原话是「其他的最简单一笔带过就行」，所以写短，不要写成深度节点。` |
| CORE3 结构式 | `CORE3 还差的 15 个只能手画（重复单元、分支点、还原型辅酶环、β-氧化中间物）。清单和每个的画法在 CORE3「还差的 15 个」那节。⚠️ 仍然不许凭记忆写 SMILES，从已 fetch 的相关分子改起。` |
| CORE1 app | `CORE1 的 A3（只看必背 filter）。A4 放最后，它是唯一能损坏已有用户数据的。` |

⚠️ **不管填哪一行，都别跳过「动手前先 grep」这一步。** CORE2 里那两张表的覆盖判断
**已经被推翻过五次**，全部是「没查就填」。

⚠️ **「merge 进已有 topic」这一桶已经空了**（§28.3 · §19.5 · §14.5 全做完）。将来如果还有
节点要并进已有 key：`topicKey` **并进、不要新起**，`czTitle` 也**不用** `Žádná —`——照抄
`leh_ch28.js` / `leh_ch19c.js` / `leh_ch14.js`。⚠️ **并进之后跨书连接数「可能涨、也可能不涨」**：
`L-19-5-1` 并进 `respiratory-chain` 时**一点没涨**（那个 key 本来就跨书），而 `L-14-5-1`
并进 `glycolysis` 时**从 19 涨到 20**（那个 key 此前是 Czech 单书的）。**两种都正常。**

---

## 不要读旧的三个 handoff

`HANDOFF_LEHNINGER.md` 302 KB / 4261 行 ≈ 69k tokens，`HANDOFF.md` 68 KB，
**`LEHNINGER_START.md` 8.5 KB**。整读前两个中的任何一个都烧掉一个 session。
**这三个 CORE 文件已经把还有效的结论都抄过来了**，旧文件只在 CORE2 明确指名某个 §
编号时才 grep 那一节。

⚠️ **`LEHNINGER_START.md` 第一行写着「START HERE，读这个然后开工」——那句话现在是过期的。**
它是 CORE 拆分之前的入口，内容比 CORE2 旧。仓库根目录同时躺着五个自称起点的文件
（本文件、LEHNINGER_START、HANDOFF、HANDOFF_LEHNINGER、PAIRING），**只有 `CORE_HANDOFF.md`
是当前入口**。另外 `HANDOFF_LEHNINGER.md` 自己顶上的 banner 写「145 KB ≈ 36k tokens」，
实测是 302 KB——**按本文件的数字，不要按它自己的**。

旧文件为什么不可信：它的 grep 索引漏掉了 §9b，而 §9b 是 Ruojin 对 32 个 Lehninger-only
section 裁决的唯一存放处，`lehninger_only_scope` 这个词在 4261 行里只出现过 1 次。结果是一个
session 得出「Lehninger 没有缺口」并 commit 了（`97a7eb5`），实际上最重要的 7 个一个没做。
**这就是把大文件拆成三个小文件的原因，不要再合回去。**

---

## session 会被打断，这是正常的

打断确实在发生（2026-08-08 写 `L-24-3-1` 时又断了一次）。**处置：回一句「继续」接着做。
每写完一批立刻 commit + push——这是唯一的防线，到目前为止没丢过东西。** 中途被打断后，
先跑一次 parse 检查再往下写，确认文件没停在半句上。

关于原因，要分清两件事：

1. **单次输出长度截断——这条是实测可复现的，也是真正会留下坏 JS 的那个。** 见下面第 4 条规矩，
   已经发生过至少四次。**它不是 loop，是句子写到一半戛然而止。**
2. **「打断源是 biosecurity classifier，415 条拒绝记录全部 `category: "bio"`」——这个说法
   仓库里找不到任何日志或证据支持，2026-08-08 找过。** 现象是真的，但这个具体归因目前
   **无法核实**，按项目规矩标注在此，不要当既定事实往下传，更不要再花一个 session 去研究它
   （已经烧掉过两个了）。

⚠️ **文件太大不是打断的原因。** 四个 CORE 文件加起来 30 KB / 486 行 ≈ 8k tokens，全读一遍
不到一个 session 的 4%；上面那套检查全跑完 15 秒。**这两条都实测过，不要再怀疑它们。**

---

## 每次开工前跑这三条（本 session 实测可用）

```bash
cd C:/Users/Admin/Downloads/bio-state-exam
python -c "import esprima,glob;[esprima.parseScript(open(f,encoding='utf-8').read()) for f in glob.glob('biochemie_pro/data/*.js')];print('parse OK')"
python lehninger_index/scripts/step5_check.py                    # 数据 + schema
python lehninger_index/scripts/verify_citations.py               # 每条 A 页码
python lehninger_index/scripts/audit_handoff.py                  # 这四个 CORE 文件本身
cd biochemie_struct && python tools/check_structures.py && python tools/check_links.py
python tools/check_pronunciations.py            # 真人录音：manifest↔磁盘、署名、只收英文
```

**收工前再跑一次 `audit_handoff.py`。** 2026-08-08 起它会检查这四个 CORE 文件：格式（截断的
段落、不闭合的 `**`、乱序的小节）、**里面的计数是否还等于实时数据**（做了几个 L- 节点、
mustKnow、topicKey），以及 `biochemie_pro/data/` 里每个文件**是否都在 `index.html` 里有
`<script>` 标签**——就是那个「节点在磁盘上存在但 app 里根本不加载、还不报错」的坑，现在它
能抓到了。改完 CORE 文件里的任何数字，跑一次它确认没写歪。

当前基线：`TOTAL: 3`，全部在 `HANDOFF_LEHNINGER.md` 里（一处不闭合的 `**`、一处截断段落、
一处小节乱序），**是旧文件的历史遗留，不是你弄的**。CORE 四个文件和 staleness 都是 clean。

实测（2026-08-10，trace 收官之后）：parse 全部 **40** 个数据文件通过；
`step5_check` exit 0，240 topics；`verify_citations` **636 ok / 0 elsewhere / 0 unchecked**
（第 625 条是 `L-3-3-1` trace 卡里的 `TABLE 3-5, A p.87`——**trace 卡里的页码也会被扫**，
详见 CORE2）；
`check_structures` 25 个结构 0 失败；`check_links` 7 条 0 dead。全套跑完 **15 秒以内**，
**没有任何卡住、超时或 loop 的迹象**。

⚠️ **`step5_check.py` 屏幕上只印一个 `done`。** 真正的结论（`RESULT: all checks pass` 和
每个 app 的节点计数）写在 `lehninger_index/_step5_report.txt` 里——**跑完要 tail 那个文件**，
只看到 `done` 不等于看到了结果。`verify_citations.py` 同理，明细在 `_citation_audit.txt`。

⚠️ **`jsbalance.py` 不在这个仓库里。** 旧 handoff 让你用它，但它在另一个仓库：
`C:\Users\Admin\Documents\trae_projects\recombinants_trae_independant\pesbexplain\tools\jsbalance.py`。
需要时按全路径调用。

---

## 四条硬规矩

1. **有机化学必须落到可观察的后果上。** 原话：我的有机化学几乎说是没有根基…一定不要讲完全
   化学，我听不懂的。不是「4n+2 的离域 π 体系」，而是「环是平的，所以在 280 nm 吸收，所以能
   拿来测蛋白浓度」。
2. **参考数据绝不凭记忆写。** 取来、连出处和日期一起存、用之前先断言。已经抓出过真错误。
3. **不许静默失败。** 每个脚本断言自己的输出，并打印它实际打开了哪个文件。
4. **一批 3 个。** 整章一次写完会撞输出上限，留下半截 JavaScript；这台机器上没有 JS runtime，
   坏掉的表现只是浏览器一片空白。**这条规矩不只适用于「一整章」——单个大节点自己就能撞上限，
   已经发生过两次**：`L-9-2-1` 在 `points` 数组中间断过一次，`L-24-2-1` 在 `oral.model_en`
   里断过一次，而且修复 `L-24-2-1` 时**续写文件本身也连续断了两次**——这不是运气问题，是
   环境对单次输出长度的硬限制，和内容是不是「一整章」无关。**写完任何大文件（或续写任何大段
   文字）后，先跑一次 esprima parse check 或读一遍结尾几行，确认句子完整、括号引号闭合，
   再继续做别的事**——不要假设 Write 工具没报错就等于内容完整。断在哪就从哪接着写，用 Python
   精确拼接（先断言首尾字符匹配再拼）比手动数缩进省事。

## 写入数据文件的方法

用 `parse_nodes` 读节点（**不要 regex 数据文件**），插入脚本**写成文件按路径运行**——这个环境
下 heredoc 会吃掉反斜杠，锚点匹配不上还会报「没找到」明明存在的行。插完断言每个 id 都命中且
没有插两次，再 parse 检查，再 commit。

`parse_nodes` 在 `lehninger_index/scripts/step5_check.py` 里，import 无副作用：

```python
import sys; sys.path.insert(0, r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index\scripts")
from step5_check import parse_nodes
```

---

## 三个 app 和线上地址

| 目录 | 角色 | storage 前缀 |
|---|---|---|
| `biochemie_basic/` | **冻结**，她实际在看的那个 | `bio.` |
| `biochemie_pro/` | 主力训练器，**240 节点** | `biopro.` |
| `biochemie_struct/` | 结构式 | `biostruct.` |

线上：`https://sumuxie.github.io/bio-state-exam/biochemie_pro/`

⚠️ **站点根目录自动跳转到 `biochemie_basic`**，而 basic 里对 struct 的引用是 **0 次**。从首页
进去没有任何路径能走到结构式——这是「结构式我没看见」的直接原因，详见 CORE3。
