# -*- coding: utf-8 -*-
# Build biochemie_struct/STRUCTURE_LIST.md -- the denominator that did not exist.
#
# The point of this script is that the list is not a guess. Every proposed structure is
# grepped against the two real text layers before it goes on the page, so each row carries
# the evidence for keeping it or the evidence for deleting it. A row with 0 hits in both
# layers is a row nobody has taught, and Ruojin can delete it without reading further.
#
# Counts are SUBSTRING evidence, not proof of coverage. A leading non-alphanumeric boundary
# is required (so "amp" inside "example" does not count, and "citrate" inside "isocitrate"
# does not count), but no trailing boundary is required, so stems match their inflections
# ("glukos" -> "glukosa") and acronyms match their compounds ("CoA" -> "acetyl-CoA",
# "NAD" -> "NADH"). Where that inflates a count the row says so.
import io, os, re, sys, glob, collections
sys.stdout.reconfigure(encoding='utf-8')

ROOT = r"C:\Users\Admin\Downloads\bio-state-exam"
CANDIDATES = os.path.join(ROOT, "biochemie_struct", "tools", "structure_candidates.tsv")
OUT = os.path.join(ROOT, "biochemie_struct", "STRUCTURE_LIST.md")

CZ = sorted(glob.glob(os.path.join(ROOT, "biochemie_pro", "data", "ch*.js")))
LEH = sorted(glob.glob(os.path.join(ROOT, "biochemie_pro", "data", "leh_*.js")))
assert len(CZ) == 10, "expected 10 Czech data files, found %d" % len(CZ)
assert len(LEH) >= 28, "expected at least 28 Lehninger data files, found %d" % len(LEH)
CZ_TEXT = "\n".join(io.open(f, encoding="utf-8").read() for f in CZ)
LEH_TEXT = "\n".join(io.open(f, encoding="utf-8").read() for f in LEH)
print("Czech layer  %8d chars from %d files" % (len(CZ_TEXT), len(CZ)))
print("Lehninger    %8d chars from %d files" % (len(LEH_TEXT), len(LEH)))

# already drawn
drawn = set()
for f in glob.glob(os.path.join(ROOT, "biochemie_struct", "data", "*.js")):
    drawn |= set(re.findall(r"key\s*:\s*[\"']([^\"']+)", io.open(f, encoding="utf-8").read()))
print("already drawn: %d keys" % len(drawn))

AA = [("gly", "甘氨酸", "glycine"), ("ala", "丙氨酸", "alanine"), ("val", "缬氨酸", "valine"),
      ("leu", "亮氨酸", "leucine"), ("ile", "异亮氨酸", "isoleucine"), ("pro", "脯氨酸", "proline"),
      ("met", "甲硫氨酸", "methionine"), ("phe", "苯丙氨酸", "phenylalanine"),
      ("tyr", "酪氨酸", "tyrosine"), ("trp", "色氨酸", "tryptophan"), ("ser", "丝氨酸", "serine"),
      ("thr", "苏氨酸", "threonine"), ("cys", "半胱氨酸", "cysteine"), ("asn", "天冬酰胺", "asparagine"),
      ("gln", "谷氨酰胺", "glutamine"), ("asp", "天冬氨酸", "aspartate"), ("glu", "谷氨酸", "glutamate"),
      ("lys", "赖氨酸", "lysine"), ("arg", "精氨酸", "arginine"), ("his", "组氨酸", "histidine")]

rows = []
for k, cn, en in AA:
    rows.append(("aa", k, cn, en, en[:6]))
for line in io.open(CANDIDATES, encoding="utf-8"):
    line = line.rstrip("\n")
    if not line.strip() or line.lstrip().startswith("#"):
        continue
    parts = line.split("\t")
    assert len(parts) == 5, "bad row in structure_candidates.tsv: %r" % line[:80]
    rows.append(tuple(parts))

seen = set()
for g, k, cn, en, p in rows:
    assert k not in seen, "duplicate key " + k
    seen.add(k)

