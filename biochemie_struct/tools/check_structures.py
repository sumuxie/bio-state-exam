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


def main():
    files = sorted(glob.glob(os.path.join(DATA, "*.js")))
    assert files, "no data files found in %s" % DATA

    total = fails = 0
    for path in files:
        # Always name the input. An earlier scanner in this project reported
        # "clean" five times for one hard-coded file; any per-file checker
        # must print what it actually opened.
        print("=== %s" % os.path.basename(path))
        src = io.open(path, encoding="utf-8").read()

        entries = re.findall(
            r'key:\s*"([^"]+)".*?smiles:\s*"([^"]+)".*?formula:\s*"([^"]+)".*?cid:\s*(\d+)',
            src, re.S)
        assert entries, "no structures parsed out of %s" % os.path.basename(path)

        for key, smi, formula, cid in entries:
            total += 1
            got = heavy_from_smiles(smi)
            want = heavy_from_formula(formula)
            if got != want:
                fails += 1
                print("  FAIL %-6s smiles=%-34s formula=%-12s" % (key, smi, formula))
                print("       from SMILES  %s" % got)
                print("       from formula %s" % want)
        print("  %d structures checked" % len(entries))

    print()
    print("heavy-atom check: %d structures, %d mismatched" % (total, fails))
    print("NOT checked: hydrogen count, stereochemistry, identity against PubChem")
    if fails:
        sys.exit(1)
    print("RESULT: all structures pass the heavy-atom check")


if __name__ == "__main__":
    main()
