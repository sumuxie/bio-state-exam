#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Draw every nucleobase ring in the Kekulé form a textbook draws it in.

WHAT THIS IS AND IS NOT. In adenine the double bond at C6 can be written C6=N1
or C6=C5. Both satisfy every valence, both carry the same hydrogens, and they are
the SAME aromatic molecule - two Kekulé structures of one resonance hybrid. So
this is not a correctness fix and this script does not pretend otherwise: no atom
moves, no hydrogen moves, no molecule changes. It is a drawing convention.

WHY IT IS WORTH DOING ANYWAY. PubChem's depiction picks C6=C5, every textbook
picks C6=N1, and a student comparing the two decides the app is wrong. It is the
form the reader recognises, so it is the form the card should show.

THE RULE, stated once and applied mechanically: within a nucleobase ring system,
choose the Kekulé structure in which a ring carbon carrying an exocyclic amino
group is double-bonded to a ring nitrogen. That is the amidine resonance form -
the one that shows why the amino group of adenine, guanine and cytosine is not
basic - and it picks the textbook drawing in all three cases: adenine C6=N1,
guanine C2=N3, cytosine C4=N3. Where the rule does not discriminate, the
lexicographically first assignment is taken so the result is deterministic.

HOW. All valid alternatives are ENUMERATED (perfect matchings over exactly the
ring atoms that already carry a double bond) rather than edited by hand, so the
result cannot be a structure nobody checked. Then it is asserted that

  * the atom list is untouched, element for element;
  * every atom's hydrogen count, derived from valence, is what it was;
  * every atom's total valence is still legal;
  * only bond ORDERS differ from the file on disk, never the bond list itself.

The `smiles` field is deliberately NOT rewritten. It is PubChem's string, fetched
with its CID, and for the larger molecules it carries the @/@@ stereo tags that
the drawing cannot hold - regenerating it would throw those away to fix a drawing
convention. check_bond_orders.py knows about this and reports a drawing that
differs from its SMILES only in Kekulé form as a note rather than a failure.