# CHINESE PROBES ARE DROPPED BEFORE COUNTING, and this is not a detail.
#
# The leading-boundary guard is `(?<![A-Za-z0-9])`, which does nothing for Chinese: Chinese
# has no spaces, so a two-character term matches happily inside a longer one. Measured on the
# first run: the probe 丙酮 (acetone) scored 428 in the Czech layer because 丙酮 is the first
# two characters of 丙酮酸 (PYRUVATE) -- a completely different molecule that already has its
# own row. The same trap sits in 核糖 ⊂ 脱氧核糖 and 核糖体, 甘油 ⊂ 甘油醛 and 甘油三酯,
# 柠檬酸 ⊂ 异柠檬酸, 腺苷 ⊂ 腺苷酸, 葡糖胺 ⊂ 乙酰葡糖胺.
#
# I cannot audit that class of collision reliably across 205 rows, so the honest move is to
# stop counting the channel I cannot check. Counting runs on the ENGLISH and CZECH probes
# only -- every node carries an `en` field, so nothing is lost in coverage -- and the Chinese
# names stay in the table as names. Anyone re-running this: do not "fix" it by putting the
# Chinese probes back in.
CJK = re.compile(r"[　-鿿＀-￯]")

def count(pattern, text):
    alts = [a for a in pattern.split("|") if not CJK.search(a)]
    if not alts:
        return 0
    rx = re.compile(r"(?<![A-Za-z0-9])(?:%s)" % "|".join(alts), re.I)
    return len(rx.findall(text))

# counted once up front so a row can quote its PARENT row's numbers
hits = {}

GROUPS = [("aa", "氨基酸 amino acids"), ("sugar", "糖 sugars"),
          ("nucl", "核苷酸与碱基 nucleotides and bases"), ("coenz", "辅酶与维生素 coenzymes and vitamins"),
          ("lipid", "脂类 lipids"), ("metab", "代谢中间物 metabolic intermediates"),
          ("porph", "卟啉与色素 porphyrins and pigments"),
          ("aader", "氨基酸衍生物 amino-acid-derived molecules")]

by_group = collections.OrderedDict((g, []) for g, _ in GROUPS)
for r in rows:
    by_group[r[0]].append(r)

for _g, _k, _cn, _en, _p in rows:
    hits[_k] = (count(_p, CZ_TEXT), count(_p, LEH_TEXT))
print("counted %d rows against both layers" % len(hits))

out = []
W = out.append
W("# 结构式清单 — 分母 (STRUCTURE LIST — the denominator)")
W("")
W("**这份清单是提案，不是定稿。** 它存在的唯一目的是让「画了多少个」这个问题有分母可除。")
W("在 Ruojin 过一遍、删掉不考的之前，**不要把下面的合计当成目标数**。")
W("")
W("**每一行都带证据。** `Czech` 和 `Leh` 两列是这个分子的名字在两个 layer 的真实数据里被")
W("grep 到的次数（**英文名 + 捷克语词干，大小写不敏感；中文名不参与计数**）。**两列都是 0 的行，是没有任何")
W("一本教材教过的东西——可以直接删，不用再想。** 命中数高的行是教材反复提到的，画出来收益最大。")
W("")
W("⚠️ **计数是「子串证据」，不是「覆盖证明」。** 匹配要求前面是非字母数字（所以 `example` 里的")
W("`amp` 不算、`isocitrate` 不算进 `citrate`），但**不要求后面是边界**，所以词干能匹配到词形")
W("（`glukos` → `glukosa`），缩写也会匹配到它的复合词（`CoA` → `acetyl-CoA`，`NAD` → `NADH`）。")
W("凡是因此被抬高的行，备注列里写了。**一个高命中数只说明「这个词常出现」，不说明「这个结构式该画」**")
W("——那是 Ruojin 的判断，不是脚本的。")
W("")
W("⚠️ **中文名故意不参与计数。** 中文没有词边界，`丙酮`（acetone）会整个匹配进 `丙酮酸`")
W("（pyruvate）——第一次跑出来 acetone 在 Czech 层是 428 次，全是丙酮酸。同类陷阱还有")
W("`核糖` ⊂ `脱氧核糖`/`核糖体`、`甘油` ⊂ `甘油醛`/`甘油三酯`、`柠檬酸` ⊂ `异柠檬酸`、")
W("`腺苷` ⊂ `腺苷酸`。这类碰撞我没法在 205 行上逐条审干净，所以**干脆不数这一路**：")
W("计数只用英文和捷克语探针（每个节点都有 `en` 字段，覆盖不受影响），中文只作为名字留在表里。")
W("**重跑这个脚本的人：不要把中文探针加回去。**")
W("")
W("⚠️ **这份清单只写名字，不写任何化学数据。** 没有分子式、没有 SMILES、没有 PubChem CID——")
W("按本项目的规矩，参考数据绝不凭记忆写，**要在画每一个结构的时候现查、连出处一起存**。")
W("")

