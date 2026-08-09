# CORE 3 — 结构式

`biochemie_struct/`，独立的第三个 app。先读 `CORE_HANDOFF.md` 的规矩和打断处置。

---

## ⚠️ 入口问题：从首页那条路走不到结构式

⚠️ **先把话说准，旧版本这里写过「画了白费」，那是说过头了。** `biochemie_struct` 是**独立的
第三个 app，本来就该有自己的地址**，而且它**部署正常**、`biochemie_pro/index.html` 里**有入口**。
准确的说法只有一句：**从根目录那条路（自动跳去 basic）走不到它**。已经画的 25 个**没有白费**，
走直达地址完全能看。要不要从 basic 也开一条路，是 Ruojin 按自己习惯从哪个入口打开来决定的
**选择**，不是必须修的**缺陷**。

站点根目录 `index.html` **自动跳转到 `biochemie_basic`**（`<meta refresh>` 加
`location.replace()` 双保险），而 `biochemie_basic/index.html` 里对 `struct` 的引用是
**0 次**。🧪 入口只存在于 `biochemie_pro/index.html`（3 处）。

**后果：从 https://sumuxie.github.io/bio-state-exam/ 进去，没有任何路径能走到结构式。**
这就是「结构式我没看见」的直接原因。deploy 没问题（`pages.yml` 第 63 行确实 cp 了
`biochemie_struct`，还带断言），commit 也推上去了（`8d4124a` 在 `origin/main` 上）。

三个选项，**需要 Ruojin 拍板**：改根目录跳转指向 pro（旧 handoff 记着「changing that is still
Ruojin's call」）· 在根页面加一个结构式直达链接 · 给冻结的 basic 加一个 🧪 入口。
**第二个最轻，不动任何 app。**

直达地址：`https://sumuxie.github.io/bio-state-exam/biochemie_struct/`

---

## ✅ 这些已经做过

**190 / 205 个结构，全部通过检查器**（2026-08-09 实测：190 checked / 187 drawn /
4 Haworth-asserted / **0 failures**）。还差的 15 个见下面的 MANUAL 一节。

### 2026-08-09：改成从 PubChem 取，不再手画

**PubChem 从这台机器可达**（`curl` 实测），所以后来的 165 个结构**全部是取来的、不是画的**：
CID、分子式、isomeric SMILES、**以及 PubChem 自己的 2D 坐标**，每条带取回日期。这直接落实了
本项目那条「参考数据绝不凭记忆写：取来、连出处和日期一起存、用之前先断言」。

三个脚本，都在 `tools/`，改了重跑即可（生成器是幂等的）：

| 脚本 | 干什么 |
|---|---|
| `fetch_structures.py` | 按名字查 PubChem，**逐条断言之后**才写进 `_pubchem_cache.json` |
| `gen_structures.py` | 缓存 → 数据文件；写之前再按 `check_structures.py` 自己的公式预检一遍 |
| `build_structure_list.py` | 重新生成 `STRUCTURE_LIST.md` 的进度与证据表 |

**fetch 每条断言五件事**，其中第 4 条是真正拦得住错误的那条：
① SMILES 的重原子组成 = 分子式；② 取回的 2D 图的重原子组成 = 分子式；③ 图是单一连通图、
无自环无重边；④ **「我们要的那个名字」必须出现在 PubChem 给这个 CID 的同义词表里**——
没有这条，「查 cholate 拿回阴离子」「查糖拿回错的端基异构体」会**顺利通过前三条**，因为
一个错分子本身是完全自洽的；⑤ 净电荷为零。

**它当场抓出的真错误，记下来别再踩：**

- **查 `D-ribose` 拿回来的是环式**（10 原子 10 键 = 1 个环），而那一行要的是**开链**。
  组成检查全过——开链和环式原子完全一样。**加了「环数与行的声明是否一致」的断言之后才拦住。**
  开链糖必须查 `aldehydo-` / `keto-` 名。
- **查 `pyruvate` 拿回来的是阴离子**（CID 107735，带 −1），而本 app 的约定是中性未解离型。
  所有酸改查中性名（`pyruvic acid`），漏掉的会被电荷断言拦下。
- **三个含金属的（血红素 Fe、叶绿素 Mg、B₁₂ Co）「不连通」**——PubChem 的连接表把金属列为
  **独立片段**（配位不是共价）。这不是错，是**正确的化学**，所以作为**写明理由的例外**放行；
  但 `check_structures.py` 要求连通，所以这三个**只写数据、不写图**，页面上显示「结构式待绘制」，
  **没有伪造成键**。

