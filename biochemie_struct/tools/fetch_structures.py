#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fetch every candidate structure from PubChem, with provenance, and assert it before use.

WHY THIS EXISTS. The standing rule in this project is that a reference is never written
from memory: it is fetched, stored with its accession and retrieval date, and asserted
before it is used. The first 25 structures in this app were hand-drawn, and the header of
sugars.js says so honestly -- no `cid` field, because nobody had looked them up. Drawing
another 180 by hand would multiply that debt. PubChem is reachable from this machine, so
every structure from here on is FETCHED: CID, molecular formula, isomeric SMILES, and the
2D coordinates PubChem itself uses to depict it.

WHAT IS ASSERTED, per compound, before anything is written:
  1. heavy-atom composition parsed from the SMILES equals the composition parsed from the
     molecular formula (the same check check_structures.py runs, run here first so a bad
     record never reaches the data file);
  2. heavy-atom composition of the fetched 2D drawing equals both of the above;
  3. the drawing is a single connected graph, no self-bonds, no duplicate bonds;
  4. the name we ASKED FOR appears in PubChem's own synonym list for the CID we got back.
     This is the check that catches the real danger -- a name lookup silently returning a
     different molecule. Without it, asking for "cholate" and being handed the anion, or
     asking for a sugar and being handed the wrong anomer, would sail straight through
     every composition check, because a wrong molecule is perfectly self-consistent.
  5. net charge is zero. PubChem's name lookup returns the ANION for acids -- "pyruvate"
     is CID 107735 with a -1 charge -- while this app's convention, set by amino_acids.js,
     is the neutral un-ionised form. Anything charged is REPORTED, not silently accepted.

Anything that fails is written to the report and left OUT of the cache, so the generator
cannot pick it up. A compound this script cannot verify does not get drawn.

MANUAL rows (repeat units, branch points, the reduced ring of a coenzyme, a bare skeleton)
have no single PubChem compound. They are listed separately and skipped -- not faked.

Usage:  python biochemie_struct/tools/fetch_structures.py [--only key1,key2] [--limit N]
Output: biochemie_struct/tools/_pubchem_cache.json   (the data)
        biochemie_struct/tools/_fetch_report.txt     (what happened, per compound)