NOTE = {
    "coa": "`CoA` 会匹配到所有 acyl-CoA，计数被抬高",
    "nad": "`NAD` 会匹配到 NADH/NADP，计数被抬高",
    "atp": "`ATP` 会匹配到 ATPase/ATP synthase，计数被抬高",
    "fad": "`FAD` 会匹配到 FADH₂，计数被抬高",
    "uric-acid": "捷克语 `močov` 同时匹配「尿酸」和「尿素 močovina」，两行会互相污染",
    "glycogen-branch": "命中的是「糖原」这个词，不等于教材画过分支点结构",
    "heme-b": "只用 `heme`/`血红素` 探针；捷克语 `hem` 会匹配 hemoglobin，故意没用",
    "acetyl-coa": "同时属于辅酶组与代谢中间物组，只画一次",
    "glycerol": "同时属于脂类组与代谢中间物组，只画一次",
    "d-ribose-open": "探针已排除 `ribosom-`（原本被核糖体抬高约 146 次）",
    "d-glyceraldehyd": "计数主要来自 glyceraldehyde 3-phosphate（另有 `gap` 一行），自由态甘油醛本身少见",
    "dihydroxyaceton": "计数主要来自 dihydroxyacetone phosphate（另有 `dhap` 一行）",
}

# 有些行是「某个母体分子的某一种形式」（环式/端基异构体/骨架/还原态）。这类行的探针搜的是那个
# 具体形式的名字，所以 0 命中只说明「教材不用这个词形」，不说明「这个分子没教过」。
# 现成的反例就在数据里：`b-ribf` 已经画出来了，却是 0/0——因为教材只写 ribose，不写
# ribofuranose。**不要把这类行按 0 命中删掉。**
PARENT = {
    "b-ribf": "d-ribose-open", "a-glcp": "glc-open", "b-glcp": "glc-open",
    "b-galp": "d-galactose-open", "a-manp": "d-mannose-open", "b-fruf": "d-fructose-open",
    "porphine": "protoporphyrin-ix", "cholesteryl-ester": "cholesterol",
    "nadh-ring": "nad", "fadh2-ring": "fad",
    # 2026-08-09: Ruojin asked why some sugars only had the open chain -- the answer was
    # that the candidate list simply listed fewer forms, not that anything had been ruled
    # out. Each sugar now carries open chain + alpha + beta. Every one of those anomer rows
    # scores 0/0 for the same reason b-ribf always did: textbooks write "galactose", never
    # "alpha-D-galactopyranose". They are forms of a parent, not gaps.
    "a-ribf": "d-ribose-open", "a-dribf": "b-drib",
    "a-xylp": "d-xylose", "b-xylp": "d-xylose",
    "a-arap": "l-arabinose", "b-arap": "l-arabinose",
    "a-galp": "d-galactose-open", "b-galp": "d-galactose-open",
    "b-manp": "d-mannose-open",
    "a-fruf": "d-fructose-open", "b-frup": "d-fructose-open",
    "ribulf": "d-ribulose",
}

tot_done = tot_all = tot_zero = 0
per_group = []
for gid, gname in GROUPS:
    items = by_group[gid]
    W("---")
    W("")
    W("## %s" % gname)
    W("")
    W("| 画了 | key | 中文 | English | Czech | Leh | 备注 |")
    W("|---|---|---|---|---|---|---|")
    ndone = nzero = nzero_form = 0
    for _, k, cn, en, probe in items:
        c, l = hits[k]
        done = k in drawn
        ndone += 1 if done else 0
        note = NOTE.get(k, "")
        if c == 0 and l == 0:
            par = PARENT.get(k)
            if par:
                pc, pl = hits[par]
                note = ("**0 命中是词形问题，不是缺口** — 母体 `%s` 有 %d/%d 次命中；"
                        "要不要画这一形式，取决于要不要单独教这个形式，**不要按 0 命中删**。 %s"
                        % (par, pc, pl, note)).strip()
                nzero_form += 1
            else:
                note = ("**两层都 0 命中——考虑删** " + note).strip()
                nzero += 1
        W("| %s | `%s` | %s | %s | %d | %d | %s |" % ("✅" if done else "", k, cn, en, c, l, note))
    W("")
    W("**%s：%d 个，已画 %d，未画 %d；其中两层都 0 命中的有 %d 个。**"
      % (gname, len(items), ndone, len(items) - ndone, nzero))
    W("")
    per_group.append((gname, len(items), ndone, nzero))
    tot_all += len(items); tot_done += ndone; tot_zero += nzero

