# -*- coding: utf-8 -*-
"""从 SMILES 生成结构式 SVG —— 给没有 ChemDraw 源文件的那几条通路用。

2026-09-23 她：「我没有，**你能不能自己做**」。
（她只有糖酵解的 `EMP.cdxml`；柠檬酸循环 · β-氧化 · 尿素循环没有源文件。）

⚠ **为什么不手画坐标**：化学结构最怕画错，而画错的结构比没有更糟。
所以走 RDKit：**SMILES → 它自己算 2D 坐标 → 它自己画 SVG**，
我只负责「给哪根键上什么颜色」。结构本身不是我摆的。

⚠ **怎么自检**：每个分子都打印**分子式**（C·H·O·N 各几个），
跟课本一对就知道 SMILES 写没写错 —— 例如柠檬酸必须是 C6H8O7、
α-酮戊二酸 C5H6O5、延胡索酸 C4H4O4、瓜氨酸 C6H13N3O3。
**报给她的每一张图都带着分子式，她能核。**

⚠ **RDKit 不在系统 Python 里**，装在临时环境里（不动她的机器）：
    python -m venv <scratch>/chemenv
    <scratch>/chemenv/Scripts/python.exe -m pip install rdkit
    <scratch>/chemenv/Scripts/python.exe tools/mol2svg.py --out app/img/tca
产物是 SVG 文件，**SVG 进仓库，工具本身是一次性的**。

配色跟 cdx2svg.py 一致（她 2026-09-23：「最重要的还是那种标上了颜色的成键」）：
    橙 #d35400 ＝ 磷酸 · 磷酸酯键
    蓝 #1f6feb ＝ 羰基 C=O
    红 #c0392b ＝ **这一步真正变化的那根键**（手工指定，不猜）
"""
import io, os, sys

OUT_DEFAULT = 'out'
COL_P = (0.827, 0.329, 0.0)      # 橙
COL_CO = (0.121, 0.435, 0.921)   # 蓝
COL_HOT = (0.753, 0.224, 0.169)  # 红 · 这一步变的地方

# name, SMILES, 说明, **这一步变的那几根键**（每根写成 (原子a, 原子b)，0 起；可空）
TCA = [
 ('acetyl-CoA（乙酰基）', 'CC(=O)S*', '两个碳进来，挂在辅酶 A 的硫上', []),
 ('oxaloacetate 草酰乙酸', 'OC(=O)CC(=O)C(=O)O', '四碳，等着接乙酰基', [(3,4)]),
 ('citrate 柠檬酸', 'OC(=O)CC(O)(CC(=O)O)C(=O)O', '六碳 · 三个羧基 · 一个叔醇，不能被氧化', [(3,4)]),
 ('isocitrate 异柠檬酸', 'OC(=O)C(O)C(CC(=O)O)C(=O)O', '羟基挪了一个碳 —— 现在能被氧化了', [(2,3)]),
 ('α-ketoglutarate α-酮戊二酸', 'OC(=O)CCC(=O)C(=O)O', '五碳 · 掉了第一个 CO₂', [(4,5)]),
 ('succinyl-CoA 琥珀酰 CoA', 'OC(=O)CCC(=O)S*', '四碳 · 掉了第二个 CO₂ · 硫酯是高能的', []),
 ('succinate 琥珀酸', 'OC(=O)CCC(=O)O', '四碳 · 硫酯水解，换来一个 GTP', []),
 ('fumarate 延胡索酸', 'OC(=O)/C=C/C(=O)O', '⚠ 反式双键 —— FAD 脱的氢就在这儿', [(3,4)]),
 ('malate 苹果酸', 'OC(=O)CC(O)C(=O)O', '加了一分子水', [(3,4)]),
]

UREA = [
 ('carbamoyl phosphate 氨甲酰磷酸', 'NC(=O)OP(=O)(O)O', '第一个氮进来的地方 · 花掉 2 个 ATP', []),
 ('ornithine 鸟氨酸', 'NCCCC(N)C(=O)O', '循环的载体，本身不消耗', []),
 ('citrulline 瓜氨酸', 'NC(=O)NCCCC(N)C(=O)O', '鸟氨酸接上氨甲酰基', []),
 ('argininosuccinate 精氨琥珀酸', 'OC(=O)CC(NC(=N)NCCCC(N)C(=O)O)C(=O)O',
  '第二个氮由天冬氨酸带进来', []),
 ('arginine 精氨酸', 'NC(=N)NCCCC(N)C(=O)O', '切掉延胡索酸之后剩下的', []),
 ('urea 尿素', 'NC(N)=O', '两个氮 · 一个碳 —— 这就是最终产物', [(0,1),(1,2)]),
]

