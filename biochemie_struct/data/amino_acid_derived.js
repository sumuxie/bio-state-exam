/* =======================================================================
   氨基酸衍生物 — Molecules derived from amino acids.

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
  id: "aader",
  cnTitle: "氨基酸衍生物",
  enTitle: "Molecules derived from amino acids",
  seeAlso: [
    { app: "pro", topic: "6-3-2", label: "氨基酸衍生的化合物" },
    { app: "pro", topic: "6-3-3", label: "氨基酸衍生的化合物（续）" }
  ],
  note: { cn: "每一个都能追到一个氨基酸：酪氨酸 → 多巴胺 → 去甲肾上腺素 → 肾上腺素（也 → 甲状腺素），色氨酸 → 血清素 → 褪黑素，组氨酸 → 组胺，谷氨酸 → GABA。看结构时找那个还留着的氨基酸骨架，比单独背每一个快。" },
  items: [
    { key: "dopamine", cn: "多巴胺", en: "dopamine", cls: "amine",
      mol: { atoms: [{ el: "O", x: 1.732, y: 4.500, h: 1 }, { el: "O", x: 0.000, y: 3.500, h: 1 }, { el: "N", x: 4.330, y: 0.000, h: 2 }, { el: "C", x: 3.464, y: 1.500, h: 2 }, { el: "C", x: 2.598, y: 2.000 }, { el: "C", x: 3.464, y: 0.500, h: 2 }, { el: "C", x: 2.598, y: 3.000, h: 1 }, { el: "C", x: 1.732, y: 1.500, h: 1 }, { el: "C", x: 1.732, y: 3.500 }, { el: "C", x: 0.866, y: 2.000, h: 1 }, { el: "C", x: 0.866, y: 3.000 }],
             bonds: [[0,8], [1,10], [2,5], [3,4], [3,5], [4,6,2], [4,7], [6,8], [7,9,2], [8,10,2], [9,10]] },
      smiles: "C1=CC(=C(C=C1CCN)O)O", formula: "C8H11NO2", cid: 681,
      note: { cn: "PubChem CID 681，2026-08-09 取回。" } },
    { key: "epinephrine", cn: "肾上腺素", en: "epinephrine (adrenaline)", cls: "amine",
      mol: { atoms: [{ el: "O", x: 0.866, y: 4.500, h: 1 }, { el: "O", x: 0.000, y: 1.000, h: 1 }, { el: "O", x: 1.732, y: 0.000, h: 1 }, { el: "N", x: 2.598, y: 5.500, h: 1 }, { el: "C", x: 1.732, y: 4.000, h: 1 }, { el: "C", x: 1.732, y: 3.000 }, { el: "C", x: 2.598, y: 4.500, h: 2 }, { el: "C", x: 0.866, y: 2.500, h: 1 }, { el: "C", x: 2.598, y: 2.500, h: 1 }, { el: "C", x: 0.866, y: 1.500 }, { el: "C", x: 2.598, y: 1.500, h: 1 }, { el: "C", x: 1.732, y: 1.000 }, { el: "C", x: 3.464, y: 6.000, h: 3 }],
             bonds: [[4,0], [1,9], [2,11], [3,6], [3,12], [4,5], [4,6], [5,7,2], [5,8], [7,9], [8,10,2], [9,11,2], [10,11]] },
      smiles: "CNC[C@@H](C1=CC(=C(C=C1)O)O)O", formula: "C9H13NO3", cid: 5816,
      note: { cn: "PubChem CID 5816，2026-08-09 取回。" } },
    { key: "gaba", cn: "γ-氨基丁酸", en: "gamma-aminobutyrate (GABA)", cls: "amine",
      mol: { atoms: [{ el: "O", x: 0.000, y: 1.500, h: 1 }, { el: "O", x: 0.866, y: 0.000 }, { el: "N", x: 4.330, y: 1.000, h: 2 }, { el: "C", x: 2.598, y: 1.000, h: 2 }, { el: "C", x: 1.732, y: 1.500, h: 2 }, { el: "C", x: 3.464, y: 1.500, h: 2 }, { el: "C", x: 0.866, y: 1.000 }],
             bonds: [[0,6], [1,6,2], [2,5], [3,4], [3,5], [4,6]] },
      smiles: "C(CC(=O)O)CN", formula: "C4H9NO2", cid: 119,
      note: { cn: "PubChem CID 119，2026-08-09 取回。" } },
    { key: "histamine", cn: "组胺", en: "histamine", cls: "amine",
      mol: { atoms: [{ el: "N", x: 3.454, y: 0.000, h: 1 }, { el: "N", x: 0.000, y: 0.639, h: 2 }, { el: "N", x: 3.954, y: 1.539 }, { el: "C", x: 1.694, y: 0.279, h: 2 }, { el: "C", x: 2.645, y: 0.588 }, { el: "C", x: 0.951, y: 0.948, h: 2 }, { el: "C", x: 2.954, y: 1.539, h: 1 }, { el: "C", x: 4.263, y: 0.588, h: 1 }],
             bonds: [[0,4], [0,7], [1,5], [2,6], [2,7,2], [3,4], [3,5], [4,6,2]] },
      smiles: "C1=C(NC=N1)CCN", formula: "C5H9N3", cid: 774,
      note: { cn: "PubChem CID 774，2026-08-09 取回。" } },
    { key: "melatonin", cn: "褪黑素", en: "melatonin", cls: "amine",
      mol: { atoms: [{ el: "O", x: 0.866, y: 2.000 }, { el: "O", x: 7.656, y: 3.374 }, { el: "N", x: 4.410, y: 0.195, h: 1 }, { el: "N", x: 6.010, y: 3.912, h: 1 }, { el: "C", x: 4.410, y: 1.805 }, { el: "C", x: 3.464, y: 1.500 }, { el: "C", x: 4.721, y: 2.755, h: 2 }, { el: "C", x: 3.464, y: 0.500 }, { el: "C", x: 4.994, y: 1.000, h: 1 }, { el: "C", x: 5.699, y: 2.961, h: 2 }, { el: "C", x: 2.598, y: 2.000, h: 1 }, { el: "C", x: 2.598, y: 0.000, h: 1 }, { el: "C", x: 1.732, y: 1.500 }, { el: "C", x: 1.732, y: 0.500, h: 1 }, { el: "C", x: 6.989, y: 4.118 }, { el: "C", x: 7.299, y: 5.069, h: 3 }, { el: "C", x: 0.000, y: 1.500, h: 3 }],
             bonds: [[0,12], [0,16], [1,14,2], [2,7], [2,8], [3,9], [3,14], [4,5], [4,6], [4,8,2], [5,7,2], [5,10], [6,9], [7,11], [10,12,2], [11,13,2], [12,13], [14,15]] },
      smiles: "CC(=O)NCCC1=CNC2=C1C=C(C=C2)OC", formula: "C13H16N2O2", cid: 896,
      note: { cn: "PubChem CID 896，2026-08-09 取回。" } },
    { key: "nitric-oxide", cn: "一氧化氮", en: "nitric oxide (NO)", cls: "amine",
      mol: { atoms: [{ el: "O", x: 1.000, y: 0.000 }, { el: "N", x: 0.000, y: 0.000 }],
             bonds: [[0,1,2]] },
      smiles: "[N]=O", formula: "NO", cid: 145068,
      note: { cn: "PubChem CID 145068，2026-08-09 取回。" } },
    { key: "norepinephrine", cn: "去甲肾上腺素", en: "norepinephrine", cls: "amine",
      mol: { atoms: [{ el: "O", x: 0.866, y: 4.500, h: 1 }, { el: "O", x: 0.000, y: 1.000, h: 1 }, { el: "O", x: 1.732, y: 0.000, h: 1 }, { el: "N", x: 2.598, y: 5.500, h: 2 }, { el: "C", x: 1.732, y: 4.000, h: 1 }, { el: "C", x: 1.732, y: 3.000 }, { el: "C", x: 2.598, y: 4.500, h: 2 }, { el: "C", x: 0.866, y: 2.500, h: 1 }, { el: "C", x: 2.598, y: 2.500, h: 1 }, { el: "C", x: 0.866, y: 1.500 }, { el: "C", x: 2.598, y: 1.500, h: 1 }, { el: "C", x: 1.732, y: 1.000 }],
             bonds: [[4,0], [1,9], [2,11], [3,6], [4,5], [4,6], [5,7,2], [5,8], [7,9], [8,10,2], [9,11,2], [10,11]] },
      smiles: "C1=CC(=C(C=C1[C@H](CN)O)O)O", formula: "C8H11NO3", cid: 439260,
      note: { cn: "PubChem CID 439260，2026-08-09 取回。" } },
    { key: "serotonin", cn: "血清素", en: "serotonin (5-HT)", cls: "amine",
      mol: { atoms: [{ el: "O", x: 0.000, y: 2.000, h: 1 }, { el: "N", x: 3.544, y: 0.195, h: 1 }, { el: "N", x: 5.144, y: 3.912, h: 2 }, { el: "C", x: 3.544, y: 1.805 }, { el: "C", x: 2.598, y: 1.500 }, { el: "C", x: 3.855, y: 2.755, h: 2 }, { el: "C", x: 2.598, y: 0.500 }, { el: "C", x: 4.128, y: 1.000, h: 1 }, { el: "C", x: 4.833, y: 2.962, h: 2 }, { el: "C", x: 1.732, y: 2.000, h: 1 }, { el: "C", x: 1.732, y: 0.000, h: 1 }, { el: "C", x: 0.866, y: 1.500 }, { el: "C", x: 0.866, y: 0.500, h: 1 }],
             bonds: [[0,11], [1,6], [1,7], [2,8], [3,4], [3,5], [3,7,2], [4,6,2], [4,9], [5,8], [6,10], [9,11,2], [10,12,2], [11,12]] },
      smiles: "C1=CC2=C(C=C1O)C(=CN2)CCN", formula: "C10H12N2O", cid: 5202,
      note: { cn: "PubChem CID 5202，2026-08-09 取回。" } },
    { key: "thyroxine", cn: "甲状腺素 T₄", en: "thyroxine (T4)", cls: "amine",
      mol: { atoms: [{ el: "I", x: 0.000, y: 5.000 }, { el: "I", x: 3.464, y: 5.000 }, { el: "I", x: 3.464, y: 9.000 }, { el: "I", x: 5.196, y: 6.000 }, { el: "O", x: 1.732, y: 6.000 }, { el: "O", x: 0.000, y: 0.000, h: 1 }, { el: "O", x: 1.732, y: 0.000 }, { el: "O", x: 5.196, y: 8.000, h: 1 }, { el: "N", x: 0.000, y: 2.000, h: 2 }, { el: "C", x: 1.732, y: 2.000, h: 2 }, { el: "C", x: 0.866, y: 1.500, h: 1 }, { el: "C", x: 1.732, y: 3.000 }, { el: "C", x: 2.598, y: 3.500, h: 1 }, { el: "C", x: 0.866, y: 3.500, h: 1 }, { el: "C", x: 1.732, y: 5.000 }, { el: "C", x: 0.866, y: 4.500 }, { el: "C", x: 2.598, y: 4.500 }, { el: "C", x: 0.866, y: 0.500 }, { el: "C", x: 2.598, y: 6.500 }, { el: "C", x: 3.464, y: 6.000, h: 1 }, { el: "C", x: 2.598, y: 7.500, h: 1 }, { el: "C", x: 3.464, y: 8.000 }, { el: "C", x: 4.330, y: 6.500 }, { el: "C", x: 4.330, y: 7.500 }],
             bonds: [[0,15], [1,16], [2,21], [3,22], [4,14], [4,18], [5,17], [6,17,2], [7,23], [10,8], [9,10], [9,11], [10,17], [11,12,2], [11,13], [12,16], [13,15,2], [14,15], [14,16,2], [18,19,2], [18,20], [19,22], [20,21,2], [21,23], [22,23,2]] },
      smiles: "C1=C(C=C(C(=C1I)OC2=CC(=C(C(=C2)I)O)I)I)C[C@@H](C(=O)O)N", formula: "C15H11I4NO4", cid: 5819,
      note: { cn: "PubChem CID 5819，2026-08-09 取回。" } }
  ]
}
]);
