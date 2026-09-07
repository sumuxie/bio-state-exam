#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Check the part of every drawing that check_structures.py explicitly does not:
BOND ORDERS, hydrogen counts, and formal charge.

WHY THIS EXISTS. check_structures.py counts heavy atoms and bonds, and says so
in its own docstring: "hydrogen ... is read from `formula` and trusted". A double
bond drawn between the wrong pair of atoms changes no heavy-atom count and no
bond count, so it passes that script cleanly. That is how a wrong double bond can
sit in the data unnoticed, and a wrong structure is worse than no structure
because it gets memorised.

THE CONVENTION THIS SCRIPT WORKS IN. app.js draws in skeletal convention:
hydrogens are implicit and `h` is only a LABEL field, printed as a subscript next
to a heteroatom. So the hydrogen count is not read out of `h`; it is derived from
each atom's valence and the bond orders drawn, and `h` is then checked against
that derivation. That is what makes the check independent of the drawing.

WHAT IT CHECKS, each independently of the others

  valence      every atom's summed bond orders against the neutral valence of
               its element. A misplaced double bond shows up here as a
               five-bonded carbon or a four-bonded neutral nitrogen.

  hydrogen     H derived from valence, summed over the molecule, against the H
               in `formula`; and every declared `h` against the derived value,
               so a subscript that says NH2 where the bonds say NH fails.

  drawing==SMILES  graph isomorphism between the drawn graph and the graph
               parsed out of the SMILES, matching on element, derived hydrogen
               count and bond order. Two independent encodings; if they disagree
               one of them is wrong. Where the SMILES is written aromatic (lower
               case) bond order cannot be compared, and the run says so.

  charge       an atom the SMILES gives a formal charge cannot be drawn at all,
               because mol.atoms has no charge field. Reported rather than
               silently dropped: the drawing of a cation as a neutral molecule
               is a molecule that does not exist.

  NH position  for a fused bicyclic base, WHICH ring nitrogen carries the H.
               Not a matter of taste: N9 is where the sugar attaches, so a base
               drawn 7H contradicts the nucleoside drawn a few cards later in
               the same file. The rule is graph-only - N9 is the five-ring N
               bonded to the fusion carbon whose other six-ring neighbour is a
               nitrogen - so nothing here is written from memory.

WHAT IT STILL DOES NOT CHECK. Stereochemistry, and whether the tautomer PubChem
happens to publish is the one a biochemistry course draws. The second is a
judgement call: it is reported for a human and never auto-corrected.