FAOX = [
 ('palmitate 棕榈酸', 'CCCCCCCCCCCCCCCC(=O)O', '16 个碳 · 饱和 · 游离脂肪酸', []),
 ('palmitoyl-CoA 棕榈酰 CoA', 'CCCCCCCCCCCCCCCC(=O)S*', '活化：做成硫酯，花掉 2 个高能键', []),
 ('trans-Δ²-enoyl-CoA', 'CCCCCCCCCCCCC/C=C/C(=O)S*', '① 脱氢 —— FAD 拿走两个氢', [(13,14)]),
 ('3-hydroxyacyl-CoA', 'CCCCCCCCCCCCCC(O)CC(=O)S*', '② 加水 —— 羟基上到 β 碳', [(13,14)]),
 ('3-ketoacyl-CoA', 'CCCCCCCCCCCCCC(=O)CC(=O)S*', '③ 再脱氢 —— NAD⁺ 拿走两个氢，β 碳变酮', [(13,14)]),
 ('acetyl-CoA（切下来的两个碳）', 'CC(=O)S*', '④ 硫解 —— 一刀切下两个碳', []),
]

SETS = {'tca': TCA, 'urea': UREA, 'faox': FAOX}


def build(which, outdir):
    from rdkit import Chem
    from rdkit.Chem import AllChem
    from rdkit.Chem.Draw import rdMolDraw2D
    rows = SETS[which]
    os.makedirs(outdir, exist_ok=True)
    made = []
    for k, (name, smi, cap, hot) in enumerate(rows):
        m = Chem.MolFromSmiles(smi)
        if m is None:
            print('  ✗ %s 解析失败：%s' % (name, smi))
            continue
        AllChem.Compute2DCoords(m)
        # 分子式（自检用）
        C = sum(1 for a in m.GetAtoms() if a.GetSymbol() == 'C')
        H = sum(a.GetTotalNumHs() for a in m.GetAtoms())
        O = sum(1 for a in m.GetAtoms() if a.GetSymbol() == 'O')
        N = sum(1 for a in m.GetAtoms() if a.GetSymbol() == 'N')
        S = sum(1 for a in m.GetAtoms() if a.GetSymbol() == 'S')
        form = 'C%d H%d O%d' % (C, H, O) + (' N%d' % N if N else '') + (' S%d' % S if S else '')
        # ⚠ 2026-09-23 第一版把**每个**羰基都刷成蓝条，尿素那张几乎被红团盖住 ——
        # 太重了，等于没重点。她要的是「**这一步变的那根键**」有颜色。
        # 所以现在只高亮两种：① 磷酸相关的键（橙，那是真信号）
        #                    ② hot 指定的那几根键（红，这一步变的地方）
        # **不再全局刷羰基**，也不再高亮原子（原子高亮会画成大色块，盖住字）。
        hb, hbc, ha, hac = [], {}, [], {}
        for b in m.GetBonds():
            syms = {b.GetBeginAtom().GetSymbol(), b.GetEndAtom().GetSymbol()}
            if 'P' in syms:
                hb.append(b.GetIdx()); hbc[b.GetIdx()] = COL_P
        for pair in hot:
            bd = m.GetBondBetweenAtoms(pair[0], pair[1]) if isinstance(pair, (tuple, list)) else None
            if bd is not None:
                hb.append(bd.GetIdx()); hbc[bd.GetIdx()] = COL_HOT
        # 长链要更宽的画布，不然 16 个碳挤成一团
        n = m.GetNumAtoms()
        W = 300 if n <= 12 else (420 if n <= 20 else 560)
        H = 200 if n <= 12 else 220
        d = rdMolDraw2D.MolDraw2DSVG(W, H)
        o = d.drawOptions()
        o.addStereoAnnotation = False
        o.bondLineWidth = 2
        o.highlightBondWidthMultiplier = 16
        o.fillHighlights = False
        rdMolDraw2D.PrepareAndDrawMolecule(d, m, highlightAtoms=ha, highlightAtomColors=hac,
                                           highlightBonds=hb, highlightBondColors=hbc)
        d.FinishDrawing()
        svg = d.GetDrawingText()
        p = os.path.join(outdir, '%02d.svg' % k)
        io.open(p, 'w', encoding='utf-8', newline='\n').write(svg)
        made.append((name, form, cap, os.path.basename(p)))
        print('  %-30s %-22s %s' % (name, form, cap))
    return made


def main():
    which = 'tca'
    for a in sys.argv[1:]:
        if a in SETS:
            which = a
    out = OUT_DEFAULT
    if '--out' in sys.argv:
        out = sys.argv[sys.argv.index('--out') + 1]
    print('%s：%d 个结构' % (which, len(SETS[which])))
    build(which, out)
    print('写到 %s' % out)
    return 0


if __name__ == '__main__':
    sys.exit(main())
