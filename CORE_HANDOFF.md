# CORE HANDOFF — 路由页

Ruojin 定的三条主线。**每条有自己的文件，只读你要做的那一条。**

| 你要做什么 | 打开 | 现状 |
|---|---|---|
| app 功能 | `CORE1_APP.md` | 7 个里做了 4 个 |
| Lehninger 额外内容 | `CORE2_LEHNINGER.md` | **117 个 section 做了 21 个**（§9.1 刚补上，前 20 个做偏了） |
| 结构式 | `CORE3_STRUCTURES.md` | 25 个，目标量级两三百 |

优先级：**CORE2 > CORE3 > CORE1**。CORE2 里有 Ruojin 亲自圈定却一个都没做的 7 个 section；
CORE1 剩下的三个都是舒适性功能，不影响考试。

---

## 不要读旧的两个 handoff

`HANDOFF_LEHNINGER.md` 302 KB / 4261 行 ≈ 69k tokens，`HANDOFF.md` 68 KB。整读一次烧掉一个
session。**这三个 CORE 文件已经把还有效的结论都抄过来了**，旧文件只在 CORE2 明确指名某个 §
编号时才 grep 那一节。

旧文件为什么不可信：它的 grep 索引漏掉了 §9b，而 §9b 是 Ruojin 对 32 个 Lehninger-only
section 裁决的唯一存放处，`lehninger_only_scope` 这个词在 4261 行里只出现过 1 次。结果是一个
session 得出「Lehninger 没有缺口」并 commit 了（`97a7eb5`），实际上最重要的 7 个一个没做。
**这就是把大文件拆成三个小文件的原因，不要再合回去。**

---

## session 会被打断，这是正常的

打断源是 biosecurity classifier，415 条拒绝记录全部 `category: "bio"`，无一例外。触发的是学科
本身，换措辞没用，已经有两个 session 把整个窗口烧在研究这件事上。

**处置：回一句「继续」接着做。每写完一批立刻 commit + push——这是唯一的防线，到目前为止没丢过
东西。** 中途被打断后，先跑一次 parse 检查再往下写。

---

## 每次开工前跑这三条（本 session 实测可用）

```bash
cd C:/Users/Admin/Downloads/bio-state-exam
python -c "import esprima,glob;[esprima.parseScript(open(f,encoding='utf-8').read()) for f in glob.glob('biochemie_pro/data/*.js')];print('parse OK')"
python lehninger_index/scripts/step5_check.py                    # 数据 + schema
cd biochemie_struct && python tools/check_structures.py          # 结构式
```

实测：parse 全部 30 个数据文件 2.2 秒通过；`check_structures.py` 25 个结构 0 失败，exit 0。
没有卡住或超时的迹象。

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
   坏掉的表现只是浏览器一片空白。

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
| `biochemie_pro/` | 主力训练器，230 节点 | `biopro.` |
| `biochemie_struct/` | 结构式 | `biostruct.` |

线上：`https://sumuxie.github.io/bio-state-exam/biochemie_pro/`

⚠️ **站点根目录自动跳转到 `biochemie_basic`**，而 basic 里对 struct 的引用是 **0 次**。从首页
进去没有任何路径能走到结构式——这是「结构式我没看见」的直接原因，详见 CORE3。
