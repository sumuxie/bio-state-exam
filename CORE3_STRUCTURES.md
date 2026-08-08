# CORE 3 — 结构式

`biochemie_struct/`，独立的第三个 app。先读 `CORE_HANDOFF.md` 的规矩和打断处置。

---

## ⚠️ 先修这个：画了她也看不见

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

## ⛔ 没做的：分母根本不存在

**核苷酸 0 个**（你这次明确点名了）· 辅酶 0 个 · 脂类 0 个 · 代谢中间物 0 个。

**而且项目里没有任何一份写清楚「总共要画多少个」的清单。** 旧 handoff 只写了组的顺序，没写
每组多少个。没有分母，进度永远说不清楚——「好几百」对不对根本无从核对。

**所以第一步不是接着画，是先定清单。** 建议按下面的骨架，每组先列出 key 和中英文名，不画图，
一次评审定稿，再开始画：

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

1. **先修可见性**（本文开头），否则后面画的全看不见。
2. **定清单**：把上表填成真正的 key 列表，Ruojin 过一遍删掉不考的。这一步定下分母。
3. **补完糖组**：果糖、半乳糖、甘露糖、蔗糖、乳糖、麦芽糖。这组的检查器已经有 Haworth 断言，
   边际成本最低。
4. **核苷酸组**：她点名要，且 5 种碱基是硬记内容，画出来收益高。
5. 之后按辅酶 → 脂类 → 代谢中间物。

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
