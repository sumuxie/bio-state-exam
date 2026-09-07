#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Redraw the free nucleobases in the tautomer the sugar says they must be in.

THE PROBLEM. PubChem publishes adenine, guanine and cytosine in a tautomer that
is not the one a biochemistry course draws, and says so in its own IUPAC names:

    CID 190        adenine    7H-purin-6-amine
    CID 135398634  guanine    2-amino-1,7-dihydropurin-6-one
    CID 597        cytosine   6-amino-1H-pyrimidin-2-one   (amino next to the NH)

fetch_structures.py did nothing wrong: it asserted composition, connectivity and
the synonym list, and all three hold for a tautomer. Tautomers share a formula
and a heavy-atom graph and differ only in where one hydrogen sits, so no
composition check can separate them - which is why the app ended up showing
adenine with its H on N7 and the double bond running C5=C6 instead of N1=C6.

Then the card three rows down draws adenosine with the sugar on N9. Both cannot
be right.

THE FIX, AND WHY IT IS NOT WRITTEN FROM MEMORY. The corrected base is not drawn
by hand and not looked up: it is DERIVED from this app's own nucleoside record,
which came from PubChem and passed every existing assertion. Cut the glycosidic
bond in adenosine, throw the sugar away, put an H on the nitrogen it was attached
to, and what is left is adenine in the tautomer the nucleoside implies - ring
skeleton, bond orders and 2D coordinates all still PubChem's. The base and the
nucleoside then agree by construction, which is the property that was missing.

Bases with no nucleoside card in this app (hypoxanthine, xanthine) are NOT
touched. There is nothing here to derive them from, and PubChem's IUPAC names
call them 1,7-dihydro and 3,7-dihydro respectively, so a change would be an
opinion rather than a derivation. They are reported and left for a human.

WHAT IS ASSERTED before anything is written, per base:
  1. exactly one glycosidic bond is found in the nucleoside;
  2. the derived fragment's heavy-atom composition equals the base's `formula`;
  3. the hydrogen count derived from valence equals the H in `formula`;
  4. the derived drawing's skeleton is isomorphic to the OLD drawing ignoring
     hydrogen - same molecule, so this is a tautomer change and not a different
     compound;
  5. the H now sits at the glycosidic position (checked by the graph rule in
     check_bond_orders.py, not by inspection);
  6. the SMILES this script writes, parsed back, is isomorphic to the new
     drawing WITH bond orders. The writer is also round-tripped over every drawn
     structure in the app before it is trusted (--selftest, run automatically).

Nothing is written unless all six hold for every base being changed.

