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

**25 个结构，全部通过检查器（本 session 实测：25 checked / 25 drawn / 4 Haworth-asserted /
0 failures / exit 0）。**

| 文件 | 数量 | 内容 |
|---|---|---|
| `data/amino_acids.js` | **20** | 20 种氨基酸**全齐**，带 SMILES 和 PubChem CID |
| `data/sugars.js` | **5** | `glc-open` `a-glcp` `b-glcp` `b-ribf` `b-drib` |

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
2. **Ruojin 过一遍清单删掉不考的**，分母定稿。这一步只需要她读，不需要写代码。
3. **可见性**（本文开头）：要不要从 basic 加一条路进结构式，她拍板。**不拍板也不阻塞画图**。
4. **按 `STRUCTURE_LIST.md` 末尾那张「命中数最高的 40 个」的顺序开画**，而不是按组的顺序。
   排在最前的是 ATP、CoA、NAD⁺、NADP⁺、acetyl-CoA、pyruvate、NADH、citrate、ADP、AMP——
   **辅酶和核苷酸排在糖前面，这跟旧 handoff 建议的顺序不一样，依据是命中数不是直觉。**
5. 补完糖组的边际成本最低（Haworth 断言已经写好了），可以穿插着做。

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