⚠️ **代价要说清楚：新加的糖没有 Haworth 断言。** PubChem 画的是环，不是 Haworth 投影，
所以**这 26 个糖上「取代基朝哪边」是没有被机器核对的**。原来手画的那 5 个（带 Haworth 断言）
**故意保留、没有被覆盖**——它们仍是本项目对糖立体化学唯一的机器检查。

| 文件 | 数量 | 来源 |
|---|---|---|
| `data/amino_acids.js` | **20** | 手画，带 CID |
| `data/sugars.js` | **5** | 手画，**带 Haworth 断言**——不要覆盖 |
| `data/sugars_more.js` | **26** | PubChem |
| `data/nucleotides.js` | **25** | PubChem |
| `data/coenzymes.js` | **19** | PubChem |
| `data/lipids.js` | **32** | PubChem |
| `data/metabolites.js` | **48** | PubChem |
| `data/porphyrins.js` | **6** | PubChem（其中 3 个只有数据没有图，见上） |
| `data/amino_acid_derived.js` | **9** | PubChem |

⚠️ **糖这组只是开了个头**：5 个条目实际只有 3 个分子（葡萄糖的开链式 + α + β、核糖、脱氧
核糖）。**没有果糖、半乳糖、甘露糖，没有蔗糖乳糖麦芽糖，没有多糖。** 说「糖画完了」是错的。

**基础设施已完成，不是瓶颈：** `tools/check_structures.py` 断言重原子数三方一致（分子式 /
SMILES / 图）、键数（抓得出「环被画开」）、图连通无自环无重边、以及糖的 **Haworth 上下朝向**
与 Fischer 投影推导一致。它是先注入一个已知错误（把 phenylalanine 的环画开）确认会报错之后
才投用的。`tools/check_links.py` 断言跨 app 深链目标存在。

**检查器覆盖不到的，页面上已经明说了**：氢原子数、**立体化学**（L/D、R/S 靠人写）、与 PubChem
的身份比对。糖这组**故意没有 CID**，因为没真去查过——本项目规定参考数据绝不凭记忆写。

---

## ✅ 分母现在有了：`STRUCTURE_LIST.md`

**2026-08-09：清单已经写出来了，205 行，逐条列出 key + 中英文名。** 文件在
`biochemie_struct/STRUCTURE_LIST.md`，由 `tools/build_structure_list.py` 从
`tools/structure_candidates.tsv` 生成——**改了清单重跑脚本就能更新**，不用手改 Markdown。

**它不是拍脑袋列的：每一行都拿去两个 layer 的真实数据 grep 过**，表里带 `Czech` 和 `Leh`
两列命中数，所以每一行都有「留」或「删」的证据。**当前状态：已画 25 / 提案 205 = 12%。**

⚠️ **205 是提案，不是定稿。在 Ruojin 过一遍删掉不考的之前，不要把 12% 当成进度往外说。**

两条在写这份清单时实测出来、下次别再踩的坑：

- **中文名不能用来计数。** 中文没有词边界，`丙酮`（acetone）会整个匹配进 `丙酮酸`
  （pyruvate）——第一次跑出来 acetone 在 Czech 层是 428 次，全是丙酮酸。同类还有
  `核糖` ⊂ `脱氧核糖`/`核糖体`、`甘油` ⊂ `甘油醛`、`柠檬酸` ⊂ `异柠檬酸`。
  **现在计数只用英文和捷克语探针**，中文只作为名字留在表里。
- **「0 命中」不能直接当「该删」。** 已经画出来的 `b-ribf`（β-D-呋喃核糖）就是 0/0——
  因为教材只写 ribose，不写 ribofuranose。**环式/端基异构体/骨架这类「某分子的某一形式」
  的行，0 命中只说明教材不用这个词形。** 脚本现在会把这类行单独标出来，不标成「考虑删」。
  真正两层都 0 命中、可以直接删的**只有 3 行**（`murnac`、`d-gluconate`、`cgmp`）。

**下面这张旧的「粗估」表保留作对照——它是推出来的，不是数出来的，正式清单以
`STRUCTURE_LIST.md` 为准：**

| 组 | 粗估 | 内容 |
|---|---|---|
| 氨基酸 | 20 ✅ | 已完成 |
| 糖 | ~25 | 单糖（醛糖/酮糖、D/L、呋喃/吡喃、α/β）、双糖、多糖重复单元 |
| 核苷酸 | ~20 | 5 种碱基、核苷、单/二/三磷酸、cAMP |
| 辅酶 | ~15 | ATP、NAD⁺、FAD、CoA、TPP、PLP、生物素、THF |
| 脂类 | ~30 | 脂肪酸、TAG、磷脂、鞘脂、胆固醇、类固醇 |
| 代谢中间物 | ~60+ | 糖酵解 10、TCA 8、β-氧化、尿素循环、Calvin |
| 卟啉 / 其他 | ~10 | 血红素、叶绿素、胆色素 |

