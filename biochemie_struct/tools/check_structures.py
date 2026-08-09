#!/usr/bin/env python3
"""Assert every structure's SMILES matches its declared molecular formula.

WHY THIS EXISTS. LEHNINGER_START.md's standing rule is that a reference is
never written from memory - it is fetched, stored with its provenance, and
asserted before use. A structure drawn from memory is the same failure mode,
and a WRONG structure is worse than no structure because it gets memorised.
This machine has no chemistry library (rdkit, indigo and openbabel were all
checked for and are absent), so the check is written from scratch.

WHAT IT CHECKS
    heavy atoms   C, N, O, S counted straight out of the SMILES, compared
                  against the heavy atoms parsed out of `formula`.

WHAT IT DOES NOT CHECK - do not report this script as "structures verified"
    hydrogen      implicit H needs valence rules this parser does not
                  implement, so H is read from `formula` and trusted.
    stereochem    @ / @@ say L rather than D and NOTHING here verifies it.
    identity      nothing is fetched; `cid` is an audit trail for a human to
                  follow, not a machine-checked assertion.

A structure can pass this and still be the wrong enantiomer. That limitation
is stated on the page itself rather than left for the reader to find out.

Exits non-zero on failure so it can gate a commit.
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(HERE), "data")

# Elements that appear in these molecules. Two-letter symbols must be tried
# first or "Cl" would parse as C followed by l.
ELEMENTS = ["Cl", "Br", "Si", "Se", "C", "N", "O", "S", "P", "F", "I", "B", "H"]


def heavy_from_smiles(smi):
    """Count heavy atoms in a SMILES string.

    Aromatic atoms are written lower case (c1ccccc1), bracket atoms carry
    charge/isotope/H-count ([nH], [C@@H]). Both forms are handled; bracket
    contents are reduced to their element symbol before counting.
    """
    counts = {}
    i = 0
    while i < len(smi):
        ch = smi[i]
        if ch == "[":                       # bracket atom: take its element
            j = smi.index("]", i)
            inner = smi[i + 1:j]
            m = re.match(r"\d*([A-Za-z][a-z]?)", inner)
            if not m:
                raise ValueError("cannot read bracket atom [%s]" % inner)
            sym = m.group(1)
            sym = sym[0].upper() + sym[1:]
            if sym != "H":
                counts[sym] = counts.get(sym, 0) + 1
            i = j + 1
            continue
        if ch.isalpha():
            sym = None
            for e in ELEMENTS:              # two-letter symbols first
                if smi[i:i + len(e)] == e:
                    sym = e
                    break
            if sym is None and ch.lower() in "bcnops":   # aromatic lower case
                sym = ch.upper()
            if sym is None:
                raise ValueError("unknown element at %d in %s" % (i, smi))
            if sym != "H":
                counts[sym] = counts.get(sym, 0) + 1
            i += len(sym)
            continue
        i += 1                              # bonds, ring closures, branches
    return counts


def heavy_from_formula(f):
    counts = {}
    for sym, num in re.findall(r"([A-Z][a-z]?)(\d*)", f):
        if not sym or sym == "H":
            continue
        counts[sym] = counts.get(sym, 0) + (int(num) if num else 1)
    return counts


def heavy_from_mol(block):
    """Count heavy atoms in a drawn `mol` graph, and return its bonds.

    The graph is a SECOND, independently authored encoding of the same
    molecule. Making it agree with the SMILES is the only real verification
    available here: a hand-drawn structure cannot otherwise be checked by
    anything, because a wrong ring renders just as cleanly as a right one.
    """
    atoms = re.findall(r'\{\s*el:\s*"([A-Za-z]+)"', block)
    counts = {}
    for el in atoms:
        if el != "H":
            counts[el] = counts.get(el, 0) + 1
    bonds = [
        [int(x) for x in re.findall(r"-?\d+", b)[:3]]
        for b in re.findall(r"\[\s*\d+\s*,\s*\d+(?:\s*,\s*\d+)?\s*\]", block)
    ]
    return counts, len(atoms), bonds


def rings_in_smiles(smi):
    """Number of rings, from SMILES ring-closure digits.

    Each ring closure is written as the same digit twice, so the count is
    half the digit occurrences. Digits inside [brackets] are charges or
    isotopes, never ring bonds, so bracket contents are skipped.
    """
    digits = 0
    i = 0
    while i < len(smi):
        if smi[i] == "[":
            i = smi.index("]", i) + 1
            continue
        if smi[i] == "%":               # %10 and above, two-digit label
            digits += 1
            i += 3
            continue
        if smi[i].isdigit():
            digits += 1
        i += 1
    assert digits % 2 == 0, "odd number of ring-closure digits in %s" % smi
    return digits // 2


def check_haworth(key, mol_block, hw_block):
    """Assert each named ring carbon's substituent sits on the declared side.

    The declaration comes from the Fischer projection by the standard rule
    (right in Fischer -> down in Haworth), so this catches a drawing that
    contradicts the sugar it claims to be — the single most likely error in
    this group, and one that would be memorised straight off the screen.
    """
    atoms = re.findall(r'\{([^}]*)\}', mol_block)
    parsed = []
    for a in atoms:
        el = re.search(r'el:\s*"([A-Za-z]+)"', a)
        y = re.search(r'y:\s*(-?[\d.]+)', a)
        n = re.search(r'n:\s*"([A-Za-z0-9]+)"', a)
        parsed.append({"el": el.group(1) if el else "?",
                       "y": float(y.group(1)) if y else 0.0,
                       "n": n.group(1) if n else None})
    bonds = [[int(x) for x in re.findall(r"-?\d+", b)[:2]]
             for b in re.findall(r"\[\s*\d+\s*,\s*\d+(?:\s*,\s*\d+)?\s*\]", mol_block)]
    named = {a["n"]: i for i, a in enumerate(parsed) if a["n"]}

    problems = []
    for want in re.findall(r'(\w+):\s*"(up|down)"', hw_block):
        cname, side = want
        if cname not in named:
            problems.append("haworth names %s but no atom is called that" % cname)
            continue
        i = named[cname]
        # neighbours that are NOT ring atoms (ring atoms all carry a name)
        subs = [j for b in bonds for j in b if i in b and j != i and not parsed[j]["n"]]
        if not subs:
            problems.append("%s has no substituent to check" % cname)
            continue
        j = subs[0]
        drawn = "up" if parsed[j]["y"] > parsed[i]["y"] else "down"
        if drawn != side:
            problems.append("%s substituent is drawn %s but declared %s"
                            % (cname, drawn, side))
    return problems


def check_graph(key, natoms, bonds, expect_bonds=None):
    """Structural integrity of the drawing itself."""
    problems = []
    # Bond COUNT, checked against the SMILES. Without this a ring drawn open
    # passes everything else: the atom count is unchanged and the molecule is
    # still connected, just as a chain. Found by injecting exactly that error
    # into phenylalanine and watching this script report a clean pass.
    # For a connected graph, bonds = atoms - 1 + rings.
    if expect_bonds is not None and len(bonds) != expect_bonds:
        problems.append("has %d bonds, SMILES implies %d — a ring drawn open, "
                        "or a bond missing/extra" % (len(bonds), expect_bonds))
    seen = set()
    for b in bonds:
        i, j = b[0], b[1]
        if i >= natoms or j >= natoms:
            problems.append("bond [%d,%d] references an atom that does not exist" % (i, j))
            continue
        if i == j:
            problems.append("bond [%d,%d] joins an atom to itself" % (i, j))
        pair = (min(i, j), max(i, j))
        if pair in seen:
            problems.append("bond %s is drawn twice" % (list(pair),))
        seen.add(pair)
    # connectivity: a molecule drawn in two disconnected pieces is a mistake
    if natoms and not problems:
        adj = {}
        for b in bonds:
            adj.setdefault(b[0], []).append(b[1])
            adj.setdefault(b[1], []).append(b[0])
        stack, seenn = [0], {0}
        while stack:
            n = stack.pop()
            for m in adj.get(n, []):
                if m not in seenn:
                    seenn.add(m)
                    stack.append(m)
        if len(seenn) != natoms:
            problems.append("drawing is in %d disconnected pieces (%d of %d atoms reachable)"
                            % (2, len(seenn), natoms))
    return problems


# data/*.js files that legitimately contain no structures, and so must be
# skipped rather than scanned. Keep this list as short as it can possibly be:
# every file NOT named here still has to yield at least one entry, enforced by
# `assert entries` further down. That assertion is the reason a drifting or
# unwired data file fails loudly instead of scanning clean at zero -- do not
# weaken it by adding files here to make a run go green.
NON_STRUCTURE_DATA = {"pronunciations.js"}


def main():
    files = sorted(glob.glob(os.path.join(DATA, "*.js")))
    assert files, "no data files found in %s" % DATA
    files = [f for f in files if os.path.basename(f) not in NON_STRUCTURE_DATA]
    assert files, "every data file was excluded -- NON_STRUCTURE_DATA is too broad"

    total = fails = 0
    drawn = 0
    checked_hw = 0
    for path in files:
        # Always name the input. An earlier scanner in this project reported
        # "clean" five times for one hard-coded file; any per-file checker
        # must print what it actually opened.
        print("=== %s" % os.path.basename(path))
        src = io.open(path, encoding="utf-8").read()
        drawn_here = 0

        # split into per-entry blocks so an optional `mol` stays with its own key
        blocks = re.split(r'(?=\{ key: ")', src)
        entries = 0

        for blk in blocks:
            m = re.search(r'key:\s*"([^"]+)"', blk)
            if not m:
                continue
            sm = re.search(r'smiles:\s*"([^"]+)"', blk)
            fm = re.search(r'formula:\s*"([^"]+)"', blk)
            if not (sm and fm):
                continue
            key, smi, formula = m.group(1), sm.group(1), fm.group(1)
            entries += 1
            total += 1

            got = heavy_from_smiles(smi)
            want = heavy_from_formula(formula)
            if got != want:
                fails += 1
                print("  FAIL %-6s SMILES vs formula" % key)
                print("       from SMILES  %s" % got)
                print("       from formula %s" % want)

            # Anchor on the bonds array rather than on a closing brace: the mol
            # block contains nested {} for every atom, so a lazy match to the
            # next "}" stops in the wrong place. An earlier version of this
            # regex silently matched nothing and the script cheerfully reported
            # "0 of them drawn" for seven drawn molecules — which is only
            # visible because the count is printed. Print your counts.
            mb = re.search(r'mol:\s*\{(.*?bonds:\s*\[.*?\])\s*\}', blk, re.S)
            if mb:
                drawn += 1
                drawn_here += 1
                mol_counts, natoms, bonds = heavy_from_mol(mb.group(1))
                # the load-bearing check: the drawing and the SMILES are two
                # independent encodings and must describe the same molecule
                if mol_counts != want:
                    fails += 1
                    print("  FAIL %-6s DRAWING vs formula" % key)
                    print("       from drawing %s" % mol_counts)
                    print("       from formula %s" % want)
                heavy = sum(want.values())
                expect_bonds = heavy - 1 + rings_in_smiles(smi)
                for p in check_graph(key, natoms, bonds, expect_bonds):
                    fails += 1
                    print("  FAIL %-9s %s" % (key, p))

                # Haworth orientation. For a sugar this IS the content - which
                # way each OH points is the difference between glucose and
                # galactose, and between alpha and beta. The entry declares the
                # expected side per ring carbon and this asserts the drawing
                # agrees, so the most error-prone part is checked rather than
                # trusted.
                hw = re.search(r'haworth:\s*\{([^}]*)\}', blk)
                if hw:
                    checked_hw += 1
                    for p in check_haworth(key, mb.group(1), hw.group(1)):
                        fails += 1
                        print("  FAIL %-9s %s" % (key, p))

        assert entries, "no structures parsed out of %s" % os.path.basename(path)
        print("  %d structures checked, %d of them drawn" % (entries, drawn_here))

    print()
    print("checked %d structures (%d drawn, %d Haworth-asserted), %d failures"
          % (total, drawn, checked_hw, fails))
    print("covered    : heavy atoms agree across formula / SMILES / drawing;")
    print("             drawings are connected, no self/duplicate bonds, bond count matches;")
    print("             declared Haworth orientations match the drawn coordinates")
    print("NOT covered: hydrogen count, STEREOCHEMISTRY, identity against PubChem")
    if fails:
        sys.exit(1)
    print("RESULT: all structures pass")


if __name__ == "__main__":
    main()
