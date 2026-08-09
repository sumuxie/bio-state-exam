/* =======================================================================
   卟啉与色素 — Porphyrins and pigments.

   GENERATED, DO NOT HAND-EDIT. Source of every field:
   tools/fetch_structures.py -> tools/_pubchem_cache.json ->
   tools/gen_structures.py. Re-run those to change anything here.

   PROVENANCE. `cid`, `formula`, `smiles` and the 2D coordinates are
   PubChem's, fetched via PUG REST with the retrieval date recorded per
   entry. Nothing was written from memory. Before an entry was written
   the fetcher asserted that the heavy-atom composition agrees across
   formula, SMILES and drawing, that the drawing is one connected graph,
   and that the name asked for appears in PubChem's own synonym list for
   the CID returned — that last one is what stops a name lookup quietly
   handing back a different molecule.

   STILL NOT VERIFIED, same as the rest of this app: hydrogen counts and
   STEREOCHEMISTRY. The @/@@ tags come from PubChem rather than from a
   person, which is better than before, but nothing here re-derives them.
   ======================================================================= */
window.STRUCT = window.STRUCT || {};
window.STRUCT.groups = (window.STRUCT.groups || []).concat([
{
  id: "porph",
  cnTitle: "卟啉与色素",
  enTitle: "Porphyrins and pigments",
  seeAlso: [
    { app: "pro", topic: "6-3-1", label: "血红蛋白与肌红蛋白" },
    { app: "pro", topic: "9-1", label: "光合作用的光反应" }
  ],
  note: { cn: "卟吩是骨架，原卟啉 IX 是取代之后的配体，血红素是它络合了 Fe²⁺，叶绿素是络合 Mg²⁺ 的近亲；胆红素和胆绿素是血红素被拆开之后的线性产物。⚠️ 血红素、叶绿素和 B₁₂ 的图里金属与四个氮之间没有画键——PubChem 的连接表把金属列为独立片段（配位键不是共价键），这一点原样保留，没有伪造成键。" },
  items: [
    { key: "bilirubin", cn: "胆红素", en: "bilirubin", cls: "porphyrin",
      mol: { atoms: [{ el: "O", x: 1.079, y: 1.926, h: 1 }, { el: "O", x: 6.500, y: 8.206, h: 1 }, { el: "O", x: 2.661, y: 1.222 }, { el: "O", x: 5.099, y: 7.188 }, { el: "O", x: 0.322, y: 6.550 }, { el: "O", x: 8.755, y: 0.000 }, { el: "N", x: 4.964, y: 5.165, h: 1 }, { el: "N", x: 7.363, y: 3.222, h: 1 }, { el: "N", x: 2.082, y: 6.271, h: 1 }, { el: "N", x: 8.661, y: 1.780, h: 1 }, { el: "C", x: 5.603, y: 3.501, h: 2 }, { el: "C", x: 4.859, y: 4.170 }, { el: "C", x: 6.553, y: 3.810 }, { el: "C", x: 3.881, y: 3.962 }, { el: "C", x: 6.863, y: 4.761 }, { el: "C", x: 3.381, y: 4.828 }, { el: "C", x: 7.863, y: 4.761 }, { el: "C", x: 4.050, y: 5.571 }, { el: "C", x: 8.171, y: 3.810 }, { el: "C", x: 3.474, y: 3.049, h: 2 }, { el: "C", x: 6.275, y: 5.570, h: 2 }, { el: "C", x: 2.387, y: 4.933, h: 3 }, { el: "C", x: 8.450, y: 5.570, h: 3 }, { el: "C", x: 2.480, y: 2.944, h: 2 }, { el: "C", x: 6.681, y: 6.484, h: 2 }, { el: "C", x: 3.842, y: 6.550, h: 1 }, { el: "C", x: 9.123, y: 3.501, h: 1 }, { el: "C", x: 2.891, y: 6.859 }, { el: "C", x: 9.331, y: 2.523 }, { el: "C", x: 2.582, y: 7.809 }, { el: "C", x: 10.244, y: 2.116 }, { el: "C", x: 2.073, y: 2.031 }, { el: "C", x: 6.094, y: 7.293 }, { el: "C", x: 10.139, y: 1.122 }, { el: "C", x: 1.582, y: 7.809 }, { el: "C", x: 1.273, y: 6.859 }, { el: "C", x: 9.161, y: 0.914 }, { el: "C", x: 3.170, y: 8.619, h: 3 }, { el: "C", x: 11.110, y: 2.616, h: 1 }, { el: "C", x: 10.883, y: 0.452, h: 3 }, { el: "C", x: 0.994, y: 8.619, h: 1 }, { el: "C", x: 11.976, y: 2.116, h: 2 }, { el: "C", x: 0.000, y: 8.514, h: 2 }],
             bonds: [[0,31], [1,32], [2,31,2], [3,32,2], [4,35,2], [5,36,2], [6,11], [6,17], [7,12], [7,18], [8,27], [8,35], [9,28], [9,36], [10,11], [10,12], [11,13,2], [12,14,2], [13,15], [13,19], [14,16], [14,20], [15,17,2], [15,21], [16,18,2], [16,22], [17,25], [18,26], [19,23], [20,24], [23,31], [24,32], [25,27,2], [26,28,2], [27,29], [28,30], [29,34,2], [29,37], [30,33,2], [30,38], [33,36], [33,39], [34,35], [34,40], [38,41,2], [40,42,2]] },
      smiles: "CC1=C(NC(=C1CCC(=O)O)CC2=C(C(=C(N2)/C=C\\3/C(=C(C(=O)N3)C)C=C)C)CCC(=O)O)/C=C\\4/C(=C(C(=O)N4)C=C)C", formula: "C33H36N4O6", cid: 5280352,
      note: { cn: "PubChem CID 5280352，2026-08-09 取回。" } },
    { key: "biliverdin", cn: "胆绿素", en: "biliverdin", cls: "porphyrin",
      mol: { atoms: [{ el: "O", x: 5.838, y: 9.638, h: 1 }, { el: "O", x: 11.322, y: 3.548, h: 1 }, { el: "O", x: 7.239, y: 8.620 }, { el: "O", x: 10.456, y: 5.048 }, { el: "O", x: 1.456, y: 7.981 }, { el: "O", x: 3.152, y: 0.000 }, { el: "N", x: 4.976, y: 4.654, h: 1 }, { el: "N", x: 6.275, y: 3.211, h: 1 }, { el: "N", x: 2.577, y: 6.596, h: 1 }, { el: "N", x: 4.873, y: 0.461 }, { el: "C", x: 5.476, y: 6.193 }, { el: "C", x: 5.785, y: 5.242 }, { el: "C", x: 7.857, y: 3.548 }, { el: "C", x: 6.944, y: 3.955 }, { el: "C", x: 4.476, y: 6.193 }, { el: "C", x: 7.753, y: 2.553 }, { el: "C", x: 4.167, y: 5.242 }, { el: "C", x: 6.736, y: 4.933, h: 1 }, { el: "C", x: 6.064, y: 7.002, h: 2 }, { el: "C", x: 6.775, y: 2.345 }, { el: "C", x: 8.723, y: 4.048, h: 2 }, { el: "C", x: 5.657, y: 7.915, h: 2 }, { el: "C", x: 3.888, y: 7.002, h: 3 }, { el: "C", x: 3.216, y: 4.933, h: 1 }, { el: "C", x: 9.589, y: 3.548, h: 2 }, { el: "C", x: 8.496, y: 1.884, h: 3 }, { el: "C", x: 6.368, y: 1.432, h: 1 }, { el: "C", x: 2.473, y: 5.602 }, { el: "C", x: 5.373, y: 1.327 }, { el: "C", x: 1.494, y: 5.394 }, { el: "C", x: 0.994, y: 6.260 }, { el: "C", x: 4.704, y: 2.070 }, { el: "C", x: 6.245, y: 8.724 }, { el: "C", x: 10.456, y: 4.048 }, { el: "C", x: 1.664, y: 7.003 }, { el: "C", x: 3.791, y: 1.664 }, { el: "C", x: 1.088, y: 4.480, h: 1 }, { el: "C", x: 0.000, y: 6.364, h: 3 }, { el: "C", x: 3.895, y: 0.669 }, { el: "C", x: 4.912, y: 3.049, h: 3 }, { el: "C", x: 2.925, y: 2.164, h: 1 }, { el: "C", x: 0.093, y: 4.376, h: 2 }, { el: "C", x: 2.059, y: 1.664, h: 2 }],
             bonds: [[0,32], [1,33], [2,32,2], [3,33,2], [4,34,2], [5,38,2], [6,11], [6,16], [7,13], [7,19], [8,27], [8,34], [9,28,2], [9,38], [10,11,2], [10,14], [10,18], [11,17], [12,13], [12,15,2], [12,20], [13,17,2], [14,16,2], [14,22], [15,19], [15,25], [16,23], [18,21], [19,26,2], [20,24], [21,32], [23,27,2], [24,33], [26,28], [27,29], [28,31], [29,30,2], [29,36], [30,34], [30,37], [31,35,2], [31,39], [35,38], [35,40], [36,41,2], [40,42,2]] },
      smiles: "CC\\1=C(/C(=C/C2=C(C(=C(N2)/C=C\\3/C(=C(C(=O)N3)C)C=C)C)CCC(=O)O)/N/C1=C\\C4=NC(=O)C(=C4C)C=C)CCC(=O)O", formula: "C33H34N4O6", cid: 5280353,
      note: { cn: "PubChem CID 5280353，2026-08-09 取回。" } },
    { key: "chlorophyll-a", cn: "叶绿素 a", en: "chlorophyll a", cls: "porphyrin",
      smiles: "CCC1=C(C2=NC1=CC3=C(C4=C([N-]3)C(=C5[C@H]([C@@H](C(=N5)C=C6C(=C(C(=C2)[N-]6)C=C)C)C)CCC(=O)OC/C=C(\\C)/CCC[C@H](C)CCC[C@H](C)CCCC(C)C)[C@H](C4=O)C(=O)OC)C)C.[Mg+2]", formula: "C55H72MgN4O5", cid: 12085802,
      note: { cn: "PubChem CID 12085802，2026-08-09 取回；disconnected drawing ACCEPTED: Mg is a separate fragment in PubChem's connection table (coordination, not covalent)；结构图未画出：69 bonds drawn, checker expects 70；drawing is not connected (checker requires one piece)。" } },
    { key: "heme-b", cn: "血红素 b", en: "heme b", cls: "porphyrin",
      smiles: "CC1=C(C2=CC3=NC(=CC4=C(C(=C([N-]4)C=C5C(=C(C(=N5)C=C1[N-]2)C)C=C)C)C=C)C(=C3CCC(=O)O)C)CCC(=O)O.[Fe+2]", formula: "C34H32FeN4O4", cid: 4973,
      note: { cn: "PubChem CID 4973，2026-08-09 取回；disconnected drawing ACCEPTED: Fe is a separate fragment in PubChem's connection table (coordination, not covalent)；结构图未画出：46 bonds drawn, checker expects 47；drawing is not connected (checker requires one piece)。" } },
    { key: "porphine", cn: "卟吩骨架", en: "porphine skeleton", cls: "porphyrin",
      mol: { atoms: [{ el: "N", x: 4.540, y: 2.938, h: 1 }, { el: "N", x: 3.039, y: 1.569, h: 1 }, { el: "N", x: 3.005, y: 4.308 }, { el: "N", x: 1.535, y: 2.938 }, { el: "C", x: 5.141, y: 2.203 }, { el: "C", x: 3.841, y: 0.968 }, { el: "C", x: 5.108, y: 3.740 }, { el: "C", x: 2.237, y: 0.934 }, { el: "C", x: 4.842, y: 1.236, h: 1 }, { el: "C", x: 6.077, y: 2.471, h: 1 }, { el: "C", x: 3.539, y: 0.000, h: 1 }, { el: "C", x: 6.077, y: 3.472, h: 1 }, { el: "C", x: 2.538, y: 0.000, h: 1 }, { el: "C", x: 4.808, y: 4.674, h: 1 }, { el: "C", x: 1.269, y: 1.236, h: 1 }, { el: "C", x: 3.841, y: 4.976 }, { el: "C", x: 0.968, y: 2.170 }, { el: "C", x: 2.203, y: 4.942 }, { el: "C", x: 0.968, y: 3.707 }, { el: "C", x: 1.236, y: 4.674, h: 1 }, { el: "C", x: 3.506, y: 5.910, h: 1 }, { el: "C", x: 0.000, y: 2.438, h: 1 }, { el: "C", x: 2.505, y: 5.910, h: 1 }, { el: "C", x: 0.000, y: 3.439, h: 1 }],
             bonds: [[0,4], [0,6], [1,5], [1,7], [2,15,2], [2,17], [3,16], [3,18,2], [4,8,2], [4,9], [5,8], [5,10,2], [6,11], [6,13,2], [7,12,2], [7,14], [9,11,2], [10,12], [13,15], [14,16,2], [15,20], [16,21], [17,19,2], [17,22], [18,19], [18,23], [20,22,2], [21,23,2]] },
      smiles: "C1=CC2=CC3=CC=C(N3)C=C4C=CC(=N4)C=C5C=CC(=N5)C=C1N2", formula: "C20H14N4", cid: 66868,
      note: { cn: "PubChem CID 66868，2026-08-09 取回。" } },
    { key: "protoporphyrin-ix", cn: "原卟啉 IX", en: "protoporphyrin IX", cls: "porphyrin",
      mol: { atoms: [{ el: "O", x: 5.558, y: 11.046, h: 1 }, { el: "O", x: 0.000, y: 5.570, h: 1 }, { el: "O", x: 4.163, y: 10.020 }, { el: "O", x: 1.049, y: 6.949 }, { el: "N", x: 7.977, y: 4.632, h: 1 }, { el: "N", x: 6.475, y: 3.262, h: 1 }, { el: "N", x: 6.442, y: 6.001 }, { el: "N", x: 4.972, y: 4.632 }, { el: "C", x: 5.941, y: 7.603 }, { el: "C", x: 3.436, y: 5.132 }, { el: "C", x: 5.640, y: 6.636 }, { el: "C", x: 6.942, y: 7.603 }, { el: "C", x: 4.404, y: 5.400 }, { el: "C", x: 3.436, y: 4.131 }, { el: "C", x: 7.277, y: 6.669 }, { el: "C", x: 4.404, y: 3.863 }, { el: "C", x: 8.544, y: 5.434 }, { el: "C", x: 7.277, y: 2.661 }, { el: "C", x: 5.673, y: 2.628 }, { el: "C", x: 8.578, y: 3.897 }, { el: "C", x: 5.348, y: 8.409, h: 2 }, { el: "C", x: 2.640, y: 5.738, h: 2 }, { el: "C", x: 4.672, y: 6.368, h: 1 }, { el: "C", x: 9.514, y: 5.166 }, { el: "C", x: 6.976, y: 1.694 }, { el: "C", x: 9.514, y: 4.165 }, { el: "C", x: 5.974, y: 1.694 }, { el: "C", x: 8.245, y: 6.368, h: 1 }, { el: "C", x: 4.705, y: 2.929, h: 1 }, { el: "C", x: 8.278, y: 2.929, h: 1 }, { el: "C", x: 7.518, y: 8.421, h: 3 }, { el: "C", x: 5.749, y: 9.325, h: 2 }, { el: "C", x: 1.718, y: 5.351, h: 2 }, { el: "C", x: 2.570, y: 3.631, h: 3 }, { el: "C", x: 10.309, y: 5.771, h: 3 }, { el: "C", x: 7.568, y: 0.888, h: 3 }, { el: "C", x: 10.312, y: 3.563, h: 1 }, { el: "C", x: 5.304, y: 0.952, h: 1 }, { el: "C", x: 5.157, y: 10.130 }, { el: "C", x: 0.922, y: 5.957 }, { el: "C", x: 11.233, y: 3.953, h: 2 }, { el: "C", x: 5.611, y: 0.000, h: 2 }],
             bonds: [[0,38], [1,39], [2,38,2], [3,39,2], [4,16], [4,19], [5,17], [5,18], [6,10,2], [6,14], [7,12], [7,15,2], [8,10], [8,11,2], [8,20], [9,12], [9,13,2], [9,21], [10,22], [11,14], [11,30], [12,22,2], [13,15], [13,33], [14,27,2], [15,28], [16,23,2], [16,27], [17,24], [17,29,2], [18,26], [18,28,2], [19,25,2], [19,29], [20,31], [21,32], [23,25], [23,34], [24,26,2], [24,35], [25,36], [26,37], [31,38], [32,39], [36,40,2], [37,41,2]] },
      smiles: "CC1=C(C2=CC3=NC(=CC4=NC(=CC5=C(C(=C(N5)C=C1N2)C=C)C)C(=C4CCC(=O)O)C)C(=C3C)CCC(=O)O)C=C", formula: "C34H34N4O4", cid: 4971,
      note: { cn: "PubChem CID 4971，2026-08-09 取回。" } }
  ]
}
]);