Usage:  python biochemie_struct/tools/fix_base_tautomers.py [--dry-run]
"""
import io, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from check_bond_orders import (parse_mol, parse_smiles, smiles_h, derived_h,
                               isomorphic, base_nh, VALENCE, ORGANIC_SUBSET)

DATA = os.path.join(os.path.dirname(HERE), "data")
TARGET = os.path.join(DATA, "nucleotides.js")

# base -> the nucleoside it must agree with. Both are drawn in this same file,
# which is the whole point: the pair is an internal consistency requirement, not
# an outside claim. A base with no nucleoside here is deliberately absent.
PAIRS = {"adenine": "adenosine", "guanine": "guanosine", "cytosine": "cytidine"}

# PubChem's own IUPAC name for each record, quoted so the reader can check the
# claim without leaving the card: the name itself says which tautomer it is.
PUBCHEM_NAME = {
    "adenine": ("7H", "7H-purin-6-amine"),
    "guanine": ("7H", "2-amino-1,7-dihydropurin-6-one"),
    "cytosine": ("N3-H", "6-amino-1H-pyrimidin-2-one，氨基挨着带 H 的那个氮"),
}
GLYCO_N = {"adenine": "N9", "guanine": "N9", "cytosine": "N1"}


# --------------------------------------------------------------------------
def read_entries(text):
    """key -> (block text, span) for every entry in a data file."""
    out = {}
    for m in re.finditer(r'\{ key: "([^"]+)"', text):
        start = m.start()
        nxt = text.find('{ key: "', start + 1)
        end = nxt if nxt != -1 else len(text)
        out[m.group(1)] = (text[start:end], (start, end))
    return out


def parse_mol_xy(block):
    """atoms as (el, h, x, y) — parse_mol drops the coordinates and we need them."""
    atoms = []
    for a in re.findall(r"\{([^}]*)\}", block):
        el = re.search(r'el:\s*"([A-Za-z]+)"', a)
        if not el:
            continue
        h = re.search(r"h:\s*(\d+)", a)
        x = re.search(r"x:\s*(-?[\d.]+)", a)
        y = re.search(r"y:\s*(-?[\d.]+)", a)
        atoms.append((el.group(1), int(h.group(1)) if h else None,
                      float(x.group(1)), float(y.group(1))))
    return atoms


def mol_block(block):
    m = re.search(r'mol:\s*\{(.*?bonds:\s*\[.*?\])\s*\}', block, re.S)
    assert m, "no mol block"
    return m


def graph(atoms, bonds):
    adj = {i: {} for i in range(len(atoms))}
    for i, j, o in bonds:
        adj[i][j] = o
        adj[j][i] = o
    return adj


def h_from_valence(atoms, bonds):
    order_sum = [0] * len(atoms)
    for i, j, o in bonds:
        order_sum[i] += o
        order_sum[j] += o
    out = []
    for k, a in enumerate(atoms):
        h, ok = derived_h(a[0], order_sum[k])
        assert ok, "atom %d (%s) has %d bonds, above its valence" % (k, a[0], order_sum[k])
        out.append(h)
    return out


def rings(adj, n, size):
    out = []
    def walk(start, path):
        if len(path) == size:
            if start in adj[path[-1]]:
                r = tuple(sorted(path))
                if r not in out:
                    out.append(r)
            return
        for m in adj[path[-1]]:
            if m in path or m < start:
                continue
            walk(start, path + [m])
    for s in range(n):
        walk(s, [s])
    return [set(r) for r in out]


def base_fragment(atoms, bonds):
    """Cut the glycosidic bond of a nucleoside and return the base side.

    The base rings are the 5- and 6-rings built only from C and N; the sugar ring
    always contains its ring oxygen, so no ring test has to know what a sugar is.
    """
    adj = graph(atoms, bonds)
    ringset = rings(adj, len(atoms), 5) + rings(adj, len(atoms), 6)
    base_rings = [r for r in ringset if all(atoms[i][0] in ("C", "N") for i in r)]
    assert base_rings, "no all-C/N ring: this does not look like a nucleoside"
    in_base = set().union(*base_rings)
    glyco = [(i, j) for i, j, o in bonds
             if (i in in_base) != (j in in_base)
             and atoms[i if i in in_base else j][0] == "N"
             and atoms[j if i in in_base else i][0] == "C"]
    assert len(glyco) == 1, "expected exactly one glycosidic N-C bond, found %d" % len(glyco)
    n_ring, c_sugar = glyco[0] if glyco[0][0] in in_base else glyco[0][::-1]

    # everything reachable from the base rings without crossing that bond
    keep, stack = set(in_base), list(in_base)
    while stack:
        k = stack.pop()
        for m in adj[k]:
            if (k, m) in ((n_ring, c_sugar), (c_sugar, n_ring)):
                continue
            if m not in keep:
                keep.add(m)
                stack.append(m)
    assert c_sugar not in keep, "cutting the glycosidic bond did not separate the sugar"

    idx = {old: new for new, old in enumerate(sorted(keep))}
    new_atoms = [(atoms[o][0], None, atoms[o][2], atoms[o][3]) for o in sorted(keep)]
    new_bonds = [(idx[i], idx[j], o) for i, j, o in bonds if i in keep and j in keep]
    return new_atoms, new_bonds, idx[n_ring]


# --------------------------------------------------------------------------
# SMILES writer. Round-tripped over every drawn structure in the app before use.
# --------------------------------------------------------------------------
def write_smiles(atoms, bonds, hcount):
    adj = graph(atoms, bonds)
    n = len(atoms)
    # Start at a terminal atom when there is one. A DFS begun in the middle of a
    # ring system produces a string that parses correctly and reads terribly,
    # and this string is printed on the card.
    terminals = [k for k in range(n) if len(adj[k]) == 1]
    start = terminals[0] if terminals else 0

    tree = {i: [] for i in range(n)}
    ring_bonds = []
    seen = {start}
    sys.setrecursionlimit(10000)

    def build(k, parent_of_k):
        for m in sorted(adj[k], key=lambda m: (len(adj[m]), m)):
            if m == parent_of_k:
                continue
            if m in seen:
                pair = (min(k, m), max(k, m))
                if pair not in ring_bonds:
                    ring_bonds.append(pair)
                continue
            seen.add(m)
            tree[k].append(m)
            build(m, k)

    build(start, None)
    assert len(seen) == n, "the drawing is not connected"

    labels = {}
    for num, (i, j) in enumerate(ring_bonds, start=1):
        assert num < 10, "more ring bonds than single-digit labels"
        labels.setdefault(i, []).append((num, adj[i][j]))
        labels.setdefault(j, []).append((num, adj[i][j]))

    def token(k):
        el, h = atoms[k][0], hcount[k]
        used = sum(adj[k].values())
        plain, ok = derived_h(el, used)
        if el in ORGANIC_SUBSET and ok and plain == h:
            return el
        return "[%s%s]" % (el, "" if h == 0 else "H" if h == 1 else "H%d" % h)

    BOND = {1: "", 2: "=", 3: "#"}

    def emit(k):
        s = token(k)
        for num, o in labels.get(k, []):
            s += BOND[o] + str(num)
        kids = tree[k]
        for i, ch in enumerate(kids):
            piece = BOND[adj[k][ch]] + emit(ch)
            s += ("(%s)" % piece) if i < len(kids) - 1 else piece
        return s

    return emit(start)


def selftest_writer():
    """Write a SMILES for every drawn structure in the app and read it back."""
    import glob
    checked = 0
    for path in sorted(glob.glob(os.path.join(DATA, "*.js"))):
        if os.path.basename(path) == "pronunciations.js":
            continue
        text = io.open(path, encoding="utf-8", newline="").read()
        for key, (blk, _) in read_entries(text).items():
            m = re.search(r'mol:\s*\{(.*?bonds:\s*\[.*?\])\s*\}', blk, re.S)
            if not m:
                continue
            atoms, bonds = parse_mol(m.group(1))
            try:
                hc = h_from_valence([(a[0], a[1]) for a in atoms], bonds)
            except AssertionError:
                continue            # charged species, reported by check_bond_orders
            smi = write_smiles([(a[0], a[1], 0, 0) for a in atoms], bonds, hc)
            sa, sb = parse_smiles(smi)
            sh = smiles_h(sa, sb)
            la = {k: (atoms[k][0], hc[k]) for k in range(len(atoms))}
            lb = {k: (sa[k][0], sh[k]) for k in range(len(sa))}
            r = isomorphic(la, graph(atoms, bonds), lb, graph(sa, sb))
            assert r is not False, "round trip failed for %s: %s" % (key, smi)
            checked += 1
    print("SMILES writer round-tripped over %d drawn structures" % checked)


# --------------------------------------------------------------------------
def fmt_mol(atoms, bonds, hcount, nl="\n"):
    def num(v):
        return ("%.3f" % v).rstrip("0").rstrip(".") if v % 1 else "%.3f" % v
    parts = []
    for k, a in enumerate(atoms):
        s = '{ el: "%s", x: %s, y: %s' % (a[0], "%.3f" % a[2], "%.3f" % a[3])
        if hcount[k]:
            s += ", h: %d" % hcount[k]
        parts.append(s + " }")
    b = ", ".join("[%d,%d%s]" % (i, j, "" if o == 1 else ",%d" % o) for i, j, o in bonds)
    return ("mol: { atoms: [%s],%s             bonds: [%s] }"
            % (", ".join(parts), nl, b))


def main():
    dry = "--dry-run" in sys.argv
    selftest_writer()

    text = io.open(TARGET, encoding="utf-8", newline="").read()
    nl = "\r\n" if "\r\n" in text else "\n"   # keep the file's own line ending
    entries = read_entries(text)
    changes = []
    skipped = []

    for base_key, nuc_key in PAIRS.items():
        assert base_key in entries, "no entry for %s" % base_key
        assert nuc_key in entries, "no entry for %s" % nuc_key
        blk = entries[base_key][0]
        old_atoms = parse_mol_xy(mol_block(blk).group(1))
        old_a, old_b = parse_mol(mol_block(blk).group(1))
        old_h = h_from_valence(old_a, old_b)
        verdict, why = base_nh(old_a, old_h, old_b)
        if verdict in ("ok", "both"):
            skipped.append("%s already has its H at the glycosidic position" % base_key)
            continue

        formula = re.search(r'formula:\s*"([^"]+)"', blk).group(1)
        nuc_blk = entries[nuc_key][0]
        n_atoms = parse_mol_xy(mol_block(nuc_blk).group(1))
        n_a, n_b = parse_mol(mol_block(nuc_blk).group(1))
        atoms, bonds, glyco_n = base_fragment(n_atoms, n_b)
        hc = h_from_valence([(a[0], a[1]) for a in atoms], bonds)

        # 2. composition
        comp = {}
        for a in atoms:
            comp[a[0]] = comp.get(a[0], 0) + 1
        want = {}
        for sym, cnt in re.findall(r"([A-Z][a-z]?)(\d*)", formula):
            if sym and sym != "H":
                want[sym] = want.get(sym, 0) + (int(cnt) if cnt else 1)
        assert comp == want, "%s: derived %s, formula says %s" % (base_key, comp, want)
        # 3. hydrogen
        hm = re.search(r"H(\d*)(?![a-z])", formula)
        want_h = (int(hm.group(1)) if hm.group(1) else 1) if hm else 0
        assert sum(hc) == want_h, "%s: derived %d H, formula says %d" % (
            base_key, sum(hc), want_h)
        assert hc[glyco_n] == 1, "%s: the glycosidic N did not come out as N-H" % base_key
        # 4. same molecule as before, ignoring hydrogen
        la = {k: atoms[k][0] for k in range(len(atoms))}
        lb = {k: old_a[k][0] for k in range(len(old_a))}
        assert isomorphic(la, graph(atoms, bonds), lb, graph(old_a, old_b),
                          use_order=False) is True, \
            "%s: the derived fragment is not the same skeleton as the old drawing" % base_key
        # 5. the H is now at the glycosidic position
        v2, why2 = base_nh([(a[0], None) for a in atoms], hc, bonds)
        assert v2 in ("ok", "both"), "%s: after the fix, %s" % (base_key, why2)
        # 6. a SMILES that reads back as this exact drawing
        smi = write_smiles(atoms, bonds, hc)
        sa, sb = parse_smiles(smi)
        sh = smiles_h(sa, sb)
        assert isomorphic({k: (atoms[k][0], hc[k]) for k in range(len(atoms))},
                          graph(atoms, bonds),
                          {k: (sa[k][0], sh[k]) for k in range(len(sa))},
                          graph(sa, sb)) is True, \
            "%s: the SMILES written does not read back as the drawing" % base_key

        old_smiles = re.search(r'smiles:\s*"([^"]+)"', blk).group(1)
        new_blk = blk
        new_blk = new_blk.replace(mol_block(blk).group(0), fmt_mol(atoms, bonds, hc, nl))
        new_blk = new_blk.replace('smiles: "%s"' % old_smiles, 'smiles: "%s"' % smi)
        note = re.search(r'note:\s*\{\s*cn:\s*"([^"]*)"', new_blk)
        assert note, "%s has no note to record the provenance in" % base_key
        taut, iupac = PUBCHEM_NAME[base_key]
        new_note = ("%s。PubChem 给的是 %s 互变异构体（它自己的 IUPAC 名就是 %s，"
                    "SMILES %s），H 不在 %s 上。这里的结构不是手画的，是从本 app 的 %s "
                    "卡片推出来的：糖接在 %s，碱基的 H 就必须在 %s，两张卡片不能互相矛盾。"
                    % (note.group(1).rstrip("。"), taut, iupac, old_smiles,
                       GLYCO_N[base_key], nuc_key, GLYCO_N[base_key], GLYCO_N[base_key]))
        new_blk = new_blk.replace('note: { cn: "%s"' % note.group(1),
                                  'note: { cn: "%s"' % new_note)
        changes.append((base_key, blk, new_blk, why, smi, old_smiles))

    for key, _, _, why, smi, old in changes:
        print("\n%s" % key)
        print("  was : %s   (%s)" % (old, why))
        print("  now : %s" % smi)
    for s in skipped:
        print("\nskipped: %s" % s)
    if not changes:
        print("\nnothing to change")
        return
    if dry:
        print("\n--dry-run: nothing written")
        return
    for _, old_blk, new_blk, _, _, _ in changes:
        assert text.count(old_blk) == 1
        text = text.replace(old_blk, new_blk)
    io.open(TARGET, "w", encoding="utf-8", newline="").write(text)
    print("\nwrote %s (%d entries redrawn)" % (os.path.basename(TARGET), len(changes)))


if __name__ == "__main__":
    main()
