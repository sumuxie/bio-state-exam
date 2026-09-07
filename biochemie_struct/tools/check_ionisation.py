#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Assert the pH-7 form app.js draws is the molecule the entry declares.

WHY THIS EXISTS. app.js does not store the ionised structures; it derives them
from the neutral `mol` graph at render time, because the neutral graph is the
one check_structures.py and check_bond_orders.py verify against `smiles` and
`formula`. That keeps the stored data verifiable, but it moves a chemical claim
into rendering code, where neither of those scripts can see it. Twenty ionised
drawings nobody checks is the failure this project exists to avoid, so the rule
is re-implemented here, independently, and its output asserted.

WHAT IT CHECKS
    alpha site   exactly one carbon bonded both to an N and to a carboxyl C.
                 Asp/Glu carry a second carboxyl and Lys/Arg side-chain
                 nitrogens, so either half alone is ambiguous; requiring both
                 at one carbon is what picks the alpha position, and "exactly
                 one" is asserted rather than assumed.
    hydrogen     every ionised atom's H recomputed from its bond orders and its
                 formal charge, not from the stored `h` plus one.
    side chain   `sc7` must point at a real atom, not at the alpha site, and
                 must survive the same valence check.
    net charge   what the finished drawing adds up to, against the separately
                 declared `q7`. Two independently authored numbers: a wrong
                 `sc7` index that still ionises something fails here.

WHAT IT DOES NOT CHECK. Whether `q7` itself is the right chemistry -- it is a
declaration, checked for consistency with the drawing, not against a source.
The side-chain pKa values behind those numbers are deliberately NOT recorded
here: this project does not write reference data from memory, and they have not
been fetched. Stereochemistry remains unverified, as everywhere else.

Exits non-zero on failure so it can gate a commit.
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(HERE), "data")

# Neutral valences. Only the atoms these drawings actually ionise need to be
# right, but the rule is written generally so a future group cannot quietly
# rely on a missing entry.
VALENCE = {"C": 4, "N": 3, "O": 2, "S": 2, "P": 3}
LONE_PAIR = {"N", "O", "S", "P"}


def derived_h(el, used, q):
    """H implied by bonds and formal charge, or None if the bonds exceed it.

    A cation on an atom with a lone pair gains a bond (that pair becomes the
    bond to the new proton): N+ is four-bonded. Carbon has no lone pair and a
    carbocation is three-bonded, hence the split. An anion loses one either way.
    """
    v = VALENCE.get(el)
    if v is None:
        return None
    v = (v + q if el in LONE_PAIR else v - q) if q > 0 else v + q
    return v - used if v >= used else None


def parse_entries(src):
    for blk in re.split(r'(?=\{ key: ")', src):
        m = re.search(r'key:\s*"([^"]+)"', blk)
        mb = re.search(r'mol:\s*\{(.*?bonds:\s*\[.*?\])\s*\}', blk, re.S)
        if not (m and mb):
            continue
        body = mb.group(1)
        atoms = []
        for a in re.findall(r"\{([^}]*)\}", body):
            el = re.search(r'el:\s*"([A-Za-z]+)"', a)
            if not el:
                continue
            h = re.search(r"h:\s*(\d+)", a)
            atoms.append({"el": el.group(1), "h": int(h.group(1)) if h else 0})
        bonds = []
        for b in re.findall(r"\[\s*\d+\s*,\s*\d+(?:\s*,\s*\d+)?\s*\]", body):
            n = [int(x) for x in re.findall(r"\d+", b)]
            bonds.append((n[0], n[1], n[2] if len(n) > 2 else 1))
        q7 = re.search(r"q7:\s*(-?\d+)", blk)
        sc7 = re.search(r"sc7:\s*\{\s*at:\s*(\d+),\s*q:\s*(-?\d+)\s*\}", blk)
        yield {
            "key": m.group(1), "atoms": atoms, "bonds": bonds,
            "q7": int(q7.group(1)) if q7 else None,
            "sc7": (int(sc7.group(1)), int(sc7.group(2))) if sc7 else None,
        }


