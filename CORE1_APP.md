# CORE 1 — app 功能

`biochemie_pro/app.js`（78,977 bytes）。先读 `CORE_HANDOFF.md` 的规矩和打断处置。

**三条主线里优先级最低。** 剩下三个功能都是舒适性的，不改变她能不能考过——2026-08-08 的优先级
裁决原话是「停掉功能开发，把一切投进能回答考题的内容」。**除非 Ruojin 主动要，否则先做 CORE2。**

功能清单来自另一个仓库的移植计划 `HANDOFF_from_PESB_biochemie.md`（A1–A7）。下面的状态是本
session 直接探 `app.js` 测出来的，不是抄的。

---

## ✅ 这些已经做过（7 个里的 5 个）

| # | 功能 | 探针证据 |
|---|---|---|
| **A1** | 🔊 朗读，中英分开 | `speak(` 4 处、`voice` 46 处。分语言选音、按质量排序、★ 标神经语音、试听按钮、语速滑块，全部持久化 |
| **A2** | ⭐ 收藏 + 4 色荧光笔 | `marks` 16 处、`highlight` 3 处 |
| **A6** | 题源循环 `core → +bank → +terms` | `bank` 21 处。bank 为空时控件**明说自己是空的**，不是静默失效 |
| **A7** | 术语抽卡（运行时从 glossary 生成） | `termQuestions` 3 处。**1,226 题**，题库 704 → 1,930。不写进数据文件，所以不会过期 |
| **A3** | 只看必背 filter + 分节隐藏计数 + 侧栏 ⭐ 计数 | 2026-08-11。顶栏 ⭐ 开关、`refreshOnlyMarked()`、`markCountOf()`；`body.only-marked` + CSS |

**顺带已完成的：** URL 深链 `#/t/<topic-id>`（`#/t/` 3 处）· coverageNote 折叠（中文可见、
长英文折起来）· `mustKnow` 渲染（`mustKnowHtml`）· `trace` 渲染（`traceHtml` + `TRACE_ROWS`，
每条独立 `<details>` 折叠）· 侧栏「分书 / 按主题」切换 · 「同主题」条 · `lehNotes` 块。

**A7 是这批里性价比最高的一个，已经落地。** 它把 207 个节点早就写好的 1,010 张术语卡变成了
一个此前不存在的抽卡练习。

⚠️ **A3 没有在浏览器里验证过。** 这台机器没有 JS runtime。已做的检查是：esprima 解析
`app.js` 通过、`step5_check` 全过、`index.html` / `app.js` / `style.css` 三个文件里的标识符
与类名逐个对齐。**这能排除语法错和拼错的选择器，不能证明它显示正确。**
（写的时候正好被这条拦下过一个：初稿把刷新范围写成 `#topic .block`，而根本没有 `#topic`，
容器是 `#study-body`——它会匹配到零个元素、静默什么都不做，而开关看起来仍然正常。）
**下次上线上站点时看一眼**：打开 ⭐ 开关，确认要点/术语里没打星的行消失了、每节标题右边出现
隐藏计数、侧栏出现 ⭐ 数字，且标题 / 必背 / 追根溯源 / 概要 / Quiz 按钮都还在。

---

## ⛔ 没做的 2 个

| # | 功能 | 探针证据 | 难度 |
|---|---|---|---|
| **A4** | 📝 笔记（分节 + 分行）、粘贴/上传图片、导出导入 | **`indexedDB` 0 处、`noteKey` 0 处** | 中，唯一有真机器的 |
| **A5** | Terms 分页做成抽卡，与 Cards 共享 `cardKey` | `cardKey` 8 处（现供 Cards 用）、`leitner` 2 处 | 低–中 |

**A4 是唯一能损坏已有用户数据的一个。** Leitner 状态存在 `localStorage` 的 `biopro.` 前缀下，
而图片**绝不能**放 localStorage。要做就整个做完（DB v2 按 `noteKey` 建键，加 `state.anchors`
漂移保护），半个移植会丢图片。**放最后。**

⚠️ **做 A5 时：Terms 抽卡和 Cards 分页必须走同一个 `cardKey` 打分**，不要各记各的盒子。复制一
份盒子是更好写的实现，也是错的——同一个术语被打两次分，两个数都失去意义。