Usage:  python biochemie_struct/tools/normalize_kekule.py [--dry-run]
"""
import io, os, re, sys, glob, itertools

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from check_bond_orders import parse_mol, derived_h
from fix_base_tautomers import read_entries, mol_block, graph, h_from_valence, rings

DATA = os.path.join(os.path.dirname(HERE), "data")


def base_systems(atoms, bonds):
    """Ring atoms of every purine or pyrimidine ring system in the molecule."""
    adj = graph(atoms, bonds)
    n = len(atoms)
    five = [r for r in rings(adj, n, 5) if all(atoms[i][0] in ("C", "N") for i in r)]
    six = [r for r in rings(adj, n, 6) if all(atoms[i][0] in ("C", "N") for i in r)]
    out = []
    for r6 in six:
        if sum(1 for i in r6 if atoms[i][0] == "N") < 2:
            continue                      # a benzene ring is not a nucleobase
        system = set(r6)
        for r5 in five:
            if len(r5 & set(r6)) == 2 and sum(1 for i in r5 if atoms[i][0] == "N") >= 2:
                system |= r5
        if system not in out:
            out.append(system)
    return out


def matchings(nodes, edges):
    """Every perfect matching of `nodes` using `edges`. Small graphs only."""
    nodes = sorted(nodes)
    if not nodes:
        return [[]]
    a = nodes[0]
    out = []
    for (i, j) in edges:
        if a not in (i, j):
            continue
        b = j if i == a else i
        if b not in nodes:
            continue
        rest = [k for k in nodes if k not in (a, b)]
        sub = [(x, y) for (x, y) in edges if x in rest and y in rest]
        for m in matchings(rest, sub):
            out.append([(min(a, b), max(a, b))] + m)
    return out


def normalize(atoms, bonds):
    """-> new bonds, and the list of systems that were re-assigned."""
    adj = graph(atoms, bonds)
    order = {(min(i, j), max(i, j)): o for i, j, o in bonds}
    changed = []
    for system in base_systems(atoms, bonds):
        # atoms of the ring system that carry a double bond, minus the ones whose
        # double bond leaves the ring (guanine's C6=O): those are fixed points.
        free, fixed = [], []
        for k in system:
            partner = [m for m in adj[k] if adj[k][m] == 2]
            if not partner:
                continue
            (fixed if partner[0] not in system else free).append(k)
        ring_edges = [(min(i, j), max(i, j)) for i in system for j in adj[i]
                      if j in system and i < j]
        opts = matchings(free, ring_edges)
        if len(opts) < 2:
            continue

        def score(m):
            s = 0
            for (i, j) in m:
                for a, b in ((i, j), (j, i)):
                    if atoms[a][0] != "C" or atoms[b][0] != "N":
                        continue
                    # a ring carbon with an exocyclic amino nitrogen
                    if any(atoms[x][0] == "N" and x not in system and adj[a][x] == 1
                           for x in adj[a]):
                        s += 1
            return s

        # Only move when the rule actually has something to say. Where it does
        # not discriminate — the pyrimidinedione ring of a flavin, say, which has
        # no exocyclic amino group — every alternative scores the same, and
        # swapping one arbitrary Kekulé form for another arbitrary one would be
        # churn in a generated file for no reader's benefit.
        current = [(min(i, j), max(i, j)) for i in system for j in adj[i]
                   if j in system and i < j and adj[i][j] == 2]
        best = max(opts, key=lambda m: (score(m), [-x for e in m for x in e]))
        if score(best) <= score(current):
            continue
        chosen = {e: 2 for e in best}
        new = dict(order)
        for e in ring_edges:
            new[e] = chosen.get(e, 1)
        if new != order:
            changed.append(sorted(system))
            order = new
    return [(i, j, order[(min(i, j), max(i, j))]) for i, j, _ in bonds], changed


def fmt_bonds(bonds):
    return ", ".join("[%d,%d%s]" % (i, j, "" if o == 1 else ",%d" % o)
                     for i, j, o in bonds)


def main():
    dry = "--dry-run" in sys.argv
    touched = 0
    for path in sorted(glob.glob(os.path.join(DATA, "*.js"))):
        if os.path.basename(path) == "pronunciations.js":
            continue
        text = io.open(path, encoding="utf-8", newline="").read()
        original = text
        for key, (blk, _) in read_entries(text).items():
            m = re.search(r'mol:\s*\{(.*?bonds:\s*\[.*?\])\s*\}', blk, re.S)
            if not m:
                continue
            atoms, bonds = parse_mol(m.group(1))
            try:
                before_h = h_from_valence(atoms, bonds)
            except AssertionError:
                continue                  # charged species; left to a human
            new_bonds, changed = normalize(atoms, bonds)
            if not changed:
                continue
            after_h = h_from_valence(atoms, new_bonds)
            assert before_h == after_h, \
                "%s: normalising moved a hydrogen — refusing to write" % key
            assert [(i, j) for i, j, _ in bonds] == [(i, j) for i, j, _ in new_bonds], \
                "%s: the bond list itself changed — refusing to write" % key
            om = re.search(r"bonds:\s*\[(.*)\]\s*$", m.group(1), re.S)
            assert om, "%s: cannot locate the bonds array to rewrite" % key
            old_txt = om.group(1)
            new_blk = blk.replace(old_txt, fmt_bonds(new_bonds))
            assert text.count(blk) == 1
            text = text.replace(blk, new_blk)
            touched += 1
            print("  %-16s %s" % (key, "re-assigned %d ring system(s)" % len(changed)))
        if text != original:
            print("=== %s" % os.path.basename(path))
            if not dry:
                io.open(path, "w", encoding="utf-8", newline="\n").write(text)
    print("\n%d structures re-drawn%s" % (touched, " (--dry-run, nothing written)" if dry else ""))


if __name__ == "__main__":
    main()