def check(e):
    atoms, bonds = e["atoms"], e["bonds"]
    problems = []
    nbr = [[] for _ in atoms]
    used = [0] * len(atoms)
    for i, j, o in bonds:
        nbr[i].append((j, o))
        nbr[j].append((i, o))
        used[i] += o
        used[j] += o

    def carboxyl_oh(c):
        if atoms[c]["el"] != "C":
            return -1
        d = oh = -1
        for at, o in nbr[c]:
            if atoms[at]["el"] != "O":
                continue
            if o == 2:
                d = at
            elif o == 1 and atoms[at]["h"] > 0:
                oh = at
        return oh if (d >= 0 and oh >= 0) else -1

    sites = []
    for i, a in enumerate(atoms):
        if a["el"] != "C":
            continue
        ns = [n for n, _ in nbr[i] if atoms[n]["el"] == "N"]
        cs = [n for n, _ in nbr[i] if carboxyl_oh(n) >= 0]
        if ns and cs:
            sites.append((i, ns, cs))
    if len(sites) != 1:
        return ["the alpha-carbon rule matches %d atoms, not 1" % len(sites)], None
    ca, ns, cs = sites[0]
    if len(ns) != 1:
        problems.append("alpha-carbon carries %d nitrogens" % len(ns))
    if len(cs) != 1:
        problems.append("alpha-carbon carries %d carboxyls" % len(cs))
    if problems:
        return problems, None

    charges = {}
    n_idx, o_idx = ns[0], carboxyl_oh(cs[0])
    for idx, q, what in ((n_idx, 1, "alpha-N"), (o_idx, -1, "alpha-O")):
        h = derived_h(atoms[idx]["el"], used[idx], q)
        if h is None:
            problems.append("%s: %s with %d bonds cannot carry %+d"
                            % (what, atoms[idx]["el"], used[idx], q))
        else:
            charges[idx] = q

    if e["sc7"]:
        at, q = e["sc7"]
        if not (0 <= at < len(atoms)):
            problems.append("sc7 points at atom %d, which does not exist" % at)
        elif at in (n_idx, o_idx):
            problems.append("sc7 points at the alpha site, not a side chain")
        else:
            h = derived_h(atoms[at]["el"], used[at], q)
            if h is None:
                problems.append("sc7: %s with %d bonds cannot carry %+d"
                                % (atoms[at]["el"], used[at], q))
            else:
                charges[at] = q

    net = sum(charges.values())
    if e["q7"] is None:
        problems.append("no q7 declared, so the net charge is unchecked")
    elif net != e["q7"]:
        problems.append("drawing sums to %+d but q7 declares %+d" % (net, e["q7"]))
    return problems, net


def main():
    path = os.path.join(DATA, "amino_acids.js")
    src = io.open(path, encoding="utf-8").read()
    print("=== %s" % os.path.basename(path))
    total = fails = 0
    tally = {}
    for e in parse_entries(src):
        total += 1
        problems, net = check(e)
        if problems:
            fails += 1
            for p in problems:
                print("  FAIL %-5s %s" % (e["key"], p))
        else:
            tally[net] = tally.get(net, 0) + 1
    # Print the counts. A checker that reports "all pass" over zero entries has
    # happened in this project before; the distribution makes that visible.
    assert total, "no entries parsed out of %s" % path
    print("  %d amino acids checked" % total)
    for q in sorted(tally):
        print("    net %+d : %d" % (q, tally[q]))
    print()
    print("covered    : one unambiguous alpha site; every ionised H re-derived from")
    print("             bond orders and charge; sc7 in range and not the alpha site;")
    print("             the drawn net charge equals the independently declared q7")
    print("NOT covered: whether q7 is the right chemistry, side-chain pKa (not fetched),")
    print("             stereochemistry")
    if fails:
        sys.exit(1)
    print("RESULT: every pH-7 form matches its declared charge")


if __name__ == "__main__":
    main()
