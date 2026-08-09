#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Turn the verified PubChem cache into biochemie_struct data files.

Nothing is invented here. Every field written comes out of _pubchem_cache.json, which
fetch_structures.py only fills after the record has passed its assertions, so this script's
job is layout plus one more gate:

PRE-FLIGHT. Before an entry is written with a drawing, this recomputes exactly what
check_structures.py will compute -- heavy atoms from SMILES, from formula and from the
drawing; bond count against `heavy - 1 + rings_in_SMILES`; connectivity; no self or
duplicate bonds -- and if any of it disagrees the entry is written WITHOUT its `mol` block
and the reason is printed. That way a structure the checker would reject never reaches the
checker: the app shows the honest "结构式待绘制" slot instead of a wrong picture, which is
the same principle as the empty-slot rendering already in app.js.

Existing keys are never overwritten. The five hand-drawn sugars carry Haworth declarations
that PubChem's depiction cannot reproduce (PubChem draws a ring, not a Haworth projection),
and that assertion is the only machine check on sugar stereochemistry in this project. It
stays.

Usage:  python biochemie_struct/tools/gen_structures.py
"""
import io, os, re, sys, json, glob, collections

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(HERE), "data")
CACHE = os.path.join(HERE, "_pubchem_cache.json")
# import FIRST: check_structures.py rewraps sys.stdout at import time, which closes any
# wrapper installed before it and turns the next print() into "I/O operation on closed file".
sys.path.insert(0, HERE)
from check_structures import heavy_from_smiles, heavy_from_formula, rings_in_smiles
# and do NOT rewrap stdout here: that import already installed a UTF-8 wrapper, and wrapping
# the wrapper's buffer a second time closes the first one on GC ("I/O operation on closed
# file" on the very next print).

CLS_RULES = {
    "sugar": [
        (["maltose", "lactose", "sucrose", "cellobiose", "isomaltose"], "disaccharide"),
        (["glucosamine", "glcnac", "murnac", "neu5ac", "d-glucuronate", "d-gluconate",
          "sorbitol"], "aminosugar"),
        (["dihydroxyaceton", "d-ribulose", "d-xylulose", "d-fructose-open"], "ketose"),
        (["b-fruf", "b-ribf", "a-ribf", "a-dribf", "a-fruf"], "furanose"),
        (["a-glcp", "b-glcp", "b-galp", "a-manp", "a-galp", "b-manp",
          "a-xylp", "b-xylp", "a-arap", "b-arap", "b-frup"], "pyranose"),
    ],
    "nucl": [
        (["adenine", "guanine", "cytosine", "thymine", "uracil", "hypoxanthine",
          "xanthine", "uric-acid"], "base"),
        (["adenosine", "guanosine", "cytidine", "uridine", "deoxythymidine",
          "deoxyadenosine"], "nucleoside"),
    ],
    "coenz": [
        (["nad", "nadp", "fad", "fmn", "ubiquinone", "lipoate", "ascorbate",
          "glutathione"], "redox"),
        (["coa", "acetyl-coa", "tpp", "plp", "biotin", "thf", "folate", "sam",
          "cobalamin"], "transfer"),
    ],
    "lipid": [
        (["palmitate", "stearate", "oleate", "linoleate", "linolenate",
          "arachidonate"], "fattyacid"),
        (["glycerol", "triacylglycerol", "phosphatidate", "pc", "pe", "ps"], "glyceride"),
        (["sphingosine", "ceramide", "sphingomyelin"], "sphingo"),
        (["cholesterol", "cholesteryl-ester", "cholate", "testosterone", "estradiol",
          "progesterone", "cortisol", "aldosterone"], "sterol"),
        (["pge2", "txa2", "ltb4", "pgi2"], "eicosanoid"),
    ],
    "metab": [
        (["g6p", "g1p", "f6p", "f16bp", "f26bp", "dhap", "gap", "bpg13", "pg3", "pg2",
          "pep", "pyruvate", "lactate", "udp-glucose"], "glycolysis"),
        (["citrate", "cis-aconitate", "isocitrate", "akg", "succinyl-coa", "succinate",
          "fumarate", "malate", "oxaloacetate", "glyoxylate"], "tca"),
        (["pgluconate6", "ru5p", "r5p", "s7p", "e4p", "rubp"], "ppp"),
        (["acyl-coa", "malonyl-coa", "carnitine", "acetoacetate", "hydroxybutyrate",
          "acetone", "hmg-coa", "mevalonate", "glycerol3p"], "lipidmeta"),
        (["carbamoyl-p", "ornithine", "citrulline", "argininosuccinate", "urea"], "ureacycle"),
    ],
}
CLS_DEFAULT = {"sugar": "aldose", "nucl": "nucleotide", "coenz": "vitamin",
               "lipid": "isoprenoid", "metab": "energy", "porph": "porphyrin",
               "aader": "amine"}

GROUP_META = collections.OrderedDict([
 ("sugar", ("sugars_more.js", "sugar-more", "糖（其余）", "Sugars, the rest",
   "前五个（葡萄糖开链/α/β、核糖、脱氧核糖）在上面那一组里，它们是手画的、带 Haworth 断言。"
   "这一组是从 PubChem 取来的：每一条都带 CID 和取回日期，画的是 PubChem 自己的 2D 描绘。"
   "⚠️ 因此这一组没有 Haworth 断言——PubChem 画的是环，不是 Haworth 投影，"
   "环上取代基的朝向在这一组里是「未被机器核对」的。",
   [("7-1", "糖类的分类"), ("7-4-1-1", "储存多糖")])),
 ("nucl", ("nucleotides.js", "nucl", "核苷酸与碱基", "Nucleotides and bases",
   "碱基 → 核苷（碱基+糖）→ 核苷酸（再加磷酸）是三个层次，卡片按这个顺序排。"
   "嘌呤（腺嘌呤、鸟嘌呤）是双环，嘧啶（胞嘧啶、胸腺嘧啶、尿嘧啶）是单环——"
   "这个区别在图上一眼能看出来，比背名字有用。",
   [("4-1", "核酸的组成"), ("4-1-2", "核苷酸与核酸的一级结构")])),
 ("coenz", ("coenzymes.js", "coenz", "辅酶与维生素", "Coenzymes and vitamins",
   "分两类看：氧化还原辅酶（NAD⁺、FAD、泛醌、硫辛酸、抗坏血酸）传递电子，"
   "基团转移辅酶（CoA、TPP、PLP、生物素、THF、SAM）搬运某一个基团。"
   "多数辅酶的骨架就是一个维生素——这正是维生素缺乏会打断代谢的原因。",
   [("3-4", "辅酶与辅基"), ("10-2", "代谢的三个阶段")])),
 ("lipid", ("lipids.js", "lipid", "脂类", "Lipids",
   "脂肪酸 → 甘油酯 / 甘油磷脂 → 鞘脂 → 固醇 → 类二十烷酸 → 异戊二烯类，"
   "按「碳链」到「环系」排。磷脂那几张卡画的是具体的二棕榈酰分子（PubChem 上没有"
   "「一般的磷脂酰胆碱」这种条目），所以链长是示例，不是唯一形式。",
   [("8-1", "脂类的分类"), ("8-5", "生物膜")])),
 ("metab", ("metabolites.js", "metab", "代谢中间物", "Metabolic intermediates",
   "按通路分组：糖酵解/糖异生、柠檬酸循环、磷酸戊糖与 Calvin、脂代谢、尿素循环、"
   "高能磷酸与其他。同一个分子只画一次，出现在它最主要的那条通路下。"
   "⚠️ 全部画的是中性未解离型（丙酮酸而不是丙酮酸根），与氨基酸那一组的约定一致；"
   "生理 pH 下它们实际上是解离的。",
   [("7-8-1", "糖酵解——准备阶段"), ("6-2-2-1", "柠檬酸循环——总览"),
    ("5-2-2-1", "尿素循环")])),
 ("porph", ("porphyrins.js", "porph", "卟啉与色素", "Porphyrins and pigments",
   "卟吩是骨架，原卟啉 IX 是取代之后的配体，血红素是它络合了 Fe²⁺，叶绿素是络合 Mg²⁺ 的"
   "近亲；胆红素和胆绿素是血红素被拆开之后的线性产物。⚠️ 血红素、叶绿素和 B₁₂ 的图里"
   "金属与四个氮之间没有画键——PubChem 的连接表把金属列为独立片段（配位键不是共价键），"
   "这一点原样保留，没有伪造成键。",
   [("6-3-1", "血红蛋白与肌红蛋白"), ("9-1", "光合作用的光反应")])),
 ("aader", ("amino_acid_derived.js", "aader", "氨基酸衍生物", "Molecules derived from amino acids",
   "每一个都能追到一个氨基酸：酪氨酸 → 多巴胺 → 去甲肾上腺素 → 肾上腺素（也 → 甲状腺素），"
   "色氨酸 → 血清素 → 褪黑素，组氨酸 → 组胺，谷氨酸 → GABA。"
   "看结构时找那个还留着的氨基酸骨架，比单独背每一个快。",
   [("6-3-2", "氨基酸衍生的化合物"), ("6-3-3", "氨基酸衍生的化合物（续）")])),
])


def cls_of(group, key):
    for keys, c in CLS_RULES.get(group, []):
        if key in keys:
            return c
    return CLS_DEFAULT[group]


def existing_keys():
    """Keys owned by HAND-MAINTAINED files, which this generator must never overwrite.

    Files this generator owns are excluded on purpose. Scanning all of data/ made the
    script non-idempotent: the second run saw the 165 entries the first run had written,
    called them "already drawn by hand", and emitted nothing — so a fix to the generator
    could not be applied by re-running it, which is the one thing a generator has to
    support.
    """
    owned = {m[0] for m in GROUP_META.values()}
    keys = set()
    for f in glob.glob(os.path.join(DATA, "*.js")):
        if os.path.basename(f) in owned:
            continue
        keys |= set(re.findall(r'key:\s*"([^"]+)"', io.open(f, encoding="utf-8").read()))
    return keys


def preflight(e):
    """Everything check_structures.py will test, tested here first."""
    problems = []
    hs = heavy_from_smiles(e["smiles"])
    hf = heavy_from_formula(e["formula"])
    if hs != hf:
        problems.append("SMILES %s != formula %s" % (hs, hf))
    hm = {}
    for a in e["atoms"]:
        hm[a["el"]] = hm.get(a["el"], 0) + 1
    if hm != hf:
        problems.append("drawing %s != formula %s" % (hm, hf))
    heavy = sum(hf.values())
    try:
        expect = heavy - 1 + rings_in_smiles(e["smiles"])
    except AssertionError as ex:
        problems.append("ring count unreadable: %s" % ex)
        expect = None
    if expect is not None and len(e["bonds"]) != expect:
        problems.append("%d bonds drawn, checker expects %d" % (len(e["bonds"]), expect))
    if not e.get("connected", True):
        problems.append("drawing is not connected (checker requires one piece)")
    seen = set()
    for b in e["bonds"]:
        i, j = b[0], b[1]
        if i == j:
            problems.append("self-bond")
        if (min(i, j), max(i, j)) in seen:
            problems.append("duplicate bond")
        seen.add((min(i, j), max(i, j)))
    return problems


def js_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def mol_js(e):
    xs = [a["x"] for a in e["atoms"]]
    ys = [a["y"] for a in e["atoms"]]
    x0, y0 = min(xs), min(ys)
    atoms = []
    for a in e["atoms"]:
        s = '{ el: "%s", x: %.3f, y: %.3f' % (a["el"], a["x"] - x0, a["y"] - y0)
        if a.get("h"):
            s += ", h: %d" % a["h"]
        atoms.append(s + " }")
    bonds = []
    for b in e["bonds"]:
        bonds.append("[%d,%d]" % (b[0], b[1]) if b[2] == 1 else "[%d,%d,%d]" % (b[0], b[1], b[2]))
    return ("mol: { atoms: [" + ", ".join(atoms) + "],\n             bonds: ["
            + ", ".join(bonds) + "] }")


def main():
    cache = json.load(io.open(CACHE, encoding="utf-8"))
    have = existing_keys()
    print("cache %d compounds, %d keys already drawn in data/" % (len(cache), len(have)))

    by_group = collections.defaultdict(list)
    skipped_existing, no_draw = [], []
    for key in sorted(cache):
        e = cache[key]
        if key in have:
            skipped_existing.append(key)
            continue
        by_group[e["group"]].append(e)

    written = 0
    for group, (fname, gid, cn, en, note, sees) in GROUP_META.items():
        items = by_group.get(group, [])
        if not items:
            continue
        order = {c: i for i, c in enumerate(
            [c for _k, c in CLS_RULES.get(group, [])] + [CLS_DEFAULT[group]])}
        items.sort(key=lambda e: (order.get(cls_of(group, e["key"]), 99), e["key"]))

        out = []
        out.append("/* " + "=" * 71)
        out.append("   %s — %s." % (cn, en))
        out.append("")
        out.append("   GENERATED, DO NOT HAND-EDIT. Source of every field:")
        out.append("   tools/fetch_structures.py -> tools/_pubchem_cache.json ->")
        out.append("   tools/gen_structures.py. Re-run those to change anything here.")
        out.append("")
        out.append("   PROVENANCE. `cid`, `formula`, `smiles` and the 2D coordinates are")
        out.append("   PubChem's, fetched via PUG REST with the retrieval date recorded per")
        out.append("   entry. Nothing was written from memory. Before an entry was written")
        out.append("   the fetcher asserted that the heavy-atom composition agrees across")
        out.append("   formula, SMILES and drawing, that the drawing is one connected graph,")
        out.append("   and that the name asked for appears in PubChem's own synonym list for")
        out.append("   the CID returned — that last one is what stops a name lookup quietly")
        out.append("   handing back a different molecule.")
        out.append("")
        out.append("   STILL NOT VERIFIED, same as the rest of this app: hydrogen counts and")
        out.append("   STEREOCHEMISTRY. The @/@@ tags come from PubChem rather than from a")
        out.append("   person, which is better than before, but nothing here re-derives them.")
        out.append("   " + "=" * 71 + " */")
        out.append("window.STRUCT = window.STRUCT || {};")
        out.append("window.STRUCT.groups = (window.STRUCT.groups || []).concat([")
        out.append("{")
        out.append("  id: %s," % js_str(gid))
        out.append("  cnTitle: %s," % js_str(cn))
        out.append("  enTitle: %s," % js_str(en))
        out.append("  seeAlso: [")
        out.append(",\n".join("    { app: \"pro\", topic: %s, label: %s }"
                              % (js_str(t), js_str(l)) for t, l in sees))
        out.append("  ],")
        out.append("  note: { cn: %s }," % js_str(note))
        out.append("  items: [")
        rows = []
        for e in items:
            probs = preflight(e)
            note_bits = ["PubChem CID %d，%s 取回" % (e["cid"], e["fetched"])]
            for n in e.get("notes", []):
                note_bits.append(n)
            if probs:
                no_draw.append((e["key"], probs))
                note_bits.append("结构图未画出：" + "；".join(probs))
            body = ['{ key: %s, cn: %s, en: %s, cls: %s,'
                    % (js_str(e["key"]), js_str(e["cn"]), js_str(e["en"]),
                       js_str(cls_of(group, e["key"])))]
            if not probs:
                body.append("      " + mol_js(e) + ",")
            body.append("      smiles: %s, formula: %s, cid: %d,"
                        % (js_str(e["smiles"]), js_str(e["formula"]), e["cid"]))
            body.append("      note: { cn: %s } }" % js_str("；".join(note_bits) + "。"))
            rows.append("\n".join(body))
            written += 1
        out.append(",\n".join("    " + r for r in rows))
        out.append("  ]")
        out.append("}")
        out.append("]);")
        path = os.path.join(DATA, fname)
        io.open(path, "w", encoding="utf-8").write("\n".join(out) + "\n")
        print("  wrote %-24s %3d items" % (fname, len(items)))

    print("")
    print("wrote %d entries; skipped %d keys already drawn by hand (%s)"
          % (written, len(skipped_existing), ", ".join(skipped_existing)))
    if no_draw:
        print("")
        print("EMITTED WITHOUT A DRAWING (data only, honest empty slot in the app):")
        for key, probs in no_draw:
            print("  %-20s %s" % (key, "; ".join(probs)))


main()
