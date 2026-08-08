/* =========================================================================
   Sugars — Fischer and Haworth forms.

   WHY THIS GROUP IS DIFFERENT. For amino acids the drawing is a skeleton and
   the stereochemistry is a side issue. For sugars the stereochemistry IS the
   content: which way each OH points is the whole difference between glucose
   and galactose, and between alpha and beta.

   So each Haworth drawing carries an explicit `haworth` field declaring which
   side every substituent sits on, derived from the Fischer projection by the
   standard rule — **right in Fischer = down in Haworth, left = up** — and
   tools/check_structures.py ASSERTS the drawn y-coordinates agree with it.
   That turns the one thing most likely to be wrong into something a script
   catches rather than something a reader has to trust.

   Ring atoms carry `n:` names (C1, C2, O5 …) so the checker can find them.

   ⚠️ NO `cid` FIELD IN THIS GROUP, deliberately. PubChem IDs for the specific
   anomers are not written here because they were not fetched, and this
   project's standing rule is that a reference is never written from memory.
   Add them when someone can look them up; the checker does not require them.

   ⚠️ Still NOT machine-verified: the @/@@ tags in the SMILES. The `haworth`
   assertion covers the DRAWING's orientation, which is what you read off the
   screen, but nothing here confirms the SMILES says the same thing.
   ========================================================================= */