⚠️ **`cardKey` 两个 app 不一样。** biochem 用 `topic.id + '::' + (term.cz || term.en)`，PESB 用
`term.en`。**绝大多数 Czech 术语都有 `cz`**，照抄 PESB 会让同一张卡产生两个不同的 key，Leitner
盒子被劈成两半。**永远沿用 biochem 现有的 `cardKey`。**

---

## 移植时会踩的坑（都已付过学费）

**不要把 `pesbexplain/app.js` 覆盖到 `biochemie_pro/app.js` 上。** 不作为起点，也不作为「先copy
再改」。两个文件早已不是同一棵树：biochem 这边有 PESB 完全不知道的架构——`book` 分书路由、
`pages` 页码引用、`topicKey` 跨书连接、`entity` 整合卡、`kind`、`cnNote`、`lehNotes`。整体覆盖
会静默删掉全部。**一个功能一个功能地移植。**

1. **`chapter` 是分书局部的。** PESB 按 chapter 分干扰项池子，Czech ch7 是糖而 Lehninger ch7
   不是。照抄会把两个学科混进一个池子，题目变简单而屏幕上看不出来。**已经改成按 book+chapter
   分桶，entity 卡自己一桶——不要改回去。**
2. **entity 卡没有 `chapter` 也没有 `section`。** 假设它们存在的渲染代码会印出 `undefined`。
   **先判 `kind`。**
3. **引号风格不同**：PESB 单引号，biochem 双引号。PESB 那边所有工具的 regex（`id: '`、
   `term: '`）在这里**静默匹配到零然后报一切正常**。移植任何工具都要把引号参数化。
4. **`points` 结构不同**：PESB 是 `{term, en, cn}`，biochem 是 `{cz, en, cn}`。`cz` 是**锚点
   术语**不是标签，角色不一样。
5. **考试是英文的**，所以 `cz` 只做短锚点词，永远不成句、**不朗读**——A1 不给 `cz` 加按钮。
6. **追加节点的写法不同**：PESB 是 `.concat([ … ]);`，biochem 是 `.topics.push( … )`。PESB 那
   套「替换结尾 `}\n\n]);` 锚点」的批量技巧在这里不适用。
7. **这是公开仓库且有线上部署。** 加进去的东西全世界可读，一个坏 commit 会推到她用手机看的
   站点上。**不要加原始 PDF 或扫描件。**

---

## 不要移植的东西

`slideFigures` + `extract_figures.py` + `attach_figures.py`（纯幻灯片专用，biochem 没有课件，
只有页扫描，且图片方案是另一套已定的）· `skipIt` 的 RECAP 证据规则（**biochem 没有讲师也没有
幻灯片**，源头是教科书；在定出替代信号之前，`skipIt` 一个字都不许写）· `coverage_ch1.py`、
`slide_titles.py` · PESB 的 `CHAPTER_TITLES` / 章节模型（分书局部章节会让它出错）· 覆盖率
检查器（biochem 的 validator **故意**改成不再强制无洞，Lehninger 节点的 gap 是有意留的）。

## 校验器在哪

biochem 是 `tools/validate-data.js`（**JavaScript**，跑在 CI 里，`deploy` 是 `needs: validate`）。
PESB 是 Python 脚本跑在本地。**移植过来的 Python 检查器不会进 CI，什么都拦不住。** 要么扩展
那个 JS validator，要么把 Python 加成 CI 的第二步——**动手前先定，否则检查会悄悄地不运行**。

这台机器上没有 node，所以 `lehninger_index/scripts/step5_check.py` 做两件替代事：用 esprima 确认
validator 和 `app.js` 能解析，以及拿真实数据重跑一遍它的逻辑。

⚠️ **esprima 解析不了 `biochemie_pro/app.js`，一直如此**——第 466 行有个 `/\p{Script=Latin}/u`，
是合法的现代 JavaScript 但 esprima 比它早。`step5_check.py` 里用 `APP_STUBS` 把这两处替换掉再
解析，其余照查。**不要把这个失败当成你弄坏的。** 需要平衡括号时用另一个仓库里的
`pesbexplain/tools/jsbalance.py`，先拿一份已知good的副本校准。