W("---")
W("")
W("## 合计（提案，未经 Ruojin 删减）")
W("")
W("| 组 | 提案数 | 已画 | 未画 | 两层 0 命中 |")
W("|---|---|---|---|---|")
for gname, n, d, z in per_group:
    W("| %s | %d | %d | %d | %d |" % (gname, n, d, n - d, z))
W("| **合计** | **%d** | **%d** | **%d** | **%d** |" % (tot_all, tot_done, tot_all - tot_done, tot_zero))
W("")
W("**所以现在的进度是 %d / %d = %.0f%%**——但请注意这个分母是**提案**。" % (tot_done, tot_all, 100.0 * tot_done / tot_all))
W("把 %d 个两层都 0 命中的删掉，分母就变成 %d，进度变成 %.0f%%。" % (tot_zero, tot_all - tot_zero, 100.0 * tot_done / (tot_all - tot_zero)))
W("**在你过一遍之前，这两个数都不要往外说。**")
W("")
W("⚠️ **旧 CORE3 里那张「粗估 180–220」的表是推出来的，不是数出来的。** 本清单是逐条列出来")
W("并逐条 grep 过的，合计 %d——**与那个量级一致，但这一份可以核对，那一份不能**。" % tot_all)
W("")
W("## 下一步怎么用这份清单")
W("")
W("1. **Ruojin 过一遍，删掉不考的。** 优先看「两层都 0 命中」那 %d 行——它们是两本教材都" % tot_zero)
W("   没提过的东西，删掉没有任何损失。")
W("2. **定稿之后把分母写进 `CORE3_STRUCTURES.md`**，从此「画了多少」这个问题有答案。")
W("3. **再开始画**，顺序建议按命中数从高到低，而不是按组的顺序——命中数高 = 教材反复提到 =")
W("   考到的可能性大。")
W("4. 每画一个：`key`、中英文名、`smiles`、分子式**现查现存**；糖必须加 `haworth` 块；")
W("   画完跑 `python tools/check_structures.py && python tools/check_links.py`。")
W("")
W("⚠️ **注意这个「删」的筛子几乎没干活：205 行里只有 2 行是两层都 0 命中。** 也就是说，我提的")
W("这些东西基本上教材都提到过——**所以真正的删减只能靠你的判断，不能靠这两列数字**。数字能回答")
W("的是「教材提没提」，不能回答「你的考试考不考」。")
W("")
W("---")
W("")
W("## 还没画、命中数最高的 40 个（建议的开画顺序）")
W("")
W("按 Czech 层命中数排序——Czech 教材是考试的主教材，所以它提得多的东西优先。")
W("Leh 列只作参考。**带 ⚠️ 的行说明计数被词形抬高过，别只看数字。**")
W("")
W("| # | key | 中文 | English | Czech | Leh | 组 |")
W("|---|---|---|---|---|---|---|")
GNAME = dict(GROUPS)
todo = [(hits[k][0], hits[k][1], g, k, cn, en) for g, k, cn, en, _p in rows if k not in drawn]
todo.sort(key=lambda r: (-r[0], -r[1]))
for i, (c, l, g, k, cn, en) in enumerate(todo[:40], 1):
    flag = " ⚠️" if k in NOTE else ""
    W("| %d | `%s`%s | %s | %s | %d | %d | %s |" % (i, k, flag, cn, en, c, l, GNAME[g]))
W("")

src = "\n".join(out)
io.open(OUT, "w", encoding="utf-8").write(src)
print("\nwrote %s (%d bytes, %d rows, %d groups)" % (OUT, len(src.encode("utf-8")), tot_all, len(GROUPS)))
print("done %d / proposed %d ; zero-hit rows %d" % (tot_done, tot_all, tot_zero))
assert tot_done == len(drawn), "drawn keys %d but only %d matched a row" % (len(drawn), tot_done)