window.STRUCT = window.STRUCT || {};
window.STRUCT.groups = (window.STRUCT.groups || []).concat([
{
  id: "sugar",
  cnTitle: "糖",
  enTitle: "Sugars",
  seeAlso: [
    { app: "pro", topic: "7-1-1", label: "醛糖与酮糖" },
    { app: "pro", topic: "7-1-3-1", label: "半缩醛形式、异头物、Haworth 式" },
    { app: "pro", topic: "7-1-4", label: "变旋" },
    { app: "pro", topic: "4-1-2", label: "核酸的结构（核糖 vs 脱氧核糖）" }
  ],
  note: {
    cn: "Haworth 式里每个 -OH 朝上还是朝下，是从 Fischer 投影按一条规则换过来的：**Fischer 里在右边的，Haworth 里朝下；在左边的，朝上**。这条规则是这一组唯一需要记的换算，其余都能推。α 与 β 的差别只在 C1：β 的 C1-OH 与 C6 同侧（都朝上），α 反侧。",
    en: "In a Haworth projection, right in Fischer becomes down and left becomes up. Alpha and beta differ only at C1."
  },
  items: [
    { key: "glc-open", cn: "D-葡萄糖（开链 Fischer）", en: "D-Glucose, open chain", tlc: "Glc", olc: "—",
      cls: "aldose",
      mol: { atoms: [
        { el: "C", n: "C1", x: 0, y: 4 }, { el: "O", x: 0.9, y: 4.5 },
        { el: "C", n: "C2", x: 0, y: 3 }, { el: "O", x: 1.0, y: 3, h: 1 },
        { el: "C", n: "C3", x: 0, y: 2 }, { el: "O", x: -1.0, y: 2, h: 1 },
        { el: "C", n: "C4", x: 0, y: 1 }, { el: "O", x: 1.0, y: 1, h: 1 },
        { el: "C", n: "C5", x: 0, y: 0 }, { el: "O", x: 1.0, y: 0, h: 1 },
        { el: "C", n: "C6", x: 0, y: -1 }, { el: "O", x: 0, y: -2, h: 1 }],
        bonds: [[0,1,2],[0,2],[2,3],[2,4],[4,5],[4,6],[6,7],[6,8],[8,9],[8,10],[10,11]] },
      smiles: "OC[C@@H](O)[C@H](O)[C@@H](O)[C@@H](O)C=O", formula: "C6H12O6",
      note: { cn: "Fischer 投影：碳链竖着画，C1 的醛基在最上面。OH 的左右决定了它是哪个糖——C2 右、C3 左、C4 右、C5 右，这四个位置就是 D-葡萄糖的身份证。在水里这种开链形式其实只占极小一部分，绝大多数已经闭成环（见 7-1-3-1）。" } },

    { key: "a-glcp", cn: "α-D-吡喃葡萄糖", en: "alpha-D-Glucopyranose", tlc: "Glc", olc: "α",
      cls: "pyranose",
      mol: { atoms: [
        { el: "C", n: "C1", x: 3.20, y: 0.00 }, { el: "C", n: "C2", x: 2.30, y: -0.40 },
        { el: "C", n: "C3", x: 0.90, y: -0.40 }, { el: "C", n: "C4", x: 0.00, y: 0.00 },
        { el: "C", n: "C5", x: 0.65, y: 0.40 }, { el: "O", n: "O5", x: 2.55, y: 0.40 },
        { el: "O", x: 3.20, y: -1.00, h: 1 }, { el: "O", x: 2.30, y: -1.40, h: 1 },
        { el: "O", x: 1.15, y: 0.80, h: 1 },  { el: "O", x: 0.00, y: -1.00, h: 1 },
        { el: "C", x: 0.65, y: 1.40 },        { el: "O", x: 1.50, y: 1.90, h: 1 }],
        bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
                [0,6],[1,7],[2,8],[3,9],[4,10],[10,11]] },
      haworth: { C1: "down", C2: "down", C3: "up", C4: "down", C5: "up" },
      smiles: "OC[C@H]1O[C@H](O)[C@H](O)[C@@H](O)[C@@H]1O", formula: "C6H12O6",
      note: { cn: "α 的意思就是 C1-OH 和 C6 分处两侧：C6 朝上，C1-OH 就朝下。除 C1 之外其余位置和 β 完全一样——所以 α 和 β 只差一个位置，却是两种不同的物质，能被酶分辨。" } },

    { key: "b-glcp", cn: "β-D-吡喃葡萄糖", en: "beta-D-Glucopyranose", tlc: "Glc", olc: "β",
      cls: "pyranose",
      mol: { atoms: [
        { el: "C", n: "C1", x: 3.20, y: 0.00 }, { el: "C", n: "C2", x: 2.30, y: -0.40 },
        { el: "C", n: "C3", x: 0.90, y: -0.40 }, { el: "C", n: "C4", x: 0.00, y: 0.00 },
        { el: "C", n: "C5", x: 0.65, y: 0.40 }, { el: "O", n: "O5", x: 2.55, y: 0.40 },
        { el: "O", x: 3.35, y: 1.00, h: 1 },  { el: "O", x: 2.30, y: -1.40, h: 1 },
        { el: "O", x: 1.15, y: 0.80, h: 1 },  { el: "O", x: 0.00, y: -1.00, h: 1 },
        { el: "C", x: 0.65, y: 1.40 },        { el: "O", x: 1.50, y: 1.90, h: 1 }],
        bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
                [0,6],[1,7],[2,8],[3,9],[4,10],[10,11]] },
      haworth: { C1: "up", C2: "down", C3: "up", C4: "down", C5: "up" },
      smiles: "OC[C@H]1O[C@@H](O)[C@H](O)[C@@H](O)[C@@H]1O", formula: "C6H12O6",
      note: { cn: "β 的 C1-OH 与 C6 同侧，都朝上。纤维素用的正是 β 型的连接方式——所以「同样两个葡萄糖，键的构型一翻，一个是淀粉一个是纤维素」（见 7-3-2）就是这一个位置的差别。" } },

    { key: "b-ribf", cn: "β-D-呋喃核糖", en: "beta-D-Ribofuranose", tlc: "Rib", olc: "β",
      cls: "furanose",
      mol: { atoms: [
        { el: "C", n: "C1", x: 2.20, y: 0.00 }, { el: "C", n: "C2", x: 1.50, y: -0.35 },
        { el: "C", n: "C3", x: 0.20, y: -0.35 }, { el: "C", n: "C4", x: 0.50, y: 0.45 },
        { el: "O", n: "O4", x: 1.70, y: 0.45 },
        { el: "O", x: 2.35, y: 1.00, h: 1 },  { el: "O", x: 1.50, y: -1.35, h: 1 },
        { el: "O", x: 0.20, y: -1.35, h: 1 }, { el: "C", x: 0.50, y: 1.45 },
        { el: "O", x: 1.35, y: 1.95, h: 1 }],
        bonds: [[0,1],[1,2],[2,3],[3,4],[4,0],
                [0,5],[1,6],[2,7],[3,8],[8,9]] },
      haworth: { C1: "up", C2: "down", C3: "down", C4: "up" },
      smiles: "OC[C@H]1O[C@@H](O)[C@H](O)[C@@H]1O", formula: "C5H10O5",
      note: { cn: "五元环，RNA 里的糖。核酸里的碱基接在 C1' 上，也就是朝上那个位置；C5' 上的羟基接磷酸。注意 **C2' 上有一个 OH**——这一个羟基就是 RNA 和 DNA 的全部区别，也是 RNA 为什么比 DNA 容易被水解的原因。" } },

    { key: "b-drib", cn: "2-脱氧-β-D-呋喃核糖", en: "2-Deoxy-beta-D-ribofuranose", tlc: "dRib", olc: "β",
      cls: "furanose",
      mol: { atoms: [
        { el: "C", n: "C1", x: 2.20, y: 0.00 }, { el: "C", n: "C2", x: 1.50, y: -0.35, h: 2 },
        { el: "C", n: "C3", x: 0.20, y: -0.35 }, { el: "C", n: "C4", x: 0.50, y: 0.45 },
        { el: "O", n: "O4", x: 1.70, y: 0.45 },
        { el: "O", x: 2.35, y: 1.00, h: 1 },  { el: "O", x: 0.20, y: -1.35, h: 1 },
        { el: "C", x: 0.50, y: 1.45 },        { el: "O", x: 1.35, y: 1.95, h: 1 }],
        bonds: [[0,1],[1,2],[2,3],[3,4],[4,0],
                [0,5],[2,6],[3,7],[7,8]] },
      haworth: { C1: "up", C3: "down", C4: "up" },
      smiles: "OC[C@H]1O[C@@H](O)C[C@@H]1O", formula: "C5H10O4",
      note: { cn: "和上面那个核糖对照着看，差别只有一处：**C2' 上没有 OH 了**，只剩两个 H——「脱氧」这个名字说的就是这件事。少了这一个羟基，骨架就不容易被自己水解，所以 DNA 才能当长期档案用（见 L-8-3-1）。" } }
  ]
}
]);