Exits non-zero if any hard check fails, so it can gate a commit.
"""
import io, os, re, sys, glob
from collections import Counter

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(HERE), "data")
NON_STRUCTURE_DATA = {"pronunciations.js"}

# Neutral valences, lowest first. A list means several are legitimate (S in a
# thioether vs in a sulfate). Anything above the last one is a valence error.
VALENCE = {"C": [4], "N": [3], "O": [2], "S": [2, 4, 6], "P": [3, 5],
           "F": [1], "Cl": [1], "Br": [1], "I": [1], "Se": [2, 4, 6]}
ORGANIC_SUBSET = set(VALENCE) | {"B"}


# Species whose valence is legitimately not the closed-shell one. Each needs a
# reason, and the list stays this short: it is an exemption from the strongest
# check in this script, not a place to park anything inconvenient.
RADICALS = {
    "nitric-oxide": "NO is a radical — N carries an unpaired electron, so its "
                    "seven valence electrons will never satisfy a closed-shell rule",
}


# Bases whose tautomer this project has NOT decided, and why. They are reported
# every run rather than quietly passed, because "we have not decided" is a
# different state from "this is right", and only one of them should be invisible.
UNDECIDED_TAUTOMER = {
    "hypoxanthine": "PubChem CID 135398638 calls itself 1,7-dihydropurin-6-one, and "
                    "this app draws no inosine, so there is no nucleoside here to "
                    "derive the 9H form from — a change would be an opinion",
    "xanthine": "PubChem CID 1188 calls itself 3,7-dihydropurine-2,6-dione, i.e. 7H "
                "is the accepted name for this compound, and no xanthosine is drawn "
                "here to argue otherwise",
}


def derived_h(el, order_sum, charge=0):
    """H implied by valence. -> (count, ok). ok is False when the bonds drawn
    exceed every legitimate valence, which is the signature of a charged atom
    drawn as a neutral one."""
    vals = VALENCE.get(el)
    if vals is None:
        return 0, True
    vals = [v + charge if el in ("N", "P") else v - (charge if charge < 0 else 0)
            for v in vals]
    for v in vals:
        if v >= order_sum:
            return v - order_sum, True
    return 0, False


# --------------------------------------------------------------------------
# the drawn graph
# --------------------------------------------------------------------------
def parse_mol(block):
    atoms = []
    for a in re.findall(r"\{([^}]*)\}", block):
        el = re.search(r'el:\s*"([A-Za-z]+)"', a)
        if not el:
            continue
        h = re.search(r"h:\s*(\d+)", a)
        atoms.append((el.group(1), int(h.group(1)) if h else None))
    bonds = []
    for b in re.findall(r"\[\s*\d+\s*,\s*\d+(?:\s*,\s*\d+)?\s*\]", block):
        n = [int(x) for x in re.findall(r"\d+", b)]
        bonds.append((n[0], n[1], n[2] if len(n) > 2 else 1))
    return atoms, bonds


# --------------------------------------------------------------------------
# the SMILES graph, written from scratch: this machine has no chemistry library
# (rdkit, openbabel and indigo were all checked for and are absent).
# --------------------------------------------------------------------------
BOND_CHAR = {"-": 1, "=": 2, "#": 3, ":": 0, "/": 1, "\\": 1}
TWO_LETTER = ["Cl", "Br", "Si", "Se"]


class SmilesError(Exception):
    pass


def parse_smiles(smi):
    """-> atoms [el, aromatic, charge, bracket_h_or_None], bonds [(i, j, order)].
    order 0 marks an aromatic bond, whose true order is deliberately not guessed."""
    atoms, bonds, ring, stack = [], [], {}, []
    prev, pending, i = None, None, 0
    while i < len(smi):
        c = smi[i]
        if c == "(":
            stack.append(prev); i += 1; continue
        if c == ")":
            prev = stack.pop(); i += 1; continue
        if c in BOND_CHAR:
            pending = 0 if c == ":" else BOND_CHAR[c]; i += 1; continue
        if c == ".":
            prev, pending, i = None, None, i + 1; continue
        if c == "%" or c.isdigit():
            if c == "%":
                label, i = smi[i + 1:i + 3], i + 3
            else:
                label, i = c, i + 1
            if label in ring:
                j, order = ring.pop(label)
                o = pending if pending is not None else order
                if o is None:
                    o = 0 if (atoms[j][1] and atoms[prev][1]) else 1
                bonds.append((j, prev, o))
            else:
                ring[label] = (prev, pending)
            pending = None
            continue
        if c == "[":
            j = smi.index("]", i)
            inner = smi[i + 1:j]
            m = re.match(r"\d*([A-Za-z][a-z]?)", inner)
            if not m:
                raise SmilesError("cannot read bracket atom [%s]" % inner)
            sym, rest = m.group(1), inner[m.end():]
            aromatic = sym[0].islower()
            sym = sym[0].upper() + sym[1:]
            hm = re.search(r"H(\d*)", rest)
            eh = (int(hm.group(1)) if hm.group(1) else 1) if hm else 0
            charge = 0
            cm = re.search(r"([-+])(\d*)", rest)
            if cm:
                run = re.match(r"[-+]+", rest[cm.start():]).group(0)
                n = int(cm.group(2)) if cm.group(2) else len(run)
                charge = n if cm.group(1) == "+" else -n
            atoms.append([sym, aromatic, charge, eh])
            i = j + 1
        else:
            sym = None
            for e in TWO_LETTER:
                if smi[i:i + 2] == e:
                    sym = e
                    break
            if sym is None:
                if not c.isalpha():
                    raise SmilesError("unexpected %r at %d in %s" % (c, i, smi))
                sym = c
            aromatic = sym[0].islower()
            atoms.append([sym[0].upper() + sym[1:], aromatic, 0, None])
            i += len(sym)
        idx = len(atoms) - 1
        if prev is not None:
            o = pending
            if o is None:
                o = 0 if (atoms[prev][1] and atoms[idx][1]) else 1
            bonds.append((prev, idx, o))
        prev, pending = idx, None
    if ring:
        raise SmilesError("unclosed ring label(s) %s in %s" % (sorted(ring), smi))
    return atoms, bonds


def smiles_h(atoms, bonds):
    """H per atom: bracket atoms state theirs, the rest get the valence rule.
    An aromatic atom has spent one unit of valence on the ring, so its bonds
    count as (number of connections) + 1."""
    conn = [[] for _ in atoms]
    for i, j, o in bonds:
        conn[i].append(o)
        conn[j].append(o)
    out = []
    for k, (sym, aromatic, charge, eh) in enumerate(atoms):
        if eh is not None:
            out.append(eh)
            continue
        if sym not in ORGANIC_SUBSET:
            raise SmilesError("%s outside brackets is not in the organic subset" % sym)
        used = sum(1 if o == 0 else o for o in conn[k])
        if aromatic:
            used += 1
        h, ok = derived_h(sym, used, charge)
        if not ok:
            raise SmilesError("atom %d (%s) in the SMILES has %d bonds, above its valence"
                              % (k, sym, used))
        out.append(h)
    return out


# --------------------------------------------------------------------------
# graph isomorphism: backtracking with label pruning. These molecules are small.
# --------------------------------------------------------------------------
def isomorphic(la, adja, lb, adjb, use_order=True, limit=600000):
    """-> True / False / None, where None means the search was cut off and is
    reported as such rather than counted as a pass."""
    if len(la) != len(lb):
        return False

    def sig(labels, adj, k):
        return (labels[k], tuple(sorted(
            (labels[m], adj[k][m] if use_order else 1) for m in adj[k])))

    siga = {k: sig(la, adja, k) for k in adja}
    sigb = {k: sig(lb, adjb, k) for k in adjb}
    if Counter(siga.values()) != Counter(sigb.values()):
        return False
    cands = {k: [m for m in adjb if sigb[m] == siga[k]] for k in adja}
    order = sorted(adja, key=lambda k: len(cands[k]))
    steps = [0]

    def bt(pos, mapping, used):
        if steps[0] > limit:
            return None
        steps[0] += 1
        if pos == len(order):
            return True
        k = order[pos]
        for m in cands[k]:
            if m in used:
                continue
            ok = True
            for nb, o in adja[k].items():
                if nb in mapping:
                    mo = adjb[m].get(mapping[nb])
                    if mo is None or (use_order and mo != o):
                        ok = False
                        break
            if not ok:
                continue
            mapping[k] = m
            used.add(m)
            r = bt(pos + 1, mapping, used)
            if r is None:
                return None
            if r:
                return True
            del mapping[k]
            used.discard(m)
        return False

    return bt(0, {}, set())


# --------------------------------------------------------------------------
# which ring N carries the H in a fused bicyclic base
# --------------------------------------------------------------------------
def rings_of_size(adj, natoms, size):
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
    for s in range(natoms):
        walk(s, [s])
    return [list(r) for r in out]


def base_nh(atoms, hcount, bonds):
    """Which ring N of a nucleobase carries the H. -> (verdict, explanation).

    THE POINT. N9 (purine) and N1 (pyrimidine) are the glycosidic positions: the
    sugar bonds there. So a free base whose H sits anywhere else contradicts the
    nucleoside drawn a few cards later in the same file, and contradicts every
    textbook drawing of the base. Both rules below are read off the graph, never
    off a remembered picture:

      purine     N9 is the five-ring N bonded to the fusion carbon whose other
                 six-ring neighbour is a nitrogen (that carbon is C4); N7 is the
                 five-ring N on the other fusion carbon (C5, whose other six-ring
                 neighbour is C6).
      pyrimidine C2 is the ring carbon between the two ring nitrogens. Of its two
                 nitrogens, the one whose other neighbour carries an exocyclic
                 heteroatom is N3; the other one is N1.

    A base with an H on BOTH (uracil, thymine, uric acid) is correct either way
    and is reported as such.
    """
    adj = {i: set() for i in range(len(atoms))}
    for i, j, o in bonds:
        adj[i].add(j)
        adj[j].add(i)
    five = rings_of_size(adj, len(atoms), 5)
    six = rings_of_size(adj, len(atoms), 6)
    if not six:
        return None, "no six-membered ring"

    # ---- purine: a five-ring fused to a six-ring
    for r5 in five:
        for r6 in six:
            shared = set(r5) & set(r6)
            if len(shared) != 2:
                continue
            found = {}
            for fusion in shared:
                out6 = [m for m in adj[fusion] if m in r6 and m not in shared]
                n5 = [m for m in adj[fusion] if m in r5 and m not in shared
                      and atoms[m][0] == "N"]
                if len(out6) != 1 or not n5:
                    continue
                found["N9" if atoms[out6[0]][0] == "N" else "N7"] = n5[0]
            if len(found) != 2:
                continue
            if any(m for n in found.values() for m in adj[n]
                   if m not in r5 and m not in r6):
                return "substituted", "a ring N carries a substituent — a nucleoside, not a free base"
            on = sorted(nm for nm, n in found.items() if hcount[n] > 0)
            if not on:
                return "bad", "purine drawn with an H on neither N7 nor N9"
            if on == ["N7", "N9"]:
                return "both", "H on both N7 and N9 — correct either way"
            if on == ["N9"]:
                return "ok", "H on N9, the glycosidic position — correct"
            return "bad", ("H on N7, but the sugar bonds at N9 — this is the 7H "
                           "tautomer, not the form the course draws")

    # ---- pyrimidine: one six-ring with two nitrogens
    for r6 in six:
        ns = [m for m in r6 if atoms[m][0] == "N"]
        if len(ns) != 2:
            continue
        c2 = [m for m in r6 if atoms[m][0] == "C" and len(set(adj[m]) & set(ns)) == 2]
        if len(c2) != 1:
            continue
        c2 = c2[0]
        found = {}
        for n in ns:
            other = [m for m in adj[n] if m in r6 and m != c2]
            if len(other) != 1:
                continue
            exo = [m for m in adj[other[0]] if m not in r6 and atoms[m][0] != "C"]
            found["N3" if exo else "N1"] = n
        if len(found) != 2:
            continue
        if any(m for n in found.values() for m in adj[n] if m not in r6):
            return "substituted", "a ring N carries a substituent — a nucleoside, not a free base"
        on = sorted(nm for nm, n in found.items() if hcount[n] > 0)
        if not on:
            return "bad", "pyrimidine drawn with an H on neither N1 nor N3"
        if on == ["N1", "N3"]:
            return "both", "H on both N1 and N3 — correct either way"
        if on == ["N1"]:
            return "ok", "H on N1, the glycosidic position — correct"
        return "bad", ("H on N3, but the sugar bonds at N1 — wrong tautomer for "
                       "the free base")
    return None, "not a recognisable nucleobase ring system"


# --------------------------------------------------------------------------
def main():
    files = sorted(glob.glob(os.path.join(DATA, "*.js")))
    files = [f for f in files if os.path.basename(f) not in NON_STRUCTURE_DATA]
    assert files, "no data files found in %s" % DATA

    total = drawn = aromatic_only = 0
    fails, notes, cut_off = [], [], []

    for path in files:
        base = os.path.basename(path)
        print("=== %s" % base)
        src = io.open(path, encoding="utf-8").read()
        here = 0
        for blk in re.split(r'(?=\{ key: ")', src):
            m = re.search(r'key:\s*"([^"]+)"', blk)
            if not m:
                continue
            sm = re.search(r'smiles:\s*"([^"]+)"', blk)
            fm = re.search(r'formula:\s*"([^"]+)"', blk)
            if not (sm and fm):
                continue
            key, smi, formula = m.group(1), sm.group(1), fm.group(1)
            name = "%s / %s" % (base, key)
            total += 1
            mb = re.search(r'mol:\s*\{(.*?bonds:\s*\[.*?\])\s*\}', blk, re.S)
            if not mb:
                continue
            drawn += 1
            here += 1
            atoms, bonds = parse_mol(mb.group(1))

            # the SMILES first: it tells us which atoms are charged, and a
            # charged atom's valence must not then be reported as an error.
            try:
                sa, sb = parse_smiles(smi)
                sh = smiles_h(sa, sb)
            except Exception as e:                      # reported, never swallowed
                fails.append("%s: SMILES will not parse (%s)" % (name, e))
                continue
            charged = [i for i, a in enumerate(sa) if a[2]]
            if charged:
                notes.append("%s: the SMILES gives a formal charge (%s) that the drawing "
                             "cannot carry — mol.atoms has no charge field"
                             % (name, ", ".join("%s%+d" % (sa[i][0], sa[i][2])
                                                for i in charged)))

            # ---- valence, and the hydrogen count derived from it
            order_sum = [0] * len(atoms)
            for i, j, o in bonds:
                order_sum[i] += o
                order_sum[j] += o
            hcount, bad_valence = [], False
            for k, (el, hdecl) in enumerate(atoms):
                h, ok = derived_h(el, order_sum[k])
                hcount.append(h)
                if not ok:
                    bad_valence = True
                    msg = ("%s: atom %d (%s) has %d bonds, above the valence of %s"
                           % (name, k, el, order_sum[k], el))
                    (notes if charged else fails).append(
                        msg + (" — consistent with the charge above" if charged else ""))
                elif hdecl is not None and hdecl != h and not charged:
                    fails.append("%s: atom %d (%s) is labelled H%d but its bonds imply H%d"
                                 % (name, k, el, hdecl, h))

            hm = re.search(r"H(\d*)(?![a-z])", formula)
            want_h = (int(hm.group(1)) if hm.group(1) else 1) if hm else 0
            if not bad_valence and not charged and key not in RADICALS \
                    and sum(hcount) != want_h:
                fails.append("%s: the bonds drawn imply %d H, formula says %d"
                             % (name, sum(hcount), want_h))

            # ---- the drawing against its own SMILES
            has_aromatic = any(o == 0 for _, _, o in sb)
            if has_aromatic:
                aromatic_only += 1
            la = {k: (atoms[k][0], hcount[k]) for k in range(len(atoms))}
            lb = {k: (sa[k][0], sh[k]) for k in range(len(sa))}
            adja = {k: {} for k in range(len(atoms))}
            for i, j, o in bonds:
                adja[i][j] = o
                adja[j][i] = o
            adjb = {k: {} for k in range(len(sa))}
            for i, j, o in sb:
                adjb[i][j] = o
                adjb[j][i] = o
            r = isomorphic(la, adja, lb, adjb, use_order=not has_aromatic)
            soft = charged or key in RADICALS
            if r is None:
                cut_off.append(name)
            elif not r:
                # Before calling it a mismatch, ask whether the two differ ONLY in
                # which Kekulé structure they picked. Same skeleton, same hydrogen
                # on every atom, different double-bond placement is a resonance
                # form, not a different molecule - and normalize_kekule.py creates
                # exactly that, deliberately, by redrawing a base in the textbook
                # form while the `smiles` field keeps PubChem's string (which for
                # the larger molecules carries stereo tags a redrawn SMILES would
                # lose). A real error cannot hide here: moving a double bond
                # anywhere else changes some atom's hydrogen count, and the H is
                # part of the label being matched.
                same_skeleton = (not has_aromatic and
                                 isomorphic(la, adja, lb, adjb, use_order=False) is True)
                if same_skeleton:
                    notes.append("%s: drawing and SMILES are the same molecule but "
                                 "different Kekulé structures — resonance forms, not "
                                 "an error" % name)
                else:
                    (notes if soft else fails).append(
                        "%s: drawing and SMILES are not the same molecule (element + H%s)%s"
                        % (name, "" if has_aromatic else " + bond order",
                           " — expected, %s" % RADICALS.get(key, "the charge cannot be drawn")
                           if soft else ""))

            # ---- where the H sits on a nucleobase
            if 8 <= len(atoms) <= 12 and sum(1 for a in atoms if a[0] == "N") >= 2:
                verdict, why = base_nh(atoms, hcount, bonds)
                if verdict == "bad" and key in UNDECIDED_TAUTOMER:
                    notes.append("%s: UNDECIDED — %s. %s"
                                 % (name, why, UNDECIDED_TAUTOMER[key]))
                elif verdict == "bad":
                    fails.append("%s: %s" % (name, why))
                elif verdict in ("ok", "both"):
                    notes.append("%s: %s" % (name, why))
        print("  %d drawn structures checked" % here)

    print()
    print("checked %d entries, %d of them drawn" % (total, drawn))
    print("%d SMILES are written aromatic, so bond order was not compared for those"
          % aromatic_only)
    if cut_off:
        print("SEARCH CUT OFF, not a pass: %s" % ", ".join(cut_off))
    print()
    if notes:
        print("--- reported for a human to judge, not failures ---")
        for n in notes:
            print("  %s" % n)
        print()
    if fails:
        print("--- FAILURES ---")
        for f in fails:
            print("  %s" % f)
        print()
        print("RESULT: %d failures" % len(fails))
        sys.exit(1)
    print("RESULT: no valence, hydrogen-count or drawing-vs-SMILES failures")


if __name__ == "__main__":
    main()