粗估合计 **180–220**，加上同一分子的多种形式（开链/环状、α/β、解离态）到两三百是合理的，
**与你记的「好几百」量级一致**。以上数字是按组内容推的，不是权威清单——定稿前不要当数。

---

## 建议的下一步

1. ✅ ~~定清单~~ —— 已做，`STRUCTURE_LIST.md`，205 行带证据。
2. ✅ ~~Ruojin 过清单~~ —— 2026-08-09 她答复「我看了清单了没关系都做」，**205 全要，一个不删**。
   **所以 205 就是定稿的分母**，不再是提案。
3. ✅ ~~画 165 个~~ —— 已做，从 PubChem 取，见上。**190 / 205。**
4. **还差 15 个 MANUAL**（下一节），PubChem 上没有单一化合物对应，只能手画。
5. **可见性**（本文开头）：要不要从 basic 加一条路进结构式，她拍板。**不阻塞任何事**。

## ⛔ 还差的 15 个：PubChem 上没有对应条目，只能手画

这些**不是漏掉的，是取不到的**——它们不是「一个化合物」，而是重复单元、分支点、
某个辅酶被还原掉的那个环、或者一个骨架。`fetch_structures.py` 会把它们单独列出来
而不是假装成功。

| key | 是什么 | 怎么画 |
|---|---|---|
| `amylose-unit` | 直链淀粉重复单元 α1→4 | 两个葡萄糖 + 一根 α1→4 糖苷键，两端画开放键 |
| `amylopectin-branch` | 支链淀粉分支点 α1→6 | 三个葡萄糖，主链 α1→4 加一条 α1→6 支链 |
| `glycogen-branch` | 糖原分支点 | 同上（糖原分支更密，结构画法相同） |
| `cellulose-unit` | 纤维素重复单元 β1→4 | 两个葡萄糖 + β1→4，其中一个翻转 180° |
| `chitin-unit` | 几丁质重复单元 | 同纤维素，但 C2 上是乙酰氨基 |
| `dinucleotide-link` | 3′→5′ 磷酸二酯键 | 两个核苷 + 一个连接它们的磷酸 |
| `nadh-ring` | NADH 的还原型烟酰胺环 | 从 `nad` 那张图截取烟酰胺环，C4 上加一个 H |
| `fadh2-ring` | FADH₂ 的还原型异咯嗪环 | 从 `fad` 截取异咯嗪环，N1/N5 上加 H |
| `pi` | 磷脂酰肌醇 | 用 `phosphatidate` 的骨架，磷酸上接肌醇 |
| `cardiolipin` | 心磷脂 | 两个磷脂酸经一个甘油相连 |
| `cerebroside` | 半乳糖脑苷脂 | `ceramide` + 一个半乳糖 |
| `ganglioside` | 神经节苷脂 GM1 | `ceramide` + 寡糖链（含 `neu5ac`） |
| `enoyl-coa` | 反式烯脂酰 CoA | β-氧化四步中的第二个中间物 |
| `hydroxyacyl-coa` | 3-羟脂酰 CoA | β-氧化的第三个 |
| `ketoacyl-coa` | 3-酮脂酰 CoA | β-氧化的第四个 |

⚠️ **画这些的时候仍然不许凭记忆写 SMILES 和分子式**：拿一个已 fetch 的相关分子当起点
（例如 `ceramide`、`phosphatidate`、`nad`），改完之后 `check_structures.py` 会重新断言
SMILES / 分子式 / 图三者一致——**它拦得住画错，但拦不住立体化学**。

⚠️ **β-氧化那三个中间物是「通式」，链长是任意的。** 画的时候要在 note 里写明选了哪个链长
（建议与 `acyl-coa` 一致，都用 C16 棕榈酰），否则读者会以为链长是这个中间物的一部分。

## 写结构数据的方法

每条目至少要有 `key`、中英文名、`smiles`、分子式；糖必须加 `haworth` 块声明每个取代基朝哪边，
检查器会断言画出来的 y 坐标与声明一致。**PubChem CID 查到了才写，查不到就留空**，检查器不强制。

写完必跑：

```bash
cd C:/Users/Admin/Downloads/bio-state-exam/biochemie_struct
python tools/check_structures.py && python tools/check_links.py
```

⚠️ **`.voice-panel { display: grid }` 那类作者样式会打败 `hidden` 属性**，让面板永远关不掉。
全局修法是 `[hidden] { display: none !important; }`，**保留那个 `!important`**。

⚠️ **新增 app 必须加进 `pages.yml` 第 63 行的 cp 列表**，否则线上每个 URL 都 404 而 workflow
报成功。`biochemie_struct` 第一次推送就踩过。现在有断言了，别删。
