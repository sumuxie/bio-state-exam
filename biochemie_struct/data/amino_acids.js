/* =========================================================================
   Amino acids — the 20 proteinogenic side chains.

   PROVENANCE. Every entry carries `smiles`, `formula` and `cid` (PubChem
   Compound ID), and every one was written against the neutral, un-ionised
   L-form. `formula` is NOT decoration: tools/check_structures.py recomputes
   the heavy-atom counts from the SMILES and asserts they match, so a
   mistyped SMILES fails the build instead of rendering a wrong molecule.

   WHAT THAT CHECK DOES AND DOES NOT COVER — read before trusting it.
     covered      C, N, O, S counts parsed straight out of the SMILES string
     NOT covered  hydrogen count (implicit H needs valence rules this checker
                  does not implement), and STEREOCHEMISTRY. The @/@@ tags say
                  L rather than D, and nothing here verifies that.
   So a structure can pass the checker and still have the wrong handedness.
   Treated as a known limitation and stated on the page itself rather than
   left for the reader to discover.

   `cid` is the audit trail: it is what you look the molecule up under if any
   of these is ever doubted. It is recorded, not fetched — this machine has no
   chemistry library installed (rdkit, indigo and openbabel were all checked
   for and are absent), so nothing here is machine-verified against PubChem.
   ========================================================================= */