"""
import io, os, re, sys, json, time, urllib.parse, urllib.request, urllib.error, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
CANDIDATES = os.path.join(HERE, "structure_candidates.tsv")
QUERIES = os.path.join(HERE, "pubchem_queries.tsv")
CACHE = os.path.join(HERE, "_pubchem_cache.json")
REPORT = os.path.join(HERE, "_fetch_report.txt")
BASE = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound"
PAUSE = 0.25          # PubChem asks for no more than 5 requests/second
TIMEOUT = 30

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
log_lines = []
def p(*a):
    s = " ".join(str(x) for x in a)
    log_lines.append(s)
    print(s)

ELEMENTS = ["Cl", "Br", "Si", "Se", "C", "N", "O", "S", "P", "F", "I", "B", "H", "Fe", "Mg", "Co"]

# DOCUMENTED EXCEPTIONS. Two of this script's assertions fire on molecules that are
# perfectly correct, and the right response is to name the reason rather than to loosen
# the check for everything.
#
#   disconnected: PubChem's connection table for a metalloporphyrin or a corrin lists the
#   metal as its OWN fragment -- the Fe of heme, the Mg of chlorophyll, the Co of B12 are
#   not bonded to the four ring nitrogens in the depiction, they are drawn as an ion beside
#   the macrocycle. The molecule is right; "one connected graph" is simply the wrong
#   expectation for a coordination complex. NOTE: check_structures.py in this repo also
#   requires connectivity, so these three are fetched but CANNOT be emitted with a `mol`
#   drawing until that checker learns about coordination -- the generator emits them
#   without a drawing and says so.
#
#   charge: thiamine really is a cation. Its thiazolium ring carries a permanent positive
#   charge -- that is what makes C2 acidic enough to form the ylide that attacks pyruvate,
#   which is the whole reason the coenzyme works. Demanding a neutral form here would be
#   demanding a molecule that does not exist.
EXCEPTIONS = {
    "heme-b":        {"disconnected": "Fe is a separate fragment in PubChem's connection table (coordination, not covalent)"},
    "chlorophyll-a": {"disconnected": "Mg is a separate fragment in PubChem's connection table (coordination, not covalent)"},
    "cobalamin":     {"disconnected": "Co is a separate fragment in PubChem's connection table (coordination, not covalent)"},
    "thiamine":      {"charge": 1, "reason": "the thiazolium ring carries a real permanent +1; that charge is why C2 forms the ylide"},
}

# A row whose name is a CLASS or a GENERIC formula, drawn using one specific member.
# Without this the card shows a C16 molecule labelled "3-ketoacyl-CoA" and the reader
# memorises the chain length as part of the definition -- CORE3 flags exactly that.
# Keyed by structure key, appended to that entry's notes; keys absent here are untouched,
# so re-running the generator cannot alter any existing entry.
EXTRA_NOTES = {
    "enoyl-coa":       ["这里画 C16（反式-2-十六碳烯酰-CoA），与 acyl-CoA 的链长一致",
                        "链长不是这个中间物的一部分，β-氧化对任意长链走同一步"],
    "hydroxyacyl-coa": ["这里画 C16（3-羟基十六碳酰-CoA），与 acyl-CoA 的链长一致",
                        "链长不是这个中间物的一部分"],
    "ketoacyl-coa":    ["这里画 C16（3-氧代十六碳酰-CoA），与 acyl-CoA 的链长一致",
                        "链长不是这个中间物的一部分"],
    "pi":              ["磷脂酰肌醇是一类分子，这里取的是二油酰型",
                        "PubChem 上没有二棕榈酰型，所以酰基链与同组的 PA/PC/PE/PS（都是二棕榈酰）不同；比较这五个时只看头基"],
    "cardiolipin":     ["心磷脂是一类分子，这里取的是四亚油酰型",
                        "用通名 cardiolipin 查 PubChem 返回的是 −1 阴离子，本 app 画中性型，故改查具名种"],
    "cerebroside":     ["取的是半乳糖脑苷脂 galactosylceramide"],
    "ganglioside":     ["取的是 GM1"],
    # 重复单元与分支点：画的是「就是那个单元」的真实二糖/三糖，聚合物里两端还继续延伸。
    "amylose-unit":       ["画的是麦芽糖，它本身就是直链淀粉的重复单元（葡萄糖 α1→4 葡萄糖）",
                           "聚合物里这个单元两端还继续延伸，图上画不出来"],
    "cellulose-unit":     ["画的是纤维二糖，它本身就是纤维素的重复单元（葡萄糖 β1→4 葡萄糖）",
                           "β1→4 使相邻的糖环相对翻转 180°，这是纤维素能叠成直链纤维、而淀粉不能的原因"],
    "chitin-unit":        ["画的是几丁二糖（N,N'-二乙酰壳二糖），即几丁质的重复单元",
                           "与纤维二糖的差别只在 C2：羟基换成了乙酰氨基"],
    "amylopectin-branch": ["画的是潘糖：一条 α1→6 支链接在 α1→4 主链上，这就是分支点的化学"],
    "glycogen-branch":    ["画的也是潘糖——支链淀粉和糖原的分支点是同一种键（α1→6 接在 α1→4 主链上）",
                           "两者的差别在分支的密度，不在键的种类，所以结构图相同"],
    "dinucleotide-link":  ["画的是胞苷-3'→5'-鸟苷这个二核苷酸，用来展示 3'→5' 磷酸二酯键这一根键",
                           "碱基取哪两个不重要，重要的是连接两个核糖的那个磷酸"],
    # 还原型辅酶：画完整分子，不是截取的环。与 nad / fad 并排看才有意义。
    "nadh-ring":          ["画的是完整的 NADH，不是只截取烟酰胺环",
                           "还原发生在烟酰胺环 C4 上：它收下一个氢负离子 H⁻",
                           "但与 nad 那张并排比分子式会多出 2 个 H（C21H27N7O14P2 → C21H29N7O14P2）——"
                           "一个是 C4 收下的，另一个补在磷酸上，因为吡啶环那个正电荷没了；"
                           "PubChem 两条都按中性型存，所以差的是 2 不是 1"],
    "fadh2-ring":         ["画的是完整的 FADH₂，不是只截取异咯嗪环",
                           "与 FAD 那张并排看，差别就是异咯嗪环 N1/N5 上多出来的两个 H"],
}

def heavy_from_smiles(smi):
    counts, i = {}, 0
    while i < len(smi):
        ch = smi[i]
        if ch == "[":
            j = smi.index("]", i)
            m = re.match(r"\d*([A-Za-z][a-z]?)", smi[i + 1:j])
            if not m:
                raise ValueError("cannot read bracket atom in %s" % smi)
            sym = m.group(1)
            sym = sym[0].upper() + sym[1:]
            if sym != "H":
                counts[sym] = counts.get(sym, 0) + 1
            i = j + 1
            continue
        if ch.isalpha():
            sym = None
            for e in ELEMENTS:
                if smi[i:i + len(e)] == e:
                    sym = e
                    break
            if sym is None and ch.lower() in "bcnops":
                sym = ch.upper()
            if sym is None:
                raise ValueError("unknown element at %d in %s" % (i, smi))
            if sym != "H":
                counts[sym] = counts.get(sym, 0) + 1
            i += len(sym)
            continue
        i += 1
    return counts

def heavy_from_formula(f):
    counts = {}
    for sym, num in re.findall(r"([A-Z][a-z]?)(\d*)", f):
        if not sym or sym == "H":
            continue
        counts[sym] = counts.get(sym, 0) + (int(num) if num else 1)
    return counts

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "bio-state-exam structure fetch"})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        return r.read().decode("utf-8", "replace")

def parse_sdf(sdf):
    """Heavy-atom graph out of a V2000 molfile: coordinates, elements, bonds, H counts.

    Hydrogens are dropped from the drawing (this app draws heavy atoms and writes the
    hydrogen count as `h:` on the atom it hangs off), but they are COUNTED per heavy atom
    first, so an -OH still renders as OH rather than as a bare O.
    """
    lines = sdf.splitlines()
    counts_line = lines[3]
    na, nb = int(counts_line[0:3]), int(counts_line[3:6])
    atoms, bonds = [], []
    for i in range(na):
        L = lines[4 + i]
        atoms.append({"x": float(L[0:10]), "y": float(L[10:20]), "el": L[31:34].strip()})
    for i in range(nb):
        L = lines[4 + na + i]
        bonds.append((int(L[0:3]) - 1, int(L[3:6]) - 1, int(L[6:9])))
    charge = 0
    for L in lines[4 + na + nb:]:
        if L.startswith("M  CHG"):
            nums = [int(x) for x in L.split()[3:]]
            charge += sum(nums[1::2])
        if L.startswith("M  END"):
            break
    # split heavy / hydrogen
    heavy_idx = [i for i, a in enumerate(atoms) if a["el"] != "H"]
    remap = {old: new for new, old in enumerate(heavy_idx)}
    hcount = {i: 0 for i in heavy_idx}
    for i, j, order in bonds:
        if atoms[i]["el"] == "H" and atoms[j]["el"] != "H":
            hcount[j] = hcount.get(j, 0) + 1
        elif atoms[j]["el"] == "H" and atoms[i]["el"] != "H":
            hcount[i] = hcount.get(i, 0) + 1
    hbonds = [(remap[i], remap[j], order) for i, j, order in bonds
              if atoms[i]["el"] != "H" and atoms[j]["el"] != "H"]
    hatoms = [{"el": atoms[i]["el"], "x": atoms[i]["x"], "y": atoms[i]["y"], "h": hcount[i]}
              for i in heavy_idx]
    return hatoms, hbonds, charge

def connected(n, bonds):
    if n == 0:
        return False
    adj = {}
    for i, j, _ in bonds:
        adj.setdefault(i, []).append(j)
        adj.setdefault(j, []).append(i)
    stack, seen = [0], {0}
    while stack:
        a = stack.pop()
        for b in adj.get(a, []):
            if b not in seen:
                seen.add(b)
                stack.append(b)
    return len(seen) == n

def norm_name(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())

def main():
    only = None
    limit = None
    for i, a in enumerate(sys.argv):
        if a == "--only" and i + 1 < len(sys.argv):
            only = set(sys.argv[i + 1].split(","))
        if a == "--limit" and i + 1 < len(sys.argv):
            limit = int(sys.argv[i + 1])

    queries = {}
    for line in io.open(QUERIES, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        k, v = line.split("\t")
        queries[k.strip()] = v.strip()

    rows = []
    for line in io.open(CANDIDATES, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        parts = line.split("\t")
        assert len(parts) == 5, "bad candidate row: %r" % line[:80]
        rows.append(parts)

    cache = {}
    if os.path.exists(CACHE):
        cache = json.load(io.open(CACHE, encoding="utf-8"))
        p("loaded %d cached compounds" % len(cache))

    today = datetime.date.today().isoformat()
    p("PubChem fetch, %s. candidates %d, already cached %d" % (today, len(rows), len(cache)))
    p("")

    manual, ok, failed, skipped = [], [], [], []
    for grp, key, cn, en, _probe in rows:
        if only and key not in only:
            continue
        q = queries.get(key, en)
        if q == "MANUAL":
            manual.append((key, en))
            continue
        if key in cache:
            skipped.append(key)
            continue
        if limit is not None and len(ok) + len(failed) >= limit:
            break
        try:
            url = ("%s/name/%s/property/MolecularFormula,SMILES,Title/JSON"
                   % (BASE, urllib.parse.quote(q, safe="")))
            props = json.loads(get(url))["PropertyTable"]["Properties"][0]
            time.sleep(PAUSE)
            cid = props["CID"]
            formula = props["MolecularFormula"]
            smiles = props["SMILES"]
            title = props.get("Title", "")

            syn = json.loads(get("%s/cid/%d/synonyms/JSON" % (BASE, cid)))
            time.sleep(PAUSE)
            names = syn["InformationList"]["Information"][0].get("Synonym", [])

            sdf = get("%s/cid/%d/record/SDF?record_type=2d" % (BASE, cid))
            time.sleep(PAUSE)
            atoms, bonds, charge = parse_sdf(sdf)

            problems, notes = [], list(EXTRA_NOTES.get(key, []))
            hs, hf = heavy_from_smiles(smiles), heavy_from_formula(formula)
            if hs != hf:
                problems.append("SMILES heavy atoms %s != formula %s" % (hs, hf))
            hm = {}
            for a in atoms:
                hm[a["el"]] = hm.get(a["el"], 0) + 1
            if hm != hf:
                problems.append("drawing heavy atoms %s != formula %s" % (hm, hf))
            exc = EXCEPTIONS.get(key, {})
            if not connected(len(atoms), bonds):
                if "disconnected" in exc:
                    notes.append("disconnected drawing ACCEPTED: %s" % exc["disconnected"])
                else:
                    problems.append("drawing is not a single connected graph")
            seen = set()
            for i, j, _o in bonds:
                if i == j:
                    problems.append("self-bond at %d" % i)
                if (min(i, j), max(i, j)) in seen:
                    problems.append("duplicate bond %d-%d" % (i, j))
                seen.add((min(i, j), max(i, j)))
            # RING COUNT vs WHAT THE ROW CLAIMS. This is the check that caught the first
            # real error: asking PubChem for "D-ribose" returns the RING form (10 atoms,
            # 10 bonds -> 1 ring), but the row that asked for it is the OPEN-CHAIN row.
            # Every composition check passed -- open and closed forms are the same atoms --
            # so nothing else would ever have noticed. Open-chain sugars need the
            # aldehydo-/keto- names, and this assertion is what forces that.
            rings = len(bonds) - len(atoms) + 1
            enl = en.lower()
            if "open chain" in enl and rings != 0:
                problems.append("row says OPEN CHAIN but the fetched drawing has %d ring(s)"
                                " -- use the aldehydo-/keto- name" % rings)
            if ("pyranose" in enl or "furanose" in enl) and rings < 1:
                problems.append("row says a ring form but the fetched drawing has no ring")
            if charge != 0:
                if exc.get("charge") == charge:
                    notes.append("net charge %+d ACCEPTED: %s" % (charge, exc["reason"]))
                else:
                    problems.append("NET CHARGE %+d -- PubChem returned an ion; this app draws "
                                    "the neutral form, add a neutral query name to "
                                    "pubchem_queries.tsv" % charge)
            nq = norm_name(q)
            if nq not in {norm_name(s) for s in names} and nq != norm_name(title):
                problems.append("asked for %r but CID %d is titled %r and does not list that "
                                "name among its %d synonyms -- WRONG MOLECULE?"
                                % (q, cid, title, len(names)))

            if problems:
                failed.append((key, q, cid, problems))
                p("FAIL  %-20s %-40s CID %s" % (key, q[:40], cid))
                for pr in problems:
                    p("        %s" % pr)
                continue

            cache[key] = {"key": key, "group": grp, "cn": cn, "en": en, "query": q,
                          "cid": cid, "formula": formula, "smiles": smiles, "title": title,
                          "atoms": atoms, "bonds": bonds, "fetched": today,
                          "connected": connected(len(atoms), bonds),
                          "charge": charge, "notes": notes,
                          "source": "PubChem PUG REST, %s" % today}
            ok.append(key)
            p("ok    %-20s %-40s CID %-9s %-14s %2d atoms %2d bonds%s"
              % (key, q[:40], cid, formula, len(atoms), len(bonds),
                 "  [exception]" if key in EXCEPTIONS else ""))
            for nt in notes:
                p("        %s" % nt)
        except urllib.error.HTTPError as e:
            failed.append((key, q, None, ["HTTP %s" % e.code]))
            p("FAIL  %-20s %-40s HTTP %s" % (key, q[:40], e.code))
        except Exception as e:
            failed.append((key, q, None, [repr(e)]))
            p("FAIL  %-20s %-40s %r" % (key, q[:40], e))

    p("")
    p("fetched ok %d | failed %d | already cached %d | MANUAL (no single PubChem compound) %d"
      % (len(ok), len(failed), len(skipped), len(manual)))
    if failed:
        p("")
        p("FAILED -- these are NOT in the cache and will NOT be drawn:")
        for key, q, cid, probs in failed:
            p("  %-20s query %-38s cid %s" % (key, q, cid))
            for pr in probs:
                p("      %s" % pr)
    if manual:
        p("")
        p("MANUAL -- no single PubChem compound exists for these; draw by hand or drop:")
        for key, en in manual:
            p("  %-20s %s" % (key, en))

    json.dump(cache, io.open(CACHE, "w", encoding="utf-8"), ensure_ascii=False, indent=1, sort_keys=True)
    io.open(REPORT, "w", encoding="utf-8").write("\n".join(log_lines) + "\n")
    p("")
    p("cache now holds %d compounds -> %s" % (len(cache), CACHE))

main()