window.STRUCT = window.STRUCT || {};
window.STRUCT.groups = (window.STRUCT.groups || []).concat([
{
  id: "aa",
  cnTitle: "氨基酸",
  enTitle: "Amino acids",
  /* Links back into biochemie_pro. Deep links use the #/t/<id> route added
     there; tools/check_links.py asserts each target still exists. */
  seeAlso: [
    { app: "pro", topic: "2-1-1", label: "氨基酸的结构与存在" },
    { app: "pro", topic: "2-1-2", label: "氨基酸的物理化学性质（pI）" },
    { app: "pro", topic: "2-1-4", label: "肽键的形成" }
  ],
  note: {
    cn: "按侧链性质分成五组——这个分组本身就是考点，比逐个背结构有用。所有结构画的是中性、未解离的 L 型；生理 pH 下它们实际上以两性离子（zwitterion）形式存在，见 2-1-2。",
    en: "Grouped by side-chain character, because the grouping is what gets examined. All drawn as the neutral, un-ionised L-form; at physiological pH they exist as zwitterions."
  },
  items: [
    /* ---- nonpolar, aliphatic ---- */
    { key: "gly", cn: "甘氨酸", en: "Glycine",       tlc: "Gly", olc: "G", cls: "nonpolar",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4]] },
      smiles: "NCC(=O)O",                 formula: "C2H5NO2",    cid: 750,
      note: { cn: "唯一没有不对称碳的氨基酸——侧链就是一个 H，所以它不旋光，也没有 L/D 之分。侧链最小，是转角处常见的那一个。" } },
    { key: "ala", cn: "丙氨酸", en: "Alanine",       tlc: "Ala", olc: "A", cls: "nonpolar",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }, { el: "C", x: 0.87, y: 1.5 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4],[1,5]] },
      smiles: "C[C@@H](N)C(=O)O",         formula: "C3H7NO2",    cid: 5950 },
    { key: "val", cn: "缬氨酸", en: "Valine",        tlc: "Val", olc: "V", cls: "nonpolar",
      smiles: "CC(C)[C@@H](N)C(=O)O",     formula: "C5H11NO2",   cid: 6287, essential: true },
    { key: "leu", cn: "亮氨酸", en: "Leucine",       tlc: "Leu", olc: "L", cls: "nonpolar",
      smiles: "CC(C)C[C@@H](N)C(=O)O",    formula: "C6H13NO2",   cid: 6106, essential: true },
    { key: "ile", cn: "异亮氨酸", en: "Isoleucine",  tlc: "Ile", olc: "I", cls: "nonpolar",
      smiles: "CC[C@H](C)[C@@H](N)C(=O)O", formula: "C6H13NO2",  cid: 6306, essential: true,
      note: { cn: "侧链上还有第二个不对称碳，所以它有四种立体异构体，而蛋白质里只用其中一种。" } },
    { key: "pro", cn: "脯氨酸", en: "Proline",       tlc: "Pro", olc: "P", cls: "nonpolar",
      smiles: "OC(=O)[C@@H]1CCCN1",       formula: "C5H9NO2",    cid: 145742,
      note: { cn: "侧链绕回来接在自己的氮上，形成一个五元环——所以它的氮是仲胺，肽键里没有可供氢键的 N-H。这就是脯氨酸会打断 α 螺旋的原因，也是它常出现在转角的原因。" } },
    { key: "met", cn: "甲硫氨酸", en: "Methionine",  tlc: "Met", olc: "M", cls: "nonpolar",
      smiles: "CSCC[C@@H](N)C(=O)O",      formula: "C5H11NO2S",  cid: 6137, essential: true,
      note: { cn: "含硫，但和半胱氨酸不同——它的硫在链中间（硫醚），不能形成二硫键。翻译起始密码子 AUG 编码的就是它。" } },
    /* ---- aromatic ---- */
    { key: "phe", cn: "苯丙氨酸", en: "Phenylalanine", tlc: "Phe", olc: "F", cls: "aromatic",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }, { el: "C", x: 0.87, y: 1.5 }, { el: "C", x: 0.87, y: 2.5 }, { el: "C", x: 1.73, y: 3.0 }, { el: "C", x: 1.73, y: 4.0 }, { el: "C", x: 0.87, y: 4.5 }, { el: "C", x: 0.00, y: 4.0 }, { el: "C", x: 0.00, y: 3.0 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4],[1,5],[5,6],[6,7,2],[7,8],[8,9,2],[9,10],[10,11,2],[11,6] ] },
      smiles: "N[C@@H](Cc1ccccc1)C(=O)O", formula: "C9H11NO2",   cid: 6140, essential: true },
    { key: "tyr", cn: "酪氨酸", en: "Tyrosine",      tlc: "Tyr", olc: "Y", cls: "aromatic",
      smiles: "N[C@@H](Cc1ccc(O)cc1)C(=O)O", formula: "C9H11NO3", cid: 6057,
      note: { cn: "苯环上多一个 -OH，于是它可以被磷酸化——酪氨酸激酶就是干这个的，信号传导里到处是它。" } },
    { key: "trp", cn: "色氨酸", en: "Tryptophan",    tlc: "Trp", olc: "W", cls: "aromatic",
      smiles: "N[C@@H](Cc1c[nH]c2ccccc12)C(=O)O", formula: "C11H12N2O2", cid: 6305, essential: true,
      note: { cn: "最大的一个侧链，吲哚环。蛋白质在 280 nm 的吸收主要来自它和酪氨酸——这就是你能用紫外测蛋白浓度的原因。" } },
    /* ---- polar, uncharged ---- */
    { key: "ser", cn: "丝氨酸", en: "Serine",        tlc: "Ser", olc: "S", cls: "polar",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }, { el: "C", x: 0.87, y: 1.5 }, { el: "O", x: 1.73, y: 2.0, h: 1 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4],[1,5],[5,6]] },
      smiles: "N[C@@H](CO)C(=O)O",        formula: "C3H7NO3",    cid: 5951,
      note: { cn: "侧链羟基能被磷酸化，也是丝氨酸蛋白酶活性中心里那个亲核基团。" } },
    { key: "thr", cn: "苏氨酸", en: "Threonine",     tlc: "Thr", olc: "T", cls: "polar",
      smiles: "C[C@@H](O)[C@@H](N)C(=O)O", formula: "C4H9NO3",   cid: 6288, essential: true },
    { key: "cys", cn: "半胱氨酸", en: "Cysteine",    tlc: "Cys", olc: "C", cls: "polar",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }, { el: "C", x: 0.87, y: 1.5 }, { el: "S", x: 1.73, y: 2.0, h: 1 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4],[1,5],[5,6]] },
      smiles: "N[C@@H](CS)C(=O)O",        formula: "C3H7NO2S",   cid: 5862,
      note: { cn: "两个半胱氨酸的 -SH 氧化后连成二硫键——蛋白质里唯一的共价交联，也是这本教材把二硫键位置算进一级结构的原因（见 2-2-3）。" } },
    { key: "asn", cn: "天冬酰胺", en: "Asparagine",  tlc: "Asn", olc: "N", cls: "polar",
      smiles: "NC(=O)C[C@@H](N)C(=O)O",   formula: "C4H8N2O3",   cid: 6267,
      note: { cn: "N-连接糖基化就接在它的酰胺氮上（见 2-2-5）。" } },
    { key: "gln", cn: "谷氨酰胺", en: "Glutamine",   tlc: "Gln", olc: "Q", cls: "polar",
      smiles: "NC(=O)CC[C@@H](N)C(=O)O",  formula: "C5H10N2O3",  cid: 5961,
      note: { cn: "它的酰胺氮是细胞里主要的氮供体——嘌呤环四个氮里有两个来自这里（见 4-1-1-1）。" } },
    /* ---- acidic ---- */
    { key: "asp", cn: "天冬氨酸", en: "Aspartate",   tlc: "Asp", olc: "D", cls: "acidic",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }, { el: "C", x: 0.87, y: 1.5 }, { el: "C", x: 1.73, y: 2.0 }, { el: "O", x: 1.73, y: 3.0 }, { el: "O", x: 2.60, y: 1.5, h: 1 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4],[1,5],[5,6],[6,7,2],[6,8]] },
      smiles: "N[C@@H](CC(=O)O)C(=O)O",   formula: "C4H7NO4",    cid: 5960,
      note: { cn: "嘌呤环的第四个氮来自它（见 4-1-1-1）；糖异生绕过丙酮酸那一步也经过它的产物草酰乙酸。" } },
    { key: "glu", cn: "谷氨酸", en: "Glutamate",     tlc: "Glu", olc: "E", cls: "acidic",
      smiles: "N[C@@H](CCC(=O)O)C(=O)O",  formula: "C5H9NO4",    cid: 33032,
      note: { cn: "氨基酸代谢的枢纽：转氨作用几乎都把氨基交给 α-酮戊二酸变成它，再由它统一处理。" } },
    /* ---- basic ---- */
    { key: "lys", cn: "赖氨酸", en: "Lysine",        tlc: "Lys", olc: "K", cls: "basic",
      mol: { atoms: [{ el: "N", x: 0, y: 0, h: 2 }, { el: "C", x: 0.87, y: 0.5 }, { el: "C", x: 1.73, y: 0 }, { el: "O", x: 1.73, y: -1 }, { el: "O", x: 2.60, y: 0.5, h: 1 }, { el: "C", x: 0.87, y: 1.5 }, { el: "C", x: 1.73, y: 2.0 }, { el: "C", x: 0.87, y: 2.5 }, { el: "C", x: 1.73, y: 3.0 }, { el: "N", x: 0.87, y: 3.5, h: 2 }],
             bonds: [[0,1],[1,2],[2,3,2],[2,4],[1,5],[5,6],[6,7],[7,8],[8,9]] },
      smiles: "NCCCC[C@@H](N)C(=O)O",     formula: "C6H14N2O2",  cid: 5962, essential: true },
    { key: "arg", cn: "精氨酸", en: "Arginine",      tlc: "Arg", olc: "R", cls: "basic",
      smiles: "NC(=N)NCCC[C@@H](N)C(=O)O", formula: "C6H14N4O2", cid: 6322,
      note: { cn: "胍基，碱性最强的侧链，在生理 pH 下几乎总是带正电。" } },
    { key: "his", cn: "组氨酸", en: "Histidine",     tlc: "His", olc: "H", cls: "basic",
      smiles: "N[C@@H](Cc1c[nH]cn1)C(=O)O", formula: "C6H9N3O2", cid: 6274, essential: true,
      note: { cn: "咪唑环的 pK 接近生理 pH，所以它在同一个环境里既能给出质子又能接受质子——这就是为什么酶的活性中心里那么常见它（见 3-6）。" } }
  ]
}
]);
